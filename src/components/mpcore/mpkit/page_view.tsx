import { PureComponent } from "react";
import { MPComponentsProps } from "../component";
import Swiper from "swiper";
import { cssConstraints } from "../utils/geometry";

export class MPPageView extends PureComponent<{ data: MPComponentsProps }> {
  ref = `swiper-container-${Math.random().toString().replace(".", "")}`;
  swiperInstance: Swiper | undefined;

  componentDidMount() {
    setTimeout(() => {
      this.swiperInstance = new Swiper("." + this.ref, {
        direction:
          this.props.data.attributes.scrollDirection === "Axis.vertical"
            ? "vertical"
            : "horizontal",
        loop: this.props.data.attributes.loop,
      });
    }, 0);
  }

  componentDidUpdate() {
    this.swiperInstance?.changeDirection(
      this.props.data.attributes.scrollDirection === "Axis.vertical"
        ? "vertical"
        : "horizontal"
    );
  }

  render() {
    return (
      <div
        style={{
          ...cssConstraints(this.props.data.constraints),
          overflow: "hidden",
        }}
        className={this.ref}
      >
        <div className="swiper-wrapper">
          {(this.props.children as any[]).map((it, idx) => {
            return (
              <div key={`swiper-slide-${idx}`} className="swiper-slide">
                {it}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

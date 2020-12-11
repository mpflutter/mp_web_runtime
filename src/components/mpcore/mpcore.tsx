import { Align } from "./components/align";
import { ColoredBox } from "./components/colored_box";
import { ConstrainedBox } from "./components/constrained_box";
import { Flex } from "./components/flex";
import { RichText } from "./components/rich_text";
import { Padding } from "./components/padding";
import { ListView } from "./components/list_view";
import { SizedBox } from "./components/sized_box";
import { DecoratedBox } from "./components/decorated_box";
import { Divider } from "./components/divider";
import { Image } from "./components/image";
import { ClipOval } from "./components/clip_oval";
import { ClipRRect } from "./components/clip_r_rect";
import { Opacity } from "./components/opacity";
import { Flexible } from "./components/flexible";
import { GestureDetector } from "./components/gesture_detector";
import { Stack } from "./components/stack";
import { Positioned } from "./components/positioned";
import { Visibility } from "./components/visibility";
import { Offstage } from "./components/offstage";
import { Transform } from "./components/transform";
import { AbsorbPointer } from "./components/absorb_pointer";
import { IgnorePointer } from "./components/ignore_pointer";
import { Icon } from "./components/icon";
import { CustomScrollView } from "./components/custom_scroll_view";
import { SliverList } from "./components/sliver_list";
import { Div } from "./components/div";
import { EditableText } from "./components/editable_text";
import { ComponentType, createElement, ReactElement } from "react";
import { MPComponentsProps } from "./component";
import { MPPlugin } from "./plugin";

export class MPCore {
  static components: { [key: string]: ComponentType<any> } = {
    colored_box: ColoredBox,
    align: Align,
    constrained_box: ConstrainedBox,
    rich_text: RichText,
    flex: Flex,
    padding: Padding,
    list_view: ListView,
    sized_box: SizedBox,
    decorated_box: DecoratedBox,
    divider: Divider,
    image: Image,
    clip_oval: ClipOval,
    clip_r_rect: ClipRRect,
    opacity: Opacity,
    flexible: Flexible,
    gesture_detector: GestureDetector,
    stack: Stack,
    positioned: Positioned,
    visibility: Visibility,
    offstage: Offstage,
    transform: Transform,
    absorb_pointer: AbsorbPointer,
    ignore_pointer: IgnorePointer,
    icon: Icon,
    custom_scroll_view: CustomScrollView,
    sliver_list: SliverList,
    div: Div,
    editable_text: EditableText,
  };

  static plugins: MPPlugin[] = [];

  static registerPlugin(plugin: MPPlugin) {
    for (const key in plugin.components) {
      this.components[key] = plugin.components[key];
    }
    this.plugins.push(plugin);
  }

  static render(data: MPComponentsProps, key?: string): ReactElement | null {
    if (!this.components[data.name]) return null;
    return createElement(
      this.components[data.name],
      { key, data: data } as any,
      data.children?.map((it: any, index: number) =>
        this.render(it, `item_${index}`)
      )
    );
  }
}

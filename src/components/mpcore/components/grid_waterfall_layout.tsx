import { DivContextProvider } from "./div_context";

const clientWidth = document.body.clientWidth;

export interface SliverGridDelegateWithFixedCrossAxisCount {
  mainAxisSpacing: number;
  crossAxisSpacing: number;
  crossAxisCount: number;
  childAspectRatio: number;
}

export const renderSliverGridDelegateWithFixedCrossAxisCount = (
  delegate: SliverGridDelegateWithFixedCrossAxisCount,
  children: any[]
): any[] => {
  return children.map((it, idx) => {
    const itemWidth =
      (clientWidth -
        delegate.crossAxisSpacing * (delegate.crossAxisCount - 1)) /
      delegate.crossAxisCount;
    const marginRight =
      (idx + 1) % delegate.crossAxisCount === 0
        ? "unset"
        : `${delegate.crossAxisSpacing}px`;
    const marginTop =
      idx / delegate.crossAxisCount >= 1
        ? `${delegate.mainAxisSpacing}px`
        : "unset";
    return (
      <div
        key={`layout_${idx}`}
        style={{
          width: itemWidth + "px",
          height: itemWidth / delegate.childAspectRatio + "px",
          marginRight,
          marginTop,
        }}
      >
        <DivContextProvider style={{ minWidth: "100%", minHeight: "100%" }}>
          {it}
        </DivContextProvider>
      </div>
    );
  });
};

export interface SliverGridDelegateWithMaxCrossAxisExtent {
  mainAxisSpacing: number;
  crossAxisSpacing: number;
  maxCrossAxisExtent: number;
  childAspectRatio: number;
}

export const renderSliverGridDelegateWithMaxCrossAxisExtent = (
  delegate: SliverGridDelegateWithMaxCrossAxisExtent,
  children: any[]
): any[] => {
  const crossAxisCount = Math.ceil(clientWidth / delegate.maxCrossAxisExtent);

  return children.map((it, idx) => {
    const itemWidth =
      (clientWidth - delegate.crossAxisSpacing * (crossAxisCount - 1)) /
      crossAxisCount;
    const marginRight =
      (idx + 1) % crossAxisCount === 0
        ? "unset"
        : `${delegate.crossAxisSpacing}px`;
    const marginTop =
      idx / crossAxisCount >= 1 ? `${delegate.mainAxisSpacing}px` : "unset";
    return (
      <div
        key={`layout_${idx}`}
        style={{
          width: itemWidth + "px",
          height: itemWidth / delegate.childAspectRatio + "px",
          marginRight,
          marginTop,
        }}
      >
        <DivContextProvider style={{ minWidth: "100%", minHeight: "100%" }}>
          {it}
        </DivContextProvider>
      </div>
    );
  });
};

export interface SliverWaterfallDelegate {
  mainAxisSpacing: number;
  crossAxisSpacing: number;
  crossAxisCount: number;
}

export const renderSliverWaterfallDelegate = (
  delegate: SliverWaterfallDelegate,
  children: any[]
): any[] => {
  const itemWidth =
    (clientWidth - delegate.crossAxisSpacing * (delegate.crossAxisCount - 1)) /
    delegate.crossAxisCount;
  let maxY = 0.0;
  let currentRowIndex = 0;
  let layoutCache: any[] = [];

  const layouts = children.map((it, idx) => {
    const itemHeight = it.props?.data?.attributes?.height ?? 0.0;
    let currentY: number;

    for (
      let index = currentRowIndex;
      index < delegate.crossAxisCount;
      index++
    ) {
      const nextIndex = index + 1 >= delegate.crossAxisCount ? 0 : index + 1;
      if (layoutCache[index] && layoutCache[nextIndex]) {
        if (
          layoutCache[nextIndex].y + layoutCache[nextIndex].height <
          layoutCache[index].y + layoutCache[index].height
        ) {
          currentRowIndex = nextIndex;
          break;
        } else {
          currentRowIndex = index;
          break;
        }
      } else {
        currentRowIndex = index;
        break;
      }
    }

    if (layoutCache[currentRowIndex]) {
      currentY =
        layoutCache[currentRowIndex].y + layoutCache[currentRowIndex].height;
      if (idx >= delegate.crossAxisCount) {
        currentY += delegate.mainAxisSpacing;
      }
    } else {
      currentY = 0.0;
    }
    const size = {
      x:
        itemWidth * currentRowIndex +
        currentRowIndex * delegate.crossAxisSpacing,
      y: currentY,
      width: itemWidth,
      height: itemHeight,
    };
    if (currentY + itemHeight > maxY) {
      maxY = currentY + itemHeight;
    }
    layoutCache[currentRowIndex] = size;
    currentRowIndex = (currentRowIndex + 1) % delegate.crossAxisCount;
    return size;
  });

  return children.map((it, idx) => {
    return (
      <div
        key={`layout_${idx}`}
        style={{
          position: "absolute",
          left: layouts[idx].x + "px",
          top: layouts[idx].y + "px",
          width: layouts[idx].width + "px",
          height: layouts[idx].height + "px",
        }}
      >
        <DivContextProvider style={{ minWidth: "100%", minHeight: "100%" }}>
          {it}
        </DivContextProvider>
      </div>
    );
  });
};

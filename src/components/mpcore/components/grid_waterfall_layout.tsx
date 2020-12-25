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
      <DivContextProvider
        key={`layout_${idx}`}
        style={{
          width: itemWidth + "px",
          height: itemWidth / delegate.childAspectRatio + "px",
          marginRight,
          marginTop,
        }}
      >
        {it}
      </DivContextProvider>
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
      <DivContextProvider
        key={`layout_${idx}`}
        style={{
          width: itemWidth + "px",
          height: itemWidth / delegate.childAspectRatio + "px",
          marginRight,
          marginTop,
        }}
      >
        {it}
      </DivContextProvider>
    );
  });
};

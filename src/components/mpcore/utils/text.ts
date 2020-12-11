import { cssColor } from "./color";

function getFontWeightStyle(data: any) {
    if (data.fontWeight) {
        return data.fontWeight.replace("FontWeight.w", "");
    }
    return undefined;
}

function getFontStyleStyle(data: any) {
    if (data.fontStyle === "FontStyle.italic") {
        return "italic";
    }
    return undefined;
}

function getBaselineStyle(data: any) {
    if (data.textBaseline === "TextBaseline.alphabetic") {
        return "alphabetic";
    } else if (data.textBaseline === "TextBaseline.ideographic") {
        return "ideographic";
    }
    return undefined;
}

export function cssTextStyle(data: any) {
    let style = "";

    if (data != null) {
        if (data.fontFamily) {
            style += `font-family: ${data.fontFamily};`;
        }
        if (data.fontSize != null) {
            style += `font-size: ${(data.fontSize ?? 14).toString()}px;`;
        }
        if (data.color != null) {
            style += `color: ${cssColor(data.color)};`;
        }
        if (data.fontWeight) {
            style += `font-weight: ${getFontWeightStyle(data)};`;
        }
        if (data.fontStyle) {
            style += `font-style: ${getFontStyleStyle(data)};`;
        }
        if (data.letterSpacing) {
            style += `letter-spacing: ${data.letterSpacing};`;
        }
        if (data.wordSpacing) {
            style += `word-spacing: ${data.wordSpacing};`;
        }
        if (data.textBaseline) {
            style += `alignment-baseline: ${getBaselineStyle(data)};`;
        }
        if (data.height) {
            style += `height: ${data.height};`;
        }
        if (data.backgroundColor != null) {
            style += `background-color: ${cssColor(data.backgroundColor)};`;
        }
    }
    return style;
}

export const cssTextAlign = (value: any) => {
    return value?.replace("TextAlign.", "");
};

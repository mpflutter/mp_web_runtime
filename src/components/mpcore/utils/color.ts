export const cssColor = (value: string) => {
    const intValue = parseInt(value);

    return `rgba(${(intValue >> 16) & 0xff}, ${(intValue >> 8) &
        0xff}, ${(intValue >> 0) & 0xff}, ${((intValue >> 24) & 0xff) /
        255.0})`;
};

/**
 * Convert px value to rem using base 16px
 * @example
 * pxToRem('16px') -> 1rem
 * @param {String} px the pixel unit to convert
 */
const pxToRem = px => (`${px.replace('px', '') / 16}rem`);

export default pxToRem;

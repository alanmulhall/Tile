import pxToRem from './pxToRem';

describe('pxToRem', () => {
  it('converts px to rem correctly', () => {
    expect(pxToRem('16px')).toEqual('1rem');
    expect(pxToRem('8px')).toEqual('0.5rem');
  });
});
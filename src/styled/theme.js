import pxToRem from '../utils/pxToRem';

const theme = {
  fonts: {
    primary: 'Helvetica, Arial, sans-serif'
  },
  fontScale: {
    xxxs: pxToRem('9px'),
    xxs: pxToRem('10px'),
    xs: pxToRem('11px'),
    s: pxToRem('12px'),
    xm: pxToRem('14px'),
    m: pxToRem('16px'),
    lg: pxToRem('18px'),
    xlg: pxToRem('24px'),
    xxlg: pxToRem('30px')
  },
  lineHeight: {
    s: '1.2'
  },
  spacing: {
    xm: pxToRem('11px'),
    m: pxToRem('13px')
  },
  zIndex: [100]
};

export default theme;

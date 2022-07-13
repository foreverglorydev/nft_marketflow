/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Vision UI Dashboard React Base Styles
import borders from 'vui-theme/assets/theme/base/borders';
import typography from 'vui-theme/assets/theme/base/typography';
// Vision UI Dashboard React Helper Functions
import pxToRem from 'vui-theme/assets/theme/functions/pxToRem';

const { fontWeightBold, size } = typography;
const { borderRadius } = borders;

export default {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: size.xs,
  fontWeight: fontWeightBold,
  borderRadius: borderRadius.button,
  padding: `${pxToRem(12)} ${pxToRem(24)}`,
  lineHeight: 1.4,
  textAlign: 'center',
  textTransform: 'unset',
  userSelect: 'none',
  backgroundSize: '150% !important',
  backgroundPositionX: '25% !important',
  transition: `all 150ms ease-in`,

  '&:hover': {
    transform: 'scale(1.02)',
  },

  '&:disabled': {
    pointerEvent: 'none',
    opacity: 0.65,
  },

  '& .material-icons': {
    fontSize: pxToRem(15),
    marginTop: pxToRem(-2),
  },
};

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

// Vision UI Dashboard React base styles
import borders from 'vui-theme/assets/theme/base/borders';
import colors from 'vui-theme/assets/theme/base/colors';
import pxToRem from 'vui-theme/assets/theme/functions/pxToRem';
// Vision UI Dashboard React helper functions
import rgba from 'vui-theme/assets/theme/functions/rgba';

const { white } = colors;
const { borderRadius } = borders;

export default {
  styleOverrides: {
    root: {
      width: pxToRem(250),
      whiteSpace: 'nowrap',
      border: 'none',
    },

    paper: {
      width: pxToRem(250),
      backgroundColor: rgba(white.main, 0.8),
      backdropFilter: `saturate(200%) blur(${pxToRem(30)})`,
      height: `calc(100vh - ${pxToRem(32)})`,
      margin: pxToRem(16),
      borderRadius: borderRadius.xl,
      border: 'none',
    },

    paperAnchorDockedLeft: {
      borderRight: 'none',
    },
  },
};

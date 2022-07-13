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
// Vision UI Dashboard React helper functions
import pxToRem from 'vui-theme/assets/theme/functions/pxToRem';

const { grey, info } = colors;
const { borderRadius } = borders;

export default {
  styleOverrides: {
    root: {
      position: 'relative',
      backgroundColor: grey[100],
      borderRadius: borderRadius.md,
      minHeight: 'unset',
      padding: pxToRem(4),
    },

    flexContainer: {
      height: '100%',
      position: 'relative',
      zIndex: 10,
    },

    fixed: {
      overflow: 'unset !important',
      overflowX: 'unset !important',
    },

    vertical: {
      '& .MuiTabs-indicator': {
        width: '100%',
      },
    },

    indicator: {
      height: '100%',
      borderRadius: borderRadius.lg,
      backgroundColor: info.main,
      transition: 'all 500ms ease',
    },
  },
};

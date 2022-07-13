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

// prop-types is a library for typechecking of props
import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// Custom styles for VuiProgress
import VuiProgressRoot from 'vui-theme/components/VuiProgress/VuiProgressRoot';
// Vision UI Dashboard React components
import VuiTypography from 'vui-theme/components/VuiTypography';

const VuiProgress = forwardRef(({ variant, color, value, label, ...rest }, ref) => (
  <>
    {label && (
      <VuiTypography variant="button" fontWeight="medium" color="text">
        {value}%
      </VuiTypography>
    )}
    <VuiProgressRoot
      {...rest}
      ref={ref}
      variant="determinate"
      value={value}
      ownerState={{ color, value, variant }}
    />
  </>
));

// Setting default values for the props of VuiProgress
VuiProgress.defaultProps = {
  variant: 'contained',
  color: 'info',
  value: 0,
  label: false,
};

// Typechecking props for the VuiProgress
VuiProgress.propTypes = {
  variant: PropTypes.oneOf(['contained', 'gradient']),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
    'light',
    'dark',
  ]),
  value: PropTypes.number,
  label: PropTypes.bool,
};

export default VuiProgress;

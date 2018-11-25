// Packages to use in this module
import { Dimensions, PixelRatio } from 'react-native';

// get device width and height
let {devWidth, devHeight} = Dimensions.get('window');

/**
 *  Converts the device's window width to independent pixels (dp).
 * 
 * @param  {double} percentage The percentage of screen's width that UI element should cover
 * @return {number}            The calculated dp depending on current device's screen width.
 */
const responsiveWidth = (percentage = 100.00) => {
    // Converts the pixels scale to correspons size in dp.
    // Use PixelRatio.roundToNearestPixel to round the layout
    return PixelRatio.roundToNearestPixel(devWidth * percentage / 100);
}

/**
 *  Converts the device's window height to independent pixels (dp).
 * 
 * @param  {double} percentage The percentage of screen's height that UI element should cover
 * @return {number}            The calculated dp depending on current device's screen height.
 */
const responsiveHeight = (percentage = 100.00) => {
    // Converts the pixels scale to correspons size in dp.
    // Use PixelRatio.roundToNearestPixel to round the layout
    return PixelRatio.roundToNearestPixel(devHeight * percentage / 100);
}

/**
 * Event listener function that detects orientation change (every time it occurs) and triggers 
 * screen rerendering. It does that, by changing the state of the screen where the function is
 * called. State changing occurs for a new state variable with the name 'orientation' that will
 * always hold the current value of the orientation after the 1st orientation change.
 * Invoke it inside the screen's constructor or in componentDidMount lifecycle method.
 * @param {object} dev Screen's class component this variable. The function needs it to
 *                      invoke setState method and trigger screen rerender (this.setState()).
 */
const orientationListener = (dev) => {
    Dimensions.addEventListener('change', newDimensions => {
        // retrieve and save the new values
        devHeight = newDimensions.window.height;
        devWidth = newDimensions.window.width;

        // Trigger screen's rerender with a state update of the orientation variable
        dev.setState({
            orientation: devWidth < devHeight ? 'portrait' : 'landscape'
        });
    });
}

/**
 * Wrapper function that removes orientation change listener and should be invoked in
 * componentWillUnmount lifecycle method of every class component (UI screen) that
 * listenOrientationChange function has been invoked. This should be done in order to
 * avoid adding new listeners every time the same component is re-mounted.
 */
const cancelOrientationListener = () => {
    Dimensions.removeEventListener('change', () => {});
}

export {
    responsiveWidth,
    responsiveHeight,
    orientationListener,
    cancelOrientationListener
};

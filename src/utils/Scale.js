import { Dimensions, Platform } from "react-native";

//Screen Size Constants

const SCREEN_HEIGHT = Platform.OS === 'ios' ? Dimensions.get('window').height : Dimensions.get('window').height <= 550 ? 667 : Dimensions.get('window').height;
const SCREEN_WIDTH = 375;

const { height, width } = Dimensions.get('window');
export const SHeight = (percentage) => {
    return Math.round((percentage * Dimensions.get("screen").height) / 100);
  };
  export const SWidth = (percentage) => {
    return Math.round((percentage * Dimensions.get("screen").width) / 100);
  };

// Function to scale a value based on the size of the screen size and the original
//  size used on the design.

export default function (units = 1) {
    return width / SCREEN_WIDTH * units;
};
const verticalScale = (size) => height / SCREEN_HEIGHT * size;

export { verticalScale };
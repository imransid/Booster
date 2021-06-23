import {scale} from 'react-native-size-matters';
import {Dimensions, StatusBar} from 'react-native';
export const BUTTON_HEIGHT = scale(43);
export const INPUT_HEIGHT = scale(43);
export const BOTTOM_TABS = scale(56);
export const BORDER_RADIUS = scale(4);
export const SIZE_SM = scale(10);
export const HEADER_HEIGHT = scale(40);

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;
export const STATUS_BAR_HEIGHT = StatusBar.currentHeight || wdp(24);

// custom scaling
// designed dimensions as per Figma
const guideLineBaseWidth = 360; // px
const guideLineBaseHeight = 640; // px
const {width, height} = Dimensions.get('window');
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];
export const base = (size) => (longDimension / guideLineBaseHeight) * size;
export const wdp = (size) => (shortDimension / guideLineBaseWidth) * size;
export const hdp = (size) => size + (base(size) - size) * 0.01;

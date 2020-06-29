
import { StyleSheet, Dimensions, Platform, PixelRatio } from 'react-native'

const { width, height } = Dimensions.get('window')
const ratio = width / 320
const isX = Platform.OS === 'ios' && ((height == 812 || width == 812) || (height == 896 || width == 896))
const font = 'PFDinTextCondPro-Regular'

let normalize = (size) => Math.round(PixelRatio.roundToNearestPixel(size * ratio)) - (Platform.OS === 'ios' ? 0 : 2)
let notch = () => isX ? 20 : 0

export {
    normalize,
    notch,
}

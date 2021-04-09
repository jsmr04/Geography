import { Platform } from 'react-native'

export const COLORS = {
    PRIMARY: "#ff9500",
    HEADER_TITLE: "#ffffff",
    WHITE: "#ffffff",
    BLACK: "#000000",
    CONTENT: '#808080',
}

export const FONT = {
    DEFAULT_FONT_FAMILY: Platform.OS === 'android' ? 'Roboto' :  'Helvetica',
}

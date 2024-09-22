import { Dimensions, StatusBar, StyleSheet } from 'react-native';
import { typography } from './Typography';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    headerIconTextStyle: {
        paddingHorizontal: 14,
        paddingVertical: 7,
        borderRadius: 20,
    },
    rowCenter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    rowStart: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    rowEnd: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalHeader: {
        width: '100%',
        textAlign: 'center',
        fontWeight:'600',
        fontSize: 20,
        color: '#10275A',
      },
      modalCloseButton: {
        position: 'absolute',
        right: 0
      },
      modalContent: {
        backgroundColor: 'white',
        // padding: 22,
        paddingHorizontal: 22,
        paddingBottom: 22,
        paddingTop: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
})
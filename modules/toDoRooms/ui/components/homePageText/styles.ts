import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HIGHT = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        width: SCREEN_WIDTH,
        height: SCREEN_HIGHT,
        padding: 50
    },
    headerText: {
        fontSize: 35,
        marginBottom: 10
    },
});
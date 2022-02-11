import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HIGHT = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    container: {
        height: SCREEN_HIGHT,
        width: SCREEN_WIDTH,
        backgroundColor: '#b4cdd7',
        padding: 10

    },
    userListArea: {
        height: 200
    },
    topArea: {
        height: 140,
        justifyContent: 'space-between',
    }
});
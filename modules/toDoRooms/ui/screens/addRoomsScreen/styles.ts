import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HIGHT = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        height: SCREEN_HIGHT,
        width: SCREEN_WIDTH
    },
    listsArea: {
        // display: 'flex',
    }
});
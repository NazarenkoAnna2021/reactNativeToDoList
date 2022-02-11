import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HIGHT = Dimensions.get('screen').height;
const USERS_LIST = SCREEN_HIGHT - 350;

export const styles = StyleSheet.create({
    container: {
        height: SCREEN_HIGHT,
        width: SCREEN_WIDTH,
        backgroundColor: '#b4cdd7',
        padding: 10

    },
    userList: {
        height: USERS_LIST,
        borderWidth: 5,
        borderColor: '#866951',
        padding: 5
    },
    topArea: {
        height: 210,
        justifyContent: 'space-between',
        paddingBottom: 10
    },
    checkedUsersList: {
        height: 60,
        borderWidth: 5,
        borderColor: '#866951',
    },
    addRoomArea: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    membersTitle: {
        color: '#866951',
        fontSize: 18,
        fontWeight: '700',
    },
    membersName: {
        color: '#866951',
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
    },
    chosenUserItem: {
        borderRightWidth: 4,
        borderColor: '#866951',
        backgroundColor: '#ebe6d0',
    }
});
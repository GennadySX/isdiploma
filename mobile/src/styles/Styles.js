/**********
 *
 * (dev) GennadySX, 2020
 */

import {StyleSheet, Dimensions, Platform, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');
const ratio = width / 320;
const isX = Platform.OS === 'ios' && ((height == 812 || width == 812) || (height == 896 || width == 896));
const font = 'PFDinTextCondPro-Regular';

import {normalize, notch} from './Util';

const styles = StyleSheet.create({
    DrawerMenu: {
        backgroundColor: "#22222b",
    },
    dmenuBlockUser: {
        flex: 1,
        width: "100%",
        height: 150,
        marginTop: -3,
        backgroundColor: "#14141c",
        paddingTop: 10
    },
    dmenuUserAvatarBlock: {
        marginRight: 15,
        paddingLeft: 15
    },
    dmenuUserAvatar: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    dmenuUserBlock: {
        marginLeft: 10,
        paddingTop: 10,
        paddingLeft: 10
    },

    dmenuUserName: {
        color: "#fff",
        fontSize: 18,
    },
    dmenuUserNumber: {
        color: "#a3a3a3",
        fontSize: 12
    },
    dmenuItem: {
        padding: 15,
        paddingLeft: 20,
        backgroundColor: '#141422',
        flexDirection: 'row'
    },
    dmenuItemLabel: {
        color: '#fff',
        paddingLeft: 25
    },
    DarkScreen: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#14141c",
    },
    ChatListScreen: {},
    GroupListScreen: {},
    ContactListScreen: {},
    ChatRoomScreen: {},
    ProfileScreen: {},
    UserInfoScreen: {},
    SettingsScreen: {},
    MenuDrawer: {},
    ///ChatList
    chatList: {
        flex: 1,
        padding: 10,
        backgroundColor: "rgba(29,29,43,0.75)",
        borderBottomColor: 'rgba(125,125,125,0.38)',
        borderBottomWidth: 1,
        flexDirection: "row",
    },
    chatListAvatar: {
        width: 55,
        height: 55,
        borderRadius: 50,
    },
    chatListText: {
        width: "82%",
        paddingLeft: 20,
        paddingTop: 5,

    },
    chatListUserName: {
        fontSize: 20,
        color: "#ffffff"
    },
    chatListLastMessage: {
        color: "#a3a3a3"
    },
    chatListTimeStamp: {
        color: "#a3a3a3",
        position: "absolute",
        right: 0,
        top: 10,
    },
    chatListBadge: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 1,
        paddingBottom: 1,
        maxWidth: 30,
        borderRadius: 50,
        position: "absolute",
        color: "#f2f2f2",
        left: -25,
        top: 30,
        backgroundColor: "#3db526",
        textAlign: "center",
        fontSize: 14,
    },
    //ChatRoom
    chatHeader: {
        flexDirection: "row",
        padding: 5,

        backgroundColor: "#262631",
        zIndex: 999,
    },
    chatHeaderImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    chatHeaderBack: {
        marginRight: 10,
        alignItems: 'center',
        paddingTop: 18,
        paddingLeft: 5
    },
    chatHeaderBackText: {
        color: "#fff",
        fontSize: 29,
        fontWeight: "bold",
    },
    chatHeaderText: {
        marginLeft: 20,
        width: "60%",
    },
    chatHeaderUserName: {
        marginTop: 5,
        fontSize: 17,
        color: "#fff"
    },
    chatHeaderUserStatus: {
        color: "#ad5",
        fontSize: 12,
    },
    chatHeaderRight: {
        paddingTop: 10,
        paddingLeft: 30
    },
    // messageBoard
    messageBoard: {},
    messageBoardBlock: {
        marginTop: 4
    },
    messageBoardFromMe: {
        padding: 10,
        alignSelf: "flex-start",
        backgroundColor: "#2b2b34",
        marginBottom: 10,
        color: "#fff",
        marginLeft: 10,
        marginRight: 100,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,

    },
    messageBoardFrom: {
        alignSelf: "flex-end",
        backgroundColor: "#9ba37b",
        color: "black",
        textAlign: "right",
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 0,
        marginRight: 10,
    },


    chatPenBoard: {
        backgroundColor: "#22222b",
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        width: "100%"
    },

    chatPenBoardTextInput: {
        backgroundColor: "transparent",
        color: "#f2f2f2",
        width: "80%",
        paddingLeft: 10
    },
    chatPenBoardSendButton: {
        flexDirection: 'row',
        fontSize: 20,
        width: 40,
        paddingLeft: 9,
        paddingBottom: 15,
        alignItems: 'flex-end'
    },


    ///Older
    container: {
        flex: 1,
        padding: 17,
        backgroundColor: 'transparent',
        justifyContent: 'center',

    },
    header: {},
    backgroundImage: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginInput: {
        width: '80%'
    },
    ButtonWithInput: {

        marginTop: 10,
        color: "#000000"
    },
    ButtonWithInputSignUp: {
        backgroundColor: '#beff22',
        color: "#000",
        borderColor: 'transparent'
    },
    ButtonWithInputSignIn: {
        backgroundColor: '#3266ff',
        color: "#ffffff"
    },
    bottomEl: {
        flex: 0.1,
        alignItems: 'center',
        backgroundColor: '#beff22',
        width: "100%",
        justifyContent: 'center',
        alignContent: 'center'
    },
    LinkLogin: {
        fontFamily: 'Cochin',
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000',
    },
    scene: {
        flex: 1,
    },
    tabBar: {
        flexDirection: 'row',
        paddingTop: 0,
        backgroundColor: '#10121d'
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        color: "#ffffff"
    },
    tabItemTextActive: {
        color: "#ffffff"
    },
    tabItemText: {
        color: "gray"
    },


})

export default styles;

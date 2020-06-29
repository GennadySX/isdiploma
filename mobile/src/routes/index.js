import LoginScreen from "../screens/Login";
import HomeScreen from "../screens/Home";
import {ChatRoomScreen} from "../screens/ChatRoom"
import {SettingsScreen} from "../screens/Settings";
import {UserInfoScreen} from "../screens/UserInfo";
import {ContactsScreen} from "../screens/Contacts";
import {CreateGroupScreen} from "../screens/CreateGroup";
import {CreateProjectScreen} from "../screens/CreateProject";
import {TaskScreen} from "../screens/Task";
import {SearchScreen} from "../screens/Search";


const RoutesDrawer = [
    {
        name: 'Home',
        screen: HomeScreen,
        options: {
            headerShown: false
        }
    },

]



const RoutesStack = [
    {
        name: 'Login',
        screen: LoginScreen,
        options: {
            headerShown: false
        }
    },
    {
        name: 'Home',
        screen: HomeScreen,
        options: {
            headerShown: false
        }
    },
    {
        name: 'ChatRoom',
        screen: ChatRoomScreen,
        options: {
            headerShown: false
        }
    },
    {
        name: 'CreateGroup',
        screen: CreateGroupScreen,
        options: {
            headerShown: false
        }
    },
    {
        name: 'CreateProject',
        screen: CreateProjectScreen,
        options: {
            headerShown: false
        }
    },
    {
        name: 'Search',
        screen: SearchScreen,
        options: {
            headerShown: false
        }
    },
    {
        name: 'Task',
        screen: TaskScreen,
        options: {
            headerShown: false
        }
    },

    {
        name: 'Settings',
        screen: SettingsScreen,
        options: {
            headerShown: false
        }
    },
    {
        name: 'UserInfo',
        screen: UserInfoScreen,
        options: {
            headerShown: false
        }
    },
    {
        name: 'Contacts',
        screen: ContactsScreen,
        options: {
            headerShown: false
        }
    }
]


export {
    RoutesDrawer,
    RoutesStack
}

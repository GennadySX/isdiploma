/**
 * Created by GennadySX on @2020
 */



import {Storage} from "./Storage";

export const findFriend = (members) => {
    let userList, friend, me;

    return Promise.all([
        Storage.get('users', (users) => {
        userList = JSON.parse(users)
    }),
        Storage.get('user', (user) => {
            me = JSON.parse(user)
        })
    ]).then(() => {
        members.map(user => {
            if (user !== me._id) {
                return friend = userList.filter(list => list._id === user)
            }
        })
    }).then(() => friend )
    }



    export const currentUser = () =>
        Storage.get('user', (user) => {
        return JSON.parse(user)
    })

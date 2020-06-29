import React from 'react'
import {View, Text, ActivityIndicator, TouchableOpacity, Image} from 'react-native'
import styles from "../styles/Styles";

const ListX = (props) => {
    let {data} = props
    data = data.item
    return (
        <TouchableOpacity style={styles.chatList}
                          onPress={() => props.select(data)}>
            <Image source={data.avatar} style={styles.chatListAvatar}></Image>
            <View style={styles.chatListText}>
                <Text style={styles.chatListUserName}>{data.firstname} {data.lastname}</Text>
                <Text style={styles.chatListLastMessage}>{data.lastMessage.message}</Text>
                <Text style={styles.chatListTimeStamp}>{data.lastMessage.createdAt}</Text>
                {(data.lastMessage.new) ? <Text style={styles.chatListBadge}>{data.lastMessage.new}</Text> : null}
            </View>
        </TouchableOpacity>
    )}

export {
    ListX
}

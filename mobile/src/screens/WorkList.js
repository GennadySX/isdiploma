import React, {Component} from 'react';
import {View, Text, Button, SafeAreaView, FlatList, Image, TouchableOpacity} from 'react-native';
import { StackActions } from '@react-navigation/native';
//components
import {ListX} from '../components/ListX'

//styles
import styles from "../styles/Styles";

//data
import {workData} from "../dataExamples/chatList";


class WorkListScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chatList: null,
        }
    }


    componentDidMount() {
        // console.log('dis', this.props)
    }

    Location(item) {
        // console.log('location')
       //  this.props.route.navigation.dispatch(
       //      StackActions.replace(
       //          'ChatRoom',
       //         {data: item}
       // ))
        this.props.route.navigation.replace(
                'ChatRoom',
               {data: item}
     )
    }

    render() {

        return (
            <View style={[styles.DarkScreen]}>
                <View>
                    <SafeAreaView>
                        <FlatList
                            data={workData}
                            renderItem={(chat) => <ListX data={chat} select={(item) => this.Location(item)}/>}
                            keyExtractor={chat => chat.id.toString()}
                        />
                    </SafeAreaView>
                </View>
            </View>
        )
    }
}

export {
    WorkListScreen
}
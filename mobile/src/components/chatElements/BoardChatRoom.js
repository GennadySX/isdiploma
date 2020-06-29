/****
 * Gennady Sabirovsky
 * gennadysx.com
 * 2020 @c
 *
 */
import React from "react"
import {View, Button, Image, TouchableOpacity, Text, TextInput} from "react-native"

import Icon from 'react-native-vector-icons/FontAwesome';


//styles
import styles from "../../styles/Styles";


export class BoardChatRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emojiStatus: false,
        }
    }


    showEmoji = () => {
        let val = true
        if (this.state.emojiStatus) val = false
        this.setState({emojiStatus: val,}, () => this.props.showEmoji(val))
    }


    componentDidMount(): void {

    }



    render() {
        return (
            <View style={[styles, styles.chatPenBoard]}>

                <TouchableOpacity style={[styles.chatPenBoardSendButton]}
                                  onPress={() => this.showEmoji()}>
                    <Icon size={20} name="smile-o" color={"gray"}> </Icon>
                </TouchableOpacity>
                <TextInput
                    style={styles.chatPenBoardTextInput}
                    onChangeText={text => this.props.messageChange(text)}
                    autoFocus={true}
                    value={this.props.message}
                    multiline
                />
                <TouchableOpacity style={styles.chatPenBoardSendButton}
                                  onPress={() => this.props.sendIt()} >
                    <Icon name="send" size={20} color={'gray'}></Icon>
                </TouchableOpacity>

            </View>


        )
    }
}



import React from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity, Image } from 'react-native'

import Icon from "react-native-vector-icons/FontAwesome";
import { useIsDrawerOpen } from '@react-navigation/drawer';

import styles from "../styles/Styles";



class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


        openMenu () {
            this.props.openMenu()
        }

        componentDidMount(): void {
            console.log('header props', this.props)
        }


    back() {
        this.props.goBack()
    }


    render() {
        return (
            <View style={[ {padding: 15, backgroundColor: "#1f1f28", flexDirection: 'row'}]}>
                {this.props.openMenu ?
                    <TouchableOpacity style={{left: 10}} onPress={() => this.openMenu()}>
                        <Icon size={25} name="bars" color={"white"}> </Icon>
                    </TouchableOpacity>:null
                }
                { this.props.goBack ?
                    <TouchableOpacity onPress={() => this.back()}
                    >
                        <Icon size={20} name="arrow-left" color={"white"} > </Icon>
                    </TouchableOpacity>
                    : null
                }
                <Text style={{textAlign: 'center', fontSize: 18, color: "white", width: "84%"}}>{(this.props.title) ? this.props.title : ''}</Text>
            </View>

        )
    }

}

export {
    Header
}

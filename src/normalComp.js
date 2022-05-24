import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class normalComp extends Component {
    render() {
        console.log("Normal Component Rendering")
        return (
            <View style={{ borderWidth: 1, padding: 10, alignItems: 'center', width: 50 }}>
                {/* <Text>{this.props.text}</Text> */}
                <Text ellipsizeMode='tail' allowFontScaling={true} numberOfLines={2} style={{ fontSize: 10 }}>asasdasadasasdadasadadsfsdfdsfdsfmsdfmdksfksdfks</Text>
                <Text>{this.props.person.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})
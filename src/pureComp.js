import { Text, StyleSheet, View } from 'react-native'
import React, { PureComponent } from 'react'

export default class pureComp extends PureComponent {
    render() {
        console.log("Pure Component Rendering")
        return (
            <View style={{ borderWidth: 1, padding: 10, alignItems: 'center' }}>
                <Text>{this.props.text}</Text>
                <Text>{this.props.person.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
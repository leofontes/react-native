import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {}
interface State {
    name: string
}

export default class App extends React.Component {
    state = { name: 'Leo' }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Hello {this.state.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container: {
       backgroundColor: '#00F',
       flex: 1,
       justifyContent: 'center'
   },
    text: {
        color: '#F00',
        textAlign: 'center',
    }
});
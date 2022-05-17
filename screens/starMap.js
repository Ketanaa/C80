import React,{Component} from 'react';
import {Text,View, StyleSheet, TextInput} from 'react-native';
import {WebView} from 'react-native-web';

export default class StarMapScreen extends Component {
    constructor(){
        super();
        this.state = {
            latitude: {},
        }
    }

    const {longitude, latitude} = this.state;
    const path = 'https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellataions=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false'
    render() {
        return (
            <View 
                style={styles.container}>
                    <WebView 
                        scalesPageToFit={true}
                        source={{ uri: path}}
                        style={{ marginTop: 20, marginBottom:20, }} 
                    />
                    <TextInput
                     style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                     placeholder="Enter your latitude"
                     placeholderTextColor= "#ffff#000000"
                     OnChangeText={(text)=>{
                         this.setState({
                             latitude: text
                         })
                     }}
                    />
                </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justiffyContent: "center",
        alignItems: "center"
    },
})
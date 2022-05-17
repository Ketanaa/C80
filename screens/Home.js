import React,{Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                    <ImageBackground source={require('../assets/stars.gif')} style = {styles.backgroundImage} >
                    <Text style={styles.titleText}>Stellar App</Text>
                    <TouchableOpacity style={styles.routeCard} onPress={()=>
                    this.props.navigation.navigate("TonightSky")
                }>
                    <Text style={styles.routeText}>Tonight Sky</Text>
                    <Image source={require("../assets/night-sky.png")} style={{width: 80, height: 80}}></Image>
                </TouchableOpacity>
                    </ImageBackground>
                </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage:{
        flex:1,
        resizeMode: "cover",
      },
    titleText:{
        fontSize:40,
        fontWeight: 'bold',
        color:"white",
    
    },
})
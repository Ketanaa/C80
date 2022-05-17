import axios from 'axios';
import React,{Component} from 'react';
import {Alert, Linking, SafeAreaView, Text,View} from 'react-native';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class DailyPicScreen extends Component {
    getAPOD = () => {
                axios
                    .get("https://api.nasa.gov/planetary/apod?api_key=AFkWAHVz1gUxqclcXBa5jsLryWc0trAM9I8ET4QU")
                    .then(response => {
                        this.setState({ apod: response.data})
                    })
                    .catch(error => {
                        Alert.alert(error.message)
                    })
    }
    componentDidMount(){
        this.getAPOD()
    }
    render() {
        return (
            <View style={styles.containter}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground
                    source={require('../assets/stars.gif')} style={styles.backgroundImage}>
                        <Text style={styles.routeText}>Astronomy picture of the day</Text>
                        <Text style={styles.titleText}>{this.state.apod.title}</Text>
                        <TouchableOpacity style={styles.listContainer}
                        onPress={() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}>
                            <View style={styles.iconContainer}>
                                <Image source={require("../assets/play-video.png")} style={{width: 50, height: 50}}></Image>
                            </View>
                        </TouchableOpacity>\
                            <Text style={styles.explanationText}>{this.state.apos.explanation}</Text>
                    </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage:{
        flex: 1,
        resizeMode: 'cover',
    },
    routeText:{
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    titleText:{
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    listContainer:{
        flex: 0.2,
        backgroundColor: 'white',
        marginTop: -10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30
    },
    iconContainer:{
        flex:0.1
    },
    explanationText:{
        fontSize: 15,
        color: "black",
        fontWeight: "bold"
    }
})
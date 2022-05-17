import React from 'react';
import {Text,View,FlatList} from 'react-native';

export default class SpaceCraftsScreen extends React {

    getData=()=>{
        axios.get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
                .then(response => {
                    this.setState({ aircrafts: response.data.results})
                    console.log(response.data.results)
                })
                .catch(error => {
                    console.log(error.message)
                })
    }

    render() {
        return (
            <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <View style={{flex:0.25}}>
                        <Text>Space Crafts</Text>
                    </View>
                    <View style={{flex:0.75}}>
                        <FlatList 
                            keyExtractor={this.keyExtractor}
                            data={this.state.aircrafts}
                            renderItem={this.renderItem} />
                    </View>
                </View>
        )
    }
}
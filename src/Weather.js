import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

const windIcon = require('./img/wind.png');
const tempIcon = require('./img/temp.png');
const mainIcon = require('./img/main.png');
const levelIcon = require('./img/sea.png');

export default class Weather extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      city: '',
      forecast: {
        main: '-',
        description: '-',
        temp: 0,
        sunrise: 0,
        sunset: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0,
        speed: 0,
      }
    };
  }
getWeather= () => {
let url = 'http://api.openweathermap.org/data/2.5/weather?q='+ this.state.city +
 '&appid=2e62f78ca2aa2fd0c2a9eef06bd7cea6&units=metric';
  fetch(url)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    this.setState({
      forecast : {
        main: responseJson.weather[0].main,
        description: responseJson.weather[0].description,
        temp: responseJson.main.temp,
        sunrise: responseJson.sys.sunrise,
        sunset: responseJson.sys.sunset,
        pressure: responseJson.main.pressure,
        humidity: responseJson.main.humidity,
        sea_level: responseJson.main.sea_level,
        grnd_level: responseJson.main.grnd_level,
        speed: responseJson.wind.speed
      }
    });
  }
  );

}
  render() {
    return (
    <View style={styles.containerMain}>
      <View style={styles.box2}>
        <Text style={{ textAlign: 'center', paddingTop: 15, fontSize: 20, }}>Masukan Nama Kota</Text>
          <TextInput
                style={{ width: 200, height: 40, color: 'black', backgroundColor: '#FFFFFF' }}
              placeholder=" input "
              onChangeText={(city) => this.setState({ city })}
              />
            <Button
              onPress={() => this.getWeather()}
              title="Mencari"
              color="black"
              accessibilityLabel="Klik untuk melihat cuaca"
            />
      </View>

      <View style={styles.box4}>
        <View style={styles.button}>
          <Text> Suhu : { this.state.forecast.temp} </Text>
          <Text> Cuaca : { this.state.forecast.main} </Text>
          <Text> Deskripsi : { this.state.forecast.description} </Text>
        </View>
      </View>

</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#C8E6C9',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 0.7,
    backgroundColor: 'blue',
  },
  box2: {
    flex: 0.4,
    backgroundColor: '#2E7D32',
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20
  },
  box3: {
    flex: 0.5,
    backgroundColor: '#90CAF9',
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  },
  box4: {
    flex: 0.3,
    backgroundColor: '#90EE90',
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column'
  },
  box5: {
    flex: 0.7,
    backgroundColor: '#1565C0',
    margin: 10
  },
  button: {
    marginTop: 300,
    width: 300,
    height: 400,
    justifyContent: 'flex-start',
    //alignItems: 'center',
    backgroundColor: '#2E7D32',
    flexDirection: 'column'
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#feb401',
    borderColor: '#DCDCDC',
    //borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center',
    height: 40,
    width: 30,
  },
  icon: {
    tintColor: '#228B22',
    height: 20,
    width: 20,
  }
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Weather extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>I Gede Made Waisya Adi Suphala</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.search}>
            <Text>Masukan Nama Kota</Text>
            <View style={styles.search1}>
            </View>
          <Text>Lihat</Text>
          </View>
          <View style={styles.button}>
            <View style={styles.button1}>
              <Text>Button</Text>
            </View>
            <View style={styles.button2}>
              <Text>Button</Text>
            </View>
          </View>
          <View style={styles.button}>
            <View style={styles.button1}>
              <Text>Button</Text>
            </View>
            <View style={styles.button2}>
              <Text>Button</Text>
            </View>
          </View>
          <View style={styles.button}>
            <View style={styles.button1}>
              <Text>Button</Text>
            </View>
            <View style={styles.button2}>
              <Text>Button</Text>
            </View>
          </View>
          <View style={styles.button}>
            <View style={styles.button1}>
              <Text>Button</Text>
            </View>
            <View style={styles.button2}>
              <Text>Button</Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Text>Footer</Text>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  //container: {
    //flex: 1,
    //backgroundColor: 'transparent'
  //},
  header: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 3,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  search1: {
    flex: 1,
    backgroundColor: 'white',
    //alignItems: 'center',
    //justifyContent: 'space-around',
    flexDirection: 'column',
    width: 250,
    height: 50,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 50,
  },
  button: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: 'green',
    justifyContent: 'space-around',
  },
  button1: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    width: 30,
    height: 50,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 5,
    marginBottom: 5,
    justifyContent: 'space-around',
  },
  button2: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    width: 30,
    height: 50,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 10,
    marginBottom: 5,
    justifyContent: 'space-around',
  },
  footer: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

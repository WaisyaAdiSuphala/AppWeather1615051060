import React from 'react';
import {
  Text,
  View
  } from 'react-native';

 const Header = (props) => {
  const { textStyle, backFooter } = styles;
  return (
    <View style={backFooter}>
      <Text style={textStyle}>Prediksi Cuaca Hari Ini</Text>
    </View>
  );
};
const styles = {
    backFooter: {
      backgroundColor: '#33691E',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      paddingTop: 10,
      position: 'relative',

    },
    textStyle: {
      fontSize: 18,
      color: '#fff',
      textAlign: 'center'
    }
}
export default Header;

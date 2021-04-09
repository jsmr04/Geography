import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import * as theme from '../styles/theme';

const App = ({text}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>{text} </Text>
      </View>
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
  },
  row: {
    width: width,
    marginTop:12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 1,
    borderBottomWidth: 0.5,
    borderColor: theme.COLORS.PRIMARY
  },
  text: {
    fontFamily: theme.FONT.DEFAULT_FONT_FAMILY,
    fontSize: 22,
    fontWeight:'500',
    color: theme.COLORS.PRIMARY,
    textAlign:'center',

  },
});

export default App;

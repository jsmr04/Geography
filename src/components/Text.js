import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import * as theme from '../styles/theme';

const App = ({label, value}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>{label} </Text>
        <Text style={[styles.text, styles.textRight]}>{value}</Text>
      </View>
    </View>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  row: {
    width: width,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 3
  },
  text: {
    fontFamily: theme.FONT.DEFAULT_FONT_FAMILY,
    fontSize: 17,
    width: '50%',
    color: theme.COLORS.CONTENT,
  },
  textRight: {
    textAlign: 'right',
  },
});

export default App;

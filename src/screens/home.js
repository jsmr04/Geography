import React, {useEffect, useLayoutEffect} from 'react';
import {View, ActivityIndicator, StyleSheet, FlatList} from 'react-native';
import ListItem from '../components/ListItem';
import * as theme from '../styles/theme';
import {connect} from 'react-redux';
import {
  getData,
  nextNode,
  previousNode,
  config,
} from '../redux/reducers/geographyReducer';

import { select, deselect, popNode, pushNode } from "../redux/reducers/selectionReducer";
import {HeaderBackButton} from '@react-navigation/stack';


const App = ({state, getData, nextNode, previousNode, navigation, selection, pushNode, popNode, select, deselect, route}) => {

  const backButton = props => (
    <HeaderBackButton
      {...props}
      onPress={() => {
        previousNode();
        popNode();
        console.log('Go Back');
        navigation.goBack();
      }}
    />
  );

  useEffect(() => {
    getData(state);
  }, []);

  const next = item => {
    if (state.index + 1 < config.length) {
      let args = {};

      if (route != undefined && route.params != undefined) {
        args = {...route.params.args};
      }

      //assign attribute and value based on configuration, then I pass the arguments
      args[config[state.index].argName] = item[config[state.index].key];

      //Add item into the node tree
      pushNode(item)
      //Next screen
      nextNode(args);
      navigation.push('Home', { args: args });
    
    }else{//Last node
      
      //Add item into the node tree
      if (selection.nodeTree.length < config.length){
        pushNode(item)
      }else{
        //Replace last node
        popNode()
        pushNode(item)
      }

      if (!isItemSelected(item[config[state.index].key])){
        select(item[config[state.index].key])
        popNode()
      }else{
        deselect(item[config[state.index].key])
        popNode()
      }

    }
  };

  const isItemSelected = (key) =>{
    return selection.selectionMap.has(key)
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: config[state.index].title,
      headerLeft: state.index > 0 ? backButton : () => {},
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {state.fetching ? (
        <ActivityIndicator
          style={styles.activityIndicator}
          size="large"
          color={theme.COLORS.PRIMARY}
        />
      ) : (
        <FlatList
          data={state.data[state.index]}
          keyExtractor={x => x[config[state.index].key]}
          renderItem={({item}) => (
            <ListItem selected={isItemSelected(item[config[state.index].key])} onPress={() => next(item)} text={item.name} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  activityIndicator: {
    marginBottom: 10,
  },
});

const mapStateToProps = state => {
  return {state: state.geographyReducer, selection: state.selectionReducer};
};

const mapDispatchToProps = dispatch => ({
  getData: index => dispatch(getData(index)),
  nextNode: args => dispatch(nextNode(args)),
  previousNode: () => dispatch(previousNode()),
  select: (id) => dispatch(select(id)),
  deselect: (id) => dispatch(deselect(id)),
  pushNode: (node) => dispatch(pushNode(node)),
  popNode: () => dispatch(popNode()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

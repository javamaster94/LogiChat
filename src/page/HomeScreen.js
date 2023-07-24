import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';

const HomeScreen = () => {
  const route = useRoute();
  const {username} = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hoşgeldin, {username ? username : 'Sahip'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;

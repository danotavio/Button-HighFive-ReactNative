import React, { useEffect, useRef } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Animated, Alert } from 'react-native';
import HighFiveRight from './assets/highfive-right.svg';
import HighFiveLeft from './assets/highfive-left.svg';



const App = () => {

  const movement = () => {
  const startXValue = new Animated.Value(60);
  const startYValue = new Animated.Value(0);

    Animated.sequence([
      Animated.timing(startYValue,{
        toValue: -120,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(startXValue,{
      toValue: 60,
      duration: 300,
      useNativeDriver: true,
    }),
    ]).start();

  }
  return (
    
    <SafeAreaView style={styles.container}>

      <View style={styles.appButtonContainer}>

      <Animated.View>
      <HighFiveLeft style={styles.iconStyles}/>
      </Animated.View>
      
        <Button style={styles.appButton}
          title="Finalizar Viagem"
          color={'#FF7E2E'}
          onPress={movement}
        />

      <Animated.View>
      <HighFiveRight style={styles.iconStyles}/>
      </Animated.View>
        

      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 30,
    shadowColor: "#00000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 9,
    fontSize: 12,
    fontWeight: 'bold',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyles: {
    height: 50,
    width: 50,
    top: 60,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
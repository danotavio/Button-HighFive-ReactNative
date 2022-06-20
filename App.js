import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Animated, Alert } from 'react-native';
import HighFiveRight from './assets/highfive-right.svg';
import HighFiveLeft from './assets/highfive-left.svg';
import { Easing } from 'popmotion';
import Button from 'react-native-button'



const App = () => {
  const [leftIconXDirection] = useState(new Animated.Value(0));
  const [leftIconYDirection] = useState(new Animated.Value(60));
  const [rightIconXDirection] = useState(new Animated.Value(0));
  const [rightIconYDirection] = useState(new Animated.Value(60));
  const [opacityText] = useState(new Animated.Value(5));
  
  function useAnimation() { 
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          rightIconYDirection, {
            toValue: -60,
            duration: 500,
            useNativeDriver: 'true',
            easeOut: 1.2
          }),
          Animated.timing(
            leftIconYDirection,
            {
              toValue: -60,
              duration: 500,
              useNativeDriver: 'true',
              easeOut: 1.2
            }
          )
        ]),
        Animated.parallel([
          Animated.timing(
            rightIconXDirection,{
              toValue: -100,
              duration: 500,
              useNativeDriver: 'true',
              easeInOut: 1.2
            }),
            Animated.timing(
              leftIconXDirection, {
                toValue: 100,
                duration: 500,
                useNativeDriver: 'true',
                easeInOut: 1.2
            })
        ])
    ]).start()

    Animated.timing(
      opacityText, {
        toValue: 0,
        duration: 800,
        easeOut: 1,
        useNativeDriver: 'true'        
      }).start()

  }

  return (
    
    <SafeAreaView style={styles.container}>

      <View style={styles.appButtonContainer}>

      <Animated.View style={{
        transform: [
          {translateY: leftIconYDirection},
          {translateX: leftIconXDirection},
        ]
      }}>
      <HighFiveLeft style={styles.iconStyles}/>
      </Animated.View>
      <Animated.View style={{opacity: opacityText}} >
      <Button
            containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
            disabledContainerStyle={{backgroundColor: 'grey'}}
            style={{fontSize: 20, color: '#9e1d21'}}
            onPress={() => useAnimation()}>
              Finalizar viagem
      </Button>
      </Animated.View>

      <Animated.View style={{
        transform: [
          {translateY: rightIconYDirection},
          {translateX: rightIconXDirection},
        ]
      }}>
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
    position: 'absolute'
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
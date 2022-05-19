import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Animated, Alert } from 'react-native';
import HighFiveRight from './assets/highfive-right.svg';
import HighFiveLeft from './assets/highfive-left.svg';
import { easeInOut } from 'popmotion';
import Button from 'react-native-button'



const App = () => {
  const [xDirection] = useState(new Animated.Value(0));
  const [yDirection] = useState(new Animated.Value(60));
  const animation = function useAnimation() { 
    Animated.sequence([
      Animated.timing(
        yDirection,
        {
          toValue: -60,
          duration: 500,
          useNativeDriver: 'true',
          easeOut: 0.2
        }
      ),
        Animated.timing(
          xDirection,
          {
            toValue: 70,
            duration: 500,
            useNativeDriver: 'true',
            easeInOut: 0.2
          }
        )
      ]).start()
  }

  return (
    
    <SafeAreaView style={styles.container}>

      <View style={styles.appButtonContainer}>

      <Animated.View style={{
        transform: [
          {translateY: yDirection},
          {translateX: xDirection},
        ]
      }}>
      <HighFiveLeft style={styles.iconStyles}/>
      </Animated.View>
      

          <Button
            containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'white'}}
            disabledContainerStyle={{backgroundColor: 'grey'}}
            style={{fontSize: 20, color: '#F7e8a1'}}
            onPress={() => animation()}>
              Press Me
          </Button>

      <Animated.View style={{
        transform: [
          {translateX: xDirection},
          {translateY: yDirection},
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
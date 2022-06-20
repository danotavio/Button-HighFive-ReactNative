import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, Animated, Alert } from 'react-native';
import HighFiveRight from './assets/highfive-right.svg';
import HighFiveLeft from './assets/highfive-left.svg';
import Button from 'react-native-button'



const App = () => {
  const [leftIconXDirection] = useState(new Animated.Value(0));
  const [leftIconYDirection] = useState(new Animated.Value(60));
  const [rightIconXDirection] = useState(new Animated.Value(0));
  const [rightIconYDirection] = useState(new Animated.Value(60));
  const [opacityText] = useState(new Animated.Value(5));
  const [buttonText, setButtonText] = useState('FINALIZAR VIAGEM');
  const [backgroundNewColor, setBackgroundNewColor] = useState('FF7E2E');
  const [textNewColor, setTextNewColor] = useState('#FF7E2E');
  const [disabled, setDisabled] = React.useState(false);  
  

  function useAnimation() { 
   
    Animated.sequence([
      Animated.parallel([
        Animated.timing(rightIconYDirection, {
            toValue: -60,
            duration: 500,
            useNativeDriver: 'true',
            easeOut: 1.2
          }),
          Animated.timing(leftIconYDirection, {
            toValue: -60,
            duration: 500,
            useNativeDriver: 'true',
            easeOut: 1.2
          })
      ]),
      Animated.parallel([
        Animated.timing( rightIconXDirection, {
          toValue: -100,
          duration: 500,
          useNativeDriver: 'true',
          easeInOut: 1.2
        }),
        Animated.timing( leftIconXDirection, {
          toValue: 100,
          duration: 500,
          useNativeDriver: 'true',
          easeInOut: 1.2
        })
      ]),
      Animated.parallel([
        Animated.timing( rightIconYDirection, {
          toValue: 60,
          duration: 500,
          useNativeDriver: 'true',
          easeOut: 1
        }),
        Animated.timing( leftIconYDirection, {
          toValue: 60,
          duration: 500,
          useNativeDriver: 'true',
          easeOut: 1
        })
      ])
    ]).start()
    
    Animated.sequence([
      Animated.timing( opacityText, {
          toValue: 0,
          delay: 100,
          duration: 600,
          useNativeDriver: 'true'
        }),
      Animated.timing( opacityText, {
        toValue: 5,
        delay: 1000,
        duration: 300,
        useNativeDriver: 'true',
      })
    ]).start()

    setTimeout(() => {setButtonText('VIAGEM FINALIZADA'), setBackgroundNewColor('#41D958'), setTextNewColor('#FFFFFF'), setDisabled(true)}, 1350);
    
  }

  return (
    
    <SafeAreaView style={styles.container}>

      <View style={{
        backgroundColor: backgroundNewColor,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        shadowRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 4,
      }}>

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
        style={{color: textNewColor, fontSize: 18, fontWeight: '700', alignContent: 'center'}}
        disabled={disabled}
        onPress={() => useAnimation()} >
        {buttonText}
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
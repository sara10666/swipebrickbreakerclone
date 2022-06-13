import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Brick from './components/Brick';
import Ball from './components/Ball';
export default function App() {
  const screenWidth = Dimensions.get('screen').width
  const screenHeight = Dimensions.get('screen').height
  const gameInProgress = true;
  const groundTouched = false;
  let round = 0;
  const ground = screenHeight/3
  const [brickBottom, setBrickBottom] = useState(screenHeight - (screenHeight/3));

  useEffect(() => {
    while (gameInProgress) {
      //brick moving down a row
      
      if (brickBottom > ground) {
        setBrickBottom(brickBottom => brickBottom - 50);
      } else {
        groundTouched = true;
      }

      //! GAMEPLAY HAPPENS HERE IDK HOW TO DO THAT AHHHHH

      if (groundTouched) {
        gameInProgress = false;
        //reset game to starting/default state
        
      }
      round++;
    }
  })

  return (
    <View style={styles.container}>
      <Brick 
        brickBottom={brickBottom}
        //round={round}
      />
      <Ball 
        round={round}
      />
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


/**
 * PLAY STATE
 *
 * - WHILE GAME IN PROGRESS:
 *  - check if ground is touched by brick
 *  - if no
 *    - take player input to aim and shoot the ball chain
 *    - calculate new game state of each brick
 *    - move all bricks one row
 *  - if yes
 *    - end gameplay
 *    - reset starting state
 *    - prompt player to play again
 *
 */
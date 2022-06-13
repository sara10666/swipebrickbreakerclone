import React from 'react';
import { View } from 'react-native';

const Brick = ({ brickBottom, round }) => {
    const brickWidth = 60
    const brickHeight = 50
    
    return (
        <View style={{
            position: 'absolute',
            backgroundColor: 'orange',
            width: brickWidth,
            height: brickHeight,
            bottom: brickBottom,
            //display: round,
        }}/>

    )   
}

export default Brick;
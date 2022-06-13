import React from 'react';
import { View } from 'react-native';

const Ball = ({ round }) => {
    const radius = 5
    const ballWidth = 10
    const ballHeight = 10
    
    return (
        <View style={{
            backgroundColor: 'green',
            width: ballWidth,
            height: ballHeight,
            borderRadius: radius,
        }}/>

    )   
}

export default Ball;
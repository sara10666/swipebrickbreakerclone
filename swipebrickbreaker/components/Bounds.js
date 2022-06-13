import React from 'react'
import { View } from 'react-native'

const Bounds = ({screenWidth, screenHeight, ground}) => {

    return (
        <>
            <View style={{ //ceiling
                position: 'absolute',
                backgroundColor: black,
                height: 10,
                width: screenWidth,
                bottom: screenHeight - 200,

            }}
            />

           <View style={{ //floor
                position: 'absolute',
                backgroundColor: black,
                height: 10,
                width: screenWidth,
                bottom: screenHeight - 600,
           }}/>
        
        
        </>
    )
}

export default Bounds;
import React from 'react'
import {TouchableOpacity, Text } from 'react-native'
import * as Animatable from 'react-native-animatable'

import { topicItem } from '../styles'

const TopicItem = (props) => {
    return (
        <TouchableOpacity 
        style={[topicItem.container,{backgroundColor:`#${props.item.color}`}]}
        onPress={props.onpress}
        >
            <Animatable.Text
            style={topicItem.text} 
            animation="slideInDown" 
            iterationCount={1} 
            direction="alternate">{props.item.name}</Animatable.Text>
            {/* <Text style = {topicItem.text}>{props.item.name}</Text> */}
        </TouchableOpacity>
       
    )
}

export {TopicItem}



            
          
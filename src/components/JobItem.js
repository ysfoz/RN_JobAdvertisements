import React from 'react'
import { View, Text,TouchableOpacity} from 'react-native'

import {jobsSelection} from '../styles'

const JobItem = (props) => {
    return (
        <TouchableOpacity
        style = {jobsSelection.container}
        onPress = {props.onpress}
        onLongPress= {props.remover}
        >
        <Text style ={jobsSelection.text}>{props.job.title}</Text>
        <Text style ={jobsSelection.text}>{props.job.location}</Text> 
        </TouchableOpacity>
       
    )
}

export  {JobItem}

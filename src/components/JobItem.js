import React from 'react'
import { View, Text,TouchableOpacity} from 'react-native'

import {jobsSlection} from '../styles'

const JobItem = (props) => {
    return (
        <TouchableOpacity
        style = {jobsSlection.container}
        onPress = {props.onpress}
        >
            <Text style ={jobsSlection.text}>{props.job.title}</Text>
        </TouchableOpacity>
       
    )
}

export  {JobItem}

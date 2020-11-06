import React from 'react'
import { View, Text,Image } from 'react-native'

import {images} from '../styles'

const Images = (props) => {
    return (
        <View style={images.container}>
            <Image
            style= {images.image}
            source={(props.url)}
            />
        </View>
    )
}

export {Images}

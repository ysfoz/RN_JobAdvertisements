import React from 'react'
import { View, Text ,SafeAreaView, ScrollView,Image } from 'react-native'
import * as Animatable from 'react-native-animatable';


import {intro} from '../styles'
import {TopicItem,Images} from '../components'

const topics = [
    {
      id: 0,
      name: 'Java',
      color: 'fb5607',
    },
    {
      id: 1,
      name: 'Python',
      color: '007f5f',
    },
    {
      id: 2,
      name: 'Javascript',
      color: 'ffb703',
    },
    {
      id: 3,
      name: '.NET',
      color: '023e7d',
    },
    {
      id: 4,
      name: 'Dart',
      color: '001845',
    },
    {
      id: 5,
      name: 'Go',
      color: 'f8961e',
    },
    {
      id: 6,
      name: 'Ruby',
      color: 'e63946',
    },
    {
      id: 7,
      name: 'C',
      color: 'fb8b24',
    },
    {
      id: 8,
      name: 'C++',
      color: '06d6a0',
    },
  ];

  
  const Introduction = (props) => {
    function Press(lang) {
        props.navigation.navigate('Jobs',{selectedLang:lang})        
    }
   
    return (
        <SafeAreaView style={{flex:1}}>
        <View style={{flex:1,backgroundColor:'#102027'}}>
        <Animatable.Text
                      style={[intro.animation,{fontSize:25,textAlign:'center',fontWeight:'bold',marginTop:10}]} 
                      animation="zoomIn" 
                      iterationDelay = {1000}
                      iterationCount={3}
                      duration = {1000}
                      direction="alternate">Choose your Programing Language</Animatable.Text>
            <ScrollView
            horizontal
            style= {intro.scroll}
            contentContainerStyle={intro.contentContainer}
            >
                
                {
                  topics.map((t)=> {
                    return <TopicItem key={t.id} item={t} onpress ={() => Press(t.name)}
                    />})
                  }
                
            </ScrollView>
                  <Animatable.Text
                      style={intro.animation} 
                      animation="slideInLeft" 
                     
                      iterationCount={50} 
                      direction="alternate">   ➢   ➢   ➢   ➢   ➢  </Animatable.Text>
            
        </View>
        <View>
          <Images url = {require('../assets/developer.jpg')}/>
        </View>
        </SafeAreaView>
    )
}

export { Introduction }

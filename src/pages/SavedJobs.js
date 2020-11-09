import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';

import {JobItem} from '../components'
import {savedjobs} from '../styles'


const SavedJobs = (props) => {
  const [jobList, setJobList] = useState([])

  AsyncStorage.getItem("@SAVED_JOBS")
  .then(res => {
    const list = JSON.parse(res);
    setJobList(list);
  })
  
    const deleteItem =(params) =>{
        const newArray = [...jobList]
        let index = newArray.findIndex(job => job === params )
        newArray.splice(index,1)
       
        AsyncStorage.setItem('@SAVED_JOBS', JSON.stringify(newArray))
    }

  return (
    <SafeAreaView style={{flex:1}}>
      <View style= {savedjobs.container}>
        <FlatList
        keyExtractor={(_,index)=> index.toString()}
        data={jobList}
        renderItem = {({item})=>  <JobItem job={item} remover ={() => deleteItem(item)}/>}
        
        />
         <TouchableOpacity style={savedjobs.button}>
          <Animatable.Text 
          animation="flash" 
          easing="ease-out" 
          iterationCount="infinite" 
          style={savedjobs.buttontext}
          onPress = {() => AsyncStorage.setItem('@SAVED_JOBS', JSON.stringify([]))}
          >Delete All</Animatable.Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export { SavedJobs };

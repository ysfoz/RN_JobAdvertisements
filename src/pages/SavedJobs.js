import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";

import {JobItem} from '../components'
import {savedjobs} from '../styles'

// onst onJobSave = async() => {

//   let savedJobList = await AsyncStorage.getItem('@SAVED_JOBS');
//   savedJobList = savedJobList == null ? [] : JSON.parse(savedJobList)

//   const updatedJobList = [ ...savedJobList,selectedJob]

//   AsyncStorage.setItem('@SAVED_JOBS', JSON.stringify(updatedJobList))
// }

const SavedJobs = (props) => {
  const [jobList, setJobList] = useState([])

  AsyncStorage.getItem("@SAVED_JOBS")
  .then(res => {
    const list = JSON.parse(res);
    setJobList(list);
  })
  
    const deleteItem =(params) =>{
        const newArray = [...jobList]
        console.log(newArray)
        let index = newArray.findIndex(job => job === params )
        newArray.splice(index,1)
        console.log("deleteItem ->  newArray",  newArray)
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
      </View>
    </SafeAreaView>
  );
};

export { SavedJobs };

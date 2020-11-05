import Axios from "axios";
import React,{useEffect, useState} from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";

import {JobItem} from '../components'

const Jobs = (props) => {
    const [data,setData] =useState([])

    const { selectedLang } = props.route.params;
    const fetchData = async () => {
    const response = await Axios.get(
      `https://jobs.github.com/positions.json?search=${selectedLang.toLowerCase()}`
      );
      setData(response.data)
  };

  const renderJobs = ({item}) => <JobItem job = {item}/>
    

  useEffect(()=> {
    fetchData();
},[]);
  
  return (
    <SafeAreaView>
      <View>
        <Text>jobs{selectedLang}</Text>
        <FlatList
        keyExtractor={(_,index) => index.toString()}
        data={data}
        renderItem={renderJobs}
        />
      </View>
    </SafeAreaView>
  );
};

export { Jobs };

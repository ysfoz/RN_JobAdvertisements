import Axios from "axios";
import React,{useEffect, useState} from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import Modal from 'react-native-modal';

import {JobItem} from '../components'
import { jobs } from "../styles";

const Jobs = (props) => {
    const [data,setData] =useState([])
    const [modalFlag,setModalFlag] = useState(false)
    const [selectedJob,setSelectedJob] =useState('')

    const { selectedLang } = props.route.params;
    const fetchData = async () => {
    const response = await Axios.get(
      `https://jobs.github.com/positions.json?search=${selectedLang.toLowerCase()}`
      );
      setData(response.data)
      console.log(response)
      
  };
    const Press = (job)=> {
    setModalFlag(true)
    setSelectedJob(job)
    }

    const renderJobs = ({item}) => <JobItem job = {item} onpress = {()=>Press(item)}/>
    

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

        <Modal isVisible={modalFlag} onBackdropPress ={()=> setModalFlag(false)} >
            <View style ={jobs.modal}>
                <Text>{selectedJob.title}</Text>
            </View>
        </Modal>

      </View>
    </SafeAreaView>
  );
};

export { Jobs };

// modal icerisnde gosteriyoruz suan, sadece buna desc eklenebilir,
// ve style verilebilir. sonrasin saved jobs yapilaca 2 saat bitti.
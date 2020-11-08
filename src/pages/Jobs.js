import Axios from "axios";
import React,{useEffect, useState} from "react";
import { View, Text, SafeAreaView, FlatList,Button, TouchableOpacity } from "react-native";
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      
  };
    const Press = (job)=> {
    setModalFlag(true)
    setSelectedJob(job)
    }

    const renderJobs = ({item}) => <JobItem job={item} onpress = {()=>Press(item)}/>
    

  useEffect(()=> {
    fetchData();
},[]);
  
const onJobSave = async() => {

  let savedJobList = await AsyncStorage.getItem('@SAVED_JOBS');
  savedJobList = savedJobList == null ? [] : JSON.parse(savedJobList)

  const updatedJobList = [ ...savedJobList,selectedJob]

  AsyncStorage.setItem('@SAVED_JOBS', JSON.stringify(updatedJobList))
}

  return (
    <SafeAreaView style={{flex:1}}>
      <View style = {jobs.container}>
        <Text style={{textAlign:'center',fontWeight:'bold',fontSize:20}}>
        JOBS FOR {selectedLang.toUpperCase()}
        </Text>
        <FlatList
        keyExtractor={(_,index) => index.toString()}
        data={data}
        renderItem={renderJobs}
        />

        <TouchableOpacity 
        style={jobs.button}
        onPress= {()=> props.navigation.navigate('favorit')}
        >
          <Text style = {jobs.buttontext}>Get Saved</Text>
        </TouchableOpacity>
       



        <Modal isVisible={modalFlag} onBackdropPress ={()=> setModalFlag(false)} >
            <View style ={jobs.modal}>
              <View>
                <Text style={jobs.modaltext}>{selectedJob.title}</Text>
                <Text style={jobs.modaltext}>Company :  {selectedJob.company}</Text>
                <Text style={jobs.modaltext}>Date:  {selectedJob.created_at}</Text>
                <Text style={jobs.modaltext}>Webseite:  {selectedJob.company_url}</Text>
              </View>
              <Button title = 'Save' onPress={onJobSave}/>
            </View>
        </Modal>

      </View>
    </SafeAreaView>
  );
};

export { Jobs };

// modal icerisnde gosteriyoruz suan, sadece buna desc eklenebilir,
// ve style verilebilir. sonrasin saved jobs yapilaca 2 saat bitti.
// 2 tane input ekleyelim birisi mail birisi password, 3 tane button ekleyelim,
//birisi login , birisi register , biriside hesabi silmek icin olsun.
// ayri bir component icerinde json formatinda bos 1 array olusturalm
//register dedigimzde mail ve passwordu bu arraye gonderelim,bunu yaparkende 
// item{
//email:xxxxxx
//pass:xxxxxx
//} seklinde olsun, sonra login butonuna basildiginda eger girilen  mail
//listede varsa navigation ile kullanici sayfasina gecis yapsin, yoksa alert ile 
//uyari alalim. eger mail ve password girilmemisse, yada password 6 kareterden 
//azsa yine alert versin. son buton ile hesap silelim. girilen maili listeden bulsun
//ve silsin, eger yapabilirsek password ile confirm almaya calisalim. todo appte yapmistik

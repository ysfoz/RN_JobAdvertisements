import {StyleSheet,Dimensions} from 'react-native'


export const topicItem = StyleSheet.create({
    container:{
        padding:20,
        margin:7,
        borderRadius:6,
        width:Dimensions.get('screen').width/3.6

    },
    text:{
        fontWeight: 'bold',
        color:'white'
        
    }
})

export const intro=StyleSheet.create({
    scroll:{
       
        
    },
    contentContainer:{
        alignItems:'flex-start'
        
    },
    animation:{
        color:'red',
        marginTop:50,

    }
})

export const jobsSlection = StyleSheet.create({
    container:{
        padding:10,
        margin:10,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#efefef'
    },
    text:{
        fontWeight:'bold'
    }
})

export const jobs = StyleSheet.create({
    modal:{
        padding:10,
        margin:10,
        backgroundColor:'azure'
    }
})

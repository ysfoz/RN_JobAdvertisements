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
       marginTop:30
        
    },
    contentContainer:{
        alignItems:'flex-start'
        
    },
    animation:{
        color:'crimson',
        
        fontSize:20

    }
})

export const jobsSelection = StyleSheet.create({
    container:{
        padding:10,
        margin:3,
    //    borderWidth:2,
       backgroundColor:'#039be5',
       borderRadius:10
    },
    text:{
        fontWeight:'bold',
        color:'#ffffff'
    }
})

export const jobs = StyleSheet.create({
    modal:{
        padding:10,
        margin:10,
        backgroundColor:'azure',
        borderRadius:20,
        
        
        
    },
    modaltext:{
        fontSize:15,
        padding:5,
        margin:4,   
    },
    container:{
        backgroundColor:'#e0f7fa',
        flex:1
    },
    button:{
        backgroundColor:'crimson',
        padding:10,
        borderRadius:5,
        position:'absolute',
        right:5,
        bottom:5,
        height:100,
        width:100,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center'
    },
    buttontext:{
        color:'white',
        fontSize:15,
        fontWeight:'bold'
    }
})

export const images = StyleSheet.create({
    image:{
        width:Dimensions.get('screen').width ,
        alignSelf:'center',
        height:Dimensions.get('screen').height *0.73,
        

    },
    container:{
        
    }
})

export const savedjobs = StyleSheet.create({
    container:{
        backgroundColor:'#e0e0e0',
        flex:1
    },
    button:{
        backgroundColor:'crimson',
        padding:10,
        borderRadius:5,
        position:'absolute',
        right:5,
        bottom:5,
        height:100,
        width:100,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center' 
    },buttontext:{
        color:'white',
        fontSize:15,
        fontWeight:'bold'
    }

})
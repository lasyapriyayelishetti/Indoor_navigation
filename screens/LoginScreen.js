
import {ImageBackground,Text, StyleSheet,  View,TextInput } from 'react-native'
import React ,{useEffect, useState} from 'react'
import { TouchableOpacity } from 'react-native'

import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';
const image = {uri: 'https://www.fonewalls.com/wp-content/uploads/2020/04/720x1560-Wallpaper-HD-041-300x585.jpg'};

const LoginScreen = () => {
 
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigation=useNavigation()
  
  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged(user=>{
      if (user){
        navigation.navigate("Map")
      }
    })
    return unsubscribe
  },[])
  const handleLogin=()=>{
    auth
    .signInWithEmailAndPassword(email,password)
    .then(userCredentials=>{
      const user=userCredentials.user;
      
      console.log("logged in with:",user.email);
    })
    .catch(error=>alert(error.message))
  }
  const handleSignUp=()=> {
    auth
    .createUserWithEmailAndPassword(email,password)
    .then(userCredentials=>{
      const user=userCredentials.user;
      console.log("Registered with:",user.email);
    })
    .catch(error=>alert(error.message))
  }

  return (
    
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <View style={styles.textAndInputContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Welcome</Text>
       
          
          <View style={styles.inputContainer}>
          
          <Text style={styles.text2}>Please Login/Register {'\n'} below to continue...</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text=>setEmail(text)}
          style={styles.input1}
          
        />
        <TextInput
          placeholder="password"
          value={password}
          onChangeText={text=>setPassword(text)}
          style={styles.input2}
          secureTextEntry
        />
        <TouchableOpacity 
                  onPress={handleLogin}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Login</Text>
        
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={handleSignUp}
                  style={[styles.button,styles.buttonOutline]}
                >
                  <Text style={styles.buttonOutlineText}>Register</Text>
        
                 </TouchableOpacity>
        
      

          </View>
          
      </View>
    </View>
    </ImageBackground>
  </View>
    
    
      
  )
}

export default LoginScreen

const styles = StyleSheet.create({

  container:{
    margin:0,
    padding:0,
    backgroundColor:'black',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
  },
  text2:{
    marginTop:'5%',
   
    fontWeight:'1200',
    fontSize:20,
    color:'black',
    
  },
  text:{
    padding:10,
    paddingLeft:'30%',

    fontWeight:'1000',
    fontSize:30,
    color:'white',
    borderRadius:5,
   
  },
  textContainer:{
    paddingTop:'60%',
   
  marginLeft:4,
   
   width:'98%',
   height:'50%',
   
   
   
   
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  textAndInputContainer:{
    padding:11,
   
   
    width:340,
    height:740,
    borderRadius:5,

  },
  inputContainer:{
    marginTop:"3%",
    height:300,
    
    backgroundColor:'#a9a9a9',
    
    borderRadius:5,
    
    alignItems:'center',
    
  },
  input1:{
    backgroundColor:'#c0c0c0',
    paddingHorizontal:15,
    paddingVertical:10,
    width:'90%',
    borderRadius:10,
    marginTop:25,

  },
  input2:{
    backgroundColor:'#c0c0c0',
    paddingHorizontal:15,
    paddingVertical:10,
    width:'90%',
    borderRadius:10,
    marginTop:5,
    marginBottom:8,

  },
 
  button:{
    // login,register buttons
    margin:3,
    backgroundColor:'grey',
    width:'40%',
    padding:10,
    borderRadius:10,
    borderColor:'black',
    
    alignItems:'center',
  },
  buttonOutline:{
    backgroundColor:'grey',
    marginTop:2, 
    //borderColor:'grey',
   
    
  },
  // to give space bw buttons
  buttonText:{
      color:'white',
      fontWeight:'700',
      fontSize:12,
  },
  buttonOutlineText:{ 
    color:'white',
    fontWeight:'700',
    fontSize:12,
  },
  

})
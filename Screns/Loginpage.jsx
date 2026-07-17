
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'

const App = () => {
  const[Email,setEmail]=useState('')
  const [Password,setPassword]=useState('')
  return (
    <View style={styles.MainContainer}>
      <Text style={styles.HeadWelcome}>Welcome Back!</Text>
      <Text style={styles.SubHeading}>Login to continue </Text>
      <View style={styles.SubContainer}>
        
        
        
        <TextInput style={styles.InputEmail}
          placeholder='    Email Address'
          keyboardType='email-address'
          onChangeText={(item)=>setEmail(item)}
          placeholderTextColor={'white'}
        />
        <TextInput style={styles.InputPassword}
          placeholder='     Password'
          keyboardType='visible-password'
          onChangeText={(item)=>setPassword(item)}
          placeholderTextColor={'white'}
          secureTextEntry
        />
        <TouchableOpacity style={{ marginLeft: 250 }}>
          <Text style={{ fontSize: 15, color: 'blue', color: '#3B82F6' }}>Forgot Password?</Text>
        </TouchableOpacity>
        <Text style={{ fontWeight: '400', color: '#1E293B' }}>        ----------------------------------------or---------------------------------------</Text>
        <TouchableOpacity style={styles.GoogleContaner}>
          <Image style={styles.Gimage} source={{ uri: 'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Search_logo.width-500.format-webp.webp' }} />
          <Text style={styles.TextGoogle}>Countinue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ContactContainer}>
          <Image style={styles.Phoneimage} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/15782/15782524.png' }} />
          <Text style={styles.TextGoogle}> Countinue with Phone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.LoginButton}>
          <Text style={{ fontSize: 30, color: 'black', fontWeight: '500' }}>Login</Text>
        </TouchableOpacity >
        <Text style={{ marginTop: 15, marginLeft: 170, fontSize: 14, color: 'white' }}>Dont't have an account?
          <TouchableOpacity style={styles.SignupButton}>
            <Text style={{ color: '#3B82F6', fontSize: 16, fontWeight: '400', height:19}}> Sing Up</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>


  )
}

export default App

const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    borderRadius: 12,
  },
  HeadWelcome: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white'

  },
  SubHeading: {
    fontWeight: '500',
    color: 'white'
  },
  SubContainer: {
    marginTop: 29,
    gap: 15
  },
  TextGoogle: {
    margin: 14,
    fontSize: 18,
    fontWeight: '800',
    alignItems: 'center',
    color: 'white'


  },
  GoogleContaner: {
    borderWidth: 1,
    width: 375,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#1E293B'
  },
  ContactContainer: {
    borderWidth: 1,
    width: 375,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#3B82F6'
  },
  Gimage: {
    margin: 15,
    height: 20,
    width: 20
  },
  Phoneimage: {
    margin: 15,
    height: 25,
    width: 20
  },
  InputEmail: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    height: 50,
    backgroundColor: '#1E293B',
    color:'white',
    padding:10
  },
  InputPassword: {
    padding:10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    height: 50,
    backgroundColor: '#1E293B',
    paddingLeft:15,
    color:'white'
  
  },
  LoginButton: {
    marginTop: 40,
    backgroundColor: 'blue',
    width: 370,
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#22C55E',
    justifyContent: 'center',
    paddingLeft:15
  },
  SignupButton:{
  }
})
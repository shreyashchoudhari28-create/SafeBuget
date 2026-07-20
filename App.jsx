import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import Flashcard from './SRC/component/Flashcard'
import Elevatescard from './SRC/component/Elevatedcard'
import TreadingPlace from './SRC/component/TreadingPlace'
import { SafeAreaView } from 'react-native-safe-area-context'
import Loginpage from './SRC/Screns/Loginpage'
import Safebuget from './SRC/Screns/Safebuget'
import Profilee from './SRC/Screns/Profilee'
import Signup from './SRC/Screns/Signup'
import Help from './SRC/Screns/Help'
import SplashScreen from './SRC/Screns/SplashScreen'
import Settingss from './SRC/Screns/Settingss'
import Payment from './SRC/Screns/Payment'
import Booking from './SRC/Screns/Booking'
import Smartfare from './SRC/Screns/Smartfare'
import Scam from './SRC/Screns/Scam'
import Permisssion from './SRC/Screns/Permisssion'
import TravelTips from './SRC/Screns/TravelTips'
import React from 'react'

const App = () => {
  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: '#0B1320' }}>
      {/* <SplashScreen/> */}
      {/* <Loginpage /> */}
      {/* <Signup /> */}
      {/* <Permisssion/> */}
      {/* <Safebuget /> */}
      {/* <Smartfare/> */}
     {/* 2,8,9,11,12,13 */}
      <Scam/> 
      {/* <TravelTips/> */}
         {/* <Profilee /> */}
      {/* <Booking/> */}
       {/* <Payment/> */}
       {/* <Settingss /> */}
      {/* <Help /> */}
    </SafeAreaView>



  )
}

export default App

const styles = StyleSheet.create({})
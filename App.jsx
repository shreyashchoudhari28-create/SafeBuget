import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import Flashcard from './SRC/component/Flashcard'
import Elevatescard from './SRC/component/Elevatedcard'
import TreadingPlace from './SRC/component/TreadingPlace'
import { SafeAreaView } from 'react-native-safe-area-context'
import Loginpage from './SRC/Screns/Loginpage'
import Safebuget from './SRC/Screns/Safebuget'
import Profile from './SRC/Screns/Profile'
import Profilee from './SRC/Screns/Profilee'
import Signup from './SRC/Screns/Signup'
import Help from './SRC/Screns/Help'
import React from 'react'

const App = () => {
  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: '#0B1320' }}>
      {/* <Loginpage /> */}
      {/* <Signup /> */}
      {/* <Safebuget /> */}
      <Profilee />
      {/* <Help /> */}
    </SafeAreaView>



  )
}

export default App

const styles = StyleSheet.create({})
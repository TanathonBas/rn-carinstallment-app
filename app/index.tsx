import { router } from 'expo-router'
import React, { useEffect } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'

const carloan = require('@/assets/images/carloan.png')

export default function Index() {
  useEffect(() => {
    setTimeout(() => {
      router.replace('/input')
    }, 3000)
  })


  return (
    <View style={styles.container}>
      <Image source={carloan} style={styles.carloan} />
      <Text style={styles.appName}>Smart Auto Loan</Text>
      <Text style={{ fontSize: 20, color: 'white', fontFamily: 'Kanit_400Regular' }}>วางแผนออกรถฉบับโปร</Text>
      <br />
      <br />
      <ActivityIndicator size="large" color="white" />
    </View>
  )
}

const styles = StyleSheet.create({
  appName: {
    fontFamily: 'Kanit_700Bold',
    color: 'white',
    fontSize: 30,
  },
  carloan: {
    width: 150,
    height: 150,
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#1e293b',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
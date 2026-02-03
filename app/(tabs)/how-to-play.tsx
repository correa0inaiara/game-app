import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HowToPlay = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text>Como Jogar</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    margin: 25
  }
})

export default HowToPlay
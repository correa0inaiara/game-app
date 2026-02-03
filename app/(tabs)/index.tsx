import { View, Text, useColorScheme, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import Menu from '@/app/components/menu'

const index = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={{ 
        color: Colors.light.text,
        fontSize: 45,
        textAlign: 'center'
      }}>Jogo da Velha</Text>

      <Menu />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    margin: 25
  }
})

export default index
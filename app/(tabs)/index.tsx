import { View, Text, useColorScheme, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import Menu from '@/app/components/menu'
import Marca from '../components/marca';
import { fonts } from '@/constants/fonts';

const index = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.titulo}>Jogo da Velha</Text>

      <Menu />

      <Marca />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    position: 'relative',
    margin: 25
  },
  titulo: { 
    fontFamily: fonts.regular.fontFamily,
    color: Colors.light.text,
    fontSize: 55,
    textAlign: 'center',
  }
})

export default index
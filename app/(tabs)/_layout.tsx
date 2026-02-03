import { View, Text, Image, useColorScheme } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { icons } from '@/constants/icons'
import { Colors } from '@/constants/theme'

const _layout = () => {
    
  const colorScheme = useColorScheme();

  return (
    <Tabs
        screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            },
            tabBarStyle: {
                backgroundColor: Colors[colorScheme ?? 'dark'].border
            }
        }}
    >
        <Tabs.Screen
            name="index"
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <Image source={icons.home} />
                )
            }}
        />

        <Tabs.Screen
            name="play"
            options={{
                title: 'Jogo',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <Image source={icons.play} />
                )
            }}
        />

        <Tabs.Screen
            name="settings"
            options={{
                title: 'Configurações',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <Image source={icons.settings} />
                )
            }}
        />

        <Tabs.Screen
            name="how-to-play"
            options={{
                title: 'Como Jogar',
                headerShown: false,
                tabBarIcon: ({focused}) => (
                    <Image source={icons.info} />
                )
            }}
        />
    </Tabs>
  )
}

export default _layout
import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/theme'
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useRouter } from 'expo-router';
import { fonts } from '@/constants/fonts';

export type Menu = {
  id: number,
  nome: string,
  route: Route
}

export type Route = '/play' | '/how-to-play' | '/settings'

const Menu = () => {
  const router = useRouter()
  const colorScheme = useColorScheme();
  const opcoes: Menu[] = [
    {
      id: 0,
      nome: 'Jogar',
      route: '/play'
    },
    {
      id: 1,
      nome: 'Como Jogar',
      route: '/how-to-play'
    },
    {
      id: 2,
      nome: 'Configurações',
      route: '/settings'
    }
  ]
  return (
    <View>
      {opcoes && opcoes.length > 0 && (
        opcoes.map((opcao) => (
          <Text 
            key={opcao.id} 
            style={{ 
              color: Colors[colorScheme ?? 'dark'].text,
              fontSize: 35,
              fontFamily: fonts.regular.fontFamily,
            }}
            onPress={() => router.push(opcao.route as Route)}
          >{opcao.nome}</Text>
        ))
      )}
    </View>
  )
}

export default Menu
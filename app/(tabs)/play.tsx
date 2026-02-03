import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ModalCustom from '../components/modal';
import { Colors } from '@/constants/theme';
import { Player, PLAYERS } from '@/constants/players';
import { useFocusEffect } from '@react-navigation/native';

const Play = () => {
  const [playerPiece, setPlayerPiece] = useState(PLAYERS.PLAYER_X)
  const [modalVisible, setModalVisible] = useState(false);
  const [boardState, setBoardState] = useState([
    '', '', '',
    '', '', '',
    '', '', ''
  ])
  const handleCellPress = (cellIndex: number) => {
    setBoardState(prev => {
      const next = [...prev]
      if (next[cellIndex] === '') next[cellIndex] = playerPiece
      return next
    })

  }

  useFocusEffect(
    useCallback(() => {
      setModalVisible(true)
      setBoardState([
        '', '', '',
        '', '', '',
        '', '', ''
      ])
    }, [])
  )

  useEffect(() => {

  }, [boardState])

  const handleEscolherPlayer = (player: Player) => {
    setPlayerPiece(player)
    setModalVisible(false)
  }
  return (
    <SafeAreaView style={styles.safeArea}>
        <ModalCustom
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="Qual será sua peça"
        closeButton={false}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => handleEscolherPlayer(PLAYERS.PLAYER_X)}>
            <Text style={styles.playerX}>X</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => handleEscolherPlayer(PLAYERS.PLAYER_O)}>
            <Text style={styles.playerO}>O</Text>
          </TouchableOpacity>
        </View>
        {/* Pode colocar qualquer JSX */}
      </ModalCustom>
      <View style={styles.board}>
        {[0, 1, 2].map(row => (
          <View key={row} style={styles.row}>
            {[0, 1, 2].map(col => {
              const cellIndex = row * 3 + col;
              return (
                <TouchableOpacity
                  key={col}
                  style={styles.cell}
                  onPress={() => handleCellPress(cellIndex)}>
                  <Text>
                    {boardState[cellIndex]}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    margin: 25
  },

  modalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 100,
  },

  playerX: {
    fontSize: 45,
    color: Colors.light.icon
  },

  playerO: {
    fontSize: 45,
    color: Colors.light.icon
  },

  // Container principal do tabuleiro
  board: {
    aspectRatio: 1, // Mantém quadrado perfeito
    width: '90%', // Ocupa 90% da largura disponível
    maxWidth: 400, // Limite máximo para telas grandes
    alignSelf: 'center', // Centraliza horizontalmente
    backgroundColor: '#f0f0f0', // Cor de fundo do tabuleiro
    borderRadius: 12,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Sombra no Android
  },
  
  // Cada linha do tabuleiro (contém 3 células)
  row: {
    flex: 1, // Divide espaço igualmente entre 3 linhas
    flexDirection: 'row', // Células lado a lado
  },
  
  // Cada célula/clique do jogo
  cell: {
    flex: 1, // Divide espaço igualmente entre 3 células
    aspectRatio: 1, // Mantém quadrado
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 4, // Espaço entre células
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ddd',
    // Efeito de pressão
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  
  // Texto dentro da célula (X ou O)
  cellText: {
    fontSize: 48,
    fontWeight: 'bold',
    // Você pode diferenciar X e O com cores
    // color: value === 'X' ? '#FF6B6B' : '#4ECDC4'
  },
  
  // Estilo para célula vencedora (opcional)
  winningCell: {
    backgroundColor: '#E8F5E9', // Verde bem claro
    borderColor: '#4CAF50',
    borderWidth: 3,
  },
  
  // Estilo para célula com hover/ativo (opcional)
  cellActive: {
    backgroundColor: '#f9f9f9',
    transform: [{ scale: 0.98 }], // Leve efeito de pressão
  },
})

export default Play
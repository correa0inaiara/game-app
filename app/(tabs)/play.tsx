import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ModalCustom from '../components/modal';
import { Colors } from '@/constants/theme';
import { PLAYER, Player, PlayerPiece, PLAYERS_PIECE } from '@/constants/players';
import { useFocusEffect } from '@react-navigation/native';
import { fonts } from '@/constants/fonts';

export const MIN_POSITIONS = 1
export const MAX_POSITIONS = 9

const Play = () => {
  const [computerPiece, setComputerPiece] = useState(PLAYERS_PIECE.PLAYER_O)
  const [playerPiece, setPlayerPiece] = useState(PLAYERS_PIECE.PLAYER_X)
  const [modalVisible, setModalVisible] = useState(false);
  const [boardState, setBoardState] = useState([
    '', '', '',
    '', '', '',
    '', '', ''
  ])

  const [linhaTransversal1, setLinhaTransversal1] = useState(false)
  const [linhaTransversal2, setLinhaTransversal2] = useState(false)
  const [linhaHorizontal1, setLinhaHorizontal1] = useState(false)
  const [linhaHorizontal2, setLinhaHorizontal2] = useState(false)
  const [linhaHorizontal3, setLinhaHorizontal3] = useState(false)
  const [linhaVertical1, setLinhaVertical1] = useState(false)
  const [linhaVertical2, setLinhaVertical2] = useState(false)
  const [linhaVertical3, setLinhaVertical3] = useState(false)

  const handleCellPress = (cellIndex: number) => {
    // verifica se célula vazia
      // se vazia, marca a escolha do usuário e já define uma posição aleatória para o computador
      // senão, não faz nada
    if (verificaPosicao(cellIndex)) {
      setBoardState(prev => {
        const next = [...prev]
        if (next[cellIndex] === '') next[cellIndex] = playerPiece
        return next
      })
      if (verificaJogo()) {
        handleJogoFinalizado(true, PLAYER.USER)
      } else {
        let numero = escolhePosicaoComputador(cellIndex)
        if (verificaPosicao(numero)) {
          setBoardState(prev => {
            const next = [...prev]
            next[numero] = computerPiece
            return next
          })
          verificaJogo()
        } else {
          while (!verificaPosicao(numero)) {
            numero = escolhePosicaoComputador(cellIndex)
            console.log('escolhido outro numero para pc: ', numero)
            setBoardState(prev => {
              const next = [...prev]
              next[numero] = computerPiece
              return next
            })
            verificaJogo()
          }
        }
      }
    }
  }

  const finalizarJogo = () => {

  }
  
  const exibirMensagem = () => {

  }

  const handleJogoGanho = (ganhador: Player) => {
    finalizarJogo()
    if (ganhador === PLAYER.USER) {
      exibirMensagem()
    }
  }

  const handleJogoFinalizado = (temGanhador: boolean, ganhador?: Player) => {
    if (temGanhador && ganhador) {
      handleJogoGanho(ganhador)
    }
  }

  const verificaJogo = () => {

    const contagem = getSomaPosicoesJogadores()
    console.log('contagem', contagem)
    if (contagem.o < 3 && contagem.x < 3) {
      return false
    }

    if (verificaPosicoes(0,1,2)) {
      setLinhaHorizontal1(true)
    }
    if (verificaPosicoes(3,4,5)) {
      setLinhaHorizontal2(true)
    }
    if (verificaPosicoes(6,7,8)) {
      setLinhaHorizontal3(true)
    }

    if (verificaPosicoes(0,3,6)) {
      setLinhaVertical1(true)
    }
    if (verificaPosicoes(1,4,7)) {
      setLinhaVertical2(true)
    }
    if (verificaPosicoes(2,5,8)) {
      setLinhaVertical3(true)
    }

    if (verificaPosicoes(0,4,8)) {
      setLinhaVertical2(true)
    }
    if (verificaPosicoes(2,4,6)) {
      setLinhaVertical3(true)
    }

    if (verificaPosicoes(0,1,2) || verificaPosicoes(3,4,5) || verificaPosicoes(6,7,8)
    || verificaPosicoes(0,3,6) || verificaPosicoes(1,4,7) || verificaPosicoes(2,5,8)
    || verificaPosicoes(0,4,8) || verificaPosicoes(2,4,6)) {
      return true
    }
    return false
    
    // horizontais
    // const horizontais = [
    //   [0, 1, 2],
    //   [3, 4, 5],
    //   [6, 7, 8]
    // ]
    // const verticais = [
    //   [0, 3, 6],
    //   [1, 4, 7],
    //   [2, 5, 8]
    // ]
    // const diagonais = [
    //   [0, 4, 8],
    //   [2, 4, 6]
    // ]


  }

  const verificaPosicoes = (posicao1: number, posicao2: number, posicao3: number) => {
    if (boardState[posicao1] === '' || boardState[posicao2] === '' || boardState[posicao3] === '') return false
    if (boardState[posicao1] === boardState[posicao2] && boardState[posicao1] === boardState[posicao3]) {
      return true
    }
    return false
  }

  const getSomaPosicoesJogadores = () => {
    const contagem = boardState.reduce((acc, celula) => {
      if (celula === 'X') acc.x++;
      if (celula === 'O') acc.o++;
      return acc;
    }, { x: 0, o: 0 });
    return contagem
  }

  const getRandomNumber = () => {
    return Math.floor(Math.random() * (MAX_POSITIONS - MIN_POSITIONS + 1)) + MIN_POSITIONS
  }

  const escolhePosicaoComputador = (cellIndex: number) => {
    let numero = getRandomNumber()
    while (numero === cellIndex) {
      numero = getRandomNumber()
      console.log('gerado outro número: ', numero)
    }
    return numero
  }

  const verificaPosicao = (cellIndex: number): Boolean => {
    let count = 0
    boardState.forEach(position => {
      if (position === '') count += 1
    });

    if (count > 1) {
      if (boardState[cellIndex] === '') {
        return true
      }
      return false
    }
    return true
  }

  useFocusEffect(
    useCallback(() => {
      setModalVisible(true)
      setBoardState([
        '', '', '',
        '', '', '',
        '', '', ''
      ])
      setLinhaHorizontal1(false)
      setLinhaHorizontal2(false)
      setLinhaHorizontal3(false)
      setLinhaVertical1(false)
      setLinhaVertical2(false)
      setLinhaVertical3(false)
      setLinhaTransversal1(false)
      setLinhaTransversal2(false)
    }, [])
  )

  useEffect(() => {

  }, [boardState])

  const handleEscolherPlayer = (player: PlayerPiece) => {
    setPlayerPiece(player)
    setModalVisible(false)
    // Define a peça do adversário (computador)
    setComputerPiece(player === PLAYERS_PIECE.PLAYER_X ? PLAYERS_PIECE.PLAYER_O : PLAYERS_PIECE.PLAYER_X)
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
          <TouchableOpacity onPress={() => handleEscolherPlayer(PLAYERS_PIECE.PLAYER_X)}>
            <Text style={styles.playerX}>X</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleEscolherPlayer(PLAYERS_PIECE.PLAYER_O)}>
            <Text style={styles.playerO}>O</Text>
          </TouchableOpacity>
        </View>
      </ModalCustom>
      <View style={styles.board}>
        <View id="linha" style={[
          styles.linha,
          linhaTransversal1 && styles.linhaTransversal1,
          linhaTransversal2 && styles.linhaTransversal2,
          linhaHorizontal1 && styles.linhaHorizontal1,
          linhaHorizontal2 && styles.linhaHorizontal2,
          linhaHorizontal3 && styles.linhaHorizontal3,
          linhaVertical1 && styles.linhaVertical1,
          linhaVertical2 && styles.linhaVertical2,
          linhaVertical3 && styles.linhaVertical3,
        ]}></View>
        {[0, 1, 2].map(row => (
          <View key={row} style={styles.row}>
            {[0, 1, 2].map(col => {
              const cellIndex = row * 3 + col;
              return (
                <TouchableOpacity
                  key={col}
                  style={styles.cell}
                  onPress={() => handleCellPress(cellIndex)}>
                  <Text style={styles.cellText}>
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
    margin: 25,
    fontFamily: fonts.regular.fontFamily,
  },

  modalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 100,
  },

  playerX: {
    fontFamily: fonts.regular.fontFamily,
    fontSize: 45,
    color: Colors.light.icon
  },

  playerO: {
    fontFamily: fonts.regular.fontFamily,
    fontSize: 45,
    color: Colors.light.icon
  },

  // Container principal do tabuleiro
  board: {
    aspectRatio: 1, // Mantém quadrado perfeito
    width: '90%', // Ocupa 90% da largura disponível
    maxWidth: 400, // Limite máximo para telas grandes
    alignSelf: 'center', // Centraliza horizontalmente
    borderRadius: 12,
    padding: 10,
  },

  linha: {
    display: 'none',
    position: 'absolute',
    borderWidth: 2,
    borderColor: Colors.light.border,
    height: '150%',
  },

  linhaTransversal1: {
    display: 'flex',
    top: -50,
    transform: [
      { translateX: 150 },
      { translateY: -15 },
      { rotate: '-45deg' },
    ]
  },

  linhaTransversal2: {
    display: 'flex',
    top: -50,
    transform: [
      { translateX: 150 },
      { translateY: -15 },
      { rotate: '45deg' },
    ]
  },

  linhaVertical1: {
    display: 'flex',
    top: -50,
    transform: [
      { translateX: 60 },
      { translateY: 0 },
    ]
  },

  linhaVertical2: {
    display: 'flex',
    top: -50,
    transform: [
      { translateX: 160 },
      { translateY: 0 },
    ]
  },

  linhaVertical3: {
    display: 'flex',
    top: -50,
    transform: [
      { translateX: 260 },
      { translateY: 0 },
    ]
  },

  linhaHorizontal1: {
    display: 'flex',
    top: -160,
    left: 150,
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: '90deg' }
    ]
  },

  linhaHorizontal2: {
    display: 'flex',
    top: -60,
    left: 150,
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: '90deg' }
    ]
  },

  linhaHorizontal3: {
    display: 'flex',
    top: 40,
    left: 150,
    transform: [
      { translateX: 260 },
      { translateY: 0 },
      { rotate: '90deg' }
    ]
  },

  // Cada linha do tabuleiro (contém 3 células)
  row: {
    flex: 1, // Divide espaço igualmente entre 3 linhas
    flexDirection: 'row', // Células lado a lado
  },

  // Cada célula/clique do jogo
  cell: {
    fontFamily: 'Updock-Regular',
    flex: 1, // Divide espaço igualmente entre 3 células
    aspectRatio: 1, // Mantém quadrado
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4, // Espaço entre células
    borderRadius: 8,
    borderWidth: 2,
    borderColor: Colors.light.text,
  },

  // Texto dentro da célula (X ou O)
  cellText: {
    fontSize: 40,
    color: Colors.light.icon,
    fontFamily: 'Updock-Regular',
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
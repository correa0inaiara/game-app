// components/ModalCustom.tsx
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import React from 'react';
import { Modal, View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

interface ModalCustomProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  closeButton: boolean;
}

export default function ModalCustom({ visible, onClose, title, children, closeButton = true }: ModalCustomProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {title && <Text style={styles.modalTitle}>{title}</Text>}
          {children || ''}
          {closeButton && (
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  // Overlay escuro semi-transparente atrás da modal
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo escuro com 50% de opacidade
    paddingHorizontal: 20, // Margem lateral em telas pequenas
  },
  
  // Container principal do conteúdo da modal
  modalContent: {
    width: '100%', // Ocupa largura disponível (limitada pelo padding do overlay)
    maxWidth: 400, // Limite máximo de largura
    backgroundColor: Colors.light.primary,
    borderRadius: 16,
    padding: 24,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    // Sombra para Android
    elevation: 8,
  },
  
  // Título da modal
  modalTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.light.text,
    marginBottom: 16,
    textAlign: 'center',
  },
  
  // Botão de fechar
  closeButton: {
    marginTop: 24,
    backgroundColor: Colors.light.card,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
    // Sombra suave no botão
    shadowColor: '#3B82F6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  
  // Texto do botão de fechar
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600', // semi-bold
    letterSpacing: 0.5,
  },
});
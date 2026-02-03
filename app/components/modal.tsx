// components/ModalCustom.tsx
import { fonts } from '@/constants/fonts';
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
  modalOverlay: {
    fontFamily: fonts.regular.fontFamily,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 20,
  },
  
  modalContent: {
    fontFamily: fonts.regular.fontFamily,
    width: '100%',
    maxWidth: 400,
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
  
  modalTitle: {
    fontFamily: fonts.regular.fontFamily,
    color: Colors.light.text,
    fontSize: 30,
    marginBottom: 16,
    textAlign: 'center',
  },
  
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
    fontFamily: fonts.regular.fontFamily,
    color: Colors.light.text,
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});
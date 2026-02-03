import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Imagens } from '@/constants/images'
import { fonts } from '@/constants/fonts'

const Marca = () => {
    return (
        <View style={styles.marcaContainer}>
            <Text style={styles.marcaText}>Developed By</Text>
            <Image
                source={Imagens.marca}
                style={styles.marca}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    marcaContainer: {
        marginBottom: 15,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },
    marcaText: {
        fontFamily: fonts.regular.fontFamily,
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 15
    },
    marca: {
        width: 250,
        height: 200,
        margin: 'auto'
    }
})


export default Marca
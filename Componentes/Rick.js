import { View, Text, ActivityIndicator, Image, FlatList, Pressable, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

const Rick = () => {
    const [data, setData] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(obj => {
                setData(obj.results)
                setLoad(true)
            })
    }, [])

    const LoadingScreen = () => {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator color={'darkblue'} />
                <Text>Cargando Datos...</Text>
            </View>
        )
    }

    const CharacterCard = ({ name, image }) => {
        return (
            <View style={styles.characterContainer}>
                <Image style={styles.image} source={{ uri: image }} />
                <Text style={styles.name}>{name}</Text>
            </View>
        )
    }

    const LoadedScreen = () => {
        return (
            <FlatList
                data={data}
                renderItem={({ item }) => <CharacterCard
                    name={item.name}
                    image={item.image} />}
                keyExtractor={item => item.id.toString()}
                numColumns={3} />
        )
    }

    return (
        <View>
            {load ? <LoadedScreen /> : <LoadingScreen />}
        </View>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    characterContainer: {
        flex: 1,
        alignItems: 'center',
        margin: 5
    },
    image: {
        height: 70,
        width: 70
    },
    name: {
        marginTop: 5,
        textAlign: 'center',
    }
});

export default Rick

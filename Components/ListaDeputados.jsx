import { useState, useEffect } from 'react'
import { StyleSheet, TextInput, ActivityIndicator, View, Text } from 'react-native'
import { FlatList } from 'react-native'
import getDeputados from '../services/DepService'
import DepList from './DepList'

function Deputados() {
    const [carregando, setCarregando] = useState(false)
    const [deputados, setDeputados] = useState([])
    const [busca, setBusca] = useState('')

    const carregaDeputados = async () => {
        setCarregando(true)
        const dadosDeputados = await getDeputados()
        setDeputados(dadosDeputados)
        setCarregando(false)
    }
    useEffect(() => {
        carregaDeputados()
    }, [])

    const semDados = () => {
        return (
            <View style={{
                backgroundColor: 'red',
                borderRadius: 16,
                marginTop: 16
            }}>
                <Text style={{
                    color: 'white',
                    margin: 16,
                    fontWeight: 'bold'
                }}

                >  O Deputado {busca} não
                    existe ☹. Refaça a busca.
                </Text>
            </View>
        )
    }
    return (
        <>
            <TextInput
                placeholder='🔎Filtrar...'
                autoFocus
                style={styles.buscaInput}
                onChangeText={(text) => setBusca(text)}
            />
            {carregando ? <ActivityIndicator size={45} color={'green'} style={styles.carregando} /> 
            : <FlatList showsHorizontalScrollIndicator={true}
                data={deputados.filter(
                    (deputado) =>
                        deputado.nome.toLowerCase().includes(busca.toLocaleLowerCase()) ||
                        deputado.siglaPartido.toLowerCase().includes(busca.toLocaleLowerCase())
                )}
                renderItem={({ item }) => <DepList deputados={item} />}
                ListEmptyComponent={semDados()}
            />}
        </>
    )
}

const styles = StyleSheet.create({
    buscaInput: {
        marginHorizontal: 'auto',
        borderWidth: 1,
        marginTop: 70,
        borderRadius: 20,
        paddingLeft: 10
    },
    carregando:{
        marginVertical:'auto'
    }
})

export default Deputados
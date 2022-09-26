import { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native'
import getDeputados from '../services/DepService'
import DepList from './DepList'

function Deputados() {
    const [carregando, setCarregando] = useState(false)
    const [deputados, setDeputados] = useState()

    const carregaDeputados = async () => {
        setCarregando(true)
        const dadosDeputados = await getDeputados()
        setDeputados(dadosDeputados)
        console.log(deputados);
        setCarregando(false)
    }
    useEffect(() => {
        carregaDeputados()
    }, [])
    return (
             <FlatList showsHorizontalScrollIndicator={true}
             data={deputados}
                renderItem={({ item }) => <DepList deputados={item}/>}
             />
      
    )
}

export default Deputados
import { useState, useEffect } from 'react'
import { Modal, Text, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import { getDespesas } from '../services/DepService'
import Despesas from './Despesas'

function ModalDespesas({ setVisible, visible, id, nome }) {
    const [carregando, setCarregando] = useState(false)
    const [despesas, setDespesas] = useState()

    const carregaDespesas = async () => {
        setCarregando(true)
        const dadosDespesas = await getDespesas(id)
        setDespesas(dadosDespesas)
        setCarregando(false)
    }
    useEffect(() => {
        carregaDespesas()
    }, [])
    return (
        <>
            <Modal visible={visible} >
                <TouchableOpacity onPress={() => setVisible(false)} style={styles.fechar}>
                    <Text>
                        Fechar
                    </Text>
                </TouchableOpacity>
                <View>
                    <Text style={styles.titulo}>
                        Despesas  {nome}
                    </Text>
                </View>
                {despesas && 
                    <FlatList showsHorizontalScrollIndicator={true}
                    data={despesas}
                    renderItem={({ item }) => <Despesas despesas={item} />}
                />
                        
                    }
            </Modal>
        </>

    )
}

const styles = StyleSheet.create({
    fechar: {
        alignItems: 'flex-end',
        marginRight: 15,
        marginTop: 20
    },
    titulo: {
        fontSize: 30,
        marginTop: 20,
        marginHorizontal:'auto'
    }
})

export default ModalDespesas
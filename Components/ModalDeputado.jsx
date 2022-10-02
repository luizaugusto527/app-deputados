import { useState, useEffect } from 'react'
import { Modal, Text, TouchableOpacity, Image, View, StyleSheet, ActivityIndicator, FlatList} from 'react-native'
import { getDeputadosById } from '../services/DepService'
import Despesas from './ModalDespesas'


function ModalDeputado({ setVisible, visible, id }) {
    const [deputado, setDeputado] = useState()
    const [mostarDespesas, setmostrarDespesas] = useState(false)


    const carregaDeputados = async () => {
        const dadosDeputado = await getDeputadosById(id)
        setDeputado(dadosDeputado)

    }
    useEffect(() => {
        carregaDeputados()
    }, [])
    return (
        <>
            <Modal visible={visible} >
                <TouchableOpacity onPress={() => setVisible(false)} style={styles.fechar}>
                    <Text>
                        X
                    </Text>
                </TouchableOpacity>
                {!deputado ? <ActivityIndicator size={45} color={'green'} style={styles.carregando} />
                    : <View style={styles.infoContainer}>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: deputado.ultimoStatus.urlFoto }}
                                style={styles.images} />
                                 <TouchableOpacity style={styles.botao} onPress={() => setmostrarDespesas(true)}>
                            <View style={styles.areaBotao}>
                                <Text style={styles.textoBotao}>Ver Despesas</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                        <Text style={styles.titulo}>
                            Informações Pessoais
                        </Text>
                        <Text>

                            Nome: {deputado.nomeCivil.toLowerCase()}
                        </Text>
                        <Text>
                            Partido: {deputado.ultimoStatus.siglaPartido}
                        </Text>
                        <Text>
                            Nome Eleitoral: {deputado.ultimoStatus.nomeEleitoral}
                        </Text>
                        <Text>
                            Escolaridade: {deputado.escolaridade}
                        </Text>
                        <View style={styles.gabinete}>
                            <Text style={styles.titulo}>
                                Gabinete
                            </Text>
                            <Text>
                                Numero:{deputado.ultimoStatus.gabinete.nome}
                            </Text>
                            <Text>
                                Predio: {deputado.ultimoStatus.gabinete.predio}
                            </Text>
                            <Text>
                                Sala: {deputado.ultimoStatus.gabinete.sala}
                            </Text>
                            <Text>
                                Andar: {deputado.ultimoStatus.gabinete.andar}
                            </Text>
                        </View>
                        <Text>
                            📞 {deputado.ultimoStatus.gabinete.telefone}
                        </Text>
                        <Text>
                            Situação Eleitoral: {deputado.ultimoStatus.situacao}
                        </Text>
                        <Text>
                            Condição Eleitoral: {deputado.ultimoStatus.condicaoEleitoral}
                        </Text>
                    </View>}
                    {mostarDespesas && <Despesas setVisible = {setmostrarDespesas} visible={mostarDespesas} id={deputado.id} 
                    nome={deputado.ultimoStatus.nomeEleitoral}/>}
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        alignItems: 'center'
    },

    images: {
        width: 150, 
        height: 150, 
        marginTop: 8,
        resizeMode: 'contain',
        justifyContent: 'center',
        marginBottom: 15
    },
    titulo: {
        fontSize: 30,
        marginTop: 20
    },
    carregando: {
        margin: 'auto'
    },
    fechar: {
        alignItems: 'flex-end',
        marginRight: 15,
        marginTop: 20
    },
    botao:{
        width:150,
        alignItems:'center'
    },
    areaBotao:{
        width:90,
        height:30,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25
    },
    textoBotao:{
        color:'white',
        fontSize:12
    },
    infoContainer:{
        marginLeft:40
    }
})

export default ModalDeputado
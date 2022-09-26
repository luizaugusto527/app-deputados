import { useState, useEffect } from 'react'
import { Modal, Text, TouchableOpacity } from 'react-native'
import { getDeputadosById } from '../services/DepService'

function ModalDeputado({ setVisible, visible, id }) {
        const [carregando, setCarregando] = useState(false)
        const [deputado, setDeputado] = useState()

        const carregaDeputados = async () => {
            setCarregando(true)
            const dadosDeputado = await getDeputadosById(id)
            setDeputado(dadosDeputado)
            console.log(deputado);
            setCarregando(false)
        }
        useEffect(() => {
            carregaDeputados()
        }, [])
        return (
            <Modal visible={visible} >
                <TouchableOpacity onPress={() => setVisible(false)}>
                    <Text>
                        Fechar
                        id:{id}
                        nome:{deputado.nome}
                    </Text>
                </TouchableOpacity>
            </Modal>
        )
    }

export default ModalDeputado
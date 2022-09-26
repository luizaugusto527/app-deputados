import { useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import ModalDeputado from './ModalDeputado'

function DepList({ deputados }) {
    const [visible, setVisible] = useState(false)
    return (
        <View style={styles.testeH}>
            <Image source={{ uri: deputados.urlFoto }}
                style={{ width: 70, height: 70, marginTop: 8, resizeMode: 'contain' }}
            />
            <View style={styles.depInfo}>
                <View>
                    <Text>{deputados.nome}</Text>
                    <Text>{deputados.siglaPartido}</Text>
                   <TouchableOpacity style={styles.areaBotao} onPress={()=>setVisible(true)}>
                   <Text style={styles.textoBotao}>+Ver Detalhes</Text>
                   </TouchableOpacity>
                </View>
                <Text> UF:{deputados.siglaUf}</Text>
            </View>

            {visible && <ModalDeputado setVisible = {setVisible} visible={visible} id={deputados.id}/>}
        </View>
    )

}

const styles = StyleSheet.create({
    testeH: {
        marginTop: 100,
        marginHorizontal: 'auto',
        width: '90%',
        height: 80,
        borderRadius: 10,
        backgroundColor: '#e6e6e6',
        flexDirection: 'row',
        alignItems: 'center'
    },
    depInfo:{
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    areaBotao:{
        width:90,
        height:20,
        marginTop:10,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center'
    },
    textoBotao:{
        fontSize:12,
        color:'white'
    }
})

export default DepList
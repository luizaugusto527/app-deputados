import { useState } from 'react'
import { Text, View, StyleSheet, Linking } from 'react-native'
import { TouchableOpacity } from 'react-native-web';

function Despesas({ despesas }) {
    const [visible, setVisible] = useState(false)

    function linkExternal() {
        Linking.openURL(despesas.urlDocumento);
    }

    return (
        <View style={styles.testeH}>
            <View style={styles.depInfo}>
                <Text>Código: {despesas.codDocumento}</Text>
                <Text>Ano/mês : {despesas.mes} / {despesas.ano}</Text>
                <Text>Despesa: {despesas.tipoDespesa}</Text>
                <Text>Fornecedor: {despesas.nomeFornecedor}</Text>
                <Text>Valor: R${despesas.valorDocumento.toString().replace('.', ',')}</Text>
                <TouchableOpacity onPress={linkExternal} style={styles.botao}>
                    <View style={styles.areaBotao} >
                        <Text style={styles.textoBotao}>Ver completo</Text>
                    </View>
                </TouchableOpacity>
                {console.log(despesas)}
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    testeH: {
        marginTop: 50,
        marginHorizontal: 'auto',
        width: '90%',
        borderRadius: 10,
        backgroundColor: '#e6e6e6',
        flexDirection: 'row',
        alignItems: 'center'
    },
    depInfo: {
        width: '90%'
    },
    areaBotao: {
        width: 90,
        height: 20,
        marginTop: 10,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoBotao: {
        fontSize: 12,
        color: 'white'
    },
    botao: {
        width: 150,
        marginBottom:10
    },
    areaBotao:{
        width:90,
        height:20,
        marginTop:10,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25
    },
    textoBotao:{
        fontSize:12,
        color:'white'
    }
})

export default Despesas
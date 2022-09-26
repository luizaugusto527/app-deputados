import { View, StyleSheet, Image, Text } from "react-native";

function Header() {
    return (
        <View style={styles.header}>
            <Image source={require('../Images/logo.png')}
                style={styles.logo} />
            <View>
                <Text style={styles.headerText}>DepInfo</Text>
                <Text style={styles.slogan}>Informações sobre os seus deputados</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 80,
        backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        width: 50,
        height: 50,
        marginHorizontal: 18
    },
    headerText: {
        fontSize: 23,
        color: 'white'
    },
    slogan: {
        color: 'white'
    }
})

export default Header
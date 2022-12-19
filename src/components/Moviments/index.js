import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'
import { useState } from 'react'
export default function Moviments({ item }) {

    const [show, setShow] = useState(false)
    return (
        <TouchableOpacity style={styles.container} onPress={() => setShow(!show)}>
            <Text>{item.date}</Text>
            <View style={styles.content}>
                <Text style={styles.label}>{item.label}</Text>

                {show ? (
                    <Text style={item.type == 1 ? styles.value : styles.expenses}>{item.type == 1 ? `R$ ${item.value}` : `R$ - ${item.value}`}</Text>
                ) : (
                    <View style={styles.block}></View>
                )}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: "#dadada"
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8
    },
    date: {
        color: '#dadada',
        fontWeight: 'bold'
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    value: {
        fontSize: 16,
        color: '#2ecc71',
        fontWeight: 'bold'
    },
    expenses: {
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: 'bold'
    },
    block: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: "#dedede",
        borderRadius: 8

    }
})
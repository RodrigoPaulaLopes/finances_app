import { View, Text, StyleSheet } from 'react-native'

export default function Balance({saldo, gastos}) {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.item}>
                    <Text style={styles.itemTitle}>Saldo</Text>
                    <View style={styles.content}>
                        <Text style={styles.currencySymbol}>R$</Text>
                        <Text style={styles.balance}>{saldo}</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Text style={styles.itemTitle}>Gastos</Text>
                    <View style={styles.content}>
                        <Text style={styles.currencySymbol}>R$</Text>
                        <Text style={styles.expenses}>{gastos}</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        paddingHorizontal: 16,
        paddingVertical: 22
    },
    itemTitle: {
        fontSize: 20,
        fontWeight: '600'
    },
    content: {
        flexDirection: 'row'
    },
    currencySymbol: {
        marginRight: 6
    },
    balance: {
        fontSize: 22,
        color: "#2ecc81"
    },
    expenses: {
        fontSize: 22,
        color: "#e74e2c" 
    }

})
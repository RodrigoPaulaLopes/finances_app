import { useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import Action from "../../components/Actions";
import Balance from "../../components/Balance";
import Header from "../../components/Header";
import Moviments from "../../components/Moviments";


export default function Home() {

    const [username, setUsername] = useState("Rodrigo De P. Lopes")

    const dados = [
        {
            id: 1,
            label: 'Conta de luz',
            value: '200,00',
            date: '15/02/2022',
            type: 0 //gastos
        },
        {
            id: 2,
            label: 'Conta de agua',
            value: '200,00',
            date: '27/09/2022',
            type: 0 //gastos
        },
        {
            id: 3,
            label: 'Salario',
            value: '2.874,00',
            date: '22/12/2022',
            type: 1 //receita
        },
        {
            id: 4,
            label: 'Salario',
            value: '2.874,00',
            date: '22/12/2022',
            type: 1 //receita
        },
       
        
    ]
    return (
        <>
            <View style={styles.container}>
                <Header username={username} />
                <Balance saldo={"2.874,50"} gastos={"- 750,74"} />
                <Action/>
                <Text style={styles.title}>Ultimas movimentações</Text>
                <FlatList
                    style={styles.list}
                    data={dados}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item}) => <Moviments item={item}/>}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(240,240,240)"
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        paddingHorizontal: 16,
        paddingVertical: 16
    },
    list: {
        marginHorizontal: 14,

    }
})
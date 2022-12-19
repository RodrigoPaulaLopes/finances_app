import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5"

const folder = <Icon name="folder" size={22} color={"#000"}></Icon>
const tagso = <Icon name="tag" size={22} color={"#000"}></Icon>
const creditcard = <Icon name="credit-card" size={22} color={"#000"}></Icon>
const note = <Icon name="barcode" size={22} color={"#000"}></Icon>
const settings = <Icon name="link" size={22} color={"#000"}></Icon>

export default function Action() {
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    {folder}
                </View>
                <Text style={styles.labelButton}>Entradas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    {tagso}
                </View>
                <Text style={styles.labelButton}>Compras</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    {creditcard}
                </View>
                <Text style={styles.labelButton}>Crédito</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    {note}
                </View>
                <Text style={styles.labelButton}>Boletos</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    {settings}
                </View>
                <Text style={styles.labelButton}>Conta</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginTop: 18,
        paddingHorizontal: 16

    },
    actionButton: {
        alignItems: "center",
        marginRight: 32
    },
    areaButton: {
      height: 60,
      width: 60,
      backgroundColor: "#ddd",
      borderRadius: 30,
      justifyContent: "center",
      alignItems: 'center'

    }
})
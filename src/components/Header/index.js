import { View, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5"

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 64
StatusBar.setBackgroundColor("rgb(71, 7, 120)")

const user = <Icon name="user" size={24} color={"#fff"}></Icon>
export default function Header({username}) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}>{username}</Text>
                <TouchableOpacity activeOpacity={0.9} style={styles.button}>
                   {user}
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgb(71, 7, 120)",
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingEnd: 16,
        paddingStart: 16,
        paddingBottom: 44,

    },
    content: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        
    },
    username: {
        fontSize: 18,
        color: "#eee",
        fontWeight: "bold"
    },
    button: {
        height: 44,
        width: 44,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255, 0.5)',
        borderRadius: 44 / 2
    }
})
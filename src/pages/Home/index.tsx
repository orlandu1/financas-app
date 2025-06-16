
import Actions from "@/src/components/Actions";
import Balance from "@/src/components/Balance";
import Header from "@/src/components/Header";
import Movements from "@/src/components/Movements";
import { FlatList, StyleSheet, Text, View } from "react-native";


const list = [
    {
        id: 1,
        label: "Boleto da Conta de luz",
        value: "300,90",
        date: "01/06/2025",
        type: 0 // DESPESAS
    },
    {
        id: 2,
        label: "Pix Cliente X",
        value: "2.500,00",
        date: "10/06/2025",
        type: 1 // DESPESAS
    },
    {
        id: 3,
        label: "Salário",
        value: "7.2000,00",
        date: "15/06/2025",
        type: 1 // DESPESAS
    },

]


export default function Home() {
    return (

        <View style={styles.container}>
            <Header name={"Orlando Alves"} />
            <Balance saldo={"9.250,00"} gastos={"-527,00"} />
            <Actions />
            <Text style={styles.title}>Últimas Movimentações</Text>

            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Movements item={item} />}

            />

        </View>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        margin: 14

    },
    list: {

        marginStart: 14,
        marginEnd: 14
    }

})
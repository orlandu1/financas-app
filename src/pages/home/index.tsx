import Header from "@/src/components/Header";
import Movements from "@/src/components/Movements";
import { FlatList, StyleSheet, Text, View } from "react-native";

const list = [
    {
        id: 1,
        label: "Boleto Conta Luz",
        value: "300,90",
        date: "17/09/2022",
        type: 0 // DESPESAS
    },
    {
        id: 2,
        label: "Pix Cliente X",
        value: "2.500,00",
        date: "17/09/2022",
        type: 1 // RECEITA
    },
    {
        id: 3,
        label: "Salário",
        value: "7.200,00",
        date: "17/09/2022",
        type: 1 // RECEITA
    },

]

export default function Home() {
    return (

        <View style={styles.container}>
            <Header name={"Orlando Alves"} />
            {/* <Balance saldo={"9.250,90"} gastos={"-527,00"} /> */}
            <Text style={styles.title}>
                Últimas Movimentações
            </Text>

            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Movements data={item} />}

            />

        </View>

    );
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fafafa",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 14,
        marginRight: 14,
        marginTop: 14,
    },
    list: {
        marginStart: 14,
        marginEnd: 14
    }

})
import { AnimatePresence, MotiText } from 'moti';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface MovementItem {
    id: number;
    label: string;
    value: string;
    date: string;
    type: number;
}

interface MovementsData {
    item: MovementItem;
}

export default function Movements({ item }: MovementsData) {


    const [showValue, setShowValue] = useState(false);

    return (
        <TouchableOpacity onPress={() => setShowValue(!showValue)} style={styles.container}>
            <Text style={styles.date}>{item.date}</Text>

            <View style={styles.content}>
                <Text style={styles.label}>{item.label}</Text>

                {showValue ? (
                    <AnimatePresence exitBeforeEnter>

                        <MotiText
                            style={item.type === 1 ? styles.value : styles.expenses}
                            from={{
                                translateX: 100,
                            }}
                            animate={{
                                translateX: 0,
                            }}
                            transition={{
                                type: "timing",
                                duration: 500,
                            }}
                        >
                            {item.type === 1 ? `R$ ${item.value}` : `R$ -${item.value}`}
                        </MotiText>
                    </AnimatePresence>
                ) : (
                    <AnimatePresence exitBeforeEnter>
                        <View style={styles.skeleton}>

                        </View>
                    </AnimatePresence>
                )}

            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: "#DADADA",

    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 2,
        marginBottom: 8,

    },
    date: {
        color: "#DADADA",
        fontWeight: "bold"
    },
    label: {
        fontWeight: "bold",
        fontSize: 16,

    },
    value: {
        fontSize: 16,
        color: "#2ecc71",
        fontWeight: "bold"
    },
    expenses: {
        fontSize: 16,
        color: "#e74c3c",
        fontWeight: "bold"
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: "#DADADA",
        borderRadius: 8

    }
})
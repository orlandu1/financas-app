import React from "react";
import {
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    View
} from "react-native";

import { Feather } from '@expo/vector-icons';
import { MotiText, MotiView } from 'moti';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;


interface HeaderProps {

    name: string,
}


export default function Header({ name }: HeaderProps) {

    return (

        <View style={styles.container}>
            <MotiView
                style={styles.content}
                //SAI DE LA DE CIMA
                from={{
                    translateY: -150,
                    opacity: 0,
                }}
                //VAI PARA POSIÇÃO ZERO (PADRÃO)
                animate={{
                    translateY: 0,
                    opacity: 1,
                }}
                //ATRASA O EVENTO
                transition={{
                    type: "timing",
                    duration: 800,
                    delay: 300
                }}
            >
                <MotiText
                    style={styles.username}
                    //ONDE A ANIMAÇÃO COMEÇA
                    from={{
                        translateX: -300,
                    }}
                    //PRA ONDE A ANIMAÇÃO VAI
                    animate={{
                        translateX: 0,
                    }}
                    //DURAÇÃO DA ANIMAÇÃO
                    transition={{
                        type: "timing",
                        duration: 800,
                        delay: 800,
                    }}
                >
                    {name}
                </MotiText>

                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Feather name="user" size={27} color="#FFF" />
                </TouchableOpacity>
            </MotiView>
        </View>

    );

}


const styles = StyleSheet.create({

    container: {
        backgroundColor: "#8000ff",
        paddingTop: statusBarHeight,
        flexDirection: "row",
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44
    },
    content: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",

    },
    username: {
        fontSize: 18,
        color: "#FFF",
        fontWeight: "bold",

    },
    buttonUser: {
        width: 44,
        height: 44,
        backgroundColor: "rgba(255,255,255,0.5)",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 44 / 2,

    }
})

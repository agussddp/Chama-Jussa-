import { StyleSheet } from "react-native";

export const PerfilStyle = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#282F32',
        width: '100%',
        justifyContent: "flex-start",


    },

    Text: {
        fontSize: 20,
        fontWeight: '700',
        marginTop: 30,
        color: '#C0191F',
        marginBottom: 16,
        textAlign: 'center'
    },
    section_card: {

        marginTop: 55,
        width: '90%',
        height: 347,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: "#98A2A6",
        borderRadius: 8,
        alignSelf: 'center',
        // borderColor: "red",
        // borderWidth: 3,
        // borderStyle: "solid"
    },
    section__texto1: {
        fontSize: 26,
        fontWeight: '600',
        color: 'black',
        textAlign: 'center',


    },
    section__texto2: {
        fontSize: 18,
        color: '#282F32',
        marginBottom: 5,
        textAlign: 'center',


    },
    figure_section__img: {
        width: 170,
        height: 170,
        // resizeMode: "contain",
        borderRadius: 100,
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    user__button: {
        width: 350,
        height: 45,
        borderRadius: 8,
        backgroundColor: "#C0191F",
        // boxShadow: 5,
        color: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15,
        marginTop: 25,
        alignSelf: 'center',
        elevation: 4,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 3,

    },
    button_text: {
        color: "#FFF",
        fontWeight: 500,
    }
})
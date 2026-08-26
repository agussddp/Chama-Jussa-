import { StyleSheet } from "react-native";

export const PerfilStyle = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#282F32',
        width: '100%', 
        justifyContent: "space-between",

    },

    Text: {
        fontSize: 18,
        fontWeight: '700',
        marginTop: 20,
        color: '#C0191F',
        marginBottom: 16,
        textAlign: 'center'
    },
    section_card: {
       
        width: '90%',
        height: 347,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: "#4F585C",
        borderRadius: 8,
        alignSelf: 'center'
        // borderColor: "red",
        // borderWidth: 3,
        // borderStyle: "solid"
    },
    section__texto1: {
        fontSize: 26,
        fontWeight: '600',
        marginTop: 20,
        color: 'black', 
        textAlign: 'center',


    },
    section__texto2: {
        fontSize: 18,
        color: '#282F32',
        marginBottom: 3,
        textAlign: 'center',


    },
    figure_section__img: {
        width: 200,
        height: 200,
        // resizeMode: "contain",
        borderRadius: 100,
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    user__button: {
    width: 250,
    height: 45,
    borderRadius: 8,
    backgroundColor: "#C0191F",
    // boxShadow: 5,
    color: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    alignSelf: 'center'

  },
  button_text : {
    color: "#FFF",
    fontWeight: 500,
  }
})
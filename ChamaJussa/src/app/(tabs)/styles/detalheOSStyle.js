import { StyleSheet } from "react-native";

export const DetalheOSStyle = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#282F32'
    },

    Text: {
        fontSize: 20,
        fontWeight: '700',
        marginTop: 20,
        color:'#C0191F' ,
        marginBottom: 16,
        textAlign: 'center'
    },
    section_card: {
       
        width: '80%',
        height: 1030,
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: "#4F585C",
        borderRadius: 8,
        alignSelf: 'center'
    },
    figure_section__img: {
        width: 300,
        height: 240,
        // resizeMode: "contain",
        borderRadius: 10,
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    figure_section__img2: {
        width: '80%',
        height: 3,
        // resizeMode: "contain",
        borderRadius: 10,
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
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
        color: 'black',
        marginBottom: 3,
        textAlign: 'center',
        fontWeight: '500',
        
        
    },
    section__texto3: {
        fontSize: 18,
        color: '#282F32',
        marginBottom: 3,
        textAlign: 'center',
        
        
    },
    user__button: {
        width: 250,
        height: 45,
        borderRadius: 8,
        backgroundColor: "#282F32",
        // boxShadow: 5,
        color: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        alignSelf: 'center',
        borderColor: "red",
        borderWidth: 2,
        borderStyle: "solid"
        
    },
    button_text : {
        color: "#C0191F",
        fontSize: 18,
        fontWeight: '700',
    },
    info_row: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "red",
    flexDirection: "row"
},

info_icon: {
//    backgroundColor: "blue",
    width:30,
    height: 30,
},

info_content: {
    alignItems: 'center',
    justifyContent: 'center',
},
  caixaTextos: {
        // backgroundColor: "red",
        width: "85%"
    },

})
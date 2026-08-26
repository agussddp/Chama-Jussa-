import { StyleSheet } from "react-native";

export const FooterStyle = StyleSheet.create({
    Container: {
        width: '100%',
        // height: '100px',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#4F585C',
     
    
    },
    Item: {
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    CirculoAtivo: {
        width: 34,
        height: 34,
        borderRadius: 17,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Icone: {
        width: 24,
        height: 24,
    },
    IconeAtivo: {
        tintColor: '#000',
    },
    Label: {
        fontSize: 12,
        color: '#999',
    },
    LabelAtivo: {
        color: '#000',
    
    },
});
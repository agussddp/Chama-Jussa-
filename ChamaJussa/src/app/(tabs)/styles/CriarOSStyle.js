import { StyleSheet } from "react-native";

export const CriarOSStyle = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#282F32',
        alignItems: 'center',
        justifyContent: "flex-start"
    },
    
    Text: {
        fontSize: 20,
        fontWeight: '700',
        marginTop: 30,
        color:'#C0191F' ,
        marginBottom: 16,
        textAlign: 'center',
        
    },

    
    cardProblema: {
        width: '80%',
        height: '75%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#98A2A6',
          marginTop: 35,
    },
    Label: {
        paddingLeft: 3,
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 8,
        marginTop: 16,
    },
    Input: {
        paddingLeft: 3,
        fontSize: 12,
        backgroundColor: '#F3F4F6',
        borderColor: '#E0E1E3',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 3,
       
    },
    inputDescricao: {
        paddingLeft: 3,
        fontSize: 12,
        backgroundColor: '#F3F4F6',
        borderColor: '#E0E1E3',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 3,
        height: 60,
        textAlignVertical: 'top',
    },
    PlaceholderText: {
        color: '#999',
        fontSize: 15,
    },
    Button: {
        backgroundColor: '#C0191F',
        borderRadius: 10,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 28,
        elevation: 4,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 3,
    },
    ButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
    },
});
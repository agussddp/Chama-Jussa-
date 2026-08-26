import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { LoginStyle } from "./loginStyle";
import { useState } from "react";
import { router } from "expo-router";


export function Login () {

   const [emailDigitado, SetemailDigitado] = useState("")

   const [senhaDigitada, SetSenhaDigitada] = useState("")

    return(
   <View style={LoginStyle.main_section}>
   
    <Image style={LoginStyle.figure_section__img} source={require("../../../assets/Jussa-Logo.png")} />
   
   
    <View style={LoginStyle.section_card}>

        

        <View style={LoginStyle.header_section}>

         <Text style={LoginStyle.header_section__titulo}>Chama Jussa</Text>
      
         <Text style={LoginStyle.header_section__subtitulo}>Gerenciamento de Ordens e Serviços</Text>

        </View>

        <View action="" style={LoginStyle.login_user}>

        <Text style={LoginStyle.text_input}>E-mail</Text>

        
        
        <TextInput
        style={LoginStyle.login_user__input}
        placeholder="Digite seu Email"
        placeholderTextColor="#0000005d"
        value={emailDigitado}
        onChangeText={SetemailDigitado}
        />

        

        <Text style={LoginStyle.text_input}>Senha</Text>
        
        <TextInput
        style={LoginStyle.login_user__input}
        placeholder="Digite sua Senha"
        placeholderTextColor="#0000005d"
        value={senhaDigitada}
        onChangeText={SetSenhaDigitada}
        />

        <TouchableOpacity style={LoginStyle.login_user__button}>

        <Text style={LoginStyle.login_user__button_text} onPress={() => router.push('/criarOS')}>Acessar o sistema</Text>

        </TouchableOpacity>

        </View>

        

    </View>

   </View>
    )
}
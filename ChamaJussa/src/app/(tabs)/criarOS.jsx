import { Text, TouchableOpacity, View } from "react-native"
import { CriarOSStyle } from "./styles/CriarOSStyle"
import { TextInput } from "react-native"
import { useState } from "react"
import { Footer } from "../../components/footer/Footer"

export default function CriarOS() {


    return (
        <View style={CriarOSStyle.Container}>
            <Text style={CriarOSStyle.Text}>Criar ordem de serviço</Text>

            <View style={CriarOSStyle.cardProblema}>
                <Text style={CriarOSStyle.Label}>Título do problema </Text>
                <TextInput
                    style={CriarOSStyle.Input}
                    placeholder="Ex: Vazamento da pia"
                    placeholderTextColor="#999"
                />

                <Text style={CriarOSStyle.Label}>Máquina/Equipamento </Text>
                <TextInput
                    style={CriarOSStyle.Input}
                    placeholder="Ex: Vazamento da pia"
                    placeholderTextColor="#999"
                />

                <Text style={CriarOSStyle.Label}>Local/Setor *</Text>
                <TextInput
                    style={CriarOSStyle.Input}
                    placeholder="Ex: Vazamento da pia"
                    placeholderTextColor="#999"

                />

                <Text style={CriarOSStyle.Label}>Descrição do problema *</Text>
                <TextInput
                    style={CriarOSStyle.inputDescricao}
                    placeholder="Ex: Vazamento da pia"
                    placeholderTextColor="#999"
                    multiline
                />

                <Text style={CriarOSStyle.Label}>Imagem / Foto do problema *</Text>
                <TouchableOpacity style={CriarOSStyle.Input}>
                    <Text style={CriarOSStyle.PlaceholderText}>Insira imagem</Text>
                </TouchableOpacity>

                
                    <TouchableOpacity style={CriarOSStyle.Button}>
                        <Text style={CriarOSStyle.ButtonText}>Abrir Ordem de Serviço</Text>
                    </TouchableOpacity>
               

            </View>

            {/* <Footer/> */}
        </View>
    )
}
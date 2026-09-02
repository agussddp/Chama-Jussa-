import { Text, View } from "react-native";
import { PerfilStyle } from "./styles/perfilStyle"

import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";

export default function Perfil() {
    const { nome, email, foto } = useLocalSearchParams();

    const fotoUrl = foto
        ? `http://192.168.0.244:5000/imagens/${foto}`
        : null;


    return (








        <View style={PerfilStyle.Container}>
            <Text style={PerfilStyle.Text}>Perfil</Text>


            <View style={PerfilStyle.section_card}>


                <Image style={PerfilStyle.figure_section__img} source={fotoUrl ? { uri: `http://192.168.0.244:5000/imagens/${foto}`} : require("../../../assets/User.jpg")} />

                <Text style={PerfilStyle.section__texto1}>{nome}</Text>
                <Text style={PerfilStyle.section__texto2}>{email}</Text>

            </View>

            <Link href="../login" asChild>
                <TouchableOpacity style={PerfilStyle.user__button}>

                    <Text style={PerfilStyle.button_text}>Sair da conta</Text>

                </TouchableOpacity>
            </Link>

         
        </View>
    )
}



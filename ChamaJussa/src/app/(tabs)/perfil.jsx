import { Text, View } from "react-native";
import { PerfilStyle } from "./styles/perfilStyle"

import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Perfil() {
    return (
        <View style={PerfilStyle.Container}>
            <Text style={PerfilStyle.Text}>Perfil</Text>


            <View style={PerfilStyle.section_card}>


                <Image style={PerfilStyle.figure_section__img} source={require("../../../assets/User.jpg")} />

                <Text style={PerfilStyle.section__texto1}>Beatriz Andrade </Text>
                <Text style={PerfilStyle.section__texto2}>BeatrizAndrade@emai.com </Text>

            </View>

            <Link href="../login" asChild>
                <TouchableOpacity style={PerfilStyle.user__button}>

                    <Text style={PerfilStyle.button_text}>Sair da conta</Text>

                </TouchableOpacity>
            </Link>

         
        </View>
    )
}



import { Image, View, TouchableOpacity, Text } from "react-native";
import { useRouter, usePathname } from "expo-router";
import { FooterStyle } from "./FooterStyle";

export function Footer() {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <View style={FooterStyle.Container}>

            <TouchableOpacity 
                style={FooterStyle.Item} 
                onPress={() => router.push('/minhasOS')}
            >
                <Image
                    source={require("../../../assets/Minhas-OS.png")}
                    style={[FooterStyle.Icone, pathname === "/minhasOS" && FooterStyle.IconeAtivo]}
                />
                <Text style={[FooterStyle.Label, pathname === "/minhasOS" && FooterStyle.LabelAtivo]}>
                    Minhas OS
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={FooterStyle.Item} 
                onPress={() => router.push('/criarOS')}
            >
                <Image
                    source={require("../../../assets/Criar OS.png")}
                    style={[FooterStyle.Icone, pathname === "/criarOS" && FooterStyle.IconeAtivo]}
                />
                <Text style={[FooterStyle.Label, pathname === "/criarOS" && FooterStyle.LabelAtivo]}>
                    Criar OS
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={FooterStyle.Item} 
                onPress={() => router.push('/painelNotificacoes')}
            >
                <Image
                    source={require("../../../assets/Notificacao.png")}
                    style={[FooterStyle.Icone, pathname === "/painelNotificacoes" && FooterStyle.IconeAtivo]}
                />
                <Text style={[FooterStyle.Label, pathname === "/painelNotificacoes" && FooterStyle.LabelAtivo]}>
                    Notificações
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={FooterStyle.Item} 
                onPress={() => router.push('/perfil')}
            >
                <Image
                    source={require("../../../assets/Perfil.png")}
                    style={[FooterStyle.Icone, pathname === "/perfil" && FooterStyle.IconeAtivo]}
                />
                <Text style={[FooterStyle.Label, pathname === "/perfil" && FooterStyle.LabelAtivo]}>
                    Perfil
                </Text>
            </TouchableOpacity>

        </View>
    );
}
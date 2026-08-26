import { TouchableOpacity, View } from "react-native"
import { minhaOSStyle } from "./minhasOSStyles"
import { Footer } from "../../components/footer/Footer"
import { ScrollView } from "react-native"
import { Text } from "react-native"
export const MinhaOS = () => {
    return (

        <View style={minhaOSStyle.Container}>
            <ScrollView>
                <View style={minhaOSStyle.section_card}>

                    <View style={minhaOSStyle.header}>
                        <Text style={minhaOSStyle.section__texto3}>
                            Olá, Beatriz
                        </Text>

                        <TouchableOpacity style={minhaOSStyle.user__button1}>
                            <Text style={minhaOSStyle.button_text1}>
                                Nova OS
                            </Text>
                        </TouchableOpacity>
                    </View>


                    <Text style={minhaOSStyle.info_text}>
                        Minhas OS's
                    </Text>


                    <View style={minhaOSStyle.button__box}>
                        <TouchableOpacity style={minhaOSStyle.user__button3}>

                            <Text style={minhaOSStyle.button_text2}>
                                Todos
                            </Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={minhaOSStyle.user__button}>
                            <Text style={minhaOSStyle.button_text}>
                                Abertas
                            </Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={minhaOSStyle.user__button2}>
                            <Text style={minhaOSStyle.button_text}>
                                Em Andamento
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity style={minhaOSStyle.user__button4}>
                        <Text style={minhaOSStyle.button_text}>
                            Concluidas
                        </Text>
                    </TouchableOpacity>

                </View>


                <View style={minhaOSStyle.section_card2}>

                    <View style={minhaOSStyle.info_row}>

                           
                        <View style={minhaOSStyle.header_card}>

                                <Text style={minhaOSStyle.section__texto2}>
                                    OS - 001
                                </Text>
                                <TouchableOpacity style={minhaOSStyle.user__button5}>
                                    <Text style={minhaOSStyle.button_text1}>
                                        Aberta
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <Text style={minhaOSStyle.section__texto1}>
                                Cadeira quebrada no Bloco B no 2º Andar
                            </Text>

                            <Text style={minhaOSStyle.Text}>
                                Foi identificada uma cadeira quebrada no Bloco B no
                                2º Andar, apresentando danos que comprometem sua
                                utilização e segurança. Solicita-se a avaliação e,
                                se necessário, o reparo ou substituição da cadeira.
                            </Text>

                    </View>
                </View>

            </ScrollView>
            <Footer />
        </View>

    )


}
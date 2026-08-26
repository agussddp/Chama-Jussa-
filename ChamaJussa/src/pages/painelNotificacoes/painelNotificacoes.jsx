import { Text, View } from "react-native";
import { PainelNotificacoesStyle } from "./painelNotificacoesStyle";
import { Footer } from "../../components/footer/Footer"
import { ScrollView } from "react-native";
import { Image } from "react-native";

export function PainelNotificacoes() {
    return (
        <View style={PainelNotificacoesStyle.Container}>

            <Text style={PainelNotificacoesStyle.Text}>Notificações</Text>
            <ScrollView contentContainerStyle={PainelNotificacoesStyle.scrollContent} showsVerticalScrollIndicator={false}>

                <View style={PainelNotificacoesStyle.section_card}>

                    <View style={PainelNotificacoesStyle.info_row}>
                        <Image
                            style={PainelNotificacoesStyle.info_icon}
                            source={require("../../../assets/Megafone.png")}
                        />

                        <View style={PainelNotificacoesStyle.caixaTextos}>
                            <Text style={PainelNotificacoesStyle.section__texto3}>
                                Ordem de Serviço finalizada
                            </Text>

                            <Text style={PainelNotificacoesStyle.info_text2}>
                                Sua OS foi finalizada,
                                logo ela voltará para sua sala.
                            </Text>


                            <View style={PainelNotificacoesStyle.Data_Hora}>
                                <Text style={PainelNotificacoesStyle.info_text2}>
                                    22/06/2026
                                </Text>
                                <Text style={PainelNotificacoesStyle.info_text2}>
                                    16:03
                                </Text>
                            </View>
                        </View>
                    </View>



                </View>



                <View style={PainelNotificacoesStyle.section_card2}>

                    <View style={PainelNotificacoesStyle.info_row}>
                        <Image
                            style={PainelNotificacoesStyle.info_icon}
                            source={require("../../../assets/Megafone.png")}
                        />

                        <View style={PainelNotificacoesStyle.caixaTextos}>
                            <Text style={PainelNotificacoesStyle.section__texto3}>
                                Ordem de Serviço finalizada
                            </Text>

                            <Text style={PainelNotificacoesStyle.info_text2}>
                                Sua OS foi finalizada,
                                logo ela voltará para sua sala.
                            </Text>

                            <View style={PainelNotificacoesStyle.Data_Hora}>
                                <Text style={PainelNotificacoesStyle.info_text2}>
                                    22/06/2026
                                </Text>
                                <Text style={PainelNotificacoesStyle.info_text2}>
                                    16:03
                                </Text>
                            </View>

                        </View>
                    </View>



                </View>



                <View style={PainelNotificacoesStyle.section_card3}>

                    <View style={PainelNotificacoesStyle.info_row}>
                        <Image
                            style={PainelNotificacoesStyle.info_icon}
                            source={require("../../../assets/Megafone.png")}
                        />

                        <View style={PainelNotificacoesStyle.caixaTextos}>
                            <Text style={PainelNotificacoesStyle.section__texto3}>
                                Ordem de Serviço finalizada
                            </Text>

                            <Text style={PainelNotificacoesStyle.info_text2}>
                                Sua OS foi finalizada,
                                logo ela voltará para sua sala.
                            </Text>
                          
                              <View style={PainelNotificacoesStyle.Data_Hora}>
                            <Text style={PainelNotificacoesStyle.info_text2}>
                                22/06/2026
                            </Text>
                            <Text style={PainelNotificacoesStyle.info_text2}>
                                16:03
                            </Text>
                            </View>
                        </View>
                    </View>



                </View>



                <View style={PainelNotificacoesStyle.section_card4}>

                    <View style={PainelNotificacoesStyle.info_row}>
                        <Image
                            style={PainelNotificacoesStyle.info_icon}
                            source={require("../../../assets/Megafone.png")}
                        />

                        <View style={PainelNotificacoesStyle.caixaTextos}>
                            <Text style={PainelNotificacoesStyle.section__texto3}>
                                Ordem de Serviço finalizada
                            </Text>

                            <Text style={PainelNotificacoesStyle.info_text2}>
                                Sua OS foi finalizada,
                                logo ela voltará para sua sala.
                            </Text>
                             <View style={PainelNotificacoesStyle.Data_Hora}>
                            <Text style={PainelNotificacoesStyle.info_text2}>
                                22/06/2026
                            </Text>
                            <Text style={PainelNotificacoesStyle.info_text2}>
                                16:03
                            </Text>
                            </View>
                        </View>
                    </View>



                </View>

            </ScrollView>
            <Footer />
        </View>
    )
}
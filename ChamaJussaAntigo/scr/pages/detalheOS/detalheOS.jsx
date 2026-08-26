import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { DetalheOSStyle } from "./detalheOSStyle";
import { Footer } from "../../components/footer/Footer";

export const DetalheOS = () => {
    return (
        <View style={DetalheOSStyle.Container}>

            <Text style={DetalheOSStyle.Text}>
                Detalhes da OS-1001
            </Text>

            <ScrollView
                contentContainerStyle={DetalheOSStyle.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={DetalheOSStyle.section_card}>

                    <View style={DetalheOSStyle.info_row}>
                        <Image
                            style={DetalheOSStyle.info_icon}
                            source={require("../../../assets/Ferramenta.png")}
                        />

                        <View style={DetalheOSStyle.caixaTextos}>
                            <Text style={DetalheOSStyle.section__texto3}>
                                Máquina / Equipamento
                            </Text>

                            <Text style={DetalheOSStyle.section__texto2}>
                                Cadeira quebrada
                            </Text>
                        </View>
                    </View>


                    <View style={DetalheOSStyle.info_row}>
                        <Image
                            style={DetalheOSStyle.info_icon}
                            source={require("../../../assets/Loc.png")}
                        />

                        <View style={DetalheOSStyle.caixaTextos}>
                            <Text style={DetalheOSStyle.section__texto3}>
                                Local / Setor
                            </Text>

                            <Text style={DetalheOSStyle.section__texto2}>
                                Bloco B - 2º Andar
                            </Text>
                        </View>
                    </View>


                    <View style={DetalheOSStyle.info_row}>
                        <Image
                            style={DetalheOSStyle.info_icon}
                            source={require("../../../assets/Pessoa.png")}
                        />

                        <View style={DetalheOSStyle.caixaTextos}>
                            <Text style={DetalheOSStyle.section__texto3}>
                                Solicitante
                            </Text>

                            <Text style={DetalheOSStyle.section__texto2}>
                                Beatriz Andrade
                            </Text>
                        </View>
                    </View>







                    <Image
                        style={DetalheOSStyle.figure_section__img2}
                        source={require("../../../assets/Line.png")}
                    />

                    <Text style={DetalheOSStyle.section__texto1}>
                        Descrição do Problema:
                    </Text>

                    <Text style={DetalheOSStyle.section__texto3}>
                        Foi identificada uma cadeira quebrada no Bloco B no
                        2º Andar, apresentando danos que comprometem sua
                        utilização e segurança. Solicita-se a avaliação e,
                        se necessário, o reparo ou substituição da cadeira.
                    </Text>

                    <Text style={DetalheOSStyle.section__texto1}>
                        Foto do Problema:
                    </Text>

                    <Image
                        style={DetalheOSStyle.figure_section__img}
                        source={require("../../../assets/Cadeira-quebrada.png")}
                    />

                </View>

                <TouchableOpacity style={DetalheOSStyle.user__button}>
                    <Text style={DetalheOSStyle.button_text}>
                        Editar Solicitação
                    </Text>
                </TouchableOpacity>

            </ScrollView>

            <Footer />

        </View>
    );
};

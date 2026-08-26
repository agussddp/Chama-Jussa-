import { StyleSheet } from "react-native"

export const CadastroStyle = StyleSheet.create({
  figure_section__img: {
    width: 249,
    height: 200,
    resizeMode: "contain",
  },
  text_input : {
   width: 250,
    fontWeight: "700",
    fontSize: 12,
    color: "#000",
    textAlign: "left",
    marginBottom: 5,
  },
  main_section: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#282F32",
  },
  section_card: {
    width: 300,
    height: 440,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 16,
    backgroundColor: "#4F585C",
    borderRadius: 8,
  },
  header_section: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    paddingTop: 8,
    paddingBottom: 12,
  },
  header_section__titulo: {
    fontSize: 22,
    witdh: '100%',
    fontWeight: "bold",
    color: "#111111",
    textAlign: 'center',
    
    
    
  },
  header_section__subtitulo: {
    fontSize: 12,
    color: "rgba(0, 0, 0, 0.67)",

  },
  login_user: {
    width: "100%",
    padding: 5,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    
  },
  login_user__text: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 12,
    color: "#000000",
  },
  login_user__input: {
    height: 45,
    width: 250,
    fontSize: 13,
    borderRadius: 5,
    backgroundColor: "#F3F4F6",
    borderWidth: 1,
    borderColor: "#53535346",
    marginBottom: 15,
    paddingHorizontal: 10,
    color: "#000000",
    marginBottom: 20,

  },
  login_user__button: {
    width: 250,
    height: 45,
    borderRadius: 8,
    backgroundColor: "#C0191F",
    color: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,

  },
  login_user__button_text : {
    color: "#FFF",
    fontWeight: 500,
  }
});

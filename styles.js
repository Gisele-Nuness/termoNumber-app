import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fad3a1ff",
    alignItems: "center",
    justifyContent: "center",
  },

  header: {
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },

  imgHeader: {
    width: '100%',
    height: 90,
    top: -20,

  },

  viewTitulo: {
    width: "70%",
    height: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    borderRadius: 20,
    flexDirection: 'row',
    marginBottom: 20
  },

  interrogacao: {
    width: 90,
    height: 90,
    position: 'absolute',
    left: -50,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f356a4ff",
    textTransform: "uppercase",
    left: 5,
  },

  jogo: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    width: "100%",
    height: 100,
    marginTop: 75,
  },

  input: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    backgroundColor: "#36eee0",
    borderColor: "#f652a0",
    borderWidth: 5,
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },

  botao: {
    width: 80,
    height: 50,
    backgroundColor: "#36eee0",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 80,
  },

  txtBotao: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },

  jogadas: {
    width: "90%",
    height: 350,
    borderWidth: 5,
    borderColor: "#f652a0",
    borderRadius: 20,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  tentativas: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 80,
  },

  tentativa: {
    width: 65,
    height: 65,
    borderRadius: "50%",
    backgroundColor: "#36eee0",
    borderColor: "#f652a0",
    borderWidth: 5,
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    display: "flex",
    textAlignVertical: "center",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
  },

   modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 20,
    alignItems: "center",
  },
  modalText: {
    fontSize: 20,
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "#36eee0",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  modalButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;
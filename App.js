import { Text, View, TextInput, Pressable, Modal } from "react-native";
import React, { useState, useEffect } from "react";
import { FlatList } from "react-native-web";
import styles from "./styles";

export default function App() {
  var codigo = [1, 2, 3, 4];
  const [palpite, setPalpite] = useState(["", "", "", ""]);
  const cores = ["#ef4a4aff", "#9ce160ff", "#ecfb66ff"];
  const [tentativas, setTentativas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMsg, setModalMsg] = useState("");

  const palpites = [
    {
      t1: palpite[0],
      t2: palpite[1],
      t3: palpite[2],
      t4: palpite[3],
      cor1:
        codigo[0] == Number(palpite[0])
          ? cores[1]
          : codigo.includes(Number(palpite[0]))
          ? cores[2]
          : cores[0],
      cor2:
        codigo[1] == Number(palpite[1])
          ? cores[1]
          : codigo.includes(Number(palpite[1]))
          ? cores[2]
          : cores[0],
      cor3:
        codigo[2] == Number(palpite[2])
          ? cores[1]
          : codigo.includes(Number(palpite[2]))
          ? cores[2]
          : cores[0],
      cor4:
        codigo[3] == Number(palpite[3])
          ? cores[1]
          : codigo.includes(Number(palpite[3]))
          ? cores[2]
          : cores[0],
    },
  ];

  const verificar = () => {
    if (
      palpite[0] === "" ||
      palpite[1] === "" ||
      palpite[2] === "" ||
      palpite[3] === ""
    ) {
      setModalMsg("Preencha todos os campos!");
      setModalVisible(true);
      return;
    }

    const novaTentativa = {
      t1: palpite[0],
      t2: palpite[1],
      t3: palpite[2],
      t4: palpite[3],
      cor1:
        codigo[0] == Number(palpite[0])
          ? cores[1]
          : codigo.includes(Number(palpite[0]))
          ? cores[2]
          : cores[0],
      cor2:
        codigo[1] == Number(palpite[1])
          ? cores[1]
          : codigo.includes(Number(palpite[1]))
          ? cores[2]
          : cores[0],
      cor3:
        codigo[2] == Number(palpite[2])
          ? cores[1]
          : codigo.includes(Number(palpite[2]))
          ? cores[2]
          : cores[0],
      cor4:
        codigo[3] == Number(palpite[3])
          ? cores[1]
          : codigo.includes(Number(palpite[3]))
          ? cores[2]
          : cores[0],
    };

    setTentativas([...tentativas, novaTentativa]);

    if (palpite.join("") === codigo.join("")) {
      setModalMsg("Parabéns voce acertou!");
      setModalVisible(true);
      setPalpite(["", "", "", ""]);
      setTentativas([]);
      return;
    }

    if (tentativas.length >= 3) {
      setModalMsg("Você perdeu! O código era: " + codigo.join(""));
      setModalVisible(true);
      setPalpite(["", "", "", ""]);
      setTentativas([]);
      return;
    }
    setPalpite(["", "", "", ""]);
  };

  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{modalMsg}</Text>
            <Pressable style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    
      <View style={styles.header}>
        <Text style={styles.titulo}>Termo Number</Text>
      </View>

      <View style={styles.jogo}>
        <TextInput
          style={styles.input}
          value={palpite[0]}
          onChangeText={(text) => {
            const novoPalpite = [...palpite];
            novoPalpite[0] = text;
            setPalpite(novoPalpite);
          }}
        />

        <TextInput
          style={styles.input}
          value={palpite[1]}
          onChangeText={(text) => {
            const novoPalpite = [...palpite];
            novoPalpite[1] = text;
            setPalpite(novoPalpite);
          }}
        />

        <TextInput
          style={styles.input}
          value={palpite[2]}
          onChangeText={(text) => {
            const novoPalpite = [...palpite];
            novoPalpite[2] = text;
            setPalpite(novoPalpite);
          }}
        />

        <TextInput
          style={styles.input}
          value={palpite[3]}
          onChangeText={(text) => {
            const novoPalpite = [...palpite];
            novoPalpite[3] = text;
            setPalpite(novoPalpite);
          }}
        />
      </View>

      <View style={styles.jogadas}>
        <FlatList
          data={tentativas}
          renderItem={({ item }) => (
            <View style={styles.tentativas}>
              <Text style={[styles.tentativa, { backgroundColor: item.cor1 }]}>
                {item.t1}
              </Text>
              <Text style={[styles.tentativa, { backgroundColor: item.cor2 }]}>
                {item.t2}
              </Text>
              <Text style={[styles.tentativa, { backgroundColor: item.cor3 }]}>
                {item.t3}
              </Text>
              <Text style={[styles.tentativa, { backgroundColor: item.cor4 }]}>
                {item.t4}
              </Text>
            </View>
          )}
        ></FlatList>
      </View>

      <Pressable style={styles.botao} onPress={verificar}>
        <Text style={styles.txtBotao}>OK</Text>
      </Pressable>
    </View>
  );
}

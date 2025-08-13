import { Text, View, TextInput, Pressable, Modal, Image } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { FlatList } from "react-native-web";
import styles from "./styles";
import * as Animatable from "react-native-animatable";

export default function App() {
  const gerarCodigo = () => {
    let lista = [];
    for (let i = 0; i < 4; i++) {
      lista.push(Math.floor(Math.random() * 10));
    }
    return lista;
  };

  const [codigo, setCodigo] = useState(gerarCodigo());
  const [palpite, setPalpite] = useState(["", "", "", ""]);
  const cores = ["#ef4a4aff", "#9ce160ff", "#ecfb66ff"];
  const [tentativas, setTentativas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMsg, setModalMsg] = useState("");

  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    inputRefs[0].current?.focus();
  }, []);

  const verificar = () => {
    if (palpite.includes("")) {
      setModalMsg("Preencha todos os campos!");
      setModalVisible(true);
      inputRefs[0].current?.focus();
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
      setModalMsg("Parabéns você acertou!");
      setModalVisible(true);
      setPalpite(["", "", "", ""]);
      setTentativas([]);
      setCodigo(gerarCodigo());
      inputRefs[0].current?.focus();
      return;
    }

    if (tentativas.length >= 4) {
      setModalMsg("Você perdeu! O código era: " + codigo.join(""));
      setModalVisible(true);
      setPalpite(["", "", "", ""]);
      setTentativas([]);
      setCodigo(gerarCodigo());
      inputRefs[0].current?.focus();
      return;
    }
    setPalpite(["", "", "", ""]);
    inputRefs[0].current?.focus();
  };

  return (
    <View style={styles.container}>
      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{modalMsg}</Text>
            {modalMsg.includes("Parabéns") ? (
              <Image
                style={styles.modalImage}
                source={require("./assets/ganhou.gif")}
              />
            ) : modalMsg.includes("perdeu") ? (
              <Image
                style={styles.modalImage}
                source={require("./assets/perdeu.gif")}
              />
            ) : null}

            <Pressable
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View style={styles.header}>
        <Image
          style={styles.imgHeader}
          source={require("./assets/header-icons.png")}
        />
        <Animatable.View animation="rubberBand" style={styles.viewTitulo}>
          <Image
            style={styles.interrogacao}
            source={require("./assets/interrogacao-icon.png")}
          />
          <Text style={styles.titulo}>Termo Number</Text>
        </Animatable.View>
      </View>

      <View style={styles.jogo}>
        {palpite.map((valor, index) => (
          <TextInput
            key={index}
            ref={inputRefs[index]}
            style={styles.input}
            value={valor}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) => {
              const novoPalpite = [...palpite];
              novoPalpite[index] = text;
              setPalpite(novoPalpite);

              if (text && index < inputRefs.length - 1) {
                inputRefs[index + 1].current?.focus();
              }
            }}
          />
        ))}
      </View>

      <View style={styles.jogadas}>
        <FlatList
          data={tentativas}
          renderItem={({ item }) => (
            <Animatable.View animation="pulse" style={styles.tentativas}>
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
            </Animatable.View>
          )}
        />
      </View>

      <Pressable style={styles.botao} onPress={verificar}>
        <Animatable.Text animation="bounceIn" style={styles.txtBotao}>OK</Animatable.Text>
      </Pressable>
    </View>
  );
}

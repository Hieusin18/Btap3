// cspell:ignore Pressable mssv Mssv MSSV
import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [screen, setScreen] = useState(1);
  const [userName, setUserName] = useState("");
  const [mssv, setMssv] = useState("");

  const goToScreen2 = () => {
    if (!userName.trim() || !mssv.trim()) {
      Alert.alert("Thông báo", "Vui lòng nhập UserName và MSSV.");
      return;
    }
    setScreen(2);
  };

  if (screen === 2) {
    return (
      <View style={styles.screen2}>
        <Pressable style={styles.backButton} onPress={() => setScreen(1)}>
          <Text style={styles.backArrow}>←</Text>
        </Pressable>
        <Text style={styles.receivedText}>Name: {userName}</Text>
        <Text style={styles.receivedText}>MSSV: {mssv}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      {/* ================= HÀNG 1 ================= */}
      <View style={styles.row1}>
        <View style={[styles.box, styles.blue]}>
          <Text style={styles.number}>1</Text>
        </View>

        <View style={[styles.box, styles.red]}>
          <Text style={styles.number}>2</Text>
        </View>
      </View>

      {/* ================= HÀNG 2 ================= */}
      <View style={styles.row2}>
        <View style={[styles.box, styles.yellow, styles.one]}>
          <Text style={[styles.number, styles.black]}>3</Text>
        </View>

        <View style={[styles.box, styles.green, styles.one]}>
          <Text style={styles.number}>4</Text>
        </View>

        <View style={[styles.box, styles.purple, styles.two]}>
          <Text style={styles.number}>5</Text>
        </View>
      </View>

      {/* ================= HÀNG 3 ================= */}
      <View style={[styles.box, styles.orange]}>
        <Text style={styles.number}>6</Text>
      </View>

      {/* ================= HỌ TÊN ================= */}
      <View style={styles.footer}>
        <Text style={styles.studentInfoTitle}>Nhập thông tin sinh viên</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#808080"
          value={userName}
          onChangeText={setUserName}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your ID"
          placeholderTextColor="#808080"
          value={mssv}
          onChangeText={setMssv}
          keyboardType="numeric"
        />
        <Pressable style={styles.clickButton} onPress={goToScreen2}>
          <Text style={styles.buttonText}>Click me</Text>
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  /* ================= CONTAINER ================= */

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 5,
  },

  /* ================= HÀNG 1 ================= */

  row1: {
    flexDirection: "row",
    height: 165,
    marginBottom: 10,
  },

  /* ================= HÀNG 2 ================= */

  row2: {
    flexDirection: "row",
    height: 161,
    gap: 10,
    marginBottom: 10,
  },

  /* ================= Ô CHUNG ================= */

  box: {
    justifyContent: "center",
    alignItems: "center",
  },

  /* ================= Ô 1 ================= */

  blue: {
    backgroundColor: "#1976F3",
    flex: 1,
    marginRight: 5,
  },

  /* ================= Ô 2 ================= */

  red: {
    backgroundColor: "#F93636",
    flex: 1,
    marginLeft: 5,
  },

  /* ================= Ô 3 ================= */

  yellow: {
    backgroundColor: "#FFD719",
  },

  /* ================= Ô 4 ================= */

  green: {
    backgroundColor: "#27AE60",
  },

  /* ================= Ô 5 ================= */

  purple: {
    backgroundColor: "#8139D9",
  },

  /* Tỷ lệ 3 : 4 : 5 = 1 : 1 : 2 */

  one: {
    flex: 1,
  },

  two: {
    flex: 2,
  },

  /* ================= Ô 6 ================= */

  orange: {
    backgroundColor: "#FF7514",
    width: "100%",
    height: 142,
  },

  /* ================= SỐ ================= */

  number: {
    color: "#ffffff",
    fontSize: 60,
    fontWeight: "bold",
  },

  black: {
    color: "#000000",
  },

  /* ================= FOOTER ================= */

  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 65,
  },

  input: {
    width: "80%",
    height: 46,
    borderWidth: 1,
    borderColor: "#181717cc",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
    fontSize: 16,
  },

  studentInfoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },

  receivedText: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#161616",
  },

  clickButton: {
    marginTop: 16,
    backgroundColor: "#1976F3",
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },

  screen2: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  backButton: {
    position: "absolute",
    top: 16,
    left: 16,
    backgroundColor: "#00A896",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    overflow: "hidden",
  },

  backArrow: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
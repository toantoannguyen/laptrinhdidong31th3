import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Switch } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";

const ProfileScreen = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Avatar rounded source={require("./assets/user.jpg")} size="large" />
        <Text style={styles.name}>toan nguyen</Text>
        <Text style={styles.email}>toan@gmail.com</Text>
      </View>

      {/* Danh sách tùy chọn */}
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionRow}>
          <Icon name="home-outline" size={20} color="#000" />
          <Text style={styles.optionText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionRow}>
          <Icon name="card-outline" size={20} color="#000" />
          <Text style={styles.optionText}>My Card</Text>
        </TouchableOpacity>
        <View style={styles.optionRow}>
          <Icon name="moon-outline" size={20} color="#000" />
          <Text style={styles.optionText}>Dark Mood</Text>
          <Switch
            value={darkMode}
            onValueChange={(value) => setDarkMode(value)}
            style={styles.switch}
          />
        </View>
        <TouchableOpacity style={styles.optionRow}>
          <Icon name="car-outline" size={20} color="#000" />
          <Text style={styles.optionText}>Truck Your Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionRow}>
          <Icon name="settings-outline" size={20} color="#000" />
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionRow}>
          <Icon name="help-circle-outline" size={20} color="#000" />
          <Text style={styles.optionText}>Help Center</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    alignItems: "center",
    padding: 15,
    backgroundColor: "#FFF9C4",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  name: { fontSize: 18, fontWeight: "bold", marginTop: 10 },
  email: { fontSize: 14, color: "gray", marginTop: 5 },
  options: { paddingHorizontal: 15, marginTop: 20 },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  optionText: { fontSize: 16, marginLeft: 10, flex: 1 },
  switch: { marginRight: 10 },
  logoutButton: {
    backgroundColor: "#4A90E2",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 20,
  },
  logoutText: { color: "#fff", fontSize: 16 },
});

export default ProfileScreen;

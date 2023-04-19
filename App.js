import React from "react";
import { StyleSheet, View, Button, Alert } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const App = () => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View style={{ flex: 9, flexDirection: "row" }}>
        <View style={{ flex: 9 }} />
        <View style={{ flex: 1, backgroundColor: "gray" }}>
          {verticalSidebarButtons.map((el) => (
            <>
              <Ionicons name="md-checkmark-circle" size={32} color="green" />
              <Button
                onPress={() => Alert.alert("Simple Button pressed")}
                title={el.title}
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
            </>
          ))}
        </View>
      </View>
      <View style={{ flex: 1, backgroundColor: "gray" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const verticalSidebarButtons = [
  {
    title: "Réservations",
  },
  {
    title: "Clients",
  },
  {
    title: "Réglages",
  },
  {
    title: "Service",
  },
];

export default App;

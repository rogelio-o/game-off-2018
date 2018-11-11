import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default class Welcome extends React.Component {
  public render() {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
}

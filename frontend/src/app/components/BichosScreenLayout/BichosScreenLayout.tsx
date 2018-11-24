import React from "react";
import { View, StatusBar } from "react-native";
import styles from "./styles";
import BoottomMenu from "../BottomMenu/BottomMenu";
import ExpBar from "../ExpBar/ExpBar";
import AmountBar from "../AmountBar/AmountBar"
import SwordBar from "../SwordBar/SwordBar"
import { NavigationScreenProp } from "react-navigation";

interface IProps {
  lvl: number;
  exp: number;
  coins: number;
  swords: number;
  readonly navigation: NavigationScreenProp<any, any>;
}

export default class BichosScreenLayout extends React.Component<IProps> {
  public render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />
        <View style={styles.head}>
          <View style={{ flex: 1 }}>
            <ExpBar lvl={this.props.lvl} exp={this.props.exp}/>
          </View>
          <View style={{ flex: 1 }}>
            <AmountBar coins={this.props.coins}/>
          </View>
          <View style={{ flex: 1 }}>
            <SwordBar swords={this.props.swords}/>
          </View>
        </View>
        <View style={styles.body} />
        <View style={styles.foot}>
          <BoottomMenu navigation={this.props.navigation}/>
        </View>
      </View>
    );
  }
}
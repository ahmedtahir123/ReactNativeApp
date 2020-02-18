import * as React from "react";
import { TextInput } from "react-native-paper";
import { View } from "react-native";
import { Appbar, Button } from "react-native-paper";

// import display from "../component/display"

export default class MyComponent extends React.Component {
  state = {
    Fname: "",
    Sname: "",
    Data: ""
  };

  isSubmitted = () => {
    // debugger
    fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.Fname}&sname=${this.state.Sname}`,
      {
        headers: {
          "x-rapidapi-host": "love-calculator.p.rapidapi.com",
          "x-rapidapi-key": "3939d1c373msh1e0f46b707cd35dp19238ejsn6d7777ae5ea8"
        }
      }
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ Data: data });
        console.log(data);
      });
    // console.log("asd");
  };

  render() {
    return (
      <View>
        <Appbar.Header>
          <Appbar.Content title="Title" style={{ alignItems: "center" }} />
        </Appbar.Header>
        <TextInput
          label="Fname"
          value={this.state.Fname}
          onChangeText={Fname => this.setState({ Fname })}
        />
        <TextInput
          label="Sname"
          value={this.state.Sname}
          onChangeText={Sname => this.setState({ Sname })}
        />
        <Button icon="bad" mode="contained" onPress={() => this.isSubmitted()}>
          Calculator
        </Button>
        {this.state.Data === "" ? (
          <p>loading</p>
        ) : (
          <p style={{ display: "flex", justifyContent: "center" }}>
            {this.state.Data.percentage}
            <br />
            {this.state.Data.result}
          </p>
        )}
      </View>
    );
  }
}

import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = (props) => {

    const { text, onPress } = props;
    return(
        <TouchableOpacity
            style = {buttonStyles.buttonContainer}
            onPress ={onPress} >
            <Text>{text}</Text>

        </TouchableOpacity>
    )
}

export default Button;

const buttonStyles = StyleSheet.create({
    buttonContainer: {
      backgroundColor: 'orange',
    },
    buttonText:{
      color: "black"
    }
  });
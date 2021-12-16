import React from "react";
import { useDark } from "../../contexts/darkContext";
import {
  Container,
  SignupBtn,
  LoginTxt,
  SignupTxt,
  Button,
  Image,
} from "./styles";

const Welcome = ({ navigation }: { navigation: any }) => {
  const isDark = useDark();

  return (
    <Container>
      <Image
        source={
          isDark
            ? require("../../assets/images/logo_dark.png")
            : require("../../assets/images/logo_light.png")
        }
      />
      <SignupBtn onPress={() => navigation.navigate("SignUp")}>
        <SignupTxt>Create Account</SignupTxt>
      </SignupBtn>
      <Button onPress={() => navigation.navigate("SignIn")}>
        <LoginTxt>Already have an account? Sign In</LoginTxt>
      </Button>
    </Container>
  );
};

export default Welcome;

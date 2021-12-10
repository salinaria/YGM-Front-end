import React, { useContext, useRef } from "react";
import axios from "axios";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const input1 = useRef(null);
  const input2 = useRef(null);
  function confirm() {
    return axios
      .post("http://localhost:8000/api/login/", {
        username: input1.current.value,
        password: input2.current.value,
      })
      .then((user) => {
        console.log(user);
        localStorage.setItem("currentUser", JSON.stringify(user.data));
        return user;
      });
  }
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Username" ref={input1} />
        <Input type="password" placeholder="Password" ref={input2} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={confirm}>
        Signin
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

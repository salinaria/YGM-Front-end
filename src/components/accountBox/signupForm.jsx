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

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);

  function confirm() {
    return axios.post("http://localhost:8000/api/profile/", {
      email: input1.current.value,
      username: input2.current.value,
      password: input3.current.value,
    }).then(switchToSignin);
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" ref={input1} />
        <Input type="text" placeholder="Username" ref={input2} />
        <Input type="password" placeholder="Password" ref={input3} />
        <Input type="password" placeholder="Confirm Password" ref={input4} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={confirm}>
        Signup
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

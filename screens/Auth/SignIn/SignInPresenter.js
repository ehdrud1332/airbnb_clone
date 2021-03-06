
import React from 'react';
import {
    StatusBar,
    KeyboardAvoidingView,
} from 'react-native';

import styled from 'styled-components/native';
import Btn from '../../../components/Auth/Btn';
import Input from '../../../components/Input';
import DissmissKeyboard from "../../../components/DissmissKeyboard";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export default ({
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit
}) => (
    <DissmissKeyboard>
        <Container>
            <StatusBar barStyle="dark-content" />
            <KeyboardAvoidingView behavior="position">
                <InputContainer>
                    <Input
                        keyboardType="email-address"
                        value={email}
                        placeholder="email"
                        autoCapitalize="none"
                        stateFn={setEmail}
                    />
                    <Input
                        value={password}
                        placeholder="Password"
                        isPassword={true}
                        stateFn={setPassword}
                    />
                </InputContainer>
                <Btn text={"Sign In"} accent onPress={handleSubmit} />
            </KeyboardAvoidingView>
        </Container>
    </DissmissKeyboard>
)

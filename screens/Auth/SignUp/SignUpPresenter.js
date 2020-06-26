import React, {useState} from 'react';
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
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    loading,
    handleSubmit
}) => (
    <DissmissKeyboard>
        <Container>
            <StatusBar barStyle="dark-content" />
            <KeyboardAvoidingView behavior="position">
                <InputContainer>
                    <Input
                        value={firstName}
                        placeholder="firstName"
                        autoCapitalize="none"
                        stateFn={setFirstName}
                    />
                    <Input
                        value={lastName}
                        placeholder="lastName"
                        autoCapitalize="none"
                        stateFn={setLastName}
                    />
                    <Input
                        keyboardType={"email-address"}
                        value={email}
                        placeholder="email"
                        autoCapitalize="none"
                        stateFn={setEmail}
                    />
                    <Input
                        value={password}
                        placeholder="password"
                        isPassword={true}
                        stateFn={setPassword}
                    />
                </InputContainer>
                <Btn
                    loading={loading}
                    text={"Sign Up"}
                    accent
                    onPress={handleSubmit}
                />
            </KeyboardAvoidingView>
        </Container>
    </DissmissKeyboard>
)

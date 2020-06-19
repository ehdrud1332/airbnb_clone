import React, {useState} from 'react';
import {
    StatusBar,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback
} from 'react-native';
import styled from 'styled-components/native';
import Btn from '../../components/Auth/Btn';
import Input from '../../components/Input';
import DissmissKeyboard from "../../components/DissmissKeyboard";
import utils from '../../utils';
import api from '../../api';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 30px;
`;



export default () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async () => {
        validateForm();
        try {
            const {status} = await api.createAccount({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            })
            console.log(status)
        } catch(e) {
            console.warn(e.message)
        }
    }
    const dismissKeyboard = () => Keyboard.dismiss
    const validateForm = () => {
        if(
            firstName === "" ||
            lastName === "" ||
            email === "" ||
            password === ""

        ) {
            alert("All fields are required");
            return;
        }

        if(!utils.isEmail(email)) {

            console.log(utils.isEmail(email))
            alert("Please add a valid email.")
            return;
        }
    }


    return (
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
                    <Btn text={"Sign Up"} accent onPress={handleSubmit} />
                </KeyboardAvoidingView>
            </Container>
        </DissmissKeyboard>
    );
};


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



export default ({navigation: {navigate}}) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSubmit = async () => {

        if(!validateForm()) {
            return;
        }
        setLoading(true);
        try {
            const {status} = await api.createAccount({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            })
            console.log(status)
            if(status === 200) {
                alert("Account created successfully, Sign In, Please");
                navigate("SignIn", {email, password});
            }
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
            return false;
        }

        if(!utils.isEmail(email)) {

            console.log(utils.isEmail(email))
            alert("Please add a valid email.")
            return false;
        }
        return true;
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
                    <Btn
                        loading={loading}
                        text={"Sign Up"}
                        accent
                        onPress={handleSubmit}
                    />
                </KeyboardAvoidingView>
            </Container>
        </DissmissKeyboard>
    );
};



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
import {useDispatch} from 'react-redux';
import utils from '../../utils';
import {userLogin} from '../../redux/userSlice';
import api from '../../api';


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export default ({route: {params}}) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState(params?.email);
    const [password, setPassword] = useState(params?.password);
    const handleSubmit = async() => {
        if(!validateForm()) {
            return;
        }

        // try {
        //     const result = await api.login({
        //         email: email, password: password
        //     })
        //     console.log(result)
        // } catch(e) {
        //     console.warn(e.message)
        // }
        dispatch(
            userLogin({
                email, password
            })
        )
    }
    const dismissKeyboard = () => Keyboard.dismiss
    const validateForm = () => {
        if(
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
        return true
    }

    return (
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
    );
};


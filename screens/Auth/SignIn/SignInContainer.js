import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import utils from '../../../utils';
import {userLogin} from '../../../redux/userSlice';
import api from '../../../api';
import SignInPresenter from "./SignInPresenter";



export default ({route: {params}}) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState(params?.email);
    const [password, setPassword] = useState(params?.password);
    const handleSubmit = async() => {
        if(!validateForm()) {
            return;
        }
        dispatch(
            userLogin({
                email, password
            })
        )
    }
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
        <SignInPresenter
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
        />
    );
};


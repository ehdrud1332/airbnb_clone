import React, {useState} from 'react';
import utils from '../../../utils';
import api from '../../../api';
import SignUpPresenter from './SignUpPresenter'

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
        } finally {
            setLoading(false);
        }
    }
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
        <SignUpPresenter
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            loading={loading}
            handleSubmit={handleSubmit}
        />

    );
};


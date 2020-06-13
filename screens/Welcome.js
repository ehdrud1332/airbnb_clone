import React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {BlurView} from 'expo-blur';

const LOGO_URL =
    "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-219x286.png";

const Container = styled.View`
 flex: 1;
`;

const Image = styled.Image`
  position: absolute;
  z-index: -1;
  top: 0;
`;

const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;

export default ({navigation}) => {
    return (
        <Container>
            <BlurView
                intensity={40}
                tint="light"
                style={{
                    flex: 1,
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Logo source={{uri: LOGO_URL}} />
            </BlurView>
            <Image source={require('../assets/BgImage.jpeg')} />
            <StatusBar barStyle="light-content" />
            {/*<Text>Welcome</Text>*/}
            {/*<Button onPress={() => navigation.navigate("SignUp")} title={"Sign Up "} />*/}
            {/*<Button onPress={() => navigation.navigate("SignIn")} title={"Sign In "} />*/}
        </Container>
    );
};


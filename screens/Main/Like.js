import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`

`;

const Like = () => {
    return (
        <Container>
            <Text>Like</Text>
        </Container>
    );
};

export default Like;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Poster from './Poster';
import Votes from './Votes';


const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: black;
  font-weight: 500;
  margin: 10px 0px 5px 0px;
`;

const Vertical = ({is, poster, title, votes}) => {
    return (
        <Container>
            <Poster url={poster} />
            <Title>{title.slice(0, 10)}</Title>
            {votes > 0 && <Votes votes={votes} />}
        </Container>
    );
};

Vertical.propTypes = {
    id: PropTypes.number.isRequired,
    poster: PropTypes.string,
    title: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired
};

export default Vertical;

import React from 'react';
import styled from 'styled-components/native';
import ScrollContainer from "../../../components/Tv/ScrollContainer";
import HorizontalSlider from "../../../components/Tv/HorizontalSlider";
import Vertical from '../../../components/Tv/Vertical';


const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const Text = styled.Text`
  color: black;
`;

const SavedPresenter = ({loading, popular, topRated}) => {
    return (
        <ScrollContainer loading={loading}>
            <HorizontalSlider title={"Pupular Rooms"}>
                {popular.map(tv => (
                    <Vertical
                        key={tv.id}
                        poster={tv.poster_path}
                        title={tv.original_name}
                        votes={tv.vote_average}
                        id={tv.id}
                    />
                ))}
            </HorizontalSlider>
            <HorizontalSlider title={"Top Rated Rooms"}>
                {topRated.map(tv => (
                    <Vertical
                        key={tv.id}
                        title={tv.original_name}
                        votes={tv.vote_average}
                        id={tv.id}
                        poster={tv.poster_path}
                    />
                ))}
            </HorizontalSlider>
        </ScrollContainer>

    );
};

export default SavedPresenter;

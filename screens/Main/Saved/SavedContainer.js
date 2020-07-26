import React, {useEffect, useState} from 'react';
import SavedPresenter from "./SavedPresenter";
import {tvApi} from '../../../MovieApi';
import {View, Text} from 'react-native';


export default () => {

    const [shows, setShows] = useState({
        loading: true,
        today: [],
        thisWeek: [],
        topRated: [],
        popular: [],
        todayError: null,
        thisWeekError: null,
        topRatedError: null,
        popularError: null
    });
    const getData = async () => {
        const [today, todayError] = await tvApi.today();
        const [thisWeek, thisWeekError] = await tvApi.thisWeek();
        const [topRated, topRatedError] = await tvApi.topRated();
        const [popular, popularError] = await tvApi.popular();
        setShows({
            loading: false,
            today,
            thisWeek,
            topRated,
            popular,
            todayError,
            thisWeekError,
            topRatedError,
            popularError
        });
    };
    useEffect(() => {
        getData();
    }, []);

    return(
        <SavedPresenter {...shows}/>
    )
}

import React, {useState} from 'react';
import {Image} from 'react-native';
import {AppLoading} from 'expo';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Gate from './components/Gate';
import store, {persistor} from './redux/store';

const cacheImages = images =>
    images.map(image => {
        if(typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });

const cacheFonts = fonts =>
    fonts.map(font => [Font.loadAsync(font)]);

export default function () {

    const [isReady, setIsReady] = useState(false);
    const loadAssets = async() => {
        const images = cacheImages([
            require("./assets/BgImage.jpeg"),
            require("./assets/Image.jpeg"),
            "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-219x286.png"
        ]);
        const fonts = cacheFonts([Ionicons.font]);
        return Promise.all([...images, ...fonts]);
    }

    const onFinish = () => setIsReady(true);

    return isReady ? (

        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Gate />
            </PersistGate>
        </Provider>

    ) : (
        <AppLoading
            startAsync={loadAssets}
            onFinish={onFinish}
            onError={console.log}
        />
    )
}



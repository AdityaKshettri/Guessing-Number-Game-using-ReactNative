import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';

import MainButton from '../components/MainButton';

import defaultStyles from '../constants/default-styles';
import colors from '../constants/colors';

const GameOverScreen = props => {
    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);
 
    useEffect(() => {
        const updateLayout = () => {
            setAvailableDeviceWidth(Dimensions.get('window').width);
            setAvailableDeviceHeight(Dimensions.get('window').height);
        };
        Dimensions.addEventListener('change', updateLayout);
        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    });

    return (
        <ScrollView>
            <View style={styles.screen}>
                <Text style={defaultStyles.title}>The Game is Over!!</Text>
                <View style={styles.imageContainer}>
                    <Image 
                        source={require('../assets/success.png')} 
                        style={styles.image} 
                        resizeMode="cover" />
                    {/* <Image 
                        source={{uri: 'https://wallpaperstock.net/wallpapers/thumbs1/43171hd.jpg'}} 
                        style={styles.image} 
                        resizeMode="cover"/> */}
                </View>
                <View style={styles.resultContainer}>
                    <Text style={{...defaultStyles.bodyText, ...styles.resultText}}>
                        Your phone needed
                        <Text style={styles.highlight}> {props.roundsNumber} </Text>
                        rounds to guess the number
                        <Text style={styles.highlight}> {props.userNumber}</Text>
                    </Text>
                </View>
                <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: (Dimensions.get('window').width * 0.7) / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').height / 60
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    },
    image: {
        width: '100%',
        height: '100%'
    },
    highlight: {
        color: colors.primary,
        fontFamily: 'open-sans-bold'
    }
});

export default GameOverScreen;
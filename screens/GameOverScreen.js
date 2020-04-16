import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import MainButton from '../components/MainButton';

import defaultStyles from '../constants/default-styles';
import colors from '../constants/colors';

const GameOverScreen = props => {
    return (
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
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: '80%',
        height: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center',
        fontSize: 18
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
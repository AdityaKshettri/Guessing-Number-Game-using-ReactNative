import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/MainButton';

import defaultStyles from '../constants/default-styles';
import colors from '../constants/colors';
import MainButon from '../components/MainButton';

const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number!', 
                'Number has to be between 1 and 99',
                [{text: 'okay', style: 'destructive', onPress: resetInputHandler}]
            );
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        keyboardDismissHandler();
    };

    const keyboardDismissHandler = () => {
        Keyboard.dismiss();
    };

    let confirmedOutput;
    if(confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text style={defaultStyles.title}>You Selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <MainButon onPress={() => props.onStartGame(selectedNumber)}>START GAME</MainButon>
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={keyboardDismissHandler}>
            <View style={styles.screen}>
                <Text style={defaultStyles.title}>Start a New Game</Text>
                <Card style={styles.inputContainer}>
                    <Text style={defaultStyles.bodyText}>Select a Number</Text>
                    <Input 
                        style={styles.input} 
                        blurOnSubmit 
                        autoCapitalize='none' 
                        autoCorrect={false}
                        keyboardType='number-pad'
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" color={colors.accent} onPress={resetInputHandler} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirm" color={colors.primary} onPress={confirmInputHandler} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15 
    },
    button: {
        width: 80
    },
    summaryContainer: {
        marginTop: 20, 
        alignItems: 'center'
    }
});

export default StartGameScreen;
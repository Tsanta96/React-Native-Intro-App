import React, { useState } from 'react';
import { View, TextInput, Button, Modal, StyleSheet } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    const cancelGoalHandler = () => {
        props.onCancel();
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible}>
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Course Goal" 
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                    />
                {/* <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)}/> */}
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={cancelGoalHandler}/>
                    </View>
                     <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        //FlexDirection = "column" <---- Default
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: "space-around",
        width: '60%'
    },
    button: {
        width: '40%'
    }
})

export default GoalInput;
<script src="http://localhost:8097"></script>
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GoalItem = props => {
    return (
        // Adds a visual feedback on touch
        <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem} onPress={props.onDelete}>
                {/* Have less styling options with <Text> but can wrap the <Text> component in a <View> component to get have more styling options */}
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )   
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10
    }
})

export default GoalItem;

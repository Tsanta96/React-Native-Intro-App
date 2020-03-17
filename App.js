import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    //first element is current state
    // setCourseGoals([...courseGoals, enteredGoal]);

    //This assures that the argument is the GUARANTEED LATEST STATE SNAPSHOT
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>
      {/* Flatlist works with a list of objects that includes a "key" property */}
      {/* Use FlatList for lists that you don't know how long they will be but could be long */}
      <FlatList 
        //keyExtractor looks for a property titled "key" by default
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemData => <GoalItem onDelete={() => console.log("hello")} title={itemData.item.value}/> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

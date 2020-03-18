import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  //Smart to console log to check state variables here

  const addGoalHandler = goalTitle => {
    if (goalTitle.length === 0) return;
    //first element is current state
    // setCourseGoals([...courseGoals, enteredGoal]);

    //This assures that the argument is the GUARANTEED LATEST STATE SNAPSHOT
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);

    setIsAddMode(false);

    //*Way React works, when setting two states after each other, React batches these together and renders
    //Them at the same time instead of individually ----> EFFIICCCIIIEENNCCYYYY
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    })
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="ADD NEW GOAL" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler}/>
      {/* Flatlist works with a list of objects that includes a "key" property */}
      {/* Use FlatList for lists that you don't know how long they will be but could be long */}
      <FlatList 
        //keyExtractor looks for a property titled "key" by default
        keyExtractor={(item, index) => item.id}
        data={courseGoals} 
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/> }
        // renderItem={itemData => <GoalItem onDelete={() => removeGoalHandler(itemData.id)} title={itemData.item.value}/> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import {StatusBar} from 'expo-status-bar'
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal)=> goal.id !== id)
    });
  }
    
  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button 
        title='add new goal' 
        color='#a065ec' 
        onPress={startAddGoalHandler}
        />
      <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler}/>
      {/* below will display the list of goals to be rendered */}
      <View style={styles.goalsContainer}>
      {/* <ScrollView alwaysBounceVertical={false}>
        {courseGoals.map((goal) => 
          <View style={styles.goalItem} key={goal}>
            <Text style={styles.goalText}>{goal}</Text>
          </View>
        )}
      </ScrollView> */}
      <FlatList 
        data={courseGoals} 
        renderItem={itemData => {
          return(
            <GoalItem
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler}
              />
          )
      }} 
      alwaysBounceVertical={false} 
      keyExtractor={(item, index)=> {
        return item.id;
      }}
      />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5
  },
});

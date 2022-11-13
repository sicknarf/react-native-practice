import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    // setEnteredGoalText('');
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
  }
    
  return (
    <View style={styles.appContainer}>
      <GoalInput 
        onAddGoal={addGoalHandler} 

      />
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
            <GoalItem text={itemData.item.text}/>
          )
      }} 
      alwaysBounceVertical={false} 
      keyExtractor={(item, index)=> {
        return item.id;
      }}
      />
      </View>
    </View>
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

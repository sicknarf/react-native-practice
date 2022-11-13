import { useState } from 'react'
import {StyleSheet, View, TextInput, Button} from 'react-native'


export default function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      };

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return(
    <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder="your course goal!" 
          onChangeText={goalInputHandler} 
          value={enteredGoalText}
          />
        {/* will make the button clear the text later */}
        <Button 
          title="add goal"
          onPress={addGoalHandler}
          />
    </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '73%',
        marginRight: 8,
        padding: 8
      },
})
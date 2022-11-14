import { useState } from 'react'
import {StyleSheet, View, TextInput, Button, Modal, Image, KeyboardAvoidingView } from 'react-native'


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
    <Modal 
      visible={props.visible} 
      animationType='slide'
      >
      <KeyboardAvoidingView style={{flex:1}} behavior="padding">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput 
          style={styles.textInput} 
          placeholder="your course goal!" 
          onChangeText={goalInputHandler} 
          value={enteredGoalText}
          />
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
            <Button 
              title="cancel" 
              onPress={props.onCancel}
              color='#f31282'
              />
          </View>
          <View style={styles.button}>
            <Button 
              title="add goal"
              onPress={addGoalHandler}
              color='#b180f0'
              />
          </View>
        </View>
      </View>
      </KeyboardAvoidingView>
    </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding: 16,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        backgroundColor: '#311b6b'
      },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        width: '100%',
        padding: 16,
        color: '#120438',
        borderRadius: 6
      },
    buttonContainer: {
      marginTop: 16,
      flexDirection: 'row',
    },
    button: {
      width: '30%',
      marginHorizontal: 8
    },
    image: {
      width: 100,
      height: 100,
      margin: 20
    },
})
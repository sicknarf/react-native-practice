import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>here's some more text</Text>
      </View>
      <Text style={styles.dummyText}>
        Hello World!
      </Text>
      <Button title="tap me!"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin:16,
    borderWidth:2,
    borderColor:'red',
    padding:12
  }
});

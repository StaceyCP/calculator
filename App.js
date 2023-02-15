import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable} from 'react-native';

export default function App() {
  const divide = '\u00F7';
  const multiply = '\u00D7';
  const minus = '\u2212';
  const add = '\u002B';
  const equal = '\u003D';
  const [equation, setEquation] = useState(0);
  const [result, setResult] = useState(0);
  return (
    <View style={styles.container}>
      <Text>{equation}</Text>
      <View>
        <Pressable style={styles.button} onPress={() => {console.log("cancel");}}>
          <Text>c</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {console.log("positive/negative");}}>
          <Text>+/-</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {console.log("percent");}}>
          <Text>%</Text>
        </Pressable>
      </View>
      <View style={styles.nums}>
        <Pressable style={styles.button} onPress={() => {console.log("7");}}>
          <Text>7</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {console.log("8");}}>
          <Text>8</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {console.log("9");}}>
          <Text>9</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {console.log("4");}}>
          <Text>4</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {console.log("5");}}>
          <Text>5</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {console.log("6");}}>
          <Text>6</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {console.log("1");}}>
          <Text>1</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {console.log("2");}}>
          <Text>2</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {console.log("3");}}>
          <Text>3</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {console.log("0");}}>
          <Text>0</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {console.log("delete");}}>
          <Text>del</Text> 
        </Pressable>
        <Pressable style={styles.button} onPress={() => {console.log("decimal");}}>
          <Text>.</Text>
        </Pressable>
      </View>
      <View>
        <Pressable style={styles.button} onPress={() => {console.log("divide");}}>
          <Text>{divide}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {console.log("multiply");}}>
          <Text>{multiply}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {console.log("minus");}}>
          <Text>{minus}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {console.log("add");}}>
          <Text>{add}</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {console.log("equal");}}>
          <Text>{equal}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ffd3e8",
    borderRadius: '50%',
    padding: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 70,
    margin: 5,
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#DBFFF8',
    flex: 1,
    justifyContent: 'center',
  },
  nums: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
  }
});

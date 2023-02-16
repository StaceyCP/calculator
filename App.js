import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable} from 'react-native';

export default function App() {
  const divide = '\u00F7';
  const multiply = '\u00D7';
  const minus = '\u2212';
  const add = '\u002B';
  const equal = '\u003D';
  const [operator, setOperator] = useState('');
  const [num, setNum] = useState("0");
  const [values, setValues] = useState([]);
  return (
    <View style={styles.container}>
      <View style={styles.calculatorInput}>
        <Text adjustsFontSizeToFit={true} numberOfLines={1} style={styles.calculatorInputText}>{num}</Text>
      </View>
      <View style={styles.equationBtns}>
        <View style={styles.nums}>
          <Pressable style={[styles.button, styles.shadow]} onPress={() => setNum("0")}>
            <Text style={styles.text}>c</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.shadow]} onPress={() => {console.log("positive/negative");}}>
            <Text style={styles.text}>+/-</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.shadow]} onPress={() => {console.log("percent");}}>
            <Text style={styles.text}>%</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.shadow]} onPress={() => {setOperator("/")}}>
            <Text style={styles.text}>{divide}</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.shadow]} onPress={() => setNum(num + "7")}>
            <Text style={styles.text}>7</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.shadow]} onPress={() => {console.log("8");}}>
            <Text style={styles.text}>8</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.shadow]} onPress={() => {console.log("9");}}>
            <Text style={styles.text}>9</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.shadow]} onPress={() => setOperator('*')}>
            <Text style={styles.text}>{multiply}</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.shadow]} onPress={() => {console.log("4");}}>
            <Text style={styles.text}>4</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.shadow]} onPress={() => {console.log("5");}}>
            <Text style={styles.text}>5</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.shadow]} onPress={() => {console.log("6");}}>
            <Text style={styles.text}>6</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.shadow]} onPress={() => setOperator("-")}>
            <Text style={styles.text}>{minus}</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.shadow]} onPress={() => {console.log("1");}}>
            <Text style={styles.text}>1</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.shadow]} onPress={() => {console.log("2");}}>
            <Text style={styles.text}>2</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.shadow]} onPress={() => {console.log("3");}}>
            <Text style={styles.text}>3</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.shadow]} onPress={() => setOperator(add)}>
            <Text style={styles.text}>{add}</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.shadow]} onPress={() => {console.log("0");}}>
            <Text style={styles.text}>0</Text>
          </Pressable>
          <View style={[styles.button, styles.shadow]}></View>
          <Pressable style={[styles.button, styles.shadow]} onPress={() => setNum(num + ".")}>
            <Text style={styles.text}>.</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.shadow]} onPress={() => {console.log("equal");}}>
            <Text style={styles.text}>{equal}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: "#ffd3e8",
    borderRadius: '50%',
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    height: 75,
    width: 75,
    margin: 5,
  },
  calculatorInput: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  calculatorInputText: {
    fontSize: 60,
    marginRight: -150
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#DBFFF8',
    flex: 1,
    justifyContent: 'center',
    paddingTop: 150
  },
  nums: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: 370,
  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  text: {
    fontSize: 35
  },
});

import { StyleSheet, View } from 'react-native';
import Status from './components/Status';
import MessageList from './components/MessageList';
import Toolbar from './components/Toolbar';
import InputMethodEditor from './components/InputMethodEditor';

export default function App() {
  return (
    <View style={styles.container}>
      <Status />
      <View style={styles.content}>
        <MessageList />
      </View>
      <View style={styles.toolbar}>
        <Toolbar />
      </View>
      <View style={styles.inputMethodEditor}>
        <InputMethodEditor />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputMethodEditor: {
    flex: 1,
    backgroundColor: 'white',
  },
  toolbar: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.04)',
    backgroundColor: 'white',
  },
});
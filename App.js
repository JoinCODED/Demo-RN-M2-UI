import { NativeBaseProvider } from 'native-base';
import { StyleSheet, View } from 'react-native';
import ListItem from './components/ListItem';
import ListItemNativeBase from './components/ListItemNativeBase';

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <ListItem />
        <ListItemNativeBase />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

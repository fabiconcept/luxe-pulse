import { ThemedText } from '@/components/ThemedText';
import { StyleSheet, Text, View } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Profile</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: "plum"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

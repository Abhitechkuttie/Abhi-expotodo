import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: 'Poppins_600SemiBold' }]}>Welcome to the To-Do App ✅</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={[styles.buttonText, { fontFamily: 'Poppins_400Regular' }]}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
        <Text style={[styles.buttonText, { fontFamily: 'Poppins_400Regular' }]}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 28, marginBottom: 30 },
  button: {
    backgroundColor: '#4C9A2A',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 15,
  },
  buttonText: { color: '#fff', fontSize: 16 },
});


import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>Welcome !</Text>
            <Text style={styles.subtitle}>Sign up to continue</Text>

            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
                keyboardType="name"
                placeholderTextColor={'black'}
            />
            <TextInput
                style={styles.input}
                placeholder="Email Address"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                placeholderTextColor={'black'}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-number"
                placeholderTextColor={'black'}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor={'black'}
            />


            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginBtnText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.signupRow}>
                <Text style={styles.signupText}>Alredy have an account? </Text>

                <TouchableOpacity>
                    <Text style={styles.signupLink}>Login</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const BLUE = '#2563EB';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#F5F7FA',
        paddingHorizontal: 24,
        backgroundColor: 'Black',
        justifyContent: 'center'
    },
    title: {
        color: 'gray',
        fontSize: 30,
        fontWeight: '800',
        textAlign: 'center',
        marginBottom: 4
    },
    subtitle: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
        marginBottom: 28
    },
    googleBtn: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        padding: 14,
        alignItems: 'center',
        marginBottom: 12
    },
    googleBtnText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#333'
    },
    phoneBtn: {
        backgroundColor: BLUE,
        borderRadius: 12,
        padding: 14,
        alignItems: 'center',
        marginBottom: 20
    },
    phoneBtnText: {
        fontSize: 15,
        fontWeight: '700',
        color: '#fff'
    },
    or: {
        textAlign: 'center',
        color: '#888',
        marginBottom: 20
    },
    input: {
        backgroundColor: 'gray',
        borderRadius: 12,
        padding: 14,
        fontSize: 15,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        marginBottom: 12
    },
    forgot: {
        color: BLUE,
        textAlign: 'right',
        fontWeight: '600',
        marginBottom: 20
    },
    loginBtn: {
        backgroundColor: BLUE,
        borderRadius: 12,
        padding: 15,
        alignItems: 'center',
        marginBottom: 24
    },
    loginBtnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700'
    },
    signupRow: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    signupText: {
        color: '#666'
    },
    signupLink: {
        color: BLUE,
        fontWeight: '700'
    },
});

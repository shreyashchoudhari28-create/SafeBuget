import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Profilee = () => {
    return (
        <View style={styles.MainContainer}>
            <View style={styles.Header}>
                <Image style={styles.Image}
                    source={require('./profile.png')} />
                <View style={styles.SubHeader}>
                    <Text style={styles.name}>Rahul Sharma</Text>
                    <Text style={styles.phone}>+91 9878543210</Text>
                    <Text style={styles.Email}>rahulsharma@gmail.com</Text>

                </View>
                <TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft: 120 }}>✎</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Footer}>
                <View>
                    <TouchableOpacity style={styles.Card}>
                        <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold' }}>🧳</Text>
                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '800', marginTop: 5, marginLeft: 15 }}>My Trips</Text>
                        <Text style={{ color: '#fff', fontSize: 25, fontWeight: '800', marginLeft: 230 }}>›</Text>
                    </TouchableOpacity>

                </View>
                <View>
                    <TouchableOpacity style={styles.Card}>
                        <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold' }}>💚</Text>
                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '800', marginTop: 5, marginLeft: 15 }}>Saved Place</Text>
                        <Text style={{ color: '#fff', fontSize: 25, fontWeight: '800', marginLeft: 200 }}>›</Text>
                    </TouchableOpacity>

                </View>
                <View>
                    <TouchableOpacity style={styles.Card}>
                        <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold' }}>💳</Text>
                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '800', marginTop: 5, marginLeft: 15 }}>Payment Method</Text>
                        <Text style={{ color: '#fff', fontSize: 25, fontWeight: '800', marginLeft: 150 }}>›</Text>
                    </TouchableOpacity>

                </View>
                <View>
                    <TouchableOpacity style={styles.Card}>
                        <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold' }}>⚙️</Text>
                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '800', marginTop: 5, marginLeft: 15 }}>Settings</Text>
                        <Text style={{ color: '#fff', fontSize: 25, fontWeight: '800', marginLeft: 230 }}>›</Text>
                    </TouchableOpacity>

                </View>
                <View>
                    <TouchableOpacity style={styles.Card}>
                        <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold' }}>❓</Text>
                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '800', marginTop: 5, marginLeft: 15 }}>Help & Support</Text>
                        <Text style={{ color: '#fff', fontSize: 25, fontWeight: '800', marginLeft: 170 }}>›</Text>
                    </TouchableOpacity>

                </View>
                <View>
                    <TouchableOpacity style={styles.Card}>
                        <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold' }}>ℹ️</Text>
                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '800', marginTop: 5, marginLeft: 15 }}>About Us</Text>
                        <Text style={{ color: '#fff', fontSize: 25, fontWeight: '800', marginLeft: 220 }}>›</Text>
                    </TouchableOpacity>

                </View>

            </View>
            <TouchableOpacity>
                <Text style={{ color: '#e14545', fontSize: 20, fontWeight: '800', textAlign: 'center', borderBottomWidth: 1, borderBottomColor: '#555b64', borderTopWidth: 1, borderTopColor: '#555b64', padding: 20 }}>Logout</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row',columnGap:15}}>
                <TouchableOpacity style={{margin:15}}>
                    <Text style={{fontSize:25}}>🏠</Text>
                    <Text style={{fontSize:15,color:'#fff'}}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{margin:15}}>
                    <Text style={{fontSize:25}}>🧳</Text>
                    <Text style={{fontSize:15,color:'#fff'}}>Trips</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{margin:15}}>
                    <Text style={{fontSize:25}}>🚨</Text>
                    <Text style={{fontSize:15,color:'#fff'}}>SOS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{margin:15}}>
                    <Text style={{fontSize:25}}>🔔</Text>
                    <Text style={{fontSize:15,color:'#fff'}}>Alerts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{margin:15}}>
                    <Text style={{fontSize:25}}>👤</Text>
                    <Text style={{fontSize:15,color:'#fff'}}>Profile</Text>
                </TouchableOpacity>
                

            </View>
        </View>
    )
}

export default Profilee

const styles = StyleSheet.create({
    MainContainer: {},
    Header: {
        flexDirection: 'row'

    },
    SubHeader: {
        gap: 5
    },
    Image: {
        borderWidth: 2,
        height: 60,
        width: 55,
        borderRadius: 50,
        borderColor: '#464242'
    },
    name: {
        marginLeft: 30,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    Email: {
        fontSize: 12,
        fontWeight: '600',
        marginLeft: 30,
        color: '#fff'
    },
    phone: {
        fontSize: 12,
        fontWeight: '600',
        marginLeft: 30,
        color: '#fff'
    },
    Footer: {
        rowGap:5,
        marginTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 600,
        backgroundColor: '#1E293B',
        borderBottomWidth: 1,
        borderBottomColor: '#555b64'
    },
    Card: {
        flexDirection: 'row',
        height: 60,
        width: 390,
        backgroundColor: '#3b475a',
        margin: 10,
        borderRadius: 10
    }
})
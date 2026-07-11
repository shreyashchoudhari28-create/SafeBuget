import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


const Help = () => {
    return (
        <View style={styles.MainContainer}>
            <View style={styles.Header}>
                <TouchableOpacity>
                    <Text style={styles.back}>←</Text>
                </TouchableOpacity>
                <Text style={styles.Heading}>Help & Support</Text>
            </View>
            <View style={styles.Footer}>
                <TouchableOpacity>
                <View style={styles.Card}>
                    <Text style={{ color: '#fff', fontSize: 25, margin: 10 }}>🔍</Text>
                    <View>
                        <Text style={styles.HeadText}> FAQs</Text>
                        <Text style={styles.Discription}>Find Answers to the common qustions</Text>
                    </View>

                </View>
                 </TouchableOpacity>
                  <TouchableOpacity>
                <View style={styles.Card}>
                    <Image style={{height:25,width:25,margin:10}}
                    source={require('./support.png')}
                    />
                    <View>
                        <Text style={styles.HeadText}> Chart with Support</Text>
                        <Text style={styles.Discription}>  We are here to help you</Text>
                    </View>

                </View>
                 </TouchableOpacity>
                 <TouchableOpacity>
                <View style={styles.Card}>
                    <Text style={{ color: '#fff', fontSize: 25, margin: 10 }}>📞</Text>
                    <View>
                        <Text style={styles.HeadText}> Call Us</Text>
                        <Text style={styles.Discription}>+91356054690</Text>
                    </View>

                </View>
                 </TouchableOpacity>
                 <TouchableOpacity>
                <View style={styles.Card}>
                    <Text style={{ color: '#fff', fontSize: 25, margin: 10 }}>✉️</Text>
                    <View>
                        <Text style={styles.HeadText}> Email Us</Text>
                        <Text style={styles.Discription}>support@safebuget.com</Text>
                    </View>

                </View>
                 </TouchableOpacity>
                  <TouchableOpacity>
                <View style={styles.Card}>
                    <Image
                    style={{height:25,width:25,margin:10}}
                    source={require('./history.png')}
                    />
                    <View>
                        <Text style={styles.HeadText}> History</Text>
                        <Text style={styles.Discription}>View Transaction History</Text>
                    </View>

                </View>
                 </TouchableOpacity>
            </View>

        </View>
    )
}

export default Help

const styles = StyleSheet.create({
    MainContainer: {},
    Heading: {
        color: '#fff',
        fontSize: 25,
        marginTop: 10

    },
    back: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    Header: {
        flexDirection: 'row',
        columnGap: 30
    },
    Footer: {
        marginTop:30,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        borderRadius:10,
        height:'90%',
        backgroundColor:'#2a2a2a'
    },
    Card: {
        textAlign:'center',
        borderRadius:10,
        marginTop:30,
        marginLeft:10,
        height:100,
        width:'95%',
        flexDirection: 'row',
        backgroundColor:'#4b4646'
    },
    HeadText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    },
    Discription: {
        marginTop:10,
        color: '#fff'
    }
})
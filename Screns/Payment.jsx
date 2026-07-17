import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Payment = () => {
    const [modalVisible, setModalVisible] = useState(true);

    return (
        <View style={styles.container}>

            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalBackground}>

                    <View style={styles.modalContainer}>

                        {/* Header */}
                        <View style={styles.header}>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Icon name="arrow-back" size={28} color="#fff" />
                            </TouchableOpacity>

                            <Text style={styles.headerText}>
                                Payment Methods
                            </Text>
                        </View>

                        {/* Card */}
                        <View style={styles.card}>

                            {/* UPI */}
                            <TouchableOpacity>
                                <View style={styles.row}>
                                    <View style={styles.left}>
                                        <Image
                                            source={{
                                                uri: 'https://images.picxy.com/cache/2020/11/24/829d6e39bbbac944c77684b4642805aa.jpg',
                                            }}
                                            style={styles.logo}
                                        />

                                        <View>
                                            <Text style={styles.title}>UPI</Text>
                                            <Text style={styles.subtitle}>rahul@upi</Text>
                                        </View>
                                    </View>

                                    <Icon
                                        name="check-circle"
                                        size={35}
                                        color="#00D26A"
                                    />
                                </View>
                            </TouchableOpacity>


                            <View style={styles.line} />

                            {/* Card */}
                            <TouchableOpacity>
                                <View style={styles.row}>
                                    <View style={styles.left}>
                                        <Image
                                            source={{
                                                uri: 'https://img.icons8.com/color/96/bank-card-back-side.png',
                                            }}
                                            style={styles.logo}
                                        />

                                        <View>
                                            <Text style={styles.title}>
                                                Debit / Credit Card
                                            </Text>

                                            <Text style={styles.subtitle}>
                                                •••• •••• •••• 4242
                                            </Text>
                                        </View>
                                    </View>
                                    <Icon
                                        name="keyboard-arrow-right"
                                        size={28}
                                        color="#5A7298"
                                    />
                                </View>
                            </TouchableOpacity>




                            <View style={styles.line} />

                            {/* Paytm */}
                            <TouchableOpacity>
                                <View style={styles.row}>
                                    <View style={styles.left}>
                                        <Image
                                            source={{
                                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKFRiWVnACGmlDhe3rFY-dVvEjmAnpWxtT8CDaGUv-YA&s=10',
                                            }}
                                            style={styles.logo}
                                        />

                                        <View>
                                            <Text style={styles.title}>
                                                Paytm Wallet
                                            </Text>

                                            <Text style={styles.subtitle}>
                                                rahul@paytm
                                            </Text>
                                        </View>
                                    </View>

                                    <Icon
                                        name="keyboard-arrow-right"
                                        size={28}
                                        color="#5A7298"
                                    />
                                </View>

                            </TouchableOpacity>

                            <View style={styles.line} />

                            {/* Add Payment */}
                            <TouchableOpacity style={styles.row}>
                                <View style={styles.left}>

                                    <View style={styles.addBox}>
                                        <Icon
                                            name="add"
                                            size={35}
                                            color="#1E73FF"
                                        />
                                    </View>

                                    <Text style={styles.addText}>
                                        Add Payment Method
                                    </Text>

                                </View>
                            </TouchableOpacity>

                        </View>

                        {/* Bottom */}
                        <View style={styles.bottom}>
                            <Icon
                                name="verified-user"
                                size={20}
                                color="#5A7298"
                            />

                            <Text style={styles.bottomText}>
                                All payments are 100% secure
                            </Text>
                        </View>

                    </View>

                </View>
            </Modal >

        </View >
    );
};

export default Payment;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0B1320',
    },

    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.45)',
        justifyContent: 'flex-end',
    },

    modalContainer: {
        backgroundColor: '#0B1320',
        height: '85%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },

    header: {
        height: 75,
        backgroundColor: '#2464D8',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },

    headerText: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginLeft: 15,
    },

    card: {
        backgroundColor: '#111D30',
        margin: 15,
        borderRadius: 20,
        paddingHorizontal: 20,
    },

    row: {
        height: 95,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    left: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    logo: {
        width: 55,
        height: 55,
        borderRadius: 12,
        marginRight: 15,
        resizeMode: 'contain',
    },

    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '600',
    },

    subtitle: {
        color: '#6F8CB4',
        fontSize: 18,
        marginTop: 5,
    },

    line: {
        borderBottomWidth: 1,
        borderBottomColor: '#243652',
    },

    addBox: {
        width: 55,
        height: 55,
        borderRadius: 12,
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#33507B',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },

    addText: {
        color: '#1E73FF',
        fontSize: 22,
        fontWeight: '600',
    },

    bottom: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    bottomText: {
        color: '#5A7298',
        fontSize: 18,
        marginLeft: 8,
    },
});
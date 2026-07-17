import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Profile = () => {
    const menuItems = [
        { icon: '🧳', label: 'My Trips' },
        { icon: '💚', label: 'Saved Places' },
        { icon: '💳', label: 'Payment Methods' },
        { icon: '⚙️', label: 'Settings' },
        { icon: '❓', label: 'Help & Support' },
        { icon: 'ℹ️', label: 'About Us' },
    ]

    const tabs = [
        { icon: '🏠', label: 'Home' },
        { icon: '🧳', label: 'Trips' },
        { icon: '🚨', label: 'SOS' },
        { icon: '🔔', label: 'Alerts' },
        { icon: '👤', label: 'Profile', active: true },
    ]

    return (
        <View style={styles.MainContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.Header}>
                    <View style={styles.Avatar}>
                        <Text style={styles.AvatarText}>RS</Text>
                    </View>
                    <View style={styles.HeaderInfo}>
                        <Text style={styles.Name}>Rahul Sharma</Text>
                        <Text style={styles.SubInfo}>+91 9876543210</Text>
                        <Text style={styles.SubInfo}>rahul@gmail.com</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.EditIcon}>✎</Text>
                    </TouchableOpacity>
                </View>

                {/* Menu */}
                <View style={styles.Footer}>
                    {menuItems.map((item, index) => (
                        <TouchableOpacity key={index} style={styles.Row}>
                            <View style={styles.RowLeft}>
                                <Text style={styles.RowIcon}>{item.icon}</Text>
                                <Text style={styles.RowLabel}>{item.label}</Text>
                            </View>
                            <Text style={styles.Chevron}>›</Text>
                        </TouchableOpacity>
                    ))}

                    <TouchableOpacity style={styles.LogoutButton}>
                        <Text style={styles.LogoutText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Bottom Tab Bar */}
            <View style={styles.TabBar}>
                {tabs.map((tab, index) => (
                    <TouchableOpacity key={index} style={styles.TabItem}>
                        <Text style={[styles.TabIcon, tab.active && styles.TabActiveText]}>{tab.icon}</Text>
                        <Text style={[styles.TabLabel, tab.active && styles.TabActiveText]}>{tab.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: '#0F172A',
    },
    Header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1E293B',
        padding: 24,
        paddingTop: 40,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    Avatar: {
        height: 64,
        width: 64,
        borderRadius: 32,
        backgroundColor: '#22C55E',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#3B82F6',
    },
    AvatarText: {
        color: '#0F172A',
        fontSize: 22,
        fontWeight: 'bold',
    },
    HeaderInfo: {
        marginLeft: 16,
        flex: 1,
    },
    Name: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    SubInfo: {
        color: '#CBD5E1',
        fontSize: 13,
        marginTop: 2,
    },
    EditIcon: {
        color: '#CBD5E1',
        fontSize: 20,
    },
    Footer: {
        marginTop: 20,
        marginHorizontal: 15,
    },
    Row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#1E293B',
        borderRadius: 15,
        padding: 16,
        marginBottom: 12,
    },
    RowLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 14,
    },
    RowIcon: {
        fontSize: 20,
    },
    RowLabel: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
    },
    Chevron: {
        color: '#64748B',
        fontSize: 22,
    },
    LogoutButton: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 100,
        backgroundColor: '#1E293B',
        borderRadius: 15,
        padding: 16,
        borderWidth: 1,
        borderColor: '#EF4444',
    },
    LogoutText: {
        color: '#EF4444',
        fontSize: 16,
        fontWeight: 'bold',
    },
    TabBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#1E293B',
        paddingVertical: 12,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    TabItem: {
        alignItems: 'center',
        gap: 2,
    },
    TabIcon: {
        fontSize: 18,
    },
    TabLabel: {
        color: '#94A3B8',
        fontSize: 11,
    },
    TabActiveText: {
        color: '#3B82F6',
        fontWeight: 'bold',
    },
})
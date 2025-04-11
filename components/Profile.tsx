import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Profile() {
    return (
        <View style={styles.row}>

            <View style={styles.profile}>

                <Image
                    source={require('../assets/images/image.png')}
                    style={styles.image}
                />


                <View style={styles.logo}>
                    <Image
                        source={require('../assets/images/Share.png')}
                        style={styles.share}
                    />
                    <Image
                        source={require('../assets/images/Cog.png')}
                        style={styles.gear}
                    />
                </View>
            </View>

            <View style={styles.userInfo}>
                <View>
                    <View style={styles.usernameRow}>
                        <Text style={styles.username}>@theo_from_hsr</Text>
                        <Image
                            source={require('../assets/images/Check.png')}
                            style={styles.flag}
                        />
                    </View>
                    <View style={styles.locationRow}>
                        <Image
                            source={require('../assets/images/In.png')}
                            style={styles.flag}
                        />
                        <Text style={styles.location}>INDIA</Text>
                    </View>
                </View>
                <View>
                <TouchableOpacity style={styles.editProfileButton}>
                    <Text style={styles.editProfileText}>EDIT PROFILE</Text>
                    <Ionicons name="pencil-outline" size={16} color="white" style={styles.editProfileIcon} />
                </TouchableOpacity>
                </View>

            </View>



            <View style={styles.followingContainer}>
                <Text style={styles.bio}>18 y/o with high ambitions. want to build cool stuff!</Text>
                <View style={styles.followingItem}>
                <Image
                            source={require('../assets/images/User.png')}
                            style={styles.flag}
                        />
                    <Text style={styles.followingCount}>2</Text>
                   
                </View>
                <Text style={styles.followingLabel}>FOLLOWING</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    row: {
        width: 390,
        height: 366.6,
        position: 'absolute',
        left: 0,
        top: 20,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    image: {
        width: 96,
        height: 96,
        borderRadius: 12,
        borderWidth: 5,
        borderColor: 'rgba(239, 216, 76, 1)',
    },
    logo: {
        flexDirection: 'row',
        gap: 16,
    },
    share: {
        width: 24,
        height: 24,
    },
    gear: {
        width: 24,
        height: 24,
    },
    userInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    usernameRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    username: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 5,
        paddingTop: 12,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    flag: {
        width: 20,
        height: 15,
        marginRight: 5,
    },
    location: {
        color: 'white',
        fontSize: 14,
    },
    bio: {
        color: 'rgba(163, 163, 163, 1)',
        fontSize: 16,
        position: 'absolute',
        left: 0,
        top:20,

        
    },
    editProfileButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(163, 163, 163, 1)',
        paddingVertical: 10,
        marginHorizontal: 20,
        marginBottom: 20,
        zIndex: 1, // Ensure button is above background
    },
    editProfileText: {
        color: 'rgba(163, 163, 163, 1)',
        fontWeight: 'bold',
        marginRight: 5,
        borderBottomWidth: 3,
        borderStyle: 'dashed',
        borderColor: 'rgba(163, 163, 163, 1)',
    },
    editProfileIcon: {
        marginLeft: 5,
    },
    followingContainer: {
        flexDirection: 'column',
        paddingHorizontal: 20,
        marginBottom: 20,
        zIndex: 1,
        
    },
    followingItem: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        top: 90,
        left: 0,
        
    },
    followingCount: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        
    },
    followingLabel: {
        color: 'gray',
        fontSize: 14,
        position: 'absolute',
        top: 110,
        left: 0,
    },
    content: {
        paddingHorizontal: 20,
        zIndex: 1, // Ensure content is above background
    },
});


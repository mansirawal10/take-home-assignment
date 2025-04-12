import { View, Image, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {height, width} = Dimensions.get("window");

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
                            style={styles.check}
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
        width: wp(100),
        height: hp(10),
        position: 'absolute',
        left: 0,
        top: 20,

    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 25,
        width: wp(100),
        height: hp(60),
    },
    image: {
        marginTop: 0,
    },
    logo: {
        flexDirection: 'row',
        padding: 15,
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
        position: 'absolute',
        left: 30,
        top:150,
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
    check: {
        paddingTop: 15,
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
        paddingVertical: 20,
        marginHorizontal: 20,
        marginBottom: 20,
        zIndex: 1, // Ensure button is above background
    },
    editProfileText: {
        color: 'rgba(163, 163, 163, 1)',
        fontWeight: 'bold',
        marginLeft: 50,
        borderBottomWidth: 3,
        borderStyle: 'dashed',
        borderColor: 'rgba(163, 163, 163, 1)',
    },
    editProfileIcon: {
        marginLeft: 10,
        color:'rgba(163, 163, 163, 1)',
    },
    followingContainer: {
        position: 'absolute',
        left: 30,
        top: 220,
        flexDirection: 'column',
        paddingHorizontal: 20,
        marginBottom: 20,
        zIndex: 1,
        width: wp(100), 
        
    },
    followingItem: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        top: 60,
        left: 0,
        
    },
    followingCount: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        
    },
    followingLabel: {
        color: 'gray',
        fontSize: 14,
        position: 'absolute',
        top: 90,
        left: 0,
    },
    content: {
        paddingHorizontal: 20,
        zIndex: 1, // Ensure content is above background
    },
});


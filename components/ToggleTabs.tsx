import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, Animated } from 'react-native';
import Collection from './CollectionTab';
import ManageTags from './ManagesTab';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { height, width } = Dimensions.get('window');

export default function ToggleTabs() {
  const [activeTab, setActiveTab] = useState('collections');

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {/* Collections Tab */}
        <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('collections')}>
          <Image
            source={require('../assets/images/coll.png')}
            style={[
              styles.icon,
              { tintColor: activeTab === 'collections' ? '#00FFD1' : '#666' },
            ]}
          />
          <Text style={[styles.tabText, { color: activeTab === 'collections' ? '#00FFD1' : '#999' }]}>
            COLLECTIONS
          </Text>
          {activeTab === 'collections' && <View style={styles.activeLine} />}
        </TouchableOpacity>

        {/* Manage Tags Tab */}
        <TouchableOpacity style={styles.tab} onPress={() => setActiveTab('tags')}>
          <Image
            source={require('../assets/images/icon2.png')}
            style={[
              styles.icon,
              { tintColor: activeTab === 'tags' ? '#00FFD1' : '#666' },
            ]}
          />
          <Text style={[styles.tabText, { color: activeTab === 'tags' ? '#00FFD1' : '#999' }]}>
            MANAGE TAGS
          </Text>
          {activeTab === 'tags' && <View style={styles.activeLine} />}
        </TouchableOpacity>
      </View>

      {/* Render Tab Content */}
      <View style={styles.contentArea}>
        {activeTab === 'collections' ? <Collection /> : <ManageTags />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp(100),
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#111',
    paddingVertical: 20,
    borderBottomColor: '#444',
    borderBottomWidth: 2,
  },
  tab: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
    position: 'relative',
    paddingBottom: 6,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  tabText: {
    fontSize: 18,
    fontWeight: '600',
  },
  activeLine: {
    position: 'absolute',
    bottom: 0,
    height: 2,
    backgroundColor: '#00FFD1',
    width: '100%',
  },
  contentArea: {
    backgroundColor: '#101216',
    paddingVertical: 25,
  },
});

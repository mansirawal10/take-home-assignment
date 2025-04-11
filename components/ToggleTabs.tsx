import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Collection from './CollectionTab';
import ManageTags from './ManagesTab';
export default function ToggleTabs() {
  const [activeTab, setActiveTab] = useState('collections');

  return (
    <View style={styles.tabContainer}>
      {/* Collections Tab */}
      <TouchableOpacity
        style={styles.tab}
        onPress={() => {
          setActiveTab('collections');
        }}
      >
        <Image
        source={require('../assets/images/coll.png')} 
        style={[
          styles.coll,
          { tintColor: activeTab === 'collections' ? '#00FFD1' : '#666' },
        ]}
         />
        <Text
          style={[
            styles.tabText,
            { color: activeTab === 'collections' ? '#00FFD1' : '#999' },
          ]}
        >
          COLLECTIONS
        </Text>
        {activeTab === 'collections' && <View style={styles.activeLine} />}
      </TouchableOpacity>

      {/* Manage Tags Tab */}
      <TouchableOpacity
        style={styles.tab}
        onPress={() => {
          setActiveTab('tags');
        }}
      >
         <Image
        source={require('../assets/images/icon2.png')} 
        style={[
          styles.man,
          { tintColor: activeTab === 'tags' ? '#00FFD1' : '#666' },
        ]}
         />
        <Text
          style={[
            styles.tabText,
            { color: activeTab === 'tags' ? '#00FFD1' : '#999' },
          ]}
        >
          MANAGE TAGS
        </Text>
        {activeTab === 'tags' && <View style={styles.activeLine} />}
      </TouchableOpacity>
       {/* Content */}
     {activeTab === 'collections' ? <Collection /> : <ManageTags />}
     </View>
   );
 }
  







const styles = StyleSheet.create({
  tabContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(11, 11, 11, 1)',
    paddingVertical: 3,
    paddingHorizontal: 2,
    borderBottomWidth: 3,
    borderBottomColor: 'rgba(64, 64, 64, 1)',
    width: 400,
    height: 54.6,
    position: 'absolute',
    top: 350,
  },
  tab: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    gap: 5,
  },
  tabText: {
    fontSize: 12,
    marginTop: 2,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  activeLine: {
    height: 2,
    backgroundColor: '#00FFD1',
    width: '80%',
    position: 'absolute',
    bottom: 0,
  },
  man:{

  },
  coll:{
    
  },
  
});


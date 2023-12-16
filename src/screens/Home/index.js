import React, {useState} from 'react';
import {
  View,
  StatusBar,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {SearchNormal1} from 'iconsax-react-native';
import {Iklan, DataProduct} from '../../../data';
import {fontType} from '../../theme';
import {Product} from '../../components';

export default Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image style={styles.logoHeader} source={require('../Home/logo.png')} />
      <View style={styles.searchContainer}>
        <View style={styles.searchContainer2}>
          <SearchNormal1
            variant="Linear"
            color="#D9D9D9"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.search}
            placeholder="Search"
            placeholderTextColor={'#D9D9D9'}
          />
        </View>
      </View>
      <View>
        <XtProduct />
      </View>
    </View>
  );
};

const XtProduct = () => {
  return (
    <ScrollView style={{backgroundColor:'#000000'}}>
      <Product data={Iklan} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerProduct: {
    marginLeft: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    // paddingLeft : 16,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 136,
    backgroundColor: 'white',
  },
  logoHeader: {
    height: 90,
    resizeMode: 'contain',
    position: 'absolute',
    alignSelf: 'center',
    top: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    height: 52,
    elevation: 3,
    marginHorizontal: 14,
    borderRadius: 20,
    marginTop: -28,
    backgroundColor: '#fafaf5',
  },
  searchContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    marginHorizontal: 8,
    color: '#674D7A',
  },
  fiturContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 80,
    marginHorizontal: 14,
  },
  fiturContainer2: {
    marginTop: 32,
    alignItems: 'center',
  },
  fiturText: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 10,
    color: '#0d0d0c',
  },
  iklanContainer: {
    marginTop: 16,
    height: 232,
  },
  iklanImage: {
    marginTop: 16,
    borderRadius: 15,
    height: 212,
    marginHorizontal: 8,
    resizeMode: 'contain',
  },
  recContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 212,
    marginHorizontal: 8,
    padding: 2,
  },
  recHeader: {
    marginLeft: 8,
    marginTop: 16,
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#674D7A',
  },
  recContainer2: {
    height: 200,
    width: 230,
    // flexDirection :'row',
  },
  recImage: {
    height: 168,
    width: 168,
    borderRadius: 8,
  },
  recDesk: {
    marginTop: 4,
    fontSize: 10,
    fontWeight: '500',
    color: 'black',
  },
  recPrice: {
    fontSize: 10,
    fontWeight: '400',
    color: 'black',
  },
  recommend: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#788888',
    width: 204,
    flexWrap: 'wrap',
  },
  rekomendasi: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});

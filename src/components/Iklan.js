import React, {useState} from 'react';
import {Iklan, DataProduct} from '../../data';
import {Text, StyleSheet, FlatList, View, TouchableOpacity} from 'react-native';
import {Image} from 'react-native';

const ItemProduct = ({item}) => {
  return (
    <TouchableOpacity>
      <View style={{marginVertical:10}}>
        <Image
          style={styles.iklanImage}
          resizeMode="cover"
          source={item.image}
        />
      </View>
    </TouchableOpacity>
  );
};
const Product = ({data}) => {
  const [bookmark, setBookmark] = useState([]);
  const toggleBookmark = itemId => {
    if (bookmark.includes(itemId)) {
      setBookmark(bookmark.filter(id => id !== itemId));
    } else {
      setBookmark([...bookmark, itemId]);
    }
  };
  const renderItem = ({item}) => {
    variant = bookmark.includes(item.id) ? 'Bold' : 'Linear';
    return (
      <ItemProduct
        item={item}
        variant={variant}
        onPress={() => toggleBookmark(item.id)}
      />
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 15}} />}
      contentContainerStyle={{paddingHorizontal: 24}}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
export default Product;

const styles = StyleSheet.create({
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
    borderRadius: 10,
    marginTop: -28,
    backgroundColor: '#F0F0FF',
  },

  searchContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  search: {
    marginHorizontal: 8,
    color: '#999999',
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
    fontSize: 10,
    color: '#674D7A',
  },
  iklanImage: {
    height: 212,
    width: 300,
    resizeMode: 'cover',
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
    marginRight: 20,
    height: 200,
  },
  recImage: {
    height: 200,
    width: 200,
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
});

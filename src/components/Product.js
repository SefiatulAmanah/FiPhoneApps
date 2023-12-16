import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import {Receipt21, Clock, Message} from 'iconsax-react-native';
import React,{useState} from 'react';
import {fontType, colors} from '../theme';

const ItemProduct = ({item}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={item.image} resizeMode="cover" />
      <View style={styles.cardContent}>
        <Text>cdcdwcw</Text>
      </View>
    </View>
  );
};
const ListProduct = ({data}) => {
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
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
export default ListProduct;

const styles = StyleSheet.create({
  card: {
    paddingVertical:10,
    width: 150,
    height: 200,
    borderRadius:10,
  },
  cardItem: {
    // backgroundColor: colors.blue(0.03),
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    // color: colors.blue(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    // color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    // color: colors.grey(0.6),
  },
  cardImage: {
    width: 150,
    height: 110,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});

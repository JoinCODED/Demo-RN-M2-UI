import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ListItem = () => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.container}>
          <Image
            source={{ uri: 'https://picsum.photos/200/300' }}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.title}>Title</Text>
          <Text
            style={{
              marginTop: 4,
              color: 'gray',
              fontSize: 12,
            }}
          >
            Description
          </Text>
        </View>
      </View>
      <View style={styles.badge}>
        <Text style={{ color: '#fff' }}>0</Text>
      </View>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  card: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 14,
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 16,
    marginRight: 16,
  },
  container: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    borderColor: '#eee',
    borderWidth: 1,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: 25,
    height: 50,
    width: 50,
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  badge: {
    height: 25,
    backgroundColor: 'teal',
    borderWidth: 0,
    width: 25,
    marginLeft: -26,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  title: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});

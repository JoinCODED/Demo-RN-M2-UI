import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { HStack, Box, Divider, Avatar, VStack, Text, Badge } from 'native-base';

const ListItemNativeBase = () => {
  return (
    <Box marginX={6} borderRadius="sm" style={{ elevation: 1 }}>
      <HStack>
        <Box px="4" py="4">
          <Avatar
            source={{
              uri: 'https://picsum.photos/200/300',
            }}
          />
        </Box>
        <HStack justifyContent="space-between" width="72%" alignItems="center">
          <VStack py="4">
            <Text fontSize="sm" bold>
              Title
            </Text>
            <Text fontSize="xs" color={'gray.500'}>
              Description
            </Text>
          </VStack>
          <Badge
            colorScheme="teal"
            rounded="full"
            variant="solid"
            _text={{
              fontSize: 15,
            }}
          >
            0
          </Badge>
        </HStack>
      </HStack>
    </Box>
  );
};

export default ListItemNativeBase;

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

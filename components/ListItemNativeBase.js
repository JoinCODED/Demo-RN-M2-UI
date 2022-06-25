import React from 'react';
import { HStack, Box, Avatar, VStack, Text, Badge } from 'native-base';

const ListItemNativeBase = () => {
  return (
    <Box
      marginX={6}
      borderRadius="md"
      style={{
        elevation: 1,
      }}
    >
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

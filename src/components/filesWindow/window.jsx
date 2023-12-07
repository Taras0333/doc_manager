import { Flex, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { WHITE } from '../../styles/colors/consts';

const Window = () => {
  const file = useSelector(state => state.files.chosen);
  if (!file) return;
  return (
    <Flex width="100%" p="20px" flexDirection="column">
      <Flex justifyContent="center" h="50px">
        <Text color={WHITE} as="h1" fontSize={30}>
          {file.name}
        </Text>
      </Flex>
      <Flex h="100%" bg={WHITE} borderRadius="12px" p="20px">
        <Text>{file.content}</Text>
      </Flex>
    </Flex>
  );
};

export default Window;

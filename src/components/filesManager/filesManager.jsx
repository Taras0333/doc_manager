import { Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import AddFoldersFiles from './addFoldersFiles/addFoldersFiles';
import ItemNode from './itemNode';

const FilesManager = () => {
  const tree = useSelector(state => state.files.files);

  return (
    <Flex maxWidth="30%" minWidth="300px" flexDirection="column">
      <AddFoldersFiles tree={tree} />
      <Flex flexDirection="column" overflowY="scroll" mt="5px" p="10px">
        <ItemNode tree={tree} />
      </Flex>
    </Flex>
  );
};

export default FilesManager;

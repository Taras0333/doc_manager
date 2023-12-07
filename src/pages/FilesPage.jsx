import { Flex } from '@chakra-ui/react';
import FilesManager from '../components/filesManager/filesManager';
import { GREEN } from '../styles/colors/consts';
import Window from '../components/filesWindow/window';

const FilesPage = () => {
  return (
    <Flex bg={GREEN} w="100%" borderRadius="12px" p="20px">
      <FilesManager />
      <Window />
    </Flex>
  );
};

export default FilesPage;

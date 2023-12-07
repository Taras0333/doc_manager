import { Image, Flex } from '@chakra-ui/react';
import addFile from '../../../assets/icons/addFile.svg';
import addFolder from '../../../assets/icons/addFolder.svg';

const AddButtons = ({ setType, onToggle, size }) => {
  return (
    <Flex ml="auto" gap={3} alignItems="center">
      <Image
        onClick={e => {
          e.stopPropagation();
          setType('file');
          onToggle();
        }}
        src={addFile}
        boxSize={size}
        cursor="pointer"
      />
      <Image
        onClick={e => {
          e.stopPropagation();
          setType('folder');
          onToggle();
        }}
        src={addFolder}
        boxSize={size}
        cursor="pointer"
      />
    </Flex>
  );
};

export default AddButtons;

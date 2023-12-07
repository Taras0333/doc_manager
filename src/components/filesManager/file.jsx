import { Flex, Text, Image } from '@chakra-ui/react';
import { GRAY } from '../../styles/colors/consts';
import fileIcon from '../../assets/icons/file.svg';
import binIcon from '../../assets/icons/bin.svg';
import { useDeleteNewFolderFile } from '../../hooks/deleteFolderFile';
import { WHITE } from '../../styles/colors/consts';
import { useDispatch } from 'react-redux';
import { setChosenFile } from '../../state/filesSlice';

const File = ({ name, id }) => {
  const deleteFolderFile = useDeleteNewFolderFile();
  const dispatch = useDispatch();
  return (
    <Flex
      cursor="pointer"
      ml={3}
      bg={GRAY}
      p="10px"
      borderRadius="10px"
      mt="10px"
      alignItems="center"
      gap={2}
      color={WHITE}
      onClick={() => dispatch(setChosenFile({ id }))}
    >
      <Image src={fileIcon} alt="file icon" boxSize={3} />
      <Text>{name}</Text>
      <Image
        ml="auto"
        onClick={() => deleteFolderFile(id)}
        src={binIcon}
        boxSize={3}
        cursor="pointer"
      />
    </Flex>
  );
};

export default File;

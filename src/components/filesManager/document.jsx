import { Collapse, Flex, Text, Image } from '@chakra-ui/react';
import { useHandleInputData } from '../../hooks/handleInputData';
import { BLACK } from '../../styles/colors/consts';
import docIcon from '../../assets/icons/folder.svg';
import Arrow from './arrow';
import ItemNode from './itemNode';
import AddButtons from './addFoldersFiles/addButtons';
import binIcon from '../../assets/icons/bin.svg';
import AddModal from './addFoldersFiles/addModal';
import { handleAdd } from '../../utilities/utils';
import { useConstructeNewFolderFile } from '../../hooks/constructeNewFolderFile';
import { useDeleteNewFolderFile } from '../../hooks/deleteFolderFile';
import { useMultipleDisclosures } from '../../hooks/disclosure';
import { WHITE } from '../../styles/colors/consts';

const Document = ({ name, children, id }) => {
  const {
    firstIsOpen,
    firstToggle,
    secondIsOpen,
    secondToggle,
    secondOnClose,
  } = useMultipleDisclosures();
  const { nameRef, contentRef, type, setType, error, setError } =
    useHandleInputData();
  const constructeFolderFile = useConstructeNewFolderFile();
  const deleteFolderFile = useDeleteNewFolderFile();
  const hasChildren = !!children?.length;

  return (
    <Flex cursor="pointer" flexDirection="column" ml={3} color={WHITE}>
      <Flex
        onClick={firstToggle}
        bg={BLACK}
        p="10px"
        borderRadius="10px"
        mt="10px"
        alignItems="center"
        gap={2}
      >
        <Image src={docIcon} alt="document icon" boxSize={3} />
        <Text alt="gh">{name}</Text>
        <AddButtons setType={setType} onToggle={secondToggle} size={3} />
        <Image
          onClick={() => deleteFolderFile(id)}
          src={binIcon}
          boxSize={3}
          cursor="pointer"
        />
        {hasChildren && <Arrow isOpen={firstIsOpen} margin="0px" />}
      </Flex>
      {hasChildren && (
        <Collapse in={firstIsOpen}>
          <ItemNode tree={children} />
        </Collapse>
      )}
      <AddModal
        isOpen={secondIsOpen}
        onClose={secondOnClose}
        type={type}
        add={() =>
          handleAdd({
            nameRef,
            contentRef,
            setError,
            constructeFolderFile,
            onClose: secondOnClose,
            tree: children,
            type,
            id,
          })
        }
        nameRef={nameRef}
        contentRef={contentRef}
        error={error}
      />
    </Flex>
  );
};

export default Document;

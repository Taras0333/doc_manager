import { Flex, Image } from '@chakra-ui/react';
import { useConstructeNewFolderFile } from '../../../hooks/constructeNewFolderFile';
import { useHandleInputData } from '../../../hooks/handleInputData';
import AddButtons from './addButtons';
import AddModal from './addModal';
import searchIcon from '../../../assets/icons/search.svg';
import { handleAdd } from '../../../utilities/utils';
import SearchModal from '../searchFoldersFiles/searchModal';
import { useMultipleDisclosures } from '../../../hooks/disclosure';
import { useSearchFolderFile } from '../../../hooks/searchDocuments';
import { handleSearch } from '../../../utilities/utils';
import { useDispatch } from 'react-redux';
import { resetSearchField } from '../../../state/filesSlice';

const AddFoldersFiles = ({ tree }) => {
  const dispatch = useDispatch();
  const { nameRef, contentRef, type, setType, error, setError } =
    useHandleInputData();
  const { nameRef: searchRef } = useHandleInputData();
  const searchDocument = useSearchFolderFile();
  const constructeFolderFile = useConstructeNewFolderFile();
  const {
    firstIsOpen,
    firstToggle,
    firstOnClose,
    secondIsOpen,
    secondToggle,
    secondOnClose,
  } = useMultipleDisclosures();

  return (
    <Flex ml={3} justifyContent="flex-end" gap={3} p="0px 10px">
      <AddButtons setType={setType} onToggle={firstToggle} size={4} />
      <Image
        src={searchIcon}
        alt="search icon"
        boxSize={4}
        cursor="pointer"
        onClick={() => secondToggle()}
      />
      <AddModal
        isOpen={firstIsOpen}
        onClose={firstOnClose}
        type={type}
        add={() =>
          handleAdd({
            nameRef,
            contentRef,
            setError,
            constructeFolderFile,
            onClose: firstOnClose,
            tree,
            type,
          })
        }
        nameRef={nameRef}
        contentRef={contentRef}
        error={error}
      />
      <SearchModal
        searchRef={searchRef}
        isOpen={secondIsOpen}
        onClose={() => {
          secondOnClose();
          searchRef.current.value = '';
          dispatch(resetSearchField());
        }}
        search={() =>
          handleSearch({
            nameRef: searchRef,
            search: searchDocument,
          })
        }
      />
    </Flex>
  );
};

export default AddFoldersFiles;

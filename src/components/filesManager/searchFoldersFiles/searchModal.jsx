import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Flex,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import ItemNode from '../itemNode';

const SearchModal = ({ isOpen, onClose, searchRef, search }) => {
  const searchResults = useSelector(state => state.files.search);
  const areResults = !!searchResults.length;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxH="350px" h="350px" p="20px">
        <ModalHeader>
          <Input
            ref={searchRef}
            placeholder="Type document name"
            mb="10px"
            onChange={() => search({ name: searchRef })}
          />
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody overflowY="scroll">
          <Flex flexDirection="column">
            {areResults && <ItemNode tree={searchResults} />}
          </Flex>
        </ModalBody>

        <ModalFooter p="5px">
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal;

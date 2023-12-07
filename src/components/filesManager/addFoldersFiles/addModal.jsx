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
  Textarea,
  Text,
} from '@chakra-ui/react';

const AddModal = ({
  isOpen,
  onClose,
  type,
  add,
  nameRef,
  contentRef,
  error,
}) => {
  const isFile = type === 'file';

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader display="flex" justifyContent="center">
          Add new {type}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input ref={nameRef} placeholder="Folder name" />
          {error && (
            <Text color="red" mt="5px">
              {error}
            </Text>
          )}
          {isFile && (
            <Textarea
              h="350px"
              ref={contentRef}
              placeholder="File content"
              mt="10px"
            />
          )}
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {
              add();
            }}
          >
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddModal;

import { useDisclosure } from '@chakra-ui/react';

export const useMultipleDisclosures = () => {
  const {
    isOpen: firstIsOpen,
    onToggle: firstToggle,
    onClose: firstOnClose,
  } = useDisclosure();
  const {
    isOpen: secondIsOpen,
    onToggle: secondToggle,
    onClose: secondOnClose,
  } = useDisclosure();

  return {
    firstIsOpen,
    firstToggle,
    firstOnClose,
    secondIsOpen,
    secondToggle,
    secondOnClose,
  };
};

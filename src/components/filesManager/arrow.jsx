import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const Arrow = ({ isOpen, margin }) => {
  return !isOpen ? (
    <ChevronDownIcon ml={margin} />
  ) : (
    <ChevronUpIcon ml={margin} />
  );
};

export default Arrow;

import { useRef, useState } from 'react';

export const useHandleInputData = () => {
  const nameRef = useRef(null);
  const contentRef = useRef(null);
  const [type, setType] = useState('');
  const [error, setError] = useState('');

  return { nameRef, contentRef, type, setType, error, setError };
};

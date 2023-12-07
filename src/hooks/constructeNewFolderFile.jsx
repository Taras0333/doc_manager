import { useDispatch } from 'react-redux';
import { addNewFolderFile } from '../state/filesSlice';
import { constructNewFolderFile } from '../utilities/utils';

export const useConstructeNewFolderFile = () => {
  const dispatch = useDispatch();

  return ({ name, type, content, id }) => {
    dispatch(
      addNewFolderFile({
        obj: constructNewFolderFile({ name, type, content }),
        id,
      })
    );
  };
};

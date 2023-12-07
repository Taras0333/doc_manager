import { useDispatch } from 'react-redux';
import { deleteFolderFile } from '../state/filesSlice';

export const useDeleteNewFolderFile = () => {
  const dispatch = useDispatch();

  return id => {
    dispatch(deleteFolderFile({ id }));
  };
};

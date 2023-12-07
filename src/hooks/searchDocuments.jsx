import { useDispatch } from 'react-redux';
import { searchFolderFile } from '../state/filesSlice';

export const useSearchFolderFile = () => {
  const dispatch = useDispatch();

  return ({ name }) => {
    dispatch(
      searchFolderFile({
        name,
      })
    );
  };
};

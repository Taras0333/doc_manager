import { screen, render, fireEvent } from '@testing-library/react';
import SearchModal from '../../searchFoldersFiles/searchModal';
import store from '../../../../state/store';
import { Provider } from 'react-redux';
import { useRef } from 'react';
import { handleSearch } from '../../../../utilities/utils';
import { useSearchFolderFile } from '../../../../hooks/searchDocuments';

const MokSearchModal = () => {
  const ref = useRef();
  const searchDocument = useSearchFolderFile();
  return (
    <Provider store={store}>
      <SearchModal
        isOpen={true}
        onClose={jest.fn()}
        searchRef={ref}
        search={() =>
          handleSearch({
            nameRef: ref,
            search: searchDocument,
          })
        }
      />
    </Provider>
  );
};

describe('testing search functionality', () => {
  it('renders search input', () => {
    render(<MokSearchModal />);
    const inputElement = screen.getByPlaceholderText(/Type document name/i);
    expect(inputElement).toBeInTheDocument();
  });
  it('search result renders to the list', () => {
    render(<MokSearchModal />);
    const inputElement = screen.getByPlaceholderText(/Type document name/i);
    fireEvent.change(inputElement, { target: { value: 'header' } });
    const documentElement = screen.getByText(/header/i);
    expect(documentElement).toBeInTheDocument();
  });
});

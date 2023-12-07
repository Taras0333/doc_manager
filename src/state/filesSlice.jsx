import { createSlice } from '@reduxjs/toolkit';
import initialState from '../data/initialState.json';
import { findObjById, filterObjByName } from '../utilities/utils';

const fileSlice = createSlice({
  name: 'files',
  initialState: {
    ...initialState,
    searchName: '',
    search: [],
    chosen: null,
  },
  reducers: {
    addNewFolderFile: (state, { payload }) => {
      const { id } = payload;
      const childArr =
        findObjById({ arr: state.files, id, conditionCb: (a, b) => a.id === b })
          ?.children || state.files;
      childArr.push(payload.obj);
    },
    deleteFolderFile: (state, { payload }) => {
      const { id } = payload;
      const perantObj = findObjById({
        arr: state.files,
        id,
        conditionCb: (a, b) =>
          Boolean(a.children && a.children.find(el => el.id === b)),
      });
      const objToDelete = findObjById({
        arr: state.files,
        id,
        conditionCb: (a, b) => a.id === b,
      });
      let objIndex;
      if (perantObj) {
        objIndex = perantObj.children.indexOf(objToDelete);
        perantObj.children.splice(objIndex, 1);
      } else {
        objIndex = state.files.indexOf(objToDelete);
        state.files.splice(objIndex, 1);
      }
      fileSlice.caseReducers.deleteFromSearchField(state);
    },

    searchFolderFile: (state, { payload }) => {
      const { name } = payload;
      state.searchName = name;
      if (!name) {
        state.search = [];
      } else {
        const searchArr = filterObjByName({ arr: state.files, name });

        state.search = searchArr;
      }
    },
    resetSearchField: state => {
      state.search = [];
    },
    deleteFromSearchField: state => {
      const name = state.searchName;
      fileSlice.caseReducers.resetSearchField(state);
      fileSlice.caseReducers.searchFolderFile(state, {
        payload: { name },
      });
    },

    setChosenFile: (state, { payload }) => {
      const { id } = payload;
      const chosen = findObjById({
        arr: state.files,
        id,
        conditionCb: (a, b) => a.id === b,
      });
      state.chosen = chosen;
    },
  },
});

export const {
  addNewFolderFile,
  deleteFolderFile,
  searchFolderFile,
  resetSearchField,
  setChosenFile,
} = fileSlice.actions;

export default fileSlice.reducer;

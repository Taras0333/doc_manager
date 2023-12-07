import { v4 as uuid } from 'uuid';

export const generateId = () => {
  return uuid();
};

export const constructNewFolderFile = ({ name, type, content }) => {
  if (type === 'file') {
    return {
      id: generateId(),
      name,
      type,
      content,
      date: new Date().toLocaleDateString(),
    };
  }
  return {
    id: generateId(),
    name,
    type,
    children: [],
    date: new Date().toLocaleDateString(),
  };
};

export const checkNaming = (arr, newName) =>
  arr.some(el => el.name === newName);

export const handleAdd = ({
  nameRef,
  contentRef,
  setError,
  constructeFolderFile,
  onClose,
  tree,
  type,
  id,
}) => {
  const name = nameRef.current.value;
  const content = contentRef.current?.value;
  if (name) {
    const exist = checkNaming(tree, name);
    if (exist) {
      setError('the document already exist, please enter another name');
    } else {
      constructeFolderFile({ name, type, content, id });
      onClose();
      setError('');
    }
  }
};
export const handleSearch = ({ nameRef, search }) => {
  const name = nameRef.current.value;

  search({ name });
};

export const findObjById = ({ arr, id, conditionCb }) => {
  let result;
  const find = (arr, id) => {
    for (let i = 0; i < arr.length; i++) {
      const el = arr[i];
      if (conditionCb(el, id)) {
        result = el;
      }
      if (result) {
        break;
      }
      if (el.children) {
        find(el.children, id);
      }
    }
    return result;
  };
  return find(arr, id);
};
export const filterObjByName = ({ arr, name }) => {
  let result = [];
  const filter = ({ arr, name }) => {
    const nameModified = name.toLowerCase();
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      const elementName = element.name.toLowerCase();
      if (elementName.includes(nameModified)) {
        result.push(element);
      }
      if (element.children) {
        filter({ arr: element.children, name });
      }
    }
    return result;
  };
  return filter({ arr, name });
};

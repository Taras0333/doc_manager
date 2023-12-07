import Document from './document';
import File from './file';

const ItemNode = ({ tree }) => {
  if (!tree.length) return;
  return tree.map(({ name, type, children, id }) => {
    if (type === 'folder') {
      return <Document name={name} children={children} key={id} id={id} />;
    } else {
      return <File key={id} name={name} id={id} />;
    }
  });
};

export default ItemNode;

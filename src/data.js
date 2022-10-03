import { v4 as uuid } from 'uuid';

export default [
  {
    id: 1,
    name: 'Palm',
  },
  {
    id: 2,
    name: 'Deedee',
  },
  {
    id: 3,
    name: 'Barbra',
  },
 
].map(({ id, name }) => {
  return {
    id: uuid(),
    name,
  };
});

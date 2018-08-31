import unidecode from 'unidecode';

export const onSearch = (data, keySearch) => {
  return (
    data &&
    unidecode(data)
      .toLowerCase()
      .search(unidecode(keySearch).toLowerCase()) !== -1
  );
};

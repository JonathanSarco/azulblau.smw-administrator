

const convertTitleToLowerAndSnakeCase = (title) => {
  const strArr = title.split(' ');
  const snakeArr = strArr.reduce((acc, val) => {
     return acc.concat(val.toLowerCase());
  }, []);
  return snakeArr.join('_');
}

const getExtensionFromFileName = (fileName) => {
  return fileName.split('.').pop();
}

export { convertTitleToLowerAndSnakeCase, getExtensionFromFileName }
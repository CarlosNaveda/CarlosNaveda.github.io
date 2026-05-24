function getUniqueArray(array: string[]): string[] {
  const uniqueArray: string[] = [];
  array.forEach((element) => {
    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  });
  return uniqueArray;

}

export default getUniqueArray;
export const sortByDate = array =>
  array.sort(
    (element, nextElement) => new Date(nextElement.createdAt) - new Date(element.createdAt)
  );

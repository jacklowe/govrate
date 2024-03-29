export default function(data, pageNum, pageLength) {
  const maxPageLength = Math.ceil(data.length / pageLength);

  const startIndex = (pageNum - 1) * pageLength;
  const endIndex = Math.min(startIndex + pageLength, data.length);

  if (pageNum < 1 || pageNum > maxPageLength) {
    return [];
  }

  const page = [];
  for (let i = startIndex; i < endIndex; i++) {
    page.push(data[i]);
  }
  
  return page;
}

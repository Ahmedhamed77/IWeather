export const formatDate = (date: number) => {
  const formattedDate = new Date(date * 1000).toLocaleDateString('en-US', {
    day: 'numeric',
    year: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  return formattedDate;
};

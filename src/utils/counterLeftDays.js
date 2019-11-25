export default (ev) => {
  const copyEv = { ...ev };
  const [date, month, year] = copyEv.date.split('-');
  copyEv.date = `${year}, ${month}, ${date}`;

  const today = new Date().getTime();
  const eventDate = new Date(`${copyEv.date} ${copyEv.time}`).getTime();
  const diff = eventDate - today;
  return diff;
};

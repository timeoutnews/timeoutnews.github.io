const CurrentDay = () => {
  const month = new Array();
  month[0] = "Jan";
  month[1] = "Feb";
  month[2] = "Mar";
  month[3] = "Apr";
  month[4] = "May";
  month[5] = "Jun";
  month[6] = "Jul";
  month[7] = "Aug";
  month[8] = "Sept";
  month[9] = "Oct";
  month[10] = "Nov";
  month[11] = "Dec";

  let today = new Date();
  let dd = today.getDate();
  let mm = month[today.getMonth()];
  let yyyy = today.getFullYear();

  today = `${mm} ${dd}, ${yyyy}`;

  return today;
};

export default CurrentDay;

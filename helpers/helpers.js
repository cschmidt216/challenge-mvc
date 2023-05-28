function format_date(date) {
    const formattedDate = new Date(date);
    const month = formattedDate.getMonth() + 1;
    const day = formattedDate.getDate();
    const year = formattedDate.getFullYear();
  
    return `${month}/${day}/${year}`;
  }
  
  function format_plural(word, amount) {
    if (amount !== 1) {
      return `${word}s`;
    }
  
    return word;
  }
  
  module.exports = {
    format_date,
    format_plural
  };
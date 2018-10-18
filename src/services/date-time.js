function getFormattedTime() {
  const date = new Date();
  return date.toTimeString().slice(0, 5);
}

function getFormattedDate() {
  const date = new Date();
  const localeOptions = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };
  return date.toLocaleDateString('en-US', localeOptions);
}

module.exports = { getFormattedDate, getFormattedTime };

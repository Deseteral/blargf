import distanceInWordsStrict from 'date-fns/distance_in_words_strict';

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

function formatAsDuration(date) {
  return distanceInWordsStrict(new Date(), date, { addSuffix: true });
}

export { formatAsDuration, getFormattedTime, getFormattedDate };

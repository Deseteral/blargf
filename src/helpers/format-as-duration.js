import distanceInWordsStrict from 'date-fns/distance_in_words_strict';

function formatAsDuration(date) {
  return distanceInWordsStrict(new Date(), date, { addSuffix: true });
}

export default formatAsDuration;

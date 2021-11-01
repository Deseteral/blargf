import distanceInWordsStrict from 'date-fns/distance_in_words_strict';

function getFormattedTime(): string {
  const date = new Date();
  return date.toTimeString().slice(0, 5);
}

function getFormattedDate(): string {
  const date = new Date();
  const localeOptions: Intl.DateTimeFormatOptions = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };
  return date.toLocaleDateString('en-US', localeOptions);
}

function formatAsDuration(date: Date): string {
  return distanceInWordsStrict(new Date(), date, { addSuffix: true });
}

export { formatAsDuration, getFormattedTime, getFormattedDate };

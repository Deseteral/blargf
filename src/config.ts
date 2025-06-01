import config from "../config.toml";

interface Configuration {
  server: {
    port: number;
  };
  backgrounds: {
    subreddits: string[];
  };
  tasks: {
    refreshIntervalSeconds: number;
    todoistToken: string;
  };
  events: {
    icalUrls: string[];
    refreshIntervalSeconds: number;
  };
  countdowns: {
    list: { title: string; date: string }[];
    refreshIntervalSeconds: number;
  };
}

function getConfig(): Configuration {
  return config;
}

export { getConfig };

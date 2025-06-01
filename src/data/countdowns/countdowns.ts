import registerService from "../register-service";
import config from "../../config";
import { type Countdown } from "./model";

const [getCountdownsData] = registerService<Countdown[], Countdown[]>({
  name: "countdowns",
  refreshInterval: config().countdowns.refreshIntervalSeconds,
  dataProvider: async () => config().countdowns.list,
  initialData: [],
  getter: (cache) => cache.data,
});

export { getCountdownsData };

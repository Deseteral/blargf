import registerService from "../register-service";
import { getConfig } from "../../config";
import { type Countdown } from "./model";

const [getCountdownsData] = registerService<Countdown[], Countdown[]>({
  name: "countdowns",
  refreshInterval: getConfig().countdowns.refreshIntervalSeconds,
  dataProvider: async () => getConfig().countdowns.list,
  initialData: [],
  getter: (cache) => cache.data,
});

export { getCountdownsData };

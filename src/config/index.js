import configDev from './env/config.dev';
import configLocal from './env/config.local';

const config = {
  local: configLocal,
  dev: configDev,
};

export default config;

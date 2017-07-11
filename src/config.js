import { assign } from './utils/lodash';

const config = assign({
  development: {
    api: {
      safe_harbor: {
        host: 'https://api.trade.gov/v1/safe_harbor_eu/search',
        apiKey: 'O6fmOIPtrvDlqoDe2_6UbKJc',
      },
    },
  },
  production: {
    api: {
      safe_harbor: {
        host: 'https://api.trade.gov/v1/safe_harbor_eu/search',
        apiKey: 'O6fmOIPtrvDlqoDe2_6UbKJc',
      },
    },
  },
});

export default config[process.env.NODE_ENV];

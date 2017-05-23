import { assign } from './utils/lodash';

const config = assign({
  development: {
    api: {
      safe_harbor: {
        host: 'http://127.0.0.1:3000/v1/safe_harbor/search',
        apiKey: 'devkey',
      },
    },
  },
  production: {
    api: {
      safe_harbor: {
        host: 'https://api.trade.gov/safe_harbor_eu/search',
        apiKey: 'O6fmOIPtrvDlqoDe2_6UbKJc',
      },
    },
  },
});

export default config[process.env.NODE_ENV];

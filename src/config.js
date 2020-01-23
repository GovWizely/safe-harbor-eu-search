import { assign } from './utils/lodash';

const config = assign({
  development: {
    api: {
      safe_harbor: {
        host: 'https://api.trade.gov/gateway/v1/safe_harbor_eu/search',
        access_token: 'b0045391-2ef8-3049-a215-f78b7716f045',
      },
    },
  },
  production: {
    api: {
      safe_harbor: {
        host: 'https://api.trade.gov/gateway/v1/safe_harbor_eu/search',
        access_token: 'b0045391-2ef8-3049-a215-f78b7716f045',
      },
    },
  },
});

export default config[process.env.NODE_ENV];

const hostname = typeof window !== 'undefined' ? window.location.hostname : '';
const isLocalHost = hostname === 'localhost' || hostname === '127.0.0.1';

export const environment = {
  production: false,
  apiBaseUrl: isLocalHost ? 'http://localhost:8080' : ''
};

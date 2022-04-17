const ENV = window.location.host === 'localhost:3000' ? 'development' : 'production';

const BASE_URL =
  ENV === 'production'
    ? ''
    : 'http://127.0.0.1:7777/';

export {BASE_URL}
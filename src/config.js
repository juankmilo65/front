const ENV = window.location.host === 'http://localhost:3000' ? 'development' : 'production';

const BASE_URL =
  ENV === 'production'
    ? ''
    : 'http://localhost:3000';

export {BASE_URL}
import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://192.168.0.18:8081',
  realm: 'TinyStorage',
  clientId: 'TinyStorageClient',
});

export default keycloak;
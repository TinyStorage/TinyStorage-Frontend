import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'https://tiny-storage.online/keycloak',
  realm: 'tiny-storage-realm',
  clientId: 'DEV',
});

export default keycloak;

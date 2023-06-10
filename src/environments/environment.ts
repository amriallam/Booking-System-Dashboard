export const environment = { production: false };
const JWTSecretKey = "AmrAllam"
export const EncodedJWTSecretKey = new TextEncoder().encode(JWTSecretKey);
// export const apiUrl = "http://localhost:4200/api/"
export const apiUrl = 'https://localhost:7158/api/';
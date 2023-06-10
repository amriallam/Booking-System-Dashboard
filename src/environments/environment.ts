export const environment = { production: false };
const JWTSecretKey = "AmrAllam"
export const EncodedJWTSecretKey = new TextEncoder().encode(JWTSecretKey);
export const apiUrl = "https://localhost:7158/api/"

export const environment = { production: false };
const JWTSecretKey = "AmrAllam"
export const EncodedJWTSecretKey = new TextEncoder().encode(JWTSecretKey);
export const DatabaseDomain = "http://localhost:4200/"

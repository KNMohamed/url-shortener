export default {
  PORT: 3001,

  /* The domain for the backend is on */
  DEFAULT_DOMAIN: "localhost:3001",

  /* Neo4j database credential details */
  DB_URI: "neo4j://127.0.0.1:7687",
  DB_USERNAME: "neo4j",
  DB_PASSWORD: "YOUR_PASSWORD",

  /* A passphrase to encrypt JWT. Use a long and secure key. */
  JWT_SECRET: "securekey",
};

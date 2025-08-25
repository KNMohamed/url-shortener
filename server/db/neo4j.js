import neo4j from 'neo4j-driver';
import config from '../config.js';

const driver = neo4j.driver(
    config.DB_URI,
    neo4j.auth.basic(config.DB_USERNAME, config.DB_PASSWORD), {
      // Optional: Add logging or other settings
    }
  );
  
  export default driver;
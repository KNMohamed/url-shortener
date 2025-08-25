import { customAlphabet } from "nanoid";
import bcrypt from "bcryptjs";
import driver from "./neo4j.js";
import config from "../config.js";

// Generate a random, alphanumeric ID of length 6.
// This is used for creating short URLs.
const generateId = customAlphabet(
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
  6
);

// Helper function to get the current date in UTC.
// This ensures consistency across different timezones.
const getUTCDate = (dateString = Date.now()) => {
  const date = new Date(dateString);
  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours()
  );
};

// Cypher query to create a new URL without a user or custom domain.
const queryNewUrl = `
  CREATE (l:URL { id: $id, target: $target, createdAt: datetime() })
  RETURN l
`;

// Creates a new short URL entry in the database.
export const createShortUrl = async ({ target, password }) => {
  // Obtain a new Neo4j session.
  const session = driver.session();
  try {
    const query = queryNewUrl;
    // TODO: PASSWORD protected url
    // Hash the password if provided. `bcryptjs` is asynchronous.
    // const salt = password ? await bcrypt.genSalt(12) : null;
    // const hash = password ? await bcrypt.hash(password, salt) : null;

    // Use `writeTransaction` for operations that modify the database.
    const result = await session.writeTransaction((tx) =>
      tx.run(query, {
        id: generateId(),
        target,
      })
    );

    // Extract the created URL properties from the query result.
    const data = result.records[0].get("l").properties;

    // Return the URL data along with the generated short URL.
    return {
      ...data,
      password: !!data.password,
      shortUrl: `http://${config.DEFAULT_DOMAIN}/u/${data.id}`,
    };
  } finally {
    // Close the session in the `finally` block to ensure it's always closed.
    await session.close();
  }
};

// Finds a URL by its ID
export const findUrl = async ({ id }) => {
  const session = driver.session();
  try {
    // Use `readTransaction` for read-only operations.
    const result = await session.readTransaction((tx) =>
      tx.run(
        `
          // Match the URL by ID.
          MATCH (l:URL { id: $id })
          RETURN l
          `,
        { id }
      )
    );
    // Map the records to a more convenient format.
    return result.records.map((record) => ({
      ...record.get("l").properties,
    }));
  } finally {
    await session.close();
  }
};

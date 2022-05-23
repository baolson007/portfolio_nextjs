const getEnvironmentVariable = (environmentVariable: string): string => {
  const unvalidatedEnvironmentVariable = process.env[environmentVariable];
  if (!unvalidatedEnvironmentVariable) {
    throw new Error(
      `Couldn't find environment variable: ${environmentVariable}`
    );
  } else {
    return unvalidatedEnvironmentVariable;
  }
};

export const config = {
  DB_URI: getEnvironmentVariable("DB_URI"),
  EMAIL_KEY: getEnvironmentVariable("SENDGRID_API_KEY"),
  RECEIVER_EMAIL: getEnvironmentVariable("RECEIVER_EMAIL"),
  SENDER_EMAIL: getEnvironmentVariable("SENDER_EMAIL"),
};

/* credit: https://www.austinshelby.com/blog/the-correct-way-to-load-environment-variables-in-nextjs */

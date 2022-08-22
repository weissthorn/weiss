//DB config

export default {
  api: {
    host: process.env.NEXT_PUBLIC_DB_HOST,
    db: process.env.NEXT_PUBLIC_DB_NAME,
    port: process.env.NEXT_PUBLIC_DB_PORT
  },
  apikey: {
    WEB_API_KEY: process.env.NEXT_PUBLIC_API_KEY
  }
};

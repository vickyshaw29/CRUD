export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      host: process.env.MONGODB_URL,
      port: parseInt(process.env.PORT, 10) || 5432
    }
  });
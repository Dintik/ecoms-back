module.exports = () => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: process.env.DATABASE_URI,
        database: process.env.DATABASE_NAME
      },
      options: {
        ssl: true,
      },
    },
  },
});
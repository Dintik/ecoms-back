module.exports = () => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        database: "mart-fury",
        uri: "mongodb://dinti:dqd71AiQ82KSVvGM@martfury-shard-00-00.ryjbt.mongodb.net:27017,martfury-shard-00-01.ryjbt.mongodb.net:27017,martfury-shard-00-02.ryjbt.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-g7hyrr-shard-0&authSource=admin&retryWrites=true&w=majority"
      },
      options: {
        ssl: true,
      },
    },
  },
});

// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'bookshelf',
//       settings: {
//         client: 'sqlite',
//         filename: env('DATABASE_FILENAME', 'db/data.db'),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });
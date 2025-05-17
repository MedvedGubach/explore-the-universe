import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schema/typeDefs';
import { resolvers } from './resolvers/indexResolver';
import cors from 'cors';

async function startServer() {
    const app = express();
    app.use(cors());

    const server = new ApolloServer({ typeDefs, resolvers });

    await server.start();
    server.applyMiddleware({ app });

    const PORT = process.env.PORT || 4000;

    const httpServer = app.listen(PORT, () => {
        console.log(`🚀 GraphQL server ready at http://localhost:${PORT}${server.graphqlPath}`);
    });

    process.on('SIGINT', () => {
        console.log('\n🛑 Server shutting down (SIGINT)...');
        httpServer.close(() => {
            console.log('✅ Server closed gracefully');
            process.exit(0);
        });
    });

    process.on('SIGTERM', () => {
        console.log('\n🛑 Server shutting down (SIGTERM)...');
        httpServer.close(() => {
            console.log('✅ Server closed gracefully');
            process.exit(0);
        });
    });
}

startServer().catch((error) => {
    console.log('Error starting the server:', error);
    process.exit(1);
});
import {MongoClient} from 'mongodb';
import {MongoMemoryServer} from 'mongodb-memory-server';

const connectToMongoDB = async () => {
    const mongoMemoryServer = await MongoMemoryServer.create();
    const connectionOptions = {uri: mongoMemoryServer.getUri(), parsedUri: {db: 'test'}};

    const mongodb = await MongoClient.connect(connectionOptions.uri);

    return mongodb.db(connectionOptions.parsedUri.db);
};

export const MongoDB = await connectToMongoDB();

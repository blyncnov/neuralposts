import { MongoClient } from "mongodb";

export const connectToDatabase = async () => {
  MongoClient.connect(
    "mongodb + srv://jeremy :Hi10ttion@cluster0.sg8wc.mongodb.net/neural-auth?retryWrites=true&w=majority"
  ).then((client) => {
    return client;
  });
};

export default connectToDatabase;

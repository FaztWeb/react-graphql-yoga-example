import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import path from "path";

export const server = new GraphQLServer({
  typeDefs: path.join(__dirname, "graphql/schema.graphql"),
  resolvers,
});

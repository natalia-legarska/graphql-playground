import {ApolloServer, gql} from "apollo-server";
import {createTestClient} from "apollo-server-testing";

const typeDefs = gql`
    type Query {
        hello: String
    }
`;
const resolvers = {};

const server = new ApolloServer({typeDefs, resolvers});

const {query} = createTestClient(server);

describe('Hello Query', () => {
    it('should get hello', async () => {
        const helloQuery = gql`query Hello {
                hello
            }`

        const { data : {hello} } = await query({query : helloQuery});

        expect(hello).toBe('Hello world!');
    });
})
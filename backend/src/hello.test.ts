// import {ApolloServer} from "@apollo/server";
//
// const typeDefs = schemaReportGql`
//     type Query {
//         hello: String
//     }
// `;
// const resolvers = {};
//
// const server = new ApolloServer({typeDefs, resolvers});
//
// const {query} = createTestClient(server);
//
// describe('Hello Query', () => {
//     it('should get hello', async () => {
//         const helloQuery = gql`query Hello {
//                 hello
//             }`
//
//         const { data : {hello} } = await query({query : helloQuery});
//
//         expect(hello).toBe('Hello world!');
//     });
// })
//
// // https://api.datacite.org/graphql
// // https://support.datacite.org/docs/getting-started
//
// // https://countries.trevorblades.com/
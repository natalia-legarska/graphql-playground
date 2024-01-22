# graphql-playground

## Checklist
- [x] Create repo
- [ ] Create backend project
  - Create a simple back-end that stitches two public GraphQL APIs of your choice.
  - Some of the operations must require authentication
    - every authenticated operation must be saved in an access log that has to be exposed as a separate authenticated query.
- [ ] Crete frontend project
  - Use React and Apollo Client
  - Implement a single page that will display the information from at least two separate queries defined in the back-end.
  - One of the queries should require authentication and the app should allow logging in and out (but the credentials can be hardcoded).
- [ ] Documentation how to run
- [ ] Testing coverage

## Task
Unless specified otherwise choose the libraries as you see fit. 
Provide the solution as separate projects, not a single full-stack app (this can be a monorepo if you prefer).
High testing coverage is strongly recommended.

We have to be able to run the projects (along with tests), so provide any necessary information in the README.

Please implement the following using **TypeScript**:
### Back-end
Create a simple back-end that stitches two public GraphQL APIs of your choice.
Some of the operations must require authentication.

Additionally, every authenticated operation must be saved in an access log that has to be exposed as a separate authenticated query.

### Front-end
Implement a single page that will display the information from at least two separate queries defined in the back-end.

One of the queries should require authentication and the app should allow logging in and out (but the credentials can be hardcoded).

**Use React and Apollo Client**.

Styling is not a priority.

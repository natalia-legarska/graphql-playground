# graphql-playground

## Overview

This project consists of a backend and a frontend application designed to demonstrate the integration of public GraphQL API. The backend fetches the data from external GraphQL api: https://api.datacite.org/graphql. About DataCite 
> We are a global community that shares a common interest: to ensure that research outputs and resources are openly available and connected so that their reuse can advance knowledge across and between disciplines, now and in the future.
> https://datacite.org/

these APIs and provides a unified GraphQL endpoint. Some operations require authentication and are logged in an access log, which is also queryable through the GraphQL API. The frontend application utilizes React and Apollo Client to display data from the backend and handles user authentication.

## Technology Stack

- **backend:** Node.js, Apollo Server, GraphQL
- **frontend:** React, Apollo Client, MaterialUI
- **Testing:** Jest
- **Other Libraries:** See `package.json` files in respective directories

## Getting Started

### Prerequisites

- Node.js (version 12 or newer)
- npm
- Git

Note: all scripts assume you start from the project directory.
### Installation

Clone the repository:

```
git clone <repository-url>
cd <project-directory>
```

Install dependencies for both backend and frontend applications:

```
# backend 
> cd backend 
> npm install  
```

```
# frontend 
> cd frontend 
> npm install
```


### Running the Applications

Start the backend server:

```
> cd backend 
> npm backend-build-start
```

In a new terminal window, start the frontend application:

```
> cd frontend  
> npm frontend-start
```

The frontend application will be available at [http://localhost:3000](http://localhost:3000/), and the GraphQL API can be accessed through [http://localhost:4000/graphql](http://localhost:4000/graphql).

### Running Tests

To run tests for the backend:

```
> cd backend 
> npm backend-test
```

To run tests for the frontend:

```
> cd frontend  
> npm frontend-test
```

## Authentication

The application supports simple authentication with hardcoded credentials. 

To send requests as authenticated user, it is necessary to click `Login` button in the top right corner. To send unauthenticated requests, user can click Logout in the same place.


## Functionality

In order to fetch data from the backend it's required to click `Fetch article` button. It triggers 2 requests to the api. If DOI identifier is given in the input field, it will return the data from the external api (assuming it's the correct DOI - example DOI: `10.1016/j.chb.2021.106722`).
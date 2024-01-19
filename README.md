# Job Search Platform

This project is a job search platform built using Yarn as the package manager. To get started, follow the instructions below.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

### Installing Dependencies

```bash
yarn install
Starting the Development Server
bash
Copy code
yarn dev
This will launch the development server and make your application accessible at http://localhost:3000.

JSON Server
The project relies on a JSON server to manage job data. Start the JSON server using the provided link:

bash
Copy code
json-server --watch https://my-json-server.typicode.com/tanvirhossain808/fake-json-server --port 9000
Private Routes
Certain routes in the application are private and require authentication. Make sure to implement authentication before deploying your application.
Features
Job Search: Users can search for jobs based on various criteria.
Favorite Jobs: Users can add jobs to their favorites list.
Remove from Favorites: Users can remove jobs from their favorites list.
Delete Job: Users can delete a job listing.
Private Routes: Special routes for posting jobs and viewing applied jobs.
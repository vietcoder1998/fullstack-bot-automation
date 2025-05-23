# fullstack-bot-automation
Auto running, deploy with CI-CD
# Fullstack Bot Application

This project is a fullstack application that allows you to create and manage multiple Telegram bots. It is built using Vite for the client-side, Express.js for the server-side, and TypeScript for type safety across the application. The application connects to a MongoDB database to store bot information.

## Project Structure

```
fullstack-bot-app
├── client                # Client-side application
│   ├── src               # Source files for the React app
│   ├── public            # Public assets
│   ├── vite.config.ts    # Vite configuration
│   ├── tsconfig.json     # TypeScript configuration for client
│   ├── .eslintrc.js      # ESLint configuration for client
│   ├── .prettierrc       # Prettier configuration for client
│   └── package.json       # Client package configuration
├── server                # Server-side application
│   ├── src               # Source files for the Express app
│   ├── .env              # Environment variables for server
│   ├── tsconfig.json     # TypeScript configuration for server
│   ├── .eslintrc.js      # ESLint configuration for server
│   ├── .prettierrc       # Prettier configuration for server
│   └── package.json       # Server package configuration
├── .husky                # Husky configuration for Git hooks
├── .gitignore            # Git ignore file
├── README.md             # Project documentation
└── package.json          # Root package configuration
```

## Features

- Create and manage multiple Telegram bots.
- Client-side built with React and Vite.
- Server-side built with Express.js and TypeScript.
- MongoDB for data storage.
- Axios for API requests with interceptors.
- ESLint and Prettier for code quality and formatting.
- Husky for pre-commit hooks to ensure code quality.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd fullstack-bot-app
   ```

2. Install dependencies for both client and server:

   ```
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the `server` directory and add your MongoDB connection string and any other necessary environment variables.

4. Run the application:

   - Start the server:

     ```
     cd server
     npm run dev
     ```

   - Start the client:

     ```
     cd client
     npm run dev
     ```

### Usage

- Access the client application at `http://localhost:3000`.
- Use the API endpoints defined in the server to create and manage bots.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

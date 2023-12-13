# Recipe App

This project is a simple Recipe App that allows users to view and add recipes. It consists of both a backend server built with Express and a frontend user interface developed with React.

## Table of Contents

- [Backend](#backend)
  - [Dependencies](#dependencies)
  - [Getting Started](#getting-started)
  - [API Endpoints](#api-endpoints)

- [Frontend](#frontend)
  - [Dependencies](#dependencies-1)
  - [Getting Started](#getting-started-1)
  - [Usage](#usage)

- [License](#license)

---

## Backend

### Dependencies

- Node.js
- Express
- MongoDB

### Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/iting-sfbu/Final_project.git
   cd Final_project
   ```

2. Install dependencies:

   ```bash
   cd back-end
   npm install
   ```

3. Configure MongoDB:

   Replace `'your-mongodb-uri'` in `back-end/index.js` with your MongoDB connection URI.

4. Start the backend server:

   ```bash
   npm start
   ```

   The server will be running on `http://localhost:8080`.

### API Endpoints

- **GET /load_recipe**: Fetches all recipes from the database.

- **POST /add_recipe**: Adds a new recipe to the database.

## Frontend

### Dependencies

- React
- Axios
- React Bootstrap

### Getting Started

1. Install dependencies:

   ```bash
   cd frontend
   npm install
   ```

2. Start the React app:

   ```bash
   npm start
   ```

   The app will be running on `http://localhost:3000`.

### Usage

- The app displays existing recipes and allows users to add new ones.

- Title and ingredients can be added for each recipe.

- Click the "Submit" button to add a new recipe.

## License

This project is licensed under the [MIT License](LICENSE).

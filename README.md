**Latest**

we have clickable webpage now 




**Instructions to run code**

    Note: There is no need to create an environment for this, as npm installs packages to the directory itself.

1. to install packages needed in package.json 
    ```
    npm i
    ```

2. to start api 
    ```
    npm start
    ```

3. http://localhost:8000/backendData



**Let's aim to build up this project backbone bit by bit**

## 1. Root Directory
- Configuration Files
  - `package.json` (for Node.js projects)
  - `.gitignore`
  - `README.md`

## 2. Backend Directory
- Backend Code
  - `index.js` or `app.js`: Entry point for the backend server
  - `routes/`: Directory for defining API routes
  - `controllers/`: Directory for defining route controllers
  - `models/`: Directory for defining database models
  - `middlewares/`: Directory for storing custom middleware functions
  - `config/`: Directory for configuration files
  - `utils/`: Directory for utility functions

## 3. Frontend Directory
- Frontend Code
  - `index.html` or `index.jsx`: Main HTML or JSX file for the frontend
  - `components/`: Directory for React components or UI elements
  - `styles/`: Directory for CSS or SCSS files
  - `assets/`: Directory for images, fonts, or static assets
  - `services/`: Directory for frontend services (e.g., API service)
  - `utils/`: Directory for frontend-specific utility functions
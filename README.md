# Fitness Tracker

A full-stack fitness tracker application with a **React frontend** fitness_tracker_frontend and a **Rails backend** fitness_tracker_backend.

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js & npm (for React frontend)
- Ruby & Rails (for backend)
- PostgreSQL (for database)

---

## 📂 Project Structure
```
fitness_tracker/
│── fitness_tracker_backend/   # Rails API backend
│── fitness_tracker_frontend/  # React frontend
```

---

## ⚙️ Backend Setup (Rails API)

1. **Navigate to backend directory:**
   ```sh
   cd fitness_tracker_backend
   ```
2. **Install dependencies:**
   ```sh
   bundle install
   ```
3. **Set up database:**
   ```sh
   rails db:create db:migrate db:seed
   ```
4. **Start the Rails server:**
   ```sh
   rails server
   ```
   The API will be running at `http://localhost:3000`.

---

## 💻 Frontend Setup (React)

1. **Navigate to frontend directory:**
   ```sh
   cd fitness_tracker_frontend
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Start the React app:**
   ```sh
   npm start
   ```
   The app will be available at `http://localhost:3000`.

---

## 🔗 API Configuration
- Ensure the React frontend is correctly configured to communicate with the Rails backend.
- Update the `API_URL` in frontend configuration (e.g., `.env` file or API service file).

---

## 📜 Environment Variables
Create a `.env` file in `fitness_tracker_backend` and `fitness_tracker_frontend` with necessary environment variables.

### Example (`fitness_tracker_backend/.env`)
```
DATABASE_URL=your_database_url
SECRET_KEY_BASE=your_secret_key
```

### Example (`fitness_tracker_frontend/.env`)
```
REACT_APP_API_URL=http://localhost:3001
```

---

## ✅ Testing

- **Backend:** Run tests with:
  ```sh
  rails test
  ```
- **Frontend:** Run tests with:
  ```sh
  npm test
  ```

---

## 🛠️ Technologies Used
- **Frontend:** React, Formik, Yup
- **Backend:** Ruby on Rails, Devise, PostgreSQL

---

Happy coding! 🚀

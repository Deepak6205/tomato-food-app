# 🍔 Food Ordering App (Full Stack MERN)

A full-stack food ordering web application where users can browse food items, add them to cart, and place orders using Stripe payments. This project includes a customer-facing frontend, an admin panel for managing food items and orders, and a robust backend API.

This project is built to simulate a real-world food delivery platform and focuses on frontend–backend integration, authentication, cart logic, and online payments.

---

## ✨ Features

### 👤 User Features (Frontend)
- Register & Login (JWT Authentication)
- Browse food items with filtering
- Add/remove items from cart
- Update item quantities
- Place orders with address details
- Online payment using Stripe
- View order history and status
- Responsive UI (mobile + desktop)

### 🔧 Admin Features (Admin Panel)
- Add, edit, and delete food items
- Manage food categories
- View all orders
- Update order status
- Upload food images
- Dashboard with order management

### 🔐 Security
- JWT based authentication
- Protected routes and API endpoints
- Secure password hashing with bcrypt
- Secure payment handling with Stripe
- Environment variables for sensitive keys
- CORS enabled for secure cross-origin requests

---

## 🛠 Tech Stack

### Frontend
- **React** (Vite) - UI library
- **CSS** - Styling
- **Axios** - HTTP client
- **React Router DOM** - Client-side routing

### Admin Panel
- **React** (Vite) - UI library
- **CSS** - Styling
- **Axios** - HTTP client
- **React Router DOM** - Client-side routing
- **React Toastify** - Toast notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Stripe** - Payment gateway
- **Multer** - File upload handling
- **CORS** - Cross-origin requests
- **Dotenv** - Environment variables

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) - Package manager
- **MongoDB** - [Install MongoDB Community](https://www.mongodb.com/try/download/community)
  - Or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (cloud version)
- **Git** - [Download](https://git-scm.com/)
- **Stripe Account** - [Sign up](https://stripe.com) for payment processing

---

## 🚀 Installation & Setup

### Step 1: Clone the Repository
```bash
git clone https://github.com/Deepak6205/tomato-food-app.git
cd food-app
```

### Step 2: Setup Backend

#### 2.1 Navigate to Backend Directory
```bash
cd backend
```

#### 2.2 Install Dependencies
```bash
npm install
```

#### 2.3 Create Environment Variables File
Create a `.env` file in the `backend` directory with the following variables:
```env
# Database Configuration
MONGO_URI=mongodb://localhost:27017/food_app
# OR use MongoDB Atlas
# MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/food_app

# Server Configuration
PORT=4000

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here

# Stripe Keys (Get from Stripe Dashboard)
STRIPE_SECRET_KEY=your_stripe_secret_key_here
STRIPE_PUBLIC_KEY=your_stripe_public_key_here

# Admin Email (for authentication/password reset)
ADMIN_EMAIL=admin@example.com
```

#### 2.4 Start MongoDB
**If using local MongoDB:**
```bash
# Windows
mongod

# Mac/Linux
brew services start mongodb-community
```

**If using MongoDB Atlas:**
- No action needed, just ensure your connection string in `.env` is correct

#### 2.5 Start Backend Server
```bash
npm run server
```
The backend will start on `http://localhost:4000`

---

### Step 3: Setup Frontend (Customer)

#### 3.1 Navigate to Frontend Directory
```bash
cd ../frontend
```

#### 3.2 Install Dependencies
```bash
npm install
```

#### 3.3 Create Environment Variables File
Create a `.env.local` file in the `frontend` directory:
```env
VITE_API_URL=http://localhost:4000
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key_here
```

#### 3.4 Start Development Server
```bash
npm run dev
```
The frontend will start on `http://localhost:5173` (or the next available port)

---

### Step 4: Setup Admin Panel

#### 4.1 Navigate to Admin Directory
```bash
cd ../admin
```

#### 4.2 Install Dependencies
```bash
npm install
```

#### 4.3 Create Environment Variables File
Create a `.env.local` file in the `admin` directory:
```env
VITE_API_URL=http://localhost:4000
```

#### 4.4 Start Development Server
```bash
npm run dev
```
The admin panel will start on `http://localhost:5174` (or the next available port)

---

## 🎯 Running the Project Locally

Once all three parts are setup, you can run the entire project:

### Terminal 1 - Backend
```bash
cd backend
npm run server
# Output: Listening on localhost:4000
```

### Terminal 2 - Frontend
```bash
cd frontend
npm run dev
# Output: VITE v7.2.4  ready in XXX ms
```

### Terminal 3 - Admin Panel
```bash
cd admin
npm run dev
# Output: VITE v7.2.4  ready in XXX ms
```

Now you can access:
- **Frontend (Customer)**: `http://localhost:5173`
- **Admin Panel**: `http://localhost:5174`
- **Backend API**: `http://localhost:4000`

---

## 📁 Project Structure

```
food-app/
├── frontend/              # Customer-facing web application
│   ├── src/
│   │   ├── components/   # Reusable React components
│   │   ├── pages/        # Page components (Home, Cart, etc.)
│   │   ├── context/      # Context for state management
│   │   ├── assets/       # Images, icons, and utilities
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── admin/                 # Admin panel for managing food and orders
│   ├── src/
│   │   ├── components/   # Admin UI components
│   │   ├── pages/        # Admin pages (Add, List, Orders)
│   │   ├── assets/       # Images and utilities
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/              # Express.js API server
│   ├── config/          # Database configuration
│   ├── controllers/      # Business logic (food, user, cart, order)
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API endpoints
│   ├── middleware/      # Authentication and other middleware
│   ├── uploads/         # Uploaded food images
│   ├── server.js        # Main server file
│   ├── package.json
│   └── .env             # Environment variables (create this)
│
└── README.md            # This file
```

---

## 🔌 API Endpoints

### User Routes (`/api/user`)
- `POST /register` - User registration
- `POST /login` - User login
- `GET /profile` - Get user profile (protected)

### Food Routes (`/api/food`)
- `GET /` - Get all food items
- `GET /:id` - Get specific food item
- `POST /` - Add new food (admin only)
- `PUT /:id` - Update food (admin only)
- `DELETE /:id` - Delete food (admin only)

### Cart Routes (`/api/cart`)
- `GET /` - Get user's cart (protected)
- `POST /add` - Add item to cart (protected)
- `POST /remove` - Remove item from cart (protected)
- `POST /clear` - Clear cart (protected)

### Order Routes (`/api/order`)
- `POST /place` - Place an order (protected)
- `GET /user/:id` - Get user's orders (protected)
- `GET /` - Get all orders (admin only)
- `PUT /:id` - Update order status (admin only)

---

## 🔐 Authentication

The application uses JWT (JSON Web Token) for authentication:
- Tokens are stored in local storage on the client
- Protected routes require a valid JWT token
- Tokens should be sent in the `Authorization` header as `Bearer <token>`

---

## 💳 Stripe Integration

1. Sign up on [Stripe Dashboard](https://dashboard.stripe.com)
2. Get your API keys from the Stripe dashboard
3. Add them to both backend and frontend `.env` files
4. Test with Stripe's test card numbers:
   - Success: `4242 4242 4242 4242`
   - Failure: `4000 0000 0000 0002`

---

## 🧪 Testing

### Test User Account
You can create a test account by registering on the frontend application.

### Test Admin Account
Create an admin user through the database or use the registration feature and manually set admin privileges.

---

## 🛠 Development Tools

### Frontend/Admin Development
```bash
# Install dependencies
npm install

# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### Backend Development
```bash
# Install dependencies
npm install

# Start server with nodemon (auto-restart on file changes)
npm run server
```

---

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running locally or Atlas connection string is correct
- Check `MONGO_URI` in backend `.env` file
- Verify firewall settings if using MongoDB Atlas

### Port Already in Use
- Backend: Change `PORT` in `.env` (default: 4000)
- Frontend/Admin: Vite will automatically use next available port

### CORS Errors
- Ensure backend has CORS enabled
- Check API URL in frontend/admin `.env` files
- Verify backend is running on correct port

### JWT Authentication Errors
- Ensure `JWT_SECRET` is set in backend `.env`
- Check token is being sent in requests
- Verify token hasn't expired

### Stripe Payment Issues
- Use Stripe test keys in development
- Verify keys are correctly set in `.env` files
- Check Stripe webhook configuration for production

---

## 📝 License

This project is open source and available under the ISC License.

---

## 👨‍💻 Author

**Deepak** - [GitHub Profile](https://github.com/Deepak6205)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## ❓ Support

For issues or questions, please open an issue on the [GitHub repository](https://github.com/Deepak6205/tomato-food-app/issues).

---

**Happy Coding! 🚀**




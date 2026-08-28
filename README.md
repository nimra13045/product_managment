# 🛒 Product Management System

A simple and interactive **Product Management System** built with **React.js**.

This project allows users to add products, manage quantities and prices, calculate totals automatically, save product records, and view detailed saved records.

## 🚀 Live Demo

🔗 **[View Live Demo](https://nimra13045.github.io/product_managment/)**


### 🏠 Product Management

The home page allows users to add products with their quantity and price. The total is calculated automatically.

### 📋 Saved Records

Users can view previously saved product records and delete records when needed.

### 🔍 Record Details

Users can open an individual record to see detailed information about the products, quantities, prices, and totals.

---

## ✨ Features

- ➕ Add new products
- 📝 Enter product name
- 🔢 Set product quantity
- 💰 Enter product price
- 🧮 Automatically calculate product total
- 📊 Automatically calculate grand total
- ❌ Remove products
- 💾 Save product records
- 🗑️ Delete saved records
- 🔍 View record details
- 🧭 Navigate between pages using React Router
- 💽 Store data using Local Storage
- 📱 Responsive user interface

---

## 🛠️ Technologies Used

- **React.js**
- **JavaScript (ES6+)**
- **React Router DOM**
- **CSS**
- **HTML5**
- **Local Storage**
- **Vite**
- **ESLint**

---

## 📂 Project Structure

```text
product-management/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── component/
│   │   ├── productlist.jsx
│   │   ├── recorddetail.jsx
│   │   └── recordlist.jsx
│   │
│   ├── context/
│   │   └── productcontext.jsx
│   │
│   ├── data/
│   │   └── localstore.js
│   │
│   ├── pages/
│   │   ├── addproduct.jsx
│   │   ├── home.jsx
│   │   └── viewproduct.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
📄 Pages
🏠 Home Page

The Home page contains the product management interface.

Users can:

Add products
Enter quantity
Enter price
Calculate totals
Remove products
Save products
📋 View Products

The View Products page displays saved records.

Users can:

View saved records
Open record details
Delete records
🔎 Record Details

The Record Details page displays the products belonging to a selected record.

It shows:

Item name
Quantity
Price
Total
Remove action
🧮 How Total Calculation Works

The total for each product is calculated using:

Total = Quantity × Price

For example:

Item: Laptop
Quantity: 2
Price: 7000

Total = 2 × 7000
      = 14000

The Grand Total is calculated by adding the totals of all products.

💾 Data Storage

This project uses Browser Local Storage to save product records.

This means saved data can remain available after refreshing the browser.

No external database is required for this project.

⚙️ Installation
1. Clone the repository
git clone https://github.com/nimra13045/product-management.git
2. Open the project
cd product-management
3. Install dependencies
npm install
4. Start the development server
npm run dev

The application will run locally using Vite.

🏗️ Build for Production

To create a production build:

npm run build

To preview the production build:

npm run preview
🧭 React Router Routes

The application uses React Router for navigation.

Route	Page
/	Home
/view	Saved Products
/detail/:id	Record Details
📚 What I Practiced

This project helped me practice several important React concepts:

React Components
useState
Context API
React Router
Props
Event Handling
Array methods
Local Storage
Dynamic Routes
Conditional Rendering
Form Inputs
Data Management
Component Organization
🎯 Future Improvements

Some features I would like to add in the future:

🔐 User authentication
🗄️ Backend database
✏️ Edit saved products
🔎 Search products
📊 Product statistics
📱 Improved mobile UI
🌐 Online database integration
🧾 Export records as PDF
📈 Dashboard with charts
👩‍💻 Author

Nimra Nazir

GitHub:
https://github.com/nimra13045

⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

Thanks for checking out my project! 🚀
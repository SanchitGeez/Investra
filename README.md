
# Investra Paper Trading Platform

Investra is a user-friendly **paper trading platform** designed for individuals who want to practice stock market analysis with **fake money**, while utilizing **real-time stock prices**. It provides a risk-free environment to learn and develop trading skills.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Additional Tools](#additional-tools)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
  - [Guidelines](#guidelines)
- [License](#license)
- [Demo](#demo)


## Features

- [x] **Real-Time Stock Prices**: Use actual market data for a realistic trading experience.
- [x] **Fake Money**: Practice trading without the fear of losing real money.
- [ ] **User Dashboard**: Track balance, holdings, and past transactions.
- [ ] **Purchase and Sell Stocks**: Buy and sell stocks based on real-time data.
- [x] **Responsive Design**: Optimized for use across all devices (desktop, tablet, and mobile).

---

## Tech Stack

Investra is built with the following technologies:

### Frontend

- **JavaScript (ES6+)**: Core language for dynamic functionality.
- **React.js**: A powerful JavaScript library for building user interfaces.
- **CSS**: Used for responsive design and visual styling.

### Backend

- **Node.js**: A runtime environment for server-side JavaScript execution.
- **Express.js**: A flexible backend framework for building RESTful APIs.
- **MongoDB**: A NoSQL database to store user information and transactions.
- **MarketStack API**: To fetch real-time stock prices.

### Additional Tools

- **JWT (JSON Web Tokens)**: For secure user authentication.
- **Axios**: For making API calls and handling HTTP requests.
- **Nodemon**: Automatically restarts the server during development.

---

## Installation

Follow these steps to set up Investra locally:

### 1. Clone the Repository

```bash
git clone https://github.com/SanchitGeez/Investra.git
```

### 2. Install Dependencies

For the frontend:

```bash
cd client/
npm install
npm start
```

For the backend:

```bash
cd backend/
npm install
node server.js
```

### 3. Run the Application

Open your browser and visit:

```
http://localhost:3000
```

---

## Usage

Once the platform is running, you can:

- **Register** and **log in** to the platform.
- **Buy** and **sell stocks** with real-time data using fake money.
- View your **balance**, **holdings**, and **transaction history** on the dashboard.

---

## Contributing

We welcome contributions from the community! To contribute, follow these steps:

### 1. Fork the Repository

Click the fork button on GitHub to create a personal copy of the project.

### 2. Create a New Branch

Create a branch for your feature or bug fix:

```bash
git checkout -b feature-name
```

### 3. Commit Your Changes

Make your changes and commit them:

```bash
git commit -m "Add feature-name"
```

### 4. Push to Your Fork

```bash
git push origin feature-name
```

### 5. Open a Pull Request

Submit a detailed pull request (PR) with a description of your changes and link to any relevant issues.

### Guidelines

- Ensure consistent code style and formatting.
- Write clear and concise commit messages.
- Thoroughly test your changes before submitting a PR.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for more details.

---

## Demo

Here are some previews of the platform in action:

### Login and Dashboard

![Login Demo](https://github.com/SanchitGeez/Investra/blob/main/client/public/login.gif)

### Balance and Purchase

![Purchase Demo](https://github.com/SanchitGeez/Investra/blob/main/client/public/buy.gif)

---

We appreciate your interest in Investra! We look forward to your contributions.

---

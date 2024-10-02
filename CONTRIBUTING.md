# Contributing to Investra

Thank you for your interest in contributing to **Investra**! We're excited to have you as a part of our community and look forward to your contributions to make this paper trading platform even better. Whether you're fixing bugs, adding new features, or improving documentation, every bit helps.

Please take a moment to read the following guidelines for contributing to the project.

## How Can You Contribute?

### 1. Reporting Bugs
If you find a bug, feel free to open an issue. When submitting a bug report, provide detailed information including:
- A clear description of the problem.
- Steps to reproduce the issue.
- Any relevant screenshots or logs.
- The expected behavior and what you experienced instead.

### 2. Feature Requests
If you have an idea for a new feature, you can open an issue with the label `enhancement` to suggest your idea. Please provide the following:
- A detailed explanation of the feature.
- The problem it solves or how it improves the platform.
- Any additional context or links that might help.

### 3. Working on Existing Issues
Check the [Issues](https://github.com/SanchitGeez/Investra/issues) page for bugs, feature requests, or enhancements that need to be worked on. Feel free to comment on an issue to let us know you're working on it.
It is **recommended** to wait untill we assign you the issue to start working on it
### 4. Submitting a Pull Request
Before submitting a pull request (PR):
- Fork the repository and clone it locally.
- Make sure your code is clean, well-documented, and adheres to the coding standards of the project.
- Test your changes thoroughly.

#### Steps to Submit a PR:
1. Fork the repository by clicking the "Fork" button on the GitHub page.
2. Clone your fork locally:
    ```bash
    git clone https://github.com/your-username/Investra
    ```
3. Create a new branch for your feature or bug fix:
    ```bash
    git checkout -b feature-name
    ```
4. Make your changes.
5. Commit your changes with a descriptive commit message:
    ```bash
    git commit -m "Add feature X or fix bug Y"
    ```
6. Push your changes to your fork:
    ```bash
    git push origin feature-name
    ```
7. Submit a pull request to the `main` branch of the main repository.

We will review your PR and provide feedback. Once approved, it will be merged into the project.

### 5. Code of Conduct
Please note that we adhere to a [Code of Conduct](#) to maintain a welcoming and inclusive environment for everyone. Be respectful and considerate when contributing and interacting with others.

### 6. Development Setup

To set up the project locally and start contributing:

#### Clone the Project
```bash
git clone https://github.com/SanchitGeez/Investra.git
```
#### MarketStack
Make a simple account on [MarketStack](https://marketstack.com/) and generate your API key
**Make sure to use API tokens wisely as they are limited. 
Contact Project Admin if you run out of tokens**
#### Client Setup
```bash
cd client/
npm install
npm start
```
Create a .env file and add the following:
```bash
API_KEY = your_api_key
```
#### Backend Setup
```bash
cd backend/
npm install
node server.js
```
Create a .env file and add the following:
```bash
API_KEY = your_api_key
PORT=4000
DB_URI= your_db_uri
JWT_SECRET=jwtrandomstring
```
Now you should have the client and backend running locally.

#### 7. Testing and Quality Assurance
Before submitting a PR, make sure your code is working and doesn't break any existing functionality. Please include tests for new features where applicable.
***
We welcome all contributions and are excited to see how you can help improve Investra! Thank you for your time and effort in making the project better for everyone.

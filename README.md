# Real-time Collaborative Text Editor - Local Setup Guide

This repository contains a real-time collaborative text editor web application that allows multiple users to edit the same document simultaneously. The app is built using React for the frontend and Node.js with Socket.IO for the backend to enable real-time communication between users.

## Getting Started

To run the app locally, follow the steps below:

### Prerequisites

Make sure you have the following installed on your system:

- Node.js: [Download Node.js](https://nodejs.org/) (LTS version recommended)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/irisparks/real-time-collaborative-text-editor.git
```

2. Change into the project directory:

```bash
cd real-time-collaborative-text-editor
```

3. Install the frontend and backend dependencies:

```bash
cd client
npm install
cd ../server
npm install
testing
```

### Running the App

1. Start the backend server:

```bash
cd server
npm start
```

The backend server should now be running at `http://localhost:3001`.

2. Open a new terminal and start the frontend development server:

```bash
cd client
npm start
```

The frontend development server should now be running at `http://localhost:3000`.

3. Open your web browser and visit `http://localhost:3000` to access the real-time collaborative text editor application.

### How to Use

- Upon opening the application, you will see a text area where you can type and edit text.
- If you open the same application in another browser or tab, changes made in one tab will be instantly reflected in the other.
- Test the real-time collaboration by typing simultaneously in different tabs, and you should see the changes synchronized in real-time.

### Stopping the App

To stop the application, go to the terminal where the frontend development server is running and press `Ctrl+C` to stop the server. Similarly, go to the terminal where the backend server is running and press `Ctrl+C` to stop the server.

---

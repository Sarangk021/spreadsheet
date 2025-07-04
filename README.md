# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!# React Spreadsheet Prototype

This project is a front-end-only React prototype designed to replicate a spreadsheet view similar to Google Sheets or Excel, based on the provided [Figma design](https://www.figma.com/design/3nywpu5sz45RrCmwe68QZP/Intern-Design-Assigment?node-id=2-2535&t=DJGGMt8I4fiZjoIB-1)

---

## Project Objective

To build a pixel-perfect spreadsheet UI experience using React and Tailwind CSS, closely replicating the given design and behavior. This assignment is part of an internship evaluation process.

---

## Features Implemented

- Accurate column headers with matching icons and layout
- Some icons differ slightly from Figma. The structure and functionality remain consistent
- Scrollable table with sticky sub-toolbar and header row
- Responsive input fields within all spreadsheet cells
- Conditional background and text color for Status and Priority columns
- Alignment and styling of content based on data type
- Interactive toolbar icons (e.g., sort, filter, view)
- Buttons log actions to the console (no dead UI)
- Smooth visual polish for usability
- URL columns are underlined
- Table rows are editable in real time
- Works exactly like a spreadsheet prototype

---

## Tech Stack

- React 18 (CRA)
- TypeScript (Strict Mode)
- Tailwind CSS
- Font Awesome for icons
- No state management library used
- Custom spreadsheet grid logic (no `react-table` used)

---

## Live Demo & Repository

-  **Live URL**: [Visit Live App on Vercel](https://your-vercel-link.vercel.app)
-  **GitHub Repo**: [github.com/Sarangk021/spreadsheet](https://github.com/Sarangk021/spreadsheet)

---

## Getting Started

### Prerequisites

- Node.js ≥ 14.x
- npm or yarn

### Setup Instructions

```bash
# Clone the repository
git clone https://github.com/Sarangk021/spreadsheet.git

# Navigate to the project
cd spreadsheet

# Install dependencies
npm install

# Start development server
npm start


See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

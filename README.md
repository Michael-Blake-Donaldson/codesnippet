# Code Snippet Manager

A responsive web application built with React for managing code snippets. Users can add, edit, delete, and filter snippets by categories. It includes a light/dark theme toggle, profile settings, and an intuitive design with icon-based navigation.

## Features

### Home Page
- Displays the title of the application: **Code Snippet Manager**.
- The header includes navigation icons for:
  - **Home**
  - **Snippets (Categories)**
  - **Profile**
- Navigation icons have hover effects:
  - Icons change color and scale up slightly on hover.

### Snippets Management
- **Add Snippets**: Create a new snippet by filling out a form with:
  - Title
  - Code
  - Category
- **Edit Snippets**: Modify an existing snippet.
- **Delete Snippets**: Remove snippets permanently.
- **Copy Snippets**: Copy snippet content to the clipboard with a single click.
- **Filter by Category**:
  - Dropdown to filter snippets based on predefined categories (e.g., JavaScript, Python, Java).
  - Matches the current light or dark theme.
- **Dynamic Theme for Forms**:
  - Form inputs, text areas, and dropdowns adjust colors based on the active theme.

### Profile Page
- Manage profile settings, including:
  - Uploading a profile picture (displayed in a circular frame).
  - Toggling between **light** and **dark modes**.
- The theme applies globally to all pages and persists after a page refresh.

### Theme Toggle
- Located on the Profile page and applies globally.
- Users can switch between:
  - **Light Mode**: Bright background with dark text.
  - **Dark Mode**: Dark background with light text.
- Theme settings persist using `localStorage`.

### Navigation Menu
- Icon-based navigation using [React Icons](https://react-icons.github.io/react-icons/):
  - **Home**: `AiOutlineHome`
  - **Snippets**: `BiCodeBlock`
  - **Profile**: `FiUser`
- Navigation items are spaced evenly and include hover effects.

## Technologies Used
- **Frontend**: React, React Router, Tailwind CSS, React Icons
- **State Management**: React Context API
- **Persistent Storage**: `localStorage`
- **Icon Library**: [React Icons](https://react-icons.github.io/react-icons/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).




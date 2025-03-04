# Todo Web App

A responsive Todo web application built with React, TypeScript, and styled-components.

## Features

- Add, toggle, and delete todos
- Responsive design that works on mobile, tablet, and desktop
- Modern UI with smooth animations
- TypeScript for better type safety
- Styled with styled-components following best practices
- Local storage persistence
- Kanban-style board with To Do, Ongoing, and Completed columns

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/Todo-WebApp.git
   cd Todo-WebApp
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Contributing

We welcome contributions! Here's how you can help:

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Git

### Setting Up Development Environment

1. Fork the repository
2. Clone your fork
   ```bash
   git clone https://github.com/your-username/Todo-WebApp.git
   ```
3. Create a new branch
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Making Changes

1. Make your changes in the new branch
2. Test your changes locally
3. Ensure code style is consistent
4. Write meaningful commit messages

### Commit Guidelines

- Use clear and meaningful commit messages
- Format: `type(scope): description`
- Types: feat, fix, docs, style, refactor, test, chore
- Example: `feat(todo): add drag and drop functionality`

### Submitting Changes

1. Push to your fork
   ```bash
   git push origin feature/your-feature-name
   ```
2. Create a Pull Request (PR)
3. Describe your changes in the PR description
4. Link any related issues

### Code Style Guidelines

- Use TypeScript features appropriately
- Follow React best practices
- Use styled-components for styling
- Write comments for complex logic
- Use meaningful variable and function names

### Running Tests

```bash
npm test
```

### Building for Production

```bash
npm run build
```

## Technologies Used

- React
- TypeScript
- styled-components
- React Hooks
- Modern CSS features
- Local Storage API

## Project Structure

```
src/
  ├── components/        # React components
  │   ├── Todo.tsx      # Main Todo component
  │   ├── TodoForm.tsx  # Form for creating todos
  │   └── styled/       # Styled components
  ├── styles/           # Global styles and theme
  ├── App.tsx          # Root component
  └── index.tsx        # Entry point
```

## Support

If you find any bugs or have feature requests, please create an issue in the GitHub repository.

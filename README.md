# Todo Web App

A responsive Kanban-style Todo web application built with React, TypeScript, and styled-components.

## Features

- Kanban board with To Do, Ongoing, and Completed columns
- Local storage persistence
- Responsive design for all devices
- Modern UI with smooth animations
- TypeScript for type safety

## How to Contribute

Follow these steps to contribute to the project:

### 1. Prepare Your Environment

Make sure you have these installed:
- Node.js (v14 or higher)
- npm or yarn
- Git

### 2. Set Up the Project

```bash
# 1. Fork the repository first on GitHub

# 2. Clone your forked repository
git clone https://github.com/your-username/Todo-WebApp.git

# 3. Enter the project directory
cd Todo-WebApp

# 4. Install dependencies
npm install

# 5. Start the development server
npm start
```

### 3. Create Your Branch

```bash
# Create and switch to a new branch
git checkout -b feature/your-feature-name

# Example:
git checkout -b feature/drag-and-drop
```

### 4. Make Your Changes

1. Write your code
2. Follow our code style:
   - Use TypeScript properly
   - Follow React best practices
   - Style with styled-components
   - Add comments for complex logic
   - Use meaningful names

### 5. Test Your Changes

⚠️ IMPORTANT: Always test before submitting!

```bash
# 1. Run the app locally
npm start

# 2. Test in development
- Test all features you modified
- Test on different screen sizes
- Check browser console for errors
- Verify data persistence
- Test edge cases

# 3. Run test suite
npm test
```

### 6. Commit Your Changes

```bash
# Follow this format:
# type(scope): description

# Examples:
git commit -m "feat(todo): add drag and drop between columns"
git commit -m "fix(storage): resolve local storage sync issue"
git commit -m "docs(readme): update contribution guidelines"
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `test`: Tests
- `chore`: Maintenance

### 7. Submit Your Contribution

```bash
# 1. Push to your fork
git push origin feature/your-feature-name

# 2. Create Pull Request on GitHub
# - Go to the original repository
# - Click "New Pull Request"
# - Select your branch
# - Fill in the PR template
```

### 8. PR Requirements Checklist

- [ ] Tested locally
- [ ] No console errors
- [ ] Responsive design works
- [ ] Code follows style guide
- [ ] Added comments where needed
- [ ] Updated documentation if needed

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

## Need Help?

- Found a bug? Create an issue
- Have questions? Start a discussion
- Want to suggest a feature? Create a feature request

## Technologies

- React 18
- TypeScript 4
- styled-components 6
- Local Storage API

import React, { useState, useEffect } from 'react';
import {
  TodoContainer,
  Column,
  ColumnHeader,
  StatusDot,
  TodoCard,
  TodoTitle,
  TodoDescription,
  TodoMeta,
  DueDate,
  PriorityLabel,
  CreateButton,
} from './styled/TodoStyles';
import TodoForm from './TodoForm';

interface TodoItem {
  id: number;
  title: string;
  description: string;
  status: 'todo' | 'ongoing' | 'completed';
  dueDate: string;
  priority: 'Low' | 'Medium' | 'High';
}

const STORAGE_KEY = 'todoList';

const Todo: React.FC = () => {
  // Initialize state from localStorage or empty array
  const [todos, setTodos] = useState<TodoItem[]>(() => {
    const savedTodos = localStorage.getItem(STORAGE_KEY);
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Save to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const filterTodosByStatus = (status: 'todo' | 'ongoing' | 'completed') => {
    return todos.filter(todo => todo.status === status);
  };

  const moveTask = (id: number, newStatus: 'todo' | 'ongoing' | 'completed') => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, status: newStatus } : todo
    ));
  };

  const handleCreateTodo = (todoData: Omit<TodoItem, 'id' | 'status'>) => {
    const newTodo: TodoItem = {
      ...todoData,
      id: Date.now(),
      status: 'todo',
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <TodoContainer>
        <Column>
          <ColumnHeader>
            <StatusDot status="todo" />
            <h2>To Do</h2>
            <span>({filterTodosByStatus('todo').length})</span>
          </ColumnHeader>
          {filterTodosByStatus('todo').map(todo => (
            <TodoCard
              key={todo.id}
              onClick={() => moveTask(todo.id, 'ongoing')}
            >
              <TodoTitle>{todo.title}</TodoTitle>
              <TodoDescription>{todo.description}</TodoDescription>
              <TodoMeta>
                <DueDate>Due: {todo.dueDate}</DueDate>
                <PriorityLabel priority={todo.priority}>
                  {todo.priority}
                </PriorityLabel>
              </TodoMeta>
            </TodoCard>
          ))}
        </Column>

        <Column>
          <ColumnHeader>
            <StatusDot status="ongoing" />
            <h2>Ongoing</h2>
            <span>({filterTodosByStatus('ongoing').length})</span>
          </ColumnHeader>
          {filterTodosByStatus('ongoing').map(todo => (
            <TodoCard
              key={todo.id}
              onClick={() => moveTask(todo.id, 'completed')}
            >
              <TodoTitle>{todo.title}</TodoTitle>
              <TodoDescription>{todo.description}</TodoDescription>
              <TodoMeta>
                <DueDate>Due: {todo.dueDate}</DueDate>
                <PriorityLabel priority={todo.priority}>
                  {todo.priority}
                </PriorityLabel>
              </TodoMeta>
            </TodoCard>
          ))}
        </Column>

        <Column>
          <ColumnHeader>
            <StatusDot status="completed" />
            <h2>Completed</h2>
            <span>({filterTodosByStatus('completed').length})</span>
          </ColumnHeader>
          {filterTodosByStatus('completed').map(todo => (
            <TodoCard key={todo.id}>
              <TodoTitle>{todo.title}</TodoTitle>
              <TodoDescription>{todo.description}</TodoDescription>
              <TodoMeta>
                <DueDate>Due: {todo.dueDate}</DueDate>
                <PriorityLabel priority={todo.priority}>
                  {todo.priority}
                </PriorityLabel>
              </TodoMeta>
            </TodoCard>
          ))}
        </Column>
      </TodoContainer>

      <CreateButton onClick={() => setIsFormOpen(true)}>+</CreateButton>

      {isFormOpen && (
        <TodoForm
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleCreateTodo}
        />
      )}
    </>
  );
};

export default Todo; 
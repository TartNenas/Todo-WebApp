import React, { useState, useEffect } from 'react';
import {
  MainLayout,
  AppContainer,
  ContentWrapper,
  ContentArea,
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
  StyledButton,
} from './styled/TodoStyles';
import TodoForm from './TodoForm';
import WeeklyTodo from './WeeklyTodo';
import Sidebar from './Sidebar';

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
  const [selectedColumn, setSelectedColumn] = useState<'todo' | 'ongoing' | 'completed'>('todo');

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
      status: selectedColumn,
    };
    setTodos([...todos, newTodo]);
  };

  const openFormForColumn = (status: 'todo' | 'ongoing' | 'completed') => {
    setSelectedColumn(status);
    setIsFormOpen(true);
  };

  return (
    <MainLayout>
      <AppContainer>
        <Sidebar />
        <ContentWrapper>
          <ContentArea>
            <WeeklyTodo />
            <TodoContainer>
              <Column>
                <ColumnHeader>
                  <StatusDot status="todo" />
                  <h2>To Do</h2>
                  <span>({filterTodosByStatus('todo').length})</span>
                  <StyledButton onClick={() => openFormForColumn('todo')} style={{ marginLeft: 'auto' }}>
                    + Add Todo
                  </StyledButton>
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
                  <StyledButton onClick={() => openFormForColumn('ongoing')} style={{ marginLeft: 'auto' }}>
                    + Add Todo
                  </StyledButton>
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
                  <StyledButton onClick={() => openFormForColumn('completed')} style={{ marginLeft: 'auto' }}>
                    + Add Todo
                  </StyledButton>
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
          </ContentArea>
        </ContentWrapper>
      </AppContainer>

      {isFormOpen && (
        <TodoForm
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleCreateTodo}
        />
      )}
    </MainLayout>
  );
};

export default Todo;
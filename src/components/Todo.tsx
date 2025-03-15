import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDrag, useDrop } from 'react-dnd';
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
import RoutineTodo from './RoutineTodo';
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
const ItemTypes = {
  CARD: 'card'
};

interface DraggableCardProps {
  todo: TodoItem;
  moveTask: (id: number, newStatus: 'todo' | 'ongoing' | 'completed') => void;
  handleDeleteTask: (id: number) => void;
}

const DraggableCard: React.FC<DraggableCardProps> = ({ todo, moveTask, handleDeleteTask }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { id: todo.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <TodoCard>
        <TodoTitle>{todo.title}</TodoTitle>
        <TodoDescription>{todo.description}</TodoDescription>
        <TodoMeta>
          <DueDate>Due: {todo.dueDate}</DueDate>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <PriorityLabel priority={todo.priority}>
              {todo.priority}
            </PriorityLabel>
            <StyledButton
              variant="secondary"
              onClick={(e) => {
                e.stopPropagation();
                if (window.confirm('Are you sure you want to delete this task?')) {
                  handleDeleteTask(todo.id);
                }
              }}
              style={{ padding: '4px 8px', minWidth: 'auto' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
              </svg>
            </StyledButton>
          </div>
        </TodoMeta>
      </TodoCard>
    </div>
  );
};

interface DroppableColumnProps {
  status: 'todo' | 'ongoing' | 'completed';
  children: React.ReactNode;
  onDrop: (itemId: number) => void;
}

const DroppableColumn: React.FC<DroppableColumnProps> = ({ status, children, onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    drop: (item: { id: number }) => onDrop(item.id),
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  }));

  return (
    <div ref={drop} style={{ height: '100%', opacity: isOver ? 0.8 : 1 }}>
      {children}
    </div>
  );
};

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>(() => {
    const savedTodos = localStorage.getItem(STORAGE_KEY);
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState<'todo' | 'ongoing' | 'completed'>('todo');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const handleDeleteTask = (id: number) => {
    setTodos(prevTodos => {
      const updatedTodos = prevTodos.filter(todo => todo.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const filterTodosByStatus = (status: 'todo' | 'ongoing' | 'completed') => {
    return todos.filter(todo => todo.status === status);
  };

  const moveTask = (id: number, newStatus: 'todo' | 'ongoing' | 'completed') => {
    setTodos(prevTodos => {
      const movedTodo = prevTodos.find(todo => todo.id === id);
      if (!movedTodo) return prevTodos;
  
      // Remove the moved todo from the array
      const todosWithoutMoved = prevTodos.filter(todo => todo.id !== id);
      
      // Get all todos that will be in the target status column
      const todosInTargetStatus = todosWithoutMoved.filter(todo => todo.status === newStatus);
      
      // Get all other todos
      const otherTodos = todosWithoutMoved.filter(todo => todo.status !== newStatus);
      
      // Create the updated todo with new status
      const updatedTodo = { ...movedTodo, status: newStatus };
      
      // Return the new array with the moved todo at the end of its status group
      return [
        ...otherTodos,
        ...todosInTargetStatus,
        updatedTodo
      ];
    });
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
    <DndProvider backend={HTML5Backend}>
      <MainLayout>
        <AppContainer>
          <Sidebar />
          <ContentWrapper>
            <ContentArea>
              <RoutineTodo />
              <TodoContainer>
                <DroppableColumn status="todo" onDrop={(id) => moveTask(id, 'todo')}>
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
                      <DraggableCard key={todo.id} todo={todo} moveTask={moveTask} handleDeleteTask={handleDeleteTask} />
                    ))}
                  </Column>
                </DroppableColumn>

                <DroppableColumn status="ongoing" onDrop={(id) => moveTask(id, 'ongoing')}>
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
                      <DraggableCard key={todo.id} todo={todo} moveTask={moveTask} handleDeleteTask={handleDeleteTask} />
                    ))}
                  </Column>
                </DroppableColumn>

                <DroppableColumn status="completed" onDrop={(id) => moveTask(id, 'completed')}>
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
                      <DraggableCard key={todo.id} todo={todo} moveTask={moveTask} handleDeleteTask={handleDeleteTask} />
                    ))}
                  </Column>
                </DroppableColumn>
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
    </DndProvider>
  );
};

export default Todo;
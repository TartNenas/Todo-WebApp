import React, { useState, useEffect } from 'react';
import {
  RoutineContainer,
  RoutineHeader,
  TaskList,
  TableHeader,
  TaskRow,
  Checkbox,
  TaskName,
  TaskStatus,
  TaskCategory,
  EmptyMessage,
} from './styled/RoutineTodoStyles';
import { StyledButton, Modal, ModalContent, Form, FormGroup, Label, Input, Select, ButtonGroup } from './styled/TodoStyles';
import { useRoutine } from '../context/RoutineContext';

interface RoutineTask {
  id: number;
  text: string;
  completed: boolean;
  status: 'not-started' | 'in-progress' | 'done';
  category: string;
}

const RoutineTodo: React.FC = () => {
  const { selectedRoutine } = useRoutine();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    text: '',
    category: 'Personal',
  });
  
  // Separate state for each routine type
  const [weeklyTasks, setWeeklyTasks] = useState<RoutineTask[]>(() => {
    const saved = localStorage.getItem('weeklyTasks');
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  });
  
  const [morningTasks, setMorningTasks] = useState<RoutineTask[]>(() => {
    const saved = localStorage.getItem('morningTasks');
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  });
  
  const [nightTasks, setNightTasks] = useState<RoutineTask[]>(() => {
    const saved = localStorage.getItem('nightTasks');
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  });

  // Get the current tasks based on selected routine
  const getCurrentTasks = () => {
    switch (selectedRoutine) {
      case 'weekly':
        return weeklyTasks;
      case 'morning':
        return morningTasks;
      case 'night':
        return nightTasks;
      default:
        return weeklyTasks;
    }
  };

  // Set the current tasks based on selected routine
  const setCurrentTasks = (tasks: RoutineTask[]) => {
    switch (selectedRoutine) {
      case 'weekly':
        setWeeklyTasks(tasks);
        break;
      case 'morning':
        setMorningTasks(tasks);
        break;
      case 'night':
        setNightTasks(tasks);
        break;
    }
  };

  // Save tasks to localStorage when they change
  useEffect(() => {
    localStorage.setItem('weeklyTasks', JSON.stringify(weeklyTasks));
  }, [weeklyTasks]);

  useEffect(() => {
    localStorage.setItem('morningTasks', JSON.stringify(morningTasks));
  }, [morningTasks]);

  useEffect(() => {
    localStorage.setItem('nightTasks', JSON.stringify(nightTasks));
  }, [nightTasks]);

  const toggleTask = (taskId: number) => {
    const tasks = getCurrentTasks();
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        const completed = !task.completed;
        return {
          ...task,
          completed,
          status: completed ? 'done' as const : 'not-started' as const
        };
      }
      return task;
    });
    setCurrentTasks(updatedTasks);
  };

  const deleteTask = (taskId: number) => {
    const tasks = getCurrentTasks();
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setCurrentTasks(updatedTasks);
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    const newRoutineTask: RoutineTask = {
      id: Date.now(),
      text: newTask.text,
      completed: false,
      status: 'not-started',
      category: newTask.category
    };
    
    const tasks = getCurrentTasks();
    setCurrentTasks([...tasks, newRoutineTask]);
    setNewTask({ text: '', category: 'Personal' });
    setIsFormOpen(false);
  };

  // Get the title and icon based on selected routine
  const getRoutineTitle = () => {
    switch (selectedRoutine) {
      case 'weekly':
        return {
          title: 'Weekly Tasks',
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
            </svg>
          )
        };
      case 'morning':
        return {
          title: 'Morning Routine',
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
            </svg>
          )
        };
      case 'night':
        return {
          title: 'Night Routine',
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
            </svg>
          )
        };
      default:
        return {
          title: 'Weekly Tasks',
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
            </svg>
          )
        };
    }
  };

  const { title, icon } = getRoutineTitle();
  const tasks = getCurrentTasks();

  return (
    <RoutineContainer>
      <RoutineHeader routineType={selectedRoutine}>
        <h2>
          {icon}
          {title}
        </h2>
        <StyledButton onClick={() => setIsFormOpen(true)} style={{ marginLeft: 'auto' }}>
          + Add Task
        </StyledButton>
      </RoutineHeader>
      <TaskList>
        <TableHeader>
          <div></div>
          <div>Name</div>
          <div>Status</div>
          <div>Category</div>
          <div>Actions</div>
        </TableHeader>
        {tasks.length === 0 ? (
          <EmptyMessage>No tasks</EmptyMessage>
        ) : (
          tasks.map(task => (
            <TaskRow key={task.id}>
              <Checkbox
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <TaskName>{task.text}</TaskName>
              <TaskStatus status={task.status}>
                {task.status === 'not-started' ? 'Not started' : 
                 task.status === 'in-progress' ? 'In progress' : 'Done'}
              </TaskStatus>
              <TaskCategory>{task.category}</TaskCategory>
              <div style={{ textAlign: 'center' }}>
                <StyledButton
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteTask(task.id);
                  }}
                  variant="secondary"
                  style={{ padding: '4px 8px', minWidth: 'auto' }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                  </svg>
                </StyledButton>
              </div>
            </TaskRow>
          ))
        )}
      </TaskList>

      {isFormOpen && (
        <Modal onClick={() => setIsFormOpen(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <Form onSubmit={handleAddTask}>
              <FormGroup>
                <Label>Task Name</Label>
                <Input
                  type="text"
                  value={newTask.text}
                  onChange={(e) => setNewTask({ ...newTask, text: e.target.value })}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Category</Label>
                <Select
                  value={newTask.category}
                  onChange={e => setNewTask({ ...newTask, category: e.target.value })}
                >
                  <option value="Personal">Personal</option>
                  <option value="Work/School">Work/School</option>
                  <option value="Health & Wellness">Health & Wellness</option>
                  <option value="Fitness">Fitness</option>
                  <option value="Cooking">Cooking</option>
                </Select>
              </FormGroup>

              <ButtonGroup>
                <StyledButton type="button" variant="secondary" onClick={() => setIsFormOpen(false)}>
                  Cancel
                </StyledButton>
                <StyledButton type="submit">
                  Add Task
                </StyledButton>
              </ButtonGroup>
            </Form>
          </ModalContent>
        </Modal>
      )}
    </RoutineContainer>
  );
};

export default RoutineTodo;
import React, { useState, useEffect } from 'react';
import {
  WeeklyContainer,
  WeeklyHeader,
  TaskList,
  TableHeader,
  TaskRow,
  Checkbox,
  TaskName,
  TaskStatus,
  TaskCategory,
  EmptyMessage,
} from './styled/WeeklyTodoStyles';
import { StyledButton, Modal, ModalContent, Form, FormGroup, Label, Input, Select, ButtonGroup } from './styled/TodoStyles';

interface WeeklyTask {
  id: number;
  text: string;
  completed: boolean;
  status: 'not-started' | 'in-progress' | 'done';
  category: string;
}

const WeeklyTodo: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newTask, setNewTask] = useState({
    text: '',
    category: 'Personal',
  });
  const [tasks, setTasks] = useState<WeeklyTask[]>(() => {
    const saved = localStorage.getItem('weeklyTasks');
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('weeklyTasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = (taskId: number) => {
    setTasks(prev => prev.map(task => {
      if (task.id === taskId) {
        const completed = !task.completed;
        return {
          ...task,
          completed,
          status: completed ? 'done' : 'not-started'
        };
      }
      return task;
    }));
  };

  const deleteTask = (taskId: number) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    const newWeeklyTask: WeeklyTask = {
      id: Date.now(),
      text: newTask.text,
      completed: false,
      status: 'not-started',
      category: newTask.category
    };
    setTasks([...tasks, newWeeklyTask]);
    setNewTask({ text: '', category: 'Personal' });
    setIsFormOpen(false);
  };

  return (
    <WeeklyContainer>
      <WeeklyHeader>
        <h2>
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
          </svg>
          Weekly Tasks
        </h2>
        <StyledButton onClick={() => setIsFormOpen(true)} style={{ marginLeft: 'auto' }}>
          + Add Task
        </StyledButton>
      </WeeklyHeader>
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
    </WeeklyContainer>
  );
};

export default WeeklyTodo;
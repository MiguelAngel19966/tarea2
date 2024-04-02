import React, { useState } from 'react';
import TaskList from './TaskList';

const Principal = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Hacer la compra para el almuerzo', status: false },
        { id: 2, text: 'Hacer ejercicio por las mañanas', status: false },
        { id: 3, text: 'Leer un libro', status: false }
    ]);
    const [newTaskText, setNewTaskText] = useState('');

    const completarTarea = (taskId) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return { ...task, status: true };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const agregarNuevaTarea = () => {
        if (!newTaskText.trim()) return;

        const nuevaTarea = {
            id: tasks.length + 1,
            text: newTaskText,
            status: false
        };
        setTasks([...tasks, nuevaTarea]);
        setNewTaskText(''); 
    };

    return (
        <div className="container">
            <h1>Lista de Tareas</h1>
            <TaskList tasks={tasks} completarTarea={completarTarea} />
            <div>
                <input
                    type="text"
                    value={newTaskText}
                    onChange={(e) => setNewTaskText(e.target.value)}
                    placeholder="Escribe una nueva tarea"
                />
                <button onClick={agregarNuevaTarea}>Agregar Tarea</button>
            </div>
        </div>
    );
};

export default Principal;

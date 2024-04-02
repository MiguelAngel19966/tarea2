import React from "react";
import "./index.css";

const TaskList = ({ tasks, completarTarea }) => {
    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li
                    key={task.id}
                    className={`task-item ${task.status ? "completed" : ""}`}
                >
                    {task.text}
                    <button onClick={() => completarTarea(task.id)}>
                        Completar
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;

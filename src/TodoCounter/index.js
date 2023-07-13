import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
    const {
        completedTodos,
        totalTodos
    } = React.useContext(TodoContext)
    let message = `Has completado ${completedTodos} de ${totalTodos} TODOS`;

    if (completedTodos === totalTodos) {
        message = "¡Felicitaciones! ¡Completaste todo!";
    }

    return <h1>{message}</h1>;
}

export { TodoCounter };

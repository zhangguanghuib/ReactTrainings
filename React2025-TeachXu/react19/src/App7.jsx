/* eslint-disable no-unused-vars */
import { useState, useOptimistic, startTransition } from "react";

function TaskList() {
    const [tasks, setTasks] = useState([]);

    const [optimisticState, addOptimistic] = useOptimistic(tasks, (currentTasks, newTask) => {
        return [...currentTasks, newTask];
    });

    const addTask = (task) => {
        startTransition( async () => {
            try {
                addOptimistic(task);
                await fakeApi(task);
                setTasks((current) => [...current, task]);
            } catch (error) {
                console.error("Error adding task:", error);
            }
        });
    };
    return (
        <div>
            <h1>代办事项列表</h1>
            <uL>
                {optimisticState.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </uL>
            <button onClick={()=> addTask("新任务")}>添加任务</button>
        </div>
    )
}

function fakeApi(task) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.5) {
                console.log(1);
                resolve(task);
            }
            else {
                console.log(2);
                reject(new Error("添加任务失败"));
            }
        }, 1000)
    });
};

export default TaskList;
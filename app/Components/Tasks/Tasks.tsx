"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import React from "react";
// import CreateContent from "../Modals/CreateContent";
// import TaskItem from "../TaskItem/TaskItem";
import { add, plus } from "@/app/utils/Icons";
// import Modal from "../Modals/Modal";
import { TaskStyled } from "./Tasks.style";
import CreateContent from "../Modals/CreateContent";

interface Props {
    title: string;
    tasks: { id: string; title: string; description: string; date: string; isCompleted: boolean }[];
}

function Tasks({ title, tasks }: Props) {
    const { theme, isLoading, openModal, modal } = useGlobalState();

    return (
        <TaskStyled theme={theme}>
            {/* {modal && <Modal content={<CreateContent />} />} */}
            {/* <h1>{title}</h1>

            <button className="btn-rounded" onClick={openModal}>
                {plus}
            </button> */}

            {/* <div className="tasks grid">
                {tasks.map((task) => (
                    <div>Single Taks</div>
                    // <TaskItem
                    //     key={task.id}
                    //     title={task.title}
                    //     description={task.description}
                    //     date={task.date}
                    //     isCompleted={task.isCompleted}
                    //     id={task.id}
                    // />
                ))}
                <button className="create-task" onClick={openModal}>
                    {add}
                    Add New Task
                </button>
            </div> */}

            <CreateContent />
        </TaskStyled>
    );
}


export default Tasks;
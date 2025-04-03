"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { add } from "@/app/utils/Icons";
import {
    Button,
    FormStyled,
    HeadingStyled,
    InputControlStyled,
    SubmitButtonWrapperStyled,
    TogglerStyled,
} from "./CreateContent.style";

function CreateContent() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [completed, setCompleted] = useState(false);
    const [important, setImportant] = useState(false);

    const { theme, allTasks, closeModal } = useGlobalState();

    const handleChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, type } = e.target;
        const inputElement = e.target as HTMLInputElement;

        if (type === "checkbox") {
            if (inputElement.name === "completed") setCompleted(inputElement.checked);
            if (inputElement.name === "important") setImportant(inputElement.checked);
        } else {
            switch (name) {
                case "title":
                    setTitle(value);
                    break;
                case "description":
                    setDescription(value);
                    break;
                case "date":
                    setDate(value);
                    break;
                default:
                    break;
            }
        }
    };



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const task = { title, description, date, completed, important };

        try {
            const res = await fetch("/api/tasks", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(task),
            });

            const data = await res.json();

            if (data.error) {
                toast.error(data.error);
            } else {
                toast.success("Task created successfully.");
                allTasks();  // Ensure allTasks is correctly typed and exists in your global state context
                closeModal();
            }
        } catch (error) {
            toast.error("Something went wrong.");
            console.error(error);
        }
    };

    return (
        <FormStyled onSubmit={handleSubmit} theme={theme}>
            <HeadingStyled>Create a Task</HeadingStyled>
            <InputControlStyled>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    name="title"
                    onChange={handleChange("title")}
                    placeholder="e.g., Watch a video from Fireship."
                />
            </InputControlStyled>
            <InputControlStyled>
                <label htmlFor="description">Description</label>
                <textarea
                    value={description}
                    onChange={handleChange("description")}
                    name="description"
                    id="description"
                    rows={4}
                    placeholder="e.g., Watch a video about Next.js Auth"
                />
            </InputControlStyled>
            <InputControlStyled>
                <label htmlFor="date">Date</label>
                <input
                    type="date"
                    value={date}
                    onChange={handleChange("date")}
                    name="date"
                    id="date"
                />
            </InputControlStyled>
            <TogglerStyled>
                <label htmlFor="completed">Toggle Completed</label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={handleChange("completed")}
                    name="completed"
                    id="completed"
                />
            </TogglerStyled>
            <TogglerStyled>
                <label htmlFor="important">Toggle Important</label>
                <input
                    type="checkbox"
                    checked={important}
                    onChange={handleChange("important")}
                    name="important"
                    id="important"
                />
            </TogglerStyled>

            <SubmitButtonWrapperStyled>
                <Button type="submit">
                    <span>{add}</span> Create Task
                </Button>
            </SubmitButtonWrapperStyled>
        </FormStyled>
    );
}

export default CreateContent;

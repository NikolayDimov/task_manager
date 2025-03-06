import Tasks from "./Components/Tasks/Tasks";

export default function Home() {
  const title = "Important Tasks";

  const tasks = [
    { id: "1", title: "Task 1", description: "Description for task 1", date: "2025-03-06", isCompleted: false },
    { id: "2", title: "Task 2", description: "Description for task 2", date: "2025-03-07", isCompleted: true },
  ];

  return (
    <Tasks title={title} tasks={tasks} />
  );
}

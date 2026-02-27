"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("Not logged in");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Failed to fetch tasks");
        return;
      }

      setTasks(data);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Server error");
    }
  };

  const addTask = async () => {
    if (!title.trim()) return;

    const token = localStorage.getItem("token");

    try {
      const res = await fetch("http://localhost:3001/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          description: "",
          status: "pending",
          priority: "medium",
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.message || "Failed to add task");
        return;
      }

      setTitle("");
      fetchTasks();
    } catch (err) {
      console.error(err);
      setError("Server error");
    }
  };

  const deleteTask = async (id) => {
    const token = localStorage.getItem("token");

    try {
      await fetch(`http://localhost:3001/tasks/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const startEdit = (task) => {
    setEditingId(task._id);
    setEditingTitle(task.title);
  };

  const saveEdit = async (id) => {
    const token = localStorage.getItem("token");

    try {
      await fetch(`http://localhost:3001/tasks/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title: editingTitle }),
      });

      setEditingId(null);
      setEditingTitle("");
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Task Manager Dashboard</h1>

      {error && (
        <p style={{ color: "red", marginBottom: "15px" }}>
          {error}
        </p>
      )}

      <div style={{ marginBottom: "20px" }}>
        <input
          placeholder="Enter task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={addTask} style={{ marginLeft: "10px" }}>
          Add Task
        </button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task._id} style={{ marginBottom: "10px" }}>
            {editingId === task._id ? (
              <>
                <input
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                />
                <button onClick={() => saveEdit(task._id)}>
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{task.title}</span>
                <button
                  onClick={() => startEdit(task)}
                  style={{ marginLeft: "10px" }}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(task._id)}
                  style={{ marginLeft: "5px" }}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
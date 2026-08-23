import { useState } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import ProjectForm from "./components/ProjectForm/ProjectForm";
import ProjectList from "./components/ProjectList/ProjectList";
import "./styles/App.css";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Drifting",
      category: "Drifting",
      description: "Making one car drift is a task doing it with another on the side is mastery",
      image:
        "https://images.unsplash.com/photo-1536909526839-8f10e29ba80c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      title: "Ecommerce Website",
      category: "Development",
      description: "React online store",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const addProject = (project) => {
    setProjects((prev) => [
      {
        ...project,
        id: Date.now()
      },
      ...prev
    ]);
  };

  const filteredProjects = projects.filter(
    (project) =>
      project.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      project.category
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <ProjectForm addProject={addProject} />

      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;
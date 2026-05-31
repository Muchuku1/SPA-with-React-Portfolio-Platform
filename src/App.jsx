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
      title: "Blog Articles",
      category: "Article writing",
      description: "We help clients update and maintain the current knowledge of the industry's standards",
      image:
        "https://plus.unsplash.com/premium_photo-1720744786849-a7412d24ffbf?q=80&w=809&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
import { useState } from "react";

function ProjectForm({ addProject }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    image: "",
    description: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    addProject(formData);

    setFormData({
      title: "",
      category: "",
      image: "",
      description: ""
    });
  };

  return (
    <form
      className="project-form"
      onSubmit={handleSubmit}
    >
      <input
        placeholder="Title"
        value={formData.title}
        onChange={(e) =>
          setFormData({
            ...formData,
            title: e.target.value
          })
        }
      />

      <input
        placeholder="Category"
        value={formData.category}
        onChange={(e) =>
          setFormData({
            ...formData,
            category: e.target.value
          })
        }
      />

      <input
        placeholder="Image URL"
        value={formData.image}
        onChange={(e) =>
          setFormData({
            ...formData,
            image: e.target.value
          })
        }
      />

      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) =>
          setFormData({
            ...formData,
            description: e.target.value
          })
        }
      />

      <button>Add Project</button>
    </form>
  );
}

export default ProjectForm;
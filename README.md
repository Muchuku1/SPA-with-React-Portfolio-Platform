This is a Single Page Application(SPA) showcasing a creative Agency's projects and one is able to add more projects on the form.

1. The SPA loads with two locally stored projects and one can view them and search for them on the searchbar.
2. Storage functionality; The user fills out the form on the ProjectForm and the projects is stored locally in the useState Array.
3. Searching - The user types in the project of choice in the searchBar which updates the state and filters projects in App.jsx. Only matching projects are passed to ProjectList
4. Rendering - ProjectList receives filtered projects and renders them using ProjectCard.

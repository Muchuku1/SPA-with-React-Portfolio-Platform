This is a Single Page Application(SPA) showcasing a creative Agency's projects and one is able to add more projects on the form.

**Technologies used:**
1. React.js
2. VS code Application
3. CSS
4. Version Control: Git $ GitHub

1. Initial Page Landing: 
   - The app loads with two projects stored locally in the application state.
2. Project Storage (`useState`):
   - Users can add new projects via the `ProjectForm` component. 
   - Submitted project details are seamlessly appended to the main projects array held in React state.
3. Real-time Search & Filtering:
   - Users can search for projects by title/keyword using the `SearchBar` component.
   - Updates to the search bar dynamically filter the central project list in `App.jsx`, ensuring only matching items are passed to the gallery display.
4. Component-driven Rendering:
   - `ProjectList` receives the filtered project data from state and dynamically maps over each item, rendering it using individual `ProjectCard` components.

**SETUP INSTRUCTION**

1. Open VS code and open your terminal, navigate to an empty folder or create one using `cd` or `mkdir`.

2. Clone the repository to your local folder on your machine using:

  git clone git@github.com:Muchuku1/SPA-with-React-Portfolio-Platform.git

3. Move to the child folder.

4. Install the node modules using `npm i`

5. Run the project while inside the directory which had the node modules and use the command 
  `npm run dev`



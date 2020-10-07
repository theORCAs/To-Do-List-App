ASTS Development Task
Main objectives
The objective is to build a simple To-Do list app, which is generally used for intro to many software stacks. It should have at minimum the following features:
-	Main dashboard with list of To-Dos
-	Clicking on a single To-do should open up and show full details of the To-do
-	Interface to add a new To-Do item, with the following information:
        *	Title
        *	Description
        *	Optional Due Date/Time field
-	User should be able to delete the to-do from the to-do details or the main dashboard page
Stretch-goals

In case the candidate has completed the other requirements quickly and wants to put some extended features into the app, the following requirements are suggested (Note: These are not required for completion of the assessment)
-	Attach any files to to-do item (example: image, pdf etc.)
-	Add priority to the to-do item (High/Medium/Low)
-	Filter/Sort on the main dashboard based on due-date and any other attributes of the To-do item
-	Fuzzy search on the title/description of the To-do list (OSS libraries are available for this)
Technology Stack
-	Backend:
        *	NodeJS/Typescript
        *	NestJS https://nestjs.com/ 
        *	(Optional) Unit tests
-	Database
        *	TypeORM or SequelizeORM 
        *	PostgreSQL 
-	Front-end
        *	React/Typescript
        *	ANY UI library can be used (e.g. Bootstrap, MaterialUI, SemanticUI etc)
        *	(Optional) Redux
-	Typescript must be used for the react and NestJS projects
Other requirements
-	UI design is left completely up-to the candidate
-	Git must be used to upload the completed code
-	Minimum documentation should be given in the readme.md so that another developer can download the code and run it locally

## Backend
        *	NodeJS/Typescript
        *	NestJS https://nestjs.com/ 
        *	(Optional) Unit tests with JEST
        *       TypeORM for Object-relational mapping with database
## Database
        *       PostgreSQL(depends on the user's choice)
## Frontend
        *       ReactJS/Typescipt
        *       React Hooks
        *       Bootstrap
        *       React-Modal for popups
        *       react-select for easy and useful combobox selection 
        *       toastify for error messaging operations

## Testing
        *       Jest

## User Screen Operations
        *       User Can add new todo to list with Add new Item button. It opens a popup and we select and fill the info and sent to server create api
        *       Added priority as a combobox for adding item to todo list 
        *       Search textbox added on the top field. User can searc writing title, description or duedate and it will search easily all of todos from the list
        *       User can delete items from the list using Delete button
        *       User can see the details of issues by clicking on related issue line 
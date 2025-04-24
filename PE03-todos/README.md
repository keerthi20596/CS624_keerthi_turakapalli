# Input  
The application begins with a simple input interface where users can type in a to-do task. The input field accepts a text string and is connected to the application's internal state using React’s `useState` hook. Upon entering a task, the user can click the "Submit" button to add it to the task list.

# Process  
When a user submits a task, the app creates a new task object and stores it in an array of tasks maintained in the state. Each task can be marked as "Done" or removed entirely via the "Delete" button. The task list is dynamically rendered based on the state. Button actions are handled via event-driven functions that modify the state accordingly. The app also categorizes tasks into All, Active, or Complete (if implemented).

# Output  
The UI reflects real-time updates of the to-do list. Tasks are displayed below the input field with their status and action buttons. The app logs task actions in the console for debugging.

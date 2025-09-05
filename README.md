# Yeroo ToDo List

A modern and responsive To-Do List web application built with HTML, CSS, and JavaScript. This app allows users to add, edit, delete, and mark tasks as completed, with data persistence using localStorage.

![Yeroo ToDo List](asset\Screenshot main-view.png)

## 🌟 Features

- **Add Tasks**: Quickly add tasks using the input field and press Enter or click the "Add Task" button.
- **Edit Tasks**: Edit existing tasks via a modal popup with a save option.
- **Delete Tasks**: Remove tasks with a single click on the trash icon.
- **Mark as Completed**: Check tasks as done to apply a strikethrough effect.
- **Persistent Storage**: Tasks are saved in localStorage and persist across browser sessions.
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices.
- **Modern UI**: Features gradient backgrounds, hover effects, and smooth transitions.
- **Keyboard Support**: Press Enter to add tasks or save edits in the modal.

## 🖥️ Demo

Open the `index.html` file in a web browser to view the app live. Alternatively, deploy it to a hosting service like GitHub Pages or Netlify for online access.

![Mobile View](asset\Screenshot mobile-view.png)
*Mobile responsive design*

## 🛠️ Technologies Used

- **HTML5**: Structure of the application.
- **CSS3**: Styling, responsive design, and animations.
- **JavaScript (ES6+)**: Core functionality, DOM manipulation, and localStorage for data persistence.
- **Font Awesome**: Icons for edit, delete, and add actions.

## 📂 Project Folder Structure

```
ToDoApp/
├── index.html          # Main HTML file
├── assets/
│   ├── screenshot.png  # Main app screenshot
│   └── mobile-view.png # Mobile responsive screenshot
├── style/
│   └── style.css       # CSS styles for the app
├── script/
│   └── main.js         # JavaScript logic for functionality
└── README.md           # Project documentation
```

## ⚡ Usage

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Edge).
- No additional software or dependencies are required, as the app runs entirely in the browser.

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/FiraolDug/ToDoApp.git
   ```

2. Navigate to the project folder:
   ```bash
   cd ToDoApp
   ```

3. Open `index.html` in a web browser:
   - Double-click `index.html`, or
   - Use a local server (e.g., `python -m http.server 8000` or Live Server in VS Code) for a better experience.

### How to Use

- **Add Tasks**:
  1. Type your task in the input field.
  2. Press Enter or click the "Add Task" button to add it to the list.

- **Edit Tasks**:
  1. Click the edit icon (✏️) next to a task.
  2. Update the task text in the modal popup.
  3. Click "Save" or press Enter to confirm changes, or click "Cancel" to discard.

- **Delete Tasks**:
  1. Click the trash icon (🗑️) next to a task to remove it.

- **Mark as Completed**:
  1. Check the checkbox next to a task to mark it as completed (applies a strikethrough effect).

## 🔧 Customization

- **Change Theme Colors**: Modify the gradient background or button styles in `style/style.css` (e.g., update the background property in the body or .container selectors).
- **Modify Task Structure**: Add fields like due dates or categories by updating the task object in `script/main.js`.
- **Enhance Modal Design**: Adjust the modal's appearance in `style/style.css` (e.g., change padding, colors, or animations).
- **Add Features**: Extend functionality (e.g., task categories, priorities, or filters) by modifying `script/main.js`.

## 👨‍💻 Author

**Firaol Dugassa** – Made with ❤️  
GitHub: [https://github.com/FiraolDug](https://github.com/FiraolDug)

## 📜 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 🚀 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.
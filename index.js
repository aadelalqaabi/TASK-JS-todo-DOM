// You do not need to change the constants
const CATEGORY_SELECTOR = "categories-list";
const CATEGORY_FILTER = "categories-list-filter";

let tasks = [];
let categories = [];
let doneTasks = [];

categories = ["Movies", "Groceries"];
// SAMPLE
renderCategories(categories, CATEGORY_SELECTOR);
renderCategories(categories, CATEGORY_FILTER);
renderTasks(tasks, "tasks-list");

function taskChecked(taskId, checked) {
  if (checked === true) {
    doneTasks.push(tasks.filter((task) => task.id === taskId));
    doneTasks.forEach((task) => (task.done = true));
    tasks.splice(taskId, 1);
    renderTasks(tasks, "tasks-list");
  } else if (tasks.length < 1) {
    tasks = [];
    renderTasks(tasks, "tasks-list");
  }
  renderTasks(tasks, "tasks-list");
}

function addTask() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_SELECTOR);
  const taskTitle = getNewTaskText();
  console.log(done);
  let id = 0;
  tasks.push({
    id: 0,
    title: taskTitle,
    category: selectedCategory,
    done: false,
  });
  tasks.forEach((task) => (task.id = id++));
  renderTasks(tasks, "tasks-list");
  console.log(tasks);
}

function addCategory() {
  const newCategory = getNewCategoryText();
  categories.push(newCategory);

  renderCategories(categories, CATEGORY_SELECTOR);
  renderCategories(categories, CATEGORY_FILTER);
}

function filterTasks() {
  const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);
  const done = getFilteredDone();
  let filtered = tasks.filter((task) => task.category === selectedCategory);
  renderCategories(categories, CATEGORY_SELECTOR);
  renderCategories(categories, CATEGORY_FILTER);
  renderTasks(filtered, "tasks-list");
  if (done === true) {
    let doneTask = doneTasks.filter((task) => task.done === true);

    renderCategories(categories, CATEGORY_SELECTOR);
    renderCategories(categories, CATEGORY_FILTER);
    renderTasks(doneTask, "tasks-list");
  }
}

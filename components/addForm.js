import renderToDom from "../Utils/renderToDom.js";


// add form function
const addForm = () => {
  const domString = `<form>
  <div class="mb-3">
    <label for="first-name-last-name" class="form-label">Enter your name!</label>
    <input type="name" class="form-control" id="student-name">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;
  renderToDom('#enter-student-form', domString);
}

export default addForm

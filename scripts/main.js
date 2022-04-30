import renderToDom from "../Utils/renderToDom.js"
import addForm from "/components/addForm.js"
import addButtons from "/components/addButtons.js"
import students from "../Data/Students.js"
import cardsOnDom from "../components/cardsOnDom.js"

//cardsOnDom function


//event listeners
const eventListeners = () => {
//sortingHat    
  const form = document.querySelector("#enter-student-form");
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const houses = ['Ravenclaw', 'Gryffindor', 'Slytherin', 'Hufflepuff'];
    
    const randomHouse = houses[Math.floor(Math.random() * houses.length)];

    let houseColor = ""
    if (randomHouse === houses[0]) {
      houseColor = 'blue'
    } else if (randomHouse === houses[1]) {
      houseColor = 'gold'
    } else if (randomHouse === houses[2]) {
      houseColor = 'green'
    } else {
      houseColor = 'yellow'
    }

    const newStudent = {
      student_id: students.length,
      name: document.querySelector('#name').value,
      color: houseColor,
      house: randomHouse,
      expelled: false

    };

    students.push(newStudent);
    console.log(students);
    form.reset();

  });
//filterbuttons

//expel student function

}



    addForm()
    addButtons()
    cardsOnDom()
    eventListeners()

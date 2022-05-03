import students from "../Data/Students.js";
import cardsOnDom from "./cardsOnDom.js";

const eventListeners = () => {
  //sortingHat    
    const form = document.querySelector("form");
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const houses = ['Ravenclaw', 'Gryffindor', 'Slytherin', 'Hufflepuff'];
      
      let randomHouse = houses[Math.floor(Math.random() * houses.length)];
  
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
        student_id: students.length + 1,
        name: document.querySelector('#student-name').value,
        color: houseColor,
        house: randomHouse,
        expelled: false,
        
  
      };
  
      students.push(newStudent);
      cardsOnDom(students);
      console.log(students);
      
      form.reset();
      
      
  
    });

    document.querySelector("#filter-btns").addEventListener('click', (e) => {
      if (e.target.id === 'select-all') {
        cardsOnDom(students)
      } else if (e.target.id) {
        const studentFilter = students.filter(student => student.house === e.target.id)
        cardsOnDom(studentFilter)
      }



    });
    
  
  }


export default eventListeners;

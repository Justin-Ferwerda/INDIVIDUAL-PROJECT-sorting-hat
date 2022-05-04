import { students, army } from "../Data/Students.js";
import cardsOnDom from "./cardsOnDom.js";
import houseImage from "./houseImage.js";
import cardText from "./cardText.js";
import armyCardsOnDom from "./armyCardsOnDom.js"

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
        imgSource: '',
        cardtxts: ''
      
      };
        newStudent.imgSource = houseImage(newStudent),
        newStudent.cardtxts = cardText(newStudent)
  
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

    document.querySelector('#card-container').addEventListener('click', (e) => {
      if (e.target.id) {
        const [, name] = e.target.id.split('--')

        const index = students.findIndex(object => object.name === name)


        if (e.target.id.includes('expel')) {
          
          army.push(...students.splice(index, 1));
          cardsOnDom(students)
          armyCardsOnDom(army)
          
        }
        console.log(students)
        console.log(army)

      }


    })
    
  
  }


export default eventListeners;

import students from "../Data/Students.js"

const cardText = () => {
  let cardText = '';
  students.forEach((studentObj) => {

    if (studentObj.house === 'Ravenclaw') {
      cardText = 'Ravenclaw values intelligence, learning, wisdom and wit.'
    } else if (studentObj.house === 'Gryffindor') {
      cardText = 'Gryffindor values courage, bravery, nerve, and chivalry.'
    } else if (studentObj.house === 'Slytherin') {
      cardText = 'The traits that get you placed into Slytherin are ambition, resourcefulness, determination, and cleverness.'
    } else {
      cardText = 'Hufflepuff characteristics include a strong sense of justice, loyalty, patience, and a propensity for hard work.'
    }

  })
    

    return cardText;
   

}

export default cardText;

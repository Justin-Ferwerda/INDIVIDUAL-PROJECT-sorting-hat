import students from "../Data/Students.js"




const houseImage = () => {
  let imageUrl = '';
  if (students.house === 'Ravenclaw') {
    imageURL = 'assets/images/ravenclawCrest.webp'
  } else if (students.house === 'Gryffindor') {
    imageURL = 'assets/images/Gryffindoorimg.png'
  } else if (students.house === 'Slytherin') {
    imageUrl = 'assets/images/Slytherinimg.webp'
  } else {
    imageUrl = 'assets/images/Hufflepuffimg.webp'
  }

  return imageUrl;

};

export default  houseImage;

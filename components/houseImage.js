import students from "../Data/Students.js"




const houseImage = () => {
  let imageUrl = '';
  students.forEach((studentObj) => {
    if (studentObj.house === 'Ravenclaw') {
      imageUrL = 'assets/images/RavenclawCrest.webp'
    } else if (studentObj.house === 'Gryffindor') {
      imageUrL = 'assets/images/Gryffindorimg.png'
    } else if (studentObj.house === 'Slytherin') {
      imageUrl = 'assets/images/Slytherinimg.webp'
    } else {
      imageUrl = 'assets/images/Hufflepuffimg.webp'
    }
  })

  

  return imageUrl;
  

};

export default  houseImage;

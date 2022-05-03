



const houseImage = (obj) => {
  let imageUrl = '';
  
    if (obj.house === 'Ravenclaw') {
      imageUrl = 'assets/images/RavenclawCrest.webp'
    } else if (obj.house === 'Gryffindor') {
      imageUrl = 'assets/images/Gryffindorimg.webp'
    } else if (obj.house === 'Slytherin') {
      imageUrl = 'assets/images/Slytherinimg.webp'
    } else {
      imageUrl = 'assets/images/Hufflepuffimg.webp'
    }
  

  

  return imageUrl;
    

};

export default  houseImage;

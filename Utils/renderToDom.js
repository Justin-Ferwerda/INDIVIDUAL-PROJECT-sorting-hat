const renderToDom = (divId, textToRender) => {
  const selectedDiv = document.querySelector(divId);
 selectedDiv.innerHTML = textToRender;
};

export default renderToDom;

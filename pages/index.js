const personImage = document.querySelectorAll(".person__image");
console.log(personImage);

personImage.forEach((image) => {
  image.addEventListener("mouseover", () => {
    console.log("ok");
  });
});

// IDEAS & NOTES
// HOW TO GET POPUPS INVOLVED
// CAN I ADD AN API????
// WHAT ABOUT UHHHHH
// ANY POPUPS OR MODALS?
// ADD A GROW ANIMATION EVENT LISTENER ON THE PERSON IMAGES
// TRY (really try) TO ADD ADAPTIVE WEB DESIGN TO THIS PROJECT AND THE COFFEESHOP ONE

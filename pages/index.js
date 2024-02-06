const personImage = document.querySelectorAll(".person__image");
console.log(personImage);

personImage.forEach((image) => {
  image.addEventListener("mouseover", () => {
    console.log("ok");
  });
});

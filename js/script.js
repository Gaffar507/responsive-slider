const image = document.querySelector("#jpg");
const fullName = document.querySelector(".next-name");
const rating = document.querySelector(".rating");
const button = document.querySelectorAll("#btn");
const details = document.querySelector(".details");
(function () {
  let index = 0;
  let customars = [];
  function Customar(img, name, info) {
    this.img = img;
    this.name = name;
    this.info = info;
  }
  function creatingValue(img, name, info) {
    const Img = `./image/${img}.jpg`;
    const customarInfo = new Customar(Img, name, info);
    customars.push(customarInfo);
  }
  creatingValue(
    0,
    "Gaffar",
    "You have to build A Golden Legacy for your family mind it my boy."
  );
  creatingValue(
    1,
    "Efti",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. "
  );
  creatingValue(
    2,
    "Billionaire",
    " ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, pariatur dolorem dolore nulla excepturi sit voluptates commodi voluptate optio nemo!"
  );
  creatingValue(
    3,
    "Nobody",
    "Hey my boy, you have to  be a cool attituded guy."
  );
  creatingValue(
    4,
    "Abdul Gaffar",
    "You have to ride Lamborghini it is a must."
  );
  button.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.parentElement.classList.contains("next-btn")) {
        if (index === customars.length) {
          index = 0;
        }
        index++;
        image.src = customars[index].img;
        fullName.textContent = customars[index].name;
        details.textContent = customars[index].info;
      }
      if (e.target.parentElement.classList.contains("previous-btn")) {
        if (index === 0) {
          index = customars.length;
        }
        index--;
        image.src = customars[index].img;
        fullName.textContent = customars[index].name;
        details.textContent = customars[index].info;
      }
    });
  });
})();

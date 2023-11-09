let imgName = "./assets/Toggle";
let image = document.querySelector(".hero_img");
let upArrow = document.querySelector("#upArrow");
let downArrow = document.querySelector("#downArrow");
let count = document.querySelector(".count1");
let filter = document.querySelector(".filters");

function imageToggeler() {
  let id = 1;
  function increment() {
    if (id == 5) {
        id = 1;
      }
    console.log(imgName + id + ".jpg");
    image.src = imgName + id + ".jpg";
    count.textContent = id;
    id++;
  }
  function decrement() {
    if (id <= 1) {
      id = 5;
    }
    id--;
    image.src = imgName + id + ".jpg";
    count.textContent = id;
   
  }
  return { increment, decrement };
}

const { increment, decrement } = imageToggeler();

upArrow.addEventListener("click", increment);
downArrow.addEventListener("click", decrement);

filter.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target && e.target.className !== "filters" && e.target.matches("div")) {
    document.querySelector(".bold").classList.remove("bold");
    e.target.className = "bold";
  }
});

let ham_btn = document.querySelector(".fa-bars-staggered");
let ham_active = document.querySelector(".hamburger");
ham_btn.addEventListener("click", () => {
  ham_active.classList.toggle("hamburger_active");
});

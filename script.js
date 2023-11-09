class ImageToggler {
    constructor(imgName, imageElement, upArrowElement, downArrowElement, countElement, filterElement) {
      this.imgName = imgName;
      this.image = imageElement;
      this.upArrow = upArrowElement;
      this.downArrow = downArrowElement;
      this.count = countElement;
      this.filter = filterElement;
  
      this.id = 0;
  
      this.initialize();
    }
  
    initialize() {
      this.upArrow.addEventListener("click", () => this.updateImage(1));
      this.downArrow.addEventListener("click", () => this.updateImage(-1));
  
      this.filter.addEventListener("click", (e) => {
        e.stopPropagation();
        if (e.target && e.target.className !== "filters" && e.target.matches('div')) {
          document.querySelector(".bold").classList.remove("bold");
          e.target.className = "bold";
        }
      });
    }
  
    updateImage(step) {
      this.id = (this.id + step + 6) % 6;
      this.image.src = `${this.imgName}${this.id}.jpg`;
      this.count.textContent = String(this.id + 1).padStart(2, 0);
    }
  }
  
  const imageConfig = {
    imgName: "./assets/HomeDecor",
    imageElement: document.querySelector(".hero_img"),
    upArrowElement: document.querySelector("#upArrow"),
    downArrowElement: document.querySelector("#downArrow"),
    countElement: document.querySelector(".count1"),
    filterElement: document.querySelector(".filters"),
  };
  
  const imageToggler = new ImageToggler(
    imageConfig.imgName,
    imageConfig.imageElement,
    imageConfig.upArrowElement,
    imageConfig.downArrowElement,
    imageConfig.countElement,
    imageConfig.filterElement
  );
  
  const hamBtn = document.querySelector(".fa-bars-staggered");
  const hamActive = document.querySelector(".hamburger");
  
  hamBtn.addEventListener("click", () => {
    hamActive.classList.toggle("hamburger_active");
  });
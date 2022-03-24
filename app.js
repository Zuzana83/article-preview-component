const socialBtn = document.querySelector(".social-link");
const socialWrapper = document.querySelector(".social-icons-wrapper");
const socialWrapperMobile = document.querySelector(".social-icons-wrapper_mobile");
const authorWrapper = document.querySelector(".author-wrapper");
const socialBtnMobile = document.querySelector(".social-link-mobile");
let windowWidth = window.innerWidth;
console.log(windowWidth);

window.addEventListener("resize", () => {
   windowWidth = window.innerWidth;
})

socialBtn.addEventListener("click", () => {

  if(windowWidth < 978) {
    authorWrapper.classList.add("hide");
    socialWrapperMobile.classList.add("show");
  }  
  if(windowWidth > 978) {
    socialWrapper.classList.toggle("show");
  }
});

socialBtnMobile.addEventListener("click", () => {
  authorWrapper.classList.remove("hide");
  socialWrapperMobile.classList.remove("show");
});

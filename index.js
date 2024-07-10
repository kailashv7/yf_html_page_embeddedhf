console.log(result);
const myImage = document.querySelector(".beauty");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (
    mySrc ===
    "https://uploaded.celebconfirmed.com/small_0_2d0f6a47_49d1_4ccc_ade0_5068d4e8f34a_ee73701e21.jpg"
  ) {
    myImage.setAttribute(
      "src",
      "https://cdn.tatlerasia.com/tatlerasia/i/2023/12/05175237-hero-image-template-12_cover_1182x666.jpg"
    );
  } else {
    myImage.setAttribute(
      "src",
      "https://uploaded.celebconfirmed.com/small_0_2d0f6a47_49d1_4ccc_ade0_5068d4e8f34a_ee73701e21.jpg"
    );
  }
};

window.onload = function () {
  const htmlCollection = document.getElementsByClassName("colNum");
  const tableau = Array.from(htmlCollection);
  console.log(tableau);

  for (const colNumElement of tableau) {
    colNumElement.addEventListener("mouseover", function () {
      const index = colNumElement.textContent;
      const correspondingButton = document.querySelector(`.colButton${index}`);
      const champButton = document.querySelector(".champButton");

      if (correspondingButton) {
        correspondingButton.style.display = "block";
        champButton.style.display = "block";
      }
    });

    colNumElement.addEventListener("mouseout", function () {
      const index = colNumElement.textContent;
      const correspondingButton = document.querySelector(`.colButton${index}`);
      const champButton = document.querySelector(".champButton");

      if (correspondingButton) {
        correspondingButton.style.display = "none";
        champButton.style.display = "none";
      }
    });
  }
};

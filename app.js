const keyDisplay = document.querySelector(".key");

document.addEventListener("keydown", (event) => {
  const keyName = event.key;

  keyDisplay.textContent = `Siz bosgan klaviyatura: ${keyName}`;
});



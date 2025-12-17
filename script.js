 const textarea = document.getElementById("textInput");
  const counter = document.getElementById("counter");
  const maxChars = 280;

  textarea.addEventListener("input", () => {
    let textLength = textarea.value.length;

    if (textLength > maxChars) {
      textarea.value = textarea.value.substring(0, maxChars);
      textLength = maxChars;
    }

    counter.textContent = `${textLength} / ${maxChars} characters`;

    if (textLength === maxChars) {
      counter.classList.add("warning");
    } else {
      counter.classList.remove("warning");
    }
  });
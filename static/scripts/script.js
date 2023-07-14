function openPopupDescription() {
  // TODO refacto refaire la div dans l'html et mettre display None
  const popup = document.getElementById("popup_description");
  const content = document.getElementById("popup_content_description");
  popup.classList.replace("hidden", "block");
  content.classList.replace("hidden", "block");

  const originalText = document.querySelector(".truncate").innerText;
  const fullText = document.createElement("p");
  fullText.textContent = originalText;
  fullText.setAttribute("id", "fulltext_description");

  const closeButton = document.createElement("button");
  closeButton.textContent = "Fermer";
  closeButton.setAttribute("id", "close_description_button");
  closeButton.classList.add("underline", "font-bold");
  closeButton.addEventListener("click", closePopupDescription);

  content.appendChild(fullText);
  content.appendChild(closeButton);

  document.body.appendChild(popup);
}

function closePopupDescription() {
  const popup = document.getElementById("popup_description");
  const content = document.getElementById("popup_content_description");
  const fullText = document.getElementById("fulltext_description");
  const closeButton = document.getElementById("close_description_button");

  popup.classList.replace("block", "hidden");
  content.classList.replace("block", "hidden");
  console.log(fullText);
  content.removeChild(closeButton);
  content.removeChild(fullText);
}

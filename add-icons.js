document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[target="_blank"]');
  links.forEach((link) => {
    const icon = document.createElement("span");
    icon.classList.add("icon-new-tab");
    link.appendChild(icon);
    link.setAttribute("rel", "noopener noreferrer");
  });
});

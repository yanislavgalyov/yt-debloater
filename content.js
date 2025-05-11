function removeElements() {
  document
    .querySelectorAll(".ytp-ce-element-show")
    .forEach((el) => el.remove());
}

removeElements();

const observer = new MutationObserver(() => removeElements());
observer.observe(document.body, {
  childList: true,
  subtree: true,
});

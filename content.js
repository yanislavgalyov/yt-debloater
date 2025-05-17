let observer = null;

function removeElements() {
  document
    .querySelectorAll(".ytp-ce-element-show")
    .forEach((el) => el.remove());
}

function setup() {
  if (observer) {
    observer.disconnect();
    observer = null;
  }

  if (location.pathname === "/watch") {
    removeElements();
    observer = new MutationObserver(() => removeElements());
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
}

window.addEventListener("yt-navigate-finish", () => {
  console.log("YouTube URL changed (yt-navigate-finish):", location.href);
  setup();
});

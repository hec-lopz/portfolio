// Listener for changing the height of the hero when on mobile browsers
export const resizeViewport = () => {
  const root = document.documentElement;
  let vh = window.innerHeight * 0.01;
  root.style.setProperty("--vh", `${vh}px`);
  console.log("resized");
};

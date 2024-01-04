<!-- Skeleton screens + content loaders -->
<script>
window.addEventListener("DOMContentLoaded", (event) => {
  const skeletonElements = document.querySelectorAll('[ms-code-skeleton]');

  skeletonElements.forEach(element => {
    // Create a skeleton div
    const skeletonDiv = document.createElement('div');
    skeletonDiv.classList.add('skeleton-loader');

    // Add the skeleton div to the current element
    element.style.position = 'relative';
    element.appendChild(skeletonDiv);

    // Get delay from the attribute
    let delay = element.getAttribute('ms-code-skeleton');

    // If attribute value is not a number, set default delay as 2000ms
    if (isNaN(delay)) {
      delay = 2000;
    }

    setTimeout(() => {
      // Remove the skeleton loader div after delay
      const skeletonDiv = element.querySelector('.skeleton-loader');
      element.removeChild(skeletonDiv);
    }, delay);
  });
});
</script>
<style>
.skeleton-loader {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: inherit; /* Inherit the border-radius of the parent element */
  background: linear-gradient(to right, #f6f7f8 25%, #e0e0e0 50%, #f6f7f8 75%);
  background-size: 200% 100%;  /* Increase the size of the background image */
  z-index: 1; /* Make sure the skeleton loader is on top of the content */
  animation: skeleton 1s infinite linear;
}

@keyframes skeleton {
  0% { background-position: -100% 0; }
  100% { background-position: 100% 0; }
}

[ms-code-skeleton] {
  background-clip: padding-box;
}
</style>

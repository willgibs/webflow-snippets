# Skeleton Loaders

## Purpose
This snippet enables skeleton loaders on specified elements. Skeleton screens provide a visual indication of content loading, enhancing user experience.

## How It Works
The script targets elements with the custom attribute `ms-code-skeleton` and dynamically adds a skeleton loader div. The loader div is animated with a gradient, creating the illusion of content loading. The delay for displaying the skeleton can be set in milliseconds using the `ms-code-skeleton` attribute.

```javascript
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
```

```css
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
```

## Potential Modifications
- Apply the `ms-code-skeleton` custom attribute to the HTML elements where you want to display skeleton screens with a value matching the millisecond delay on load.
- Adjust the delay value for each element individually by setting the `ms-code-skeleton` attribute.
- Customize the gradient, animation, and other styles to match your design preferences.

## Implementation in Webflow

1. Open your Webflow project.
2. Navigate to the page where you want to implement skeleton screens.
3. Add code snippets to page code before </body> tag
4. Select the div block to display the skeleton loader animation
5. Add `ms-code-skeleton` as a custom attribute name
6. Enter the animation length in milliseconds as the value (`2000` is 2 seconds)
7. Save the changes, and republish your site.

Now, the specified elements with the `ms-code-skeleton` attribute will display skeleton screens with content loaders, creating a smooth loading experience for your users.

### Credits
[Memberstack](https://www.memberstack.com/scripts/23-skeleton-screens-content-loaders)

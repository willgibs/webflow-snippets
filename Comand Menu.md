# Command Menu
This is a script that creates a simple command menu that can be activated using a keyboard shortcut. When activated, a modal window is displayed with links to various pages or actions on your website. The user can navigate the links in the modal window using the arrow keys on their keyboard.

## How it works
The script adds event listeners to the document object to listen for keyboard events and button clicks. When the user presses the specified keyboard shortcut, the modal window is displayed by changing the `display` CSS property of the modal element to `flex`. If the modal window is already displayed, pressing the keyboard shortcut again will hide the modal window.

The script also listens for arrow key events when the modal window is displayed. When the user presses an arrow key, the script finds the currently focused link element and moves the focus to the next or previous link element depending on which arrow key was pressed. The script also scrolls the modal window to keep the currently focused link element in view.

```javascript
<head>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const modal = document.querySelector('#modal');
      const closeButton = document.querySelector('#closeButton');

      // Show/hide modal on specified keyboard shortcut
      document.addEventListener('keydown', function(event) {
        if (event.key === 'k' && (event.metaKey || (event.ctrlKey && !event.metaKey))) {
          event.preventDefault();
          modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
        }
      });

      // Hide modal on close button click
      closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
      });

      // Arrow key navigation within modal
      document.addEventListener('keydown', function(event) {
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key) && modal.style.display === 'flex') {
          event.preventDefault();
          const currentLink = document.activeElement.closest('a:not(#ignoreLink)');
          const links = modal.querySelectorAll('a:not(#ignoreLink)');
          const currentIndex = Array.from(links).indexOf(currentLink);
          const nextIndex = (currentIndex + (event.key === 'ArrowUp' || event.key === 'ArrowLeft' ? -1 : 1) + links.length) % links.length;
          links[nextIndex].focus();
          modal.scrollTop = links[nextIndex].offsetTop - modal.offsetTop;
        }
      });
    });
  </script>
</head>
```

## Ways to modify it
You can modify the following aspects of the script to suit your needs:

- **Keyboard shortcut:** You can change the keyboard shortcut to something other than `k` + `command` (Mac) or `k` + `control` (Windows) by modifying the `if` statement in the first event listener function.
- **Modal window content:** You can modify the content of the modal window by changing the links in the HTML code of the modal element. You can also style the modal window using CSS.
- **Ignored link:** You can add an `id` of `ignoreLink` to any link element within the modal window to prevent it from being included in the arrow key navigation.

## Live Demo and Cloneable
Check out a live demo of this script [here](http://command-menu-k.webflow.io/), and clone the Webflow project [here](https://webflow.com/made-in-webflow/website/command-menu-k).

## How to implement it into a Webflow site
To use this script in a Webflow site, follow these steps:

1. Insert the script code into the `<head>` tag of your Webflow page where you want the command menu to appear.
2. Add a modal window element to your Webflow page and give it an `id` of `modal`. Style the modal window as desired. 
3. Add a button element to your Webflow page that will serve as the close button for the modal window. Give the button an `id` of `closeButton`.
4. Add link elements to the HTML code of the modal window element. Give each link element a descriptive `href` attribute and any additional classes or attributes as desired.
5. Preview your Webflow site and press the specified keyboard shortcut to activate the command menu. Use the arrow keys to navigate the links in the modal window.

That's it! With this script, you can easily add a command menu to your Webflow site that allows your users to quickly access important pages or actions. Feel free to modify the code to suit your needs and customize the modal window's appearance using CSS.

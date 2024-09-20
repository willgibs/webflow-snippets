document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('#modal');
  const closeButton = document.querySelector('#closeButton');

  // Show/hide modal on specified keyboard shortcut
  document.addEventListener('keydown', function (event) {
    if (
      event.key === 'k' &&
      (event.metaKey || (event.ctrlKey && !event.metaKey))
    ) {
      event.preventDefault();
      modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
    }
  });

  // Hide modal on close button click
  closeButton.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  // Arrow key navigation within modal
  document.addEventListener('keydown', function (event) {
    if (
      ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key) &&
      modal.style.display === 'flex'
    ) {
      event.preventDefault();
      const currentLink = document.activeElement.closest('a:not(#ignoreLink)');
      const links = modal.querySelectorAll('a:not(#ignoreLink)');
      const currentIndex = Array.from(links).indexOf(currentLink);
      const nextIndex =
        (currentIndex +
          (event.key === 'ArrowUp' || event.key === 'ArrowLeft' ? -1 : 1) +
          links.length) %
        links.length;
      links[nextIndex].focus();
      modal.scrollTop = links[nextIndex].offsetTop - modal.offsetTop;
    }
  });
});

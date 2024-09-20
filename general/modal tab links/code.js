var Webflow = Webflow || [];
Webflow.push(() => {
  function changeTab(shouldScroll = false) {
    const tabName = window.location.hash.substring(1);
    const tabTarget = document.querySelector(`[data-w-tab="${tabName}"]`);

    if (tabTarget) {
      tabTarget.click();

      if (shouldScroll) {
        const offset = 0; // Change this to match a fixed header height
        window.scrollTo({
          top: $(tabTarget).offset().top - offset,
          behavior: 'smooth',
        });
      }
    }
  }

  const tabs = document.querySelectorAll('[data-w-tab]');

  tabs.forEach((tab) => {
    const dataWTabValue = tab.dataset.wTab;
    const pargedDataTab = dataWTabValue.replace(/\s+/g, '-').toLowerCase();
    tab.dataset.wTab = pargedDataTab;
    tab.addEventListener('click', () => {
      history.pushState({}, '', `#${pargedDataTab}`);
    });
  });

  if (window.location.hash) {
    requestAnimationFrame(() => {
      changeTab(true);
    });
  }

  window.addEventListener('hashchange', () => {
    changeTab();
  });
});

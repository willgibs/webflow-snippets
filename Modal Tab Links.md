# Modal Tabs
## Purpose
This script enhances Webflow modal functionality by allowing direct linking to specific tabs within the modal. It automatically updates the URL hash based on the active tab, enabling users to share or bookmark specific tab states.

## How It Works
The script utilizes JavaScript to handle tab changes and URL hash updates. When the page loads, it checks for a hash in the URL and selects the corresponding tab. Clicking on tabs updates the URL hash and triggers a smooth scroll to the selected tab. If no hash is present, the script listens for hash changes and adjusts the active tab accordingly.

```javascript
<script>
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
            top: $(tabTarget).offset().top - offset, behavior: 'smooth'
          });
        }
      }
    }

    const tabs = document.querySelectorAll('[data-w-tab]');

    tabs.forEach(tab => {
      const dataWTabValue = tab.dataset.wTab;
      const pargedDataTab = dataWTabValue.replace(/\s+/g,"-").toLowerCase();
      tab.dataset.wTab = pargedDataTab;
      tab.addEventListener('click', () => {
        history.pushState({}, '', `#${pargedDataTab}`);
      });
    });

  	if (window.location.hash) {
      requestAnimationFrame(() => { changeTab(true); });
    }

    window.addEventListener('hashchange', () => { changeTab() });
  });
</script>
```

## Potential Modifications
Adjust the const `offset` variable to match the height of any fixed headers on your site.
Customize the script to handle specific tab behaviors or add additional features as needed.

## Implementation in Webflow

1. Open your Webflow project.
2. Go to the project settings and navigate to the "Custom Code" section.
3. Paste the provided script in the "Footer Code" section.
4. Save the changes, and republish your site.

Now, your Webflow modal will support direct links to individual tabs, improving user experience and navigation.

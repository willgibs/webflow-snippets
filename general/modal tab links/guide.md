# Modal Tab Links

## Purpose

Enhance Webflow modal functionality by allowing direct linking to specific tabs within a modal. It automatically updates the URL hash based on the active tab, enabling users to share or bookmark specific tab states.

## How It Works

Utilizes JavaScript to handle tab changes and URL hash updates. When the page loads, it checks for a hash in the URL and selects the corresponding tab. Clicking on tabs updates the URL hash and triggers a smooth scroll to the selected tab. If no hash is present, the script listens for hash changes and adjusts the active tab accordingly.

## Potential Modifications

- Adjust the const `offset` variable to match the height of any fixed headers on your site.
- Customize the script to handle specific tab behaviors or add additional features as needed.

## Implementation in Webflow

1. Open your Webflow project.
2. Go to the project settings and navigate to the "Custom Code" section.
3. Paste the provided script in the "Footer Code" section.
4. Save the changes, and republish your site.

Now, your Webflow modal will support direct links to individual tabs, improving user experience and navigation.

### Credits

[Memberstack](https://www.memberstack.com/scripts/31-open-a-webflow-tab-with-a-link)

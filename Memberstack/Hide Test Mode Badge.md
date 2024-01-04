# Hide "Test Mode" Badge

## Purpose
This style script hides the MemberStack 'Test Mode' badge on your web pages, ensuring a clean and professional appearance for your production site.

## How It Works
The provided CSS style targets the element with the class .ms-test-label (which represents the 'Test Mode' badge in MemberStack) and sets its visibility and display properties to hidden and none, respectively.

```css
<style>
  .ms-test-label {
    visibility: hidden !important;
    display: none !important;
  }
</style>
```

## Potential Modifications
- If you want to adjust the appearance or behavior further, you can modify the CSS properties as needed.
- Ensure that this style is applied appropriately to hide the 'Test Mode' badge without affecting other elements on your site.

## Implementation in Webflow

1. Open your Webflow project.
2. Navigate to the page where you want to hide the 'Test Mode' badge.
3. Add an Embed element to the page.
4. Paste the provided CSS style into the Embed element's code section.
5. Save the changes, and republish your site.

Now, the MemberStack 'Test Mode' badge will be hidden on the specified page, creating a cleaner presentation for your users. Adjust the style as necessary for your design preferences.

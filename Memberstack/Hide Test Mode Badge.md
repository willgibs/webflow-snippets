# Hide "Test Mode" Badge

## Purpose
This style script hides the Memberstack 'Test Mode' badge on your web pages, ensuring a clean and professional appearance for your production site. This should not be used in production environments - please upgrade your Memberstack plan out of test mode.

## How It Works
The provided CSS style targets the element with the class `.ms-test-label` (which represents the 'Test Mode' badge in Memberstack) and sets its visibility and display properties to `hidden` and `none`, respectively.

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

1. Open your Webflow project settings.
2. Paste the CSS above to your global custom code.
3. Save the changes, and republish your site.

Now, the Memberstack 'Test Mode' badge will be hidden on all pages, creating a cleaner presentation for your users.

# Text Animation with Split-Type and GSAP

## Purpose

This script adds a captivating text animation to elements with the class `.reveal-type`. The animation reveals each character with a fade-in effect as the user scrolls down the page.

## How It Works

The script uses the GSAP (GreenSock Animation Platform) library along with the Split-Type library for character-level text manipulation. Each character is individually animated with a staggered fade-in effect triggered by the scroll position.

## Potential Modifications

- Adjust the trigger settings (start, end, scrub) inside the `scrollTrigger` to control when the animation begins and ends based on the scroll position.
- Customize the animation properties like opacity, stagger, and any other GSAP parameters to achieve the desired visual effect.
- Apply the `.reveal-type` class to HTML elements containing text that you want to animate.

## Implementation in Webflow

1. Open your Webflow project.
2. Paste snippets to the page code before the `</body>` tag.
3. Add `.reveal-type` combo class to each text element that should include the animation.
4. Save the changes, and republish your site.

Now, elements with the class .reveal-type will exhibit a captivating text animation as users scroll down the page. Adjust the script parameters to suit your design preferences.

### Credit

[Memberstack](https://webflow.com/made-in-webflow/website/gsap-text-opacity-scrubbing)

# Dynamic Login Link

## Purpose
This script enhances the login link's functionality by dynamically updating its destination based on the user's login status. If the user is logged in, the link redirects to a member-specific URL; otherwise, it redirects to a specified logged-out content URL.

H## ow It Works
The script uses MemberStack to check the user's login status. It then updates the `href` attribute of the login link accordingly, redirecting the user to the appropriate page based on their login status.

```html
<!-- Insert the login link with dynamic behavior into your HTML -->
<a href="/login" data-ms-member="/user/spaces" data-ms-content="/login" class="button is-secondary">Log in</a>
```

```javascript
<script>
  document.addEventListener('DOMContentLoaded', function() {
    // Select the login link
    var link = document.querySelector('a[data-ms-member]');

    // Check the user's login status using MemberStack
    window.$memberstackDom.getCurrentMember().then(({ data: member }) => {
      if (member) {
        // User is logged in, update the link's href to the member-specific URL
        link.setAttribute('href', link.getAttribute('data-ms-member'));
      } else {
        // User is logged out, update the link's href to the logged-out content URL
        link.setAttribute('href', link.getAttribute('data-ms-content'));
      }
    });
  });
</script>
```

## Potential Modifications
- Adjust the '/login' default URL, '/user/spaces' member-specific URL, and '/login' logged-out content URL based on your project structure.
- Customize the link styling or attributes to match your design preferences.

## Implementation in Webflow

1. Open your Webflow project.
2. Add an Embed element to the page where the login link is located.
3. Paste the provided script into the Embed element's code section.
4. Save the changes, and republish your site.

Now, the login link will dynamically redirect users based on their login status, providing a seamless experience for both logged-in and logged-out users. Adjust the script and URLs as needed for your specific use case.

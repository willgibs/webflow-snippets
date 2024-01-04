# Current Member Check
## Purpose
This script utilizes the MemberStack API to check if a user is logged in. If the user is not logged in, it redirects them to the login page.

## How It Works
The script calls the `getCurrentMember()` method from the MemberStack API. If the response indicates that there is no logged-in member, it redirects the user to the specified login page.

```javascript
// Insert the provided script into your project to check the current MemberStack member.
window.$memberstackDom.getCurrentMember().then(({ data: member }) => {
  if (!member) {
    // User is not logged in, redirect to the login page
    window.location.href = '/login';
  }
});
```

## Potential Modifications
- Update the '/login' URL to match the path of your login page.
- Customize the redirection logic or add additional actions based on your specific requirements.

## Implementation in Webflow
1. Open your Webflow project.
2. Navigate to the page where you want to implement the member check.
3. Add an Embed element to the page.
4. Paste the provided script into the Embed element's code section.
5. Save the changes, and republish your site.

Now, when users visit the page, the script will ensure that they are logged in through MemberStack. If not, they will be redirected to the login page. Adjust the script and URL as needed for your project.

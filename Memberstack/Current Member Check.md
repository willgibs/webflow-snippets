# Current Member Check

## Purpose
This script checks if a user is logged in. If not, it redirects them to the login page.

## How It Works
The script calls the `getCurrentMember()` method from the Memberstack API. If the response indicates that there is no logged-in member, it redirects the user to the specified login page.

```javascript
// Check the current Memberstack member
window.$memberstackDom.getCurrentMember().then(({ data: member }) => {
  if (!member) {
    // If user is not logged in, redirect to the login page
    window.location.href = '/login';
  }
});
```

## Potential Modifications
- Update the '/login' URL to match the path of your redirect page.
- Customize the redirection logic or add additional actions based on your specific requirements.

## Implementation in Webflow
1. Open your Webflow project.
2. Navigate to the page where you want to implement the member check.
3. Add to the page code.
4. Save the changes, and republish your site.

Now, when users visit the page, the script will ensure that they are logged in through Memberstack. If not, they will be redirected to the login page.

### Credits
Inspired by Memberstack's [Auto Open Login Modal](https://www.memberstack.com/scripts/11-automatically-open-login-modal)

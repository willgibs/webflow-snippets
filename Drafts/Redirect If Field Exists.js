// Checks for custom field (onboarding name) and redirects if present

<script>
// Get the `_ms-mem` object from the local storage
const msMem = JSON.parse(localStorage.getItem(`_ms-mem`));

// Check if the `company-name` field is present
if (msMem.customFields && msMem.customFields[`company-name`]) {
  // If the `company-name` field is present, redirect to the dashboard
  window.location = `/app/dashboard`;
} else {
  // If the `company-name` field is not present, do nothing and stay on the screen
}
</script>

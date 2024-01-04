<script>
  window.$memberstackDom.getCurrentMember().then(({ data: member }) => {
    if (!member) {
      // User is not logged in, redirect to the login page
      window.location.href = '/login';
    }
  });
</script>

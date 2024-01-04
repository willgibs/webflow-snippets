<a href="/login" data-ms-member="/user/spaces" data-ms-content="/login" class="button is-secondary">Log in</a>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var link = document.querySelector('a[data-ms-member]');

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

<script>
			// Smooth scrolling for navigation links
			document.querySelectorAll('a[href^="#"]').forEach(anchor => {
				anchor.addEventListener('click', function (e) {
					e.preventDefault();
					const target = document.querySelector(this.getAttribute('href'));
					if (target) {
						target.scrollIntoView({
							behavior: 'smooth',
							block: 'start'
						});
					}
				});
			});

			// Mobile menu toggle
			const mobileMenuButton = document.getElementById('mobile-menu-btn');
			const mobileMenu = document.getElementById('mobile-menu');
			
			if (mobileMenuButton && mobileMenu) {
				mobileMenuButton.addEventListener('click', function() {
					mobileMenu.classList.toggle('hidden');
				});

				// Close mobile menu when clicking on a link
				const mobileMenuLinks = mobileMenu.querySelectorAll('a');
				mobileMenuLinks.forEach(link => {
					link.addEventListener('click', function() {
						mobileMenu.classList.add('hidden');
					});
				});
			}
		</script>
document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cart-count');
    let cartItems = 0;
  
    // Create message container for add-to-cart notifications
    const messageContainer = document.createElement('div');
    messageContainer.id = 'cartMessage';
    cartCount.parentNode.insertBefore(messageContainer, cartCount.nextSibling);
  
    // Add to Cart button click handlers
    document.querySelectorAll('.add-to-cart').forEach((btn) => {
      btn.addEventListener('click', () => {
        const productName = btn.getAttribute('data-name');
        cartItems++;
        cartCount.textContent = cartItems;
  
        // Show message
        messageContainer.textContent = `"${productName}" added to your cart!`;
  
        // Clear message after 3 seconds
        setTimeout(() => {
          messageContainer.textContent = '';
        }, 3000);
      });
    });
  
    // Contact form submission
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
  
      if (!name || !email || !message) {
        formStatus.textContent = 'Please fill out all fields.';
        formStatus.style.color = 'red';
        return;
      }
  
      formStatus.style.color = 'green';
      formStatus.textContent = 'Thanks for reaching out! We will get back to you soon.';
      form.reset();
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cart-count');
    const cartItemsList = document.getElementById('cartItemsList');
    const cartModal = document.getElementById('cartModal');
    const closeCartBtn = document.getElementById('closeCart');
    const cartLink = document.querySelector('a[href="#cart"]');
  
    let cartItems = [];
  
    // Message container for add-to-cart notifications
    const messageContainer = document.createElement('div');
    messageContainer.id = 'cartMessage';
    cartCount.parentNode.insertBefore(messageContainer, cartCount.nextSibling);
  
    // Add to Cart button click handlers
    document.querySelectorAll('.add-to-cart').forEach((btn) => {
      btn.addEventListener('click', () => {
        const productName = btn.getAttribute('data-name');
        const productCard = btn.closest('.product-card');
        const priceText = productCard.querySelector('p').textContent;
        const price = priceText.replace('$', '').trim();
  
        // Add item to cart array
        cartItems.push({ name: productName, price });
  
        // Update cart count
        cartCount.textContent = cartItems.length;
  
        // Show message
        messageContainer.textContent = `"${productName}" added to your cart!`;
  
        // Clear message after 3 seconds
        setTimeout(() => {
          messageContainer.textContent = '';
        }, 3000);
      });
    });
  
    // Show cart modal on clicking Cart link
    cartLink.addEventListener('click', (e) => {
      e.preventDefault();
  
      // Clear previous list
      cartItemsList.innerHTML = '';
  
      if (cartItems.length === 0) {
        cartItemsList.innerHTML = '<li>Your cart is empty.</li>';
      } else {
        // Populate cart modal with items
        cartItems.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item.name;
          const priceSpan = document.createElement('span');
          priceSpan.textContent = `$${item.price}`;
          li.appendChild(priceSpan);
          cartItemsList.appendChild(li);
        });
      }
  
      // Show the modal
      cartModal.classList.remove('hidden');
    });
  
    // Close cart modal
    closeCartBtn.addEventListener('click', () => {
      cartModal.classList.add('hidden');
    });
  
    // Close modal if clicking outside the modal content
    cartModal.addEventListener('click', (e) => {
      if (e.target === cartModal) {
        cartModal.classList.add('hidden');
      }
    });
  
    // Contact form submission (your existing code)
    const form = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
  
      if (!name || !email || !message) {
        formStatus.textContent = 'Please fill out all fields.';
        formStatus.style.color = 'red';
        return;
      }
  
      formStatus.style.color = 'green';
      formStatus.textContent = 'Thanks for reaching out! We will get back to you soon.';
      form.reset();
    });
  });
  
  

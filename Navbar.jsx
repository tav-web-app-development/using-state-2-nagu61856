document.addEventListener("DOMContentLoaded", function() {
    const cartItemsCount = document.getElementById('cart-items-count');
    const checkoutBtn = document.getElementById('checkout-btn');
    const checkoutForm = document.getElementById('checkout-form');
    const useShippingAddressCheckbox = document.getElementById('use-shipping-address');
    const billingForm = document.getElementById('billing-form');
    const shippingForm = document.getElementById('shipping-form');
    const submitBtn = document.getElementById('submit-btn');
  
    let cartItemCount = 0;
  
    // Function to update cart items count
    function updateCartItemsCount() {
      cartItemsCount.textContent = cartItemCount;
    }
  
    // Function to handle "add to cart" button click
    function addToCart() {
      cartItemCount++;
      updateCartItemsCount();
    }
  
    // Function to handle checkout button click
    function showCheckoutForm() {
      checkoutForm.style.display = 'block';
    }
  
    // Function to toggle display of shipping address form based on checkbox
    function toggleShippingAddressForm() {
      if (useShippingAddressCheckbox.checked) {
        shippingForm.style.display = 'none';
      } else {
        shippingForm.style.display = 'block';
      }
    }
  
    // Function to handle form submission
    function handleSubmit(event) {
      event.preventDefault();
  
      // Trim whitespace from all input fields
      const inputs = document.querySelectorAll('input[type="text"]');
      inputs.forEach(input => {
        input.value = input.value.trim();
      });
  
      // Submit form logic here
      // For demonstration, you can console.log form values
      console.log('Form submitted!');
    }
  
    // Event listeners
    checkoutBtn.addEventListener('click', showCheckoutForm);
    useShippingAddressCheckbox.addEventListener('change', toggleShippingAddressForm);
    submitBtn.addEventListener('click', handleSubmit);
  
    // Simulate adding to cart (for demonstration)
    const addToCartButton = document.getElementById('add-to-cart-btn');
    addToCartButton.addEventListener('click', addToCart);
  });
  
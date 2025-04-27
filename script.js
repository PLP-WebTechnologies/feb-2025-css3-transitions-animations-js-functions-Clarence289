document.addEventListener('DOMContentLoaded', () => {
    const animatedImage = document.getElementById('animatedImage');
    const animateBtn = document.getElementById('animateBtn');
    const changeImageBtn = document.getElementById('changeImageBtn');
    const message = document.getElementById('message');
    const themeToggle = document.getElementById('themeToggle');
    const themeLabel = document.getElementById('themeLabel');
  
    const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Add your image files
    let currentImageIndex = 0;
  
    // Load theme preference
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
      themeToggle.checked = true;
      themeLabel.textContent = "Dark Mode";
    }
  
    // Load animation preference
    const animationPreference = localStorage.getItem('animationPreference');
    if (animationPreference === 'true') {
      animatedImage.classList.add('animate');
      message.textContent = "Animation loaded from localStorage!";
    }
  
    // Animate Button
    animateBtn.addEventListener('click', () => {
      animatedImage.classList.toggle('animate');
      const isAnimated = animatedImage.classList.contains('animate');
      localStorage.setItem('animationPreference', isAnimated ? 'true' : 'false');
      
      message.textContent = isAnimated ? "Animation Enabled!" : "Animation Disabled!";
    });
  
    // Change Image Button
    changeImageBtn.addEventListener('click', () => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      animatedImage.src = images[currentImageIndex];
      message.textContent = `Changed to Image ${currentImageIndex + 1}`;
    });
  
    // Theme Toggle
    themeToggle.addEventListener('change', () => {
      if (themeToggle.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        themeLabel.textContent = "Dark Mode";
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        themeLabel.textContent = "Light Mode";
      }
    });
  });
  
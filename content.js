// Runs once the Waitwell page loads
window.addEventListener('load', () => {
    // 1. Navigation Header - Where you want to add a button
    const navHeader = document.querySelector('.your-nav-header-class');
    
    if (navHeader) {
        // Create a custom button
        const customBtn = document.createElement('button');
        customBtn.innerText = "My Custom Action";
        customBtn.style.cssText = "margin-left: 15px; padding: 5px 10px; background: blue; color: white;";
        
        // Inject it into the header
        navHeader.appendChild(customBtn);
    }
});

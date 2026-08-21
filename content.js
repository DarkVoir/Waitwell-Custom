// Wait for Ionic components to fully hydrate before moving them
setTimeout(() => {
    const navHeader = document.querySelector('ion-header ion-toolbar');
    const customButton = document.createElement('ion-button');
    
    customButton.innerText = "Custom Action";
    customButton.addEventListener('click', () => {
        alert('Custom Waitwell action triggered!');
    });

    if (navHeader) {
        navHeader.appendChild(customButton);
    }
}, 2000);

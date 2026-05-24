'use strict';

// System initialization
console.log('%c[SYSTEM] ZypheraOS Starting...', 'color: #00ff00; font-weight: bold;');

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    try {
        console.info('✓ DOM loaded successfully');
        
        const yakshaImage = document.getElementById('yaksha-mask');
        const loader = document.querySelector('.loader');
        const midSector = document.querySelector('.mid-sector');
        const neonButton = document.querySelector('.neon-button');

        // Check for required elements
        if (!yakshaImage || !loader || !midSector || !neonButton) {
            console.error('❌ Critical elements missing:', {
                yaksha: !!yakshaImage,
                loader: !!loader,
                midSector: !!midSector,
                button: !!neonButton
            });
            return;
        }
        
        console.log('✓ All required elements present');
        console.debug('Initializing animation sequence...');

        // After 2 seconds, hide yaksha and show loader
        setTimeout(() => {
            yakshaImage.classList.add('hidden');
            loader.classList.add('visible');
            console.debug('[SEQUENCE 1] Yaksha fade-out, loader fade-in');
        }, 2000);

        // After loader completes 1 cycle (1s animation delay + 4s animation = 5s after appearing), fade it out
        setTimeout(() => {
            loader.classList.remove('visible');
            console.debug('[SEQUENCE 2] Loader fade-out');
        }, 7000);

        // After loader fades out (add 0.5s for fade transition), hide mid-sector with reverse animation
        setTimeout(() => {
            midSector.classList.add('hiding');
            console.debug('[SEQUENCE 3] Mid-sector collapse');
        }, 7500);

        // After mid-sector hides (add 0.6s for animation), show neon button
        setTimeout(() => {
            neonButton.classList.add('visible');
            console.debug('[SEQUENCE 4] Button fade-in');
            console.log('%c[SYSTEM] ZypheraOS Ready', 'color: #00ff00; font-weight: bold; font-size: 16px;');
        }, 8100);
        
        // Add button click handler to redirect to main.html (no back button)
        neonButton.addEventListener('click', () => {
            console.info('→ Navigating to main page');
            window.location.replace('main.html');
        });
        
    } catch (error) {
        console.error('❌ Critical error during initialization:', error);
        console.error('Stack trace:', error.stack);
    }
});

// Global error handler
window.addEventListener('error', (event) => {
    console.error('❌ Uncaught error:', event.error);
    console.error('Location:', event.filename, 'Line:', event.lineno);
});

// Unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
    console.error('❌ Unhandled promise rejection:', event.reason);
});

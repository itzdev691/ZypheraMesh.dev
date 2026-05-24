'use strict';

// Prevent going back to index.html
history.pushState(null, null, location.href);
window.addEventListener('popstate', () => {
    history.pushState(null, null, location.href);
    console.warn('⚠️ Navigation blocked - cannot return to splash screen');
});

// System initialization
console.log('%c[SYSTEM] ZypheraOS Starting...', 'color: #00ff00; font-weight: bold;');

// Check if DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Success case
        console.info('✓ DOM loaded successfully');
        
        // Initialize features
        initializeFeatures();
        
        console.log('%c[SYSTEM] ZypheraOS Ready', 'color: #00ff00; font-weight: bold; font-size: 16px;');
        
    } catch (error) {
        console.error('❌ Critical error during initialization:', error);
        console.error('Stack trace:', error.stack);
    }
});

function initializeFeatures() {
    try {
        // Feature initialization
        console.debug('Initializing features...');
        
        // Check for localStorage support
        const hasLocalStorage = typeof(Storage) !== 'undefined';
        
        if (!hasLocalStorage) {
            console.warn('⚠️ LocalStorage not available - some features disabled');
        } else {
            console.info('✓ LocalStorage available');
        }
        
    } catch (error) {
        console.error('❌ Feature initialization failed:', error);
        throw error; // Re-throw if critical
    }
}

// Global error handler
window.addEventListener('error', (event) => {
    console.error('❌ Uncaught error:', event.error);
    console.error('Location:', event.filename, 'Line:', event.lineno);
});

// Unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
    console.error('❌ Unhandled promise rejection:', event.reason);
});

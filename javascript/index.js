'use strict'
console.log("Website loaded")
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const yakshaImage = document.getElementById('yaksha-mask');
    const loader = document.querySelector('.loader');
    const midSector = document.querySelector('.mid-sector');
    const neonButton = document.querySelector('.neon-button');

    // After 2 seconds, hide yaksha and show loader
    setTimeout(() => {
        yakshaImage.classList.add('hidden');
        loader.classList.add('visible');
    }, 2000);

    // After loader completes 1 cycle (1s animation delay + 4s animation = 5s after appearing), fade it out
    setTimeout(() => {
        loader.classList.remove('visible');
    }, 7000);

    // After loader fades out (add 0.5s for fade transition), hide mid-sector with reverse animation
    setTimeout(() => {
        midSector.classList.add('hiding');
    }, 7500);

    // After mid-sector hides (add 0.6s for animation), show neon button
    setTimeout(() => {
        neonButton.classList.add('visible');
    }, 8100);
});

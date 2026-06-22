document.addEventListener('DOMContentLoaded', function() {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);
    targetDate.setHours(19, 0, 0, 0);
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (document.getElementById('days')) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = String(days).padStart(2, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        }
        
        if (document.getElementById('offerDays')) {
            const offerEnd = new Date();
            offerEnd.setHours(offerEnd.getHours() + 24);
            const offerDistance = offerEnd - now;
            
            const offerDays = Math.floor(offerDistance / (1000 * 60 * 60 * 24));
            const offerHours = Math.floor((offerDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const offerMinutes = Math.floor((offerDistance % (1000 * 60 * 60)) / (1000 * 60));
            const offerSeconds = Math.floor((offerDistance % (1000 * 60)) / 1000);
            
            document.getElementById('offerDays').textContent = String(offerDays).padStart(2, '0');
            document.getElementById('offerHours').textContent = String(offerHours).padStart(2, '0');
            document.getElementById('offerMinutes').textContent = String(offerMinutes).padStart(2, '0');
            document.getElementById('offerSeconds').textContent = String(offerSeconds).padStart(2, '0');
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
});
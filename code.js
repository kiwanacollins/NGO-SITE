// Timer code starts here
  // Set your target date here
  const targetDate = new Date("2024-12-07").getTime();

  // Step 4: Use setInterval to update the countdown every second
  const countdownFunction = setInterval(function() {
    // Get today's date and time
    const now = new Date().getTime();
    
    // Find the time left until the target date
    const timeLeft = targetDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    // Step 3: Update the HTML
    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    
    // If the countdown is over, stop the function
    if (timeLeft < 0) {
      clearInterval(countdownFunction);
      document.querySelector(".time").innerHTML = "EXPIRED";
    }
  }, 1000);
// Timer code ends here


// start of the counter code
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.number');
    const speed = 3000; // Adjust this value to change the speed of the count up

    const animateCounter = (counter, targetValue) => {
        const startValue = parseInt(counter.innerText, 10);
        const increment = targetValue / speed;

        const counterAnimation = setInterval(() => {
            const currentValue = parseInt(counter.innerText, 10);
            const newValue = currentValue + increment;

            if (newValue < targetValue) {
                counter.innerText = Math.ceil(newValue);
            } else {
                counter.innerText = targetValue;
                clearInterval(counterAnimation);
            }
        }, 1);
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const targetValue = parseInt(counter.getAttribute('data-target'), 10);

                animateCounter(counter, targetValue);
                observer.unobserve(counter); // Stop observing the current target
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is in the viewport

    counters.forEach(counter => {
        observer.observe(counter);
    });
});
// end of the counter code

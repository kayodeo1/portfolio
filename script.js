document.getElementById("open-resume").addEventListener("click",function(){
	window.open("resume.pdf","_blank");});

document.addEventListener('DOMContentLoaded', function() {
    const skillIcons = document.querySelectorAll('.skill-icons i');
    const seasonalBanner = document.getElementById('seasonalBanner');
    const contactForm = document.getElementById('contactForm');
var _CONTENT = [ 
	"SOFTWARE ENGINEER", 
	"BACK-END DEVELOPER", 
	"ANDROID APP DEVELOPER",
	"JAVA PROGRAMMER",
	"WEB DEVELOPER",
	"PROGRAMMING INSTRUCTOR"
];

var _PART = 0; // Current sentence being processed
var _PART_INDEX = 0; // Character number of the current sentence being processed 
var _INTERVAL_VAL; // Holds the handle returned from setInterval
var _ELEMENT = document.querySelector("#text-name"); // Element that holds the text
var _CURSOR = document.querySelector("#cursor"); // Cursor element 

// Implements typing effect
function Type() { 
	// Get substring with 1 characater added
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		// Hide the cursor
		_CURSOR.style.display = 'block';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR.style.display = 'block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}
// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);



    // Skill icons animation
    skillIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'translateY(-10px)';
        });

        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'translateY(0)';
        });
    });

    // Holidays array (you can expand this)
    const holidays = [
        { date: '01-01', name: 'New Year\'s Day' },
        { date: '05-27', name: 'Children\'s Day' },
        { date: '10-01', name: 'Nigerian Independence Day' },
        { date: '12-25', name: 'Christmas Day' },
        // Add more Nigerian and world holidays here
    ];

    // Greeting function
    function setGreeting() {
        const now = new Date();
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        const currentDate = `${month}-${day}`;
        const hours = now.getHours();

        let message = '';

        // Check for New Year
        if (currentDate === '01-01' || currentDate === '01-02') {
            message = 'Happy New Year! 🎉';
        }
        // Check for first two days of the month
        else if (day === '01' || day === '02') {
            message = 'Happy New Month! 🌟';
        }
        // Check for holidays
        else {
            const holiday = holidays.find(h => h.date === currentDate);
            if (holiday) {
                message = `Happy ${holiday.name}! 🎊`;
            }
        }

        // If no special day, use time-based greeting
        if (!message) {
            if (hours >= 5 && hours < 12) {
                message = 'Good Morning! ☀️';
            } else if (hours >= 12 && hours < 18) {
                message = 'Good Afternoon! 🌞';
            } else {
                message = 'Good Evening! 🌙';
            }
        }

        seasonalBanner.textContent = message;
    }

    // Set initial greeting and update every minute
    setGreeting();
    setInterval(setGreeting, 60000);

    // Contact form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For now, we'll just log it to the console
        console.log('Form submitted:', {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        });
        alert('Thank you for your message!');
        contactForm.reset();
    });

    // Add a feature to change background color based on time of day
    function setBackgroundColor() {
        const hours = new Date().getHours();
        const body = document.body;
        
        if (hours >= 5 && hours < 12) {
            body.style.backgroundColor = '#1a1a2e'; // Morning: Dark blue
        } else if (hours >= 12 && hours < 18) {
            body.style.backgroundColor = '#16213e'; // Afternoon: Navy blue
        } else {
            body.style.backgroundColor = '#0f3460'; // Evening/Night: Deep blue
        }
    }

    setBackgroundColor();
    setInterval(setBackgroundColor, 600000); // Update every 10 minutes
});
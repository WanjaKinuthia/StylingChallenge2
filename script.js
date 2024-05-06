// Get a reference to the plus sign element
const plusSign = document.getElementById('plus-sign');

// Function to show/hide the supply management content
function toggleSupplyManagement() {
  const supplyManagementContent = document.getElementById('customer focus'); // Replace with the actual ID of your supply management content

  if (supplyManagementContent.style.display === 'none' || supplyManagementContent.style.display === '') {
    supplyManagementContent.style.display = 'block';
  } else {
    supplyManagementContent.style.display = 'none';
  }
}

// Add a click event listener to the plus sign
plusSign.addEventListener('click', toggleSupplyManagement);
const commercialDesignText = document.getElementById('customer focus').nextElementSibling; // Get the paragraph element

const minusIcon = document.querySelector('.fa-minus'); // Target the minus icon

minusIcon.addEventListener('click', function() {
  commercialDesignText.classList.toggle('hidden');  // Toggle visibility using class
});


var showDetails = document.getElementById('showdetails')

const chevronIcons = document.querySelectorAll(".fa-chevron-down");
const answerDivs = document.querySelectorAll("#hide-ans");

// Add event listeners to each chevron-down icon
chevronIcons.forEach((icon, index) => {
  icon.addEventListener("click", function() {
    // Toggle visibility of corresponding answer div
    if (answerDivs[index].style.display === "none") {
      answerDivs[index].style.display = "block";
    } else {
      answerDivs[index].style.display = "none";
    }
  });
});


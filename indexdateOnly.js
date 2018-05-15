// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#dt");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredData to Data initially
var filteredData = dataSet;

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
  
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    // Get get the current address object and its fields
    var dataset = filteredData[i];
    var fields = Object.keys(dataset);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = dataset[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDate = $dateInput.value.trim();
 
  // Set filteredDate to an array of all addresses whose "date" matches the filter

  filteredData = dataSet.filter(function(data) {
    var datadate = data.datetime;
    
    // If true, add the data to the filteredData, otherwise don't add it to filteredData
    return datadate === filterDate;
  });
  renderTable();
}

// Render the table for the first time on page load

renderTable();

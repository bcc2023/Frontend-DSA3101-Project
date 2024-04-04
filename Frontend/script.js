// Function to fetch staff counts from the backend
async function fetchStaffCounts() {
  try {
    const response = await fetch('/api/staff-counts');
    if (!response.ok) {
      throw new Error(`Failed to fetch staff counts: ${response.statusText}`);
    }
    const data = await response.json();
    fullTimeCountElement.innerText = data.fullTimeCount;
    partTimeCountElement.innerText = data.partTimeCount;
  } catch (error) {
    console.error('Error fetching staff counts:', error);
  }
}

// Function to fetch demand forecast data from the backend
async function fetchDemandForecast() {
  try {
    const response = await fetch('/api/demand-forecast');
    if (!response.ok) {
      throw new Error(`Failed to fetch demand forecast data: ${response.statusText}`);
    }
    const data = await response.json();
    updateDemandForecastChart(data);
  } catch (error) {
    console.error('Error fetching demand forecast data:', error);
  }
}

// Function to fetch staff schedule data from the backend
async function fetchStaffSchedule() {
  try {
    const response = await fetch('/api/staff-schedule');
    if (!response.ok) {
      throw new Error(`Failed to fetch staff schedule data: ${response.statusText}`);
    }
    const data = await response.json();
    updateStaffSchedule(data);
  } catch (error) {
    console.error('Error fetching staff schedule data:', error);
  }
}

// Function to fetch estimated cost data from the backend
async function fetchEstimatedCost() {
  try {
    const response = await fetch('/api/estimated-cost');
    if (!response.ok) {
      throw new Error(`Failed to fetch estimated cost data: ${response.statusText}`);
    }
    const data = await response.json();
    updateEstimatedCost(data);
  } catch (error) {
    console.error('Error fetching estimated cost data:', error);
  }
}

// Function to fetch employee data from the backend
async function fetchEmployees() {
  try {
    const response = await fetch('/api/employees');
    if (!response.ok) {
      throw new Error(`Failed to fetch employee data: ${response.statusText}`);
    }
    const data = await response.json();
    updateEmployeeList(data);
  } catch (error) {
    console.error('Error fetching employee data:', error);
  }
}

// Function to update the employee list
function updateEmployeeList(employees) {
  const employeeList = document.getElementById('employee-list');
  employeeList.innerHTML = '';

  employees.forEach(employee => {
    const employeeItem = document.createElement('div');
    employeeItem.classList.add('employee-item');
    employeeItem.innerHTML = `
      <span>${employee.name}</span>
      <span>${employee.position}</span>
      <button class="edit-employee" data-id="${employee.id}">Edit</button>
      <button class="remove-employee" data-id="${employee.id}">Remove</button>
    `;
    employeeList.appendChild(employeeItem);
  });
}

// Call the fetch functions on page load
fetchStaffCounts();
fetchDemandForecast();
fetchStaffSchedule();
fetchEstimatedCost();
fetchEmployees();

// Function to handle tab switching
function switchTab(event) {
  const tabId = event.target.getAttribute('data-tab');
  const tabs = document.querySelectorAll('.employee-tabs li');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => tab.classList.remove('active'));
  tabContents.forEach(content => content.classList.remove('active'));

  event.target.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

// Add event listeners to the tabs
const tabs = document.querySelectorAll('.employee-tabs li');
tabs.forEach(tab => tab.addEventListener('click', switchTab));
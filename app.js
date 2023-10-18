const citySelect = document.getElementById("citySelect");
const departmentSelect = document.getElementById("departmentSelect");
const employeeSelect = document.getElementById("employeeSelect");

const departmentsData = {
  Москва: ["Цех1", "Цех2"],
  "Санкт-Петербург": ["Цех3"],
};

const employeesData = {
  Цех1: ["Иван", "Алексей"],
  Цех2: ["Мария"],
  Цех3: ["Елена", "Ольга"],
};

citySelect.addEventListener("change", function () {
  updateDepartments();
  updateEmployees();
});

departmentSelect.addEventListener("change", function () {
  updateEmployees();
});

function updateDepartments() {
  const selectedCity = citySelect.value;
  departmentSelect.innerHTML = "";
  departmentsData[selectedCity].forEach((department) => {
    const option = document.createElement("option");
    option.value = department;
    option.textContent = department;
    departmentSelect.appendChild(option);
  });
}

function updateEmployees() {
  const selectedDepartment = departmentSelect.value;
  employeeSelect.innerHTML = "";
  employeesData[selectedDepartment].forEach((employee) => {
    const option = document.createElement("option");
    option.value = employee;
    option.textContent = employee;
    employeeSelect.appendChild(option);
  });
}

updateDepartments();
updateEmployees();

const currentDate = new Date();
const currentHour = currentDate.getHours();
if (currentHour >= 8 && currentHour < 20) {
  document.querySelector('input[name="shift"][value="Первая"]').checked = true;
} else {
  document.querySelector('input[name="shift"][value="Вторая"]').checked = true;
}

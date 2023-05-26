"use strict";

let statesDDL = document.querySelector("#states-DDL");
let parkTypesDDL = document.querySelector("#park-types-DDL");
const parkTableBody = document.querySelector("#parks-table-body");

function buildParkRow(tbody, park) {
  let row = tbody.insertRow(-1);

  let cell1 = row.insertCell(0);
  cell1.innerText = park.LocationName;

  let cell2 = row.insertCell(1);
  if (!park.Address) {
    cell2.innerText = "No Address";
  } else {
    cell2.innerText = park.Address;
  }

  let cell3 = row.insertCell(2);
  cell3.innerText = park.City;

  let cell4 = row.insertCell(3);
  cell4.innerText = park.State;

  let cell5 = row.insertCell(4);
  if (!park.ZipCode) {
    cell5.innerText = "No ZIP";
  } else {
    cell5.innerText = park.ZipCode;
  }

  let cell6 = row.insertCell(5);
  if (!park.Phone) {
    cell6.innerText = "No Phone";
  } else {
    cell6.innerText = `${park.Phone}`;
  }

  let cell7 = row.insertCell(6);
  if (!park.Visit) {
    cell7.innerText = "No URL";
  } else {
    cell7.innerHTML = `<a href="${park.Visit}" target="_blank">Visit Page</a>`;
  }
}

function stateLocationList() {
  let count = 0;

  let selectOption = document.createElement("option");
  selectOption.value = " ";
  selectOption.textContent = "Select location...";
  statesDDL.appendChild(selectOption);

  for (const location of locationsArray) {
    let option = new Option(location, count);
    statesDDL.appendChild(option);
    count++;
  }
}

function parkTypeList() {
  let count = 0;

  let selectOption = document.createElement("option");
  selectOption.value = " ";
  selectOption.textContent = "Select Type...";
  parkTypesDDL.appendChild(selectOption);

  for (const type of parkTypesArray) {
    let option = new Option(type, count);
    parkTypesDDL.appendChild(option);
    count++;
  }
}

function checkButtonValue() {
  const selectedOption = document.querySelector('input[name="button-choices"]:checked').value;
  if (selectedOption == 1) {
    statesDDL.style.display = "block";
    parkTypesDDL.style.display = "none";
    clearTable();
    stateLocationList();
    clearDDL(parkTypesDDL);
  }
  if (selectedOption == 2) {
    parkTypesDDL.style.display = "block";
    statesDDL.style.display = "none";
    clearTable();
    parkTypeList();
    clearDDL(statesDDL);
  }
}

function filterParksByState(state) {
  return nationalParksArray.filter(function (park) {
    return park.State == state;
  });
}

function filterParksByType(type) {
  return nationalParksArray.filter(function (park) {
    return park.LocationName.includes(type);
  });
}

function loadParkByStateTable() {
  clearTable();

  let stateIndex = parseInt(statesDDL.value);
  let selectedState = locationsArray[stateIndex];
  let filteredParksByStateList = filterParksByState(selectedState);

  for (const park of filteredParksByStateList) {
    buildParkRow(parkTableBody, park);
  }
}

function loadParkByTypeTable() {
  clearTable();

  let typeIndex = parseInt(parkTypesDDL.value);
  let selectedType = parkTypesArray[typeIndex];
  let filteredParksByTypeList = filterParksByType(selectedType);

  for (const park of filteredParksByTypeList) {
    buildParkRow(parkTableBody, park);
  }
}

function clearTable() {
  parkTableBody.innerHTML = "";
}

function clearDDL(dropList) {
  dropList.innerHTML = "";
}
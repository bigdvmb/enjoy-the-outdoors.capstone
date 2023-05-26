"use strict";

const mountainsHome = document.querySelector("#mountains-home");
const mountainTableBody = document.querySelector("#mountain-table-body");

function buildMountainRow(tbody, mountain) {
    let row = tbody.insertRow(-1)

    let cell1 = row.insertCell(0)
    cell1.innerHTML = `<img src="images/${mountain.img}">`

    let cell2 = row.insertCell(1);
    cell2.innerHTML = mountain.name;

    let cell3 = row.insertCell(2);
    cell3.innerHTML = mountain.desc;
    
    let cell4 = row.insertCell(3);
    cell4.innerHTML = `${mountain.elevation} ft`
    
    let cell5 = row.insertCell(4);
    cell5.innerHTML = mountain.effort;;

    
}

function mountainsList() {
    let count = 0;

    let selectOption = document.createElement("option");
    selectOption.value = " ";
    selectOption.textContent = "Select a BIG BEAUTIFUL mountain...";
    mountainsHome.appendChild(selectOption);

    for (const mountain of mountainsArray) {
        let option = new Option(mountain.name, count);
        mountainsHome.appendChild(option);
        count++;
    }
}

mountainsList();

function displayMountain(mountainIndex) {
    clearTable()

    if (mountainIndex == " ") {
        clearTable();
        return;
    }

    let mountain = mountainsArray.find(function (mountain, index){
        return mountainIndex == index;
    });
    buildMountainRow(mountainTableBody, mountain);
}

function clearTable() {
    mountainTableBody.innerHTML = "";
}
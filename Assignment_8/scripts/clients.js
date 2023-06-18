var table = document.getElementById('TableSection');
var tableCell = document.createElement('td');
var ClientDetails = /** @class */ (function () {
    function ClientDetails(args) {
        this.name = args.name;
        this.score = args.score;
        this.email = args.email;
    }
    return ClientDetails;
}());
var clientData = [
    { name: "Vijay Prakash", score: 34, email: "vijay@technovert.com" },
    { name: "Sashi Pagadala", score: 21, email: "sashi@technovert.com" },
    { name: "Hari Nallaparaju", score: 50, email: "hari@technovert.com" },
    { name: "Surya Nallaparaju", score: 44, email: "surya@technovert.com" }
];
var createClient = function (name, score, email) {
    var push = [];
    for (var i = 0; i < clientData.length; i++) {
        push[i] = new ClientDetails(clientData[i]);
    }
    return push;
};
var clients = clientData.map(function (client) { return new ClientDetails(client); });
var scores = clients.map(function (client) { return client.score; });
console.log(scores);
for (var index = 0, j = 0; index < 7; index++, j++) {
    var tr = document.createElement('tr');
    tr.appendChild(document.createElement('td'));
    tr.appendChild(document.createElement('td'));
    tr.appendChild(document.createElement('td'));
    tr.appendChild(document.createElement('td'));
    tr.appendChild(document.createElement('td'));
    var inputCell = tr.cells[0].appendChild(document.createElement('input'));
    inputCell.setAttribute("type", "checkbox");
    inputCell.setAttribute('id', 'CheckBox');
    inputCell.className = "check";
    for (var innerIndex = 0; innerIndex < 1 && j < clients.length; innerIndex++) {
        tr.cells[1].appendChild(document.createTextNode(clients[j].name));
        tr.cells[2].appendChild(document.createTextNode(clients[j].score));
        tr.cells[3].appendChild(document.createTextNode(clients[j].email));
        var val = +(tr.cells[2].textContent);
        tr.cells[2].setAttribute("class", "num");
    }
    table.appendChild(tr);
}
var lastRow = document.createElement('tr');
lastRow.appendChild(document.createElement('td'));
lastRow.appendChild(document.createElement('td'));
lastRow.appendChild(document.createElement('td'));
lastRow.appendChild(document.createElement('td'));
lastRow.appendChild(document.createElement('td'));
table.appendChild(lastRow);
var selectTop = document.getElementById("checkbox-head");
var check = document.getElementsByClassName("check");
for (var index = 0; index < check.length; index++) {
    check[index].addEventListener("change", selectAll);
}
function selectAll() {
    var flag = 0;
    for (var index = 0; index < check.length; index++) {
        if (check[index].checked) {
            flag = flag + 1;
        }
    }
    if (flag == check.length) {
        selectTop.checked = true;
    }
    else {
        selectTop.checked = false;
    }
}
selectTop.addEventListener("click", allSelect);
function allSelect() {
    var check = document.getElementsByClassName("check");
    if (selectTop.checked == true) {
        for (var index = 0; index < check.length; index++) {
            check[index].checked = true;
        }
    }
    else if (selectTop.checked == false) {
        for (var index = 0; index < check.length; index++) {
            check[index].checked = false;
        }
    }
}
var searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", inputSearch);
function inputSearch() {
    var searchText = searchInput.value.toLowerCase();
    var cells = document.getElementsByTagName("td");
    var cellCount;
    for (cellCount = 0; cellCount < cells.length; cellCount++) {
        if (cellCount != 0 && cellCount != 5 && cellCount != 15 && cellCount != 10 && cellCount != 20 && cellCount != 25 && cellCount != 30 && cellCount != 35 && cellCount != 40) {
            var cell = cells[cellCount];
            var text = cell.textContent.toLowerCase();
            if (text.indexOf(searchText) == 0) {
                var regex = new RegExp(searchText, "gi");
                cell.innerHTML = (cell.textContent).replace(regex, "<mark>$&</mark>");
            }
            else {
                cell.innerHTML = cell.textContent;
            }
        }
    }
}
var calculateButton = document.getElementById("cal");
var scoreVal = document.getElementsByClassName("num");
var checkval = document.getElementsByClassName("check");
console.log(val);
calculateButton.addEventListener("click", calculator);
function calculator() {
    var sum = 0;
    var count = 0;
    var max = 0;
    for (var index = 0; index < scores.length; index++) {
        if (checkval[index].checked) {
            count = count + 1;
            sum = ((scores[index])) + sum;
            if (max < +(scores[index])) {
                max = +(scores[index]);
            }
        }
    }
    var avg = Math.floor(sum / count);
    var average = document.getElementById("AvgValue");
    average.textContent = JSON.stringify(avg);
    var maximum = document.getElementById("MaxValue");
    maximum.textContent = JSON.stringify(max);
}

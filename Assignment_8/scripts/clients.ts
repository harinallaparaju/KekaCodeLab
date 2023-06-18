const table = document.getElementById('TableSection') as HTMLTableElement;
const tableCell = document.createElement('td') as HTMLTableCellElement;

class ClientDetails{
    name: any;
    score: any;
    email: any;
    constructor(args: any){
        this.name = args.name;
        this.score = args.score;
        this.email = args.email;
    }
}

const clientData = [
    {name: "Vijay Prakash", score: 34, email: "vijay@technovert.com"},
    {name: "Sashi Pagadala", score: 21, email: "sashi@technovert.com"},
    {name: "Hari Nallaparaju", score: 50, email: "hari@technovert.com"},
    {name: "Surya Nallaparaju", score: 44, email: "surya@technovert.com"}
];

const createClient = (name: string, score: number, email: string) => {
    let push = [];
    for(let i = 0; i < clientData.length; i++){
        push[i] = new ClientDetails(clientData[i]);
    }
    return push;
};

let clients: ClientDetails[] = clientData.map(client => new ClientDetails(client));

let scores: number[] = clients.map(client => client.score);
console.log(scores);


for(let index = 0, j = 0 ; index < 7 ; index++, j++){
    var tr = document.createElement('tr') as HTMLTableRowElement;

    tr.appendChild(document.createElement('td') ) as HTMLTableCellElement;
    tr.appendChild(document.createElement('td') ) as HTMLTableCellElement;
    tr.appendChild(document.createElement('td') ) as HTMLTableCellElement;
    tr.appendChild(document.createElement('td') ) as HTMLTableCellElement;
    tr.appendChild(document.createElement('td') ) as HTMLTableCellElement;

    let inputCell = tr.cells[0].appendChild(document.createElement('input') );
    inputCell.setAttribute("type", "checkbox");
    inputCell.setAttribute('id','CheckBox');
    inputCell.className = "check";

    for(let innerIndex = 0 ; innerIndex < 1 && j < clients.length ; innerIndex++){
        tr.cells[1].appendChild(document.createTextNode(clients[j].name) );
        tr.cells[2].appendChild(document.createTextNode(clients[j].score) );
        tr.cells[3].appendChild(document.createTextNode(clients[j].email) );
        
         var val = +(tr.cells[2].textContent);

        tr.cells[2].setAttribute("class", "num");
    }

    table.appendChild(tr);

}

let lastRow = document.createElement('tr') as HTMLTableRowElement;
    lastRow.appendChild(document.createElement('td') ) as HTMLTableCellElement;
    lastRow.appendChild(document.createElement('td') ) as HTMLTableCellElement;
    lastRow.appendChild(document.createElement('td') ) as HTMLTableCellElement;
    lastRow.appendChild(document.createElement('td') ) as HTMLTableCellElement;
    lastRow.appendChild(document.createElement('td') ) as HTMLTableCellElement;
    table.appendChild(lastRow);

let selectTop = document.getElementById("checkbox-head") as HTMLInputElement;
let check = document.getElementsByClassName("check") as HTMLCollectionOf<HTMLInputElement>;

for (let index = 0; index < check.length; index++) {
    check[index].addEventListener("change", selectAll);
}

function selectAll() {
    let flag: number = 0;
        for (let index = 0; index < check.length; index++) {
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
    let check = document.getElementsByClassName("check") as HTMLCollectionOf<HTMLInputElement>;
    if (selectTop.checked == true) {
        for (let index = 0; index < check.length; index++) {
            check[index].checked = true;
        }
    } else if (selectTop.checked == false) {
        for (let index = 0; index < check.length; index++) {
            check[index].checked = false;
        }
    }
}

const searchInput = document.getElementById("searchInput") as HTMLInputElement;searchInput.addEventListener("keyup", inputSearch)

function inputSearch()
{
    const searchText = searchInput.value.toLowerCase();
    const cells = document.getElementsByTagName("td");
    let cellCount: any;
    for ( cellCount = 0; cellCount < cells.length; cellCount++) 
    {
        if(cellCount!=0 && cellCount!=5 && cellCount!=15 && cellCount!=10 && cellCount!=20 && cellCount!= 25 && cellCount!=30 && cellCount!= 35 && cellCount!=40){
            const cell = cells[cellCount];
            let text = cell.textContent.toLowerCase();
            if (text.indexOf(searchText) == 0) {
                let regex = new RegExp(searchText, "gi")
                cell.innerHTML = (cell.textContent).replace(regex, "<mark>$&</mark>")
            }
            else{
                cell.innerHTML = cell.textContent
            }
        }
    }
}


let calculateButton = document.getElementById("cal") as HTMLButtonElement;
let scoreVal = document.getElementsByClassName("num") as HTMLCollectionOf<HTMLInputElement>;
let checkval = document.getElementsByClassName("check") as HTMLCollectionOf<HTMLInputElement>;
console.log(val);
calculateButton.addEventListener("click", calculator);

    function calculator() {
    let sum: number = 0;
    let count: number = 0;
    let max: number = 0;
    for (let index = 0; index < scores.length; index++) {
        if (checkval[index].checked) {
            count = count + 1;
            sum = ((scores[index])) + sum;
            if (max < +(scores[index])) {
                max = +(scores[index]);
            } 
        } 
    }

    let avg: Number = Math.floor(sum / count);
    let average = document.getElementById("AvgValue") as HTMLElement;
    average.textContent = JSON.stringify(avg);
    let maximum = document.getElementById("MaxValue") as HTMLElement;
    maximum.textContent = JSON.stringify(max);
}

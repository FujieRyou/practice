let num = [1,2,3,4,5,6,7,8,9];

let nineNine = document.getElementById("nineNine");

// ele = '<tr>';
// for(let f = 1; f <= 9; f++){
    //     console.log(f);
    //     ele += `<td>${1*f}</td>`;
    // }
    // ele += '</tr>';
    // console.log(ele);
    
    // nineNine.innerHTML = ele;
    
    
    
    let ele;
    // ele = "<tr>";
    for (let b = 1; b <= 9; b++){
        for(let f = 1; f <= 9; f++){
        // ele += `<td>${f*b}</td>`;
        ele = f*b;
        console.log(ele);
    };
};
// ele += "</tr>";

    nineNine.innerHTML = ele;

// console.log(ele);


// for( let a = 1; a <= 9; a++ ){
//     console.log(a*2);
// };

let element1="";
let maxNo = 5;
for(let line = 1; line <= maxNo; line++){
    
    element1 += "<tr>";
    for(let squares = 1; squares <= maxNo; squares++){
        element1 += `<td>${line * squares}</td>`;
    }
    element1 += "</tr>";
    console.log(element1);
}
nineNine.innerHTML = element1;





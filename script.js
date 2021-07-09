// birthday variable 
let bDate = document.getElementById("date");

// today variable
let today = new Date()
let todayYear = today.getFullYear();
let todayMonth = today.getMonth() + 1;
let todayDay = today.getDate();
let todayString = (todayYear) + "-" + (todayMonth) + "-" + (todayDay);
// console.log(todayString);

// calculation function 
function change(){
    let bYear = bDate.value.slice(0, 4);
    let bMonth = bDate.value.slice(5, 7);
    let bDay = bDate.value.slice(8, 10);
    // console.log(bDate.value);
    // console.log(bYear);
    // console.log(bMonth);
    // console.log(bDay);
    
    let resultYear = todayYear - bYear;
    let resultMonth = todayMonth - bMonth;
    let resultDay = todayDay - bDay;
    // console.log(resultYear, resultMonth, resultDay);
    // let result ={
        // resultYear = resultYear,
        // resultMonth = resultMonth,
        // resultDay = resultDay
    // }
    let main = document.getElementById("main");
    let answer = document.getElementById("answer");
    main.style.visibility = "hidden";
    answer.innerHTML = "You are " + resultYear + " Years, " + resultMonth + " Months and " + resultDay + " Days."
    // console.log(answer.innerHTML);
    answer.style.visibility = "visible";
    return answer;
};
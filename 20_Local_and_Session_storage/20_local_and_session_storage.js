console.log("Local and Session storage.");

// //add a key-value in local storage📌📌📌
// localStorage.setItem("name",'sanjay');
// localStorage.setItem("name2",'Mou');

// //clear the entire localstorage📌📌📌
// // localStorage.clear();

// //remove the particular value in localStorage📌📌📌
// localStorage.removeItem("name2")


// console.table(localStorage);
// console.log(typeof localStorage);
// console.log(window.localStorage.name);
// console.log(window.localStorage.name2);

// let namee = localStorage.getItem('name2');//'name' also set
// console.log("By getItem The value of name2 is by getItem:",namee);

// // // STORE ARRAY IN LOCALSTORAGE📌📌📌
// let myArray = ["Sanjay", 19 ,"Collage dropper", "Understanded"];


// localStorage.setItem("bioOfSanjay", JSON.stringify(myArray));
// // localStorage.clear();

// //convert string to array by JSON
// let name4 =JSON.parse(localStorage.getItem("bioOfSanjay"));
// console.log(name4);



// // STORE ARRAY IN LOCALSTORAGE📌📌📌
let myObj = {
    herName : "Moumou",
    herAge : 14,
    herEducation : `iDon'tKnow`,
}

let objInLocalStorage =localStorage.setItem("herBio", JSON.stringify(myObj));

let name5 = JSON.parse(localStorage.getItem("herBio"));//it will be object
console.table(localStorage);



// // session STORAGE is same as local storage📌📌📌
sessionStorage.setItem('name1', "sanjay");
sessionStorage.setItem('name2', "Mou");
sessionStorage.setItem('name3', "Ricky");

console.log(sessionStorage);



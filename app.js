
const form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", function (e) {
    console.log(e);
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const h2 = document.querySelector("h2");
    const cal1 = document.querySelector(".cal1");
    const cal2 = document.querySelector(".cal2");
    const cal3 = document.querySelector(".cal3");

    if (height === "" || height < 0 || isNaN(height)) {
        h2.innerHTML = (`${height}`);
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        h2.innerHTML = (`${weight}`);
    } else {
        const bmi = parseFloat((weight / ((height * height) / 10000)).toFixed(2));
        if (bmi <= 18.5) {
            cal1.innerHTML = `= ${bmi}`
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            cal2.innerHTML = `= ${bmi}`

        }
        else if (bmi >= 25 && bmi <= 29.9) {
            cal3.innerHTML = `= ${bmi}`

        }


    }
});

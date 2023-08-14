import { get } from "jquery";


export default function compute(scorecard, birthday, sex, dependents, education, housing, residence, employment, industry, income, savings, insurance ){
    var intercept = scorecard[0].score;
    var score = intercept;
    var invalidVar = [];
    var age = getAge(birthday);

    if (age < 18){
        invalidVar.push(age);
    } else if(age >= 18 && age <= 25){
        score += scorecard[1].score; 
    } else if(age >= 26 && age <= 45){
        score += scorecard[2].score;
    } else if (age >= 46 && age <= 55){
        score += scorecard[3].score;
    } else if (age >= 56 && age <= 60){
        score += scorecard[4].score;
    } else if (age >= 61 && age <= 65){
        score += scorecard[5].score;
    } else if (age >= 66 && age <= 75){
        score += scorecard[6].score;
    } else if (age >= 76 && age <= 85){
        score += scorecard[7].score;
    } else if (age > 85){
        invalidVar.push(age);
    }

    if(sex == "Female"){
        score += scorecard[9].score;
    } else if (sex == "Male"){
        score += scorecard[10].score;
    }


    if(dependents == 1){
        invalidVar.push(dependents)
    } else if (dependents == 2){
        score += scorecard[12].score;
    } else if (dependents == 3){
        score += scorecard[13].score;
    } else if (dependents == 4){
        score += scorecard[14].score;
    } else if (dependents == 5){
        score += scorecard[15].score;
    } else if (dependents == 0){
        score += scorecard[16].score;
    } else if (dependents >= 6){
        invalidVar.push(dependents);
    }

    if(education == "College"){
        score += scorecard[18].score;
    } else if (education == "Gradeschool"){
        score += scorecard[19].score;
    } else if (education == "Highschool"){
        score += scorecard[20].score;
    } else if (education == "None of the above"){
        invalidVar.push(education);
    }

    if (housing == "Living in someone's home for Free"){
        score += scorecard[22].score;
    } else if (housing == "Own"){
        score += scorecard[23].score;
    } else if (housing == "Rent"){
        score += scorecard[24].score;
    }

    if(residence >= 11 && residence <= 15){
        score += scorecard[25].score;
    } else if (residence >= 16 && residence <= 20){
        score += scorecard[26].score;
    } else if (residence >= 4 && residence <= 6){
        score += scorecard[27].score;
    } else if (residence >= 7 && residence <= 10){
        score += scorecard[28].score;
    } else if (residence >= 20){
        score += scorecard[29].score;
    } else if (residence < 1){
        invalidVar.push(residence);
    } else if (residence >= 1 && residence <= 3){
        invalidVar.push(residence);
    } else if (residence >= 1 && residence <= 3){
        invalidVar.push(residence);
    }


    if(employment == "Employed full-time"){
        score += scorecard[32].score;
    } else if(employment == "Self-employed"){
        score += scorecard[33].score;
    } else if(employment == "Unemployed"){
        score += scorecard[34].score;
    } else if(employment == "Employed part-time"){
        invalidVar.push(employment);
    }

    if (industry == "Agriculture and Farming"){
        score += scorecard[36].score;
    } else if (industry == "Banking and Finance"){
        score += scorecard[37].score;
    } else if (industry == "Construction and Engineering"){
        score += scorecard[38].score;
    } else if (industry == "Education and Academia"){
        score += scorecard[39].score;
    } else if (industry == "Energy and Utilities"){
        score += scorecard[40].score;
    } else if (industry == "Food and Beverage"){
        score += scorecard[41].score;
    } else if (industry == "Government and Public Administration"){
        score += scorecard[42].score;
    } else if (industry == "Health Care and Pharmaceuticals"){
        score += scorecard[43].score;
    } else if (industry == "Information Technology and Software Development"){
        score += scorecard[44].score;
    } else if (industry == "Manufacturing and Industrial"){
        score += scorecard[45].score;
    } else if (industry == "Networking"){
        score += scorecard[46].score;
    } else if (industry == "Public Works"){
        score += scorecard[47].score;
    } else if (industry == "Religious Organizations"){
        score += scorecard[48].score;
    } else if (industry == "Retail and Wholesale Trade"){
        score += scorecard[49].score;
    } else if (industry == "Tourism and Hospitality"){
        score += scorecard[50].score;
    } else if (industry == "Transportation and Logistics"){
        score += scorecard[51].score;
    } else if (industry == "Unemployed"){
        score += scorecard[52].score;
    } else if (industry == "Media and Entertainment" || industry == "Telecommunications" || industry == "Professional Services (Legal, Accounting, Consulting, etc.)"){
        invalidVar.push(industry);
    }

    if (income >= 10001 && income <= 50000){
        score += scorecard[56].score;
    } else if (income >=50001 && income <= 100000){
        score += scorecard[57].score;
    } else if (income <= 100000){
        score += scorecard[58].score;
    } else if (income >=100001 && income <= 500000 || income >= 1000001 && income <= 5000000 || income > 5000000 || income >= 500001 && income <= 1000000 ){
        invalidVar.push(income);
    }

    if(savings >= 10000 && savings <= 50000){
        score += scorecard[63].score;
    } else if (savings == "I do not have any savings"){
        score += scorecard[64].score;
    } else if (savings < 10000){
        score += scorecard[65].score;
    } else if (savings > 5000000){
        score += scorecard[66].score;
    } else if (savings >= 50001 && savings <= 100000 || savings >= 100001 && savings <= 500000 || savings >= 500001 && savings <= 1000000 || savings >= 1000001 && savings <= 5000000){
        invalidVar.push(savings);
    }

    if (insurance == "No"){
        score += scorecard[71].score;
    } else if (insurance == "Yes"){
        score += scorecard[72].score;
    }

    // console.log(scorecard[40].score);

    // console.log(score);

    return {"score": score, "invalid_variable":invalidVar}
}


function getAge(birthdate) {
    let today = new Date();
    let birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}







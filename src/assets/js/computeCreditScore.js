import { get } from "jquery";
import ScoreDataService from "/src/services/ScoreDataService"

ScoreDataService.getAll()
.then(res=>{
    console.log(res)
});



export default function compute(scorecard, birthday, sex, dependents, education, housing, residence, employment, industry, income, savings, insurance ){
    var intercept = scorecard[0].score;
    var score = intercept;
    var invalidVar = [];
    var age = getAge(birthday);

    if (age < 18){
        invalidVar.push(age);
    } else if(age >= 18 && age <= 25){
        score =+ scorecard[1].score; 
    } else if(age >= 26 && age <= 45){
        score =+ scorecard[2].score;
    } else if (age >= 46 && age <= 55){
        score =+ scorecard[3].score;
    } else if (age >= 56 && age <= 60){
        score =+ scorecard[4].score;
    } else if (age >= 61 && age <= 65){
        score =+ scorecard[5].score;
    } else if (age >= 66 && age <= 75){
        score =+ scorecard[6].score;
    } else if (age >= 76 && age <= 85){
        score =+ scorecard[7].score;
    } else if (age > 85){
        invalidVar.push(age);
    }

    if(sex == "Female"){
        score =+ scorecard[9].score;
    } else {
        score =+ scorecard[10].score;
    }


    if(dependents == 1){
        invalidVar.push(dependents)
    } else if (dependents == 2){
        score =+ scorecard[12].score;
    } else if (dependents == 3){
        score =+ scorecard[13].score;
    } else if (dependents == 4){
        score =+ scorecard[14].score;
    } else if (dependents == 5){
        score =+ scorecard[15].score;
    } else if (dependents == 0){
        score =+ scorecard[16].score;
    } else if (dependents >= 6){
        invalidVar.push(dependents);
    }

    if(education == "College"){
        score =+ scorecard[18].score;
    } else if (education == "Gradeschool"){
        score =+ scorecard[19].score;
    } else if (education == "Highschool"){
        score =+ scorecard[20].score;
    } else if (education == "None of the above"){
        invalidVar.push(education);
    }

    if (housing == "Living in someone's home for free"){
        score =+ scorecard[22].score;
    } else if (housing == "Own"){
        score =+ scorecard[23].score;
    } else if (houseing == "Rent"){
        score =+ scorecard[24].score;
    }

    if(residence >= 11 && residence <= 15){
        score =+ scorecard[25].score;
    } else if (residence >= 16 && residence <= 20){
        score =+ scorecard[26].score;
    } else if (residence >= 4 && residence <= 6){
        score =+ scorecard[27].score;
    } else if (residence >= 7 && residence <= 10){
        score =+ scorecard[28].score;
    } else if (residence >= 20){
        score =+ scorecard[29].score;
    } else if (residence < 1){
        invalidVar.push(residence);
    } else if (residence >= 1 && residence <= 3){
        invalidVar.push(residence);
    } else if (residence >= 1 && residence <= 3){
        invalidVar.push(residence);
    }


    if(employment == "Employed full-time"){
        score =+ scorecard[32].score;
    } else if(employment == "Self-employed"){
        score =+ scorecard[33].score;
    } else if(employment == "Unemployed"){
        score =+ scorecard[34].score;
    } else if(employment == "Employed part-time"){
        invalidVar.push(employment);
    }

    if (industry == "Agriculture and Farming"){
        score =+ scorecard[36].score;
    } else if (industry == "Banking and Finance"){
        score =+ scorecard[37].score;
    } else if (industry == "Construction and Engineering"){
        score =+ scorecard[38].score;
    } else if (industry == "Education and Academia"){
        score =+ scorecard[39].score;
    } else if (industry == "Energy and Utilities"){
        score =+ scorecard[40].score;
    } else if (industry == "Food and Beverage"){
        score =+ scorecard[41].score;
    } else if (industry == "Government and Public Administration"){
        score =+ scorecard[42].score;
    } else if (industry == "Health Care and Pharmaceuticals"){
        score =+ scorecard[43].score;
    } else if (industry == "Information Technology and Software Development"){
        score =+ scorecard[44].score;
    } else if (industry == "Manufacturing and Industrial"){
        score =+ scorecard[45].score;
    } else if (industry == "Networking"){
        score =+ scorecard[46].score;
    } else if (industry == "Public Works"){
        score =+ scorecard[47].score;
    } else if (industry == "Religious Organizations"){
        score =+ scorecard[48].score;
    } else if (industry == "Retail and Wholesale Trade"){
        score =+ scorecard[49].score;
    } else if (industry == "Tourism and Hospitality"){
        score =+ scorecard[50].score;
    } else if (industry == "Transportation and Logistics"){
        score =+ scorecard[51].score;
    }
    console.log(age);
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







const API_URL = 'https://corona.lmao.ninja/v2/countries?sort=country';
let countries=[];

$.getJSON(API_URL, (data)=>{
    //console.log(data);
    countries = data;
    showInfo();
})


const showInfo = () =>{
    //console.log(countries);
    $('#covidTable tbody').empty();
    countries.reverse();
    countries.forEach((country, index)=>{
        $('#covidTable tbody').append(`<tr>
                                            <th scope="row">${index+1}</th>
                                            <td>
                                                <img src=${country.countryInfo.flag}>
                                                ${country.country}
                                            </td>
                                            <td>${country.cases}</td>
                                            <td>${country.active}</td>
                                        </tr>`);
    })
}

const orderMaxTotalCases=()=>{
    countries.sort(function(a, b){
        let a1 = a.cases;
        let b1 = b.cases;
        if(a1==b1) return 0;
        return a1>b1?1:-1;
    })
    showInfo();
}
const orderByName=()=>{
    countries.sort(function(a, b){
        let a1 = a.country;
        let b1 = b.country;
        if(a1==b1) return 0;
        return a1>b1?1:-1;
    })
    countries.reverse();
    showInfo();
}
const orderByActiveCases=()=>{
    countries.sort(function(a, b){
        let a1 = a.active;
        let b1 = b.active;
        if(a1==b1) return 0;
        return a1>b1?1:-1;
    })
    showInfo();
}
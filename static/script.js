const API_URL = 'https://corona.lmao.ninja/v2/countries?sort=country';

$.getJSON(API_URL, (data)=>{
    //console.log(data);
    showInfo(data);
})

const showInfo = (countries) =>{
    //console.log(countries);
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


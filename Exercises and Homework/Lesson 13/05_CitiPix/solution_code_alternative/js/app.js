const cities = [
    ["NYC","nyc"],
    ["SF","sf"],
    ["LA","la"],
    ["ATX","austin"],
    ["SYD","sydney"]
  ];

document.addEventListener('DOMContentLoaded', function(event) {

  for(i=0;i<cities.length;i++) {
    let newOption = document.createElement('option');
    newOption.value =  cities[i][1];
    newOption.innerText =  cities[i][0];
    document.querySelector('#city-type').appendChild(newOption);
  }

  document.querySelector('#city-type').addEventListener('change', function(){
    var city = document.querySelector('#city-type').value;
    document.body.setAttribute('class',city);
  });

});
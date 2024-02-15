function konversi(){
    var celcius = parseFloat(document.getElementById('celcius').value);
    var fahrenheit = (celcius * 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit;
}

function reset(){
    document.getElementById('celcius').value='';
    document.getElementById('fahrenheit').value = '';
}

function reverse(){
    var celcius = parseFloat(document.getElementById('fahrenheit').value);
    var fahrenheit = (celcius - 32) * 5/9;
    document.getElementById('celcius').value = fahrenheit;
}
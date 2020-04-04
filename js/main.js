var input = document.getElementById('input');
input.addEventListener('input', function () {
        var value = input.value;

        var kgOutput = document.getElementById('gOutputSpan');
        kgOutput.innerHTML = (value*453.592).toFixed(2);
        var kgOutput = document.getElementById('kgOutputSpan');
        kgOutput.innerHTML = (value*0.453592).toFixed(2);
        var kgOutput = document.getElementById('ozOutputSpan');
        kgOutput.innerHTML = value*16;

        
    
    
})
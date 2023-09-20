const cels =document.getElementById("celcius")
const far =document.getElementById("farenheit")
const kel =document.getElementById("kelvin")

function calc(event)
{
    const currentValue = +event.target.value

    switch (event.target.name) {
        case "celcius":
            kel.value = (currentValue + 273.32).toFixed(2)
            far.value = (currentValue * 1.8 + 32).toFixed(2)
            break;
        case "farenheit":
            kel.value = ((currentValue - 32)/ 1.8 + 273.32).toFixed(2)
            cels.value = ((currentValue - 32)/1.8).toFixed(2)
            break;
        case "kelvin":
            cels.value = (currentValue - 273.32).toFixed(2)
            far.value = ((currentValue- 273.32) * 1.8 + 32).toFixed(2)
            break;  
        default:
            break;
    }
}
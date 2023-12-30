// print Current window
function currentWindowPrint()
{
    window.print()
}

// function for Increase value by 1, and counting up to 1000
function increaseValueByOne(){
    const andOneDisplay = document.querySelector('.displayOperation')
    let value = Number(andOneDisplay.innerHTML)
    
    if(value < 1000)
    {
        andOneDisplay.innerHTML = value + 1
    }
    else
    {
        alert(`Sorry, only counting up to 1000 is allowed !`)
    }
}

// function for decrease value by 1 
function decreaseValueByOne(){
    const decOneDisplay = document.querySelector('.displayOperation')
    let newValue = Number(decOneDisplay.innerHTML)

    if(newValue === 0)
    {
        decOneDisplay.innerHTML = 0
        alert(`sorry, negative values is not allow !`)
    }else
    {
        decOneDisplay.innerHTML = newValue - 1  
    }
}

// function for reset counter values 
function restValue()
{
    const restVal = document.querySelector('.displayOperation')
    const nowValueIs = Number(restVal.innerHTML)

    if(nowValueIs !== 0)
    {
        restVal.innerHTML = 0
    }
}

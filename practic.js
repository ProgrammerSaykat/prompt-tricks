
const innerTash = document.getElementById('name')

const add = () => {  
    innerTash.innerHTML = '';
    promptCall();

}

const promptCall = () => {
    
    
    const promptValue = prompt("Please enter your name" );

    if(promptValue !== ""){
        
        innerTash.innerHTML = `
        <h1>Hello</h1> 
        <h5 class="text-danger">${promptValue}<h5>
        <p>Thanks for provite your name. :)</p>
        `

    }

    if(promptValue === ''){
        alert('নাম না দিয়া কই যাবি নাম দে')
        add();

    }
    else if(promptValue === null){
        alert('নাম দে বেটা')
        add()
    }
    else if (promptValue === 'null') {
        alert('আমার সাথে মজা আবার আয়')
        add()
    }
    
}



const showTheLocation = () => {
    const sure = confirm('Ate You show your Location')
    if (sure === true) {
        const p = document.getElementById('show-href')
        p.innerText = `${document.location.href
        }`
    }
}
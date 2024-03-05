const qr_input = document.getElementById('qrinput')
const qr_button=document.getElementById('qrbutton')
const qr_img=document.getElementById('qrimg')


 qr_button.addEventListener('click',() =>
 {
    const inputValue = qr_input.value
    
    if(!inputValue )
    {
        alert("please enter a valid URL")
       
    }
    else 
    {
        qr_img.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
        qr_img.alt=`QR code for ${inputValue}`

    }

 }

 );
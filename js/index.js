// document.getElementById('donate-btn').addEventListener('click', function(){
//     const inputAmount = parseFloat(document.getElementById('input-amount').value);
//     const currentDonation = parseFloat(document.getElementById('current-donation').innerText);
//     const newCurrentDonation = inputAmount + currentDonation;
//     // console.log(currentDonation, inputAmount);
//     document.getElementById('current-donation').innerText = newCurrentDonation;
// })

document.getElementById('donate-btn').addEventListener('click', function(){
    
    const inputAmount = getInputFieldValueById('input-amount');
    const currentDonation = getTextFieldById('current-donation');
    const accountBalance = getTextFieldById('account-balance');
    

    const newCurrentDonation = inputAmount + currentDonation;
    const newAccountBalance = accountBalance - inputAmount;
    const modal = document.getElementById('my_modal_1');

    if(inputAmount <= 0 || isNaN(inputAmount) || currentDonation > accountBalance){
        alert('Invalid Donation Amount.');
        return;
    }else{   
        modal.showModal();
    };
      
    document.getElementById('current-donation').innerText = newCurrentDonation;
    document.getElementById('account-balance').innerText = newAccountBalance;
 
  
});



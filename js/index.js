document.getElementById('donate-btn').addEventListener('click', function(){
    
    const inputAmount = getInputFieldValueById('input-amount');
    const currentDonation = getTextFieldById('current-donation');
    const accountBalance = getTextFieldById('account-balance');
    
    const newCurrentDonation = inputAmount + currentDonation;
    const newAccountBalance = accountBalance - inputAmount;
    const modal = document.getElementById('my_modal_1');

    if(inputAmount <= 0 || isNaN(inputAmount) || inputAmount > accountBalance){
        alert('Invalid Donation Amount.');
        return;
    }else{   
        modal.showModal();
    };
      
    document.getElementById('current-donation').innerText = newCurrentDonation;
    document.getElementById('account-balance').innerText = newAccountBalance;  
    
});

// section-2
document.getElementById('donate-btn-2').addEventListener('click', function(){
    
    const inputAmount = getInputFieldValueById('input-amount-2');
    const currentDonation = getTextFieldById('current-donation-2');
    const accountBalance = getTextFieldById('account-balance');
    

    const newCurrentDonation = inputAmount + currentDonation;
    const newAccountBalance = accountBalance - inputAmount;
    const modal = document.getElementById('my_modal_1');

    if(inputAmount <= 0 || isNaN(inputAmount) || inputAmount > accountBalance){
        alert('Invalid Donation Amount.');
        return;
    }else{   
        modal.showModal();
    };
      
    document.getElementById('current-donation-2').innerText = newCurrentDonation;
    document.getElementById('account-balance').innerText = newAccountBalance;
 
  
});
// section-3
document.getElementById('donate-btn-3').addEventListener('click', function(){
    
    const inputAmount = getInputFieldValueById('input-amount-3');
    const currentDonation = getTextFieldById('current-donation-3');
    const accountBalance = getTextFieldById('account-balance');
    

    const newCurrentDonation = inputAmount + currentDonation;
    const newAccountBalance = accountBalance - inputAmount;
    const modal = document.getElementById('my_modal_1');

    if(inputAmount <= 0 || isNaN(inputAmount) || inputAmount > accountBalance){
        alert('Invalid Donation Amount.');
        return;
    }else{   
        modal.showModal();
    };
      
    document.getElementById('current-donation-3').innerText = newCurrentDonation;
    document.getElementById('account-balance').innerText = newAccountBalance;
 
  
});


     
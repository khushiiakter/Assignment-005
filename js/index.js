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
    
    // history part
    const historyItem = document.createElement('div');
    const donateName = document.getElementById('donateName1').innerText;
    historyItem.className = " p-6 border border-solid border-[#1111111A] rounded-2xl bg-white";
        historyItem.innerHTML = `
            <h3 class = "text-xl font-bold leading-8 text-secondary">${inputAmount} is Donated for ${donateName}</h3>           
            <p class = "text-base font-light leading-[26px] text-[#111111B3]">Date: ${
                new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka', timeStyle: 'medium', dateStyle: 'full'})
                // new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka', timeStyle: 'medium', dateStyle: 'full', timeZoneName: 'short'}).replace(',', 'GMT+0600 (Bangladesh Standard Time)')
            } GMT+0600 (Bangladesh Standard Time)</p>
        `;
    const historyContainer = document.getElementById('historyContainer');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild); 
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
    
    // history part
    const historyItem = document.createElement('div');
    const donateName = document.getElementById('donateName2').innerText;
    historyItem.className = " p-6 border border-solid border-[#1111111A] rounded-2xl bg-white";
        historyItem.innerHTML = `
            <h3 class = "text-xl font-bold leading-8 text-secondary">${inputAmount} is Donated for ${donateName}</h3>           
            <p class = "text-base font-light leading-[26px] text-[#111111B3]">Date: ${
                new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka', timeStyle: 'medium', dateStyle: 'full'})
                // new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka', timeStyle: 'medium', dateStyle: 'full', timeZoneName: 'short'}).replace(',', 'GMT+0600 (Bangladesh Standard Time)')
            } GMT+0600 (Bangladesh Standard Time)</p>
        `;
    const historyContainer = document.getElementById('historyContainer');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild); 
  
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

    // history part
    const historyItem = document.createElement('div');
    const donateName = document.getElementById('donateName3').innerText;
    historyItem.className = " p-6 border border-solid border-[#1111111A] rounded-2xl bg-white";
        historyItem.innerHTML = `
            <h3 class = "text-xl font-bold leading-8 text-secondary">${inputAmount} is Donated for ${donateName}</h3>           
            <p class = "text-base font-light leading-[26px] text-[#111111B3]">Date: ${
                new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka', timeStyle: 'medium', dateStyle: 'full'})
                // new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka', timeStyle: 'medium', dateStyle: 'full', timeZoneName: 'short'}).replace(',', 'GMT+0600 (Bangladesh Standard Time)')
            } GMT+0600 (Bangladesh Standard Time)</p>
        `;
    const historyContainer = document.getElementById('historyContainer');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);    

});

// history
const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById('donation-tab');

historyTab.addEventListener('click', function(){
    historyTab.classList.add('bg-primary','font-semibold','text-secondary');
    donationTab.classList.remove('bg-primary','font-semibold','text-secondary');
    
    historyTab.classList.remove('border','border-solid','border-[#1111114D]');
    donationTab.classList.add('border','border-solid','border-[#1111114D]');

    document.getElementById('donationTabPart').classList.add('hidden')
})
     
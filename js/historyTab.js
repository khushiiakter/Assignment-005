// history
const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById('donation-tab');

historyTab.addEventListener('click', function(){
    historyTab.classList.add('bg-primary','font-semibold','text-secondary');
    donationTab.classList.remove('bg-primary','font-semibold','text-secondary');
    
    historyTab.classList.remove('border','border-solid','border-[#1111114D]');
    donationTab.classList.add('border','border-solid','border-[#1111114D]');

    document.getElementById('donationTabPart').classList.add('hidden');
    document.getElementById('historyContainer').classList.remove('hidden');
});
// donationTab
donationTab.addEventListener('click', function(){
    
    donationTab.classList.add('bg-primary','font-semibold','text-secondary');
    historyTab.classList.remove('bg-primary','font-semibold','text-secondary');
    donationTab.classList.remove('border','border-solid','border-[#1111114D]');
    historyTab.classList.add('border','border-solid','border-[#1111114D]');
   
    document.getElementById('donationTabPart').classList.remove('hidden');
    document.getElementById('historyContainer').classList.add('hidden');
});
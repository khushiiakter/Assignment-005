function getInputFieldValueById(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    
    return inputValue;
}
function getTextFieldById(id){
    const textValue = parseFloat(document.getElementById(id).innerText);
    return textValue;
}
window.addEventListener('scroll', function(){ 
    const navbar = document.getElementById('navbar');  

    if(window.scrollY > 50){
        // headerPart.classList.add("bg-white/50", "scrolled");
        navbar.classList.remove('bg-[#F9F7F3]', 'scrolled');
    }else{
        navbar.classList.add("backdrop-blur", "bg-[#F9F7F3]");
    }
});
document.getElementById('BlogPage').addEventListener('click', function(){
    window.location.href = "./blog.html";
});
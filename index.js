console.log("Made by Amirtha Krishnan.")
console.log("Reach out to me at @amirthaz on Instagram for custom and cheap websites!")
window.addEventListener("scroll",function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0 )
})
const navigation = document.querySelector('nav');
document.querySelector('.toggle').onclick = function(){
    this.classList.toggle('active');
    navigation.classList.toggle('active');

}
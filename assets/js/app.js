const image_to_text = document.querySelector(".image_to_text");
const text_img = document.querySelector(".text_img");
const text_num = document.querySelector(".text_num");


image_to_text.addEventListener('mouseover', function(e){
    text_num.classList.remove('hidden');
    text_img.classList.add('hidden');
})
image_to_text.addEventListener('mouseout', function(e){
    text_num.classList.add('hidden');
    text_img.classList.remove('hidden');
})




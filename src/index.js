
let trigger = $('.user .arrow');
trigger.on('click', function () {
    let  thisArrow = $(this);
    let thisParent = thisArrow.parent();
    thisArrow.toggleClass('active');
    thisParent.next().toggleClass('close');   
})

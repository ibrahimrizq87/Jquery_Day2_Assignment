$('.item').hide();
$('.side-item').hover(function(){
    $('.side-item').css('left','0%');
},
function(){
    // $('.item-button.btn-secondary').removeClass('btn-secondary').addClass('btn-light');
    // $('.item').hide();
    $('.side-item').css('left','-12%');
});

$('.item-button').click(function(event){
    event.preventDefault();
    var div =$(this).attr('id');
    if ($(this).hasClass('btn-light')) {
        $(this).removeClass('btn-light').addClass('btn-secondary');
    } else {
        $(this).removeClass('btn-secondary').addClass('btn-light');
    }
    
    $('.'+div).slideToggle('slow');
    $('.'+div).css('padding','10px');
    // $('.item-button.btn-secondary').removeClass('btn-secondary').addClass('btn-light');
    // $(this).removeClass('btn-light').addClass('btn-secondary');

});




$.get('https://jsonplaceholder.typicode.com/posts', function(posts) {
    posts.forEach(element => {
        const title = element.title;
        const body = element.body;

        const postHtml = `
            <div class="card shadow mt-2 ">
                <div class="card-header post-title ">
                    ${title}
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0 bg-">
                        <p class="post-body">${body}</p>
                    </blockquote>
                </div>
            </div>
        `;
        $('.post-list').append(postHtml);
    });
});

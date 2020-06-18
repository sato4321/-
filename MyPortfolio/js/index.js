// scroll.revealのjs
const name = new Array('.content-about','.content-skill','.content-service','.content-works','.content-contact');
for(let i = 0;i < name.length;i++){
    ScrollReveal().reveal(name[i],
        {delay:100,duration:1000,opacity:0.1,viewFactor:0.2,reset:false
    });
}
// scroll.revealのjsここまで

// ヘッダーをクリックした時のjquery
$(function(){
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top -100;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });
// ヘッダーをクリックした時のjqueryここまで

$(function(){
  var duration = 300;
  show = $('#show');
  showButton = $('#show').find('i');
  menu = $('#menu');
  show.on('click', function(){
      menu.toggleClass('open');
      if(menu.hasClass('open')){
          menu.stop(true).animate({
              right:'0px'
          },duration);
          showButton.removeClass('fa fa-bars');
          showButton.addClass('fa fa-times');
      }
      else{
          menu.stop(true).animate({
              right:'-180px'
          },duration);
          showButton.removeClass('fa fa-times');
          showButton.addClass('fa fa-bars');
      };
  });
});
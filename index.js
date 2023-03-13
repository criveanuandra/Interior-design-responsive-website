document.ready(function(){

  document.getElementByClassName("fa-bars").click(function(){
    this.classList.toggle("fa-times");
    $('nav').classList.toggle("nav-toggle");
  });

  window.on('scroll load',function(){
    document.getElementByClassName("fa-bars").classList.remove("fa-times");
    $('nav').classList.remove("nav-toggle");
  });

  document.getElementByClassName("count").each(function() {
    let $this = this,
        countTo = $this.attr('data-count');
    $({ countNum: $this.innerText}).animate({
      countNum: countTo
    },
    {
      duration: 5000,
      step: function() {
        $this.innerText = Math.floor(this.countNum);
      },
      complete: function() {
        $this.innerText = this.countNum + '+';
      }
    });
  });

  document.getElementByClassName("project").magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
      enabled:true
    }
  });

});

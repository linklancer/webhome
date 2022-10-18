window.onload = function(){
    //获取外部容器
    let bigout = document.querySelector('.bigout-cont')
    //获取导航栏id
    let nav = document.getElementById('nav-cont')
    bigout.addEventListener('scroll',function(){
       if(bigout.scrollTop >= 70){
        nav.style.boxShadow = 'none'
        nav.style.width = 100 + 'vw'
        nav.style.transform = 'translateY(-30px)'
        nav.style.left = 0 +'vw'
        nav.style.transition = 'all 1s'
        
       }
       if(bigout.scrollTop < 70){
        nav.style.boxShadow = '  0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        nav.style.width = 90 + 'vw'
        nav.style.transform = 'translateY(0px)'
        nav.style.left = 5 +'vw'
        nav.transition = 'all 1s'
       }
    })
}

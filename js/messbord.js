//获取留言板
let textra = document.querySelector('.tera')
//收集留言内容
let messvalue = ''
//获取实时时间
let time = new Date()
let year = time.getFullYear()
let mouth = time.getMonth() + 1
let date = time.getDate()
let hour = time.getHours()
let minete = time.getMinutes()
if(minete < 10) {
    minete = '0' + minete
}
let litime = year +'-'+ mouth +'-' + date  +' ' + hour +':' + minete
//获取留言框
let bord = document.querySelector('.bord-bottom')
textra.addEventListener('focus',function(){
   
   bord.style.height = '190px'
   bord.style.transition = 'height .6s'
})
textra.addEventListener('blur',function(){
    messvalue = textra.value
})
let sub = document.querySelector('.clicksubmit')
sub.addEventListener('click',function(){
    addmess()
    alert('发布留言成功,本功能采用默认昵称与头像,暂时只支持留言,日期时间实时更新')
    textra.value = ''
    bord.style.height = '100px'
    bord.style.transition = 'height .6s'
})
//留言板动态添加函数
function addmess(){
    //创建留言框div
    let everymess = document.createElement('div')
    everymess.className = 'every-mess'
    //创建头像div
    let imgdiv = document.createElement('div')
    imgdiv.className = 'left-img'
    //创建span
    let span1 = document.createElement('span')
    //创建Img
    let img = document.createElement('img')
    //默认头像
    img.src = '../images/4.jpg'
    span1.appendChild(img)
    imgdiv.appendChild(span1)
    //添加头像区
    everymess.appendChild(imgdiv)
    //创建右部具体留言
    let rightme = document.createElement('div')
    rightme.className = 'right-mess'
    //创建ul
    let ul = document.createElement('ul')
    ul.className = 'ul-cont'
    //创建li
    let li1 = document.createElement('li')
    let lspan1 = document.createElement('span')
    lspan1.innerText = 'CRIOS '
    let lspan2 = document.createElement('span')
    lspan2.innerText = ` 留言于 ${litime}`
    li1.appendChild(lspan1)
    li1.appendChild(lspan2)
    //创建第二个li
    let li2 = document.createElement('li')
    let lipan3 = document.createElement('span')
    lipan3.innerText = '回复'
    li2.appendChild(lipan3)
    ul.appendChild(li1)
    ul.appendChild(li2)
    //添加ul
    rightme.appendChild(ul)
    //创建留言板
    let bottomul = document.createElement('div')
    bottomul.className = 'bootom-ul'
    let bspan = document.createElement('span')
    bspan.innerText = messvalue
    bottomul.appendChild(bspan)
    //添加下面ul
   rightme.appendChild(bottomul)
   everymess.appendChild(rightme)
   //最后添加everymess
   let inner = document.querySelector('.inner-left')
   inner.appendChild(everymess)
}
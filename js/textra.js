//创建div子标签函数
function createtitle(flag, n) {
    if (window.location.pathname == '/textra.html') {
        //定义一个存放图片的容器
        let imglist = ['../images/text.jpeg', '../images/脚手架架构图.png', '../images/vue11.png', '../images/vite.jpeg', '../images/07.jpg']
        //定义一个存放文章标题的容器
        let titlelist = [
            '如何不动源码让el-transfer支持分页',
            '关于团队脚手架搭建的一些思考',
            '做了个共享小册的玩意儿',
            'Vue 2 源码笔记系列——effect.ts',
            'vite 1.x 部分核心原理学习',
            '写一个自己的符合 Promise A+ 规范的 Promise 类'
        ]
        //定义文章内容容器
        let titlemain = [
            'el-transfer本身不支持分页,但实际需求需要这个功能,所以研究了一下如何在不动它源码的情况下来实现这个功能',
            '经常临睡前脑子里会冒出一些相关的想法，既然这样，就简单记录了下自己关于团队脚手架搭建的思考，也方便自己以后对比进步',
            '在自己持续购买了一些掘金小册学习后，有些内容质量不错的小册很想分享给团队内的其他小伙伴学习，所以做了个分享小册的小工具。',
            '本系列把 Vue 2.7.0 beta 版本作为学习版本，逐文件分析代码内容，并对重点内容做文字总结。',
            'vue 3 一起横空出世的下一代前端开发与构建工具 Vite 着实也吸引了一大波注意。那么它背后的原理又是怎么一回事呢？',
            '对于一个前端er来说,Promise 是一个相当熟悉的名词。我们知道它的出现就是为了在一定程度上解决回调地狱的问题。最开始认为 Promise 指的就是 ES6 中的 Promise,实际发现并不是这样,它只是其中的一种实现。更了解发现,其实只要符合 Promise A+ 的规范，都能实现出 Promise,并且能够和其他的实现相通。'
        ]
        //创建tag数组
        let taglist = [
            'tags vue element el-transfer',
            'tags 架构 脚手架',
            'tags 掘金小册 分享',
            'tags vue typescript',
            'tags vite vue',
            'tags promise js'
        ]
        //创建时间数组
        let timelist = [
            '1月前',
            '1月前',
            '5月前',
            '1年前',
            '1年前',
            '2年前'
        ]
        //获取文章容器大标签
        let textcont = document.querySelector('.text-cont')
        let everydiv = document.createElement('div')
        //在当前创建的子标签创建一个放置图片的div
        if (flag == true) {
            let imgdiv = document.createElement('div')
            //添加图片类名
            imgdiv.className = 'text-img'
            //创建img
            let img = document.createElement('img')
            //添加img
            imgdiv.appendChild(img)
            //引入图片
            let img1 = imglist[n]
            //赋值src
            img.src = img1
            //添加图片容器
            everydiv.appendChild(imgdiv)
        }

        //创建文本div
        let textdiv = document.createElement('div')
        //添加文本类名
        textdiv.className = 'text-title'
        //创建head
        let head = document.createElement('h3')
        head.innerText = titlelist[n]
        //添加head
        textdiv.appendChild(head)
        //添加文本div
        everydiv.appendChild(textdiv)
        //创建文本div子标签2,然后创建p放置文本
        let textmain = document.createElement('div')
        //添加类名
        textmain.className = 'text-main'
        //创建p标签
        let p = document.createElement('p')
        //添加p标签内容
        p.innerText = titlemain[n]
        //添加P
        textmain.appendChild(p)
        //添加文本子标签
        everydiv.appendChild(textmain)
        //创建tag容器
        let tag = document.createElement('div')
        //添加tag类名
        tag.className = 'text-tag'
        //创建span
        let span1 = document.createElement('span')
        let span2 = document.createElement('span')
        span1.innerText = taglist[n]
        span2.innerText = timelist[n]
        //添加span
        tag.appendChild(span1)
        tag.appendChild(span2)
        //添加tag容器
        everydiv.appendChild(tag)
        //给文章容器添加类名
        everydiv.className = 'every-div'
        //添加文章容器
        textcont.appendChild(everydiv)
        everydiv.style.opacity = 0
        //获取所有的every
        let everylist = document.querySelectorAll('.every-div')
        //获取外部容器
        let big = document.querySelector('.bigout-cont')
        big.addEventListener('scroll', function () {
            if (big.scrollTop >= 240) {
                everydiv.style.opacity = 1
                everylist[0].style.transition = 'all .5s'
                everylist[1].style.transition = 'all 1s'
                everylist[2].style.transition = 'all 1.5s'
                everylist[3].style.transition = 'all 2s'
                everylist[4].style.transition = 'all 2.5s'
                everylist[5].style.transition = 'all 3s'
                everylist[6].style.transition = 'all 3.5s'
            }
            if(big.scrollTop == 0){
                everydiv.style.opacity = 0
                everylist[0].style.transition = 'all .5s'
                everylist[1].style.transition = 'all 1s'
                everylist[2].style.transition = 'all 1.5s'
                everylist[3].style.transition = 'all 2s'
                everylist[4].style.transition = 'all 2.5s'
                everylist[5].style.transition = 'all 3s'
                everylist[6].style.transition = 'all 3.5s'
            }
        })

    }
}
//定义flag,以判断当前文章是否需要图片
let flag = true
for (let i = 0; i < 5; i++) {
    if (i === 1 || i == 3) {
        flag = false
        createtitle(flag, i)
    }
    flag = true
    createtitle(flag, i)
}


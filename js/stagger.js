var tl = new TimelineMax();
        tl.to('.bg_menu',0,{
               display:"block",
            }
        ).to('#menu',0,{
            right:0,
        }
        ). staggerTo('aside ul li', .15, {
            delay:.3,
            xPercent: -5,
            opacity:1,
        }, .1)

        let o = document.getElementsByClassName('hamburger')[0];
        
        tl.stop();
        
        o.addEventListener('click', function(){
            if(tl.reversed()){
                this.classList.add('is-active');
                tl.play();
            }else{
                this.classList.remove('is-active');
                tl.reverse();
            }
        });   
        window.addEventListener('scroll', function(){
            o.classList.remove('is-active');
            tl.reverse();
        });    
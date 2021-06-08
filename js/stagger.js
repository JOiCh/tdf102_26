var tl = new TimelineMax();
        tl.staggerTo('aside ul li', .2, {
            delay:.4,xPercent: -5,opacity:1,
        }, .1)

        let o = document.getElementsByClassName('hamburger')[0];
        
        tl.stop();
        
        o.addEventListener('click', function(){
            // if(tl.reversed()){
            //     tl.play();
            // }else{
            //     tl.reverse();
            // }
            tl.play();
        });   
        window.addEventListener('scroll', function(){
            tl.reverse();
        });    
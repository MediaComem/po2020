import 'alpinejs';
import Glide, { Breakpoints, Controls, Autoplay , Swipe } from '@glidejs/glide/dist/glide.modular.esm';

var deviensim = new Glide('.deviensim_glide',{
    autoplay: 9000,
    hoverpause:true
});

var boussole = new Glide('.boussole_glide',{
    gap: 0,
    breakpoints:{
        767: {
            perView: 1
        },
        5000: {
            perView: 3
        }
    }
});

boussole.mount({ Breakpoints, Controls, Swipe });
deviensim.mount({ Controls, Autoplay, Swipe });



screen.lockOrientation('portrait');

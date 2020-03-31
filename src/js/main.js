import 'alpinejs';
import Glide, { Controls, Autoplay , Swipe } from '@glidejs/glide/dist/glide.modular.esm';

var deviensim = new Glide('.deviensim_glide',{
    autoplay: 9000,
    hoverpause:true
});

var boussole = new Glide('.boussole_glide',{
    gap: 0
});

boussole.mount({ Controls, Swipe });
deviensim.mount({ Controls, Autoplay, Swipe });



screen.lockOrientation('portrait');

// import 'alpinejs';
import Glide, { Controls, Autoplay , Swipe } from '@glidejs/glide/dist/glide.modular.esm';

new Glide('.glide',{
    autoplay: 6000,
    hoverpause:true
}).mount({ Controls, Autoplay, Swipe })

screen.lockOrientation('portrait');

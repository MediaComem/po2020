// import 'alpinejs';
import Glide, { Controls, Autoplay , Swipe } from '@glidejs/glide/dist/glide.modular.esm';

new Glide('.glide',{
    autoplay: 4000,
    hoverpause:true
}).mount({ Controls, Autoplay, Swipe })

screen.lockOrientation('portrait');

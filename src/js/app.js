import Ex from './ex';
import {TimelineMax} from 'gsap';
import ScrollMagic from 'ScrollMagic';
import 'debug.addIndicators';
import 'animation.gsap';


$('video').get(0).play();

let tl = new TimelineMax();
let canvas = {state:0};
tl.fromTo(canvas,1,{state: 3},{state:36,delay:0.1,onUpdate: function() {
  Ex(canvas.state);
}});
tl.to('.iphone',1,{scale:0.5,transformOrigin: '50% 50%'},0);


let tl1 = new TimelineMax();
tl1.to('.iphone',1,{y:-50});

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  duration: '1000', // resposive duration in %
  offset: 0, // offset trigger position by 100px
  triggerElement: '#trigger', // what will trigger scene
  triggerHook: 0
});
scene.addIndicators({name:'Blah blah'});
scene.setTween(tl);
scene.setPin('.animation');
scene.addTo(controller);


var scene0 = new ScrollMagic.Scene({
  duration: '800', // resposive duration in %
  offset: '1000', // offset trigger position by 100px
  triggerElement: '#trigger', // what will trigger scene
  triggerHook: 0
});
scene0.addIndicators({name:'Iphone Flies away'});
scene0.setTween(tl1);
scene0.addTo(controller);



var scene1 = new ScrollMagic.Scene({
  duration: '0', // resposive duration in %
  offset: 44, // offset trigger position by 100px
  triggerElement: '#trigger', // what will trigger scene
  triggerHook: 0
});
scene1.addIndicators({name:'Subheader'});
scene1.setPin('.subheader');
scene1.addTo(controller);





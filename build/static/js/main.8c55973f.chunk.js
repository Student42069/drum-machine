(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],[,,,,,,,,,,function(e,r,t){},function(e,r,t){},function(e,r,t){},,function(e,r,t){"use strict";t.r(r);var a=t(1),c=t.n(a),s=t(5),d=t.n(s),m=(t(10),t(4)),o=t(2),i=(t(11),[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}]),n=[{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}],p=(t(12),t(0));function u(e){var r=new Audio(e.letter.url);return Object(p.jsxs)("div",{className:"drum-pad button-36",id:e.letter.id,onClick:function(){e.onOff&&(r.pause(),r.currentTime=0,r.play(),e.setName(e.letter.id))},children:[Object(p.jsx)("h2",{children:e.letter.keyTrigger}),Object(p.jsx)("audio",{src:e.letter.url,className:"clip",id:e.letter.keyTrigger})]})}window.addEventListener("keydown",(function(e){if(-1!=="qweasdzxc".indexOf(e.key)&&document.getElementById("onOff").checked){document.getElementById(e.key.toUpperCase()).parentElement.classList.add("myclass"),setTimeout((function(){document.getElementById(e.key.toUpperCase()).parentElement.classList.remove("myclass")}),100);var r=new Audio(document.getElementById(e.key.toUpperCase()).src);r.pause(),r.currentTime=0,r.play(),document.getElementById("display").textContent=document.getElementById(e.key.toUpperCase()).parentElement.id}}));var l=function(){var e=c.a.useState(!1),r=Object(o.a)(e,2),t=r[0],s=r[1],d=c.a.useState(i),l=Object(o.a)(d,2),h=l[0],k=l[1],y=c.a.useState("Drum"),g=Object(o.a)(y,2),j=g[0],f=g[1];return Object(p.jsxs)("div",{className:"App",id:"drum-machine",children:[Object(p.jsx)("h1",{children:"Drum Machine"}),Object(p.jsxs)("div",{id:"board",children:[Object(p.jsx)("div",{id:"display1",children:h.map((function(e){var r={letter:e,onOff:t,setName:f};return Object(a.createElement)(u,Object(m.a)(Object(m.a)({},r),{},{key:e.id}))}))}),Object(p.jsxs)("div",{id:"commands",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"Power"}),Object(p.jsxs)("label",{className:"switch",children:[Object(p.jsx)("input",{type:"checkbox",id:"onOff",onChange:function(e){var r=e.target;s(r.checked)}}),Object(p.jsx)("span",{className:"slider"})]})]}),Object(p.jsx)("h3",{id:"display",children:j}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"Bank"}),Object(p.jsxs)("label",{className:"switch",children:[Object(p.jsx)("input",{type:"checkbox",id:"bank",onChange:function(e){e.target.checked?k(n):k(i)}}),Object(p.jsx)("span",{className:"slider round"})]})]})]})]})]})};d.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(l,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.8c55973f.chunk.js.map
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(a){if(a.ep)return;a.ep=!0;const n=t(a);fetch(a.href,n)}})();var Bs=Object.defineProperty,ks=(r,e,t)=>e in r?Bs(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,s=(r,e,t)=>(ks(r,typeof e!="symbol"?e+"":e,t),t);const ue=class{constructor(r=1,e=1,t=1,i=1){s(this,"r",0),s(this,"g",0),s(this,"b",0),s(this,"a",0),this.setTo(r,e,t,i)}convertToHDRRGB(){return this.r=this.r*Math.pow(2.4,this.a),this.g=this.g*Math.pow(2.4,this.a),this.b=this.b*Math.pow(2.4,this.a),this}unSerialized(r){return this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this}hexToRGB(r){this.r=(r>>16&255)/255,this.g=(r>>8&255)/255,this.b=(255&r)/255}hexToRGBA(r){this.a=(r>>24&255)/255,this.r=(r>>16&255)/255,this.g=(r>>8&255)/255,this.b=(255&r)/255}static random(r=1){var e=new ue;return e.a=r,e.r=r*Math.random(),e.g=r*Math.random(),e.b=r*Math.random(),e}setTo(r,e,t,i){this.r=Math.max(r,0),this.g=Math.max(e,0),this.b=Math.max(t,0),this.a=Math.max(i,0)}setHex(a){if(typeof a!="string"||ue.NON_HEX_CHARS.test(a)||!ue.VALID_HEX_SIZE.test(a))throw new TypeError("Expected a valid hex string");let e=1;(a=a.replace(/^#/,"")).length===8&&(e=Number.parseInt(a.slice(6,8),16)/255,a=a.slice(0,6)),a.length===4&&(e=Number.parseInt(a.slice(3,4).repeat(2),16)/255,a=a.slice(0,3)),a.length===3&&(a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]);var a=Number.parseInt(a,16),t=a>>16,i=a>>8&255,a=255&a,n=e;this.a=n,this.r=t/255,this.g=i/255,this.b=a/255}getHex(){var r=e=>{let t=(e*=255).toString(16);return t=t.length===1?"0"+t:t};return r(this.r)+r(this.g)+r(this.b)+r(this.a)}get rgb(){return[255*this.r>>>0,255*this.g>>>0,255*this.b>>>0]}set rgb(r){this.setTo(r[0]/255,r[1]/255,r[2]/255,this.a)}get rgba(){return[255*this.r>>>0,255*this.g>>>0,255*this.b>>>0,255*this.a>>>0]}set rgba(r){this.setTo(r[0]/255,r[1]/255,r[2]/255,r[3]/255)}clone(){return new ue().copyFrom(this)}copyFrom(r){return this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this}copyFromArray(r,e=255){return this.r=r[0]/e,this.g=r[1]/e,this.b=r[2]/e,this.a=r[3]/e,this}copyFromVector(r){return this.r=r.x,this.g=r.y,this.b=r.z,this.a=r.w,this}static hexRGBColor(r,e=null){return(e=e||new ue).hexToRGB(r),e}};let x=ue;s(x,"COLOR_RED",new ue(1,0,0,1)),s(x,"COLOR_GREEN",new ue(0,1,0,1)),s(x,"COLOR_BLUE",new ue(0,0,1,1)),s(x,"COLOR_WHITE",new ue(1,1,1,1)),s(x,"COLOR_0",new ue),s(x,"COLOR_1",new ue),s(x,"COLOR_2",new ue),s(x,"HEX_CHARACTERS","a-f\\d"),s(x,"MATCH_3OR4_HEX",`#?[${ue.HEX_CHARACTERS}]{3}[${ue.HEX_CHARACTERS}]?`),s(x,"MATCH_6OR8_HEX",`#?[${ue.HEX_CHARACTERS}]{6}([${ue.HEX_CHARACTERS}]{2})?`),s(x,"NON_HEX_CHARS",new RegExp(`[^#${ue.HEX_CHARACTERS}]`,"gi")),s(x,"VALID_HEX_SIZE",new RegExp(`^${ue.MATCH_3OR4_HEX}$|^${ue.MATCH_6OR8_HEX}$`,"i")),s(x,"PRIMARY",4149685),s(x,"PRIMARYDARK",3162015),s(x,"ACCENT",16728193),s(x,"WHITE",16777215),s(x,"IVORY",16777200),s(x,"LIGHTYELLOW",16777184),s(x,"YELLOW",16776960),s(x,"SNOW",16775930),s(x,"FLORALWHITE",16775920),s(x,"LEMONCHIFFON",16775885),s(x,"CORNSILK",16775388),s(x,"SEASHELL",16774638),s(x,"LAVENDERBLUSH",16773365),s(x,"PAPAYAWHIP",16773077),s(x,"BLANCHEDALMOND",16772045),s(x,"MISTYROSE",16770273),s(x,"BISQUE",16770244),s(x,"MOCCASIN",16770229),s(x,"NAVAJOWHITE",16768685),s(x,"PEACHPUFF",16767673),s(x,"GOLD",16766720),s(x,"PINK",16761035),s(x,"LIGHTPINK",16758465),s(x,"ORANGE",16753920),s(x,"LIGHTSALMON",16752762),s(x,"DARKORANGE",16747520),s(x,"CORAL",16744272),s(x,"HOTPINK",16738740),s(x,"TOMATO",16737095),s(x,"ORANGERED",16729344),s(x,"DEEPPINK",16716947),s(x,"FUCHSIA",16711935),s(x,"MAGENTA",16711935),s(x,"RED",16711680),s(x,"OLDLACE",16643558),s(x,"LIGHTGOLDENRODYELLOW",16448210),s(x,"LINEN",16445670),s(x,"ANTIQUEWHITE",16444375),s(x,"SALMON",16416882),s(x,"GHOSTWHITE",16316671),s(x,"MINTCREAM",16121850),s(x,"WHITESMOKE",16119285),s(x,"BEIGE",16119260),s(x,"WHEAT",16113331),s(x,"SANDYBROWN",16032864),s(x,"AZURE",15794175),s(x,"HONEYDEW",15794160),s(x,"ALICEBLUE",15792383),s(x,"KHAKI",15787660),s(x,"LIGHTCORAL",15761536),s(x,"PALEGOLDENROD",15657130),s(x,"VIOLET",15631086),s(x,"DARKSALMON",15308410),s(x,"LAVENDER",15132410),s(x,"LIGHTCYAN",14745599),s(x,"BURLYWOOD",14596231),s(x,"PLUM",14524637),s(x,"GAINSBORO",14474460),s(x,"CRIMSON",14423100),s(x,"PALEVIOLETRED",14381203),s(x,"GOLDENROD",14329120),s(x,"ORCHID",14315734),s(x,"THISTLE",14204888),s(x,"LIGHTGREY",13882323),s(x,"TAN",13808780),s(x,"CHOCOLATE",13789470),s(x,"PERU",13468991),s(x,"INDIANRED",13458524),s(x,"MEDIUMVIOLETRED",13047173),s(x,"SILVER",12632256),s(x,"DARKKHAKI",12433259),s(x,"ROSYBROWN",12357519),s(x,"MEDIUMORCHID",12211667),s(x,"DARKGOLDENROD",12092939),s(x,"FIREBRICK",11674146),s(x,"POWDERBLUE",11591910),s(x,"LIGHTSTEELBLUE",11584734),s(x,"PALETURQUOISE",11529966),s(x,"GREENYELLOW",11403055),s(x,"LIGHTBLUE",11393254),s(x,"DARKGRAY",11119017),s(x,"BROWN",10824234),s(x,"SIENNA",10506797),s(x,"DARKORCHID",10040012),s(x,"PALEGREEN",10025880),s(x,"DARKVIOLET",9699539),s(x,"MEDIUMPURPLE",9662683),s(x,"LIGHTGREEN",9498256),s(x,"DARKSEAGREEN",9419919),s(x,"SADDLEBROWN",9127187),s(x,"DARKMAGENTA",9109643),s(x,"DARKRED",9109504),s(x,"BLUEVIOLET",9055202),s(x,"LIGHTSKYBLUE",8900346),s(x,"SKYBLUE",8900331),s(x,"GRAY",8421504),s(x,"OLIVE",8421376),s(x,"PURPLE",8388736),s(x,"MAROON",8388608),s(x,"AQUAMARINE",8388564),s(x,"CHARTREUSE",8388352),s(x,"LAWNGREEN",8190976),s(x,"MEDIUMSLATEBLUE",8087790),s(x,"LIGHTSLATEGRAY",7833753),s(x,"SLATEGRAY",7372944),s(x,"OLIVEDRAB",7048739),s(x,"SLATEBLUE",6970061),s(x,"DIMGRAY",6908265),s(x,"MEDIUMAQUAMARINE",6737322),s(x,"CORNFLOWERBLUE",6591981),s(x,"CADETBLUE",6266528),s(x,"DARKOLIVEGREEN",5597999),s(x,"INDIGO",4915330),s(x,"MEDIUMTURQUOISE",4772300),s(x,"DARKSLATEBLUE",4734347),s(x,"STEELBLUE",4620980),s(x,"ROYALBLUE",4286945),s(x,"TURQUOISE",4251856),s(x,"MEDIUMSEAGREEN",3978097),s(x,"LIMEGREEN",3329330),s(x,"DARKSLATEGRAY",3100495),s(x,"SEAGREEN",3050327),s(x,"FORESTGREEN",2263842),s(x,"LIGHTSEAGREEN",2142890),s(x,"DODGERBLUE",2003199),s(x,"MIDNIGHTBLUE",1644912),s(x,"AQUA",65535),s(x,"CYAN",65535),s(x,"SPRINGGREEN",65407),s(x,"LIME",65280),s(x,"MEDIUMSPRINGGREEN",64154),s(x,"DARKTURQUOISE",52945),s(x,"DEEPSKYBLUE",49151),s(x,"DARKCYAN",35723),s(x,"TEAL",32896),s(x,"GREEN",32768),s(x,"DARKGREEN",25600),s(x,"BLUE",255),s(x,"MEDIUMBLUE",205),s(x,"DARKBLUE",139),s(x,"NAVY",128),s(x,"BLACK",0);class he{static start(e){this._startTime=performance.now(),this._timeLabel=e}static end(){console.log(this._timeLabel,performance.now()-this._startTime)}}s(he,"time",0),s(he,"frame",0),s(he,"delta",0),s(he,"_startTime",0),s(he,"_timeLabel","");class Pe{constructor(e=null,t=null){s(this,"target"),s(this,"currentTarget"),s(this,"type"),s(this,"data"),s(this,"param"),s(this,"time",0),s(this,"delay",0),s(this,"mouseCode",0),s(this,"ctrlKey"),s(this,"altKey"),s(this,"shiftKey"),s(this,"targetTouches"),s(this,"changedTouches"),s(this,"touches"),s(this,"_stopImmediatePropagation",!1),s(this,"view"),this.type=e,this.data=t}stopImmediatePropagation(){this._stopImmediatePropagation=!0}reset(){this._stopImmediatePropagation=!1}get isStopImmediatePropagation(){return this._stopImmediatePropagation}}class qr{constructor(e=null,t=null,i=null,a=null,n=0){s(this,"id",0),s(this,"current"),this.type=e,this.thisObject=t,this.handler=i,this.param=a,this.priority=n}equalCurrentListener(e,t,i,a){return this.type==e&&this.thisObject==i&&this.handler==t&&this.param==a}dispose(){this.handler=null,this.thisObject=null,this.param=null,this.priority=0}}s(qr,"event_id_count",0);class zt{constructor(){s(this,"listeners",{}),s(this,"data")}dispatchEvent(e){if((t=this.listeners[e.type])!=null)for(var t=t.slice(),i=0;i<t.length;i++){var a=t[i];if(a.handler){try{e.param=a.param,(e.currentTarget=a).thisObject,a.handler.call(a.thisObject,e)}catch{}if(e.isStopImmediatePropagation)break}}}destroy(){for(var e in this.listeners)for(var t=this.listeners[e];0<t.length;){var i=t[0];i.handler=null,i.thisObject=null,t.splice(0,1)}}addEventListener(e,t,i,a=null,n=0){if(this.listeners[e]==null&&(this.listeners[e]=[]),!this.hasEventListener(e,t,i))return(n=new qr(e,i,t,a,n)).id=++qr.event_id_count,(n.current=this).listeners[e].push(n),this.listeners[e].sort(function(h,l){return l.priority-h.priority}),n.id;for(let h=0;h<this.listeners[e].length;h++){var o=this.listeners[e][h];if(o.equalCurrentListener(e,t,i,a))return o.id}return 0}removeEventListener(e,t,i){if(this.hasEventListener(e,t,i))for(var a=0;a<this.listeners[e].length;a++){var n=this.listeners[e][a];if(n.equalCurrentListener(e,t,i,n.param))return n.handler=null,n.thisObject=null,void this.listeners[e].splice(a,1)}}removeEventListenerAt(e){for(var t in this.listeners)for(var i=0;i<this.listeners[t].length;i++){var a=this.listeners[t][i];if(a.id==e)return a.handler=null,a.thisObject=null,this.listeners[t].splice(i,1),!0}return!1}removeAllEventListener(e=null){if(e){if(this.listeners[e]){for(var t=0;t<this.listeners[e].length;t++)this.listeners[e][t].dispose(),this.listeners[e].splice(t,1);delete this.listeners[e]}}else for(var i in this.listeners){for(t=0;t<this.listeners[i].length;t++)this.listeners[i][t].dispose(),this.listeners[i].splice(t,1);delete this.listeners[i]}}containEventListener(e){return this.listeners[e]!=null&&0<this.listeners[e].length}hasEventListener(e,t=null,i=null){if(this.listeners[e]!=null&&i&&t)for(var a=0;a<this.listeners[e].length;a++){var n=this.listeners[e][a];if(n.equalCurrentListener(e,t,i,n.param))return!0}return!1}}class Tr extends Pe{constructor(){super(...arguments),s(this,"keyCode",0)}}s(Tr,"KEY_DOWN","onKeyDown"),s(Tr,"KEY_UP","onKeyUp");class E extends Pe{constructor(){super(...arguments),s(this,"pointerId"),s(this,"pointerType"),s(this,"isPrimary"),s(this,"pressure"),s(this,"mouseX"),s(this,"mouseY"),s(this,"movementX"),s(this,"movementY"),s(this,"deltaX"),s(this,"deltaY"),s(this,"deltaZ")}reset(){super.reset(),this.mouseX=0,this.mouseY=0,this.movementX=0,this.movementY=0,this.deltaX=0,this.deltaY=0,this.deltaZ=0}}s(E,"PICK_OVER","onPickOver"),s(E,"PICK_OVER_GUI","onPickOverGUI"),s(E,"PICK_CLICK","onPickClick"),s(E,"PICK_CLICK_GUI","onPickClickGUI"),s(E,"PICK_OUT","onPickOut"),s(E,"PICK_OUT_GUI","onPickOutGUI"),s(E,"PICK_MOVE","onPickMove"),s(E,"PICK_UP","onPickUp"),s(E,"PICK_UP_GUI","onPickUpGUI"),s(E,"PICK_DOWN","onPickDown"),s(E,"PICK_DOWN_GUI","onPickDownGUI"),s(E,"POINTER_RIGHT_CLICK","onPointerRightClick"),s(E,"POINTER_MID_UP","onPointerMidUp"),s(E,"POINTER_MID_DOWN","onPointerMidDown"),s(E,"POINTER_CLICK","onPointerClick"),s(E,"POINTER_MOVE","onPointerMove"),s(E,"POINTER_DOWN","onPointerDown"),s(E,"POINTER_UP","onPointerUp"),s(E,"POINTER_OUT","onPointerOut"),s(E,"POINTER_OVER","onPointerOver"),s(E,"POINTER_WHEEL","onPointerWheel");const U=class{constructor(r=0,e=0,t=0,i=0){s(this,"x",0),s(this,"y",0),s(this,"z",0),s(this,"w",1),s(this,"index",0),this.set(r,e,t,i),this.index=U._index++}static get ZERO(){return new U(0,0,0)}static get ONE(){return new U(1,1,1)}static get LEFT(){return new U(-1,0,0)}static get RIGHT(){return new U(1,0,0)}static get UP(){return new U(0,1,0)}static get DOWN(){return new U(0,-1,0)}static get BACK(){return new U(0,0,-1)}static get FORWARD(){return new U(0,0,1)}set a(r){this.w=r}set r(r){this.x=r}set g(r){this.y=r}set b(r){this.z=r}get a(){return this.w}get r(){return this.x}get g(){return this.y}get b(){return this.z}get length(){return Math.sqrt(this.lengthSquared)}get lengthSquared(){return this.x*this.x+this.y*this.y+this.z*this.z}get position(){return this}static getTowPointbyDir(r,e,t,i,a){a==U.Z_AXIS?(e.x=r.y,e.y=-r.x,t.x=-r.y,t.y=r.x,e.scaleBy(.5*i),t.scaleBy(.5*i)):a==U.Y_AXIS&&(e.x=r.z,e.z=-r.x,t.x=-r.z,t.z=r.x,e.scaleBy(.5*i),t.scaleBy(.5*i))}static pointToLine(r,e,t){let i=0,a,n,o;return a=U.distance(r,e),n=U.distance(r,t),(o=U.distance(e,t))<=1e-6||n<=1e-6?i=0:i=a<=1e-6||a*a+n*n<=o*o?n:a*a+o*o<=n*n?o:(r=(a+n+o)/2,2*Math.sqrt(r*(r-a)*(r-n)*(r-o))/a),i}static cross(r,e,t=null){return(t=t||new U).x=r.y*e.z-r.z*e.y,t.y=r.z*e.x-r.x*e.z,t.z=r.x*e.y-r.y*e.x,t.w=1,t}static dot(r,e){return r.x*e.x+r.y*e.y+r.z*e.z}static getPoints(r,e){var t=[];for(let a=0;a<r;a++){var i=new U(Math.random()*e-.5*e,Math.random()*e-.5*e,Math.random()*e-.5*e);t.push(i)}return t}static getPointNumbers(r,e){var t=[];for(let i=0;i<r;i++)t.push(Math.random()*e-.5*e,Math.random()*e-.5*e,Math.random()*e-.5*e);return t}static getAngle(r,e){return r=r.dotProduct(e)/(r.length*e.length),180*Math.acos(r)/Math.PI}static sqrMagnitude(r){return r.x*r.x+r.y*r.y+r.z*r.z}static getZYAngle(r,e){return this.calAngle(r.y,r.z,e.y,e.z)}static sub(r,e,t=null){return(t=t||new U).x=r.x-e.x,t.y=r.y-e.y,t.z=r.z-e.z,t}static add(r,e,t=null){return(t=t||new U).x=r.x+e.x,t.y=r.y+e.y,t.z=r.z+e.z,t}static smoothDamp(r,e,t,i,a,n){return null}static distance(a,e){var t=a.x-e.x,i=a.y-e.y,a=a.z-e.z;return Math.sqrt(t*t+i*i+a*a)}static distanceXZ(i,e){var t=i.x-e.x,i=i.z-e.z;return Math.sqrt(t*t+0+i*i)}set(r,e,t,i=1){return this.x=r,this.y=e,this.z=t,this.w=i,this}add(u,e=null){e=e||new U;var t=this.x,i=this.y,a=this.z,n=this.w,o=u.x,h=u.y,l=u.z,u=u.w;return e.setTo(t+o,i+h,a+l,n+u),e}addXYZW(r,e,t,i,a=null){a=a||new U;var n=this.x,o=this.y,h=this.z,l=this.w;return a.setTo(n+r,o+e,h+t,l+i),a}clone(){return new U(this.x,this.y,this.z,this.w)}copyFrom(r){var e=this;return e.x=r.x,e.y=r.y,e.z=r.z,e.w=r.w,e}crossProduct(r,e=null){return(e=e||new U).x=this.y*r.z-this.z*r.y,e.y=this.z*r.x-this.x*r.z,e.z=this.x*r.y-this.y*r.x,e.w=1,e}decrementBy(r){this.x-=r.x,this.y-=r.y,this.z-=r.z}dotProduct(r){return this.x*r.x+this.y*r.y+this.z*r.z}equals(r,e=!1){return this.x==r.x&&this.y==r.y&&this.z==r.z&&(!e||this.w==r.w)}incrementBy(r){this.x+=r.x,this.y+=r.y,this.z+=r.z}divide(r){return r instanceof U?new U(this.x/r.x,this.y/r.y,this.z/r.z):(this.x=this.x/r,this.y=this.y/r,this.z=this.z/r,this)}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}normalize(r=1){return this.length!=0&&(r=r/this.length,this.x*=r,this.y*=r,this.z*=r),this}applyQuaternion(o){var c=this.x,e=this.y,t=this.z,i=o.x,a=o.y,n=o.z,o=o.w,h=o*c+a*t-n*e,l=o*e+n*c-i*t,u=o*t+i*e-a*c,c=-i*c-a*e-n*t;return this.x=h*o+c*-i+l*-n-u*-a,this.y=l*o+c*-a+u*-i-h*-n,this.z=u*o+c*-n+h*-a-l*-i,this}scaleBy(r){return this.x*=r,this.y*=r,this.z*=r,this}mul(r){var e=new U;return e.x=this.x*r,e.y=this.y*r,e.z=this.z*r,e}scale(r){return this.x*=r.x,this.y*=r.y,this.z*=r.z,this}scaleToRef(r,e){return(e=e||new U).x=this.x*r,e.y=this.y*r,e.z=this.z*r,e}setTo(r,e,t,i=1){this.x=r,this.y=e,this.z=t,this.w=i}copy(r){return this.x=r.x,this.y=r.y,this.z=r.z,this.w=r.w,this}subtract(r,e=null){return(e=e||new U).setTo(this.x-r.x,this.y-r.y,this.z-r.z),e}multiply(h,e=null){e=e||new U;var t=this.x,i=this.y,a=this.z,n=h.x,o=h.y,h=h.z;return e.setTo(t*n,i*o,a*h),e}divided(h,e=null){e=e||new U;var t=this.x,i=this.y,a=this.z,n=h.x,o=h.y,h=h.z;return e.setTo(t/n,i/o,a/h),e}div(r,e){e=e||new U;var t=this.x,i=this.y,a=this.z,n=this.w;return e.setTo(t/r,i/r,a/r,n/r),e}lerp(o,c,t){var i=o.x,a=o.y,n=o.z,o=o.w,h=c.x,l=c.y,u=c.z,c=c.w;this.x=(h-i)*t+i,this.y=(l-a)*t+a,this.z=(u-n)*t+n,this.w=(c-o)*t+o}clamp(r,e){return this.x=Math.max(r.x,Math.min(e.x,this.x)),this.y=Math.max(r.y,Math.min(e.y,this.y)),this.z=Math.max(r.z,Math.min(e.z,this.z)),this}toString(){return"<"+this.x+", "+this.y+", "+this.z+">"}normalizeToWay2D_XY(){var r=Math.abs(this.x);Math.abs(this.y)<r?0<this.x?this.copyFrom(U.RIGHT):this.copyFrom(U.LEFT):0<this.y?this.copyFrom(U.DOWN):this.copyFrom(U.UP)}toArray(){return[this.x,this.y,this.z]}copyToBytes(r){r.setFloat32(0*Float32Array.BYTES_PER_ELEMENT,this.x,!0),r.setFloat32(+Float32Array.BYTES_PER_ELEMENT,this.y,!0),r.setFloat32(2*Float32Array.BYTES_PER_ELEMENT,this.z,!0)}cross(r,e=null){return(e=e||new U).x=this.y*r.z-this.z*r.y,e.y=this.z*r.x-this.x*r.z,e.z=this.x*r.y-this.y*r.x,e.w=1,e}multiplyScalar(r){return this.x*=r,this.y*=r,this.z*=r,this}setFromArray(r,e=0){this.x=r[e],this.y=r[e+1],this.z=r[e+2]}divideScalar(r){return this.multiplyScalar(1/r)}clampLength(r,e){var t=this.length;return this.divideScalar(t||1).multiplyScalar(Math.max(r,Math.min(e,t)))}setScalar(r){return this.x=r,this.y=r,this.z=r,this}static calAngle(r,e,t,i){i=function(n,o,h,l){return n=[n-h,o-l],function(p,c){var f=p[0]*c[0]+p[1]*c[1],p=Math.sqrt(p[0]*p[0]+p[1]*p[1])*Math.sqrt(c[0]*c[0]+c[1]*c[1]);return f/p}(n,[0,-1])}(t,i,r,e);let a=180*Math.acos(i)/Math.PI;return a=t<r?-a:a}};let d=U;s(d,"MAX",new U(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)),s(d,"MIN",new U(Number.MIN_VALUE,Number.MIN_VALUE,Number.MIN_VALUE)),s(d,"SAFE_MAX",new U(Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)),s(d,"SAFE_MIN",new U(Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER)),s(d,"X_AXIS",new U(1,0,0)),s(d,"neg_X_AXIS",new U(-1,0,0)),s(d,"Y_AXIS",new U(0,1,0)),s(d,"Z_AXIS",new U(0,0,1)),s(d,"HELP_0",new U),s(d,"HELP_1",new U),s(d,"HELP_2",new U),s(d,"EPSILON",1e-5),s(d,"HELP_3",new U),s(d,"HELP_4",new U),s(d,"HELP_5",new U),s(d,"HELP_6",new U),s(d,"_index",0);class Ns{constructor(e){s(this,"canvasX"),s(this,"canvasY"),s(this,"identifier"),s(this,"clientX"),s(this,"clientY"),s(this,"pageX"),s(this,"pageY"),s(this,"screenX"),s(this,"screenY"),this.canvasX=e.clientX,this.canvasY=e.clientY,this.identifier=e.identifier,this.clientX=e.clientX,this.clientY=e.clientY,this.pageX=e.pageX,this.pageY=e.pageY,this.screenX=e.screenX,this.screenY=e.screenY}}class zs extends zt{constructor(){super(...arguments),s(this,"canvasX",0),s(this,"canvasY",0),s(this,"isMouseDown",!1),s(this,"isRightMouseDown",!1),s(this,"canvas"),s(this,"mouseX",0),s(this,"mouseY",0),s(this,"wheelDelta",0),s(this,"mouseOffsetX",0),s(this,"mouseOffsetY",0),s(this,"mouseLastX",0),s(this,"mouseLastY",0),s(this,"_time",0),s(this,"_keyStatus"),s(this,"_mouseStatus"),s(this,"_isTouchStart"),s(this,"_keyEvent3d"),s(this,"_pointerEvent3D"),s(this,"_windowsEvent3d"),s(this,"_gp",!1),s(this,"_oldPosition1",null),s(this,"_oldPosition2",null),s(this,"_downTime",0)}initCanvas(e){(this.canvas=e).onpointerdown=t=>{t.button==0?this.mouseStart(t):t.button==1?this.middleDown(t):t.button==2&&this.mouseStart(t)},e.onpointerup=t=>{t.button==0?this.mouseEnd(t):t.button==1?this.middleUp(t):t.button==2&&this.mouseEnd(t)},e.onpointerenter=t=>{this.mouseOver(t)},e.onpointermove=t=>{this.mouseMove(t)},e.onpointercancel=t=>{this.mouseEnd(t)},e.onpointerleave=t=>{this.mouseEnd(t)},e.onpointerout=t=>{this.mouseEnd(t)},e.addEventListener("click",t=>{t.button==2?(this.isRightMouseDown=!1,this.rightClick(t)):t.button==0&&(this.isMouseDown=!1,this.mouseClick(t))},!0),e.addEventListener("wheel",t=>this.mouseWheel(t),{passive:!1}),window.addEventListener("keydown",t=>this.keyDown(t),!0),window.addEventListener("keyup",t=>this.keyUp(t),!0),e.oncontextmenu=function(){return!1},e=this.canvas.getBoundingClientRect(),this.canvasX=e.left,this.canvasY=e.top,this._keyStatus={},this._mouseStatus={},this._isTouchStart=!1,this._keyEvent3d=new Tr,this._pointerEvent3D=new E,this._windowsEvent3d=new Pe}onPinch(e,t,i,a){this._oldPosition1=new d(e,t),this._oldPosition2=new d(i,a)}onSwipe(e,t){this.mouseX=e,this.mouseY=t,this._oldPosition1=null,this._oldPosition2=null,this._time=new Date().getTime()}GetTargetTouches(e){for(var t=new Array,i=0;i<e.length;i++){var a=new Ns(e[i]);t.push(a)}return t}rightClick(e){this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._pointerEvent3D.mouseX=e.clientX-this.canvasX,this._pointerEvent3D.mouseY=e.clientY-this.canvasY,this._pointerEvent3D.type=E.POINTER_RIGHT_CLICK,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this.dispatchEvent(this._pointerEvent3D)}middleDown(e){this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._pointerEvent3D.mouseX=e.clientX-this.canvasX,this._pointerEvent3D.mouseY=e.clientY-this.canvasY,this._pointerEvent3D.type=E.POINTER_MID_DOWN,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this.dispatchEvent(this._pointerEvent3D)}middleUp(e){this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._pointerEvent3D.mouseX=e.clientX-this.canvasX,this._pointerEvent3D.mouseY=e.clientY-this.canvasY,this._pointerEvent3D.type=E.POINTER_MID_UP,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this.dispatchEvent(this._pointerEvent3D)}mouseClick(e){this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._pointerEvent3D.mouseX=e.clientX-this.canvasX,this._pointerEvent3D.mouseY=e.clientY-this.canvasY,this._pointerEvent3D.type=E.POINTER_CLICK,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this.dispatchEvent(this._pointerEvent3D)}mouseEnd(e){this.isMouseDown=!1,this.mouseLastX=this.mouseX,this.mouseLastY=this.mouseY,this.mouseX=e.clientX-this.canvasX,this.mouseY=e.clientY-this.canvasY,this.mouseOffsetX=this.mouseX-this.mouseLastX,this.mouseOffsetY=this.mouseY-this.mouseLastY,this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._mouseStatus[this._pointerEvent3D.mouseCode]=!1,this._pointerEvent3D.type=E.POINTER_UP,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this._pointerEvent3D.mouseX=this.mouseX,this._pointerEvent3D.mouseY=this.mouseY,this.dispatchEvent(this._pointerEvent3D)}mouseStart(e){this.isMouseDown=!0,this.mouseLastX=this.mouseX,this.mouseLastY=this.mouseY,this.mouseX=e.clientX-this.canvasX,this.mouseY=e.clientY-this.canvasY,this.mouseOffsetX=this.mouseX-this.mouseLastX,this.mouseOffsetY=this.mouseY-this.mouseLastY,this._pointerEvent3D.reset(),this._pointerEvent3D.mouseCode=e.button,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this._pointerEvent3D.mouseX=this.mouseX,this._pointerEvent3D.mouseY=this.mouseY,this._pointerEvent3D.type=E.POINTER_DOWN,this.dispatchEvent(this._pointerEvent3D)}mouseMove(e){this.mouseLastX=this.mouseX,this.mouseLastY=this.mouseY,this.mouseX=e.clientX-this.canvasX,this.mouseY=e.clientY-this.canvasY,this.mouseOffsetX=this.mouseX-this.mouseLastX,this.mouseOffsetY=this.mouseY-this.mouseLastY,this._pointerEvent3D.reset(),this._pointerEvent3D.type=E.POINTER_MOVE,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this._pointerEvent3D.mouseX=this.mouseX,this._pointerEvent3D.mouseY=this.mouseY,this._pointerEvent3D.movementX=e.movementX,this._pointerEvent3D.movementY=e.movementY,this.dispatchEvent(this._pointerEvent3D)}mouseOver(e){this.isMouseDown=!1,this.mouseLastX=this.mouseX,this.mouseLastY=this.mouseY,this.mouseX=e.clientX-this.canvasX,this.mouseY=e.clientY-this.canvasY,this.mouseOffsetX=this.mouseX-this.mouseLastX,this.mouseOffsetY=this.mouseY-this.mouseLastY,this._pointerEvent3D.reset(),this._pointerEvent3D.type=E.POINTER_OVER,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.pointerId=e.pointerId,this._pointerEvent3D.pointerType=e.pointerType,this._pointerEvent3D.isPrimary=e.isPrimary,this._pointerEvent3D.pressure=e.pressure,this._pointerEvent3D.mouseX=this.mouseX,this._pointerEvent3D.mouseY=this.mouseY,this.dispatchEvent(this._pointerEvent3D)}mouseWheel(e){e.preventDefault(),this.mouseLastX=this.mouseX,this.mouseLastY=this.mouseY,this.mouseX=e.clientX-this.canvasX,this.mouseY=e.clientY-this.canvasY,this.mouseOffsetX=this.mouseX-this.mouseLastX,this.mouseOffsetY=this.mouseY-this.mouseLastY,"wheelDelta"in e?(this._pointerEvent3D.delay=e.wheelDelta,this.wheelDelta=e.wheelDelta):"delta"in e&&(this.wheelDelta=e.delta),this._pointerEvent3D.reset(),this._pointerEvent3D.type=E.POINTER_WHEEL,this._pointerEvent3D.ctrlKey=e.ctrlKey,this._pointerEvent3D.altKey=e.altKey,this._pointerEvent3D.shiftKey=e.shiftKey,this._pointerEvent3D.mouseX=this.mouseX,this._pointerEvent3D.mouseY=this.mouseY,this._pointerEvent3D.deltaX=e.deltaX,this._pointerEvent3D.deltaY=e.deltaY,this._pointerEvent3D.deltaZ=e.deltaZ,this.dispatchEvent(this._pointerEvent3D)}keyDown(e){this._keyEvent3d.reset(),this._keyEvent3d.keyCode=e.keyCode,this._keyEvent3d.ctrlKey=e.ctrlKey,this._keyEvent3d.altKey=e.altKey,this._keyEvent3d.shiftKey=e.shiftKey,this._keyStatus[e.keyCode]||(this._keyStatus[e.keyCode]=!0,this._keyEvent3d.type=Tr.KEY_DOWN,this.dispatchEvent(this._keyEvent3d))}keyUp(e){this._keyEvent3d.reset(),this._keyEvent3d.keyCode=e.keyCode,this._keyStatus[e.keyCode]=!1,this._keyEvent3d.type=Tr.KEY_UP,this.dispatchEvent(this._keyEvent3d)}GetSlideAngle(e,t){return 180*Math.atan2(t,e)/Math.PI}GetSlideDirection(e,t,i,a){return t-=a,a=i-e,i=0,Math.abs(a)<2&&Math.abs(t)<2||(-45<=(e=this.GetSlideAngle(a,t))&&e<45?i=4:45<=e&&e<135?i=1:-135<=e&&e<-45?i=2:(135<=e&&e<=180||-180<=e&&e<-135)&&(i=3)),i}}const Fs="0.6.6";class Gs{constructor(){s(this,"adapter"),s(this,"device"),s(this,"context"),s(this,"aspect"),s(this,"presentationSize",[0,0]),s(this,"presentationFormat"),s(this,"canvas"),s(this,"windowWidth"),s(this,"windowHeight"),s(this,"canvasConfig"),s(this,"super",1)}get pixelRatio(){var e;return((e=this.canvasConfig)==null?void 0:e.devicePixelRatio)||window.devicePixelRatio||1}async init(e){if((this.canvasConfig=e)&&e.canvas){if(this.canvas=e.canvas,this.canvas===null)throw new Error("no Canvas");var t=this.canvas.clientWidth,i=this.canvas.clientHeight;this.resize(this.canvas.clientWidth,this.canvas.clientHeight),t!=this.canvas.clientWidth&&(this.canvas.style.width=t+"px"),i!=this.canvas.clientHeight&&(this.canvas.style.width=i+"px")}else this.canvas=document.createElement("canvas"),this.canvas.style.position="absolute",this.canvas.style.top="0px",this.canvas.style.left="0px",this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.style.zIndex=e!=null&&e.zIndex?e.zIndex.toString():"0",document.body.appendChild(this.canvas);if(e&&e.backgroundImage?(this.canvas.style.background=`url(${e.backgroundImage})`,this.canvas.style["background-size"]="cover",this.canvas.style["background-position"]="center"):this.canvas.style.background="transparent",this.canvas.style["touch-action"]="none",this.canvas.style["object-fit"]="cover",navigator.gpu===void 0)throw new Error("Your browser is not support webgpu!");if(this.adapter=await navigator.gpu.requestAdapter({powerPreference:"high-performance"}),this.adapter==null)throw new Error("Your browser is not support webgpu!");if(this.device=await this.adapter.requestDevice({requiredLimits:{minUniformBufferOffsetAlignment:256,maxStorageBufferBindingSize:this.adapter.limits.maxStorageBufferBindingSize}}),this.device==null)throw new Error("Your browser is not support webgpu!");this.device.label="device",this.presentationFormat=navigator.gpu.getPreferredCanvasFormat(),this.context=this.canvas.getContext("webgpu"),this.context.configure({device:this.device,format:this.presentationFormat,usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT,alphaMode:"premultiplied",colorSpace:"display-p3"}),this.resize(this.canvas.clientWidth,this.canvas.clientHeight);let a;return new ResizeObserver(()=>{clearTimeout(a),a=setTimeout(()=>{this.resize(this.canvas.clientWidth,this.canvas.clientHeight)},50)}).observe(this.canvas),!0}resize(e,t){this.canvas.width=this.windowWidth=Math.floor(e*this.pixelRatio*this.super),this.canvas.height=this.windowHeight=Math.floor(t*this.pixelRatio*this.super),this.presentationSize[0]=this.windowWidth,this.presentationSize[1]=this.windowHeight,this.aspect=this.windowWidth/this.windowHeight}}let M=new Gs;class jt{}s(jt,"Bloom_Brightness_frag_wgsl",`
    struct uniformData {
        luminosityThreshold: f32
    };

    struct FragmentOutput {
        @location(0) o_Target: vec4<f32>
    };

    var<private> fragUV1: vec2<f32>;
    var<private> o_Target: vec4<f32>;
    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_2d<f32>;
    @group(2) @binding(0)
    var<uniform> global: uniformData;

    fn Brightness(c: vec3<f32>) -> f32 {
        var c1: vec3<f32>;

        c1 = c;
        let e8: vec3<f32> = c1;
        let e10: vec3<f32> = c1;
        let e12: vec3<f32> = c1;
        let e14: vec3<f32> = c1;
        let e17: vec3<f32> = c1;
        let e19: vec3<f32> = c1;
        let e21: vec3<f32> = c1;
        let e23: vec3<f32> = c1;
        let e25: vec3<f32> = c1;
        let e28: vec3<f32> = c1;
        return max(max(e23.x, e25.y), e28.z);
    }

    fn main1() {
        var uv: vec2<f32>;
        var LinearColor: vec4<f32>;
        var TotalLuminance: f32;
        var BloomLuminance: f32;
        var BloomAmount: f32;

        let e6: vec2<f32> = fragUV1;
        uv = e6.xy;
        let e11: vec2<f32> = uv;
        uv.y = (1.0 - e11.y);
        let e15: vec2<f32> = uv;
        let e16: vec4<f32> = textureSample(baseMap, baseMapSampler, e15);
        LinearColor = e16;
        let e18: vec4<f32> = LinearColor;
        let e27: vec4<f32> = LinearColor;
        let e36: vec4<f32> = LinearColor;
        let e38: vec3<f32> = min(vec3<f32>(f32(65000), f32(65000), f32(65000)), e36.xyz);
        LinearColor.x = e38.x;
        LinearColor.y = e38.y;
        LinearColor.z = e38.z;
        let e45: vec4<f32> = LinearColor;
        let e47: vec4<f32> = LinearColor;
        let e49: f32 = Brightness(e47.xyz);
        TotalLuminance = e49;
        let e51: f32 = TotalLuminance;
        let e52: f32 = global.luminosityThreshold;
        BloomLuminance = (e51 - e52);
        let e55: f32 = BloomLuminance;
        let e60: f32 = BloomLuminance;
        BloomAmount = clamp((e60 * 0.5), 0.0, 1.0);
        let e67: f32 = BloomAmount;
        let e68: vec4<f32> = LinearColor;
        o_Target = vec4<f32>((e67 * e68.xyz), f32(0));
        return;
    }

    @fragment
    fn main(@location(0) fragUV: vec2<f32>) -> FragmentOutput {
        fragUV1 = fragUV;
        main1();
        let e13: vec4<f32> = o_Target;
        return FragmentOutput(e13);
    }
    `),s(jt,"Bloom_blur_frag_wgsl",`
      struct uniformData {
          texSize: vec2<f32>,
          hScale: f32,
          vScale: f32,
          horizontal: f32
      };

      struct FragmentOutput {
          @location(0) o_Target: vec4<f32>
      };

      var<private> fragUV1: vec2<f32>;
      var<private> o_Target: vec4<f32>;
      @group(1) @binding(0)
      var baseMapSampler: sampler;
      @group(1) @binding(1)
      var baseMap: texture_2d<f32>;
      @group(2) @binding(0)
      var<uniform> global: uniformData;

      fn main1() {
          var uv: vec2<f32>;
          var tex_offset: vec2<f32>;
          var result: vec3<f32>;
          var i: i32 = 1;
          var local: array<f32,5> = array<f32,5>(0.22702699899673462, 0.194594606757164, 0.12162160128355026, 0.05405399948358536, 0.01621600054204464);
          var local1: array<f32,5> = array<f32,5>(0.22702699899673462, 0.194594606757164, 0.12162160128355026, 0.05405399948358536, 0.01621600054204464);
          var j: i32 = 1;
          var local2: array<f32,5> = array<f32,5>(0.22702699899673462, 0.194594606757164, 0.12162160128355026, 0.05405399948358536, 0.01621600054204464);
          var local3: array<f32,5> = array<f32,5>(0.22702699899673462, 0.194594606757164, 0.12162160128355026, 0.05405399948358536, 0.01621600054204464);

          let e13: vec2<f32> = fragUV1;
          uv = e13.xy;
          let e18: vec2<f32> = uv;
          uv.y = (1.0 - e18.y);
          let e22: vec2<f32> = global.texSize;
          tex_offset = (vec2<f32>(1.0) / vec2<f32>(e22));
          let e28: vec2<f32> = uv;
          let e29: vec4<f32> = textureSample(baseMap, baseMapSampler, e28);
          result = (e29.xyz * array<f32,5>(0.22702699899673462, 0.194594606757164, 0.12162160128355026, 0.05405399948358536, 0.01621600054204464)[0]);
          let e35: f32 = global.horizontal;
          if ((e35 > 1.0)) {
              {
                  loop {
                      let e40: i32 = i;
                      if (!((e40 < 5))) {
                          break;
                      }
                      {
                          let e47: vec3<f32> = result;
                          let e48: vec2<f32> = uv;
                          let e49: vec2<f32> = tex_offset;
                          let e51: i32 = i;
                          let e54: f32 = global.hScale;
                          let e59: vec2<f32> = uv;
                          let e60: vec2<f32> = tex_offset;
                          let e62: i32 = i;
                          let e65: f32 = global.hScale;
                          let e70: vec4<f32> = textureSample(baseMap, baseMapSampler, (e59 + vec2<f32>(((e60.x * f32(e62)) * e65), 0.0)));
                          let e72: i32 = i;
                          let e75: f32 = local[e72];
                          result = (e47 + (e70.xyz * e75));
                          let e78: vec3<f32> = result;
                          let e79: vec2<f32> = uv;
                          let e80: vec2<f32> = tex_offset;
                          let e82: i32 = i;
                          let e85: f32 = global.hScale;
                          let e90: vec2<f32> = uv;
                          let e91: vec2<f32> = tex_offset;
                          let e93: i32 = i;
                          let e96: f32 = global.hScale;
                          let e101: vec4<f32> = textureSample(baseMap, baseMapSampler, (e90 - vec2<f32>(((e91.x * f32(e93)) * e96), 0.0)));
                          let e103: i32 = i;
                          let e106: f32 = local1[e103];
                          result = (e78 + (e101.xyz * e106));
                      }
                      continuing {
                          let e44: i32 = i;
                          i = (e44 + 1);
                      }
                  }
              }
          }
          let e109: f32 = global.horizontal;
          if ((e109 < 1.0)) {
              {
                  loop {
                      let e114: i32 = j;
                      if (!((e114 < 5))) {
                          break;
                      }
                      {
                          let e121: vec3<f32> = result;
                          let e122: vec2<f32> = uv;
                          let e124: vec2<f32> = tex_offset;
                          let e126: i32 = j;
                          let e129: f32 = global.vScale;
                          let e133: vec2<f32> = uv;
                          let e135: vec2<f32> = tex_offset;
                          let e137: i32 = j;
                          let e140: f32 = global.vScale;
                          let e144: vec4<f32> = textureSample(baseMap, baseMapSampler, (e133 + vec2<f32>(0.0, ((e135.y * f32(e137)) * e140))));
                          let e146: i32 = j;
                          let e149: f32 = local2[e146];
                          result = (e121 + (e144.xyz * e149));
                          let e152: vec3<f32> = result;
                          let e153: vec2<f32> = uv;
                          let e155: vec2<f32> = tex_offset;
                          let e157: i32 = j;
                          let e160: f32 = global.vScale;
                          let e164: vec2<f32> = uv;
                          let e166: vec2<f32> = tex_offset;
                          let e168: i32 = j;
                          let e171: f32 = global.vScale;
                          let e175: vec4<f32> = textureSample(baseMap, baseMapSampler, (e164 - vec2<f32>(0.0, ((e166.y * f32(e168)) * e171))));
                          let e177: i32 = j;
                          let e180: f32 = local3[e177];
                          result = (e152 + (e175.xyz * e180));
                      }
                      continuing {
                          let e118: i32 = j;
                          j = (e118 + 1);
                      }
                  }
              }
          }
          let e183: vec3<f32> = result;
          o_Target = vec4<f32>(e183, 1.0);
          return;
      }

      @fragment
      fn main(@location(0) fragUV: vec2<f32>) -> FragmentOutput {
          fragUV1 = fragUV;
          main1();
          let e27: vec4<f32> = o_Target;
          return FragmentOutput(e27);
      }
      `),s(jt,"Bloom_composite_frag_wgsl",`
      struct uniformData {
          bloomStrength: f32,
          bloomRadius: f32
      };

      struct FragmentOutput {
          @location(0) o_Target: vec4<f32>
      };

      var<private> fragUV1: vec2<f32>;
      var<private> o_Target: vec4<f32>;
      @group(1) @binding(0)
      var baseMapSampler: sampler;
      @group(1) @binding(1)
      var baseMap: texture_2d<f32>;
      @group(1) @binding(2)
      var blurTex1Sampler: sampler;
      @group(1) @binding(3)
      var blurTex1: texture_2d<f32>;
      @group(1) @binding(4)
      var blurTex2Sampler: sampler;
      @group(1) @binding(5)
      var blurTex2: texture_2d<f32>;
      @group(1) @binding(6)
      var blurTex3Sampler: sampler;
      @group(1) @binding(7)
      var blurTex3: texture_2d<f32>;
      @group(1) @binding(8)
      var blurTex4Sampler: sampler;
      @group(1) @binding(9)
      var blurTex4: texture_2d<f32>;
      @group(1) @binding(10)
      var blurTex5Sampler: sampler;
      @group(1) @binding(11)
      var blurTex5: texture_2d<f32>;
      @group(2) @binding(0)
      var<uniform> global: uniformData;

      fn lerpBloomFactor(factor: f32) -> f32 {
          var factor1: f32;
          var mirrorFactor: f32;

          factor1 = factor;
          let e23: f32 = factor1;
          mirrorFactor = (1.2000000476837158 - e23);
          let e29: f32 = factor1;
          let e30: f32 = mirrorFactor;
          let e31: f32 = global.bloomRadius;
          return mix(e29, e30, e31);
      }

      fn main1() {
          var uv: vec2<f32>;
          var source: vec4<f32>;

          let e20: vec2<f32> = fragUV1;
          uv = e20.xy;
          let e25: vec2<f32> = uv;
          uv.y = (1.0 - e25.y);
          let e29: vec2<f32> = uv;
          let e30: vec4<f32> = textureSample(baseMap, baseMapSampler, e29);
          source = e30;
          let e32: vec4<f32> = source;
          let e33: f32 = global.bloomStrength;
          let e38: f32 = lerpBloomFactor(array<f32,5>(1.0, 0.800000011920929, 0.6000000238418579, 0.4000000059604645, 0.20000000298023224)[0]);
          let e45: vec2<f32> = uv;
          let e46: vec4<f32> = textureSample(blurTex1, blurTex1Sampler, e45);
          let e52: f32 = lerpBloomFactor(array<f32,5>(1.0, 0.800000011920929, 0.6000000238418579, 0.4000000059604645, 0.20000000298023224)[1]);
          let e59: vec2<f32> = uv;
          let e60: vec4<f32> = textureSample(blurTex2, blurTex2Sampler, e59);
          let e67: f32 = lerpBloomFactor(array<f32,5>(1.0, 0.800000011920929, 0.6000000238418579, 0.4000000059604645, 0.20000000298023224)[2]);
          let e74: vec2<f32> = uv;
          let e75: vec4<f32> = textureSample(blurTex3, blurTex3Sampler, e74);
          let e82: f32 = lerpBloomFactor(array<f32,5>(1.0, 0.800000011920929, 0.6000000238418579, 0.4000000059604645, 0.20000000298023224)[3]);
          let e89: vec2<f32> = uv;
          let e90: vec4<f32> = textureSample(blurTex4, blurTex4Sampler, e89);
          let e97: f32 = lerpBloomFactor(array<f32,5>(1.0, 0.800000011920929, 0.6000000238418579, 0.4000000059604645, 0.20000000298023224)[4]);
          let e104: vec2<f32> = uv;
          let e105: vec4<f32> = textureSample(blurTex5, blurTex5Sampler, e104);
          o_Target = (e32 + (e33 * ((((((e38 * vec4<f32>(array<vec3<f32>,5>(vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0))[0], 1.0)) * e46) + ((e52 * vec4<f32>(array<vec3<f32>,5>(vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0))[1], 1.0)) * e60)) + ((e67 * vec4<f32>(array<vec3<f32>,5>(vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0))[2], 1.0)) * e75)) + ((e82 * vec4<f32>(array<vec3<f32>,5>(vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0))[3], 1.0)) * e90)) + ((e97 * vec4<f32>(array<vec3<f32>,5>(vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0))[4], 1.0)) * e105))));
          o_Target.a = e30.a ;
          return;
      } 

      @fragment
      fn main(@location(0) fragUV: vec2<f32>) -> FragmentOutput {
          fragUV1 = fragUV;
          main1();
        //   let e81: vec4<f32> = pow(o_Target,vec4<f32>(vec3<f32>(2.2),o_Target.w));
          return FragmentOutput(o_Target);
      }
      `);let Vs=`
        var<private> colorSet : array<vec3<f32>, 9> = array<vec3<f32>, 9>(
            vec3<f32>(1.0, 0.0, 0.0),
            vec3<f32>(1.0, 0.5, 0.0),
            vec3<f32>(0.5, 1.0, 0.0),
            vec3<f32>(0.0, 1.0, 0.0),
            vec3<f32>(0.0, 1.0, 0.5),
            vec3<f32>(0.0, 0.5, 1.0),
            vec3<f32>(0.0, 0.0, 1.0),
            vec3<f32>(0.5, 0.0, 1.0),
            vec3<f32>(1.0, 0.0, 0.5)
        );

        #if DEBUG_CLUSTER
        fn debugCluster(fragCoord:vec4<f32>) {
            #if USE_LIGHT
              var tile : vec3<u32> = getTile(fragCoord);
              let clusterDebug = vec4<f32>(colorSet[u32(tile.z) % 9u], 1.0);
              ORI_FragmentOutput.color = clusterDebug ;
              // ORI_FragmentOutput.color = vec4<f32>(0.5,0.5,0.0,1.0); 
            #endif
          }
      
          fn debugClusterBox(fragCoord:vec4<f32>) {
            #if USE_LIGHT
              let clusterIndex : u32 = getClusterIndex(fragCoord);
              let cluster = clusterBuffer[clusterIndex];
        
              let midPoint : vec3<f32> = (cluster.maxPoint.xyz - cluster.minPoint.xyz) / vec3<f32>(2.0, 2.0, 2.0);
              let center : vec3<f32> = cluster.minPoint.xyz + midPoint;
              let radius : f32 = length(midPoint) ;
        
              let fragToBoundsCenter : vec3<f32> = ORI_VertexVarying.viewPosition.xyz - center;
              let distToBoundsCenter : f32 = length(fragToBoundsCenter);
              let normDist : f32 = distToBoundsCenter / radius;
              ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(normDist,normDist,normDist)  , 1.0);
            #endif
          }
      
          fn debugClusterLightCount(fragCoord:vec4<f32>){
            #if USE_LIGHT
              let clusterIndex : u32 = getClusterIndex(fragCoord);
              let lightCount : u32 = u32(assignTable[clusterIndex].count);
              let lightFactor : f32 = f32(lightCount) / f32(32.0);
              ORI_FragmentOutput.color =  mix(vec4<f32>(0.0, 0.0, 1.0, 1.0), vec4<f32>(1.0, 0.0, 0.0, 1.0), vec4<f32>(lightFactor, lightFactor, lightFactor, lightFactor));
            #endif
          }
          #endif
    `;class Zr{}s(Zr,"sky_vs_frag_wgsl",`
    #include "WorldMatrixUniform"
    #include "GlobalUniform"

    struct VertexOutput {
      @location(0) fragUV: vec2<f32>,
      @location(1) vWorldPos: vec4<f32>,
      @location(2) vWorldNormal: vec3<f32>,
      @builtin(position) member: vec4<f32>
    };

    var<private> ORI_VertexOut: VertexOutput ;

    @vertex
    fn main( 
      @builtin(instance_index) index : u32,
      @location(0) position: vec3<f32>,
      @location(1) normal: vec3<f32>,
      @location(2) uv: vec2<f32>
    ) -> VertexOutput {
      ORI_VertexOut.fragUV = uv;
      let modelMat = models.matrix[u32(index)];
      let vm = globalUniform.viewMat * modelMat;
      let normalMatrix = mat3x3<f32>(vm[0].xyz,vm[1].xyz,vm[2].xyz);
	    ORI_VertexOut.vWorldNormal = normalize( normalMatrix * normal );
      ORI_VertexOut.vWorldPos = modelMat * vec4<f32>(position.xyz,1.0) ;

      var fixProjMat = globalUniform.projMat ;
      fixProjMat[2].z = 1.0 ;//99999.0 / (99999.0 - 1.0) ;
      fixProjMat[3].z = -1.0 ;//(-1.0 * 99999.0) / (99999.0 - 1.0) ;

      var fixViewMat = globalUniform.viewMat ;
      fixViewMat[3].x = 0.0 ;
      fixViewMat[3].y = 0.0 ;
      fixViewMat[3].z = 0.0 ;

      var clipPos = fixProjMat * fixViewMat * ORI_VertexOut.vWorldPos;
      ORI_VertexOut.member = clipPos;
      return ORI_VertexOut;
    }
  `),s(Zr,"sky_fs_frag_wgsl",`
    #include "GlobalUniform"

    struct uniformData {
        exposure: f32,
        roughness: f32
    };

    struct FragmentOutput {
        @location(0) o_Target: vec4<f32>,
        #if USE_WORLDPOS
          @location(1) o_Position: vec4<f32>,
        #endif
        #if USEGBUFFER
          @location(2) o_Normal: vec4<f32>,
          @location(3) o_Material: vec4<f32>
        #endif
    };

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_cube<f32>;

    @group(2) @binding(0)
    var<uniform> global: uniformData;

    fn LinearToGammaSpace(linRGB: vec3<f32>) -> vec3<f32> {
      var linRGB1 = max(linRGB, vec3<f32>(0.0));
      linRGB1 = pow(linRGB1, vec3<f32>(0.4166666567325592));
      return max(((1.0549999475479126 * linRGB1) - vec3<f32>(0.054999999701976776)), vec3<f32>(0.0));
    }

    @fragment
    fn main(@location(0) fragUV: vec2<f32>, @location(1) vWorldPos: vec4<f32>, @location(2) vWorldNormal: vec3<f32>) -> FragmentOutput {
        let maxLevel: u32 = textureNumLevels(baseMap);
        var textureColor:vec3<f32> = textureSampleLevel(baseMap, baseMapSampler, normalize(vWorldPos.xyz), global.roughness * f32(maxLevel) ).xyz;
        #if IS_HDR_SKY
        textureColor = LinearToGammaSpace(textureColor);
        #endif
        let o_Target: vec4<f32> =vec4<f32>(textureColor, 1.0) * globalUniform.skyExposure ;
        var normal_rgba8unorm = (vWorldNormal + 1.0) * 0.5;
        normal_rgba8unorm = clamp(normal_rgba8unorm, vec3<f32>(0.0), vec3<f32>(1.0));

        return FragmentOutput(
          o_Target,
          #if USE_WORLDPOS
              vWorldPos,
          #endif
          #if USEGBUFFER
              vec4<f32>(normal_rgba8unorm,0.0),
              vec4<f32>(0.0,1.0,0.0,0.0)
          #endif
        );
    }
    `);let Hs=`
    struct LightData {
        index:f32,
        lightType:i32,
        radius:f32,
        linear:f32,
        
        position:vec3<f32>,
        lightMatrixIndex:f32,

        direction:vec3<f32>,
        quadratic:f32,

        lightColor:vec3<f32>,
        intensity:f32,

        innerCutOff :f32,
        outerCutOff:f32,
        range :f32,
        castShadow:i32,

        lightTangent:vec3<f32>,
        ies:f32,
    };

    const PointLightType = 1;
    const DirectLightType = 2;
    const SpotLightType = 3;

    struct ClusterBox{
        minPoint:vec4<f32>,
        maxPoint:vec4<f32>
    };

    struct LightIndex
    {
        count:f32,
        start:f32,
        empty0:f32,
        empty1:f32,
    };

    struct ClustersUniform{
        clusterTileX:f32,
        clusterTileY:f32,
        clusterTileZ:f32,
        numLights:f32,
        maxNumLightsPerCluster:f32,
        near:f32,
        far:f32,
        screenWidth:f32,
        screenHeight:f32,
        clusterPix:f32, 
    };

    @group(2) @binding(1)
    var<storage,read> lightBuffer: array<LightData>;
    @group(2) @binding(2)
    var<uniform> clustersUniform : ClustersUniform;
    @group(2) @binding(3)
    var<storage,read> lightAssignBuffer : array<f32>;
    @group(2) @binding(4)
    var<storage,read> assignTable : array<LightIndex>;
    #if DEBUG_CLUSTER
        @group(2) @binding(5)
        var<storage,read> clusterBuffer : array<ClusterBox>;
    #endif

    fn getLight( index:i32 ) -> LightData{
        let lightId = i32(lightAssignBuffer[index]);
        var lightData = lightBuffer[lightId];
        return lightData ;
    }

    fn linear01Depth(depth : f32) -> f32 {
        return globalUniform.far * globalUniform.near / fma(depth, globalUniform.near-globalUniform.far, globalUniform.far);
    }

    fn getTile(fragCoord : vec4<f32>) -> vec3<u32> {
        var coord = fragCoord ; 
        coord.z = linear01Depth(coord.z) ; 

        let sliceScale = f32(clustersUniform.clusterTileZ) / log2(globalUniform.far / globalUniform.near);
        let sliceBias = -(f32(clustersUniform.clusterTileZ) * log2(globalUniform.near) / log2(globalUniform.far / globalUniform.near));
        let zTile = u32(max(log2(coord.z) * sliceScale + sliceBias, 0.0));
        return vec3<u32>(u32(coord.x / (clustersUniform.screenWidth / f32(clustersUniform.clusterTileX))),
                        u32(coord.y / (clustersUniform.screenHeight / f32(clustersUniform.clusterTileY))),
                        zTile);
    }

    fn getCluster(fragCoord : vec4<f32>) -> LightIndex {
    let tile = getTile(fragCoord);
    let id = tile.x +
            tile.y * u32(clustersUniform.clusterTileX) +
            tile.z * u32(clustersUniform.clusterTileX) * u32(clustersUniform.clusterTileY);
    return assignTable[id];
    }

    #if DEBUG_CLUSTER
        fn getClusterIndex(fragCoord : vec4<f32>) -> u32 {
            let tile = getTile(fragCoord);
            let id = tile.x +
                tile.y * u32(clustersUniform.clusterTileX) +
                tile.z * u32(clustersUniform.clusterTileX) * u32(clustersUniform.clusterTileY);
            return id;
            // return 0u ;
        }
    #endif
`,Xs=`
#include "BRDF_frag"
#include "LightStruct"
#include "ShadowMapping_frag"

#if USE_IES_PROFILE
  #include "IESProfiles_frag"
#endif



const LUMEN = 10.764;



fn calcAttenuation( d : f32 ,  falloffStart : f32 ,  falloffEnd : f32)-> f32
{
    // Linear falloff.
    return saturate((falloffEnd-d) / (falloffEnd - falloffStart));
}

fn directLighting( albedo:vec3<f32>, N:vec3<f32>, V:vec3<f32>,  roughness:f32 , light:LightData , shadowBias:f32 ) -> vec3<f32> {
    var color = vec3<f32>(0.0) ;
    #if USE_LIGHT
      var L = -normalize(light.direction.xyz) ;
      let lightCC = pow( light.lightColor.rgb,vec3<f32>(2.2));
      var lightColor = getHDRColor( lightCC.rgb , light.linear )  ;
      var att = light.intensity / LUMEN ;
      if(light.castShadow>=0){
          #if USE_SHADOWMAPING
            att *= shadowStrut.directShadowVisibility[light.castShadow] ; 
          #endif
      }

      #if USE_LAMBERT
        color = vec3<f32>(1.0,0.5,1.0) ;
      #endif 

      #if USE_BRDF
        color = simpleBRDF(albedo,N,V,L,att,lightColor,fragData.Roughness) ;
      #endif 
    #endif 
    return color ;
}

fn pointLighting( albedo:vec3<f32>,WP:vec3<f32>, N:vec3<f32>, V:vec3<f32>, roughness:f32 , light:LightData ) -> vec3<f32> {
    var color = vec3<f32>(0.0) ;
    let lightPos = light.position.xyz;
    var dir = lightPos.xyz - WP ;
    let dist = length(dir);
    if(dist != 0.0){
      dir *= 1.0 / dist ;
    }
    if( abs(dist) < light.range ){
        var L = dir ;
        var atten = 1.0 ;
        atten = 1.0 - smoothstep(0.0,light.range,dist) ;
        atten *= 1.0 / max(light.radius,0.001) * light.intensity / LUMEN;
        if( light.castShadow >= 0 )
        {
            atten *= shadowStrut.pointShadows[light.castShadow] ;
        }

        #if USE_IES_PROFILE
          atten *= getLightIESProfileAtt(WP,light);
        #endif

        var lightColor = light.lightColor.rgb  ;
        lightColor = getHDRColor(lightColor , light.linear )  ;
        // lightColor = LinearToSrgbBranchless(lightColor.rgb) ;

        #if USE_LAMBERT
          color = vec3<f32>(1.0,0.5,1.0) ;
        #endif 

        #if USE_BRDF
          color = (simpleBRDF(albedo,N,V,L,atten,lightColor,fragData.Roughness))  ;
        #endif 
    } 
    return color ;
}

fn getDistanceAtten(  light:LightData , dist : f32 ) -> f32 {
  return 1.0 - smoothstep(0.0,light.range,dist) ;
}

fn spotLighting( albedo:vec3<f32>,WP:vec3<f32>, N:vec3<f32>, V:vec3<f32>, roughness:f32 , light:LightData ) -> vec3<f32> {
    let lightPos = light.position.xyz;
    var dir = lightPos.xyz - WP ;
    let dist = length(dir) ;
    if(dist != 0.0){
      dir *= 1.0 / dist ;
    }
    var color = vec3<f32>(0.0) ;
    if( abs(dist) < light.range * 2.0 ){
        var L = dir ;
        let theta = dot(-L, normalize(light.direction));
        let angle = acos(theta) ;
        var atten = 1.0 ;
        var lightColor = light.lightColor.rgb  ;

        atten = 1.0 - smoothstep(0.0,light.range,dist) ;
        atten *= 1.0 / max(light.radius,0.1) * light.intensity / LUMEN;
        if(angle < light.outerCutOff){
          if(angle > light.innerCutOff){
            atten *= 1.0 - smoothstep(light.innerCutOff, light.outerCutOff, angle) ;
          
          
          }
        }else{
          atten = 0.0 ;
        }

        if( light.castShadow >= 0 )
        {
            atten *= shadowStrut.pointShadows[light.castShadow] ;
        }

        #if USE_IES_PROFILE
            atten *= getLightIESProfileAtt(WP,light);
        #endif

        lightColor = getHDRColor(lightColor , light.linear ) ;

        #if USE_LAMBERT
          color = vec3<f32>(1.0,0.5,1.0) ;
        #endif 

        #if USE_BRDF
          color = (simpleBRDF(albedo,N,V,L,atten,lightColor,fragData.Roughness)) ;
        #endif 
    }
    return  color ;
}
`,Ys=`
var<private> PI: f32 = 3.14159265359;


fn applyQuaternion(position:vec3<f32>, q:vec4<f32>) -> vec3<f32>{
  let x:f32 = position.x;
  let y:f32 = position.y;
  let z:f32 = position.z;

  let qx:f32 = q.x;
  let qy:f32 = q.y;
  let qz:f32 = q.z;
  let qw:f32 = q.w;

  let ix:f32 = qw * x + qy * z - qz * y;
  let iy:f32 = qw * y + qz * x - qx * z;
  let iz:f32 = qw * z + qx * y - qy * x;
  let iw:f32 = -qx * x - qy * y - qz * z;

  var ret: vec3<f32>;
  ret.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  ret.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  ret.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

  return ret;
}

fn inverse( m:mat3x3<f32>) -> mat3x3<f32>{
  var a00 = m[0][0];
  var a01 = m[0][1];
  var a02 = m[0][2];
  var a10 = m[1][0];
  var a11 = m[1][1];
  var a12 = m[1][2];
  var a20 = m[2][0];
  var a21 = m[2][1];
  var a22 = m[2][2];

  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20;

  var det = a00 * b01 + a01 * b11 + a02 * b21 ;
  return mat3x3<f32>(
      vec3<f32>(b01/ det, (-a22 * a01 + a02 * a21)/ det, (a12 * a01 - a02 * a11)/ det),
      vec3<f32>(b11/ det, (a22 * a00 - a02 * a20)/ det, (-a12 * a00 + a02 * a10)/ det),
      vec3<f32>(b21/ det, (-a21 * a00 + a01 * a20)/ det, (a11 * a00 - a01 * a10)/ det)
  );
}

fn dir_to_faceId(pt:vec3<f32>) -> i32 {
    //**** nx px ny py nz pz
    var abs_x = abs(pt.x);
    var abs_y = abs(pt.y);
    var abs_z = abs(pt.z);
    var coord = max(max(abs_x, abs_y), abs_z);
    if(coord == -pt.x){  return 0;}
    if(coord == pt.x) { return 1;}

    if(coord == -pt.y){  return 2;}
    if(coord == pt.y) { return 3;}

    if(coord == -pt.z) { return 4;}
    return 5;
  }

  fn convert_xyz_to_cube_uv(x:f32, y:f32, z:f32 ) -> vec2<f32>
  {
    var dir = vec3<f32>(x, y, z);
    var absX = abs(dir.x);
    var absY = abs(dir.y);
    var absZ = abs(dir.z);

    var isXPositive = 0;
    if(dir.x > 0.0){isXPositive = 1;}
    var isYPositive = 0;
    if(dir.y > 0.0){isYPositive = 1;}
    var isZPositive = 0;
    if(dir.z > 0.0){isZPositive = 1;}

    var maxAxis:f32 = 0.0;
    var uc:f32 = 0.0;
    var vc:f32 = 0.0;

    // POSITIVE X
    if (isXPositive == 1 && absX >= absY && absX >= absZ) {
      // u (0 to 1) goes from +z to -z
      // v (0 to 1) goes from -y to +y
      maxAxis = absX;
      uc = -z;
      vc = y;
    }
    // NEGATIVE X
    if (isXPositive ==0 && absX >= absY && absX >= absZ) {
      // u (0 to 1) goes from -z to +z
      // v (0 to 1) goes from -y to +y
      maxAxis = absX;
      uc = z;
      vc = y;
    }
    // POSITIVE Y
    if (isYPositive==1 && absY >= absX && absY >= absZ) {
      // u (0 to 1) goes from -x to +x
      // v (0 to 1) goes from +z to -z
      maxAxis = absY;
      uc = x;
      vc = -z;
    }
    // NEGATIVE Y
    if (isYPositive ==0 && absY >= absX && absY >= absZ) {
      // u (0 to 1) goes from -x to +x
      // v (0 to 1) goes from -z to +z
      maxAxis = absY;
      uc = x;
      vc = z;
    }
    // POSITIVE Z
    if (isZPositive == 1&& absZ >= absX && absZ >= absY) {
      // u (0 to 1) goes from -x to +x
      // v (0 to 1) goes from -y to +y
      maxAxis = absZ;
      uc = x;
      vc = y;
    }
    // NEGATIVE Z
    if (isZPositive ==0 && absZ >= absX && absZ >= absY) {
      // u (0 to 1) goes from +x to -x
      // v (0 to 1) goes from -y to +y
      maxAxis = absZ;
      uc = -x;
      vc = y;
    }

    // Convert range from -1 to 1 to 0 to 1
    var u = 0.5f * (uc / maxAxis + 1.0f);
    var v = 0.5f * (vc / maxAxis + 1.0f);

    return vec2(u, v);
  }

    // Returns ±1
    fn signNotZero( v1:vec2<f32>) -> vec2<f32> {
        var v:vec2<f32> = v1;
        if(v.x >= 0.0){
            v.x = 1.0;
        }else{
            v.x = -1.0;
        }
        if(v.y >= 0.0){
            v.y = 1.0;
        }else{
            v.y= -1.0;
        }
        return v;
    }

    fn octEncode( v:vec3<f32> ) -> vec2<f32> {
        var l1norm = abs(v.x) + abs(v.y) + abs(v.z);
        var result = v.xy * (1.0 / l1norm);
        if (v.z < 0.0) {
            result = (1.0 - abs(result.yx)) * signNotZero(result.xy);
        }
        return result;
    }

    // Returns a unit vector. Argument o is an octahedral vector packed via octEncode,on the [-1, +1] square*/
    fn octDecode( o:vec2<f32> ) -> vec3<f32> {
        var v = vec3<f32>(o.x, o.y, 1.0 - abs(o.x) - abs(o.y));
        if (v.z < 0.0) {
            var tmp = (1.0 - abs(v.yx)) * signNotZero(v.xy);
            v.x = tmp.x;
            v.y = tmp.y;
        }
        return normalize(v);
    }

    fn Linear01Depth(z:f32,near:f32,far:f32)-> f32{
        let ZBufferZ = (-1.0+(far/near)) / far;
        let ZBufferW = near /far ;
        return 1.0 / (ZBufferZ * z + ZBufferW) ;
    }

    
    fn LinearizeDepth( depth:f32 , nearPlane:f32 , farPlane:f32 )-> f32 {
      var z = depth * 2.0 - 1.0;
      return (2.0 * nearPlane * farPlane) / (farPlane + nearPlane - z * (farPlane - nearPlane));
    }

    fn QuaternionToMatrix(q: vec4<f32>) -> mat4x4<f32> {
      // If q is guaranteed to be a unit quaternion, s will always
      // be 1.  In that case, this calculation can be optimized out.
      //float norm = GetNorm (q);
      //float s = (norm > 0.0) ? 2.0/norm : 0;

      var result: mat4x4<f32>;
  
      // Precalculate coordinate products
      let x = q.x * 2.0;
      let y = q.y * 2.0;
      let z = q.z * 2.0;
      let xx = q.x * x;
      let yy = q.y * y;
      let zz = q.z * z;
      let xy = q.x * y;
      let xz = q.x * z;
      let yz = q.y * z;
      let wx = q.w * x;
      let wy = q.w * y;
      let wz = q.w * z;
  
      // Calculate 3x3 matrix from orthonormal basis
      result[0][0] = 1.0 - (yy + zz);
      result[0][1] = xy + wz;
      result[0][2] = xz - wy;
      result[0][3] = 0.0;
  
      result[1][0] = xy - wz;
      result[1][1] = 1.0 - (xx + zz);
      result[1][2] = yz + wx;
      result[1][3] = 0.0;
  
      result[2][0] = xz + wy;
      result[2][1] = yz - wx;
      result[2][2] = 1.0 - (xx + yy);
      result[2][3] = 0.0;
  
      result[3][0] = 0.0;
      result[3][1] = 0.0;
      result[3][2] = 0.0;
      result[3][3] = 1.0;

      return result;
    }

    fn MakeScaleMatrix(scale: vec3<f32>) -> mat4x4<f32> {
        return mat4x4<f32>(
          scale.x, 0.0, 0.0, 0.0,
          0.0, scale.y, 0.0, 0.0,
          0.0, 0.0, scale.z, 0.0,
          0.0, 0.0, 0.0, 1.0,
        );
    }

    fn MakeRotationMatrix(rotationQuaternion: vec4<f32>) -> mat4x4<f32> {
        return QuaternionToMatrix(rotationQuaternion);
    }

    fn MakeTranslationMatrix(translation: vec3<f32>) -> mat4x4<f32> {
        return mat4x4<f32>(
          1.0, 0.0, 0.0, 0.0,
          0.0, 1.0, 0.0, 0.0,
          0.0, 0.0, 1.0, 0.0,
          translation.x, translation.y, translation.z, 1.0,
        );
    }

    fn MakeMatrix4x4(scale: vec3<f32>, rotationQuaternion: vec4<f32>, translation: vec3<f32>) -> mat4x4<f32> {
        var scaleMat: mat4x4<f32> = MakeScaleMatrix(scale);
        var rotationMat: mat4x4<f32> = MakeRotationMatrix(rotationQuaternion);
        var translationMat: mat4x4<f32> = MakeTranslationMatrix(translation);
        return translationMat * scaleMat * rotationMat;
    }

    fn mixMatrix4x4(a: mat4x4<f32>, b: mat4x4<f32>, t:f32) -> mat4x4<f32> {
      return a * (1.0 - t) + b * t;
      // return mat4x4<f32>(
      //   mix(a[0], b[0], t),
      //   mix(a[1], b[1], t),
      //   mix(a[2], b[2], t),
      //   mix(a[3], b[3], t)
      // );
    }

    fn decodeDepth( color:vec4<f32> ) -> f32{
      var depth = 0.0 ;
      const bitShifts = vec4<f32>(1.0 / (256.0 * 256.0 * 256.0), 1.0 / (256.0 * 256.0), 1.0 / 256.0, 1.0); 
      depth = dot(color, bitShifts);
      return depth;
    }

    fn encodeDepth( depth:f32 ) -> vec4<f32>{
      const bitSh  = vec4<f32>(256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0);
      const bitMsk = vec4<f32>(0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0);
      var comp:vec4<f32>;
      comp  = depth * bitSh;
      comp  = fract(comp);
      comp -= comp.xxyz * bitMsk;
      return comp;
    }
`,Ws=`
        struct MaterialUniform {
          transformUV1:vec4<f32>,
          transformUV2:vec4<f32>,

          baseColor: vec4<f32>,
          emissiveColor: vec4<f32>,
          materialF0: vec4<f32>,
          envIntensity: f32,
          normalScale: f32,
          roughness: f32,
          metallic: f32,
          ao: f32,

          roughness_min: f32,
          roughness_max: f32,
          metallic_min: f32,
          metallic_max: f32,
          emissiveIntensity: f32,
          alphaCutoff: f32,
          ior: f32,
          clearcoatColor: vec4<f32>,
          clearcoatWeight: f32,
          clearcoatFactor: f32,
          clearcoatRoughnessFactor: f32,
        };
      
        @group(2) @binding(0)
        var<uniform> materialUniform: MaterialUniform;
      `,Ks=`
struct MaterialUniform {
  transformUV1:vec4<f32>,
  transformUV2:vec4<f32>,
  baseColor: vec4<f32>,
  alphaCutoff: f32,
};

@group(2) @binding(0)
var<uniform> materialUniform: MaterialUniform;
`,js=`
    #include "Common_frag"
    #include "GlobalUniform"

    fn UnLit(){
        
        let alpha = ORI_ShadingInput.BaseColor.a ;
        ORI_FragmentOutput.color = vec4<f32>(ORI_ShadingInput.BaseColor.rgb * alpha , alpha) ;

        #if USE_WORLDPOS
            ORI_FragmentOutput.worldPos = vec4<f32>(ORI_VertexVarying.vWorldPos.xyzw);
        #endif

        #if USEGBUFFER
            var normal_rgba8unorm = (ORI_VertexVarying.vWorldNormal + 1.0) * 0.5;
            normal_rgba8unorm = clamp(normal_rgba8unorm, vec3<f32>(0.0), vec3<f32>(1.0));
            ORI_FragmentOutput.worldNormal = vec4<f32>(normal_rgba8unorm,1.0);
            ORI_FragmentOutput.material = vec4<f32>(1.0,1.0,0.0,1.0);
        #endif
    }

    fn debugFragmentOut(){

    }
`;class ui{static groupBindingAndFunctions(e,t){return`
            struct JointsMatrix {
                matrix : array<mat4x4<f32>>
            };

            @group(${e}) @binding(${t})
            var<storage, read> jointsMatrixIndexTable: array<f32>;

            @group(${e}) @binding(${t+1})
            var<storage, read> jointsInverseMatrix: JointsMatrix;

            @group(${e}) @binding(${t+2})
            var<storage, read> jointsIndexMapingTable: array<f32>;

            const MAX_JOINT_NUM = 8;
            fn getSkeletonWorldMatrix(joints: array<f32, MAX_JOINT_NUM>, weights: array<f32, MAX_JOINT_NUM>, num: u32) -> mat4x4<f32> {
                var result: mat4x4<f32>;
                for(var i: u32 = 0; i < num; i = i + 1) {
                    let jointId = i32(joints[i]);
                    let jointIndex = u32(jointsIndexMapingTable[jointId]);
                    let jointMatrixIndex = u32(jointsMatrixIndexTable[jointIndex]);
                    let joint = models.matrix[jointMatrixIndex] * jointsInverseMatrix.matrix[jointId] * weights[i];
                    result += joint;
                }
                return result;
            }

            fn getSkeletonWorldMatrix_4(joints: vec4<f32>, weights: vec4<f32>) -> mat4x4<f32> {
                return getSkeletonWorldMatrix(array<f32, MAX_JOINT_NUM>(
                    joints.x, joints.y, joints.z, joints.w,
                    0, 0, 0, 0,
                ), array<f32, MAX_JOINT_NUM>(
                    weights.x, weights.y, weights.z, weights.w,
                    0, 0, 0, 0,
                ), 4);
            }
    
            fn getSkeletonWorldMatrix_8(joints0: vec4<f32>, weights0: vec4<f32>, joints1: vec4<f32>, weights1: vec4<f32>) -> mat4x4<f32> {
                return getSkeletonWorldMatrix(array<f32, MAX_JOINT_NUM>(
                    joints0.x, joints0.y, joints0.z, joints0.w,
                    joints1.x, joints1.y, joints1.z, joints1.w,
                ), array<f32, MAX_JOINT_NUM>(
                    weights0.x, weights0.y, weights0.z, weights0.w,
                    weights1.x, weights1.y, weights1.z, weights1.w,
                ), 8);
            }
        `}}class ge{static getMorphTargetShaderBinding(e,t){return`
            fn blendMorphTargetPosition(vertexID:i32, posIn:vec3<f32>) -> vec3<f32>{
                let offset:i32 = vertexID * 3;
                var pos = posIn * morphTargetConfig.morphBaseInfluence;
                pos += vec3<f32>(morphTargetOpPositions[offset], morphTargetOpPositions[offset + 1], morphTargetOpPositions[offset + 2]);
                return pos;
            }

            #if USE_MORPHNORMALS
                fn blendMorphTargetNormal(vertexID:i32, normalIn:vec3<f32>) -> vec3<f32>{
                    let offset:i32 = vertexID * 3;
                    var normal = normalIn * morphTargetConfig.morphBaseInfluence;
                    normal += vec3<f32>(morphTargetOpNormals[offset], morphTargetOpNormals[offset + 1], morphTargetOpNormals[offset + 2]);
                    return normal;
                }
            #endif

            struct MorphTargetConfigData {
                morphBaseInfluence:f32,
                morphTargetCount:f32,
                totalVertexCount:f32,
                computeWorkGroupXY:f32,
            };
            
            @group(${e}) @binding(${t})
            var<uniform> morphTargetConfig: MorphTargetConfigData;
            
            @group(${e}) @binding(${t+1})
            var<storage,read> morphTargetOpPositions: array<f32>;

            #if USE_MORPHNORMALS
                @group(${e}) @binding(${t+2})
                var<storage,read> morphTargetOpNormals: array<f32>;
            #endif
`}static getMorphTargetAttr(e){return`@location(${e}) vIndex: f32,`}static getMorphTargetCalcVertex(){return`
            vertexPosition = blendMorphTargetPosition(i32(vertex.vIndex), vertexPosition);

            #if USE_MORPHNORMALS
                vertexNormal = blendMorphTargetNormal(i32(vertex.vIndex), vertexNormal);
            #endif
        `}}s(ge,"CsMain",`
        struct MorphTargetConfigData {
            morphBaseInfluence:f32,
            morphTargetCount:f32,
            totalVertexCount:f32,
            computeWorkGroupXY:f32,
        };

        @group(0) @binding(0) var<uniform> morphTargetConfig: MorphTargetConfigData;
        @group(0) @binding(1) var<storage, read> morphTargetInfluence : array<f32>;
        @group(0) @binding(2) var<storage, read> morphTargetPositions : array<f32>;
        @group(0) @binding(3) var<storage, read_write> morphTargetOpPositions : array<f32>;
        
        #if USE_MORPHNORMALS
            @group(0) @binding(4) var<storage, read> morphTargetNormals : array<f32>;
            @group(0) @binding(5) var<storage, read_write> morphTargetOpNormals : array<f32>;
        #endif
        
        @compute @workgroup_size( 8 , 8 , 1 )
        fn CsMain(@builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
        {
            let vertexIndex:i32 = i32(globalInvocation_id.y) * i32(morphTargetConfig.computeWorkGroupXY) + i32(globalInvocation_id.x);
        
            let morphTargetCount:i32 = i32(morphTargetConfig.morphTargetCount);
            let totalVertexCount:i32 = i32(morphTargetConfig.totalVertexCount);
            var vertexPosition:vec3<f32> = vec3<f32>(0.0);
            var vertexNormal:vec3<f32> = vec3<f32>(0.0);
            if(vertexIndex < totalVertexCount)
            {
                for(var i:i32 = 0; i < morphTargetCount; i ++){
                    let offset:i32 = (i * totalVertexCount + vertexIndex) * 3;
                    let morphPosition = vec3<f32>(morphTargetPositions[offset], morphTargetPositions[offset + 1], morphTargetPositions[offset + 2]);
                    vertexPosition += morphTargetInfluence[i] * morphPosition;
                }

                var writeOffset = vertexIndex * 3;
                //op position
                morphTargetOpPositions[writeOffset] = vertexPosition.x;
                morphTargetOpPositions[writeOffset + 1] = vertexPosition.y;
                morphTargetOpPositions[writeOffset + 2] = vertexPosition.z;

                #if USE_MORPHNORMALS
                    for(var i:i32 = 0; i < morphTargetCount; i ++){
                        let offset:i32 = (i * totalVertexCount + vertexIndex) * 3;
                        let morphNormal = vec3<f32>(morphTargetNormals[offset], morphTargetNormals[offset + 1], morphTargetNormals[offset + 2]);
                        vertexNormal += morphTargetInfluence[i] * morphNormal;
                    }

                    //op normal
                    morphTargetOpNormals[writeOffset] = vertexNormal.x;
                    morphTargetOpNormals[writeOffset + 1] = vertexNormal.y;
                    morphTargetOpNormals[writeOffset + 2] = vertexNormal.z;
                #endif
            }
        }
`);let qs=`
    #if USE_MORPHTARGETS
    ${ge.getMorphTargetShaderBinding(3,0)}
    #endif

    #if USE_SKELETON
    ${ui.groupBindingAndFunctions(3,0)} 
    #endif

    struct VertexAttributes{
    @builtin(instance_index) index : u32,
    @location(0) position: vec3<f32>,
    @location(1) normal: vec3<f32>,
    @location(2) uv: vec2<f32>,
    @location(3) TEXCOORD_1: vec2<f32>,

    #if USE_TANGENT
        @location(4) TANGENT: vec4<f32>,
        #if USE_SKELETON
            @location(5) joints0: vec4<f32>,
            @location(6) weights0: vec4<f32>,
            #if USE_JOINT_VEC8
            @location(7) joints1: vec4<f32>,
            @location(8) weights1: vec4<f32>,
        #endif
        #elseif USE_MORPHTARGETS
            ${ge.getMorphTargetAttr(5)}
        #endif
    #elseif USE_SKELETON
        @location(4) joints0: vec4<f32>,
        @location(5) weights0: vec4<f32>,
        #if USE_JOINT_VEC8
        @location(6) joints1: vec4<f32>,
        @location(7) weights1: vec4<f32>,
        #endif
    #elseif USE_MORPHTARGETS
        ${ge.getMorphTargetAttr(4)}
    #endif
    }

    struct VertexOutput {
    @location(0) varying_UV0: vec2<f32>,
    @location(1) varying_UV1: vec2<f32>,
    @location(2) varying_ViewPos: vec4<f32>,
    @location(3) varying_Clip: vec4<f32>,
    @location(4) varying_WPos: vec4<f32>,
    @location(5) varying_WNormal: vec3<f32>,
    @location(6) varying_Color: vec4<f32>,

    #if USE_SHADOWMAPING
        @location(7) varying_ShadowPos: vec4<f32>,
    #endif

    #if USE_TANGENT
        @location(8) varying_Tangent: vec4<f32>,
    #endif

    @builtin(position) member: vec4<f32>
    };

    var<private> ORI_VertexOut: VertexOutput ;

    fn ORI_Vert(vertex:VertexAttributes){
    var vertexPosition = vertex.position;
    var vertexNormal = vertex.normal;

    #if USE_MORPHTARGETS
    ${ge.getMorphTargetCalcVertex()}    
    #endif

    #if USE_SKELETON
        #if USE_JOINT_VEC8
            let skeletonNormal = getSkeletonWorldMatrix_8(vertex.joints0, vertex.weights0, vertex.joints1, vertex.weights1);
            ORI_MATRIX_M *= skeletonNormal ;
        #else
            let skeletonNormal = getSkeletonWorldMatrix_4(vertex.joints0, vertex.weights0);
            ORI_MATRIX_M *= skeletonNormal ;
        #endif
    #endif

    #if USE_TANGENT
        ORI_VertexOut.varying_Tangent = vertex.TANGENT ;
    #endif

    ORI_NORMALMATRIX = transpose(inverse( mat3x3<f32>(ORI_MATRIX_M[0].xyz,ORI_MATRIX_M[1].xyz,ORI_MATRIX_M[2].xyz) ));

    var worldPos = (ORI_MATRIX_M * vec4<f32>(vertexPosition.xyz, 1.0));
    var viewPosition = ORI_MATRIX_V * worldPos;
    var clipPosition = ORI_MATRIX_P * viewPosition ;

    ORI_CameraWorldDir = normalize(ORI_CAMERAMATRIX[3].xyz - worldPos.xyz) ;

    ORI_VertexOut.varying_UV0 = vertex.uv.xy ;
    ORI_VertexOut.varying_UV1 = vertex.TEXCOORD_1.xy;
    ORI_VertexOut.varying_ViewPos = viewPosition / viewPosition.w;
    ORI_VertexOut.varying_Clip = clipPosition ;
    ORI_VertexOut.varying_WPos = worldPos ;
    ORI_VertexOut.varying_WPos.w = f32(vertex.index);
    ORI_VertexOut.varying_WNormal = normalize(ORI_NORMALMATRIX * vertexNormal.xyz) ;
    ORI_VertexOut.member = clipPosition ;
    }
`,Zs=`
struct MaterialUniform {
  transformUV1:vec4<f32>,
  transformUV2:vec4<f32>,
  baseColor: vec4<f32>,
  rectClip: vec4<f32>,
  alphaCutoff: f32,
};

@group(2) @binding(0)
var<uniform> materialUniform: MaterialUniform;
`,Qs=`
    struct IrradianceVolumeData {
        //0
        orientationIndex:f32,
            hysteresis:f32,
            OctRTSideSize:f32,
            OctRTMaxSize:f32,

            //1
            startX:f32,
            startY:f32,
            startZ:f32,
            ProbeSpace:f32,

            //2
            gridXCount:f32,
            gridYCount:f32,
            gridZCount:f32,
            maxDistance:f32,

            //3
            depthSharpness:f32,
            ProbeSourceTextureSize:f32,
            ProbeSize:f32,
            bounceIntensity:f32,

            //4
            probeRoughness:f32,
            normalBias:f32,
            irradianceChebyshevBias:f32,
            rayNumber:f32,

            //5
            irradianceDistanceBias:f32,
            indirectIntensity:f32,
            ddgiGamma:f32,
            lerpHysteresis:f32,
            //6

            debugX:f32,
            debugY:f32,
            debugZ:f32,
            slot0:f32,

            //..
            v7:vec4<f32>,
    }
`,Js=`
    #include "MathShader"
    #include "FastMathShader"
    #include "InstanceUniform"

    var<private> ORI_MATRIX_P: mat4x4<f32>;
    var<private> ORI_MATRIX_V: mat4x4<f32>;
    var<private> ORI_MATRIX_M: mat4x4<f32>;
    var<private> ORI_MATRIX_PV: mat4x4<f32>;
    var<private> ORI_MATRIX_PVInv: mat4x4<f32>;
    var<private> ORI_MATRIX_World: mat4x4<f32>;
    var<private> ORI_CAMERAMATRIX: mat4x4<f32>;
    var<private> ORI_NORMALMATRIX: mat3x3<f32>;
    var<private> ORI_CameraWorldDir: vec3<f32>;

    var<private> TIME: vec4<f32>;
    var<private> MOUSE: vec4<f32>;
    var<private> SCREEN: vec4<f32>;

    var<private> ProjectionParams: vec4<f32>;

    fn vertex_inline(vertex:VertexAttributes){
        TIME.x = globalUniform.frame;
        TIME.y = globalUniform.time;
        TIME.z = globalUniform.delta;

        MOUSE.x = globalUniform.mouseX;
        MOUSE.y = globalUniform.mouseY;

        SCREEN.x = globalUniform.windowWidth;
        SCREEN.y = globalUniform.windowHeight;

        ProjectionParams.x = globalUniform.near;
        ProjectionParams.y = globalUniform.far;
        ProjectionParams.z = 1.0 + 1.0 / globalUniform.far;

        ORI_MATRIX_P = globalUniform.projMat ;
        ORI_MATRIX_V = globalUniform.viewMat ;
        ORI_MATRIX_PV = ORI_MATRIX_P * ORI_MATRIX_V ;
        ORI_MATRIX_PVInv = globalUniform.pvMatrixInv ;
        ORI_CAMERAMATRIX = globalUniform.cameraWorldMatrix ;

        ORI_MATRIX_M = models.matrix[u32(vertex.index)];
            
        #if USE_INSTANCEDRAW
            let modelID = instanceDrawID.matrixIDs[vertex.index];
            ORI_MATRIX_M = models.matrix[modelID];
        #endif
    }
`,$s=`
  #include "GlobalUniform"
  #include "FragmentVarying"
  #include "ColorPassFragmentOutput"
  #include "ShadingInput"

  var<private> ORI_FragmentOutput: FragmentOutput;
  var<private> ORI_VertexVarying: FragmentVarying;
  var<private> ORI_ShadingInput: ShadingInput;
  @fragment
  fn FragMain( vertex_varying:FragmentVarying ) -> FragmentOutput {
    ORI_VertexVarying = vertex_varying;
    ORI_FragmentOutput.color = vec4<f32>(1.0, 0.0, 0.0, 1.0);
    #if USE_WORLDPOS
      ORI_FragmentOutput.worldPos = ORI_VertexVarying.vWorldPos;
    #endif
    #if USEGBUFFER
      ORI_FragmentOutput.worldNormal = vec4<f32>(ORI_ShadingInput.Normal.rgb ,1.0); 
      ORI_FragmentOutput.material = vec4<f32>(0.0,1.0,0.0,0.0);
    #endif
    frag();
    #if USE_DEBUG
      debugFragmentOut();
    #endif

    return ORI_FragmentOutput ;
  }
`,en=`
    #include "WorldMatrixUniform"
    #include "VertexAttributes_vert"
    #include "GlobalUniform"
    #include "Inline_vert"
    @vertex
    fn VertMain( vertex:VertexAttributes ) -> VertexOutput {
        vertex_inline(vertex);
        vert(vertex);
        return ORI_VertexOut ;
    }
`,tn=`
    @group(1) @binding(auto)
    var brdflutMapSampler: sampler;
    @group(1) @binding(auto)
    var brdflutMap: texture_2d<f32>;
`,rn=`
    @group(1) @binding(auto)
    var prefilterMapSampler: sampler;
    @group(1) @binding(auto)
    var prefilterMap: texture_cube<f32>;
    @group(1) @binding(auto)
    var envMapSampler: sampler;
    @group(1) @binding(auto)
    var envMap: texture_cube<f32>;
`,Fa=`
  struct GlobalUniform {
    projMat: mat4x4<f32>,
    viewMat: mat4x4<f32>,
    cameraWorldMatrix: mat4x4<f32>,
    pvMatrixInv : mat4x4<f32>,
    shadowMatrix: array<mat4x4<f32>,8>,
    CameraPos: vec3<f32>,
    
    frame: f32,
    time: f32,
    delta: f32,
    shadowBias: f32,
    skyExposure: f32,
    renderPassState:f32,
    quadScale: f32,
    hdrExposure: f32,
  
    renderState_left: i32,
    renderState_right: i32,
    renderState_split: f32,

    mouseX: f32,
    mouseY: f32,
    windowWidth: f32,
    windowHeight: f32,

    near: f32,
    far: f32,

    pointShadowBias: f32,
    shadowMapSize: f32,
    shadowSoft: f32,
  };

  @group(0) @binding(0)
  var<uniform> globalUniform: GlobalUniform;
`,an=`
    #if USE_INSTANCEDRAW
        struct InstanceUniform {
            matrixIDs : array<i32>
        };
        @group(2) @binding(7)
        var<storage, read> instanceDrawID : InstanceUniform;
    #endif
`,Ga=`
    struct Uniforms {
        matrix : array<mat4x4<f32>>
    };

    @group(0) @binding(1)
    var<storage, read> models : Uniforms;
`,sn=`
  fn Pow3(  x : f32 ) -> f32
  {
      var xx = x*x;
      return x * xx;
  }

  fn Pow4(  x : f32 ) -> f32
  {
      var xx = x*x;
      return xx * xx;
  }

  fn pow5(x: f32) -> f32 {
      var x2 = x * x;
      return x2 * x2 * x;
  }

  fn rcp( x:f32 ) -> f32
  {
      return 1.0 / x;
  }

  fn rsqrt3( a : vec3<f32> ) -> vec3<f32>
  {
    return pow(a, vec3<f32>(-0.5));
  }

  fn rsqrt( a : f32 ) -> f32
  {
    return pow(a, -0.5);
  }
`,nn=`
    fn perturbNormal(  worldPos:vec3<f32>,  surf_norm:vec3<f32>,  mapN:vec3<f32> , normalScale:f32 , face:f32 ) -> vec3<f32> {
        var q0 = vec3<f32>( dpdx( worldPos.x ), dpdx( worldPos.y ), dpdx( worldPos.z ) );
        var q1 = vec3<f32>( dpdy( worldPos.x ), dpdy( worldPos.y ), dpdy( worldPos.z ) );
        var st0 = dpdx( ORI_VertexVarying.fragUV0.xy );
        var st1 = dpdy( ORI_VertexVarying.fragUV0.xy );
        var N = surf_norm;
        var q1perp = cross( q1, N );
        var q0perp = cross( N, q0 );
        var T = q1perp * st0.x + q0perp * st1.x;
        var B = q1perp * st0.y + q0perp * st1.y;

        var det = max( dot( T, T ), dot( B, B ) );
        var scale = 1.0 ;
        if( det != 0.0 ){
            scale = inverseSqrt( det ) ;
        }
        scale *= normalScale;
        return normalize( (T * ( -mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z ) * face ) ;
    }

    fn unpackNormalMap( normal : vec3<f32> ) -> vec3<f32>
    {
        var normalTex = vec3<f32>( normal.xyz * 2.0 - 1.0 ) ;
        return normalize(normalTex);
    }

    fn unPackNormal(normal : vec3<f32> , height:f32 ) -> vec3<f32>{
        var face = 1.0 ;
        if(ORI_VertexVarying.face){
            face = 1.0 ;
        }else{
            face = -1.0 ;
        }

        #if USE_RGNORMAL
            return unPackRGNormal(normal,height,face);
        #else
            var n = normal ;
            #if USE_NORMALFILPY
            n.y = 1.0 - n.y ; 
            #endif
            
            var mapNormal: vec3<f32> = unpackNormalMap(n) ;
            return perturbNormal(ORI_VertexVarying.vWorldPos.xyz , ORI_VertexVarying.vWorldNormal.xyz , mapNormal , height , face  ) ;
        #endif
    }

    fn unPackRGNormal(normal : vec3<f32> , height:f32 , face:f32) -> vec3<f32> {
        var d = normal.rg * 2.0 - 1.0 ;
        var l = 1.0 - saturate(dot(d,d));
        var s = sqrt(l);
        var rg = d * height ; 
        var mapNormal = vec3<f32>(rg,s);
        var outN = perturbNormal(ORI_VertexVarying.vWorldPos.xyz,ORI_VertexVarying.vWorldNormal,mapNormal,1.0,face) ;
        return outN ;
    }
`,on=`
    struct FragmentVarying {
        @location(0) fragUV0: vec2<f32>,
        @location(1) fragUV1: vec2<f32>,
        @location(2) viewPosition: vec4<f32>,
        @location(3) fragPosition: vec4<f32>,
        @location(4) vWorldPos: vec4<f32>,
        @location(5) vWorldNormal: vec3<f32>,
        @location(6) vColor: vec4<f32>,

        #if USE_SHADOWMAPING
            @location(7) vShadowPos: vec4<f32>,
        #endif

        #if USE_TANGENT
            @location(8) TANGENT: vec4<f32>,
        #endif
        
        @builtin(front_facing) face: bool,
        @builtin(position) fragCoord : vec4<f32>
    };
`,Va=`
    struct FragmentOutput {
        @location(0) color: vec4<f32>,
        #if USE_WORLDPOS
            @location(1) worldPos: vec4<f32>,
        #endif
        #if USEGBUFFER
            @location(2) worldNormal: vec4<f32>,
            @location(3) material: vec4<f32>,
        #endif
        // @builtin(frag_depth) out_depth: f32
    };
`,hn=`
    struct ShadingInput{
        BaseColor:vec4<f32>,
        Roughness:f32,
        Metallic:f32,
        Specular:f32,
        EmissiveColor:vec4<f32>,
        SurfaceColor:vec4<f32>,
        Normal:vec3<f32>,
        Tangent:vec4<f32>,
        WorldPositionOffset:vec3<f32>,
        AmbientOcclusion:f32,
        PixelDepthOffset:f32,

        Opacity:f32,
        OpacityMask:f32,

        Refraction:f32,
    }
`,ln=`
    #if USE_IES_PROFILE 
        @group(1) @binding(auto)
        var iesTextureArrayMapSampler : sampler;
        @group(1) @binding(auto)
        var iesTextureArrayMap: texture_2d_array<f32> ;
    #endif

    fn getLightIESProfileAtt( wPos : vec3<f32> , light:LightData ) -> f32
    {
        #if USE_IES_PROFILE 
            let tangent = vec3<f32>(1.0,0.0,0.0);
            let lightBitangent = normalize( cross( tangent, light.direction ) );
            let lightMatrix = mat4x4( vec4<f32>(light.direction.xyz, 0.0), vec4<f32>(lightBitangent.xyz, 0.0), vec4<f32>(tangent.xyz, 0.0), vec4<f32>(0.0, 0.0, 0.0, 1.0) );
            let lightMatrixInv = transpose(lightMatrix);
            let lightPos = light.position.xyz;
            let l = lightPos - wPos; 
            let toLight = normalize(l);
            let localToLight = (vec4<f32>(toLight.xyz, 0.0) * lightMatrixInv).xyz;
            let dotProd = dot(toLight, light.direction);
            let angle = asin(dotProd);
            let normAngle = (angle / PI) + 0.5 ;
            let tangentAngle = atan2( -localToLight.z, -localToLight.x ); 
            let normTangentAngle = tangentAngle / (PI * 2.0) + 0.5 ;
            if(light.ies >= 0.0){
                return textureSampleLevel(iesTextureArrayMap, iesTextureArrayMapSampler, vec2<f32>(normAngle , normTangentAngle) , i32(light.ies) , 0.0).r ;
            }else{
                return 1.0;
            }
        #else 
            return 1.0;
        #endif
    }

`,un=`
    #if USE_SHADOWMAPING
    @group(1) @binding(auto) var shadowMapSampler: sampler_comparison;
    @group(1) @binding(auto) var shadowMap: texture_depth_2d_array;
    #endif

    @group(1) @binding(auto) var pointShadowMapSampler: sampler;
    @group(1) @binding(auto) var pointShadowMap: texture_depth_cube_array;

    struct ShadowStruct{
      directShadowVisibility: array<f32, 8>,
      pointShadows: array<f32, 8>,
    }

    var<private>shadowStrut: ShadowStruct;

    struct ShadowBuffer{
      nDirShadowStart: i32,
      nDirShadowEnd: i32,
      nPointShadowStart: i32,
      nPointShadowEnd: i32,
      shadowLights:array<u32,16>
    }

    @group(2) @binding(5) var<storage,read> shadowBuffer: ShadowBuffer;

    fn useShadow(){
        shadowStrut.directShadowVisibility = array<f32, 8>( 1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0) ;
        shadowStrut.pointShadows = array<f32, 8>( 1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0) ;
        directShadowMaping(globalUniform.shadowBias);
        pointShadowMapCompare(globalUniform.pointShadowBias);
    }

    fn directShadowMaping(shadowBias: f32)  {
        for (var i: i32 = shadowBuffer.nDirShadowStart; i < shadowBuffer.nDirShadowEnd ; i = i + 1) {
          let ldx = shadowBuffer.shadowLights[i];
          var light = lightBuffer[ldx];
          var shadowIndex = i32(light.castShadow);
          shadowStrut.directShadowVisibility[shadowIndex] = 1.0;
          #if USE_SHADOWMAPING
            var shadowPosTmp = globalUniform.shadowMatrix[shadowIndex] * vec4<f32>(ORI_VertexVarying.vWorldPos.xyz, 1.0);
            var shadowPos = shadowPosTmp.xyz / shadowPosTmp.w;
            var varying_shadowUV = shadowPos.xy * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5, 0.5);
            var bias = max(shadowBias * (1.0 - dot(ORI_ShadingInput.Normal, light.direction)), 0.000005);

            // if(varying_shadowUV.y>=1.0) {
            //     shadowStrut.directShadowVisibility[shadowIndex] = 2.0 ;
            //     continue;
            // }
            if (varying_shadowUV.x <= 1.0 && varying_shadowUV.x >= 0.0 && varying_shadowUV.y <= 1.0 && varying_shadowUV.y >= 0.0 && shadowPosTmp.z <= 1.0) {
              var texelSize = 1.0 / vec2<f32>(globalUniform.shadowMapSize);
              var oneOverShadowDepthTextureSize = texelSize;
              var size = 1;
              var sizeBlock = size * 2 + 1;
              var sizeBlockA = sizeBlock * sizeBlock;
              var visibility = 0.0;
              for (var y = -size; y <= size; y++) {
                for (var x = -size; x <= size; x++) {
                  var offset = vec2<f32>(f32(x), f32(y)) * oneOverShadowDepthTextureSize / f32(sizeBlock);
                  visibility += textureSampleCompare(
                    shadowMap,
                    shadowMapSampler,
                    varying_shadowUV + offset,
                    shadowIndex,
                    shadowPos.z - bias
                  );
                }
              }
              visibility /= f32(sizeBlockA);
              shadowStrut.directShadowVisibility[shadowIndex] = visibility + 0.001;
            }
          #endif
      }
    }

    fn pointShadowMapCompare(shadowBias: f32){
      let worldPos = ORI_VertexVarying.vWorldPos.xyz;
      let offset = 0.1;
      // let lightIndex = getCluster(ORI_VertexVarying.fragCoord);
      // let start = max(lightIndex.start, 0.0);
      // let count = max(lightIndex.count, 0.0);
      // let end = max(start + count, 0.0);

      for (var i: i32 = shadowBuffer.nPointShadowStart; i < shadowBuffer.nPointShadowEnd ; i = i + 1) {
        let ldx = shadowBuffer.shadowLights[i];
        let light = lightBuffer[ldx] ;
        shadowStrut.pointShadows[light.castShadow] = 1.0;

        #if USE_SHADOWMAPING
        let lightPos = light.position.xyz;
        var shadow = 0.0;
        let frgToLight = worldPos - lightPos.xyz;
        var dir: vec3<f32> = normalize(frgToLight);
        var len = length(frgToLight);
        var bias = max(shadowBias * globalUniform.far * (1.0 - dot(ORI_ShadingInput.Normal, dir)), 0.005);

        #if USE_PCF_SHADOW
        let samples = 4.0;
        for (var x: f32 = -offset; x < offset; x += offset / (samples * 0.5)) {
          for (var y: f32 = -offset; y < offset; y += offset / (samples * 0.5)) {
            for (var z: f32 = -offset; z < offset; z += offset / (samples * 0.5)) {
              let offsetDir = normalize(dir.xyz + vec3<f32>(x, y, z));
              var depth = textureSampleLevel(pointShadowMap, pointShadowMapSampler, offsetDir, light.castShadow, 0);
              depth *= globalUniform.far;
              if ((len - bias) > depth) {
                shadow += 1.0 * dot(offsetDir, dir.xyz);
              }
            }
          }
        }
        shadow = min(max(shadow / (samples * samples * samples), 0.0), 1.0);
        #endif

        #if USE_SOFT_SHADOW
        let vDis = length(globalUniform.CameraPos.xyz - worldPos.xyz);
        let sampleRadies = globalUniform.shadowSoft;
        let samples = 20;
        for (var j: i32 = 0; j < samples; j += 1) {
          let offsetDir = normalize(dir.xyz + sampleOffetDir[j] * sampleRadies);
          var depth = textureSampleLevel(pointShadowMap, pointShadowMapSampler, offsetDir, light.castShadow, 0);
          depth *= globalUniform.far;
          if ((len - bias) > depth) {
            shadow += 1.0 * dot(offsetDir, dir.xyz);
          }
        }
        shadow = min(max(shadow / f32(samples), 0.0), 1.0);
        #endif

        #if USE_HARD_SHADOW
        var depth = textureSampleLevel(pointShadowMap, pointShadowMapSampler, dir.xyz, light.castShadow, 0);
        depth *= globalUniform.far;
        if ((len - bias) > depth) {
          shadow = 1.0;
        }
        #endif

        shadowStrut.pointShadows[light.castShadow] = 1.0 - shadow;
        #endif
      }
    }

    #if USE_SOFT_SHADOW
    var<private>sampleOffetDir : array<vec3<f32>, 20> = array<vec3<f32>, 20>(
      vec3<f32>(1.0, 1.0, 1.0), vec3<f32>(1.0, -1.0, 1.0), vec3<f32>(-1.0, -1.0, 1.0), vec3<f32>(-1.0, 1.0, 1.0),
      vec3<f32>(1.0, 1.0, -1.0), vec3<f32>(1.0, -1.0, -1.0), vec3<f32>(-1.0, -1.0, -1.0), vec3<f32>(-1.0, 1.0, -1.0),
      vec3<f32>(1.0, 1.0, 0.0), vec3<f32>(1.0, -1.0, 0.0), vec3<f32>(-1.0, -1.0, 0.0), vec3<f32>(-1.0, 1.0, 0.0),
      vec3<f32>(1.0, 0.0, 1.0), vec3<f32>(-1.0, 0.0, 1.0), vec3<f32>(1.0, 0.0, -1.0), vec3<f32>(-1.0, 0.0, -1.0),
      vec3<f32>(0.0, 1.0, 1.0), vec3<f32>(0.0, -1.0, 1.0), vec3<f32>(0.0, -1.0, -1.0), vec3<f32>(0.0, 1.0, -1.0),
    );
    #endif
`,cn=`
#include "IrradianceVolumeData_frag"
    fn pow3(  x : f32 ) -> f32
    {
        return x*x*x;
    }

    struct IrradianceField {
        probeStartPosition: vec4<f32>,
        probeCounts:vec4<f32>,
        probeStep:f32,
        irradianceTextureWidth:f32,
        irradianceTextureHeight:f32,
        irradianceProbeSideLength:f32,
    };

    @group(1) @binding(auto)
    var irradianceMapSampler: sampler;
    @group(1) @binding(auto)
    var irradianceMap: texture_2d<f32>;
    @group(1) @binding(auto)
    var irradianceDepthMapSampler: sampler;
    @group(1) @binding(auto)
    var irradianceDepthMap: texture_2d<f32>;

    @group(2) @binding(6)
    var<storage,read> irradianceData : IrradianceVolumeData ;

    var<private> irradianceFieldSurface: IrradianceField;
    var<private> energyPreservation: f32 = 0.85;
    var<private> quaternion:vec4<f32> = vec4<f32>(0.0, -0.7071067811865475, 0.7071067811865475, 0.0);

    fn getIrradianceFieldSurface() -> IrradianceField{
        let data = irradianceData ;
        irradianceFieldSurface.probeStartPosition = vec4<f32>(data.startX, data.startY, data.startZ, 0.0);
        irradianceFieldSurface.probeCounts = vec4<f32>(data.gridXCount, data.gridYCount, data.gridZCount, 0.0);
        irradianceFieldSurface.probeStep = data.ProbeSpace;
        irradianceFieldSurface.irradianceTextureWidth = data.OctRTMaxSize;
        irradianceFieldSurface.irradianceTextureHeight = data.OctRTMaxSize;
        irradianceFieldSurface.irradianceProbeSideLength = data.OctRTSideSize;
        return irradianceFieldSurface;
    }

    fn rotateDir(n:vec3<f32>) -> vec3<f32>{
       return normalize(applyQuaternion(-n, quaternion));
    }

    fn square1f(v:f32) -> f32 {
        return v * v ;
     }

   fn square(v:vec3<f32>) -> vec3<f32>{
      return v*v;
   }

    fn getIrradiance() -> vec4<f32>{
        var irradiance = sampleIrradianceField();
        var outerVolumeFactor:f32 = getOuterVolume(irradianceFieldSurface, ORI_VertexVarying.vWorldPos.xyz);
        irradiance *= outerVolumeFactor;
       return irradiance ;
    }
    
    fn debugProbe(id:i32) -> vec4<f32>{
        getIrradianceFieldSurface();
        var direction = normalize(ORI_VertexVarying.vWorldNormal);
        direction = applyQuaternion(-direction, quaternion);
        var probeTextureUV : vec2<f32> = textureCoordFromDirection(normalize(direction),
            id,
            irradianceFieldSurface.irradianceTextureWidth,
            irradianceFieldSurface.irradianceTextureHeight,
            irradianceFieldSurface.irradianceProbeSideLength);

        var probeIrradiance: vec4<f32> = textureSampleLevel(irradianceMap, irradianceMapSampler, probeTextureUV ,0.0);
        return probeIrradiance;
    }
    
    fn debugProbeDepth(id:i32) -> vec4<f32>{
        getIrradianceFieldSurface();
        var direction = normalize(ORI_VertexVarying.vWorldNormal);
        direction = applyQuaternion(-direction, quaternion);
        var probeTextureUV : vec2<f32> = textureCoordFromDirection(normalize(direction),
            id,
            irradianceFieldSurface.irradianceTextureWidth,
            irradianceFieldSurface.irradianceTextureHeight,
            irradianceFieldSurface.irradianceProbeSideLength);
        
        var probeIrradiance: vec4<f32> = textureSampleLevel(irradianceDepthMap, irradianceDepthMapSampler, probeTextureUV ,0.0);
        probeIrradiance.x = probeIrradiance.x / irradianceData.maxDistance;
        probeIrradiance.y = 0.0;
        probeIrradiance.z = 0.0;
        probeIrradiance.w = 1.0;
        return probeIrradiance;
    }
    
    fn getOuterVolume(L:IrradianceField, position:vec3<f32>) -> f32{
        let halfWidth:vec3<f32> = 0.5 * (L.probeCounts.xyz - 1.0) * L.probeStep;
        let edgeWidth:vec3<f32> = halfWidth + L.probeStep;
        let centerPosition:vec3<f32> = halfWidth + L.probeStartPosition.xyz;
        let clampPos = min(edgeWidth, abs(position - centerPosition));
        
        let factorX = getOuterAxis(clampPos.x, edgeWidth.x, L.probeStep);
        let factorY = getOuterAxis(clampPos.y, edgeWidth.y, L.probeStep);
        let factorZ = getOuterAxis(clampPos.z, edgeWidth.z, L.probeStep);
        return factorX * factorY * factorZ;
    }
    
    fn getOuterAxis(current:f32, edge:f32, space:f32) -> f32{
        return clamp((edge - current) / space, 0.0, 1.0);
    }

    fn getBaseGridCoord(L:IrradianceField, X:vec3<f32>) -> vec3<i32> {
        var offsetIndex = (X - L.probeStartPosition.xyz) / irradianceFieldSurface.probeStep;
        return clamp(vec3<i32>(offsetIndex.xyz), vec3<i32>(0), vec3<i32>(L.probeCounts.xyz) - 1);
    }

    fn gridCoordToProbeIndex(L:IrradianceField, grid:vec3<i32>) -> i32
    {
        return grid.x + i32(L.probeCounts.x) * grid.z + grid.y * i32(L.probeCounts.z * L.probeCounts.x);
    }

    fn gridCoordToPosition(L:IrradianceField, grid:vec3<i32>) -> vec3<f32>
    {
        var pos:vec3<f32> = vec3<f32>(grid.xyz) * L.probeStep + L.probeStartPosition.xyz;
        return pos;
    }

    fn textureCoordFromDirection(dir:vec3<f32>, probeIndex:i32, width:f32, height:f32, sideLength:f32) -> vec2<f32>
    {
        var uv = getWriteOctUVByID(dir, u32(probeIndex), sideLength) ;
        uv.x = uv.x / irradianceFieldSurface.irradianceTextureWidth;
        uv.y = uv.y / irradianceFieldSurface.irradianceTextureHeight;
        return uv ;
    }

    fn getWriteOctUVByID(dir:vec3<f32> , probeID:u32, size: f32) -> vec2<f32>
    {
        var blockCount = u32(irradianceFieldSurface.probeCounts.x * irradianceFieldSurface.probeCounts.z) ;
        var offsetX = (probeID % blockCount) % u32(irradianceFieldSurface.probeCounts.x) ;
        var offsetY = u32(irradianceFieldSurface.probeCounts.z - 1.0) - (probeID % blockCount) / u32(irradianceFieldSurface.probeCounts.x) ;
        var offsetZ = probeID / blockCount ;

        var pixelCoord = (( octEncode(dir) + 1.0 ) * 0.5) * vec2<f32>(size,size) ;

        var blockOffset = vec2<f32>(0.0);
        blockOffset.x = f32(offsetX) * size;
        blockOffset.y = f32(offsetY) * size + f32(offsetZ) * irradianceFieldSurface.probeCounts.z * size;

        let mapHeight = u32(irradianceFieldSurface.irradianceTextureHeight);
        var probeCounts:vec3<f32> = irradianceFieldSurface.probeCounts.xyz;

        var gridOffsetFrom = vec2<i32>(blockOffset) + 1;
        var gridOffsetTo = offsetByCol(gridOffsetFrom, size, mapHeight, probeCounts);

        pixelCoord = pixelCoord + vec2<f32>(gridOffsetTo - 1) + vec2<f32>(vec2<i32>(vec2<f32>(gridOffsetTo) / size) * 2);

        return pixelCoord + 1.0 ;
    }

    fn offsetByCol(pixelCoord0:vec2<i32>, octSideSize:f32, mapHeight:u32, counts:vec3<f32>) -> vec2<i32>
    {
      var pixelCoord = pixelCoord0;
      let blockSize:vec2<i32> = vec2<i32>(i32(octSideSize * counts.x),  i32(octSideSize * counts.z));
      let blockSizeYBorder:i32 = i32((octSideSize + 2.0) * counts.z);
      let blockMaxRowBorder:i32 = i32(mapHeight) / blockSizeYBorder;
      let pixelCountYMax:i32 = blockMaxRowBorder * i32(octSideSize * counts.z);
      let col:i32 = pixelCoord.y / pixelCountYMax;
      pixelCoord.x = col * i32(octSideSize * counts.x) + pixelCoord.x;
      pixelCoord.y = pixelCoord.y % pixelCountYMax;
      return pixelCoord;
    }

    var<private> wpNormal:vec3<f32> ;
    fn sampleIrradianceField() -> vec4<f32>{
        wpNormal = ORI_ShadingInput.Normal.xyz ;
        var wo:vec3<f32> = ORI_CameraWorldDir ;
        var wsN:vec3<f32> = normalize(wpNormal);
        var direction:vec3<f32> = wpNormal;
        var worldPosition: vec3<f32> = ORI_VertexVarying.vWorldPos.xyz;
   
        getIrradianceFieldSurface();

        let surfaceBias = (wsN + 3.0 * wo) * irradianceData.normalBias ;

        var irradiance = vec3<f32>(0.0, 0.0, 0.0);
        var accumulatedWeights = 0.0;
        var biasedWorldPosition = (worldPosition + surfaceBias);

        var baseProbeCoords: vec3<i32> = getBaseGridCoord(irradianceFieldSurface, worldPosition);
        
        var baseProbeWorldPosition: vec3<f32> = gridCoordToPosition(irradianceFieldSurface, baseProbeCoords) ;
        
        var gridSpaceDistance = (biasedWorldPosition - baseProbeWorldPosition);

        // alpha is how far from the floor(currentVertex) position. on [0, 1] for each axis.
        var alpha: vec3<f32> = clamp(gridSpaceDistance / (irradianceFieldSurface.probeStep), vec3<f32>(0.0), vec3<f32>(1.0));
        // let irradianceDir = rotateDir(wsN.xyz);
        // Iterate over adjacent probe cage
        for (var i:i32 = 0; i < 8; i = i + 1) {
            var adjacentProbeOffset : vec3<i32> = vec3<i32>(i, i32(f32(i) * 0.5), i32(f32(i) * 0.25)) & vec3<i32>(1);
            var adjacentProbeCoords: vec3<i32> = clamp(baseProbeCoords + adjacentProbeOffset, vec3<i32>(0),  vec3<i32>(irradianceFieldSurface.probeCounts.xyz) - 1) ;
            
            var adjacentProbeIndex :i32 = gridCoordToProbeIndex(irradianceFieldSurface, adjacentProbeCoords);
            var adjacentProbeWorldPosition :vec3<f32> = gridCoordToPosition(irradianceFieldSurface, adjacentProbeCoords) ;//+ (wsN + 3.0 * w_o) * globalUniform.normalBias;
         
            var worldPosToAdjProbe = normalize(adjacentProbeWorldPosition - worldPosition);
            var biasedPosToAdjProbe = normalize(adjacentProbeWorldPosition - biasedWorldPosition);
            var biasedPosToAdjProbeDist = length(adjacentProbeWorldPosition - biasedWorldPosition);

            let trilinear = max(vec3<f32>(0.001), mix(1.0 - alpha, alpha, vec3<f32>(adjacentProbeOffset)));
            let trilinearWeight = (trilinear.x * trilinear.y * trilinear.z);
            var weight = 1.0;

            var wrapShading = (dot(worldPosToAdjProbe, direction) + 1.0) * 0.5;
            weight *= (wrapShading * wrapShading) + 0.2;

            var depthDir = -biasedPosToAdjProbe;//probe - world
            depthDir = applyQuaternion(depthDir, quaternion);
            var probeTextureUV : vec2<f32> = textureCoordFromDirection(depthDir.xyz,
                adjacentProbeIndex,
                irradianceFieldSurface.irradianceTextureWidth,
                irradianceFieldSurface.irradianceTextureHeight,
                irradianceFieldSurface.irradianceProbeSideLength);

            var filteredDistance : vec2<f32> = 2.0 * textureSampleLevel(irradianceDepthMap, irradianceDepthMapSampler, probeTextureUV,0.0).rg ;
           
            var variance = abs((filteredDistance.x * filteredDistance.x) - filteredDistance.y);

            var chebyshevWeight = 1.0;
            if(biasedPosToAdjProbeDist > filteredDistance.x ) // occluded
            {
                var v = biasedPosToAdjProbeDist - filteredDistance.x ;
                chebyshevWeight = variance / (variance + (v * v));
                // Increase the contrast in the weight
                chebyshevWeight = max((chebyshevWeight * chebyshevWeight * chebyshevWeight), 0.0);
            }

            weight *= max(0.05, chebyshevWeight);
            weight = max(0.000001, weight);

            let crushThreshold = 0.2;
            if (weight < crushThreshold)
            {
                weight *= (weight * weight) * (1.0 / (crushThreshold * crushThreshold));
            }

            weight *= trilinearWeight;
            
            //worldPosToAdjProbe
            let rotateDir = applyQuaternion(-direction, quaternion);
            probeTextureUV = textureCoordFromDirection((rotateDir),
            adjacentProbeIndex,
            irradianceFieldSurface.irradianceTextureWidth,
            irradianceFieldSurface.irradianceTextureHeight,
            irradianceFieldSurface.irradianceProbeSideLength);

            var probeIrradiance: vec3<f32> = textureSampleLevel(irradianceMap, irradianceMapSampler, probeTextureUV ,0.0).xyz;

            var exponent =  irradianceData.ddgiGamma * 0.5;
            probeIrradiance = pow(probeIrradiance, vec3<f32>(exponent));
            
            irradiance += (weight * probeIrradiance);
            accumulatedWeights += weight;
        }

        if(accumulatedWeights == 0.0){
            return vec4<f32>(0.0, 0.0, 0.0,1.0);
        }

        irradiance *= (1.0 / accumulatedWeights);   
        irradiance *= irradiance;                   

        //irradiance *= 6.2831853071795864;
        irradiance *= PI;
        irradiance *= irradianceData.indirectIntensity;
        return vec4<f32>(irradiance,1.0) ;
    }

`,dn=`
#include "Clearcoat_frag"
    #include "EnvMap_frag"
    #include "BrdfLut_frag"

    struct FragData {
        Ao: f32,
        Metallic: f32,
        Roughness: f32,

        Albedo: vec4<f32>,
        Emissive: vec3<f32>,

        N: vec3<f32>,
        V: vec3<f32>,
        R: vec3<f32>,

        F0: vec3<f32>,
        F: vec3<f32>,
        KS: vec3<f32>,
        KD: vec3<f32>,
        Shadow: f32,
        Indirect: f32,
        Reflectance: f32,

        NoV: f32,
        FaceDirection:f32,

        DiffuseColor: vec3<f32>,
        SpecularColor: vec3<f32>,
        ClearcoatRoughness:f32,
        EnvColor: vec3<f32>,
        Irradiance: vec3<f32>,
    };

    var<private> fragData: FragData;

    struct BxDFContext
    {
        NoV : f32 ,
        NoL : f32 ,
        VoL : f32 ,
        NoH : f32 ,
        VoH : f32
    };

    fn getContext( N:vec3<f32>, V:vec3<f32>, H:vec3<f32>, L:vec3<f32> ) -> BxDFContext
    {
        var Context:BxDFContext ;
        Context.NoL = saturate(dot(N, L))  ;
        Context.NoV = saturate(dot(N, V))  ;
        Context.VoL = saturate(dot(V, L)) ;
        Context.NoH = saturate(dot(N, H));
        Context.VoH = saturate(dot(V, H));

        // Context.NoL = max(dot(N, L),0.0);
        // Context.NoV = max(dot(N, V),0.0);
        // Context.VoL = max(dot(V, L),0.0) ;
        // Context.NoH = saturate(dot(N, H));
        // Context.VoH = max(dot(V, H),0.0);
        return Context ;
    }

    // convert roughness to mipmapLevel
    fn roughnessToMipmapLevel( roughness: f32 , mipmapCount:i32 ) -> f32{
        let level = roughness * (1.7 - 0.7 * roughness );
        return level * f32(mipmapCount);
    }

    fn Fd90( NoL:f32, roughness:f32) -> f32
    {
        return (2.0 * NoL * roughness) + 0.4;
    }

    fn KDisneyTerm( NoL:f32, NoV:f32 , roughness:f32) -> f32
    {
        return (1.0 + Fd90(NoL, roughness) * pow(1.0 - NoL, 5.0)) * (1.0 + Fd90(NoV, roughness) * pow(1.0 - NoV, 5.0));
    }

    fn FresnelSchlick( NoV:f32,  F0:vec3<f32>) -> vec3<f32>
    {
        return F0 + (1.0 - F0) * pow(1.0 - NoV, 5.0);
    }

    fn FresnelSchlickRoughness( NoV:f32,  F0:vec3<f32>,  roughness:f32) -> vec3<f32>
    {
        return F0 + (max(vec3(1.0 - roughness), F0) - F0) * pow(1.0 - NoV, 5.0);
    }

    fn DistributionGGX( NdotH:f32 ,  roughness:f32 ) -> f32
    {
        let alpha = roughness * roughness;
        let alpha2 = roughness * roughness;

        let NdotH2 = NdotH * NdotH;

        let nom   = alpha2;
        var denom = (NdotH2 * (alpha2 - 1.0) + 1.0);
        denom = PI * denom * denom;

        return nom / denom;
    }

    // [Heitz 2014, "Understanding the Masking-Shadowing Function in Microfacet-Based BRDFs"]
    fn Vis_SmithJoint( NoV : f32 ,  NoL : f32 ,  a2 : f32) -> f32
    {
        var Vis_SmithV = NoL * sqrt(NoV * (NoV - NoV * a2) + a2);
        var Vis_SmithL = NoV * sqrt(NoL * (NoL - NoL * a2) + a2);
        return 0.5 * rcp(Vis_SmithV + Vis_SmithL);
    }

    fn GeometrySchlickGGX( NdotV : f32 , roughness : f32 ) -> f32
    {
        //roughness compute ks
        let r = (roughness + 1.0);
        let k = (r*r) / 8.0;

        let nom   = NdotV;
        let denom = NdotV * (1.0 - k) + k;
        
        return nom / denom;
    }
    
    fn GeometrySmith( NdotV:f32 , NdotL:f32 , roughness : f32) -> f32
    {
        // let NdotV = max(dot(N, V), 0.0);
        // let NdotL = max(dot(N, L), 0.0);
        let ggx1 = GeometrySchlickGGX(NdotV, roughness);
        let ggx2 = GeometrySchlickGGX(NdotL, roughness);
        return ggx1 * ggx2;
    }

    fn GeometryAttenuationGGXSmith( NdotL:f32,  NdotV:f32,  roughness:f32) -> f32
    {
        var NdotL2 = NdotL * NdotL;
        var NdotV2 = NdotV * NdotV;
        var kRough2 = roughness * roughness + 0.0001;

        var ggxL = (2.0 * NdotL) / (NdotL + sqrt(NdotL2 + kRough2 * (1.0 - NdotL2)));
        var ggxV = (2.0 * NdotV) / (NdotV + sqrt(NdotV2 + kRough2 * (1.0 - NdotV2)));

        return ggxL * ggxV;
    }

    fn colorLinear( colorVector:vec3<f32> ) -> vec3<f32>
    {
        var linearColor = pow(colorVector.rgb, vec3<f32>(2.2));
        return linearColor;
    }

    fn computeFresnelSchlick( NoV:f32 , F0:vec3<f32>) -> vec3<f32>
    {
        return F0 + (1.0 - F0) * pow(clamp(1.0 - NoV,0.0,1.0), 5.0);
    }

    fn computeFresnelSchlickRoughness(NoV:f32 , F0:vec3<f32>,  roughness:f32) -> vec3<f32>
    {
        return F0 + (max(vec3(1.0 - roughness), F0) - F0) * pow(clamp(1.0 - fragData.NoV,0.0,1.0), 5.0);
    }

    fn computeDistributionGGX( N:vec3<f32>,  H:vec3<f32>,  roughness:f32) -> f32
    {
        var alpha = roughness * roughness;
        var alpha2 = alpha * alpha; 

        var NdotH = saturate(dot(N, H));
        var NdotH2 = NdotH * NdotH;

        return (alpha2) / (PI * (NdotH2 * (alpha2 - 1.0) + 1.0) * (NdotH2 * (alpha2 - 1.0) + 1.0));
    }

    fn D_GGX( N:vec3<f32>,  H:vec3<f32>,  roughness:f32 ) -> f32
    {
        var NoH = saturate(dot(N, H));
        var d = ( NoH * roughness - NoH ) * NoH + 1.0;	// 2 mad
        return roughness / ( PI*d*d );					// 4 mul, 1 rcp
    }

    fn computeGeometryAttenuationGGXSmith( NdotL:f32 ,  NdotV:f32,  roughness:f32) -> f32
    {
        var NdotL2 = NdotL * NdotL;
        var NdotV2 = NdotV * NdotV;
        var kRough2 = roughness * roughness + 0.0001;

        var ggxL = (2.0 * NdotL) / (NdotL + sqrt(NdotL2 + kRough2 * (1.0 - NdotL2)));
        var ggxV = (2.0 * NdotV) / (NdotV + sqrt(NdotV2 + kRough2 * (1.0 - NdotV2)));

        return ggxL * ggxV;
    }

    fn Vis_Smith(  NoL:f32 ,  NoV:f32,  a2:f32 )-> f32
    {
        var Vis_SmithV = NoV + sqrt( NoV * (NoV - NoV * a2) + a2 );
        var Vis_SmithL = NoL + sqrt( NoL * (NoL - NoL * a2) + a2 );
        return rcp( Vis_SmithV * Vis_SmithL );
    }

    fn simpleBRDF( albedo:vec3<f32>, N:vec3<f32>, V:vec3<f32>,L:vec3<f32>,att:f32,lightColor:vec3<f32>,roughness:f32 )-> vec3<f32>{
        let H = normalize(V + L);
        let Context:BxDFContext = getContext(N,V,H,L);

        let D = DistributionGGX( Context.NoH , roughness);
        let G = GeometrySmith(Context.NoV,Context.NoL, roughness );
        let F = FresnelSchlick(Context.VoH, vec3<f32>(fragData.F0));
        let specular = ( D * G * F ) / (4.0 * Context.NoV * Context.NoL + 0.001);
        let kS = F;
        var kd = 1.0 - kS ;
        kd *= 1.0 - fragData.Metallic ;
        var diffuse = kd * (albedo.rgb / PI ) ;
        let ambient = specular.rgb ;

        fragData.KD += kd;
        fragData.KS += F;

        var col = (diffuse + ambient) * Context.NoL * lightColor * att ;
        // var col = (diffuse + ambient) * Context.NoL * lightColor ;
        return (col.rgb ) ;
    }

    fn getSpecularDominantDir (  N : vec3<f32> , R : vec3<f32> , roughness : f32 ) -> vec3<f32>
    {
        var smoothness = saturate (1.0 - roughness );
        var lerpFactor = smoothness * ( sqrt ( smoothness ) + roughness );
        // The result is not normalized as we fetch in a cubemap
        return mix (N, R, lerpFactor );
    }

    fn approximateSpecularIBL( specularColor:vec3<f32> , roughness:f32 , R:vec3<f32>) -> vec3<f32> {
        let NoV = fragData.NoV ;
        let MAX_REFLECTION_LOD  = i32(textureNumLevels(prefilterMap)) ;
        let mip = roughnessToMipmapLevel(roughness,MAX_REFLECTION_LOD);
        var prefilteredColor: vec3<f32> = (textureSampleLevel(prefilterMap, prefilterMapSampler, getSpecularDominantDir(fragData.N,R,roughness) , mip ).rgb);
        prefilteredColor = globalUniform.skyExposure * LinearToGammaSpace(prefilteredColor);
        var envBRDF = textureSampleLevel(brdflutMap, brdflutMapSampler, vec2<f32>(NoV, roughness) , 0.0 ) ;
        return prefilteredColor * (specularColor.rgb * envBRDF.x + saturate( 50.0 * specularColor.g ) * envBRDF.y) ;
    }

    fn fresnel_coat(n:vec3<f32>,v:vec3<f32>,ior:f32) -> f32 {
        var f0 = (1.0-ior)/(1.0+ior);
        f0 = f0 * f0  ;
        let fr = pow((f0 + (1.0 - f0)*(1.0 - abs( max(dot(n,v),0.0) ))) , 5.0 ) ;  
        return fr ;
    }

    fn reflectEnvMap(n:vec3<f32> , v:vec3<f32> , roughness:f32) -> vec3<f32> {
        let MAX_REFLECTION_LOD  = i32(textureNumLevels(envMap)) ;
        let mip = roughnessToMipmapLevel(roughness,MAX_REFLECTION_LOD);
        let R = 2.0 * dot( v , n ) * n - v ;
        var prefilteredColor: vec3<f32> = globalUniform.skyExposure * (textureSampleLevel(envMap, envMapSampler, R , mip ).rgb);
        prefilteredColor = LinearToGammaSpace(prefilteredColor);
        return prefilteredColor ;
    }

    fn Specular_D_GGX( NoH:f32,  roughness:f32 ) -> f32
    {
        let a2 = roughness * roughness ;
        let f = (NoH * a2 - NoH) * NoH + 1.0;
        return a2 / (PI * f * f) ;
    }

    fn V_Kelemen( LoH : f32 ) -> f32 {
        return 0.25 / (LoH * LoH);
    }

    fn F_Schlick( f0:vec3<f32> ,  f90 : f32 ,  VoH : f32 ) -> vec3<f32> {
        return f0 + (f90 - f0) * pow(1.0 - VoH,5.0);
    }

    //https://google.github.io/filament/Filament.html materialsystem/clearcoatmodel/clearcoatparameterization
    fn CoatSpecular_brdf( f:vec3<f32>, s:vec3<f32>, n:vec3<f32> , v:vec3<f32> , l:vec3<f32> , att:f32 , layer :vec3<f32>) -> vec3<f32> {
        let H = normalize(v + l); 
        let VdotNc = max(dot(v,n),0.0);
        let LdotNc = max(dot(l,n),0.0);
        let NoH = max(dot(n,H),0.0);
        let LoH = clamp(dot(l,H),0.0,1.0);
        let NoL = max(dot(n,l),0.0);

        let Fd = f ; 
        let Fr = s ; 

        let clearcoatRoughnessFactor = clamp(materialUniform.clearcoatRoughnessFactor,0.089,1.0);
        let clearCoatRoughness = clearcoatRoughnessFactor * clearcoatRoughnessFactor ;

        let Dc = Specular_D_GGX( NoH , clearCoatRoughness ) ;
        let Vc = V_Kelemen( LoH ) ;
        let Fc = F_Schlick(vec3<f32>(0.04), clearCoatRoughness , pow(LoH,2.0)); 
        let Frc = (Dc * Vc) * Fc ;
        // return layer * vec3<f32>((Fd + Fr * (1.0 - Fc)) * (1.0 - Fc) + Frc) ;//* NoL;
        return layer * vec3<f32>((Fd + Fr * (1.0 - Fc)) * (1.0 - Fc) + Frc) * ( 0.5 + NoL * 0.5 ) ;
    }

    fn approximate_coating(base:vec3<f32> , clearColor: vec3<f32>, n:vec3<f32> , v:vec3<f32> , light:LightData ) -> vec3<f32> {
        let clearcoatRoughnessFactor = clamp(materialUniform.clearcoatRoughnessFactor,0.084,1.0);
        var clearcoatAlpha = clearcoatRoughnessFactor * clearcoatRoughnessFactor + fragData.ClearcoatRoughness;

        // var lightColor = getHDRColor( lightCC.rgb , light.linear )  ;
        var att = light.intensity ;
        let l = light.direction ;
   
        let NdotV = max(dot(n,v),0.0);
        let MAX_REFLECTION_LOD  = i32(textureNumLevels(prefilterMap)) ;
        let mip = roughnessToMipmapLevel(clearcoatAlpha,MAX_REFLECTION_LOD);
        let R = 2.0 * dot( v , n ) * n - v ;
        var envIBL: vec3<f32> = globalUniform.skyExposure * (textureSampleLevel(prefilterMap, prefilterMapSampler, R ,mip ).rgb) ;
        envIBL = LinearToGammaSpace(envIBL);

        let clearCoat = materialUniform.clearcoatFactor ;
        let f = FresnelSchlickRoughness( max(dot(n,v),0.0) , vec3<f32>(0.0) , clearcoatAlpha ) ;
        let clearcoat_brdf = (f * envIBL) + CoatSpecular_brdf( clearColor , vec3<f32>( clearCoat ) , n , v , -l , att , envIBL ) ;

        // return clearcoat_brdf;+ fragData.ClearcoatRoughness 
        return mix(base,clearcoat_brdf,materialUniform.clearcoatWeight ) ;
    }
`,fn=`
  #include "Clearcoat_frag"
  #include "BRDF_frag"
  #include "MathShader"
  #include "FastMathShader"
  #include "Common_frag"
  #include "GlobalUniform"

  #include "PhysicMaterialUniform_frag"
  #include "NormalMap_frag"
  #include "LightingFunction_frag"
  #include "Irradiance_frag"
  #include "ColorUtil_frag"
  #include "BxdfDebug_frag"


 
  //ORI_ShadingInput
  fn initFragData() {
      fragData.Albedo = ORI_ShadingInput.BaseColor ;
      fragData.Ao = ORI_ShadingInput.AmbientOcclusion ; 
      fragData.Roughness = max(ORI_ShadingInput.Roughness,0.003) ; 
      fragData.Metallic = ORI_ShadingInput.Metallic ; 
      fragData.Emissive = ORI_ShadingInput.EmissiveColor.rgb ; 
      fragData.N = ORI_ShadingInput.Normal;
      fragData.V = normalize(globalUniform.cameraWorldMatrix[3].xyz - ORI_VertexVarying.vWorldPos.xyz) ;

      let R = 2.0 * dot( fragData.V , fragData.N ) * fragData.N - fragData.V ;
      fragData.R = R;//reflect( fragData.V , -fragData.N ) ;

      fragData.NoV = saturate(dot(fragData.N, fragData.V)) ;

      fragData.F0 = mix(vec3<f32>(0.04), fragData.Albedo.rgb, fragData.Metallic);
      
      fragData.F = computeFresnelSchlick(fragData.NoV, fragData.F0);
      fragData.KD = vec3<f32>(fragData.F) ;
      fragData.KS = vec3<f32>(0.0) ;

      fragData.Indirect = 0.0 ;
      fragData.Reflectance = 1.0 ;

      fragData.DiffuseColor = fragData.Albedo.rgb * (1.0 - fragData.Metallic);
      fragData.SpecularColor = mix(vec3<f32>(1.0), fragData.Albedo.rgb, fragData.Metallic);

      fragData.ClearcoatRoughness = 0.0 ;
      #if USE_CLEARCOAT_ROUGHNESS
        fragData.ClearcoatRoughness = getClearcoatRoughnees() ;
      #endif
  }

  fn BxDFShading(){
      initFragData();

      var color = vec3<f32>(0.0);

      let lightIndex = getCluster(ORI_VertexVarying.fragCoord);
      let start = max(lightIndex.start, 0.0);
      let count = max(lightIndex.count, 0.0);
      let end = max(start + count , 0.0);
      for(var i:i32 = i32(start) ; i < i32(end); i += 1 )
      {
        let light = getLight(i32(i));

        switch (light.lightType) {
          case PointLightType: {
              color += pointLighting( fragData.Albedo.rgb,ORI_VertexVarying.vWorldPos.xyz,fragData.N,fragData.V,fragData.Roughness , light ) ;
          }
          case DirectLightType: {
            color += directLighting( fragData.Albedo.rgb ,fragData.N,fragData.V,fragData.Roughness , light , globalUniform.shadowBias) ;
          }
          case SpotLightType: {
            color += spotLighting( fragData.Albedo.rgb,ORI_VertexVarying.vWorldPos.xyz,fragData.N,fragData.V,fragData.Roughness , light ) ;
          }
          default: {
          }
        }
      }

      var kS = FresnelSchlickRoughness(fragData.NoV, fragData.F0, fragData.Roughness );
      var kD = vec3(1.0) - kS;
      kD = kD * (1.0 - fragData.Metallic);
      kD = max(vec3<f32>(0.04),kD) ;

      let MAX_REFLECTION_LOD  = f32(textureNumLevels(prefilterMap)) ;
      var diffuseIrradiance: vec3<f32> = vec3<f32>(0.0);//

      #if USE_SKYLIGHT
          var prefilterTex: vec3<f32> = globalUniform.skyExposure * (textureSampleLevel(prefilterMap, prefilterMapSampler, fragData.N.xyz, 8.0 ).rgb);
          prefilterTex = LinearToGammaSpace(prefilterTex);
          var skyLight = kD * fragData.Albedo.xyz * prefilterTex;
          // color += skyLight ;
      #endif

      var envRef = kS * approximateSpecularIBL( fragData.SpecularColor , fragData.Roughness , fragData.R ) ;//* (materialUniform.ior - 1.0) ;
      var irradiance = diffuseIrradiance ;
      #if USEGI
          irradiance += getIrradiance().rgb ;
      #else
          irradiance += LinearToGammaSpace(globalUniform.skyExposure * textureSampleLevel(prefilterMap, prefilterMapSampler, fragData.N.xyz, 0.8 * (MAX_REFLECTION_LOD) ).rgb);
      #endif

      fragData.Irradiance = irradiance;


      var diffuseIBL = fragData.Albedo.rgb * irradiance.rgb ;
      // var ambientIBL = kD * fragData.Albedo.rgb * fragData.Ao;
      fragData.EnvColor = materialUniform.envIntensity * envRef  ;

      ORI_FragmentOutput.color = vec4<f32>(0.0);

      #if USE_CLEARCOAT
          for(var i:i32 = i32(start) ; i < i32(end); i = i + 1 )
          {
              let light = getLight(i);
              switch (light.lightType) {
                  case PointLightType: {
                      color += pointLighting(fragData.Albedo.rgb,ORI_VertexVarying.vWorldPos.xyz,fragData.N,fragData.V,fragData.Roughness , light ) ;
                  }
                  case DirectLightType: {
                      color += directLighting( fragData.Albedo.rgb ,fragData.N,fragData.V,fragData.Roughness , light , globalUniform.shadowBias) ;
                  }
                  case SpotLightType: {
                      color += spotLighting( fragData.Albedo.rgb,ORI_VertexVarying.vWorldPos.xyz,fragData.N,fragData.V,fragData.Roughness , light ) ;
                  }
                  default: {
                  }
              }
          }
      #endif
    
      // // Using stripped down, 'pure log', formula. Parameterized by grey points and dynamic range covered.
      #if USEGBUFFER
          var normal_rgba8unorm = (ORI_VertexVarying.vWorldNormal + 1.0) * 0.5;
          normal_rgba8unorm = clamp(normal_rgba8unorm, vec3<f32>(0.0), vec3<f32>(1.0));
      #endif
      
      // ORI_FragmentOutput.color = vec4<f32>(ORI_FragmentOutput.color.xyz,fragData.Albedo.a) ;
      #if USE_WORLDPOS
          ORI_FragmentOutput.worldPos = vec4<f32>(ORI_VertexVarying.vWorldPos.xyzw);
      #endif

      #if USEGBUFFER
          ORI_FragmentOutput.worldNormal = vec4<f32>(normal_rgba8unorm,1.0);
          ORI_FragmentOutput.material = vec4<f32>(1.0,fragData.Roughness,fragData.Metallic,1.0);
      #endif
      
      // color = pow(color.rgb,vec3<f32>(2.0));

      color += diffuseIBL ;
      // color += ambientIBL ;
      color += fragData.EnvColor * fragData.Ao ;
      color += fragData.Emissive.xyz ;

      //-1 1
      // color = diffuseIBL ;
      ORI_FragmentOutput.color = vec4<f32>(color.rgb,fragData.Albedo.a) ;

      // let gamma = 2.0 ;
      // ORI_FragmentOutput.color = pow(ORI_FragmentOutput.color,vec4(gamma,gamma,gamma,1.0));
  }
  `,pn=`
    #if USE_CLEARCOAT_ROUGHNESS
    @group(1) @binding(auto)
    var clearCoatRoughnessMapSampler: sampler;
    @group(1) @binding(auto)
    var clearCoatRoughnessMap: texture_2d<f32>;

                fn getClearcoatRoughnees() -> f32{
        let clearcoatRoughness = textureSample(clearCoatRoughnessMap, clearCoatRoughnessMapSampler, ORI_VertexVarying.fragUV0.xy).r;
        return clearcoatRoughness;
    }
    #else
                fn getClearcoatRoughnees() -> f32{
        return 0.0;
    }
    #endif
`,mn=`
    #include "Common_vert"
    #include "Common_frag"
    #include "BxDF_frag"

    fn vert(inputData:VertexAttributes) -> VertexOutput {
        ORI_Vert(inputData) ;
        return ORI_VertexOut ;
    }

    fn frag(){
        ORI_ShadingInput.BaseColor = materialUniform.baseColor ;
        ORI_ShadingInput.Roughness = materialUniform.roughness  ;
        ORI_ShadingInput.Metallic = materialUniform.metallic ;
        ORI_ShadingInput.Specular = 0.5 ;
        ORI_ShadingInput.AmbientOcclusion = materialUniform.ao ;
        ORI_ShadingInput.EmissiveColor = vec4<f32>(0.0);

        ORI_ShadingInput.Normal = ORI_VertexVarying.vWorldNormal.rgb ;

        BxDFShading();
    }
`,gn=`
    #include "Common_vert"
    #include "Common_frag"
    #include "BxDF_frag"

    @group(1) @binding(auto)
    var baseMapSampler: sampler;
    @group(1) @binding(auto)
    var baseMap: texture_2d<f32>;

    @group(1) @binding(auto)
    var normalMapSampler: sampler;
    @group(1) @binding(auto)
    var normalMap: texture_2d<f32>;

    #if USE_ARMC
    @group(1) @binding(auto)
    var maskMapSampler: sampler;
    @group(1) @binding(auto)
    var maskMap: texture_2d<f32>;
    #endif

    #if USE_AOTEX
    @group(1) @binding(auto)
    var aoMapSampler: sampler;
    @group(1) @binding(auto)
    var aomapMap: texture_2d<f32>;
    #endif

    @group(1) @binding(auto)
    var emissiveMapSampler: sampler;
    @group(1) @binding(auto)
    var emissiveMap: texture_2d<f32>;

    fn vert(inputData:VertexAttributes) -> VertexOutput {
        ORI_Vert(inputData) ;
        return ORI_VertexOut ;
    }

    fn frag(){
        var transformUV1 = materialUniform.transformUV1;
        var transformUV2 = materialUniform.transformUV2;

        var uv = transformUV1.zw * ORI_VertexVarying.fragUV0 + transformUV1.xy; 

        ORI_ShadingInput.BaseColor = textureSample(baseMap, baseMapSampler, uv ) * materialUniform.baseColor ;
    
        // #if USE_ALPHACUT
            // ORI_ShadingInput.BaseColor.a = clamp(ORI_ShadingInput.BaseColor.a, 0.001 , 1.0 );
            if( (ORI_ShadingInput.BaseColor.a - materialUniform.alphaCutoff) <= 0.0 ){
                ORI_FragmentOutput.color = vec4<f32>(0.0,0.0,0.0,1.0);
                ORI_FragmentOutput.worldPos = vec4<f32>(0.0,0.0,0.0,1.0);
                ORI_FragmentOutput.worldNormal = vec4<f32>(0.0,0.0,0.0,1.0);
                ORI_FragmentOutput.material = vec4<f32>(0.0,0.0,0.0,1.0);
                discard;
            }
        // #endif

        #if USE_SHADOWMAPING
            useShadow();
        #endif

        // ORI_ShadingInput.BaseColor = vec4<f32>(sRGBToLinear(ORI_ShadingInput.BaseColor.xyz),ORI_ShadingInput.BaseColor.w);
    
        #if USE_ARMC
            var maskTex = textureSample(maskMap, maskMapSampler, uv ) ;

            ORI_ShadingInput.AmbientOcclusion = maskTex.r * materialUniform.ao ; 

            #if USE_AOTEX
                var aoMap = textureSample(aomapMap, aoMapSampler, uv );
                ORI_ShadingInput.AmbientOcclusion = mix(0.0,aoMap.r,materialUniform.ao) ;
            #endif

            ORI_ShadingInput.Roughness = maskTex.g * materialUniform.roughness ;
            ORI_ShadingInput.Metallic =  maskTex.b * materialUniform.metallic ;

        #else
            ORI_ShadingInput.Roughness = materialUniform.roughness ;
            ORI_ShadingInput.Metallic = materialUniform.metallic ;
            ORI_ShadingInput.AmbientOcclusion =  materialUniform.ao ;
            #if USE_AOTEX
                var aoMap = textureSample(aomapMap, aoMapSampler, ORI_VertexVarying.fragUV0.xy );
                ORI_ShadingInput.AmbientOcclusion = mix(0.0,aoMap.r,materialUniform.ao) ;
            #endif
        #endif

        ORI_ShadingInput.Roughness = clamp(ORI_ShadingInput.Roughness,0.084,1.0);
        ORI_ShadingInput.Specular = 0.5 ;

        var emissiveColor = textureSample(emissiveMap, emissiveMapSampler , ORI_VertexVarying.fragUV0.xy) ;
        ORI_ShadingInput.EmissiveColor = vec4<f32>(materialUniform.emissiveColor.rgb * emissiveColor.rgb * materialUniform.emissiveIntensity,1.0);

        var Normal = textureSample(normalMap,normalMapSampler,ORI_VertexVarying.fragUV0).rgb ;
        // Normal.y = 1.0 - Normal.y ;
        // let normal = unPackNormal(Normal,1.0,materialUniform.normalScale) ;
        let normal = unPackNormal(Normal,materialUniform.normalScale) ;  
        ORI_ShadingInput.Normal = normal ;

        BxDFShading();
    }
`,vn=`
#include "ClusterDebug_frag" 

        fn debugPosition(){
            ORI_FragmentOutput.color = vec4<f32>(ORI_VertexVarying.vWorldPos.xyz,1.0);
        }

        fn debugNormal(){
            ORI_FragmentOutput.color = vec4<f32>(ORI_ShadingInput.Normal.xyz,1.0);
        }

        fn debugUV(){
            ORI_FragmentOutput.color = vec4<f32>(ORI_VertexVarying.fragUV0.xy,0.0,1.0);
        }

        fn debugColor(){
            ORI_FragmentOutput.color = vec4<f32>(fragData.Albedo.rgb,1.0);
        }

        fn debugDiffuse(){
            ORI_FragmentOutput.color = vec4<f32>(1.0/3.1415926 * fragData.Albedo.rgb,1.0);
            // ORI_FragmentOutput.color = vec4<f32>(0.2,0.2,0.2,1.0);
        }

        fn debugAmbient(){
            ORI_FragmentOutput.color = vec4<f32>(fragData.Irradiance * fragData.Albedo.rgb,1.0);
        }
        
        fn debugEmissive(){
            ORI_FragmentOutput.color = vec4<f32>(fragData.Emissive.rgb,1.0);
        }

        fn debugEnvment(){
            ORI_FragmentOutput.color = vec4<f32>(fragData.EnvColor.rgb,1.0);
        }

        fn debugAo(){
            ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(fragData.Ao),1.0);
        }

        fn debugRoughness(){
            ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(fragData.Roughness),1.0);
        }

        fn debugMetallic(){
            ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(fragData.Metallic),1.0);
        }

        fn debugIrradiance(){
            ORI_FragmentOutput.color = vec4<f32>(vec3<f32>(fragData.Irradiance),1.0);
        }

        fn debugFragmentOut(){
            if(ORI_VertexVarying.fragCoord.x > globalUniform.renderState_split) {
                switch (globalUniform.renderState_right)
                {
                  case 0: {
                    debugPosition();
                  }
                  case 1: {
                    debugColor();
                  }
                  case 2: {
                    debugNormal();
                  }
                  case 3: {
                    debugIrradiance();
                  }
                  case 4: {
                    debugDiffuse();
                  }
                  case 5: {
                    // debugAmbient();
                  }
                  case 6: {
                    debugEmissive();
                  }
                  case 7: {
                    debugEnvment();
                  }
                  case 8: {
                    debugAo();
                  }
                  case 9: {
                    debugRoughness();
                  }
                  case 10: {
                    debugMetallic();
                  }
                  case 11: {
                    debugDiffuse();
                  }
                  case 12: {
                    debugAmbient();
                  }
                  case 13: {
                    debugPosition();
                  }
                  case 14: {
                    #if DEBUG_CLUSTER
                      debugCluster( ORI_VertexVarying.fragCoord );
                    #endif
                  }
                  case 15: {
                    #if DEBUG_CLUSTER
                      debugClusterBox( ORI_VertexVarying.fragCoord );
                    #endif
                  }
                  case 16: {
                    #if DEBUG_CLUSTER
                      debugClusterLightCount( vec4<f32>(ORI_VertexVarying.fragCoord.xyz,0.0));
                      #endif
                  }
                  default: {
                  }
                }
              } else {
                switch (globalUniform.renderState_left)
                {
                  case 0: {
                    debugPosition();
                  }
                  case 1: {
                    debugColor();
                  }
                  case 2: {
                    debugNormal();
                  }
                  case 3: {
                    debugIrradiance();
                  }
                  case 4: {
                    debugDiffuse();
                  }
                  case 5: {
                    // debugAmbient();
                  }
                  case 6: {
                    debugEmissive();
                  }
                  case 7: {
                    debugEnvment();
                  }
                  case 8: {
                    debugAo();
                  }
                  case 9: {
                    debugRoughness();
                  }
                  case 10: {
                    debugMetallic();
                  }
                  case 11: {
                    debugDiffuse();
                  }
                  case 12: {
                    debugAmbient();
                  }
                  case 13: {
                    debugPosition();
                  }
                  case 14: {
                    // debugCluster( vec4<f32>(ORI_VertexVarying.fragCoord.xyz,0.0));
                  }
                  case 15: {
                    // debugClusterBox( vec4<f32>(ORI_VertexVarying.fragCoord.xyz,0.0));
                  }
                  case 16: {
                    // debugClusterLightCount( vec4<f32>(ORI_VertexVarying.fragCoord.xyz,0.0));
                  }
                  default: {
                  }
                }
              }
        }
`,_n=`
    #include "WorldMatrixUniform"
    #include "GlobalUniform"

    struct MaterialUniform {
    x:f32,
    y:f32,
    width:f32,
    height:f32,
    };

    struct VertexOutput {
        @location(0) fragUV: vec2<f32>,
        @builtin(position) position: vec4<f32>
    };

    @vertex
    fn main(@builtin(vertex_index) vertexIndex : u32, @builtin(instance_index) index : u32 ) -> VertexOutput {
        const pos = array(
        vec2(-1.0, -1.0), vec2(1.0, -1.0), vec2(-1.0, 1.0),
        vec2(-1.0, 1.0), vec2(1.0, -1.0), vec2(1.0, 1.0),
        );
        const uv = array(
        vec2(1.0, 0.0), vec2(1.0, 1.0), vec2(0.0, 1.0), 
        vec2(1.0, 0.0), vec2(0.0, 1.0), vec2(0.0, 0.0),
        );
        let id = u32(index) ;
        var output : VertexOutput;
        output.fragUV = uv[vertexIndex] ;
        output.position = vec4<f32>(pos[vertexIndex] , 0.0, 1.0) ;
        return output ;
    }
`,xn=`
#include "WorldMatrixUniform"
      #include "GlobalUniform"
   
      struct MaterialUniform {
        x:f32,
        y:f32,
        width:f32,
        height:f32,
      };

      struct VertexOutput {
          @location(0) fragUV: vec2<f32>,
          @builtin(position) member: vec4<f32>
      };

      @vertex
      fn main(@builtin(instance_index) index : u32,@location(0) position: vec3<f32>, @location(1) TEXCOORD_1: vec2<f32>) -> VertexOutput {
          let id = u32(index) ;
          let worldMatrix = models.matrix[id];

          let windowSize = vec2<f32>(globalUniform.windowWidth,globalUniform.windowHeight) ;

        //   let pos = worldMatrix[3].xy ;

          let size = vec2<f32>(worldMatrix[0].x,worldMatrix[1].y) / windowSize ;

          let uv = vec2(((TEXCOORD_1.xy * 2.0) - vec2<f32>(1.0)))  ;// / windowSize * size - offset ;

          return VertexOutput(TEXCOORD_1, vec4<f32>(uv, 0.0, 1.0));
      }
`,yn=`
    struct FragmentOutput {
        @location(0) o_Target: vec4<f32>
    };

    var<private> fragUV1: vec2<f32>;
    var<private> o_Target: vec4<f32>;
    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_2d<f32>;

    @fragment
    fn main(@location(0) fragUV: vec2<f32>) -> FragmentOutput {
        var uv = fragUV ;
        uv.y = 1.0 - uv.y ;
        var color: vec4<f32> = textureSample(baseMap, baseMapSampler, uv );

        return FragmentOutput(color);
    }
`,bn=`
    struct FragmentOutput {
        @location(0) o_Target: vec4<f32>
    }; 

    var<private> fragUV1: vec2<f32>;
    var<private> o_Target: vec4<f32>;

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_depth_2d ;

    fn Linear01Depth(  z : f32 ) -> f32
    {
        return 1.0 / (1.0 * z + 5000.0);
    }

    @fragment
    fn main(@location(0) fragUV: vec2<f32>) -> FragmentOutput {
        var uv = fragUV ;
        uv.y = 1.0 - uv.y ;
        var depth = textureSample(baseMap, baseMapSampler, uv , vec2<i32>(0) ) ;
        return FragmentOutput(vec4<f32>(depth,0.0,0.0,1.0));
    }
`,Sn=`
    struct FragmentOutput {
        @location(0) o_Target: vec4<f32>
    };

    var<private> fragUV1: vec2<f32>;
    var<private> o_Target: vec4<f32>;

    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_depth_cube ;

    fn uvToXYZ( face : i32 ,  uv : vec2<f32> ) -> vec3<f32>
    {
        var out : vec3<f32> ;
        if(face == 0){
            out = vec3<f32>( 1.0, uv.y, -uv.x);
        }else if(face == 1){
            out = vec3<f32>( -1.0, uv.y, uv.x);
        }else if(face == 2){
            out = vec3<f32>( uv.x, -1.0, uv.y);
        }else if(face == 3){
            out = vec3<f32>( uv.x,  1.0, -uv.y);
        }else if(face == 4){
            out = vec3<f32>( uv.x, uv.y, 1.0);
        }else{	
            out = vec3<f32>( -uv.x, uv.y, -1.0);
        }
        return out ;
    }

    @fragment
    fn main(@location(0) fragUV: vec2<f32>) -> FragmentOutput {
        var uv = fragUV ;
        uv.y = 1.0 - uv.y ;
        var ii = 0.16 ;
        var ouv = vec3<f32>(0.0);
        if(uv.x < ii * 6.0){
            ouv = uvToXYZ(5,uv/ii);
        }
        if(uv.x < ii * 5.0){
            ouv = uvToXYZ(4,uv/ii);
        }
        if(uv.x < ii * 4.0){
            ouv = uvToXYZ(3,uv/ii);
        } 
        if(uv.x < ii * 3.0){
            ouv = uvToXYZ(2,uv/ii);
        }
        if(uv.x < ii * 2.0){
            ouv = uvToXYZ(1,uv/ii);
        }
        if(uv.x < ii * 1.0){
            ouv = uvToXYZ(0,uv/ii);
        }
        var depth = textureSample(baseMap, baseMapSampler, ouv ) ;
        depth = 1.0 - depth; 

        return FragmentOutput(vec4<f32>(depth,0.0,0.0,1.0));
    }
`,da=`
    fn getHDRColor(color: vec3<f32>, exposure: f32) -> vec3 < f32 > {
        // var newColor = color * (  1.0 / 255.0 ) ;
        return color * pow(2.4, exposure) ;
    }

    fn lambda2rgb(lambda : f32) -> vec3 < f32 > {
        let ultraviolet = 400.0;
        let infrared = 700.0;

        var a = (lambda - ultraviolet) / (infrared - ultraviolet);
        let c = 10.0;
        var b = vec3<f32>(a) - vec3<f32>(0.75, 0.5, 0.25);
        return max((1.0 - c * b * b), vec3<f32>(0.0));
    }

    fn CEToneMapping(color: vec3<f32>, adapted_lum: f32) -> vec3<f32>
    {
        return 1.0 - exp(-adapted_lum * color);
    }

    fn ACESToneMapping(color: vec3<f32>, adapted_lum: f32) -> vec3<f32>
    {
        let A = 2.51;
        let B = 0.03;
        let C = 2.43;
        let D = 0.59;
        let E = 0.14;

        var color2 = color * adapted_lum;
        color2 = (color2 * (A * color2 + B)) / (color2 * (C * color2 + D) + E);
        return color2;
    }

    fn gammaToLiner(color: vec4<f32>) -> vec4 < f32 > {
        let gammaCorrect = 2.4;
        var color2 = pow(color, vec4<f32>(gammaCorrect));
        return color2 ;
    }

    fn linerToGamma4(color: vec4<f32>) -> vec4 < f32 > {
        let gammaCorrect = 1.0 / 2.4;
        var color2 = pow(color, vec4<f32>(gammaCorrect));
        return color2 ;
    }

    fn linerToGamma3(color: vec3<f32>) -> vec3 < f32 > {
        let gammaCorrect = 1.0 / 2.4;
        var color2 = pow(color, vec3<f32>(gammaCorrect));
        return color2 ;
    }

    fn LinearToGammaSpace(linRGB0: vec3<f32>) -> vec3 < f32 > {
        var linRGB = max(linRGB0, vec3(0.0, 0.0, 0.0));
        linRGB.r = pow(linRGB.r, 0.416666667);
        linRGB.g = pow(linRGB.g, 0.416666667);
        linRGB.b = pow(linRGB.b, 0.416666667);
        return max(1.055 * linRGB - 0.055, vec3(0.0, 0.0, 0.0));
    }

    var<private>sRGB_2_LMS_MAT: mat3x3<f32> = mat3x3<f32>(
        17.8824, 43.5161, 4.1193,
        3.4557, 27.1554, 3.8671,
        0.02996, 0.18431, 1.4670,
    );

    var<private>LMS_2_sRGB_MAT: mat3x3<f32> = mat3x3<f32>(
        0.0809, -0.1305, 0.1167,
        -0.0102, 0.0540, -0.1136,
        -0.0003, -0.0041, 0.6935,
    );

    fn sRGB_2_LMS(RGB: vec3<f32>) -> vec3<f32>
    {
        return sRGB_2_LMS_MAT * RGB;
    }

    fn LMS_2_sRGB(LMS: vec3<f32>) -> vec3<f32>
    {
        return LMS_2_sRGB_MAT * LMS;
    }

    fn LinearToSrgbBranchless(lin: vec3<f32>) -> vec3<f32>
    {
        var lin2 = max(vec3<f32>(6.10352e-5), lin);
        return min(lin2 * 12.92, pow(max(lin2, vec3<f32>(0.00313067)), vec3<f32>(1.0 / 2.4)) * vec3<f32>(1.055) - vec3<f32>(0.055));
    }

    fn sRGBToLinear(color : vec3<f32>) -> vec3<f32>
    {
        let color2 = max(vec3<f32>(6.10352e-5), color);
        let c = 0.04045;
        if (color2.r > c && color2.g > c && color2.b > c) {
            return pow(color2 * (1.0 / 1.055) + 0.0521327, vec3<f32>(2.4));
        } else {
            return color2 * (1.0 / 12.92);
        }
    }
`,wn=`
    fn madfrac(A:f32, B:f32)-> f32 {
        return A*B-floor(A*B) ;
    }

    fn sampleRandomDir(count:u32,SAMPLE_COUNT:u32) -> vec3<f32>{
    var ray_dir = sphericalFibonacci(f32((count)), f32(SAMPLE_COUNT) );
    return normalize(ray_dir) ;
    }

    fn sphericalFibonacci( i : f32 ,  n : f32 ) -> vec3<f32>{
        const PHI = sqrt(5.0) * 0.5 + 0.5;
        let phi = 2.0 * PI * madfrac(i, PHI - 1);
        let cosTheta = 1.0 - (2.0 * i + 1.0) * (1.0 / n);
        let sinTheta = sqrt(saturate(1.0 - cosTheta*cosTheta));

        return vec3<f32>(
            cos(phi) * sinTheta,
            sin(phi) * sinTheta,
            cosTheta);

    }
`;class D{static init(){D.register("MathShader",Ys),D.register("FastMathShader",sn),D.register("GlobalUniform",Fa),D.register("WorldMatrixUniform",Ga),D.register("NormalMap_frag",nn),D.register("LightingFunction_frag",Xs),D.register("PhysicMaterialUniform_frag",Ws),D.register("UnLitMaterialUniform_frag",Ks),D.register("VideoUniform_frag",Zs),D.register("InstanceUniform",an),D.register("Inline_vert",Js),D.register("VertexAttributes_vert",qs),D.register("Common_vert",en),D.register("Common_frag",$s),D.register("FragmentVarying",on),D.register("ColorPassFragmentOutput",Va),D.register("LightStruct",Hs),D.register("ShadingInput",hn),D.register("IESProfiles_frag",ln),D.register("ShadowMapping_frag",un),D.register("Irradiance_frag",cn),D.register("IrradianceVolumeData_frag",Qs),D.register("BrdfLut_frag",tn),D.register("EnvMap_frag",rn),D.register("ColorUtil_frag",da),D.register("ColorUtil",da),D.register("BRDF_frag",dn),D.register("BxDF_frag",fn),D.register("UnLit_frag",js),D.register("Clearcoat_frag",pn),D.register("LitShader",mn),D.register("PBRLItShader",gn),D.register("ClusterDebug_frag",Vs),D.register("BxdfDebug_frag",vn),D.register("GenerayRandomDir",wn),D.register("Quad_vert_wgsl",xn),D.register("Quad_frag_wgsl",yn),D.register("Quad_depth2d_frag_wgsl",bn),D.register("Quad_depthCube_frag_wgsl",Sn),D.register("sky_vs_frag_wgsl",Zr.sky_vs_frag_wgsl),D.register("sky_fs_frag_wgsl",Zr.sky_fs_frag_wgsl),D.register("Bloom_Brightness_frag_wgsl",jt.Bloom_Brightness_frag_wgsl),D.register("Bloom_blur_frag_wgsl",jt.Bloom_blur_frag_wgsl),D.register("Bloom_composite_frag_wgsl",jt.Bloom_composite_frag_wgsl)}static register(e,t){D[e.toLowerCase()]||(D[e.toLowerCase()]=t)}static getShader(e){return D[e.toLowerCase()],D[e.toLowerCase()]}}const ie=class{constructor(r=0,e=0){s(this,"x",0),s(this,"y",0),this.x=r,this.y=e}static getAngle(r,e){return Math.atan2(e.y-r.y,e.x-r.x)}static slerp(r,e,t){let i=new ie,a=r.dot(e);var n,o,h;return a<0&&(e.x=-e.x,e.y=-e.y,a=-a),.9995<a?(i.x=r.x+t*(e.x-r.x),i.y=r.y+t*(e.y-r.y)):(n=Math.acos(a),o=Math.sin(n),h=Math.sin((1-t)*n)/o,t=Math.sin(t*n)/o,i.x=h*r.x+t*e.x,i.y=h*r.y+t*e.y),i}static lerp(r,e,t){return ie.HELP_0.copyFrom(r),ie.HELP_1.copyFrom(e),ie.HELP_0.scale(t),ie.HELP_1.scale(1-t),new ie(ie.HELP_0.x+ie.HELP_1.x,ie.HELP_0.y+ie.HELP_1.y)}set(r=0,e=0){return this.x=r,this.y=e,this}distance(r){return Math.sqrt(Math.pow(this.x-r.x,2)+Math.pow(this.y-r.y,2))}add(r,e){return(e=e||new ie).x=this.x+r.x,e.y=this.y+r.y,e}sub(r,e){return(e=e||new ie).x=this.x-r.x,e.y=this.y-r.y,e}scale(r){return this.x=this.x*r,this.y=this.y*r,this}multiply(r,e){return(e=e||new ie).x=this.x*r,e.y=this.y*r,e}multiplyScaler(r){return this.x*=r,this.y*=r,this}divide(r,e){return(e=e||new ie).x=this.x/r,e.y=this.y/r,e}neg(r){return(r=r||new ie).x=-r.x,r.y=-r.y,r}abs(){return Math.sqrt(this.x*this.x+this.y*this.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}getAngle(r){return Math.atan2(r.y-this.y,r.x-this.x)}unt(r){r=r||new ie;var e=this.abs();return r.x=this.x/e,r.y=this.y/e,r}angleTo(t){var e=t.x-this.x,t=t.y-this.y;return Math.atan2(t,e)}equals(r){return Math.abs(this.x-r.x)<1e-6&&Math.abs(this.y-r.y)<1e-6}pal(t){var e=this.unt(),t=t.unt();return e.equals(t)?1:e.equals(t.neg())?-1:0}clone(){return new ie(this.x,this.y)}copyFrom(r){return this.x=r.x,this.y=r.y,this}dot(r){return this.x*r.x+this.y*r.y}normalize(){var r=this.abs();return this.x=this.x/r,this.y=this.y/r,this}addInPlace(r){return this.x+=r.x,this.y+=r.y,this}addScalar(r){return this.x+=r,this.y+=r,this}clampScalar(r,e){return this.x=Math.max(r,Math.min(e,this.x)),this.y=Math.max(r,Math.min(e,this.y)),this}};let Q=ie;s(Q,"HELP_0",new ie),s(Q,"HELP_1",new ie),s(Q,"ZERO",new ie(0,0)),s(Q,"SAFE_MAX",new ie(Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER)),s(Q,"SAFE_MIN",new ie(Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER));const ne=class{constructor(r=0,e=0,t=0,i=0){s(this,"x",0),s(this,"y",0),s(this,"z",0),s(this,"w",1),this.x=r,this.y=e,this.z=t,this.w=i}get width(){return this.z}get height(){return this.w}static crossVectors(n,l,t){t=t||new ne;var i=n.x,a=n.y,n=n.z,o=l.x,h=l.y,l=l.z;return t.x=a*l-n*h,t.y=n*o-i*l,t.z=i*h-a*o,t}static distance(n,e){var t=n.x-e.x,i=n.y-e.y,a=n.z-e.z,n=n.w-e.w;return Math.sqrt(t*t+i*i+a*a+n*n)}set(r,e,t,i){return this.x=r,this.y=e,this.z=t,this.w=i,this}multiplyScalar(r){return this.x*=r,this.y*=r,this.z*=r,this.w*=r,this}copyFrom(r){return this.x=r.x,this.y=r.y,this.z=r.z,this.w=r.w,this}clone(){return new ne(this.x,this.y,this.z,this.w)}};let G=ne;s(G,"X_AXIS",new ne(1,0,0)),s(G,"Y_AXIS",new ne(0,1,0)),s(G,"Z_AXIS",new ne(0,0,1)),s(G,"HELP_0",new ne),s(G,"HELP_1",new ne),s(G,"HELP_2",new ne),s(G,"EPSILON",1e-5),s(G,"HELP_3",new ne),s(G,"HELP_4",new ne),s(G,"HELP_5",new ne),s(G,"HELP_6",new ne),s(G,"ZERO",new ne),s(G,"ONE",new ne(1,1,1,1)),s(G,"LEFT",new ne(-1,0,0)),s(G,"RIGHT",new ne(1,0,0)),s(G,"UP",new ne(0,-1,0)),s(G,"DOWN",new ne(0,1,0)),s(G,"BACK",new ne(0,0,-1)),s(G,"FORWARD",new ne(0,0,1));var Te=(r=>(r[r.Number=0]="Number",r[r.Vector2=1]="Vector2",r[r.Vector3=2]="Vector3",r[r.Vector4=3]="Vector4",r[r.Color=4]="Color",r[r.Float32Array=5]="Float32Array",r))(Te||{});class ht{constructor(e){s(this,"size"),s(this,"memoryInfo"),s(this,"bindOnChange"),s(this,"_data"),s(this,"_type",Te.Number),this.data=e}get data(){return this._data}set data(e){this._data=e,this._type=Te.Number,e instanceof Q?(this.size=2,this._type=Te.Vector2):e instanceof d?(this.size=3,this._type=Te.Vector3):e instanceof G?(this.size=4,this._type=Te.Vector4):e instanceof x?(this.size=4,this._type=Te.Color):e instanceof Float32Array?(this.size=e.length,this._type=Te.Float32Array):(this.size=1,this._type=Te.Number)}get color(){return new x(this._data.r,this._data.g,this._data.b,this._data.a)}set color(e){this._data.r==e.r&&this._data.g==e.g&&this._data.b==e.b&&this._data.a==e.a||(this._data.r=e.r,this._data.g=e.g,this._data.b=e.b,this._data.a=e.a,this.onChange())}get value(){return this._data}set value(e){this._data!=e&&(this._data=e,this.onChange())}get vector2(){return new Q(this._data.x,this._data.y)}set vector2(e){this._data.x==e.x&&this._data.y==e.y||(this._data.x=e.x,this._data.y=e.y,this.onChange())}get vector3(){return new d(this._data.x,this._data.y,this._data.z)}set vector3(e){this._data.x==e.x&&this._data.y==e.y&&this._data.z==e.z||(this._data.x=e.x,this._data.y=e.y,this._data.z=e.z,this.onChange())}get vector4(){return new G(this._data.x,this._data.y,this._data.z,this._data.w)}set vector4(e){this._data.x==e.x&&this._data.y==e.y&&this._data.z==e.z&&this._data.w==e.w||(this._data.x=e.x,this._data.y=e.y,this._data.z=e.z,this._data.w=e.w,this.onChange())}onChange(){this.bindOnChange&&this.bindOnChange()}float32Array(e){this._data.set(e),this.onChange()}update(){switch(this._type){case Te.Number:this.memoryInfo.dataBytes.setFloat32(0*Float32Array.BYTES_PER_ELEMENT,this._data,!0);break;case Te.Vector2:this.memoryInfo.setVector2(0,this._data);break;case Te.Vector3:this.memoryInfo.setVector3(0,this._data);break;case Te.Vector4:this.memoryInfo.setVector4(0,this._data);break;case Te.Color:this.memoryInfo.setColor(0,this._data);break;case Te.Float32Array:this.memoryInfo.setFloat32Array(0,this._data)}}}let it={clamp_to_edge:"clamp-to-edge",repeat:"repeat",mirror_repeat:"mirror-repeat"},dt={never:"never",less:"less",equal:"equal",less_equal:"less-equal",greater:"greater",not_equal:"not-equal",greater_equal:"greater-equal",always:"always"},ct={none:"none",front:"front",back:"back"},Qr={nearest:"nearest",linear:"linear"},Gi={point_list:"point-list",line_list:"line-list",line_strip:"line-strip",triangle_list:"triangle-list",triangle_strip:"triangle-strip"},F={r8unorm:"r8unorm",r8snorm:"r8snorm",r8uint:"r8uint",r8sint:"r8sint",r16uint:"r16uint",r16sint:"r16sint",r16float:"r16float",rg8unorm:"rg8unorm",rg8snorm:"rg8snorm",rg8uint:"rg8uint",rg8sint:"rg8sint",r32uint:"r32uint",r32sint:"r32sint",r32float:"r32float",rg16uint:"rg16uint",rg16sint:"rg16sint",rg16float:"rg16float",rgba8unorm:"rgba8unorm",rgba8unorm_srgb:"rgba8unorm-srgb",rgba8snorm:"rgba8snorm",rgba8uint:"rgba8uint",rgba8sint:"rgba8sint",bgra8unorm:"bgra8unorm",bgra8unorm_srgb:"bgra8unorm-srgb",rgb9e5ufloat:"rgb9e5ufloat",rgb10a2unorm:"rgb10a2unorm",rg11b10ufloat:"rg11b10ufloat",rg32uint:"rg32uint",rg32sint:"rg32sint",rg32float:"rg32float",rgba16uint:"rgba16uint",rgba16sint:"rgba16sint",rgba16float:"rgba16float",rgba32uint:"rgba32uint",rgba32sint:"rgba32sint",rgba32float:"rgba32float",stencil8:"stencil8",depth16unorm:"depth16unorm",depth24plus:"depth24plus",depth24plus_stencil8:"depth24plus-stencil8",depth32float:"depth32float",bc1_rgba_unorm:"bc1-rgba-unorm",bc1_rgba_unorm_srgb:"bc1-rgba-unorm-srgb",bc2_rgba_unorm:"bc2-rgba-unorm",bc2_rgba_unorm_srgb:"bc2-rgba-unorm-srgb",bc3_rgba_unorm:"bc3-rgba-unorm",bc3_rgba_unorm_srgb:"bc3-rgba-unorm-srgb",bc4_r_unorm:"bc4-r-unorm",bc4_r_snorm:"bc4-r-snorm",bc5_rg_unorm:"bc5-rg-unorm",bc5_rg_snorm:"bc5-rg-snorm",bc6h_rgb_ufloat:"bc6h-rgb-ufloat",bc6h_rgb_float:"bc6h-rgb-float",bc7_rgba_unorm:"bc7-rgba-unorm",bc7_rgba_unorm_srgb:"bc7-rgba-unorm-srgb",depth24unorm_stencil8:"depth24unorm-stencil8",depth32float_stencil8:"depth32float-stencil8"},Or={uint8x2:"uint8x2",uint8x4:"uint8x4",sint8x2:"sint8x2",sint8x4:"sint8x4",unorm8x2:"unorm8x2",unorm8x4:"unorm8x4",snorm8x2:"snorm8x2",snorm8x4:"snorm8x4",uint16x2:"uint16x2",uint16x4:"uint16x4",sint16x2:"sint16x2",sint16x4:"sint16x4",unorm16x2:"unorm16x2",unorm16x4:"unorm16x4",snorm16x2:"snorm16x2",snorm16x4:"snorm16x4",float16x2:"float16x2",float16x4:"float16x4",float32:"float32",float32x2:"float32x2",float32x3:"float32x3",float32x4:"float32x4",uint32:"uint32",uint32x2:"uint32x2",uint32x3:"uint32x3",uint32x4:"uint32x4",sint32:"sint32",sint32x2:"sint32x2",sint32x3:"sint32x3",sint32x4:"sint32x4"};class fe{}s(fe,"colorBufferTex_NAME","colorBufferTex"),s(fe,"positionBufferTex_NAME","positionBufferTex"),s(fe,"normalBufferTex_NAME","normalBufferTex"),s(fe,"materialBufferTex_NAME","materialBufferTex"),s(fe,"zBufferTexture_NAME","zBufferTexture"),s(fe,"zPreDepthTexture_NAME","zPreDepthTexture"),s(fe,"outTex_NAME","outTex");let Tn=`
    #include "WorldMatrixUniform"
    #include "GlobalUniform"

    struct VertexOutput {
        @location(0) fragUV: vec2<f32>,
            @builtin(position) member: vec4<f32>
    };

    @vertex
    fn main(@builtin(instance_index) index : u32, @location(0) position: vec3<f32>, @location(1) TEXCOORD_1: vec2<f32>) -> VertexOutput {
        let id = u32(index);
        let worldMatrix = models.matrix[id];

        let screenPos = vec2(((TEXCOORD_1 * 2.0) - vec2<f32>(1.0))) * 0.5 ; 
        return VertexOutput(TEXCOORD_1, vec4<f32>(screenPos, 0.0, 1.0));
    }
`,Cn=`
#version 450

layout(location = 0) in vec2 fragUV;

layout(location = 0) out vec4 o_Target;

layout(set = 0, binding = 0) uniform ConstUniform {
    mat4 projMat;
    mat4 viewMat;
    mat4 shadowMatrix;
    mat4 cameraWorldMatrix;
    mat4 pvMatrixInv;
    float frame;
    float time;
    float detail;
    float shadowBias;
    float skyExposure;
    float renderPassState;
    float quadScale;

};

layout(set = 2, binding = 0) uniform sampler baseMapSampler;
layout(set = 2, binding = 1) uniform texture2D baseMap;
layout(set = 3, binding = 0) uniform MaterialDataUniform {
    vec4 color;
};

void main() {
        vec2 uv = fragUV.xy;
    uv.y = 1.0 - uv.y;
        vec4 colorTexture = texture(sampler2D(baseMap, baseMapSampler), uv * quadScale) * color;
    o_Target = vec4(colorTexture.rgb, colorTexture.a);

    if (o_Target.r <= 0.5 && o_Target.g <= 0.5 && o_Target.b <= 0.5) {
        discard;
    }
    // float gamma     = 2.2;
    // float exposure  = 1.0;
    // float pureWhite = 1.0;

    // float luminance = dot(colorTexture.rgb, vec3(0.2126, 0.7152, 0.0722));
    // float mappedLuminance = (luminance * (1.0 + luminance/(pureWhite*pureWhite))) / (1.0 + luminance);

    // // Scale color by ratio of average luminances.
    // vec3 mappedColor = (mappedLuminance / luminance) * colorTexture.rgb;

    // // Gamma correction.
    // o_Target = vec4(pow(o_Target.rgb, vec3(1.0/gamma)), 1.0);
};
`;var Se=(r=>(r[r.Default=1]="Default",r[r.IgnoreDepthPass=2]="IgnoreDepthPass",r[r.Sky=6]="Sky",r[r.Particle=10]="Particle",r[r.SkinnedMesh=16]="SkinnedMesh",r[r.MorphTarget=32]="MorphTarget",r[r.Terrain=64]="Terrain",r[r.UI=128]="UI",r))(Se||{});class lt{static addMask(e,t){return e|t}static removeMask(e,t){return e&~t}static hasMask(e,t){return(e&t)==t}}const pr=class{constructor(){s(this,"__refection"),s(this,"__size",0)}getValueType(){if(!this.__refection){var r;this.__refection=[];for(const e in this)e.includes("__")||(r=this[e],r={name:e,type:r.constructor.name},this.__refection.push(r))}return this.__refection}static getValueSize(r){switch(r.constructor.name){case"Boolean":case"Number":case"f32":case"i32":case"u32":return 4;case"Float32Array":return 4*r.byteLength;case"Vector2":return 8;case"Vector3":case"Vector4":case"Color":return 16;case"Array":let e=0;for(let t=0,i=r.length;t<i;t++)e+=pr.getValueSize(r[t]);return e}return 0}static Ref(r){return this.Get(r).getValueType()}static Get(r){let e=pr.__cacheStruct.get(r.prototype);return e||(e=new r,pr.__cacheStruct.set(r.prototype,e)),e}static GetSize(r){var e,t=this.Get(r);if(t.__size==0){for(const i in t)i.indexOf("__")==-1&&(e=t[i],t.__size+=pr.getValueSize(e));4<t.__size&&(t.__size=4*Math.ceil(t.__size/4))}return t.__size}};let Cr=pr;s(Cr,"__cacheStruct",new Map);class Mn{constructor(){s(this,"byteOffset"),s(this,"byteSize"),s(this,"offset",0),s(this,"dataBytes")}get x(){return this.dataBytes.getFloat32(0*Float32Array.BYTES_PER_ELEMENT,!0)}set x(e){this.dataBytes.setFloat32(0*Float32Array.BYTES_PER_ELEMENT,e,!0)}get y(){return this.dataBytes.getFloat32(+Float32Array.BYTES_PER_ELEMENT,!0)}set y(e){this.dataBytes.setFloat32(+Float32Array.BYTES_PER_ELEMENT,e,!0)}get z(){return this.dataBytes.getFloat32(2*Float32Array.BYTES_PER_ELEMENT,!0)}set z(e){this.dataBytes.setFloat32(2*Float32Array.BYTES_PER_ELEMENT,e,!0)}get w(){return this.dataBytes.getFloat32(3*Float32Array.BYTES_PER_ELEMENT,!0)}set w(e){this.dataBytes.setFloat32(3*Float32Array.BYTES_PER_ELEMENT,e,!0)}setX(e){this.x=e}setXY(e,t){this.x=e,this.y=t}setXYZ(e,t,i){this.x=e,this.y=t,this.z=i}setXYZW(e,t,i,a){this.x=e,this.y=t,this.z=i,this.w=a}setVector2Array(e){for(let i=0;i<e.length;i++){var t=e[i];this.dataBytes.setFloat32((2*i+0)*Float32Array.BYTES_PER_ELEMENT,t.x,!0),this.dataBytes.setFloat32((2*i+1)*Float32Array.BYTES_PER_ELEMENT,t.y,!0)}}setVector3Array(e){for(let i=0;i<e.length;i++){var t=e[i];this.dataBytes.setFloat32((3*i+0)*Float32Array.BYTES_PER_ELEMENT,t.x,!0),this.dataBytes.setFloat32((3*i+1)*Float32Array.BYTES_PER_ELEMENT,t.y,!0),this.dataBytes.setFloat32((3*i+2)*Float32Array.BYTES_PER_ELEMENT,t.z,!0)}}setVector4Array(e){for(let i=0;i<e.length;i++){var t=e[i];this.dataBytes.setFloat32((4*i+0)*Float32Array.BYTES_PER_ELEMENT,t.x,!0),this.dataBytes.setFloat32((4*i+1)*Float32Array.BYTES_PER_ELEMENT,t.y,!0),this.dataBytes.setFloat32((4*i+2)*Float32Array.BYTES_PER_ELEMENT,t.z,!0),this.dataBytes.setFloat32((4*i+3)*Float32Array.BYTES_PER_ELEMENT,t.w,!0)}}setColorArray(e){for(let i=0;i<e.length;i++){var t=e[i];this.dataBytes.setFloat32((4*i+0)*Float32Array.BYTES_PER_ELEMENT,t.r,!0),this.dataBytes.setFloat32((4*i+1)*Float32Array.BYTES_PER_ELEMENT,t.g,!0),this.dataBytes.setFloat32((4*i+2)*Float32Array.BYTES_PER_ELEMENT,t.b,!0),this.dataBytes.setFloat32((4*i+3)*Float32Array.BYTES_PER_ELEMENT,t.a,!0)}}setInt8(e,t=0){this.dataBytes.setInt8(t*Int8Array.BYTES_PER_ELEMENT,e)}getInt8(e=0){return this.dataBytes.getInt8(e*Int8Array.BYTES_PER_ELEMENT)}setInt16(e,t=0){this.dataBytes.setInt16(t*Int16Array.BYTES_PER_ELEMENT,e,!0)}getInt16(e=0){return this.dataBytes.getInt16(e*Int16Array.BYTES_PER_ELEMENT,!0)}setInt32(e,t=0){this.dataBytes.setInt32(t*Int32Array.BYTES_PER_ELEMENT,e,!0)}getInt32(e=0){return this.dataBytes.getInt32(e*Int32Array.BYTES_PER_ELEMENT,!0)}setFloat(e,t=0){this.dataBytes.setFloat32(t*Float32Array.BYTES_PER_ELEMENT,e,!0)}getFloat(e=0){return this.dataBytes.getFloat32(e*Float32Array.BYTES_PER_ELEMENT,!0)}setUint8(e,t=0){this.dataBytes.setUint8(t*Uint8Array.BYTES_PER_ELEMENT,e)}getUint8(e=0){return this.dataBytes.getUint8(e*Uint8Array.BYTES_PER_ELEMENT)}setUint16(e,t=0){this.dataBytes.setUint16(t*Uint16Array.BYTES_PER_ELEMENT,e,!0)}getUint16(e=0){return this.dataBytes.getUint16(e*Uint16Array.BYTES_PER_ELEMENT,!0)}setUint32(e,t=0){this.dataBytes.setUint32(t*Uint32Array.BYTES_PER_ELEMENT,e,!0)}getUint32(e=0){return this.dataBytes.getUint32(e*Uint32Array.BYTES_PER_ELEMENT,!0)}setArray(e,t){for(let a=0;a<t.length;a++){var i=t[a];this.dataBytes.setFloat32((e+a)*Float32Array.BYTES_PER_ELEMENT,i,!0)}}setFloat32Array(e,t){new Float32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+e*Float32Array.BYTES_PER_ELEMENT).set(t)}setArrayBuffer(e,t){t instanceof Uint8Array?this.setUint8Array(e,t):t instanceof Uint16Array?this.setUint16Array(e,t):t instanceof Uint32Array?this.setUint32Array(e,t):t instanceof Int8Array?this.setInt8Array(e,t):t instanceof Int16Array?this.setInt16Array(e,t):t instanceof Int32Array?this.setInt32Array(e,t):t instanceof Float32Array&&this.setFloat32Array(e,t)}setInt8Array(e,t){new Int8Array(this.dataBytes.buffer,this.dataBytes.byteOffset+e*Int8Array.BYTES_PER_ELEMENT).set(t)}setInt16Array(e,t){new Int16Array(this.dataBytes.buffer,this.dataBytes.byteOffset+e*Int16Array.BYTES_PER_ELEMENT).set(t)}setInt32Array(e,t){new Int32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+e*Int32Array.BYTES_PER_ELEMENT).set(t)}setUint8Array(e,t){new Uint8Array(this.dataBytes.buffer,this.dataBytes.byteOffset+e*Uint8Array.BYTES_PER_ELEMENT).set(t)}setUint16Array(e,t){new Uint16Array(this.dataBytes.buffer,this.dataBytes.byteOffset+e*Uint16Array.BYTES_PER_ELEMENT).set(t)}setUint32Array(e,t){new Uint32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+e*Uint32Array.BYTES_PER_ELEMENT).set(t)}setData(e,t){this.dataBytes.setFloat32(e*Float32Array.BYTES_PER_ELEMENT,t,!0)}setVector2(e,t){this.dataBytes.setFloat32(e*Float32Array.BYTES_PER_ELEMENT,t.x,!0),this.dataBytes.setFloat32((e+1)*Float32Array.BYTES_PER_ELEMENT,t.y,!0)}setVector3(e,t){this.dataBytes.setFloat32(e*Float32Array.BYTES_PER_ELEMENT,t.x,!0),this.dataBytes.setFloat32((e+1)*Float32Array.BYTES_PER_ELEMENT,t.y,!0),this.dataBytes.setFloat32((e+2)*Float32Array.BYTES_PER_ELEMENT,t.z,!0)}setVector4(e,t){this.dataBytes.setFloat32(e*Float32Array.BYTES_PER_ELEMENT,t.x,!0),this.dataBytes.setFloat32((e+1)*Float32Array.BYTES_PER_ELEMENT,t.y,!0),this.dataBytes.setFloat32((e+2)*Float32Array.BYTES_PER_ELEMENT,t.z,!0),this.dataBytes.setFloat32((e+3)*Float32Array.BYTES_PER_ELEMENT,t.w,!0)}setColor(e,t){this.dataBytes.setFloat32(e*Float32Array.BYTES_PER_ELEMENT,t.r,!0),this.dataBytes.setFloat32((e+1)*Float32Array.BYTES_PER_ELEMENT,t.g,!0),this.dataBytes.setFloat32((e+2)*Float32Array.BYTES_PER_ELEMENT,t.b,!0),this.dataBytes.setFloat32((e+3)*Float32Array.BYTES_PER_ELEMENT,t.a,!0)}getData(e){return this.dataBytes.getFloat32(e*Float32Array.BYTES_PER_ELEMENT,!0)}writeFloat(e){this.dataBytes.setFloat32(this.offset,e,!0),this.offset+=Float32Array.BYTES_PER_ELEMENT}writeInt8(e){this.dataBytes.setInt8(this.offset,e),this.offset+=Int8Array.BYTES_PER_ELEMENT}writeInt16(e){this.dataBytes.setInt16(this.offset,e,!0),this.offset+=Int16Array.BYTES_PER_ELEMENT}writeInt32(e){this.dataBytes.setInt32(this.offset,e,!0),this.offset+=Int32Array.BYTES_PER_ELEMENT}writeUint8(e){this.dataBytes.setUint8(this.offset,e),this.offset+=Uint8Array.BYTES_PER_ELEMENT}writeUint16(e){this.dataBytes.setUint16(this.offset,e,!0),this.offset+=Uint16Array.BYTES_PER_ELEMENT}writeUint32(e){this.dataBytes.setUint32(this.offset,e,!0),this.offset+=Uint32Array.BYTES_PER_ELEMENT}writeVector2(e){this.writeFloat(e.x),this.writeFloat(e.y)}writeVector3(e){this.writeFloat(e.x),this.writeFloat(e.y),this.writeFloat(e.z)}writeVector4(e){this.writeFloat(e.x),this.writeFloat(e.y),this.writeFloat(e.z),this.writeFloat(e.w)}writeRGBColor(e){this.writeFloat(e.r),this.writeFloat(e.g),this.writeFloat(e.b)}writeArray(e){for(let i=0;i<e.length;i++){var t=e[i];this.writeFloat(t)}}writeFloat32Array(e){new Float32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(e),this.offset+=e.byteLength}writeInt8Array(e){new Int8Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(e),this.offset+=e.byteLength}writeInt16Array(e){new Int16Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(e),this.offset+=e.byteLength}writeInt32Array(e){new Int32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(e),this.offset+=e.byteLength}writeUint8Array(e){new Uint8Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(e),this.offset+=e.byteLength}writeUint16Array(e){new Uint16Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(e),this.offset+=e.byteLength}writeUint32Array(e){new Uint32Array(this.dataBytes.buffer,this.dataBytes.byteOffset+this.offset).set(e),this.offset+=e.byteLength}reset(){this.offset=0}destroy(){this.byteOffset=null,this.byteSize=null,this.offset=null,this.dataBytes=null}}class Ha{constructor(){s(this,"shareDataBuffer"),s(this,"_byteOffset",0)}allocation(e){this.shareDataBuffer&&this.shareDataBuffer.byteLength<e?this._byteOffset=0:this.shareDataBuffer=new ArrayBuffer(e)}allocation_node(e){var t;return this._byteOffset+e>this.shareDataBuffer.byteLength?(console.error("memory not enough!",this._byteOffset,e,this.shareDataBuffer.byteLength),null):((t=new Mn).byteOffset=this._byteOffset,t.byteSize=e,t.dataBytes=new DataView(this.shareDataBuffer,this._byteOffset,t.byteSize),this._byteOffset+=t.byteSize,t)}allocation_memory(e){return this._byteOffset+e.byteSize>this.shareDataBuffer.byteLength?(console.error("memory not enough!",this._byteOffset,e.byteSize,this.shareDataBuffer.byteLength),null):(e.byteOffset=this._byteOffset,e.dataBytes=new DataView(this.shareDataBuffer,this._byteOffset,e.byteSize),this._byteOffset+=e.byteSize,e)}reset(){this._byteOffset=0}destroy(e){this.shareDataBuffer=null,this._byteOffset=0}}class or{constructor(){s(this,"bufferType"),s(this,"buffer"),s(this,"memory"),s(this,"memoryNodes"),s(this,"seek"),s(this,"outFloat32Array"),s(this,"byteSize"),s(this,"usage"),s(this,"visibility",GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE),s(this,"_readBuffer"),s(this,"_readFlag",!1),this.memory=new Ha,this.memoryNodes=new Map}debug(){}reset(e=!1,t=0,i){this.seek=0,this.memory.reset(),e&&this.createBuffer(this.usage,t,i)}setBoolean(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(4),this.memoryNodes.set(e,i)),i.setX(t?1:0)}setFloat(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(4),this.memoryNodes.set(e,i)),i.setX(t)}setInt8(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(1),this.memoryNodes.set(e,i)),i.setInt8(t)}setInt16(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(2),this.memoryNodes.set(e,i)),i.setInt16(t)}setInt32(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(4),this.memoryNodes.set(e,i)),i.setInt32(t)}setUint8(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(1),this.memoryNodes.set(e,i)),i.setUint8(t)}setUint16(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(2),this.memoryNodes.set(e,i)),i.setUint16(t)}setUint32(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(4),this.memoryNodes.set(e,i)),i.setUint32(t)}setVector2(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(8),this.memoryNodes.set(e,i)),i.setXY(t.x,t.y)}setVector3(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(12),this.memoryNodes.set(e,i)),i.setXYZ(t.x,t.y,t.z)}setVector4(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(16),this.memoryNodes.set(e,i)),i.setXYZW(t.x,t.y,t.z,t.w)}setVector4Array(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(16*t.length),this.memoryNodes.set(e,i)),i.setVector4Array(t)}setColor(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(16),this.memoryNodes.set(e,i)),i.setXYZW(t.r,t.g,t.b,t.a)}setColorArray(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(16*t.length),this.memoryNodes.set(e,i)),i.setColorArray(t)}setMatrix(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(64),this.memoryNodes.set(e,i)),i.setFloat32Array(0,t.rawData)}setMatrixArray(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(64*t.length),this.memoryNodes.set(e,i));for(let n=0;n<t.length;n++){var a=t[n];i.setFloat32Array(16*n,a.rawData)}}setArray(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(4*t.length),this.memoryNodes.set(e,i)),i.setArray(0,t)}setFloat32Array(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(4*t.length),this.memoryNodes.set(e,i)),i.setFloat32Array(0,t)}setInt32Array(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(4*t.length),this.memoryNodes.set(e,i)),i.setInt32Array(0,t)}setUint32Array(e,t){let i=this.memoryNodes.get(e);i||(i=this.memory.allocation_node(4*t.length),this.memoryNodes.set(e,i)),i.setUint32Array(0,t)}setStruct(o,t,i,a){var n=Cr.Ref(o),o=(Cr.GetSize(o),t),h=this.memoryNodes.get(o);h.reset();let l=i;a&&(l=l[a]);for(let f=0;f<n.length;f++){var u=n[f],c=l[u.name];switch(u.type){case"Boolean":case"Number":h.writeFloat(c);break;case"Float32Array":h.writeFloat32Array(c);break;case"Vector2":h.writeVector2(c);break;case"Vector3":h.writeVector3(c);break;case"Vector4":h.writeVector4(c);break;case"Color":h.writeRGBColor(c);break;case"Array":h.writeArray(c)}}}setStructArray(e,t,i){var a=t.length;for(let o=0;o<a;o++){var n=t[o];this.setStruct(e,o,n,i)}}clean(){var e=new Float32Array(this.memory.shareDataBuffer);e.fill(0,0,e.length)}apply(){M.device.queue.writeBuffer(this.buffer,0,this.memory.shareDataBuffer)}destroy(e){this.memoryNodes&&this.memoryNodes.forEach(t=>{t.destroy()}),this.bufferType=null,this.seek=null,this.byteSize=null,this.usage=null,this.visibility=null,this.outFloat32Array=null,this.buffer&&this.buffer.destroy(),this.buffer=null,this.memory&&this.memory.destroy(),this.memory=null,this._readBuffer&&this._readBuffer.destroy()}createBuffer(e,t,i){var a=M.device;this.byteSize=4*t,this.usage=e,this.buffer&&this.destroy(),this.buffer=a.createBuffer({size:this.byteSize,usage:e,mappedAtCreation:!1}),this.memory.allocation(this.byteSize),i&&(this.memory.allocation_node(4*i.length).setArrayBuffer(0,i),this.apply())}createBufferByStruct(e,n,i){var a=Cr.GetSize(n),n=a*i,o=M.device;this.buffer=o.createBuffer({size:n,usage:e,mappedAtCreation:!1}),this.memory.allocation(n);for(let u=0;u<i;u++){var h,l=u;this.memoryNodes.get(l)||(h=this.memory.allocation_node(a),this.memoryNodes.set(l,h))}}readBuffer(){return this.outFloat32Array||(this.outFloat32Array=new Float32Array(this.memory.shareDataBuffer.byteLength/4)),this._readBuffer||(this._readBuffer=M.device.createBuffer({size:this.memory.shareDataBuffer.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ,mappedAtCreation:!1})),this._readFlag||this.read(),this.outFloat32Array}async read(){this._readFlag=!0;var e=M.device.createCommandEncoder(),e=(e.copyBufferToBuffer(this.buffer,0,this._readBuffer,0,this.memory.shareDataBuffer.byteLength),M.device.queue.submit([e.finish()]),await this._readBuffer.mapAsync(GPUMapMode.READ),this._readBuffer.getMappedRange());this.outFloat32Array.set(new Float32Array(e),0),this._readBuffer.unmap(),this._readFlag=!1}}var Dt=(r=>(r[r.IndicesGPUBuffer=0]="IndicesGPUBuffer",r[r.VertexGPUBuffer=1]="VertexGPUBuffer",r[r.UniformGPUBuffer=2]="UniformGPUBuffer",r[r.StorageGPUBuffer=3]="StorageGPUBuffer",r[r.ComputeGPUBuffer=4]="ComputeGPUBuffer",r[r.MaterialDataUniformGPUBuffer=5]="MaterialDataUniformGPUBuffer",r[r.StructStorageGPUBuffer=6]="StructStorageGPUBuffer",r))(Dt||{});class De extends or{constructor(e,t=0,i){super(),this.bufferType=Dt.StorageGPUBuffer,this.createBuffer(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|t,e,i)}}class ci extends or{constructor(e,t){super(),this.bufferType=Dt.UniformGPUBuffer,this.createBuffer(GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC,e,t)}genUniformNodes(){}}let Fe=function(r=16,e=16){var t,i,a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),n=[];if(e=e||a.length,r)for(t=0;t<r;t++)n[t]=a[0|Math.random()*e];else for(n[8]=n[13]=n[18]=n[23]="-",n[14]="4",t=0;t<36;t++)n[t]||(i=0|16*Math.random(),n[t]=a[t==19?3&i|8:i]);return n.join("")};class Xa{constructor(){s(this,"instanceID"),s(this,"shaderVariant"),s(this,"vsEntryPoint","main"),s(this,"fsEntryPoint","main"),s(this,"bindGroups"),s(this,"shaderReflection"),s(this,"defineValue"),s(this,"constValues"),s(this,"uniforms"),s(this,"_bufferDic"),s(this,"_shaderChange",!1),s(this,"_stateChange",!1),this.instanceID=Fe(),this.defineValue={},this.constValues={},this.uniforms={},this._bufferDic=new Map}noticeShaderChange(){this._shaderChange=!0}noticeStateChange(){this._stateChange=!0}setStorageBuffer(e,t){this._bufferDic.has(e)?(this._bufferDic.set(e,t),this.noticeBufferChange(e)):this._bufferDic.set(e,t)}setStructStorageBuffer(e,t){this._bufferDic.has(e)?(this._bufferDic.set(e,t),this.noticeBufferChange(e)):this._bufferDic.set(e,t)}setUniformBuffer(e,t){this._bufferDic.has(e)?(this._bufferDic.set(e,t),this.noticeBufferChange(e)):this._bufferDic.set(e,t)}setDefine(e,t){this.defineValue[e]=t,this.noticeShaderChange()}hasDefine(e){return this.defineValue[e]!=null}deleteDefine(e){delete this.defineValue[e],this.noticeShaderChange()}setUniformFloat(e,t){this.uniforms[e]?this.uniforms[e].value=t:(this.uniforms[e]=new ht(t),this.noticeStateChange())}setUniformVector2(e,t){this.uniforms[e]?this.uniforms[e].vector2=t:this.uniforms[e]=new ht(t)}setUniformVector3(e,t){this.uniforms[e]?this.uniforms[e].vector3=t:this.uniforms[e]=new ht(t)}setUniformVector4(e,t){this.uniforms[e]?this.uniforms[e].vector4=t:this.uniforms[e]=new ht(t)}setUniformColor(e,t){this.uniforms[e]?this.uniforms[e].color=t:this.uniforms[e]=new ht(t)}setUniformArray(e,t){this.uniforms[e]?this.uniforms[e].float32Array(t):this.uniforms[e]=new ht(t)}noticeBufferChange(e){}destroy(e){}}var qt=(r=>(r[r.u32=1]="u32",r[r.f32=1]="f32",r[r["vec2<f32>"]=2]="vec2<f32>",r[r["vec3<f32>"]=3]="vec3<f32>",r[r["vec4<f32>"]=4]="vec4<f32>",r[r.float32=1]="float32",r[r.float32x2=2]="float32x2",r[r.float32x3=3]="float32x3",r[r.float32x4=4]="float32x4",r))(qt||{});let En=[null,Or.float32,Or.float32x2,Or.float32x3,Or.float32x4];class We{static parse(e,t){return e=this.filterComment(e),e=this.parsePreprocess(new fa,e,t),e=this.parseAutoBindingForGroupX(e,1)}static parseComputeShader(e,t){return e=this.filterComment(e),e=this.parsePreprocess(new fa,e,t)}static parsePreprocess(e,t,i){var a,n,o=t.indexOf("#");return o==-1?t:(a=t.substring(0,o),n=t.indexOf(`
`,t.lastIndexOf("#")),o=t.substring(o,n),t=t.substring(n),a+this.parsePreprocessCommand(e,o,i)+t)}static parseAutoBindingForGroupX(e,t){let i=0,a="",n=new Map;for(;i<e.length;){if((l=e.indexOf("@group(",i))==-1){a+=e.substring(i);break}var o,u=e.indexOf(")",l),h=Number.parseInt(e.substring(l+7,u)),l=e.indexOf("@binding(",u),u=e.indexOf(")",l);a+=e.substring(i,l),h==t?n.has(h)?(o=n.get(h)+1,a+=`@binding(${o})`,n.set(h,o)):(a+="@binding(0)",n.set(h,0)):a+=e.substring(l,u+1),i=u+1}return a}static parsePreprocessCommand(e,t,i){let a="",n=t.split(`
`),o=[!1],h=[!1];for(let f=0;f<n.length;f++){let p=n[f],m=o[o.length-1];if(p.trim().indexOf("#")!=0)m||(a+=p+`
`);else{var l,u=p.trim();if(u.indexOf("#if")!=-1)m&&1<o.length?o.push(m):(l=u.substring(3).trim(),m=!this.parseCondition(l,i),o.push(m),h.push(!m));else if(u.indexOf("#elseif")!=-1||u.indexOf("#else")!=-1&&u.indexOf(" if")!=-1)h[h.length-1]?(o.pop(),m=!0,o.push(m)):(o.pop(),(m=o[o.length-1])&&1<o.length?o.push(m):((l=u.substring(u.indexOf("if")+2).trim())==""&&console.error("preprocess command error, conditions missing: "+u),m=!this.parseCondition(l,i),o.push(m),h.push(!m)));else if(u.indexOf("#else")!=-1)o.pop(),m&&1<o.length&&o[o.length-1]?o.push(m):o.push(!m);else if(u.indexOf("#endif")!=-1)o.pop(),h.pop();else if(u.indexOf("#include")!=-1){let _="",v=u.charAt(u.length-1);if(_=v==">"?this.extract(u,"<",">"):this.extract(u,v,v),!e.includeMap.has(_)){e.includeMap.set(_,!0);var c=D.getShader(_);if(!c)throw`${u} error: '${_}' not found`;c=this.filterComment(c),c=this.parsePreprocess(e,c,i),a+=c+`\r
`}}else{if(u.indexOf("#define ")==-1)throw"nonsupport: "+u;{let _=u.substring(u.indexOf("#define ")+8).trim(),v=_.indexOf(" "),S=_,T="";v!=-1&&(S=_.substring(0,v).trim(),T=_.substring(v+1).trim()),i[S]=T}}}}return a}static parseCondition(e,t){return t=t[e],t!=null&&(t==1||t!=0)}static filterComment(e){let t="",i=!0,a=!0;for(let n=0;n<e.length;){let o=i?e.indexOf("//",n):-1,h=a?e.indexOf("/*",n):-1;if(o==-1&&h==-1){t+=e.substring(n);break}i=o!=-1,a=h!=-1,o!=-1&&h!=-1&&(o<h?h=-1:o=-1),o!=-1?(h=e.indexOf(`
`,o),t+=e.substring(n,o),n=h!=-1?h:e.length):h!=-1&&(o=e.indexOf("*/",h),t+=e.substring(n,h),n=o+2)}return t}static extract(e,t,i){return t=e.indexOf(t)+t.length,i=e.indexOf(i,t),e.substring(t,i).trim()}}class fa{constructor(){s(this,"includeMap",new Map)}}const Gr=class{constructor(){s(this,"attributes",[]),s(this,"vs_variables",[]),s(this,"fs_variables",[]),s(this,"cs_variables",[]),s(this,"groups",[]),s(this,"variables",{}),s(this,"useSplit",!1)}static parser(r,e){e.shaderReflection||(e.shaderReflection=new Gr),r.indexOf("@vertex")!=-1?(e.shaderReflection.attributes=this.parserVertexOld(r),e.shaderReflection.vs_variables=this.parserVariables(r)):r.indexOf("@fragment")!=-1?e.shaderReflection.fs_variables=this.parserVariables(r):r.indexOf("@compute")!=-1&&(e.shaderReflection.cs_variables=this.parserVariables(r))}static parser2(r,e){e.shaderReflection||(e.shaderReflection=new Gr);var t=e.shaderReflection;r.indexOf("@vertex")!=-1?(t.attributes=this.parserVertex(e.vsEntryPoint,r),t.vs_variables=this.parserVariables(r)):r.indexOf("@fragment")!=-1?t.fs_variables=this.parserVariables(r):r.indexOf("@compute")!=-1&&(t.cs_variables=this.parserVariables(r)),r.indexOf("splitTexture")!=-1&&(t.useSplit=!0)}static combineShaderReflectionVarInfo(r,e){for(const n of e){r.groups[n.group]||(r.groups[n.group]=[]);var t=n;if(r.groups[n.group][n.binding]){var i=r.groups[n.group][n.binding],a=n;if(i.dataFields)for(let o=0;o<i.dataFields.length;o++)i.dataFields[o];if(a.dataFields)for(let o=0;o<a.dataFields.length;o++)a.dataFields[o]}r.groups[n.group][n.binding]=t,r.variables[n.varName]=t}}static final(r){var e=r.shaderReflection;this._shaderReflectionMap.set(r.shaderVariant,e),this.combineShaderReflectionVarInfo(e,e.vs_variables),this.combineShaderReflectionVarInfo(e,e.fs_variables)}static getShaderReflection2(r,e){e.shaderVariant!=null&&(r=We.parse(r,e.defineValue),Gr.parser2(r,e))}static poolGetReflection(r){return this._shaderReflectionMap.get(r)}static genShaderVar(r){let e=""+r.vs+r.fs+r.compute;e+="|";for(const t in r.uniforms)e+=t+":";e+="|";for(const t in r.constValues)e+=t+":",e+=r.constValues[t];e+="|";for(const t in r.defines)e+=t+":",e+=r.defines[t];e+="|";for(const t in r.shaderState)e+=t+":",e+=r.shaderState[t]+";";return e}static genShaderVariant(r){let e="";for(const t in r.uniforms)e+=t+":";e+="|";for(const t in r.constValues)e+=t+":",e+=r.constValues[t];e+="|";for(const t in r.defineValue)e+=t+":",e+=r.defineValue[t];return e}static genRenderShaderVariant(r){let e=`RenderShader(${r.vsName},${r.fsName})`;e=(e+="|")+this.genShaderVariant(r)+"|";for(const t in r.shaderState)e+=t+":",e+=r.shaderState[t]+";";return e}static genComputeShaderVariant(r){var e=`ComputeShader(${r.instanceID})`;return(e+="|")+this.genShaderVariant(r)}combine(r){var e=r.shaderReflection,t=r.defines,i={};for(let l=0;l<this.attributes.length;l++){var a=this.attributes[l];t[a.name]&&(i[a.name]=a)}var n=e.attributes.length;for(let l=0;l<n;l++){var o,h=e.attributes[l];i[h.name]?(o=i[h.name]).location==h.location&&o.name!=h.name&&console.log("location must same!"):this.attributes.push(h)}}static parserVariables(r){let e=0,t=[];for(;e<r.length;){var i=r.indexOf("@group(",e);if(i<0)break;var a=r.indexOf(";",i);e=a;let n=r.substring(i,a),o=this.extract(n,"@group(",")"),h=this.extract(n,"@binding(",")"),l="",u="var";n.indexOf("var<")!=-1?(l=this.extract(n,">",":"),u=this.extract(n,"var<",">").replace(",","-").replaceAll(" ","")):l=this.extract(n,"var",":"),i=n.substring(n.lastIndexOf(":")+1).trim(),a={group:0,binding:0,varType:"",varName:"",dataType:"",dataIsBuiltinType:!0,dataFields:null},a.group=Number.parseInt(o),a.binding=Number.parseInt(h),a.varType=u,a.varName=l,a.dataType=i,a.dataIsBuiltinType=this.isBuiltinTypes(a.dataType),a.dataIsBuiltinType||(a.dataFields=this.parserStructFields(r,a.dataType)),t.push(a)}return t}static extract(r,e,t){return e=r.indexOf(e)+e.length,t=r.indexOf(t,e),r.substring(e,t).trim()}static isBuiltinTypes(r){switch(r){case"i32":case"u32":case"f32":return!0;default:var e=r.indexOf("<");if(e!=-1)switch(r.substring(0,e)){case"vec2":case"vec3":case"vec4":case"mat3":case"mat4":return!0;case"array":return this.isBuiltinTypes(r.substring(e+1,r.lastIndexOf(">")))}}return!1}static parserStructFields(r,e){let t=[],i=0;for(;i<r.length&&!((o=r.indexOf("struct ",i))<0);){var a=r.indexOf("{",o);if(i=a,r.substring(o+6,a).trim()===e){var n,o=r.indexOf("{",o),a=r.indexOf("}",o);for(n of r.substring(o+1,a).split(",")){var h=n.indexOf(":");h!=-1&&(h={name:n.substring(0,h).trim(),type:n.substring(h+1).trim()},t.push(h))}break}}return t}static parserVertexOld(r){let e=[],t=r.split("fn main(")[1].split("->")[0],i=t.split("@");if(i&&1<i.length)for(let o=1;o<i.length;o++){let h=i[o].replace(/\s*$/g,"");h=(h=(h=h.replaceAll(",","")).replaceAll(`
`,"")).replaceAll("  "," "),this.parserAttribute(h,e)}else{var a=t.split(":")[1],r=(a=(a=(a=a.replaceAll("  ","")).replaceAll(" ","")).replaceAll(")",""),(a=r.split("struct "+a)[1]).indexOf("{")),n=a.indexOf("}");a=a.slice(r,n),i=a.split("@");for(let h=1;h<i.length;h++){let l=i[h].replace(/\s*$/g,"");l=(l=(l=l.replaceAll(`
`,"")).split(",")[0]).replaceAll("  "," "),this.parserAttribute(l,e)}}return e}static parserVertex(r,e){let t=[],i=e.split(`fn ${r}(`)[1].split("->")[0],a=i.split("@");if(a&&1<a.length)for(let o=1;o<a.length;o++){let h=a[o].replace(/\s*$/g,"");h=(h=(h=h.replaceAll(",","")).replaceAll(`
`,"")).replaceAll("  "," "),this.parserAttribute(h,t)}else{var r=i.split(":")[1],e=(r=(r=(r=r.replaceAll("  ","")).replaceAll(" ","")).replaceAll(")",""),(r=e.split("struct "+r)[1]).indexOf("{")),n=r.indexOf("}");r=r.slice(e,n),a=r.split("@");for(let l=1;l<a.length;l++){let u=a[l].replace(/\s*$/g,"");u=(u=(u=u.replaceAll(`
`,"")).split(",")[0]).replaceAll("  "," "),this.parserAttribute(u,t)}}return t}static parserAttribute(r,e){var t,i,a={name:"",group:0,location:0,type:"",valueType:"",value:0,size:0,format:"float32"};r.indexOf("builtin")!=-1?(a.type="builtin",t=r.match(/\((.+?)\)/g)[0],t=(t=(t=r.match(/\((.+?)\)/g)[0]).replace("(","")).replaceAll(")",""),a.location=parseInt(t),i=r.split(":"),a.name=i[0].split(" ")[1],a.name=a.name.replaceAll("  "," "),a.name=a.name.replaceAll(" ",""),a.valueType=i[1],a.valueType=a.valueType.replaceAll("  "," "),a.valueType=a.valueType.replaceAll(" ",""),a.valueType=a.valueType.replaceAll("\r",""),a.valueType=a.valueType.replaceAll(")",""),a.valueType=a.valueType.replaceAll(")",""),a.size=qt[a.valueType],e.push(a)):r.indexOf("location")!=-1&&(a.type="location",t=r.match(/\((.+?)\)/g)[0],t=(t=(t=r.match(/\((.+?)\)/g)[0]).replace("(","")).replaceAll(")",""),a.location=parseInt(t),i=r.split(":"),a.name=i[0].split(" ")[1],a.name=a.name.replaceAll("  "," "),a.name=a.name.replaceAll(" ",""),a.valueType=i[1],a.valueType=a.valueType.replaceAll("  "," "),a.valueType=a.valueType.replaceAll(" ",""),a.valueType=a.valueType.replaceAll("\r",""),a.valueType=a.valueType.replaceAll(")",""),a.valueType=a.valueType.replaceAll(")",""),a.size=qt[a.valueType],e.push(a)),a.format=En[qt[a.valueType]]}};let je=Gr;s(je,"_shaderReflectionMap",new Map);class ft extends Xa{constructor(e){super(),s(this,"entryPoint","CsMain"),s(this,"workerSizeX",1),s(this,"workerSizeY",0),s(this,"workerSizeZ",0),s(this,"_computePipeline"),s(this,"_csShaderModule"),s(this,"_destCS"),s(this,"_sourceCS"),s(this,"_storageTextureDic"),s(this,"_sampleTextureDic"),s(this,"_groupsShaderReflectionVarInfos"),s(this,"_groupCache",{}),this._sourceCS=e,je.getShaderReflection2(e,this),this._storageTextureDic=new Map,this._sampleTextureDic=new Map}setStorageTexture(e,t){this._storageTextureDic.has(e)||this._storageTextureDic.set(e,t)}setSamplerTexture(e,t){this._sampleTextureDic.set(e,t)}compute(e){this._computePipeline||this.genComputePipeline(),e.setPipeline(this._computePipeline);for(let t=0;t<this.bindGroups.length;++t)e.setBindGroup(t,this.bindGroups[t]);this.workerSizeX&&this.workerSizeY&&this.workerSizeZ?e.dispatchWorkgroups(this.workerSizeX,this.workerSizeY,this.workerSizeZ):this.workerSizeX&&this.workerSizeY?e.dispatchWorkgroups(this.workerSizeX,this.workerSizeY):e.dispatchWorkgroups(this.workerSizeX)}createBufferBindGroup(e,t,i,a){var n=this._bufferDic.get(t);n?(i={binding:i,resource:{buffer:n.buffer,offset:0,size:n.memory.shareDataBuffer.byteLength}},a.push(i)):console.error(`ComputeShader(${this.instanceID})`,`buffer ${t} is missing!`)}noticeBufferChange(e){e=this._groupCache[e],e&&this.genGroups(e.groupIndex,e.infos,!0)}genGroups(e,t,i=!1){if(!this.bindGroups[e]||i){var a=t[e],n=[];for(let f=0;f<a.length;++f){var o,h,l,u,c=a[f];if(c)switch(c.varType){case"uniform":case"storage-read":case"storage-read_write":this.createBufferBindGroup(e,c.varName,c.binding,n),this._groupCache[c.varName]={groupIndex:e,infos:t};break;case"var":c.dataType=="sampler"?(o=c.varName.replace("Sampler",""),(o=this._sampleTextureDic.get(o))?(o={binding:c.binding,resource:o.gpuSampler},n.push(o)):console.error(`ComputeShader(${this.instanceID})`,`texture ${c.varName} is missing! `)):c.dataType=="sampler_comparison"?(o=c.varName.replace("Sampler",""),(h=this._sampleTextureDic.get(o))?(h={binding:c.binding,resource:h.gpuSampler_comparison},n.push(h)):console.error(`ComputeShader(${this.instanceID})`,`texture ${c.varName} is missing! `)):c.dataType.indexOf("texture_storage")!=-1?(h=this._storageTextureDic.get(c.varName))?(l={binding:c.binding,resource:h.getGPUView()},n.push(l),Y.getInstance().attached(h,this)):console.error(`ComputeShader(${this.instanceID})`,`texture ${c.varName} is missing! `):c.dataType.indexOf("texture")!=-1&&((l=this._sampleTextureDic.get(c.varName))?(u={binding:c.binding,resource:l.getGPUView()},n.push(u),Y.getInstance().attached(l,this)):console.error(`ComputeShader(${this.instanceID})`,`texture ${c.varName} is missing! `));break;default:console.error("unprocessed type:",c.varType)}}i=M.device.createBindGroup({layout:this._computePipeline.getBindGroupLayout(e),entries:n}),this.bindGroups[e]=i}}genComputePipeline(){this.preCompileShader(this._sourceCS),this.genReflection(),this._computePipeline=M.device.createComputePipeline({layout:"auto",compute:{module:this.compileShader(),entryPoint:this.entryPoint}}),this._groupsShaderReflectionVarInfos=[];var e=this.shaderReflection;this.bindGroups=[];for(let i=0;i<e.groups.length;++i){var t=e.groups[i];this._groupsShaderReflectionVarInfos[i]=t,this.genGroups(i,this._groupsShaderReflectionVarInfos)}}preCompileShader(e){for(const i in this.constValues){var t;Object.prototype.hasOwnProperty.call(this.constValues,i)&&(t=this.constValues[i],e=e.replaceAll("&"+i,t.toString()))}this._destCS=We.parseComputeShader(e,this.defineValue)}compileShader(){var e=M.device.createShaderModule({label:`ComputeShader(${this.instanceID})`,code:this._destCS});return e.getCompilationInfo().then(t=>{0<t.messages.length&&console.log(this._destCS)}),this._csShaderModule=e}genReflection(){this.shaderVariant+=je.genComputeShaderVariant(this);var e=je.poolGetReflection(this.shaderVariant);e?this.shaderReflection=e:(je.getShaderReflection2(this._destCS,this),je.combineShaderReflectionVarInfo(this.shaderReflection,this.shaderReflection.cs_variables))}}class et{static start(e){let t=this.profilerLabelMap.get(e);t||(t={lable:e,start:0,end:0,total:0,count:0,child:new Map},this.profilerLabelMap.set(e,t)),t.start=performance.now(),t.end=performance.now(),t.count=0,t.child.clear()}static end(e){e=this.profilerLabelMap.get(e),e&&(e.end=performance.now(),e.total=e.end-e.start)}static countStart(e,t=""){if(e=this.profilerLabelMap.get(e),e&&(e.count++,t!="")){let i=e.child.get(t);(i=i||{lable:t,start:0,end:0,total:0,count:0}).start=performance.now(),i.end=performance.now(),i.count=0,e.child.set(t,i)}}static countEnd(e,t){if(e=this.profilerLabelMap.get(e),e&&t!=""){let i=e.child.get(t);(i=i||{lable:t,start:0,end:0,total:0,count:0}).end=performance.now(),i.total=i.end-i.start,i.count++}}static print(e){var t=this.profilerLabelMap.get(e);t&&console.log("performance",e,t.total+" ms")}}s(et,"profilerLabelMap",new Map);class at{}s(at,"AXIS_ANGLE","axisAngle"),s(at,"EULER_ANGLES","eulerAngles"),s(at,"QUATERNION","quaternion");const ke=class{constructor(r=0,e=0,t=0,i=1){s(this,"x",0),s(this,"y",0),s(this,"z",0),s(this,"w",1),this.x=r,this.y=e,this.z=t,this.w=i}static identity(){return ke._zero}static quaternionToMatrix(f,e){var u=2*f.x,c=2*f.y,t=2*f.z,i=f.x*u,a=f.y*c,n=f.z*t,o=f.x*c,h=f.x*t,l=f.y*t,u=f.w*u,c=f.w*c,f=f.w*t;e.rawData[0]=1-(a+n),e.rawData[1]=o+f,e.rawData[2]=h-c,e.rawData[3]=0,e.rawData[4]=o-f,e.rawData[5]=1-(i+n),e.rawData[6]=l+u,e.rawData[7]=0,e.rawData[8]=h+c,e.rawData[9]=l-u,e.rawData[10]=1-(i+a),e.rawData[11]=0,e.rawData[12]=0,e.rawData[13]=0,e.rawData[14]=0,e.rawData[15]=1}get magnitude(){return Math.sqrt(this.w*this.w+this.x*this.x+this.y*this.y+this.z*this.z)}set(r=0,e=0,t=0,i=1){this.x=r,this.y=e,this.z=t,this.w=i}divide(r){return r instanceof ke?new ke(this.x/r.x,this.y/r.y,this.z/r.z):(this.x=this.x/r,this.y=this.y/r,this.z=this.z/r,this)}setFromArray(r){return this.x=r[0],this.y=r[1],this.z=r[2],this.w=r[3],this}multiply(n,u){var t=n.w,i=n.x,a=n.y,n=n.z,o=u.w,h=u.x,l=u.y,u=u.z;this.w=t*o-i*h-a*l-n*u,this.x=t*h+i*o+a*u-n*l,this.y=t*l-i*u+a*o+n*h,this.z=t*u+i*l-a*h+n*o}multiplyVector(a,e=null){e=e||new ke;var t=a.x,i=a.y,a=a.z;return e.w=-this.x*t-this.y*i-this.z*a,e.x=this.w*t+this.y*a-this.z*i,e.y=this.w*i-this.x*a+this.z*t,e.z=this.w*a+this.x*i-this.y*t,e}fromAxisAngle(r,t){var t=.5*(t*=Math.PI/180),i=Math.sin(t);this.w=Math.cos(t),this.x=r.x*i,this.y=r.y*i,this.z=r.z*i,this.normalize()}toAxisAngle(r){var e=this.x*this.x+this.y*this.y+this.z*this.z,t=0;return 0<e?(t=2*Math.acos(this.w),e=1/Math.sqrt(e),r.x=this.x*e,r.y=this.y*e,r.z=this.z*e):(t=0,r.x=1,r.y=0,r.z=0),t}slerp(l,p,t){var i,a,n=l.w,o=l.x,h=l.y,l=l.z,u=p.w,c=p.x,f=p.y,p=p.z,m=n*u+o*c+h*f+l*p;m<0&&(m=-m,u=-u,c=-c,f=-f,p=-p),m<.95?(m=Math.acos(m),a=1/Math.sin(m),i=Math.sin(m*(1-t))*a,m=Math.sin(m*t)*a,this.w=n*i+u*m,this.x=o*i+c*m,this.y=h*i+f*m,this.z=l*i+p*m):(this.w=n+t*(u-n),this.x=o+t*(c-o),this.y=h+t*(f-h),this.z=l+t*(p-l),a=1/Math.sqrt(this.w*this.w+this.x*this.x+this.y*this.y+this.z*this.z),this.w*=a,this.x*=a,this.y*=a,this.z*=a)}lerp(o,c,t){var i=o.w,a=o.x,n=o.y,o=o.z,h=c.w,l=c.x,u=c.y,c=c.z;i*h+a*l+n*u+o*c<0&&(h=-h,l=-l,u=-u,c=-c),this.w=i+t*(h-i),this.x=a+t*(l-a),this.y=n+t*(u-n),this.z=o+t*(c-o),h=1/Math.sqrt(this.w*this.w+this.x*this.x+this.y*this.y+this.z*this.z),this.w*=h,this.x*=h,this.y*=h,this.z*=h}fromEulerAngles(a,o,l){var a=.5*(a*=ee),o=.5*(o*=ee),l=.5*(l*=ee),i=Math.cos(a),a=Math.sin(a),n=Math.cos(o),o=Math.sin(o),h=Math.cos(l),l=Math.sin(l);return this.w=i*n*h+a*o*l,this.x=a*n*h-i*o*l,this.y=i*o*h+a*n*l,this.z=i*n*l-a*o*h,this}setFromRotationMatrix(u){var u=u.rawData,e=u[0],t=u[4],i=u[8],a=u[1],n=u[5],o=u[9],h=u[2],l=u[6],u=u[10],c=e+n+u;return 0<c?(c=.5/Math.sqrt(c+1),this.w=.25/c,this.x=(l-o)*c,this.y=(i-h)*c,this.z=(a-t)*c):n<e&&u<e?(c=2*Math.sqrt(1+e-n-u),this.w=(l-o)/c,this.x=.25*c,this.y=(t+a)/c,this.z=(i+h)/c):u<n?(c=2*Math.sqrt(1+n-e-u),this.w=(i-h)/c,this.x=(t+a)/c,this.y=.25*c,this.z=(o+l)/c):(c=2*Math.sqrt(1+u-e-n),this.w=(a-t)/c,this.x=(i+h)/c,this.y=(o+l)/c,this.z=.25*c),this}getEulerAngles(r){var e,t,i,a,n,o,h;return r=r||new d,i=this.x,a=this.y,n=this.z,h=(h=2*((o=this.w)*a-i*n))<=-.99999?(e=2*Math.atan2(i,o),t=-Math.PI/2,0):.99999<=h?(e=2*Math.atan2(i,o),t=Math.PI/2,0):(e=Math.atan2(2*(o*i+a*n),1-2*(i*i+a*a)),t=Math.asin(h),Math.atan2(2*(o*n+i*a),1-2*(a*a+n*n))),r.set(e,t,h).scaleBy(Dr)}normalize(r=1){r/=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w),this.x*=r,this.y*=r,this.z*=r,this.w*=r}toString(){return"{x:"+this.x+" y:"+this.y+" z:"+this.z+" w:"+this.w+"}"}fromMatrix(r){r=r.decompose(at.QUATERNION)[1],this.x=r.x,this.y=r.y,this.z=r.z,this.w=r.w}inverse(r=null){r=r||new ke;var e=this.w*this.w+this.x*this.x+this.y*this.y+this.z*this.z;return 0<e&&(r.w=this.w*(e=1/e),r.x=-this.x*e,r.y=-this.y*e,r.z=-this.z*e),r}clone(){return new ke(this.x,this.y,this.z,this.w)}transformVector(h,e=null){var t,i,a,n=h.x,o=h.y,h=h.z;return e=e||new d,a=-this.x*n-this.y*o-this.z*h,t=this.w*n+this.y*h-this.z*o,i=this.w*o-this.x*h+this.z*n,h=this.w*h+this.x*o-this.y*n,e.x=-a*this.x+t*this.w-i*this.z+h*this.y,e.y=-a*this.y+t*this.z+i*this.w-h*this.x,e.z=-a*this.z-t*this.y+i*this.x+h*this.w,e}copyFrom(r){return this.x=r.x,this.y=r.y,this.z=r.z,this.w=r.w,this}mul(r,e,t){return t=t||new ke,t.x=r.w*e.x+r.x*e.w+r.y*e.z-r.z*e.y,t.y=r.w*e.y+r.y*e.w+r.z*e.x-r.x*e.z,t.z=r.w*e.z+r.z*e.w+r.x*e.y-r.y*e.x,t.w=r.w*e.w-r.x*e.x-r.y*e.y-r.z*e.z,t}clampf(r,e,t){var i;return t<e&&(i=e,e=t,t=i),r<e?e:r<t?r:t}};let $=ke;s($,"HELP_0",new ke),s($,"HELP_1",new ke),s($,"HELP_2",new ke),s($,"_zero",new ke(0,0,0,1)),s($,"CALCULATION_QUATERNION",new ke);let Dr=180/Math.PI,ee=Math.PI/180;function ze(r,e,t){return Math.max(e,Math.min(t,r))}class St{static gaussFunction(e,t,i,a){return e=Math.pow(e-i,2),i=2*Math.pow(a,2),a=Math.pow(Math.E,e/i*-1),Math.round(a*t)}static computeGaussian(e,t){return 1/Math.sqrt(2*Math.PI*t)*Math.exp(-e*e/(2*t*t))}static gaussCoef(a){a<.5&&(a=.5);var a=Math.exp(.527076)/a,o=Math.exp(-a),h=Math.exp(-2*a),t=(1-o)*(1-o)/(1+2*a*o-h),i=t*(a-1)*o,a=t*(1+a)*o,n=-t*h,o=2*o,h=-h;return new Float32Array([t,i,a,n,o,h,(t+i)/(1-o-h),(a+n)/(1-o-h)])}static clampf(e,t,i){var a;return i<t&&(a=t,t=i,i=a),e<t?t:e<i?e:i}static normalizeAngle(e){for(;180<e;)e-=360;for(;e<-180;)e+=360;return e}static fract(e){return e-Math.floor(e)}static getRandDirXZ(t){var t=t*Math.random(),i=360*Math.random()*ee;return{x:Math.cos(i)*t,z:Math.sin(i)*t}}static getRandDirXYZ(t){var t=t*Math.random(),n=360*Math.random()*ee,i=Math.cos(n)*t,a=Math.tan(n)*t,n=Math.sin(n)*t;return new d(i,a,n)}static getCycleXYZ(a){var t=a*Math.random(),n=360*Math.random()*ee,i=Math.cos(n)*t,a=a*Math.random()-.5*a,n=Math.sin(n)*t;return new d(i,a,n)}static angle(e,t){var i=Q.HELP_0,a=Q.HELP_1;return i.set(e.x,e.z),a.set(t.x,t.z),Math.acos((i.x*a.x+i.y*a.y)/(i.abs()*a.abs()))}static angle_360(e,t){var i=d.HELP_0;return e.cross(t,i),0<i.z?St.angle(e,t):360-St.angle(e,t)}getRotationY(e){return St.normalizeAngle(Math.atan2(e.z,e.x)*Dr)}static fromToRotation(e,t,i=null){i=i||new $;var a=new A;return A.fromToRotation(e,t,a),i.fromMatrix(a),i}static getEularDir_yUp(e){var t=$.HELP_0;return t.fromEulerAngles(0,e,0),t.transformVector(d.Z_AXIS,d.HELP_5),d.HELP_5}static transformVector(C,R,i=null){i=i||new d;var C=C.rawData,a=C[0],n=C[1],o=C[2],h=C[3],l=C[4],u=C[5],c=C[6],f=C[7],p=C[8],m=C[9],_=C[10],v=C[11],S=C[12],T=C[13],y=C[14],C=C[15],I=R.x,L=R.y,R=R.z;return i.x=a*I+l*L+p*R+S,i.y=n*I+u*L+m*R+T,i.z=o*I+c*L+_*R+y,i.w=h*I+f*L+v*R+C,i}}function He(r,e){return r instanceof d&&e instanceof d||r instanceof $&&e instanceof $?r.x*e.x+r.y*e.y+r.z*e.z:r.x*e.x+r.y*e.y}function Pn(r){return He(r,r)}function Ya(r,e){return r-Math.floor(r/e)*e}const P=class{constructor(r=0){s(this,"index",0),s(this,"offset",0),s(this,"rawData"),s(this,"_position"),P.useCount>=P.allocCount&&P.allocMatrix(P.allocCount+1e3),this.index=P.useCount,this.offset=P.useCount*P.blockBytes+P.wasmMatrixPtr,P.globalMatrixRef[this.index]=this,P.useCount++,this.rawData=new Float32Array(P.matrixBytes.buffer,this.offset,16),this._position=new d,this.identity()}static allocMatrix(r){this.allocCount=r,P.matrixBytes=new Float32Array(16*r),P.buffer=P.matrixBytes.buffer,P.wasmMatrixPtr=0,this.globalMatrixRef||(this.globalMatrixRef=[]),this.globalMatrixRef.forEach(e=>{var t=e.rawData;e.rawData=new Float32Array(P.matrixBytes.buffer,e.offset,16);for(let i=0;i<t.length;i++)e.rawData[i]=t[i]}),P.help_matrix_0||(P.help_matrix_0=new P),P.help_matrix_1||(P.help_matrix_1=new P),P.help_matrix_2||(P.help_matrix_2=new P),P.helpMatrix||(P.helpMatrix=new P),P.helpMatrix2||(P.helpMatrix2=new P),P._getEulerMatrix||(P._getEulerMatrix=new P),P._getEulerMatrix.identity()}static fromToRotation(r,e,t){return(t=t||new P).transformDir(r,e),t}static getAxisRotation(r,e,t,h){var a,n=new P,h=h*(Math.PI/180),o=Math.cos(h),h=Math.sin(h),l=1-o;return n.rawData[0]=o+r*r*l,n.rawData[5]=o+e*e*l,n.rawData[10]=o+t*t*l,n.rawData[1]=(o=r*e*l)+(a=t*h),n.rawData[4]=o-a,n.rawData[8]=(o=r*t*l)+(a=e*h),n.rawData[2]=o-a,n.rawData[9]=(o=e*t*l)-(a=r*h),n.rawData[6]=o+a,n}static sanitizeEuler(r){P.makePositive(r)}static makePositive(r){var e=2*Math.PI-1e-4;r.x<-1e-4?r.x+=2*Math.PI:r.x>e&&(r.x-=2*Math.PI),r.y<-1e-4?r.y+=2*Math.PI:r.y>e&&(r.y-=2*Math.PI),r.z<-1e-4?r.z+=2*Math.PI:r.z>e&&(r.z-=2*Math.PI)}static matrixToEuler(r,e){return r.get(1,2)<.999?-.999<r.get(1,2)?(e.x=Math.asin(-r.get(1,2)),e.y=Math.atan2(r.get(0,2),r.get(2,2)),e.z=Math.atan2(r.get(1,0),r.get(1,1)),P.sanitizeEuler(e),!0):(e.x=.5*Math.PI,e.y=Math.atan2(r.get(0,1),r.get(0,0)),e.z=0,P.sanitizeEuler(e),!1):(e.x=.5*-Math.PI,e.y=Math.atan2(-r.get(0,1),r.get(0,0)),e.z=0,P.sanitizeEuler(e),!1)}static matrixMultiply(r,e,t){P.wasm.Matrix_Multiply(r.index,e.index,t.index)}static matrixAppend(r,e,t){P.wasm.Matrix_Append(r.index,e.index,t.index)}static matrixRotateY(r,e){P.wasm.Matrix_Append(r,e.index)}static matrixRotate(r,e,t){P.wasm.Matrix_Rotate(r,e,t.index)}lookAt(r,a,o=d.Y_AXIS){var i=this.rawData,a=a.subtract(r,d.HELP_0),n=(a.length<1e-4&&(a.z=1),a.normalize(),o.crossProduct(a,d.HELP_1)),o=(n.length<1e-4&&(.9999<Math.abs(o.z)?a.x+=1e-4:a.z+=1e-4,a.normalize()),n=o.cross(a,n).normalize(),a.crossProduct(n,d.HELP_2).normalize());i[0]=n.x,i[1]=o.x,i[2]=a.x,i[3]=0,i[4]=n.y,i[5]=o.y,i[6]=a.y,i[7]=0,i[8]=n.z,i[9]=o.z,i[10]=a.z,i[11]=0,i[12]=-n.dotProduct(r),i[13]=-o.dotProduct(r),i[14]=-a.dotProduct(r),i[15]=1}multiply(t){var e=this.rawData,t=t.rawData,i=P.float32Array;i[0]=e[0]*t[0]+e[1]*t[4]+e[2]*t[8]+e[3]*t[12],i[1]=e[0]*t[1]+e[1]*t[5]+e[2]*t[9]+e[3]*t[13],i[2]=e[0]*t[2]+e[1]*t[6]+e[2]*t[10]+e[3]*t[14],i[3]=e[0]*t[3]+e[1]*t[7]+e[2]*t[11]+e[3]*t[15],i[4]=e[4]*t[0]+e[5]*t[4]+e[6]*t[8]+e[7]*t[12],i[5]=e[4]*t[1]+e[5]*t[5]+e[6]*t[9]+e[7]*t[13],i[6]=e[4]*t[2]+e[5]*t[6]+e[6]*t[10]+e[7]*t[14],i[7]=e[4]*t[3]+e[5]*t[7]+e[6]*t[11]+e[7]*t[15],i[8]=e[8]*t[0]+e[9]*t[4]+e[10]*t[8]+e[11]*t[12],i[9]=e[8]*t[1]+e[9]*t[5]+e[10]*t[9]+e[11]*t[13],i[10]=e[8]*t[2]+e[9]*t[6]+e[10]*t[10]+e[11]*t[14],i[11]=e[8]*t[3]+e[9]*t[7]+e[10]*t[11]+e[11]*t[15],i[12]=e[12]*t[0]+e[13]*t[4]+e[14]*t[8]+e[15]*t[12],i[13]=e[12]*t[1]+e[13]*t[5]+e[14]*t[9]+e[15]*t[13],i[14]=e[12]*t[2]+e[13]*t[6]+e[14]*t[10]+e[15]*t[14],i[15]=e[12]*t[3]+e[13]*t[7]+e[14]*t[11]+e[15]*t[15],e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15]}multiplyMatrices(y,X){var y=y.rawData,X=X.rawData,t=this.rawData,i=y[0],a=y[4],n=y[8],o=y[12],h=y[1],l=y[5],u=y[9],c=y[13],f=y[2],p=y[6],m=y[10],_=y[14],v=y[3],S=y[7],T=y[11],y=y[15],C=X[0],I=X[4],L=X[8],R=X[12],O=X[1],N=X[5],j=X[9],de=X[13],W=X[2],H=X[6],te=X[10],Ie=X[14],_e=X[3],Re=X[7],k=X[11],X=X[15];return t[0]=i*C+a*O+n*W+o*_e,t[4]=i*I+a*N+n*H+o*Re,t[8]=i*L+a*j+n*te+o*k,t[12]=i*R+a*de+n*Ie+o*X,t[1]=h*C+l*O+u*W+c*_e,t[5]=h*I+l*N+u*H+c*Re,t[9]=h*L+l*j+u*te+c*k,t[13]=h*R+l*de+u*Ie+c*X,t[2]=f*C+p*O+m*W+_*_e,t[6]=f*I+p*N+m*H+_*Re,t[10]=f*L+p*j+m*te+_*k,t[14]=f*R+p*de+m*Ie+_*X,t[3]=v*C+S*O+T*W+y*_e,t[7]=v*I+S*N+T*H+y*Re,t[11]=v*L+S*j+T*te+y*k,t[15]=v*R+S*de+T*Ie+y*X,this}multiplyPoint3(r,e){e=e||new d;var t=this.rawData;return e.x=t[0]*r.x+t[4]*r.y+t[8]*r.z+t[12],e.y=t[1]*r.x+t[5]*r.y+t[9]*r.z+t[13],e.z=t[2]*r.x+t[6]*r.y+t[10]*r.z+t[14],e}multiplyVector4(n,e){e=e||new d;var t=this.rawData,i=n.x,a=n.y,n=n.z,o=t[3]*i+t[7]*a+t[11]*n+t[15];return e.x=(t[0]*i+t[4]*a+t[8]*n+t[12])/(o=o||1),e.y=(t[1]*i+t[5]*a+t[9]*n+t[13])/o,e.z=(t[2]*i+t[6]*a+t[10]*n+t[14])/o,e.w=1,e}perspectiveB(r,e,t,i){return r=Math.tan(r*Math.PI/360)*t,e*=r,this.frustum(-e,e,-r,r,t,i)}transformVector4(o,e){var t=this.rawData,i=(e=e||new d,o.x),a=o.y,n=o.z,o=o.w;return e.x=i*t[0]+a*t[4]+n*t[8]+o*t[12],e.y=i*t[1]+a*t[5]+n*t[9]+o*t[13],e.z=i*t[2]+a*t[6]+n*t[10]+o*t[14],e.w=i*t[3]+a*t[7]+n*t[11]+o*t[15],e}perspectiveMultiplyPoint3(r,e){var t=d.HELP_2,i=this.rawData;return t.x=i[0]*r.x+i[4]*r.y+i[8]*r.z+i[12],t.y=i[1]*r.x+i[5]*r.y+i[9]*r.z+i[13],t.z=i[2]*r.x+i[6]*r.y+i[10]*r.z+i[14],r=i[3]*r.x+i[7]*r.y+i[11]*r.z+i[15],1e-7<Math.abs(r)?(e.x=t.x*(i=1/r),e.y=t.y*i,e.z=t.z*i,!0):(e.x=0,e.y=0,e.z=0,!1)}perspective(n,e,t,i){var a=this.rawData,n=n*ee/2,n=Math.cos(n)/Math.sin(n);a[0]=-n/e,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=n,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=i/(i-t),a[11]=1,a[12]=0,a[13]=0,a[14]=-t*i/(i-t),a[15]=0}ortho(r,e,t,i){var a=this.rawData;return a[0]=2/r,a[1]=0,a[2]=0,a[3]=0,a[4]=0,a[5]=2/e,a[6]=0,a[7]=0,a[8]=0,a[9]=0,a[10]=1/(i-t),a[11]=0,a[12]=0,a[13]=0,a[14]=t/(t-i),a[15]=1,this}orthoZO(r,e,t,i,a,u){var o=this.rawData,h=1/(r-e),l=1/(t-i),u=1/(a-u);return o[0]=-2*h,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=-2*l,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=u,o[11]=0,o[12]=(r+e)*h,o[13]=(i+t)*l,o[14]=a*u,o[15]=1,this}orthoOffCenter(r,e,t,i,a,n){var o=this.rawData;o[0]=2/(e-r),o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=2/(i-t),o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=1/(n-a),o[11]=0,o[12]=(r+e)/(r-e),o[13]=(i+t)/(t-i),o[14]=a/(a-n),o[15]=1}transformDir(r,u){var t,i,a,n,o,h=this.rawData,l=d.HELP_0,u=(u.crossProduct(r,l),u.dotProduct(r));1-1e-6<u?this.identity():(t=(r=(1-u)/l.dotProduct(l))*l.x,i=r*l.z,a=t*l.y,n=t*l.z,o=i*l.y,h[0]=u+t*l.x,h[1]=a-l.z,h[2]=n+l.y,h[4]=a+l.z,h[5]=u+r*l.y*l.y,h[6]=o-l.x,h[8]=n-l.y,h[9]=o+l.x,h[10]=u+i*l.z,h[3]=0,h[7]=0,h[11]=0,h[15]=1)}append(r){var e=this.rawData,t=e[0],i=e[4],a=e[8],n=e[12],o=e[1],h=e[5],l=e[9],u=e[13],c=e[2],f=e[6],p=e[10],m=e[14],_=e[3],v=e[7],S=e[11],T=e[15];e[0]=t*r.rawData[0]+o*r.rawData[4]+c*r.rawData[8]+_*r.rawData[12],e[1]=t*r.rawData[1]+o*r.rawData[5]+c*r.rawData[9]+_*r.rawData[13],e[2]=t*r.rawData[2]+o*r.rawData[6]+c*r.rawData[10]+_*r.rawData[14],e[3]=t*r.rawData[3]+o*r.rawData[7]+c*r.rawData[11]+_*r.rawData[15],e[4]=i*r.rawData[0]+h*r.rawData[4]+f*r.rawData[8]+v*r.rawData[12],e[5]=i*r.rawData[1]+h*r.rawData[5]+f*r.rawData[9]+v*r.rawData[13],e[6]=i*r.rawData[2]+h*r.rawData[6]+f*r.rawData[10]+v*r.rawData[14],e[7]=i*r.rawData[3]+h*r.rawData[7]+f*r.rawData[11]+v*r.rawData[15],e[8]=a*r.rawData[0]+l*r.rawData[4]+p*r.rawData[8]+S*r.rawData[12],e[9]=a*r.rawData[1]+l*r.rawData[5]+p*r.rawData[9]+S*r.rawData[13],e[10]=a*r.rawData[2]+l*r.rawData[6]+p*r.rawData[10]+S*r.rawData[14],e[11]=a*r.rawData[3]+l*r.rawData[7]+p*r.rawData[11]+S*r.rawData[15],e[12]=n*r.rawData[0]+u*r.rawData[4]+m*r.rawData[8]+T*r.rawData[12],e[13]=n*r.rawData[1]+u*r.rawData[5]+m*r.rawData[9]+T*r.rawData[13],e[14]=n*r.rawData[2]+u*r.rawData[6]+m*r.rawData[10]+T*r.rawData[14],e[15]=n*r.rawData[3]+u*r.rawData[7]+m*r.rawData[11]+T*r.rawData[15]}add(k){var e=this.rawData,t=e[0],i=e[4],a=e[8],n=e[12],o=e[1],h=e[5],l=e[9],u=e[13],c=e[2],f=e[6],p=e[10],m=e[14],_=e[3],v=e[7],S=e[11],T=e[15],y=k.rawData[0],C=k.rawData[4],I=k.rawData[8],L=k.rawData[12],R=k.rawData[1],O=k.rawData[5],N=k.rawData[9],j=k.rawData[13],de=k.rawData[2],W=k.rawData[6],H=k.rawData[10],te=k.rawData[14],Ie=k.rawData[3],_e=k.rawData[7],Re=k.rawData[11],k=k.rawData[15];return e[0]=t+y,e[1]=o+R,e[2]=c+de,e[3]=_+Ie,e[4]=i+C,e[5]=h+O,e[6]=f+W,e[7]=v+_e,e[8]=a+I,e[9]=l+N,e[10]=p+H,e[11]=S+Re,e[12]=n+L,e[13]=u+j,e[14]=m+te,e[15]=T+k,this}sub(k){var e=this.rawData,t=e[0],i=e[4],a=e[8],n=e[12],o=e[1],h=e[5],l=e[9],u=e[13],c=e[2],f=e[6],p=e[10],m=e[14],_=e[3],v=e[7],S=e[11],T=e[15],y=k.rawData[0],C=k.rawData[4],I=k.rawData[8],L=k.rawData[12],R=k.rawData[1],O=k.rawData[5],N=k.rawData[9],j=k.rawData[13],de=k.rawData[2],W=k.rawData[6],H=k.rawData[10],te=k.rawData[14],Ie=k.rawData[3],_e=k.rawData[7],Re=k.rawData[11],k=k.rawData[15];return e[0]=t-y,e[1]=o-R,e[2]=c-de,e[3]=_-Ie,e[4]=i-C,e[5]=h-O,e[6]=f-W,e[7]=v-_e,e[8]=a-I,e[9]=l-N,e[10]=p-H,e[11]=S-Re,e[12]=n-L,e[13]=u-j,e[14]=m-te,e[15]=T-k,this}mult(r){var e=this.rawData;return e[0]*=r,e[1]*=r,e[2]*=r,e[3]*=r,e[4]*=r,e[5]*=r,e[6]*=r,e[7]*=r,e[8]*=r,e[9]*=r,e[10]*=r,e[11]*=r,e[12]*=r,e[13]*=r,e[14]*=r,e[15]*=r,this}appendRotation(r,e){e=P.getAxisRotation(e.x,e.y,e.z,r),this.append(e)}createByRotation(a,e){var t=P.helpMatrix,a=a*ee,i=Math.sin(a),a=Math.cos(a);e.x==1&&(t.rawData[0]=1,t.rawData[1]=0,t.rawData[2]=0,t.rawData[3]=0,t.rawData[4]=0,t.rawData[5]=a,t.rawData[6]=i,t.rawData[7]=0,t.rawData[8]=0,t.rawData[9]=-i,t.rawData[10]=a,t.rawData[11]=0,t.rawData[12]=0,t.rawData[13]=0,t.rawData[14]=0,t.rawData[15]=1),e.y==1&&(t.rawData[0]=a,t.rawData[1]=0,t.rawData[2]=-i,t.rawData[3]=0,t.rawData[4]=0,t.rawData[5]=1,t.rawData[6]=0,t.rawData[7]=0,t.rawData[8]=i,t.rawData[9]=0,t.rawData[10]=a,t.rawData[11]=0,t.rawData[12]=0,t.rawData[13]=0,t.rawData[14]=0,t.rawData[15]=1),e.z==1&&(t.rawData[0]=a,t.rawData[1]=i,t.rawData[2]=0,t.rawData[3]=0,t.rawData[4]=-i,t.rawData[5]=a,t.rawData[6]=0,t.rawData[7]=0,t.rawData[8]=0,t.rawData[9]=0,t.rawData[10]=1,t.rawData[11]=0,t.rawData[12]=0,t.rawData[13]=0,t.rawData[14]=0,t.rawData[15]=1),this.append(t)}appendScale(r,e,t){P.helpMatrix.createByScale(r,e,t),this.append(P.helpMatrix)}createByScale(r,e,t){var i=this.rawData;i[0]=r,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=e,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=t,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1}appendTranslation(r,e,t){var i=this.rawData;i[12]+=r,i[13]+=e,i[14]+=t}clone(){var r=new P;return r.copyFrom(this),r}copyRowFrom(r,e){var t=this.rawData;switch(r){case 0:t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w;break;case 1:t[4]=e.x,t[5]=e.y,t[6]=e.z,t[7]=e.w;break;case 2:t[8]=e.x,t[9]=e.y,t[10]=e.z,t[11]=e.w;break;case 3:t[12]=e.x,t[13]=e.y,t[14]=e.z,t[15]=e.w}}copyRowTo(r,e){var t=this.rawData;switch(r){case 0:e.x=t[0],e.y=t[1],e.z=t[2],e.w=t[3];break;case 1:e.x=t[4],e.y=t[5],e.z=t[6],e.w=t[7];break;case 2:e.x=t[8],e.y=t[9],e.z=t[10],e.w=t[11];break;case 3:e.x=t[12],e.y=t[13],e.z=t[14],e.w=t[15]}}copyFrom(r){var e=this.rawData;return e[0]=r.rawData[0],e[1]=r.rawData[1],e[2]=r.rawData[2],e[3]=r.rawData[3],e[4]=r.rawData[4],e[5]=r.rawData[5],e[6]=r.rawData[6],e[7]=r.rawData[7],e[8]=r.rawData[8],e[9]=r.rawData[9],e[10]=r.rawData[10],e[11]=r.rawData[11],e[12]=r.rawData[12],e[13]=r.rawData[13],e[14]=r.rawData[14],e[15]=r.rawData[15],this}copyRawDataTo(r,e=0,t){var i=this.rawData;r[0+e]=i[0],r[1+e]=i[1],r[2+e]=i[2],r[3+e]=i[3],r[4+e]=i[4],r[5+e]=i[5],r[6+e]=i[6],r[7+e]=i[7],r[8+e]=i[8],r[9+e]=i[9],r[10+e]=i[10],r[11+e]=i[11],r[12+e]=i[12],r[13+e]=i[13],r[14+e]=i[14],r[15+e]=i[15]}copyColFrom(r,e){var t=this.rawData;switch(r){case 0:t[0]=e.x,t[4]=e.y,t[8]=e.z,t[12]=e.w;break;case 1:t[1]=e.x,t[5]=e.y,t[9]=e.z,t[13]=e.w;break;case 2:t[2]=e.x,t[6]=e.y,t[10]=e.z,t[14]=e.w;break;case 3:t[3]=e.x,t[7]=e.y,t[11]=e.z,t[15]=e.w}}copyColTo(r,e){var t=this.rawData;switch(r){case 0:e.x=t[0],e.y=t[4],e.z=t[8],e.w=t[12];break;case 1:e.x=t[1],e.y=t[5],e.z=t[9],e.w=t[13];break;case 2:e.x=t[2],e.y=t[6],e.z=t[10],e.w=t[14];break;case 3:e.x=t[3],e.y=t[7],e.z=t[11],e.w=t[15]}}copyToMatrix3D(r){r.rawData=this.rawData.slice(0)}makeRotationFromQuaternion(r){return this.compose(P._zero,r,P._one),this}decompose(r="eulerAngles",i){var t=$.CALCULATION_QUATERNION,i=i||P._prs,a=(this.copyRawDataTo(P.decomposeRawData),P.decomposeRawData),n=i[0],o=(n.x=a[12],n.y=a[13],n.z=a[14],a[12]=0,a[13]=0,a[14]=0,i[2]);o.x=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]),o.y=Math.sqrt(a[4]*a[4]+a[5]*a[5]+a[6]*a[6]),o.z=Math.sqrt(a[8]*a[8]+a[9]*a[9]+a[10]*a[10]),a[0]*(a[5]*a[10]-a[6]*a[9])-a[1]*(a[4]*a[10]-a[6]*a[8])+a[2]*(a[4]*a[9]-a[5]*a[8])<0&&(o.z=-o.z),a[0]/=o.x,a[1]/=o.x,a[2]/=o.x,a[4]/=o.y,a[5]/=o.y,a[6]/=o.y,a[8]/=o.z,a[9]/=o.z,a[10]/=o.z;let h=i[1],l;switch(r){case at.AXIS_ANGLE:h.w=Math.acos((a[0]+a[5]+a[10]-1)/2);var u=Math.sqrt((a[6]-a[9])*(a[6]-a[9])+(a[8]-a[2])*(a[8]-a[2])+(a[1]-a[4])*(a[1]-a[4]));h.x=(a[6]-a[9])/u,h.y=(a[8]-a[2])/u,h.z=(a[1]-a[4])/u;break;case at.QUATERNION:0<(l=a[0]+a[5]+a[10])?(h.w=Math.sqrt(1+l)/2,h.x=(a[6]-a[9])/(4*h.w),h.y=(a[8]-a[2])/(4*h.w),h.z=(a[1]-a[4])/(4*h.w)):a[0]>a[5]&&a[0]>a[10]?(h.x=Math.sqrt(1+a[0]-a[5]-a[10])/2,h.w=(a[6]-a[9])/(4*h.x),h.y=(a[1]+a[4])/(4*h.x),h.z=(a[8]+a[2])/(4*h.x)):a[5]>a[10]?(h.y=Math.sqrt(1+a[5]-a[0]-a[10])/2,h.x=(a[1]+a[4])/(4*h.y),h.w=(a[8]-a[2])/(4*h.y),h.z=(a[6]+a[9])/(4*h.y)):(h.z=Math.sqrt(1+a[10]-a[0]-a[5])/2,h.x=(a[8]+a[2])/(4*h.z),h.y=(a[6]+a[9])/(4*h.z),h.w=(a[1]-a[4])/(4*h.z));break;case at.EULER_ANGLES:0<(l=a[0]+a[5]+a[10])?(t.w=Math.sqrt(1+l)/2,t.x=(a[6]-a[9])/(4*t.w),t.y=(a[8]-a[2])/(4*t.w),t.z=(a[1]-a[4])/(4*t.w)):a[0]>a[5]&&a[0]>a[10]?(t.x=Math.sqrt(1+a[0]-a[5]-a[10])/2,t.w=(a[6]-a[9])/(4*t.x),t.y=(a[1]+a[4])/(4*t.x),t.z=(a[8]+a[2])/(4*t.x)):a[5]>a[10]?(h.y=Math.sqrt(1+a[5]-a[0]-a[10])/2,t.x=(a[1]+a[4])/(4*t.y),t.w=(a[8]-a[2])/(4*t.y),t.z=(a[6]+a[9])/(4*t.y)):(t.z=Math.sqrt(1+a[10]-a[0]-a[5])/2,t.x=(a[8]+a[2])/(4*t.z),t.y=(a[6]+a[9])/(4*t.z),t.w=(a[1]-a[4])/(4*t.z)),t.getEulerAngles(h)}return i[0]=n,i[1]=h,i[2]=o,i}static getEuler(r,e,t=!0,i){return r=r||new d,P._getEulerMatrix.makeRotationFromQuaternion(e).makeEuler(r,t,i),r}compose(r,p,v){var i=this.rawData,o=p.x,l=p.y,u=p.z,p=p.w,c=o+o,f=l+l,m=u+u,a=o*c,n=o*f,o=o*m,h=l*f,l=l*m,u=u*m,c=p*c,f=p*f,p=p*m,m=v.x,_=v.y,v=v.z;return i[0]=(1-(h+u))*m,i[1]=(n+p)*m,i[2]=(o-f)*m,i[3]=0,i[4]=(n-p)*_,i[5]=(1-(a+u))*_,i[6]=(l+c)*_,i[7]=0,i[8]=(o+f)*v,i[9]=(l-c)*v,i[10]=(1-(a+h))*v,i[11]=0,i[12]=r.x,i[13]=r.y,i[14]=r.z,i[15]=1,this}deltaTransformVector(n,e){e=e||new d;var t=this.rawData,i=n.x,a=n.y,n=n.z;return e.x=i*t[0]+a*t[4]+n*t[8],e.y=i*t[1]+a*t[5]+n*t[9],e.z=i*t[2]+a*t[6]+n*t[10],e.w=i*t[3]+a*t[7]+n*t[11],e}identity(){var r=this.rawData;return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}fill(r){var e=this.rawData;e[1]=r,e[2]=r,e[3]=r,e[4]=r,e[6]=r,e[7]=r,e[8]=r,e[9]=r,e[11]=r,e[12]=r,e[13]=r,e[14]=r,e[0]=r,e[5]=r,e[10]=r,e[15]=r}invers33(){var r=this.rawData,e=r[5]*r[10]-r[9]*r[6],t=r[8]*r[6]-r[4]*r[10],i=r[4]*r[9]-r[8]*r[5],a=r[9]*r[2]-r[1]*r[10],n=r[0]*r[10]-r[8]*r[2],o=r[8]*r[1]-r[0]*r[9],h=r[1]*r[6]-r[5]*r[2],l=r[4]*r[2]-r[0]*r[6],u=r[0]*r[5]-r[4]*r[1],c=r[0]*e+r[4]*a+r[8]*h;1e-11<Math.abs(c)&&(r[0]=(c=1/c)*e,r[4]=c*t,r[8]=c*i,r[1]=c*a,r[5]=c*n,r[9]=c*o,r[2]=c*h,r[6]=c*l,r[10]=c*u)}invert(){var r,e,t,i,a,n,o,h,l,u,c,f,p,m,_,v,S=this.determinant,T=1e-11<Math.abs(S),y=this.rawData;return T&&(r=y[0],e=y[4],t=y[8],i=y[12],a=y[1],n=y[5],o=y[9],h=y[13],l=y[2],u=y[6],c=y[10],f=y[14],p=y[3],m=y[7],_=y[11],v=y[15],y[0]=(S=1/S)*(n*(c*v-f*_)-o*(u*v-f*m)+h*(u*_-c*m)),y[1]=-S*(a*(c*v-f*_)-o*(l*v-f*p)+h*(l*_-c*p)),y[2]=S*(a*(u*v-f*m)-n*(l*v-f*p)+h*(l*m-u*p)),y[3]=-S*(a*(u*_-c*m)-n*(l*_-c*p)+o*(l*m-u*p)),y[4]=-S*(e*(c*v-f*_)-t*(u*v-f*m)+i*(u*_-c*m)),y[5]=S*(r*(c*v-f*_)-t*(l*v-f*p)+i*(l*_-c*p)),y[6]=-S*(r*(u*v-f*m)-e*(l*v-f*p)+i*(l*m-u*p)),y[7]=S*(r*(u*_-c*m)-e*(l*_-c*p)+t*(l*m-u*p)),y[8]=S*(e*(o*v-h*_)-t*(n*v-h*m)+i*(n*_-o*m)),y[9]=-S*(r*(o*v-h*_)-t*(a*v-h*p)+i*(a*_-o*p)),y[10]=S*(r*(n*v-h*m)-e*(a*v-h*p)+i*(a*m-n*p)),y[11]=-S*(r*(n*_-o*m)-e*(a*_-o*p)+t*(a*m-n*p)),y[12]=-S*(e*(o*f-h*c)-t*(n*f-h*u)+i*(n*c-o*u)),y[13]=S*(r*(o*f-h*c)-t*(a*f-h*l)+i*(a*c-o*l)),y[14]=-S*(r*(n*f-h*u)-e*(a*f-h*l)+i*(a*u-n*l)),y[15]=S*(r*(n*c-o*u)-e*(a*c-o*l)+t*(a*u-n*l))),T}transformPoint(n,e){var t=this.rawData,i=(e=e||new d,n.x),a=n.y,n=n.z;return e.x=i*t[0]+a*t[4]+n*t[8]+t[12],e.y=i*t[1]+a*t[5]+n*t[9]+t[13],e.z=i*t[2]+a*t[6]+n*t[10]+t[14],e}transformVector(n,e){var t=this.rawData,i=(e=e||new d,n.x),a=n.y,n=n.z;return e.x=i*t[0]+a*t[4]+n*t[8],e.y=i*t[1]+a*t[5]+n*t[9],e.z=i*t[2]+a*t[6]+n*t[10],e}transpose(){var r=this.rawData;for(let e=0;e<P.helpMatrix.rawData.length;e++)P.helpMatrix.rawData[e]=r[e];r[1]=P.helpMatrix.rawData[4],r[2]=P.helpMatrix.rawData[8],r[3]=P.helpMatrix.rawData[12],r[4]=P.helpMatrix.rawData[1],r[6]=P.helpMatrix.rawData[9],r[7]=P.helpMatrix.rawData[13],r[8]=P.helpMatrix.rawData[2],r[9]=P.helpMatrix.rawData[6],r[11]=P.helpMatrix.rawData[14],r[12]=P.helpMatrix.rawData[3],r[13]=P.helpMatrix.rawData[7],r[14]=P.helpMatrix.rawData[11]}get determinant(){var r=this.rawData;return(r[0]*r[5]-r[4]*r[1])*(r[10]*r[15]-r[14]*r[11])-(r[0]*r[9]-r[8]*r[1])*(r[6]*r[15]-r[14]*r[7])+(r[0]*r[13]-r[12]*r[1])*(r[6]*r[11]-r[10]*r[7])+(r[4]*r[9]-r[8]*r[5])*(r[2]*r[15]-r[14]*r[3])-(r[4]*r[13]-r[12]*r[5])*(r[2]*r[11]-r[10]*r[3])+(r[8]*r[13]-r[12]*r[9])*(r[2]*r[7]-r[6]*r[3])}getPosition(r){r=r||new d;var e=this.rawData;return r.x=e[12],r.y=e[13],r.z=e[14],r}get position(){return this._position.set(this.rawData[12],this.rawData[13],this.rawData[14]),this._position}set position(r){var e=this.rawData;e[12]=r.x,e[13]=r.y,e[14]=r.z}get scale(){var r=this.rawData;return new d(r[0],r[5],r[10])}set scale(r){var e=this.rawData;e[0]=r.x,e[5]=r.y,e[10]=r.z}toString(){var r=this.rawData;return"matrix3d("+Math.round(1e3*r[0])/1e3+","+Math.round(1e3*r[1])/1e3+","+Math.round(1e3*r[2])/1e3+","+Math.round(1e3*r[3])/1e3+","+Math.round(1e3*r[4])/1e3+","+Math.round(1e3*r[5])/1e3+","+Math.round(1e3*r[6])/1e3+","+Math.round(1e3*r[7])/1e3+","+Math.round(1e3*r[8])/1e3+","+Math.round(1e3*r[9])/1e3+","+Math.round(1e3*r[10])/1e3+","+Math.round(1e3*r[11])/1e3+","+Math.round(1e3*r[12])/1e3+","+Math.round(1e3*r[13])/1e3+","+Math.round(1e3*r[14])/1e3+","+Math.round(1e3*r[15])/1e3+")"}lerp(r,e,t){this.copyFrom(e).sub(r).mult(t).add(r)}get(r,e){return this.rawData[r+4*e]}set(r,e,t){this.rawData[r+4*e]=t}getMaxScaleOnAxis(){var t=this.rawData,r=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],e=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],t=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(r,e,t))}translate(a){var e=this.get(0,0)*a.x+this.get(0,1)*a.y+this.get(0,2)*a.z+this.get(0,3),t=this.get(1,0)*a.x+this.get(1,1)*a.y+this.get(1,2)*a.z+this.get(1,3),i=this.get(2,0)*a.x+this.get(2,1)*a.y+this.get(2,2)*a.z+this.get(2,3),a=this.get(3,0)*a.x+this.get(3,1)*a.y+this.get(3,2)*a.z+this.get(3,3);return this.set(0,3,e),this.set(1,3,t),this.set(2,3,i),this.set(3,3,a),this}setTRInverse(r,e){e=e.inverse(),$.quaternionToMatrix(e,this),this.translate(new d(-r.x,-r.y,-r.z))}setScale(r){return this.set(0,0,r.x),this.set(0,1,0),this.set(0,2,0),this.set(0,3,0),this.set(1,0,0),this.set(1,1,r.y),this.set(1,2,0),this.set(1,3,0),this.set(2,0,0),this.set(2,1,0),this.set(2,2,r.z),this.set(2,3,0),this.set(3,0,0),this.set(3,1,0),this.set(3,2,0),this.set(3,3,1),this}makeBasis(r,e,t){return this.setElements(r.x,e.x,t.x,0,r.y,e.y,t.y,0,r.z,e.z,t.z,0,0,0,0,1),this}makeRotationAxis(h,i){var t=Math.cos(i),i=Math.sin(i),a=1-t,n=h.x,o=h.y,h=h.z,l=a*n,u=a*o;return this.setElements(l*n+t,l*o-i*h,l*h+i*o,0,l*o+i*h,u*o+t,u*h-i*n,0,l*h-i*o,u*h+i*n,a*h*h+t,0,0,0,0,1),this}static transpose(t,e){e=e||new P;var t=t.rawData,i=e.rawData;return i[0]=t[0],i[1]=t[4],i[2]=t[8],i[3]=t[12],i[4]=t[1],i[5]=t[5],i[6]=t[9],i[7]=t[13],i[8]=t[2],i[9]=t[6],i[10]=t[10],i[11]=t[14],i[12]=t[3],i[13]=t[7],i[14]=t[11],i[15]=t[15],e}static inverse(t,e){e=e||new P;var t=t.rawData,i=e.rawData,a=(i[0]=t[5]*t[10]*t[15]-t[5]*t[14]*t[11]-t[6]*t[9]*t[15]+t[6]*t[13]*t[11]+t[7]*t[9]*t[14]-t[7]*t[13]*t[10],i[1]=-t[1]*t[10]*t[15]+t[1]*t[14]*t[11]+t[2]*t[9]*t[15]-t[2]*t[13]*t[11]-t[3]*t[9]*t[14]+t[3]*t[13]*t[10],i[2]=t[1]*t[6]*t[15]-t[1]*t[14]*t[7]-t[2]*t[5]*t[15]+t[2]*t[13]*t[7]+t[3]*t[5]*t[14]-t[3]*t[13]*t[6],i[3]=-t[1]*t[6]*t[11]+t[1]*t[10]*t[7]+t[2]*t[5]*t[11]-t[2]*t[9]*t[7]-t[3]*t[5]*t[10]+t[3]*t[9]*t[6],i[4]=-t[4]*t[10]*t[15]+t[4]*t[14]*t[11]+t[6]*t[8]*t[15]-t[6]*t[12]*t[11]-t[7]*t[8]*t[14]+t[7]*t[12]*t[10],i[5]=t[0]*t[10]*t[15]-t[0]*t[14]*t[11]-t[2]*t[8]*t[15]+t[2]*t[12]*t[11]+t[3]*t[8]*t[14]-t[3]*t[12]*t[10],i[6]=-t[0]*t[6]*t[15]+t[0]*t[14]*t[7]+t[2]*t[4]*t[15]-t[2]*t[12]*t[7]-t[3]*t[4]*t[14]+t[3]*t[12]*t[6],i[7]=t[0]*t[6]*t[11]-t[0]*t[10]*t[7]-t[2]*t[4]*t[11]+t[2]*t[8]*t[7]+t[3]*t[4]*t[10]-t[3]*t[8]*t[6],i[8]=t[4]*t[9]*t[15]-t[4]*t[13]*t[11]-t[5]*t[8]*t[15]+t[5]*t[12]*t[11]+t[7]*t[8]*t[13]-t[7]*t[12]*t[9],i[9]=-t[0]*t[9]*t[15]+t[0]*t[13]*t[11]+t[1]*t[8]*t[15]-t[1]*t[12]*t[11]-t[3]*t[8]*t[13]+t[3]*t[12]*t[9],i[10]=t[0]*t[5]*t[15]-t[0]*t[13]*t[7]-t[1]*t[4]*t[15]+t[1]*t[12]*t[7]+t[3]*t[4]*t[13]-t[3]*t[12]*t[5],i[11]=-t[0]*t[5]*t[11]+t[0]*t[9]*t[7]+t[1]*t[4]*t[11]-t[1]*t[8]*t[7]-t[3]*t[4]*t[9]+t[3]*t[8]*t[5],i[12]=-t[4]*t[9]*t[14]+t[4]*t[13]*t[10]+t[5]*t[8]*t[14]-t[5]*t[12]*t[10]-t[6]*t[8]*t[13]+t[6]*t[12]*t[9],i[13]=t[0]*t[9]*t[14]-t[0]*t[13]*t[10]-t[1]*t[8]*t[14]+t[1]*t[12]*t[10]+t[2]*t[8]*t[13]-t[2]*t[12]*t[9],i[14]=-t[0]*t[5]*t[14]+t[0]*t[13]*t[6]+t[1]*t[4]*t[14]-t[1]*t[12]*t[6]-t[2]*t[4]*t[13]+t[2]*t[12]*t[5],i[15]=t[0]*t[5]*t[10]-t[0]*t[9]*t[6]-t[1]*t[4]*t[10]+t[1]*t[8]*t[6]+t[2]*t[4]*t[9]-t[2]*t[8]*t[5],t[0]*i[0]+t[1]*i[4]+t[2]*i[8]+t[3]*i[12]);for(let n=0;n<16;n++)i[n]/=a;return e}makeEuler(r,e,t="XYZ"){var i=this.rawData,a=i[0],n=i[4],o=i[8],h=i[1],l=i[5],u=i[9],c=i[2],f=i[6],p=i[10];switch(t){case"XYZ":r.y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(r.x=Math.atan2(-u,p),r.z=Math.atan2(-n,a)):(r.x=Math.atan2(f,l),r.z=0);break;case"YXZ":r.x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(r.y=Math.atan2(o,p),r.z=Math.atan2(h,l)):(r.y=Math.atan2(-c,a),r.z=0);break;case"ZXY":r.x=Math.asin(ze(f,-1,1)),Math.abs(f)<.9999999?(r.y=Math.atan2(-c,p),r.z=Math.atan2(-n,l)):(r.y=0,r.z=Math.atan2(h,a));break;case"ZYX":r.y=Math.asin(-ze(c,-1,1)),Math.abs(c)<.9999999?(r.x=Math.atan2(f,p),r.z=Math.atan2(h,a)):(r.x=0,r.z=Math.atan2(-n,l));break;case"YZX":r.z=Math.asin(ze(h,-1,1)),Math.abs(h)<.9999999?(r.x=Math.atan2(-u,l),r.y=Math.atan2(-c,a)):(r.x=0,r.y=Math.atan2(o,p));break;case"XZY":r.z=Math.asin(-ze(n,-1,1)),Math.abs(n)<.9999999?(r.x=Math.atan2(f,l),r.y=Math.atan2(o,a)):(r.x=Math.atan2(-u,p),r.y=0)}return e&&r.multiplyScalar(Dr),r}frustum(r,e,t,i,a,n){var o=this.rawData;return o[0]=2*a/(e-r),o[1]=0,o[2]=(e+r)/(e-r),o[3]=0,o[4]=0,o[5]=2*a/(i-t),o[6]=(i+t)/(i-t),o[7]=0,o[8]=0,o[9]=0,o[10]=-(n+a)/(n-a),o[11]=-2*n*a/(n-a),o[12]=0,o[13]=0,o[14]=-1,o[15]=0,this}setElements(r,e,t,i,a,n,o,h,l,u,c,f,p,m,_,v){var S=this.rawData;return S[0]=r,S[4]=e,S[8]=t,S[12]=i,S[1]=a,S[5]=n,S[9]=o,S[13]=h,S[2]=l,S[6]=u,S[10]=c,S[14]=f,S[3]=p,S[7]=m,S[11]=_,S[15]=v,this}makeMatrix44ByQuaternion(r,e,t){this.identity(),$.quaternionToMatrix(t,this),this.appendTranslation(r.x,r.y,r.z),this.appendScale(e.x,e.y,e.z)}};let A=P;function Dn(r,e,t){for(let i=0;i<4;i++)t.rawData[i]=r.rawData[i]*e.rawData[0]+r.rawData[i+4]*e.rawData[1]+r.rawData[i+8]*e.rawData[2]+r.rawData[i+12]*e.rawData[3],t.rawData[i+4]=r.rawData[i]*e.rawData[4]+r.rawData[i+4]*e.rawData[5]+r.rawData[i+8]*e.rawData[6]+r.rawData[i+12]*e.rawData[7],t.rawData[i+8]=r.rawData[i]*e.rawData[8]+r.rawData[i+4]*e.rawData[9]+r.rawData[i+8]*e.rawData[10]+r.rawData[i+12]*e.rawData[11],t.rawData[i+12]=r.rawData[i]*e.rawData[12]+r.rawData[i+4]*e.rawData[13]+r.rawData[i+8]*e.rawData[14]+r.rawData[i+12]*e.rawData[15]}function Mi(y,e,t,a){var a=a.rawData,S=.5*(y.x*ee),T=.5*(y.y*ee),y=.5*(y.z*ee),n=Math.cos(S),S=Math.sin(S),_=Math.cos(T),T=Math.sin(T),v=Math.cos(y),y=Math.sin(y),C=(c=S*_*v-n*T*y)+c,o=(p=n*T*v+S*_*y)+p,h=(m=n*_*y-S*T*v)+m,l=c*C,u=c*o,c=c*h,f=p*o,p=p*h,m=m*h,_=(n=n*_*v+S*T*y)*C,v=n*o,S=n*h,T=t.x,y=t.y,C=t.z;a[0]=(1-(f+m))*T,a[1]=(u+S)*T,a[2]=(c-v)*T,a[3]=0,a[4]=(u-S)*y,a[5]=(1-(l+m))*y,a[6]=(p+_)*y,a[7]=0,a[8]=(c+v)*C,a[9]=(p-_)*C,a[10]=(1-(l+f))*C,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1}function In(C,e,i){var C=C.rawData,i=i.rawData,a=C[0],n=C[4],o=C[8],h=C[12],l=C[1],u=C[5],c=C[9],f=C[13],p=C[2],m=C[6],_=C[10],v=C[14],S=C[3],T=C[7],y=C[11],C=C[15];i[0]=a*e.rawData[0]+l*e.rawData[4]+p*e.rawData[8]+S*e.rawData[12],i[1]=a*e.rawData[1]+l*e.rawData[5]+p*e.rawData[9]+S*e.rawData[13],i[2]=a*e.rawData[2]+l*e.rawData[6]+p*e.rawData[10]+S*e.rawData[14],i[3]=a*e.rawData[3]+l*e.rawData[7]+p*e.rawData[11]+S*e.rawData[15],i[4]=n*e.rawData[0]+u*e.rawData[4]+m*e.rawData[8]+T*e.rawData[12],i[5]=n*e.rawData[1]+u*e.rawData[5]+m*e.rawData[9]+T*e.rawData[13],i[6]=n*e.rawData[2]+u*e.rawData[6]+m*e.rawData[10]+T*e.rawData[14],i[7]=n*e.rawData[3]+u*e.rawData[7]+m*e.rawData[11]+T*e.rawData[15],i[8]=o*e.rawData[0]+c*e.rawData[4]+_*e.rawData[8]+y*e.rawData[12],i[9]=o*e.rawData[1]+c*e.rawData[5]+_*e.rawData[9]+y*e.rawData[13],i[10]=o*e.rawData[2]+c*e.rawData[6]+_*e.rawData[10]+y*e.rawData[14],i[11]=o*e.rawData[3]+c*e.rawData[7]+_*e.rawData[11]+y*e.rawData[15],i[12]=h*e.rawData[0]+f*e.rawData[4]+v*e.rawData[8]+C*e.rawData[12],i[13]=h*e.rawData[1]+f*e.rawData[5]+v*e.rawData[9]+C*e.rawData[13],i[14]=h*e.rawData[2]+f*e.rawData[6]+v*e.rawData[10]+C*e.rawData[14],i[15]=h*e.rawData[3]+f*e.rawData[7]+v*e.rawData[11]+C*e.rawData[15]}function pa(y,C,I){var y=y.rawData,i=y[0],a=y[1],n=y[2],o=y[3],h=y[4],l=y[5],u=y[6],c=y[7],f=y[8],p=y[9],m=y[10],_=y[11],v=y[12],S=y[13],T=y[14],y=y[15],C=C.rawData,I=I.rawData,L=C[0],R=C[1],O=C[2],N=C[3];return I[0]=L*i+R*h+O*f+N*v,I[1]=L*a+R*l+O*p+N*S,I[2]=L*n+R*u+O*m+N*T,I[3]=L*o+R*c+O*_+N*y,L=C[4],R=C[5],O=C[6],N=C[7],I[4]=L*i+R*h+O*f+N*v,I[5]=L*a+R*l+O*p+N*S,I[6]=L*n+R*u+O*m+N*T,I[7]=L*o+R*c+O*_+N*y,L=C[8],R=C[9],O=C[10],N=C[11],I[8]=L*i+R*h+O*f+N*v,I[9]=L*a+R*l+O*p+N*S,I[10]=L*n+R*u+O*m+N*T,I[11]=L*o+R*c+O*_+N*y,L=C[12],R=C[13],O=C[14],N=C[15],I[12]=L*i+R*h+O*f+N*v,I[13]=L*a+R*l+O*p+N*S,I[14]=L*n+R*u+O*m+N*T,I[15]=L*o+R*c+O*_+N*y,I}s(A,"blockBytes",64),s(A,"block",16),s(A,"allocCount",0),s(A,"maxCount",2e5),s(A,"useCount",0),s(A,"buffer"),s(A,"wasmMatrixPtr",0),s(A,"matrixBytes"),s(A,"globalMatrixRef"),s(A,"wasm"),s(A,"help_matrix_0"),s(A,"help_matrix_1"),s(A,"help_matrix_2"),s(A,"helpMatrix"),s(A,"helpMatrix2"),s(A,"_getEulerMatrix"),s(A,"_zero",new d(0,0,0)),s(A,"_one",new d(1,1,1)),s(A,"_prs",[new d,new d,new d]),s(A,"float32Array",new Float32Array(16).fill(0)),s(A,"decomposeRawData",new Float32Array(16).fill(0));var me=(r=>(r[r.None=0]="None",r[r.PointLight=1]="PointLight",r[r.DirectionLight=2]="DirectionLight",r[r.SpotLight=3]="SpotLight",r[r.SkyLight=4]="SkyLight",r))(me||{});class Jr extends Cr{constructor(){super(...arguments),s(this,"index",-1),s(this,"lightType",-1),s(this,"radius",.5),s(this,"linear",1),s(this,"lightPosition",new d),s(this,"lightMatrixIndex",-1),s(this,"direction",new d),s(this,"quadratic",.032),s(this,"lightColor",new x(1,1,1,1)),s(this,"intensity",1),s(this,"innerAngle",0),s(this,"outerAngle",1),s(this,"range",100),s(this,"castShadowIndex",-1),s(this,"lightTangent",d.FORWARD),s(this,"iesIndex",-1)}}s(Jr,"lightSize",24);const re=class{static init(){this._init||(this._init=!0,re.componentsUpdateList=new Map,re.componentsLateUpdateList=new Map,re.componentsBeforeUpdateList=new Map,re.componentsComputeList=new Map,re.graphicComponent=new Map,re.waitStartComponent=new Map)}static bindUpdate(r,e,t){this.init();let i=re.componentsUpdateList.get(r);i||(i=new Map,re.componentsUpdateList.set(r,i)),i.set(e,t)}static unBindUpdate(r,e){this.init(),r=re.componentsUpdateList.get(r),r&&r.delete(e)}static bindLateUpdate(r,e,t){this.init();let i=re.componentsLateUpdateList.get(r);i||(i=new Map,re.componentsLateUpdateList.set(r,i)),i.set(e,t)}static unBindLateUpdate(r,e){this.init(),r=re.componentsLateUpdateList.get(r),r&&r.delete(e)}static bindBeforeUpdate(r,e,t){this.init();let i=re.componentsBeforeUpdateList.get(r);i||(i=new Map,re.componentsBeforeUpdateList.set(r,i)),i.set(e,t)}static unBindBeforeUpdate(r,e){this.init(),r=re.componentsBeforeUpdateList.get(r),r&&r.delete(e)}static bindCompute(r,e,t){this.init();let i=re.componentsComputeList.get(r);i||(i=new Map,re.componentsComputeList.set(r,i)),i.set(e,t)}static unBindCompute(r,e){this.init(),r=re.componentsComputeList.get(r),r&&r.delete(e)}static bindGraphic(r,e,t){this.init();let i=re.graphicComponent.get(r);i||(i=new Map,re.graphicComponent.set(r,i)),i.set(e,t)}static unBindGraphic(r,e){this.init(),r=re.graphicComponent.get(r),r&&r.delete(e)}static appendWaitStart(r,e){this.init();var t=re.waitStartComponent.get(r);t?t.indexOf(e)==-1&&t.push(e):re.waitStartComponent.set(r,[e])}};let J=re;s(J,"componentsUpdateList"),s(J,"componentsLateUpdateList"),s(J,"componentsBeforeUpdateList"),s(J,"componentsComputeList"),s(J,"graphicComponent"),s(J,"waitStartComponent"),s(J,"_init",!1);class Ze{constructor(){s(this,"object3D",null),s(this,"eventDispatcher"),s(this,"_enable",!0),s(this,"__isStart",!1),this.eventDispatcher=new zt}get transform(){return this.object3D.transform}set enable(e){this._enable!=e&&(this._enable=e,this._enable?(e=this.onEnable)!=null&&e.call(this):(e=this.onDisable)!=null&&e.call(this))}get enable(){return this._enable}__init(e){this.init(e)}__start(){var e;this.transform&&this.transform.scene3D&&this.__isStart==0&&((e=this.start)!=null&&e.call(this),this.__isStart=!0),this.transform&&this.transform.scene3D&&(e=this.onEnable)!=null&&e.call(this),this.onUpdate&&this._onUpdate(this.onUpdate.bind(this)),this.onLateUpdate&&this._onLateUpdate(this.onLateUpdate.bind(this)),this.onBeforeUpdate&&this._onBeforeUpdate(this.onBeforeUpdate.bind(this)),this.onCompute&&this._onCompute(this.onCompute.bind(this)),this.onGraphic&&this._onGraphic(this.onGraphic.bind(this))}__stop(){var e;this.transform&&this.transform.scene3D&&(e=this.onDisable)!=null&&e.call(this),this._onUpdate(null),this._onLateUpdate(null),this._onBeforeUpdate(null),this._onCompute(null),this._onGraphic(null)}init(e){}start(){}stop(){}cloneTo(e){}_onUpdate(e){e!=null?J.bindUpdate(this.transform.view3D,this,e):J.unBindUpdate(this.transform.view3D,this)}_onLateUpdate(e){e!=null?J.bindLateUpdate(this.transform.view3D,this,e):J.unBindLateUpdate(this.transform.view3D,this)}_onBeforeUpdate(e){e!=null?J.bindBeforeUpdate(this.transform.view3D,this,e):J.unBindBeforeUpdate(this.transform.view3D,this)}_onCompute(e){e!=null?J.bindCompute(this.transform.view3D,this,e):J.unBindCompute(this.transform.view3D,this)}_onGraphic(e){e!=null?J.bindGraphic(this.transform.view3D,this,e):J.unBindGraphic(this.transform.view3D,this)}destroy(e){this.enable=!1,this.stop(),this._onBeforeUpdate(null),this._onUpdate(null),this._onLateUpdate(null),this.onEnable=null,this.onDisable=null,this.onUpdate=null,this.onLateUpdate=null,this.onBeforeUpdate=null,this.onCompute=null,this.onGraphic=null}}class xi{constructor(){s(this,"value",0),s(this,"inv_base",0)}static get(e,t){let i=0,a=1/t;for(;0<e;)i+=e%t*a,e/=t,a/=t;return i}getBase(e,t){let i=this.inv_base=1/t;for(;0<e;)this.value+=i*(e%t),e/=t,i*=this.inv_base}next(){var e=1-this.value-1e-7;if(this.inv_base<e)this.value+=this.inv_base;else{let t=this.inv_base,i;for(;i=t,(t*=this.inv_base)>=e;);this.value+=i+t-1}}get(){return this.value}}const Ht=class{constructor(r,e){s(this,"origin",new d),s(this,"length",Number.MAX_VALUE),s(this,"_vector",new d),s(this,"_dir",new d),s(this,"_v0",new d),s(this,"_v1",new d),s(this,"_v2",new d),s(this,"_E1",new d),s(this,"_E2",new d),s(this,"_P",new d),s(this,"_T",new d),s(this,"_Q",new d),this.origin.copyFrom(r||new d),this._dir.copyFrom(e||new d),this._dir.normalize()}get direction(){return this._dir}set direction(r){this._dir.copyFrom(r),this._dir.normalize()}clone(){return new Ht(this.origin,this.direction)}intersectBox(_,e){e=e||new d;let t=this.direction,i=this.origin,a,n,o,h,l,u;var c=1/t.x,f=1/t.y,p=1/t.z,m=_.min,_=_.max;return a=((0<=c?m:_).x-i.x)*c,n=((0<=c?_:m).x-i.x)*c,o=((0<=f?m:_).y-i.y)*f,h=((0<=f?_:m).y-i.y)*f,a>h||o>n||(o>a&&(a=o),h<n&&(n=h),l=((0<=p?m:_).z-i.z)*p,u=((0<=p?_:m).z-i.z)*p,a>u)||l>n||(l>a&&(a=l),(n=u<n?u:n)<0)?null:this.pointAt(0<=a?a:n,e)}pointAt(r,e){return(e=e||new d).copy(this.direction),e.multiplyScalar(r),e.add(this.origin,e),e}copy(r){return this.origin.copy(r.origin),this.direction.copy(r.direction),this._dir.copy(r._dir),this.length=r.length,this}setApproxDirection(r){this._dir=r.normalize()}setOrigin(r){this.origin.copyFrom(r)}getOrigin(){return this.origin}getPoint(r){return this._dir.scaleBy(r),this.origin.add(this._dir)}sqrDistToPoint(r){var e=this._dir,t=He(r.subtract(this.origin),e),e=He(e,e),t=this.getPoint(t/e);return Pn(r.subtract(t))}applyMatrix(r){this.origin=r.transformPoint(this.origin),this._dir=r.transformVector(this._dir)}pointInTriangle(o,c,n,a){var h=this._v0,l=this._v1,u=this._v2,a=(a.subtract(c,h),n.subtract(c,l),o.subtract(c,u),d.dot(h,h)),n=d.dot(h,l),o=d.dot(h,u),c=d.dot(l,l),h=d.dot(l,u),l=1/(a*c-n*n),u=(c*o-n*h)*l,c=(a*h-n*o)*l;return 0<=u&&0<=c&&u+c<1}intersectTriangle(r,e,t){var i=t.v1,a=t.v2,n=t.v3;a.subtract(i,this._E1),n.subtract(i,this._E2),e.cross(this._E2,this._P);let o=this._E1.dotProduct(this._P);return 0<o?r.subtract(i,this._T):(i.subtract(r,this._T),o=-o),o<1e-4||(t.u=this._T.dotProduct(this._P),t.u<0)||t.u>o||(this._T.cross(this._E1,this._Q),t.v=e.dotProduct(this._Q),t.v<0)||t.u+t.v>o?null:(a=new d,t.t0=t.t=this._E2.dotProduct(this._Q),n=1/o,t.t*=n,t.u*=n,t.v*=n,a.x=r.x+t.t*e.x,a.y=r.y+t.t*e.y,a.z=r.z+t.t*e.z,a)}intersectSphere(r,e,o,h){var o=r.subtract(o),a=d.dot(e,e),n=2*d.dot(o,e),o=n*n-4*a*(d.dot(o,o)-h*h),h=d.HELP_3;return o<0||(n=(-n-Math.sqrt(o))/(2*a))<0?null:(h.x=r.x+n*e.x,h.y=r.y+n*e.y,h.z=r.z+n*e.z,h)}intersectionSegment(r,e,t){var i,a,v=this.origin,n=d.HELP_0,l=d.HELP_1,o=d.HELP_2,h=d.HELP_3,l=(e.subtract(r,n),this._dir.scaleToRef(Ht._rayl,o),v.add(o,l),r.subtract(v,h),d.dot(n,n)),v=d.dot(n,o),m=d.dot(o,o),_=d.dot(n,h),u=d.dot(o,h),c=l*m-v*v,f=c,p=c,m=(c<Ht._smallnum?(i=0,f=1,a=u,p=m):(a=l*u-v*_,(i=v*u-m*_)<0?(i=0,a=u,p=m):f<i&&(i=f,a=u+v,p=m)),a<0?-_<(a=0)?i=0:l<-_?i=f:(i=-_,f=l):p<a&&(a=p,-_+v<0?i=0:l<-_+v?i=f:(i=-_+v,f=l)),c=Math.abs(i)<Ht._smallnum?0:i/f,u=Math.abs(a)<Ht._smallnum?0:a/p,d.HELP_4),_=(o.scaleToRef(u,m),d.HELP_5),v=(n.scaleToRef(c,_),_.add(h,_),d.HELP_6);return _.subtract(m,v),0<u&&u<=this._dir.length&&v.lengthSquared<t*t?((l=new d).copyFrom(e.subtract(r)),l.scaleBy(c),l.add(r,l),{out:l,length:_.length}):{out:null,length:-1}}get_vec(r,e){var t=d.HELP_1;return t.x=r.x-e.x,t.y=r.y-e.y,t.z=r.z-e.z,t}};let Ct=Ht;s(Ct,"_rayl",1e9),s(Ct,"_smallnum",1e-8);class $r{constructor(e=0,t=0,i=0,a=0){s(this,"x"),s(this,"y"),s(this,"w"),s(this,"h"),this.x=e,this.y=t,this.w=i,this.h=a}get width(){return this.w}set width(e){this.w=e}get height(){return this.h}set height(e){this.h=e}static pointInRect(e,t,i,a,n,o){return!(e<i||n<e||t<a||o<t)}clone(){return new $r(this.x,this.y,this.w,this.h)}copyFrom(e){this.x=e.x,this.y=e.y,this.w=e.w,this.h=e.h}copyTo(e){e.copyFrom(this)}inner(e,t){return!(e<this.x||e>this.x+this.width||t<this.y||t>this.y+this.height)}equal(e){return!(this.x!=e.x||this.y!=e.y||this.width!=e.width||this.height!=e.height)}equalArea(e,t,i,a){return!(this.x!=e||this.y!=t||this.width!=i||this.height!=a)}equalInnerArea(u){var t=this.x,i=this.y,a=this.x+this.width,n=this.y+this.height,o=u.x,h=u.y,l=u.x+u.width,u=u.y+u.height;return Math.max(t,o)<=Math.min(a,l)&&Math.max(i,h)<=Math.min(n,u)}innerArea(c,t){t=t||new $r;var i=this.x,h=this.y,a=this.x+this.width,u=this.y+this.height,n=c.x,l=c.y,o=c.x+c.width,c=c.y+c.height,h=Math.max(h,l),l=Math.min(u,c),u=Math.max(i,n),c=Math.min(o,a);return 0<=h&&0<=l&&0<=l-h&&0<c-u?(t.x=u,t.y=h,t.width=c-u,t.height=l-h):(t.x=0,t.y=0,t.width=0,t.height=0),t}setTo(e,t,i,a){this.x=e,this.y=t,this.width=i,this.height=a}}class Rn{constructor(){s(this,"viewProj",new A),s(this,"planes"),s(this,"corners"),s(this,"_centerSize"),this._centerSize=new d,this.planes=[],this.corners=[];for(var e=0;e<6;e++)this.planes[e]=new d;for(e=0;e<8;e++)this.corners[e]=new d}genBox(e){let t=0,i=9999999,a=9999999,n=9999999,o=-9999999,h=-9999999,l=-9999999;for(let c=0;c<2;++c)for(let f=0;f<2;++f)for(let p=0;p<2;++p){var u=this.corners[t];u.set(2*c-1,2*f-1,p,1),e.transformVector4(u,u),u.div(u.w,u),t++,i=Math.min(u.x,i),a=Math.min(u.y,a),n=Math.min(u.z,n),o=Math.max(u.x,o),h=Math.max(u.y,h),l=Math.max(u.z,l)}return this._centerSize.x=o-i,this._centerSize.y=h-a,this._centerSize.x=l-n,{minX:i,minY:a,minZ:n,maxX:o,maxY:h,maxZ:l}}setFrustumCorners(e){let t=0;for(let a=0;a<2;++a)for(let n=0;n<2;++n)for(let o=0;o<2;++o){var i=this.corners[t];i.set(2*a-1,2*n-1,o,1),e.transformVector4(i,i),i.div(i.w,i),t++}}update(t){var t=t.rawData,i=(this.planes[0].x=t[3]-t[0],this.planes[0].y=t[7]-t[4],this.planes[0].z=t[11]-t[8],this.planes[0].w=t[15]-t[12],Math.sqrt(this.planes[0].x*this.planes[0].x+this.planes[0].y*this.planes[0].y+this.planes[0].z*this.planes[0].z));this.planes[0].x/=i,this.planes[0].y/=i,this.planes[0].z/=i,this.planes[0].w/=i,this.planes[1].x=t[3]+t[0],this.planes[1].y=t[7]+t[4],this.planes[1].z=t[11]+t[8],this.planes[1].w=t[15]+t[12],i=Math.sqrt(this.planes[1].x*this.planes[1].x+this.planes[1].y*this.planes[1].y+this.planes[1].z*this.planes[1].z),this.planes[1].x/=i,this.planes[1].y/=i,this.planes[1].z/=i,this.planes[1].w/=i,this.planes[2].x=t[3]+t[1],this.planes[2].y=t[7]+t[5],this.planes[2].z=t[11]+t[9],this.planes[2].w=t[15]+t[13],i=Math.sqrt(this.planes[2].x*this.planes[2].x+this.planes[2].y*this.planes[2].y+this.planes[2].z*this.planes[2].z),this.planes[2].x/=i,this.planes[2].y/=i,this.planes[2].z/=i,this.planes[2].w/=i,this.planes[3].x=t[3]-t[1],this.planes[3].y=t[7]-t[5],this.planes[3].z=t[11]-t[9],this.planes[3].w=t[15]-t[13],i=Math.sqrt(this.planes[3].x*this.planes[3].x+this.planes[3].y*this.planes[3].y+this.planes[3].z*this.planes[3].z),this.planes[3].x/=i,this.planes[3].y/=i,this.planes[3].z/=i,this.planes[3].w/=i,this.planes[4].x=t[3]-t[2],this.planes[4].y=t[7]-t[6],this.planes[4].z=t[11]-t[10],this.planes[4].w=t[15]-t[14],i=Math.sqrt(this.planes[4].x*this.planes[4].x+this.planes[4].y*this.planes[4].y+this.planes[4].z*this.planes[4].z),this.planes[4].x/=i,this.planes[4].y/=i,this.planes[4].z/=i,this.planes[4].w/=i,this.planes[5].x=t[3]+t[2],this.planes[5].y=t[7]+t[6],this.planes[5].z=t[11]+t[10],this.planes[5].w=t[15]+t[14],i=Math.sqrt(this.planes[5].x*this.planes[5].x+this.planes[5].y*this.planes[5].y+this.planes[5].z*this.planes[5].z),this.planes[5].x/=i,this.planes[5].y/=i,this.planes[5].z/=i,this.planes[5].w/=i}containsPoint(e){for(var t=0;t<6;t++)if(this.planes[t].x*e.x+this.planes[t].y*e.y+this.planes[t].z*e.z+this.planes[t].w<=0)return!1;return!0}containsSphere(e){let t=e.bound,i=0,a,n,o=e.transform.worldPosition,h=t.radius,l=t.center.x+o.x,u=t.center.y+o.y,c=t.center.z+o.z,f=this.planes,p;for(n=0;n<6;n++){if((a=(p=f[n]).x*l+p.y*u+p.z*c+p.w)<=-h)return 0;h<a&&i++}return i===6?2:1}containsBox(e){let t=e.bound,i=0,a,n;e.updateBound();var o,h=2*Math.max(t.size.x,t.size.y,t.size.z),l=t.center.x,u=t.center.y,c=t.center.z,f=this.planes;for(n=0;n<6;n++){if((a=(o=f[n]).x*l+o.y*u+o.z*c+o.w)<=-h)return 0;h<a&&i++}return i===6?2:1}}var oe=(r=>(r[r.ortho=0]="ortho",r[r.perspective=1]="perspective",r[r.shadow=2]="shadow",r))(oe||{});class Vi extends Ze{constructor(){super(),s(this,"fov",1),s(this,"name"),s(this,"aspect",1),s(this,"near",1),s(this,"far",5e3),s(this,"viewPort",new $r),s(this,"frustum"),s(this,"isShadowCamera",!1),s(this,"_projectionMatrixInv",new A),s(this,"_projectionMatrix",new A),s(this,"_viewMatrix",new A),s(this,"_unprojection",new A),s(this,"_pvMatrixInv",new A),s(this,"_pvMatrix",new A),s(this,"_halfw"),s(this,"_halfh"),s(this,"_ray"),s(this,"lookTarget"),s(this,"type",oe.perspective),s(this,"cubeShadowCameras",[]),s(this,"_haltonSeq"),s(this,"_jitterOffsetList"),s(this,"_useJitterProjection",!1),s(this,"_jitterFrameIndex",0),s(this,"_sampleIndex",0),s(this,"_jitterX",0),s(this,"_jitterY",0)}get projectionMatrix(){return this._projectionMatrix}init(){super.init(),this._ray=new Ct,this.frustum=new Rn,this.viewPort.x=0,this.viewPort.y=0,this.viewPort.w=M.presentationSize[0],this.viewPort.h=M.presentationSize[1],this.lookTarget=new d(0,0,0)}perspective(e,t,i,a){this.fov=e,this.aspect=t,this.near=i,this.far=a,this._projectionMatrix.perspective(e,t,i,a),this.type=oe.perspective}ortho(e,t,i,a){this.near=Math.max(i,.1),this.far=a,this._projectionMatrix.ortho(e,t,i,a),this.type=oe.ortho}orthoOffCenter(e,t,i,a,n,o){this.near=Math.max(n,.01),this.far=o,this._projectionMatrix.orthoOffCenter(e,t,i,a,n,o),this.type=oe.ortho}orthoZo(e,t,i,a,n,o){this.near=Math.max(n,.01),this.far=o,this._projectionMatrix.orthoZO(e,t,i,a,n,o),this.type=oe.ortho}get viewMatrix(){return this._viewMatrix.copyFrom(this.transform.worldMatrix),this._viewMatrix.invert(),this._viewMatrix}get shadowViewMatrix(){return this._viewMatrix.copyFrom(this.transform.worldMatrix),this._viewMatrix.appendScale(1,1,1),this._viewMatrix.invert(),this._viewMatrix}object3DToScreenRay(e,t=null){return t=t||new d(0,0,0,1),this._halfw=.5*this.viewPort.width,this._halfh=.5*this.viewPort.height,St.transformVector(this.viewMatrix,e,t),this.project(t,t),t.x=this._halfw+t.x*this._halfw,t.y=this.viewPort.height-(this._halfh-t.y*this._halfh),t}screenRayToObject3D(e,t=null){t=t||new d,this._halfw=.5*this.viewPort.width,this._halfh=.5*this.viewPort.height;var i=e.x,a=e.y;return t.x=i/this.viewPort.width-.25,t.y=a/this.viewPort.height-.25,this.unProject(t.x,t.y,e.z,t),t}get pvMatrix(){return pa(this._projectionMatrix,this.viewMatrix,this._pvMatrix),this._pvMatrix}get pvMatrix2(){return pa(this._projectionMatrix,this.transform.worldMatrix,this._pvMatrix),this._pvMatrix}get pvMatrixInv(){var e=this._pvMatrixInv.copyFrom(this.pvMatrix);return e.invert(),e}get projectionMatrixInv(){return this._projectionMatrixInv.copyFrom(this._projectionMatrix),this._projectionMatrixInv.invert(),this._projectionMatrixInv}unProject(e,t,i,a){return(a=a||new d).x=e,a.y=-t,a.z=i,a.w=1,a.x*=i,a.y*=i,this._unprojection.copyFrom(this._projectionMatrix),this._unprojection.invert(),St.transformVector(this._unprojection,a,a),a.z=i,a}project(e,t){return this._projectionMatrix.perspectiveMultiplyPoint3(e,t),t.x=t.x/t.w,t.y=-t.y/t.w,t.z=e.z,t}screenPointToRay(e,t){let i=this._ray,a=xe.UnProjection(e,t,.01,this),n=xe.UnProjection(e,t,1,this);return n=n.subtract(a).normalize(),i.origin.copyFrom(a),i.direction=n,i}screenPointToWorld(e,t,i){return xe.UnProjection(e,t,i,this)}worldToScreenPoint(e,t){return xe.Projection(e,this,t)}lookAt(e,t,i=d.Y_AXIS){this.transform.lookAt(e,t,i),t&&this.lookTarget.copyFrom(t)}resetProjectMatrix(){this.perspective(this.fov,this.aspect,this.near,this.far)}onUpdate(){this.type==oe.perspective&&(this.aspect=M.aspect,this.resetProjectMatrix()),this._useJitterProjection&&this.getJitteredProjectionMatrix(),this.frustum.update(this.pvMatrix)}get jitterFrameIndex(){return this._jitterFrameIndex}get jitterX(){return this._jitterX}get jitterY(){return this._jitterY}enableJitterProjection(e){this._jitterFrameIndex=0,this._useJitterProjection=e,this._haltonSeq||(this._haltonSeq=new xi),this._jitterOffsetList=[];for(let i=0;i<8;i++){var t=this.generateRandomOffset();this._jitterOffsetList.push(t)}this._jitterOffsetList.reverse()}generateRandomOffset(){var e=new Q(xi.get(1+(1023&this._sampleIndex),2)-.5,xi.get(1+(1023&this._sampleIndex),3)-.5);return 8<=++this._sampleIndex&&(this._sampleIndex=0),e}getJitteredProjectionMatrix(){var i=b.setting.render.postProcessing.taa,e=this._projectionMatrix,a=i.temporalJitterScale,i=this._jitterFrameIndex%i.jitterSeedCount,t=this._jitterOffsetList[i].x*a,i=this._jitterOffsetList[i].y*a,a=e.get(0,2),n=e.get(1,2);this._jitterX=t/this.viewPort.width,this._jitterY=i/this.viewPort.height,a+=this._jitterX,n+=this._jitterY,e.set(0,2,a),e.set(1,2,n),this._jitterFrameIndex++}getCastShadowLightSpaceMatrix(e,t){var i=this.frustum,n=this.projectionMatrixInv,a=this.transform.worldMatrix,n=(A.helpMatrix.copyFrom(n),A.helpMatrix.multiply(a),i.setFrustumCorners(A.helpMatrix),i.corners),o=d.HELP_6;o.set(0,0,0);for(const m of n)o.add(m,o);o.div(n.length,o),a=d.HELP_5,a.copyFrom(o),d.HELP_0.copyFrom(t),a.add(d.HELP_0,a),e.lookAt(a,o,d.UP);let h=Number.MAX_VALUE,l=-Number.MAX_VALUE,u=Number.MAX_VALUE,c=-Number.MAX_VALUE,f=Number.MAX_VALUE,p=-Number.MAX_VALUE;for(const m of n)h=Math.min(h,m.x),l=Math.max(l,m.x),u=Math.min(u,m.y),c=Math.max(c,m.y),f=Math.min(f,m.z),p=Math.max(p,m.z);i=b.setting.shadow.shadowQuality,f<0?f*=i:f/=i,p<0?p/=i:p*=i,e.orthoOffCenter(h,l,u,c,f,p)}getWorldDirection(e){e=e||new d,this.transform.updateWorldMatrix();var t=this.transform._worldMatrix.rawData;return e.set(-t[8],-t[9],-t[10]).normalize()}}const Vr=class extends Ze{constructor(){super(),s(this,"eventPositionChange",new Pe(Vr.POSITION_ONCHANGE)),s(this,"eventRotationChange",new Pe(Vr.ROTATION_ONCHANGE)),s(this,"eventScaleChange",new Pe(Vr.SCALE_ONCHANGE)),s(this,"onPositionChange"),s(this,"onRotationChange"),s(this,"onScaleChange"),s(this,"_scene3d"),s(this,"_parent"),s(this,"_localPos"),s(this,"_localRot"),s(this,"_localRotQuat"),s(this,"_localScale"),s(this,"_forward",new d),s(this,"_back",new d),s(this,"_right",new d),s(this,"_left",new d),s(this,"_up",new d),s(this,"_down",new d),s(this,"_worldMatrix"),s(this,"_localChange",!0),s(this,"_targetPos"),this._worldMatrix=new A(!0),this._localPos=new d,this._localRot=new d,this._localRotQuat=new $,this._localScale=new d(1,1,1)}get targetPos(){return this._targetPos}set targetPos(r){this._targetPos=r}get parent(){return this._parent}set parent(r){let e=(t=this._parent)==null?void 0:t.object3D;var t=(this._parent=r)?r.scene3D:null;t?(this._scene3d=t,this.object3D.components.forEach(i=>{J.appendWaitStart(this.object3D,i)})):this.object3D.components.forEach(i=>{i.__stop()}),this.object3D.entityChildren.forEach(i=>{i.transform.parent=r?this:null}),r&&this.transform.updateWorldMatrix(),this.object3D.components.forEach(i=>{var a;(a=i.onParentChange)!=null&&a.call(i,e,(a=this._parent)==null?void 0:a.object3D)})}set enable(r){this.transform._scene3d&&r?super.enable=!0:super.enable=!1,this.object3D.entityChildren.forEach(e=>{e.transform.enable=r})}get enable(){return this._enable}get scene3D(){return this._scene3d}set scene3D(r){this._scene3d=r}get view3D(){return this._scene3d&&this._scene3d.view?this._scene3d.view:null}awake(){}start(){}stop(){}notifyLocalChange(){this._localChange=!0;var r=this.object3D.entityChildren;for(let e=0,t=r.length;e<t;e++)r[e].transform.notifyLocalChange()}get up(){return this.worldMatrix.transformVector(d.UP,this._up),this._up}set up(r){this._up.copyFrom(r),this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get down(){return this.worldMatrix.transformVector(d.DOWN,this._down),this._down}set down(r){this._down.copyFrom(r),this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get forward(){return this.worldMatrix.transformVector(d.FORWARD,this._forward),this._forward}set forward(r){this._forward.copyFrom(r),St.fromToRotation(d.FORWARD,this._forward,$.HELP_0),this.transform.localRotQuat=$.HELP_0,this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get back(){return this.worldMatrix.transformVector(d.BACK,this._back),this._back}set back(r){this._back.copyFrom(r),St.fromToRotation(d.BACK,this._back,$.HELP_0),this.transform.localRotQuat=$.HELP_0,this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get left(){return this.worldMatrix.transformVector(d.neg_X_AXIS,this._left),this._left}set left(r){this._left.copyFrom(r),this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get right(){return this.worldMatrix.transformVector(d.X_AXIS,this._right),this._right}set right(r){this._right.copyFrom(r),this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get localRotQuat(){return this._localRotQuat}set localRotQuat(r){this._localRotQuat=r,this._localRotQuat.getEulerAngles(this._localRot),this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}notifyChange(){this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange),this.eventPositionChange&&this.eventDispatcher.dispatchEvent(this.eventPositionChange),this.eventScaleChange&&this.eventDispatcher.dispatchEvent(this.eventScaleChange)}get worldMatrix(){return this.updateWorldMatrix(),this._worldMatrix}updateWorldMatrix(r=!1){(this._localChange||r)&&(this.parent?(Mi(this._localRot,this._localPos,this.localScale,this._worldMatrix),In(this._worldMatrix,this.parent.worldMatrix,this._worldMatrix)):Mi(this._localRot,this._localPos,this.localScale,this._worldMatrix),this._localChange=!1)}lookTarget(r,e=d.UP){var t=this.transform.worldPosition;this.lookAt(t,r,e)}lookAt(r,e,t=d.UP){this._targetPos||(this._targetPos=new d),this._targetPos.copyFrom(e),this.localPosition=r,A.helpMatrix.lookAt(r,e,t),A.helpMatrix.invert(),r=A.helpMatrix.decompose(at.QUATERNION),this.localRotQuat=$.CALCULATION_QUATERNION.copyFrom(r[1])}decomposeFromMatrix(r,e="eulerAngles"){return r=r.decompose(e),e=this.transform,e.localRotQuat.copyFrom(r[1]),e.localRotQuat=e.localRotQuat,e.localPosition.copyFrom(r[0]),e.localPosition=e.localPosition,e.localScale.copyFrom(r[2]),e.localScale=e.localScale,this.updateWorldMatrix(),this}cloneTo(r){r.transform.localPosition.copyFrom(this.localPosition),r.transform.localRotation.copyFrom(this.localRotation),r.transform.localScale.copyFrom(this.localScale)}set x(r){this._localPos.x!=r&&(this._localPos.x=r,this.notifyLocalChange(),this.onPositionChange&&this.onPositionChange(),this.eventPositionChange)&&this.eventDispatcher.dispatchEvent(this.eventPositionChange)}get x(){return this._localPos.x}set y(r){this._localPos.y!=r&&(this._localPos.y=r,this.notifyLocalChange(),this.onPositionChange&&this.onPositionChange(),this.eventPositionChange)&&this.eventDispatcher.dispatchEvent(this.eventPositionChange)}get y(){return this._localPos.y}set z(r){this._localPos.z!=r&&(this._localPos.z=r,this.notifyLocalChange(),this.onPositionChange&&this.onPositionChange(),this.eventPositionChange)&&this.eventDispatcher.dispatchEvent(this.eventPositionChange)}get z(){return this._localPos.z}set scaleX(r){this._localScale.x!=r&&(this._localScale.x=r,this.notifyLocalChange(),this.eventScaleChange)&&this.eventDispatcher.dispatchEvent(this.eventScaleChange)}get scaleX(){return this._localScale.x}set scaleY(r){this._localScale.y!=r&&(this._localScale.y=r,this.notifyLocalChange(),this.eventScaleChange)&&this.eventDispatcher.dispatchEvent(this.eventScaleChange)}get scaleY(){return this._localScale.y}set scaleZ(r){this._localScale.z!=r&&(this._localScale.z=r,this.notifyLocalChange(),this.eventScaleChange)&&this.eventDispatcher.dispatchEvent(this.eventScaleChange)}get scaleZ(){return this._localScale.z}set rotationX(r){this._localRot.x!=r&&(this._localRot.x=r,this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange)&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get rotationX(){return this._localRot.x}set rotationY(r){this._localRot.y!=r&&(this._localRot.y=r,this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange)&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get rotationY(){return this._localRot.y}set rotationZ(r){this._localRot.z!=r&&(this._localRot.z=r,this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange)&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get rotationZ(){return this._localRot.z}get worldPosition(){return this._localChange&&this.updateWorldMatrix(),this._worldMatrix.position}set localPosition(r){this.x=r.x,this.y=r.y,this.z=r.z,this.notifyLocalChange(),this.onPositionChange&&this.onPositionChange(),this.eventPositionChange&&this.eventDispatcher.dispatchEvent(this.eventPositionChange)}get localPosition(){return this._localPos}set localRotation(r){this.rotationX=r.x,this.rotationY=r.y,this.rotationZ=r.z,this.notifyLocalChange(),this.onRotationChange&&this.onRotationChange(),this.eventRotationChange&&this.eventDispatcher.dispatchEvent(this.eventRotationChange)}get localRotation(){return this._localRot}set localScale(r){this.scaleX=r.x,this.scaleY=r.y,this.scaleZ=r.z,this.notifyLocalChange(),this.eventScaleChange&&this.eventDispatcher.dispatchEvent(this.eventScaleChange)}get localScale(){return this._localScale}beforeDestroy(r){var e;this.parent&&this.parent.object3D&&this.parent.object3D.removeChild(this.object3D),(e=super.beforeDestroy)!=null&&e.call(this,r)}destroy(){super.destroy(),this.scene3D=null,this.eventPositionChange=null,this.eventRotationChange=null,this.eventScaleChange=null,this.onPositionChange=null,this.onRotationChange=null,this.onScaleChange=null,this._scene3d=null,this._parent=null,this._localPos=null,this._localRot=null,this._localRotQuat=null,this._localScale=null,this._forward=null,this._back=null,this._right=null,this._left=null,this._up=null,this._down=null,this._localChange=null,this._targetPos=null}};let Be=Vr;s(Be,"LIMIT",1),s(Be,"COMPONENT_NAME","UUTransform"),s(Be,"COMPONENT_TYPE","Transform"),s(Be,"POSITION_ONCHANGE","POSITION_ONCHANGE"),s(Be,"ROTATION_ONCHANGE","ROTATION_ONCHANGE"),s(Be,"SCALE_ONCHANGE","SCALE_ONCHANGE"),s(Be,"PARENT_ONCHANGE","PARENT_ONCHANGE"),s(Be,"CHILDREN_ONCHANGE","CHILDREN_ONCHANGE"),s(Be,"ADD_ONCHANGE","ADD_ONCHANGE");var ei=(r=>(r[r.None=2]="None",r[r.StaticBatch=4]="StaticBatch",r[r.DynamicBatch=8]="DynamicBatch",r))(ei||{});class ma{static addMask(e,t){return e|t}static removeMask(e,t){return e&~t}static hasMask(e,t){return(e&t)!=0}}class we{constructor(e,t){s(this,"center"),s(this,"extents"),s(this,"max"),s(this,"min"),s(this,"size"),this.center=e,this.extents=new d(t.x/2,t.y/2,t.z/2),this.size=t,this.max=this.center.add(this.extents),this.min=this.center.subtract(this.extents)}setFromMinMax(e,t){this.min||(this.min=new d),this.max||(this.max=new d),this.size||(this.size=new d),this.center||(this.center=new d),this.extents||(this.extents=new d),this.size.set(t.x-e.x,t.y-e.y,t.z-e.z),this.extents.copyFrom(this.size).multiplyScalar(.5),this.center.copyFrom(this.min).add(this.extents,this.center),this.min.copyFrom(e),this.max.copyFrom(t)}setFromCenterAndSize(e,t){this.size=t,this.center=e,this.extents=new d(this.size.x/2,this.size.y/2,this.size.z/2),this.min=new d(this.center.x+-this.extents.x,this.center.y+-this.extents.y,this.center.z+-this.extents.z),this.max=new d(this.center.x+this.extents.x,this.center.y+this.extents.y,this.center.z+this.extents.z)}containsFrustum(e,t){return t.containsBox(e)}merge(e){e.min.x<this.min.x&&(this.min.x=e.min.x),e.min.y<this.min.y&&(this.min.y=e.min.y),e.min.z<this.min.z&&(this.min.z=e.min.z),e.max.x>this.max.x&&(this.max.x=e.max.x),e.max.y>this.max.y&&(this.max.y=e.max.y),e.max.z>this.max.z&&(this.max.z=e.max.z),this.size.x=e.max.x-e.min.x,this.size.y=e.max.y-e.min.y,this.size.z=e.max.z-e.min.z,this.extents.x=.5*this.size.x,this.extents.y=.5*this.size.y,this.extents.z=.5*this.size.z,this.center.x=this.extents.x+e.min.x,this.center.y=this.extents.y+e.min.y,this.center.z=this.extents.z+e.min.z}intersects(e){return this.min.x<=e.max.x&&this.max.x>=e.min.x&&this.min.y<=e.max.y&&this.max.y>=e.min.y&&this.min.z<=e.max.z&&this.max.z>=e.min.z}intersectsSphere(e){return this.min.x<=e.max.x&&this.max.x>=e.min.x&&this.min.y<=e.max.y&&this.max.y>=e.min.y&&this.min.z<=e.max.z&&this.max.z>=e.min.z}intersectsBox(e){return this.min.x<=e.max.x&&this.max.x>=e.min.x&&this.min.y<=e.max.y&&this.max.y>=e.min.y&&this.min.z<=e.max.z&&this.max.z>=e.min.z}equals(e){return this.center.equals(e.center)&&this.extents.equals(e.extents)}expandByPoint(e){e.x<this.min.x&&(this.min.x=e.x),e.x>this.max.x&&(this.max.x=e.x),e.y<this.min.y&&(this.min.y=e.y),e.y>this.max.y&&(this.max.y=e.y),e.z<this.min.z&&(this.min.z=e.z),e.z>this.max.z&&(this.max.z=e.z)}static fromPoints(e){for(var t=new we(new d,new d),i=0;i<e.length;i++)t.expandByPoint(e[i]);return t}calculateTransform(e){}clone(){return new we(this.center.clone(),this.size.clone())}intersectsRay(e,t){throw new Error("Method not implemented.")}containsPoint(e){return this.min.x<=e.x&&this.max.x>=e.x&&this.min.y<=e.y&&this.max.y>=e.y&&this.min.z<=e.z&&this.max.z>=e.z}updateBound(){}destroy(e){this.center=null,this.extents=null,this.min=null,this.max=null,this.size=null}}const Wa=class{static genMeshBounds(n,e){var t=this.genMeshMinVector,i=this.genMeshMaxVector,a=this.genMeshVectorList8,n=((e=e||new we(d.ZERO,d.ZERO)).setFromMinMax(this.maxVector,this.minVector),n.getComponents(ye));for(const h of n)if(h&&h.geometry){var o=h.object3D.transform.worldMatrix;t.copy(h.geometry.bounds.min),i.copy(h.geometry.bounds.max),a[0].set(t.x,t.y,t.z),a[1].set(t.x,t.y,i.z),a[2].set(t.x,i.y,t.z),a[3].set(t.x,i.y,i.z),a[4].set(i.x,t.y,t.z),a[5].set(i.x,t.y,i.z),a[6].set(i.x,i.y,t.z),a[7].set(i.x,i.y,i.z);for(const l of a)o.transformPoint(l,l),e.expandByPoint(l)}return i.copyFrom(e.max),t.copyFrom(e.min),e.setFromMinMax(t,i),e}static transformBound(r,a,t){var i=this.genMeshMinVector.copyFrom(a.min),a=this.genMeshMaxVector.copyFrom(a.max),n=this.genMeshVectorList8;(t=t||new we(d.ZERO,d.ZERO)).setFromMinMax(this.maxVector,this.minVector),n[0].set(i.x,i.y,i.z),n[1].set(i.x,i.y,a.z),n[2].set(i.x,a.y,i.z),n[3].set(i.x,a.y,a.z),n[4].set(a.x,i.y,i.z),n[5].set(a.x,i.y,a.z),n[6].set(a.x,a.y,i.z),n[7].set(a.x,a.y,a.z);for(const o of n)r.transformPoint(o,o),t.expandByPoint(o);return a.copyFrom(t.max),i.copyFrom(t.min),t.setFromMinMax(i,a),t}};let xt=Wa;s(xt,"maxVector",new d(.1*Number.MAX_VALUE,.1*Number.MAX_VALUE,.1*Number.MAX_VALUE)),s(xt,"minVector",Wa.maxVector.clone().multiplyScalar(-1)),s(xt,"genMeshMaxVector",d.ZERO.clone()),s(xt,"genMeshMinVector",d.ZERO.clone()),s(xt,"genMeshVectorList8",[new d,new d,new d,new d,new d,new d,new d,new d]);class Ln extends zt{constructor(){super(),s(this,"name",""),s(this,"_uuid",""),s(this,"_renderLayer",ei.None),s(this,"transform"),s(this,"renderNode"),s(this,"entityChildren"),s(this,"components"),s(this,"waitDisposeComponents"),s(this,"_bound"),s(this,"_boundWorld"),s(this,"_dispose",!1),this.entityChildren=[],this.components=new Map,this.waitDisposeComponents=[],this._uuid=Fe()}get uuid(){return this._uuid}get renderLayer(){return this._renderLayer}set renderLayer(e){for(let t=0;t<this.entityChildren.length;t++)this.entityChildren[t].renderLayer=e;this._renderLayer=e}getObjectByName(e){if(0<=e.indexOf("/")){let i=e.split("/"),a=this;for(;0<i.length&&a;){var t=i.shift();if(!(a=a.getChildByName(t,!1)))return null}return a}return this.getChildByName(e,!1)}get numChildren(){return this.entityChildren.length}addChild(e){return e==null?new console.error("child is null!"):e===this?new console.error("child is self!"):this.entityChildren.indexOf(e)==-1?(e.transform.parent&&e.transform.parent.object3D.removeChild(e),e.transform.parent=this.transform,this.entityChildren.push(e),e.transform.notifyLocalChange(),e):null}removeChild(e){var t;return e===null?new console.error("remove child is null!"):e===this?new console.error("add child is self!"):void((t=this.entityChildren.indexOf(e))!=-1&&(this.entityChildren.splice(t,1),e.transform.parent=null))}removeAllChild(){for(;0<this.numChildren;)this.removeChild(this.entityChildren[0])}removeSelf(){return this.removeFromParent()}removeChildByIndex(e){0<=e&&e<this.entityChildren.length?this.removeChild(this.entityChildren[e]):console.error("remove child by index , index out of range")}hasChild(e){return this.entityChildren.indexOf(e)!=-1}removeFromParent(){var e=this.transform.parent;return e&&e.object3D&&e.object3D.removeChild(this),this}getChildByIndex(e){let t=null;return t=e<this.entityChildren.length?this.entityChildren[e]:t}getChildByName(e,t=!0){let i=null;for(const a of this.entityChildren){if(a.name==e)return i=a;if(t&&(i=a.getChildByName(e,t)))return i}return i}update(){}instantiate(){return null}waitUpdate(){this._dispose?(this.removeFromParent(),this.components.forEach((e,t)=>{var i;e.enable=!1,(i=e.beforeDestroy)!=null&&i.call(e),e.destroy()}),this.components.clear()):J.waitStartComponent.forEach((e,t)=>{e.forEach(i=>{i.__start()}),J.waitStartComponent.delete(t)})}get bound(){return this._bound||this.updateBound(),this._boundWorld}set bound(e){this._bound=e,this._boundWorld=this._bound.clone(),this.updateBound()}updateBound(){this._bound||(this._bound=new we(d.ZERO.clone(),d.ONE.clone()),this._boundWorld=this._bound.clone()),xt.transformBound(this.transform.worldMatrix,this._bound,this._boundWorld)}destroy(e){this._dispose||(this.components.forEach(t=>{var i;(i=t.beforeDestroy)!=null&&i.call(t,e)}),this.components.forEach(t=>{t.destroy(e)}),this.components.clear(),this.entityChildren.forEach(t=>{t.destroy(e)}),this.transform.parent=null,this._dispose=!0,super.destroy())}}class K extends Ln{constructor(){super(),s(this,"_isScene3D"),s(this,"prefabRef"),this.transform=this.addComponent(Be)}get isScene3D(){return this._isScene3D}forChild(e){this.entityChildren.forEach(t=>{e(t),t.forChild(e)})}addComponent(e,t){var i=e.name;return this.components.has(i)?null:(((e=new e).object3D=this).components.set(i,e),e.__init(t),J.appendWaitStart(this,e),e)}getOrAddComponent(e){let t=e.name,i=this.components.get(t);return i=i||this.addComponent(e)}removeComponent(i){var t,i=i.name;this.components.has(i)&&(t=this.components.get(i),this.components.delete(i),t.__stop(),(i=t.beforeDestroy)!=null&&i.call(t),t.destroy())}hasComponent(e){return e=e.name,this.components.has(e)}getComponent(e){return e=e.name,this.components.get(e)}getComponentFromParent(e){return this.parent?this.parent.object3D.getComponent(e)||this.parent.object3D.getComponentFromParent(e):null}getComponentsInChild(e){var t=[],i=e.name,i=this.components.get(i);i&&t.push(i);for(let n=0;n<this.entityChildren.length;n++){var a=this.entityChildren[n].getComponentsInChild(e);t.push(...a)}return t}getComponents(e,t,i){t=t||[];var a=this.getComponent(e);a&&(a.enable||i)&&t.push(a);for(let o=0,h=this.entityChildren.length;o<h;o++){var n=this.entityChildren[o];n&&n instanceof K&&n.getComponents(e,t,i)}return t}getComponentsExt(e,t,i){t=t||[];var a=this.components.get(e.name);if(a&&(a.enable||i))t.push(a);else for(const n of this.entityChildren)n instanceof K&&n.getComponentsExt(e,t,i);return t}getComponentsByProperty(e,t,i=!0,a,n){a=a||[];let o;for(const h of this.components.values())h&&(h.enable||n)&&h[e]==t&&(a.push(h),o=!0);if(!o||!i)for(const h of this.entityChildren)h instanceof K&&h.getComponentsByProperty(e,t,i,a,n);return a}clone(){return this.instantiate()}instantiate(){let e=new K;return e.name=this.name+"_clone",this.entityChildren.forEach((t,i)=>{t=t.instantiate(),e.addChild(t)}),this.components.forEach((t,i)=>{t.cloneTo(e)}),e}get localPosition(){return this.transform.localPosition}set localPosition(e){this.transform.localPosition=e}get localRotation(){return this.transform.localRotation}set localRotation(e){this.transform.localRotation=e}get localScale(){return this.transform.localScale}set localScale(e){this.transform.localScale=e}get localQuaternion(){return this.transform.localRotQuat}set localQuaternion(e){this.transform.localRotQuat=e}notifyChange(){this.transform.notifyChange()}get parent(){return this.transform.parent}get parentObject(){return this.transform.parent.object3D}set x(e){this.transform.x=e}get x(){return this.transform.x}set y(e){this.transform.y=e}get y(){return this.transform.y}set z(e){this.transform.z=e}get z(){return this.transform.z}set scaleX(e){this.transform.scaleX=e}get scaleX(){return this.transform.scaleX}set scaleY(e){this.transform.scaleY=e}get scaleY(){return this.transform.scaleY}set scaleZ(e){this.transform.scaleZ=e}get scaleZ(){return this.transform.scaleZ}set rotationX(e){this.transform.rotationX=e}get rotationX(){return this.transform.rotationX}set rotationY(e){this.transform.rotationY=e}get rotationY(){return this.transform.rotationY}set rotationZ(e){this.transform.rotationZ=e}get rotationZ(){return this.transform.rotationZ}fixedUpdate(){}lateUpdate(){}traverse(e){e(this);for(let i=0,a=this.entityChildren.length;i<a;i++){var t=this.entityChildren[i];t instanceof K&&t.traverse(e)}}destroy(e){super.destroy(e)}}class xe{static createCamera3DObject(e,t){return this.createCamera3D(null,e,t)}static createCamera3D(e,t,i){return e=e||new K,t&&t.addChild(e),i&&(e.name=i),e.getOrAddComponent(Vi)}static UnProjection(c,n,i=1,a){var c=new d(c,n,0),n=d.HELP_0,l=M.canvas.offsetLeft,o=M.canvas.offsetTop,u=M.canvas.clientWidth,h=M.canvas.clientHeight,l=(n.x=2*((c.x-l)/u-.5),n.y=2*-((c.y-o)/h-.5),n.z=i,new d(0,0,0)),u=A.helpMatrix2,c=(u.copyFrom(a.projectionMatrix),u.invert(),A.helpMatrix);return c.identity(),c.multiply(u),c.multiply(a.transform.worldMatrix),c.perspectiveMultiplyPoint3(n,l),l}static Projection(e,n,a){var a=a||new d(0,0,0),o=A.helpMatrix,n=(o.copyFrom(n.viewMatrix),o.multiply(n.projectionMatrix),o.perspectiveMultiplyPoint3(e,a),M.canvas.clientWidth/2),o=M.canvas.clientHeight/2;return a.x=a.x*n+n,a.y=o-a.y*o,a}static UnProjection2(e,t,i,l,o){var o=o||new d(0,0,0),h=A.helpMatrix,l=(h.copyFrom(l.pvMatrixInv),M.canvas.clientWidth/2),u=M.canvas.clientHeight/2;return o.x=(e-l)/l,o.y=(u-t)/u,o.z=i,h.perspectiveMultiplyPoint3(o,o),o}}const Ei=class{static init(){this.directionLightList=new Map,this.pointLightList=new Map,this.shadowBuffer=new Map,this.shadowLights=new Map}static createBuffer(r){var e,t;this.shadowBuffer.has(r)||((e=new De(20)).visibility=GPUShaderStage.FRAGMENT,this.shadowBuffer.set(r,e),e.setInt32("nDirShadowStart",0),e.setInt32("nDirShadowEnd",1),e.setInt32("nPointShadowStart",0),e.setInt32("nPointShadowEnd",0),t=new Uint32Array(16),this.shadowLights.set(r,t),e.setUint32Array("shadowLights",t),e.apply())}static getShadowLightList(r){if(!r.transform.view3D)return null;if(r.lightData.lightType==me.DirectionLight){let e=this.directionLightList.get(r.transform.view3D.scene);return e||(e=[],this.directionLightList.set(r.transform.view3D.scene,e)),e}if(r.lightData.lightType==me.PointLight){let e=this.pointLightList.get(r.transform.view3D.scene);return e||(e=[],this.pointLightList.set(r.transform.view3D.scene,e)),e}if(r.lightData.lightType==me.SpotLight){let e=this.pointLightList.get(r.transform.view3D.scene);return e||(e=[],this.pointLightList.set(r.transform.view3D.scene,e)),e}}static getShadowLightWhichScene(r,e){if(e==me.DirectionLight){let t=this.directionLightList.get(r);return t||(t=[],this.directionLightList.set(r,t)),t}if(e==me.PointLight){let t=this.pointLightList.get(r);return t||(t=[],this.pointLightList.set(r,t)),t}}static getDirectShadowLightWhichScene(r){let e=this.directionLightList.get(r);return e||(e=[],this.directionLightList.set(r,e)),e}static getPointShadowLightWhichScene(r){let e=this.pointLightList.get(r);return e||(e=[],this.pointLightList.set(r,e)),e}static addShadowLight(r){if(!r.transform.view3D)return null;var e=r.transform.view3D.scene;if(r.lightData.lightType==me.DirectionLight){let t=this.directionLightList.get(e);return t||(t=[],this.directionLightList.set(e,t)),r.shadowCamera||(r.shadowCamera=xe.createCamera3DObject(null,"shadowCamera"),r.shadowCamera.name=Fe(),r.shadowCamera.isShadowCamera=!0,r.shadowCamera.orthoOffCenter(b.setting.shadow.shadowBound,-b.setting.shadow.shadowBound,b.setting.shadow.shadowBound,-b.setting.shadow.shadowBound,1,5e4)),t.indexOf(r)==-1&&(t.length<8&&(r.lightData.castShadowIndex=t.length),t.push(r)),t}if(r.lightData.lightType==me.PointLight||r.lightData.lightType==me.SpotLight){let t=this.pointLightList.get(e);return t||(t=[],this.pointLightList.set(e,t)),t.indexOf(r)==-1&&(t.length<8&&(r.lightData.castShadowIndex=t.length),t.push(r)),t}}static removeShadowLight(r){var e,t;return r.transform.view3D?r.lightData.lightType==me.DirectionLight?((t=this.directionLightList.get(r.transform.view3D.scene))&&(e=t.indexOf(r))!=-1&&t.splice(e,1),t):r.lightData.lightType==me.PointLight||r.lightData.lightType==me.SpotLight?((e=this.pointLightList.get(r.transform.view3D.scene))&&(t=e.indexOf(r))!=-1&&e.splice(t,1),e):void 0:null}static update(r){let e=this.shadowBuffer.get(r),t=this.shadowLights.get(r),i=Ei.directionLightList.get(r),a=Ei.pointLightList.get(r),n=0,o=0,h=0;if(t.fill(-1),i){for(let c=0;c<i.length;c++){var l=i[c];t[c]=l.lightData.index}n=i.length}if(e.setInt32("nDirShadowStart",0),e.setInt32("nDirShadowEnd",n),a){for(let c=o=n;c<a.length;c++){var u=a[c];t[c]=u.lightData.index}h=o+a.length}e.setInt32("nPointShadowStart",o),e.setInt32("nPointShadowEnd",h),e.setUint32Array("shadowLights",t),e.apply()}};let Ce=Ei;s(Ce,"maxNumDirectionShadow",8),s(Ce,"maxNumPointShadow",8),s(Ce,"directionLightList"),s(Ce,"pointLightList"),s(Ce,"shadowBuffer"),s(Ce,"shadowLights");class di{static getGlobalDataBindGroupLayout(){var e;return this._globalDataBindGroupLayout||((e=[]).push({binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}),e.push({binding:1,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}}),this._globalDataBindGroupLayout=M.device.createBindGroupLayout({entries:e})),this._globalDataBindGroupLayout}}s(di,"_globalDataBindGroupLayout");class On{constructor(e){s(this,"uuid"),s(this,"usage"),s(this,"globalBindGroup"),s(this,"uniformGPUBuffer"),s(this,"matrixBindGroup"),s(this,"uniformByteLength"),s(this,"matrixesByteLength"),this.uuid=Fe(),this.usage=GPUBufferUsage.UNIFORM|GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,this.uniformGPUBuffer=new ci(688),this.uniformGPUBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.matrixBindGroup=e,this.createBindGroup()}createBindGroup(){this.uniformByteLength=this.uniformGPUBuffer.memory.shareDataBuffer.byteLength,this.matrixesByteLength=A.blockBytes*A.maxCount,this.globalBindGroup=M.device.createBindGroup({label:"global_bindGroupLayout",layout:di.getGlobalDataBindGroupLayout(),entries:[{binding:0,resource:{buffer:this.uniformGPUBuffer.buffer,offset:0,size:this.uniformByteLength}},{binding:1,resource:{buffer:this.matrixBindGroup.matrixBufferDst.buffer,offset:0,size:this.matrixesByteLength}}]})}setCamera(e){e.transform.updateWorldMatrix(!0),this.uniformGPUBuffer.setMatrix("_projectionMatrix",e.projectionMatrix),this.uniformGPUBuffer.setMatrix("_viewMatrix",e.viewMatrix),this.uniformGPUBuffer.setMatrix("_cameraWorldMatrix",e.transform.worldMatrix),this.uniformGPUBuffer.setMatrix("_projectionMatrixInv",e.projectionMatrixInv);var t=new Float32Array(128);for(let o=0;o<8;o++){var i=Ce.getDirectShadowLightWhichScene(e.transform.scene3D);o<i.length?(i=i[o].shadowCamera.pvMatrix.rawData,t.set(i,16*o)):t.set(e.transform.worldMatrix.rawData,16*o)}this.uniformGPUBuffer.setFloat32Array("_shadowCamera",t),this.uniformGPUBuffer.setVector3("CameraPos",e.transform.worldPosition),this.uniformGPUBuffer.setFloat("Time.frame",he.frame),this.uniformGPUBuffer.setFloat("Time.time",he.frame),this.uniformGPUBuffer.setFloat("Time.detail",he.delta),this.uniformGPUBuffer.setFloat("EngineSetting.Shadow.shadowBias",b.setting.shadow.shadowBias),this.uniformGPUBuffer.setFloat("skyExposure",b.setting.sky.skyExposure),this.uniformGPUBuffer.setFloat("EngineSetting.Render.renderPassState",b.setting.render.renderPassState),this.uniformGPUBuffer.setFloat("EngineSetting.Render.quadScale",b.setting.render.quadScale),this.uniformGPUBuffer.setFloat("EngineSetting.Render.hdrExposure",b.setting.render.hdrExposure),this.uniformGPUBuffer.setInt32("renderState_left",b.setting.render.renderState_left),this.uniformGPUBuffer.setInt32("renderState_right",b.setting.render.renderState_right),this.uniformGPUBuffer.setFloat("renderState_split",b.setting.render.renderState_split);var a=b.inputSystem.mouseX*M.pixelRatio,n=b.inputSystem.mouseY*M.pixelRatio;this.uniformGPUBuffer.setFloat("mouseX",a),this.uniformGPUBuffer.setFloat("mouseY",n),this.uniformGPUBuffer.setFloat("windowWidth",M.windowWidth),this.uniformGPUBuffer.setFloat("windowHeight",M.windowHeight),this.uniformGPUBuffer.setFloat("near",e.near),this.uniformGPUBuffer.setFloat("far",e.far),this.uniformGPUBuffer.setFloat("EngineSetting.Shadow.pointShadowBias",b.setting.shadow.pointShadowBias),this.uniformGPUBuffer.setFloat("shadowMapSize",b.setting.shadow.shadowSize),this.uniformGPUBuffer.setFloat("shadowSoft",b.setting.shadow.shadowSoft),this.uniformGPUBuffer.apply()}setShadowCamera(e){e.transform.updateWorldMatrix(!0),this.uniformGPUBuffer.setMatrix("_projectionMatrix",e.projectionMatrix),this.uniformGPUBuffer.setMatrix("_viewMatrix",e.viewMatrix),this.uniformGPUBuffer.setMatrix("_pvMatrix",e.pvMatrix),this.uniformGPUBuffer.apply()}addUniformNode(){}}class An{constructor(){s(this,"_pool",[]),s(this,"_worldPosition",new d),s(this,"_viewPosition",new d),s(this,"_zSortList",[])}pop(){return this._pool.pop()||{}}recycle(){for(var e of this._zSortList)e.z=0,e.userData=null,e.obj3d=null,this._pool.push(e);this._zSortList.length=0}sort(e,t,i,a){this._zSortList=[];for(var n of t){var o=this.pop();o.userData=n,o.obj3d=i(n),o.z=this.worldToCameraDepth(o.obj3d,e),this._zSortList.push(o)}this._zSortList.sort((l,u)=>0<l.z-u.z?1:-1),a=a||[];for(var h of this._zSortList)a.push(h.userData);return this.recycle(),a}worldToCameraDepth(e,t){let i=0;return(t=t||e.transform.view3D.camera)&&(this._worldPosition.copyFrom(e.transform.worldPosition),t.worldToScreenPoint(this._worldPosition,this._viewPosition),i=this._viewPosition.z),i}}let Un=new An,Bn=`
#include "WorldMatrixUniform"
#include "GlobalUniform"

struct VertexOutput {
    @location(0) fragUV: vec2<f32>,
    @builtin(position) member: vec4<f32>
};

#if USE_MORPHTARGETS
    ${ge.getMorphTargetShaderBinding(2,1)}
#endif

#if USE_SKELETON
    ${ui.groupBindingAndFunctions(2,1)} 
#endif

var<private> worldMatrix: mat4x4<f32>;

struct VertexAttributes{
  @builtin(instance_index) index : u32,
  @location(0) position: vec3<f32>,
  @location(1) normal: vec3<f32>,
  @location(2) uv: vec2<f32>,
  @location(3) TEXCOORD_1: vec2<f32>,

  #if USE_TANGENT
      @location(4) TANGENT: vec4<f32>,
      #if USE_SKELETON
          @location(5) joints0: vec4<f32>,
          @location(6) weights0: vec4<f32>,
          #if USE_JOINT_VEC8
          @location(7) joints1: vec4<f32>,
          @location(8) weights1: vec4<f32>,
      #endif
      #elseif USE_MORPHTARGETS
          ${ge.getMorphTargetAttr(5)}
      #endif
  #elseif USE_SKELETON
      @location(4) joints0: vec4<f32>,
      @location(5) weights0: vec4<f32>,
      #if USE_JOINT_VEC8
      @location(6) joints1: vec4<f32>,
      @location(7) weights1: vec4<f32>,
      #endif
  #elseif USE_MORPHTARGETS
     ${ge.getMorphTargetAttr(4)}
  #endif
}

@vertex
fn main(vertex:VertexAttributes) -> VertexOutput {
    worldMatrix = models.matrix[vertex.index];
    let shadowMatrix: mat4x4<f32> = globalUniform.projMat * globalUniform.viewMat ;
    var vertexPosition = vertex.position.xyz;
    var vertexNormal = vertex.normal.xyz;

    #if USE_MORPHTARGETS
     ${ge.getMorphTargetCalcVertex()}    
    #endif

    #if USE_SKELETON
        #if USE_JOINT_VEC8
          worldMatrix *= getSkeletonWorldMatrix_8(vertex.joints0, vertex.weights0, vertex.joints1, vertex.weights1);
        #else
          worldMatrix *= getSkeletonWorldMatrix_4(vertex.joints0, vertex.weights0);
        #endif
    #endif

    var worldPos = worldMatrix * vec4<f32>(vertexPosition, 1.0) ;
    var vPos = shadowMatrix * worldPos;
    return VertexOutput(vertex.uv, vPos );  
}
`,kn=`
#include "WorldMatrixUniform"
#include "GlobalUniform"

struct VertexOutput {
    @location(0) fragUV: vec2<f32>,
    @location(1) worldPos: vec3<f32>,
    @builtin(position) member: vec4<f32>
};

#if USE_MORPHTARGETS
    ${ge.getMorphTargetShaderBinding(2,1)}
##endif
 
#if USE_SKELETON
    ${ui.groupBindingAndFunctions(2,1)} 
#endif

var<private> worldMatrix: mat4x4<f32>;

struct VertexAttributes{
  @builtin(instance_index) index : u32,
  @location(0) position: vec3<f32>,
  @location(1) normal: vec3<f32>,
  @location(2) uv: vec2<f32>,
  @location(3) TEXCOORD_1: vec2<f32>,

  #if USE_TANGENT
      @location(4) TANGENT: vec4<f32>,
      #if USE_SKELETON
          @location(5) joints0: vec4<f32>,
          @location(6) weights0: vec4<f32>,
          #if USE_JOINT_VEC8
          @location(7) joints1: vec4<f32>,
          @location(8) weights1: vec4<f32>,
      #endif
      #elseif USE_MORPHTARGETS
         ${ge.getMorphTargetAttr(5)}
      #endif
  #elseif USE_SKELETON
      @location(4) joints0: vec4<f32>,
      @location(5) weights0: vec4<f32>,
      #if USE_JOINT_VEC8
      @location(6) joints1: vec4<f32>,
      @location(7) weights1: vec4<f32>,
      #endif
  #elseif USE_MORPHTARGETS
      ${ge.getMorphTargetAttr(4)}
  #endif
}

@vertex
fn main(vertex:VertexAttributes) -> VertexOutput {
    worldMatrix = models.matrix[vertex.index];
    let shadowMatrix: mat4x4<f32> = globalUniform.projMat * globalUniform.viewMat ;
    var vertexPosition = vertex.position.xyz;

    #if USE_MORPHTARGETS
        ${ge.getMorphTargetCalcVertex()}
    #endif

    #if USE_SKELETON
        #if USE_JOINT_VEC8
          worldMatrix *= getSkeletonWorldMatrix_8(vertex.joints0, vertex.weights0, vertex.joints1, vertex.weights1);
        #else
          worldMatrix *= getSkeletonWorldMatrix_4(vertex.joints0, vertex.weights0);
        #endif
    #endif

    var worldPos = worldMatrix * vec4<f32>(vertexPosition, 1.0) ;
    var vPos = shadowMatrix * worldPos;
    return VertexOutput(vertex.uv, worldPos.xyz , vPos ); 
}
`,Ka=`
#if USE_ALPHACUT
@group(1) @binding(0)
var baseMapSampler: sampler;
@group(1) @binding(1)
var baseMap: texture_2d<f32>;
#endif

struct FragmentOutput {
  @location(0) o_Target: vec4<f32>,
  @builtin(frag_depth) out_depth: f32
};

struct MaterialUniform {
lightWorldPos: vec3<f32>,
cameraFar: f32,
};

@group(2) @binding(0)
var<uniform> materialUniform: MaterialUniform;

@fragment
fn main(@location(0) fragUV: vec2<f32> , @location(1) worldPos:vec3<f32> ) -> FragmentOutput {
var distance = length(worldPos.xyz - materialUniform.lightWorldPos ) ;
distance = distance / materialUniform.cameraFar ;

#if USE_ALPHACUT
  let Albedo = textureSample(baseMap,baseMapSampler,fragUV);
  var fragOut:FragmentOutput; 
  if(Albedo.w > 0.5){
    fragOut = FragmentOutput(vec4<f32>(0.0),distance);
  }
//   if(Albedo.w > 0.5){
//     fragOut = FragmentOutput(vec4<f32>(0.0),distance);
//   }else{
//     discard;
//   }
  return fragOut ;
#else
    fragOut = FragmentOutput(vec4<f32>(0.0),distance);
#endif
}
`;const gt=class{static getMipmapPipeline(r){let e=r.format,t=M.device,i=gt.pipelineCache[r.format],a;return i||(a=t.createShaderModule({code:gt.mipmapShader}),r=t.createBindGroupLayout({entries:[{binding:0,visibility:r.visibility,sampler:r.samplerBindingLayout},{binding:1,visibility:r.visibility,texture:r.textureBindingLayout}]}),r=M.device.createPipelineLayout({bindGroupLayouts:[r]}),i=w.createPipeline({layout:r,vertex:{module:a,entryPoint:"vertexMain"},fragment:{module:a,entryPoint:"fragmentMain",targets:[{format:e}]}}),gt.pipelineCache[e]=i),i}static webGPUGenerateMipmap(r){var e,t=M.device,i=r.textureDescriptor;gt.pipeline||(e=t.createShaderModule({code:`
        var<private> pos : array<vec2<f32>, 4> = array<vec2<f32>, 4>(
          vec2<f32>(-1.0, 1.0), vec2<f32>(1.0, 1.0),
          vec2<f32>(-1.0, -1.0), vec2<f32>(1.0, -1.0));

        struct VertexOutput {
          @builtin(position) position : vec4<f32>,
          @location(0) texCoord : vec2<f32>
        };

        @vertex
        fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
          var output : VertexOutput;
          output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);
          output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
          return output;
        }

        @binding(0) @group(0) var imgSampler : sampler;
        @binding(1) @group(0) var img : texture_2d<f32>;

        @fragment
        fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {
          var outColor: vec4<f32> = textureSample(img, imgSampler, texCoord);
          return outColor;
        }
      `}),gt.pipeline=t.createRenderPipeline({layout:"auto",vertex:{module:e,entryPoint:"vertexMain"},fragment:{module:e,entryPoint:"fragmentMain",targets:[{format:i.format}]},primitive:{topology:"triangle-strip",stripIndexFormat:"uint32"}}));let a,n=(a=r.format=="rgba16float"?t.createSampler({minFilter:"nearest",magFilter:"linear"}):t.createSampler({minFilter:"linear",magFilter:"linear"}),r.getGPUTexture().createView({baseMipLevel:0,mipLevelCount:1}));var o=w.beginCommandEncoder();for(let c=1;c<i.mipLevelCount;++c){var h=r.getGPUTexture().createView({baseMipLevel:c,mipLevelCount:1}),l=o.beginRenderPass({colorAttachments:[{view:h,clearValue:[0,0,0,0],loadOp:"clear",storeOp:"store"}]}),u=t.createBindGroup({layout:gt.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:a},{binding:1,resource:n}]});l.setPipeline(gt.pipeline),l.setBindGroup(0,u),l.draw(4),l.end(),n=h}w.endCommandEncoder(o)}};let Bt=gt;s(Bt,"mipmapShader",`
    var<private> pos : array<vec2<f32>, 3> = array<vec2<f32>, 3>(
        vec2<f32>(-1.0, -1.0), vec2<f32>(-1.0, 3.0), vec2<f32>(3.0, -1.0));
      struct VertexOutput {
        @builtin(position) position : vec4<f32>;
        @location(0) texCoord : vec2<f32>;
      };
      @vertex
      fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
        var output : VertexOutput;
        output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);
        output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
        return output;
      }
      @binding(0) @group(0) var imgSampler : sampler;
      @binding(1) @group(0) var img : texture_2d<f32>;
      @fragment
      fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {
        var outColor: vec4<f32> = textureSample(img, imgSampler, texCoord);
        return outColor ;
      }`),s(Bt,"pipelineCache",{}),s(Bt,"pipeline");class st{constructor(e=32,t=32,i=1){s(this,"name"),s(this,"url"),s(this,"gpuTexture"),s(this,"pid"),s(this,"view"),s(this,"gpuSampler"),s(this,"gpuSampler_comparison"),s(this,"format"),s(this,"usage"),s(this,"width",4),s(this,"height",4),s(this,"depthOrArrayLayers",1),s(this,"numberLayer",1),s(this,"viewDescriptor"),s(this,"textureDescriptor"),s(this,"visibility",GPUShaderStage.COMPUTE|GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT),s(this,"textureBindingLayout",{viewDimension:"2d",multisampled:!1}),s(this,"samplerBindingLayout",{type:"filtering"}),s(this,"sampler_comparisonBindingLayout",{type:"comparison"}),s(this,"flipY"),s(this,"isVideoTexture"),s(this,"isHDRTexture"),s(this,"_useMipmap",!1),s(this,"_sourceImageData"),s(this,"_addressModeU"),s(this,"_addressModeV"),s(this,"_addressModeW"),s(this,"_magFilter"),s(this,"_minFilter"),s(this,"_mipmapFilter"),s(this,"_lodMinClamp"),s(this,"_lodMaxClamp"),s(this,"_compare"),s(this,"_maxAnisotropy"),s(this,"mipmapCount",1),s(this,"_textureChange",!1),s(this,"_stateChangeRef",new Map),this.width=e,this.height=t,this.numberLayer=i,this.minFilter="linear",this.magFilter="linear",this.mipmapFilter="linear",this.addressModeU=it.repeat,this.addressModeV=it.repeat,this.visibility=GPUShaderStage.FRAGMENT}init(){var e=this;return e.internalCreateBindingLayoutDesc&&e.internalCreateBindingLayoutDesc(),e.internalCreateTexture&&e.internalCreateTexture(),e.internalCreateView&&e.internalCreateView(),e.internalCreateSampler&&e.internalCreateSampler(),this}createTextureDescriptor(e,t,i,a,n=GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.STORAGE_BINDING,o=1,h=0){this.width=e,this.height=t,this.format=a,this.usage=n,this.textureDescriptor={size:[e,t,o],mipLevelCount:i,format:a,usage:n,label:""+(this.name+this.width+this.height+this.format)},0<h&&(this.textureDescriptor.sampleCount=h),this.viewDescriptor=1<o?{dimension:"2d-array"}:{dimension:this.textureBindingLayout.viewDimension}}generate(e){let t=32,i=32;"width"in e&&(t=e.width,i=e.height),(t<32||i<32)&&console.log(e.name+"Size must be greater than 32!"),this.width=t,this.height=i,this.visibility=GPUShaderStage.FRAGMENT,this.createTexture(e)}createTexture(e){this._sourceImageData=e,this.updateTextureDescription(),this.updateGPUTexture(),e=M.device,this.gpuTexture instanceof GPUTexture&&e.queue.copyExternalImageToTexture({source:this._sourceImageData},{texture:this.gpuTexture},[this.width,this.height]),this.useMipmap&&Bt.webGPUGenerateMipmap(this)}get useMipmap(){return this._useMipmap}set useMipmap(e){var t;e?(this.samplerBindingLayout.type="filtering",this._useMipmap==0&&this._sourceImageData&&(this._useMipmap=!0,this.updateTextureDescription(),this.updateGPUTexture(),t=M.device,this.gpuTexture instanceof GPUTexture&&t.queue.copyExternalImageToTexture({source:this._sourceImageData},{texture:this.gpuTexture},[this.width,this.height]),Bt.webGPUGenerateMipmap(this))):(this.samplerBindingLayout.type="non-filtering",this._useMipmap==1&&this._sourceImageData&&(this._useMipmap=!1,this.updateTextureDescription(),this.updateGPUTexture(),t=M.device,this.gpuTexture instanceof GPUTexture)&&t.queue.copyExternalImageToTexture({source:this._sourceImageData},{texture:this.gpuTexture},[this.width,this.height])),this._textureChange=!0,this._useMipmap=e,this.noticeChange()}updateTextureDescription(){this.mipmapCount=Math.floor(this.useMipmap?Math.log2(Math.min(this.width,this.height)):1),this.createTextureDescriptor(this.width,this.height,this.mipmapCount,this.format)}updateGPUTexture(){this.gpuTexture&&this.gpuTexture instanceof GPUTexture&&this.gpuTexture.destroy(),this.gpuTexture=null,this.view=null,this.gpuTexture=this.getGPUTexture()}getGPUTexture(){return this.gpuTexture||(this.gpuTexture=M.device.createTexture(this.textureDescriptor)),this.gpuTexture}getGPUView(e=0){return this.view||(this.gpuTexture=this.getGPUTexture(),this.gpuTexture instanceof GPUTexture&&(this.view=this.gpuTexture.createView(this.viewDescriptor))),this.view}bindStateChange(e,t){this._stateChangeRef.set(t,e)}unBindStateChange(e){this._stateChangeRef.delete(e)}noticeChange(){this.gpuSampler=M.device.createSampler(this),this._stateChangeRef.forEach((e,t)=>{e()})}destroy(e){e&&this.gpuTexture instanceof GPUTexture&&(this.gpuSampler=null,this.gpuSampler_comparison=null,this.textureBindingLayout=null,this.textureDescriptor=null,this.gpuTexture.destroy(),this.gpuTexture=null),this._stateChangeRef.clear()}get addressModeU(){return this._addressModeU}set addressModeU(e){this._addressModeU!=e&&(this._addressModeU=e,this.noticeChange())}get addressModeV(){return this._addressModeV}set addressModeV(e){this._addressModeV!=e&&(this._addressModeV=e,this.noticeChange())}get addressModeW(){return this._addressModeW}set addressModeW(e){this._addressModeW!=e&&(this._addressModeW=e,this.noticeChange())}get magFilter(){return this._magFilter}set magFilter(e){this._magFilter!=e&&(this._magFilter=e,this.noticeChange())}get minFilter(){return this._minFilter}set minFilter(e){this._minFilter!=e&&(this._minFilter=e,this.noticeChange())}get mipmapFilter(){return this._mipmapFilter}set mipmapFilter(e){this._mipmapFilter!=e&&(this._mipmapFilter=e,this.noticeChange())}get lodMinClamp(){return this._lodMinClamp}set lodMinClamp(e){this._lodMinClamp!=e&&(this._lodMinClamp=e,this.noticeChange())}get lodMaxClamp(){return this._lodMaxClamp}set lodMaxClamp(e){this._lodMaxClamp!=e&&(this._lodMaxClamp=e,this.noticeChange())}get compare(){return this._compare}set compare(e){this._compare!=e&&(this._compare=e,this.noticeChange())}get maxAnisotropy(){return this._maxAnisotropy}set maxAnisotropy(e){this._maxAnisotropy!=e&&(this._maxAnisotropy=e,this.noticeChange())}}class Nn extends st{constructor(e,t,i){super(e,t,i),s(this,"_bitmapTextures"),this.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.format=F.rgba8unorm,this.mipmapCount=1,this._bitmapTextures=[],this.init()}setTextures(e){for(let i=this._bitmapTextures.length=0;i<e.length;i++){var t=e[i];this.addTexture(t)}}addTexture(e){e.width==this.width&&e.height==this.height||console.error("bitmap texture muse match bitmapTextureArray size!"),this._bitmapTextures.indexOf(e)==-1&&(e.pid=this._bitmapTextures.length,this._bitmapTextures.push(e),this.updateTexture())}removeTexture(e){if(e=this._bitmapTextures.indexOf(e),e!=-1){this._bitmapTextures.splice(e,1);for(let t=0;t<this._bitmapTextures.length;t++)this._bitmapTextures[t].pid=t}}updateTexture(){var e=w.beginCommandEncoder();for(let i=0;i<this._bitmapTextures.length;i++){var t=this._bitmapTextures[i];e.copyTextureToTexture({texture:t.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:0}},{texture:this.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:i}},{width:this.width,height:this.height,depthOrArrayLayers:1})}w.endCommandEncoder(e)}internalCreateBindingLayoutDesc(){this.textureBindingLayout.viewDimension="2d-array",this.samplerBindingLayout.type="filtering",this.minFilter=Qr.linear,this.magFilter=Qr.linear}internalCreateTexture(){this.textureDescriptor={format:this.format,size:{width:this.width,height:this.height,depthOrArrayLayers:this.numberLayer},dimension:"2d",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.TEXTURE_BINDING},this.gpuTexture=M.device.createTexture(this.textureDescriptor)}internalCreateView(){this.viewDescriptor={dimension:"2d-array"},this.view=this.gpuTexture.createView(this.viewDescriptor)}internalCreateSampler(){this.gpuSampler=M.device.createSampler(this)}}const Rt=class{constructor(){s(this,"_iesTexture"),s(this,"index",0)}generateIES(r){}set IESTexture(r){(this._iesTexture=r).addressModeU=it.repeat,r.addressModeV=it.repeat,r.addressModeW=it.repeat,Rt.ies_list.indexOf(this)==-1&&(this.index=Rt.ies_list.length,Rt.ies_list.push(this),Rt.iesTexture||Rt.create(r.width,r.height),Rt.iesTexture.addTexture(r))}get IESTexture(){return this._iesTexture}static create(r,e){this.iesTexture=new Nn(r,e,48)}};let Zt=Rt;s(Zt,"use",!1),s(Zt,"iesTexture"),s(Zt,"ies_list",[]);var z=(r=>(r.position="position",r.normal="normal",r.uv="uv",r.TANGENT="TANGENT",r.TEXCOORD_1="TEXCOORD_1",r.TEXCOORD_2="TEXCOORD_2",r.color="color",r.joints0="joints0",r.joints1="joints1",r.weights0="weights0",r.weights1="weights1",r.indices="indices",r.vIndex="vIndex",r.a_morphPositions_0="a_morphPositions_0",r))(z||{}),ae=(r=>(r[r.NONE=0]="NONE",r[r.ABOVE=1]="ABOVE",r[r.ALPHA=2]="ALPHA",r[r.NORMAL=3]="NORMAL",r[r.ADD=4]="ADD",r[r.BELOW=5]="BELOW",r[r.ERASE=6]="ERASE",r[r.MUL=7]="MUL",r[r.SCREEN=8]="SCREEN",r[r.DIVD=9]="DIVD",r[r.SOFT_ADD=10]="SOFT_ADD",r))(ae||{}),zn=(r=>(r[r.src_a=0]="src_a",r[r.dest_a=1]="dest_a",r))(zn||{});class ja{static getBlend(e){var t={color:{srcFactor:"src-alpha",dstFactor:"one"},alpha:{srcFactor:"one",dstFactor:"one"}};switch(e){case 0:t.color.srcFactor="one",t.color.dstFactor="zero",t.color.operation="add";break;case 1:t.color.srcFactor="one-minus-src-alpha",t.color.dstFactor="dst-alpha",t.color.operation="add";break;case 4:t.color.srcFactor="one",t.color.dstFactor="one",t.color.operation="add",t.alpha.srcFactor="one",t.alpha.dstFactor="one",t.alpha.operation="add";break;case 2:t.color.srcFactor="src-alpha",t.color.dstFactor="one-minus-src-alpha";break;case 5:t.color.srcFactor="one-minus-src-alpha",t.color.dstFactor="one",t.color.operation="add";break;case 6:t.color.srcFactor="zero",t.color.dstFactor="one-minus-src-alpha",t.color.operation="add";break;case 7:t.color.srcFactor="dst",t.color.dstFactor="one-minus-src-alpha",t.color.operation="add";break;case 3:t.color.srcFactor="one",t.color.dstFactor="one-minus-src-alpha",t.color.operation="add";break;case 10:t.color.srcFactor="one",t.color.dstFactor="one",t.color.operation="max",t.alpha.srcFactor="one",t.alpha.dstFactor="one",t.alpha.operation="add";break;case 8:t.color.srcFactor="one",t.color.dstFactor="one-minus-src",t.color.operation="add"}return t}}class Ar{constructor(e=0,t="\0"){s(this,"Type",0),s(this,"Line",0),s(this,"Colume",0),s(this,"Literal",""),this.Type=e,this.Literal=t}isTypeEqual(e){return this.Type==e}isLiteralEqual(e){return this.Literal==e}isBuiltinType(){return 33<this.Type&&this.Type<101}isDataType(){return this.Type==1||this.isBuiltinType()}isOperation(){return 102<this.Type&&this.Type<127}isAssignOperation(){return 128<this.Type&&this.Type<133}get nOperationPriorityLevel(){switch(this.Type){case 26:case 27:return 1;case 125:return 2;case 110:case 114:return 3;case 105:case 106:return 4;case 103:case 104:return 5;case 115:case 116:return 6;case 119:case 120:case 122:case 123:return 7;case 121:case 124:return 8;case 111:return 9;case 113:return 10;case 112:return 11;case 107:return 12;case 109:return 13;case 108:return 14;case 24:return 15;case 126:case 129:case 130:case 131:case 132:return 16}return 99}}var g=(r=>(r[r.EOF=0]="EOF",r[r.IDENT=1]="IDENT",r[r.VOID=2]="VOID",r[r.CONST=3]="CONST",r[r.LAYOUT=4]="LAYOUT",r[r.PRECISION=5]="PRECISION",r[r.ATTRIBUTE=6]="ATTRIBUTE",r[r.UNIFORM=7]="UNIFORM",r[r.VARYING=8]="VARYING",r[r.INVARIANT=9]="INVARIANT",r[r.IN=10]="IN",r[r.OUT=11]="OUT",r[r.INOUT=12]="INOUT",r[r.IF=13]="IF",r[r.ELSE=14]="ELSE",r[r.FOR=15]="FOR",r[r.WHILE=16]="WHILE",r[r.DO=17]="DO",r[r.BREAK=18]="BREAK",r[r.RETURN=19]="RETURN",r[r.CONTINUE=20]="CONTINUE",r[r.STRUCT=21]="STRUCT",r[r.COMMA=22]="COMMA",r[r.COLON=23]="COLON",r[r.QUEMARK=24]="QUEMARK",r[r.SEMICOLON=25]="SEMICOLON",r[r.LEFTSAMLL=26]="LEFTSAMLL",r[r.RIGHTSAMLL=27]="RIGHTSAMLL",r[r.LEFTMEDI=28]="LEFTMEDI",r[r.RIGHTMEDI=29]="RIGHTMEDI",r[r.LEFTBIG=30]="LEFTBIG",r[r.RIGHTBIG=31]="RIGHTBIG",r[r.LITERAL=32]="LITERAL",r[r.BeginBuiltinType=33]="BeginBuiltinType",r[r.INT=34]="INT",r[r.INT_ARRAY=35]="INT_ARRAY",r[r.UINT=36]="UINT",r[r.UINT_ARRAY=37]="UINT_ARRAY",r[r.BOOL=38]="BOOL",r[r.BOOL_ARRAY=39]="BOOL_ARRAY",r[r.FLOAT=40]="FLOAT",r[r.FLOAT_ARRAY=41]="FLOAT_ARRAY",r[r.DOUBLE=42]="DOUBLE",r[r.DOUBLE_ARRAY=43]="DOUBLE_ARRAY",r[r.VEC2=44]="VEC2",r[r.VEC2_ARRAY=45]="VEC2_ARRAY",r[r.VEC3=46]="VEC3",r[r.VEC3_ARRAY=47]="VEC3_ARRAY",r[r.VEC4=48]="VEC4",r[r.VEC4_ARRAY=49]="VEC4_ARRAY",r[r.BVEC2=50]="BVEC2",r[r.BVEC2_ARRAY=51]="BVEC2_ARRAY",r[r.BVEC3=52]="BVEC3",r[r.BVEC3_ARRAY=53]="BVEC3_ARRAY",r[r.BVEC4=54]="BVEC4",r[r.BVEC4_ARRAY=55]="BVEC4_ARRAY",r[r.IVEC2=56]="IVEC2",r[r.IVEC2_ARRAY=57]="IVEC2_ARRAY",r[r.IVEC3=58]="IVEC3",r[r.IVEC3_ARRAY=59]="IVEC3_ARRAY",r[r.IVEC4=60]="IVEC4",r[r.IVEC4_ARRAY=61]="IVEC4_ARRAY",r[r.UVEC2=62]="UVEC2",r[r.UVEC2_ARRAY=63]="UVEC2_ARRAY",r[r.UVEC3=64]="UVEC3",r[r.UVEC3_ARRAY=65]="UVEC3_ARRAY",r[r.UVEC4=66]="UVEC4",r[r.UVEC4_ARRAY=67]="UVEC4_ARRAY",r[r.MAT2x2=68]="MAT2x2",r[r.MAT2x2_ARRAY=69]="MAT2x2_ARRAY",r[r.MAT2x3=70]="MAT2x3",r[r.MAT2x3_ARRAY=71]="MAT2x3_ARRAY",r[r.MAT2x4=72]="MAT2x4",r[r.MAT2x4_ARRAY=73]="MAT2x4_ARRAY",r[r.MAT3x2=74]="MAT3x2",r[r.MAT3x2_ARRAY=75]="MAT3x2_ARRAY",r[r.MAT3x3=76]="MAT3x3",r[r.MAT3x3_ARRAY=77]="MAT3x3_ARRAY",r[r.MAT3x4=78]="MAT3x4",r[r.MAT3x4_ARRAY=79]="MAT3x4_ARRAY",r[r.MAT4x2=80]="MAT4x2",r[r.MAT4x2_ARRAY=81]="MAT4x2_ARRAY",r[r.MAT4x3=82]="MAT4x3",r[r.MAT4x3_ARRAY=83]="MAT4x3_ARRAY",r[r.MAT4x4=84]="MAT4x4",r[r.MAT4x4_ARRAY=85]="MAT4x4_ARRAY",r[r.SAMPLER=86]="SAMPLER",r[r.SAMPLER_1D=87]="SAMPLER_1D",r[r.SAMPLER_2D=88]="SAMPLER_2D",r[r.SAMPLER_3D=89]="SAMPLER_3D",r[r.SAMPLER_CUBE=90]="SAMPLER_CUBE",r[r.SAMPLER_SHADOW=91]="SAMPLER_SHADOW",r[r.SAMPLER_1D_SHADOW=92]="SAMPLER_1D_SHADOW",r[r.SAMPLER_2D_SHADOW=93]="SAMPLER_2D_SHADOW",r[r.TEXTURE_1D=94]="TEXTURE_1D",r[r.TEXTURE_1D_ARRAY=95]="TEXTURE_1D_ARRAY",r[r.TEXTURE_2D=96]="TEXTURE_2D",r[r.TEXTURE_2D_ARRAY=97]="TEXTURE_2D_ARRAY",r[r.TEXTURE_3D=98]="TEXTURE_3D",r[r.TEXTURE_CUBE=99]="TEXTURE_CUBE",r[r.TEXTURE_CUBE_ARRAY=100]="TEXTURE_CUBE_ARRAY",r[r.EndBuiltinType=101]="EndBuiltinType",r[r.BeginOperation=102]="BeginOperation",r[r.ADD=103]="ADD",r[r.SUB=104]="SUB",r[r.MUL=105]="MUL",r[r.DIV=106]="DIV",r[r.AND=107]="AND",r[r.OR=108]="OR",r[r.XOR=109]="XOR",r[r.NOT=110]="NOT",r[r.BITAND=111]="BITAND",r[r.BITOR=112]="BITOR",r[r.BITXOR=113]="BITXOR",r[r.BITNOT=114]="BITNOT",r[r.BITSHIFT_L=115]="BITSHIFT_L",r[r.BITSHIFT_R=116]="BITSHIFT_R",r[r.INC=117]="INC",r[r.DEC=118]="DEC",r[r.GREATER=119]="GREATER",r[r.GREATEREQUAL=120]="GREATEREQUAL",r[r.EQUAL=121]="EQUAL",r[r.LESS=122]="LESS",r[r.LESSEQUAL=123]="LESSEQUAL",r[r.NOTEQUAL=124]="NOTEQUAL",r[r.DOT=125]="DOT",r[r.ASSIGN=126]="ASSIGN",r[r.EndOperation=127]="EndOperation",r[r.BeginAssignOperation=128]="BeginAssignOperation",r[r.ADDASSIGN=129]="ADDASSIGN",r[r.SUBASSIGN=130]="SUBASSIGN",r[r.MULASSIGN=131]="MULASSIGN",r[r.DIVASSIGN=132]="DIVASSIGN",r[r.EndAssignOperation=133]="EndAssignOperation",r))(g||{});class Mr{constructor(e){s(this,"_char"),s(this,"_line"),s(this,"_column"),s(this,"_source"),s(this,"_currPosition"),s(this,"_nextPosition"),this.reset(e)}reset(e){this._char="",this._line=0,this._column=0,this._source=e,this._currPosition=0,this._nextPosition=0}get source(){return this._source}getChar(){return this._char}get currPosition(){return this._currPosition}peekChar(){return this._nextPosition>=this._source.length?"\0":this._source[this._nextPosition]}readChar(){this._char=this._nextPosition>=this._source.length?"\0":this._source[this._nextPosition],this._char!==`
`?this._column++:(this._line++,this._column=0),this._currPosition=this._nextPosition,this._nextPosition++}readCharAndSkipWhitespace(){this.readChar(),this.skipWhitespace()}readIdentifier(){for(var e=this._currPosition;this.isIdentifier(this._char);)this.readChar();return this._source.substring(e,this._currPosition)}isIdentifier(e){return e=e.charCodeAt(0),97<=e&&e<=122||65<=e&&e<=90||48<=e&&e<=57||e==95}skipWhitespace(){for(;this.IsWhitespace(this._char);)this.readChar()}IsWhitespace(e){return e===" "||e==="	"||e==="\r"||e===`
`}skipComment(){for(;this._char!==`
`&&this._char!=="\0";)this.readChar();this.skipWhitespace()}skipMultilineComment(){if(this._char==="/"||this.peekChar()==="*"){this.readChar(),this.readChar();for(let e=1;0<e&&this._char!=="\0";){if(this.readChar(),this._char==="/"&&this.peekChar()==="*"){e++,this.readChar();continue}if(this._char==="*"&&this.peekChar()==="/"){e--,this.readChar();continue}}this.readChar(),this.readChar(),this.skipWhitespace()}}isDigit(e){return e=e.charCodeAt(0),48<=e&&e<=57}readNumber(){for(var e=this._currPosition;this.isDigit(this._char);)this.readChar();if(this._char===".")for(this.readChar();this.isDigit(this._char);)this.readChar();return this._source.substring(e,this._currPosition)}readValue(){return this.isDigit(this._char)?this.readNumber():this.readIdentifier()}readLine(){var e=this._currPosition,t=this._source.indexOf(`
`,this._currPosition);return t==-1&&(t=this._source.length),this._line++,this._column=0,this._currPosition=t,this._nextPosition=t+1,this._source.substring(e,t+1)}}class Fn extends Mr{constructor(e){super(e.source),s(this,"_tokenPosition",0),s(this,"_tokens",[]),this.parse()}skipToken(e){this._tokenPosition+=e}peekToken(e){return this._tokenPosition+e>=this._tokens.length?new Ar(g.EOF,"\0"):this._tokens[this._tokenPosition+e]}GetNextToken(){var e;return this._tokenPosition>=this._tokens.length?new Ar(g.EOF,"\0"):(e=this._tokens[this._tokenPosition],this._tokenPosition++,e)}get currTokenPosition(){return this._tokenPosition}parse(){var e;for(this.readChar(),this._tokens=new Array;e=this.nextToken(),this._tokens.push(e),e.Type!=g.EOF;);}nextToken(){if(this.skipWhitespace(),this._char==="/"){if(this.peekChar()==="/")return this.skipComment(),this.nextToken();if(this.peekChar()==="*")return this.skipMultilineComment(),this.nextToken()}var e=new Ar;switch(e.Line=this._line,e.Colume=this._column,this._char){case"\0":e.Type=g.EOF,e.Literal="EOF";break;case".":e.Type=g.DOT,e.Literal=".";break;case",":e.Type=g.COMMA,e.Literal=",";break;case":":e.Type=g.COLON,e.Literal=":";break;case"?":e.Type=g.QUEMARK,e.Literal="?";break;case";":e.Type=g.SEMICOLON,e.Literal=";";break;case"(":e.Type=g.LEFTSAMLL,e.Literal="(";break;case")":e.Type=g.RIGHTSAMLL,e.Literal=")";break;case"[":e.Type=g.LEFTMEDI,e.Literal="[";break;case"]":e.Type=g.RIGHTMEDI,e.Literal="]";break;case"{":e.Type=g.LEFTBIG,e.Literal="{";break;case"}":e.Type=g.RIGHTBIG,e.Literal="}";break;case"+":this.peekChar()==="+"?(this.readChar(),e.Type=g.INC,e.Literal="++"):this.peekChar()==="="?(this.readChar(),e.Type=g.ADDASSIGN,e.Literal="+="):(e.Type=g.ADD,e.Literal="+");break;case"-":this.peekChar()==="-"?(this.readChar(),e.Type=g.DEC,e.Literal="--"):this.peekChar()==="="?(this.readChar(),e.Type=g.SUBASSIGN,e.Literal="-="):(e.Type=g.SUB,e.Literal="-");break;case"*":this.peekChar()==="="?(this.readChar(),e.Type=g.MULASSIGN,e.Literal="*="):(e.Type=g.MUL,e.Literal="*");break;case"/":this.peekChar()==="="?(this.readChar(),e.Type=g.DIVASSIGN,e.Literal="/="):(e.Type=g.DIV,e.Literal="/");break;case"&":this.peekChar()==="&"?(this.readChar(),e.Type=g.AND,e.Literal="&&"):(e.Type=g.BITAND,e.Literal="&");break;case"|":this.peekChar()==="|"?(this.readChar(),e.Type=g.OR,e.Literal="||"):(e.Type=g.BITOR,e.Literal="&");break;case"^":e.Type=g.BITXOR,e.Literal="^";break;case"!":this.peekChar()==="="?(this.readChar(),e.Type=g.NOTEQUAL,e.Literal="!="):(e.Type=g.NOT,e.Literal="!");break;case">":this.peekChar()==="="?(this.readChar(),e.Type=g.GREATEREQUAL,e.Literal=">="):this.peekChar()===">"?(this.readChar(),e.Type=g.BITSHIFT_R,e.Literal=">>"):(e.Type=g.GREATER,e.Literal=">");break;case"=":this.peekChar()==="="?(this.readChar(),e.Type=g.EQUAL,e.Literal="=="):(e.Type=g.ASSIGN,e.Literal="=");break;case"<":this.peekChar()==="="?(this.readChar(),e.Type=g.LESSEQUAL,e.Literal="<="):this.peekChar()==="<"?(this.readChar(),e.Type=g.BITSHIFT_L,e.Literal="<<"):(e.Type=g.LESS,e.Literal="<");break;default:return this.isDigit(this._char)?this.readDecimal():(e.Literal=this.readIdentifier(),e.Type=this.lookupIdentifier(e.Literal),this.getChar()=="["&&this.peekChar()=="]"&&e.isBuiltinType()&&(e.Type++,e.Literal+="[]",this.readChar(),this.readChar()),e)}return this.readChar(),e}readDecimal(){var e=new Ar,t=(e.Line=this._line,e.Colume=this._column,e.Type=g.LITERAL,this.readNumber());return this._char==="e"?(e.Literal=t+this._char,this.readChar(),e.Literal+=this._char,this.readChar(),e.Literal+=this.readNumber(),e.Type=g.LITERAL):this._char==="u"?(this.readChar(),e.Type=g.LITERAL,e.Literal=t+"u"):this._char==="f"?(this.readChar(),e.Type=g.LITERAL,e.Literal=t+"f"):(e.Type=g.LITERAL,e.Literal=t),e}lookupIdentifier(e){switch(e){case"void":return g.VOID;case"int":return g.INT;case"uint":return g.UINT;case"bool":case"true":case"false":return g.BOOL;case"float":return g.FLOAT;case"vec2":return g.VEC2;case"vec3":return g.VEC3;case"vec4":return g.VEC4;case"bvec2":return g.BVEC2;case"bvec3":return g.BVEC3;case"bvec4":return g.BVEC4;case"ivec2":return g.IVEC2;case"ivec3":return g.IVEC3;case"ivec4":return g.IVEC4;case"uvec2":return g.UVEC2;case"uvec3":return g.UVEC3;case"uvec4":return g.UVEC4;case"mat2":case"mat2x2":return g.MAT2x2;case"mat2x3":return g.MAT2x3;case"mat2x4":return g.MAT2x4;case"mat3":return g.MAT3x3;case"mat3x2":return g.MAT3x2;case"mat3x3":return g.MAT3x3;case"mat3x4":return g.MAT3x4;case"mat4":return g.MAT4x4;case"mat4x2":return g.MAT4x2;case"mat4x3":return g.MAT4x3;case"mat4x4":return g.MAT4x4;case"sampler":return g.SAMPLER;case"sampler1D":return g.SAMPLER_1D;case"sampler2D":return g.SAMPLER_2D;case"sampler3D":return g.SAMPLER_3D;case"samplerCube":return g.SAMPLER_CUBE;case"samplerShadow":return g.SAMPLER_SHADOW;case"sampler1DShadow":return g.SAMPLER_1D_SHADOW;case"sampler2DShadow":return g.SAMPLER_2D_SHADOW;case"texture1D":return g.TEXTURE_1D;case"texture2D":return g.TEXTURE_2D;case"texture3D":return g.TEXTURE_3D;case"textureCube":return g.TEXTURE_CUBE;case"texture1DArray":return g.TEXTURE_1D_ARRAY;case"texture2DArray":return g.TEXTURE_2D_ARRAY;case"textureCubeArray":return g.TEXTURE_CUBE_ARRAY;case"const":return g.CONST;case"layout":return g.LAYOUT;case"precision":return g.PRECISION;case"attribute":return g.ATTRIBUTE;case"uniform":return g.UNIFORM;case"varying":return g.VARYING;case"invariant":return g.INVARIANT;case"in":return g.IN;case"out":return g.OUT;case"inout":return g.INOUT;case"if":return g.IF;case"else":return g.ELSE;case"for":return g.FOR;case"while":return g.WHILE;case"do":return g.DO;case"break":return g.BREAK;case"return":return g.RETURN;case"continue":return g.CONTINUE;case"struct":return g.STRUCT}return g.IDENT}}class Gn{constructor(){s(this,"name",""),s(this,"value",""),s(this,"args",[])}}class Vn extends Mr{constructor(e){super(e),s(this,"_result"),s(this,"_skipLine"),s(this,"_definitionTables"),this._result="",this._skipLine=!1,this._definitionTables=new Map,this.parse()}parse(){for(this.readChar();this._char!=="\0";){if(this.skipWhitespace(),this._char==="/"){if(this.peekChar()==="/"){this.skipComment();continue}if(this.peekChar()==="*"){this.skipMultilineComment();continue}}if(this._char==="#"){this.readCharAndSkipWhitespace();var e=this.readIdentifier();switch(e){case"version":this.readLine().trim();break;case"define":this.readCharAndSkipWhitespace();var t=this.readIdentifier();if(this.getChar()==="("){var i=new Gn;if(this.readCharAndSkipWhitespace(),this.getChar()!==")")do var a=this.readIdentifier();while(i.args.push(a),this.skipWhitespace(),this.getChar()===","&&this.readCharAndSkipWhitespace(),this.getChar()!==")");this.readCharAndSkipWhitespace(),i.name=t,i.value=this.readLine().trim(),this._definitionTables.set(t,i),this.readCharAndSkipWhitespace()}else{let p=this.readLine().trim();p[0]=="="&&(p=p.substring(1)),this._definitionTables.set(t,p)}break;case"if":t=this.readLine().trim(),t=="0"||t=="false"?this._skipLine=!0:!this._definitionTables.has(t)||(t=this._definitionTables.get(t))!="0"&&t!="false"||(this._skipLine=!0);break;case"ifdef":this.readCharAndSkipWhitespace();var n=this.readIdentifier();this._skipLine=!this._definitionTables.has(n);break;case"else":this._skipLine=!this._skipLine;break;case"endif":this._skipLine=!1;break;default:throw"Unknown preprocessing command:"+e}}else{var o=this.readLine();if(!this._skipLine){for(var h of this._definitionTables.keys()){var l=o.indexOf(h);if(l!=-1){var u=this._definitionTables.get(h);if(typeof u=="string")o=o.replace(h,u);else{var c=u,f=new Mr(o.substring(l+h.length));if(f.readCharAndSkipWhitespace(),f.getChar()==="("){f.readCharAndSkipWhitespace();for(let p=1;f.getChar()!=="\0"&&0<p;){switch(f.getChar()){case"(":p++;break;case")":p--}f.readCharAndSkipWhitespace()}}if(u=l+h.length+f.currPosition,h=o.substring(l,u).trim(),0<c.args.length){let p=[],m=h.substring(h.indexOf("(")+1,h.lastIndexOf(")")).trim(),_=(0<m.length&&(p=this.parseArgs(m)),c.value.substring(c.value.indexOf("(")));for(let v=0;v<c.args.length;v++)_=_.replace(c.args[v],p[v]);_=c.value.substring(0,c.value.indexOf("("))+_,o=o.replace(h,_)}else o=o.replace(h,c.value)}}}this._result+=o}this.readChar()}}}get source(){return this._result}parseArgs(e){let t=[],i=0,a=new Mr(e),n=a.currPosition;if(a.readCharAndSkipWhitespace(),a.getChar()!=="\0")for(a.readCharAndSkipWhitespace();a.getChar()!=="\0";){switch(a.getChar()){case"(":i++;break;case")":i--;break;case",":var o;i==0&&(o=e.substring(n,a.currPosition),t.push(o),n=a.currPosition+1)}a.readCharAndSkipWhitespace()}var h;return n<a.currPosition&&(h=e.substring(n,a.currPosition),t.push(h)),t}}class Hn{constructor(e){s(this,"result"),s(this,"ASTRoot"),s(this,"_syntax"),this.result="",this._syntax=e,this.ASTRoot=e.ASTRoot}generateWGSL(){var e,t,i,a,n,o,h=new qa,l=new Kn,u=[],c=[],f=[];for(e of this.ASTRoot.nodes)if(e instanceof pi)if(e.scope=="in")if(e.nodes[0]instanceof le){h.layoutsIn.push(e);var p=new va;p.name=e.nodes[0].name,p.type=e.nodes[0].type,p.locationID=Number.parseInt(e.qualifier.get("location")),l.inputAttribute.push(p)}else{if(!e.qualifier.has("local_size_x"))throw"not impl";h.workGroupSize=e}else if(e.scope=="out"){if(h.layoutsOut.push(e),!(e.nodes[0]instanceof le))throw"not impl";p=new va,p.name=e.nodes[0].name,p.type=e.nodes[0].type,p.locationID=Number.parseInt(e.qualifier.get("location")),l.outputAttribute.push(p)}else if(e.scope=="uniform")if(c.push(e),e.nodes[0]instanceof le){var m=new ga;m.name=e.nodes[0].name,m.type=e.nodes[0].type,m.setID=Number.parseInt(e.qualifier.get("set")),m.bindingID=Number.parseInt(e.qualifier.get("binding")),l.uniformInfo.push(m)}else{if(!(e.nodes[0]instanceof wt))throw"not impl";m=new ga,m.name="unif"+l.uniformInfo.length.toString(),m.type=e.nodes[0].name,m.setID=Number.parseInt(e.qualifier.get("set")),m.bindingID=Number.parseInt(e.qualifier.get("binding")),l.uniformInfo.push(m)}else e.scope=="buffer"&&u.push(e);else f.push(e);h.stage="fragment";let _=0,v=new Mr(""),S=this._syntax.lexer.source,T=new Map;for(;(_=S.indexOf("gl_",_))!=-1;){v.reset(S.substring(_,_+32)),v.readChar();var y=v.readIdentifier();if(_+=y.length,!T.has(y))switch(T.set(y,y),y){case"gl_InstanceID":h.stage="vertex",h.builtinIn.push("@builtin(instance_index) gl_InstanceID: u32");break;case"gl_Position":h.stage="vertex",h.builtinOut.push("@builtin(position) gl_Position: vec4<f32>"),h.addIdentifier("gl_Position","stout.gl_Position");break;case"gl_VertexIndex":h.stage="vertex",h.builtinIn.push("@builtin(vertex_index) gl_VertexIndex: u32");break;case"gl_FrontFacing":h.stage="fragment",h.builtinIn.push("@builtin(front_facing) gl_FrontFacing: bool");break;case"gl_FragDepth":h.stage="fragment",h.builtinOut.push("@builtin(frag_depth) gl_FragDepth: f32"),h.addIdentifier("gl_FragDepth","stout.gl_FragDepth");break;case"gl_WorkGroupID":h.stage="compute",h.builtinIn.push("@builtin(workgroup_id) gl_WorkGroupID: vec3<u32>");break;case"gl_NumWorkGroups":h.stage="compute",h.builtinIn.push("@builtin(num_workgroups) gl_NumWorkGroups: vec3<u32>");break;case"gl_LocalInvocationID":h.stage="compute",h.builtinIn.push("@builtin(local_invocation_id) gl_LocalInvocationID: vec3<u32>");break;case"gl_LocalInvocationIndex":h.stage="compute",h.builtinIn.push("@builtin(local_invocation_index) gl_LocalInvocationIndex: u32");break;case"gl_GlobalInvocationID":h.stage="compute",h.builtinIn.push("@builtin(global_invocation_id) gl_GlobalInvocationID: vec3<u32>");break;default:throw"Unprocessed built-in variables: "+y}}for(t of c)t.nodes[0]instanceof wt&&(l.sourceCode+=t.nodes[0].formatToWGSL(h,0),l.sourceCode+=`\r
`);for(i of c)l.sourceCode+=i.formatToWGSL(h,0);l.sourceCode+=`\r
`;for(a of u)a.nodes[0]instanceof wt&&(l.sourceCode+=a.nodes[0].formatToWGSL(h,0),l.sourceCode+=`\r
`);for(n of u)l.sourceCode+=n.formatToWGSL(h,0);l.sourceCode+=`\r
`;for(o of f)l.sourceCode+=o.formatToWGSL(h,0),o instanceof le&&(l.sourceCode+=`;\r
`);return l}}class qa{constructor(e){s(this,"_stage","fragment"),s(this,"_builtinIn",[]),s(this,"_builtinOut",[]),s(this,"_layoutsIn",[]),s(this,"_layoutsOut",[]),s(this,"_layoutUniformCount",0),s(this,"_workGroupSize"),s(this,"_parentContext"),s(this,"_identifierEnv",new Map),this._parentContext=e}get stage(){return this.parentContext!=null?this.parentContext.stage:this._stage}set stage(e){this.parentContext!=null&&(this.parentContext.stage=e),this._stage=e}get builtinIn(){return this.parentContext!=null?this.parentContext.builtinIn:this._builtinIn}get builtinOut(){return this.parentContext!=null?this.parentContext.builtinOut:this._builtinOut}get layoutsIn(){return this.parentContext!=null?this.parentContext.layoutsIn:this._layoutsIn}get layoutsOut(){return this.parentContext!=null?this.parentContext.layoutsOut:this._layoutsOut}get layoutUniformCount(){return this.parentContext!=null?this.parentContext.layoutUniformCount:this._layoutUniformCount}set layoutUniformCount(e){this.parentContext!=null?this.parentContext.layoutUniformCount=e:this._layoutUniformCount=e}get workGroupSize(){return this.parentContext!=null?this.parentContext.workGroupSize:this._workGroupSize}set workGroupSize(e){this.parentContext!=null&&(this.parentContext.workGroupSize=e),this._workGroupSize=e}get parentContext(){return this._parentContext}findIdentifier(e){return this._identifierEnv.has(e)?this._identifierEnv.get(e):this._parentContext!=null?this._parentContext.findIdentifier(e):e}addIdentifier(e,t){this._identifierEnv.set(e,t)}hasIdentifier(e){return this._identifierEnv.has(e)}}class se{constructor(){s(this,"nodes",[])}addNode(e){this.nodes.push(e)}formatToWGSL(e,t){return""}}class wt extends se{constructor(e){super(),s(this,"name",""),s(this,"fields",[]),this.name=e}static parse(e){if(e.peekToken(0).Type!=g.IDENT||e.peekToken(1).Type!=g.LEFTBIG)throw"Error parsing structure: Unexpected character";var t=new wt(e.peekToken(0).Literal);for(e.skipToken(2);e.peekToken(0).Type!=g.RIGHTBIG;){var i=le.parse(e);t.fields.push(i)}return e.peekToken(0).Type==g.RIGHTBIG&&e.skipToken(1),e.peekToken(0).Type==g.SEMICOLON&&e.skipToken(1),t}formatToWGSL(e,t){let i="",a=t<=0?"":"    ".repeat(t);i+=a+"struct "+this.name+` {\r
`;for(var n of this.fields)n.arraySize.nodes.length<=0?i+=a+"  "+n.name+": "+Ke(n.type)+`,\r
`:n.arraySize.nodes[0]instanceof Et?i+=a+"  "+n.name+": array<"+Ke(n.type)+", "+n.arraySize.nodes[0].value+`>,\r
`:i+=a+"  "+n.name+": array<"+Ke(n.type)+", "+n.arraySize.nodes[0].formatToWGSL(e,0)+`>,\r
`;return i+=a+`};\r
`}}class Hi extends se{constructor(e,t,i,a){super(),s(this,"name"),s(this,"args"),s(this,"body"),s(this,"returnType"),this.name=e,this.args=t,this.body=i,this.returnType=a}static parse(e){if(!e.peekToken(0).isBuiltinType()&&e.peekToken(0).Type!=g.VOID||e.peekToken(1).Type!=g.IDENT||e.peekToken(2).Type!=g.LEFTSAMLL)throw"Error parsing function: Unexpected character";var t=e.peekToken(0).Literal,i=e.peekToken(1).Literal,a=(e.skipToken(2),new Array);if(e.peekToken(0).Type!=g.LEFTSAMLL)throw"Error parsing function parameter list: Unexpected character";for(e.skipToken(1);e.peekToken(0).Type!=g.EOF;){if(e.peekToken(0).Type==g.RIGHTSAMLL){e.skipToken(1);break}e.peekToken(0).Type!=g.INOUT&&e.peekToken(0).Type!=g.IN&&e.peekToken(0).Type!=g.OUT||e.skipToken(1);var n=le.parse(e);a.push(n),e.peekToken(0).Type==g.COMMA&&e.skipToken(1)}var o=tt.parse(e);return new Hi(i,a,o,t)}formatToWGSL(e,t){let i="",a=t<=0?"":"    ".repeat(t),n,o=0<e.layoutsOut.length||0<e.builtinOut.length;switch(e.stage){case"compute":n="ComputeOutput";break;case"vertex":n="VertexOutput";break;case"fragment":n="FragmentOutput";break;default:n="StructOutput"}if(this.name=="main"&&o){i+="struct "+n+` {\r
`;for(var h of e.layoutsOut){var l;h.nodes[0]instanceof le&&(l=h.nodes[0],h.qualifier.size==1&&h.qualifier.has("location")&&(i+="  @location("+h.qualifier.get("location")+") "),i+=l.name+": "+Ke(l.type)+`,\r
`,e.addIdentifier(l.name,"stout."+l.name))}var u;for(u of e.builtinOut)i+="  "+u+`,\r
`;i+=`};\r
\r
`}let c="";if(this.name=="main"&&(e.workGroupSize!=null?c+="@"+e.stage+" "+e.workGroupSize.formatToWGSL(e,0)+` \r
`:c+="@"+e.stage+`\r
`),e=new qa(e),c+=a+"fn "+this.name+"(",this.name!="main"){for(let y=0;y<this.args.length;y++){var f=this.args[y];0<y&&(c+=", "),c+=f.name+": "+Ke(f.type),e.addIdentifier(f.name,f.name)}c+=") -> "+Ke(this.returnType)}else{var p,m=e.layoutsIn;for(let y=0;y<m.length;y++){var _,v=m[y];0<y?c+=`,\r
    `:c+=`\r
    `,v.nodes[0]instanceof le&&(_=v.nodes[0],v.qualifier.size==1&&v.qualifier.has("location")&&(c+="@location("+v.qualifier.get("location")+") "),c+=_.name+": "+Ke(_.type),e.addIdentifier(_.name,_.name))}0<m.length&&(c+=`,\r
    `);for(p of e.builtinIn)c+=p+`,\r
    `;c+=o?") -> "+n:") "}let S="";this.name=="main"&&o&&(S+="    var stout: "+n+` ;\r
`);for(var T of this.body.nodes)S+=T.formatToWGSL(e,t+1),T instanceof hr||T instanceof ar||T instanceof ir||(S+=`;\r
`);return this.name=="main"&&o&&(S+=`    return stout;\r
`),i=(i=(i+=c+` {\r
`)+S)+(a+`}\r
`)+`\r
`}}class Xi extends se{constructor(){super(),s(this,"args",[])}static parse(e){if(e.peekToken(0).Type!=g.LEFTSAMLL)throw"Error parsing function argument table: Unexpected character";e.skipToken(1);for(var t=new Xi;e.peekToken(0).Type!=g.EOF;){if(e.peekToken(0).Type==g.RIGHTSAMLL){e.skipToken(1);break}var i=V.parse(e);t.args.push(i),e.peekToken(0).Type==g.COMMA&&e.skipToken(1)}return t}}class rr extends se{constructor(e,t){super(),s(this,"name"),s(this,"args"),this.name=e,this.args=t}static parse(e){var t;if(e.peekToken(0).isDataType()&&e.peekToken(1).Type==g.LEFTSAMLL)return t=e.peekToken(0).Literal,e.skipToken(1),e=Xi.parse(e),new rr(t,e);throw"Error parsing function argument table: Unexpected character"}formatToWGSL(e,t){let i="",a=t<=0?"":"    ".repeat(t);if(this.name=="texture"&&this.args.args[0].nodes[0]instanceof rr){var n=this.args.args[0].nodes[0];if(n.name=="sampler2D"){i+=a+"textureSample(";for(let u=0;u<n.args.args.length;u++){var o=n.args.args[u];0<u&&(i+=", "),i+=o.formatToWGSL(e,0)}for(let u=1;u<this.args.args.length;u++){var h=this.args.args[u];0<u&&(i+=", "),i+=h.formatToWGSL(e,0)}return i+=")"}}i+=a+Ke(this.name)+"(";for(let u=0;u<this.args.args.length;u++){var l=this.args.args[u];0<u&&(i+=", "),i+=l.formatToWGSL(e,0)}return i+=")"}}class le extends se{constructor(e,t,i=new V){super(),s(this,"type"),s(this,"name"),s(this,"arraySize"),s(this,"hasIn"),s(this,"hasOut"),s(this,"hasConst"),this.type=e,this.name=t,this.hasIn=!1,this.hasOut=!1,this.hasConst=!1,this.arraySize=i}static parse(e){let t=new le("",""),i=e.peekToken(0);if(i.Type==g.CONST)e.skipToken(1),t.hasConst=!0;else if(i.Type==g.IN)e.skipToken(1),t.hasIn=!0;else if(i.Type==g.OUT)e.skipToken(1),t.hasOut=!0;else if(i.Type==g.INOUT)e.skipToken(1),t.hasIn=!0,t.hasOut=!0;else if(!i.isDataType())throw"Error parsing declaration expression: Unexpected character("+i.Literal+")";if((i=e.peekToken(0)).isDataType()&&e.peekToken(1).Type==g.LEFTMEDI){if(t.type=i.Literal,e.skipToken(2),t.arraySize=V.parse(e),e.peekToken(0).Type==g.RIGHTMEDI&&e.skipToken(1),e.peekToken(0).Type!=g.IDENT)throw"Unexpected";t.name=e.peekToken(0).Literal,e.skipToken(1)}else if(i.isDataType()&&e.peekToken(1).Type==g.IDENT&&e.peekToken(2).Type==g.LEFTMEDI)t.type=e.peekToken(0).Literal,t.name=e.peekToken(1).Literal,e.skipToken(3),e.peekToken(0).Type!=g.RIGHTMEDI&&(t.arraySize=V.parse(e),e.peekToken(0).Type!=g.RIGHTMEDI)||e.skipToken(1);else{if(!i.isDataType()||e.peekToken(1).Type!=g.IDENT)throw"Error parsing declaration expression: Unexpected character("+i.Literal+")";t.type=e.peekToken(0).Literal,t.name=e.peekToken(1).Literal,e.skipToken(2)}var a,n,o;if((i=e.peekToken(0)).Type==g.SEMICOLON)e.skipToken(1);else if(i.Type!=g.RIGHTSAMLL)if(i.Type==g.ASSIGN)a=e.peekToken(0),e.skipToken(1),n=new Mt(t.name),o=V.parse(e),e.peekToken(0).Type==g.SEMICOLON&&e.skipToken(1),t.addNode(new kt(a,n,o));else{if(i.Type!=g.COMMA)throw"Error parsing declaration expression: Unexpected character("+e.peekToken(0).Literal+")";for(;e.peekToken(0).Type==g.COMMA&&e.peekToken(1).Type==g.IDENT;){var h=new le(t.type,e.peekToken(1).Literal);t.addNode(h),e.skipToken(2),e.peekToken(0).Type==g.ASSIGN&&(e.skipToken(-1),h.addNode(V.parse(e)))}}return t}formatToWGSL(e,t){let i="",a=t<=0?"":"    ".repeat(t);if(this.hasConst?i+=a+"let ":i+=a+"var ",e.addIdentifier(this.name,this.name),this.arraySize.nodes.length<=0?i+=this.name+": "+Ke(this.type):this.arraySize.nodes[0]instanceof Et?i+=this.name+": array<"+Ke(this.type)+", "+this.arraySize.nodes[0].value+">":i+=this.name+": array<"+Ke(this.type)+", "+this.arraySize.nodes[0].formatToWGSL(e,0)+">",0<this.nodes.length&&this.nodes[0]instanceof kt)i+=" = "+this.nodes[0].rightValue.formatToWGSL(e,0);else if(0<this.nodes.length&&this.nodes[0]instanceof V&&this.nodes[0].nodes[0]instanceof kt)i+=" = "+this.nodes[0].nodes[0].rightValue.formatToWGSL(e,0);else if(0<this.nodes.length&&this.nodes[0]instanceof le){i+=`;\r
`;for(var n of this.nodes)i+=n.formatToWGSL(e,t)+`;\r
`}else i+=`;\r
`;return i}}class ir extends se{constructor(e,t,i,a){super(),s(this,"expression1"),s(this,"condition"),s(this,"expression2"),s(this,"loopBody"),this.expression1=e,this.condition=t,this.expression2=i,this.loopBody=a}static parse(e){if(e.peekToken(0).Type!=g.FOR||e.peekToken(1).Type!=g.LEFTSAMLL)throw"Error parsing for loop: Unexpected character";{e.skipToken(2);let t;e.peekToken(0).Type==g.SEMICOLON?(e.skipToken(1),t=new V):(e.peekToken(0).isDataType()&&e.peekToken(1).Type==g.IDENT&&e.peekToken(2).Type==g.ASSIGN?(t=new le(e.peekToken(0).Literal,e.peekToken(1).Literal),e.skipToken(1),t.addNode(V.parse(e))):t=V.parse(e),e.peekToken(0).Type==g.SEMICOLON&&e.skipToken(1));let i;e.peekToken(0).Type==g.SEMICOLON?(e.skipToken(1),i=new V):(i=V.parse(e),e.peekToken(0).Type==g.SEMICOLON&&e.skipToken(1));let a;e.peekToken(0).Type==g.SEMICOLON?(e.skipToken(1),a=new V):(a=V.parse(e),e.peekToken(0).Type==g.SEMICOLON&&e.skipToken(1)),e.peekToken(0).Type==g.RIGHTSAMLL&&e.skipToken(1);let n;return n=e.peekToken(0).Type==g.LEFTBIG?tt.parse(e):new tt,new ir(t,i,a,n)}}formatToWGSL(e,t){let i="",a=t<=0?"":"    ".repeat(t);i=(i=(i=(i+=a+"for (")+this.expression1.formatToWGSL(e,0)+"; ")+this.condition.formatToWGSL(e,0)+"; ")+this.expression2.formatToWGSL(e,0)+`) { \r
`;for(var n of this.loopBody.nodes)i+=n.formatToWGSL(e,t+1),n instanceof hr||n instanceof ar||n instanceof ir||(i+=`;\r
`);return i+=a+`} \r
`}}class ar extends se{constructor(e,t){super(),s(this,"conditionExpr"),s(this,"loopBody"),this.conditionExpr=e,this.loopBody=t}static parse(e){var t;if(e.peekToken(0).Type==g.WHILE)return e.skipToken(1),e.peekToken(0).Type==g.LEFTSAMLL&&e.skipToken(1),t=V.parse(e),e.peekToken(0).Type==g.RIGHTSAMLL&&e.skipToken(1),e=tt.parse(e),new ar(t,e);throw"Error parsing while loop: Unexpected character"}formatToWGSL(e,t){let i="",a=t<=0?"":"    ".repeat(t);i=(i+=a+`loop {\r
`)+a+"    if ("+this.conditionExpr.formatToWGSL(e,0)+`) { break; }\r
\r
`;for(var n of this.loopBody.nodes)i+=n.formatToWGSL(e,t+1),n instanceof hr||n instanceof ar||n instanceof ir||(i+=`;\r
`);return i+=a+`}\r
`}}class hr extends se{constructor(e,t,i){super(),s(this,"conditionExpr"),s(this,"trueBranch"),s(this,"falseBranch"),this.conditionExpr=e,this.trueBranch=t,this.falseBranch=i}static parse(e){if(e.peekToken(0).Type!=g.IF)throw"Error parsing IF branch statement: Unexpected character";{e.skipToken(1),e.peekToken(0).Type==g.LEFTSAMLL&&e.skipToken(1);let t=V.parse(e),i,a=new tt;if(e.peekToken(0).Type==g.RIGHTSAMLL&&e.skipToken(1),e.peekToken(0).Type==g.LEFTBIG?i=tt.parse(e):(i=new tt,e.peekToken(0).Type==g.RETURN?i.addNode(fi.parse(e)):i.addNode(V.parse(e))),e.peekToken(0).Type==g.ELSE){if(e.skipToken(1),e.peekToken(0).Type!=g.LEFTBIG)throw"not impl";a=tt.parse(e)}return new hr(t,i,a)}}formatToWGSL(e,t){let i="",a=t<=0?"":"    ".repeat(t);i+=a+"if ("+this.conditionExpr.formatToWGSL(e,0)+`) {\r
`;for(var n of this.trueBranch.nodes)i+=n.formatToWGSL(e,t+1)+`;\r
`;if(0<this.falseBranch.nodes.length){i+=a+`} else {\r
`;for(var o of this.falseBranch.nodes)i+=o.formatToWGSL(e,t+1)+`;\r
`}return i+=a+`}\r
`}}class V extends se{constructor(){super()}static parse(e){let t=new Array,i=new Array,a=0;for(;e.peekToken(0).Type!=g.EOF;){var n,o,h,l=e.peekToken(0);if(l.Type==g.SEMICOLON||l.Type==g.RIGHTMEDI||l.Type==g.COMMA||l.Type==g.COLON||l.Type==g.RIGHTBIG)break;if(l.isOperation())l.isOperation()&&(l.Type==g.INC||l.Type==g.DEC?(n=l,e.skipToken(1),o=V.parse(e),i.push(new mr(n,void 0,o))):(0<t.length&&(t[t.length-1].nOperationPriorityLevel<=l.nOperationPriorityLevel?V.unionOperation(t,i):0<t.length&&t[t.length-1].Literal=="-"&&(n=t.pop(),o=i.pop(),i.push(new mr(n,void 0,o)))),t.push(l),e.skipToken(1)));else if(l.Type==g.LITERAL)i.push(new Et(l.Literal)),e.skipToken(1);else if(l.Type==g.LEFTSAMLL)a++,t.push(l),e.skipToken(1);else if(l.Type==g.RIGHTSAMLL){if(a<=0)break;for(a--;V.unionOperation(t,i););t[t.length-1].Type==g.LEFTSAMLL&&(t.pop(),(h=new Xn).addNode(i.pop()),i.push(h)),e.skipToken(1)}else if(l.Type==g.IDENT)e.peekToken(1).Type==g.INC||e.peekToken(1).Type==g.DEC?(h=e.peekToken(1),u=new Mt(l.Literal),i.push(new mr(h,u,void 0)),e.skipToken(2)):e.peekToken(1).Type==g.LEFTSAMLL?i.push(rr.parse(e)):e.peekToken(1).Type==g.DOT?i.push(ri.parse(e)):e.peekToken(1).Type!=g.LEFTMEDI?(i.push(new Mt(l.Literal)),e.skipToken(1)):i.push(sr.parse(e));else if(l.isBuiltinType()&&e.peekToken(1).Type==g.LEFTSAMLL)i.push(rr.parse(e));else if(l.isAssignOperation()){var u=l,c=(e.skipToken(1),i.pop()),f=V.parse(e);i.push(new kt(u,c,f))}else if(l.Type==g.LEFTBIG&&(e.peekToken(1).Type==g.LITERAL||e.peekToken(1).Type==g.SUB&&e.peekToken(2).Type==g.LITERAL))i.push(ti.parse(e));else if(l.Type==g.QUEMARK){0<t.length&&t[t.length-1].nOperationPriorityLevel<=l.nOperationPriorityLevel&&V.unionOperation(t,i),e.skipToken(1);var c=i.pop(),f=V.parse(e),p=(e.peekToken(0).Type==g.COLON&&e.skipToken(1),V.parse(e));if(i.push(new Yn(c,f,p)),e.peekToken(-1).Type==g.SEMICOLON)break}else{if(l.Type!=g.LEFTMEDI)throw"An unexpected character";e.skipToken(1),p=V.parse(e),l=(e.peekToken(0).Type==g.RIGHTMEDI&&e.skipToken(1),i.pop()),i.push(new sr(l,p))}}for(;0<t.length&&V.unionOperation(t,i););var m;if(t.length<=0&&i.length==1)return(m=new V).addNode(i.pop()),m;throw"Error parsing expression: Unexpected character("+e.peekToken(0).Literal+")"}formatToWGSL(e,t){return this.nodes[0].formatToWGSL(e,t)}static unionOperation(e,t){var i,a;return e.length<0||t.length<2?0<e.length&&e[e.length-1].Literal=="-"&&(i=e.pop(),a=t.pop(),t.push(new mr(i,void 0,a)),!0):!!e[e.length-1].isOperation()&&(i=t.pop(),a=e.pop(),e=t.pop(),a.Type==g.DOT?t.push(new ri(e,i)):t.push(new kt(a,e,i)),!0)}}class Xn extends se{constructor(){super()}formatToWGSL(e,t){return(t<=0?"":"    ".repeat(t))+"("+this.nodes[0].formatToWGSL(e,0)+")"}}class Mt extends se{constructor(e){super(),s(this,"name"),this.name=e}formatToWGSL(e,t){return(t<=0?"":"    ".repeat(t))+e.findIdentifier(this.name)}}class Et extends se{constructor(e){super(),s(this,"value"),this.value=e}static parse(e){var t,i=e.peekToken(0);if(i.Type==g.SUB&&e.peekToken(1).Type==g.LITERAL)return t=new Et("-"+e.peekToken(1).Literal),e.skipToken(2),t;if(i.Type==g.LITERAL)return t=new Et(i.Literal),e.skipToken(1),t;throw"Error parsing literal constants: Unexpected characters("+i.Literal+")"}formatToWGSL(e,t){return(t<=0?"":"    ".repeat(t))+this.value}}class ti extends Et{constructor(e){super(""),s(this,"arrayValue"),this.arrayValue=e}static parse(e){if(e.peekToken(0).Type==g.LEFTBIG&&e.peekToken(1).Type==g.LITERAL||e.peekToken(0).Type==g.LEFTBIG&&e.peekToken(1).Type==g.SUB&&e.peekToken(2).Type==g.LITERAL){e.skipToken(1);for(var t=[];e.peekToken(0).Type!=g.RIGHTBIG;)if(e.peekToken(0).Type==g.LEFTSAMLL)t.push(ti.parse(e));else{if(t.push(Et.parse(e)),e.peekToken(0).Type!=g.COMMA){if(e.peekToken(0).Type!=g.RIGHTBIG)throw"Error parsing array constants: Unexpected characters";e.skipToken(1);break}e.skipToken(1)}return new ti(t)}throw"Error parsing array constants: Unexpected characters"}formatToWGSL(e,t){let i="",a=t<=0?"":"    ".repeat(t);this.arrayValue[0].value.includes(".")?i+=a+"array<f32, "+this.arrayValue.length.toString()+">(":i+=a+"array<i32, "+this.arrayValue.length.toString()+">(";for(let n=0;n<this.arrayValue.length;n++)0<n&&(i+=", "),i+=this.arrayValue[n].formatToWGSL(e,0);return i+=")"}}class Yi extends se{constructor(){super()}static parse(e){if(e.peekToken(0).Type==g.CONTINUE&&e.peekToken(1).Type==g.SEMICOLON)return e.skipToken(2),new Yi;throw"Error parsing continue: Unexpected character"}formatToWGSL(e,t){var i="";return i+=(t<=0?"":"    ".repeat(t))+"continue"}}class fi extends se{constructor(e){super(),s(this,"value"),this.value=e}static parse(e){var t;if(e.peekToken(0).Type==g.RETURN)return e.skipToken(1),t=V.parse(e),e.peekToken(0).Type==g.SEMICOLON&&e.skipToken(1),new fi(t);throw"Error parsing return expression: Unexpected character"}formatToWGSL(e,t){var i="";return i+=(t<=0?"":"    ".repeat(t))+"return "+this.value.formatToWGSL(e,0)}}class mr extends se{constructor(e,t,i){super(),s(this,"op"),s(this,"leftValue"),s(this,"rightValue"),this.op=e,this.leftValue=t,this.rightValue=i}formatToWGSL(e,t){let i="",a=t<=0?"":"    ".repeat(t);return this.op.Literal=="++"||this.op.Literal=="--"?this.leftValue!=null?(t=this.leftValue.formatToWGSL(e,0),i+=a+t+" = "+t+" "+this.op.Literal[0]+" 1"):(t=this.rightValue.formatToWGSL(e,0),i+=a+t+" = "+t+" "+this.op.Literal[0]+" 1"):this.leftValue!=null?i+=a+this.leftValue.formatToWGSL(e,0)+this.op.Literal:i+=a+this.op.Literal+this.rightValue.formatToWGSL(e,0),i}}class kt extends se{constructor(e,t,i){super(),s(this,"op"),s(this,"leftValue"),s(this,"rightValue"),this.op=e,this.leftValue=t,this.rightValue=i}formatToWGSL(e,t){var i="";return i+=(t<=0?"":"    ".repeat(t))+this.leftValue.formatToWGSL(e,0)+" "+this.op.Literal+" "+this.rightValue.formatToWGSL(e,0)}}class Yn extends se{constructor(e,t,i){super(),s(this,"condition"),s(this,"expression1"),s(this,"expression2"),this.condition=e,this.expression1=t,this.expression2=i}static parse(e){throw"Error parsing ternary operation expression: Unexpected character"}formatToWGSL(e,t){return""}}class ri extends se{constructor(e,t){super(),s(this,"leftValue"),s(this,"rightValue"),this.leftValue=e,this.rightValue=t}static parse(e){var t,i;if(e.peekToken(0).Type==g.IDENT&&e.peekToken(1).Type==g.DOT&&e.peekToken(2).Type==g.IDENT)return t=new Mt(e.peekToken(0).Literal),i=new Mt(e.peekToken(2).Literal),e.skipToken(3),new ri(t,i);throw"Error parsing selection expression: Unexpected character"}formatToWGSL(e,t){return(t<=0?"":"    ".repeat(t))+this.leftValue.formatToWGSL(e,0)+"."+this.rightValue.formatToWGSL(e,0)}}class sr extends se{constructor(e,t){super(),s(this,"leftValue"),s(this,"indexValue"),this.leftValue=e,this.indexValue=t}static parse(e){if(e.peekToken(0).Type!=g.IDENT||e.peekToken(1).Type!=g.LEFTMEDI)throw"Error parsing index expression: Unexpected character";{var t=new Mt(e.peekToken(0).Literal),i=(e.skipToken(2),V.parse(e));e.peekToken(0).Type==g.RIGHTMEDI&&e.skipToken(1);let a=new sr(t,i);for(;e.peekToken(0).Type==g.LEFTMEDI;)e.skipToken(1),i=V.parse(e),e.peekToken(0).Type==g.RIGHTMEDI&&e.skipToken(1),a=new sr(a,i);return a}}formatToWGSL(e,t){return(t<=0?"":"    ".repeat(t))+this.leftValue.formatToWGSL(e,0)+"["+this.indexValue.formatToWGSL(e,0)+"]"}}class tt extends se{constructor(){super()}static parse(e){if(e.peekToken(0).Type!=g.LEFTBIG)throw"Error parsing block: Unexpected symbol";e.skipToken(1);var t=new tt;for(let l=1;0<l&&e.peekToken(0).Type!=g.EOF;){var i=e.peekToken(0);if(i.Type==g.LEFTBIG)l++,e.skipToken(1);else if(i.Type==g.RIGHTBIG)l--,e.skipToken(1);else if(i.Type==g.SEMICOLON)e.skipToken(1);else if(i.isDataType()&&e.peekToken(1).Type==g.IDENT)t.addNode(le.parse(e));else if(i.Type==g.CONST&&e.peekToken(1).isDataType()&&e.peekToken(2).Type==g.IDENT)t.addNode(le.parse(e));else if(i.Type==g.IDENT&&e.peekToken(1).Type==g.ASSIGN)t.addNode(V.parse(e)),e.peekToken(0).Type==g.SEMICOLON&&e.skipToken(1);else if(i.Type==g.IDENT&&e.peekToken(1).Type==g.LEFTMEDI){var a=sr.parse(e);e.peekToken(0).Type==g.ASSIGN?(n=e.peekToken(0),o=(e.skipToken(1),V.parse(e)),e.peekToken(0).Type==g.RIGHTMEDI&&e.skipToken(1),t.addNode(new kt(n,a,o))):t.addNode(a)}else if(i.Type==g.IDENT&&e.peekToken(1).Type==g.DOT){var n=V.parse(e);t.addNode(n)}else if(i.Type==g.IDENT&&e.peekToken(1).isAssignOperation()){var o=e.peekToken(1),a=new Mt(i.Literal),h=(e.skipToken(2),V.parse(e));e.peekToken(0).Type==g.SEMICOLON&&e.skipToken(1),t.addNode(new kt(o,a,h))}else if(i.Type!=g.IDENT||e.peekToken(1).Type!=g.INC&&e.peekToken(1).Type!=g.DEC||e.peekToken(2).Type!=g.SEMICOLON)if(i.Type==g.RETURN)t.addNode(fi.parse(e));else if(i.Type==g.CONTINUE)t.addNode(Yi.parse(e));else if(i.Type==g.WHILE)t.addNode(ar.parse(e));else if(i.Type==g.FOR)t.addNode(ir.parse(e));else if(i.Type==g.IF)t.addNode(hr.parse(e));else{if(i.Type!=g.IDENT||e.peekToken(1).Type!=g.LEFTSAMLL)throw"Error parsing block: Unexpected symbol("+i.Literal+")";t.addNode(rr.parse(e)),e.peekToken(0).Type==g.SEMICOLON&&e.skipToken(0)}else h=e.peekToken(1),t.addNode(new mr(h,new Mt(i.Literal),void 0)),e.skipToken(3)}return t}}class Wi extends se{constructor(e,t){super(),s(this,"type"),s(this,"qualifier"),this.type=t,this.qualifier=e}static parse(e){var t;if(e.peekToken(0).Type==g.PRECISION&&e.peekToken(1).Type==g.IDENT&&e.peekToken(2).isBuiltinType())return t=new Wi(e.peekToken(1).Literal,e.peekToken(2).Literal),e.skipToken(3),e.peekToken(0).Type==g.SEMICOLON&&e.skipToken(1),t;throw"Error parsing precision qualifier: Unexpected character"}formatToWGSL(e,t){return""}}class pi extends se{constructor(){super(),s(this,"scope",""),s(this,"qualifier",new Map)}addQualifier(e,t=""){this.qualifier.set(e,t)}static parse(e){if(e.peekToken(0).Type!=g.LAYOUT||e.peekToken(1).Type!=g.LEFTSAMLL)throw"Error parsing layout qualifier: Unexpected symbol";var t,i=new pi;e.skipToken(2);do if(e.peekToken(0).Type==g.IDENT)if(e.peekToken(1).Type==g.ASSIGN&&e.peekToken(2).Type==g.LITERAL){var a=e.peekToken(0).Literal,n=e.peekToken(2).Literal;if(i.addQualifier(a,n),e.skipToken(3),e.peekToken(0).Type==g.COMMA){e.skipToken(1);continue}e.peekToken(0).Line=0}else{if(e.peekToken(1).Type==g.RIGHTSAMLL){a=e.peekToken(0).Literal,i.addQualifier(a,""),e.skipToken(1);break}if(e.peekToken(1).Type==g.COMMA){n=e.peekToken(0).Literal,i.addQualifier(n,""),e.skipToken(2);continue}}while(e.peekToken(0).Type!=g.RIGHTSAMLL);if(e.peekToken(0).Type==g.RIGHTSAMLL&&e.skipToken(1),i.scope=e.peekToken(0).Literal,e.skipToken(1),e.peekToken(0).Type==g.SEMICOLON)return e.skipToken(1),i;if(e.peekToken(0).isBuiltinType()&&e.peekToken(1).Type==g.IDENT&&e.peekToken(2).Type==g.SEMICOLON)return t=new le(e.peekToken(0).Literal,e.peekToken(1).Literal),i.addNode(t),e.skipToken(3),i;if(e.peekToken(0).Type==g.IDENT&&e.peekToken(1).Type==g.LEFTBIG)return t=wt.parse(e),i.addNode(t),e.peekToken(0).Type==g.IDENT&&e.peekToken(1).Type==g.SEMICOLON&&(t.addNode(new le(t.name,e.peekToken(0).Literal)),e.skipToken(2)),i;throw"Error parsing layout qualifier type: Unexpected symbol("+e.peekToken(0).Literal+")"}formatToWGSL(e,t){let i="";if(this.qualifier.size==1&&this.qualifier.has("location"))i+="@location("+this.qualifier.get("location")+") ";else if(this.qualifier.size==2&&this.qualifier.has("set")&&this.qualifier.has("binding"))i+="@group("+this.qualifier.get("set")+") @binding("+this.qualifier.get("binding")+") ";else if(1<=this.qualifier.size&&this.qualifier.has("binding"))i+="@group(0) @binding("+this.qualifier.get("binding")+") ";else if(this.qualifier.size==1&&this.qualifier.has("push_constant"))i+="@push_constant ";else if(1<=this.qualifier.size&&this.qualifier.has("local_size_x"))i=(i=(i=(i+="@workgroup_size(")+(this.qualifier.get("local_size_x")+", "))+(this.qualifier.has("local_size_y")?this.qualifier.get("local_size_y")+", ":"1, "))+(this.qualifier.has("local_size_z")?this.qualifier.get("local_size_z")+"":"1")+")";else if(this.nodes.length<=0)return"";var a=this.nodes[0];if(a instanceof le){switch(a.type){case"sampler":case"texture2D":i+="var ";break;default:this.scope=="buffer"?e.stage=="compute"?i+="var<storage, read_write> ":i+="var<storage, read> ":i+="var<"+this.scope+"> "}e.addIdentifier(a.name,a.name),i+=a.name+": "+Ke(a.type)+`;\r
`}else if(a instanceof wt)if(this.scope=="buffer"?e.stage=="compute"?i+="var<storage, read_write> ":i+="var<storage, read> ":i+="var<"+this.scope+"> ",a.nodes.length<=0){let o="unif"+e.layoutUniformCount.toString();for(;e.hasIdentifier(o);)e.layoutUniformCount++,o="unif"+e.layoutUniformCount.toString();for(var n of a.fields)e.addIdentifier(n.name,o+"."+n.name);i+=o+": "+a.name+`;\r
`,e.layoutUniformCount++}else a=a.nodes[0],i+=a.name+": "+a.type+`;\r
`;return i}}function Ke(r){switch(r){case"int":return"i32";case"int[]":return"array<i32>";case"uint":return"u32";case"uint[]":return"array<u32>";case"float":return"f32";case"float[]":return"array<f32>";case"vec2":return"vec2<f32>";case"vec3":return"vec3<f32>";case"vec4":return"vec4<f32>";case"vec2[]":return"array<vec2<f32>>";case"vec3[]":return"array<vec3<f32>>";case"vec4[]":return"array<vec4<f32>>";case"ivec2":return"vec2<i32>";case"ivec3":return"vec3<i32>";case"ivec4":return"vec4<i32>";case"ivec2[]":return"array<vec2<i32>>";case"ivec3[]":return"array<vec3<i32>>";case"ivec4[]":return"array<vec4<i32>>";case"mat2":case"mat2x2":return"mat2x2<f32>";case"mat2x3":return"mat2x3<f32>";case"mat2x4":return"mat2x4<f32>";case"mat2[]":case"mat2x2[]":return"array<mat2x2<f32>>";case"mat2x3[]":return"array<mat2x3<f32>>";case"mat2x4[]":return"array<mat2x4<f32>>";case"mat3":return"mat3x3<f32>";case"mat3x2":return"mat3x2<f32>";case"mat3x3":return"mat3x3<f32>";case"mat3x4":return"mat3x4<f32>";case"mat3[]":return"array<mat3x3<f32>>";case"mat3x2[]":return"array<mat3x2<f32>>";case"mat3x3[]":return"array<mat3x3<f32>>";case"mat3x4[]":return"array<mat3x4<f32>>";case"mat4":return"mat4x4<f32>";case"mat4x2":return"mat4x2<f32>";case"mat4x3":return"mat4x3<f32>";case"mat4x4":return"mat4x4<f32>";case"mat4[]":return"array<mat4x4<f32>>";case"mat4x2[]":return"array<mat4x2<f32>>";case"mat4x3[]":return"array<mat4x3<f32>>";case"mat4x4[]":return"array<mat4x4<f32>>";case"texture2D":return"texture_2d<f32>"}return r}class Wn{constructor(e){s(this,"_lexer"),s(this,"_rootNode"),this._lexer=e,this._rootNode=new se,this.parse()}get lexer(){return this._lexer}parse(){for(;this.peekToken(0).Type!==g.EOF;){var e;this.peekToken(0).Type==g.SEMICOLON?this.skipToken(1):(e=this.parseStatement())!==null&&this._rootNode.addNode(e)}}parseStatement(){var e=this.peekToken();if(e.Type==g.LAYOUT&&this.peekToken(1).Type==g.LEFTSAMLL)return pi.parse(this._lexer);if(e.Type==g.STRUCT)return this.skipToken(1),wt.parse(this._lexer);if((e.isBuiltinType()||e.Type==g.VOID)&&this.peekToken(1).Type==g.IDENT&&this.peekToken(2).Type==g.LEFTSAMLL)return Hi.parse(this._lexer);if(e.Type==g.CONST&&this.peekToken(1).isDataType())return le.parse(this._lexer);if(e.isDataType()&&this.peekToken(1).Type==g.IDENT)return le.parse(this._lexer);if(e.Type==g.OUT&&this.peekToken(1).isDataType()&&this.peekToken(2).Type==g.IDENT)return le.parse(this._lexer);if(e.Type==g.PRECISION)return Wi.parse(this._lexer);throw"Error parsing statement: Unexpected character"}skipToken(e){this._lexer.skipToken(e)}peekToken(e=0){return this._lexer.peekToken(e)}getNextToken(){return this._lexer.GetNextToken()}get ASTRoot(){return this._rootNode}}class Pi{static convertGLSL(e){return e=new Vn(e),e=new Fn(e),e=new Wn(e),new Hn(e).generateWGSL()}}s(Pi,"VertexShader","VertexShader"),s(Pi,"FragmentShader","FragmentShader");class ga{constructor(){s(this,"setID",0),s(this,"bindingID",0),s(this,"name",""),s(this,"type","")}}class va{constructor(){s(this,"name",""),s(this,"type",""),s(this,"locationID",0),s(this,"builtinName","")}isBuiltinAttribute(){return this.builtinName!=""}}class Kn{constructor(){s(this,"uniformInfo",[]),s(this,"inputAttribute",[]),s(this,"outputAttribute",[]),s(this,"sourceCode","")}}var Je=(r=>(r[r.vertex=0]="vertex",r[r.fragment=1]="fragment",r[r.computer=2]="computer",r))(Je||{});class jn{constructor(){s(this,"blendMode",ae.NONE),s(this,"depthCompare",dt.less),s(this,"depthWriteEnabled",!0),s(this,"frontFace","ccw"),s(this,"cullMode",ct.back),s(this,"topology",Gi.triangle_list),s(this,"depthBias",10),s(this,"useLight",!1),s(this,"useProbe",!1),s(this,"acceptGI",!1),s(this,"acceptShadow",!1),s(this,"castShadow",!1),s(this,"castReflection",!1),s(this,"receiveEnv",!1),s(this,"renderLayer",1e3),s(this,"renderOrder",0),s(this,"unclippedDepth",!1),s(this,"multisample",0),s(this,"label"),s(this,"useZ",!0),s(this,"splitTexture",!1)}setFromMapValues(e){e.has("blendMode")&&(this.blendMode=this.convertBlendMode(e.get("blendMode"))),e.has("depthCompare")&&(this.depthCompare=e.get("depthCompare")),e.has("depthWriteEnabled")&&(this.depthWriteEnabled=e.get("depthWriteEnabled")),e.has("frontFace")&&(this.frontFace=e.get("frontFace")),e.has("cullMode")&&(this.cullMode=e.get("cullMode")),e.has("topology")&&(this.topology=e.get("topology")),e.has("depthBias")&&(this.depthBias=e.get("depthBias")),e.has("useLight")&&(this.useLight=e.get("useLight")),e.has("useProbe")&&(this.useProbe=e.get("useProbe")),e.has("acceptGI")&&(this.acceptGI=e.get("acceptGI")),e.has("acceptShadow")&&(this.acceptShadow=e.get("acceptShadow")),e.has("castShadow")&&(this.castShadow=e.get("castShadow")),e.has("receiveEnv")&&(this.receiveEnv=e.get("receiveEnv")),e.has("renderLayer")&&(this.renderLayer=e.get("renderLayer")),e.has("renderOrder")&&(this.renderOrder=e.get("renderOrder")),e.has("unclippedDepth")&&(this.unclippedDepth=e.get("unclippedDepth")),e.has("multisample")&&(this.multisample=e.get("multisample")),e.has("label")&&(this.label=e.get("label")),e.has("useZ")&&(this.useZ=e.get("useZ"))}convertBlendMode(e){switch(e){case"ABOVE":return ae.ABOVE;case"ALPHA":return ae.ALPHA;case"NORMAL":return ae.NORMAL;case"ADD":return ae.ADD;case"BELOW":return ae.BELOW;case"ERASE":return ae.ERASE;case"MUL":return ae.MUL;case"SCREEN":return ae.SCREEN;case"DIVD":return ae.DIVD;case"SOFT_ADD":return ae.SOFT_ADD}return ae.NONE}}class qn extends or{constructor(){super(),s(this,"uniformNodes",[]),s(this,"_onChange",!0),this.bufferType=Dt.MaterialDataUniformGPUBuffer}initDataUniform(e){let t=0;for(const o in this.uniformNodes=e){var i=e[o];i||console.error(o,"is empty"),t+=4*i.size}t=256*Math.floor(t/256+1),this.createBuffer(GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,t/4);for(const o in e){var a=e[o],n=(a||console.error(o,"is empty"),this.memory.allocation_node(4*a.size));a.memoryInfo=n,a.bindOnChange=()=>this.onChange()}}onChange(){this._onChange=!0}apply(){if(this.uniformNodes.length!=0&&this._onChange){for(const e in this.uniformNodes)this.uniformNodes[e].update();super.apply(),this._onChange=!1}}}class $e{static init(){this.renderShaderModulePool=new Map,this.renderShader=new Map}}s($e,"renderShaderModulePool"),s($e,"renderShader");const Za=class{constructor(){s(this,"reference")}static getInstance(){return this._ins||(this._ins=new Za),this._ins}attached(r,e){this.reference||(this.reference=new Map);let t=this.reference.get(r);(t=t||new Map).set(e,r),this.reference.set(r,t)}detached(r,e){r=this.reference.get(r),r&&r.delete(e)}hasReference(r){return r=this.reference.get(r),!!r&&0<r.size}getReferenceCount(r){return r=this.reference.get(r),r?r.size:0}getReference(r){return this.reference.get(r)||null}};let Y=Za;s(Y,"_ins");class Pr extends Xa{constructor(e,t){super(),s(this,"useRz",!1),s(this,"vsName"),s(this,"fsName"),s(this,"shaderState"),s(this,"textures"),s(this,"pipeline"),s(this,"bindGroupLayouts"),s(this,"materialDataUniformBuffer"),s(this,"_sourceVS"),s(this,"_sourceFS"),s(this,"_destVS"),s(this,"_destFS"),s(this,"_vsShaderModule"),s(this,"_fsShaderModule"),s(this,"_textureGroup",-1),s(this,"_textureChange",!1),s(this,"_vs_limit",[]),s(this,"_fs_limit",[]),s(this,"_cs_limit",[]),s(this,"_groupsShaderReflectionVarInfos"),s(this,"_passShaderCache",new Map),this.vsName=e.toLowerCase(),this.fsName=t.toLowerCase(),this.vsName in D||console.error("Shader Not Register, Please Register Shader!",this.vsName),this.fsName in D||console.error("Shader Not Register, Please Register Shader!",this.fsName),D[this.vsName]&&(this._sourceVS=D[this.vsName]),D[this.fsName]&&(this._sourceFS=D[this.fsName]),this.textures={},this.bindGroups=[],this.shaderState=new jn,this.materialDataUniformBuffer=new qn,this.materialDataUniformBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,this._bufferDic.set("global",this.materialDataUniformBuffer),this._bufferDic.set("materialUniform",this.materialDataUniformBuffer)}get cullMode(){return this.shaderState.cullMode}set cullMode(e){this.shaderState.cullMode!=e&&(this._stateChange=!0),this.shaderState.cullMode=e}get frontFace(){return this.shaderState.frontFace}set frontFace(e){this.shaderState.frontFace!=e&&(this._stateChange=!0),this.shaderState.frontFace=e}get depthBias(){return this.shaderState.depthBias}set depthBias(e){this.shaderState.depthBias!=e&&(this._stateChange=!0),this.shaderState.depthBias=e}get topology(){return this.shaderState.topology}set topology(e){this.shaderState.topology!=e&&(this._stateChange=!0),this.shaderState.topology=e}get blendMode(){return this.shaderState.blendMode}set blendMode(e){this.shaderState.blendMode!=e&&(this._stateChange=!0),this.shaderState.blendMode=e}get depthCompare(){return this.shaderState.depthCompare}set depthCompare(e){this.shaderState.depthCompare!=e&&(this._stateChange=!0),this.shaderState.depthCompare=e}static createShader(e,t){return e=new Pr(e,t),$e.renderShader.set(e.instanceID,e),e.instanceID}static destroyShader(e){$e.renderShader.has(e)&&($e.renderShader.get(e).destroy(),$e.renderShader.delete(e))}static getShader(e){return $e.renderShader.get(e)}setPassShader(e,t){this._passShaderCache.set(e,t)}getPassShader(e){return this._passShaderCache.get(e)}setShaderEntry(e="",t=""){this.vsEntryPoint=e,this.fsEntryPoint=t}setTexture(e,t){t&&this.textures[e]!=t&&(this.textures[e]&&this.textures[e].unBindStateChange(this),this._textureChange=!0,(this.textures[e]=t).bindStateChange(()=>{this._textureChange=!0},this))}getTexture(e){return this.textures[e]}genRenderPipeline(e,t){var i=this.createGroupLayouts();this.createPipeline(e,t,i)}reBuild(e,t){this.compileShader(Je.vertex,this._destVS,t),this.compileShader(Je.fragment,this._destFS,t),this.genRenderPipeline(e,t)}apply(e,t,i,a){this.materialDataUniformBuffer.apply(),this._textureChange&&this._textureGroup!=-1&&(this._textureChange=!1,this.genGroups(this._textureGroup,this.shaderReflection.groups,!0)),this._stateChange&&(this._shaderChange&&(this.preCompile(e),this._shaderChange=!1),this.reBuild(e,i),this._stateChange=!1,a)&&a()}preCompile(e){this.preDefine(e),this.preCompileShader(Je.vertex,this._sourceVS.concat()),this.preCompileShader(Je.fragment,this._sourceFS.concat()),this.genReflection()}applyPostDefine(e,t){return b.setting.pick.mode=="pixel"&&(this.defineValue.USE_WORLDPOS=!0),1<t.outAttachments.length?(this.defineValue.USE_WORLDPOS=!0,this.defineValue.USEGBUFFER=!0):(this.defineValue.USE_WORLDPOS=!1,this.defineValue.USEGBUFFER=!1),b.setting.gi.enable?this.defineValue.USEGI=!0:this.defineValue.USEGI=!1,b.setting.material.materialChannelDebug&&(this.defineValue.USE_DEBUG=!0),this.shaderState.useLight?this.defineValue.USE_LIGHT=!0:this.defineValue.USE_LIGHT=!1,We.parse(e,this.defineValue)}setBindGroup(e,t){this.bindGroups[e]=t}setDefault(){this.setUniformFloat("shadowBias",35e-5),this.setUniformVector4("transformUV1",new G(0,0,1,1)),this.setUniformVector4("transformUV2",new G(0,0,1,1)),this.setUniformColor("baseColor",new x),this.setUniformColor("emissiveColor",new x(1,1,1)),this.setUniformVector4("materialF0",new G(.04,.04,.04,1)),this.setUniformFloat("envIntensity",1),this.setUniformFloat("normalScale",1),this.setUniformFloat("roughness",1),this.setUniformFloat("metallic",0),this.setUniformFloat("ao",1),this.setUniformFloat("roughness_min",0),this.setUniformFloat("roughness_max",1),this.setUniformFloat("metallic_min",0),this.setUniformFloat("metallic_max",1),this.setUniformFloat("emissiveIntensity",0),this.setUniformFloat("alphaCutoff",0),this.setUniformFloat("ior",1.5),this.setUniformFloat("clearcoatFactor",0),this.setUniformFloat("clearcoatRoughnessFactor",0),this.setUniformColor("clearcoatColor",new x(1,1,1)),this.setUniformFloat("clearcoatWeight",0)}destroy(e){for(const i in this.textures)if(Object.prototype.hasOwnProperty.call(this.textures,i)){var t=this.textures[i];if(Y.getInstance().detached(t,this),e&&!Y.getInstance().hasReference(t))t.destroy(e);else{t.destroy(!1);let a=Y.getInstance().getReference(t),n=[];a.forEach((o,h)=>{"name"in o?n.push(o.name):n.push("NaN")})}}this.bindGroups.length=0,this._passShaderCache.clear(),this.shaderState=null,this.textures=null,this.pipeline=null,this.bindGroupLayouts=null,this._sourceVS=null,this._sourceFS=null,this._destVS=null,this._destFS=null,this._vsShaderModule=null,this._fsShaderModule=null,this.materialDataUniformBuffer.destroy(e),this.materialDataUniformBuffer=null}checkBuffer(e,t){}preCompileShader(e,t,i){let a=t;var n;a.indexOf("version ")!=-1&&(t=Pi.convertGLSL(a),a=t.sourceCode);for(const o in this.constValues)Object.prototype.hasOwnProperty.call(this.constValues,o)&&(n=this.constValues[o],a=a.replaceAll("&"+o,n.toString()));switch(e){case Je.vertex:this._destVS=a;break;case Je.fragment:this._destFS=a}}compileShader(e,t,i){let a=t,n=(a=this.applyPostDefine(a,i),t);for(var o in this.defineValue)n+=`${o}=${this.defineValue[o]},`;let h=$e.renderShaderModulePool.get(n);switch(h||(a=this.applyPostDefine(a,i),(h=M.device.createShaderModule({label:e==Je.vertex?this.vsName:this.fsName,code:a})).getCompilationInfo().then(l=>{0<l.messages.length&&(console.log(a),console.log(l))}),$e.renderShaderModulePool.set(n,h)),e){case Je.vertex:this._vsShaderModule=h,this._destVS=a;break;case Je.fragment:this._fsShaderModule=h,this._destFS=a}}getGroupLayout(e,t){var i=[];for(let p=0;p<t.length;p++){var a=t[p];if(a)if(a.varType=="uniform"){this._bufferDic.has(a.varName)||console.error(`not set ${a.varName} buffer`);var n=this._bufferDic.get(a.varName).visibility,n={binding:a.binding,visibility:n,buffer:{type:"uniform"}};i.push(n)}else if(a.varType=="storage-read"){this._bufferDic.has(a.varName)||console.error(`not set ${a.varName} buffer`);var n=this._bufferDic.get(a.varName).visibility,o={binding:a.binding,visibility:n,buffer:{type:"read-only-storage"}};i.push(o)}else if(a.varType=="var")switch(a.dataType){case"sampler":var h=a.varName.replace("Sampler",""),h=this.textures[h]||b.res.redTexture,h={binding:a.binding,visibility:h.visibility,sampler:h.samplerBindingLayout};i.push(h),this._textureGroup=e;break;case"sampler_comparison":var h=a.varName.replace("Sampler",""),l=this.textures[h]||b.res.redTexture,l={binding:a.binding,visibility:l.visibility,sampler:l.sampler_comparisonBindingLayout};i.push(l),this._textureGroup=e;break;case"texture_2d<f32>":case"texture_2d_array<f32>":case"texture_cube<f32>":case"texture_depth_2d":case"texture_depth_2d_array":case"texture_depth_cube":case"texture_depth_cube_array":var l=this.textures[a.varName]||b.res.redTexture,u={binding:a.binding,visibility:l.visibility,texture:l.textureBindingLayout};i.push(u),this._textureGroup=e,Y.getInstance().attached(l,this);break;case"texture_external":var u=this.textures[a.varName]||b.res.redTexture,c={binding:a.binding,visibility:u.visibility,externalTexture:{}};i.push(c),this._textureGroup=e,Y.getInstance().attached(u,this);break;default:var c=this.textures[a.varName]||b.res.redTexture,f={binding:a.binding,visibility:c.visibility,texture:c.textureBindingLayout};i.push(f),this._textureGroup=e,Y.getInstance().attached(c,this)}else console.error("bind group can't empty")}return i}genGroups(e,t,i=!1){if(!this.bindGroups[e]||i){var a=t[e],n=[];for(let m=0;m<a.length;m++){var o=a[m];if(o){if(o.varType=="uniform"){var h=this._bufferDic.get(o.varName);if(h){if(h.bufferType==Dt.MaterialDataUniformGPUBuffer){var l=[];for(let _=0;_<o.dataFields.length;_++){var u=o.dataFields[_];this.uniforms[u.name]||console.error(`shader-${this.vsName}:${this.fsName} ${u.name}is empty`),l.push(this.uniforms[u.name])}this.materialDataUniformBuffer.initDataUniform(l)}var c={binding:o.binding,resource:{buffer:h.buffer,offset:0,size:h.memory.shareDataBuffer.byteLength}};n.push(c),this.checkBuffer(o.varName,h)}else console.error(`shader${this.vsName}-`+this.fsName,`buffer ${o.varName} is missing!`)}else if(o.varType=="storage-read")c=this._bufferDic.get(o.varName),c?(h={binding:o.binding,resource:{buffer:c.buffer,offset:0,size:c.memory.shareDataBuffer.byteLength}},n.push(h),this.checkBuffer(o.varName,c)):console.error(`buffer ${o.varName} is missing!`);else if(o.varType=="var")if(o.dataType=="sampler"){let _=o.varName.replace("Sampler",""),v=this.textures[_];v||(v=b.res.blackTexture,this.setTexture(_,v)),v?(f={binding:o.binding,resource:v.gpuSampler},n.push(f)):console.error(`shader${this.vsName}-`+this.fsName,`texture ${o.varName} is missing! `)}else if(o.dataType=="sampler_comparison"){var f=o.varName.replace("Sampler",""),p=this.textures[f];p?(p={binding:o.binding,resource:p.gpuSampler_comparison},n.push(p)):console.error(`shader${this.vsName}-`+this.fsName,`texture ${o.varName} is missing! `)}else{let _=this.textures[o.varName];_||(_=b.res.whiteTexture,this.setTexture(o.varName,_)),_?(p={binding:o.binding,resource:_.getGPUView()},n.push(p)):console.error(`shader${this.vsName}-`+this.fsName,`texture ${o.varName} is missing! `)}}}i=M.device.createBindGroup({layout:this.bindGroupLayouts[e],entries:n}),this.bindGroups[e]=i}}createPipeline(e,t,i){var a=this.shaderState,n=t.outAttachments,o=(t.outColor!=-1&&(o=n[t.outColor],a.blendMode!=ae.NONE?o.blend=ja.getBlend(a.blendMode):o.blend=void 0),{label:this.vsName+"|"+this.fsName,layout:i,primitive:{topology:a.topology,cullMode:a.cullMode,frontFace:a.frontFace},vertex:void 0});this.vsEntryPoint!=""&&(o.vertex={module:this._vsShaderModule,entryPoint:this.vsEntryPoint,buffers:e.vertexBuffer.vertexBufferLayouts}),this.fsEntryPoint!=""&&(o.fragment={module:this._fsShaderModule,entryPoint:this.fsEntryPoint,targets:n}),0<a.multisample&&(o.multisample={count:a.multisample}),(t.zPreTexture||t.depthTexture)&&(a.blendMode,ae.NONE,b.setting.render.zPrePass&&t.zPreTexture&&a.useZ?o.depthStencil={depthWriteEnabled:a.depthWriteEnabled,depthCompare:a.depthCompare,format:t.zPreTexture.format}:(o.depthStencil={depthWriteEnabled:a.depthWriteEnabled,depthCompare:a.depthCompare,format:t.depthTexture.format},this.useRz)),this.pipeline=w.createPipeline(o)}createGroupLayouts(){this._groupsShaderReflectionVarInfos=[];var e=this.shaderReflection;this.bindGroupLayouts=[di.getGlobalDataBindGroupLayout()];for(let n=1;n<e.groups.length;n++){var t,i=e.groups[n];i?(t=this.getGroupLayout(n,i),this._groupsShaderReflectionVarInfos[n]=i,i=M.device.createBindGroupLayout({entries:t,label:`vs${this.vsName} fs`+this.fsName}),this.bindGroupLayouts[n]=i):console.error("can't set empty group!",n)}var a=M.device.createPipelineLayout({bindGroupLayouts:this.bindGroupLayouts});return this._groupsShaderReflectionVarInfos[0],this._groupsShaderReflectionVarInfos[1]&&this.genGroups(1,this._groupsShaderReflectionVarInfos),this._groupsShaderReflectionVarInfos[2]&&this.genGroups(2,this._groupsShaderReflectionVarInfos),this._groupsShaderReflectionVarInfos[3]&&this.genGroups(3,this._groupsShaderReflectionVarInfos),a}preDefine(n){var t=n.hasAttribute(z.joints0),i=n.hasAttribute(z.a_morphPositions_0),a=n.hasAttribute(z.TANGENT),n=n.hasAttribute(z.color),o=this.shaderState.acceptGI,h=this.shaderState.useLight;this.defineValue.USE_SKELETON=t,this.defineValue.USE_MORPHTARGETS=i,this.defineValue.USE_TANGENT=a,this.defineValue.USE_GI=o,this.defineValue.USE_CASTSHADOW=this.shaderState.castShadow,this.defineValue.USE_SHADOWMAPING=this.shaderState.acceptShadow,this.defineValue.USE_LIGHT=h,this.defineValue.USE_VERTXCOLOR=n,this.defineValue.USE_PCF_SHADOW=b.setting.shadow.type=="PCF",this.defineValue.USE_HARD_SHADOW=b.setting.shadow.type=="HARD",this.defineValue.USE_SOFT_SHADOW=b.setting.shadow.type=="SOFT",this.defineValue.USE_IES_PROFILE=Zt.use}genReflection(){this.shaderVariant+=je.genRenderShaderVariant(this);var e=je.poolGetReflection(this.shaderVariant);e?this.shaderReflection=e:(e=We.parse(this._destVS,this.defineValue),e=We.parse(e,this.defineValue),je.getShaderReflection2(e,this),e=We.parse(this._destFS,this.defineValue),e=We.parse(e,this.defineValue),je.getShaderReflection2(e,this),je.final(this)),this.shaderState.splitTexture=this.shaderReflection.useSplit}}class Zn{constructor(){s(this,"renderPasses"),s(this,"enable",!0),s(this,"renderShader"),s(this,"_shaderID"),s(this,"_sort",3e3),s(this,"_transparent",!1)}get sort(){return this._sort}set sort(e){this._sort=e}get shaderID(){return this._shaderID}set shaderID(e){this._shaderID=e}setShader(e,t){return this._shaderID=Pr.createShader(e,t),this.renderShader=this.getShader(),this.renderShader.setDefault(),this.renderShader}getShader(){return Pr.getShader(this._shaderID)}get blendMode(){return this.renderShader.blendMode}set blendMode(e){this.renderShader.blendMode=e}get transparent(){return this._transparent}set transparent(e){this._transparent=e}get frontFace(){return this.renderShader.frontFace}set frontFace(e){this.renderShader.frontFace=e}get doubleSide(){return this.renderShader.cullMode==ct.none}set doubleSide(e){e?this.renderShader.cullMode=ct.none:this.renderShader.cullMode==ct.none&&(this.renderShader.cullMode=ct.back)}get cullMode(){return this.renderShader.cullMode}set cullMode(e){this.renderShader.cullMode=e||this.renderShader.cullMode}get depthBias(){return this.renderShader.depthBias}set depthBias(e){this.renderShader.depthBias=e}get depthCompare(){return this.renderShader.depthCompare}set depthCompare(e){this.renderShader.depthCompare=e||this.renderShader.depthCompare}destroy(e){this.renderShader&&this.renderShader.destroy(e),this.renderShader=null,this.renderPasses.forEach((t,i)=>{for(let n=0;n<t.length;n++){var a=t[n];a!=this&&a.destroy(e)}t.length=0}),this.renderPasses.clear(),this.renderPasses=null}clone(){return null}debug(){throw new Error("Method not implemented.")}}class pt extends Zn{constructor(){super(),s(this,"name"),s(this,"instanceID"),s(this,"isPassMaterial",!1),s(this,"receiveEnv",!0),s(this,"_normalMapYFlip"),this.instanceID=Fe(),this.renderPasses=new Map}get shaderState(){return this.renderShader.shaderState}set shaderState(e){this.renderShader.shaderState=e}get normalMapYFlip(){return this._normalMapYFlip}set normalMapYFlip(e){(this._normalMapYFlip=e)&&this.renderShader.setDefine("USE_NORMALFILPY",!0)}set shadowMap(e){this.renderShader.setTexture("shadowMap",e)}set envMap(e){this.renderShader.setTexture("envMap",e)}set baseMap(e){this.renderShader.setTexture("baseMap",e),this.notifyPropertyChange("baseMap",e)}get baseMap(){return this.renderShader.textures.baseMap}get normalMap(){return this.renderShader.textures.normalMap}set normalMap(e){this.renderShader.setTexture("normalMap",e),this.notifyPropertyChange("normalMap",e)}get emissiveMap(){return this.renderShader.textures.emissiveMap}get emissiveColor(){return this.renderShader.uniforms.emissiveColor.color}set emissiveColor(e){this.renderShader.setUniformColor("emissiveColor",e),this.notifyPropertyChange("emissiveColor",e)}set emissiveIntensity(e){this.renderShader.setUniformFloat("emissiveIntensity",e),this.notifyPropertyChange("emissiveIntensity",e)}get emissiveIntensity(){return this.renderShader.uniforms.emissiveIntensity.value}set emissiveMap(e){this.renderShader.setTexture("emissiveMap",e),this.notifyPropertyChange("emissiveMap",e)}get envIntensity(){return this.renderShader.uniforms.envIntensity.value}set envIntensity(e){"envIntensity"in this.renderShader.uniforms&&(this.renderShader.uniforms.envIntensity.value=e),this.notifyPropertyChange("envIntensity",e)}get normalScale(){return this.renderShader.uniforms.normalScale.value}set normalScale(e){"normalScale"in this.renderShader.uniforms&&(this.renderShader.uniforms.envIntensity.value=e),this.notifyPropertyChange("normalScale",e)}get alphaCutoff(){return this.renderShader.uniforms.alphaCutoff.value}set alphaCutoff(e){"alphaCutoff"in this.renderShader.uniforms&&((this.renderShader.uniforms.alphaCutoff.value=e)<1&&e!=0?(this.renderShader.setDefine("USE_ALPHACUT",!0),console.log("USE_ALPHACUT")):this.renderShader.setDefine("USE_ALPHACUT",!1),this.notifyPropertyChange("alphaCutoff",e))}get irradianceMap(){return this.renderShader.textures.irradianceMap}set irradianceMap(e){this.renderShader.setTexture("irradianceMap",e),this.notifyPropertyChange("irradianceMap",e)}get irradianceDepthMap(){return this.renderShader.textures.irradianceDepthMap}set irradianceDepthMap(e){this.renderShader.setTexture("irradianceDepthMap",e),this.notifyPropertyChange("irradianceDepthMap",e)}get baseColor(){return this.renderShader.uniforms.baseColor.color}set baseColor(e){this.renderShader.setUniformColor("baseColor",e),this.notifyPropertyChange("baseColor",e)}get uvTransform_1(){return this.renderShader.uniforms.transformUV1.vector4}set uvTransform_1(e){this.renderShader.uniforms.transformUV1.vector4=e,this.notifyPropertyChange("transformUV1",e)}get uvTransform_2(){return this.renderShader.uniforms.transformUV2.vector4}set uvTransform_2(e){this.renderShader.uniforms.transformUV2.vector4=e,this.notifyPropertyChange("uvTransform_2",e)}notifyPropertyChange(e,t){}setDefine(e,t){this.renderShader.setDefine(e,!0)}hasPass(e){return this.renderPasses.has(e)}addPass(e,t,i=-1){return this.renderPasses.has(e)||this.renderPasses.set(e,[]),e=this.renderPasses.get(e),e.indexOf(t)==-1&&(i==-1?e.push(t):e.splice(i,-1,t)),e}removePass(e,t){this.renderPasses.has(e)&&t<(e=this.renderPasses.get(e)).length&&e.splice(t,1)}destroy(e){super.destroy(e)}clone(){return null}}class Qn extends pt{constructor(){super(),s(this,"transparency"),this.isPassMaterial=!0,D.register("castPointShadowMap_vert",kn),D.register("shadowCastMap_frag",Ka);var e=this.setShader("castPointShadowMap_vert","shadowCastMap_frag");e.setShaderEntry("main","main"),e.setUniformFloat("cameraFar",5e3),e.setUniformVector3("lightWorldPos",d.ZERO),e.shaderState.receiveEnv=!1}}class Jn extends pt{constructor(){super(),s(this,"transparency"),this.isPassMaterial=!0,D.register("shadowCastMap_vert",Bn),D.register("shadowCastMap_frag",Ka);var e=this.setShader("shadowCastMap_vert","shadowCastMap_frag");e.setShaderEntry("main"),e.setUniformFloat("cameraFar",5e3),e.setUniformVector3("lightWorldPos",d.ZERO),e.shaderState.receiveEnv=!1}}let $n=`
    #include "GlobalUniform"

    struct VertexOutput {
        @location(0) vID: f32 ,
        @location(1) vPos: vec3<f32> ,
        @builtin(position) member: vec4<f32>
    };

    struct Uniforms {
        matrix : array<mat4x4<f32>>
    };

    @group(0) @binding(1)
    var<storage, read> models : Uniforms;

    var<private> worldMatrix: mat4x4<f32>;

    #if USE_MORPHTARGETS
        ${ge.getMorphTargetShaderBinding(1,0)}
    #endif

    #if USE_SKELETON
        ${ui.groupBindingAndFunctions(1,0)}
    #endif

    @vertex
    fn main(
        @builtin(instance_index) index : u32,
        @location(0) position: vec3<f32>,
        @location(1) normal: vec3<f32>,
        @location(2) uv: vec2<f32>,
        @location(3) TEXCOORD_1: vec2<f32>,

    #if USE_TANGENT
        @location(4) TANGENT: vec4<f32>,
        #if USE_SKELETON
            @location(5) joints0: vec4<f32>,
            @location(6) weights0: vec4<f32>,
            #if USE_JOINT_VEC8
                @location(7) joints1: vec4<f32>,
                @location(8) weights1: vec4<f32>,
            #endif
        #elseif USE_MORPHTARGETS
            ${ge.getMorphTargetAttr(5)}
        #endif
    #elseif USE_SKELETON
        @location(4) joints0: vec4<f32>,
        @location(5) weights0: vec4<f32>,
        #if USE_JOINT_VEC8
            @location(6) joints1: vec4<f32>,
            @location(7) weights1: vec4<f32>,
        #endif
    #elseif USE_MORPHTARGETS
        ${ge.getMorphTargetAttr(4)}
    #endif
    ) -> VertexOutput {
    worldMatrix = models.matrix[index];

    var vertexPosition = position;
    var vertexNormal = normal;
    #if USE_MORPHTARGETS
        ${ge.getMorphTargetCalcVertex()}
    #endif

    #if USE_SKELETON
        #if USE_JOINT_VEC8
            worldMatrix *= getSkeletonWorldMatrix_8(joints0, weights0, joints1, weights1);
        #else
            worldMatrix *= getSkeletonWorldMatrix_4(joints0, weights0);
        #endif
    #endif

        
        let wPos = worldMatrix * vec4<f32>(vertexPosition.xyz, 1.0);
        var fixProjMat = globalUniform.projMat ;
        // fixProjMat[2].z = -1.0 ;//99999.0 / (99999.0 - 1.0) ;
        // fixProjMat[3].z = 0.0 ;//(-1.0 * 99999.0) / (99999.0 - 1.0) ;
        var rzMatrix : mat4x4<f32> ;
        rzMatrix[0] = vec4<f32>(1.0,0.0,0.0,0.0) ; 
        rzMatrix[1] = vec4<f32>(0.0,1.0,0.0,0.0) ; 
        rzMatrix[2] = vec4<f32>(0.0,0.0,1.0,0.0) ; 
        rzMatrix[3] = vec4<f32>(0.0,0.0,0.0,1.0) ; 
        // rzMatrix[2].z = (-globalUniform.near * globalUniform.far) / (globalUniform.far - globalUniform.near) ;
        // rzMatrix[3].z = globalUniform.far / (globalUniform.far - globalUniform.near) ;
        var clipPos:vec4<f32> = fixProjMat * globalUniform.viewMat * rzMatrix * wPos ;
        // clipPos.z = clipPos.z + (clipPos.z / clipPos.w + globalUniform.near / clipPos.w + 0.002 / clipPos.w) * (globalUniform.near / globalUniform.far) ; 
        // clipPos.z = depthToLinear01(clipPos.z / clipPos.w) ; 
        return VertexOutput(f32(index) , wPos.xyz, clipPos);
    }

    fn depthToLinear01(depth:f32) -> f32 {
        let a = 1.0 / (globalUniform.near - globalUniform.far);
        return (globalUniform.near*globalUniform.far*a) / (depth + globalUniform.far * a) ;
    }
`,eo=`
    struct FragmentOutput {
        @location(0) o_Target: vec4<f32>
    };

    @fragment
    fn main(@location(0) vID: f32, @location(1) vPos:vec3<f32>) -> FragmentOutput {
        var op = vec4<f32>( vPos, vID);
        return FragmentOutput(op);
    }
`;class to extends pt{constructor(){super(),s(this,"transparency"),this.isPassMaterial=!0,D.register("ZPass_shader_vs",$n),D.register("ZPass_shader_fs",eo);var e=this.setShader("ZPass_shader_vs","ZPass_shader_fs");e.useRz=!0,e.shaderState.receiveEnv=!1}}class ro extends pt{constructor(){super(),s(this,"transparency"),this.isPassMaterial=!0,D.register("gbuffer_vs",Ia),D.register("gbuffer_fs",Ia),this.setShader("gbuffer_vs","gbuffer_fs").setShaderEntry("VertMain","FragMain"),this.shaderState.cullMode="none",this.renderShader.setUniformColor("baseColor",new x),this.renderShader.setUniformColor("emissiveColor",new x),this.renderShader.setUniformFloat("emissiveIntensity",1),this.renderShader.setUniformFloat("normalScale",1),this.renderShader.setUniformFloat("alphaCutoff",1),this.blendMode=ae.NONE,this.renderShader.setTexture("normalMap",b.res.normalTexture)}set shadowMap(e){}set envMap(e){}set normalScale(e){this.renderShader.setUniformFloat("normalScale",e)}get normalScale(){return this.renderShader.uniforms.normalScale.value}set alphaCutoff(e){this.renderShader.setUniformFloat("alphaCutoff",e)}get alphaCutoff(){return this.renderShader.uniforms.alphaCutoff.value}}class io extends pt{constructor(){super(),s(this,"transparency"),this.isPassMaterial=!0,D.register("SkyGBuffer_fs",il);var e=this.setShader("sky_vs_frag_wgsl","SkyGBuffer_fs"),e=(e.setUniformFloat("exposure",1),e.setUniformFloat("roughness",0),this.shaderState);e.frontFace="ccw",e.cullMode=ct.front,e.depthWriteEnabled=!1,e.depthCompare=dt.less}get exposure(){return this.renderShader.uniforms.exposure.value}set exposure(e){this.renderShader.setUniformFloat("exposure",e)}get roughness(){return this.renderShader.uniforms.roughness.value}set roughness(e){this.renderShader.setUniformFloat("roughness",e)}set shadowMap(e){}set envMap(e){}set emissiveIntensity(e){this.renderShader.setUniformFloat("emissiveIntensity",e)}get emissiveIntensity(){return this.renderShader.uniforms.emissiveIntensity.value}set normalScale(e){this.renderShader.setUniformFloat("normalScale",e)}get normalScale(){return this.renderShader.uniforms.normalScale.value}set alphaCutoff(e){this.renderShader.setUniformFloat("alphaCutoff",e)}get alphaCutoff(){return this.renderShader.uniforms.alphaCutoff.value}}var Z=(r=>(r[r.COLOR=1]="COLOR",r[r.NORMAL=2]="NORMAL",r[r.POSITION=4]="POSITION",r[r.GRAPHIC=8]="GRAPHIC",r[r.GI=16]="GI",r[r.Cluster=32]="Cluster",r[r.SHADOW=64]="SHADOW",r[r.POINT_SHADOW=128]="POINT_SHADOW",r[r.POST=256]="POST",r[r.DEPTH=512]="DEPTH",r[r.REFLECTION=1024]="REFLECTION",r))(Z||{});class q{}s(q,"GLTF_NODE_INDEX_PROPERTY"),s(q,"BASE_COLOR_UNIFORM","u_baseColorFactor"),s(q,"BASE_COLOR_TEXTURE_UNIFORM","u_baseColorSampler"),s(q,"METALROUGHNESS_UNIFORM","u_metallicRoughnessValues"),s(q,"METALROUGHNESS_TEXTURE_UNIFORM","u_metallicRoughnessSampler"),s(q,"NORMAL_TEXTURE_UNIFORM","u_normalSampler"),s(q,"NORMAL_SCALE_UNIFORM","u_normalScale"),s(q,"EMISSIVE_TEXTURE_UNIFORM","u_emissiveSampler"),s(q,"EMISSIVE_FACTOR_UNIFORM","u_emissiveFactor"),s(q,"OCCLUSION_TEXTURE_UNIFORM","u_occlusionSampler"),s(q,"OCCLUSION_FACTOR_UNIFORM","u_occlusionFactor"),s(q,"MAX_MORPH_TARGETS",8),s(q,"MORPH_POSITION_PREFIX","a_morphPositions_"),s(q,"MORPH_NORMAL_PREFIX","a_morphNormals_"),s(q,"MORPH_TANGENT_PREFIX","a_morphTangents_"),s(q,"MORPH_WEIGHT_UNIFORM","u_morphWeights"),s(q,"SCENE_ROOT_SKELETON","SCENE_ROOT"),s(q,"IDENTITY_INVERSE_BIND_MATRICES","IDENTITY_IBM"),s(q,"JOINT_MATRICES_UNIFORM","u_jointMatrix"),s(q,"ALPHA_CUTOFF_UNIFORM","u_alphaCutoff");class Ur{static createGIPass(e,t){var i,a,n;lt.hasMask(e.rendererMask,Se.Sky)?((i=new io).baseMap=t.baseMap,a=t,(n=i.getShader()).shaderState.cullMode=a.getShader().cullMode,n.shaderState.frontFace=a.getShader().frontFace,t.addPass(Z.GI,i,0),i.renderShader.preCompile(e.geometry)):this.castGBufferPass(e,t)}static castGBufferPass(e,t){for(let h=0;h<e.materials.length;h++){var i,a,n,o=e.materials[h];let l=o.renderShader.getPassShader(Z.GI);l||(i=(l=new ro).renderShader,l.baseColor=o.baseColor,l.baseMap=o.baseMap,l.normalMap=o.normalMap,l.envIntensity=o.envIntensity,l.emissiveMap=o.emissiveMap,l.emissiveColor=o.emissiveColor,l.emissiveIntensity=o.emissiveIntensity,l.alphaCutoff=o.alphaCutoff,a=e.materials[0],(n=l.getShader()).shaderState.cullMode=a.getShader().cullMode,n.shaderState.frontFace=a.getShader().frontFace,i.preCompile(e.geometry),o.renderShader.setPassShader(Z.GI,l)),t.addPass(Z.GI,l,h)}}static createShadowPass(e,t){let i=lt.hasMask(e.rendererMask,Se.SkinnedMesh),a=e.geometry.hasAttribute("TANGENT"),n=e.geometry.hasAttribute(q.MORPH_POSITION_PREFIX+"0"),o=e.geometry.hasAttribute(q.MORPH_NORMAL_PREFIX+"0"),h=t.renderShader.getPassShader(Z.SHADOW);if(!h){(h=new Jn).baseMap=e.materials[0].baseMap,h.alphaCutoff=e.materials[0].alphaCutoff,h.setDefine("USE_ALPHACUT",e.materials[0].alphaCutoff<1);for(let f=0;f<1;f++){var l=h.renderShader;a&&l.setDefine("USE_TANGENT",a),i&&l.setDefine("USE_SKELETON",i),n&&l.setDefine("USE_MORPHTARGETS",n),o&&l.setDefine("USE_MORPHNORMALS",o),t.getShader().cullMode=="none"?l.shaderState.cullMode="none":t.getShader().cullMode=="back"?l.shaderState.cullMode="front":t.getShader().cullMode=="front"&&(l.shaderState.cullMode="back"),l.preCompile(e.geometry)}t.renderShader.setPassShader(Z.SHADOW,h)}t.addPass(Z.SHADOW,h,0);let u=t.renderShader.getPassShader(Z.POINT_SHADOW);if(!u){(u=new Qn).baseMap=e.materials[0].baseMap,u.alphaCutoff=e.materials[0].alphaCutoff,u.setDefine("USE_ALPHACUT",e.materials[0].alphaCutoff<1);for(let f=0;f<1;f++){var c=u.renderShader;a&&c.setDefine("USE_TANGENT",a),i&&c.setDefine("USE_SKELETON",i),n&&c.setDefine("USE_MORPHTARGETS",n),o&&c.setDefine("USE_MORPHNORMALS",o),c.shaderState.cullMode="front",c.preCompile(e.geometry)}t.renderShader.setPassShader(Z.POINT_SHADOW,u)}t.addPass(Z.POINT_SHADOW,u,0)}static createReflectionPass(e,t){}static createDepthPass(e,t){var i=t.renderShader.getPassShader(Z.DEPTH);if(!i){var a=new to,n=e.materials[0],o=(a.baseMap=n.baseMap,e.geometry.hasAttribute("TANGENT")),h=e.geometry.hasAttribute(q.MORPH_POSITION_PREFIX+"0"),l=e.geometry.hasAttribute(q.MORPH_NORMAL_PREFIX+"0"),u=lt.hasMask(e.rendererMask,Se.SkinnedMesh),c=a.getShader();c.shaderState.cullMode=n.getShader().cullMode,c.shaderState.frontFace=n.getShader().frontFace;for(let p=0;p<1;p++){var f=a.getShader();o||f.setDefine("USE_TANGENT",o),u&&f.setDefine("USE_SKELETON",u),h&&f.setDefine("USE_MORPHTARGETS",h),l&&f.setDefine("USE_MORPHNORMALS",l),f.preCompile(e.geometry)}t.renderShader.setPassShader(Z.DEPTH,a)}t.addPass(Z.DEPTH,i,0)}}class Qa extends Ze{constructor(){super(),s(this,"instanceCount",0),s(this,"lodLevel",0),s(this,"alwaysRender",!1),s(this,"instanceID"),s(this,"drawType",0),s(this,"_geometry"),s(this,"_materials",[]),s(this,"_castShadow",!0),s(this,"_castReflection",!1),s(this,"_castGI",!1),s(this,"_rendererMask",Se.Default),s(this,"_inRenderer",!1),s(this,"_readyPipeline",!1),s(this,"_combineShaderRefection"),s(this,"_ignoreEnvMap"),s(this,"_ignorePrefilterMap"),s(this,"__renderOrder",0),s(this,"_renderOrder",0),s(this,"isRenderOrderChange"),s(this,"needSortOnCameraZ"),this.rendererMask=Se.Default}get renderOrder(){return this._renderOrder}set renderOrder(e){e!=this._renderOrder&&(this.isRenderOrderChange=!0,this._renderOrder=e,this.__renderOrder=e)}get geometry(){return this._geometry}set geometry(e){this._geometry!=e&&(this._geometry&&Y.getInstance().detached(this._geometry,this),Y.getInstance().attached(e,this)),this._geometry=e}addMask(e){this._rendererMask=lt.addMask(this.rendererMask,e)}removeMask(e){this._rendererMask=lt.removeMask(this.rendererMask,e)}hasMask(e){return lt.hasMask(this.rendererMask,e)}get rendererMask(){return this._rendererMask}set rendererMask(e){this._rendererMask=e}get materials(){return this._materials}set materials(e){for(let h=0;h<this._materials.length;h++){var t=this._materials[h];Y.getInstance().detached(t,this)}for(let h=0;h<e.length;h++){var i=e[h];Y.getInstance().attached(i,this)}this._materials=e;let a=!1,n=0;for(let h=0;h<e.length;h++){var o=e[h];o.transparent&&(a=!0,n=n>o.sort?n:o.sort)}this.renderOrder=a?this.renderOrder:n,this._readyPipeline||this.initPipeline()}init(){this.instanceID=Fe()}addRendererMask(e){this._rendererMask=lt.addMask(this._rendererMask,e)}removeRendererMask(e){this._rendererMask=lt.removeMask(this._rendererMask,e)}onEnable(){this._readyPipeline||this.initPipeline(),B.instance.addRenderNode(this.transform.scene3D,this)}onDisable(){B.instance.removeRenderNode(this.transform.scene3D,this)}selfCloneMaterials(e){var t=[];for(let a=0,n=this.materials.length;a<n;a++){var i=this.materials[a].clone();t.push(i)}return this.materials=t,this._readyPipeline=!1,this.initPipeline(),this}initPipeline(){if(this._geometry&&0<this._materials.length){for(let o=0;o<this._materials.length;o++){var e=this._materials[o],t=e.addPass(Z.COLOR,e);for(let h=0;h<t.length;h++){var i=t[h],i=Pr.getShader(i.shaderID);i.shaderReflection||i.preCompile(this._geometry),this._geometry.generate(i.shaderReflection)}this.object3D.bound=this._geometry.bounds.clone()}this._readyPipeline=!0;let n=0;for(let o=0;o<this.materials.length;o++){var a=this.materials[o];a.transparent,n=a.transparent?n>a.sort?n:a.sort:Math.max(n-3e3,0),this.castNeedPass(a.getShader())}this.renderOrder=n,this.enable&&this.transform&&this.transform.scene3D&&B.instance.addRenderNode(this.transform.scene3D,this)}}castNeedPass(e){if(this.castGI)for(let o=0;o<this.materials.length;o++){var t=this.materials[o];Ur.createGIPass(this,t)}if(this.castShadow)for(let o=0;o<this.materials.length;o++){var i=this.materials[o];i.shaderState.castShadow&&Ur.createShadowPass(this,i)}if(this.castReflection)for(let o=0;o<this.materials.length;o++){var a=this.materials[o];a.shaderState.castShadow&&Ur.createShadowPass(this,a)}if(!lt.hasMask(this.rendererMask,Se.IgnoreDepthPass)&&b.setting.render.zPrePass&&e.shaderState.useZ)for(let o=0;o<this.materials.length;o++){var n=this.materials[o];Ur.createDepthPass(this,n)}else for(let o=0;o<this.materials.length;o++)this.materials[o].removePass(Z.DEPTH,0)}get castShadow(){return this._castShadow}set castShadow(e){this._castShadow=e}get castGI(){return this._castGI}set castGI(e){this._castGI=e}get castReflection(){return this._castReflection}set castReflection(e){this._castReflection=e}renderPass(e,t,i){var a=this,n=a.transform._worldMatrix;for(let l=0;l<a.materials.length;l++){var o,h=a.materials[l].renderPasses.get(t);if(h&&h.length!=0){w.bindGeometryBuffer(i.encoder,a._geometry);for(let u=0;u<h.length;u++)h&&h.length!=0&&(o=h[u]).enable&&((o=o.renderShader).shaderState.splitTexture&&(i.endRenderPass(),Ee.WriteSplitColorTexture(a.instanceID),i.beginRenderPass(),w.bindCamera(i.encoder,e.camera),w.bindGeometryBuffer(i.encoder,a._geometry)),w.bindPipeline(i.encoder,o),o=a._geometry.subGeometries[l].lodLevels[a.lodLevel],0<a.instanceCount?w.drawIndexed(i.encoder,o.indexCount,a.instanceCount,o.indexStart,0,0):w.drawIndexed(i.encoder,o.indexCount,1,o.indexStart,0,n.index))}}}renderPass2(e,t,i,a,n,o=0){if(this.enable){this.nodeUpdate(e,t,i,a);var h=this.object3D.transform._worldMatrix;for(let f=0;f<this.materials.length;f++){var l=this.materials[f].renderPasses.get(t);if(!l||l.length==0)return;if(this.drawType==2)for(let p=0;p<l.length;p++){var u=l[p];u.enable&&(w.bindPipeline(n,u.renderShader),w.draw(n,6,1,0,h.index))}else{w.bindGeometryBuffer(n,this._geometry);for(let p=0;p<l.length;p++){var c=l[p];c.enable&&(w.bindPipeline(n,c.renderShader),c=this._geometry.subGeometries[f].lodLevels[this.lodLevel],w.drawIndexed(n,c.indexCount,1,c.indexStart,0,h.index))}}}}}recordRenderPass2(e,t,i,a,n,o=0){if(this.enable){this.nodeUpdate(e,t,i,a);for(let c=0;c<this.materials.length;c++){var h=this.materials[c].renderPasses.get(t);if(!h||h.length==0)return;var l=this.object3D.transform._worldMatrix;for(let f=0;f<h.length;f++){var u=h[f].renderShader,u=(w.bindPipeline(n,u),this._geometry.subGeometries[c].lodLevels[this.lodLevel]);w.drawIndexed(n,u.indexCount,1,u.indexStart,0,l.index)}}}}noticeShaderChange(){this.enable&&this.onEnable()}nodeUpdate(e,t,i,a){for(let c=0;c<this.materials.length;c++){var n=this.materials[c].renderPasses.get(t);if(n)for(let f=0;f<n.length;f++){var o,h,l=n[f],u=l.renderShader;u.shaderState.splitTexture&&(o=Ee.CreateSplitTexture(this.instanceID),u.setTexture("splitTexture_Map",o)),this._ignoreEnvMap||u.setTexture("envMap",e.scene.envMap),this._ignorePrefilterMap||u.setTexture("prefilterMap",e.scene.envMap),u.pipeline?u.apply(this._geometry,l,i,()=>this.noticeShaderChange()):(o=b.res.getTexture("BRDFLUT"),u.setTexture("brdflutMap",o),(h=b.getRenderJob(e).shadowMapPassRenderer)&&h.depth2DArrayTexture&&(u.setTexture("shadowMap",b.getRenderJob(e).shadowMapPassRenderer.depth2DArrayTexture),u.setStorageBuffer("shadowBuffer",Ce.shadowBuffer.get(e.scene))),(h=b.getRenderJob(e).pointLightShadowRenderer)&&h.cubeArrayTexture&&u.setTexture("pointShadowMap",h.cubeArrayTexture),(h=Zt.iesTexture)&&u.setTexture("iesTextureArrayMap",h),i.irradianceBuffer&&0<i.irradianceBuffer.length&&(u.setTexture("irradianceMap",i.irradianceBuffer[0]),u.setTexture("irradianceDepthMap",i.irradianceBuffer[1])),(h=ve.getLightEntries(e.scene))&&(u.setStorageBuffer("lightBuffer",h.storageGPUBuffer),h.irradianceVolume)&&u.setStructStorageBuffer("irradianceData",h.irradianceVolume.irradianceVolumeBuffer),a&&(u.setStorageBuffer("clustersUniform",a.clustersUniformBuffer),u.setStorageBuffer("lightAssignBuffer",a.lightAssignBuffer),u.setStorageBuffer("assignTable",a.assignTableBuffer),u.setStorageBuffer("clusterBuffer",a.clusterBuffer)),u.apply(this._geometry,l,i))}}}beforeDestroy(e){var t;Y.getInstance().detached(this._geometry,this),Y.getInstance().hasReference(this._geometry)||this._geometry.destroy(e);for(let a=0;a<this._materials.length;a++){var i=this._materials[a];Y.getInstance().detached(i,this),Y.getInstance().hasReference(i)||i.destroy(e)}(t=super.beforeDestroy)!=null&&t.call(this,e)}destroy(e){super.destroy(e),this._geometry=null,this._materials=null,this._combineShaderRefection=null}}let ao=`
    #include "WorldMatrixUniform"
    #include "GlobalUniform"

    struct VertexAttributes {
        @location(0) position: vec4<f32>,
        @location(1) color: vec4<f32>,
    }

    struct VertexOutput {
        @location(0) varying_WPos: vec4<f32>,
        @location(1) varying_Color: vec4<f32>,
        @builtin(position) member: vec4<f32>
    };

    @vertex
    fn main( vertex:VertexAttributes ) -> VertexOutput {
        var worldMatrix = models.matrix[u32(vertex.position.w)];
        var worldPos = (worldMatrix * vec4<f32>(vertex.position.xyz, 1.0));
        var viewPosition = ((globalUniform.viewMat) * worldPos);
        var clipPosition = globalUniform.projMat * viewPosition;

        var ORI_VertexOut: VertexOutput; 
        ORI_VertexOut.varying_WPos = worldPos;
        ORI_VertexOut.varying_Color = vertex.color;
        ORI_VertexOut.member = clipPosition;
        return ORI_VertexOut;
    }
`,so=`
    struct FragmentOutput {
        @location(0) color: vec4<f32>,
        // #if USE_WORLDPOS
            @location(1) worldPos: vec4<f32>,
        // #endif
        // #if USEGBUFFER
            @location(2) worldNormal: vec4<f32>,
            @location(3) material: vec4<f32>
        // #endif
    };

    @fragment
    fn main(  
        @location(0) vWorldPos: vec4<f32>,
        @location(1) varying_Color: vec4<f32>,
    ) -> FragmentOutput {
        var result: FragmentOutput;

        // #if USE_WORLDPOS
            result.worldPos = vWorldPos;
        // #endif

        // #if USEGBUFFER
            // result.worldNormal = vec4<f32>(0.0, 0.0, 0.0, 1.0); 
            result.material = vec4<f32>(0.0, 1.0, 0.0, 0.0);
        // #endif

        result.color = varying_Color;
        return result;
    }
`;class no{constructor(e,t){s(this,"mCount"),s(this,"mBatchSize"),s(this,"mBatchCount"),s(this,"mMinIndexCount"),s(this,"mOffset"),s(this,"mIndexBuffer"),s(this,"mDataBuffer"),s(this,"mBatchBuffers"),s(this,"mVertexShader"),s(this,"mFragmentShader"),s(this,"mRenderPipeline"),s(this,"mRenderPipelineLayout"),s(this,"mVertexBufferLayout"),s(this,"mGPUPrimitiveTopology"),this.mMinIndexCount=e,this.mGPUPrimitiveTopology=t,this.mBatchSize=Math.trunc(65536/this.mMinIndexCount),this.init()}reset(){this.mCount=0,this.mOffset=0,this.mBatchCount=0}addShapeData(e){let t=e.shapeData;for(;0<t.length;){if(this.mOffset>=this.mDataBuffer.length&&this.flush(),this.mOffset+t.length<=this.mDataBuffer.length){this.mDataBuffer.set(t,this.mOffset),this.mOffset+=t.length;break}var i=this.mDataBuffer.length-this.mOffset;this.mDataBuffer.set(t.slice(0,i),this.mOffset),this.mOffset+=i,t=t.slice(i)}}flush(){if(0<this.mOffset){let e;this.mBatchCount<this.mBatchBuffers.length?e=this.mBatchBuffers[this.mBatchCount]:(e=M.device.createBuffer({size:this.mDataBuffer.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST}),this.mBatchBuffers.push(e)),M.device.queue.writeBuffer(e,0,this.mDataBuffer,0,this.mOffset),this.mCount+=this.mOffset/8,this.mBatchCount++,this.mOffset=0}}render(e,t){var i=M.device;if(this.mRenderPipeline||(a=e.outAttachments,e.outColor!=-1&&(a[e.outColor].blend=ja.getBlend(ae.NONE)),this.mRenderPipelineLayout=i.createPipelineLayout({bindGroupLayouts:[di.getGlobalDataBindGroupLayout()]}),i={label:"Graphic3DFixedRenderPipeline",layout:this.mRenderPipelineLayout,vertex:{module:this.mVertexShader,entryPoint:"main",buffers:[this.mVertexBufferLayout]},fragment:{module:this.mFragmentShader,entryPoint:"main",targets:a},primitive:{topology:this.mGPUPrimitiveTopology,cullMode:ct.back,frontFace:"ccw"}},e.depthTexture&&(i.depthStencil={depthWriteEnabled:!0,depthCompare:dt.less_equal,format:e.depthTexture.format}),this.mRenderPipeline=w.createPipeline(i)),this.flush(),0<this.mBatchCount){t.setPipeline(this.mRenderPipeline),t.setIndexBuffer(this.mIndexBuffer,"uint16");var a=this.mCount/this.mMinIndexCount;for(let n=Math.trunc(a/this.mBatchSize)-1;0<=n;n--)t.setVertexBuffer(0,this.mBatchBuffers[n]),t.drawIndexed(this.mMinIndexCount*this.mBatchSize,1,0,0,0);(a%=this.mBatchSize)!=0&&(t.setVertexBuffer(0,this.mBatchBuffers[this.mBatchCount-1]),t.drawIndexed(this.mMinIndexCount*a,1,0,0,0))}}init(){var e=M.device,t=new Uint16Array(4*(Math.trunc(this.mMinIndexCount*this.mBatchSize/4)+1));for(let i=0;i<t.length;i++)t[i]=i;this.mIndexBuffer=e.createBuffer({size:t.byteLength,usage:GPUBufferUsage.INDEX|GPUBufferUsage.COPY_DST}),e.queue.writeBuffer(this.mIndexBuffer,0,t),this.mVertexBufferLayout={arrayStride:32,stepMode:"vertex",attributes:[{shaderLocation:0,offset:0,format:"float32x4"},{shaderLocation:1,offset:16,format:"float32x4"}]},this.mBatchBuffers=[],this.mDataBuffer=new Float32Array(8*t.length),this.mBatchBuffers.push(e.createBuffer({size:this.mDataBuffer.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})),this.mVertexShader=this.createShaderModule("Graphic3DFixedRenderPipeline.vs",We.parse(ao,{})),this.mFragmentShader=this.createShaderModule("Graphic3DFixedRenderPipeline.fs",We.parse(so,{})),this.reset()}createShaderModule(e,t){return e=M.device.createShaderModule({label:e,code:t}),e.getCompilationInfo().then(i=>{0<i.messages.length&&(console.log(t),console.log(i))}),e}}class Tt{}s(Tt,"ShapeVertexSize",8);class _a{constructor(e){s(this,"uuid"),s(this,"type"),s(this,"color"),s(this,"count",0),s(this,"shapeData"),s(this,"dirtyData",!1),s(this,"memoryDataIndex",-1),s(this,"transformIndex"),this.transformIndex=e}buildAxis(e=new d(0,0,0),t=10){this.buildLines([e,new d(e.x+t,e.y,e.z)],x.hexRGBColor(x.RED)),this.buildLines([e,new d(e.x,e.y+t,e.z)],x.hexRGBColor(x.GREEN)),this.buildLines([e,new d(e.x,e.y,e.z+t)],x.hexRGBColor(x.BLUE))}buildLines(e,t=x.COLOR_WHITE){if(!(e.length<2))if(e.length==2)this.fillShapeData(e,t);else{var i=new Array(e.length+e.length-2);for(let a=1,n=0;a<e.length;++a)i[n++]=e[a-1],i[n++]=e[a];this.fillShapeData(i,t)}}buildArcLine(e,t,i,a,n=16,o=d.Y_AXIS,h=x.COLOR_WHITE){var l=(a-i)*ee,u=(i*=ee,[]);for(let m=0;m<=n;++m){1<m&&u.push(u[u.length-1]);var c=l*(m/n)+i,f=t*Math.cos(c),p=t*Math.sin(c);switch(o){case d.X_AXIS:u.push(e.add(new d(0,f,p)));break;case d.Y_AXIS:u.push(e.add(new d(f,0,p)));break;default:d.Z_AXIS,u.push(e.add(new d(f,p,0)))}}this.fillShapeData(u,h)}buildCircle(e,t,i=32,a=d.Y_AXIS,n=x.COLOR_WHITE){var o=[];for(let c=0;c<=i;++c){var h=2*Math.PI*c/i,l=t*Math.cos(h),u=t*Math.sin(h);switch(a){case d.X_AXIS:o.push(e.add(new d(0,l,u)));break;case d.Y_AXIS:o.push(e.add(new d(l,0,u)));break;default:d.Z_AXIS,o.push(e.add(new d(l,u,0)))}0<c&&o.push(o[o.length-1])}o.push(o[0]),this.fillShapeData(o,n)}fillShapeData(e,t){this.shapeData?this.count+Tt.ShapeVertexSize*e.length>=this.shapeData.length&&((i=new Float32Array(this.shapeData.length+Tt.ShapeVertexSize*e.length)).set(this.shapeData),this.shapeData=i):this.shapeData=new Float32Array(Tt.ShapeVertexSize*e.length);var i,a=this.shapeData;for(let o=0;o<e.length;++o){var n=e[o];a[this.count++]=n.x,a[this.count++]=n.y,a[this.count++]=n.z,a[this.count++]=this.transformIndex,t instanceof x?(a[this.count++]=t.r,a[this.count++]=t.g,a[this.count++]=t.b,a[this.count++]=t.a):(n=t[o],a[this.count++]=n.r,a[this.count++]=n.g,a[this.count++]=n.b,a[this.count++]=n.a)}this.dirtyData=!0}reset(){this.count=0}}class Ki extends Qa{constructor(e,t){super(),s(this,"shapes"),s(this,"mDirtyData",!1),s(this,"mMinIndexCount"),s(this,"mGPUPrimitiveTopology"),s(this,"mRenderPipeline"),this.alwaysRender=!0,this.mMinIndexCount=e,this.mGPUPrimitiveTopology=t,this.shapes=new Map,this.addRendererMask(Se.Particle)}fillShapeData(e,t,i,a){this.mDirtyData=!0,this.shapes.has(e)?(n=this.shapes.get(e)).shapeData.length<Tt.ShapeVertexSize*a.length&&(n.shapeData=new Float32Array(Tt.ShapeVertexSize*a.length)):((n=new _a(this.transform._worldMatrix.index)).type=t,n.color=i,n.shapeData=new Float32Array(Tt.ShapeVertexSize*a.length));var n,o=n.shapeData,h=this.transform._worldMatrix.index;for(let u=0,c=0;u<a.length;++u){var l=a[u];o[c++]=l.x,o[c++]=l.y,o[c++]=l.z,o[c++]=h,o[c++]=i.r,o[c++]=i.g,o[c++]=i.b,o[c++]=i.a}this.shapes.set(e,n)}init(){super.init(),this.castGI=!1,this.castShadow=!1,this.mRenderPipeline=new no(this.mMinIndexCount,this.mGPUPrimitiveTopology)}removeShape(e){this.shapes.has(e)&&(this.mDirtyData=!0,this.shapes.delete(e))}initPipeline(){this.object3D.bound=new we(d.ZERO,d.MAX),this._readyPipeline=!0}nodeUpdate(e,t,i,a){this.mDirtyData&&(this.mRenderPipeline.reset(),this.shapes.forEach((n,o)=>{this.mRenderPipeline.addShapeData(n)}),this.mDirtyData=!1)}renderPass2(e,t,i,a,n,o=0){this.mRenderPipeline.render(i,n)}allocGraphics3DShape(e,t){let i;return this.shapes.has(e)?(i=this.shapes.get(e)).reset():((i=new _a(t)).uuid=e,i.type="line",i.color=x.COLOR_WHITE,this.shapes.set(i.uuid,i)),this.mDirtyData=!0,i}}class oo{constructor(){s(this,"opaqueList",[]),s(this,"transparentList",[]),s(this,"offset",0),s(this,"sky")}clean(){this.opaqueList.length=0,this.transparentList.length=0,this.offset=0}}class xa{constructor(){s(this,"renderGroup"),this.renderGroup=new Map}collect_add(e){let t="",i="";t+=e.geometry.uuid;for(let o=0;o<e.materials.length;o++){var a=e.materials[o];i+=a.renderShader.shaderVariant}var n=t+i;this.renderGroup.has(n)||this.renderGroup.set(n,{bundleMap:new Map,key:n,renderNodes:[]}),this.renderGroup.get(n).renderNodes.indexOf(e)==-1&&this.renderGroup.get(n).renderNodes.push(e)}}const Ja=class{constructor(){s(this,"_sceneLights"),s(this,"_sceneGIProbes"),s(this,"_source_opaqueRenderNodes"),s(this,"_source_transparentRenderNodes"),s(this,"_graphics"),s(this,"_op_renderGroup"),s(this,"_tr_renderGroup"),s(this,"state",{giLightingChange:!0}),s(this,"sky"),s(this,"_collectInfo"),this._sceneLights=new Map,this._sceneGIProbes=new Map,this._source_opaqueRenderNodes=new Map,this._source_transparentRenderNodes=new Map,this._graphics=[],this._op_renderGroup=new Map,this._tr_renderGroup=new Map,this._collectInfo=new oo}static get instance(){return this._instance||(this._instance=new Ja),this._instance}getPashList(r,e){return e.renderOrder<3e3?this._source_opaqueRenderNodes.get(r):3e3<=e.renderOrder?this._source_transparentRenderNodes.get(r):void 0}sortRenderNode(r,e){for(let t=r.length-1;0<t;t--)if(r[t].renderOrder<e.renderOrder)return void r.push(e);r.push(e)}addRenderNode(r,e){var t;r&&(e.hasMask(Se.Sky)?this.sky=e:e instanceof Ki?this._graphics.indexOf(e)==-1&&this._graphics.push(e):ma.hasMask(e.object3D.renderLayer,ei.None)?(this.removeRenderNode(r,e),e.renderOrder<3e3?(this._source_opaqueRenderNodes.has(r)||this._source_opaqueRenderNodes.set(r,[]),this._source_opaqueRenderNodes.get(r).push(e)):3e3<=e.renderOrder&&(this._source_transparentRenderNodes.has(r)||this._source_transparentRenderNodes.set(r,[]),this._source_transparentRenderNodes.get(r).push(e)),(t=this.getPashList(r,e)).indexOf(e)==-1&&this.sortRenderNode(t,e)):(this.removeRenderNode(r,e),e.renderOrder<3e3?(this._op_renderGroup.has(r)||this._op_renderGroup.set(r,new xa),this._op_renderGroup.get(r).collect_add(e)):3e3<=e.renderOrder&&(this._tr_renderGroup.has(r)||this._tr_renderGroup.set(r,new xa),this._tr_renderGroup.get(r).collect_add(e))),e.object3D.renderNode=e)}removeRenderNode(r,e){e.hasMask(Se.Sky)?this.sky=null:ma.hasMask(e.object3D.renderLayer,ei.None)&&(r=this.getPashList(r,e))&&(e=r.indexOf(e))!=-1&&r.splice(e,1)}addLight(r,e){var t;this._sceneLights.has(r)?(t=this._sceneLights.get(r)).length>=b.setting.light.maxLight?console.warn("Alreay meet maxmium light number:",b.setting.light.maxLight):t.indexOf(e)==-1&&t.push(e):this._sceneLights.set(r,[e])}removeLight(r,e){this._sceneLights.has(r)&&(e=(r=this._sceneLights.get(r)).indexOf(e))!=-1&&r.splice(e,1)}getLights(r){return this._sceneLights.get(r)||[]}addGIProbe(r,e){this._sceneGIProbes.has(r)?this._sceneGIProbes.get(r).push(e):this._sceneGIProbes.set(r,[e])}removeGIProbe(r,e){this._sceneGIProbes.has(r)&&(e=(r=this._sceneGIProbes.get(r)).indexOf(e))!=-1&&r.splice(e,1)}getProbes(r){return this._sceneGIProbes.get(r)||[]}autoSortRenderNodes(t){var e,t=this._source_transparentRenderNodes.get(t);if(t){let i=!1;for(const a of t)if(a.isRenderOrderChange||a.needSortOnCameraZ){i=!0;break}if(i){for(const a of t){let n=a.renderOrder;a.needSortOnCameraZ&&(e=Un.worldToCameraDepth(a.object3D),e=1-Math.max(0,Math.min(1,e)),n+=e),a.__renderOrder=n,a.isRenderOrderChange=!1}t.sort((a,n)=>a.__renderOrder>n.__renderOrder?1:-1)}return this}}getRenderNodes(r){this._collectInfo.clean(),this._collectInfo.sky=this.sky;var e=this._source_opaqueRenderNodes.get(r),e=(e&&(this._collectInfo.opaqueList=e.concat(),this._collectInfo.offset=e.length),this._source_transparentRenderNodes.get(r));return e&&(this._collectInfo.transparentList=e.concat()),this._collectInfo}getOpRenderGroup(r){return this._op_renderGroup.get(r)}getTrRenderGroup(r){return this._tr_renderGroup.get(r)}getGraphicList(){return this._graphics}};let B=Ja;s(B,"_instance");class ho{constructor(){s(this,"setting"),s(this,"probesBufferData"),s(this,"probesBuffer"),s(this,"isVolumeFrameChange",!0),s(this,"randomOrientation"),s(this,"startPosition",new d),s(this,"isVolumeChange",!0),s(this,"irradianceVolumeBuffer"),s(this,"directionDistance",20),s(this,"randomSeedCount",3),s(this,"useRandomIndex",0),s(this,"centerDirection",new d(0,0,this.directionDistance).normalize(1)),s(this,"arroundPositions",[]),s(this,"debugX",0),s(this,"debugY",0),s(this,"debugZ",0)}updateOrientation(){return this.useRandomIndex++,this.useRandomIndex>=this.arroundPositions.length&&(this.useRandomIndex=0),A.fromToRotation(this.centerDirection,this.arroundPositions[this.useRandomIndex],this.randomOrientation),this.randomOrientation}init(e){this.setting=e,this.randomOrientation=new A(!1),this.randomOrientation.identity(),this.irradianceVolumeBuffer=new De(80),this.createFramesBuffer(),this.arroundPositions.push(this.centerDirection.clone());for(let i=0;i<this.randomSeedCount;i++){var t=2*Math.PI*i/this.randomSeedCount,t=new d(Math.sin(t),Math.cos(t),this.directionDistance).normalize(1);this.arroundPositions.push(t)}}setVolumeDataChange(){this.isVolumeChange=!0}updateProbes(e){var t,i=this.probesBufferData;for(t of e)i[3+4*t.index]=t.drawCallFrame}createFramesBuffer(){var e;this.probesBufferData||(e=this.setting.probeXCount*this.setting.probeYCount*this.setting.probeZCount,this.probesBufferData=new Float32Array(4*e),this.probesBufferData.fill(-1),this.probesBuffer=new De(4*e,GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST))}uploadBuffer(){this.isVolumeChange&&(this.fillIrradianceData(),this.isVolumeChange=!1,this.isVolumeFrameChange=!0),this.probesBuffer.setFloat32Array("uniformFramesBuffer",this.probesBufferData)}calcPosition(e,t,i,a){var n=this.setting,o=this.setting.probeSpace;return(a=a||new d).x=e*o-o*(n.probeXCount-1)*.5+n.offsetX,a.y=t*o-o*(n.probeYCount-1)*.5+n.offsetY,a.z=i*o-o*(n.probeZCount-1)*.5+n.offsetZ,a}fillIrradianceData(){var e=this.setting,t=this.calcPosition(0,0,0,this.startPosition);this.irradianceVolumeBuffer.setFloat("orientationIndex",this.randomOrientation.index),this.irradianceVolumeBuffer.setFloat("hysteresis",e.hysteresis),this.irradianceVolumeBuffer.setFloat("OctRTSideSize",e.octRTSideSize),this.irradianceVolumeBuffer.setFloat("OctRTMaxSize",e.octRTMaxSize),this.irradianceVolumeBuffer.setFloat("startX",t.x),this.irradianceVolumeBuffer.setFloat("startY",t.y),this.irradianceVolumeBuffer.setFloat("startZ",t.z),this.irradianceVolumeBuffer.setFloat("ProbeSpace",e.probeSpace),this.irradianceVolumeBuffer.setFloat("probeXCount",e.probeXCount),this.irradianceVolumeBuffer.setFloat("probeYCount",e.probeYCount),this.irradianceVolumeBuffer.setFloat("probeZCount",e.probeZCount),this.irradianceVolumeBuffer.setFloat("maxDistance",1.732*e.probeSpace),this.irradianceVolumeBuffer.setFloat("depthSharpness",e.depthSharpness),this.irradianceVolumeBuffer.setFloat("ProbeSourceTextureSize",e.probeSourceTextureSize),this.irradianceVolumeBuffer.setFloat("ProbeSize",e.probeSize),this.irradianceVolumeBuffer.setFloat("bounceIntensity",e.bounceIntensity),this.irradianceVolumeBuffer.setFloat("probeRoughness",e.probeRoughness),this.irradianceVolumeBuffer.setFloat("normalBias",e.normalBias),this.irradianceVolumeBuffer.setFloat("irradianceChebyshevBias",e.irradianceChebyshevBias),this.irradianceVolumeBuffer.setFloat("rayNumber",e.rayNumber),this.irradianceVolumeBuffer.setFloat("irradianceDistanceBias",e.irradianceDistanceBias),this.irradianceVolumeBuffer.setFloat("indirectIntensity",e.indirectIntensity),this.irradianceVolumeBuffer.setFloat("ddgiGamma",e.ddgiGamma),this.irradianceVolumeBuffer.setFloat("lerpHysteresis",e.lerpHysteresis),this.irradianceVolumeBuffer.setFloat("debugX",this.debugX),this.irradianceVolumeBuffer.setFloat("debugY",this.debugY),this.irradianceVolumeBuffer.setFloat("debugZ",this.debugZ),this.irradianceVolumeBuffer.apply()}}class lo{constructor(){s(this,"storageGPUBuffer"),s(this,"irradianceVolume"),s(this,"_lightList",[]),this.storageGPUBuffer=new De(Jr.lightSize*b.setting.light.maxLight,GPUBufferUsage.COPY_SRC),this.irradianceVolume=new ho,this.irradianceVolume.init(b.setting.gi);for(let t=0;t<b.setting.light.maxLight;t++){var e=this.storageGPUBuffer.memory.allocation_node(4*Jr.lightSize);this._lightList.push(e)}this.storageGPUBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE}update(e){this.storageGPUBuffer.clean();var t=B.instance.getLights(e.scene);for(let a=0;a<t.length;a++){var i=t[a].lightData;i.index=a,this.writeLightBytes(i,this._lightList[a])}this.storageGPUBuffer.apply()}writeLightBytes(e,t){t.offset=0,t.writeFloat(e.index),t.writeInt32(e.lightType),t.writeFloat(e.radius),t.writeFloat(e.linear),t.writeVector3(e.lightPosition),t.writeFloat(e.lightMatrixIndex),t.writeVector3(e.direction),t.writeFloat(e.quadratic),t.writeRGBColor(e.lightColor),t.writeFloat(e.intensity),t.writeFloat(e.innerAngle),t.writeFloat(e.outerAngle),t.writeFloat(e.range),t.writeInt32(e.castShadowIndex),t.writeVector3(e.lightTangent),t.writeFloat(e.iesIndex)}}class uo{constructor(){s(this,"gpuBuffer"),s(this,"probes"),s(this,"memoryDo"),s(this,"_probeInfoList")}initDataUniform(e){this.memoryDo=new Ha,this.probes=e,this._probeInfoList=[],this.memoryDo.destroy(),this.memoryDo.allocation(17*e.length*4);for(let a=0;a<e.length;a++){var t=this.memoryDo.allocation_node(68),i=(this._probeInfoList.push(t),e[a].transform.worldPosition);t.setArray(0,[i.x,i.y,i.z])}this.gpuBuffer=M.device.createBuffer({size:this.memoryDo.shareDataBuffer.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.STORAGE,label:"ProbeBuffer",mappedAtCreation:!1})}updateGPUBuffer(){var e=this.memoryDo.shareDataBuffer;let t=this.memoryDo.shareDataBuffer.byteLength,i=0;for(;i<t;)M.device.queue.writeBuffer(this.gpuBuffer,i,e,i,Math.floor(Math.min(32e4,t-i))),i+=32e4}}class co{constructor(){s(this,"uuid"),s(this,"index"),s(this,"usage"),s(this,"groupBufferSize"),s(this,"matrixBufferDst"),this.uuid=Fe(),this.groupBufferSize=0,this.usage=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,this.cacheWorldMatrix()}cacheWorldMatrix(){this.groupBufferSize=A.maxCount*A.blockBytes,this.matrixBufferDst=new De(this.groupBufferSize/4),this.matrixBufferDst.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.matrixBufferDst.buffer.label=this.groupBufferSize.toString()}writeBuffer(){var e=A.matrixBytes;let t=e.byteLength,i=0;for(;i<t;){var a=Math.min(32e4,t-i);M.device.queue.writeBuffer(this.matrixBufferDst.buffer,i,e.buffer,e.byteOffset+i,a),i+=a}}}class ve{static init(){this.modelMatrixBindGroup=new co,this._cameraBindGroups=new Map,this._lightEntriesMap=new Map}static getCameraGroup(e){let t=this._cameraBindGroups.get(e);return t||(t=new On(this.modelMatrixBindGroup),this._cameraBindGroups.set(e,t)),e.isShadowCamera?t.setShadowCamera(e):t.setCamera(e),t}static getLightEntries(e){var t;return e||console.log("getLightEntries scene is null"),this._lightEntriesMap.get(e)||(t=new lo,this._lightEntriesMap.set(e,t)),this._lightEntriesMap.get(e)}static updateProbes(e){this._probeEntries||(this._probeEntries=new uo,this._probeEntries.initDataUniform(e))}}s(ve,"_cameraBindGroups"),s(ve,"_lightEntriesMap"),s(ve,"_probeEntries"),s(ve,"modelMatrixBindGroup");const gr=class{static bindPipeline(r,e){if(gr.lastShader!=e){gr.lastShader=e,gr.lastPipeline!=e.pipeline&&(gr.lastPipeline=e.pipeline,r.setPipeline(e.pipeline));for(let i=1;i<e.bindGroups.length;i++){var t=e.bindGroups[i];t&&r.setBindGroup(i,t)}}}static bindCamera(r,e){e=ve.getCameraGroup(e),r.setBindGroup(0,e.globalBindGroup)}static bindGeometryBuffer(r,e){if(this.lastGeometry!=e){(this.lastGeometry=e).indicesBuffer&&r.setIndexBuffer(e.indicesBuffer.indicesGPUBuffer.buffer,e.indicesBuffer.indicesFormat);var t=e.vertexBuffer.vertexGPUBuffer,i=e.vertexBuffer.vertexBufferLayouts;for(let n=0;n<i.length;n++){var a=i[n];r.setVertexBuffer(n,t.buffer,a.offset,a.size)}}}static cleanCache(){this.lastGeometry=null,this.lastPipeline=null,this.lastShader=null}static createPipeline(r){return et.countStart("GPUContext","pipeline"),M.device.createRenderPipeline(r)}static beginCommandEncoder(){return et.countStart("GPUContext","beginCommandEncoder"),this.LastCommand&&M.device.queue.submit([this.LastCommand.finish()]),this.LastCommand=M.device.createCommandEncoder(),this.LastCommand}static endCommandEncoder(r){this.LastCommand==r&&(M.device.queue.submit([this.LastCommand.finish()]),this.LastCommand=null,et.countStart("GPUContext","endCommandEncoder"))}static recordBundleEncoder(r){return M.device.createRenderBundleEncoder(r)}static beginRenderPass(r,e){var t;if(this.cleanCache(),this.renderPassCount++,(this.lastRenderPassState=e).renderTargets&&0<e.renderTargets.length)for(let n=0;n<e.renderTargets.length;++n){var i=e.renderTargets[n],a=e.renderPassDescriptor.colorAttachments[n];0<e.multisample&&e.renderTargets.length==1?(a.view=e.multiTexture.createView(),a.resolveTarget=i.getGPUView()):a.view=i.getGPUTexture().createView()}else(t=e.renderPassDescriptor.colorAttachments[0])&&(0<e.multisample?(t.view=e.multiTexture.createView(),t.resolveTarget=M.context.getCurrentTexture().createView()):t.view=M.context.getCurrentTexture().createView());return r.beginRenderPass(e.renderPassDescriptor)}static drawIndexed(r,e,t,i,a,n){r.drawIndexed(e,t,i,a,n),this.drawCount++}static draw(r,e,t,i,a){r.draw(e,t,i,a),this.drawCount++}static endPass(r){r.insertDebugMarker("end"),r.end()}static computeCommand(r,e){var t=r.beginComputePass();for(let i=0;i<e.length;i++)e[i].compute(t);t.end()}};let w=gr;s(w,"lastGeometry"),s(w,"lastPipeline"),s(w,"lastShader"),s(w,"drawCount",0),s(w,"renderPassCount",0),s(w,"geometryCount",0),s(w,"pipelineCount",0),s(w,"matrixCount",0),s(w,"lastRenderPassState"),s(w,"LastCommand");class ya{constructor(){s(this,"source"),s(this,"input"),s(this,"output")}reset(e){this.input&&this.input.destroy(),this.output&&this.output.destroy(),this.input=this.output=null,this.source=e}apply(e){var t;this.source&&(this.input||(t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST,this.input=new De(this.source.length,t,this.source),this.input.apply()),this.output||(t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC,this.output=new De(3*e,t),this.output.apply()))}}class fo{constructor(){s(this,"enable"),s(this,"morphTargetsRelative"),s(this,"MaxMorphTargetCount",64),s(this,"_computeConfigArray"),s(this,"_computeConfigBuffer"),s(this,"_morphInfluenceArray"),s(this,"_morphInfluenceBuffer"),s(this,"_positionAttrDataGroup"),s(this,"_normalAttrDataGroup"),s(this,"_isInfluenceDirty"),s(this,"_morphTargetCount"),s(this,"_totalVertexCount"),s(this,"_computeShader"),s(this,"_computeShaders"),s(this,"_computeWorkGroupXY",1),s(this,"_collectMorphTargetData"),this._isInfluenceDirty=!0,this.generateGPUBuffer(),this._positionAttrDataGroup=new ya,this._normalAttrDataGroup=new ya}initMorphTarget(e){this._collectMorphTargetData=this.collectMorphTargetList(e),this._computeShader&&this._computeShader.destroy(),e=ge.CsMain,this._computeShader=new ft(e),this._collectMorphTargetData.mergedNormal?this._computeShader.setDefine("USE_MORPHNORMALS",!0):this._computeShader.deleteDefine("USE_MORPHNORMALS"),this._computeShaders=[this._computeShader],this._isInfluenceDirty=!0,this._morphTargetCount=this._collectMorphTargetData.mtCount,this._totalVertexCount=this._collectMorphTargetData.vCount,this._morphInfluenceArray.fill(0),this._computeWorkGroupXY=this.calcWorkGroup(this._totalVertexCount),this._positionAttrDataGroup.reset(this._collectMorphTargetData.mergedPos),this._normalAttrDataGroup.reset(this._collectMorphTargetData.mergedNormal)}applyRenderShader(e){this.uploadMorphTargetBuffer(),this.uploadConfigGBuffer(),e.setUniformBuffer("morphTargetConfig",this._computeConfigBuffer),e.setStorageBuffer("morphTargetOpPositions",this._positionAttrDataGroup.output),this._collectMorphTargetData.mergedNormal&&e.setStorageBuffer("morphTargetOpNormals",this._normalAttrDataGroup.output)}computeMorphTarget(e){this.uploadConfigGBuffer(),this.uploadMorphTargetBuffer(),this._computeShader.setUniformBuffer("morphTargetConfig",this._computeConfigBuffer),this._computeShader.setStorageBuffer("morphTargetInfluence",this._morphInfluenceBuffer),this._computeShader.setStorageBuffer("morphTargetPositions",this._positionAttrDataGroup.input),this._computeShader.setStorageBuffer("morphTargetOpPositions",this._positionAttrDataGroup.output),this._collectMorphTargetData.mergedNormal&&(this._computeShader.setStorageBuffer("morphTargetNormals",this._normalAttrDataGroup.input),this._computeShader.setStorageBuffer("morphTargetOpNormals",this._normalAttrDataGroup.output)),this._computeShader.workerSizeX=this._computeWorkGroupXY,this._computeShader.workerSizeY=this._computeWorkGroupXY,this._computeShader.workerSizeZ=1,w.computeCommand(e,this._computeShaders)}updateInfluence(e,t){this._isInfluenceDirty=!0,this._morphInfluenceArray[e]=t}collectMorphTargetList(e){var t=this.collectAttribute("a_morphPositions_",e),i=t.length,a=t[0].data.length/3,n=new Float32Array(a*i*3);{let c=0;for(let f=0;f<i;f++){var o=t[f];n.set(o.data,c),c+=o.data.length}}let h=this.collectAttribute("a_morphNormals_",e),l;if(h&&0<h.length){let c=0;l=new Float32Array(a*i*3);for(let f=0;f<i;f++){var u=h[f];l.set(u.data,c),c+=u.data.length}}return{mtCount:i,vCount:a,mergedPos:n,mergedNormal:l}}collectAttribute(e,t){var i=[];for(let n=0;n<this.MaxMorphTargetCount;n++){var a=e+n,a=t.getAttribute(a);if(!a)break;i[n]=a}return i}uploadConfigGBuffer(){if(this._isInfluenceDirty){let e=0;for(let t=0;t<this._morphTargetCount;t++)e+=this._morphInfluenceArray[t];this._morphInfluenceBuffer.setFloat32Array("data",this._morphInfluenceArray),this._morphInfluenceBuffer.apply(),this._computeConfigArray[0]=this.morphTargetsRelative?1:1-e,this._computeConfigArray[1]=this._morphTargetCount,this._computeConfigArray[2]=this._totalVertexCount,this._computeConfigArray[3]=this._computeWorkGroupXY,this._computeConfigBuffer.setFloat32Array("data",this._computeConfigArray),this._computeConfigBuffer.apply(),this._isInfluenceDirty=!1}}calcWorkGroup(e){return e=Math.ceil(Math.sqrt(e)),e=Math.ceil(Math.log2(e)),Math.pow(2,e)}uploadMorphTargetBuffer(){this._positionAttrDataGroup.output||this._positionAttrDataGroup.apply(this._totalVertexCount),this._normalAttrDataGroup.output||this._normalAttrDataGroup.apply(this._totalVertexCount)}generateGPUBuffer(){this._computeConfigArray=new Float32Array(4),this._computeConfigBuffer=new ci(4),this._morphInfluenceArray=new Float32Array(this.MaxMorphTargetCount);var e=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST;this._morphInfluenceBuffer=new De(this.MaxMorphTargetCount,e)}}class ye extends Qa{constructor(){super(),s(this,"receiveShadow"),s(this,"morphData")}onEnable(){super.onEnable()}onDisable(){super.onDisable()}get geometry(){return this._geometry}set geometry(e){var t=(super.geometry=e).morphTargetDictionary!=null;t&&(this.morphData||(this.morphData=new fo),this.morphData.morphTargetsRelative=e.morphTargetsRelative,this.morphData.initMorphTarget(e)),this.morphData&&(this.morphData.enable=t),this.morphData&&this.morphData.enable?this.addRendererMask(Se.MorphTarget):(this.removeRendererMask(Se.MorphTarget),this.onCompute=null),this.object3D.bound=this._geometry.bounds.clone(),this._readyPipeline&&this.initPipeline()}get material(){return this._materials[0]}set material(e){this.materials=[e]}setMorphInfluence(e,t){this.morphData&&this.morphData.enable&&0<=(e=this._geometry.morphTargetDictionary[e])&&this.morphData.updateInfluence(e,t)}setMorphInfluenceIndex(e,t){this.morphData&&this.morphData.enable&&0<=e&&this.morphData.updateInfluence(e,t)}onCompute(e,t){this.morphData&&this.morphData.enable&&this.morphData.computeMorphTarget(t)}nodeUpdate(e,t,i,a){if(this.morphData&&this.morphData.enable)for(let h=0;h<this.materials.length;h++){var n=this.materials[h].renderPasses.get(t);if(n)for(let l=0;l<n.length;l++){var o=n[l].renderShader;this.morphData.applyRenderShader(o)}}super.nodeUpdate(e,t,i,a)}destroy(e){super.destroy(e)}cloneTo(e){e=e.addComponent(ye),e.geometry=this.geometry,e.material=this.material,e.castShadow=this.castShadow,e.castGI=this.castGI,e.receiveShadow=this.receiveShadow,e.rendererMask=this.rendererMask}}class po{constructor(){s(this,"label",""),s(this,"customSize",!1),s(this,"zPreTexture",null),s(this,"depthTexture",null),s(this,"outAttachments"),s(this,"outColor",-1),s(this,"renderTargets"),s(this,"rtTextureDescripts"),s(this,"irradianceBuffer"),s(this,"multisample",0),s(this,"multiTexture"),s(this,"depthViewIndex",0),s(this,"depthCleanValue",0),s(this,"isOutTarget",!0),s(this,"camera3D"),s(this,"rtFrame"),s(this,"renderPassDescriptor"),s(this,"renderBundleEncoderDescriptor"),s(this,"depthLoadOp")}getLastRenderTexture(){return this.renderTargets&&0<this.renderTargets.length?this.renderTargets[0]:b.res.redTexture}}const vr=class{static createRendererPassState(r,e=null){var t=new po;if(t.label=r.label,t.customSize=r.customSize,t.rtFrame=r,t.zPreTexture=r.zPreTexture,t.depthTexture=r.depthTexture,t.depthViewIndex=r.depthViewIndex,t.isOutTarget=r.isOutTarget,t.depthCleanValue=r.depthCleanValue,t.depthLoadOp=r.depthLoadOp,r&&0<r.attachments.length){t.renderTargets=r.attachments,t.rtTextureDescripts=r.rtDescriptors,t.renderPassDescriptor=vr.getRenderPassDescriptor(t),t.renderBundleEncoderDescriptor=vr.getRenderBundleDescriptor(t),t.outAttachments=[];for(let a=0;a<r.attachments.length;a++){var i=r.attachments[a];t.outAttachments[a]={format:i.format},i.name.indexOf(fe.colorBufferTex_NAME)!=-1&&(t.outColor=a)}}else t.renderPassDescriptor=vr.getRenderPassDescriptor(t,e),t.renderBundleEncoderDescriptor=vr.getRenderBundleDescriptor(t),t.outAttachments=[{format:M.presentationFormat}],t.outColor=0;return t}static getRenderPassDescriptor(r,e=null){M.device,M.presentationSize;var t,i=[];if(r.renderTargets&&0<r.renderTargets.length){r.renderTargets[0].width,r.renderTargets[0].height;for(let h=0;h<r.renderTargets.length;h++){var a=r.renderTargets[h],n=r.rtTextureDescripts[h];i.push({view:a.getGPUView(),resolveTarget:void 0,loadOp:n.loadOp,clearValue:n.clearValue,storeOp:n.storeOp})}}else r.customSize||(t=M.canvasConfig&&M.canvasConfig.alpha?[1,1,1,0]:[0,0,0,1],r.isOutTarget==1&&i.push({view:void 0,resolveTarget:void 0,loadOp:M.canvasConfig&&M.canvasConfig.alpha||e!=null?"load":"clear",clearValue:t,storeOp:"store"}));let o=null;return o=r.depthTexture||r.zPreTexture?(r.zPreTexture&&(r.depthTexture=r.zPreTexture),{label:r.label+" renderPassDescriptor zPreTexture"+(r.zPreTexture?"load":"clear"),colorAttachments:i,depthStencilAttachment:{view:r.depthTexture.getGPUView(),depthLoadOp:r.zPreTexture?"load":r.depthLoadOp,depthClearValue:r.zPreTexture?1:r.depthCleanValue,depthStoreOp:"store"}}):{colorAttachments:i,label:"renderPassDescriptor not writeDepth"},this.renderPassDescriptorCount++,o}static getRenderBundleDescriptor(r){M.presentationSize;var e=[];if(r.renderTargets&&0<r.renderTargets.length){r.renderTargets[0].width,r.renderTargets[0].height;for(let a=0;a<r.renderTargets.length;a++){var t=r.renderTargets[a];e.push(t.format)}}let i=null;return i=r.depthTexture?{colorFormats:e,depthStencilFormat:r.depthTexture.format}:{colorFormats:e},this.renderPassDescriptorCount++,i}};let qe=vr;s(qe,"bindGroupDescriptorCount",0),s(qe,"bindTextureDescriptorCount",0),s(qe,"renderPassDescriptorCount",0),s(qe,"pipelineDescriptorCount",0);class ba extends or{constructor(e){super(),s(this,"node"),this.bufferType=Dt.VertexGPUBuffer,this.createVertexBuffer(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.VERTEX,e)}createVertexBuffer(e,t){var i=M.device;this.byteSize=t*Float32Array.BYTES_PER_ELEMENT,this.usage=e,this.buffer&&this.destroy(),this.buffer=i.createBuffer({size:this.byteSize,usage:e,mappedAtCreation:!1}),this.memory.allocation(this.byteSize),this.node=this.memory.allocation_node(this.byteSize)}}var vt=(r=>(r[r.split=0]="split",r[r.compose=1]="compose",r))(vt||{});class mo{constructor(){s(this,"vertexCount",0),s(this,"vertexGPUBuffer"),s(this,"geometryType",vt.compose),s(this,"_vertexBufferLayouts"),s(this,"_attributeSlotLayouts"),s(this,"_attributeLocation"),this._vertexBufferLayouts=[],this._attributeLocation={},this._attributeSlotLayouts=[]}get vertexBufferLayouts(){return this._vertexBufferLayouts}createVertexBuffer(e,t){switch(this.geometryType){case vt.split:this.createSplitVertexBuffer(e,t);break;case vt.compose:this.createComposeVertexBuffer(e,t)}}createSplitVertexBuffer(e,t){let i=0;for(let o=0;o<t.attributes.length;o++){var a=t.attributes[o];if(a.name!="index"){this._attributeLocation[a.name]=a.location;var n={name:a.name,format:a.format,offset:0,shaderLocation:a.location,stride:qt[a.format]};this._attributeSlotLayouts[a.location]=[n];let h=e.get(a.name);h||(h={attribute:a.name,data:new Float32Array(a.size*this.vertexCount)},e.set(a.name,h)),n=h.data.length/n.stride,this.vertexCount!=0&&this.vertexCount!=n&&console.error(" vertex count not match attribute count"),this.vertexCount=n,this._vertexBufferLayouts[a.location]={name:a.name,arrayStride:4*a.size,stepMode:"vertex",attributes:this._attributeSlotLayouts[a.location],offset:4*i,size:this.vertexCount*a.size*4},i+=this.vertexCount*a.size}}this.vertexGPUBuffer=new ba(i)}createComposeVertexBuffer(e,t){this._attributeSlotLayouts[0]=[];let i=0;for(let o=0;o<t.attributes.length;o++){var a=t.attributes[o];if(a.name!="index"){this._attributeLocation[a.name]=a.location;var n={name:a.name,format:a.format,offset:4*i,shaderLocation:a.location,stride:qt[a.format]};this._attributeSlotLayouts[0][a.location]=n;let h=e.get(a.name);h||(h={attribute:a.name,data:new Float32Array(a.size*this.vertexCount)},e.set(a.name,h)),n=h.data.length/n.stride,this.vertexCount!=0&&this.vertexCount!=n&&console.error(" vertex count not match attribute count"),this.vertexCount=n,i+=a.size}}this._vertexBufferLayouts[0]={name:"composeStruct",arrayStride:4*i,stepMode:"vertex",attributes:this._attributeSlotLayouts[0],offset:0,size:this.vertexCount*i*4},this.vertexGPUBuffer=new ba(this.vertexCount*i)}upload(e,t){var i;switch(this.geometryType){case vt.split:var a=this._attributeLocation[e],a=this._vertexBufferLayouts[a];this.vertexGPUBuffer.node.setFloat32Array(a.offset/4,t.data);break;case vt.compose:for(let l=0;l<this.vertexCount;l++){var n=this._attributeSlotLayouts[0][this._attributeLocation[e]];for(let u=0;u<n.stride;u++){var o=t.data[l*n.stride+u],h=l*(this._vertexBufferLayouts[0].arrayStride/4)+n.offset/4+u;this.vertexGPUBuffer.node.setFloat(o,h)}}}(i=this.vertexGPUBuffer)!=null&&i.apply()}updateAttributes(e){switch(this.geometryType){case vt.split:for(let a=0;a<this._vertexBufferLayouts.length;a++){var t=this._vertexBufferLayouts[a],i=e.get(t.name);this.vertexGPUBuffer.node.setFloat32Array(t.offset/4,i.data)}break;case vt.compose:for(let a=0;a<this.vertexCount;a++)this._attributeSlotLayouts.forEach(n=>{for(let c=0;c<n.length;c++){var o=n[c],h=e.get(o.name);for(let f=0;f<o.stride;f++){var l=h.data[a*o.stride+f],u=a*(this._vertexBufferLayouts[0].arrayStride/4)+o.offset/4+f;this.vertexGPUBuffer.node.setFloat(l,u)}}})}this.vertexGPUBuffer.apply()}compute(){}destroy(e){this.vertexCount=null,this.geometryType=null,this._vertexBufferLayouts=null,this._attributeSlotLayouts=null,this._attributeLocation=null,this.vertexGPUBuffer.destroy(e),this.vertexGPUBuffer=null}}class go extends or{constructor(e){super(),s(this,"indicesNode"),this.bufferType=Dt.IndicesGPUBuffer,this.createIndicesBuffer(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.INDEX|GPUBufferUsage.INDIRECT,e)}createIndicesBuffer(e,t){var i=M.device;this.byteSize=4*t.length,this.usage=e,this.buffer&&this.destroy(),this.buffer=i.createBuffer({size:this.byteSize,usage:e,mappedAtCreation:!1}),this.memory.allocation(this.byteSize),t&&(this.indicesNode=this.memory.allocation_node(4*t.length),this.indicesNode.setArrayBuffer(0,t),this.apply())}}class vo{constructor(){s(this,"uuid",""),s(this,"name"),s(this,"indicesGPUBuffer"),s(this,"indicesFormat","uint16"),s(this,"indicesCount",0)}createIndicesBuffer(e){e.data instanceof Uint16Array?this.indicesFormat="uint16":e.data instanceof Uint32Array&&(this.indicesFormat="uint32"),this.indicesCount=e.data.length,this.indicesGPUBuffer=new go(e.data)}upload(e){this.indicesGPUBuffer.indicesNode.setArrayBuffer(0,e),this.indicesGPUBuffer.apply()}compute(){}destroy(){this.uuid=null,this.name=null,this.indicesFormat=null,this.indicesCount=null,this.indicesGPUBuffer.destroy(),this.indicesGPUBuffer=null}}class _o{constructor(){s(this,"lodLevels")}}const Lt=class{constructor(){s(this,"uuid"),s(this,"name"),s(this,"subGeometries",[]),s(this,"morphTargetsRelative"),s(this,"morphTargetDictionary"),s(this,"_bounds"),s(this,"_attributeMap"),s(this,"_attributes"),s(this,"_indicesBuffer"),s(this,"_vertexBuffer"),this.uuid=Fe(),this._attributeMap=new Map,this._attributes=[],this._vertexBuffer=new mo}get indicesBuffer(){return this._indicesBuffer}get vertexBuffer(){return this._vertexBuffer}get vertexAttributes(){return this._attributes}get vertexAttributeMap(){return this._attributeMap}get geometryType(){return this._vertexBuffer.geometryType}set geometryType(r){this._vertexBuffer.geometryType=r}get bounds(){if(!this._bounds){this._bounds=new we(new d,new d(1,1,1)),this._bounds.min.x=Number.MAX_VALUE,this._bounds.min.y=Number.MAX_VALUE,this._bounds.min.z=Number.MAX_VALUE,this._bounds.max.x=-Number.MAX_VALUE,this._bounds.max.y=-Number.MAX_VALUE,this._bounds.max.z=-Number.MAX_VALUE;var r=this.getAttribute(z.position);if(r)for(let a=0;a<r.data.length/3;a++){var e=r.data[3*a+0],t=r.data[3*a+1],i=r.data[3*a+2];this._bounds.min.x>e&&(this._bounds.min.x=e),this._bounds.min.y>t&&(this._bounds.min.y=t),this._bounds.min.z>i&&(this._bounds.min.z=i),this._bounds.max.x<e&&(this._bounds.max.x=e),this._bounds.max.y<t&&(this._bounds.max.y=t),this._bounds.max.z<i&&(this._bounds.max.z=i)}this._bounds.setFromMinMax(this._bounds.min,this._bounds.max)}return this._bounds}set bounds(r){this._bounds=r}addSubGeometry(...r){var e=new _o;e.lodLevels=r,this.subGeometries.push(e)}generate(r){this._indicesBuffer.upload(this.getAttribute(z.indices).data),this._vertexBuffer.createVertexBuffer(this._attributeMap,r),this._vertexBuffer.updateAttributes(this._attributeMap)}setIndices(r){this._attributeMap.has(z.indices)||(r={attribute:z.indices,data:r},this._attributeMap.set(z.indices,r),this._indicesBuffer=new vo,this._indicesBuffer.createIndicesBuffer(r))}setAttribute(r,e){r==z.indices?this.setIndices(e):(this._attributeMap.set(r,{attribute:r,data:e}),this._attributes.push(r))}getAttribute(r){return this._attributeMap.get(r)}hasAttribute(r){return this._attributeMap.has(r)}genWireframe(){var r=this.getAttribute("position"),e=this.getAttribute("indices");if(e&&r&&0<e.data.length){var t=r.data,i=[];for(let h=0;h<e.data.length/3;h++){var a=e.data[3*h+0],n=e.data[3*h+1],o=e.data[3*h+2],a=new d(t[3*a+0],t[3*a+1],t[3*a+2]),n=new d(t[3*n+0],t[3*n+1],t[3*n+2]),o=new d(t[3*o+0],t[3*o+1],t[3*o+2]);i.push(a,n),i.push(n,o),i.push(o,a)}return i}return null}compute(){this._indicesBuffer&&this._indicesBuffer.compute(),this._vertexBuffer&&this._vertexBuffer.compute()}computeNormals(){var r=this.getAttribute(z.position),e=this.getAttribute(z.normal),t=this.getAttribute(z.indices);if(r&&e&&t){var i=t.data.length/3,a=Lt.point1,n=Lt.point2,o=Lt.point3,h=Lt.crossA,l=Lt.crossB,u=Lt.crossRet;for(let _=0;_<i;_++){var c=t.data[3*_],f=t.data[3*_+1],p=t.data[3*_+2],m=(a.set(r.data[3*c],r.data[3*c+1],r.data[3*c+2]),n.set(r.data[3*f],r.data[3*f+1],r.data[3*f+2]),o.set(r.data[3*p],r.data[3*p+1],r.data[3*p+2]),d.sub(a,n,h).normalize(),d.sub(a,o,l).normalize(),h.crossProduct(l,u).normalize());e.data[3*c]=e.data[3*f]=e.data[3*p]=m.x,e.data[3*c+1]=e.data[3*f+1]=e.data[3*p+1]=m.y,e.data[3*c+2]=e.data[3*f+2]=e.data[3*p+2]=m.z}this._vertexBuffer.upload(z.normal,e)}return this}isPrimitive(){return!1}destroy(r){this.uuid=null,this.name=null,this.subGeometries=null,this.morphTargetDictionary=null,this._bounds.destroy(),this._bounds=null,this._attributeMap=null,this._attributes=null,this._indicesBuffer.destroy(),this._vertexBuffer.destroy(),this._indicesBuffer=null,this._vertexBuffer=null}};let Xe=Lt;s(Xe,"crossA",d.UP.clone()),s(Xe,"crossB",d.UP.clone()),s(Xe,"crossRet",d.UP.clone()),s(Xe,"point1",d.UP.clone()),s(Xe,"point2",d.UP.clone()),s(Xe,"point3",d.UP.clone());class xo extends Xe{constructor(e,t,i=1,a=1,n=d.Y_AXIS){super(),s(this,"width"),s(this,"height"),s(this,"segmentW"),s(this,"segmentH"),s(this,"up"),this.width=e,this.height=t,this.segmentW=i,this.segmentH=a,this.up=n,this.buildGeometry(this.up)}buildGeometry(e){for(var t,i,a,n=this.segmentW+1,o=(this.segmentH,this.bounds=new we(d.ZERO.clone(),new d(this.width,1,this.height)),f=this.segmentH*this.segmentW*6,(this.segmentW+1)*(this.segmentH+1)),h=new Float32Array(3*o),l=new Float32Array(3*o),u=new Float32Array(2*o),c=new Uint16Array(this.segmentW*this.segmentH*2*3),f=0,p=0,m=0,_=0,v=0;v<=this.segmentH;++v)for(var S=0;S<=this.segmentW;++S){switch(t=(S/this.segmentW-.5)*this.width,i=(v/this.segmentH-.5)*this.height,e){case d.Y_AXIS:h[p++]=t,h[p++]=0,h[p++]=i,l[m++]=0,l[m++]=1,l[m++]=0;break;case d.Z_AXIS:h[p++]=t,h[p++]=-i,h[p++]=0,l[m++]=0,l[m++]=0,l[m++]=1;break;case d.X_AXIS:h[p++]=0,h[p++]=t,h[p++]=i,l[m++]=1,l[m++]=0,l[m++]=0;break;default:h[p++]=t,h[p++]=0,h[p++]=i,l[m++]=0,l[m++]=1,l[m++]=0}u[_++]=S/this.segmentW,u[_++]=v/this.segmentH,S!=this.segmentW&&v!=this.segmentH&&(c[f++]=(a=S+v*n)+1,c[f++]=a,c[f++]=a+n,c[f++]=a+1,c[f++]=a+n,c[f++]=a+n+1)}this.setIndices(c),this.setAttribute(z.position,h),this.setAttribute(z.normal,l),this.setAttribute(z.uv,u),this.setAttribute(z.TEXCOORD_1,u),this.addSubGeometry({indexStart:0,indexCount:c.length,vertexStart:0,index:0})}}class ji extends K{constructor(l="QuadGlsl_vs",u="QuadGlsl_fs",i,a,n=0,o=!1){super(),s(this,"width",128),s(this,"height",128),s(this,"quadRenderer"),s(this,"material"),s(this,"uniforms"),s(this,"rendererPassState");var h=i?i.attachments:[],l=(D.register("QuadGlsl_vs",Tn),D.register("QuadGlsl_fs",Cn),this.material=new pt,this.material.setShader(l,u),this.material.getShader()),u=(this.material.blendMode=ae.NONE,l.shaderState);u.frontFace="cw",u.depthWriteEnabled=!1,u.depthCompare=dt.always,u.multisample=n,this.uniforms=l.uniforms=a||{color:new ht(new x)},this.quadRenderer=this.addComponent(ye),this.quadRenderer.material=this.material,this.quadRenderer.castGI=!1,this.quadRenderer.castShadow=!1,this.quadRenderer.drawType=o?2:0,this.quadRenderer.geometry=new xo(100,100,1,1),this.quadRenderer.__start(),this.quadRenderer._enable=!0,this.quadRenderer.onEnable(),this.colorTexture=b.res.blackTexture,l.setUniformFloat("x",0),l.setUniformFloat("y",0),l.setUniformFloat("width",100),l.setUniformFloat("height",100),this.rendererPassState=qe.createRendererPassState(i,"load"),0<u.multisample&&(this.rendererPassState.multisample=u.multisample,this.rendererPassState.multiTexture=M.device.createTexture({size:{width:M.presentationSize[0],height:M.presentationSize[1]},sampleCount:u.multisample,format:0<h.length?h[0].format:M.presentationFormat,usage:GPUTextureUsage.RENDER_ATTACHMENT}))}set colorTexture(e){this.material.baseMap=e}renderTarget(e,t,n){var a=e.camera,n=w.beginRenderPass(n,t.rendererPassState);w.bindCamera(n,a),t.quadRenderer.nodeUpdate(e,Z.COLOR,t.rendererPassState,null),t.quadRenderer.renderPass2(e,Z.COLOR,t.rendererPassState,null,n),w.endPass(n)}renderToViewQuad(e,t,i,o){var n=e.camera,o=(t.colorTexture=o,w.beginRenderPass(i,t.rendererPassState));w.bindCamera(o,n),t.quadRenderer.nodeUpdate(e,Z.COLOR,t.rendererPassState,null),t.quadRenderer.renderPass2(e,Z.COLOR,t.rendererPassState,null,o),w.endPass(o)}}class ce extends st{constructor(e,t,i=F.rgba8unorm,a,n,o=1,h=0,l){super(e,t,o),s(this,"resolveTarget");var u=M.device;this.name=Fe(),this.usage=n??GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.COPY_DST,this.createTextureDescriptor(e,t,1,i,this.usage,o,h),this.useMipmap=!1,this.visibility=GPUShaderStage.COMPUTE|GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,i==F.rgba32float?(this.samplerBindingLayout.type="non-filtering",this.textureBindingLayout.sampleType="unfilterable-float",this.gpuSampler=u.createSampler({})):i==F.depth32float?(this.samplerBindingLayout.type="filtering",this.sampler_comparisonBindingLayout.type="comparison",this.textureBindingLayout.sampleType="depth",this.gpuSampler=M.device.createSampler({}),this.gpuSampler_comparison=M.device.createSampler({compare:"less",label:"sampler_comparison"})):i==F.depth24plus?(this.samplerBindingLayout={type:"filtering"},this.sampler_comparisonBindingLayout={type:"comparison"},this.textureBindingLayout.sampleType="depth",this.gpuSampler=M.device.createSampler({}),this.gpuSampler_comparison=M.device.createSampler({compare:"less",label:"sampler_comparison"})):(this.samplerBindingLayout.type="filtering",this.textureBindingLayout.sampleType="float",0<h&&(this.textureBindingLayout.multisampled=!0),this.minFilter="linear",this.magFilter="linear",this.mipmapFilter="linear",this.maxAnisotropy=16,this.addressModeU=it.clamp_to_edge,this.addressModeV=it.clamp_to_edge,this.gpuSampler=u.createSampler(this))}create(e,t,i=0){var h=M.device,a=4*e,n=new Float32Array(e*t*4),o=h.createBuffer({size:n.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),h=(h.queue.writeBuffer(o,0,n),w.beginCommandEncoder());h.copyBufferToTexture({buffer:o,bytesPerRow:a},{texture:this.getGPUTexture()},{width:e,height:t,depthOrArrayLayers:1}),w.endCommandEncoder(h)}readTextureToImage(){var a=M.device,e=M.windowWidth,t=M.windowHeight,i=new Float32Array(e*t*4),a=a.createBuffer({size:i.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC});w.beginCommandEncoder().copyTextureToBuffer({texture:this.getGPUTexture()},{buffer:a},[e,t]),a.getMappedRange(0,i.byteLength)}}class Oe{constructor(){s(this,"storeOp","store"),s(this,"loadOp","clear"),s(this,"clearValue",[0,0,0,0])}}class nt{constructor(e,t,i,a,n=!0){s(this,"label"),s(this,"customSize",!1),s(this,"attachments"),s(this,"rtDescriptors"),s(this,"zPreTexture"),s(this,"depthTexture"),s(this,"depthViewIndex",0),s(this,"depthCleanValue",1),s(this,"depthLoadOp","clear"),s(this,"isOutTarget",!0),this.attachments=e,this.rtDescriptors=t,this.depthTexture=i,this.zPreTexture=a,this.isOutTarget=n}clone2Frame(e){e.attachments.push(...this.attachments.concat());for(let a=0;a<this.rtDescriptors.length;a++){var t=this.rtDescriptors[a],i=new Oe;i.loadOp=t.loadOp,i.storeOp=t.storeOp,i.clearValue=t.clearValue,e.rtDescriptors.push(i)}e.depthTexture=this.depthTexture,e.zPreTexture=this.zPreTexture,e.customSize=this.customSize}clone(){var e=new nt([],[]);return this.clone2Frame(e),e}}const Hr=class{static init(){this.rtTextureMap=new Map,this.rtViewQuad=new Map}static createRTTexture(r,e,t,i,a=!1,n=0){let o=this.rtTextureMap.get(r);return o||((o=r==fe.colorBufferTex_NAME?new ce(e,t,i,a,void 0,1,n,!1):new ce(e,t,i,a,void 0,1,n,!0)).name=r,Hr.rtTextureMap.set(r,o)),o}static createRTTextureArray(r,e,t,i,a=1,n=!1,o=0){let h=this.rtTextureMap.get(r);return h||((h=new ce(e,t,i,n,void 0,a,o)).name=r,Hr.rtTextureMap.set(r,h)),h}static createViewQuad(r,e,t,i,a,n=0){return i=new nt([i],[new Oe]),e=new ji(e,t,i,a,n),Hr.rtViewQuad.set(r,e),e}static getTexture(r){return this.rtTextureMap.get(r)}static CreateSplitTexture(r){let e=this.getTexture(fe.colorBufferTex_NAME),t=this.getTexture(r+"_split");return t=t||this.createRTTexture(r+"_split",e.width,e.height,e.format,!1)}static WriteSplitColorTexture(t){var e=this.getTexture(fe.colorBufferTex_NAME),t=this.getTexture(t+"_split"),i=w.beginCommandEncoder();i.copyTextureToTexture({texture:e.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:0}},{texture:t.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:0}},{width:t.width,height:t.height,depthOrArrayLayers:1}),w.endCommandEncoder(i)}};let Ee=Hr;s(Ee,"rtTextureMap"),s(Ee,"rtViewQuad");class Di{constructor(){s(this,"enable",!0),s(this,"postRenderer"),s(this,"rtViewQuad"),s(this,"virtualTexture"),this.rtViewQuad=new Map,this.virtualTexture=new Map}createRTTexture(e,t,i,a,n=!1,o=0){return t=Ee.createRTTexture(e,t,i,a,n,o),t.name=e,this.virtualTexture.set(e,t),Y.getInstance().attached(t,this),t}createViewQuad(e,t,i,a,n=0){return t=Ee.createViewQuad(e,"Quad_vert_wgsl",t,i,a,n),this.rtViewQuad.set(e,t),t}getOutTexture(){let e=w.lastRenderPassState.renderTargets;return 0<e.length?e[0]:Ee.getTexture(fe.colorBufferTex_NAME)}autoSetColorTexture(e,t){var i=this.getOutTexture();t.setSamplerTexture(e,i)}compute(e){}onAttach(e){}onDetach(e){}render(e,t){this.compute(e),this.rtViewQuad.forEach((i,a)=>{var n=w.lastRenderPassState.getLastRenderTexture();i.renderToViewQuad(e,i,t,n)})}destroy(e){this.postRenderer=null;for(let i=0;i<this.rtViewQuad.size;i++)this.rtViewQuad.values[i].destroy(e);this.rtViewQuad.clear(),this.rtViewQuad=null;for(let i=0;i<this.virtualTexture.size;i++){var t=this.virtualTexture.values[i];Y.getInstance().detached(t,this),t.destroy(e)}}}class Sa extends Di{constructor(){super();var t=M.presentationSize,e=(Ee.createRTTexture(fe.colorBufferTex_NAME,t[0],t[1],F.rgba16float,!1),D.register("FXAA_Shader",sl),{u_texel:new ht(new Q(1/t[0],1/t[1])),u_strength:new ht(4)}),t=this.createRTTexture("FXAAPost",t[0],t[1],F.rgba16float);this.createViewQuad("fxaa","FXAA_Shader",t,e)}onAttach(e){b.setting.render.postProcessing.fxaa.enable=!0}onDetach(e){b.setting.render.postProcessing.fxaa.enable=!1}}class yo{constructor(e){s(this,"command"),s(this,"encoder"),s(this,"rendererPassStates"),s(this,"rtFrame"),this.rtFrame=e,this.rendererPassStates=[]}clean(){this.rendererPassStates.length=0,w.cleanCache()}beginContinueRendererPassState(){if(0<this.rendererPassStates.length){var e=this.rtFrame.clone();for(const t of e.rtDescriptors)t.loadOp="load";e.depthLoadOp="load";var e=qe.createRendererPassState(e);return this.rendererPassStates.push(e),e}return e=qe.createRendererPassState(this.rtFrame),this.rendererPassStates.push(e),e}get rendererPassState(){return this.rendererPassStates[this.rendererPassStates.length-1]}beginRenderPass(){this.beginContinueRendererPassState(),this.begineNewCommand(),this.beginNewEncoder()}endRenderPass(){this.endEncoder(),this.endCommand()}begineNewCommand(){return this.command=w.beginCommandEncoder(),this.command}endCommand(){w.endCommandEncoder(this.command),this.command=null}beginNewEncoder(){return this.encoder=w.beginRenderPass(this.command,this.rendererPassState),this.encoder}endEncoder(){w.endPass(this.encoder),this.encoder=null}}class Ft extends zt{constructor(){super(),s(this,"rendererPassState"),s(this,"splitRendererPassState"),s(this,"useRenderBundle",!1),s(this,"debugViewQuads"),s(this,"debugTextures"),s(this,"renderContext"),s(this,"_rendererType"),s(this,"_rtFrame"),this.debugTextures=[],this.debugViewQuads=[]}get passType(){return this._rendererType}set passType(e){this._rendererType=e}setRenderStates(e){if(this._rtFrame=e){this.rendererPassState=qe.createRendererPassState(e);var t=e.clone();t.depthLoadOp="load";for(const i of t.rtDescriptors)i.loadOp="load";this.splitRendererPassState=qe.createRendererPassState(t)}this.renderContext=new yo(e)}setIrradiance(e,t){this.rendererPassState.irradianceBuffer=[e,t]}compute(e,t){}render(e,t,f,a=!1){w.cleanCache();var n=e.camera,o=e.scene,o=(this.rendererPassState.camera3D=n,B.instance.getRenderNodes(o)),c=this.renderBundleOp(e,o,t,f),h=a?[]:this.renderBundleTr(e,o,t,f),l=w.beginCommandEncoder(),u=w.beginRenderPass(l,this.rendererPassState),c=(0<c.length&&u.executeBundles(c),!a&&B.instance.sky&&(w.bindCamera(u,n),B.instance.sky.renderPass2(e,this._rendererType,this.rendererPassState,f,u)),this.drawRenderNodes(e,u,l,o.opaqueList,t),w.endPass(u),w.endCommandEncoder(l),w.beginCommandEncoder()),f=w.beginRenderPass(c,this.rendererPassState);0<h.length&&f.executeBundles(h),a||(w.bindCamera(f,n),this.drawRenderNodes(e,f,c,o.transparentList,t)),w.endPass(f),w.endCommandEncoder(c)}nodeUpload(e,t,i){}occlusionRenderNodeTest(e,t,i){return!i||0<i.occlusionRenderNodeTest(e)}renderOp(e,t,i,a,n){}renderTr(e,t,i,a,n){}renderBundleOp(e,t,i,a){var n=B.instance.getOpRenderGroup(e.scene);if(n){let o=[];return n.renderGroup.forEach(h=>{var l;h.bundleMap.has(this._rendererType)?o.push(h.bundleMap.get(this._rendererType)):(l=w.recordBundleEncoder(this.rendererPassState.renderBundleEncoderDescriptor),this.recordRenderBundleNode(e,l,h.renderNodes,a),l=l.finish(),h.bundleMap.set(this._rendererType,l),o.push(l))}),o}return[]}renderBundleTr(e,t,i,a){var n=B.instance.getTrRenderGroup(e.scene);if(n){let o=[];return n.renderGroup.forEach(h=>{var l;h.bundleMap.has(this._rendererType)?o.push(h.bundleMap.get(this._rendererType)):(l=w.recordBundleEncoder(this.rendererPassState.renderBundleEncoderDescriptor),this.recordRenderBundleNode(e,l,h.renderNodes,a),l=l.finish(),h.bundleMap.set(this._rendererType,l),o.push(l))}),o}return[]}recordRenderBundleNode(e,t,i,a){w.bindCamera(t,e.camera),w.bindGeometryBuffer(t,i[0].geometry);for(let o=0;o<i.length;++o){var n=i[o];n.transform.worldMatrix.index,n.transform.enable&&n.recordRenderPass2(e,this._rendererType,this.rendererPassState,a,t)}}drawRenderNodes(e,t,i,a,n,o){w.bindCamera(t,e.camera);for(let l=b.setting.render.drawOpMin;l<Math.min(a.length,b.setting.render.drawOpMax);++l){var h=a[l];n.renderCommitTesting(e.camera,h)&&h.transform.enable&&h.enable&&h.renderPass2(e,this._rendererType,this.rendererPassState,o,t)}}setDebugTexture(e){for(let i=0;i<e.length;i++){let a=e[i],n="Quad_frag_wgsl";switch(a.format){case F.rgba8sint:case F.rgba8uint:case F.rgba8unorm:case F.rgba16float:case F.rgba32float:n="Quad_frag_wgsl";break;case F.depth24plus:case F.depth32float:n="Quad_depth2d_frag_wgsl",a.textureBindingLayout.viewDimension=="cube"&&(n="Quad_depthCube_frag_wgsl")}var t=new ji("Quad_vert_wgsl",n,new nt([],[]));this.debugTextures.push(e[i]),this.debugViewQuads.push(t)}}}class bo extends Ft{constructor(){super(),this.passType=Z.COLOR}render(e,t,i,a=!1){this.renderContext.clean();var n=e.scene,o=e.camera,h=(this.rendererPassState.camera3D=o,B.instance.getRenderNodes(n)),l=this.renderBundleOp(e,h,t,i),u=a?[]:this.renderBundleTr(e,h,t,i),c=(et.start("colorPass Renderer"),et.start("ColorPass Draw Opaque"),this.renderContext.beginRenderPass(),this.renderContext.command,this.renderContext.encoder),f=(w.bindCamera(c,o),0<l.length&&(B.instance.getOpRenderGroup(n).renderGroup.forEach(_=>{for(let v=0;v<_.renderNodes.length;v++)_.renderNodes[v].transform.updateWorldMatrix()}),c.executeBundles(l)),!a&&B.instance.sky&&(w.bindCamera(c,o),B.instance.sky.renderPass2(e,this._rendererType,this.rendererPassState,i,c)),w.bindCamera(c,o),this.drawNodes(e,this.renderContext,h.opaqueList,t,i),this.renderContext.endRenderPass(),et.end("ColorPass Draw Opaque"),et.start("ColorPass Draw Transparent"),this.renderContext.beginRenderPass(),this.renderContext.command,this.renderContext.encoder),p=(0<u.length&&f.executeBundles(u),a||(w.bindCamera(f,o),this.drawNodes(e,this.renderContext,h.transparentList,t,i)),B.instance.getGraphicList());for(let _=0;_<p.length;_++){var m=p[_];m.transform.worldMatrix.index,m.nodeUpdate(e,this._rendererType,this.splitRendererPassState,i),m.renderPass2(e,this._rendererType,this.splitRendererPassState,i,f)}this.renderContext.endRenderPass(),et.end("ColorPass Draw Transparent"),et.end("colorPass Renderer")}drawNodes(e,t,i,a,n){for(let h=b.setting.render.drawOpMin;h<Math.min(i.length,b.setting.render.drawOpMax);++h){var o=i[h];a.renderCommitTesting(e.camera,o)&&o.transform.enable&&o.enable&&(o.nodeUpdate(e,this._rendererType,this.rendererPassState,n),o.renderPass(e,this.passType,this.renderContext))}}occlusionRenderNodeTest(e,t,i){return 0<i.zDepthRenderNodeTest(t)}}const Xt=class extends nt{constructor(){super([],[])}crateGBuffer(o,e,t){var i=this.attachments,a=this.rtDescriptors,h=Ee.createRTTexture(o+fe.colorBufferTex_NAME,e,t,F.rgba16float,!1),l=Ee.createRTTexture(o+fe.positionBufferTex_NAME,e,t,F.rgba16float,!1),n=Ee.createRTTexture(o+fe.normalBufferTex_NAME,e,t,F.rgba8unorm,!1),o=Ee.createRTTexture(o+fe.materialBufferTex_NAME,e,t,F.rgba8unorm,!1),h=(i.push(h),i.push(l),i.push(n),i.push(o),new Oe),l=(h.loadOp="clear",new ce(e,t,"depth24plus",!1));l.name="depthTexture",new Oe().loadOp="load",this.depthTexture=l,a.push(h),a.push(new Oe),a.push(new Oe),a.push(new Oe)}getColorMap(){return this.attachments[0]}getPositionMap(){return this.attachments[1]}getNormalMap(){return this.attachments[2]}getMaterialMap(){return this.attachments[3]}static getGBufferFrame(r){let e;var t;return Xt.gBufferMap.has(r)?e=Xt.gBufferMap.get(r):(e=new Xt,t=M.presentationSize,e.crateGBuffer(r,t[0],t[1]),Xt.gBufferMap.set(r,e)),e}clone(){var r=new Xt;return this.clone2Frame(r),r}};let mi=Xt;s(mi,"gBufferMap",new Map);class So{constructor(){s(this,"frustumCullingList"),s(this,"zVisibleList"),s(this,"_renderList"),this._renderList=new Map}occlusionRenderNodeTest(e){return b.setting.occlusionQuery.enable?this.frustumCullingList?this.frustumCullingList[e]:0:1}zDepthRenderNodeTest(e){return this.zVisibleList?this.zVisibleList[e]:0}update(e,t){let i=this._renderList.get(e);i||(i=new Map,this._renderList.set(e,i)),i.clear(),B.instance.autoSortRenderNodes(t);var a=B.instance.getRenderNodes(t);for(let h=0;h<a.opaqueList.length;h++){var n=a.opaqueList[h];let l=0;(l=n.enable&&n.transform.enable&&n.object3D.bound?n.object3D.bound.containsFrustum(n.object3D,e.frustum):l)&&i.set(n,l)}for(let h=0;h<a.transparentList.length;h++){var o=a.transparentList[h];let l=0;(l=o.enable&&o.transform.enable&&o.object3D.bound?o.object3D.bound.containsFrustum(o.object3D,e.frustum):l)&&i.set(o,l)}}renderCommitTesting(e,t){return!!this._renderList.get(e)&&0<this._renderList.get(e).get(t)}}class Xr extends or{constructor(e,t){super(),this.bufferType=Dt.ComputeGPUBuffer,this.createBuffer(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST,e,t)}}class wo{constructor(e,t){s(this,"clusterBuffer"),s(this,"lightAssignBuffer"),s(this,"assignTableBuffer"),s(this,"clustersUniformBuffer"),this.clusterBuffer=new Xr(2*e*4),this.clustersUniformBuffer=new ci(10),this.clustersUniformBuffer.visibility=GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.lightAssignBuffer=new Xr(e*t),this.lightAssignBuffer.visibility=GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.assignTableBuffer=new Xr(4*e),this.assignTableBuffer.visibility=GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE}update(e,t,i,a,n,o,h,l,u,c){this.clustersUniformBuffer.setFloat("clusterTileX",a),this.clustersUniformBuffer.setFloat("clusterTileY",n),this.clustersUniformBuffer.setFloat("clusterTileZ",o),this.clustersUniformBuffer.setFloat("numLights",h),this.clustersUniformBuffer.setFloat("maxNumLightsPerCluster",l),this.clustersUniformBuffer.setFloat("near",u),this.clustersUniformBuffer.setFloat("far",c),this.clustersUniformBuffer.setFloat("screenWidth",e),this.clustersUniformBuffer.setFloat("screenHeight",t),this.clustersUniformBuffer.setFloat("clusterPix",i),this.clustersUniformBuffer.apply()}}let To=`
  #include "GlobalUniform"

        struct ClusterBox{
            minPoint:vec4<f32>,
            maxPoint:vec4<f32>
        }

        struct ClustersUniform{
            clusterTileX:f32,
            clusterTileY:f32,
            clusterTileZ:f32,
            numLights:f32,
            maxNumLightsPerCluster:f32,
            near:f32,
            far:f32,
            screenWidth:f32,
            screenHeight:f32,
            clusterPix:f32
        }
     
        @group(0) @binding(1) var<uniform> clustersUniform : ClustersUniform;
        @group(0) @binding(2) var<storage,read_write> clusterBuffer : array<ClusterBox>;


        var<private> clusterTileX:f32 ;
        var<private> clusterTileY:f32 ;
        var<private> clusterTileZ:f32 ;
        fn convertNDCToView( v4:vec4<f32> ) -> vec4<f32> {
            var v = globalUniform.pvMatrixInv * v4 ;
            v = v / v.w ;
            return v ;
        }

        fn gridToIndex(i:vec3<u32>) -> u32{
            return i.z * u32(clusterTileX) * u32(clusterTileY) + i.y * u32(clusterTileX) + i.x ;
        }

        fn ScreenToView(screen : vec4<f32>) -> vec4<f32> {
            let texCoord = screen.xy / vec2<f32>(clustersUniform.screenWidth, clustersUniform.screenHeight);
            let clip = vec4<f32>(vec2<f32>(texCoord.x, 1.0 - texCoord.y) * 2.0 - vec2<f32>(1.0, 1.0), screen.z, screen.w);
            return convertNDCToView(clip);
          }

        fn LineIntersectionToZPlane( eye:vec3<f32> , ndcPoint :vec3<f32> , z:f32) -> vec3<f32>
        {
            var normal = vec3<f32>(0.0, 0.0, 1.0);
            var dir = ndcPoint - eye;
            var t = (z - dot(normal, eye)) / dot(normal, dir);
            var result = eye + t * dir;
            return result;
        }

        @compute @workgroup_size(16,9,1)
        fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(local_invocation_id) local_invocation_id : vec3<u32> ){
            let i = local_invocation_id.x ;
            let j = local_invocation_id.y ;
            let k = workgroup_id.x ;

            clusterTileX = clustersUniform.clusterTileX;
            clusterTileY = clustersUniform.clusterTileY;
            clusterTileZ = clustersUniform.clusterTileZ;

            let clusterGrid = vec3<u32>(i,j,k);
            let tileIndex = gridToIndex(clusterGrid);
            let eyePos = vec3<f32>(0.0, 0.0, 0.0);

            let tx = clusterTileX;
            let ty = clusterTileY;
            let tz = clusterTileZ ;
            let near = clustersUniform.near ;
            let far = clustersUniform.far ;

            let titleSize = vec2<f32>( clustersUniform.screenWidth / tx ,  clustersUniform.screenHeight / ty ) ;

            var maxPointSs = vec4<f32>(vec2<f32>(f32(i) + 1.0, f32(j) + 1.0) * titleSize, 0.0, 1.0);
	        var minPointSs = vec4<f32>(vec2<f32>(f32(i) , f32(j)) * titleSize, 0.0, 1.0);

            var maxPointVs = ScreenToView(maxPointSs).xyz;
	        var minPointVs = ScreenToView(minPointSs).xyz;
 
            var tileNear = clustersUniform.near * pow(clustersUniform.far / clustersUniform.near, f32(k) / clustersUniform.clusterTileZ);
	        var tileFar = clustersUniform.near * pow(clustersUniform.far / clustersUniform.near, (f32(k) + 1.0) / clustersUniform.clusterTileZ);

            var minPointNear = LineIntersectionToZPlane(eyePos, minPointVs, tileNear);
            var minPointFar = LineIntersectionToZPlane(eyePos, minPointVs, tileFar);
            var maxPointNear = LineIntersectionToZPlane(eyePos, maxPointVs, tileNear);
            var maxPointFar = LineIntersectionToZPlane(eyePos, maxPointVs, tileFar);

            var minPointAABB = min(min(minPointNear, minPointFar), min(maxPointNear, maxPointFar));
            var maxPointAABB = max(max(minPointNear, minPointFar), max(maxPointNear, maxPointFar));

            var clusterBox : ClusterBox ;
            clusterBox.minPoint = vec4<f32>(minPointAABB,f32(tileIndex)) ;
            clusterBox.maxPoint = vec4<f32>(maxPointAABB,f32(tileIndex)) ;
            clusterBuffer[tileIndex] = clusterBox;
        }
`,Co=`
#include "GlobalUniform"

struct ClusterBox{
    minPoint:vec4<f32>,
    maxPoint:vec4<f32>
}

struct Light {
    index:f32,
    lightType:i32,
    radius:f32,
    linear:f32,

    position:vec3<f32>,
    lightMatrixIndex:f32,

    direction:vec3<f32>,
    quadratic:f32,

    lightColor:vec3<f32>,
    intensity:f32,

    innerCutOff :f32,
    outerCutOff:f32,
    range :f32,
    castShadow:f32,

    lightTangent:vec3<f32>,
    ies:f32,
};

struct LightIndex
{
    count:f32,
    start:f32,
    empty0:f32,
    empty1:f32,
};

struct ClustersUniform{
    clusterTileX:f32,
    clusterTileY:f32,
    clusterTileZ:f32,
    numLights:f32,
    maxNumLightsPerCluster:f32,
    near:f32,
    far:f32,
    screenWidth:f32,
    screenHeight:f32,
    clusterPix:f32, 
}

struct Uniforms {
    matrix : array<mat4x4<f32>>
};



var<private> clusterTileX:f32 ;
var<private> clusterTileY:f32 ;
var<private> clusterTileZ:f32 ;

// @group(0) @binding(1) var<storage, read> models : Uniforms;
@group(0) @binding(2) var<uniform> clustersUniform : ClustersUniform;
@group(0) @binding(3) var<storage,read> clusterBuffer : array<ClusterBox>;
@group(0) @binding(4) var<storage,read> lightBuffer : array<Light>;
@group(0) @binding(5) var<storage,read_write> lightAssignBuffer : array<f32>;
@group(0) @binding(6) var<storage,read_write> assignTable : array<LightIndex>;

fn gridToIndex(i:vec3<u32>) -> u32{
    return i.z * u32(clusterTileX) * u32(clusterTileY) + i.y * u32(clusterTileX) + i.x ;
}

fn GetSqdisPointAABB( pos:vec3<f32>,  clusterIndex:u32 ) -> f32
{
    var sqDistance = 0.0;
    let cluster = clusterBuffer[clusterIndex];
    for (var i = 0u; i < 3u; i+=1u)
    {
        var v = pos[i];
        if (v < cluster.minPoint[i])
        {
            let diff = cluster.minPoint[i] - v;
            sqDistance += diff * diff;
        }

        if (v > cluster.maxPoint[i])
        {
            let diff =  v - cluster.maxPoint[i];
            sqDistance += diff * diff;
        }
    }
    return sqDistance;
}

fn TestSphereAABB( lightIndex:i32 ,  clusterIndex : u32 ) -> bool
{
    let light = lightBuffer[lightIndex];
    let lightPos = light.position.xyz;
    var radius = light.range * 2.0 ;
    let spherePos =  globalUniform.viewMat * vec4<f32>(lightPos.xyz, 1.0) ;
    let sqDistance = GetSqdisPointAABB(spherePos.xyz , clusterIndex);
    return sqDistance <= (radius*radius);
}



@compute @workgroup_size(16,9,1)
fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(local_invocation_id) local_invocation_id : vec3<u32> ){
    clusterTileX = clustersUniform.clusterTileX;
    clusterTileY = clustersUniform.clusterTileY;
    clusterTileZ = clustersUniform.clusterTileZ;
    // cluster ID 
    let i = local_invocation_id.x ;
    let j = local_invocation_id.y ;
    let k = workgroup_id.x ;

    var clusterId_3D = vec3<u32>(i,j,k);
    var clusterId_1D = gridToIndex(clusterId_3D);

    var startIndex = i32(clusterId_1D) * i32(clustersUniform.maxNumLightsPerCluster) ;
    var endIndex = startIndex;

    for(var lightID = 0 ; lightID < i32(clustersUniform.numLights) ; lightID+=1)
    {
        if(!TestSphereAABB(lightID, clusterId_1D)) {
           continue;
        };
        lightAssignBuffer[endIndex] = f32(lightID);
        endIndex += 1 ;
    }

    // workgroupBarrier();

    var idx: LightIndex;
    idx.count = f32(endIndex-startIndex);
    idx.start = f32(startIndex);
    assignTable[clusterId_1D] = idx;
}
`;class Mo extends Ft{constructor(e){super(),s(this,"clusterTileX",16),s(this,"clusterTileY",9),s(this,"clusterTileZ",16),s(this,"maxNumLights",128),s(this,"maxNumLightsPerCluster",1024),s(this,"clusterPix",1),s(this,"clusterLightingBuffer"),s(this,"_currentLightCount",0),s(this,"_clusterGenerateCompute"),s(this,"_clusterLightingCompute"),s(this,"_useCamera"),this.passType=Z.Cluster,this.initCompute(e)}initCompute(e){this._clusterGenerateCompute=new ft(To),this._clusterLightingCompute=new ft(Co);var t=M.presentationSize,n=this.clusterTileX*this.clusterTileY*this.clusterTileZ,a=e.camera,i=a.near,a=a.far,n=(this.clusterLightingBuffer=new wo(n,this.maxNumLightsPerCluster),this.clusterLightingBuffer.update(t[0],t[1],this.clusterPix,this.clusterTileX,this.clusterTileY,this.clusterTileZ,this.maxNumLights,this.maxNumLightsPerCluster,i,a),this._clusterGenerateCompute.setUniformBuffer("clustersUniform",this.clusterLightingBuffer.clustersUniformBuffer),this._clusterGenerateCompute.setStorageBuffer("clusterBuffer",this.clusterLightingBuffer.clusterBuffer),ve.getLightEntries(e.scene));this._clusterLightingCompute.setStorageBuffer("models",ve.modelMatrixBindGroup.matrixBufferDst),this._clusterLightingCompute.setUniformBuffer("clustersUniform",this.clusterLightingBuffer.clustersUniformBuffer),this._clusterLightingCompute.setStorageBuffer("clusterBuffer",this.clusterLightingBuffer.clusterBuffer),this._clusterLightingCompute.setStorageBuffer("lightBuffer",n.storageGPUBuffer),this._clusterLightingCompute.setStorageBuffer("lightAssignBuffer",this.clusterLightingBuffer.lightAssignBuffer),this._clusterLightingCompute.setStorageBuffer("assignTable",this.clusterLightingBuffer.assignTableBuffer)}render(e,t){var i=e.scene,i=B.instance.getLights(i);this._useCamera!=e.camera&&(this._useCamera=e.camera,e=ve.getCameraGroup(this._useCamera),this._clusterGenerateCompute.setUniformBuffer("globalUniform",e.uniformGPUBuffer),this._clusterLightingCompute.setUniformBuffer("globalUniform",e.uniformGPUBuffer)),this._currentLightCount!=i.length&&(this._currentLightCount=i.length,this.clusterLightingBuffer.clustersUniformBuffer.setFloat("numLights",i.length),this.clusterLightingBuffer.clustersUniformBuffer.apply(),this._clusterGenerateCompute.workerSizeX=this.clusterTileZ,this._clusterLightingCompute.workerSizeX=this.clusterTileZ),0<i.length&&(e=w.beginCommandEncoder(),w.computeCommand(e,[this._clusterGenerateCompute,this._clusterLightingCompute]),w.endCommandEncoder(e))}}class Eo extends K{constructor(e=.001,t=1e4,i=90,a=!1){super(),s(this,"up_camera"),s(this,"down_camera"),s(this,"left_camera"),s(this,"right_camera"),s(this,"front_camera"),s(this,"back_camera"),this.initCubeCamera(e,t,i,a)}set label(e){this.up_camera.name=e+"up",this.down_camera.name=e+"down",this.left_camera.name=e+"left",this.right_camera.name=e+"right",this.front_camera.name=e+"front",this.back_camera.name=e+"back"}initCubeCamera(e,t,i=90,a=!1){this.up_camera=xe.createCamera3DObject(this,"up"),this.down_camera=xe.createCamera3DObject(this,"down"),this.left_camera=xe.createCamera3DObject(this,"left"),this.right_camera=xe.createCamera3DObject(this,"right"),this.front_camera=xe.createCamera3DObject(this,"front"),this.back_camera=xe.createCamera3DObject(this,"back"),this.up_camera.isShadowCamera=a,this.down_camera.isShadowCamera=a,this.left_camera.isShadowCamera=a,this.right_camera.isShadowCamera=a,this.front_camera.isShadowCamera=a,this.back_camera.isShadowCamera=a,this.up_camera.perspective(i,1,e,t),this.up_camera.lookAt(d.ZERO,d.UP,d.DOWN),this.up_camera.object3D.scaleX=-1,this.up_camera.object3D.rotationY=180,this.down_camera.perspective(i,1,e,t),this.down_camera.lookAt(d.ZERO,d.DOWN,d.DOWN),this.down_camera.object3D.scaleX=-1,this.down_camera.object3D.rotationY=180,this.left_camera.perspective(i,1,e,t),this.left_camera.lookAt(d.ZERO,d.LEFT),this.left_camera.object3D.scaleX=-1,this.right_camera.perspective(i,1,e,t),this.right_camera.lookAt(d.ZERO,d.RIGHT),this.right_camera.object3D.scaleX=-1,this.front_camera.perspective(i,1,e,t),this.front_camera.lookAt(d.ZERO,d.FORWARD),this.front_camera.object3D.scaleX=-1,this.back_camera.perspective(i,1,e,t),this.back_camera.lookAt(d.ZERO,d.BACK),this.back_camera.object3D.scaleX=-1,this.up_camera.type=oe.shadow,this.down_camera.type=oe.shadow,this.left_camera.type=oe.shadow,this.right_camera.type=oe.shadow,this.front_camera.type=oe.shadow,this.back_camera.type=oe.shadow}}class $a extends st{constructor(e,t,i){super(e,t,i),this.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.format=F.depth32float,this.mipmapCount=1,this.init()}internalCreateBindingLayoutDesc(){this.textureBindingLayout.sampleType="depth",this.textureBindingLayout.viewDimension="cube-array",this.samplerBindingLayout.type="filtering",this.sampler_comparisonBindingLayout.type="comparison"}internalCreateTexture(){this.textureDescriptor={format:this.format,size:{width:this.width,height:this.height,depthOrArrayLayers:6*this.numberLayer},dimension:"2d",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.TEXTURE_BINDING},this.gpuTexture=M.device.createTexture(this.textureDescriptor)}internalCreateView(){this.viewDescriptor={dimension:"cube-array"},this.view=this.gpuTexture.createView(this.viewDescriptor)}internalCreateSampler(){this.gpuSampler=M.device.createSampler({minFilter:Qr.linear,magFilter:Qr.linear}),this.gpuSampler_comparison=M.device.createSampler({compare:"less",label:"sampler_comparison"})}}class Po extends Ft{constructor(){super(),s(this,"shadowPassCount"),s(this,"_forceUpdate",!1),s(this,"_shadowCameraDic"),s(this,"shadowCamera"),s(this,"cubeArrayTexture"),s(this,"colorTexture"),s(this,"shadowSize",1024),this.passType=Z.POINT_SHADOW,this._shadowCameraDic=new Map,this.cubeArrayTexture=new $a(this.shadowSize,this.shadowSize,8),this.colorTexture=new ce(this.shadowSize,this.shadowSize,F.bgra8unorm,!1),Y.getInstance().attached(this.cubeArrayTexture,this)}getShadowCamera(e,t){let i;if(this._shadowCameraDic.has(t))i=this._shadowCameraDic.get(t);else{var a=new Eo(e.camera.near,e.camera.far,90,!0),n=(a.label=t.name,[]),o=[];for(let u=0;u<6;u++){var h=new ce(this.shadowSize,this.shadowSize,this.cubeArrayTexture.format,!1),l=new nt([this.colorTexture],[new Oe]),l=(h.name="shadowDepthTexture_"+t.name+u+"_face",l.depthTexture=h,l.label="shadowRender",l.customSize=!0,qe.createRendererPassState(l));o[u]=l,n[u]=h,b.getRenderJob(e).postRenderer.setDebugTexture([h]),b.getRenderJob(e).debug()}i={cubeCamera:a,depthTexture:n,rendererPassState:o},this._shadowCameraDic.set(t,i)}return i}render(e,t){if(b.setting.shadow.enable){this.shadowPassCount=0,e.camera;var i=e.scene,a=B.instance.getRenderNodes(i),n=Ce.getPointShadowLightWhichScene(i),o=n.length;for(let f=0;f<o;f++){var h=n[f];if(h.lightData.lightType!=me.DirectionLight&&-1<h.lightData.castShadowIndex&&(h.needUpdateShadow||this._forceUpdate||he.frame<5||h.realTimeShadow)){h.needUpdateShadow=!1;var l=this.getShadowCamera(e,h),u=h.transform.worldPosition,c=(l.cubeCamera.x=u.x,l.cubeCamera.y=u.y,l.cubeCamera.z=u.z,l.cubeCamera.transform.updateWorldMatrix(!0),t.update(l.cubeCamera.right_camera,i),this.renderSceneOnce(0,l,e,l.cubeCamera.right_camera,a,t),t.update(l.cubeCamera.left_camera,i),this.renderSceneOnce(1,l,e,l.cubeCamera.left_camera,a,t),t.update(l.cubeCamera.up_camera,i),this.renderSceneOnce(2,l,e,l.cubeCamera.up_camera,a,t),t.update(l.cubeCamera.down_camera,i),this.renderSceneOnce(3,l,e,l.cubeCamera.down_camera,a,t),t.update(l.cubeCamera.front_camera,i),this.renderSceneOnce(4,l,e,l.cubeCamera.front_camera,a,t),t.update(l.cubeCamera.back_camera,i),this.renderSceneOnce(5,l,e,l.cubeCamera.back_camera,a,t),w.beginCommandEncoder());for(let p=0;p<6;p++)c.copyTextureToTexture({texture:l.depthTexture[p].getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:0}},{texture:this.cubeArrayTexture.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:6*h.shadowIndex+p}},{width:this.shadowSize,height:this.shadowSize,depthOrArrayLayers:1});w.endCommandEncoder(c)}}this._forceUpdate=!1}}renderSceneOnce(e,t,i,a,n,o){this.rendererPassState=t.rendererPassState[e],t=w.beginCommandEncoder(),e=w.beginRenderPass(t,this.rendererPassState),e.setViewport(0,0,this.shadowSize,this.shadowSize,0,1),e.setScissorRect(0,0,this.shadowSize,this.shadowSize),a.onUpdate(),a.transform.updateWorldMatrix(!0),this.drawShadowRenderNodes(i,a,e,n.opaqueList,o),this.drawShadowRenderNodes(i,a,e,n.transparentList,o),w.endPass(e),w.endCommandEncoder(t)}drawShadowRenderNodes(e,t,i,a,n){w.bindCamera(i,t);for(let p=b.setting.render.drawOpMin;p<Math.min(a.length,b.setting.render.drawOpMax);++p){var o=a[p];if(o.transform.worldMatrix.index,o.transform.enable&&n.renderCommitTesting(t,o)&&o.enable){o.nodeUpdate(e,this._rendererType,this.rendererPassState);for(let m=0;m<o.materials.length;m++){var h=o.materials[m].renderPasses.get(this._rendererType);if(h&&h.length!=0){w.bindGeometryBuffer(i,o.geometry);var l=o.object3D.transform._worldMatrix;for(let _=0;_<h.length;_++){var u=h[_].renderShader,c=(u.setUniformFloat("cameraFar",t.far),u.setUniformVector3("lightWorldPos",t.transform.worldPosition),u.materialDataUniformBuffer.apply(),w.bindPipeline(i,u),o.geometry.subGeometries);for(let v=0;v<c.length;v++){var f=c[v].lodLevels[o.lodLevel];w.drawIndexed(i,f.indexCount,1,f.indexStart,0,l.index)}}}}}}}}class es extends st{constructor(e,t,i=F.depth32float){super(e,t,4),this.visibility=GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT|GPUShaderStage.COMPUTE,this.format=i,this.mipmapCount=1,this.init()}internalCreateBindingLayoutDesc(){this.textureBindingLayout.sampleType="depth",this.textureBindingLayout.viewDimension="2d-array",this.samplerBindingLayout.type="filtering",this.sampler_comparisonBindingLayout.type="comparison"}internalCreateTexture(){this.textureDescriptor={format:this.format,size:{width:this.width,height:this.height,depthOrArrayLayers:this.numberLayer},dimension:"2d",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.TEXTURE_BINDING},this.gpuTexture=M.device.createTexture(this.textureDescriptor)}internalCreateView(){this.viewDescriptor={dimension:"2d-array"},this.view=this.gpuTexture.createView(this.viewDescriptor)}internalCreateSampler(){this.gpuSampler=M.device.createSampler({}),this.gpuSampler_comparison=M.device.createSampler({compare:"less",label:"sampler_comparison"})}}class Do extends Ft{constructor(){super(),s(this,"shadowPassCount"),s(this,"depth2DArrayTexture"),s(this,"rendererPassStates"),s(this,"_forceUpdate",!1),this.passType=Z.SHADOW,this.setShadowMap(b.setting.shadow.shadowSize),b.setting.shadow.debug&&this.debug()}debug(){}setShadowMap(e){this.rendererPassStates=[],this.depth2DArrayTexture=new es(e,e),Y.getInstance().attached(this.depth2DArrayTexture,this);for(let a=0;a<8;a++){var t=new nt([],[]),i=new ce(e,e,F.depth32float,!1),i=(i.name="shadowDepthTexture_"+a,t.depthTexture=i,t.label="shadowRender",t.customSize=!0,t.depthCleanValue=1,qe.createRendererPassState(t));this.rendererPassStates[a]=i}}render(e,t){if(b.setting.shadow.enable){var i=e.camera,a=e.scene;if(this.shadowPassCount=0,b.setting.shadow.needUpdate&&he.frame%b.setting.shadow.updateFrameRate==0){i.transform.updateWorldMatrix();var n=Ce.getDirectShadowLightWhichScene(a);for(let c=0;c<n.length;c++){var o,h,l,u=n[c];u.lightData.lightType==me.DirectionLight&&(this.rendererPassState=this.rendererPassStates[u.shadowIndex],(u.castShadow&&u.needUpdateShadow||this._forceUpdate||u.castShadow&&b.setting.shadow.autoUpdate)&&(u.needUpdateShadow=!1,o=ze(b.setting.shadow.shadowFar,i.near,i.far),h=d.HELP_4,(l=d.HELP_5).copy(i.lookTarget),h.copy(u.direction),h.normalize(),d.distance(i.transform.worldPosition,l),h.scaleBy(-o),h.add(l,h),u.shadowCamera.transform.lookAt(h,l),o=b.setting.shadow.shadowBound,h=b.setting.shadow.shadowBound,u.shadowCamera.orthoOffCenter(o/-2,o/2,h/-2,h/2,i.near,i.far),this.renderShadow(e,u.shadowCamera,t)),(l=w.beginCommandEncoder()).copyTextureToTexture({texture:this.rendererPassStates[u.shadowIndex].depthTexture.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:0}},{texture:this.depth2DArrayTexture.getGPUTexture(),mipLevel:0,origin:{x:0,y:0,z:u.shadowIndex}},{width:b.setting.shadow.shadowSize,height:b.setting.shadow.shadowSize,depthOrArrayLayers:1}),w.endCommandEncoder(l))}this._forceUpdate=!1}}}compute(){}renderShadow(e,t,h){var a=B.instance.getRenderNodes(e.scene),n=w.beginCommandEncoder(),o=w.beginRenderPass(n,this.rendererPassState),h=(t.transform.updateWorldMatrix(),h.update(t,e.scene),w.bindCamera(o,t),this.renderShadowBundleOp(e,t)),l=this.renderShadowBundleTr(e,t);0<h.length&&o.executeBundles(h),this.drawShadowRenderNodes(e,t,o,a.opaqueList),0<l.length&&o.executeBundles(l),this.drawShadowRenderNodes(e,t,o,a.transparentList),w.endPass(o),w.endCommandEncoder(n)}renderShadowBundleOp(e,t){var i=B.instance.getOpRenderGroup(e.scene);if(i){let a=[];return i.renderGroup.forEach(n=>{var o;n.bundleMap.has(this._rendererType)?a.push(n.bundleMap.get(this._rendererType)):(o=w.recordBundleEncoder(this.rendererPassState.renderBundleEncoderDescriptor),this.recordShadowRenderBundleNode(e,t,o,n.renderNodes),o=o.finish(),n.bundleMap.set(this._rendererType,o),a.push(o))}),a}return[]}renderShadowBundleTr(e,t){var i=B.instance.getTrRenderGroup(e.scene);if(i){let a=[];return i.renderGroup.forEach(n=>{var o;n.bundleMap.has(this._rendererType)?a.push(n.bundleMap.get(this._rendererType)):(o=w.recordBundleEncoder(this.rendererPassState.renderBundleEncoderDescriptor),this.recordShadowRenderBundleNode(e,t,o,n.renderNodes),o=o.finish(),n.bundleMap.set(this._rendererType,o),a.push(o))}),a}return[]}recordShadowRenderBundleNode(e,t,i,a,n){w.bindCamera(i,t),w.bindGeometryBuffer(i,a[0].geometry);for(let h=0;h<a.length;++h){var o=a[h];o.transform.worldMatrix.index,o.transform.enable&&o.recordRenderPass2(e,this._rendererType,this.rendererPassState,n,i)}}drawShadowRenderNodes(e,t,i,a,n){w.bindCamera(i,t);for(let h=b.setting.render.drawOpMin;h<Math.min(a.length,b.setting.render.drawOpMax);++h){var o=a[h];o.transform.enable&&o.enable&&o.renderPass2(e,this._rendererType,this.rendererPassState,n,i)}}}class Io extends Ft{constructor(){super(),s(this,"zBufferTexture"),s(this,"useRenderBundle",!1),s(this,"shadowPassCount"),s(this,"zCullingCompute"),this.passType=Z.DEPTH;var e=M.presentationSize,t=(this.zBufferTexture=Ee.createRTTexture(fe.zBufferTexture_NAME,Math.floor(+e[0]),Math.floor(+e[1]),F.rgba16float,!1),new Oe),t=(t.clearValue=[0,0,0,0],t.loadOp="clear",new nt([this.zBufferTexture],[new Oe],Ee.createRTTexture(fe.zPreDepthTexture_NAME,Math.floor(e[0]),Math.floor(e[1]),F.depth32float,!1),null,!0));this.setRenderStates(t)}render(e,t){}}class Ro{constructor(){s(this,"map"),s(this,"passRendererList"),this.map=new Map,this.passRendererList=[]}addRenderer(e){this.map.has(e.passType)?console.error("same renderer pass repeat!"):(this.map.set(e.passType,e),e.passType<=8&&this.addPassRenderer(e))}getRenderer(e){return this.map.get(e)}addPassRenderer(e){this.passRendererList.push(e)}getAllRenderer(){return this.map}getAllPassRenderer(){return this.passRendererList}}class Lo extends Ft{constructor(){super(),s(this,"finalQuadView"),s(this,"postList"),this._rendererType=Z.POST,this.postList=[],this.initRenderer()}initRenderer(){D.register("FullQuad_vert_wgsl",_n),this.finalQuadView=new ji("Quad_vert_wgsl","Quad_frag_wgsl",new nt([],[]),null,null,!1)}attachPost(e,t){(t.postRenderer=this).postList.indexOf(t)==-1&&(this.postList.push(t),t.onAttach(e))}detachPost(e,t){var i=this.postList.indexOf(t);return 0<=i&&(this.postList.splice(i,1),t.onDetach(e),t.postRenderer=null),0<=i}render(e){var t=w.beginCommandEncoder();for(let n=0;n<this.postList.length;n++){var i=this.postList[n];i.enable&&i.render(e,t)}var a=w.lastRenderPassState.getLastRenderTexture();this.finalQuadView.renderToViewQuad(e,this.finalQuadView,t,a),this.debugViewQuads.length&&0<=(a=b.setting.render.debugQuad)&&this.debugViewQuads[a].renderToViewQuad(e,this.debugViewQuads[a],t,this.debugTextures[a]),w.endCommandEncoder(t)}}class Oo{constructor(e){s(this,"rendererMap"),s(this,"shadowMapPassRenderer"),s(this,"pointLightShadowRenderer"),s(this,"ddgiProbeRenderer"),s(this,"postRenderer"),s(this,"clusterLightingRender"),s(this,"occlusionSystem"),s(this,"depthPassRenderer"),s(this,"colorPassRenderer"),s(this,"pauseRender",!1),s(this,"pickFire"),s(this,"_view"),this._view=e,this.rendererMap=new Ro,this.occlusionSystem=new So,this.clusterLightingRender=this.addRenderer(Mo,e),b.setting.render.zPrePass&&(this.depthPassRenderer=this.addRenderer(Io)),this.shadowMapPassRenderer=new Do,this.pointLightShadowRenderer=new Po}addRenderer(e,t){let i;return i=t?new e(t):new e,this.rendererMap.addRenderer(i),i}get view(){return this._view}set view(e){this._view=e}start(){}stop(){}pause(){this.pauseRender=!0}resume(){this.pauseRender=!1}enablePost(e){this.postRenderer=this.addRenderer(Lo),this.postRenderer.setRenderStates(e)}addPost(e){return this.postRenderer||this.enablePost(mi.getGBufferFrame("ColorPassGBuffer")),e instanceof Di&&this.postRenderer.attachPost(this.view,e),e}removePost(e){if(e instanceof Di)this.postRenderer.detachPost(this.view,e);else for(let t=0;t<e.length;t++)this.postRenderer.detachPost(this.view,e[t])}renderFrame(){var e=this._view,t=(this.view.scene.waitUpdate(),ve.getLightEntries(e.scene).update(e),this.occlusionSystem.update(e.camera,e.scene),this.clusterLightingRender.render(e,this.occlusionSystem),this.shadowMapPassRenderer&&(Ce.update(e.scene),this.shadowMapPassRenderer.render(e,this.occlusionSystem)),this.pointLightShadowRenderer&&this.pointLightShadowRenderer.render(e,this.occlusionSystem),this.depthPassRenderer&&(this.depthPassRenderer.compute(e,this.occlusionSystem),this.depthPassRenderer.render(e,this.occlusionSystem)),b.setting.gi.enable&&this.ddgiProbeRenderer&&(this.ddgiProbeRenderer.compute(e,this.occlusionSystem),this.ddgiProbeRenderer.render(e,this.occlusionSystem)),this.rendererMap.getAllPassRenderer());for(let a=0;a<t.length;a++){var i=t[a];i.compute(e,this.occlusionSystem),i.render(e,this.occlusionSystem,this.clusterLightingRender.clusterLightingBuffer)}this.postRenderer&&0<this.postRenderer.postList.length&&this.postRenderer.render(e)}debug(){}}class Ao extends K{constructor(e=.001,t=1e4,i=90,a=!1){super(),s(this,"up_camera"),s(this,"down_camera"),s(this,"left_camera"),s(this,"right_camera"),s(this,"front_camera"),s(this,"back_camera"),this.initCubeCamera(e,t,i,a)}initCubeCamera(e,t,i=90,a=!1){this.up_camera=xe.createCamera3DObject(this,"up"),this.down_camera=xe.createCamera3DObject(this,"down"),this.left_camera=xe.createCamera3DObject(this,"left"),this.right_camera=xe.createCamera3DObject(this,"right"),this.front_camera=xe.createCamera3DObject(this,"front"),this.back_camera=xe.createCamera3DObject(this,"back"),this.up_camera.isShadowCamera=a,this.down_camera.isShadowCamera=a,this.left_camera.isShadowCamera=a,this.right_camera.isShadowCamera=a,this.front_camera.isShadowCamera=a,this.back_camera.isShadowCamera=a,this.up_camera.perspective(i,1,e,t),this.up_camera.lookAt(d.ZERO,d.UP,d.DOWN),this.down_camera.perspective(i,1,e,t),this.down_camera.lookAt(d.ZERO,d.DOWN,d.DOWN),this.left_camera.perspective(i,1,e,t),this.left_camera.lookAt(d.ZERO,d.LEFT),this.right_camera.perspective(i,1,e,t),this.right_camera.lookAt(d.ZERO,d.RIGHT),this.front_camera.perspective(i,1,e,t),this.front_camera.lookAt(d.ZERO,d.FORWARD),this.back_camera.perspective(i,1,e,t),this.back_camera.lookAt(d.ZERO,d.BACK),this.up_camera.type=oe.shadow,this.down_camera.type=oe.shadow,this.left_camera.type=oe.shadow,this.right_camera.type=oe.shadow,this.front_camera.type=oe.shadow,this.back_camera.type=oe.shadow}}class Uo extends nt{constructor(e,t){super([],[]),this.crateGBuffer(e,t)}crateGBuffer(f,t){var i=this.attachments,a=this.rtDescriptors,n=new ce(f,t,F.rgba16float,!1),o=(n.name="positionMap",new Oe),h=(o.loadOp="load",new ce(f,t,F.rgba16float,!1)),l=(h.name="normalMap",new Oe),u=(l.loadOp="load",new ce(f,t,F.rgba16float,!1)),c=(u.name="colorMap",new Oe),f=(c.loadOp="load",new ce(f,t,F.depth24plus,!1));f.name="depthTexture",new Oe().loadOp="load",i.push(n),i.push(h),i.push(u),a.push(o),a.push(l),a.push(c),this.depthTexture=f}}let Bo=`
#include "GenerayRandomDir"
#include "MathShader"
#include "IrradianceVolumeData_frag"

struct ProbeData{
  offsetX:f32,
  offsetY:f32,
  offsetZ:f32,
  frame:f32,
}

 struct Uniforms {
     matrix : array<mat4x4<f32>>
 };

struct RayProbeBuffer{
  WPosition: vec3<f32>,
  WNormal:vec3<f32>,
  WRadiance:vec4<f32>,
}

struct CacheHitData{
  color:vec4<f32>,
  depth:vec4<f32>,
}

//  struct RayInfo{
//   rays:array<vec4<f32>,4096>
//  }

@group(0) @binding(0) var<storage, read> probes : array<ProbeData>;
@group(0) @binding(1) var<storage, read_write> irradianceBuffer : array<vec4<f32>>;
@group(0) @binding(2) var<storage, read_write> depthBuffer : array<vec4<f32>>;
@group(0) @binding(3) var<storage, read> uniformData : IrradianceVolumeData ;
@group(0) @binding(4) var probeIrradianceMap : texture_storage_2d<rgba16float, write>;
@group(0) @binding(5) var probeDepthMap : texture_storage_2d<rgba16float, write>;
@group(0) @binding(6) var<storage, read_write> depthRaysBuffer : array<vec4<f32>>;

@group(1) @binding(0) var positionMap : texture_2d<f32>;
@group(1) @binding(1) var normalMap : texture_2d<f32>;
@group(1) @binding(2) var colorMap : texture_2d<f32>;

@group(2) @binding(0)
var<storage, read> models : Uniforms;

var<private> probeID: u32 ;
var<private> workgroup_idx: u32 ;
var<private> workgroup_idy: u32 ;
var<private> hysteresis: f32 = 0.98 ;
var<private> epsilon: f32 = 1e-6 ;
var<private> probeLocation:vec3<f32> = vec3<f32>(0.0);
var<private> energyConservation: f32 = 0.85 ;
var<private> resultIrradiance: vec4<f32> ;
var<private> resultDepth: vec4<f32> ;
var<private> RAYS_PER_PROBE: f32 = 144.0 ;
var<private> OCT_RT_SIZE: u32;
var<private> PROBE_OCT_RT_SIZE: u32;
var<private> OCT_SIDE_SIZE_u32: u32;
var<private> OCT_SIDE_SIZE_f32: f32;
var<private> OCT_RT_SIZE_f32: f32;
var<private> PROBE_SOURCESIZE: f32;
var<private> PROBEMAP_SOURCESIZE: f32;
var<private> quaternion:vec4<f32> = vec4<f32>(0.0, -0.7071067811865475, 0.7071067811865475, 0.0);
var<private> randomMatrix:mat4x4<f32>;

@compute @workgroup_size( 8 , 8 , 1 )
fn CsMain(@builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
{
   RAYS_PER_PROBE = f32(i32(uniformData.rayNumber));
   OCT_RT_SIZE = u32(uniformData.OctRTMaxSize);
   OCT_RT_SIZE_f32 = f32(uniformData.OctRTMaxSize);
   OCT_SIDE_SIZE_u32 = u32(uniformData.OctRTSideSize);
   OCT_SIDE_SIZE_f32 = f32(uniformData.OctRTSideSize);
   PROBE_SOURCESIZE = f32(uniformData.ProbeSize);
   PROBEMAP_SOURCESIZE = f32(uniformData.ProbeSourceTextureSize);
   hysteresis = uniformData.hysteresis;
    // probe index
    probeID = globalInvocation_id.z ;
    // pixel coord
    workgroup_idx = globalInvocation_id.x ;
    workgroup_idy = globalInvocation_id.y;

    probeLocation = calcProbePosition(probeID);

    resultIrradiance = vec4<f32>(0.0);
    resultDepth = vec4<f32>(0.0,0.0,0.0,0.0);

    var tdr = normalize(getCurrentDir());
    let orientationIndex = u32(uniformData.orientationIndex);
    randomMatrix = models.matrix[orientationIndex];

    var distancePprobeUV = getSampleProbeUV(tdr.xyz);
    var rayUv:vec2<i32> = vec2<i32>(distancePprobeUV.xy * f32(PROBEMAP_SOURCESIZE - 1.0));
    let rayHitPosition = textureLoad(positionMap, rayUv, 0).xyz ;
    
    for(var i:f32 = 0.0; i < RAYS_PER_PROBE ; i = i + 1.0 ){
      radianceProbeOnce(i, tdr);
    }

    if (resultIrradiance.w > epsilon) {
      var color = vec3<f32>(resultIrradiance.xyz/(2.0*resultIrradiance.w)) ;
      color = pow(color.rgb, vec3<f32>(1.0 / uniformData.ddgiGamma));
      resultIrradiance = vec4<f32>(color,1.0-hysteresis);
    }

    // if nonzero
    if (resultDepth.w > epsilon) {
      resultDepth = vec4<f32>(resultDepth.xyz/(2.0*resultDepth.w),1.0-hysteresis) ;
    }

   let pixelCoord = getWriteOctUVByID();

   var lerpDataResult:CacheHitData;

   lerpDataResult.color = resultIrradiance;

   lerpDataResult.depth = resultDepth;

   lerpDataResult = lerpHitData(lerpDataResult, pixelCoord);

   writeRayHitData(pixelCoord, lerpDataResult);

   storePixelAtCoord(probeIrradianceMap, pixelCoord , vec4<f32>(lerpDataResult.color.xyz, 1.0), true);

   storePixelAtCoord(probeDepthMap, pixelCoord , vec4<f32>(resultDepth.xy, 0.0, 1.0), false);
}

fn lerpHitData(data:CacheHitData, coord:vec2<i32>) -> CacheHitData{
   let frameIndex = probes[probeID].frame;
   var newData:CacheHitData = data;

   //if(frameIndex > 1.0){
      var oldData = readRayHitData(coord);
      newData.color = mix(oldData.color, newData.color, uniformData.lerpHysteresis);
      newData.depth = mix(oldData.depth, newData.depth, uniformData.lerpHysteresis);
   //}
   return newData;
}

fn square(v:vec3<f32>) -> vec3<f32>{
   var v3 = v;
   v3.x = v3.x * v3.x;
   v3.y = v3.y * v3.y;
   v3.z = v3.z * v3.z;
   return v3;
}

 fn testSample() ->vec4<f32>{
   var ux = f32(workgroup_idx) / OCT_SIDE_SIZE_f32;
   var uy = f32(workgroup_idy) / OCT_SIDE_SIZE_f32;
   var uv = vec2<f32>(ux,uy) * 2.0 - 1.0 ;
   var dir = octDecode(uv);
   var probeUV = getSampleProbeUV(dir.xyz);
   var rayProbeBuffer = getCurrentRayHitBuffer(probeUV);
   return rayProbeBuffer.WRadiance;
 }

 fn gridCoordToProbeIndex(grid:vec3<i32>) -> i32
 {
     return grid.x + grid.z * i32(uniformData.gridXCount) + grid.y * i32(uniformData.gridXCount * uniformData.gridZCount);
 }

fn storePixelAtCoord(texture:texture_storage_2d<rgba16float, write>, coord:vec2<i32>, color:vec4<f32>, isColor:bool){
   let sideCnt = i32(OCT_SIDE_SIZE_u32);
   let sideBorderCnt = sideCnt + 2;
   let indexXY = coord / sideCnt;
   let modeXY = coord % sideCnt;

   var newCoord = indexXY * sideBorderCnt + modeXY;
   textureStore(texture, newCoord + 1, color);

   var borderCoord = vec2<i32>(-1);
   //左右
   if(modeXY.x % (sideCnt - 1) == 0){
     borderCoord = modeXY;
     borderCoord.y = sideCnt - borderCoord.y;
     if(modeXY.x == sideCnt - 1){
       borderCoord.x = sideBorderCnt - 1;
     }
     borderCoord = indexXY * sideBorderCnt + borderCoord;
     textureStore(texture, borderCoord, color);
   }
   //上下
   if(modeXY.y % (sideCnt - 1) == 0){
     borderCoord = modeXY;
     borderCoord.x = sideCnt - borderCoord.x;
     if(modeXY.y == sideCnt - 1){
         borderCoord.y = sideBorderCnt - 1;
     }
     borderCoord = indexXY * sideBorderCnt + borderCoord;
     textureStore(texture, borderCoord, color);
   }
   //补角
   if(modeXY.x % (sideCnt - 1) == 0 && modeXY.y % (sideCnt - 1) == 0){
      var cornerCoord = modeXY;
      if(modeXY.x == 0){
         cornerCoord.x = sideBorderCnt - 1;
      }else{
         cornerCoord.x = 0;
      }
       if(modeXY.y == 0){
         cornerCoord.y = sideBorderCnt - 1;
      }else{
         cornerCoord.y = 0;
      }
      cornerCoord = indexXY * sideBorderCnt + cornerCoord;
      textureStore(texture, cornerCoord, color);
   }
}

fn calcProbePosition(id:u32) -> vec3<f32>{
   var probeLocation = vec3<f32>(0.0);
   var blockCount = u32(uniformData.gridXCount * uniformData.gridZCount) ;
   var grid = vec3<u32>(0u);
   grid.x = (id % blockCount) % u32(uniformData.gridXCount);
   grid.y = id / blockCount;
   grid.z = (id % blockCount) / u32(uniformData.gridXCount);
   probeLocation.x = f32(grid.x) * uniformData.ProbeSpace + uniformData.startX;
   probeLocation.y = f32(grid.y) * uniformData.ProbeSpace + uniformData.startY;
   probeLocation.z = f32(grid.z) * uniformData.ProbeSpace + uniformData.startZ;
   return probeLocation;
}

fn getWriteOctUVByID() -> vec2<i32>
{
   var blockCount = u32(uniformData.gridXCount * uniformData.gridZCount) ;
   var offsetX = (probeID % blockCount) % u32(uniformData.gridXCount) ;
   var offsetY = u32(uniformData.gridZCount - 1.0) - (probeID % blockCount) / u32(uniformData.gridXCount) ;
   var offsetZ = probeID / blockCount ;
   var pixelCoord = vec2<i32>(i32(workgroup_idx), i32(workgroup_idy));
   pixelCoord.x = pixelCoord.x + i32(offsetX * OCT_SIDE_SIZE_u32);
   pixelCoord.y = pixelCoord.y + i32(offsetY * OCT_SIDE_SIZE_u32 + offsetZ * u32(uniformData.gridZCount) * OCT_SIDE_SIZE_u32);

   pixelCoord = offsetByCol(pixelCoord, OCT_SIDE_SIZE_f32, OCT_RT_SIZE, vec3<f32>(uniformData.gridXCount, uniformData.gridYCount, uniformData.gridZCount));
   return pixelCoord;
}

fn offsetByCol(pixelCoord0:vec2<i32>, octSideSize:f32, mapHeight:u32, counts:vec3<f32>) -> vec2<i32>
{
 var pixelCoord = pixelCoord0;
 let blockSize:vec2<i32> = vec2<i32>(i32(octSideSize * counts.x),  i32(octSideSize * counts.z));
 let blockSizeYBorder:i32 = i32((octSideSize + 2.0) * counts.z);
 let blockMaxRowBorder:i32 = i32(mapHeight) / blockSizeYBorder;
 let pixelCountYMax:i32 = blockMaxRowBorder * i32(octSideSize * counts.z);
 let col:i32 = pixelCoord.y / pixelCountYMax;

 pixelCoord.x = col * i32(octSideSize * counts.x) + pixelCoord.x;
 pixelCoord.y = pixelCoord.y % pixelCountYMax;

 return pixelCoord;
}

fn radianceProbeOnce(rayID:f32, tdr:vec3<f32>){
   var texelDirection = sphericalFibonacci(rayID, RAYS_PER_PROBE ) ;
   var rayDirection = normalize( vec3<f32>((randomMatrix * vec4<f32>(texelDirection, 1.0)).xyz));
   var probeUV = getSampleProbeUV(rayDirection.xyz);
   var rayWriteUV = getWriteRayInfoUV();

   var rayProbeBuffer = getCurrentRayHitBuffer(probeUV);
   var rayHitLocation = rayProbeBuffer.WPosition + normalize(rayProbeBuffer.WNormal) * 0.01;

   var rayProbeDistance = length(probeLocation - rayHitLocation) ;
   // rayProbeDistance = min(uniformData.ProbeSpace * 4.0, rayProbeDistance) ;

   // if (dot(rayProbeBuffer.WNormal, rayProbeBuffer.WNormal) < epsilon) {
   //   rayProbeDistance = epsilon ;
   // }

   let rid = i32(probeID) * i32(RAYS_PER_PROBE) + i32(rayID) ;
   depthRaysBuffer[rid] = vec4<f32>(rayDirection.xyz,rayProbeDistance) ;

   // Detect misses and force depth
   var i_weight = max(0.0, dot(tdr,rayDirection) );
   var d_weight = pow(i_weight, uniformData.depthSharpness);
   
   if (i_weight >= epsilon) {
     //  var weightColor = pow(weight, (2.0 - uniformData.probeRoughness) * 2.0);
      resultIrradiance += vec4(rayProbeBuffer.WRadiance.rgb, i_weight );
     
   }
   if(d_weight>= epsilon){
       resultDepth += vec4(rayProbeDistance * d_weight, rayProbeDistance * rayProbeDistance * d_weight, 0.0 , i_weight);
   }
}

fn getCurrentRayHitBuffer(probeUV:vec2<f32>) -> RayProbeBuffer {
  var rayProbeBuffer : RayProbeBuffer ;
  var uv:vec2<i32> = vec2<i32>(probeUV.xy * f32(PROBEMAP_SOURCESIZE - 1.0));
  rayProbeBuffer.WPosition = textureLoad(positionMap, uv, 0).xyz ;
  rayProbeBuffer.WNormal = normalize(textureLoad(normalMap, uv, 0).xyz * 2.0 - 1.0);
  rayProbeBuffer.WRadiance = textureLoad(colorMap, uv, 0).xyzw * energyConservation;
  return rayProbeBuffer ;
}

fn getSampleProbeUV(dir0:vec3<f32>) -> vec2<f32> {
   var dir = applyQuaternion(dir0, quaternion);
   let faceId = dir_to_faceId(dir);
   var targetUV:vec2<f32> = convert_xyz_to_cube_uv(dir.x, dir.y, dir.z);
   targetUV.x = 1.0 - targetUV.x;
   let threshould = 0.5 / PROBE_SOURCESIZE;
   targetUV = clamp(targetUV, vec2<f32>(threshould), vec2<f32>(1.0 - threshould));

   targetUV.x = f32(faceId) + targetUV.x;

   let aspect:f32 = PROBE_SOURCESIZE / PROBEMAP_SOURCESIZE;
   targetUV = targetUV * aspect ;

   var fullCol = u32(PROBEMAP_SOURCESIZE) / u32(PROBE_SOURCESIZE);
   var offsetSampleUv = vec2<f32>( f32(probeID / fullCol) * 6.0 , f32(probeID % fullCol)) * aspect;
   return targetUV + offsetSampleUv;
}

fn getWriteRayInfoUV() -> vec2<i32> {
  var writeUV = vec2<i32>(i32(workgroup_idy),i32(probeID)) ;
  return writeUV ;
}

fn writeRayHitData( uv:vec2<i32> , data:CacheHitData){
  let index = uv.y * i32(OCT_RT_SIZE) + uv.x ;
  irradianceBuffer[index] = data.color ;
  depthBuffer[index] = data.depth ;
}

fn readRayHitData( uv:vec2<i32> ) -> CacheHitData{
  var data:CacheHitData;
  let index = uv.y * i32(OCT_RT_SIZE) + uv.x ;
  data.color = irradianceBuffer[index] ;
  data.depth = depthBuffer[index] ;
  return data;
}

fn getCurrentDir() -> vec3<f32> {
  var ux = f32(workgroup_idx) / OCT_SIDE_SIZE_f32;
  var uy = f32(workgroup_idy) / OCT_SIDE_SIZE_f32;
  var uv = vec2<f32>(ux,uy) * 2.0 - 1.0 ;
  var dir = octDecode(uv) ;
  return normalize(dir) ;
}


`;class ko{constructor(e){s(this,"irradianceBuffer"),s(this,"depthBuffer"),s(this,"probeIrradianceMap"),s(this,"probeDepthMap"),s(this,"volume"),s(this,"computeShader"),s(this,"depthRaysBuffer"),this.volume=e,this.initPipeline()}initPipeline(){this.computeShader=new ft(Bo);var e=b.setting.gi,e=e.octRTMaxSize*e.octRTMaxSize;this.irradianceBuffer=new De(4*e,GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST),this.computeShader.setStorageBuffer("irradianceBuffer",this.irradianceBuffer),this.depthBuffer=new De(4*e,GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST),this.computeShader.setStorageBuffer("depthBuffer",this.depthBuffer),this.depthRaysBuffer=new De(131072,GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC),this.computeShader.setStorageBuffer("depthRaysBuffer",this.depthRaysBuffer),this.computeShader.setStorageBuffer("probes",this.volume.probesBuffer),this.computeShader.setStorageBuffer("uniformData",this.volume.irradianceVolumeBuffer),this.computeShader.setStorageBuffer("models",ve.modelMatrixBindGroup.matrixBufferDst)}setTextures(e,t,i){this.probeIrradianceMap=t,this.probeDepthMap=i,t=e[0],i=e[1],e=e[2],this.computeShader.setStorageTexture("probeIrradianceMap",this.probeIrradianceMap),this.computeShader.setStorageTexture("probeDepthMap",this.probeDepthMap),this.computeShader.setSamplerTexture("positionMap",t),this.computeShader.setSamplerTexture("normalMap",i),this.computeShader.setSamplerTexture("colorMap",e)}readBuffer(){return this.depthRaysBuffer.readBuffer()}computer(n,t){var i=this.volume.setting,a=w.beginCommandEncoder(),n=B.instance.getProbes(n.scene);this.computeShader.workerSizeX=i.octRTSideSize/8,this.computeShader.workerSizeY=i.octRTSideSize/8,this.computeShader.workerSizeZ=n.length,w.computeCommand(a,[this.computeShader])}}let No=`
  #include "MathShader"
  #include "IrradianceVolumeData_frag"

  struct IrradianceField {
      probeStartPosition: vec4<f32>,
      probeCounts:vec4<f32>,
      probeStep:f32,
      irradianceTextureWidth:f32,
      irradianceTextureHeight:f32,
      irradianceProbeSideLength:f32,
  };

  @group(0) @binding(0) var outputBuffer : texture_storage_2d<rgba16float, write>;
  @group(0) @binding(1) var<storage,read> uniformData : IrradianceVolumeData ;

  @group(1) @binding(0) var normalMapSampler : sampler;
  @group(1) @binding(1) var normalMap : texture_2d<f32>;

  @group(1) @binding(2) var colorMapSampler : sampler;
  @group(1) @binding(3) var colorMap : texture_2d<f32>;

  @group(1) @binding(4) var litMapSampler : sampler;
  @group(1) @binding(5) var litMap : texture_2d<f32>;

  @group(1) @binding(6) var irradianceMapSampler : sampler;
  @group(1) @binding(7) var irradianceMap : texture_2d<f32>;

  var<private> wsn:vec3<f32>;
  var<private> ulitColor:vec4<f32>;
  var<private> litColor:vec4<f32>;
  var<private> irradianceFieldSurface : IrradianceField ;
  var<private> probeID:u32;

  var<private> quaternion:vec4<f32> = vec4<f32>(0.0, -0.7071067811865475, 0.7071067811865475, 0.0);

  fn getIrradianceFieldSurface() -> IrradianceField{
    let data = uniformData;
    irradianceFieldSurface.probeStartPosition = vec4<f32>(data.startX, data.startY, data.startZ, 0.0);
    irradianceFieldSurface.probeCounts = vec4<f32>(data.gridXCount, data.gridYCount, data.gridZCount, 0.0);
    irradianceFieldSurface.probeStep = data.ProbeSpace;
    irradianceFieldSurface.irradianceTextureWidth = data.OctRTMaxSize;
    irradianceFieldSurface.irradianceTextureHeight = data.OctRTMaxSize;
    irradianceFieldSurface.irradianceProbeSideLength = data.OctRTSideSize;
    return irradianceFieldSurface;
  }

  fn rotateDir(n:vec3<f32>) -> vec3<f32>{
     return normalize(applyQuaternion(-n, quaternion));
  }

  fn sampleLitColor(uv:vec2<i32>) -> vec4<f32>
  {
      var oc1:vec4<f32> = textureSampleLevel(litMap, litMapSampler, vec2<f32>(0.0), 0.0);
      var oc:vec4<f32> = textureLoad(litMap, uv, 0);
      return oc;
  }

  fn sampleNormal(uv:vec2<i32>) -> vec4<f32>
  {
      var oc1:vec4<f32> = textureSampleLevel(normalMap, normalMapSampler, vec2<f32>(0.0), 0.0);
      var oc:vec4<f32> = textureLoad(normalMap, uv, 0);
      return oc;
  }

  fn sampleColor(uv:vec2<i32>) -> vec4<f32>
  {
      var oc1:vec4<f32> = textureSampleLevel(colorMap, colorMapSampler, vec2<f32>(0.0), 0.0);
      var oc:vec4<f32> = textureLoad(colorMap, uv, 0);
      return oc;
  }

  fn sampleProbe(fragCoord:vec2<u32>){
    var uv = vec2<i32>(i32(fragCoord.x), i32(fragCoord.y)) ;

    litColor = sampleLitColor(uv);

    var normalMap = sampleNormal(uv);
    wsn = normalMap.xyz * 2.0 - 1.0;

    ulitColor = sampleColor(uv);
  }

  @compute @workgroup_size( 8 , 8 , 1 )
  fn CsMain(@builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
  {
    getIrradianceFieldSurface();
    var fragCoord = vec2<u32>( globalInvocation_id.x, globalInvocation_id.y);
    probeID = globalInvocation_id.z;
    fragCoord = fragCoord + getCoordOffset(probeID);

    sampleProbe(fragCoord);

    let irradiance = getIrradianceColor();
    let result = blendIrradianceColor(irradiance);
    textureStore(outputBuffer, vec2<i32>(fragCoord), result);
  }

  fn blendIrradianceColor(irradiance:vec4<f32>) -> vec4<f32>{
     var bounceColor = irradiance * ulitColor;
     let bounceIntensity = getBounceIntensity(uniformData.bounceIntensity);
     let conservation1 = 1.0 / sqrt((1.0 + bounceIntensity * 0.55));
     let conservation2 = 1.0 / sqrt((1.0 + bounceIntensity));
     var result = litColor * conservation2 + bounceColor * sqrt(bounceIntensity) * conservation1;
     return vec4<f32>(result.xyz, litColor.w);
  }

  fn getBounceIntensity(intensity:f32) -> f32 {
    var value = clamp(intensity, 0.0, 1.0) * 10.0;
    return value;
  }

  fn getCoordOffset(id:u32) -> vec2<u32>{
      var fullCol = u32(uniformData.ProbeSourceTextureSize / uniformData.ProbeSize);
      var offsetSampleUv = vec2<u32>( (id / fullCol) * 6u , id % fullCol) * u32(uniformData.ProbeSize);
      return offsetSampleUv;
  }

  fn getIrradianceColor() -> vec4<f32>{
     var probeIrradiance: vec4<f32> = vec4<f32>(0.0);
     if(length(wsn) > 0.01){
       probeIrradiance = getIrrdiaceIndex(i32(probeID), wsn);
     }
     return probeIrradiance;
  }

  fn getIrrdiaceIndex(index:i32, wsn:vec3<f32>) -> vec4<f32>{
    var wsN = rotateDir(wsn.xyz);
    var texCoord:vec2<f32> = textureCoordFromDirection(wsN,
      index,
      irradianceFieldSurface.irradianceTextureWidth,
      irradianceFieldSurface.irradianceTextureHeight,
      irradianceFieldSurface.irradianceProbeSideLength);

    var probeIrradiance: vec3<f32> = textureSampleLevel(irradianceMap, irradianceMapSampler, texCoord, 0.0).xyz;
    return vec4<f32>(probeIrradiance, 1.0);
  }

  fn textureCoordFromDirection(dir:vec3<f32>, probeIndex:i32, width:f32, height:f32, sideLength:f32) -> vec2<f32>
  {
      var uv = getWriteOctUVByID(dir, u32(probeIndex), sideLength) ;
      uv.x = uv.x / irradianceFieldSurface.irradianceTextureWidth;
      uv.y = uv.y / irradianceFieldSurface.irradianceTextureHeight;
      return uv ;
  }

  fn getWriteOctUVByID(dir:vec3<f32> , probeID:u32, size: f32) -> vec2<f32>
  {
      var blockCount = u32(irradianceFieldSurface.probeCounts.x * irradianceFieldSurface.probeCounts.z) ;
      var offsetX = (probeID % blockCount) % u32(irradianceFieldSurface.probeCounts.x) ;
      var offsetY = u32(irradianceFieldSurface.probeCounts.z - 1.0) - (probeID % blockCount) / u32(irradianceFieldSurface.probeCounts.x) ;
      var offsetZ = probeID / blockCount ;

      var pixelCoord = (( octEncode(dir) + 1.0 ) * 0.5) * vec2<f32>(size,size) ;

      var blockOffset = vec2<f32>(0.0);
      blockOffset.x = f32(offsetX) * size;
      blockOffset.y = f32(offsetY) * size + f32(offsetZ) * f32(irradianceFieldSurface.probeCounts.z) * size;

      let mapHeight = u32(irradianceFieldSurface.irradianceTextureHeight);
      var probeCounts:vec3<f32> = vec3<f32>(irradianceFieldSurface.probeCounts.xyz);

      var gridOffsetFrom = vec2<i32>(blockOffset) + 1;
      var gridOffsetTo = offsetByCol(gridOffsetFrom, size, mapHeight, probeCounts);

      pixelCoord = pixelCoord + vec2<f32>(gridOffsetTo - 1) + vec2<f32>(vec2<i32>(vec2<f32>(gridOffsetTo) / size) * 2);

      return pixelCoord + 1.0 ;
  }

  fn offsetByCol(pixelCoord0:vec2<i32>, octSideSize:f32, mapHeight:u32, counts:vec3<f32>) -> vec2<i32>
  {
    var pixelCoord = pixelCoord0;
    let blockSize:vec2<i32> = vec2<i32>(i32(octSideSize * counts.x),  i32(octSideSize * counts.z));
    let blockSizeYBorder:i32 = i32((octSideSize + 2.0) * counts.z);
    let blockMaxRowBorder:i32 = i32(mapHeight) / blockSizeYBorder;
    let pixelCountYMax:i32 = blockMaxRowBorder * i32(octSideSize * counts.z);
    let col:i32 = pixelCoord.y / pixelCountYMax;

    pixelCoord.x = col * i32(octSideSize * counts.x) + pixelCoord.x;
    pixelCoord.y = pixelCoord.y % pixelCountYMax;

    return pixelCoord;
  }
`;class zo{constructor(e){s(this,"blendTexture"),s(this,"volume"),s(this,"computerShader"),this.volume=e,this.initPipeline()}initPipeline(){var e=b.setting.gi;this.blendTexture=new ce(e.probeSourceTextureSize,e.probeSourceTextureSize,F.rgba16float,!1,GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.STORAGE_BINDING),this.computerShader=new ft(No),this.computerShader.setStorageTexture("outputBuffer",this.blendTexture),this.computerShader.setStorageBuffer("uniformData",this.volume.irradianceVolumeBuffer)}setInputs(n){var t=n[0],i=n[1],a=n[2],n=n[3];this.computerShader.setSamplerTexture("normalMap",t),this.computerShader.setSamplerTexture("colorMap",i),this.computerShader.setSamplerTexture("litMap",a),this.computerShader.setSamplerTexture("irradianceMap",n)}computer(e,t){var i=w.beginCommandEncoder(),n=this.volume.setting,a=n.probeXCount*n.probeYCount*n.probeZCount,n=n.probeSize;this.computerShader.workerSizeX=6*n/8,this.computerShader.workerSizeY=n/8,this.computerShader.workerSizeZ=a,w.computeCommand(i,[this.computerShader])}}let Fo=`

#include "MathShader"
#include "FastMathShader"
#include "ColorUtil"
struct GlobalUniform {
   projMat: mat4x4<f32>,
   viewMat: mat4x4<f32>,
   cameraWorldMatrix: mat4x4<f32>,
   pvMatrixInv : mat4x4<f32>,
   shadowMatrix: array<mat4x4<f32>,8>,
   CameraPos: vec3<f32>,
   
   frame: f32,
   time: f32,
   delta: f32,
   shadowBias: f32,
   skyExposure: f32,
   renderPassState:f32,
   quadScale: f32,
   hdrExposure: f32,
  
   renderState_left: i32,
   renderState_right: i32,
   renderState_split: f32,

   mouseX: f32,
   mouseY: f32,
   windowWidth: f32,
   windowHeight: f32,

   near: f32,
   far: f32,

   pointShadowBias: f32,
   shadowMapSize: f32,
   shadowSoft: f32,
 };

struct ConstUniform{
   screenWidth:f32,
   screenHeight:f32
}

struct LightData {
     index:f32,
     lightType:i32,
     radius:f32,
     linear:f32,
     
     position:vec3<f32>,
     lightMatrixIndex:f32,

     direction:vec3<f32>,
     quadratic:f32,

     lightColor:vec3<f32>,
     intensity:f32,

     innerCutOff :f32,
     outerCutOff:f32,
     range :f32,
     castShadow:i32,

     lightTangent:vec3<f32>,
     ies:f32,
};

struct Uniforms {
     matrix : array<mat4x4<f32>>
 };

const PointLightType = 1;
const DirectLightType = 2;
const SpotLightType = 3;

@group(0) @binding(0) var outputBuffer : texture_storage_2d<rgba16float, write>;
@group(0) @binding(1) var prefilterMapSampler: sampler;
@group(0) @binding(2) var prefilterMap: texture_cube<f32>;
@group(0) @binding(3) var<uniform> globalUniform: GlobalUniform;

@group(1) @binding(0) var positionMapSampler : sampler;
@group(1) @binding(1) var positionMap : texture_2d<f32>;

@group(1) @binding(2) var normalMapSampler : sampler;
@group(1) @binding(3) var normalMap : texture_2d<f32>;

@group(1) @binding(4) var colorMapSampler : sampler;
@group(1) @binding(5) var colorMap : texture_2d<f32>;

@group(1) @binding(6) var shadowMapSampler : sampler_comparison;
@group(1) @binding(7) var shadowMap : texture_depth_2d_array;

@group(1) @binding(8) var pointShadowMapSampler: sampler;
@group(1) @binding(9) var pointShadowMap: texture_depth_cube_array ;

@group(2) @binding(0)
var<storage,read> lightBuffer: array<LightData>;

@group(2) @binding(1)
var<storage, read> models : Uniforms;

struct ShadowStruct{
 directShadowVisibility:f32,
 pointShadows:array<f32,8>,
}
var<private> shadowStrut: ShadowStruct ;

var<private> wsn:vec3<f32>;
var<private> ulitColor:vec3<f32>;

var<private> shadow:f32 = 1.0;

const LUMEN = 10.764;

fn samplePosition(uv:vec2<i32>) -> vec4<f32>
{
   var oc1:vec4<f32> = textureSampleLevel(positionMap, positionMapSampler, vec2<f32>(0.0), 0.0);
   var oc:vec4<f32> = textureLoad(positionMap, uv, 0) ;
   return oc;
}

fn sampleNormal(uv:vec2<i32>) -> vec4<f32>
{
   var oc1:vec4<f32> = textureSampleLevel(normalMap, normalMapSampler, vec2<f32>(0.0), 0.0);
   var oc:vec4<f32> = textureLoad(normalMap, uv, 0);
   return oc;
}

fn sampleColor(uv:vec2<i32>) -> vec4<f32>
{
   var oc1:vec4<f32> = textureSampleLevel(colorMap, colorMapSampler, vec2<f32>(0.0), 0.0);
   var oc:vec4<f32> = textureLoad(colorMap, uv, 0);
   ulitColor = vec3(oc.xyz);
   return oc;
}

fn directionShadowMapping(worldPos:vec3<f32>,shadowBias:f32) {
   var shadowPos = globalUniform.shadowMatrix[0] * vec4<f32>(worldPos.xyz, 1.0);
   var shadowUV = shadowPos.xy * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5, 0.5) ;
   let texelSize = 1.0 / vec2<f32>(globalUniform.shadowMapSize);

   var visibility = 0.0 ;
   let oneOverShadowDepthTextureSize = texelSize ;
   for (var y = -1; y <= 1; y++) {
       for (var x = -1; x <= 1; x++) {
           let offset = shadowUV * oneOverShadowDepthTextureSize;
           visibility += textureSampleCompareLevel( shadowMap, shadowMapSampler, shadowUV + offset , 0 , shadowPos.z - shadowBias );
       }
   }
   visibility /= 9.0;
   shadowStrut.directShadowVisibility = visibility;
}

fn pointShadowMapCompare(worldPos:vec3<f32>,shadowBias:f32){
   for(var i:i32 = i32(0) ; i < i32(8); i = i + 1 )
   { 
       var v = 1.0 ;
       let light = lightBuffer[i] ;
       if(light.castShadow < 0 ){
         shadowStrut.pointShadows[i] = v ;
         continue ;
       }

       let frgToLight = worldPos - light.position.xyz;
       var dir:vec3<f32> = normalize(frgToLight)  ;

       var len = length(frgToLight) ;
       var depth = textureSampleLevel(pointShadowMap,pointShadowMapSampler,dir.xyz,i,0); 
       depth *= globalUniform.far ;
       if((len - shadowBias) > depth){
          v = 0.0 ; 
       }
       shadowStrut.pointShadows[i] = v ;
   }
} 

fn directLighting( albedo:vec3<f32> , WP :vec3<f32>, N:vec3<f32> , V:vec3<f32> , light:LightData , shadowBias:f32  ) -> vec3<f32> {
 var L = -normalize(light.direction.xyz) ;
 var NoL = max(dot(N,L),0.0);
 let lightCC = pow( light.lightColor.rgb,vec3<f32>(2.2));
 var lightColor = getHDRColor( lightCC , light.linear ) ;
 var att = light.intensity / LUMEN ;
 if(light.castShadow>=0){
     lightColor *= shadowStrut.directShadowVisibility ;
 }
 let finalLight = (albedo / PI) * lightColor * NoL * att * 2.0 ;
 return finalLight ;
}

fn pointLighting( albedo:vec3<f32>,WP:vec3<f32>, N:vec3<f32>, V:vec3<f32>, light:LightData ) -> vec3<f32> {
 let lightPos = models.matrix[u32(light.lightMatrixIndex)][3].xyz;
 var dir = lightPos.xyz - WP ;
 let dist = length(dir);
 var color = vec3<f32>(0.0) ;

 if(dist != 0.0){
   dir *= 1.0 / dist ;
 }

 if( abs(dist) < light.range ){
     var L = dir ;
     var atten = 1.0 ;
     atten = 1.0 - smoothstep(0.0,light.range,dist) ;
     atten *= 1.0 / max(light.radius,0.0001) ;

     var lightColor = light.lightColor.rgb  ;
     lightColor = getHDRColor(lightColor , light.linear ) * light.intensity / LUMEN * 2.0;
     color = (albedo / PI) * lightColor.rgb * atten ;
 }

 return  color *0.0;
}

fn spotLight( albedo:vec3<f32>,WP:vec3<f32>, N:vec3<f32>, V:vec3<f32>, light:LightData ) -> vec3<f32> {
 let lightPos = models.matrix[u32(light.lightMatrixIndex)][3].xyz;
 var dir = lightPos.xyz - WP ;
 let dist = length(dir) ;

 if(dist != 0.0){
   dir *= 1.0 / dist ;
 }

 var color = vec3<f32>(0.0) ;
 if( abs(dist) < light.range * 2.0 ){
     var L = dir ;
     let theta = dot(-L, normalize(light.direction));
     let angle = acos(theta) ;
     var atten = 1.0 ;
     atten = 1.0 - smoothstep(0.0,light.range,dist) ;
     atten *= 1.0 / max(light.radius,0.1) ;
     if(angle < light.outerCutOff){
       if(angle > light.innerCutOff){
         atten *= 1.0 - smoothstep(light.innerCutOff, light.outerCutOff, angle) ;
       }
     }else{
       atten = 0.0 ;
     }
     var lightColor = light.lightColor.rgb  ;
     lightColor = getHDRColor(lightColor , light.linear ) * light.intensity / LUMEN * 2.0;
     color = (albedo / PI) * lightColor.rgb * atten ;
   }
 return  color ;
}

fn coordFun(fragCoord:vec2<u32>)-> vec4<f32>{
 var uv = vec2<i32>(i32(fragCoord.x), i32(fragCoord.y)) ;
 var pos = samplePosition(uv);

 var normalMap = sampleNormal(uv);
 wsn = normalMap.xyz * 2.0 - 1.0;
 var normal = normalize( wsn );

 var color = sampleColor(uv);
 var emissive = vec4<f32>(pos.a,normalMap.a,color.a,0.0) * 1.0 ;
 if(pos.w + 1.0 > 10000.0){
   return vec4<f32>(color);
 }
 var V = normalize(pos.xyz - globalUniform.cameraWorldMatrix[3].xyz);
 var N = normal.xyz ;

 directionShadowMapping(pos.xyz,globalUniform.shadowBias);
 pointShadowMapCompare(pos.xyz,globalUniform.shadowBias);

 var lighting = vec3<f32>(0.0);
 let lightCount = 32 ;
 for(var i:i32 = 0 ; i < lightCount ; i = i + 1 )
 {
     let light = lightBuffer[i];
     switch (light.lightType) {
         case PointLightType: {
             lighting += pointLighting(color.rgb,pos.xyz,N,V,light);
         }
         case DirectLightType: {
             lighting += directLighting(color.rgb,pos.xyz,N,V,light,globalUniform.shadowBias);
         }
         case SpotLightType: {
             lighting += spotLight(color.rgb,pos.xyz,N,V,light);
         }
         default: {
         }
     }
 }

 // lighting = vec3<f32>(1.0) / (vec3<f32>(1.0) + lighting.rgb) * lighting.rgb;

 var skyLight: vec3<f32> = globalUniform.skyExposure * (textureSampleLevel(prefilterMap, prefilterMapSampler, N.xyz, 8.0 ).rgb);
 // skyLight = LinearToGammaSpace(skyLight);
 // skyLight = (color.rgb / 3.1415926 ) * skyLight;
 // skyLight = vec3<f32>(1.0) / (vec3<f32>(1.0) + skyLight.rgb) * skyLight.rgb;

 lighting = lighting.rgb ;//+ skyLight.rgb ;

 return vec4<f32>(lighting.rgb,color.w)+emissive;
}

// fn vertexToCoord(vertexPosition:vec3<f32>) -> vec4<f32>{
//   var worldPos = vec4<f32>(vertexPosition.xyz, 1.0);
//   var fragPosition = globalUniform.viewMat * worldPos ;
//   // var position = globalUniform.projMat * fragPosition ;
//   return fragPosition;
// }

@compute @workgroup_size( 8 , 8 , 1 )
fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
{
   var fragCoord = vec2<u32>( globalInvocation_id.x, globalInvocation_id.y);
   var color = coordFun(fragCoord);
   
   // color = vec4(pow(color.rgb,vec3<f32>(1.0/2.4)),1.0);
   textureStore(outputBuffer, vec2<i32>(fragCoord),color);
}

`;class Go{constructor(){s(this,"computeShader"),s(this,"worldPosMap"),s(this,"worldNormalMap"),s(this,"colorMap"),s(this,"shadowMap"),s(this,"pointShadowMap"),s(this,"lightingTexture");var e=b.setting.gi;this.lightingTexture=new ce(e.probeSourceTextureSize,e.probeSourceTextureSize,F.rgba16float,!1,GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.STORAGE_BINDING)}create(e){e=ve.getLightEntries(e.scene),this.computeShader=new ft(Fo),this.computeShader.setStorageTexture("outputBuffer",this.lightingTexture),this.computeShader.setStorageBuffer("lightBuffer",e.storageGPUBuffer),this.computeShader.setStorageBuffer("models",ve.modelMatrixBindGroup.matrixBufferDst),this.computeShader.setSamplerTexture("positionMap",this.worldPosMap),this.computeShader.setSamplerTexture("normalMap",this.worldNormalMap),this.computeShader.setSamplerTexture("colorMap",this.colorMap),this.computeShader.setSamplerTexture("shadowMap",this.shadowMap),this.computeShader.setSamplerTexture("pointShadowMap",this.pointShadowMap),this.computeShader.setSamplerTexture("prefilterMap",b.res.defaultSky)}setInputs(e){this.worldPosMap=e[0],this.worldNormalMap=e[1],this.colorMap=e[2],this.shadowMap=e[3],this.pointShadowMap=e[4]}computer(i,t){this.computeShader||(this.create(i),i=ve.getCameraGroup(i.camera),this.computeShader.setUniformBuffer("globalUniform",i.uniformGPUBuffer));var i=w.beginCommandEncoder(),a=b.setting.gi;this.computeShader.workerSizeX=a.probeSourceTextureSize/8,this.computeShader.workerSizeY=a.probeSourceTextureSize/8,this.computeShader.workerSizeZ=1,w.computeCommand(i,[this.computeShader])}}let Ii=new Pe("GIRenderStartEvent"),ts=new Pe("GIRenderCompleteEvent");class Vo{constructor(){s(this,"count"),s(this,"complete")}}class Ho extends Ft{constructor(e){super(),s(this,"cubeCamera"),s(this,"volume"),s(this,"probeCountPerFrame",1),s(this,"nextProbeIndex",-1),s(this,"tempProbeList",[]),s(this,"isRenderCloudGI"),s(this,"probeRenderResult"),s(this,"renderStatus","none"),s(this,"positionMap"),s(this,"normalMap"),s(this,"colorMap"),s(this,"probeNext",128),s(this,"sizeW"),s(this,"sizeH"),s(this,"lightingPass"),s(this,"bouncePass"),s(this,"irradianceComputePass"),s(this,"irradianceDepthMap"),s(this,"irradianceColorMap"),this.passType=Z.GI;var t=(this.volume=e).setting,t=(this.cubeCamera=new Ao(.01,5e3),this.sizeW=t.probeSourceTextureSize,this.sizeH=t.probeSourceTextureSize,this.probeNext=t.probeSourceTextureSize/t.probeSize,this.initIrradianceMap(e),this.probeRenderResult=new Vo,new Uo(this.sizeW,this.sizeH));this.positionMap=t.attachments[0],this.normalMap=t.attachments[1],this.colorMap=t.attachments[2],this.setRenderStates(t)}setInputTexture(e){this.lightingPass=new Go,this.bouncePass=new zo(this.volume),this.irradianceComputePass=new ko(this.volume),this.lightingPass.setInputs([this.positionMap,this.normalMap,this.colorMap,e[0],e[1]]),this.bouncePass.setInputs([this.normalMap,this.colorMap,this.lightingPass.lightingTexture,this.irradianceColorMap]),this.irradianceComputePass.setTextures([this.positionMap,this.normalMap,this.bouncePass.blendTexture],this.irradianceColorMap,this.irradianceDepthMap)}setIrradianceData(e,t,i,a){i!=this.irradianceColorMap.width||a!=this.irradianceColorMap.height?console.error("irradiance image size not match !"):(this.writeToTexture(this.irradianceColorMap,e,i,a),this.writeToTexture(this.irradianceDepthMap,t,i,a))}updateProbe(e,l,i){var a=B.instance.getLights(e.scene),n=this.volume.setting.probeSize,o=(l.drawCallFrame+=1,this.cubeCamera.x=l.x,this.cubeCamera.y=l.y,this.cubeCamera.z=l.z,this.volume.setting.debugCamera?(this.cubeCamera.x=e.camera.transform.x,this.cubeCamera.y=e.camera.transform.y,this.cubeCamera.z=e.camera.transform.z,this.cubeCamera.rotationX=e.camera.transform.rotationX,this.cubeCamera.rotationY=e.camera.transform.rotationY,this.cubeCamera.rotationZ=e.camera.transform.rotationZ):(this.cubeCamera.rotationX=l.rotationX,this.cubeCamera.rotationY=l.rotationY,this.cubeCamera.rotationZ=l.rotationZ),this.cubeCamera),h=Math.floor(l.index/this.probeNext)*(6*n),l=Math.floor(l.index%this.probeNext)*n;i.setViewport(0+h,l,n,n,0,1),this.renderSceneOnce(e,o.right_camera,i,a),i.setViewport(n+h,l,n,n,0,1),this.renderSceneOnce(e,o.left_camera,i,a),i.setViewport(2*n+h,l,n,n,0,1),this.renderSceneOnce(e,o.up_camera,i,a),i.setViewport(3*n+h,l,n,n,0,1),this.renderSceneOnce(e,o.down_camera,i,a),i.setViewport(4*n+h,l,n,n,0,1),this.renderSceneOnce(e,o.front_camera,i,a),i.setViewport(5*n+h,l,n,n,0,1),this.renderSceneOnce(e,o.back_camera,i,a)}renderSceneOnce(e,t,i,a){this.volume.uploadBuffer();var n=B.instance.getRenderNodes(e.scene);w.bindCamera(i,t);let o=Math.max(0,b.setting.render.drawOpMin),h=Math.min(b.setting.render.drawOpMax,n.opaqueList.length);for(let c=o;c<h;++c){var l=n.opaqueList[c];l.enable&&l.transform.enable&&l.renderPass2(e,this.passType,this.rendererPassState,null,i)}B.instance.sky&&B.instance.sky.renderPass2(e,this.passType,this.rendererPassState,null,i),o=Math.max(0,b.setting.render.drawTrMin),h=Math.min(b.setting.render.drawTrMax,n.transparentList.length);for(let c=o;c<h;++c){var u=n.transparentList[c];u.enable&&u.transform.enable&&u.renderPass2(e,this.passType,this.rendererPassState,null,i)}}render(e,t){var i;b.setting.gi.enable&&(e.camera,e.scene,this.volume.updateOrientation(),this.volume.isVolumeFrameChange=!1,this.volume.uploadBuffer(),(i=B.instance.sky)&&i.nodeUpdate(e,this.passType,this.rendererPassState,null),this.rendProbe(e),i=0<this.probeRenderResult.count,(B.instance.state.giLightingChange||i||b.setting.gi.realTimeGI)&&(B.instance.state.giLightingChange=!1,this.lightingPass.computer(e,this.rendererPassState),this.bouncePass.computer(e,this.rendererPassState),this.irradianceComputePass.computer(e,this.rendererPassState)),this.probeRenderResult.complete)&&this.dispatchEvent(ts)}startRenderGI(e=0){this.nextProbeIndex==-1&&e==0&&this.dispatchEvent(Ii),this.nextProbeIndex=e,this.renderStatus="rendering"}startRenderCloudGI(){this.dispatchEvent(Ii),this.nextProbeIndex=0,this.renderStatus="rendering",this.isRenderCloudGI=!0}rendProbe(e){let t=b.setting.gi.autoRenderProbe,i=!1;if(i=t?(this.nextProbeIndex==-1&&this.startRenderGI(),!0):this.renderStatus=="rendering",this.probeRenderResult.count=0,this.probeRenderResult.complete=!1,i){var a=B.instance.getProbes(e.scene);this.renderContext.clean(),this.renderContext.beginRenderPass(),this.tempProbeList.length=0;let h=Math.min(this.probeCountPerFrame,a.length);for(this.probeRenderResult.count=h;0<h;){var n=a[this.nextProbeIndex];this.updateProbe(e,n,this.renderContext.encoder),h--,this.nextProbeIndex++,n.drawCallFrame<3&&this.tempProbeList.push(n)}0<this.tempProbeList.length&&this.volume.updateProbes(this.tempProbeList);var o=this.nextProbeIndex>=a.length;this.nextProbeIndex>=a.length&&this.isRenderCloudGI&&this.updateProbe(e,a[0],this.renderContext.encoder),this.renderContext.endRenderPass(),o&&(this.nextProbeIndex=-1,this.renderStatus="complete",this.probeRenderResult.complete=!0)}}initIrradianceMap(t){var t=t.setting,i=GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.COPY_DST;this.irradianceDepthMap=new ce(t.octRTMaxSize,t.octRTMaxSize,F.rgba16float,!1,i),this.irradianceDepthMap.name="irradianceDepthMap",this.irradianceColorMap=new ce(t.octRTMaxSize,t.octRTMaxSize,F.rgba16float,!1,i),this.irradianceColorMap.name="irradianceColorMap"}writeToTexture(e,o,i,a){console.log(e.name);var n=M.device.createBuffer({size:o.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),o=(M.device.queue.writeBuffer(n,0,o),w.beginCommandEncoder());o.copyBufferToTexture({buffer:n,bytesPerRow:16*i},{texture:e.getGPUTexture()},{width:i,height:a,depthOrArrayLayers:1}),w.endCommandEncoder(o)}}class wa extends Oo{constructor(e){super(e)}start(){super.start();var e=mi.getGBufferFrame("ColorPassGBuffer"),t=[],i=new bo;b.setting.render.zPrePass&&(e.zPreTexture=this.depthPassRenderer.rendererPassState.depthTexture),i.setRenderStates(e),b.setting.gi.enable&&(e=ve.getLightEntries(this.view.scene),this.ddgiProbeRenderer=new Ho(e.irradianceVolume),this.ddgiProbeRenderer.setInputTexture([this.shadowMapPassRenderer.depth2DArrayTexture,this.pointLightShadowRenderer.cubeArrayTexture]),i.setIrradiance(this.ddgiProbeRenderer.irradianceColorMap,this.ddgiProbeRenderer.irradianceDepthMap),this.rendererMap.addRenderer(this.ddgiProbeRenderer),t.push(this.ddgiProbeRenderer.positionMap,this.ddgiProbeRenderer.normalMap,this.ddgiProbeRenderer.colorMap,this.ddgiProbeRenderer.lightingPass.lightingTexture,this.ddgiProbeRenderer.irradianceColorMap,this.ddgiProbeRenderer.irradianceDepthMap)),this.postRenderer&&this.postRenderer.setDebugTexture(t),this.rendererMap.addRenderer(i),b.setting.render.debug&&this.debug()}debug(){}}class Xo{constructor(){s(this,"_factor"),s(this,"_doubleFactor"),this._factor=1,this._doubleFactor=2}get accelerateInterpolator(){return this._factor}set accelerateInterpolator(e){this._factor=e,this._doubleFactor=2*this._factor}getInterpolation(e){return this._factor==1?e*e:Math.pow(e,this._doubleFactor)}}class Yo{constructor(){s(this,"_factor",1)}get decelerateInterpolator(){return this._factor}set decelerateInterpolator(e){this._factor=e}getInterpolation(e){return this._factor==1?1-(1-e)*(1-e):1-Math.pow(1-e,2*this._factor)}}class Wo{constructor(){s(this,"_factor",1)}getInterpolation(e){return Math.cos((e+1)*Math.PI)/2+.5}}class Ko{getInterpolation(e){return e}}class jo{getInterpolation(e){return 4.9*e+4.9*e}}class Ve{constructor(){}static bounce(e){return e*e*9.8}getInterpolation(e){return(e*=1.1226)<.3535?Ve.bounce(e):e<.7408?Ve.bounce(e-.54719)+.7:e<.9644?Ve.bounce(e-.8526)+.9:Ve.bounce(e-1.0435)+.95}getBounceInterpolation(e){return e<.5?Ve.bounce(e):Ve.bounce(e-1)}geJumpUp(e,t){return t<.5?e*(t/=.5)-Ve.bounce(t):t<.8?.3*(e*(t=(t-.5)/(.8-.5))-Ve.bounce(t)):t<1?.15*(e*(t=(t-.8)/(1-.8))-Ve.bounce(t)):e*t-Ve.bounce(t)}}class qo{constructor(){s(this,"_tension"),this._tension=2}get anticipateInterpolator(){return this._tension}set anticipateInterpolator(e){this._tension=e}getInterpolation(e){return e*e*((this._tension+1)*e-this._tension)}}class ii{constructor(){s(this,"_tension"),this._tension=1.5}anticipateOvershootInterpolator(e){this._tension=1.5*e}anticipateOvershootInterpolator2(e,t){this._tension=e*t}getInterpolation(e){return e<.5?.5*ii.a(2*e,this._tension):.5*(ii.o(2*e-2,this._tension)+2)}static a(e,t){return e*e*((t+1)*e-t)}static o(e,t){return e*e*((t+1)*e+t)}}class Zo{constructor(e){s(this,"_cycles"),this._cycles=e}getInterpolation(e){return Math.sin(2*this._cycles*Math.PI*e)}}class Qo{constructor(){s(this,"_tension"),this._tension=2}getInterpolation(e){return--e*e*((this._tension+1)*e+this._tension)+1}}var rs=(r=>(r[r.AccelerateInterpolator=0]="AccelerateInterpolator",r[r.DecelerateInterpolator=1]="DecelerateInterpolator",r[r.AccelerateDecelerateInterpolator=2]="AccelerateDecelerateInterpolator",r[r.LinearInterpolator=3]="LinearInterpolator",r[r.BounceInterpolator=4]="BounceInterpolator",r[r.AnticipateInterpolator=5]="AnticipateInterpolator",r[r.AnticipateOvershootInterpolator=6]="AnticipateOvershootInterpolator",r[r.CycleInterpolator=7]="CycleInterpolator",r[r.OvershootInterpolator=8]="OvershootInterpolator",r[r.JumperInterpolator=9]="JumperInterpolator",r))(rs||{});const Yt=class{constructor(){s(this,"complete",!1),s(this,"onComplete"),s(this,"onProgress"),s(this,"target"),s(this,"property"),s(this,"targetProperty"),s(this,"durtion"),s(this,"interpolatorEnum"),s(this,"delayTime",0),s(this,"_interpolator"),s(this,"_ct",0),s(this,"_p",0)}static to(r,e,t,i=0){var a=new Yt;return a.target=r,a.property=e,a.durtion=t,a.interpolatorEnum=i,a.start(),a.delayTime=e.delayTime||0,e.onComplete&&(a.onComplete=e.onComplete),e.onProgress&&(a.onProgress=e.onProgress),this.interpolators.push(a),a}static tick(r){var e;for(e of Yt.interpolators)e.complete?Yt.remove(e,!0):e.tick(r)}static remove(r,e){var t=Yt.interpolators,i=t.indexOf(r);i!=-1&&t.splice(i,1),e&&r.dispose()}static removeList(r,e){r.forEach(t=>{this.remove(t,e)})}start(){for(var r in window.AccelerateInterpolator=Xo,window.DecelerateInterpolator=Yo,window.AccelerateDecelerateInterpolator=Wo,window.LinearInterpolator=Ko,window.BounceInterpolator=Ve,window.AnticipateInterpolator=qo,window.AnticipateOvershootInterpolator=ii,window.CycleInterpolator=Zo,window.OvershootInterpolator=Qo,window.JumperInterpolator=jo,this._interpolator=new window[rs[this.interpolatorEnum]],this.targetProperty={},this.property)this.targetProperty[r]=this.target[r]}tick(r){if(this.delayTime<=0){this._p=Math.min(this._ct/this.durtion,1);var e,t,i,a=this._interpolator.getInterpolation(this._p),n=this.property,o=this.target,h=this.targetProperty;for(i in n)t=n[i],e=h[i],o[i]=e+(t-e)*a;this.onProgress!=null&&this.onProgress(this._p),this._ct>=this.durtion&&(this.complete=!0,this.onComplete!=null)&&this.onComplete(this.target),this._ct+=r}else this.delayTime-=r}dispose(){this.onComplete=null,this.onProgress=null,this.target=null,this.property=null,this.targetProperty=null,this.interpolatorEnum=null,this._interpolator=null,Yt.remove(this)}};let is=Yt;s(is,"interpolators",[]);class Me{static hasString(e,t){for(var i=0;i<e.length;++i)if(e[i]==t)return i;return-1}static getEllipsis(e,t=4){let i=e;return i=i.length>t?i.slice(0,t)+"...":i}static getURLName(e){e=e.split("/");let t=e[e.length-1];return t=t.split(".")[0]}static getFileFormat(e){var t=e.lastIndexOf("."),i=e.length;return e.indexOf("?",++t)!==-1&&(i=e.indexOf("?",t)),e.substr(t,i-t).toLowerCase()}static readLineProperty(e,t){e.trim().split(" ").forEach((h,a)=>{var n,o,h=h.split("=");1<h.length&&(n=h[0],o=h[1],Object.prototype.hasOwnProperty.call(t,n))&&(o.indexOf('"')==-1?t[n]=parseFloat(h[1]):t[n]=o.replace('"',"").replace('"',""))})}static getPath(e){var t=e.lastIndexOf("/");return e.substring(0,++t)}static normalizePath(e){return e.replaceAll("//","/").replaceAll("\\","/")}static getStringList(e,t=";"){return e.split(t)}static formatTime(i){var i=i/1e3/60,t=Math.floor(i),i=Math.floor(i-t);return[t.toString(),i.toString()]}static trim(e){return e.replace(/^\s+/g,"").replace(/\s+$/g,"")}static isEmpty(e){return!e||"u"<typeof e||e==null||typeof e=="string"&&this.trim(e)===""||e==="null"}static strCut(e,t){if(2*e.length<=t)return e;for(var i=0,a="",n=0;n<e.length;n++)if(a+=e.charAt(n),128<e.charCodeAt(n)){if(t<=(i+=2))return a.substring(0,a.length-1)+"..."}else if(t<=(i+=1))return a.substring(0,a.length-2)+"...";return a}static toQueryPair(e,t,i=!1){return e+"="+(i?encodeURIComponent(t):t)}static stringFormat(e,...t){if(arguments.length===0)throw new Error("please give arg at least one !");if(arguments.length===2&&typeof arguments[1]=="object")for(var i in arguments[1]){var a=new RegExp("({"+i+"})","g");e=e.replace(a,arguments[1][i])}else for(let o=0;o<t.length;o++){if(t[o]==null)return e;var n=new RegExp("({["+o+"]})","g");e=e.replace(n,t[o])}return e}static parseJson2String(e,t){let i=null,a="",n=0;return(t=t||{}).newlineAfterColonIfBeforeBraceOrBracket=t.newlineAfterColonIfBeforeBraceOrBracket===!0,t.spaceAfterColon=t.spaceAfterColon!==!1,typeof e=="string"&&(e=JSON.parse(e)),e=JSON.stringify(e),i=/([\{\}])/g,e=e.replace(i,`\r
$1\r
`),i=/([\[\]])/g,e=e.replace(i,`\r
$1\r
`),i=/(\,)/g,e=e.replace(i,`$1\r
`),i=/(\r\n\r\n)/g,e=e.replace(i,`\r
`),i=/\r\n\,/g,e=e.replace(i,","),t.newlineAfterColonIfBeforeBraceOrBracket||(i=/\:\r\n\{/g,e=e.replace(i,":{"),i=/\:\r\n\[/g,e=e.replace(i,":[")),t.spaceAfterColon&&(i=/\:/g,e=e.replace(i,":")),e.split(`\r
`).forEach(function(o,h){let l=0,u=0,c="";for(o.match(/\{$/)||o.match(/\[$/)?u=1:o.match(/\}/)||o.match(/\]/)?n!==0&&--n:u=0,l=0;l<n;l++)c+="    ";a+=c+o+`\r
`,n+=u}),a}static compareVersion(e,t){e=e.split("."),t=t.split(".");for(var i=Math.max(e.length,t.length);e.length<i;)e.push("0");for(;t.length<i;)t.push("0");for(let o=0;o<i;o++){var a=parseInt(e[o]),n=parseInt(t[o]);if(n<a)return 1;if(a<n)return-1}return 0}static buildRandomCode(){let e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",t=e.length,i="";for(let n=0;n<26;n++){var a=Math.floor(Math.random()*t);i+=e.charAt(a)}return new Date().getTime()+"-"+i}static UUID(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return(e=="x"?t:3&t|8).toString(16)})}static stringToHash(e){let t=0;if(e.length!=0)for(let a=0;a<e.length;a++){var i=e.charCodeAt(a);t=(t<<5)-t+i,t&=t}return t}static parseUrl(e,t){return t.match(/^(blob|http|https):/)?t:e+t}}s(Me,"_filterChar",[" ","  ",";",`
`,"\r","	",`
`,"\r","	"]);class Pt extends st{constructor(e=!0){super(),s(this,"_source"),s(this,"imageData"),this.useMipmap=e}get source(){return this._source}set source(e){this._source=e,this._source instanceof HTMLImageElement?this._source.decode().then(async()=>{var t;this._source instanceof HTMLImageElement&&(t=await createImageBitmap(this._source,{imageOrientation:this.flipY?"flipY":"from-image"}),this.generate(t))}):(this._source instanceof HTMLCanvasElement||this._source instanceof ImageBitmap)&&this.generate(this._source)}async load(e,t){var i,a;return e.indexOf(";base64")!=-1?(i=document.createElement("img"),a=e.indexOf("data:image"),a=e.substring(a,e.length),i.src=a,await i.decode(),i.width=Math.max(i.width,32),i.height=Math.max(i.height,32),a=await createImageBitmap(i,{resizeWidth:i.width,resizeHeight:i.height,imageOrientation:this.flipY?"flipY":"from-image"}),this.format=F.rgba8unorm,this.generate(a)):(i=await fetch(e,{headers:Object.assign({Accept:"image/avif,image/webp,*/*"},t?.headers)}),a=await Qt.read(e,i,t),i=new Blob([a],{type:"image/jpeg"}),a=null,await this.loadFromBlob(i)),this.name=Me.getURLName(e),!0}async loadFromBlob(e){this.imageData=e;let t=await createImageBitmap(e,{imageOrientation:this.flipY?"flipY":"from-image"});var i;return(t.width<32||t.height<32)&&(e=Math.max(t.width,32),i=Math.max(t.height,32),t=await createImageBitmap(t,{resizeWidth:e,resizeHeight:i,imageOrientation:this.flipY?"flipY":"from-image"})),this.format=F.rgba8unorm,this.generate(t),!0}}class Qt{constructor(){s(this,"baseUrl",""),s(this,"initUrl"),s(this,"_progress",0)}async loadBinData(e,t){return this.baseUrl=Me.getPath(e),this.initUrl=e,new Promise(async(i,a)=>{fetch(e,{headers:t?.headers}).then(async n=>{if(!n.ok)throw Error("request rejected with status "+n.status);n=(await Qt.read(e,n,t)).buffer,i(n)}).catch(n=>{t.onError&&t.onError(n),a(n)})})}async loadAsyncBitmapTexture(e,t){this.baseUrl=Me.getPath(e),this.initUrl=e;var i=new Pt;return i.url=e,i.name=Me.getURLName(e),await i.load(e,t),b.res.addTexture(e,i),i}async loadJson(e,t){return this.baseUrl=Me.getPath(e),this.initUrl=e,new Promise(async(i,a)=>{fetch(e,{headers:t?.headers}).then(async n=>{if(!n.ok)throw Error("request rejected with status"+n.status);n=await Qt.read(e,n,t),n=new TextDecoder("utf-8").decode(n),i(JSON.parse(n))}).catch(n=>{t.onError&&t.onError(n),a(n)})})}async loadTxt(e,t){return this.baseUrl=Me.getPath(e),new Promise(async(i,a)=>{fetch(e).then(async n=>{if(!n.ok)throw Error("request rejected with status"+n.status);n=await Qt.read(e,n,t),n=new TextDecoder("utf-8").decode(n),i({data:n})}).catch(n=>{t.onError&&t.onError(n),a(n)})})}static async read(e,t,i){var a,n=t.body.getReader(),o=+t.headers.get("Content-Length");let h=0,l=[],u=[];for(;;){var{done:c,value:f}=await n.read();if(c){0<o&&i&&i.onComplete&&i.onComplete.call(this,e);break}l.push(f),h+=f.length,0<o?i&&i.onProgress&&i.onProgress.call(this,h,o,e):u.push(f.length)}if(0<u.length)for(let _=0;_<l.length;_++)console.log(u[_]),i&&i.onProgress&&i.onProgress.call(this,u[_],h,e),u[_]==h&&i&&i.onComplete&&i.onComplete.call(this,e);let p=new Uint8Array(h),m=0;for(a of l)p.set(a,m),m+=a.length;return p}}class Ne extends Qt{async load(e,t,i,a){switch(t.format){case"bin":return new Promise(async(n,o)=>{this.loadBinData(e,i).then(async h=>{var l=new t;if(l.userData=a,l.baseUrl=this.baseUrl,l.initUrl=e,await l.parseBuffer(h),!l.verification())throw new Error("parser error");n(l)}).catch(h=>{o(h)})});case"json":return new Promise((n,o)=>{this.loadJson(e,i).then(async h=>{var l=new t;l.userData=a,l.baseUrl=this.baseUrl,l.initUrl=e,l.loaderFunctions=i,await l.parseJson(h),n(l)}).catch(h=>{o(h)})});case"text":return new Promise((n,o)=>{this.loadTxt(e,i).then(async h=>{var l=new t;l.userData=a,l.baseUrl=this.baseUrl,l.initUrl=e,l.loaderFunctions=i,h.data?(await l.parseString(h.data),n(l)):o("text load is empty!")}).catch(h=>{o(h)})})}}}class mt{constructor(){s(this,"baseUrl"),s(this,"initUrl"),s(this,"loaderFunctions"),s(this,"userData"),s(this,"data")}parseString(e){}parseJson(e){}parseBuffer(e){}parseTexture(e){throw this.parserError("Method not implemented.",-1)}parse(e){}verification(e){throw this.parserError("Method not implemented.",-1)}parserError(e,t){console.error(`error id:${t} `+e)}}s(mt,"format","bin");class Ri{constructor(){s(this,"asset"),s(this,"accessors"),s(this,"buffers"),s(this,"bufferViews"),s(this,"materials"),s(this,"meshes"),s(this,"nodes"),s(this,"scene",0),s(this,"scenes"),s(this,"textures"),s(this,"cameras"),s(this,"skins"),s(this,"resources"),s(this,"images"),s(this,"samplers"),s(this,"animations"),s(this,"extensions")}}const Jo=5120,$o=5121,eh=5122,th=5123,rh=5124,ih=5125,ah=5126,sh=32819,nh=32820,oh=33635,hh=5131,lh=33640,uh=35899,ch=35902,dh=36269,fh=34042,as={};{const r=as;r[Jo]=Int8Array,r[$o]=Uint8Array,r[eh]=Int16Array,r[th]=Uint16Array,r[rh]=Int32Array,r[ih]=Uint32Array,r[ah]=Float32Array,r[sh]=Uint16Array,r[nh]=Uint16Array,r[oh]=Uint16Array,r[hh]=Uint16Array,r[lh]=Uint32Array,r[uh]=Uint32Array,r[ch]=Uint32Array,r[dh]=Uint32Array,r[fh]=Uint32Array}function Ta(r){if(r=as[r],r)return r;throw new Error("unkonw gl type")}class ai{static async apply(e,t){if(t.extensions){const i=t.extensions.KHR_draco_mesh_compression;if(i){let a=this._workers.get(e.gltf),n=(a||(a=new Worker(await this.initDecoder()),this._workers.set(e.gltf,a)),a.postMessage({type:"init",decoderConfig:{}}),e.parseBufferView(i.bufferView));return n.result||(t=await new Promise((o,h)=>{a.onmessage=l=>{l=l.data,l.type=="decode"?o(l.result):l.type=="error"&&h(l.error)},a.postMessage({type:"decoder",buffer:n,attributes:i.attributes},[n])}),n.result=t),n.result}}}static unload(e){var t=this._workers.get(e);t&&(t.terminate(),this._workers.delete(e))}static async initDecoder(){var e;return this._workerCode||(e=await new Ne().loadTxt("https://cdn.orillusion.com/draco_decoder_gltf.js"),e=new Blob([e.data,"",`(${ph})()`],{type:"application/javascript"}),this._workerCode=URL.createObjectURL(e)),this._workerCode}}function ph(){let r,e;onmessage=t=>{var i=t.data;switch(i.type){case"init":r=i.decoderConfig,e=new Promise((o,h)=>{r.onModuleLoaded=l=>{o({draco:l})},DracoDecoderModule(r)});break;case"decoder":const a=i.buffer,n=i.attributes;e.then(u=>{var h=u.draco,l=new h.Decoder,u=new h.DecoderBuffer;u.Init(new Int8Array(a),a.byteLength);let c,f;try{var p=l.GetEncodedGeometryType(u),m=(p==h.TRIANGULAR_MESH?(f=new h.Mesh,c=l.DecodeBufferToMesh(u,f)):self.postMessage(new Error("INVALID_GEOMETRY_TYPE:"+p)),c.ok()||self.postMessage(new Error("DracoDecode:"+c.error_msg())),{});for(const j in n){var _=l.GetAttributeByUniqueId(f,n[j]),v=_.num_components(),S=f.num_points()*v,T=S*Float32Array.BYTES_PER_ELEMENT,y=h.DT_FLOAT32,C=h._malloc(T),I=(l.GetAttributeDataArrayForAllPoints(f,_,y,T,C),new Float32Array(h.HEAPF32.buffer,C,S).slice());h._free(C),m[j]={data:I,numComponents:v,normalize:!1}}var L=3*f.num_faces(),R=4*L,O=h._malloc(R),N=(l.GetTrianglesUInt32Array(f,R,O),new Uint32Array(h.HEAPF32.buffer,O,L).slice());h._free(O),m.indices={data:N,numComponents:1,normalize:!1},self.postMessage({type:"decode",result:m})}catch(j){self.postMessage({type:"error",error:j.message})}finally{h.destroy(f),h.destroy(l),h.destroy(u)}})}}}s(ai,"_workerCode"),s(ai,"_workers",new Map);class mh{constructor(e){s(this,"gltf"),this.gltf=e}parse(e){var t,i,a,n,o,h,l,u=this.gltf.cameras[e];return u?(u.isParsed||(u.isParsed=!0,u.dcamera=!1,{name:t,type:i,perspective:h,orthographic:a}=u,i==="perspective"&&h?({aspectRatio:h,yfov:n,zfar:l,znear:o}=h,u.dcamera=Object.assign({},{name:t,type:i,yfov:n,znear:o,aspectRatio:h,zfar:l})):i==="orthographic"&&a&&({xmag:n,ymag:o,zfar:h,znear:l}=a,u.dcamera=Object.assign({},{name:t,type:i,xmag:n,ymag:o,zfar:h,znear:l}))),u.dcamera):this.errorMiss("camera",e)}errorMiss(e,t){throw new Error(e+t)}}const ss=class extends mt{constructor(){super(...arguments),s(this,"_gltf")}async parseJson(r){this._gltf=new Ri,this._gltf={...this._gltf,...r},this._gltf.resources={},await Promise.all([this.load_gltf_bin(),this.load_gltf_textures()]);let e=new Oi,t=await e.parse(this.initUrl,this._gltf,this._gltf.scene);return e.destory(),e=null,t?(this.data=t.rootNode,t.rootNode):this._gltf=null}verification(){if(this.data)return!0;throw new Error("Method not implemented.")}static getMeshNameCounter(){return function(){return"GLTF_NO_NAME_PRIMITIVE_"+ss._counter++}}static getModelNameCounter(){let r=0;return function(){return"GLTF_NO_NAME_MESH_"+r++}}static getTexCoordDefine(r){return"UV_NUM "+r}static getVertexColorDefine(r){return"HAS_VERTEXCOLOR "+r}static getBaseColorTextureDefine(){return"HAS_BASECOLORMAP"}static getMetalRoughnessDefine(){return"HAS_METALROUGHNESSMAP"}static getNormalMapDefine(){return"HAS_NORMALMAP"}static getEmissiveMapDefine(){return"HAS_EMISSIVEMAP"}static getOcclusionMapDefine(){return"HAS_OCCLUSIONMAP"}static getMorphTargetsDefine(r){return"MORPH_TARGET_NUM "+r}static getMorphtargetPositionDefine(){return"HAS_MORPH_POSITION"}static getMorphtargetNormalDefine(){return"HAS_MORPH_NORMAL"}static getMorphtargetTangentDefine(){return"HAS_MORPH_TANGENT"}static getJointsNumDefine(r){return"JOINTS_NUM "+r}static getJointVec8Define(){return"JOINT_VEC8"}static getHasNormalDefine(){return"HAS_NORMAL"}static getHasTangentDefine(){return"HAS_TANGENT"}static getHasNormalMapDefine(){return"HAS_NORMAL_MAP"}static getAlphaMaskDefine(){return"ALPHA_MASK"}static getAlphaBlendDefine(){return"ALPHA_BLEND"}async load_gltf_bin(){if(this._gltf.buffers&&0<this._gltf.buffers.length){var r=[];for(let t=0;t<this._gltf.buffers.length;t++){const i=this._gltf.buffers[t];if(i.uri.substring(0,5)!=="data:"){let a=Me.parseUrl(this.baseUrl,i.uri);(e=this.loaderFunctions)!=null&&e.onUrl&&(a=await this.loaderFunctions.onUrl(a));var e=new Ne().loadBinData(a,this.loaderFunctions).then(n=>{this._gltf.resources[i.uri]=n});r.push(e)}}await Promise.all(r)}}async load_gltf_textures(){if(this._gltf,this._gltf.images){var r=[];for(let t=0;t<this._gltf.images.length;t++){const i=this._gltf.images[t];if(i.uri){let a=Me.parseUrl(this.baseUrl,i.uri);(e=this.loaderFunctions)!=null&&e.onUrl&&(a=await this.loaderFunctions.onUrl(a));var e=new Ne().loadAsyncBitmapTexture(a,this.loaderFunctions).then(n=>{n.name=Me.getURLName(i.uri),this._gltf.resources[n.name]=n});r.push(e)}}await Promise.all(r)}}};let be=ss;s(be,"format","json"),s(be,"_counter",0),s(be,"defaultMaterial",{name:"GLTF_DEFAULT_MATERIAL",alphaCutoff:.33,alphaMode:"MASK",pbrMetallicRoughness:{name:"GLTF_DEFAULT_MATERIAL",defines:[],doubleSided:!1,baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1,emissiveFactor:[0,0,0]}});class gh{constructor(e){s(this,"gltf"),s(this,"subParser"),this.gltf=e.gltf,this.subParser=e}async parse(e){var t=this.gltf.meshes[e];if(!t)return this.errorMiss("mesh",e);if(!t.isParsed){var i=t.primitives,a=t.extras,n=[];for(let v=0;v<i.length;v++){var o,h=i[v],{attributes:l,indices:u,material:c,mode:f,targets:p,extensions:m}=h;let S=t.name;for(o in l)S+=o;S=S+("indices:"+u)+("material:"+c);const T={attribArrays:{indices:[]},weights:[],defines:[],material:null,drawMode:null,meshName:null,modelName:null,morphTargetsRelative:!1,targetNames:a?a.targetNames:null};let y=!1,C=0,I=!1,L;m&&m.KHR_draco_mesh_compression&&(L=await ai.apply(this.subParser,h));for(const R in l){var _=L?L[R]:this.parseAccessor(l[R]);if(_){let O;switch(R){case"POSITION":O=z.position;break;case"NORMAL":O=z.normal,y=!0;break;case"TEXCOORD_0":O=z.uv,C++;break;case"JOINTS_0":O=z.joints0;break;case"JOINTS_1":O=z.joints1,I=!0;break;case"WEIGHTS_0":O=z.weights0;break;case"WEIGHTS_1":O=z.weights1;break;default:O=R}T.attribArrays[O]=_}}if(y&&T.defines.push(be.getHasNormalDefine()),C&&T.defines.push(be.getTexCoordDefine(C)),I&&T.defines.push(be.getJointVec8Define()),u!==void 0&&(m=L?L.indices:this.parseAccessor(u))&&(T.attribArrays.indices=m),h=await this.parseMaterial(c),h&&(T.material=h,T.defines=T.defines.concat(h.defines)),T.drawMode=f===void 0?4:f,T.meshName=()=>S,T.modelName=t.name||be.getModelNameCounter(),p){T.defines.push(be.getMorphTargetsDefine(p.length));let R=!(T.morphTargetsRelative=!0),O=!1,N=!1;for(let j=0;j<p.length;j++){const de=p[j];Object.keys(de).forEach(W=>{var H=this.parseAccessor(de[W]);if(H){let te;switch(W){case"POSITION":te=q.MORPH_POSITION_PREFIX+j,R=!0;break;case"NORMAL":te=q.MORPH_NORMAL_PREFIX+j,O=!0;break;case"TANGENT":te=q.MORPH_TANGENT_PREFIX+j,N=!0;break;default:te=!1}te?T.attribArrays[te]=H:console.error("glTF has unsupported morph target attribute "+W)}})}R&&T.defines.push(be.getMorphtargetPositionDefine()),O&&T.defines.push(be.getMorphtargetNormalDefine()),N&&T.defines.push(be.getMorphtargetTangentDefine()),T.weights=t.weights||new Array(p.length).fill(0)}n.push(T)}t.dprimitives=n,t.isParsed=!0}return t.dprimitives}parseAccessor(e){return this.subParser.parseAccessor(e)}parseMaterial(e){return this.subParser.parseMaterial(e)}errorMiss(e,t){throw new Error(e+t)}}class vh{constructor(e){s(this,"gltf"),s(this,"subParser"),this.gltf=e.gltf,this.subParser=e}async parse(y){let t;if(!(t=y==null?be.defaultMaterial:this.gltf.materials[y]))return this.errorMiss("material",y);if(t.isParsed)return t.dmaterial;let{name:i,pbrMetallicRoughness:a,normalTexture:n,occlusionTexture:o,emissiveTexture:h,emissiveFactor:l,alphaMode:u,alphaCutoff:c,doubleSided:f,extensions:p}=t;var m,_,v,S,T,y={name:i,defines:[],doubleSided:!!f,baseColorFactor:[1,1,1,1],emissiveFactor:null,alphaCutoff:0,enableBlend:!1,baseColorTexture:null,metallicRoughnessTexture:null,normalTexture:null,occlusionTexture:null,emissiveTexture:null,transformUV1:null,transformUV2:null,extensions:null};return a?({baseColorFactor:_,metallicFactor:v,roughnessFactor:T,baseColorTexture:S,metallicRoughnessTexture:m}=a,Object.assign(y,{baseColorFactor:_||[1,1,1,1],metallicFactor:v===void 0?1:v,roughnessFactor:T===void 0?.15:T}),S&&((_=S.extensions)&&(v=_.KHR_texture_transform)&&(y.transformUV1=new G(v.offset?v.offset[0]:0,v.offset?v.offset[1]:0,v.scale?v.scale[0]:1,v.scale?v.scale[1]:1)),T=await this.parseTexture(S.index),y.baseColorTexture=T||b.res.redTexture),m&&(_=await this.parseTexture(m.index),y.metallicRoughnessTexture=_||b.res.blackTexture)):Object.assign(y,{baseColorFactor:[1,1,1,1],metallicFactor:0,roughnessFactor:.5}),(u=y.baseColorFactor&&y.baseColorFactor[3]<1?u==="MASK"?"MASK":"BLEND":u)&&u!=="OPAQUE"&&(u==="MASK"&&(y.defines.push(be.getAlphaMaskDefine()),y.alphaCutoff=c===void 0?.5:c),u==="BLEND")&&(y.defines.push(be.getAlphaBlendDefine()),y.enableBlend=!0),n&&(v=await this.parseTexture(n.index),y.normalTexture=v||b.res.normalTexture),o&&(S=await this.parseTexture(o.index))&&(y.occlusionTexture=S),l&&(y.emissiveFactor=l),h&&(T=await this.parseTexture(h.index),y.emissiveTexture=T||b.res.blackTexture),p&&(y.extensions=p),t.isParsed=!0,t.dmaterial=y}async parseTexture(e){return this.subParser.parseTexture(e)}errorMiss(e,t){throw new Error(e+t)}}class _h{constructor(e){s(this,"gltf"),s(this,"subParser"),this.gltf=e.gltf,this.subParser=e}parse(e){var t=this.gltf.skins[e];if(!t)return this.errorMiss("skin",e);if(!t.isParsed){var{name:i,joints:a,inverseBindMatrices:n,skeleton:o}=t;if(!a)return this.errorMiss("skin.joints",e);t.isParsed=!0,t.dskin=!1;let c={name:i,skeleton:null,inverseBindMatrices:null,joints:a,defines:[be.getJointsNumDefine(a.length)]};if(o)c.skeleton=o;else{var h=-1;for(let f=0;f<this.gltf.nodes.length;f++)if(this.gltf.nodes[f].name=="root"){h=f;break}h==-1&&(h=(e=this.gltf.scenes[this.gltf.scene]).nodes[e.nodes.length-1]),c.skeleton=h}if(c.inverseBindMatrices=q.IDENTITY_INVERSE_BIND_MATRICES,n!==void 0)if(i=this.parseAccessor(n),i){var l=i.data,u=[];for(let f=0;f<l.length;f+=16)u.push(l.slice(f,f+16));c.inverseBindMatrices=u}else c=null;t.dskin=c}return t.dskin}parseAccessor(e){return this.subParser.parseAccessor(e)}errorMiss(e,t){throw new Error(e+t)}}class xh{constructor(e=""){s(this,"name",""),s(this,"index",0),s(this,"parent",null),s(this,"children",[]),s(this,"scale",new d),s(this,"rotation",new $),s(this,"translation",new d),this.name=e}}class yh{constructor(e=[]){s(this,"joints"),this.joints=e}get numJoint(){return this.joints.length}addJoint(e){e.index=this.joints.push(e)-1}getJointName(e){return this.joints[e].name}getJointParentIndex(e){return e=this.joints[e],e.parent?e.parent.index:-1}getJointByName(e){for(var t of this.joints)if(t.name==e)return t;return null}}class Ca{constructor(e,t=!1){s(this,"index"),s(this,"worldMatrix"),this.index=e,this.worldMatrix=new A(!t)}}class si{constructor(e,t=!1){s(this,"time"),s(this,"_skeleton"),s(this,"_jointsPose"),s(this,"mJointMatrixIndexTable"),this._skeleton=e,this._jointsPose=new Array(e.numJoint),this.mJointMatrixIndexTable=new Array(e.numJoint);for(let a=0;a<e.numJoint;a++){var i=new Ca(a,t);this._jointsPose[a]=i,this.mJointMatrixIndexTable[a]=i.worldMatrix.index}}buildSkeletonPose(e){var t=new d,i=new $,a=new d,n=new Array(this._skeleton.numJoint);this.time=0<e[11]?e[11]:e[24];for(let u=0;u<this._skeleton.numJoint;u++){var h=12*u*4,h=new Float32Array(e.buffer,e.byteOffset+h,12),o=new A,h=(t.set(h[0],h[1],h[2]),i.set(h[4],h[5],h[6],h[7]),a.set(h[8],h[9],h[10]),Mi(i.getEulerAngles(),a,t,o),n[u]=o,new Ca(u)),l=this._skeleton.getJointParentIndex(u);l<0?h.worldMatrix.copyFrom(o):Dn(this._jointsPose[l].worldMatrix,o,h.worldMatrix),this._jointsPose[u]=h}}get numJoint(){return this._skeleton.numJoint}get joints(){return this._jointsPose}get jointMatrixIndexTable(){return this.mJointMatrixIndexTable}lerp(e,t,i){for(let o=0;o<this._jointsPose.length;o++){var a=e._jointsPose[o],n=t._jointsPose[o];this._jointsPose[o].worldMatrix.lerp(a.worldMatrix,n.worldMatrix,i)}}copyFrom(e){for(let t=0;t<this._jointsPose.length;t++)this._jointsPose[t].worldMatrix.copyFrom(e._jointsPose[t].worldMatrix)}reset(){for(let e=0;e<this._jointsPose.length;e++)this._jointsPose[e].worldMatrix.identity()}}class bh extends Pe{constructor(e,t){super(),s(this,"skeletonAnimation"),this.type=e,this.time=t}}class qi{constructor(e,t,i,a){if(s(this,"name",""),s(this,"_skeleton"),s(this,"_skeletonPoses"),s(this,"_animationClipData"),s(this,"_events"),this.name=e,this._skeleton=t,this._animationClipData=a,0<i&&a){this._skeletonPoses=new Array(i);var n=12*t.numJoint;for(let l=0;l<i;l++){var o=n*l*4,o=new Float32Array(a.buffer,o,n),h=new si(t);h.buildSkeletonPose(o),this._skeletonPoses[l]=h}}}get totalTime(){return this._skeletonPoses[this._skeletonPoses.length-1].time}get frameRate(){return this.totalTime/this._skeletonPoses.length}get skeleton(){return this._skeleton}get numFrame(){return this._skeletonPoses.length-1}get animationClipData(){return this._animationClipData}getSkeletonPose(e){return this._skeletonPoses[e]}getLerpSkeletonPose(e,t,i,a){return e=this.getSkeletonPose(e),t=this.getSkeletonPose(t),a.lerp(e,t,i),a}createSubClip(a,n,o){var a=new qi(a,this._skeleton,0,null),n=Math.max(Math.floor(n/this.frameRate),0),o=Math.min(Math.floor(o/this.frameRate),this._skeletonPoses.length-1),h=(a._skeletonPoses=this._skeletonPoses.slice(n,o),12*this._skeleton.numJoint*4);return this._animationClipData=new Float32Array(this._animationClipData,n*h,(o-n)*h),a}addEvent(e,t){this._events||(this._events=new Array),this._events.push(new bh(e,t))}removeEvent(e){this._events&&(this._events=this._events.filter(t=>t.type!=e))}getEvents(){return this._events}}class Ma{constructor(e){s(this,"gltf"),s(this,"subParser"),this.gltf=e.gltf,this.subParser=e}parse(e){var t=new yh;return this.buildSkeleton(t,void 0,e),t}parseSkeletonAnimation(e,t){for(var i,a=this.subParser.parseAccessor(t.samplers[0].input).data.length,n=12*e.numJoint,o=new Float32Array(n*a),h=0;h<e.numJoint;h++)for(var l=0;l<a;l++)o[(v=n*l+12*h)+0]=1,o[v+1]=1,o[v+2]=1,o[v+3]=1;for(i of t.channels){var p=t.samplers[i.sampler],u=this.subParser.parseAccessor(p.input),c=this.subParser.parseAccessor(p.output),p=i.target.node,f=i.target.path,p=this.gltf.nodes[p];if(p){var m=e.getJointByName(p.name);switch(f){case"scale":for(l=0;l<a;l++){var _=l*c.numComponents;o[(v=n*l+12*m.index)+0]=c.data[_+0],o[v+1]=c.data[_+1],o[v+2]=c.data[_+2],o[v+3]=1}break;case"rotation":for(l=0;l<a;l++)_=l*c.numComponents,o[(v=n*l+12*m.index+4)+0]=c.data[_+0],o[v+1]=c.data[_+1],o[v+2]=c.data[_+2],o[v+3]=c.data[_+3];break;case"translation":for(l=0;l<a;l++){var v,_=l*c.numComponents;o[(v=n*l+12*m.index+8)+0]=c.data[_+0],o[v+1]=c.data[_+1],o[v+2]=c.data[_+2],o[v+3]=u.data[l*u.numComponents]}}}}return new qi(t.name,e,a,o)}buildSkeleton(e,t,i,a=0){var n=this.gltf.nodes[i],o=(n.name||(n.name="Node_"+i),new xh(n.name));if(o.parent=t,n.scale&&o.scale.set(n.scale[0],n.scale[1],n.scale[2]),n.rotation&&o.rotation.set(n.rotation[0],n.rotation[1],n.rotation[2],n.rotation[3]),n.translation&&o.translation.set(n.translation[0],n.translation[1],n.translation[2]),e.addJoint(o),n.children)for(var h of n.children)this.buildSkeleton(e,o,h,a+1)}}class Sh{constructor(e){s(this,"loop",!0),s(this,"speed",1),s(this,"t",0),s(this,"time",0),s(this,"weight",0),s(this,"currFrame",0),s(this,"lastFrame",-1),s(this,"nextFrame",0),s(this,"clip"),s(this,"animation"),s(this,"_isEnd",!1),s(this,"_currSkeletonPose"),this.clip=e,this._currSkeletonPose=new si(this.clip.skeleton)}reset(){this.time=0,this.weight=0,this._isEnd=!1}get name(){return this.clip.name}get currSkeletonPose(){return this._currSkeletonPose}update(e){if(this.time=(this.time+e*this.speed)%this.clip.totalTime,e=this.time/this.clip.frameRate,this.currFrame=Math.trunc(e),this.t=e-this.currFrame,this.currFrame<0&&(this.currFrame=this.clip.numFrame+this.currFrame),0<=this.time?this.nextFrame=(this.currFrame+1)%this.clip.numFrame:(this.nextFrame=this.currFrame-1,this.nextFrame<0&&(this.nextFrame=this.clip.numFrame+this.nextFrame),this.t=1-this.t),this._isEnd)this.currFrame=this.nextFrame=this.speed<0?0:this.clip.numFrame-1;else if(this.currFrame!=this.lastFrame){if(e=this.speed<0?0:this.clip.numFrame,e=(this.currFrame==e&&(this.loop?(this.currFrame=0,this.nextFrame=1,this.time=this.t=0):(this.currFrame=this.nextFrame=this.speed<0?0:this.clip.numFrame-1,this._isEnd=!0)),this.clip.getEvents()),e)for(var t of e){var i=Math.floor(t.time/this.clip.frameRate),i=Math.min(i,this.clip.numFrame);if(Math.max(i,0)==this.currFrame){t.skeletonAnimation=this.animation,this.animation.eventDispatcher.dispatchEvent(t);break}}this.lastFrame=this.currFrame}this.clip.getLerpSkeletonPose(this.currFrame,this.nextFrame,this.t,this._currSkeletonPose)}}class Nt extends Ze{constructor(){super(),s(this,"isPlaying",!0),s(this,"timeScale",1),s(this,"_skeleton"),s(this,"_clips",[]),s(this,"_clipStates",new Map),s(this,"_mixSkeletonPose"),s(this,"_mixTempSkeletonPose"),s(this,"_currentClipState"),s(this,"_bindList",[]),s(this,"_jointMatrixIndexTableBuffer"),s(this,"_crossFadeState")}start(){}get currName(){return this._currentClipState?this._currentClipState.name:""}set skeleton(e){this._skeleton=e,this._mixSkeletonPose=new si(this._skeleton,!0),this._mixTempSkeletonPose=new si(this._skeleton),e=new Float32Array(this._mixSkeletonPose.jointMatrixIndexTable),this._jointMatrixIndexTableBuffer=new De(4*this._skeleton.numJoint,0,e),this._jointMatrixIndexTableBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.COMPUTE}get skeleton(){return this._skeleton}get finalSkeletonPose(){return this._mixSkeletonPose}get jointMatrixIndexTableBuffer(){return this._jointMatrixIndexTableBuffer}getJointIndexTable(e){var t=new Array;for(let a=0;a<e.length;a++){var i=e[a],i=this._skeleton.getJointByName(i);t[a]=i?i.index:-1}return t}addAnimationClip(e){var t;this._clipStates.has(e.name)||(this._clips.push(e),((t=new Sh(e)).animation=this)._clipStates.set(e.name,t),this._currentClipState)||this.setCurrentClipState(t)}getAnimationClip(e){return e=this.getAnimationClipState(e),e?e.clip:null}getAnimationClips(){return this._clips}getAnimationClipState(e){return this._clipStates.has(e)?this._clipStates.get(e):null}getAnimationClipStates(){return this._clipStates}pause(){this.isPlaying=!1}resume(){this.isPlaying=!0}play(e,t=1,i=!1){return this._currentClipState&&this._currentClipState.name==e?(i&&this._currentClipState.reset(),!1):!!(i=this.getAnimationClipState(e))&&(i.speed=t,i.reset(),this._clipStates.forEach((a,n)=>{a.weight=0}),this.setCurrentClipState(i),!0)}crossFade(e,t){t<.01?this.play(e):this._currentClipState.name!=e&&(e=this.getAnimationClipState(e))&&(e.reset(),this._crossFadeState?(this._crossFadeState.inClip&&(this._crossFadeState.inClip.weight=0),this._crossFadeState.outClip&&(this._crossFadeState.outClip.weight=0),this._crossFadeState.reset(e,this._currentClipState,t)):this._crossFadeState=new wh(e,this._currentClipState,t),this._currentClipState=e)}setAnimIsLoop(e,t){this._clipStates.has(e)&&(this._clipStates.get(e).loop=t)}addJointBind(e,t){this._bindList.push({jointName:e,obj:t})}removeJointBind(e){for(let t=0;t<this._bindList.length;t++)if(this._bindList[t].obj==e){this._bindList.splice(t,1);break}}onUpdate(){if(this.isPlaying){let n=.001*he.delta*this.timeScale;this._crossFadeState&&this._crossFadeState.update(n);var e=0,t=[];if(this._clipStates.forEach((o,h)=>{0<o.weight&&(o.update(n),e+=o.weight,t.push(o))}),0<t.length){this._mixSkeletonPose.copyFrom(t[0].currSkeletonPose);for(var i=1;i<t.length;++i){var a=t[i];this._mixTempSkeletonPose.lerp(this._mixSkeletonPose,a.currSkeletonPose,a.weight/e),this._mixSkeletonPose.copyFrom(this._mixTempSkeletonPose)}}}}cloneTo(e){var t=e.addComponent(Nt);t.skeleton=this.skeleton;for(var i=0;i<this._clips.length;++i)t.addAnimationClip(this._clips[i])}setCurrentClipState(e){this._currentClipState!=e&&(this._currentClipState=e,this._currentClipState.weight=1)}}class wh{constructor(e,t,i){s(this,"inClip"),s(this,"outClip"),s(this,"currentTime"),s(this,"crossFadeTime"),this.reset(e,t,i)}reset(e,t,i){this.inClip=e,this.outClip=t,this.currentTime=0,this.crossFadeTime=i}update(e){this.inClip&&this.outClip&&(this.currentTime+=e,this.inClip.weight=Math.min(Math.abs(this.currentTime%this.crossFadeTime)/this.crossFadeTime,1),this.outClip.weight=1-this.inClip.weight,Math.abs(this.currentTime)>=this.crossFadeTime)&&(this.inClip.weight=1,this.outClip.weight=0,this.inClip=null,this.outClip=null)}}class Li{static add(e){this.list.indexOf(e)==-1&&this.list.push(e)}static remove(e){e=this.list.indexOf(e),e!=-1&&this.list.splice(e,1)}}s(Li,"list",[]);class Zi extends Ze{constructor(){super(),s(this,"name"),s(this,"size",1),s(this,"lightData"),s(this,"dirFix",1),s(this,"bindOnChange"),s(this,"needUpdateShadow",!0),s(this,"realTimeShadow",!0),s(this,"_castGI",!1),s(this,"_castShadow",!1),s(this,"_iesProfiles")}init(){this.transform.object3D.bound=new we(new d,new d),this.lightData=new Jr,this.lightData.lightMatrixIndex=this.transform.worldMatrix.index}onChange(){this.bindOnChange&&this.bindOnChange(),this.transform.object3D.bound.setFromCenterAndSize(this.transform.worldPosition,new d(this.size,this.size,this.size)),this._castGI&&(B.instance.state.giLightingChange=!0),this._castShadow?(this.needUpdateShadow=!0,Ce.addShadowLight(this)):Ce.removeShadowLight(this)}start(){this.transform.onPositionChange=()=>this.onPositionChange(),this.transform.onScaleChange=()=>this.onScaleChange(),this.transform.onRotationChange=()=>this.onRotChange(),this.onPositionChange(),this.onRotChange(),this.onScaleChange()}onPositionChange(){this.lightData.lightPosition.copyFrom(this.transform.worldPosition)}onRotChange(){this.dirFix==1?this.lightData.direction.copyFrom(this.transform.forward):this.lightData.direction.copyFrom(this.transform.back),this.lightData.lightTangent.copyFrom(this.transform.up),this.onChange()}onScaleChange(){this.onChange()}onEnable(){this.onChange(),B.instance.addLight(this.transform.scene3D,this)}onDisable(){this.onChange(),B.instance.removeLight(this.transform.scene3D,this)}set iesProfiles(e){this._iesProfiles=e,this.lightData.iesIndex=e.index,Zt.use=!0,this.onChange()}get iesProfile(){return this._iesProfiles}get r(){return this.lightData.lightColor.r}set r(e){this.lightData.lightColor.r=e,this.onChange()}get g(){return this.lightData.lightColor.g}set g(e){this.lightData.lightColor.g=e,this.onChange()}get b(){return this.lightData.lightColor.b}set b(e){this.lightData.lightColor.b=e,this.onChange()}get lightColor(){return this.lightData.lightColor}set lightColor(e){this.lightData.lightColor=e,this.onChange()}get intensity(){return this.lightData.intensity}set intensity(e){this.lightData.intensity=e,this.onChange()}set castShadow(e){e!=this._castShadow&&(this._castShadow=e,this.onChange())}get castShadow(){return this._castShadow}get shadowIndex(){return this.lightData.castShadowIndex}get castGI(){return this._castGI}set castGI(e){e?Li.add(this):Li.remove(this),(this._castGI=e)&&this.onChange()}get direction(){return this.lightData.direction}destroy(e){this.bindOnChange=null,this.transform.eventDispatcher.removeEventListener(Be.ROTATION_ONCHANGE,this.onRotChange,this),this.transform.eventDispatcher.removeEventListener(Be.SCALE_ONCHANGE,this.onScaleChange,this),super.destroy(e)}}class ns extends Zi{constructor(){super(),s(this,"shadowCamera")}init(){super.init(),this.object3D.name==""&&(this.object3D.name="DirectionLight_"+Fe()),this.radius=9999999,this.lightData.lightType=me.DirectionLight,this.lightData.linear=0}start(){super.start(),this.castGI=!0}get radius(){return this.lightData.range}set radius(e){this.lightData.range=e,this.onChange()}get indirect(){return this.lightData.quadratic}set indirect(e){this.lightData.quadratic=e,this.onChange()}debug(){}}class Th extends Zi{constructor(){super()}init(){super.init(),this.lightData.lightType=me.PointLight,this.object3D.name==""&&(this.object3D.name="PointLight"+Fe())}get range(){return this.lightData.range}set range(e){this.lightData.range=e,this.onChange()}get at(){return this.lightData.linear}set at(e){this.lightData.linear=e,this.onChange()}get radius(){return this.lightData.radius}set radius(e){this.lightData.radius=e,this.onChange()}get quadratic(){return this.lightData.quadratic}set quadratic(e){this.lightData.quadratic=e,this.onChange()}start(){this.transform.rotationX=90,super.start()}onUpdate(){this.transform.updateWorldMatrix(!0)}onGraphic(e){e=e.graphic3D.createCustomShape("PointLight_"+this.object3D.uuid,this.transform),e.buildAxis(),e.buildCircle(d.ZERO,this.range,32,d.X_AXIS),e.buildCircle(d.ZERO,this.range,32,d.Y_AXIS),e.buildCircle(d.ZERO,this.range,32,d.Z_AXIS)}debug(){}debugDraw(e){}}class Ch extends Zi{constructor(){super()}init(){super.init(),this.lightData.lightType=me.SpotLight,this.object3D.name==""&&(this.object3D.name="SpotLight"+Fe())}get innerAngle(){return this.lightData.innerAngle/this.lightData.outerAngle*100}set innerAngle(e){this.lightData.innerAngle=ze(e,0,100)/100*this.lightData.outerAngle,this.onChange()}get outerAngle(){return this.lightData.outerAngle*Dr*2}set outerAngle(e){this.lightData.outerAngle=ze(e,1,179)*ee*.5,this.onChange()}get radius(){return this.lightData.radius}set radius(e){this.lightData.radius=e,this.onChange()}get range(){return this.lightData.range}set range(e){this.lightData.range=e,this.onChange()}get at(){return this.lightData.linear}set at(e){this.lightData.linear=e,this.onChange()}start(){super.start(),this.lightData.lightType=me.SpotLight}onUpdate(){this.transform.updateWorldMatrix(!0)}onGraphic(t){var t=t.graphic3D.createCustomShape("SpotLight_"+this.object3D.uuid,this.transform),i=this.range,a=this.outerAngle/2,n=(t.buildAxis(),(90-a)*ee),o=i*Math.cos(n),h=i*Math.sin(n);t.buildLines([d.ZERO,new d(0,o,h)]),t.buildLines([d.ZERO,new d(o,0,h)]),n=(90+a)*ee,o=i*Math.cos(n),h=i*Math.sin(n),t.buildLines([d.ZERO,new d(0,o,h)]),t.buildLines([d.ZERO,new d(o,0,h)]),t.buildArcLine(d.ZERO,i,90-a,90+a,16,d.X_AXIS),t.buildArcLine(d.ZERO,i,90-a,90+a,16,d.Y_AXIS),t.buildCircle(new d(0,0,i*Math.sin(n)),i*Math.cos(n),32,d.Z_AXIS)}debug(){}debugDraw(e){}}class Qi extends ye{constructor(){super(),s(this,"skinJointsName"),s(this,"mInverseBindMatrixData"),s(this,"mInverseBindMatrixBuffer"),s(this,"mSkeletonAnimation"),s(this,"mJointIndexTableBuffer"),this.addRendererMask(Se.SkinnedMesh)}start(){var e;super.start(),this.skeletonAnimation=this.object3D.getComponent(Nt),this.skeletonAnimation||(0<(e=this.object3D.parentObject.parentObject.getComponentsInChild(Nt)).length&&(this.skeletonAnimation=e[0]),this.skeletonAnimation)||(this.skeletonAnimation=this.object3D.getComponentFromParent(Nt))}onEnable(){super.onEnable()}get skeletonAnimation(){return this.mSkeletonAnimation}set skeletonAnimation(e){(this.mSkeletonAnimation=e)&&!this.mJointIndexTableBuffer&&(e=this.mSkeletonAnimation.getJointIndexTable(this.skinJointsName),this.mJointIndexTableBuffer=new De(4*e.length,0,new Float32Array(e)),this.mJointIndexTableBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.COMPUTE)}get skinInverseBindMatrices(){return this.mInverseBindMatrixData}set skinInverseBindMatrices(e){this.mInverseBindMatrixData=e;var t=new Float32Array(16*e.length);for(let n=0;n<e.length;n++){var i=16*n,a=e[n];t.set(a,i)}this.mInverseBindMatrixBuffer=new De(t.byteLength,0,t),this.mInverseBindMatrixBuffer.visibility=GPUShaderStage.VERTEX|GPUShaderStage.COMPUTE}get inverseBindMatrixBuffer(){return this.mInverseBindMatrixBuffer}get jointIndexTableBuffer(){return this.mJointIndexTableBuffer.buffer}cloneTo(e){e=e.addComponent(Qi),e.geometry=this.geometry,e.material=this.material.clone(),e.castShadow=this.castShadow,e.castGI=this.castGI,e.receiveShadow=this.receiveShadow,e.rendererMask=this.rendererMask,e.skinJointsName=this.skinJointsName,e.skinInverseBindMatrices=this.skinInverseBindMatrices,e.mJointIndexTableBuffer=this.mJointIndexTableBuffer}nodeUpdate(e,t,i,a){for(let h=0;h<this.materials.length;h++){var n=this.materials[h].renderPasses.get(t);if(n)for(let l=0;l<n.length;l++){var o=n[l].renderShader;o.pipeline||(o.setStorageBuffer("jointsMatrixIndexTable",this.mSkeletonAnimation.jointMatrixIndexTableBuffer),o.setStorageBuffer("jointsInverseMatrix",this.mInverseBindMatrixBuffer),o.setStorageBuffer("jointsIndexMapingTable",this.mJointIndexTableBuffer))}}super.nodeUpdate(e,t,i,a)}}class Ji extends pt{get uvTransform_1(){return this.renderShader.uniforms.transformUV1.vector4}set uvTransform_1(e){this.renderShader.setUniformVector4("transformUV1",e)}get uvTransform_2(){return this.renderShader.uniforms.transformUV2.vector4}set uvTransform_2(e){this.renderShader.setUniformVector4("transformUV2",e)}get materialF0(){return this.renderShader.uniforms.materialF0.vector4}set materialF0(e){this.renderShader.setUniformVector4("materialF0",e)}get roughness(){return this.renderShader.uniforms.roughness.value}set roughness(e){this.renderShader.setUniformFloat("roughness",e)}get metallic(){return this.renderShader.uniforms.metallic.value}set metallic(e){this.renderShader.setUniformFloat("metallic",e)}get ao(){return this.renderShader.uniforms.ao.value}set ao(e){this.renderShader.setUniformFloat("ao",e)}get metallic_min(){return this.renderShader.uniforms.metallic_min.value}set metallic_min(e){this.renderShader.setUniformFloat("metallic_min",e)}get metallic_max(){return this.renderShader.uniforms.metallic_max.value}set metallic_max(e){this.renderShader.setUniformFloat("metallic_max",e)}get roughness_min(){return this.renderShader.uniforms.roughness_min.value}set roughness_min(e){this.renderShader.setUniformFloat("roughness_min",e)}get roughness_max(){return this.renderShader.uniforms.roughness_max.value}set roughness_max(e){this.renderShader.setUniformFloat("roughness_max",e)}get normalScale(){return this.renderShader.uniforms.normalScale.value}set normalScale(e){this.renderShader.setUniformFloat("normalScale",e)}get maskMap(){return this.renderShader.textures.maskMap}set maskMap(e){this.renderShader.setDefine("USE_ARMC",!0),this.renderShader.setTexture("maskMap",e)}set aoMap(e){e&&(this.renderShader.setTexture("aoMap",e),e!=b.res.whiteTexture)&&this.renderShader.setDefine("USE_AOTEX",!0)}get aoMap(){return this.renderShader.textures.aoMap}set clearCoatRoughnessMap(e){e&&(this.renderShader.setTexture("clearCoatRoughnessMap",e),this.renderShader.setDefine("USE_CLEARCOAT_ROUGHNESS",!0))}get clearCoatRoughnessMap(){return this.renderShader.textures.clearCoatRoughnessMap}get brdfLUT(){return this.renderShader.textures.brdfLUT}set brdfLUT(e){this.renderShader.setTexture("brdfLUT",e),this.renderShader.setTexture("brdflutMap",e)}get emissiveMap(){return this.renderShader.textures.emissiveMap}set emissiveMap(e){this.renderShader.setTexture("emissiveMap",e)}set envIntensity(e){this.renderShader.setUniformFloat("envIntensity",e)}get envIntensity(){return this.renderShader.uniforms.envIntensity.value}set ior(e){this.renderShader.setUniformFloat("ior",e)}get ior(){return this.renderShader.uniforms.ior.value}useCleanCoat(){this.renderShader.setDefine("USE_CLEARCOAT",!0)}set clearcoatFactor(e){this.renderShader.setUniformFloat("clearcoatFactor",e)}get clearcoatFactor(){return this.renderShader.uniforms.clearcoatFactor.value}set clearcoatRoughnessFactor(e){this.renderShader.setUniformFloat("clearcoatRoughnessFactor",e)}get clearcoatRoughnessFactor(){return this.renderShader.uniforms.clearcoatRoughnessFactor.value}set clearcoatWeight(e){this.renderShader.setUniformFloat("clearcoatWeight",e)}get clearcoatWeight(){return this.renderShader.uniforms.clearcoatWeight.value}set clearcoatColor(e){this.renderShader.setUniformColor("clearcoatColor",e)}get clearcoatColor(){return this.renderShader.uniforms.clearcoatColor.color}destroy(e){super.destroy(e)}}const os=class extends Ji{constructor(){super(),this.setShader("PBRLItShader","PBRLItShader");var r=this.getShader(),r=(r.setShaderEntry("VertMain","FragMain"),r.setDefine("USE_BRDF",!0),r.setDefine("USE_NORMALFILPY",b.setting.material.normalYFlip),r.shaderState),r=(r.acceptShadow=!0,r.castShadow=!0,r.receiveEnv=!0,r.acceptGI=!0,r.useLight=!0,b.res.getTexture("BRDFLUT"));this.brdfLUT=r,this.envIntensity=.75,this.materialF0=new G(.04,.04,.04,.96),this.baseMap=b.res.whiteTexture,this.normalMap=b.res.normalTexture,this.emissiveMap=b.res.blackTexture}clone(){var r,e,t=new os;for(r in t.baseMap=this.baseMap,t.normalMap=this.normalMap,t.aoMap=this.aoMap,t.brdfLUT=this.brdfLUT,this.maskMap&&(t.maskMap=this.maskMap),t.emissiveMap=this.emissiveMap,this.uvTransform_1&&(t.uvTransform_1=new G().copyFrom(this.uvTransform_1)),this.uvTransform_2&&(t.uvTransform_2=new G().copyFrom(this.uvTransform_2)),t.baseColor=this.baseColor.clone(),t.emissiveColor=this.emissiveColor.clone(),this.materialF0&&(t.materialF0=new G().copyFrom(this.materialF0)),t.envIntensity=this.envIntensity,t.normalScale=this.normalScale,t.roughness=this.roughness,t.metallic=this.metallic,t.ao=this.ao,t.roughness_min=this.roughness_min,t.roughness_max=this.roughness_max,t.metallic_min=this.metallic_min,t.metallic_max=this.metallic_max,t.emissiveIntensity=this.emissiveIntensity,t.alphaCutoff=this.alphaCutoff,t.ior=this.ior,t.clearcoatFactor=this.clearcoatFactor,t.clearcoatRoughnessFactor=this.clearcoatRoughnessFactor,this.clearcoatColor&&(t.clearcoatColor=this.clearcoatColor.clone()),t.clearcoatWeight=this.clearcoatWeight,t.transparent=this.transparent,t.cullMode=this.cullMode,t.blendMode=this.blendMode,t.shaderState.acceptShadow=this.shaderState.acceptShadow,t.shaderState.castShadow=this.shaderState.castShadow,t.shaderState.receiveEnv=this.shaderState.receiveEnv,t.shaderState.acceptGI=this.shaderState.acceptGI,t.shaderState.useLight=this.shaderState.useLight,this.renderShader.defineValue)t.renderShader.defineValue[r]=this.renderShader.defineValue[r];for(e in this.renderShader.constValues)t.renderShader.constValues[e]=this.renderShader.constValues[e];return t}debug(){}destroy(r){super.destroy(r)}};let Jt=os;s(Jt,"count",0);class Mh{static apply(e,t,i){var a=t.extensions;a&&a.KHR_materials_clearcoat&&(i.setDefine("USE_CLEARCOAT",!0),"clearcoatFactor"in(a=a.KHR_materials_clearcoat)&&(t.clearcoatFactor=a.clearcoatFactor,i.clearcoatFactor=t.clearcoatFactor),"clearcoatRoughnessFactor"in a)&&(t.clearcoatRoughnessFactor=a.clearcoatRoughnessFactor,i.clearcoatRoughnessFactor=t.clearcoatRoughnessFactor)}}class Eh{static apply(e,t,i){t=t.extensions,t&&t.KHR_materials_emissive_strength?(i.emissiveIntensity=.5*t.KHR_materials_emissive_strength.emissiveStrength,i.emissiveMap==b.res.blackTexture&&(i.emissiveMap=b.res.whiteTexture)):i.emissiveIntensity=1}}class Ph{static apply(e,t,i){t=t.extensions,t&&t.KHR_materials_unlit?i.supportLight=!0:i.supportLight=!1}}class Dh{constructor(e){s(this,"gltf"),s(this,"subParser"),s(this,"_testCount",8),s(this,"_hasCastShadow",!1),this.gltf=e.gltf,this.subParser=e}async convertNodeToObject3D(e,t){var i,a=new K;if(a.name=e.name,a[q.GLTF_NODE_INDEX_PROPERTY]=e.nodeId,e.nodeObj=a,e.matrix&&(e.translation=[0,0,0],e.rotation=[0,0,0,1],e.scale=[1,1,1]),e.translation&&(a.transform.x=e.translation[0],a.transform.y=e.translation[1],a.transform.z=e.translation[2]),e.rotation&&((i=new $).setFromArray(e.rotation),a.transform.localRotQuat=i),e.scale&&(a.transform.scaleX=e.scale[0],a.transform.scaleY=e.scale[1],a.transform.scaleZ=e.scale[2]),t.addChild(a),e.light&&this.convertLight(e,a),e.primitives&&this.convertprimitives(e,a),e.skeleton){var n=a.addComponent(Nt);if(n){n.skeleton=this.subParser.parseSkeleton(e.skeleton.skeleton);for(let h=0;h<this.gltf.animations.length;h++){var o=this.gltf.animations[h],o=(o.name||(o.name=h.toString()),this.subParser.parseSkeletonAnimation(n.skeleton,o));n.addAnimationClip(o)}}}return a}convertLight(e,t){switch(e.light.type){case"directional":var i=t.addComponent(ns);t.name=e.light.name,i.intensity=.1*e.light.intensity,i.radius=Number.MAX_SAFE_INTEGER,i.dirFix=-1,this._hasCastShadow||(this._hasCastShadow=!0,i.castShadow=this._hasCastShadow),i.lightColor=e.light.color?new x(e.light.color[0],e.light.color[1],e.light.color[2]):new x(1,1,1,1),i.debug();break;case"point":0<this._testCount&&((i=t.addComponent(Th)).name=e.light.name,i.intensity=e.light.intensity?8*e.light.intensity*2:1,i.radius=8,i.at=2,i.range=e.light.range||8,i.lightColor=e.light.color?new x(e.light.color[0],e.light.color[1],e.light.color[2]):new x(1,1,1,1)),this._testCount--;break;case"spot":i=t.addComponent(Ch),i.name=e.light.name,i.intensity=5*e.light.intensity,i.radius=1,i.dirFix=-1,i.at=2,i.range=e.light.range||8,i.outerAngle=e.light.spot.outerConeAngle*Dr,i.lightColor=e.light.color?new x(e.light.color[0],e.light.color[1],e.light.color[2]):new x(1,1,1,1)}}convertprimitives(e,t){for(let N=0;N<e.primitives.length;N++){var i,a,n,o,h,l,u=e.primitives[N],c=(u.modelName,u.material);c.name==null&&(c.name=Fe());let j,de="matkey_"+c.name;if(c&&this.gltf.resources[de])j=this.gltf.resources[de];else{let H=j=new Jt;(this.gltf.resources[de]=H).name=c.name,u.material&&({baseColorTexture:c,baseColorFactor:f,metallicFactor:y,roughnessFactor:p,doubleSided:C,metallicRoughnessTexture:O,normalTexture:R,occlusionTexture:i,emissiveTexture:a,emissiveFactor:n,enableBlend:o,alphaCutoff:l}=u.material,h=H=this.applyMaterialExtensions(u.material,H),"enableBlend"in u.material&&(u.material.enableBlend?h.blendMode=ae.NORMAL:h.blendMode=ae.NONE,u.material.defines)&&u.material.defines.indexOf("ALPHA_BLEND")!=-1&&(h.blendMode=ae.ALPHA,h.transparent=!0),"alphaCutoff"in u.material&&0<l&&(h.alphaCutoff=l,h.blendMode=ae.NORMAL,h.transparent=!0),u.material.transformUV1&&(h.uvTransform_1=u.material.transformUV1),u.material.transformUV2&&(h.uvTransform_2=u.material.transformUV2),h.baseColor=new x(f[0],f[1],f[2],f[3]),h.roughness=p,h.metallic=y,h.doubleSide=C,c&&(h.baseMap=c),R&&(h.normalMap=R),O&&(h.maskMap=O),i&&O!=i&&(h.aoMap=i),a&&(h.emissiveMap=a),n&&(0<n[0]||0<n[1]||0<n[2])&&(h.emissiveMap&&h.emissiveMap==b.res.blackTexture&&(h.emissiveMap=b.res.whiteTexture),l=n[3]||1,h.emissiveColor=new x(n[0],n[1],n[2],l),h.emissiveIntensity=1),b.setting.material.materialDebug)&&h.debug()}var{attribArrays:f,modelName:p}=u;let W;if(!f.indices.data){var m=[],_=f.position.data.length/3/3;for(let H=0;H<_;H++){var v=3*H;m.push(2+v),m.push(0+v),m.push(1+v)}f.indices={data:new Uint8Array(m),normalize:!1,numComponents:1}}if(!f.normal){var S=[],T=f.position.data.length/3;for(let H=0;H<T;H++)S.push(0),S.push(0),S.push(0);f.normal={data:new Float32Array(S),normalize:!1,numComponents:3}}if(f.indices.data&&3<f.indices.data.length){var y=u.meshName(),C=(this.gltf.resources[y]?W=this.gltf.resources[y]:(W=W||this.createGeometryBase(y,f,u),this.gltf.resources[y]=W),new K);if(C.name=p+N,this.gltf.animations&&f[z.joints0]!=null){if(W=W||this.createGeometryBase(p,f,u),this.gltf.resources[y]=W,c=this.gltf.nodes[e.skin.skeleton],c.dnode&&c.dnode.nodeObj){var I=c.dnode.nodeObj.addComponent(Nt);if(I){I.skeleton=this.subParser.parseSkeleton(e.skin.skeleton);for(let H=0;H<this.gltf.animations.length;H++){var L=this.gltf.animations[H],L=(L.name||(L.name=H.toString()),this.subParser.parseSkeletonAnimation(I.skeleton,L));I.addAnimationClip(L)}}}else c.dnode.skeleton=e.skin;var R=C.addComponent(Qi);R.castShadow=!0,R.castGI=!0,R.geometry=W,R.material=j,R.skinJointsName=this.parseSkinJoints(e.skin),R.skinInverseBindMatrices=e.skin.inverseBindMatrices}else{W=W||this.createGeometryBase(p,f,u),(this.gltf.resources[y]=W).hasAttribute(z.joints0)&&W.vertexAttributeMap.delete(z.joints0);var O=C.addComponent(ye);O.castShadow=!0,O.castGI=!0,O.geometry=W,O.material=j}e.skin&&e.skin.defines,t.addChild(C)}}}createGeometryBase(e,t,i){var a=new Xe,n=(a.name=e,a.morphTargetsRelative=i.morphTargetsRelative,i.targetNames);if(n&&0<n.length){var o=a.morphTargetDictionary={};for(let c=0;c<n.length;c++)o[n[c]]=c}if(a.morphTargetDictionary){var h=t.position.data.length/3,l=new Float32Array(h);for(let c=0;c<h;c++)l[c]=c;t.vIndex={data:l,normalize:!1,numComponents:1}}for(const c in t){var u=t[c];a.setAttribute(c,u.data)}return e=a.getAttribute(z.indices),a.addSubGeometry({indexStart:0,indexCount:e.data.length,vertexStart:0,index:0}),a}applyMaterialExtensions(e,t){return Mh.apply(this.gltf,e,t),Ph.apply(this.gltf,e,t),Eh.apply(this.gltf,e,t),t}parseSkinJoints(e){var t,i=[];for(t of e.joints){var a=this.gltf.nodes[t];i.push(a.name)}return i}}class Oi{constructor(){s(this,"currentSceneName"),s(this,"gltf"),s(this,"initUrl"),s(this,"_generator"),s(this,"_version"),s(this,"_BASE64_MARKER",";base64,"),s(this,"_cameraParser",null),s(this,"_meshParser",null),s(this,"_materialParser",null),s(this,"_skinParser",null),s(this,"_skeletonParser",null),s(this,"_converter",null)}get version(){return this.version||(this.gltf?this.gltf.asset?(this._version=this.gltf.asset.version,this.gltf.asset.minVersion&&(this._version+="\r minVersion"+this.gltf.asset.minVersion),this.version):this.errorMiss("asset"):(console.warn("glTF not loaded."),null))}async parse(n,a,i){this.gltf=a,this.initUrl=n;var{version:a,generator:n}=this.gltf.asset;return this._generator=n,a!=="2.0"?(console.error("GLTFParser only support glTF 2.0 for now! Received glTF version: "+this.version),!1):(n={nodes:await this.parseScene(i),animations:this.parseAnimations(),name:this.currentSceneName},this.convertToNode(n))}destory(){ai.unload(this.gltf),this.gltf=null}async parseScene(t){var t=t||this.gltf.scene||0,i=this.gltf.scenes[t];if("u"<typeof i)return this.errorMiss("scene",t);this.currentSceneName=i.name||"GLTF_NO_NAME_SCENE";var a=[],n=i.nodes;for(let h=0;h<n.length;h++){var o=await this.parseNode(n[h]);o&&a.push(o)}return a}async parseNode(e){var t=this.gltf.nodes[e];if(!t)return this.errorMiss("node",e);if(!t.isParsed){var{name:i,matrix:a,translation:n,rotation:o,scale:h}=t,l={name:i,matrix:a,translation:n,rotation:o,scale:h,nodeId:e,camera:null,primitives:null,skin:null,children:null,light:null};if(t.camera!==void 0&&(l.camera=this.parseCamera(t.camera)),t.mesh!==void 0&&(l.primitives=await this.parseMesh(t.mesh)),t.extensions!==void 0&&this.applyNodeExtensions(t,l),t.skin!==void 0&&(i=this.parseSkin(t.skin))&&(l.skin=i),l.children=[],t.children)for(let u=0;u<t.children.length;u++)l.children.push(await this.parseNode(t.children[u]));t.dnode=l,t.isParsed=!0}return t.dnode}errorMiss(e,t){throw new Error(e+t)}parseCamera(e){return this._cameraParser||(this._cameraParser=new mh(this.gltf)),this._cameraParser.parse(e)}async parseMesh(e){return this._meshParser||(this._meshParser=new gh(this)),this._meshParser.parse(e)}async parseTexture(e){var t,i,a,n=this.gltf.textures[e];return n&&!n.dtexture&&(n&&n.source!=null?(t=this.gltf.images[n.source]).uri?(a=t.uri,a=Me.getURLName(a),n.dtexture=this.gltf.resources[a]):t.bufferView?(a=this.parseBufferView(t.bufferView),i=new Pt,a=new Blob([a],{type:t.mimeType}),await i.loadFromBlob(a),n.dtexture=i):n.dtexture=this.gltf.resources[t.name]:n.name&&(a=Me.getURLName(n.name),n.dtexture=this.gltf.resources[a])),n.dtexture||console.log("miss texture , please check texture!",e,n),n.dtexture}async parseMaterial(e){return this._materialParser||(this._materialParser=new vh(this)),this._materialParser.parse(e)}parseAnimations(){return[]}async parseObject3D(e,t){return this._converter||(this._converter=new Dh(this)),this._converter.convertNodeToObject3D(e,t)}parseSkeleton(e){return this._skeletonParser||(this._skeletonParser=new Ma(this)),this._skeletonParser.parse(e)}parseSkeletonAnimation(e,t){return this._skeletonParser||(this._skeletonParser=new Ma(this)),this._skeletonParser.parseSkeletonAnimation(e,t)}async trivarse(e,t){for(let a=0;a<t.length;a++){var i=await this.parseObject3D(t[a],e);await this.trivarse(i,t[a].children)}}async convertToNode(e){var t=new K,i=(t.name=e.name,e.nodes);return e.animations,await this.trivarse(t,i),{rootNode:t,textures:[],animations:void 0,cameras:[]}}parseSkin(e){return this._skinParser||(this._skinParser=new _h(this)),this._skinParser.parse(e)}parseAccessor(e){var t=this.gltf.accessors[e];if(!t)return this.errorMiss("accessor",e);if(!t.isParsed){t.isParsed=!0,t.daccessor=!1;var e=!!t.normalized,i=this.gltf.bufferViews[t.bufferView],a=i&&i.byteStride,n=Ta(t.componentType);let m=1;switch(t.type){case"SCALAR":m=1;break;case"VEC2":m=2;break;case"VEC3":m=3;break;case"VEC4":case"MAT2":m=4;break;case"MAT3":m=9;break;case"MAT4":m=16;break;default:m=0}if(m===0)return console.error("glTF has unknown data type in accessor: "+t.type),!1;var o=m*n.BYTES_PER_ELEMENT;let _;if(i!==void 0){if(!(_=this.parseBufferView(t.bufferView)))return t.daccessor}else _=new Uint8Array(o*t.count).buffer;let v=this.getTypedArrayFromArrayBuffer(_,a,t.byteOffset||0,n,m,t.count);if(t.sparse){var{count:i,indices:o,values:a}=t.sparse,c=(v=new n(v),o.byteOffset||0),u=this.gltf.bufferViews[o.bufferView],h=Ta(o.componentType),o=this.parseBufferView(o.bufferView),l=this.getTypedArrayFromArrayBuffer(o,u.byteStride,c,h,1,i),o=a.byteOffset||0,u=this.gltf.bufferViews[a.bufferView],c=this.parseBufferView(a.bufferView),f=this.getTypedArrayFromArrayBuffer(c,u.byteStride,o,n,m,i);for(let C=0;C<l.length;C++)v.set(f.slice(C*m,C*m+m),l[C]*m)}t.computeResult={typedArray:v,arrayType:n,numComponents:m},t.daccessor={data:v,numComponents:m,normalize:e}}return t.daccessor}getTypedArrayFromArrayBuffer(e,t,i,a,n,o){let h;var l=n*a.BYTES_PER_ELEMENT;if(t&&l!==t){h=new a(n*o);for(let c=0;c<o;c++){var u=new a(e,i+c*t,n);for(let f=0;f<n;f++)h[c*n+f]=u[f]}}else h=new a(e,i,o*n);return h}parseBufferView(e){var t,i,a,n=this.gltf.bufferViews[e];return n?(!n.isParsed&&(n.isParsed=!0,n.dbufferView=!1,a=this.parseBuffer(n.buffer))&&({byteOffset:t,byteLength:i}=n,a=new Uint8Array(a,t||0,i),n.dbufferView=new Uint8Array(a).buffer),n.dbufferView):this.errorMiss("bufferView",e)}parseBuffer(e){var t=this.gltf.buffers[e];if(!t)return this.errorMiss("buffer",e);if(!t.isParsed)if(t.isParsed=!0,t.dbuffer=!1,t.uri.substring(0,5)!=="data:"){var i=t.uri,a=this.gltf.resources[i];a?a.byteLength===t.byteLength?t.dbuffer=this.gltf.resources[i]:console.error(`load gltf resource "${i}" at buffers[${e} failed, ArrayBuffer.byteLength not equals buffer's byteLength]`):console.error(`load gltf resource "${i}" at buffers[${e}] failed`)}else{var a=t.uri.indexOf(this._BASE64_MARKER)+this._BASE64_MARKER.length,n=window.atob(t.uri.substring(a)),o=new Uint8Array(n.length);for(let l=0;l<n.length;l++)o[l]=n.charCodeAt(l);t.dbuffer=o.buffer}return t.dbuffer}getLight(e){return this.gltf.extensions.KHR_lights_punctual.lights[e]}applyNodeExtensions(e,t){e=e.extensions,e.KHR_lights_punctual&&this.gltf.extensions.KHR_lights_punctual&&(t.light=this.getLight(e.KHR_lights_punctual.light))}}class Ih{constructor(){s(this,"magic"),s(this,"version"),s(this,"length")}}class Rh{constructor(){s(this,"chunkLength"),s(this,"chunkType"),s(this,"chunkData")}}class $i extends mt{constructor(){super(...arguments),s(this,"_gltf")}async parseBuffer(i){var t=new Uint8Array(i),i=(t.pos=0,this.parseHeader(t));if(i.magic!=1179937895)return console.error("invalid GLB file"),!1;if(i.version!==2)return console.error("GLBParser only support glTF 2.0 for now! Received glTF version: "+i.version),!1;for(var a=[];t.pos<t.length;){var n=this.parseChunk(t);a.push(n)}if(a[0].chunkType!=1313821514)return console.error("invalid GLBChunk"),!1;let o="",h=a[0].chunkData;for(let m=0;m<h.length;m+=65535){var l=h.length-m,l=Math.min(l,65535),l=h.subarray(m,m+l);o+=String.fromCharCode(...l)}i=JSON.parse(o),this._gltf=new Ri,this._gltf={...this._gltf,...i},this._gltf.resources={};for(let m=0;m<this._gltf.buffers.length;m++){var u=this._gltf.buffers[m];u.isParsed=!0,u.dbuffer=a[m+1].chunkData.buffer}if(this._gltf.images)for(let m=0;m<this._gltf.images.length;m++){var c=this._gltf.images[m],f=(c.name=c.name||"bufferView_"+c.bufferView.toString(),this._gltf.bufferViews[c.bufferView]),p=this._gltf.buffers[f.buffer],p=new Uint8Array(p.dbuffer,f.byteOffset,f.byteLength),f=new Blob([p],{type:c.mimeType}),p=new Pt;await p.loadFromBlob(f),p.name=c.name,this._gltf.resources[c.name]=p}return i=await new Oi().parse(this.initUrl,this._gltf,this._gltf.scene),i?(this.data=i.rootNode,i.rootNode):null}async parseJsonAndBuffer(e,t){if(this._gltf=new Ri,this._gltf={...this._gltf,...e},this._gltf.resources={},e=this._gltf.buffers[0],e.isParsed=!0,e.dbuffer=t,this._gltf.images)for(let o=0;o<this._gltf.images.length;o++){var i=this._gltf.images[o],a=(i.name=i.name||"bufferView_"+i.bufferView.toString(),this._gltf.bufferViews[i.bufferView]),n=this._gltf.buffers[a.buffer],n=new Uint8Array(n.dbuffer,a.byteOffset,a.byteLength),a=new Blob([n],{type:i.mimeType}),n=new Pt;await n.loadFromBlob(a),n.name=i.name,this._gltf.resources[i.name]=n}return e=await new Oi().parse(this.initUrl,this._gltf,this._gltf.scene),e?(this.data=e.rootNode,e.rootNode):null}verification(){if(this.data)return!0;throw new Error("Method not implemented.")}parseHeader(e){var i=e.pos,t=new Ih,i=new Uint32Array(e.buffer,i,3);return e.pos+=i.byteLength,t.magic=i[0],t.version=i[1],t.length=i[2],t}parseChunk(e){var a=e.pos,t=new Rh,i=new Uint32Array(e.buffer,a,2),a=e.pos+=i.byteLength,n=(t.chunkLength=i[0],t.chunkType=i[1],t.chunkData=new Uint8Array(e.buffer,a,t.chunkLength),new Uint8Array(t.chunkLength));for(let o=0;o<t.chunkLength;o++)n[o]=t.chunkData[o];return t.chunkData=n,e.pos+=t.chunkLength,t}}s($i,"format","bin");class hs extends mt{constructor(){super(...arguments),s(this,"textData",""),s(this,"source_vertices"),s(this,"source_normals"),s(this,"source_tangents"),s(this,"source_textureCoords"),s(this,"matLibs"),s(this,"geometrys"),s(this,"activeGeo"),s(this,"facesMaterialsIndex"),s(this,"mtl"),s(this,"mtlUrl")}async parseString(e){return this.source_vertices=[],this.source_normals=[],this.source_tangents=[],this.source_textureCoords=[],this.matLibs={},this.geometrys={},this.textData=e,await Promise.all([this.parserOBJ(),this.loadMTL()]),this.parser_mesh(),"null"}applyVector2(e,t,i){t[e]&&0<t[e].length?(i.push(t[e][0]),i.push(t[e][1])):(i.push(0),i.push(0))}applyVector3(e,t,i){i.push(t[e][0]),i.push(t[e][1]),i.push(t[e][2])}applyVector4(e,t,i){i.push(t[e][0]),i.push(t[e][1]),i.push(t[e][2]),i.push(t[e][3])}async loadMTL(){let e=await new Ne().loadTxt(this.baseUrl+this.mtlUrl),t=e.data,i,a=t.split(`\r
`);for(let l=0;l<a.length;l++){let u=a[l];var n=u.indexOf("#"),n=(u=(u=n!=-1?u.substring(0,n):u).trim()).split(/\s+/);n[0]==="newmtl"?(i={name:n[1]},this.matLibs[n[1]]=i):n[0].indexOf("map_")!=-1?(i[n[0]]=n[1],i.textures||(i.textures=[n[n.length-1]]),i.textures.push(n[n.length-1])):n.length==2?i[n[0]]=Number(n[1]):n.length==3?i[n[0]]=[Number(n[1]),Number(n[2])]:n.length==4&&(i[n[0]]=[Number(n[1]),Number(n[2]),Number(n[3])])}for(const l in this.matLibs){var o=this.matLibs[l];if(o.textures&&0<o.textures.length)for(let u=0;u<o.textures.length;u++){var h=Me.normalizePath(this.baseUrl+o.textures[u]);await b.res.loadTexture(h)}}return!0}async load_textures(){}parserLine(e){var t=e.indexOf("#"),i=(t!=-1&&(e.indexOf("# object")!=-1&&(a=(i=e.split(/\s+/))[1],n=i[2],this.activeGeo={type:a,name:n[1],source_mat:"",source_faces:[]},this.geometrys[n]=this.activeGeo),e=e.substring(0,t)),(e=e.trim()).split(/\s+/));if(i[0]==="v"){var a=[Number(i[1]),Number(i[2]),Number(i[3]),i[4]?1:Number(i[4])];this.source_vertices.push(a)}else if(i[0]==="vt"){var n=[Number(i[1]),Number(i[2]),i[3]?1:Number(i[3])];this.source_textureCoords.push(n)}else if(i[0]==="vn")t=[Number(i[1]),Number(i[2]),Number(i[3])],this.source_normals.push(t);else if(i[0]==="f"){for(var o={indices:[],texture:[],normal:[]},h=1;h<i.length;++h){var l=i[h].indexOf("//"),u=i[h].split(/\W+/);0<l?(o.indices.push(u[0]),o.normal.push(u[1])):u.length===1?o.indices.push(u[0]):u.length===2?(o.indices.push(u[0]),o.texture.push(u[1])):u.length===3&&(o.indices.push(u[0]),o.texture.push(u[1]),o.normal.push(u[2]))}this.activeGeo.source_faces.push(o)}else i[0]==="usemtl"?this.activeGeo.source_mat=i[1]:i[0]==="mtllib"&&(this.mtlUrl=i[1])}async parserOBJ(){var e=this.textData.split(`\r
`);for(let i=0;i<e.length;i++){var t=e[i];this.parserLine(t)}return!(this.textData="")}async parser_mesh(){for(const T in this.geometrys){var e=this.geometrys[T];e.vertex_arr=[],e.normal_arr=[],e.uv_arr=[],e.indeice_arr=[];let y=0;for(let C=0;C<e.source_faces.length;C++){var t=e.source_faces[C],i=parseInt(t.indices[0])-1,a=parseInt(t.indices[1])-1,n=parseInt(t.indices[2])-1,o=parseInt(t.normal[0])-1,h=parseInt(t.normal[1])-1,l=parseInt(t.normal[2])-1,u=parseInt(t.texture[0])-1,c=parseInt(t.texture[1])-1,f=parseInt(t.texture[2])-1;this.applyVector3(i,this.source_vertices,e.vertex_arr),this.applyVector3(o,this.source_normals,e.normal_arr),this.applyVector2(u,this.source_textureCoords,e.uv_arr),e.indeice_arr[y]=y++,this.applyVector3(a,this.source_vertices,e.vertex_arr),this.applyVector3(h,this.source_normals,e.normal_arr),this.applyVector2(c,this.source_textureCoords,e.uv_arr),e.indeice_arr[y]=y++,this.applyVector3(n,this.source_vertices,e.vertex_arr),this.applyVector3(l,this.source_normals,e.normal_arr),this.applyVector2(f,this.source_textureCoords,e.uv_arr),e.indeice_arr[y]=y++,3<t.indices.length&&(a=parseInt(t.indices[3])-1,h=parseInt(t.normal[3])-1,c=parseInt(t.texture[3])-1,this.applyVector3(i,this.source_vertices,e.vertex_arr),this.applyVector3(o,this.source_normals,e.normal_arr),this.applyVector2(u,this.source_textureCoords,e.uv_arr),e.indeice_arr[y]=y++,this.applyVector3(n,this.source_vertices,e.vertex_arr),this.applyVector3(l,this.source_normals,e.normal_arr),this.applyVector2(f,this.source_textureCoords,e.uv_arr),e.indeice_arr[y]=y++,this.applyVector3(a,this.source_vertices,e.vertex_arr),this.applyVector3(h,this.source_normals,e.normal_arr),this.applyVector2(c,this.source_textureCoords,e.uv_arr),e.indeice_arr[y]=y++)}var p=new K;for(const C in this.geometrys){var v=this.geometrys[C],m=new Xe,_=(m.setIndices(new Uint32Array(v.indeice_arr)),m.setAttribute(z.position,new Float32Array(v.vertex_arr)),m.setAttribute(z.normal,new Float32Array(v.normal_arr)),m.setAttribute(z.uv,new Float32Array(v.uv_arr)),m.setAttribute(z.TEXCOORD_1,new Float32Array(v.uv_arr)),m.addSubGeometry({indexStart:0,indexCount:v.indeice_arr.length,vertexStart:0,index:0}),new Jt),v=this.matLibs[v.source_mat],v=(_.baseMap=b.res.getTexture(Me.normalizePath(this.baseUrl+v.map_Kd)),new K),S=v.addComponent(ye);S.geometry=m,S.material=_,p.addChild(v)}this.data=p}}verification(){if(this.data)return!0;throw new Error("Method not implemented.")}}s(hs,"format","text");let Lh=`
    struct ImageSize {
        srcWidth: i32,
            srcHeight : i32,
                dstWidth : i32,
                    dstHeight : i32,
    };

    @group(0) @binding(0) var<uniform>size : ImageSize;
    @group(0) @binding(1) var inputTexture: texture_2d<f32>;
    @group(0) @binding(2) var outputTexture: texture_storage_2d<rgba8unorm, write>;

    @compute @workgroup_size(8, 8, 1)
    fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
        var uv: vec2<f32> = vec2<f32>(f32(GlobalInvocationID.x) / f32(size.dstWidth), f32(GlobalInvocationID.y) / f32(size.dstHeight));
        uv = uv * vec2<f32>(f32(size.srcWidth), f32(size.srcHeight));
        var dstId: vec2<i32> = vec2<i32>(i32(GlobalInvocationID.x), i32(GlobalInvocationID.y));
        var srcId: vec2<i32> = vec2<i32>(i32(GlobalInvocationID.x * 2u), i32(GlobalInvocationID.y * 2u));
        textureStore(outputTexture, dstId, textureLoad(inputTexture, srcId, 0));
    }
`,Oh=`
    struct ImageSize {
        srcWidth: i32,
            srcHeight : i32,
                dstWidth : i32,
                    dstHeight : i32,
    };

    @group(0) @binding(0) var<uniform>size : ImageSize;
    @group(0) @binding(1) var inputTexture: texture_2d<f32>;
    @group(0) @binding(2) var outputTexture: texture_storage_2d<rgba8unorm, write>;

    fn repeat_i32(id: i32, max: i32) -> i32 {
        var ret = id;
        if (id < 0) {
            ret = max + id;
        }
        if (id >= max) {
            ret = id - max;
        }
        return ret;
    }

    fn clamp_i32(id: i32, max: i32) -> i32 {
        var ret = id;
        if (id < 0) {
            ret = 0;
        }
        if (id >= max) {
            ret = max - 1;
        }
        return ret;
    }

    fn blur(idx: u32) -> vec4 < f32 > {
        var id: vec2<i32>;
        id.y = i32(idx) / size.srcWidth;
        id.x = i32(idx) - i32(id.y) * size.srcWidth;
        var _BlurSpread: i32 = 1;
        var result = vec4<f32>(0.0, 0.0, 0.0, 0.0);
        let g: array < f32, 3u > = array<f32, 3u > (0.4026, 0.2442, 0.0545);
        var uv: vec2<i32>;
        for(var h: i32 = 0; h< 5; h = h + 1) {
        let offsetU: i32 = (h - 2) * _BlurSpread;
        uv.x = id.x + offsetU;
        uv.x = clamp_i32(uv.x, size.srcWidth);
        for (var v: i32 = 0; v < 5; v = v + 1) {
            let offsetV: i32 = (v - 2) * _BlurSpread;
            uv.y = id.y + offsetV;
            uv.y = clamp(uv.y, 0, size.srcHeight);
            let weightU: i32 = abs(h - 2);
            let weightV: i32 = abs(v - 2);
            let resultWeight: f32 = g[weightU] * g[weightV];
            var colorf32: vec4<f32> = textureLoad(inputTexture, uv, 0);
            let sampleColor: vec4<f32> = vec4<f32>(colorf32 * resultWeight);
            result = result + sampleColor;
        }
    }

    return result;
    }

    @compute @workgroup_size(8, 8, 1)
    fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
        var uv: vec2<f32> = vec2<f32>(f32(GlobalInvocationID.x) / f32(size.dstWidth), f32(GlobalInvocationID.y) / f32(size.dstHeight));
        uv = uv * vec2<f32>(f32(size.srcWidth), f32(size.srcHeight));
        let srcIdx = i32(uv.y) * size.srcWidth + i32(uv.x);
        var dstId: vec2<i32> = vec2<i32>(i32(GlobalInvocationID.x), i32(GlobalInvocationID.y));
        textureStore(outputTexture, dstId, blur(u32(srcIdx)));
    }
`;class Ah{static blurImageFromTexture(u,t,i,n){var l=M.device,n=n?Oh:Lh,n=l.createComputePipeline({layout:"auto",compute:{module:l.createShaderModule({code:n}),entryPoint:"main"}}),o=l.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),h=(l.queue.writeBuffer(o,0,new Uint32Array([u.width,u.height,t,i])),l.createTexture({size:[t,i,1],mipLevelCount:1,format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC|GPUTextureUsage.RENDER_ATTACHMENT,label:"blurImageFromTexture"})),u=[{binding:0,resource:{buffer:o,size:16}},{binding:1,resource:u.gpuTexture.createView({format:"rgba8unorm",dimension:"2d",baseMipLevel:0,mipLevelCount:1})},{binding:2,resource:h.createView({format:"rgba8unorm",dimension:"2d",baseMipLevel:0,mipLevelCount:1})}],l=l.createBindGroup({layout:n.getBindGroupLayout(0),entries:u}),u=w.beginCommandEncoder(),c=u.beginComputePass();return c.setPipeline(n),c.setBindGroup(0,l),c.dispatchWorkgroups(Math.floor(t/8),Math.floor(i/8)),c.end(),w.endCommandEncoder(u),o.destroy(),h}}class ea extends st{constructor(){super(4,4),s(this,"width",4),s(this,"height",4),s(this,"depthOrArrayLayers",6),s(this,"visibility",GPUShaderStage.FRAGMENT),s(this,"textureBindingLayout",{viewDimension:"cube",multisampled:!1}),s(this,"samplerBindingLayout",{type:"filtering"}),this.addressModeU=it.clamp_to_edge,this.addressModeV=it.clamp_to_edge,this.addressModeW=it.clamp_to_edge,this.magFilter=this.minFilter="linear",this.mipmapFilter="linear",this.visibility=GPUShaderStage.FRAGMENT}createTextureDescriptor(e,t,i,a,n=GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.RENDER_ATTACHMENT,o=1){this.width=e,this.height=t,this.format=a,this.usage=n,this.textureDescriptor={size:{width:e,height:t,depthOrArrayLayers:6},mipLevelCount:i,format:a,usage:n,dimension:"2d"},this.viewDescriptor=1<o?{dimension:"cube-array"}:{dimension:this.textureBindingLayout.viewDimension}}}const ls=class{static createFace(n,e,o,h){var l=M.device,a=(this.pipeline==null&&(this.pipeline=l.createComputePipeline({layout:"auto",compute:{module:l.createShaderModule({code:ls.createCube}),entryPoint:"main"}})),this.pipeline),n=(this.configBuffer||(this.configBuffer=l.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),l.queue.writeBuffer(this.configBuffer,0,new Uint32Array([n,0,0,0])),this.blurSettingBuffer||(this.blurSettingBuffer=l.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),l.queue.writeBuffer(this.blurSettingBuffer,0,new Float32Array([0,0,0,0])),[{binding:0,resource:{buffer:this.configBuffer,size:16}},{binding:1,resource:o.getGPUView()},{binding:2,resource:h.getGPUView()}]),o=l.createBindGroup({layout:a.getBindGroupLayout(0),entries:n}),h=w.beginCommandEncoder(),l=h.beginComputePass();l.setPipeline(a),l.setBindGroup(0,o),l.dispatchWorkgroups(e/8,e/8),l.end(),w.endCommandEncoder(h)}};let _r=ls;s(_r,"createCube",`

struct SettingUniform {
  faceIndex : i32,
  srcHeight : i32,
  dstWidth : i32,
  dstHeight : i32
};

@group(0) @binding(0) var<uniform> settingUniform : SettingUniform;
@group(0) @binding(1) var inputTex : texture_2d<f32>;
@group(0) @binding(2) var outTex : texture_storage_2d<rgba8unorm, write>;

@compute @workgroup_size(8, 8, 1)
fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
  let coord = vec2<i32>(GlobalInvocationID.xy);
  
  let outTexSize = textureDimensions(outTex).xy;
  let outTexel = 1.0 / vec2<f32>(outTexSize - 1);
  
  let uv_0 = vec2<f32>(coord) * outTexel;
  var oc = samplePixel(settingUniform.faceIndex, uv_0);
  textureStore(outTex, coord, oc);
}

fn samplePixel(face:i32, uv01:vec2<f32>) -> vec4<f32> {
    let rectangle_v2_f32 = round(vec2<f32>(0.25, 0.33333) * vec2<f32>(textureDimensions(inputTex).xy));
    let rectangle = vec2<i32>(rectangle_v2_f32);
    
    var offsetIndex = vec2<i32>(0);
    if(face == 0){
        offsetIndex.x = 2;
        offsetIndex.y = 1;
    }else if(face == 1){
        offsetIndex.x = 0;
        offsetIndex.y = 1;
    }else if(face == 2){
        offsetIndex.x = 1;
        offsetIndex.y = 0;
    }else if(face == 3){
        offsetIndex.x = 1;
        offsetIndex.y = 2;
    }else if(face == 4){
        offsetIndex.x = 1;
        offsetIndex.y = 1;
    }else if(face == 5){
        offsetIndex.x = 3;
        offsetIndex.y = 1;
    }
    
    let coordOffset = rectangle * offsetIndex;
    let coordIndex = vec2<i32>(vec2<f32>(rectangle - 1) * uv01);
    var oc = textureLoad(inputTex, coordOffset + coordIndex, 0);
    return oc;
}
`),s(_r,"configBuffer",null),s(_r,"blurSettingBuffer",null),s(_r,"pipeline");class Ea extends ea{constructor(){super(),s(this,"_images"),s(this,"_url"),this.useMipmap=!0}generateImages(e){var t=M.device;this.width=this.height=32,"width"in e[0]&&(this.width=this.height=e[0].width);let i=Math.min(this.width,this.height);for(this.mipmapCount=1;16<i;)i/=2,this.mipmapCount++;this.textureBindingLayout.viewDimension="cube",this.samplerBindingLayout.type="filtering",this.createTextureDescriptor(this.width,this.height,this.mipmapCount,this.format),this.textureDescriptor.size={width:this.width,height:this.height,depthOrArrayLayers:6},this.textureDescriptor.dimension="2d",this.gpuTexture=t.createTexture(this.textureDescriptor);let a=[],n,o=this.width,h=this.height;if(e[0]instanceof st){for(let f=0;f<6;f++){var l=e[f];a[f]=l.getGPUTexture()}this.uploadMipmapGPUTexture(0,this.width,this.width,a)}else{this.uploadBaseImages(this.width,e);for(let f=0;f<6;f++){var u=new Pt(!1);u.format=this.format,u.source=e[f],a[f]=u.getGPUTexture()}}for(let f=1;f<this.mipmapCount;f++){n=a,a=[];var c={width:o,height:h,gpuTexture:null};o/=2,h/=2;for(let p=0;p<6;p++)c.gpuTexture=n[p],a[p]=Ah.blurImageFromTexture(c,o,h,!1);this.uploadMipmapGPUTexture(f,o,h,a)}this.gpuSampler=t.createSampler(this)}uploadBaseImages(e,t){var i=M.device,a=w.beginCommandEncoder();for(let n=0;n<6;n++)i.queue.copyExternalImageToTexture({source:t[n]},{texture:this.gpuTexture,mipLevel:0,origin:{x:0,y:0,z:n}},{width:e,height:e,depthOrArrayLayers:1});w.endCommandEncoder(a)}uploadMipmapGPUTexture(e,t,i,a){var n=w.beginCommandEncoder();for(let o=0;o<6;o++)n.copyTextureToTexture({texture:a[o],mipLevel:0,origin:{x:0,y:0,z:0}},{texture:this.gpuTexture,mipLevel:e,origin:{x:0,y:0,z:o}},{width:t,height:i,depthOrArrayLayers:1});w.endCommandEncoder(n)}get images(){return this._images}set images(e){if(this._images=e,this._images[0]instanceof HTMLImageElement){let t=[],i=6,a=this;for(let n=0;n<6;n++)(function(o,h){h.decode().then(async()=>{t[o]=await createImageBitmap(h),--i==0&&a.generateImages(t)})})(n,this._images[n])}else(this._images instanceof HTMLCanvasElement||this._images instanceof ImageBitmap)&&this.generateImages(this._images)}async load(e){this._url=e;let t=6,i=[],a=(this.format=F.rgba8unorm,this);for(let l=0;l<6;l++){{n=void 0,o=void 0,h=void 0;var n=l,o=e[l],h=document.createElement("img");h.src=o,h.setAttribute("crossOrigin",""),await h.decode(),i[n]=await createImageBitmap(h),--t==0&&a.generateImages(i)}await 0}return!0}async loadStd(e){this._url=e,this.format=F.rgba8unorm;var t=document.createElement("img"),i=(t.src=e,t.setAttribute("crossOrigin",""),await t.decode(),new Pt(!1)),a=(i.name=Me.getURLName(e),i.format="rgba8unorm",i.source=await createImageBitmap(t),Math.round(Math.log2(i.width/4))),a=Math.pow(2,a),n=(this.width=this.height=a,[]);for(let h=0;h<6;h++){var o=new ce(a,a,this.format,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.TEXTURE_BINDING);o.name="face "+h,n.push(o),_r.createFace(h,this.width,i,o)}return this.generateImages(n),!0}}var Uh=(r=>(r[r.Left=0]="Left",r[r.Right=1]="Right",r[r.Bottom=2]="Bottom",r[r.Top=3]="Top",r[r.Back=4]="Back",r[r.Front=5]="Front",r))(Uh||{});class us{static getRotationToFace(e){var t=$.identity().clone(),i=new d,a=new A().identity(),n=new d;switch(e){case 3:i.set(0,-1,0),n.set(0,0,-1);break;case 2:i.set(0,1,0),n.set(0,0,1);break;case 1:i.set(1,0,0),n.set(0,1,0);break;case 0:i.set(-1,0,0),n.set(0,1,0);break;case 4:i.set(0,0,-1),n.set(0,1,0);break;case 5:return $.identity()}return a.lookAt(new d,i,n),t.setFromRotationMatrix(a),t}}let Bh=`
  struct ImageSize {
    srcWidth : i32,
    srcHeight : i32,
    dstWidth : i32,
    dstHeight : i32
  };

  @group(0) @binding(0) var<uniform> size : ImageSize;
  @group(0) @binding(1) var<storage,read_write> faceRotation: array<vec4<f32>>;
  @group(0) @binding(2) var inputTexSampler : sampler;
  @group(0) @binding(3) var inputTex : texture_2d<f32>;

  @group(1) @binding(0) var outputBuffer0 : texture_storage_2d_array<rgba16float, write>;

  fn SampleSphericalMap(v: vec3<f32>) -> vec2<f32> {
      var uv:vec2<f32> = vec2<f32>(atan2(v.z, v.x), asin(v.y));
      //uv = (uv * (vec2<f32>(0.1590999960899353, 0.3183000087738037) + vec2<f32>(0.0010000000474974513)));
      uv = uv * vec2<f32>(0.1590999960899353, 0.3183000087738037);
      uv = uv + vec2<f32>(0.5);
      uv = clamp(uv, vec2<f32>(0.0), vec2<f32>(1.0));
      return uv;
  }


  fn applyQuaternion(position:vec3<f32>, q:vec4<f32>) -> vec3<f32>{
      let x:f32 = position.x;
      let y:f32 = position.y;
      let z:f32 = position.z;

      let qx:f32 = q.x;
      let qy:f32 = q.y;
      let qz:f32 = q.z;
      let qw:f32 = q.w;

      let ix:f32 = qw * x + qy * z - qz * y;
      let iy:f32 = qw * y + qz * x - qx * z;
      let iz:f32 = qw * z + qx * y - qy * x;
      let iw:f32 = -qx * x - qy * y - qz * z;

      var ret: vec3<f32>;
      ret.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
      ret.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
      ret.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

      return ret;
  }

  fn convertIdToDir3(uv_i32:vec2<i32>, quaternion:vec4<f32>) -> vec3<f32>{
      var uv_f32:vec2<f32> = vec2<f32>(uv_i32.xy);
      var halfSize:f32 = f32(size.dstWidth / 2);
      var worldDirection:vec3<f32> = vec3<f32>(uv_f32.x - halfSize, uv_f32.y - halfSize, -halfSize);
      worldDirection = normalize(worldDirection);
      worldDirection = applyQuaternion(worldDirection, quaternion);
      return worldDirection;
  }

  @compute @workgroup_size(8, 8, 1)
  fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
    let coord = vec2<i32>(GlobalInvocationID.xy);
    let quaternion = faceRotation[GlobalInvocationID.z];
    var worldDirection:vec3<f32> = convertIdToDir3(coord, quaternion);
    let uv_f32:vec2<f32> = SampleSphericalMap(worldDirection);
    let oc = textureSampleLevel(inputTex, inputTexSampler, uv_f32 , 0.0);
    textureStore(outputBuffer0, coord, i32(GlobalInvocationID.z), oc);
  }
`,kh=`
  struct ImageSize {
    srcWidth : i32,
    srcHeight : i32,
    dstWidth : i32,
    dstHeight : i32
  };

  @group(0) @binding(0) var<uniform> size : ImageSize;
  @group(0) @binding(1) var<storage, read> tex_in: array<vec4<f32>>;
  @group(0) @binding(2) var outputBuffer : texture_storage_2d<rgba16float, write>;

  @compute @workgroup_size(8, 8, 1)
  fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
    let fragCoord = vec2<i32>(i32(GlobalInvocationID.x), i32(GlobalInvocationID.y));
    var oc:vec4<f32> = tex_in[fragCoord.y * size.srcWidth + fragCoord.x] / 256.0;
    var e = pow(2.0, oc.w * 255.0 - 128.0);
    oc = oc * e;
    oc = scaleByThreshold(oc, 40.0);
    textureStore(outputBuffer, fragCoord , vec4<f32>(oc.xyz, 1.0) );
  }

  fn scaleByThreshold(color:vec4<f32>, threshold:f32) -> vec4<f32>{
    var oc = color;
    let brightness = length(vec3<f32>(oc.xyz));
    var scale = brightness / threshold;
    if(scale > 1.0){
        scale = 1.0 / pow(scale, 0.7);
        oc = oc * scale;
    }
    oc.a = 1.0;
    return oc;
  }
`;const Ge=class{static convertRGBE2RGBA(r,a){var n=M.device,t=n.createComputePipeline({layout:"auto",compute:{module:n.createShaderModule({code:kh}),entryPoint:"main"}}),i=n.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),o=(n.queue.writeBuffer(i,0,new Uint32Array([r.width,r.height,r.width,r.height])),n.createBuffer({size:a.byteLength,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})),o=(n.queue.writeBuffer(o,0,a),[{binding:0,resource:{buffer:i,size:16}},{binding:1,resource:{buffer:o,size:a.byteLength}},{binding:2,resource:r.getGPUView()}]),a=n.createBindGroup({layout:t.getBindGroupLayout(0),entries:o}),n=w.beginCommandEncoder(),o=n.beginComputePass();o.setPipeline(t),o.setBindGroup(0,a),o.dispatchWorkgroups(Math.floor(r.width/8),Math.floor(r.height/8)),o.end(),w.endCommandEncoder(n),i.destroy()}static makeTextureCube(o,e,l){var h=M.device,i=(Ge.makeFaceTexturePipeline||(Ge.makeFaceTexturePipeline=h.createComputePipeline({layout:"auto",compute:{module:h.createShaderModule({code:Bh}),entryPoint:"main"}})),Ge.makeFaceTexturePipeline);if(Ge.configBuffer||(Ge.configBuffer=h.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),h.queue.writeBuffer(Ge.configBuffer,0,new Uint32Array([o.width,o.height,e,e])),!Ge.quaternionBuffer){Ge.quaternionBuffer=h.createBuffer({size:576,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});var a=new Float32Array(24);for(let c=0;c<6;c++){var n=us.getRotationToFace(c);a[4*c+0]=n.x,a[4*c+1]=n.y,a[4*c+2]=n.z,a[4*c+3]=n.w}h.queue.writeBuffer(Ge.quaternionBuffer,0,a)}var o=[{binding:0,resource:{buffer:Ge.configBuffer,size:16}},{binding:1,resource:{buffer:Ge.quaternionBuffer,size:96}},{binding:2,resource:o.gpuSampler},{binding:3,resource:o.getGPUView()}],l=[{binding:0,resource:l}],o=h.createBindGroup({layout:i.getBindGroupLayout(0),entries:o}),h=h.createBindGroup({layout:i.getBindGroupLayout(1),entries:l}),l=w.beginCommandEncoder(),u=l.beginComputePass();u.setPipeline(i),u.setBindGroup(0,o),u.setBindGroup(1,h),u.dispatchWorkgroups(e/8,e/8,6),u.end(),w.endCommandEncoder(l)}};let $t=Ge;s($t,"makeFaceTexturePipeline"),s($t,"configBuffer"),s($t,"quaternionBuffer");class cs extends st{constructor(){super(32,32,null),this.isHDRTexture=!0}create(e=32,t=32,l=null,h=!0){this.width=e,this.height=t;var n=M.device,o=4*e*2,h=(this.format=F.rgba16float,this.useMipmap=h,this.updateTextureDescription(),this.updateGPUTexture(),n.createBuffer({size:l.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})),l=(n.queue.writeBuffer(h,0,l),w.beginCommandEncoder());return l.copyBufferToTexture({buffer:h,bytesPerRow:o},{texture:this.getGPUTexture()},{width:e,height:t,depthOrArrayLayers:1}),w.endCommandEncoder(l),this.useMipmap||(this.samplerBindingLayout.type="filtering",this.textureBindingLayout.sampleType="float"),this.gpuSampler=n.createSampler(this),this}async load(e,t){return(await new Ne().load(e,ta,t)).getHDRTexture()}}const ds=new Float32Array(1),Nh=new Int32Array(ds.buffer);let Br=function(r){ds[0]=r,r=Nh[0];let e=r>>16&32768,t=r>>12&2047;var i=r>>23&255;return i<103||(142<i?e=e|31744|((i==255?1:0)&&8388607&r):i<114?(t|=2048,e|=(t>>114-i)+(t>>113-i&1)):e=(e|=i-112<<10|t>>1)+(1&t)),e};var zh=(r=>(r[r.RGBE_RETURN_FAILURE=-1]="RGBE_RETURN_FAILURE",r[r.rgbe_read_error=1]="rgbe_read_error",r[r.rgbe_write_error=2]="rgbe_write_error",r[r.rgbe_format_error=3]="rgbe_format_error",r[r.rgbe_memory_error=4]="rgbe_memory_error",r))(zh||{});class Pa{constructor(){s(this,"valid"),s(this,"string"),s(this,"comments"),s(this,"programtype"),s(this,"format"),s(this,"gamma"),s(this,"exposure"),s(this,"width"),s(this,"height")}}class ta extends mt{constructor(){super(...arguments),s(this,"_rgbeArray"),s(this,"_width"),s(this,"_height"),s(this,"_RGBE_RETURN_FAILURE",-1),s(this,"_parserType",F.rgba8uint)}parseBuffer(t){var t=new Uint8Array(t),i=(t.pos=0,this.paserHeader(t));if(i instanceof Pa){var a=this._width=i.width,i=this._height=i.height,t=this.parserPixel(t.subarray(t.pos),a,i);if(t instanceof Uint8Array)return this._rgbeArray=t,this._parserType,void(this.data=void 0)}return null}verification(){if(this.data&&this.data instanceof st||this._rgbeArray)return!0;throw new Error("Method not implemented.")}getTexture(){return this.data}getCubeTexture(){var e=this._width/4;return new Ai().createFromHDRData(e,{width:this._width,height:this._height,array:this._rgbeArray})}getHDRTexture(){return new cs().create(this._width,this._height,this._rgbeArray)}parseError(e,t){switch(e){case 1:console.error("Read Error: "+(t||""));break;case 2:console.error("Write Error: "+(t||""));break;case 3:console.error("Bad File Format: "+(t||""));break;default:console.error("Error: "+(t||""))}return-1}parserBlock(e,t,i){t=t||1024;let a=e.pos,n=-1,o=0,h="",l=String.fromCharCode.apply(null,new Uint16Array(e.subarray(a,a+128)));for(;(n=l.indexOf(`
`))<0&&o<t&&a<e.byteLength;)h+=l,o+=l.length,a+=128,l+=String.fromCharCode.apply(null,new Uint16Array(e.subarray(a,a+128)));return-1<n&&(i!==!1&&(e.pos+=o+n+1),h+l.slice(0,n))}paserHeader(e){var t=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,i=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,a=/^\s*FORMAT=(\S+)\s*$/,n=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,o=new Pa;let h,l;if(e.pos>=e.byteLength||!(h=this.parserBlock(e)))return this.parseError(1,"no header found");if(!(l=h.match(/^#\?(\S+)/)))return this.parseError(3,"bad initial token");for(o.valid|=1,o.programtype=l[1],o.string+=h+`
`;(h=this.parserBlock(e))!==!1;)if(o.string+=h+`
`,h.charAt(0)==="#")o.comments+=h+`
`;else if((l=h.match(t))&&(o.gamma=Math.floor(10*parseFloat(l[1]))/10),(l=h.match(i))&&(o.exposure=Math.floor(10*parseFloat(l[1]))/10),(l=h.match(a))&&(o.valid|=2,o.format=l[1]),(l=h.match(n))&&(o.valid|=4,o.height=parseInt(l[1],10),o.width=parseInt(l[2],10)),2&o.valid&&4&o.valid)break;return 2&o.valid?4&o.valid?o:(this.parseError(3,"missing image size specifier"),null):(this.parseError(3,"missing format specifier"),null)}parserPixel(e,t,i){var a=t;if(a<8||32767<a||e[0]!==2||e[1]!==2||128&e[2])return new Uint8Array(e);if(a!==(e[2]<<8|e[3]))return this.parseError(3,"wrong scanline width");var n=new Uint8Array(4*t*i);if(!n.length)return this.parseError(4,"unable to allocate buffer space");let o=0,h=0;var l=4*a,u=new Uint8Array(4),c=new Uint8Array(l);let f=i;for(;0<f&&h<e.byteLength;){if(h+4>e.byteLength)return this.parseError(1,"");if(u[0]=e[h++],u[1]=e[h++],u[2]=e[h++],u[3]=e[h++],u[0]!=2||u[1]!=2||(u[2]<<8|u[3])!=a)return this.parseError(3,"bad rgbe scanline format");let S=0,T;for(;S<l&&h<e.byteLength;){var p=128<(T=e[h++]);if(p&&(T-=128),T===0||S+T>l)return this.parseError(3,"bad scanline data");if(p){var m=e[h++];for(let y=0;y<T;y++)c[S++]=m}else c.set(e.subarray(h,h+T),S),S+=T,h+=T}var _=a;for(let y=0;y<_;y++){var v=0;n[o]=c[y+0],v+=a,n[o+1]=c[y+v],v+=a,n[o+2]=c[y+v],v+=a,n[o+3]=c[y+v],o+=4}f--}return n}rbgeToFloat(e,t,i,a){var n=e[t+3],n=Math.pow(2,n-128)/255;i[a+0]=e[t+0]*n,i[a+1]=e[t+1]*n,i[a+2]=e[t+2]*n,i[a+3]=1}rbgeToHalfFloat(e,t,i,a){var n=e[t+3],n=Math.pow(2,n-128)/255;i[a+0]=Br(e[t+0]*n),i[a+1]=Br(e[t+1]*n),i[a+2]=Br(e[t+2]*n),i[a+3]=Br(1)}}s(ta,"format","bin");let Fh=`
    struct ImageSize {
        srcWidth : i32,
        srcHeight : i32,
        dstWidth : i32,
        dstHeight : i32
    };
    
    @group(0) @binding(0) var<uniform> size : ImageSize;
    @group(0) @binding(1) var<storage,read_write> faceRotation: array<vec4<f32>>;
    @group(0) @binding(2) var inputTexSampler : sampler;
    @group(0) @binding(3) var inputTex : texture_2d<f32>;
    
    @group(1) @binding(0) var<uniform> blurSetting : vec4<f32>;
    @group(1) @binding(1) var outputBuffer0 : texture_storage_2d_array<rgba16float, write>;
    
    var<private> PI: f32 = 3.14159265359;
    
    fn applyQuaternion(position:vec3<f32>, q:vec4<f32>) -> vec3<f32>{
        let x:f32 = position.x;
        let y:f32 = position.y;
        let z:f32 = position.z;
    
        let qx:f32 = q.x;
        let qy:f32 = q.y;
        let qz:f32 = q.z;
        let qw:f32 = q.w;
    
        let ix:f32 = qw * x + qy * z - qz * y;
        let iy:f32 = qw * y + qz * x - qx * z;
        let iz:f32 = qw * z + qx * y - qy * x;
        let iw:f32 = -qx * x - qy * y - qz * z;
    
        var ret: vec3<f32>;
        ret.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        ret.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        ret.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    
        return ret;
    }
    
    fn convertIdToDir3(uv_i32:vec2<i32>, quaternion:vec4<f32>) -> vec3<f32>{
        var uv_f32:vec2<f32> = vec2<f32>(uv_i32.xy);
        var halfSize:f32 = f32(size.dstWidth / 2);
        var worldDirection:vec3<f32> = vec3<f32>(uv_f32.x - halfSize, uv_f32.y - halfSize, -halfSize);
        worldDirection = normalize(worldDirection);
        worldDirection = applyQuaternion(worldDirection, quaternion);
        return worldDirection;
    }
    
    fn VanDerCorpus(n0:u32, base0:u32) -> f32
    {
        var n = n0;
        var base = base0;
        var invBase:f32 = 1.0 / f32(base);
        var denom:f32   = 1.0;
        var result:f32  = 0.0;
    
        for(var i:u32 = 0u; i < 32u; i = i + 1u)
        {
            if(n > 0u)
            {
                denom   = f32(n) % 2.0;
                result = result + denom * invBase;
                invBase = invBase / 2.0;
                n       = u32(f32(n) / 2.0);
            }
        }
    
        return result;
    }
    
    fn HammersleyNoBitOps(i:u32, N:u32) -> vec2<f32>
    {
        return vec2(f32(i)/f32(N), VanDerCorpus(i, 2u));
    }
    
    fn hammersley( i : u32 ,  N : u32 ) -> vec2<f32>
    {
        // Radical inverse based on http://holger.dammertz.org/stuff/notes_HammersleyOnHemisphere.html
        var bits = (i << 16u) | (i >> 16u);
        bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
        bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
        bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
        bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
        var rdi = f32(bits) * 2.3283064365386963e-10;
        return vec2<f32>(f32(i) /f32(N), rdi);
    }
    
    fn ImportanceSampleGGX( Xi:vec2<f32>, N:vec3<f32>, roughness:f32) ->vec3<f32>
    {
        var a = roughness*roughness;
    
        var phi = 2.0 * PI * Xi.x;
        var cosTheta = sqrt((1.0 - Xi.y) / (1.0 + (a*a - 1.0) * Xi.y));
        var sinTheta = sqrt(1.0 - cosTheta*cosTheta);
    
        // from spherical coordinates to cartesian coordinates
        var H:vec3<f32>;
        H.x = cos(phi) * sinTheta;
        H.y = sin(phi) * sinTheta;
        H.z = cosTheta;
    
        // from tangent-space vector to world-space sample vector
        var up:vec3<f32>;
        if(abs(N.z) < 0.999)
        {
            up = vec3<f32>(0.0, 0.0, 1.0);
        }
        else
        {
            up = vec3<f32>(1.0, 0.0, 0.0);
        }
        var tangent:vec3<f32>  = normalize(cross(up, N));
        var bitangent:vec3<f32> = cross(N, tangent);
        var sampleVec:vec3<f32> = tangent * H.x + bitangent * H.y + N * H.z;
        return normalize(sampleVec);
    }
    
    fn multiSample(localPos:vec3<f32>, roughness:f32) -> vec4<f32>
    {
        var N: vec3<f32> = normalize(localPos);
        var R: vec3<f32> = N;
        var V: vec3<f32> = R;
    
        let SAMPLE_COUNT:u32 = 1024u;
        var totalWeight:f32 = 0.0;
        var prefilteredColor:vec3<f32> = vec3<f32>(0.0, 0.0, 0.0);
        for(var i:u32 = 0u; i < SAMPLE_COUNT; i = i + 1u)
        {
            var Xi:vec2<f32> = hammersley(i, SAMPLE_COUNT);
            var H :vec3<f32> = ImportanceSampleGGX(Xi, N, roughness);
            var L :vec3<f32> = normalize(2.0 * dot(V, H) * H - V);
    
            var NdotL:f32 = max(dot(N, L), 0.0);
            if(NdotL > 0.0)
            {
                var att = 1.0 ;//( f32(SAMPLE_COUNT - i) / f32(SAMPLE_COUNT)) ;
    
                prefilteredColor = prefilteredColor + sampleColor(L).rgb * NdotL;
                prefilteredColor = prefilteredColor * att ;
                totalWeight      = totalWeight + NdotL;
            }
        }
        prefilteredColor = prefilteredColor / totalWeight;
    
        return vec4<f32>(prefilteredColor, 1.0);
    }
    
    fn SampleSphericalMap(v: vec3<f32>) -> vec2<f32> {
        var uv:vec2<f32> = vec2<f32>(atan2(v.z, v.x), asin(v.y));
        //uv = (uv * (vec2<f32>(0.1590999960899353, 0.3183000087738037) + vec2<f32>(0.0010000000474974513)));
        uv = uv * vec2<f32>(0.1590999960899353, 0.3183000087738037);
        uv = uv + vec2<f32>(0.5);
        uv = clamp(uv, vec2<f32>(0.0), vec2<f32>(1.0));
        return uv;
    }
    
    fn sampleColor(d:vec3<f32>) -> vec4<f32>
    {
        let uv_f32:vec2<f32> = SampleSphericalMap(d);
        let oc = textureSampleLevel(inputTex, inputTexSampler, uv_f32 , 0.0);
        //let dir = vec3<f32>(-d.x, -d.y, d.z);
        //var oc:vec4<f32> = textureSampleLevel(cubeMap, cubeMapSampler, dir, 0.0);
        return oc;
    }
    
    @compute @workgroup_size(8, 8, 1)
    fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
        let coord = vec2<i32>(GlobalInvocationID.xy);
        let quaternion = faceRotation[GlobalInvocationID.z];
        var worldDirection:vec3<f32> = convertIdToDir3(coord, quaternion);
        var oc:vec4<f32> = multiSample(worldDirection, blurSetting.x);
        textureStore(outputBuffer0, coord, i32(GlobalInvocationID.z), oc);
    }

`;class xr{static importantSample(e,t,i,a){var n=M.device,o=(this.pipeline==null&&(this.pipeline=n.createComputePipeline({layout:"auto",compute:{module:n.createShaderModule({code:Fh}),entryPoint:"main"}})),this.pipeline);if(this.configBuffer||(this.configBuffer=n.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),n.queue.writeBuffer(this.configBuffer,0,new Uint32Array([e.width,e.height,t,t])),!this.quaternionBuffer){this.quaternionBuffer=n.createBuffer({size:576,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST});var h=new Float32Array(24);for(let u=0;u<6;u++){var l=us.getRotationToFace(u);h[4*u+0]=l.x,h[4*u+1]=l.y,h[4*u+2]=l.z,h[4*u+3]=l.w}n.queue.writeBuffer(this.quaternionBuffer,0,h)}this.blurSettingBuffer||(this.blurSettingBuffer=n.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),n.queue.writeBuffer(this.blurSettingBuffer,0,new Float32Array([i,0,0,0])),i=e.erpTexture,e=[{binding:0,resource:{buffer:this.configBuffer,size:16}},{binding:1,resource:{buffer:this.quaternionBuffer,size:96}},{binding:2,resource:i.gpuSampler},{binding:3,resource:i.getGPUView()}],i=[{binding:0,resource:{buffer:this.blurSettingBuffer,size:16}},{binding:1,resource:a}],a=n.createBindGroup({layout:o.getBindGroupLayout(0),entries:e}),e=n.createBindGroup({layout:o.getBindGroupLayout(1),entries:i}),n=w.beginCommandEncoder(),i=n.beginComputePass(),i.setPipeline(o),i.setBindGroup(0,a),i.setBindGroup(1,e),i.dispatchWorkgroups(t/8,t/8,6),i.end(),w.endCommandEncoder(n)}}s(xr,"configBuffer",null),s(xr,"quaternionBuffer",null),s(xr,"blurSettingBuffer",null),s(xr,"pipeline");class fs{constructor(e){s(this,"faceTextureRef"),s(this,"_texture"),this._texture=e,this.faceTextureRef={}}uploadTexture(e,t){return e=this.getGpuSource(e),$t.makeTextureCube(t,this._texture.width,e.v),this}uploadErpTexture(e){var t=this.getGpuSource(0);return $t.makeTextureCube(e,this._texture.width,t.v),this.generateMipmap(e),this}getGpuSource(e){let t=this.faceTextureRef[e];return t||(t={t:this._texture.getGPUTexture(),v:this._texture.getGPUTexture().createView({format:this._texture.format,dimension:"2d-array",baseMipLevel:e,mipLevelCount:1,arrayLayerCount:6})},this.faceTextureRef[e]=t),t}generateMipmap(e){let t=1;for(;t<this._texture.mipmapCount;)this.generateMipmapAtLevel(t,e),t++}generateMipmapAtLevel(e,n,h=3){var a=this._texture.width/Math.pow(2,e),n={width:a,height:a,erpTexture:n},o=(e+1)/this._texture.mipmapCount,o=Math.pow(o,h),h=this.getGpuSource(e);xr.importantSample(n,a,o,h.v)}}class Ai extends ea{constructor(){super(),s(this,"_url"),s(this,"_faceData"),this.useMipmap=!0,this.format=F.rgba16float,this.isHDRTexture=!0,this._faceData=new fs(this)}createFromHDRData(e,a){var i=new ce(a.width,a.height,F.rgba16float,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING),a=new Float32Array(a.array);return $t.convertRGBE2RGBA(i,a),this.createFromTexture(e,i),this}createFromTexture(e,t){this.width=this.height=e,this.textureBindingLayout.viewDimension="cube";let i=this.width;for(this.mipmapCount=1;16<i;)i/=2,this.mipmapCount++;return this.createTextureDescriptor(e,e,this.mipmapCount,this.format),this.textureDescriptor.size={width:e,height:e,depthOrArrayLayers:6},this.textureDescriptor.dimension="2d",this.gpuSampler=M.device.createSampler(this),this._faceData.uploadErpTexture(t),this}async load(e,t){return this._url=e,(await new Ne().load(e,ta,t)).getCubeTexture()}}function Gh(r){return new TextDecoder().decode(r)}class ra{constructor(e,t,i,a){s(this,"buffer"),s(this,"binOffset"),s(this,"binLength"),s(this,"header"),this.buffer=e,this.binOffset=t+i,this.binLength=a;let n=null;n=i!==0?(a=new Uint8Array(e,t,i),JSON.parse(Gh(a))):{},this.header=n}getKeys(){return Object.keys(this.header)}getData(e,t,i=null,a=null){var n=this.header;if(!(e in n))return null;if(n=n[e],n instanceof Object){if(Array.isArray(n))return n;{var{buffer:o,binOffset:h,binLength:l}=this,u=n.byteOffset||0,c=n.type||a,i=n.componentType||i;if("type"in n&&a&&n.type!==a)throw new Error("FeatureTable: Specified type does not match expected type.");let _;switch(c){case"SCALAR":_=1;break;case"VEC2":_=2;break;case"VEC3":_=3;break;case"VEC4":_=4;break;default:throw new Error(`FeatureTable : Feature type not provided for "${e}".`)}let v;var f=h+u,p=t*_;switch(i){case"BYTE":v=new Int8Array(o,f,p);break;case"UNSIGNED_BYTE":v=new Uint8Array(o,f,p);break;case"SHORT":v=new Int16Array(o,f,p);break;case"UNSIGNED_SHORT":v=new Uint16Array(o,f,p);break;case"INT":v=new Int32Array(o,f,p);break;case"UNSIGNED_INT":v=new Uint32Array(o,f,p);break;case"FLOAT":v=new Float32Array(o,f,p);break;case"DOUBLE":v=new Float64Array(o,f,p);break;default:throw new Error(`FeatureTable : Feature component type not provided for "${e}".`)}if(f+p*v.BYTES_PER_ELEMENT>h+l)throw new Error("FeatureTable: Feature data read outside binary body length.");return v}}return n}}class ps extends ra{constructor(e,t,i,a,n){super(e,i,a,n),s(this,"batchSize"),this.batchSize=t}getData(e,t=null,i=null){return super.getData(e,this.batchSize,t,i)}}function ms(r){let e;if(e=r instanceof DataView?r:new DataView(r),String.fromCharCode(e.getUint8(0))==="{")return null;let t="";for(let i=0;i<4;i++)t+=String.fromCharCode(e.getUint8(i));return t}class Vh{async parse(e){var n=new DataView(e),t=ms(n),t=(console.assert(t==="b3dm"),n.getUint32(4,!0)),i=(console.assert(t===1),n.getUint32(8,!0)),l=(console.assert(i===e.byteLength),n.getUint32(12,!0)),h=n.getUint32(16,!0),a=n.getUint32(20,!0),n=n.getUint32(24,!0),o=new ra(e,28,l,h),l=28+l+h,h=new ps(e,o.getData("BATCH_LENGTH"),l,a,n),l=l+a+n;return{version:t,featureTable:o,batchTable:h,glbBytes:new Uint8Array(e,l,i-l)}}}const Yr=class extends Vh{constructor(){super(),s(this,"adjustmentTransform"),s(this,"gltfBuffer"),this.adjustmentTransform=new A().identity(),Yr.tempMatrix||(Yr.tempMatrix=new A().identity())}async parse(t){var t=await super.parse(t),e=(this.gltfBuffer=t.glbBytes.slice().buffer,await new _s().parseBinary(this.gltfBuffer)),{batchTable:t,featureTable:i}=t,a=i.getData("RTC_CENTER"),a=(a&&(e.x+=a[0],e.y+=a[1],e.z+=a[2]),e.getComponent(Be)),n=(a.updateWorldMatrix(),Yr.tempMatrix),n=(n.compose(a.localPosition,a.localRotQuat,a.localScale),n.multiply(this.adjustmentTransform),n.decompose(at.QUATERNION));return a.localRotQuat.copyFrom(n[1]),a.localRotQuat=a.localRotQuat,a.localPosition.copyFrom(n[0]),a.localPosition=a.localPosition,a.localScale.copyFrom(n[2]),a.localScale=a.localScale,a.updateWorldMatrix(),e.batchTable=t,e.featureTable=i,e}static decodeText(r){if(typeof TextDecoder<"u")return new TextDecoder().decode(r);let e="";for(let t=0,i=r.length;t<i;t++)e+=String.fromCharCode(r[t]);try{return decodeURIComponent(escape(e))}catch{return e}}};let nr=Yr;s(nr,"tempMatrix");class gs extends mt{async parseBuffer(e){var t=new nr;t.adjustmentTransform=this.userData,this.data=await t.parse(e)}verification(){if(this.data)return!0;throw new Error("Method not implemented.")}}s(gs,"format","bin");const vs="glTF",cr=12,Da={JSON:1313821514,BIN:5130562},Ui={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class Hh{constructor(e){s(this,"name"),s(this,"content"),s(this,"body"),s(this,"header"),this.name=Ui.KHR_BINARY_GLTF,this.content=null,this.body=null;var t=new DataView(e,0,cr);if(this.header={magic:nr.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==vs)throw new Error("GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("GLTFLoader: Legacy binary file detected.");var i=this.header.length-cr,a=new DataView(e,cr);let n=0;for(;n<i;){var o,h=a.getUint32(n,!0),l=(n+=4,a.getUint32(n,!0));n+=4,l===Da.JSON?(o=new Uint8Array(e,cr+n,h),this.content=nr.decodeText(o)):l===Da.BIN&&(o=cr+n,this.body=e.slice(o,o+h)),n+=h}if(this.content===null)throw new Error("GLTFLoader: JSON content not found.")}}class _s{constructor(){s(this,"_binary")}async parseBinary(e){this._binary=e,e={};let t,i;if(nr.decodeText(new Uint8Array(this._binary,0,4))===vs){try{i=e[Ui.KHR_BINARY_GLTF]=new Hh(this._binary)}catch{return}t=e[Ui.KHR_BINARY_GLTF].content}else t=nr.decodeText(new Uint8Array(this._binary));return e=JSON.parse(t),this.parseGLB(e,i.body)}async parseGLB(e,t){return new $i().parseJsonAndBuffer(e,t)}}class Xh{async parse(e){var o=new DataView(e),t=ms(o),t=(console.assert(t==="i3dm"),o.getUint32(4,!0)),i=(console.assert(t===1),o.getUint32(8,!0)),l=(console.assert(i===e.byteLength),o.getUint32(12,!0)),h=o.getUint32(16,!0),a=o.getUint32(20,!0),n=o.getUint32(24,!0),o=(o.getUint32(28,!0),new ra(e,32,l,h)),l=32+l+h,h=new ps(e,o.getData("INSTANCES_LENGTH"),l,a,n),l=l+a+n;return{version:t,featureTable:o,batchTable:h,glbBytes:new Uint8Array(e,l,i-l)}}}class Yh extends K{constructor(e,t,i){super(),s(this,"_geometry"),s(this,"_material"),s(this,"_instanceList"),this._geometry=e,this._material=t,this._instanceList=[];for(let o=0;o<i;o++){var a=new K,n=a.addComponent(ye);n.geometry=this._geometry,n.material=this._material,this.addChild(a),this._instanceList.push(a)}}setMatrixAt(e,t){return e=this._instanceList[e],t=t.decompose(at.QUATERNION),e=e.transform,e.localRotQuat.copyFrom(t[1]),e.localRotQuat=e.localRotQuat,e.localPosition.copyFrom(t[0]),e.localPosition=e.localPosition,e.localScale.copyFrom(t[2]),e.localScale=e.localScale,this}}const xs=class extends Xh{constructor(){super(),s(this,"adjustmentTransform"),s(this,"_gltfBuffer"),this.adjustmentTransform=new A().identity()}async parse(t){var t=await super.parse(t),e=(this._gltfBuffer=t.glbBytes.slice().buffer,await new _s().parseBinary(this._gltfBuffer)),{batchTable:t,featureTable:i}=t;const a=this.adjustmentTransform,n=i.getData("INSTANCES_LENGTH"),o=i.getData("POSITION",n,"FLOAT","VEC3"),h=i.getData("NORMAL_UP",n,"FLOAT","VEC3"),l=i.getData("NORMAL_RIGHT",n,"FLOAT","VEC3"),u=i.getData("SCALE_NON_UNIFORM",n,"FLOAT","VEC3"),c=i.getData("SCALE",n,"FLOAT","SCALAR"),f=new Map,p=[],m=(e.traverse(v=>{var S,T;(T=v?v.getComponent(ye):null)&&({geometry:T,material:S}=T,(T=new Yh(T,S,n)).localPosition=T.localPosition.copy(v.localPosition),T.localRotation=T.localRotation.copy(v.localRotation),T.localScale=T.localScale.copy(v.localScale),p.push(T),f.set(v,T))}),new d);for(let v=0;v<n;v++)m.x+=o[3*v+0]/n,m.y+=o[3*v+1]/n,m.z+=o[3*v+2]/n;f.forEach((v,S)=>{var T=S.parent?S.parentObject:null;T&&(T.removeChild(S),T.addChild(v),v.transform.updateWorldMatrix(),v.transform.worldMatrix.transformVector4(m,v.localPosition))});var _=xs;for(let v=0;v<n;v++){_.tempMat.identity(),_.tempPos.set(o[3*v+0]-m.x,o[3*v+1]-m.y,o[3*v+2]-m.z),h?(_.tempUp.set(h[3*v+0],h[3*v+1],h[3*v+2]),_.tempRight.set(l[3*v+0],l[3*v+1],l[3*v+2]),_.tempRight.cross(_.tempUp,_.tempFwd).normalize(),_.tempMat.makeBasis(_.tempRight,_.tempUp,_.tempFwd),_.tempQuat.setFromRotationMatrix(_.tempMat)):_.tempQuat.set(0,0,0,1),c?_.tempSca.setScalar(c[v]):u?_.tempSca.set(u[3*v+0],u[3*v+1],u[3*v+2]):_.tempSca.set(1,1,1),_.tempMat.compose(_.tempPos,_.tempQuat,_.tempSca),_.tempMat.multiplyMatrices(_.tempMat,a);for(let S=0,T=p.length;S<T;S++)p[S].setMatrixAt(v,_.tempMat)}return e.batchTable=t,e.featureTable=i,e}};let _t=xs;s(_t,"tempFwd",new d),s(_t,"tempUp",new d),s(_t,"tempRight",new d),s(_t,"tempPos",new d),s(_t,"tempQuat",new $),s(_t,"tempSca",new d),s(_t,"tempMat",new A);class ys extends mt{async parseBuffer(e){var t=new _t;t.adjustmentTransform=this.userData,this.data=await t.parse(e)}verification(){if(this.data)return!0;throw new Error("Method not implemented.")}}s(ys,"format","bin");class bs extends ea{constructor(){super(),s(this,"_faceData"),s(this,"_url"),this.useMipmap=!0,this.format=F.rgba16float,this._faceData=new fs(this)}get ldrImageUrl(){return this._url}async load(e,t){this._url=e;var i=new Pt(!1);return await i.load(e,t),this.createFromLDRTexture(i),this}createFromLDRTexture(e){var t=Math.log2(e.width/4),t=Math.pow(2,Math.round(t));return this.createFromTexture(t,e),this}createFromTexture(e,t){this.width=this.height=e,this.textureBindingLayout.viewDimension="cube";let i=this.width;for(this.mipmapCount=1;16<i;)i/=2,this.mipmapCount++;return this.createTextureDescriptor(e,e,this.mipmapCount,this.format),this.textureDescriptor.size={width:e,height:e,depthOrArrayLayers:6},this.textureDescriptor.dimension="2d",this.gpuSampler=M.device.createSampler(this),this._faceData.uploadErpTexture(t),this}}let Wh=`
var<private>PI: f32 = 3.141592653589793;

// fn saturate( x : f32 ) -> f32 {
//     return clamp(x, 0.0, 1.0);
// }

fn hammersley(i : u32, N : u32) -> vec2<f32>
{
    // Radical inverse based on http://holger.dammertz.org/stuff/notes_HammersleyOnHemisphere.html
    var bits = (i << 16u) | (i >> 16u);
    bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
    bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
    bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
    bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
    var rdi = f32(bits) * 2.3283064365386963e-10;
    return vec2<f32>(f32(i) / f32(N), rdi);
}

fn G_Smith(NoV: f32, NoL : f32, roughness : f32) -> f32
{
    var k = (roughness * roughness) / 2.0;
    var GGXL = NoL / (NoL * (1.0 - k) + k);
    var GGXV = NoV / (NoV * (1.0 - k) + k);
    return GGXL * GGXV;
}

fn V_SmithGGXCorrelated(NoV: f32, NoL : f32, roughness : f32) -> f32
{
    var a2 = pow(roughness, 4.0);
    var GGXV = NoL * sqrt(NoV * NoV * (1.0 - a2) + a2);
    var GGXL = NoV * sqrt(NoL * NoL * (1.0 - a2) + a2);
    return 0.5 / (GGXV + GGXL);
}


// Based on Karis 2014
fn importanceSampleGGX(Xi: vec2<f32>, roughness: f32, N: vec3<f32>) -> vec3<f32>
{
    var a = roughness * roughness;
    // Sample in spherical coordinates
    var Phi = 2.0 * PI * Xi.x;
    var CosTheta = sqrt((1.0 - Xi.y) / (1.0 + (a * a - 1.0) * Xi.y));
    var SinTheta = sqrt(1.0 - CosTheta * CosTheta);
    // Construct tangent space vector
    var H: vec3<f32>;
    H.x = SinTheta * cos(Phi);
    H.y = SinTheta * sin(Phi);
    H.z = CosTheta;

    // Tangent to world space
    var UpVector = vec3<f32>(1.0, 0.0, 0.0);
    if (abs(N.z) < 0.999) {
        UpVector = vec3<f32>(0.0, 0.0, 1.0);
    }
    var TangentX = normalize(cross(UpVector, N));
    var TangentY = cross(N, TangentX);
    return TangentX * H.x + TangentY * H.y + N * H.z;
}


// Karis 2014
fn integrateBRDF(roughness: f32, NoV: f32) -> vec2<f32>
{
    var V: vec3<f32>;
    V.x = sqrt(1.0 - NoV * NoV); // sin
    V.y = 0.0;
    V.z = NoV; // cos

    // N points straight upwards for this integration
    var N = vec3<f32>(0.0, 0.0, 1.0);

    var A = 0.0;
    var B = 0.0;
    var numSamples = 1024u;

    for (var i = 0u; i < numSamples; i += 1u) {
        var Xi = hammersley(i, numSamples);
        // Sample microfacet direction
        var H = importanceSampleGGX(Xi, roughness, N);

        // Get the light direction
        var L = 2.0 * dot(V, H) * H - V;

        var NoL = saturate(dot(N, L));
        var NoH = saturate(dot(N, H));
        var VoH = saturate(dot(V, H));

        if (NoL > 0.0) {
            var V_pdf = V_SmithGGXCorrelated(NoV, NoL, roughness) * VoH * NoL / NoH;
            var Fc = pow(1.0 - VoH, 5.0);
            A += (1.0 - Fc) * V_pdf;
            B += Fc * V_pdf;
        }
    }

    return 4.0 * vec2<f32>(A, B) / f32(numSamples);
}

@group(0) @binding(0) var brdflutTexture: texture_storage_2d<rgba8unorm, write>;
@compute @workgroup_size(8, 8, 1)
// fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(local_invocation_id) local_invocation_id : vec3<u32> ){
fn CsMain(@builtin(global_invocation_id) global_invocation_id : vec3<u32>){
    var fragCoord = vec2<u32>(global_invocation_id.x, global_invocation_id.y);

    var fragColor = vec4<f32>(0.0);
    // Output to screen
    var res = integrateBRDF(f32(fragCoord.y + 1u) / 256.0, f32(fragCoord.x + 1u) / 256.0);
    fragColor = vec4<f32>(res.x, res.y, 0.0, 1.0);

    textureStore(brdflutTexture, vec2<i32>(fragCoord.xy), fragColor);
}
`;class Kh{constructor(){s(this,"compute"),this.compute=new ft(Wh)}generateBRDFLUTTexture(){var e=new ce(256,256,F.rgba8unorm,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING),t=(this.compute.setStorageTexture("brdflutTexture",e),this.compute.workerSizeX=32,this.compute.workerSizeY=32,w.beginCommandEncoder());return w.computeCommand(t,[this.compute]),w.endCommandEncoder(t),e}}class jh extends st{constructor(){super(...arguments),s(this,"_dataBuffer")}create(e,t,i,a=!1){var h=M.device,n=256*Math.ceil(4*e/256),o=(this.format=F.rgba8unorm,this.mipmapCount=Math.floor(a?Math.log2(e):1),this.createTextureDescriptor(e,t,this.mipmapCount,this.format),this._dataBuffer=h.createBuffer({size:i.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})),h=(h.queue.writeBuffer(o,0,i),w.beginCommandEncoder());return h.copyBufferToTexture({buffer:o,bytesPerRow:n},{texture:this.getGPUTexture()},{width:e,height:t,depthOrArrayLayers:1}),w.endCommandEncoder(h),a&&Bt.webGPUGenerateMipmap(this),this}updateTexture(e,t,h){var a=M.device,n=256*Math.ceil(4*e/256),o=(this.mipmapCount=Math.floor(Math.log2(e)),this._dataBuffer&&this._dataBuffer.destroy(),this._dataBuffer=null,this._dataBuffer=a.createBuffer({size:h.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})),h=(a.queue.writeBuffer(o,0,h),w.beginCommandEncoder());h.copyBufferToTexture({buffer:o,bytesPerRow:n},{texture:this.getGPUTexture()},{width:e,height:t,depthOrArrayLayers:1}),w.endCommandEncoder(h),this.gpuSampler=a.createSampler(this),1<this.mipmapCount&&Bt.webGPUGenerateMipmap(this)}}class ni{constructor(e){s(this,"id"),s(this,"guiTexture"),s(this,"uvRec",new G(0,0,1,1)),s(this,"uvBorder",new G(0,0,0,0)),s(this,"offsetSize",new G(0,0,4,4)),s(this,"borderSize",new G(0,0,0,0)),s(this,"trimSize",new Q),s(this,"isSliced",!1),s(this,"height",4),s(this,"width",4),s(this,"xadvance",0),s(this,"xoffset",0),s(this,"yoffset",0),this.guiTexture=e||b.res.defaultGUITexture}}const Bi=class{constructor(r){s(this,"_staticId",-1),s(this,"dynamicId",-1),s(this,"texture"),s(this,"width",1),s(this,"height",1),r=r||b.res.whiteTexture,this.texture=r,Bi._maxUid++,this._staticId=Bi._maxUid,this.init()}get staticId(){return this._staticId}init(){this.dynamicId=-1,this.width=this.texture.width,this.height=this.texture.height}};let gi=Bi;s(gi,"_maxUid",-1);class qh{constructor(){s(this,"fntCache",{}),s(this,"fntData",{})}addFontData(e,t,i){this.fntData[""+e+t]=i}getFontData(e,t){return this.fntData[""+e+t]}addFnt(e,t,i,a){e=""+e+t,this.fntCache[e]||(this.fntCache[e]={}),this.fntCache[e][i]=a}getFnt(e,t,i){return e=this.fntCache[""+e+t],e?e[i]:this.fntCache[" "]}}let ki=new qh;class Zh{constructor(){s(this,"face",""),s(this,"size",0),s(this,"bold",!1),s(this,"italic",!1),s(this,"stretchH",0),s(this,"spacing",""),s(this,"outline",0),s(this,"lineHeight",0),s(this,"base",0),s(this,"scaleW",0),s(this,"scaleH",0),s(this,"pages",0),s(this,"packed",0),s(this,"alphaChnl",0),s(this,"redChnl",0),s(this,"greenChnl",0),s(this,"blueChnl",0),s(this,"count",0),s(this,"fontPage",[]),s(this,"fontChar",{})}}class Qh{constructor(){s(this,"id",0),s(this,"file","")}}class Jh{constructor(){s(this,"id",-1),s(this,"x",0),s(this,"y",0),s(this,"width",0),s(this,"height",0),s(this,"xoffset",0),s(this,"yoffset",0),s(this,"xadvance",0),s(this,"page",0),s(this,"chnl",0)}}const Ot=class extends mt{static parseSprite(r,e){for(const a in e.fontChar){var t,i;Object.prototype.hasOwnProperty.call(e.fontChar,a)&&(t=e.fontChar[a],(i=new ni).id=t.id.toString(),i.offsetSize.set(0,0,t.width,t.height),i.trimSize.set(t.width,t.height),i.width=t.width,i.height=t.height,i.xadvance=t.xadvance,i.xoffset=t.xoffset,i.yoffset=t.yoffset,i.guiTexture=r[t.page],i.uvRec.set(t.x/e.scaleW,(e.scaleH-(t.y+t.height))/e.scaleH,t.width/e.scaleW,t.height/e.scaleH),ki.addFnt(e.face,e.size,i.id,i))}}verification(){if(this.data)return!0;throw new Error("Method not implemented.")}async parseString(r){let e=this.getNewLine(r),t=r,i=new Zh;t.trim().split(e).forEach((a,n)=>{var o;n<2?Ot.readLineProperty(a,i):n<i.pages+2?(o=new Qh,Ot.readLineProperty(a,o),i.fontPage.push(o)):n<i.pages+3?Ot.readLineProperty(a,i):0<i.count&&(o=new Jh,Ot.readLineProperty(a,o),i.fontChar[o.id]=o,i.count--)}),t="",this.data=i,await this.loadFontTextures()}getNewLine(r){return r.indexOf(`\r
`)!=-1?`\r
`:r.indexOf("\r")!=-1?"\r":`
`}async loadFontTextures(){var r=[],e=this.data;for(const i of e.fontPage){var t=this.baseUrl+i.file,t=(await b.res.loadTexture(t,null,!0),b.res.getTexture(t)),t=new gi(t);r.push(t)}Ot.parseSprite(r,e),e.fontChar[" "]||Ot.insertSpaceChar(e,r[0])}static insertSpaceChar(r,e){var t=new ni,i=.5*r.size,a=.5*r.lineHeight;t.id=" ",t.offsetSize.set(0,0,r.size,r.size),t.trimSize.set(i,a),t.width=i,t.height=a,t.xadvance=0,t.xoffset=0,t.yoffset=0,t.guiTexture=e,t.uvRec.set(0,0,1e-6,1e-6),ki.addFnt(r.face,r.size,t.id,t)}static readLineProperty(r,e){r.trim().split(" ").forEach((o,i)=>{var a,n,o=o.split("=");1<o.length&&(a=o[0],n=o[1],Object.prototype.hasOwnProperty.call(e,a))&&(n.indexOf('"')==-1?e[a]=parseFloat(o[1]):e[a]=n.replace('"',"").replace('"',""))})}};let Ss=Ot;function $h(n,a,t){var i=new ni,a=(i.guiTexture=n,i.id=a,i.uvRec.copyFrom(t.textureRect),i.trimSize.x=t.textureRect.z,i.trimSize.y=t.textureRect.w,i.offsetSize.x=t.textureRectOffset.x,i.offsetSize.y=t.textureRectOffset.y,i.offsetSize.z=t.size.x,i.offsetSize.w=t.size.y,i.width=t.size.x,i.height=t.size.y,1/n.width),n=1/n.height;return i.uvRec.set(i.uvRec.x*a,i.uvRec.y*n,i.uvRec.z*a,i.uvRec.w*n),t.border.x<=.1&&t.border.y<=.1&&t.border.z<=.1&&t.border.x<=.1?i.isSliced=!1:(i.borderSize.copyFrom(t.border),i.uvBorder.copyFrom(t.border),i.uvBorder.x-=t.textureRectOffset.x,i.uvBorder.y-=t.textureRectOffset.y,i.uvBorder.z=t.border.z-(t.size.x-t.textureRect.z-t.textureRectOffset.x),i.uvBorder.w=t.border.w-(t.size.y-t.textureRect.w-t.textureRectOffset.y),i.uvBorder.x/=t.textureRect.z,i.uvBorder.z/=t.textureRect.z,i.uvBorder.y/=t.textureRect.w,i.uvBorder.w/=t.textureRect.w,i.isSliced=!0),i}s(Ss,"format","text");class el{constructor(e){s(this,"_spriteMap",new Map),s(this,"_spriteList",[]),s(this,"textureSize",new Q),s(this,"name"),this.textureSize.set(e.x,e.y)}setTexture(e,t,i){return e=$h(e,t,i),this._spriteMap.set(e.id,e),this._spriteList.push(e),e}getSprite(e){return this._spriteMap.get(e)}get spriteList(){return this._spriteList}}class ws extends mt{constructor(){super(...arguments),s(this,"_json"),s(this,"_texture")}async parseString(e){this._json=JSON.parse(e),e=this.userData.replace(".json",".png"),this._texture=await b.res.loadTexture(e,null,!0),this.data={json:this._json,texture:this._texture},this.parseAtlas()}verification(){if(this.data)return!0;throw new Error("verify failed.")}parseAtlas(){var e=new el(this._json.size),t=new gi(this._texture),i=this._json.atlas;for(const a in i)e.setTexture(t,a,i[a]);b.res.addAtlas(this.baseUrl,e),this.data=e}}s(ws,"format","text");class tl{constructor(){s(this,"_texturePool"),s(this,"_materialPool"),s(this,"_prefabPool"),s(this,"_gltfPool"),s(this,"_atlasList"),s(this,"normalTexture"),s(this,"maskTexture"),s(this,"whiteTexture"),s(this,"blackTexture"),s(this,"redTexture"),s(this,"blueTexture"),s(this,"greenTexture"),s(this,"yellowTexture"),s(this,"grayTexture"),s(this,"defaultSky"),s(this,"defaultGUITexture"),s(this,"defaultGUISprite"),this._texturePool=new Map,this._materialPool=new Map,this._prefabPool=new Map,this._gltfPool=new Map,this._atlasList=new Map,this.initDefault()}getGltf(e){return this._gltfPool.get(e)}addTexture(e,t){this._texturePool.set(e,t)}getTexture(e){return this._texturePool.get(e)}addMat(e,t){return this._materialPool.set(e,t)}getMat(e){return this._materialPool.get(e)}addPrefab(e,t){this._prefabPool.set(e,t)}getPrefab(e){return this._prefabPool.get(e).instantiate()}addAtlas(e,t){t.name=e,this._atlasList.set(e,t)}getAtlas(e){return this._atlasList.get(e)}getGUISprite(e){for(var t of this._atlasList.values())if(t=t.getSprite(e),t)return t;return null}async loadGltf(e,t){if(this._prefabPool.has(e))return this._prefabPool.get(e);let i,a=e.substring(e.lastIndexOf(".")).toLowerCase(),n=new Ne;return t=(i=a==".gltf"?await n.load(e,be,t):await n.load(e,$i,t)).data,this._prefabPool.set(e,t),this._gltfPool.set(e,i.gltf),t}async loadObj(e,t){if(this._prefabPool.has(e))return this._prefabPool.get(e);let i,a=e.substring(e.lastIndexOf(".")).toLowerCase(),n=new Ne;return t=(i=a==".obj"?await n.load(e,hs,t):i).data,this._prefabPool.set(e,t),t}async loadB3DM(e,t,i){return this._prefabPool.has(e)?this._prefabPool.get(e):(t=(await new Ne().load(e,gs,t,i)).data,this._prefabPool.set(e,t),t)}async loadI3DM(e,t,i){return this._prefabPool.has(e)?this._prefabPool.get(e):(t=(await new Ne().load(e,ys,t,i)).data,this._prefabPool.set(e,t),t)}async loadTexture(e,t,i){var a;return this._texturePool.has(e)?this._texturePool.get(e):((a=new Pt).flipY=i,await a.load(e,t),this._texturePool.set(e,a),a)}async loadHDRTexture(e,t){if(this._texturePool.has(e))return this._texturePool.get(e);let i=new cs;return i=await i.load(e,t),this._texturePool.set(e,i),i}async loadHDRTextureCube(e,t){if(this._texturePool.has(e))return this._texturePool.get(e);let i=new Ai;return i=await i.load(e,t),this._texturePool.set(e,i),i}async loadLDRTextureCube(e,t){if(this._texturePool.has(e))return this._texturePool.get(e);let i=new bs;return i=await i.load(e,t),this._texturePool.set(e,i),i}async loadTextureCubeMaps(e){var t=e[0];return this._texturePool.has(t)?this._texturePool.get(t):(await(t=new Ea).load(e),this._texturePool.set(e[0],t),t)}async loadTextureCubeStd(e,t){var i;return this._texturePool.has(e)?this._texturePool.get(e):(await(i=new Ea).loadStd(e),i)}async loadJSON(e,t){return new Ne().loadJson(e,t).then(async i=>i).catch(i=>{console.log(i)})}async loadFont(e,t,i){return e=await new Ne().load(e,Ss,t,i),t=e.data,ki.addFontData(t.face,t.size,t),e.data}async loadAtlas(e,t){return(await new Ne().load(e,ws,t,e)).data}createTexture(u,t,i,a,n,o,h){var l=new Uint8Array(4096),u=(this.fillColor(l,u,t,i,a,n,o),new jh);return u.name=h,u.create(16,16,l,!0),h&&this.addTexture(h,u),u}fillColor(e,t,i,a,n,o,h){for(let u=0;u<t;u++)for(let c=0;c<i;c++){var l=c*t+u;e[4*l+0]=a,e[4*l+1]=n,e[4*l+2]=o,e[4*l+3]=h}}initDefault(){this.normalTexture=this.createTexture(32,32,127.5,127.5,255,255,"default-normalTexture"),this.maskTexture=this.createTexture(32,32,255,127.5,0,255,"default-maskTexture"),this.whiteTexture=this.createTexture(32,32,255,255,255,255,"default-whiteTexture"),this.blackTexture=this.createTexture(32,32,0,0,0,255,"default-blackTexture"),this.redTexture=this.createTexture(32,32,255,0,0,255,"default-redTexture"),this.blueTexture=this.createTexture(32,32,0,0,255,255,"default-blueTexture"),this.greenTexture=this.createTexture(32,32,0,255,0,255,"default-greenTexture"),this.yellowTexture=this.createTexture(32,32,0,255,255,255,"default-yellowTexture"),this.grayTexture=this.createTexture(32,32,128,128,128,255,"default-grayTexture");var e=new Kh().generateBRDFLUTTexture();e.name="BRDFLUT",this.addTexture("BRDFLUT",e),this.defaultSky=new Ai,this.defaultSky.createFromTexture(128,this.blackTexture),Y.getInstance().attached(this.defaultSky,this),Y.getInstance().attached(e,this),Y.getInstance().attached(this.normalTexture,this),Y.getInstance().attached(this.maskTexture,this),Y.getInstance().attached(this.whiteTexture,this),Y.getInstance().attached(this.blackTexture,this),Y.getInstance().attached(this.redTexture,this),Y.getInstance().attached(this.blueTexture,this),Y.getInstance().attached(this.greenTexture,this),Y.getInstance().attached(this.yellowTexture,this),Y.getInstance().attached(this.grayTexture,this),this.defaultGUITexture=new gi(this.whiteTexture),this.defaultGUISprite=new ni(this.defaultGUITexture),this.defaultGUISprite.trimSize.set(4,4)}}class b{static get frameRate(){return this._frameRate}static set frameRate(e){this._frameRate=e,this._frameRateValue=1/e,360<=e&&(this._frameRateValue=0)}static get size(){return M.presentationSize}static get aspect(){return M.aspect}static get width(){return M.windowWidth}static get height(){return M.windowHeight}static async init(e={}){console.log("Engine Version",Fs),this.setting={...this.setting,...e.engineSetting},await M.init(e.canvasConfig),D.init(),$e.init(),ve.init(),Ee.init(),Ce.init(),this.res=new tl,this._beforeRender=e.beforeRender,this._renderLoop=e.renderLoop,this._lateRender=e.lateRender,this.inputSystem=new zs,this.inputSystem.initCanvas(M.canvas)}static startRenderView(e){this.renderJobs||(this.renderJobs=new Map),this.views=[e];var t=new wa(e);return this.renderJobs.set(e,t),t.addPost(new Sa),t.start(),this.resume(),t}static startRenderViews(e){this.renderJobs||(this.renderJobs=new Map),this.views=e;for(let a=0;a<e.length;a++){var t=e[a],i=new wa(t);this.renderJobs.set(t,i),i.addPost(new Sa),i.start()}this.resume()}static getRenderJob(e){return this.renderJobs.get(e)}static pause(){this._requestAnimationFrameID!=0&&(cancelAnimationFrame(this._requestAnimationFrameID),this._requestAnimationFrameID=0)}static resume(){this._requestAnimationFrameID=requestAnimationFrame(e=>this.render(e))}static render(e){this._deltaTime=e-this._time,this._time=e,0<this._frameRateValue?(this._frameTimeCount+=.001*this._deltaTime,this._frameTimeCount>=.95*this._frameRateValue&&(this._frameTimeCount=0,this.updateFrame(e))):this.updateFrame(e),this.resume()}static updateFrame(e){he.delta=e-he.time,he.time=e,he.frame+=1,is.tick(he.delta),this._beforeRender&&this._beforeRender(),J.componentsBeforeUpdateList.forEach((i,a)=>{i.forEach((n,o)=>{o.enable&&n(a)})});let t=M.device.createCommandEncoder();J.componentsComputeList.forEach((i,a)=>{i.forEach((n,o)=>{o.enable&&n(a,t)})}),M.device.queue.submit([t.finish()]),ve.modelMatrixBindGroup.writeBuffer(),J.componentsUpdateList.forEach((i,a)=>{i.forEach((n,o)=>{o.enable&&n(a)})}),this._renderLoop&&this._renderLoop(),this.renderJobs.forEach((i,a)=>{i.renderFrame()}),J.componentsLateUpdateList.forEach((i,a)=>{i.forEach((n,o)=>{o.enable&&n(a)})}),this._lateRender&&this._lateRender()}}s(b,"res"),s(b,"inputSystem"),s(b,"views"),s(b,"_frameRateValue",0),s(b,"_frameRate",360),s(b,"_frameTimeCount",0),s(b,"_deltaTime",0),s(b,"_time",0),s(b,"_beforeRender"),s(b,"_renderLoop"),s(b,"_lateRender"),s(b,"_requestAnimationFrameID",0),s(b,"Engine3D"),s(b,"setting",{occlusionQuery:{enable:!0,debug:!1},pick:{enable:!0,mode:"bound",detail:"mesh"},render:{debug:!1,renderPassState:4,renderState_left:5,renderState_right:5,renderState_split:.5,quadScale:1,hdrExposure:1.5,debugQuad:-1,maxPointLight:1e3,maxDirectLight:4,maxSportLight:1e3,drawOpMin:0,drawOpMax:Number.MAX_SAFE_INTEGER,drawTrMin:0,drawTrMax:Number.MAX_SAFE_INTEGER,zPrePass:!1,gi:!1,postProcessing:{globalFog:{debug:!1,enable:!1,fogType:0,height:100,start:800,end:200,density:.02,ins:1,skyFactor:.5,skyRoughness:.4,overrideSkyFactor:.8,fogColor:new x(112/255,61/255,139/255,1)},ssao:{enable:!1,radius:.15,bias:-.1,aoPower:2,debug:!0},outline:{enable:!1,strength:1,groupCount:4,outlinePixel:2,fadeOutlinePixel:4,useAddMode:!1,debug:!0},taa:{enable:!1,jitterSeedCount:8,blendFactor:.1,sharpFactor:.6,sharpPreBlurFactor:.5,temporalJitterScale:.13,debug:!0},gtao:{enable:!1,darkFactor:1,maxDistance:5,maxPixel:50,rayMarchSegment:6,multiBounce:!1,usePosFloat32:!0,blendColor:!0,debug:!0},ssr:{enable:!1,pixelRatio:1,fadeEdgeRatio:.2,rayMarchRatio:.5,fadeDistanceMin:600,fadeDistanceMax:2e3,roughnessThreshold:.5,powDotRN:.2,mixThreshold:.1,debug:!0},bloom:{enable:!1,blurX:4,blurY:4,strength:.25,radius:1.3,luminosityThreshold:.98,debug:!1},fxaa:{enable:!1},depthOfView:{enable:!1,iterationCount:3,pixelOffset:1,near:150,far:300}}},shadow:{enable:!0,type:"HARD",shadowBias:.00204,pointShadowBias:.002,shadowQuality:2.5,shadowBound:50,shadowSize:1024,pointShadowSize:1024,shadowSoft:.005,shadowNear:1,shadowFar:2e3,needUpdate:!0,autoUpdate:!0,updateFrameRate:2,debug:!1},gi:{enable:!1,offsetX:0,offsetY:0,offsetZ:0,probeSpace:64,probeXCount:4,probeYCount:2,probeZCount:4,probeSize:32,probeSourceTextureSize:2048,octRTMaxSize:2048,octRTSideSize:16,maxDistance:110.72,normalBias:.25,depthSharpness:1,hysteresis:.98,lerpHysteresis:.01,irradianceChebyshevBias:.01,rayNumber:144,irradianceDistanceBias:32,indirectIntensity:1,ddgiGamma:2.2,bounceIntensity:.025,probeRoughness:1,realTimeGI:!1,debug:!1,autoRenderProbe:!1},sky:{type:"HDRSKY",sky:null,skyExposure:1,defaultFar:65536,defaultNear:1},light:{maxLight:4096},material:{materialChannelDebug:!1,materialDebug:!1}}),s(b,"renderJobs");let rl=`
    struct GlobalUniform {
        projMat: mat4x4<f32>,
        viewMat: mat4x4<f32>,
        cameraWorldMatrix: mat4x4<f32>,
        pvMatrixInv : mat4x4<f32>,
        shadowMatrix: array<mat4x4<f32>,8>,
        CameraPos: vec3<f32>,
        
        frame: f32,
        time: f32,
        delta: f32,
        shadowBias: f32,
        skyExposure: f32,
        renderPassState:f32,
        quadScale: f32,
        hdrExposure: f32,
        
        renderState_left: i32,
        renderState_right: i32,
        renderState_split: f32,

        mouseX: f32,
        mouseY: f32,
        windowWidth: f32,
        windowHeight: f32,

        near: f32,
        far: f32,

        pointShadowBias: f32,
        shadowMapSize: f32,
        shadowSoft: f32,
    };

    struct PickResult{
        pick_meshID:f32,
        pick_meshID2:f32,
        pick_UV:vec2<f32>,
        pick_Position:vec4<f32>,
        pick_Normal:vec4<f32>,
        pick_Tangent:vec4<f32>,
    }

    @group(0) @binding(0) var<uniform> standUniform: GlobalUniform;
    @group(0) @binding(1) var<storage,read_write> outBuffer: PickResult;
    @group(0) @binding(2) var visibleMap : texture_2d<f32>;

    @compute @workgroup_size( 1 )
    fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
    {
    var result:PickResult ;
    // result.pick_meshID
    let texSize = textureDimensions(visibleMap).xy;
    let screenPoint = vec2<f32>(standUniform.mouseX/standUniform.windowWidth,standUniform.mouseY/standUniform.windowHeight);

    let mouseUV = screenPoint * vec2<f32>(texSize.xy); 
    let info = textureLoad(visibleMap, vec2<i32>(mouseUV) , 0);

    outBuffer.pick_meshID = f32(info.w) ;
    outBuffer.pick_meshID2 = f32(info.w) ;
    outBuffer.pick_Tangent = vec4<f32>(2.0,2.0,2.0,2.0) ;
    outBuffer.pick_UV = vec2<f32>(standUniform.mouseX,standUniform.mouseY) ;
    outBuffer.pick_Position = vec4<f32>(info.xyzw) ;
    outBuffer.pick_Normal = vec4<f32>(info.xyzw) ;
    }
`,Ia=`
#include "Common_vert"
#include "FragmentVarying"
#include "GlobalUniform"

struct FragmentOutput {
    @location(0) o_Position: vec4<f32>,
    @location(1) o_Normal: vec4<f32>,
    @location(2) o_Color: vec4<f32>
};

struct MaterialUniform {
    baseColor: vec4<f32>,
    emissiveColor: vec4<f32>,
    emissiveIntensity: f32,
    normalScale: f32,
    alphaCutoff: f32
};

@group(2) @binding(0)
var<uniform> materialUniform: MaterialUniform;

@group(1) @binding(auto)
var baseMapSampler: sampler;
@group(1) @binding(auto)
var baseMap: texture_2d<f32>;

@group(1) @binding(auto)
var normalMapSampler: sampler;
@group(1) @binding(auto)
var normalMap: texture_2d<f32>;

@group(1) @binding(auto)
var emissiveMapSampler: sampler;
@group(1) @binding(auto)
var emissiveMap: texture_2d<f32>;

fn vert(inputData:VertexAttributes) -> VertexOutput {
    ORI_Vert(inputData) ;
    return ORI_VertexOut ;
}

var<private> ORI_FragmentOutput: FragmentOutput;
var<private> ORI_VertexVarying: FragmentVarying;

@fragment
fn FragMain(vertex_varying:FragmentVarying) -> FragmentOutput {
    ORI_VertexVarying = vertex_varying;
    var texColor = textureSample(baseMap, baseMapSampler, ORI_VertexVarying.fragUV0.xy );

    var emissive = textureSample(emissiveMap, emissiveMapSampler, ORI_VertexVarying.fragUV0.xy ).rgb ;
    let intensity = materialUniform.emissiveIntensity * materialUniform.emissiveColor.a ;
    emissive = emissive.rgb * materialUniform.emissiveColor.rgb ;
    emissive = convertToHDRRGB(emissive,intensity);

    if (materialUniform.alphaCutoff-texColor.w > 0.0) {
        discard ;
    }

    var o_Position = vec4<f32>(ORI_VertexVarying.vWorldPos.xyz,emissive.r) ;
    var o_Normal = vec4<f32>((ORI_VertexVarying.vWorldNormal.xyz * 0.5 + 0.5 ),emissive.g) ;
    var o_Color = vec4<f32>((texColor * materialUniform.baseColor).rgb , emissive.b )  ;
    return FragmentOutput(o_Position,o_Normal,vec4<f32>(o_Color));
}

fn convertToHDRRGB( color : vec3<f32> , ins:f32 ) -> vec3<f32> {
    var hdrColor = vec3<f32>(0.0,0.0,0.0);
    hdrColor.r = color.r * pow(2.4, ins);
    hdrColor.g = color.g * pow(2.4, ins);
    hdrColor.b = color.b * pow(2.4, ins);
    return hdrColor;
}
`,il=`
#include "GlobalUniform"

struct uniformData {
    exposure: f32,
    roughness: f32
};

struct FragmentOutput {
    @location(0) o_Position: vec4<f32>,
    @location(1) o_Normal: vec4<f32>,
    @location(2) o_Color: vec4<f32>
};

@group(1) @binding(4)
var baseMapSampler: sampler;
@group(1) @binding(5)
var baseMap: texture_cube<f32>;

@group(2) @binding(0)
var<uniform> global: uniformData;

fn LinearToGammaSpace(linRGB: vec3<f32>) -> vec3<f32> {
    var linRGB1: vec3<f32>;
    linRGB1 = linRGB;
    linRGB1 = max(linRGB1, vec3<f32>(0.0, 0.0, 0.0));
    linRGB1.x = pow(linRGB1.x, 0.4166666567325592);
    linRGB1.y = pow(linRGB1.y, 0.4166666567325592);
    linRGB1.z = pow(linRGB1.z, 0.4166666567325592);
    return max(((1.0549999475479126 * linRGB1) - vec3<f32>(0.054999999701976776)), vec3<f32>(0.0));
}

@fragment
fn main(@location(0) fragUV: vec2<f32>, @location(1) vWorldPos: vec4<f32>, @location(2) vWorldNormal: vec3<f32>) -> FragmentOutput {
    let maxLevel: u32 = textureNumLevels(baseMap);
    let textureColor:vec3<f32> = textureSampleLevel(baseMap, baseMapSampler, normalize(vWorldPos.xyz), global.roughness * f32(maxLevel) ).xyz;
    let o_Color = 0.618 * vec4<f32>(LinearToGammaSpace(textureColor) * globalUniform.skyExposure , 1.0);
    let o_Normal = vec4(vWorldNormal,1.0) ;
    let o_Position = vec4<f32>(vWorldPos.xyz,100000.0) ;
    return FragmentOutput(o_Position,o_Normal,o_Color);
}
`;class Ts{}s(Ts,"Ori_AllShader",`
        #include "Common_vert"
        #include "Common_frag"
        #include "BxDF_frag"

        fn vert(inputData:VertexAttributes) -> VertexOutput {
            ORI_Vert(inputData) ;
            return ORI_VertexOut ;
        }

        fn frag(){
            ORI_ShadingInput.BaseColor = materialUniform.baseColor ;
            ORI_ShadingInput.Roughness = materialUniform.roughness  ;
            ORI_ShadingInput.Metallic = materialUniform.metallic ;
            ORI_ShadingInput.Specular = 0.5 ;
            ORI_ShadingInput.AmbientOcclusion = materialUniform.ao ;
            ORI_ShadingInput.EmissiveColor = vec4<f32>(0.0);

            ORI_ShadingInput.Normal = ORI_VertexVarying.vWorldNormal.rgb ;

            #if USE_SHADOWMAPING
                useShadow();
            #endif

            BxDFShading();
        }
    `);let al=`
    #include "Common_vert"
    #include "Common_frag"
    #include "UnLit_frag"
    #include "Irradiance_frag"
    #include "MathShader"
    
    struct MaterialUniform {
      probeUniform:vec4<f32>,
    };

    @group(2) @binding(0)
    var<uniform> materialUniform: MaterialUniform;

    var<private> probeID: i32 ;
    var<private> debugType: i32 ;
    
    fn vert(inputData:VertexAttributes) -> VertexOutput {
        ORI_Vert(inputData) ;
        return ORI_VertexOut ;
    }

    fn frag(){
        probeID = i32(materialUniform.probeUniform.x);
        debugType = i32(materialUniform.probeUniform.y);
        if(debugType == 0){
            ORI_ShadingInput.BaseColor = debugProbe(probeID);
        }else if(debugType == 1){
            ORI_ShadingInput.BaseColor = getIrradiance();
        }else if(debugType == 2){
            ORI_ShadingInput.BaseColor = debugProbeDepth(probeID);
        }
        UnLit();
    }
    `;class Ra{}s(Ra,"lambert_frag_wgsl",`
    #include "FragmentOutput.wgsl"
    #include "LighStruct"
    #include "ColorUtil_frag"

    @group(2) @binding(4)
    var baseMapSampler: sampler;
    @group(2) @binding(5)
    var baseMap: texture_2d<f32>;

    struct StandMaterial {
        transformUV1:vec4<f32>,
        transformUV2:vec4<f32>,
        baseColor: vec4<f32>,
        dirLight: vec4<f32>,
        dirLightColor: vec4<f32>,
        alphaCutoff: f32,
        shadowBias: f32,
    };

    @group(2) @binding(0)
    var<uniform> materialUniform: StandMaterial;

    fn frag(){
        var baseColor = materialUniform.baseColor;
        var alphaCutoff = materialUniform.alphaCutoff;
        var shadowBias = materialUniform.shadowBias;
        var transformUV1 = materialUniform.transformUV1;
        var transformUV2 = materialUniform.transformUV2;

        var uv = transformUV1.zw * vUv0 + transformUV1.xy;
        var baseMap = textureSample(baseMap, baseMapSampler, uv).xyz;

        let viewDir = normalize(globalUniform.cameraWorldMatrix[3].xyz - vWorldPos.xyz) ;

        let lightIndex = getCluster(builtin_fragCoord);
        let start = max(lightIndex.start, 0.0);
        let count = max(lightIndex.count, 0.0);
        let end = max(start + count , 0.0);
        var color = vec3<f32>(0.0);
        for(var i:i32 = i32(start) ; i < i32(end); i = i + 1 )
        {
          let light = getLight(i) ;
          switch (light.lightType) {
            case PointLightType: {
              let lightingColor = lambert_pointLight( baseMap , viewDir,vWorldNormal,vWorldPos.xyz,light);
              color += lightingColor ;
            }
            case DirectLightType: {
              let lightingColor = lambert_directLight( baseMap , viewDir,vWorldNormal,light.direction,light.lightColor,light.intensity);
              color += lightingColor ;
            }
            case SpotLightType: {

            }
            default: {
            }
          }
        }

        ORI_FragmentOutput.color = vec4<f32>(color, 1.0);
    }
    `),s(Ra,"lambert_vert_wgsl",`
      #include "Common_vert"

      fn vert(){

      }
    `);let sl=`
    struct FragmentOutput {
        @location(0) o_Target: vec4<f32>
    };

    var<private> varying_uv: vec2<f32>;
    @group(1) @binding(0)
    var baseMapSampler: sampler;
    @group(1) @binding(1)
    var baseMap: texture_2d<f32>;

    struct MaterialUniform{
        u_texel: vec2<f32>,
        u_strength: f32,
    }

    @group(2) @binding(0)
    var<uniform> materialUniform: MaterialUniform;


    fn LinearToGammaSpace(linRGB0: vec3<f32>) -> vec3<f32> {
        var linRGB = max(linRGB0, vec3(0.0, 0.0, 0.0));
        linRGB.r = pow(linRGB.r,0.416666667);
        linRGB.g = pow(linRGB.g,0.416666667);
        linRGB.b = pow(linRGB.b,0.416666667);
        return max(1.055 * linRGB - 0.055, vec3(0.0, 0.0, 0.0));
    }

    fn texture2D( uv:vec2<f32> , offset:vec2<f32> ) -> vec4<f32> {
        return textureSample(baseMap, baseMapSampler, uv.xy + offset ).rgba ;
    }

    @fragment
    fn main(@location(0) fragUV: vec2<f32>) -> FragmentOutput {
        var v_vTexcoord = fragUV ;
        // v_vTexcoord.x = 1.0 - v_vTexcoord.x ;
        v_vTexcoord.y = 1.0 - v_vTexcoord.y ;

        var reducemul = 1.0 / 8.0;
        var reducemin = 1.0 / 128.0;

        var basecol = texture2D(v_vTexcoord , vec2<f32>(0.0)).rgba;
        var baseNW = texture2D(v_vTexcoord , -materialUniform.u_texel).rgb;
        var baseNE = texture2D(v_vTexcoord , vec2<f32>(materialUniform.u_texel.x, -materialUniform.u_texel.y)).rgb;
        var baseSW = texture2D(v_vTexcoord , vec2<f32>(-materialUniform.u_texel.x, materialUniform.u_texel.y)).rgb;
        var baseSE = texture2D(v_vTexcoord , materialUniform.u_texel ).rgb;

        // var gray = vec3<f32>(0.299, 0.587, 0.114);
        var gray = vec3<f32>(0.213, 0.715, 0.072);
        var monocol = dot(basecol.rgb, gray);
        var monoNW = dot(baseNW, gray);
        var monoNE = dot(baseNE, gray);
        var monoSW = dot(baseSW, gray);
        var monoSE = dot(baseSE, gray);

        var monomin = min(monocol, min(min(monoNW, monoNE), min(monoSW, monoSE)));
        var monomax = max(monocol, max(max(monoNW, monoNE), max(monoSW, monoSE)));

        var dir = vec2<f32>(-((monoNW + monoNE) - (monoSW + monoSE)), ((monoNW + monoSW) - (monoNE + monoSE)));
        var dirreduce = max((monoNW + monoNE + monoSW + monoSE) * reducemul * 0.25, reducemin);
        var dirmin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirreduce);
        dir = min(vec2<f32>(materialUniform.u_strength), max(vec2<f32>(-materialUniform.u_strength), dir * dirmin)) * materialUniform.u_texel;

        var resultA = 0.5 * (texture2D(v_vTexcoord , dir * -0.166667).rgb  +
                            texture2D(v_vTexcoord , dir * 0.166667).rgb);
        var resultB = resultA * 0.5 + 0.25 * (texture2D( v_vTexcoord , dir * -0.5).rgb +
                                            texture2D( v_vTexcoord , dir * 0.5).rgb);
        var monoB = dot(resultB.rgb, gray);
        
        var color:vec3<f32> ;
        if(monoB < monomin || monoB > monomax) {
            color = resultA ;//* v_vColour;
        } else {
            color = resultB ;//* v_vColour;
        }
        return FragmentOutput(vec4<f32>(color.rgb,basecol.a));
    }
`;class Cs{}s(Cs,"cs",`
    #include 'ColorUtil'
    struct UniformData {
        width: f32,
        height: f32,
        sunU: f32,
        sunV: f32,
        eyePos: f32,
        sunRadius: f32,         // = 500.0;
        sunRadiance: f32,       // = 20.0;
        mieG: f32,              // = 0.76;
        mieHeight: f32,         // = 1200;
        sunBrightness: f32,     // = 1.0;
        displaySun: f32,        // > 0.5: true
        skyColor: vec4<f32>,        // sky color
      };

      @group(0) @binding(0) var<uniform> uniformBuffer: UniformData;
      @group(0) @binding(1) var outTexture : texture_storage_2d<rgba16float, write>;

      var<private> uv01: vec2<f32>;
      var<private> fragCoord: vec2<i32>;
      var<private> texSizeF32: vec2<f32>;

      var<private> PI:f32 = 3.1415926535;
      var<private> PI_2:f32 = 0.0;
      var<private> EPSILON:f32 = 0.0000001;
      var<private> SAMPLES_NUMS:i32 = 16;

      var<private> transmittance:vec3<f32>;
      var<private> insctrMie:vec3<f32>;
      var<private> insctrRayleigh:vec3<f32>;

      @compute @workgroup_size( 8 , 8 , 1 )
      fn CsMain( @builtin(workgroup_id) workgroup_id : vec3<u32> , @builtin(global_invocation_id) globalInvocation_id : vec3<u32>)
      {
        fragCoord = vec2<i32>(globalInvocation_id.xy);
        texSizeF32 = vec2<f32>( uniformBuffer.width, uniformBuffer.height);
        uv01 = vec2<f32>(globalInvocation_id.xy) / texSizeF32;
        uv01.y = 1.0 - uv01.y - EPSILON;
        PI_2 = PI * 2.0;
        textureStore(outTexture, fragCoord , mainImage(uv01));//vec4(uv01, 0.0, 1.0));
      }

      struct ScatteringParams
      {
        sunRadius:f32,
        sunRadiance:f32,

        mieG:f32,
        mieHeight:f32,

        rayleighHeight:f32,

        waveLambdaMie:vec3<f32>,
        waveLambdaOzone:vec3<f32>,
        waveLambdaRayleigh:vec3<f32>,

        earthRadius:f32,
        earthAtmTopRadius:f32,
        earthCenter:vec3<f32>,
      }

      fn ComputeSphereNormal(coord:vec2<f32>, phiStart:f32, phiLength:f32, thetaStart:f32, thetaLength:f32) -> vec3<f32>
      {
        var normal:vec3<f32>;
        normal.x = -sin(thetaStart + coord.y * thetaLength) * sin(phiStart + coord.x * phiLength);
        normal.y = -cos(thetaStart + coord.y * thetaLength);
        normal.z = -sin(thetaStart + coord.y * thetaLength) * cos(phiStart + coord.x * phiLength);
        return normalize(normal);
      }

      fn ComputeRaySphereIntersection(position:vec3<f32>, dir:vec3<f32>, center:vec3<f32>, radius:f32) -> vec2<f32>
      {
        var origin:vec3<f32> = position - center;
        var B = dot(origin, dir);
        var C = dot(origin, origin) - radius * radius;
        var D = B * B - C;

        var minimaxIntersections:vec2<f32>;
        if (D < 0.0)
        {
          minimaxIntersections = vec2<f32>(-1.0, -1.0);
        }
        else
        {
          D = sqrt(D);
          minimaxIntersections = vec2<f32>(-B - D, -B + D);
        }

        return minimaxIntersections;
      }

      fn ComputeWaveLambdaRayleigh(lambda: vec3<f32>) -> vec3<f32>
      {
        var n:f32 = 1.0003;
        var N:f32 = 2.545E25;
        var pn:f32 = 0.035;
        var n2:f32 = n * n;
        var pi3:f32 = PI * PI * PI;
        var rayleighConst:f32 = (8.0 * pi3 * pow(n2 - 1.0,2.0)) / (3.0 * N) * ((6.0 + 3.0 * pn) / (6.0 - 7.0 * pn));
        return vec3<f32>(rayleighConst) / (lambda * lambda * lambda * lambda);
      }

      fn ComputePhaseMie(theta: f32, g:f32) -> f32
      {
        var g2 = g * g;
        return (1.0 - g2) / pow(1.0 + g2 - 2.0 * g * saturate(theta), 1.5) / (4.0 * PI);
      }

      fn ComputePhaseRayleigh(theta: f32) -> f32
      {
        var theta2 = theta * theta;
        return (theta2 * 0.75 + 0.75) / (4.0 * PI);
      }

      fn ChapmanApproximation(X: f32, h: f32, cosZenith: f32) -> f32
      {
        var c = sqrt(X + h);
        var c_exp_h = c * exp(-h);

        if (cosZenith >= 0.0)
        {
          return c_exp_h / (c * cosZenith + 1.0);
        }
        else
        {
          var x0 = sqrt(1.0 - cosZenith * cosZenith) * (X + h);
          var c0 = sqrt(x0);

          return 2.0 * c0 * exp(X - x0) - c_exp_h / (1.0 - c * cosZenith);
        }
      }

      fn GetOpticalDepthSchueler(h: f32, H: f32, earthRadius: f32, cosZenith: f32) -> f32
      {
        return H * ChapmanApproximation(earthRadius / H, h / H, cosZenith);
      }

      fn GetTransmittance(setting: ScatteringParams, L:vec3<f32>, V: vec3<f32>) -> vec3<f32>
      {
        var ch = GetOpticalDepthSchueler(L.y, setting.rayleighHeight, setting.earthRadius, V.y);
        return exp(-(setting.waveLambdaMie + setting.waveLambdaRayleigh) * ch);
      }

      fn ComputeOpticalDepth(setting: ScatteringParams, samplePoint: vec3<f32>, V: vec3<f32>, L: vec3<f32>, neg: f32) -> vec2<f32>
      {
        var rl = length(samplePoint);
        var h = rl - setting.earthRadius;
        var r: vec3<f32> = samplePoint / rl;

        var cos_chi_sun = dot(r, L);
        var cos_chi_ray = dot(r, V * neg);

        var opticalDepthSun = GetOpticalDepthSchueler(h, setting.rayleighHeight, setting.earthRadius, cos_chi_sun);
        var opticalDepthCamera = GetOpticalDepthSchueler(h, setting.rayleighHeight, setting.earthRadius, cos_chi_ray) * neg;

        return vec2<f32>(opticalDepthSun, opticalDepthCamera);
      }

      fn AerialPerspective(setting:ScatteringParams, start: vec3<f32>, end: vec3<f32>, V: vec3<f32>, L: vec3<f32>, infinite:i32)
      {
        var inf_neg:f32 = 1.0;
        if( infinite == 0){
          inf_neg = -1.0;
        }

        var sampleStep: vec3<f32> = (end - start) / f32(SAMPLES_NUMS);
        var samplePoint: vec3<f32> = end - sampleStep;
        var sampleLambda: vec3<f32> = setting.waveLambdaMie + setting.waveLambdaRayleigh + setting.waveLambdaOzone;

        var sampleLength:f32 = length(sampleStep);

        var scattering:vec3<f32> = vec3<f32>(0.0);
        var lastOpticalDepth:vec2<f32> = ComputeOpticalDepth(setting, end, V, L, inf_neg);

        for (var i:i32 = 1; i < SAMPLES_NUMS; i = i + 1)
        {
          var opticalDepth: vec2<f32> = ComputeOpticalDepth(setting, samplePoint, V, L, inf_neg);

          var segment_s: vec3<f32> = exp(-sampleLambda * (opticalDepth.x + lastOpticalDepth.x));
          var segment_t: vec3<f32> = exp(-sampleLambda * (opticalDepth.y - lastOpticalDepth.y));

          transmittance *= segment_t;

          scattering = scattering * segment_t;
          scattering += exp(-(length(samplePoint) - setting.earthRadius) / setting.rayleighHeight) * segment_s;

          lastOpticalDepth = opticalDepth;
          samplePoint = samplePoint - sampleStep;
        }

        insctrMie = scattering * setting.waveLambdaMie * sampleLength;
        insctrRayleigh = scattering * setting.waveLambdaRayleigh * sampleLength;
      }

      fn ComputeSkyboxChapman(setting: ScatteringParams, eye:vec3<f32>, V:vec3<f32>, L:vec3<f32>) -> f32
      {
        var neg:i32 = 1;
        var outerIntersections: vec2<f32> = ComputeRaySphereIntersection(eye, V, setting.earthCenter, setting.earthAtmTopRadius);
        if (outerIntersections.y < 0.0){
          return 0.0;
        }
        var innerIntersections: vec2<f32> = ComputeRaySphereIntersection(eye, V, setting.earthCenter, setting.earthRadius);
        if (innerIntersections.x > 0.0)
        {
          neg = 0;
          outerIntersections.y = innerIntersections.x;
        }

        let eye0 = eye - setting.earthCenter;

        var start : vec3<f32> = eye0 + V * max(0.0, outerIntersections.x);
        var end : vec3<f32>= eye0 + V * outerIntersections.y;

        AerialPerspective(setting, start, end, V, L, neg);

        //bool intersectionTest = innerIntersections.x < 0.0 && innerIntersections.y < 0.0;
        //return intersectionTest ? 1.0 : 0.0;

        if(innerIntersections.x < 0.0 && innerIntersections.y < 0.0){
          return 1.0;
        }
        return 0.0;
      }

      fn ComputeSkyInscattering(setting: ScatteringParams, eye: vec3<f32>, V: vec3<f32>, L: vec3<f32>) -> vec4<f32>
      {
        transmittance = vec3<f32>(1.0);
        insctrMie = vec3<f32>(0.0);
        insctrRayleigh = vec3<f32>(0.0);
        var intersectionTest:f32 = ComputeSkyboxChapman(setting, eye, V, L);

        var phaseTheta = dot(V, L);
        var phaseMie = ComputePhaseMie(phaseTheta, setting.mieG);
        var phaseRayleigh = ComputePhaseRayleigh(phaseTheta);
        var phaseNight = 1.0 - saturate(transmittance.x * EPSILON);

        var insctrTotalMie: vec3<f32> = insctrMie * phaseMie;
        var insctrTotalRayleigh: vec3<f32> = insctrRayleigh * phaseRayleigh;

        var sky: vec3<f32> = (insctrTotalMie + insctrTotalRayleigh) * setting.sunRadiance;
        if(uniformBuffer.displaySun > 0.5){
          var angle:f32 = saturate((1.0 - phaseTheta) * setting.sunRadius);
          var cosAngle:f32 = cos(angle * PI * 0.5);
          var edge:f32 = 0.0;
          if(angle >= 0.9){
            edge = smoothstep(0.9, 1.0, angle);
          }

          var limbDarkening: vec3<f32> = GetTransmittance(setting, -L, V);
          limbDarkening *= pow(vec3<f32>(cosAngle), vec3<f32>(0.420, 0.503, 0.652)) * mix(vec3<f32>(1.0), vec3<f32>(1.2,0.9,0.5), edge) * intersectionTest;
          sky += limbDarkening * uniformBuffer.sunBrightness; 
        }
        return vec4<f32>(sky, phaseNight * intersectionTest);
      }

      fn TonemapACES(x: vec3<f32>) -> vec3<f32>
      {
        var A:f32 = 2.51f;
        var B:f32 = 0.03f;
        var C:f32 = 2.43f;
        var D:f32 = 0.59f;
        var E:f32 = 0.14f;
        return (x * (A * x + B)) / (x * (C * x + D) + E);
      }

      fn noise(uv:vec2<f32>) -> f32
      {
        return fract(dot(sin(vec3<f32>(uv.xyx) * vec3<f32>(uv.xyy) * 1024.0), vec3<f32>(341896.483, 891618.637, 602649.7031)));
      }

      fn mainImage( uv:vec2<f32> ) -> vec4<f32>
      {
        let eyePosition = uniformBuffer.eyePos;
        var sun = vec2<f32>(uniformBuffer.sunU, uniformBuffer.sunV);
        var V: vec3<f32> = ComputeSphereNormal(uv, 0.0, PI_2, 0.0, PI);
        var L: vec3<f32> = ComputeSphereNormal(vec2<f32>(sun.x, sun.y), 0.0, PI_2, 0.0, PI);

        var setting: ScatteringParams;
        setting.sunRadius = uniformBuffer.sunRadius;//500.0;
        setting.sunRadiance = uniformBuffer.sunRadiance;//20.0;
        setting.mieG = uniformBuffer.mieG;//0.76;
        setting.mieHeight = uniformBuffer.mieHeight;// 1200.0;
        setting.rayleighHeight = 8000.0;
        setting.earthRadius = 6360000.0;
        setting.earthAtmTopRadius = 6420000.0;
        setting.earthCenter = vec3<f32>(0, -setting.earthRadius, 0);
        setting.waveLambdaMie = vec3<f32>(0.0000002);

        // wavelength with 680nm, 550nm, 450nm
        setting.waveLambdaRayleigh = ComputeWaveLambdaRayleigh(vec3<f32>(0.000000680, 0.000000550, 0.000000450));

        // see https://www.shadertoy.com/view/MllBR2
        setting.waveLambdaOzone = vec3<f32>(1.36820899679147, 3.31405330400124, 0.13601728252538)* 0.0000006 * 2.504;

        var eye:vec3<f32> = vec3<f32>(0,eyePosition,0);
        var sky0:vec4<f32> = ComputeSkyInscattering(setting, eye, V, L);
        var sky = vec3<f32>(sky0.rgb);

        sky = TonemapACES(sky.rgb * 2.0);
        sky = pow(sky.rgb, vec3<f32>(1.0/1.2)); // gamma

        var fragColor:vec4<f32> = vec4<f32>((sky.rgb), 1.0);
        return fragColor;
      }
    `);class nl{constructor(){s(this,"sunRadius",500),s(this,"sunRadiance",11),s(this,"mieG",.76),s(this,"mieHeight",1200),s(this,"eyePos",1500),s(this,"sunX",.71),s(this,"sunY",.56),s(this,"sunBrightness",1),s(this,"displaySun",!0),s(this,"defaultTextureCubeSize",512),s(this,"defaultTexture2DSize",1024),s(this,"skyColor",new x(1,1,1,1))}}class ol extends bs{constructor(e){return super(),s(this,"_internalTexture"),s(this,"_cubeSize"),s(this,"setting"),this.setting=e,this._cubeSize=e.defaultTextureCubeSize,this._internalTexture=new hl(e.defaultTexture2DSize,.5*e.defaultTexture2DSize),this._internalTexture.update(this.setting),this.createFromTexture(this._cubeSize,this._internalTexture),this}get texture2D(){return this._internalTexture}apply(){return this._internalTexture.update(this.setting),this._faceData.uploadErpTexture(this._internalTexture),this}}class hl extends ce{constructor(e,t){super(e,t,F.rgba16float,!1,GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING),s(this,"_computeShader"),s(this,"_uniformBuffer"),this.initCompute(e,t)}initCompute(e,t){this._uniformBuffer=new ci(64),this._uniformBuffer.apply(),this._computeShader=new ft(Cs.cs),this._computeShader.setUniformBuffer("uniformBuffer",this._uniformBuffer),this._computeShader.setStorageTexture("outTexture",this),this._computeShader.workerSizeX=e/8,this._computeShader.workerSizeY=t/8}update(e){return this._uniformBuffer.setFloat("width",this.width),this._uniformBuffer.setFloat("height",this.height),this._uniformBuffer.setFloat("sunU",e.sunX),this._uniformBuffer.setFloat("sunV",e.sunY),this._uniformBuffer.setFloat("eyePos",e.eyePos),this._uniformBuffer.setFloat("sunRadius",e.sunRadius),this._uniformBuffer.setFloat("sunRadiance",e.sunRadiance),this._uniformBuffer.setFloat("mieG",e.mieG),this._uniformBuffer.setFloat("mieHeight",e.mieHeight),this._uniformBuffer.setFloat("sunBrightness",e.sunBrightness),this._uniformBuffer.setFloat("displaySun",e.displaySun?1:0),this._uniformBuffer.setColor("skyColor",e.skyColor),this._uniformBuffer.apply(),e=w.beginCommandEncoder(),w.computeCommand(e,[this._computeShader]),w.endCommandEncoder(e),this}}class ll extends pt{constructor(){super(),s(this,"transparency"),s(this,"metallic"),this.setShader("sky_vs_frag_wgsl","sky_fs_frag_wgsl"),this.getShader().setUniformVector3("eyesPos",new d),this.getShader().setUniformFloat("exposure",1),this.getShader().setUniformFloat("roughness",0);var e=this.getShader().shaderState;e.frontFace="cw",e.cullMode=ct.back,e.depthWriteEnabled=!1,e.depthCompare=dt.less}set baseMap(e){super.baseMap=e;var t="IS_HDR_SKY";this.renderShader.defineValue[t]!=e?.isHDRTexture&&this.renderShader.setDefine(t,!(e==null||!e.isHDRTexture))}get baseMap(){return super.baseMap}set envMap(e){}set shadowMap(e){}get exposure(){return b.setting.sky.skyExposure}set exposure(e){b.setting.sky.skyExposure=e}get roughness(){return this.renderShader.uniforms.roughness.value}set roughness(e){"roughness"in this.renderShader.uniforms&&(this.renderShader.uniforms.roughness.value=e)}}class Ni extends Xe{constructor(e,t,i,a,n,o,h){super(),s(this,"shape_vertices",[]),s(this,"shape_indices",[]),s(this,"radius"),s(this,"widthSegments"),s(this,"heightSegments"),s(this,"phiStart"),s(this,"phiLength"),s(this,"thetaStart"),s(this,"thetaLength"),this.radius=e,this.widthSegments=t,this.heightSegments=i,this.phiStart=a,this.phiLength=n,this.thetaStart=o,this.thetaLength=h,this.buildGeometry()}buildGeometry(){var e,t=0,i=this.heightSegments,a=this.widthSegments,n=this.radius,o=(i+1)*(a+1);let h=new Float32Array(3*o),l=new Float32Array(3*o),u=new Float32Array(2*o),c=new Uint16Array(a*i*2*3),f=0,p=0,m=0;for(e=0;e<=i;++e)for(var _=Math.PI*e/i,v=-n*Math.cos(_),S=n*Math.sin(_),T=0;T<=a;++T){var y,I=2*Math.PI*T/a,C=S*Math.cos(I),I=S*Math.sin(I),L=1/Math.sqrt(C*C+I*I+v*v);h[f++]=C,h[f++]=I,h[f++]=v,l[p++]=C*L,l[p++]=I*L,l[p++]=v*L,u[m++]=T/a,u[m++]=e/i,0<T&&0<e&&(I=(C=(a+1)*e+T)-1,L=(a+1)*(e-1)+T-1,y=(a+1)*(e-1)+T,e==i?(c[t++]=C,c[t++]=L,c[t++]=y):e==1?(c[t++]=C,c[t++]=I,c[t++]=L):(c[t++]=C,c[t++]=I,c[t++]=L,c[t++]=C,c[t++]=L,c[t++]=y))}this.setIndices(c),this.setAttribute(z.position,h),this.setAttribute(z.normal,l),this.setAttribute(z.uv,u),this.setAttribute(z.TEXCOORD_1,u),this.addSubGeometry({indexStart:0,indexCount:c.length,vertexStart:0,index:0}),this.bounds=new we(d.ZERO,new d(2*this.radius,2*this.radius,2*this.radius))}}class ul extends ye{constructor(){super(),s(this,"skyMaterial"),this.castShadow=!1,this.castGI=!0,this.addRendererMask(Se.Sky),this.alwaysRender=!0}init(){super.init(),this.object3D.bound=new we(d.ZERO.clone(),d.MAX),this.geometry=new Ni(b.setting.sky.defaultFar,20,20),this.skyMaterial||(this.skyMaterial=new ll)}onEnable(){this._readyPipeline?(this.castNeedPass(this.materials[0].getShader()),!this._inRenderer&&this.transform.scene3D&&((B.instance.sky=this)._inRenderer=!0)):this.initPipeline()}onDisable(){this._inRenderer&&this.transform.scene3D&&(this._inRenderer=!1,B.instance.sky=null)}renderPass2(e,t,i,a,n,o=!1){this.transform.updateWorldMatrix(),super.renderPass2(e,t,i,a,n,o)}set map(e){this.skyMaterial.baseMap=e,this.skyMaterial.name==null&&(this.skyMaterial.name="skyMaterial"),this.material=this.skyMaterial}get map(){return this.skyMaterial.baseMap}get exposure(){return this.skyMaterial.exposure}set exposure(e){this.skyMaterial&&(this.skyMaterial.exposure=e)}get roughness(){return this.skyMaterial.roughness}set roughness(e){this.skyMaterial&&(this.skyMaterial.roughness=e)}}class cl{constructor(){s(this,"rotateX"),s(this,"rotateY"),s(this,"sunX"),s(this,"sunY"),this.reset()}reset(){return this.rotateX=this.rotateY=this.sunX=this.sunY=Number.MAX_VALUE,this}isRotateChange(e,t){return .001<=Math.abs(this.rotateX-e)||.001<=Math.abs(this.rotateY-t)}isSkyChange(e,t){return .001<=Math.abs(this.sunX-e)||.001<=Math.abs(this.sunY-t)}save(e,t,i,a){return this.sunX=e,this.sunY=t,this.rotateX=i,this.rotateY=a,this}}class dl extends ul{constructor(){super(...arguments),s(this,"_atmosphericScatteringSky"),s(this,"_onChange",!0),s(this,"_relatedTransform"),s(this,"_historyData")}get sunX(){return this._atmosphericScatteringSky.setting.sunX}set sunX(e){this._atmosphericScatteringSky.setting.sunX!=e&&(this._atmosphericScatteringSky.setting.sunX=e,this._onChange=!0)}get sunY(){return this._atmosphericScatteringSky.setting.sunY}set sunY(e){this._atmosphericScatteringSky.setting.sunY!=e&&(this._atmosphericScatteringSky.setting.sunY=e,this._onChange=!0)}get eyePos(){return this._atmosphericScatteringSky.setting.eyePos}set eyePos(e){this._atmosphericScatteringSky.setting.eyePos!=e&&(this._atmosphericScatteringSky.setting.eyePos=e,this._onChange=!0)}get sunRadius(){return this._atmosphericScatteringSky.setting.sunRadius}set sunRadius(e){this._atmosphericScatteringSky.setting.sunRadius!=e&&(this._atmosphericScatteringSky.setting.sunRadius=e,this._onChange=!0)}get sunRadiance(){return this._atmosphericScatteringSky.setting.sunRadiance}set sunRadiance(e){this._atmosphericScatteringSky.setting.sunRadiance!=e&&(this._atmosphericScatteringSky.setting.sunRadiance=e,this._onChange=!0)}get sunBrightness(){return this._atmosphericScatteringSky.setting.sunBrightness}set sunBrightness(e){this._atmosphericScatteringSky.setting.sunBrightness!=e&&(this._atmosphericScatteringSky.setting.sunBrightness=e,this._onChange=!0)}get displaySun(){return this._atmosphericScatteringSky.setting.displaySun}set displaySun(e){this._atmosphericScatteringSky.setting.displaySun!=e&&(this._atmosphericScatteringSky.setting.displaySun=e,this._onChange=!0)}init(){super.init(),this._historyData=new cl,this._atmosphericScatteringSky=new ol(new nl)}start(){var e=this.transform.scene3D;this.map=this._atmosphericScatteringSky,e.envMap=this._atmosphericScatteringSky,super.start()}get relativeTransform(){return this._relatedTransform}set relativeTransform(e){this._relatedTransform=e,this._historyData.reset()}onUpdate(e){this._relatedTransform&&(this._relatedTransform.rotationZ=0,this._historyData.isRotateChange(this._relatedTransform.rotationX,this._relatedTransform.rotationY)?(this.sunX=(this._relatedTransform.rotationY+90)/360,this.sunY=this._relatedTransform.rotationX/180+.5):this._historyData.isSkyChange(this.sunX,this.sunY)&&(this._relatedTransform.rotationY=360*this.sunX-90,this._relatedTransform.rotationX=180*(this.sunY-.5)),this._historyData.save(this.sunX,this.sunY,this._relatedTransform.rotationX,this._relatedTransform.rotationY)),this._onChange&&(this._onChange=!1,this._atmosphericScatteringSky.apply())}}class Ye{}s(Ye,"vertexScale",1),s(Ye,"quadMaxCountForWorld",256),s(Ye,"quadMaxCountForView",2048),s(Ye,"SortOrderStartWorld",7e3),s(Ye,"SortOrderStartView",8e3),s(Ye,"SortOrderCanvasSpan",1e4);var rt=(r=>(r[r.View=0]="View",r[r.World=2]="World",r))(rt||{}),oi=(r=>(r[r.Simple=0]="Simple",r[r.Sliced=1]="Sliced",r[r.Tiled=2]="Tiled",r[r.Filled=3]="Filled",r))(oi||{}),Ut=(r=>(r[r.None=0]="None",r[r.BillboardY=9]="BillboardY",r[r.BillboardXYZ=10]="BillboardXYZ",r))(Ut||{});class hi extends Ze{constructor(){super(),s(this,"type"),s(this,"camera"),s(this,"_cameraPosition"),this._cameraPosition=new d}onUpdate(){this.enable&&this.transform.view3D.camera&&this.updateBillboardMatrix()}updateBillboardMatrix(){var e=this.transform.view3D.camera;this._cameraPosition.copyFrom(e.transform.back),this.type!=Ut.BillboardXYZ&&this.type==Ut.BillboardY&&(this._cameraPosition.y=0),this._cameraPosition.normalize(),this._cameraPosition.add(this.object3D.localPosition,this._cameraPosition),this.transform.lookAt(this.object3D.localPosition,this._cameraPosition,e.transform.up)}cloneTo(e){e.addComponent(hi).type=this.type}}var ia=(r=>(r[r.None=0]="None",r[r.Box=1]="Box",r[r.Capsule=2]="Capsule",r[r.Sphere=3]="Sphere",r[r.Mesh=4]="Mesh",r))(ia||{});class Ms{constructor(){s(this,"_center"),s(this,"_size"),s(this,"_halfSize"),s(this,"_shapeType",0),this._center=new d,this._size=new d,this._halfSize=new d}get shapeType(){return this._shapeType}setFromCenterAndSize(e,t){return e&&this._center.copy(e),t&&this._size.copy(t),this}get center(){return this._center}set center(e){this._center.copy(e)}get size(){return this._size}set size(e){this._size.copy(e),this._halfSize.copy(e).multiplyScalar(.5)}get halfSize(){return this._halfSize}rayPick(e,t){return null}}const yr=class extends Ms{constructor(){super(),s(this,"_pickRet"),s(this,"box"),this._shapeType=ia.Box,this.box=new we(new d,new d)}rayPick(a,i){this.box.setFromCenterAndSize(this.center,this.size);var t=yr.helpMatrix,i=(t.copyFrom(i).invert(),yr.helpRay.copy(a)),a=(i.applyMatrix(t),i.intersectBox(this.box,yr.v3_help_0));return a?(this._pickRet||(this._pickRet={intersect:!1,intersectPoint:new d,distance:0}),this._pickRet.intersect=!0,this._pickRet.intersectPoint=a,this._pickRet.distance=d.distance(i.origin,yr.v3_help_0),this._pickRet):null}};let Wr=yr;s(Wr,"v3_help_0",new d),s(Wr,"helpMatrix",new A),s(Wr,"helpRay",new Ct);class fl extends Ze{constructor(){super(),s(this,"_shape"),this._shape=new Wr}start(){b.setting.pick.mode=="pixel"&&this.transform.scene3D.view.pickFire.mouseEnableMap.set(this.transform.worldMatrix.index,this)}get shape(){return this._shape}set shape(e){this._shape=e}rayPick(e){return this._enable?this._shape.rayPick(e,this.transform.worldMatrix):null}beforeDestroy(e){var t;b.setting.pick.mode=="pixel"&&this.transform.scene3D.view.pickFire.mouseEnableMap.delete(this.transform.worldMatrix.index),(t=super.beforeDestroy)!=null&&t.call(this,e)}}var pl=(r=>(r[r.PingPong=0]="PingPong",r[r.Repeat=1]="Repeat",r[r.Clamp=2]="Clamp",r))(pl||{}),br=(r=>(r[r.Default=0]="Default",r[r.Clamp=1]="Clamp",r[r.Once=1]="Once",r[r.Loop=2]="Loop",r[r.PingPong=4]="PingPong",r[r.ClampForever=8]="ClampForever",r))(br||{});class yt{}s(yt,"property",{"m_LocalPosition.x":"localPosition.x","m_LocalPosition.y":"localPosition.y","m_LocalPosition.z":"localPosition.z","m_LocalRotation.x":"localQuaternion.x","m_LocalRotation.y":"localQuaternion.y","m_LocalRotation.z":"localQuaternion.z","m_LocalRotation.w":"localQuaternion.w","localEulerAnglesRaw.x":"localRotation.x","localEulerAnglesRaw.y":"localRotation.y","localEulerAnglesRaw.z":"localRotation.z","m_LocalEulerAngles.x":"localRotation.x","m_LocalEulerAngles.y":"localRotation.y","m_LocalEulerAngles.z":"localRotation.z","m_LocalScale.x":"localScale.x","m_LocalScale.y":"localScale.y","m_LocalScale.z":"localScale.z","m_Color.r":"r","m_Color.g":"g","m_Color.b":"b","m_Color.a":"alpha","field of view":"camera3D.fov",m_IsActive:"visible",m_Sprite:"texture",m_FlipX:"flipX",m_FlipY:"flipY"}),s(yt,"property_quaternion",{"m_LocalRotation.x":!0,"m_LocalRotation.y":!0,"m_LocalRotation.z":!0,"m_LocalRotation.w":!0}),s(yt,"property_scale",{"m_LocalPosition.x":1,"m_LocalPosition.y":1,"m_LocalPosition.z":-1,"localEulerAnglesRaw.x":-1,"localEulerAnglesRaw.y":1,"localEulerAnglesRaw.z":1,"m_LocalEulerAngles.x":-1,"m_LocalEulerAngles.y":1,"m_LocalEulerAngles.z":1,"m_LocalRotation.x":1,"m_LocalRotation.y":1,"m_LocalRotation.z":-1,"m_LocalRotation.w":-1,"m_LocalScale.x":1,"m_LocalScale.y":1,"m_LocalScale.z":1,"m_Color.r":1,"m_Color.g":1,"m_Color.b":1,"m_Color.a":1,"field of view":1,m_IsActive:1,m_Sprite:1}),s(yt,"property_offset",{"m_LocalPosition.x":0,"m_LocalPosition.y":0,"m_LocalPosition.z":0,"localEulerAnglesRaw.x":0,"localEulerAnglesRaw.y":0,"localEulerAnglesRaw.z":0,"m_LocalEulerAngles.x":0,"m_LocalEulerAngles.y":0,"m_LocalEulerAngles.z":0,"m_LocalRotation.x":0,"m_LocalRotation.y":0,"m_LocalRotation.z":0,"m_LocalRotation.w":0,"m_LocalScale.x":0,"m_LocalScale.y":0,"m_LocalScale.z":0,"field of view":0,"m_Color.r":0,"m_Color.g":0,"m_Color.b":0,"m_Color.a":0,m_IsActive:0,m_Sprite:0});const zi=class{constructor(r){s(this,"_propertyAnimClip"),s(this,"_target"),s(this,"_animation"),s(this,"_propertyCache"),s(this,"_bindObjects",[]),s(this,"_currentClip"),s(this,"_frame",0),s(this,"_time",0),s(this,"_isPlaying",!0),s(this,"speed",1),this._target=r.object3D,this._animation=r,this._propertyAnimClip={},this._propertyCache={}}get object3D(){return this._target}get time(){return this._time}get currentClip(){return this._currentClip}getClip(r){return this._propertyAnimClip[r]}addClip(r){for(const i in(this._propertyAnimClip[r.name]=r).objAnimClip){let a=r.objAnimClip[i],n=this._target;n=i==""?this._target:this._target.getObjectByName(i);var e=a.curve;for(const o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var t=yt.property[o].split(".");if(n){this._bindObjects.indexOf(n)==-1&&this._bindObjects.push(n),this._propertyCache[i]==null&&(this._propertyCache[i]={}),this._propertyCache[i][o]={value:n[t[0]],property:t[1]};for(let h=1;h<t.length-1;h++)this._propertyCache[i][o]={value:n[t[h]],property:t[h+1]}}}}return this}play(r,e=!0){var t=this._propertyAnimClip[r];return t?(this._isPlaying=!0,!e&&this._currentClip&&this._currentClip.name==r||(this._time=0),this._currentClip=t,this._currentClip):null}stop(){return this._isPlaying=!1,this}toggle(){return this._isPlaying=!this._isPlaying,this}get isPlaying(){return this._isPlaying}update(r,e){r*=.001,e*=.001,this._currentClip&&this._frame!=r&&this._isPlaying&&(this._frame=r,r=this._time,this._time=this.calcTime(r+e*this.speed),this.validProperty(),this._currentClip.wrapMode!=br.Loop&&this._currentClip.wrapMode!=br.Default&&(0<this.speed?this._time>=this._currentClip.totalTime:this._time<=0)&&(this._isPlaying=!1,this._animation.statusCall(zi.Complete,r,this._time)),this._animation.statusCall(zi.Seek,r,this._time))}seek(r){return this._time=this.calcTime(r),this.validProperty(),this}calcTime(r){return r=this._currentClip.wrapMode==br.Loop||this._currentClip.wrapMode==br.Default?Ya(r,this._currentClip.totalTime):ze(r,0,this._currentClip.totalTime)}validProperty(){if(this._target)for(const n in this._currentClip.objAnimClip){let o=this._currentClip.objAnimClip[n],h=!1,l=o.curve;for(const u in l){var r,e,t;Object.prototype.hasOwnProperty.call(l,u)&&(t=l[u],r=this._propertyCache[n][u],e=yt.property_scale[u],h=h||yt.property_quaternion[u],t=t.getValue(this._time)*e+yt.property_offset[u],r.value[r.property]=t)}var i;h&&(i=this._target.transform,A.getEuler(i.localRotation,i.localRotQuat,!0,"ZYX"))}for(var a of this._bindObjects)a.transform.notifyChange()}};let La=zi;s(La,"Complete",0),s(La,"Seek",1);class Oa extends Pe{constructor(e,t){super(t),s(this,"animation"),s(this,"frame"),this.animation=e}}s(Oa,"SEEK","SEEK"),s(Oa,"COMPLETE","COMPLETE");class yi extends Xe{constructor(e=1,t=1,i=1){super(),s(this,"width"),s(this,"height"),s(this,"depth"),this.width=e,this.height=t,this.depth=i,this.initVertex()}initVertex(){var e=this.width/2,t=this.height/2,i=this.depth/2,e=(this.bounds=new we(d.ZERO.clone(),new d(this.width,this.height,this.depth)),new Float32Array([-e,t,i,e,t,i,e,t,-i,-e,t,-i,-e,t,i,e,t,-i,e,-t,i,-e,-t,i,-e,-t,-i,e,-t,-i,e,-t,i,-e,-t,-i,-e,-t,i,-e,t,i,-e,t,-i,-e,-t,-i,-e,-t,i,-e,t,-i,e,t,i,e,-t,i,e,-t,-i,e,t,-i,e,t,i,e,-t,-i,e,t,i,-e,t,i,-e,-t,i,-e,-t,i,e,-t,i,e,t,i,e,-t,-i,-e,-t,-i,-e,t,-i,e,t,-i,e,-t,-i,-e,t,-i])),t=new Float32Array([0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1]),i=new Float32Array([1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0]),a=[0,2,1,3,5,4,6,8,7,9,11,10,12,14,13,15,17,16,18,20,19,21,23,22,24,26,25,27,29,28,30,32,31,33,35,34],n=new Uint16Array(a.reverse());this.setIndices(n),this.setAttribute(z.position,e),this.setAttribute(z.normal,t),this.setAttribute(z.uv,i),this.setAttribute(z.TEXCOORD_1,i),this.addSubGeometry({indexStart:0,indexCount:a.length,vertexStart:0,index:0})}}var ml=(r=>(r[r.Key_BackSpace=8]="Key_BackSpace",r[r.Key_Tab=9]="Key_Tab",r[r.Key_Clear=12]="Key_Clear",r[r.Key_Enter=13]="Key_Enter",r[r.Key_Shift_L=16]="Key_Shift_L",r[r.Key_Control_L=17]="Key_Control_L",r[r.Key_Alt_L=18]="Key_Alt_L",r[r.Key_Pause=19]="Key_Pause",r[r.Key_CapsLock=20]="Key_CapsLock",r[r.Key_Escape=21]="Key_Escape",r[r.Key_Esc=27]="Key_Esc",r[r.Key_Space=32]="Key_Space",r[r.Key_Prior=33]="Key_Prior",r[r.Key_Next=34]="Key_Next",r[r.Key_End=35]="Key_End",r[r.Key_Home=36]="Key_Home",r[r.Key_Left=37]="Key_Left",r[r.Key_Up=38]="Key_Up",r[r.Key_Right=39]="Key_Right",r[r.Key_Down=40]="Key_Down",r[r.Key_Select=41]="Key_Select",r[r.Key_Print=42]="Key_Print",r[r.Key_Execute=43]="Key_Execute",r[r.Key_Insert=45]="Key_Insert",r[r.Key_Delete=46]="Key_Delete",r[r.Key_Help=47]="Key_Help",r[r.Key_0=48]="Key_0",r[r.Key_1=49]="Key_1",r[r.Key_2=50]="Key_2",r[r.Key_3=51]="Key_3",r[r.Key_4=52]="Key_4",r[r.Key_5=53]="Key_5",r[r.Key_6=54]="Key_6",r[r.Key_7=55]="Key_7",r[r.Key_8=56]="Key_8",r[r.Key_9=57]="Key_9",r[r.Key_A=65]="Key_A",r[r.Key_B=66]="Key_B",r[r.Key_C=67]="Key_C",r[r.Key_D=68]="Key_D",r[r.Key_E=69]="Key_E",r[r.Key_F=70]="Key_F",r[r.Key_G=71]="Key_G",r[r.Key_H=72]="Key_H",r[r.Key_I=73]="Key_I",r[r.Key_J=74]="Key_J",r[r.Key_K=75]="Key_K",r[r.Key_L=76]="Key_L",r[r.Key_M=77]="Key_M",r[r.Key_N=78]="Key_N",r[r.Key_O=79]="Key_O",r[r.Key_P=80]="Key_P",r[r.Key_Q=81]="Key_Q",r[r.Key_R=82]="Key_R",r[r.Key_S=83]="Key_S",r[r.Key_T=84]="Key_T",r[r.Key_U=85]="Key_U",r[r.Key_V=86]="Key_V",r[r.Key_W=87]="Key_W",r[r.Key_X=88]="Key_X",r[r.Key_Y=89]="Key_Y",r[r.Key_Z=90]="Key_Z",r[r.Key_KP_0=96]="Key_KP_0",r[r.Key_KP_1=97]="Key_KP_1",r[r.Key_KP_2=98]="Key_KP_2",r[r.Key_KP_3=99]="Key_KP_3",r[r.Key_KP_4=100]="Key_KP_4",r[r.Key_KP_5=101]="Key_KP_5",r[r.Key_KP_6=102]="Key_KP_6",r[r.Key_KP_7=103]="Key_KP_7",r[r.Key_KP_8=104]="Key_KP_8",r[r.Key_KP_9=105]="Key_KP_9",r[r.Key_Multiply=106]="Key_Multiply",r[r.Key_Add=107]="Key_Add",r[r.Key_Separator=108]="Key_Separator",r[r.Key_Subtract=109]="Key_Subtract",r[r.Key_Decimal=110]="Key_Decimal",r[r.Key_Divide=111]="Key_Divide",r[r.Key_F1=112]="Key_F1",r[r.Key_F2=113]="Key_F2",r[r.Key_F3=114]="Key_F3",r[r.Key_F4=115]="Key_F4",r[r.Key_F5=116]="Key_F5",r[r.Key_F6=117]="Key_F6",r[r.Key_F7=118]="Key_F7",r[r.Key_F8=119]="Key_F8",r[r.Key_F9=120]="Key_F9",r[r.Key_F10=121]="Key_F10",r[r.Key_F11=122]="Key_F11",r[r.Key_F12=123]="Key_F12",r[r.Key_F13=124]="Key_F13",r[r.Key_F14=125]="Key_F14",r[r.Key_F15=126]="Key_F15",r[r.Key_F16=127]="Key_F16",r[r.Key_F17=128]="Key_F17",r[r.Key_F18=129]="Key_F18",r[r.Key_F19=130]="Key_F19",r[r.Key_F20=131]="Key_F20",r[r.Key_F21=132]="Key_F21",r[r.Key_F22=133]="Key_F22",r[r.Key_F23=134]="Key_F23",r[r.Key_F24=135]="Key_F24",r[r.Key_Num_Lock=136]="Key_Num_Lock",r[r.Key_Scroll_Lock=137]="Key_Scroll_Lock",r))(ml||{});class kr{static add(e,t,i){return(i=i||new d).x=e.x+t.x,i.y=e.y+t.y,i.z=e.z+t.z,i}static sub(e,t,i){return(i=i||new d).x=e.x-t.x,i.y=e.y-t.y,i.z=e.z-t.z,i}static mul(e,t,i){return(i=i||new d).x=e.x*t.x,i.y=e.y*t.y,i.z=e.z*t.z,i}static mulScale(e,t,i){return(i=i||new d).x=e.x*t,i.y=e.y*t,i.z=e.z*t,i}static div(e,t,i){return(i=i||new d).x=e.x/t.x,i.y=e.y/t.y,i.z=e.z/t.z,i}static normalize(e){return e.clone().normalize()}static dot(e,t){var i=d.HELP_0;return i.copyFrom(e),i.dotProduct(t)}static calculateVectorAngle_xz(e,t){return Math.acos((e.x*t.x+e.y*t.y)/Math.sqrt((e.x*e.x+e.y*e.y)*(t.x*t.x+t.y*t.y)))}static distance(e,t){return d.distance(e,t)}static getRandomXYZ(e=-100,t=100){return new d(Math.random()*t+e,Math.random()*t+e,Math.random()*t+e)}static getRandomV3(e=-100,t=100,i,a){return new d(Math.random()*t+e,Math.random()*a+i,Math.random()*t+e)}}class gl extends Ze{constructor(){super(),s(this,"camera"),s(this,"minDistance",.1),s(this,"maxDistance",500),s(this,"rollSmooth",15),s(this,"dragSmooth",20),s(this,"wheelSmooth",10),s(this,"wheelStep",.002),s(this,"mouseRightFactor",.5),s(this,"mouseLeftFactor",20),s(this,"smooth",!0),s(this,"_wheelStep",.002),s(this,"_distance",0),s(this,"distance",10),s(this,"_roll",0),s(this,"roll",0),s(this,"_pitch",0),s(this,"pitch",0),s(this,"_currentPos"),s(this,"_targetPos"),s(this,"_mouseLeftDown",!1),s(this,"_mouseRightDown",!1),s(this,"_bottomClamp",89.99),s(this,"_topClamp",-89.99),s(this,"_tempDir",new d),s(this,"_tempPos",new d),this._currentPos=new K,this._targetPos=new K}start(){this.camera=this.object3D.getOrAddComponent(Vi),b.inputSystem.addEventListener(E.POINTER_DOWN,this.onMouseDown,this),b.inputSystem.addEventListener(E.POINTER_MOVE,this.onMouseMove,this),b.inputSystem.addEventListener(E.POINTER_UP,this.onMouseUp,this),b.inputSystem.addEventListener(E.POINTER_WHEEL,this.onMouseWheel,this)}setCamera(e,t,i,a){this.roll=e,this.pitch=t,this.distance=i,this.maxDistance=1.2*i,a&&this._targetPos.transform.localPosition.copy(a)}focusByBounds(e){e=xt.genMeshBounds(e),this.target=e.center}set target(e){this._targetPos.transform.localPosition.copy(e)}get target(){return this._targetPos.transform.localPosition}onMouseWheel(e){this.enable&&(this._wheelStep=this.wheelStep*kr.distance(this._currentPos.transform.worldPosition,this.camera.transform.worldPosition)/10,this.distance-=b.inputSystem.wheelDelta*this._wheelStep,this.distance=ze(this.distance,this.minDistance,this.maxDistance))}onMouseDown(e){if(this.enable)switch(e.mouseCode){case 0:this._mouseLeftDown=!0;break;case 1:break;case 2:this._mouseRightDown=!0}}onMouseUp(e){this._mouseLeftDown=!1,this._mouseRightDown=!1}onMouseMove(e){var t;this.enable&&(this._mouseRightDown&&(t=this.camera.transform.forward,kr.mulScale(t,.25*e.movementY*this.camera.aspect,d.HELP_1),this._targetPos.x+=d.HELP_1.x*this.mouseRightFactor,this._targetPos.z+=d.HELP_1.z*this.mouseRightFactor,t=this.camera.transform.right,kr.mulScale(t,.25*-e.movementX,d.HELP_1),this._targetPos.x-=d.HELP_1.x*this.mouseRightFactor,this._targetPos.z-=d.HELP_1.z*this.mouseRightFactor),this._mouseLeftDown)&&(this.roll-=e.movementX*he.delta*.001*this.mouseLeftFactor,this.pitch-=e.movementY*he.delta*.001*this.mouseLeftFactor,this.pitch=ze(this.pitch,this._topClamp,this._bottomClamp))}onBeforeUpdate(e){var t;this.enable&&(t=ze(he.delta,0,.016),this.smooth?(this._currentPos.x+=(this._targetPos.x-this._currentPos.x)*t*this.dragSmooth,this._currentPos.y+=(this._targetPos.y-this._currentPos.y)*t*this.dragSmooth,this._currentPos.z+=(this._targetPos.z-this._currentPos.z)*t*this.dragSmooth,this._distance+=(this.distance-this._distance)*t*this.wheelSmooth,this._roll+=(this.roll-this._roll)*t*this.rollSmooth,this._pitch+=(this.pitch-this._pitch)*t*this.rollSmooth):(this._currentPos.x=this._targetPos.x,this._currentPos.y=this._targetPos.y,this._currentPos.z=this._targetPos.z,this._distance=this.distance,this._roll=this.roll,this._pitch=this.pitch),this._tempDir.set(0,0,1),(t=$.HELP_0).fromEulerAngles(this._pitch,this._roll,0),this._tempDir.applyQuaternion(t),this._tempPos=kr.mulScale(this._tempDir,this._distance,this._tempPos),this._tempPos.add(this._currentPos.transform.localPosition,this._tempPos),this.transform.lookAt(this._tempPos,this._currentPos.transform.localPosition,d.UP),this.camera.lookTarget.copy(this._currentPos.transform.localPosition))}destroy(e){b.inputSystem.removeEventListener(E.POINTER_DOWN,this.onMouseDown,this),b.inputSystem.removeEventListener(E.POINTER_MOVE,this.onMouseMove,this),b.inputSystem.removeEventListener(E.POINTER_UP,this.onMouseUp,this),b.inputSystem.removeEventListener(E.POINTER_WHEEL,this.onMouseWheel,this),super.destroy(e),this.camera=null}}var Sr=(r=>(r[r.NORMAL=0]="NORMAL",r[r.DOWN=1]="DOWN",r[r.OVER=2]="OVER",r[r.DISABLE=3]="DISABLE",r))(Sr||{});let vl=Math.PI,Aa=2*vl;class er{constructor(e=1,t=0,i=0,a=1,n=0,o=0){s(this,"a"),s(this,"b"),s(this,"c"),s(this,"d"),s(this,"tx"),s(this,"ty"),this.a=e,this.b=t,this.c=i,this.d=a,this.tx=n,this.ty=o}clone(){return new er(this.a,this.b,this.c,this.d,this.tx,this.ty)}concat(e){var t=this.a,i=this.c,a=this.tx;this.a=t*e.a+this.b*e.c,this.b=t*e.b+this.b*e.d,this.c=i*e.a+this.d*e.c,this.d=i*e.b+this.d*e.d,this.tx=a*e.a+this.ty*e.c+e.tx,this.ty=a*e.b+this.ty*e.d+e.ty}copyFrom(e){return this.a=e.a,this.b=e.b,this.c=e.c,this.d=e.d,this.tx=e.tx,this.ty=e.ty,this}identity(){return this.a=this.d=1,this.b=this.c=this.tx=this.ty=0,this}invert(){this._invertInto(this)}rotate(e){var t,i,a,n,o,h,l;(e=+e)!=0&&(e*=ee,t=Math.cos(e),e=Math.sin(e),i=this.a,a=this.b,n=this.c,o=this.d,h=this.tx,l=this.ty,this.a=i*t-a*e,this.b=i*e+a*t,this.c=n*t-o*e,this.d=n*e+o*t,this.tx=h*t-l*e,this.ty=h*e+l*t)}scale(e,t){e!==1&&(this.a*=e,this.c*=e,this.tx*=e),t!==1&&(this.b*=t,this.d*=t,this.ty*=t)}setTo(e,t,i,a,n,o){return this.a=e,this.b=t,this.c=i,this.d=a,this.tx=n,this.ty=o,this}transformPoint(n,t,i){var a=this.a*n+this.c*t+this.tx,n=this.b*n+this.d*t+this.ty;return i?(i.setTo(a,n,0,1),i):new d(a,n,0,1)}setTranslate(e,t){this.tx=e,this.ty=t}translate(e,t){this.tx+=e,this.ty+=t}mul(m){var t=this.a,i=this.b,a=this.c,n=this.d,o=this.tx,h=this.ty,l=m.a,u=m.b,c=m.c,f=m.d,p=m.tx,m=m.ty;u!==0||c!==0?(this.a=t*l+i*c,this.b=t*u+i*f,this.c=a*l+n*c,this.d=a*u+n*f,this.tx=l*o+c*h+p,this.ty=u*o+f*h+m):(this.a=t*l,this.b=i*f,this.c=a*l,this.d=n*f,this.tx=l*o+p,this.ty=f*h+m)}equals(e){return this.a==e.a&&this.b==e.b&&this.c==e.c&&this.d==e.d&&this.tx==e.tx&&this.ty==e.ty}prepend(e,t,i,a,n,o){var h,l,u=this.tx;return e==1&&t==0&&i==0&&a==1||(h=this.a,l=this.c,this.a=h*e+this.b*i,this.b=h*t+this.b*a,this.c=l*e+this.d*i,this.d=l*t+this.d*a),this.tx=u*e+this.ty*i+n,this.ty=u*t+this.ty*a+o,this}append(e){var t=this.a,i=this.b,a=this.c,n=this.d;return e.a==1&&e.b==0&&e.c==0&&e.d==1||(this.a=e.a*t+e.b*a,this.b=e.a*i+e.b*n,this.c=e.c*t+e.d*a,this.d=e.c*i+e.d*n),this.tx=e.tx*t+e.ty*a+this.tx,this.ty=e.tx*i+e.ty*n+this.ty,this}deltaTransformPoint(i){var t=this.a*i.x+this.c*i.y,i=this.b*i.x+this.d*i.y;return new d(t,i)}toString(){return"(a="+this.a+", b="+this.b+", c="+this.c+", d="+this.d+", tx="+this.tx+", ty="+this.ty+")"}createBox(e,t,i=0,a=0,n=0){var o,h=this;i!==0?(i*=ee,o=Math.cos(i),i=Math.sin(i),h.a=o*e,h.b=i*t,h.c=-i*e,h.d=o*t):(h.a=e,h.b=0,h.c=0,h.d=t),h.tx=a,h.ty=n}createGradientBox(e,t,i=0,a=0,n=0){this.createBox(e/1638.4,t/1638.4,i,a+e/2,n+t/2)}_invertInto(e){let t=this.a,i=this.b,a=this.c,n=this.d,o=this.tx,h=this.ty;var l,u;i==0&&a==0?(e.b=e.c=0)==t||n==0?e.a=e.d=e.tx=e.ty=0:(t=e.a=1/t,n=e.d=1/n,e.tx=-t*o,e.ty=-n*h):(l=t*n-i*a)==0?e.identity():(l=1/l,u=e.a=n*l,i=e.b=-i*l,a=e.c=-a*l,n=e.d=t*l,e.tx=-(u*o+a*h),e.ty=-(i*o+n*h))}getScaleX(){var e;return this.a==1&&this.b==0?1:(e=Math.sqrt(this.a*this.a+this.b*this.b),this.getDeterminant()<0?-e:e)}getScaleY(){var e;return this.c==0&&this.d==1?1:(e=Math.sqrt(this.c*this.c+this.d*this.d),this.getDeterminant()<0?-e:e)}getSkewX(){return Math.atan2(this.d,this.c)-Math.PI/2}getSkewY(){return Math.atan2(this.b,this.a)}updateScaleAndRotation(e,t,i,a){var n,o;i!=0&&i!=Aa||a!=0&&a!=Aa?(i*=ee,a*=ee,n=Math.cos(i),o=Math.sin(i),i==a?(this.a=n*e,this.b=o*e):(this.a=Math.cos(a)*e,this.b=Math.sin(a)*e),this.c=-o*t,this.d=n*t):(this.a=e,this.b=this.c=0,this.d=t)}preMultiplyInto(e,t){let i=e.a*this.a,a=0,n=0,o=e.d*this.d,h=e.tx*this.a+this.tx,l=e.ty*this.d+this.ty;e.b===0&&e.c===0&&this.b===0&&this.c===0||(i+=e.b*this.c,o+=e.c*this.b,a+=e.a*this.b+e.b*this.d,n+=e.c*this.a+e.d*this.c,h+=e.ty*this.c,l+=e.tx*this.b),t.a=i,t.b=a,t.c=n,t.d=o,t.tx=h,t.ty=l}$transformBounds(e){let t=this.a,i=this.b,a=this.c,n=this.d,o=this.tx,h=this.ty,l=e.x,u=e.y,c=l+e.width,f=u+e.height,p=t*l+a*u+o,m=i*l+n*u+h,_=t*c+a*u+o,v=i*c+n*u+h,S=t*c+a*f+o,T=i*c+n*f+h,y=t*l+a*f+o,C=i*l+n*f+h,I=0;p>_&&(I=p,p=_,_=I),S>y&&(I=S,S=y,y=I),e.x=Math.floor(p<S?p:S),e.width=Math.ceil((_>y?_:y)-e.x),m>v&&(I=m,m=v,v=I),T>C&&(I=T,T=C,C=I),e.y=Math.floor(m<T?m:T),e.height=Math.ceil((v>C?v:C)-e.y)}getDeterminant(){return this.a*this.d-this.b*this.c}}class Es extends Ze{constructor(){super(...arguments),s(this,"index",0)}addChild(e){return this.object3D.addChild(e),this}removeChild(e){return this.object3D.removeChild(e),this}cloneTo(e){console.error("UICanvas Can not be Clone!")}}var pe=(r=>(r[r.NONE=0]="NONE",r[r.POSITION=1]="POSITION",r[r.SPRITE=2]="SPRITE",r[r.COLOR=4]="COLOR",r[r.MAX=7]="MAX",r))(pe||{});class bi{constructor(e){s(this,"array"),s(this,"buffer"),this.buffer=new De(e,0),this.array=new Float32Array(this.buffer.memory.shareDataBuffer)}}class _l extends Xe{constructor(e){super(),s(this,"_attributeUV"),s(this,"_attributeVIndex"),s(this,"_faceIndexes"),s(this,"_uvSize",2),s(this,"_vIndexSize",1),s(this,"_posAttribute"),s(this,"_spriteAttribute"),s(this,"_colorAttribute"),s(this,"_onPositionChange",!0),s(this,"_onSpriteChange",!0),s(this,"_onColorChange",!0),s(this,"maxQuadCount"),this.maxQuadCount=e}updateBounds(e,t){var i=.1*Number.MAX_VALUE;return e=new d(-i,-i,-i),t=new d(i,i,i),this.bounds.setFromMinMax(e,t),this}get vPositionBuffer(){return this._onPositionChange&&(this._posAttribute.buffer.apply(),this._onPositionChange=!1),this._posAttribute.buffer}get vSpriteBuffer(){return this._onSpriteChange&&(this._spriteAttribute.buffer.apply(),this._onSpriteChange=!1),this._spriteAttribute.buffer}get vColorBuffer(){return this._onColorChange&&(this._colorAttribute.buffer.apply(),this._onColorChange=!1),this._colorAttribute.buffer}create(){this.createBuffer(),this.updateBounds();var e=this.maxQuadCount,t=[],i=[];for(let o=0;o<e;o++)t.push(...ut.attUV);for(let o=0,h=this.maxQuadCount*ut.vertexCount;o<h;o++)i[o]=o;this._attributeUV=new Float32Array(ut.vertexCount*e*this._uvSize),this._attributeVIndex=new Float32Array(ut.vertexCount*e*this._vIndexSize),this._attributeUV.set(t,0),this._attributeVIndex.set(i,0);var a=[];for(let o=0;o<e;o++)for(let h=0;h<ut.indecies.length;h++){var n=ut.indecies[h]+4*o;a.push(n)}return this._faceIndexes=new Uint32Array(6*e),this._faceIndexes.set(a,0),this.setIndices(this._faceIndexes),this.setAttribute(z.uv,this._attributeUV),this.setAttribute(z.vIndex,this._attributeVIndex),this.addSubGeometry({indexStart:0,indexCount:this._faceIndexes.length,vertexStart:0,index:0}),this}createBuffer(){var e=this.maxQuadCount;this._posAttribute=new bi(4*e),this._spriteAttribute=new bi(12*e),this._colorAttribute=new bi(4*e)}fillQuad(e,t){e.dirtyAttributes&pe.POSITION&&this.fillQuadPosition(e,t),e.dirtyAttributes&pe.COLOR&&this.fillQuadColor(e,t),e.dirtyAttributes&pe.SPRITE&&this.fillQuadSprite(e,t)}fillQuadPosition(e,t){Ua.setXYZW(this._posAttribute.array,e.z,e.left,e.bottom,e.right,e.top),this._onPositionChange=!0}fillQuadColor(e,t){var i=e.color,a=this._colorAttribute.array;Ua.setXYZW(a,e.z,i.r,i.g,i.b,i.a),this._onColorChange=!0}fillQuadSprite(e,o){let i=e.sprite,a=0,n=0;i.isSliced&&e.imageType==oi.Sliced&&(a=i.trimSize.x,a=(o.width-(i.offsetSize.z-i.trimSize.x))/a,n=i.trimSize.y,n=(o.height-(i.offsetSize.w-i.trimSize.y))/n);var o=i.guiTexture.dynamicId,h=i.uvRec,l=i.uvBorder,u=this._spriteAttribute.array,c=12*e.z;u[0+c]=h.x,u[1+c]=h.y,u[2+c]=h.z,u[3+c]=h.w,u[4+c]=l.w,u[5+c]=l.y,u[6+c]=l.z,u[7+c]=l.w,u[8+c]=a,u[9+c]=n,u[10+c]=o,u[11+c]=e.visible?1:0,this._onSpriteChange=!0}}class xl{static set(e,t,i,a,...n){var o=t*a+i;for(let h=0,l=n.length;h<l;h++)e[o+h]=n[h]}}class Ua extends xl{static setXYZW(e,t,i,a,n,o){this.set(e,t,0,4,i,a,n,o)}static setXYZ(e,t,i,a,n){this.set(e,t,0,4,i,a,n)}static setZ(e,t,i){this.set(e,t,3,4,i)}}class ut{}s(ut,"vertexCount",4),s(ut,"attUV",[0,0,1,0,1,1,0,1]),s(ut,"indecies",[0,1,2,0,2,3]);class yl{constructor(){s(this,"_textureMap",new Map),s(this,"_textureList",[])}build(e,t,i){let a=-1,n=-1,o=(this._textureMap.clear(),this._textureList.length=0,[]),h=t.quadMaxCount-1,l;for(var u of e){var c,f=u.needUpdateQuads,p=(o.length=0,this.collectQuads(u.object3D,o));for(c of p){if(c.z=++a,c.sprite&&c.sprite.guiTexture){var m=c.sprite.guiTexture;if(!this._textureMap.has(m.staticId)&&(++n,this._textureMap.set(m.staticId,m),m.dynamicId=n,this._textureList[n]=m.texture,7<n)){console.warn("texture Count Exceeded the maximum limit of 7");break}}if((f||i)&&(c.dirtyAttributes=pe.MAX),c.dirtyAttributes&pe.POSITION&&c.applyTransform(u),c.dirtyAttributes&&c.writeToGeometry(t._geometry,u),a==h){l=!0;break}}if(l)break}return t._uiMaterial.setTextures(this._textureList),t._limitVertexCount=4*(a+1),!l}collectQuads(e,t){var i;t=t||[];for(i of e.components.values()){var a,n=i;!n.isUIShadow&&n.mainQuads&&((a=n.getShadowRender())&&this.push(a.mainQuads,t),this.push(n.mainQuads,t))}return t}push(e,t){e&&0<e.length&&t.push(...e)}}const Ae=class{static bindTextureArray(){let r="";for(let e=0;e<7;e++)r+=`
        @group(1) @binding(auto)
        var tex_${e}Sampler: sampler;
        @group(1) @binding(auto)
#if VideoTexture${e}
        var tex_${e}: texture_external;
#else
        var tex_${e}: texture_2d<f32>;
#endif
`;return r}static sampleTexture(r){return`
#if VideoTexture${r}
            let size = textureDimensions(tex_${r}).xy - 1;
            uv.y = 1.0 - uv.y;
            let iuv = vec2<i32>(uv * vec2<f32>(size));
            color = textureLoad(tex_${r}, iuv) ;
#else
            color = textureSampleLevel(tex_${r}, tex_${r}Sampler, uv, 0.0);
#endif        `}};let Kt=Ae;s(Kt,"fs",`
        ${Va}
        ${Ae.bindTextureArray()}

        var<private> fragmentOutput: FragmentOutput;
        var<private> uvSlice: vec2<f32>;
        var<private> EPSILON: f32 = 0.001;
        
        fn sliceBorder(s0:f32, scale:f32, border0:vec2<f32>) -> f32 
        {
          var s = s0;
          var border = border0;
          var borderScale = vec2<f32>(border.x / scale, 1.0 - (1.0 - border.y) / scale);
          if(s < borderScale.x){
            s *= scale;
          }else if(s < borderScale.y){
            var t = (s - borderScale.x) / (borderScale.y - borderScale.x);
            s = t * (border.y - border.x) + border.x;
          }else{
            s = 1.0 - (1.0 - s) * scale;
          }
          return s;
        }

        fn isInsideAlpha(coord:vec2<f32>, rect:vec4<f32>, cornerRadius0:f32, fadeOutSize0:f32) -> f32
        {
            var minX = min(rect.x, rect.z);
            var maxX = max(rect.x, rect.z);
            var minY = min(rect.y, rect.w);
            var maxY = max(rect.y, rect.w);

            var cornerRadius = max(EPSILON, cornerRadius0);

            var center = vec2<f32>(minX + maxX, minY + maxY) * 0.5;
            var extents = vec2<f32>(maxX - minX, maxY - minY) * 0.5;

            cornerRadius = min(extents.x, cornerRadius);
            cornerRadius = min(extents.y, cornerRadius);
            
            var extendsMin = max(vec2<f32>(0.0), extents - cornerRadius);
            
            var toCenter = abs(coord - center);
            var outerDist = toCenter - extents;
            var innerDist = toCenter - extendsMin;
            
            if(innerDist.x <= 0 && innerDist.y <= 0){
                return 1.0;
            }else if(outerDist.x <= 0 && outerDist.y <= 0){
                var fadeOutPercent = clamp(fadeOutSize0, EPSILON, cornerRadius) / cornerRadius;
                innerDist = max(vec2(EPSILON), innerDist);
                var distance = min(cornerRadius, length(innerDist));
                var alpha = 1.0 - distance / cornerRadius;
                alpha /= fadeOutPercent;
                alpha = clamp(alpha, 0.0, 1.0);
                return alpha;
            }
            return 0.0;
        }
        
        @fragment
        fn FragMain( 
            @location(0) vUV: vec2<f32>,
            @location(1) vColor4: vec4<f32>,
            @location(2) vLocalPos: vec2<f32>,
            @location(3) vUvRec: vec4<f32>,
            @location(4) vUvBorder: vec4<f32>,
            @location(5) vUvSlice: vec2<f32>,
            @location(6) vTextureID: f32,
            @builtin(front_facing) face: bool,
            @builtin(position) fragCoord : vec4<f32> 
        ) -> FragmentOutput {

            var scissorAlpha = 1.0;
#if SCISSOR_ENABLE
            scissorAlpha = isInsideAlpha(
                vLocalPos.xy,
                materialUniform.scissorRect,
                materialUniform.scissorCornerRadius,
                materialUniform.scissorFadeOutSize);

            if(scissorAlpha < EPSILON){
                discard;
            }
#endif

            uvSlice = vUvSlice;
            
            var uv:vec2<f32> = vUV;
            if(uvSlice.x > 1.0){ uv.x = sliceBorder(uv.x, uvSlice.x, vUvBorder.xz);}
            if(uvSlice.y > 1.0){ uv.y = sliceBorder(uv.y, uvSlice.y, vUvBorder.yw);}
            uv = uv * vUvRec.zw + vUvRec.xy;
            
            var color = vec4<f32>(0.0,0.0,0.0,1.0);
            let texId = i32(vTextureID + 0.5);
            
            var texSize = vec2<i32>(0);
            var coord = vec2<i32>(0);
            
            if(texId == 0){
                ${Ae.sampleTexture(0)}
            }else if(texId == 1){
                ${Ae.sampleTexture(1)}
            }else if(texId == 2){
                ${Ae.sampleTexture(2)}
            }else if(texId == 3){            
                ${Ae.sampleTexture(3)}
            }else if(texId == 4){            
                ${Ae.sampleTexture(4)}
            }else if(texId == 5){            
                ${Ae.sampleTexture(5)}
            }else if(texId == 6){            
                ${Ae.sampleTexture(6)}
            }
            color *= vColor4;
            color.a *= scissorAlpha;
            if(color.a < EPSILON)
            { 
                discard;
            }

            fragmentOutput.color = color;
            return fragmentOutput ;
        }`),s(Kt,"GUI_common_vs",`
        ${Ga}
        ${Fa}

        struct VertexSpriteBuffer {
            vUvRec: vec4<f32>,
            vUvBorder: vec4<f32>,
            vUvSlice: vec2<f32>,
            vTextureID: f32,
            vVisible: f32
        }
                
        struct MaterialUniform{
            scissorRect:vec4<f32>,
            screen:vec2<f32>,
            scissorCornerRadius:f32,
            scissorFadeOutSize:f32,
            limitVertex:f32,
        }
        
        struct VertexOutput {
            @location(0) vUV: vec2<f32>,
            @location(1) vColor4: vec4<f32>,
            @location(2) vLocalPos: vec2<f32>,
            @location(3) vUvRec: vec4<f32>,
            @location(4) vUvBorder: vec4<f32>,
            @location(5) vUvSlice: vec2<f32>,
            @location(6) vTextureID: f32,
            
            @builtin(position) member: vec4<f32>
        };
        
         struct VertexInput{
            @builtin(instance_index) index : u32,
            @location(0) uv: vec2<f32>,
            @location(1) vIndex: f32,
        }

        @group(2) @binding(0)
        var<uniform> materialUniform : MaterialUniform;
        @group(3) @binding(1)
        var<storage, read> vPositionBuffer: array<vec4<f32>>;
        @group(3) @binding(2)
        var<storage, read> vSpriteBuffer: array<VertexSpriteBuffer>;
        @group(3) @binding(3)
        var<storage, read> vColorBuffer: array<vec4<f32>>;

        var<private> vertexOut: VertexOutput ;

        //quad: (left, bottom, right, top)
        //index: 0~3
        fn getVertexXY(quad:vec4<f32>, index:u32) -> vec2<f32>
        {
            var ret = vec2<f32>(0.0);
            if(index == 0 || index == 3){
                ret.x = quad.x;
            }else{
                ret.x = quad.z;
            }
            if(index == 0 || index == 1){
                ret.y = quad.w;
            }else{
                ret.y = quad.y;
            }
            return ret;
        }
    `),s(Kt,"GUI_shader_view",`
        ${Ae.GUI_common_vs}

        @vertex
        fn VertMain( vertex:VertexInput ) -> VertexOutput {
            var _m = models.matrix[0];
            var _n = globalUniform.frame;
            
            let vertexIndex = vertex.vIndex;
            let quadIndex = u32(vertex.vIndex * 0.25);
            let vertexPosition = getVertexXY(vPositionBuffer[quadIndex], u32(vertexIndex) % 4u);
            var vSpriteData = vSpriteBuffer[quadIndex];
            
            var op = vec2<f32>(0.0001);
            let isValidVertex = vSpriteData.vVisible > 0.5 && vertexIndex < materialUniform.limitVertex;
            if(isValidVertex){
                op = 2.0 * vertexPosition / materialUniform.screen;
            }

            vertexOut.vLocalPos = vertexPosition;
            vertexOut.member = vec4<f32>(op.x, op.y, vertexIndex * 0.0001, 1.0);

            vertexOut.vUV = vec2<f32>(vertex.uv);
            vertexOut.vUvRec = vSpriteData.vUvRec;
            vertexOut.vUvBorder = vSpriteData.vUvBorder;
            vertexOut.vUvSlice = vSpriteData.vUvSlice;
            vertexOut.vTextureID = vSpriteData.vTextureID;
            vertexOut.vColor4 = vColorBuffer[quadIndex];

            return vertexOut;
         }
         
         ${Ae.fs}
        `),s(Kt,"GUI_shader_world",`
        ${Ae.GUI_common_vs}
        @vertex
        fn VertMain( vertex:VertexInput ) -> VertexOutput {
            var modelMatrix = models.matrix[vertex.index];
            
            let vertexIndex = vertex.vIndex;
            let quadIndex = u32(vertex.vIndex * 0.25);
            let vertexPosition = getVertexXY(vPositionBuffer[quadIndex], u32(vertexIndex) % 4u);
            var localPos = vec4<f32>(vertexPosition.xy, vertexIndex * 0.0001, 1.0) ;
            var op = vec4<f32>(0.0001);
            var vSpriteData = vSpriteBuffer[quadIndex];

            let isValidVertex = vSpriteData.vVisible > 0.5 && vertexIndex < materialUniform.limitVertex;
            if(isValidVertex){
                op = globalUniform.projMat * globalUniform.viewMat * modelMatrix * localPos ;
            }

            vertexOut.vLocalPos = vertexPosition;
            vertexOut.member = op;

            vertexOut.vUV = vec2<f32>(vertex.uv);
            vertexOut.vUvRec = vSpriteData.vUvRec;
            vertexOut.vUvBorder = vSpriteData.vUvBorder;
            vertexOut.vUvSlice = vSpriteData.vUvSlice;
            vertexOut.vTextureID = vSpriteData.vTextureID;
            vertexOut.vColor4 = vColorBuffer[quadIndex];

            return vertexOut;
         }
         
         ${Ae.fs}

        `);class bl extends pt{constructor(e){super(),s(this,"_scissorRect"),s(this,"_screenSize",new Q),s(this,"_scissorEnable",!1),s(this,"_videoTextureFlags",{}),D.register("GUI_shader_view",Kt.GUI_shader_view),D.register("GUI_shader_world",Kt.GUI_shader_world);var t=e==rt.View?"GUI_shader_view":"GUI_shader_world",t=this.setShader(t,t);t.setShaderEntry("VertMain","FragMain"),t.setUniformVector2("screen",new Q(1024,1024)),t.setUniformVector4("scissorRect",new G),t.setUniformFloat("scissorCornerRadius",0),t.setUniformFloat("scissorFadeOutSize",0),t.setUniformFloat("limitVertex",0),t.shaderState.depthWriteEnabled=!1,this.blendMode=ae.ALPHA,this.depthCompare=e==rt.View?dt.always:dt.less_equal,this.cullMode=ct.back,this.transparent=!0,this.receiveEnv=!1}setLimitVertex(e){this.renderShader.setUniformFloat("limitVertex",e)}setScissorRect(e,t,i,a){this._scissorRect||(this._scissorRect=new G),this._scissorRect.set(e,t,i,a),this.renderShader.setUniformVector4("scissorRect",this._scissorRect)}setScissorEnable(e){this._scissorEnable!=e&&((this._scissorEnable=e)?this.renderShader.setDefine("SCISSOR_ENABLE",!0):this.renderShader.deleteDefine("SCISSOR_ENABLE"),this.renderShader.noticeStateChange())}setScissorCorner(e,t){this.renderShader.setUniformFloat("scissorCornerRadius",e),this.renderShader.setUniformFloat("scissorFadeOutSize",t)}setScreenSize(e,t){return this._screenSize.set(e,t),this.renderShader.setUniformVector2("screen",this._screenSize),this}setTextures(e){for(let i=0;i<7;i++){var t=e[i]||b.res.whiteTexture;this.renderShader.setTexture("tex_"+i,t),this.setVideoTextureDefine(i,t.isVideoTexture)}}setVideoTextureDefine(e,t){let i=!1;t!=this._videoTextureFlags[e]&&(t?this.renderShader.setDefine("VideoTexture"+e,!0):this.renderShader.deleteDefine("VideoTexture"+e),this._videoTextureFlags[e]=t,i=!0),i&&this.renderShader.noticeStateChange()}set envMap(e){}set shadowMap(e){}set baseMap(e){}set normalMap(e){}set emissiveMap(e){}set irradianceMap(e){}set irradianceDepthMap(e){}}class Sl extends ye{constructor(){super(...arguments),s(this,"_guiGeometry")}init(e){super.init(),this.addRendererMask(Se.UI),this.removeRendererMask(Se.Default),this.castGI=!1,this.castShadow=!1,this.alwaysRender=!0,this._ignoreEnvMap=this._ignorePrefilterMap=!0}get geometry(){return super.geometry}set geometry(e){super.geometry=e,this._guiGeometry=e}nodeUpdate(e,t,i,a){for(let c=0;c<this.materials.length;c++){var n=this.materials[c].renderPasses.get(t),o=this._guiGeometry.vPositionBuffer,h=this._guiGeometry.vSpriteBuffer,l=this._guiGeometry.vColorBuffer;if(n)for(let f=0;f<n.length;f++){var u=n[f].renderShader;u.pipeline||(u.setStorageBuffer("vPositionBuffer",o),u.setStorageBuffer("vSpriteBuffer",h),u.setStorageBuffer("vColorBuffer",l))}}super.nodeUpdate(e,t,i,a)}onUpdate(e){this.transform.updateWorldMatrix()}}class wl{constructor(){s(this,"_use"),s(this,"_unUse"),this._use=[],this._unUse=[]}pushBack(e){var t=this._use.indexOf(e);t!=-1&&(this._use.splice(t,1),this._unUse.push(e))}getOne(e){let t;return 0<this._unUse.length?(t=this._unUse[0],this._unUse.splice(0,1)):t=new e,this._use.push(t),t}hasFree(){return 0<this._unUse.length}}let dr;const Kr=class{constructor(){s(this,"x",0),s(this,"y",0),s(this,"z",0),s(this,"width",1),s(this,"height",1),s(this,"_globalX",0),s(this,"_globalY",0),s(this,"_globalWidth",0),s(this,"_globalHeight",0),s(this,"_visible",!0),s(this,"_offsetX",0),s(this,"_offsetY",0),s(this,"_sprite",b.res.defaultGUISprite),s(this,"_color",new x(1,1,1,1)),s(this,"_imageType",oi.Simple),s(this,"dirtyAttributes",pe.MAX)}static get quadPool(){return this.textPool||(this.textPool=new wl),this.textPool}static recycleQuad(r){r.sprite=null,r.dirtyAttributes=pe.MAX,r.x=0,r.y=0,r.z=-1,Kr.quadPool.pushBack(r)}static spawnQuad(){return Kr.quadPool.getOne(Kr)}get imageType(){return this._imageType}set imageType(r){this._imageType=r,this.setAttrChange(pe.SPRITE|pe.POSITION)}get color(){return this._color}set color(r){this._color.copyFrom(r),this.setAttrChange(pe.COLOR)}get visible(){return this._visible}set visible(r){r!=this._visible&&(this._visible=r,this.setAttrChange(pe.SPRITE))}get sprite(){return this._sprite}set sprite(r){this._sprite!=r&&(this._sprite=r,this.setAttrChange(pe.SPRITE|pe.POSITION))}get left(){return this._globalX-this._offsetX}get right(){return this.left+this._globalWidth}get top(){return this._globalY-this._offsetY}get bottom(){return this.top+this._globalHeight}setSize(r,e){this.width=r,this.height=e,this.setAttrChange(pe.POSITION)}setXY(r,e){this.x=r,this.y=e,this.setAttrChange(pe.POSITION)}setAttrChange(r){this.dirtyAttributes=this.dirtyAttributes|r}applyTransform(r){this.setAttrChange(pe.POSITION);let e=this._sprite,t=r.getWorldMatrix();var i=(t=this.x==0&&this.y==0?t:this.getQuadMatrix(t)).getScaleX(),a=t.getScaleY(),n=e.isSliced&&this._imageType==oi.Sliced;return this._offsetX=.5*r.width*i,this._offsetY=.5*r.height*a,n?(this._globalWidth=i*(r.width-(e.offsetSize.z-e.trimSize.x)),this._globalHeight=a*(r.height-(e.offsetSize.w-e.trimSize.y)),this._globalX=t.tx+e.offsetSize.x*i,this._globalY=t.ty+e.offsetSize.y*a):(n=this.width/e.offsetSize.z,r=this.height/e.offsetSize.w,this._globalWidth=i*e.trimSize.x*n,this._globalHeight=a*e.trimSize.y*r,this._globalX=t.tx+e.offsetSize.x*n*i,this._globalY=t.ty+e.offsetSize.y*r*a),this}getQuadMatrix(r){return(dr=dr||new er).identity(),dr.setTranslate(this.x,this.y),dr.mul(r),dr}writeToGeometry(r,e){return r.fillQuad(this,e),this.dirtyAttributes=pe.NONE,this}};let aa=Kr;s(aa,"textPool");class Tl extends Ze{constructor(){super(...arguments),s(this,"_uiTransform"),s(this,"_visible",!0)}destroy(){this._uiTransform.setNeedUpdateUIPanel(),super.destroy()}get uiTransform(){return this._uiTransform}get visible(){return this._visible}set visible(e){this._visible!=e&&(this._visible=e,(e=this.onUIComponentVisible)!=null)&&e.call(this,this._visible)}init(e){var t;(t=super.init)!=null&&t.call(this,e),this._uiTransform=this.object3D.getOrAddComponent(bt),this._uiTransform.setNeedUpdateUIPanel()}copyComponent(e){return this.visible=e.visible,this}}class Cl extends Tl{constructor(){super(...arguments),s(this,"_mainQuads"),s(this,"_shadowRender"),s(this,"_shadowSource"),s(this,"isUIShadow"),s(this,"isShadowless"),s(this,"needUpdateShadow")}init(e){var t;(t=super.init)!=null&&t.call(this,e),this._mainQuads=[]}destroy(){var e;this.detachQuads(),(e=this._shadowRender)!=null&&e.setShadowSource(null),(e=this._shadowSource)!=null&&e.setShadowRenderer(null),super.destroy(),this._shadowRender=null,this._shadowSource=null}start(){var e;(e=super.start)!=null&&e.call(this),this.isUIShadow?this.autoBindShadow(null,this):this.isShadowless||this.autoBindShadow(this,null),this.setShadowDirty()}setShadowDirty(){this._shadowRender&&(this._shadowRender.needUpdateShadow=!0)}get mainQuads(){return this._mainQuads}setShadowRenderer(e){this._shadowRender=e}setShadowSource(e){this._shadowSource=e}getShadowRender(){return this._shadowRender}autoBindShadow(e,t){var i=this.object3D.components.values();if(!e){for(var a of i)if(!a.isShadowless&&!a.isUIShadow&&a.mainQuads){e=a;break}}if(!t){for(var n of i)if(n.isUIShadow&&n.mainQuads){t=n;break}}return!(!e||!t||(e.setShadowRenderer(t),t.setShadowSource(e),0))}recycleQuad(e){var t;return e&&this._mainQuads&&(0<=(t=this._mainQuads.indexOf(e))?(this._mainQuads.splice(t,1),aa.recycleQuad(e)):e=null),e}attachQuad(e){return this._mainQuads&&this._mainQuads.push(e),this}detachQuads(){if(this._mainQuads)for(;0<this._mainQuads.length;){var e=this._mainQuads.shift();this.recycleQuad(e)}return this}copyComponent(e){return super.copyComponent(e),this.isUIShadow=e.isUIShadow,this.isShadowless=e.isShadowless,this}}class sa extends Cl{init(e){var t;(t=super.init)!=null&&t.call(this,e),this.attachQuad(aa.spawnQuad()),this.sprite=b.res.defaultGUISprite}cloneTo(e){e.getOrAddComponent(sa).copyComponent(this)}copyComponent(e){return super.copyComponent(e),this.sprite=e.sprite,this.color=e.color,this.imageType=e.imageType,this}set sprite(e){e=e||b.res.defaultGUISprite;for(var t of this._mainQuads)t.sprite=e,t.setSize(this._uiTransform.width,this._uiTransform.height);this.setShadowDirty()}onTransformResize(){this.applyTransformSize()}applyTransformSize(){for(var e of this._mainQuads)e.setSize(this._uiTransform.width,this._uiTransform.height);this.setShadowDirty()}get sprite(){return this._mainQuads[0].sprite}onUIComponentVisible(e){this.applyComponentVisible()}onUITransformVisible(e){this.applyComponentVisible()}applyComponentVisible(){var e,t=!this._visible||!this._uiTransform.globalVisible;for(e of this._mainQuads)e.visible=!t;this.setShadowDirty()}get color(){return this._mainQuads[0].color}set color(e){for(var t of this._mainQuads)t.color=e;this.setShadowDirty()}get imageType(){return this._mainQuads[0].imageType}set imageType(e){for(var t of this._mainQuads)t.imageType=e;this.setShadowDirty()}}class vi extends sa{constructor(){super(...arguments),s(this,"space",rt.World),s(this,"needUpdateGeometry",!0),s(this,"panelOrder",0),s(this,"needSortOnCameraZ"),s(this,"_billboard"),s(this,"_rebuild"),s(this,"scissorEnable",!1),s(this,"scissorCornerRadius",0),s(this,"scissorFadeOutSize",0),s(this,"_uiRenderer"),s(this,"_uiMaterial"),s(this,"_geometry"),s(this,"_limitVertexCount",0),s(this,"_maxCount",128),s(this,"isUIPanel",!0),s(this,"_collectTransform",[])}cloneTo(e){e.getOrAddComponent(vi).copyComponent(this)}copyComponent(e){return super.copyComponent(e),this.panelOrder=e.panelOrder,this.needSortOnCameraZ=e.needSortOnCameraZ,this.cullMode=e.cullMode,this.billboard=e.billboard,this.scissorEnable=e.scissorEnable,this.scissorCornerRadius=e.scissorCornerRadius,this.scissorFadeOutSize=e.scissorFadeOutSize,this}init(e){super.init(e),this.create(this.space),this.visible=!1}create(e){this._maxCount=this.space==rt.World?Ye.quadMaxCountForWorld:Ye.quadMaxCountForView,this._uiRenderer=this.object3D.addComponent(Sl),this._geometry=this._uiRenderer.geometry=new _l(this._maxCount).create(),this._uiMaterial=this._uiRenderer.material=new bl(e),this._uiRenderer.renderOrder=Ye.SortOrderStartWorld,this._rebuild=new yl,this.object3D.bound=new we(new d,new d(1,1,1).multiplyScalar(.1*Number.MAX_VALUE))}get quadMaxCount(){return this._maxCount}set billboard(e){this.space==rt.View?e=Ut.None:console.warn("Cannot enable billboard in view space"),e==Ut.BillboardXYZ||e==Ut.BillboardY?(this._billboard=this.object3D.getOrAddComponent(hi),this._billboard.type=e):(this.object3D.removeComponent(hi),this._billboard=null)}get billboard(){return this._billboard?this._billboard.type:Ut.None}set cullMode(e){this.space==rt.World?this._uiRenderer.material.cullMode=e:console.warn("Cannot change cullMode in view space")}get cullMode(){return this._uiRenderer.material.cullMode}onUpdate(e){var t;(t=super.onUpdate)!=null&&t.call(this,e),this.rebuildGUIMesh(e)}rebuildGUIMesh(e){var t=this,a=M.canvas.clientWidth,i=M.canvas.clientHeight,n=t._collectTransform;if(n.length=0,t.object3D.getComponents(bt,n),0<n.length){t._rebuild.build(n,t,t.needUpdateGeometry),this._uiMaterial.setScreenSize(a,i);for(const o of n)o.needUpdateQuads=!1}var a=t.object3D.getComponentFromParent(Es),i=a?a.index:0,a=(t._uiRenderer.enable=0<n.length,t.isViewPanel?Ye.SortOrderStartView:Ye.SortOrderStartWorld),n=(t._uiRenderer.renderOrder=i*Ye.SortOrderCanvasSpan+a+t.panelOrder,t._uiRenderer.needSortOnCameraZ=t.needSortOnCameraZ,t._uiMaterial);n.setLimitVertex(t._limitVertexCount),n.setScissorEnable(t.scissorEnable),t.scissorEnable&&(i=t.mainQuads[0],n.setScissorRect(i.left,i.bottom,i.right,i.top),n.setScissorCorner(t.scissorCornerRadius,t.scissorFadeOutSize)),t.needUpdateGeometry=!1}}class na extends vi{constructor(){super(),s(this,"isViewPanel",!0),s(this,"space",rt.View)}cloneTo(e){e.getOrAddComponent(na).copyComponent(this)}}class oa extends vi{constructor(){super(),s(this,"isWorldPanel",!0),s(this,"space",rt.World),s(this,"_depthTest",!0)}cloneTo(e){e.getOrAddComponent(oa).copyComponent(this)}copyComponent(e){return super.copyComponent(e),this.depthTest=e.depthTest,this}get depthTest(){return this._depthTest}set depthTest(e){this._depthTest!=e&&(this._depthTest=e,e=this.depthTest?dt.less_equal:dt.always,this._uiRenderer.material.depthCompare=e)}}let Si;class bt extends Ze{constructor(){super(),s(this,"useParentPivot",!1),s(this,"parent"),s(this,"pivotX",.5),s(this,"pivotY",.5),s(this,"_width",100),s(this,"_height",100),s(this,"_localVisible",!0),s(this,"_globalVisible",!0),s(this,"_uiInteractiveList"),s(this,"_localMatrix"),s(this,"_worldMatrix"),s(this,"_onChange",!0),s(this,"needUpdateQuads",!0),s(this,"_tempTransforms",[]),this._localMatrix=new er,this._worldMatrix=new er}get uiInteractiveList(){return this._uiInteractiveList}init(e){super.init(e),this.onParentChange(null,(e=this.object3D.parent)==null?void 0:e.object3D)}addUIInteractive(e){return this._uiInteractiveList||(this._uiInteractiveList=[]),this._uiInteractiveList.push(e),this}removeUIInteractive(e){if(this._uiInteractiveList){var t=this._uiInteractiveList.indexOf(e);if(0<=t)return this._uiInteractiveList.slice(t,1),e}return null}get globalVisible(){return this._globalVisible}set visible(e){this._localVisible!=e&&(this._localVisible=e,e=!this.parent||this.parent._globalVisible,this.onUITransformVisible(this._localVisible&&e))}get visible(){return this._localVisible}onUITransformVisible(e){e=this._localVisible&&e,e!=this._globalVisible&&(this._globalVisible=e,this.object3D.components.forEach((t,i)=>{if(t.onUITransformVisible)if(t==this)for(var a of this.object3D.entityChildren)a=a.getComponent(bt),a&&a.onUITransformVisible(this._globalVisible);else t.onUITransformVisible(this._globalVisible)}))}onParentChange(e,t){var i;(i=this.parent)!=null&&i.setNeedUpdateUIPanel(),this.parent=t?.getComponent(bt),(i=this.parent)!=null&&i.setNeedUpdateUIPanel()}get width(){return this._width}get height(){return this._height}resize(e,t){var i,a;if(this._width==e&&this._height==t)return!1;this._width=e,this._height=t,this.onChange=!0;for(a of this.object3D.components.values())(i=a.onTransformResize)!=null&&i.call(a);return!0}get x(){return this.object3D.x}set x(e){e!=this.object3D.x&&(this.object3D.x=e,this.onChange=!0)}get y(){return this.object3D.y}set y(e){e!=this.object3D.y&&(this.object3D.y=e,this.onChange=!0)}setXY(e,t){var i=this.object3D.localPosition;i.set(e,t,i.z),this.object3D.localPosition=i,this.onChange=!0}get z(){return this.object3D.z}set z(e){e!=this.object3D.z&&(this.object3D.z=e,this.onChange=!0)}get scaleX(){return this.object3D.scaleX}set scaleX(e){this.onChange=!0,this.object3D.scaleX=e}get scaleY(){return this.object3D.scaleY}set scaleY(e){this.onChange=!0,this.object3D.scaleY=e}get scaleZ(){return this.object3D.scaleZ}set scaleZ(e){this.onChange=!0,this.object3D.scaleZ=e}get onChange(){return this._onChange}set onChange(e){if(this._onChange!=e&&(this._onChange=e)){var t;this._tempTransforms.length=0;for(t of this.object3D.getComponents(bt,this._tempTransforms,!0))t._onChange=!0,t.needUpdateQuads=!0}}onEnable(){this.setNeedUpdateUIPanel(),this.onChange=!0}onDisable(){this.setNeedUpdateUIPanel(),this.onChange=!0}setNeedUpdateUIPanel(){let e;(e=(e=this.object3D.getComponentFromParent(oa))||this.object3D.getComponentFromParent(na))&&(e.needUpdateGeometry=!0)}cloneTo(e){e=e.getOrAddComponent(bt),e.visible=this.visible,e.x=this.x,e.y=this.y,e.z=this.z,e.resize(this.width,this.height),e.pivotX=this.pivotX,e.pivotY=this.pivotY,e.scaleX=this.scaleX,e.scaleY=this.scaleY}matrix(){var e=this._localMatrix,t=this.object3D.rotationZ;return this.parent?e.updateScaleAndRotation(this.object3D.scaleX,this.object3D.scaleY,t,t):e.updateScaleAndRotation(1,1,t,t),e.tx=this.object3D.x,e.ty=this.object3D.y,this.pivotX==.5&&this.pivotY==.5||(Si=Si||new er().identity(),e.mul(Si.setTo(1,0,0,1,-(this.pivotX-.5)*this.width,-(this.pivotY-.5)*this.height))),e}getWorldMatrix(){var e=this._worldMatrix;return this._onChange&&(e.copyFrom(this.matrix()),this.parent&&e.mul(this.parent.getWorldMatrix()),this._onChange=!1),e}}class Ml{constructor(){s(this,"_ray"),s(this,"_mouseCode"),s(this,"_clickEvent"),s(this,"_outEvent"),s(this,"_overEvent"),s(this,"_upEvent"),s(this,"_downEvent"),s(this,"_view"),s(this,"_lastDownTarget"),s(this,"_lastOverTarget"),s(this,"_lastDownPosition",new Q),s(this,"_calcDistanceVec2",new Q),s(this,"_lastDownTime",0),s(this,"_clickTimeSpan",200),s(this,"_clickDistanceSpan",10),s(this,"_colliderOut",[]),s(this,"_transformList",[]),s(this,"_sortWorldPanelList",[]),s(this,"_iteractive2PanelDict",new Map)}init(e){this._view=e,this._ray=new Ct,this._clickEvent=new E(E.PICK_CLICK_GUI),this._outEvent=new E(E.PICK_OUT_GUI),this._overEvent=new E(E.PICK_OVER_GUI),this._upEvent=new E(E.PICK_UP_GUI),this._downEvent=new E(E.PICK_DOWN_GUI),b.inputSystem.addEventListener(E.POINTER_DOWN,this.onTouchDown,this),b.inputSystem.addEventListener(E.POINTER_UP,this.onTouchUp,this),b.inputSystem.addEventListener(E.POINTER_MOVE,this.onTouchMove,this)}onTouchMove(e){this._mouseCode=e.mouseCode,this.collectEntities(),e=this.pick(this._colliderOut,this._view.camera),e=e?e.interactive:null,e!=this._lastOverTarget&&(this._lastOverTarget&&this._lastOverTarget.enable&&(this._lastOverTarget.mouseStyle=Sr.NORMAL,this._outEvent.data=this._lastOverTarget,this._lastOverTarget.object3D.dispatchEvent(this._outEvent)),e&&(e.mouseStyle=Sr.OVER,(this._overEvent.data=e).object3D.dispatchEvent(this._overEvent)),this._lastOverTarget=e)}onTouchDown(e){this._lastDownTime=he.time,this._lastDownPosition.set(e.mouseX,e.mouseY),this._mouseCode=e.mouseCode,this.collectEntities(),e=this.pick(this._colliderOut,this._view.camera),e=e?e.interactive:null,e&&(e.mouseStyle=Sr.DOWN,(this._overEvent.data=e).object3D.dispatchEvent(this._overEvent)),this._lastDownTarget=e}onTouchUp(e){this._calcDistanceVec2.set(e.mouseX,e.mouseY),this._mouseCode=e.mouseCode,this.collectEntities();var t=this.pick(this._colliderOut,this._view.camera),i=t?t.interactive:null;this._lastDownTarget&&this._lastDownTarget.enable&&(this._lastDownTarget.mouseStyle=Sr.NORMAL),i&&i==this._lastDownTarget&&he.time-this._lastDownTime<=this._clickTimeSpan&&(this._calcDistanceVec2.set(e.mouseX,e.mouseY),this._calcDistanceVec2.distance(this._lastDownPosition)<=this._clickDistanceSpan)&&(this._clickEvent.data={pick:i,pickInfo:t,mouseCode:this._mouseCode},i.object3D.dispatchEvent(this._clickEvent)),this._lastDownTarget=null}collectEntities(){return this._colliderOut.length=0,this._sortWorldPanelList.length=0,this._iteractive2PanelDict.clear(),this._view.canvasList.forEach(e=>{if(e&&e.transform&&e.transform.parent){var t,e=e.object3D.getComponentsByProperty("isUIPanel",!0,!0);e.sort((o,h)=>(o=o._uiRenderer.__renderOrder,h._uiRenderer.__renderOrder<o?-1:1));for(t of e){this._transformList.length=0,t.object3D.getComponents(bt,this._transformList);for(const o of this._transformList){var i=o.uiInteractiveList;if(i&&0<i.length)for(var a of i)this._colliderOut.push(a),this._iteractive2PanelDict.set(a,t)}}}}),this._colliderOut}pick(e,t){this._ray=this._view.camera.screenPointToRay(b.inputSystem.mouseX,b.inputSystem.mouseY);var i=new Q(b.inputSystem.mouseX,b.inputSystem.mouseY),a=new Q(M.canvas.clientWidth,M.canvas.clientHeight);for(const o of e)if(o.interactive&&o.enable&&o.interactiveVisible){var n=this._iteractive2PanelDict.get(o);if(n=o.rayPick(this._ray,n,i,a))return n.interactive=o,n}return null}}var El=(r=>(r[r.COLLINEAR=0]="COLLINEAR",r[r.LINES_INTERSECT=1]="LINES_INTERSECT",r[r.SEGMENTS_INTERSECT=2]="SEGMENTS_INTERSECT",r[r.A_BISECTS_B=3]="A_BISECTS_B",r[r.B_BISECTS_A=4]="B_BISECTS_A",r[r.PARALELL=5]="PARALELL",r))(El||{}),Pl=(r=>(r[r.ON_LINE=0]="ON_LINE",r[r.LEFT_SIDE=1]="LEFT_SIDE",r[r.RIGHT_SIDE=2]="RIGHT_SIDE",r))(Pl||{});const Ue=class{constructor(r,e){s(this,"start"),s(this,"end"),s(this,"color",new x(1,1,1,1)),s(this,"_normal"),s(this,"_normalCalculated",!1),this.start=r,this.end=e}set(r,e){this.start=r,this.end=e}getCenter(){var r=d.HELP_0;return this.start.subtract(this.end,r),r.scaleBy(.5),r.add(this.end),r}inverse(){var r=this.start;this.start=this.end,this.end=r}equals(r){return this.start==r.start&&this.end==r.end||this.start==r.end&&this.end==r.start}toArray(){return[this.start.x,this.start.y,this.start.z,this.end.x,this.end.y,this.end.z]}static getLines(r){var e=[];for(let a=0;a<r.length;a++){var t=a,i=Ya(a+1,r.length),t=r[t],i=r[i];e.push(new Ue(t,i))}return e}intersection(i,e=null){var a=(i.end.z-i.start.z)*(this.end.x-this.start.x)-(i.end.x-i.start.x)*(this.end.z-this.start.z),t=(i.end.x-i.start.x)*(this.start.z-i.start.z)-(i.end.z-i.start.z)*(this.start.x-i.start.x),i=(i.start.x-this.start.x)*(this.end.z-this.start.z)-(i.start.z-this.start.z)*(this.end.x-this.start.x);if(a==0)return t==0&&i==0?0:5;i/=a;var a=this.start.x+(t/=a)*(this.end.x-this.start.x),n=this.start.z+t*(this.end.z-this.start.z);return e!=null&&(e.x=a,e.y=0,e.z=n),0<=t&&t<=1&&0<=i&&i<=1?2:0<=i&&i<=1?3:0<=t&&t<=1?4:1}getDirection(){var r=this.end.subtract(this.start);return new d(r.x,r.y).normalize()}copyFrom(r){this.start||(this.start=new d),this.end||(this.end=new d),this.start.copyFrom(r.start),this.end.copyFrom(r.end)}static IsEqual(r,e){return Math.abs(r-e)<1e-7}static squreDistanceSegmentToSegment(lr,ur,t){let i=lr.start,a=lr.end,n=ur.start,o=ur.end,h=i.x,l=i.y,u=i.z,c=a.x,f=a.y,p=a.z,m=n.x,_=n.y,v=n.z,S=o.x,T=o.y,y=o.z,C=c-h,I=f-l,L=p-u,R=S-m,O=T-_,N=y-v,j=h-m,de=l-_,W=u-v,H=C*C+I*I+L*L,te=C*R+I*O+L*N,Ie=R*R+O*O+N*N,_e=C*j+I*de+L*W,Re=R*j+O*de+N*W,k=H*Ie-te*te,X=k,Gt=k,Le=0,Qe=0,Rr=(this.IsEqual(k,0)?(Le=0,X=1,Qe=Re,Gt=Ie):(Le=te*Re-Ie*_e,Qe=H*Re-te*_e,Le<0?(Le=0,Qe=Re,Gt=Ie):Le>X&&(Le=X,Qe=Re+te,Gt=Ie)),Qe<0?-_e<(Qe=0)?Le=0:H<-_e?Le=X:(Le=-_e,X=H):Qe>Gt&&(Qe=Gt,te-_e<0?Le=0:H<te-_e?Le=X:(Le=te-_e,X=H)),0),Lr=0;Rr=this.IsEqual(Le,0)?0:Le/X,Lr=this.IsEqual(Qe,0)?0:Qe/Gt;var lr=j+Rr*C-Lr*R,ur=de+Rr*I-Lr*O,ca=W+Rr*L-Lr*N;return lr*lr+ur*ur+ca*ca}isNear(r,e=0,t){var a=d.HELP_0,i=d.HELP_1,a=(a.copyFrom(r.origin),i.copyFrom(r.direction),i.scaleBy(9999),i.add(a,i),Ue.cacluteLine0.set(a,i),Ue.cacluteLine1.copyFrom(this),t&&(t.perspectiveMultiplyPoint3(Ue.cacluteLine1.start,Ue.cacluteLine1.start),t.perspectiveMultiplyPoint3(Ue.cacluteLine1.end,Ue.cacluteLine1.end)),Ue.squreDistanceSegmentToSegment(Ue.cacluteLine0,Ue.cacluteLine1,t));return a+1e-4<=e?(r.length=a,!0):!(r.length=-999999)}};let Er=Ue;s(Er,"cacluteLine0",new Ue(null,null)),s(Er,"cacluteLine1",new Ue(null,null));const Ps=class{constructor(r,e,t){s(this,"v1"),s(this,"v2"),s(this,"v3"),s(this,"u1"),s(this,"u2"),s(this,"u3"),s(this,"n1"),s(this,"n2"),s(this,"n3"),s(this,"t0"),s(this,"t"),s(this,"u"),s(this,"v"),s(this,"min",new d),s(this,"max",new d),s(this,"id",0),this.id=200+Ps.ID++,r&&e&&t&&this.set(r,e,t)}set(r,e,t){return this.v1=r,this.v2=e,this.v3=t,r=this.min,e=this.max,r.x=Math.min(this.v1.x,this.v2.x,this.v3.x),r.y=Math.min(this.v1.y,this.v2.y,this.v3.y),r.z=Math.min(this.v1.z,this.v2.z,this.v3.z),e.x=Math.max(this.v1.x,this.v2.x,this.v3.x),e.y=Math.max(this.v1.y,this.v2.y,this.v3.y),e.z=Math.max(this.v1.z,this.v2.z,this.v3.z),this}getNormal(){var r=this.v1,e=this.v2,t=this.v3,e=new d(e.x-r.x,e.y-r.y,e.z-r.z),t=new d(t.x-r.x,t.y-r.y,t.z-r.z).cross(e);return t.normalize(),t}turnBack(){var r=this.v3;this.v3=this.v1,this.v1=r}getLines(){var r=this.v1,e=this.v2,t=this.v3;return[new Er(r,e),new Er(e,t),new Er(t,r)]}equals(r){let e=this.getLines(),t=r.getLines(),i=0;for(let a=0;a<e.length;a++)for(let n=0;n<t.length;n++)e[a].equals(t[n])&&i++;return i==3}getCenter(){var r=this.min,e=this.max,t=new d;return t.x=.5*(r.x+e.x),t.y=.5*(r.y+e.y),t.z=.5*(r.z+e.z),t}intersects(a){var e=this.max,t=this.min,i=a.max,a=a.min;return t.x<=i.x&&e.x>=a.x&&t.y<=i.y&&e.y>=a.y&&t.z<=i.z&&e.z>=a.z}sign2D(r,e,t){return(r.x-t.x)*(e.z-t.z)-(e.x-t.x)*(r.z-t.z)}pointInTriangle2D(n){var e=this.v1,a=this.v2,t=this.v3,i=this.sign2D(n,e,a),a=this.sign2D(n,a,t),n=this.sign2D(n,t,e);return!((i<0||a<0||n<0)&&(0<i||0<a||0<n))}toArray(){return[this.v1.x,this.v1.y,this.v1.z,this.v2.x,this.v2.y,this.v2.z,this.v3.x,this.v3.y,this.v3.z]}};let Ds=Ps;s(Ds,"ID",-1);class ot{static init(){this._pt0=new d,this._pt1=new d,this._pt2=new d,this._pt3=new d,this._ray=new Ct,this._triangle=new Ds,this._hitPoint=new d,this._worldMatrix=new A}static rayPick(e,t,i,a,n,o){this._isInit||(this.init(),this._isInit=!0);let h=this._worldMatrix,l;var u,c;return a!=rt.World?(this.calculateHotArea_View(n,this._pt0,this._pt1,this._pt2,this._pt3),a=i.x,i=i.y,u=Math.min(this._pt0.x,this._pt1.x,this._pt2.x,this._pt3.x)+.5*a,c=Math.min(this._pt0.y,this._pt1.y,this._pt2.y,this._pt3.y)+.5*i,a=Math.max(this._pt0.x,this._pt1.x,this._pt2.x,this._pt3.x)+.5*a,i=Math.max(this._pt0.y,this._pt1.y,this._pt2.y,this._pt3.y)+.5*i,(l=t.x<=a&&t.x>=u&&t.y<=i&&t.y>=c)?(this._hitPoint.set(t.x,t.y,0),{intersect:!0,distance:0,intersectPoint:this._hitPoint}):null):(this.calculateHotArea_World(n,this._pt0,this._pt1,this._pt2,this._pt3),h.copyFrom(o).invert(),a=this._ray,a.copy(e).applyMatrix(h),this._triangle.set(this._pt0,this._pt1,this._pt2),(l=a.intersectTriangle(a.origin,a.direction,this._triangle))||(this._triangle.set(this._pt1,this._pt2,this._pt3),l=a.intersectTriangle(a.origin,a.direction,this._triangle)),l?{intersect:!0,distance:0,intersectPoint:l}:null)}static calculateHotArea_View(l,t,i,a,n){var o=l.getWorldMatrix(),h=o.getScaleX(),u=o.getScaleY(),h=.5*l.width*h,l=.5*l.height*u,u=(t.set(-h,-l,0),i.set(h,-l,0),a.set(-h,l,0),n.set(h,l,0),o.tx);t.x+=u,i.x+=u,a.x+=u,n.x+=u,u=o.ty,t.y-=u,i.y-=u,a.y-=u,n.y-=u}static calculateHotArea_World(l,t,i,a,n){var o=l.getWorldMatrix(),h=o.getScaleX(),u=o.getScaleY(),h=.5*l.width*h,l=.5*l.height*u,u=(t.set(-h,l,0),i.set(h,l,0),a.set(-h,-l,0),n.set(h,-l,0),o.tx);t.x+=u,i.x+=u,a.x+=u,n.x+=u,u=o.ty,t.y+=u,i.y+=u,a.y+=u,n.y+=u}}s(ot,"_pt0"),s(ot,"_pt1"),s(ot,"_pt2"),s(ot,"_pt3"),s(ot,"_hitPoint"),s(ot,"_worldMatrix"),s(ot,"_ray"),s(ot,"_triangle"),s(ot,"_isInit");var Dl=(r=>(r[r.UpperLeft=0]="UpperLeft",r[r.UpperCenter=1]="UpperCenter",r[r.UpperRight=2]="UpperRight",r[r.MiddleLeft=3]="MiddleLeft",r[r.MiddleCenter=4]="MiddleCenter",r[r.MiddleRight=5]="MiddleRight",r[r.LowerLeft=6]="LowerLeft",r[r.LowerCenter=7]="LowerCenter",r[r.LowerRight=8]="LowerRight",r))(Dl||{}),Il=(r=>(r[r.Upper=0]="Upper",r[r.Middle=1]="Middle",r[r.Lower=2]="Lower",r))(Il||{}),Rl=(r=>(r[r.Left=0]="Left",r[r.Center=1]="Center",r[r.Right=2]="Right",r))(Rl||{}),Ll=(r=>(r[r.NONE=0]="NONE",r[r.COLOR=1]="COLOR",r[r.SPRITE=2]="SPRITE",r))(Ll||{}),Ol=(r=>(r[r.CastGI=0]="CastGI",r[r.ReceiveGI=1]="ReceiveGI",r[r.CastDepth=2]="CastDepth",r[r.Other=3]="Other",r))(Ol||{});class Al extends Ji{constructor(n=0,a=0){super(),D.register("GIProbeShader",al),this.setShader("GIProbeShader","GIProbeShader");var i=this.getShader(),a=(i.setDefine("USE_BRDF",!0),i.setShaderEntry("VertMain","FragMain"),i.setUniformVector4("probeUniform",new G(a,n,0,0)),i.shaderState),n=(a.acceptShadow=!1,a.castShadow=!1,a.receiveEnv=!1,a.acceptGI=!1,a.useLight=!1,b.res.getTexture("BRDFLUT"));this.brdfLUT=n,this.baseMap=b.res.whiteTexture,this.normalMap=b.res.normalTexture,this.emissiveMap=b.res.blackTexture}debug(){}}s(Al,"count",0);class ha{constructor(e,t){s(this,"center",new d),s(this,"extents"),s(this,"max"),s(this,"min"),s(this,"size"),s(this,"tmpVecA",new d),s(this,"tmpVecB",new d),s(this,"tmpVecC",new d),s(this,"tmpVecD",new d),s(this,"radius",0),s(this,"diffBetweenPoints",new d),s(this,"owner"),s(this,"forward",new d(0,0,1)),s(this,"worldCenter"),s(this,"worldSize"),s(this,"_center",new d),this.center=e||new d(0,0,0),this.radius=t===void 0?.5:t}updateBound(){throw new Error("Method not implemented.")}containsPoint(t){var t=this.tmpVecA.subtract(t,this.center).lengthSquared,i=this.radius;return t<i*i}intersectsRay(e,t){var a=this.tmpVecA.copyFrom(e.origin).subtract(this.center),i=a.dotProduct(this.tmpVecB.copyFrom(e.direction).normalize()),a=a.dotProduct(a)-this.radius*this.radius;return 0<a&&0<i?null:!((a=i*i-a)<0||(i=Math.abs(-i-Math.sqrt(a)),t&&t.copyFrom(e.direction).scaleBy(i).add(e.origin),0))}intersectsBoundingSphere(e){return this.tmpVecA.subtract(e.center,this.center),e=e.radius+this.radius,this.tmpVecA.lengthSquared<=e*e}calculateTransform(e){this.update(e)}containsFrustum(e,t){return t.containsSphere(e)}clone(){return new ha(this.center.clone(),this.radius)}update(e){this.owner=e,this._center.add(e.transform.worldMatrix.position,this.center),this.forward=e.transform.forward}merge(e){throw new Error("BoundingSphere merge is not ready!")}setFromCenterAndSize(e,t){this.center.copy(e),this.radius=t}}const jr=class extends Ms{constructor(r){super(),s(this,"_pickRet"),s(this,"box"),s(this,"radius",.5),this._shapeType=ia.Sphere,this.radius=r,this.box=new ha(new d,1)}rayPick(a,i){this.box.setFromCenterAndSize(this.center,this.radius);var t=jr.helpMatrix,i=(t.copyFrom(i).invert(),jr.helpRay.copy(a)),a=(i.applyMatrix(t),i.intersectSphere(i.origin,i.direction,this.box.center,this.box.radius));return a?(this._pickRet||(this._pickRet={intersect:!1,intersectPoint:new d,distance:0}),this._pickRet.intersect=!0,this._pickRet.intersectPoint=a,this._pickRet.distance=d.distance(i.origin,jr.v3_help_0),this._pickRet):null}};let wi=jr;s(wi,"v3_help_0",new d),s(wi,"helpMatrix",new A),s(wi,"helpRay",new Ct);class Ul extends K{constructor(){super(),s(this,"_envMap"),s(this,"skyObject"),s(this,"envMapChange",!0),s(this,"view"),(this.transform.scene3D=this).skyObject=new K,this.addChild(this.skyObject),this._isScene3D=!0,this.envMap||(this.envMap=b.res.defaultSky)}get envMap(){return this._envMap}set envMap(e){this._envMap!=e&&(this.envMapChange=!0),this._envMap=e,B.instance.sky&&"map"in B.instance.sky&&(B.instance.sky.map=e)}get exposure(){return B.instance.sky&&"exposure"in B.instance.sky?B.instance.sky.exposure:0}set exposure(e){B.instance.sky&&"exposure"in B.instance.sky&&(B.instance.sky.exposure=e,b.setting.sky.skyExposure=e)}get roughness(){if(B.instance.sky&&"roughness"in B.instance.sky)return B.instance.sky.roughness}set roughness(e){B.instance.sky&&"roughness"in B.instance.sky&&(B.instance.sky.roughness=e)}}class Bl extends Ki{constructor(){super(3,Gi.triangle_list)}}class kl extends Ki{constructor(){super(2,Gi.line_list)}}class Nl extends K{constructor(){super(),s(this,"mLineRender"),s(this,"mFillRender"),this.mLineRender=this.addComponent(kl),this.mFillRender=this.addComponent(Bl)}drawAxis(e,t=new d(0,0,0),i=10){this.createCustomShape(e).buildAxis(t,i)}drawLines(e,t,i=x.COLOR_WHITE){this.createCustomShape(e).buildLines(t,i)}drawCurve(e,t,i=10,a=.5,n=x.COLOR_WHITE){var o=[],h=new d,l=new d;for(let m=0;m<t.length-1;++m){o.push(t[m]);var u=t[Math.max(m-1,0)],c=t[m],f=t[m+1],p=t[Math.min(m+2,t.length-1)];f.subtract(u,h).multiplyScalar(a/3).add(c,h),c.subtract(p,l).multiplyScalar(a/3).add(f,l),o.push(...this.calculateBezierCurve(c,h,l,f,i))}o.push(t[t.length-1]),this.drawLines(e,o,n)}calculateBezierCurve(e,t,i,a,n){var o=new Array(n);for(let f=0;f<n;++f){var c=(f+1)/(n+1),u=1-c,h=e.mul(u*u*u),l=t.mul(3*c*u*u),u=i.mul(3*c*c*u),c=a.mul(c*c*c);o[f]=h.add(l).add(u).add(c)}return o}drawRect(e,t,i,a,n=x.COLOR_WHITE){this.drawLines(e,[t,new d(t.x+i,t.y,t.z),new d(t.x+i,t.y+a,t.z),new d(t.x,t.y+a,t.z),t],n)}drawCircle(e,t,i,a=32,n=d.Y_AXIS,o=x.COLOR_WHITE){this.createCustomShape(e).buildCircle(t,i,a,n,o)}drawSector(e,t,i,a,n,o=16,h=d.Y_AXIS,l=x.COLOR_WHITE){var u=(n-a)*ee,c=(a*=ee,[]);c.push(t);for(let _=0;_<=o;++_){0<_&&c.push(c[c.length-1]);var f=u*(_/o)+a,p=i*Math.cos(f),m=i*Math.sin(f);switch(h){case d.X_AXIS:c.push(t.add(new d(0,p,m)));break;case d.Y_AXIS:c.push(t.add(new d(p,0,m)));break;default:d.Z_AXIS,c.push(t.add(new d(p,m,0)))}}c.push(c[c.length-1]),c.push(t),this.mLineRender.fillShapeData(e,"line",l,c)}drawArcLine(e,t,i,a,n,o=16,h=d.Y_AXIS,l=x.COLOR_WHITE){this.mLineRender.allocGraphics3DShape(e,this.transform._worldMatrix.index).buildArcLine(t,i,a,n,o,h,l)}createCustomShape(e,t=this.transform){return this.mLineRender.allocGraphics3DShape(e,t._worldMatrix.index)}drawBox(e,t,i,a=x.COLOR_WHITE){var n=[];n.push(t),n.push(new d(i.x,t.y,t.z)),n.push(n[n.length-1]),n.push(new d(i.x,i.y,t.z)),n.push(n[n.length-1]),n.push(new d(t.x,i.y,t.z)),n.push(n[n.length-1]),n.push(t),n.push(n[n.length-1]),n.push(new d(t.x,t.y,i.z)),n.push(n[n.length-1]),n.push(new d(i.x,t.y,i.z)),n.push(n[n.length-1]),n.push(new d(i.x,i.y,i.z)),n.push(n[n.length-1]),n.push(new d(t.x,i.y,i.z)),n.push(n[n.length-1]),n.push(new d(t.x,t.y,i.z)),n.push(new d(t.x,i.y,t.z)),n.push(new d(t.x,i.y,i.z)),n.push(new d(i.x,i.y,t.z)),n.push(new d(i.x,i.y,i.z)),n.push(new d(i.x,t.y,t.z)),n.push(new d(i.x,t.y,i.z)),this.mLineRender.fillShapeData(e,"line",a,n)}drawFillRect(e,t,i,a,n=x.COLOR_WHITE){this.mFillRender.fillShapeData(e,"fill",n,[t,new d(t.x+i,t.y,t.z),new d(t.x+i,t.y+a,t.z),new d(t.x+i,t.y+a,t.z),new d(t.x,t.y+a,t.z),t])}drawFillCircle(e,t,i,a=32,n=d.Y_AXIS,o=x.COLOR_WHITE){var h=[];h.push(t);for(let f=0;f<=a;++f){2<=f&&(h.push(t),h.push(h[h.length-2]));var l=2*Math.PI*f/a,u=i*Math.cos(l),c=i*Math.sin(l);switch(n){case d.X_AXIS:h.push(t.add(new d(0,u,c)));break;case d.Y_AXIS:h.push(t.add(new d(u,0,c)));break;default:d.Z_AXIS,h.push(t.add(new d(u,c,0)))}}this.mFillRender.fillShapeData(e,"fill",o,h)}drawMeshWireframe(e,t,i,a=x.COLOR_WHITE){t&&this.createCustomShape(e,i||this.transform).fillShapeData(t.genWireframe(),a)}drawFillSector(e,t,i,a,n,o=16,h=d.Y_AXIS,l=x.COLOR_WHITE){var u=(n-a)*ee,c=(a*=ee,[]);c.push(t);for(let _=0;_<=o;++_){2<=_&&(c.push(t),c.push(c[c.length-2]));var f=u*(_/o)+a,p=i*Math.cos(f),m=i*Math.sin(f);switch(h){case d.X_AXIS:c.push(t.add(new d(0,p,m)));break;case d.Y_AXIS:c.push(t.add(new d(p,0,m)));break;default:d.Z_AXIS,c.push(t.add(new d(p,m,0)))}}this.mFillRender.fillShapeData(e,"fill",l,c)}drawBoundingBox(e,t,i=x.COLOR_WHITE){this.drawBox(e,t.min,t.max,i)}drawCameraFrustum(e,t=x.COLOR_WHITE){var i,a,n,o,h,l,u,c,f,p;e.type==oe.perspective?(a=(l=Math.tan(e.fov/2*ee))*e.aspect,f=(u=e.transform._worldMatrix).transformVector(new d(-a,-l,1)),p=u.transformVector(new d(-a,l,1)),c=u.transformVector(new d(a,-l,1)),u=u.transformVector(new d(a,l,1)),a=e.far,l=e.near,i=e.transform.worldPosition,o=new d().copyFrom(f).multiplyScalar(a).add(i),h=new d().copyFrom(p).multiplyScalar(a).add(i),n=new d().copyFrom(c).multiplyScalar(a).add(i),a=new d().copyFrom(u).multiplyScalar(a).add(i),f=new d().copyFrom(f).multiplyScalar(l).add(i),p=new d().copyFrom(p).multiplyScalar(l).add(i),c=new d().copyFrom(c).multiplyScalar(l).add(i),u=new d().copyFrom(u).multiplyScalar(l).add(i),(l=this.createCustomShape("CameraFrustum_"+e.object3D.uuid)).buildLines([p,h],t),l.buildLines([f,o],t),l.buildLines([u,a],t),l.buildLines([c,n],t),l.buildLines([h,a,n,o,h],t),l.buildLines([p,u,c,f,p],t)):e.type==oe.ortho&&(e.viewPort,e.viewPort.height,a=(i=e.transform.worldMatrix).transformVector(new d(-.5*e.viewPort.width,.5*e.viewPort.height,e.far)),n=i.transformVector(new d(-.5*e.viewPort.width,-.5*e.viewPort.height,e.far)),o=i.transformVector(new d(.5*e.viewPort.width,.5*e.viewPort.height,e.far)),h=i.transformVector(new d(.5*e.viewPort.width,-.5*e.viewPort.height,e.far)),l=i.transformVector(new d(-.5*e.viewPort.width,.5*e.viewPort.height,e.near)),u=i.transformVector(new d(-.5*e.viewPort.width,-.5*e.viewPort.height,e.near)),c=i.transformVector(new d(.5*e.viewPort.width,.5*e.viewPort.height,e.near)),f=i.transformVector(new d(.5*e.viewPort.width,-.5*e.viewPort.height,e.near)),(p=this.createCustomShape("CameraFrustum_"+e.object3D.uuid)).buildLines([l,a],t),p.buildLines([u,n],t),p.buildLines([c,o],t),p.buildLines([f,h],t),p.buildLines([a,o,h,n,a],t),p.buildLines([l,c,f,u,l],t))}drawObjectBoundingBox(e,t=x.COLOR_WHITE){var i=xt.genMeshBounds(e);this.drawBox("Bounds_"+e.uuid,i.min,i.max,t)}Clear(e){this.mLineRender.shapes.has(e)?this.mLineRender.removeShape(e):this.mFillRender.shapes.has(e)&&this.mFillRender.removeShape(e)}ClearAll(){this.mLineRender.shapes.clear(),this.mFillRender.shapes.clear()}ChangeColor(e,t){var i;if(this.mLineRender.shapes.has(e))i=this.mLineRender.shapes.get(e);else{if(!this.mFillRender.shapes.has(e))return;i=this.mFillRender.shapes.get(e)}var a=i.shapeData;for(let n=0;n<a.length;n+=Tt.ShapeVertexSize)a[n+4]=t.r,a[n+5]=t.g,a[n+6]=t.b,a[n+7]=t.a}}class zl{constructor(){s(this,"_computeShader"),s(this,"_outBuffer")}init(){var e=mi.getGBufferFrame("ColorPassGBuffer");this._computeShader=new ft(rl),this._outBuffer=new Xr(32),this._computeShader.setStorageBuffer("outBuffer",this._outBuffer),this._computeShader.setSamplerTexture("visibleMap",e.getPositionMap())}compute(e){e=ve.getCameraGroup(e.camera),this._computeShader.setStorageBuffer("standUniform",e.uniformGPUBuffer),e=w.beginCommandEncoder(),w.computeCommand(e,[this._computeShader]),w.endCommandEncoder(e),this._outBuffer.readBuffer()}getPickMeshID(){var e=this._outBuffer.outFloat32Array[0]+.1;return Math.floor(e)}getPickWorldPosition(e){e=e||new d;var t=this._outBuffer.outFloat32Array[4],i=this._outBuffer.outFloat32Array[5],a=this._outBuffer.outFloat32Array[6];return e.set(t,i,a),e}getPickScreenUV(e){e=e||new Q;var t=this._outBuffer.outFloat32Array[2],i=this._outBuffer.outFloat32Array[3];return e.set(t,i),e}}class Fl extends zt{constructor(e){super(),s(this,"ray"),s(this,"isTouching",!1),s(this,"_mouseCode"),s(this,"_pickEvent"),s(this,"_outEvent"),s(this,"_overEvent"),s(this,"_upEvent"),s(this,"_downEvent"),s(this,"_mouseMove"),s(this,"_pickCompute"),s(this,"_lastDownTarget"),s(this,"mouseEnableMap"),s(this,"_view"),s(this,"_lastFocus"),s(this,"_colliderOut",[]),s(this,"_interestList",[]),this._view=e,this.init()}init(){this.ray=new Ct,this.mouseEnableMap=new Map,this._pickEvent=new E(E.PICK_CLICK),this._outEvent=new E(E.PICK_OUT),this._overEvent=new E(E.PICK_OVER),this._mouseMove=new E(E.PICK_MOVE),this._upEvent=new E(E.PICK_UP),this._downEvent=new E(E.PICK_DOWN)}start(){b.inputSystem.addEventListener(E.POINTER_DOWN,this.onTouchStart,this),b.inputSystem.addEventListener(E.POINTER_UP,this.onTouchEnd,this),b.inputSystem.addEventListener(E.POINTER_CLICK,this.onTouchOnce,this),b.inputSystem.addEventListener(E.POINTER_MOVE,this.onTouchMove,this),b.setting.pick.mode=="pixel"&&(this._pickCompute=new zl,this._pickCompute.init())}stop(){b.inputSystem.removeEventListener(E.POINTER_DOWN,this.onTouchStart,this),b.inputSystem.removeEventListener(E.POINTER_UP,this.onTouchEnd,this),b.inputSystem.removeEventListener(E.POINTER_CLICK,this.onTouchOnce,this),b.inputSystem.removeEventListener(E.POINTER_MOVE,this.onTouchMove,this)}onTouchStart(e){this.isTouching=!0,this._mouseCode=e.mouseCode,this.collectEntities(),this.pick(this._colliderOut,this._view.camera);var t=this.findNearestObj(this._interestList,this._view.camera);(this._lastDownTarget=t)&&(this._downEvent.target=t.object3D,this._downEvent.ctrlKey=e.ctrlKey,this._downEvent.data={pick:t,pickInfo:this.getPickInfo(),mouseCode:this._mouseCode},this.dispatchEvent(this._downEvent),t.object3D.containEventListener(E.PICK_DOWN))&&t.object3D.dispatchEvent(this._downEvent)}onTouchEnd(e){this.isTouching=!1,this._mouseCode=e.mouseCode,this.collectEntities(),this.pick(this._colliderOut,this._view.camera);var t=this.findNearestObj(this._interestList,this._view.camera);t&&(this._upEvent.target=t.object3D,this._upEvent.ctrlKey=e.ctrlKey,this._upEvent.data={pick:t,pickInfo:this.getPickInfo(),mouseCode:this._mouseCode},this.dispatchEvent(this._upEvent),t.object3D.containEventListener(E.PICK_UP))&&t.object3D.dispatchEvent(this._upEvent)}getPickInfo(){return{worldPos:this._pickCompute.getPickWorldPosition(),screenUv:this._pickCompute.getPickScreenUV(),meshID:this._pickCompute.getPickMeshID()}}onTouchMove(e){this.isTouching=!0,this._mouseCode=e.mouseCode,this.collectEntities(),this.pick(this._colliderOut,this._view.camera);var t=this.findNearestObj(this._interestList,this._view.camera);t&&(this._mouseMove.target=t.object3D,this._mouseMove.ctrlKey=e.ctrlKey,this._mouseMove.data={pick:t,pickInfo:this.getPickInfo(),mouseCode:this._mouseCode},this.dispatchEvent(this._mouseMove),t.object3D.containEventListener(E.PICK_MOVE))&&t.object3D.dispatchEvent(this._mouseMove),t!=this._lastFocus&&(this._lastFocus&&this._lastFocus.object3D&&(this._outEvent.target=t.object3D,this._outEvent.data={pick:this._lastFocus,pickInfo:this.getPickInfo(),mouseCode:this._mouseCode},this._outEvent.ctrlKey=e.ctrlKey,this.dispatchEvent(this._outEvent),this._lastFocus.object3D.containEventListener(E.PICK_OUT))&&this._lastFocus.object3D.dispatchEvent(this._outEvent),t)&&(this._overEvent.target=t.object3D,this._overEvent.ctrlKey=e.ctrlKey,this._overEvent.data={pick:t,pickInfo:this.getPickInfo(),mouseCode:this._mouseCode},this.dispatchEvent(this._overEvent),t.object3D.containEventListener(E.PICK_OVER))&&t.object3D.dispatchEvent(this._overEvent),this._lastFocus=t}onTouchOnce(e){this.isTouching=!0,this._mouseCode=e.mouseCode,this.collectEntities(),this.pick(this._colliderOut,this._view.camera);var t,i=this.findNearestObj(this._interestList,this._view.camera);i&&(t=b.setting.pick.mode=="pixel"?this.getPickInfo():null,this._pickEvent.target=i.object3D,this._pickEvent.ctrlKey=e.ctrlKey,this._pickEvent.data={pick:i,pickInfo:t,mouseCode:this._mouseCode},this.dispatchEvent(this._pickEvent),i===this._lastDownTarget)&&i.object3D.containEventListener(E.PICK_CLICK)&&i.object3D.dispatchEvent(this._pickEvent),this._lastDownTarget=null}findNearestObj(e,t){let i=null,a=Number.MAX_VALUE;for(const o of e){var n=d.distance(o.object3D.transform.worldPosition,t.transform.worldPosition);n<a&&(i=o,a=n)}return i}collectEntities(){return this._colliderOut.length=0,this._view.scene.getComponents(fl,this._colliderOut),this._colliderOut}pick(e,t){if(this._interestList.length=0,b.setting.pick.mode=="pixel"){this._pickCompute.compute(this._view);var i=this._pickCompute.getPickMeshID(),i=this.mouseEnableMap.get(i);i&&this._interestList.push(i)}else if(b.setting.pick.mode=="bound"){var a;this.ray=t.screenPointToRay(b.inputSystem.mouseX,b.inputSystem.mouseY);for(const n of e)a=n.enable&&n.rayPick(this.ray),a&&this._interestList.push(n)}}}class Gl extends qr{constructor(e=0,t=0,i=0,a=0){super(),s(this,"_camera"),s(this,"_scene"),s(this,"_viewPort"),s(this,"_enablePick",!1),s(this,"_enable",!0),s(this,"pickFire"),s(this,"guiPick"),s(this,"canvasList"),s(this,"graphic3D"),this.canvasList=[],this._viewPort=new G(e,t,i,a),this.enablePick=!0,this.graphic3D=new Nl}get enable(){return this._enable}set enable(e){this._enable=e}get enablePick(){return this._enablePick}set enablePick(e){this._enablePick!=e&&(this.pickFire=new Fl(this),this.pickFire.start()),this._enablePick=e}get scene(){return this._scene}set scene(e){(this._scene=e).view=this,Ce.createBuffer(e),this.graphic3D&&e.addChild(this.graphic3D),e&&this.canvasList.forEach(t=>{t&&e.addChild(t.object3D)})}get camera(){return this._camera}set camera(e){this._camera=e}get viewPort(){return this._viewPort}set viewPort(e){this._viewPort=e}enableUICanvas(e=0){let t=this.canvasList[e];var i;return t||((i=new K).name="Canvas "+e,(t=i.addComponent(Es)).index=e,this.canvasList[e]=t),this.scene.addChild(t.object3D),this.guiPick||(this.guiPick=new Ml,this.guiPick.init(this)),t}disableUICanvas(e=0){e=this.canvasList[e],e&&e.object3D&&e.object3D.removeFromParent()}}var Vl=(r=>(r[r.position=3]="position",r[r.normal=3]="normal",r[r.TANGENT=4]="TANGENT",r[r.uv=2]="uv",r[r.TEXCOORD_1=2]="TEXCOORD_1",r[r.color=4]="color",r[r.joints0=4]="joints0",r[r.weights0=4]="weights0",r[r.joints1=4]="joints1",r[r.weights1=4]="weights1",r[r.vIndex=1]="vIndex",r[r.a_morphPositions_0=3]="a_morphPositions_0",r))(Vl||{});class Hl{constructor(){s(this,"min",0),s(this,"max",0)}set(e,t){return this.max=t,this.min=e,this}copy(e){return this.max=e.max,this.min=e.min,this}isInterestRange(e){return!(this.max>e.min||e.max<this.min)}}class Xl{constructor(){s(this,"_spaceDesc")}getRange(e){return this._spaceDesc[e]}initSpace(e){this._spaceDesc={};for(var t of e)(this._spaceDesc[t]=new Hl).set(-Number.MAX_VALUE,Number.MAX_VALUE);return this}isContain(e,t){return e=this._spaceDesc[e],t>=e.min&&t<e.max}isInterestRange(e,t){return e=this._spaceDesc[e],!!e&&t.isInterestRange(e)}splitSpace(e,t,i){return e=this._spaceDesc[e],t?e.max=i:e.min=i,this}copySpace(e){for(var t in e._spaceDesc){var i=e._spaceDesc[t];this._spaceDesc[t].copy(i)}return this}}const Is=class{};let tr=Is;s(tr,"MaxEntityCountInLeaf",4),s(tr,"MaxLayer",10),s(tr,"ClearLeafLayer",Is.MaxLayer-4);const Rs=class{constructor(){s(this,"uuid","0"),this.uuid=(Rs.UUID++).toString()}};let Ls=Rs;s(Ls,"UUID",0);class Yl{constructor(){s(this,"map",{}),s(this,"_count",0)}get count(){return this._count}push(e){return!this.map[e.uuid]&&(this.map[e.uuid]=e,this._count++,!0)}remove(e){return!!this.map[e]&&(delete this.map[e],this._count--,!0)}}const At=class extends Ls{constructor(r=0){super(),s(this,"_dimensionIndex",0),s(this,"_dimensions"),s(this,"_dimension"),s(this,"_left"),s(this,"_right"),s(this,"_space"),s(this,"_parent"),s(this,"_entities"),s(this,"layer"),s(this,"_splitEntityList",[]),s(this,"pointIntersect",new d),this.layer=r,At.nodeCount++}get dimension(){return this._dimension}initNode(r,e,t){return this._dimensions=e,this._dimensionIndex=t,this._dimension=e[t],this._space=new Xl().initSpace(e),r&&this._space.copySpace(r._space),this._parent=r,this._entities=new Yl,this}updateEntity(r){var e;r.isInNode(this,this._dimension)&&(r.attachTreeNode(this),this.autoSplit(),this._left)&&this._right&&(e=(this._dimensionIndex+1)%this._dimensions.length,e=this._dimensions[e],r.isInNode(this._right,e)?this._right.updateEntity(r):r.isInNode(this._left,e)&&this._left.updateEntity(r))}buildRoot(r){for(const e of r)e.entity.attachTreeNode(this);this.autoSplit()}autoSplit(){if(this._entities.count>tr.MaxEntityCountInLeaf&&!this._right&&!this._left&&this.layer<tr.MaxLayer){let t=this._splitEntityList,i=(this._dimensionIndex+1)%this._dimensions.length,a=this._dimensions[i],n=0;for(const o in this._entities.map){var r=this._entities.map[o];n+=r.centerValue(a),t.push(r)}n/=this._entities.count,this._left=new At(this.layer+1),this._right=new At(this.layer+1),this._left.initNode(this,this._dimensions,i),this._right.initNode(this,this._dimensions,i),this._left.setSpace(!0,n),this._right.setSpace(!1,n);for(var e of t)e.isInNode(this._right,a)?e.attachTreeNode(this._right):e.isInNode(this._left,a)&&e.attachTreeNode(this._left)}this._left&&this._left.autoSplit(),this._right&&this._right.autoSplit()}setSpace(r,e){return this._parent&&this._space.splitSpace(this._dimension,r,e),this}isEmpty(){return this._left==null&&this._right==null&&this._entities.count==0}pushEntity(r){return this._entities.push(r)}removeEntity(r){return this._entities.remove(r.uuid)}autoClear(){let r=this;for(;r&&r.layer>tr.ClearLeafLayer&&r.clearLeaf();)r=r._parent}clearLeaf(){var r=!this._left&&!this._right,e=!r&&this._left.isEmpty()&&this._right.isEmpty();return e&&(this._left=this._right=null,At.nodeCount-=2),r||e}isContain(r){return this._space.isContain(this._dimension,r)}nodeIntersectsBox(r){var e=this._space.getRange("x"),t=this._space.getRange("y"),i=this._space.getRange("z"),a=At.rangeBox;return a.min.set(e.min,t.min,i.min),a.max.set(e.max,t.max,i.max),a.intersectsBox(r)}nodeIntersectsRay(r){var e=this._space.getRange("x"),t=this._space.getRange("y"),i=this._space.getRange("z"),a=At.rangeBox;return a.min.set(e.min,t.min,i.min),a.max.set(e.max,t.max,i.max),!0}pointCast(r,e=0,t){if(t=t||[],0<this._entities.count){var i,a=this._entities.map;for(i in a){let n=a[i],o=n.entityContainPoint(r);(o=!o&&0<e?n.squareDistanceTo(r,this._dimensions)<=e:o)&&t.push(n)}}this._left&&this._left.isContain(r[this._left.dimension])&&this._left.pointCast(r,e,t),this._right&&this._right.isContain(r[this._right.dimension])&&this._right.pointCast(r,e,t)}boxCast(r,e){if(e=e||[],0<this._entities.count){var t,i=this._entities.map;for(t in i){var a=i[t];a.entityIntersectsBox(r)&&e.push(a)}}this._left&&this._left.nodeIntersectsBox(r)&&this._left.boxCast(r,e),this._right&&this._right.nodeIntersectsBox(r)&&this._right.boxCast(r,e)}rayCast(r,e,t){e=e||[],t=t||[];var i=this.pointIntersect;if(0<this._entities.count){var a,n=this._entities.map;for(a in n){var o=n[a];o.entityIntersectsRay(r,i)&&(t.push(new d().copyFrom(i)),e.push(o))}}this._left&&this._left.nodeIntersectsRay(r)&&this._left.rayCast(r,e,t),this._right&&this._right.nodeIntersectsRay(r)&&this._right.rayCast(r,e,t)}};let Ba=At;s(Ba,"nodeCount",0),s(Ba,"rangeBox",new we(new d(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),new d(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)));class Wl extends Pe{}s(Wl,"RESIZE","resize");var Kl=(r=>(r[r.MOUSE_LEFT=0]="MOUSE_LEFT",r[r.MOUSE_MID=1]="MOUSE_MID",r[r.MOUSE_RIGHT=2]="MOUSE_RIGHT",r))(Kl||{});class ka extends Pe{}s(ka,"LOADER_PROGRESS","loaderProgress"),s(ka,"LOADER_COMPLETE","loaderComplete");class Nr extends Pe{}s(Nr,"ADDED","added"),s(Nr,"REMOVED","removed"),s(Nr,"CHILD_ADD_EVENT","childAddEvent"),s(Nr,"CHILD_REMOVED","childRemoved");class Ti extends Pe{}s(Ti,"SHOW","show"),s(Ti,"HIDE","hide"),s(Ti,"UPDATE","update");class jl{constructor(e=2){s(this,"name"),s(this,"index",2),s(this,"gpuBindGroup"),this.index=e}bindTextureToPipeline(e,t){if(!this.gpuBindGroup){var i,a,n=[];for(let o=0;o<t.length;o++)t[o]&&((i=t[o])instanceof $a?n.push({binding:2*o+0,resource:i.gpuSampler},{binding:2*o+1,resource:i.getGPUView()}):i instanceof es?n.push({binding:2*o+0,resource:i.gpuSampler_comparison},{binding:2*o+1,resource:i.getGPUView()}):i instanceof ce&&(a=i.format.indexOf("depth")!=-1,n.push({binding:2*o+0,resource:a?i.gpuSampler_comparison:i.gpuSampler},{binding:2*o+1,resource:i.getGPUView()})));e=e.getBindGroupLayout(this.index),this.gpuBindGroup=M.device.createBindGroup({layout:e,entries:n})}}bindTextureToPipeline2(e,t){if(!this.gpuBindGroup){var i,a=[];for(let n=0;n<t.length;n++)t[n]&&(i=t[n],a.push({binding:n,resource:i.getGPUView()}));e=e.getBindGroupLayout(this.index),this.gpuBindGroup=M.device.createBindGroup({layout:e,entries:a})}}}s(jl,"pool",new Map);class zr{static createMipmap(e,a){var i=M.device,i=(this._pipelineMax||(this._pipelineMax=i.createComputePipeline({layout:"auto",compute:{module:i.createShaderModule({code:this.codeMax}),entryPoint:"main"}})),this._pipelineMin||(this._pipelineMin=i.createComputePipeline({layout:"auto",compute:{module:i.createShaderModule({code:this.codeMin}),entryPoint:"main"}})),Math.ceil(.5*e.width)),a={mipmapCount:a,texture:e,srcView:null,mipLevel:1,dstHeight:Math.ceil(.5*e.height),dstWidth:i};a.srcView=e.getGPUTexture().createView({format:e.format,dimension:"2d",baseMipLevel:0,mipLevelCount:1}),1024<e.width&&1024<e.height?this.mipmap(this._pipelineMax,a):this.mipmap(this._pipelineMin,a)}static mipmap(e,t){var i=M.device,a=w.beginCommandEncoder();let n=e==this._pipelineMax,o,h;for(let c=t.mipLevel;c<t.mipmapCount;c++){var u=[],l=0,l=(u.push({binding:l++,resource:t.srcView}),u.push({binding:+l,resource:t.texture.gpuSampler}),o=t.texture.getGPUTexture().createView({format:t.texture.format,dimension:"2d",baseMipLevel:c,mipLevelCount:1}),u.push({binding:2,resource:o}),i.createBindGroup({layout:e.getBindGroupLayout(0),entries:u})),u=a.beginComputePass();u.setPipeline(e),u.setBindGroup(0,l);let f=t.dstWidth,p=t.dstHeight;if(n&&(f=Math.max(1,Math.floor(t.dstWidth/8)),p=Math.max(1,Math.floor(t.dstHeight/8))),u.dispatchWorkgroups(f,p),t.dstHeight*=.5,t.dstWidth*=.5,t.srcView=o,t.mipLevel=c+1,h=n&&(t.dstWidth<8||t.dstHeight<8),u.end(),h)break}w.endCommandEncoder(a),h&&this.mipmap(this._pipelineMin,t)}}s(zr,"codeMax",`
        @group(0) @binding(0) var inputTexture : texture_2d<f32>;
        @group(0) @binding(1) var inputTextureSampler : sampler;
        @group(0) @binding(2) var outputTexture : texture_storage_2d<rgba8unorm, write>;
        
        @compute @workgroup_size(8, 8)
        fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
            let dstSize = textureDimensions(outputTexture).xy;
            let uv01 = vec2<f32>(f32(GlobalInvocationID.x) / f32(dstSize.x - 1), f32(GlobalInvocationID.y) / f32(dstSize.y - 1));
            var fromColor = textureSampleLevel(inputTexture, inputTextureSampler, uv01, 0.0);
            let dstCoord = vec2<i32>(i32(GlobalInvocationID.x), i32(GlobalInvocationID.y));
            
            //fromColor = vec4<f32>(0.0, 0.0, 0.0, 1.0);
            //if(dstSize.x == 512){
            //    fromColor.x = 1.0;
            //}else  if(dstSize.x == 256){
            //    fromColor.y = 1.0;
            //}else if(dstSize.x == 128){
            //    fromColor.z = 1.0;
            //}
            
            textureStore(outputTexture, dstCoord, fromColor);
        }
    `),s(zr,"codeMin",`
        @group(0) @binding(0) var inputTexture : texture_2d<f32>;
        @group(0) @binding(1) var inputTextureSampler : sampler;
        @group(0) @binding(2) var outputTexture : texture_storage_2d<rgba8unorm, write>;
        
        @compute @workgroup_size(1, 1)
        fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
            let dstSize = textureDimensions(outputTexture).xy;
            let uv01 = vec2<f32>(f32(GlobalInvocationID.x) / f32(dstSize.x - 1), f32(GlobalInvocationID.y) / f32(dstSize.y - 1));
            var fromColor = textureSampleLevel(inputTexture, inputTextureSampler, uv01, 0.0);
            let dstCoord = vec2<i32>(i32(GlobalInvocationID.x), i32(GlobalInvocationID.y));
            
            textureStore(outputTexture, dstCoord, fromColor);
        }
    `),s(zr,"_pipelineMax"),s(zr,"_pipelineMin");class ql{constructor(){s(this,"name",""),s(this,"passMap",new Map)}}class Zl{constructor(){s(this,"passType",""),s(this,"shaderState",new Map),s(this,"vertexShader",""),s(this,"fragmentShader","")}}class fr{static parser(e,t){e=We.filterComment(e);let i=new ql,a=e.indexOf(this.shaderKeyword),n=e.indexOf("{",a),o=e.substring(a+this.shaderKeyword.length,n).trim();var h;i.name=o.substring(1,o.length-1),o=e.substring(e.indexOf("{")+1,e.lastIndexOf("}"));for(h of this.splitPassBlock(o)){let l=this.parserPassBlock(h),u;i.passMap.has(l.passType)?u=i.passMap.get(l.passType):(u=[],i.passMap.set(l.passType,u)),u.push(l),0<l.vertexShader.length&&(l.vertexShader=We.parse(l.vertexShader,t)),0<l.fragmentShader.length&&(l.fragmentShader=We.parse(l.fragmentShader,t))}return i}static splitPassBlock(e){let t=0,i=[];for(;t<e.length;){var a=e.indexOf(this.passKeyword,t);if(a==-1){i.push(e.substring(t));break}t!=0&&i.push(e.substring(t,a)),t=a+this.passKeyword.length}return i}static parserPassBlock(e){var t=new Zl,a=e.indexOf(this.passTypeKeyword),i=e.indexOf('"',a),a=e.indexOf('"',i+1);return t.passType=e.substring(a+1,i).trim(),this.parserShaderState(t,e),(a=e.indexOf(this.vertexKeyword))!=-1&&(t.vertexShader=this.extractBlock(e.substring(a+this.vertexKeyword.length),"{","}")),(a=e.indexOf(this.fragmentKeyword))!=-1&&(t.fragmentShader=this.extractBlock(e.substring(a+this.fragmentKeyword.length),"{","}")),t}static parserShaderState(e,t){if((a=t.indexOf("ShaderState"))==-1)return!1;var i,a=t.indexOf("{",a),n=t.indexOf("}",a);for(i of t.substring(a+1,n).split(",")){var h=i.split(":"),o=h[0].trim(),h=this.convertValue(h[1].trim());e.shaderState.set(o,h)}return!0}static convertValue(e){return e.length==4&&e.toLowerCase()=="true"||(e.length!=5||e.toLowerCase()!="false")&&(e[0]=='"'?e.substring(1,e.length-1):Number.parseInt(e))}static extractBlock(e,t,i){var a,n=e.indexOf(t);if(n==-1)return"";let o=0,h=0;for(a of e=e.substring(n)){if(a==t?o++:a==i&&o--,o<=0)break;h++}return e.substring(1,h).trim()}}s(fr,"passKeyword","pass"),s(fr,"shaderKeyword","Shader"),s(fr,"vertexKeyword","vertex"),s(fr,"fragmentKeyword","fragment"),s(fr,"passTypeKeyword","PassType");let Ql=new Pe("IrradianceDataReaderCompleteEvent");class li extends zt{constructor(){super(...arguments),s(this,"readFlag",!1),s(this,"probeRenderer"),s(this,"opColorBuffer"),s(this,"opDepthBuffer"),s(this,"srcColorMap"),s(this,"srcDepthMap"),s(this,"opDepthArray"),s(this,"opColorArray")}initReader(e,t,i){this.probeRenderer=e,this.srcColorMap=t,this.srcDepthMap=i,e=b.setting.gi,t=e.octRTMaxSize*e.octRTMaxSize,this.opColorBuffer=M.device.createBuffer({size:4*t*4,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ,mappedAtCreation:!1}),this.opColorArray=new Float32Array(4*t),this.opDepthBuffer=M.device.createBuffer({size:4*t*4,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ,mappedAtCreation:!1}),this.opDepthArray=new Float32Array(4*t),this.probeRenderer.addEventListener(ts.type,()=>{this.onProbeRenderComplete()},this),this.probeRenderer.addEventListener(Ii.type,()=>{console.log("GIRenderStartEvent")},this)}async onProbeRenderComplete(){var e;console.log("GIRenderCompleteEvent"),this.readFlag?console.log("irradianceDataReader is reading yet!!!"):(this.readFlag=!0,e=Date.now(),console.log("irradianceDataReader start reading "),await li.read(this.srcColorMap.getGPUTexture(),this.opColorBuffer,this.opColorArray),await li.read(this.srcDepthMap.getGPUTexture(),this.opDepthBuffer,this.opDepthArray),this.readFlag=!1,console.log("process time :",Date.now()-e),console.log("irradianceDataReader read complete"),this.dispatchEvent(Ql))}static async read(n,t,i){var a=w.beginCommandEncoder(),n=(a.copyTextureToBuffer({texture:n},{buffer:t,bytesPerRow:16*n.width},[n.width,n.height]),w.endCommandEncoder(a),await t.mapAsync(GPUMapMode.READ),t.getMappedRange());i.set(new Float32Array(n),0),t.unmap()}}new li;class Jl{constructor(){s(this,"indexList"),s(this,"color"),s(this,"count")}}class $l{constructor(){s(this,"SlotCount",8),s(this,"MaxEntities",16),s(this,"defaultColor",new x(.2,1,1,1)),s(this,"slots",[]),s(this,"dataDirty",!0);var e=b.setting.render.postProcessing.outline.groupCount;this.SlotCount=Math.max(1,Math.min(e,this.SlotCount));for(let i=0;i<this.SlotCount;i++){var t=this.slots[i]=new Jl;t.indexList=new Float32Array(this.MaxEntities),t.color=this.defaultColor.clone(),t.count=0}}clear(){for(let e=0;e<this.SlotCount;e++)this.clearAt(e)}clearAt(e){return this.dataDirty=!0,e=this.slots[e],e.color.copyFrom(this.defaultColor),e.indexList.fill(-1),e.count=0,this}fillDataAt(e,t,i){this.dataDirty=!0;var a=this.slots[e];if(a){a.indexList.fill(-1);for(let n=0,o=t.length;n<o;n++)a.indexList[n]=t[n];a.count=t.length,a.color.copyFrom(i)}return this}fetchData(e){return e.dirty=this.dataDirty,e.slots=this.slots,this.dataDirty=!1,this}}let Fr=new $l;class eu{constructor(){s(this,"_tempIndexArray",[]),s(this,"_rendererList",[])}setOutline(e,t){this.setOutlineList([e],t?[t]:null)}setOutlineList(e,t){e=e||[];var i=Fr.defaultColor,a=Fr.SlotCount;for(let h=0;h<a;h++){this._tempIndexArray.length=0;var n=e[h],o=(t?t[h]:null)||i;if(n)for(const l of n)this.getEntityIdList(l,this._tempIndexArray);Fr.fillDataAt(h,this._tempIndexArray,o)}}clearOutline(){return Fr.clear(),this}getEntityIdList(e,t){this._rendererList.length=0;for(const i of e.getComponents(ye,this._rendererList))t.push(i.object3D.transform._worldMatrix.index)}}new eu;class tu{constructor(){s(this,"localPosition",new d),s(this,"worldPosition",new d),s(this,"uv",new Q),s(this,"faceIndex"),s(this,"isIn",!1),s(this,"t",0),s(this,"u",0),s(this,"v",0),s(this,"triangle"),s(this,"v0"),s(this,"v1"),s(this,"v2"),s(this,"pickList"),s(this,"color")}}const wr=class{static distPtTri(r,e,o,f){var a=new d,n=new d,l=new d,f=(f.subtract(e,a),o.subtract(e,n),r.subtract(e,l),He(a,a)),o=He(a,n),h=He(a,l),c=He(n,n),l=He(n,l),u=1/(f*c-o*o),c=(c*h-o*l)*u,f=(f*l-o*h)*u;return c>=-wr.EPS&&f>=-wr.EPS&&c+f<=1+wr.EPS?(l=e[1]+a[1]*c+n[1]*f,Math.abs(l-r[1])):wr.FLT_MAX}static IntersectTriangle(r,e,t){let i=e.v1,a=e.v2,n=e.v3,o=a.subtract(i,d.HELP_3),h=n.subtract(i,d.HELP_4),l=r.direction.cross(h,d.HELP_5),u=He(o,l),c;if(0<u){if(t)return null;c=r.origin.subtract(i,d.HELP_2)}else c=i.subtract(r.origin,d.HELP_2),u=-u;var f,p,m;return u<1e-4?(this._info.isIn=!1,this._info.t=0,this._info.u=0,this._info.v=0):(t=He(c,l))<0||t>u||(p=c.cross(o,d.HELP_1),(f=He(r.direction,p))<0)||t+f>u?(this._info.isIn=!1,this._info.t=0,this._info.u=0,this._info.v=0):(p=He(h,p),p*=m=1/u,t*=m,f*=m,this._info.isIn=!0,this._info.t=p,m=1-(this._info.u=t)-(this._info.v=f),this._u0.copyFrom(e.u1),this._u0.scale(m),this._u1.copyFrom(e.u2),this._u1.scale(t),this._u2.copyFrom(e.u3),this._u2.scale(f),this._info.uv.copyFrom(this._u0),this._info.uv.add(this._u1,this._info.uv),this._info.uv.add(this._u2,this._info.uv),this._info.localPosition.copyFrom(r.direction).multiplyScalar(p),this._info.localPosition.add(r.origin,this._info.localPosition)),this._info}};let Vt=wr;s(Vt,"EPS",1e-4),s(Vt,"FLT_MAX",3402823466e29),s(Vt,"_info",new tu),s(Vt,"_u0",new Q),s(Vt,"_u1",new Q),s(Vt,"_u2",new Q);const Fi=class extends zt{constructor(){if(super(),s(this,"_maxRetry",3),Fi._instance)throw new Error("LoadManager is singleton class...")}loadAll(r,e){return new Promise((t,i)=>{let a=r.length,n=[];r.forEach((o,h)=>{let l=new e;this.load(o,e).then(u=>{l.parse(u),n.push(l),--a===0&&t(n)})})})}static getInstance(){return this._instance||(this._instance=new Fi)}loadUrls(r,e){return new Promise((t,i)=>{let a=r.length,n=[];r.forEach((o,h)=>{this.load(o,e).then(l=>{n.push(l),--a===0&&t(n),a<0&&console.error(`loadUrls ${r} error`)})})})}get maxRetry(){return this._maxRetry}set maxRetry(r){this._maxRetry=r}load(r,e){return new Promise((t,i)=>{e.format})}};let ru=Fi;s(ru,"_instance");class iu extends Ji{constructor(){super(),D.register("ColorLitShader",Ts.Ori_AllShader);var e=this.setShader("ColorLitShader","ColorLitShader"),t=(e.setDefine("USE_BRDF",!0),e.setShaderEntry("VertMain","FragMain"),e.setUniformColor("baseColor",new x),e.setUniformColor("emissiveColor",new x),e.setUniformFloat("envIntensity",1),e.setUniformFloat("normalScale",1),e.setUniformFloat("roughness",0),e.setUniformFloat("metallic",0),e.setUniformFloat("ao",1),e.setUniformFloat("alphaCutoff",0),e.shaderState);t.acceptShadow=!0,t.receiveEnv=!0,t.acceptGI=!0,t.useLight=!0,e.setTexture("normalMap",b.res.normalTexture),e.setTexture("emissiveMap",b.res.blackTexture)}clone(){return null}debug(){}}s(iu,"count",0);class au{static calculateCubicBezierPoint(e,t,i,a,n){let o=1-(e=(e=1<e?1:e)<0?0:e),h=o*o,l=o*o*o,u=e*e,c=e*e*e,f=t.mul(l),p=i.mul(3),m=(p=(p=p.mul(e)).mul(h),a.mul(3));return m=(m=m.mul(u)).mul(o),t=n.mul(c),f=(f=(f=f.add(p)).add(m)).add(t)}static bezierPoint(e,t,i,a){let n=1-(e=(e=1<e?1:e)<0?0:e),o=n*n,h=e*e,l=t.mul(o),u=i.mul(2);return u.scaleBy(n),u.scaleBy(e),t=a.mul(h),l=(l=l.add(u)).add(t)}static calculateCubicBezierPoints(e,t,i){let a=1-(e=(e=1<e?1:e)<0?0:e),n=a*a,o=a*a*a,h=e*e,l=e*e*e,u=t[i].mul(o),c=t[i+1].mul(3),f=(c=(c=c.mul(e)).mul(n),t[i+2].mul(3));return f=(f=f.mul(h)).mul(a),e=t[i+3].mul(l),u=(u=(u=u.add(c)).add(f)).add(e)}static bezierPathValue(e,t){(e=1<e?1:e)<0&&(e=0);var i,a=t.length,n=this.tmp_points;n.length=0;for(let o=1;o<a;++o)for(let h=0;h<a-o;++h)o==1?((i=new d).x=t[h].x*(1-e)+t[h+1].x*e,i.y=t[h].y*(1-e)+t[h+1].y*e,i.z=t[h].z*(1-e)+t[h+1].z*e,this.tmp_points.push(i)):((i=new d).x=n[h].x*(1-e)+n[h+1].x*e,i.y=n[h].y*(1-e)+n[h+1].y*e,i.z=n[h].z*(1-e)+n[h+1].z*e,n.push(i));return n[0]}}s(au,"tmp_points",[]);var su=(r=>(r[r.Open=0]="Open",r[r.Closed=1]="Closed",r))(su||{}),nu=(r=>(r[r.kParticleSystemClampVelocityCurveId=322376503]="kParticleSystemClampVelocityCurveId",r[r.kParticleSystemForceCurveId=306581307]="kParticleSystemForceCurveId",r[r.kParticleSystemRotationCurveId=1793934638]="kParticleSystemRotationCurveId",r[r.kParticleSystemRotationBySpeedCurveId=3737431713]="kParticleSystemRotationBySpeedCurveId",r[r.kParticleSystemStartSpeedCurveId=2527743459]="kParticleSystemStartSpeedCurveId",r[r.kParticleSystemSizeCurveId=2368504881]="kParticleSystemSizeCurveId",r[r.kParticleSystemSizeBySpeedCurveId=4085612399]="kParticleSystemSizeBySpeedCurveId",r[r.kParticleSystemVelocityCurveId=3774601268]="kParticleSystemVelocityCurveId",r[r.kParticleSystemUVCurveId=326370691]="kParticleSystemUVCurveId",r[r.kParticleSystemColorGradientId=1494990940]="kParticleSystemColorGradientId",r[r.kParticleSystemColorByVelocityGradientId=1089181156]="kParticleSystemColorByVelocityGradientId",r[r.kParticleSystemMeshSelectionId=3159510623]="kParticleSystemMeshSelectionId",r[r.kParticleSystemUVRowSelectionId=2941263940]="kParticleSystemUVRowSelectionId",r))(nu||{});function ou(a,o,n){var i=.3333333333333333,a=a*i,h=a*a,n=h*a-a*o*.5+.5*n,o=o*i-h,h=o*o*o,l=h+n*n;return 0<=l?-a-o/(l=0<(l=Math.sqrt(l)-n)?Math.pow(l,i):-Math.pow(-l,i))+l:(l=Math.sqrt(-h),h=Math.acos(-n/l),l=Math.pow(l,i),-a+(l-=o/l)*Math.cos(h*i))}function Na(r,e,t,i){return Math.abs(r)<1e-5?1e-5<Math.abs(e)?(i.r0=-t/e,1):0:(t=e*e-4*r*t)<0?0:(r=.5/r,t=Math.sqrt(t),i.r0=(t-e)*r,i.r1=(-t-e)*r,2)}function hu(r,e,t,i,a){let n=0;var o,h;return 1e-4<=Math.abs(e)?(r[0]=ou(t/e,i/e,a/e),n++,o=t+e*r[0],h=i+t*r[0]+e*r[0]*r[0],n+=Na(e,o,h,{r0:r[1],r1:r[2]})):n+=Na(t,i,a,{r0:r[1],r1:r[2]}),n}class It{constructor(){s(this,"coeff",[])}static EvalSegment(e,t){return e*(e*(e*t[0]+t[1])+t[2])+t[3]}}const Wt=class{constructor(){s(this,"segments",[]),s(this,"integrationCache",[]),s(this,"doubleIntegrationCache",[]),s(this,"times",[]),s(this,"segmentCount"),this.segments[Wt.kMaxNumSegments]=new It,this.integrationCache[Wt.kMaxNumSegments]=0,this.doubleIntegrationCache[Wt.kMaxNumSegments]=0,this.times[Wt.kMaxNumSegments]=0}calculateMinMax(r,e){r.x=Math.min(r.x,e),r.y=Math.max(r.y,e)}findMinMaxDoubleIntegrated(){let r=Q.ZERO.clone(),e=.05;for(let t=0;t<20;t++)this.calculateMinMax(r,this.evaluateDoubleIntegrated(e)),e+=.05;return r}findMinMaxIntegrated(){var r=Q.ZERO.clone(),e=[],t=[];for(let o=0;o<this.segmentCount;o++){var i=[],a=hu(i,4*this.segments[o].coeff[0],3*this.segments[o].coeff[1],2*this.segments[o].coeff[2],+this.segments[o].coeff[3]);for(let h=0;h<a;h++){var n=i[h]+e[o];n>=e[o]&&n<t[o]&&this.calculateMinMax(r,this.evaluateIntegrated(n))}this.calculateMinMax(r,this.evaluateIntegrated(t[o])),this.times[o]}return r}generateIntegrationCache(r){r.integrationCache[0]=0;let e=r.times[0],t=0;for(let n=1;n<r.segmentCount;n++){var i=r.segments[n-1].coeff,a=(za(i),e-t);r.integrationCache[n]=r.integrationCache[n-1]+It.EvalSegment(a,i)*a,t=e,e=r.times[n]}}generateDoubleIntegrationCache(r){let e=0,t=0;for(let a=0;a<r.segmentCount;a++){r.doubleIntegrationCache[a]=e;var i=r.times[a]-t,i=Math.max(i,0);e+=It.EvalSegment(i,r.segments[a].coeff)*i*i+r.integrationCache[a]*i,t=r.times[a]}}integrate(){this.generateIntegrationCache(this);for(let r=0;r<this.segmentCount;r++)za(this.segments[r].coeff)}doubleIntegrate(){this.generateIntegrationCache(this);for(let r=0;r<this.segmentCount;r++)uu(this.segments[r].coeff);this.generateDoubleIntegrationCache(this)}static isValidCurve(r){let e=r.getKeyCount(),t=e-1;return r.getKey(0).time!=0&&t++,r.getKey(e-1).time!=1&&t++,t<=Wt.kMaxNumSegments}evaluateDoubleIntegrated(r){let e=0;for(let i=0;i<this.segmentCount;i++){var t;if(r<=this.times[i])return t=r-e,this.doubleIntegrationCache[i]+this.integrationCache[i]*t+It.EvalSegment(t,this.segments[i].coeff)*t*t;e=this.times[i]}return 1}evaluateIntegrated(r){let e=0;for(let i=0;i<this.segmentCount;i++){var t;if(r<=this.times[i])return t=r-e,this.integrationCache[i]+It.EvalSegment(t,this.segments[i].coeff)*t;e=this.times[i]}return 1}evaluate(r){let e=0;for(let t=0;t<this.segmentCount;t++){if(r<=this.times[t])return It.EvalSegment(r-e,this.segments[t].coeff);e=this.times[t]}return 1}buildCurve(r,e){var t=r.getKeyCount();if(this.segmentCount=1,this.segments.length=0,this.integrationCache.length=0,this.doubleIntegrationCache.length=0,this.times.length=0,this.times[0]=1.01,t!=0)if(t==1)this.segments[0]=new It,this.segments[0].coeff[3]=r.getKey(0).value*e;else{this.segmentCount=t-1;let i=0;r.getKey(0).time!=0&&(this.segments[0].coeff[3]=r.getKey(0).value,this.times[0]=r.getKey(0).time,i=1);for(let a=0;a<this.segmentCount;a++)r.calculateCacheData(void 0,a,a+1,0),this.segments[a+i].coeff=(void 0).coeff.concat(),this.times[a+i]=r.getKey(a+1).time;this.segmentCount+=i,r.getKey(t-1).time!=1&&(this.segments[this.segmentCount].coeff[3]=r.getKey(t-1).value,this.segmentCount++),this.times[this.segmentCount-1]=1.01;for(let a=0;a<this.segmentCount;a++)this.segments[a].coeff[0]*=e,this.segments[a].coeff[1]*=e,this.segments[a].coeff[2]*=e,this.segments[a].coeff[3]*=e}return!0}};let lu=Wt;function uu(r){r[0]/=20,r[1]/=12,r[2]/=6,r[3]/=2}function za(r){r[0]/=4,r[1]/=3,r[2]/=2,r[3]/=1}s(lu,"kMaxNumSegments",8);var cu=(r=>(r[r.kEMScalar=0]="kEMScalar",r[r.kEMOptimized=1]="kEMOptimized",r[r.kEMOptimizedMinMax=2]="kEMOptimizedMinMax",r[r.kEMSlow=3]="kEMSlow",r))(cu||{}),du=(r=>(r[r.kMMCScalar=0]="kMMCScalar",r[r.kMMCCurve=1]="kMMCCurve",r[r.kMMCTwoCurves=2]="kMMCTwoCurves",r[r.kMMCTwoConstants=3]="kMMCTwoConstants",r))(du||{});const Os=class extends Q{constructor(r=0,e=0){super(r,e),s(this,"u",0),s(this,"v",0),this.u=r,this.v=e}length(){return 0}};let fu=Os;s(fu,"uv_0",new Os);class Ci{static initHeap(){this.boxGeo||(this.boxGeo=new yi),this.sphere||(this.sphere=new Ni(1,35,35)),this.material||(this.material=new Jt)}static get CubeMesh(){return this.initHeap(),this.boxGeo}static get SphereMesh(){return this.initHeap(),this.sphere}static GetCube(){this.initHeap();var e=new K,t=e.addComponent(ye);return t.geometry=this.boxGeo,t.material=this.material.clone(),t.castShadow=!0,e}static GetSingleCube(e,t,i,l,u,o){this.initHeap();var h=new Jt,l=(h.baseColor=new x(l,u,o,1),new K),u=l.addComponent(ye);return u.castGI=!0,u.geometry=new yi(e,t,i),u.material=h,l}static GetSingleSphere(e,o,h,a){this.initHeap();var n=new Jt,o=(n.baseColor=new x(o,h,a,1),new K),h=o.addComponent(ye);return h.castGI=!0,h.geometry=new Ni(e,20,20),h.material=n,o}static get Sphere(){this.initHeap();var e=new K,t=e.addComponent(ye);return t.geometry=this.sphere,t.material=this.material,e}static GetSingleCube2(e,t=10){this.initHeap();var i=new K,a=i.addComponent(ye);return a.castShadow=!1,a.geometry=new yi(t,t,t),a.material=e,i}}s(Ci,"boxGeo"),s(Ci,"sphere"),s(Ci,"material");await b.init();let Ir=new Ul,pu=Ir.addComponent(dl);pu.sunY=.6;let la=new K,As=la.addComponent(Vi);As.perspective(90,b.aspect,1,5e3);let mu=la.addComponent(gl);mu.setCamera(0,0,100);Ir.addChild(la);let _i=new K,Us=_i.addComponent(ns);_i.rotationX=45;_i.rotationY=30;Us.lightColor=new x(1,1,1,1);Us.intensity=1;Ir.addChild(_i);let gu=await b.res.loadGltf("content.glb");Ir.addChild(gu);let ua=new Gl;ua.scene=Ir;ua.camera=As;b.startRenderView(ua);

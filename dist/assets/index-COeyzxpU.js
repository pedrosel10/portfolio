(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,j=1033,M=33776,N=33777,P=33778,F=33779,I=35840,ee=35841,te=35842,ne=35843,re=36196,L=37492,ie=37496,ae=37488,oe=37489,se=37490,ce=37491,le=37808,ue=37809,de=37810,fe=37811,pe=37812,me=37813,he=37814,ge=37815,_e=37816,ve=37817,ye=37818,be=37819,xe=37820,Se=37821,Ce=36492,we=36494,Te=36495,Ee=36283,De=36284,R=36285,Oe=36286,ke=2300,Ae=2301,z=2302,je=2303,Me=2400,Ne=2401,Pe=2402,Fe=3200,Ie=`srgb`,Le=`srgb-linear`,Re=`linear`,ze=`srgb`,Be=7680,Ve=35044,He=2e3;function Ue(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function We(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ge(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Ke(){let e=Ge(`canvas`);return e.style.display=`block`,e}var qe={},Je=null;function Ye(...e){let t=`THREE.`+e.shift();Je?Je(`log`,t,...e):console.log(t,...e)}function Xe(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function B(...e){e=Xe(e);let t=`THREE.`+e.shift();if(Je)Je(`warn`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function V(...e){e=Xe(e);let t=`THREE.`+e.shift();if(Je)Je(`error`,t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ze(...e){let t=e.join(` `);t in qe||(qe[t]=!0,B(...e))}function Qe(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var $e={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},et=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},tt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),nt=Math.PI/180,rt=180/Math.PI;function it(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(tt[e&255]+tt[e>>8&255]+tt[e>>16&255]+tt[e>>24&255]+`-`+tt[t&255]+tt[t>>8&255]+`-`+tt[t>>16&15|64]+tt[t>>24&255]+`-`+tt[n&63|128]+tt[n>>8&255]+`-`+tt[n>>16&255]+tt[n>>24&255]+tt[r&255]+tt[r>>8&255]+tt[r>>16&255]+tt[r>>24&255]).toLowerCase()}function at(e,t,n){return Math.max(t,Math.min(n,e))}function ot(e,t){return(e%t+t)%t}function st(e,t,n){return(1-n)*e+n*t}function ct(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function lt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var H=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ut=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:B(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ft.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ft.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dt.copy(this).projectOnVector(e),this.sub(dt)}reflect(e){return this.sub(dt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dt=new U,ft=new ut,pt=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(mt.makeScale(e,t)),this}rotate(e){return this.premultiply(mt.makeRotation(-e)),this}translate(e,t){return this.premultiply(mt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},mt=new pt,ht=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gt=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _t(){let e={enabled:!0,workingColorSpace:Le,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=yt(e.r),e.g=yt(e.g),e.b=yt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=bt(e.r),e.g=bt(e.g),e.b=bt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Re:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Ze(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Ze(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Le]:{primaries:t,whitePoint:r,transfer:Re,toXYZ:ht,fromXYZ:gt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:r,transfer:ze,toXYZ:ht,fromXYZ:gt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),e}var vt=_t();function yt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function bt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var xt,St=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xt===void 0&&(xt=Ge(`canvas`)),xt.width=e.width,xt.height=e.height;let t=xt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=xt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ge(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=yt(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(yt(t[e]/255)*255):t[e]=yt(t[e]);return{data:t,width:e.width,height:e.height}}else return B(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Ct=0,wt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ct++}),this.uuid=it(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Tt(r[t].image)):e.push(Tt(r[t]))}else e=Tt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Tt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?St.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(B(`Texture: Unable to serialize Texture.`),{})}var Et=0,Dt=new U,Ot=class r extends et{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Et++}),this.uuid=it(),this.name=``,this.source=new wt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new H(0,0),this.repeat=new H(1,1),this.center=new H(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Dt).x}get height(){return this.source.getSize(Dt).y}get depth(){return this.source.getSize(Dt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){B(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){B(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x);break}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y);break}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ot.DEFAULT_IMAGE=null,Ot.DEFAULT_MAPPING=300,Ot.DEFAULT_ANISOTROPY=1;var kt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},At=class extends et{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t),this.textures=[];let r=new Ot({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new wt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:`dispose`})}},jt=class extends At{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Mt=class extends Ot{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Nt=class extends Ot{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Pt=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Ft.setFromMatrixColumn(e,0).length(),i=1/Ft.setFromMatrixColumn(e,1).length(),a=1/Ft.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lt,e,Rt)}lookAt(e,t,n){let r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),zt.crossVectors(n,Vt),zt.lengthSq()===0&&(Math.abs(n.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),zt.crossVectors(n,Vt)),zt.normalize(),Bt.crossVectors(Vt,zt),r[0]=zt.x,r[4]=Bt.x,r[8]=Vt.x,r[1]=zt.y,r[5]=Bt.y,r[9]=Vt.y,r[2]=zt.z,r[6]=Bt.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinant();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Ft.set(r[0],r[1],r[2]).length(),o=Ft.set(r[4],r[5],r[6]).length(),s=Ft.set(r[8],r[9],r[10]).length();i<0&&(a=-a),It.copy(this);let c=1/a,l=1/o,u=1/s;return It.elements[0]*=c,It.elements[1]*=c,It.elements[2]*=c,It.elements[4]*=l,It.elements[5]*=l,It.elements[6]*=l,It.elements[8]*=u,It.elements[9]*=u,It.elements[10]*=u,t.setFromRotationMatrix(It),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=He,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=He,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ft=new U,It=new Pt,Lt=new U(0,0,0),Rt=new U(1,1,1),zt=new U,Bt=new U,Vt=new U,Ht=new Pt,Ut=new ut,Wt=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-at(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(at(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:B(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ht.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ht,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ut.setFromEuler(this),this.setFromQuaternion(Ut,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wt.DEFAULT_ORDER=`XYZ`;var Gt=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},Kt=0,qt=new U,Jt=new ut,Yt=new Pt,Xt=new U,Zt=new U,Qt=new U,$t=new ut,en=new U(1,0,0),tn=new U(0,1,0),nn=new U(0,0,1),rn={type:`added`},an={type:`removed`},on={type:`childadded`,child:null},sn={type:`childremoved`,child:null},cn=class e extends et{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kt++}),this.uuid=it(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new U,n=new Wt,r=new ut,i=new U(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pt},normalMatrix:{value:new pt}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jt.setFromAxisAngle(e,t),this.quaternion.multiply(Jt),this}rotateOnWorldAxis(e,t){return Jt.setFromAxisAngle(e,t),this.quaternion.premultiply(Jt),this}rotateX(e){return this.rotateOnAxis(en,e)}rotateY(e){return this.rotateOnAxis(tn,e)}rotateZ(e){return this.rotateOnAxis(nn,e)}translateOnAxis(e,t){return qt.copy(e).applyQuaternion(this.quaternion),this.position.add(qt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(en,e)}translateY(e){return this.translateOnAxis(tn,e)}translateZ(e){return this.translateOnAxis(nn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xt.copy(e):Xt.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Zt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yt.lookAt(Zt,Xt,this.up):Yt.lookAt(Xt,Zt,this.up),this.quaternion.setFromRotationMatrix(Yt),r&&(Yt.extractRotation(r.matrixWorld),Jt.setFromRotationMatrix(Yt),this.quaternion.premultiply(Jt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(V(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rn),on.child=e,this.dispatchEvent(on),on.child=null):V(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(an),sn.child=e,this.dispatchEvent(sn),sn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rn),on.child=e,this.dispatchEvent(on),on.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zt,e,Qt),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zt,$t,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};cn.DEFAULT_UP=new U(0,1,0),cn.DEFAULT_MATRIX_AUTO_UPDATE=!0,cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ln=class extends cn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},un={type:`move`},dn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(un)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ln;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},fn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pn={h:0,s:0,l:0},mn={h:0,s:0,l:0};function hn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var gn=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ie){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=vt.workingColorSpace){if(e=ot(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=hn(i,r,e+1/3),this.g=hn(i,r,e),this.b=hn(i,r,e-1/3)}return vt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ie){function n(t){t!==void 0&&parseFloat(t)<1&&B(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:B(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);B(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ie){let n=fn[e.toLowerCase()];return n===void 0?B(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yt(e.r),this.g=yt(e.g),this.b=yt(e.b),this}copyLinearToSRGB(e){return this.r=bt(e.r),this.g=bt(e.g),this.b=bt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ie){return vt.workingToColorSpace(_n.copy(this),e),Math.round(at(_n.r*255,0,255))*65536+Math.round(at(_n.g*255,0,255))*256+Math.round(at(_n.b*255,0,255))}getHexString(e=Ie){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(_n.copy(this),t);let n=_n.r,r=_n.g,i=_n.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Ie){vt.workingToColorSpace(_n.copy(this),e);let t=_n.r,n=_n.g,r=_n.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(pn),this.setHSL(pn.h+e,pn.s+t,pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pn),e.getHSL(mn);let n=st(pn.h,mn.h,t),r=st(pn.s,mn.s,t),i=st(pn.l,mn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new gn;gn.NAMES=fn;var vn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new gn(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},yn=class extends cn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wt,this.environmentIntensity=1,this.environmentRotation=new Wt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},bn=new U,xn=new U,Sn=new U,Cn=new U,wn=new U,Tn=new U,En=new U,Dn=new U,On=new U,kn=new U,An=new kt,jn=new kt,Mn=new kt,Nn=class e{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),bn.subVectors(e,t),r.cross(bn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){bn.subVectors(r,t),xn.subVectors(n,t),Sn.subVectors(e,t);let a=bn.dot(bn),o=bn.dot(xn),s=bn.dot(Sn),c=xn.dot(xn),l=xn.dot(Sn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Cn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Cn.x),s.addScaledVector(a,Cn.y),s.addScaledVector(o,Cn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return An.setScalar(0),jn.setScalar(0),Mn.setScalar(0),An.fromBufferAttribute(e,t),jn.fromBufferAttribute(e,n),Mn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(An,i.x),a.addScaledVector(jn,i.y),a.addScaledVector(Mn,i.z),a}static isFrontFacing(e,t,n,r){return bn.subVectors(n,t),xn.subVectors(e,t),bn.cross(xn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),bn.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;wn.subVectors(r,n),Tn.subVectors(i,n),Dn.subVectors(e,n);let s=wn.dot(Dn),c=Tn.dot(Dn);if(s<=0&&c<=0)return t.copy(n);On.subVectors(e,r);let l=wn.dot(On),u=Tn.dot(On);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(wn,a);kn.subVectors(e,i);let f=wn.dot(kn),p=Tn.dot(kn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Tn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return En.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(En,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(wn,a).addScaledVector(Tn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pn=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,In):In.fromBufferAttribute(r,t),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Ln.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Ln.copy(e.boundingBox)),Ln.applyMatrix4(e.matrixWorld),this.union(Ln)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wn),Gn.subVectors(this.max,Wn),Rn.subVectors(e.a,Wn),zn.subVectors(e.b,Wn),Bn.subVectors(e.c,Wn),Vn.subVectors(zn,Rn),Hn.subVectors(Bn,zn),Un.subVectors(Rn,Bn);let t=[0,-Vn.z,Vn.y,0,-Hn.z,Hn.y,0,-Un.z,Un.y,Vn.z,0,-Vn.x,Hn.z,0,-Hn.x,Un.z,0,-Un.x,-Vn.y,Vn.x,0,-Hn.y,Hn.x,0,-Un.y,Un.x,0];return!Jn(t,Rn,zn,Bn,Gn)||(t=[1,0,0,0,1,0,0,0,1],!Jn(t,Rn,zn,Bn,Gn))?!1:(Kn.crossVectors(Vn,Hn),t=[Kn.x,Kn.y,Kn.z],Jn(t,Rn,zn,Bn,Gn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Fn=[new U,new U,new U,new U,new U,new U,new U,new U],In=new U,Ln=new Pn,Rn=new U,zn=new U,Bn=new U,Vn=new U,Hn=new U,Un=new U,Wn=new U,Gn=new U,Kn=new U,qn=new U;function Jn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){qn.fromArray(e,a);let o=i.x*Math.abs(qn.x)+i.y*Math.abs(qn.y)+i.z*Math.abs(qn.z),s=t.dot(qn),c=n.dot(qn),l=r.dot(qn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Yn=Xn();function Xn(){let e=new ArrayBuffer(4),t=new Float32Array(e),n=new Uint32Array(e),r=new Uint32Array(512),i=new Uint32Array(512);for(let e=0;e<256;++e){let t=e-127;t<-27?(r[e]=0,r[e|256]=32768,i[e]=24,i[e|256]=24):t<-14?(r[e]=1024>>-t-14,r[e|256]=1024>>-t-14|32768,i[e]=-t-1,i[e|256]=-t-1):t<=15?(r[e]=t+15<<10,r[e|256]=t+15<<10|32768,i[e]=13,i[e|256]=13):t<128?(r[e]=31744,r[e|256]=64512,i[e]=24,i[e|256]=24):(r[e]=31744,r[e|256]=64512,i[e]=13,i[e|256]=13)}let a=new Uint32Array(2048),o=new Uint32Array(64),s=new Uint32Array(64);for(let e=1;e<1024;++e){let t=e<<13,n=0;for(;!(t&8388608);)t<<=1,n-=8388608;t&=-8388609,n+=947912704,a[e]=t|n}for(let e=1024;e<2048;++e)a[e]=939524096+(e-1024<<13);for(let e=1;e<31;++e)o[e]=e<<23;o[31]=1199570944,o[32]=2147483648;for(let e=33;e<63;++e)o[e]=2147483648+(e-32<<23);o[63]=3347054592;for(let e=1;e<64;++e)e!==32&&(s[e]=1024);return{floatView:t,uint32View:n,baseTable:r,shiftTable:i,mantissaTable:a,exponentTable:o,offsetTable:s}}function Zn(e){Math.abs(e)>65504&&B(`DataUtils.toHalfFloat(): Value out of range.`),e=at(e,-65504,65504),Yn.floatView[0]=e;let t=Yn.uint32View[0],n=t>>23&511;return Yn.baseTable[n]+((t&8388607)>>Yn.shiftTable[n])}function Qn(e){let t=e>>10;return Yn.uint32View[0]=Yn.mantissaTable[Yn.offsetTable[t]+(e&1023)]+Yn.exponentTable[t],Yn.floatView[0]}var $n=class{static toHalfFloat(e){return Zn(e)}static fromHalfFloat(e){return Qn(e)}},er=new U,tr=new H,nr=0,rr=class extends et{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ve,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)tr.fromBufferAttribute(this,t),tr.applyMatrix3(e),this.setXY(t,tr.x,tr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)er.fromBufferAttribute(this,t),er.applyMatrix3(e),this.setXYZ(t,er.x,er.y,er.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)er.fromBufferAttribute(this,t),er.applyMatrix4(e),this.setXYZ(t,er.x,er.y,er.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)er.fromBufferAttribute(this,t),er.applyNormalMatrix(e),this.setXYZ(t,er.x,er.y,er.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)er.fromBufferAttribute(this,t),er.transformDirection(e),this.setXYZ(t,er.x,er.y,er.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ct(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ct(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ct(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ct(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ct(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),r=lt(r,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},ir=class extends rr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},ar=class extends rr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},or=class extends rr{constructor(e,t,n){super(new Float32Array(e),t,n)}},sr=new Pn,cr=new U,lr=new U,ur=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?sr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);let t=cr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(cr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(lr)),this.expandByPoint(cr.copy(e.center).sub(lr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},dr=0,fr=new Pt,pr=new cn,mr=new U,hr=new Pn,gr=new Pn,_r=new U,vr=class e extends et{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dr++}),this.uuid=it(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ue(e)?ar:ir)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new pt().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fr.makeRotationFromQuaternion(e),this.applyMatrix4(fr),this}rotateX(e){return fr.makeRotationX(e),this.applyMatrix4(fr),this}rotateY(e){return fr.makeRotationY(e),this.applyMatrix4(fr),this}rotateZ(e){return fr.makeRotationZ(e),this.applyMatrix4(fr),this}translate(e,t,n){return fr.makeTranslation(e,t,n),this.applyMatrix4(fr),this}scale(e,t,n){return fr.makeScale(e,t,n),this.applyMatrix4(fr),this}lookAt(e){return pr.lookAt(e),pr.updateMatrix(),this.applyMatrix4(pr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mr).negate(),this.translate(mr.x,mr.y,mr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new or(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&B(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){V(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];hr.setFromBufferAttribute(n),this.morphTargetsRelative?(_r.addVectors(this.boundingBox.min,hr.min),this.boundingBox.expandByPoint(_r),_r.addVectors(this.boundingBox.max,hr.max),this.boundingBox.expandByPoint(_r)):(this.boundingBox.expandByPoint(hr.min),this.boundingBox.expandByPoint(hr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&V(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ur);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){V(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new U,1/0);return}if(e){let n=this.boundingSphere.center;if(hr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];gr.setFromBufferAttribute(n),this.morphTargetsRelative?(_r.addVectors(hr.min,gr.min),hr.expandByPoint(_r),_r.addVectors(hr.max,gr.max),hr.expandByPoint(_r)):(hr.expandByPoint(gr.min),hr.expandByPoint(gr.max))}hr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)_r.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(_r));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)_r.fromBufferAttribute(a,t),o&&(mr.fromBufferAttribute(e,t),_r.add(mr)),r=Math.max(r,n.distanceToSquared(_r))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&V(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){V(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new rr(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new U,s[e]=new U;let c=new U,l=new U,u=new U,d=new H,f=new H,p=new H,m=new U,h=new U;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new U,y=new U,b=new U,x=new U;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new rr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new U,i=new U,a=new U,o=new U,s=new U,c=new U,l=new U,u=new U;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_r.fromBufferAttribute(e,t),_r.normalize(),e.setXYZ(t,_r.x,_r.y,_r.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new rr(a,r,i)}if(this.index===null)return B(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},yr=0,br=class extends et{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yr++}),this.uuid=it(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gn(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Be,this.stencilZFail=Be,this.stencilZPass=Be,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){B(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){B(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},xr=new U,Sr=new U,Cr=new U,wr=new U,Tr=new U,Er=new U,Dr=new U,Or=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xr.copy(this.origin).addScaledVector(this.direction,t),xr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Sr.copy(e).add(t).multiplyScalar(.5),Cr.copy(t).sub(e).normalize(),wr.copy(this.origin).sub(Sr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Cr),o=wr.dot(this.direction),s=-wr.dot(Cr),c=wr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Sr).addScaledVector(Cr,d),f}intersectSphere(e,t){xr.subVectors(e.center,this.origin);let n=xr.dot(this.direction),r=xr.dot(xr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,xr)!==null}intersectTriangle(e,t,n,r,i){Tr.subVectors(t,e),Er.subVectors(n,e),Dr.crossVectors(Tr,Er);let a=this.direction.dot(Dr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wr.subVectors(this.origin,e);let s=o*this.direction.dot(Er.crossVectors(wr,Er));if(s<0)return null;let c=o*this.direction.dot(Tr.cross(wr));if(c<0||s+c>a)return null;let l=-o*wr.dot(Dr);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},kr=class extends br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new gn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ar=new Pt,jr=new Or,Mr=new ur,Nr=new U,Pr=new U,Fr=new U,Ir=new U,Lr=new U,Rr=new U,zr=new U,Br=new U,Vr=class extends cn{constructor(e=new vr,t=new kr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Rr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Lr.fromBufferAttribute(s,e),a?Rr.addScaledVector(Lr,r):Rr.addScaledVector(Lr.sub(t),r))}t.add(Rr)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(i),jr.copy(e.ray).recast(e.near),!(Mr.containsPoint(jr.origin)===!1&&(jr.intersectSphere(Mr,Nr)===null||jr.origin.distanceToSquared(Nr)>(e.far-e.near)**2))&&(Ar.copy(i).invert(),jr.copy(e.ray).applyMatrix4(Ar),!(n.boundingBox!==null&&jr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,jr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Ur(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Ur(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Ur(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Ur(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function Hr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Br.copy(s),Br.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Br);return l<n.near||l>n.far?null:{distance:l,point:Br.clone(),object:e}}function Ur(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Pr),e.getVertexPosition(c,Fr),e.getVertexPosition(l,Ir);let u=Hr(e,t,n,r,Pr,Fr,Ir,zr);if(u){let e=new U;Nn.getBarycoord(zr,Pr,Fr,Ir,e),i&&(u.uv=Nn.getInterpolatedAttribute(i,s,c,l,e,new H)),a&&(u.uv1=Nn.getInterpolatedAttribute(a,s,c,l,e,new H)),o&&(u.normal=Nn.getInterpolatedAttribute(o,s,c,l,e,new U),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new U,materialIndex:0};Nn.getNormal(Pr,Fr,Ir,t.normal),u.face=t,u.barycoord=e}return u}var Wr=class extends Ot{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Gr=new U,Kr=new U,qr=new pt,Jr=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Gr.subVectors(n,t).cross(Kr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Gr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||qr.getNormalMatrix(e),r=this.coplanarPoint(Gr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yr=new ur,Xr=new H(.5,.5),Zr=new U,Qr=class{constructor(e=new Jr,t=new Jr,n=new Jr,r=new Jr,i=new Jr,a=new Jr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=He,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){return Yr.center.set(0,0,0),Yr.radius=.7071067811865476+Xr.distanceTo(e.center),Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Zr.x=r.normal.x>0?e.max.x:e.min.x,Zr.y=r.normal.y>0?e.max.y:e.min.y,Zr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},$r=class extends Ot{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ei=class extends Ot{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ti=class extends ei{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ni=class extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ri=class e extends vr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new or(c,3)),this.setAttribute(`normal`,new or(l,3)),this.setAttribute(`uv`,new or(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new U;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ii=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){B(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new H:new U);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new U,r=[],i=[],a=[],o=new U,s=new Pt;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new U)}i[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(at(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(at(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ai=class extends ii{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new H){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},oi=class extends ai{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function si(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var ci=new U,li=new U,ui=new si,di=new si,fi=new si,pi=class extends ii{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new U){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(li.subVectors(r[0],r[1]).add(r[0]),c=li);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(ci.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=ci),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),ui.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),di.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),fi.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(ui.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),di.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),fi.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(ui.calc(s),di.calc(s),fi.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new U().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function mi(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function hi(e,t){let n=1-e;return n*n*t}function gi(e,t){return 2*(1-e)*e*t}function _i(e,t){return e*e*t}function vi(e,t,n,r){return hi(e,t)+gi(e,n)+_i(e,r)}function yi(e,t){let n=1-e;return n*n*n*t}function bi(e,t){let n=1-e;return 3*n*n*e*t}function xi(e,t){return 3*(1-e)*e*e*t}function Si(e,t){return e*e*e*t}function Ci(e,t,n,r,i){return yi(e,t)+bi(e,n)+xi(e,r)+Si(e,i)}var wi=class extends ii{constructor(e=new H,t=new H,n=new H,r=new H){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ci(e,r.x,i.x,a.x,o.x),Ci(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ti=class extends ii{constructor(e=new U,t=new U,n=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ci(e,r.x,i.x,a.x,o.x),Ci(e,r.y,i.y,a.y,o.y),Ci(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ei=class extends ii{constructor(e=new H,t=new H){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Di=class extends ii{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new U){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oi=class extends ii{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(vi(e,r.x,i.x,a.x),vi(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ki=class extends ii{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(vi(e,r.x,i.x,a.x),vi(e,r.y,i.y,a.y),vi(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ai=class extends ii{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new H){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(mi(o,s.x,c.x,l.x,u.x),mi(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new H().fromArray(n))}return this}},ji=Object.freeze({__proto__:null,ArcCurve:oi,CatmullRomCurve3:pi,CubicBezierCurve:wi,CubicBezierCurve3:Ti,EllipseCurve:ai,LineCurve:Ei,LineCurve3:Di,QuadraticBezierCurve:Oi,QuadraticBezierCurve3:ki,SplineCurve:Ai}),Mi=class extends ii{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new ji[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new ji[n.type]().fromJSON(n))}return this}},Ni=class extends Mi{constructor(e){super(),this.type=`Path`,this.currentPoint=new H,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ei(this.currentPoint.clone(),new H(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Oi(this.currentPoint.clone(),new H(e,t),new H(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new wi(this.currentPoint.clone(),new H(e,t),new H(n,r),new H(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Ai([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new ai(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Pi=class extends Ni{constructor(e){super(e),this.uuid=it(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Ni().fromJSON(n))}return this}};function Fi(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Ii(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Ui(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Ri(a,o,n,s,c,l,0),o}function Ii(e,t,n,r,i){let a;if(i===pa(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=ua(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=ua(i/r|0,e[i],e[i+1],a);return a&&na(a,a.next)&&(da(a),a=a.next),a}function Li(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(na(n,n.next)||ta(n.prev,n,n.next)===0)){if(da(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Ri(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Ji(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Bi(e,r,i,a):zi(e)){t.push(c.i,e.i,l.i),da(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=Vi(Li(e),t),Ri(e,t,n,r,i,a,2)):o===2&&Hi(e,t,n,r,i,a):Ri(Li(e),t,n,r,i,a,1);break}}}function zi(e){let t=e.prev,n=e,r=e.next;if(ta(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&$i(i,s,a,c,o,l,m.x,m.y)&&ta(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Bi(e,t,n,r){let i=e.prev,a=e,o=e.next;if(ta(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Xi(p,m,t,n,r),v=Xi(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&$i(s,u,c,d,l,f,y.x,y.y)&&ta(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&$i(s,u,c,d,l,f,b.x,b.y)&&ta(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&$i(s,u,c,d,l,f,y.x,y.y)&&ta(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&$i(s,u,c,d,l,f,b.x,b.y)&&ta(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Vi(e,t){let n=e;do{let r=n.prev,i=n.next.next;!na(r,i)&&ra(r,n,n.next,i)&&sa(r,i)&&sa(i,r)&&(t.push(r.i,n.i,i.i),da(n),da(n.next),n=e=i),n=n.next}while(n!==e);return Li(n)}function Hi(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&ea(o,e)){let s=la(o,e);o=Li(o,o.next),s=Li(s,s.next),Ri(o,t,n,r,i,a,0),Ri(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Ui(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Ii(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Zi(o))}i.sort(Wi);for(let e=0;e<i.length;e++)n=Gi(i[e],n);return n}function Wi(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Gi(e,t){let n=Ki(e,t);if(!n)return t;let r=la(n,e);return Li(r,r.next),Li(n,n.next)}function Ki(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(na(e,n))return n;do{if(na(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Qi(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);sa(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&qi(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function qi(e,t){return ta(e.prev,e,t.prev)<0&&ta(t.next,e,e.next)<0}function Ji(e,t,n,r){let i=e;do i.z===0&&(i.z=Xi(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Yi(i)}function Yi(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Xi(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Zi(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Qi(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function $i(e,t,n,r,i,a,o,s){return!(e===o&&t===s)&&Qi(e,t,n,r,i,a,o,s)}function ea(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!oa(e,t)&&(sa(e,t)&&sa(t,e)&&ca(e,t)&&(ta(e.prev,e,t.prev)||ta(e,t.prev,t))||na(e,t)&&ta(e.prev,e,e.next)>0&&ta(t.prev,t,t.next)>0)}function ta(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function na(e,t){return e.x===t.x&&e.y===t.y}function ra(e,t,n,r){let i=aa(ta(e,t,n)),a=aa(ta(e,t,r)),o=aa(ta(n,r,e)),s=aa(ta(n,r,t));return!!(i!==a&&o!==s||i===0&&ia(e,n,t)||a===0&&ia(e,r,t)||o===0&&ia(n,e,r)||s===0&&ia(n,t,r))}function ia(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function aa(e){return e>0?1:e<0?-1:0}function oa(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&ra(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function sa(e,t){return ta(e.prev,e,e.next)<0?ta(e,t,e.next)>=0&&ta(e,e.prev,t)>=0:ta(e,t,e.prev)<0||ta(e,e.next,t)<0}function ca(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function la(e,t){let n=fa(e.i,e.x,e.y),r=fa(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function ua(e,t,n,r){let i=fa(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function da(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function fa(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function pa(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var ma=class{static triangulate(e,t,n=2){return Fi(e,t,n)}},ha=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];ga(e),_a(n,e);let a=e.length;t.forEach(ga);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,_a(n,t[e]);let o=ma.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function ga(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function _a(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var va=class e extends vr{constructor(e=new Pi([new H(.5,.5),new H(-.5,.5),new H(-.5,-.5),new H(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new or(r,3)),this.setAttribute(`uv`,new or(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0?!0:t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?ya:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new U,b=new U,x=new U}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!ha.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];ha.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));if(s<=10000000000000001e-36*c*c){e.splice(r,1),n--;continue}t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||V(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new H(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new H(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,P=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),P=P.concat(N)}let F;if(p===0)F=ha.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);L(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);L(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}F=ha.triangulateShape(e,t)}let I=F.length,ee=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],P[e],ee):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),L(x.x,x.y,x.z)):L(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],P[t],ee):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),L(x.x,x.y,x.z)):L(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);L(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?L(i.x,i.y+g[s-1].y,g[s-1].x+n):L(i.x,i.y,c+n)}}}te(),ne();function te(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<I;e++){let n=F[e];ie(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<I;e++){let n=F[e];ie(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<I;e++){let t=F[e];ie(t[2],t[1],t[0])}for(let e=0;e<I;e++){let t=F[e];ie(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ne(){let e=r.length/3,t=0;re(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];re(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function re(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);ae(t+r+n,t+i+n,t+i+a,t+r+a)}}}function L(e,t,n){a.push(e),a.push(t),a.push(n)}function ie(e,t,i){oe(e),oe(t),oe(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);se(o[0]),se(o[1]),se(o[2])}function ae(e,t,i,a){oe(e),oe(t),oe(a),oe(t),oe(i),oe(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);se(s[0]),se(s[1]),se(s[3]),se(s[1]),se(s[2]),se(s[3])}function oe(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function se(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ba(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ji[i.type]().fromJSON(i)),new e(r,t.options)}},ya={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new H(a,o),new H(s,c),new H(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new H(o,1-c),new H(l,1-d),new H(f,1-m),new H(h,1-_)]:[new H(s,1-c),new H(u,1-d),new H(p,1-m),new H(g,1-_)]}};function ba(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var xa=class e extends vr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new or(p,3)),this.setAttribute(`normal`,new or(m,3)),this.setAttribute(`uv`,new or(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function Sa(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(wa(i))i.isRenderTargetTexture?(B(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i))if(wa(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice();else t[n][r]=i}}return t}function Ca(e){let t={};for(let n=0;n<e.length;n++){let r=Sa(e[n]);for(let e in r)t[e]=r[e]}return t}function wa(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ta(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ea(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:vt.workingColorSpace}var Da={clone:Sa,merge:Ca},Oa=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ka=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Aa=class extends br{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oa,this.fragmentShader=ka,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sa(e.uniforms),this.uniformsGroups=Ta(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ja=class extends Aa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ma=class extends br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new gn(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Na=class extends Ma{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new H(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new gn(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new gn(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new gn(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Pa=class extends br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Fe,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Fa=class extends br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ia(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var La=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},Ra=class extends La{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Me,endingEnd:Me}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ne:i=e,o=2*t-n;break;case Pe:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ne:a=e,s=2*n-t;break;case Pe:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},za=class extends La{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ba=class extends La{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Va=class extends La{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.settings||this.DefaultSettings_,u=l.inTangents,d=l.outTangents;if(!u||!d){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let f=o*2,p=e-1;for(let l=0;l!==o;++l){let o=a[c+l],m=a[s+l],h=p*f+l*2,g=d[h],_=d[h+1],v=e*f+l*2,y=u[v],b=u[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[l]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},Ha=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ia(t,this.TimeBufferType),this.values=Ia(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ia(e.times,Array),values:Ia(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ba(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Va(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case ke:t=this.InterpolantFactoryMethodDiscrete;break;case Ae:t=this.InterpolantFactoryMethodLinear;break;case z:t=this.InterpolantFactoryMethodSmooth;break;case je:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return B(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ke;case this.InterpolantFactoryMethodLinear:return Ae;case this.InterpolantFactoryMethodSmooth:return z;case this.InterpolantFactoryMethodBezier:return je}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(V(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(V(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){V(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){V(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&We(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){V(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===z,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Ha.prototype.ValueTypeName=``,Ha.prototype.TimeBufferType=Float32Array,Ha.prototype.ValueBufferType=Float32Array,Ha.prototype.DefaultInterpolation=Ae;var Ua=class extends Ha{constructor(e,t,n){super(e,t,n)}};Ua.prototype.ValueTypeName=`bool`,Ua.prototype.ValueBufferType=Array,Ua.prototype.DefaultInterpolation=ke,Ua.prototype.InterpolantFactoryMethodLinear=void 0,Ua.prototype.InterpolantFactoryMethodSmooth=void 0;var Wa=class extends Ha{constructor(e,t,n,r){super(e,t,n,r)}};Wa.prototype.ValueTypeName=`color`;var Ga=class extends Ha{constructor(e,t,n,r){super(e,t,n,r)}};Ga.prototype.ValueTypeName=`number`;var Ka=class extends La{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)ut.slerpFlat(i,0,a,c-o,a,c,s);return i}},qa=class extends Ha{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ka(this.times,this.values,this.getValueSize(),e)}};qa.prototype.ValueTypeName=`quaternion`,qa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ja=class extends Ha{constructor(e,t,n){super(e,t,n)}};Ja.prototype.ValueTypeName=`string`,Ja.prototype.ValueBufferType=Array,Ja.prototype.DefaultInterpolation=ke,Ja.prototype.InterpolantFactoryMethodLinear=void 0,Ja.prototype.InterpolantFactoryMethodSmooth=void 0;var Ya=class extends Ha{constructor(e,t,n,r){super(e,t,n,r)}};Ya.prototype.ValueTypeName=`vector`;var Xa={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Za(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Za(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Za(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var Qa=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},$a=class{constructor(e){this.manager=e===void 0?Qa:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};$a.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var eo={},to=class extends Error{constructor(e,t){super(e),this.response=t}},no=class extends $a{constructor(e){super(e),this.mimeType=``,this.responseType=``,this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=Xa.get(`file:${e}`);if(i!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(i),this.manager.itemEnd(e)},0);return}if(eo[e]!==void 0){eo[e].push({onLoad:t,onProgress:n,onError:r});return}eo[e]=[],eo[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`,signal:typeof AbortSignal.any==`function`?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,s=this.responseType;fetch(a).then(t=>{if(t.status===200||t.status===0){if(t.status===0&&B(`FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body===void 0||t.body.getReader===void 0)return t;let n=eo[e],r=t.body.getReader(),i=t.headers.get(`X-File-Size`)||t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then(({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}},t=>{e.error(t)})}}});return new Response(c)}else throw new to(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`,t)}).then(e=>{switch(s){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then(e=>new DOMParser().parseFromString(e,o));case`json`:return e.json();default:if(o===``)return e.text();{let t=/charset="?([^;"\s]*)"?/i.exec(o),n=t&&t[1]?t[1].toLowerCase():void 0,r=new TextDecoder(n);return e.arrayBuffer().then(e=>r.decode(e))}}}).then(t=>{Xa.add(`file:${e}`,t);let n=eo[e];delete eo[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}}).catch(t=>{let n=eo[e];if(n===void 0)throw this.manager.itemError(e),t;delete eo[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},ro=new WeakMap,io=class extends $a{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Xa.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=ro.get(a);e===void 0&&(e=[],ro.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=Ge(`img`);function s(){l(),t&&t(this);let n=ro.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}ro.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),Xa.remove(`image:${e}`);let n=ro.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}ro.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Xa.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},ao=class extends $a{constructor(e){super(e)}load(e,n,r,i){let a=this,s=new Wr,l=new no(this.manager);return l.setResponseType(`arraybuffer`),l.setRequestHeader(this.requestHeader),l.setPath(this.path),l.setWithCredentials(a.withCredentials),l.load(e,function(e){let r;try{r=a.parse(e)}catch(e){i===void 0?V(e):i(e);return}r.image===void 0?r.data!==void 0&&(s.image.width=r.width,s.image.height=r.height,s.image.data=r.data):s.image=r.image,s.wrapS=r.wrapS===void 0?t:r.wrapS,s.wrapT=r.wrapT===void 0?t:r.wrapT,s.magFilter=r.magFilter===void 0?o:r.magFilter,s.minFilter=r.minFilter===void 0?o:r.minFilter,s.anisotropy=r.anisotropy===void 0?1:r.anisotropy,r.colorSpace!==void 0&&(s.colorSpace=r.colorSpace),r.flipY!==void 0&&(s.flipY=r.flipY),r.format!==void 0&&(s.format=r.format),r.type!==void 0&&(s.type=r.type),r.mipmaps!==void 0&&(s.mipmaps=r.mipmaps,s.minFilter=c),r.mipmapCount===1&&(s.minFilter=o),r.generateMipmaps!==void 0&&(s.generateMipmaps=r.generateMipmaps),s.needsUpdate=!0,n&&n(s,r)},r,i),s}},oo=class extends $a{constructor(e){super(e)}load(e,t,n,r){let i=new Ot,a=new io(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},so=class extends cn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new gn(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},co=new Pt,lo=new U,uo=new U,fo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new H(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qr,this._frameExtents=new H(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;lo.setFromMatrixPosition(e.matrixWorld),t.position.copy(lo),uo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uo),t.updateMatrixWorld(),co.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(co,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(co)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},po=new U,mo=new ut,ho=new U,go=class extends cn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=He,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(po,mo,ho),ho.x===1&&ho.y===1&&ho.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,mo,ho.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(po,mo,ho),ho.x===1&&ho.y===1&&ho.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,mo,ho.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},_o=new U,vo=new H,yo=new H,bo=class extends go{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=rt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(nt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rt*2*Math.atan(Math.tan(nt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_o.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_o.x,_o.y).multiplyScalar(-e/_o.z),_o.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_o.x,_o.y).multiplyScalar(-e/_o.z)}getViewSize(e,t){return this.getViewBounds(e,vo,yo),t.subVectors(yo,vo)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(nt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},xo=class extends fo{constructor(){super(new bo(90,1,.5,500)),this.isPointLightShadow=!0}},So=class extends so{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new xo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Co=class extends go{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wo=class extends fo{constructor(){super(new Co(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},To=class extends so{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new wo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Eo=class extends so{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},Do=-90,Oo=1,ko=class extends cn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new bo(Do,Oo,e,t);r.layers=this.layers,this.add(r);let i=new bo(Do,Oo,e,t);i.layers=this.layers,this.add(i);let a=new bo(Do,Oo,e,t);a.layers=this.layers,this.add(a);let o=new bo(Do,Oo,e,t);o.layers=this.layers,this.add(o);let s=new bo(Do,Oo,e,t);s.layers=this.layers,this.add(s);let c=new bo(Do,Oo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ao=class extends bo{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},jo=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Mo.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Mo(){this._document.hidden===!1&&this.reset()}var No=`\\[\\]\\.:\\/`,Po=RegExp(`[\\[\\]\\.:\\/]`,`g`),Fo=`[^\\[\\]\\.:\\/]`,Io=`[^`+No.replace(`\\.`,``)+`]`,Lo=`((?:WC+[\\/:])*)`.replace(`WC`,Fo),Ro=`(WCOD+)?`.replace(`WCOD`,Io),zo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Fo),Bo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Fo),Vo=RegExp(`^`+Lo+Ro+zo+Bo+`$`),Ho=[`material`,`materials`,`bones`,`map`],Uo=class{constructor(e,t,n){let r=n||Wo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Wo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Po,``)}static parseTrackName(e){let t=Vo.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Ho.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){B(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){V(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){V(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){V(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){V(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){V(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){V(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;V(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){V(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Wo.Composite=Uo,Wo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Wo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Wo.prototype.GetterByBindingType=[Wo.prototype._getValue_direct,Wo.prototype._getValue_array,Wo.prototype._getValue_arrayElement,Wo.prototype._getValue_toArray],Wo.prototype.SetterByBindingTypeAndVersioning=[[Wo.prototype._setValue_direct,Wo.prototype._setValue_direct_setNeedsUpdate,Wo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Wo.prototype._setValue_array,Wo.prototype._setValue_array_setNeedsUpdate,Wo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Wo.prototype._setValue_arrayElement,Wo.prototype._setValue_arrayElement_setNeedsUpdate,Wo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Wo.prototype._setValue_fromArray,Wo.prototype._setValue_fromArray_setNeedsUpdate,Wo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Go=new Pt,Ko=class{constructor(e,t,n=0,r=1/0){this.ray=new Or(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Gt,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):V(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Go.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Go),this}intersectObject(e,t=!0,n=[]){return Jo(e,this,n,t),n.sort(qo),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Jo(e[r],this,n,t);return n.sort(qo),n}};function qo(e,t){return e.distance-t.distance}function Jo(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Jo(r[e],t,n,!0)}}(class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});var Yo=class{constructor(){this.type=`ShapePath`,this.color=new gn,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ni,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,i,a){return this.currentPath.bezierCurveTo(e,t,n,r,i,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n],i=new Pi;i.curves=r.curves,t.push(i)}return t}function n(e,t){let n=t.length,r=!1;for(let i=n-1,a=0;a<n;i=a++){let n=t[i],o=t[a],s=o.x-n.x,c=o.y-n.y;if(Math.abs(c)>2**-52){if(c<0&&(n=t[a],s=-s,o=t[i],c=-c),e.y<n.y||e.y>o.y)continue;if(e.y===n.y){if(e.x===n.x)return!0}else{let t=c*(e.x-n.x)-s*(e.y-n.y);if(t===0)return!0;if(t<0)continue;r=!r}}else{if(e.y!==n.y)continue;if(o.x<=e.x&&e.x<=n.x||n.x<=e.x&&e.x<=o.x)return!0}}return r}let r=ha.isClockWise,i=this.subPaths;if(i.length===0)return[];let a,o,s,c=[];if(i.length===1)return o=i[0],s=new Pi,s.curves=o.curves,c.push(s),c;let l=!r(i[0].getPoints());l=e?!l:l;let u=[],d=[],f=[],p=0,m;d[p]=void 0,f[p]=[];for(let t=0,n=i.length;t<n;t++)o=i[t],m=o.getPoints(),a=r(m),a=e?!a:a,a?(!l&&d[p]&&p++,d[p]={s:new Pi,p:m},d[p].s.curves=o.curves,l&&p++,f[p]=[]):f[p].push({h:o,p:m[0]});if(!d[0])return t(i);if(d.length>1){let e=!1,t=0;for(let e=0,t=d.length;e<t;e++)u[e]=[];for(let r=0,i=d.length;r<i;r++){let i=f[r];for(let a=0;a<i.length;a++){let o=i[a],s=!0;for(let i=0;i<d.length;i++)n(o.p,d[i].p)&&(r!==i&&t++,s?(s=!1,u[i].push(o)):e=!0);s&&u[r].push(o)}}t>0&&e===!1&&(f=u)}let h;for(let e=0,t=d.length;e<t;e++){s=d[e].s,c.push(s),h=f[e];for(let e=0,t=h.length;e<t;e++)s.holes.push(h[e].h)}return c}};function Xo(e,t,n,r){let i=Zo(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case j:return e*t*4/i.components*i.byteLength;case M:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case P:case F:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ee:case ne:return Math.max(e,16)*Math.max(t,8)/4;case I:case te:return Math.max(e,8)*Math.max(t,8)/2;case re:case L:case ae:case oe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ie:case se:case ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ue:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case de:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case fe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case pe:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case me:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ge:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case _e:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case xe:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Se:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ce:case we:case Te:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ee:case De:return Math.ceil(e/4)*Math.ceil(t/4)*8;case R:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Zo(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`184`}})),typeof window<`u`&&(window.__THREE__?B(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`184`);function Qo(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function $o(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var es={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},W={common:{diffuse:{value:new gn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new H(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new gn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new gn(16777215)},opacity:{value:1},center:{value:new H(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},ts={basic:{uniforms:Ca([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.fog]),vertexShader:es.meshbasic_vert,fragmentShader:es.meshbasic_frag},lambert:{uniforms:Ca([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new gn(0)},envMapIntensity:{value:1}}]),vertexShader:es.meshlambert_vert,fragmentShader:es.meshlambert_frag},phong:{uniforms:Ca([W.common,W.specularmap,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.fog,W.lights,{emissive:{value:new gn(0)},specular:{value:new gn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:es.meshphong_vert,fragmentShader:es.meshphong_frag},standard:{uniforms:Ca([W.common,W.envmap,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.roughnessmap,W.metalnessmap,W.fog,W.lights,{emissive:{value:new gn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:es.meshphysical_vert,fragmentShader:es.meshphysical_frag},toon:{uniforms:Ca([W.common,W.aomap,W.lightmap,W.emissivemap,W.bumpmap,W.normalmap,W.displacementmap,W.gradientmap,W.fog,W.lights,{emissive:{value:new gn(0)}}]),vertexShader:es.meshtoon_vert,fragmentShader:es.meshtoon_frag},matcap:{uniforms:Ca([W.common,W.bumpmap,W.normalmap,W.displacementmap,W.fog,{matcap:{value:null}}]),vertexShader:es.meshmatcap_vert,fragmentShader:es.meshmatcap_frag},points:{uniforms:Ca([W.points,W.fog]),vertexShader:es.points_vert,fragmentShader:es.points_frag},dashed:{uniforms:Ca([W.common,W.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:es.linedashed_vert,fragmentShader:es.linedashed_frag},depth:{uniforms:Ca([W.common,W.displacementmap]),vertexShader:es.depth_vert,fragmentShader:es.depth_frag},normal:{uniforms:Ca([W.common,W.bumpmap,W.normalmap,W.displacementmap,{opacity:{value:1}}]),vertexShader:es.meshnormal_vert,fragmentShader:es.meshnormal_frag},sprite:{uniforms:Ca([W.sprite,W.fog]),vertexShader:es.sprite_vert,fragmentShader:es.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:es.background_vert,fragmentShader:es.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:es.backgroundCube_vert,fragmentShader:es.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:es.cube_vert,fragmentShader:es.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:es.equirect_vert,fragmentShader:es.equirect_frag},distance:{uniforms:Ca([W.common,W.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:es.distance_vert,fragmentShader:es.distance_frag},shadow:{uniforms:Ca([W.lights,W.fog,{color:{value:new gn(0)},opacity:{value:1}}]),vertexShader:es.shadow_vert,fragmentShader:es.shadow_frag}};ts.physical={uniforms:Ca([ts.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new H(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new gn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new H},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new gn(0)},specularColor:{value:new gn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new H},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:es.meshphysical_vert,fragmentShader:es.meshphysical_frag};var ns={r:0,b:0,g:0},rs=new Pt,is=new pt;is.set(-1,0,0,0,1,0,0,0,1);function as(e,t,n,r,i,a){let o=new gn(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Vr(new ri(1,1,1),new Aa({name:`BackgroundCubeMaterial`,uniforms:Sa(ts.backgroundCube.uniforms),vertexShader:ts.backgroundCube.vertexShader,fragmentShader:ts.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(rs.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(is),l.material.toneMapped=vt.getTransfer(i.colorSpace)!==ze,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Vr(new xa(2,2),new Aa({name:`BackgroundMaterial`,uniforms:Sa(ts.background.uniforms),vertexShader:ts.background.vertexShader,fragmentShader:ts.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=vt.getTransfer(i.colorSpace)!==ze,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(ns,Ea(e)),n.buffers.color.setClear(ns.r,ns.g,ns.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function os(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ss(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function cs(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(B(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&B(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function ls(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Jr,s=new pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var us=4,ds=[.125,.215,.35,.446,.526,.582],fs=20,ps=256,ms=new Co,hs=new gn,gs=null,_s=0,vs=0,ys=!1,bs=new U,xs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=bs}=i;gs=this._renderer.getRenderTarget(),_s=this._renderer.getActiveCubeFace(),vs=this._renderer.getActiveMipmapLevel(),ys=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Os(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ds(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gs,_s,vs),this._renderer.xr.enabled=ys,e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gs=this._renderer.getRenderTarget(),_s=this._renderer.getActiveCubeFace(),vs=this._renderer.getActiveMipmapLevel(),ys=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:w,colorSpace:Le,depthBuffer:!1},r=Cs(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cs(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ss(r)),this._blurMaterial=Es(r,e,t),this._ggxMaterial=Ts(r,e,t)}return r}_compileMaterial(e){let t=new Vr(new vr,e);this._renderer.compile(t,ms)}_sceneToCubeUV(e,t,n,r,i){let a=new bo(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(hs),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vr(new ri,new kr({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(hs),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;ws(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Os()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ds());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;ws(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,ms)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-us?n-d+us:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,ws(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,ms),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,ws(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,ms)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&V(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*fs-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):fs;m>fs&&B(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fs}`);let h=[],g=0;for(let e=0;e<fs;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];ws(t,3*v*(r>_-us?r-_+us:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,ms)}};function Ss(e){let t=[],n=[],r=[],i=e,a=e-us+1+ds.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-us?s=ds[o-e+us-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new vr;h.setAttribute(`position`,new rr(f,3)),h.setAttribute(`uv`,new rr(p,2)),h.setAttribute(`faceIndex`,new rr(m,1)),r.push(new Vr(h,null)),i>us&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Cs(e,t,n){let r=new jt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function ws(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Ts(e,t,n){return new Aa({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:ps,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ks(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Es(e,t,n){let r=new Float32Array(fs),i=new U(0,1,0);return new Aa({name:`SphericalGaussianBlur`,defines:{n:fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ds(){return new Aa({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Os(){return new Aa({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ks(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var As=class extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new $r(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ri(5,5,5),i=new Aa({name:`CubemapFromEquirect`,uniforms:Sa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Vr(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new ko(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function js(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new As(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}else return null}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new xs(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new xs(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Ms(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Ze(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Ns(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?ar:ir)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Ps(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Fs(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:V(`WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Is(e,t,n){let r=new WeakMap,i=new kt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Mt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new H(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Ls(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Rs={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function zs(e,t,n,r,i){let a=new jt(t,n,{type:e,depthBuffer:r,stencilBuffer:i,depthTexture:r?new ei(t,n):void 0}),o=new jt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),s=new vr;s.setAttribute(`position`,new or([-1,3,0,-1,-1,0,3,-1,0],3)),s.setAttribute(`uv`,new or([0,2,0,0,2,0],2));let c=new ja({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Vr(s,c),u=new Co(-1,1,1,-1,0,1),d=null,f=null,p=!1,m,h=null,_=[],v=!1;this.setSize=function(e,t){a.setSize(e,t),o.setSize(e,t);for(let n=0;n<_.length;n++){let r=_[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){_=e,v=_.length>0&&_[0].isRenderPass===!0;let t=a.width,n=a.height;for(let e=0;e<_.length;e++){let r=_[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(p||e.toneMapping===0&&_.length===0)return!1;if(h=t,t!==null){let e=t.width,n=t.height;(a.width!==e||a.height!==n)&&this.setSize(e,n)}return v===!1&&e.setRenderTarget(a),m=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return v},this.end=function(e,t){e.toneMapping=m,p=!0;let n=a,r=o;for(let i=0;i<_.length;i++){let a=_[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(d!==e.outputColorSpace||f!==e.toneMapping){d=e.outputColorSpace,f=e.toneMapping,c.defines={},vt.getTransfer(d)===`srgb`&&(c.defines.SRGB_TRANSFER=``);let t=Rs[f];t&&(c.defines[t]=``),c.needsUpdate=!0}c.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(h),e.render(l,u),h=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),s.dispose(),c.dispose()}}var Bs=new Ot,Vs=new ei(1,1),Hs=new Mt,Us=new Nt,Ws=new $r,Gs=[],Ks=[],qs=new Float32Array(16),Js=new Float32Array(9),Ys=new Float32Array(4);function Xs(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Gs[i];if(a===void 0&&(a=new Float32Array(i),Gs[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Zs(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Qs(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function $s(e,t){let n=Ks[t];n===void 0&&(n=new Int32Array(t),Ks[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function ec(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function tc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Zs(n,t))return;e.uniform2fv(this.addr,t),Qs(n,t)}}function nc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Zs(n,t))return;e.uniform3fv(this.addr,t),Qs(n,t)}}function rc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Zs(n,t))return;e.uniform4fv(this.addr,t),Qs(n,t)}}function ic(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Zs(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Qs(n,t)}else{if(Zs(n,r))return;Ys.set(r),e.uniformMatrix2fv(this.addr,!1,Ys),Qs(n,r)}}function ac(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Zs(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Qs(n,t)}else{if(Zs(n,r))return;Js.set(r),e.uniformMatrix3fv(this.addr,!1,Js),Qs(n,r)}}function oc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Zs(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Qs(n,t)}else{if(Zs(n,r))return;qs.set(r),e.uniformMatrix4fv(this.addr,!1,qs),Qs(n,r)}}function sc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function cc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Zs(n,t))return;e.uniform2iv(this.addr,t),Qs(n,t)}}function lc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Zs(n,t))return;e.uniform3iv(this.addr,t),Qs(n,t)}}function uc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Zs(n,t))return;e.uniform4iv(this.addr,t),Qs(n,t)}}function dc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function fc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Zs(n,t))return;e.uniform2uiv(this.addr,t),Qs(n,t)}}function pc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Zs(n,t))return;e.uniform3uiv(this.addr,t),Qs(n,t)}}function mc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Zs(n,t))return;e.uniform4uiv(this.addr,t),Qs(n,t)}}function hc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Vs.compareFunction=n.isReversedDepthBuffer()?518:515,a=Vs):a=Bs,n.setTexture2D(t||a,i)}function gc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Us,i)}function _c(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Ws,i)}function vc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Hs,i)}function yc(e){switch(e){case 5126:return ec;case 35664:return tc;case 35665:return nc;case 35666:return rc;case 35674:return ic;case 35675:return ac;case 35676:return oc;case 5124:case 35670:return sc;case 35667:case 35671:return cc;case 35668:case 35672:return lc;case 35669:case 35673:return uc;case 5125:return dc;case 36294:return fc;case 36295:return pc;case 36296:return mc;case 35678:case 36198:case 36298:case 36306:case 35682:return hc;case 35679:case 36299:case 36307:return gc;case 35680:case 36300:case 36308:case 36293:return _c;case 36289:case 36303:case 36311:case 36292:return vc}}function bc(e,t){e.uniform1fv(this.addr,t)}function xc(e,t){let n=Xs(t,this.size,2);e.uniform2fv(this.addr,n)}function Sc(e,t){let n=Xs(t,this.size,3);e.uniform3fv(this.addr,n)}function Cc(e,t){let n=Xs(t,this.size,4);e.uniform4fv(this.addr,n)}function wc(e,t){let n=Xs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Tc(e,t){let n=Xs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ec(e,t){let n=Xs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Dc(e,t){e.uniform1iv(this.addr,t)}function Oc(e,t){e.uniform2iv(this.addr,t)}function kc(e,t){e.uniform3iv(this.addr,t)}function Ac(e,t){e.uniform4iv(this.addr,t)}function jc(e,t){e.uniform1uiv(this.addr,t)}function Mc(e,t){e.uniform2uiv(this.addr,t)}function Nc(e,t){e.uniform3uiv(this.addr,t)}function Pc(e,t){e.uniform4uiv(this.addr,t)}function Fc(e,t,n){let r=this.cache,i=t.length,a=$s(n,i);Zs(r,a)||(e.uniform1iv(this.addr,a),Qs(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Vs:Bs;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Ic(e,t,n){let r=this.cache,i=t.length,a=$s(n,i);Zs(r,a)||(e.uniform1iv(this.addr,a),Qs(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Us,a[e])}function Lc(e,t,n){let r=this.cache,i=t.length,a=$s(n,i);Zs(r,a)||(e.uniform1iv(this.addr,a),Qs(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Ws,a[e])}function Rc(e,t,n){let r=this.cache,i=t.length,a=$s(n,i);Zs(r,a)||(e.uniform1iv(this.addr,a),Qs(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Hs,a[e])}function zc(e){switch(e){case 5126:return bc;case 35664:return xc;case 35665:return Sc;case 35666:return Cc;case 35674:return wc;case 35675:return Tc;case 35676:return Ec;case 5124:case 35670:return Dc;case 35667:case 35671:return Oc;case 35668:case 35672:return kc;case 35669:case 35673:return Ac;case 5125:return jc;case 36294:return Mc;case 36295:return Nc;case 36296:return Pc;case 35678:case 36198:case 36298:case 36306:case 35682:return Fc;case 35679:case 36299:case 36307:return Ic;case 35680:case 36300:case 36308:case 36293:return Lc;case 36289:case 36303:case 36311:case 36292:return Rc}}var Bc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yc(t.type)}},Vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zc(t.type)}},Hc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Uc=/(\w+)(\])?(\[|\.)?/g;function Wc(e,t){e.seq.push(t),e.map[t.id]=t}function Gc(e,t,n){let r=e.name,i=r.length;for(Uc.lastIndex=0;;){let a=Uc.exec(r),o=Uc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Wc(n,l===void 0?new Bc(s,e,t):new Vc(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new Hc(s),Wc(n,e)),n=e}}}var Kc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Gc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function qc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Jc=37297,Yc=0;function Xc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Zc=new pt;function Qc(e){vt._getMatrix(Zc,vt.workingColorSpace,e);let t=`mat3( ${Zc.elements.map(e=>e.toFixed(4))} )`;switch(vt.getTransfer(e)){case Re:return[t,`LinearTransferOETF`];case ze:return[t,`sRGBTransferOETF`];default:return B(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function $c(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Xc(e.getShaderSource(t),r)}else return i}function el(e,t){let n=Qc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var tl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function nl(e,t){let n=tl[t];return n===void 0?(B(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var rl=new U;function il(){return vt.getLuminanceCoefficients(rl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${rl.x.toFixed(4)}, ${rl.y.toFixed(4)}, ${rl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function al(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(cl).join(`
`)}function ol(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function sl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function cl(e){return e!==``}function ll(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ul(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var dl=/^[ \t]*#include +<([\w\d./]+)>/gm;function fl(e){return e.replace(dl,ml)}var pl=new Map;function ml(e,t){let n=es[t];if(n===void 0){let e=pl.get(t);if(e!==void 0)n=es[e],B(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return fl(n)}var hl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gl(e){return e.replace(hl,_l)}function _l(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function vl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var yl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function bl(e){return yl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var xl={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Sl(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:xl[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Cl={302:`ENVMAP_MODE_REFRACTION`};function wl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Cl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Tl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function El(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Tl[e.combine]||`ENVMAP_BLENDING_NONE`}function Dl(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Ol(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=bl(n),l=Sl(n),u=wl(n),d=El(n),f=Dl(n),p=al(n),m=ol(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(cl).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(cl).join(`
`),_.length>0&&(_+=`
`)):(g=[vl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(cl).join(`
`),_=[vl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:es.tonemapping_pars_fragment,n.toneMapping===0?``:nl(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,es.colorspace_pars_fragment,el(`linearToOutputTexel`,n.outputColorSpace),il(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(cl).join(`
`)),o=fl(o),o=ll(o,n),o=ul(o,n),s=fl(s),s=ll(s,n),s=ul(s,n),o=gl(o),s=gl(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=qc(i,i.VERTEX_SHADER,y),S=qc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=$c(i,x,`vertex`),n=$c(i,S,`fragment`);V(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):B(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Kc(i,h),T=sl(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,Jc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Yc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var kl=0,Al=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new jl(e),t.set(e,n)),n}},jl=class{constructor(e){this.id=kl++,this.code=e,this.usedTimes=0}};function Ml(e){return e===1030||e===37490||e===36285}function Nl(e,t,n,r,i,a){let o=new Gt,s=new Al,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&B(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=ts[C];D=e.vertexShader,O=e.fragmentShader}else D=i.vertexShader,O=i.fragmentShader,s.update(i),k=s.getVertexShaderID(i),A=s.getFragmentShaderID(i);let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,F=!!i.map,I=!!i.matcap,ee=!!x,te=!!i.aoMap,ne=!!i.lightMap,re=!!i.bumpMap,L=!!i.normalMap,ie=!!i.displacementMap,ae=!!i.emissiveMap,oe=!!i.metalnessMap,se=!!i.roughnessMap,ce=i.anisotropy>0,le=i.clearcoat>0,ue=i.dispersion>0,de=i.iridescence>0,fe=i.sheen>0,pe=i.transmission>0,me=ce&&!!i.anisotropyMap,he=le&&!!i.clearcoatMap,ge=le&&!!i.clearcoatNormalMap,_e=le&&!!i.clearcoatRoughnessMap,ve=de&&!!i.iridescenceMap,ye=de&&!!i.iridescenceThicknessMap,be=fe&&!!i.sheenColorMap,xe=fe&&!!i.sheenRoughnessMap,Se=!!i.specularMap,Ce=!!i.specularColorMap,we=!!i.specularIntensityMap,Te=pe&&!!i.transmissionMap,Ee=pe&&!!i.thicknessMap,De=!!i.gradientMap,R=!!i.alphaMap,Oe=i.alphaTest>0,ke=!!i.alphaHash,Ae=!!i.extensions,z=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(z=e.toneMapping);let je={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:vt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:F,matcap:I,envMap:ee,envMapMode:ee&&x.mapping,envMapCubeUVHeight:S,aoMap:te,lightMap:ne,bumpMap:re,normalMap:L,displacementMap:ie,emissiveMap:ae,normalMapObjectSpace:L&&i.normalMapType===1,normalMapTangentSpace:L&&i.normalMapType===0,packedNormalMap:L&&i.normalMapType===0&&Ml(i.normalMap.format),metalnessMap:oe,roughnessMap:se,anisotropy:ce,anisotropyMap:me,clearcoat:le,clearcoatMap:he,clearcoatNormalMap:ge,clearcoatRoughnessMap:_e,dispersion:ue,iridescence:de,iridescenceMap:ve,iridescenceThicknessMap:ye,sheen:fe,sheenColorMap:be,sheenRoughnessMap:xe,specularMap:Se,specularColorMap:Ce,specularIntensityMap:we,transmission:pe,transmissionMap:Te,thicknessMap:Ee,gradientMap:De,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:R,alphaTest:Oe,alphaHash:ke,combine:i.combine,mapUv:F&&m(i.map.channel),aoMapUv:te&&m(i.aoMap.channel),lightMapUv:ne&&m(i.lightMap.channel),bumpMapUv:re&&m(i.bumpMap.channel),normalMapUv:L&&m(i.normalMap.channel),displacementMapUv:ie&&m(i.displacementMap.channel),emissiveMapUv:ae&&m(i.emissiveMap.channel),metalnessMapUv:oe&&m(i.metalnessMap.channel),roughnessMapUv:se&&m(i.roughnessMap.channel),anisotropyMapUv:me&&m(i.anisotropyMap.channel),clearcoatMapUv:he&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ge&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:be&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:xe&&m(i.sheenRoughnessMap.channel),specularMapUv:Se&&m(i.specularMap.channel),specularColorMapUv:Ce&&m(i.specularColorMap.channel),specularIntensityMapUv:we&&m(i.specularIntensityMap.channel),transmissionMapUv:Te&&m(i.transmissionMap.channel),thicknessMapUv:Ee&&m(i.thicknessMap.channel),alphaMapUv:R&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(L||ce),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(F||R),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&L===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:z,decodeVideoTexture:F&&i.map.isVideoTexture===!0&&vt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ae&&i.emissiveMap.isVideoTexture===!0&&vt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ae&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ae&&i.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=ts[t];n=Da.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Ol(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Pl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Fl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Il(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ll(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Fl),r.length>1&&r.sort(t||Il),i.length>1&&i.sort(t||Il)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Rl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Ll,e.set(t,[i])):n>=r.length?(i=new Ll,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function zl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new U,color:new gn};break;case`SpotLight`:n={position:new U,direction:new U,color:new gn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new U,color:new gn,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new U,skyColor:new gn,groundColor:new gn};break;case`RectAreaLight`:n={color:new gn,position:new U,halfWidth:new U,halfHeight:new U};break}return e[t.id]=n,n}}}function Bl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var Vl=0;function Hl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ul(e){let t=new zl,n=Bl(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new U);let i=new U,a=new Pt,o=new Pt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Hl);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=W.LTC_FLOAT_1,r.rectAreaLTC2=W.LTC_FLOAT_2):(r.rectAreaLTC1=W.LTC_HALF_1,r.rectAreaLTC2=W.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Vl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Wl(e){let t=new Ul(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Gl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Wl(e),t.set(n,[a])):r>=i.length?(a=new Wl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Kl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ql=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Jl=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Yl=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Xl=new Pt,Zl=new U,Ql=new U;function $l(e,t,n){let i=new Qr,a=new H,s=new H,c=new kt,l=new Pa,u=new Fa,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new Aa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new H},radius:{value:4}},vertexShader:Kl,fragmentShader:ql}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new vr;y.setAttribute(`position`,new rr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Vr(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(B(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){B(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){B(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new jt(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new ei(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new As(a.x),p.map.depthTexture=new ti(a.x,m)):(p.map=new jt(a.x,a.y),p.map.depthTexture=new ei(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}let x=p.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<x;t++){if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Zl.setFromMatrixPosition(d.matrixWorld),e.position.copy(Zl),Ql.copy(e.position),Ql.add(Jl[t]),e.up.copy(Yl[t]),e.lookAt(Ql),e.updateMatrixWorld(),n.makeTranslation(-Zl.x,-Zl.y,-Zl.z),Xl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Xl,e.coordinateSystem,e.reversedDepth)}else p.updateMatrices(d);i=p.getFrustum(),E(n,l,p.camera,d,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new jt(a.x,a.y,{format:k,type:g})),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value=n.mapSize,_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value=n.mapSize,v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||i.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=w(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)E(c[e],r,a,o,s)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function eu(e,t){function n(){let t=!1,n=new kt,r=null,i=new kt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?oe(e.DEPTH_TEST):se(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=$e[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?oe(e.STENCIL_TEST):se(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new gn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,ee={},te=e.getParameter(e.SCISSOR_BOX),ne=e.getParameter(e.VIEWPORT),re=new kt().fromArray(te),L=new kt().fromArray(ne);function ie(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ae={};ae[e.TEXTURE_2D]=ie(e.TEXTURE_2D,e.TEXTURE_2D,1),ae[e.TEXTURE_CUBE_MAP]=ie(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[e.TEXTURE_2D_ARRAY]=ie(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ae[e.TEXTURE_3D]=ie(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),oe(e.DEPTH_TEST),o.setFunc(3),he(!1),ge(1),oe(e.CULL_FACE),pe(0);function oe(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function se(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ce(t,n){return f[t]===n?!1:(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function le(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ue(t){return h===t?!1:(e.useProgram(t),h=t,!0)}let de={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};de[103]=e.MIN,de[104]=e.MAX;let fe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function pe(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(se(e.BLEND),g=!1);return}if(g===!1&&(oe(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:V(`WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:V(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:V(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:V(`WebGLState: Invalid blending: `,t);break}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(de[n],de[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(fe[r],fe[i],fe[o],fe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function me(t,n){t.side===2?se(e.CULL_FACE):oe(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?pe(0):pe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ve(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?oe(e.SAMPLE_ALPHA_TO_COVERAGE):se(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ge(t){t===0?se(e.CULL_FACE):(oe(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function _e(t){t!==k&&(N&&e.lineWidth(t),k=t)}function ve(t,n,r){t?(oe(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):se(e.POLYGON_OFFSET_FILL)}function ye(t){t?oe(e.SCISSOR_TEST):se(e.SCISSOR_TEST)}function be(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function xe(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=ee[r];i===void 0&&(i={type:void 0,texture:void 0},ee[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||ae[t]),i.type=t,i.texture=n)}function Se(){let t=ee[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ce(){try{e.compressedTexImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function we(){try{e.compressedTexImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Te(){try{e.texSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ee(){try{e.texSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function R(){try{e.compressedTexSubImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Oe(){try{e.texStorage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function ke(){try{e.texStorage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function Ae(){try{e.texImage2D(...arguments)}catch(e){V(`WebGLState:`,e)}}function z(){try{e.texImage3D(...arguments)}catch(e){V(`WebGLState:`,e)}}function je(t){return d[t]===void 0?e.getParameter(t):d[t]}function Me(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ne(t){re.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),re.copy(t))}function Pe(t){L.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),L.copy(t))}function Fe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ie(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Le(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,ee={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new gn(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,re.set(0,0,e.canvas.width,e.canvas.height),L.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:oe,disable:se,bindFramebuffer:ce,drawBuffers:le,useProgram:ue,setBlending:pe,setMaterial:me,setFlipSided:he,setCullFace:ge,setLineWidth:_e,setPolygonOffset:ve,setScissorTest:ye,activeTexture:be,bindTexture:xe,unbindTexture:Se,compressedTexImage2D:Ce,compressedTexImage3D:we,texImage2D:Ae,texImage3D:z,pixelStorei:Me,getParameter:je,updateUBOMapping:Fe,uniformBlockBinding:Ie,texStorage2D:Oe,texStorage3D:ke,texSubImage2D:Te,texSubImage3D:Ee,compressedTexSubImage2D:De,compressedTexSubImage3D:R,scissor:Ne,viewport:Pe,reset:Le}}function tu(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new H,y=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):Ge(`canvas`)}function T(e,t,n){let r=1,i=je(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),B(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&B(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function D(e){return e.generateMipmaps}function O(e){l.generateMipmap(e)}function k(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function A(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];B(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||B(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Re:vt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function j(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,B(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function M(e,t){return D(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function N(e){let t=e.target;t.removeEventListener(`dispose`,N),F(t),t.isVideoTexture&&y.delete(t),t.isHTMLTexture&&b.delete(t)}function P(e){let t=e.target;t.removeEventListener(`dispose`,P),ee(t)}function F(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&I(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function I(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function ee(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let te=0;function ne(){te=0}function re(){return te}function L(e){te=e}function ie(){let e=te;return e>=p.maxTextures&&B(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),te+=1,e}function ae(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function oe(e,t){let n=f.get(e);if(e.isVideoTexture&&Ae(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)B(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)B(`WebGLRenderer: Texture marked for update but image is incomplete`);else{_e(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function se(e,t){let n=f.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){_e(n,e,t);return}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t)}function ce(e,t){let n=f.get(e);if(e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){_e(n,e,t);return}d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function le(e,t){let n=f.get(e);if(e.isCubeDepthTexture!==!0&&e.version>0&&n.__version!==e.version){ve(n,e,t);return}d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let ue={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},de={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},fe={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function pe(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&B(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,ue[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,ue[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,ue[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,de[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,de[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,fe[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function me(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,N));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=ae(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&I(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function he(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ge(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=he(r.start,t.width,4),c=he(n.start,t.width,4);r.start<=o+1&&s===c&&he(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function _e(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=me(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=vt.getPrimaries(vt.workingColorSpace),n=t.colorSpace===``?null:vt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=T(t.image,!1,p.maxTextureSize);e=z(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=A(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);pe(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=M(t,e);if(t.isDepthTexture)u=j(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture)if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&ge(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data);else if(t.isCompressedTexture)if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023)if(s!==null)if(g){if(v)if(t.layerUpdates.size>0){let e=Xo(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}t.clearLayerUpdates()}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0);else B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data)}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}else if(t.isDataArrayTexture)if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v)if(t.layerUpdates.size>0){let n=Xo(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_)if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}let r=l.RGBA,i=l.RGBA,a=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,r,i,a,e),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=je(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=je(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);D(t)&&O(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function ve(e,t,n){if(t.image.length!==6)return;let r=me(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=vt.getPrimaries(vt.workingColorSpace),o=t.colorSpace===``?null:vt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=T(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=z(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=A(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=M(t,h);pe(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?B(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=je(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}D(t)&&O(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function ye(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=A(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),ke(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Oe(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function be(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=j(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;ke(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Oe(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Oe(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=A(i.internalFormat,a,o,i.normalized,i.colorSpace);ke(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Oe(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Oe(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function xe(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let i=f.get(t.depthTexture);if(i.__renderTarget=t,(!i.__webglTexture||t.depthTexture.image.width!==t.width||t.depthTexture.image.height!==t.height)&&(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),r){if(i.__webglInit===void 0&&(i.__webglInit=!0,t.depthTexture.addEventListener(`dispose`,N)),i.__webglTexture===void 0){i.__webglTexture=l.createTexture(),d.bindTexture(l.TEXTURE_CUBE_MAP,i.__webglTexture),pe(l.TEXTURE_CUBE_MAP,t.depthTexture);let e=m.convert(t.depthTexture.format),n=m.convert(t.depthTexture.type),r;t.depthTexture.format===1026?r=l.DEPTH_COMPONENT24:t.depthTexture.format===1027&&(r=l.DEPTH24_STENCIL8);for(let i=0;i<6;i++)l.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,r,t.width,t.height,0,e,n,null)}}else oe(t.depthTexture,0);let a=i.__webglTexture,o=Oe(t),s=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,c=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)ke(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else if(t.depthTexture.format===1027)ke(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,c,s,a,0,o):l.framebufferTexture2D(l.FRAMEBUFFER,c,s,a,0);else throw Error(`Unknown depthTexture format`)}function Se(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer)if(n)for(let n=0;n<6;n++)xe(t.__webglFramebuffer[n],e,n);else{let n=e.texture.mipmaps;n&&n.length>0?xe(t.__webglFramebuffer[0],e,0):xe(t.__webglFramebuffer,e,0)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),be(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else{let n=e.texture.mipmaps;if(n&&n.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),be(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}}d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ce(e,t,n){let r=f.get(e);t!==void 0&&ye(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Se(e)}function we(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,P);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&ke(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=A(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Oe(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),be(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),pe(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)ye(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else ye(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);D(t)&&O(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),pe(o,r),ye(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),D(r)&&O(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),pe(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)ye(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else ye(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);D(t)&&O(i),d.unbindTexture()}e.depthBuffer&&Se(e)}function Te(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(D(r)){let t=k(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),O(t),d.unbindTexture()}}}let Ee=[],De=[];function R(e){if(e.samples>0){if(ke(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer);let c=e.texture.mipmaps;c&&c.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(Ee.length=0,De.length=0,Ee.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.resolveDepthBuffer===!1&&(Ee.push(a),De.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,De)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Ee))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.resolveDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Oe(e){return Math.min(p.maxSamples,e.samples)}function ke(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Ae(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function z(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(vt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&B(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):V(`WebGLTextures: Unsupported texture color space:`,n)),t}function je(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ie,this.resetTextureUnits=ne,this.getTextureUnits=re,this.setTextureUnits=L,this.setTexture2D=oe,this.setTexture2DArray=se,this.setTexture3D=ce,this.setTextureCube=le,this.rebindTextures=Ce,this.setupRenderTarget=we,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=R,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ke,this.isReversedDepthBuffer=function(){return d.buffers.depth.getReversed()}}function nu(e,t){function n(n,r=``){let i,a=vt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var ru=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,au=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ni(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Aa({vertexShader:ru,fragmentShader:iu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vr(new xa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ou=class extends et{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new au,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new H,k=null,A=new bo;A.viewport=new kt;let j=new bo;j.viewport=new kt;let M=[A,j],N=new Ao,P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new dn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new dn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new dn,C[e]=t),t.getHandSpace()};function I(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,I),r.removeEventListener(`selectstart`,I),r.removeEventListener(`selectend`,I),r.removeEventListener(`squeeze`,I),r.removeEventListener(`squeezestart`,I),r.removeEventListener(`squeezeend`,I),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,te);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}P=null,F=null,_.reset();for(let e in v)delete v[e];e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&B(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,I),r.addEventListener(`selectstart`,I),r.addEventListener(`selectend`,I),r.addEventListener(`squeeze`,I),r.addEventListener(`squeezestart`,I),r.addEventListener(`squeezeend`,I),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,te),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new jt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new ei(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new jt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function te(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ne=new U,re=new U;function L(e,t,n){ne.setFromMatrixPosition(t.matrixWorld),re.setFromMatrixPosition(n.matrixWorld);let r=ne.distanceTo(re),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ie(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),N.near=j.near=A.near=t,N.far=j.far=A.far=n,(P!==N.near||F!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),P=N.near,F=N.far),N.layers.mask=e.layers.mask|6,A.layers.mask=N.layers.mask&-5,j.layers.mask=N.layers.mask&-3;let i=e.parent,a=N.cameras;ie(N,i);for(let e=0;e<a.length;e++)ie(a[e],i);a.length===2?L(N,A,j):N.projectionMatrix.copy(A.projectionMatrix),ae(e,N,i)};function ae(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=rt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&p===null))return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(N)},this.getCameraTexture=function(e){return v[e]};let oe=null;function se(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==N.cameras.length&&(N.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=M[n];o===void 0&&(o=new bo,o.layers.enable(n),o.viewport=new kt,M[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(N.matrix.copy(o.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),i===!0&&N.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new ni,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}oe&&oe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let ce=new Qo;ce.setAnimationLoop(se),this.setAnimationLoop=function(e){oe=e},this.dispose=function(){}}},su=new Pt,cu=new pt;cu.set(-1,0,0,0,1,0,0,0,1);function lu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ea(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(su.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(cu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function uu(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return V(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):ArrayBuffer.isView(o)?i.__data.set(new o.constructor(o.buffer,o.byteOffset,i.__data.length)):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:ArrayBuffer.isView(i)?r[a]=i.slice():r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?B(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):B(`WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var du=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fu=null;function pu(){return fu===null&&(fu=new Wr(du,16,16,k,g),fu.name=`DFG_LUT`,fu.minFilter=o,fu.magFilter=o,fu.wrapS=t,fu.wrapT=t,fu.generateMipmaps=!1,fu.needsUpdate=!0),fu}var mu=class{constructor(e={}){let{canvas:t=Ke(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([j,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D=new U,k=null,M=null,N=[],P=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,ee=!1,te=null;this._outputColorSpace=Ie;let ne=0,re=0,L=null,ie=-1,ae=null,oe=new kt,se=new kt,ce=null,le=new gn(0),ue=0,de=t.width,fe=t.height,pe=1,me=null,he=null,ge=new kt(0,0,de,fe),_e=new kt(0,0,de,fe),ve=!1,ye=new Qr,be=!1,xe=!1,Se=new Pt,Ce=new U,we=new kt,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ee=!1;function De(){return L===null?pe:1}let R=n;function Oe(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r184`),t.addEventListener(`webglcontextlost`,it,!1),t.addEventListener(`webglcontextrestored`,at,!1),t.addEventListener(`webglcontextcreationerror`,ot,!1),R===null){let t=`webgl2`;if(R=Oe(t,e),R===null)throw Oe(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw V(`WebGLRenderer: `+e.message),e}let ke,Ae,z,je,Me,Ne,Pe,Fe,Le,Re,ze,Be,Ve,Ue,We,Ge,qe,Je,Xe,Ze,$e,et,tt;function nt(){ke=new Ms(R),ke.init(),$e=new nu(R,ke),Ae=new cs(R,ke,e,$e),z=new eu(R,ke),Ae.reversedDepthBuffer&&h&&z.buffers.depth.setReversed(!0),je=new Fs(R),Me=new Pl,Ne=new tu(R,ke,z,Me,Ae,$e,je),Pe=new js(I),Fe=new $o(R),et=new os(R,Fe),Le=new Ns(R,Fe,je,et),Re=new Ls(R,Le,Fe,et,je),Je=new Is(R,Ae,Ne),We=new ls(Me),ze=new Nl(I,Pe,ke,Ae,et,We),Be=new lu(I,Me),Ve=new Rl,Ue=new Gl(ke),qe=new as(I,Pe,z,Re,x,s),Ge=new $l(I,Re,Ae),tt=new uu(R,je,Ae,z),Xe=new ss(R,ke,je),Ze=new Ps(R,ke,je),je.programs=ze.programs,I.capabilities=Ae,I.extensions=ke,I.properties=Me,I.renderLists=Ve,I.shadowMap=Ge,I.state=z,I.info=je}nt(),S!==1009&&(F=new zs(S,t.width,t.height,r,i));let rt=new ou(I,R);this.xr=rt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let e=ke.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ke.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(e){e!==void 0&&(pe=e,this.setSize(de,fe,!1))},this.getSize=function(e){return e.set(de,fe)},this.setSize=function(e,n,r=!0){if(rt.isPresenting){B(`WebGLRenderer: Can't change size while VR device is presenting.`);return}de=e,fe=n,t.width=Math.floor(e*pe),t.height=Math.floor(n*pe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(de*pe,fe*pe).floor()},this.setDrawingBufferSize=function(e,n,r){de=e,fe=n,pe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009){V(`THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){B(`THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}F.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(oe)},this.getViewport=function(e){return e.copy(ge)},this.setViewport=function(e,t,n,r){e.isVector4?ge.set(e.x,e.y,e.z,e.w):ge.set(e,t,n,r),z.viewport(oe.copy(ge).multiplyScalar(pe).round())},this.getScissor=function(e){return e.copy(_e)},this.setScissor=function(e,t,n,r){e.isVector4?_e.set(e.x,e.y,e.z,e.w):_e.set(e,t,n,r),z.scissor(se.copy(_e).multiplyScalar(pe).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(e){z.setScissorTest(ve=e)},this.setOpaqueSort=function(e){me=e},this.setTransparentSort=function(e){he=e},this.getClearColor=function(e){return e.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(L!==null){let t=L.texture.format;e=C.has(t)}if(e){let e=L.texture.type,t=w.has(e),n=qe.getClearColor(),r=qe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,R.clearBufferuiv(R.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,R.clearBufferiv(R.COLOR,0,E))}else r|=R.COLOR_BUFFER_BIT}t&&(r|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&R.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),te=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,it,!1),t.removeEventListener(`webglcontextrestored`,at,!1),t.removeEventListener(`webglcontextcreationerror`,ot,!1),qe.dispose(),Ve.dispose(),Ue.dispose(),Me.dispose(),Pe.dispose(),Re.dispose(),et.dispose(),tt.dispose(),ze.dispose(),rt.dispose(),rt.removeEventListener(`sessionstart`,ft),rt.removeEventListener(`sessionend`,pt),mt.stop()};function it(e){e.preventDefault(),Ye(`WebGLRenderer: Context Lost.`),ee=!0}function at(){Ye(`WebGLRenderer: Context Restored.`),ee=!1;let e=je.autoReset,t=Ge.enabled,n=Ge.autoUpdate,r=Ge.needsUpdate,i=Ge.type;nt(),je.autoReset=e,Ge.enabled=t,Ge.autoUpdate=n,Ge.needsUpdate=r,Ge.type=i}function ot(e){V(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function st(e){let t=e.target;t.removeEventListener(`dispose`,st),ct(t)}function ct(e){lt(e),Me.remove(e)}function lt(e){let t=Me.get(e).programs;t!==void 0&&(t.forEach(function(e){ze.releaseProgram(e)}),e.isShaderMaterial&&ze.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Te);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=Tt(e,t,n,r,i);z.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Le.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;et.setup(i,r,s,n,c);let h,g=Xe;if(c!==null&&(h=Fe.get(c),g=Ze,g.setIndex(h)),i.isMesh)r.wireframe===!0?(z.setLineWidth(r.wireframeLinewidth*De()),g.setMode(R.LINES)):g.setMode(R.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),z.setLineWidth(e*De()),i.isLineSegments?g.setMode(R.LINES):i.isLineLoop?g.setMode(R.LINE_LOOP):g.setMode(R.LINE_STRIP)}else i.isPoints?g.setMode(R.POINTS):i.isSprite&&g.setMode(R.TRIANGLES);if(i.isBatchedMesh)if(ke.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Fe.get(c).bytesPerElement:1,o=Me.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(R,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function H(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,xt(e,t,n),e.side=0,e.needsUpdate=!0,xt(e,t,n),e.side=2):xt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),M=Ue.get(n),M.init(t),P.push(M),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),M.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];H(a,n,e),r.add(a)}else H(t,n,e),r.add(t)}),M=P.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){Me.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}ke.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ut=null;function dt(e){ut&&ut(e)}function ft(){mt.stop()}function pt(){mt.start()}let mt=new Qo;mt.setAnimationLoop(dt),typeof self<`u`&&mt.setContext(self),this.setAnimationLoop=function(e){ut=e,rt.setAnimationLoop(e),e===null?mt.stop():mt.start()},rt.addEventListener(`sessionstart`,ft),rt.addEventListener(`sessionend`,pt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){V(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ee===!0)return;te!==null&&te.renderStart(e,t);let n=rt.enabled===!0&&rt.isPresenting===!0,r=F!==null&&(L===null||n)&&F.begin(I,L);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(t),t=rt.getCamera()),e.isScene===!0&&e.onBeforeRender(I,e,t,L),M=Ue.get(e,P.length),M.init(t),M.state.textureUnits=Ne.getTextureUnits(),P.push(M),Se.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ye.setFromProjectionMatrix(Se,He,t.reversedDepth),xe=this.localClippingEnabled,be=We.init(this.clippingPlanes,xe),k=Ve.get(e,N.length),k.init(),N.push(k),rt.enabled===!0&&rt.isPresenting===!0){let e=I.xr.getDepthSensingMesh();e!==null&&ht(e,t,-1/0,I.sortObjects)}ht(e,t,0,I.sortObjects),k.finish(),I.sortObjects===!0&&k.sort(me,he),Ee=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,Ee&&qe.addToRenderList(k,e),this.info.render.frame++,be===!0&&We.beginShadows();let i=M.state.shadowsArray;if(Ge.render(i,e,t),be===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),(r&&F.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(M.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];_t(n,r,e,a)}Ee&&qe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];gt(k,e,n,n.viewport)}}else r.length>0&&_t(n,r,e,t),Ee&&qe.render(e),gt(k,e,t)}L!==null&&re===0&&(Ne.updateMultisampleRenderTarget(L),Ne.updateRenderTargetMipmap(L)),r&&F.end(I),e.isScene===!0&&e.onAfterRender(I,e,t),et.resetDefaultState(),ie=-1,ae=null,P.pop(),P.length>0?(M=P[P.length-1],Ne.setTextureUnits(M.state.textureUnits),be===!0&&We.setGlobalState(I.clippingPlanes,M.state.camera)):M=null,N.pop(),k=N.length>0?N[N.length-1]:null,te!==null&&te.renderEnd()};function ht(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)M.pushLightProbeGrid(e);else if(e.isLight)M.pushLight(e),e.castShadow&&M.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||ye.intersectsSprite(e)){r&&we.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Se);let t=Re.update(e),i=e.material;i.visible&&k.push(e,t,i,n,we.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||ye.intersectsObject(e))){let t=Re.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),we.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),we.copy(e.boundingSphere.center)),we.applyMatrix4(e.matrixWorld).applyMatrix4(Se)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&k.push(e,t,s,n,we.z,o)}}else i.visible&&k.push(e,t,i,n,we.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)ht(i[e],t,n,r)}function gt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;M.setupLightsView(n),be===!0&&We.setGlobalState(I.clippingPlanes,n),r&&z.viewport(oe.copy(r)),i.length>0&&yt(i,t,n),a.length>0&&yt(a,t,n),o.length>0&&yt(o,t,n),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function _t(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[r.id]===void 0){let e=ke.has(`EXT_color_buffer_half_float`)||ke.has(`EXT_color_buffer_float`);M.state.transmissionRenderTarget[r.id]=new jt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Ae.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace})}let a=M.state.transmissionRenderTarget[r.id],o=r.viewport||oe;a.setSize(o.z*I.transmissionResolutionScale,o.w*I.transmissionResolutionScale);let s=I.getRenderTarget(),u=I.getActiveCubeFace(),d=I.getActiveMipmapLevel();I.setRenderTarget(a),I.getClearColor(le),ue=I.getClearAlpha(),ue<1&&I.setClearColor(16777215,.5),I.clear(),Ee&&qe.render(n);let f=I.toneMapping;I.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),M.setupLightsView(r),be===!0&&We.setGlobalState(I.clippingPlanes,r),yt(e,n,r),Ne.updateMultisampleRenderTarget(a),Ne.updateRenderTargetMipmap(a),ke.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,bt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ne.updateMultisampleRenderTarget(a),Ne.updateRenderTargetMipmap(a))}I.setRenderTarget(s,u,d),I.setClearColor(le,ue),p!==void 0&&(r.viewport=p),I.toneMapping=f}function yt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&bt(o,t,n,s,l,c)}}function bt(e,t,n,r,i,a){e.onBeforeRender(I,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(I,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,I.renderBufferDirect(n,t,r,i,e,a),i.side=2):I.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(I,t,n,r,i,a)}function xt(e,t,n){t.isScene!==!0&&(t=Te);let r=Me.get(e),i=M.state.lights,a=M.state.shadowsArray,o=i.state.version,s=ze.getParameters(e,i.state,a,t,n,M.state.lightProbeGridArray),c=ze.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Pe.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,st),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Ct(e,s),d}else s.uniforms=ze.getUniforms(e),te!==null&&e.isNodeMaterial&&te.build(e,n,s),e.onBeforeCompile(s,I),d=ze.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=We.uniform),Ct(e,s),r.needsLights=Dt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=M.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function St(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Kc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ct(e,t){let n=Me.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function wt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];D.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(D))return n}return null}function Tt(e,t,n,r,i){t.isScene!==!0&&(t=Te),Ne.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=L===null?I.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:vt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Pe.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(h=I.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=Me.get(r),y=M.state.lights;if(be===!0&&(xe===!0||e!==ae)){let t=e===ae&&r.id===ie;We.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==We.numPlanes||v.numIntersection!==We.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=M.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=xt(r,t,i),te&&r.isNodeMaterial&&te.onUpdateProgram(r,x,v));let S=!1,C=!1,w=!1,T=x.getUniforms(),E=v.uniforms;if(z.useProgram(x.program)&&(S=!0,C=!0,w=!0),r.id!==ie&&(ie=r.id,C=!0),v.needsLights){let e=wt(M.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||ae!==e){z.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),T.setValue(R,`projectionMatrix`,e.projectionMatrix),T.setValue(R,`viewMatrix`,e.matrixWorldInverse);let t=T.map.cameraPosition;t!==void 0&&t.setValue(R,Ce.setFromMatrixPosition(e.matrixWorld)),Ae.logarithmicDepthBuffer&&T.setValue(R,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&T.setValue(R,`isOrthographic`,e.isOrthographicCamera===!0),ae!==e&&(ae=e,C=!0,w=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&T.setValue(R,`directionalShadowMap`,y.state.directionalShadowMap,Ne),y.state.spotShadowMap.length>0&&T.setValue(R,`spotShadowMap`,y.state.spotShadowMap,Ne),y.state.pointShadowMap.length>0&&T.setValue(R,`pointShadowMap`,y.state.pointShadowMap,Ne)),i.isSkinnedMesh){T.setOptional(R,i,`bindMatrix`),T.setOptional(R,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),T.setValue(R,`boneTexture`,e.boneTexture,Ne))}i.isBatchedMesh&&(T.setOptional(R,i,`batchingTexture`),T.setValue(R,`batchingTexture`,i._matricesTexture,Ne),T.setOptional(R,i,`batchingIdTexture`),T.setValue(R,`batchingIdTexture`,i._indirectTexture,Ne),T.setOptional(R,i,`batchingColorTexture`),i._colorsTexture!==null&&T.setValue(R,`batchingColorTexture`,i._colorsTexture,Ne));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Je.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,T.setValue(R,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(E.envMapIntensity.value=t.environmentIntensity),E.dfgLUT!==void 0&&(E.dfgLUT.value=pu()),C){if(T.setValue(R,`toneMappingExposure`,I.toneMappingExposure),v.needsLights&&Et(E,w),a&&r.fog===!0&&Be.refreshFogUniforms(E,a),Be.refreshMaterialUniforms(E,r,pe,fe,M.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;E.probesSH.value=e.texture,E.probesMin.value.copy(e.boundingBox.min),E.probesMax.value.copy(e.boundingBox.max),E.probesResolution.value.copy(e.resolution)}Kc.upload(R,St(v),E,Ne)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Kc.upload(R,St(v),E,Ne),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&T.setValue(R,`center`,i.center),T.setValue(R,`modelViewMatrix`,i.modelViewMatrix),T.setValue(R,`normalMatrix`,i.normalMatrix),T.setValue(R,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];tt.update(n,x),tt.bind(n,x)}}return x}function Et(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Dt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(e,t,n){let r=Me.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),Me.get(e.texture).__webglTexture=t,Me.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=Me.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let Ot=R.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){L=e,ne=t,re=n;let r=null,i=!1,a=!1;if(e){let o=Me.get(e);if(o.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(R.FRAMEBUFFER,o.__webglFramebuffer),oe.copy(e.viewport),se.copy(e.scissor),ce=e.scissorTest,z.viewport(oe),z.scissor(se),z.setScissorTest(ce),ie=-1;return}else if(o.__webglFramebuffer===void 0)Ne.setupRenderTarget(e);else if(o.__hasExternalTextures)Ne.rebindTextures(e,Me.get(e.texture).__webglTexture,Me.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&Me.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);Ne.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=Me.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ne.useMultisampledRTT(e)===!1?Me.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,oe.copy(e.viewport),se.copy(e.scissor),ce=e.scissorTest}else oe.copy(ge).multiplyScalar(pe).floor(),se.copy(_e).multiplyScalar(pe).floor(),ce=ve;if(n!==0&&(r=Ot),z.bindFramebuffer(R.FRAMEBUFFER,r)&&z.drawBuffers(e,r),z.viewport(oe),z.scissor(se),z.setScissorTest(ce),i){let r=Me.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=Me.get(e.textures[t]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=Me.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,t.__webglTexture,n)}ie=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=Me.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){z.bindFramebuffer(R.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s),!Ae.textureFormatReadable(c)){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Ae.textureTypeReadable(l)){V(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&R.readPixels(t,n,r,i,$e.convert(c),$e.convert(l),a)}finally{let e=L===null?null:Me.get(L).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=Me.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){z.bindFramebuffer(R.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s),!Ae.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Ae.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,d),R.bufferData(R.PIXEL_PACK_BUFFER,a.byteLength,R.STREAM_READ),R.readPixels(t,n,r,i,$e.convert(l),$e.convert(u),0);let f=L===null?null:Me.get(L).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,f);let p=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Qe(R,p,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,d),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,a),R.deleteBuffer(d),R.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ne.setTexture2D(e,0),R.copyTexSubImage2D(R.TEXTURE_2D,n,0,0,o,s,i,a),z.unbindTexture()};let At=R.createFramebuffer(),Mt=R.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=$e.convert(t.format),_=$e.convert(t.type),v;t.isData3DTexture?(Ne.setTexture3D(t,0),v=R.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ne.setTexture2DArray(t,0),v=R.TEXTURE_2D_ARRAY):(Ne.setTexture2D(t,0),v=R.TEXTURE_2D),z.activeTexture(R.TEXTURE0),z.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,t.flipY),z.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),z.pixelStorei(R.UNPACK_ALIGNMENT,t.unpackAlignment);let y=z.getParameter(R.UNPACK_ROW_LENGTH),b=z.getParameter(R.UNPACK_IMAGE_HEIGHT),x=z.getParameter(R.UNPACK_SKIP_PIXELS),S=z.getParameter(R.UNPACK_SKIP_ROWS),C=z.getParameter(R.UNPACK_SKIP_IMAGES);z.pixelStorei(R.UNPACK_ROW_LENGTH,h.width),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,h.height),z.pixelStorei(R.UNPACK_SKIP_PIXELS,l),z.pixelStorei(R.UNPACK_SKIP_ROWS,u),z.pixelStorei(R.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=Me.get(e),r=Me.get(t),h=Me.get(n.__renderTarget),g=Me.get(r.__renderTarget);z.bindFramebuffer(R.READ_FRAMEBUFFER,h.__webglFramebuffer),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Me.get(e).__webglTexture,i,d+n),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Me.get(t).__webglTexture,a,m+n)),R.blitFramebuffer(l,u,o,s,f,p,o,s,R.DEPTH_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||Me.has(e)){let n=Me.get(e),r=Me.get(t);z.bindFramebuffer(R.READ_FRAMEBUFFER,At),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,Mt);for(let e=0;e<c;e++)w?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,n.__webglTexture,i),T?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,r.__webglTexture,a),i===0?T?R.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):R.copyTexSubImage2D(v,a,f,p,l,u,o,s):R.blitFramebuffer(l,u,o,s,f,p,o,s,R.COLOR_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?R.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h);z.pixelStorei(R.UNPACK_ROW_LENGTH,y),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,b),z.pixelStorei(R.UNPACK_SKIP_PIXELS,x),z.pixelStorei(R.UNPACK_SKIP_ROWS,S),z.pixelStorei(R.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&R.generateMipmap(v),z.unbindTexture()},this.initRenderTarget=function(e){Me.get(e).__webglFramebuffer===void 0&&Ne.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ne.setTextureCube(e,0):e.isData3DTexture?Ne.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ne.setTexture2DArray(e,0):Ne.setTexture2D(e,0),z.unbindTexture()},this.resetState=function(){ne=0,re=0,L=null,z.reset(),et.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return He}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}},hu=Uint8Array,gu=Uint16Array,_u=Int32Array,vu=new hu([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),yu=new hu([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),bu=new hu([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),xu=function(e,t){for(var n=new gu(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new _u(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return{b:n,r:i}},Su=xu(vu,2),Cu=Su.b,wu=Su.r;Cu[28]=258,wu[258]=28;var Tu=xu(yu,0),Eu=Tu.b;Tu.r;for(var Du=new gu(32768),Ou=0;Ou<32768;++Ou){var ku=(Ou&43690)>>1|(Ou&21845)<<1;ku=(ku&52428)>>2|(ku&13107)<<2,ku=(ku&61680)>>4|(ku&3855)<<4,Du[Ou]=((ku&65280)>>8|(ku&255)<<8)>>1}for(var Au=(function(e,t,n){for(var r=e.length,i=0,a=new gu(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new gu(t);for(i=1;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new gu(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[Du[d]>>c]=l}else for(s=new gu(r),i=0;i<r;++i)e[i]&&(s[i]=Du[o[e[i]-1]++]>>15-e[i]);return s}),ju=new hu(288),Ou=0;Ou<144;++Ou)ju[Ou]=8;for(var Ou=144;Ou<256;++Ou)ju[Ou]=9;for(var Ou=256;Ou<280;++Ou)ju[Ou]=7;for(var Ou=280;Ou<288;++Ou)ju[Ou]=8;for(var Mu=new hu(32),Ou=0;Ou<32;++Ou)Mu[Ou]=5;var Nu=Au(ju,9,1),Pu=Au(Mu,5,1),Fu=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},Iu=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},Lu=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},Ru=function(e){return(e+7)/8|0},zu=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new hu(e.subarray(t,n))},Bu=[`unexpected EOF`,`invalid block type`,`invalid length/literal`,`invalid distance`,`stream finished`,`no stream handler`,,`no callback`,`invalid UTF-8 data`,`extra field too long`,`date not in range 1980-2099`,`filename too long`,`stream finishing`,`invalid zip data`],Vu=function(e,t,n){var r=Error(t||Bu[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,Vu),!n)throw r;return r},Hu=function(e,t,n,r){var i=e.length,a=r?r.length:0;if(!i||t.f&&!t.l)return n||new hu(0);var o=!n,s=o||t.i!=2,c=t.i;o&&(n=new hu(i*3));var l=function(e){var t=n.length;if(e>t){var r=new hu(Math.max(t*2,e));r.set(n),n=r}},u=t.f||0,d=t.p||0,f=t.b||0,p=t.l,m=t.d,h=t.m,g=t.n,_=i*8;do{if(!p){u=Iu(e,d,1);var v=Iu(e,d+1,3);if(d+=3,!v){var y=Ru(d)+4,b=e[y-4]|e[y-3]<<8,x=y+b;if(x>i){c&&Vu(0);break}s&&l(f+b),n.set(e.subarray(y,x),f),t.b=f+=b,t.p=d=x*8,t.f=u;continue}else if(v==1)p=Nu,m=Pu,h=9,g=5;else if(v==2){var S=Iu(e,d,31)+257,C=Iu(e,d+10,15)+4,w=S+Iu(e,d+5,31)+1;d+=14;for(var T=new hu(w),E=new hu(19),D=0;D<C;++D)E[bu[D]]=Iu(e,d+D*3,7);d+=C*3;for(var O=Fu(E),k=(1<<O)-1,A=Au(E,O,1),D=0;D<w;){var j=A[Iu(e,d,k)];d+=j&15;var y=j>>4;if(y<16)T[D++]=y;else{var M=0,N=0;for(y==16?(N=3+Iu(e,d,3),d+=2,M=T[D-1]):y==17?(N=3+Iu(e,d,7),d+=3):y==18&&(N=11+Iu(e,d,127),d+=7);N--;)T[D++]=M}}var P=T.subarray(0,S),F=T.subarray(S);h=Fu(P),g=Fu(F),p=Au(P,h,1),m=Au(F,g,1)}else Vu(1);if(d>_){c&&Vu(0);break}}s&&l(f+131072);for(var I=(1<<h)-1,ee=(1<<g)-1,te=d;;te=d){var M=p[Lu(e,d)&I],ne=M>>4;if(d+=M&15,d>_){c&&Vu(0);break}if(M||Vu(2),ne<256)n[f++]=ne;else if(ne==256){te=d,p=null;break}else{var re=ne-254;if(ne>264){var D=ne-257,L=vu[D];re=Iu(e,d,(1<<L)-1)+Cu[D],d+=L}var ie=m[Lu(e,d)&ee],ae=ie>>4;ie||Vu(3),d+=ie&15;var F=Eu[ae];if(ae>3){var L=yu[ae];F+=Lu(e,d)&(1<<L)-1,d+=L}if(d>_){c&&Vu(0);break}s&&l(f+131072);var oe=f+re;if(f<F){var se=a-F,ce=Math.min(F,oe);for(se+f<0&&Vu(3);f<ce;++f)n[f]=r[se+f]}for(;f<oe;++f)n[f]=n[f-F]}}t.l=p,t.p=te,t.b=f,t.f=u,p&&(u=1,t.m=h,t.d=m,t.n=g)}while(!u);return f!=n.length&&o?zu(n,0,f):n.subarray(0,f)},Uu=new hu(0),Wu=function(e,t){return((e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&Vu(6,`invalid zlib data`),(e[1]>>5&1)==+!t&&Vu(6,`invalid zlib data: `+(e[1]&32?`need`:`unexpected`)+` dictionary`),(e[1]>>3&4)+2};function Gu(e,t){return Hu(e.subarray(Wu(e,t&&t.dictionary),-4),{i:2},t&&t.out,t&&t.dictionary)}var Ku=typeof TextDecoder<`u`&&new TextDecoder;try{Ku.decode(Uu,{stream:!0})}catch{}var qu=class extends ao{constructor(e){super(e),this.type=g,this.outputFormat=w,this.part=0}parse(e){let t=65536,n=8192,r=65537,i=16384,a=i-1,o=65535,s=2.7182818**2.2,c=null;function l(e,n){let r=0;for(let i=0;i<t;++i)(i==0||e[i>>3]&1<<(i&7))&&(n[r++]=i);let i=r-1;for(;r<t;)n[r++]=0;return i}function u(e){for(let t=0;t<i;t++)e[t]={},e[t].len=0,e[t].lit=0,e[t].p=null}let d={l:0,c:0,lc:0};function f(e,t,n,r,i){for(;n<e;)t=t<<8|Ce(r,i),n+=8;n-=e,d.l=t>>n&(1<<e)-1,d.c=t,d.lc=n}let p=Array(59);function m(e){for(let e=0;e<=58;++e)p[e]=0;for(let t=0;t<r;++t)p[e[t]]+=1;let t=0;for(let e=58;e>0;--e){let n=t+p[e]>>1;p[e]=t,t=n}for(let t=0;t<r;++t){let n=e[t];n>0&&(e[t]=n|p[n]++<<6)}}function _(e,t,n,r,i,a){let o=t,s=0,c=0;for(;r<=i;r++){if(o.value-t.value>n)return!1;f(6,s,c,e,o);let l=d.l;if(s=d.c,c=d.lc,a[r]=l,l==63){if(o.value-t.value>n)throw Error(`Something wrong with hufUnpackEncTable`);f(8,s,c,e,o);let l=d.l+6;if(s=d.c,c=d.lc,r+l>i+1)throw Error(`Something wrong with hufUnpackEncTable`);for(;l--;)a[r++]=0;r--}else if(l>=59){let e=l-59+2;if(r+e>i+1)throw Error(`Something wrong with hufUnpackEncTable`);for(;e--;)a[r++]=0;r--}}m(a)}function v(e){return e&63}function y(e){return e>>6}function b(e,t,n,r){for(;t<=n;t++){let n=y(e[t]),i=v(e[t]);if(n>>i)throw Error(`Invalid table entry`);if(i>14){let e=r[n>>i-14];if(e.len)throw Error(`Invalid table entry`);if(e.lit++,e.p){let t=e.p;e.p=Array(e.lit);for(let n=0;n<e.lit-1;++n)e.p[n]=t[n]}else e.p=[,];e.p[e.lit-1]=t}else if(i){let e=0;for(let a=1<<14-i;a>0;a--){let a=r[(n<<14-i)+e];if(a.len||a.p)throw Error(`Invalid table entry`);a.len=i,a.lit=t,e++}}}return!0}let x={c:0,lc:0};function S(e,t,n,r){e=e<<8|Ce(n,r),t+=8,x.c=e,x.lc=t}let C={c:0,lc:0};function T(e,t,n,r,i,a,o,s,c){if(e==t){r<8&&(S(n,r,i,a),n=x.c,r=x.lc),r-=8;let e=n>>r;if(e=new Uint8Array([e])[0],s.value+e>c)return!1;let t=o[s.value-1];for(;e-->0;)o[s.value++]=t}else if(s.value<c)o[s.value++]=e;else return!1;C.c=n,C.lc=r}function E(e){return e&65535}function O(e){let t=E(e);return t>32767?t-65536:t}let A={a:0,b:0};function j(e,t){let n=O(e),r=O(t),i=n+(r&1)+(r>>1),a=i,o=i-r;A.a=a,A.b=o}function M(e,t){let n=E(e),r=E(t),i=n-(r>>1)&o;A.a=r+i-32768&o,A.b=i}function N(e,t,n,r,i,a,o){let s=o<16384,c=n>i?i:n,l=1,u,d;for(;l<=c;)l<<=1;for(l>>=1,u=l,l>>=1;l>=1;){d=0;let o=d+a*(i-u),c=a*l,f=a*u,p=r*l,m=r*u,h,g,_,v;for(;d<=o;d+=f){let i=d,a=d+r*(n-u);for(;i<=a;i+=m){let n=i+p,r=i+c,a=r+p;s?(j(e[i+t],e[r+t]),h=A.a,_=A.b,j(e[n+t],e[a+t]),g=A.a,v=A.b,j(h,g),e[i+t]=A.a,e[n+t]=A.b,j(_,v),e[r+t]=A.a,e[a+t]=A.b):(M(e[i+t],e[r+t]),h=A.a,_=A.b,M(e[n+t],e[a+t]),g=A.a,v=A.b,M(h,g),e[i+t]=A.a,e[n+t]=A.b,M(_,v),e[r+t]=A.a,e[a+t]=A.b)}if(n&l){let n=i+c;s?j(e[i+t],e[n+t]):M(e[i+t],e[n+t]),h=A.a,e[n+t]=A.b,e[i+t]=h}}if(i&l){let i=d,a=d+r*(n-u);for(;i<=a;i+=m){let n=i+p;s?j(e[i+t],e[n+t]):M(e[i+t],e[n+t]),h=A.a,e[n+t]=A.b,e[i+t]=h}}u=l,l>>=1}return d}function P(e,t,n,r,i,o,s,c,l){let u=0,d=0,f=s,p=Math.trunc(r.value+(i+7)/8);for(;r.value<p;)for(S(u,d,n,r),u=x.c,d=x.lc;d>=14;){let i=t[u>>d-14&a];if(i.len)d-=i.len,T(i.lit,o,u,d,n,r,c,l,f),u=C.c,d=C.lc;else{if(!i.p)throw Error(`hufDecode issues`);let t;for(t=0;t<i.lit;t++){let a=v(e[i.p[t]]);for(;d<a&&r.value<p;)S(u,d,n,r),u=x.c,d=x.lc;if(d>=a&&y(e[i.p[t]])==(u>>d-a&(1<<a)-1)){d-=a,T(i.p[t],o,u,d,n,r,c,l,f),u=C.c,d=C.lc;break}}if(t==i.lit)throw Error(`hufDecode issues`)}}let m=8-i&7;for(u>>=m,d-=m;d>0;){let e=t[u<<14-d&a];if(e.len)d-=e.len,T(e.lit,o,u,d,n,r,c,l,f),u=C.c,d=C.lc;else throw Error(`hufDecode issues`)}return!0}function F(e,t,n,a,o,s){let c={value:0},l=n.value,d=Se(t,n),f=Se(t,n);n.value+=4;let p=Se(t,n);if(n.value+=4,d<0||d>=r||f<0||f>=r)throw Error(`Something wrong with HUF_ENCSIZE`);let m=Array(r),h=Array(i);if(u(h),_(e,n,a-(n.value-l),d,f,m),p>8*(a-(n.value-l)))throw Error(`Something wrong with hufUncompress`);b(m,d,f,h),P(m,h,e,n,p,f,s,o,c)}function I(e,t,n){for(let r=0;r<n;++r)t[r]=e[t[r]]}function ee(e){for(let t=1;t<e.length;t++)e[t]=e[t-1]+e[t]-128}function te(e,t){let n=0,r=Math.floor((e.length+1)/2),i=0,a=e.length-1;for(;!(i>a||(t[i++]=e[n++],i>a));)t[i++]=e[r++]}function ne(e){let t=e.byteLength,n=[],r=0,i=new DataView(e);for(;t>0;){let e=i.getInt8(r++);if(e<0){let a=-e;t-=a+1;for(let e=0;e<a;e++)n.push(i.getUint8(r++))}else{let a=e;t-=2;let o=i.getUint8(r++);for(let e=0;e<a+1;e++)n.push(o)}}return n}function re(e,t,n,r,i,a){let o=new DataView(a.buffer),s=n[e.idx[0]].width,c=n[e.idx[0]].height,l=Math.floor(s/8),u=Math.ceil(s/8),d=Math.ceil(c/8),f=s-(u-1)*8,p=c-(d-1)*8,m={value:0},h=[,,,],g=[,,,],_=[,,,],v=[,,,],y=[,,,];for(let n=0;n<3;++n)y[n]=t[e.idx[n]],h[n]=n<1?0:h[n-1]+u*d,g[n]=new Float32Array(64),_[n]=new Uint16Array(64),v[n]=new Uint16Array(u*64);for(let t=0;t<d;++t){let a=8;t==d-1&&(a=p);let s=8;for(let e=0;e<u;++e){e==u-1&&(s=f);for(let e=0;e<3;++e)_[e].fill(0),_[e][0]=i[h[e]++],ie(m,r,_[e]),ae(_[e],g[e]),oe(g[e]);se(g);for(let t=0;t<3;++t)ce(g[t],v[t],e*64)}let c=0;for(let r=0;r<3;++r){let i=n[e.idx[r]].type;for(let e=8*t;e<8*t+a;++e){c=y[r][e];for(let t=0;t<l;++t){let n=t*64+(e&7)*8;o.setUint16(c+0*i,v[r][n+0],!0),o.setUint16(c+2*i,v[r][n+1],!0),o.setUint16(c+4*i,v[r][n+2],!0),o.setUint16(c+6*i,v[r][n+3],!0),o.setUint16(c+8*i,v[r][n+4],!0),o.setUint16(c+10*i,v[r][n+5],!0),o.setUint16(c+12*i,v[r][n+6],!0),o.setUint16(c+14*i,v[r][n+7],!0),c+=16*i}}if(l!=u)for(let e=8*t;e<8*t+a;++e){let t=y[r][e]+8*l*2*i,n=l*64+(e&7)*8;for(let e=0;e<s;++e)o.setUint16(t+e*2*i,v[r][n+e],!0)}}}let b=new Uint16Array(s);o=new DataView(a.buffer);for(let t=0;t<3;++t){n[e.idx[t]].decoded=!0;let r=n[e.idx[t]].type;if(n[t].type==2)for(let e=0;e<c;++e){let n=y[t][e];for(let e=0;e<s;++e)b[e]=o.getUint16(n+e*2*r,!0);for(let e=0;e<s;++e)o.setFloat32(n+e*2*r,R(b[e]),!0)}}}function L(e,t,n,r,i,a){let o=new DataView(a.buffer),s=n[e],c=s.width,l=s.height,u=Math.ceil(c/8),d=Math.ceil(l/8),f=Math.floor(c/8),p=c-(u-1)*8,m=l-(d-1)*8,h={value:0},g=0,_=new Float32Array(64),v=new Uint16Array(64),y=new Uint16Array(u*64);for(let n=0;n<d;++n){let a=8;n==d-1&&(a=m);for(let e=0;e<u;++e)v.fill(0),v[0]=i[g++],ie(h,r,v),ae(v,_),oe(_),ce(_,y,e*64);for(let r=8*n;r<8*n+a;++r){let n=t[e][r];for(let e=0;e<f;++e){let t=e*64+(r&7)*8;for(let e=0;e<8;++e)o.setUint16(n+e*2*s.type,y[t+e],!0);n+=16*s.type}if(u!=f){let e=f*64+(r&7)*8;for(let t=0;t<p;++t)o.setUint16(n+t*2*s.type,y[e+t],!0)}}}s.decoded=!0}function ie(e,t,n){let r,i=1;for(;i<64;)r=t[e.value],r==65280?i=64:r>>8==255?i+=r&255:(n[i]=r,i++),e.value++}function ae(e,t){t[0]=R(e[0]),t[1]=R(e[1]),t[2]=R(e[5]),t[3]=R(e[6]),t[4]=R(e[14]),t[5]=R(e[15]),t[6]=R(e[27]),t[7]=R(e[28]),t[8]=R(e[2]),t[9]=R(e[4]),t[10]=R(e[7]),t[11]=R(e[13]),t[12]=R(e[16]),t[13]=R(e[26]),t[14]=R(e[29]),t[15]=R(e[42]),t[16]=R(e[3]),t[17]=R(e[8]),t[18]=R(e[12]),t[19]=R(e[17]),t[20]=R(e[25]),t[21]=R(e[30]),t[22]=R(e[41]),t[23]=R(e[43]),t[24]=R(e[9]),t[25]=R(e[11]),t[26]=R(e[18]),t[27]=R(e[24]),t[28]=R(e[31]),t[29]=R(e[40]),t[30]=R(e[44]),t[31]=R(e[53]),t[32]=R(e[10]),t[33]=R(e[19]),t[34]=R(e[23]),t[35]=R(e[32]),t[36]=R(e[39]),t[37]=R(e[45]),t[38]=R(e[52]),t[39]=R(e[54]),t[40]=R(e[20]),t[41]=R(e[22]),t[42]=R(e[33]),t[43]=R(e[38]),t[44]=R(e[46]),t[45]=R(e[51]),t[46]=R(e[55]),t[47]=R(e[60]),t[48]=R(e[21]),t[49]=R(e[34]),t[50]=R(e[37]),t[51]=R(e[47]),t[52]=R(e[50]),t[53]=R(e[56]),t[54]=R(e[59]),t[55]=R(e[61]),t[56]=R(e[35]),t[57]=R(e[36]),t[58]=R(e[48]),t[59]=R(e[49]),t[60]=R(e[57]),t[61]=R(e[58]),t[62]=R(e[62]),t[63]=R(e[63])}function oe(e){let t=.5*Math.cos(3.14159/4),n=.5*Math.cos(3.14159/16),r=.5*Math.cos(3.14159/8),i=.5*Math.cos(3*3.14159/16),a=.5*Math.cos(5*3.14159/16),o=.5*Math.cos(3*3.14159/8),s=.5*Math.cos(7*3.14159/16),c=[,,,,],l=[,,,,],u=[,,,,],d=[,,,,];for(let f=0;f<8;++f){let p=f*8;c[0]=r*e[p+2],c[1]=o*e[p+2],c[2]=r*e[p+6],c[3]=o*e[p+6],l[0]=n*e[p+1]+i*e[p+3]+a*e[p+5]+s*e[p+7],l[1]=i*e[p+1]-s*e[p+3]-n*e[p+5]-a*e[p+7],l[2]=a*e[p+1]-n*e[p+3]+s*e[p+5]+i*e[p+7],l[3]=s*e[p+1]-a*e[p+3]+i*e[p+5]-n*e[p+7],u[0]=t*(e[p+0]+e[p+4]),u[3]=t*(e[p+0]-e[p+4]),u[1]=c[0]+c[3],u[2]=c[1]-c[2],d[0]=u[0]+u[1],d[1]=u[3]+u[2],d[2]=u[3]-u[2],d[3]=u[0]-u[1],e[p+0]=d[0]+l[0],e[p+1]=d[1]+l[1],e[p+2]=d[2]+l[2],e[p+3]=d[3]+l[3],e[p+4]=d[3]-l[3],e[p+5]=d[2]-l[2],e[p+6]=d[1]-l[1],e[p+7]=d[0]-l[0]}for(let f=0;f<8;++f)c[0]=r*e[16+f],c[1]=o*e[16+f],c[2]=r*e[48+f],c[3]=o*e[48+f],l[0]=n*e[8+f]+i*e[24+f]+a*e[40+f]+s*e[56+f],l[1]=i*e[8+f]-s*e[24+f]-n*e[40+f]-a*e[56+f],l[2]=a*e[8+f]-n*e[24+f]+s*e[40+f]+i*e[56+f],l[3]=s*e[8+f]-a*e[24+f]+i*e[40+f]-n*e[56+f],u[0]=t*(e[f]+e[32+f]),u[3]=t*(e[f]-e[32+f]),u[1]=c[0]+c[3],u[2]=c[1]-c[2],d[0]=u[0]+u[1],d[1]=u[3]+u[2],d[2]=u[3]-u[2],d[3]=u[0]-u[1],e[0+f]=d[0]+l[0],e[8+f]=d[1]+l[1],e[16+f]=d[2]+l[2],e[24+f]=d[3]+l[3],e[32+f]=d[3]-l[3],e[40+f]=d[2]-l[2],e[48+f]=d[1]-l[1],e[56+f]=d[0]-l[0]}function se(e){for(let t=0;t<64;++t){let n=e[0][t],r=e[1][t],i=e[2][t];e[0][t]=n+1.5747*i,e[1][t]=n-.1873*r-.4682*i,e[2][t]=n+1.8556*r}}function ce(e,t,n){for(let r=0;r<64;++r)t[n+r]=$n.toHalfFloat(le(e[r]))}function le(e){return e<=1?Math.sign(e)*Math.abs(e)**2.2:Math.sign(e)*s**(Math.abs(e)-1)}function ue(e){return new DataView(e.array.buffer,e.offset.value,e.size)}function de(e){let t=e.viewer.buffer.slice(e.offset.value,e.offset.value+e.size),n=new Uint8Array(ne(t)),r=new Uint8Array(n.length);return ee(n),te(n,r),new DataView(r.buffer)}function fe(e){let t=Gu(e.array.slice(e.offset.value,e.offset.value+e.size)),n=new Uint8Array(t.length);return ee(t),te(t,n),new DataView(n.buffer)}function pe(e){let r=e.viewer,i={value:e.offset.value},a=new Uint16Array(e.columns*e.lines*(e.inputChannels.length*e.type)),o=new Uint8Array(n),s=0,c=Array(e.inputChannels.length);for(let t=0,n=e.inputChannels.length;t<n;t++)c[t]={},c[t].start=s,c[t].end=c[t].start,c[t].nx=e.columns,c[t].ny=e.lines,c[t].size=e.type,s+=c[t].nx*c[t].ny*c[t].size;let u=Oe(r,i),d=Oe(r,i);if(d>=n)throw Error(`Something is wrong with PIZ_COMPRESSION BITMAP_SIZE`);if(u<=d)for(let e=0;e<d-u+1;e++)o[e+u]=we(r,i);let f=new Uint16Array(t),p=l(o,f),m=Se(r,i);F(e.array,r,i,m,a,s);for(let t=0;t<e.inputChannels.length;++t){let e=c[t];for(let n=0;n<c[t].size;++n)N(a,e.start+n,e.nx,e.size,e.ny,e.nx*e.size,p)}I(f,a,s);let h=0,g=new Uint8Array(a.buffer.byteLength);for(let t=0;t<e.lines;t++)for(let t=0;t<e.inputChannels.length;t++){let e=c[t],n=e.nx*e.size,r=new Uint8Array(a.buffer,e.end*2,n*2);g.set(r,h),h+=n*2,e.end+=n}return new DataView(g.buffer)}function me(e){let t=Gu(e.array.slice(e.offset.value,e.offset.value+e.size)),n=e.inputChannels.length*e.lines*e.columns*e.totalBytes,r=new ArrayBuffer(n),i=new DataView(r),a=0,o=0,s=[,,,,];for(let n=0;n<e.lines;n++)for(let n=0;n<e.inputChannels.length;n++){let r=0;switch(e.inputChannels[n].pixelType){case 1:s[0]=a,s[1]=s[0]+e.columns,a=s[1]+e.columns;for(let n=0;n<e.columns;++n){let e=t[s[0]++]<<8|t[s[1]++];r+=e,i.setUint16(o,r,!0),o+=2}break;case 2:s[0]=a,s[1]=s[0]+e.columns,s[2]=s[1]+e.columns,a=s[2]+e.columns;for(let n=0;n<e.columns;++n){let e=t[s[0]++]<<24|t[s[1]++]<<16|t[s[2]++]<<8;r+=e,i.setUint32(o,r,!0),o+=4}break}}return i}function he(e){let t=e.array,n=e.offset.value,r=e.columns,i=e.lines,a=e.inputChannels,o=e.totalBytes,s=et.compression===`B44A_COMPRESSION`,l=new Uint8Array(i*r*o),u=new Uint16Array(16),d=0;for(let e=0;e<a.length;e++){let f=a[e],p=f.pixelType*2,m=Math.ceil(r/f.xSampling),h=Math.ceil(i/f.ySampling),g=f.xSampling===1&&f.ySampling===1;if(f.pixelType!==1){for(let e=0;e<h;e++)if(g){let i=e*r*o+d*r;for(let e=0;e<m*p;e++)l[i+e]=t[n++]}else n+=m*p;d+=p;continue}let _=Math.ceil(m/4),v=Math.ceil(h/4);for(let e=0;e<v;e++)for(let a=0;a<_;a++){if(s&&t[n+2]>=52){let e=t[n]<<8|t[n+1],r=e&32768?e&32767:~e&65535;u.fill(r),n+=3}else{let e=t[n]<<8|t[n+1],r=t[n+2]>>2,i=32<<r,a=e+((t[n+2]<<4|t[n+3]>>4)&63)*(1<<r)-i&65535,o=a+((t[n+3]<<2|t[n+4]>>6)&63)*(1<<r)-i&65535,s=o+(t[n+4]&63)*(1<<r)-i&65535,c=e+(t[n+5]>>2&63)*(1<<r)-i&65535,l=a+((t[n+5]<<4|t[n+6]>>4)&63)*(1<<r)-i&65535,d=o+((t[n+6]<<2|t[n+7]>>6)&63)*(1<<r)-i&65535,f=s+(t[n+7]&63)*(1<<r)-i&65535,p=c+(t[n+8]>>2&63)*(1<<r)-i&65535,m=l+((t[n+8]<<4|t[n+9]>>4)&63)*(1<<r)-i&65535,h=d+((t[n+9]<<2|t[n+10]>>6)&63)*(1<<r)-i&65535,g=f+(t[n+10]&63)*(1<<r)-i&65535,_=[e,c,p,p+(t[n+11]>>2&63)*(1<<r)-i&65535,a,l,m,m+((t[n+11]<<4|t[n+12]>>4)&63)*(1<<r)-i&65535,o,d,h,h+((t[n+12]<<2|t[n+13]>>6)&63)*(1<<r)-i&65535,s,f,g,g+(t[n+13]&63)*(1<<r)-i&65535];for(let e=0;e<16;e++)u[e]=_[e]&32768?_[e]&32767:~_[e]&65535;n+=14}if(f.pLinear){if(c===null){c=new Uint16Array(65536);for(let e=0;e<65536;e++)if((e&31744)==31744||e>32768)c[e]=0;else{let t=R(e);c[e]=t<=0?0:$n.toHalfFloat(8*Math.log(t))}}for(let e=0;e<16;e++)u[e]=c[u[e]]}for(let t=0;t<4;t++){let n=e*4+t;if(!(n>=h))for(let e=0;e<4;e++){let s=a*4+e;if(s>=m)continue;let c=u[t*4+e];for(let e=0;e<f.ySampling;e++){let t=n*f.ySampling+e;if(!(t>=i))for(let e=0;e<f.xSampling;e++){let n=s*f.xSampling+e;if(n>=r)continue;let i=t*r*o+d*r+n*2;l[i]=c&255,l[i+1]=c>>8&255}}}}}d+=2}return new DataView(l.buffer)}function ge(e){let t=e.viewer,n={value:e.offset.value},r=new Uint8Array(e.columns*e.lines*(e.inputChannels.length*e.type*2)),i={version:Te(t,n),unknownUncompressedSize:Te(t,n),unknownCompressedSize:Te(t,n),acCompressedSize:Te(t,n),dcCompressedSize:Te(t,n),rleCompressedSize:Te(t,n),rleUncompressedSize:Te(t,n),rleRawSize:Te(t,n),totalAcUncompressedCount:Te(t,n),totalDcUncompressedCount:Te(t,n),acCompression:Te(t,n)};if(i.version<2)throw Error(`EXRLoader.parse: `+et.compression+` version `+i.version+` is unsupported`);let a=[],o=Oe(t,n)-2;for(;o>0;){let e=_e(t.buffer,n),r=we(t,n),i=r>>2&3,s=(r>>4)-1,c=new Int8Array([s])[0],l=we(t,n);a.push({name:e,index:c,type:l,compression:i}),o-=e.length+3}let s=et.channels,c=Array(e.inputChannels.length);for(let t=0;t<e.inputChannels.length;++t){let n=c[t]={},r=s[t];n.name=r.name,n.compression=0,n.decoded=!1,n.type=r.pixelType,n.pLinear=r.pLinear,n.width=e.columns,n.height=e.lines}let l={idx:[,,,]};for(let t=0;t<e.inputChannels.length;++t){let e=c[t],n=e.name.lastIndexOf(`.`),r=n>=0?e.name.substring(n+1):e.name;for(let n=0;n<a.length;++n){let i=a[n];r===i.name&&e.type===i.type&&(e.compression=i.compression,i.index>=0&&(l.idx[i.index]=t),e.offset=t)}}let u,d,f;if(i.acCompressedSize>0)switch(i.acCompression){case 0:u=new Uint16Array(i.totalAcUncompressedCount),F(e.array,t,n,i.acCompressedSize,u,i.totalAcUncompressedCount);break;case 1:let r=Gu(e.array.slice(n.value,n.value+i.totalAcUncompressedCount));u=new Uint16Array(r.buffer),n.value+=i.totalAcUncompressedCount;break}if(i.dcCompressedSize>0){let t={array:e.array,offset:n,size:i.dcCompressedSize};d=new Uint16Array(fe(t).buffer),n.value+=i.dcCompressedSize}i.rleRawSize>0&&(f=ne(Gu(e.array.slice(n.value,n.value+i.rleCompressedSize)).buffer),n.value+=i.rleCompressedSize);let p=0,m=Array(c.length);for(let e=0;e<m.length;++e)m[e]=[];for(let t=0;t<e.lines;++t)for(let t=0;t<c.length;++t)m[t].push(p),p+=c[t].width*e.type*2;l.idx[0]!==void 0&&c[l.idx[0]]&&re(l,m,c,u,d,r);for(let t=0;t<c.length;++t){let n=c[t];if(!n.decoded)switch(n.compression){case 2:let i=0,a=0;for(let o=0;o<e.lines;++o){let e=m[t][i];for(let t=0;t<n.width;++t){for(let t=0;t<2*n.type;++t)r[e++]=f[a+t*n.width*n.height];a++}i++}break;case 1:L(t,m,c,u,d,r);break;default:throw Error(`EXRLoader.parse: unsupported channel compression`)}}return new DataView(r.buffer)}function _e(e,t){let n=new Uint8Array(e),r=0;for(;n[t.value+r]!=0;)r+=1;let i=new TextDecoder().decode(n.slice(t.value,t.value+r));return t.value=t.value+r+1,i}function ve(e,t,n){let r=new TextDecoder().decode(new Uint8Array(e).slice(t.value,t.value+n));return t.value+=n,r}function ye(e,t){return[xe(e,t),Se(e,t)]}function be(e,t){return[Se(e,t),Se(e,t)]}function xe(e,t){let n=e.getInt32(t.value,!0);return t.value+=4,n}function Se(e,t){let n=e.getUint32(t.value,!0);return t.value+=4,n}function Ce(e,t){let n=e[t.value];return t.value+=1,n}function we(e,t){let n=e.getUint8(t.value);return t.value+=1,n}let Te=function(e,t){let n=Number(e.getBigInt64(t.value,!0));return t.value+=8,n};function Ee(e,t){let n=e.getFloat32(t.value,!0);return t.value+=4,n}function De(e,t){return $n.toHalfFloat(Ee(e,t))}function R(e){let t=(e&31744)>>10,n=e&1023;return(e>>15?-1:1)*(t?t===31?n?NaN:1/0:2**(t-15)*(1+n/1024):n/1024*6103515625e-14)}function Oe(e,t){let n=e.getUint16(t.value,!0);return t.value+=2,n}function ke(e,t){return R(Oe(e,t))}function Ae(e,t,n,r){let i=n.value,a=[];for(;n.value<i+r-1;){let r=_e(t,n),i=xe(e,n),o=we(e,n);n.value+=3;let s=xe(e,n),c=xe(e,n);a.push({name:r,pixelType:i,pLinear:o,xSampling:s,ySampling:c})}return n.value+=1,a}function z(e,t){return{redX:Ee(e,t),redY:Ee(e,t),greenX:Ee(e,t),greenY:Ee(e,t),blueX:Ee(e,t),blueY:Ee(e,t),whiteX:Ee(e,t),whiteY:Ee(e,t)}}function je(e,t){return[`NO_COMPRESSION`,`RLE_COMPRESSION`,`ZIPS_COMPRESSION`,`ZIP_COMPRESSION`,`PIZ_COMPRESSION`,`PXR24_COMPRESSION`,`B44_COMPRESSION`,`B44A_COMPRESSION`,`DWAA_COMPRESSION`,`DWAB_COMPRESSION`][we(e,t)]}function Me(e,t){return{xMin:xe(e,t),yMin:xe(e,t),xMax:xe(e,t),yMax:xe(e,t)}}function Ne(e,t){return[`INCREASING_Y`,`DECREASING_Y`,`RANDOM_Y`][we(e,t)]}function Pe(e,t){return[`ENVMAP_LATLONG`,`ENVMAP_CUBE`][we(e,t)]}function Fe(e,t){let n=[`ONE_LEVEL`,`MIPMAP_LEVELS`,`RIPMAP_LEVELS`],r=[`ROUND_DOWN`,`ROUND_UP`],i=Se(e,t),a=Se(e,t),o=we(e,t);return{xSize:i,ySize:a,levelMode:n[o&15],roundingMode:r[o>>4]}}function Ie(e,t){return[Ee(e,t),Ee(e,t)]}function Re(e,t){return[Ee(e,t),Ee(e,t),Ee(e,t)]}function ze(e,t,n,r,i){if(r===`string`||r===`stringvector`||r===`iccProfile`)return ve(t,n,i);if(r===`chlist`)return Ae(e,t,n,i);if(r===`chromaticities`)return z(e,n);if(r===`compression`)return je(e,n);if(r===`box2i`)return Me(e,n);if(r===`envmap`)return Pe(e,n);if(r===`tiledesc`)return Fe(e,n);if(r===`lineOrder`)return Ne(e,n);if(r===`float`)return Ee(e,n);if(r===`v2f`)return Ie(e,n);if(r===`v3f`)return Re(e,n);if(r===`int`)return xe(e,n);if(r===`rational`)return ye(e,n);if(r===`timecode`)return be(e,n);if(r===`preview`||r===`deepImageState`||r===`idmanifest`)return n.value+=i,`skipped`;n.value+=i}function Be(e,t){let n=Math.log2(e);return t==`ROUND_DOWN`?Math.floor(n):Math.ceil(n)}function Ve(e,t,n){let r=0;switch(e.levelMode){case`ONE_LEVEL`:r=1;break;case`MIPMAP_LEVELS`:r=Be(Math.max(t,n),e.roundingMode)+1;break;case`RIPMAP_LEVELS`:throw Error(`THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.`)}return r}function He(e,t,n,r){let i=Array(e);for(let a=0;a<e;a++){let e=1<<a,o=t/e|0;r==`ROUND_UP`&&o*e<t&&(o+=1),i[a]=(Math.max(o,1)+n-1)/n|0}return i}function Ue(){let e=this,t=e.offset,n={value:0};for(let r=0;r<e.tileCount;r++){let r=xe(e.viewer,t),i=xe(e.viewer,t);t.value+=8,e.size=Se(e.viewer,t);let a=r*e.blockWidth,o=i*e.blockHeight;e.columns=a+e.blockWidth>e.width?e.width-a:e.blockWidth,e.lines=o+e.blockHeight>e.height?e.height-o:e.blockHeight;let s=e.columns*e.totalBytes,c=e.size<e.lines*s?e.uncompress(e):ue(e);t.value+=e.size;for(let t=0;t<e.lines;t++){let r=t*e.columns*e.totalBytes;for(let i=0;i<e.inputChannels.length;i++){let s=et.channels[i].name,l=e.channelByteOffsets[s]*e.columns,u=e.decodeChannels[s];if(u===void 0)continue;n.value=r+l;let d=(e.height-(1+o+t))*e.outLineWidth;for(let t=0;t<e.columns;t++){let r=d+(t+a)*e.outputChannels+u;e.byteArray[r]=e.getter(c,n)}}}}}function We(){let e=this,t=e.offset,n={value:0};for(let r=0;r<e.height/e.blockHeight;r++){let i=xe(e.viewer,t)-et.dataWindow.yMin;e.size=Se(e.viewer,t),e.lines=i+e.blockHeight>e.height?e.height-i:e.blockHeight;let a=e.columns*e.totalBytes,o=e.size<e.lines*a?e.uncompress(e):ue(e);t.value+=e.size;for(let t=0;t<e.blockHeight;t++){let i=r*e.blockHeight,s=t+e.scanOrder(i);if(s>=e.height)continue;let c=t*a,l=(e.height-1-s)*e.outLineWidth;for(let t=0;t<e.inputChannels.length;t++){let r=et.channels[t].name,i=e.channelByteOffsets[r]*e.columns,a=e.decodeChannels[r];if(a!==void 0){n.value=c+i;for(let t=0;t<e.columns;t++){let r=l+t*e.outputChannels+a;e.byteArray[r]=e.getter(o,n)}}}}}}function Ge(){let e=this,t=e.chunkOffsets,n={value:0};for(let r=0;r<t.length;r++){let i={value:t[r]};i.value+=4;let a=xe(e.viewer,i)-et.dataWindow.yMin;e.size=Se(e.viewer,i),e.lines=a+e.blockHeight>e.height?e.height-a:e.blockHeight;let o=e.columns*e.totalBytes,s=e.size<e.lines*o,c=e.offset;e.offset=i;let l=s?e.uncompress(e):ue(e);e.offset=c;for(let t=0;t<e.blockHeight;t++){let r=t+a;if(r>=e.height)continue;let i=t*o,s=(e.height-1-r)*e.outLineWidth;for(let t=0;t<e.inputChannels.length;t++){let r=et.channels[t].name,a=e.channelByteOffsets[r]*e.columns,o=e.decodeChannels[r];if(o!==void 0){n.value=i+a;for(let t=0;t<e.columns;t++){let r=s+t*e.outputChannels+o;e.byteArray[r]=e.getter(l,n)}}}}}}function Ke(e,t,n,r){if(n===0)return null;let i=e.slice(t,t+n);switch(r){case`NO_COMPRESSION`:return new DataView(i.buffer,i.byteOffset,i.byteLength);case`RLE_COMPRESSION`:{let e=new Uint8Array(ne(i.buffer.slice(i.byteOffset,i.byteOffset+i.byteLength))),t=new Uint8Array(e.length);return ee(e),te(e,t),new DataView(t.buffer)}case`ZIPS_COMPRESSION`:{let e=Gu(i),t=new Uint8Array(e.length);return ee(e),te(e,t),new DataView(t.buffer)}default:throw Error(`EXRLoader.parse: `+r+` is unsupported for deep data`)}}function qe(){let e=this,t=e.chunkOffsets,n=e.width,r=e.height,i=e.deepChannels,a=et.compression,o=e.multiPart,s=e.decodeChannels,c=e.outputChannels,l=e.byteArray instanceof Uint16Array,u=-1;for(let e=0;e<i.length;e++)if(i[e].name===`A`){u=e;break}for(let d=0;d<t.length;d++){let f={value:t[d]};o&&(f.value+=4);let p=xe(e.viewer,f)-et.dataWindow.yMin,m=Te(e.viewer,f),h=Te(e.viewer,f);Te(e.viewer,f);let g=Ke(e.array,f.value,m,a);if(f.value+=m,g===null)continue;let _=new Uint32Array(n);for(let e=0;e<n;e++)_[e]=g.getUint32(e*4,!0);let v=_[n-1];if(v===0){f.value+=h;continue}let y=Ke(e.array,f.value,h,a),b=[],x=0;for(let e=0;e<i.length;e++)b.push(x),x+=v*i[e].bytesPerSample;let S=(r-1-p)*e.outLineWidth;for(let t=0;t<n;t++){let n=t===0?0:_[t-1],r=_[t]-n;if(r===0)continue;let a=new Float32Array(c),o=0;for(let e=0;e<r;e++){let t=n+e,r=1-o;if(r<=0)break;let c=1;if(u>=0){let e=i[u].bytesPerSample,n=b[u]+t*e;c=e===2?R(y.getUint16(n,!0)):y.getFloat32(n,!0)}for(let e=0;e<i.length;e++){let n=i[e],o=s[n.name];if(o===void 0)continue;let c=n.bytesPerSample,l=b[e]+t*c,u=c===2?R(y.getUint16(l,!0)):y.getFloat32(l,!0);a[o]+=u*r}o+=c*r}s.A!==void 0&&(a[s.A]=o);let d=S+t*c;for(let t=0;t<c;t++)e.byteArray[d+t]=l?$n.toHalfFloat(a[t]):a[t]}}}function Je(e,t,n){let r={},i=!1;for(;;){let a=_e(t,n);if(a===``)break;i=!0;let o=_e(t,n),s=ze(e,t,n,o,Se(e,n));s===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type \'${o}\'.`):r[a]=s}return i?r:null}function Ye(e,t,n){if(e.getUint32(0,!0)!=20000630)throw Error(`THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.`);let r=e.getUint8(4),i=e.getUint8(5),a={singleTile:!!(i&2),longName:!!(i&4),deepFormat:!!(i&8),multiPart:!!(i&16)};n.value=8;let o=[];if(a.multiPart){for(;;){let i=Je(e,t,n);if(i===null)break;i.version=r,i.spec=a,o.push(i)}if(o.length===0)throw Error(`THREE.EXRLoader: No valid part headers found.`)}else{let i=Je(e,t,n);i.version=r,i.spec=a,o.push(i)}return o}function Xe(e,t,n,r,i,a){let o={size:0,viewer:t,array:n,offset:r,width:e.dataWindow.xMax-e.dataWindow.xMin+1,height:e.dataWindow.yMax-e.dataWindow.yMin+1,inputChannels:e.channels,channelByteOffsets:{},shouldExpand:!1,yCbCr:!1,scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Le};switch(e.compression){case`NO_COMPRESSION`:o.blockHeight=1,o.uncompress=ue;break;case`RLE_COMPRESSION`:o.blockHeight=1,o.uncompress=de;break;case`ZIPS_COMPRESSION`:o.blockHeight=1,o.uncompress=fe;break;case`ZIP_COMPRESSION`:o.blockHeight=16,o.uncompress=fe;break;case`PIZ_COMPRESSION`:o.blockHeight=32,o.uncompress=pe;break;case`PXR24_COMPRESSION`:o.blockHeight=16,o.uncompress=me;break;case`B44_COMPRESSION`:case`B44A_COMPRESSION`:o.blockHeight=32,o.uncompress=he;break;case`DWAA_COMPRESSION`:o.blockHeight=32,o.uncompress=ge;break;case`DWAB_COMPRESSION`:o.blockHeight=256,o.uncompress=ge;break;default:throw Error(`EXRLoader.parse: `+e.compression+` is unsupported`)}let s={};for(let t of e.channels)switch(t.name){case`BY`:case`RY`:case`Y`:case`R`:case`G`:case`B`:case`A`:s[t.name]=!0,o.type=t.pixelType}let c=!1,l=!1;if(s.Y&&s.RY&&s.BY)o.outputChannels=4,o.yCbCr=!0;else if(s.R&&s.G&&s.B)o.outputChannels=4;else if(s.Y)o.outputChannels=1;else throw Error(`EXRLoader.parse: file contains unsupported data channels.`);switch(o.outputChannels){case 4:a==1023?(c=!s.A,o.format=w,o.colorSpace=Le,o.outputChannels=4,o.decodeChannels={R:0,G:1,B:2,A:3}):a==1030?(o.format=k,o.colorSpace=Le,o.outputChannels=2,o.decodeChannels={R:0,G:1}):a==1028?(o.format=D,o.colorSpace=Le,o.outputChannels=1,o.decodeChannels={R:0}):l=!0;break;case 1:a==1023?(c=!0,o.format=w,o.colorSpace=Le,o.outputChannels=4,o.shouldExpand=!0,o.decodeChannels={Y:0}):a==1030?(o.format=k,o.colorSpace=Le,o.outputChannels=2,o.shouldExpand=!0,o.decodeChannels={Y:0}):a==1028?(o.format=D,o.colorSpace=Le,o.outputChannels=1,o.decodeChannels={Y:0}):l=!0;break;default:l=!0}if(l)throw Error(`EXRLoader.parse: invalid output format for specified file.`);if(o.yCbCr&&(o.format=w,o.outputChannels=4,o.decodeChannels={Y:0,RY:1,BY:2},c=!0),o.type==1)switch(i){case h:o.getter=ke;break;case g:o.getter=Oe;break}else if(o.type==2)switch(i){case h:o.getter=Ee;break;case g:o.getter=De}else throw Error(`EXRLoader.parse: unsupported pixelType `+o.type+` for `+e.compression+`.`);o.columns=o.width;let u=o.width*o.height*o.outputChannels;switch(i){case h:o.byteArray=new Float32Array(u),c&&o.byteArray.fill(1,0,u);break;case g:o.byteArray=new Uint16Array(u),c&&o.byteArray.fill(15360,0,u);break;default:console.error(`THREE.EXRLoader: unsupported type: `,i);break}let d=0;for(let t of e.channels)o.decodeChannels[t.name]!==void 0&&(o.channelByteOffsets[t.name]=d),d+=t.pixelType*2;if(o.totalBytes=d,o.outLineWidth=o.width*o.outputChannels,e.lineOrder===`INCREASING_Y`?o.scanOrder=e=>e:o.scanOrder=e=>o.height-1-e,e.spec.deepFormat){o.deepChannels=[];let t=0;for(let n of e.channels){let e=n.pixelType===0?4:n.pixelType*2;o.deepChannels.push({name:n.name,pixelType:n.pixelType,bytesPerSample:e}),t+=e}o.deepBytesPerSample=t,o.chunkOffsets=e._chunkOffsets,o.multiPart=e.spec.multiPart,o.decode=qe.bind(o)}else if(e.spec.singleTile){o.blockHeight=e.tiles.ySize,o.blockWidth=e.tiles.xSize;let n=Ve(e.tiles,o.width,o.height),i=He(n,o.width,e.tiles.xSize,e.tiles.roundingMode),a=He(n,o.height,e.tiles.ySize,e.tiles.roundingMode);o.tileCount=i[0]*a[0];for(let e=0;e<n;e++)for(let n=0;n<a[e];n++)for(let n=0;n<i[e];n++)Te(t,r);o.decode=Ue.bind(o)}else if(e.spec.multiPart)o.blockWidth=o.width,o.chunkOffsets=e._chunkOffsets,o.decode=Ge.bind(o);else{o.blockWidth=o.width;let e=Math.ceil(o.height/o.blockHeight);for(let n=0;n<e;n++)Te(t,r);o.decode=We.bind(o)}return o}let B={value:0},V=new DataView(e),Ze=new Uint8Array(e),Qe=Ye(V,e,B),$e=Math.max(0,Math.min(this.part,Qe.length-1)),et=Qe[$e];if(et.spec.multiPart||et.spec.deepFormat)for(let e=0;e<Qe.length;e++){let t=Qe[e].chunkCount;if(e===$e){et._chunkOffsets=[];for(let e=0;e<t;e++)et._chunkOffsets.push(Te(V,B))}else for(let e=0;e<t;e++)Te(V,B)}let tt=Xe(et,V,Ze,B,this.type,this.outputFormat);if(tt.decode(),tt.shouldExpand){let e=tt.byteArray;if(this.outputFormat==1023)for(let t=0;t<e.length;t+=4)e[t+2]=e[t+1]=e[t];else if(this.outputFormat==1030)for(let t=0;t<e.length;t+=2)e[t+1]=e[t]}if(tt.yCbCr){let e=tt.byteArray,t=tt.width*tt.height;if(this.type===1016)for(let n=0;n<t;n++){let t=n*4,r=R(e[t]),i=R(e[t+1]),a=R(e[t+2]),o=(1+i)*r,s=(1+a)*r,c=(r-o*.2126-s*.0722)/.7152;e[t]=$n.toHalfFloat(Math.max(0,o)),e[t+1]=$n.toHalfFloat(Math.max(0,c)),e[t+2]=$n.toHalfFloat(Math.max(0,s))}else for(let n=0;n<t;n++){let t=n*4,r=e[t],i=e[t+1],a=e[t+2],o=(1+i)*r,s=(1+a)*r;e[t]=Math.max(0,o),e[t+1]=Math.max(0,(r-o*.2126-s*.0722)/.7152),e[t+2]=Math.max(0,s)}}return{header:et,width:tt.width,height:tt.height,data:tt.byteArray,format:tt.format,colorSpace:tt.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}setOutputFormat(e){return this.outputFormat=e,this}setPart(e){return this.part=e,this}load(e,t,n,r){function i(e,n){e.colorSpace=n.colorSpace,e.minFilter=o,e.magFilter=o,e.generateMipmaps=!1,e.flipY=!1,t&&t(e,n)}return super.load(e,i,n,r)}},Ju={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},Yu=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Xu=new Co(-1,1,1,-1,0,1),Zu=new class extends vr{constructor(){super(),this.setAttribute(`position`,new or([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new or([0,2,0,0,2,0],2))}},Qu=class{constructor(e){this._mesh=new Vr(Zu,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Xu)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},$u=class extends Yu{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Aa?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Da.clone(e.uniforms),this.material=new Aa({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Qu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},ed=class extends Yu{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},td=class extends Yu{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},nd=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new H);this._width=n.width,this._height=n.height,t=new jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:g}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new $u(Ju),this.copyPass.material.blending=0,this.timer=new jo}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}ed!==void 0&&(r instanceof ed?n=!0:r instanceof td&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new H);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},rd=class extends Yu{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new gn}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},id={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},ad=class extends Yu{constructor(){super(),this.isOutputPass=!0,this.uniforms=Da.clone(id.uniforms),this.material=new ja({name:id.name,uniforms:this.uniforms,vertexShader:id.vertexShader,fragmentShader:id.fragmentShader}),this._fsQuad=new Qu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},vt.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},od=class{constructor(e){this.isFont=!0,this.type=`Font`,this.data=e}generateShapes(e,t=100,n=`ltr`){let r=[],i=sd(e,t,this.data,n);for(let e=0,t=i.length;e<t;e++)r.push(...i[e].toShapes());return r}};function sd(e,t,n,r){let i=Array.from(e),a=t/n.resolution,o=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*a,s=[],c=0,l=0;(r==`rtl`||r==`tb`)&&i.reverse();for(let e=0;e<i.length;e++){let t=i[e];if(t===`
`)c=0,l-=o;else{let e=cd(t,a,c,l,n);r==`tb`?(c=0,l+=n.ascender*a):c+=e.offsetX,s.push(e.path)}}return s}function cd(e,t,n,r,i){let a=i.glyphs[e]||i.glyphs[`?`];if(!a){console.error(`THREE.Font: character "`+e+`" does not exists in font family `+i.familyName+`.`);return}let o=new Yo,s,c,l,u,d,f,p,m;if(a.o){let e=a._cachedOutline||=a.o.split(` `);for(let i=0,a=e.length;i<a;)switch(e[i++]){case`m`:s=e[i++]*t+n,c=e[i++]*t+r,o.moveTo(s,c);break;case`l`:s=e[i++]*t+n,c=e[i++]*t+r,o.lineTo(s,c);break;case`q`:l=e[i++]*t+n,u=e[i++]*t+r,d=e[i++]*t+n,f=e[i++]*t+r,o.quadraticCurveTo(d,f,l,u);break;case`b`:l=e[i++]*t+n,u=e[i++]*t+r,d=e[i++]*t+n,f=e[i++]*t+r,p=e[i++]*t+n,m=e[i++]*t+r,o.bezierCurveTo(d,f,p,m,l,u);break}}return{offsetX:a.ha*t,path:o}}String.prototype.codePointAt||(function(){var e=function(){try{var e={},t=Object.defineProperty,n=t(e,e,e)&&t}catch{}return n}(),t=function(e){if(this==null)throw TypeError();var t=String(this),n=t.length,r=e?Number(e):0;if(r!=r&&(r=0),!(r<0||r>=n)){var i=t.charCodeAt(r),a;return i>=55296&&i<=56319&&n>r+1&&(a=t.charCodeAt(r+1),a>=56320&&a<=57343)?(i-55296)*1024+a-56320+65536:i}};e?e(String.prototype,`codePointAt`,{value:t,configurable:!0,writable:!0}):String.prototype.codePointAt=t})();var ld=0,ud=-3;function dd(){this.table=new Uint16Array(16),this.trans=new Uint16Array(288)}function fd(e,t){this.source=e,this.sourceIndex=0,this.tag=0,this.bitcount=0,this.dest=t,this.destLen=0,this.ltree=new dd,this.dtree=new dd}var pd=new dd,md=new dd,hd=new Uint8Array(30),gd=new Uint16Array(30),_d=new Uint8Array(30),vd=new Uint16Array(30),yd=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),bd=new dd,xd=new Uint8Array(320);function Sd(e,t,n,r){var i,a;for(i=0;i<n;++i)e[i]=0;for(i=0;i<30-n;++i)e[i+n]=i/n|0;for(a=r,i=0;i<30;++i)t[i]=a,a+=1<<e[i]}function Cd(e,t){var n;for(n=0;n<7;++n)e.table[n]=0;for(e.table[7]=24,e.table[8]=152,e.table[9]=112,n=0;n<24;++n)e.trans[n]=256+n;for(n=0;n<144;++n)e.trans[24+n]=n;for(n=0;n<8;++n)e.trans[168+n]=280+n;for(n=0;n<112;++n)e.trans[176+n]=144+n;for(n=0;n<5;++n)t.table[n]=0;for(t.table[5]=32,n=0;n<32;++n)t.trans[n]=n}var wd=new Uint16Array(16);function Td(e,t,n,r){var i,a;for(i=0;i<16;++i)e.table[i]=0;for(i=0;i<r;++i)e.table[t[n+i]]++;for(e.table[0]=0,a=0,i=0;i<16;++i)wd[i]=a,a+=e.table[i];for(i=0;i<r;++i)t[n+i]&&(e.trans[wd[t[n+i]]++]=i)}function Ed(e){e.bitcount--||(e.tag=e.source[e.sourceIndex++],e.bitcount=7);var t=e.tag&1;return e.tag>>>=1,t}function Dd(e,t,n){if(!t)return n;for(;e.bitcount<24;)e.tag|=e.source[e.sourceIndex++]<<e.bitcount,e.bitcount+=8;var r=e.tag&65535>>>16-t;return e.tag>>>=t,e.bitcount-=t,r+n}function Od(e,t){for(;e.bitcount<24;)e.tag|=e.source[e.sourceIndex++]<<e.bitcount,e.bitcount+=8;var n=0,r=0,i=0,a=e.tag;do r=2*r+(a&1),a>>>=1,++i,n+=t.table[i],r-=t.table[i];while(r>=0);return e.tag=a,e.bitcount-=i,t.trans[n+r]}function kd(e,t,n){var r=Dd(e,5,257),i=Dd(e,5,1),a=Dd(e,4,4),o,s,c;for(o=0;o<19;++o)xd[o]=0;for(o=0;o<a;++o){var l=Dd(e,3,0);xd[yd[o]]=l}for(Td(bd,xd,0,19),s=0;s<r+i;){var u=Od(e,bd);switch(u){case 16:var d=xd[s-1];for(c=Dd(e,2,3);c;--c)xd[s++]=d;break;case 17:for(c=Dd(e,3,3);c;--c)xd[s++]=0;break;case 18:for(c=Dd(e,7,11);c;--c)xd[s++]=0;break;default:xd[s++]=u;break}}Td(t,xd,0,r),Td(n,xd,r,i)}function Ad(e,t,n){for(;;){var r=Od(e,t);if(r===256)return ld;if(r<256)e.dest[e.destLen++]=r;else{var i,a,o,s;for(r-=257,i=Dd(e,hd[r],gd[r]),a=Od(e,n),o=e.destLen-Dd(e,_d[a],vd[a]),s=o;s<o+i;++s)e.dest[e.destLen++]=e.dest[s]}}}function jd(e){for(var t,n,r;e.bitcount>8;)e.sourceIndex--,e.bitcount-=8;if(t=e.source[e.sourceIndex+1],t=256*t+e.source[e.sourceIndex],n=e.source[e.sourceIndex+3],n=256*n+e.source[e.sourceIndex+2],t!==(~n&65535))return ud;for(e.sourceIndex+=4,r=t;r;--r)e.dest[e.destLen++]=e.source[e.sourceIndex++];return e.bitcount=0,ld}function Md(e,t){var n=new fd(e,t),r,i,a;do{switch(r=Ed(n),i=Dd(n,2,0),i){case 0:a=jd(n);break;case 1:a=Ad(n,pd,md);break;case 2:kd(n,n.ltree,n.dtree),a=Ad(n,n.ltree,n.dtree);break;default:a=ud}if(a!==ld)throw Error(`Data error`)}while(!r);return n.destLen<n.dest.length?typeof n.dest.slice==`function`?n.dest.slice(0,n.destLen):n.dest.subarray(0,n.destLen):n.dest}Cd(pd,md),Sd(hd,gd,4,3),Sd(_d,vd,2,1),hd[28]=0,gd[28]=258;var Nd=Md;function Pd(e,t,n,r,i){return(1-i)**3*e+3*(1-i)**2*i*t+3*(1-i)*i**2*n+i**3*r}function Fd(){this.x1=NaN,this.y1=NaN,this.x2=NaN,this.y2=NaN}Fd.prototype.isEmpty=function(){return isNaN(this.x1)||isNaN(this.y1)||isNaN(this.x2)||isNaN(this.y2)},Fd.prototype.addPoint=function(e,t){typeof e==`number`&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=e,this.x2=e),e<this.x1&&(this.x1=e),e>this.x2&&(this.x2=e)),typeof t==`number`&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=t,this.y2=t),t<this.y1&&(this.y1=t),t>this.y2&&(this.y2=t))},Fd.prototype.addX=function(e){this.addPoint(e,null)},Fd.prototype.addY=function(e){this.addPoint(null,e)},Fd.prototype.addBezier=function(e,t,n,r,i,a,o,s){var c=[e,t],l=[n,r],u=[i,a],d=[o,s];this.addPoint(e,t),this.addPoint(o,s);for(var f=0;f<=1;f++){var p=6*c[f]-12*l[f]+6*u[f],m=-3*c[f]+9*l[f]-9*u[f]+3*d[f],h=3*l[f]-3*c[f];if(m===0){if(p===0)continue;var g=-h/p;0<g&&g<1&&(f===0&&this.addX(Pd(c[f],l[f],u[f],d[f],g)),f===1&&this.addY(Pd(c[f],l[f],u[f],d[f],g)));continue}var _=p**2-4*h*m;if(!(_<0)){var v=(-p+Math.sqrt(_))/(2*m);0<v&&v<1&&(f===0&&this.addX(Pd(c[f],l[f],u[f],d[f],v)),f===1&&this.addY(Pd(c[f],l[f],u[f],d[f],v)));var y=(-p-Math.sqrt(_))/(2*m);0<y&&y<1&&(f===0&&this.addX(Pd(c[f],l[f],u[f],d[f],y)),f===1&&this.addY(Pd(c[f],l[f],u[f],d[f],y)))}}},Fd.prototype.addQuad=function(e,t,n,r,i,a){var o=e+2/3*(n-e),s=t+2/3*(r-t),c=o+1/3*(i-e),l=s+1/3*(a-t);this.addBezier(e,t,o,s,c,l,i,a)};function Id(){this.commands=[],this.fill=`black`,this.stroke=null,this.strokeWidth=1}Id.prototype.moveTo=function(e,t){this.commands.push({type:`M`,x:e,y:t})},Id.prototype.lineTo=function(e,t){this.commands.push({type:`L`,x:e,y:t})},Id.prototype.curveTo=Id.prototype.bezierCurveTo=function(e,t,n,r,i,a){this.commands.push({type:`C`,x1:e,y1:t,x2:n,y2:r,x:i,y:a})},Id.prototype.quadTo=Id.prototype.quadraticCurveTo=function(e,t,n,r){this.commands.push({type:`Q`,x1:e,y1:t,x:n,y:r})},Id.prototype.close=Id.prototype.closePath=function(){this.commands.push({type:`Z`})},Id.prototype.extend=function(e){if(e.commands)e=e.commands;else if(e instanceof Fd){var t=e;this.moveTo(t.x1,t.y1),this.lineTo(t.x2,t.y1),this.lineTo(t.x2,t.y2),this.lineTo(t.x1,t.y2),this.close();return}Array.prototype.push.apply(this.commands,e)},Id.prototype.getBoundingBox=function(){for(var e=new Fd,t=0,n=0,r=0,i=0,a=0;a<this.commands.length;a++){var o=this.commands[a];switch(o.type){case`M`:e.addPoint(o.x,o.y),t=r=o.x,n=i=o.y;break;case`L`:e.addPoint(o.x,o.y),r=o.x,i=o.y;break;case`Q`:e.addQuad(r,i,o.x1,o.y1,o.x,o.y),r=o.x,i=o.y;break;case`C`:e.addBezier(r,i,o.x1,o.y1,o.x2,o.y2,o.x,o.y),r=o.x,i=o.y;break;case`Z`:r=t,i=n;break;default:throw Error(`Unexpected path command `+o.type)}}return e.isEmpty()&&e.addPoint(0,0),e},Id.prototype.draw=function(e){e.beginPath();for(var t=0;t<this.commands.length;t+=1){var n=this.commands[t];n.type===`M`?e.moveTo(n.x,n.y):n.type===`L`?e.lineTo(n.x,n.y):n.type===`C`?e.bezierCurveTo(n.x1,n.y1,n.x2,n.y2,n.x,n.y):n.type===`Q`?e.quadraticCurveTo(n.x1,n.y1,n.x,n.y):n.type===`Z`&&e.closePath()}this.fill&&(e.fillStyle=this.fill,e.fill()),this.stroke&&(e.strokeStyle=this.stroke,e.lineWidth=this.strokeWidth,e.stroke())},Id.prototype.toPathData=function(e){e=e===void 0?2:e;function t(t){return Math.round(t)===t?``+Math.round(t):t.toFixed(e)}function n(){for(var e=arguments,n=``,r=0;r<arguments.length;r+=1){var i=e[r];i>=0&&r>0&&(n+=` `),n+=t(i)}return n}for(var r=``,i=0;i<this.commands.length;i+=1){var a=this.commands[i];a.type===`M`?r+=`M`+n(a.x,a.y):a.type===`L`?r+=`L`+n(a.x,a.y):a.type===`C`?r+=`C`+n(a.x1,a.y1,a.x2,a.y2,a.x,a.y):a.type===`Q`?r+=`Q`+n(a.x1,a.y1,a.x,a.y):a.type===`Z`&&(r+=`Z`)}return r},Id.prototype.toSVG=function(e){var t=`<path d="`;return t+=this.toPathData(e),t+=`"`,this.fill&&this.fill!==`black`&&(this.fill===null?t+=` fill="none"`:t+=` fill="`+this.fill+`"`),this.stroke&&(t+=` stroke="`+this.stroke+`" stroke-width="`+this.strokeWidth+`"`),t+=`/>`,t},Id.prototype.toDOMElement=function(e){var t=this.toPathData(e),n=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);return n.setAttribute(`d`,t),n};function Ld(e){throw Error(e)}function Rd(e,t){e||Ld(t)}var G={fail:Ld,argument:Rd,assert:Rd},zd=32768,Bd=2147483648,Vd={},K={},q={};function Hd(e){return function(){return e}}K.BYTE=function(e){return G.argument(e>=0&&e<=255,`Byte value should be between 0 and 255.`),[e]},q.BYTE=Hd(1),K.CHAR=function(e){return[e.charCodeAt(0)]},q.CHAR=Hd(1),K.CHARARRAY=function(e){e===void 0&&(e=``,console.warn(`Undefined CHARARRAY encountered and treated as an empty string. This is probably caused by a missing glyph name.`));for(var t=[],n=0;n<e.length;n+=1)t[n]=e.charCodeAt(n);return t},q.CHARARRAY=function(e){return e===void 0?0:e.length},K.USHORT=function(e){return[e>>8&255,e&255]},q.USHORT=Hd(2),K.SHORT=function(e){return e>=zd&&(e=-(2*zd-e)),[e>>8&255,e&255]},q.SHORT=Hd(2),K.UINT24=function(e){return[e>>16&255,e>>8&255,e&255]},q.UINT24=Hd(3),K.ULONG=function(e){return[e>>24&255,e>>16&255,e>>8&255,e&255]},q.ULONG=Hd(4),K.LONG=function(e){return e>=Bd&&(e=-(2*Bd-e)),[e>>24&255,e>>16&255,e>>8&255,e&255]},q.LONG=Hd(4),K.FIXED=K.ULONG,q.FIXED=q.ULONG,K.FWORD=K.SHORT,q.FWORD=q.SHORT,K.UFWORD=K.USHORT,q.UFWORD=q.USHORT,K.LONGDATETIME=function(e){return[0,0,0,0,e>>24&255,e>>16&255,e>>8&255,e&255]},q.LONGDATETIME=Hd(8),K.TAG=function(e){return G.argument(e.length===4,`Tag should be exactly 4 ASCII characters.`),[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]},q.TAG=Hd(4),K.Card8=K.BYTE,q.Card8=q.BYTE,K.Card16=K.USHORT,q.Card16=q.USHORT,K.OffSize=K.BYTE,q.OffSize=q.BYTE,K.SID=K.USHORT,q.SID=q.USHORT,K.NUMBER=function(e){return e>=-107&&e<=107?[e+139]:e>=108&&e<=1131?(e-=108,[(e>>8)+247,e&255]):e>=-1131&&e<=-108?(e=-e-108,[(e>>8)+251,e&255]):e>=-32768&&e<=32767?K.NUMBER16(e):K.NUMBER32(e)},q.NUMBER=function(e){return K.NUMBER(e).length},K.NUMBER16=function(e){return[28,e>>8&255,e&255]},q.NUMBER16=Hd(3),K.NUMBER32=function(e){return[29,e>>24&255,e>>16&255,e>>8&255,e&255]},q.NUMBER32=Hd(5),K.REAL=function(e){var t=e.toString(),n=/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(t);if(n){var r=parseFloat(`1e`+((n[2]?+n[2]:0)+n[1].length));t=(Math.round(e*r)/r).toString()}for(var i=``,a=0,o=t.length;a<o;a+=1){var s=t[a];s===`e`?i+=t[++a]===`-`?`c`:`b`:s===`.`?i+=`a`:s===`-`?i+=`e`:i+=s}i+=i.length&1?`f`:`ff`;for(var c=[30],l=0,u=i.length;l<u;l+=2)c.push(parseInt(i.substr(l,2),16));return c},q.REAL=function(e){return K.REAL(e).length},K.NAME=K.CHARARRAY,q.NAME=q.CHARARRAY,K.STRING=K.CHARARRAY,q.STRING=q.CHARARRAY,Vd.UTF8=function(e,t,n){for(var r=[],i=n,a=0;a<i;a++,t+=1)r[a]=e.getUint8(t);return String.fromCharCode.apply(null,r)},Vd.UTF16=function(e,t,n){for(var r=[],i=n/2,a=0;a<i;a++,t+=2)r[a]=e.getUint16(t);return String.fromCharCode.apply(null,r)},K.UTF16=function(e){for(var t=[],n=0;n<e.length;n+=1){var r=e.charCodeAt(n);t[t.length]=r>>8&255,t[t.length]=r&255}return t},q.UTF16=function(e){return e.length*2};var Ud={"x-mac-croatian":`ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č…\xA0ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ`,"x-mac-cyrillic":`АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»…\xA0ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю`,"x-mac-gaelic":`ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»…\xA0ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ`,"x-mac-greek":`Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»…\xA0ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­`,"x-mac-icelandic":`ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»…\xA0ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ`,"x-mac-inuit":`ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ…\xA0ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł`,"x-mac-ce":`ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»…\xA0ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ`,macintosh:`ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»…\xA0ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ`,"x-mac-romanian":`ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»…\xA0ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ`,"x-mac-turkish":`ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»…\xA0ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ`};Vd.MACSTRING=function(e,t,n,r){var i=Ud[r];if(i!==void 0){for(var a=``,o=0;o<n;o++){var s=e.getUint8(t+o);s<=127?a+=String.fromCharCode(s):a+=i[s&127]}return a}};var Wd=typeof WeakMap==`function`&&new WeakMap,Gd,Kd=function(e){if(!Gd)for(var t in Gd={},Ud)Gd[t]=new String(t);var n=Gd[e];if(n!==void 0){if(Wd){var r=Wd.get(n);if(r!==void 0)return r}var i=Ud[e];if(i!==void 0){for(var a={},o=0;o<i.length;o++)a[i.charCodeAt(o)]=o+128;return Wd&&Wd.set(n,a),a}}};K.MACSTRING=function(e,t){var n=Kd(t);if(n!==void 0){for(var r=[],i=0;i<e.length;i++){var a=e.charCodeAt(i);if(a>=128&&(a=n[a],a===void 0))return;r[i]=a}return r}},q.MACSTRING=function(e,t){var n=K.MACSTRING(e,t);return n===void 0?0:n.length};function qd(e){return e>=-128&&e<=127}function Jd(e,t,n){for(var r=0,i=e.length;t<i&&r<64&&e[t]===0;)++t,++r;return n.push(128|r-1),t}function Yd(e,t,n){for(var r=0,i=e.length,a=t;a<i&&r<64;){var o=e[a];if(!qd(o)||o===0&&a+1<i&&e[a+1]===0)break;++a,++r}n.push(r-1);for(var s=t;s<a;++s)n.push(e[s]+256&255);return a}function Xd(e,t,n){for(var r=0,i=e.length,a=t;a<i&&r<64;){var o=e[a];if(o===0||qd(o)&&a+1<i&&qd(e[a+1]))break;++a,++r}n.push(64|r-1);for(var s=t;s<a;++s){var c=e[s];n.push(c+65536>>8&255,c+256&255)}return a}K.VARDELTAS=function(e){for(var t=0,n=[];t<e.length;){var r=e[t];t=r===0?Jd(e,t,n):r>=-128&&r<=127?Yd(e,t,n):Xd(e,t,n)}return n},K.INDEX=function(e){for(var t=1,n=[t],r=[],i=0;i<e.length;i+=1){var a=K.OBJECT(e[i]);Array.prototype.push.apply(r,a),t+=a.length,n.push(t)}if(r.length===0)return[0,0];for(var o=[],s=1+Math.floor(Math.log(t)/Math.log(2))/8|0,c=[void 0,K.BYTE,K.USHORT,K.UINT24,K.ULONG][s],l=0;l<n.length;l+=1){var u=c(n[l]);Array.prototype.push.apply(o,u)}return Array.prototype.concat(K.Card16(e.length),K.OffSize(s),o,r)},q.INDEX=function(e){return K.INDEX(e).length},K.DICT=function(e){for(var t=[],n=Object.keys(e),r=n.length,i=0;i<r;i+=1){var a=parseInt(n[i],0),o=e[a];t=t.concat(K.OPERAND(o.value,o.type)),t=t.concat(K.OPERATOR(a))}return t},q.DICT=function(e){return K.DICT(e).length},K.OPERATOR=function(e){return e<1200?[e]:[12,e-1200]},K.OPERAND=function(e,t){var n=[];if(Array.isArray(t))for(var r=0;r<t.length;r+=1)G.argument(e.length===t.length,`Not enough arguments given for type`+t),n=n.concat(K.OPERAND(e[r],t[r]));else if(t===`SID`)n=n.concat(K.NUMBER(e));else if(t===`offset`)n=n.concat(K.NUMBER32(e));else if(t===`number`)n=n.concat(K.NUMBER(e));else if(t===`real`)n=n.concat(K.REAL(e));else throw Error(`Unknown operand type `+t);return n},K.OP=K.BYTE,q.OP=q.BYTE;var Zd=typeof WeakMap==`function`&&new WeakMap;K.CHARSTRING=function(e){if(Zd){var t=Zd.get(e);if(t!==void 0)return t}for(var n=[],r=e.length,i=0;i<r;i+=1){var a=e[i];n=n.concat(K[a.type](a.value))}return Zd&&Zd.set(e,n),n},q.CHARSTRING=function(e){return K.CHARSTRING(e).length},K.OBJECT=function(e){var t=K[e.type];return G.argument(t!==void 0,`No encoding function for type `+e.type),t(e.value)},q.OBJECT=function(e){var t=q[e.type];return G.argument(t!==void 0,`No sizeOf function for type `+e.type),t(e.value)},K.TABLE=function(e){for(var t=[],n=e.fields.length,r=[],i=[],a=0;a<n;a+=1){var o=e.fields[a],s=K[o.type];G.argument(s!==void 0,`No encoding function for field type `+o.type+` (`+o.name+`)`);var c=e[o.name];c===void 0&&(c=o.value);var l=s(c);o.type===`TABLE`?(i.push(t.length),t=t.concat([0,0]),r.push(l)):t=t.concat(l)}for(var u=0;u<r.length;u+=1){var d=i[u],f=t.length;G.argument(f<65536,`Table `+e.tableName+` too big.`),t[d]=f>>8,t[d+1]=f&255,t=t.concat(r[u])}return t},q.TABLE=function(e){for(var t=0,n=e.fields.length,r=0;r<n;r+=1){var i=e.fields[r],a=q[i.type];G.argument(a!==void 0,`No sizeOf function for field type `+i.type+` (`+i.name+`)`);var o=e[i.name];o===void 0&&(o=i.value),t+=a(o),i.type===`TABLE`&&(t+=2)}return t},K.RECORD=K.TABLE,q.RECORD=q.TABLE,K.LITERAL=function(e){return e},q.LITERAL=function(e){return e.length};function Qd(e,t,n){if(t.length&&(t[0].name!==`coverageFormat`||t[0].value===1))for(var r=0;r<t.length;r+=1){var i=t[r];this[i.name]=i.value}if(this.tableName=e,this.fields=t,n)for(var a=Object.keys(n),o=0;o<a.length;o+=1){var s=a[o],c=n[s];this[s]!==void 0&&(this[s]=c)}}Qd.prototype.encode=function(){return K.TABLE(this)},Qd.prototype.sizeOf=function(){return q.TABLE(this)};function $d(e,t,n){n===void 0&&(n=t.length);var r=Array(t.length+1);r[0]={name:e+`Count`,type:`USHORT`,value:n};for(var i=0;i<t.length;i++)r[i+1]={name:e+i,type:`USHORT`,value:t[i]};return r}function ef(e,t,n){var r=t.length,i=Array(r+1);i[0]={name:e+`Count`,type:`USHORT`,value:r};for(var a=0;a<r;a++)i[a+1]={name:e+a,type:`TABLE`,value:n(t[a],a)};return i}function tf(e,t,n){var r=t.length,i=[];i[0]={name:e+`Count`,type:`USHORT`,value:r};for(var a=0;a<r;a++)i=i.concat(n(t[a],a));return i}function nf(e){e.format===1?Qd.call(this,`coverageTable`,[{name:`coverageFormat`,type:`USHORT`,value:1}].concat($d(`glyph`,e.glyphs))):e.format===2?Qd.call(this,`coverageTable`,[{name:`coverageFormat`,type:`USHORT`,value:2}].concat(tf(`rangeRecord`,e.ranges,function(e){return[{name:`startGlyphID`,type:`USHORT`,value:e.start},{name:`endGlyphID`,type:`USHORT`,value:e.end},{name:`startCoverageIndex`,type:`USHORT`,value:e.index}]}))):G.assert(!1,`Coverage format must be 1 or 2.`)}nf.prototype=Object.create(Qd.prototype),nf.prototype.constructor=nf;function rf(e){Qd.call(this,`scriptListTable`,tf(`scriptRecord`,e,function(e,t){var n=e.script,r=n.defaultLangSys;return G.assert(!!r,`Unable to write GSUB: script `+e.tag+` has no default language system.`),[{name:`scriptTag`+t,type:`TAG`,value:e.tag},{name:`script`+t,type:`TABLE`,value:new Qd(`scriptTable`,[{name:`defaultLangSys`,type:`TABLE`,value:new Qd(`defaultLangSys`,[{name:`lookupOrder`,type:`USHORT`,value:0},{name:`reqFeatureIndex`,type:`USHORT`,value:r.reqFeatureIndex}].concat($d(`featureIndex`,r.featureIndexes)))}].concat(tf(`langSys`,n.langSysRecords,function(e,t){var n=e.langSys;return[{name:`langSysTag`+t,type:`TAG`,value:e.tag},{name:`langSys`+t,type:`TABLE`,value:new Qd(`langSys`,[{name:`lookupOrder`,type:`USHORT`,value:0},{name:`reqFeatureIndex`,type:`USHORT`,value:n.reqFeatureIndex}].concat($d(`featureIndex`,n.featureIndexes)))}]})))}]}))}rf.prototype=Object.create(Qd.prototype),rf.prototype.constructor=rf;function af(e){Qd.call(this,`featureListTable`,tf(`featureRecord`,e,function(e,t){var n=e.feature;return[{name:`featureTag`+t,type:`TAG`,value:e.tag},{name:`feature`+t,type:`TABLE`,value:new Qd(`featureTable`,[{name:`featureParams`,type:`USHORT`,value:n.featureParams}].concat($d(`lookupListIndex`,n.lookupListIndexes)))}]}))}af.prototype=Object.create(Qd.prototype),af.prototype.constructor=af;function of(e,t){Qd.call(this,`lookupListTable`,ef(`lookup`,e,function(e){var n=t[e.lookupType];return G.assert(!!n,`Unable to write GSUB lookup type `+e.lookupType+` tables.`),new Qd(`lookupTable`,[{name:`lookupType`,type:`USHORT`,value:e.lookupType},{name:`lookupFlag`,type:`USHORT`,value:e.lookupFlag}].concat(ef(`subtable`,e.subtables,n)))}))}of.prototype=Object.create(Qd.prototype),of.prototype.constructor=of;var J={Table:Qd,Record:Qd,Coverage:nf,ScriptList:rf,FeatureList:af,LookupList:of,ushortList:$d,tableList:ef,recordList:tf};function sf(e,t){return e.getUint8(t)}function cf(e,t){return e.getUint16(t,!1)}function lf(e,t){return e.getInt16(t,!1)}function uf(e,t){return e.getUint32(t,!1)}function df(e,t){return e.getInt16(t,!1)+e.getUint16(t+2,!1)/65535}function ff(e,t){for(var n=``,r=t;r<t+4;r+=1)n+=String.fromCharCode(e.getInt8(r));return n}function pf(e,t,n){for(var r=0,i=0;i<n;i+=1)r<<=8,r+=e.getUint8(t+i);return r}function mf(e,t,n){for(var r=[],i=t;i<n;i+=1)r.push(e.getUint8(i));return r}function hf(e){for(var t=``,n=0;n<e.length;n+=1)t+=String.fromCharCode(e[n]);return t}var gf={byte:1,uShort:2,short:2,uLong:4,fixed:4,longDateTime:8,tag:4};function Y(e,t){this.data=e,this.offset=t,this.relativeOffset=0}Y.prototype.parseByte=function(){var e=this.data.getUint8(this.offset+this.relativeOffset);return this.relativeOffset+=1,e},Y.prototype.parseChar=function(){var e=this.data.getInt8(this.offset+this.relativeOffset);return this.relativeOffset+=1,e},Y.prototype.parseCard8=Y.prototype.parseByte,Y.prototype.parseUShort=function(){var e=this.data.getUint16(this.offset+this.relativeOffset);return this.relativeOffset+=2,e},Y.prototype.parseCard16=Y.prototype.parseUShort,Y.prototype.parseSID=Y.prototype.parseUShort,Y.prototype.parseOffset16=Y.prototype.parseUShort,Y.prototype.parseShort=function(){var e=this.data.getInt16(this.offset+this.relativeOffset);return this.relativeOffset+=2,e},Y.prototype.parseF2Dot14=function(){var e=this.data.getInt16(this.offset+this.relativeOffset)/16384;return this.relativeOffset+=2,e},Y.prototype.parseULong=function(){var e=uf(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,e},Y.prototype.parseOffset32=Y.prototype.parseULong,Y.prototype.parseFixed=function(){var e=df(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,e},Y.prototype.parseString=function(e){var t=this.data,n=this.offset+this.relativeOffset,r=``;this.relativeOffset+=e;for(var i=0;i<e;i++)r+=String.fromCharCode(t.getUint8(n+i));return r},Y.prototype.parseTag=function(){return this.parseString(4)},Y.prototype.parseLongDateTime=function(){var e=uf(this.data,this.offset+this.relativeOffset+4);return e-=2082844800,this.relativeOffset+=8,e},Y.prototype.parseVersion=function(e){var t=cf(this.data,this.offset+this.relativeOffset),n=cf(this.data,this.offset+this.relativeOffset+2);return this.relativeOffset+=4,e===void 0&&(e=4096),t+n/e/10},Y.prototype.skip=function(e,t){t===void 0&&(t=1),this.relativeOffset+=gf[e]*t},Y.prototype.parseULongList=function(e){e===void 0&&(e=this.parseULong());for(var t=Array(e),n=this.data,r=this.offset+this.relativeOffset,i=0;i<e;i++)t[i]=n.getUint32(r),r+=4;return this.relativeOffset+=e*4,t},Y.prototype.parseOffset16List=Y.prototype.parseUShortList=function(e){e===void 0&&(e=this.parseUShort());for(var t=Array(e),n=this.data,r=this.offset+this.relativeOffset,i=0;i<e;i++)t[i]=n.getUint16(r),r+=2;return this.relativeOffset+=e*2,t},Y.prototype.parseShortList=function(e){for(var t=Array(e),n=this.data,r=this.offset+this.relativeOffset,i=0;i<e;i++)t[i]=n.getInt16(r),r+=2;return this.relativeOffset+=e*2,t},Y.prototype.parseByteList=function(e){for(var t=Array(e),n=this.data,r=this.offset+this.relativeOffset,i=0;i<e;i++)t[i]=n.getUint8(r++);return this.relativeOffset+=e,t},Y.prototype.parseList=function(e,t){t||(t=e,e=this.parseUShort());for(var n=Array(e),r=0;r<e;r++)n[r]=t.call(this);return n},Y.prototype.parseList32=function(e,t){t||(t=e,e=this.parseULong());for(var n=Array(e),r=0;r<e;r++)n[r]=t.call(this);return n},Y.prototype.parseRecordList=function(e,t){t||(t=e,e=this.parseUShort());for(var n=Array(e),r=Object.keys(t),i=0;i<e;i++){for(var a={},o=0;o<r.length;o++){var s=r[o];a[s]=t[s].call(this)}n[i]=a}return n},Y.prototype.parseRecordList32=function(e,t){t||(t=e,e=this.parseULong());for(var n=Array(e),r=Object.keys(t),i=0;i<e;i++){for(var a={},o=0;o<r.length;o++){var s=r[o];a[s]=t[s].call(this)}n[i]=a}return n},Y.prototype.parseStruct=function(e){if(typeof e==`function`)return e.call(this);for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];n[i]=e[i].call(this)}return n},Y.prototype.parseValueRecord=function(e){if(e===void 0&&(e=this.parseUShort()),e!==0){var t={};return e&1&&(t.xPlacement=this.parseShort()),e&2&&(t.yPlacement=this.parseShort()),e&4&&(t.xAdvance=this.parseShort()),e&8&&(t.yAdvance=this.parseShort()),e&16&&(t.xPlaDevice=void 0,this.parseShort()),e&32&&(t.yPlaDevice=void 0,this.parseShort()),e&64&&(t.xAdvDevice=void 0,this.parseShort()),e&128&&(t.yAdvDevice=void 0,this.parseShort()),t}},Y.prototype.parseValueRecordList=function(){for(var e=this.parseUShort(),t=this.parseUShort(),n=Array(t),r=0;r<t;r++)n[r]=this.parseValueRecord(e);return n},Y.prototype.parsePointer=function(e){var t=this.parseOffset16();if(t>0)return new Y(this.data,this.offset+t).parseStruct(e)},Y.prototype.parsePointer32=function(e){var t=this.parseOffset32();if(t>0)return new Y(this.data,this.offset+t).parseStruct(e)},Y.prototype.parseListOfLists=function(e){for(var t=this.parseOffset16List(),n=t.length,r=this.relativeOffset,i=Array(n),a=0;a<n;a++){var o=t[a];if(o===0){i[a]=void 0;continue}if(this.relativeOffset=o,e){for(var s=this.parseOffset16List(),c=Array(s.length),l=0;l<s.length;l++)this.relativeOffset=o+s[l],c[l]=e.call(this);i[a]=c}else i[a]=this.parseUShortList()}return this.relativeOffset=r,i},Y.prototype.parseCoverage=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort(),n=this.parseUShort();if(t===1)return{format:1,glyphs:this.parseUShortList(n)};if(t===2){for(var r=Array(n),i=0;i<n;i++)r[i]={start:this.parseUShort(),end:this.parseUShort(),index:this.parseUShort()};return{format:2,ranges:r}}throw Error(`0x`+e.toString(16)+`: Coverage format must be 1 or 2.`)},Y.prototype.parseClassDef=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{format:1,startGlyph:this.parseUShort(),classes:this.parseUShortList()};if(t===2)return{format:2,ranges:this.parseRecordList({start:Y.uShort,end:Y.uShort,classId:Y.uShort})};throw Error(`0x`+e.toString(16)+`: ClassDef format must be 1 or 2.`)},Y.list=function(e,t){return function(){return this.parseList(e,t)}},Y.list32=function(e,t){return function(){return this.parseList32(e,t)}},Y.recordList=function(e,t){return function(){return this.parseRecordList(e,t)}},Y.recordList32=function(e,t){return function(){return this.parseRecordList32(e,t)}},Y.pointer=function(e){return function(){return this.parsePointer(e)}},Y.pointer32=function(e){return function(){return this.parsePointer32(e)}},Y.tag=Y.prototype.parseTag,Y.byte=Y.prototype.parseByte,Y.uShort=Y.offset16=Y.prototype.parseUShort,Y.uShortList=Y.prototype.parseUShortList,Y.uLong=Y.offset32=Y.prototype.parseULong,Y.uLongList=Y.prototype.parseULongList,Y.struct=Y.prototype.parseStruct,Y.coverage=Y.prototype.parseCoverage,Y.classDef=Y.prototype.parseClassDef;var _f={reserved:Y.uShort,reqFeatureIndex:Y.uShort,featureIndexes:Y.uShortList};Y.prototype.parseScriptList=function(){return this.parsePointer(Y.recordList({tag:Y.tag,script:Y.pointer({defaultLangSys:Y.pointer(_f),langSysRecords:Y.recordList({tag:Y.tag,langSys:Y.pointer(_f)})})}))||[]},Y.prototype.parseFeatureList=function(){return this.parsePointer(Y.recordList({tag:Y.tag,feature:Y.pointer({featureParams:Y.offset16,lookupListIndexes:Y.uShortList})}))||[]},Y.prototype.parseLookupList=function(e){return this.parsePointer(Y.list(Y.pointer(function(){var t=this.parseUShort();G.argument(1<=t&&t<=9,`GPOS/GSUB lookup type `+t+` unknown.`);var n=this.parseUShort(),r=n&16;return{lookupType:t,lookupFlag:n,subtables:this.parseList(Y.pointer(e[t])),markFilteringSet:r?this.parseUShort():void 0}})))||[]},Y.prototype.parseFeatureVariationsList=function(){return this.parsePointer32(function(){var e=this.parseUShort(),t=this.parseUShort();return G.argument(e===1&&t<1,`GPOS/GSUB feature variations table unknown.`),this.parseRecordList32({conditionSetOffset:Y.offset32,featureTableSubstitutionOffset:Y.offset32})})||[]};var X={getByte:sf,getCard8:sf,getUShort:cf,getCard16:cf,getShort:lf,getULong:uf,getFixed:df,getTag:ff,getOffset:pf,getBytes:mf,bytesToString:hf,Parser:Y};function vf(e,t){t.parseUShort(),e.length=t.parseULong(),e.language=t.parseULong();var n;e.groupCount=n=t.parseULong(),e.glyphIndexMap={};for(var r=0;r<n;r+=1)for(var i=t.parseULong(),a=t.parseULong(),o=t.parseULong(),s=i;s<=a;s+=1)e.glyphIndexMap[s]=o,o++}function yf(e,t,n,r,i){e.length=t.parseUShort(),e.language=t.parseUShort();var a;e.segCount=a=t.parseUShort()>>1,t.skip(`uShort`,3),e.glyphIndexMap={};for(var o=new X.Parser(n,r+i+14),s=new X.Parser(n,r+i+16+a*2),c=new X.Parser(n,r+i+16+a*4),l=new X.Parser(n,r+i+16+a*6),u=r+i+16+a*8,d=0;d<a-1;d+=1)for(var f=void 0,p=o.parseUShort(),m=s.parseUShort(),h=c.parseShort(),g=l.parseUShort(),_=m;_<=p;_+=1)g===0?f=_+h&65535:(u=l.offset+l.relativeOffset-2,u+=g,u+=(_-m)*2,f=X.getUShort(n,u),f!==0&&(f=f+h&65535)),e.glyphIndexMap[_]=f}function bf(e,t){var n={};n.version=X.getUShort(e,t),G.argument(n.version===0,`cmap table version should be 0.`),n.numTables=X.getUShort(e,t+2);for(var r=-1,i=n.numTables-1;i>=0;--i){var a=X.getUShort(e,t+4+i*8),o=X.getUShort(e,t+4+i*8+2);if(a===3&&(o===0||o===1||o===10)||a===0&&(o===0||o===1||o===2||o===3||o===4)){r=X.getULong(e,t+4+i*8+4);break}}if(r===-1)throw Error(`No valid cmap sub-tables found.`);var s=new X.Parser(e,t+r);if(n.format=s.parseUShort(),n.format===12)vf(n,s);else if(n.format===4)yf(n,s,e,t,r);else throw Error(`Only format 4 and 12 cmap tables are supported (found format `+n.format+`).`);return n}function xf(e,t,n){e.segments.push({end:t,start:t,delta:-(t-n),offset:0,glyphIndex:n})}function Sf(e){e.segments.push({end:65535,start:65535,delta:1,offset:0})}function Cf(e){var t=!0,n;for(n=e.length-1;n>0;--n)if(e.get(n).unicode>65535){console.log(`Adding CMAP format 12 (needed!)`),t=!1;break}var r=[{name:`version`,type:`USHORT`,value:0},{name:`numTables`,type:`USHORT`,value:t?1:2},{name:`platformID`,type:`USHORT`,value:3},{name:`encodingID`,type:`USHORT`,value:1},{name:`offset`,type:`ULONG`,value:t?12:20}];t||(r=r.concat([{name:`cmap12PlatformID`,type:`USHORT`,value:3},{name:`cmap12EncodingID`,type:`USHORT`,value:10},{name:`cmap12Offset`,type:`ULONG`,value:0}])),r=r.concat([{name:`format`,type:`USHORT`,value:4},{name:`cmap4Length`,type:`USHORT`,value:0},{name:`language`,type:`USHORT`,value:0},{name:`segCountX2`,type:`USHORT`,value:0},{name:`searchRange`,type:`USHORT`,value:0},{name:`entrySelector`,type:`USHORT`,value:0},{name:`rangeShift`,type:`USHORT`,value:0}]);var i=new J.Table(`cmap`,r);for(i.segments=[],n=0;n<e.length;n+=1){for(var a=e.get(n),o=0;o<a.unicodes.length;o+=1)xf(i,a.unicodes[o],n);i.segments=i.segments.sort(function(e,t){return e.start-t.start})}Sf(i);var s=i.segments.length,c=0,l=[],u=[],d=[],f=[],p=[],m=[];for(n=0;n<s;n+=1){var h=i.segments[n];h.end<=65535&&h.start<=65535?(l=l.concat({name:`end_`+n,type:`USHORT`,value:h.end}),u=u.concat({name:`start_`+n,type:`USHORT`,value:h.start}),d=d.concat({name:`idDelta_`+n,type:`SHORT`,value:h.delta}),f=f.concat({name:`idRangeOffset_`+n,type:`USHORT`,value:h.offset}),h.glyphId!==void 0&&(p=p.concat({name:`glyph_`+n,type:`USHORT`,value:h.glyphId}))):c+=1,!t&&h.glyphIndex!==void 0&&(m=m.concat({name:`cmap12Start_`+n,type:`ULONG`,value:h.start}),m=m.concat({name:`cmap12End_`+n,type:`ULONG`,value:h.end}),m=m.concat({name:`cmap12Glyph_`+n,type:`ULONG`,value:h.glyphIndex}))}if(i.segCountX2=(s-c)*2,i.searchRange=2**Math.floor(Math.log(s-c)/Math.log(2))*2,i.entrySelector=Math.log(i.searchRange/2)/Math.log(2),i.rangeShift=i.segCountX2-i.searchRange,i.fields=i.fields.concat(l),i.fields.push({name:`reservedPad`,type:`USHORT`,value:0}),i.fields=i.fields.concat(u),i.fields=i.fields.concat(d),i.fields=i.fields.concat(f),i.fields=i.fields.concat(p),i.cmap4Length=14+l.length*2+2+u.length*2+d.length*2+f.length*2+p.length*2,!t){var g=16+m.length*4;i.cmap12Offset=20+i.cmap4Length,i.fields=i.fields.concat([{name:`cmap12Format`,type:`USHORT`,value:12},{name:`cmap12Reserved`,type:`USHORT`,value:0},{name:`cmap12Length`,type:`ULONG`,value:g},{name:`cmap12Language`,type:`ULONG`,value:0},{name:`cmap12nGroups`,type:`ULONG`,value:m.length/3}]),i.fields=i.fields.concat(m)}return i}var wf={parse:bf,make:Cf},Tf=`.notdef,space,exclam,quotedbl,numbersign,dollar,percent,ampersand,quoteright,parenleft,parenright,asterisk,plus,comma,hyphen,period,slash,zero,one,two,three,four,five,six,seven,eight,nine,colon,semicolon,less,equal,greater,question,at,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,bracketleft,backslash,bracketright,asciicircum,underscore,quoteleft,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,braceleft,bar,braceright,asciitilde,exclamdown,cent,sterling,fraction,yen,florin,section,currency,quotesingle,quotedblleft,guillemotleft,guilsinglleft,guilsinglright,fi,fl,endash,dagger,daggerdbl,periodcentered,paragraph,bullet,quotesinglbase,quotedblbase,quotedblright,guillemotright,ellipsis,perthousand,questiondown,grave,acute,circumflex,tilde,macron,breve,dotaccent,dieresis,ring,cedilla,hungarumlaut,ogonek,caron,emdash,AE,ordfeminine,Lslash,Oslash,OE,ordmasculine,ae,dotlessi,lslash,oslash,oe,germandbls,onesuperior,logicalnot,mu,trademark,Eth,onehalf,plusminus,Thorn,onequarter,divide,brokenbar,degree,thorn,threequarters,twosuperior,registered,minus,eth,multiply,threesuperior,copyright,Aacute,Acircumflex,Adieresis,Agrave,Aring,Atilde,Ccedilla,Eacute,Ecircumflex,Edieresis,Egrave,Iacute,Icircumflex,Idieresis,Igrave,Ntilde,Oacute,Ocircumflex,Odieresis,Ograve,Otilde,Scaron,Uacute,Ucircumflex,Udieresis,Ugrave,Yacute,Ydieresis,Zcaron,aacute,acircumflex,adieresis,agrave,aring,atilde,ccedilla,eacute,ecircumflex,edieresis,egrave,iacute,icircumflex,idieresis,igrave,ntilde,oacute,ocircumflex,odieresis,ograve,otilde,scaron,uacute,ucircumflex,udieresis,ugrave,yacute,ydieresis,zcaron,exclamsmall,Hungarumlautsmall,dollaroldstyle,dollarsuperior,ampersandsmall,Acutesmall,parenleftsuperior,parenrightsuperior,266 ff,onedotenleader,zerooldstyle,oneoldstyle,twooldstyle,threeoldstyle,fouroldstyle,fiveoldstyle,sixoldstyle,sevenoldstyle,eightoldstyle,nineoldstyle,commasuperior,threequartersemdash,periodsuperior,questionsmall,asuperior,bsuperior,centsuperior,dsuperior,esuperior,isuperior,lsuperior,msuperior,nsuperior,osuperior,rsuperior,ssuperior,tsuperior,ff,ffi,ffl,parenleftinferior,parenrightinferior,Circumflexsmall,hyphensuperior,Gravesmall,Asmall,Bsmall,Csmall,Dsmall,Esmall,Fsmall,Gsmall,Hsmall,Ismall,Jsmall,Ksmall,Lsmall,Msmall,Nsmall,Osmall,Psmall,Qsmall,Rsmall,Ssmall,Tsmall,Usmall,Vsmall,Wsmall,Xsmall,Ysmall,Zsmall,colonmonetary,onefitted,rupiah,Tildesmall,exclamdownsmall,centoldstyle,Lslashsmall,Scaronsmall,Zcaronsmall,Dieresissmall,Brevesmall,Caronsmall,Dotaccentsmall,Macronsmall,figuredash,hypheninferior,Ogoneksmall,Ringsmall,Cedillasmall,questiondownsmall,oneeighth,threeeighths,fiveeighths,seveneighths,onethird,twothirds,zerosuperior,foursuperior,fivesuperior,sixsuperior,sevensuperior,eightsuperior,ninesuperior,zeroinferior,oneinferior,twoinferior,threeinferior,fourinferior,fiveinferior,sixinferior,seveninferior,eightinferior,nineinferior,centinferior,dollarinferior,periodinferior,commainferior,Agravesmall,Aacutesmall,Acircumflexsmall,Atildesmall,Adieresissmall,Aringsmall,AEsmall,Ccedillasmall,Egravesmall,Eacutesmall,Ecircumflexsmall,Edieresissmall,Igravesmall,Iacutesmall,Icircumflexsmall,Idieresissmall,Ethsmall,Ntildesmall,Ogravesmall,Oacutesmall,Ocircumflexsmall,Otildesmall,Odieresissmall,OEsmall,Oslashsmall,Ugravesmall,Uacutesmall,Ucircumflexsmall,Udieresissmall,Yacutesmall,Thornsmall,Ydieresissmall,001.000,001.001,001.002,001.003,Black,Bold,Book,Light,Medium,Regular,Roman,Semibold`.split(`,`),Ef=`................................space.exclam.quotedbl.numbersign.dollar.percent.ampersand.quoteright.parenleft.parenright.asterisk.plus.comma.hyphen.period.slash.zero.one.two.three.four.five.six.seven.eight.nine.colon.semicolon.less.equal.greater.question.at.A.B.C.D.E.F.G.H.I.J.K.L.M.N.O.P.Q.R.S.T.U.V.W.X.Y.Z.bracketleft.backslash.bracketright.asciicircum.underscore.quoteleft.a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z.braceleft.bar.braceright.asciitilde...................................exclamdown.cent.sterling.fraction.yen.florin.section.currency.quotesingle.quotedblleft.guillemotleft.guilsinglleft.guilsinglright.fi.fl..endash.dagger.daggerdbl.periodcentered..paragraph.bullet.quotesinglbase.quotedblbase.quotedblright.guillemotright.ellipsis.perthousand..questiondown..grave.acute.circumflex.tilde.macron.breve.dotaccent.dieresis..ring.cedilla..hungarumlaut.ogonek.caron.emdash.................AE..ordfeminine.....Lslash.Oslash.OE.ordmasculine......ae....dotlessi...lslash.oslash.oe.germandbls`.split(`.`),Df=`................................space.exclamsmall.Hungarumlautsmall..dollaroldstyle.dollarsuperior.ampersandsmall.Acutesmall.parenleftsuperior.parenrightsuperior.twodotenleader.onedotenleader.comma.hyphen.period.fraction.zerooldstyle.oneoldstyle.twooldstyle.threeoldstyle.fouroldstyle.fiveoldstyle.sixoldstyle.sevenoldstyle.eightoldstyle.nineoldstyle.colon.semicolon.commasuperior.threequartersemdash.periodsuperior.questionsmall..asuperior.bsuperior.centsuperior.dsuperior.esuperior...isuperior...lsuperior.msuperior.nsuperior.osuperior...rsuperior.ssuperior.tsuperior..ff.fi.fl.ffi.ffl.parenleftinferior..parenrightinferior.Circumflexsmall.hyphensuperior.Gravesmall.Asmall.Bsmall.Csmall.Dsmall.Esmall.Fsmall.Gsmall.Hsmall.Ismall.Jsmall.Ksmall.Lsmall.Msmall.Nsmall.Osmall.Psmall.Qsmall.Rsmall.Ssmall.Tsmall.Usmall.Vsmall.Wsmall.Xsmall.Ysmall.Zsmall.colonmonetary.onefitted.rupiah.Tildesmall...................................exclamdownsmall.centoldstyle.Lslashsmall...Scaronsmall.Zcaronsmall.Dieresissmall.Brevesmall.Caronsmall..Dotaccentsmall...Macronsmall...figuredash.hypheninferior...Ogoneksmall.Ringsmall.Cedillasmall....onequarter.onehalf.threequarters.questiondownsmall.oneeighth.threeeighths.fiveeighths.seveneighths.onethird.twothirds...zerosuperior.onesuperior.twosuperior.threesuperior.foursuperior.fivesuperior.sixsuperior.sevensuperior.eightsuperior.ninesuperior.zeroinferior.oneinferior.twoinferior.threeinferior.fourinferior.fiveinferior.sixinferior.seveninferior.eightinferior.nineinferior.centinferior.dollarinferior.periodinferior.commainferior.Agravesmall.Aacutesmall.Acircumflexsmall.Atildesmall.Adieresissmall.Aringsmall.AEsmall.Ccedillasmall.Egravesmall.Eacutesmall.Ecircumflexsmall.Edieresissmall.Igravesmall.Iacutesmall.Icircumflexsmall.Idieresissmall.Ethsmall.Ntildesmall.Ogravesmall.Oacutesmall.Ocircumflexsmall.Otildesmall.Odieresissmall.OEsmall.Oslashsmall.Ugravesmall.Uacutesmall.Ucircumflexsmall.Udieresissmall.Yacutesmall.Thornsmall.Ydieresissmall`.split(`.`),Of=`.notdef,.null,nonmarkingreturn,space,exclam,quotedbl,numbersign,dollar,percent,ampersand,quotesingle,parenleft,parenright,asterisk,plus,comma,hyphen,period,slash,zero,one,two,three,four,five,six,seven,eight,nine,colon,semicolon,less,equal,greater,question,at,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,bracketleft,backslash,bracketright,asciicircum,underscore,grave,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,braceleft,bar,braceright,asciitilde,Adieresis,Aring,Ccedilla,Eacute,Ntilde,Odieresis,Udieresis,aacute,agrave,acircumflex,adieresis,atilde,aring,ccedilla,eacute,egrave,ecircumflex,edieresis,iacute,igrave,icircumflex,idieresis,ntilde,oacute,ograve,ocircumflex,odieresis,otilde,uacute,ugrave,ucircumflex,udieresis,dagger,degree,cent,sterling,section,bullet,paragraph,germandbls,registered,copyright,trademark,acute,dieresis,notequal,AE,Oslash,infinity,plusminus,lessequal,greaterequal,yen,mu,partialdiff,summation,product,pi,integral,ordfeminine,ordmasculine,Omega,ae,oslash,questiondown,exclamdown,logicalnot,radical,florin,approxequal,Delta,guillemotleft,guillemotright,ellipsis,nonbreakingspace,Agrave,Atilde,Otilde,OE,oe,endash,emdash,quotedblleft,quotedblright,quoteleft,quoteright,divide,lozenge,ydieresis,Ydieresis,fraction,currency,guilsinglleft,guilsinglright,fi,fl,daggerdbl,periodcentered,quotesinglbase,quotedblbase,perthousand,Acircumflex,Ecircumflex,Aacute,Edieresis,Egrave,Iacute,Icircumflex,Idieresis,Igrave,Oacute,Ocircumflex,apple,Ograve,Uacute,Ucircumflex,Ugrave,dotlessi,circumflex,tilde,macron,breve,dotaccent,ring,cedilla,hungarumlaut,ogonek,caron,Lslash,lslash,Scaron,scaron,Zcaron,zcaron,brokenbar,Eth,eth,Yacute,yacute,Thorn,thorn,minus,multiply,onesuperior,twosuperior,threesuperior,onehalf,onequarter,threequarters,franc,Gbreve,gbreve,Idotaccent,Scedilla,scedilla,Cacute,cacute,Ccaron,ccaron,dcroat`.split(`,`);function kf(e){this.font=e}kf.prototype.charToGlyphIndex=function(e){var t=e.codePointAt(0),n=this.font.glyphs;if(n){for(var r=0;r<n.length;r+=1)for(var i=n.get(r),a=0;a<i.unicodes.length;a+=1)if(i.unicodes[a]===t)return r}return null};function Af(e){this.cmap=e}Af.prototype.charToGlyphIndex=function(e){return this.cmap.glyphIndexMap[e.codePointAt(0)]||0};function jf(e,t){this.encoding=e,this.charset=t}jf.prototype.charToGlyphIndex=function(e){var t=e.codePointAt(0),n=this.encoding[t];return this.charset.indexOf(n)};function Mf(e){switch(e.version){case 1:this.names=Of.slice();break;case 2:this.names=Array(e.numberOfGlyphs);for(var t=0;t<e.numberOfGlyphs;t++)e.glyphNameIndex[t]<Of.length?this.names[t]=Of[e.glyphNameIndex[t]]:this.names[t]=e.names[e.glyphNameIndex[t]-Of.length];break;case 2.5:this.names=Array(e.numberOfGlyphs);for(var n=0;n<e.numberOfGlyphs;n++)this.names[n]=Of[n+e.glyphNameIndex[n]];break;case 3:this.names=[];break;default:this.names=[];break}}Mf.prototype.nameToGlyphIndex=function(e){return this.names.indexOf(e)},Mf.prototype.glyphIndexToName=function(e){return this.names[e]};function Nf(e){for(var t,n=e.tables.cmap.glyphIndexMap,r=Object.keys(n),i=0;i<r.length;i+=1){var a=r[i],o=n[a];t=e.glyphs.get(o),t.addUnicode(parseInt(a))}for(var s=0;s<e.glyphs.length;s+=1)t=e.glyphs.get(s),e.cffEncoding?e.isCIDFont?t.name=`gid`+s:t.name=e.cffEncoding.charset[s]:e.glyphNames.names&&(t.name=e.glyphNames.glyphIndexToName(s))}function Pf(e){e._IndexToUnicodeMap={};for(var t=e.tables.cmap.glyphIndexMap,n=Object.keys(t),r=0;r<n.length;r+=1){var i=n[r],a=t[i];e._IndexToUnicodeMap[a]===void 0?e._IndexToUnicodeMap[a]={unicodes:[parseInt(i)]}:e._IndexToUnicodeMap[a].unicodes.push(parseInt(i))}}function Ff(e,t){t.lowMemory?Pf(e):Nf(e)}function If(e,t,n,r,i){e.beginPath(),e.moveTo(t,n),e.lineTo(r,i),e.stroke()}var Lf={line:If};function Rf(e,t){var n=t||new Id;return{configurable:!0,get:function(){return typeof n==`function`&&(n=n()),n},set:function(e){n=e}}}function zf(e){this.bindConstructorValues(e)}zf.prototype.bindConstructorValues=function(e){this.index=e.index||0,this.name=e.name||null,this.unicode=e.unicode||void 0,this.unicodes=e.unicodes||e.unicode!==void 0?[e.unicode]:[],`xMin`in e&&(this.xMin=e.xMin),`yMin`in e&&(this.yMin=e.yMin),`xMax`in e&&(this.xMax=e.xMax),`yMax`in e&&(this.yMax=e.yMax),`advanceWidth`in e&&(this.advanceWidth=e.advanceWidth),Object.defineProperty(this,"path",Rf(this,e.path))},zf.prototype.addUnicode=function(e){this.unicodes.length===0&&(this.unicode=e),this.unicodes.push(e)},zf.prototype.getBoundingBox=function(){return this.path.getBoundingBox()},zf.prototype.getPath=function(e,t,n,r,i){e=e===void 0?0:e,t=t===void 0?0:t,n=n===void 0?72:n;var a,o;r||={};var s=r.xScale,c=r.yScale;if(r.hinting&&i&&i.hinting&&(o=this.path&&i.hinting.exec(this,n)),o)a=i.hinting.getCommands(o),e=Math.round(e),t=Math.round(t),s=c=1;else{a=this.path.commands;var l=1/(this.path.unitsPerEm||1e3)*n;s===void 0&&(s=l),c===void 0&&(c=l)}for(var u=new Id,d=0;d<a.length;d+=1){var f=a[d];f.type===`M`?u.moveTo(e+f.x*s,t+-f.y*c):f.type===`L`?u.lineTo(e+f.x*s,t+-f.y*c):f.type===`Q`?u.quadraticCurveTo(e+f.x1*s,t+-f.y1*c,e+f.x*s,t+-f.y*c):f.type===`C`?u.curveTo(e+f.x1*s,t+-f.y1*c,e+f.x2*s,t+-f.y2*c,e+f.x*s,t+-f.y*c):f.type===`Z`&&u.closePath()}return u},zf.prototype.getContours=function(){if(this.points===void 0)return[];for(var e=[],t=[],n=0;n<this.points.length;n+=1){var r=this.points[n];t.push(r),r.lastPointOfContour&&(e.push(t),t=[])}return G.argument(t.length===0,`There are still points left in the current contour.`),e},zf.prototype.getMetrics=function(){for(var e=this.path.commands,t=[],n=[],r=0;r<e.length;r+=1){var i=e[r];i.type!==`Z`&&(t.push(i.x),n.push(i.y)),(i.type===`Q`||i.type===`C`)&&(t.push(i.x1),n.push(i.y1)),i.type===`C`&&(t.push(i.x2),n.push(i.y2))}var a={xMin:Math.min.apply(null,t),yMin:Math.min.apply(null,n),xMax:Math.max.apply(null,t),yMax:Math.max.apply(null,n),leftSideBearing:this.leftSideBearing};return isFinite(a.xMin)||(a.xMin=0),isFinite(a.xMax)||(a.xMax=this.advanceWidth),isFinite(a.yMin)||(a.yMin=0),isFinite(a.yMax)||(a.yMax=0),a.rightSideBearing=this.advanceWidth-a.leftSideBearing-(a.xMax-a.xMin),a},zf.prototype.draw=function(e,t,n,r,i){this.getPath(t,n,r,i).draw(e)},zf.prototype.drawPoints=function(e,t,n,r){function i(t,n,r,i){e.beginPath();for(var a=0;a<t.length;a+=1)e.moveTo(n+t[a].x*i,r+t[a].y*i),e.arc(n+t[a].x*i,r+t[a].y*i,2,0,Math.PI*2,!1);e.closePath(),e.fill()}t=t===void 0?0:t,n=n===void 0?0:n,r=r===void 0?24:r;for(var a=1/this.path.unitsPerEm*r,o=[],s=[],c=this.path,l=0;l<c.commands.length;l+=1){var u=c.commands[l];u.x!==void 0&&o.push({x:u.x,y:-u.y}),u.x1!==void 0&&s.push({x:u.x1,y:-u.y1}),u.x2!==void 0&&s.push({x:u.x2,y:-u.y2})}e.fillStyle=`blue`,i(o,t,n,a),e.fillStyle=`red`,i(s,t,n,a)},zf.prototype.drawMetrics=function(e,t,n,r){var i;t=t===void 0?0:t,n=n===void 0?0:n,r=r===void 0?24:r,i=1/this.path.unitsPerEm*r,e.lineWidth=1,e.strokeStyle=`black`,Lf.line(e,t,-1e4,t,1e4),Lf.line(e,-1e4,n,1e4,n);var a=this.xMin||0,o=this.yMin||0,s=this.xMax||0,c=this.yMax||0,l=this.advanceWidth||0;e.strokeStyle=`blue`,Lf.line(e,t+a*i,-1e4,t+a*i,1e4),Lf.line(e,t+s*i,-1e4,t+s*i,1e4),Lf.line(e,-1e4,n+-o*i,1e4,n+-o*i),Lf.line(e,-1e4,n+-c*i,1e4,n+-c*i),e.strokeStyle=`green`,Lf.line(e,t+l*i,-1e4,t+l*i,1e4)};function Bf(e,t,n){Object.defineProperty(e,t,{get:function(){return e.path,e[n]},set:function(t){e[n]=t},enumerable:!0,configurable:!0})}function Vf(e,t){if(this.font=e,this.glyphs={},Array.isArray(t))for(var n=0;n<t.length;n++){var r=t[n];r.path.unitsPerEm=e.unitsPerEm,this.glyphs[n]=r}this.length=t&&t.length||0}Vf.prototype.get=function(e){if(this.glyphs[e]===void 0){this.font._push(e),typeof this.glyphs[e]==`function`&&(this.glyphs[e]=this.glyphs[e]());var t=this.glyphs[e],n=this.font._IndexToUnicodeMap[e];if(n)for(var r=0;r<n.unicodes.length;r++)t.addUnicode(n.unicodes[r]);this.font.cffEncoding?this.font.isCIDFont?t.name=`gid`+e:t.name=this.font.cffEncoding.charset[e]:this.font.glyphNames.names&&(t.name=this.font.glyphNames.glyphIndexToName(e)),this.glyphs[e].advanceWidth=this.font._hmtxTableData[e].advanceWidth,this.glyphs[e].leftSideBearing=this.font._hmtxTableData[e].leftSideBearing}else typeof this.glyphs[e]==`function`&&(this.glyphs[e]=this.glyphs[e]());return this.glyphs[e]},Vf.prototype.push=function(e,t){this.glyphs[e]=t,this.length++};function Hf(e,t){return new zf({index:t,font:e})}function Uf(e,t,n,r,i,a){return function(){var o=new zf({index:t,font:e});return o.path=function(){n(o,r,i);var t=a(e.glyphs,o);return t.unitsPerEm=e.unitsPerEm,t},Bf(o,`xMin`,`_xMin`),Bf(o,`xMax`,`_xMax`),Bf(o,`yMin`,`_yMin`),Bf(o,`yMax`,`_yMax`),o}}function Wf(e,t,n,r){return function(){var i=new zf({index:t,font:e});return i.path=function(){var t=n(e,i,r);return t.unitsPerEm=e.unitsPerEm,t},i}}var Gf={GlyphSet:Vf,glyphLoader:Hf,ttfGlyphLoader:Uf,cffGlyphLoader:Wf};function Kf(e,t){if(e===t)return!0;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(var n=0;n<e.length;n+=1)if(!Kf(e[n],t[n]))return!1;return!0}else return!1}function qf(e){return e.length<1240?107:e.length<33900?1131:32768}function Jf(e,t,n){var r=[],i=[],a=X.getCard16(e,t),o,s;if(a!==0){var c=X.getByte(e,t+2);o=t+(a+1)*c+2;for(var l=t+3,u=0;u<a+1;u+=1)r.push(X.getOffset(e,l,c)),l+=c;s=o+r[a]}else s=t+2;for(var d=0;d<r.length-1;d+=1){var f=X.getBytes(e,o+r[d],o+r[d+1]);n&&(f=n(f)),i.push(f)}return{objects:i,startOffset:t,endOffset:s}}function Yf(e,t){var n=[],r=X.getCard16(e,t),i,a;if(r!==0){var o=X.getByte(e,t+2);i=t+(r+1)*o+2;for(var s=t+3,c=0;c<r+1;c+=1)n.push(X.getOffset(e,s,o)),s+=o;a=i+n[r]}else a=t+2;return{offsets:n,startOffset:t,endOffset:a}}function Xf(e,t,n,r,i){var a=X.getCard16(n,r),o=0;if(a!==0){var s=X.getByte(n,r+2);o=r+(a+1)*s+2}var c=X.getBytes(n,o+t[e],o+t[e+1]);return i&&(c=i(c)),c}function Zf(e){for(var t=``,n=15,r=[`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`.`,`E`,`E-`,null,`-`];;){var i=e.parseByte(),a=i>>4,o=i&15;if(a===n||(t+=r[a],o===n))break;t+=r[o]}return parseFloat(t)}function Qf(e,t){var n,r,i,a;if(t===28)return n=e.parseByte(),r=e.parseByte(),n<<8|r;if(t===29)return n=e.parseByte(),r=e.parseByte(),i=e.parseByte(),a=e.parseByte(),n<<24|r<<16|i<<8|a;if(t===30)return Zf(e);if(t>=32&&t<=246)return t-139;if(t>=247&&t<=250)return n=e.parseByte(),(t-247)*256+n+108;if(t>=251&&t<=254)return n=e.parseByte(),-(t-251)*256-n-108;throw Error(`Invalid b0 `+t)}function $f(e){for(var t={},n=0;n<e.length;n+=1){var r=e[n][0],i=e[n][1],a=void 0;if(a=i.length===1?i[0]:i,t.hasOwnProperty(r)&&!isNaN(t[r]))throw Error(`Object `+t+` already has key `+r);t[r]=a}return t}function ep(e,t,n){t=t===void 0?0:t;var r=new X.Parser(e,t),i=[],a=[];for(n=n===void 0?e.length:n;r.relativeOffset<n;){var o=r.parseByte();o<=21?(o===12&&(o=1200+r.parseByte()),i.push([o,a]),a=[]):a.push(Qf(r,o))}return $f(i)}function tp(e,t){return t=t<=390?Tf[t]:e[t-391],t}function np(e,t,n){for(var r={},i,a=0;a<t.length;a+=1){var o=t[a];if(Array.isArray(o.type)){var s=[];s.length=o.type.length;for(var c=0;c<o.type.length;c++)i=e[o.op]===void 0?void 0:e[o.op][c],i===void 0&&(i=o.value!==void 0&&o.value[c]!==void 0?o.value[c]:null),o.type[c]===`SID`&&(i=tp(n,i)),s[c]=i;r[o.name]=s}else i=e[o.op],i===void 0&&(i=o.value===void 0?null:o.value),o.type===`SID`&&(i=tp(n,i)),r[o.name]=i}return r}function rp(e,t){var n={};return n.formatMajor=X.getCard8(e,t),n.formatMinor=X.getCard8(e,t+1),n.size=X.getCard8(e,t+2),n.offsetSize=X.getCard8(e,t+3),n.startOffset=t,n.endOffset=t+4,n}var ip=[{name:`version`,op:0,type:`SID`},{name:`notice`,op:1,type:`SID`},{name:`copyright`,op:1200,type:`SID`},{name:`fullName`,op:2,type:`SID`},{name:`familyName`,op:3,type:`SID`},{name:`weight`,op:4,type:`SID`},{name:`isFixedPitch`,op:1201,type:`number`,value:0},{name:`italicAngle`,op:1202,type:`number`,value:0},{name:`underlinePosition`,op:1203,type:`number`,value:-100},{name:`underlineThickness`,op:1204,type:`number`,value:50},{name:`paintType`,op:1205,type:`number`,value:0},{name:`charstringType`,op:1206,type:`number`,value:2},{name:`fontMatrix`,op:1207,type:[`real`,`real`,`real`,`real`,`real`,`real`],value:[.001,0,0,.001,0,0]},{name:`uniqueId`,op:13,type:`number`},{name:`fontBBox`,op:5,type:[`number`,`number`,`number`,`number`],value:[0,0,0,0]},{name:`strokeWidth`,op:1208,type:`number`,value:0},{name:`xuid`,op:14,type:[],value:null},{name:`charset`,op:15,type:`offset`,value:0},{name:`encoding`,op:16,type:`offset`,value:0},{name:`charStrings`,op:17,type:`offset`,value:0},{name:`private`,op:18,type:[`number`,`offset`],value:[0,0]},{name:`ros`,op:1230,type:[`SID`,`SID`,`number`]},{name:`cidFontVersion`,op:1231,type:`number`,value:0},{name:`cidFontRevision`,op:1232,type:`number`,value:0},{name:`cidFontType`,op:1233,type:`number`,value:0},{name:`cidCount`,op:1234,type:`number`,value:8720},{name:`uidBase`,op:1235,type:`number`},{name:`fdArray`,op:1236,type:`offset`},{name:`fdSelect`,op:1237,type:`offset`},{name:`fontName`,op:1238,type:`SID`}],ap=[{name:`subrs`,op:19,type:`offset`,value:0},{name:`defaultWidthX`,op:20,type:`number`,value:0},{name:`nominalWidthX`,op:21,type:`number`,value:0}];function op(e,t){return np(ep(e,0,e.byteLength),ip,t)}function sp(e,t,n,r){return np(ep(e,t,n),ap,r)}function cp(e,t,n,r){for(var i=[],a=0;a<n.length;a+=1){var o=op(new DataView(new Uint8Array(n[a]).buffer),r);o._subrs=[],o._subrsBias=0,o._defaultWidthX=0,o._nominalWidthX=0;var s=o.private[0],c=o.private[1];if(s!==0&&c!==0){var l=sp(e,c+t,s,r);o._defaultWidthX=l.defaultWidthX,o._nominalWidthX=l.nominalWidthX,l.subrs!==0&&(o._subrs=Jf(e,c+l.subrs+t).objects,o._subrsBias=qf(o._subrs)),o._privateDict=l}i.push(o)}return i}function lp(e,t,n,r){var i,a,o=new X.Parser(e,t);--n;var s=[`.notdef`],c=o.parseCard8();if(c===0)for(var l=0;l<n;l+=1)i=o.parseSID(),s.push(tp(r,i));else if(c===1)for(;s.length<=n;){i=o.parseSID(),a=o.parseCard8();for(var u=0;u<=a;u+=1)s.push(tp(r,i)),i+=1}else if(c===2)for(;s.length<=n;){i=o.parseSID(),a=o.parseCard16();for(var d=0;d<=a;d+=1)s.push(tp(r,i)),i+=1}else throw Error(`Unknown charset format `+c);return s}function up(e,t,n){var r,i={},a=new X.Parser(e,t),o=a.parseCard8();if(o===0)for(var s=a.parseCard8(),c=0;c<s;c+=1)r=a.parseCard8(),i[r]=c;else if(o===1){var l=a.parseCard8();r=1;for(var u=0;u<l;u+=1)for(var d=a.parseCard8(),f=a.parseCard8(),p=d;p<=d+f;p+=1)i[p]=r,r+=1}else throw Error(`Unknown encoding format `+o);return new jf(i,n)}function dp(e,t,n){var r,i,a,o,s=new Id,c=[],l=0,u=!1,d=!1,f=0,p=0,m,h,g,_;if(e.isCIDFont){var v=e.tables.cff.topDict._fdSelect[t.index],y=e.tables.cff.topDict._fdArray[v];m=y._subrs,h=y._subrsBias,g=y._defaultWidthX,_=y._nominalWidthX}else m=e.tables.cff.topDict._subrs,h=e.tables.cff.topDict._subrsBias,g=e.tables.cff.topDict._defaultWidthX,_=e.tables.cff.topDict._nominalWidthX;var b=g;function x(e,t){d&&s.closePath(),s.moveTo(e,t),d=!0}function S(){c.length%2!=0&&!u&&(b=c.shift()+_),l+=c.length>>1,c.length=0,u=!0}function C(n){for(var g,v,y,w,T,E,D,O,k,A,j,M,N=0;N<n.length;){var P=n[N];switch(N+=1,P){case 1:S();break;case 3:S();break;case 4:c.length>1&&!u&&(b=c.shift()+_,u=!0),p+=c.pop(),x(f,p);break;case 5:for(;c.length>0;)f+=c.shift(),p+=c.shift(),s.lineTo(f,p);break;case 6:for(;c.length>0&&(f+=c.shift(),s.lineTo(f,p),c.length!==0);)p+=c.shift(),s.lineTo(f,p);break;case 7:for(;c.length>0&&(p+=c.shift(),s.lineTo(f,p),c.length!==0);)f+=c.shift(),s.lineTo(f,p);break;case 8:for(;c.length>0;)r=f+c.shift(),i=p+c.shift(),a=r+c.shift(),o=i+c.shift(),f=a+c.shift(),p=o+c.shift(),s.curveTo(r,i,a,o,f,p);break;case 10:T=c.pop()+h,E=m[T],E&&C(E);break;case 11:return;case 12:switch(P=n[N],N+=1,P){case 35:r=f+c.shift(),i=p+c.shift(),a=r+c.shift(),o=i+c.shift(),D=a+c.shift(),O=o+c.shift(),k=D+c.shift(),A=O+c.shift(),j=k+c.shift(),M=A+c.shift(),f=j+c.shift(),p=M+c.shift(),c.shift(),s.curveTo(r,i,a,o,D,O),s.curveTo(k,A,j,M,f,p);break;case 34:r=f+c.shift(),i=p,a=r+c.shift(),o=i+c.shift(),D=a+c.shift(),O=o,k=D+c.shift(),A=o,j=k+c.shift(),M=p,f=j+c.shift(),s.curveTo(r,i,a,o,D,O),s.curveTo(k,A,j,M,f,p);break;case 36:r=f+c.shift(),i=p+c.shift(),a=r+c.shift(),o=i+c.shift(),D=a+c.shift(),O=o,k=D+c.shift(),A=o,j=k+c.shift(),M=A+c.shift(),f=j+c.shift(),s.curveTo(r,i,a,o,D,O),s.curveTo(k,A,j,M,f,p);break;case 37:r=f+c.shift(),i=p+c.shift(),a=r+c.shift(),o=i+c.shift(),D=a+c.shift(),O=o+c.shift(),k=D+c.shift(),A=O+c.shift(),j=k+c.shift(),M=A+c.shift(),Math.abs(j-f)>Math.abs(M-p)?f=j+c.shift():p=M+c.shift(),s.curveTo(r,i,a,o,D,O),s.curveTo(k,A,j,M,f,p);break;default:console.log(`Glyph `+t.index+`: unknown operator 1200`+P),c.length=0}break;case 14:c.length>0&&!u&&(b=c.shift()+_,u=!0),d&&=(s.closePath(),!1);break;case 18:S();break;case 19:case 20:S(),N+=l+7>>3;break;case 21:c.length>2&&!u&&(b=c.shift()+_,u=!0),p+=c.pop(),f+=c.pop(),x(f,p);break;case 22:c.length>1&&!u&&(b=c.shift()+_,u=!0),f+=c.pop(),x(f,p);break;case 23:S();break;case 24:for(;c.length>2;)r=f+c.shift(),i=p+c.shift(),a=r+c.shift(),o=i+c.shift(),f=a+c.shift(),p=o+c.shift(),s.curveTo(r,i,a,o,f,p);f+=c.shift(),p+=c.shift(),s.lineTo(f,p);break;case 25:for(;c.length>6;)f+=c.shift(),p+=c.shift(),s.lineTo(f,p);r=f+c.shift(),i=p+c.shift(),a=r+c.shift(),o=i+c.shift(),f=a+c.shift(),p=o+c.shift(),s.curveTo(r,i,a,o,f,p);break;case 26:for(c.length%2&&(f+=c.shift());c.length>0;)r=f,i=p+c.shift(),a=r+c.shift(),o=i+c.shift(),f=a,p=o+c.shift(),s.curveTo(r,i,a,o,f,p);break;case 27:for(c.length%2&&(p+=c.shift());c.length>0;)r=f+c.shift(),i=p,a=r+c.shift(),o=i+c.shift(),f=a+c.shift(),p=o,s.curveTo(r,i,a,o,f,p);break;case 28:g=n[N],v=n[N+1],c.push((g<<24|v<<16)>>16),N+=2;break;case 29:T=c.pop()+e.gsubrsBias,E=e.gsubrs[T],E&&C(E);break;case 30:for(;c.length>0&&(r=f,i=p+c.shift(),a=r+c.shift(),o=i+c.shift(),f=a+c.shift(),p=o+(c.length===1?c.shift():0),s.curveTo(r,i,a,o,f,p),c.length!==0);)r=f+c.shift(),i=p,a=r+c.shift(),o=i+c.shift(),p=o+c.shift(),f=a+(c.length===1?c.shift():0),s.curveTo(r,i,a,o,f,p);break;case 31:for(;c.length>0&&(r=f+c.shift(),i=p,a=r+c.shift(),o=i+c.shift(),p=o+c.shift(),f=a+(c.length===1?c.shift():0),s.curveTo(r,i,a,o,f,p),c.length!==0);)r=f,i=p+c.shift(),a=r+c.shift(),o=i+c.shift(),f=a+c.shift(),p=o+(c.length===1?c.shift():0),s.curveTo(r,i,a,o,f,p);break;default:P<32?console.log(`Glyph `+t.index+`: unknown operator `+P):P<247?c.push(P-139):P<251?(g=n[N],N+=1,c.push((P-247)*256+g+108)):P<255?(g=n[N],N+=1,c.push(-(P-251)*256-g-108)):(g=n[N],v=n[N+1],y=n[N+2],w=n[N+3],N+=4,c.push((g<<24|v<<16|y<<8|w)/65536))}}}return C(n),t.advanceWidth=b,s}function fp(e,t,n,r){var i=[],a,o=new X.Parser(e,t),s=o.parseCard8();if(s===0)for(var c=0;c<n;c++){if(a=o.parseCard8(),a>=r)throw Error(`CFF table CID Font FDSelect has bad FD index value `+a+` (FD count `+r+`)`);i.push(a)}else if(s===3){var l=o.parseCard16(),u=o.parseCard16();if(u!==0)throw Error(`CFF Table CID Font FDSelect format 3 range has bad initial GID `+u);for(var d,f=0;f<l;f++){if(a=o.parseCard8(),d=o.parseCard16(),a>=r)throw Error(`CFF table CID Font FDSelect has bad FD index value `+a+` (FD count `+r+`)`);if(d>n)throw Error(`CFF Table CID Font FDSelect format 3 range has bad GID `+d);for(;u<d;u++)i.push(a);u=d}if(d!==n)throw Error(`CFF Table CID Font FDSelect format 3 range has bad final GID `+d)}else throw Error(`CFF Table CID Font FDSelect table has unsupported format `+s);return i}function pp(e,t,n,r){n.tables.cff={};var i=Jf(e,Jf(e,rp(e,t).endOffset,X.bytesToString).endOffset),a=Jf(e,i.endOffset,X.bytesToString);n.gsubrs=Jf(e,a.endOffset).objects,n.gsubrsBias=qf(n.gsubrs);var o=cp(e,t,i.objects,a.objects);if(o.length!==1)throw Error(`CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = `+o.length);var s=o[0];if(n.tables.cff.topDict=s,s._privateDict&&(n.defaultWidthX=s._privateDict.defaultWidthX,n.nominalWidthX=s._privateDict.nominalWidthX),s.ros[0]!==void 0&&s.ros[1]!==void 0&&(n.isCIDFont=!0),n.isCIDFont){var c=s.fdArray,l=s.fdSelect;if(c===0||l===0)throw Error(`Font is marked as a CID font, but FDArray and/or FDSelect information is missing`);c+=t;var u=cp(e,t,Jf(e,c).objects,a.objects);s._fdArray=u,l+=t,s._fdSelect=fp(e,l,n.numGlyphs,u.length)}var d=t+s.private[1],f=sp(e,d,s.private[0],a.objects);n.defaultWidthX=f.defaultWidthX,n.nominalWidthX=f.nominalWidthX,f.subrs===0?(n.subrs=[],n.subrsBias=0):(n.subrs=Jf(e,d+f.subrs).objects,n.subrsBias=qf(n.subrs));var p;r.lowMemory?(p=Yf(e,t+s.charStrings),n.nGlyphs=p.offsets.length):(p=Jf(e,t+s.charStrings),n.nGlyphs=p.objects.length);var m=lp(e,t+s.charset,n.nGlyphs,a.objects);if(s.encoding===0?n.cffEncoding=new jf(Ef,m):s.encoding===1?n.cffEncoding=new jf(Df,m):n.cffEncoding=up(e,t+s.encoding,m),n.encoding=n.encoding||n.cffEncoding,n.glyphs=new Gf.GlyphSet(n),r.lowMemory)n._push=function(r){var i=Xf(r,p.offsets,e,t+s.charStrings);n.glyphs.push(r,Gf.cffGlyphLoader(n,r,dp,i))};else for(var h=0;h<n.nGlyphs;h+=1){var g=p.objects[h];n.glyphs.push(h,Gf.cffGlyphLoader(n,h,dp,g))}}function mp(e,t){var n,r=Tf.indexOf(e);return r>=0&&(n=r),r=t.indexOf(e),r>=0?n=r+Tf.length:(n=Tf.length+t.length,t.push(e)),n}function hp(){return new J.Record(`Header`,[{name:`major`,type:`Card8`,value:1},{name:`minor`,type:`Card8`,value:0},{name:`hdrSize`,type:`Card8`,value:4},{name:`major`,type:`Card8`,value:1}])}function gp(e){var t=new J.Record(`Name INDEX`,[{name:`names`,type:`INDEX`,value:[]}]);t.names=[];for(var n=0;n<e.length;n+=1)t.names.push({name:`name_`+n,type:`NAME`,value:e[n]});return t}function _p(e,t,n){for(var r={},i=0;i<e.length;i+=1){var a=e[i],o=t[a.name];o!==void 0&&!Kf(o,a.value)&&(a.type===`SID`&&(o=mp(o,n)),r[a.op]={name:a.name,type:a.type,value:o})}return r}function vp(e,t){var n=new J.Record(`Top DICT`,[{name:`dict`,type:`DICT`,value:{}}]);return n.dict=_p(ip,e,t),n}function yp(e){var t=new J.Record(`Top DICT INDEX`,[{name:`topDicts`,type:`INDEX`,value:[]}]);return t.topDicts=[{name:`topDict_0`,type:`TABLE`,value:e}],t}function bp(e){var t=new J.Record(`String INDEX`,[{name:`strings`,type:`INDEX`,value:[]}]);t.strings=[];for(var n=0;n<e.length;n+=1)t.strings.push({name:`string_`+n,type:`STRING`,value:e[n]});return t}function xp(){return new J.Record(`Global Subr INDEX`,[{name:`subrs`,type:`INDEX`,value:[]}])}function Sp(e,t){for(var n=new J.Record(`Charsets`,[{name:`format`,type:`Card8`,value:0}]),r=0;r<e.length;r+=1){var i=e[r],a=mp(i,t);n.fields.push({name:`glyph_`+r,type:`SID`,value:a})}return n}function Cp(e){var t=[],n=e.path;t.push({name:`width`,type:`NUMBER`,value:e.advanceWidth});for(var r=0,i=0,a=0;a<n.commands.length;a+=1){var o=void 0,s=void 0,c=n.commands[a];if(c.type===`Q`){var l=1/3,u=2/3;c={type:`C`,x:c.x,y:c.y,x1:Math.round(l*r+u*c.x1),y1:Math.round(l*i+u*c.y1),x2:Math.round(l*c.x+u*c.x1),y2:Math.round(l*c.y+u*c.y1)}}if(c.type===`M`)o=Math.round(c.x-r),s=Math.round(c.y-i),t.push({name:`dx`,type:`NUMBER`,value:o}),t.push({name:`dy`,type:`NUMBER`,value:s}),t.push({name:`rmoveto`,type:`OP`,value:21}),r=Math.round(c.x),i=Math.round(c.y);else if(c.type===`L`)o=Math.round(c.x-r),s=Math.round(c.y-i),t.push({name:`dx`,type:`NUMBER`,value:o}),t.push({name:`dy`,type:`NUMBER`,value:s}),t.push({name:`rlineto`,type:`OP`,value:5}),r=Math.round(c.x),i=Math.round(c.y);else if(c.type===`C`){var d=Math.round(c.x1-r),f=Math.round(c.y1-i),p=Math.round(c.x2-c.x1),m=Math.round(c.y2-c.y1);o=Math.round(c.x-c.x2),s=Math.round(c.y-c.y2),t.push({name:`dx1`,type:`NUMBER`,value:d}),t.push({name:`dy1`,type:`NUMBER`,value:f}),t.push({name:`dx2`,type:`NUMBER`,value:p}),t.push({name:`dy2`,type:`NUMBER`,value:m}),t.push({name:`dx`,type:`NUMBER`,value:o}),t.push({name:`dy`,type:`NUMBER`,value:s}),t.push({name:`rrcurveto`,type:`OP`,value:8}),r=Math.round(c.x),i=Math.round(c.y)}}return t.push({name:`endchar`,type:`OP`,value:14}),t}function wp(e){for(var t=new J.Record(`CharStrings INDEX`,[{name:`charStrings`,type:`INDEX`,value:[]}]),n=0;n<e.length;n+=1){var r=e.get(n),i=Cp(r);t.charStrings.push({name:r.name,type:`CHARSTRING`,value:i})}return t}function Tp(e,t){var n=new J.Record(`Private DICT`,[{name:`dict`,type:`DICT`,value:{}}]);return n.dict=_p(ap,e,t),n}function Ep(e,t){for(var n=new J.Table(`CFF `,[{name:`header`,type:`RECORD`},{name:`nameIndex`,type:`RECORD`},{name:`topDictIndex`,type:`RECORD`},{name:`stringIndex`,type:`RECORD`},{name:`globalSubrIndex`,type:`RECORD`},{name:`charsets`,type:`RECORD`},{name:`charStringsIndex`,type:`RECORD`},{name:`privateDict`,type:`RECORD`}]),r=1/t.unitsPerEm,i={version:t.version,fullName:t.fullName,familyName:t.familyName,weight:t.weightName,fontBBox:t.fontBBox||[0,0,0,0],fontMatrix:[r,0,0,r,0,0],charset:999,encoding:0,charStrings:999,private:[0,999]},a={},o=[],s,c=1;c<e.length;c+=1)s=e.get(c),o.push(s.name);var l=[];n.header=hp(),n.nameIndex=gp([t.postScriptName]);var u=vp(i,l);return n.topDictIndex=yp(u),n.globalSubrIndex=xp(),n.charsets=Sp(o,l),n.charStringsIndex=wp(e),n.privateDict=Tp(a,l),n.stringIndex=bp(l),i.charset=n.header.sizeOf()+n.nameIndex.sizeOf()+n.topDictIndex.sizeOf()+n.stringIndex.sizeOf()+n.globalSubrIndex.sizeOf(),i.encoding=0,i.charStrings=i.charset+n.charsets.sizeOf(),i.private[1]=i.charStrings+n.charStringsIndex.sizeOf(),u=vp(i,l),n.topDictIndex=yp(u),n}var Dp={parse:pp,make:Ep};function Op(e,t){var n={},r=new X.Parser(e,t);return n.version=r.parseVersion(),n.fontRevision=Math.round(r.parseFixed()*1e3)/1e3,n.checkSumAdjustment=r.parseULong(),n.magicNumber=r.parseULong(),G.argument(n.magicNumber===1594834165,`Font header has wrong magic number.`),n.flags=r.parseUShort(),n.unitsPerEm=r.parseUShort(),n.created=r.parseLongDateTime(),n.modified=r.parseLongDateTime(),n.xMin=r.parseShort(),n.yMin=r.parseShort(),n.xMax=r.parseShort(),n.yMax=r.parseShort(),n.macStyle=r.parseUShort(),n.lowestRecPPEM=r.parseUShort(),n.fontDirectionHint=r.parseShort(),n.indexToLocFormat=r.parseShort(),n.glyphDataFormat=r.parseShort(),n}function kp(e){var t=Math.round(new Date().getTime()/1e3)+2082844800,n=t;return e.createdTimestamp&&(n=e.createdTimestamp+2082844800),new J.Table(`head`,[{name:`version`,type:`FIXED`,value:65536},{name:`fontRevision`,type:`FIXED`,value:65536},{name:`checkSumAdjustment`,type:`ULONG`,value:0},{name:`magicNumber`,type:`ULONG`,value:1594834165},{name:`flags`,type:`USHORT`,value:0},{name:`unitsPerEm`,type:`USHORT`,value:1e3},{name:`created`,type:`LONGDATETIME`,value:n},{name:`modified`,type:`LONGDATETIME`,value:t},{name:`xMin`,type:`SHORT`,value:0},{name:`yMin`,type:`SHORT`,value:0},{name:`xMax`,type:`SHORT`,value:0},{name:`yMax`,type:`SHORT`,value:0},{name:`macStyle`,type:`USHORT`,value:0},{name:`lowestRecPPEM`,type:`USHORT`,value:0},{name:`fontDirectionHint`,type:`SHORT`,value:2},{name:`indexToLocFormat`,type:`SHORT`,value:0},{name:`glyphDataFormat`,type:`SHORT`,value:0}],e)}var Ap={parse:Op,make:kp};function jp(e,t){var n={},r=new X.Parser(e,t);return n.version=r.parseVersion(),n.ascender=r.parseShort(),n.descender=r.parseShort(),n.lineGap=r.parseShort(),n.advanceWidthMax=r.parseUShort(),n.minLeftSideBearing=r.parseShort(),n.minRightSideBearing=r.parseShort(),n.xMaxExtent=r.parseShort(),n.caretSlopeRise=r.parseShort(),n.caretSlopeRun=r.parseShort(),n.caretOffset=r.parseShort(),r.relativeOffset+=8,n.metricDataFormat=r.parseShort(),n.numberOfHMetrics=r.parseUShort(),n}function Mp(e){return new J.Table(`hhea`,[{name:`version`,type:`FIXED`,value:65536},{name:`ascender`,type:`FWORD`,value:0},{name:`descender`,type:`FWORD`,value:0},{name:`lineGap`,type:`FWORD`,value:0},{name:`advanceWidthMax`,type:`UFWORD`,value:0},{name:`minLeftSideBearing`,type:`FWORD`,value:0},{name:`minRightSideBearing`,type:`FWORD`,value:0},{name:`xMaxExtent`,type:`FWORD`,value:0},{name:`caretSlopeRise`,type:`SHORT`,value:1},{name:`caretSlopeRun`,type:`SHORT`,value:0},{name:`caretOffset`,type:`SHORT`,value:0},{name:`reserved1`,type:`SHORT`,value:0},{name:`reserved2`,type:`SHORT`,value:0},{name:`reserved3`,type:`SHORT`,value:0},{name:`reserved4`,type:`SHORT`,value:0},{name:`metricDataFormat`,type:`SHORT`,value:0},{name:`numberOfHMetrics`,type:`USHORT`,value:0}],e)}var Np={parse:jp,make:Mp};function Pp(e,t,n,r,i){for(var a,o,s=new X.Parser(e,t),c=0;c<r;c+=1){c<n&&(a=s.parseUShort(),o=s.parseShort());var l=i.get(c);l.advanceWidth=a,l.leftSideBearing=o}}function Fp(e,t,n,r,i){e._hmtxTableData={};for(var a,o,s=new X.Parser(t,n),c=0;c<i;c+=1)c<r&&(a=s.parseUShort(),o=s.parseShort()),e._hmtxTableData[c]={advanceWidth:a,leftSideBearing:o}}function Ip(e,t,n,r,i,a,o){o.lowMemory?Fp(e,t,n,r,i):Pp(t,n,r,i,a)}function Lp(e){for(var t=new J.Table(`hmtx`,[]),n=0;n<e.length;n+=1){var r=e.get(n),i=r.advanceWidth||0,a=r.leftSideBearing||0;t.fields.push({name:`advanceWidth_`+n,type:`USHORT`,value:i}),t.fields.push({name:`leftSideBearing_`+n,type:`SHORT`,value:a})}return t}var Rp={parse:Ip,make:Lp};function zp(e){for(var t=new J.Table(`ltag`,[{name:`version`,type:`ULONG`,value:1},{name:`flags`,type:`ULONG`,value:0},{name:`numTags`,type:`ULONG`,value:e.length}]),n=``,r=12+e.length*4,i=0;i<e.length;++i){var a=n.indexOf(e[i]);a<0&&(a=n.length,n+=e[i]),t.fields.push({name:`offset `+i,type:`USHORT`,value:r+a}),t.fields.push({name:`length `+i,type:`USHORT`,value:e[i].length})}return t.fields.push({name:`stringPool`,type:`CHARARRAY`,value:n}),t}function Bp(e,t){var n=new X.Parser(e,t),r=n.parseULong();G.argument(r===1,`Unsupported ltag table version.`),n.skip(`uLong`,1);for(var i=n.parseULong(),a=[],o=0;o<i;o++){for(var s=``,c=t+n.parseUShort(),l=n.parseUShort(),u=c;u<c+l;++u)s+=String.fromCharCode(e.getInt8(u));a.push(s)}return a}var Vp={make:zp,parse:Bp};function Hp(e,t){var n={},r=new X.Parser(e,t);return n.version=r.parseVersion(),n.numGlyphs=r.parseUShort(),n.version===1&&(n.maxPoints=r.parseUShort(),n.maxContours=r.parseUShort(),n.maxCompositePoints=r.parseUShort(),n.maxCompositeContours=r.parseUShort(),n.maxZones=r.parseUShort(),n.maxTwilightPoints=r.parseUShort(),n.maxStorage=r.parseUShort(),n.maxFunctionDefs=r.parseUShort(),n.maxInstructionDefs=r.parseUShort(),n.maxStackElements=r.parseUShort(),n.maxSizeOfInstructions=r.parseUShort(),n.maxComponentElements=r.parseUShort(),n.maxComponentDepth=r.parseUShort()),n}function Up(e){return new J.Table(`maxp`,[{name:`version`,type:`FIXED`,value:20480},{name:`numGlyphs`,type:`USHORT`,value:e}])}var Wp={parse:Hp,make:Up},Gp=[`copyright`,`fontFamily`,`fontSubfamily`,`uniqueID`,`fullName`,`version`,`postScriptName`,`trademark`,`manufacturer`,`designer`,`description`,`manufacturerURL`,`designerURL`,`license`,`licenseURL`,`reserved`,`preferredFamily`,`preferredSubfamily`,`compatibleFullName`,`sampleText`,`postScriptFindFontName`,`wwsFamily`,`wwsSubfamily`],Kp={0:`en`,1:`fr`,2:`de`,3:`it`,4:`nl`,5:`sv`,6:`es`,7:`da`,8:`pt`,9:`no`,10:`he`,11:`ja`,12:`ar`,13:`fi`,14:`el`,15:`is`,16:`mt`,17:`tr`,18:`hr`,19:`zh-Hant`,20:`ur`,21:`hi`,22:`th`,23:`ko`,24:`lt`,25:`pl`,26:`hu`,27:`es`,28:`lv`,29:`se`,30:`fo`,31:`fa`,32:`ru`,33:`zh`,34:`nl-BE`,35:`ga`,36:`sq`,37:`ro`,38:`cz`,39:`sk`,40:`si`,41:`yi`,42:`sr`,43:`mk`,44:`bg`,45:`uk`,46:`be`,47:`uz`,48:`kk`,49:`az-Cyrl`,50:`az-Arab`,51:`hy`,52:`ka`,53:`mo`,54:`ky`,55:`tg`,56:`tk`,57:`mn-CN`,58:`mn`,59:`ps`,60:`ks`,61:`ku`,62:`sd`,63:`bo`,64:`ne`,65:`sa`,66:`mr`,67:`bn`,68:`as`,69:`gu`,70:`pa`,71:`or`,72:`ml`,73:`kn`,74:`ta`,75:`te`,76:`si`,77:`my`,78:`km`,79:`lo`,80:`vi`,81:`id`,82:`tl`,83:`ms`,84:`ms-Arab`,85:`am`,86:`ti`,87:`om`,88:`so`,89:`sw`,90:`rw`,91:`rn`,92:`ny`,93:`mg`,94:`eo`,128:`cy`,129:`eu`,130:`ca`,131:`la`,132:`qu`,133:`gn`,134:`ay`,135:`tt`,136:`ug`,137:`dz`,138:`jv`,139:`su`,140:`gl`,141:`af`,142:`br`,143:`iu`,144:`gd`,145:`gv`,146:`ga`,147:`to`,148:`el-polyton`,149:`kl`,150:`az`,151:`nn`},qp={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:5,11:1,12:4,13:0,14:6,15:0,16:0,17:0,18:0,19:2,20:4,21:9,22:21,23:3,24:29,25:29,26:29,27:29,28:29,29:0,30:0,31:4,32:7,33:25,34:0,35:0,36:0,37:0,38:29,39:29,40:0,41:5,42:7,43:7,44:7,45:7,46:7,47:7,48:7,49:7,50:4,51:24,52:23,53:7,54:7,55:7,56:7,57:27,58:7,59:4,60:4,61:4,62:4,63:26,64:9,65:9,66:9,67:13,68:13,69:11,70:10,71:12,72:17,73:16,74:14,75:15,76:18,77:19,78:20,79:22,80:30,81:0,82:0,83:0,84:4,85:28,86:28,87:28,88:0,89:0,90:0,91:0,92:0,93:0,94:0,128:0,129:0,130:0,131:0,132:0,133:0,134:0,135:7,136:4,137:26,138:0,139:0,140:0,141:0,142:0,143:28,144:0,145:0,146:0,147:0,148:6,149:0,150:0,151:0},Jp={1078:`af`,1052:`sq`,1156:`gsw`,1118:`am`,5121:`ar-DZ`,15361:`ar-BH`,3073:`ar`,2049:`ar-IQ`,11265:`ar-JO`,13313:`ar-KW`,12289:`ar-LB`,4097:`ar-LY`,6145:`ary`,8193:`ar-OM`,16385:`ar-QA`,1025:`ar-SA`,10241:`ar-SY`,7169:`aeb`,14337:`ar-AE`,9217:`ar-YE`,1067:`hy`,1101:`as`,2092:`az-Cyrl`,1068:`az`,1133:`ba`,1069:`eu`,1059:`be`,2117:`bn`,1093:`bn-IN`,8218:`bs-Cyrl`,5146:`bs`,1150:`br`,1026:`bg`,1027:`ca`,3076:`zh-HK`,5124:`zh-MO`,2052:`zh`,4100:`zh-SG`,1028:`zh-TW`,1155:`co`,1050:`hr`,4122:`hr-BA`,1029:`cs`,1030:`da`,1164:`prs`,1125:`dv`,2067:`nl-BE`,1043:`nl`,3081:`en-AU`,10249:`en-BZ`,4105:`en-CA`,9225:`en-029`,16393:`en-IN`,6153:`en-IE`,8201:`en-JM`,17417:`en-MY`,5129:`en-NZ`,13321:`en-PH`,18441:`en-SG`,7177:`en-ZA`,11273:`en-TT`,2057:`en-GB`,1033:`en`,12297:`en-ZW`,1061:`et`,1080:`fo`,1124:`fil`,1035:`fi`,2060:`fr-BE`,3084:`fr-CA`,1036:`fr`,5132:`fr-LU`,6156:`fr-MC`,4108:`fr-CH`,1122:`fy`,1110:`gl`,1079:`ka`,3079:`de-AT`,1031:`de`,5127:`de-LI`,4103:`de-LU`,2055:`de-CH`,1032:`el`,1135:`kl`,1095:`gu`,1128:`ha`,1037:`he`,1081:`hi`,1038:`hu`,1039:`is`,1136:`ig`,1057:`id`,1117:`iu`,2141:`iu-Latn`,2108:`ga`,1076:`xh`,1077:`zu`,1040:`it`,2064:`it-CH`,1041:`ja`,1099:`kn`,1087:`kk`,1107:`km`,1158:`quc`,1159:`rw`,1089:`sw`,1111:`kok`,1042:`ko`,1088:`ky`,1108:`lo`,1062:`lv`,1063:`lt`,2094:`dsb`,1134:`lb`,1071:`mk`,2110:`ms-BN`,1086:`ms`,1100:`ml`,1082:`mt`,1153:`mi`,1146:`arn`,1102:`mr`,1148:`moh`,1104:`mn`,2128:`mn-CN`,1121:`ne`,1044:`nb`,2068:`nn`,1154:`oc`,1096:`or`,1123:`ps`,1045:`pl`,1046:`pt`,2070:`pt-PT`,1094:`pa`,1131:`qu-BO`,2155:`qu-EC`,3179:`qu`,1048:`ro`,1047:`rm`,1049:`ru`,9275:`smn`,4155:`smj-NO`,5179:`smj`,3131:`se-FI`,1083:`se`,2107:`se-SE`,8251:`sms`,6203:`sma-NO`,7227:`sms`,1103:`sa`,7194:`sr-Cyrl-BA`,3098:`sr`,6170:`sr-Latn-BA`,2074:`sr-Latn`,1132:`nso`,1074:`tn`,1115:`si`,1051:`sk`,1060:`sl`,11274:`es-AR`,16394:`es-BO`,13322:`es-CL`,9226:`es-CO`,5130:`es-CR`,7178:`es-DO`,12298:`es-EC`,17418:`es-SV`,4106:`es-GT`,18442:`es-HN`,2058:`es-MX`,19466:`es-NI`,6154:`es-PA`,15370:`es-PY`,10250:`es-PE`,20490:`es-PR`,3082:`es`,1034:`es`,21514:`es-US`,14346:`es-UY`,8202:`es-VE`,2077:`sv-FI`,1053:`sv`,1114:`syr`,1064:`tg`,2143:`tzm`,1097:`ta`,1092:`tt`,1098:`te`,1054:`th`,1105:`bo`,1055:`tr`,1090:`tk`,1152:`ug`,1058:`uk`,1070:`hsb`,1056:`ur`,2115:`uz-Cyrl`,1091:`uz`,1066:`vi`,1106:`cy`,1160:`wo`,1157:`sah`,1144:`ii`,1130:`yo`};function Yp(e,t,n){switch(e){case 0:if(t===65535)return`und`;if(n)return n[t];break;case 1:return Kp[t];case 3:return Jp[t]}}var Xp=`utf-16`,Zp={0:`macintosh`,1:`x-mac-japanese`,2:`x-mac-chinesetrad`,3:`x-mac-korean`,6:`x-mac-greek`,7:`x-mac-cyrillic`,9:`x-mac-devanagai`,10:`x-mac-gurmukhi`,11:`x-mac-gujarati`,12:`x-mac-oriya`,13:`x-mac-bengali`,14:`x-mac-tamil`,15:`x-mac-telugu`,16:`x-mac-kannada`,17:`x-mac-malayalam`,18:`x-mac-sinhalese`,19:`x-mac-burmese`,20:`x-mac-khmer`,21:`x-mac-thai`,22:`x-mac-lao`,23:`x-mac-georgian`,24:`x-mac-armenian`,25:`x-mac-chinesesimp`,26:`x-mac-tibetan`,27:`x-mac-mongolian`,28:`x-mac-ethiopic`,29:`x-mac-ce`,30:`x-mac-vietnamese`,31:`x-mac-extarabic`},Qp={15:`x-mac-icelandic`,17:`x-mac-turkish`,18:`x-mac-croatian`,24:`x-mac-ce`,25:`x-mac-ce`,26:`x-mac-ce`,27:`x-mac-ce`,28:`x-mac-ce`,30:`x-mac-icelandic`,37:`x-mac-romanian`,38:`x-mac-ce`,39:`x-mac-ce`,40:`x-mac-ce`,143:`x-mac-inuit`,146:`x-mac-gaelic`};function $p(e,t,n){switch(e){case 0:return Xp;case 1:return Qp[n]||Zp[t];case 3:if(t===1||t===10)return Xp;break}}function em(e,t,n){for(var r={},i=new X.Parser(e,t),a=i.parseUShort(),o=i.parseUShort(),s=i.offset+i.parseUShort(),c=0;c<o;c++){var l=i.parseUShort(),u=i.parseUShort(),d=i.parseUShort(),f=i.parseUShort(),p=Gp[f]||f,m=i.parseUShort(),h=i.parseUShort(),g=Yp(l,d,n),_=$p(l,u,d);if(_!==void 0&&g!==void 0){var v=void 0;if(v=_===Xp?Vd.UTF16(e,s+h,m):Vd.MACSTRING(e,s+h,m,_),v){var y=r[p];y===void 0&&(y=r[p]={}),y[g]=v}}}return a===1&&i.parseUShort(),r}function tm(e){var t={};for(var n in e)t[e[n]]=parseInt(n);return t}function nm(e,t,n,r,i,a){return new J.Record(`NameRecord`,[{name:`platformID`,type:`USHORT`,value:e},{name:`encodingID`,type:`USHORT`,value:t},{name:`languageID`,type:`USHORT`,value:n},{name:`nameID`,type:`USHORT`,value:r},{name:`length`,type:`USHORT`,value:i},{name:`offset`,type:`USHORT`,value:a}])}function rm(e,t){var n=e.length,r=t.length-n+1;loop:for(var i=0;i<r;i++)for(;i<r;i++){for(var a=0;a<n;a++)if(t[i+a]!==e[a])continue loop;return i}return-1}function im(e,t){var n=rm(e,t);if(n<0){n=t.length;for(var r=0,i=e.length;r<i;++r)t.push(e[r])}return n}function am(e,t){var n,r=[],i={},a=tm(Gp);for(var o in e){var s=a[o];if(s===void 0&&(s=o),n=parseInt(s),isNaN(n))throw Error(`Name table entry "`+o+`" does not exist, see nameTableNames for complete list.`);i[n]=e[o],r.push(n)}for(var c=tm(Kp),l=tm(Jp),u=[],d=[],f=0;f<r.length;f++){n=r[f];var p=i[n];for(var m in p){var h=p[m],g=1,_=c[m],v=qp[_],y=$p(g,v,_),b=K.MACSTRING(h,y);b===void 0&&(g=0,_=t.indexOf(m),_<0&&(_=t.length,t.push(m)),v=4,b=K.UTF16(h));var x=im(b,d);u.push(nm(g,v,_,n,b.length,x));var S=l[m];if(S!==void 0){var C=K.UTF16(h),w=im(C,d);u.push(nm(3,1,S,n,C.length,w))}}}u.sort(function(e,t){return e.platformID-t.platformID||e.encodingID-t.encodingID||e.languageID-t.languageID||e.nameID-t.nameID});for(var T=new J.Table(`name`,[{name:`format`,type:`USHORT`,value:0},{name:`count`,type:`USHORT`,value:u.length},{name:`stringOffset`,type:`USHORT`,value:6+u.length*12}]),E=0;E<u.length;E++)T.fields.push({name:`record_`+E,type:`RECORD`,value:u[E]});return T.fields.push({name:`strings`,type:`LITERAL`,value:d}),T}var om={parse:em,make:am},sm=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66e3,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}];function cm(e){for(var t=0;t<sm.length;t+=1){var n=sm[t];if(e>=n.begin&&e<n.end)return t}return-1}function lm(e,t){var n={},r=new X.Parser(e,t);n.version=r.parseUShort(),n.xAvgCharWidth=r.parseShort(),n.usWeightClass=r.parseUShort(),n.usWidthClass=r.parseUShort(),n.fsType=r.parseUShort(),n.ySubscriptXSize=r.parseShort(),n.ySubscriptYSize=r.parseShort(),n.ySubscriptXOffset=r.parseShort(),n.ySubscriptYOffset=r.parseShort(),n.ySuperscriptXSize=r.parseShort(),n.ySuperscriptYSize=r.parseShort(),n.ySuperscriptXOffset=r.parseShort(),n.ySuperscriptYOffset=r.parseShort(),n.yStrikeoutSize=r.parseShort(),n.yStrikeoutPosition=r.parseShort(),n.sFamilyClass=r.parseShort(),n.panose=[];for(var i=0;i<10;i++)n.panose[i]=r.parseByte();return n.ulUnicodeRange1=r.parseULong(),n.ulUnicodeRange2=r.parseULong(),n.ulUnicodeRange3=r.parseULong(),n.ulUnicodeRange4=r.parseULong(),n.achVendID=String.fromCharCode(r.parseByte(),r.parseByte(),r.parseByte(),r.parseByte()),n.fsSelection=r.parseUShort(),n.usFirstCharIndex=r.parseUShort(),n.usLastCharIndex=r.parseUShort(),n.sTypoAscender=r.parseShort(),n.sTypoDescender=r.parseShort(),n.sTypoLineGap=r.parseShort(),n.usWinAscent=r.parseUShort(),n.usWinDescent=r.parseUShort(),n.version>=1&&(n.ulCodePageRange1=r.parseULong(),n.ulCodePageRange2=r.parseULong()),n.version>=2&&(n.sxHeight=r.parseShort(),n.sCapHeight=r.parseShort(),n.usDefaultChar=r.parseUShort(),n.usBreakChar=r.parseUShort(),n.usMaxContent=r.parseUShort()),n}function um(e){return new J.Table(`OS/2`,[{name:`version`,type:`USHORT`,value:3},{name:`xAvgCharWidth`,type:`SHORT`,value:0},{name:`usWeightClass`,type:`USHORT`,value:0},{name:`usWidthClass`,type:`USHORT`,value:0},{name:`fsType`,type:`USHORT`,value:0},{name:`ySubscriptXSize`,type:`SHORT`,value:650},{name:`ySubscriptYSize`,type:`SHORT`,value:699},{name:`ySubscriptXOffset`,type:`SHORT`,value:0},{name:`ySubscriptYOffset`,type:`SHORT`,value:140},{name:`ySuperscriptXSize`,type:`SHORT`,value:650},{name:`ySuperscriptYSize`,type:`SHORT`,value:699},{name:`ySuperscriptXOffset`,type:`SHORT`,value:0},{name:`ySuperscriptYOffset`,type:`SHORT`,value:479},{name:`yStrikeoutSize`,type:`SHORT`,value:49},{name:`yStrikeoutPosition`,type:`SHORT`,value:258},{name:`sFamilyClass`,type:`SHORT`,value:0},{name:`bFamilyType`,type:`BYTE`,value:0},{name:`bSerifStyle`,type:`BYTE`,value:0},{name:`bWeight`,type:`BYTE`,value:0},{name:`bProportion`,type:`BYTE`,value:0},{name:`bContrast`,type:`BYTE`,value:0},{name:`bStrokeVariation`,type:`BYTE`,value:0},{name:`bArmStyle`,type:`BYTE`,value:0},{name:`bLetterform`,type:`BYTE`,value:0},{name:`bMidline`,type:`BYTE`,value:0},{name:`bXHeight`,type:`BYTE`,value:0},{name:`ulUnicodeRange1`,type:`ULONG`,value:0},{name:`ulUnicodeRange2`,type:`ULONG`,value:0},{name:`ulUnicodeRange3`,type:`ULONG`,value:0},{name:`ulUnicodeRange4`,type:`ULONG`,value:0},{name:`achVendID`,type:`CHARARRAY`,value:`XXXX`},{name:`fsSelection`,type:`USHORT`,value:0},{name:`usFirstCharIndex`,type:`USHORT`,value:0},{name:`usLastCharIndex`,type:`USHORT`,value:0},{name:`sTypoAscender`,type:`SHORT`,value:0},{name:`sTypoDescender`,type:`SHORT`,value:0},{name:`sTypoLineGap`,type:`SHORT`,value:0},{name:`usWinAscent`,type:`USHORT`,value:0},{name:`usWinDescent`,type:`USHORT`,value:0},{name:`ulCodePageRange1`,type:`ULONG`,value:0},{name:`ulCodePageRange2`,type:`ULONG`,value:0},{name:`sxHeight`,type:`SHORT`,value:0},{name:`sCapHeight`,type:`SHORT`,value:0},{name:`usDefaultChar`,type:`USHORT`,value:0},{name:`usBreakChar`,type:`USHORT`,value:0},{name:`usMaxContext`,type:`USHORT`,value:0}],e)}var dm={parse:lm,make:um,unicodeRanges:sm,getUnicodeRange:cm};function fm(e,t){var n={},r=new X.Parser(e,t);switch(n.version=r.parseVersion(),n.italicAngle=r.parseFixed(),n.underlinePosition=r.parseShort(),n.underlineThickness=r.parseShort(),n.isFixedPitch=r.parseULong(),n.minMemType42=r.parseULong(),n.maxMemType42=r.parseULong(),n.minMemType1=r.parseULong(),n.maxMemType1=r.parseULong(),n.version){case 1:n.names=Of.slice();break;case 2:n.numberOfGlyphs=r.parseUShort(),n.glyphNameIndex=Array(n.numberOfGlyphs);for(var i=0;i<n.numberOfGlyphs;i++)n.glyphNameIndex[i]=r.parseUShort();n.names=[];for(var a=0;a<n.numberOfGlyphs;a++)if(n.glyphNameIndex[a]>=Of.length){var o=r.parseChar();n.names.push(r.parseString(o))}break;case 2.5:n.numberOfGlyphs=r.parseUShort(),n.offset=Array(n.numberOfGlyphs);for(var s=0;s<n.numberOfGlyphs;s++)n.offset[s]=r.parseChar();break}return n}function pm(){return new J.Table(`post`,[{name:`version`,type:`FIXED`,value:196608},{name:`italicAngle`,type:`FIXED`,value:0},{name:`underlinePosition`,type:`FWORD`,value:0},{name:`underlineThickness`,type:`FWORD`,value:0},{name:`isFixedPitch`,type:`ULONG`,value:0},{name:`minMemType42`,type:`ULONG`,value:0},{name:`maxMemType42`,type:`ULONG`,value:0},{name:`minMemType1`,type:`ULONG`,value:0},{name:`maxMemType1`,type:`ULONG`,value:0}])}var mm={parse:fm,make:pm},hm=Array(9);hm[1]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:1,coverage:this.parsePointer(Y.coverage),deltaGlyphId:this.parseUShort()};if(t===2)return{substFormat:2,coverage:this.parsePointer(Y.coverage),substitute:this.parseOffset16List()};G.assert(!1,`0x`+e.toString(16)+`: lookup type 1 format must be 1 or 2.`)},hm[2]=function(){var e=this.parseUShort();return G.argument(e===1,`GSUB Multiple Substitution Subtable identifier-format must be 1`),{substFormat:e,coverage:this.parsePointer(Y.coverage),sequences:this.parseListOfLists()}},hm[3]=function(){var e=this.parseUShort();return G.argument(e===1,`GSUB Alternate Substitution Subtable identifier-format must be 1`),{substFormat:e,coverage:this.parsePointer(Y.coverage),alternateSets:this.parseListOfLists()}},hm[4]=function(){var e=this.parseUShort();return G.argument(e===1,`GSUB ligature table identifier-format must be 1`),{substFormat:e,coverage:this.parsePointer(Y.coverage),ligatureSets:this.parseListOfLists(function(){return{ligGlyph:this.parseUShort(),components:this.parseUShortList(this.parseUShort()-1)}})}};var gm={sequenceIndex:Y.uShort,lookupListIndex:Y.uShort};hm[5]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:t,coverage:this.parsePointer(Y.coverage),ruleSets:this.parseListOfLists(function(){var e=this.parseUShort(),t=this.parseUShort();return{input:this.parseUShortList(e-1),lookupRecords:this.parseRecordList(t,gm)}})};if(t===2)return{substFormat:t,coverage:this.parsePointer(Y.coverage),classDef:this.parsePointer(Y.classDef),classSets:this.parseListOfLists(function(){var e=this.parseUShort(),t=this.parseUShort();return{classes:this.parseUShortList(e-1),lookupRecords:this.parseRecordList(t,gm)}})};if(t===3){var n=this.parseUShort(),r=this.parseUShort();return{substFormat:t,coverages:this.parseList(n,Y.pointer(Y.coverage)),lookupRecords:this.parseRecordList(r,gm)}}G.assert(!1,`0x`+e.toString(16)+`: lookup type 5 format must be 1, 2 or 3.`)},hm[6]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:1,coverage:this.parsePointer(Y.coverage),chainRuleSets:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(gm)}})};if(t===2)return{substFormat:2,coverage:this.parsePointer(Y.coverage),backtrackClassDef:this.parsePointer(Y.classDef),inputClassDef:this.parsePointer(Y.classDef),lookaheadClassDef:this.parsePointer(Y.classDef),chainClassSet:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(gm)}})};if(t===3)return{substFormat:3,backtrackCoverage:this.parseList(Y.pointer(Y.coverage)),inputCoverage:this.parseList(Y.pointer(Y.coverage)),lookaheadCoverage:this.parseList(Y.pointer(Y.coverage)),lookupRecords:this.parseRecordList(gm)};G.assert(!1,`0x`+e.toString(16)+`: lookup type 6 format must be 1, 2 or 3.`)},hm[7]=function(){var e=this.parseUShort();G.argument(e===1,`GSUB Extension Substitution subtable identifier-format must be 1`);var t=this.parseUShort(),n=new Y(this.data,this.offset+this.parseULong());return{substFormat:1,lookupType:t,extension:hm[t].call(n)}},hm[8]=function(){var e=this.parseUShort();return G.argument(e===1,`GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1`),{substFormat:e,coverage:this.parsePointer(Y.coverage),backtrackCoverage:this.parseList(Y.pointer(Y.coverage)),lookaheadCoverage:this.parseList(Y.pointer(Y.coverage)),substitutes:this.parseUShortList()}};function _m(e,t){t||=0;var n=new Y(e,t),r=n.parseVersion(1);return G.argument(r===1||r===1.1,`Unsupported GSUB table version.`),r===1?{version:r,scripts:n.parseScriptList(),features:n.parseFeatureList(),lookups:n.parseLookupList(hm)}:{version:r,scripts:n.parseScriptList(),features:n.parseFeatureList(),lookups:n.parseLookupList(hm),variations:n.parseFeatureVariationsList()}}var vm=Array(9);vm[1]=function(e){return e.substFormat===1?new J.Table(`substitutionTable`,[{name:`substFormat`,type:`USHORT`,value:1},{name:`coverage`,type:`TABLE`,value:new J.Coverage(e.coverage)},{name:`deltaGlyphID`,type:`USHORT`,value:e.deltaGlyphId}]):new J.Table(`substitutionTable`,[{name:`substFormat`,type:`USHORT`,value:2},{name:`coverage`,type:`TABLE`,value:new J.Coverage(e.coverage)}].concat(J.ushortList(`substitute`,e.substitute)))},vm[2]=function(e){return G.assert(e.substFormat===1,`Lookup type 2 substFormat must be 1.`),new J.Table(`substitutionTable`,[{name:`substFormat`,type:`USHORT`,value:1},{name:`coverage`,type:`TABLE`,value:new J.Coverage(e.coverage)}].concat(J.tableList(`seqSet`,e.sequences,function(e){return new J.Table(`sequenceSetTable`,J.ushortList(`sequence`,e))})))},vm[3]=function(e){return G.assert(e.substFormat===1,`Lookup type 3 substFormat must be 1.`),new J.Table(`substitutionTable`,[{name:`substFormat`,type:`USHORT`,value:1},{name:`coverage`,type:`TABLE`,value:new J.Coverage(e.coverage)}].concat(J.tableList(`altSet`,e.alternateSets,function(e){return new J.Table(`alternateSetTable`,J.ushortList(`alternate`,e))})))},vm[4]=function(e){return G.assert(e.substFormat===1,`Lookup type 4 substFormat must be 1.`),new J.Table(`substitutionTable`,[{name:`substFormat`,type:`USHORT`,value:1},{name:`coverage`,type:`TABLE`,value:new J.Coverage(e.coverage)}].concat(J.tableList(`ligSet`,e.ligatureSets,function(e){return new J.Table(`ligatureSetTable`,J.tableList(`ligature`,e,function(e){return new J.Table(`ligatureTable`,[{name:`ligGlyph`,type:`USHORT`,value:e.ligGlyph}].concat(J.ushortList(`component`,e.components,e.components.length+1)))}))})))},vm[6]=function(e){if(e.substFormat===1)return new J.Table(`chainContextTable`,[{name:`substFormat`,type:`USHORT`,value:e.substFormat},{name:`coverage`,type:`TABLE`,value:new J.Coverage(e.coverage)}].concat(J.tableList(`chainRuleSet`,e.chainRuleSets,function(e){return new J.Table(`chainRuleSetTable`,J.tableList(`chainRule`,e,function(e){var t=J.ushortList(`backtrackGlyph`,e.backtrack,e.backtrack.length).concat(J.ushortList(`inputGlyph`,e.input,e.input.length+1)).concat(J.ushortList(`lookaheadGlyph`,e.lookahead,e.lookahead.length)).concat(J.ushortList(`substitution`,[],e.lookupRecords.length));return e.lookupRecords.forEach(function(e,n){t=t.concat({name:`sequenceIndex`+n,type:`USHORT`,value:e.sequenceIndex}).concat({name:`lookupListIndex`+n,type:`USHORT`,value:e.lookupListIndex})}),new J.Table(`chainRuleTable`,t)}))})));if(e.substFormat===2)G.assert(!1,`lookup type 6 format 2 is not yet supported.`);else if(e.substFormat===3){var t=[{name:`substFormat`,type:`USHORT`,value:e.substFormat}];return t.push({name:`backtrackGlyphCount`,type:`USHORT`,value:e.backtrackCoverage.length}),e.backtrackCoverage.forEach(function(e,n){t.push({name:`backtrackCoverage`+n,type:`TABLE`,value:new J.Coverage(e)})}),t.push({name:`inputGlyphCount`,type:`USHORT`,value:e.inputCoverage.length}),e.inputCoverage.forEach(function(e,n){t.push({name:`inputCoverage`+n,type:`TABLE`,value:new J.Coverage(e)})}),t.push({name:`lookaheadGlyphCount`,type:`USHORT`,value:e.lookaheadCoverage.length}),e.lookaheadCoverage.forEach(function(e,n){t.push({name:`lookaheadCoverage`+n,type:`TABLE`,value:new J.Coverage(e)})}),t.push({name:`substitutionCount`,type:`USHORT`,value:e.lookupRecords.length}),e.lookupRecords.forEach(function(e,n){t=t.concat({name:`sequenceIndex`+n,type:`USHORT`,value:e.sequenceIndex}).concat({name:`lookupListIndex`+n,type:`USHORT`,value:e.lookupListIndex})}),new J.Table(`chainContextTable`,t)}G.assert(!1,`lookup type 6 format must be 1, 2 or 3.`)};function ym(e){return new J.Table(`GSUB`,[{name:`version`,type:`ULONG`,value:65536},{name:`scripts`,type:`TABLE`,value:new J.ScriptList(e.scripts)},{name:`features`,type:`TABLE`,value:new J.FeatureList(e.features)},{name:`lookups`,type:`TABLE`,value:new J.LookupList(e.lookups,vm)}])}var bm={parse:_m,make:ym};function xm(e,t){var n=new X.Parser(e,t),r=n.parseULong();G.argument(r===1,`Unsupported META table version.`),n.parseULong(),n.parseULong();for(var i=n.parseULong(),a={},o=0;o<i;o++){var s=n.parseTag(),c=n.parseULong(),l=n.parseULong();a[s]=Vd.UTF8(e,t+c,l)}return a}function Sm(e){var t=Object.keys(e).length,n=``,r=16+t*12,i=new J.Table(`meta`,[{name:`version`,type:`ULONG`,value:1},{name:`flags`,type:`ULONG`,value:0},{name:`offset`,type:`ULONG`,value:r},{name:`numTags`,type:`ULONG`,value:t}]);for(var a in e){var o=n.length;n+=e[a],i.fields.push({name:`tag `+a,type:`TAG`,value:a}),i.fields.push({name:`offset `+a,type:`ULONG`,value:r+o}),i.fields.push({name:`length `+a,type:`ULONG`,value:e[a].length})}return i.fields.push({name:`stringPool`,type:`CHARARRAY`,value:n}),i}var Cm={parse:xm,make:Sm};function wm(e,t){var n=new Y(e,t),r=n.parseUShort();G.argument(r===0,`Only COLRv0 supported.`);var i=n.parseUShort(),a=n.parseOffset32(),o=n.parseOffset32(),s=n.parseUShort();n.relativeOffset=a;var c=n.parseRecordList(i,{glyphID:Y.uShort,firstLayerIndex:Y.uShort,numLayers:Y.uShort});return n.relativeOffset=o,{version:r,baseGlyphRecords:c,layerRecords:n.parseRecordList(s,{glyphID:Y.uShort,paletteIndex:Y.uShort})}}function Tm(e){var t=e.version;t===void 0&&(t=0);var n=e.baseGlyphRecords;n===void 0&&(n=[]);var r=e.layerRecords;r===void 0&&(r=[]),G.argument(t===0,`Only COLRv0 supported.`);var i=14,a=i+n.length*6;return new J.Table(`COLR`,[{name:`version`,type:`USHORT`,value:t},{name:`numBaseGlyphRecords`,type:`USHORT`,value:n.length},{name:`baseGlyphRecordsOffset`,type:`ULONG`,value:i},{name:`layerRecordsOffset`,type:`ULONG`,value:a},{name:`numLayerRecords`,type:`USHORT`,value:r.length}].concat(n.map(function(e,t){return[{name:`glyphID_`+t,type:`USHORT`,value:e.glyphID},{name:`firstLayerIndex_`+t,type:`USHORT`,value:e.firstLayerIndex},{name:`numLayers_`+t,type:`USHORT`,value:e.numLayers}]}).flat(),r.map(function(e,t){return[{name:`LayerGlyphID_`+t,type:`USHORT`,value:e.glyphID},{name:`paletteIndex_`+t,type:`USHORT`,value:e.paletteIndex}]}).flat()))}var Em={parse:wm,make:Tm};function Dm(e,t){var n=new Y(e,t),r=n.parseShort(),i=n.parseShort(),a=n.parseShort(),o=n.parseShort(),s=n.parseOffset32(),c=n.parseUShortList(a);return n.relativeOffset=s,{version:r,numPaletteEntries:i,colorRecords:n.parseULongList(o),colorRecordIndices:c}}function Om(e){var t=e.version;t===void 0&&(t=0);var n=e.numPaletteEntries;n===void 0&&(n=0);var r=e.colorRecords;r===void 0&&(r=[]);var i=e.colorRecordIndices;return i===void 0&&(i=[0]),G.argument(t===0,`Only CPALv0 are supported.`),G.argument(r.length,`No colorRecords given.`),G.argument(i.length,`No colorRecordIndices given.`),G.argument(!n&&i.length==1,`Can't infer numPaletteEntries on multiple colorRecordIndices`),new J.Table(`CPAL`,[{name:`version`,type:`USHORT`,value:t},{name:`numPaletteEntries`,type:`USHORT`,value:n||r.length},{name:`numPalettes`,type:`USHORT`,value:i.length},{name:`numColorRecords`,type:`USHORT`,value:r.length},{name:`colorRecordsArrayOffset`,type:`ULONG`,value:12+2*i.length}].concat(i.map(function(e,t){return{name:`colorRecordIndices_`+t,type:`USHORT`,value:e}}),r.map(function(e,t){return{name:`colorRecords_`+t,type:`ULONG`,value:e}})))}var km={parse:Dm,make:Om};function Am(e){return Math.log(e)/Math.log(2)|0}function jm(e){for(;e.length%4!=0;)e.push(0);for(var t=0,n=0;n<e.length;n+=4)t+=(e[n]<<24)+(e[n+1]<<16)+(e[n+2]<<8)+e[n+3];return t%=2**32,t}function Mm(e,t,n,r){return new J.Record(`Table Record`,[{name:`tag`,type:`TAG`,value:e===void 0?``:e},{name:`checkSum`,type:`ULONG`,value:t===void 0?0:t},{name:`offset`,type:`ULONG`,value:n===void 0?0:n},{name:`length`,type:`ULONG`,value:r===void 0?0:r}])}function Nm(e){var t=new J.Table(`sfnt`,[{name:`version`,type:`TAG`,value:`OTTO`},{name:`numTables`,type:`USHORT`,value:0},{name:`searchRange`,type:`USHORT`,value:0},{name:`entrySelector`,type:`USHORT`,value:0},{name:`rangeShift`,type:`USHORT`,value:0}]);t.tables=e,t.numTables=e.length;var n=2**Am(t.numTables);t.searchRange=16*n,t.entrySelector=Am(n),t.rangeShift=t.numTables*16-t.searchRange;for(var r=[],i=[],a=t.sizeOf()+Mm().sizeOf()*t.numTables;a%4!=0;)a+=1,i.push({name:`padding`,type:`BYTE`,value:0});for(var o=0;o<e.length;o+=1){var s=e[o];G.argument(s.tableName.length===4,`Table name`+s.tableName+` is invalid.`);var c=s.sizeOf(),l=Mm(s.tableName,jm(s.encode()),a,c);for(r.push({name:l.tag+` Table Record`,type:`RECORD`,value:l}),i.push({name:s.tableName+` table`,type:`RECORD`,value:s}),a+=c,G.argument(!isNaN(a),`Something went wrong calculating the offset.`);a%4!=0;)a+=1,i.push({name:`padding`,type:`BYTE`,value:0})}return r.sort(function(e,t){return e.value.tag>t.value.tag?1:-1}),t.fields=t.fields.concat(r),t.fields=t.fields.concat(i),t}function Pm(e,t,n){for(var r=0;r<t.length;r+=1){var i=e.charToGlyphIndex(t[r]);if(i>0)return e.glyphs.get(i).getMetrics()}return n}function Fm(e){for(var t=0,n=0;n<e.length;n+=1)t+=e[n];return t/e.length}function Im(e){for(var t=[],n=[],r=[],i=[],a=[],o=[],s=[],c,l=0,u=0,d=0,f=0,p=0,m=0;m<e.glyphs.length;m+=1){var h=e.glyphs.get(m),g=h.unicode|0;if(isNaN(h.advanceWidth))throw Error(`Glyph `+h.name+` (`+m+`): advanceWidth is not a number.`);(c>g||c===void 0)&&g>0&&(c=g),l<g&&(l=g);var _=dm.getUnicodeRange(g);if(_<32)u|=1<<_;else if(_<64)d|=1<<_-32;else if(_<96)f|=1<<_-64;else if(_<123)p|=1<<_-96;else throw Error(`Unicode ranges bits > 123 are reserved for internal usage`);if(h.name!==`.notdef`){var v=h.getMetrics();t.push(v.xMin),n.push(v.yMin),r.push(v.xMax),i.push(v.yMax),o.push(v.leftSideBearing),s.push(v.rightSideBearing),a.push(h.advanceWidth)}}var y={xMin:Math.min.apply(null,t),yMin:Math.min.apply(null,n),xMax:Math.max.apply(null,r),yMax:Math.max.apply(null,i),advanceWidthMax:Math.max.apply(null,a),advanceWidthAvg:Fm(a),minLeftSideBearing:Math.min.apply(null,o),maxLeftSideBearing:Math.max.apply(null,o),minRightSideBearing:Math.min.apply(null,s)};y.ascender=e.ascender,y.descender=e.descender;var b=Ap.make({flags:3,unitsPerEm:e.unitsPerEm,xMin:y.xMin,yMin:y.yMin,xMax:y.xMax,yMax:y.yMax,lowestRecPPEM:3,createdTimestamp:e.createdTimestamp}),x=Np.make({ascender:y.ascender,descender:y.descender,advanceWidthMax:y.advanceWidthMax,minLeftSideBearing:y.minLeftSideBearing,minRightSideBearing:y.minRightSideBearing,xMaxExtent:y.maxLeftSideBearing+(y.xMax-y.xMin),numberOfHMetrics:e.glyphs.length}),S=Wp.make(e.glyphs.length),C=dm.make(Object.assign({xAvgCharWidth:Math.round(y.advanceWidthAvg),usFirstCharIndex:c,usLastCharIndex:l,ulUnicodeRange1:u,ulUnicodeRange2:d,ulUnicodeRange3:f,ulUnicodeRange4:p,sTypoAscender:y.ascender,sTypoDescender:y.descender,sTypoLineGap:0,usWinAscent:y.yMax,usWinDescent:Math.abs(y.yMin),ulCodePageRange1:1,sxHeight:Pm(e,`xyvw`,{yMax:Math.round(y.ascender/2)}).yMax,sCapHeight:Pm(e,`HIKLEFJMNTZBDPRAGOQSUVWXY`,y).yMax,usDefaultChar:e.hasChar(` `)?32:0,usBreakChar:e.hasChar(` `)?32:0},e.tables.os2)),w=Rp.make(e.glyphs),T=wf.make(e.glyphs),E=e.getEnglishName(`fontFamily`),D=e.getEnglishName(`fontSubfamily`),O=E+` `+D,k=e.getEnglishName(`postScriptName`);k||=E.replace(/\s/g,``)+`-`+D;var A={};for(var j in e.names)A[j]=e.names[j];A.uniqueID||={en:e.getEnglishName(`manufacturer`)+`:`+O},A.postScriptName||={en:k},A.preferredFamily||=e.names.fontFamily,A.preferredSubfamily||=e.names.fontSubfamily;var M=[],N=om.make(A,M),P=M.length>0?Vp.make(M):void 0,F=mm.make(),I=Dp.make(e.glyphs,{version:e.getEnglishName(`version`),fullName:O,familyName:E,weightName:D,postScriptName:k,unitsPerEm:e.unitsPerEm,fontBBox:[0,y.yMin,y.ascender,y.advanceWidthMax]}),ee=e.metas&&Object.keys(e.metas).length>0?Cm.make(e.metas):void 0,te=[b,x,S,C,N,T,F,I,w];P&&te.push(P),e.tables.gsub&&te.push(bm.make(e.tables.gsub)),e.tables.cpal&&te.push(km.make(e.tables.cpal)),e.tables.colr&&te.push(Em.make(e.tables.colr)),ee&&te.push(ee);for(var ne=Nm(te),re=jm(ne.encode()),L=ne.fields,ie=!1,ae=0;ae<L.length;ae+=1)if(L[ae].name===`head table`){L[ae].value.checkSumAdjustment=2981146554-re,ie=!0;break}if(!ie)throw Error(`Could not find head table with checkSum to adjust.`);return ne}var Lm={make:Nm,fontToTable:Im,computeCheckSum:jm};function Rm(e,t){for(var n=0,r=e.length-1;n<=r;){var i=n+r>>>1,a=e[i].tag;if(a===t)return i;a<t?n=i+1:r=i-1}return-n-1}function zm(e,t){for(var n=0,r=e.length-1;n<=r;){var i=n+r>>>1,a=e[i];if(a===t)return i;a<t?n=i+1:r=i-1}return-n-1}function Bm(e,t){for(var n,r=0,i=e.length-1;r<=i;){var a=r+i>>>1;n=e[a];var o=n.start;if(o===t)return n;o<t?r=a+1:i=a-1}if(r>0)return n=e[r-1],t>n.end?0:n}function Vm(e,t){this.font=e,this.tableName=t}Vm.prototype={searchTag:Rm,binSearch:zm,getTable:function(e){var t=this.font.tables[this.tableName];return!t&&e&&(t=this.font.tables[this.tableName]=this.createDefaultTable()),t},getScriptNames:function(){var e=this.getTable();return e?e.scripts.map(function(e){return e.tag}):[]},getDefaultScriptName:function(){var e=this.getTable();if(e){for(var t=!1,n=0;n<e.scripts.length;n++){var r=e.scripts[n].tag;if(r===`DFLT`)return r;r===`latn`&&(t=!0)}if(t)return`latn`}},getScriptTable:function(e,t){var n=this.getTable(t);if(n){e||=`DFLT`;var r=n.scripts,i=Rm(n.scripts,e);if(i>=0)return r[i].script;if(t){var a={tag:e,script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}};return r.splice(-1-i,0,a),a.script}}},getLangSysTable:function(e,t,n){var r=this.getScriptTable(e,n);if(r){if(!t||t===`dflt`||t===`DFLT`)return r.defaultLangSys;var i=Rm(r.langSysRecords,t);if(i>=0)return r.langSysRecords[i].langSys;if(n){var a={tag:t,langSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]}};return r.langSysRecords.splice(-1-i,0,a),a.langSys}}},getFeatureTable:function(e,t,n,r){var i=this.getLangSysTable(e,t,r);if(i){for(var a,o=i.featureIndexes,s=this.font.tables[this.tableName].features,c=0;c<o.length;c++)if(a=s[o[c]],a.tag===n)return a.feature;if(r){var l=s.length;return G.assert(l===0||n>=s[l-1].tag,`Features must be added in alphabetical order.`),a={tag:n,feature:{params:0,lookupListIndexes:[]}},s.push(a),o.push(l),a.feature}}},getLookupTables:function(e,t,n,r,i){var a=this.getFeatureTable(e,t,n,i),o=[];if(a){for(var s,c=a.lookupListIndexes,l=this.font.tables[this.tableName].lookups,u=0;u<c.length;u++)s=l[c[u]],s.lookupType===r&&o.push(s);if(o.length===0&&i){s={lookupType:r,lookupFlag:0,subtables:[],markFilteringSet:void 0};var d=l.length;return l.push(s),c.push(d),[s]}}return o},getGlyphClass:function(e,t){switch(e.format){case 1:return e.startGlyph<=t&&t<e.startGlyph+e.classes.length?e.classes[t-e.startGlyph]:0;case 2:var n=Bm(e.ranges,t);return n?n.classId:0}},getCoverageIndex:function(e,t){switch(e.format){case 1:var n=zm(e.glyphs,t);return n>=0?n:-1;case 2:var r=Bm(e.ranges,t);return r?r.index+t-r.start:-1}},expandCoverage:function(e){if(e.format===1)return e.glyphs;for(var t=[],n=e.ranges,r=0;r<n.length;r++)for(var i=n[r],a=i.start,o=i.end,s=a;s<=o;s++)t.push(s);return t}};function Hm(e){Vm.call(this,e,`gpos`)}Hm.prototype=Vm.prototype,Hm.prototype.init=function(){var e=this.getDefaultScriptName();this.defaultKerningTables=this.getKerningTables(e)},Hm.prototype.getKerningValue=function(e,t,n){for(var r=0;r<e.length;r++)for(var i=e[r].subtables,a=0;a<i.length;a++){var o=i[a],s=this.getCoverageIndex(o.coverage,t);if(!(s<0))switch(o.posFormat){case 1:for(var c=o.pairSets[s],l=0;l<c.length;l++){var u=c[l];if(u.secondGlyph===n)return u.value1&&u.value1.xAdvance||0}break;case 2:var d=this.getGlyphClass(o.classDef1,t),f=this.getGlyphClass(o.classDef2,n),p=o.classRecords[d][f];return p.value1&&p.value1.xAdvance||0}}return 0},Hm.prototype.getKerningTables=function(e,t){if(this.font.tables.gpos)return this.getLookupTables(e,t,`kern`,2)};function Um(e){Vm.call(this,e,`gsub`)}function Wm(e,t){var n=e.length;if(n!==t.length)return!1;for(var r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function Gm(e,t,n){for(var r=e.subtables,i=0;i<r.length;i++){var a=r[i];if(a.substFormat===t)return a}if(n)return r.push(n),n}Um.prototype=Vm.prototype,Um.prototype.createDefaultTable=function(){return{version:1,scripts:[{tag:`DFLT`,script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}}],features:[],lookups:[]}},Um.prototype.getSingle=function(e,t,n){for(var r=[],i=this.getLookupTables(t,n,e,1),a=0;a<i.length;a++)for(var o=i[a].subtables,s=0;s<o.length;s++){var c=o[s],l=this.expandCoverage(c.coverage),u=void 0;if(c.substFormat===1){var d=c.deltaGlyphId;for(u=0;u<l.length;u++){var f=l[u];r.push({sub:f,by:f+d})}}else{var p=c.substitute;for(u=0;u<l.length;u++)r.push({sub:l[u],by:p[u]})}}return r},Um.prototype.getMultiple=function(e,t,n){for(var r=[],i=this.getLookupTables(t,n,e,2),a=0;a<i.length;a++)for(var o=i[a].subtables,s=0;s<o.length;s++){var c=o[s],l=this.expandCoverage(c.coverage),u=void 0;for(u=0;u<l.length;u++){var d=l[u],f=c.sequences[u];r.push({sub:d,by:f})}}return r},Um.prototype.getAlternates=function(e,t,n){for(var r=[],i=this.getLookupTables(t,n,e,3),a=0;a<i.length;a++)for(var o=i[a].subtables,s=0;s<o.length;s++)for(var c=o[s],l=this.expandCoverage(c.coverage),u=c.alternateSets,d=0;d<l.length;d++)r.push({sub:l[d],by:u[d]});return r},Um.prototype.getLigatures=function(e,t,n){for(var r=[],i=this.getLookupTables(t,n,e,4),a=0;a<i.length;a++)for(var o=i[a].subtables,s=0;s<o.length;s++)for(var c=o[s],l=this.expandCoverage(c.coverage),u=c.ligatureSets,d=0;d<l.length;d++)for(var f=l[d],p=u[d],m=0;m<p.length;m++){var h=p[m];r.push({sub:[f].concat(h.components),by:h.ligGlyph})}return r},Um.prototype.addSingle=function(e,t,n,r){var i=this.getLookupTables(n,r,e,1,!0)[0],a=Gm(i,2,{substFormat:2,coverage:{format:1,glyphs:[]},substitute:[]});G.assert(a.coverage.format===1,`Single: unable to modify coverage table format `+a.coverage.format);var o=t.sub,s=this.binSearch(a.coverage.glyphs,o);s<0&&(s=-1-s,a.coverage.glyphs.splice(s,0,o),a.substitute.splice(s,0,0)),a.substitute[s]=t.by},Um.prototype.addMultiple=function(e,t,n,r){G.assert(t.by instanceof Array&&t.by.length>1,`Multiple: "by" must be an array of two or more ids`);var i=this.getLookupTables(n,r,e,2,!0)[0],a=Gm(i,1,{substFormat:1,coverage:{format:1,glyphs:[]},sequences:[]});G.assert(a.coverage.format===1,`Multiple: unable to modify coverage table format `+a.coverage.format);var o=t.sub,s=this.binSearch(a.coverage.glyphs,o);s<0&&(s=-1-s,a.coverage.glyphs.splice(s,0,o),a.sequences.splice(s,0,0)),a.sequences[s]=t.by},Um.prototype.addAlternate=function(e,t,n,r){var i=this.getLookupTables(n,r,e,3,!0)[0],a=Gm(i,1,{substFormat:1,coverage:{format:1,glyphs:[]},alternateSets:[]});G.assert(a.coverage.format===1,`Alternate: unable to modify coverage table format `+a.coverage.format);var o=t.sub,s=this.binSearch(a.coverage.glyphs,o);s<0&&(s=-1-s,a.coverage.glyphs.splice(s,0,o),a.alternateSets.splice(s,0,0)),a.alternateSets[s]=t.by},Um.prototype.addLigature=function(e,t,n,r){var i=this.getLookupTables(n,r,e,4,!0)[0],a=i.subtables[0];a||(a={substFormat:1,coverage:{format:1,glyphs:[]},ligatureSets:[]},i.subtables[0]=a),G.assert(a.coverage.format===1,`Ligature: unable to modify coverage table format `+a.coverage.format);var o=t.sub[0],s=t.sub.slice(1),c={ligGlyph:t.by,components:s},l=this.binSearch(a.coverage.glyphs,o);if(l>=0){for(var u=a.ligatureSets[l],d=0;d<u.length;d++)if(Wm(u[d].components,s))return;u.push(c)}else l=-1-l,a.coverage.glyphs.splice(l,0,o),a.ligatureSets.splice(l,0,[c])},Um.prototype.getFeature=function(e,t,n){if(/ss\d\d/.test(e))return this.getSingle(e,t,n);switch(e){case`aalt`:case`salt`:return this.getSingle(e,t,n).concat(this.getAlternates(e,t,n));case`dlig`:case`liga`:case`rlig`:return this.getLigatures(e,t,n);case`ccmp`:return this.getMultiple(e,t,n).concat(this.getLigatures(e,t,n));case`stch`:return this.getMultiple(e,t,n)}},Um.prototype.add=function(e,t,n,r){if(/ss\d\d/.test(e))return this.addSingle(e,t,n,r);switch(e){case`aalt`:case`salt`:return typeof t.by==`number`?this.addSingle(e,t,n,r):this.addAlternate(e,t,n,r);case`dlig`:case`liga`:case`rlig`:return this.addLigature(e,t,n,r);case`ccmp`:return t.by instanceof Array?this.addMultiple(e,t,n,r):this.addLigature(e,t,n,r)}};function Km(e,t){if(!e)throw t}function qm(e,t,n,r,i){var a;return(t&r)>0?(a=e.parseByte(),(t&i)===0&&(a=-a),a=n+a):a=(t&i)>0?n:n+e.parseShort(),a}function Jm(e,t,n){var r=new X.Parser(t,n);e.numberOfContours=r.parseShort(),e._xMin=r.parseShort(),e._yMin=r.parseShort(),e._xMax=r.parseShort(),e._yMax=r.parseShort();var i,a;if(e.numberOfContours>0){for(var o=e.endPointIndices=[],s=0;s<e.numberOfContours;s+=1)o.push(r.parseUShort());e.instructionLength=r.parseUShort(),e.instructions=[];for(var c=0;c<e.instructionLength;c+=1)e.instructions.push(r.parseByte());var l=o[o.length-1]+1;i=[];for(var u=0;u<l;u+=1)if(a=r.parseByte(),i.push(a),(a&8)>0)for(var d=r.parseByte(),f=0;f<d;f+=1)i.push(a),u+=1;if(G.argument(i.length===l,`Bad flags.`),o.length>0){var p=[],m;if(l>0){for(var h=0;h<l;h+=1)a=i[h],m={},m.onCurve=!!(a&1),m.lastPointOfContour=o.indexOf(h)>=0,p.push(m);for(var g=0,_=0;_<l;_+=1)a=i[_],m=p[_],m.x=qm(r,a,g,2,16),g=m.x;for(var v=0,y=0;y<l;y+=1)a=i[y],m=p[y],m.y=qm(r,a,v,4,32),v=m.y}e.points=p}else e.points=[]}else if(e.numberOfContours===0)e.points=[];else{e.isComposite=!0,e.points=[],e.components=[];for(var b=!0;b;){i=r.parseUShort();var x={glyphIndex:r.parseUShort(),xScale:1,scale01:0,scale10:0,yScale:1,dx:0,dy:0};(i&1)>0?(i&2)>0?(x.dx=r.parseShort(),x.dy=r.parseShort()):x.matchedPoints=[r.parseUShort(),r.parseUShort()]:(i&2)>0?(x.dx=r.parseChar(),x.dy=r.parseChar()):x.matchedPoints=[r.parseByte(),r.parseByte()],(i&8)>0?x.xScale=x.yScale=r.parseF2Dot14():(i&64)>0?(x.xScale=r.parseF2Dot14(),x.yScale=r.parseF2Dot14()):(i&128)>0&&(x.xScale=r.parseF2Dot14(),x.scale01=r.parseF2Dot14(),x.scale10=r.parseF2Dot14(),x.yScale=r.parseF2Dot14()),e.components.push(x),b=!!(i&32)}if(i&256){e.instructionLength=r.parseUShort(),e.instructions=[];for(var S=0;S<e.instructionLength;S+=1)e.instructions.push(r.parseByte())}}}function Ym(e,t){for(var n=[],r=0;r<e.length;r+=1){var i=e[r],a={x:t.xScale*i.x+t.scale01*i.y+t.dx,y:t.scale10*i.x+t.yScale*i.y+t.dy,onCurve:i.onCurve,lastPointOfContour:i.lastPointOfContour};n.push(a)}return n}function Xm(e){for(var t=[],n=[],r=0;r<e.length;r+=1){var i=e[r];n.push(i),i.lastPointOfContour&&(t.push(n),n=[])}return G.argument(n.length===0,`There are still points left in the current contour.`),t}function Zm(e){var t=new Id;if(!e)return t;for(var n=Xm(e),r=0;r<n.length;++r){var i=n[r],a=null,o=i[i.length-1],s=i[0];if(o.onCurve)t.moveTo(o.x,o.y);else if(s.onCurve)t.moveTo(s.x,s.y);else{var c={x:(o.x+s.x)*.5,y:(o.y+s.y)*.5};t.moveTo(c.x,c.y)}for(var l=0;l<i.length;++l)if(a=o,o=s,s=i[(l+1)%i.length],o.onCurve)t.lineTo(o.x,o.y);else{var u=s;a.onCurve||((o.x+a.x)*.5,(o.y+a.y)*.5),s.onCurve||(u={x:(o.x+s.x)*.5,y:(o.y+s.y)*.5}),t.quadraticCurveTo(o.x,o.y,u.x,u.y)}t.closePath()}return t}function Qm(e,t){if(t.isComposite)for(var n=0;n<t.components.length;n+=1){var r=t.components[n],i=e.get(r.glyphIndex);if(i.getPath(),i.points){var a=void 0;if(r.matchedPoints===void 0)a=Ym(i.points,r);else{if(r.matchedPoints[0]>t.points.length-1||r.matchedPoints[1]>i.points.length-1)throw Error(`Matched points out of range in `+t.name);var o=t.points[r.matchedPoints[0]],s=i.points[r.matchedPoints[1]],c={xScale:r.xScale,scale01:r.scale01,scale10:r.scale10,yScale:r.yScale,dx:0,dy:0};s=Ym([s],c)[0],c.dx=o.x-s.x,c.dy=o.y-s.y,a=Ym(i.points,c)}t.points=t.points.concat(a)}}return Zm(t.points)}function $m(e,t,n,r){for(var i=new Gf.GlyphSet(r),a=0;a<n.length-1;a+=1){var o=n[a];o===n[a+1]?i.push(a,Gf.glyphLoader(r,a)):i.push(a,Gf.ttfGlyphLoader(r,a,Jm,e,t+o,Qm))}return i}function eh(e,t,n,r){var i=new Gf.GlyphSet(r);return r._push=function(a){var o=n[a];o===n[a+1]?i.push(a,Gf.glyphLoader(r,a)):i.push(a,Gf.ttfGlyphLoader(r,a,Jm,e,t+o,Qm))},i}function th(e,t,n,r,i){return i.lowMemory?eh(e,t,n,r):$m(e,t,n,r)}var nh={getPath:Zm,parse:th},rh,ih,ah,oh;function sh(e){this.font=e,this.getCommands=function(e){return nh.getPath(e).commands},this._fpgmState=this._prepState=void 0,this._errorState=0}function ch(e){return e}function lh(e){return Math.sign(e)*Math.round(Math.abs(e))}function uh(e){return Math.sign(e)*Math.round(Math.abs(e*2))/2}function dh(e){return Math.sign(e)*(Math.round(Math.abs(e)+.5)-.5)}function fh(e){return Math.sign(e)*Math.ceil(Math.abs(e))}function ph(e){return Math.sign(e)*Math.floor(Math.abs(e))}var mh=function(e){var t=this.srPeriod,n=this.srPhase,r=this.srThreshold,i=1;return e<0&&(e=-e,i=-1),e+=r-n,e=Math.trunc(e/t)*t,e+=n,e<0?n*i:e*i},hh={x:1,y:0,axis:`x`,distance:function(e,t,n,r){return(n?e.xo:e.x)-(r?t.xo:t.x)},interpolate:function(e,t,n,r){var i,a,o,s,c,l,u;if(!r||r===this){if(i=e.xo-t.xo,a=e.xo-n.xo,c=t.x-t.xo,l=n.x-n.xo,o=Math.abs(i),s=Math.abs(a),u=o+s,u===0){e.x=e.xo+(c+l)/2;return}e.x=e.xo+(c*s+l*o)/u;return}if(i=r.distance(e,t,!0,!0),a=r.distance(e,n,!0,!0),c=r.distance(t,t,!1,!0),l=r.distance(n,n,!1,!0),o=Math.abs(i),s=Math.abs(a),u=o+s,u===0){hh.setRelative(e,e,(c+l)/2,r,!0);return}hh.setRelative(e,e,(c*s+l*o)/u,r,!0)},normalSlope:-1/0,setRelative:function(e,t,n,r,i){if(!r||r===this){e.x=(i?t.xo:t.x)+n;return}var a=i?t.xo:t.x,o=i?t.yo:t.y,s=a+n*r.x,c=o+n*r.y;e.x=s+(e.y-c)/r.normalSlope},slope:0,touch:function(e){e.xTouched=!0},touched:function(e){return e.xTouched},untouch:function(e){e.xTouched=!1}},gh={x:0,y:1,axis:`y`,distance:function(e,t,n,r){return(n?e.yo:e.y)-(r?t.yo:t.y)},interpolate:function(e,t,n,r){var i,a,o,s,c,l,u;if(!r||r===this){if(i=e.yo-t.yo,a=e.yo-n.yo,c=t.y-t.yo,l=n.y-n.yo,o=Math.abs(i),s=Math.abs(a),u=o+s,u===0){e.y=e.yo+(c+l)/2;return}e.y=e.yo+(c*s+l*o)/u;return}if(i=r.distance(e,t,!0,!0),a=r.distance(e,n,!0,!0),c=r.distance(t,t,!1,!0),l=r.distance(n,n,!1,!0),o=Math.abs(i),s=Math.abs(a),u=o+s,u===0){gh.setRelative(e,e,(c+l)/2,r,!0);return}gh.setRelative(e,e,(c*s+l*o)/u,r,!0)},normalSlope:0,setRelative:function(e,t,n,r,i){if(!r||r===this){e.y=(i?t.yo:t.y)+n;return}var a=i?t.xo:t.x,o=i?t.yo:t.y,s=a+n*r.x;e.y=o+n*r.y+r.normalSlope*(e.x-s)},slope:1/0,touch:function(e){e.yTouched=!0},touched:function(e){return e.yTouched},untouch:function(e){e.yTouched=!1}};Object.freeze(hh),Object.freeze(gh);function _h(e,t){this.x=e,this.y=t,this.axis=void 0,this.slope=t/e,this.normalSlope=-e/t,Object.freeze(this)}_h.prototype.distance=function(e,t,n,r){return this.x*hh.distance(e,t,n,r)+this.y*gh.distance(e,t,n,r)},_h.prototype.interpolate=function(e,t,n,r){var i,a,o=r.distance(e,t,!0,!0),s=r.distance(e,n,!0,!0),c,l,u;if(i=r.distance(t,t,!1,!0),a=r.distance(n,n,!1,!0),c=Math.abs(o),l=Math.abs(s),u=c+l,u===0){this.setRelative(e,e,(i+a)/2,r,!0);return}this.setRelative(e,e,(i*l+a*c)/u,r,!0)},_h.prototype.setRelative=function(e,t,n,r,i){r||=this;var a=i?t.xo:t.x,o=i?t.yo:t.y,s=a+n*r.x,c=o+n*r.y,l=r.normalSlope,u=this.slope,d=e.x,f=e.y;e.x=(u*d-l*s+c-f)/(u-l),e.y=u*(e.x-d)+f},_h.prototype.touch=function(e){e.xTouched=!0,e.yTouched=!0};function vh(e,t){var n=Math.sqrt(e*e+t*t);return e/=n,t/=n,e===1&&t===0?hh:e===0&&t===1?gh:new _h(e,t)}function yh(e,t,n,r){this.x=this.xo=Math.round(e*64)/64,this.y=this.yo=Math.round(t*64)/64,this.lastPointOfContour=n,this.onCurve=r,this.prevPointOnContour=void 0,this.nextPointOnContour=void 0,this.xTouched=!1,this.yTouched=!1,Object.preventExtensions(this)}yh.prototype.nextTouched=function(e){for(var t=this.nextPointOnContour;!e.touched(t)&&t!==this;)t=t.nextPointOnContour;return t},yh.prototype.prevTouched=function(e){for(var t=this.prevPointOnContour;!e.touched(t)&&t!==this;)t=t.prevPointOnContour;return t};var bh=Object.freeze(new yh(0,0)),xh={cvCutIn:17/16,deltaBase:9,deltaShift:.125,loop:1,minDis:1,autoFlip:!0};function Sh(e,t){switch(this.env=e,this.stack=[],this.prog=t,e){case`glyf`:this.zp0=this.zp1=this.zp2=1,this.rp0=this.rp1=this.rp2=0;case`prep`:this.fv=this.pv=this.dpv=hh,this.round=lh}}sh.prototype.exec=function(e,t){if(typeof t!=`number`)throw Error(`Point size is not a number!`);if(!(this._errorState>2)){var n=this.font,r=this._prepState;if(!r||r.ppem!==t){var i=this._fpgmState;if(!i){Sh.prototype=xh,i=this._fpgmState=new Sh(`fpgm`,n.tables.fpgm),i.funcs=[],i.font=n,exports.DEBUG&&(console.log(`---EXEC FPGM---`),i.step=-1);try{ih(i)}catch(e){console.log(`Hinting error in FPGM:`+e),this._errorState=3;return}}Sh.prototype=i,r=this._prepState=new Sh(`prep`,n.tables.prep),r.ppem=t;var a=n.tables.cvt;if(a)for(var o=r.cvt=Array(a.length),s=t/n.unitsPerEm,c=0;c<a.length;c++)o[c]=a[c]*s;else r.cvt=[];exports.DEBUG&&(console.log(`---EXEC PREP---`),r.step=-1);try{ih(r)}catch(e){this._errorState<2&&console.log(`Hinting error in PREP:`+e),this._errorState=2}}if(!(this._errorState>1))try{return ah(e,r)}catch(e){this._errorState<1&&(console.log(`Hinting error:`+e),console.log(`Note: further hinting errors are silenced`)),this._errorState=1;return}}},ah=function(e,t){var n=t.ppem/t.font.unitsPerEm,r=n,i=e.components,a,o,s;if(Sh.prototype=t,!i)s=new Sh(`glyf`,e.instructions),exports.DEBUG&&(console.log(`---EXEC GLYPH---`),s.step=-1),oh(e,s,n,r),o=s.gZone;else{var c=t.font;o=[],a=[];for(var l=0;l<i.length;l++){var u=i[l],d=c.glyphs.get(u.glyphIndex);s=new Sh(`glyf`,d.instructions),exports.DEBUG&&(console.log(`---EXEC COMP `+l+`---`),s.step=-1),oh(d,s,n,r);for(var f=Math.round(u.dx*n),p=Math.round(u.dy*r),m=s.gZone,h=s.contours,g=0;g<m.length;g++){var _=m[g];_.xTouched=_.yTouched=!1,_.xo=_.x+=f,_.yo=_.y+=p}var v=o.length;o.push.apply(o,m);for(var y=0;y<h.length;y++)a.push(h[y]+v)}e.instructions&&!s.inhibitGridFit&&(s=new Sh(`glyf`,e.instructions),s.gZone=s.z0=s.z1=s.z2=o,s.contours=a,o.push(new yh(0,0),new yh(Math.round(e.advanceWidth*n),0)),exports.DEBUG&&(console.log(`---EXEC COMPOSITE---`),s.step=-1),ih(s),o.length-=2)}return o},oh=function(e,t,n,r){for(var i=e.points||[],a=i.length,o=t.gZone=t.z0=t.z1=t.z2=[],s=t.contours=[],c,l=0;l<a;l++)c=i[l],o[l]=new yh(c.x*n,c.y*r,c.lastPointOfContour,c.onCurve);for(var u,d,f=0;f<a;f++)c=o[f],u||(u=c,s.push(f)),c.lastPointOfContour?(c.nextPointOnContour=u,u.prevPointOnContour=c,u=void 0):(d=o[f+1],c.nextPointOnContour=d,d.prevPointOnContour=c);if(!t.inhibitGridFit){if(exports.DEBUG){console.log(`PROCESSING GLYPH`,t.stack);for(var p=0;p<a;p++)console.log(p,o[p].x,o[p].y)}if(o.push(new yh(0,0),new yh(Math.round(e.advanceWidth*n),0)),ih(t),o.length-=2,exports.DEBUG){console.log(`FINISHED GLYPH`,t.stack);for(var m=0;m<a;m++)console.log(m,o[m].x,o[m].y)}}},ih=function(e){var t=e.prog;if(t){var n=t.length,r;for(e.ip=0;e.ip<n;e.ip++){if(exports.DEBUG&&e.step++,r=rh[t[e.ip]],!r)throw Error(`unknown instruction: 0x`+Number(t[e.ip]).toString(16));r(e)}}};function Ch(e){for(var t=e.tZone=Array(e.gZone.length),n=0;n<t.length;n++)t[n]=new yh(0,0)}function wh(e,t){var n=e.prog,r=e.ip,i=1,a;do if(a=n[++r],a===88)i++;else if(a===89)i--;else if(a===64)r+=n[r+1]+1;else if(a===65)r+=2*n[r+1]+1;else if(a>=176&&a<=183)r+=a-176+1;else if(a>=184&&a<=191)r+=(a-184+1)*2;else if(t&&i===1&&a===27)break;while(i>0);e.ip=r}function Th(e,t){exports.DEBUG&&console.log(t.step,`SVTCA[`+e.axis+`]`),t.fv=t.pv=t.dpv=e}function Eh(e,t){exports.DEBUG&&console.log(t.step,`SPVTCA[`+e.axis+`]`),t.pv=t.dpv=e}function Dh(e,t){exports.DEBUG&&console.log(t.step,`SFVTCA[`+e.axis+`]`),t.fv=e}function Oh(e,t){var n=t.stack,r=n.pop(),i=n.pop(),a=t.z2[r],o=t.z1[i];exports.DEBUG&&console.log(`SPVTL[`+e+`]`,r,i);var s,c;e?(s=a.y-o.y,c=o.x-a.x):(s=o.x-a.x,c=o.y-a.y),t.pv=t.dpv=vh(s,c)}function kh(e,t){var n=t.stack,r=n.pop(),i=n.pop(),a=t.z2[r],o=t.z1[i];exports.DEBUG&&console.log(`SFVTL[`+e+`]`,r,i);var s,c;e?(s=a.y-o.y,c=o.x-a.x):(s=o.x-a.x,c=o.y-a.y),t.fv=vh(s,c)}function Ah(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`SPVFS[]`,n,r),e.pv=e.dpv=vh(r,n)}function jh(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`SPVFS[]`,n,r),e.fv=vh(r,n)}function Mh(e){var t=e.stack,n=e.pv;exports.DEBUG&&console.log(e.step,`GPV[]`),t.push(n.x*16384),t.push(n.y*16384)}function Nh(e){var t=e.stack,n=e.fv;exports.DEBUG&&console.log(e.step,`GFV[]`),t.push(n.x*16384),t.push(n.y*16384)}function Ph(e){e.fv=e.pv,exports.DEBUG&&console.log(e.step,`SFVTPV[]`)}function Fh(e){var t=e.stack,n=t.pop(),r=t.pop(),i=t.pop(),a=t.pop(),o=t.pop(),s=e.z0,c=e.z1,l=s[n],u=s[r],d=c[i],f=c[a],p=e.z2[o];exports.DEBUG&&console.log(`ISECT[], `,n,r,i,a,o);var m=l.x,h=l.y,g=u.x,_=u.y,v=d.x,y=d.y,b=f.x,x=f.y,S=(m-g)*(y-x)-(h-_)*(v-b),C=m*_-h*g,w=v*x-y*b;p.x=(C*(v-b)-w*(m-g))/S,p.y=(C*(y-x)-w*(h-_))/S}function Ih(e){e.rp0=e.stack.pop(),exports.DEBUG&&console.log(e.step,`SRP0[]`,e.rp0)}function Lh(e){e.rp1=e.stack.pop(),exports.DEBUG&&console.log(e.step,`SRP1[]`,e.rp1)}function Rh(e){e.rp2=e.stack.pop(),exports.DEBUG&&console.log(e.step,`SRP2[]`,e.rp2)}function zh(e){var t=e.stack.pop();switch(exports.DEBUG&&console.log(e.step,`SZP0[]`,t),e.zp0=t,t){case 0:e.tZone||Ch(e),e.z0=e.tZone;break;case 1:e.z0=e.gZone;break;default:throw Error(`Invalid zone pointer`)}}function Bh(e){var t=e.stack.pop();switch(exports.DEBUG&&console.log(e.step,`SZP1[]`,t),e.zp1=t,t){case 0:e.tZone||Ch(e),e.z1=e.tZone;break;case 1:e.z1=e.gZone;break;default:throw Error(`Invalid zone pointer`)}}function Vh(e){var t=e.stack.pop();switch(exports.DEBUG&&console.log(e.step,`SZP2[]`,t),e.zp2=t,t){case 0:e.tZone||Ch(e),e.z2=e.tZone;break;case 1:e.z2=e.gZone;break;default:throw Error(`Invalid zone pointer`)}}function Hh(e){var t=e.stack.pop();switch(exports.DEBUG&&console.log(e.step,`SZPS[]`,t),e.zp0=e.zp1=e.zp2=t,t){case 0:e.tZone||Ch(e),e.z0=e.z1=e.z2=e.tZone;break;case 1:e.z0=e.z1=e.z2=e.gZone;break;default:throw Error(`Invalid zone pointer`)}}function Uh(e){e.loop=e.stack.pop(),exports.DEBUG&&console.log(e.step,`SLOOP[]`,e.loop)}function Wh(e){exports.DEBUG&&console.log(e.step,`RTG[]`),e.round=lh}function Gh(e){exports.DEBUG&&console.log(e.step,`RTHG[]`),e.round=dh}function Kh(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,`SMD[]`,t),e.minDis=t/64}function qh(e){exports.DEBUG&&console.log(e.step,`ELSE[]`),wh(e,!1)}function Jh(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,`JMPR[]`,t),e.ip+=t-1}function Yh(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,`SCVTCI[]`,t),e.cvCutIn=t/64}function Xh(e){var t=e.stack;exports.DEBUG&&console.log(e.step,`DUP[]`),t.push(t[t.length-1])}function Zh(e){exports.DEBUG&&console.log(e.step,`POP[]`),e.stack.pop()}function Qh(e){exports.DEBUG&&console.log(e.step,`CLEAR[]`),e.stack.length=0}function $h(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`SWAP[]`),t.push(n),t.push(r)}function eg(e){var t=e.stack;exports.DEBUG&&console.log(e.step,`DEPTH[]`),t.push(t.length)}function tg(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`LOOPCALL[]`,n,r);var i=e.ip,a=e.prog;e.prog=e.funcs[n];for(var o=0;o<r;o++)ih(e),exports.DEBUG&&console.log(++e.step,o+1<r?`next loopcall`:`done loopcall`,o);e.ip=i,e.prog=a}function ng(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,`CALL[]`,t);var n=e.ip,r=e.prog;e.prog=e.funcs[t],ih(e),e.ip=n,e.prog=r,exports.DEBUG&&console.log(++e.step,`returning from`,t)}function rg(e){var t=e.stack,n=t.pop();exports.DEBUG&&console.log(e.step,`CINDEX[]`,n),t.push(t[t.length-n])}function ig(e){var t=e.stack,n=t.pop();exports.DEBUG&&console.log(e.step,`MINDEX[]`,n),t.push(t.splice(t.length-n,1)[0])}function ag(e){if(e.env!==`fpgm`)throw Error(`FDEF not allowed here`);var t=e.stack,n=e.prog,r=e.ip,i=t.pop(),a=r;for(exports.DEBUG&&console.log(e.step,`FDEF[]`,i);n[++r]!==45;);e.ip=r,e.funcs[i]=n.slice(a+1,r)}function og(e,t){var n=t.stack.pop(),r=t.z0[n],i=t.fv,a=t.pv;exports.DEBUG&&console.log(t.step,`MDAP[`+e+`]`,n);var o=a.distance(r,bh);e&&(o=t.round(o)),i.setRelative(r,bh,o,a),i.touch(r),t.rp0=t.rp1=n}function sg(e,t){var n=t.z2,r=n.length-2,i,a,o;exports.DEBUG&&console.log(t.step,`IUP[`+e.axis+`]`);for(var s=0;s<r;s++)i=n[s],!e.touched(i)&&(a=i.prevTouched(e),a!==i&&(o=i.nextTouched(e),a===o&&e.setRelative(i,i,e.distance(a,a,!1,!0),e,!0),e.interpolate(i,a,o,e)))}function cg(e,t){for(var n=t.stack,r=e?t.rp1:t.rp2,i=(e?t.z0:t.z1)[r],a=t.fv,o=t.pv,s=t.loop,c=t.z2;s--;){var l=n.pop(),u=c[l],d=o.distance(i,i,!1,!0);a.setRelative(u,u,d,o),a.touch(u),exports.DEBUG&&console.log(t.step,(t.loop>1?`loop `+(t.loop-s)+`: `:``)+`SHP[`+(e?`rp1`:`rp2`)+`]`,l)}t.loop=1}function lg(e,t){var n=t.stack,r=e?t.rp1:t.rp2,i=(e?t.z0:t.z1)[r],a=t.fv,o=t.pv,s=n.pop(),c=t.z2[t.contours[s]],l=c;exports.DEBUG&&console.log(t.step,`SHC[`+e+`]`,s);var u=o.distance(i,i,!1,!0);do l!==i&&a.setRelative(l,l,u,o),l=l.nextPointOnContour;while(l!==c)}function ug(e,t){var n=t.stack,r=e?t.rp1:t.rp2,i=(e?t.z0:t.z1)[r],a=t.fv,o=t.pv,s=n.pop();exports.DEBUG&&console.log(t.step,`SHZ[`+e+`]`,s);var c;switch(s){case 0:c=t.tZone;break;case 1:c=t.gZone;break;default:throw Error(`Invalid zone`)}for(var l,u=o.distance(i,i,!1,!0),d=c.length-2,f=0;f<d;f++)l=c[f],a.setRelative(l,l,u,o)}function dg(e){for(var t=e.stack,n=e.loop,r=e.fv,i=t.pop()/64,a=e.z2;n--;){var o=t.pop(),s=a[o];exports.DEBUG&&console.log(e.step,(e.loop>1?`loop `+(e.loop-n)+`: `:``)+`SHPIX[]`,o,i),r.setRelative(s,s,i),r.touch(s)}e.loop=1}function fg(e){for(var t=e.stack,n=e.rp1,r=e.rp2,i=e.loop,a=e.z0[n],o=e.z1[r],s=e.fv,c=e.dpv,l=e.z2;i--;){var u=t.pop(),d=l[u];exports.DEBUG&&console.log(e.step,(e.loop>1?`loop `+(e.loop-i)+`: `:``)+`IP[]`,u,n,`<->`,r),s.interpolate(d,a,o,c),s.touch(d)}e.loop=1}function pg(e,t){var n=t.stack,r=n.pop()/64,i=n.pop(),a=t.z1[i],o=t.z0[t.rp0],s=t.fv,c=t.pv;s.setRelative(a,o,r,c),s.touch(a),exports.DEBUG&&console.log(t.step,`MSIRP[`+e+`]`,r,i),t.rp1=t.rp0,t.rp2=i,e&&(t.rp0=i)}function mg(e){for(var t=e.stack,n=e.rp0,r=e.z0[n],i=e.loop,a=e.fv,o=e.pv,s=e.z1;i--;){var c=t.pop(),l=s[c];exports.DEBUG&&console.log(e.step,(e.loop>1?`loop `+(e.loop-i)+`: `:``)+`ALIGNRP[]`,c),a.setRelative(l,r,0,o),a.touch(l)}e.loop=1}function hg(e){exports.DEBUG&&console.log(e.step,`RTDG[]`),e.round=uh}function gg(e,t){var n=t.stack,r=n.pop(),i=n.pop(),a=t.z0[i],o=t.fv,s=t.pv,c=t.cvt[r];exports.DEBUG&&console.log(t.step,`MIAP[`+e+`]`,r,`(`,c,`)`,i);var l=s.distance(a,bh);e&&(Math.abs(l-c)<t.cvCutIn&&(l=c),l=t.round(l)),o.setRelative(a,bh,l,s),t.zp0===0&&(a.xo=a.x,a.yo=a.y),o.touch(a),t.rp0=t.rp1=i}function _g(e){var t=e.prog,n=e.ip,r=e.stack,i=t[++n];exports.DEBUG&&console.log(e.step,`NPUSHB[]`,i);for(var a=0;a<i;a++)r.push(t[++n]);e.ip=n}function vg(e){var t=e.ip,n=e.prog,r=e.stack,i=n[++t];exports.DEBUG&&console.log(e.step,`NPUSHW[]`,i);for(var a=0;a<i;a++){var o=n[++t]<<8|n[++t];o&32768&&(o=-((o^65535)+1)),r.push(o)}e.ip=t}function yg(e){var t=e.stack,n=e.store;n||=e.store=[];var r=t.pop(),i=t.pop();exports.DEBUG&&console.log(e.step,`WS`,r,i),n[i]=r}function bg(e){var t=e.stack,n=e.store,r=t.pop();exports.DEBUG&&console.log(e.step,`RS`,r);var i=n&&n[r]||0;t.push(i)}function xg(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`WCVTP`,n,r),e.cvt[r]=n/64}function Sg(e){var t=e.stack,n=t.pop();exports.DEBUG&&console.log(e.step,`RCVT`,n),t.push(e.cvt[n]*64)}function Cg(e,t){var n=t.stack,r=n.pop(),i=t.z2[r];exports.DEBUG&&console.log(t.step,`GC[`+e+`]`,r),n.push(t.dpv.distance(i,bh,e,!1)*64)}function wg(e,t){var n=t.stack,r=n.pop(),i=n.pop(),a=t.z1[r],o=t.z0[i],s=t.dpv.distance(o,a,e,e);exports.DEBUG&&console.log(t.step,`MD[`+e+`]`,r,i,`->`,s),t.stack.push(Math.round(s*64))}function Tg(e){exports.DEBUG&&console.log(e.step,`MPPEM[]`),e.stack.push(e.ppem)}function Eg(e){exports.DEBUG&&console.log(e.step,`FLIPON[]`),e.autoFlip=!0}function Dg(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`LT[]`,n,r),t.push(+(r<n))}function Og(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`LTEQ[]`,n,r),t.push(+(r<=n))}function kg(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`GT[]`,n,r),t.push(+(r>n))}function Ag(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`GTEQ[]`,n,r),t.push(+(r>=n))}function jg(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`EQ[]`,n,r),t.push(+(n===r))}function Mg(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`NEQ[]`,n,r),t.push(n===r?0:1)}function Ng(e){var t=e.stack,n=t.pop();exports.DEBUG&&console.log(e.step,`ODD[]`,n),t.push(Math.trunc(n)%2?1:0)}function Pg(e){var t=e.stack,n=t.pop();exports.DEBUG&&console.log(e.step,`EVEN[]`,n),t.push(Math.trunc(n)%2?0:1)}function Fg(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,`IF[]`,t),t||(wh(e,!0),exports.DEBUG&&console.log(e.step,`EIF[]`))}function Ig(e){exports.DEBUG&&console.log(e.step,`EIF[]`)}function Lg(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`AND[]`,n,r),t.push(n&&r?1:0)}function Rg(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`OR[]`,n,r),t.push(n||r?1:0)}function zg(e){var t=e.stack,n=t.pop();exports.DEBUG&&console.log(e.step,`NOT[]`,n),t.push(+!n)}function Bg(e,t){var n=t.stack,r=n.pop(),i=t.fv,a=t.pv,o=t.ppem,s=t.deltaBase+(e-1)*16,c=t.deltaShift,l=t.z0;exports.DEBUG&&console.log(t.step,`DELTAP[`+e+`]`,r,n);for(var u=0;u<r;u++){var d=n.pop(),f=n.pop();if(s+((f&240)>>4)===o){var p=(f&15)-8;p>=0&&p++,exports.DEBUG&&console.log(t.step,`DELTAPFIX`,d,`by`,p*c);var m=l[d];i.setRelative(m,m,p*c,a)}}}function Vg(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,`SDB[]`,t),e.deltaBase=t}function Hg(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,`SDS[]`,t),e.deltaShift=.5**t}function Ug(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`ADD[]`,n,r),t.push(r+n)}function Wg(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`SUB[]`,n,r),t.push(r-n)}function Gg(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`DIV[]`,n,r),t.push(r*64/n)}function Kg(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`MUL[]`,n,r),t.push(r*n/64)}function qg(e){var t=e.stack,n=t.pop();exports.DEBUG&&console.log(e.step,`ABS[]`,n),t.push(Math.abs(n))}function Jg(e){var t=e.stack,n=t.pop();exports.DEBUG&&console.log(e.step,`NEG[]`,n),t.push(-n)}function Yg(e){var t=e.stack,n=t.pop();exports.DEBUG&&console.log(e.step,`FLOOR[]`,n),t.push(Math.floor(n/64)*64)}function Xg(e){var t=e.stack,n=t.pop();exports.DEBUG&&console.log(e.step,`CEILING[]`,n),t.push(Math.ceil(n/64)*64)}function Zg(e,t){var n=t.stack,r=n.pop();exports.DEBUG&&console.log(t.step,`ROUND[]`),n.push(t.round(r/64)*64)}function Qg(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`WCVTF[]`,n,r),e.cvt[r]=n*e.ppem/e.font.unitsPerEm}function $g(e,t){var n=t.stack,r=n.pop(),i=t.ppem,a=t.deltaBase+(e-1)*16,o=t.deltaShift;exports.DEBUG&&console.log(t.step,`DELTAC[`+e+`]`,r,n);for(var s=0;s<r;s++){var c=n.pop(),l=n.pop();if(a+((l&240)>>4)===i){var u=(l&15)-8;u>=0&&u++;var d=u*o;exports.DEBUG&&console.log(t.step,`DELTACFIX`,c,`by`,d),t.cvt[c]+=d}}}function e_(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,`SROUND[]`,t),e.round=mh;var n;switch(t&192){case 0:n=.5;break;case 64:n=1;break;case 128:n=2;break;default:throw Error(`invalid SROUND value`)}switch(e.srPeriod=n,t&48){case 0:e.srPhase=0;break;case 16:e.srPhase=.25*n;break;case 32:e.srPhase=.5*n;break;case 48:e.srPhase=.75*n;break;default:throw Error(`invalid SROUND value`)}t&=15,t===0?e.srThreshold=0:e.srThreshold=(t/8-.5)*n}function t_(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,`S45ROUND[]`,t),e.round=mh;var n;switch(t&192){case 0:n=Math.sqrt(2)/2;break;case 64:n=Math.sqrt(2);break;case 128:n=2*Math.sqrt(2);break;default:throw Error(`invalid S45ROUND value`)}switch(e.srPeriod=n,t&48){case 0:e.srPhase=0;break;case 16:e.srPhase=.25*n;break;case 32:e.srPhase=.5*n;break;case 48:e.srPhase=.75*n;break;default:throw Error(`invalid S45ROUND value`)}t&=15,t===0?e.srThreshold=0:e.srThreshold=(t/8-.5)*n}function n_(e){exports.DEBUG&&console.log(e.step,`ROFF[]`),e.round=ch}function r_(e){exports.DEBUG&&console.log(e.step,`RUTG[]`),e.round=fh}function i_(e){exports.DEBUG&&console.log(e.step,`RDTG[]`),e.round=ph}function a_(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,`SCANCTRL[]`,t)}function o_(e,t){var n=t.stack,r=n.pop(),i=n.pop(),a=t.z2[r],o=t.z1[i];exports.DEBUG&&console.log(t.step,`SDPVTL[`+e+`]`,r,i);var s,c;e?(s=a.y-o.y,c=o.x-a.x):(s=o.x-a.x,c=o.y-a.y),t.dpv=vh(s,c)}function s_(e){var t=e.stack,n=t.pop(),r=0;exports.DEBUG&&console.log(e.step,`GETINFO[]`,n),n&1&&(r=35),n&32&&(r|=4096),t.push(r)}function c_(e){var t=e.stack,n=t.pop(),r=t.pop(),i=t.pop();exports.DEBUG&&console.log(e.step,`ROLL[]`),t.push(r),t.push(n),t.push(i)}function l_(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`MAX[]`,n,r),t.push(Math.max(r,n))}function u_(e){var t=e.stack,n=t.pop(),r=t.pop();exports.DEBUG&&console.log(e.step,`MIN[]`,n,r),t.push(Math.min(r,n))}function d_(e){var t=e.stack.pop();exports.DEBUG&&console.log(e.step,`SCANTYPE[]`,t)}function f_(e){var t=e.stack.pop(),n=e.stack.pop();switch(exports.DEBUG&&console.log(e.step,`INSTCTRL[]`,t,n),t){case 1:e.inhibitGridFit=!!n;return;case 2:e.ignoreCvt=!!n;return;default:throw Error(`invalid INSTCTRL[] selector`)}}function p_(e,t){var n=t.stack,r=t.prog,i=t.ip;exports.DEBUG&&console.log(t.step,`PUSHB[`+e+`]`);for(var a=0;a<e;a++)n.push(r[++i]);t.ip=i}function m_(e,t){var n=t.ip,r=t.prog,i=t.stack;exports.DEBUG&&console.log(t.ip,`PUSHW[`+e+`]`);for(var a=0;a<e;a++){var o=r[++n]<<8|r[++n];o&32768&&(o=-((o^65535)+1)),i.push(o)}t.ip=n}function Z(e,t,n,r,i,a){var o=a.stack,s=e&&o.pop(),c=o.pop(),l=a.rp0,u=a.z0[l],d=a.z1[c],f=a.minDis,p=a.fv,m=a.dpv,h,g=h=m.distance(d,u,!0,!0),_=g>=0?1:-1,v;g=Math.abs(g),e&&(v=a.cvt[s],r&&Math.abs(g-v)<a.cvCutIn&&(g=v)),n&&g<f&&(g=f),r&&(g=a.round(g)),p.setRelative(d,u,_*g,m),p.touch(d),exports.DEBUG&&console.log(a.step,(e?`MIRP[`:`MDRP[`)+(t?`M`:`m`)+(n?`>`:`_`)+(r?`R`:`_`)+(i===0?`Gr`:i===1?`Bl`:i===2?`Wh`:``)+`]`,e?s+`(`+a.cvt[s]+`,`+v+`)`:``,c,`(d =`,h,`->`,_*g,`)`),a.rp1=a.rp0,a.rp2=c,t&&(a.rp0=c)}rh=[Th.bind(void 0,gh),Th.bind(void 0,hh),Eh.bind(void 0,gh),Eh.bind(void 0,hh),Dh.bind(void 0,gh),Dh.bind(void 0,hh),Oh.bind(void 0,0),Oh.bind(void 0,1),kh.bind(void 0,0),kh.bind(void 0,1),Ah,jh,Mh,Nh,Ph,Fh,Ih,Lh,Rh,zh,Bh,Vh,Hh,Uh,Wh,Gh,Kh,qh,Jh,Yh,void 0,void 0,Xh,Zh,Qh,$h,eg,rg,ig,void 0,void 0,void 0,tg,ng,ag,void 0,og.bind(void 0,0),og.bind(void 0,1),sg.bind(void 0,gh),sg.bind(void 0,hh),cg.bind(void 0,0),cg.bind(void 0,1),lg.bind(void 0,0),lg.bind(void 0,1),ug.bind(void 0,0),ug.bind(void 0,1),dg,fg,pg.bind(void 0,0),pg.bind(void 0,1),mg,hg,gg.bind(void 0,0),gg.bind(void 0,1),_g,vg,yg,bg,xg,Sg,Cg.bind(void 0,0),Cg.bind(void 0,1),void 0,wg.bind(void 0,0),wg.bind(void 0,1),Tg,void 0,Eg,void 0,void 0,Dg,Og,kg,Ag,jg,Mg,Ng,Pg,Fg,Ig,Lg,Rg,zg,Bg.bind(void 0,1),Vg,Hg,Ug,Wg,Gg,Kg,qg,Jg,Yg,Xg,Zg.bind(void 0,0),Zg.bind(void 0,1),Zg.bind(void 0,2),Zg.bind(void 0,3),void 0,void 0,void 0,void 0,Qg,Bg.bind(void 0,2),Bg.bind(void 0,3),$g.bind(void 0,1),$g.bind(void 0,2),$g.bind(void 0,3),e_,t_,void 0,void 0,n_,void 0,r_,i_,Zh,Zh,void 0,void 0,void 0,void 0,void 0,a_,o_.bind(void 0,0),o_.bind(void 0,1),s_,void 0,c_,l_,u_,d_,f_,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,p_.bind(void 0,1),p_.bind(void 0,2),p_.bind(void 0,3),p_.bind(void 0,4),p_.bind(void 0,5),p_.bind(void 0,6),p_.bind(void 0,7),p_.bind(void 0,8),m_.bind(void 0,1),m_.bind(void 0,2),m_.bind(void 0,3),m_.bind(void 0,4),m_.bind(void 0,5),m_.bind(void 0,6),m_.bind(void 0,7),m_.bind(void 0,8),Z.bind(void 0,0,0,0,0,0),Z.bind(void 0,0,0,0,0,1),Z.bind(void 0,0,0,0,0,2),Z.bind(void 0,0,0,0,0,3),Z.bind(void 0,0,0,0,1,0),Z.bind(void 0,0,0,0,1,1),Z.bind(void 0,0,0,0,1,2),Z.bind(void 0,0,0,0,1,3),Z.bind(void 0,0,0,1,0,0),Z.bind(void 0,0,0,1,0,1),Z.bind(void 0,0,0,1,0,2),Z.bind(void 0,0,0,1,0,3),Z.bind(void 0,0,0,1,1,0),Z.bind(void 0,0,0,1,1,1),Z.bind(void 0,0,0,1,1,2),Z.bind(void 0,0,0,1,1,3),Z.bind(void 0,0,1,0,0,0),Z.bind(void 0,0,1,0,0,1),Z.bind(void 0,0,1,0,0,2),Z.bind(void 0,0,1,0,0,3),Z.bind(void 0,0,1,0,1,0),Z.bind(void 0,0,1,0,1,1),Z.bind(void 0,0,1,0,1,2),Z.bind(void 0,0,1,0,1,3),Z.bind(void 0,0,1,1,0,0),Z.bind(void 0,0,1,1,0,1),Z.bind(void 0,0,1,1,0,2),Z.bind(void 0,0,1,1,0,3),Z.bind(void 0,0,1,1,1,0),Z.bind(void 0,0,1,1,1,1),Z.bind(void 0,0,1,1,1,2),Z.bind(void 0,0,1,1,1,3),Z.bind(void 0,1,0,0,0,0),Z.bind(void 0,1,0,0,0,1),Z.bind(void 0,1,0,0,0,2),Z.bind(void 0,1,0,0,0,3),Z.bind(void 0,1,0,0,1,0),Z.bind(void 0,1,0,0,1,1),Z.bind(void 0,1,0,0,1,2),Z.bind(void 0,1,0,0,1,3),Z.bind(void 0,1,0,1,0,0),Z.bind(void 0,1,0,1,0,1),Z.bind(void 0,1,0,1,0,2),Z.bind(void 0,1,0,1,0,3),Z.bind(void 0,1,0,1,1,0),Z.bind(void 0,1,0,1,1,1),Z.bind(void 0,1,0,1,1,2),Z.bind(void 0,1,0,1,1,3),Z.bind(void 0,1,1,0,0,0),Z.bind(void 0,1,1,0,0,1),Z.bind(void 0,1,1,0,0,2),Z.bind(void 0,1,1,0,0,3),Z.bind(void 0,1,1,0,1,0),Z.bind(void 0,1,1,0,1,1),Z.bind(void 0,1,1,0,1,2),Z.bind(void 0,1,1,0,1,3),Z.bind(void 0,1,1,1,0,0),Z.bind(void 0,1,1,1,0,1),Z.bind(void 0,1,1,1,0,2),Z.bind(void 0,1,1,1,0,3),Z.bind(void 0,1,1,1,1,0),Z.bind(void 0,1,1,1,1,1),Z.bind(void 0,1,1,1,1,2),Z.bind(void 0,1,1,1,1,3)];function h_(e){this.char=e,this.state={},this.activeState=null}function g_(e,t,n){this.contextName=n,this.startIndex=e,this.endOffset=t}function __(e,t,n){this.contextName=e,this.openRange=null,this.ranges=[],this.checkStart=t,this.checkEnd=n}function v_(e,t){this.context=e,this.index=t,this.length=e.length,this.current=e[t],this.backtrack=e.slice(0,t),this.lookahead=e.slice(t+1)}function y_(e){this.eventId=e,this.subscribers=[]}function b_(e){var t=this,n=[`start`,`end`,`next`,`newToken`,`contextStart`,`contextEnd`,`insertToken`,`removeToken`,`removeRange`,`replaceToken`,`replaceRange`,`composeRUD`,`updateContextsRanges`];n.forEach(function(e){Object.defineProperty(t.events,e,{value:new y_(e)})}),e&&n.forEach(function(n){var r=e[n];typeof r==`function`&&t.events[n].subscribe(r)}),[`insertToken`,`removeToken`,`removeRange`,`replaceToken`,`replaceRange`,`composeRUD`].forEach(function(e){t.events[e].subscribe(t.updateContextsRanges)})}function x_(e){this.tokens=[],this.registeredContexts={},this.contextCheckers=[],this.events={},this.registeredModifiers=[],b_.call(this,e)}h_.prototype.setState=function(e,t){return this.state[e]=t,this.activeState={key:e,value:this.state[e]},this.activeState},h_.prototype.getState=function(e){return this.state[e]||null},x_.prototype.inboundIndex=function(e){return e>=0&&e<this.tokens.length},x_.prototype.composeRUD=function(e){var t=this,n=!0,r=e.map(function(e){return t[e[0]].apply(t,e.slice(1).concat(n))}),i=function(e){return typeof e==`object`&&e.hasOwnProperty(`FAIL`)};if(r.every(i))return{FAIL:`composeRUD: one or more operations hasn't completed successfully`,report:r.filter(i)};this.dispatch(`composeRUD`,[r.filter(function(e){return!i(e)})])},x_.prototype.replaceRange=function(e,t,n,r){t=t===null?this.tokens.length:t;var i=n.every(function(e){return e instanceof h_});if(!isNaN(e)&&this.inboundIndex(e)&&i){var a=this.tokens.splice.apply(this.tokens,[e,t].concat(n));return r||this.dispatch(`replaceToken`,[e,t,n]),[a,n]}else return{FAIL:`replaceRange: invalid tokens or startIndex.`}},x_.prototype.replaceToken=function(e,t,n){if(!isNaN(e)&&this.inboundIndex(e)&&t instanceof h_){var r=this.tokens.splice(e,1,t);return n||this.dispatch(`replaceToken`,[e,t]),[r[0],t]}else return{FAIL:`replaceToken: invalid token or index.`}},x_.prototype.removeRange=function(e,t,n){t=isNaN(t)?this.tokens.length:t;var r=this.tokens.splice(e,t);return n||this.dispatch(`removeRange`,[r,e,t]),r},x_.prototype.removeToken=function(e,t){if(!isNaN(e)&&this.inboundIndex(e)){var n=this.tokens.splice(e,1);return t||this.dispatch(`removeToken`,[n,e]),n}else return{FAIL:`removeToken: invalid token index.`}},x_.prototype.insertToken=function(e,t,n){return e.every(function(e){return e instanceof h_})?(this.tokens.splice.apply(this.tokens,[t,0].concat(e)),n||this.dispatch(`insertToken`,[e,t]),e):{FAIL:`insertToken: invalid token(s).`}},x_.prototype.registerModifier=function(e,t,n){this.events.newToken.subscribe(function(r,i){var a=[r,i],o=t===null||t.apply(this,a)===!0,s=[r,i];if(o){var c=n.apply(this,s);r.setState(e,c)}}),this.registeredModifiers.push(e)},y_.prototype.subscribe=function(e){return typeof e==`function`?this.subscribers.push(e)-1:{FAIL:`invalid '`+this.eventId+`' event handler`}},y_.prototype.unsubscribe=function(e){this.subscribers.splice(e,1)},v_.prototype.setCurrentIndex=function(e){this.index=e,this.current=this.context[e],this.backtrack=this.context.slice(0,e),this.lookahead=this.context.slice(e+1)},v_.prototype.get=function(e){switch(!0){case e===0:return this.current;case e<0&&Math.abs(e)<=this.backtrack.length:return this.backtrack.slice(e)[0];case e>0&&e<=this.lookahead.length:return this.lookahead[e-1];default:return null}},x_.prototype.rangeToText=function(e){if(e instanceof g_)return this.getRangeTokens(e).map(function(e){return e.char}).join(``)},x_.prototype.getText=function(){return this.tokens.map(function(e){return e.char}).join(``)},x_.prototype.getContext=function(e){return this.registeredContexts[e]||null},x_.prototype.on=function(e,t){var n=this.events[e];return n?n.subscribe(t):null},x_.prototype.dispatch=function(e,t){var n=this,r=this.events[e];r instanceof y_&&r.subscribers.forEach(function(e){e.apply(n,t||[])})},x_.prototype.registerContextChecker=function(e,t,n){if(this.getContext(e))return{FAIL:`context name '`+e+`' is already registered.`};if(typeof t!=`function`)return{FAIL:`missing context start check.`};if(typeof n!=`function`)return{FAIL:`missing context end check.`};var r=new __(e,t,n);return this.registeredContexts[e]=r,this.contextCheckers.push(r),r},x_.prototype.getRangeTokens=function(e){var t=e.startIndex+e.endOffset;return[].concat(this.tokens.slice(e.startIndex,t))},x_.prototype.getContextRanges=function(e){var t=this.getContext(e);return t?t.ranges:{FAIL:`context checker '`+e+`' is not registered.`}},x_.prototype.resetContextsRanges=function(){var e=this.registeredContexts;for(var t in e)if(e.hasOwnProperty(t)){var n=e[t];n.ranges=[]}},x_.prototype.updateContextsRanges=function(){this.resetContextsRanges();for(var e=this.tokens.map(function(e){return e.char}),t=0;t<e.length;t++){var n=new v_(e,t);this.runContextCheck(n)}this.dispatch(`updateContextsRanges`,[this.registeredContexts])},x_.prototype.setEndOffset=function(e,t){var n=this.getContext(t).openRange.startIndex,r=new g_(n,e,t),i=this.getContext(t).ranges;return r.rangeId=t+`.`+i.length,i.push(r),this.getContext(t).openRange=null,r},x_.prototype.runContextCheck=function(e){var t=this,n=e.index;this.contextCheckers.forEach(function(r){var i=r.contextName,a=t.getContext(i).openRange;if(!a&&r.checkStart(e)&&(a=new g_(n,null,i),t.getContext(i).openRange=a,t.dispatch(`contextStart`,[i,n])),a&&r.checkEnd(e)){var o=n-a.startIndex+1,s=t.setEndOffset(o,i);t.dispatch(`contextEnd`,[i,s])}})},x_.prototype.tokenize=function(e){this.tokens=[],this.resetContextsRanges();var t=Array.from(e);this.dispatch(`start`);for(var n=0;n<t.length;n++){var r=t[n],i=new v_(t,n);this.dispatch(`next`,[i]),this.runContextCheck(i);var a=new h_(r);this.tokens.push(a),this.dispatch(`newToken`,[a,i])}return this.dispatch(`end`,[this.tokens]),this.tokens};function S_(e){return/[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(e)}function C_(e){return/[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(e)}function w_(e){return/[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(e)}function T_(e){return/[A-z]/.test(e)}function E_(e){return/\s/.test(e)}function D_(e){this.font=e,this.features={}}function O_(e){this.id=e.id,this.tag=e.tag,this.substitution=e.substitution}function k_(e,t){if(!e)return-1;switch(t.format){case 1:return t.glyphs.indexOf(e);case 2:for(var n=t.ranges,r=0;r<n.length;r++){var i=n[r];if(e>=i.start&&e<=i.end){var a=e-i.start;return i.index+a}}break;default:return-1}return-1}function A_(e,t){return k_(e,t.coverage)===-1?null:e+t.deltaGlyphId}function j_(e,t){var n=k_(e,t.coverage);return n===-1?null:t.substitute[n]}function M_(e,t){for(var n=[],r=0;r<e.length;r++){var i=e[r],a=t.current;a=Array.isArray(a)?a[0]:a;var o=k_(a,i);o!==-1&&n.push(o)}return n.length===e.length?n:-1}function N_(e,t){var n=t.inputCoverage.length+t.lookaheadCoverage.length+t.backtrackCoverage.length;if(e.context.length<n)return[];var r=M_(t.inputCoverage,e);if(r===-1)return[];var i=t.inputCoverage.length-1;if(e.lookahead.length<t.lookaheadCoverage.length)return[];for(var a=e.lookahead.slice(i);a.length&&w_(a[0].char);)a.shift();var o=new v_(a,0),s=M_(t.lookaheadCoverage,o),c=[].concat(e.backtrack);for(c.reverse();c.length&&w_(c[0].char);)c.shift();if(c.length<t.backtrackCoverage.length)return[];var l=new v_(c,0),u=M_(t.backtrackCoverage,l),d=r.length===t.inputCoverage.length&&s.length===t.lookaheadCoverage.length&&u.length===t.backtrackCoverage.length,f=[];if(d)for(var p=0;p<t.lookupRecords.length;p++)for(var m=t.lookupRecords[p].lookupListIndex,h=this.getLookupByIndex(m),g=0;g<h.subtables.length;g++){var _=h.subtables[g],v=this.getLookupMethod(h,_);if(this.getSubstitutionType(h,_)===`12`)for(var y=0;y<r.length;y++){var b=v(e.get(y));b&&f.push(b)}}return f}function P_(e,t){var n=e.current,r=k_(n,t.coverage);if(r===-1)return null;for(var i,a=t.ligatureSets[r],o=0;o<a.length;o++){i=a[o];for(var s=0;s<i.components.length&&e.lookahead[s]===i.components[s];s++)if(s===i.components.length-1)return i}return null}function F_(e,t){var n=k_(e,t.coverage);return n===-1?null:t.sequences[n]}D_.prototype.getDefaultScriptFeaturesIndexes=function(){for(var e=this.font.tables.gsub.scripts,t=0;t<e.length;t++){var n=e[t];if(n.tag===`DFLT`)return n.script.defaultLangSys.featureIndexes}return[]},D_.prototype.getScriptFeaturesIndexes=function(e){if(!this.font.tables.gsub)return[];if(!e)return this.getDefaultScriptFeaturesIndexes();for(var t=this.font.tables.gsub.scripts,n=0;n<t.length;n++){var r=t[n];if(r.tag===e&&r.script.defaultLangSys)return r.script.defaultLangSys.featureIndexes;var i=r.langSysRecords;if(i)for(var a=0;a<i.length;a++){var o=i[a];if(o.tag===e)return o.langSys.featureIndexes}}return this.getDefaultScriptFeaturesIndexes()},D_.prototype.mapTagsToFeatures=function(e,t){for(var n={},r=0;r<e.length;r++){var i=e[r].tag;n[i]=e[r].feature}this.features[t].tags=n},D_.prototype.getScriptFeatures=function(e){var t=this.features[e];if(this.features.hasOwnProperty(e))return t;var n=this.getScriptFeaturesIndexes(e);if(!n)return null;var r=this.font.tables.gsub;return t=n.map(function(e){return r.features[e]}),this.features[e]=t,this.mapTagsToFeatures(t,e),t},D_.prototype.getSubstitutionType=function(e,t){return e.lookupType.toString()+t.substFormat.toString()},D_.prototype.getLookupMethod=function(e,t){var n=this;switch(this.getSubstitutionType(e,t)){case`11`:return function(e){return A_.apply(n,[e,t])};case`12`:return function(e){return j_.apply(n,[e,t])};case`63`:return function(e){return N_.apply(n,[e,t])};case`41`:return function(e){return P_.apply(n,[e,t])};case`21`:return function(e){return F_.apply(n,[e,t])};default:throw Error(`lookupType: `+e.lookupType+` - substFormat: `+t.substFormat+` is not yet supported`)}},D_.prototype.lookupFeature=function(e){var t=e.contextParams,n=t.index,r=this.getFeature({tag:e.tag,script:e.script});if(!r)return Error(`font '`+this.font.names.fullName.en+`' doesn't support feature '`+e.tag+`' for script '`+e.script+`'.`);for(var i=this.getFeatureLookups(r),a=[].concat(t.context),o=0;o<i.length;o++)for(var s=i[o],c=this.getLookupSubtables(s),l=0;l<c.length;l++){var u=c[l],d=this.getSubstitutionType(s,u),f=this.getLookupMethod(s,u),p=void 0;switch(d){case`11`:p=f(t.current),p&&a.splice(n,1,new O_({id:11,tag:e.tag,substitution:p}));break;case`12`:p=f(t.current),p&&a.splice(n,1,new O_({id:12,tag:e.tag,substitution:p}));break;case`63`:p=f(t),Array.isArray(p)&&p.length&&a.splice(n,1,new O_({id:63,tag:e.tag,substitution:p}));break;case`41`:p=f(t),p&&a.splice(n,1,new O_({id:41,tag:e.tag,substitution:p}));break;case`21`:p=f(t.current),p&&a.splice(n,1,new O_({id:21,tag:e.tag,substitution:p}));break}t=new v_(a,n),!(Array.isArray(p)&&!p.length)&&(p=null)}return a.length?a:null},D_.prototype.supports=function(e){if(!e.script)return!1;this.getScriptFeatures(e.script);var t=this.features.hasOwnProperty(e.script);if(!e.tag)return t;var n=this.features[e.script].some(function(t){return t.tag===e.tag});return t&&n},D_.prototype.getLookupSubtables=function(e){return e.subtables||null},D_.prototype.getLookupByIndex=function(e){return this.font.tables.gsub.lookups[e]||null},D_.prototype.getFeatureLookups=function(e){return e.lookupListIndexes.map(this.getLookupByIndex.bind(this))},D_.prototype.getFeature=function(e){if(!this.font)return{FAIL:`No font was found`};this.features.hasOwnProperty(e.script)||this.getScriptFeatures(e.script);var t=this.features[e.script];return t?t.tags[e.tag]?this.features[e.script].tags[e.tag]:null:{FAIL:`No feature for script `+e.script}};function I_(e){var t=e.current,n=e.get(-1);return n===null&&S_(t)||!S_(n)&&S_(t)}function L_(e){var t=e.get(1);return t===null||!S_(t)}var R_={startCheck:I_,endCheck:L_};function z_(e){var t=e.current,n=e.get(-1);return(S_(t)||w_(t))&&!S_(n)}function B_(e){var t=e.get(1);switch(!0){case t===null:return!0;case!S_(t)&&!w_(t):var n=E_(t);if(!n)return!0;if(n){var r=!1;if(r=e.lookahead.some(function(e){return S_(e)||w_(e)}),!r)return!0}break;default:return!1}}var V_={startCheck:z_,endCheck:B_};function H_(e,t,n){t[n].setState(e.tag,e.substitution)}function U_(e,t,n){t[n].setState(e.tag,e.substitution)}function W_(e,t,n){e.substitution.forEach(function(r,i){t[n+i].setState(e.tag,r)})}function G_(e,t,n){var r=t[n];r.setState(e.tag,e.substitution.ligGlyph);for(var i=e.substitution.components.length,a=0;a<i;a++)r=t[n+a+1],r.setState(`deleted`,!0)}var K_={11:H_,12:U_,63:W_,41:G_};function q_(e,t,n){e instanceof O_&&K_[e.id]&&K_[e.id](e,t,n)}function J_(e){for(var t=[].concat(e.backtrack),n=t.length-1;n>=0;n--){var r=t[n],i=C_(r),a=w_(r);if(!i&&!a)return!0;if(i)return!1}return!1}function Y_(e){if(C_(e.current))return!1;for(var t=0;t<e.lookahead.length;t++){var n=e.lookahead[t];if(!w_(n))return!0}return!1}function X_(e){var t=this,n=`arab`,r=this.featuresTags[n],i=this.tokenizer.getRangeTokens(e);if(i.length!==1){var a=new v_(i.map(function(e){return e.getState(`glyphIndex`)}),0),o=new v_(i.map(function(e){return e.char}),0);i.forEach(function(e,s){if(!w_(e.char)){a.setCurrentIndex(s),o.setCurrentIndex(s);var c=0;J_(o)&&(c|=1),Y_(o)&&(c|=2);var l;switch(c){case 1:l=`fina`;break;case 2:l=`init`;break;case 3:l=`medi`;break}if(r.indexOf(l)!==-1){var u=t.query.lookupFeature({tag:l,script:n,contextParams:a});if(u instanceof Error)return console.info(u.message);u.forEach(function(e,t){e instanceof O_&&(q_(e,i,t),a.context[t]=e.substitution)})}}})}}function Z_(e,t){return new v_(e.map(function(e){return e.activeState.value}),t||0)}function Q_(e){var t=this,n=`arab`,r=this.tokenizer.getRangeTokens(e),i=Z_(r);i.context.forEach(function(e,a){i.setCurrentIndex(a);var o=t.query.lookupFeature({tag:`rlig`,script:n,contextParams:i});o.length&&(o.forEach(function(e){return q_(e,r,a)}),i=Z_(r))})}function $_(e){var t=e.current,n=e.get(-1);return n===null&&T_(t)||!T_(n)&&T_(t)}function ev(e){var t=e.get(1);return t===null||!T_(t)}var tv={startCheck:$_,endCheck:ev};function nv(e,t){return new v_(e.map(function(e){return e.activeState.value}),t||0)}function rv(e){var t=this,n=`latn`,r=this.tokenizer.getRangeTokens(e),i=nv(r);i.context.forEach(function(e,a){i.setCurrentIndex(a);var o=t.query.lookupFeature({tag:`liga`,script:n,contextParams:i});o.length&&(o.forEach(function(e){return q_(e,r,a)}),i=nv(r))})}function iv(e){this.baseDir=e||`ltr`,this.tokenizer=new x_,this.featuresTags={}}iv.prototype.setText=function(e){this.text=e},iv.prototype.contextChecks={latinWordCheck:tv,arabicWordCheck:R_,arabicSentenceCheck:V_};function av(e){var t=this.contextChecks[e+`Check`];return this.tokenizer.registerContextChecker(e,t.startCheck,t.endCheck)}function ov(){return av.call(this,`latinWord`),av.call(this,`arabicWord`),av.call(this,`arabicSentence`),this.tokenizer.tokenize(this.text)}function sv(){var e=this;this.tokenizer.getContextRanges(`arabicSentence`).forEach(function(t){var n=e.tokenizer.getRangeTokens(t);e.tokenizer.replaceRange(t.startIndex,t.endOffset,n.reverse())})}iv.prototype.registerFeatures=function(e,t){var n=this,r=t.filter(function(t){return n.query.supports({script:e,tag:t})});this.featuresTags.hasOwnProperty(e)?this.featuresTags[e]=this.featuresTags[e].concat(r):this.featuresTags[e]=r},iv.prototype.applyFeatures=function(e,t){if(!e)throw Error(`No valid font was provided to apply features`);this.query||=new D_(e);for(var n=0;n<t.length;n++){var r=t[n];this.query.supports({script:r.script})&&this.registerFeatures(r.script,r.tags)}},iv.prototype.registerModifier=function(e,t,n){this.tokenizer.registerModifier(e,t,n)};function cv(){if(this.tokenizer.registeredModifiers.indexOf(`glyphIndex`)===-1)throw Error(`glyphIndex modifier is required to apply arabic presentation features.`)}function lv(){var e=this;this.featuresTags.hasOwnProperty(`arab`)&&(cv.call(this),this.tokenizer.getContextRanges(`arabicWord`).forEach(function(t){X_.call(e,t)}))}function uv(){var e=this,t=`arab`;this.featuresTags.hasOwnProperty(t)&&this.featuresTags[t].indexOf(`rlig`)!==-1&&(cv.call(this),this.tokenizer.getContextRanges(`arabicWord`).forEach(function(t){Q_.call(e,t)}))}function dv(){var e=this,t=`latn`;this.featuresTags.hasOwnProperty(t)&&this.featuresTags[t].indexOf(`liga`)!==-1&&(cv.call(this),this.tokenizer.getContextRanges(`latinWord`).forEach(function(t){rv.call(e,t)}))}iv.prototype.checkContextReady=function(e){return!!this.tokenizer.getContext(e)},iv.prototype.applyFeaturesToContexts=function(){this.checkContextReady(`arabicWord`)&&(lv.call(this),uv.call(this)),this.checkContextReady(`latinWord`)&&dv.call(this),this.checkContextReady(`arabicSentence`)&&sv.call(this)},iv.prototype.processText=function(e){(!this.text||this.text!==e)&&(this.setText(e),ov.call(this),this.applyFeaturesToContexts())},iv.prototype.getBidiText=function(e){return this.processText(e),this.tokenizer.getText()},iv.prototype.getTextGlyphs=function(e){this.processText(e);for(var t=[],n=0;n<this.tokenizer.tokens.length;n++){var r=this.tokenizer.tokens[n];if(!r.state.deleted){var i=r.activeState.value;t.push(Array.isArray(i)?i[0]:i)}}return t};function fv(e){e||={},e.tables=e.tables||{},e.empty||(Km(e.familyName,`When creating a new Font object, familyName is required.`),Km(e.styleName,`When creating a new Font object, styleName is required.`),Km(e.unitsPerEm,`When creating a new Font object, unitsPerEm is required.`),Km(e.ascender,`When creating a new Font object, ascender is required.`),Km(e.descender<=0,`When creating a new Font object, negative descender value is required.`),this.names={fontFamily:{en:e.familyName||` `},fontSubfamily:{en:e.styleName||` `},fullName:{en:e.fullName||e.familyName+` `+e.styleName},postScriptName:{en:e.postScriptName||(e.familyName+e.styleName).replace(/\s/g,``)},designer:{en:e.designer||` `},designerURL:{en:e.designerURL||` `},manufacturer:{en:e.manufacturer||` `},manufacturerURL:{en:e.manufacturerURL||` `},license:{en:e.license||` `},licenseURL:{en:e.licenseURL||` `},version:{en:e.version||`Version 0.1`},description:{en:e.description||` `},copyright:{en:e.copyright||` `},trademark:{en:e.trademark||` `}},this.unitsPerEm=e.unitsPerEm||1e3,this.ascender=e.ascender,this.descender=e.descender,this.createdTimestamp=e.createdTimestamp,this.tables=Object.assign(e.tables,{os2:Object.assign({usWeightClass:e.weightClass||this.usWeightClasses.MEDIUM,usWidthClass:e.widthClass||this.usWidthClasses.MEDIUM,fsSelection:e.fsSelection||this.fsSelectionValues.REGULAR},e.tables.os2)})),this.supported=!0,this.glyphs=new Gf.GlyphSet(this,e.glyphs||[]),this.encoding=new kf(this),this.position=new Hm(this),this.substitution=new Um(this),this.tables=this.tables||{},this._push=null,this._hmtxTableData={},Object.defineProperty(this,"hinting",{get:function(){if(this._hinting)return this._hinting;if(this.outlinesFormat===`truetype`)return this._hinting=new sh(this)}})}fv.prototype.hasChar=function(e){return this.encoding.charToGlyphIndex(e)!==null},fv.prototype.charToGlyphIndex=function(e){return this.encoding.charToGlyphIndex(e)},fv.prototype.charToGlyph=function(e){var t=this.charToGlyphIndex(e),n=this.glyphs.get(t);return n||=this.glyphs.get(0),n},fv.prototype.updateFeatures=function(e){return this.defaultRenderOptions.features.map(function(t){return t.script===`latn`?{script:`latn`,tags:t.tags.filter(function(t){return e[t]})}:t})},fv.prototype.stringToGlyphs=function(e,t){var n=this,r=new iv;r.registerModifier(`glyphIndex`,null,function(e){return n.charToGlyphIndex(e.char)});var i=t?this.updateFeatures(t.features):this.defaultRenderOptions.features;r.applyFeatures(this,i);for(var a=r.getTextGlyphs(e),o=a.length,s=Array(o),c=this.glyphs.get(0),l=0;l<o;l+=1)s[l]=this.glyphs.get(a[l])||c;return s},fv.prototype.nameToGlyphIndex=function(e){return this.glyphNames.nameToGlyphIndex(e)},fv.prototype.nameToGlyph=function(e){var t=this.nameToGlyphIndex(e),n=this.glyphs.get(t);return n||=this.glyphs.get(0),n},fv.prototype.glyphIndexToName=function(e){return this.glyphNames.glyphIndexToName?this.glyphNames.glyphIndexToName(e):``},fv.prototype.getKerningValue=function(e,t){e=e.index||e,t=t.index||t;var n=this.position.defaultKerningTables;return n?this.position.getKerningValue(n,e,t):this.kerningPairs[e+`,`+t]||0},fv.prototype.defaultRenderOptions={kerning:!0,features:[{script:`arab`,tags:[`init`,`medi`,`fina`,`rlig`]},{script:`latn`,tags:[`liga`,`rlig`]}]},fv.prototype.forEachGlyph=function(e,t,n,r,i,a){t=t===void 0?0:t,n=n===void 0?0:n,r=r===void 0?72:r,i=Object.assign({},this.defaultRenderOptions,i);var o=1/this.unitsPerEm*r,s=this.stringToGlyphs(e,i),c;if(i.kerning){var l=i.script||this.position.getDefaultScriptName();c=this.position.getKerningTables(l,i.language)}for(var u=0;u<s.length;u+=1){var d=s[u];if(a.call(this,d,t,n,r,i),d.advanceWidth&&(t+=d.advanceWidth*o),i.kerning&&u<s.length-1){var f=c?this.position.getKerningValue(c,d.index,s[u+1].index):this.getKerningValue(d,s[u+1]);t+=f*o}i.letterSpacing?t+=i.letterSpacing*r:i.tracking&&(t+=i.tracking/1e3*r)}return t},fv.prototype.getPath=function(e,t,n,r,i){var a=new Id;return this.forEachGlyph(e,t,n,r,i,function(e,t,n,r){var o=e.getPath(t,n,r,i,this);a.extend(o)}),a},fv.prototype.getPaths=function(e,t,n,r,i){var a=[];return this.forEachGlyph(e,t,n,r,i,function(e,t,n,r){var o=e.getPath(t,n,r,i,this);a.push(o)}),a},fv.prototype.getAdvanceWidth=function(e,t,n){return this.forEachGlyph(e,0,0,t,n,function(){})},fv.prototype.draw=function(e,t,n,r,i,a){this.getPath(t,n,r,i,a).draw(e)},fv.prototype.drawPoints=function(e,t,n,r,i,a){this.forEachGlyph(t,n,r,i,a,function(t,n,r,i){t.drawPoints(e,n,r,i)})},fv.prototype.drawMetrics=function(e,t,n,r,i,a){this.forEachGlyph(t,n,r,i,a,function(t,n,r,i){t.drawMetrics(e,n,r,i)})},fv.prototype.getEnglishName=function(e){var t=this.names[e];if(t)return t.en},fv.prototype.validate=function(){var e=this;function t(t){var n=e.getEnglishName(t);n&&n.trim().length}t(`fontFamily`),t(`weightName`),t(`manufacturer`),t(`copyright`),t(`version`),this.unitsPerEm},fv.prototype.toTables=function(){return Lm.fontToTable(this)},fv.prototype.toBuffer=function(){return console.warn(`Font.toBuffer is deprecated. Use Font.toArrayBuffer instead.`),this.toArrayBuffer()},fv.prototype.toArrayBuffer=function(){for(var e=this.toTables().encode(),t=new ArrayBuffer(e.length),n=new Uint8Array(t),r=0;r<e.length;r++)n[r]=e[r];return t},fv.prototype.download=function(e){var t=this.getEnglishName(`fontFamily`),n=this.getEnglishName(`fontSubfamily`);e||=t.replace(/\s/g,``)+`-`+n+`.otf`;var r=this.toArrayBuffer();if(window.URL=window.URL||window.webkitURL,window.URL){var i=new DataView(r),a=new Blob([i],{type:`font/opentype`}),o=document.createElement(`a`);o.href=window.URL.createObjectURL(a),o.download=e;var s=document.createEvent(`MouseEvents`);s.initEvent(`click`,!0,!1),o.dispatchEvent(s)}else console.warn(`Font file could not be downloaded. Try using a different browser.`)},fv.prototype.fsSelectionValues={ITALIC:1,UNDERSCORE:2,NEGATIVE:4,OUTLINED:8,STRIKEOUT:16,BOLD:32,REGULAR:64,USER_TYPO_METRICS:128,WWS:256,OBLIQUE:512},fv.prototype.usWidthClasses={ULTRA_CONDENSED:1,EXTRA_CONDENSED:2,CONDENSED:3,SEMI_CONDENSED:4,MEDIUM:5,SEMI_EXPANDED:6,EXPANDED:7,EXTRA_EXPANDED:8,ULTRA_EXPANDED:9},fv.prototype.usWeightClasses={THIN:100,EXTRA_LIGHT:200,LIGHT:300,NORMAL:400,MEDIUM:500,SEMI_BOLD:600,BOLD:700,EXTRA_BOLD:800,BLACK:900};function pv(e,t){var n=JSON.stringify(e),r=256;for(var i in t){var a=parseInt(i);if(!(!a||a<256)){if(JSON.stringify(t[i])===n)return a;r<=a&&(r=a+1)}}return t[r]=e,r}function mv(e,t,n){var r=pv(t.name,n);return[{name:`tag_`+e,type:`TAG`,value:t.tag},{name:`minValue_`+e,type:`FIXED`,value:t.minValue<<16},{name:`defaultValue_`+e,type:`FIXED`,value:t.defaultValue<<16},{name:`maxValue_`+e,type:`FIXED`,value:t.maxValue<<16},{name:`flags_`+e,type:`USHORT`,value:0},{name:`nameID_`+e,type:`USHORT`,value:r}]}function hv(e,t,n){var r={},i=new X.Parser(e,t);return r.tag=i.parseTag(),r.minValue=i.parseFixed(),r.defaultValue=i.parseFixed(),r.maxValue=i.parseFixed(),i.skip(`uShort`,1),r.name=n[i.parseUShort()]||{},r}function gv(e,t,n,r){for(var i=pv(t.name,r),a=[{name:`nameID_`+e,type:`USHORT`,value:i},{name:`flags_`+e,type:`USHORT`,value:0}],o=0;o<n.length;++o){var s=n[o].tag;a.push({name:`axis_`+e+` `+s,type:`FIXED`,value:t.coordinates[s]<<16})}return a}function _v(e,t,n,r){var i={},a=new X.Parser(e,t);i.name=r[a.parseUShort()]||{},a.skip(`uShort`,1),i.coordinates={};for(var o=0;o<n.length;++o)i.coordinates[n[o].tag]=a.parseFixed();return i}function vv(e,t){var n=new J.Table(`fvar`,[{name:`version`,type:`ULONG`,value:65536},{name:`offsetToData`,type:`USHORT`,value:0},{name:`countSizePairs`,type:`USHORT`,value:2},{name:`axisCount`,type:`USHORT`,value:e.axes.length},{name:`axisSize`,type:`USHORT`,value:20},{name:`instanceCount`,type:`USHORT`,value:e.instances.length},{name:`instanceSize`,type:`USHORT`,value:4+e.axes.length*4}]);n.offsetToData=n.sizeOf();for(var r=0;r<e.axes.length;r++)n.fields=n.fields.concat(mv(r,e.axes[r],t));for(var i=0;i<e.instances.length;i++)n.fields=n.fields.concat(gv(i,e.instances[i],e.axes,t));return n}function yv(e,t,n){var r=new X.Parser(e,t),i=r.parseULong();G.argument(i===65536,`Unsupported fvar table version.`);var a=r.parseOffset16();r.skip(`uShort`,1);for(var o=r.parseUShort(),s=r.parseUShort(),c=r.parseUShort(),l=r.parseUShort(),u=[],d=0;d<o;d++)u.push(hv(e,t+a+d*s,n));for(var f=[],p=t+a+o*s,m=0;m<c;m++)f.push(_v(e,p+m*l,u,n));return{axes:u,instances:f}}var bv={make:vv,parse:yv},xv=function(){return{coverage:this.parsePointer(Y.coverage),attachPoints:this.parseList(Y.pointer(Y.uShortList))}},Sv=function(){var e=this.parseUShort();if(G.argument(e===1||e===2||e===3,`Unsupported CaretValue table version.`),e===1)return{coordinate:this.parseShort()};if(e===2)return{pointindex:this.parseShort()};if(e===3)return{coordinate:this.parseShort()}},Cv=function(){return this.parseList(Y.pointer(Sv))},wv=function(){return{coverage:this.parsePointer(Y.coverage),ligGlyphs:this.parseList(Y.pointer(Cv))}},Tv=function(){return this.parseUShort(),this.parseList(Y.pointer(Y.coverage))};function Ev(e,t){t||=0;var n=new Y(e,t),r=n.parseVersion(1);G.argument(r===1||r===1.2||r===1.3,`Unsupported GDEF table version.`);var i={version:r,classDef:n.parsePointer(Y.classDef),attachList:n.parsePointer(xv),ligCaretList:n.parsePointer(wv),markAttachClassDef:n.parsePointer(Y.classDef)};return r>=1.2&&(i.markGlyphSets=n.parsePointer(Tv)),i}var Dv={parse:Ev},Ov=Array(10);Ov[1]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{posFormat:1,coverage:this.parsePointer(Y.coverage),value:this.parseValueRecord()};if(t===2)return{posFormat:2,coverage:this.parsePointer(Y.coverage),values:this.parseValueRecordList()};G.assert(!1,`0x`+e.toString(16)+`: GPOS lookup type 1 format must be 1 or 2.`)},Ov[2]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();G.assert(t===1||t===2,`0x`+e.toString(16)+`: GPOS lookup type 2 format must be 1 or 2.`);var n=this.parsePointer(Y.coverage),r=this.parseUShort(),i=this.parseUShort();if(t===1)return{posFormat:t,coverage:n,valueFormat1:r,valueFormat2:i,pairSets:this.parseList(Y.pointer(Y.list(function(){return{secondGlyph:this.parseUShort(),value1:this.parseValueRecord(r),value2:this.parseValueRecord(i)}})))};if(t===2){var a=this.parsePointer(Y.classDef),o=this.parsePointer(Y.classDef),s=this.parseUShort(),c=this.parseUShort();return{posFormat:t,coverage:n,valueFormat1:r,valueFormat2:i,classDef1:a,classDef2:o,class1Count:s,class2Count:c,classRecords:this.parseList(s,Y.list(c,function(){return{value1:this.parseValueRecord(r),value2:this.parseValueRecord(i)}}))}}},Ov[3]=function(){return{error:`GPOS Lookup 3 not supported`}},Ov[4]=function(){return{error:`GPOS Lookup 4 not supported`}},Ov[5]=function(){return{error:`GPOS Lookup 5 not supported`}},Ov[6]=function(){return{error:`GPOS Lookup 6 not supported`}},Ov[7]=function(){return{error:`GPOS Lookup 7 not supported`}},Ov[8]=function(){return{error:`GPOS Lookup 8 not supported`}},Ov[9]=function(){return{error:`GPOS Lookup 9 not supported`}};function kv(e,t){t||=0;var n=new Y(e,t),r=n.parseVersion(1);return G.argument(r===1||r===1.1,`Unsupported GPOS table version `+r),r===1?{version:r,scripts:n.parseScriptList(),features:n.parseFeatureList(),lookups:n.parseLookupList(Ov)}:{version:r,scripts:n.parseScriptList(),features:n.parseFeatureList(),lookups:n.parseLookupList(Ov),variations:n.parseFeatureVariationsList()}}var Av=Array(10);function jv(e){return new J.Table(`GPOS`,[{name:`version`,type:`ULONG`,value:65536},{name:`scripts`,type:`TABLE`,value:new J.ScriptList(e.scripts)},{name:`features`,type:`TABLE`,value:new J.FeatureList(e.features)},{name:`lookups`,type:`TABLE`,value:new J.LookupList(e.lookups,Av)}])}var Mv={parse:kv,make:jv};function Nv(e){var t={};e.skip(`uShort`);var n=e.parseUShort();G.argument(n===0,`Unsupported kern sub-table version.`),e.skip(`uShort`,2);var r=e.parseUShort();e.skip(`uShort`,3);for(var i=0;i<r;i+=1){var a=e.parseUShort(),o=e.parseUShort(),s=e.parseShort();t[a+`,`+o]=s}return t}function Pv(e){var t={};e.skip(`uShort`),e.parseULong()>1&&console.warn(`Only the first kern subtable is supported.`),e.skip(`uLong`);var n=e.parseUShort()&255;if(e.skip(`uShort`),n===0){var r=e.parseUShort();e.skip(`uShort`,3);for(var i=0;i<r;i+=1){var a=e.parseUShort(),o=e.parseUShort(),s=e.parseShort();t[a+`,`+o]=s}}return t}function Fv(e,t){var n=new X.Parser(e,t),r=n.parseUShort();if(r===0)return Nv(n);if(r===1)return Pv(n);throw Error(`Unsupported kern table version (`+r+`).`)}var Iv={parse:Fv};function Lv(e,t,n,r){for(var i=new X.Parser(e,t),a=r?i.parseUShort:i.parseULong,o=[],s=0;s<n+1;s+=1){var c=a.call(i);r&&(c*=2),o.push(c)}return o}var Rv={parse:Lv};function zv(e,t){var n=new XMLHttpRequest;n.open(`get`,e,!0),n.responseType=`arraybuffer`,n.onload=function(){return n.response?t(null,n.response):t(`Font could not be loaded: `+n.statusText)},n.onerror=function(){t(`Font could not be loaded`)},n.send()}function Bv(e,t){for(var n=[],r=12,i=0;i<t;i+=1){var a=X.getTag(e,r),o=X.getULong(e,r+4),s=X.getULong(e,r+8),c=X.getULong(e,r+12);n.push({tag:a,checksum:o,offset:s,length:c,compression:!1}),r+=16}return n}function Vv(e,t){for(var n=[],r=44,i=0;i<t;i+=1){var a=X.getTag(e,r),o=X.getULong(e,r+4),s=X.getULong(e,r+8),c=X.getULong(e,r+12),l=void 0;l=s<c?`WOFF`:!1,n.push({tag:a,offset:o,compression:l,compressedLength:s,length:c}),r+=20}return n}function Hv(e,t){if(t.compression===`WOFF`){var n=new Uint8Array(e.buffer,t.offset+2,t.compressedLength-2),r=new Uint8Array(t.length);if(Nd(n,r),r.byteLength!==t.length)throw Error(`Decompression error: `+t.tag+` decompressed length doesn't match recorded length`);return{data:new DataView(r.buffer,0),offset:0}}else return{data:e,offset:t.offset}}function Uv(e,t){t??={};var n,r,i=new fv({empty:!0}),a=new DataView(e,0),o,s=[],c=X.getTag(a,0);if(c===`\0\0\0`||c===`true`||c===`typ1`)i.outlinesFormat=`truetype`,o=X.getUShort(a,4),s=Bv(a,o);else if(c===`OTTO`)i.outlinesFormat=`cff`,o=X.getUShort(a,4),s=Bv(a,o);else if(c===`wOFF`){var l=X.getTag(a,4);if(l===`\0\0\0`)i.outlinesFormat=`truetype`;else if(l===`OTTO`)i.outlinesFormat=`cff`;else throw Error(`Unsupported OpenType flavor `+c);o=X.getUShort(a,12),s=Vv(a,o)}else throw Error(`Unsupported OpenType signature `+c);for(var u,d,f,p,m,h,g,_,v,y,b,x,S=0;S<o;S+=1){var C=s[S],w=void 0;switch(C.tag){case`cmap`:w=Hv(a,C),i.tables.cmap=wf.parse(w.data,w.offset),i.encoding=new Af(i.tables.cmap);break;case`cvt `:w=Hv(a,C),x=new X.Parser(w.data,w.offset),i.tables.cvt=x.parseShortList(C.length/2);break;case`fvar`:d=C;break;case`fpgm`:w=Hv(a,C),x=new X.Parser(w.data,w.offset),i.tables.fpgm=x.parseByteList(C.length);break;case`head`:w=Hv(a,C),i.tables.head=Ap.parse(w.data,w.offset),i.unitsPerEm=i.tables.head.unitsPerEm,n=i.tables.head.indexToLocFormat;break;case`hhea`:w=Hv(a,C),i.tables.hhea=Np.parse(w.data,w.offset),i.ascender=i.tables.hhea.ascender,i.descender=i.tables.hhea.descender,i.numberOfHMetrics=i.tables.hhea.numberOfHMetrics;break;case`hmtx`:g=C;break;case`ltag`:w=Hv(a,C),r=Vp.parse(w.data,w.offset);break;case`COLR`:w=Hv(a,C),i.tables.colr=Em.parse(w.data,w.offset);break;case`CPAL`:w=Hv(a,C),i.tables.cpal=km.parse(w.data,w.offset);break;case`maxp`:w=Hv(a,C),i.tables.maxp=Wp.parse(w.data,w.offset),i.numGlyphs=i.tables.maxp.numGlyphs;break;case`name`:y=C;break;case`OS/2`:w=Hv(a,C),i.tables.os2=dm.parse(w.data,w.offset);break;case`post`:w=Hv(a,C),i.tables.post=mm.parse(w.data,w.offset),i.glyphNames=new Mf(i.tables.post);break;case`prep`:w=Hv(a,C),x=new X.Parser(w.data,w.offset),i.tables.prep=x.parseByteList(C.length);break;case`glyf`:f=C;break;case`loca`:v=C;break;case`CFF `:u=C;break;case`kern`:_=C;break;case`GDEF`:p=C;break;case`GPOS`:m=C;break;case`GSUB`:h=C;break;case`meta`:b=C;break}}var T=Hv(a,y);if(i.tables.name=om.parse(T.data,T.offset,r),i.names=i.tables.name,f&&v){var E=n===0,D=Hv(a,v),O=Rv.parse(D.data,D.offset,i.numGlyphs,E),k=Hv(a,f);i.glyphs=nh.parse(k.data,k.offset,O,i,t)}else if(u){var A=Hv(a,u);Dp.parse(A.data,A.offset,i,t)}else throw Error(`Font doesn't contain TrueType or CFF outlines.`);var j=Hv(a,g);if(Rp.parse(i,j.data,j.offset,i.numberOfHMetrics,i.numGlyphs,i.glyphs,t),Ff(i,t),_){var M=Hv(a,_);i.kerningPairs=Iv.parse(M.data,M.offset)}else i.kerningPairs={};if(p){var N=Hv(a,p);i.tables.gdef=Dv.parse(N.data,N.offset)}if(m){var P=Hv(a,m);i.tables.gpos=Mv.parse(P.data,P.offset),i.position.init()}if(h){var F=Hv(a,h);i.tables.gsub=bm.parse(F.data,F.offset)}if(d){var I=Hv(a,d);i.tables.fvar=bv.parse(I.data,I.offset,i.names)}if(b){var ee=Hv(a,b);i.tables.meta=Cm.parse(ee.data,ee.offset),i.metas=i.tables.meta}return i}function Wv(e,t,n){return n??={},new Promise(function(r,i){zv(e,function(e,a){if(e){if(t)return t(e);i(e)}var o;try{o=Uv(a,n)}catch(e){if(t)return t(e,null);i(e)}if(t)return t(null,o);r(o)})})}var Gv=Object.freeze({__proto__:null,Font:fv,Glyph:zf,Path:Id,BoundingBox:Fd,_parse:X,parse:Uv,load:Wv}),Kv=class extends $a{constructor(e){super(e),this.reversed=!1}load(e,t,n,r){let i=this,a=new no(this.manager);a.setPath(this.path),a.setResponseType(`arraybuffer`),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(n){try{t(i.parse(n))}catch(t){r?r(t):console.error(t),i.manager.itemError(e)}},n,r)}parse(e){function t(e,t){let r=Math.round,i={},a=1e5/((e.unitsPerEm||2048)*72),o=e.encoding.cmap.glyphIndexMap,s=Object.keys(o);for(let c=0;c<s.length;c++){let l=s[c],u=e.glyphs.glyphs[o[l]];if(l!==void 0){let e={ha:r(u.advanceWidth*a),x_min:r(u.xMin*a),x_max:r(u.xMax*a),o:``};t&&(u.path.commands=n(u.path.commands)),u.path.commands.forEach(function(t){t.type.toLowerCase()===`c`&&(t.type=`b`),e.o+=t.type.toLowerCase()+` `,t.x!==void 0&&t.y!==void 0&&(e.o+=r(t.x*a)+` `+r(t.y*a)+` `),t.x1!==void 0&&t.y1!==void 0&&(e.o+=r(t.x1*a)+` `+r(t.y1*a)+` `),t.x2!==void 0&&t.y2!==void 0&&(e.o+=r(t.x2*a)+` `+r(t.y2*a)+` `)}),Array.isArray(u.unicodes)&&u.unicodes.length>0?u.unicodes.forEach(function(t){i[String.fromCodePoint(t)]=e}):i[String.fromCodePoint(u.unicode)]=e}}return{glyphs:i,familyName:e.getEnglishName(`fullName`),ascender:r(e.ascender*a),descender:r(e.descender*a),underlinePosition:e.tables.post.underlinePosition,underlineThickness:e.tables.post.underlineThickness,boundingBox:{xMin:e.tables.head.xMin,xMax:e.tables.head.xMax,yMin:e.tables.head.yMin,yMax:e.tables.head.yMax},resolution:1e3,original_font_information:e.tables.name}}function n(e){let t=[],n;e.forEach(function(e){e.type.toLowerCase()===`m`?(n=[e],t.push(n)):e.type.toLowerCase()!==`z`&&n.push(e)});let r=[];return t.forEach(function(e){let t={type:`m`,x:e[e.length-1].x,y:e[e.length-1].y};r.push(t);for(let t=e.length-1;t>0;t--){let n=e[t],i={type:n.type};n.x2!==void 0&&n.y2!==void 0?(i.x1=n.x2,i.y1=n.y2,i.x2=n.x1,i.y2=n.y1):n.x1!==void 0&&n.y1!==void 0&&(i.x1=n.x1,i.y1=n.y1),i.x=e[t-1].x,i.y=e[t-1].y,r.push(i)}}),r}return t(Gv.parse(e),this.reversed)}},qv=class e extends va{constructor(e,t={}){let n=t.font;if(n===void 0)super();else{let r=n.generateShapes(e,t.size,t.direction);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type=`TextGeometry`}toJSON(){return super.toJSON()}static fromJSON(t){let n=t.options;return n.font=new od(n.font.data),new e(n.text,n)}};function Jv(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function Yv(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var Xv={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},Zv={duration:.5,overwrite:!1,delay:0},Qv,$v,ey,ty=1e8,ny=1/ty,ry=Math.PI*2,iy=ry/4,ay=0,oy=Math.sqrt,sy=Math.cos,cy=Math.sin,ly=function(e){return typeof e==`string`},uy=function(e){return typeof e==`function`},dy=function(e){return typeof e==`number`},fy=function(e){return e===void 0},py=function(e){return typeof e==`object`},my=function(e){return e!==!1},hy=function(){return typeof window<`u`},gy=function(e){return uy(e)||ly(e)},_y=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},vy=Array.isArray,yy=/random\([^)]+\)/g,by=/,\s*/g,xy=/(?:-?\.?\d|\.)+/gi,Sy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Cy=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,wy=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ty=/[+-]=-?[.\d]+/,Ey=/[^,'"\[\]\s]+/gi,Dy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Oy,ky,Ay,jy,My={},Ny={},Py,Fy=function(e){return(Ny=pb(e,My))&&MS},Iy=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},Ly=function(e,t){return!t&&console.warn(e)},Ry=function(e,t){return e&&(My[e]=t)&&Ny&&(Ny[e]=t)||My},zy=function(){return 0},By={suppressEvents:!0,isStart:!0,kill:!1},Vy={suppressEvents:!0,kill:!1},Hy={suppressEvents:!0},Uy={},Wy=[],Gy={},Ky,qy={},Jy={},Yy=30,Xy=[],Zy=``,Qy=function(e){var t=e[0],n,r;if(py(t)||uy(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Xy.length;r--&&!Xy[r].targetTest(t););n=Xy[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Hx(e[r],n)))||e.splice(r,1);return e},$y=function(e){return e._gsap||Qy(Xb(e))[0]._gsap},eb=function(e,t,n){return(n=e[t])&&uy(n)?e[t]():fy(n)&&e.getAttribute&&e.getAttribute(t)||n},tb=function(e,t){return(e=e.split(`,`)).forEach(t)||e},nb=function(e){return Math.round(e*1e5)/1e5||0},rb=function(e){return Math.round(e*1e7)/1e7||0},ib=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},ab=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},ob=function(){var e=Wy.length,t=Wy.slice(0),n,r;for(Gy={},Wy.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},sb=function(e){return!!(e._initted||e._startAt||e.add)},cb=function(e,t,n,r){Wy.length&&!$v&&ob(),e.render(t,n,r||!!($v&&t<0&&sb(e))),Wy.length&&!$v&&ob()},lb=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(Ey).length<2?t:ly(e)?e.trim():e},ub=function(e){return e},db=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},fb=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},pb=function(e,t){for(var n in t)e[n]=t[n];return e},mb=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=py(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},hb=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},gb=function(e){var t=e.parent||Oy,n=e.keyframes?fb(vy(e.keyframes)):db;if(my(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},_b=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},vb=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},yb=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},bb=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},xb=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Sb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Cb=function(e,t,n,r){return e._startAt&&($v?e._startAt.revert(Vy):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},wb=function e(t){return!t||t._ts&&e(t.parent)},Tb=function(e){return e._repeat?Eb(e._tTime,e=e.duration()+e._rDelay)*e:0},Eb=function(e,t){var n=Math.floor(e=rb(e/t));return e&&n===e?n-1:n},Db=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ob=function(e){return e._end=rb(e._start+(e._tDur/Math.abs(e._ts||e._rts||ny)||0))},kb=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=rb(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ob(e),n._dirty||xb(n,e)),e},Ab=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Db(e.rawTime(),t),(!t._dur||Wb(0,t.totalDuration(),n)-t._tTime>ny)&&t.render(n,!0)),xb(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ny}},jb=function(e,t,n,r){return t.parent&&bb(t),t._start=rb((dy(n)?n:n||e!==Oy?Vb(e,n,t):e._time)+t._delay),t._end=rb(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),vb(e,t,`_first`,`_last`,e._sort?`_start`:0),Fb(t)||(e._recent=t),r||Ab(e,t),e._ts<0&&kb(e,e._tTime),e},Mb=function(e,t){return(My.ScrollTrigger||Iy(`scrollTrigger`,t))&&My.ScrollTrigger.create(t,e)},Nb=function(e,t,n,r,i){if(Zx(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!$v&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ky!==Ox.frame)return Wy.push(e),e._lazy=[i,r],1},Pb=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},Fb=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},Ib=function(e,t,n,r){var i=e.ratio,a=t<0||!t&&(!e._start&&Pb(e)&&!(!e._initted&&Fb(e))||(e._ts<0||e._dp._ts<0)&&!Fb(e))?0:1,o=e._rDelay,s=0,c,l,u;if(o&&e._repeat&&(s=Wb(0,e._tDur,t),l=Eb(s,o),e._yoyo&&l&1&&(a=1-a),l!==Eb(e._tTime,o)&&(i=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==i||$v||r||e._zTime===ny||!t&&e._zTime){if(!e._initted&&Nb(e,t,r,n,s))return;for(u=e._zTime,e._zTime=t||(n?ny:0),n||=t&&!u,e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=s,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Cb(e,t,n,!0),e._onUpdate&&!n&&px(e,`onUpdate`),s&&e._repeat&&!n&&e.parent&&px(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&bb(e,1),!n&&!$v&&(px(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||=t},Lb=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},Rb=function(e,t,n,r){var i=e._repeat,a=rb(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:rb(a*(i+1)+e._rDelay*i):a,o>0&&!r&&kb(e,e._tTime=e._tDur*o),e.parent&&Ob(e),n||xb(e.parent,e),e},zb=function(e){return e instanceof Wx?xb(e):Rb(e,e._dur)},Bb={_start:0,endTime:zy,totalDuration:zy},Vb=function e(t,n,r){var i=t.labels,a=t._recent||Bb,o=t.duration()>=ty?a.endTime(!1):t._dur,s,c,l;return ly(n)&&(isNaN(n)||n in i)?(c=n.charAt(0),l=n.substr(-1)===`%`,s=n.indexOf(`=`),c===`<`||c===`>`?(s>=0&&(n=n.replace(/=/,``)),(c===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(l?(s<0?a:r).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(c=parseFloat(n.charAt(s-1)+n.substr(s+1)),l&&r&&(c=c/100*(vy(r)?r[0]:r).totalDuration()),s>1?e(t,n.substr(0,s-1),r)+c:o+c)):n==null?o:+n},Hb=function(e,t,n){var r=dy(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=my(s.vars.inherit)&&s.parent;a.immediateRender=my(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new iS(t[0],a,t[i+1])},Ub=function(e,t){return e||e===0?t(e):t},Wb=function(e,t,n){return n<e?e:n>t?t:n},Gb=function(e,t){return!ly(e)||!(t=Dy.exec(e))?``:t[1]},Kb=function(e,t,n){return Ub(n,function(n){return Wb(e,t,n)})},qb=[].slice,Jb=function(e,t){return e&&py(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&py(e[0]))&&!e.nodeType&&e!==ky},Yb=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return ly(e)&&!t||Jb(e,1)?(r=n).push.apply(r,Xb(e)):n.push(e)})||n},Xb=function(e,t,n){return ey&&!t&&ey.selector?ey.selector(e):ly(e)&&!n&&(Ay||!kx())?qb.call((t||jy).querySelectorAll(e),0):vy(e)?Yb(e,n):Jb(e)?qb.call(e,0):e?[e]:[]},Zb=function(e){return e=Xb(e)[0]||Ly(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return Xb(t,n.querySelectorAll?n:n===e?Ly(`Invalid scope`)||jy.createElement(`div`):e)}},Qb=function(e){return e.sort(function(){return .5-Math.random()})},$b=function(e){if(uy(e))return e;var t=py(e)?e:{each:e},n=Lx(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,c=t.axis,l=r,u=r;return ly(r)?l=u={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(l=r[0],u=r[1]),function(e,o,d){var f=(d||t).length,p=a[f],m,h,g,_,v,y,b,x,S;if(!p){if(S=t.grid===`auto`?0:(t.grid||[1,ty])[1],!S){for(b=-ty;b<(b=d[S++].getBoundingClientRect().left)&&S<f;);S<f&&S--}for(p=a[f]=[],m=s?Math.min(S,f)*l-.5:r%S,h=S===ty?0:s?f*u/S-.5:r/S|0,b=0,x=ty,y=0;y<f;y++)g=y%S-m,_=h-(y/S|0),p[y]=v=c?Math.abs(c===`y`?_:g):oy(g*g+_*_),v>b&&(b=v),v<x&&(x=v);r===`random`&&Qb(p),p.max=b-x,p.min=x,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(S>f?f-1:c?c===`y`?f/S:S:Math.max(S,f/S))||0)*(r===`edges`?-1:1),p.b=f<0?i-f:i,p.u=Gb(t.amount||t.each)||0,n=n&&f<0?Ix(n):n}return f=(p[e]-p.min)/p.max||0,rb(p.b+(n?n(f):f)*p.v)+p.u}},ex=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=rb(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(dy(n)?0:Gb(n))}},tx=function(e,t){var n=vy(e),r,i;return!n&&py(e)&&(r=n=e.radius||ty,e.values?(e=Xb(e.values),(i=!dy(e[0]))&&(r*=r)):e=ex(e.increment)),Ub(t,n?uy(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=ty,s=0,c=e.length,l,u;c--;)i?(l=e[c].x-n,u=e[c].y-a,l=l*l+u*u):l=Math.abs(e[c]-n),l<o&&(o=l,s=c);return s=!r||o<=r?e[s]:t,i||s===t||dy(t)?s:s+Gb(t)}:ex(e))},nx=function(e,t,n,r){return Ub(vy(e)?!t:n===!0?!!(n=0):!r,function(){return vy(e)?e[~~(Math.random()*e.length)]:(n||=1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},rx=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},ix=function(e,t){return function(n){return e(parseFloat(n))+(t||Gb(n))}},ax=function(e,t,n){return ux(e,t,0,1,n)},ox=function(e,t,n){return Ub(n,function(n){return e[~~t(n)]})},sx=function e(t,n,r){var i=n-t;return vy(t)?ox(t,e(0,t.length),n):Ub(r,function(e){return(i+(e-t)%i)%i+t})},cx=function e(t,n,r){var i=n-t,a=i*2;return vy(t)?ox(t,e(0,t.length-1),n):Ub(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},lx=function(e){return e.replace(yy,function(e){var t=e.indexOf(`[`)+1,n=e.substring(t||7,t?e.indexOf(`]`):e.length-1).split(by);return nx(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},ux=function(e,t,n,r,i){var a=t-e,o=r-n;return Ub(i,function(t){return n+((t-e)/a*o||0)})},dx=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=ly(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(vy(t)&&!vy(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=pb(vy(t)?[]:{},t));if(!u){for(c in n)Kx.call(s,t,c,`get`,n[c]);a=function(e){return pS(e,s)||(o?t.p:t)}}}return Ub(r,a)},fx=function(e,t,n){var r=e.labels,i=ty,a,o,s;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(s=a,i=o);return s},px=function(e,t,n){var r=e.vars,i=r[t],a=ey,o=e._ctx,s,c,l;if(i)return s=r[t+`Params`],c=r.callbackScope||e,n&&Wy.length&&ob(),o&&(ey=o),l=s?i.apply(c,s):i.call(c),ey=a,l},mx=function(e){return bb(e),e.scrollTrigger&&e.scrollTrigger.kill(!!$v),e.progress()<1&&px(e,`onInterrupt`),e},hx,gx=[],_x=function(e){if(e)if(e=!e.name&&e.default||e,hy()||e.headless){var t=e.name,n=uy(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:zy,render:pS,add:Kx,kill:hS,modifier:mS,rawVars:0},a={targetTest:0,get:0,getSetter:lS,aliases:{},register:0};if(kx(),e!==r){if(qy[t])return;db(r,db(hb(e,i),a)),pb(r.prototype,pb(i,hb(e,a))),qy[r.prop=t]=r,e.targetTest&&(Xy.push(r),Uy[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}Ry(t,r),e.register&&e.register(MS,r,vS)}else gx.push(e)},vx=255,yx={aqua:[0,vx,vx],lime:[0,vx,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,vx],navy:[0,0,128],white:[vx,vx,vx],olive:[128,128,0],yellow:[vx,vx,0],orange:[vx,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[vx,0,0],pink:[vx,192,203],cyan:[0,vx,vx],transparent:[vx,vx,vx,0]},bx=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*vx+.5|0},xx=function(e,t,n){var r=e?dy(e)?[e>>16,e>>8&vx,e&vx]:0:yx.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),yx[e])r=yx[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&vx,r&vx,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&vx,e&vx]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(xy),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=bx(s+1/3,i,a),r[1]=bx(s,i,a),r[2]=bx(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(Sy),n&&r.length<4&&(r[3]=1),r}else r=e.match(xy)||yx.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/vx,a=r[1]/vx,o=r[2]/vx,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},Sx=function(e){var t=[],n=[],r=-1;return e.split(wx).forEach(function(e){var i=e.match(Cy)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},Cx=function(e,t,n){var r=``,i=(e+r).match(wx),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=xx(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=Sx(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(wx,`1`).split(Cy),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(wx),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},wx=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in yx)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),Tx=/hsl[a]?\(/,Ex=function(e){var t=e.join(` `),n;if(wx.lastIndex=0,wx.test(t))return n=Tx.test(t),e[1]=Cx(e[1],n),e[0]=Cx(e[0],n,Sx(e[1])),!0},Dx,Ox=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?4:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){Py&&(!Ay&&hy()&&(ky=Ay=window,jy=ky.document||{},My.gsap=MS,(ky.gsapVersions||=[]).push(MS.version),Fy(Ny||ky.GreenSockGlobals||!ky.gsap&&ky||{}),gx.forEach(_x)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},Dx=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Dx=0,l=zy},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),kx(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),kx=function(){return!Dx&&Ox.wake()},Ax={},jx=/^[\d.\-M][\d.\-,\s]/,Mx=/["']/g,Nx=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(Mx,``).trim():+c,r=s.substr(o+1).trim();return t},Px=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},Fx=function(e){var t=(e+``).split(`(`),n=Ax[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[Nx(t[1])]:Px(e).split(`,`).map(lb)):Ax._CE&&jx.test(e)?Ax._CE(``,e):n},Ix=function(e){return function(t){return 1-e(1-t)}},Lx=function(e,t){return e&&(uy(e)?e:Ax[e]||Fx(e))||t},Rx=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return tb(e,function(e){for(var t in Ax[e]=My[e]=i,Ax[a=e.toLowerCase()]=n,i)Ax[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=Ax[e+`.`+t]=i[t]}),i},zx=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Bx=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/ry*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*cy((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:zx(s);return a=ry/a,c.config=function(n,r){return e(t,n,r)},c},Vx=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:zx(r);return i.config=function(n){return e(t,n)},i};tb(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;Rx(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),Ax.Linear.easeNone=Ax.none=Ax.Linear.easeIn,Rx(`Elastic`,Bx(`in`),Bx(`out`),Bx()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};Rx(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),Rx(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),Rx(`Circ`,function(e){return-(oy(1-e*e)-1)}),Rx(`Sine`,function(e){return e===1?1:-sy(e*iy)+1}),Rx(`Back`,Vx(`in`),Vx(`out`),Vx()),Ax.SteppedEase=Ax.steps=My.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-ny;return function(e){return((r*Wb(0,a,e)|0)+i)*n}}},Zv.ease=Ax[`quad.out`],tb(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return Zy+=e+`,`+e+`Params,`});var Hx=function(e,t){this.id=ay++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:eb,this.set=t?t.getSetter:lS},Ux=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Rb(this,+e.duration,1,1),this.data=e.data,ey&&(this._ctx=ey,ey.data.push(this)),Dx||Ox.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,Rb(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(kx(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(kb(this,e),!n._dp||n.parent||Ab(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&jb(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===ny||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),cb(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+Tb(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+Tb(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?Eb(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-ny?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?Db(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||e===-ny?0:this._rts,this.totalTime(Wb(-Math.abs(this._delay),this.totalDuration(),n),t!==!1),Ob(this),Sb(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(kx(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ny&&(this._tTime-=ny)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=rb(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&jb(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(my(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Db(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=Hy);var t=$v;return $v=e,sb(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),$v=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,zb(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,zb(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(Vb(this,e),my(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,my(t)),this._dur||(this._zTime=-ny),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-ny:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ny,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-ny)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=uy(e)?e:ub,a=function(){var e=t.then;t.then=null,n&&n(),uy(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){mx(this)},e}();db(Ux.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ny,_prom:0,_ps:!1,_rts:1});var Wx=function(e){Yv(t,e);function t(t,n){var r;return t===void 0&&(t={}),r=e.call(this,t)||this,r.labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=my(t.sortChildren),Oy&&jb(t.parent||Oy,Jv(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&Mb(Jv(r),t.scrollTrigger),r}var n=t.prototype;return n.to=function(e,t,n){return Hb(0,arguments,this),this},n.from=function(e,t,n){return Hb(1,arguments,this),this},n.fromTo=function(e,t,n,r){return Hb(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,gb(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new iS(e,t,Vb(this,n),1),this},n.call=function(e,t,n){return jb(this,iS.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new iS(e,n,Vb(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,gb(n).immediateRender=my(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,gb(r).immediateRender=my(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,a=this._dur,o=e<=0?0:rb(e),s=this._zTime<0!=e<0&&(this._initted||!a),c,l,u,d,f,p,m,h,g,_,v,y;if(this!==Oy&&o>i&&e>=0&&(o=i),o!==this._tTime||n||s){if(r!==this._time&&a&&(o+=this._time-r,e+=this._time-r),c=o,g=this._start,h=this._ts,p=!h,s&&(a||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(v=this._yoyo,f=a+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(f*100+e,t,n);if(c=rb(o%f),o===i?(d=this._repeat,c=a):(_=rb(o/f),d=~~_,d&&d===_&&(c=a,d--),c>a&&(c=a)),_=Eb(this._tTime,f),!r&&this._tTime&&_!==d&&this._tTime-_*f-this._dur<=0&&(_=d),v&&d&1&&(c=a-c,y=1),d!==_&&!this._lock){var b=v&&_&1,x=b===(v&&d&1);if(d<_&&(b=!b),r=b?0:o%a?a:o,this._lock=1,this.render(r||(y?0:rb(d*f)),t,!a)._lock=0,this._tTime=o,!t&&this.parent&&px(this,`onRepeat`),this.vars.repeatRefresh&&!y&&(this.invalidate()._lock=1,_=d),r&&r!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(a=this._dur,i=this._tDur,x&&(this._lock=2,r=b?a:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!y&&this.invalidate()),this._lock=0,!this._ts&&!p))return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=Lb(this,rb(r),rb(c)),m&&(o-=c-(c=m._start))),this._tTime=o,this._time=c,this._act=!!h,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&o&&a&&!t&&!_&&(px(this,`onStart`),this._tTime!==o))return this;if(c>=r&&e>=0)for(l=this._first;l;){if(u=l._next,(l._act||c>=l._start)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(c-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(c-l._start)*l._ts,t,n),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=-ny);break}}l=u}else{l=this._last;for(var S=e<0?e:c;l;){if(u=l._prev,(l._act||S<=l._end)&&l._ts&&m!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(S-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(S-l._start)*l._ts,t,n||$v&&sb(l)),c!==this._time||!this._ts&&!p){m=0,u&&(o+=this._zTime=S?-ny:ny);break}}l=u}}if(m&&!t&&(this.pause(),m.render(c>=r?0:-ny)._zTime=c>=r?1:-1,this._ts))return this._start=g,Ob(this),this.render(e,t,n);this._onUpdate&&!t&&px(this,`onUpdate`,!0),(o===i&&this._tTime>=this.totalDuration()||!o&&r)&&(g===this._start||Math.abs(h)!==Math.abs(this._ts))&&(this._lock||((e||!a)&&(o===i&&this._ts>0||!o&&this._ts<0)&&bb(this,1),!t&&!(e<0&&!r)&&(o||r||!i)&&(px(this,o===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(o<i&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(dy(t)||(t=Vb(this,t,e)),!(e instanceof Ux)){if(vy(e))return e.forEach(function(e){return n.add(e,t)}),this;if(ly(e))return this.addLabel(e,t);if(uy(e))e=iS.delayedCall(0,e);else return this}return this===e?this:jb(this,e,t)},n.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-ty);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof iS?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return ly(e)?this.removeLabel(e):uy(e)?this.killTweensOf(e):(e.parent===this&&yb(this,e),e===this._recent&&(this._recent=this._last),xb(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=rb(Ox.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=Vb(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=iS.delayedCall(0,t||zy,n);return r.data=`isPause`,this._hasPause=1,jb(this,r,Vb(this,e))},n.removePause=function(e){var t=this._first;for(e=Vb(this,e);t;)t._start===e&&t.data===`isPause`&&bb(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)Yx!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n=[],r=Xb(e),i=this._first,a=dy(t),o;i;)i instanceof iS?ab(i._targets,r)&&(a?(!Yx||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},n.tweenTo=function(e,t){t||={};var n=this,r=Vb(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,c=i.immediateRender,l,u=iS.to(n,db({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||ny,onStart:function(){if(n.pause(),!l){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());u._dur!==e&&Rb(u,e,0,1).render(u._time,!0,!0),l=1}o&&o.apply(u,s||[])}},t));return c?u.render(0):u},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,db({startAt:{time:Vb(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return e===void 0&&(e=this._time),fx(this,Vb(this,e))},n.previousLabel=function(e){return e===void 0&&(e=this._time),fx(this,Vb(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+ny)},n.shiftChildren=function(e,t,n){n===void 0&&(n=0);var r=this._first,i=this.labels,a;for(e=rb(e);r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return xb(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),xb(this)},n.totalDuration=function(e){var t=0,n=this,r=n._last,i=ty,a,o,s;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(s=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,jb(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!s&&!n._dp||s&&s.smoothChildTiming)&&(n._start+=rb(o/n._ts),n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;Rb(n,n===Oy&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},t.updateRoot=function(e){if(Oy._ts&&(cb(Oy,Db(e,Oy)),Ky=Ox.frame),Ox.frame>=Yy){Yy+=Xv.autoSleep||120;var t=Oy._first;if((!t||!t._ts)&&Xv.autoSleep&&Ox._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||Ox.sleep()}}},t}(Ux);db(Wx.prototype,{_lock:0,_hasPause:0,_forcing:0});var Gx=function(e,t,n,r,i,a,o){var s=new vS(this._pt,e,t,0,1,fS,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=lx(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(wy)||[];u=wy.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?ib(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=wy.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(Ty.test(r)||g)&&(s.e=0),this._pt=s,s},Kx=function(e,t,n,r,i,a,o,s,c,l){uy(r)&&(r=r(i||0,e,a));var u=e[t],d=n===`get`?uy(u)?c?e[t.indexOf(`set`)||!uy(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](c):e[t]():u:n,f=uy(u)?c?sS:oS:aS,p;if(ly(r)&&(~r.indexOf(`random(`)&&(r=lx(r)),r.charAt(1)===`=`&&(p=ib(d,r)+(Gb(d)||0),(p||p===0)&&(r=p))),!l||d!==r||Xx)return!isNaN(d*r)&&r!==``?(p=new vS(this._pt,e,t,+d||0,r-(d||0),typeof u==`boolean`?dS:uS,0,f),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!u&&!(t in e)&&Iy(t,r),Gx.call(this,e,t,d,r,f,s||Xv.stringFilter,c))},qx=function(e,t,n,r,i){if(uy(e)&&(e=tS(e,i,t,n,r)),!py(e)||e.style&&e.nodeType||vy(e)||_y(e))return ly(e)?tS(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=tS(e[o],i,t,n,r);return a},Jx=function(e,t,n,r,i,a){var o,s,c,l;if(qy[e]&&(o=new qy[e]).init(i,o.rawVars?t[e]:qx(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new vS(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==hx))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},Yx,Xx,Zx=function e(t,n,r){var i=t.vars,a=i.ease,o=i.startAt,s=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,p=i.autoRevert,m=t._dur,h=t._startAt,g=t._targets,_=t.parent,v=_&&_.data===`nested`?_.vars.targets:g,y=t._overwrite===`auto`&&!Qv,b=t.timeline,x=i.easeReverse||d,S,C,w,T,E,D,O,k,A,j,M,N,P;if(b&&(!f||!a)&&(a=`none`),t._ease=Lx(a,Zv.ease),t._rEase=x&&(Lx(x)||t._ease),t._from=!b&&!!i.runBackwards,t._from&&(t.ratio=1),!b||f&&!i.stagger){if(k=g[0]?$y(g[0]).harness:0,N=k&&i[k.prop],S=hb(i,Uy),h&&(h._zTime<0&&h.progress(1),n<0&&u&&s&&!p?h.render(-1,!0):h.revert(u&&m?Vy:By),h._lazy=0),o){if(bb(t._startAt=iS.set(g,db({data:`isStart`,overwrite:!1,parent:_,immediateRender:!0,lazy:!h&&my(c),startAt:null,delay:0,onUpdate:l&&function(){return px(t,`onUpdate`)},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,n<0&&($v||!s&&!p)&&t._startAt.revert(Vy),s&&m&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(u&&m&&!h){if(n&&(s=!1),w=db({overwrite:!1,data:`isFromStart`,lazy:s&&!h&&my(c),immediateRender:s,stagger:0,parent:_},S),N&&(w[k.prop]=N),bb(t._startAt=iS.set(g,w)),t._startAt._dp=0,t._startAt._sat=t,n<0&&($v?t._startAt.revert(Vy):t._startAt.render(-1,!0)),t._zTime=n,!s)e(t._startAt,ny,ny);else if(!n)return}for(t._pt=t._ptCache=0,c=m&&my(c)||c&&!m,C=0;C<g.length;C++){if(E=g[C],O=E._gsap||Qy(g)[C]._gsap,t._ptLookup[C]=j={},Gy[O.id]&&Wy.length&&ob(),M=v===g?C:v.indexOf(E),k&&(A=new k).init(E,N||S,t,M,v)!==!1&&(t._pt=T=new vS(t._pt,E,A.name,0,1,A.render,A,0,A.priority),A._props.forEach(function(e){j[e]=T}),A.priority&&(D=1)),!k||N)for(w in S)qy[w]&&(A=Jx(w,S,t,M,E,v))?A.priority&&(D=1):j[w]=T=Kx.call(t,E,w,`get`,S[w],M,v,0,i.stringFilter);t._op&&t._op[C]&&t.kill(E,t._op[C]),y&&t._pt&&(Yx=t,Oy.killTweensOf(E,j,t.globalTime(n)),P=!t.parent,Yx=0),t._pt&&c&&(Gy[O.id]=1)}D&&_S(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!P,f&&n<=0&&b.render(ty,!0,!0)},Qx=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return Xx=1,e.vars[t]=`+=0`,Zx(e,o),Xx=0,s?Ly(t+` not eligible for reset. Try splitting into individual properties`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&=nb(n)+Gb(u.e),u.b&&=l.s+Gb(u.b)},$x=function(e,t){var n=e[0]?$y(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=pb({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},eS=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(vy(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},tS=function(e,t,n,r,i){return uy(e)?e.call(t,n,r,i):ly(e)&&~e.indexOf(`random(`)?lx(e):e},nS=Zy+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,rS={};tb(nS+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return rS[e]=1});var iS=function(e){Yv(t,e);function t(t,n,r,i){var a;typeof n==`number`&&(r.duration=n,n=r,r=null),a=e.call(this,i?n:gb(n))||this;var o=a.vars,s=o.duration,c=o.delay,l=o.immediateRender,u=o.stagger,d=o.overwrite,f=o.keyframes,p=o.defaults,m=o.scrollTrigger,h=n.parent||Oy,g=(vy(t)||_y(t)?dy(t[0]):`length`in n)?[t]:Xb(t),_,v,y,b,x,S,C,w;if(a._targets=g.length?Qy(g):Ly(`GSAP target `+t+` not found. https://gsap.com`,!Xv.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,f||u||gy(s)||gy(c)){n=a.vars;var T=n.easeReverse||n.yoyoEase;if(_=a.timeline=new Wx({data:`nested`,defaults:p||{},targets:h&&h.data===`nested`?h.vars.targets:g}),_.kill(),_.parent=_._dp=Jv(a),_._start=0,u||gy(s)||gy(c)){if(b=g.length,C=u&&$b(u),py(u))for(x in u)~nS.indexOf(x)&&(w||={},w[x]=u[x]);for(v=0;v<b;v++)y=hb(n,rS),y.stagger=0,T&&(y.easeReverse=T),w&&pb(y,w),S=g[v],y.duration=+tS(s,Jv(a),v,S,g),y.delay=(+tS(c,Jv(a),v,S,g)||0)-a._delay,!u&&b===1&&y.delay&&(a._delay=c=y.delay,a._start+=c,y.delay=0),_.to(S,y,C?C(v,S,g):0),_._ease=Ax.none;_.duration()?s=c=0:a.timeline=0}else if(f){gb(db(_.vars.defaults,{ease:`none`})),_._ease=Lx(f.ease||n.ease||`none`);var E=0,D,O,k;if(vy(f))f.forEach(function(e){return _.to(g,e,`>`)}),_.duration();else{for(x in y={},f)x===`ease`||x===`easeEach`||eS(x,f[x],y,f.easeEach);for(x in y)for(D=y[x].sort(function(e,t){return e.t-t.t}),E=0,v=0;v<D.length;v++)O=D[v],k={ease:O.e,duration:(O.t-(v?D[v-1].t:0))/100*s},k[x]=O.v,_.to(g,k,E),E+=k.duration;_.duration()<s&&_.to({},{duration:s-_.duration()})}}s||a.duration(s=_.duration())}else a.timeline=0;return d===!0&&!Qv&&(Yx=Jv(a),Oy.killTweensOf(g),Yx=0),jb(h,Jv(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(l||!s&&!f&&a._start===rb(h._time)&&my(l)&&wb(Jv(a))&&h.data!==`nested`)&&(a._tTime=-ny,a.render(Math.max(0,-c)||0)),m&&Mb(Jv(a),m),a}var n=t.prototype;return n.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-ny&&!o?i:e<ny?0:e,c,l,u,d,f,p,m,h;if(!a)Ib(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o||this._lazy){if(c=s,h=this.timeline,this._repeat){if(d=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(d*100+e,t,n);if(c=rb(s%d),s===i?(u=this._repeat,c=a):(f=rb(s/d),u=~~f,u&&u===f?(c=a,u--):c>a&&(c=a)),p=this._yoyo&&u&1,p&&(c=a-c),f=Eb(this._tTime,d),c===r&&!n&&this._initted&&u===f)return this._tTime=s,this;u!==f&&this.vars.repeatRefresh&&!p&&!this._lock&&c!==d&&this._initted&&(this._lock=n=1,this.render(rb(d*u),!0).invalidate()._lock=0)}if(!this._initted){if(Nb(this,o?e:c,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&u!==f))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._rEase){var g=c<r;if(g!==this._inv){var _=g?r:a-r;this._inv=g,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=r,this._invRecip=_?(g?-1:1)/_:0,this._invScale=g?-this.ratio:1-this.ratio,this._invEase=g?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((c-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(c/a);if(this._from&&(this.ratio=m=1-m),this._tTime=s,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),!r&&s&&!t&&!f&&(px(this,`onStart`),this._tTime!==s))return this;for(l=this._pt;l;)l.r(m,l.d),l=l._next;h&&h.render(e<0?e:h._dur*h._ease(c/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&Cb(this,e,t,n),px(this,`onUpdate`)),this._repeat&&u!==f&&this.vars.onRepeat&&!t&&this.parent&&px(this,`onRepeat`),(s===this._tDur||!s)&&this._tTime===s&&(o&&!this._onUpdate&&Cb(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&bb(this,1),!t&&!(o&&!r)&&(s||r||p)&&(px(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(t){return(!t||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){Dx||Ox.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||Zx(this,a),o=this._ease(a/this._dur),Qx(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(kb(this,0),this.parent||vb(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},n.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?mx(this):this.scrollTrigger&&this.scrollTrigger.kill(!!$v),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,Yx&&Yx.vars.overwrite!==!0)._first||mx(this),this.parent&&n!==this.timeline.totalDuration()&&Rb(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?Xb(e):r,a=this._ptLookup,o=this._pt,s,c,l,u,d,f,p;if((!t||t===`all`)&&_b(r,i))return t===`all`&&(this._pt=0),mx(this);for(s=this._op=this._op||[],t!==`all`&&(ly(t)&&(d={},tb(t,function(e){return d[e]=1}),t=d),t=$x(r,t)),p=r.length;p--;)if(~i.indexOf(r[p]))for(d in c=a[p],t===`all`?(s[p]=t,u=c,l={}):(l=s[p]=s[p]||{},u=t),u)f=c&&c[d],f&&((!(`kill`in f.d)||f.d.kill(d)===!0)&&yb(this,f,`_pt`),delete c[d]),l!==`all`&&(l[d]=1);return this._initted&&!this._pt&&o&&mx(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return Hb(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return Hb(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return Oy.killTweensOf(e,t,n)},t}(Ux);db(iS.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),tb(`staggerTo,staggerFrom,staggerFromTo`,function(e){iS[e]=function(){var t=new Wx,n=qb.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}});var aS=function(e,t,n){return e[t]=n},oS=function(e,t,n){return e[t](n)},sS=function(e,t,n,r){return e[t](r.fp,n)},cS=function(e,t,n){return e.setAttribute(t,n)},lS=function(e,t){return uy(e[t])?oS:fy(e[t])&&e.setAttribute?cS:aS},uS=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},dS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},fS=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},pS=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},mS=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},hS=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?yb(this,t,`_pt`):t.dep||(n=1),t=r;return!n},gS=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},_S=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},vS=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||uS,this.d=o||this,this.set=s||aS,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=gS,this.m=e,this.mt=n,this.tween=t},e}();tb(Zy+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,function(e){return Uy[e]=1}),My.TweenMax=My.TweenLite=iS,My.TimelineLite=My.TimelineMax=Wx,Oy=new Wx({sortChildren:!1,defaults:Zv,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),Xv.stringFilter=Ex;var yS=[],bS={},xS=[],SS=0,CS=0,wS=function(e){return(bS[e]||xS).map(function(e){return e()})},TS=function(){var e=Date.now(),t=[];e-SS>2&&(wS(`matchMediaInit`),yS.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=ky.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),wS(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),SS=e,wS(`matchMedia`))},ES=function(){function e(e,t){this.selector=t&&Zb(t),this.data=[],this._r=[],this.isReverted=!1,this.id=CS++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){uy(e)&&(n=t,t=e,e=uy);var r=this,i=function(){var e=ey,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=Zb(n)),ey=r,a=t.apply(r,arguments),uy(a)&&r._r.push(a),ey=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===uy?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=ey;ey=null,e(this),ey=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof iS&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof Wx?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof iS)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var r=yS.length;r--;)yS[r].id===this.id&&yS.splice(r,1)},t.revert=function(e){this.kill(e||{})},e}(),DS=function(){function e(e){this.contexts=[],this.scope=e,ey&&ey.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){py(e)||(e={matches:e});var r=new ES(0,n||this.scope),i=r.conditions={},a,o,s;for(o in ey&&!r.selector&&(r.selector=ey.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)o===`all`?s=1:(a=ky.matchMedia(e[o]),a&&(yS.indexOf(r)<0&&yS.push(r),(i[o]=a.matches)&&(s=1),a.addListener?a.addListener(TS):a.addEventListener(`change`,TS)));return s&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),OS={registerPlugin:function(){[...arguments].forEach(function(e){return _x(e)})},timeline:function(e){return new Wx(e)},getTweensOf:function(e,t){return Oy.getTweensOf(e,t)},getProperty:function(e,t,n,r){ly(e)&&(e=Xb(e)[0]);var i=$y(e||{}).get,a=n?ub:lb;return n===`native`&&(n=``),e&&(t?a((qy[t]&&qy[t].get||i)(e,t,n,r)):function(t,n,r){return a((qy[t]&&qy[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=Xb(e),e.length>1){var r=e.map(function(e){return MS.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=qy[t],o=$y(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;hx._pt=0,r.init(e,n?t+n:t,hx,0,[e]),r.render(1,r),hx._pt&&pS(1,hx)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=MS.to(e,db((r={},r[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return Oy.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Lx(e.ease,Zv.ease)),mb(Zv,e||{})},config:function(e){return mb(Xv,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!qy[e]&&!My[e]&&Ly(t+` effect requires `+e+` plugin.`)}),Jy[t]=function(e,t,r){return n(Xb(e),db(t||{},i),r)},a&&(Wx.prototype[t]=function(e,n,r){return this.add(Jy[t](e,py(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){Ax[e]=Lx(t)},parseEase:function(e,t){return arguments.length?Lx(e,t):Ax},getById:function(e){return Oy.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Wx(e),r,i;for(n.smoothChildTiming=my(e.smoothChildTiming),Oy.remove(n),n._dp=0,n._time=n._tTime=Oy._time,r=Oy._first;r;)i=r._next,(t||!(!r._dur&&r instanceof iS&&r.vars.onComplete===r._targets[0]))&&jb(n,r,r._start-r._delay),r=i;return jb(Oy,n,0),n},context:function(e,t){return e?new ES(e,t):ey},matchMedia:function(e){return new DS(e)},matchMediaRefresh:function(){return yS.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||TS()},addEventListener:function(e,t){var n=bS[e]||(bS[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=bS[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:sx,wrapYoyo:cx,distribute:$b,random:nx,snap:tx,normalize:ax,getUnit:Gb,clamp:Kb,splitColor:xx,toArray:Xb,selector:Zb,mapRange:ux,pipe:rx,unitize:ix,interpolate:dx,shuffle:Qb},install:Fy,effects:Jy,ticker:Ox,updateRoot:Wx.updateRoot,plugins:qy,globalTimeline:Oy,core:{PropTween:vS,globals:Ry,Tween:iS,Timeline:Wx,Animation:Ux,getCache:$y,_removeLinkedListItem:yb,reverting:function(){return $v},context:function(e){return e&&ey&&(ey.data.push(e),e._ctx=ey),ey},suppressOverwrites:function(e){return Qv=e}}};tb(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return OS[e]=iS[e]}),Ox.add(Wx.updateRoot),hx=OS.to({},{duration:0});var kS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},AS=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],(a&&=a.d)&&(a._pt&&(a=kS(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},jS=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(ly(n)&&(r={},tb(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}AS(e,n)}}}},MS=OS.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)$v?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},jS(`roundProps`,ex),jS(`modifiers`),jS(`snap`,tx))||OS;iS.version=Wx.version=MS.version=`3.15.0`,Py=1,hy()&&kx(),Ax.Power0,Ax.Power1,Ax.Power2,Ax.Power3,Ax.Power4,Ax.Linear,Ax.Quad,Ax.Cubic,Ax.Quart,Ax.Quint,Ax.Strong,Ax.Elastic,Ax.Back,Ax.SteppedEase,Ax.Bounce,Ax.Sine,Ax.Expo,Ax.Circ;var NS,PS,FS,IS,LS,RS,zS,BS=function(){return typeof window<`u`},VS={},HS=180/Math.PI,US=Math.PI/180,WS=Math.atan2,GS=1e8,KS=/([A-Z])/g,qS=/(left|right|width|margin|padding|x)/i,JS=/[\s,\(]\S/,YS={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},XS=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ZS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},QS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},$S=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},eC=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},tC=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},nC=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},rC=function(e,t,n){return e.style[t]=n},iC=function(e,t,n){return e.style.setProperty(t,n)},aC=function(e,t,n){return e._gsap[t]=n},oC=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},sC=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},cC=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},lC=`transform`,uC=lC+`Origin`,dC=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in VS&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=YS[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=AC(i,e)}):this.tfm[t]=o.x?o[t]:AC(i,t),t===uC&&(this.tfm.zOrigin=o.zOrigin);else return YS.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(lC)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(uC,n,``)),t=lC}(a||n)&&this.props.push(t,n,a[t])},fC=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},pC=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,i,a;for(i=0;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(KS,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=zS(),(!i||!i.isStart)&&!n[lC]&&(fC(n),r.zOrigin&&n[uC]&&(n[uC]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},mC=function(e,t){var n={target:e,props:[],revert:pC,save:dC};return e._gsap||MS.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},hC,gC=function(e,t){var n=PS.createElementNS?PS.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):PS.createElement(e);return n&&n.style?n:PS.createElement(e)},_C=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(KS,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,yC(n)||n,1)||``},vC=`O,Moz,ms,Ms,Webkit`.split(`,`),yC=function(e,t,n){var r=(t||LS).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(vC[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?vC[i]:``)+e},bC=function(){BS()&&window.document&&(NS=window,PS=NS.document,FS=PS.documentElement,LS=gC(`div`)||{style:{}},gC(`div`),lC=yC(lC),uC=lC+`Origin`,LS.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,hC=!!yC(`perspective`),zS=MS.core.reverting,IS=1)},xC=function(e){var t=e.ownerSVGElement,n=gC(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=e.cloneNode(!0),i;r.style.display=`block`,n.appendChild(r),FS.appendChild(n);try{i=r.getBBox()}catch{}return n.removeChild(r),FS.removeChild(n),i},SC=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},CC=function(e){var t,n;try{t=e.getBBox()}catch{t=xC(e),n=1}return t&&(t.width||t.height)||n||(t=xC(e)),t&&!t.width&&!t.x&&!t.y?{x:+SC(e,[`x`,`cx`,`x1`])||0,y:+SC(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},wC=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&CC(e))},TC=function(e,t){if(t){var n=e.style,r;t in VS&&t!==uC&&(t=lC),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(KS,`-$1`).toLowerCase())):n.removeAttribute(t)}},EC=function(e,t,n,r,i,a){var o=new vS(e._pt,t,n,0,1,a?nC:tC);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},DC={deg:1,rad:1,turn:1},OC={grid:1,flex:1},kC=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=LS.style,c=qS.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||DC[i]||DC[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&wC(t),(p||o===`%`)&&(VS[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],nb(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),(!h||h===PS||!h.appendChild)&&(h=PS.body),g=h._gsap,g&&p&&g.width&&c&&g.time===Ox.time&&!g.uncache)return nb(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:TC(t,n)}else(p||o===`%`)&&!OC[_C(h,`display`)]&&(s.position=_C(t,`position`)),h===t&&(s.position=`static`),h.appendChild(LS),m=LS[u],h.removeChild(LS),s.position=`absolute`;return c&&p&&(g=$y(h),g.time=Ox.time,g.width=h[u]),nb(f?m*a/d:m&&a?d/m*a:0)},AC=function(e,t,n,r){var i;return IS||bC(),t in YS&&t!==`transform`&&(t=YS[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),VS[t]&&t!==`transform`?(i=HC(e,r),i=t===`transformOrigin`?i.svg?i.origin:UC(_C(e,uC))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=FC[t]&&FC[t](e,t,n)||_C(e,t)||eb(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?kC(e,t,i,n)+n:i},jC=function(e,t,n,r){if(!n||n===`none`){var i=yC(t,e,1),a=i&&_C(e,i,1);a&&a!==n?(t=i,n=a):t===`borderColor`&&(n=_C(e,`borderTopColor`))}var o=new vS(this._pt,e.style,t,0,1,fS),s=0,c=0,l,u,d,f,p,m,h,g,_,v,y,b;if(o.b=n,o.e=r,n+=``,r+=``,r.substring(0,6)===`var(--`&&(r=_C(e,r.substring(4,r.indexOf(`)`)))),r===`auto`&&(m=e.style[t],e.style[t]=r,r=_C(e,t)||r,m?e.style[t]=m:TC(e,t)),l=[n,r],Ex(l),n=l[0],r=l[1],d=n.match(Cy)||[],b=r.match(Cy)||[],b.length){for(;u=Cy.exec(r);)h=u[0],_=r.substring(s,u.index),p?p=(p+1)%5:(_.substr(-5)===`rgba(`||_.substr(-5)===`hsla(`)&&(p=1),h!==(m=d[c++]||``)&&(f=parseFloat(m)||0,y=m.substr((f+``).length),h.charAt(1)===`=`&&(h=ib(f,h)+y),g=parseFloat(h),v=h.substr((g+``).length),s=Cy.lastIndex-v.length,v||(v=v||Xv.units[t]||y,s===r.length&&(r+=v,o.e+=v)),y!==v&&(f=kC(e,t,m,v)||0),o._pt={_next:o._pt,p:_||c===1?_:`,`,s:f,c:g-f,m:p&&p<4||t===`zIndex`?Math.round:0});o.c=s<r.length?r.substring(s,r.length):``}else o.r=t===`display`&&r===`none`?nC:tC;return Ty.test(r)&&(o.e=0),this._pt=o,o},MC={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},NC=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=MC[n]||n,t[1]=MC[r]||r,t.join(` `)},PC=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],VS[o]&&(s=1,o=o===`transformOrigin`?uC:lC),TC(n,o);s&&(TC(n,lC),a&&(a.svg&&n.removeAttribute(`transform`),r.scale=r.rotate=r.translate=`none`,HC(n,1),a.uncache=1,fC(r)))}},FC={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new vS(e._pt,t,n,0,0,PC);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},IC=[1,0,0,1,0,0],LC={},RC=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},zC=function(e){var t=_C(e,lC);return RC(t)?IC:t.substr(7).match(Sy).map(nb)},BC=function(e,t){var n=e._gsap||$y(e),r=e.style,i=zC(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?IC:i):(i===IC&&!e.offsetParent&&e!==FS&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,FS.appendChild(e)),i=zC(e),s?r.display=s:TC(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):FS.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},VC=function(e,t,n,r,i,a){var o=e._gsap,s=i||BC(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==IC&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=CC(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[uC]=`0px 0px`,a&&(EC(a,o,`xOrigin`,c,y),EC(a,o,`yOrigin`,l,b),EC(a,o,`xOffset`,u,o.xOffset),EC(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},HC=function(e,t){var n=e._gsap||new Hx(e);if(`x`in n&&!t&&!n.uncache)return n;var r=e.style,i=n.scaleX<0,a=`px`,o=`deg`,s=getComputedStyle(e),c=_C(e,uC)||`0`,l=u=d=m=h=g=_=v=y=0,u,d,f=p=1,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,ee,te,ne,re;return n.svg=!!(e.getCTM&&wC(e)),s.translate&&((s.translate!==`none`||s.scale!==`none`||s.rotate!==`none`)&&(r[lC]=(s.translate===`none`?``:`translate3d(`+(s.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(s.rotate===`none`?``:`rotate(`+s.rotate+`) `)+(s.scale===`none`?``:`scale(`+s.scale.split(` `).join(`,`)+`) `)+(s[lC]===`none`?``:s[lC])),r.scale=r.rotate=r.translate=`none`),S=BC(e,n.svg),n.svg&&(n.uncache?(N=e.getBBox(),c=n.xOrigin-N.x+`px `+(n.yOrigin-N.y)+`px`,M=``):M=!t&&e.getAttribute(`data-svg-origin`),VC(e,M||c,!!M||n.originIsAbsolute,n.smooth!==!1,S)),b=n.xOrigin||0,x=n.yOrigin||0,S!==IC&&(E=S[0],D=S[1],O=S[2],k=S[3],l=A=S[4],u=j=S[5],S.length===6?(f=Math.sqrt(E*E+D*D),p=Math.sqrt(k*k+O*O),m=E||D?WS(D,E)*HS:0,_=O||k?WS(O,k)*HS+m:0,_&&(p*=Math.abs(Math.cos(_*US))),n.svg&&(l-=b-(b*E+x*O),u-=x-(b*D+x*k))):(re=S[6],te=S[7],F=S[8],I=S[9],ee=S[10],ne=S[11],l=S[12],u=S[13],d=S[14],C=WS(re,ee),h=C*HS,C&&(w=Math.cos(-C),T=Math.sin(-C),M=A*w+F*T,N=j*w+I*T,P=re*w+ee*T,F=A*-T+F*w,I=j*-T+I*w,ee=re*-T+ee*w,ne=te*-T+ne*w,A=M,j=N,re=P),C=WS(-O,ee),g=C*HS,C&&(w=Math.cos(-C),T=Math.sin(-C),M=E*w-F*T,N=D*w-I*T,P=O*w-ee*T,ne=k*T+ne*w,E=M,D=N,O=P),C=WS(D,E),m=C*HS,C&&(w=Math.cos(C),T=Math.sin(C),M=E*w+D*T,N=A*w+j*T,D=D*w-E*T,j=j*w-A*T,E=M,A=N),h&&Math.abs(h)+Math.abs(m)>359.9&&(h=m=0,g=180-g),f=nb(Math.sqrt(E*E+D*D+O*O)),p=nb(Math.sqrt(j*j+re*re)),C=WS(A,j),_=Math.abs(C)>2e-4?C*HS:0,y=ne?1/(ne<0?-ne:ne):0),n.svg&&(M=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!RC(_C(e,lC)),M&&e.setAttribute(`transform`,M))),Math.abs(_)>90&&Math.abs(_)<270&&(i?(f*=-1,_+=m<=0?180:-180,m+=m<=0?180:-180):(p*=-1,_+=_<=0?180:-180)),t||=n.uncache,n.x=l-((n.xPercent=l&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-l)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=nb(f),n.scaleY=nb(p),n.rotation=nb(m)+o,n.rotationX=nb(h)+o,n.rotationY=nb(g)+o,n.skewX=_+o,n.skewY=v+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(` `)[2])||!t&&n.zOrigin||0)&&(r[uC]=UC(c)),n.xOffset=n.yOffset=0,n.force3D=Xv.force3D,n.renderTransform=n.svg?XC:hC?YC:GC,n.uncache=0,n},UC=function(e){return(e=e.split(` `))[0]+` `+e[1]},WC=function(e,t,n){var r=Gb(t);return nb(parseFloat(t)+parseFloat(kC(e,`x`,n+`px`,r)))+r},GC=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,YC(e,t)},KC=`0deg`,qC=`0px`,JC=`) `,YC=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==KC||l!==KC)){var x=parseFloat(l)*US,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*US,w=Math.cos(x),a=WC(_,a,S*w*-v),o=WC(_,o,-Math.sin(x)*-v),s=WC(_,s,C*w*-v+v)}h!==qC&&(y+=`perspective(`+h+JC),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==qC||o!==qC||s!==qC)&&(y+=s!==qC||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+JC),c!==KC&&(y+=`rotate(`+c+JC),l!==KC&&(y+=`rotateY(`+l+JC),u!==KC&&(y+=`rotateX(`+u+JC),(d!==KC||f!==KC)&&(y+=`skew(`+d+`, `+f+JC),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+JC),_.style[lC]=y||`translate(0, 0)`},XC=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=US,c*=US,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=US,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=nb(b),x=nb(x),S=nb(S),C=nb(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=kC(f,`x`,a,`px`),y=kC(f,`y`,o,`px`)),(p||m||h||g)&&(v=nb(v+p-(p*b+m*S)+h),y=nb(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=nb(v+r/100*w.width),y=nb(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[lC]=w)},ZC=function(e,t,n,r,i){var a=360,o=ly(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?HS:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*GS)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*GS)%a-~~(s/a)*a)),e._pt=u=new vS(e._pt,t,n,r,s,ZS),u.e=c,u.u=`deg`,e._props.push(n),u},QC=function(e,t){for(var n in t)e[n]=t[n];return e},$C=function(e,t,n){var r=QC({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[lC]=t,o=HC(n,1),TC(n,lC),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[lC],a[lC]=t,o=HC(n,1),a[lC]=c),VS)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=Gb(c),p=Gb(l),u=f===p?parseFloat(c):kC(n,s,c,p),d=parseFloat(l),e._pt=new vS(e._pt,o,s,u,d-u,XS),e._pt.u=p||0,e._props.push(s));QC(o,r)};tb(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});FC[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return AC(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var ew={name:`css`,register:bC,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a=this._props,o=e.style,s=n.vars.startAt,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;for(m in IS||bC(),this.styles=this.styles||mC(e),C=this.styles.props,this.tween=n,t)if(m!==`autoRound`&&(l=t[m],!(qy[m]&&Jx(m,t,n,r,e,i)))){if(f=typeof l,p=FC[m],f===`function`&&(l=l.call(n,r,e,i),f=typeof l),f===`string`&&~l.indexOf(`random(`)&&(l=lx(l)),p)p(this,e,m,l,n)&&(S=1);else if(m.substr(0,2)===`--`)c=(getComputedStyle(e).getPropertyValue(m)+``).trim(),l+=``,wx.lastIndex=0,wx.test(c)||(h=Gb(c),g=Gb(l),g?h!==g&&(c=kC(e,m,c,g)+g):h&&(l+=h)),this.add(o,`setProperty`,c,l,r,i,0,0,m),a.push(m),C.push(m,0,o[m]);else if(f!==`undefined`){if(s&&m in s?(c=typeof s[m]==`function`?s[m].call(n,r,e,i):s[m],ly(c)&&~c.indexOf(`random(`)&&(c=lx(c)),Gb(c+``)||c===`auto`||(c+=Xv.units[m]||Gb(AC(e,m))||``),(c+``).charAt(1)===`=`&&(c=AC(e,m))):c=AC(e,m),d=parseFloat(c),_=f===`string`&&l.charAt(1)===`=`&&l.substr(0,2),_&&(l=l.substr(2)),u=parseFloat(l),m in YS&&(m===`autoAlpha`&&(d===1&&AC(e,`visibility`)===`hidden`&&u&&(d=0),C.push(`visibility`,0,o.visibility),EC(this,o,`visibility`,d?`inherit`:`hidden`,u?`inherit`:`hidden`,!u)),m!==`scale`&&m!==`transform`&&(m=YS[m],~m.indexOf(`,`)&&(m=m.split(`,`)[0]))),v=m in VS,v){if(this.styles.save(m),w=l,f===`string`&&l.substring(0,6)===`var(--`){if(l=_C(e,l.substring(4,l.indexOf(`)`))),l.substring(0,5)===`calc(`){var T=e.style.perspective;e.style.perspective=l,l=_C(e,`perspective`),T?e.style.perspective=T:TC(e,`perspective`)}u=parseFloat(l)}if(y||(b=e._gsap,b.renderTransform&&!t.parseTransform||HC(e,t.parseTransform),x=t.smoothOrigin!==!1&&b.smooth,y=this._pt=new vS(this._pt,o,lC,0,1,b.renderTransform,b,0,-1),y.dep=1),m===`scale`)this._pt=new vS(this._pt,b,`scaleY`,b.scaleY,(_?ib(b.scaleY,_+u):u)-b.scaleY||0,XS),this._pt.u=0,a.push(`scaleY`,m),m+=`X`;else if(m===`transformOrigin`){C.push(uC,0,o[uC]),l=NC(l),b.svg?VC(e,l,0,x,0,this):(g=parseFloat(l.split(` `)[2])||0,g!==b.zOrigin&&EC(this,b,`zOrigin`,b.zOrigin,g),EC(this,o,m,UC(c),UC(l)));continue}else if(m===`svgOrigin`){VC(e,l,1,x,0,this);continue}else if(m in LC){ZC(this,b,m,d,_?ib(d,_+l):l);continue}else if(m===`smoothOrigin`){EC(this,b,`smooth`,b.smooth,l);continue}else if(m===`force3D`){b[m]=l;continue}else if(m===`transform`){$C(this,l,e);continue}}else m in o||(m=yC(m)||m);if(v||(u||u===0)&&(d||d===0)&&!JS.test(l)&&m in o)h=(c+``).substr((d+``).length),u||=0,g=Gb(l)||(m in Xv.units?Xv.units[m]:h),h!==g&&(d=kC(e,m,c,g)),this._pt=new vS(this._pt,v?b:o,m,d,(_?ib(d,_+u):u)-d,!v&&(g===`px`||m===`zIndex`)&&t.autoRound!==!1?eC:XS),this._pt.u=g||0,v&&w!==l?(this._pt.b=c,this._pt.e=w,this._pt.r=$S):h!==g&&g!==`%`&&(this._pt.b=c,this._pt.r=QS);else if(m in o)jC.call(this,e,m,c,_?_+l:l);else if(m in e)this.add(e,m,c||e[m],_?_+l:l,r,i);else if(m!==`parseTransform`){Iy(m,l);continue}v||(m in o?C.push(m,0,o[m]):typeof e[m]==`function`?C.push(m,2,e[m]()):C.push(m,1,c||e[m])),a.push(m)}}S&&_S(this)},render:function(e,t){if(t.tween._time||!zS())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:AC,aliases:YS,getSetter:function(e,t,n){var r=YS[t];return r&&r.indexOf(`,`)<0&&(t=r),t in VS&&t!==uC&&(e._gsap.x||AC(e,`x`))?n&&RS===n?t===`scale`?oC:aC:(RS=n||{})&&(t===`scale`?sC:cC):e.style&&!fy(e.style[t])?rC:~t.indexOf(`-`)?iC:lS(e,t)},core:{_removeProperty:TC,_getMatrix:BC}};MS.utils.checkPrefix=yC,MS.core.getStyleSaver=mC,(function(e,t,n,r){var i=tb(e+`,`+t+`,`+n,function(e){VS[e]=1});tb(t,function(e){Xv.units[e]=`deg`,LC[e]=1}),YS[i[13]]=e+`,`+t,tb(r,function(e){var t=e.split(`:`);YS[t[1]]=i[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),tb(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){Xv.units[e]=`px`}),MS.registerPlugin(ew);var Q=MS.registerPlugin(ew)||MS;Q.core.Tween;function tw(e,t){let n=!1,r=!1;e.addEventListener(`shatter`,t=>{if(n||r)return;n=!0;let i=e.scene||nw(e),a=rw(i),o=e.parent;e.userData.originalParent=o,i.attach(e);let s=new U(0,0,a.position.z-2.5),c=new Wt(0,0,0),l=new U(3.5,3.5,1),u=o.parent.children;u.forEach(e=>{e!==o&&(e.userData.origScale||(e.userData.origScale=e.scale.clone()),Q.to(e.scale,{x:0,y:0,z:0,duration:.8,ease:`power3.inOut`}))}),Q.to(e.position,{x:s.x,y:s.y,z:s.z,duration:1.2,ease:`power3.inOut`}),Q.to(e.rotation,{x:c.x,y:c.y,z:c.z,duration:1.2,ease:`power3.inOut`}),Q.to(e.scale,{x:l.x,y:l.y,z:l.z,duration:1.2,ease:`power3.inOut`,onComplete:()=>{n=!1,r=!0;let e=document.getElementById(`portfolio-view`);e.style.display=`block`,e.style.pointerEvents=`auto`,Q.to(e,{opacity:1,duration:.5})}});let d=document.getElementById(`close-portfolio`);d.onclick=()=>{if(n)return;n=!0;let t=document.getElementById(`portfolio-view`);t.style.pointerEvents=`none`,Q.to(t,{opacity:0,duration:.4,onComplete:()=>{t.style.display=`none`,o.attach(e),Q.to(e.position,{x:0,y:0,z:0,duration:1.2,ease:`power3.inOut`}),Q.to(e.rotation,{x:0,y:0,z:0,duration:1.2,ease:`power3.inOut`}),Q.to(e.scale,{x:1,y:1,z:1,duration:1.2,ease:`power3.inOut`,onComplete:()=>{n=!1,r=!1}}),u.forEach(e=>{e!==o&&e.userData.origScale&&Q.to(e.scale,{x:e.userData.origScale.x,y:e.userData.origScale.y,z:e.userData.origScale.z,duration:1.2,ease:`power3.inOut`})})}})}})}function nw(e){return e.type===`Scene`?e:e.parent?nw(e.parent):null}function rw(e){let t=null;return e.traverse(e=>{e.isPerspectiveCamera&&(t=e)}),t}var $={bgColor:`#ffffff`,foldDuration:1.2,scrollSensitivity:.003,flatScrollSensitivity:.01,shatterPieces:80,shatterForce:3,shatterGravity:2,shatterDuration:1,faceColor1:`#ffdddd`,faceColor2:`#cce8b5`,faceColor3:`#ddddff`,transmission:.18,opacity:1,metalness:.39,roughness:.23,ior:1.91,thickness:.05,frontTextScaleX:1,frontTextScaleY:1,frontTextScaleZ:.6,frontTextColor:`#ffffff`,frontTextEmissive:`#ffffff`,frontTextEmissiveIntensity:.32,frontTextTransmission:1,frontTextOpacity:1,frontTextMetalness:0,frontTextRoughness:.46,frontTextIor:1.24,frontTextThickness:1,waveStrength:.003,waveSpeed:4.8},iw=new ln,aw=!0,ow=!1,sw=[],cw=[],lw={angle:0,offsetX:0},uw=3,dw=uw,fw=uw*115*Math.PI/180+uw*5*Math.PI/180,pw=new ln,mw=new ln;iw.add(pw),iw.add(mw);var hw=new ln;hw.position.set(0,0,3),pw.add(hw);var gw=new ln,_w=new ln;gw.add(_w),pw.add(gw);var vw=new ln,yw=new ln;vw.add(yw),pw.add(vw);var bw=[null,null,null],xw=[],Sw=[0,120,-120].map(e=>e*Math.PI/180);function Cw(e){e.add(iw),iw.position.z=-3;let t=2.5,n=115*Math.PI/180,r=5*Math.PI/180,i=3*n+3*r,a=new oo,o=[`./12802.jpg`,`./1644.jpg`,`./29038.jpg`];for(let e=0;e<3;e++){let r=a.load(o[e],e=>{e.colorSpace=Ie;let r=e.image.width/e.image.height,i=n*3/t;r>i?(e.repeat.x=i/r,e.offset.x=(1-e.repeat.x)/2):(e.repeat.y=r/i,e.offset.y=(1-e.repeat.y)/2)});ww(e,r,3,t,n,.05,i)}Tw(!0,3,i)}function ww(e,t,n,r,i,a,o){let s=new ln,c=n*i,l=new ri(c,r,a,32,1,1);l=l.toNonIndexed();let u=[],d=[],f=l.attributes.position,p=l.attributes.normal;for(let e=0;e<f.count;e++){let t=f.getX(e),r=f.getY(e),a=f.getZ(e),o=p.getX(e),s=p.getY(e),l=p.getZ(e),m=t/c*i,h=n+a,g=h*Math.sin(m),_=h*Math.cos(m)-n;u.push(g,r,_);let v=o*Math.cos(m)+l*Math.sin(m),y=-o*Math.sin(m)+l*Math.cos(m);d.push(v,s,y)}l.morphAttributes.position=[],l.morphAttributes.position[0]=new or(u,3),l.morphAttributes.normal=[],l.morphAttributes.normal[0]=new or(d,3);let m=new Na({map:t,color:[$.faceColor1,$.faceColor2,$.faceColor3][e],transmission:$.transmission,opacity:$.opacity,metalness:$.metalness,roughness:$.roughness,ior:$.ior,thickness:$.thickness,side:2,transparent:!0}),h=new Vr(l,m);h.castShadow=!0,h.receiveShadow=!0,s.add(h),mw.add(s),h.userData={isScreen:!0,screenIndex:e},xw.push({group:s,mesh:h,index:e}),sw.push(s),tw(h,s);let g=[`BRAND`,`WEB`,`MARKETING`];new Kv().load(`./CooperLtBT-Regular.ttf`,t=>{let r=new od(t),a=new qv(g[e],{font:r,size:.28,depth:.03,curveSegments:12,bevelEnabled:!0,bevelThickness:.005,bevelSize:.005,bevelSegments:3});a.computeBoundingBox();let o=-.5*(a.boundingBox.max.x-a.boundingBox.min.x),l=-.5*(a.boundingBox.max.y-a.boundingBox.min.y);a.translate(o,l,0);let u=new Vr(a,new Na({color:$.frontTextColor,emissive:$.frontTextEmissive,emissiveIntensity:$.frontTextEmissiveIntensity,transmission:$.frontTextTransmission,opacity:$.frontTextOpacity,metalness:$.frontTextMetalness,roughness:$.frontTextRoughness,ior:$.frontTextIor,thickness:$.frontTextThickness,transparent:!0,side:2}));u.scale.set($.frontTextScaleX,$.frontTextScaleY,$.frontTextScaleZ),u.position.set(0,0,.4);let d=a.attributes.position;for(let e=0;e<d.count;e++){let t=d.getX(e),r=d.getY(e),a=d.getZ(e),o=t/c*i,s=n+.4+a,l=s*Math.sin(o),u=s*Math.cos(o)-n-.4;d.setXYZ(e,l,r,u)}a.computeVertexNormals(),s.add(u),cw.push(u)})}function Tw(e,t,n){let r=+!!e;xw.forEach(e=>{e.mesh.morphTargetInfluences[0]=r}),e?(gw.position.set(t*Math.sin(Math.PI/3),0,t*Math.cos(Math.PI/3)),gw.rotation.y=2*Math.PI/3,_w.position.set(t*Math.sin(Math.PI/3),0,t*Math.cos(Math.PI/3)),vw.position.set(-t*Math.sin(Math.PI/3),0,t*Math.cos(Math.PI/3)),vw.rotation.y=-2*Math.PI/3,yw.position.set(-t*Math.sin(Math.PI/3),0,t*Math.cos(Math.PI/3))):(gw.position.set(n/2,0,t),gw.rotation.y=0,_w.position.set(n/2,0,0),vw.position.set(-n/2,0,t),vw.rotation.y=0,yw.position.set(-n/2,0,0))}function Ew(e){let t=1/0,n=0;for(let r=0;r<3;r++){let i=e+Sw[r];i%=2*Math.PI,i>Math.PI&&(i-=2*Math.PI),i<=-Math.PI&&(i+=2*Math.PI),Math.abs(i)<t&&(t=Math.abs(i),n=r)}let r=0,i=0;for(let t=0;t<3;t++){if(t===n)continue;let a=e+Sw[t];a%=2*Math.PI,a>Math.PI&&(a-=2*Math.PI),a<=-Math.PI&&(a+=2*Math.PI),a>0?r=t:i=t}bw[n]=hw,bw[r]=_w,bw[i]=yw}function Dw(){if(ow)return;let e=$.foldDuration,t=`sine.inOut`;if(aw){ow=!0;let n=Math.round(lw.angle/(120*Math.PI/180))*(120*Math.PI/180),r=()=>{Ew(n),aw=!1,Ow(!1,e,t,()=>{ow=!1})};Math.abs(lw.angle-n)>.001?Q.to(lw,{angle:n,duration:.6,ease:`power2.out`,overwrite:!0,onComplete:r}):(lw.angle=n,r())}else{ow=!0;let n=Math.round(lw.offsetX/fw)*fw,r=Math.round(n/fw),i=()=>{r!==0&&(lw.angle+=r*(120*Math.PI/180),Ew(lw.angle),lw.offsetX=0),Ow(!0,e,t,()=>{aw=!0,ow=!1})};Math.abs(lw.offsetX-n)>.001?Q.to(lw,{offsetX:n,duration:.6,ease:`power2.out`,overwrite:!0,onComplete:i}):(lw.offsetX=n,i())}}function Ow(e,t,n,r){xw.forEach(r=>{Q.to(r.mesh.morphTargetInfluences,{0:+!!e,duration:t,ease:n,overwrite:!0})});let i=e?{x:dw*Math.sin(Math.PI/3),z:dw*Math.cos(Math.PI/3)}:{x:fw/2,z:dw},a=e?2*Math.PI/3:0,o=e?{x:dw*Math.sin(Math.PI/3),z:dw*Math.cos(Math.PI/3)}:{x:fw/2,z:0},s=e?{x:-3*Math.sin(Math.PI/3),z:dw*Math.cos(Math.PI/3)}:{x:-fw/2,z:dw},c=e?-2*Math.PI/3:0,l=e?{x:-3*Math.sin(Math.PI/3),z:dw*Math.cos(Math.PI/3)}:{x:-fw/2,z:0};Q.to(gw.position,{x:i.x,z:i.z,duration:t,ease:n,overwrite:!0}),Q.to(gw.rotation,{y:a,duration:t,ease:n,overwrite:!0}),Q.to(_w.position,{x:o.x,z:o.z,duration:t,ease:n,overwrite:!0}),Q.to(vw.position,{x:s.x,z:s.z,duration:t,ease:n,overwrite:!0}),Q.to(vw.rotation,{y:c,duration:t,ease:n,overwrite:!0}),Q.to(yw.position,{x:l.x,z:l.z,duration:t,ease:n,overwrite:!0}),Q.delayedCall(t,r)}function kw(){if(aw)for(let e=0;e<3;e++){let t=xw[e].group,n=lw.angle+Sw[e];t.position.set(3*Math.sin(n),0,3*Math.cos(n)),t.rotation.set(0,n,0)}else{let e=new U,t=new ut,n=new ut;for(let r=0;r<3;r++){let i=xw[r].group,a=bw[r];if(a){if(a.getWorldPosition(e),a.getWorldQuaternion(t),mw.worldToLocal(e),!ow){for(e.x+=lw.offsetX;e.x>1.5*fw;)e.x-=3*fw;for(;e.x<-1.5*fw;)e.x+=3*fw}i.position.copy(e),mw.getWorldQuaternion(n),t.premultiply(n.invert()),i.quaternion.copy(t)}}}}var Aw=new yn;Aw.background=new gn(`#050505`);var jw=new Co(window.innerWidth/-2,window.innerWidth/2,window.innerHeight/2,window.innerHeight/-2,.1,1e3);jw.position.z=100,window.addEventListener(`resize`,()=>{jw.left=window.innerWidth/-2,jw.right=window.innerWidth/2,jw.top=window.innerHeight/2,jw.bottom=window.innerHeight/-2,jw.updateProjectionMatrix()});var Mw=new oo,Nw=Mw.load(`./PROJETO 01/imagem1_1x.webp`,e=>{let t=e.image.width/e.image.height;t>1?(e.repeat.set(1/t,1),e.offset.set((1-1/t)/2,0)):(e.repeat.set(1,t/1),e.offset.set(0,(1-t/1)/2))});Nw.colorSpace=Ie;var Pw=new xa(1e4,1e4),Fw=new Aa({uniforms:{uOffset:{value:new H(0,0)}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform vec2 uOffset;
    varying vec2 vUv;
    void main() {
      // 10000 / 200 = 50 tiles. Each tile is 200x200 pixels.
      vec2 uv = vUv * 50.0 + uOffset;
      vec2 grid = fract(uv);
      
      float thickness = 0.01;
      float lineX = step(1.0 - thickness, grid.x);
      float lineY = step(1.0 - thickness, grid.y);
      float line = max(lineX, lineY);
      
      gl_FragColor = vec4(vec3(1.0), line * 0.04);
    }
  `,transparent:!0,depthWrite:!1}),Iw=new Vr(Pw,Fw);Iw.position.z=-50,Aw.add(Iw);var Lw=[`./PROJETO 01/imagem2_1x.webp`,`./PROJETO 01/imagem3_1x.webp`,`./PROJETO 01/imagem4_1x.webp`,`./PROJETO 01/imagem5_1x.webp`,`./PROJETO 01/imagem6_1x.webp`,`./PROJETO 01/imagem7_1x.webp`,`./PROJETO 01/imagem8_1x.webp`],Rw=5,zw=5,Bw=window.innerWidth<768,Vw=Bw?window.innerWidth*.6:300,Hw=Bw?window.innerWidth*.6:300,Uw=Vw+(Bw?50:100),Ww=new ln;Aw.add(Ww);var Gw=[],Kw=new xa(Vw,Hw);for(let e=0;e<zw;e++)for(let t=0;t<Rw;t++){let n=new Vr(Kw,new kr({map:Nw,transparent:!0,color:new gn(16777215)}));n.userData={c:t,r:e,isGrid:!0},Ww.add(n),Gw.push(n)}var qw=0,Jw=0,Yw=!1,Xw=0,Zw=!1;function Qw(){let e=Rw*Uw,t=zw*Uw,n=e/2,r=t/2;Gw.forEach(i=>{let a=i.userData.c,o=i.userData.r,s=a*Uw+qw,c=o*Uw+Jw;s=((s+n)%e+e)%e-n,c=((c+r)%t+t)%t-r,i.userData.currentX=s,i.userData.currentY=-c,i.position.set(i.userData.currentX,i.userData.currentY,0)}),Fw.uniforms.uOffset.value.set(-qw*.2/200,(Jw-Xw)*.2/200)}Qw();var $w=new Ko,eT=new H,tT=0,nT=0,rT=!1,iT=new ln;Aw.add(iT);var aT=[],oT=document.createElement(`button`);oT.innerHTML=`&times; Voltar`,oT.style.cssText=`display:none; position:fixed; top:20px; right:20px; padding:10px 20px; z-index:1000; background:rgba(255,255,255,0.1); color:#fff; border:1px solid rgba(255,255,255,0.3); border-radius:30px; cursor:pointer; font-family:sans-serif; transition:0.3s;`,oT.onmouseenter=()=>oT.style.background=`rgba(255,255,255,0.3)`,oT.onmouseleave=()=>oT.style.background=`rgba(255,255,255,0.1)`,document.body.appendChild(oT),oT.addEventListener(`pointerdown`,e=>e.stopPropagation()),oT.addEventListener(`pointerup`,e=>e.stopPropagation()),oT.addEventListener(`click`,e=>{if(e.stopPropagation(),!Yw){window.dispatchEvent(new CustomEvent(`exitGalleryScene`));return}Q.to(oT,{opacity:0,duration:.5,onComplete:()=>{oT.innerHTML=`&times; Voltar`,Q.to(oT,{opacity:1,duration:.5})}}),window.clickedMesh&&window.clickedMesh.material.color.setRGB(1,1,1),aT.forEach(e=>Q.to(e.material,{opacity:0,duration:.8})),Gw.forEach(e=>{e!==window.clickedMesh&&Q.to(e.material,{opacity:1,duration:1.5,ease:`power2.inOut`})});let t={scrollY:Xw,zoom:jw.zoom};Q.to(t,{scrollY:0,zoom:1,duration:1.5,ease:`power3.inOut`,onUpdate:()=>{iT.position.y=t.scrollY,window.clickedMesh&&(window.clickedMesh.position.y=window.clickedMesh.userData.currentY+t.scrollY),jw.zoom=t.zoom,jw.updateProjectionMatrix(),Fw.uniforms.uOffset.value.set(-qw*.2/200,(Jw-t.scrollY)*.2/200)},onComplete:()=>{aT.forEach(e=>{iT.remove(e),e.geometry.dispose(),e.material.dispose()}),aT=[],Xw=0,Yw=!1}})}),window.addEventListener(`pointerdown`,e=>{window.activeScene===`gallery`&&(rT=!0,Zw=!1,tT=e.clientX,nT=e.clientY)}),window.addEventListener(`pointermove`,e=>{if(window.activeScene!==`gallery`)return;if(eT.x=e.clientX/window.innerWidth*2-1,eT.y=-(e.clientY/window.innerHeight)*2+1,!rT&&!Yw){$w.setFromCamera(eT,jw);let e=$w.intersectObjects(Gw);document.body.style.cursor=e.length>0?`pointer`:`default`}else!rT&&Yw&&(document.body.style.cursor=`default`);if(!rT)return;let t=e.clientX-tT,n=e.clientY-nT;if(Math.hypot(t,n)>3&&(Zw=!0),!Yw)qw+=t,Jw+=n,Qw();else{Xw-=n;let e=Lw.length*Uw;Xw=Math.max(0,Math.min(Xw,e)),iT.position.y=Xw,window.clickedMesh&&(window.clickedMesh.position.y=window.clickedMesh.userData.currentY+Xw),Fw.uniforms.uOffset.value.set(-qw*.2/200,(Jw-Xw)*.2/200)}tT=e.clientX,nT=e.clientY}),window.addEventListener(`wheel`,e=>{if(window.activeScene===`gallery`)if(!Yw)qw-=e.deltaX,Jw-=e.deltaY,Qw();else{Xw+=e.deltaY;let t=Lw.length*Uw;Xw=Math.max(0,Math.min(Xw,t)),iT.position.y=Xw,window.clickedMesh&&(window.clickedMesh.position.y=window.clickedMesh.userData.currentY+Xw),Fw.uniforms.uOffset.value.set(-qw*.2/200,(Jw-Xw)*.2/200)}}),window.addEventListener(`pointerup`,e=>{if(window.activeScene===`gallery`){if(rT=!1,eT.x=e.clientX/window.innerWidth*2-1,eT.y=-(e.clientY/window.innerHeight)*2+1,!Zw&&!Yw){$w.setFromCamera(eT,jw);let e=$w.intersectObjects(Gw);e.length>0&&sT(e[0].object)}setTimeout(()=>Zw=!1,0)}});function sT(e){Yw=!0,window.clickedMesh=e,Q.to(oT,{opacity:0,duration:.5,onComplete:()=>{oT.innerHTML=`&times; Voltar ao Grid`,Q.to(oT,{opacity:1,duration:.5})}}),Gw.forEach(t=>{t===e?Q.to(t.material.color,{r:1,g:1,b:1,duration:1}):Q.to(t.material,{opacity:0,duration:1})});let t=e.userData.currentX,n=-e.userData.currentY,r=Bw?.9:.6,i=window.innerWidth*r/Vw,a=window.innerHeight*r/Hw,o=Math.min(i,a),s={ox:qw,oy:Jw,zoom:1};Q.to(s,{ox:qw-t,oy:Jw-n,zoom:o,duration:1.5,ease:`power3.inOut`,onUpdate:()=>{qw=s.ox,Jw=s.oy,Qw(),jw.zoom=s.zoom,jw.updateProjectionMatrix()},onComplete:()=>{Xw=0,iT.position.y=0;let e=-Uw;Lw.forEach((t,n)=>{let r=Mw.load(t,e=>{let t=e.image.width/e.image.height;t>1?(e.repeat.set(1/t,1),e.offset.set((1-1/t)/2,0)):(e.repeat.set(1,t/1),e.offset.set(0,(1-t/1)/2))});r.colorSpace=Ie;let i=new kr({map:r,transparent:!0,opacity:0}),a=new Vr(new xa(Vw,Hw),i);a.position.set(0,e,0),iT.add(a),aT.push(a),Q.to(i,{opacity:1,duration:1,delay:n*.1}),e-=Uw})}})}window.addEventListener(`enterGalleryScene`,()=>{oT.style.display=`block`,Q.fromTo(oT,{opacity:0},{opacity:1,duration:1})}),window.addEventListener(`exitGalleryScene`,()=>{Q.to(oT,{opacity:0,duration:.5,onComplete:()=>oT.style.display=`none`})});var cT=class e extends Vr{constructor(t,n={}){super(t),this.isReflector=!0,this.type=`Reflector`,this.forceUpdate=!1,this._reflectionCameras=new WeakMap;let r=this,i=n.color===void 0?new gn(8355711):new gn(n.color),a=n.textureWidth||512,o=n.textureHeight||512,s=n.clipBias||0,c=n.shader||e.ReflectorShader,l=n.multisample===void 0?4:n.multisample,u=new Jr,d=new U,f=new U,p=new U,m=new Pt,h=new U(0,0,-1),_=new kt,v=new U,y=new U,b=new kt,x=new Pt,S=new jt(a,o,{samples:l,type:g}),C=new Aa({name:c.name===void 0?`unspecified`:c.name,uniforms:Da.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});C.uniforms.tDiffuse.value=S.texture,C.uniforms.color.value=i,C.uniforms.textureMatrix.value=x,this.material=C,this.onBeforeRender=function(e,t,n){let i=this._getReflectionCamera(n);if(f.setFromMatrixPosition(r.matrixWorld),p.setFromMatrixPosition(n.matrixWorld),m.extractRotation(r.matrixWorld),d.set(0,0,1),d.applyMatrix4(m),v.subVectors(f,p),v.dot(d)>0&&this.forceUpdate===!1)return;v.reflect(d).negate(),v.add(f),m.extractRotation(n.matrixWorld),h.set(0,0,-1),h.applyMatrix4(m),h.add(p),y.subVectors(f,h),y.reflect(d).negate(),y.add(f),i.position.copy(v),i.up.set(0,1,0),i.up.applyMatrix4(m),i.up.reflect(d),i.lookAt(y),i.far=n.far,i.updateMatrixWorld(),i.projectionMatrix.copy(n.projectionMatrix),x.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),x.multiply(i.projectionMatrix),x.multiply(i.matrixWorldInverse),x.multiply(r.matrixWorld),u.setFromNormalAndCoplanarPoint(d,f),u.applyMatrix4(i.matrixWorldInverse),_.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let a=i.projectionMatrix;i.isOrthographicCamera?(b.x=(Math.sign(_.x)+a.elements[8])/a.elements[0],b.y=(Math.sign(_.y)+a.elements[9])/a.elements[5],b.z=-n.far,b.w=1):(b.x=(Math.sign(_.x)+a.elements[8])/a.elements[0],b.y=(Math.sign(_.y)+a.elements[9])/a.elements[5],b.z=-1,b.w=(1+a.elements[10])/a.elements[14]),_.multiplyScalar(2/_.dot(b)),a.elements[2]=_.x,a.elements[6]=_.y,i.isOrthographicCamera?(a.elements[10]=_.z-s,a.elements[14]=_.w-1):(a.elements[10]=_.z+1-s,a.elements[14]=_.w),r.visible=!1;let o=e.getRenderTarget(),c=e.xr.enabled,l=e.shadowMap.autoUpdate;e.xr.enabled=!1,e.shadowMap.autoUpdate=!1,e.setRenderTarget(S),e.state.buffers.depth.setMask(!0),e.autoClear===!1&&e.clear(),e.render(t,i),e.xr.enabled=c,e.shadowMap.autoUpdate=l,e.setRenderTarget(o);let g=n.viewport;g!==void 0&&e.state.viewport(g),r.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return S},this.dispose=function(){S.dispose(),r.material.dispose()},this._getReflectionCamera=function(e){let t=this._reflectionCameras.get(e);return t===void 0&&(t=e.clone(),this._reflectionCameras.set(e,t)),t}}};cT.ReflectorShader={name:`ReflectorShader`,uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function lT(e){let t=new xa(50,50),n={name:`WaterReflectorShader`,uniforms:Da.clone(cT.ReflectorShader.uniforms),vertexShader:cT.ReflectorShader.vertexShader,fragmentShader:cT.ReflectorShader.fragmentShader};n.uniforms.time={value:0},n.uniforms.waveStrength={value:.015},n.uniforms.waveSpeed={value:1.5},n.uniforms.fadeStrength={value:.05},n.fragmentShader=n.fragmentShader.replace(`uniform sampler2D tDiffuse;`,`uniform sampler2D tDiffuse;
uniform float time;
uniform float waveStrength;
uniform float waveSpeed;
uniform float fadeStrength;`),n.fragmentShader=n.fragmentShader.replace(`vec4 base = texture2DProj( tDiffuse, vUv );`,`
    vec2 distortedUv = vUv.xy / vUv.w;
    
    // Simple procedural water distortion using sine waves
    float distortionX = sin(distortedUv.y * 30.0 + time * waveSpeed) * waveStrength;
    float distortionY = cos(distortedUv.x * 30.0 + time * waveSpeed) * waveStrength;
    
    distortedUv.x += distortionX;
    distortedUv.y += distortionY;
    
    vec4 base = texture2D( tDiffuse, distortedUv );
    
    // Fade out reflection towards the bottom of the screen
    // distortedUv.y goes from 0.0 (bottom) to 1.0 (top)
    // fadeStrength is dynamically controlled: stronger on mobile, weaker on desktop
    float fade = smoothstep(0.0, fadeStrength, distortedUv.y);
    base.rgb = mix(color, base.rgb, fade);
    `);let r=new cT(t,{clipBias:.003,textureWidth:512,textureHeight:512,color:16777215,shader:n});return r.rotation.x=-Math.PI/2,r.position.y=-1.5,e.add(r),r}function uT(){let e,t=120*Math.PI/180;window.addEventListener(`wheel`,t=>{if(aw){let r=lw.angle+t.deltaY*$.scrollSensitivity;Q.to(lw,{angle:r,duration:.5,ease:`power2.out`,overwrite:`auto`}),clearTimeout(e),e=setTimeout(()=>{n()},150)}else{let n=lw.offsetX-t.deltaY*$.flatScrollSensitivity;Q.to(lw,{offsetX:n,duration:.5,ease:`power2.out`,overwrite:`auto`}),clearTimeout(e),e=setTimeout(()=>{r()},150)}});function n(){let e=Math.round(lw.angle/t)*t;Q.to(lw,{angle:e,duration:1,ease:`power3.out`,overwrite:`auto`})}function r(){let e=Math.round(lw.offsetX/fw)*fw;Q.to(lw,{offsetX:e,duration:1,ease:`power3.out`,overwrite:`auto`})}let i=!1,a=0,o=0,s=0;window.addEventListener(`pointerdown`,t=>{t.target.tagName===`CANVAS`&&(i=!0,a=t.clientX,o=0,clearTimeout(e))}),window.addEventListener(`pointermove`,e=>{if(!i)return;let t=e.clientX-a,n=performance.now();o=t/Math.max(1,n-s);let r=.002;aw?(lw.angle+=t*r,Q.to(lw,{angle:lw.angle,duration:0,overwrite:`auto`})):(lw.offsetX-=t*r*5,Q.to(lw,{offsetX:lw.offsetX,duration:0,overwrite:`auto`})),a=e.clientX,s=n});let c=()=>{if(!i)return;i=!1;let e=.002;if(aw){let n=lw.angle+o*e*250,r=Math.round(n/t)*t;Q.to(lw,{angle:r,duration:.8,ease:`power3.out`,overwrite:`auto`})}else{let t=lw.offsetX-o*e*5*250,n=Math.round(t/fw)*fw;Q.to(lw,{offsetX:n,duration:.8,ease:`power3.out`,overwrite:`auto`})}};window.addEventListener(`pointerup`,c),window.addEventListener(`pointerleave`,c)}function dT(e,t,n){let r=new H,i=new Ko,a=new So(16777198,0,5,2);e.add(a);let o=0;window.addEventListener(`mousemove`,e=>{if(window.activeScene!==`main`)return;r.x=e.clientX/window.innerWidth*2-1,r.y=-(e.clientY/window.innerHeight)*2+1,o=r.y*.05,r.x*.1,Q.to(n.rotation,{x:o,z:-r.x*.02,duration:.5,ease:`power2.out`}),i.setFromCamera(r,t);let s=i.intersectObjects(n.children,!0).find(e=>e.object.userData.isScreen);if(s){let e=s.face.normal.clone().multiplyScalar(.2),t=s.point.clone().add(e);a.position.copy(t),Q.to(a,{intensity:4,duration:.2}),document.body.style.cursor=`pointer`}else Q.to(a,{intensity:0,duration:.5}),document.body.style.cursor=`default`});let s=0,c=0;window.addEventListener(`pointerdown`,e=>{window.activeScene===`main`&&(s=e.clientX,c=e.clientY)}),window.addEventListener(`pointerup`,e=>{if(window.activeScene!==`main`||Math.hypot(e.clientX-s,e.clientY-c)>5)return;r.x=e.clientX/window.innerWidth*2-1,r.y=-(e.clientY/window.innerHeight)*2+1,i.setFromCamera(r,t);let a=i.intersectObjects(n.children,!0).find(e=>e.object.userData.isScreen);if(a){let e=a.object.userData.screenIndex;e===0&&window.dispatchEvent(new CustomEvent(`enterProjectGallery`,{detail:{index:e,point:a.point}}))}})}var fT=class e{constructor(t,n,r,i,a=`div`){this.parent=t,this.object=n,this.property=r,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(a),this.domElement.classList.add(`lil-controller`),this.domElement.classList.add(i),this.$name=document.createElement(`div`),this.$name.classList.add(`lil-name`),e.nextNameID=e.nextNameID||0,this.$name.id=`lil-gui-name-${++e.nextNameID}`,this.$widget=document.createElement(`div`),this.$widget.classList.add(`lil-widget`),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener(`keydown`,e=>e.stopPropagation()),this.domElement.addEventListener(`keyup`,e=>e.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(r)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle(`lil-disabled`,e),this.$disable.toggleAttribute(`disabled`,e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}options(e){let t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}},pT=class extends fT{constructor(e,t,n){super(e,t,n,`lil-boolean`,`label`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`checkbox`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener(`change`,()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function mT(e){let t,n;return(t=e.match(/(#|0x)?([a-f0-9]{6})/i))?n=t[2]:(t=e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?n=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(n=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),n?`#`+n:!1}var hT={isPrimitive:!0,match:e=>typeof e==`string`,fromHexString:mT,toHexString:mT},gT={isPrimitive:!0,match:e=>typeof e==`number`,fromHexString:e=>parseInt(e.substring(1),16),toHexString:e=>`#`+e.toString(16).padStart(6,0)},_T=[hT,gT,{isPrimitive:!1,match:e=>Array.isArray(e)||ArrayBuffer.isView(e),fromHexString(e,t,n=1){let r=gT.fromHexString(e);t[0]=(r>>16&255)/255*n,t[1]=(r>>8&255)/255*n,t[2]=(r&255)/255*n},toHexString([e,t,n],r=1){r=255/r;let i=e*r<<16^t*r<<8^n*r<<0;return gT.toHexString(i)}},{isPrimitive:!1,match:e=>Object(e)===e,fromHexString(e,t,n=1){let r=gT.fromHexString(e);t.r=(r>>16&255)/255*n,t.g=(r>>8&255)/255*n,t.b=(r&255)/255*n},toHexString({r:e,g:t,b:n},r=1){r=255/r;let i=e*r<<16^t*r<<8^n*r<<0;return gT.toHexString(i)}}];function vT(e){return _T.find(t=>t.match(e))}var yT=class extends fT{constructor(e,t,n,r){super(e,t,n,`lil-color`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`color`),this.$input.setAttribute(`tabindex`,-1),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$text=document.createElement(`input`),this.$text.setAttribute(`type`,`text`),this.$text.setAttribute(`spellcheck`,`false`),this.$text.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`lil-display`),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=vT(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener(`input`,()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$text.addEventListener(`input`,()=>{let e=mT(this.$text.value);e&&this._setValueFromHexString(e)}),this.$text.addEventListener(`focus`,()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener(`blur`,()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){let t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}},bT=class extends fT{constructor(e,t,n){super(e,t,n,`lil-function`),this.$button=document.createElement(`button`),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener(`click`,e=>{e.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$disable=this.$button}},xT=class extends fT{constructor(e,t,n,r,i,a){super(e,t,n,`lil-number`),this._initInput(),this.min(r),this.max(i);let o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){let e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+`%`}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),window.matchMedia(`(pointer: coarse)`).matches&&(this.$input.setAttribute(`type`,`number`),this.$input.setAttribute(`step`,`any`)),this.$widget.appendChild(this.$input),this.$disable=this.$input;let e=()=>{let e=parseFloat(this.$input.value);isNaN(e)||(this._stepExplicit&&(e=this._snap(e)),this.setValue(this._clamp(e)))},t=e=>{let t=parseFloat(this.$input.value);isNaN(t)||(this._snapClampSetValue(t+e),this.$input.value=this.getValue())},n=e=>{e.key===`Enter`&&this.$input.blur(),e.code===`ArrowUp`&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e))),e.code===`ArrowDown`&&(e.preventDefault(),t(this._step*this._arrowKeyMultiplier(e)*-1))},r=e=>{this._inputFocused&&(e.preventDefault(),t(this._step*this._normalizeMouseWheel(e)))},i=!1,a,o,s,c,l,u=e=>{a=e.clientX,o=s=e.clientY,i=!0,c=this.getValue(),l=0,window.addEventListener(`mousemove`,d),window.addEventListener(`mouseup`,f)},d=e=>{if(i){let t=e.clientX-a,n=e.clientY-o;Math.abs(n)>5?(e.preventDefault(),this.$input.blur(),i=!1,this._setDraggingStyle(!0,`vertical`)):Math.abs(t)>5&&f()}if(!i){let t=e.clientY-s;l-=t*this._step*this._arrowKeyMultiplier(e),c+l>this._max?l=this._max-c:c+l<this._min&&(l=this._min-c),this._snapClampSetValue(c+l)}s=e.clientY},f=()=>{this._setDraggingStyle(!1,`vertical`),this._callOnFinishChange(),window.removeEventListener(`mousemove`,d),window.removeEventListener(`mouseup`,f)};this.$input.addEventListener(`input`,e),this.$input.addEventListener(`keydown`,n),this.$input.addEventListener(`wheel`,r,{passive:!1}),this.$input.addEventListener(`mousedown`,u),this.$input.addEventListener(`focus`,()=>{this._inputFocused=!0}),this.$input.addEventListener(`blur`,()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement(`div`),this.$slider.classList.add(`lil-slider`),this.$fill=document.createElement(`div`),this.$fill.classList.add(`lil-fill`),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add(`lil-has-slider`);let e=(e,t,n,r,i)=>(e-t)/(n-t)*(i-r)+r,t=t=>{let n=this.$slider.getBoundingClientRect(),r=e(t,n.left,n.right,this._min,this._max);this._snapClampSetValue(r)},n=e=>{this._setDraggingStyle(!0),t(e.clientX),window.addEventListener(`mousemove`,r),window.addEventListener(`mouseup`,i)},r=e=>{t(e.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`mousemove`,r),window.removeEventListener(`mouseup`,i)},a=!1,o,s,c=e=>{e.preventDefault(),this._setDraggingStyle(!0),t(e.touches[0].clientX),a=!1},l=e=>{e.touches.length>1||(this._hasScrollBar?(o=e.touches[0].clientX,s=e.touches[0].clientY,a=!0):c(e),window.addEventListener(`touchmove`,u,{passive:!1}),window.addEventListener(`touchend`,d))},u=e=>{if(a){let t=e.touches[0].clientX-o,n=e.touches[0].clientY-s;Math.abs(t)>Math.abs(n)?c(e):(window.removeEventListener(`touchmove`,u),window.removeEventListener(`touchend`,d))}else e.preventDefault(),t(e.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener(`touchmove`,u),window.removeEventListener(`touchend`,d)},f=this._callOnFinishChange.bind(this),p;this.$slider.addEventListener(`mousedown`,n),this.$slider.addEventListener(`touchstart`,l,{passive:!1}),this.$slider.addEventListener(`wheel`,e=>{if(Math.abs(e.deltaX)<Math.abs(e.deltaY)&&this._hasScrollBar)return;e.preventDefault();let t=this._normalizeMouseWheel(e)*this._step;this._snapClampSetValue(this.getValue()+t),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(f,400)},{passive:!1})}_setDraggingStyle(e,t=`horizontal`){this.$slider&&this.$slider.classList.toggle(`lil-active`,e),document.body.classList.toggle(`lil-dragging`,e),document.body.classList.toggle(`lil-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){let e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}},ST=class extends fT{constructor(e,t,n,r){super(e,t,n,`lil-option`),this.$select=document.createElement(`select`),this.$select.setAttribute(`aria-labelledby`,this.$name.id),this.$display=document.createElement(`div`),this.$display.classList.add(`lil-display`),this.$select.addEventListener(`change`,()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener(`focus`,()=>{this.$display.classList.add(`lil-focus`)}),this.$select.addEventListener(`blur`,()=>{this.$display.classList.remove(`lil-focus`)}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(e=>{let t=document.createElement(`option`);t.textContent=e,this.$select.appendChild(t)}),this.updateDisplay(),this}updateDisplay(){let e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}},CT=class extends fT{constructor(e,t,n){super(e,t,n,`lil-string`),this.$input=document.createElement(`input`),this.$input.setAttribute(`type`,`text`),this.$input.setAttribute(`spellcheck`,`false`),this.$input.setAttribute(`aria-labelledby`,this.$name.id),this.$input.addEventListener(`input`,()=>{this.setValue(this.$input.value)}),this.$input.addEventListener(`keydown`,e=>{e.code===`Enter`&&this.$input.blur()}),this.$input.addEventListener(`blur`,()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}},wT=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function TT(e){let t=document.createElement(`style`);t.innerHTML=e;let n=document.querySelector(`head link[rel=stylesheet], head style`);n?document.head.insertBefore(t,n):document.head.appendChild(t)}var ET=!1,DT=class e{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:r,title:i=`Controls`,closeFolders:a=!1,injectStyles:o=!0,touchStyles:s=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement(`div`),this.domElement.classList.add(`lil-gui`),this.$title=document.createElement(`button`),this.$title.classList.add(`lil-title`),this.$title.setAttribute(`aria-expanded`,!0),this.$title.addEventListener(`click`,()=>this.openAnimated(this._closed)),this.$title.addEventListener(`touchstart`,()=>{},{passive:!0}),this.$children=document.createElement(`div`),this.$children.classList.add(`lil-children`),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(i),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add(`lil-root`),s&&this.domElement.classList.add(`lil-allow-touch-styles`),!ET&&o&&(TT(wT),ET=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add(`lil-auto-place`,`autoPlace`),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty(`--width`,r+`px`),this._closeFolders=a}add(e,t,n,r,i){if(Object(n)===n)return new ST(this,e,t,n);let a=e[t];switch(typeof a){case`number`:return new xT(this,e,t,n,r,i);case`boolean`:return new pT(this,e,t);case`string`:return new CT(this,e,t);case`function`:return new bT(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new yT(this,e,t,n)}addFolder(t){let n=new e({parent:this,title:t});return this.root._closeFolders&&n.close(),n}load(e,t=!0){return e.controllers&&this.controllers.forEach(t=>{t instanceof bT||t._name in e.controllers&&t.load(e.controllers[t._name])}),t&&e.folders&&this.folders.forEach(t=>{t._title in e.folders&&t.load(e.folders[t._title])}),this}save(e=!0){let t={controllers:{},folders:{}};return this.controllers.forEach(e=>{if(!(e instanceof bT)){if(e._name in t.controllers)throw Error(`Cannot save GUI with duplicate property "${e._name}"`);t.controllers[e._name]=e.save()}}),e&&this.folders.forEach(e=>{if(e._title in t.folders)throw Error(`Cannot save GUI with duplicate folder "${e._title}"`);t.folders[e._title]=e.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute(`aria-expanded`,!this._closed),this.domElement.classList.toggle(`lil-closed`,this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?`none`:``,this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute(`aria-expanded`,!this._closed),requestAnimationFrame(()=>{let t=this.$children.clientHeight;this.$children.style.height=t+`px`,this.domElement.classList.add(`lil-transition`);let n=e=>{e.target===this.$children&&(this.$children.style.height=``,this.domElement.classList.remove(`lil-transition`),this.$children.removeEventListener(`transitionend`,n))};this.$children.addEventListener(`transitionend`,n);let r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle(`lil-closed`,!e),requestAnimationFrame(()=>{this.$children.style.height=r+`px`})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}};window.activeScene=`main`;var OT=document.getElementById(`app`),kT=new yn,AT=new bo(45,window.innerWidth/window.innerHeight,.1,100),jT={baseZ:6.1},MT={baseNear:7.1,baseFar:13.2};kT.fog=new vn(`#ffffff`,MT.baseNear,MT.baseFar);var NT={color:`#ffffff`},PT=null;function FT(){let e=window.innerWidth/window.innerHeight,t=jT.baseZ;e<1?(t=jT.baseZ/e*1.2,PT&&PT.material.uniforms.fadeStrength&&(PT.material.uniforms.fadeStrength.value=.5)):PT&&PT.material.uniforms.fadeStrength&&(PT.material.uniforms.fadeStrength.value=.05);let n=t-jT.baseZ;AT.position.z=t,kT.fog&&(kT.fog.near=MT.baseNear+n,kT.fog.far=MT.baseFar+n)}FT(),kT.add(AT);var IT=new mu({antialias:!0,alpha:!0});IT.setSize(window.innerWidth,window.innerHeight),IT.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),IT.toneMapping=0,kT.environmentIntensity=1.2,IT.shadowMap.enabled=!0,IT.shadowMap.type=1,IT.domElement.style.touchAction=`none`,IT.setClearColor($.bgColor,1),OT.appendChild(IT.domElement);var LT=new nd(IT),RT=new rd(Aw,jw);LT.addPass(RT);var zT=new $u({uniforms:{tDiffuse:{value:null},distortion:{value:.15},rgbShift:{value:.01}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float distortion;
    uniform float rgbShift;
    varying vec2 vUv;
    
    void main() {
      vec2 p = vUv - 0.5;
      float r2 = p.x * p.x + p.y * p.y;
      
      // Pre-scale p para que a distorção não ultrapasse as bordas da textura
      // O raio ao quadrado máximo é 0.5 (nos cantos). 
      float maxF = 1.0 + 0.5 * distortion;
      p = p / maxF;
      
      float f = 1.0 + r2 * distortion;
      vec2 uv = p * f + 0.5;
      
      vec2 rUv = p * (f + rgbShift * r2) + 0.5;
      vec2 bUv = p * (f - rgbShift * r2) + 0.5;
      
      float r = texture2D(tDiffuse, rUv).r;
      float g = texture2D(tDiffuse, uv).g;
      float b = texture2D(tDiffuse, bUv).b;
      
      gl_FragColor = vec4(r, g, b, 1.0);
    }
  `});LT.addPass(zT);var BT=new ad;LT.addPass(BT);var VT=null,HT=new xs(IT);HT.compileEquirectangularShader(),new qu().load(`./142_hdrmaps_com_free_1K.exr`,e=>{VT=HT.fromEquirectangular(e).texture,YT.useHDRI&&(kT.environment=VT),e.dispose()});var UT={color:16777215},WT=new Eo(UT.color,10.8);kT.add(WT);var GT={color:16777215},KT=new To(GT.color,0);KT.position.set(7.3,1.2,4.6),KT.castShadow=!0,KT.shadow.mapSize.width=512,KT.shadow.mapSize.height=512,kT.add(KT),Cw(kT),PT=lT(kT);var qT={color:16777215};FT(),uT(),dT(kT,AT,iw),document.getElementById(`toggle-fold`).addEventListener(`click`,()=>{Dw()});var JT=new DT({title:`Configurações do Ambiente`}),YT={useHDRI:!0,copySettings:()=>{let e={config:$,camera:{z:AT.position.z},ambient:{color:UT.color,intensity:WT.intensity},directional:{color:GT.color,intensity:KT.intensity,x:KT.position.x,y:KT.position.y,z:KT.position.z},fog:{color:NT.color,near:kT.fog.near,far:kT.fog.far},floor:{color:qT.color}},t=e=>typeof e==`string`?e:`#`+e.toString(16).padStart(6,`0`);e.ambient.color=t(e.ambient.color),e.directional.color=t(e.directional.color),e.fog.color=t(e.fog.color),e.floor.color=t(e.floor.color);let n=JSON.stringify(e,null,2);navigator.clipboard.writeText(n).then(()=>alert(`Configurações copiadas!
Agora é só colar no chat.`)).catch(e=>alert(`Erro ao copiar. Olhe o console.`))}};JT.add(YT,`copySettings`).name(`💾 Copiar Configurações`),JT.addFolder(`Cores do Site`).addColor($,`bgColor`).name(`Fundo do Site`).onChange(e=>{document.body.style.backgroundColor=e,IT.setClearColor(e,1)});var XT=JT.addFolder(`Animação e Scroll`);XT.add($,`foldDuration`,.5,5,.1).name(`Vel. de Abertura`),XT.add($,`scrollSensitivity`,.001,.01,.001).name(`Vel. Scroll Cilindro`),XT.add($,`flatScrollSensitivity`,.001,.03,.001).name(`Vel. Scroll Panorama`);var ZT=()=>{xw.forEach((e,t)=>{let n=e.mesh.material;t===0&&n.color.set($.faceColor1),t===1&&n.color.set($.faceColor2),t===2&&n.color.set($.faceColor3),n.transmission=$.transmission,n.opacity=$.opacity,n.metalness=$.metalness,n.roughness=$.roughness,n.ior=$.ior,n.thickness=$.thickness})},QT=JT.addFolder(`Visual das Telas de Vidro`);QT.addColor($,`faceColor1`).name(`Cor Tela 1`).onChange(ZT),QT.addColor($,`faceColor2`).name(`Cor Tela 2`).onChange(ZT),QT.addColor($,`faceColor3`).name(`Cor Tela 3`).onChange(ZT),QT.add($,`transmission`,0,1,.01).name(`Transmissão (Vidro)`).onChange(ZT),QT.add($,`opacity`,0,1,.01).name(`Opacidade Geral`).onChange(ZT),QT.add($,`metalness`,0,1,.01).name(`Metalizado`).onChange(ZT),QT.add($,`roughness`,0,1,.01).name(`Rugosidade (Fosco)`).onChange(ZT),QT.add($,`ior`,1,3,.01).name(`Índice de Refração`).onChange(ZT),QT.add($,`thickness`,0,2,.01).name(`Espessura`).onChange(ZT);var $T=()=>{cw.forEach(e=>{e.material.color.set($.frontTextColor),e.material.emissive.set($.frontTextEmissive),e.material.emissiveIntensity=$.frontTextEmissiveIntensity,e.material.transmission=$.frontTextTransmission,e.material.opacity=$.frontTextOpacity,e.material.metalness=$.frontTextMetalness,e.material.roughness=$.frontTextRoughness,e.material.ior=$.frontTextIor,e.material.thickness=$.frontTextThickness})},eE=()=>{cw.forEach(e=>{e.scale.set($.frontTextScaleX,$.frontTextScaleY,$.frontTextScaleZ)})},tE=JT.addFolder(`Visual do Texto 3D (Telas)`);tE.add($,`frontTextScaleX`,.1,3,.01).name(`Largura`).onChange(eE),tE.add($,`frontTextScaleY`,.1,3,.01).name(`Altura`).onChange(eE),tE.add($,`frontTextScaleZ`,.1,3,.01).name(`Profundidade`).onChange(eE),tE.addColor($,`frontTextColor`).name(`Cor`).onChange($T),tE.addColor($,`frontTextEmissive`).name(`Luz Própria (Emissive)`).onChange($T),tE.add($,`frontTextEmissiveIntensity`,0,2,.01).name(`Intensidade da Luz`).onChange($T),tE.add($,`frontTextTransmission`,0,1,.01).name(`Transmissão (Vidro)`).onChange($T),tE.add($,`frontTextOpacity`,0,1,.01).name(`Opacidade`).onChange($T),tE.add($,`frontTextMetalness`,0,1,.01).name(`Metalizado`).onChange($T),tE.add($,`frontTextRoughness`,0,1,.01).name(`Rugosidade (Fosco)`).onChange($T),tE.add($,`frontTextIor`,1,3,.01).name(`Índice de Refração`).onChange($T),tE.add($,`frontTextThickness`,0,2,.01).name(`Espessura`).onChange($T);var nE=JT.addFolder(`Física do Vidro`);nE.add($,`shatterPieces`,10,500,10).name(`Qtd. de Cacos`),nE.add($,`shatterForce`,.1,10,.1).name(`Força da Explosão`),nE.add($,`shatterGravity`,0,10,.1).name(`Força da Gravidade`),nE.add($,`shatterDuration`,.1,5,.1).name(`Duração da Queda`),JT.addFolder(`Camera`).add(jT,`baseZ`,2,20,.1).name(`Zoom (Z)`).onChange(FT);var rE=JT.addFolder(`Luzes`);rE.add(kT,`environmentIntensity`,0,5,.1).name(`Brilho do HDRI`),rE.add(YT,`useHDRI`).name(`Ativar HDRI (Reflexos)`).onChange(e=>{kT.environment=e?VT:null}),rE.addColor(UT,`color`).name(`Cor Ambiente`).onChange(e=>WT.color.setHex(e)),rE.add(WT,`intensity`,0,20,.1).name(`Intensidade Ambiente`),rE.addColor(GT,`color`).name(`Cor Direcional`).onChange(e=>KT.color.setHex(e)),rE.add(KT,`intensity`,0,10,.1).name(`Intens. Direcional`),rE.add(KT.position,`x`,-10,10,.1).name(`Posição X`),rE.add(KT.position,`y`,-10,20,.1).name(`Posição Y`),rE.add(KT.position,`z`,-10,10,.1).name(`Posição Z`);var iE=JT.addFolder(`Névoa (Fog)`);iE.addColor(NT,`color`).name(`Cor da Névoa`).onChange(e=>kT.fog.color.setHex(e)),iE.add(MT,`baseNear`,1,30,.1).name(`Início`).onChange(FT),iE.add(MT,`baseFar`,5,80,.1).name(`Fim`).onChange(FT);var aE=JT.addFolder(`Piso / Reflexo (Água)`);aE.addColor(qT,`color`).name(`Cor do Reflexo`).onChange(e=>PT.material.uniforms.color.value.setHex(e)),aE.add($,`waveStrength`,0,.1,.001).name(`Força da Onda`),aE.add($,`waveSpeed`,0,5,.1).name(`Velocidade da Onda`),window.addEventListener(`resize`,()=>{let e=window.innerWidth,t=window.innerHeight;AT.aspect=e/t,AT.updateProjectionMatrix(),IT.setSize(e,t),LT.setSize(e,t),FT(),IT.render(kT,AT)});var oE=new jo;window.addEventListener(`enterProjectGallery`,e=>{Q.to(AT.position,{z:1,duration:1.5,ease:`power3.inOut`});let t=document.getElementById(`transition-layer`);Q.to(t,{opacity:1,duration:1,delay:.5,onComplete:()=>{window.activeScene=`gallery`,window.dispatchEvent(new CustomEvent(`enterGalleryScene`)),Q.to(t,{opacity:0,duration:1})}})}),window.addEventListener(`exitGalleryScene`,e=>{let t=document.getElementById(`transition-layer`);Q.to(t,{opacity:1,duration:1,onComplete:()=>{window.activeScene=`main`;let e=window.innerWidth/window.innerHeight,n=jT.baseZ;e<1&&(n=jT.baseZ/e*1.2),Q.to(AT.position,{z:n,duration:1.5,ease:`power3.out`,onUpdate:()=>{if(kT.fog){let e=AT.position.z-jT.baseZ;kT.fog.near=MT.baseNear+e,kT.fog.far=MT.baseFar+e}}}),Q.to(t,{opacity:0,duration:1})}})});function sE(){requestAnimationFrame(sE),oE.update(),oE.getElapsed();let e=oE.getDelta();window.activeScene===`main`&&(kw(),PT&&PT.material.uniforms&&(PT.material.uniforms.time.value+=e,PT.material.uniforms.waveStrength.value=$.waveStrength,PT.material.uniforms.waveSpeed.value=$.waveSpeed)),window.activeScene===`main`?IT.render(kT,AT):LT.render()}sE();
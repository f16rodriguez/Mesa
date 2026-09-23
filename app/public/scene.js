var iK="186",z8={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},C8={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},oK=0,JZ=1,aK=2;var R6=1,TQ=2,j7=3,P8=0,$9=1,Y9=2,c9=0,L6=1,QZ=2,$Z=3,ZZ=4,rK=5;var y7=100,tK=101,eK=102,JH=103,QH=104,$H=200,ZH=201,WH=202,KH=203,HH=204,YH=205,XH=206,UH=207,GH=208,NH=209,EH=210,qH=211,FH=212,OH=213,RH=214,LH=0,VH=1,kH=2,WZ=3,DH=4,BH=5,MH=6,zH=7,CH=0,PH=1,IH=2,h9=0,KZ=1,HZ=2,YZ=3,V6=4,XZ=5,UZ=6,GZ=7;var v7=301,i8=302,SQ=303,jQ=304,k6=306,I8=1000,f7=1001,yQ=1002,b9=1003,vQ=1004;var o8=1005;var rJ=1006,h7=1007;var n9=1008;var x9=1009,_H=1010,AH=1011,D6=1012,NZ=1013,_8=1014,H8=1015,s9=1016,EZ=1017,qZ=1018,b7=1020,wH=35902,TH=35899,SH=1021,jH=1022,i9=1023,a8=1026,r8=1027,yH=1028,FZ=1029,t8=1030,OZ=1031;var RZ=1033,fQ=33776,hQ=33777,bQ=33778,xQ=33779,LZ=35840,VZ=35841,kZ=35842,DZ=35843,BZ=36196,MZ=37492,zZ=37496,CZ=37488,PZ=37489,gQ=37490,IZ=37491,_Z=37808,AZ=37809,wZ=37810,TZ=37811,SZ=37812,jZ=37813,yZ=37814,vZ=37815,fZ=37816,hZ=37817,bZ=37818,xZ=37819,gZ=37820,pZ=37821,lZ=36492,mZ=36494,dZ=36495,uZ=36283,cZ=36284,pQ=36285,nZ=36286;var sZ=2300,lQ=2301;var iZ=0,B6=1,x7=2;var oZ=0,vH=1,e8="",g9="srgb",F9="srgb-linear",aZ="linear",PJ="srgb";var fH=512,hH=513,bH=514,mQ=515,xH=516,gH=517,dQ=518,pH=519;var rZ="300 es",tZ=2000;function yX(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function vX(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function A7(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function lH(){let J=A7("canvas");return J.style.display="block",J}var KK={},w7=null;function E6(...J){let Q="THREE."+J.shift();if(w7)w7("log",Q,...J);else console.log(Q,...J)}function mH(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function y0(...J){J=mH(J);let Q="THREE."+J.shift();if(w7)w7("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function u0(...J){J=mH(J);let Q="THREE."+J.shift();if(w7)w7("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function c8(...J){let Q=J.join(" ");if(Q in KK)return;KK[Q]=!0,y0(...J)}function dH(J,Q,$){return new Promise(function(Z,W){function K(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(K,$);break;default:Z()}}setTimeout(K,$)})}var uH={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class p9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let W=Z.indexOf(Q);if(W!==-1)Z.splice(W,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let W=0,K=Z.length;W<K;W++)Z[W].call(this,J);J.target=null}}}var J9=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],HK=1234567,X6=Math.PI/180,n8=180/Math.PI;function I9(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(J9[J&255]+J9[J>>8&255]+J9[J>>16&255]+J9[J>>24&255]+"-"+J9[Q&255]+J9[Q>>8&255]+"-"+J9[Q>>16&15|64]+J9[Q>>24&255]+"-"+J9[$&63|128]+J9[$>>8&255]+"-"+J9[$>>16&255]+J9[$>>24&255]+J9[Z&255]+J9[Z>>8&255]+J9[Z>>16&255]+J9[Z>>24&255]).toLowerCase()}function o0(J,Q,$){return Math.max(Q,Math.min($,J))}function eZ(J,Q){return(J%Q+Q)%Q}function fX(J,Q,$,Z,W){return Z+(J-Q)*(W-Z)/($-Q)}function hX(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function U6(J,Q,$){return(1-$)*J+$*Q}function bX(J,Q,$,Z){return U6(J,Q,1-Math.exp(-$*Z))}function xX(J,Q=1){return Q-Math.abs(eZ(J,Q*2)-Q)}function gX(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function pX(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function lX(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function mX(J,Q){return J+Math.random()*(Q-J)}function dX(J){return J*(0.5-Math.random())}function uX(J){if(J!==void 0)HK=J;let Q=HK+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function cX(J){return J*X6}function nX(J){return J*n8}function sX(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function iX(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function oX(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function aX(J,Q,$,Z,W){let{cos:K,sin:H}=Math,Y=K($/2),X=H($/2),U=K((Q+Z)/2),N=H((Q+Z)/2),E=K((Q-Z)/2),G=H((Q-Z)/2),q=K((Z-Q)/2),R=H((Z-Q)/2);switch(W){case"XYX":J.set(Y*N,X*E,X*G,Y*U);break;case"YZY":J.set(X*G,Y*N,X*E,Y*U);break;case"ZXZ":J.set(X*E,X*G,Y*N,Y*U);break;case"XZX":J.set(Y*N,X*R,X*q,Y*U);break;case"YXY":J.set(X*q,Y*N,X*R,Y*U);break;case"ZYZ":J.set(X*R,X*q,Y*N,Y*U);break;default:y0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function f9(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:case Uint8ClampedArray:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function kJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var A8={DEG2RAD:X6,RAD2DEG:n8,generateUUID:I9,clamp:o0,euclideanModulo:eZ,mapLinear:fX,inverseLerp:hX,lerp:U6,damp:bX,pingpong:xX,smoothstep:gX,smootherstep:pX,randInt:lX,randFloat:mX,randFloatSpread:dX,seededRandom:uX,degToRad:cX,radToDeg:nX,isPowerOfTwo:sX,ceilPowerOfTwo:iX,floorPowerOfTwo:oX,setQuaternionFromProperEuler:aX,normalize:kJ,denormalize:f9};class H0{static{H0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=o0(this.x,J.x,Q.x),this.y=o0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=o0(this.x,J,Q),this.y=o0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(o0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(o0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=this.x-J.x,K=this.y-J.y;return this.x=W*$-K*Z+J.x,this.y=W*Z+K*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class RJ{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,W,K,H){let Y=$[Z+0],X=$[Z+1],U=$[Z+2],N=$[Z+3],E=W[K+0],G=W[K+1],q=W[K+2],R=W[K+3];if(N!==R||Y!==E||X!==G||U!==q){let k=Y*E+X*G+U*q+N*R;if(k<0)E=-E,G=-G,q=-q,R=-R,k=-k;let O=1-H;if(k<0.9995){let F=Math.acos(k),P=Math.sin(F);O=Math.sin(O*F)/P,H=Math.sin(H*F)/P,Y=Y*O+E*H,X=X*O+G*H,U=U*O+q*H,N=N*O+R*H}else{Y=Y*O+E*H,X=X*O+G*H,U=U*O+q*H,N=N*O+R*H;let F=1/Math.sqrt(Y*Y+X*X+U*U+N*N);Y*=F,X*=F,U*=F,N*=F}}J[Q]=Y,J[Q+1]=X,J[Q+2]=U,J[Q+3]=N}static multiplyQuaternionsFlat(J,Q,$,Z,W,K){let H=$[Z],Y=$[Z+1],X=$[Z+2],U=$[Z+3],N=W[K],E=W[K+1],G=W[K+2],q=W[K+3];return J[Q]=H*q+U*N+Y*G-X*E,J[Q+1]=Y*q+U*E+X*N-H*G,J[Q+2]=X*q+U*G+H*E-Y*N,J[Q+3]=U*q-H*N-Y*E-X*G,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:W,_order:K}=J,H=Math.cos,Y=Math.sin,X=H($/2),U=H(Z/2),N=H(W/2),E=Y($/2),G=Y(Z/2),q=Y(W/2);switch(K){case"XYZ":this._x=E*U*N+X*G*q,this._y=X*G*N-E*U*q,this._z=X*U*q+E*G*N,this._w=X*U*N-E*G*q;break;case"YXZ":this._x=E*U*N+X*G*q,this._y=X*G*N-E*U*q,this._z=X*U*q-E*G*N,this._w=X*U*N+E*G*q;break;case"ZXY":this._x=E*U*N-X*G*q,this._y=X*G*N+E*U*q,this._z=X*U*q+E*G*N,this._w=X*U*N-E*G*q;break;case"ZYX":this._x=E*U*N-X*G*q,this._y=X*G*N+E*U*q,this._z=X*U*q-E*G*N,this._w=X*U*N+E*G*q;break;case"YZX":this._x=E*U*N+X*G*q,this._y=X*G*N+E*U*q,this._z=X*U*q-E*G*N,this._w=X*U*N-E*G*q;break;case"XZY":this._x=E*U*N-X*G*q,this._y=X*G*N-E*U*q,this._z=X*U*q+E*G*N,this._w=X*U*N+E*G*q;break;default:y0("Quaternion: .setFromEuler() encountered an unknown order: "+K)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],W=Q[8],K=Q[1],H=Q[5],Y=Q[9],X=Q[2],U=Q[6],N=Q[10],E=$+H+N;if(E>0){let G=0.5/Math.sqrt(E+1);this._w=0.25/G,this._x=(U-Y)*G,this._y=(W-X)*G,this._z=(K-Z)*G}else if($>H&&$>N){let G=2*Math.sqrt(1+$-H-N);this._w=(U-Y)/G,this._x=0.25*G,this._y=(Z+K)/G,this._z=(W+X)/G}else if(H>N){let G=2*Math.sqrt(1+H-$-N);this._w=(W-X)/G,this._x=(Z+K)/G,this._y=0.25*G,this._z=(Y+U)/G}else{let G=2*Math.sqrt(1+N-$-H);this._w=(K-Z)/G,this._x=(W+X)/G,this._y=(Y+U)/G,this._z=0.25*G}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(o0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:W,_w:K}=J,H=Q._x,Y=Q._y,X=Q._z,U=Q._w;return this._x=$*U+K*H+Z*X-W*Y,this._y=Z*U+K*Y+W*H-$*X,this._z=W*U+K*X+$*Y-Z*H,this._w=K*U-$*H-Z*Y-W*X,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:Z,_z:W,_w:K}=J,H=this.dot(J);if(H<0)$=-$,Z=-Z,W=-W,K=-K,H=-H;let Y=1-Q;if(H<0.9995){let X=Math.acos(H),U=Math.sin(X);Y=Math.sin(Y*X)/U,Q=Math.sin(Q*X)/U,this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+W*Q,this._w=this._w*Y+K*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+W*Q,this._w=this._w*Y+K*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),W=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{static{w.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(YK.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(YK.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6]*Z,this.y=W[1]*Q+W[4]*$+W[7]*Z,this.z=W[2]*Q+W[5]*$+W[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements,K=1/(W[3]*Q+W[7]*$+W[11]*Z+W[15]);return this.x=(W[0]*Q+W[4]*$+W[8]*Z+W[12])*K,this.y=(W[1]*Q+W[5]*$+W[9]*Z+W[13])*K,this.z=(W[2]*Q+W[6]*$+W[10]*Z+W[14])*K,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,W=J.x,K=J.y,H=J.z,Y=J.w,X=2*(K*Z-H*$),U=2*(H*Q-W*Z),N=2*(W*$-K*Q);return this.x=Q+Y*X+K*N-H*U,this.y=$+Y*U+H*X-W*N,this.z=Z+Y*N+W*U-K*X,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z,this.y=W[1]*Q+W[5]*$+W[9]*Z,this.z=W[2]*Q+W[6]*$+W[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=o0(this.x,J.x,Q.x),this.y=o0(this.y,J.y,Q.y),this.z=o0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=o0(this.x,J,Q),this.y=o0(this.y,J,Q),this.z=o0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(o0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:W}=J,K=Q.x,H=Q.y,Y=Q.z;return this.x=Z*Y-W*H,this.y=W*K-$*Y,this.z=$*H-Z*K,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return z$.copy(this).projectOnVector(J),this.sub(z$)}reflect(J){return this.sub(z$.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(o0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var z$=new w,YK=new RJ;class s0{static{s0.prototype.isMatrix3=!0}constructor(J,Q,$,Z,W,K,H,Y,X){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,K,H,Y,X)}set(J,Q,$,Z,W,K,H,Y,X){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=H,U[3]=Q,U[4]=W,U[5]=Y,U[6]=$,U[7]=K,U[8]=X,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,K=$[0],H=$[3],Y=$[6],X=$[1],U=$[4],N=$[7],E=$[2],G=$[5],q=$[8],R=Z[0],k=Z[3],O=Z[6],F=Z[1],P=Z[4],B=Z[7],L=Z[2],z=Z[5],_=Z[8];return W[0]=K*R+H*F+Y*L,W[3]=K*k+H*P+Y*z,W[6]=K*O+H*B+Y*_,W[1]=X*R+U*F+N*L,W[4]=X*k+U*P+N*z,W[7]=X*O+U*B+N*_,W[2]=E*R+G*F+q*L,W[5]=E*k+G*P+q*z,W[8]=E*O+G*B+q*_,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8];return Q*K*U-Q*H*X-$*W*U+$*H*Y+Z*W*X-Z*K*Y}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],N=U*K-H*X,E=H*Y-U*W,G=X*W-K*Y,q=Q*N+$*E+Z*G;if(q===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/q;return J[0]=N*R,J[1]=(Z*X-U*$)*R,J[2]=(H*$-Z*K)*R,J[3]=E*R,J[4]=(U*Q-Z*Y)*R,J[5]=(Z*W-H*Q)*R,J[6]=G*R,J[7]=($*Y-X*Q)*R,J[8]=(K*Q-$*W)*R,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,W,K,H){let Y=Math.cos(W),X=Math.sin(W);return this.set($*Y,$*X,-$*(Y*K+X*H)+K+J,-Z*X,Z*Y,-Z*(-X*K+Y*H)+H+Q,0,0,1),this}scale(J,Q){return c8("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(C$.makeScale(J,Q)),this}rotate(J){return c8("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(C$.makeRotation(-J)),this}translate(J,Q){return c8("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(C$.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var C$=new s0,XK=new s0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),UK=new s0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function rX(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,K,H){if(this.enabled===!1||K===H||!K||!H)return W;if(this.spaces[K].transfer==="srgb")W.r=K8(W.r),W.g=K8(W.g),W.b=K8(W.b);if(this.spaces[K].primaries!==this.spaces[H].primaries)W.applyMatrix3(this.spaces[K].toXYZ),W.applyMatrix3(this.spaces[H].fromXYZ);if(this.spaces[H].transfer==="srgb")W.r=I7(W.r),W.g=I7(W.g),W.b=I7(W.b);return W},workingToColorSpace:function(W,K){return this.convert(W,this.workingColorSpace,K)},colorSpaceToWorking:function(W,K){return this.convert(W,K,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getToneMappingMode:function(W){return this.spaces[W].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(W,K=this.workingColorSpace){return W.fromArray(this.spaces[K].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,K,H){return W.copy(this.spaces[K].toXYZ).multiply(this.spaces[H].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(W,K){return c8("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(W,K)},toWorkingColorSpace:function(W,K){return c8("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(W,K)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:XK,fromXYZ:UK,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:XK,fromXYZ:UK,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var QJ=rX();function K8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function I7(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var E7;class JW{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(E7===void 0)E7=A7("canvas");E7.width=J.width,E7.height=J.height;let Z=E7.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=E7}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=A7("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),W=Z.data;for(let K=0;K<W.length;K++)W[K]=K8(W[K]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(K8(Q[$]/255)*255);else Q[$]=K8(Q[$]);return{data:Q,width:J.width,height:J.height}}else return y0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var tX=0;class M6{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tX++}),this.uuid=I9(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let W;if(Array.isArray(Z)){W=[];for(let K=0,H=Z.length;K<H;K++)if(Z[K].isDataTexture)W.push(P$(Z[K].image));else W.push(P$(Z[K]))}else W=P$(Z);$.url=W}if(!Q)J.images[this.uuid]=$;return $}}function P$(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return JW.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return y0("Texture: Unable to serialize Texture."),{}}var eX=0,I$=new w;class xJ extends p9{constructor(J=xJ.DEFAULT_IMAGE,Q=xJ.DEFAULT_MAPPING,$=1001,Z=1001,W=1006,K=1008,H=1023,Y=1009,X=xJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:eX++}),this.uuid=I9(),this.name="",this.source=new M6(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=W,this.minFilter=K,this.anisotropy=X,this.format=H,this.internalFormat=null,this.type=Y,this.offset=new H0(0,0),this.repeat=new H0(1,1),this.center=new H0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new s0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(I$).x}get height(){return this.source.getSize(I$).y}get depth(){return this.source.getSize(I$).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){y0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){y0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}xJ.DEFAULT_IMAGE=null;xJ.DEFAULT_MAPPING=300;xJ.DEFAULT_ANISOTROPY=1;class DJ{static{DJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,Z=1){this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=this.w,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*Z+K[12]*W,this.y=K[1]*Q+K[5]*$+K[9]*Z+K[13]*W,this.z=K[2]*Q+K[6]*$+K[10]*Z+K[14]*W,this.w=K[3]*Q+K[7]*$+K[11]*Z+K[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,W,K=0.01,H=0.1,Y=J.elements,X=Y[0],U=Y[4],N=Y[8],E=Y[1],G=Y[5],q=Y[9],R=Y[2],k=Y[6],O=Y[10];if(Math.abs(U-E)<0.01&&Math.abs(N-R)<0.01&&Math.abs(q-k)<0.01){if(Math.abs(U+E)<0.1&&Math.abs(N+R)<0.1&&Math.abs(q+k)<0.1&&Math.abs(X+G+O-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let P=(X+1)/2,B=(G+1)/2,L=(O+1)/2,z=(U+E)/4,_=(N+R)/4,A=(q+k)/4;if(P>B&&P>L)if(P<0.01)$=0,Z=0.707106781,W=0.707106781;else $=Math.sqrt(P),Z=z/$,W=_/$;else if(B>L)if(B<0.01)$=0.707106781,Z=0,W=0.707106781;else Z=Math.sqrt(B),$=z/Z,W=A/Z;else if(L<0.01)$=0.707106781,Z=0.707106781,W=0;else W=Math.sqrt(L),$=_/W,Z=A/W;return this.set($,Z,W,Q),this}let F=Math.sqrt((k-q)*(k-q)+(N-R)*(N-R)+(E-U)*(E-U));if(Math.abs(F)<0.001)F=1;return this.x=(k-q)/F,this.y=(N-R)/F,this.z=(E-U)/F,this.w=Math.acos((X+G+O-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=o0(this.x,J.x,Q.x),this.y=o0(this.y,J.y,Q.y),this.z=o0(this.z,J.z,Q.z),this.w=o0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=o0(this.x,J,Q),this.y=o0(this.y,J,Q),this.z=o0(this.z,J,Q),this.w=o0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(o0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QW extends p9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new DJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new DJ(0,0,J,Q),this.textures=[];let Z={width:J,height:Q,depth:$.depth},W=new xJ(Z),K=$.count;for(let H=0;H<K;H++)this.textures[H]=W.clone(),this.textures[H].isRenderTargetTexture=!0,this.textures[H].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveColorBuffer=$.resolveColorBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this.storeMultisampledColorBuffer=$.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=$.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=$.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,W=this.textures.length;Z<W;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new M6(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class O9 extends QW{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class uQ extends xJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class $W extends xJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class n0{static{n0.prototype.isMatrix4=!0}constructor(J,Q,$,Z,W,K,H,Y,X,U,N,E,G,q,R,k){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,K,H,Y,X,U,N,E,G,q,R,k)}set(J,Q,$,Z,W,K,H,Y,X,U,N,E,G,q,R,k){let O=this.elements;return O[0]=J,O[4]=Q,O[8]=$,O[12]=Z,O[1]=W,O[5]=K,O[9]=H,O[13]=Y,O[2]=X,O[6]=U,O[10]=N,O[14]=E,O[3]=G,O[7]=q,O[11]=R,O[15]=k,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n0().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/q7.setFromMatrixColumn(J,0).length(),W=1/q7.setFromMatrixColumn(J,1).length(),K=1/q7.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*W,Q[5]=$[5]*W,Q[6]=$[6]*W,Q[7]=0,Q[8]=$[8]*K,Q[9]=$[9]*K,Q[10]=$[10]*K,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z,K=Math.cos($),H=Math.sin($),Y=Math.cos(Z),X=Math.sin(Z),U=Math.cos(W),N=Math.sin(W);if(J.order==="XYZ"){let E=K*U,G=K*N,q=H*U,R=H*N;Q[0]=Y*U,Q[4]=-Y*N,Q[8]=X,Q[1]=G+q*X,Q[5]=E-R*X,Q[9]=-H*Y,Q[2]=R-E*X,Q[6]=q+G*X,Q[10]=K*Y}else if(J.order==="YXZ"){let E=Y*U,G=Y*N,q=X*U,R=X*N;Q[0]=E+R*H,Q[4]=q*H-G,Q[8]=K*X,Q[1]=K*N,Q[5]=K*U,Q[9]=-H,Q[2]=G*H-q,Q[6]=R+E*H,Q[10]=K*Y}else if(J.order==="ZXY"){let E=Y*U,G=Y*N,q=X*U,R=X*N;Q[0]=E-R*H,Q[4]=-K*N,Q[8]=q+G*H,Q[1]=G+q*H,Q[5]=K*U,Q[9]=R-E*H,Q[2]=-K*X,Q[6]=H,Q[10]=K*Y}else if(J.order==="ZYX"){let E=K*U,G=K*N,q=H*U,R=H*N;Q[0]=Y*U,Q[4]=q*X-G,Q[8]=E*X+R,Q[1]=Y*N,Q[5]=R*X+E,Q[9]=G*X-q,Q[2]=-X,Q[6]=H*Y,Q[10]=K*Y}else if(J.order==="YZX"){let E=K*Y,G=K*X,q=H*Y,R=H*X;Q[0]=Y*U,Q[4]=R-E*N,Q[8]=q*N+G,Q[1]=N,Q[5]=K*U,Q[9]=-H*U,Q[2]=-X*U,Q[6]=G*N+q,Q[10]=E-R*N}else if(J.order==="XZY"){let E=K*Y,G=K*X,q=H*Y,R=H*X;Q[0]=Y*U,Q[4]=-N,Q[8]=X*U,Q[1]=E*N+R,Q[5]=K*U,Q[9]=G*N-q,Q[2]=q*N-G,Q[6]=H*U,Q[10]=R*N+E}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(JU,J,QU)}lookAt(J,Q,$){let Z=this.elements;if(E9.subVectors(J,Q),E9.lengthSq()===0)E9.z=1;if(E9.normalize(),R8.crossVectors($,E9),R8.lengthSq()===0){if(Math.abs($.z)===1)E9.x+=0.0001;else E9.z+=0.0001;E9.normalize(),R8.crossVectors($,E9)}return R8.normalize(),e6.crossVectors(E9,R8),Z[0]=R8.x,Z[4]=e6.x,Z[8]=E9.x,Z[1]=R8.y,Z[5]=e6.y,Z[9]=E9.y,Z[2]=R8.z,Z[6]=e6.z,Z[10]=E9.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,K=$[0],H=$[4],Y=$[8],X=$[12],U=$[1],N=$[5],E=$[9],G=$[13],q=$[2],R=$[6],k=$[10],O=$[14],F=$[3],P=$[7],B=$[11],L=$[15],z=Z[0],_=Z[4],A=Z[8],D=Z[12],I=Z[1],p=Z[5],v=Z[9],b=Z[13],o=Z[2],S=Z[6],m=Z[10],r=Z[14],d=Z[3],X0=Z[7],n=Z[11],t=Z[15];return W[0]=K*z+H*I+Y*o+X*d,W[4]=K*_+H*p+Y*S+X*X0,W[8]=K*A+H*v+Y*m+X*n,W[12]=K*D+H*b+Y*r+X*t,W[1]=U*z+N*I+E*o+G*d,W[5]=U*_+N*p+E*S+G*X0,W[9]=U*A+N*v+E*m+G*n,W[13]=U*D+N*b+E*r+G*t,W[2]=q*z+R*I+k*o+O*d,W[6]=q*_+R*p+k*S+O*X0,W[10]=q*A+R*v+k*m+O*n,W[14]=q*D+R*b+k*r+O*t,W[3]=F*z+P*I+B*o+L*d,W[7]=F*_+P*p+B*S+L*X0,W[11]=F*A+P*v+B*m+L*n,W[15]=F*D+P*b+B*r+L*t,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],W=J[12],K=J[1],H=J[5],Y=J[9],X=J[13],U=J[2],N=J[6],E=J[10],G=J[14],q=J[3],R=J[7],k=J[11],O=J[15],F=Y*G-X*E,P=H*G-X*N,B=H*E-Y*N,L=K*G-X*U,z=K*E-Y*U,_=K*N-H*U;return Q*(R*F-k*P+O*B)-$*(q*F-k*L+O*z)+Z*(q*P-R*L+O*_)-W*(q*B-R*z+k*_)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],W=J[1],K=J[5],H=J[9],Y=J[2],X=J[6],U=J[10];return Q*(K*U-H*X)-$*(W*U-H*Y)+Z*(W*X-K*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],N=J[9],E=J[10],G=J[11],q=J[12],R=J[13],k=J[14],O=J[15],F=Q*H-$*K,P=Q*Y-Z*K,B=Q*X-W*K,L=$*Y-Z*H,z=$*X-W*H,_=Z*X-W*Y,A=U*R-N*q,D=U*k-E*q,I=U*O-G*q,p=N*k-E*R,v=N*O-G*R,b=E*O-G*k,o=F*b-P*v+B*p+L*I-z*D+_*A;if(o===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/o;return J[0]=(H*b-Y*v+X*p)*S,J[1]=(Z*v-$*b-W*p)*S,J[2]=(R*_-k*z+O*L)*S,J[3]=(E*z-N*_-G*L)*S,J[4]=(Y*I-K*b-X*D)*S,J[5]=(Q*b-Z*I+W*D)*S,J[6]=(k*B-q*_-O*P)*S,J[7]=(U*_-E*B+G*P)*S,J[8]=(K*v-H*I+X*A)*S,J[9]=($*I-Q*v-W*A)*S,J[10]=(q*z-R*B+O*F)*S,J[11]=(N*B-U*z-G*F)*S,J[12]=(H*D-K*p-Y*A)*S,J[13]=(Q*p-$*D+Z*A)*S,J[14]=(R*P-q*L-k*F)*S,J[15]=(U*L-N*P+E*F)*S,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=W,Q[1]*=$,Q[5]*=Z,Q[9]*=W,Q[2]*=$,Q[6]*=Z,Q[10]*=W,Q[3]*=$,Q[7]*=Z,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=1-$,K=J.x,H=J.y,Y=J.z,X=W*K,U=W*H;return this.set(X*K+$,X*H-Z*Y,X*Y+Z*H,0,X*H+Z*Y,U*H+$,U*Y-Z*K,0,X*Y-Z*H,U*Y+Z*K,W*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,W,K){return this.set(1,$,W,0,J,1,K,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,W=Q._x,K=Q._y,H=Q._z,Y=Q._w,X=W+W,U=K+K,N=H+H,E=W*X,G=W*U,q=W*N,R=K*U,k=K*N,O=H*N,F=Y*X,P=Y*U,B=Y*N,L=$.x,z=$.y,_=$.z;return Z[0]=(1-(R+O))*L,Z[1]=(G+B)*L,Z[2]=(q-P)*L,Z[3]=0,Z[4]=(G-B)*z,Z[5]=(1-(E+O))*z,Z[6]=(k+F)*z,Z[7]=0,Z[8]=(q+P)*_,Z[9]=(k-F)*_,Z[10]=(1-(E+R))*_,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let W=this.determinantAffine();if(W===0)return $.set(1,1,1),Q.identity(),this;let K=q7.set(Z[0],Z[1],Z[2]).length(),H=q7.set(Z[4],Z[5],Z[6]).length(),Y=q7.set(Z[8],Z[9],Z[10]).length();if(W<0)K=-K;j9.copy(this);let X=1/K,U=1/H,N=1/Y;return j9.elements[0]*=X,j9.elements[1]*=X,j9.elements[2]*=X,j9.elements[4]*=U,j9.elements[5]*=U,j9.elements[6]*=U,j9.elements[8]*=N,j9.elements[9]*=N,j9.elements[10]*=N,Q.setFromRotationMatrix(j9),$.x=K,$.y=H,$.z=Y,this}makePerspective(J,Q,$,Z,W,K,H=2000,Y=!1){let X=this.elements,U=2*W/(Q-J),N=2*W/($-Z),E=(Q+J)/(Q-J),G=($+Z)/($-Z),q,R;if(Y)q=W/(K-W),R=K*W/(K-W);else if(H===2000)q=-(K+W)/(K-W),R=-2*K*W/(K-W);else if(H===2001)q=-K/(K-W),R=-K*W/(K-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=E,X[12]=0,X[1]=0,X[5]=N,X[9]=G,X[13]=0,X[2]=0,X[6]=0,X[10]=q,X[14]=R,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,Q,$,Z,W,K,H=2000,Y=!1){let X=this.elements,U=2/(Q-J),N=2/($-Z),E=-(Q+J)/(Q-J),G=-($+Z)/($-Z),q,R;if(Y)q=1/(K-W),R=K/(K-W);else if(H===2000)q=-2/(K-W),R=-(K+W)/(K-W);else if(H===2001)q=-1/(K-W),R=-W/(K-W);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=0,X[12]=E,X[1]=0,X[5]=N,X[9]=0,X[13]=G,X[2]=0,X[6]=0,X[10]=q,X[14]=R,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var q7=new w,j9=new n0,JU=new w(0,0,0),QU=new w(1,1,1),R8=new w,e6=new w,E9=new w,GK=new n0,NK=new RJ;class _9{constructor(J=0,Q=0,$=0,Z=_9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,W=Z[0],K=Z[4],H=Z[8],Y=Z[1],X=Z[5],U=Z[9],N=Z[2],E=Z[6],G=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(o0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-U,G),this._z=Math.atan2(-K,W);else this._x=Math.atan2(E,X),this._z=0;break;case"YXZ":if(this._x=Math.asin(-o0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(H,G),this._z=Math.atan2(Y,X);else this._y=Math.atan2(-N,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(o0(E,-1,1)),Math.abs(E)<0.9999999)this._y=Math.atan2(-N,G),this._z=Math.atan2(-K,X);else this._y=0,this._z=Math.atan2(Y,W);break;case"ZYX":if(this._y=Math.asin(-o0(N,-1,1)),Math.abs(N)<0.9999999)this._x=Math.atan2(E,G),this._z=Math.atan2(Y,W);else this._x=0,this._z=Math.atan2(-K,X);break;case"YZX":if(this._z=Math.asin(o0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,X),this._y=Math.atan2(-N,W);else this._x=0,this._y=Math.atan2(H,G);break;case"XZY":if(this._z=Math.asin(-o0(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(E,X),this._y=Math.atan2(H,W);else this._x=Math.atan2(-U,G),this._y=0;break;default:y0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return GK.makeRotationFromQuaternion(J),this.setFromRotationMatrix(GK,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return NK.setFromEuler(this),this.setFromQuaternion(NK,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_9.DEFAULT_ORDER="XYZ";class cQ{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var $U=0,EK=new w,F7=new RJ,e9=new n0,JQ=new w,e7=new w,ZU=new w,WU=new RJ,qK=new w(1,0,0),FK=new w(0,1,0),OK=new w(0,0,1),RK={type:"added"},KU={type:"removed"},O7={type:"childadded",child:null},_$={type:"childremoved",child:null};class LJ extends p9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:$U++}),this.uuid=I9(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=LJ.DEFAULT_UP.clone();let J=new w,Q=new _9,$=new RJ,Z=new w(1,1,1);function W(){$.setFromEuler(Q,!1)}function K(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(W),$._onChange(K),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new n0},normalMatrix:{value:new s0}}),this.matrix=new n0,this.matrixWorld=new n0,this.matrixAutoUpdate=LJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=LJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cQ,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return F7.setFromAxisAngle(J,Q),this.quaternion.multiply(F7),this}rotateOnWorldAxis(J,Q){return F7.setFromAxisAngle(J,Q),this.quaternion.premultiply(F7),this}rotateX(J){return this.rotateOnAxis(qK,J)}rotateY(J){return this.rotateOnAxis(FK,J)}rotateZ(J){return this.rotateOnAxis(OK,J)}translateOnAxis(J,Q){return EK.copy(J).applyQuaternion(this.quaternion),this.position.add(EK.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(qK,J)}translateY(J){return this.translateOnAxis(FK,J)}translateZ(J){return this.translateOnAxis(OK,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(e9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)JQ.copy(J);else JQ.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),e7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)e9.lookAt(e7,JQ,this.up);else e9.lookAt(JQ,e7,this.up);if(this.quaternion.setFromRotationMatrix(e9),Z)e9.extractRotation(Z.matrixWorld),F7.setFromRotationMatrix(e9),this.quaternion.premultiply(F7.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return u0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(RK),O7.child=J,this.dispatchEvent(O7),O7.child=null;else u0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(KU),_$.child=J,this.dispatchEvent(_$),_$.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),e9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),e9.multiply(J.parent.matrixWorld);return J.applyMatrix4(e9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(RK),O7.child=J,this.dispatchEvent(O7),O7.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let K=this.children[$].getObjectByProperty(J,Q);if(K!==void 0)return K}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let W=0,K=Z.length;W<K;W++)Z[W].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(e7,J,ZU),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(e7,WU,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:Z}=J,W=this.matrix.elements;W[12]+=Q-W[0]*Q-W[4]*$-W[8]*Z,W[13]+=$-W[1]*Q-W[5]*$-W[9]*Z,W[14]+=Z-W[2]*Q-W[6]*$-W[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let W=this.children;for(let K=0,H=W.length;K<H;K++)W[K].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,Z.name=this.name,Z.castShadow=this.castShadow,Z.receiveShadow=this.receiveShadow,Z.visible=this.visible,Z.frustumCulled=this.frustumCulled,Z.renderOrder=this.renderOrder,Z.static=this.static,Z.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((H)=>({...H,boundingBox:H.boundingBox?H.boundingBox.toJSON():void 0,boundingSphere:H.boundingSphere?H.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((H)=>({...H})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function W(H,Y){if(H[Y.uuid]===void 0)H[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=W(J.geometries,this.geometry);let H=this.geometry.parameters;if(H!==void 0&&H.shapes!==void 0){let Y=H.shapes;if(Array.isArray(Y))for(let X=0,U=Y.length;X<U;X++){let N=Y[X];W(J.shapes,N)}else W(J.shapes,Y)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let H=[];for(let Y=0,X=this.material.length;Y<X;Y++)H.push(W(J.materials,this.material[Y]));Z.material=H}else Z.material=W(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let H=0;H<this.children.length;H++)Z.children.push(this.children[H].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let H=0;H<this.animations.length;H++){let Y=this.animations[H];Z.animations.push(W(J.animations,Y))}}if(Q){let H=K(J.geometries),Y=K(J.materials),X=K(J.textures),U=K(J.images),N=K(J.shapes),E=K(J.skeletons),G=K(J.animations),q=K(J.nodes);if(H.length>0)$.geometries=H;if(Y.length>0)$.materials=Y;if(X.length>0)$.textures=X;if(U.length>0)$.images=U;if(N.length>0)$.shapes=N;if(E.length>0)$.skeletons=E;if(G.length>0)$.animations=G;if(q.length>0)$.nodes=q}return $.object=Z,$;function K(H){let Y=[];for(let X in H){let U=H[X];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}LJ.DEFAULT_UP=new w(0,1,0);LJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;LJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class vJ extends LJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var HU={type:"move"};class z6{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new vJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new vJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new vJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,W=null,K=null,H=this._targetRay,Y=this._grip,X=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(X&&J.hand){K=!0;for(let R of J.hand.values()){let k=Q.getJointPose(R,$),O=this._getHandJoint(X,R);if(k!==null)O.matrix.fromArray(k.transform.matrix),O.matrix.decompose(O.position,O.rotation,O.scale),O.matrixWorldNeedsUpdate=!0,O.jointRadius=k.radius;O.visible=k!==null}let U=X.joints["index-finger-tip"],N=X.joints["thumb-tip"],E=U.position.distanceTo(N.position),G=0.02,q=0.005;if(X.inputState.pinching&&E>G+q)X.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!X.inputState.pinching&&E<=G-q)X.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,$),W!==null){if(Y.matrix.fromArray(W.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,W.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(W.linearVelocity);else Y.hasLinearVelocity=!1;if(W.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(W.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(H!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&W!==null)Z=W;if(Z!==null){if(H.matrix.fromArray(Z.transform.matrix),H.matrix.decompose(H.position,H.rotation,H.scale),H.matrixWorldNeedsUpdate=!0,Z.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(Z.linearVelocity);else H.hasLinearVelocity=!1;if(Z.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(Z.angularVelocity);else H.hasAngularVelocity=!1;this.dispatchEvent(HU)}}}if(H!==null)H.visible=Z!==null;if(Y!==null)Y.visible=W!==null;if(X!==null)X.visible=K!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new vJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var cH={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},L8={h:0,s:0,l:0},QQ={h:0,s:0,l:0};function A$(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class b0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,QJ.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=QJ.workingColorSpace){return this.r=J,this.g=Q,this.b=$,QJ.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=QJ.workingColorSpace){if(J=eZ(J,1),Q=o0(Q,0,1),$=o0($,0,1),Q===0)this.r=this.g=this.b=$;else{let W=$<=0.5?$*(1+Q):$+Q-$*Q,K=2*$-W;this.r=A$(K,W,J+0.3333333333333333),this.g=A$(K,W,J),this.b=A$(K,W,J-0.3333333333333333)}return QJ.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(W){if(W===void 0)return;if(parseFloat(W)<1)y0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,K=Z[1],H=Z[2];switch(K){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:y0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=Z[1],K=W.length;if(K===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(K===6)return this.setHex(parseInt(W,16),Q);else y0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=cH[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else y0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=K8(J.r),this.g=K8(J.g),this.b=K8(J.b),this}copyLinearToSRGB(J){return this.r=I7(J.r),this.g=I7(J.g),this.b=I7(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return QJ.workingToColorSpace(Q9.copy(this),J),Math.round(o0(Q9.r*255,0,255))*65536+Math.round(o0(Q9.g*255,0,255))*256+Math.round(o0(Q9.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=QJ.workingColorSpace){QJ.workingToColorSpace(Q9.copy(this),Q);let{r:$,g:Z,b:W}=Q9,K=Math.max($,Z,W),H=Math.min($,Z,W),Y,X,U=(H+K)/2;if(H===K)Y=0,X=0;else{let N=K-H;switch(X=U<=0.5?N/(K+H):N/(2-K-H),K){case $:Y=(Z-W)/N+(Z<W?6:0);break;case Z:Y=(W-$)/N+2;break;case W:Y=($-Z)/N+4;break}Y/=6}return J.h=Y,J.s=X,J.l=U,J}getRGB(J,Q=QJ.workingColorSpace){return QJ.workingToColorSpace(Q9.copy(this),Q),J.r=Q9.r,J.g=Q9.g,J.b=Q9.b,J}getStyle(J="srgb"){QJ.workingToColorSpace(Q9.copy(this),J);let{r:Q,g:$,b:Z}=Q9;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(L8),this.setHSL(L8.h+J,L8.s+Q,L8.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(L8),J.getHSL(QQ);let $=U6(L8.h,QQ.h,Q),Z=U6(L8.s,QQ.s,Q),W=U6(L8.l,QQ.l,Q);return this.setHSL($,Z,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*$+W[6]*Z,this.g=W[1]*Q+W[4]*$+W[7]*Z,this.b=W[2]*Q+W[5]*$+W[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var Q9=new b0;b0.NAMES=cH;class C6{constructor(J,Q=0.00025){this.isFogExp2=!0,this.name="",this.color=new b0(J),this.density=Q}clone(){return new C6(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class g7 extends LJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _9,this.environmentIntensity=1,this.environmentRotation=new _9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var y9=new w,J8=new w,w$=new w,Q8=new w,R7=new w,L7=new w,LK=new w,T$=new w,S$=new w,j$=new w,y$=new DJ,v$=new DJ,f$=new DJ;class P9{constructor(J=new w,Q=new w,$=new w){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),y9.subVectors(J,Q),Z.cross(y9);let W=Z.lengthSq();if(W>0)return Z.multiplyScalar(1/Math.sqrt(W));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,W){y9.subVectors(Z,Q),J8.subVectors($,Q),w$.subVectors(J,Q);let K=y9.dot(y9),H=y9.dot(J8),Y=y9.dot(w$),X=J8.dot(J8),U=J8.dot(w$),N=K*X-H*H;if(N===0)return W.set(0,0,0),null;let E=1/N,G=(X*Y-H*U)*E,q=(K*U-H*Y)*E;return W.set(1-G-q,q,G)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,Q8)===null)return!1;return Q8.x>=0&&Q8.y>=0&&Q8.x+Q8.y<=1}static getInterpolation(J,Q,$,Z,W,K,H,Y){if(this.getBarycoord(J,Q,$,Z,Q8)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(W,Q8.x),Y.addScaledVector(K,Q8.y),Y.addScaledVector(H,Q8.z),Y}static getInterpolatedAttribute(J,Q,$,Z,W,K){return y$.setScalar(0),v$.setScalar(0),f$.setScalar(0),y$.fromBufferAttribute(J,Q),v$.fromBufferAttribute(J,$),f$.fromBufferAttribute(J,Z),K.setScalar(0),K.addScaledVector(y$,W.x),K.addScaledVector(v$,W.y),K.addScaledVector(f$,W.z),K}static isFrontFacing(J,Q,$,Z){return y9.subVectors($,Q),J8.subVectors(J,Q),y9.cross(J8).dot(Z)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return y9.subVectors(this.c,this.b),J8.subVectors(this.a,this.b),y9.cross(J8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return P9.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return P9.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,W){return P9.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,W)}containsPoint(J){return P9.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return P9.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,W=this.c,K,H;R7.subVectors(Z,$),L7.subVectors(W,$),T$.subVectors(J,$);let Y=R7.dot(T$),X=L7.dot(T$);if(Y<=0&&X<=0)return Q.copy($);S$.subVectors(J,Z);let U=R7.dot(S$),N=L7.dot(S$);if(U>=0&&N<=U)return Q.copy(Z);let E=Y*N-U*X;if(E<=0&&Y>=0&&U<=0)return K=Y/(Y-U),Q.copy($).addScaledVector(R7,K);j$.subVectors(J,W);let G=R7.dot(j$),q=L7.dot(j$);if(q>=0&&G<=q)return Q.copy(W);let R=G*X-Y*q;if(R<=0&&X>=0&&q<=0)return H=X/(X-q),Q.copy($).addScaledVector(L7,H);let k=U*q-G*N;if(k<=0&&N-U>=0&&G-q>=0)return LK.subVectors(W,Z),H=(N-U)/(N-U+(G-q)),Q.copy(Z).addScaledVector(LK,H);let O=1/(k+R+E);return K=R*O,H=E*O,Q.copy($).addScaledVector(R7,K).addScaledVector(L7,H)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class X9{constructor(J=new w(1/0,1/0,1/0),Q=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(v9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(v9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=v9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let W=$.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let K=0,H=W.count;K<H;K++){if(J.isMesh===!0)J.getVertexPosition(K,v9);else v9.fromBufferAttribute(W,K);v9.applyMatrix4(J.matrixWorld),this.expandByPoint(v9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();$Q.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();$Q.copy($.boundingBox)}$Q.applyMatrix4(J.matrixWorld),this.union($Q)}}let Z=J.children;for(let W=0,K=Z.length;W<K;W++)this.expandByObject(Z[W],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,v9),v9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(J6),ZQ.subVectors(this.max,J6),V7.subVectors(J.a,J6),k7.subVectors(J.b,J6),D7.subVectors(J.c,J6),V8.subVectors(k7,V7),k8.subVectors(D7,k7),l8.subVectors(V7,D7);let Q=[0,-V8.z,V8.y,0,-k8.z,k8.y,0,-l8.z,l8.y,V8.z,0,-V8.x,k8.z,0,-k8.x,l8.z,0,-l8.x,-V8.y,V8.x,0,-k8.y,k8.x,0,-l8.y,l8.x,0];if(!h$(Q,V7,k7,D7,ZQ))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!h$(Q,V7,k7,D7,ZQ))return!1;return WQ.crossVectors(V8,k8),Q=[WQ.x,WQ.y,WQ.z],h$(Q,V7,k7,D7,ZQ)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,v9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(v9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return $8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),$8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),$8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),$8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),$8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),$8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),$8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),$8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints($8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var $8=[new w,new w,new w,new w,new w,new w,new w,new w],v9=new w,$Q=new X9,V7=new w,k7=new w,D7=new w,V8=new w,k8=new w,l8=new w,J6=new w,ZQ=new w,WQ=new w,m8=new w;function h$(J,Q,$,Z,W){for(let K=0,H=J.length-3;K<=H;K+=3){m8.fromArray(J,K);let Y=W.x*Math.abs(m8.x)+W.y*Math.abs(m8.y)+W.z*Math.abs(m8.z),X=Q.dot(m8),U=$.dot(m8),N=Z.dot(m8);if(Math.max(-Math.max(X,U,N),Math.min(X,U,N))>Y)return!1}return!0}var lJ=new w,KQ=new H0,YU=0;class cJ extends p9{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:YU++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,W=this.itemSize;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)KQ.fromBufferAttribute(this,Q),KQ.applyMatrix3(J),this.setXY(Q,KQ.x,KQ.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)lJ.fromBufferAttribute(this,Q),lJ.applyMatrix3(J),this.setXYZ(Q,lJ.x,lJ.y,lJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)lJ.fromBufferAttribute(this,Q),lJ.applyMatrix4(J),this.setXYZ(Q,lJ.x,lJ.y,lJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)lJ.fromBufferAttribute(this,Q),lJ.applyNormalMatrix(J),this.setXYZ(Q,lJ.x,lJ.y,lJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)lJ.fromBufferAttribute(this,Q),lJ.transformDirection(J),this.setXYZ(Q,lJ.x,lJ.y,lJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=f9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=kJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=f9(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=kJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=f9(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=kJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=f9(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=kJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=f9(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=kJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=kJ(Q,this.array),$=kJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=kJ(Q,this.array),$=kJ($,this.array),Z=kJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J*=this.itemSize,this.normalized)Q=kJ(Q,this.array),$=kJ($,this.array),Z=kJ(Z,this.array),W=kJ(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}}class nQ extends cJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class sQ extends cJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class XJ extends cJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var XU=new X9,Q6=new w,b$=new w;class R9{constructor(J=new w,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else XU.setFromPoints(J).getCenter($);let Z=0;for(let W=0,K=J.length;W<K;W++)Z=Math.max(Z,$.distanceToSquared(J[W]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;Q6.subVectors(J,this.center);let Q=Q6.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(Q6,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else b$.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(Q6.copy(J.center).add(b$)),this.expandByPoint(Q6.copy(J.center).sub(b$));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var UU=0,z9=new n0,x$=new LJ,B7=new w,q9=new X9,$6=new X9,aJ=new w;class SJ extends p9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UU++}),this.uuid=I9(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((yX(J))?sQ:nQ)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let W=new s0().getNormalMatrix(J);$.applyNormalMatrix(W),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return z9.makeRotationFromQuaternion(J),this.applyMatrix4(z9),this}rotateX(J){return z9.makeRotationX(J),this.applyMatrix4(z9),this}rotateY(J){return z9.makeRotationY(J),this.applyMatrix4(z9),this}rotateZ(J){return z9.makeRotationZ(J),this.applyMatrix4(z9),this}translate(J,Q,$){return z9.makeTranslation(J,Q,$),this.applyMatrix4(z9),this}scale(J,Q,$){return z9.makeScale(J,Q,$),this.applyMatrix4(z9),this}lookAt(J){return x$.lookAt(J),x$.updateMatrix(),this.applyMatrix4(x$.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(B7).negate(),this.translate(B7.x,B7.y,B7.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,W=J.length;Z<W;Z++){let K=J[Z];$.push(K.x,K.y,K.z||0)}this.setAttribute("position",new XJ($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let W=J[Z];Q.setXYZ(Z,W.x,W.y,W.z||0)}if(J.length>Q.count)y0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new X9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){u0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(q9.setFromBufferAttribute(W),this.morphTargetsRelative)aJ.addVectors(this.boundingBox.min,q9.min),this.boundingBox.expandByPoint(aJ),aJ.addVectors(this.boundingBox.max,q9.max),this.boundingBox.expandByPoint(aJ);else this.boundingBox.expandByPoint(q9.min),this.boundingBox.expandByPoint(q9.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))u0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new R9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){u0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(J){let $=this.boundingSphere.center;if(q9.setFromBufferAttribute(J),Q)for(let W=0,K=Q.length;W<K;W++){let H=Q[W];if($6.setFromBufferAttribute(H),this.morphTargetsRelative)aJ.addVectors(q9.min,$6.min),q9.expandByPoint(aJ),aJ.addVectors(q9.max,$6.max),q9.expandByPoint(aJ);else q9.expandByPoint($6.min),q9.expandByPoint($6.max)}q9.getCenter($);let Z=0;for(let W=0,K=J.count;W<K;W++)aJ.fromBufferAttribute(J,W),Z=Math.max(Z,$.distanceToSquared(aJ));if(Q)for(let W=0,K=Q.length;W<K;W++){let H=Q[W],Y=this.morphTargetsRelative;for(let X=0,U=H.count;X<U;X++){if(aJ.fromBufferAttribute(H,X),Y)B7.fromBufferAttribute(J,X),aJ.add(B7);Z=Math.max(Z,$.distanceToSquared(aJ))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))u0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){u0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:W}=Q,K=this.getAttribute("tangent");if(K===void 0||K.count!==$.count)K=new cJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",K);let H=[],Y=[];for(let A=0;A<$.count;A++)H[A]=new w,Y[A]=new w;let X=new w,U=new w,N=new w,E=new H0,G=new H0,q=new H0,R=new w,k=new w;function O(A,D,I){X.fromBufferAttribute($,A),U.fromBufferAttribute($,D),N.fromBufferAttribute($,I),E.fromBufferAttribute(W,A),G.fromBufferAttribute(W,D),q.fromBufferAttribute(W,I),U.sub(X),N.sub(X),G.sub(E),q.sub(E);let p=1/(G.x*q.y-q.x*G.y);if(!isFinite(p))return;R.copy(U).multiplyScalar(q.y).addScaledVector(N,-G.y).multiplyScalar(p),k.copy(N).multiplyScalar(G.x).addScaledVector(U,-q.x).multiplyScalar(p),H[A].add(R),H[D].add(R),H[I].add(R),Y[A].add(k),Y[D].add(k),Y[I].add(k)}let F=this.groups;if(F.length===0)F=[{start:0,count:J.count}];for(let A=0,D=F.length;A<D;++A){let I=F[A],p=I.start,v=I.count;for(let b=p,o=p+v;b<o;b+=3)O(J.getX(b+0),J.getX(b+1),J.getX(b+2))}let P=new w,B=new w,L=new w,z=new w;function _(A){L.fromBufferAttribute(Z,A),z.copy(L);let D=H[A];P.copy(D),P.sub(L.multiplyScalar(L.dot(D))).normalize(),B.crossVectors(z,D);let p=B.dot(Y[A])<0?-1:1;K.setXYZW(A,P.x,P.y,P.z,p)}for(let A=0,D=F.length;A<D;++A){let I=F[A],p=I.start,v=I.count;for(let b=p,o=p+v;b<o;b+=3)_(J.getX(b+0)),_(J.getX(b+1)),_(J.getX(b+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new cJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let E=0,G=$.count;E<G;E++)$.setXYZ(E,0,0,0);let Z=new w,W=new w,K=new w,H=new w,Y=new w,X=new w,U=new w,N=new w;if(J)for(let E=0,G=J.count;E<G;E+=3){let q=J.getX(E+0),R=J.getX(E+1),k=J.getX(E+2);Z.fromBufferAttribute(Q,q),W.fromBufferAttribute(Q,R),K.fromBufferAttribute(Q,k),U.subVectors(K,W),N.subVectors(Z,W),U.cross(N),H.fromBufferAttribute($,q),Y.fromBufferAttribute($,R),X.fromBufferAttribute($,k),H.add(U),Y.add(U),X.add(U),$.setXYZ(q,H.x,H.y,H.z),$.setXYZ(R,Y.x,Y.y,Y.z),$.setXYZ(k,X.x,X.y,X.z)}else for(let E=0,G=Q.count;E<G;E+=3)Z.fromBufferAttribute(Q,E+0),W.fromBufferAttribute(Q,E+1),K.fromBufferAttribute(Q,E+2),U.subVectors(K,W),N.subVectors(Z,W),U.cross(N),$.setXYZ(E+0,U.x,U.y,U.z),$.setXYZ(E+1,U.x,U.y,U.z),$.setXYZ(E+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)aJ.fromBufferAttribute(J,Q),aJ.normalize(),J.setXYZ(Q,aJ.x,aJ.y,aJ.z)}toNonIndexed(){function J(H,Y){let{array:X,itemSize:U,normalized:N}=H,E=new X.constructor(Y.length*U),G=0,q=0;for(let R=0,k=Y.length;R<k;R++){if(H.isInterleavedBufferAttribute)G=Y[R]*H.data.stride+H.offset;else G=Y[R]*U;for(let O=0;O<U;O++)E[q++]=X[G++]}return new cJ(E,U,N)}if(this.index===null)return y0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new SJ,$=this.index.array,Z=this.attributes;for(let H in Z){let Y=Z[H],X=J(Y,$);Q.setAttribute(H,X)}let W=this.morphAttributes;for(let H in W){let Y=[],X=W[H];for(let U=0,N=X.length;U<N;U++){let E=X[U],G=J(E,$);Y.push(G)}Q.morphAttributes[H]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;for(let H=0,Y=K.length;H<Y;H++){let X=K[H];Q.addGroup(X.start,X.count,X.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let X in Y)if(Y[X]!==void 0)J[X]=Y[X];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let X=$[Y];J.data.attributes[Y]=X.toJSON(J.data)}let Z={},W=!1;for(let Y in this.morphAttributes){let X=this.morphAttributes[Y],U=[];for(let N=0,E=X.length;N<E;N++){let G=X[N];U.push(G.toJSON(J.data))}if(U.length>0)Z[Y]=U,W=!0}if(W)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;if(K.length>0)J.data.groups=JSON.parse(JSON.stringify(K));let H=this.boundingSphere;if(H!==null)J.data.boundingSphere=H.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let X in Z){let U=Z[X];this.setAttribute(X,U.clone(Q))}let W=J.morphAttributes;for(let X in W){let U=[],N=W[X];for(let E=0,G=N.length;E<G;E++)U.push(N[E].clone(Q));this.morphAttributes[X]=U}this.morphTargetsRelative=J.morphTargetsRelative;let K=J.groups;for(let X=0,U=K.length;X<U;X++){let N=K[X];this.addGroup(N.start,N.count,N.materialIndex)}let H=J.boundingBox;if(H!==null)this.boundingBox=H.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class P6{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=I9()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,$){J*=this.stride,$*=Q.stride;for(let Z=0,W=this.stride;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=I9();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),$=new this.constructor(Q,this.stride);return $.setUsage(this.usage),$}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=I9();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let Q={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return Q.usage=this.usage,Q}}var H9=new w;class p7{constructor(J,Q,$,Z=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=$,this.normalized=Z}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,$=this.data.count;Q<$;Q++)H9.fromBufferAttribute(this,Q),H9.applyMatrix4(J),this.setXYZ(Q,H9.x,H9.y,H9.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)H9.fromBufferAttribute(this,Q),H9.applyNormalMatrix(J),this.setXYZ(Q,H9.x,H9.y,H9.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)H9.fromBufferAttribute(this,Q),H9.transformDirection(J),this.setXYZ(Q,H9.x,H9.y,H9.z);return this}getComponent(J,Q){let $=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)$=f9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=kJ($,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=$,this}setX(J,Q){if(this.normalized)Q=kJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=kJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=kJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=kJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=f9(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=f9(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=f9(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=f9(Q,this.array);return Q}setXY(J,Q,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=kJ(Q,this.array),$=kJ($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=kJ(Q,this.array),$=kJ($,this.array),Z=kJ(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J=J*this.data.stride+this.offset,this.normalized)Q=kJ(Q,this.array),$=kJ($,this.array),Z=kJ(Z,this.array),W=kJ(W,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this.data.array[J+3]=W,this}clone(J){if(J===void 0){E6("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[Z+W])}return new cJ(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new p7(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){E6("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[Z+W])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var g$=new w,GU=new w,NU=new s0;class C9{constructor(J=new w(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=g$.subVectors($,Q).cross(GU.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let Z=J.delta(g$),W=this.normal.dot(Z);if(W===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let K=-(J.start.dot(this.normal)+this.constant)/W;if($===!0&&(K<0||K>1))return null;return Q.copy(J.start).addScaledVector(Z,K)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||NU.getNormalMatrix(J),Z=this.coplanarPoint(g$).applyMatrix4(J),W=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var EU=0;class U9 extends p9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:EU++}),this.uuid=I9(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new b0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){y0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){y0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector2&&($&&$.isVector2)||Z&&Z.isEuler&&($&&$.isEuler)||Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,$.blending=this.blending,$.side=this.side,$.shadowSide=this.shadowSide,$.vertexColors=this.vertexColors,$.opacity=this.opacity,$.transparent=this.transparent,$.blendSrc=this.blendSrc,$.blendDst=this.blendDst,$.blendEquation=this.blendEquation,$.blendSrcAlpha=this.blendSrcAlpha,$.blendDstAlpha=this.blendDstAlpha,$.blendEquationAlpha=this.blendEquationAlpha,$.blendColor=this.blendColor.getHex(),$.blendAlpha=this.blendAlpha,$.depthFunc=this.depthFunc,$.depthTest=this.depthTest,$.depthWrite=this.depthWrite,$.colorWrite=this.colorWrite,$.clipIntersection=this.clipIntersection,$.clipShadows=this.clipShadows,$.stencilWriteMask=this.stencilWriteMask,$.stencilFunc=this.stencilFunc,$.stencilRef=this.stencilRef,$.stencilFuncMask=this.stencilFuncMask,$.stencilFail=this.stencilFail,$.stencilZFail=this.stencilZFail,$.stencilZPass=this.stencilZPass,$.stencilWrite=this.stencilWrite,$.polygonOffset=this.polygonOffset,$.polygonOffsetFactor=this.polygonOffsetFactor,$.polygonOffsetUnits=this.polygonOffsetUnits,$.dithering=this.dithering,$.alphaTest=this.alphaTest,$.alphaHash=this.alphaHash,$.alphaToCoverage=this.alphaToCoverage,$.premultipliedAlpha=this.premultipliedAlpha,$.forceSinglePass=this.forceSinglePass,$.allowOverride=this.allowOverride,$.visible=this.visible,$.toneMapped=this.toneMapped,$.name=this.name,this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)$.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)$.clippingPlanes=this.clippingPlanes.map((W)=>W.toJSON());if(this.rotation!==void 0)$.rotation=this.rotation;if(this.depthPacking!==void 0)$.depthPacking=this.depthPacking;if(this.linewidth!==void 0)$.linewidth=this.linewidth;if(this.linecap!==void 0)$.linecap=this.linecap;if(this.linejoin!==void 0)$.linejoin=this.linejoin;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.wireframe!==void 0)$.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)$.flatShading=this.flatShading;if(this.fog!==void 0)$.fog=this.fog;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(W){let K=[];for(let H in W){let Y=W[H];delete Y.metadata,K.push(Y)}return K}if(Q){let W=Z(J.textures),K=Z(J.images);if(W.length>0)$.textures=W;if(K.length>0)$.images=K}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new b0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map(($)=>new C9().fromJSON($));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new H0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new H0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let W=0;W!==Z;++W)$[W]=Q[W].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var Z8=new w,p$=new w,HQ=new w,YQ=new w;class w8{constructor(J=new w,Q=new w(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,Z8)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=Z8.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return Z8.copy(this.origin).addScaledVector(this.direction,Q),Z8.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){p$.copy(J).add(Q).multiplyScalar(0.5),HQ.copy(Q).sub(J).normalize(),YQ.copy(this.origin).sub(p$);let W=J.distanceTo(Q)*0.5,K=-this.direction.dot(HQ),H=YQ.dot(this.direction),Y=-YQ.dot(HQ),X=YQ.lengthSq(),U=Math.abs(1-K*K),N,E,G,q;if(U>0)if(N=K*Y-H,E=K*H-Y,q=W*U,N>=0)if(E>=-q)if(E<=q){let R=1/U;N*=R,E*=R,G=N*(N+K*E+2*H)+E*(K*N+E+2*Y)+X}else E=W,N=Math.max(0,-(K*E+H)),G=-N*N+E*(E+2*Y)+X;else E=-W,N=Math.max(0,-(K*E+H)),G=-N*N+E*(E+2*Y)+X;else if(E<=-q)N=Math.max(0,-(-K*W+H)),E=N>0?-W:Math.min(Math.max(-W,-Y),W),G=-N*N+E*(E+2*Y)+X;else if(E<=q)N=0,E=Math.min(Math.max(-W,-Y),W),G=E*(E+2*Y)+X;else N=Math.max(0,-(K*W+H)),E=N>0?W:Math.min(Math.max(-W,-Y),W),G=-N*N+E*(E+2*Y)+X;else E=K>0?-W:W,N=Math.max(0,-(K*E+H)),G=-N*N+E*(E+2*Y)+X;if($)$.copy(this.origin).addScaledVector(this.direction,N);if(Z)Z.copy(p$).addScaledVector(HQ,E);return G}intersectSphere(J,Q){if(J.radius<0)return null;Z8.subVectors(J.center,this.origin);let $=Z8.dot(this.direction),Z=Z8.dot(Z8)-$*$,W=J.radius*J.radius;if(Z>W)return null;let K=Math.sqrt(W-Z),H=$-K,Y=$+K;if(Y<0)return null;if(H<0)return this.at(Y,Q);return this.at(H,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,W,K,H,Y,X=1/this.direction.x,U=1/this.direction.y,N=1/this.direction.z,E=this.origin;if(X>=0)$=(J.min.x-E.x)*X,Z=(J.max.x-E.x)*X;else $=(J.max.x-E.x)*X,Z=(J.min.x-E.x)*X;if(U>=0)W=(J.min.y-E.y)*U,K=(J.max.y-E.y)*U;else W=(J.max.y-E.y)*U,K=(J.min.y-E.y)*U;if($>K||W>Z)return null;if(W>$||isNaN($))$=W;if(K<Z||isNaN(Z))Z=K;if(N>=0)H=(J.min.z-E.z)*N,Y=(J.max.z-E.z)*N;else H=(J.max.z-E.z)*N,Y=(J.min.z-E.z)*N;if($>Y||H>Z)return null;if(H>$||$!==$)$=H;if(Y<Z||Z!==Z)Z=Y;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,Z8)!==null}intersectTriangle(J,Q,$,Z,W){let K=this.origin,H=this.direction,Y=H.x,X=H.y,U=H.z,N=J.x-K.x,E=J.y-K.y,G=J.z-K.z,q=Q.x-K.x,R=Q.y-K.y,k=Q.z-K.z,O=$.x-K.x,F=$.y-K.y,P=$.z-K.z,B=Math.abs(Y),L=Math.abs(X),z=Math.abs(U),_,A,D,I,p,v,b,o,S,m,r,d;if(B>=L&&B>=z)if(D=Y,v=N,S=q,d=O,Y>=0)_=X,A=U,I=E,p=G,b=R,o=k,m=F,r=P;else _=U,A=X,I=G,p=E,b=k,o=R,m=P,r=F;else if(L>=z)if(D=X,v=E,S=R,d=F,X>=0)_=U,A=Y,I=G,p=N,b=k,o=q,m=P,r=O;else _=Y,A=U,I=N,p=G,b=q,o=k,m=O,r=P;else if(D=U,v=G,S=k,d=P,U>=0)_=Y,A=X,I=N,p=E,b=q,o=R,m=O,r=F;else _=X,A=Y,I=E,p=N,b=R,o=q,m=F,r=O;if(D===0)return null;let X0=_/D,n=A/D,t=1/D,Z0=I-X0*v,l0=p-n*v,_0=b-X0*S,VJ=o-n*S,a0=m-X0*d,s=r-n*d,G0=a0*VJ-s*_0,U0=Z0*s-l0*a0,f0=_0*l0-VJ*Z0;if(Z){if(G0<0||U0<0||f0<0)return null}else if((G0<0||U0<0||f0<0)&&(G0>0||U0>0||f0>0))return null;let x0=G0+U0+f0;if(x0===0)return null;let h0=t*(G0*v+U0*S+f0*d);if(x0>0?h0<0:h0>0)return null;return this.at(h0/x0,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tJ extends U9{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new b0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var VK=new n0,d8=new w8,XQ=new R9,kK=new w,UQ=new w,GQ=new w,NQ=new w,l$=new w,EQ=new w,DK=new w,qQ=new w;class p0 extends LJ{constructor(J=new SJ,Q=new tJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let H=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=W}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,W=$.morphAttributes.position,K=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let H=this.morphTargetInfluences;if(W&&H){EQ.set(0,0,0);for(let Y=0,X=W.length;Y<X;Y++){let U=H[Y],N=W[Y];if(U===0)continue;if(l$.fromBufferAttribute(N,J),K)EQ.addScaledVector(l$,U);else EQ.addScaledVector(l$.sub(Q),U)}Q.add(EQ)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.material,W=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(XQ.copy($.boundingSphere),XQ.applyMatrix4(W),d8.copy(J.ray).recast(J.near),XQ.containsPoint(d8.origin)===!1){if(d8.intersectSphere(XQ,kK)===null)return;if(d8.origin.distanceToSquared(kK)>(J.far-J.near)**2)return}if(VK.copy(W).invert(),d8.copy(J.ray).applyMatrix4(VK),$.boundingBox!==null){if(d8.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,d8)}_computeIntersections(J,Q,$){let Z,W=this.geometry,K=this.material,H=W.index,Y=W.attributes.position,X=W.attributes.uv,U=W.attributes.uv1,N=W.attributes.normal,E=W.groups,G=W.drawRange;if(H!==null)if(Array.isArray(K))for(let q=0,R=E.length;q<R;q++){let k=E[q],O=K[k.materialIndex],F=Math.max(k.start,G.start),P=Math.min(H.count,Math.min(k.start+k.count,G.start+G.count));for(let B=F,L=P;B<L;B+=3){let z=H.getX(B),_=H.getX(B+1),A=H.getX(B+2);if(Z=FQ(this,O,J,$,X,U,N,z,_,A),Z)Z.faceIndex=Math.floor(B/3),Z.face.materialIndex=k.materialIndex,Q.push(Z)}}else{let q=Math.max(0,G.start),R=Math.min(H.count,G.start+G.count);for(let k=q,O=R;k<O;k+=3){let F=H.getX(k),P=H.getX(k+1),B=H.getX(k+2);if(Z=FQ(this,K,J,$,X,U,N,F,P,B),Z)Z.faceIndex=Math.floor(k/3),Q.push(Z)}}else if(Y!==void 0)if(Array.isArray(K))for(let q=0,R=E.length;q<R;q++){let k=E[q],O=K[k.materialIndex],F=Math.max(k.start,G.start),P=Math.min(Y.count,Math.min(k.start+k.count,G.start+G.count));for(let B=F,L=P;B<L;B+=3){let z=B,_=B+1,A=B+2;if(Z=FQ(this,O,J,$,X,U,N,z,_,A),Z)Z.faceIndex=Math.floor(B/3),Z.face.materialIndex=k.materialIndex,Q.push(Z)}}else{let q=Math.max(0,G.start),R=Math.min(Y.count,G.start+G.count);for(let k=q,O=R;k<O;k+=3){let F=k,P=k+1,B=k+2;if(Z=FQ(this,K,J,$,X,U,N,F,P,B),Z)Z.faceIndex=Math.floor(k/3),Q.push(Z)}}}}function qU(J,Q,$,Z,W,K,H,Y){let X;if(Q.side===1)X=Z.intersectTriangle(H,K,W,!0,Y);else X=Z.intersectTriangle(W,K,H,Q.side===0,Y);if(X===null)return null;qQ.copy(Y),qQ.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(qQ);if(U<$.near||U>$.far)return null;return{distance:U,point:qQ.clone(),object:J}}function FQ(J,Q,$,Z,W,K,H,Y,X,U){J.getVertexPosition(Y,UQ),J.getVertexPosition(X,GQ),J.getVertexPosition(U,NQ);let N=qU(J,Q,$,Z,UQ,GQ,NQ,DK);if(N){let E=new w;if(P9.getBarycoord(DK,UQ,GQ,NQ,E),W)N.uv=P9.getInterpolatedAttribute(W,Y,X,U,E,new H0);if(K)N.uv1=P9.getInterpolatedAttribute(K,Y,X,U,E,new H0);if(H){if(N.normal=P9.getInterpolatedAttribute(H,Y,X,U,E,new w),N.normal.dot(Z.direction)>0)N.normal.multiplyScalar(-1)}let G={a:Y,b:X,c:U,normal:new w,materialIndex:0};P9.getNormal(UQ,GQ,NQ,G.normal),N.face=G,N.barycoord=E}return N}var Z6=new DJ,BK=new DJ,MK=new DJ,FU=new DJ,zK=new n0,OQ=new w,m$=new R9,CK=new n0,d$=new w8;class iQ extends p0{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new n0,this.bindMatrixInverse=new n0,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new X9;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,OQ),this.boundingBox.expandByPoint(OQ)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new R9;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,OQ),this.boundingSphere.expandByPoint(OQ)}copy(J,Q){if(super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,Q){let $=this.material,Z=this.matrixWorld;if($===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(m$.copy(this.boundingSphere),m$.applyMatrix4(Z),J.ray.intersectsSphere(m$)===!1)return;if(CK.copy(Z).invert(),d$.copy(J.ray).applyMatrix4(CK),this.boundingBox!==null){if(d$.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,d$)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new DJ,Q=this.geometry.attributes.skinWeight;for(let $=0,Z=Q.count;$<Z;$++){J.fromBufferAttribute(Q,$);let W=1/J.manhattanLength();if(W!==1/0)J.multiplyScalar(W);else J.set(1,0,0,0);Q.setXYZW($,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else y0("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let $=this.skeleton,Z=this.geometry;if(BK.fromBufferAttribute(Z.attributes.skinIndex,J),MK.fromBufferAttribute(Z.attributes.skinWeight,J),Q.isVector4)Z6.copy(Q),Q.set(0,0,0,0);else Z6.set(...Q,1),Q.set(0,0,0);Z6.applyMatrix4(this.bindMatrix);for(let W=0;W<4;W++){let K=MK.getComponent(W);if(K!==0){let H=BK.getComponent(W);zK.multiplyMatrices($.bones[H].matrixWorld,$.boneInverses[H]),Q.addScaledVector(FU.copy(Z6).applyMatrix4(zK),K)}}if(Q.isVector4)Q.w=Z6.w;return Q.applyMatrix4(this.bindMatrixInverse)}}class I6 extends LJ{constructor(){super();this.isBone=!0,this.type="Bone"}}class _6 extends xJ{constructor(J=null,Q=1,$=1,Z,W,K,H,Y,X=1003,U=1003,N,E){super(null,K,H,Y,X,U,Z,W,N,E);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var PK=new n0,OU=new n0;class A6{constructor(J=[],Q=[]){this.uuid=I9(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){y0("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let $=0,Z=this.bones.length;$<Z;$++)this.boneInverses.push(new n0)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let $=new n0;if(this.bones[J])$.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push($)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($)$.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($){if($.parent&&$.parent.isBone)$.matrix.copy($.parent.matrixWorld).invert(),$.matrix.multiply($.matrixWorld);else $.matrix.copy($.matrixWorld);$.matrix.decompose($.position,$.quaternion,$.scale)}}}update(){let J=this.bones,Q=this.boneInverses,$=this.boneMatrices,Z=this.boneTexture;for(let W=0,K=J.length;W<K;W++){let H=J[W]?J[W].matrixWorld:OU;PK.multiplyMatrices(H,Q[W]),PK.toArray($,W*16)}if(Z!==null)Z.needsUpdate=!0}clone(){return new A6(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let $=new _6(Q,J,J,1023,1015);return $.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=$,this}getBoneByName(J){for(let Q=0,$=this.bones.length;Q<$;Q++){let Z=this.bones[Q];if(Z.name===J)return Z}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let $=0,Z=J.bones.length;$<Z;$++){let W=J.bones[$],K=Q[W];if(K===void 0)y0("Skeleton: No bone found with UUID:",W),K=new I6;this.bones.push(K),this.boneInverses.push(new n0().fromArray(J.boneInverses[$]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,$=this.boneInverses;for(let Z=0,W=Q.length;Z<W;Z++){let K=Q[Z];J.bones.push(K.uuid);let H=$[Z];J.boneInverses.push(H.toArray())}return J}}class M8 extends cJ{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var M7=new n0,IK=new n0,RQ=[],_K=new X9,RU=new n0,W6=new p0,K6=new R9;class Y8 extends p0{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new M8(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<$;Z++)this.setMatrixAt(Z,RU)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new X9;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,M7),_K.copy(J.boundingBox).applyMatrix4(M7),this.boundingBox.union(_K)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new R9;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,M7),K6.copy(J.boundingSphere).applyMatrix4(M7),this.boundingSphere.union(K6)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=this.morphTexture.source.data.data,W=$.length+1,K=J*W+1;for(let H=0;H<$.length;H++)$[H]=Z[K+H]}raycast(J,Q){let $=this.matrixWorld,Z=this.count;if(W6.geometry=this.geometry,W6.material=this.material,W6.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(K6.copy(this.boundingSphere),K6.applyMatrix4($),J.ray.intersectsSphere(K6)===!1)return;for(let W=0;W<Z;W++){this.getMatrixAt(W,M7),IK.multiplyMatrices($,M7),W6.matrixWorld=IK,W6.raycast(J,RQ);for(let K=0,H=RQ.length;K<H;K++){let Y=RQ[K];Y.instanceId=W,Y.object=this,Q.push(Y)}RQ.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new M8(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=$.length+1;if(this.morphTexture===null)this.morphTexture=new _6(new Float32Array(Z*this.count),Z,this.count,1028,1015);let W=this.morphTexture.source.data.data,K=0;for(let X=0;X<$.length;X++)K+=$[X];let H=this.geometry.morphTargetsRelative?1:1-K,Y=Z*J;return W[Y]=H,W.set($,Y+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var u8=new R9,LU=new H0(0.5,0.5),LQ=new w;class w6{constructor(J=new C9,Q=new C9,$=new C9,Z=new C9,W=new C9,K=new C9){this.planes=[J,Q,$,Z,W,K]}set(J,Q,$,Z,W,K){let H=this.planes;return H[0].copy(J),H[1].copy(Q),H[2].copy($),H[3].copy(Z),H[4].copy(W),H[5].copy(K),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,W=J.elements,K=W[0],H=W[1],Y=W[2],X=W[3],U=W[4],N=W[5],E=W[6],G=W[7],q=W[8],R=W[9],k=W[10],O=W[11],F=W[12],P=W[13],B=W[14],L=W[15];if(Z[0].setComponents(X-K,G-U,O-q,L-F).normalize(),Z[1].setComponents(X+K,G+U,O+q,L+F).normalize(),Z[2].setComponents(X+H,G+N,O+R,L+P).normalize(),Z[3].setComponents(X-H,G-N,O-R,L-P).normalize(),$)Z[4].setComponents(Y,E,k,B).normalize(),Z[5].setComponents(X-Y,G-E,O-k,L-B).normalize();else if(Z[4].setComponents(X-Y,G-E,O-k,L-B).normalize(),Q===2000)Z[5].setComponents(X+Y,G+E,O+k,L+B).normalize();else if(Q===2001)Z[5].setComponents(Y,E,k,B).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();u8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();u8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(u8)}intersectsSprite(J){u8.center.set(0,0,0);let Q=LU.distanceTo(J.center);return u8.radius=0.7071067811865476+Q,u8.applyMatrix4(J.matrixWorld),this.intersectsSphere(u8)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(LQ.x=Z.normal.x>0?J.max.x:J.min.x,LQ.y=Z.normal.y>0?J.max.y:J.min.y,LQ.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(LQ)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class T6 extends U9{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new b0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var _Q=new w,AQ=new w,AK=new n0,H6=new w8,VQ=new R9,u$=new w,wK=new w;class l7 extends LJ{constructor(J=new SJ,Q=new T6){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let Z=1,W=Q.count;Z<W;Z++)_Q.fromBufferAttribute(Q,Z-1),AQ.fromBufferAttribute(Q,Z),$[Z]=$[Z-1],$[Z]+=_Q.distanceTo(AQ);J.setAttribute("lineDistance",new XJ($,1))}else y0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,W=J.params.Line.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(VQ.copy($.boundingSphere),VQ.applyMatrix4(Z),VQ.radius+=W,J.ray.intersectsSphere(VQ)===!1)return;AK.copy(Z).invert(),H6.copy(J.ray).applyMatrix4(AK);let H=W/((this.scale.x+this.scale.y+this.scale.z)/3),Y=H*H,X=this.isLineSegments?2:1,U=$.index,E=$.attributes.position;if(U!==null){let G=Math.max(0,K.start),q=Math.min(U.count,K.start+K.count);for(let R=G,k=q-1;R<k;R+=X){let O=U.getX(R),F=U.getX(R+1),P=kQ(this,J,H6,Y,O,F,R);if(P)Q.push(P)}if(this.isLineLoop){let R=U.getX(q-1),k=U.getX(G),O=kQ(this,J,H6,Y,R,k,q-1);if(O)Q.push(O)}}else{let G=Math.max(0,K.start),q=Math.min(E.count,K.start+K.count);for(let R=G,k=q-1;R<k;R+=X){let O=kQ(this,J,H6,Y,R,R+1,R);if(O)Q.push(O)}if(this.isLineLoop){let R=kQ(this,J,H6,Y,q-1,G,q-1);if(R)Q.push(R)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let H=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=W}}}}}function kQ(J,Q,$,Z,W,K,H){let Y=J.geometry.attributes.position;if(_Q.fromBufferAttribute(Y,W),AQ.fromBufferAttribute(Y,K),$.distanceSqToSegment(_Q,AQ,u$,wK)>Z)return;u$.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(u$);if(U<Q.near||U>Q.far)return;return{distance:U,point:wK.clone().applyMatrix4(J.matrixWorld),index:H,face:null,faceIndex:null,barycoord:null,object:J}}var TK=new w,SK=new w;class oQ extends l7{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let Z=0,W=Q.count;Z<W;Z+=2)TK.fromBufferAttribute(Q,Z),SK.fromBufferAttribute(Q,Z+1),$[Z]=Z===0?0:$[Z-1],$[Z+1]=$[Z]+TK.distanceTo(SK);J.setAttribute("lineDistance",new XJ($,1))}else y0("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class aQ extends l7{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class S6 extends U9{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new b0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var jK=new n0,a$=new w8,DQ=new R9,BQ=new w;class rQ extends LJ{constructor(J=new SJ,Q=new S6){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,W=J.params.Points.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(DQ.copy($.boundingSphere),DQ.applyMatrix4(Z),DQ.radius+=W,J.ray.intersectsSphere(DQ)===!1)return;jK.copy(Z).invert(),a$.copy(J.ray).applyMatrix4(jK);let H=W/((this.scale.x+this.scale.y+this.scale.z)/3),Y=H*H,X=$.index,N=$.attributes.position;if(X!==null){let E=Math.max(0,K.start),G=Math.min(X.count,K.start+K.count);for(let q=E,R=G;q<R;q++){let k=X.getX(q);BQ.fromBufferAttribute(N,k),yK(BQ,k,Y,Z,J,Q,this)}}else{let E=Math.max(0,K.start),G=Math.min(N.count,K.start+K.count);for(let q=E,R=G;q<R;q++)BQ.fromBufferAttribute(N,q),yK(BQ,q,Y,Z,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let H=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=W}}}}}function yK(J,Q,$,Z,W,K,H){let Y=a$.distanceSqToPoint(J);if(Y<$){let X=new w;a$.closestPointToPoint(J,X),X.applyMatrix4(Z);let U=W.ray.origin.distanceTo(X);if(U<W.near||U>W.far)return;K.push({distance:U,distanceToRay:Math.sqrt(Y),point:X,index:Q,face:null,faceIndex:null,barycoord:null,object:H})}}class tQ extends xJ{constructor(J=[],Q=301,$,Z,W,K,H,Y,X,U){super(J,Q,$,Z,W,K,H,Y,X,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class eQ extends xJ{constructor(J,Q,$,Z,W,K,H,Y,X){super(J,Q,$,Z,W,K,H,Y,X);this.isCanvasTexture=!0,this.needsUpdate=!0}}class J7 extends xJ{constructor(J,Q,$=1014,Z,W,K,H=1003,Y=1003,X,U=1026,N=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let E={width:J,height:Q,depth:N};super(E,Z,W,K,H,Y,U,$,X);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new M6(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class ZW extends J7{constructor(J,Q=1014,$=301,Z,W,K=1003,H=1003,Y,X=1026){let U={width:J,height:J,depth:1},N=[U,U,U,U,U,U];super(J,J,Q,$,Z,W,K,H,Y,X);this.image=N,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class J$ extends xJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class Z9 extends SJ{constructor(J=1,Q=1,$=1,Z=1,W=1,K=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:W,depthSegments:K};let H=this;Z=Math.floor(Z),W=Math.floor(W),K=Math.floor(K);let Y=[],X=[],U=[],N=[],E=0,G=0;q("z","y","x",-1,-1,$,Q,J,K,W,0),q("z","y","x",1,-1,$,Q,-J,K,W,1),q("x","z","y",1,1,J,$,Q,Z,K,2),q("x","z","y",1,-1,J,$,-Q,Z,K,3),q("x","y","z",1,-1,J,Q,$,Z,W,4),q("x","y","z",-1,-1,J,Q,-$,Z,W,5),this.setIndex(Y),this.setAttribute("position",new XJ(X,3)),this.setAttribute("normal",new XJ(U,3)),this.setAttribute("uv",new XJ(N,2));function q(R,k,O,F,P,B,L,z,_,A,D){let I=B/_,p=L/A,v=B/2,b=L/2,o=z/2,S=_+1,m=A+1,r=0,d=0,X0=new w;for(let n=0;n<m;n++){let t=n*p-b;for(let Z0=0;Z0<S;Z0++){let l0=Z0*I-v;X0[R]=l0*F,X0[k]=t*P,X0[O]=o,X.push(X0.x,X0.y,X0.z),X0[R]=0,X0[k]=0,X0[O]=z>0?1:-1,U.push(X0.x,X0.y,X0.z),N.push(Z0/_),N.push(1-n/A),r+=1}}for(let n=0;n<A;n++)for(let t=0;t<_;t++){let Z0=E+t+S*n,l0=E+t+S*(n+1),_0=E+(t+1)+S*(n+1),VJ=E+(t+1)+S*n;Y.push(Z0,l0,VJ),Y.push(l0,_0,VJ),d+=6}H.addGroup(G,d,D),G+=d,E+=r}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new Z9(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class j6 extends SJ{constructor(J=1,Q=32,$=0,Z=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:Q,thetaStart:$,thetaLength:Z},Q=Math.max(3,Q);let W=[],K=[],H=[],Y=[],X=new w,U=new H0;K.push(0,0,0),H.push(0,0,1),Y.push(0.5,0.5);for(let N=0,E=3;N<=Q;N++,E+=3){let G=$+N/Q*Z;X.x=J*Math.cos(G),X.y=J*Math.sin(G),K.push(X.x,X.y,X.z),H.push(0,0,1),U.x=(K[E]/J+1)/2,U.y=(K[E+1]/J+1)/2,Y.push(U.x,U.y)}for(let N=1;N<=Q;N++)W.push(N,N+1,0);this.setIndex(W),this.setAttribute("position",new XJ(K,3)),this.setAttribute("normal",new XJ(H,3)),this.setAttribute("uv",new XJ(Y,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new j6(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class o9 extends SJ{constructor(J=1,Q=1,$=1,Z=32,W=1,K=!1,H=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:Z,heightSegments:W,openEnded:K,thetaStart:H,thetaLength:Y};let X=this;Z=Math.floor(Z),W=Math.floor(W);let U=[],N=[],E=[],G=[],q=0,R=[],k=$/2,O=0;if(F(),K===!1){if(J>0)P(!0);if(Q>0)P(!1)}this.setIndex(U),this.setAttribute("position",new XJ(N,3)),this.setAttribute("normal",new XJ(E,3)),this.setAttribute("uv",new XJ(G,2));function F(){let B=new w,L=new w,z=0,_=(Q-J)/$;for(let A=0;A<=W;A++){let D=[],I=A/W,p=I*(Q-J)+J;for(let v=0;v<=Z;v++){let b=v/Z,o=b*Y+H,S=Math.sin(o),m=Math.cos(o);L.x=p*S,L.y=-I*$+k,L.z=p*m,N.push(L.x,L.y,L.z),B.set(S,_,m).normalize(),E.push(B.x,B.y,B.z),G.push(b,1-I),D.push(q++)}R.push(D)}for(let A=0;A<Z;A++)for(let D=0;D<W;D++){let I=R[D][A],p=R[D+1][A],v=R[D+1][A+1],b=R[D][A+1];if(J>0||D!==0)U.push(I,p,b),z+=3;if(Q>0||D!==W-1)U.push(p,v,b),z+=3}X.addGroup(O,z,0),O+=z}function P(B){let L=q,z=new H0,_=new w,A=0,D=B===!0?J:Q,I=B===!0?1:-1;for(let v=1;v<=Z;v++)N.push(0,k*I,0),E.push(0,I,0),G.push(0.5,0.5),q++;let p=q;for(let v=0;v<=Z;v++){let o=v/Z*Y+H,S=Math.cos(o),m=Math.sin(o);_.x=D*m,_.y=k*I,_.z=D*S,N.push(_.x,_.y,_.z),E.push(0,I,0),z.x=S*0.5+0.5,z.y=m*0.5*I+0.5,G.push(z.x,z.y),q++}for(let v=0;v<Z;v++){let b=L+v,o=p+v;if(B===!0)U.push(o,o+1,b);else U.push(o+1,o,b);A+=3}X.addGroup(O,A,B===!0?1:2),O+=A}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new o9(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class A9{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){y0("Curve: .getPoint() not implemented.")}getPointAt(J,Q){let $=this.getUtoTmapping(J);return this.getPoint($,Q)}getPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));return Q}getSpacedPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPointAt($/J));return Q}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Q=[],$,Z=this.getPoint(0),W=0;Q.push(0);for(let K=1;K<=J;K++)$=this.getPoint(K/J),W+=$.distanceTo(Z),Q.push(W),Z=$;return this.cacheArcLengths=Q,Q}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Q=null){let $=this.getLengths(),Z=0,W=$.length,K;if(Q)K=Q;else K=J*$[W-1];let H=0,Y=W-1,X;while(H<=Y)if(Z=Math.floor(H+(Y-H)/2),X=$[Z]-K,X<0)H=Z+1;else if(X>0)Y=Z-1;else{Y=Z;break}if(Z=Y,$[Z]===K)return Z/(W-1);let U=$[Z],E=$[Z+1]-U,G=(K-U)/E;return(Z+G)/(W-1)}getTangent(J,Q){let Z=J-0.0001,W=J+0.0001;if(Z<0)Z=0;if(W>1)W=1;let K=this.getPoint(Z),H=this.getPoint(W),Y=Q||(K.isVector2?new H0:new w);return Y.copy(H).sub(K).normalize(),Y}getTangentAt(J,Q){let $=this.getUtoTmapping(J);return this.getTangent($,Q)}computeFrenetFrames(J,Q=!1){let $=new w,Z=[],W=[],K=[],H=new w,Y=new n0;for(let G=0;G<=J;G++){let q=G/J;Z[G]=this.getTangentAt(q,new w)}W[0]=new w,K[0]=new w;let X=Number.MAX_VALUE,U=Math.abs(Z[0].x),N=Math.abs(Z[0].y),E=Math.abs(Z[0].z);if(U<=X)X=U,$.set(1,0,0);if(N<=X)X=N,$.set(0,1,0);if(E<=X)$.set(0,0,1);H.crossVectors(Z[0],$).normalize(),W[0].crossVectors(Z[0],H),K[0].crossVectors(Z[0],W[0]);for(let G=1;G<=J;G++){if(W[G]=W[G-1].clone(),K[G]=K[G-1].clone(),H.crossVectors(Z[G-1],Z[G]),H.length()>Number.EPSILON){H.normalize();let q=Math.acos(o0(Z[G-1].dot(Z[G]),-1,1));W[G].applyMatrix4(Y.makeRotationAxis(H,q))}K[G].crossVectors(Z[G],W[G])}if(Q===!0){let G=Math.acos(o0(W[0].dot(W[J]),-1,1));if(G/=J,Z[0].dot(H.crossVectors(W[0],W[J]))>0)G=-G;for(let q=1;q<=J;q++)W[q].applyMatrix4(Y.makeRotationAxis(Z[q],G*q)),K[q].crossVectors(Z[q],W[q])}return{tangents:Z,normals:W,binormals:K}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}}class y6 extends A9{constructor(J=0,Q=0,$=1,Z=1,W=0,K=Math.PI*2,H=!1,Y=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Q,this.xRadius=$,this.yRadius=Z,this.aStartAngle=W,this.aEndAngle=K,this.aClockwise=H,this.aRotation=Y}getPoint(J,Q=new H0){let $=Q,Z=Math.PI*2,W=this.aEndAngle-this.aStartAngle,K=Math.abs(W)<Number.EPSILON;while(W<0)W+=Z;while(W>Z)W-=Z;if(W<Number.EPSILON)if(K)W=0;else W=Z;if(this.aClockwise===!0&&!K)if(W===Z)W=-Z;else W=W-Z;let H=this.aStartAngle+J*W,Y=this.aX+this.xRadius*Math.cos(H),X=this.aY+this.yRadius*Math.sin(H);if(this.aRotation!==0){let U=Math.cos(this.aRotation),N=Math.sin(this.aRotation),E=Y-this.aX,G=X-this.aY;Y=E*U-G*N+this.aX,X=E*N+G*U+this.aY}return $.set(Y,X)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class WW extends y6{constructor(J,Q,$,Z,W,K){super(J,Q,$,$,Z,W,K);this.isArcCurve=!0,this.type="ArcCurve"}}function KW(){let J=0,Q=0,$=0,Z=0;function W(K,H,Y,X){J=K,Q=Y,$=-3*K+3*H-2*Y-X,Z=2*K-2*H+Y+X}return{initCatmullRom:function(K,H,Y,X,U){W(H,Y,U*(Y-K),U*(X-H))},initNonuniformCatmullRom:function(K,H,Y,X,U,N,E){let G=(H-K)/U-(Y-K)/(U+N)+(Y-H)/N,q=(Y-H)/N-(X-H)/(N+E)+(X-Y)/E;G*=N,q*=N,W(H,Y,G,q)},calc:function(K){let H=K*K,Y=H*K;return J+Q*K+$*H+Z*Y}}}var vK=new w,fK=new w,c$=new KW,n$=new KW,s$=new KW;class HW extends A9{constructor(J=[],Q=!1,$="centripetal",Z=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Q,this.curveType=$,this.tension=Z}getPoint(J,Q=new w){let $=Q,Z=this.points,W=Z.length,K=(W-(this.closed?0:1))*J,H=Math.floor(K),Y=K-H;if(this.closed)H+=H>0?0:(Math.floor(Math.abs(H)/W)+1)*W;else if(Y===0&&H===W-1)H=W-2,Y=1;let X,U;if(this.closed||H>0)X=Z[(H-1)%W];else fK.subVectors(Z[0],Z[1]).add(Z[0]),X=fK;let N=Z[H%W],E=Z[(H+1)%W];if(this.closed||H+2<W)U=Z[(H+2)%W];else vK.subVectors(Z[W-1],Z[W-2]).add(Z[W-1]),U=vK;if(this.curveType==="centripetal"||this.curveType==="chordal"){let G=this.curveType==="chordal"?0.5:0.25,q=Math.pow(X.distanceToSquared(N),G),R=Math.pow(N.distanceToSquared(E),G),k=Math.pow(E.distanceToSquared(U),G);if(R<0.0001)R=1;if(q<0.0001)q=R;if(k<0.0001)k=R;c$.initNonuniformCatmullRom(X.x,N.x,E.x,U.x,q,R,k),n$.initNonuniformCatmullRom(X.y,N.y,E.y,U.y,q,R,k),s$.initNonuniformCatmullRom(X.z,N.z,E.z,U.z,q,R,k)}else if(this.curveType==="catmullrom")c$.initCatmullRom(X.x,N.x,E.x,U.x,this.tension),n$.initCatmullRom(X.y,N.y,E.y,U.y,this.tension),s$.initCatmullRom(X.z,N.z,E.z,U.z,this.tension);return $.set(c$.calc(Y),n$.calc(Y),s$.calc(Y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(Z.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let Z=this.points[Q];J.points.push(Z.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(new w().fromArray(Z))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function hK(J,Q,$,Z,W){let K=(Z-Q)*0.5,H=(W-$)*0.5,Y=J*J,X=J*Y;return(2*$-2*Z+K+H)*X+(-3*$+3*Z-2*K-H)*Y+K*J+$}function VU(J,Q){let $=1-J;return $*$*Q}function kU(J,Q){return 2*(1-J)*J*Q}function DU(J,Q){return J*J*Q}function G6(J,Q,$,Z){return VU(J,Q)+kU(J,$)+DU(J,Z)}function BU(J,Q){let $=1-J;return $*$*$*Q}function MU(J,Q){let $=1-J;return 3*$*$*J*Q}function zU(J,Q){return 3*(1-J)*J*J*Q}function CU(J,Q){return J*J*J*Q}function N6(J,Q,$,Z,W){return BU(J,Q)+MU(J,$)+zU(J,Z)+CU(J,W)}class Q$ extends A9{constructor(J=new H0,Q=new H0,$=new H0,Z=new H0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Q,this.v2=$,this.v3=Z}getPoint(J,Q=new H0){let $=Q,Z=this.v0,W=this.v1,K=this.v2,H=this.v3;return $.set(N6(J,Z.x,W.x,K.x,H.x),N6(J,Z.y,W.y,K.y,H.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class YW extends A9{constructor(J=new w,Q=new w,$=new w,Z=new w){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Q,this.v2=$,this.v3=Z}getPoint(J,Q=new w){let $=Q,Z=this.v0,W=this.v1,K=this.v2,H=this.v3;return $.set(N6(J,Z.x,W.x,K.x,H.x),N6(J,Z.y,W.y,K.y,H.y),N6(J,Z.z,W.z,K.z,H.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class $$ extends A9{constructor(J=new H0,Q=new H0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Q}getPoint(J,Q=new H0){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new H0){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class XW extends A9{constructor(J=new w,Q=new w){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Q}getPoint(J,Q=new w){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new w){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class Z$ extends A9{constructor(J=new H0,Q=new H0,$=new H0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new H0){let $=Q,Z=this.v0,W=this.v1,K=this.v2;return $.set(G6(J,Z.x,W.x,K.x),G6(J,Z.y,W.y,K.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class m7 extends A9{constructor(J=new w,Q=new w,$=new w){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new w){let $=Q,Z=this.v0,W=this.v1,K=this.v2;return $.set(G6(J,Z.x,W.x,K.x),G6(J,Z.y,W.y,K.y),G6(J,Z.z,W.z,K.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class W$ extends A9{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Q=new H0){let $=Q,Z=this.points,W=(Z.length-1)*J,K=Math.floor(W),H=W-K,Y=Z[K===0?K:K-1],X=Z[K],U=Z[K>Z.length-2?Z.length-1:K+1],N=Z[K>Z.length-3?Z.length-1:K+2];return $.set(hK(H,Y.x,X.x,U.x,N.x),hK(H,Y.y,X.y,U.y,N.y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let Z=this.points[Q];J.points.push(Z.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(new H0().fromArray(Z))}return this}}var r$=Object.freeze({__proto__:null,ArcCurve:WW,CatmullRomCurve3:HW,CubicBezierCurve:Q$,CubicBezierCurve3:YW,EllipseCurve:y6,LineCurve:$$,LineCurve3:XW,QuadraticBezierCurve:Z$,QuadraticBezierCurve3:m7,SplineCurve:W$});class UW extends A9{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),Q=this.curves[this.curves.length-1].getPoint(1);if(!J.equals(Q)){let $=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new r$[$](Q,J))}return this}getPoint(J,Q){let $=J*this.getLength(),Z=this.getCurveLengths(),W=0;while(W<Z.length){if(Z[W]>=$){let K=Z[W]-$,H=this.curves[W],Y=H.getLength(),X=Y===0?0:1-K/Y;return H.getPointAt(X,Q)}W++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],Q=0;for(let $=0,Z=this.curves.length;$<Z;$++)Q+=this.curves[$].getLength(),J.push(Q);return this.cacheLengths=J,J}getSpacedPoints(J=40){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));if(this.autoClose)Q.push(Q[0]);return Q}getPoints(J=12){let Q=[],$;for(let Z=0,W=this.curves;Z<W.length;Z++){let K=W[Z],H=K.isEllipseCurve?J*2:K.isLineCurve||K.isLineCurve3?1:K.isSplineCurve?J*K.points.length:J,Y=K.getPoints(H);for(let X=0;X<Y.length;X++){let U=Y[X];if($&&$.equals(U))continue;Q.push(U),$=U}}if(this.autoClose&&Q.length>1&&!Q[Q.length-1].equals(Q[0]))Q.push(Q[0]);return Q}copy(J){super.copy(J),this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let Z=J.curves[Q];this.curves.push(Z.clone())}return this.autoClose=J.autoClose,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let Q=0,$=this.curves.length;Q<$;Q++){let Z=this.curves[Q];J.curves.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let Z=J.curves[Q];this.curves.push(new r$[Z.type]().fromJSON(Z))}return this}}class wQ extends UW{constructor(J){super();if(this.type="Path",this.currentPoint=new H0,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let Q=1,$=J.length;Q<$;Q++)this.lineTo(J[Q].x,J[Q].y);return this}moveTo(J,Q){return this.currentPoint.set(J,Q),this}lineTo(J,Q){let $=new $$(this.currentPoint.clone(),new H0(J,Q));return this.curves.push($),this.currentPoint.set(J,Q),this}quadraticCurveTo(J,Q,$,Z){let W=new Z$(this.currentPoint.clone(),new H0(J,Q),new H0($,Z));return this.curves.push(W),this.currentPoint.set($,Z),this}bezierCurveTo(J,Q,$,Z,W,K){let H=new Q$(this.currentPoint.clone(),new H0(J,Q),new H0($,Z),new H0(W,K));return this.curves.push(H),this.currentPoint.set(W,K),this}splineThru(J){let Q=[this.currentPoint.clone()].concat(J),$=new W$(Q);return this.curves.push($),this.currentPoint.copy(J[J.length-1]),this}arc(J,Q,$,Z,W,K){let H=this.currentPoint.x,Y=this.currentPoint.y;return this.absarc(J+H,Q+Y,$,Z,W,K),this}absarc(J,Q,$,Z,W,K){return this.absellipse(J,Q,$,$,Z,W,K),this}ellipse(J,Q,$,Z,W,K,H,Y){let X=this.currentPoint.x,U=this.currentPoint.y;return this.absellipse(J+X,Q+U,$,Z,W,K,H,Y),this}absellipse(J,Q,$,Z,W,K,H,Y){let X=new y6(J,Q,$,Z,W,K,H,Y);if(this.curves.length>0){let N=X.getPoint(0);if(!N.equals(this.currentPoint))this.lineTo(N.x,N.y)}this.curves.push(X);let U=X.getPoint(1);return this.currentPoint.copy(U),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class v6 extends wQ{constructor(J){super(J);this.uuid=I9(),this.type="Shape",this.holes=[]}getPointsHoles(J){let Q=[];for(let $=0,Z=this.holes.length;$<Z;$++)Q[$]=this.holes[$].getPoints(J);return Q}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let Z=J.holes[Q];this.holes.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let Q=0,$=this.holes.length;Q<$;Q++){let Z=this.holes[Q];J.holes.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let Z=J.holes[Q];this.holes.push(new wQ().fromJSON(Z))}return this}}function PU(J,Q,$=2){let Z=Q&&Q.length,W=Z?Q[0]*$:J.length,K=nH(J,0,W,$,!0),H=[];if(!K||K.next===K.prev)return H;let Y,X,U;if(Z)K=TU(J,Q,K,$);if(J.length>80*$){Y=J[0],X=J[1];let N=Y,E=X;for(let G=$;G<W;G+=$){let q=J[G],R=J[G+1];if(q<Y)Y=q;if(R<X)X=R;if(q>N)N=q;if(R>E)E=R}U=Math.max(N-Y,E-X),U=U!==0?32767/U:0}return q6(K,H,$,Y,X,U,0),H}function nH(J,Q,$,Z,W){let K;if(W===lU(J,Q,$,Z)>0)for(let H=Q;H<$;H+=Z)K=bK(H/Z|0,J[H],J[H+1],K);else for(let H=$-Z;H>=Q;H-=Z)K=bK(H/Z|0,J[H],J[H+1],K);if(K&&T7(K,K.next))O6(K),K=K.next;return K}function s8(J,Q){if(!J)return J;if(!Q)Q=J;let $=J,Z;do if(Z=!1,!$.steiner&&(T7($,$.next)||yJ($.prev,$,$.next)===0)){if(O6($),$=Q=$.prev,$===$.next)break;Z=!0}else $=$.next;while(Z||$!==Q);return Q}function q6(J,Q,$,Z,W,K,H){if(!J)return;if(!H&&K)fU(J,Z,W,K);let Y=J;while(J.prev!==J.next){let{prev:X,next:U}=J;if(K?_U(J,Z,W,K):IU(J)){Q.push(X.i,J.i,U.i),O6(J),J=U.next,Y=U.next;continue}if(J=U,J===Y){if(!H)q6(s8(J),Q,$,Z,W,K,1);else if(H===1)J=AU(s8(J),Q),q6(J,Q,$,Z,W,K,2);else if(H===2)wU(J,Q,$,Z,W,K);break}}}function IU(J){let Q=J.prev,$=J,Z=J.next;if(yJ(Q,$,Z)>=0)return!1;let W=Q.x,K=$.x,H=Z.x,Y=Q.y,X=$.y,U=Z.y,N=Math.min(W,K,H),E=Math.min(Y,X,U),G=Math.max(W,K,H),q=Math.max(Y,X,U),R=Z.next;while(R!==Q){if(R.x>=N&&R.x<=G&&R.y>=E&&R.y<=q&&Y6(W,Y,K,X,H,U,R.x,R.y)&&yJ(R.prev,R,R.next)>=0)return!1;R=R.next}return!0}function _U(J,Q,$,Z){let W=J.prev,K=J,H=J.next;if(yJ(W,K,H)>=0)return!1;let Y=W.x,X=K.x,U=H.x,N=W.y,E=K.y,G=H.y,q=Math.min(Y,X,U),R=Math.min(N,E,G),k=Math.max(Y,X,U),O=Math.max(N,E,G),F=t$(q,R,Q,$,Z),P=t$(k,O,Q,$,Z),B=J.prevZ,L=J.nextZ;while(B&&B.z>=F&&L&&L.z<=P){if(B.x>=q&&B.x<=k&&B.y>=R&&B.y<=O&&B!==W&&B!==H&&Y6(Y,N,X,E,U,G,B.x,B.y)&&yJ(B.prev,B,B.next)>=0)return!1;if(B=B.prevZ,L.x>=q&&L.x<=k&&L.y>=R&&L.y<=O&&L!==W&&L!==H&&Y6(Y,N,X,E,U,G,L.x,L.y)&&yJ(L.prev,L,L.next)>=0)return!1;L=L.nextZ}while(B&&B.z>=F){if(B.x>=q&&B.x<=k&&B.y>=R&&B.y<=O&&B!==W&&B!==H&&Y6(Y,N,X,E,U,G,B.x,B.y)&&yJ(B.prev,B,B.next)>=0)return!1;B=B.prevZ}while(L&&L.z<=P){if(L.x>=q&&L.x<=k&&L.y>=R&&L.y<=O&&L!==W&&L!==H&&Y6(Y,N,X,E,U,G,L.x,L.y)&&yJ(L.prev,L,L.next)>=0)return!1;L=L.nextZ}return!0}function AU(J,Q){let $=J;do{let Z=$.prev,W=$.next.next;if(!T7(Z,W)&&iH(Z,$,$.next,W)&&F6(Z,W)&&F6(W,Z))Q.push(Z.i,$.i,W.i),O6($),O6($.next),$=J=W;$=$.next}while($!==J);return s8($)}function wU(J,Q,$,Z,W,K){let H=J;do{let Y=H.next.next;while(Y!==H.prev){if(H.i!==Y.i&&xU(H,Y)){let X=oH(H,Y);H=s8(H,H.next),X=s8(X,X.next),q6(H,Q,$,Z,W,K,0),q6(X,Q,$,Z,W,K,0);return}Y=Y.next}H=H.next}while(H!==J)}function TU(J,Q,$,Z){let W=[];for(let K=0,H=Q.length;K<H;K++){let Y=Q[K]*Z,X=K<H-1?Q[K+1]*Z:J.length,U=nH(J,Y,X,Z,!1);if(U===U.next)U.steiner=!0;W.push(bU(U))}W.sort(SU);for(let K=0;K<W.length;K++)$=jU(W[K],$);return $}function SU(J,Q){let $=J.x-Q.x;if($===0){if($=J.y-Q.y,$===0){let Z=(J.next.y-J.y)/(J.next.x-J.x),W=(Q.next.y-Q.y)/(Q.next.x-Q.x);$=Z-W}}return $}function jU(J,Q){let $=yU(J,Q);if(!$)return Q;let Z=oH($,J);return s8(Z,Z.next),s8($,$.next)}function yU(J,Q){let $=Q,Z=J.x,W=J.y,K=-1/0,H;if(T7(J,$))return $;do{if(T7(J,$.next))return $.next;else if(W<=$.y&&W>=$.next.y&&$.next.y!==$.y){let E=$.x+(W-$.y)*($.next.x-$.x)/($.next.y-$.y);if(E<=Z&&E>K){if(K=E,H=$.x<$.next.x?$:$.next,E===Z)return H}}$=$.next}while($!==Q);if(!H)return null;let Y=H,X=H.x,U=H.y,N=1/0;$=H;do{if(Z>=$.x&&$.x>=X&&Z!==$.x&&sH(W<U?Z:K,W,X,U,W<U?K:Z,W,$.x,$.y)){let E=Math.abs(W-$.y)/(Z-$.x);if(F6($,J)&&(E<N||E===N&&($.x>H.x||$.x===H.x&&vU(H,$))))H=$,N=E}$=$.next}while($!==Y);return H}function vU(J,Q){return yJ(J.prev,J,Q.prev)<0&&yJ(Q.next,J,J.next)<0}function fU(J,Q,$,Z){let W=J;do{if(W.z===0)W.z=t$(W.x,W.y,Q,$,Z);W.prevZ=W.prev,W.nextZ=W.next,W=W.next}while(W!==J);W.prevZ.nextZ=null,W.prevZ=null,hU(W)}function hU(J){let Q,$=1;do{let Z=J,W;J=null;let K=null;Q=0;while(Z){Q++;let H=Z,Y=0;for(let U=0;U<$;U++)if(Y++,H=H.nextZ,!H)break;let X=$;while(Y>0||X>0&&H){if(Y!==0&&(X===0||!H||Z.z<=H.z))W=Z,Z=Z.nextZ,Y--;else W=H,H=H.nextZ,X--;if(K)K.nextZ=W;else J=W;W.prevZ=K,K=W}Z=H}K.nextZ=null,$*=2}while(Q>1);return J}function t$(J,Q,$,Z,W){return J=(J-$)*W|0,Q=(Q-Z)*W|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,Q=(Q|Q<<8)&16711935,Q=(Q|Q<<4)&252645135,Q=(Q|Q<<2)&858993459,Q=(Q|Q<<1)&1431655765,J|Q<<1}function bU(J){let Q=J,$=J;do{if(Q.x<$.x||Q.x===$.x&&Q.y<$.y)$=Q;Q=Q.next}while(Q!==J);return $}function sH(J,Q,$,Z,W,K,H,Y){return(W-H)*(Q-Y)>=(J-H)*(K-Y)&&(J-H)*(Z-Y)>=($-H)*(Q-Y)&&($-H)*(K-Y)>=(W-H)*(Z-Y)}function Y6(J,Q,$,Z,W,K,H,Y){return!(J===H&&Q===Y)&&sH(J,Q,$,Z,W,K,H,Y)}function xU(J,Q){return J.next.i!==Q.i&&J.prev.i!==Q.i&&!gU(J,Q)&&(F6(J,Q)&&F6(Q,J)&&pU(J,Q)&&(yJ(J.prev,J,Q.prev)||yJ(J,Q.prev,Q))||T7(J,Q)&&yJ(J.prev,J,J.next)>0&&yJ(Q.prev,Q,Q.next)>0)}function yJ(J,Q,$){return(Q.y-J.y)*($.x-Q.x)-(Q.x-J.x)*($.y-Q.y)}function T7(J,Q){return J.x===Q.x&&J.y===Q.y}function iH(J,Q,$,Z){let W=zQ(yJ(J,Q,$)),K=zQ(yJ(J,Q,Z)),H=zQ(yJ($,Z,J)),Y=zQ(yJ($,Z,Q));if(W!==K&&H!==Y)return!0;if(W===0&&MQ(J,$,Q))return!0;if(K===0&&MQ(J,Z,Q))return!0;if(H===0&&MQ($,J,Z))return!0;if(Y===0&&MQ($,Q,Z))return!0;return!1}function MQ(J,Q,$){return Q.x<=Math.max(J.x,$.x)&&Q.x>=Math.min(J.x,$.x)&&Q.y<=Math.max(J.y,$.y)&&Q.y>=Math.min(J.y,$.y)}function zQ(J){return J>0?1:J<0?-1:0}function gU(J,Q){let $=J;do{if($.i!==J.i&&$.next.i!==J.i&&$.i!==Q.i&&$.next.i!==Q.i&&iH($,$.next,J,Q))return!0;$=$.next}while($!==J);return!1}function F6(J,Q){return yJ(J.prev,J,J.next)<0?yJ(J,Q,J.next)>=0&&yJ(J,J.prev,Q)>=0:yJ(J,Q,J.prev)<0||yJ(J,J.next,Q)<0}function pU(J,Q){let $=J,Z=!1,W=(J.x+Q.x)/2,K=(J.y+Q.y)/2;do{if($.y>K!==$.next.y>K&&$.next.y!==$.y&&W<($.next.x-$.x)*(K-$.y)/($.next.y-$.y)+$.x)Z=!Z;$=$.next}while($!==J);return Z}function oH(J,Q){let $=e$(J.i,J.x,J.y),Z=e$(Q.i,Q.x,Q.y),W=J.next,K=Q.prev;return J.next=Q,Q.prev=J,$.next=W,W.prev=$,Z.next=$,$.prev=Z,K.next=Z,Z.prev=K,Z}function bK(J,Q,$,Z){let W=e$(J,Q,$);if(!Z)W.prev=W,W.next=W;else W.next=Z.next,W.prev=Z,Z.next.prev=W,Z.next=W;return W}function O6(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function e$(J,Q,$){return{i:J,x:Q,y:$,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function lU(J,Q,$,Z){let W=0;for(let K=Q,H=$-Z;K<$;K+=Z)W+=(J[H]-J[K])*(J[K+1]+J[H+1]),H=K;return W}class aH{static triangulate(J,Q,$=2){return PU(J,Q,$)}}class _7{static area(J){let Q=J.length,$=0;for(let Z=Q-1,W=0;W<Q;Z=W++)$+=J[Z].x*J[W].y-J[W].x*J[Z].y;return $*0.5}static isClockWise(J){return _7.area(J)<0}static triangulateShape(J,Q){let $=[],Z=[],W=[];xK(J),gK($,J);let K=J.length;Q.forEach(xK);for(let Y=0;Y<Q.length;Y++)Z.push(K),K+=Q[Y].length,gK($,Q[Y]);let H=aH.triangulate($,Z);for(let Y=0;Y<H.length;Y+=3)W.push(H.slice(Y,Y+3));return W}}function xK(J){let Q=J.length;if(Q>2&&J[Q-1].equals(J[0]))J.pop()}function gK(J,Q){for(let $=0;$<Q.length;$++)J.push(Q[$].x),J.push(Q[$].y)}class f6 extends SJ{constructor(J=[new H0(0,-0.5),new H0(0.5,0),new H0(0,0.5)],Q=12,$=0,Z=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:J,segments:Q,phiStart:$,phiLength:Z},Q=Math.floor(Q),Z=o0(Z,0,Math.PI*2);let W=[],K=[],H=[],Y=[],X=[],U=1/Q,N=new w,E=new H0,G=new w,q=new w,R=new w,k=0,O=0;for(let F=0;F<=J.length-1;F++)switch(F){case 0:k=J[F+1].x-J[F].x,O=J[F+1].y-J[F].y,G.x=O*1,G.y=-k,G.z=O*0,R.copy(G),G.normalize(),Y.push(G.x,G.y,G.z);break;case J.length-1:Y.push(R.x,R.y,R.z);break;default:k=J[F+1].x-J[F].x,O=J[F+1].y-J[F].y,G.x=O*1,G.y=-k,G.z=O*0,q.copy(G),G.x+=R.x,G.y+=R.y,G.z+=R.z,G.normalize(),Y.push(G.x,G.y,G.z),R.copy(q)}for(let F=0;F<=Q;F++){let P=$+F*U*Z,B=Math.sin(P),L=Math.cos(P);for(let z=0;z<=J.length-1;z++){N.x=J[z].x*B,N.y=J[z].y,N.z=J[z].x*L,K.push(N.x,N.y,N.z),E.x=F/Q,E.y=z/(J.length-1),H.push(E.x,E.y);let _=Y[3*z+0]*B,A=Y[3*z+1],D=Y[3*z+0]*L;X.push(_,A,D)}}for(let F=0;F<Q;F++)for(let P=0;P<J.length-1;P++){let B=P+F*J.length,L=B,z=B+J.length,_=B+J.length+1,A=B+1;W.push(L,z,A),W.push(_,A,z)}this.setIndex(W),this.setAttribute("position",new XJ(K,3)),this.setAttribute("uv",new XJ(H,2)),this.setAttribute("normal",new XJ(X,3))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new f6(J.points,J.segments,J.phiStart,J.phiLength)}}class l9 extends SJ{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let W=J/2,K=Q/2,H=Math.floor($),Y=Math.floor(Z),X=H+1,U=Y+1,N=J/H,E=Q/Y,G=[],q=[],R=[],k=[];for(let O=0;O<U;O++){let F=O*E-K;for(let P=0;P<X;P++){let B=P*N-W;q.push(B,-F,0),R.push(0,0,1),k.push(P/H),k.push(1-O/Y)}}for(let O=0;O<Y;O++)for(let F=0;F<H;F++){let P=F+X*O,B=F+X*(O+1),L=F+1+X*(O+1),z=F+1+X*O;G.push(P,B,z),G.push(B,L,z)}this.setIndex(G),this.setAttribute("position",new XJ(q,3)),this.setAttribute("normal",new XJ(R,3)),this.setAttribute("uv",new XJ(k,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new l9(J.width,J.height,J.widthSegments,J.heightSegments)}}class h6 extends SJ{constructor(J=new v6([new H0(0,0.5),new H0(-0.5,-0.5),new H0(0.5,-0.5)]),Q=12){super();this.type="ShapeGeometry",this.parameters={shapes:J,curveSegments:Q};let $=[],Z=[],W=[],K=[],H=0,Y=0;if(Array.isArray(J)===!1)X(J);else for(let U=0;U<J.length;U++)X(J[U]),this.addGroup(H,Y,U),H+=Y,Y=0;this.setIndex($),this.setAttribute("position",new XJ(Z,3)),this.setAttribute("normal",new XJ(W,3)),this.setAttribute("uv",new XJ(K,2));function X(U){let N=Z.length/3,E=U.extractPoints(Q),G=E.shape,q=E.holes;if(_7.isClockWise(G)===!1)G=G.reverse();for(let k=0,O=q.length;k<O;k++){let F=q[k];if(_7.isClockWise(F)===!0)q[k]=F.reverse()}let R=_7.triangulateShape(G,q);for(let k=0,O=q.length;k<O;k++){let F=q[k];G=G.concat(F)}for(let k=0,O=G.length;k<O;k++){let F=G[k];Z.push(F.x,F.y,0),W.push(0,0,1),K.push(F.x,F.y)}for(let k=0,O=R.length;k<O;k++){let F=R[k],P=F[0]+N,B=F[1]+N,L=F[2]+N;$.push(P,B,L),Y+=3}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Q=this.parameters.shapes;return mU(Q,J)}static fromJSON(J,Q){let $=[];for(let Z=0,W=J.shapes.length;Z<W;Z++){let K=Q[J.shapes[Z]];$.push(K)}return new h6($,J.curveSegments)}}function mU(J,Q){if(Q.shapes=[],Array.isArray(J))for(let $=0,Z=J.length;$<Z;$++){let W=J[$];Q.shapes.push(W.uuid)}else Q.shapes.push(J.uuid);return Q}class X8 extends SJ{constructor(J=1,Q=32,$=16,Z=0,W=Math.PI*2,K=0,H=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:$,phiStart:Z,phiLength:W,thetaStart:K,thetaLength:H},Q=Math.max(3,Math.floor(Q)),$=Math.max(2,Math.floor($));let Y=Math.min(K+H,Math.PI),X=0,U=[],N=new w,E=new w,G=[],q=[],R=[],k=[];for(let O=0;O<=$;O++){let F=[],P=O/$,B=K+P*H,L=J*Math.cos(B),z=Math.sqrt(J*J-L*L),_=0;if(O===0&&K===0)_=0.5/Q;else if(O===$&&Y===Math.PI)_=-0.5/Q;for(let A=0;A<=Q;A++){let D=A/Q,I=Z+D*W;N.x=-z*Math.cos(I),N.y=L,N.z=z*Math.sin(I),q.push(N.x,N.y,N.z),E.copy(N).normalize(),R.push(E.x,E.y,E.z),k.push(D+_,1-P),F.push(X++)}U.push(F)}for(let O=0;O<$;O++)for(let F=0;F<Q;F++){let P=U[O][F+1],B=U[O][F],L=U[O+1][F],z=U[O+1][F+1];if(O!==0||K>0)G.push(P,B,z);if(O!==$-1||Y<Math.PI)G.push(B,L,z)}this.setIndex(G),this.setAttribute("position",new XJ(q,3)),this.setAttribute("normal",new XJ(R,3)),this.setAttribute("uv",new XJ(k,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new X8(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class Q7 extends SJ{constructor(J=1,Q=0.4,$=12,Z=48,W=Math.PI*2,K=0,H=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:$,tubularSegments:Z,arc:W,thetaStart:K,thetaLength:H},$=Math.floor($),Z=Math.floor(Z);let Y=[],X=[],U=[],N=[],E=new w,G=new w,q=new w;for(let R=0;R<=$;R++){let k=K+R/$*H;for(let O=0;O<=Z;O++){let F=O/Z*W;G.x=(J+Q*Math.cos(k))*Math.cos(F),G.y=(J+Q*Math.cos(k))*Math.sin(F),G.z=Q*Math.sin(k),X.push(G.x,G.y,G.z),E.x=J*Math.cos(F),E.y=J*Math.sin(F),q.subVectors(G,E).normalize(),U.push(q.x,q.y,q.z),N.push(O/Z),N.push(R/$)}}for(let R=1;R<=$;R++)for(let k=1;k<=Z;k++){let O=(Z+1)*R+k-1,F=(Z+1)*(R-1)+k-1,P=(Z+1)*(R-1)+k,B=(Z+1)*R+k;Y.push(O,F,B),Y.push(F,P,B)}this.setIndex(Y),this.setAttribute("position",new XJ(X,3)),this.setAttribute("normal",new XJ(U,3)),this.setAttribute("uv",new XJ(N,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new Q7(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc,J.thetaStart,J.thetaLength)}}class b6 extends SJ{constructor(J=new m7(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),Q=64,$=1,Z=8,W=!1){super();this.type="TubeGeometry",this.parameters={path:J,tubularSegments:Q,radius:$,radialSegments:Z,closed:W};let K=J.computeFrenetFrames(Q,W);this.tangents=K.tangents,this.normals=K.normals,this.binormals=K.binormals;let H=new w,Y=new w,X=new H0,U=new w,N=[],E=[],G=[],q=[];R(),this.setIndex(q),this.setAttribute("position",new XJ(N,3)),this.setAttribute("normal",new XJ(E,3)),this.setAttribute("uv",new XJ(G,2));function R(){for(let P=0;P<Q;P++)k(P);k(W===!1?Q:0),F(),O()}function k(P){U=J.getPointAt(P/Q,U);let B=K.normals[P],L=K.binormals[P];for(let z=0;z<=Z;z++){let _=z/Z*Math.PI*2,A=Math.sin(_),D=-Math.cos(_);Y.x=D*B.x+A*L.x,Y.y=D*B.y+A*L.y,Y.z=D*B.z+A*L.z,Y.normalize(),E.push(Y.x,Y.y,Y.z),H.x=U.x+$*Y.x,H.y=U.y+$*Y.y,H.z=U.z+$*Y.z,N.push(H.x,H.y,H.z)}}function O(){for(let P=1;P<=Q;P++)for(let B=1;B<=Z;B++){let L=(Z+1)*(P-1)+(B-1),z=(Z+1)*P+(B-1),_=(Z+1)*P+B,A=(Z+1)*(P-1)+B;q.push(L,z,A),q.push(z,_,A)}}function F(){for(let P=0;P<=Q;P++)for(let B=0;B<=Z;B++)X.x=P/Q,X.y=B/Z,G.push(X.x,X.y)}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON();return J.path=this.parameters.path.toJSON(),J}static fromJSON(J){return new b6(new r$[J.path.type]().fromJSON(J.path),J.tubularSegments,J.radius,J.radialSegments,J.closed)}}function $7(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let W=J[$][Z];if(pK(W))if(W.isRenderTargetTexture)y0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=W.clone();else if(Array.isArray(W))if(pK(W[0])){let K=[];for(let H=0,Y=W.length;H<Y;H++)K[H]=W[H].clone();Q[$][Z]=K}else Q[$][Z]=W.slice();else Q[$][Z]=W}}return Q}function W9(J){let Q={};for(let $=0;$<J.length;$++){let Z=$7(J[$]);for(let W in Z)Q[W]=Z[W]}return Q}function pK(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function dU(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function GW(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return QJ.workingColorSpace}var rH={clone:$7,merge:W9},uU=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cU=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class w9 extends U9{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uU,this.fragmentShader=cU,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=$7(J.uniforms),this.uniformsGroups=dU(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let K=this.uniforms[Z].value;if(K&&K.isTexture)Q.uniforms[Z]={type:"t",value:K.toJSON(J).uuid};else if(K&&K.isColor)Q.uniforms[Z]={type:"c",value:K.getHex()};else if(K&&K.isVector2)Q.uniforms[Z]={type:"v2",value:K.toArray()};else if(K&&K.isVector3)Q.uniforms[Z]={type:"v3",value:K.toArray()};else if(K&&K.isVector4)Q.uniforms[Z]={type:"v4",value:K.toArray()};else if(K&&K.isMatrix3)Q.uniforms[Z]={type:"m3",value:K.toArray()};else if(K&&K.isMatrix4)Q.uniforms[Z]={type:"m4",value:K.toArray()};else Q.uniforms[Z]={value:K}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let Z=J.uniforms[$];switch(this.uniforms[$]={},Z.type){case"t":this.uniforms[$].value=Q[Z.value]||null;break;case"c":this.uniforms[$].value=new b0().setHex(Z.value);break;case"v2":this.uniforms[$].value=new H0().fromArray(Z.value);break;case"v3":this.uniforms[$].value=new w().fromArray(Z.value);break;case"v4":this.uniforms[$].value=new DJ().fromArray(Z.value);break;case"m3":this.uniforms[$].value=new s0().fromArray(Z.value);break;case"m4":this.uniforms[$].value=new n0().fromArray(Z.value);break;default:this.uniforms[$].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class NW extends w9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fJ extends U9{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new b0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new b0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class L9 extends fJ{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new H0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return o0(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new b0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new b0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new b0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(J){if(this._retroreflectivity>0!==J>0)this.version++;this._retroreflectivity=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.retroreflectivity=J.retroreflectivity,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class K$ extends U9{constructor(J){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new b0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new b0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new H0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _9,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.envMapIntensity=J.envMapIntensity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class EW extends U9{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class qW extends U9{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function B8(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function IQ(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}function nU(J){function Q(W,K){return J[W]-J[K]}let $=J.length,Z=Array($);for(let W=0;W!==$;++W)Z[W]=W;return Z.sort(Q),Z}function lK(J,Q,$){let Z=J.length,W=new J.constructor(Z);for(let K=0,H=0;H!==Z;++K){let Y=$[K]*Q;for(let X=0;X!==Q;++X)W[H++]=J[Y+X]}return W}function sU(J,Q,$,Z){let W=1,K=J[0];while(K!==void 0&&K[Z]===void 0)K=J[W++];if(K===void 0)return;let H=K[Z];if(H===void 0)return;if(Array.isArray(H))do{if(H=K[Z],H!==void 0)Q.push(K.time),$.push(...H);K=J[W++]}while(K!==void 0);else if(H.toArray!==void 0)do{if(H=K[Z],H!==void 0)Q.push(K.time),H.toArray($,$.length);K=J[W++]}while(K!==void 0);else do{if(H=K[Z],H!==void 0)Q.push(K.time),$.push(H);K=J[W++]}while(K!==void 0)}class U8{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],W=Q[$-1];J:{Q:{let K;$:{Z:if(!(J<Z)){for(let H=$+2;;){if(Z===void 0){if(J<W)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===H)break;if(W=Z,Z=Q[++$],J<Z)break Q}K=Q.length;break $}if(!(J>=W)){let H=Q[1];if(J<H)$=2,W=H;for(let Y=$-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(Z=W,W=Q[--$-1],J>=W)break Q}K=$,$=0;break $}break J}while($<K){let H=$+K>>>1;if(J<Q[H])K=H;else $=H+1}if(Z=Q[$],W=Q[$-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,W,Z)}return this.interpolate_($,W,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z;for(let K=0;K!==Z;++K)Q[K]=$[W+K];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class FW extends U8{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,W=J-2,K=J+1,H=Z[W],Y=Z[K];if(H===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,H=2*Q-$;break;case 2402:W=Z.length-2,H=Q+Z[W]-Z[W+1];break;default:W=J,H=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:K=J,Y=2*$-Q;break;case 2402:K=1,Y=$+Z[1]-Z[0];break;default:K=J-1,Y=Q}let X=($-Q)*0.5,U=this.valueSize;this._weightPrev=X/(Q-H),this._weightNext=X/(Y-$),this._offsetPrev=W*U,this._offsetNext=K*U}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this._offsetPrev,N=this._offsetNext,E=this._weightPrev,G=this._weightNext,q=($-Q)/(Z-Q),R=q*q,k=R*q,O=-E*k+2*E*R-E*q,F=(1+E)*k+(-1.5-2*E)*R+(-0.5+E)*q+1,P=(-1-G)*k+(1.5+G)*R+0.5*q,B=G*k-G*R;for(let L=0;L!==H;++L)W[L]=O*K[U+L]+F*K[X+L]+P*K[Y+L]+B*K[N+L];return W}}class H$ extends U8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=($-Q)/(Z-Q),N=1-U;for(let E=0;E!==H;++E)W[E]=K[X+E]*N+K[Y+E]*U;return W}}class OW extends U8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class RW extends U8{interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this.inTangents,N=this.outTangents;if(!U||!N){let q=($-Q)/(Z-Q),R=1-q;for(let k=0;k!==H;++k)W[k]=K[X+k]*R+K[Y+k]*q;return W}let E=H*2,G=J-1;for(let q=0;q!==H;++q){let R=K[X+q],k=K[Y+q],O=G*E+q*2,F=N[O],P=N[O+1],B=J*E+q*2,L=U[B],z=U[B+1],_=oU($,Q,F,L,Z);W[q]=tH(_,R,P,z,k)}return W}}function tH(J,Q,$,Z,W){let K=1-J;return K*K*K*Q+3*K*K*J*$+3*K*J*J*Z+J*J*J*W}function iU(J,Q,$,Z,W){let K=1-J;return 3*K*K*($-Q)+6*K*J*(Z-$)+3*J*J*(W-Z)}function oU(J,Q,$,Z,W){let K=(J-Q)/(W-Q);for(let H=0;H<8;H++){let Y=tH(K,Q,$,Z,W)-J;if(Math.abs(Y)<0.0000000001)break;let X=iU(K,Q,$,Z,W);if(Math.abs(X)<0.0000000001)break;K=Math.max(0,Math.min(1,K-Y/X))}return K}class V9{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=B8(Q,this.TimeBufferType),this.values=B8($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:B8(J.times,Array),values:B8(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z;if(IQ(J.settings))$.settings={inTangents:B8(J.settings.inTangents,Array),outTangents:B8(J.settings.outTangents,Array)}}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new OW(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new H$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new FW(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new RW(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return y0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J;if(IQ(this.settings))mK(this.settings.inTangents,J),mK(this.settings.outTangents,J)}return this}trim(J,Q){let $=this.times,Z=$.length,W=0,K=Z-1;while(W!==Z&&$[W]<J)++W;while(K!==-1&&$[K]>Q)--K;if(++K,W!==0||K!==Z){if(W>=K)K=Math.max(K,1),W=K-1;let H=this.getValueSize();this.times=$.slice(W,K),this.values=this.values.slice(W*H,K*H)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)u0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,W=$.length;if(W===0)u0("KeyframeTrack: Track is empty.",this),J=!1;let K=null;for(let H=0;H!==W;H++){let Y=$[H];if(typeof Y==="number"&&isNaN(Y)){u0("KeyframeTrack: Time is not a valid number.",this,H,Y),J=!1;break}if(K!==null&&K>Y){u0("KeyframeTrack: Out of order keys.",this,H,Y,K),J=!1;break}K=Y}if(Z!==void 0){if(vX(Z))for(let H=0,Y=Z.length;H!==Y;++H){let X=Z[H];if(isNaN(X)){u0("KeyframeTrack: Value is not a valid number.",this,H,X),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,W=J.length-1,K=1;for(let H=1;H<W;++H){let Y=!1,X=J[H],U=J[H+1];if(X!==U&&(H!==1||X!==J[0]))if(!Z){let N=H*$,E=N-$,G=N+$;for(let q=0;q!==$;++q){let R=Q[N+q];if(R!==Q[E+q]||R!==Q[G+q]){Y=!0;break}}}else Y=!0;if(Y){if(H!==K){J[K]=J[H];let N=H*$,E=K*$;for(let G=0;G!==$;++G)Q[E+G]=Q[N+G]}++K}}if(W>0){J[K]=J[W];for(let H=W*$,Y=K*$,X=0;X!==$;++X)Q[Y+X]=Q[H+X];++K}if(K!==J.length)this.times=J.slice(0,K),this.values=Q.slice(0,K*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);if(Z.createInterpolant=this.createInterpolant,IQ(this.settings))Z.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return Z}}function mK(J,Q){for(let $=0,Z=J.length;$!==Z;$+=2)J[$]*=Q}V9.prototype.ValueTypeName="";V9.prototype.TimeBufferType=Float32Array;V9.prototype.ValueBufferType=Float32Array;V9.prototype.DefaultInterpolation=2301;class T8 extends V9{constructor(J,Q,$){super(J,Q,$)}}T8.prototype.ValueTypeName="bool";T8.prototype.ValueBufferType=Array;T8.prototype.DefaultInterpolation=2300;T8.prototype.InterpolantFactoryMethodLinear=void 0;T8.prototype.InterpolantFactoryMethodSmooth=void 0;class Y$ extends V9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}Y$.prototype.ValueTypeName="color";class S8 extends V9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}S8.prototype.ValueTypeName="number";class LW extends U8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=($-Q)/(Z-Q),X=J*H;for(let U=X+H;X!==U;X+=4)RJ.slerpFlat(W,0,K,X-H,K,X,Y);return W}}class j8 extends V9{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new LW(this.times,this.values,this.getValueSize(),J)}}j8.prototype.ValueTypeName="quaternion";j8.prototype.InterpolantFactoryMethodSmooth=void 0;class y8 extends V9{constructor(J,Q,$){super(J,Q,$)}}y8.prototype.ValueTypeName="string";y8.prototype.ValueBufferType=Array;y8.prototype.DefaultInterpolation=2300;y8.prototype.InterpolantFactoryMethodLinear=void 0;y8.prototype.InterpolantFactoryMethodSmooth=void 0;class Z7 extends V9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}Z7.prototype.ValueTypeName="vector";class S7{constructor(J="",Q=-1,$=[],Z=2500){if(this.name=J,this.tracks=$,this.duration=Q,this.blendMode=Z,this.uuid=I9(),this.userData={},this.duration<0)this.resetDuration()}static parse(J){let Q=[],$=J.tracks,Z=1/(J.fps||1);for(let K=0,H=$.length;K!==H;++K)Q.push(rU($[K]).scale(Z));let W=new this(J.name,J.duration,Q,J.blendMode);return W.uuid=J.uuid,W.userData=JSON.parse(J.userData||"{}"),W}static toJSON(J){let Q=[],$=J.tracks,Z={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode,userData:JSON.stringify(J.userData)};for(let W=0,K=$.length;W!==K;++W)Q.push(V9.toJSON($[W]));return Z}static CreateFromMorphTargetSequence(J,Q,$,Z){let W=Q.length,K=[];for(let H=0;H<W;H++){let Y=[],X=[];Y.push((H+W-1)%W,H,(H+1)%W),X.push(0,1,0);let U=nU(Y);if(Y=lK(Y,1,U),X=lK(X,1,U),!Z&&Y[0]===0)Y.push(W),X.push(X[0]);K.push(new S8(".morphTargetInfluences["+Q[H].name+"]",Y,X).scale(1/$))}return new this(J,-1,K)}static findByName(J,Q){let $=J;if(!Array.isArray(J)){let Z=J;$=Z.geometry&&Z.geometry.animations||Z.animations}for(let Z=0;Z<$.length;Z++)if($[Z].name===Q)return $[Z];return null}static CreateClipsFromMorphTargetSequences(J,Q,$){let Z={},W=/^([\w-]*?)([\d]+)$/;for(let H=0,Y=J.length;H<Y;H++){let X=J[H],U=X.name.match(W);if(U&&U.length>1){let N=U[1],E=Z[N];if(!E)Z[N]=E=[];E.push(X)}}let K=[];for(let H in Z)K.push(this.CreateFromMorphTargetSequence(H,Z[H],Q,$));return K}resetDuration(){let J=this.tracks,Q=0;for(let $=0,Z=J.length;$!==Z;++$){let W=this.tracks[$];Q=Math.max(Q,W.times[W.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let $=0;$<this.tracks.length;$++)J.push(this.tracks[$].clone());let Q=new this.constructor(this.name,this.duration,J,this.blendMode);return Q.userData=JSON.parse(JSON.stringify(this.userData)),Q}toJSON(){return this.constructor.toJSON(this)}}function aU(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return S8;case"vector":case"vector2":case"vector3":case"vector4":return Z7;case"color":return Y$;case"quaternion":return j8;case"bool":case"boolean":return T8;case"string":return y8}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function rU(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=aU(J.type);if(J.times===void 0){let Z=[],W=[];sU(J.keys,Z,W,"value"),J.times=Z,J.values=W}let $;if(Q.parse!==void 0)$=Q.parse(J);else $=new Q(J.name,J.times,J.values,J.interpolation);if(IQ(J.settings))$.settings={inTangents:B8(J.settings.inTangents,Float32Array),outTangents:B8(J.settings.outTangents,Float32Array)};return $}var u9={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;if(dK(J))return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;if(dK(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function dK(J){try{let Q=J.slice(J.indexOf(":")+1);return new URL(Q).protocol==="blob:"}catch(Q){return!1}}class VW{constructor(J,Q,$){let Z=this,W=!1,K=0,H=0,Y=void 0,X=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(H++,W===!1){if(Z.onStart!==void 0)Z.onStart(U,K,H)}W=!0},this.itemEnd=function(U){if(K++,Z.onProgress!==void 0)Z.onProgress(U,K,H);if(K===H){if(W=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,N){return X.push(U,N),this},this.removeHandler=function(U){let N=X.indexOf(U);if(N!==-1)X.splice(N,2);return this},this.getHandler=function(U){for(let N=0,E=X.length;N<E;N+=2){let G=X[N],q=X[N+1];if(G.global)G.lastIndex=0;if(G.test(U))return q}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var eH=new VW;class G8{constructor(J){if(this.manager=J!==void 0?J:eH,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,W){$.load(J,Z,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}G8.DEFAULT_MATERIAL_NAME="__DEFAULT";var W8={};class JY extends Error{constructor(J,Q){super(J);this.response=Q}}class x6 extends G8{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=u9.get(`file:${J}`);if(W!==void 0){this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(W);this.manager.itemEnd(J)},0);return}if(W8[J]!==void 0){W8[J].push({onLoad:Q,onProgress:$,onError:Z});return}W8[J]=[],W8[J].push({onLoad:Q,onProgress:$,onError:Z});let K=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),H=this.mimeType,Y=this.responseType;fetch(K).then((X)=>{if(X.status===200||X.status===0){if(X.status===0)y0("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||X.body===void 0||X.body.getReader===void 0)return X;let U=W8[J],N=X.body.getReader(),E=X.headers.get("X-File-Size")||X.headers.get("Content-Length"),G=E?parseInt(E):0,q=G!==0,R=0,k=new ReadableStream({start(O){F();function F(){N.read().then(({done:P,value:B})=>{if(P)O.close();else{R+=B.byteLength;let L=new ProgressEvent("progress",{lengthComputable:q,loaded:R,total:G});for(let z=0,_=U.length;z<_;z++){let A=U[z];if(A.onProgress)A.onProgress(L)}O.enqueue(B),F()}},(P)=>{O.error(P)})}}});return new Response(k)}else throw new JY(`fetch for "${X.url}" responded with ${X.status}: ${X.statusText}`,X)}).then((X)=>{switch(Y){case"arraybuffer":return X.arrayBuffer();case"blob":return X.blob();case"document":return X.text().then((U)=>{return new DOMParser().parseFromString(U,H)});case"json":return X.json();default:if(H==="")return X.text();else{let N=/charset="?([^;"\s]*)"?/i.exec(H),E=N&&N[1]?N[1].toLowerCase():void 0,G=new TextDecoder(E);return X.arrayBuffer().then((q)=>G.decode(q))}}}).then((X)=>{u9.add(`file:${J}`,X);let U=W8[J];delete W8[J];for(let N=0,E=U.length;N<E;N++){let G=U[N];if(G.onLoad)G.onLoad(X)}}).catch((X)=>{let U=W8[J];if(U===void 0)throw this.manager.itemError(J),X;delete W8[J];for(let N=0,E=U.length;N<E;N++){let G=U[N];if(G.onError)G.onError(X)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var z7=new WeakMap;class kW extends G8{constructor(J){super(J)}load(J,Q,$,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,K=u9.get(`image:${J}`);if(K!==void 0){if(K.complete===!0)W.manager.itemStart(J),setTimeout(function(){if(Q)Q(K);W.manager.itemEnd(J)},0);else{let N=z7.get(K);if(N===void 0)N=[],z7.set(K,N);N.push({onLoad:Q,onError:Z})}return K}let H=A7("img");function Y(){if(U(),Q)Q(this);let N=z7.get(this)||[];for(let E=0;E<N.length;E++){let G=N[E];if(G.onLoad)G.onLoad(this)}z7.delete(this),W.manager.itemEnd(J)}function X(N){if(U(),Z)Z(N);u9.remove(`image:${J}`);let E=z7.get(this)||[];for(let G=0;G<E.length;G++){let q=E[G];if(q.onError)q.onError(N)}z7.delete(this),W.manager.itemError(J),W.manager.itemEnd(J)}function U(){H.removeEventListener("load",Y,!1),H.removeEventListener("error",X,!1)}if(H.addEventListener("load",Y,!1),H.addEventListener("error",X,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)H.crossOrigin=this.crossOrigin}return u9.add(`image:${J}`,H),W.manager.itemStart(J),H.src=J,H}}class X$ extends G8{constructor(J){super(J)}load(J,Q,$,Z){let W=new xJ,K=new kW(this.manager);return K.setCrossOrigin(this.crossOrigin),K.setPath(this.path),K.load(J,function(H){if(W.image=H,W.needsUpdate=!0,Q!==void 0)Q(W)},$,Z),W}}class d7 extends LJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new b0(J),this.intensity=Q}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}class U$ extends d7{constructor(J,Q,$){super(J,$);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(LJ.DEFAULT_UP),this.updateMatrix(),this.groundColor=new b0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}toJSON(J){let Q=super.toJSON(J);return Q.object.groundColor=this.groundColor.getHex(),Q}}var i$=new n0,uK=new w,cK=new w;class g6{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new H0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new n0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new w6,this._frameExtents=new H0(1,1),this._viewportCount=1,this._viewports=[new DJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera;uK.setFromMatrixPosition(J.matrixWorld),Q.position.copy(uK),cK.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(cK),Q.updateMatrixWorld(),this._updateMatrix(Q,this.matrix,this._frustum)}_updateMatrix(J,Q,$,Z){i$.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),$.setFromProjectionMatrix(i$,J.coordinateSystem,J.reversedDepth);let W=this._frameExtents,K=Z?Z.z/W.x:1,H=Z?Z.w/W.y:1,Y=Z?Z.x/W.x:0,X=Z?Z.y/W.y:0;if(J.coordinateSystem===2001||J.reversedDepth)Q.set(0.5*K,0,0,0.5*K+Y,0,0.5*H,0,0.5*H+X,0,0,1,0,0,0,0,1);else Q.set(0.5*K,0,0,0.5*K+Y,0,0.5*H,0,0.5*H+X,0,0,0.5,0.5,0,0,0,1);Q.multiply(i$)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var CQ=new w,PQ=new RJ,d9=new w;class G$ extends LJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new n0,this.projectionMatrix=new n0,this.projectionMatrixInverse=new n0,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(CQ,PQ,d9),d9.x===1&&d9.y===1&&d9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(CQ,PQ,d9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(CQ,PQ,d9),d9.x===1&&d9.y===1&&d9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(CQ,PQ,d9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var D8=new w,nK=new H0,sK=new H0;class uJ extends G${constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=n8*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(X6*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return n8*2*Math.atan(Math.tan(X6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){D8.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(D8.x,D8.y).multiplyScalar(-J/D8.z),D8.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(D8.x,D8.y).multiplyScalar(-J/D8.z)}getViewSize(J,Q){return this.getViewBounds(J,nK,sK),Q.subVectors(sK,nK)}setViewOffset(J,Q,$,Z,W,K){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(X6*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,W=-0.5*Z,K=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:X}=K;W+=K.offsetX*Z/Y,Q-=K.offsetY*$/X,Z*=K.width/Y,$*=K.height/X}let H=this.filmOffset;if(H!==0)W+=J*H/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class QY extends g6{constructor(){super(new uJ(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=n8*2*J.angle*this.focus,Z=this.mapSize.width/this.mapSize.height*this.aspect,W=J.distance||Q.far;if($!==Q.fov||Z!==Q.aspect||W!==Q.far)Q.fov=$,Q.aspect=Z,Q.far=W,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this.aspect=J.aspect,this}toJSON(){let J=super.toJSON();return J.focus=this.focus,J.aspect=this.aspect,J}}class u7 extends d7{constructor(J,Q,$=0,Z=Math.PI/3,W=0,K=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(LJ.DEFAULT_UP),this.updateMatrix(),this.target=new LJ,this.distance=$,this.angle=Z,this.penumbra=W,this.decay=K,this.map=null,this.shadow=new QY}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);if(Q.object.distance=this.distance,Q.object.angle=this.angle,Q.object.decay=this.decay,Q.object.penumbra=this.penumbra,Q.object.target=this.target.uuid,this.map&&this.map.isTexture)Q.object.map=this.map.toJSON(J).uuid;return Q.object.shadow=this.shadow.toJSON(),Q}}class $Y extends g6{constructor(){super(new uJ(90,1,0.5,500));this.isPointLightShadow=!0}}class v8 extends d7{constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new $Y}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class W7 extends G${constructor(J=-1,Q=1,$=1,Z=-1,W=0.1,K=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=W,this.far=K,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,W,K){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,W=$-J,K=$+J,H=Z+Q,Y=Z-Q;if(this.view!==null&&this.view.enabled){let X=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=X*this.view.offsetX,K=W+X*this.view.width,H-=U*this.view.offsetY,Y=H-U*this.view.height}this.projectionMatrix.makeOrthographic(W,K,H,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class ZY extends g6{constructor(){super(new W7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class c7 extends d7{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(LJ.DEFAULT_UP),this.updateMatrix(),this.target=new LJ,this.shadow=new ZY}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class f8{static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}var o$=new WeakMap;class N$ extends G8{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")y0("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")y0("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(J){return this.options=J,this}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,K=u9.get(`image-bitmap:${J}`);if(K!==void 0){if(W.manager.itemStart(J),K.then){K.then((X)=>{if(o$.has(K)===!0){if(Z)Z(o$.get(K));W.manager.itemError(J),W.manager.itemEnd(J)}else{if(Q)Q(X);W.manager.itemEnd(J)}});return}setTimeout(function(){if(Q)Q(K);W.manager.itemEnd(J)},0);return}let H={};H.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",H.headers=this.requestHeader,H.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let Y=fetch(J,H).then(function(X){return X.blob()}).then(function(X){return createImageBitmap(X,Object.assign({},W.options,{colorSpaceConversion:"none"}))}).then(function(X){if(u9.add(`image-bitmap:${J}`,X),Q)Q(X);return W.manager.itemEnd(J),X}).catch(function(X){if(Z)Z(X);o$.set(Y,X),u9.remove(`image-bitmap:${J}`),W.manager.itemError(J),W.manager.itemEnd(J)});u9.add(`image-bitmap:${J}`,Y),W.manager.itemStart(J)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var C7=-90,P7=1;class DW extends LJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new uJ(C7,P7,J,Q);Z.layers=this.layers,this.add(Z);let W=new uJ(C7,P7,J,Q);W.layers=this.layers,this.add(W);let K=new uJ(C7,P7,J,Q);K.layers=this.layers,this.add(K);let H=new uJ(C7,P7,J,Q);H.layers=this.layers,this.add(H);let Y=new uJ(C7,P7,J,Q);Y.layers=this.layers,this.add(Y);let X=new uJ(C7,P7,J,Q);X.layers=this.layers,this.add(X)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,W,K,H,Y]=Q;for(let X of Q)this.remove(X);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),K.up.set(0,0,1),K.lookAt(0,-1,0),H.up.set(0,1,0),H.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),K.up.set(0,0,-1),K.lookAt(0,-1,0),H.up.set(0,-1,0),H.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let X of Q)this.add(X),X.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,K,H,Y,X,U]=this.children,N=J.getRenderTarget(),E=J.getActiveCubeFace(),G=J.getActiveMipmapLevel(),q=J.xr.enabled;J.xr.enabled=!1;let R=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let k=!1;if(J.isWebGLRenderer===!0)k=J.state.buffers.depth.getReversed();else k=J.reversedDepthBuffer;if(J.setRenderTarget($,0,Z),k&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,1,Z),k&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,2,Z),k&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),J.setRenderTarget($,3,Z),k&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,Z),k&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),$.texture.generateMipmaps=R,J.setRenderTarget($,5,Z),k&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(N,E,G),J.xr.enabled=q,$.texture.needsPMREMUpdate=!0}}class BW extends uJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}class MW{constructor(J,Q,$){this.binding=J,this.valueSize=$;let Z,W,K;switch(Q){case"quaternion":Z=this._slerp,W=this._slerpAdditive,K=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array($*6),this._workIndex=5;break;case"string":case"bool":Z=this._select,W=this._select,K=this._setAdditiveIdentityOther,this.buffer=Array($*5);break;default:Z=this._lerp,W=this._lerpAdditive,K=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array($*5)}this._mixBufferRegion=Z,this._mixBufferRegionAdditive=W,this._setIdentity=K,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(J,Q){let $=this.buffer,Z=this.valueSize,W=J*Z+Z,K=this.cumulativeWeight;if(K===0){for(let H=0;H!==Z;++H)$[W+H]=$[H];K=Q}else{K+=Q;let H=Q/K;this._mixBufferRegion($,W,0,H,Z)}this.cumulativeWeight=K}accumulateAdditive(J){let Q=this.buffer,$=this.valueSize,Z=$*this._addIndex;if(this.cumulativeWeightAdditive===0)this._setIdentity();this._mixBufferRegionAdditive(Q,Z,0,J,$),this.cumulativeWeightAdditive+=J}apply(J){let Q=this.valueSize,$=this.buffer,Z=J*Q+Q,W=this.cumulativeWeight,K=this.cumulativeWeightAdditive,H=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,W<1){let Y=Q*this._origIndex;this._mixBufferRegion($,Z,Y,1-W,Q)}if(K>0)this._mixBufferRegionAdditive($,Z,this._addIndex*Q,1,Q);for(let Y=Q,X=Q+Q;Y!==X;++Y)if($[Y]!==$[Y+Q]){H.setValue($,Z);break}}saveOriginalState(){let J=this.binding,Q=this.buffer,$=this.valueSize,Z=$*this._origIndex;J.getValue(Q,Z);for(let W=$,K=Z;W!==K;++W)Q[W]=Q[Z+W%$];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let J=this.valueSize*3;this.binding.setValue(this.buffer,J)}_setAdditiveIdentityNumeric(){let J=this._addIndex*this.valueSize,Q=J+this.valueSize;for(let $=J;$<Q;$++)this.buffer[$]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let J=this._origIndex*this.valueSize,Q=this._addIndex*this.valueSize;for(let $=0;$<this.valueSize;$++)this.buffer[Q+$]=this.buffer[J+$]}_select(J,Q,$,Z,W){if(Z>=0.5)for(let K=0;K!==W;++K)J[Q+K]=J[$+K]}_slerp(J,Q,$,Z){RJ.slerpFlat(J,Q,J,Q,J,$,Z)}_slerpAdditive(J,Q,$,Z,W){let K=this._workIndex*W;RJ.multiplyQuaternionsFlat(J,K,J,Q,J,$),RJ.slerpFlat(J,Q,J,Q,J,K,Z)}_lerp(J,Q,$,Z,W){let K=1-Z;for(let H=0;H!==W;++H){let Y=Q+H;J[Y]=J[Y]*K+J[$+H]*Z}}_lerpAdditive(J,Q,$,Z,W){for(let K=0;K!==W;++K){let H=Q+K;J[H]=J[H]+J[$+K]*Z}}}var zW="\\[\\]\\.:\\/",tU=new RegExp("["+zW+"]","g"),CW="[^"+zW+"]",eU="[^"+zW.replace("\\.","")+"]",J5=/((?:WC+[\/:])*)/.source.replace("WC",CW),Q5=/(WCOD+)?/.source.replace("WCOD",eU),$5=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",CW),Z5=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",CW),W5=new RegExp("^"+J5+Q5+$5+Z5+"$"),K5=["material","materials","bones","map"];class WY{constructor(J,Q,$){let Z=$||qJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,W=$.length;Z!==W;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class qJ{constructor(J,Q,$){this.path=Q,this.parsedPath=$||qJ.parseTrackName(Q),this.node=qJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new qJ(J,Q,$);else return new qJ.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(tU,"")}static parseTrackName(J){let Q=W5.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let W=$.nodeName.substring(Z+1);if(K5.indexOf(W)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=W}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(W){for(let K=0;K<W.length;K++){let H=W[K];if(H.name===Q||H.uuid===Q)return H;let Y=$(H.children);if(Y)return Y}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,W=Q.propertyIndex;if(!J)J=qJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){y0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let X=Q.objectIndex;switch($){case"materials":if(!J.material){u0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){u0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){u0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===X){X=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){u0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){u0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){u0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(X!==void 0){if(J[X]===void 0){u0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[X]}}let K=J[Z];if(K===void 0){let X=Q.nodeName;u0("PropertyBinding: Trying to update property for track: "+X+"."+Z+" but it wasn't found.",J);return}let H=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)H=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)H=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(W!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){u0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){u0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}Y=this.BindingType.ArrayElement,this.resolvedProperty=K,this.propertyIndex=W}else if(K.fromArray!==void 0&&K.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=K;else if(Array.isArray(K))Y=this.BindingType.EntireArray,this.resolvedProperty=K;else this.propertyName=Z;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][H]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}qJ.Composite=WY;qJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qJ.prototype.GetterByBindingType=[qJ.prototype._getValue_direct,qJ.prototype._getValue_array,qJ.prototype._getValue_arrayElement,qJ.prototype._getValue_toArray];qJ.prototype.SetterByBindingTypeAndVersioning=[[qJ.prototype._setValue_direct,qJ.prototype._setValue_direct_setNeedsUpdate,qJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qJ.prototype._setValue_array,qJ.prototype._setValue_array_setNeedsUpdate,qJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qJ.prototype._setValue_arrayElement,qJ.prototype._setValue_arrayElement_setNeedsUpdate,qJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qJ.prototype._setValue_fromArray,qJ.prototype._setValue_fromArray_setNeedsUpdate,qJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class PW{constructor(J,Q,$=null,Z=Q.blendMode){this._mixer=J,this._clip=Q,this._localRoot=$,this.blendMode=Z;let W=Q.tracks,K=W.length,H=Array(K),Y={endingStart:2400,endingEnd:2400};for(let X=0;X!==K;++X){let U=W[X].createInterpolant(null);H[X]=U,U.settings=Y}this._interpolantSettings=Y,this._interpolants=H,this._propertyBindings=Array(K),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(J){return this._startTime=J,this}setLoop(J,Q){return this.loop=J,this.repetitions=Q,this}setEffectiveWeight(J){return this.weight=J,this._effectiveWeight=this.enabled?J:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(J){return this._scheduleFading(J,0,1)}fadeOut(J){return this._scheduleFading(J,1,0)}crossFadeFrom(J,Q,$=!1){if(J.fadeOut(Q),this.fadeIn(Q),$===!0){let Z=this._clip.duration,W=J._clip.duration,K=W/Z,H=Z/W;J._restoreTimeScale=J.timeScale,this._restoreTimeScale=this.timeScale,J.warp(1,K,Q),this.warp(H,1,Q)}return this}crossFadeTo(J,Q,$=!1){return J.crossFadeFrom(this,Q,$)}stopFading(){let J=this._weightInterpolant;if(J!==null)this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this}setEffectiveTimeScale(J){return this.timeScale=J,this._effectiveTimeScale=this.paused?0:J,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(J){return this.timeScale=this._clip.duration/J,this.stopWarping()}syncWith(J){return this.time=J.time,this.timeScale=J.timeScale,this.stopWarping()}halt(J){return this.warp(this._effectiveTimeScale,0,J)}warp(J,Q,$){let Z=this._mixer,W=Z.time,K=this.timeScale,H=this._timeScaleInterpolant;if(H===null)H=Z._lendControlInterpolant(),this._timeScaleInterpolant=H;let{parameterPositions:Y,sampleValues:X}=H;return Y[0]=W,Y[1]=W+$,X[0]=J/K,X[1]=Q/K,this}stopWarping(){let J=this._timeScaleInterpolant;if(J!==null)this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(J,Q,$,Z){if(!this.enabled){this._updateWeight(J);return}let W=this._startTime;if(W!==null){let Y=(J-W)*$;if(Y<0||$===0)Q=0;else this._startTime=null,Q=$*Y}Q*=this._updateTimeScale(J);let K=this._updateTime(Q),H=this._updateWeight(J);if(H>0){let Y=this._interpolants,X=this._propertyBindings;switch(this.blendMode){case 2501:for(let U=0,N=Y.length;U!==N;++U)Y[U].evaluate(K),X[U].accumulateAdditive(H);break;case 2500:default:for(let U=0,N=Y.length;U!==N;++U)Y[U].evaluate(K),X[U].accumulate(Z,H)}}}_updateWeight(J){let Q=0;if(this.enabled){Q=this.weight;let $=this._weightInterpolant;if($!==null){let Z=$.evaluate(J)[0];if(Q*=Z,J>$.parameterPositions[1]){if(this.stopFading(),Z===0)this.enabled=!1}}}return this._effectiveWeight=Q,Q}_updateTimeScale(J){let Q=0;if(!this.paused){Q=this.timeScale;let $=this._timeScaleInterpolant;if($!==null){let Z=$.evaluate(J)[0];if(Q*=Z,J>$.parameterPositions[1]){if(Q===0)this.paused=!0;else{if(this._restoreTimeScale!==null)Q=this._restoreTimeScale;this.timeScale=Q}this.stopWarping()}}}return this._effectiveTimeScale=Q,Q}_updateTime(J){let Q=this._clip.duration,$=this.loop,Z=this.time+J,W=this._loopCount,K=$===2202;if(J===0){if(W===-1)return Z;return K&&(W&1)===1?Q-Z:Z}if($===2200){if(W===-1)this._loopCount=0,this._setEndings(!0,!0,!1);J:{if(Z>=Q)Z=Q;else if(Z<0)Z=0;else{this.time=Z;break J}if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;this.time=Z,this._mixer.dispatchEvent({type:"finished",action:this,direction:J<0?-1:1})}}else{if(W===-1)if(J>=0)W=0,this._setEndings(!0,this.repetitions===0,K);else this._setEndings(this.repetitions===0,!0,K);if(Z>=Q||Z<0){let H=Math.floor(Z/Q);Z-=Q*H,W+=Math.abs(H);let Y=this.repetitions-W;if(Y<=0){if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;Z=J>0?Q:0,this.time=Z,this._mixer.dispatchEvent({type:"finished",action:this,direction:J>0?1:-1})}else{if(Y===1){let X=J<0;this._setEndings(X,!X,K)}else this._setEndings(!1,!1,K);this._loopCount=W,this.time=Z,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:H})}}else this._loopCount=W,this.time=Z;if(K&&(W&1)===1)return Q-Z}return Z}_setEndings(J,Q,$){let Z=this._interpolantSettings;if($)Z.endingStart=2401,Z.endingEnd=2401;else{if(J)Z.endingStart=this.zeroSlopeAtStart?2401:2400;else Z.endingStart=2402;if(Q)Z.endingEnd=this.zeroSlopeAtEnd?2401:2400;else Z.endingEnd=2402}}_scheduleFading(J,Q,$){let Z=this._mixer,W=Z.time,K=this._weightInterpolant;if(K===null)K=Z._lendControlInterpolant(),this._weightInterpolant=K;let{parameterPositions:H,sampleValues:Y}=K;return H[0]=W,Y[0]=Q,H[1]=W+J,Y[1]=$,this}}var H5=new Float32Array(1);class p6 extends p9{constructor(J){super();if(this._root=J,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(J,Q){let $=J._localRoot||this._root,Z=J._clip.tracks,W=Z.length,K=J._propertyBindings,H=J._interpolants,Y=$.uuid,X=this._bindingsByRootAndName,U=X[Y];if(U===void 0)U={},X[Y]=U;for(let N=0;N!==W;++N){let E=Z[N],G=E.name,q=U[G];if(q!==void 0)++q.referenceCount,K[N]=q;else{if(q=K[N],q!==void 0){if(q._cacheIndex===null)++q.referenceCount,this._addInactiveBinding(q,Y,G);continue}let R=Q&&Q._propertyBindings[N].binding.parsedPath;q=new MW(qJ.create($,G,R),E.ValueTypeName,E.getValueSize()),++q.referenceCount,this._addInactiveBinding(q,Y,G),K[N]=q}H[N].resultBuffer=q.buffer}}_activateAction(J){if(!this._isActiveAction(J)){if(J._cacheIndex===null){let $=(J._localRoot||this._root).uuid,Z=J._clip.uuid,W=this._actionsByClip[Z];this._bindAction(J,W&&W.knownActions[0]),this._addInactiveAction(J,Z,$)}let Q=J._propertyBindings;for(let $=0,Z=Q.length;$!==Z;++$){let W=Q[$];if(W.useCount++===0)this._lendBinding(W),W.saveOriginalState()}this._lendAction(J)}}_deactivateAction(J){if(this._isActiveAction(J)){let Q=J._propertyBindings;for(let $=0,Z=Q.length;$!==Z;++$){let W=Q[$];if(--W.useCount===0)W.restoreOriginalState(),this._takeBackBinding(W)}this._takeBackAction(J)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let J=this;this.stats={actions:{get total(){return J._actions.length},get inUse(){return J._nActiveActions}},bindings:{get total(){return J._bindings.length},get inUse(){return J._nActiveBindings}},controlInterpolants:{get total(){return J._controlInterpolants.length},get inUse(){return J._nActiveControlInterpolants}}}}_isActiveAction(J){let Q=J._cacheIndex;return Q!==null&&Q<this._nActiveActions}_addInactiveAction(J,Q,$){let Z=this._actions,W=this._actionsByClip,K=W[Q];if(K===void 0)K={knownActions:[J],actionByRoot:{}},J._byClipCacheIndex=0,W[Q]=K;else{let H=K.knownActions;J._byClipCacheIndex=H.length,H.push(J)}J._cacheIndex=Z.length,Z.push(J),K.actionByRoot[$]=J}_removeInactiveAction(J){let Q=this._actions,$=Q[Q.length-1],Z=J._cacheIndex;$._cacheIndex=Z,Q[Z]=$,Q.pop(),J._cacheIndex=null;let W=J._clip.uuid,K=this._actionsByClip,H=K[W],Y=H.knownActions,X=Y[Y.length-1],U=J._byClipCacheIndex;X._byClipCacheIndex=U,Y[U]=X,Y.pop(),J._byClipCacheIndex=null;let N=H.actionByRoot,E=(J._localRoot||this._root).uuid;if(delete N[E],Y.length===0)delete K[W];this._removeInactiveBindingsForAction(J)}_removeInactiveBindingsForAction(J){let Q=J._propertyBindings;for(let $=0,Z=Q.length;$!==Z;++$){let W=Q[$];if(--W.referenceCount===0)this._removeInactiveBinding(W)}}_lendAction(J){let Q=this._actions,$=J._cacheIndex,Z=this._nActiveActions++,W=Q[Z];J._cacheIndex=Z,Q[Z]=J,W._cacheIndex=$,Q[$]=W}_takeBackAction(J){let Q=this._actions,$=J._cacheIndex,Z=--this._nActiveActions,W=Q[Z];J._cacheIndex=Z,Q[Z]=J,W._cacheIndex=$,Q[$]=W}_addInactiveBinding(J,Q,$){let Z=this._bindingsByRootAndName,W=this._bindings,K=Z[Q];if(K===void 0)K={},Z[Q]=K;K[$]=J,J._cacheIndex=W.length,W.push(J)}_removeInactiveBinding(J){let Q=this._bindings,$=J.binding,Z=$.rootNode.uuid,W=$.path,K=this._bindingsByRootAndName,H=K[Z],Y=Q[Q.length-1],X=J._cacheIndex;if(Y._cacheIndex=X,Q[X]=Y,Q.pop(),delete H[W],Object.keys(H).length===0)delete K[Z]}_lendBinding(J){let Q=this._bindings,$=J._cacheIndex,Z=this._nActiveBindings++,W=Q[Z];J._cacheIndex=Z,Q[Z]=J,W._cacheIndex=$,Q[$]=W}_takeBackBinding(J){let Q=this._bindings,$=J._cacheIndex,Z=--this._nActiveBindings,W=Q[Z];J._cacheIndex=Z,Q[Z]=J,W._cacheIndex=$,Q[$]=W}_lendControlInterpolant(){let J=this._controlInterpolants,Q=this._nActiveControlInterpolants++,$=J[Q];if($===void 0)$=new H$(new Float32Array(2),new Float32Array(2),1,H5),$.__cacheIndex=Q,J[Q]=$;return $}_takeBackControlInterpolant(J){let Q=this._controlInterpolants,$=J.__cacheIndex,Z=--this._nActiveControlInterpolants,W=Q[Z];J.__cacheIndex=Z,Q[Z]=J,W.__cacheIndex=$,Q[$]=W}clipAction(J,Q,$){let Z=Q||this._root,W=Z.uuid,K=typeof J==="string"?S7.findByName(Z,J):J,H=K!==null?K.uuid:J,Y=this._actionsByClip[H],X=null;if($===void 0)if(K!==null)$=K.blendMode;else $=2500;if(Y!==void 0){let N=Y.actionByRoot[W];if(N!==void 0&&N.blendMode===$)return N;if(X=Y.knownActions[0],K===null)K=X._clip}if(K===null)return null;let U=new PW(this,K,Q,$);return this._bindAction(U,X),this._addInactiveAction(U,H,W),U}existingAction(J,Q){let $=Q||this._root,Z=$.uuid,W=typeof J==="string"?S7.findByName($,J):J,K=W?W.uuid:J,H=this._actionsByClip[K];if(H!==void 0)return H.actionByRoot[Z]||null;return null}stopAllAction(){let J=this._actions,Q=this._nActiveActions;for(let $=Q-1;$>=0;--$)J[$].stop();return this}update(J){J*=this.timeScale;let Q=this._actions,$=this._nActiveActions,Z=this.time+=J,W=Math.sign(J),K=this._accuIndex^=1;for(let X=0;X!==$;++X)Q[X]._update(Z,J,W,K);let H=this._bindings,Y=this._nActiveBindings;for(let X=0;X!==Y;++X)H[X].apply(K);return this}setTime(J){this.time=0;for(let Q=0;Q<this._actions.length;Q++)this._actions[Q].time=0;return this.update(J)}getRoot(){return this._root}uncacheClip(J){let Q=this._actions,$=J.uuid,Z=this._actionsByClip,W=Z[$];if(W!==void 0){let K=W.knownActions;for(let H=0,Y=K.length;H!==Y;++H){let X=K[H];this._deactivateAction(X);let U=X._cacheIndex,N=Q[Q.length-1];X._cacheIndex=null,X._byClipCacheIndex=null,N._cacheIndex=U,Q[U]=N,Q.pop(),this._removeInactiveBindingsForAction(X)}delete Z[$]}}uncacheRoot(J){let Q=J.uuid,$=this._actionsByClip;for(let K in $){let H=$[K].actionByRoot,Y=H[Q];if(Y!==void 0)this._deactivateAction(Y),this._removeInactiveAction(Y)}let Z=this._bindingsByRootAndName,W=Z[Q];if(W!==void 0)for(let K in W){let H=W[K];H.restoreOriginalState(),this._removeInactiveBinding(H)}}uncacheAction(J,Q){let $=this.existingAction(J,Q);if($!==null)this._deactivateAction($),this._removeInactiveAction($)}}class E${constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,y0("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let Q=performance.now();J=(Q-this.oldTime)/1000,this.oldTime=Q,this.elapsedTime+=J}return J}}class l6{constructor(J=1,Q=0,$=0){this.radius=J,this.phi=Q,this.theta=$}set(J,Q,$){return this.radius=J,this.phi=Q,this.theta=$,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=o0(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){if(this.radius=Math.sqrt(J*J+Q*Q+$*$),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,$),this.phi=Math.acos(o0(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class IW{static{IW.prototype.isMatrix2=!0}constructor(J,Q,$,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,Z){let W=this.elements;return W[0]=J,W[2]=Q,W[1]=$,W[3]=Z,this}}class q$ extends p9{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function _W(J,Q,$,Z){let W=Y5(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function Y5(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)y0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function IY(){let J=null,Q=!1,$=null,Z=null;function W(K,H){Z=J.requestAnimationFrame(W),$(K,H)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;Z=J.requestAnimationFrame(W),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);Q=!1},setAnimationLoop:function(K){$=K},setContext:function(K){J=K}}}function X5(J){let Q=new WeakMap;function $(Y,X){let{array:U,usage:N}=Y,E=U.byteLength,G=J.createBuffer();J.bindBuffer(X,G),J.bufferData(X,U,N),Y.onUploadCallback();let q;if(U instanceof Float32Array)q=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)q=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)q=J.HALF_FLOAT;else q=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)q=J.SHORT;else if(U instanceof Uint32Array)q=J.UNSIGNED_INT;else if(U instanceof Int32Array)q=J.INT;else if(U instanceof Int8Array)q=J.BYTE;else if(U instanceof Uint8Array)q=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)q=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:G,type:q,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:E}}function Z(Y,X,U){let{array:N,updateRanges:E}=X;if(J.bindBuffer(U,Y),E.length===0)J.bufferSubData(U,0,N);else{E.sort((q,R)=>q.start-R.start);let G=0;for(let q=1;q<E.length;q++){let R=E[G],k=E[q];if(k.start<=R.start+R.count+1)R.count=Math.max(R.count,k.start+k.count-R.start);else++G,E[G]=k}E.length=G+1;for(let q=0,R=E.length;q<R;q++){let k=E[q];J.bufferSubData(U,k.start*N.BYTES_PER_ELEMENT,N,k.start,k.count)}X.clearUpdateRanges()}X.onUploadCallback()}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let X=Q.get(Y);if(X)J.deleteBuffer(X.buffer),Q.delete(Y)}function H(Y,X){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let N=Q.get(Y);if(!N||N.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,$(Y,X));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,Y,X),U.version=Y.version}}return{get:W,remove:K,update:H}}var U5=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G5=`#ifdef USE_ALPHAHASH
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
#endif`,N5=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E5=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q5=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F5=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,O5=`#ifdef USE_AOMAP
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
#endif`,R5=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,L5=`#ifdef USE_BATCHING
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
#endif`,V5=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k5=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D5=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B5=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,M5=`#ifdef USE_IRIDESCENCE
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
#endif`,z5=`#ifdef USE_BUMPMAP
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
#endif`,C5=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,P5=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I5=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_5=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,w5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,T5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,S5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,j5=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,y5=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,v5=`vec3 transformedNormal = objectNormal;
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
#endif`,f5=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h5=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b5=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x5=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g5="gl_FragColor = linearToOutputTexel( gl_FragColor );",p5=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,l5=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif`,m5=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,d5=`#ifdef USE_ENVMAP
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
#endif`,u5=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c5=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,n5=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s5=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i5=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,o5=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a5=`#ifdef USE_GRADIENTMAP
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
}`,r5=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t5=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e5=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JG=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#include <lightprobes_pars_fragment>`,QG=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,$G=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZG=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WG=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KG=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HG=`PhysicalMaterial material;
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,YG=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
}`,XG=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,UG=`#if defined( RE_IndirectDiffuse )
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
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,GG=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NG=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,EG=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qG=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FG=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OG=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RG=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LG=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VG=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kG=`#if defined( USE_POINTS_UV )
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
#endif`,DG=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BG=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MG=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zG=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CG=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PG=`#ifdef USE_MORPHTARGETS
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
#endif`,IG=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_G=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,AG=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wG=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TG=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SG=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,jG=`#ifdef USE_NORMALMAP
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
#endif`,yG=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vG=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fG=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hG=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bG=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xG=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gG=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pG=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lG=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mG=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dG=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uG=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cG=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
#endif`,nG=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,sG=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,iG=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,oG=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aG=`#ifdef USE_SKINNING
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
#endif`,rG=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tG=`#ifdef USE_SKINNING
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
#endif`,eG=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$N=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZN=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,WN=`#ifdef USE_TRANSMISSION
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
#endif`,KN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,UN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GN=`uniform sampler2D t2D;
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
}`,NN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,EN=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ON=`#include <common>
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
}`,RN=`#if DEPTH_PACKING == 3200
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
}`,LN=`#define DISTANCE
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
}`,VN=`#define DISTANCE
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
void main() {
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
}`,kN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BN=`uniform float scale;
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
}`,MN=`uniform vec3 diffuse;
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
}`,zN=`#include <common>
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
}`,CN=`uniform vec3 diffuse;
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
}`,PN=`#define LAMBERT
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
}`,IN=`#define LAMBERT
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
}`,_N=`#define MATCAP
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
}`,AN=`#define MATCAP
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
}`,wN=`#define NORMAL
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
}`,TN=`#define NORMAL
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
}`,SN=`#define PHONG
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
}`,jN=`#define PHONG
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
}`,yN=`#define STANDARD
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
}`,vN=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,fN=`#define TOON
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
}`,hN=`#define TOON
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
}`,bN=`uniform float size;
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
}`,xN=`uniform vec3 diffuse;
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
}`,gN=`#include <common>
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
}`,pN=`uniform vec3 color;
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
}`,lN=`uniform float rotation;
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
}`,mN=`uniform vec3 diffuse;
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
}`,e0={alphahash_fragment:U5,alphahash_pars_fragment:G5,alphamap_fragment:N5,alphamap_pars_fragment:E5,alphatest_fragment:q5,alphatest_pars_fragment:F5,aomap_fragment:O5,aomap_pars_fragment:R5,batching_pars_vertex:L5,batching_vertex:V5,begin_vertex:k5,beginnormal_vertex:D5,bsdfs:B5,iridescence_fragment:M5,bumpmap_pars_fragment:z5,clipping_planes_fragment:C5,clipping_planes_pars_fragment:P5,clipping_planes_pars_vertex:I5,clipping_planes_vertex:_5,color_fragment:A5,color_pars_fragment:w5,color_pars_vertex:T5,color_vertex:S5,common:j5,cube_uv_reflection_fragment:y5,defaultnormal_vertex:v5,displacementmap_pars_vertex:f5,displacementmap_vertex:h5,emissivemap_fragment:b5,emissivemap_pars_fragment:x5,colorspace_fragment:g5,colorspace_pars_fragment:p5,envmap_fragment:l5,envmap_common_pars_fragment:m5,envmap_pars_fragment:d5,envmap_pars_vertex:u5,envmap_physical_pars_fragment:QG,envmap_vertex:c5,fog_vertex:n5,fog_pars_vertex:s5,fog_fragment:i5,fog_pars_fragment:o5,gradientmap_pars_fragment:a5,lightmap_pars_fragment:r5,lights_lambert_fragment:t5,lights_lambert_pars_fragment:e5,lights_pars_begin:JG,lights_toon_fragment:$G,lights_toon_pars_fragment:ZG,lights_phong_fragment:WG,lights_phong_pars_fragment:KG,lights_physical_fragment:HG,lights_physical_pars_fragment:YG,lights_fragment_begin:XG,lights_fragment_maps:UG,lights_fragment_end:GG,lightprobes_pars_fragment:NG,logdepthbuf_fragment:EG,logdepthbuf_pars_fragment:qG,logdepthbuf_pars_vertex:FG,logdepthbuf_vertex:OG,map_fragment:RG,map_pars_fragment:LG,map_particle_fragment:VG,map_particle_pars_fragment:kG,metalnessmap_fragment:DG,metalnessmap_pars_fragment:BG,morphinstance_vertex:MG,morphcolor_vertex:zG,morphnormal_vertex:CG,morphtarget_pars_vertex:PG,morphtarget_vertex:IG,normal_fragment_begin:_G,normal_fragment_maps:AG,normal_pars_fragment:wG,normal_pars_vertex:TG,normal_vertex:SG,normalmap_pars_fragment:jG,clearcoat_normal_fragment_begin:yG,clearcoat_normal_fragment_maps:vG,clearcoat_pars_fragment:fG,iridescence_pars_fragment:hG,opaque_fragment:bG,packing:xG,premultiplied_alpha_fragment:gG,project_vertex:pG,dithering_fragment:lG,dithering_pars_fragment:mG,roughnessmap_fragment:dG,roughnessmap_pars_fragment:uG,shadowmap_pars_fragment:cG,shadowmap_pars_vertex:nG,shadowmap_vertex:sG,shadowmask_pars_fragment:iG,skinbase_vertex:oG,skinning_pars_vertex:aG,skinning_vertex:rG,skinnormal_vertex:tG,specularmap_fragment:eG,specularmap_pars_fragment:JN,tonemapping_fragment:QN,tonemapping_pars_fragment:$N,transmission_fragment:ZN,transmission_pars_fragment:WN,uv_pars_fragment:KN,uv_pars_vertex:HN,uv_vertex:YN,worldpos_vertex:XN,background_vert:UN,background_frag:GN,backgroundCube_vert:NN,backgroundCube_frag:EN,cube_vert:qN,cube_frag:FN,depth_vert:ON,depth_frag:RN,distance_vert:LN,distance_frag:VN,equirect_vert:kN,equirect_frag:DN,linedashed_vert:BN,linedashed_frag:MN,meshbasic_vert:zN,meshbasic_frag:CN,meshlambert_vert:PN,meshlambert_frag:IN,meshmatcap_vert:_N,meshmatcap_frag:AN,meshnormal_vert:wN,meshnormal_frag:TN,meshphong_vert:SN,meshphong_frag:jN,meshphysical_vert:yN,meshphysical_frag:vN,meshtoon_vert:fN,meshtoon_frag:hN,points_vert:bN,points_frag:xN,shadow_vert:gN,shadow_frag:pN,sprite_vert:lN,sprite_frag:mN},V0={common:{diffuse:{value:new b0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new s0},alphaMap:{value:null},alphaMapTransform:{value:new s0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new s0}},envmap:{envMap:{value:null},envMapRotation:{value:new s0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new s0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new s0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new s0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new s0},normalScale:{value:new H0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new s0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new s0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new s0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new s0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new b0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new w},probesMax:{value:new w},probesResolution:{value:new w}},points:{diffuse:{value:new b0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new s0},alphaTest:{value:0},uvTransform:{value:new s0}},sprite:{diffuse:{value:new b0(16777215)},opacity:{value:1},center:{value:new H0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new s0},alphaMap:{value:null},alphaMapTransform:{value:new s0},alphaTest:{value:0}}},r9={basic:{uniforms:W9([V0.common,V0.specularmap,V0.envmap,V0.aomap,V0.lightmap,V0.fog]),vertexShader:e0.meshbasic_vert,fragmentShader:e0.meshbasic_frag},lambert:{uniforms:W9([V0.common,V0.specularmap,V0.envmap,V0.aomap,V0.lightmap,V0.emissivemap,V0.bumpmap,V0.normalmap,V0.displacementmap,V0.fog,V0.lights,{emissive:{value:new b0(0)},envMapIntensity:{value:1}}]),vertexShader:e0.meshlambert_vert,fragmentShader:e0.meshlambert_frag},phong:{uniforms:W9([V0.common,V0.specularmap,V0.envmap,V0.aomap,V0.lightmap,V0.emissivemap,V0.bumpmap,V0.normalmap,V0.displacementmap,V0.fog,V0.lights,{emissive:{value:new b0(0)},specular:{value:new b0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:e0.meshphong_vert,fragmentShader:e0.meshphong_frag},standard:{uniforms:W9([V0.common,V0.envmap,V0.aomap,V0.lightmap,V0.emissivemap,V0.bumpmap,V0.normalmap,V0.displacementmap,V0.roughnessmap,V0.metalnessmap,V0.fog,V0.lights,{emissive:{value:new b0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:e0.meshphysical_vert,fragmentShader:e0.meshphysical_frag},toon:{uniforms:W9([V0.common,V0.aomap,V0.lightmap,V0.emissivemap,V0.bumpmap,V0.normalmap,V0.displacementmap,V0.gradientmap,V0.fog,V0.lights,{emissive:{value:new b0(0)}}]),vertexShader:e0.meshtoon_vert,fragmentShader:e0.meshtoon_frag},matcap:{uniforms:W9([V0.common,V0.bumpmap,V0.normalmap,V0.displacementmap,V0.fog,{matcap:{value:null}}]),vertexShader:e0.meshmatcap_vert,fragmentShader:e0.meshmatcap_frag},points:{uniforms:W9([V0.points,V0.fog]),vertexShader:e0.points_vert,fragmentShader:e0.points_frag},dashed:{uniforms:W9([V0.common,V0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:e0.linedashed_vert,fragmentShader:e0.linedashed_frag},depth:{uniforms:W9([V0.common,V0.displacementmap]),vertexShader:e0.depth_vert,fragmentShader:e0.depth_frag},normal:{uniforms:W9([V0.common,V0.bumpmap,V0.normalmap,V0.displacementmap,{opacity:{value:1}}]),vertexShader:e0.meshnormal_vert,fragmentShader:e0.meshnormal_frag},sprite:{uniforms:W9([V0.sprite,V0.fog]),vertexShader:e0.sprite_vert,fragmentShader:e0.sprite_frag},background:{uniforms:{uvTransform:{value:new s0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:e0.background_vert,fragmentShader:e0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new s0}},vertexShader:e0.backgroundCube_vert,fragmentShader:e0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:e0.cube_vert,fragmentShader:e0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:e0.equirect_vert,fragmentShader:e0.equirect_frag},distance:{uniforms:W9([V0.common,V0.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:e0.distance_vert,fragmentShader:e0.distance_frag},shadow:{uniforms:W9([V0.lights,V0.fog,{color:{value:new b0(0)},opacity:{value:1}}]),vertexShader:e0.shadow_vert,fragmentShader:e0.shadow_frag}};r9.physical={uniforms:W9([r9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new s0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new s0},clearcoatNormalScale:{value:new H0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new s0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new s0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new s0},sheen:{value:0},sheenColor:{value:new b0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new s0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new s0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new s0},transmissionSamplerSize:{value:new H0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new s0},attenuationDistance:{value:0},attenuationColor:{value:new b0(0)},specularColor:{value:new b0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new s0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new s0},anisotropyVector:{value:new H0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new s0}}]),vertexShader:e0.meshphysical_vert,fragmentShader:e0.meshphysical_frag};var F$={r:0,b:0,g:0},dN=new n0,_Y=new s0;_Y.set(-1,0,0,0,1,0,0,0,1);function uN(J,Q,$,Z,W,K){let H=new b0(0),Y=W===!0?0:1,X,U,N=null,E=0,G=null;function q(P){let B=P.isScene===!0?P.background:null;if(B&&B.isTexture){let L=P.backgroundBlurriness>0;B=Q.get(B,L)}return B}function R(P){let B=!1,L=q(P);if(L===null)O(H,Y);else if(L&&L.isColor)O(L,1),B=!0;let z=J.xr.getEnvironmentBlendMode();if(z==="additive")$.buffers.color.setClear(0,0,0,1,K);else if(z==="alpha-blend")$.buffers.color.setClear(0,0,0,0,K);if(J.autoClear||B)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function k(P,B){let L=q(B);if(L&&(L.isCubeTexture||L.mapping===k6)){if(U===void 0)U=new p0(new Z9(1,1,1),new w9({name:"BackgroundCubeMaterial",uniforms:$7(r9.backgroundCube.uniforms),vertexShader:r9.backgroundCube.vertexShader,fragmentShader:r9.backgroundCube.fragmentShader,side:$9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(z,_,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(U);if(U.material.uniforms.envMap.value=L,U.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(dN.makeRotationFromEuler(B.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(_Y);if(U.material.toneMapped=QJ.getTransfer(L.colorSpace)!==PJ,N!==L||E!==L.version||G!==J.toneMapping)U.material.needsUpdate=!0,N=L,E=L.version,G=J.toneMapping;U.layers.enableAll(),P.unshift(U,U.geometry,U.material,0,0,null)}else if(L&&L.isTexture){if(X===void 0)X=new p0(new l9(2,2),new w9({name:"BackgroundMaterial",uniforms:$7(r9.background.uniforms),vertexShader:r9.background.vertexShader,fragmentShader:r9.background.fragmentShader,side:P8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),X.geometry.deleteAttribute("normal"),Object.defineProperty(X.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(X);if(X.material.uniforms.t2D.value=L,X.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,X.material.toneMapped=QJ.getTransfer(L.colorSpace)!==PJ,L.matrixAutoUpdate===!0)L.updateMatrix();if(X.material.uniforms.uvTransform.value.copy(L.matrix),N!==L||E!==L.version||G!==J.toneMapping)X.material.needsUpdate=!0,N=L,E=L.version,G=J.toneMapping;X.layers.enableAll(),P.unshift(X,X.geometry,X.material,0,0,null)}}function O(P,B){P.getRGB(F$,GW(J)),$.buffers.color.setClear(F$.r,F$.g,F$.b,B,K)}function F(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(X!==void 0)X.geometry.dispose(),X.material.dispose(),X=void 0}return{getClearColor:function(){return H},setClearColor:function(P,B=1){H.set(P),Y=B,O(H,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(P){Y=P,O(H,Y)},render:R,addToRenderList:k,dispose:F}}function cN(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},W=G(null),K=W,H=!1;function Y(v,b,o,S,m){let r=!1,d=E(v,S,o,b);if(K!==d)K=d,U(K.object);if(r=q(v,S,o,m),r)R(v,S,o,m);if(m!==null)Q.update(m,J.ELEMENT_ARRAY_BUFFER);if(r||H){if(H=!1,L(v,b,o,S),m!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(m).buffer)}}function X(){return J.createVertexArray()}function U(v){return J.bindVertexArray(v)}function N(v){return J.deleteVertexArray(v)}function E(v,b,o,S){let m=S.wireframe===!0,r=Z[b.id];if(r===void 0)r={},Z[b.id]=r;let d=v.isInstancedMesh===!0?v.id:0,X0=r[d];if(X0===void 0)X0={},r[d]=X0;let n=X0[o.id];if(n===void 0)n={},X0[o.id]=n;let t=n[m];if(t===void 0)t=G(X()),n[m]=t;return t}function G(v){let b=[],o=[],S=[];for(let m=0;m<$;m++)b[m]=0,o[m]=0,S[m]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:o,attributeDivisors:S,object:v,attributes:{},index:null}}function q(v,b,o,S){let m=K.attributes,r=b.attributes,d=0,X0=o.getAttributes();for(let n in X0)if(X0[n].location>=0){let Z0=m[n],l0=r[n];if(l0===void 0){if(n==="instanceMatrix"&&v.instanceMatrix)l0=v.instanceMatrix;if(n==="instanceColor"&&v.instanceColor)l0=v.instanceColor}if(Z0===void 0)return!0;if(Z0.attribute!==l0)return!0;if(l0&&Z0.data!==l0.data)return!0;d++}if(K.attributesNum!==d)return!0;if(K.index!==S)return!0;return!1}function R(v,b,o,S){let m={},r=b.attributes,d=0,X0=o.getAttributes();for(let n in X0)if(X0[n].location>=0){let Z0=r[n];if(Z0===void 0){if(n==="instanceMatrix"&&v.instanceMatrix)Z0=v.instanceMatrix;if(n==="instanceColor"&&v.instanceColor)Z0=v.instanceColor}let l0={};if(l0.attribute=Z0,Z0&&Z0.data)l0.data=Z0.data;m[n]=l0,d++}K.attributes=m,K.attributesNum=d,K.index=S}function k(){let v=K.newAttributes;for(let b=0,o=v.length;b<o;b++)v[b]=0}function O(v){F(v,0)}function F(v,b){let{newAttributes:o,enabledAttributes:S,attributeDivisors:m}=K;if(o[v]=1,S[v]===0)J.enableVertexAttribArray(v),S[v]=1;if(m[v]!==b)J.vertexAttribDivisor(v,b),m[v]=b}function P(){let{newAttributes:v,enabledAttributes:b}=K;for(let o=0,S=b.length;o<S;o++)if(b[o]!==v[o])J.disableVertexAttribArray(o),b[o]=0}function B(v,b,o,S,m,r,d){if(d===!0)J.vertexAttribIPointer(v,b,o,m,r);else J.vertexAttribPointer(v,b,o,S,m,r)}function L(v,b,o,S){k();let m=S.attributes,r=o.getAttributes(),d=b.defaultAttributeValues;for(let X0 in r){let n=r[X0];if(n.location>=0){let t=m[X0];if(t===void 0){if(X0==="instanceMatrix"&&v.instanceMatrix)t=v.instanceMatrix;if(X0==="instanceColor"&&v.instanceColor)t=v.instanceColor}if(t!==void 0){let{normalized:Z0,itemSize:l0}=t,_0=Q.get(t);if(_0===void 0)continue;let{buffer:VJ,type:a0,bytesPerElement:s}=_0,G0=a0===J.INT||a0===J.UNSIGNED_INT||t.gpuType===NZ;if(t.isInterleavedBufferAttribute){let U0=t.data,f0=U0.stride,x0=t.offset;if(U0.isInstancedInterleavedBuffer){for(let h0=0;h0<n.locationSize;h0++)F(n.location+h0,U0.meshPerAttribute);if(v.isInstancedMesh!==!0&&S._maxInstanceCount===void 0)S._maxInstanceCount=U0.meshPerAttribute*U0.count}else for(let h0=0;h0<n.locationSize;h0++)O(n.location+h0);J.bindBuffer(J.ARRAY_BUFFER,VJ);for(let h0=0;h0<n.locationSize;h0++)B(n.location+h0,l0/n.locationSize,a0,Z0,f0*s,(x0+l0/n.locationSize*h0)*s,G0)}else{if(t.isInstancedBufferAttribute){for(let U0=0;U0<n.locationSize;U0++)F(n.location+U0,t.meshPerAttribute);if(v.isInstancedMesh!==!0&&S._maxInstanceCount===void 0)S._maxInstanceCount=t.meshPerAttribute*t.count}else for(let U0=0;U0<n.locationSize;U0++)O(n.location+U0);J.bindBuffer(J.ARRAY_BUFFER,VJ);for(let U0=0;U0<n.locationSize;U0++)B(n.location+U0,l0/n.locationSize,a0,Z0,l0*s,l0/n.locationSize*U0*s,G0)}}else if(d!==void 0){let Z0=d[X0];if(Z0!==void 0)switch(Z0.length){case 2:J.vertexAttrib2fv(n.location,Z0);break;case 3:J.vertexAttrib3fv(n.location,Z0);break;case 4:J.vertexAttrib4fv(n.location,Z0);break;default:J.vertexAttrib1fv(n.location,Z0)}}}}P()}function z(){I();for(let v in Z){let b=Z[v];for(let o in b){let S=b[o];for(let m in S){let r=S[m];for(let d in r)N(r[d].object),delete r[d];delete S[m]}}delete Z[v]}}function _(v){if(Z[v.id]===void 0)return;let b=Z[v.id];for(let o in b){let S=b[o];for(let m in S){let r=S[m];for(let d in r)N(r[d].object),delete r[d];delete S[m]}}delete Z[v.id]}function A(v){for(let b in Z){let o=Z[b];for(let S in o){let m=o[S];if(m[v.id]===void 0)continue;let r=m[v.id];for(let d in r)N(r[d].object),delete r[d];delete m[v.id]}}}function D(v){for(let b in Z){let o=Z[b],S=v.isInstancedMesh===!0?v.id:0,m=o[S];if(m===void 0)continue;for(let r in m){let d=m[r];for(let X0 in d)N(d[X0].object),delete d[X0];delete m[r]}if(delete o[S],Object.keys(o).length===0)delete Z[b]}}function I(){if(p(),H=!0,K===W)return;K=W,U(K.object)}function p(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:Y,reset:I,resetDefaultState:p,dispose:z,releaseStatesOfGeometry:_,releaseStatesOfObject:D,releaseStatesOfProgram:A,initAttributes:k,enableAttribute:O,disableUnusedAttributes:P}}function nN(J,Q,$){let Z;function W(X){Z=X}function K(X,U){J.drawArrays(Z,X,U),$.update(U,Z,1)}function H(X,U,N){if(N===0)return;J.drawArraysInstanced(Z,X,U,N),$.update(U,Z,N)}function Y(X,U,N){if(N===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,X,0,U,0,N);let G=0;for(let q=0;q<N;q++)G+=U[q];$.update(G,Z,1)}this.setMode=W,this.render=K,this.renderInstances=H,this.renderMultiDraw=Y}function sN(J,Q,$,Z){let W;function K(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let A=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function H(A){if(A!==i9&&Z.convert(A)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(A){let D=A===s9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(A!==x9&&A!==H8&&!D&&Z.convert(A)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function X(A){if(A==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";A="mediump"}if(A==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",N=X(U);if(N!==U)y0("WebGLRenderer:",U,"not supported, using",N,"instead."),U=N;let E=$.logarithmicDepthBuffer===!0,G=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&G===!1)y0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let q=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),R=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),k=J.getParameter(J.MAX_TEXTURE_SIZE),O=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),F=J.getParameter(J.MAX_VERTEX_ATTRIBS),P=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),B=J.getParameter(J.MAX_VARYING_VECTORS),L=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),z=J.getParameter(J.MAX_SAMPLES),_=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:K,getMaxPrecision:X,textureFormatReadable:H,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:E,reversedDepthBuffer:G,maxTextures:q,maxVertexTextures:R,maxTextureSize:k,maxCubemapSize:O,maxAttributes:F,maxVertexUniforms:P,maxVaryings:B,maxFragmentUniforms:L,maxSamples:z,samples:_}}function iN(J){let Q=this,$=null,Z=0,W=!1,K=!1,H=new C9,Y=new s0,X={value:null,needsUpdate:!1};this.uniform=X,this.numPlanes=0,this.numIntersection=0,this.init=function(E,G){let q=E.length!==0||G||Z!==0||W;return W=G,Z=E.length,q},this.beginShadows=function(){K=!0,N(null)},this.endShadows=function(){K=!1},this.setGlobalState=function(E,G){$=N(E,G,0)},this.setState=function(E,G,q){let{clippingPlanes:R,clipIntersection:k,clipShadows:O}=E,F=J.get(E);if(!W||R===null||R.length===0||K&&!O)if(K)N(null);else U();else{let P=K?0:Z,B=P*4,L=F.clippingState||null;X.value=L,L=N(R,G,B,q);for(let z=0;z!==B;++z)L[z]=$[z];F.clippingState=L,this.numIntersection=k?this.numPlanes:0,this.numPlanes+=P}};function U(){if(X.value!==$)X.value=$,X.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function N(E,G,q,R){let k=E!==null?E.length:0,O=null;if(k!==0){if(O=X.value,R!==!0||O===null){let F=q+k*4,P=G.matrixWorldInverse;if(Y.getNormalMatrix(P),O===null||O.length<F)O=new Float32Array(F);for(let B=0,L=q;B!==k;++B,L+=4)H.copy(E[B]).applyMatrix4(P,Y),H.normal.toArray(O,L),O[L+3]=H.constant}X.value=O,X.needsUpdate=!0}return Q.numPlanes=k,Q.numIntersection=0,O}}var s7=4,oN=6,aN=20,rN=256,m6=new W7,KY=new b0,AW=null,wW=0,TW=0,SW=!1,tN=new w,K7=new w;class n6{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,W={}){let{size:K=256,position:H=tN}=W;AW=this._renderer.getRenderTarget(),wW=this._renderer.getActiveCubeFace(),TW=this._renderer.getActiveMipmapLevel(),SW=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(K);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,Y,H),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=XY(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=YY(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(AW,wW,TW),this._renderer.xr.enabled=SW,J.scissorTest=!1,n7(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===v7||J.mapping===i8)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);AW=this._renderer.getRenderTarget(),wW=this._renderer.getActiveCubeFace(),TW=this._renderer.getActiveMipmapLevel(),SW=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:rJ,minFilter:rJ,generateMipmaps:!1,type:s9,format:i9,colorSpace:F9,depthBuffer:!1},Z=HY(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=HY(J,Q,$);let{_lodMax:W}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=eN(W)),this._blurMaterial=QE(W,J,Q),this._ggxMaterial=JE(W,J,Q)}return Z}_compileMaterial(J){let Q=new p0(new SJ,J);this._renderer.compile(Q,m6)}_sceneToCubeUV(J,Q,$,Z,W){let Y=new uJ(90,1,Q,$),X=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],N=this._renderer,E=N.autoClear,G=N.toneMapping;if(N.getClearColor(KY),N.toneMapping=h9,N.autoClear=!1,N.state.buffers.depth.getReversed())N.setRenderTarget(Z),N.clearDepth(),N.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new p0(new Z9,new tJ({name:"PMREM.Background",side:$9,depthWrite:!1,depthTest:!1}));let R=this._backgroundBox,k=R.material,O=!1,F=J.background;if(F){if(F.isColor)k.color.copy(F),J.background=null,O=!0}else k.color.copy(KY),O=!0;for(let P=0;P<6;P++){let B=P%3;if(B===0)Y.up.set(0,X[P],0),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x+U[P],W.y,W.z);else if(B===1)Y.up.set(0,0,X[P]),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x,W.y+U[P],W.z);else Y.up.set(0,X[P],0),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x,W.y,W.z+U[P]);let L=this._cubeSize;if(n7(Z,B*L,P>2?L:0,L,L),N.setRenderTarget(Z),O)N.render(R,Y);N.render(J,Y)}N.toneMapping=G,N.autoClear=E,J.background=F}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===v7||J.mapping===i8;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=XY();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=YY();let W=Z?this._cubemapMaterial:this._equirectMaterial,K=this._lodMeshes[0];K.material=W;let H=W.uniforms;H.envMap.value=J;let Y=this._cubeSize;n7(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(K,m6)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodMeshes.length;for(let W=1;W<Z;W++)this._applyGGXFilter(J,W-1,W);Q.autoClear=$}_applyGGXFilter(J,Q,$){let Z=this._renderer,W=this._pingPongRenderTarget,K=this._ggxMaterial,H=this._lodMeshes[$];H.material=K;let Y=K.uniforms,X=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),N=Math.sqrt(X*X-U*U),E=X*1.25,G=N*E,{_lodMax:q}=this,R=this._sizeLods[$],k=3*R*($>q-s7?$-q+s7:0),O=4*(this._cubeSize-R);Y.envMap.value=J.texture,Y.roughness.value=G,Y.mipInt.value=q-Q,n7(W,k,O,3*R,2*R),Z.setRenderTarget(W),Z.render(H,m6),Y.envMap.value=W.texture,Y.roughness.value=0,Y.mipInt.value=q-$,n7(J,k,O,3*R,2*R),Z.setRenderTarget(J),Z.render(H,m6)}_blur(J,Q,$,Z){let W=this._pingPongRenderTarget,K=Math.min(Z,Math.PI)/Math.SQRT2;this._blurPass(J,W,Q,$,K),this._blurPass(W,J,$,$,K)}_blurPass(J,Q,$,Z,W){let K=this._renderer,H=this._blurMaterial,Y=this._lodMeshes[Z];Y.material=H;let X=H.uniforms;X.envMap.value=J.texture,X.sigma.value=W,X.mipInt.value=this._lodMax-$;let U=this._sizeLods[Z],N=3*U*(Z>this._lodMax-s7?Z-this._lodMax+s7:0),E=4*(this._cubeSize-U);n7(Q,N,E,3*U,2*U),K.setRenderTarget(Q),K.render(Y,m6)}}function eN(J){let Q=[],$=[],Z=J,W=J-s7+1+oN;for(let K=0;K<W;K++){let H=Math.pow(2,Z);Q.push(H);let Y=1/(H-2),X=-Y,U=1+Y,N=[X,X,U,X,U,U,X,X,U,U,X,U],E=6,G=6,q=3,R=new Float32Array(q*G*E),k=new Float32Array(q*G*E);for(let F=0;F<E;F++){let P=F%3*2/3-1,B=F>2?0:-1,L=[P,B,0,P+0.6666666666666666,B,0,P+0.6666666666666666,B+1,0,P,B,0,P+0.6666666666666666,B+1,0,P,B+1,0];R.set(L,q*G*F);for(let z=0;z<G;z++){let _=N[z*2]*2-1,A=N[z*2+1]*2-1;if(F===0)K7.set(1,A,_);else if(F===1)K7.set(-_,1,-A);else if(F===2)K7.set(-_,A,1);else if(F===3)K7.set(-1,A,-_);else if(F===4)K7.set(-_,-1,A);else K7.set(_,A,-1);K7.toArray(k,(F*G+z)*q)}}let O=new SJ;if(O.setAttribute("position",new cJ(R,q)),O.setAttribute("outputDirection",new cJ(k,q)),$.push(new p0(O,null)),Z>s7)Z--}return{lodMeshes:$,sizeLods:Q}}function HY(J,Q,$){let Z=new O9(J,Q,$);return Z.texture.mapping=k6,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function n7(J,Q,$,Z,W){J.viewport.set(Q,$,Z,W),J.scissor.set(Q,$,Z,W)}function JE(J,Q,$){return new w9({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rN,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:R$(),fragmentShader:`

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
		`,blending:c9,depthTest:!1,depthWrite:!1})}function QE(J,Q,$){return new w9({name:"SphericalGaussianBlur",defines:{SAMPLES:aN,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:R$(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:c9,depthTest:!1,depthWrite:!1})}function YY(){return new w9({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:R$(),fragmentShader:`

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
		`,blending:c9,depthTest:!1,depthWrite:!1})}function XY(){return new w9({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:R$(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:c9,depthTest:!1,depthWrite:!1})}function R$(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class hW extends O9{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new tQ(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new Z9(5,5,5),W=new w9({name:"CubemapFromEquirect",uniforms:$7($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:$9,blending:c9});W.uniforms.tEquirect.value=Q;let K=new p0(Z,W),H=Q.minFilter;if(Q.minFilter===n9)Q.minFilter=rJ;return new DW(1,10,this).update(J,K),Q.minFilter=H,K.geometry.dispose(),K.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let W=J.getRenderTarget();for(let K=0;K<6;K++)J.setRenderTarget(this,K),J.clear(Q,$,Z);J.setRenderTarget(W)}}function $E(J){let Q=new WeakMap,$=new WeakMap,Z=null;function W(G,q=!1){if(G===null||G===void 0)return null;if(q)return H(G);return K(G)}function K(G){if(G&&G.isTexture){let q=G.mapping;if(q===SQ||q===jQ)if(Q.has(G)){let R=Q.get(G).texture;return Y(R,G.mapping)}else{let R=G.image;if(R&&R.height>0){let k=new hW(R.height);return k.fromEquirectangularTexture(J,G),Q.set(G,k),G.addEventListener("dispose",U),Y(k.texture,G.mapping)}else return null}}return G}function H(G){if(G&&G.isTexture){let q=G.mapping,R=q===SQ||q===jQ,k=q===v7||q===i8;if(R||k){let O=$.get(G),F=O!==void 0?O.texture.pmremVersion:0;if(G.isRenderTargetTexture&&G.pmremVersion!==F){if(Z===null)Z=new n6(J);return O=R?Z.fromEquirectangular(G,O):Z.fromCubemap(G,O),O.texture.pmremVersion=G.pmremVersion,$.set(G,O),O.texture}else if(O!==void 0)return O.texture;else{let P=G.image;if(R&&P&&P.height>0||k&&P&&X(P)){if(Z===null)Z=new n6(J);return O=R?Z.fromEquirectangular(G):Z.fromCubemap(G),O.texture.pmremVersion=G.pmremVersion,$.set(G,O),G.addEventListener("dispose",N),O.texture}else return null}}}return G}function Y(G,q){if(q===SQ)G.mapping=v7;else if(q===jQ)G.mapping=i8;return G}function X(G){let q=0,R=6;for(let k=0;k<R;k++)if(G[k]!==void 0)q++;return q===R}function U(G){let q=G.target;q.removeEventListener("dispose",U);let R=Q.get(q);if(R!==void 0)Q.delete(q),R.dispose()}function N(G){let q=G.target;q.removeEventListener("dispose",N);let R=$.get(q);if(R!==void 0)$.delete(q),R.dispose()}function E(){if(Q=new WeakMap,$=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:W,dispose:E}}function ZE(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let W=J.getExtension(Z);return Q[Z]=W,W}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let W=$(Z);if(W===null)c8("WebGLRenderer: "+Z+" extension not supported.");return W}}}function WE(J,Q,$,Z){let W={},K=new WeakMap;function H(E){let G=E.target;if(G.index!==null)Q.remove(G.index);for(let R in G.attributes)Q.remove(G.attributes[R]);G.removeEventListener("dispose",H),delete W[G.id];let q=K.get(G);if(q)Q.remove(q),K.delete(G);if(Z.releaseStatesOfGeometry(G),G.isInstancedBufferGeometry===!0)delete G._maxInstanceCount;$.memory.geometries--}function Y(E,G){if(W[G.id]===!0)return G;return G.addEventListener("dispose",H),W[G.id]=!0,$.memory.geometries++,G}function X(E){let G=E.attributes;for(let q in G)Q.update(G[q],J.ARRAY_BUFFER)}function U(E){let G=[],q=E.index,R=E.attributes.position,k=0;if(R===void 0)return;if(q!==null){let P=q.array;k=q.version;for(let B=0,L=P.length;B<L;B+=3){let z=P[B+0],_=P[B+1],A=P[B+2];G.push(z,_,_,A,A,z)}}else{let P=R.array;k=R.version;for(let B=0,L=P.length/3-1;B<L;B+=3){let z=B+0,_=B+1,A=B+2;G.push(z,_,_,A,A,z)}}let O=new(R.count>=65535?sQ:nQ)(G,1);O.version=k;let F=K.get(E);if(F)Q.remove(F);K.set(E,O)}function N(E){let G=K.get(E);if(G){let q=E.index;if(q!==null){if(G.version<q.version)U(E)}}else U(E);return K.get(E)}return{get:Y,update:X,getWireframeAttribute:N}}function KE(J,Q,$){let Z;function W(E){Z=E}let K,H;function Y(E){K=E.type,H=E.bytesPerElement}function X(E,G){J.drawElements(Z,G,K,E*H),$.update(G,Z,1)}function U(E,G,q){if(q===0)return;J.drawElementsInstanced(Z,G,K,E*H,q),$.update(G,Z,q)}function N(E,G,q){if(q===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,G,0,K,E,0,q);let k=0;for(let O=0;O<q;O++)k+=G[O];$.update(k,Z,1)}this.setMode=W,this.setIndex=Y,this.render=X,this.renderInstances=U,this.renderMultiDraw=N}function HE(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(K,H,Y){switch($.calls++,H){case J.TRIANGLES:$.triangles+=Y*(K/3);break;case J.LINES:$.lines+=Y*(K/2);break;case J.LINE_STRIP:$.lines+=Y*(K-1);break;case J.LINE_LOOP:$.lines+=Y*K;break;case J.POINTS:$.points+=Y*K;break;default:u0("WebGLInfo: Unknown draw mode:",H);break}}function W(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:W,update:Z}}function YE(J,Q,$){let Z=new WeakMap,W=new DJ;function K(H,Y,X){let U=H.morphTargetInfluences,N=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,E=N!==void 0?N.length:0,G=Z.get(Y);if(G===void 0||G.count!==E){let I=function(){A.dispose(),Z.delete(Y),Y.removeEventListener("dispose",I)};if(G!==void 0)G.texture.dispose();let q=Y.morphAttributes.position!==void 0,R=Y.morphAttributes.normal!==void 0,k=Y.morphAttributes.color!==void 0,O=Y.morphAttributes.position||[],F=Y.morphAttributes.normal||[],P=Y.morphAttributes.color||[],B=0;if(q===!0)B=1;if(R===!0)B=2;if(k===!0)B=3;let L=Y.attributes.position.count*B,z=1;if(L>Q.maxTextureSize)z=Math.ceil(L/Q.maxTextureSize),L=Q.maxTextureSize;let _=new Float32Array(L*z*4*E),A=new uQ(_,L,z,E);A.type=H8,A.needsUpdate=!0;let D=B*4;for(let p=0;p<E;p++){let v=O[p],b=F[p],o=P[p],S=L*z*4*p;for(let m=0;m<v.count;m++){let r=m*D;if(q===!0)W.fromBufferAttribute(v,m),_[S+r+0]=W.x,_[S+r+1]=W.y,_[S+r+2]=W.z,_[S+r+3]=0;if(R===!0)W.fromBufferAttribute(b,m),_[S+r+4]=W.x,_[S+r+5]=W.y,_[S+r+6]=W.z,_[S+r+7]=0;if(k===!0)W.fromBufferAttribute(o,m),_[S+r+8]=W.x,_[S+r+9]=W.y,_[S+r+10]=W.z,_[S+r+11]=o.itemSize===4?W.w:1}}G={count:E,texture:A,size:new H0(L,z)},Z.set(Y,G),Y.addEventListener("dispose",I)}if(H.isInstancedMesh===!0&&H.morphTexture!==null)X.getUniforms().setValue(J,"morphTexture",H.morphTexture,$);else{let q=0;for(let k=0;k<U.length;k++)q+=U[k];let R=Y.morphTargetsRelative?1:1-q;X.getUniforms().setValue(J,"morphTargetBaseInfluence",R),X.getUniforms().setValue(J,"morphTargetInfluences",U)}X.getUniforms().setValue(J,"morphTargetsTexture",G.texture,$),X.getUniforms().setValue(J,"morphTargetsTextureSize",G.size)}return{update:K}}function XE(J,Q,$,Z,W){let K=new WeakMap;function H(U){let N=W.render.frame,E=U.geometry,G=Q.get(U,E);if(K.get(G)!==N)Q.update(G),K.set(G,N);if(U.isInstancedMesh){if(U.hasEventListener("dispose",X)===!1)U.addEventListener("dispose",X);if(K.get(U)!==N){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);K.set(U,N)}}if(U.isSkinnedMesh){let q=U.skeleton;if(K.get(q)!==N)q.update(),K.set(q,N)}return G}function Y(){K=new WeakMap}function X(U){let N=U.target;if(N.removeEventListener("dispose",X),Z.releaseStatesOfObject(N),$.remove(N.instanceMatrix),N.instanceColor!==null)$.remove(N.instanceColor)}return{update:H,dispose:Y}}var UE={[KZ]:"LINEAR_TONE_MAPPING",[HZ]:"REINHARD_TONE_MAPPING",[YZ]:"CINEON_TONE_MAPPING",[V6]:"ACES_FILMIC_TONE_MAPPING",[UZ]:"AGX_TONE_MAPPING",[GZ]:"NEUTRAL_TONE_MAPPING",[XZ]:"CUSTOM_TONE_MAPPING"};function GE(J,Q,$,Z,W,K){let H=new O9(Q,$,{type:J,depthBuffer:W,stencilBuffer:K,samples:Z?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),Y=null,X=null,U=new SJ;U.setAttribute("position",new XJ([-1,3,0,-1,-1,0,3,-1,0],3)),U.setAttribute("uv",new XJ([0,2,0,0,2,0],2));let N=new NW({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),E=new p0(U,N),G=new W7(-1,1,1,-1,0,1),q=null,R=null,k=!1,O,F=null,P=[],B=!1;this.setSize=function(L,z){if(H.setSize(L,z),Y!==null)Y.setSize(L,z);if(X!==null)X.setSize(L,z);for(let _=0;_<P.length;_++){let A=P[_];if(A.setSize)A.setSize(L,z)}},this.setEffects=function(L){P=L,B=P.length>0&&P[0].isRenderPass===!0;let{width:z,height:_}=H;if(P.length>0&&Y===null)Y=new O9(z,_,{type:s9,depthBuffer:!1,stencilBuffer:!1}),X=new O9(z,_,{type:s9,depthBuffer:!1,stencilBuffer:!1});for(let A=0;A<P.length;A++){let D=P[A];if(D.setSize)D.setSize(z,_)}},this.begin=function(L,z){if(k)return!1;if(L.toneMapping===h9&&P.length===0)return!1;if(F=z,z!==null){let{width:_,height:A}=z;if(H.width!==_||H.height!==A)this.setSize(_,A)}if(B===!1)L.setRenderTarget(H);return O=L.toneMapping,L.toneMapping=h9,!0},this.hasRenderPass=function(){return B},this.end=function(L,z){L.toneMapping=O,k=!0;let _=H,A=Y;for(let D=0;D<P.length;D++){let I=P[D];if(I.enabled===!1)continue;if(I.render(L,A,_,z),I.needsSwap!==!1)_=A,A=A===Y?X:Y}if(q!==L.outputColorSpace||R!==L.toneMapping){if(q=L.outputColorSpace,R=L.toneMapping,N.defines={},QJ.getTransfer(q)===PJ)N.defines.SRGB_TRANSFER="";let D=UE[R];if(D)N.defines[D]="";N.needsUpdate=!0}N.uniforms.tDiffuse.value=_.texture,L.setRenderTarget(F),L.render(E,G),F=null,k=!1},this.isCompositing=function(){return k},this.dispose=function(){if(H.dispose(),Y!==null)Y.dispose();if(X!==null)X.dispose();U.dispose(),N.dispose()}}var AY=new xJ,vW=new J7(1,1),wY=new uQ,TY=new $W,SY=new tQ,UY=[],GY=[],NY=new Float32Array(16),EY=new Float32Array(9),qY=new Float32Array(4);function i7(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let W=Q*$,K=UY[W];if(K===void 0)K=new Float32Array(W),UY[W]=K;if(Q!==0){Z.toArray(K,0);for(let H=1,Y=0;H!==Q;++H)Y+=$,J[H].toArray(K,Y)}return K}function nJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function sJ(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function L$(J,Q){let $=GY[Q];if($===void 0)$=new Int32Array(Q),GY[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function NE(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function EE(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(nJ($,Q))return;J.uniform2fv(this.addr,Q),sJ($,Q)}}function qE(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(nJ($,Q))return;J.uniform3fv(this.addr,Q),sJ($,Q)}}function FE(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(nJ($,Q))return;J.uniform4fv(this.addr,Q),sJ($,Q)}}function OE(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(nJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),sJ($,Q)}else{if(nJ($,Z))return;qY.set(Z),J.uniformMatrix2fv(this.addr,!1,qY),sJ($,Z)}}function RE(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(nJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),sJ($,Q)}else{if(nJ($,Z))return;EY.set(Z),J.uniformMatrix3fv(this.addr,!1,EY),sJ($,Z)}}function LE(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(nJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),sJ($,Q)}else{if(nJ($,Z))return;NY.set(Z),J.uniformMatrix4fv(this.addr,!1,NY),sJ($,Z)}}function VE(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function kE(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(nJ($,Q))return;J.uniform2iv(this.addr,Q),sJ($,Q)}}function DE(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(nJ($,Q))return;J.uniform3iv(this.addr,Q),sJ($,Q)}}function BE(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(nJ($,Q))return;J.uniform4iv(this.addr,Q),sJ($,Q)}}function ME(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function zE(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(nJ($,Q))return;J.uniform2uiv(this.addr,Q),sJ($,Q)}}function CE(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(nJ($,Q))return;J.uniform3uiv(this.addr,Q),sJ($,Q)}}function PE(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(nJ($,Q))return;J.uniform4uiv(this.addr,Q),sJ($,Q)}}function IE(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;let K;if(this.type===J.SAMPLER_2D_SHADOW)vW.compareFunction=$.isReversedDepthBuffer()?dQ:mQ,K=vW;else K=AY;$.setTexture2D(Q||K,W)}function _E(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture3D(Q||TY,W)}function AE(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTextureCube(Q||SY,W)}function wE(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture2DArray(Q||wY,W)}function TE(J){switch(J){case 5126:return NE;case 35664:return EE;case 35665:return qE;case 35666:return FE;case 35674:return OE;case 35675:return RE;case 35676:return LE;case 5124:case 35670:return VE;case 35667:case 35671:return kE;case 35668:case 35672:return DE;case 35669:case 35673:return BE;case 5125:return ME;case 36294:return zE;case 36295:return CE;case 36296:return PE;case 35678:case 36198:case 36298:case 36306:case 35682:return IE;case 35679:case 36299:case 36307:return _E;case 35680:case 36300:case 36308:case 36293:return AE;case 36289:case 36303:case 36311:case 36292:return wE}}function SE(J,Q){J.uniform1fv(this.addr,Q)}function jE(J,Q){let $=i7(Q,this.size,2);J.uniform2fv(this.addr,$)}function yE(J,Q){let $=i7(Q,this.size,3);J.uniform3fv(this.addr,$)}function vE(J,Q){let $=i7(Q,this.size,4);J.uniform4fv(this.addr,$)}function fE(J,Q){let $=i7(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function hE(J,Q){let $=i7(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function bE(J,Q){let $=i7(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function xE(J,Q){J.uniform1iv(this.addr,Q)}function gE(J,Q){J.uniform2iv(this.addr,Q)}function pE(J,Q){J.uniform3iv(this.addr,Q)}function lE(J,Q){J.uniform4iv(this.addr,Q)}function mE(J,Q){J.uniform1uiv(this.addr,Q)}function dE(J,Q){J.uniform2uiv(this.addr,Q)}function uE(J,Q){J.uniform3uiv(this.addr,Q)}function cE(J,Q){J.uniform4uiv(this.addr,Q)}function nE(J,Q,$){let Z=this.cache,W=Q.length,K=L$($,W);if(!nJ(Z,K))J.uniform1iv(this.addr,K),sJ(Z,K);let H;if(this.type===J.SAMPLER_2D_SHADOW)H=vW;else H=AY;for(let Y=0;Y!==W;++Y)$.setTexture2D(Q[Y]||H,K[Y])}function sE(J,Q,$){let Z=this.cache,W=Q.length,K=L$($,W);if(!nJ(Z,K))J.uniform1iv(this.addr,K),sJ(Z,K);for(let H=0;H!==W;++H)$.setTexture3D(Q[H]||TY,K[H])}function iE(J,Q,$){let Z=this.cache,W=Q.length,K=L$($,W);if(!nJ(Z,K))J.uniform1iv(this.addr,K),sJ(Z,K);for(let H=0;H!==W;++H)$.setTextureCube(Q[H]||SY,K[H])}function oE(J,Q,$){let Z=this.cache,W=Q.length,K=L$($,W);if(!nJ(Z,K))J.uniform1iv(this.addr,K),sJ(Z,K);for(let H=0;H!==W;++H)$.setTexture2DArray(Q[H]||wY,K[H])}function aE(J){switch(J){case 5126:return SE;case 35664:return jE;case 35665:return yE;case 35666:return vE;case 35674:return fE;case 35675:return hE;case 35676:return bE;case 5124:case 35670:return xE;case 35667:case 35671:return gE;case 35668:case 35672:return pE;case 35669:case 35673:return lE;case 5125:return mE;case 36294:return dE;case 36295:return uE;case 36296:return cE;case 35678:case 36198:case 36298:case 36306:case 35682:return nE;case 35679:case 36299:case 36307:return sE;case 35680:case 36300:case 36308:case 36293:return iE;case 36289:case 36303:case 36311:case 36292:return oE}}class jY{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=TE(Q.type)}}class yY{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=aE(Q.type)}}class vY{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let W=0,K=Z.length;W!==K;++W){let H=Z[W];H.setValue(J,Q[H.id],$)}}}var jW=/(\w+)(\])?(\[|\.)?/g;function FY(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function rE(J,Q,$){let Z=J.name,W=Z.length;jW.lastIndex=0;while(!0){let K=jW.exec(Z),H=jW.lastIndex,Y=K[1],X=K[2]==="]",U=K[3];if(X)Y=Y|0;if(U===void 0||U==="["&&H+2===W){FY($,U===void 0?new jY(Y,J,Q):new yY(Y,J,Q));break}else{let E=$.map[Y];if(E===void 0)E=new vY(Y),FY($,E);$=E}}}class c6{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let K=0;K<$;++K){let H=J.getActiveUniform(Q,K),Y=J.getUniformLocation(Q,H.name);rE(H,Y,this)}let Z=[],W=[];for(let K of this.seq)if(K.type===J.SAMPLER_2D_SHADOW||K.type===J.SAMPLER_CUBE_SHADOW||K.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(K);else W.push(K);if(Z.length>0)this.seq=Z.concat(W)}setValue(J,Q,$,Z){let W=this.map[Q];if(W!==void 0)W.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let W=0,K=Q.length;W!==K;++W){let H=Q[W],Y=$[H.id];if(Y.needsUpdate!==!1)H.setValue(J,Y.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,W=J.length;Z!==W;++Z){let K=J[Z];if(K.id in Q)$.push(K)}return $}}function OY(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var tE=37297,eE=0;function Jq(J,Q){let $=J.split(`
`),Z=[],W=Math.max(Q-6,0),K=Math.min(Q+6,$.length);for(let H=W;H<K;H++){let Y=H+1;Z.push(`${Y===Q?">":" "} ${Y}: ${$[H]}`)}return Z.join(`
`)}var RY=new s0;function Qq(J){QJ._getMatrix(RY,QJ.workingColorSpace,J);let Q=`mat3( ${RY.elements.map(($)=>$.toFixed(4))} )`;switch(QJ.getTransfer(J)){case aZ:return[Q,"LinearTransferOETF"];case PJ:return[Q,"sRGBTransferOETF"];default:return y0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function LY(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),K=(J.getShaderInfoLog(Q)||"").trim();if(Z&&K==="")return"";let H=/ERROR: 0:(\d+)/.exec(K);if(H){let Y=parseInt(H[1]);return $.toUpperCase()+`

`+K+`

`+Jq(J.getShaderSource(Q),Y)}else return K}function $q(J,Q){let $=Qq(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var Zq={[KZ]:"Linear",[HZ]:"Reinhard",[YZ]:"Cineon",[V6]:"ACESFilmic",[UZ]:"AgX",[GZ]:"Neutral",[XZ]:"Custom"};function Wq(J,Q){let $=Zq[Q];if($===void 0)return y0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var O$=new w;function Kq(){QJ.getLuminanceCoefficients(O$);let J=O$.x.toFixed(4),Q=O$.y.toFixed(4),$=O$.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Hq(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(u6).join(`
`)}function Yq(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function Xq(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<Z;W++){let K=J.getActiveAttrib(Q,W),H=K.name,Y=1;if(K.type===J.FLOAT_MAT2)Y=2;if(K.type===J.FLOAT_MAT3)Y=3;if(K.type===J.FLOAT_MAT4)Y=4;$[H]={type:K.type,location:J.getAttribLocation(Q,H),locationSize:Y}}return $}function u6(J){return J!==""}function VY(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function kY(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var Uq=/^[ \t]*#include +<([\w\d./]+)>/gm;function fW(J){return J.replace(Uq,Nq)}var Gq=new Map;function Nq(J,Q){let $=e0[Q];if($===void 0){let Z=Gq.get(Q);if(Z!==void 0)$=e0[Z],y0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return fW($)}var Eq=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function DY(J){return J.replace(Eq,qq)}function qq(J,Q,$,Z){let W="";for(let K=parseInt(Q);K<parseInt($);K++)W+=Z.replace(/\[\s*i\s*\]/g,"[ "+K+" ]").replace(/UNROLLED_LOOP_INDEX/g,K);return W}function BY(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}var Fq={[R6]:"SHADOWMAP_TYPE_PCF",[j7]:"SHADOWMAP_TYPE_VSM"};function Oq(J){return Fq[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Rq={[v7]:"ENVMAP_TYPE_CUBE",[i8]:"ENVMAP_TYPE_CUBE",[k6]:"ENVMAP_TYPE_CUBE_UV"};function Lq(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return Rq[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var Vq={[i8]:"ENVMAP_MODE_REFRACTION"};function kq(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return Vq[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Dq={[CH]:"ENVMAP_BLENDING_MULTIPLY",[PH]:"ENVMAP_BLENDING_MIX",[IH]:"ENVMAP_BLENDING_ADD"};function Bq(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return Dq[J.combine]||"ENVMAP_BLENDING_NONE"}function Mq(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function zq(J,Q,$,Z){let W=J.getContext(),K=$.defines,H=$.vertexShader,Y=$.fragmentShader,X=Oq($),U=Lq($),N=kq($),E=Bq($),G=Mq($),q=Hq($),R=Yq(K),k=W.createProgram(),O,F,P=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(O=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R].filter(u6).join(`
`),O.length>0)O+=`
`;if(F=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R].filter(u6).join(`
`),F.length>0)F+=`
`}else O=[BY($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+N:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(u6).join(`
`),F=[BY($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+N:"",$.envMap?"#define "+E:"",G?"#define CUBEUV_TEXEL_WIDTH "+G.texelWidth:"",G?"#define CUBEUV_TEXEL_HEIGHT "+G.texelHeight:"",G?"#define CUBEUV_MAX_MIP "+G.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.retroreflection?"#define USE_RETROREFLECTION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==h9?"#define TONE_MAPPING":"",$.toneMapping!==h9?e0.tonemapping_pars_fragment:"",$.toneMapping!==h9?Wq("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",e0.colorspace_pars_fragment,$q("linearToOutputTexel",$.outputColorSpace),Kq(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(u6).join(`
`);if(H=fW(H),H=VY(H,$),H=kY(H,$),Y=fW(Y),Y=VY(Y,$),Y=kY(Y,$),H=DY(H),Y=DY(Y),$.isRawShaderMaterial!==!0)P=`#version 300 es
`,O=[q,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+O,F=["#define varying in",$.glslVersion===rZ?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===rZ?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+F;let B=P+O+H,L=P+F+Y,z=OY(W,W.VERTEX_SHADER,B),_=OY(W,W.FRAGMENT_SHADER,L);if(W.attachShader(k,z),W.attachShader(k,_),$.index0AttributeName!==void 0)W.bindAttribLocation(k,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)W.bindAttribLocation(k,0,"position");W.linkProgram(k);function A(v){if(J.debug.checkShaderErrors){let b=W.getProgramInfoLog(k)||"",o=W.getShaderInfoLog(z)||"",S=W.getShaderInfoLog(_)||"",m=b.trim(),r=o.trim(),d=S.trim(),X0=!0,n=!0;if(W.getProgramParameter(k,W.LINK_STATUS)===!1)if(X0=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,k,z,_);else{let t=LY(W,z,"vertex"),Z0=LY(W,_,"fragment");u0("WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(k,W.VALIDATE_STATUS)+`

Material Name: `+v.name+`
Material Type: `+v.type+`

Program Info Log: `+m+`
`+t+`
`+Z0)}else if(m!=="")y0("WebGLProgram: Program Info Log:",m);else if(r===""||d==="")n=!1;if(n)v.diagnostics={runnable:X0,programLog:m,vertexShader:{log:r,prefix:O},fragmentShader:{log:d,prefix:F}}}W.deleteShader(z),W.deleteShader(_),D=new c6(W,k),I=Xq(W,k)}let D;this.getUniforms=function(){if(D===void 0)A(this);return D};let I;this.getAttributes=function(){if(I===void 0)A(this);return I};let p=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(p===!1)p=W.getProgramParameter(k,tE);return p},this.destroy=function(){Z.releaseStatesOfProgram(this),W.deleteProgram(k),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=eE++,this.cacheKey=Q,this.usedTimes=1,this.program=k,this.vertexShader=z,this.fragmentShader=_,this}var Cq=0;class fY{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let Z=this._getShaderCacheForMaterial(J);if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;if(Z.has($)===!1)Z.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new hY(J),Q.set(J,$);return $}}class hY{constructor(J){this.id=Cq++,this.code=J,this.usedTimes=0}}function Pq(J){return J===t8||J===gQ||J===pQ}function Iq(J,Q,$,Z,W,K){let H=new cQ,Y=new fY,X=new Set,U=[],N=new Map,E=Z.logarithmicDepthBuffer,G=Z.precision,q={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){if(X.add(D),D===0)return"uv";return`uv${D}`}function k(D,I,p,v,b,o){let S=v.fog,m=b.geometry,r=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?v.environment:null,d=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap,X0=Q.get(D.envMap||r,d),n=!!X0&&X0.mapping===k6?X0.image.height:null,t=q[D.type];if(D.precision!==null){if(G=Z.getMaxPrecision(D.precision),G!==D.precision)y0("WebGLProgram.getParameters:",D.precision,"not supported, using",G,"instead.")}let Z0=m.morphAttributes.position||m.morphAttributes.normal||m.morphAttributes.color,l0=Z0!==void 0?Z0.length:0,_0=0;if(m.morphAttributes.position!==void 0)_0=1;if(m.morphAttributes.normal!==void 0)_0=2;if(m.morphAttributes.color!==void 0)_0=3;let VJ,a0,s,G0;if(t){let FJ=r9[t];VJ=FJ.vertexShader,a0=FJ.fragmentShader}else{VJ=D.vertexShader,a0=D.fragmentShader;let FJ=Y.getVertexShaderStage(D),UJ=Y.getFragmentShaderStage(D);Y.update(D,FJ,UJ),s=FJ.id,G0=UJ.id}let U0=J.getRenderTarget(),f0=J.state.buffers.depth.getReversed(),x0=b.isInstancedMesh===!0,h0=b.isBatchedMesh===!0,jJ=!!D.map,JJ=!!D.matcap,WJ=!!X0,NJ=!!D.aoMap,KJ=!!D.lightMap,mJ=!!D.bumpMap&&D.wireframe===!1,zJ=!!D.normalMap,oJ=!!D.displacementMap,hJ=!!D.emissiveMap,IJ=!!D.metalnessMap,j=!!D.roughnessMap,dJ=D.anisotropy>0,r0=D.clearcoat>0,AJ=D.dispersion>0,C=D.retroreflectivity>0,V=D.iridescence>0,y=D.sheen>0,l=D.transmission>0,$0=dJ&&!!D.anisotropyMap,N0=r0&&!!D.clearcoatMap,R0=r0&&!!D.clearcoatNormalMap,c=r0&&!!D.clearcoatRoughnessMap,a=V&&!!D.iridescenceMap,k0=V&&!!D.iridescenceThicknessMap,S0=y&&!!D.sheenColorMap,L0=y&&!!D.sheenRoughnessMap,W0=!!D.specularMap,j0=!!D.specularColorMap,g0=!!D.specularIntensityMap,YJ=l&&!!D.transmissionMap,f=l&&!!D.thicknessMap,q0=!!D.gradientMap,i=!!D.alphaMap,F0=D.alphaTest>0,M0=!!D.alphaHash,J0=!!D.extensions,O0=h9;if(D.toneMapped){if(U0===null||U0.isXRRenderTarget===!0)O0=J.toneMapping}let m0={shaderID:t,shaderType:D.type,shaderName:D.name,vertexShader:VJ,fragmentShader:a0,defines:D.defines,customVertexShaderID:s,customFragmentShaderID:G0,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:G,batching:h0,batchingColor:h0&&b._colorsTexture!==null,instancing:x0,instancingColor:x0&&b.instanceColor!==null,instancingMorph:x0&&b.morphTexture!==null,outputColorSpace:U0===null?J.outputColorSpace:U0.isXRRenderTarget===!0?U0.texture.colorSpace:QJ.workingColorSpace,alphaToCoverage:!!D.alphaToCoverage,map:jJ,matcap:JJ,envMap:WJ,envMapMode:WJ&&X0.mapping,envMapCubeUVHeight:n,aoMap:NJ,lightMap:KJ,bumpMap:mJ,normalMap:zJ,displacementMap:oJ,emissiveMap:hJ,normalMapObjectSpace:zJ&&D.normalMapType===vH,normalMapTangentSpace:zJ&&D.normalMapType===oZ,packedNormalMap:zJ&&D.normalMapType===oZ&&Pq(D.normalMap.format),metalnessMap:IJ,roughnessMap:j,anisotropy:dJ,anisotropyMap:$0,clearcoat:r0,clearcoatMap:N0,clearcoatNormalMap:R0,clearcoatRoughnessMap:c,dispersion:AJ,retroreflection:C,iridescence:V,iridescenceMap:a,iridescenceThicknessMap:k0,sheen:y,sheenColorMap:S0,sheenRoughnessMap:L0,specularMap:W0,specularColorMap:j0,specularIntensityMap:g0,transmission:l,transmissionMap:YJ,thicknessMap:f,gradientMap:q0,opaque:D.transparent===!1&&D.blending===L6&&D.alphaToCoverage===!1,alphaMap:i,alphaTest:F0,alphaHash:M0,combine:D.combine,mapUv:jJ&&R(D.map.channel),aoMapUv:NJ&&R(D.aoMap.channel),lightMapUv:KJ&&R(D.lightMap.channel),bumpMapUv:mJ&&R(D.bumpMap.channel),normalMapUv:zJ&&R(D.normalMap.channel),displacementMapUv:oJ&&R(D.displacementMap.channel),emissiveMapUv:hJ&&R(D.emissiveMap.channel),metalnessMapUv:IJ&&R(D.metalnessMap.channel),roughnessMapUv:j&&R(D.roughnessMap.channel),anisotropyMapUv:$0&&R(D.anisotropyMap.channel),clearcoatMapUv:N0&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:R0&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:c&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:a&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:k0&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:S0&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:L0&&R(D.sheenRoughnessMap.channel),specularMapUv:W0&&R(D.specularMap.channel),specularColorMapUv:j0&&R(D.specularColorMap.channel),specularIntensityMapUv:g0&&R(D.specularIntensityMap.channel),transmissionMapUv:YJ&&R(D.transmissionMap.channel),thicknessMapUv:f&&R(D.thicknessMap.channel),alphaMapUv:i&&R(D.alphaMap.channel),vertexTangents:!!m.attributes.tangent&&(zJ||dJ),vertexNormals:!!m.attributes.normal,vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!m.attributes.color&&m.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!m.attributes.uv&&(jJ||i),fog:!!S,useFog:D.fog===!0,fogExp2:!!S&&S.isFogExp2,flatShading:D.wireframe===!1&&(D.flatShading===!0||m.attributes.normal===void 0&&zJ===!1&&(D.isMeshLambertMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isMeshPhysicalMaterial)),sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:f0,skinning:b.isSkinnedMesh===!0,hasPositionAttribute:m.attributes.position!==void 0,morphTargets:m.morphAttributes.position!==void 0,morphNormals:m.morphAttributes.normal!==void 0,morphColors:m.morphAttributes.color!==void 0,morphTargetsCount:l0,morphTextureStride:_0,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:o.length,numClippingPlanes:K.numPlanes,numClipIntersection:K.numIntersection,dithering:D.dithering,shadowMapEnabled:J.shadowMap.enabled&&p.length>0,shadowMapType:J.shadowMap.type,toneMapping:O0,decodeVideoTexture:jJ&&D.map.isVideoTexture===!0&&QJ.getTransfer(D.map.colorSpace)===PJ,decodeVideoTextureEmissive:hJ&&D.emissiveMap.isVideoTexture===!0&&QJ.getTransfer(D.emissiveMap.colorSpace)===PJ,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Y9,flipSided:D.side===$9,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:J0&&D.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(J0&&D.extensions.multiDraw===!0||h0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return m0.vertexUv1s=X.has(1),m0.vertexUv2s=X.has(2),m0.vertexUv3s=X.has(3),X.clear(),m0}function O(D){let I=[];if(D.shaderID)I.push(D.shaderID);else I.push(D.customVertexShaderID),I.push(D.customFragmentShaderID);if(D.defines!==void 0)for(let p in D.defines)I.push(p),I.push(D.defines[p]);if(D.isRawShaderMaterial===!1)F(I,D),P(I,D),I.push(J.outputColorSpace);return I.push(D.customProgramCacheKey),I.join()}function F(D,I){D.push(I.precision),D.push(I.outputColorSpace),D.push(I.envMapMode),D.push(I.envMapCubeUVHeight),D.push(I.mapUv),D.push(I.alphaMapUv),D.push(I.lightMapUv),D.push(I.aoMapUv),D.push(I.bumpMapUv),D.push(I.normalMapUv),D.push(I.displacementMapUv),D.push(I.emissiveMapUv),D.push(I.metalnessMapUv),D.push(I.roughnessMapUv),D.push(I.anisotropyMapUv),D.push(I.clearcoatMapUv),D.push(I.clearcoatNormalMapUv),D.push(I.clearcoatRoughnessMapUv),D.push(I.iridescenceMapUv),D.push(I.iridescenceThicknessMapUv),D.push(I.sheenColorMapUv),D.push(I.sheenRoughnessMapUv),D.push(I.specularMapUv),D.push(I.specularColorMapUv),D.push(I.specularIntensityMapUv),D.push(I.transmissionMapUv),D.push(I.thicknessMapUv),D.push(I.combine),D.push(I.fogExp2),D.push(I.sizeAttenuation),D.push(I.morphTargetsCount),D.push(I.morphAttributeCount),D.push(I.numSunLights),D.push(I.numDirLights),D.push(I.numPointLights),D.push(I.numSpotLights),D.push(I.numSpotLightMaps),D.push(I.numHemiLights),D.push(I.numRectAreaLights),D.push(I.numSunLightShadows),D.push(I.numDirLightShadows),D.push(I.numPointLightShadows),D.push(I.numSpotLightShadows),D.push(I.numSpotLightShadowsWithMaps),D.push(I.numLightProbes),D.push(I.shadowMapType),D.push(I.toneMapping),D.push(I.numClippingPlanes),D.push(I.numClipIntersection),D.push(I.depthPacking)}function P(D,I){if(H.disableAll(),I.instancing)H.enable(0);if(I.instancingColor)H.enable(1);if(I.instancingMorph)H.enable(2);if(I.matcap)H.enable(3);if(I.envMap)H.enable(4);if(I.normalMapObjectSpace)H.enable(5);if(I.normalMapTangentSpace)H.enable(6);if(I.clearcoat)H.enable(7);if(I.iridescence)H.enable(8);if(I.alphaTest)H.enable(9);if(I.vertexColors)H.enable(10);if(I.vertexAlphas)H.enable(11);if(I.vertexUv1s)H.enable(12);if(I.vertexUv2s)H.enable(13);if(I.vertexUv3s)H.enable(14);if(I.vertexTangents)H.enable(15);if(I.anisotropy)H.enable(16);if(I.alphaHash)H.enable(17);if(I.batching)H.enable(18);if(I.dispersion)H.enable(19);if(I.retroreflection)H.enable(24);if(I.batchingColor)H.enable(20);if(I.gradientMap)H.enable(21);if(I.packedNormalMap)H.enable(22);if(I.vertexNormals)H.enable(23);if(D.push(H.mask),H.disableAll(),I.fog)H.enable(0);if(I.useFog)H.enable(1);if(I.flatShading)H.enable(2);if(I.logarithmicDepthBuffer)H.enable(3);if(I.reversedDepthBuffer)H.enable(4);if(I.skinning)H.enable(5);if(I.morphTargets)H.enable(6);if(I.morphNormals)H.enable(7);if(I.morphColors)H.enable(8);if(I.premultipliedAlpha)H.enable(9);if(I.shadowMapEnabled)H.enable(10);if(I.doubleSided)H.enable(11);if(I.flipSided)H.enable(12);if(I.useDepthPacking)H.enable(13);if(I.dithering)H.enable(14);if(I.transmission)H.enable(15);if(I.sheen)H.enable(16);if(I.opaque)H.enable(17);if(I.pointsUvs)H.enable(18);if(I.decodeVideoTexture)H.enable(19);if(I.decodeVideoTextureEmissive)H.enable(20);if(I.alphaToCoverage)H.enable(21);if(I.numLightProbeGrids>0)H.enable(22);if(I.hasPositionAttribute)H.enable(23);D.push(H.mask)}function B(D){let I=q[D.type],p;if(I){let v=r9[I];p=rH.clone(v.uniforms)}else p=D.uniforms;return p}function L(D,I){let p=N.get(I);if(p!==void 0)++p.usedTimes;else p=new zq(J,I,D,W),U.push(p),N.set(I,p);return p}function z(D){if(--D.usedTimes===0){let I=U.indexOf(D);U[I]=U[U.length-1],U.pop(),N.delete(D.cacheKey),D.destroy()}}function _(D){Y.remove(D)}function A(){Y.dispose()}return{getParameters:k,getProgramCacheKey:O,getUniforms:B,acquireProgram:L,releaseProgram:z,releaseShaderCache:_,programs:U,dispose:A}}function _q(){let J=new WeakMap;function Q(H){return J.has(H)}function $(H){let Y=J.get(H);if(Y===void 0)Y={},J.set(H,Y);return Y}function Z(H){J.delete(H)}function W(H,Y,X){J.get(H)[Y]=X}function K(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:W,dispose:K}}function Aq(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function MY(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function zY(){let J=[],Q=0,$=[],Z=[],W=[];function K(){Q=0,$.length=0,Z.length=0,W.length=0}function H(G){let q=0;if(G.isInstancedMesh)q+=2;if(G.isSkinnedMesh)q+=1;return q}function Y(G,q,R,k,O,F){let P=J[Q];if(P===void 0)P={id:G.id,object:G,geometry:q,material:R,materialVariant:H(G),groupOrder:k,renderOrder:G.renderOrder,z:O,group:F},J[Q]=P;else P.id=G.id,P.object=G,P.geometry=q,P.material=R,P.materialVariant=H(G),P.groupOrder=k,P.renderOrder=G.renderOrder,P.z=O,P.group=F;return Q++,P}function X(G,q,R,k,O,F,P){if(P.reversedDepth===!0)O=-O;let B=Y(G,q,R,k,O,F);if(R.transmission>0)Z.push(B);else if(R.transparent===!0)W.push(B);else $.push(B)}function U(G,q,R,k,O,F){let P=Y(G,q,R,k,O,F);if(R.transmission>0)Z.unshift(P);else if(R.transparent===!0)W.unshift(P);else $.unshift(P)}function N(G,q){if($.length>1)$.sort(G||Aq);if(Z.length>1)Z.sort(q||MY);if(W.length>1)W.sort(q||MY)}function E(){for(let G=Q,q=J.length;G<q;G++){let R=J[G];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:$,transmissive:Z,transparent:W,init:K,push:X,unshift:U,finish:E,sort:N}}function wq(){let J=new WeakMap;function Q(Z,W){let K=J.get(Z),H;if(K===void 0)H=new zY,J.set(Z,[H]);else if(W>=K.length)H=new zY,K.push(H);else H=K[W];return H}function $(){J=new WeakMap}return{get:Q,dispose:$}}function Tq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={direction:new w,color:new b0};break;case"SpotLight":$={position:new w,direction:new w,color:new b0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new w,color:new b0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new w,skyColor:new b0,groundColor:new b0};break;case"RectAreaLight":$={color:new b0,position:new w,halfWidth:new w,halfHeight:new w};break}return J[Q.id]=$,$}}}function Sq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var jq=0;function yq(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function vq(J){let Q=new Tq,$=Sq(),Z={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new w);let W=new w,K=new n0,H=new n0;function Y(U){let N=0,E=0,G=0;for(let b=0;b<9;b++)Z.probe[b].set(0,0,0);let q=0,R=0,k=0,O=0,F=0,P=0,B=0,L=0,z=0,_=0,A=0,D=0,I=0,p=0;U.sort(yq);for(let b=0,o=U.length;b<o;b++){let S=U[b],m=S.color,r=S.intensity,d=S.distance,X0=null;if(S.shadow&&S.shadow.map)if(S.shadow.map.texture.format===t8)X0=S.shadow.map.texture;else X0=S.shadow.map.depthTexture||S.shadow.map.texture;if(S.isAmbientLight)N+=m.r*r,E+=m.g*r,G+=m.b*r;else if(S.isLightProbe){for(let n=0;n<9;n++)Z.probe[n].addScaledVector(S.sh.coefficients[n],r);p++}else if(S.isSunLight){let n=Q.get(S);if(n.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let t=S.shadow,Z0=$.get(S);Z0.shadowIntensity=t.intensity,Z0.shadowBias=t.bias,Z0.shadowNormalBias=t.normalBias,Z0.shadowRadius=t.radius,Z0.shadowMapSize.copy(t.mapSize).multiply(t.getFrameExtents()),Z.sunShadow[R]=Z0,Z.sunShadowMap[R]=X0;let l0=t.getViewportCount();for(let _0=0;_0<l0;_0++)Z.sunShadowMatrix[k+_0]=t.getMatrix(_0),Z.sunShadowCascade[k+_0]=t._cascadeData[_0];k+=l0,R++}Z.sun[q]=n,q++}else if(S.isDirectionalLight){let n=Q.get(S);if(n.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let t=S.shadow,Z0=$.get(S);Z0.shadowIntensity=t.intensity,Z0.shadowBias=t.bias,Z0.shadowNormalBias=t.normalBias,Z0.shadowRadius=t.radius,Z0.shadowMapSize=t.mapSize,Z.directionalShadow[O]=Z0,Z.directionalShadowMap[O]=X0,Z.directionalShadowMatrix[O]=S.shadow.matrix,z++}Z.directional[O]=n,O++}else if(S.isSpotLight){let n=Q.get(S);n.position.setFromMatrixPosition(S.matrixWorld),n.color.copy(m).multiplyScalar(r),n.distance=d,n.coneCos=Math.cos(S.angle),n.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),n.decay=S.decay,Z.spot[P]=n;let t=S.shadow;if(S.map){if(Z.spotLightMap[D]=S.map,D++,t.updateMatrices(S),S.castShadow)I++}if(Z.spotLightMatrix[P]=t.matrix,S.castShadow){let Z0=$.get(S);Z0.shadowIntensity=t.intensity,Z0.shadowBias=t.bias,Z0.shadowNormalBias=t.normalBias,Z0.shadowRadius=t.radius,Z0.shadowMapSize=t.mapSize,Z.spotShadow[P]=Z0,Z.spotShadowMap[P]=X0,A++}P++}else if(S.isRectAreaLight){let n=Q.get(S);n.color.copy(m).multiplyScalar(r),n.halfWidth.set(S.width*0.5,0,0),n.halfHeight.set(0,S.height*0.5,0),Z.rectArea[B]=n,B++}else if(S.isPointLight){let n=Q.get(S);if(n.color.copy(S.color).multiplyScalar(S.intensity),n.distance=S.distance,n.decay=S.decay,S.castShadow){let t=S.shadow,Z0=$.get(S);Z0.shadowIntensity=t.intensity,Z0.shadowBias=t.bias,Z0.shadowNormalBias=t.normalBias,Z0.shadowRadius=t.radius,Z0.shadowMapSize=t.mapSize,Z0.shadowCameraNear=t.camera.near,Z0.shadowCameraFar=t.camera.far,Z.pointShadow[F]=Z0,Z.pointShadowMap[F]=X0,Z.pointShadowMatrix[F]=S.shadow.matrix,_++}Z.point[F]=n,F++}else if(S.isHemisphereLight){let n=Q.get(S);n.skyColor.copy(S.color).multiplyScalar(r),n.groundColor.copy(S.groundColor).multiplyScalar(r),Z.hemi[L]=n,L++}}if(B>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=V0.LTC_FLOAT_1,Z.rectAreaLTC2=V0.LTC_FLOAT_2;else Z.rectAreaLTC1=V0.LTC_HALF_1,Z.rectAreaLTC2=V0.LTC_HALF_2;Z.ambient[0]=N,Z.ambient[1]=E,Z.ambient[2]=G;let v=Z.hash;if(v.sunLength!==q||v.directionalLength!==O||v.pointLength!==F||v.spotLength!==P||v.rectAreaLength!==B||v.hemiLength!==L||v.numSunShadows!==R||v.numDirectionalShadows!==z||v.numPointShadows!==_||v.numSpotShadows!==A||v.numSpotMaps!==D||v.numLightProbes!==p)Z.sun.length=q,Z.directional.length=O,Z.spot.length=P,Z.rectArea.length=B,Z.point.length=F,Z.hemi.length=L,Z.sunShadow.length=R,Z.sunShadowMap.length=R,Z.sunShadowMatrix.length=k,Z.sunShadowCascade.length=k,Z.directionalShadow.length=z,Z.directionalShadowMap.length=z,Z.directionalShadowMatrix.length=z,Z.pointShadow.length=_,Z.pointShadowMap.length=_,Z.pointShadowMatrix.length=_,Z.spotShadow.length=A,Z.spotShadowMap.length=A,Z.spotLightMatrix.length=A+D-I,Z.spotLightMap.length=D,Z.numSpotLightShadowsWithMaps=I,Z.numLightProbes=p,v.sunLength=q,v.directionalLength=O,v.pointLength=F,v.spotLength=P,v.rectAreaLength=B,v.hemiLength=L,v.numSunShadows=R,v.numDirectionalShadows=z,v.numPointShadows=_,v.numSpotShadows=A,v.numSpotMaps=D,v.numLightProbes=p,Z.version=jq++}function X(U,N){let E=0,G=0,q=0,R=0,k=0,O=0,F=N.matrixWorldInverse;for(let P=0,B=U.length;P<B;P++){let L=U[P];if(L.isSunLight){let z=Z.sun[E];z.direction.setFromMatrixPosition(L.matrixWorld),z.direction.transformDirection(F),E++}else if(L.isDirectionalLight){let z=Z.directional[G];z.direction.setFromMatrixPosition(L.matrixWorld),W.setFromMatrixPosition(L.target.matrixWorld),z.direction.sub(W),z.direction.transformDirection(F),G++}else if(L.isSpotLight){let z=Z.spot[R];z.position.setFromMatrixPosition(L.matrixWorld),z.position.applyMatrix4(F),z.direction.setFromMatrixPosition(L.matrixWorld),W.setFromMatrixPosition(L.target.matrixWorld),z.direction.sub(W),z.direction.transformDirection(F),R++}else if(L.isRectAreaLight){let z=Z.rectArea[k];z.position.setFromMatrixPosition(L.matrixWorld),z.position.applyMatrix4(F),H.identity(),K.copy(L.matrixWorld),K.premultiply(F),H.extractRotation(K),z.halfWidth.set(L.width*0.5,0,0),z.halfHeight.set(0,L.height*0.5,0),z.halfWidth.applyMatrix4(H),z.halfHeight.applyMatrix4(H),k++}else if(L.isPointLight){let z=Z.point[q];z.position.setFromMatrixPosition(L.matrixWorld),z.position.applyMatrix4(F),q++}else if(L.isHemisphereLight){let z=Z.hemi[O];z.direction.setFromMatrixPosition(L.matrixWorld),z.direction.transformDirection(F),O++}}}return{setup:Y,setupView:X,state:Z}}function CY(J){let Q=new vq(J),$=[],Z=[],W=[];function K(G){E.camera=G,$.length=0,Z.length=0,W.length=0}function H(G){$.push(G)}function Y(G){Z.push(G)}function X(G){W.push(G)}function U(){Q.setup($)}function N(G){Q.setupView($,G)}let E={lightsArray:$,shadowsArray:Z,lightProbeGridArray:W,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:K,state:E,setupLights:U,setupLightsView:N,pushLight:H,pushShadow:Y,pushLightProbeGrid:X}}function fq(J){let Q=new WeakMap;function $(W,K=0){let H=Q.get(W),Y;if(H===void 0)Y=new CY(J),Q.set(W,[Y]);else if(K>=H.length)Y=new CY(J),H.push(Y);else Y=H[K];return Y}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var hq=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bq=`uniform sampler2D shadow_pass;
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
}`,xq=[new w(1,0,0),new w(-1,0,0),new w(0,1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1)],gq=[new w(0,-1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1),new w(0,-1,0),new w(0,-1,0)],PY=new n0,d6=new w,yW=new w;function pq(J,Q,$){let Z=new w6,W=new H0,K=new H0,H=new DJ,Y=new EW,X=new qW,U={},N=$.maxTextureSize,E={[P8]:$9,[$9]:P8,[Y9]:Y9},G=new w9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new H0},radius:{value:4}},vertexShader:hq,fragmentShader:bq}),q=G.clone();q.defines.HORIZONTAL_PASS=1;let R=new SJ;R.setAttribute("position",new cJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let k=new p0(R,G),O=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=R6;let F=this.type;this.render=function(_,A,D){if(O.enabled===!1)return;if(O.autoUpdate===!1&&O.needsUpdate===!1)return;if(_.length===0)return;if(this.type===TQ)y0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=R6;let I=J.getRenderTarget(),p=J.getActiveCubeFace(),v=J.getActiveMipmapLevel(),b=J.state;if(b.setBlending(c9),b.buffers.depth.getReversed()===!0)b.buffers.color.setClear(0,0,0,0);else b.buffers.color.setClear(1,1,1,1);b.buffers.depth.setTest(!0),b.setScissorTest(!1);let o=F!==this.type;if(o)A.traverse(function(S){if(S.material)if(Array.isArray(S.material))S.material.forEach((m)=>m.needsUpdate=!0);else S.material.needsUpdate=!0});for(let S=0,m=_.length;S<m;S++){let r=_[S],d=r.shadow;if(d===void 0){y0("WebGLShadowMap:",r,"has no shadow.");continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;W.copy(d.mapSize);let X0=d.getFrameExtents();if(W.multiply(X0),K.copy(d.mapSize),W.x>N||W.y>N){if(W.x>N)K.x=Math.floor(N/X0.x),W.x=K.x*X0.x,d.mapSize.x=K.x;if(W.y>N)K.y=Math.floor(N/X0.y),W.y=K.y*X0.y,d.mapSize.y=K.y}let n=J.state.buffers.depth.getReversed();if(d.camera._reversedDepth=n,d.map===null||o===!0){if(d.map!==null){if(d.map.depthTexture!==null)d.map.depthTexture.dispose(),d.map.depthTexture=null;d.map.dispose()}if(this.type===j7){if(r.isPointLight){y0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}d.map=new O9(W.x,W.y,{format:t8,type:s9,minFilter:rJ,magFilter:rJ,generateMipmaps:!1}),d.map.texture.name=r.name+".shadowMap",d.map.depthTexture=new J7(W.x,W.y,H8),d.map.depthTexture.name=r.name+".shadowMapDepth",d.map.depthTexture.format=a8,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=b9,d.map.depthTexture.magFilter=b9}else{if(r.isPointLight)d.map=new hW(W.x),d.map.depthTexture=new ZW(W.x,_8);else d.map=new O9(W.x,W.y),d.map.depthTexture=new J7(W.x,W.y,_8);if(d.map.depthTexture.name=r.name+".shadowMap",d.map.depthTexture.format=a8,this.type===R6)d.map.depthTexture.compareFunction=n?dQ:mQ,d.map.depthTexture.minFilter=rJ,d.map.depthTexture.magFilter=rJ;else d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=b9,d.map.depthTexture.magFilter=b9}d.camera.updateProjectionMatrix()}if(d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==W.x||d.map.height!==W.y))d.map.setSize(W.x,W.y);let t=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();if(r.isPointLight!==!0)d.updateMatrices(r,D);for(let Z0=0;Z0<t;Z0++){let l0=d.getCamera(Z0);if(r.isPointLight){let{camera:_0,matrix:VJ}=d,a0=r.distance||_0.far;if(a0!==_0.far)_0.far=a0,_0.updateProjectionMatrix();d6.setFromMatrixPosition(r.matrixWorld),_0.position.copy(d6),yW.copy(_0.position),yW.add(xq[Z0]),_0.up.copy(gq[Z0]),_0.lookAt(yW),_0.updateMatrixWorld(),VJ.makeTranslation(-d6.x,-d6.y,-d6.z),PY.multiplyMatrices(_0.projectionMatrix,_0.matrixWorldInverse),d._frustum.setFromProjectionMatrix(PY,_0.coordinateSystem,_0.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)J.setRenderTarget(d.map,Z0),J.clear();else{if(Z0===0)J.setRenderTarget(d.map),J.clear();let _0=d.getViewport(Z0);H.set(K.x*_0.x,K.y*_0.y,K.x*_0.z,K.y*_0.w),b.viewport(H)}Z=d.getFrustum(Z0),L(A,D,l0,r,this.type)}if(d.isPointLightShadow!==!0&&this.type===j7)P(d,D);d.needsUpdate=!1}F=this.type,O.needsUpdate=!1,J.setRenderTarget(I,p,v)};function P(_,A){let D=Q.update(k);if(G.defines.VSM_SAMPLES!==_.blurSamples)G.defines.VSM_SAMPLES=_.blurSamples,q.defines.VSM_SAMPLES=_.blurSamples,G.needsUpdate=!0,q.needsUpdate=!0;if(_.mapPass===null)_.mapPass=new O9(W.x,W.y,{format:t8,type:s9});else if(_.mapPass.width!==_.map.width||_.mapPass.height!==_.map.height)_.mapPass.setSize(_.map.width,_.map.height);G.uniforms.shadow_pass.value=_.map.depthTexture,G.uniforms.resolution.value.set(_.map.width,_.map.height),G.uniforms.radius.value=_.radius,J.setRenderTarget(_.mapPass),J.clear(),J.renderBufferDirect(A,null,D,G,k,null),q.uniforms.shadow_pass.value=_.mapPass.texture,q.uniforms.resolution.value.set(_.map.width,_.map.height),q.uniforms.radius.value=_.radius,J.setRenderTarget(_.map),J.clear(),J.renderBufferDirect(A,null,D,q,k,null)}function B(_,A,D,I){let p=null,v=D.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(v!==void 0)p=v;else if(p=D.isPointLight===!0?X:Y,J.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let b=p.uuid,o=A.uuid,S=U[b];if(S===void 0)S={},U[b]=S;let m=S[o];if(m===void 0)m=p.clone(),S[o]=m,A.addEventListener("dispose",z);p=m}if(p.visible=A.visible,p.wireframe=A.wireframe,I===j7)p.side=A.shadowSide!==null?A.shadowSide:A.side;else p.side=A.shadowSide!==null?A.shadowSide:E[A.side];if(p.alphaMap=A.alphaMap,p.alphaTest=A.alphaToCoverage===!0?0.5:A.alphaTest,p.map=A.map,p.clipShadows=A.clipShadows,p.clippingPlanes=A.clippingPlanes,p.clipIntersection=A.clipIntersection,p.displacementMap=A.displacementMap,p.displacementScale=A.displacementScale,p.displacementBias=A.displacementBias,p.wireframeLinewidth=A.wireframeLinewidth,p.linewidth=A.linewidth,D.isPointLight===!0&&p.isMeshDistanceMaterial===!0){let b=J.properties.get(p);b.light=D}return p}function L(_,A,D,I,p){if(_.visible===!1)return;if(_.layers.test(A.layers)&&(_.isMesh||_.isLine||_.isPoints)){if((_.castShadow||_.receiveShadow&&p===j7)&&(!_.frustumCulled||_.intersectsFrustum(Z))){_.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,_.matrixWorld);let o=Q.update(_),S=_.material;if(Array.isArray(S)){let m=o.groups;for(let r=0,d=m.length;r<d;r++){let X0=m[r],n=S[X0.materialIndex];if(n&&n.visible){let t=B(_,n,I,p);_.onBeforeShadow(J,_,A,D,o,t,X0),J.renderBufferDirect(D,null,o,t,_,X0),_.onAfterShadow(J,_,A,D,o,t,X0)}}}else if(S.visible){let m=B(_,S,I,p);_.onBeforeShadow(J,_,A,D,o,m,null),J.renderBufferDirect(D,null,o,m,_,null),_.onAfterShadow(J,_,A,D,o,m,null)}}}let b=_.children;for(let o=0,S=b.length;o<S;o++)L(b[o],A,D,I,p)}function z(_){_.target.removeEventListener("dispose",z);for(let D in U){let I=U[D],p=_.target.uuid;if(p in I)I[p].dispose(),delete I[p]}}}function lq(J,Q){function $(){let f=!1,q0=new DJ,i=null,F0=new DJ(0,0,0,0);return{setMask:function(M0){if(i!==M0&&!f)J.colorMask(M0,M0,M0,M0),i=M0},setLocked:function(M0){f=M0},setClear:function(M0,J0,O0,m0,FJ){if(FJ===!0)M0*=m0,J0*=m0,O0*=m0;if(q0.set(M0,J0,O0,m0),F0.equals(q0)===!1)J.clearColor(M0,J0,O0,m0),F0.copy(q0)},reset:function(){f=!1,i=null,F0.set(-1,0,0,0)}}}function Z(){let f=!1,q0=!1,i=null,F0=null,M0=null;return{setReversed:function(J0){if(q0!==J0){let O0=Q.get("EXT_clip_control");if(J0)O0.clipControlEXT(O0.LOWER_LEFT_EXT,O0.ZERO_TO_ONE_EXT);else O0.clipControlEXT(O0.LOWER_LEFT_EXT,O0.NEGATIVE_ONE_TO_ONE_EXT);q0=J0;let m0=M0;M0=null,this.setClear(m0)}},getReversed:function(){return q0},setTest:function(J0){if(J0)U0(J.DEPTH_TEST);else f0(J.DEPTH_TEST)},setMask:function(J0){if(i!==J0&&!f)J.depthMask(J0),i=J0},setFunc:function(J0){if(q0)J0=uH[J0];if(F0!==J0){switch(J0){case LH:J.depthFunc(J.NEVER);break;case VH:J.depthFunc(J.ALWAYS);break;case kH:J.depthFunc(J.LESS);break;case WZ:J.depthFunc(J.LEQUAL);break;case DH:J.depthFunc(J.EQUAL);break;case BH:J.depthFunc(J.GEQUAL);break;case MH:J.depthFunc(J.GREATER);break;case zH:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}F0=J0}},setLocked:function(J0){f=J0},setClear:function(J0){if(M0!==J0){if(M0=J0,q0)J0=1-J0;J.clearDepth(J0)}},reset:function(){f=!1,i=null,F0=null,M0=null,q0=!1}}}function W(){let f=!1,q0=null,i=null,F0=null,M0=null,J0=null,O0=null,m0=null,FJ=null;return{setTest:function(UJ){if(!f)if(UJ)U0(J.STENCIL_TEST);else f0(J.STENCIL_TEST)},setMask:function(UJ){if(q0!==UJ&&!f)J.stencilMask(UJ),q0=UJ},setFunc:function(UJ,N9,k9){if(i!==UJ||F0!==N9||M0!==k9)J.stencilFunc(UJ,N9,k9),i=UJ,F0=N9,M0=k9},setOp:function(UJ,N9,k9){if(J0!==UJ||O0!==N9||m0!==k9)J.stencilOp(UJ,N9,k9),J0=UJ,O0=N9,m0=k9},setLocked:function(UJ){f=UJ},setClear:function(UJ){if(FJ!==UJ)J.clearStencil(UJ),FJ=UJ},reset:function(){f=!1,q0=null,i=null,F0=null,M0=null,J0=null,O0=null,m0=null,FJ=null}}}let K=new $,H=new Z,Y=new W,X=new WeakMap,U=new WeakMap,N={},E={},G={},q=new WeakMap,R=[],k=null,O=!1,F=null,P=null,B=null,L=null,z=null,_=null,A=null,D=new b0(0,0,0),I=0,p=!1,v=null,b=null,o=null,S=null,m=null,r=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),d=!1,X0=0,n=J.getParameter(J.VERSION);if(n.indexOf("WebGL")!==-1)X0=parseFloat(/^WebGL (\d)/.exec(n)[1]),d=X0>=1;else if(n.indexOf("OpenGL ES")!==-1)X0=parseFloat(/^OpenGL ES (\d)/.exec(n)[1]),d=X0>=2;let t=null,Z0={},l0=J.getParameter(J.SCISSOR_BOX),_0=J.getParameter(J.VIEWPORT),VJ=new DJ().fromArray(l0),a0=new DJ().fromArray(_0);function s(f,q0,i,F0){let M0=new Uint8Array(4),J0=J.createTexture();J.bindTexture(f,J0),J.texParameteri(f,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(f,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let O0=0;O0<i;O0++)if(f===J.TEXTURE_3D||f===J.TEXTURE_2D_ARRAY)J.texImage3D(q0,0,J.RGBA,1,1,F0,0,J.RGBA,J.UNSIGNED_BYTE,M0);else J.texImage2D(q0+O0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,M0);return J0}let G0={};G0[J.TEXTURE_2D]=s(J.TEXTURE_2D,J.TEXTURE_2D,1),G0[J.TEXTURE_CUBE_MAP]=s(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),G0[J.TEXTURE_2D_ARRAY]=s(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),G0[J.TEXTURE_3D]=s(J.TEXTURE_3D,J.TEXTURE_3D,1,1),K.setClear(0,0,0,1),H.setClear(1),Y.setClear(0),U0(J.DEPTH_TEST),H.setFunc(WZ),mJ(!1),zJ(JZ),U0(J.CULL_FACE),NJ(c9);function U0(f){if(N[f]!==!0)J.enable(f),N[f]=!0}function f0(f){if(N[f]!==!1)J.disable(f),N[f]=!1}function x0(f,q0){if(G[f]!==q0){if(J.bindFramebuffer(f,q0),G[f]=q0,f===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=q0;if(f===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=q0;return!0}return!1}function h0(f,q0){let i=R,F0=!1;if(f){if(i=q.get(q0),i===void 0)i=[],q.set(q0,i);let M0=f.textures;if(i.length!==M0.length||i[0]!==J.COLOR_ATTACHMENT0){for(let J0=0,O0=M0.length;J0<O0;J0++)i[J0]=J.COLOR_ATTACHMENT0+J0;i.length=M0.length,F0=!0}}else if(i[0]!==J.BACK)i[0]=J.BACK,F0=!0;if(F0)J.drawBuffers(i)}function jJ(f){if(k!==f)return J.useProgram(f),k=f,!0;return!1}let JJ={[y7]:J.FUNC_ADD,[tK]:J.FUNC_SUBTRACT,[eK]:J.FUNC_REVERSE_SUBTRACT};JJ[JH]=J.MIN,JJ[QH]=J.MAX;let WJ={[$H]:J.ZERO,[ZH]:J.ONE,[WH]:J.SRC_COLOR,[HH]:J.SRC_ALPHA,[EH]:J.SRC_ALPHA_SATURATE,[GH]:J.DST_COLOR,[XH]:J.DST_ALPHA,[KH]:J.ONE_MINUS_SRC_COLOR,[YH]:J.ONE_MINUS_SRC_ALPHA,[NH]:J.ONE_MINUS_DST_COLOR,[UH]:J.ONE_MINUS_DST_ALPHA,[qH]:J.CONSTANT_COLOR,[FH]:J.ONE_MINUS_CONSTANT_COLOR,[OH]:J.CONSTANT_ALPHA,[RH]:J.ONE_MINUS_CONSTANT_ALPHA};function NJ(f,q0,i,F0,M0,J0,O0,m0,FJ,UJ){if(f===c9){if(O===!0)f0(J.BLEND),O=!1;return}if(O===!1)U0(J.BLEND),O=!0;if(f!==rK){if(f!==F||UJ!==p){if(P!==y7||z!==y7)J.blendEquation(J.FUNC_ADD),P=y7,z=y7;if(UJ)switch(f){case L6:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case QZ:J.blendFunc(J.ONE,J.ONE);break;case $Z:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case ZZ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:u0("WebGLState: Invalid blending: ",f);break}else switch(f){case L6:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case QZ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case $Z:u0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ZZ:u0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:u0("WebGLState: Invalid blending: ",f);break}B=null,L=null,_=null,A=null,D.set(0,0,0),I=0,F=f,p=UJ}return}if(M0=M0||q0,J0=J0||i,O0=O0||F0,q0!==P||M0!==z)J.blendEquationSeparate(JJ[q0],JJ[M0]),P=q0,z=M0;if(i!==B||F0!==L||J0!==_||O0!==A)J.blendFuncSeparate(WJ[i],WJ[F0],WJ[J0],WJ[O0]),B=i,L=F0,_=J0,A=O0;if(m0.equals(D)===!1||FJ!==I)J.blendColor(m0.r,m0.g,m0.b,FJ),D.copy(m0),I=FJ;F=f,p=!1}function KJ(f,q0){f.side===Y9?f0(J.CULL_FACE):U0(J.CULL_FACE);let i=f.side===$9;if(q0)i=!i;mJ(i),f.blending===L6&&f.transparent===!1?NJ(c9):NJ(f.blending,f.blendEquation,f.blendSrc,f.blendDst,f.blendEquationAlpha,f.blendSrcAlpha,f.blendDstAlpha,f.blendColor,f.blendAlpha,f.premultipliedAlpha),H.setFunc(f.depthFunc),H.setTest(f.depthTest),H.setMask(f.depthWrite),K.setMask(f.colorWrite);let F0=f.stencilWrite;if(Y.setTest(F0),F0)Y.setMask(f.stencilWriteMask),Y.setFunc(f.stencilFunc,f.stencilRef,f.stencilFuncMask),Y.setOp(f.stencilFail,f.stencilZFail,f.stencilZPass);hJ(f.polygonOffset,f.polygonOffsetFactor,f.polygonOffsetUnits),f.alphaToCoverage===!0?U0(J.SAMPLE_ALPHA_TO_COVERAGE):f0(J.SAMPLE_ALPHA_TO_COVERAGE)}function mJ(f){if(v!==f){if(f)J.frontFace(J.CW);else J.frontFace(J.CCW);v=f}}function zJ(f){if(f!==oK){if(U0(J.CULL_FACE),f!==b)if(f===JZ)J.cullFace(J.BACK);else if(f===aK)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else f0(J.CULL_FACE);b=f}function oJ(f){if(f!==o){if(d)J.lineWidth(f);o=f}}function hJ(f,q0,i){if(f){if(U0(J.POLYGON_OFFSET_FILL),S!==q0||m!==i){if(S=q0,m=i,H.getReversed())q0=-q0;J.polygonOffset(q0,i)}}else f0(J.POLYGON_OFFSET_FILL)}function IJ(f){if(f)U0(J.SCISSOR_TEST);else f0(J.SCISSOR_TEST)}function j(f){if(f===void 0)f=J.TEXTURE0+r-1;if(t!==f)J.activeTexture(f),t=f}function dJ(f,q0,i){if(i===void 0)if(t===null)i=J.TEXTURE0+r-1;else i=t;let F0=Z0[i];if(F0===void 0)F0={type:void 0,texture:void 0},Z0[i]=F0;if(F0.type!==f||F0.texture!==q0){if(t!==i)J.activeTexture(i),t=i;J.bindTexture(f,q0||G0[f]),F0.type=f,F0.texture=q0}}function r0(){let f=Z0[t];if(f!==void 0&&f.type!==void 0)J.bindTexture(f.type,null),f.type=void 0,f.texture=void 0}function AJ(){try{J.compressedTexImage2D(...arguments)}catch(f){u0("WebGLState:",f)}}function C(){try{J.compressedTexImage3D(...arguments)}catch(f){u0("WebGLState:",f)}}function V(){try{J.texSubImage2D(...arguments)}catch(f){u0("WebGLState:",f)}}function y(){try{J.texSubImage3D(...arguments)}catch(f){u0("WebGLState:",f)}}function l(){try{J.compressedTexSubImage2D(...arguments)}catch(f){u0("WebGLState:",f)}}function $0(){try{J.compressedTexSubImage3D(...arguments)}catch(f){u0("WebGLState:",f)}}function N0(){try{J.texStorage2D(...arguments)}catch(f){u0("WebGLState:",f)}}function R0(){try{J.texStorage3D(...arguments)}catch(f){u0("WebGLState:",f)}}function c(){try{J.texImage2D(...arguments)}catch(f){u0("WebGLState:",f)}}function a(){try{J.texImage3D(...arguments)}catch(f){u0("WebGLState:",f)}}function k0(f){if(E[f]!==void 0)return E[f];else return J.getParameter(f)}function S0(f,q0){if(E[f]!==q0)J.pixelStorei(f,q0),E[f]=q0}function L0(f){if(VJ.equals(f)===!1)J.scissor(f.x,f.y,f.z,f.w),VJ.copy(f)}function W0(f){if(a0.equals(f)===!1)J.viewport(f.x,f.y,f.z,f.w),a0.copy(f)}function j0(f,q0){let i=U.get(q0);if(i===void 0)i=new WeakMap,U.set(q0,i);let F0=i.get(f);if(F0===void 0)F0=J.getUniformBlockIndex(q0,f.name),i.set(f,F0)}function g0(f,q0){let F0=U.get(q0).get(f);if(X.get(q0)!==F0)J.uniformBlockBinding(q0,F0,f.__bindingPointIndex),X.set(q0,F0)}function YJ(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),H.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),N={},E={},t=null,Z0={},G={},q=new WeakMap,R=[],k=null,O=!1,F=null,P=null,B=null,L=null,z=null,_=null,A=null,D=new b0(0,0,0),I=0,p=!1,v=null,b=null,o=null,S=null,m=null,VJ.set(0,0,J.canvas.width,J.canvas.height),a0.set(0,0,J.canvas.width,J.canvas.height),K.reset(),H.reset(),Y.reset()}return{buffers:{color:K,depth:H,stencil:Y},enable:U0,disable:f0,bindFramebuffer:x0,drawBuffers:h0,useProgram:jJ,setBlending:NJ,setMaterial:KJ,setFlipSided:mJ,setCullFace:zJ,setLineWidth:oJ,setPolygonOffset:hJ,setScissorTest:IJ,activeTexture:j,bindTexture:dJ,unbindTexture:r0,compressedTexImage2D:AJ,compressedTexImage3D:C,texImage2D:c,texImage3D:a,pixelStorei:S0,getParameter:k0,updateUBOMapping:j0,uniformBlockBinding:g0,texStorage2D:N0,texStorage3D:R0,texSubImage2D:V,texSubImage3D:y,compressedTexSubImage2D:l,compressedTexSubImage3D:$0,scissor:L0,viewport:W0,reset:YJ}}function mq(J,Q,$,Z,W,K,H){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,X=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new H0,N=new WeakMap,E=new Set,G,q=new WeakMap,R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function k(C,V){return R?new OffscreenCanvas(C,V):A7("canvas")}function O(C,V,y){let l=1,$0=AJ(C);if($0.width>y||$0.height>y)l=y/Math.max($0.width,$0.height);if(l<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let N0=Math.floor(l*$0.width),R0=Math.floor(l*$0.height);if(G===void 0)G=k(N0,R0);let c=V?k(N0,R0):G;return c.width=N0,c.height=R0,c.getContext("2d").drawImage(C,0,0,N0,R0),y0("WebGLRenderer: Texture has been resized from ("+$0.width+"x"+$0.height+") to ("+N0+"x"+R0+")."),c}else{if("data"in C)y0("WebGLRenderer: Image in DataTexture is too big ("+$0.width+"x"+$0.height+").");return C}return C}function F(C){return C.generateMipmaps}function P(C){J.generateMipmap(C)}function B(C){if(C.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(C.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function L(C,V,y,l,$0,N0=!1){if(C!==null){if(J[C]!==void 0)return J[C];y0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let R0;if(l){if(R0=Q.get("EXT_texture_norm16"),!R0)y0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let c=V;if(V===J.RED){if(y===J.FLOAT)c=J.R32F;if(y===J.HALF_FLOAT)c=J.R16F;if(y===J.UNSIGNED_BYTE)c=J.R8;if(y===J.UNSIGNED_SHORT&&R0)c=R0.R16_EXT;if(y===J.SHORT&&R0)c=R0.R16_SNORM_EXT}if(V===J.RED_INTEGER){if(y===J.UNSIGNED_BYTE)c=J.R8UI;if(y===J.UNSIGNED_SHORT)c=J.R16UI;if(y===J.UNSIGNED_INT)c=J.R32UI;if(y===J.BYTE)c=J.R8I;if(y===J.SHORT)c=J.R16I;if(y===J.INT)c=J.R32I}if(V===J.RG){if(y===J.FLOAT)c=J.RG32F;if(y===J.HALF_FLOAT)c=J.RG16F;if(y===J.UNSIGNED_BYTE)c=J.RG8;if(y===J.UNSIGNED_SHORT&&R0)c=R0.RG16_EXT;if(y===J.SHORT&&R0)c=R0.RG16_SNORM_EXT}if(V===J.RG_INTEGER){if(y===J.UNSIGNED_BYTE)c=J.RG8UI;if(y===J.UNSIGNED_SHORT)c=J.RG16UI;if(y===J.UNSIGNED_INT)c=J.RG32UI;if(y===J.BYTE)c=J.RG8I;if(y===J.SHORT)c=J.RG16I;if(y===J.INT)c=J.RG32I}if(V===J.RGB_INTEGER){if(y===J.UNSIGNED_BYTE)c=J.RGB8UI;if(y===J.UNSIGNED_SHORT)c=J.RGB16UI;if(y===J.UNSIGNED_INT)c=J.RGB32UI;if(y===J.BYTE)c=J.RGB8I;if(y===J.SHORT)c=J.RGB16I;if(y===J.INT)c=J.RGB32I}if(V===J.RGBA_INTEGER){if(y===J.UNSIGNED_BYTE)c=J.RGBA8UI;if(y===J.UNSIGNED_SHORT)c=J.RGBA16UI;if(y===J.UNSIGNED_INT)c=J.RGBA32UI;if(y===J.BYTE)c=J.RGBA8I;if(y===J.SHORT)c=J.RGBA16I;if(y===J.INT)c=J.RGBA32I}if(V===J.RGB){if(y===J.UNSIGNED_SHORT&&R0)c=R0.RGB16_EXT;if(y===J.SHORT&&R0)c=R0.RGB16_SNORM_EXT;if(y===J.UNSIGNED_INT_5_9_9_9_REV)c=J.RGB9_E5;if(y===J.UNSIGNED_INT_10F_11F_11F_REV)c=J.R11F_G11F_B10F}if(V===J.RGBA){let a=N0?aZ:QJ.getTransfer($0);if(y===J.FLOAT)c=J.RGBA32F;if(y===J.HALF_FLOAT)c=J.RGBA16F;if(y===J.UNSIGNED_BYTE)c=a===PJ?J.SRGB8_ALPHA8:J.RGBA8;if(y===J.UNSIGNED_SHORT&&R0)c=R0.RGBA16_EXT;if(y===J.SHORT&&R0)c=R0.RGBA16_SNORM_EXT;if(y===J.UNSIGNED_SHORT_4_4_4_4)c=J.RGBA4;if(y===J.UNSIGNED_SHORT_5_5_5_1)c=J.RGB5_A1}if(c===J.R16F||c===J.R32F||c===J.RG16F||c===J.RG32F||c===J.RGBA16F||c===J.RGBA32F)Q.get("EXT_color_buffer_float");return c}function z(C,V){let y;if(C){if(V===null||V===_8||V===b7)y=J.DEPTH24_STENCIL8;else if(V===H8)y=J.DEPTH32F_STENCIL8;else if(V===D6)y=J.DEPTH24_STENCIL8,y0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(V===null||V===_8||V===b7)y=J.DEPTH_COMPONENT24;else if(V===H8)y=J.DEPTH_COMPONENT32F;else if(V===D6)y=J.DEPTH_COMPONENT16;return y}function _(C,V){if(F(C)===!0||C.isFramebufferTexture&&C.minFilter!==b9&&C.minFilter!==rJ)return Math.log2(Math.max(V.width,V.height))+1;else if(C.mipmaps!==void 0&&C.mipmaps.length>0)return C.mipmaps.length;else if(C.isCompressedTexture&&Array.isArray(C.image))return V.mipmaps.length;else return 1}function A(C){let V=C.target;if(V.removeEventListener("dispose",A),I(V),V.isVideoTexture)N.delete(V);if(V.isHTMLTexture)E.delete(V)}function D(C){let V=C.target;V.removeEventListener("dispose",D),v(V)}function I(C){let V=Z.get(C);if(V.__webglInit===void 0)return;let y=C.source,l=q.get(y);if(l){let $0=l[V.__cacheKey];if($0.usedTimes--,$0.usedTimes===0)p(C);if(Object.keys(l).length===0)q.delete(y)}Z.remove(C)}function p(C){let V=Z.get(C);J.deleteTexture(V.__webglTexture);let y=C.source,l=q.get(y);delete l[V.__cacheKey],H.memory.textures--}function v(C){let V=Z.get(C);if(C.depthTexture)C.depthTexture.dispose(),Z.remove(C.depthTexture);if(C.isWebGLCubeRenderTarget)for(let l=0;l<6;l++){if(Array.isArray(V.__webglFramebuffer[l]))for(let $0=0;$0<V.__webglFramebuffer[l].length;$0++)J.deleteFramebuffer(V.__webglFramebuffer[l][$0]);else J.deleteFramebuffer(V.__webglFramebuffer[l]);if(V.__webglDepthbuffer)J.deleteRenderbuffer(V.__webglDepthbuffer[l])}else{if(Array.isArray(V.__webglFramebuffer))for(let l=0;l<V.__webglFramebuffer.length;l++)J.deleteFramebuffer(V.__webglFramebuffer[l]);else J.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer)J.deleteRenderbuffer(V.__webglDepthbuffer);if(V.__webglMultisampledFramebuffer)J.deleteFramebuffer(V.__webglMultisampledFramebuffer);if(V.__webglColorRenderbuffer){for(let l=0;l<V.__webglColorRenderbuffer.length;l++)if(V.__webglColorRenderbuffer[l])J.deleteRenderbuffer(V.__webglColorRenderbuffer[l])}if(V.__webglDepthRenderbuffer)J.deleteRenderbuffer(V.__webglDepthRenderbuffer)}let y=C.textures;for(let l=0,$0=y.length;l<$0;l++){let N0=Z.get(y[l]);if(N0.__webglTexture)J.deleteTexture(N0.__webglTexture),H.memory.textures--;Z.remove(y[l])}Z.remove(C)}let b=0;function o(){b=0}function S(){return b}function m(C){b=C}function r(){let C=b;if(C>=W.maxTextures)y0("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+W.maxTextures);return b+=1,C}function d(C){let V=[];return V.push(C.wrapS),V.push(C.wrapT),V.push(C.wrapR||0),V.push(C.magFilter),V.push(C.minFilter),V.push(C.anisotropy),V.push(C.internalFormat),V.push(C.format),V.push(C.type),V.push(C.generateMipmaps),V.push(C.premultiplyAlpha),V.push(C.flipY),V.push(C.unpackAlignment),V.push(C.colorSpace),V.join()}function X0(C,V){let y=Z.get(C);if(C.isVideoTexture)dJ(C);if(C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&y.__version!==C.version){let l=C.image;if(l===null)y0("WebGLRenderer: Texture marked for update but no image data found.");else if(l.complete===!1)y0("WebGLRenderer: Texture marked for update but image is incomplete");else{f0(y,C,V);return}}else if(C.isExternalTexture)y.__webglTexture=C.sourceTexture?C.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,y.__webglTexture,J.TEXTURE0+V)}function n(C,V){let y=Z.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&y.__version!==C.version){f0(y,C,V);return}else if(C.isExternalTexture)y.__webglTexture=C.sourceTexture?C.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,y.__webglTexture,J.TEXTURE0+V)}function t(C,V){let y=Z.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&y.__version!==C.version){f0(y,C,V);return}$.bindTexture(J.TEXTURE_3D,y.__webglTexture,J.TEXTURE0+V)}function Z0(C,V){let y=Z.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&y.__version!==C.version){x0(y,C,V);return}$.bindTexture(J.TEXTURE_CUBE_MAP,y.__webglTexture,J.TEXTURE0+V)}let l0={[I8]:J.REPEAT,[f7]:J.CLAMP_TO_EDGE,[yQ]:J.MIRRORED_REPEAT},_0={[b9]:J.NEAREST,[vQ]:J.NEAREST_MIPMAP_NEAREST,[o8]:J.NEAREST_MIPMAP_LINEAR,[rJ]:J.LINEAR,[h7]:J.LINEAR_MIPMAP_NEAREST,[n9]:J.LINEAR_MIPMAP_LINEAR},VJ={[fH]:J.NEVER,[pH]:J.ALWAYS,[hH]:J.LESS,[mQ]:J.LEQUAL,[bH]:J.EQUAL,[dQ]:J.GEQUAL,[xH]:J.GREATER,[gH]:J.NOTEQUAL};function a0(C,V){if(V.type===H8&&Q.has("OES_texture_float_linear")===!1&&(V.magFilter===rJ||V.magFilter===h7||V.magFilter===o8||V.magFilter===n9||V.minFilter===rJ||V.minFilter===h7||V.minFilter===o8||V.minFilter===n9))y0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(C,J.TEXTURE_WRAP_S,l0[V.wrapS]),J.texParameteri(C,J.TEXTURE_WRAP_T,l0[V.wrapT]),C===J.TEXTURE_3D||C===J.TEXTURE_2D_ARRAY)J.texParameteri(C,J.TEXTURE_WRAP_R,l0[V.wrapR]);if(J.texParameteri(C,J.TEXTURE_MAG_FILTER,_0[V.magFilter]),J.texParameteri(C,J.TEXTURE_MIN_FILTER,_0[V.minFilter]),V.compareFunction)J.texParameteri(C,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(C,J.TEXTURE_COMPARE_FUNC,VJ[V.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(V.magFilter===b9)return;if(V.minFilter!==o8&&V.minFilter!==n9)return;if(V.type===H8&&Q.has("OES_texture_float_linear")===!1)return;if(V.anisotropy>1||Z.get(V).__currentAnisotropy){let y=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(C,y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(V.anisotropy,W.getMaxAnisotropy())),Z.get(V).__currentAnisotropy=V.anisotropy}}}function s(C,V){let y=!1;if(C.__webglInit===void 0)C.__webglInit=!0,V.addEventListener("dispose",A);let l=V.source,$0=q.get(l);if($0===void 0)$0={},q.set(l,$0);let N0=d(V);if(N0!==C.__cacheKey){if($0[N0]===void 0)$0[N0]={texture:J.createTexture(),usedTimes:0},H.memory.textures++,y=!0;$0[N0].usedTimes++;let R0=$0[C.__cacheKey];if(R0!==void 0){if($0[C.__cacheKey].usedTimes--,R0.usedTimes===0)p(V)}C.__cacheKey=N0,C.__webglTexture=$0[N0].texture}return y}function G0(C,V,y){return Math.floor(Math.floor(C/y)/V)}function U0(C,V,y,l){let N0=C.updateRanges;if(N0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,V.width,V.height,y,l,V.data);else{N0.sort((S0,L0)=>S0.start-L0.start);let R0=0;for(let S0=1;S0<N0.length;S0++){let L0=N0[R0],W0=N0[S0],j0=L0.start+L0.count,g0=G0(W0.start,V.width,4),YJ=G0(L0.start,V.width,4);if(W0.start<=j0+1&&g0===YJ&&G0(W0.start+W0.count-1,V.width,4)===g0)L0.count=Math.max(L0.count,W0.start+W0.count-L0.start);else++R0,N0[R0]=W0}N0.length=R0+1;let c=$.getParameter(J.UNPACK_ROW_LENGTH),a=$.getParameter(J.UNPACK_SKIP_PIXELS),k0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,V.width);for(let S0=0,L0=N0.length;S0<L0;S0++){let W0=N0[S0],j0=Math.floor(W0.start/4),g0=Math.ceil(W0.count/4),YJ=j0%V.width,f=Math.floor(j0/V.width),q0=g0,i=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,YJ),$.pixelStorei(J.UNPACK_SKIP_ROWS,f),$.texSubImage2D(J.TEXTURE_2D,0,YJ,f,q0,1,y,l,V.data)}C.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,c),$.pixelStorei(J.UNPACK_SKIP_PIXELS,a),$.pixelStorei(J.UNPACK_SKIP_ROWS,k0)}}function f0(C,V,y){let l=J.TEXTURE_2D;if(V.isDataArrayTexture||V.isCompressedArrayTexture)l=J.TEXTURE_2D_ARRAY;if(V.isData3DTexture)l=J.TEXTURE_3D;let $0=s(C,V),N0=V.source;$.bindTexture(l,C.__webglTexture,J.TEXTURE0+y);let R0=Z.get(N0);if(N0.version!==R0.__version||$0===!0){if($.activeTexture(J.TEXTURE0+y),(typeof ImageBitmap<"u"&&V.image instanceof ImageBitmap)===!1){let i=QJ.getPrimaries(QJ.workingColorSpace),F0=V.colorSpace===e8?null:QJ.getPrimaries(V.colorSpace),M0=V.colorSpace===e8||i===F0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,V.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,M0)}$.pixelStorei(J.UNPACK_ALIGNMENT,V.unpackAlignment);let a=O(V.image,!1,W.maxTextureSize);a=r0(V,a);let k0=K.convert(V.format,V.colorSpace),S0=K.convert(V.type),L0=L(V.internalFormat,k0,S0,V.normalized,V.colorSpace,V.isVideoTexture);a0(l,V);let W0,j0=V.mipmaps,g0=V.isVideoTexture!==!0,YJ=R0.__version===void 0||$0===!0,f=N0.dataReady,q0=_(V,a);if(V.isDepthTexture){if(L0=z(V.format===r8,V.type),YJ)if(g0)$.texStorage2D(J.TEXTURE_2D,1,L0,a.width,a.height);else $.texImage2D(J.TEXTURE_2D,0,L0,a.width,a.height,0,k0,S0,null)}else if(V.isDataTexture)if(j0.length>0){if(g0&&YJ)$.texStorage2D(J.TEXTURE_2D,q0,L0,j0[0].width,j0[0].height);for(let i=0,F0=j0.length;i<F0;i++)if(W0=j0[i],g0){if(f)$.texSubImage2D(J.TEXTURE_2D,i,0,0,W0.width,W0.height,k0,S0,W0.data)}else $.texImage2D(J.TEXTURE_2D,i,L0,W0.width,W0.height,0,k0,S0,W0.data);V.generateMipmaps=!1}else if(g0){if(YJ)$.texStorage2D(J.TEXTURE_2D,q0,L0,a.width,a.height);if(f)U0(V,a,k0,S0)}else $.texImage2D(J.TEXTURE_2D,0,L0,a.width,a.height,0,k0,S0,a.data);else if(V.isCompressedTexture)if(V.isCompressedArrayTexture){if(g0&&YJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,q0,L0,j0[0].width,j0[0].height,a.depth);for(let i=0,F0=j0.length;i<F0;i++)if(W0=j0[i],V.format!==i9)if(k0!==null)if(g0){if(f)if(V.layerUpdates.size>0){let M0=_W(W0.width,W0.height,V.format,V.type);for(let J0 of V.layerUpdates){let O0=W0.data.subarray(J0*M0/W0.data.BYTES_PER_ELEMENT,(J0+1)*M0/W0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,J0,W0.width,W0.height,1,k0,O0)}}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,0,W0.width,W0.height,a.depth,k0,W0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,i,L0,W0.width,W0.height,a.depth,0,W0.data,0,0);else y0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(g0){if(f)$.texSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,0,W0.width,W0.height,a.depth,k0,S0,W0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,i,L0,W0.width,W0.height,a.depth,0,k0,S0,W0.data);if(V.layerUpdates.size>0)V.clearLayerUpdates()}else{if(g0&&YJ)$.texStorage2D(J.TEXTURE_2D,q0,L0,j0[0].width,j0[0].height);for(let i=0,F0=j0.length;i<F0;i++)if(W0=j0[i],V.format!==i9)if(k0!==null)if(g0){if(f)$.compressedTexSubImage2D(J.TEXTURE_2D,i,0,0,W0.width,W0.height,k0,W0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,i,L0,W0.width,W0.height,0,W0.data);else y0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(g0){if(f)$.texSubImage2D(J.TEXTURE_2D,i,0,0,W0.width,W0.height,k0,S0,W0.data)}else $.texImage2D(J.TEXTURE_2D,i,L0,W0.width,W0.height,0,k0,S0,W0.data)}else if(V.isDataArrayTexture)if(g0){if(YJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,q0,L0,a.width,a.height,a.depth);if(f)if(V.layerUpdates.size>0){let i=_W(a.width,a.height,V.format,V.type);for(let F0 of V.layerUpdates){let M0=a.data.subarray(F0*i/a.data.BYTES_PER_ELEMENT,(F0+1)*i/a.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,F0,a.width,a.height,1,k0,S0,M0)}V.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,a.width,a.height,a.depth,k0,S0,a.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,L0,a.width,a.height,a.depth,0,k0,S0,a.data);else if(V.isData3DTexture)if(g0){if(YJ)$.texStorage3D(J.TEXTURE_3D,q0,L0,a.width,a.height,a.depth);if(f)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,a.width,a.height,a.depth,k0,S0,a.data)}else $.texImage3D(J.TEXTURE_3D,0,L0,a.width,a.height,a.depth,0,k0,S0,a.data);else if(V.isFramebufferTexture){if(YJ)if(g0)$.texStorage2D(J.TEXTURE_2D,q0,L0,a.width,a.height);else{let{width:i,height:F0}=a;for(let M0=0;M0<q0;M0++)$.texImage2D(J.TEXTURE_2D,M0,L0,i,F0,0,k0,S0,null),i>>=1,F0>>=1}}else if(V.isHTMLTexture){if("texElementImage2D"in J){let i=J.canvas;if(!i.hasAttribute("layoutsubtree"))i.setAttribute("layoutsubtree","true");if(a.parentNode!==i){i.appendChild(a),E.add(V),i.onpaint=(F0)=>{let M0=F0.changedElements;for(let J0 of E)if(M0.includes(J0.image))J0.needsUpdate=!0},i.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,a);else{let{RGBA:M0,RGBA:J0,UNSIGNED_BYTE:O0}=J;J.texElementImage2D(J.TEXTURE_2D,0,M0,J0,O0,a)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(j0.length>0){if(g0&&YJ){let i=AJ(j0[0]);$.texStorage2D(J.TEXTURE_2D,q0,L0,i.width,i.height)}for(let i=0,F0=j0.length;i<F0;i++)if(W0=j0[i],g0){if(f)$.texSubImage2D(J.TEXTURE_2D,i,0,0,k0,S0,W0)}else $.texImage2D(J.TEXTURE_2D,i,L0,k0,S0,W0);V.generateMipmaps=!1}else if(g0){if(YJ){let i=AJ(a);$.texStorage2D(J.TEXTURE_2D,q0,L0,i.width,i.height)}if(f)$.texSubImage2D(J.TEXTURE_2D,0,0,0,k0,S0,a)}else $.texImage2D(J.TEXTURE_2D,0,L0,k0,S0,a);if(F(V))P(l);if(R0.__version=N0.version,V.onUpdate)V.onUpdate(V)}C.__version=V.version}function x0(C,V,y){if(V.image.length!==6)return;let l=s(C,V),$0=V.source;$.bindTexture(J.TEXTURE_CUBE_MAP,C.__webglTexture,J.TEXTURE0+y);let N0=Z.get($0);if($0.version!==N0.__version||l===!0){$.activeTexture(J.TEXTURE0+y);let R0=QJ.getPrimaries(QJ.workingColorSpace),c=V.colorSpace===e8?null:QJ.getPrimaries(V.colorSpace),a=V.colorSpace===e8||R0===c?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,V.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,V.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,a);let k0=V.isCompressedTexture||V.image[0].isCompressedTexture,S0=V.image[0]&&V.image[0].isDataTexture,L0=[];for(let J0=0;J0<6;J0++){if(!k0&&!S0)L0[J0]=O(V.image[J0],!0,W.maxCubemapSize);else L0[J0]=S0?V.image[J0].image:V.image[J0];L0[J0]=r0(V,L0[J0])}let W0=L0[0],j0=K.convert(V.format,V.colorSpace),g0=K.convert(V.type),YJ=L(V.internalFormat,j0,g0,V.normalized,V.colorSpace),f=V.isVideoTexture!==!0,q0=N0.__version===void 0||l===!0,i=$0.dataReady,F0=_(V,W0);a0(J.TEXTURE_CUBE_MAP,V);let M0;if(k0){if(f&&q0)$.texStorage2D(J.TEXTURE_CUBE_MAP,F0,YJ,W0.width,W0.height);for(let J0=0;J0<6;J0++){M0=L0[J0].mipmaps;for(let O0=0;O0<M0.length;O0++){let m0=M0[O0];if(V.format!==i9)if(j0!==null)if(f){if(i)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,O0,0,0,m0.width,m0.height,j0,m0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,O0,YJ,m0.width,m0.height,0,m0.data);else y0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(f){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,O0,0,0,m0.width,m0.height,j0,g0,m0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,O0,YJ,m0.width,m0.height,0,j0,g0,m0.data)}}}else{if(M0=V.mipmaps,f&&q0){if(M0.length>0)F0++;let J0=AJ(L0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,F0,YJ,J0.width,J0.height)}for(let J0=0;J0<6;J0++)if(S0){if(f){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,0,0,0,L0[J0].width,L0[J0].height,j0,g0,L0[J0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,0,YJ,L0[J0].width,L0[J0].height,0,j0,g0,L0[J0].data);for(let O0=0;O0<M0.length;O0++){let FJ=M0[O0].image[J0].image;if(f){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,O0+1,0,0,FJ.width,FJ.height,j0,g0,FJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,O0+1,YJ,FJ.width,FJ.height,0,j0,g0,FJ.data)}}else{if(f){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,0,0,0,j0,g0,L0[J0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,0,YJ,j0,g0,L0[J0]);for(let O0=0;O0<M0.length;O0++){let m0=M0[O0];if(f){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,O0+1,0,0,j0,g0,m0.image[J0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+J0,O0+1,YJ,j0,g0,m0.image[J0])}}}if(F(V))P(J.TEXTURE_CUBE_MAP);if(N0.__version=$0.version,V.onUpdate)V.onUpdate(V)}C.__version=V.version}function h0(C,V,y,l,$0,N0){let R0=K.convert(y.format,y.colorSpace),c=K.convert(y.type),a=L(y.internalFormat,R0,c,y.normalized,y.colorSpace),k0=Z.get(V),S0=Z.get(y);if(S0.__renderTarget=V,!k0.__hasExternalTextures){let L0=Math.max(1,V.width>>N0),W0=Math.max(1,V.height>>N0);if($0===J.TEXTURE_3D||$0===J.TEXTURE_2D_ARRAY)$.texImage3D($0,N0,a,L0,W0,V.depth,0,R0,c,null);else $.texImage2D($0,N0,a,L0,W0,0,R0,c,null)}if($.bindFramebuffer(J.FRAMEBUFFER,C),j(V))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,l,$0,S0.__webglTexture,0,IJ(V));else if($0===J.TEXTURE_2D||$0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&$0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,l,$0,S0.__webglTexture,N0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function jJ(C,V,y){if(J.bindRenderbuffer(J.RENDERBUFFER,C),V.depthBuffer){let l=V.depthTexture,$0=l&&l.isDepthTexture?l.type:null,N0=z(V.stencilBuffer,$0),R0=V.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(j(V))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,IJ(V),N0,V.width,V.height);else if(y)J.renderbufferStorageMultisample(J.RENDERBUFFER,IJ(V),N0,V.width,V.height);else J.renderbufferStorage(J.RENDERBUFFER,N0,V.width,V.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,R0,J.RENDERBUFFER,C)}else{let l=V.textures;for(let $0=0;$0<l.length;$0++){let N0=l[$0],R0=K.convert(N0.format,N0.colorSpace),c=K.convert(N0.type),a=L(N0.internalFormat,R0,c,N0.normalized,N0.colorSpace);if(j(V))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,IJ(V),a,V.width,V.height);else if(y)J.renderbufferStorageMultisample(J.RENDERBUFFER,IJ(V),a,V.width,V.height);else J.renderbufferStorage(J.RENDERBUFFER,a,V.width,V.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function JJ(C,V,y){let l=V.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,C),!(V.depthTexture&&V.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $0=Z.get(V.depthTexture);if($0.__renderTarget=V,!$0.__webglTexture||V.depthTexture.image.width!==V.width||V.depthTexture.image.height!==V.height)V.depthTexture.image.width=V.width,V.depthTexture.image.height=V.height,V.depthTexture.needsUpdate=!0;if(l){if($0.__webglInit===void 0)$0.__webglInit=!0,V.depthTexture.addEventListener("dispose",A);if($0.__webglTexture===void 0){$0.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,$0.__webglTexture),a0(J.TEXTURE_CUBE_MAP,V.depthTexture);let k0=K.convert(V.depthTexture.format),S0=K.convert(V.depthTexture.type),L0;if(V.depthTexture.format===a8)L0=J.DEPTH_COMPONENT24;else if(V.depthTexture.format===r8)L0=J.DEPTH24_STENCIL8;for(let W0=0;W0<6;W0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+W0,0,L0,V.width,V.height,0,k0,S0,null)}}else X0(V.depthTexture,0);let N0=$0.__webglTexture,R0=IJ(V),c=l?J.TEXTURE_CUBE_MAP_POSITIVE_X+y:J.TEXTURE_2D,a=V.depthTexture.format===r8?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(V.depthTexture.format===a8)if(j(V))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,a,c,N0,0,R0);else J.framebufferTexture2D(J.FRAMEBUFFER,a,c,N0,0);else if(V.depthTexture.format===r8)if(j(V))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,a,c,N0,0,R0);else J.framebufferTexture2D(J.FRAMEBUFFER,a,c,N0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function WJ(C){let V=Z.get(C),y=C.isWebGLCubeRenderTarget===!0;if(V.__boundDepthTexture!==C.depthTexture){let l=C.depthTexture;if(V.__depthDisposeCallback)V.__depthDisposeCallback();if(l){let $0=()=>{delete V.__boundDepthTexture,delete V.__depthDisposeCallback,l.removeEventListener("dispose",$0)};l.addEventListener("dispose",$0),V.__depthDisposeCallback=$0}V.__boundDepthTexture=l}if(C.depthTexture&&!V.__autoAllocateDepthBuffer)if(y)for(let l=0;l<6;l++)JJ(V.__webglFramebuffer[l],C,l);else{let l=C.texture.mipmaps;if(l&&l.length>0)JJ(V.__webglFramebuffer[0],C,0);else JJ(V.__webglFramebuffer,C,0)}else if(y){V.__webglDepthbuffer=[];for(let l=0;l<6;l++)if($.bindFramebuffer(J.FRAMEBUFFER,V.__webglFramebuffer[l]),V.__webglDepthbuffer[l]===void 0)V.__webglDepthbuffer[l]=J.createRenderbuffer(),jJ(V.__webglDepthbuffer[l],C,!1);else{let $0=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,N0=V.__webglDepthbuffer[l];J.bindRenderbuffer(J.RENDERBUFFER,N0),J.framebufferRenderbuffer(J.FRAMEBUFFER,$0,J.RENDERBUFFER,N0)}}else{let l=C.texture.mipmaps;if(l&&l.length>0)$.bindFramebuffer(J.FRAMEBUFFER,V.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,V.__webglFramebuffer);if(V.__webglDepthbuffer===void 0)V.__webglDepthbuffer=J.createRenderbuffer(),jJ(V.__webglDepthbuffer,C,!1);else{let $0=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,N0=V.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,N0),J.framebufferRenderbuffer(J.FRAMEBUFFER,$0,J.RENDERBUFFER,N0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function NJ(C,V,y){let l=Z.get(C);if(V!==void 0)h0(l.__webglFramebuffer,C,C.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(y!==void 0)WJ(C)}function KJ(C){let V=C.texture,y=Z.get(C),l=Z.get(V);C.addEventListener("dispose",D);let $0=C.textures,N0=C.isWebGLCubeRenderTarget===!0,R0=$0.length>1;if(!R0){if(l.__webglTexture===void 0)l.__webglTexture=J.createTexture();l.__version=V.version,H.memory.textures++}if(N0){y.__webglFramebuffer=[];for(let c=0;c<6;c++)if(V.mipmaps&&V.mipmaps.length>0){y.__webglFramebuffer[c]=[];for(let a=0;a<V.mipmaps.length;a++)y.__webglFramebuffer[c][a]=J.createFramebuffer()}else y.__webglFramebuffer[c]=J.createFramebuffer()}else{if(V.mipmaps&&V.mipmaps.length>0){y.__webglFramebuffer=[];for(let c=0;c<V.mipmaps.length;c++)y.__webglFramebuffer[c]=J.createFramebuffer()}else y.__webglFramebuffer=J.createFramebuffer();if(R0)for(let c=0,a=$0.length;c<a;c++){let k0=Z.get($0[c]);if(k0.__webglTexture===void 0)k0.__webglTexture=J.createTexture(),H.memory.textures++}if(C.samples>0&&j(C)===!1){y.__webglMultisampledFramebuffer=J.createFramebuffer(),y.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,y.__webglMultisampledFramebuffer);for(let c=0;c<$0.length;c++){let a=$0[c];y.__webglColorRenderbuffer[c]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,y.__webglColorRenderbuffer[c]);let k0=K.convert(a.format,a.colorSpace),S0=K.convert(a.type),L0=L(a.internalFormat,k0,S0,a.normalized,a.colorSpace,C.isXRRenderTarget===!0),W0=IJ(C);J.renderbufferStorageMultisample(J.RENDERBUFFER,W0,L0,C.width,C.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+c,J.RENDERBUFFER,y.__webglColorRenderbuffer[c])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),C.depthBuffer)y.__webglDepthRenderbuffer=J.createRenderbuffer(),jJ(y.__webglDepthRenderbuffer,C,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(N0){$.bindTexture(J.TEXTURE_CUBE_MAP,l.__webglTexture),a0(J.TEXTURE_CUBE_MAP,V);for(let c=0;c<6;c++)if(V.mipmaps&&V.mipmaps.length>0)for(let a=0;a<V.mipmaps.length;a++)h0(y.__webglFramebuffer[c][a],C,V,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+c,a);else h0(y.__webglFramebuffer[c],C,V,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+c,0);if(F(V))P(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(R0){for(let c=0,a=$0.length;c<a;c++){let k0=$0[c],S0=Z.get(k0),L0=J.TEXTURE_2D;if(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)L0=C.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(L0,S0.__webglTexture),a0(L0,k0),h0(y.__webglFramebuffer,C,k0,J.COLOR_ATTACHMENT0+c,L0,0),F(k0))P(L0)}$.unbindTexture()}else{let c=J.TEXTURE_2D;if(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)c=C.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(c,l.__webglTexture),a0(c,V),V.mipmaps&&V.mipmaps.length>0)for(let a=0;a<V.mipmaps.length;a++)h0(y.__webglFramebuffer[a],C,V,J.COLOR_ATTACHMENT0,c,a);else h0(y.__webglFramebuffer,C,V,J.COLOR_ATTACHMENT0,c,0);if(F(V))P(c);$.unbindTexture()}if(C.depthBuffer)WJ(C)}function mJ(C){let V=C.textures;for(let y=0,l=V.length;y<l;y++){let $0=V[y];if(F($0)){let N0=B(C),R0=Z.get($0).__webglTexture;$.bindTexture(N0,R0),P(N0),$.unbindTexture()}}}let zJ=[],oJ=[];function hJ(C){if(C.samples>0){if(j(C)===!1){let{textures:V,width:y,height:l}=C,$0=J.COLOR_BUFFER_BIT,N0=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,R0=Z.get(C),c=V.length>1;if(c)for(let k0=0;k0<V.length;k0++)$.bindFramebuffer(J.FRAMEBUFFER,R0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+k0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,R0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+k0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,R0.__webglMultisampledFramebuffer);let a=C.texture.mipmaps;if(a&&a.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,R0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,R0.__webglFramebuffer);for(let k0=0;k0<V.length;k0++){if(C.resolveDepthBuffer){if(C.depthBuffer)$0|=J.DEPTH_BUFFER_BIT;if(C.stencilBuffer&&C.resolveStencilBuffer)$0|=J.STENCIL_BUFFER_BIT}if(c){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,R0.__webglColorRenderbuffer[k0]);let S0=Z.get(V[k0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,S0,0)}if(J.blitFramebuffer(0,0,y,l,0,0,y,l,$0,J.NEAREST),X===!0){if(zJ.length=0,oJ.length=0,zJ.push(J.COLOR_ATTACHMENT0+k0),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1)zJ.push(N0),oJ.push(N0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,oJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,zJ)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),c)for(let k0=0;k0<V.length;k0++){$.bindFramebuffer(J.FRAMEBUFFER,R0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+k0,J.RENDERBUFFER,R0.__webglColorRenderbuffer[k0]);let S0=Z.get(V[k0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,R0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+k0,J.TEXTURE_2D,S0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,R0.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&X){let V=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[V])}}}function IJ(C){return Math.min(W.maxSamples,C.samples)}function j(C){let V=Z.get(C);return C.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&V.__useRenderToTexture!==!1}function dJ(C){let V=H.render.frame;if(N.get(C)!==V)N.set(C,V),C.update()}function r0(C,V){let{colorSpace:y,format:l,type:$0}=C;if(C.isCompressedTexture===!0||C.isVideoTexture===!0)return V;if(y!==F9&&y!==e8)if(QJ.getTransfer(y)===PJ){if(l!==i9||$0!==x9)y0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else u0("WebGLTextures: Unsupported texture color space:",y);return V}function AJ(C){if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement)U.width=C.naturalWidth||C.width,U.height=C.naturalHeight||C.height;else if(typeof VideoFrame<"u"&&C instanceof VideoFrame)U.width=C.displayWidth,U.height=C.displayHeight;else U.width=C.width,U.height=C.height;return U}this.allocateTextureUnit=r,this.resetTextureUnits=o,this.getTextureUnits=S,this.setTextureUnits=m,this.setTexture2D=X0,this.setTexture2DArray=n,this.setTexture3D=t,this.setTextureCube=Z0,this.rebindTextures=NJ,this.setupRenderTarget=KJ,this.updateRenderTargetMipmap=mJ,this.updateMultisampleRenderTarget=hJ,this.setupDepthRenderbuffer=WJ,this.setupFrameBufferTexture=h0,this.useMultisampledRTT=j,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function dq(J,Q){function $(Z,W=e8){let K,H=QJ.getTransfer(W);if(Z===x9)return J.UNSIGNED_BYTE;if(Z===EZ)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===qZ)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===wH)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===TH)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===_H)return J.BYTE;if(Z===AH)return J.SHORT;if(Z===D6)return J.UNSIGNED_SHORT;if(Z===NZ)return J.INT;if(Z===_8)return J.UNSIGNED_INT;if(Z===H8)return J.FLOAT;if(Z===s9)return J.HALF_FLOAT;if(Z===SH)return J.ALPHA;if(Z===jH)return J.RGB;if(Z===i9)return J.RGBA;if(Z===a8)return J.DEPTH_COMPONENT;if(Z===r8)return J.DEPTH_STENCIL;if(Z===yH)return J.RED;if(Z===FZ)return J.RED_INTEGER;if(Z===t8)return J.RG;if(Z===OZ)return J.RG_INTEGER;if(Z===RZ)return J.RGBA_INTEGER;if(Z===fQ||Z===hQ||Z===bQ||Z===xQ)if(H===PJ)if(K=Q.get("WEBGL_compressed_texture_s3tc_srgb"),K!==null){if(Z===fQ)return K.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===hQ)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===bQ)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===xQ)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(K=Q.get("WEBGL_compressed_texture_s3tc"),K!==null){if(Z===fQ)return K.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===hQ)return K.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===bQ)return K.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===xQ)return K.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===LZ||Z===VZ||Z===kZ||Z===DZ)if(K=Q.get("WEBGL_compressed_texture_pvrtc"),K!==null){if(Z===LZ)return K.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===VZ)return K.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===kZ)return K.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===DZ)return K.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===BZ||Z===MZ||Z===zZ||Z===CZ||Z===PZ||Z===gQ||Z===IZ)if(K=Q.get("WEBGL_compressed_texture_etc"),K!==null){if(Z===BZ||Z===MZ)return H===PJ?K.COMPRESSED_SRGB8_ETC2:K.COMPRESSED_RGB8_ETC2;if(Z===zZ)return H===PJ?K.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:K.COMPRESSED_RGBA8_ETC2_EAC;if(Z===CZ)return K.COMPRESSED_R11_EAC;if(Z===PZ)return K.COMPRESSED_SIGNED_R11_EAC;if(Z===gQ)return K.COMPRESSED_RG11_EAC;if(Z===IZ)return K.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===_Z||Z===AZ||Z===wZ||Z===TZ||Z===SZ||Z===jZ||Z===yZ||Z===vZ||Z===fZ||Z===hZ||Z===bZ||Z===xZ||Z===gZ||Z===pZ)if(K=Q.get("WEBGL_compressed_texture_astc"),K!==null){if(Z===_Z)return H===PJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:K.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===AZ)return H===PJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:K.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===wZ)return H===PJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:K.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===TZ)return H===PJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:K.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===SZ)return H===PJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:K.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===jZ)return H===PJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:K.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===yZ)return H===PJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:K.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===vZ)return H===PJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:K.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===fZ)return H===PJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:K.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===hZ)return H===PJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:K.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===bZ)return H===PJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:K.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===xZ)return H===PJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:K.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===gZ)return H===PJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:K.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===pZ)return H===PJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:K.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===lZ||Z===mZ||Z===dZ)if(K=Q.get("EXT_texture_compression_bptc"),K!==null){if(Z===lZ)return H===PJ?K.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:K.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===mZ)return K.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===dZ)return K.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===uZ||Z===cZ||Z===pQ||Z===nZ)if(K=Q.get("EXT_texture_compression_rgtc"),K!==null){if(Z===uZ)return K.COMPRESSED_RED_RGTC1_EXT;if(Z===cZ)return K.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===pQ)return K.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===nZ)return K.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===b7)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var uq=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cq=`
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

}`;class bY{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new J$(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new w9({vertexShader:uq,fragmentShader:cq,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new p0(new l9(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xY extends p9{constructor(J,Q){super();let $=this,Z=null,W=1,K=null,H="local-floor",Y=1,X=null,U=null,N=null,E=null,G=null,q=null,R=typeof XRWebGLBinding<"u",k=new bY,O={},F=Q.getContextAttributes(),P=null,B=null,L=[],z=[],_=new H0,A=null,D=null,I=new uJ;I.viewport=new DJ;let p=new uJ;p.viewport=new DJ;let v=[I,p],b=new BW,o=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(s){let G0=L[s];if(G0===void 0)G0=new z6,L[s]=G0;return G0.getTargetRaySpace()},this.getControllerGrip=function(s){let G0=L[s];if(G0===void 0)G0=new z6,L[s]=G0;return G0.getGripSpace()},this.getHand=function(s){let G0=L[s];if(G0===void 0)G0=new z6,L[s]=G0;return G0.getHandSpace()};function m(s){let G0=z.indexOf(s.inputSource);if(G0===-1)return;let U0=L[G0];if(U0!==void 0)U0.update(s.inputSource,s.frame,X||K),U0.dispatchEvent({type:s.type,data:s.inputSource})}function r(){Z.removeEventListener("select",m),Z.removeEventListener("selectstart",m),Z.removeEventListener("selectend",m),Z.removeEventListener("squeeze",m),Z.removeEventListener("squeezestart",m),Z.removeEventListener("squeezeend",m),Z.removeEventListener("end",r),Z.removeEventListener("inputsourceschange",d);for(let s=0;s<L.length;s++){let G0=z[s];if(G0===null)continue;z[s]=null,L[s].disconnect(G0)}o=null,S=null,k.reset();for(let s in O)delete O[s];if(J.setRenderTarget(P),G=null,E=null,N=null,Z=null,B=null,a0.stop(),$.isPresenting=!1,J.setPixelRatio(A),J.setSize(_.width,_.height,!1),D!==null){let s=D.camera;s.fov=D.fov,s.zoom=D.zoom,s.updateProjectionMatrix(),D=null}$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(s){if(W=s,$.isPresenting===!0)y0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(s){if(H=s,$.isPresenting===!0)y0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return X||K},this.setReferenceSpace=function(s){X=s},this.getBaseLayer=function(){return E!==null?E:G},this.getBinding=function(){if(N===null&&R)N=new XRWebGLBinding(Z,Q);return N},this.getFrame=function(){return q},this.getSession=function(){return Z},this.setSession=async function(s){if(Z=s,Z!==null){if(P=J.getRenderTarget(),Z.addEventListener("select",m),Z.addEventListener("selectstart",m),Z.addEventListener("selectend",m),Z.addEventListener("squeeze",m),Z.addEventListener("squeezestart",m),Z.addEventListener("squeezeend",m),Z.addEventListener("end",r),Z.addEventListener("inputsourceschange",d),F.xrCompatible!==!0)await Q.makeXRCompatible();if(A=J.getPixelRatio(),J.getSize(_),!(R&&("createProjectionLayer"in XRWebGLBinding.prototype))){let U0={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:W};G=new XRWebGLLayer(Z,Q,U0),Z.updateRenderState({baseLayer:G}),J.setPixelRatio(1),J.setSize(G.framebufferWidth,G.framebufferHeight,!1),B=new O9(G.framebufferWidth,G.framebufferHeight,{format:i9,type:x9,colorSpace:J.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1,storeMultisampledDepthBuffer:G.ignoreDepthValues===!1,storeMultisampledStencilBuffer:G.ignoreDepthValues===!1})}else{let U0=null,f0=null,x0=null;if(F.depth)x0=F.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,U0=F.stencil?r8:a8,f0=F.stencil?b7:_8;let h0={colorFormat:Q.RGBA8,depthFormat:x0,scaleFactor:W};N=this.getBinding(),E=N.createProjectionLayer(h0),Z.updateRenderState({layers:[E]}),J.setPixelRatio(1),J.setSize(E.textureWidth,E.textureHeight,!1),B=new O9(E.textureWidth,E.textureHeight,{format:i9,type:x9,depthTexture:new J7(E.textureWidth,E.textureHeight,f0,void 0,void 0,void 0,void 0,void 0,void 0,U0),stencilBuffer:F.stencil,colorSpace:J.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(Y),X=null,K=await Z.requestReferenceSpace(H),a0.setContext(Z),a0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return k.getDepthTexture()};function d(s){for(let G0=0;G0<s.removed.length;G0++){let U0=s.removed[G0],f0=z.indexOf(U0);if(f0>=0)z[f0]=null,L[f0].disconnect(U0)}for(let G0=0;G0<s.added.length;G0++){let U0=s.added[G0],f0=z.indexOf(U0);if(f0===-1){for(let h0=0;h0<L.length;h0++)if(h0>=z.length){z.push(U0),f0=h0;break}else if(z[h0]===null){z[h0]=U0,f0=h0;break}if(f0===-1)break}let x0=L[f0];if(x0)x0.connect(U0)}}let X0=new w,n=new w;function t(s,G0,U0){X0.setFromMatrixPosition(G0.matrixWorld),n.setFromMatrixPosition(U0.matrixWorld);let f0=X0.distanceTo(n),x0=G0.projectionMatrix.elements,h0=U0.projectionMatrix.elements,jJ=x0[14]/(x0[10]-1),JJ=x0[14]/(x0[10]+1),WJ=(x0[9]+1)/x0[5],NJ=(x0[9]-1)/x0[5],KJ=(x0[8]-1)/x0[0],mJ=(h0[8]+1)/h0[0],zJ=jJ*KJ,oJ=jJ*mJ,hJ=f0/(-KJ+mJ),IJ=hJ*-KJ;if(G0.matrixWorld.decompose(s.position,s.quaternion,s.scale),s.translateX(IJ),s.translateZ(hJ),s.matrixWorld.compose(s.position,s.quaternion,s.scale),s.matrixWorldInverse.copy(s.matrixWorld).invert(),x0[10]===-1)s.projectionMatrix.copy(G0.projectionMatrix),s.projectionMatrixInverse.copy(G0.projectionMatrixInverse);else{let j=jJ+hJ,dJ=JJ+hJ,r0=zJ-IJ,AJ=oJ+(f0-IJ),C=WJ*JJ/dJ*j,V=NJ*JJ/dJ*j;s.projectionMatrix.makePerspective(r0,AJ,C,V,j,dJ),s.projectionMatrixInverse.copy(s.projectionMatrix).invert()}}function Z0(s,G0){if(G0===null)s.matrixWorld.copy(s.matrix);else s.matrixWorld.multiplyMatrices(G0.matrixWorld,s.matrix);s.matrixWorldInverse.copy(s.matrixWorld).invert()}this.updateCamera=function(s){if(Z===null)return;let{near:G0,far:U0}=s;if(k.texture!==null){if(k.depthNear>0)G0=k.depthNear;if(k.depthFar>0)U0=k.depthFar}if(b.near=p.near=I.near=G0,b.far=p.far=I.far=U0,o!==b.near||S!==b.far)Z.updateRenderState({depthNear:b.near,depthFar:b.far}),o=b.near,S=b.far;b.layers.mask=s.layers.mask|6,I.layers.mask=b.layers.mask&-5,p.layers.mask=b.layers.mask&-3;let f0=s.parent,x0=b.cameras;Z0(b,f0);for(let h0=0;h0<x0.length;h0++)Z0(x0[h0],f0);if(x0.length===2)t(b,I,p);else b.projectionMatrix.copy(I.projectionMatrix);if(D===null&&s.isPerspectiveCamera)D={camera:s,fov:s.fov,zoom:s.zoom};l0(s,b,f0)};function l0(s,G0,U0){if(U0===null)s.matrix.copy(G0.matrixWorld);else s.matrix.copy(U0.matrixWorld),s.matrix.invert(),s.matrix.multiply(G0.matrixWorld);if(s.matrix.decompose(s.position,s.quaternion,s.scale),s.updateMatrixWorld(!0),s.projectionMatrix.copy(G0.projectionMatrix),s.projectionMatrixInverse.copy(G0.projectionMatrixInverse),s.isPerspectiveCamera)s.fov=n8*2*Math.atan(1/s.projectionMatrix.elements[5]),s.zoom=1}this.getCamera=function(){return b},this.getFoveation=function(){if(E===null&&G===null)return;return Y},this.setFoveation=function(s){if(Y=s,E!==null)E.fixedFoveation=s;if(G!==null&&G.fixedFoveation!==void 0)G.fixedFoveation=s},this.hasDepthSensing=function(){return k.texture!==null},this.getDepthSensingMesh=function(){return k.getMesh(b)},this.getCameraTexture=function(s){return O[s]};let _0=null;function VJ(s,G0){if(U=G0.getViewerPose(X||K),q=G0,U!==null){let U0=U.views;if(G!==null)J.setRenderTargetFramebuffer(B,G.framebuffer),J.setRenderTarget(B);let f0=!1;if(U0.length!==b.cameras.length)b.cameras.length=0,f0=!0;for(let JJ=0;JJ<U0.length;JJ++){let WJ=U0[JJ],NJ=null;if(G!==null)NJ=G.getViewport(WJ);else{let mJ=N.getViewSubImage(E,WJ);if(NJ=mJ.viewport,JJ===0)J.setRenderTargetTextures(B,mJ.colorTexture,mJ.depthStencilTexture),J.setRenderTarget(B)}let KJ=v[JJ];if(KJ===void 0)KJ=new uJ,KJ.layers.enable(JJ),KJ.viewport=new DJ,v[JJ]=KJ;if(KJ.matrix.fromArray(WJ.transform.matrix),KJ.matrix.decompose(KJ.position,KJ.quaternion,KJ.scale),KJ.projectionMatrix.fromArray(WJ.projectionMatrix),KJ.projectionMatrixInverse.copy(KJ.projectionMatrix).invert(),KJ.viewport.set(NJ.x,NJ.y,NJ.width,NJ.height),JJ===0)b.matrix.copy(KJ.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale);if(f0===!0)b.cameras.push(KJ)}let x0=Z.enabledFeatures;if(x0&&x0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&R){N=$.getBinding();let JJ=N.getDepthInformation(U0[0]);if(JJ&&JJ.isValid&&JJ.texture)k.init(JJ,Z.renderState)}if(x0&&x0.includes("camera-access")&&R){J.state.unbindTexture(),N=$.getBinding();for(let JJ=0;JJ<U0.length;JJ++){let WJ=U0[JJ].camera;if(WJ){let NJ=O[WJ];if(!NJ)NJ=new J$,O[WJ]=NJ;let KJ=N.getCameraImage(WJ);NJ.sourceTexture=KJ}}}}for(let U0=0;U0<L.length;U0++){let f0=z[U0],x0=L[U0];if(f0!==null&&x0!==void 0)x0.update(f0,G0,X||K)}if(_0)_0(s,G0);if(G0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:G0});q=null}let a0=new IY;a0.setAnimationLoop(VJ),this.setAnimationLoop=function(s){_0=s},this.dispose=function(){}}}var nq=new n0,gY=new s0;gY.set(-1,0,0,0,1,0,0,0,1);function sq(J,Q){function $(O,F){if(O.matrixAutoUpdate===!0)O.updateMatrix();F.value.copy(O.matrix)}function Z(O,F){if(F.color.getRGB(O.fogColor.value,GW(J)),F.isFog)O.fogNear.value=F.near,O.fogFar.value=F.far;else if(F.isFogExp2)O.fogDensity.value=F.density}function W(O,F,P,B,L){if(F.isNodeMaterial)F.uniformsNeedUpdate=!1;else if(F.isMeshBasicMaterial)K(O,F);else if(F.isMeshLambertMaterial){if(K(O,F),F.envMap)O.envMapIntensity.value=F.envMapIntensity}else if(F.isMeshToonMaterial)K(O,F),E(O,F);else if(F.isMeshPhongMaterial){if(K(O,F),N(O,F),F.envMap)O.envMapIntensity.value=F.envMapIntensity}else if(F.isMeshStandardMaterial){if(K(O,F),G(O,F),F.isMeshPhysicalMaterial)q(O,F,L)}else if(F.isMeshMatcapMaterial)K(O,F),R(O,F);else if(F.isMeshDepthMaterial)K(O,F);else if(F.isMeshDistanceMaterial)K(O,F),k(O,F);else if(F.isMeshNormalMaterial)K(O,F);else if(F.isLineBasicMaterial){if(H(O,F),F.isLineDashedMaterial)Y(O,F)}else if(F.isPointsMaterial)X(O,F,P,B);else if(F.isSpriteMaterial)U(O,F);else if(F.isShadowMaterial)O.color.value.copy(F.color),O.opacity.value=F.opacity;else if(F.isShaderMaterial)F.uniformsNeedUpdate=!1}function K(O,F){if(O.opacity.value=F.opacity,F.color)O.diffuse.value.copy(F.color);if(F.emissive)O.emissive.value.copy(F.emissive).multiplyScalar(F.emissiveIntensity);if(F.map)O.map.value=F.map,$(F.map,O.mapTransform);if(F.alphaMap)O.alphaMap.value=F.alphaMap,$(F.alphaMap,O.alphaMapTransform);if(F.bumpMap){if(O.bumpMap.value=F.bumpMap,$(F.bumpMap,O.bumpMapTransform),O.bumpScale.value=F.bumpScale,F.side===$9)O.bumpScale.value*=-1}if(F.normalMap){if(O.normalMap.value=F.normalMap,$(F.normalMap,O.normalMapTransform),O.normalScale.value.copy(F.normalScale),F.side===$9)O.normalScale.value.negate()}if(F.displacementMap)O.displacementMap.value=F.displacementMap,$(F.displacementMap,O.displacementMapTransform),O.displacementScale.value=F.displacementScale,O.displacementBias.value=F.displacementBias;if(F.emissiveMap)O.emissiveMap.value=F.emissiveMap,$(F.emissiveMap,O.emissiveMapTransform);if(F.specularMap)O.specularMap.value=F.specularMap,$(F.specularMap,O.specularMapTransform);if(F.alphaTest>0)O.alphaTest.value=F.alphaTest;let P=Q.get(F),B=P.envMap,L=P.envMapRotation;if(B){if(O.envMap.value=B,O.envMapRotation.value.setFromMatrix4(nq.makeRotationFromEuler(L)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1)O.envMapRotation.value.premultiply(gY);O.reflectivity.value=F.reflectivity,O.ior.value=F.ior,O.refractionRatio.value=F.refractionRatio}if(F.lightMap)O.lightMap.value=F.lightMap,O.lightMapIntensity.value=F.lightMapIntensity,$(F.lightMap,O.lightMapTransform);if(F.aoMap)O.aoMap.value=F.aoMap,O.aoMapIntensity.value=F.aoMapIntensity,$(F.aoMap,O.aoMapTransform)}function H(O,F){if(O.diffuse.value.copy(F.color),O.opacity.value=F.opacity,F.map)O.map.value=F.map,$(F.map,O.mapTransform)}function Y(O,F){O.dashSize.value=F.dashSize,O.totalSize.value=F.dashSize+F.gapSize,O.scale.value=F.scale}function X(O,F,P,B){if(O.diffuse.value.copy(F.color),O.opacity.value=F.opacity,O.size.value=F.size*P,O.scale.value=B*0.5,F.map)O.map.value=F.map,$(F.map,O.uvTransform);if(F.alphaMap)O.alphaMap.value=F.alphaMap,$(F.alphaMap,O.alphaMapTransform);if(F.alphaTest>0)O.alphaTest.value=F.alphaTest}function U(O,F){if(O.diffuse.value.copy(F.color),O.opacity.value=F.opacity,O.rotation.value=F.rotation,F.map)O.map.value=F.map,$(F.map,O.mapTransform);if(F.alphaMap)O.alphaMap.value=F.alphaMap,$(F.alphaMap,O.alphaMapTransform);if(F.alphaTest>0)O.alphaTest.value=F.alphaTest}function N(O,F){O.specular.value.copy(F.specular),O.shininess.value=Math.max(F.shininess,0.0001)}function E(O,F){if(F.gradientMap)O.gradientMap.value=F.gradientMap}function G(O,F){if(O.metalness.value=F.metalness,F.metalnessMap)O.metalnessMap.value=F.metalnessMap,$(F.metalnessMap,O.metalnessMapTransform);if(O.roughness.value=F.roughness,F.roughnessMap)O.roughnessMap.value=F.roughnessMap,$(F.roughnessMap,O.roughnessMapTransform);if(F.envMap)O.envMapIntensity.value=F.envMapIntensity}function q(O,F,P){if(O.ior.value=F.ior,F.sheen>0){if(O.sheenColor.value.copy(F.sheenColor).multiplyScalar(F.sheen),O.sheenRoughness.value=F.sheenRoughness,F.sheenColorMap)O.sheenColorMap.value=F.sheenColorMap,$(F.sheenColorMap,O.sheenColorMapTransform);if(F.sheenRoughnessMap)O.sheenRoughnessMap.value=F.sheenRoughnessMap,$(F.sheenRoughnessMap,O.sheenRoughnessMapTransform)}if(F.clearcoat>0){if(O.clearcoat.value=F.clearcoat,O.clearcoatRoughness.value=F.clearcoatRoughness,F.clearcoatMap)O.clearcoatMap.value=F.clearcoatMap,$(F.clearcoatMap,O.clearcoatMapTransform);if(F.clearcoatRoughnessMap)O.clearcoatRoughnessMap.value=F.clearcoatRoughnessMap,$(F.clearcoatRoughnessMap,O.clearcoatRoughnessMapTransform);if(F.clearcoatNormalMap){if(O.clearcoatNormalMap.value=F.clearcoatNormalMap,$(F.clearcoatNormalMap,O.clearcoatNormalMapTransform),O.clearcoatNormalScale.value.copy(F.clearcoatNormalScale),F.side===$9)O.clearcoatNormalScale.value.negate()}}if(F.dispersion>0)O.dispersion.value=F.dispersion;if(F.retroreflectivity>0)O.retroreflectivity.value=F.retroreflectivity;if(F.iridescence>0){if(O.iridescence.value=F.iridescence,O.iridescenceIOR.value=F.iridescenceIOR,O.iridescenceThicknessMinimum.value=F.iridescenceThicknessRange[0],O.iridescenceThicknessMaximum.value=F.iridescenceThicknessRange[1],F.iridescenceMap)O.iridescenceMap.value=F.iridescenceMap,$(F.iridescenceMap,O.iridescenceMapTransform);if(F.iridescenceThicknessMap)O.iridescenceThicknessMap.value=F.iridescenceThicknessMap,$(F.iridescenceThicknessMap,O.iridescenceThicknessMapTransform)}if(F.transmission>0){if(O.transmission.value=F.transmission,O.transmissionSamplerMap.value=P.texture,O.transmissionSamplerSize.value.set(P.width,P.height),F.transmissionMap)O.transmissionMap.value=F.transmissionMap,$(F.transmissionMap,O.transmissionMapTransform);if(O.thickness.value=F.thickness,F.thicknessMap)O.thicknessMap.value=F.thicknessMap,$(F.thicknessMap,O.thicknessMapTransform);O.attenuationDistance.value=F.attenuationDistance,O.attenuationColor.value.copy(F.attenuationColor)}if(F.anisotropy>0){if(O.anisotropyVector.value.set(F.anisotropy*Math.cos(F.anisotropyRotation),F.anisotropy*Math.sin(F.anisotropyRotation)),F.anisotropyMap)O.anisotropyMap.value=F.anisotropyMap,$(F.anisotropyMap,O.anisotropyMapTransform)}if(O.specularIntensity.value=F.specularIntensity,O.specularColor.value.copy(F.specularColor),F.specularColorMap)O.specularColorMap.value=F.specularColorMap,$(F.specularColorMap,O.specularColorMapTransform);if(F.specularIntensityMap)O.specularIntensityMap.value=F.specularIntensityMap,$(F.specularIntensityMap,O.specularIntensityMapTransform)}function R(O,F){if(F.matcap)O.matcap.value=F.matcap}function k(O,F){let P=Q.get(F).light;O.referencePosition.value.setFromMatrixPosition(P.matrixWorld),O.nearDistance.value=P.shadow.camera.near,O.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:W}}function iq(J,Q,$,Z){let W={},K={},H=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function X(L,z){let _=z.program;Z.uniformBlockBinding(L,_)}function U(L,z){let _=W[L.id];if(_===void 0)O(L),_=N(L),W[L.id]=_,L.addEventListener("dispose",P);let A=z.program;Z.updateUBOMapping(L,A);let D=Q.render.frame;if(K[L.id]!==D)G(L),K[L.id]=D}function N(L){let z=E();L.__bindingPointIndex=z;let _=J.createBuffer(),A=L.__size,D=L.usage;return J.bindBuffer(J.UNIFORM_BUFFER,_),J.bufferData(J.UNIFORM_BUFFER,A,D),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,z,_),_}function E(){for(let L=0;L<Y;L++)if(H.indexOf(L)===-1)return H.push(L),L;return u0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function G(L){let z=W[L.id],_=L.uniforms,A=L.__cache;J.bindBuffer(J.UNIFORM_BUFFER,z);for(let D=0,I=_.length;D<I;D++){let p=_[D];if(Array.isArray(p))for(let v=0,b=p.length;v<b;v++)q(p[v],D,v,A);else q(p,D,0,A)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function q(L,z,_,A){if(k(L,z,_,A)===!0){let{__offset:D,value:I}=L;if(Array.isArray(I)){let p=0;for(let v=0;v<I.length;v++){let b=I[v],o=F(b);if(R(b,L.__data,p),typeof b!=="number"&&typeof b!=="boolean"&&!b.isMatrix3&&!ArrayBuffer.isView(b))p+=o.storage/Float32Array.BYTES_PER_ELEMENT}}else R(I,L.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,D,L.__data)}}function R(L,z,_){if(typeof L==="number"||typeof L==="boolean")z[0]=L;else if(L.isMatrix3)z[0]=L.elements[0],z[1]=L.elements[1],z[2]=L.elements[2],z[3]=0,z[4]=L.elements[3],z[5]=L.elements[4],z[6]=L.elements[5],z[7]=0,z[8]=L.elements[6],z[9]=L.elements[7],z[10]=L.elements[8],z[11]=0;else if(ArrayBuffer.isView(L))z.set(new L.constructor(L.buffer,L.byteOffset,z.length));else L.toArray(z,_)}function k(L,z,_,A){let D=L.value,I=z+"_"+_;if(A[I]===void 0){if(typeof D==="number"||typeof D==="boolean")A[I]=D;else if(ArrayBuffer.isView(D))A[I]=D.slice();else A[I]=D.clone();return!0}else{let p=A[I];if(typeof D==="number"||typeof D==="boolean"){if(p!==D)return A[I]=D,!0}else if(ArrayBuffer.isView(D))return!0;else if(p.equals(D)===!1)return p.copy(D),!0}return!1}function O(L){let z=L.uniforms,_=0,A=16;for(let I=0,p=z.length;I<p;I++){let v=Array.isArray(z[I])?z[I]:[z[I]];for(let b=0,o=v.length;b<o;b++){let S=v[b],m=Array.isArray(S.value)?S.value:[S.value];for(let r=0,d=m.length;r<d;r++){let X0=m[r],n=F(X0),t=_%A,Z0=t%n.boundary,l0=t+Z0;if(_+=Z0,l0!==0&&A-l0<n.storage)_+=A-l0;S.__data=new Float32Array(n.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=_,_+=n.storage}}}let D=_%A;if(D>0)_+=A-D;return L.__size=_,L.__cache={},this}function F(L){let z={boundary:0,storage:0};if(typeof L==="number"||typeof L==="boolean")z.boundary=4,z.storage=4;else if(L.isVector2)z.boundary=8,z.storage=8;else if(L.isVector3||L.isColor)z.boundary=16,z.storage=12;else if(L.isVector4)z.boundary=16,z.storage=16;else if(L.isMatrix3)z.boundary=48,z.storage=48;else if(L.isMatrix4)z.boundary=64,z.storage=64;else if(L.isTexture)y0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(L))z.boundary=16,z.storage=L.byteLength;else y0("WebGLRenderer: Unsupported uniform value type.",L);return z}function P(L){let z=L.target;z.removeEventListener("dispose",P);let _=H.indexOf(z.__bindingPointIndex);H.splice(_,1),J.deleteBuffer(W[z.id]),delete W[z.id],delete K[z.id]}function B(){for(let L in W)J.deleteBuffer(W[L]);H=[],W={},K={}}return{bind:X,update:U,dispose:B}}var oq=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),a9=null;function aq(){if(a9===null)a9=new _6(oq,16,16,t8,s9),a9.name="DFG_LUT",a9.minFilter=rJ,a9.magFilter=rJ,a9.wrapS=f7,a9.wrapT=f7,a9.generateMipmaps=!1,a9.needsUpdate=!0;return a9}class bW{constructor(J={}){let{canvas:Q=lH(),context:$=null,depth:Z=!0,stencil:W=!1,alpha:K=!1,antialias:H=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:X=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:N=!1,reversedDepthBuffer:E=!1,outputBufferType:G=x9}=J;this.isWebGLRenderer=!0;let q;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");q=$.getContextAttributes().alpha}else q=K;let R=G,k=new Set([RZ,OZ,FZ]),O=new Set([x9,_8,D6,b7,EZ,qZ]),F=new Uint32Array(4),P=new Int32Array(4),B=new w,L=null,z=null,_=[],A=[],D=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=h9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,p=!1,v=null,b=null,o=null,S=null;this._outputColorSpace=g9;let m=0,r=0,d=null,X0=-1,n=null,t=new DJ,Z0=new DJ,l0=null,_0=new b0(0),VJ=0,a0=Q.width,s=Q.height,G0=1,U0=null,f0=null,x0=new DJ(0,0,a0,s),h0=new DJ(0,0,a0,s),jJ=!1,JJ=new w6,WJ=!1,NJ=!1,KJ=new n0,mJ=new w,zJ=new DJ,oJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},hJ=!1;function IJ(){return d===null?G0:1}let j=$;function dJ(M,h){return Q.getContext(M,h)}let r0,AJ,C,V,y,l,$0,N0,R0,c,a,k0,S0,L0,W0,j0,g0,YJ,f,q0,i,F0,M0;try{let M={alpha:!0,depth:Z,stencil:W,antialias:H,premultipliedAlpha:Y,preserveDrawingBuffer:X,powerPreference:U,failIfMajorPerformanceCaveat:N};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${iK}`);if(Q.addEventListener("webglcontextlost",m0,!1),Q.addEventListener("webglcontextrestored",FJ,!1),Q.addEventListener("webglcontextcreationerror",UJ,!1),j===null){if(j=dJ("webgl2",M),j===null)if(dJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}J0()}catch(M){throw Q.removeEventListener("webglcontextlost",m0,!1),Q.removeEventListener("webglcontextrestored",FJ,!1),Q.removeEventListener("webglcontextcreationerror",UJ,!1),u0("WebGLRenderer: "+M.message),M}function J0(){if(r0=new ZE(j),r0.init(),i=new dq(j,r0),AJ=new sN(j,r0,J,i),C=new lq(j,r0),AJ.reversedDepthBuffer&&E)C.buffers.depth.setReversed(!0);b=j.createFramebuffer(),o=j.createFramebuffer(),S=j.createFramebuffer(),V=new HE(j),y=new _q,l=new mq(j,r0,C,y,AJ,i,V),$0=new $E(I),N0=new X5(j),F0=new cN(j,N0),R0=new WE(j,N0,V,F0),c=new XE(j,R0,N0,F0,V),YJ=new YE(j,AJ,l),W0=new iN(y),a=new Iq(I,$0,r0,AJ,F0,W0),k0=new sq(I,y),S0=new wq,L0=new fq(r0),g0=new uN(I,$0,C,c,q,Y),j0=new pq(I,c,AJ),M0=new iq(j,V,AJ,C),f=new nN(j,r0,V),q0=new KE(j,r0,V),V.programs=a.programs,I.capabilities=AJ,I.extensions=r0,I.properties=y,I.renderLists=S0,I.shadowMap=j0,I.state=C,I.info=V}if(R!==x9)D=new GE(R,Q.width,Q.height,H,Z,W);let O0=new xY(I,j);this.xr=O0,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let M=r0.get("WEBGL_lose_context");if(M)M.loseContext()},this.forceContextRestore=function(){let M=r0.get("WEBGL_lose_context");if(M)M.restoreContext()},this.getPixelRatio=function(){return G0},this.setPixelRatio=function(M){if(M===void 0)return;G0=M,this.setSize(a0,s,!1)},this.getSize=function(M){return M.set(a0,s)},this.setSize=function(M,h,u=!0){if(O0.isPresenting){y0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(a0=M,s=h,Q.width=Math.floor(M*G0),Q.height=Math.floor(h*G0),u===!0)Q.style.width=M+"px",Q.style.height=h+"px";if(D!==null)D.setSize(Q.width,Q.height);this.setViewport(0,0,M,h)},this.getDrawingBufferSize=function(M){return M.set(a0*G0,s*G0).floor()},this.setDrawingBufferSize=function(M,h,u){a0=M,s=h,G0=u,Q.width=Math.floor(M*u),Q.height=Math.floor(h*u),this.setViewport(0,0,M,h)},this.setEffects=function(M){if(R===x9){u0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let h=0;h<M.length;h++)if(M[h].isOutputPass===!0){y0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(t)},this.getViewport=function(M){return M.copy(x0)},this.setViewport=function(M,h,u,x){if(M.isVector4)x0.set(M.x,M.y,M.z,M.w);else x0.set(M,h,u,x);C.viewport(t.copy(x0).multiplyScalar(G0).round())},this.getScissor=function(M){return M.copy(h0)},this.setScissor=function(M,h,u,x){if(M.isVector4)h0.set(M.x,M.y,M.z,M.w);else h0.set(M,h,u,x);C.scissor(Z0.copy(h0).multiplyScalar(G0).round())},this.getScissorTest=function(){return jJ},this.setScissorTest=function(M){C.setScissorTest(jJ=M)},this.setOpaqueSort=function(M){U0=M},this.setTransparentSort=function(M){f0=M},this.getClearColor=function(M){return M.copy(g0.getClearColor())},this.setClearColor=function(){g0.setClearColor(...arguments)},this.getClearAlpha=function(){return g0.getClearAlpha()},this.setClearAlpha=function(){g0.setClearAlpha(...arguments)},this.clear=function(M=!0,h=!0,u=!0){let x=0;if(M){let g=!1;if(d!==null){let B0=d.texture.format;g=k.has(B0)}if(g){let B0=d.texture.type,I0=O.has(B0),D0=g0.getClearColor(),A0=g0.getClearAlpha(),v0=D0.r,t0=D0.g,HJ=D0.b;if(I0)F[0]=v0,F[1]=t0,F[2]=HJ,F[3]=A0,j.clearBufferuiv(j.COLOR,0,F);else P[0]=v0,P[1]=t0,P[2]=HJ,P[3]=A0,j.clearBufferiv(j.COLOR,0,P)}else x|=j.COLOR_BUFFER_BIT}if(h)x|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(u)x|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(x!==0)j.clear(x)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),v=M},this.dispose=function(){Q.removeEventListener("webglcontextlost",m0,!1),Q.removeEventListener("webglcontextrestored",FJ,!1),Q.removeEventListener("webglcontextcreationerror",UJ,!1),g0.dispose(),S0.dispose(),L0.dispose(),y.dispose(),$0.dispose(),c.dispose(),F0.dispose(),M0.dispose(),a.dispose(),O0.dispose(),O0.removeEventListener("sessionstart",Q0),O0.removeEventListener("sessionend",E0),e.stop()};function m0(M){M.preventDefault(),E6("WebGLRenderer: Context Lost."),p=!0}function FJ(){E6("WebGLRenderer: Context Restored."),p=!1;let M=V.autoReset,h=j0.enabled,u=j0.autoUpdate,x=j0.needsUpdate,g=j0.type;J0(),V.autoReset=M,j0.enabled=h,j0.autoUpdate=u,j0.needsUpdate=x,j0.type=g}function UJ(M){u0("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function N9(M){let h=M.target;h.removeEventListener("dispose",N9),k9(h)}function k9(M){t6(M),y.remove(M)}function t6(M){let h=y.get(M).programs;if(h!==void 0){if(h.forEach(function(u){a.releaseProgram(u)}),M.isShaderMaterial)a.releaseShaderCache(M)}}this.renderBufferDirect=function(M,h,u,x,g,B0){if(h===null)h=oJ;let I0=g.isMesh&&g.matrixWorld.determinantAffine()<0,D0=D9(M,h,u,x,g);C.setMaterial(x,I0);let A0=u.index,v0=1;if(x.wireframe===!0){if(A0=R0.getWireframeAttribute(u),A0===void 0)return;v0=2}let t0=u.drawRange,HJ=u.attributes.position,w0=t0.start*v0,OJ=(t0.start+t0.count)*v0;if(B0!==null)w0=Math.max(w0,B0.start*v0),OJ=Math.min(OJ,(B0.start+B0.count)*v0);if(A0!==null)w0=Math.max(w0,0),OJ=Math.min(OJ,A0.count);else if(HJ!==void 0&&HJ!==null)w0=Math.max(w0,0),OJ=Math.min(OJ,HJ.count);let pJ=OJ-w0;if(pJ<0||pJ===1/0)return;F0.setup(g,x,D0,u,A0);let wJ,CJ=f;if(A0!==null)wJ=N0.get(A0),CJ=q0,CJ.setIndex(wJ);if(g.isMesh)if(x.wireframe===!0)C.setLineWidth(x.wireframeLinewidth*IJ()),CJ.setMode(j.LINES);else CJ.setMode(j.TRIANGLES);else if(g.isLine){let eJ=x.linewidth;if(eJ===void 0)eJ=1;if(C.setLineWidth(eJ*IJ()),g.isLineSegments)CJ.setMode(j.LINES);else if(g.isLineLoop)CJ.setMode(j.LINE_LOOP);else CJ.setMode(j.LINE_STRIP)}else if(g.isPoints)CJ.setMode(j.POINTS);else if(g.isSprite)CJ.setMode(j.TRIANGLES);if(g.isBatchedMesh)if(!r0.get("WEBGL_multi_draw")){let{_multiDrawStarts:eJ,_multiDrawCounts:P0,_multiDrawCount:K9}=g,GJ=A0?N0.get(A0).bytesPerElement:1,M9=y.get(x).currentProgram.getUniforms();for(let m9=0;m9<K9;m9++)M9.setValue(j,"_gl_DrawID",m9),CJ.render(eJ[m9]/GJ,P0[m9])}else CJ.renderMultiDraw(g._multiDrawStarts,g._multiDrawCounts,g._multiDrawCount);else if(g.isInstancedMesh)CJ.renderInstances(w0,pJ,g.count);else if(u.isInstancedBufferGeometry){let eJ=u._maxInstanceCount!==void 0?u._maxInstanceCount:1/0,P0=Math.min(u.instanceCount,eJ);CJ.renderInstances(w0,pJ,P0)}else CJ.render(w0,pJ)};function t7(M,h,u,x){if(v!==null&&M.isNodeMaterial)v.setObject(x,M);if(WJ===!0)W0.setState(M,u,!1);if(M.transparent===!0&&M.side===Y9&&M.forceSinglePass===!1)M.side=$9,M.needsUpdate=!0,i0(M,h,x),M.side=P8,M.needsUpdate=!0,i0(M,h,x),M.side=Y9;else i0(M,h,x)}this.compile=function(M,h,u=null){if(u===null)u=M;if(v!==null)v.renderStart(M,h,u);if(z=L0.get(u),z.init(h),A.push(z),u.traverseVisible(function(g){if(g.isLight&&g.layers.test(h.layers)){if(z.pushLight(g),g.castShadow)z.pushShadow(g)}}),M!==u)M.traverseVisible(function(g){if(g.isLight&&g.layers.test(h.layers)){if(z.pushLight(g),g.castShadow)z.pushShadow(g)}});if(z.setupLights(),v!==null)v.updateLights(z.state.lightsArray);if(NJ=this.localClippingEnabled,WJ=W0.init(this.clippingPlanes,NJ),WJ===!0)W0.setGlobalState(this.clippingPlanes,h);if(v!==null)j0.render(z.state.shadowsArray,u,h);let x=new Set;if(M.traverse(function(g){if(!(g.isMesh||g.isPoints||g.isLine||g.isSprite))return;let B0=g.material;if(B0)if(Array.isArray(B0))for(let I0=0;I0<B0.length;I0++){let D0=B0[I0];t7(D0,u,h,g),x.add(D0)}else t7(B0,u,h,g),x.add(B0)}),z=A.pop(),v!==null)v.renderEnd();return x},this.compileAsync=function(M,h,u=null){let x=this.compile(M,h,u);return new Promise((g)=>{function B0(){if(x.forEach(function(I0){let A0=y.get(I0).currentProgram;if(A0===void 0||A0.isReady())x.delete(I0)}),x.size===0){g(M);return}setTimeout(B0,10)}if(r0.get("KHR_parallel_shader_compile")!==null)B0();else setTimeout(B0,10)})};let U7=null;function T(M){if(U7)U7(M)}function Q0(){e.stop()}function E0(){e.start()}let e=new IY;if(e.setAnimationLoop(T),typeof self<"u")e.setContext(self);this.setAnimationLoop=function(M){U7=M,O0.setAnimationLoop(M),M===null?e.stop():e.start()},O0.addEventListener("sessionstart",Q0),O0.addEventListener("sessionend",E0),this.render=function(M,h){if(h!==void 0&&h.isCamera!==!0){u0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;if(v!==null)v.renderStart(M,h);let u=O0.enabled===!0&&O0.isPresenting===!0,x=D!==null&&(d===null||u)&&D.begin(I,d);if(M.matrixWorldAutoUpdate===!0)M.updateMatrixWorld();if(h.parent===null&&h.matrixWorldAutoUpdate===!0)h.updateMatrixWorld();if(O0.enabled===!0&&O0.isPresenting===!0&&(D===null||D.isCompositing()===!1)){if(O0.cameraAutoUpdate===!0)O0.updateCamera(h);h=O0.getCamera()}if(M.isScene===!0)M.onBeforeRender(I,M,h,d);if(z=L0.get(M,A.length),z.init(h),z.state.textureUnits=l.getTextureUnits(),A.push(z),KJ.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse),JJ.setFromProjectionMatrix(KJ,tZ,h.reversedDepth),NJ=this.localClippingEnabled,WJ=W0.init(this.clippingPlanes,NJ),L=S0.get(M,_.length),L.init(),_.push(L),O0.enabled===!0&&O0.isPresenting===!0){let I0=I.xr.getDepthSensingMesh();if(I0!==null)K0(I0,h,-1/0,I.sortObjects)}if(K0(M,h,0,I.sortObjects),L.finish(),v!==null)v.updateLights(z.state.lightsArray);if(I.sortObjects===!0)L.sort(U0,f0);if(hJ=O0.enabled===!1||O0.isPresenting===!1||O0.hasDepthSensing()===!1,hJ)g0.addToRenderList(L,M);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(WJ===!0)W0.beginShadows();let g=z.state.shadowsArray;if(j0.render(g,M,h),WJ===!0)W0.endShadows();if((x&&D.hasRenderPass())===!1){let{opaque:I0,transmissive:D0}=L;if(z.setupLights(),h.isArrayCamera){let A0=h.cameras;if(D0.length>0)for(let v0=0,t0=A0.length;v0<t0;v0++){let HJ=A0[v0];z0(I0,D0,M,HJ)}if(hJ)g0.render(M);for(let v0=0,t0=A0.length;v0<t0;v0++){let HJ=A0[v0];Y0(L,M,HJ,HJ.viewport)}}else{if(D0.length>0)z0(I0,D0,M,h);if(hJ)g0.render(M);Y0(L,M,h)}}if(d!==null&&r===0)l.updateMultisampleRenderTarget(d),l.updateRenderTargetMipmap(d);if(x)D.end(I);if(M.isScene===!0)M.onAfterRender(I,M,h);if(F0.resetDefaultState(),X0=-1,n=null,A.pop(),A.length>0){if(z=A[A.length-1],l.setTextureUnits(z.state.textureUnits),WJ===!0)W0.setGlobalState(I.clippingPlanes,z.state.camera)}else z=null;if(_.pop(),_.length>0)L=_[_.length-1];else L=null;if(v!==null)v.renderEnd()};function K0(M,h,u,x){if(M.visible===!1)return;if(M.layers.test(h.layers)){if(M.isGroup)u=M.renderOrder;else if(M.isLOD){if(M.autoUpdate===!0)M.update(h)}else if(M.isLightProbeGrid)z.pushLightProbeGrid(M);else if(M.isLight){if(z.pushLight(M),M.castShadow)z.pushShadow(M)}else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(JJ)){if(x)zJ.setFromMatrixPosition(M.matrixWorld).applyMatrix4(KJ);let I0=c.update(M),D0=M.material;if(D0.visible)L.push(M,I0,D0,u,zJ.z,null,h)}}else if(M.isMesh||M.isLine||M.isPoints){if(!M.frustumCulled||M.intersectsFrustum(JJ)){let I0=c.update(M),D0=M.material;if(x){if(M.boundingSphere!==void 0){if(M.boundingSphere===null)M.computeBoundingSphere();zJ.copy(M.boundingSphere.center)}else{if(I0.boundingSphere===null)I0.computeBoundingSphere();zJ.copy(I0.boundingSphere.center)}zJ.applyMatrix4(M.matrixWorld).applyMatrix4(KJ)}if(Array.isArray(D0)){let A0=I0.groups;for(let v0=0,t0=A0.length;v0<t0;v0++){let HJ=A0[v0],w0=D0[HJ.materialIndex];if(w0&&w0.visible)L.push(M,I0,w0,u,zJ.z,HJ,h)}}else if(D0.visible)L.push(M,I0,D0,u,zJ.z,null,h)}}}let B0=M.children;for(let I0=0,D0=B0.length;I0<D0;I0++)K0(B0[I0],h,u,x)}function Y0(M,h,u,x){let{opaque:g,transmissive:B0,transparent:I0}=M;if(z.setupLightsView(u),WJ===!0)W0.setGlobalState(I.clippingPlanes,u);if(x)C.viewport(t.copy(x));if(g.length>0)C0(g,h,u);if(B0.length>0)C0(B0,h,u);if(I0.length>0)C0(I0,h,u);C.buffers.depth.setTest(!0),C.buffers.depth.setMask(!0),C.buffers.color.setMask(!0),C.setPolygonOffset(!1)}function z0(M,h,u,x){if((u.isScene===!0?u.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[x.id]===void 0){let w0=r0.has("EXT_color_buffer_half_float")||r0.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[x.id]=new O9(1,1,{generateMipmaps:!0,type:w0?s9:x9,minFilter:n9,samples:Math.max(4,AJ.samples),stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:QJ.workingColorSpace})}let B0=z.state.transmissionRenderTarget[x.id],I0=x.viewport||t;B0.setSize(I0.z*I.transmissionResolutionScale,I0.w*I.transmissionResolutionScale);let D0=I.getRenderTarget(),A0=I.getActiveCubeFace(),v0=I.getActiveMipmapLevel();if(I.setRenderTarget(B0),I.getClearColor(_0),VJ=I.getClearAlpha(),VJ<1)I.setClearColor(16777215,0.5);if(I.clear(),hJ)g0.render(u);let t0=I.toneMapping;I.toneMapping=h9;let HJ=x.viewport;if(x.viewport!==void 0)x.viewport=void 0;if(z.setupLightsView(x),WJ===!0)W0.setGlobalState(I.clippingPlanes,x);if(C0(M,u,x),l.updateMultisampleRenderTarget(B0),l.updateRenderTargetMipmap(B0),r0.has("WEBGL_multisampled_render_to_texture")===!1){let w0=!1;for(let OJ=0,pJ=h.length;OJ<pJ;OJ++){let wJ=h[OJ],{object:CJ,geometry:eJ,material:P0,group:K9}=wJ;if(P0.side===Y9&&CJ.layers.test(x.layers)){let GJ=P0.side;P0.side=$9,P0.needsUpdate=!0,d0(CJ,u,x,eJ,P0,K9),P0.side=GJ,P0.needsUpdate=!0,w0=!0}}if(w0===!0)l.updateMultisampleRenderTarget(B0),l.updateRenderTargetMipmap(B0)}if(I.setRenderTarget(D0,A0,v0),I.setClearColor(_0,VJ),HJ!==void 0)x.viewport=HJ;I.toneMapping=t0}function C0(M,h,u){let x=h.isScene===!0?h.overrideMaterial:null;for(let g=0,B0=M.length;g<B0;g++){let I0=M[g],{object:D0,geometry:A0,group:v0}=I0,t0=I0.material;if(t0.allowOverride===!0&&x!==null)t0=x;if(D0.layers.test(u.layers))d0(D0,h,u,A0,t0,v0)}}function d0(M,h,u,x,g,B0){if(v!==null&&g.isNodeMaterial)v.setObject(M,g);if(M.onBeforeRender(I,h,u,x,g,B0),M.modelViewMatrix.multiplyMatrices(u.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),g.onBeforeRender(I,h,u,x,M,B0),g.transparent===!0&&g.side===Y9&&g.forceSinglePass===!1)g.side=$9,g.needsUpdate=!0,I.renderBufferDirect(u,h,x,g,M,B0),g.side=P8,g.needsUpdate=!0,I.renderBufferDirect(u,h,x,g,M,B0),g.side=Y9;else I.renderBufferDirect(u,h,x,g,M,B0);M.onAfterRender(I,h,u,x,g,B0)}function i0(M,h,u){if(h.isScene!==!0)h=oJ;let x=y.get(M),g=z.state.lights,B0=z.state.shadowsArray,I0=g.state.version,D0=a.getParameters(M,g.state,B0,h,u,z.state.lightProbeGridArray),A0=a.getProgramCacheKey(D0),v0=x.programs;x.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?h.environment:null,x.fog=h.fog;let t0=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;if(x.envMap=$0.get(M.envMap||x.environment,t0),x.envMapRotation=x.environment!==null&&M.envMap===null?h.environmentRotation:M.envMapRotation,v0===void 0)M.addEventListener("dispose",N9),v0=new Map,x.programs=v0;let HJ=v0.get(A0);if(HJ!==void 0){if(x.currentProgram===HJ&&x.lightsStateVersion===I0)return TJ(M,D0),HJ}else{if(D0.uniforms=a.getUniforms(M),v!==null&&M.isNodeMaterial)v.build(M,u,D0);M.onBeforeCompile(D0,I),HJ=a.acquireProgram(D0,A0),v0.set(A0,HJ),x.uniforms=D0.uniforms}let w0=x.uniforms;if(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)w0.clippingPlanes=W0.uniform;if(TJ(M,D0),x.needsLights=B9(M),x.lightsStateVersion=I0,x.needsLights)w0.ambientLightColor.value=g.state.ambient,w0.lightProbe.value=g.state.probe,w0.sunLights.value=g.state.sun,w0.sunLightShadows.value=g.state.sunShadow,w0.directionalLights.value=g.state.directional,w0.directionalLightShadows.value=g.state.directionalShadow,w0.spotLights.value=g.state.spot,w0.spotLightShadows.value=g.state.spotShadow,w0.rectAreaLights.value=g.state.rectArea,w0.ltc_1.value=g.state.rectAreaLTC1,w0.ltc_2.value=g.state.rectAreaLTC2,w0.pointLights.value=g.state.point,w0.pointLightShadows.value=g.state.pointShadow,w0.hemisphereLights.value=g.state.hemi,w0.sunShadowMatrix.value=g.state.sunShadowMatrix,w0.sunShadowCascade.value=g.state.sunShadowCascade,w0.directionalShadowMatrix.value=g.state.directionalShadowMatrix,w0.spotLightMatrix.value=g.state.spotLightMatrix,w0.spotLightMap.value=g.state.spotLightMap,w0.pointShadowMatrix.value=g.state.pointShadowMatrix;return x.lightProbeGrid=z.state.lightProbeGridArray.length>0,x.currentProgram=HJ,x.uniformsList=null,HJ}function c0(M){if(M.uniformsList===null){let h=M.currentProgram.getUniforms();M.uniformsList=c6.seqWithValue(h.seq,M.uniforms)}return M.uniformsList}function TJ(M,h){let u=y.get(M);u.outputColorSpace=h.outputColorSpace,u.batching=h.batching,u.batchingColor=h.batchingColor,u.instancing=h.instancing,u.instancingColor=h.instancingColor,u.instancingMorph=h.instancingMorph,u.skinning=h.skinning,u.morphTargets=h.morphTargets,u.morphNormals=h.morphNormals,u.morphColors=h.morphColors,u.morphTargetsCount=h.morphTargetsCount,u.numClippingPlanes=h.numClippingPlanes,u.numIntersection=h.numClipIntersection,u.vertexAlphas=h.vertexAlphas,u.vertexTangents=h.vertexTangents,u.toneMapping=h.toneMapping}function EJ(M,h){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;B.setFromMatrixPosition(h.matrixWorld);for(let u=0,x=M.length;u<x;u++){let g=M[u];if(g.texture!==null&&g.boundingBox.containsPoint(B))return g}return null}function D9(M,h,u,x,g){if(h.isScene!==!0)h=oJ;l.resetTextureUnits();let B0=h.fog,I0=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?h.environment:null,D0=d===null?I.outputColorSpace:d.isXRRenderTarget===!0?d.texture.colorSpace:QJ.workingColorSpace,A0=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,v0=$0.get(x.envMap||I0,A0),t0=x.vertexColors===!0&&!!u.attributes.color&&u.attributes.color.itemSize===4,HJ=!!u.attributes.tangent&&(!!x.normalMap||x.anisotropy>0),w0=!!u.morphAttributes.position,OJ=!!u.morphAttributes.normal,pJ=!!u.morphAttributes.color,wJ=h9;if(x.toneMapped){if(d===null||d.isXRRenderTarget===!0)wJ=I.toneMapping}let CJ=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,eJ=CJ!==void 0?CJ.length:0,P0=y.get(x),K9=z.state.lights;if(WJ===!0){if(NJ===!0||M!==n){let _J=M===n&&x.id===X0;W0.setState(x,M,_J)}}let GJ=!1;if(x.version===P0.__version){if(P0.needsLights&&P0.lightsStateVersion!==K9.state.version)GJ=!0;else if(P0.outputColorSpace!==D0)GJ=!0;else if(g.isBatchedMesh&&P0.batching===!1)GJ=!0;else if(!g.isBatchedMesh&&P0.batching===!0)GJ=!0;else if(g.isBatchedMesh&&P0.batchingColor===!0&&g._colorsTexture===null)GJ=!0;else if(g.isBatchedMesh&&P0.batchingColor===!1&&g._colorsTexture!==null)GJ=!0;else if(g.isInstancedMesh&&P0.instancing===!1)GJ=!0;else if(!g.isInstancedMesh&&P0.instancing===!0)GJ=!0;else if(g.isSkinnedMesh&&P0.skinning===!1)GJ=!0;else if(!g.isSkinnedMesh&&P0.skinning===!0)GJ=!0;else if(g.isInstancedMesh&&P0.instancingColor===!0&&g.instanceColor===null)GJ=!0;else if(g.isInstancedMesh&&P0.instancingColor===!1&&g.instanceColor!==null)GJ=!0;else if(g.isInstancedMesh&&P0.instancingMorph===!0&&g.morphTexture===null)GJ=!0;else if(g.isInstancedMesh&&P0.instancingMorph===!1&&g.morphTexture!==null)GJ=!0;else if(P0.envMap!==v0)GJ=!0;else if(x.fog===!0&&P0.fog!==B0)GJ=!0;else if(P0.numClippingPlanes!==void 0&&(P0.numClippingPlanes!==W0.numPlanes||P0.numIntersection!==W0.numIntersection))GJ=!0;else if(P0.vertexAlphas!==t0)GJ=!0;else if(P0.vertexTangents!==HJ)GJ=!0;else if(P0.morphTargets!==w0)GJ=!0;else if(P0.morphNormals!==OJ)GJ=!0;else if(P0.morphColors!==pJ)GJ=!0;else if(P0.toneMapping!==wJ)GJ=!0;else if(P0.morphTargetsCount!==eJ)GJ=!0;else if(!!P0.lightProbeGrid!==z.state.lightProbeGridArray.length>0)GJ=!0}else GJ=!0,P0.__version=x.version;let M9=P0.currentProgram;if(GJ===!0){if(M9=i0(x,h,g),v&&x.isNodeMaterial)v.onUpdateProgram(x,M9,P0)}let m9=!1,q8=!1,G7=!1,MJ=M9.getUniforms(),bJ=P0.uniforms;if(C.useProgram(M9.program))m9=!0,q8=!0,G7=!0;if(x.id!==X0)X0=x.id,q8=!0;if(P0.needsLights){let _J=EJ(z.state.lightProbeGridArray,g);if(P0.lightProbeGrid!==_J)P0.lightProbeGrid=_J,q8=!0}if(m9||n!==M){if(C.buffers.depth.getReversed()&&M.reversedDepth!==!0)M._reversedDepth=!0,M.updateProjectionMatrix();MJ.setValue(j,"projectionMatrix",M.projectionMatrix),MJ.setValue(j,"viewMatrix",M.matrixWorldInverse);let O8=MJ.map.cameraPosition;if(O8!==void 0)O8.setValue(j,mJ.setFromMatrixPosition(M.matrixWorld));if(AJ.logarithmicDepthBuffer)MJ.setValue(j,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2));if(x.isMeshPhongMaterial||x.isMeshToonMaterial||x.isMeshLambertMaterial||x.isMeshBasicMaterial||x.isMeshStandardMaterial||x.isShaderMaterial)MJ.setValue(j,"isOrthographic",M.isOrthographicCamera===!0);if(n!==M)n=M,q8=!0,G7=!0}if(P0.needsLights){if(K9.state.sunShadowMap.length>0)MJ.setValue(j,"sunShadowMap",K9.state.sunShadowMap,l);if(K9.state.directionalShadowMap.length>0)MJ.setValue(j,"directionalShadowMap",K9.state.directionalShadowMap,l);if(K9.state.spotShadowMap.length>0)MJ.setValue(j,"spotShadowMap",K9.state.spotShadowMap,l);if(K9.state.pointShadowMap.length>0)MJ.setValue(j,"pointShadowMap",K9.state.pointShadowMap,l)}if(g.isSkinnedMesh){MJ.setOptional(j,g,"bindMatrix"),MJ.setOptional(j,g,"bindMatrixInverse");let _J=g.skeleton;if(_J){if(_J.boneTexture===null)_J.computeBoneTexture();MJ.setValue(j,"boneTexture",_J.boneTexture,l)}}if(g.isBatchedMesh){if(MJ.setOptional(j,g,"batchingTexture"),MJ.setValue(j,"batchingTexture",g._matricesTexture,l),MJ.setOptional(j,g,"batchingIdTexture"),MJ.setValue(j,"batchingIdTexture",g._indirectTexture,l),MJ.setOptional(j,g,"batchingColorTexture"),g._colorsTexture!==null)MJ.setValue(j,"batchingColorTexture",g._colorsTexture,l)}let F8=u.morphAttributes;if(F8.position!==void 0||F8.normal!==void 0||F8.color!==void 0)YJ.update(g,u,M9);if(q8||P0.receiveShadow!==g.receiveShadow)P0.receiveShadow=g.receiveShadow,MJ.setValue(j,"receiveShadow",g.receiveShadow);if((x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial)&&x.envMap===null&&h.environment!==null)bJ.envMapIntensity.value=h.environmentIntensity;if(bJ.dfgLUT!==void 0)bJ.dfgLUT.value=aq();if(q8){if(MJ.setValue(j,"toneMappingExposure",I.toneMappingExposure),P0.needsLights)p8(bJ,G7);if(B0&&x.fog===!0)k0.refreshFogUniforms(bJ,B0);if(k0.refreshMaterialUniforms(bJ,x,G0,s,z.state.transmissionRenderTarget[M.id]),P0.needsLights&&P0.lightProbeGrid){let _J=P0.lightProbeGrid;bJ.probesSH.value=_J.texture,bJ.probesMin.value.copy(_J.boundingBox.min),bJ.probesMax.value.copy(_J.boundingBox.max),bJ.probesResolution.value.copy(_J.resolution)}c6.upload(j,c0(P0),bJ,l)}if(x.isShaderMaterial&&x.uniformsNeedUpdate===!0)c6.upload(j,c0(P0),bJ,l),x.uniformsNeedUpdate=!1;if(x.isSpriteMaterial)MJ.setValue(j,"center",g.center);if(MJ.setValue(j,"modelViewMatrix",g.modelViewMatrix),MJ.setValue(j,"normalMatrix",g.normalMatrix),MJ.setValue(j,"modelMatrix",g.matrixWorld),x.uniformsGroups!==void 0){let _J=x.uniformsGroups;for(let O8=0,N7=_J.length;O8<N7;O8++){let WK=_J[O8];M0.update(WK,M9),M0.bind(WK,M9)}}return M9}function p8(M,h){M.ambientLightColor.needsUpdate=h,M.lightProbe.needsUpdate=h,M.sunLights.needsUpdate=h,M.sunLightShadows.needsUpdate=h,M.directionalLights.needsUpdate=h,M.directionalLightShadows.needsUpdate=h,M.pointLights.needsUpdate=h,M.pointLightShadows.needsUpdate=h,M.spotLights.needsUpdate=h,M.spotLightShadows.needsUpdate=h,M.rectAreaLights.needsUpdate=h,M.hemisphereLights.needsUpdate=h}function B9(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return r},this.getRenderTarget=function(){return d},this.setRenderTargetTextures=function(M,h,u){let x=y.get(M);if(x.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,x.__autoAllocateDepthBuffer===!1)x.__useRenderToTexture=!1;y.get(M.texture).__webglTexture=h,y.get(M.depthTexture).__webglTexture=x.__autoAllocateDepthBuffer?void 0:u,x.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,h){let u=y.get(M);u.__webglFramebuffer=h,u.__useDefaultFramebuffer=h===void 0},this.setRenderTarget=function(M,h=0,u=0){d=M,m=h,r=u;let x=null,g=!1,B0=!1;if(M){let D0=y.get(M);if(D0.__useDefaultFramebuffer!==void 0){C.bindFramebuffer(j.FRAMEBUFFER,D0.__webglFramebuffer),t.copy(M.viewport),Z0.copy(M.scissor),l0=M.scissorTest,C.viewport(t),C.scissor(Z0),C.setScissorTest(l0),X0=-1;return}else if(D0.__webglFramebuffer===void 0)l.setupRenderTarget(M);else if(D0.__hasExternalTextures)l.rebindTextures(M,y.get(M.texture).__webglTexture,y.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let t0=M.depthTexture;if(D0.__boundDepthTexture!==t0){if(t0!==null&&y.has(t0)&&(M.width!==t0.image.width||M.height!==t0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");l.setupDepthRenderbuffer(M)}}let A0=M.texture;if(A0.isData3DTexture||A0.isDataArrayTexture||A0.isCompressedArrayTexture)B0=!0;let v0=y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget){if(Array.isArray(v0[h]))x=v0[h][u];else x=v0[h];g=!0}else if(M.samples>0&&l.useMultisampledRTT(M)===!1)x=y.get(M).__webglMultisampledFramebuffer;else if(Array.isArray(v0))x=v0[u];else x=v0;t.copy(M.viewport),Z0.copy(M.scissor),l0=M.scissorTest}else t.copy(x0).multiplyScalar(G0).floor(),Z0.copy(h0).multiplyScalar(G0).floor(),l0=jJ;if(u!==0)x=b;if(C.bindFramebuffer(j.FRAMEBUFFER,x))C.drawBuffers(M,x);if(C.viewport(t),C.scissor(Z0),C.setScissorTest(l0),g){let D0=y.get(M.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+h,D0.__webglTexture,u)}else if(B0){let D0=h;for(let A0=0;A0<M.textures.length;A0++){let v0=y.get(M.textures[A0]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+A0,v0.__webglTexture,u,D0)}}else if(M!==null&&u!==0){let D0=y.get(M.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,D0.__webglTexture,u)}X0=-1};function E8(M){let h=y.get(M);if(h.__readFormat!==M.format||h.__readType!==M.type)h.__readFormat=M.format,h.__readType=M.type,h.__formatReadable=AJ.textureFormatReadable(M.format),h.__typeReadable=AJ.textureTypeReadable(M.type);return h}if(this.readRenderTargetPixels=function(M,h,u,x,g,B0,I0,D0=0){if(!(M&&M.isWebGLRenderTarget)){u0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let A0=y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&I0!==void 0)A0=A0[I0];if(A0){C.bindFramebuffer(j.FRAMEBUFFER,A0);try{let v0=M.textures[D0],t0=v0.format,HJ=v0.type;if(M.textures.length>1)j.readBuffer(j.COLOR_ATTACHMENT0+D0);let w0=E8(v0);if(w0.__formatReadable===!1){u0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(w0.__typeReadable===!1){u0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(h>=0&&h<=M.width-x&&(u>=0&&u<=M.height-g))j.readPixels(h,u,x,g,i.convert(t0),i.convert(HJ),B0)}finally{let v0=d!==null?y.get(d).__webglFramebuffer:null;C.bindFramebuffer(j.FRAMEBUFFER,v0)}}},this.readRenderTargetPixelsAsync=async function(M,h,u,x,g,B0,I0,D0=0){if(!(M&&M.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let A0=y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&I0!==void 0)A0=A0[I0];if(A0)if(h>=0&&h<=M.width-x&&(u>=0&&u<=M.height-g)){C.bindFramebuffer(j.FRAMEBUFFER,A0);let v0=M.textures[D0],t0=v0.format,HJ=v0.type;if(M.textures.length>1)j.readBuffer(j.COLOR_ATTACHMENT0+D0);let w0=E8(v0);if(w0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(w0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let OJ=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,OJ),j.bufferData(j.PIXEL_PACK_BUFFER,B0.byteLength,j.STREAM_READ),j.readPixels(h,u,x,g,i.convert(t0),i.convert(HJ),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);let pJ=d!==null?y.get(d).__webglFramebuffer:null;C.bindFramebuffer(j.FRAMEBUFFER,pJ);let wJ=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await dH(j,wJ,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,OJ),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,B0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(OJ),j.deleteSync(wJ),B0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,h=null,u=0){let x=Math.pow(2,-u),g=Math.floor(M.image.width*x),B0=Math.floor(M.image.height*x),I0=h!==null?h.x:0,D0=h!==null?h.y:0;l.setTexture2D(M,0),j.copyTexSubImage2D(j.TEXTURE_2D,u,0,0,I0,D0,g,B0),C.unbindTexture()},this.copyTextureToTexture=function(M,h,u=null,x=null,g=0,B0=0){let I0,D0,A0,v0,t0,HJ,w0,OJ,pJ,wJ=M.isCompressedTexture?M.mipmaps[B0]:M.image;if(u!==null)I0=u.max.x-u.min.x,D0=u.max.y-u.min.y,A0=u.isBox3?u.max.z-u.min.z:1,v0=u.min.x,t0=u.min.y,HJ=u.isBox3?u.min.z:0;else{let bJ=Math.pow(2,-g);if(I0=Math.floor(wJ.width*bJ),D0=Math.floor(wJ.height*bJ),M.isDataArrayTexture)A0=wJ.depth;else if(M.isData3DTexture)A0=Math.floor(wJ.depth*bJ);else A0=1;v0=0,t0=0,HJ=0}if(x!==null)w0=x.x,OJ=x.y,pJ=x.z;else w0=0,OJ=0,pJ=0;let CJ=i.convert(h.format),eJ=i.convert(h.type),P0;if(h.isData3DTexture)l.setTexture3D(h,0),P0=j.TEXTURE_3D;else if(h.isDataArrayTexture||h.isCompressedArrayTexture)l.setTexture2DArray(h,0),P0=j.TEXTURE_2D_ARRAY;else l.setTexture2D(h,0),P0=j.TEXTURE_2D;C.activeTexture(j.TEXTURE0),C.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,h.flipY),C.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),C.pixelStorei(j.UNPACK_ALIGNMENT,h.unpackAlignment);let K9=C.getParameter(j.UNPACK_ROW_LENGTH),GJ=C.getParameter(j.UNPACK_IMAGE_HEIGHT),M9=C.getParameter(j.UNPACK_SKIP_PIXELS),m9=C.getParameter(j.UNPACK_SKIP_ROWS),q8=C.getParameter(j.UNPACK_SKIP_IMAGES);C.pixelStorei(j.UNPACK_ROW_LENGTH,wJ.width),C.pixelStorei(j.UNPACK_IMAGE_HEIGHT,wJ.height),C.pixelStorei(j.UNPACK_SKIP_PIXELS,v0),C.pixelStorei(j.UNPACK_SKIP_ROWS,t0),C.pixelStorei(j.UNPACK_SKIP_IMAGES,HJ);let G7=M.isDataArrayTexture||M.isData3DTexture,MJ=h.isDataArrayTexture||h.isData3DTexture;if(M.isDepthTexture){let bJ=y.get(M),F8=y.get(h),_J=y.get(bJ.__renderTarget),O8=y.get(F8.__renderTarget);C.bindFramebuffer(j.READ_FRAMEBUFFER,_J.__webglFramebuffer),C.bindFramebuffer(j.DRAW_FRAMEBUFFER,O8.__webglFramebuffer);for(let N7=0;N7<A0;N7++){if(G7)j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,y.get(M).__webglTexture,g,HJ+N7),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,y.get(h).__webglTexture,B0,pJ+N7);j.blitFramebuffer(v0,t0,I0,D0,w0,OJ,I0,D0,j.DEPTH_BUFFER_BIT,j.NEAREST)}C.bindFramebuffer(j.READ_FRAMEBUFFER,null),C.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(g!==0||M.isRenderTargetTexture||y.has(M)){let bJ=y.get(M),F8=y.get(h);C.bindFramebuffer(j.READ_FRAMEBUFFER,o),C.bindFramebuffer(j.DRAW_FRAMEBUFFER,S);for(let _J=0;_J<A0;_J++){if(G7)j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,bJ.__webglTexture,g,HJ+_J);else j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,bJ.__webglTexture,g);if(MJ)j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,F8.__webglTexture,B0,pJ+_J);else j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,F8.__webglTexture,B0);if(g!==0)j.blitFramebuffer(v0,t0,I0,D0,w0,OJ,I0,D0,j.COLOR_BUFFER_BIT,j.NEAREST);else if(MJ)j.copyTexSubImage3D(P0,B0,w0,OJ,pJ+_J,v0,t0,I0,D0);else j.copyTexSubImage2D(P0,B0,w0,OJ,v0,t0,I0,D0)}C.bindFramebuffer(j.READ_FRAMEBUFFER,null),C.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(MJ)if(M.isDataTexture||M.isData3DTexture)j.texSubImage3D(P0,B0,w0,OJ,pJ,I0,D0,A0,CJ,eJ,wJ.data);else if(h.isCompressedArrayTexture)j.compressedTexSubImage3D(P0,B0,w0,OJ,pJ,I0,D0,A0,CJ,wJ.data);else j.texSubImage3D(P0,B0,w0,OJ,pJ,I0,D0,A0,CJ,eJ,wJ);else if(M.isDataTexture)j.texSubImage2D(j.TEXTURE_2D,B0,w0,OJ,I0,D0,CJ,eJ,wJ.data);else if(M.isCompressedTexture)j.compressedTexSubImage2D(j.TEXTURE_2D,B0,w0,OJ,wJ.width,wJ.height,CJ,wJ.data);else j.texSubImage2D(j.TEXTURE_2D,B0,w0,OJ,I0,D0,CJ,eJ,wJ);if(C.pixelStorei(j.UNPACK_ROW_LENGTH,K9),C.pixelStorei(j.UNPACK_IMAGE_HEIGHT,GJ),C.pixelStorei(j.UNPACK_SKIP_PIXELS,M9),C.pixelStorei(j.UNPACK_SKIP_ROWS,m9),C.pixelStorei(j.UNPACK_SKIP_IMAGES,q8),B0===0&&h.generateMipmaps)j.generateMipmap(P0);C.unbindTexture()},this.initRenderTarget=function(M){if(y.get(M).__webglFramebuffer===void 0)l.setupRenderTarget(M)},this.initTexture=function(M){if(M.isCubeTexture)l.setTextureCube(M,0);else if(M.isData3DTexture)l.setTexture3D(M,0);else if(M.isDataArrayTexture||M.isCompressedArrayTexture)l.setTexture2DArray(M,0);else l.setTexture2D(M,0);C.unbindTexture()},this.resetState=function(){m=0,r=0,d=null,C.reset(),F0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tZ}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=QJ._getDrawingBufferColorSpace(J),Q.unpackColorSpace=QJ._getUnpackColorSpace()}}function lY(J,Q=!1){let $=J[0].index!==null,Z=new Set(Object.keys(J[0].attributes)),W=new Set(Object.keys(J[0].morphAttributes)),K={},H={},Y=J[0].morphTargetsRelative,X=new SJ,U=0;for(let N=0;N<J.length;++N){let E=J[N],G=0;if($!==(E.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let q in E.attributes){if(!Z.has(q))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+'. All geometries must have compatible attributes; make sure "'+q+'" attribute exists among all geometries, or in none of them.'),null;if(K[q]===void 0)K[q]=[];K[q].push(E.attributes[q]),G++}if(G!==Z.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". Make sure all geometries have the same number of attributes."),null;if(Y!==E.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let q in E.morphAttributes){if(!W.has(q))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+".  .morphAttributes must be consistent throughout all geometries."),null;if(H[q]===void 0)H[q]=[];H[q].push(E.morphAttributes[q])}if(Q){let q;if($)q=E.index.count;else if(E.attributes.position!==void 0)q=E.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". The geometry must have either an index or a position attribute"),null;X.addGroup(U,q,N),U+=q}}if($){let N=0,E=[];for(let G=0;G<J.length;++G){let q=J[G].index;for(let R=0;R<q.count;++R)E.push(q.getX(R)+N);N+=J[G].attributes.position.count}X.setIndex(E)}for(let N in K){let E=pY(K[N]);if(!E)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+N+" attribute."),null;X.setAttribute(N,E)}for(let N in H){let E=H[N][0].length;if(E===0)continue;X.morphAttributes=X.morphAttributes||{},X.morphAttributes[N]=[];for(let G=0;G<E;++G){let q=[];for(let k=0;k<H[N].length;++k)q.push(H[N][k][G]);let R=pY(q);if(!R)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+N+" morphAttribute."),null;X.morphAttributes[N].push(R)}}return X}function pY(J){let Q,$,Z,W=-1,K=0;for(let U=0;U<J.length;++U){let N=J[U];if(Q===void 0)Q=N.array.constructor;if(Q!==N.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if($===void 0)$=N.itemSize;if($!==N.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(Z===void 0)Z=N.normalized;if(Z!==N.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(W===-1)W=N.gpuType;if(W!==N.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;K+=N.count*$}let H=new Q(K),Y=new cJ(H,$,Z),X=0;for(let U=0;U<J.length;++U){let N=J[U];if(N.isInterleavedBufferAttribute){let E=X/$;for(let G=0,q=N.count;G<q;G++)for(let R=0;R<$;R++){let k=N.getComponent(G,R);Y.setComponent(G+E,R,k)}}else H.set(N.array,X);X+=N.count*$}if(W!==void 0)Y.gpuType=W;return Y}function gW(J,Q){if(Q===iZ)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if(Q===x7||Q===B6){let $=J.getIndex();if($===null){let K=[],H=J.getAttribute("position");if(H!==void 0){for(let Y=0;Y<H.count;Y++)K.push(Y);J.setIndex(K),$=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let Z=$.count-2,W=[];if(Q===x7)for(let K=1;K<=Z;K++)W.push($.getX(0)),W.push($.getX(K)),W.push($.getX(K+1));else for(let K=0;K<Z;K++)if(K%2===0)W.push($.getX(K)),W.push($.getX(K+1)),W.push($.getX(K+2));else W.push($.getX(K+2)),W.push($.getX(K+1)),W.push($.getX(K));if(W.length/3!==Z)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return J.setIndex(W),J.clearGroups(),J}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",Q),J}function V$(J){let Q=new Map,$=new Map,Z=J.clone();return mY(J,Z,function(W,K){Q.set(K,W),$.set(W,K)}),Z.traverse(function(W){if(!W.isSkinnedMesh)return;let K=W,H=Q.get(W),Y=H.skeleton.bones;K.skeleton=H.skeleton.clone(),K.bindMatrix.copy(H.bindMatrix),K.skeleton.bones=Y.map(function(X){return $.get(X)}),K.bind(K.skeleton,K.bindMatrix)}),Z}function mY(J,Q,$){$(J,Q);for(let Z=0;Z<J.children.length;Z++)mY(J.children[Z],Q.children[Z],$)}class nW extends G8{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(Q){return new aY(Q)}),this.register(function(Q){return new rY(Q)}),this.register(function(Q){return new HX(Q)}),this.register(function(Q){return new YX(Q)}),this.register(function(Q){return new XX(Q)}),this.register(function(Q){return new eY(Q)}),this.register(function(Q){return new JX(Q)}),this.register(function(Q){return new QX(Q)}),this.register(function(Q){return new $X(Q)}),this.register(function(Q){return new oY(Q)}),this.register(function(Q){return new ZX(Q)}),this.register(function(Q){return new tY(Q)}),this.register(function(Q){return new KX(Q)}),this.register(function(Q){return new WX(Q)}),this.register(function(Q){return new sY(Q)}),this.register(function(Q){return new dW(Q,ZJ.EXT_MESHOPT_COMPRESSION)}),this.register(function(Q){return new dW(Q,ZJ.KHR_MESHOPT_COMPRESSION)}),this.register(function(Q){return new UX(Q)})}load(J,Q,$,Z){let W=this,K;if(this.resourcePath!=="")K=this.resourcePath;else if(this.path!==""){let X=f8.extractUrlBase(J);K=f8.resolveURL(X,this.path)}else K=f8.extractUrlBase(J);this.manager.itemStart(J);let H=function(X){if(Z)Z(X);else console.error(X);W.manager.itemError(J),W.manager.itemEnd(J)},Y=new x6(this.manager);Y.setPath(this.path),Y.setResponseType("arraybuffer"),Y.setRequestHeader(this.requestHeader),Y.setWithCredentials(this.withCredentials),Y.load(J,function(X){try{W.parse(X,K,function(U){Q(U),W.manager.itemEnd(J)},H)}catch(U){H(U)}},$,H)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,Q,$,Z){let W,K={},H={},Y=new TextDecoder;if(typeof J==="string")W=JSON.parse(J);else if(J instanceof ArrayBuffer)if(Y.decode(new Uint8Array(J,0,4))===GX){try{K[ZJ.KHR_BINARY_GLTF]=new NX(J)}catch(N){if(Z)Z(N);return}W=JSON.parse(K[ZJ.KHR_BINARY_GLTF].content)}else W=JSON.parse(Y.decode(J));else W=J;if(W.asset===void 0||W.asset.version[0]<2){if(Z)Z(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let X=new RX(W,{path:Q||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});X.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let N=this.pluginCallbacks[U](X);if(!N.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");H[N.name]=N,K[N.name]=!0}if(W.extensionsUsed)for(let U=0;U<W.extensionsUsed.length;++U){let N=W.extensionsUsed[U],E=W.extensionsRequired||[];switch(N){case ZJ.KHR_MATERIALS_UNLIT:K[N]=new iY;break;case ZJ.KHR_DRACO_MESH_COMPRESSION:K[N]=new EX(W,this.dracoLoader);break;case ZJ.KHR_TEXTURE_TRANSFORM:K[N]=new qX;break;case ZJ.KHR_MESH_QUANTIZATION:K[N]=new FX;break;default:if(E.indexOf(N)>=0&&H[N]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+N+'".')}}X.setExtensions(K),X.setPlugins(H),X.parse($,Z)}parseAsync(J,Q){let $=this;return new Promise(function(Z,W){$.parse(J,Q,Z,W)})}}function rq(){let J={};return{get:function(Q){return J[Q]},add:function(Q,$){J[Q]=$},remove:function(Q){delete J[Q]},removeAll:function(){J={}}}}function gJ(J,Q,$){let Z=J.json.materials[Q];if(Z.extensions&&Z.extensions[$])return Z.extensions[$];return null}var ZJ={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class sY{constructor(J){this.parser=J,this.name=ZJ.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,Q=this.parser.json.nodes||[];for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(W.extensions&&W.extensions[this.name]&&W.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,W.extensions[this.name].light)}}_loadLight(J){let Q=this.parser,$="light:"+J,Z=Q.cache.get($);if(Z)return Z;let W=Q.json,Y=((W.extensions&&W.extensions[this.name]||{}).lights||[])[J],X,U=new b0(16777215);if(Y.color!==void 0)U.setRGB(Y.color[0],Y.color[1],Y.color[2],F9);let N=Y.range!==void 0?Y.range:0;switch(Y.type){case"directional":X=new c7(U),X.target.position.set(0,0,-1),X.add(X.target);break;case"point":X=new v8(U),X.distance=N;break;case"spot":X=new u7(U),X.distance=N,Y.spot=Y.spot||{},Y.spot.innerConeAngle=Y.spot.innerConeAngle!==void 0?Y.spot.innerConeAngle:0,Y.spot.outerConeAngle=Y.spot.outerConeAngle!==void 0?Y.spot.outerConeAngle:Math.PI/4,X.angle=Y.spot.outerConeAngle,X.penumbra=1-Y.spot.innerConeAngle/Y.spot.outerConeAngle,X.target.position.set(0,0,-1),X.add(X.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+Y.type)}if(X.position.set(0,0,0),t9(X,Y),Y.intensity!==void 0)X.intensity=Y.intensity;return X.name=Q.createUniqueName(Y.name||"light_"+J),Z=Promise.resolve(X),Q.cache.add($,Z),Z}getDependency(J,Q){if(J!=="light")return;return this._loadLight(Q)}createNodeAttachment(J){let Q=this,$=this.parser,W=$.json.nodes[J],H=(W.extensions&&W.extensions[this.name]||{}).light;if(H===void 0)return null;return this._loadLight(H).then(function(Y){return $._getNodeRef(Q.cache,H,Y)})}}class iY{constructor(){this.name=ZJ.KHR_MATERIALS_UNLIT}getMaterialType(){return tJ}extendParams(J,Q,$){let Z=[];J.color=new b0(1,1,1),J.opacity=1;let W=Q.pbrMetallicRoughness;if(W){if(Array.isArray(W.baseColorFactor)){let K=W.baseColorFactor;J.color.setRGB(K[0],K[1],K[2],F9),J.opacity=K[3]}if(W.baseColorTexture!==void 0)Z.push($.assignTexture(J,"map",W.baseColorTexture,g9))}return Promise.all(Z)}}class oY{constructor(J){this.parser=J,this.name=ZJ.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,Q){let $=gJ(this.parser,J,this.name);if($===null)return Promise.resolve();if($.emissiveStrength!==void 0)Q.emissiveIntensity=$.emissiveStrength;return Promise.resolve()}}class aY{constructor(J){this.parser=J,this.name=ZJ.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){return gJ(this.parser,J,this.name)!==null?L9:null}extendMaterialParams(J,Q){let $=gJ(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.clearcoatFactor!==void 0)Q.clearcoat=$.clearcoatFactor;if($.clearcoatTexture!==void 0)Z.push(this.parser.assignTexture(Q,"clearcoatMap",$.clearcoatTexture));if($.clearcoatRoughnessFactor!==void 0)Q.clearcoatRoughness=$.clearcoatRoughnessFactor;if($.clearcoatRoughnessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"clearcoatRoughnessMap",$.clearcoatRoughnessTexture));if($.clearcoatNormalTexture!==void 0){if(Z.push(this.parser.assignTexture(Q,"clearcoatNormalMap",$.clearcoatNormalTexture)),$.clearcoatNormalTexture.scale!==void 0){let W=$.clearcoatNormalTexture.scale;Q.clearcoatNormalScale=new H0(W,W)}}return Promise.all(Z)}}class rY{constructor(J){this.parser=J,this.name=ZJ.KHR_MATERIALS_DISPERSION}getMaterialType(J){return gJ(this.parser,J,this.name)!==null?L9:null}extendMaterialParams(J,Q){let $=gJ(this.parser,J,this.name);if($===null)return Promise.resolve();return Q.dispersion=$.dispersion!==void 0?$.dispersion:0,Promise.resolve()}}class tY{constructor(J){this.parser=J,this.name=ZJ.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){return gJ(this.parser,J,this.name)!==null?L9:null}extendMaterialParams(J,Q){let $=gJ(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.iridescenceFactor!==void 0)Q.iridescence=$.iridescenceFactor;if($.iridescenceTexture!==void 0)Z.push(this.parser.assignTexture(Q,"iridescenceMap",$.iridescenceTexture));if($.iridescenceIor!==void 0)Q.iridescenceIOR=$.iridescenceIor;if(Q.iridescenceThicknessRange===void 0)Q.iridescenceThicknessRange=[100,400];if($.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessRange[0]=$.iridescenceThicknessMinimum;if($.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessRange[1]=$.iridescenceThicknessMaximum;if($.iridescenceThicknessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"iridescenceThicknessMap",$.iridescenceThicknessTexture));return Promise.all(Z)}}class eY{constructor(J){this.parser=J,this.name=ZJ.KHR_MATERIALS_SHEEN}getMaterialType(J){return gJ(this.parser,J,this.name)!==null?L9:null}extendMaterialParams(J,Q){let $=gJ(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.sheenColor=new b0(0,0,0),Q.sheenRoughness=0,Q.sheen=1,$.sheenColorFactor!==void 0){let W=$.sheenColorFactor;Q.sheenColor.setRGB(W[0],W[1],W[2],F9)}if($.sheenRoughnessFactor!==void 0)Q.sheenRoughness=$.sheenRoughnessFactor;if($.sheenColorTexture!==void 0)Z.push(this.parser.assignTexture(Q,"sheenColorMap",$.sheenColorTexture,g9));if($.sheenRoughnessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"sheenRoughnessMap",$.sheenRoughnessTexture));return Promise.all(Z)}}class JX{constructor(J){this.parser=J,this.name=ZJ.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){return gJ(this.parser,J,this.name)!==null?L9:null}extendMaterialParams(J,Q){let $=gJ(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.transmissionFactor!==void 0)Q.transmission=$.transmissionFactor;if($.transmissionTexture!==void 0)Z.push(this.parser.assignTexture(Q,"transmissionMap",$.transmissionTexture));return Promise.all(Z)}}class QX{constructor(J){this.parser=J,this.name=ZJ.KHR_MATERIALS_VOLUME}getMaterialType(J){return gJ(this.parser,J,this.name)!==null?L9:null}extendMaterialParams(J,Q){let $=gJ(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.thickness=$.thicknessFactor!==void 0?$.thicknessFactor:0,$.thicknessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"thicknessMap",$.thicknessTexture));Q.attenuationDistance=$.attenuationDistance||1/0;let W=$.attenuationColor||[1,1,1];return Q.attenuationColor=new b0().setRGB(W[0],W[1],W[2],F9),Promise.all(Z)}}class $X{constructor(J){this.parser=J,this.name=ZJ.KHR_MATERIALS_IOR}getMaterialType(J){return gJ(this.parser,J,this.name)!==null?L9:null}extendMaterialParams(J,Q){let $=gJ(this.parser,J,this.name);if($===null)return Promise.resolve();if(Q.ior=$.ior!==void 0?$.ior:1.5,Q.ior===0)Q.ior=1000;return Promise.resolve()}}class ZX{constructor(J){this.parser=J,this.name=ZJ.KHR_MATERIALS_SPECULAR}getMaterialType(J){return gJ(this.parser,J,this.name)!==null?L9:null}extendMaterialParams(J,Q){let $=gJ(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.specularIntensity=$.specularFactor!==void 0?$.specularFactor:1,$.specularTexture!==void 0)Z.push(this.parser.assignTexture(Q,"specularIntensityMap",$.specularTexture));let W=$.specularColorFactor||[1,1,1];if(Q.specularColor=new b0().setRGB(W[0],W[1],W[2],F9),$.specularColorTexture!==void 0)Z.push(this.parser.assignTexture(Q,"specularColorMap",$.specularColorTexture,g9));return Promise.all(Z)}}class WX{constructor(J){this.parser=J,this.name=ZJ.EXT_MATERIALS_BUMP}getMaterialType(J){return gJ(this.parser,J,this.name)!==null?L9:null}extendMaterialParams(J,Q){let $=gJ(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.bumpScale=$.bumpFactor!==void 0?$.bumpFactor:1,$.bumpTexture!==void 0)Z.push(this.parser.assignTexture(Q,"bumpMap",$.bumpTexture));return Promise.all(Z)}}class KX{constructor(J){this.parser=J,this.name=ZJ.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){return gJ(this.parser,J,this.name)!==null?L9:null}extendMaterialParams(J,Q){let $=gJ(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.anisotropyStrength!==void 0)Q.anisotropy=$.anisotropyStrength;if($.anisotropyRotation!==void 0)Q.anisotropyRotation=$.anisotropyRotation;if($.anisotropyTexture!==void 0)Z.push(this.parser.assignTexture(Q,"anisotropyMap",$.anisotropyTexture));return Promise.all(Z)}}class HX{constructor(J){this.parser=J,this.name=ZJ.KHR_TEXTURE_BASISU}loadTexture(J){let Q=this.parser,$=Q.json,Z=$.textures[J];if(!Z.extensions||!Z.extensions[this.name])return null;let W=Z.extensions[this.name],K=Q.options.ktx2Loader;if(!K)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return Q.loadTextureImage(J,W.source,K)}}class YX{constructor(J){this.parser=J,this.name=ZJ.EXT_TEXTURE_WEBP}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,W=Z.textures[J];if(!W.extensions||!W.extensions[Q])return null;let K=W.extensions[Q],H=Z.images[K.source],Y=$.textureLoader;if(H.uri){let X=$.options.manager.getHandler(H.uri);if(X!==null)Y=X}return $.loadTextureImage(J,K.source,Y)}}class XX{constructor(J){this.parser=J,this.name=ZJ.EXT_TEXTURE_AVIF}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,W=Z.textures[J];if(!W.extensions||!W.extensions[Q])return null;let K=W.extensions[Q],H=Z.images[K.source],Y=$.textureLoader;if(H.uri){let X=$.options.manager.getHandler(H.uri);if(X!==null)Y=X}return $.loadTextureImage(J,K.source,Y)}}class dW{constructor(J,Q){this.name=Q,this.parser=J}loadBufferView(J){let Q=this.parser.json,$=Q.bufferViews[J];if($.extensions&&$.extensions[this.name]){let Z=$.extensions[this.name],W=this.parser.getDependency("buffer",Z.buffer),K=this.parser.options.meshoptDecoder;if(!K||!K.supported)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return W.then(function(H){let Y=Z.byteOffset||0,X=Z.byteLength||0,U=Z.count,N=Z.byteStride,E=new Uint8Array(H,Y,X);if(K.decodeGltfBufferAsync)return K.decodeGltfBufferAsync(U,N,E,Z.mode,Z.filter).then(function(G){return G.buffer});else return K.ready.then(function(){let G=new ArrayBuffer(U*N);return K.decodeGltfBuffer(new Uint8Array(G),U,N,E,Z.mode,Z.filter),G})})}else return null}}class UX{constructor(J){this.name=ZJ.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let Q=this.parser.json,$=Q.nodes[J];if(!$.extensions||!$.extensions[this.name]||$.mesh===void 0)return null;let Z=Q.meshes[$.mesh];for(let X of Z.primitives)if(X.mode!==T9.TRIANGLES&&X.mode!==T9.TRIANGLE_STRIP&&X.mode!==T9.TRIANGLE_FAN&&X.mode!==void 0)return null;let K=$.extensions[this.name].attributes,H=[],Y={};for(let X in K)H.push(this.parser.getDependency("accessor",K[X]).then((U)=>{return Y[X]=U,Y[X]}));if(H.length<1)return null;return H.push(this.parser.createNodeMesh(J)),Promise.all(H).then((X)=>{let U=X.pop(),N=U.isGroup?U.children:[U],E=X[0].count,G=[];for(let q of N){let R=new n0,k=new w,O=new RJ,F=new w(1,1,1),P=new Y8(q.geometry,q.material,E);for(let L=0;L<E;L++){if(Y.TRANSLATION)k.fromBufferAttribute(Y.TRANSLATION,L);if(Y.ROTATION)O.fromBufferAttribute(Y.ROTATION,L);if(Y.SCALE)F.fromBufferAttribute(Y.SCALE,L);P.setMatrixAt(L,R.compose(k,O,F))}let B=null;for(let L in Y)if(L==="_COLOR_0"){let z=Y[L];P.instanceColor=new M8(z.array,z.itemSize,z.normalized)}else if(L!=="TRANSLATION"&&L!=="ROTATION"&&L!=="SCALE"){if(B===null){let _=P.geometry;B=new SJ,B.name=_.name;for(let A in _.attributes)B.setAttribute(A,_.attributes[A]);for(let A in _.morphAttributes)B.morphAttributes[A]=_.morphAttributes[A];if(_.index!==null)B.setIndex(_.index);B.morphTargetsRelative=_.morphTargetsRelative;for(let A of _.groups)B.addGroup(A.start,A.count,A.materialIndex);if(_.boundingBox!==null)B.boundingBox=_.boundingBox.clone();if(_.boundingSphere!==null)B.boundingSphere=_.boundingSphere.clone();B.drawRange.start=_.drawRange.start,B.drawRange.count=_.drawRange.count,B.userData=Object.assign({},_.userData),P.geometry=B}let z=Y[L];B.setAttribute(L,new M8(z.array,z.itemSize,z.normalized))}LJ.prototype.copy.call(P,q),this.parser.assignFinalMaterial(P),G.push(P)}if(U.isGroup)return U.clear(),U.add(...G),U;return G[0]})}}var GX="glTF",s6=12,dY={JSON:1313821514,BIN:5130562};class NX{constructor(J){this.name=ZJ.KHR_BINARY_GLTF,this.content=null,this.body=null;let Q=new DataView(J,0,s6),$=new TextDecoder;if(this.header={magic:$.decode(new Uint8Array(J.slice(0,4))),version:Q.getUint32(4,!0),length:Q.getUint32(8,!0)},this.header.magic!==GX)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let Z=this.header.length-s6,W=new DataView(J,s6),K=0;while(K<Z){let H=W.getUint32(K,!0);K+=4;let Y=W.getUint32(K,!0);if(K+=4,Y===dY.JSON){let X=new Uint8Array(J,s6+K,H);this.content=$.decode(X)}else if(Y===dY.BIN){let X=s6+K;this.body=J.slice(X,X+H)}K+=H}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class EX{constructor(J,Q){if(!Q)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ZJ.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=Q,this.dracoLoader.preload()}decodePrimitive(J,Q){let $=this.json,Z=this.dracoLoader,W=J.extensions[this.name].bufferView,K=J.extensions[this.name].attributes,H={},Y={},X={};for(let U in K){let N=uW[U]||U.toLowerCase();H[N]=K[U]}for(let U in J.attributes){let N=uW[U]||U.toLowerCase();if(K[U]!==void 0){let E=$.accessors[J.attributes[U]],G=o7[E.componentType];X[N]=G.name,Y[N]=E.normalized===!0}}return Q.getDependency("bufferView",W).then(function(U){return new Promise(function(N,E){Z.decodeDracoFile(U,function(G){for(let q in G.attributes){let R=G.attributes[q],k=Y[q];if(k!==void 0)R.normalized=k}N(G)},H,X,F9,E)})})}}class qX{constructor(){this.name=ZJ.KHR_TEXTURE_TRANSFORM}extendTexture(J,Q){if((Q.texCoord===void 0||Q.texCoord===J.channel)&&Q.offset===void 0&&Q.rotation===void 0&&Q.scale===void 0)return J;if(J=J.clone(),Q.texCoord!==void 0)J.channel=Q.texCoord;if(Q.offset!==void 0)J.offset.fromArray(Q.offset);if(Q.rotation!==void 0)J.rotation=Q.rotation;if(Q.scale!==void 0)J.repeat.fromArray(Q.scale);if(Q.rotation!==void 0){let $=Math.cos(J.rotation),Z=Math.sin(J.rotation);J.matrix.set(J.repeat.x*$,J.repeat.y*Z,J.offset.x,-J.repeat.x*Z,J.repeat.y*$,J.offset.y,0,0,1),J.matrixAutoUpdate=!1}return J.needsUpdate=!0,J}}class FX{constructor(){this.name=ZJ.KHR_MESH_QUANTIZATION}}class sW extends U8{constructor(J,Q,$,Z){super(J,Q,$,Z)}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z*3+Z;for(let K=0;K!==Z;K++)Q[K]=$[W+K];return Q}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=H*2,X=H*3,U=Z-Q,N=($-Q)/U,E=N*N,G=E*N,q=J*X,R=q-X,k=-2*G+3*E,O=G-E,F=1-k,P=O-E+N;for(let B=0;B!==H;B++){let L=K[R+B+H],z=K[R+B+Y]*U,_=K[q+B+H],A=K[q+B]*U;W[B]=F*L+P*z+k*_+O*A}return W}}var tq=new RJ;class OX extends sW{interpolate_(J,Q,$,Z){let W=super.interpolate_(J,Q,$,Z);return tq.fromArray(W).normalize().toArray(W),W}}var T9={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},o7={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},uY={9728:b9,9729:rJ,9984:vQ,9985:h7,9986:o8,9987:n9},cY={33071:f7,33648:yQ,10497:I8},pW={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},uW={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},h8={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},eq={CUBICSPLINE:void 0,LINEAR:lQ,STEP:sZ},lW={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function JF(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new fJ({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:P8});return J.DefaultMaterial}function H7(J,Q,$){for(let Z in $.extensions)if(J[Z]===void 0)Q.userData.gltfExtensions=Q.userData.gltfExtensions||{},Q.userData.gltfExtensions[Z]=$.extensions[Z]}function t9(J,Q){if(Q.extras!==void 0)if(typeof Q.extras==="object")Object.assign(J.userData,Q.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+Q.extras)}function QF(J,Q,$){let Z=!1,W=!1,K=!1;for(let U=0,N=Q.length;U<N;U++){let E=Q[U];if(E.POSITION!==void 0)Z=!0;if(E.NORMAL!==void 0)W=!0;if(E.COLOR_0!==void 0)K=!0;if(Z&&W&&K)break}if(!Z&&!W&&!K)return Promise.resolve(J);let H=[],Y=[],X=[];for(let U=0,N=Q.length;U<N;U++){let E=Q[U];if(Z){let G=E.POSITION!==void 0?$.getDependency("accessor",E.POSITION):J.attributes.position;H.push(G)}if(W){let G=E.NORMAL!==void 0?$.getDependency("accessor",E.NORMAL):J.attributes.normal;Y.push(G)}if(K){let G=E.COLOR_0!==void 0?$.getDependency("accessor",E.COLOR_0):J.attributes.color;X.push(G)}}return Promise.all([Promise.all(H),Promise.all(Y),Promise.all(X)]).then(function(U){let N=U[0],E=U[1],G=U[2];if(Z)J.morphAttributes.position=N;if(W)J.morphAttributes.normal=E;if(K)J.morphAttributes.color=G;return J.morphTargetsRelative=!0,J})}function $F(J,Q){if(J.updateMorphTargets(),Q.weights!==void 0)for(let $=0,Z=Q.weights.length;$<Z;$++)J.morphTargetInfluences[$]=Q.weights[$];if(Q.extras&&Array.isArray(Q.extras.targetNames)){let $=Q.extras.targetNames;if(J.morphTargetInfluences.length===$.length){J.morphTargetDictionary={};for(let Z=0,W=$.length;Z<W;Z++)J.morphTargetDictionary[$[Z]]=Z}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ZF(J){let Q,$=J.extensions&&J.extensions[ZJ.KHR_DRACO_MESH_COMPRESSION];if($)Q="draco:"+$.bufferView+":"+$.indices+":"+mW($.attributes);else Q=J.indices+":"+mW(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let Z=0,W=J.targets.length;Z<W;Z++)Q+=":"+mW(J.targets[Z]);return Q}function mW(J){let Q="",$=Object.keys(J).sort();for(let Z=0,W=$.length;Z<W;Z++)Q+=$[Z]+":"+J[$[Z]]+";";return Q}function cW(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function WF(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var KF=new n0;class RX{constructor(J={},Q={}){this.json=J,this.extensions={},this.plugins={},this.options=Q,this.cache=new rq,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let $=!1,Z=-1,W=!1,K=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let H=navigator.userAgent;$=/^((?!chrome|android).)*safari/i.test(H)===!0;let Y=H.match(/Version\/(\d+)/);Z=$&&Y?parseInt(Y[1],10):-1,W=H.indexOf("Firefox")>-1,K=W?H.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||$&&Z<17||W&&K<98)this.textureLoader=new X$(this.options.manager);else this.textureLoader=new N$(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new x6(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,Q){let $=this,Z=this.json,W=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(K){return K._markDefs&&K._markDefs()}),Promise.all(this._invokeAll(function(K){return K.beforeRoot&&K.beforeRoot()})).then(function(){return Promise.all([$.getDependencies("scene"),$.getDependencies("animation"),$.getDependencies("camera")])}).then(function(K){let H={scene:K[0][Z.scene||0],scenes:K[0],animations:K[1],cameras:K[2],asset:Z.asset,parser:$,userData:{}};return H7(W,H,Z),t9(H,Z),Promise.all($._invokeAll(function(Y){return Y.afterRoot&&Y.afterRoot(H)})).then(function(){for(let Y of H.scenes)Y.updateMatrixWorld();J(H)})}).catch(Q)}_markDefs(){let J=this.json.nodes||[],Q=this.json.skins||[],$=this.json.meshes||[];for(let Z=0,W=Q.length;Z<W;Z++){let K=Q[Z].joints;for(let H=0,Y=K.length;H<Y;H++)J[K[H]].isBone=!0}for(let Z=0,W=J.length;Z<W;Z++){let K=J[Z];if(K.mesh!==void 0){if(this._addNodeRef(this.meshCache,K.mesh),K.skin!==void 0)$[K.mesh].isSkinnedMesh=!0}if(K.camera!==void 0)this._addNodeRef(this.cameraCache,K.camera)}}_addNodeRef(J,Q){if(Q===void 0)return;if(J.refs[Q]===void 0)J.refs[Q]=J.uses[Q]=0;J.refs[Q]++}_getNodeRef(J,Q,$){if(J.refs[Q]<=1)return $;let Z=$.clone(),W=(K,H)=>{let Y=this.associations.get(K);if(Y!=null)this.associations.set(H,Y);for(let[X,U]of K.children.entries())W(U,H.children[X])};return W($,Z),Z.name+="_instance_"+J.uses[Q]++,Z}_invokeOne(J){let Q=Object.values(this.plugins);Q.push(this);for(let $=0;$<Q.length;$++){let Z=J(Q[$]);if(Z)return Z}return null}_invokeAll(J){let Q=Object.values(this.plugins);Q.unshift(this);let $=[];for(let Z=0;Z<Q.length;Z++){let W=J(Q[Z]);if(W)$.push(W)}return $}getDependency(J,Q){let $=J+":"+Q,Z=this.cache.get($);if(!Z){switch(J){case"scene":Z=this.loadScene(Q);break;case"node":Z=this._invokeOne(function(W){return W.loadNode&&W.loadNode(Q)});break;case"mesh":Z=this._invokeOne(function(W){return W.loadMesh&&W.loadMesh(Q)});break;case"accessor":Z=this.loadAccessor(Q);break;case"bufferView":Z=this._invokeOne(function(W){return W.loadBufferView&&W.loadBufferView(Q)});break;case"buffer":Z=this.loadBuffer(Q);break;case"material":Z=this._invokeOne(function(W){return W.loadMaterial&&W.loadMaterial(Q)});break;case"texture":Z=this._invokeOne(function(W){return W.loadTexture&&W.loadTexture(Q)});break;case"skin":Z=this.loadSkin(Q);break;case"animation":Z=this._invokeOne(function(W){return W.loadAnimation&&W.loadAnimation(Q)});break;case"camera":Z=this.loadCamera(Q);break;default:if(Z=this._invokeOne(function(W){return W!=this&&W.getDependency&&W.getDependency(J,Q)}),!Z)throw Error("Unknown type: "+J);break}this.cache.add($,Z)}return Z}getDependencies(J){let Q=this.cache.get(J);if(!Q){let $=this,Z=this.json[J+(J==="mesh"?"es":"s")]||[];Q=Promise.all(Z.map(function(W,K){return $.getDependency(J,K)})),this.cache.add(J,Q)}return Q}loadBuffer(J){let Q=this.json.buffers[J],$=this.fileLoader;if(Q.type&&Q.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+Q.type+" buffer type is not supported.");if(Q.uri===void 0&&J===0)return Promise.resolve(this.extensions[ZJ.KHR_BINARY_GLTF].body);let Z=this.options;return new Promise(function(W,K){$.load(f8.resolveURL(Q.uri,Z.path),W,void 0,function(){K(Error('THREE.GLTFLoader: Failed to load buffer "'+Q.uri+'".'))})})}loadBufferView(J){let Q=this.json.bufferViews[J];return this.getDependency("buffer",Q.buffer).then(function($){let Z=Q.byteLength||0,W=Q.byteOffset||0;return $.slice(W,W+Z)})}loadAccessor(J){let Q=this,$=this.json,Z=this.json.accessors[J];if(Z.bufferView===void 0&&Z.sparse===void 0){let K=pW[Z.type],H=o7[Z.componentType],Y=Z.normalized===!0,X=new H(Z.count*K);return Promise.resolve(new cJ(X,K,Y))}let W=[];if(Z.bufferView!==void 0)W.push(this.getDependency("bufferView",Z.bufferView));else W.push(null);if(Z.sparse!==void 0)W.push(this.getDependency("bufferView",Z.sparse.indices.bufferView)),W.push(this.getDependency("bufferView",Z.sparse.values.bufferView));return Promise.all(W).then(function(K){let H=K[0],Y=pW[Z.type],X=o7[Z.componentType],U=X.BYTES_PER_ELEMENT,N=U*Y,E=Z.byteOffset||0,G=Z.bufferView!==void 0?$.bufferViews[Z.bufferView].byteStride:void 0,q=Z.normalized===!0,R,k;if(G&&G!==N){let O=Math.floor(E/G),F="InterleavedBuffer:"+Z.bufferView+":"+Z.componentType+":"+O+":"+Z.count,P=Q.cache.get(F);if(!P)R=new X(H,O*G,Z.count*G/U),P=new P6(R,G/U),Q.cache.add(F,P);k=new p7(P,Y,E%G/U,q)}else{if(H===null)R=new X(Z.count*Y);else R=new X(H,E,Z.count*Y);k=new cJ(R,Y,q)}if(Z.sparse!==void 0){let O=pW.SCALAR,F=o7[Z.sparse.indices.componentType],P=Z.sparse.indices.byteOffset||0,B=Z.sparse.values.byteOffset||0,L=new F(K[1],P,Z.sparse.count*O),z=new X(K[2],B,Z.sparse.count*Y);if(H!==null)k=new cJ(k.array.slice(),k.itemSize,k.normalized);k.normalized=!1;for(let _=0,A=L.length;_<A;_++){let D=L[_];if(k.setX(D,z[_*Y]),Y>=2)k.setY(D,z[_*Y+1]);if(Y>=3)k.setZ(D,z[_*Y+2]);if(Y>=4)k.setW(D,z[_*Y+3]);if(Y>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}k.normalized=q}return k})}loadTexture(J){let Q=this.json,$=this.options,W=Q.textures[J].source,K=Q.images[W],H=this.textureLoader;if(K.uri){let Y=$.manager.getHandler(K.uri);if(Y!==null)H=Y}return this.loadTextureImage(J,W,H)}loadTextureImage(J,Q,$){let Z=this,W=this.json,K=W.textures[J],H=W.images[Q],Y=(H.uri||H.bufferView)+":"+K.sampler;if(this.textureCache[Y])return this.textureCache[Y];let X=this.loadImageSource(Q,$).then(function(U){if(U.flipY=!1,U.name=K.name||H.name||"",U.name===""&&typeof H.uri==="string"&&H.uri.startsWith("data:image/")===!1)U.name=H.uri;let E=(W.samplers||{})[K.sampler]||{};return U.magFilter=uY[E.magFilter]||rJ,U.minFilter=uY[E.minFilter]||n9,U.wrapS=cY[E.wrapS]||I8,U.wrapT=cY[E.wrapT]||I8,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==b9&&U.minFilter!==rJ,Z.associations.set(U,{textures:J}),U}).catch(function(){return null});return this.textureCache[Y]=X,X}loadImageSource(J,Q){let $=this,Z=this.json,W=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((N)=>N.clone());let K=Z.images[J],H=self.URL||self.webkitURL,Y=K.uri||"",X=!1;if(K.bufferView!==void 0)Y=$.getDependency("bufferView",K.bufferView).then(function(N){X=!0;let E=new Blob([N],{type:K.mimeType});return Y=H.createObjectURL(E),Y});else if(K.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let U=Promise.resolve(Y).then(function(N){return new Promise(function(E,G){let q=E;if(Q.isImageBitmapLoader===!0)q=function(R){let k=new xJ(R);k.needsUpdate=!0,E(k)};Q.load(f8.resolveURL(N,W.path),q,void 0,G)})}).then(function(N){if(X===!0)H.revokeObjectURL(Y);return t9(N,K),N.userData.mimeType=K.mimeType||WF(K.uri),N}).catch(function(N){throw console.error("THREE.GLTFLoader: Couldn't load texture",Y),N});return this.sourceCache[J]=U,U}assignTexture(J,Q,$,Z){let W=this;return this.getDependency("texture",$.index).then(function(K){if(!K)return null;if($.texCoord!==void 0&&$.texCoord>0)K=K.clone(),K.channel=$.texCoord;if(W.extensions[ZJ.KHR_TEXTURE_TRANSFORM]){let H=$.extensions!==void 0?$.extensions[ZJ.KHR_TEXTURE_TRANSFORM]:void 0;if(H){let Y=W.associations.get(K);K=W.extensions[ZJ.KHR_TEXTURE_TRANSFORM].extendTexture(K,H),W.associations.set(K,Y)}}if(Z!==void 0)K.colorSpace=Z;return J[Q]=K,K})}assignFinalMaterial(J){let{geometry:Q,material:$}=J,Z=Q.attributes.tangent===void 0,W=Q.attributes.color!==void 0,K=Q.attributes.normal===void 0;if(J.isPoints){let H="PointsMaterial:"+$.uuid,Y=this.cache.get(H);if(!Y)Y=new S6,U9.prototype.copy.call(Y,$),Y.color.copy($.color),Y.map=$.map,Y.sizeAttenuation=!1,this.cache.add(H,Y);$=Y}else if(J.isLine){let H="LineBasicMaterial:"+$.uuid,Y=this.cache.get(H);if(!Y)Y=new T6,U9.prototype.copy.call(Y,$),Y.color.copy($.color),Y.map=$.map,this.cache.add(H,Y);$=Y}if(Z||W||K){let H="ClonedMaterial:"+$.uuid+":";if(Z)H+="derivative-tangents:";if(W)H+="vertex-colors:";if(K)H+="flat-shading:";let Y=this.cache.get(H);if(!Y){if(Y=$.clone(),W)Y.vertexColors=!0;if(K)Y.flatShading=!0;if(Z){if(Y.normalScale)Y.normalScale.y*=-1;if(Y.clearcoatNormalScale)Y.clearcoatNormalScale.y*=-1}this.cache.add(H,Y),this.associations.set(Y,this.associations.get($))}$=Y}J.material=$}getMaterialType(){return fJ}loadMaterial(J){let Q=this,$=this.json,Z=this.extensions,W=$.materials[J],K,H={},Y=W.extensions||{},X=[];if(Y[ZJ.KHR_MATERIALS_UNLIT]){let N=Z[ZJ.KHR_MATERIALS_UNLIT];K=N.getMaterialType(),X.push(N.extendParams(H,W,Q))}else{let N=W.pbrMetallicRoughness||{};if(H.color=new b0(1,1,1),H.opacity=1,Array.isArray(N.baseColorFactor)){let E=N.baseColorFactor;H.color.setRGB(E[0],E[1],E[2],F9),H.opacity=E[3]}if(N.baseColorTexture!==void 0)X.push(Q.assignTexture(H,"map",N.baseColorTexture,g9));if(H.metalness=N.metallicFactor!==void 0?N.metallicFactor:1,H.roughness=N.roughnessFactor!==void 0?N.roughnessFactor:1,N.metallicRoughnessTexture!==void 0)X.push(Q.assignTexture(H,"metalnessMap",N.metallicRoughnessTexture)),X.push(Q.assignTexture(H,"roughnessMap",N.metallicRoughnessTexture));K=this._invokeOne(function(E){return E.getMaterialType&&E.getMaterialType(J)}),X.push(Promise.all(this._invokeAll(function(E){return E.extendMaterialParams&&E.extendMaterialParams(J,H)})))}if(W.doubleSided===!0)H.side=Y9;let U=W.alphaMode||lW.OPAQUE;if(U===lW.BLEND)H.transparent=!0,H.depthWrite=!1;else if(H.transparent=!1,U===lW.MASK)H.alphaTest=W.alphaCutoff!==void 0?W.alphaCutoff:0.5;if(W.normalTexture!==void 0&&K!==tJ){if(X.push(Q.assignTexture(H,"normalMap",W.normalTexture)),H.normalScale=new H0(1,1),W.normalTexture.scale!==void 0){let N=W.normalTexture.scale;H.normalScale.set(N,N)}}if(W.occlusionTexture!==void 0&&K!==tJ){if(X.push(Q.assignTexture(H,"aoMap",W.occlusionTexture)),W.occlusionTexture.strength!==void 0)H.aoMapIntensity=W.occlusionTexture.strength}if(W.emissiveFactor!==void 0&&K!==tJ){let N=W.emissiveFactor;H.emissive=new b0().setRGB(N[0],N[1],N[2],F9)}if(W.emissiveTexture!==void 0&&K!==tJ)X.push(Q.assignTexture(H,"emissiveMap",W.emissiveTexture,g9));return Promise.all(X).then(function(){let N=new K(H);if(W.name)N.name=W.name;if(t9(N,W),Q.associations.set(N,{materials:J}),W.extensions)H7(Z,N,W);return N})}createUniqueName(J){let Q=qJ.sanitizeNodeName(J||"");if(Q in this.nodeNamesUsed)return Q+"_"+ ++this.nodeNamesUsed[Q];else return this.nodeNamesUsed[Q]=0,Q}loadGeometries(J){let Q=this,$=this.extensions,Z=this.primitiveCache;function W(H){return $[ZJ.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(H,Q).then(function(Y){return nY(Y,H,Q)})}let K=[];for(let H=0,Y=J.length;H<Y;H++){let X=J[H],U=ZF(X),N=Z[U];if(N)K.push(N.promise);else{let E;if(X.extensions&&X.extensions[ZJ.KHR_DRACO_MESH_COMPRESSION])E=W(X);else E=nY(new SJ,X,Q);if(X.mode===T9.TRIANGLE_STRIP)E=E.then((G)=>gW(G,B6));else if(X.mode===T9.TRIANGLE_FAN)E=E.then((G)=>gW(G,x7));Z[U]={primitive:X,promise:E},K.push(E)}}return Promise.all(K)}loadMesh(J){let Q=this,$=this.json,Z=this.extensions,W=$.meshes[J],K=W.primitives,H=[];for(let Y=0,X=K.length;Y<X;Y++){let U=K[Y].material===void 0?JF(this.cache):this.getDependency("material",K[Y].material);H.push(U)}return H.push(Q.loadGeometries(K)),Promise.all(H).then(async function(Y){let X=Y.slice(0,Y.length-1),U=Y[Y.length-1],N=[];for(let G=0,q=U.length;G<q;G++){let R=U[G],k=K[G],O,F=X[G];if(k.mode===T9.TRIANGLES||k.mode===T9.TRIANGLE_STRIP||k.mode===T9.TRIANGLE_FAN||k.mode===void 0){let P=W.isSkinnedMesh===!0,B=R.hasAttribute("skinIndex")&&R.hasAttribute("skinWeight");if(P&&B===!1)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(O=P&&B?new iQ(R,F):new p0(R,F),O.isSkinnedMesh===!0)O.normalizeSkinWeights()}else if(k.mode===T9.LINES)O=new oQ(R,F);else if(k.mode===T9.LINE_STRIP)O=new l7(R,F);else if(k.mode===T9.LINE_LOOP)O=new aQ(R,F);else if(k.mode===T9.POINTS)O=new rQ(R,F);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+k.mode);if(Object.keys(O.geometry.morphAttributes).length>0)$F(O,W);if(O.name=Q.createUniqueName(W.name||"mesh_"+J),t9(O,W),k.extensions)H7(Z,O,k);Q.assignFinalMaterial(O),N.push(O)}for(let G=0,q=N.length;G<q;G++)Q.associations.set(N[G],{meshes:J,primitives:G});if(N.length===1){if(W.extensions)H7(Z,N[0],W);return N[0]}let E=new vJ;if(W.extensions)H7(Z,E,W);Q.associations.set(E,{meshes:J});for(let G=0,q=N.length;G<q;G++)E.add(N[G]);return E})}loadCamera(J){let Q,$=this.json.cameras[J],Z=$[$.type];if(!Z){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if($.type==="perspective")Q=new uJ(A8.radToDeg(Z.yfov),Z.aspectRatio||1,Z.znear||1,Z.zfar||2000000);else if($.type==="orthographic")Q=new W7(-Z.xmag,Z.xmag,Z.ymag,-Z.ymag,Z.znear,Z.zfar);if($.name)Q.name=this.createUniqueName($.name);return t9(Q,$),Promise.resolve(Q)}loadSkin(J){let Q=this.json.skins[J],$=[];for(let Z=0,W=Q.joints.length;Z<W;Z++)$.push(this._loadNodeShallow(Q.joints[Z]));if(Q.inverseBindMatrices!==void 0)$.push(this.getDependency("accessor",Q.inverseBindMatrices));else $.push(null);return Promise.all($).then(function(Z){let W=Z.pop(),K=Z,H=[],Y=[];for(let X=0,U=K.length;X<U;X++){let N=K[X];if(N){H.push(N);let E=new n0;if(W!==null)E.fromArray(W.array,X*16);Y.push(E)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',Q.joints[X])}return new A6(H,Y)})}loadAnimation(J){let Q=this.json,$=this,Z=Q.animations[J],W=Z.name?Z.name:"animation_"+J,K=[],H=[],Y=[],X=[],U=[];for(let N=0,E=Z.channels.length;N<E;N++){let G=Z.channels[N],q=Z.samplers[G.sampler],R=G.target,k=R.node,O=Z.parameters!==void 0?Z.parameters[q.input]:q.input,F=Z.parameters!==void 0?Z.parameters[q.output]:q.output;if(R.node===void 0)continue;K.push(this.getDependency("node",k)),H.push(this.getDependency("accessor",O)),Y.push(this.getDependency("accessor",F)),X.push(q),U.push(R)}return Promise.all([Promise.all(K),Promise.all(H),Promise.all(Y),Promise.all(X),Promise.all(U)]).then(function(N){let E=N[0],G=N[1],q=N[2],R=N[3],k=N[4],O=[];for(let P=0,B=E.length;P<B;P++){let L=E[P],z=G[P],_=q[P],A=R[P],D=k[P];if(L===void 0)continue;if(L.updateMatrix)L.updateMatrix();let I=$._createAnimationTracks(L,z,_,A,D);if(I)for(let p=0;p<I.length;p++)O.push(I[p])}let F=new S7(W,void 0,O);return t9(F,Z),F})}createNodeMesh(J){let Q=this.json,$=this,Z=Q.nodes[J];if(Z.mesh===void 0)return null;return $.getDependency("mesh",Z.mesh).then(function(W){let K=$._getNodeRef($.meshCache,Z.mesh,W);if(Z.weights!==void 0)K.traverse(function(H){if(!H.isMesh)return;for(let Y=0,X=Z.weights.length;Y<X;Y++)H.morphTargetInfluences[Y]=Z.weights[Y]});return K})}loadNode(J){let Q=this.json,$=this,Z=Q.nodes[J],W=$._loadNodeShallow(J),K=[],H=Z.children||[];for(let X=0,U=H.length;X<U;X++)K.push($.getDependency("node",H[X]));let Y=Z.skin===void 0?Promise.resolve(null):$.getDependency("skin",Z.skin);return Promise.all([W,Promise.all(K),Y]).then(function(X){let U=X[0],N=X[1],E=X[2];if(E!==null)U.traverse(function(G){if(!G.isSkinnedMesh)return;G.bind(E,KF)});for(let G=0,q=N.length;G<q;G++)U.add(N[G]);if(U.userData.pivot!==void 0&&N.length>0){let G=U.userData.pivot,q=N[0];U.pivot=new w().fromArray(G),U.position.x-=G[0],U.position.y-=G[1],U.position.z-=G[2],q.position.set(0,0,0),delete U.userData.pivot}return U})}_loadNodeShallow(J){let Q=this.json,$=this.extensions,Z=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let W=Q.nodes[J],K=W.name?Z.createUniqueName(W.name):"",H=[],Y=Z._invokeOne(function(X){return X.createNodeMesh&&X.createNodeMesh(J)});if(Y)H.push(Y);if(W.camera!==void 0)H.push(Z.getDependency("camera",W.camera).then(function(X){return Z._getNodeRef(Z.cameraCache,W.camera,X)}));return Z._invokeAll(function(X){return X.createNodeAttachment&&X.createNodeAttachment(J)}).forEach(function(X){H.push(X)}),this.nodeCache[J]=Promise.all(H).then(function(X){let U;if(W.isBone===!0)U=new I6;else if(X.length>1)U=new vJ;else if(X.length===1)U=X[0];else U=new LJ;if(U!==X[0])for(let N=0,E=X.length;N<E;N++)U.add(X[N]);if(W.name)U.userData.name=W.name,U.name=K;if(t9(U,W),W.extensions)H7($,U,W);if(W.matrix!==void 0){let N=new n0;N.fromArray(W.matrix),U.applyMatrix4(N)}else{if(W.translation!==void 0)U.position.fromArray(W.translation);if(W.rotation!==void 0)U.quaternion.fromArray(W.rotation);if(W.scale!==void 0)U.scale.fromArray(W.scale)}if(!Z.associations.has(U))Z.associations.set(U,{});else if(W.mesh!==void 0&&Z.meshCache.refs[W.mesh]>1){let N=Z.associations.get(U);Z.associations.set(U,{...N})}return Z.associations.get(U).nodes=J,U}),this.nodeCache[J]}loadScene(J){let Q=this.extensions,$=this.json.scenes[J],Z=this,W=new vJ;if($.name)W.name=Z.createUniqueName($.name);if(t9(W,$),$.extensions)H7(Q,W,$);let K=$.nodes||[],H=[];for(let Y=0,X=K.length;Y<X;Y++)H.push(Z.getDependency("node",K[Y]));return Promise.all(H).then(function(Y){for(let U=0,N=Y.length;U<N;U++){let E=Y[U];if(E.parent!==null)W.add(V$(E));else W.add(E)}let X=(U)=>{let N=new Map;for(let[E,G]of Z.associations)if(E instanceof U9||E instanceof xJ)N.set(E,G);return U.traverse((E)=>{let G=Z.associations.get(E);if(G!=null)N.set(E,G)}),N};return Z.associations=X(W),W})}_createAnimationTracks(J,Q,$,Z,W){let K=[],H=J.name?J.name:J.uuid,Y=[];function X(G){if(G.morphTargetInfluences)Y.push(G.name?G.name:G.uuid)}if(h8[W.path]===h8.weights){if(X(J),J.isGroup)J.children.forEach(X)}else Y.push(H);let U;switch(h8[W.path]){case h8.weights:U=S8;break;case h8.rotation:U=j8;break;case h8.translation:case h8.scale:U=Z7;break;default:switch($.itemSize){case 1:U=S8;break;case 2:case 3:default:U=Z7;break}break}let N=Z.interpolation!==void 0?eq[Z.interpolation]:lQ,E=this._getArrayFromAccessor($);for(let G=0,q=Y.length;G<q;G++){let R=new U(Y[G]+"."+h8[W.path],Q.array,E,N);if(Z.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(R);K.push(R)}return K}_getArrayFromAccessor(J){let Q=J.array;if(J.normalized){let $=cW(Q.constructor),Z=new Float32Array(Q.length);for(let W=0,K=Q.length;W<K;W++)Z[W]=Q[W]*$;Q=Z}return Q}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function($){return new(this instanceof j8?OX:sW)(this.times,this.values,this.getValueSize()/3,$)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function HF(J,Q,$){let Z=Q.attributes,W=new X9;if(Z.POSITION!==void 0){let Y=$.json.accessors[Z.POSITION],X=Y.min,U=Y.max;if(X!==void 0&&U!==void 0){if(W.set(new w(X[0],X[1],X[2]),new w(U[0],U[1],U[2])),Y.normalized){let N=cW(o7[Y.componentType]);W.min.multiplyScalar(N),W.max.multiplyScalar(N)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let K=Q.targets;if(K!==void 0){let Y=new w,X=new w;for(let U=0,N=K.length;U<N;U++){let E=K[U];if(E.POSITION!==void 0){let G=$.json.accessors[E.POSITION],q=G.min,R=G.max;if(q!==void 0&&R!==void 0){if(X.setX(Math.max(Math.abs(q[0]),Math.abs(R[0]))),X.setY(Math.max(Math.abs(q[1]),Math.abs(R[1]))),X.setZ(Math.max(Math.abs(q[2]),Math.abs(R[2]))),G.normalized){let k=cW(o7[G.componentType]);X.multiplyScalar(k)}Y.max(X)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}W.expandByVector(Y)}J.boundingBox=W;let H=new R9;W.getCenter(H.center),H.radius=W.min.distanceTo(W.max)/2,J.boundingSphere=H}function nY(J,Q,$){let Z=Q.attributes,W=[];function K(H,Y){return $.getDependency("accessor",H).then(function(X){J.setAttribute(Y,X)})}for(let H in Z){let Y=uW[H]||H.toLowerCase();if(Y in J.attributes)continue;W.push(K(Z[H],Y))}if(Q.indices!==void 0&&!J.index){let H=$.getDependency("accessor",Q.indices).then(function(Y){J.setIndex(Y)});W.push(H)}if(QJ.workingColorSpace!==F9&&"COLOR_0"in Z)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${QJ.workingColorSpace}" not supported.`);return t9(J,Q),HF(J,Q,$),Promise.all(W).then(function(){return Q.targets!==void 0?QF(J,Q.targets,$):J})}var LX={type:"change"},oW={type:"start"},kX={type:"end"},k$=new w8,VX=new C9,YF=Math.cos(70*A8.DEG2RAD),iJ=new w,G9=2*Math.PI,BJ={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},iW=0.000001;class aW extends q${constructor(J,Q=null){super(J,Q);if(this.state=BJ.NONE,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:z8.ROTATE,MIDDLE:z8.DOLLY,RIGHT:z8.PAN},this.touches={ONE:C8.ROTATE,TWO:C8.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new w,this._lastQuaternion=new RJ,this._lastTargetPosition=new w,this._quat=new RJ().setFromUnitVectors(J.up,new w(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new l6,this._sphericalDelta=new l6,this._scale=1,this._panOffset=new w,this._rotateStart=new H0,this._rotateEnd=new H0,this._rotateDelta=new H0,this._panStart=new H0,this._panEnd=new H0,this._panDelta=new H0,this._dollyStart=new H0,this._dollyEnd=new H0,this._dollyDelta=new H0,this._dollyDirection=new w,this._mouse=new H0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=UF.bind(this),this._onPointerDown=XF.bind(this),this._onPointerUp=GF.bind(this),this._onContextMenu=LF.bind(this),this._onMouseWheel=qF.bind(this),this._onKeyDown=FF.bind(this),this._onTouchStart=OF.bind(this),this._onTouchMove=RF.bind(this),this._onMouseDown=NF.bind(this),this._onMouseMove=EF.bind(this),this._interceptControlDown=VF.bind(this),this._interceptControlUp=kF.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=BJ.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let J=this.domElement.getRootNode();J.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),J.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(LX),this.update(),this.state=BJ.NONE}pan(J,Q){this._pan(J,Q),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let Q=this.object.position;if(iJ.copy(Q).sub(this.target),iJ.applyQuaternion(this._quat),this._spherical.setFromVector3(iJ),this.autoRotate&&this.state===BJ.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let $=this.minAzimuthAngle,Z=this.maxAzimuthAngle;if(isFinite($)&&isFinite(Z)){if($<-Math.PI)$+=G9;else if($>Math.PI)$-=G9;if(Z<-Math.PI)Z+=G9;else if(Z>Math.PI)Z-=G9;if($<=Z)this._spherical.theta=Math.max($,Math.min(Z,this._spherical.theta));else this._spherical.theta=this._spherical.theta>($+Z)/2?Math.max($,this._spherical.theta):Math.min(Z,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let W=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let K=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),W=K!=this._spherical.radius}if(iJ.setFromSpherical(this._spherical),iJ.applyQuaternion(this._quatInverse),Q.copy(this.target).add(iJ),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let K=null;if(this.object.isPerspectiveCamera){let H=iJ.length();K=this._clampDistance(H*this._scale);let Y=H-K;this.object.position.addScaledVector(this._dollyDirection,Y),this.object.updateMatrixWorld(),W=!!Y}else if(this.object.isOrthographicCamera){let H=new w(this._mouse.x,this._mouse.y,0);H.unproject(this.object);let Y=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),W=Y!==this.object.zoom;let X=new w(this._mouse.x,this._mouse.y,0);X.unproject(this.object),this.object.position.sub(X).add(H),this.object.updateMatrixWorld(),K=iJ.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(K!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(K).add(this.object.position);else if(k$.origin.copy(this.object.position),k$.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(k$.direction))<YF)this.object.lookAt(this.target);else VX.setFromNormalAndCoplanarPoint(this.object.up,this.target),k$.intersectPlane(VX,this.target)}else if(this.object.isOrthographicCamera){let K=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),K!==this.object.zoom)this.object.updateProjectionMatrix(),W=!0}if(this._scale=1,this._performCursorZoom=!1,W||this._lastPosition.distanceToSquared(this.object.position)>iW||8*(1-this._lastQuaternion.dot(this.object.quaternion))>iW||this._lastTargetPosition.distanceToSquared(this.target)>iW)return this.dispatchEvent(LX),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return G9/60*this.autoRotateSpeed*J;else return G9/60/60*this.autoRotateSpeed}_getZoomScale(J){let Q=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*Q)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,Q){iJ.setFromMatrixColumn(Q,0),iJ.multiplyScalar(-J),this._panOffset.add(iJ)}_panUp(J,Q){if(this.screenSpacePanning===!0)iJ.setFromMatrixColumn(Q,1);else iJ.setFromMatrixColumn(Q,0),iJ.crossVectors(this.object.up,iJ);iJ.multiplyScalar(J),this._panOffset.add(iJ)}_pan(J,Q){let $=this.domElement;if(this.object.isPerspectiveCamera){let Z=this.object.position;iJ.copy(Z).sub(this.target);let W=iJ.length();W*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*W/$.clientHeight,this.object.matrix),this._panUp(2*Q*W/$.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/$.clientWidth,this.object.matrix),this._panUp(Q*(this.object.top-this.object.bottom)/this.object.zoom/$.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,Q){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let $=this.domElement.getBoundingClientRect(),Z=J-$.left,W=Q-$.top,K=$.width,H=$.height;this._mouse.x=Z/K*2-1,this._mouse.y=-(W/H)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(G9*this._rotateDelta.x/Q.clientHeight),this._rotateUp(G9*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let Q=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(G9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);Q=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-G9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);Q=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(G9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);Q=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-G9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);Q=!0;break}if(Q)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._rotateStart.set($,Z)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._panStart.set($,Z)}}_handleTouchStartDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,Z=J.pageY-Q.y,W=Math.sqrt($*$+Z*Z);this._dollyStart.set(0,W)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+$.x),W=0.5*(J.pageY+$.y);this._rotateEnd.set(Z,W)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(G9*this._rotateDelta.x/Q.clientHeight),this._rotateUp(G9*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._panEnd.set($,Z)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,Z=J.pageY-Q.y,W=Math.sqrt($*$+Z*Z);this._dollyEnd.set(0,W),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let K=(J.pageX+Q.x)*0.5,H=(J.pageY+Q.y)*0.5;this._updateZoomParameters(K,H)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId){this._pointers.splice(Q,1);return}}_isTrackingPointer(J){for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId)return!0;return!1}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new H0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q]}_customWheelEvent(J){let Q=J.deltaMode,$={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch(Q){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)$.deltaY*=10;return $}}function XF(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function UF(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function GF(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kX),this.state=BJ.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let Q=this._pointers[0],$=this._pointerPositions[Q];this._onTouchStart({pointerId:Q,pageX:$.x,pageY:$.y});break}}function NF(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case z8.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=BJ.DOLLY;break;case z8.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=BJ.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=BJ.ROTATE}break;case z8.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=BJ.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=BJ.PAN}break;default:this.state=BJ.NONE}if(this.state!==BJ.NONE)this.dispatchEvent(oW)}function EF(J){switch(this.state){case BJ.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case BJ.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case BJ.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function qF(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==BJ.NONE)return;J.preventDefault(),this.dispatchEvent(oW),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(kX)}function FF(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function OF(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case C8.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=BJ.TOUCH_ROTATE;break;case C8.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=BJ.TOUCH_PAN;break;default:this.state=BJ.NONE}break;case 2:switch(this.touches.TWO){case C8.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=BJ.TOUCH_DOLLY_PAN;break;case C8.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=BJ.TOUCH_DOLLY_ROTATE;break;default:this.state=BJ.NONE}break;default:this.state=BJ.NONE}if(this.state!==BJ.NONE)this.dispatchEvent(oW)}function RF(J){switch(this._trackPointer(J),this.state){case BJ.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case BJ.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case BJ.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case BJ.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=BJ.NONE}}function LF(J){if(this.enabled===!1)return;J.preventDefault()}function VF(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function kF(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}class rW extends g7{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let J=new Z9;J.deleteAttribute("uv");let Q=new fJ({side:$9}),$=new fJ,Z=new v8(16777215,900,28,2);Z.position.set(0.418,16.199,0.3),this.add(Z);let W=new p0(J,Q);W.position.set(-0.757,13.219,0.717),W.scale.set(31.713,28.305,28.591),this.add(W);let K=new Y8(J,$,6),H=new LJ;H.position.set(-10.906,2.009,1.846),H.rotation.set(0,-0.195,0),H.scale.set(2.328,7.905,4.651),H.updateMatrix(),K.setMatrixAt(0,H.matrix),H.position.set(-5.607,-0.754,-0.758),H.rotation.set(0,0.994,0),H.scale.set(1.97,1.534,3.955),H.updateMatrix(),K.setMatrixAt(1,H.matrix),H.position.set(6.167,0.857,7.803),H.rotation.set(0,0.561,0),H.scale.set(3.927,6.285,3.687),H.updateMatrix(),K.setMatrixAt(2,H.matrix),H.position.set(-2.017,0.018,6.124),H.rotation.set(0,0.333,0),H.scale.set(2.002,4.566,2.064),H.updateMatrix(),K.setMatrixAt(3,H.matrix),H.position.set(2.291,-0.756,-2.621),H.rotation.set(0,-0.286,0),H.scale.set(1.546,1.552,1.496),H.updateMatrix(),K.setMatrixAt(4,H.matrix),H.position.set(-2.193,-0.369,-5.547),H.rotation.set(0,0.516,0),H.scale.set(3.875,3.487,2.986),H.updateMatrix(),K.setMatrixAt(5,H.matrix),this.add(K);let Y=new p0(J,a7(50));Y.position.set(-16.116,14.37,8.208),Y.scale.set(0.1,2.428,2.739),this.add(Y);let X=new p0(J,a7(50));X.position.set(-16.109,18.021,-8.207),X.scale.set(0.1,2.425,2.751),this.add(X);let U=new p0(J,a7(17));U.position.set(14.904,12.198,-1.832),U.scale.set(0.15,4.265,6.331),this.add(U);let N=new p0(J,a7(43));N.position.set(-0.462,8.89,14.52),N.scale.set(4.38,5.441,0.088),this.add(N);let E=new p0(J,a7(20));E.position.set(3.235,11.486,-12.541),E.scale.set(2.5,2,0.1),this.add(E);let G=new p0(J,a7(100));G.position.set(0,20,0),G.scale.set(1,0.1,1),this.add(G)}dispose(){let J=new Set;this.traverse((Q)=>{if(Q.isMesh)J.add(Q.geometry),J.add(Q.material)});for(let Q of J)Q.dispose()}}function a7(J){return new K$({color:0,emissive:16777215,emissiveIntensity:J})}var i6=new w;function S9(J,Q,$,Z,W,K){let H=2*Math.PI*W/4,Y=Math.max(K-2*W,0),X=Math.PI/4;i6.copy(Q),i6[Z]=0,i6.normalize();let U=0.5*H/(H+Y),N=1-i6.angleTo(J)/X;if(Math.sign(i6[$])===1)return N*U;else return Y/(H+Y)+U+U*(1-N)}class b8 extends Z9{constructor(J=1,Q=1,$=1,Z=2,W=0.1){let K=Z*2+1;W=Math.min(J/2,Q/2,$/2,W);super(1,1,1,K,K,K);if(this.type="RoundedBoxGeometry",this.parameters={width:J,height:Q,depth:$,segments:Z,radius:W},K===1)return;let H=this.toNonIndexed();this.index=null,this.attributes.position=H.attributes.position,this.attributes.normal=H.attributes.normal,this.attributes.uv=H.attributes.uv;let Y=new w,X=new w,U=new w(J,Q,$).divideScalar(2).subScalar(W),N=this.attributes.position.array,E=this.attributes.normal.array,G=this.attributes.uv.array,q=N.length/6,R=new w,k=0.5/K;for(let O=0,F=0;O<N.length;O+=3,F+=2)switch(Y.fromArray(N,O),X.copy(Y),X.x-=Math.sign(X.x)*k,X.y-=Math.sign(X.y)*k,X.z-=Math.sign(X.z)*k,X.normalize(),N[O+0]=U.x*Math.sign(Y.x)+X.x*W,N[O+1]=U.y*Math.sign(Y.y)+X.y*W,N[O+2]=U.z*Math.sign(Y.z)+X.z*W,E[O+0]=X.x,E[O+1]=X.y,E[O+2]=X.z,Math.floor(O/q)){case 0:R.set(1,0,0),G[F+0]=S9(R,X,"z","y",W,$),G[F+1]=1-S9(R,X,"y","z",W,Q);break;case 1:R.set(-1,0,0),G[F+0]=1-S9(R,X,"z","y",W,$),G[F+1]=1-S9(R,X,"y","z",W,Q);break;case 2:R.set(0,1,0),G[F+0]=1-S9(R,X,"x","z",W,J),G[F+1]=S9(R,X,"z","x",W,$);break;case 3:R.set(0,-1,0),G[F+0]=1-S9(R,X,"x","z",W,J),G[F+1]=1-S9(R,X,"z","x",W,$);break;case 4:R.set(0,0,1),G[F+0]=1-S9(R,X,"x","y",W,J),G[F+1]=1-S9(R,X,"y","x",W,Q);break;case 5:R.set(0,0,-1),G[F+0]=S9(R,X,"x","y",W,J),G[F+1]=1-S9(R,X,"y","x",W,Q);break}}static fromJSON(J){return new b8(J.width,J.height,J.depth,J.segments,J.radius)}}var T0={tableWidth:1.4,tableCenterY:0.724,tableThickness:0.09,feltWidth:1.17,feltCenterY:0.776,surfaceY:0.782,chairSeatY:0.51,chairSeatWidth:0.56,seatDistance:1.01,tileLength:0.12,tileWidth:0.06,tileThickness:0.025,tileGap:0.0035,pipRadius:0.0068,pipColumnSpacing:0.0136,pipRowSpacing:0.0175,rackRadius:0.635,rackSpacing:0.065,neutralPoseTime:10.25},N8=[[0,T0.seatDistance,Math.PI],[-T0.seatDistance,0,Math.PI/2],[0,-T0.seatDistance,0],[T0.seatDistance,0,-Math.PI/2]];function DX(J){let Q=J.vertical?T0.tileWidth:T0.tileLength,$=J.vertical?T0.tileLength:T0.tileWidth;return{left:J.x-Q/2,right:J.x+Q/2,top:J.z-$/2,bottom:J.z+$/2}}var DF=T0.feltWidth/2-0.022;function BX(J,Q){let $=DX(J);if(Math.max(Math.abs($.left),Math.abs($.right),Math.abs($.top),Math.abs($.bottom))>DF+0.00000001)return!1;return Q.every((Z)=>{let W=DX(Z);return $.right<=W.left-0.0015||$.left>=W.right+0.0015||$.bottom<=W.top-0.0015||$.top>=W.bottom+0.0015})}function MX(J,Q,$){let{tileLength:Z,tileWidth:W,tileGap:K}=T0,H=Q.x===Q.y,Y=(H?W:Z)/2,X=J.tile,U=[],N=[[J.dx,J.dz],[J.dz,-J.dx],[-J.dz,J.dx]];for(let E=0;E<N.length;E++){let[G,q]=N[E],R=E!==0,k=(X.isDouble?W:Z)/2,O=(X.isDouble?Z:W)/2,F=X.x+J.dx*(R?X.isDouble?0:Z/4:k),P=X.z+J.dz*(R?X.isDouble?0:Z/4:k),B=R?[0,Z/8,-Z/8]:[0];for(let L of B){let z=Math.atan2(-q,G)+($==="left"?Math.PI:0)+(H?Math.PI/2:0);U.push({id:Q.id,x:F+G*((R?O:0)+K+Y)+J.dx*L,z:P+q*((R?O:0)+K+Y)+J.dz*L,yaw:z,vertical:Math.abs(Math.sin(z))>0.5,isDouble:H,dx:G,dz:q,side:$})}}return U}function tW(J,Q,$,Z){let W={id:"future",x:0,y:Z?0:1};return MX({tile:J,dx:J.dx,dz:J.dz},W,$).some((K)=>BX(K,Q))}function zX(J,Q=[]){if(J.length>28)throw Error("A double-six chain has at most 28 tiles.");if(!J.length)return[];let $=new Map(J.map((G)=>[G.id,G])),Z=Q.filter((G)=>G.type==="play"&&G.tile&&$.has(G.tile)),W=$.get(Z[0]?.tile||"")||J[0],K=J.findIndex((G)=>G.id===W.id),H=W.x===W.y,Y={id:W.id,x:0,z:0,yaw:H?Math.PI/2:0,vertical:H,isDouble:H,dx:1,dz:0,side:"root"},X=[Y],U=new Map([[Y.id,Y]]),N={left:{tile:Y,dx:-1,dz:0},right:{tile:Y,dx:1,dz:0}},E=Z.length===J.length?Z.slice(1):[...J.slice(0,K).reverse().map((G)=>({type:"play",tile:G.id,side:"left"})),...J.slice(K+1).map((G)=>({type:"play",tile:G.id,side:"right"}))];for(let G of E){let q=$.get(G.tile);if(U.has(q.id))continue;let R=G.side==="left"?"left":G.side==="right"?"right":J.findIndex((F)=>F.id===q.id)<K?"left":"right",k=MX(N[R],q,R).filter((F)=>BX(F,X)),O=k.find((F)=>tW(F,[...X,F],R,!1)&&tW(F,[...X,F],R,!0))||k.find((F)=>tW(F,[...X,F],R,!1))||k[0];if(!O)throw Error(`No safe placement for ${q.id} after ${X.length} tiles`);X.push(O),U.set(q.id,O),N[R]={tile:O,dx:O.dx,dz:O.dz}}return J.map((G)=>U.get(G.id))}function CX(J,Q,$=!1){if($)return{breath:0,headYaw:0,headNod:0};let Z=J*2.173+0.43;return{breath:0.0055*Math.sin(Q*(0.78+J*0.093)+Z),headYaw:0.087*Math.sin(Q*(0.213+J*0.037)+Z)+0.028*Math.sin(Q*(0.487+J*0.029)+Z*1.91),headNod:0.009*Math.sin(Q*(0.267+J*0.035)+Z*0.71)}}var eW=new w(1,0,0),BF=new w(0,1,0),D$=new RJ;function ZK(J){let Q=[];return J.traverse(($)=>{if($.isBone)Q.push({bone:$,position:$.position.clone(),quaternion:$.quaternion.clone(),scale:$.scale.clone()})}),Q}var x8=new w,o6=new w,g8=new w,JK=new w,a6=new w,r6=new w,r7=new w,QK=new RJ,PX=new RJ,IX=new RJ,_X=(J)=>Math.min(1,Math.max(-1,J));function B$(J,Q){J.getWorldQuaternion(PX),J.parent.getWorldQuaternion(IX),J.quaternion.copy(IX.invert()).multiply(Q).multiply(PX),J.updateMatrixWorld(!0)}function MF(J,Q){let{brazo:$,antebrazo:Z,mano:W}=J;if(!$||!Z||!W||!$.parent||!Z.parent)return;$.getWorldPosition(x8),Z.getWorldPosition(o6),W.getWorldPosition(g8);let K=x8.distanceTo(o6),H=o6.distanceTo(g8);if(K<0.00001||H<0.00001)return;JK.copy(Q);let Y=K+H-0.001,X=Math.abs(K-H)+0.001,U=Math.min(Math.max(x8.distanceTo(JK),X),Y);if(a6.subVectors(o6,x8),r6.subVectors(g8,o6),r7.crossVectors(a6,r6),r7.lengthSq()<0.000000001)r7.set(0,1,0);else r7.normalize();let N=Math.acos(_X((K*K+H*H-x8.distanceToSquared(g8))/(2*K*H))),G=Math.acos(_X((K*K+H*H-U*U)/(2*K*H)))-N;if(B$(Z,QK.setFromAxisAngle(r7,G)),W.getWorldPosition(g8),Math.abs(x8.distanceTo(g8)-U)>0.001)B$(Z,QK.setFromAxisAngle(r7,-2*G)),W.getWorldPosition(g8);if(a6.subVectors(g8,x8),r6.subVectors(JK,x8),a6.lengthSq()<0.000000001||r6.lengthSq()<0.000000001)return;B$($,QK.setFromUnitVectors(a6.normalize(),r6.normalize()))}var zF=new w;function CF(J,Q){let $=T0.seatDistance-T0.tableWidth/2+0.025,Z=J.index*1.7,W=(Q.lado==="Left"?1:-1)*(0.155+Math.sin(Z)*0.018);return zF.set(W,T0.surfaceY+0.03,$+Math.cos(Z*1.3)*0.022)}var PF=new w,$K=new w,Y7=new w,AX=0.03,IF=0.12,wX=0.12,_F=0.42,AF=4,TX=(J)=>J*J*(3-2*J);function wF(J,Q,$,Z){let W=J.jugada;if(!W||Q.lado!=="Right")return Z;if($-W.t0>AF)return J.jugada=null,Z;let K=W.anim;if(K.elapsed<K.duration)return Y7.copy(W.obj.position),Y7.y+=AX,$K.lerpVectors(Z,Y7,TX(Math.min(1,Math.max(0,K.elapsed)/IF)));if(W.aterrizo==null)W.aterrizo=$;let H=$-W.aterrizo;if(Y7.copy(W.hasta),Y7.y+=AX,H<wX)return $K.copy(Y7);let Y=(H-wX)/_F;if(Y>=1)return J.jugada=null,Z;return $K.copy(Y7).lerp(Z,TX(Y))}function TF(J,Q=0){if(!J.brazos)return;J.holder.updateMatrixWorld(!0);for(let $ of J.brazos){let Z=PF.copy(J.holder.localToWorld(CF(J,$)));MF($,wF(J,$,Q,Z))}}var SF=0.19,SX=new w,jF=new RJ,yF=new RJ;function vF(J){if(!J.brazos||!J.spine||!J.spine.parent)return;J.holder.updateMatrixWorld(!0),SX.set(1,0,0).applyQuaternion(J.holder.getWorldQuaternion(jF)),B$(J.spine,yF.setFromAxisAngle(SX,SF))}function M$(J,Q,$=!1){for(let W of J.pose)W.bone.position.copy(W.position),W.bone.quaternion.copy(W.quaternion),W.bone.scale.copy(W.scale);let Z=CX(J.index,Q,$);if(J.spine)J.spine.quaternion.multiply(D$.setFromAxisAngle(eW,Z.breath));if(vF(J),J.head)J.head.quaternion.multiply(D$.setFromAxisAngle(BF,Z.headYaw)),J.head.quaternion.multiply(D$.setFromAxisAngle(eW,Z.headNod));if(!$&&J.reaction){let W=Q-J.reaction.time;if(W>=0&&W<1.2&&J.head){let K=Math.sin(W/1.2*Math.PI)*0.035;J.head.quaternion.multiply(D$.setFromAxisAngle(eW,K))}}TF(J,Q),J.holder.updateMatrixWorld(!0)}function jX({scene:J,texture:Q,mat:$,box:Z,cylinder:W,random:K,teal:H,wood:Y,storeSign:X}){let U=Q((B,L,z)=>{B.fillStyle="#39796d",B.fillRect(0,0,L,z);let _=B.createLinearGradient(0,0,0,z);_.addColorStop(0,"#cac09b18"),_.addColorStop(0.7,"#14382d00"),_.addColorStop(1,"#162d2566"),B.fillStyle=_,B.fillRect(0,0,L,z);for(let A=0;A<7000;A++)B.fillStyle=A%3?"#b4ad8618":"#142d2924",B.fillRect(K()*L,K()*z,1+K()*3,1+K()*2);for(let A=0;A<190;A++){let D=K()*L,I=A<125?z*(0.7+K()*0.3):K()*z,p=6+K()*17;B.fillStyle=A%3?"#a69c7d":"#6a7b6a",B.beginPath();for(let v=0;v<8;v++){let b=v*Math.PI/4,o=p*(0.6+K()*0.5);B.lineTo(D+Math.cos(b)*o,I+Math.sin(b)*o*0.65)}B.fill()}B.strokeStyle="#1b372e24";for(let A=48;A<z;A+=57)B.beginPath(),B.moveTo(0,A),B.lineTo(L,A),B.stroke()},1024,1024);H.map=U,H.color.set("#c7ccbb"),H.needsUpdate=!0,Y.color.set("#bca98a"),Y.roughness=0.84,X.material.map=Q((B,L,z)=>{B.fillStyle="#966045",B.fillRect(0,0,L,z),B.fillStyle="#e7d6a7",B.textAlign="center",B.textBaseline="middle",B.font="bold 66px Georgia",B.fillText("COLMADO LA ESQUINA",L/2,z/2);for(let _=0;_<2000;_++)B.fillStyle=_%2?"#58472c30":"#dec29630",B.fillRect(K()*L,K()*z,1+K()*5,1+K()*3);B.strokeStyle="#57412c",B.lineWidth=7,B.strokeRect(3,3,L-6,z-6)},1024,256),X.material.needsUpdate=!0;let E=["#b68e3c","#a45137","#6a8b62","#bbad8a"].map((B,L)=>new fJ({roughness:0.94,map:Q((z,_,A)=>{z.fillStyle=B,z.fillRect(0,0,_,A);for(let D=0;D<30;D++)z.strokeStyle=D%2?"#fff2":"#0002",z.beginPath(),z.moveTo(K()*_,0),z.lineTo(K()*_,A),z.stroke();z.fillStyle="#dfd1a6",z.fillRect(20,A*0.32,_-40,A*0.36),z.fillStyle="#403c29",z.font="bold 31px Georgia",z.textAlign="center",z.fillText(["CAFÉ","ARROZ","PLÁTANO","AZÚCAR"][L],_/2,A*0.53)},256,384)}));for(let B=0;B<3;B++)for(let L=0;L<8;L++)Z(-3+L*0.17,1.73+B*0.48,-4.46,0.13,0.23,0.075,E[(L+B)%4],(K()-0.5)*0.1);for(let[B,L]of[[-2.7,-3.5],[2.4,-3.3]])Z(B,0.18,L,0.51,0.35,0.4,"#897052"),Z(B+0.05,0.47,L-0.04,0.4,0.23,0.32,"#a68c62");for(let B=0;B<3;B++)W(2.48+B*0.24,0.18,-2.3,0.09,0.1,0.31,"#74a69e",12),W(2.48+B*0.24,0.36,-2.3,0.035,0.043,0.075,"#5b8c84",10);for(let B=0;B<4;B++){let L=new p0(new X8(1,10,7),$(B%2?"#a08e69":"#b0a078"));L.scale.set(0.15,0.24,0.12),L.position.set(-2.6+B*0.25,0.23,-2.1),L.rotation.z=(B-1.5)*0.06,L.castShadow=!0,J.add(L)}let G=new p0(new l9(0.72,0.69),new fJ({roughness:1,map:Q((B,L,z)=>{B.fillStyle="#263d30",B.fillRect(0,0,L,z),B.strokeStyle="#9c8c62",B.lineWidth=16,B.strokeRect(8,8,L-16,z-16),B.fillStyle="#dcdcb8",B.textAlign="center";for(let[_,A,D]of[["HOY HAY",68,43],["CAFÉ",150,48],["HIELO · PAN",228,32],["REFRESCOS",292,31]])B.font=`${D}px Georgia`,B.fillText(_,L/2,A)},384,360)}));G.position.set(-3.43,1.6,-2.33),G.rotation.z=0.025,J.add(G);let q=[];Z(-1.12,1.59,-4,0.42,0.21,0.31,"#677761"),Z(-1.12,1.61,-3.836,0.34,0.1,0.016,"#414b3d"),Z(-0.38,1.5,-3.98,0.3,0.018,0.22,"#c5b887");for(let[B,L,z]of[[0.7,-4.03,"#8b7747"],[0.98,-4.07,"#637751"],[1.29,-4.02,"#a88b50"]])W(B,1.6,L,0.07,0.075,0.25,z,14),W(B,1.739,L,0.077,0.077,0.028,"#aaa386",12);Z(0.2,1.51,-4.01,0.4,0.07,0.28,"#6c5838");for(let B=0;B<4;B++){let L=new p0(new X8(1,10,6),$(B%2?"#bca276":"#a98e61"));L.scale.set(0.055,0.035,0.115),L.position.set(0.07+B*0.085,1.57,-4),L.rotation.y=(B-1.5)*0.13,J.add(L)}let R=new tJ({transparent:!0,depthWrite:!1,map:Q((B,L,z)=>{for(let _=0;_<90;_++)B.fillStyle=_%2?"#152c2110":"#3036230a",B.beginPath(),B.ellipse(L/2+(K()-0.5)*L*0.45,z/2+(K()-0.5)*z*0.45,K()*L*0.24,K()*z*0.18,K()*Math.PI,0,Math.PI*2),B.fill()},256,256)});for(let[B,L,z,_]of[[-2.4,-2.2,1.1,0.9],[2.5,-2.5,1.3,0.8],[0,-3.25,2,0.6]]){let A=new p0(new l9(z,_),R);A.rotation.x=-Math.PI/2,A.position.set(B,0.008,L),J.add(A)}for(let[B,L]of[[-3,-0.9],[3.3,-1.5]]){W(B,0.18,L,0.18,0.13,0.34,"#87553c",14),W(B,0.354,L,0.16,0.16,0.012,"#3f422d",12);let z=new vJ;z.position.set(B,0.36,L),J.add(z);for(let _=0;_<7;_++){let A=new v6;A.moveTo(0,0),A.quadraticCurveTo(-0.09,0.23,0,0.55+K()*0.12),A.quadraticCurveTo(0.09,0.23,0,0);let D=new p0(new h6(A,5),new fJ({color:_%2?"#597d4f":"#3c603e",roughness:1,side:Y9}));D.rotation.set(0.3+K()*0.4,_*Math.PI*2/7,0),z.add(D)}q.push(z)}let k=new l9(0.55,1.3,5,9),O=new p0(k,new fJ({color:"#b2a27c",roughness:1,side:Y9}));O.position.set(-2.85,1.75,-3.05),J.add(O);let F=k.attributes.position,P=F.array.slice();return{update(B){q.forEach((L,z)=>L.rotation.z=Math.sin(B*0.53+z*2.1)*0.015);for(let L=0;L<F.count;L++){let z=P[L*3+1];F.setZ(L,Math.sin(B*1.17+z*3)*0.025*(0.65-z)/1.3)}F.needsUpdate=!0}}}var X7=Math.PI*2,$J=(J=0,Q=0,$=0)=>new w(J,Q,$),fF=[[],[4],[0,8],[0,4,8],[0,2,6,8],[0,2,4,6,8],[0,2,3,5,6,8]];async function tR(J,{onProgress:Q=()=>{}}={}){let $=new g7;$.background=new b0("#132931"),$.fog=new C6("#132931",0.024);let Z=new uJ(42,innerWidth/innerHeight,0.08,90);Z.position.set(3.1,2.65,4.2);let W;try{W=new bW({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{throw Error("This device could not start WebGL. Try a recent desktop browser.")}let K=!new URLSearchParams(location.search).has("hq")&&/SwiftShader|llvmpipe|Software/i.test((()=>{let T=W.getContext(),Q0=T.getExtension("WEBGL_debug_renderer_info");return Q0?T.getParameter(Q0.UNMASKED_RENDERER_WEBGL):""})());W.setSize(innerWidth,innerHeight),W.setPixelRatio(K?0.65:Math.min(devicePixelRatio,1.5,1920/innerWidth)),W.outputColorSpace=g9,W.toneMapping=V6,W.toneMappingExposure=1.08,W.shadowMap.enabled=!K,W.shadowMap.type=TQ,J.appendChild(W.domElement);{let T=new n6(W);$.environment=T.fromScene(new rW,0.04).texture,$.environmentIntensity=0.3,T.dispose()}let H=new aW(Z,W.domElement);H.target.set(0,0.8,-0.15),H.enableDamping=!0,H.dampingFactor=0.065,H.enablePan=!1,H.minDistance=2.3,H.maxDistance=8,H.minPolarAngle=0.25,H.maxPolarAngle=Math.PI*0.48,H.update(),$.add(new U$("#b9c9dd","#4a3b30",0.42));let Y=new c7("#9fb6d6",0.55);Y.position.set(-5,9,5),$.add(Y);let X=new u7("#ffcf94",48,14,Math.PI*0.44,0.8,1.8);X.position.set(0,4.15,0.5),X.target.position.set(0,0.2,0),X.castShadow=!0,X.shadow.mapSize.set(K?1024:2048,K?1024:2048),X.shadow.bias=-0.0004,X.shadow.normalBias=0.035,$.add(X,X.target);let U=new v8("#ffbf7d",17,9,2);U.position.set(0,2.5,-3.5),$.add(U);let N=new Map,E=new Map;function G(T,Q0=0.85,E0=0){let e=T+","+Q0+","+E0;if(!N.has(e))N.set(e,new fJ({color:T,roughness:Q0,metalness:E0}));return N.get(e)}function q(T,Q0,E0,e=[0,0,0],K0=[1,1,1]){let Y0=Q0.uuid;if(!E.has(Y0))E.set(Y0,{material:Q0,geos:[]});let z0=new n0().compose($J(...E0),new RJ().setFromEuler(new _9(...e)),$J(...K0));T.applyMatrix4(z0),E.get(Y0).geos.push(T)}function R(T,Q0,E0,e,K0,Y0,z0,C0=0){q(new Z9(e,K0,Y0),typeof z0==="string"?G(z0):z0,[T,Q0,E0],[0,C0,0])}function k(T,Q0,E0,e,K0,Y0,z0,C0=10,d0=[0,0,0]){q(new o9(e,K0,Y0,C0),typeof z0==="string"?G(z0):z0,[T,Q0,E0],d0)}function O(T,Q0=512,E0=512){let e=document.createElement("canvas");e.width=Q0,e.height=E0,T(e.getContext("2d"),Q0,E0);let K0=new eQ(e);return K0.colorSpace=g9,K0.anisotropy=Math.min(8,W.capabilities.getMaxAnisotropy()),K0}let F=191,P=()=>{return F=Math.imul(F,1664525)+1013904223>>>0,F/4294967296},B=O((T,Q0,E0)=>{T.fillStyle="#65432b",T.fillRect(0,0,Q0,E0);for(let e=0;e<700;e++){T.strokeStyle=`rgba(${P()>0.5?"170,122,70":"35,22,14"},${0.08+P()*0.2})`,T.lineWidth=0.3+P()*2,T.beginPath();let K0=P()*E0;T.moveTo(0,K0);for(let Y0=0;Y0<Q0;Y0+=20)T.lineTo(Y0,K0+Math.sin(Y0*0.013+e)*3);T.stroke()}}),L=new fJ({map:B,roughness:0.65,color:"#e7bc8c"}),z=G("#4c3022",0.75),_=G("#287770"),A=G("#d2c5a2"),D=G("#a65443"),I=O((T,Q0,E0)=>{let e=Q0/2;for(let d0=0;d0<2;d0++)for(let i0=0;i0<2;i0++){let c0=i0*e,TJ=d0*e;T.save(),T.beginPath(),T.rect(c0,TJ,e,e),T.clip(),T.fillStyle="#c4b99f",T.fillRect(c0,TJ,e,e);for(let[B9,E8]of[[c0,TJ],[c0+e,TJ],[c0,TJ+e],[c0+e,TJ+e]])T.strokeStyle="#8d6450",T.lineWidth=e*0.04,T.beginPath(),T.arc(B9,E8,e*0.42,0,Math.PI*2),T.stroke(),T.fillStyle="#4f6763",T.beginPath(),T.arc(B9,E8,e*0.13,0,Math.PI*2),T.fill(),T.strokeStyle="#c4b99f",T.lineWidth=e*0.02,T.beginPath(),T.arc(B9,E8,e*0.11,0,Math.PI*2),T.stroke();let EJ=c0+e/2,D9=TJ+e/2,p8=(B9,E8)=>{T.fillStyle=E8,T.beginPath(),T.moveTo(EJ,D9-B9),T.lineTo(EJ+B9,D9),T.lineTo(EJ,D9+B9),T.lineTo(EJ-B9,D9),T.closePath(),T.fill()};p8(e*0.2,"#8d6450"),p8(e*0.13,"#c4b99f"),p8(e*0.07,"#3a3630"),T.restore(),T.strokeStyle="#7e7563",T.lineWidth=3,T.strokeRect(c0+1.5,TJ+1.5,e-3,e-3)}for(let d0=0;d0<9000;d0++)T.fillStyle=P()>0.5?"rgba(235,228,205,.07)":"rgba(30,28,24,.09)",T.fillRect(P()*Q0,P()*E0,1+P()*2,1+P()*2);for(let d0=0;d0<40;d0++){let i0=T.createRadialGradient(0,0,0,0,0,1),c0=P()*Q0,TJ=P()*E0,EJ=20+P()*90;T.save(),T.translate(c0,TJ),T.scale(EJ,EJ),i0.addColorStop(0,"rgba(40,34,26,.10)"),i0.addColorStop(1,"rgba(40,34,26,0)"),T.fillStyle=i0,T.fillRect(-1,-1,2,2),T.restore()}},1024,1024);I.wrapS=I.wrapT=I8,I.repeat.set(35.55555555555556,27.77777777777778),R(0,-0.1,0,32,0.2,25,new fJ({map:I,roughness:0.86,color:"#9d937f"})),R(0,-0.11,6.3,35,0.1,5.5,"#343b3b"),R(0,0.02,3.45,35,0.2,0.2,"#aaa592");for(let T=-8;T<9;T++)R(T*1.8,-0.045,6.3,0.7,0.012,0.045,"#b9ad83");R(0,1.6,-5.1,7.5,3.4,0.2,_),R(-3.8,1.6,-3.85,0.2,3.4,2.7,_),R(3.8,1.6,-3.85,0.2,3.4,2.7,_),R(-3.48,1.1,-2.52,0.7,2.3,0.32,_),R(3.45,1.1,-2.52,0.8,2.3,0.32,_),R(0,2.95,-2.52,7.5,0.42,0.35,D),R(0,3.24,-3.7,8,0.12,4.4,"#435451");for(let T=0;T<30;T++)R(-4+T*0.276,3.3,-3.7,0.028,0.055,4.6,"#82928a");R(0,0.7,-4.24,3.9,1.4,0.62,L),R(0,1.43,-4.2,4.08,0.1,0.78,L);for(let T=0;T<3;T++)R(-0.6,1.58+T*0.48,-4.78,5.8,0.065,0.38,L),R(-0.6,1.84+T*0.48,-4.98,5.8,0.48,0.065,"#443e30");R(2.95,1.02,-4.55,1.02,2.1,0.8,"#d0ceb8"),R(2.95,1.12,-4.11,0.84,1.55,0.035,"#254c51");for(let T=0;T<3;T++)R(2.95,0.59+T*0.51,-4.05,0.8,0.025,0.05,"#b3c5bc");let p=[];for(let T=0;T<88;T++){let Q0=Math.floor(T/29),E0=T%29;p.push({pos:[-3.18+E0*0.182,1.615+Q0*0.48,-4.69],scale:0.7+T%5*0.07,color:["#566641","#a27735","#293f37","#6b3126"][T%4]})}let v=new f6([new H0(0,0),new H0(0.036,0),new H0(0.043,0.025),new H0(0.043,0.17),new H0(0.019,0.205),new H0(0.017,0.285),new H0(0.021,0.29),new H0(0.021,0.305),new H0(0,0.31)],12);p.forEach((T)=>q(v.clone(),G(T.color,0.3),T.pos,[0,0,0],[T.scale,T.scale,T.scale]));for(let[T,Q0,E0]of[[-3.1,-1.9,"#a15340"],[3.1,-2,"#9d6540"],[-3.2,-2,"#5f6e39"]])for(let e=0;e<3;e++){R(T,0.19+e*0.34,Q0,0.52,0.3,0.4,E0);for(let K0=0;K0<5;K0++)R(T-0.2+K0*0.1,0.18+e*0.34,Q0+0.204,0.055,0.16,0.015,"#2c3025")}for(let T=0;T<5;T++){let Q0=-7-T*3.5;R(Q0,1.5,-3,3.1,3,3.2,T%2?"#b3694f":"#4c8174"),R(Q0,2.2,-1.38,1,0.8,0.045,"#b59961"),R(Q0,2.2,-1.35,0.045,0.86,0.055,"#273e37"),R(Q0,0.98,-1.38,0.9,1.9,0.04,"#354e49")}for(let T=0;T<4;T++)k(-5-T*5,2.3,-2.1,0.08,0.09,4.6,"#665443"),R(-5-T*5,4.2,-2.1,1.8,0.09,0.09,"#514b3d");function b(T,Q0,E0,e="#202d28"){let K0=new m7($J(...T),$J(...E0),$J(...Q0));q(new b6(K0,20,0.008,4,!1),G(e),[0,0,0])}b([-8,3.9,-0.9],[6,3.9,-0.9],[0,2.4,-0.9]);for(let T=0;T<14;T++){let Q0=-5+T*0.78,E0=3.6-0.4*Math.sin(T/13*Math.PI);k(Q0,E0,-0.9,0.026,0.031,0.075,new fJ({color:"#fff0c1",emissive:"#ffbc63",emissiveIntensity:2}),8)}b([0,5,-1],[0,3.75,0.25],[0,4.4,-0.1]),k(0,3.67,0.25,0.08,0.05,0.1,new fJ({color:"#ffe7a6",emissive:"#ffd18b",emissiveIntensity:3}),12);let o=new vJ;o.position.set(4.8,0,-2.8),$.add(o);let S=new p0(new o9(0.1,0.15,4.5,9),G("#696047"));S.position.y=2.25,o.add(S);for(let T=0;T<9;T++){let Q0=new p0(new X8(1,10,5),G(T%2?"#4a654c":"#344e3d"));Q0.scale.set(0.27,0.075,1.5),Q0.position.set(Math.sin(T*X7/9)*0.72,4.35,Math.cos(T*X7/9)*0.72),Q0.rotation.set(0.23,T*X7/9,0),o.add(Q0)}let m=new p0(new b8(T0.tableWidth,T0.tableThickness,T0.tableWidth,3,0.035),L);m.position.y=T0.tableCenterY,m.castShadow=!0,m.receiveShadow=!0,$.add(m);let r=new p0(new b8(T0.feltWidth,0.012,T0.feltWidth,2,0.02),new fJ({color:"#284e3e",roughness:1}));r.position.y=T0.feltCenterY,r.receiveShadow=!0,$.add(r);for(let T of[-0.49,0.49])for(let Q0 of[-0.49,0.49])R(T,0.35,Q0,0.095,0.68,0.095,z);for(let T of[-0.602,0.602])for(let Q0 of[-0.602,0.602])k(T,0.771,Q0,0.044,0.044,0.006,"#231c15",20);let d=new fJ({roughness:0.92,map:O((T,Q0,E0)=>{T.fillStyle="#8f7446",T.fillRect(0,0,Q0,E0);let e=12,K0=Q0/e;for(let Y0=0;Y0<e;Y0++)for(let z0=0;z0<e;z0++){let C0=(z0+Y0)%2===0;for(let d0=0;d0<3;d0++){let i0=150+P()*45|0;T.fillStyle=`rgb(${i0+30},${i0+8},${i0-45})`;let c0=d0*K0/3+K0*0.04,TJ=K0/3-K0*0.08;if(C0)T.fillRect(z0*K0+1,Y0*K0+c0,K0-2,TJ);else T.fillRect(z0*K0+c0,Y0*K0+1,TJ,K0-2)}}T.fillStyle="rgba(40,28,14,.18)";for(let Y0=0;Y0<=e;Y0++)T.fillRect(Y0*K0-1,0,2,E0),T.fillRect(0,Y0*K0-1,Q0,2)},256,256)});for(let T=0;T<4;T++){let[Q0,E0,e]=N8[T],K0=new vJ;K0.position.set(Q0,0,E0),K0.rotation.y=e,$.add(K0);let Y0=G(T%2?"#6e4b33":"#5f412d"),z0=(C0,d0,i0,c0,TJ,EJ,D9=Y0,p8=0.008)=>{let B9=$J(c0,TJ,EJ).applyAxisAngle($J(0,1,0),e).add($J(Q0,0,E0));q(new b8(C0,d0,i0,2,p8),D9,B9.toArray(),[0,e,0])};z0(T0.chairSeatWidth-0.04,0.035,0.5,0,T0.chairSeatY,0,d,0.01);for(let C0 of[-1,1])z0(0.04,0.05,0.54,C0*(T0.chairSeatWidth/2-0.02),T0.chairSeatY-0.005,0);for(let C0 of[-1,1])z0(T0.chairSeatWidth,0.05,0.04,0,T0.chairSeatY-0.005,C0*0.25);for(let C0 of[-0.24,0.24])for(let d0 of[-0.21,0.21])z0(0.04,T0.chairSeatY,0.04,C0,T0.chairSeatY/2,d0);for(let C0 of[-0.24,0.24])z0(0.024,0.024,0.42,C0,0.15,0);z0(0.48,0.024,0.024,0,0.15,0.21);for(let C0 of[-0.24,0.24])z0(0.04,0.52,0.04,C0,T0.chairSeatY+0.26,-0.23);for(let C0 of[0.2,0.33,0.46])z0(0.46,C0===0.46?0.07:0.045,0.022,0,T0.chairSeatY+C0,-0.23)}function X0(T,Q0,E0,e,K0,Y0=60){let z0=O((C0,d0,i0)=>{C0.fillStyle=e,C0.fillRect(0,0,d0,i0),C0.fillStyle=K0,C0.textAlign="center",C0.textBaseline="middle",C0.font=`bold ${Y0}px Georgia`,C0.fillText(T,d0/2,i0/2)},1024,256);return new p0(new l9(Q0,E0),new tJ({map:z0}))}let n=X0("COLMADO  LA ESQUINA",4.8,0.38,"#a05d42","#f8e8b9",64);n.position.set(0,2.94,-2.33),$.add(n);let t=X0("MESA",0.18,0.048,"#284e3e","#81906b",77);t.rotation.x=-Math.PI/2,t.position.set(0,T0.surfaceY+0.001,0.46),$.add(t);let Z0=new vJ;Z0.position.set(0,2.62,-2.2),Z0.rotation.x=-Math.PI/2,$.add(Z0),k(0,2.9,-2.2,0.015,0.015,0.56,"#777a68",8),k(0,3.18,-2.2,0.075,0.075,0.025,"#767763",12);let l0=new p0(new X8(0.075,12,8),G("#41493d"));Z0.add(l0);for(let T=0;T<5;T++){let Q0=new p0(new Z9(0.13,0.5,0.025),G("#85856e",0.88,0.05));Q0.position.set(Math.sin(T*X7/5)*0.285,Math.cos(T*X7/5)*0.285,0),Q0.rotation.z=-T*X7/5,Z0.add(Q0)}let _0=new vJ;_0.position.set(-12,0.05,5.2),$.add(_0);for(let T of[-0.36,0.36]){let Q0=new p0(new Q7(0.19,0.038,7,14),G("#182221"));Q0.position.set(T,0.2,0),_0.add(Q0)}let VJ=new p0(new b8(0.65,0.17,0.2,2,0.04),G("#823e2f",0.45,0.25));VJ.position.y=0.49,_0.add(VJ);let a0=new p0(new Z9(0.35,0.06,0.22),G("#202725"));a0.position.set(-0.08,0.61,0),_0.add(a0);let s=new p0(new o9(0.015,0.015,0.45,6),G("#8c9c96",0.4,0.5));s.position.set(0.32,0.59,0),s.rotation.z=-0.3,_0.add(s);let G0=jX({scene:$,texture:O,mat:G,box:R,cylinder:k,random:P,teal:_,wood:L,storeSign:n});for(let{material:T,geos:Q0}of E.values()){let E0=lY(Q0,!1);if(E0){let e=new p0(E0,T);e.receiveShadow=!0,e.castShadow=!0,$.add(e)}Q0.forEach((e)=>e.dispose())}let U0=new vJ,f0=new vJ;$.add(U0,f0);let x0=new b8(T0.tileLength,T0.tileThickness,T0.tileWidth,2,0.005),h0=G("#f3edda",0.75),jJ=G("#d9d4c1",0.75),JJ=new tJ({color:"#090d0c",toneMapped:!1}),WJ=new tJ({color:"#111410",toneMapped:!1}),NJ=new o9(T0.pipRadius,T0.pipRadius,0.0015,14),KJ=new Z9(0.0035,0.001,T0.tileWidth*0.82),mJ=new Set([x0,NJ,KJ]),zJ=new Set([h0,jJ,JJ,WJ]);function oJ(T,Q0,E0=!1){let e=new vJ,K0=new p0(x0,E0?jJ:h0);if(K0.castShadow=!0,K0.receiveShadow=!0,e.add(K0),!E0){let Y0=[];if([T,Q0].forEach((C0,d0)=>fF[C0].forEach((i0)=>Y0.push($J((d0===0?-1:1)*T0.tileLength/4+(i0%3-1)*T0.pipColumnSpacing,T0.tileThickness/2+0.002,(Math.floor(i0/3)-1)*T0.pipRowSpacing)))),Y0.length){let C0=new Y8(NJ,JJ,Y0.length),d0=new n0;Y0.forEach((i0,c0)=>C0.setMatrixAt(c0,d0.makeTranslation(i0.x,i0.y,i0.z))),e.add(C0)}let z0=new p0(KJ,WJ);z0.position.y=T0.tileThickness/2+0.0015,e.add(z0)}return e}function hJ(T){return $J(T.x,T0.surfaceY+T0.tileThickness/2+0.001,T.z)}let IJ=new p0(new Q7(0.2,0.006,5,38),new tJ({color:"#e8bf70",transparent:!0,opacity:0.7}));IJ.rotation.x=-Math.PI/2,IJ.position.y=0.027,$.add(IJ);let j=[],dJ=[],r0=[],AJ=[],C=new nW,V=0,y=4,l=[];function $0(T){let Q0=new vJ,E0=["coffee","juice","beer","water"][T];if(E0==="beer"){let C0=new p0(v,G("#62421e",0.23,0.05));C0.scale.setScalar(0.85),Q0.add(C0)}else{let C0=new p0(new o9(0.047,0.037,0.105,18),G(E0==="coffee"?"#e4dfc8":E0==="juice"?"#bfa478":"#719b9c",0.3));C0.position.y=0.055,Q0.add(C0);let d0=new p0(new j6(0.041,20),G(E0==="coffee"?"#24150e":E0==="juice"?"#ebbd72":"#9cbfc0",0.16));if(d0.rotation.x=-Math.PI/2,d0.position.y=0.11,Q0.add(d0),E0==="coffee"){let i0=new p0(new o9(0.075,0.07,0.012,20),G("#ded9c3",0.25));Q0.add(i0);let c0=new p0(new Q7(0.024,0.006,6,12),G("#e4dfc8",0.3));c0.position.set(0.052,0.062,0),Q0.add(c0)}}Q0.traverse((C0)=>{if(C0.isMesh)C0.castShadow=!0,C0.receiveShadow=!0});let[e,K0,Y0]=N8[T],z0=$J(-0.44,0.773,0.39).applyAxisAngle($J(0,1,0),Y0).add($J(e,0,K0));z0.x=A8.clamp(z0.x,-0.62,0.62),z0.z=A8.clamp(z0.z,-0.62,0.62),Q0.position.copy(z0),$.add(Q0),AJ.push({group:Q0,home:z0,index:T})}for(let T=0;T<4;T++)$0(T);async function N0(T,Q0){try{Q(`Seating ${["Don Rafa","Marisol","Luis","Carmen"][T]}…`,V/y);let E0=await C.loadAsync(`/models/${Q0}.glb`);dJ[T]=E0;let e=E0.scene,K0=new vJ;K0.add(e);let Y0=new p6(e);if(E0.animations[0])Y0.clipAction(E0.animations.find((EJ)=>EJ.name==="Seated")||E0.animations[0]).play();Y0.setTime(T0.neutralPoseTime),e.updateMatrixWorld(!0),e.traverse((EJ)=>{if(EJ.isSkinnedMesh)EJ.computeBoundingBox();if(EJ.isMesh)EJ.castShadow=!0,EJ.receiveShadow=!0,EJ.frustumCulled=!1,EJ.material.roughness=0.83});let z0=new X9().setFromObject(e),C0=e.getObjectByName("Hips"),d0=C0?.getWorldPosition($J())||z0.getCenter($J());e.position.set(-d0.x,-z0.min.y,-d0.z);let[i0,c0,TJ]=N8[T];if(K0.position.set(i0,0,c0),K0.rotation.y=TJ,$.add(K0),j[T]={root:e,holder:K0,index:T,pose:ZK(e),head:e.getObjectByName("Head"),spine:e.getObjectByName("Spine01"),reaction:null,brazos:["Left","Right"].map((EJ)=>({lado:EJ,hombro:e.getObjectByName(EJ+"Shoulder"),brazo:e.getObjectByName(EJ+"Arm"),antebrazo:e.getObjectByName(EJ+"ForeArm"),mano:e.getObjectByName(EJ+"Hand")}))},V++,Q(V===4?"The table is ready.":`${V} of 4 seats ready`,V/y),r0.length===0&&a>0)q0(a)}catch(E0){l.push(Q0),console.error("Character load failed",Q0,E0),Q(`Could not load ${Q0}. Reload to retry.`,V/y)}}let R0=Promise.all(["rafa-upright","marisol","luis-upright","carmen"].map((T,Q0)=>N0(Q0,T))),c=null,a=0,k0="",S0=0,L0="attract",W0=null,j0=[],g0=0,YJ=0;function f(T){while(T.children.length){let Q0=T.children.pop();Q0.parent=null,Q0.traverse((E0)=>{if(E0.isMesh&&!mJ.has(E0.geometry))E0.geometry.dispose();if(E0.isMesh&&!zJ.has(E0.material))E0.material.dispose()})}}function q0(T){a=T;let Q0=Math.min(8,T);for(let E0=r0.length-1;E0>=Q0;E0--)$.remove(r0[E0].holder),r0.pop();while(r0.length<Q0&&dJ.filter(Boolean).length){let E0=r0.length,e=dJ[E0%4]||dJ.find(Boolean),K0=V$(e.scene),Y0=new vJ;Y0.add(K0);let z0=new p6(K0);if(e.animations[0])z0.clipAction(e.animations.find((c0)=>c0.name==="Seated")||e.animations[0]).play();z0.setTime(T0.neutralPoseTime),K0.updateMatrixWorld(!0),K0.traverse((c0)=>{if(c0.isSkinnedMesh)c0.computeBoundingBox();if(c0.isMesh)c0.castShadow=!1,c0.frustumCulled=!1});let C0=new X9().setFromObject(K0),d0=K0.getObjectByName("Hips")?.getWorldPosition($J())||C0.getCenter($J());K0.position.x-=d0.x,K0.position.y-=C0.min.y,K0.position.z-=d0.z,Y0.position.set(-2.5+E0%4*1.66,0,-2.5-Math.floor(E0/4)*0.65),Y0.rotation.y=0,$.add(Y0);let i0=new p0(new Z9(0.56,0.06,0.54),A);i0.position.set(0,T0.chairSeatY,0),Y0.add(i0),r0.push({root:K0,holder:Y0,pose:ZK(K0),head:K0.getObjectByName("Head"),spine:K0.getObjectByName("Spine01"),index:E0+4})}}function i(T="table"){H.minDistance=T==="seat"?0.4:1.8,H.minPolarAngle=T==="overhead"?0.01:0.25;let Q0,E0=$J(0,0.8,0);if(T==="attract")Q0=$J(2.9,2.4,3.65),E0=$J(0,0.9,-0.23);else if(T==="overhead")Q0=$J(0.001,3.1,0.02),E0=$J(0,T0.surfaceY,0);else if(T==="seat")Q0=$J(0,1.36,0.86),E0=$J(0,0.83,-0.15);else Q0=$J(1.25,2.25,1.9);W0={from:Z.position.clone(),to:Q0,fromTarget:H.target.clone(),toTarget:E0,t:0}}function F0(T,Q0=0){if(c=T,a!==Q0)q0(Q0);let E0=T?T.handNo+":"+T.moves.length+":"+T.phase:"attract";if(E0!==k0){if(k0=E0,f(U0),j0=[],T?.chain.length||0){let K0=zX(T.chain,T.moves);T.chain.forEach((Y0,z0)=>{let C0=oJ(Y0.x,Y0.y);if(C0.position.copy(hJ(K0[z0])),C0.rotation.y=K0[z0].yaw,U0.add(C0),T.event?.type==="play"&&Y0.id===T.event.tile){let[d0,i0]=N8[Y0.seat],c0=$J(d0*0.55,T0.surfaceY+0.08,i0*0.55),TJ=C0.position.clone(),EJ={obj:C0,from:c0,to:TJ,elapsed:0,duration:0.45};j0.push(EJ),C0.position.copy(c0),g0=performance.now();let D9=j[Y0.seat];if(D9)D9.reaction={time:M0.elapsedTime},D9.jugada={t0:M0.elapsedTime,obj:C0,anim:EJ,hasta:TJ}}})}else if(!T||T.phase==="lobby")for(let K0=0;K0<28;K0++){let Y0=oJ(0,0,!0);Y0.position.set((K0*37%23-11)*0.035,T0.surfaceY+0.019+K0%3*0.006,(K0*13%19-9)*0.031),Y0.rotation.y=K0*1.73,U0.add(Y0)}if(T?.phase==="playing"&&T.handNo!==S0&&T.moves.length===0){S0=T.handNo,YJ=performance.now()+3400;for(let K0=0;K0<28;K0++){let Y0=oJ(0,0,!0),z0=$J((K0*37%23-11)*0.032,T0.surfaceY+0.02,(K0*13%19-9)*0.031),[C0,d0]=N8[K0%4];Y0.position.copy(z0),U0.add(Y0),j0.push({obj:Y0,from:z0,to:$J(C0*0.57,T0.surfaceY+0.03,d0*0.57),elapsed:-K0*0.065,duration:1.2,remove:!0,shuffle:!0})}}}{f(f0);let e=[];for(let K0=0;K0<4;K0++){let Y0=!T||T.phase==="lobby"?0:T.counts[K0]??0,[z0,C0,d0]=N8[K0];for(let i0=0;i0<Y0;i0++){let c0=new LJ;c0.quaternion.setFromAxisAngle($J(0,1,0),d0).multiply(new RJ().setFromAxisAngle($J(1,0,0),0.12)).multiply(new RJ().setFromAxisAngle($J(0,1,0),Math.PI/2)).multiply(new RJ().setFromAxisAngle($J(0,0,1),Math.PI/2));let EJ=T0.tableCenterY+T0.tableThickness/2+T0.tileLength/2*Math.cos(0.12)+T0.tileThickness/2*Math.sin(0.12)+0.001;c0.position.copy($J((i0-(Y0-1)/2)*T0.rackSpacing,EJ,-T0.rackRadius).applyAxisAngle($J(0,1,0),d0)),c0.updateMatrix(),e.push(c0.matrix.clone())}}if(e.length){let K0=new Y8(x0,jJ,e.length);e.forEach((Y0,z0)=>K0.setMatrixAt(z0,Y0)),K0.castShadow=!0,K0.receiveShadow=!0,f0.add(K0)}}if(IJ.visible=T?.phase==="playing",IJ.visible){let[e,K0]=N8[T.turn];IJ.position.set(e,0.025,K0)}}let M0=new E$,J0=0,O0=0,m0=0,FJ=60,UJ=!1,N9,k9="high",t6=null;function t7(){if(UJ)return;N9=requestAnimationFrame(t7);let T=M0.getDelta(),Q0=Math.min(T,0.06),E0=t6??M0.elapsedTime,e=performance.now();if(O0++,m0+=T,m0>1)FJ=O0/m0,O0=0,m0=0;J0++;let K0=document.documentElement.classList.contains("reduced");if(W0){W0.t=Math.min(1,W0.t+Q0/1.1);let Y0=W0.t*W0.t*(3-2*W0.t);if(Z.position.lerpVectors(W0.from,W0.to,Y0),H.target.lerpVectors(W0.fromTarget,W0.toTarget,Y0),W0.t===1)W0=null}if(!K0)Z0.rotation.z=E0*3.5,o.rotation.z=Math.sin(E0*0.47)*0.009,G0.update(E0);_0.visible=!0,_0.position.set(-4.7,0.05,2.8),_0.rotation.y=-0.28;for(let Y0 of j.filter(Boolean))M$(Y0,E0,K0);for(let Y0 of r0)M$(Y0,E0,K0);if(j0=j0.filter((Y0)=>{if(Y0.elapsed+=Q0,Y0.elapsed<0)return!0;let z0=Math.min(1,Y0.elapsed/Y0.duration),C0=z0*z0*(3-2*z0);if(Y0.obj.position.lerpVectors(Y0.from,Y0.to,C0),Y0.obj.position.y+=Math.sin(z0*Math.PI)*(Y0.shuffle?0.06:0.13),Y0.shuffle)Y0.obj.rotation.y=Math.sin(z0*X7)*0.6;if(z0===1&&Y0.remove)return U0.remove(Y0.obj),!1;return z0<1}),f0.visible=e>=YJ,H.update(),W.render($,Z),J0%2===0)for(let Y0 of document.querySelectorAll("[data-seatlabel]")){let z0=Number(Y0.dataset.seatlabel),[C0,d0]=N8[z0],i0=j[z0]?.head?.getWorldPosition($J()).add($J(0,0.23,0))||$J(C0,1.45,d0),c0=i0.project(Z);Y0.style.transform=`translate(${(c0.x*0.5+0.5)*innerWidth}px,${(-c0.y*0.5+0.5)*innerHeight}px) translate(-50%,-100%)`,Y0.style.visibility=c0.z>1||Math.abs(c0.x)>1.1||Math.abs(c0.y)>1.15?"hidden":"visible"}if(J0%10===0||J0===1){window.mesaRigDebug=j.filter(Boolean).map((z0)=>({index:z0.index,head:z0.head?.getWorldPosition($J()).toArray(),hip:z0.root.getObjectByName("Hips")?.getWorldPosition($J()).toArray(),rootScale:z0.root.scale.toArray()})),window.mesaDiagnostics={fps:Math.round(FJ),drawCalls:W.info.render.calls,triangles:W.info.render.triangles,characters:V,crowd:a,visibleCrowd:r0.length,boardTiles:c?.chain.length||0,quality:k9,modelErrors:l};let Y0=document.querySelector("#perf");if(Y0)Y0.textContent=`${Math.round(FJ)} fps · ${W.info.render.calls} draws`}}F0(null),t7();let U7=()=>{Z.aspect=innerWidth/innerHeight,Z.updateProjectionMatrix(),W.setSize(innerWidth,innerHeight)};return window.addEventListener("resize",U7),H.addEventListener("start",()=>{W0=null}),{update:F0,setCrowd:q0,setCamera:i,ready:R0,sampleTime(T){t6=T;for(let Q0 of[...j.filter(Boolean),...r0])M$(Q0,T,!1);W.render($,Z)},setMode(T){L0=T,i(T==="attract"?"attract":"table")},quality(T){k9=T,W.shadowMap.enabled=T!=="low"&&!K,W.setPixelRatio(K?0.65:T==="low"?1:Math.min(devicePixelRatio,1.5,1920/innerWidth))},dispose(){UJ=!0,cancelAnimationFrame(N9),window.removeEventListener("resize",U7),H.dispose(),W.dispose(),J.replaceChildren()}}}export{tR as createWorld};

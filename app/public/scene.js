var TK="186",M8={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},D8={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},SK=0,x$=1,jK=2;var p8=1,yK=2,C7=3,k8=0,H9=1,W9=2,d9=0,H6=1,g$=2,p$=3,l$=4,vK=5;var P7=100,fK=101,hK=102,bK=103,xK=104,gK=200,pK=201,lK=202,mK=203,dK=204,uK=205,cK=206,nK=207,sK=208,iK=209,oK=210,aK=211,rK=212,tK=213,eK=214,JH=0,QH=1,$H=2,m$=3,ZH=4,WH=5,KH=6,HH=7,YH=0,XH=1,UH=2,y9=0,d$=1,u$=2,c$=3,Y6=4,n$=5,s$=6,i$=7;var _7=301,l8=302,OQ=303,RQ=304,X6=306,B8=1000,I7=1001,LQ=1002,v9=1003,VQ=1004;var m8=1005;var sJ=1006,A7=1007;var u9=1008;var f9=1009,GH=1010,NH=1011,U6=1012,o$=1013,z8=1014,W8=1015,c9=1016,a$=1017,r$=1018,w7=1020,EH=35902,qH=35899,FH=1021,OH=1022,n9=1023,d8=1026,u8=1027,RH=1028,t$=1029,c8=1030,e$=1031;var JZ=1033,MQ=33776,DQ=33777,kQ=33778,BQ=33779,QZ=35840,$Z=35841,ZZ=35842,WZ=35843,KZ=36196,HZ=37492,YZ=37496,XZ=37488,UZ=37489,zQ=37490,GZ=37491,NZ=37808,EZ=37809,qZ=37810,FZ=37811,OZ=37812,RZ=37813,LZ=37814,VZ=37815,MZ=37816,DZ=37817,kZ=37818,BZ=37819,zZ=37820,CZ=37821,PZ=36492,_Z=36494,IZ=36495,AZ=36283,wZ=36284,CQ=36285,TZ=36286;var SZ=2300,PQ=2301;var jZ=0,G6=1,T7=2;var yZ=0,LH=1,n8="",h9="srgb",E9="srgb-linear",vZ="linear",zJ="srgb";var VH=512,MH=513,DH=514,_Q=515,kH=516,BH=517,IQ=518,zH=519;var fZ="300 es",hZ=2000;function EX(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function qX(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function D7(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function CH(){let J=D7("canvas");return J.style.display="block",J}var lW={},k7=null;function $6(...J){let Q="THREE."+J.shift();if(k7)k7("log",Q,...J);else console.log(Q,...J)}function PH(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function A0(...J){J=PH(J);let Q="THREE."+J.shift();if(k7)k7("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function l0(...J){J=PH(J);let Q="THREE."+J.shift();if(k7)k7("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function b8(...J){let Q=J.join(" ");if(Q in lW)return;lW[Q]=!0,A0(...J)}function _H(J,Q,$){return new Promise(function(Z,W){function K(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:W();break;case J.TIMEOUT_EXPIRED:setTimeout(K,$);break;default:Z()}}setTimeout(K,$)})}var IH={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class b9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let W=Z.indexOf(Q);if(W!==-1)Z.splice(W,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let W=0,K=Z.length;W<K;W++)Z[W].call(this,J);J.target=null}}}var eJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mW=1234567,t7=Math.PI/180,x8=180/Math.PI;function z9(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(eJ[J&255]+eJ[J>>8&255]+eJ[J>>16&255]+eJ[J>>24&255]+"-"+eJ[Q&255]+eJ[Q>>8&255]+"-"+eJ[Q>>16&15|64]+eJ[Q>>24&255]+"-"+eJ[$&63|128]+eJ[$>>8&255]+"-"+eJ[$>>16&255]+eJ[$>>24&255]+eJ[Z&255]+eJ[Z>>8&255]+eJ[Z>>16&255]+eJ[Z>>24&255]).toLowerCase()}function s0(J,Q,$){return Math.max(Q,Math.min($,J))}function bZ(J,Q){return(J%Q+Q)%Q}function FX(J,Q,$,Z,W){return Z+(J-Q)*(W-Z)/($-Q)}function OX(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function e7(J,Q,$){return(1-$)*J+$*Q}function RX(J,Q,$,Z){return e7(J,Q,1-Math.exp(-$*Z))}function LX(J,Q=1){return Q-Math.abs(bZ(J,Q*2)-Q)}function VX(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function MX(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function DX(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function kX(J,Q){return J+Math.random()*(Q-J)}function BX(J){return J*(0.5-Math.random())}function zX(J){if(J!==void 0)mW=J;let Q=mW+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function CX(J){return J*t7}function PX(J){return J*x8}function _X(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function IX(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function AX(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function wX(J,Q,$,Z,W){let{cos:K,sin:H}=Math,Y=K($/2),X=H($/2),U=K((Q+Z)/2),N=H((Q+Z)/2),E=K((Q-Z)/2),G=H((Q-Z)/2),q=K((Z-Q)/2),R=H((Z-Q)/2);switch(W){case"XYX":J.set(Y*N,X*E,X*G,Y*U);break;case"YZY":J.set(X*G,Y*N,X*E,Y*U);break;case"ZXZ":J.set(X*E,X*G,Y*N,Y*U);break;case"XZX":J.set(Y*N,X*R,X*q,Y*U);break;case"YXY":J.set(X*q,Y*N,X*R,Y*U);break;case"ZYZ":J.set(X*R,X*q,Y*N,Y*U);break;default:A0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+W)}}function S9(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:case Uint8ClampedArray:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function LJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var C8={DEG2RAD:t7,RAD2DEG:x8,generateUUID:z9,clamp:s0,euclideanModulo:bZ,mapLinear:FX,inverseLerp:OX,lerp:e7,damp:RX,pingpong:LX,smoothstep:VX,smootherstep:MX,randInt:DX,randFloat:kX,randFloatSpread:BX,seededRandom:zX,degToRad:CX,radToDeg:PX,isPowerOfTwo:_X,ceilPowerOfTwo:IX,floorPowerOfTwo:AX,setQuaternionFromProperEuler:wX,normalize:LJ,denormalize:S9};class W0{static{W0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=s0(this.x,J.x,Q.x),this.y=s0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=s0(this.x,J,Q),this.y=s0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(s0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(s0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=this.x-J.x,K=this.y-J.y;return this.x=W*$-K*Z+J.x,this.y=W*Z+K*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class TJ{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,W,K,H){let Y=$[Z+0],X=$[Z+1],U=$[Z+2],N=$[Z+3],E=W[K+0],G=W[K+1],q=W[K+2],R=W[K+3];if(N!==R||Y!==E||X!==G||U!==q){let V=Y*E+X*G+U*q+N*R;if(V<0)E=-E,G=-G,q=-q,R=-R,V=-V;let O=1-H;if(V<0.9995){let F=Math.acos(V),_=Math.sin(F);O=Math.sin(O*F)/_,H=Math.sin(H*F)/_,Y=Y*O+E*H,X=X*O+G*H,U=U*O+q*H,N=N*O+R*H}else{Y=Y*O+E*H,X=X*O+G*H,U=U*O+q*H,N=N*O+R*H;let F=1/Math.sqrt(Y*Y+X*X+U*U+N*N);Y*=F,X*=F,U*=F,N*=F}}J[Q]=Y,J[Q+1]=X,J[Q+2]=U,J[Q+3]=N}static multiplyQuaternionsFlat(J,Q,$,Z,W,K){let H=$[Z],Y=$[Z+1],X=$[Z+2],U=$[Z+3],N=W[K],E=W[K+1],G=W[K+2],q=W[K+3];return J[Q]=H*q+U*N+Y*G-X*E,J[Q+1]=Y*q+U*E+X*N-H*G,J[Q+2]=X*q+U*G+H*E-Y*N,J[Q+3]=U*q-H*N-Y*E-X*G,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:W,_order:K}=J,H=Math.cos,Y=Math.sin,X=H($/2),U=H(Z/2),N=H(W/2),E=Y($/2),G=Y(Z/2),q=Y(W/2);switch(K){case"XYZ":this._x=E*U*N+X*G*q,this._y=X*G*N-E*U*q,this._z=X*U*q+E*G*N,this._w=X*U*N-E*G*q;break;case"YXZ":this._x=E*U*N+X*G*q,this._y=X*G*N-E*U*q,this._z=X*U*q-E*G*N,this._w=X*U*N+E*G*q;break;case"ZXY":this._x=E*U*N-X*G*q,this._y=X*G*N+E*U*q,this._z=X*U*q+E*G*N,this._w=X*U*N-E*G*q;break;case"ZYX":this._x=E*U*N-X*G*q,this._y=X*G*N+E*U*q,this._z=X*U*q-E*G*N,this._w=X*U*N+E*G*q;break;case"YZX":this._x=E*U*N+X*G*q,this._y=X*G*N+E*U*q,this._z=X*U*q-E*G*N,this._w=X*U*N-E*G*q;break;case"XZY":this._x=E*U*N-X*G*q,this._y=X*G*N-E*U*q,this._z=X*U*q+E*G*N,this._w=X*U*N+E*G*q;break;default:A0("Quaternion: .setFromEuler() encountered an unknown order: "+K)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],W=Q[8],K=Q[1],H=Q[5],Y=Q[9],X=Q[2],U=Q[6],N=Q[10],E=$+H+N;if(E>0){let G=0.5/Math.sqrt(E+1);this._w=0.25/G,this._x=(U-Y)*G,this._y=(W-X)*G,this._z=(K-Z)*G}else if($>H&&$>N){let G=2*Math.sqrt(1+$-H-N);this._w=(U-Y)/G,this._x=0.25*G,this._y=(Z+K)/G,this._z=(W+X)/G}else if(H>N){let G=2*Math.sqrt(1+H-$-N);this._w=(W-X)/G,this._x=(Z+K)/G,this._y=0.25*G,this._z=(Y+U)/G}else{let G=2*Math.sqrt(1+N-$-H);this._w=(K-Z)/G,this._x=(W+X)/G,this._y=(Y+U)/G,this._z=0.25*G}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(s0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:W,_w:K}=J,H=Q._x,Y=Q._y,X=Q._z,U=Q._w;return this._x=$*U+K*H+Z*X-W*Y,this._y=Z*U+K*Y+W*H-$*X,this._z=W*U+K*X+$*Y-Z*H,this._w=K*U-$*H-Z*Y-W*X,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:Z,_z:W,_w:K}=J,H=this.dot(J);if(H<0)$=-$,Z=-Z,W=-W,K=-K,H=-H;let Y=1-Q;if(H<0.9995){let X=Math.acos(H),U=Math.sin(X);Y=Math.sin(Y*X)/U,Q=Math.sin(Q*X)/U,this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+W*Q,this._w=this._w*Y+K*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+Z*Q,this._z=this._z*Y+W*Q,this._w=this._w*Y+K*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),W=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),W*Math.sin(Q),W*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{static{w.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(dW.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(dW.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6]*Z,this.y=W[1]*Q+W[4]*$+W[7]*Z,this.z=W[2]*Q+W[5]*$+W[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements,K=1/(W[3]*Q+W[7]*$+W[11]*Z+W[15]);return this.x=(W[0]*Q+W[4]*$+W[8]*Z+W[12])*K,this.y=(W[1]*Q+W[5]*$+W[9]*Z+W[13])*K,this.z=(W[2]*Q+W[6]*$+W[10]*Z+W[14])*K,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,W=J.x,K=J.y,H=J.z,Y=J.w,X=2*(K*Z-H*$),U=2*(H*Q-W*Z),N=2*(W*$-K*Q);return this.x=Q+Y*X+K*N-H*U,this.y=$+Y*U+H*X-W*N,this.z=Z+Y*N+W*U-K*X,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z,this.y=W[1]*Q+W[5]*$+W[9]*Z,this.z=W[2]*Q+W[6]*$+W[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=s0(this.x,J.x,Q.x),this.y=s0(this.y,J.y,Q.y),this.z=s0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=s0(this.x,J,Q),this.y=s0(this.y,J,Q),this.z=s0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(s0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:W}=J,K=Q.x,H=Q.y,Y=Q.z;return this.x=Z*Y-W*H,this.y=W*K-$*Y,this.z=$*H-Z*K,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return Y$.copy(this).projectOnVector(J),this.sub(Y$)}reflect(J){return this.sub(Y$.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(s0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var Y$=new w,dW=new TJ;class u0{static{u0.prototype.isMatrix3=!0}constructor(J,Q,$,Z,W,K,H,Y,X){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,K,H,Y,X)}set(J,Q,$,Z,W,K,H,Y,X){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=H,U[3]=Q,U[4]=W,U[5]=Y,U[6]=$,U[7]=K,U[8]=X,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,K=$[0],H=$[3],Y=$[6],X=$[1],U=$[4],N=$[7],E=$[2],G=$[5],q=$[8],R=Z[0],V=Z[3],O=Z[6],F=Z[1],_=Z[4],k=Z[7],L=Z[2],z=Z[5],I=Z[8];return W[0]=K*R+H*F+Y*L,W[3]=K*V+H*_+Y*z,W[6]=K*O+H*k+Y*I,W[1]=X*R+U*F+N*L,W[4]=X*V+U*_+N*z,W[7]=X*O+U*k+N*I,W[2]=E*R+G*F+q*L,W[5]=E*V+G*_+q*z,W[8]=E*O+G*k+q*I,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8];return Q*K*U-Q*H*X-$*W*U+$*H*Y+Z*W*X-Z*K*Y}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],N=U*K-H*X,E=H*Y-U*W,G=X*W-K*Y,q=Q*N+$*E+Z*G;if(q===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/q;return J[0]=N*R,J[1]=(Z*X-U*$)*R,J[2]=(H*$-Z*K)*R,J[3]=E*R,J[4]=(U*Q-Z*Y)*R,J[5]=(Z*W-H*Q)*R,J[6]=G*R,J[7]=($*Y-X*Q)*R,J[8]=(K*Q-$*W)*R,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,W,K,H){let Y=Math.cos(W),X=Math.sin(W);return this.set($*Y,$*X,-$*(Y*K+X*H)+K+J,-Z*X,Z*Y,-Z*(-X*K+Y*H)+H+Q,0,0,1),this}scale(J,Q){return b8("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(X$.makeScale(J,Q)),this}rotate(J){return b8("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(X$.makeRotation(-J)),this}translate(J,Q){return b8("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(X$.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var X$=new u0,uW=new u0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),cW=new u0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function TX(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(W,K,H){if(this.enabled===!1||K===H||!K||!H)return W;if(this.spaces[K].transfer==="srgb")W.r=Z8(W.r),W.g=Z8(W.g),W.b=Z8(W.b);if(this.spaces[K].primaries!==this.spaces[H].primaries)W.applyMatrix3(this.spaces[K].toXYZ),W.applyMatrix3(this.spaces[H].fromXYZ);if(this.spaces[H].transfer==="srgb")W.r=V7(W.r),W.g=V7(W.g),W.b=V7(W.b);return W},workingToColorSpace:function(W,K){return this.convert(W,this.workingColorSpace,K)},colorSpaceToWorking:function(W,K){return this.convert(W,K,this.workingColorSpace)},getPrimaries:function(W){return this.spaces[W].primaries},getTransfer:function(W){if(W==="")return"linear";return this.spaces[W].transfer},getToneMappingMode:function(W){return this.spaces[W].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(W,K=this.workingColorSpace){return W.fromArray(this.spaces[K].luminanceCoefficients)},define:function(W){Object.assign(this.spaces,W)},_getMatrix:function(W,K,H){return W.copy(this.spaces[K].toXYZ).multiply(this.spaces[H].fromXYZ)},_getDrawingBufferColorSpace:function(W){return this.spaces[W].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(W=this.workingColorSpace){return this.spaces[W].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(W,K){return b8("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(W,K)},toWorkingColorSpace:function(W,K){return b8("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(W,K)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:uW,fromXYZ:cW,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:uW,fromXYZ:cW,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var r0=TX();function Z8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function V7(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var W7;class xZ{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(W7===void 0)W7=D7("canvas");W7.width=J.width,W7.height=J.height;let Z=W7.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=W7}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=D7("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),W=Z.data;for(let K=0;K<W.length;K++)W[K]=Z8(W[K]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(Z8(Q[$]/255)*255);else Q[$]=Z8(Q[$]);return{data:Q,width:J.width,height:J.height}}else return A0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var SX=0;class N6{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:SX++}),this.uuid=z9(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let W;if(Array.isArray(Z)){W=[];for(let K=0,H=Z.length;K<H;K++)if(Z[K].isDataTexture)W.push(U$(Z[K].image));else W.push(U$(Z[K]))}else W=U$(Z);$.url=W}if(!Q)J.images[this.uuid]=$;return $}}function U$(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return xZ.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return A0("Texture: Unable to serialize Texture."),{}}var jX=0,G$=new w;class hJ extends b9{constructor(J=hJ.DEFAULT_IMAGE,Q=hJ.DEFAULT_MAPPING,$=1001,Z=1001,W=1006,K=1008,H=1023,Y=1009,X=hJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:jX++}),this.uuid=z9(),this.name="",this.source=new N6(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=W,this.minFilter=K,this.anisotropy=X,this.format=H,this.internalFormat=null,this.type=Y,this.offset=new W0(0,0),this.repeat=new W0(1,1),this.center=new W0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new u0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(G$).x}get height(){return this.source.getSize(G$).y}get depth(){return this.source.getSize(G$).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){A0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){A0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}hJ.DEFAULT_IMAGE=null;hJ.DEFAULT_MAPPING=300;hJ.DEFAULT_ANISOTROPY=1;class VJ{static{VJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,Z=1){this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,W=this.w,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*Z+K[12]*W,this.y=K[1]*Q+K[5]*$+K[9]*Z+K[13]*W,this.z=K[2]*Q+K[6]*$+K[10]*Z+K[14]*W,this.w=K[3]*Q+K[7]*$+K[11]*Z+K[15]*W,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,W,K=0.01,H=0.1,Y=J.elements,X=Y[0],U=Y[4],N=Y[8],E=Y[1],G=Y[5],q=Y[9],R=Y[2],V=Y[6],O=Y[10];if(Math.abs(U-E)<0.01&&Math.abs(N-R)<0.01&&Math.abs(q-V)<0.01){if(Math.abs(U+E)<0.1&&Math.abs(N+R)<0.1&&Math.abs(q+V)<0.1&&Math.abs(X+G+O-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let _=(X+1)/2,k=(G+1)/2,L=(O+1)/2,z=(U+E)/4,I=(N+R)/4,A=(q+V)/4;if(_>k&&_>L)if(_<0.01)$=0,Z=0.707106781,W=0.707106781;else $=Math.sqrt(_),Z=z/$,W=I/$;else if(k>L)if(k<0.01)$=0.707106781,Z=0,W=0.707106781;else Z=Math.sqrt(k),$=z/Z,W=A/Z;else if(L<0.01)$=0.707106781,Z=0.707106781,W=0;else W=Math.sqrt(L),$=I/W,Z=A/W;return this.set($,Z,W,Q),this}let F=Math.sqrt((V-q)*(V-q)+(N-R)*(N-R)+(E-U)*(E-U));if(Math.abs(F)<0.001)F=1;return this.x=(V-q)/F,this.y=(N-R)/F,this.z=(E-U)/F,this.w=Math.acos((X+G+O-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=s0(this.x,J.x,Q.x),this.y=s0(this.y,J.y,Q.y),this.z=s0(this.z,J.z,Q.z),this.w=s0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=s0(this.x,J,Q),this.y=s0(this.y,J,Q),this.z=s0(this.z,J,Q),this.w=s0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(s0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gZ extends b9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new VJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new VJ(0,0,J,Q),this.textures=[];let Z={width:J,height:Q,depth:$.depth},W=new hJ(Z),K=$.count;for(let H=0;H<K;H++)this.textures[H]=W.clone(),this.textures[H].isRenderTargetTexture=!0,this.textures[H].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveColorBuffer=$.resolveColorBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this.storeMultisampledColorBuffer=$.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=$.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=$.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,W=this.textures.length;Z<W;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new N6(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class q9 extends gZ{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class AQ extends hJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class pZ extends hJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class d0{static{d0.prototype.isMatrix4=!0}constructor(J,Q,$,Z,W,K,H,Y,X,U,N,E,G,q,R,V){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,W,K,H,Y,X,U,N,E,G,q,R,V)}set(J,Q,$,Z,W,K,H,Y,X,U,N,E,G,q,R,V){let O=this.elements;return O[0]=J,O[4]=Q,O[8]=$,O[12]=Z,O[1]=W,O[5]=K,O[9]=H,O[13]=Y,O[2]=X,O[6]=U,O[10]=N,O[14]=E,O[3]=G,O[7]=q,O[11]=R,O[15]=V,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new d0().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/K7.setFromMatrixColumn(J,0).length(),W=1/K7.setFromMatrixColumn(J,1).length(),K=1/K7.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*W,Q[5]=$[5]*W,Q[6]=$[6]*W,Q[7]=0,Q[8]=$[8]*K,Q[9]=$[9]*K,Q[10]=$[10]*K,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z,K=Math.cos($),H=Math.sin($),Y=Math.cos(Z),X=Math.sin(Z),U=Math.cos(W),N=Math.sin(W);if(J.order==="XYZ"){let E=K*U,G=K*N,q=H*U,R=H*N;Q[0]=Y*U,Q[4]=-Y*N,Q[8]=X,Q[1]=G+q*X,Q[5]=E-R*X,Q[9]=-H*Y,Q[2]=R-E*X,Q[6]=q+G*X,Q[10]=K*Y}else if(J.order==="YXZ"){let E=Y*U,G=Y*N,q=X*U,R=X*N;Q[0]=E+R*H,Q[4]=q*H-G,Q[8]=K*X,Q[1]=K*N,Q[5]=K*U,Q[9]=-H,Q[2]=G*H-q,Q[6]=R+E*H,Q[10]=K*Y}else if(J.order==="ZXY"){let E=Y*U,G=Y*N,q=X*U,R=X*N;Q[0]=E-R*H,Q[4]=-K*N,Q[8]=q+G*H,Q[1]=G+q*H,Q[5]=K*U,Q[9]=R-E*H,Q[2]=-K*X,Q[6]=H,Q[10]=K*Y}else if(J.order==="ZYX"){let E=K*U,G=K*N,q=H*U,R=H*N;Q[0]=Y*U,Q[4]=q*X-G,Q[8]=E*X+R,Q[1]=Y*N,Q[5]=R*X+E,Q[9]=G*X-q,Q[2]=-X,Q[6]=H*Y,Q[10]=K*Y}else if(J.order==="YZX"){let E=K*Y,G=K*X,q=H*Y,R=H*X;Q[0]=Y*U,Q[4]=R-E*N,Q[8]=q*N+G,Q[1]=N,Q[5]=K*U,Q[9]=-H*U,Q[2]=-X*U,Q[6]=G*N+q,Q[10]=E-R*N}else if(J.order==="XZY"){let E=K*Y,G=K*X,q=H*Y,R=H*X;Q[0]=Y*U,Q[4]=-N,Q[8]=X*U,Q[1]=E*N+R,Q[5]=K*U,Q[9]=G*N-q,Q[2]=q*N-G,Q[6]=H*U,Q[10]=R*N+E}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(yX,J,vX)}lookAt(J,Q,$){let Z=this.elements;if(G9.subVectors(J,Q),G9.lengthSq()===0)G9.z=1;if(G9.normalize(),E8.crossVectors($,G9),E8.lengthSq()===0){if(Math.abs($.z)===1)G9.x+=0.0001;else G9.z+=0.0001;G9.normalize(),E8.crossVectors($,G9)}return E8.normalize(),x6.crossVectors(G9,E8),Z[0]=E8.x,Z[4]=x6.x,Z[8]=G9.x,Z[1]=E8.y,Z[5]=x6.y,Z[9]=G9.y,Z[2]=E8.z,Z[6]=x6.z,Z[10]=G9.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,W=this.elements,K=$[0],H=$[4],Y=$[8],X=$[12],U=$[1],N=$[5],E=$[9],G=$[13],q=$[2],R=$[6],V=$[10],O=$[14],F=$[3],_=$[7],k=$[11],L=$[15],z=Z[0],I=Z[4],A=Z[8],M=Z[12],P=Z[1],p=Z[5],y=Z[9],b=Z[13],o=Z[2],T=Z[6],d=Z[10],r=Z[14],l=Z[3],H0=Z[7],n=Z[11],t=Z[15];return W[0]=K*z+H*P+Y*o+X*l,W[4]=K*I+H*p+Y*T+X*H0,W[8]=K*A+H*y+Y*d+X*n,W[12]=K*M+H*b+Y*r+X*t,W[1]=U*z+N*P+E*o+G*l,W[5]=U*I+N*p+E*T+G*H0,W[9]=U*A+N*y+E*d+G*n,W[13]=U*M+N*b+E*r+G*t,W[2]=q*z+R*P+V*o+O*l,W[6]=q*I+R*p+V*T+O*H0,W[10]=q*A+R*y+V*d+O*n,W[14]=q*M+R*b+V*r+O*t,W[3]=F*z+_*P+k*o+L*l,W[7]=F*I+_*p+k*T+L*H0,W[11]=F*A+_*y+k*d+L*n,W[15]=F*M+_*b+k*r+L*t,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],W=J[12],K=J[1],H=J[5],Y=J[9],X=J[13],U=J[2],N=J[6],E=J[10],G=J[14],q=J[3],R=J[7],V=J[11],O=J[15],F=Y*G-X*E,_=H*G-X*N,k=H*E-Y*N,L=K*G-X*U,z=K*E-Y*U,I=K*N-H*U;return Q*(R*F-V*_+O*k)-$*(q*F-V*L+O*z)+Z*(q*_-R*L+O*I)-W*(q*k-R*z+V*I)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],W=J[1],K=J[5],H=J[9],Y=J[2],X=J[6],U=J[10];return Q*(K*U-H*X)-$*(W*U-H*Y)+Z*(W*X-K*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],W=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],N=J[9],E=J[10],G=J[11],q=J[12],R=J[13],V=J[14],O=J[15],F=Q*H-$*K,_=Q*Y-Z*K,k=Q*X-W*K,L=$*Y-Z*H,z=$*X-W*H,I=Z*X-W*Y,A=U*R-N*q,M=U*V-E*q,P=U*O-G*q,p=N*V-E*R,y=N*O-G*R,b=E*O-G*V,o=F*b-_*y+k*p+L*P-z*M+I*A;if(o===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/o;return J[0]=(H*b-Y*y+X*p)*T,J[1]=(Z*y-$*b-W*p)*T,J[2]=(R*I-V*z+O*L)*T,J[3]=(E*z-N*I-G*L)*T,J[4]=(Y*P-K*b-X*M)*T,J[5]=(Q*b-Z*P+W*M)*T,J[6]=(V*k-q*I-O*_)*T,J[7]=(U*I-E*k+G*_)*T,J[8]=(K*y-H*P+X*A)*T,J[9]=($*P-Q*y-W*A)*T,J[10]=(q*z-R*k+O*F)*T,J[11]=(N*k-U*z-G*F)*T,J[12]=(H*M-K*p-Y*A)*T,J[13]=(Q*p-$*M+Z*A)*T,J[14]=(R*_-q*L-V*F)*T,J[15]=(U*L-N*_+E*F)*T,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,W=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=W,Q[1]*=$,Q[5]*=Z,Q[9]*=W,Q[2]*=$,Q[6]*=Z,Q[10]*=W,Q[3]*=$,Q[7]*=Z,Q[11]*=W,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),W=1-$,K=J.x,H=J.y,Y=J.z,X=W*K,U=W*H;return this.set(X*K+$,X*H-Z*Y,X*Y+Z*H,0,X*H+Z*Y,U*H+$,U*Y-Z*K,0,X*Y-Z*H,U*Y+Z*K,W*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,W,K){return this.set(1,$,W,0,J,1,K,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,W=Q._x,K=Q._y,H=Q._z,Y=Q._w,X=W+W,U=K+K,N=H+H,E=W*X,G=W*U,q=W*N,R=K*U,V=K*N,O=H*N,F=Y*X,_=Y*U,k=Y*N,L=$.x,z=$.y,I=$.z;return Z[0]=(1-(R+O))*L,Z[1]=(G+k)*L,Z[2]=(q-_)*L,Z[3]=0,Z[4]=(G-k)*z,Z[5]=(1-(E+O))*z,Z[6]=(V+F)*z,Z[7]=0,Z[8]=(q+_)*I,Z[9]=(V-F)*I,Z[10]=(1-(E+R))*I,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let W=this.determinantAffine();if(W===0)return $.set(1,1,1),Q.identity(),this;let K=K7.set(Z[0],Z[1],Z[2]).length(),H=K7.set(Z[4],Z[5],Z[6]).length(),Y=K7.set(Z[8],Z[9],Z[10]).length();if(W<0)K=-K;A9.copy(this);let X=1/K,U=1/H,N=1/Y;return A9.elements[0]*=X,A9.elements[1]*=X,A9.elements[2]*=X,A9.elements[4]*=U,A9.elements[5]*=U,A9.elements[6]*=U,A9.elements[8]*=N,A9.elements[9]*=N,A9.elements[10]*=N,Q.setFromRotationMatrix(A9),$.x=K,$.y=H,$.z=Y,this}makePerspective(J,Q,$,Z,W,K,H=2000,Y=!1){let X=this.elements,U=2*W/(Q-J),N=2*W/($-Z),E=(Q+J)/(Q-J),G=($+Z)/($-Z),q,R;if(Y)q=W/(K-W),R=K*W/(K-W);else if(H===2000)q=-(K+W)/(K-W),R=-2*K*W/(K-W);else if(H===2001)q=-K/(K-W),R=-K*W/(K-W);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=E,X[12]=0,X[1]=0,X[5]=N,X[9]=G,X[13]=0,X[2]=0,X[6]=0,X[10]=q,X[14]=R,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,Q,$,Z,W,K,H=2000,Y=!1){let X=this.elements,U=2/(Q-J),N=2/($-Z),E=-(Q+J)/(Q-J),G=-($+Z)/($-Z),q,R;if(Y)q=1/(K-W),R=K/(K-W);else if(H===2000)q=-2/(K-W),R=-(K+W)/(K-W);else if(H===2001)q=-1/(K-W),R=-W/(K-W);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=0,X[12]=E,X[1]=0,X[5]=N,X[9]=0,X[13]=G,X[2]=0,X[6]=0,X[10]=q,X[14]=R,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var K7=new w,A9=new d0,yX=new w(0,0,0),vX=new w(1,1,1),E8=new w,x6=new w,G9=new w,nW=new d0,sW=new TJ;class j9{constructor(J=0,Q=0,$=0,Z=j9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,W=Z[0],K=Z[4],H=Z[8],Y=Z[1],X=Z[5],U=Z[9],N=Z[2],E=Z[6],G=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(s0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-U,G),this._z=Math.atan2(-K,W);else this._x=Math.atan2(E,X),this._z=0;break;case"YXZ":if(this._x=Math.asin(-s0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(H,G),this._z=Math.atan2(Y,X);else this._y=Math.atan2(-N,W),this._z=0;break;case"ZXY":if(this._x=Math.asin(s0(E,-1,1)),Math.abs(E)<0.9999999)this._y=Math.atan2(-N,G),this._z=Math.atan2(-K,X);else this._y=0,this._z=Math.atan2(Y,W);break;case"ZYX":if(this._y=Math.asin(-s0(N,-1,1)),Math.abs(N)<0.9999999)this._x=Math.atan2(E,G),this._z=Math.atan2(Y,W);else this._x=0,this._z=Math.atan2(-K,X);break;case"YZX":if(this._z=Math.asin(s0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,X),this._y=Math.atan2(-N,W);else this._x=0,this._y=Math.atan2(H,G);break;case"XZY":if(this._z=Math.asin(-s0(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(E,X),this._y=Math.atan2(H,W);else this._x=Math.atan2(-U,G),this._y=0;break;default:A0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return nW.makeRotationFromQuaternion(J),this.setFromRotationMatrix(nW,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return sW.setFromEuler(this),this.setFromQuaternion(sW,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}j9.DEFAULT_ORDER="XYZ";class wQ{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var fX=0,iW=new w,H7=new TJ,r9=new d0,g6=new w,d7=new w,hX=new w,bX=new TJ,oW=new w(1,0,0),aW=new w(0,1,0),rW=new w(0,0,1),tW={type:"added"},xX={type:"removed"},Y7={type:"childadded",child:null},N$={type:"childremoved",child:null};class kJ extends b9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:fX++}),this.uuid=z9(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kJ.DEFAULT_UP.clone();let J=new w,Q=new j9,$=new TJ,Z=new w(1,1,1);function W(){$.setFromEuler(Q,!1)}function K(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(W),$._onChange(K),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new d0},normalMatrix:{value:new u0}}),this.matrix=new d0,this.matrixWorld=new d0,this.matrixAutoUpdate=kJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wQ,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return H7.setFromAxisAngle(J,Q),this.quaternion.multiply(H7),this}rotateOnWorldAxis(J,Q){return H7.setFromAxisAngle(J,Q),this.quaternion.premultiply(H7),this}rotateX(J){return this.rotateOnAxis(oW,J)}rotateY(J){return this.rotateOnAxis(aW,J)}rotateZ(J){return this.rotateOnAxis(rW,J)}translateOnAxis(J,Q){return iW.copy(J).applyQuaternion(this.quaternion),this.position.add(iW.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(oW,J)}translateY(J){return this.translateOnAxis(aW,J)}translateZ(J){return this.translateOnAxis(rW,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(r9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)g6.copy(J);else g6.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),d7.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)r9.lookAt(d7,g6,this.up);else r9.lookAt(g6,d7,this.up);if(this.quaternion.setFromRotationMatrix(r9),Z)r9.extractRotation(Z.matrixWorld),H7.setFromRotationMatrix(r9),this.quaternion.premultiply(H7.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return l0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(tW),Y7.child=J,this.dispatchEvent(Y7),Y7.child=null;else l0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(xX),N$.child=J,this.dispatchEvent(N$),N$.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),r9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),r9.multiply(J.parent.matrixWorld);return J.applyMatrix4(r9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(tW),Y7.child=J,this.dispatchEvent(Y7),Y7.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let K=this.children[$].getObjectByProperty(J,Q);if(K!==void 0)return K}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let W=0,K=Z.length;W<K;W++)Z[W].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(d7,J,hX),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(d7,bX,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:Z}=J,W=this.matrix.elements;W[12]+=Q-W[0]*Q-W[4]*$-W[8]*Z,W[13]+=$-W[1]*Q-W[5]*$-W[9]*Z,W[14]+=Z-W[2]*Q-W[6]*$-W[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let W=this.children;for(let K=0,H=W.length;K<H;K++)W[K].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,Z.name=this.name,Z.castShadow=this.castShadow,Z.receiveShadow=this.receiveShadow,Z.visible=this.visible,Z.frustumCulled=this.frustumCulled,Z.renderOrder=this.renderOrder,Z.static=this.static,Z.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((H)=>({...H,boundingBox:H.boundingBox?H.boundingBox.toJSON():void 0,boundingSphere:H.boundingSphere?H.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((H)=>({...H})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function W(H,Y){if(H[Y.uuid]===void 0)H[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=W(J.geometries,this.geometry);let H=this.geometry.parameters;if(H!==void 0&&H.shapes!==void 0){let Y=H.shapes;if(Array.isArray(Y))for(let X=0,U=Y.length;X<U;X++){let N=Y[X];W(J.shapes,N)}else W(J.shapes,Y)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)W(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let H=[];for(let Y=0,X=this.material.length;Y<X;Y++)H.push(W(J.materials,this.material[Y]));Z.material=H}else Z.material=W(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let H=0;H<this.children.length;H++)Z.children.push(this.children[H].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let H=0;H<this.animations.length;H++){let Y=this.animations[H];Z.animations.push(W(J.animations,Y))}}if(Q){let H=K(J.geometries),Y=K(J.materials),X=K(J.textures),U=K(J.images),N=K(J.shapes),E=K(J.skeletons),G=K(J.animations),q=K(J.nodes);if(H.length>0)$.geometries=H;if(Y.length>0)$.materials=Y;if(X.length>0)$.textures=X;if(U.length>0)$.images=U;if(N.length>0)$.shapes=N;if(E.length>0)$.skeletons=E;if(G.length>0)$.animations=G;if(q.length>0)$.nodes=q}return $.object=Z,$;function K(H){let Y=[];for(let X in H){let U=H[X];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}kJ.DEFAULT_UP=new w(0,1,0);kJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;kJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class yJ extends kJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var gX={type:"move"};class E6{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new yJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new yJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new yJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,W=null,K=null,H=this._targetRay,Y=this._grip,X=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(X&&J.hand){K=!0;for(let R of J.hand.values()){let V=Q.getJointPose(R,$),O=this._getHandJoint(X,R);if(V!==null)O.matrix.fromArray(V.transform.matrix),O.matrix.decompose(O.position,O.rotation,O.scale),O.matrixWorldNeedsUpdate=!0,O.jointRadius=V.radius;O.visible=V!==null}let U=X.joints["index-finger-tip"],N=X.joints["thumb-tip"],E=U.position.distanceTo(N.position),G=0.02,q=0.005;if(X.inputState.pinching&&E>G+q)X.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!X.inputState.pinching&&E<=G-q)X.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(W=Q.getPose(J.gripSpace,$),W!==null){if(Y.matrix.fromArray(W.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,W.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(W.linearVelocity);else Y.hasLinearVelocity=!1;if(W.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(W.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(H!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&W!==null)Z=W;if(Z!==null){if(H.matrix.fromArray(Z.transform.matrix),H.matrix.decompose(H.position,H.rotation,H.scale),H.matrixWorldNeedsUpdate=!0,Z.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(Z.linearVelocity);else H.hasLinearVelocity=!1;if(Z.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(Z.angularVelocity);else H.hasAngularVelocity=!1;this.dispatchEvent(gX)}}}if(H!==null)H.visible=Z!==null;if(Y!==null)Y.visible=W!==null;if(X!==null)X.visible=K!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new yJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var AH={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},q8={h:0,s:0,l:0},p6={h:0,s:0,l:0};function E$(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class g0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,r0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=r0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,r0.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=r0.workingColorSpace){if(J=bZ(J,1),Q=s0(Q,0,1),$=s0($,0,1),Q===0)this.r=this.g=this.b=$;else{let W=$<=0.5?$*(1+Q):$+Q-$*Q,K=2*$-W;this.r=E$(K,W,J+0.3333333333333333),this.g=E$(K,W,J),this.b=E$(K,W,J-0.3333333333333333)}return r0.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(W){if(W===void 0)return;if(parseFloat(W)<1)A0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let W,K=Z[1],H=Z[2];switch(K){case"rgb":case"rgba":if(W=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(W[4]),this.setRGB(Math.min(255,parseInt(W[1],10))/255,Math.min(255,parseInt(W[2],10))/255,Math.min(255,parseInt(W[3],10))/255,Q);if(W=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(W[4]),this.setRGB(Math.min(100,parseInt(W[1],10))/100,Math.min(100,parseInt(W[2],10))/100,Math.min(100,parseInt(W[3],10))/100,Q);break;case"hsl":case"hsla":if(W=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(W[4]),this.setHSL(parseFloat(W[1])/360,parseFloat(W[2])/100,parseFloat(W[3])/100,Q);break;default:A0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let W=Z[1],K=W.length;if(K===3)return this.setRGB(parseInt(W.charAt(0),16)/15,parseInt(W.charAt(1),16)/15,parseInt(W.charAt(2),16)/15,Q);else if(K===6)return this.setHex(parseInt(W,16),Q);else A0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=AH[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else A0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=Z8(J.r),this.g=Z8(J.g),this.b=Z8(J.b),this}copyLinearToSRGB(J){return this.r=V7(J.r),this.g=V7(J.g),this.b=V7(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return r0.workingToColorSpace(J9.copy(this),J),Math.round(s0(J9.r*255,0,255))*65536+Math.round(s0(J9.g*255,0,255))*256+Math.round(s0(J9.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=r0.workingColorSpace){r0.workingToColorSpace(J9.copy(this),Q);let{r:$,g:Z,b:W}=J9,K=Math.max($,Z,W),H=Math.min($,Z,W),Y,X,U=(H+K)/2;if(H===K)Y=0,X=0;else{let N=K-H;switch(X=U<=0.5?N/(K+H):N/(2-K-H),K){case $:Y=(Z-W)/N+(Z<W?6:0);break;case Z:Y=(W-$)/N+2;break;case W:Y=($-Z)/N+4;break}Y/=6}return J.h=Y,J.s=X,J.l=U,J}getRGB(J,Q=r0.workingColorSpace){return r0.workingToColorSpace(J9.copy(this),Q),J.r=J9.r,J.g=J9.g,J.b=J9.b,J}getStyle(J="srgb"){r0.workingToColorSpace(J9.copy(this),J);let{r:Q,g:$,b:Z}=J9;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(q8),this.setHSL(q8.h+J,q8.s+Q,q8.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(q8),J.getHSL(p6);let $=e7(q8.h,p6.h,Q),Z=e7(q8.s,p6.s,Q),W=e7(q8.l,p6.l,Q);return this.setHSL($,Z,W),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,W=J.elements;return this.r=W[0]*Q+W[3]*$+W[6]*Z,this.g=W[1]*Q+W[4]*$+W[7]*Z,this.b=W[2]*Q+W[5]*$+W[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var J9=new g0;g0.NAMES=AH;class q6{constructor(J,Q=0.00025){this.isFogExp2=!0,this.name="",this.color=new g0(J),this.density=Q}clone(){return new q6(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class TQ extends kJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new j9,this.environmentIntensity=1,this.environmentRotation=new j9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var w9=new w,t9=new w,q$=new w,e9=new w,X7=new w,U7=new w,eW=new w,F$=new w,O$=new w,R$=new w,L$=new VJ,V$=new VJ,M$=new VJ;class B9{constructor(J=new w,Q=new w,$=new w){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),w9.subVectors(J,Q),Z.cross(w9);let W=Z.lengthSq();if(W>0)return Z.multiplyScalar(1/Math.sqrt(W));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,W){w9.subVectors(Z,Q),t9.subVectors($,Q),q$.subVectors(J,Q);let K=w9.dot(w9),H=w9.dot(t9),Y=w9.dot(q$),X=t9.dot(t9),U=t9.dot(q$),N=K*X-H*H;if(N===0)return W.set(0,0,0),null;let E=1/N,G=(X*Y-H*U)*E,q=(K*U-H*Y)*E;return W.set(1-G-q,q,G)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,e9)===null)return!1;return e9.x>=0&&e9.y>=0&&e9.x+e9.y<=1}static getInterpolation(J,Q,$,Z,W,K,H,Y){if(this.getBarycoord(J,Q,$,Z,e9)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(W,e9.x),Y.addScaledVector(K,e9.y),Y.addScaledVector(H,e9.z),Y}static getInterpolatedAttribute(J,Q,$,Z,W,K){return L$.setScalar(0),V$.setScalar(0),M$.setScalar(0),L$.fromBufferAttribute(J,Q),V$.fromBufferAttribute(J,$),M$.fromBufferAttribute(J,Z),K.setScalar(0),K.addScaledVector(L$,W.x),K.addScaledVector(V$,W.y),K.addScaledVector(M$,W.z),K}static isFrontFacing(J,Q,$,Z){return w9.subVectors($,Q),t9.subVectors(J,Q),w9.cross(t9).dot(Z)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return w9.subVectors(this.c,this.b),t9.subVectors(this.a,this.b),w9.cross(t9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return B9.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return B9.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,W){return B9.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,W)}containsPoint(J){return B9.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return B9.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,W=this.c,K,H;X7.subVectors(Z,$),U7.subVectors(W,$),F$.subVectors(J,$);let Y=X7.dot(F$),X=U7.dot(F$);if(Y<=0&&X<=0)return Q.copy($);O$.subVectors(J,Z);let U=X7.dot(O$),N=U7.dot(O$);if(U>=0&&N<=U)return Q.copy(Z);let E=Y*N-U*X;if(E<=0&&Y>=0&&U<=0)return K=Y/(Y-U),Q.copy($).addScaledVector(X7,K);R$.subVectors(J,W);let G=X7.dot(R$),q=U7.dot(R$);if(q>=0&&G<=q)return Q.copy(W);let R=G*X-Y*q;if(R<=0&&X>=0&&q<=0)return H=X/(X-q),Q.copy($).addScaledVector(U7,H);let V=U*q-G*N;if(V<=0&&N-U>=0&&G-q>=0)return eW.subVectors(W,Z),H=(N-U)/(N-U+(G-q)),Q.copy(Z).addScaledVector(eW,H);let O=1/(V+R+E);return K=R*O,H=E*O,Q.copy($).addScaledVector(X7,K).addScaledVector(U7,H)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class K9{constructor(J=new w(1/0,1/0,1/0),Q=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(T9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(T9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=T9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let W=$.getAttribute("position");if(Q===!0&&W!==void 0&&J.isInstancedMesh!==!0)for(let K=0,H=W.count;K<H;K++){if(J.isMesh===!0)J.getVertexPosition(K,T9);else T9.fromBufferAttribute(W,K);T9.applyMatrix4(J.matrixWorld),this.expandByPoint(T9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();l6.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();l6.copy($.boundingBox)}l6.applyMatrix4(J.matrixWorld),this.union(l6)}}let Z=J.children;for(let W=0,K=Z.length;W<K;W++)this.expandByObject(Z[W],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,T9),T9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(u7),m6.subVectors(this.max,u7),G7.subVectors(J.a,u7),N7.subVectors(J.b,u7),E7.subVectors(J.c,u7),F8.subVectors(N7,G7),O8.subVectors(E7,N7),y8.subVectors(G7,E7);let Q=[0,-F8.z,F8.y,0,-O8.z,O8.y,0,-y8.z,y8.y,F8.z,0,-F8.x,O8.z,0,-O8.x,y8.z,0,-y8.x,-F8.y,F8.x,0,-O8.y,O8.x,0,-y8.y,y8.x,0];if(!D$(Q,G7,N7,E7,m6))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!D$(Q,G7,N7,E7,m6))return!1;return d6.crossVectors(F8,O8),Q=[d6.x,d6.y,d6.z],D$(Q,G7,N7,E7,m6)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,T9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(T9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return J8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),J8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),J8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),J8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),J8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),J8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),J8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),J8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(J8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var J8=[new w,new w,new w,new w,new w,new w,new w,new w],T9=new w,l6=new K9,G7=new w,N7=new w,E7=new w,F8=new w,O8=new w,y8=new w,u7=new w,m6=new w,d6=new w,v8=new w;function D$(J,Q,$,Z,W){for(let K=0,H=J.length-3;K<=H;K+=3){v8.fromArray(J,K);let Y=W.x*Math.abs(v8.x)+W.y*Math.abs(v8.y)+W.z*Math.abs(v8.z),X=Q.dot(v8),U=$.dot(v8),N=Z.dot(v8);if(Math.max(-Math.max(X,U,N),Math.min(X,U,N))>Y)return!1}return!0}var gJ=new w,u6=new W0,pX=0;class mJ extends b9{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pX++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,W=this.itemSize;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)u6.fromBufferAttribute(this,Q),u6.applyMatrix3(J),this.setXY(Q,u6.x,u6.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)gJ.fromBufferAttribute(this,Q),gJ.applyMatrix3(J),this.setXYZ(Q,gJ.x,gJ.y,gJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)gJ.fromBufferAttribute(this,Q),gJ.applyMatrix4(J),this.setXYZ(Q,gJ.x,gJ.y,gJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)gJ.fromBufferAttribute(this,Q),gJ.applyNormalMatrix(J),this.setXYZ(Q,gJ.x,gJ.y,gJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)gJ.fromBufferAttribute(this,Q),gJ.transformDirection(J),this.setXYZ(Q,gJ.x,gJ.y,gJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=S9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=LJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=S9(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=LJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=S9(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=LJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=S9(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=LJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=S9(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=LJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=LJ(Q,this.array),$=LJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=LJ(Q,this.array),$=LJ($,this.array),Z=LJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J*=this.itemSize,this.normalized)Q=LJ(Q,this.array),$=LJ($,this.array),Z=LJ(Z,this.array),W=LJ(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=W,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}}class SQ extends mJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class jQ extends mJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class HJ extends mJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var lX=new K9,c7=new w,k$=new w;class F9{constructor(J=new w,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else lX.setFromPoints(J).getCenter($);let Z=0;for(let W=0,K=J.length;W<K;W++)Z=Math.max(Z,$.distanceToSquared(J[W]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;c7.subVectors(J,this.center);let Q=c7.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(c7,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else k$.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(c7.copy(J.center).add(k$)),this.expandByPoint(c7.copy(J.center).sub(k$));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var mX=0,D9=new d0,B$=new kJ,q7=new w,N9=new K9,n7=new K9,nJ=new w;class SJ extends b9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mX++}),this.uuid=z9(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((EX(J))?jQ:SQ)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let W=new u0().getNormalMatrix(J);$.applyNormalMatrix(W),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return D9.makeRotationFromQuaternion(J),this.applyMatrix4(D9),this}rotateX(J){return D9.makeRotationX(J),this.applyMatrix4(D9),this}rotateY(J){return D9.makeRotationY(J),this.applyMatrix4(D9),this}rotateZ(J){return D9.makeRotationZ(J),this.applyMatrix4(D9),this}translate(J,Q,$){return D9.makeTranslation(J,Q,$),this.applyMatrix4(D9),this}scale(J,Q,$){return D9.makeScale(J,Q,$),this.applyMatrix4(D9),this}lookAt(J){return B$.lookAt(J),B$.updateMatrix(),this.applyMatrix4(B$.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(q7).negate(),this.translate(q7.x,q7.y,q7.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,W=J.length;Z<W;Z++){let K=J[Z];$.push(K.x,K.y,K.z||0)}this.setAttribute("position",new HJ($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let W=J[Z];Q.setXYZ(Z,W.x,W.y,W.z||0)}if(J.length>Q.count)A0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new K9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){l0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(N9.setFromBufferAttribute(W),this.morphTargetsRelative)nJ.addVectors(this.boundingBox.min,N9.min),this.boundingBox.expandByPoint(nJ),nJ.addVectors(this.boundingBox.max,N9.max),this.boundingBox.expandByPoint(nJ);else this.boundingBox.expandByPoint(N9.min),this.boundingBox.expandByPoint(N9.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))l0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new F9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){l0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(J){let $=this.boundingSphere.center;if(N9.setFromBufferAttribute(J),Q)for(let W=0,K=Q.length;W<K;W++){let H=Q[W];if(n7.setFromBufferAttribute(H),this.morphTargetsRelative)nJ.addVectors(N9.min,n7.min),N9.expandByPoint(nJ),nJ.addVectors(N9.max,n7.max),N9.expandByPoint(nJ);else N9.expandByPoint(n7.min),N9.expandByPoint(n7.max)}N9.getCenter($);let Z=0;for(let W=0,K=J.count;W<K;W++)nJ.fromBufferAttribute(J,W),Z=Math.max(Z,$.distanceToSquared(nJ));if(Q)for(let W=0,K=Q.length;W<K;W++){let H=Q[W],Y=this.morphTargetsRelative;for(let X=0,U=H.count;X<U;X++){if(nJ.fromBufferAttribute(H,X),Y)q7.fromBufferAttribute(J,X),nJ.add(q7);Z=Math.max(Z,$.distanceToSquared(nJ))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))l0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){l0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:W}=Q,K=this.getAttribute("tangent");if(K===void 0||K.count!==$.count)K=new mJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",K);let H=[],Y=[];for(let A=0;A<$.count;A++)H[A]=new w,Y[A]=new w;let X=new w,U=new w,N=new w,E=new W0,G=new W0,q=new W0,R=new w,V=new w;function O(A,M,P){X.fromBufferAttribute($,A),U.fromBufferAttribute($,M),N.fromBufferAttribute($,P),E.fromBufferAttribute(W,A),G.fromBufferAttribute(W,M),q.fromBufferAttribute(W,P),U.sub(X),N.sub(X),G.sub(E),q.sub(E);let p=1/(G.x*q.y-q.x*G.y);if(!isFinite(p))return;R.copy(U).multiplyScalar(q.y).addScaledVector(N,-G.y).multiplyScalar(p),V.copy(N).multiplyScalar(G.x).addScaledVector(U,-q.x).multiplyScalar(p),H[A].add(R),H[M].add(R),H[P].add(R),Y[A].add(V),Y[M].add(V),Y[P].add(V)}let F=this.groups;if(F.length===0)F=[{start:0,count:J.count}];for(let A=0,M=F.length;A<M;++A){let P=F[A],p=P.start,y=P.count;for(let b=p,o=p+y;b<o;b+=3)O(J.getX(b+0),J.getX(b+1),J.getX(b+2))}let _=new w,k=new w,L=new w,z=new w;function I(A){L.fromBufferAttribute(Z,A),z.copy(L);let M=H[A];_.copy(M),_.sub(L.multiplyScalar(L.dot(M))).normalize(),k.crossVectors(z,M);let p=k.dot(Y[A])<0?-1:1;K.setXYZW(A,_.x,_.y,_.z,p)}for(let A=0,M=F.length;A<M;++A){let P=F[A],p=P.start,y=P.count;for(let b=p,o=p+y;b<o;b+=3)I(J.getX(b+0)),I(J.getX(b+1)),I(J.getX(b+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new mJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let E=0,G=$.count;E<G;E++)$.setXYZ(E,0,0,0);let Z=new w,W=new w,K=new w,H=new w,Y=new w,X=new w,U=new w,N=new w;if(J)for(let E=0,G=J.count;E<G;E+=3){let q=J.getX(E+0),R=J.getX(E+1),V=J.getX(E+2);Z.fromBufferAttribute(Q,q),W.fromBufferAttribute(Q,R),K.fromBufferAttribute(Q,V),U.subVectors(K,W),N.subVectors(Z,W),U.cross(N),H.fromBufferAttribute($,q),Y.fromBufferAttribute($,R),X.fromBufferAttribute($,V),H.add(U),Y.add(U),X.add(U),$.setXYZ(q,H.x,H.y,H.z),$.setXYZ(R,Y.x,Y.y,Y.z),$.setXYZ(V,X.x,X.y,X.z)}else for(let E=0,G=Q.count;E<G;E+=3)Z.fromBufferAttribute(Q,E+0),W.fromBufferAttribute(Q,E+1),K.fromBufferAttribute(Q,E+2),U.subVectors(K,W),N.subVectors(Z,W),U.cross(N),$.setXYZ(E+0,U.x,U.y,U.z),$.setXYZ(E+1,U.x,U.y,U.z),$.setXYZ(E+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)nJ.fromBufferAttribute(J,Q),nJ.normalize(),J.setXYZ(Q,nJ.x,nJ.y,nJ.z)}toNonIndexed(){function J(H,Y){let{array:X,itemSize:U,normalized:N}=H,E=new X.constructor(Y.length*U),G=0,q=0;for(let R=0,V=Y.length;R<V;R++){if(H.isInterleavedBufferAttribute)G=Y[R]*H.data.stride+H.offset;else G=Y[R]*U;for(let O=0;O<U;O++)E[q++]=X[G++]}return new mJ(E,U,N)}if(this.index===null)return A0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new SJ,$=this.index.array,Z=this.attributes;for(let H in Z){let Y=Z[H],X=J(Y,$);Q.setAttribute(H,X)}let W=this.morphAttributes;for(let H in W){let Y=[],X=W[H];for(let U=0,N=X.length;U<N;U++){let E=X[U],G=J(E,$);Y.push(G)}Q.morphAttributes[H]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;for(let H=0,Y=K.length;H<Y;H++){let X=K[H];Q.addGroup(X.start,X.count,X.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let X in Y)if(Y[X]!==void 0)J[X]=Y[X];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let X=$[Y];J.data.attributes[Y]=X.toJSON(J.data)}let Z={},W=!1;for(let Y in this.morphAttributes){let X=this.morphAttributes[Y],U=[];for(let N=0,E=X.length;N<E;N++){let G=X[N];U.push(G.toJSON(J.data))}if(U.length>0)Z[Y]=U,W=!0}if(W)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;if(K.length>0)J.data.groups=JSON.parse(JSON.stringify(K));let H=this.boundingSphere;if(H!==null)J.data.boundingSphere=H.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let X in Z){let U=Z[X];this.setAttribute(X,U.clone(Q))}let W=J.morphAttributes;for(let X in W){let U=[],N=W[X];for(let E=0,G=N.length;E<G;E++)U.push(N[E].clone(Q));this.morphAttributes[X]=U}this.morphTargetsRelative=J.morphTargetsRelative;let K=J.groups;for(let X=0,U=K.length;X<U;X++){let N=K[X];this.addGroup(N.start,N.count,N.materialIndex)}let H=J.boundingBox;if(H!==null)this.boundingBox=H.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class F6{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=z9()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,$){J*=this.stride,$*=Q.stride;for(let Z=0,W=this.stride;Z<W;Z++)this.array[J+Z]=Q.array[$+Z];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=z9();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),$=new this.constructor(Q,this.stride);return $.setUsage(this.usage),$}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=z9();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let Q={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return Q.usage=this.usage,Q}}var Z9=new w;class S7{constructor(J,Q,$,Z=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=$,this.normalized=Z}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,$=this.data.count;Q<$;Q++)Z9.fromBufferAttribute(this,Q),Z9.applyMatrix4(J),this.setXYZ(Q,Z9.x,Z9.y,Z9.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)Z9.fromBufferAttribute(this,Q),Z9.applyNormalMatrix(J),this.setXYZ(Q,Z9.x,Z9.y,Z9.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)Z9.fromBufferAttribute(this,Q),Z9.transformDirection(J),this.setXYZ(Q,Z9.x,Z9.y,Z9.z);return this}getComponent(J,Q){let $=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)$=S9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=LJ($,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=$,this}setX(J,Q){if(this.normalized)Q=LJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=LJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=LJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=LJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=S9(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=S9(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=S9(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=S9(Q,this.array);return Q}setXY(J,Q,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=LJ(Q,this.array),$=LJ($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=LJ(Q,this.array),$=LJ($,this.array),Z=LJ(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this}setXYZW(J,Q,$,Z,W){if(J=J*this.data.stride+this.offset,this.normalized)Q=LJ(Q,this.array),$=LJ($,this.array),Z=LJ(Z,this.array),W=LJ(W,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this.data.array[J+3]=W,this}clone(J){if(J===void 0){$6("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[Z+W])}return new mJ(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new S7(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){$6("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let W=0;W<this.itemSize;W++)Q.push(this.data.array[Z+W])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var z$=new w,dX=new w,uX=new u0;class k9{constructor(J=new w(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=z$.subVectors($,Q).cross(dX.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let Z=J.delta(z$),W=this.normal.dot(Z);if(W===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let K=-(J.start.dot(this.normal)+this.constant)/W;if($===!0&&(K<0||K>1))return null;return Q.copy(J.start).addScaledVector(Z,K)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||uX.getNormalMatrix(J),Z=this.coplanarPoint(z$).applyMatrix4(J),W=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(W),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var cX=0;class O9 extends b9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:cX++}),this.uuid=z9(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new g0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){A0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){A0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector2&&($&&$.isVector2)||Z&&Z.isEuler&&($&&$.isEuler)||Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,$.blending=this.blending,$.side=this.side,$.shadowSide=this.shadowSide,$.vertexColors=this.vertexColors,$.opacity=this.opacity,$.transparent=this.transparent,$.blendSrc=this.blendSrc,$.blendDst=this.blendDst,$.blendEquation=this.blendEquation,$.blendSrcAlpha=this.blendSrcAlpha,$.blendDstAlpha=this.blendDstAlpha,$.blendEquationAlpha=this.blendEquationAlpha,$.blendColor=this.blendColor.getHex(),$.blendAlpha=this.blendAlpha,$.depthFunc=this.depthFunc,$.depthTest=this.depthTest,$.depthWrite=this.depthWrite,$.colorWrite=this.colorWrite,$.clipIntersection=this.clipIntersection,$.clipShadows=this.clipShadows,$.stencilWriteMask=this.stencilWriteMask,$.stencilFunc=this.stencilFunc,$.stencilRef=this.stencilRef,$.stencilFuncMask=this.stencilFuncMask,$.stencilFail=this.stencilFail,$.stencilZFail=this.stencilZFail,$.stencilZPass=this.stencilZPass,$.stencilWrite=this.stencilWrite,$.polygonOffset=this.polygonOffset,$.polygonOffsetFactor=this.polygonOffsetFactor,$.polygonOffsetUnits=this.polygonOffsetUnits,$.dithering=this.dithering,$.alphaTest=this.alphaTest,$.alphaHash=this.alphaHash,$.alphaToCoverage=this.alphaToCoverage,$.premultipliedAlpha=this.premultipliedAlpha,$.forceSinglePass=this.forceSinglePass,$.allowOverride=this.allowOverride,$.visible=this.visible,$.toneMapped=this.toneMapped,$.name=this.name,this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)$.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)$.clippingPlanes=this.clippingPlanes.map((W)=>W.toJSON());if(this.rotation!==void 0)$.rotation=this.rotation;if(this.depthPacking!==void 0)$.depthPacking=this.depthPacking;if(this.linewidth!==void 0)$.linewidth=this.linewidth;if(this.linecap!==void 0)$.linecap=this.linecap;if(this.linejoin!==void 0)$.linejoin=this.linejoin;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.wireframe!==void 0)$.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)$.flatShading=this.flatShading;if(this.fog!==void 0)$.fog=this.fog;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(W){let K=[];for(let H in W){let Y=W[H];delete Y.metadata,K.push(Y)}return K}if(Q){let W=Z(J.textures),K=Z(J.images);if(W.length>0)$.textures=W;if(K.length>0)$.images=K}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new g0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map(($)=>new k9().fromJSON($));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new W0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new W0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let W=0;W!==Z;++W)$[W]=Q[W].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var Q8=new w,C$=new w,c6=new w,n6=new w;class P8{constructor(J=new w,Q=new w(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,Q8)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=Q8.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return Q8.copy(this.origin).addScaledVector(this.direction,Q),Q8.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){C$.copy(J).add(Q).multiplyScalar(0.5),c6.copy(Q).sub(J).normalize(),n6.copy(this.origin).sub(C$);let W=J.distanceTo(Q)*0.5,K=-this.direction.dot(c6),H=n6.dot(this.direction),Y=-n6.dot(c6),X=n6.lengthSq(),U=Math.abs(1-K*K),N,E,G,q;if(U>0)if(N=K*Y-H,E=K*H-Y,q=W*U,N>=0)if(E>=-q)if(E<=q){let R=1/U;N*=R,E*=R,G=N*(N+K*E+2*H)+E*(K*N+E+2*Y)+X}else E=W,N=Math.max(0,-(K*E+H)),G=-N*N+E*(E+2*Y)+X;else E=-W,N=Math.max(0,-(K*E+H)),G=-N*N+E*(E+2*Y)+X;else if(E<=-q)N=Math.max(0,-(-K*W+H)),E=N>0?-W:Math.min(Math.max(-W,-Y),W),G=-N*N+E*(E+2*Y)+X;else if(E<=q)N=0,E=Math.min(Math.max(-W,-Y),W),G=E*(E+2*Y)+X;else N=Math.max(0,-(K*W+H)),E=N>0?W:Math.min(Math.max(-W,-Y),W),G=-N*N+E*(E+2*Y)+X;else E=K>0?-W:W,N=Math.max(0,-(K*E+H)),G=-N*N+E*(E+2*Y)+X;if($)$.copy(this.origin).addScaledVector(this.direction,N);if(Z)Z.copy(C$).addScaledVector(c6,E);return G}intersectSphere(J,Q){if(J.radius<0)return null;Q8.subVectors(J.center,this.origin);let $=Q8.dot(this.direction),Z=Q8.dot(Q8)-$*$,W=J.radius*J.radius;if(Z>W)return null;let K=Math.sqrt(W-Z),H=$-K,Y=$+K;if(Y<0)return null;if(H<0)return this.at(Y,Q);return this.at(H,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,W,K,H,Y,X=1/this.direction.x,U=1/this.direction.y,N=1/this.direction.z,E=this.origin;if(X>=0)$=(J.min.x-E.x)*X,Z=(J.max.x-E.x)*X;else $=(J.max.x-E.x)*X,Z=(J.min.x-E.x)*X;if(U>=0)W=(J.min.y-E.y)*U,K=(J.max.y-E.y)*U;else W=(J.max.y-E.y)*U,K=(J.min.y-E.y)*U;if($>K||W>Z)return null;if(W>$||isNaN($))$=W;if(K<Z||isNaN(Z))Z=K;if(N>=0)H=(J.min.z-E.z)*N,Y=(J.max.z-E.z)*N;else H=(J.max.z-E.z)*N,Y=(J.min.z-E.z)*N;if($>Y||H>Z)return null;if(H>$||$!==$)$=H;if(Y<Z||Z!==Z)Z=Y;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,Q8)!==null}intersectTriangle(J,Q,$,Z,W){let K=this.origin,H=this.direction,Y=H.x,X=H.y,U=H.z,N=J.x-K.x,E=J.y-K.y,G=J.z-K.z,q=Q.x-K.x,R=Q.y-K.y,V=Q.z-K.z,O=$.x-K.x,F=$.y-K.y,_=$.z-K.z,k=Math.abs(Y),L=Math.abs(X),z=Math.abs(U),I,A,M,P,p,y,b,o,T,d,r,l;if(k>=L&&k>=z)if(M=Y,y=N,T=q,l=O,Y>=0)I=X,A=U,P=E,p=G,b=R,o=V,d=F,r=_;else I=U,A=X,P=G,p=E,b=V,o=R,d=_,r=F;else if(L>=z)if(M=X,y=E,T=R,l=F,X>=0)I=U,A=Y,P=G,p=N,b=V,o=q,d=_,r=O;else I=Y,A=U,P=N,p=G,b=q,o=V,d=O,r=_;else if(M=U,y=G,T=V,l=_,U>=0)I=Y,A=X,P=N,p=E,b=q,o=R,d=O,r=F;else I=X,A=Y,P=E,p=N,b=R,o=q,d=F,r=O;if(M===0)return null;let H0=I/M,n=A/M,t=1/M,$0=P-H0*y,w0=p-n*y,f0=b-H0*T,qJ=o-n*T,n0=d-H0*l,s=r-n*l,Z0=n0*qJ-s*f0,X0=$0*s-w0*n0,y0=f0*w0-qJ*$0;if(Z){if(Z0<0||X0<0||y0<0)return null}else if((Z0<0||X0<0||y0<0)&&(Z0>0||X0>0||y0>0))return null;let b0=Z0+X0+y0;if(b0===0)return null;let j0=t*(Z0*y+X0*T+y0*l);if(b0>0?j0<0:j0>0)return null;return this.at(j0/b0,W)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oJ extends O9{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new g0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new j9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var JK=new d0,f8=new P8,s6=new F9,QK=new w,i6=new w,o6=new w,a6=new w,P$=new w,r6=new w,$K=new w,t6=new w;class c0 extends kJ{constructor(J=new SJ,Q=new oJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let H=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=W}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,W=$.morphAttributes.position,K=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let H=this.morphTargetInfluences;if(W&&H){r6.set(0,0,0);for(let Y=0,X=W.length;Y<X;Y++){let U=H[Y],N=W[Y];if(U===0)continue;if(P$.fromBufferAttribute(N,J),K)r6.addScaledVector(P$,U);else r6.addScaledVector(P$.sub(Q),U)}Q.add(r6)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.material,W=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(s6.copy($.boundingSphere),s6.applyMatrix4(W),f8.copy(J.ray).recast(J.near),s6.containsPoint(f8.origin)===!1){if(f8.intersectSphere(s6,QK)===null)return;if(f8.origin.distanceToSquared(QK)>(J.far-J.near)**2)return}if(JK.copy(W).invert(),f8.copy(J.ray).applyMatrix4(JK),$.boundingBox!==null){if(f8.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,f8)}_computeIntersections(J,Q,$){let Z,W=this.geometry,K=this.material,H=W.index,Y=W.attributes.position,X=W.attributes.uv,U=W.attributes.uv1,N=W.attributes.normal,E=W.groups,G=W.drawRange;if(H!==null)if(Array.isArray(K))for(let q=0,R=E.length;q<R;q++){let V=E[q],O=K[V.materialIndex],F=Math.max(V.start,G.start),_=Math.min(H.count,Math.min(V.start+V.count,G.start+G.count));for(let k=F,L=_;k<L;k+=3){let z=H.getX(k),I=H.getX(k+1),A=H.getX(k+2);if(Z=e6(this,O,J,$,X,U,N,z,I,A),Z)Z.faceIndex=Math.floor(k/3),Z.face.materialIndex=V.materialIndex,Q.push(Z)}}else{let q=Math.max(0,G.start),R=Math.min(H.count,G.start+G.count);for(let V=q,O=R;V<O;V+=3){let F=H.getX(V),_=H.getX(V+1),k=H.getX(V+2);if(Z=e6(this,K,J,$,X,U,N,F,_,k),Z)Z.faceIndex=Math.floor(V/3),Q.push(Z)}}else if(Y!==void 0)if(Array.isArray(K))for(let q=0,R=E.length;q<R;q++){let V=E[q],O=K[V.materialIndex],F=Math.max(V.start,G.start),_=Math.min(Y.count,Math.min(V.start+V.count,G.start+G.count));for(let k=F,L=_;k<L;k+=3){let z=k,I=k+1,A=k+2;if(Z=e6(this,O,J,$,X,U,N,z,I,A),Z)Z.faceIndex=Math.floor(k/3),Z.face.materialIndex=V.materialIndex,Q.push(Z)}}else{let q=Math.max(0,G.start),R=Math.min(Y.count,G.start+G.count);for(let V=q,O=R;V<O;V+=3){let F=V,_=V+1,k=V+2;if(Z=e6(this,K,J,$,X,U,N,F,_,k),Z)Z.faceIndex=Math.floor(V/3),Q.push(Z)}}}}function nX(J,Q,$,Z,W,K,H,Y){let X;if(Q.side===1)X=Z.intersectTriangle(H,K,W,!0,Y);else X=Z.intersectTriangle(W,K,H,Q.side===0,Y);if(X===null)return null;t6.copy(Y),t6.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(t6);if(U<$.near||U>$.far)return null;return{distance:U,point:t6.clone(),object:J}}function e6(J,Q,$,Z,W,K,H,Y,X,U){J.getVertexPosition(Y,i6),J.getVertexPosition(X,o6),J.getVertexPosition(U,a6);let N=nX(J,Q,$,Z,i6,o6,a6,$K);if(N){let E=new w;if(B9.getBarycoord($K,i6,o6,a6,E),W)N.uv=B9.getInterpolatedAttribute(W,Y,X,U,E,new W0);if(K)N.uv1=B9.getInterpolatedAttribute(K,Y,X,U,E,new W0);if(H){if(N.normal=B9.getInterpolatedAttribute(H,Y,X,U,E,new w),N.normal.dot(Z.direction)>0)N.normal.multiplyScalar(-1)}let G={a:Y,b:X,c:U,normal:new w,materialIndex:0};B9.getNormal(i6,o6,a6,G.normal),N.face=G,N.barycoord=E}return N}var s7=new VJ,ZK=new VJ,WK=new VJ,sX=new VJ,KK=new d0,JQ=new w,_$=new F9,HK=new d0,I$=new P8;class yQ extends c0{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new d0,this.bindMatrixInverse=new d0,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new K9;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,JQ),this.boundingBox.expandByPoint(JQ)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new F9;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,JQ),this.boundingSphere.expandByPoint(JQ)}copy(J,Q){if(super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,Q){let $=this.material,Z=this.matrixWorld;if($===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(_$.copy(this.boundingSphere),_$.applyMatrix4(Z),J.ray.intersectsSphere(_$)===!1)return;if(HK.copy(Z).invert(),I$.copy(J.ray).applyMatrix4(HK),this.boundingBox!==null){if(I$.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,I$)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new VJ,Q=this.geometry.attributes.skinWeight;for(let $=0,Z=Q.count;$<Z;$++){J.fromBufferAttribute(Q,$);let W=1/J.manhattanLength();if(W!==1/0)J.multiplyScalar(W);else J.set(1,0,0,0);Q.setXYZW($,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else A0("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let $=this.skeleton,Z=this.geometry;if(ZK.fromBufferAttribute(Z.attributes.skinIndex,J),WK.fromBufferAttribute(Z.attributes.skinWeight,J),Q.isVector4)s7.copy(Q),Q.set(0,0,0,0);else s7.set(...Q,1),Q.set(0,0,0);s7.applyMatrix4(this.bindMatrix);for(let W=0;W<4;W++){let K=WK.getComponent(W);if(K!==0){let H=ZK.getComponent(W);KK.multiplyMatrices($.bones[H].matrixWorld,$.boneInverses[H]),Q.addScaledVector(sX.copy(s7).applyMatrix4(KK),K)}}if(Q.isVector4)Q.w=s7.w;return Q.applyMatrix4(this.bindMatrixInverse)}}class O6 extends kJ{constructor(){super();this.isBone=!0,this.type="Bone"}}class R6 extends hJ{constructor(J=null,Q=1,$=1,Z,W,K,H,Y,X=1003,U=1003,N,E){super(null,K,H,Y,X,U,Z,W,N,E);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var YK=new d0,iX=new d0;class L6{constructor(J=[],Q=[]){this.uuid=z9(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){A0("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let $=0,Z=this.bones.length;$<Z;$++)this.boneInverses.push(new d0)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let $=new d0;if(this.bones[J])$.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push($)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($)$.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($){if($.parent&&$.parent.isBone)$.matrix.copy($.parent.matrixWorld).invert(),$.matrix.multiply($.matrixWorld);else $.matrix.copy($.matrixWorld);$.matrix.decompose($.position,$.quaternion,$.scale)}}}update(){let J=this.bones,Q=this.boneInverses,$=this.boneMatrices,Z=this.boneTexture;for(let W=0,K=J.length;W<K;W++){let H=J[W]?J[W].matrixWorld:iX;YK.multiplyMatrices(H,Q[W]),YK.toArray($,W*16)}if(Z!==null)Z.needsUpdate=!0}clone(){return new L6(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let $=new R6(Q,J,J,1023,1015);return $.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=$,this}getBoneByName(J){for(let Q=0,$=this.bones.length;Q<$;Q++){let Z=this.bones[Q];if(Z.name===J)return Z}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let $=0,Z=J.bones.length;$<Z;$++){let W=J.bones[$],K=Q[W];if(K===void 0)A0("Skeleton: No bone found with UUID:",W),K=new O6;this.bones.push(K),this.boneInverses.push(new d0().fromArray(J.boneInverses[$]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,$=this.boneInverses;for(let Z=0,W=Q.length;Z<W;Z++){let K=Q[Z];J.bones.push(K.uuid);let H=$[Z];J.boneInverses.push(H.toArray())}return J}}class V8 extends mJ{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var F7=new d0,XK=new d0,QQ=[],UK=new K9,oX=new d0,i7=new c0,o7=new F9;class s8 extends c0{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new V8(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<$;Z++)this.setMatrixAt(Z,oX)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new K9;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,F7),UK.copy(J.boundingBox).applyMatrix4(F7),this.boundingBox.union(UK)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new F9;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,F7),o7.copy(J.boundingSphere).applyMatrix4(F7),this.boundingSphere.union(o7)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=this.morphTexture.source.data.data,W=$.length+1,K=J*W+1;for(let H=0;H<$.length;H++)$[H]=Z[K+H]}raycast(J,Q){let $=this.matrixWorld,Z=this.count;if(i7.geometry=this.geometry,i7.material=this.material,i7.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(o7.copy(this.boundingSphere),o7.applyMatrix4($),J.ray.intersectsSphere(o7)===!1)return;for(let W=0;W<Z;W++){this.getMatrixAt(W,F7),XK.multiplyMatrices($,F7),i7.matrixWorld=XK,i7.raycast(J,QQ);for(let K=0,H=QQ.length;K<H;K++){let Y=QQ[K];Y.instanceId=W,Y.object=this,Q.push(Y)}QQ.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new V8(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=$.length+1;if(this.morphTexture===null)this.morphTexture=new R6(new Float32Array(Z*this.count),Z,this.count,1028,1015);let W=this.morphTexture.source.data.data,K=0;for(let X=0;X<$.length;X++)K+=$[X];let H=this.geometry.morphTargetsRelative?1:1-K,Y=Z*J;return W[Y]=H,W.set($,Y+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var h8=new F9,aX=new W0(0.5,0.5),$Q=new w;class V6{constructor(J=new k9,Q=new k9,$=new k9,Z=new k9,W=new k9,K=new k9){this.planes=[J,Q,$,Z,W,K]}set(J,Q,$,Z,W,K){let H=this.planes;return H[0].copy(J),H[1].copy(Q),H[2].copy($),H[3].copy(Z),H[4].copy(W),H[5].copy(K),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,W=J.elements,K=W[0],H=W[1],Y=W[2],X=W[3],U=W[4],N=W[5],E=W[6],G=W[7],q=W[8],R=W[9],V=W[10],O=W[11],F=W[12],_=W[13],k=W[14],L=W[15];if(Z[0].setComponents(X-K,G-U,O-q,L-F).normalize(),Z[1].setComponents(X+K,G+U,O+q,L+F).normalize(),Z[2].setComponents(X+H,G+N,O+R,L+_).normalize(),Z[3].setComponents(X-H,G-N,O-R,L-_).normalize(),$)Z[4].setComponents(Y,E,V,k).normalize(),Z[5].setComponents(X-Y,G-E,O-V,L-k).normalize();else if(Z[4].setComponents(X-Y,G-E,O-V,L-k).normalize(),Q===2000)Z[5].setComponents(X+Y,G+E,O+V,L+k).normalize();else if(Q===2001)Z[5].setComponents(Y,E,V,k).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();h8.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();h8.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(h8)}intersectsSprite(J){h8.center.set(0,0,0);let Q=aX.distanceTo(J.center);return h8.radius=0.7071067811865476+Q,h8.applyMatrix4(J.matrixWorld),this.intersectsSphere(h8)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let W=0;W<6;W++)if(Q[W].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if($Q.x=Z.normal.x>0?J.max.x:J.min.x,$Q.y=Z.normal.y>0?J.max.y:J.min.y,$Q.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint($Q)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class M6 extends O9{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new g0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var EQ=new w,qQ=new w,GK=new d0,a7=new P8,ZQ=new F9,A$=new w,NK=new w;class j7 extends kJ{constructor(J=new SJ,Q=new M6){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let Z=1,W=Q.count;Z<W;Z++)EQ.fromBufferAttribute(Q,Z-1),qQ.fromBufferAttribute(Q,Z),$[Z]=$[Z-1],$[Z]+=EQ.distanceTo(qQ);J.setAttribute("lineDistance",new HJ($,1))}else A0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,W=J.params.Line.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(ZQ.copy($.boundingSphere),ZQ.applyMatrix4(Z),ZQ.radius+=W,J.ray.intersectsSphere(ZQ)===!1)return;GK.copy(Z).invert(),a7.copy(J.ray).applyMatrix4(GK);let H=W/((this.scale.x+this.scale.y+this.scale.z)/3),Y=H*H,X=this.isLineSegments?2:1,U=$.index,E=$.attributes.position;if(U!==null){let G=Math.max(0,K.start),q=Math.min(U.count,K.start+K.count);for(let R=G,V=q-1;R<V;R+=X){let O=U.getX(R),F=U.getX(R+1),_=WQ(this,J,a7,Y,O,F,R);if(_)Q.push(_)}if(this.isLineLoop){let R=U.getX(q-1),V=U.getX(G),O=WQ(this,J,a7,Y,R,V,q-1);if(O)Q.push(O)}}else{let G=Math.max(0,K.start),q=Math.min(E.count,K.start+K.count);for(let R=G,V=q-1;R<V;R+=X){let O=WQ(this,J,a7,Y,R,R+1,R);if(O)Q.push(O)}if(this.isLineLoop){let R=WQ(this,J,a7,Y,q-1,G,q-1);if(R)Q.push(R)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let H=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=W}}}}}function WQ(J,Q,$,Z,W,K,H){let Y=J.geometry.attributes.position;if(EQ.fromBufferAttribute(Y,W),qQ.fromBufferAttribute(Y,K),$.distanceSqToSegment(EQ,qQ,A$,NK)>Z)return;A$.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(A$);if(U<Q.near||U>Q.far)return;return{distance:U,point:NK.clone().applyMatrix4(J.matrixWorld),index:H,face:null,faceIndex:null,barycoord:null,object:J}}var EK=new w,qK=new w;class vQ extends j7{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let Z=0,W=Q.count;Z<W;Z+=2)EK.fromBufferAttribute(Q,Z),qK.fromBufferAttribute(Q,Z+1),$[Z]=Z===0?0:$[Z-1],$[Z+1]=$[Z]+EK.distanceTo(qK);J.setAttribute("lineDistance",new HJ($,1))}else A0("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fQ extends j7{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class D6 extends O9{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new g0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var FK=new d0,v$=new P8,KQ=new F9,HQ=new w;class hQ extends kJ{constructor(J=new SJ,Q=new D6){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,W=J.params.Points.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(KQ.copy($.boundingSphere),KQ.applyMatrix4(Z),KQ.radius+=W,J.ray.intersectsSphere(KQ)===!1)return;FK.copy(Z).invert(),v$.copy(J.ray).applyMatrix4(FK);let H=W/((this.scale.x+this.scale.y+this.scale.z)/3),Y=H*H,X=$.index,N=$.attributes.position;if(X!==null){let E=Math.max(0,K.start),G=Math.min(X.count,K.start+K.count);for(let q=E,R=G;q<R;q++){let V=X.getX(q);HQ.fromBufferAttribute(N,V),OK(HQ,V,Y,Z,J,Q,this)}}else{let E=Math.max(0,K.start),G=Math.min(N.count,K.start+K.count);for(let q=E,R=G;q<R;q++)HQ.fromBufferAttribute(N,q),OK(HQ,q,Y,Z,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let W=0,K=Z.length;W<K;W++){let H=Z[W].name||String(W);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=W}}}}}function OK(J,Q,$,Z,W,K,H){let Y=v$.distanceSqToPoint(J);if(Y<$){let X=new w;v$.closestPointToPoint(J,X),X.applyMatrix4(Z);let U=W.ray.origin.distanceTo(X);if(U<W.near||U>W.far)return;K.push({distance:U,distanceToRay:Math.sqrt(Y),point:X,index:Q,face:null,faceIndex:null,barycoord:null,object:H})}}class bQ extends hJ{constructor(J=[],Q=301,$,Z,W,K,H,Y,X,U){super(J,Q,$,Z,W,K,H,Y,X,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class xQ extends hJ{constructor(J,Q,$,Z,W,K,H,Y,X){super(J,Q,$,Z,W,K,H,Y,X);this.isCanvasTexture=!0,this.needsUpdate=!0}}class i8 extends hJ{constructor(J,Q,$=1014,Z,W,K,H=1003,Y=1003,X,U=1026,N=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let E={width:J,height:Q,depth:N};super(E,Z,W,K,H,Y,U,$,X);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new N6(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class lZ extends i8{constructor(J,Q=1014,$=301,Z,W,K=1003,H=1003,Y,X=1026){let U={width:J,height:J,depth:1},N=[U,U,U,U,U,U];super(J,J,Q,$,Z,W,K,H,Y,X);this.image=N,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class gQ extends hJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class Y9 extends SJ{constructor(J=1,Q=1,$=1,Z=1,W=1,K=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:W,depthSegments:K};let H=this;Z=Math.floor(Z),W=Math.floor(W),K=Math.floor(K);let Y=[],X=[],U=[],N=[],E=0,G=0;q("z","y","x",-1,-1,$,Q,J,K,W,0),q("z","y","x",1,-1,$,Q,-J,K,W,1),q("x","z","y",1,1,J,$,Q,Z,K,2),q("x","z","y",1,-1,J,$,-Q,Z,K,3),q("x","y","z",1,-1,J,Q,$,Z,W,4),q("x","y","z",-1,-1,J,Q,-$,Z,W,5),this.setIndex(Y),this.setAttribute("position",new HJ(X,3)),this.setAttribute("normal",new HJ(U,3)),this.setAttribute("uv",new HJ(N,2));function q(R,V,O,F,_,k,L,z,I,A,M){let P=k/I,p=L/A,y=k/2,b=L/2,o=z/2,T=I+1,d=A+1,r=0,l=0,H0=new w;for(let n=0;n<d;n++){let t=n*p-b;for(let $0=0;$0<T;$0++){let w0=$0*P-y;H0[R]=w0*F,H0[V]=t*_,H0[O]=o,X.push(H0.x,H0.y,H0.z),H0[R]=0,H0[V]=0,H0[O]=z>0?1:-1,U.push(H0.x,H0.y,H0.z),N.push($0/I),N.push(1-n/A),r+=1}}for(let n=0;n<A;n++)for(let t=0;t<I;t++){let $0=E+t+T*n,w0=E+t+T*(n+1),f0=E+(t+1)+T*(n+1),qJ=E+(t+1)+T*n;Y.push($0,w0,qJ),Y.push(w0,f0,qJ),l+=6}H.addGroup(G,l,M),G+=l,E+=r}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new Y9(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class k6 extends SJ{constructor(J=1,Q=32,$=0,Z=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:Q,thetaStart:$,thetaLength:Z},Q=Math.max(3,Q);let W=[],K=[],H=[],Y=[],X=new w,U=new W0;K.push(0,0,0),H.push(0,0,1),Y.push(0.5,0.5);for(let N=0,E=3;N<=Q;N++,E+=3){let G=$+N/Q*Z;X.x=J*Math.cos(G),X.y=J*Math.sin(G),K.push(X.x,X.y,X.z),H.push(0,0,1),U.x=(K[E]/J+1)/2,U.y=(K[E+1]/J+1)/2,Y.push(U.x,U.y)}for(let N=1;N<=Q;N++)W.push(N,N+1,0);this.setIndex(W),this.setAttribute("position",new HJ(K,3)),this.setAttribute("normal",new HJ(H,3)),this.setAttribute("uv",new HJ(Y,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new k6(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class s9 extends SJ{constructor(J=1,Q=1,$=1,Z=32,W=1,K=!1,H=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:Z,heightSegments:W,openEnded:K,thetaStart:H,thetaLength:Y};let X=this;Z=Math.floor(Z),W=Math.floor(W);let U=[],N=[],E=[],G=[],q=0,R=[],V=$/2,O=0;if(F(),K===!1){if(J>0)_(!0);if(Q>0)_(!1)}this.setIndex(U),this.setAttribute("position",new HJ(N,3)),this.setAttribute("normal",new HJ(E,3)),this.setAttribute("uv",new HJ(G,2));function F(){let k=new w,L=new w,z=0,I=(Q-J)/$;for(let A=0;A<=W;A++){let M=[],P=A/W,p=P*(Q-J)+J;for(let y=0;y<=Z;y++){let b=y/Z,o=b*Y+H,T=Math.sin(o),d=Math.cos(o);L.x=p*T,L.y=-P*$+V,L.z=p*d,N.push(L.x,L.y,L.z),k.set(T,I,d).normalize(),E.push(k.x,k.y,k.z),G.push(b,1-P),M.push(q++)}R.push(M)}for(let A=0;A<Z;A++)for(let M=0;M<W;M++){let P=R[M][A],p=R[M+1][A],y=R[M+1][A+1],b=R[M][A+1];if(J>0||M!==0)U.push(P,p,b),z+=3;if(Q>0||M!==W-1)U.push(p,y,b),z+=3}X.addGroup(O,z,0),O+=z}function _(k){let L=q,z=new W0,I=new w,A=0,M=k===!0?J:Q,P=k===!0?1:-1;for(let y=1;y<=Z;y++)N.push(0,V*P,0),E.push(0,P,0),G.push(0.5,0.5),q++;let p=q;for(let y=0;y<=Z;y++){let o=y/Z*Y+H,T=Math.cos(o),d=Math.sin(o);I.x=M*d,I.y=V*P,I.z=M*T,N.push(I.x,I.y,I.z),E.push(0,P,0),z.x=T*0.5+0.5,z.y=d*0.5*P+0.5,G.push(z.x,z.y),q++}for(let y=0;y<Z;y++){let b=L+y,o=p+y;if(k===!0)U.push(o,o+1,b);else U.push(o+1,o,b);A+=3}X.addGroup(O,A,k===!0?1:2),O+=A}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new s9(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class C9{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){A0("Curve: .getPoint() not implemented.")}getPointAt(J,Q){let $=this.getUtoTmapping(J);return this.getPoint($,Q)}getPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));return Q}getSpacedPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPointAt($/J));return Q}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Q=[],$,Z=this.getPoint(0),W=0;Q.push(0);for(let K=1;K<=J;K++)$=this.getPoint(K/J),W+=$.distanceTo(Z),Q.push(W),Z=$;return this.cacheArcLengths=Q,Q}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Q=null){let $=this.getLengths(),Z=0,W=$.length,K;if(Q)K=Q;else K=J*$[W-1];let H=0,Y=W-1,X;while(H<=Y)if(Z=Math.floor(H+(Y-H)/2),X=$[Z]-K,X<0)H=Z+1;else if(X>0)Y=Z-1;else{Y=Z;break}if(Z=Y,$[Z]===K)return Z/(W-1);let U=$[Z],E=$[Z+1]-U,G=(K-U)/E;return(Z+G)/(W-1)}getTangent(J,Q){let Z=J-0.0001,W=J+0.0001;if(Z<0)Z=0;if(W>1)W=1;let K=this.getPoint(Z),H=this.getPoint(W),Y=Q||(K.isVector2?new W0:new w);return Y.copy(H).sub(K).normalize(),Y}getTangentAt(J,Q){let $=this.getUtoTmapping(J);return this.getTangent($,Q)}computeFrenetFrames(J,Q=!1){let $=new w,Z=[],W=[],K=[],H=new w,Y=new d0;for(let G=0;G<=J;G++){let q=G/J;Z[G]=this.getTangentAt(q,new w)}W[0]=new w,K[0]=new w;let X=Number.MAX_VALUE,U=Math.abs(Z[0].x),N=Math.abs(Z[0].y),E=Math.abs(Z[0].z);if(U<=X)X=U,$.set(1,0,0);if(N<=X)X=N,$.set(0,1,0);if(E<=X)$.set(0,0,1);H.crossVectors(Z[0],$).normalize(),W[0].crossVectors(Z[0],H),K[0].crossVectors(Z[0],W[0]);for(let G=1;G<=J;G++){if(W[G]=W[G-1].clone(),K[G]=K[G-1].clone(),H.crossVectors(Z[G-1],Z[G]),H.length()>Number.EPSILON){H.normalize();let q=Math.acos(s0(Z[G-1].dot(Z[G]),-1,1));W[G].applyMatrix4(Y.makeRotationAxis(H,q))}K[G].crossVectors(Z[G],W[G])}if(Q===!0){let G=Math.acos(s0(W[0].dot(W[J]),-1,1));if(G/=J,Z[0].dot(H.crossVectors(W[0],W[J]))>0)G=-G;for(let q=1;q<=J;q++)W[q].applyMatrix4(Y.makeRotationAxis(Z[q],G*q)),K[q].crossVectors(Z[q],W[q])}return{tangents:Z,normals:W,binormals:K}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}}class B6 extends C9{constructor(J=0,Q=0,$=1,Z=1,W=0,K=Math.PI*2,H=!1,Y=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Q,this.xRadius=$,this.yRadius=Z,this.aStartAngle=W,this.aEndAngle=K,this.aClockwise=H,this.aRotation=Y}getPoint(J,Q=new W0){let $=Q,Z=Math.PI*2,W=this.aEndAngle-this.aStartAngle,K=Math.abs(W)<Number.EPSILON;while(W<0)W+=Z;while(W>Z)W-=Z;if(W<Number.EPSILON)if(K)W=0;else W=Z;if(this.aClockwise===!0&&!K)if(W===Z)W=-Z;else W=W-Z;let H=this.aStartAngle+J*W,Y=this.aX+this.xRadius*Math.cos(H),X=this.aY+this.yRadius*Math.sin(H);if(this.aRotation!==0){let U=Math.cos(this.aRotation),N=Math.sin(this.aRotation),E=Y-this.aX,G=X-this.aY;Y=E*U-G*N+this.aX,X=E*N+G*U+this.aY}return $.set(Y,X)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class mZ extends B6{constructor(J,Q,$,Z,W,K){super(J,Q,$,$,Z,W,K);this.isArcCurve=!0,this.type="ArcCurve"}}function dZ(){let J=0,Q=0,$=0,Z=0;function W(K,H,Y,X){J=K,Q=Y,$=-3*K+3*H-2*Y-X,Z=2*K-2*H+Y+X}return{initCatmullRom:function(K,H,Y,X,U){W(H,Y,U*(Y-K),U*(X-H))},initNonuniformCatmullRom:function(K,H,Y,X,U,N,E){let G=(H-K)/U-(Y-K)/(U+N)+(Y-H)/N,q=(Y-H)/N-(X-H)/(N+E)+(X-Y)/E;G*=N,q*=N,W(H,Y,G,q)},calc:function(K){let H=K*K,Y=H*K;return J+Q*K+$*H+Z*Y}}}var RK=new w,LK=new w,w$=new dZ,T$=new dZ,S$=new dZ;class uZ extends C9{constructor(J=[],Q=!1,$="centripetal",Z=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Q,this.curveType=$,this.tension=Z}getPoint(J,Q=new w){let $=Q,Z=this.points,W=Z.length,K=(W-(this.closed?0:1))*J,H=Math.floor(K),Y=K-H;if(this.closed)H+=H>0?0:(Math.floor(Math.abs(H)/W)+1)*W;else if(Y===0&&H===W-1)H=W-2,Y=1;let X,U;if(this.closed||H>0)X=Z[(H-1)%W];else LK.subVectors(Z[0],Z[1]).add(Z[0]),X=LK;let N=Z[H%W],E=Z[(H+1)%W];if(this.closed||H+2<W)U=Z[(H+2)%W];else RK.subVectors(Z[W-1],Z[W-2]).add(Z[W-1]),U=RK;if(this.curveType==="centripetal"||this.curveType==="chordal"){let G=this.curveType==="chordal"?0.5:0.25,q=Math.pow(X.distanceToSquared(N),G),R=Math.pow(N.distanceToSquared(E),G),V=Math.pow(E.distanceToSquared(U),G);if(R<0.0001)R=1;if(q<0.0001)q=R;if(V<0.0001)V=R;w$.initNonuniformCatmullRom(X.x,N.x,E.x,U.x,q,R,V),T$.initNonuniformCatmullRom(X.y,N.y,E.y,U.y,q,R,V),S$.initNonuniformCatmullRom(X.z,N.z,E.z,U.z,q,R,V)}else if(this.curveType==="catmullrom")w$.initCatmullRom(X.x,N.x,E.x,U.x,this.tension),T$.initCatmullRom(X.y,N.y,E.y,U.y,this.tension),S$.initCatmullRom(X.z,N.z,E.z,U.z,this.tension);return $.set(w$.calc(Y),T$.calc(Y),S$.calc(Y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(Z.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let Z=this.points[Q];J.points.push(Z.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(new w().fromArray(Z))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function VK(J,Q,$,Z,W){let K=(Z-Q)*0.5,H=(W-$)*0.5,Y=J*J,X=J*Y;return(2*$-2*Z+K+H)*X+(-3*$+3*Z-2*K-H)*Y+K*J+$}function rX(J,Q){let $=1-J;return $*$*Q}function tX(J,Q){return 2*(1-J)*J*Q}function eX(J,Q){return J*J*Q}function J6(J,Q,$,Z){return rX(J,Q)+tX(J,$)+eX(J,Z)}function JU(J,Q){let $=1-J;return $*$*$*Q}function QU(J,Q){let $=1-J;return 3*$*$*J*Q}function $U(J,Q){return 3*(1-J)*J*J*Q}function ZU(J,Q){return J*J*J*Q}function Q6(J,Q,$,Z,W){return JU(J,Q)+QU(J,$)+$U(J,Z)+ZU(J,W)}class pQ extends C9{constructor(J=new W0,Q=new W0,$=new W0,Z=new W0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Q,this.v2=$,this.v3=Z}getPoint(J,Q=new W0){let $=Q,Z=this.v0,W=this.v1,K=this.v2,H=this.v3;return $.set(Q6(J,Z.x,W.x,K.x,H.x),Q6(J,Z.y,W.y,K.y,H.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class cZ extends C9{constructor(J=new w,Q=new w,$=new w,Z=new w){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Q,this.v2=$,this.v3=Z}getPoint(J,Q=new w){let $=Q,Z=this.v0,W=this.v1,K=this.v2,H=this.v3;return $.set(Q6(J,Z.x,W.x,K.x,H.x),Q6(J,Z.y,W.y,K.y,H.y),Q6(J,Z.z,W.z,K.z,H.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class lQ extends C9{constructor(J=new W0,Q=new W0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Q}getPoint(J,Q=new W0){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new W0){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class nZ extends C9{constructor(J=new w,Q=new w){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Q}getPoint(J,Q=new w){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new w){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class mQ extends C9{constructor(J=new W0,Q=new W0,$=new W0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new W0){let $=Q,Z=this.v0,W=this.v1,K=this.v2;return $.set(J6(J,Z.x,W.x,K.x),J6(J,Z.y,W.y,K.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class y7 extends C9{constructor(J=new w,Q=new w,$=new w){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new w){let $=Q,Z=this.v0,W=this.v1,K=this.v2;return $.set(J6(J,Z.x,W.x,K.x),J6(J,Z.y,W.y,K.y),J6(J,Z.z,W.z,K.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class dQ extends C9{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Q=new W0){let $=Q,Z=this.points,W=(Z.length-1)*J,K=Math.floor(W),H=W-K,Y=Z[K===0?K:K-1],X=Z[K],U=Z[K>Z.length-2?Z.length-1:K+1],N=Z[K>Z.length-3?Z.length-1:K+2];return $.set(VK(H,Y.x,X.x,U.x,N.x),VK(H,Y.y,X.y,U.y,N.y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let Z=this.points[Q];J.points.push(Z.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(new W0().fromArray(Z))}return this}}var f$=Object.freeze({__proto__:null,ArcCurve:mZ,CatmullRomCurve3:uZ,CubicBezierCurve:pQ,CubicBezierCurve3:cZ,EllipseCurve:B6,LineCurve:lQ,LineCurve3:nZ,QuadraticBezierCurve:mQ,QuadraticBezierCurve3:y7,SplineCurve:dQ});class sZ extends C9{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),Q=this.curves[this.curves.length-1].getPoint(1);if(!J.equals(Q)){let $=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new f$[$](Q,J))}return this}getPoint(J,Q){let $=J*this.getLength(),Z=this.getCurveLengths(),W=0;while(W<Z.length){if(Z[W]>=$){let K=Z[W]-$,H=this.curves[W],Y=H.getLength(),X=Y===0?0:1-K/Y;return H.getPointAt(X,Q)}W++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],Q=0;for(let $=0,Z=this.curves.length;$<Z;$++)Q+=this.curves[$].getLength(),J.push(Q);return this.cacheLengths=J,J}getSpacedPoints(J=40){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));if(this.autoClose)Q.push(Q[0]);return Q}getPoints(J=12){let Q=[],$;for(let Z=0,W=this.curves;Z<W.length;Z++){let K=W[Z],H=K.isEllipseCurve?J*2:K.isLineCurve||K.isLineCurve3?1:K.isSplineCurve?J*K.points.length:J,Y=K.getPoints(H);for(let X=0;X<Y.length;X++){let U=Y[X];if($&&$.equals(U))continue;Q.push(U),$=U}}if(this.autoClose&&Q.length>1&&!Q[Q.length-1].equals(Q[0]))Q.push(Q[0]);return Q}copy(J){super.copy(J),this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let Z=J.curves[Q];this.curves.push(Z.clone())}return this.autoClose=J.autoClose,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let Q=0,$=this.curves.length;Q<$;Q++){let Z=this.curves[Q];J.curves.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let Z=J.curves[Q];this.curves.push(new f$[Z.type]().fromJSON(Z))}return this}}class FQ extends sZ{constructor(J){super();if(this.type="Path",this.currentPoint=new W0,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let Q=1,$=J.length;Q<$;Q++)this.lineTo(J[Q].x,J[Q].y);return this}moveTo(J,Q){return this.currentPoint.set(J,Q),this}lineTo(J,Q){let $=new lQ(this.currentPoint.clone(),new W0(J,Q));return this.curves.push($),this.currentPoint.set(J,Q),this}quadraticCurveTo(J,Q,$,Z){let W=new mQ(this.currentPoint.clone(),new W0(J,Q),new W0($,Z));return this.curves.push(W),this.currentPoint.set($,Z),this}bezierCurveTo(J,Q,$,Z,W,K){let H=new pQ(this.currentPoint.clone(),new W0(J,Q),new W0($,Z),new W0(W,K));return this.curves.push(H),this.currentPoint.set(W,K),this}splineThru(J){let Q=[this.currentPoint.clone()].concat(J),$=new dQ(Q);return this.curves.push($),this.currentPoint.copy(J[J.length-1]),this}arc(J,Q,$,Z,W,K){let H=this.currentPoint.x,Y=this.currentPoint.y;return this.absarc(J+H,Q+Y,$,Z,W,K),this}absarc(J,Q,$,Z,W,K){return this.absellipse(J,Q,$,$,Z,W,K),this}ellipse(J,Q,$,Z,W,K,H,Y){let X=this.currentPoint.x,U=this.currentPoint.y;return this.absellipse(J+X,Q+U,$,Z,W,K,H,Y),this}absellipse(J,Q,$,Z,W,K,H,Y){let X=new B6(J,Q,$,Z,W,K,H,Y);if(this.curves.length>0){let N=X.getPoint(0);if(!N.equals(this.currentPoint))this.lineTo(N.x,N.y)}this.curves.push(X);let U=X.getPoint(1);return this.currentPoint.copy(U),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class z6 extends FQ{constructor(J){super(J);this.uuid=z9(),this.type="Shape",this.holes=[]}getPointsHoles(J){let Q=[];for(let $=0,Z=this.holes.length;$<Z;$++)Q[$]=this.holes[$].getPoints(J);return Q}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let Z=J.holes[Q];this.holes.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let Q=0,$=this.holes.length;Q<$;Q++){let Z=this.holes[Q];J.holes.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let Z=J.holes[Q];this.holes.push(new FQ().fromJSON(Z))}return this}}function WU(J,Q,$=2){let Z=Q&&Q.length,W=Z?Q[0]*$:J.length,K=wH(J,0,W,$,!0),H=[];if(!K||K.next===K.prev)return H;let Y,X,U;if(Z)K=UU(J,Q,K,$);if(J.length>80*$){Y=J[0],X=J[1];let N=Y,E=X;for(let G=$;G<W;G+=$){let q=J[G],R=J[G+1];if(q<Y)Y=q;if(R<X)X=R;if(q>N)N=q;if(R>E)E=R}U=Math.max(N-Y,E-X),U=U!==0?32767/U:0}return Z6(K,H,$,Y,X,U,0),H}function wH(J,Q,$,Z,W){let K;if(W===DU(J,Q,$,Z)>0)for(let H=Q;H<$;H+=Z)K=MK(H/Z|0,J[H],J[H+1],K);else for(let H=$-Z;H>=Q;H-=Z)K=MK(H/Z|0,J[H],J[H+1],K);if(K&&B7(K,K.next))K6(K),K=K.next;return K}function g8(J,Q){if(!J)return J;if(!Q)Q=J;let $=J,Z;do if(Z=!1,!$.steiner&&(B7($,$.next)||jJ($.prev,$,$.next)===0)){if(K6($),$=Q=$.prev,$===$.next)break;Z=!0}else $=$.next;while(Z||$!==Q);return Q}function Z6(J,Q,$,Z,W,K,H){if(!J)return;if(!H&&K)FU(J,Z,W,K);let Y=J;while(J.prev!==J.next){let{prev:X,next:U}=J;if(K?HU(J,Z,W,K):KU(J)){Q.push(X.i,J.i,U.i),K6(J),J=U.next,Y=U.next;continue}if(J=U,J===Y){if(!H)Z6(g8(J),Q,$,Z,W,K,1);else if(H===1)J=YU(g8(J),Q),Z6(J,Q,$,Z,W,K,2);else if(H===2)XU(J,Q,$,Z,W,K);break}}}function KU(J){let Q=J.prev,$=J,Z=J.next;if(jJ(Q,$,Z)>=0)return!1;let W=Q.x,K=$.x,H=Z.x,Y=Q.y,X=$.y,U=Z.y,N=Math.min(W,K,H),E=Math.min(Y,X,U),G=Math.max(W,K,H),q=Math.max(Y,X,U),R=Z.next;while(R!==Q){if(R.x>=N&&R.x<=G&&R.y>=E&&R.y<=q&&r7(W,Y,K,X,H,U,R.x,R.y)&&jJ(R.prev,R,R.next)>=0)return!1;R=R.next}return!0}function HU(J,Q,$,Z){let W=J.prev,K=J,H=J.next;if(jJ(W,K,H)>=0)return!1;let Y=W.x,X=K.x,U=H.x,N=W.y,E=K.y,G=H.y,q=Math.min(Y,X,U),R=Math.min(N,E,G),V=Math.max(Y,X,U),O=Math.max(N,E,G),F=h$(q,R,Q,$,Z),_=h$(V,O,Q,$,Z),k=J.prevZ,L=J.nextZ;while(k&&k.z>=F&&L&&L.z<=_){if(k.x>=q&&k.x<=V&&k.y>=R&&k.y<=O&&k!==W&&k!==H&&r7(Y,N,X,E,U,G,k.x,k.y)&&jJ(k.prev,k,k.next)>=0)return!1;if(k=k.prevZ,L.x>=q&&L.x<=V&&L.y>=R&&L.y<=O&&L!==W&&L!==H&&r7(Y,N,X,E,U,G,L.x,L.y)&&jJ(L.prev,L,L.next)>=0)return!1;L=L.nextZ}while(k&&k.z>=F){if(k.x>=q&&k.x<=V&&k.y>=R&&k.y<=O&&k!==W&&k!==H&&r7(Y,N,X,E,U,G,k.x,k.y)&&jJ(k.prev,k,k.next)>=0)return!1;k=k.prevZ}while(L&&L.z<=_){if(L.x>=q&&L.x<=V&&L.y>=R&&L.y<=O&&L!==W&&L!==H&&r7(Y,N,X,E,U,G,L.x,L.y)&&jJ(L.prev,L,L.next)>=0)return!1;L=L.nextZ}return!0}function YU(J,Q){let $=J;do{let Z=$.prev,W=$.next.next;if(!B7(Z,W)&&SH(Z,$,$.next,W)&&W6(Z,W)&&W6(W,Z))Q.push(Z.i,$.i,W.i),K6($),K6($.next),$=J=W;$=$.next}while($!==J);return g8($)}function XU(J,Q,$,Z,W,K){let H=J;do{let Y=H.next.next;while(Y!==H.prev){if(H.i!==Y.i&&LU(H,Y)){let X=jH(H,Y);H=g8(H,H.next),X=g8(X,X.next),Z6(H,Q,$,Z,W,K,0),Z6(X,Q,$,Z,W,K,0);return}Y=Y.next}H=H.next}while(H!==J)}function UU(J,Q,$,Z){let W=[];for(let K=0,H=Q.length;K<H;K++){let Y=Q[K]*Z,X=K<H-1?Q[K+1]*Z:J.length,U=wH(J,Y,X,Z,!1);if(U===U.next)U.steiner=!0;W.push(RU(U))}W.sort(GU);for(let K=0;K<W.length;K++)$=NU(W[K],$);return $}function GU(J,Q){let $=J.x-Q.x;if($===0){if($=J.y-Q.y,$===0){let Z=(J.next.y-J.y)/(J.next.x-J.x),W=(Q.next.y-Q.y)/(Q.next.x-Q.x);$=Z-W}}return $}function NU(J,Q){let $=EU(J,Q);if(!$)return Q;let Z=jH($,J);return g8(Z,Z.next),g8($,$.next)}function EU(J,Q){let $=Q,Z=J.x,W=J.y,K=-1/0,H;if(B7(J,$))return $;do{if(B7(J,$.next))return $.next;else if(W<=$.y&&W>=$.next.y&&$.next.y!==$.y){let E=$.x+(W-$.y)*($.next.x-$.x)/($.next.y-$.y);if(E<=Z&&E>K){if(K=E,H=$.x<$.next.x?$:$.next,E===Z)return H}}$=$.next}while($!==Q);if(!H)return null;let Y=H,X=H.x,U=H.y,N=1/0;$=H;do{if(Z>=$.x&&$.x>=X&&Z!==$.x&&TH(W<U?Z:K,W,X,U,W<U?K:Z,W,$.x,$.y)){let E=Math.abs(W-$.y)/(Z-$.x);if(W6($,J)&&(E<N||E===N&&($.x>H.x||$.x===H.x&&qU(H,$))))H=$,N=E}$=$.next}while($!==Y);return H}function qU(J,Q){return jJ(J.prev,J,Q.prev)<0&&jJ(Q.next,J,J.next)<0}function FU(J,Q,$,Z){let W=J;do{if(W.z===0)W.z=h$(W.x,W.y,Q,$,Z);W.prevZ=W.prev,W.nextZ=W.next,W=W.next}while(W!==J);W.prevZ.nextZ=null,W.prevZ=null,OU(W)}function OU(J){let Q,$=1;do{let Z=J,W;J=null;let K=null;Q=0;while(Z){Q++;let H=Z,Y=0;for(let U=0;U<$;U++)if(Y++,H=H.nextZ,!H)break;let X=$;while(Y>0||X>0&&H){if(Y!==0&&(X===0||!H||Z.z<=H.z))W=Z,Z=Z.nextZ,Y--;else W=H,H=H.nextZ,X--;if(K)K.nextZ=W;else J=W;W.prevZ=K,K=W}Z=H}K.nextZ=null,$*=2}while(Q>1);return J}function h$(J,Q,$,Z,W){return J=(J-$)*W|0,Q=(Q-Z)*W|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,Q=(Q|Q<<8)&16711935,Q=(Q|Q<<4)&252645135,Q=(Q|Q<<2)&858993459,Q=(Q|Q<<1)&1431655765,J|Q<<1}function RU(J){let Q=J,$=J;do{if(Q.x<$.x||Q.x===$.x&&Q.y<$.y)$=Q;Q=Q.next}while(Q!==J);return $}function TH(J,Q,$,Z,W,K,H,Y){return(W-H)*(Q-Y)>=(J-H)*(K-Y)&&(J-H)*(Z-Y)>=($-H)*(Q-Y)&&($-H)*(K-Y)>=(W-H)*(Z-Y)}function r7(J,Q,$,Z,W,K,H,Y){return!(J===H&&Q===Y)&&TH(J,Q,$,Z,W,K,H,Y)}function LU(J,Q){return J.next.i!==Q.i&&J.prev.i!==Q.i&&!VU(J,Q)&&(W6(J,Q)&&W6(Q,J)&&MU(J,Q)&&(jJ(J.prev,J,Q.prev)||jJ(J,Q.prev,Q))||B7(J,Q)&&jJ(J.prev,J,J.next)>0&&jJ(Q.prev,Q,Q.next)>0)}function jJ(J,Q,$){return(Q.y-J.y)*($.x-Q.x)-(Q.x-J.x)*($.y-Q.y)}function B7(J,Q){return J.x===Q.x&&J.y===Q.y}function SH(J,Q,$,Z){let W=XQ(jJ(J,Q,$)),K=XQ(jJ(J,Q,Z)),H=XQ(jJ($,Z,J)),Y=XQ(jJ($,Z,Q));if(W!==K&&H!==Y)return!0;if(W===0&&YQ(J,$,Q))return!0;if(K===0&&YQ(J,Z,Q))return!0;if(H===0&&YQ($,J,Z))return!0;if(Y===0&&YQ($,Q,Z))return!0;return!1}function YQ(J,Q,$){return Q.x<=Math.max(J.x,$.x)&&Q.x>=Math.min(J.x,$.x)&&Q.y<=Math.max(J.y,$.y)&&Q.y>=Math.min(J.y,$.y)}function XQ(J){return J>0?1:J<0?-1:0}function VU(J,Q){let $=J;do{if($.i!==J.i&&$.next.i!==J.i&&$.i!==Q.i&&$.next.i!==Q.i&&SH($,$.next,J,Q))return!0;$=$.next}while($!==J);return!1}function W6(J,Q){return jJ(J.prev,J,J.next)<0?jJ(J,Q,J.next)>=0&&jJ(J,J.prev,Q)>=0:jJ(J,Q,J.prev)<0||jJ(J,J.next,Q)<0}function MU(J,Q){let $=J,Z=!1,W=(J.x+Q.x)/2,K=(J.y+Q.y)/2;do{if($.y>K!==$.next.y>K&&$.next.y!==$.y&&W<($.next.x-$.x)*(K-$.y)/($.next.y-$.y)+$.x)Z=!Z;$=$.next}while($!==J);return Z}function jH(J,Q){let $=b$(J.i,J.x,J.y),Z=b$(Q.i,Q.x,Q.y),W=J.next,K=Q.prev;return J.next=Q,Q.prev=J,$.next=W,W.prev=$,Z.next=$,$.prev=Z,K.next=Z,Z.prev=K,Z}function MK(J,Q,$,Z){let W=b$(J,Q,$);if(!Z)W.prev=W,W.next=W;else W.next=Z.next,W.prev=Z,Z.next.prev=W,Z.next=W;return W}function K6(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function b$(J,Q,$){return{i:J,x:Q,y:$,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function DU(J,Q,$,Z){let W=0;for(let K=Q,H=$-Z;K<$;K+=Z)W+=(J[H]-J[K])*(J[K+1]+J[H+1]),H=K;return W}class yH{static triangulate(J,Q,$=2){return WU(J,Q,$)}}class M7{static area(J){let Q=J.length,$=0;for(let Z=Q-1,W=0;W<Q;Z=W++)$+=J[Z].x*J[W].y-J[W].x*J[Z].y;return $*0.5}static isClockWise(J){return M7.area(J)<0}static triangulateShape(J,Q){let $=[],Z=[],W=[];DK(J),kK($,J);let K=J.length;Q.forEach(DK);for(let Y=0;Y<Q.length;Y++)Z.push(K),K+=Q[Y].length,kK($,Q[Y]);let H=yH.triangulate($,Z);for(let Y=0;Y<H.length;Y+=3)W.push(H.slice(Y,Y+3));return W}}function DK(J){let Q=J.length;if(Q>2&&J[Q-1].equals(J[0]))J.pop()}function kK(J,Q){for(let $=0;$<Q.length;$++)J.push(Q[$].x),J.push(Q[$].y)}class C6 extends SJ{constructor(J=[new W0(0,-0.5),new W0(0.5,0),new W0(0,0.5)],Q=12,$=0,Z=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:J,segments:Q,phiStart:$,phiLength:Z},Q=Math.floor(Q),Z=s0(Z,0,Math.PI*2);let W=[],K=[],H=[],Y=[],X=[],U=1/Q,N=new w,E=new W0,G=new w,q=new w,R=new w,V=0,O=0;for(let F=0;F<=J.length-1;F++)switch(F){case 0:V=J[F+1].x-J[F].x,O=J[F+1].y-J[F].y,G.x=O*1,G.y=-V,G.z=O*0,R.copy(G),G.normalize(),Y.push(G.x,G.y,G.z);break;case J.length-1:Y.push(R.x,R.y,R.z);break;default:V=J[F+1].x-J[F].x,O=J[F+1].y-J[F].y,G.x=O*1,G.y=-V,G.z=O*0,q.copy(G),G.x+=R.x,G.y+=R.y,G.z+=R.z,G.normalize(),Y.push(G.x,G.y,G.z),R.copy(q)}for(let F=0;F<=Q;F++){let _=$+F*U*Z,k=Math.sin(_),L=Math.cos(_);for(let z=0;z<=J.length-1;z++){N.x=J[z].x*k,N.y=J[z].y,N.z=J[z].x*L,K.push(N.x,N.y,N.z),E.x=F/Q,E.y=z/(J.length-1),H.push(E.x,E.y);let I=Y[3*z+0]*k,A=Y[3*z+1],M=Y[3*z+0]*L;X.push(I,A,M)}}for(let F=0;F<Q;F++)for(let _=0;_<J.length-1;_++){let k=_+F*J.length,L=k,z=k+J.length,I=k+J.length+1,A=k+1;W.push(L,z,A),W.push(I,A,z)}this.setIndex(W),this.setAttribute("position",new HJ(K,3)),this.setAttribute("uv",new HJ(H,2)),this.setAttribute("normal",new HJ(X,3))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new C6(J.points,J.segments,J.phiStart,J.phiLength)}}class x9 extends SJ{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let W=J/2,K=Q/2,H=Math.floor($),Y=Math.floor(Z),X=H+1,U=Y+1,N=J/H,E=Q/Y,G=[],q=[],R=[],V=[];for(let O=0;O<U;O++){let F=O*E-K;for(let _=0;_<X;_++){let k=_*N-W;q.push(k,-F,0),R.push(0,0,1),V.push(_/H),V.push(1-O/Y)}}for(let O=0;O<Y;O++)for(let F=0;F<H;F++){let _=F+X*O,k=F+X*(O+1),L=F+1+X*(O+1),z=F+1+X*O;G.push(_,k,z),G.push(k,L,z)}this.setIndex(G),this.setAttribute("position",new HJ(q,3)),this.setAttribute("normal",new HJ(R,3)),this.setAttribute("uv",new HJ(V,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new x9(J.width,J.height,J.widthSegments,J.heightSegments)}}class P6 extends SJ{constructor(J=new z6([new W0(0,0.5),new W0(-0.5,-0.5),new W0(0.5,-0.5)]),Q=12){super();this.type="ShapeGeometry",this.parameters={shapes:J,curveSegments:Q};let $=[],Z=[],W=[],K=[],H=0,Y=0;if(Array.isArray(J)===!1)X(J);else for(let U=0;U<J.length;U++)X(J[U]),this.addGroup(H,Y,U),H+=Y,Y=0;this.setIndex($),this.setAttribute("position",new HJ(Z,3)),this.setAttribute("normal",new HJ(W,3)),this.setAttribute("uv",new HJ(K,2));function X(U){let N=Z.length/3,E=U.extractPoints(Q),G=E.shape,q=E.holes;if(M7.isClockWise(G)===!1)G=G.reverse();for(let V=0,O=q.length;V<O;V++){let F=q[V];if(M7.isClockWise(F)===!0)q[V]=F.reverse()}let R=M7.triangulateShape(G,q);for(let V=0,O=q.length;V<O;V++){let F=q[V];G=G.concat(F)}for(let V=0,O=G.length;V<O;V++){let F=G[V];Z.push(F.x,F.y,0),W.push(0,0,1),K.push(F.x,F.y)}for(let V=0,O=R.length;V<O;V++){let F=R[V],_=F[0]+N,k=F[1]+N,L=F[2]+N;$.push(_,k,L),Y+=3}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Q=this.parameters.shapes;return kU(Q,J)}static fromJSON(J,Q){let $=[];for(let Z=0,W=J.shapes.length;Z<W;Z++){let K=Q[J.shapes[Z]];$.push(K)}return new P6($,J.curveSegments)}}function kU(J,Q){if(Q.shapes=[],Array.isArray(J))for(let $=0,Z=J.length;$<Z;$++){let W=J[$];Q.shapes.push(W.uuid)}else Q.shapes.push(J.uuid);return Q}class K8 extends SJ{constructor(J=1,Q=32,$=16,Z=0,W=Math.PI*2,K=0,H=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:$,phiStart:Z,phiLength:W,thetaStart:K,thetaLength:H},Q=Math.max(3,Math.floor(Q)),$=Math.max(2,Math.floor($));let Y=Math.min(K+H,Math.PI),X=0,U=[],N=new w,E=new w,G=[],q=[],R=[],V=[];for(let O=0;O<=$;O++){let F=[],_=O/$,k=K+_*H,L=J*Math.cos(k),z=Math.sqrt(J*J-L*L),I=0;if(O===0&&K===0)I=0.5/Q;else if(O===$&&Y===Math.PI)I=-0.5/Q;for(let A=0;A<=Q;A++){let M=A/Q,P=Z+M*W;N.x=-z*Math.cos(P),N.y=L,N.z=z*Math.sin(P),q.push(N.x,N.y,N.z),E.copy(N).normalize(),R.push(E.x,E.y,E.z),V.push(M+I,1-_),F.push(X++)}U.push(F)}for(let O=0;O<$;O++)for(let F=0;F<Q;F++){let _=U[O][F+1],k=U[O][F],L=U[O+1][F],z=U[O+1][F+1];if(O!==0||K>0)G.push(_,k,z);if(O!==$-1||Y<Math.PI)G.push(k,L,z)}this.setIndex(G),this.setAttribute("position",new HJ(q,3)),this.setAttribute("normal",new HJ(R,3)),this.setAttribute("uv",new HJ(V,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new K8(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class o8 extends SJ{constructor(J=1,Q=0.4,$=12,Z=48,W=Math.PI*2,K=0,H=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:$,tubularSegments:Z,arc:W,thetaStart:K,thetaLength:H},$=Math.floor($),Z=Math.floor(Z);let Y=[],X=[],U=[],N=[],E=new w,G=new w,q=new w;for(let R=0;R<=$;R++){let V=K+R/$*H;for(let O=0;O<=Z;O++){let F=O/Z*W;G.x=(J+Q*Math.cos(V))*Math.cos(F),G.y=(J+Q*Math.cos(V))*Math.sin(F),G.z=Q*Math.sin(V),X.push(G.x,G.y,G.z),E.x=J*Math.cos(F),E.y=J*Math.sin(F),q.subVectors(G,E).normalize(),U.push(q.x,q.y,q.z),N.push(O/Z),N.push(R/$)}}for(let R=1;R<=$;R++)for(let V=1;V<=Z;V++){let O=(Z+1)*R+V-1,F=(Z+1)*(R-1)+V-1,_=(Z+1)*(R-1)+V,k=(Z+1)*R+V;Y.push(O,F,k),Y.push(F,_,k)}this.setIndex(Y),this.setAttribute("position",new HJ(X,3)),this.setAttribute("normal",new HJ(U,3)),this.setAttribute("uv",new HJ(N,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new o8(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc,J.thetaStart,J.thetaLength)}}class _6 extends SJ{constructor(J=new y7(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),Q=64,$=1,Z=8,W=!1){super();this.type="TubeGeometry",this.parameters={path:J,tubularSegments:Q,radius:$,radialSegments:Z,closed:W};let K=J.computeFrenetFrames(Q,W);this.tangents=K.tangents,this.normals=K.normals,this.binormals=K.binormals;let H=new w,Y=new w,X=new W0,U=new w,N=[],E=[],G=[],q=[];R(),this.setIndex(q),this.setAttribute("position",new HJ(N,3)),this.setAttribute("normal",new HJ(E,3)),this.setAttribute("uv",new HJ(G,2));function R(){for(let _=0;_<Q;_++)V(_);V(W===!1?Q:0),F(),O()}function V(_){U=J.getPointAt(_/Q,U);let k=K.normals[_],L=K.binormals[_];for(let z=0;z<=Z;z++){let I=z/Z*Math.PI*2,A=Math.sin(I),M=-Math.cos(I);Y.x=M*k.x+A*L.x,Y.y=M*k.y+A*L.y,Y.z=M*k.z+A*L.z,Y.normalize(),E.push(Y.x,Y.y,Y.z),H.x=U.x+$*Y.x,H.y=U.y+$*Y.y,H.z=U.z+$*Y.z,N.push(H.x,H.y,H.z)}}function O(){for(let _=1;_<=Q;_++)for(let k=1;k<=Z;k++){let L=(Z+1)*(_-1)+(k-1),z=(Z+1)*_+(k-1),I=(Z+1)*_+k,A=(Z+1)*(_-1)+k;q.push(L,z,A),q.push(z,I,A)}}function F(){for(let _=0;_<=Q;_++)for(let k=0;k<=Z;k++)X.x=_/Q,X.y=k/Z,G.push(X.x,X.y)}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON();return J.path=this.parameters.path.toJSON(),J}static fromJSON(J){return new _6(new f$[J.path.type]().fromJSON(J.path),J.tubularSegments,J.radius,J.radialSegments,J.closed)}}function a8(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let W=J[$][Z];if(BK(W))if(W.isRenderTargetTexture)A0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=W.clone();else if(Array.isArray(W))if(BK(W[0])){let K=[];for(let H=0,Y=W.length;H<Y;H++)K[H]=W[H].clone();Q[$][Z]=K}else Q[$][Z]=W.slice();else Q[$][Z]=W}}return Q}function Q9(J){let Q={};for(let $=0;$<J.length;$++){let Z=a8(J[$]);for(let W in Z)Q[W]=Z[W]}return Q}function BK(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function BU(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function iZ(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return r0.workingColorSpace}var vH={clone:a8,merge:Q9},zU=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CU=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class P9 extends O9{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zU,this.fragmentShader=CU,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=a8(J.uniforms),this.uniformsGroups=BU(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let K=this.uniforms[Z].value;if(K&&K.isTexture)Q.uniforms[Z]={type:"t",value:K.toJSON(J).uuid};else if(K&&K.isColor)Q.uniforms[Z]={type:"c",value:K.getHex()};else if(K&&K.isVector2)Q.uniforms[Z]={type:"v2",value:K.toArray()};else if(K&&K.isVector3)Q.uniforms[Z]={type:"v3",value:K.toArray()};else if(K&&K.isVector4)Q.uniforms[Z]={type:"v4",value:K.toArray()};else if(K&&K.isMatrix3)Q.uniforms[Z]={type:"m3",value:K.toArray()};else if(K&&K.isMatrix4)Q.uniforms[Z]={type:"m4",value:K.toArray()};else Q.uniforms[Z]={value:K}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let Z=J.uniforms[$];switch(this.uniforms[$]={},Z.type){case"t":this.uniforms[$].value=Q[Z.value]||null;break;case"c":this.uniforms[$].value=new g0().setHex(Z.value);break;case"v2":this.uniforms[$].value=new W0().fromArray(Z.value);break;case"v3":this.uniforms[$].value=new w().fromArray(Z.value);break;case"v4":this.uniforms[$].value=new VJ().fromArray(Z.value);break;case"m3":this.uniforms[$].value=new u0().fromArray(Z.value);break;case"m4":this.uniforms[$].value=new d0().fromArray(Z.value);break;default:this.uniforms[$].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class oZ extends P9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class iJ extends O9{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new g0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new g0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new W0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new j9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class R9 extends iJ{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new W0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return s0(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new g0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new g0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new g0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(J){if(this._retroreflectivity>0!==J>0)this.version++;this._retroreflectivity=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.retroreflectivity=J.retroreflectivity,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class aZ extends O9{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class rZ extends O9{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function L8(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function NQ(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}function PU(J){function Q(W,K){return J[W]-J[K]}let $=J.length,Z=Array($);for(let W=0;W!==$;++W)Z[W]=W;return Z.sort(Q),Z}function zK(J,Q,$){let Z=J.length,W=new J.constructor(Z);for(let K=0,H=0;H!==Z;++K){let Y=$[K]*Q;for(let X=0;X!==Q;++X)W[H++]=J[Y+X]}return W}function _U(J,Q,$,Z){let W=1,K=J[0];while(K!==void 0&&K[Z]===void 0)K=J[W++];if(K===void 0)return;let H=K[Z];if(H===void 0)return;if(Array.isArray(H))do{if(H=K[Z],H!==void 0)Q.push(K.time),$.push(...H);K=J[W++]}while(K!==void 0);else if(H.toArray!==void 0)do{if(H=K[Z],H!==void 0)Q.push(K.time),H.toArray($,$.length);K=J[W++]}while(K!==void 0);else do{if(H=K[Z],H!==void 0)Q.push(K.time),$.push(H);K=J[W++]}while(K!==void 0)}class H8{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],W=Q[$-1];J:{Q:{let K;$:{Z:if(!(J<Z)){for(let H=$+2;;){if(Z===void 0){if(J<W)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===H)break;if(W=Z,Z=Q[++$],J<Z)break Q}K=Q.length;break $}if(!(J>=W)){let H=Q[1];if(J<H)$=2,W=H;for(let Y=$-2;;){if(W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(Z=W,W=Q[--$-1],J>=W)break Q}K=$,$=0;break $}break J}while($<K){let H=$+K>>>1;if(J<Q[H])K=H;else $=H+1}if(Z=Q[$],W=Q[$-1],W===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,W,Z)}return this.interpolate_($,W,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z;for(let K=0;K!==Z;++K)Q[K]=$[W+K];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class tZ extends H8{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,W=J-2,K=J+1,H=Z[W],Y=Z[K];if(H===void 0)switch(this.getSettings_().endingStart){case 2401:W=J,H=2*Q-$;break;case 2402:W=Z.length-2,H=Q+Z[W]-Z[W+1];break;default:W=J,H=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:K=J,Y=2*$-Q;break;case 2402:K=1,Y=$+Z[1]-Z[0];break;default:K=J-1,Y=Q}let X=($-Q)*0.5,U=this.valueSize;this._weightPrev=X/(Q-H),this._weightNext=X/(Y-$),this._offsetPrev=W*U,this._offsetNext=K*U}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this._offsetPrev,N=this._offsetNext,E=this._weightPrev,G=this._weightNext,q=($-Q)/(Z-Q),R=q*q,V=R*q,O=-E*V+2*E*R-E*q,F=(1+E)*V+(-1.5-2*E)*R+(-0.5+E)*q+1,_=(-1-G)*V+(1.5+G)*R+0.5*q,k=G*V-G*R;for(let L=0;L!==H;++L)W[L]=O*K[U+L]+F*K[X+L]+_*K[Y+L]+k*K[N+L];return W}}class uQ extends H8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=($-Q)/(Z-Q),N=1-U;for(let E=0;E!==H;++E)W[E]=K[X+E]*N+K[Y+E]*U;return W}}class eZ extends H8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class JW extends H8{interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this.inTangents,N=this.outTangents;if(!U||!N){let q=($-Q)/(Z-Q),R=1-q;for(let V=0;V!==H;++V)W[V]=K[X+V]*R+K[Y+V]*q;return W}let E=H*2,G=J-1;for(let q=0;q!==H;++q){let R=K[X+q],V=K[Y+q],O=G*E+q*2,F=N[O],_=N[O+1],k=J*E+q*2,L=U[k],z=U[k+1],I=AU($,Q,F,L,Z);W[q]=fH(I,R,_,z,V)}return W}}function fH(J,Q,$,Z,W){let K=1-J;return K*K*K*Q+3*K*K*J*$+3*K*J*J*Z+J*J*J*W}function IU(J,Q,$,Z,W){let K=1-J;return 3*K*K*($-Q)+6*K*J*(Z-$)+3*J*J*(W-Z)}function AU(J,Q,$,Z,W){let K=(J-Q)/(W-Q);for(let H=0;H<8;H++){let Y=fH(K,Q,$,Z,W)-J;if(Math.abs(Y)<0.0000000001)break;let X=IU(K,Q,$,Z,W);if(Math.abs(X)<0.0000000001)break;K=Math.max(0,Math.min(1,K-Y/X))}return K}class L9{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=L8(Q,this.TimeBufferType),this.values=L8($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:L8(J.times,Array),values:L8(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z;if(NQ(J.settings))$.settings={inTangents:L8(J.settings.inTangents,Array),outTangents:L8(J.settings.outTangents,Array)}}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new eZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new uQ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new tZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new JW(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return A0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J;if(NQ(this.settings))CK(this.settings.inTangents,J),CK(this.settings.outTangents,J)}return this}trim(J,Q){let $=this.times,Z=$.length,W=0,K=Z-1;while(W!==Z&&$[W]<J)++W;while(K!==-1&&$[K]>Q)--K;if(++K,W!==0||K!==Z){if(W>=K)K=Math.max(K,1),W=K-1;let H=this.getValueSize();this.times=$.slice(W,K),this.values=this.values.slice(W*H,K*H)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)l0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,W=$.length;if(W===0)l0("KeyframeTrack: Track is empty.",this),J=!1;let K=null;for(let H=0;H!==W;H++){let Y=$[H];if(typeof Y==="number"&&isNaN(Y)){l0("KeyframeTrack: Time is not a valid number.",this,H,Y),J=!1;break}if(K!==null&&K>Y){l0("KeyframeTrack: Out of order keys.",this,H,Y,K),J=!1;break}K=Y}if(Z!==void 0){if(qX(Z))for(let H=0,Y=Z.length;H!==Y;++H){let X=Z[H];if(isNaN(X)){l0("KeyframeTrack: Value is not a valid number.",this,H,X),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,W=J.length-1,K=1;for(let H=1;H<W;++H){let Y=!1,X=J[H],U=J[H+1];if(X!==U&&(H!==1||X!==J[0]))if(!Z){let N=H*$,E=N-$,G=N+$;for(let q=0;q!==$;++q){let R=Q[N+q];if(R!==Q[E+q]||R!==Q[G+q]){Y=!0;break}}}else Y=!0;if(Y){if(H!==K){J[K]=J[H];let N=H*$,E=K*$;for(let G=0;G!==$;++G)Q[E+G]=Q[N+G]}++K}}if(W>0){J[K]=J[W];for(let H=W*$,Y=K*$,X=0;X!==$;++X)Q[Y+X]=Q[H+X];++K}if(K!==J.length)this.times=J.slice(0,K),this.values=Q.slice(0,K*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);if(Z.createInterpolant=this.createInterpolant,NQ(this.settings))Z.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return Z}}function CK(J,Q){for(let $=0,Z=J.length;$!==Z;$+=2)J[$]*=Q}L9.prototype.ValueTypeName="";L9.prototype.TimeBufferType=Float32Array;L9.prototype.ValueBufferType=Float32Array;L9.prototype.DefaultInterpolation=2301;class _8 extends L9{constructor(J,Q,$){super(J,Q,$)}}_8.prototype.ValueTypeName="bool";_8.prototype.ValueBufferType=Array;_8.prototype.DefaultInterpolation=2300;_8.prototype.InterpolantFactoryMethodLinear=void 0;_8.prototype.InterpolantFactoryMethodSmooth=void 0;class cQ extends L9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}cQ.prototype.ValueTypeName="color";class I8 extends L9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}I8.prototype.ValueTypeName="number";class QW extends H8{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=($-Q)/(Z-Q),X=J*H;for(let U=X+H;X!==U;X+=4)TJ.slerpFlat(W,0,K,X-H,K,X,Y);return W}}class A8 extends L9{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new QW(this.times,this.values,this.getValueSize(),J)}}A8.prototype.ValueTypeName="quaternion";A8.prototype.InterpolantFactoryMethodSmooth=void 0;class w8 extends L9{constructor(J,Q,$){super(J,Q,$)}}w8.prototype.ValueTypeName="string";w8.prototype.ValueBufferType=Array;w8.prototype.DefaultInterpolation=2300;w8.prototype.InterpolantFactoryMethodLinear=void 0;w8.prototype.InterpolantFactoryMethodSmooth=void 0;class r8 extends L9{constructor(J,Q,$,Z){super(J,Q,$,Z)}}r8.prototype.ValueTypeName="vector";class z7{constructor(J="",Q=-1,$=[],Z=2500){if(this.name=J,this.tracks=$,this.duration=Q,this.blendMode=Z,this.uuid=z9(),this.userData={},this.duration<0)this.resetDuration()}static parse(J){let Q=[],$=J.tracks,Z=1/(J.fps||1);for(let K=0,H=$.length;K!==H;++K)Q.push(TU($[K]).scale(Z));let W=new this(J.name,J.duration,Q,J.blendMode);return W.uuid=J.uuid,W.userData=JSON.parse(J.userData||"{}"),W}static toJSON(J){let Q=[],$=J.tracks,Z={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode,userData:JSON.stringify(J.userData)};for(let W=0,K=$.length;W!==K;++W)Q.push(L9.toJSON($[W]));return Z}static CreateFromMorphTargetSequence(J,Q,$,Z){let W=Q.length,K=[];for(let H=0;H<W;H++){let Y=[],X=[];Y.push((H+W-1)%W,H,(H+1)%W),X.push(0,1,0);let U=PU(Y);if(Y=zK(Y,1,U),X=zK(X,1,U),!Z&&Y[0]===0)Y.push(W),X.push(X[0]);K.push(new I8(".morphTargetInfluences["+Q[H].name+"]",Y,X).scale(1/$))}return new this(J,-1,K)}static findByName(J,Q){let $=J;if(!Array.isArray(J)){let Z=J;$=Z.geometry&&Z.geometry.animations||Z.animations}for(let Z=0;Z<$.length;Z++)if($[Z].name===Q)return $[Z];return null}static CreateClipsFromMorphTargetSequences(J,Q,$){let Z={},W=/^([\w-]*?)([\d]+)$/;for(let H=0,Y=J.length;H<Y;H++){let X=J[H],U=X.name.match(W);if(U&&U.length>1){let N=U[1],E=Z[N];if(!E)Z[N]=E=[];E.push(X)}}let K=[];for(let H in Z)K.push(this.CreateFromMorphTargetSequence(H,Z[H],Q,$));return K}resetDuration(){let J=this.tracks,Q=0;for(let $=0,Z=J.length;$!==Z;++$){let W=this.tracks[$];Q=Math.max(Q,W.times[W.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let $=0;$<this.tracks.length;$++)J.push(this.tracks[$].clone());let Q=new this.constructor(this.name,this.duration,J,this.blendMode);return Q.userData=JSON.parse(JSON.stringify(this.userData)),Q}toJSON(){return this.constructor.toJSON(this)}}function wU(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return I8;case"vector":case"vector2":case"vector3":case"vector4":return r8;case"color":return cQ;case"quaternion":return A8;case"bool":case"boolean":return _8;case"string":return w8}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function TU(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=wU(J.type);if(J.times===void 0){let Z=[],W=[];_U(J.keys,Z,W,"value"),J.times=Z,J.values=W}let $;if(Q.parse!==void 0)$=Q.parse(J);else $=new Q(J.name,J.times,J.values,J.interpolation);if(NQ(J.settings))$.settings={inTangents:L8(J.settings.inTangents,Float32Array),outTangents:L8(J.settings.outTangents,Float32Array)};return $}var m9={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;if(PK(J))return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;if(PK(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function PK(J){try{let Q=J.slice(J.indexOf(":")+1);return new URL(Q).protocol==="blob:"}catch(Q){return!1}}class $W{constructor(J,Q,$){let Z=this,W=!1,K=0,H=0,Y=void 0,X=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(H++,W===!1){if(Z.onStart!==void 0)Z.onStart(U,K,H)}W=!0},this.itemEnd=function(U){if(K++,Z.onProgress!==void 0)Z.onProgress(U,K,H);if(K===H){if(W=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,N){return X.push(U,N),this},this.removeHandler=function(U){let N=X.indexOf(U);if(N!==-1)X.splice(N,2);return this},this.getHandler=function(U){for(let N=0,E=X.length;N<E;N+=2){let G=X[N],q=X[N+1];if(G.global)G.lastIndex=0;if(G.test(U))return q}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var hH=new $W;class Y8{constructor(J){if(this.manager=J!==void 0?J:hH,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,W){$.load(J,Z,Q,W)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}Y8.DEFAULT_MATERIAL_NAME="__DEFAULT";var $8={};class bH extends Error{constructor(J,Q){super(J);this.response=Q}}class I6 extends Y8{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=m9.get(`file:${J}`);if(W!==void 0){this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(W);this.manager.itemEnd(J)},0);return}if($8[J]!==void 0){$8[J].push({onLoad:Q,onProgress:$,onError:Z});return}$8[J]=[],$8[J].push({onLoad:Q,onProgress:$,onError:Z});let K=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),H=this.mimeType,Y=this.responseType;fetch(K).then((X)=>{if(X.status===200||X.status===0){if(X.status===0)A0("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||X.body===void 0||X.body.getReader===void 0)return X;let U=$8[J],N=X.body.getReader(),E=X.headers.get("X-File-Size")||X.headers.get("Content-Length"),G=E?parseInt(E):0,q=G!==0,R=0,V=new ReadableStream({start(O){F();function F(){N.read().then(({done:_,value:k})=>{if(_)O.close();else{R+=k.byteLength;let L=new ProgressEvent("progress",{lengthComputable:q,loaded:R,total:G});for(let z=0,I=U.length;z<I;z++){let A=U[z];if(A.onProgress)A.onProgress(L)}O.enqueue(k),F()}},(_)=>{O.error(_)})}}});return new Response(V)}else throw new bH(`fetch for "${X.url}" responded with ${X.status}: ${X.statusText}`,X)}).then((X)=>{switch(Y){case"arraybuffer":return X.arrayBuffer();case"blob":return X.blob();case"document":return X.text().then((U)=>{return new DOMParser().parseFromString(U,H)});case"json":return X.json();default:if(H==="")return X.text();else{let N=/charset="?([^;"\s]*)"?/i.exec(H),E=N&&N[1]?N[1].toLowerCase():void 0,G=new TextDecoder(E);return X.arrayBuffer().then((q)=>G.decode(q))}}}).then((X)=>{m9.add(`file:${J}`,X);let U=$8[J];delete $8[J];for(let N=0,E=U.length;N<E;N++){let G=U[N];if(G.onLoad)G.onLoad(X)}}).catch((X)=>{let U=$8[J];if(U===void 0)throw this.manager.itemError(J),X;delete $8[J];for(let N=0,E=U.length;N<E;N++){let G=U[N];if(G.onError)G.onError(X)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var O7=new WeakMap;class ZW extends Y8{constructor(J){super(J)}load(J,Q,$,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,K=m9.get(`image:${J}`);if(K!==void 0){if(K.complete===!0)W.manager.itemStart(J),setTimeout(function(){if(Q)Q(K);W.manager.itemEnd(J)},0);else{let N=O7.get(K);if(N===void 0)N=[],O7.set(K,N);N.push({onLoad:Q,onError:Z})}return K}let H=D7("img");function Y(){if(U(),Q)Q(this);let N=O7.get(this)||[];for(let E=0;E<N.length;E++){let G=N[E];if(G.onLoad)G.onLoad(this)}O7.delete(this),W.manager.itemEnd(J)}function X(N){if(U(),Z)Z(N);m9.remove(`image:${J}`);let E=O7.get(this)||[];for(let G=0;G<E.length;G++){let q=E[G];if(q.onError)q.onError(N)}O7.delete(this),W.manager.itemError(J),W.manager.itemEnd(J)}function U(){H.removeEventListener("load",Y,!1),H.removeEventListener("error",X,!1)}if(H.addEventListener("load",Y,!1),H.addEventListener("error",X,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)H.crossOrigin=this.crossOrigin}return m9.add(`image:${J}`,H),W.manager.itemStart(J),H.src=J,H}}class nQ extends Y8{constructor(J){super(J)}load(J,Q,$,Z){let W=new hJ,K=new ZW(this.manager);return K.setCrossOrigin(this.crossOrigin),K.setPath(this.path),K.load(J,function(H){if(W.image=H,W.needsUpdate=!0,Q!==void 0)Q(W)},$,Z),W}}class v7 extends kJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new g0(J),this.intensity=Q}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}class sQ extends v7{constructor(J,Q,$){super(J,$);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kJ.DEFAULT_UP),this.updateMatrix(),this.groundColor=new g0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}toJSON(J){let Q=super.toJSON(J);return Q.object.groundColor=this.groundColor.getHex(),Q}}var j$=new d0,_K=new w,IK=new w;class A6{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new W0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new d0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new V6,this._frameExtents=new W0(1,1),this._viewportCount=1,this._viewports=[new VJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera;_K.setFromMatrixPosition(J.matrixWorld),Q.position.copy(_K),IK.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(IK),Q.updateMatrixWorld(),this._updateMatrix(Q,this.matrix,this._frustum)}_updateMatrix(J,Q,$,Z){j$.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),$.setFromProjectionMatrix(j$,J.coordinateSystem,J.reversedDepth);let W=this._frameExtents,K=Z?Z.z/W.x:1,H=Z?Z.w/W.y:1,Y=Z?Z.x/W.x:0,X=Z?Z.y/W.y:0;if(J.coordinateSystem===2001||J.reversedDepth)Q.set(0.5*K,0,0,0.5*K+Y,0,0.5*H,0,0.5*H+X,0,0,1,0,0,0,0,1);else Q.set(0.5*K,0,0,0.5*K+Y,0,0.5*H,0,0.5*H+X,0,0,0.5,0.5,0,0,0,1);Q.multiply(j$)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var UQ=new w,GQ=new TJ,l9=new w;class iQ extends kJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new d0,this.projectionMatrix=new d0,this.projectionMatrixInverse=new d0,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(UQ,GQ,l9),l9.x===1&&l9.y===1&&l9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(UQ,GQ,l9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(UQ,GQ,l9),l9.x===1&&l9.y===1&&l9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(UQ,GQ,l9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var R8=new w,AK=new W0,wK=new W0;class lJ extends iQ{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=x8*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(t7*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return x8*2*Math.atan(Math.tan(t7*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){R8.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(R8.x,R8.y).multiplyScalar(-J/R8.z),R8.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(R8.x,R8.y).multiplyScalar(-J/R8.z)}getViewSize(J,Q){return this.getViewBounds(J,AK,wK),Q.subVectors(wK,AK)}setViewOffset(J,Q,$,Z,W,K){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(t7*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,W=-0.5*Z,K=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:X}=K;W+=K.offsetX*Z/Y,Q-=K.offsetY*$/X,Z*=K.width/Y,$*=K.height/X}let H=this.filmOffset;if(H!==0)W+=J*H/this.getFilmWidth();this.projectionMatrix.makePerspective(W,W+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class xH extends A6{constructor(){super(new lJ(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=x8*2*J.angle*this.focus,Z=this.mapSize.width/this.mapSize.height*this.aspect,W=J.distance||Q.far;if($!==Q.fov||Z!==Q.aspect||W!==Q.far)Q.fov=$,Q.aspect=Z,Q.far=W,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this.aspect=J.aspect,this}toJSON(){let J=super.toJSON();return J.focus=this.focus,J.aspect=this.aspect,J}}class f7 extends v7{constructor(J,Q,$=0,Z=Math.PI/3,W=0,K=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(kJ.DEFAULT_UP),this.updateMatrix(),this.target=new kJ,this.distance=$,this.angle=Z,this.penumbra=W,this.decay=K,this.map=null,this.shadow=new xH}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);if(Q.object.distance=this.distance,Q.object.angle=this.angle,Q.object.decay=this.decay,Q.object.penumbra=this.penumbra,Q.object.target=this.target.uuid,this.map&&this.map.isTexture)Q.object.map=this.map.toJSON(J).uuid;return Q.object.shadow=this.shadow.toJSON(),Q}}class gH extends A6{constructor(){super(new lJ(90,1,0.5,500));this.isPointLightShadow=!0}}class h7 extends v7{constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new gH}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class t8 extends iQ{constructor(J=-1,Q=1,$=1,Z=-1,W=0.1,K=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=W,this.far=K,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,W,K){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=W,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,W=$-J,K=$+J,H=Z+Q,Y=Z-Q;if(this.view!==null&&this.view.enabled){let X=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;W+=X*this.view.offsetX,K=W+X*this.view.width,H-=U*this.view.offsetY,Y=H-U*this.view.height}this.projectionMatrix.makeOrthographic(W,K,H,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class pH extends A6{constructor(){super(new t8(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class b7 extends v7{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kJ.DEFAULT_UP),this.updateMatrix(),this.target=new kJ,this.shadow=new pH}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class T8{static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}var y$=new WeakMap;class oQ extends Y8{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")A0("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")A0("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(J){return this.options=J,this}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let W=this,K=m9.get(`image-bitmap:${J}`);if(K!==void 0){if(W.manager.itemStart(J),K.then){K.then((X)=>{if(y$.has(K)===!0){if(Z)Z(y$.get(K));W.manager.itemError(J),W.manager.itemEnd(J)}else{if(Q)Q(X);W.manager.itemEnd(J)}});return}setTimeout(function(){if(Q)Q(K);W.manager.itemEnd(J)},0);return}let H={};H.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",H.headers=this.requestHeader,H.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let Y=fetch(J,H).then(function(X){return X.blob()}).then(function(X){return createImageBitmap(X,Object.assign({},W.options,{colorSpaceConversion:"none"}))}).then(function(X){if(m9.add(`image-bitmap:${J}`,X),Q)Q(X);return W.manager.itemEnd(J),X}).catch(function(X){if(Z)Z(X);y$.set(Y,X),m9.remove(`image-bitmap:${J}`),W.manager.itemError(J),W.manager.itemEnd(J)});m9.add(`image-bitmap:${J}`,Y),W.manager.itemStart(J)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var R7=-90,L7=1;class WW extends kJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new lJ(R7,L7,J,Q);Z.layers=this.layers,this.add(Z);let W=new lJ(R7,L7,J,Q);W.layers=this.layers,this.add(W);let K=new lJ(R7,L7,J,Q);K.layers=this.layers,this.add(K);let H=new lJ(R7,L7,J,Q);H.layers=this.layers,this.add(H);let Y=new lJ(R7,L7,J,Q);Y.layers=this.layers,this.add(Y);let X=new lJ(R7,L7,J,Q);X.layers=this.layers,this.add(X)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,W,K,H,Y]=Q;for(let X of Q)this.remove(X);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),W.up.set(0,0,-1),W.lookAt(0,1,0),K.up.set(0,0,1),K.lookAt(0,-1,0),H.up.set(0,1,0),H.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),W.up.set(0,0,1),W.lookAt(0,1,0),K.up.set(0,0,-1),K.lookAt(0,-1,0),H.up.set(0,-1,0),H.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let X of Q)this.add(X),X.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[W,K,H,Y,X,U]=this.children,N=J.getRenderTarget(),E=J.getActiveCubeFace(),G=J.getActiveMipmapLevel(),q=J.xr.enabled;J.xr.enabled=!1;let R=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let V=!1;if(J.isWebGLRenderer===!0)V=J.state.buffers.depth.getReversed();else V=J.reversedDepthBuffer;if(J.setRenderTarget($,0,Z),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,1,Z),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,2,Z),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),J.setRenderTarget($,3,Z),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,Z),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),$.texture.generateMipmaps=R,J.setRenderTarget($,5,Z),V&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(N,E,G),J.xr.enabled=q,$.texture.needsPMREMUpdate=!0}}class KW extends lJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}class HW{constructor(J,Q,$){this.binding=J,this.valueSize=$;let Z,W,K;switch(Q){case"quaternion":Z=this._slerp,W=this._slerpAdditive,K=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array($*6),this._workIndex=5;break;case"string":case"bool":Z=this._select,W=this._select,K=this._setAdditiveIdentityOther,this.buffer=Array($*5);break;default:Z=this._lerp,W=this._lerpAdditive,K=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array($*5)}this._mixBufferRegion=Z,this._mixBufferRegionAdditive=W,this._setIdentity=K,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(J,Q){let $=this.buffer,Z=this.valueSize,W=J*Z+Z,K=this.cumulativeWeight;if(K===0){for(let H=0;H!==Z;++H)$[W+H]=$[H];K=Q}else{K+=Q;let H=Q/K;this._mixBufferRegion($,W,0,H,Z)}this.cumulativeWeight=K}accumulateAdditive(J){let Q=this.buffer,$=this.valueSize,Z=$*this._addIndex;if(this.cumulativeWeightAdditive===0)this._setIdentity();this._mixBufferRegionAdditive(Q,Z,0,J,$),this.cumulativeWeightAdditive+=J}apply(J){let Q=this.valueSize,$=this.buffer,Z=J*Q+Q,W=this.cumulativeWeight,K=this.cumulativeWeightAdditive,H=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,W<1){let Y=Q*this._origIndex;this._mixBufferRegion($,Z,Y,1-W,Q)}if(K>0)this._mixBufferRegionAdditive($,Z,this._addIndex*Q,1,Q);for(let Y=Q,X=Q+Q;Y!==X;++Y)if($[Y]!==$[Y+Q]){H.setValue($,Z);break}}saveOriginalState(){let J=this.binding,Q=this.buffer,$=this.valueSize,Z=$*this._origIndex;J.getValue(Q,Z);for(let W=$,K=Z;W!==K;++W)Q[W]=Q[Z+W%$];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let J=this.valueSize*3;this.binding.setValue(this.buffer,J)}_setAdditiveIdentityNumeric(){let J=this._addIndex*this.valueSize,Q=J+this.valueSize;for(let $=J;$<Q;$++)this.buffer[$]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let J=this._origIndex*this.valueSize,Q=this._addIndex*this.valueSize;for(let $=0;$<this.valueSize;$++)this.buffer[Q+$]=this.buffer[J+$]}_select(J,Q,$,Z,W){if(Z>=0.5)for(let K=0;K!==W;++K)J[Q+K]=J[$+K]}_slerp(J,Q,$,Z){TJ.slerpFlat(J,Q,J,Q,J,$,Z)}_slerpAdditive(J,Q,$,Z,W){let K=this._workIndex*W;TJ.multiplyQuaternionsFlat(J,K,J,Q,J,$),TJ.slerpFlat(J,Q,J,Q,J,K,Z)}_lerp(J,Q,$,Z,W){let K=1-Z;for(let H=0;H!==W;++H){let Y=Q+H;J[Y]=J[Y]*K+J[$+H]*Z}}_lerpAdditive(J,Q,$,Z,W){for(let K=0;K!==W;++K){let H=Q+K;J[H]=J[H]+J[$+K]*Z}}}var YW="\\[\\]\\.:\\/",SU=new RegExp("["+YW+"]","g"),XW="[^"+YW+"]",jU="[^"+YW.replace("\\.","")+"]",yU=/((?:WC+[\/:])*)/.source.replace("WC",XW),vU=/(WCOD+)?/.source.replace("WCOD",jU),fU=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",XW),hU=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",XW),bU=new RegExp("^"+yU+vU+fU+hU+"$"),xU=["material","materials","bones","map"];class lH{constructor(J,Q,$){let Z=$||NJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,W=$.length;Z!==W;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class NJ{constructor(J,Q,$){this.path=Q,this.parsedPath=$||NJ.parseTrackName(Q),this.node=NJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new NJ(J,Q,$);else return new NJ.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(SU,"")}static parseTrackName(J){let Q=bU.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let W=$.nodeName.substring(Z+1);if(xU.indexOf(W)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=W}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(W){for(let K=0;K<W.length;K++){let H=W[K];if(H.name===Q||H.uuid===Q)return H;let Y=$(H.children);if(Y)return Y}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,W=$.length;Z!==W;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,W=Q.propertyIndex;if(!J)J=NJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){A0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let X=Q.objectIndex;switch($){case"materials":if(!J.material){l0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){l0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){l0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===X){X=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){l0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){l0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){l0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(X!==void 0){if(J[X]===void 0){l0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[X]}}let K=J[Z];if(K===void 0){let X=Q.nodeName;l0("PropertyBinding: Trying to update property for track: "+X+"."+Z+" but it wasn't found.",J);return}let H=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)H=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)H=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(W!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){l0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){l0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[W]!==void 0)W=J.morphTargetDictionary[W]}Y=this.BindingType.ArrayElement,this.resolvedProperty=K,this.propertyIndex=W}else if(K.fromArray!==void 0&&K.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=K;else if(Array.isArray(K))Y=this.BindingType.EntireArray,this.resolvedProperty=K;else this.propertyName=Z;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][H]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}NJ.Composite=lH;NJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};NJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};NJ.prototype.GetterByBindingType=[NJ.prototype._getValue_direct,NJ.prototype._getValue_array,NJ.prototype._getValue_arrayElement,NJ.prototype._getValue_toArray];NJ.prototype.SetterByBindingTypeAndVersioning=[[NJ.prototype._setValue_direct,NJ.prototype._setValue_direct_setNeedsUpdate,NJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[NJ.prototype._setValue_array,NJ.prototype._setValue_array_setNeedsUpdate,NJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[NJ.prototype._setValue_arrayElement,NJ.prototype._setValue_arrayElement_setNeedsUpdate,NJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[NJ.prototype._setValue_fromArray,NJ.prototype._setValue_fromArray_setNeedsUpdate,NJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class UW{constructor(J,Q,$=null,Z=Q.blendMode){this._mixer=J,this._clip=Q,this._localRoot=$,this.blendMode=Z;let W=Q.tracks,K=W.length,H=Array(K),Y={endingStart:2400,endingEnd:2400};for(let X=0;X!==K;++X){let U=W[X].createInterpolant(null);H[X]=U,U.settings=Y}this._interpolantSettings=Y,this._interpolants=H,this._propertyBindings=Array(K),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(J){return this._startTime=J,this}setLoop(J,Q){return this.loop=J,this.repetitions=Q,this}setEffectiveWeight(J){return this.weight=J,this._effectiveWeight=this.enabled?J:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(J){return this._scheduleFading(J,0,1)}fadeOut(J){return this._scheduleFading(J,1,0)}crossFadeFrom(J,Q,$=!1){if(J.fadeOut(Q),this.fadeIn(Q),$===!0){let Z=this._clip.duration,W=J._clip.duration,K=W/Z,H=Z/W;J._restoreTimeScale=J.timeScale,this._restoreTimeScale=this.timeScale,J.warp(1,K,Q),this.warp(H,1,Q)}return this}crossFadeTo(J,Q,$=!1){return J.crossFadeFrom(this,Q,$)}stopFading(){let J=this._weightInterpolant;if(J!==null)this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this}setEffectiveTimeScale(J){return this.timeScale=J,this._effectiveTimeScale=this.paused?0:J,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(J){return this.timeScale=this._clip.duration/J,this.stopWarping()}syncWith(J){return this.time=J.time,this.timeScale=J.timeScale,this.stopWarping()}halt(J){return this.warp(this._effectiveTimeScale,0,J)}warp(J,Q,$){let Z=this._mixer,W=Z.time,K=this.timeScale,H=this._timeScaleInterpolant;if(H===null)H=Z._lendControlInterpolant(),this._timeScaleInterpolant=H;let{parameterPositions:Y,sampleValues:X}=H;return Y[0]=W,Y[1]=W+$,X[0]=J/K,X[1]=Q/K,this}stopWarping(){let J=this._timeScaleInterpolant;if(J!==null)this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(J,Q,$,Z){if(!this.enabled){this._updateWeight(J);return}let W=this._startTime;if(W!==null){let Y=(J-W)*$;if(Y<0||$===0)Q=0;else this._startTime=null,Q=$*Y}Q*=this._updateTimeScale(J);let K=this._updateTime(Q),H=this._updateWeight(J);if(H>0){let Y=this._interpolants,X=this._propertyBindings;switch(this.blendMode){case 2501:for(let U=0,N=Y.length;U!==N;++U)Y[U].evaluate(K),X[U].accumulateAdditive(H);break;case 2500:default:for(let U=0,N=Y.length;U!==N;++U)Y[U].evaluate(K),X[U].accumulate(Z,H)}}}_updateWeight(J){let Q=0;if(this.enabled){Q=this.weight;let $=this._weightInterpolant;if($!==null){let Z=$.evaluate(J)[0];if(Q*=Z,J>$.parameterPositions[1]){if(this.stopFading(),Z===0)this.enabled=!1}}}return this._effectiveWeight=Q,Q}_updateTimeScale(J){let Q=0;if(!this.paused){Q=this.timeScale;let $=this._timeScaleInterpolant;if($!==null){let Z=$.evaluate(J)[0];if(Q*=Z,J>$.parameterPositions[1]){if(Q===0)this.paused=!0;else{if(this._restoreTimeScale!==null)Q=this._restoreTimeScale;this.timeScale=Q}this.stopWarping()}}}return this._effectiveTimeScale=Q,Q}_updateTime(J){let Q=this._clip.duration,$=this.loop,Z=this.time+J,W=this._loopCount,K=$===2202;if(J===0){if(W===-1)return Z;return K&&(W&1)===1?Q-Z:Z}if($===2200){if(W===-1)this._loopCount=0,this._setEndings(!0,!0,!1);J:{if(Z>=Q)Z=Q;else if(Z<0)Z=0;else{this.time=Z;break J}if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;this.time=Z,this._mixer.dispatchEvent({type:"finished",action:this,direction:J<0?-1:1})}}else{if(W===-1)if(J>=0)W=0,this._setEndings(!0,this.repetitions===0,K);else this._setEndings(this.repetitions===0,!0,K);if(Z>=Q||Z<0){let H=Math.floor(Z/Q);Z-=Q*H,W+=Math.abs(H);let Y=this.repetitions-W;if(Y<=0){if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;Z=J>0?Q:0,this.time=Z,this._mixer.dispatchEvent({type:"finished",action:this,direction:J>0?1:-1})}else{if(Y===1){let X=J<0;this._setEndings(X,!X,K)}else this._setEndings(!1,!1,K);this._loopCount=W,this.time=Z,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:H})}}else this._loopCount=W,this.time=Z;if(K&&(W&1)===1)return Q-Z}return Z}_setEndings(J,Q,$){let Z=this._interpolantSettings;if($)Z.endingStart=2401,Z.endingEnd=2401;else{if(J)Z.endingStart=this.zeroSlopeAtStart?2401:2400;else Z.endingStart=2402;if(Q)Z.endingEnd=this.zeroSlopeAtEnd?2401:2400;else Z.endingEnd=2402}}_scheduleFading(J,Q,$){let Z=this._mixer,W=Z.time,K=this._weightInterpolant;if(K===null)K=Z._lendControlInterpolant(),this._weightInterpolant=K;let{parameterPositions:H,sampleValues:Y}=K;return H[0]=W,Y[0]=Q,H[1]=W+J,Y[1]=$,this}}var gU=new Float32Array(1);class w6 extends b9{constructor(J){super();if(this._root=J,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(J,Q){let $=J._localRoot||this._root,Z=J._clip.tracks,W=Z.length,K=J._propertyBindings,H=J._interpolants,Y=$.uuid,X=this._bindingsByRootAndName,U=X[Y];if(U===void 0)U={},X[Y]=U;for(let N=0;N!==W;++N){let E=Z[N],G=E.name,q=U[G];if(q!==void 0)++q.referenceCount,K[N]=q;else{if(q=K[N],q!==void 0){if(q._cacheIndex===null)++q.referenceCount,this._addInactiveBinding(q,Y,G);continue}let R=Q&&Q._propertyBindings[N].binding.parsedPath;q=new HW(NJ.create($,G,R),E.ValueTypeName,E.getValueSize()),++q.referenceCount,this._addInactiveBinding(q,Y,G),K[N]=q}H[N].resultBuffer=q.buffer}}_activateAction(J){if(!this._isActiveAction(J)){if(J._cacheIndex===null){let $=(J._localRoot||this._root).uuid,Z=J._clip.uuid,W=this._actionsByClip[Z];this._bindAction(J,W&&W.knownActions[0]),this._addInactiveAction(J,Z,$)}let Q=J._propertyBindings;for(let $=0,Z=Q.length;$!==Z;++$){let W=Q[$];if(W.useCount++===0)this._lendBinding(W),W.saveOriginalState()}this._lendAction(J)}}_deactivateAction(J){if(this._isActiveAction(J)){let Q=J._propertyBindings;for(let $=0,Z=Q.length;$!==Z;++$){let W=Q[$];if(--W.useCount===0)W.restoreOriginalState(),this._takeBackBinding(W)}this._takeBackAction(J)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let J=this;this.stats={actions:{get total(){return J._actions.length},get inUse(){return J._nActiveActions}},bindings:{get total(){return J._bindings.length},get inUse(){return J._nActiveBindings}},controlInterpolants:{get total(){return J._controlInterpolants.length},get inUse(){return J._nActiveControlInterpolants}}}}_isActiveAction(J){let Q=J._cacheIndex;return Q!==null&&Q<this._nActiveActions}_addInactiveAction(J,Q,$){let Z=this._actions,W=this._actionsByClip,K=W[Q];if(K===void 0)K={knownActions:[J],actionByRoot:{}},J._byClipCacheIndex=0,W[Q]=K;else{let H=K.knownActions;J._byClipCacheIndex=H.length,H.push(J)}J._cacheIndex=Z.length,Z.push(J),K.actionByRoot[$]=J}_removeInactiveAction(J){let Q=this._actions,$=Q[Q.length-1],Z=J._cacheIndex;$._cacheIndex=Z,Q[Z]=$,Q.pop(),J._cacheIndex=null;let W=J._clip.uuid,K=this._actionsByClip,H=K[W],Y=H.knownActions,X=Y[Y.length-1],U=J._byClipCacheIndex;X._byClipCacheIndex=U,Y[U]=X,Y.pop(),J._byClipCacheIndex=null;let N=H.actionByRoot,E=(J._localRoot||this._root).uuid;if(delete N[E],Y.length===0)delete K[W];this._removeInactiveBindingsForAction(J)}_removeInactiveBindingsForAction(J){let Q=J._propertyBindings;for(let $=0,Z=Q.length;$!==Z;++$){let W=Q[$];if(--W.referenceCount===0)this._removeInactiveBinding(W)}}_lendAction(J){let Q=this._actions,$=J._cacheIndex,Z=this._nActiveActions++,W=Q[Z];J._cacheIndex=Z,Q[Z]=J,W._cacheIndex=$,Q[$]=W}_takeBackAction(J){let Q=this._actions,$=J._cacheIndex,Z=--this._nActiveActions,W=Q[Z];J._cacheIndex=Z,Q[Z]=J,W._cacheIndex=$,Q[$]=W}_addInactiveBinding(J,Q,$){let Z=this._bindingsByRootAndName,W=this._bindings,K=Z[Q];if(K===void 0)K={},Z[Q]=K;K[$]=J,J._cacheIndex=W.length,W.push(J)}_removeInactiveBinding(J){let Q=this._bindings,$=J.binding,Z=$.rootNode.uuid,W=$.path,K=this._bindingsByRootAndName,H=K[Z],Y=Q[Q.length-1],X=J._cacheIndex;if(Y._cacheIndex=X,Q[X]=Y,Q.pop(),delete H[W],Object.keys(H).length===0)delete K[Z]}_lendBinding(J){let Q=this._bindings,$=J._cacheIndex,Z=this._nActiveBindings++,W=Q[Z];J._cacheIndex=Z,Q[Z]=J,W._cacheIndex=$,Q[$]=W}_takeBackBinding(J){let Q=this._bindings,$=J._cacheIndex,Z=--this._nActiveBindings,W=Q[Z];J._cacheIndex=Z,Q[Z]=J,W._cacheIndex=$,Q[$]=W}_lendControlInterpolant(){let J=this._controlInterpolants,Q=this._nActiveControlInterpolants++,$=J[Q];if($===void 0)$=new uQ(new Float32Array(2),new Float32Array(2),1,gU),$.__cacheIndex=Q,J[Q]=$;return $}_takeBackControlInterpolant(J){let Q=this._controlInterpolants,$=J.__cacheIndex,Z=--this._nActiveControlInterpolants,W=Q[Z];J.__cacheIndex=Z,Q[Z]=J,W.__cacheIndex=$,Q[$]=W}clipAction(J,Q,$){let Z=Q||this._root,W=Z.uuid,K=typeof J==="string"?z7.findByName(Z,J):J,H=K!==null?K.uuid:J,Y=this._actionsByClip[H],X=null;if($===void 0)if(K!==null)$=K.blendMode;else $=2500;if(Y!==void 0){let N=Y.actionByRoot[W];if(N!==void 0&&N.blendMode===$)return N;if(X=Y.knownActions[0],K===null)K=X._clip}if(K===null)return null;let U=new UW(this,K,Q,$);return this._bindAction(U,X),this._addInactiveAction(U,H,W),U}existingAction(J,Q){let $=Q||this._root,Z=$.uuid,W=typeof J==="string"?z7.findByName($,J):J,K=W?W.uuid:J,H=this._actionsByClip[K];if(H!==void 0)return H.actionByRoot[Z]||null;return null}stopAllAction(){let J=this._actions,Q=this._nActiveActions;for(let $=Q-1;$>=0;--$)J[$].stop();return this}update(J){J*=this.timeScale;let Q=this._actions,$=this._nActiveActions,Z=this.time+=J,W=Math.sign(J),K=this._accuIndex^=1;for(let X=0;X!==$;++X)Q[X]._update(Z,J,W,K);let H=this._bindings,Y=this._nActiveBindings;for(let X=0;X!==Y;++X)H[X].apply(K);return this}setTime(J){this.time=0;for(let Q=0;Q<this._actions.length;Q++)this._actions[Q].time=0;return this.update(J)}getRoot(){return this._root}uncacheClip(J){let Q=this._actions,$=J.uuid,Z=this._actionsByClip,W=Z[$];if(W!==void 0){let K=W.knownActions;for(let H=0,Y=K.length;H!==Y;++H){let X=K[H];this._deactivateAction(X);let U=X._cacheIndex,N=Q[Q.length-1];X._cacheIndex=null,X._byClipCacheIndex=null,N._cacheIndex=U,Q[U]=N,Q.pop(),this._removeInactiveBindingsForAction(X)}delete Z[$]}}uncacheRoot(J){let Q=J.uuid,$=this._actionsByClip;for(let K in $){let H=$[K].actionByRoot,Y=H[Q];if(Y!==void 0)this._deactivateAction(Y),this._removeInactiveAction(Y)}let Z=this._bindingsByRootAndName,W=Z[Q];if(W!==void 0)for(let K in W){let H=W[K];H.restoreOriginalState(),this._removeInactiveBinding(H)}}uncacheAction(J,Q){let $=this.existingAction(J,Q);if($!==null)this._deactivateAction($),this._removeInactiveAction($)}}class aQ{constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,A0("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let Q=performance.now();J=(Q-this.oldTime)/1000,this.oldTime=Q,this.elapsedTime+=J}return J}}class T6{constructor(J=1,Q=0,$=0){this.radius=J,this.phi=Q,this.theta=$}set(J,Q,$){return this.radius=J,this.phi=Q,this.theta=$,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=s0(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){if(this.radius=Math.sqrt(J*J+Q*Q+$*$),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,$),this.phi=Math.acos(s0(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class GW{static{GW.prototype.isMatrix2=!0}constructor(J,Q,$,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,Z){let W=this.elements;return W[0]=J,W[2]=Q,W[1]=$,W[3]=Z,this}}class rQ extends b9{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function NW(J,Q,$,Z){let W=pU(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/W.components*W.byteLength;case 1029:return J*Q/W.components*W.byteLength;case 1030:return J*Q*2/W.components*W.byteLength;case 1031:return J*Q*2/W.components*W.byteLength;case 1022:return J*Q*3/W.components*W.byteLength;case 1023:return J*Q*4/W.components*W.byteLength;case 1033:return J*Q*4/W.components*W.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function pU(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)A0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function UY(){let J=null,Q=!1,$=null,Z=null;function W(K,H){Z=J.requestAnimationFrame(W),$(K,H)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;Z=J.requestAnimationFrame(W),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);Q=!1},setAnimationLoop:function(K){$=K},setContext:function(K){J=K}}}function lU(J){let Q=new WeakMap;function $(Y,X){let{array:U,usage:N}=Y,E=U.byteLength,G=J.createBuffer();J.bindBuffer(X,G),J.bufferData(X,U,N),Y.onUploadCallback();let q;if(U instanceof Float32Array)q=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)q=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)q=J.HALF_FLOAT;else q=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)q=J.SHORT;else if(U instanceof Uint32Array)q=J.UNSIGNED_INT;else if(U instanceof Int32Array)q=J.INT;else if(U instanceof Int8Array)q=J.BYTE;else if(U instanceof Uint8Array)q=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)q=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:G,type:q,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:E}}function Z(Y,X,U){let{array:N,updateRanges:E}=X;if(J.bindBuffer(U,Y),E.length===0)J.bufferSubData(U,0,N);else{E.sort((q,R)=>q.start-R.start);let G=0;for(let q=1;q<E.length;q++){let R=E[G],V=E[q];if(V.start<=R.start+R.count+1)R.count=Math.max(R.count,V.start+V.count-R.start);else++G,E[G]=V}E.length=G+1;for(let q=0,R=E.length;q<R;q++){let V=E[q];J.bufferSubData(U,V.start*N.BYTES_PER_ELEMENT,N,V.start,V.count)}X.clearUpdateRanges()}X.onUploadCallback()}function W(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let X=Q.get(Y);if(X)J.deleteBuffer(X.buffer),Q.delete(Y)}function H(Y,X){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let N=Q.get(Y);if(!N||N.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,$(Y,X));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,Y,X),U.version=Y.version}}return{get:W,remove:K,update:H}}var mU=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dU=`#ifdef USE_ALPHAHASH
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
#endif`,uU=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cU=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nU=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sU=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iU=`#ifdef USE_AOMAP
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
#endif`,oU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aU=`#ifdef USE_BATCHING
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
#endif`,rU=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tU=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J5=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Q5=`#ifdef USE_IRIDESCENCE
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
#endif`,$5=`#ifdef USE_BUMPMAP
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
#endif`,Z5=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,W5=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,K5=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,H5=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Y5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,X5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,U5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,G5=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,N5=`#define PI 3.141592653589793
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
} // validated`,E5=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,q5=`vec3 transformedNormal = objectNormal;
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
#endif`,F5=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O5=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R5=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L5=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V5="gl_FragColor = linearToOutputTexel( gl_FragColor );",M5=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,D5=`#ifdef USE_ENVMAP
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
#endif`,k5=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,B5=`#ifdef USE_ENVMAP
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
#endif`,z5=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C5=`#ifdef USE_ENVMAP
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
#endif`,P5=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_5=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I5=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A5=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w5=`#ifdef USE_GRADIENTMAP
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
}`,T5=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,S5=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j5=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y5=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,v5=`#ifdef USE_ENVMAP
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
#endif`,f5=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h5=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,b5=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x5=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g5=`PhysicalMaterial material;
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
#endif`,p5=`uniform sampler2D dfgLUT;
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
}`,l5=`
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
#endif`,m5=`#if defined( RE_IndirectDiffuse )
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
#endif`,d5=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u5=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,c5=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n5=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s5=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i5=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,o5=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a5=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r5=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,t5=`#if defined( USE_POINTS_UV )
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
#endif`,e5=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JG=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QG=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$G=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZG=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WG=`#ifdef USE_MORPHTARGETS
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
#endif`,KG=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HG=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,YG=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,XG=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UG=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GG=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,NG=`#ifdef USE_NORMALMAP
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
#endif`,EG=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qG=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FG=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OG=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RG=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LG=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,VG=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MG=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DG=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kG=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BG=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zG=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CG=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PG=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_G=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,IG=`float getShadowMask() {
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
}`,AG=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wG=`#ifdef USE_SKINNING
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
#endif`,TG=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SG=`#ifdef USE_SKINNING
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
#endif`,jG=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yG=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vG=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fG=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hG=`#ifdef USE_TRANSMISSION
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
#endif`,bG=`#ifdef USE_TRANSMISSION
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
#endif`,xG=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gG=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pG=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lG=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mG=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dG=`uniform sampler2D t2D;
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
}`,uG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cG=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sG=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iG=`#include <common>
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
}`,oG=`#if DEPTH_PACKING == 3200
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
}`,aG=`#define DISTANCE
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
}`,rG=`#define DISTANCE
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
}`,tG=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eG=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JN=`uniform float scale;
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
}`,QN=`uniform vec3 diffuse;
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
}`,$N=`#include <common>
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
}`,ZN=`uniform vec3 diffuse;
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
}`,WN=`#define LAMBERT
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
}`,KN=`#define LAMBERT
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
}`,HN=`#define MATCAP
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
}`,YN=`#define MATCAP
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
}`,XN=`#define NORMAL
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
}`,UN=`#define NORMAL
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
}`,GN=`#define PHONG
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
}`,NN=`#define PHONG
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
}`,EN=`#define STANDARD
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
}`,qN=`#define STANDARD
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
}`,FN=`#define TOON
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
}`,ON=`#define TOON
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
}`,RN=`uniform float size;
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
}`,LN=`uniform vec3 diffuse;
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
}`,VN=`#include <common>
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
}`,MN=`uniform vec3 color;
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
}`,DN=`uniform float rotation;
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
}`,kN=`uniform vec3 diffuse;
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
}`,o0={alphahash_fragment:mU,alphahash_pars_fragment:dU,alphamap_fragment:uU,alphamap_pars_fragment:cU,alphatest_fragment:nU,alphatest_pars_fragment:sU,aomap_fragment:iU,aomap_pars_fragment:oU,batching_pars_vertex:aU,batching_vertex:rU,begin_vertex:tU,beginnormal_vertex:eU,bsdfs:J5,iridescence_fragment:Q5,bumpmap_pars_fragment:$5,clipping_planes_fragment:Z5,clipping_planes_pars_fragment:W5,clipping_planes_pars_vertex:K5,clipping_planes_vertex:H5,color_fragment:Y5,color_pars_fragment:X5,color_pars_vertex:U5,color_vertex:G5,common:N5,cube_uv_reflection_fragment:E5,defaultnormal_vertex:q5,displacementmap_pars_vertex:F5,displacementmap_vertex:O5,emissivemap_fragment:R5,emissivemap_pars_fragment:L5,colorspace_fragment:V5,colorspace_pars_fragment:M5,envmap_fragment:D5,envmap_common_pars_fragment:k5,envmap_pars_fragment:B5,envmap_pars_vertex:z5,envmap_physical_pars_fragment:v5,envmap_vertex:C5,fog_vertex:P5,fog_pars_vertex:_5,fog_fragment:I5,fog_pars_fragment:A5,gradientmap_pars_fragment:w5,lightmap_pars_fragment:T5,lights_lambert_fragment:S5,lights_lambert_pars_fragment:j5,lights_pars_begin:y5,lights_toon_fragment:f5,lights_toon_pars_fragment:h5,lights_phong_fragment:b5,lights_phong_pars_fragment:x5,lights_physical_fragment:g5,lights_physical_pars_fragment:p5,lights_fragment_begin:l5,lights_fragment_maps:m5,lights_fragment_end:d5,lightprobes_pars_fragment:u5,logdepthbuf_fragment:c5,logdepthbuf_pars_fragment:n5,logdepthbuf_pars_vertex:s5,logdepthbuf_vertex:i5,map_fragment:o5,map_pars_fragment:a5,map_particle_fragment:r5,map_particle_pars_fragment:t5,metalnessmap_fragment:e5,metalnessmap_pars_fragment:JG,morphinstance_vertex:QG,morphcolor_vertex:$G,morphnormal_vertex:ZG,morphtarget_pars_vertex:WG,morphtarget_vertex:KG,normal_fragment_begin:HG,normal_fragment_maps:YG,normal_pars_fragment:XG,normal_pars_vertex:UG,normal_vertex:GG,normalmap_pars_fragment:NG,clearcoat_normal_fragment_begin:EG,clearcoat_normal_fragment_maps:qG,clearcoat_pars_fragment:FG,iridescence_pars_fragment:OG,opaque_fragment:RG,packing:LG,premultiplied_alpha_fragment:VG,project_vertex:MG,dithering_fragment:DG,dithering_pars_fragment:kG,roughnessmap_fragment:BG,roughnessmap_pars_fragment:zG,shadowmap_pars_fragment:CG,shadowmap_pars_vertex:PG,shadowmap_vertex:_G,shadowmask_pars_fragment:IG,skinbase_vertex:AG,skinning_pars_vertex:wG,skinning_vertex:TG,skinnormal_vertex:SG,specularmap_fragment:jG,specularmap_pars_fragment:yG,tonemapping_fragment:vG,tonemapping_pars_fragment:fG,transmission_fragment:hG,transmission_pars_fragment:bG,uv_pars_fragment:xG,uv_pars_vertex:gG,uv_vertex:pG,worldpos_vertex:lG,background_vert:mG,background_frag:dG,backgroundCube_vert:uG,backgroundCube_frag:cG,cube_vert:nG,cube_frag:sG,depth_vert:iG,depth_frag:oG,distance_vert:aG,distance_frag:rG,equirect_vert:tG,equirect_frag:eG,linedashed_vert:JN,linedashed_frag:QN,meshbasic_vert:$N,meshbasic_frag:ZN,meshlambert_vert:WN,meshlambert_frag:KN,meshmatcap_vert:HN,meshmatcap_frag:YN,meshnormal_vert:XN,meshnormal_frag:UN,meshphong_vert:GN,meshphong_frag:NN,meshphysical_vert:EN,meshphysical_frag:qN,meshtoon_vert:FN,meshtoon_frag:ON,points_vert:RN,points_frag:LN,shadow_vert:VN,shadow_frag:MN,sprite_vert:DN,sprite_frag:kN},V0={common:{diffuse:{value:new g0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new u0},alphaMap:{value:null},alphaMapTransform:{value:new u0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new u0}},envmap:{envMap:{value:null},envMapRotation:{value:new u0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new u0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new u0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new u0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new u0},normalScale:{value:new W0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new u0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new u0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new u0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new u0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new g0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new w},probesMax:{value:new w},probesResolution:{value:new w}},points:{diffuse:{value:new g0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new u0},alphaTest:{value:0},uvTransform:{value:new u0}},sprite:{diffuse:{value:new g0(16777215)},opacity:{value:1},center:{value:new W0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new u0},alphaMap:{value:null},alphaMapTransform:{value:new u0},alphaTest:{value:0}}},o9={basic:{uniforms:Q9([V0.common,V0.specularmap,V0.envmap,V0.aomap,V0.lightmap,V0.fog]),vertexShader:o0.meshbasic_vert,fragmentShader:o0.meshbasic_frag},lambert:{uniforms:Q9([V0.common,V0.specularmap,V0.envmap,V0.aomap,V0.lightmap,V0.emissivemap,V0.bumpmap,V0.normalmap,V0.displacementmap,V0.fog,V0.lights,{emissive:{value:new g0(0)},envMapIntensity:{value:1}}]),vertexShader:o0.meshlambert_vert,fragmentShader:o0.meshlambert_frag},phong:{uniforms:Q9([V0.common,V0.specularmap,V0.envmap,V0.aomap,V0.lightmap,V0.emissivemap,V0.bumpmap,V0.normalmap,V0.displacementmap,V0.fog,V0.lights,{emissive:{value:new g0(0)},specular:{value:new g0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:o0.meshphong_vert,fragmentShader:o0.meshphong_frag},standard:{uniforms:Q9([V0.common,V0.envmap,V0.aomap,V0.lightmap,V0.emissivemap,V0.bumpmap,V0.normalmap,V0.displacementmap,V0.roughnessmap,V0.metalnessmap,V0.fog,V0.lights,{emissive:{value:new g0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:o0.meshphysical_vert,fragmentShader:o0.meshphysical_frag},toon:{uniforms:Q9([V0.common,V0.aomap,V0.lightmap,V0.emissivemap,V0.bumpmap,V0.normalmap,V0.displacementmap,V0.gradientmap,V0.fog,V0.lights,{emissive:{value:new g0(0)}}]),vertexShader:o0.meshtoon_vert,fragmentShader:o0.meshtoon_frag},matcap:{uniforms:Q9([V0.common,V0.bumpmap,V0.normalmap,V0.displacementmap,V0.fog,{matcap:{value:null}}]),vertexShader:o0.meshmatcap_vert,fragmentShader:o0.meshmatcap_frag},points:{uniforms:Q9([V0.points,V0.fog]),vertexShader:o0.points_vert,fragmentShader:o0.points_frag},dashed:{uniforms:Q9([V0.common,V0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:o0.linedashed_vert,fragmentShader:o0.linedashed_frag},depth:{uniforms:Q9([V0.common,V0.displacementmap]),vertexShader:o0.depth_vert,fragmentShader:o0.depth_frag},normal:{uniforms:Q9([V0.common,V0.bumpmap,V0.normalmap,V0.displacementmap,{opacity:{value:1}}]),vertexShader:o0.meshnormal_vert,fragmentShader:o0.meshnormal_frag},sprite:{uniforms:Q9([V0.sprite,V0.fog]),vertexShader:o0.sprite_vert,fragmentShader:o0.sprite_frag},background:{uniforms:{uvTransform:{value:new u0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:o0.background_vert,fragmentShader:o0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new u0}},vertexShader:o0.backgroundCube_vert,fragmentShader:o0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:o0.cube_vert,fragmentShader:o0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:o0.equirect_vert,fragmentShader:o0.equirect_frag},distance:{uniforms:Q9([V0.common,V0.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:o0.distance_vert,fragmentShader:o0.distance_frag},shadow:{uniforms:Q9([V0.lights,V0.fog,{color:{value:new g0(0)},opacity:{value:1}}]),vertexShader:o0.shadow_vert,fragmentShader:o0.shadow_frag}};o9.physical={uniforms:Q9([o9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new u0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new u0},clearcoatNormalScale:{value:new W0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new u0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new u0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new u0},sheen:{value:0},sheenColor:{value:new g0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new u0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new u0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new u0},transmissionSamplerSize:{value:new W0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new u0},attenuationDistance:{value:0},attenuationColor:{value:new g0(0)},specularColor:{value:new g0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new u0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new u0},anisotropyVector:{value:new W0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new u0}}]),vertexShader:o0.meshphysical_vert,fragmentShader:o0.meshphysical_frag};var tQ={r:0,b:0,g:0},BN=new d0,GY=new u0;GY.set(-1,0,0,0,1,0,0,0,1);function zN(J,Q,$,Z,W,K){let H=new g0(0),Y=W===!0?0:1,X,U,N=null,E=0,G=null;function q(_){let k=_.isScene===!0?_.background:null;if(k&&k.isTexture){let L=_.backgroundBlurriness>0;k=Q.get(k,L)}return k}function R(_){let k=!1,L=q(_);if(L===null)O(H,Y);else if(L&&L.isColor)O(L,1),k=!0;let z=J.xr.getEnvironmentBlendMode();if(z==="additive")$.buffers.color.setClear(0,0,0,1,K);else if(z==="alpha-blend")$.buffers.color.setClear(0,0,0,0,K);if(J.autoClear||k)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function V(_,k){let L=q(k);if(L&&(L.isCubeTexture||L.mapping===X6)){if(U===void 0)U=new c0(new Y9(1,1,1),new P9({name:"BackgroundCubeMaterial",uniforms:a8(o9.backgroundCube.uniforms),vertexShader:o9.backgroundCube.vertexShader,fragmentShader:o9.backgroundCube.fragmentShader,side:H9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(z,I,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(U);if(U.material.uniforms.envMap.value=L,U.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(BN.makeRotationFromEuler(k.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(GY);if(U.material.toneMapped=r0.getTransfer(L.colorSpace)!==zJ,N!==L||E!==L.version||G!==J.toneMapping)U.material.needsUpdate=!0,N=L,E=L.version,G=J.toneMapping;U.layers.enableAll(),_.unshift(U,U.geometry,U.material,0,0,null)}else if(L&&L.isTexture){if(X===void 0)X=new c0(new x9(2,2),new P9({name:"BackgroundMaterial",uniforms:a8(o9.background.uniforms),vertexShader:o9.background.vertexShader,fragmentShader:o9.background.fragmentShader,side:k8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),X.geometry.deleteAttribute("normal"),Object.defineProperty(X.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(X);if(X.material.uniforms.t2D.value=L,X.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,X.material.toneMapped=r0.getTransfer(L.colorSpace)!==zJ,L.matrixAutoUpdate===!0)L.updateMatrix();if(X.material.uniforms.uvTransform.value.copy(L.matrix),N!==L||E!==L.version||G!==J.toneMapping)X.material.needsUpdate=!0,N=L,E=L.version,G=J.toneMapping;X.layers.enableAll(),_.unshift(X,X.geometry,X.material,0,0,null)}}function O(_,k){_.getRGB(tQ,iZ(J)),$.buffers.color.setClear(tQ.r,tQ.g,tQ.b,k,K)}function F(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(X!==void 0)X.geometry.dispose(),X.material.dispose(),X=void 0}return{getClearColor:function(){return H},setClearColor:function(_,k=1){H.set(_),Y=k,O(H,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(_){Y=_,O(H,Y)},render:R,addToRenderList:V,dispose:F}}function CN(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},W=G(null),K=W,H=!1;function Y(y,b,o,T,d){let r=!1,l=E(y,T,o,b);if(K!==l)K=l,U(K.object);if(r=q(y,T,o,d),r)R(y,T,o,d);if(d!==null)Q.update(d,J.ELEMENT_ARRAY_BUFFER);if(r||H){if(H=!1,L(y,b,o,T),d!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(d).buffer)}}function X(){return J.createVertexArray()}function U(y){return J.bindVertexArray(y)}function N(y){return J.deleteVertexArray(y)}function E(y,b,o,T){let d=T.wireframe===!0,r=Z[b.id];if(r===void 0)r={},Z[b.id]=r;let l=y.isInstancedMesh===!0?y.id:0,H0=r[l];if(H0===void 0)H0={},r[l]=H0;let n=H0[o.id];if(n===void 0)n={},H0[o.id]=n;let t=n[d];if(t===void 0)t=G(X()),n[d]=t;return t}function G(y){let b=[],o=[],T=[];for(let d=0;d<$;d++)b[d]=0,o[d]=0,T[d]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:o,attributeDivisors:T,object:y,attributes:{},index:null}}function q(y,b,o,T){let d=K.attributes,r=b.attributes,l=0,H0=o.getAttributes();for(let n in H0)if(H0[n].location>=0){let $0=d[n],w0=r[n];if(w0===void 0){if(n==="instanceMatrix"&&y.instanceMatrix)w0=y.instanceMatrix;if(n==="instanceColor"&&y.instanceColor)w0=y.instanceColor}if($0===void 0)return!0;if($0.attribute!==w0)return!0;if(w0&&$0.data!==w0.data)return!0;l++}if(K.attributesNum!==l)return!0;if(K.index!==T)return!0;return!1}function R(y,b,o,T){let d={},r=b.attributes,l=0,H0=o.getAttributes();for(let n in H0)if(H0[n].location>=0){let $0=r[n];if($0===void 0){if(n==="instanceMatrix"&&y.instanceMatrix)$0=y.instanceMatrix;if(n==="instanceColor"&&y.instanceColor)$0=y.instanceColor}let w0={};if(w0.attribute=$0,$0&&$0.data)w0.data=$0.data;d[n]=w0,l++}K.attributes=d,K.attributesNum=l,K.index=T}function V(){let y=K.newAttributes;for(let b=0,o=y.length;b<o;b++)y[b]=0}function O(y){F(y,0)}function F(y,b){let{newAttributes:o,enabledAttributes:T,attributeDivisors:d}=K;if(o[y]=1,T[y]===0)J.enableVertexAttribArray(y),T[y]=1;if(d[y]!==b)J.vertexAttribDivisor(y,b),d[y]=b}function _(){let{newAttributes:y,enabledAttributes:b}=K;for(let o=0,T=b.length;o<T;o++)if(b[o]!==y[o])J.disableVertexAttribArray(o),b[o]=0}function k(y,b,o,T,d,r,l){if(l===!0)J.vertexAttribIPointer(y,b,o,d,r);else J.vertexAttribPointer(y,b,o,T,d,r)}function L(y,b,o,T){V();let d=T.attributes,r=o.getAttributes(),l=b.defaultAttributeValues;for(let H0 in r){let n=r[H0];if(n.location>=0){let t=d[H0];if(t===void 0){if(H0==="instanceMatrix"&&y.instanceMatrix)t=y.instanceMatrix;if(H0==="instanceColor"&&y.instanceColor)t=y.instanceColor}if(t!==void 0){let{normalized:$0,itemSize:w0}=t,f0=Q.get(t);if(f0===void 0)continue;let{buffer:qJ,type:n0,bytesPerElement:s}=f0,Z0=n0===J.INT||n0===J.UNSIGNED_INT||t.gpuType===o$;if(t.isInterleavedBufferAttribute){let X0=t.data,y0=X0.stride,b0=t.offset;if(X0.isInstancedInterleavedBuffer){for(let j0=0;j0<n.locationSize;j0++)F(n.location+j0,X0.meshPerAttribute);if(y.isInstancedMesh!==!0&&T._maxInstanceCount===void 0)T._maxInstanceCount=X0.meshPerAttribute*X0.count}else for(let j0=0;j0<n.locationSize;j0++)O(n.location+j0);J.bindBuffer(J.ARRAY_BUFFER,qJ);for(let j0=0;j0<n.locationSize;j0++)k(n.location+j0,w0/n.locationSize,n0,$0,y0*s,(b0+w0/n.locationSize*j0)*s,Z0)}else{if(t.isInstancedBufferAttribute){for(let X0=0;X0<n.locationSize;X0++)F(n.location+X0,t.meshPerAttribute);if(y.isInstancedMesh!==!0&&T._maxInstanceCount===void 0)T._maxInstanceCount=t.meshPerAttribute*t.count}else for(let X0=0;X0<n.locationSize;X0++)O(n.location+X0);J.bindBuffer(J.ARRAY_BUFFER,qJ);for(let X0=0;X0<n.locationSize;X0++)k(n.location+X0,w0/n.locationSize,n0,$0,w0*s,w0/n.locationSize*X0*s,Z0)}}else if(l!==void 0){let $0=l[H0];if($0!==void 0)switch($0.length){case 2:J.vertexAttrib2fv(n.location,$0);break;case 3:J.vertexAttrib3fv(n.location,$0);break;case 4:J.vertexAttrib4fv(n.location,$0);break;default:J.vertexAttrib1fv(n.location,$0)}}}}_()}function z(){P();for(let y in Z){let b=Z[y];for(let o in b){let T=b[o];for(let d in T){let r=T[d];for(let l in r)N(r[l].object),delete r[l];delete T[d]}}delete Z[y]}}function I(y){if(Z[y.id]===void 0)return;let b=Z[y.id];for(let o in b){let T=b[o];for(let d in T){let r=T[d];for(let l in r)N(r[l].object),delete r[l];delete T[d]}}delete Z[y.id]}function A(y){for(let b in Z){let o=Z[b];for(let T in o){let d=o[T];if(d[y.id]===void 0)continue;let r=d[y.id];for(let l in r)N(r[l].object),delete r[l];delete d[y.id]}}}function M(y){for(let b in Z){let o=Z[b],T=y.isInstancedMesh===!0?y.id:0,d=o[T];if(d===void 0)continue;for(let r in d){let l=d[r];for(let H0 in l)N(l[H0].object),delete l[H0];delete d[r]}if(delete o[T],Object.keys(o).length===0)delete Z[b]}}function P(){if(p(),H=!0,K===W)return;K=W,U(K.object)}function p(){W.geometry=null,W.program=null,W.wireframe=!1}return{setup:Y,reset:P,resetDefaultState:p,dispose:z,releaseStatesOfGeometry:I,releaseStatesOfObject:M,releaseStatesOfProgram:A,initAttributes:V,enableAttribute:O,disableUnusedAttributes:_}}function PN(J,Q,$){let Z;function W(X){Z=X}function K(X,U){J.drawArrays(Z,X,U),$.update(U,Z,1)}function H(X,U,N){if(N===0)return;J.drawArraysInstanced(Z,X,U,N),$.update(U,Z,N)}function Y(X,U,N){if(N===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,X,0,U,0,N);let G=0;for(let q=0;q<N;q++)G+=U[q];$.update(G,Z,1)}this.setMode=W,this.render=K,this.renderInstances=H,this.renderMultiDraw=Y}function _N(J,Q,$,Z){let W;function K(){if(W!==void 0)return W;if(Q.has("EXT_texture_filter_anisotropic")===!0){let A=Q.get("EXT_texture_filter_anisotropic");W=J.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else W=0;return W}function H(A){if(A!==n9&&Z.convert(A)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(A){let M=A===c9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(A!==f9&&A!==W8&&!M&&Z.convert(A)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function X(A){if(A==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";A="mediump"}if(A==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",N=X(U);if(N!==U)A0("WebGLRenderer:",U,"not supported, using",N,"instead."),U=N;let E=$.logarithmicDepthBuffer===!0,G=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&G===!1)A0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let q=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),R=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),V=J.getParameter(J.MAX_TEXTURE_SIZE),O=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),F=J.getParameter(J.MAX_VERTEX_ATTRIBS),_=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),k=J.getParameter(J.MAX_VARYING_VECTORS),L=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),z=J.getParameter(J.MAX_SAMPLES),I=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:K,getMaxPrecision:X,textureFormatReadable:H,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:E,reversedDepthBuffer:G,maxTextures:q,maxVertexTextures:R,maxTextureSize:V,maxCubemapSize:O,maxAttributes:F,maxVertexUniforms:_,maxVaryings:k,maxFragmentUniforms:L,maxSamples:z,samples:I}}function IN(J){let Q=this,$=null,Z=0,W=!1,K=!1,H=new k9,Y=new u0,X={value:null,needsUpdate:!1};this.uniform=X,this.numPlanes=0,this.numIntersection=0,this.init=function(E,G){let q=E.length!==0||G||Z!==0||W;return W=G,Z=E.length,q},this.beginShadows=function(){K=!0,N(null)},this.endShadows=function(){K=!1},this.setGlobalState=function(E,G){$=N(E,G,0)},this.setState=function(E,G,q){let{clippingPlanes:R,clipIntersection:V,clipShadows:O}=E,F=J.get(E);if(!W||R===null||R.length===0||K&&!O)if(K)N(null);else U();else{let _=K?0:Z,k=_*4,L=F.clippingState||null;X.value=L,L=N(R,G,k,q);for(let z=0;z!==k;++z)L[z]=$[z];F.clippingState=L,this.numIntersection=V?this.numPlanes:0,this.numPlanes+=_}};function U(){if(X.value!==$)X.value=$,X.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function N(E,G,q,R){let V=E!==null?E.length:0,O=null;if(V!==0){if(O=X.value,R!==!0||O===null){let F=q+V*4,_=G.matrixWorldInverse;if(Y.getNormalMatrix(_),O===null||O.length<F)O=new Float32Array(F);for(let k=0,L=q;k!==V;++k,L+=4)H.copy(E[k]).applyMatrix4(_,Y),H.normal.toArray(O,L),O[L+3]=H.constant}X.value=O,X.needsUpdate=!0}return Q.numPlanes=V,Q.numIntersection=0,O}}var g7=4,AN=6,wN=20,TN=256,S6=new t8,mH=new g0,EW=null,qW=0,FW=0,OW=!1,SN=new w,e8=new w;class VW{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,W={}){let{size:K=256,position:H=SN}=W;EW=this._renderer.getRenderTarget(),qW=this._renderer.getActiveCubeFace(),FW=this._renderer.getActiveMipmapLevel(),OW=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(K);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,Y,H),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=cH(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=uH(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(EW,qW,FW),this._renderer.xr.enabled=OW,J.scissorTest=!1,x7(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===_7||J.mapping===l8)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);EW=this._renderer.getRenderTarget(),qW=this._renderer.getActiveCubeFace(),FW=this._renderer.getActiveMipmapLevel(),OW=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:sJ,minFilter:sJ,generateMipmaps:!1,type:c9,format:n9,colorSpace:E9,depthBuffer:!1},Z=dH(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=dH(J,Q,$);let{_lodMax:W}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=jN(W)),this._blurMaterial=vN(W,J,Q),this._ggxMaterial=yN(W,J,Q)}return Z}_compileMaterial(J){let Q=new c0(new SJ,J);this._renderer.compile(Q,S6)}_sceneToCubeUV(J,Q,$,Z,W){let Y=new lJ(90,1,Q,$),X=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],N=this._renderer,E=N.autoClear,G=N.toneMapping;if(N.getClearColor(mH),N.toneMapping=y9,N.autoClear=!1,N.state.buffers.depth.getReversed())N.setRenderTarget(Z),N.clearDepth(),N.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new c0(new Y9,new oJ({name:"PMREM.Background",side:H9,depthWrite:!1,depthTest:!1}));let R=this._backgroundBox,V=R.material,O=!1,F=J.background;if(F){if(F.isColor)V.color.copy(F),J.background=null,O=!0}else V.color.copy(mH),O=!0;for(let _=0;_<6;_++){let k=_%3;if(k===0)Y.up.set(0,X[_],0),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x+U[_],W.y,W.z);else if(k===1)Y.up.set(0,0,X[_]),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x,W.y+U[_],W.z);else Y.up.set(0,X[_],0),Y.position.set(W.x,W.y,W.z),Y.lookAt(W.x,W.y,W.z+U[_]);let L=this._cubeSize;if(x7(Z,k*L,_>2?L:0,L,L),N.setRenderTarget(Z),O)N.render(R,Y);N.render(J,Y)}N.toneMapping=G,N.autoClear=E,J.background=F}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===_7||J.mapping===l8;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=cH();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=uH();let W=Z?this._cubemapMaterial:this._equirectMaterial,K=this._lodMeshes[0];K.material=W;let H=W.uniforms;H.envMap.value=J;let Y=this._cubeSize;x7(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(K,S6)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodMeshes.length;for(let W=1;W<Z;W++)this._applyGGXFilter(J,W-1,W);Q.autoClear=$}_applyGGXFilter(J,Q,$){let Z=this._renderer,W=this._pingPongRenderTarget,K=this._ggxMaterial,H=this._lodMeshes[$];H.material=K;let Y=K.uniforms,X=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),N=Math.sqrt(X*X-U*U),E=X*1.25,G=N*E,{_lodMax:q}=this,R=this._sizeLods[$],V=3*R*($>q-g7?$-q+g7:0),O=4*(this._cubeSize-R);Y.envMap.value=J.texture,Y.roughness.value=G,Y.mipInt.value=q-Q,x7(W,V,O,3*R,2*R),Z.setRenderTarget(W),Z.render(H,S6),Y.envMap.value=W.texture,Y.roughness.value=0,Y.mipInt.value=q-$,x7(J,V,O,3*R,2*R),Z.setRenderTarget(J),Z.render(H,S6)}_blur(J,Q,$,Z){let W=this._pingPongRenderTarget,K=Math.min(Z,Math.PI)/Math.SQRT2;this._blurPass(J,W,Q,$,K),this._blurPass(W,J,$,$,K)}_blurPass(J,Q,$,Z,W){let K=this._renderer,H=this._blurMaterial,Y=this._lodMeshes[Z];Y.material=H;let X=H.uniforms;X.envMap.value=J.texture,X.sigma.value=W,X.mipInt.value=this._lodMax-$;let U=this._sizeLods[Z],N=3*U*(Z>this._lodMax-g7?Z-this._lodMax+g7:0),E=4*(this._cubeSize-U);x7(Q,N,E,3*U,2*U),K.setRenderTarget(Q),K.render(Y,S6)}}function jN(J){let Q=[],$=[],Z=J,W=J-g7+1+AN;for(let K=0;K<W;K++){let H=Math.pow(2,Z);Q.push(H);let Y=1/(H-2),X=-Y,U=1+Y,N=[X,X,U,X,U,U,X,X,U,U,X,U],E=6,G=6,q=3,R=new Float32Array(q*G*E),V=new Float32Array(q*G*E);for(let F=0;F<E;F++){let _=F%3*2/3-1,k=F>2?0:-1,L=[_,k,0,_+0.6666666666666666,k,0,_+0.6666666666666666,k+1,0,_,k,0,_+0.6666666666666666,k+1,0,_,k+1,0];R.set(L,q*G*F);for(let z=0;z<G;z++){let I=N[z*2]*2-1,A=N[z*2+1]*2-1;if(F===0)e8.set(1,A,I);else if(F===1)e8.set(-I,1,-A);else if(F===2)e8.set(-I,A,1);else if(F===3)e8.set(-1,A,-I);else if(F===4)e8.set(-I,-1,A);else e8.set(I,A,-1);e8.toArray(V,(F*G+z)*q)}}let O=new SJ;if(O.setAttribute("position",new mJ(R,q)),O.setAttribute("outputDirection",new mJ(V,q)),$.push(new c0(O,null)),Z>g7)Z--}return{lodMeshes:$,sizeLods:Q}}function dH(J,Q,$){let Z=new q9(J,Q,$);return Z.texture.mapping=X6,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function x7(J,Q,$,Z,W){J.viewport.set(Q,$,Z,W),J.scissor.set(Q,$,Z,W)}function yN(J,Q,$){return new P9({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:TN,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:J$(),fragmentShader:`

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
		`,blending:d9,depthTest:!1,depthWrite:!1})}function vN(J,Q,$){return new P9({name:"SphericalGaussianBlur",defines:{SAMPLES:wN,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:J$(),fragmentShader:`

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
		`,blending:d9,depthTest:!1,depthWrite:!1})}function uH(){return new P9({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:J$(),fragmentShader:`

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
		`,blending:d9,depthTest:!1,depthWrite:!1})}function cH(){return new P9({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:J$(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:d9,depthTest:!1,depthWrite:!1})}function J$(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class kW extends q9{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new bQ(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new Y9(5,5,5),W=new P9({name:"CubemapFromEquirect",uniforms:a8($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:H9,blending:d9});W.uniforms.tEquirect.value=Q;let K=new c0(Z,W),H=Q.minFilter;if(Q.minFilter===u9)Q.minFilter=sJ;return new WW(1,10,this).update(J,K),Q.minFilter=H,K.geometry.dispose(),K.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let W=J.getRenderTarget();for(let K=0;K<6;K++)J.setRenderTarget(this,K),J.clear(Q,$,Z);J.setRenderTarget(W)}}function fN(J){let Q=new WeakMap,$=new WeakMap,Z=null;function W(G,q=!1){if(G===null||G===void 0)return null;if(q)return H(G);return K(G)}function K(G){if(G&&G.isTexture){let q=G.mapping;if(q===OQ||q===RQ)if(Q.has(G)){let R=Q.get(G).texture;return Y(R,G.mapping)}else{let R=G.image;if(R&&R.height>0){let V=new kW(R.height);return V.fromEquirectangularTexture(J,G),Q.set(G,V),G.addEventListener("dispose",U),Y(V.texture,G.mapping)}else return null}}return G}function H(G){if(G&&G.isTexture){let q=G.mapping,R=q===OQ||q===RQ,V=q===_7||q===l8;if(R||V){let O=$.get(G),F=O!==void 0?O.texture.pmremVersion:0;if(G.isRenderTargetTexture&&G.pmremVersion!==F){if(Z===null)Z=new VW(J);return O=R?Z.fromEquirectangular(G,O):Z.fromCubemap(G,O),O.texture.pmremVersion=G.pmremVersion,$.set(G,O),O.texture}else if(O!==void 0)return O.texture;else{let _=G.image;if(R&&_&&_.height>0||V&&_&&X(_)){if(Z===null)Z=new VW(J);return O=R?Z.fromEquirectangular(G):Z.fromCubemap(G),O.texture.pmremVersion=G.pmremVersion,$.set(G,O),G.addEventListener("dispose",N),O.texture}else return null}}}return G}function Y(G,q){if(q===OQ)G.mapping=_7;else if(q===RQ)G.mapping=l8;return G}function X(G){let q=0,R=6;for(let V=0;V<R;V++)if(G[V]!==void 0)q++;return q===R}function U(G){let q=G.target;q.removeEventListener("dispose",U);let R=Q.get(q);if(R!==void 0)Q.delete(q),R.dispose()}function N(G){let q=G.target;q.removeEventListener("dispose",N);let R=$.get(q);if(R!==void 0)$.delete(q),R.dispose()}function E(){if(Q=new WeakMap,$=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:W,dispose:E}}function hN(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let W=J.getExtension(Z);return Q[Z]=W,W}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let W=$(Z);if(W===null)b8("WebGLRenderer: "+Z+" extension not supported.");return W}}}function bN(J,Q,$,Z){let W={},K=new WeakMap;function H(E){let G=E.target;if(G.index!==null)Q.remove(G.index);for(let R in G.attributes)Q.remove(G.attributes[R]);G.removeEventListener("dispose",H),delete W[G.id];let q=K.get(G);if(q)Q.remove(q),K.delete(G);if(Z.releaseStatesOfGeometry(G),G.isInstancedBufferGeometry===!0)delete G._maxInstanceCount;$.memory.geometries--}function Y(E,G){if(W[G.id]===!0)return G;return G.addEventListener("dispose",H),W[G.id]=!0,$.memory.geometries++,G}function X(E){let G=E.attributes;for(let q in G)Q.update(G[q],J.ARRAY_BUFFER)}function U(E){let G=[],q=E.index,R=E.attributes.position,V=0;if(R===void 0)return;if(q!==null){let _=q.array;V=q.version;for(let k=0,L=_.length;k<L;k+=3){let z=_[k+0],I=_[k+1],A=_[k+2];G.push(z,I,I,A,A,z)}}else{let _=R.array;V=R.version;for(let k=0,L=_.length/3-1;k<L;k+=3){let z=k+0,I=k+1,A=k+2;G.push(z,I,I,A,A,z)}}let O=new(R.count>=65535?jQ:SQ)(G,1);O.version=V;let F=K.get(E);if(F)Q.remove(F);K.set(E,O)}function N(E){let G=K.get(E);if(G){let q=E.index;if(q!==null){if(G.version<q.version)U(E)}}else U(E);return K.get(E)}return{get:Y,update:X,getWireframeAttribute:N}}function xN(J,Q,$){let Z;function W(E){Z=E}let K,H;function Y(E){K=E.type,H=E.bytesPerElement}function X(E,G){J.drawElements(Z,G,K,E*H),$.update(G,Z,1)}function U(E,G,q){if(q===0)return;J.drawElementsInstanced(Z,G,K,E*H,q),$.update(G,Z,q)}function N(E,G,q){if(q===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,G,0,K,E,0,q);let V=0;for(let O=0;O<q;O++)V+=G[O];$.update(V,Z,1)}this.setMode=W,this.setIndex=Y,this.render=X,this.renderInstances=U,this.renderMultiDraw=N}function gN(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(K,H,Y){switch($.calls++,H){case J.TRIANGLES:$.triangles+=Y*(K/3);break;case J.LINES:$.lines+=Y*(K/2);break;case J.LINE_STRIP:$.lines+=Y*(K-1);break;case J.LINE_LOOP:$.lines+=Y*K;break;case J.POINTS:$.points+=Y*K;break;default:l0("WebGLInfo: Unknown draw mode:",H);break}}function W(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:W,update:Z}}function pN(J,Q,$){let Z=new WeakMap,W=new VJ;function K(H,Y,X){let U=H.morphTargetInfluences,N=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,E=N!==void 0?N.length:0,G=Z.get(Y);if(G===void 0||G.count!==E){let P=function(){A.dispose(),Z.delete(Y),Y.removeEventListener("dispose",P)};if(G!==void 0)G.texture.dispose();let q=Y.morphAttributes.position!==void 0,R=Y.morphAttributes.normal!==void 0,V=Y.morphAttributes.color!==void 0,O=Y.morphAttributes.position||[],F=Y.morphAttributes.normal||[],_=Y.morphAttributes.color||[],k=0;if(q===!0)k=1;if(R===!0)k=2;if(V===!0)k=3;let L=Y.attributes.position.count*k,z=1;if(L>Q.maxTextureSize)z=Math.ceil(L/Q.maxTextureSize),L=Q.maxTextureSize;let I=new Float32Array(L*z*4*E),A=new AQ(I,L,z,E);A.type=W8,A.needsUpdate=!0;let M=k*4;for(let p=0;p<E;p++){let y=O[p],b=F[p],o=_[p],T=L*z*4*p;for(let d=0;d<y.count;d++){let r=d*M;if(q===!0)W.fromBufferAttribute(y,d),I[T+r+0]=W.x,I[T+r+1]=W.y,I[T+r+2]=W.z,I[T+r+3]=0;if(R===!0)W.fromBufferAttribute(b,d),I[T+r+4]=W.x,I[T+r+5]=W.y,I[T+r+6]=W.z,I[T+r+7]=0;if(V===!0)W.fromBufferAttribute(o,d),I[T+r+8]=W.x,I[T+r+9]=W.y,I[T+r+10]=W.z,I[T+r+11]=o.itemSize===4?W.w:1}}G={count:E,texture:A,size:new W0(L,z)},Z.set(Y,G),Y.addEventListener("dispose",P)}if(H.isInstancedMesh===!0&&H.morphTexture!==null)X.getUniforms().setValue(J,"morphTexture",H.morphTexture,$);else{let q=0;for(let V=0;V<U.length;V++)q+=U[V];let R=Y.morphTargetsRelative?1:1-q;X.getUniforms().setValue(J,"morphTargetBaseInfluence",R),X.getUniforms().setValue(J,"morphTargetInfluences",U)}X.getUniforms().setValue(J,"morphTargetsTexture",G.texture,$),X.getUniforms().setValue(J,"morphTargetsTextureSize",G.size)}return{update:K}}function lN(J,Q,$,Z,W){let K=new WeakMap;function H(U){let N=W.render.frame,E=U.geometry,G=Q.get(U,E);if(K.get(G)!==N)Q.update(G),K.set(G,N);if(U.isInstancedMesh){if(U.hasEventListener("dispose",X)===!1)U.addEventListener("dispose",X);if(K.get(U)!==N){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);K.set(U,N)}}if(U.isSkinnedMesh){let q=U.skeleton;if(K.get(q)!==N)q.update(),K.set(q,N)}return G}function Y(){K=new WeakMap}function X(U){let N=U.target;if(N.removeEventListener("dispose",X),Z.releaseStatesOfObject(N),$.remove(N.instanceMatrix),N.instanceColor!==null)$.remove(N.instanceColor)}return{update:H,dispose:Y}}var mN={[d$]:"LINEAR_TONE_MAPPING",[u$]:"REINHARD_TONE_MAPPING",[c$]:"CINEON_TONE_MAPPING",[Y6]:"ACES_FILMIC_TONE_MAPPING",[s$]:"AGX_TONE_MAPPING",[i$]:"NEUTRAL_TONE_MAPPING",[n$]:"CUSTOM_TONE_MAPPING"};function dN(J,Q,$,Z,W,K){let H=new q9(Q,$,{type:J,depthBuffer:W,stencilBuffer:K,samples:Z?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),Y=null,X=null,U=new SJ;U.setAttribute("position",new HJ([-1,3,0,-1,-1,0,3,-1,0],3)),U.setAttribute("uv",new HJ([0,2,0,0,2,0],2));let N=new oZ({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),E=new c0(U,N),G=new t8(-1,1,1,-1,0,1),q=null,R=null,V=!1,O,F=null,_=[],k=!1;this.setSize=function(L,z){if(H.setSize(L,z),Y!==null)Y.setSize(L,z);if(X!==null)X.setSize(L,z);for(let I=0;I<_.length;I++){let A=_[I];if(A.setSize)A.setSize(L,z)}},this.setEffects=function(L){_=L,k=_.length>0&&_[0].isRenderPass===!0;let{width:z,height:I}=H;if(_.length>0&&Y===null)Y=new q9(z,I,{type:c9,depthBuffer:!1,stencilBuffer:!1}),X=new q9(z,I,{type:c9,depthBuffer:!1,stencilBuffer:!1});for(let A=0;A<_.length;A++){let M=_[A];if(M.setSize)M.setSize(z,I)}},this.begin=function(L,z){if(V)return!1;if(L.toneMapping===y9&&_.length===0)return!1;if(F=z,z!==null){let{width:I,height:A}=z;if(H.width!==I||H.height!==A)this.setSize(I,A)}if(k===!1)L.setRenderTarget(H);return O=L.toneMapping,L.toneMapping=y9,!0},this.hasRenderPass=function(){return k},this.end=function(L,z){L.toneMapping=O,V=!0;let I=H,A=Y;for(let M=0;M<_.length;M++){let P=_[M];if(P.enabled===!1)continue;if(P.render(L,A,I,z),P.needsSwap!==!1)I=A,A=A===Y?X:Y}if(q!==L.outputColorSpace||R!==L.toneMapping){if(q=L.outputColorSpace,R=L.toneMapping,N.defines={},r0.getTransfer(q)===zJ)N.defines.SRGB_TRANSFER="";let M=mN[R];if(M)N.defines[M]="";N.needsUpdate=!0}N.uniforms.tDiffuse.value=I.texture,L.setRenderTarget(F),L.render(E,G),F=null,V=!1},this.isCompositing=function(){return V},this.dispose=function(){if(H.dispose(),Y!==null)Y.dispose();if(X!==null)X.dispose();U.dispose(),N.dispose()}}var NY=new hJ,MW=new i8(1,1),EY=new AQ,qY=new pZ,FY=new bQ,nH=[],sH=[],iH=new Float32Array(16),oH=new Float32Array(9),aH=new Float32Array(4);function p7(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let W=Q*$,K=nH[W];if(K===void 0)K=new Float32Array(W),nH[W]=K;if(Q!==0){Z.toArray(K,0);for(let H=1,Y=0;H!==Q;++H)Y+=$,J[H].toArray(K,Y)}return K}function dJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function uJ(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function Q$(J,Q){let $=sH[Q];if($===void 0)$=new Int32Array(Q),sH[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function uN(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function cN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(dJ($,Q))return;J.uniform2fv(this.addr,Q),uJ($,Q)}}function nN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(dJ($,Q))return;J.uniform3fv(this.addr,Q),uJ($,Q)}}function sN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(dJ($,Q))return;J.uniform4fv(this.addr,Q),uJ($,Q)}}function iN(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(dJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),uJ($,Q)}else{if(dJ($,Z))return;aH.set(Z),J.uniformMatrix2fv(this.addr,!1,aH),uJ($,Z)}}function oN(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(dJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),uJ($,Q)}else{if(dJ($,Z))return;oH.set(Z),J.uniformMatrix3fv(this.addr,!1,oH),uJ($,Z)}}function aN(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(dJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),uJ($,Q)}else{if(dJ($,Z))return;iH.set(Z),J.uniformMatrix4fv(this.addr,!1,iH),uJ($,Z)}}function rN(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function tN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(dJ($,Q))return;J.uniform2iv(this.addr,Q),uJ($,Q)}}function eN(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(dJ($,Q))return;J.uniform3iv(this.addr,Q),uJ($,Q)}}function JE(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(dJ($,Q))return;J.uniform4iv(this.addr,Q),uJ($,Q)}}function QE(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function $E(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(dJ($,Q))return;J.uniform2uiv(this.addr,Q),uJ($,Q)}}function ZE(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(dJ($,Q))return;J.uniform3uiv(this.addr,Q),uJ($,Q)}}function WE(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(dJ($,Q))return;J.uniform4uiv(this.addr,Q),uJ($,Q)}}function KE(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;let K;if(this.type===J.SAMPLER_2D_SHADOW)MW.compareFunction=$.isReversedDepthBuffer()?IQ:_Q,K=MW;else K=NY;$.setTexture2D(Q||K,W)}function HE(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture3D(Q||qY,W)}function YE(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTextureCube(Q||FY,W)}function XE(J,Q,$){let Z=this.cache,W=$.allocateTextureUnit();if(Z[0]!==W)J.uniform1i(this.addr,W),Z[0]=W;$.setTexture2DArray(Q||EY,W)}function UE(J){switch(J){case 5126:return uN;case 35664:return cN;case 35665:return nN;case 35666:return sN;case 35674:return iN;case 35675:return oN;case 35676:return aN;case 5124:case 35670:return rN;case 35667:case 35671:return tN;case 35668:case 35672:return eN;case 35669:case 35673:return JE;case 5125:return QE;case 36294:return $E;case 36295:return ZE;case 36296:return WE;case 35678:case 36198:case 36298:case 36306:case 35682:return KE;case 35679:case 36299:case 36307:return HE;case 35680:case 36300:case 36308:case 36293:return YE;case 36289:case 36303:case 36311:case 36292:return XE}}function GE(J,Q){J.uniform1fv(this.addr,Q)}function NE(J,Q){let $=p7(Q,this.size,2);J.uniform2fv(this.addr,$)}function EE(J,Q){let $=p7(Q,this.size,3);J.uniform3fv(this.addr,$)}function qE(J,Q){let $=p7(Q,this.size,4);J.uniform4fv(this.addr,$)}function FE(J,Q){let $=p7(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function OE(J,Q){let $=p7(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function RE(J,Q){let $=p7(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function LE(J,Q){J.uniform1iv(this.addr,Q)}function VE(J,Q){J.uniform2iv(this.addr,Q)}function ME(J,Q){J.uniform3iv(this.addr,Q)}function DE(J,Q){J.uniform4iv(this.addr,Q)}function kE(J,Q){J.uniform1uiv(this.addr,Q)}function BE(J,Q){J.uniform2uiv(this.addr,Q)}function zE(J,Q){J.uniform3uiv(this.addr,Q)}function CE(J,Q){J.uniform4uiv(this.addr,Q)}function PE(J,Q,$){let Z=this.cache,W=Q.length,K=Q$($,W);if(!dJ(Z,K))J.uniform1iv(this.addr,K),uJ(Z,K);let H;if(this.type===J.SAMPLER_2D_SHADOW)H=MW;else H=NY;for(let Y=0;Y!==W;++Y)$.setTexture2D(Q[Y]||H,K[Y])}function _E(J,Q,$){let Z=this.cache,W=Q.length,K=Q$($,W);if(!dJ(Z,K))J.uniform1iv(this.addr,K),uJ(Z,K);for(let H=0;H!==W;++H)$.setTexture3D(Q[H]||qY,K[H])}function IE(J,Q,$){let Z=this.cache,W=Q.length,K=Q$($,W);if(!dJ(Z,K))J.uniform1iv(this.addr,K),uJ(Z,K);for(let H=0;H!==W;++H)$.setTextureCube(Q[H]||FY,K[H])}function AE(J,Q,$){let Z=this.cache,W=Q.length,K=Q$($,W);if(!dJ(Z,K))J.uniform1iv(this.addr,K),uJ(Z,K);for(let H=0;H!==W;++H)$.setTexture2DArray(Q[H]||EY,K[H])}function wE(J){switch(J){case 5126:return GE;case 35664:return NE;case 35665:return EE;case 35666:return qE;case 35674:return FE;case 35675:return OE;case 35676:return RE;case 5124:case 35670:return LE;case 35667:case 35671:return VE;case 35668:case 35672:return ME;case 35669:case 35673:return DE;case 5125:return kE;case 36294:return BE;case 36295:return zE;case 36296:return CE;case 35678:case 36198:case 36298:case 36306:case 35682:return PE;case 35679:case 36299:case 36307:return _E;case 35680:case 36300:case 36308:case 36293:return IE;case 36289:case 36303:case 36311:case 36292:return AE}}class OY{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=UE(Q.type)}}class RY{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=wE(Q.type)}}class LY{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let W=0,K=Z.length;W!==K;++W){let H=Z[W];H.setValue(J,Q[H.id],$)}}}var RW=/(\w+)(\])?(\[|\.)?/g;function rH(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function TE(J,Q,$){let Z=J.name,W=Z.length;RW.lastIndex=0;while(!0){let K=RW.exec(Z),H=RW.lastIndex,Y=K[1],X=K[2]==="]",U=K[3];if(X)Y=Y|0;if(U===void 0||U==="["&&H+2===W){rH($,U===void 0?new OY(Y,J,Q):new RY(Y,J,Q));break}else{let E=$.map[Y];if(E===void 0)E=new LY(Y),rH($,E);$=E}}}class v6{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let K=0;K<$;++K){let H=J.getActiveUniform(Q,K),Y=J.getUniformLocation(Q,H.name);TE(H,Y,this)}let Z=[],W=[];for(let K of this.seq)if(K.type===J.SAMPLER_2D_SHADOW||K.type===J.SAMPLER_CUBE_SHADOW||K.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(K);else W.push(K);if(Z.length>0)this.seq=Z.concat(W)}setValue(J,Q,$,Z){let W=this.map[Q];if(W!==void 0)W.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let W=0,K=Q.length;W!==K;++W){let H=Q[W],Y=$[H.id];if(Y.needsUpdate!==!1)H.setValue(J,Y.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,W=J.length;Z!==W;++Z){let K=J[Z];if(K.id in Q)$.push(K)}return $}}function tH(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var SE=37297,jE=0;function yE(J,Q){let $=J.split(`
`),Z=[],W=Math.max(Q-6,0),K=Math.min(Q+6,$.length);for(let H=W;H<K;H++){let Y=H+1;Z.push(`${Y===Q?">":" "} ${Y}: ${$[H]}`)}return Z.join(`
`)}var eH=new u0;function vE(J){r0._getMatrix(eH,r0.workingColorSpace,J);let Q=`mat3( ${eH.elements.map(($)=>$.toFixed(4))} )`;switch(r0.getTransfer(J)){case vZ:return[Q,"LinearTransferOETF"];case zJ:return[Q,"sRGBTransferOETF"];default:return A0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function JY(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),K=(J.getShaderInfoLog(Q)||"").trim();if(Z&&K==="")return"";let H=/ERROR: 0:(\d+)/.exec(K);if(H){let Y=parseInt(H[1]);return $.toUpperCase()+`

`+K+`

`+yE(J.getShaderSource(Q),Y)}else return K}function fE(J,Q){let $=vE(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var hE={[d$]:"Linear",[u$]:"Reinhard",[c$]:"Cineon",[Y6]:"ACESFilmic",[s$]:"AgX",[i$]:"Neutral",[n$]:"Custom"};function bE(J,Q){let $=hE[Q];if($===void 0)return A0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var eQ=new w;function xE(){r0.getLuminanceCoefficients(eQ);let J=eQ.x.toFixed(4),Q=eQ.y.toFixed(4),$=eQ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function gE(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(y6).join(`
`)}function pE(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function lE(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let W=0;W<Z;W++){let K=J.getActiveAttrib(Q,W),H=K.name,Y=1;if(K.type===J.FLOAT_MAT2)Y=2;if(K.type===J.FLOAT_MAT3)Y=3;if(K.type===J.FLOAT_MAT4)Y=4;$[H]={type:K.type,location:J.getAttribLocation(Q,H),locationSize:Y}}return $}function y6(J){return J!==""}function QY(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function $Y(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var mE=/^[ \t]*#include +<([\w\d./]+)>/gm;function DW(J){return J.replace(mE,uE)}var dE=new Map;function uE(J,Q){let $=o0[Q];if($===void 0){let Z=dE.get(Q);if(Z!==void 0)$=o0[Z],A0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return DW($)}var cE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ZY(J){return J.replace(cE,nE)}function nE(J,Q,$,Z){let W="";for(let K=parseInt(Q);K<parseInt($);K++)W+=Z.replace(/\[\s*i\s*\]/g,"[ "+K+" ]").replace(/UNROLLED_LOOP_INDEX/g,K);return W}function WY(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var sE={[p8]:"SHADOWMAP_TYPE_PCF",[C7]:"SHADOWMAP_TYPE_VSM"};function iE(J){return sE[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var oE={[_7]:"ENVMAP_TYPE_CUBE",[l8]:"ENVMAP_TYPE_CUBE",[X6]:"ENVMAP_TYPE_CUBE_UV"};function aE(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return oE[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var rE={[l8]:"ENVMAP_MODE_REFRACTION"};function tE(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return rE[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var eE={[YH]:"ENVMAP_BLENDING_MULTIPLY",[XH]:"ENVMAP_BLENDING_MIX",[UH]:"ENVMAP_BLENDING_ADD"};function Jq(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return eE[J.combine]||"ENVMAP_BLENDING_NONE"}function Qq(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function $q(J,Q,$,Z){let W=J.getContext(),K=$.defines,H=$.vertexShader,Y=$.fragmentShader,X=iE($),U=aE($),N=tE($),E=Jq($),G=Qq($),q=gE($),R=pE(K),V=W.createProgram(),O,F,_=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(O=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R].filter(y6).join(`
`),O.length>0)O+=`
`;if(F=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R].filter(y6).join(`
`),F.length>0)F+=`
`}else O=[WY($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+N:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(y6).join(`
`),F=[WY($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+N:"",$.envMap?"#define "+E:"",G?"#define CUBEUV_TEXEL_WIDTH "+G.texelWidth:"",G?"#define CUBEUV_TEXEL_HEIGHT "+G.texelHeight:"",G?"#define CUBEUV_MAX_MIP "+G.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.retroreflection?"#define USE_RETROREFLECTION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==y9?"#define TONE_MAPPING":"",$.toneMapping!==y9?o0.tonemapping_pars_fragment:"",$.toneMapping!==y9?bE("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",o0.colorspace_pars_fragment,fE("linearToOutputTexel",$.outputColorSpace),xE(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(y6).join(`
`);if(H=DW(H),H=QY(H,$),H=$Y(H,$),Y=DW(Y),Y=QY(Y,$),Y=$Y(Y,$),H=ZY(H),Y=ZY(Y),$.isRawShaderMaterial!==!0)_=`#version 300 es
`,O=[q,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+O,F=["#define varying in",$.glslVersion===fZ?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===fZ?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+F;let k=_+O+H,L=_+F+Y,z=tH(W,W.VERTEX_SHADER,k),I=tH(W,W.FRAGMENT_SHADER,L);if(W.attachShader(V,z),W.attachShader(V,I),$.index0AttributeName!==void 0)W.bindAttribLocation(V,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)W.bindAttribLocation(V,0,"position");W.linkProgram(V);function A(y){if(J.debug.checkShaderErrors){let b=W.getProgramInfoLog(V)||"",o=W.getShaderInfoLog(z)||"",T=W.getShaderInfoLog(I)||"",d=b.trim(),r=o.trim(),l=T.trim(),H0=!0,n=!0;if(W.getProgramParameter(V,W.LINK_STATUS)===!1)if(H0=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(W,V,z,I);else{let t=JY(W,z,"vertex"),$0=JY(W,I,"fragment");l0("WebGLProgram: Shader Error "+W.getError()+" - VALIDATE_STATUS "+W.getProgramParameter(V,W.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+d+`
`+t+`
`+$0)}else if(d!=="")A0("WebGLProgram: Program Info Log:",d);else if(r===""||l==="")n=!1;if(n)y.diagnostics={runnable:H0,programLog:d,vertexShader:{log:r,prefix:O},fragmentShader:{log:l,prefix:F}}}W.deleteShader(z),W.deleteShader(I),M=new v6(W,V),P=lE(W,V)}let M;this.getUniforms=function(){if(M===void 0)A(this);return M};let P;this.getAttributes=function(){if(P===void 0)A(this);return P};let p=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(p===!1)p=W.getProgramParameter(V,SE);return p},this.destroy=function(){Z.releaseStatesOfProgram(this),W.deleteProgram(V),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=jE++,this.cacheKey=Q,this.usedTimes=1,this.program=V,this.vertexShader=z,this.fragmentShader=I,this}var Zq=0;class VY{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let Z=this._getShaderCacheForMaterial(J);if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;if(Z.has($)===!1)Z.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new MY(J),Q.set(J,$);return $}}class MY{constructor(J){this.id=Zq++,this.code=J,this.usedTimes=0}}function Wq(J){return J===c8||J===zQ||J===CQ}function Kq(J,Q,$,Z,W,K){let H=new wQ,Y=new VY,X=new Set,U=[],N=new Map,E=Z.logarithmicDepthBuffer,G=Z.precision,q={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(M){if(X.add(M),M===0)return"uv";return`uv${M}`}function V(M,P,p,y,b,o){let T=y.fog,d=b.geometry,r=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?y.environment:null,l=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,H0=Q.get(M.envMap||r,l),n=!!H0&&H0.mapping===X6?H0.image.height:null,t=q[M.type];if(M.precision!==null){if(G=Z.getMaxPrecision(M.precision),G!==M.precision)A0("WebGLProgram.getParameters:",M.precision,"not supported, using",G,"instead.")}let $0=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,w0=$0!==void 0?$0.length:0,f0=0;if(d.morphAttributes.position!==void 0)f0=1;if(d.morphAttributes.normal!==void 0)f0=2;if(d.morphAttributes.color!==void 0)f0=3;let qJ,n0,s,Z0;if(t){let OJ=o9[t];qJ=OJ.vertexShader,n0=OJ.fragmentShader}else{qJ=M.vertexShader,n0=M.fragmentShader;let OJ=Y.getVertexShaderStage(M),YJ=Y.getFragmentShaderStage(M);Y.update(M,OJ,YJ),s=OJ.id,Z0=YJ.id}let X0=J.getRenderTarget(),y0=J.state.buffers.depth.getReversed(),b0=b.isInstancedMesh===!0,j0=b.isBatchedMesh===!0,vJ=!!M.map,a0=!!M.matcap,JJ=!!H0,UJ=!!M.aoMap,$J=!!M.lightMap,pJ=!!M.bumpMap&&M.wireframe===!1,FJ=!!M.normalMap,aJ=!!M.displacementMap,CJ=!!M.emissiveMap,PJ=!!M.metalnessMap,j=!!M.roughnessMap,IJ=M.anisotropy>0,GJ=M.clearcoat>0,AJ=M.dispersion>0,C=M.retroreflectivity>0,D=M.iridescence>0,S=M.sheen>0,m=M.transmission>0,J0=IJ&&!!M.anisotropyMap,G0=GJ&&!!M.clearcoatMap,R0=GJ&&!!M.clearcoatNormalMap,c=GJ&&!!M.clearcoatRoughnessMap,a=D&&!!M.iridescenceMap,M0=D&&!!M.iridescenceThicknessMap,I0=S&&!!M.sheenColorMap,U0=S&&!!M.sheenRoughnessMap,K0=!!M.specularMap,v0=!!M.specularColorMap,h0=!!M.specularIntensityMap,WJ=m&&!!M.transmissionMap,v=m&&!!M.thicknessMap,q0=!!M.gradientMap,i=!!M.alphaMap,F0=M.alphaTest>0,B0=!!M.alphaHash,e=!!M.extensions,O0=y9;if(M.toneMapped){if(X0===null||X0.isXRRenderTarget===!0)O0=J.toneMapping}let m0={shaderID:t,shaderType:M.type,shaderName:M.name,vertexShader:qJ,fragmentShader:n0,defines:M.defines,customVertexShaderID:s,customFragmentShaderID:Z0,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:G,batching:j0,batchingColor:j0&&b._colorsTexture!==null,instancing:b0,instancingColor:b0&&b.instanceColor!==null,instancingMorph:b0&&b.morphTexture!==null,outputColorSpace:X0===null?J.outputColorSpace:X0.isXRRenderTarget===!0?X0.texture.colorSpace:r0.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:vJ,matcap:a0,envMap:JJ,envMapMode:JJ&&H0.mapping,envMapCubeUVHeight:n,aoMap:UJ,lightMap:$J,bumpMap:pJ,normalMap:FJ,displacementMap:aJ,emissiveMap:CJ,normalMapObjectSpace:FJ&&M.normalMapType===LH,normalMapTangentSpace:FJ&&M.normalMapType===yZ,packedNormalMap:FJ&&M.normalMapType===yZ&&Wq(M.normalMap.format),metalnessMap:PJ,roughnessMap:j,anisotropy:IJ,anisotropyMap:J0,clearcoat:GJ,clearcoatMap:G0,clearcoatNormalMap:R0,clearcoatRoughnessMap:c,dispersion:AJ,retroreflection:C,iridescence:D,iridescenceMap:a,iridescenceThicknessMap:M0,sheen:S,sheenColorMap:I0,sheenRoughnessMap:U0,specularMap:K0,specularColorMap:v0,specularIntensityMap:h0,transmission:m,transmissionMap:WJ,thicknessMap:v,gradientMap:q0,opaque:M.transparent===!1&&M.blending===H6&&M.alphaToCoverage===!1,alphaMap:i,alphaTest:F0,alphaHash:B0,combine:M.combine,mapUv:vJ&&R(M.map.channel),aoMapUv:UJ&&R(M.aoMap.channel),lightMapUv:$J&&R(M.lightMap.channel),bumpMapUv:pJ&&R(M.bumpMap.channel),normalMapUv:FJ&&R(M.normalMap.channel),displacementMapUv:aJ&&R(M.displacementMap.channel),emissiveMapUv:CJ&&R(M.emissiveMap.channel),metalnessMapUv:PJ&&R(M.metalnessMap.channel),roughnessMapUv:j&&R(M.roughnessMap.channel),anisotropyMapUv:J0&&R(M.anisotropyMap.channel),clearcoatMapUv:G0&&R(M.clearcoatMap.channel),clearcoatNormalMapUv:R0&&R(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:c&&R(M.clearcoatRoughnessMap.channel),iridescenceMapUv:a&&R(M.iridescenceMap.channel),iridescenceThicknessMapUv:M0&&R(M.iridescenceThicknessMap.channel),sheenColorMapUv:I0&&R(M.sheenColorMap.channel),sheenRoughnessMapUv:U0&&R(M.sheenRoughnessMap.channel),specularMapUv:K0&&R(M.specularMap.channel),specularColorMapUv:v0&&R(M.specularColorMap.channel),specularIntensityMapUv:h0&&R(M.specularIntensityMap.channel),transmissionMapUv:WJ&&R(M.transmissionMap.channel),thicknessMapUv:v&&R(M.thicknessMap.channel),alphaMapUv:i&&R(M.alphaMap.channel),vertexTangents:!!d.attributes.tangent&&(FJ||IJ),vertexNormals:!!d.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!d.attributes.color&&d.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!d.attributes.uv&&(vJ||i),fog:!!T,useFog:M.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||d.attributes.normal===void 0&&FJ===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:y0,skinning:b.isSkinnedMesh===!0,hasPositionAttribute:d.attributes.position!==void 0,morphTargets:d.morphAttributes.position!==void 0,morphNormals:d.morphAttributes.normal!==void 0,morphColors:d.morphAttributes.color!==void 0,morphTargetsCount:w0,morphTextureStride:f0,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:o.length,numClippingPlanes:K.numPlanes,numClipIntersection:K.numIntersection,dithering:M.dithering,shadowMapEnabled:J.shadowMap.enabled&&p.length>0,shadowMapType:J.shadowMap.type,toneMapping:O0,decodeVideoTexture:vJ&&M.map.isVideoTexture===!0&&r0.getTransfer(M.map.colorSpace)===zJ,decodeVideoTextureEmissive:CJ&&M.emissiveMap.isVideoTexture===!0&&r0.getTransfer(M.emissiveMap.colorSpace)===zJ,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===W9,flipSided:M.side===H9,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:e&&M.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(e&&M.extensions.multiDraw===!0||j0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return m0.vertexUv1s=X.has(1),m0.vertexUv2s=X.has(2),m0.vertexUv3s=X.has(3),X.clear(),m0}function O(M){let P=[];if(M.shaderID)P.push(M.shaderID);else P.push(M.customVertexShaderID),P.push(M.customFragmentShaderID);if(M.defines!==void 0)for(let p in M.defines)P.push(p),P.push(M.defines[p]);if(M.isRawShaderMaterial===!1)F(P,M),_(P,M),P.push(J.outputColorSpace);return P.push(M.customProgramCacheKey),P.join()}function F(M,P){M.push(P.precision),M.push(P.outputColorSpace),M.push(P.envMapMode),M.push(P.envMapCubeUVHeight),M.push(P.mapUv),M.push(P.alphaMapUv),M.push(P.lightMapUv),M.push(P.aoMapUv),M.push(P.bumpMapUv),M.push(P.normalMapUv),M.push(P.displacementMapUv),M.push(P.emissiveMapUv),M.push(P.metalnessMapUv),M.push(P.roughnessMapUv),M.push(P.anisotropyMapUv),M.push(P.clearcoatMapUv),M.push(P.clearcoatNormalMapUv),M.push(P.clearcoatRoughnessMapUv),M.push(P.iridescenceMapUv),M.push(P.iridescenceThicknessMapUv),M.push(P.sheenColorMapUv),M.push(P.sheenRoughnessMapUv),M.push(P.specularMapUv),M.push(P.specularColorMapUv),M.push(P.specularIntensityMapUv),M.push(P.transmissionMapUv),M.push(P.thicknessMapUv),M.push(P.combine),M.push(P.fogExp2),M.push(P.sizeAttenuation),M.push(P.morphTargetsCount),M.push(P.morphAttributeCount),M.push(P.numSunLights),M.push(P.numDirLights),M.push(P.numPointLights),M.push(P.numSpotLights),M.push(P.numSpotLightMaps),M.push(P.numHemiLights),M.push(P.numRectAreaLights),M.push(P.numSunLightShadows),M.push(P.numDirLightShadows),M.push(P.numPointLightShadows),M.push(P.numSpotLightShadows),M.push(P.numSpotLightShadowsWithMaps),M.push(P.numLightProbes),M.push(P.shadowMapType),M.push(P.toneMapping),M.push(P.numClippingPlanes),M.push(P.numClipIntersection),M.push(P.depthPacking)}function _(M,P){if(H.disableAll(),P.instancing)H.enable(0);if(P.instancingColor)H.enable(1);if(P.instancingMorph)H.enable(2);if(P.matcap)H.enable(3);if(P.envMap)H.enable(4);if(P.normalMapObjectSpace)H.enable(5);if(P.normalMapTangentSpace)H.enable(6);if(P.clearcoat)H.enable(7);if(P.iridescence)H.enable(8);if(P.alphaTest)H.enable(9);if(P.vertexColors)H.enable(10);if(P.vertexAlphas)H.enable(11);if(P.vertexUv1s)H.enable(12);if(P.vertexUv2s)H.enable(13);if(P.vertexUv3s)H.enable(14);if(P.vertexTangents)H.enable(15);if(P.anisotropy)H.enable(16);if(P.alphaHash)H.enable(17);if(P.batching)H.enable(18);if(P.dispersion)H.enable(19);if(P.retroreflection)H.enable(24);if(P.batchingColor)H.enable(20);if(P.gradientMap)H.enable(21);if(P.packedNormalMap)H.enable(22);if(P.vertexNormals)H.enable(23);if(M.push(H.mask),H.disableAll(),P.fog)H.enable(0);if(P.useFog)H.enable(1);if(P.flatShading)H.enable(2);if(P.logarithmicDepthBuffer)H.enable(3);if(P.reversedDepthBuffer)H.enable(4);if(P.skinning)H.enable(5);if(P.morphTargets)H.enable(6);if(P.morphNormals)H.enable(7);if(P.morphColors)H.enable(8);if(P.premultipliedAlpha)H.enable(9);if(P.shadowMapEnabled)H.enable(10);if(P.doubleSided)H.enable(11);if(P.flipSided)H.enable(12);if(P.useDepthPacking)H.enable(13);if(P.dithering)H.enable(14);if(P.transmission)H.enable(15);if(P.sheen)H.enable(16);if(P.opaque)H.enable(17);if(P.pointsUvs)H.enable(18);if(P.decodeVideoTexture)H.enable(19);if(P.decodeVideoTextureEmissive)H.enable(20);if(P.alphaToCoverage)H.enable(21);if(P.numLightProbeGrids>0)H.enable(22);if(P.hasPositionAttribute)H.enable(23);M.push(H.mask)}function k(M){let P=q[M.type],p;if(P){let y=o9[P];p=vH.clone(y.uniforms)}else p=M.uniforms;return p}function L(M,P){let p=N.get(P);if(p!==void 0)++p.usedTimes;else p=new $q(J,P,M,W),U.push(p),N.set(P,p);return p}function z(M){if(--M.usedTimes===0){let P=U.indexOf(M);U[P]=U[U.length-1],U.pop(),N.delete(M.cacheKey),M.destroy()}}function I(M){Y.remove(M)}function A(){Y.dispose()}return{getParameters:V,getProgramCacheKey:O,getUniforms:k,acquireProgram:L,releaseProgram:z,releaseShaderCache:I,programs:U,dispose:A}}function Hq(){let J=new WeakMap;function Q(H){return J.has(H)}function $(H){let Y=J.get(H);if(Y===void 0)Y={},J.set(H,Y);return Y}function Z(H){J.delete(H)}function W(H,Y,X){J.get(H)[Y]=X}function K(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:W,dispose:K}}function Yq(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function KY(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function HY(){let J=[],Q=0,$=[],Z=[],W=[];function K(){Q=0,$.length=0,Z.length=0,W.length=0}function H(G){let q=0;if(G.isInstancedMesh)q+=2;if(G.isSkinnedMesh)q+=1;return q}function Y(G,q,R,V,O,F){let _=J[Q];if(_===void 0)_={id:G.id,object:G,geometry:q,material:R,materialVariant:H(G),groupOrder:V,renderOrder:G.renderOrder,z:O,group:F},J[Q]=_;else _.id=G.id,_.object=G,_.geometry=q,_.material=R,_.materialVariant=H(G),_.groupOrder=V,_.renderOrder=G.renderOrder,_.z=O,_.group=F;return Q++,_}function X(G,q,R,V,O,F,_){if(_.reversedDepth===!0)O=-O;let k=Y(G,q,R,V,O,F);if(R.transmission>0)Z.push(k);else if(R.transparent===!0)W.push(k);else $.push(k)}function U(G,q,R,V,O,F){let _=Y(G,q,R,V,O,F);if(R.transmission>0)Z.unshift(_);else if(R.transparent===!0)W.unshift(_);else $.unshift(_)}function N(G,q){if($.length>1)$.sort(G||Yq);if(Z.length>1)Z.sort(q||KY);if(W.length>1)W.sort(q||KY)}function E(){for(let G=Q,q=J.length;G<q;G++){let R=J[G];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:$,transmissive:Z,transparent:W,init:K,push:X,unshift:U,finish:E,sort:N}}function Xq(){let J=new WeakMap;function Q(Z,W){let K=J.get(Z),H;if(K===void 0)H=new HY,J.set(Z,[H]);else if(W>=K.length)H=new HY,K.push(H);else H=K[W];return H}function $(){J=new WeakMap}return{get:Q,dispose:$}}function Uq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={direction:new w,color:new g0};break;case"SpotLight":$={position:new w,direction:new w,color:new g0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new w,color:new g0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new w,skyColor:new g0,groundColor:new g0};break;case"RectAreaLight":$={color:new g0,position:new w,halfWidth:new w,halfHeight:new w};break}return J[Q.id]=$,$}}}function Gq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var Nq=0;function Eq(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function qq(J){let Q=new Uq,$=Gq(),Z={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new w);let W=new w,K=new d0,H=new d0;function Y(U){let N=0,E=0,G=0;for(let b=0;b<9;b++)Z.probe[b].set(0,0,0);let q=0,R=0,V=0,O=0,F=0,_=0,k=0,L=0,z=0,I=0,A=0,M=0,P=0,p=0;U.sort(Eq);for(let b=0,o=U.length;b<o;b++){let T=U[b],d=T.color,r=T.intensity,l=T.distance,H0=null;if(T.shadow&&T.shadow.map)if(T.shadow.map.texture.format===c8)H0=T.shadow.map.texture;else H0=T.shadow.map.depthTexture||T.shadow.map.texture;if(T.isAmbientLight)N+=d.r*r,E+=d.g*r,G+=d.b*r;else if(T.isLightProbe){for(let n=0;n<9;n++)Z.probe[n].addScaledVector(T.sh.coefficients[n],r);p++}else if(T.isSunLight){let n=Q.get(T);if(n.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let t=T.shadow,$0=$.get(T);$0.shadowIntensity=t.intensity,$0.shadowBias=t.bias,$0.shadowNormalBias=t.normalBias,$0.shadowRadius=t.radius,$0.shadowMapSize.copy(t.mapSize).multiply(t.getFrameExtents()),Z.sunShadow[R]=$0,Z.sunShadowMap[R]=H0;let w0=t.getViewportCount();for(let f0=0;f0<w0;f0++)Z.sunShadowMatrix[V+f0]=t.getMatrix(f0),Z.sunShadowCascade[V+f0]=t._cascadeData[f0];V+=w0,R++}Z.sun[q]=n,q++}else if(T.isDirectionalLight){let n=Q.get(T);if(n.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let t=T.shadow,$0=$.get(T);$0.shadowIntensity=t.intensity,$0.shadowBias=t.bias,$0.shadowNormalBias=t.normalBias,$0.shadowRadius=t.radius,$0.shadowMapSize=t.mapSize,Z.directionalShadow[O]=$0,Z.directionalShadowMap[O]=H0,Z.directionalShadowMatrix[O]=T.shadow.matrix,z++}Z.directional[O]=n,O++}else if(T.isSpotLight){let n=Q.get(T);n.position.setFromMatrixPosition(T.matrixWorld),n.color.copy(d).multiplyScalar(r),n.distance=l,n.coneCos=Math.cos(T.angle),n.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),n.decay=T.decay,Z.spot[_]=n;let t=T.shadow;if(T.map){if(Z.spotLightMap[M]=T.map,M++,t.updateMatrices(T),T.castShadow)P++}if(Z.spotLightMatrix[_]=t.matrix,T.castShadow){let $0=$.get(T);$0.shadowIntensity=t.intensity,$0.shadowBias=t.bias,$0.shadowNormalBias=t.normalBias,$0.shadowRadius=t.radius,$0.shadowMapSize=t.mapSize,Z.spotShadow[_]=$0,Z.spotShadowMap[_]=H0,A++}_++}else if(T.isRectAreaLight){let n=Q.get(T);n.color.copy(d).multiplyScalar(r),n.halfWidth.set(T.width*0.5,0,0),n.halfHeight.set(0,T.height*0.5,0),Z.rectArea[k]=n,k++}else if(T.isPointLight){let n=Q.get(T);if(n.color.copy(T.color).multiplyScalar(T.intensity),n.distance=T.distance,n.decay=T.decay,T.castShadow){let t=T.shadow,$0=$.get(T);$0.shadowIntensity=t.intensity,$0.shadowBias=t.bias,$0.shadowNormalBias=t.normalBias,$0.shadowRadius=t.radius,$0.shadowMapSize=t.mapSize,$0.shadowCameraNear=t.camera.near,$0.shadowCameraFar=t.camera.far,Z.pointShadow[F]=$0,Z.pointShadowMap[F]=H0,Z.pointShadowMatrix[F]=T.shadow.matrix,I++}Z.point[F]=n,F++}else if(T.isHemisphereLight){let n=Q.get(T);n.skyColor.copy(T.color).multiplyScalar(r),n.groundColor.copy(T.groundColor).multiplyScalar(r),Z.hemi[L]=n,L++}}if(k>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=V0.LTC_FLOAT_1,Z.rectAreaLTC2=V0.LTC_FLOAT_2;else Z.rectAreaLTC1=V0.LTC_HALF_1,Z.rectAreaLTC2=V0.LTC_HALF_2;Z.ambient[0]=N,Z.ambient[1]=E,Z.ambient[2]=G;let y=Z.hash;if(y.sunLength!==q||y.directionalLength!==O||y.pointLength!==F||y.spotLength!==_||y.rectAreaLength!==k||y.hemiLength!==L||y.numSunShadows!==R||y.numDirectionalShadows!==z||y.numPointShadows!==I||y.numSpotShadows!==A||y.numSpotMaps!==M||y.numLightProbes!==p)Z.sun.length=q,Z.directional.length=O,Z.spot.length=_,Z.rectArea.length=k,Z.point.length=F,Z.hemi.length=L,Z.sunShadow.length=R,Z.sunShadowMap.length=R,Z.sunShadowMatrix.length=V,Z.sunShadowCascade.length=V,Z.directionalShadow.length=z,Z.directionalShadowMap.length=z,Z.directionalShadowMatrix.length=z,Z.pointShadow.length=I,Z.pointShadowMap.length=I,Z.pointShadowMatrix.length=I,Z.spotShadow.length=A,Z.spotShadowMap.length=A,Z.spotLightMatrix.length=A+M-P,Z.spotLightMap.length=M,Z.numSpotLightShadowsWithMaps=P,Z.numLightProbes=p,y.sunLength=q,y.directionalLength=O,y.pointLength=F,y.spotLength=_,y.rectAreaLength=k,y.hemiLength=L,y.numSunShadows=R,y.numDirectionalShadows=z,y.numPointShadows=I,y.numSpotShadows=A,y.numSpotMaps=M,y.numLightProbes=p,Z.version=Nq++}function X(U,N){let E=0,G=0,q=0,R=0,V=0,O=0,F=N.matrixWorldInverse;for(let _=0,k=U.length;_<k;_++){let L=U[_];if(L.isSunLight){let z=Z.sun[E];z.direction.setFromMatrixPosition(L.matrixWorld),z.direction.transformDirection(F),E++}else if(L.isDirectionalLight){let z=Z.directional[G];z.direction.setFromMatrixPosition(L.matrixWorld),W.setFromMatrixPosition(L.target.matrixWorld),z.direction.sub(W),z.direction.transformDirection(F),G++}else if(L.isSpotLight){let z=Z.spot[R];z.position.setFromMatrixPosition(L.matrixWorld),z.position.applyMatrix4(F),z.direction.setFromMatrixPosition(L.matrixWorld),W.setFromMatrixPosition(L.target.matrixWorld),z.direction.sub(W),z.direction.transformDirection(F),R++}else if(L.isRectAreaLight){let z=Z.rectArea[V];z.position.setFromMatrixPosition(L.matrixWorld),z.position.applyMatrix4(F),H.identity(),K.copy(L.matrixWorld),K.premultiply(F),H.extractRotation(K),z.halfWidth.set(L.width*0.5,0,0),z.halfHeight.set(0,L.height*0.5,0),z.halfWidth.applyMatrix4(H),z.halfHeight.applyMatrix4(H),V++}else if(L.isPointLight){let z=Z.point[q];z.position.setFromMatrixPosition(L.matrixWorld),z.position.applyMatrix4(F),q++}else if(L.isHemisphereLight){let z=Z.hemi[O];z.direction.setFromMatrixPosition(L.matrixWorld),z.direction.transformDirection(F),O++}}}return{setup:Y,setupView:X,state:Z}}function YY(J){let Q=new qq(J),$=[],Z=[],W=[];function K(G){E.camera=G,$.length=0,Z.length=0,W.length=0}function H(G){$.push(G)}function Y(G){Z.push(G)}function X(G){W.push(G)}function U(){Q.setup($)}function N(G){Q.setupView($,G)}let E={lightsArray:$,shadowsArray:Z,lightProbeGridArray:W,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:K,state:E,setupLights:U,setupLightsView:N,pushLight:H,pushShadow:Y,pushLightProbeGrid:X}}function Fq(J){let Q=new WeakMap;function $(W,K=0){let H=Q.get(W),Y;if(H===void 0)Y=new YY(J),Q.set(W,[Y]);else if(K>=H.length)Y=new YY(J),H.push(Y);else Y=H[K];return Y}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var Oq=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rq=`uniform sampler2D shadow_pass;
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
}`,Lq=[new w(1,0,0),new w(-1,0,0),new w(0,1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1)],Vq=[new w(0,-1,0),new w(0,-1,0),new w(0,0,1),new w(0,0,-1),new w(0,-1,0),new w(0,-1,0)],XY=new d0,j6=new w,LW=new w;function Mq(J,Q,$){let Z=new V6,W=new W0,K=new W0,H=new VJ,Y=new aZ,X=new rZ,U={},N=$.maxTextureSize,E={[k8]:H9,[H9]:k8,[W9]:W9},G=new P9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new W0},radius:{value:4}},vertexShader:Oq,fragmentShader:Rq}),q=G.clone();q.defines.HORIZONTAL_PASS=1;let R=new SJ;R.setAttribute("position",new mJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let V=new c0(R,G),O=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=p8;let F=this.type;this.render=function(I,A,M){if(O.enabled===!1)return;if(O.autoUpdate===!1&&O.needsUpdate===!1)return;if(I.length===0)return;if(this.type===yK)A0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=p8;let P=J.getRenderTarget(),p=J.getActiveCubeFace(),y=J.getActiveMipmapLevel(),b=J.state;if(b.setBlending(d9),b.buffers.depth.getReversed()===!0)b.buffers.color.setClear(0,0,0,0);else b.buffers.color.setClear(1,1,1,1);b.buffers.depth.setTest(!0),b.setScissorTest(!1);let o=F!==this.type;if(o)A.traverse(function(T){if(T.material)if(Array.isArray(T.material))T.material.forEach((d)=>d.needsUpdate=!0);else T.material.needsUpdate=!0});for(let T=0,d=I.length;T<d;T++){let r=I[T],l=r.shadow;if(l===void 0){A0("WebGLShadowMap:",r,"has no shadow.");continue}if(l.autoUpdate===!1&&l.needsUpdate===!1)continue;W.copy(l.mapSize);let H0=l.getFrameExtents();if(W.multiply(H0),K.copy(l.mapSize),W.x>N||W.y>N){if(W.x>N)K.x=Math.floor(N/H0.x),W.x=K.x*H0.x,l.mapSize.x=K.x;if(W.y>N)K.y=Math.floor(N/H0.y),W.y=K.y*H0.y,l.mapSize.y=K.y}let n=J.state.buffers.depth.getReversed();if(l.camera._reversedDepth=n,l.map===null||o===!0){if(l.map!==null){if(l.map.depthTexture!==null)l.map.depthTexture.dispose(),l.map.depthTexture=null;l.map.dispose()}if(this.type===C7){if(r.isPointLight){A0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}l.map=new q9(W.x,W.y,{format:c8,type:c9,minFilter:sJ,magFilter:sJ,generateMipmaps:!1}),l.map.texture.name=r.name+".shadowMap",l.map.depthTexture=new i8(W.x,W.y,W8),l.map.depthTexture.name=r.name+".shadowMapDepth",l.map.depthTexture.format=d8,l.map.depthTexture.compareFunction=null,l.map.depthTexture.minFilter=v9,l.map.depthTexture.magFilter=v9}else{if(r.isPointLight)l.map=new kW(W.x),l.map.depthTexture=new lZ(W.x,z8);else l.map=new q9(W.x,W.y),l.map.depthTexture=new i8(W.x,W.y,z8);if(l.map.depthTexture.name=r.name+".shadowMap",l.map.depthTexture.format=d8,this.type===p8)l.map.depthTexture.compareFunction=n?IQ:_Q,l.map.depthTexture.minFilter=sJ,l.map.depthTexture.magFilter=sJ;else l.map.depthTexture.compareFunction=null,l.map.depthTexture.minFilter=v9,l.map.depthTexture.magFilter=v9}l.camera.updateProjectionMatrix()}if(l.map.isWebGLCubeRenderTarget!==!0&&(l.map.width!==W.x||l.map.height!==W.y))l.map.setSize(W.x,W.y);let t=l.map.isWebGLCubeRenderTarget?6:l.getViewportCount();if(r.isPointLight!==!0)l.updateMatrices(r,M);for(let $0=0;$0<t;$0++){let w0=l.getCamera($0);if(r.isPointLight){let{camera:f0,matrix:qJ}=l,n0=r.distance||f0.far;if(n0!==f0.far)f0.far=n0,f0.updateProjectionMatrix();j6.setFromMatrixPosition(r.matrixWorld),f0.position.copy(j6),LW.copy(f0.position),LW.add(Lq[$0]),f0.up.copy(Vq[$0]),f0.lookAt(LW),f0.updateMatrixWorld(),qJ.makeTranslation(-j6.x,-j6.y,-j6.z),XY.multiplyMatrices(f0.projectionMatrix,f0.matrixWorldInverse),l._frustum.setFromProjectionMatrix(XY,f0.coordinateSystem,f0.reversedDepth)}if(l.map.isWebGLCubeRenderTarget)J.setRenderTarget(l.map,$0),J.clear();else{if($0===0)J.setRenderTarget(l.map),J.clear();let f0=l.getViewport($0);H.set(K.x*f0.x,K.y*f0.y,K.x*f0.z,K.y*f0.w),b.viewport(H)}Z=l.getFrustum($0),L(A,M,w0,r,this.type)}if(l.isPointLightShadow!==!0&&this.type===C7)_(l,M);l.needsUpdate=!1}F=this.type,O.needsUpdate=!1,J.setRenderTarget(P,p,y)};function _(I,A){let M=Q.update(V);if(G.defines.VSM_SAMPLES!==I.blurSamples)G.defines.VSM_SAMPLES=I.blurSamples,q.defines.VSM_SAMPLES=I.blurSamples,G.needsUpdate=!0,q.needsUpdate=!0;if(I.mapPass===null)I.mapPass=new q9(W.x,W.y,{format:c8,type:c9});else if(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)I.mapPass.setSize(I.map.width,I.map.height);G.uniforms.shadow_pass.value=I.map.depthTexture,G.uniforms.resolution.value.set(I.map.width,I.map.height),G.uniforms.radius.value=I.radius,J.setRenderTarget(I.mapPass),J.clear(),J.renderBufferDirect(A,null,M,G,V,null),q.uniforms.shadow_pass.value=I.mapPass.texture,q.uniforms.resolution.value.set(I.map.width,I.map.height),q.uniforms.radius.value=I.radius,J.setRenderTarget(I.map),J.clear(),J.renderBufferDirect(A,null,M,q,V,null)}function k(I,A,M,P){let p=null,y=M.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(y!==void 0)p=y;else if(p=M.isPointLight===!0?X:Y,J.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let b=p.uuid,o=A.uuid,T=U[b];if(T===void 0)T={},U[b]=T;let d=T[o];if(d===void 0)d=p.clone(),T[o]=d,A.addEventListener("dispose",z);p=d}if(p.visible=A.visible,p.wireframe=A.wireframe,P===C7)p.side=A.shadowSide!==null?A.shadowSide:A.side;else p.side=A.shadowSide!==null?A.shadowSide:E[A.side];if(p.alphaMap=A.alphaMap,p.alphaTest=A.alphaToCoverage===!0?0.5:A.alphaTest,p.map=A.map,p.clipShadows=A.clipShadows,p.clippingPlanes=A.clippingPlanes,p.clipIntersection=A.clipIntersection,p.displacementMap=A.displacementMap,p.displacementScale=A.displacementScale,p.displacementBias=A.displacementBias,p.wireframeLinewidth=A.wireframeLinewidth,p.linewidth=A.linewidth,M.isPointLight===!0&&p.isMeshDistanceMaterial===!0){let b=J.properties.get(p);b.light=M}return p}function L(I,A,M,P,p){if(I.visible===!1)return;if(I.layers.test(A.layers)&&(I.isMesh||I.isLine||I.isPoints)){if((I.castShadow||I.receiveShadow&&p===C7)&&(!I.frustumCulled||I.intersectsFrustum(Z))){I.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,I.matrixWorld);let o=Q.update(I),T=I.material;if(Array.isArray(T)){let d=o.groups;for(let r=0,l=d.length;r<l;r++){let H0=d[r],n=T[H0.materialIndex];if(n&&n.visible){let t=k(I,n,P,p);I.onBeforeShadow(J,I,A,M,o,t,H0),J.renderBufferDirect(M,null,o,t,I,H0),I.onAfterShadow(J,I,A,M,o,t,H0)}}}else if(T.visible){let d=k(I,T,P,p);I.onBeforeShadow(J,I,A,M,o,d,null),J.renderBufferDirect(M,null,o,d,I,null),I.onAfterShadow(J,I,A,M,o,d,null)}}}let b=I.children;for(let o=0,T=b.length;o<T;o++)L(b[o],A,M,P,p)}function z(I){I.target.removeEventListener("dispose",z);for(let M in U){let P=U[M],p=I.target.uuid;if(p in P)P[p].dispose(),delete P[p]}}}function Dq(J,Q){function $(){let v=!1,q0=new VJ,i=null,F0=new VJ(0,0,0,0);return{setMask:function(B0){if(i!==B0&&!v)J.colorMask(B0,B0,B0,B0),i=B0},setLocked:function(B0){v=B0},setClear:function(B0,e,O0,m0,OJ){if(OJ===!0)B0*=m0,e*=m0,O0*=m0;if(q0.set(B0,e,O0,m0),F0.equals(q0)===!1)J.clearColor(B0,e,O0,m0),F0.copy(q0)},reset:function(){v=!1,i=null,F0.set(-1,0,0,0)}}}function Z(){let v=!1,q0=!1,i=null,F0=null,B0=null;return{setReversed:function(e){if(q0!==e){let O0=Q.get("EXT_clip_control");if(e)O0.clipControlEXT(O0.LOWER_LEFT_EXT,O0.ZERO_TO_ONE_EXT);else O0.clipControlEXT(O0.LOWER_LEFT_EXT,O0.NEGATIVE_ONE_TO_ONE_EXT);q0=e;let m0=B0;B0=null,this.setClear(m0)}},getReversed:function(){return q0},setTest:function(e){if(e)X0(J.DEPTH_TEST);else y0(J.DEPTH_TEST)},setMask:function(e){if(i!==e&&!v)J.depthMask(e),i=e},setFunc:function(e){if(q0)e=IH[e];if(F0!==e){switch(e){case JH:J.depthFunc(J.NEVER);break;case QH:J.depthFunc(J.ALWAYS);break;case $H:J.depthFunc(J.LESS);break;case m$:J.depthFunc(J.LEQUAL);break;case ZH:J.depthFunc(J.EQUAL);break;case WH:J.depthFunc(J.GEQUAL);break;case KH:J.depthFunc(J.GREATER);break;case HH:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}F0=e}},setLocked:function(e){v=e},setClear:function(e){if(B0!==e){if(B0=e,q0)e=1-e;J.clearDepth(e)}},reset:function(){v=!1,i=null,F0=null,B0=null,q0=!1}}}function W(){let v=!1,q0=null,i=null,F0=null,B0=null,e=null,O0=null,m0=null,OJ=null;return{setTest:function(YJ){if(!v)if(YJ)X0(J.STENCIL_TEST);else y0(J.STENCIL_TEST)},setMask:function(YJ){if(q0!==YJ&&!v)J.stencilMask(YJ),q0=YJ},setFunc:function(YJ,U9,V9){if(i!==YJ||F0!==U9||B0!==V9)J.stencilFunc(YJ,U9,V9),i=YJ,F0=U9,B0=V9},setOp:function(YJ,U9,V9){if(e!==YJ||O0!==U9||m0!==V9)J.stencilOp(YJ,U9,V9),e=YJ,O0=U9,m0=V9},setLocked:function(YJ){v=YJ},setClear:function(YJ){if(OJ!==YJ)J.clearStencil(YJ),OJ=YJ},reset:function(){v=!1,q0=null,i=null,F0=null,B0=null,e=null,O0=null,m0=null,OJ=null}}}let K=new $,H=new Z,Y=new W,X=new WeakMap,U=new WeakMap,N={},E={},G={},q=new WeakMap,R=[],V=null,O=!1,F=null,_=null,k=null,L=null,z=null,I=null,A=null,M=new g0(0,0,0),P=0,p=!1,y=null,b=null,o=null,T=null,d=null,r=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),l=!1,H0=0,n=J.getParameter(J.VERSION);if(n.indexOf("WebGL")!==-1)H0=parseFloat(/^WebGL (\d)/.exec(n)[1]),l=H0>=1;else if(n.indexOf("OpenGL ES")!==-1)H0=parseFloat(/^OpenGL ES (\d)/.exec(n)[1]),l=H0>=2;let t=null,$0={},w0=J.getParameter(J.SCISSOR_BOX),f0=J.getParameter(J.VIEWPORT),qJ=new VJ().fromArray(w0),n0=new VJ().fromArray(f0);function s(v,q0,i,F0){let B0=new Uint8Array(4),e=J.createTexture();J.bindTexture(v,e),J.texParameteri(v,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(v,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let O0=0;O0<i;O0++)if(v===J.TEXTURE_3D||v===J.TEXTURE_2D_ARRAY)J.texImage3D(q0,0,J.RGBA,1,1,F0,0,J.RGBA,J.UNSIGNED_BYTE,B0);else J.texImage2D(q0+O0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,B0);return e}let Z0={};Z0[J.TEXTURE_2D]=s(J.TEXTURE_2D,J.TEXTURE_2D,1),Z0[J.TEXTURE_CUBE_MAP]=s(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z0[J.TEXTURE_2D_ARRAY]=s(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),Z0[J.TEXTURE_3D]=s(J.TEXTURE_3D,J.TEXTURE_3D,1,1),K.setClear(0,0,0,1),H.setClear(1),Y.setClear(0),X0(J.DEPTH_TEST),H.setFunc(m$),pJ(!1),FJ(x$),X0(J.CULL_FACE),UJ(d9);function X0(v){if(N[v]!==!0)J.enable(v),N[v]=!0}function y0(v){if(N[v]!==!1)J.disable(v),N[v]=!1}function b0(v,q0){if(G[v]!==q0){if(J.bindFramebuffer(v,q0),G[v]=q0,v===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=q0;if(v===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=q0;return!0}return!1}function j0(v,q0){let i=R,F0=!1;if(v){if(i=q.get(q0),i===void 0)i=[],q.set(q0,i);let B0=v.textures;if(i.length!==B0.length||i[0]!==J.COLOR_ATTACHMENT0){for(let e=0,O0=B0.length;e<O0;e++)i[e]=J.COLOR_ATTACHMENT0+e;i.length=B0.length,F0=!0}}else if(i[0]!==J.BACK)i[0]=J.BACK,F0=!0;if(F0)J.drawBuffers(i)}function vJ(v){if(V!==v)return J.useProgram(v),V=v,!0;return!1}let a0={[P7]:J.FUNC_ADD,[fK]:J.FUNC_SUBTRACT,[hK]:J.FUNC_REVERSE_SUBTRACT};a0[bK]=J.MIN,a0[xK]=J.MAX;let JJ={[gK]:J.ZERO,[pK]:J.ONE,[lK]:J.SRC_COLOR,[dK]:J.SRC_ALPHA,[oK]:J.SRC_ALPHA_SATURATE,[sK]:J.DST_COLOR,[cK]:J.DST_ALPHA,[mK]:J.ONE_MINUS_SRC_COLOR,[uK]:J.ONE_MINUS_SRC_ALPHA,[iK]:J.ONE_MINUS_DST_COLOR,[nK]:J.ONE_MINUS_DST_ALPHA,[aK]:J.CONSTANT_COLOR,[rK]:J.ONE_MINUS_CONSTANT_COLOR,[tK]:J.CONSTANT_ALPHA,[eK]:J.ONE_MINUS_CONSTANT_ALPHA};function UJ(v,q0,i,F0,B0,e,O0,m0,OJ,YJ){if(v===d9){if(O===!0)y0(J.BLEND),O=!1;return}if(O===!1)X0(J.BLEND),O=!0;if(v!==vK){if(v!==F||YJ!==p){if(_!==P7||z!==P7)J.blendEquation(J.FUNC_ADD),_=P7,z=P7;if(YJ)switch(v){case H6:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case g$:J.blendFunc(J.ONE,J.ONE);break;case p$:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case l$:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:l0("WebGLState: Invalid blending: ",v);break}else switch(v){case H6:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case g$:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case p$:l0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case l$:l0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:l0("WebGLState: Invalid blending: ",v);break}k=null,L=null,I=null,A=null,M.set(0,0,0),P=0,F=v,p=YJ}return}if(B0=B0||q0,e=e||i,O0=O0||F0,q0!==_||B0!==z)J.blendEquationSeparate(a0[q0],a0[B0]),_=q0,z=B0;if(i!==k||F0!==L||e!==I||O0!==A)J.blendFuncSeparate(JJ[i],JJ[F0],JJ[e],JJ[O0]),k=i,L=F0,I=e,A=O0;if(m0.equals(M)===!1||OJ!==P)J.blendColor(m0.r,m0.g,m0.b,OJ),M.copy(m0),P=OJ;F=v,p=!1}function $J(v,q0){v.side===W9?y0(J.CULL_FACE):X0(J.CULL_FACE);let i=v.side===H9;if(q0)i=!i;pJ(i),v.blending===H6&&v.transparent===!1?UJ(d9):UJ(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),H.setFunc(v.depthFunc),H.setTest(v.depthTest),H.setMask(v.depthWrite),K.setMask(v.colorWrite);let F0=v.stencilWrite;if(Y.setTest(F0),F0)Y.setMask(v.stencilWriteMask),Y.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),Y.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass);CJ(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?X0(J.SAMPLE_ALPHA_TO_COVERAGE):y0(J.SAMPLE_ALPHA_TO_COVERAGE)}function pJ(v){if(y!==v){if(v)J.frontFace(J.CW);else J.frontFace(J.CCW);y=v}}function FJ(v){if(v!==SK){if(X0(J.CULL_FACE),v!==b)if(v===x$)J.cullFace(J.BACK);else if(v===jK)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else y0(J.CULL_FACE);b=v}function aJ(v){if(v!==o){if(l)J.lineWidth(v);o=v}}function CJ(v,q0,i){if(v){if(X0(J.POLYGON_OFFSET_FILL),T!==q0||d!==i){if(T=q0,d=i,H.getReversed())q0=-q0;J.polygonOffset(q0,i)}}else y0(J.POLYGON_OFFSET_FILL)}function PJ(v){if(v)X0(J.SCISSOR_TEST);else y0(J.SCISSOR_TEST)}function j(v){if(v===void 0)v=J.TEXTURE0+r-1;if(t!==v)J.activeTexture(v),t=v}function IJ(v,q0,i){if(i===void 0)if(t===null)i=J.TEXTURE0+r-1;else i=t;let F0=$0[i];if(F0===void 0)F0={type:void 0,texture:void 0},$0[i]=F0;if(F0.type!==v||F0.texture!==q0){if(t!==i)J.activeTexture(i),t=i;J.bindTexture(v,q0||Z0[v]),F0.type=v,F0.texture=q0}}function GJ(){let v=$0[t];if(v!==void 0&&v.type!==void 0)J.bindTexture(v.type,null),v.type=void 0,v.texture=void 0}function AJ(){try{J.compressedTexImage2D(...arguments)}catch(v){l0("WebGLState:",v)}}function C(){try{J.compressedTexImage3D(...arguments)}catch(v){l0("WebGLState:",v)}}function D(){try{J.texSubImage2D(...arguments)}catch(v){l0("WebGLState:",v)}}function S(){try{J.texSubImage3D(...arguments)}catch(v){l0("WebGLState:",v)}}function m(){try{J.compressedTexSubImage2D(...arguments)}catch(v){l0("WebGLState:",v)}}function J0(){try{J.compressedTexSubImage3D(...arguments)}catch(v){l0("WebGLState:",v)}}function G0(){try{J.texStorage2D(...arguments)}catch(v){l0("WebGLState:",v)}}function R0(){try{J.texStorage3D(...arguments)}catch(v){l0("WebGLState:",v)}}function c(){try{J.texImage2D(...arguments)}catch(v){l0("WebGLState:",v)}}function a(){try{J.texImage3D(...arguments)}catch(v){l0("WebGLState:",v)}}function M0(v){if(E[v]!==void 0)return E[v];else return J.getParameter(v)}function I0(v,q0){if(E[v]!==q0)J.pixelStorei(v,q0),E[v]=q0}function U0(v){if(qJ.equals(v)===!1)J.scissor(v.x,v.y,v.z,v.w),qJ.copy(v)}function K0(v){if(n0.equals(v)===!1)J.viewport(v.x,v.y,v.z,v.w),n0.copy(v)}function v0(v,q0){let i=U.get(q0);if(i===void 0)i=new WeakMap,U.set(q0,i);let F0=i.get(v);if(F0===void 0)F0=J.getUniformBlockIndex(q0,v.name),i.set(v,F0)}function h0(v,q0){let F0=U.get(q0).get(v);if(X.get(q0)!==F0)J.uniformBlockBinding(q0,F0,v.__bindingPointIndex),X.set(q0,F0)}function WJ(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),H.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),N={},E={},t=null,$0={},G={},q=new WeakMap,R=[],V=null,O=!1,F=null,_=null,k=null,L=null,z=null,I=null,A=null,M=new g0(0,0,0),P=0,p=!1,y=null,b=null,o=null,T=null,d=null,qJ.set(0,0,J.canvas.width,J.canvas.height),n0.set(0,0,J.canvas.width,J.canvas.height),K.reset(),H.reset(),Y.reset()}return{buffers:{color:K,depth:H,stencil:Y},enable:X0,disable:y0,bindFramebuffer:b0,drawBuffers:j0,useProgram:vJ,setBlending:UJ,setMaterial:$J,setFlipSided:pJ,setCullFace:FJ,setLineWidth:aJ,setPolygonOffset:CJ,setScissorTest:PJ,activeTexture:j,bindTexture:IJ,unbindTexture:GJ,compressedTexImage2D:AJ,compressedTexImage3D:C,texImage2D:c,texImage3D:a,pixelStorei:I0,getParameter:M0,updateUBOMapping:v0,uniformBlockBinding:h0,texStorage2D:G0,texStorage3D:R0,texSubImage2D:D,texSubImage3D:S,compressedTexSubImage2D:m,compressedTexSubImage3D:J0,scissor:U0,viewport:K0,reset:WJ}}function kq(J,Q,$,Z,W,K,H){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,X=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new W0,N=new WeakMap,E=new Set,G,q=new WeakMap,R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(C){}function V(C,D){return R?new OffscreenCanvas(C,D):D7("canvas")}function O(C,D,S){let m=1,J0=AJ(C);if(J0.width>S||J0.height>S)m=S/Math.max(J0.width,J0.height);if(m<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let G0=Math.floor(m*J0.width),R0=Math.floor(m*J0.height);if(G===void 0)G=V(G0,R0);let c=D?V(G0,R0):G;return c.width=G0,c.height=R0,c.getContext("2d").drawImage(C,0,0,G0,R0),A0("WebGLRenderer: Texture has been resized from ("+J0.width+"x"+J0.height+") to ("+G0+"x"+R0+")."),c}else{if("data"in C)A0("WebGLRenderer: Image in DataTexture is too big ("+J0.width+"x"+J0.height+").");return C}return C}function F(C){return C.generateMipmaps}function _(C){J.generateMipmap(C)}function k(C){if(C.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(C.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function L(C,D,S,m,J0,G0=!1){if(C!==null){if(J[C]!==void 0)return J[C];A0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let R0;if(m){if(R0=Q.get("EXT_texture_norm16"),!R0)A0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let c=D;if(D===J.RED){if(S===J.FLOAT)c=J.R32F;if(S===J.HALF_FLOAT)c=J.R16F;if(S===J.UNSIGNED_BYTE)c=J.R8;if(S===J.UNSIGNED_SHORT&&R0)c=R0.R16_EXT;if(S===J.SHORT&&R0)c=R0.R16_SNORM_EXT}if(D===J.RED_INTEGER){if(S===J.UNSIGNED_BYTE)c=J.R8UI;if(S===J.UNSIGNED_SHORT)c=J.R16UI;if(S===J.UNSIGNED_INT)c=J.R32UI;if(S===J.BYTE)c=J.R8I;if(S===J.SHORT)c=J.R16I;if(S===J.INT)c=J.R32I}if(D===J.RG){if(S===J.FLOAT)c=J.RG32F;if(S===J.HALF_FLOAT)c=J.RG16F;if(S===J.UNSIGNED_BYTE)c=J.RG8;if(S===J.UNSIGNED_SHORT&&R0)c=R0.RG16_EXT;if(S===J.SHORT&&R0)c=R0.RG16_SNORM_EXT}if(D===J.RG_INTEGER){if(S===J.UNSIGNED_BYTE)c=J.RG8UI;if(S===J.UNSIGNED_SHORT)c=J.RG16UI;if(S===J.UNSIGNED_INT)c=J.RG32UI;if(S===J.BYTE)c=J.RG8I;if(S===J.SHORT)c=J.RG16I;if(S===J.INT)c=J.RG32I}if(D===J.RGB_INTEGER){if(S===J.UNSIGNED_BYTE)c=J.RGB8UI;if(S===J.UNSIGNED_SHORT)c=J.RGB16UI;if(S===J.UNSIGNED_INT)c=J.RGB32UI;if(S===J.BYTE)c=J.RGB8I;if(S===J.SHORT)c=J.RGB16I;if(S===J.INT)c=J.RGB32I}if(D===J.RGBA_INTEGER){if(S===J.UNSIGNED_BYTE)c=J.RGBA8UI;if(S===J.UNSIGNED_SHORT)c=J.RGBA16UI;if(S===J.UNSIGNED_INT)c=J.RGBA32UI;if(S===J.BYTE)c=J.RGBA8I;if(S===J.SHORT)c=J.RGBA16I;if(S===J.INT)c=J.RGBA32I}if(D===J.RGB){if(S===J.UNSIGNED_SHORT&&R0)c=R0.RGB16_EXT;if(S===J.SHORT&&R0)c=R0.RGB16_SNORM_EXT;if(S===J.UNSIGNED_INT_5_9_9_9_REV)c=J.RGB9_E5;if(S===J.UNSIGNED_INT_10F_11F_11F_REV)c=J.R11F_G11F_B10F}if(D===J.RGBA){let a=G0?vZ:r0.getTransfer(J0);if(S===J.FLOAT)c=J.RGBA32F;if(S===J.HALF_FLOAT)c=J.RGBA16F;if(S===J.UNSIGNED_BYTE)c=a===zJ?J.SRGB8_ALPHA8:J.RGBA8;if(S===J.UNSIGNED_SHORT&&R0)c=R0.RGBA16_EXT;if(S===J.SHORT&&R0)c=R0.RGBA16_SNORM_EXT;if(S===J.UNSIGNED_SHORT_4_4_4_4)c=J.RGBA4;if(S===J.UNSIGNED_SHORT_5_5_5_1)c=J.RGB5_A1}if(c===J.R16F||c===J.R32F||c===J.RG16F||c===J.RG32F||c===J.RGBA16F||c===J.RGBA32F)Q.get("EXT_color_buffer_float");return c}function z(C,D){let S;if(C){if(D===null||D===z8||D===w7)S=J.DEPTH24_STENCIL8;else if(D===W8)S=J.DEPTH32F_STENCIL8;else if(D===U6)S=J.DEPTH24_STENCIL8,A0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(D===null||D===z8||D===w7)S=J.DEPTH_COMPONENT24;else if(D===W8)S=J.DEPTH_COMPONENT32F;else if(D===U6)S=J.DEPTH_COMPONENT16;return S}function I(C,D){if(F(C)===!0||C.isFramebufferTexture&&C.minFilter!==v9&&C.minFilter!==sJ)return Math.log2(Math.max(D.width,D.height))+1;else if(C.mipmaps!==void 0&&C.mipmaps.length>0)return C.mipmaps.length;else if(C.isCompressedTexture&&Array.isArray(C.image))return D.mipmaps.length;else return 1}function A(C){let D=C.target;if(D.removeEventListener("dispose",A),P(D),D.isVideoTexture)N.delete(D);if(D.isHTMLTexture)E.delete(D)}function M(C){let D=C.target;D.removeEventListener("dispose",M),y(D)}function P(C){let D=Z.get(C);if(D.__webglInit===void 0)return;let S=C.source,m=q.get(S);if(m){let J0=m[D.__cacheKey];if(J0.usedTimes--,J0.usedTimes===0)p(C);if(Object.keys(m).length===0)q.delete(S)}Z.remove(C)}function p(C){let D=Z.get(C);J.deleteTexture(D.__webglTexture);let S=C.source,m=q.get(S);delete m[D.__cacheKey],H.memory.textures--}function y(C){let D=Z.get(C);if(C.depthTexture)C.depthTexture.dispose(),Z.remove(C.depthTexture);if(C.isWebGLCubeRenderTarget)for(let m=0;m<6;m++){if(Array.isArray(D.__webglFramebuffer[m]))for(let J0=0;J0<D.__webglFramebuffer[m].length;J0++)J.deleteFramebuffer(D.__webglFramebuffer[m][J0]);else J.deleteFramebuffer(D.__webglFramebuffer[m]);if(D.__webglDepthbuffer)J.deleteRenderbuffer(D.__webglDepthbuffer[m])}else{if(Array.isArray(D.__webglFramebuffer))for(let m=0;m<D.__webglFramebuffer.length;m++)J.deleteFramebuffer(D.__webglFramebuffer[m]);else J.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer)J.deleteRenderbuffer(D.__webglDepthbuffer);if(D.__webglMultisampledFramebuffer)J.deleteFramebuffer(D.__webglMultisampledFramebuffer);if(D.__webglColorRenderbuffer){for(let m=0;m<D.__webglColorRenderbuffer.length;m++)if(D.__webglColorRenderbuffer[m])J.deleteRenderbuffer(D.__webglColorRenderbuffer[m])}if(D.__webglDepthRenderbuffer)J.deleteRenderbuffer(D.__webglDepthRenderbuffer)}let S=C.textures;for(let m=0,J0=S.length;m<J0;m++){let G0=Z.get(S[m]);if(G0.__webglTexture)J.deleteTexture(G0.__webglTexture),H.memory.textures--;Z.remove(S[m])}Z.remove(C)}let b=0;function o(){b=0}function T(){return b}function d(C){b=C}function r(){let C=b;if(C>=W.maxTextures)A0("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+W.maxTextures);return b+=1,C}function l(C){let D=[];return D.push(C.wrapS),D.push(C.wrapT),D.push(C.wrapR||0),D.push(C.magFilter),D.push(C.minFilter),D.push(C.anisotropy),D.push(C.internalFormat),D.push(C.format),D.push(C.type),D.push(C.generateMipmaps),D.push(C.premultiplyAlpha),D.push(C.flipY),D.push(C.unpackAlignment),D.push(C.colorSpace),D.join()}function H0(C,D){let S=Z.get(C);if(C.isVideoTexture)IJ(C);if(C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&S.__version!==C.version){let m=C.image;if(m===null)A0("WebGLRenderer: Texture marked for update but no image data found.");else if(m.complete===!1)A0("WebGLRenderer: Texture marked for update but image is incomplete");else{y0(S,C,D);return}}else if(C.isExternalTexture)S.__webglTexture=C.sourceTexture?C.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,S.__webglTexture,J.TEXTURE0+D)}function n(C,D){let S=Z.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&S.__version!==C.version){y0(S,C,D);return}else if(C.isExternalTexture)S.__webglTexture=C.sourceTexture?C.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,S.__webglTexture,J.TEXTURE0+D)}function t(C,D){let S=Z.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&S.__version!==C.version){y0(S,C,D);return}$.bindTexture(J.TEXTURE_3D,S.__webglTexture,J.TEXTURE0+D)}function $0(C,D){let S=Z.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&S.__version!==C.version){b0(S,C,D);return}$.bindTexture(J.TEXTURE_CUBE_MAP,S.__webglTexture,J.TEXTURE0+D)}let w0={[B8]:J.REPEAT,[I7]:J.CLAMP_TO_EDGE,[LQ]:J.MIRRORED_REPEAT},f0={[v9]:J.NEAREST,[VQ]:J.NEAREST_MIPMAP_NEAREST,[m8]:J.NEAREST_MIPMAP_LINEAR,[sJ]:J.LINEAR,[A7]:J.LINEAR_MIPMAP_NEAREST,[u9]:J.LINEAR_MIPMAP_LINEAR},qJ={[VH]:J.NEVER,[zH]:J.ALWAYS,[MH]:J.LESS,[_Q]:J.LEQUAL,[DH]:J.EQUAL,[IQ]:J.GEQUAL,[kH]:J.GREATER,[BH]:J.NOTEQUAL};function n0(C,D){if(D.type===W8&&Q.has("OES_texture_float_linear")===!1&&(D.magFilter===sJ||D.magFilter===A7||D.magFilter===m8||D.magFilter===u9||D.minFilter===sJ||D.minFilter===A7||D.minFilter===m8||D.minFilter===u9))A0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(C,J.TEXTURE_WRAP_S,w0[D.wrapS]),J.texParameteri(C,J.TEXTURE_WRAP_T,w0[D.wrapT]),C===J.TEXTURE_3D||C===J.TEXTURE_2D_ARRAY)J.texParameteri(C,J.TEXTURE_WRAP_R,w0[D.wrapR]);if(J.texParameteri(C,J.TEXTURE_MAG_FILTER,f0[D.magFilter]),J.texParameteri(C,J.TEXTURE_MIN_FILTER,f0[D.minFilter]),D.compareFunction)J.texParameteri(C,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(C,J.TEXTURE_COMPARE_FUNC,qJ[D.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===v9)return;if(D.minFilter!==m8&&D.minFilter!==u9)return;if(D.type===W8&&Q.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||Z.get(D).__currentAnisotropy){let S=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(C,S.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,W.getMaxAnisotropy())),Z.get(D).__currentAnisotropy=D.anisotropy}}}function s(C,D){let S=!1;if(C.__webglInit===void 0)C.__webglInit=!0,D.addEventListener("dispose",A);let m=D.source,J0=q.get(m);if(J0===void 0)J0={},q.set(m,J0);let G0=l(D);if(G0!==C.__cacheKey){if(J0[G0]===void 0)J0[G0]={texture:J.createTexture(),usedTimes:0},H.memory.textures++,S=!0;J0[G0].usedTimes++;let R0=J0[C.__cacheKey];if(R0!==void 0){if(J0[C.__cacheKey].usedTimes--,R0.usedTimes===0)p(D)}C.__cacheKey=G0,C.__webglTexture=J0[G0].texture}return S}function Z0(C,D,S){return Math.floor(Math.floor(C/S)/D)}function X0(C,D,S,m){let G0=C.updateRanges;if(G0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,D.width,D.height,S,m,D.data);else{G0.sort((I0,U0)=>I0.start-U0.start);let R0=0;for(let I0=1;I0<G0.length;I0++){let U0=G0[R0],K0=G0[I0],v0=U0.start+U0.count,h0=Z0(K0.start,D.width,4),WJ=Z0(U0.start,D.width,4);if(K0.start<=v0+1&&h0===WJ&&Z0(K0.start+K0.count-1,D.width,4)===h0)U0.count=Math.max(U0.count,K0.start+K0.count-U0.start);else++R0,G0[R0]=K0}G0.length=R0+1;let c=$.getParameter(J.UNPACK_ROW_LENGTH),a=$.getParameter(J.UNPACK_SKIP_PIXELS),M0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,D.width);for(let I0=0,U0=G0.length;I0<U0;I0++){let K0=G0[I0],v0=Math.floor(K0.start/4),h0=Math.ceil(K0.count/4),WJ=v0%D.width,v=Math.floor(v0/D.width),q0=h0,i=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,WJ),$.pixelStorei(J.UNPACK_SKIP_ROWS,v),$.texSubImage2D(J.TEXTURE_2D,0,WJ,v,q0,1,S,m,D.data)}C.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,c),$.pixelStorei(J.UNPACK_SKIP_PIXELS,a),$.pixelStorei(J.UNPACK_SKIP_ROWS,M0)}}function y0(C,D,S){let m=J.TEXTURE_2D;if(D.isDataArrayTexture||D.isCompressedArrayTexture)m=J.TEXTURE_2D_ARRAY;if(D.isData3DTexture)m=J.TEXTURE_3D;let J0=s(C,D),G0=D.source;$.bindTexture(m,C.__webglTexture,J.TEXTURE0+S);let R0=Z.get(G0);if(G0.version!==R0.__version||J0===!0){if($.activeTexture(J.TEXTURE0+S),(typeof ImageBitmap<"u"&&D.image instanceof ImageBitmap)===!1){let i=r0.getPrimaries(r0.workingColorSpace),F0=D.colorSpace===n8?null:r0.getPrimaries(D.colorSpace),B0=D.colorSpace===n8||i===F0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,D.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,B0)}$.pixelStorei(J.UNPACK_ALIGNMENT,D.unpackAlignment);let a=O(D.image,!1,W.maxTextureSize);a=GJ(D,a);let M0=K.convert(D.format,D.colorSpace),I0=K.convert(D.type),U0=L(D.internalFormat,M0,I0,D.normalized,D.colorSpace,D.isVideoTexture);n0(m,D);let K0,v0=D.mipmaps,h0=D.isVideoTexture!==!0,WJ=R0.__version===void 0||J0===!0,v=G0.dataReady,q0=I(D,a);if(D.isDepthTexture){if(U0=z(D.format===u8,D.type),WJ)if(h0)$.texStorage2D(J.TEXTURE_2D,1,U0,a.width,a.height);else $.texImage2D(J.TEXTURE_2D,0,U0,a.width,a.height,0,M0,I0,null)}else if(D.isDataTexture)if(v0.length>0){if(h0&&WJ)$.texStorage2D(J.TEXTURE_2D,q0,U0,v0[0].width,v0[0].height);for(let i=0,F0=v0.length;i<F0;i++)if(K0=v0[i],h0){if(v)$.texSubImage2D(J.TEXTURE_2D,i,0,0,K0.width,K0.height,M0,I0,K0.data)}else $.texImage2D(J.TEXTURE_2D,i,U0,K0.width,K0.height,0,M0,I0,K0.data);D.generateMipmaps=!1}else if(h0){if(WJ)$.texStorage2D(J.TEXTURE_2D,q0,U0,a.width,a.height);if(v)X0(D,a,M0,I0)}else $.texImage2D(J.TEXTURE_2D,0,U0,a.width,a.height,0,M0,I0,a.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){if(h0&&WJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,q0,U0,v0[0].width,v0[0].height,a.depth);for(let i=0,F0=v0.length;i<F0;i++)if(K0=v0[i],D.format!==n9)if(M0!==null)if(h0){if(v)if(D.layerUpdates.size>0){let B0=NW(K0.width,K0.height,D.format,D.type);for(let e of D.layerUpdates){let O0=K0.data.subarray(e*B0/K0.data.BYTES_PER_ELEMENT,(e+1)*B0/K0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,e,K0.width,K0.height,1,M0,O0)}}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,0,K0.width,K0.height,a.depth,M0,K0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,i,U0,K0.width,K0.height,a.depth,0,K0.data,0,0);else A0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(h0){if(v)$.texSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,0,K0.width,K0.height,a.depth,M0,I0,K0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,i,U0,K0.width,K0.height,a.depth,0,M0,I0,K0.data);if(D.layerUpdates.size>0)D.clearLayerUpdates()}else{if(h0&&WJ)$.texStorage2D(J.TEXTURE_2D,q0,U0,v0[0].width,v0[0].height);for(let i=0,F0=v0.length;i<F0;i++)if(K0=v0[i],D.format!==n9)if(M0!==null)if(h0){if(v)$.compressedTexSubImage2D(J.TEXTURE_2D,i,0,0,K0.width,K0.height,M0,K0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,i,U0,K0.width,K0.height,0,K0.data);else A0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(h0){if(v)$.texSubImage2D(J.TEXTURE_2D,i,0,0,K0.width,K0.height,M0,I0,K0.data)}else $.texImage2D(J.TEXTURE_2D,i,U0,K0.width,K0.height,0,M0,I0,K0.data)}else if(D.isDataArrayTexture)if(h0){if(WJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,q0,U0,a.width,a.height,a.depth);if(v)if(D.layerUpdates.size>0){let i=NW(a.width,a.height,D.format,D.type);for(let F0 of D.layerUpdates){let B0=a.data.subarray(F0*i/a.data.BYTES_PER_ELEMENT,(F0+1)*i/a.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,F0,a.width,a.height,1,M0,I0,B0)}D.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,a.width,a.height,a.depth,M0,I0,a.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,U0,a.width,a.height,a.depth,0,M0,I0,a.data);else if(D.isData3DTexture)if(h0){if(WJ)$.texStorage3D(J.TEXTURE_3D,q0,U0,a.width,a.height,a.depth);if(v)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,a.width,a.height,a.depth,M0,I0,a.data)}else $.texImage3D(J.TEXTURE_3D,0,U0,a.width,a.height,a.depth,0,M0,I0,a.data);else if(D.isFramebufferTexture){if(WJ)if(h0)$.texStorage2D(J.TEXTURE_2D,q0,U0,a.width,a.height);else{let{width:i,height:F0}=a;for(let B0=0;B0<q0;B0++)$.texImage2D(J.TEXTURE_2D,B0,U0,i,F0,0,M0,I0,null),i>>=1,F0>>=1}}else if(D.isHTMLTexture){if("texElementImage2D"in J){let i=J.canvas;if(!i.hasAttribute("layoutsubtree"))i.setAttribute("layoutsubtree","true");if(a.parentNode!==i){i.appendChild(a),E.add(D),i.onpaint=(F0)=>{let B0=F0.changedElements;for(let e of E)if(B0.includes(e.image))e.needsUpdate=!0},i.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,a);else{let{RGBA:B0,RGBA:e,UNSIGNED_BYTE:O0}=J;J.texElementImage2D(J.TEXTURE_2D,0,B0,e,O0,a)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(v0.length>0){if(h0&&WJ){let i=AJ(v0[0]);$.texStorage2D(J.TEXTURE_2D,q0,U0,i.width,i.height)}for(let i=0,F0=v0.length;i<F0;i++)if(K0=v0[i],h0){if(v)$.texSubImage2D(J.TEXTURE_2D,i,0,0,M0,I0,K0)}else $.texImage2D(J.TEXTURE_2D,i,U0,M0,I0,K0);D.generateMipmaps=!1}else if(h0){if(WJ){let i=AJ(a);$.texStorage2D(J.TEXTURE_2D,q0,U0,i.width,i.height)}if(v)$.texSubImage2D(J.TEXTURE_2D,0,0,0,M0,I0,a)}else $.texImage2D(J.TEXTURE_2D,0,U0,M0,I0,a);if(F(D))_(m);if(R0.__version=G0.version,D.onUpdate)D.onUpdate(D)}C.__version=D.version}function b0(C,D,S){if(D.image.length!==6)return;let m=s(C,D),J0=D.source;$.bindTexture(J.TEXTURE_CUBE_MAP,C.__webglTexture,J.TEXTURE0+S);let G0=Z.get(J0);if(J0.version!==G0.__version||m===!0){$.activeTexture(J.TEXTURE0+S);let R0=r0.getPrimaries(r0.workingColorSpace),c=D.colorSpace===n8?null:r0.getPrimaries(D.colorSpace),a=D.colorSpace===n8||R0===c?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,D.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,D.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,a);let M0=D.isCompressedTexture||D.image[0].isCompressedTexture,I0=D.image[0]&&D.image[0].isDataTexture,U0=[];for(let e=0;e<6;e++){if(!M0&&!I0)U0[e]=O(D.image[e],!0,W.maxCubemapSize);else U0[e]=I0?D.image[e].image:D.image[e];U0[e]=GJ(D,U0[e])}let K0=U0[0],v0=K.convert(D.format,D.colorSpace),h0=K.convert(D.type),WJ=L(D.internalFormat,v0,h0,D.normalized,D.colorSpace),v=D.isVideoTexture!==!0,q0=G0.__version===void 0||m===!0,i=J0.dataReady,F0=I(D,K0);n0(J.TEXTURE_CUBE_MAP,D);let B0;if(M0){if(v&&q0)$.texStorage2D(J.TEXTURE_CUBE_MAP,F0,WJ,K0.width,K0.height);for(let e=0;e<6;e++){B0=U0[e].mipmaps;for(let O0=0;O0<B0.length;O0++){let m0=B0[O0];if(D.format!==n9)if(v0!==null)if(v){if(i)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,O0,0,0,m0.width,m0.height,v0,m0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,O0,WJ,m0.width,m0.height,0,m0.data);else A0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(v){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,O0,0,0,m0.width,m0.height,v0,h0,m0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,O0,WJ,m0.width,m0.height,0,v0,h0,m0.data)}}}else{if(B0=D.mipmaps,v&&q0){if(B0.length>0)F0++;let e=AJ(U0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,F0,WJ,e.width,e.height)}for(let e=0;e<6;e++)if(I0){if(v){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,U0[e].width,U0[e].height,v0,h0,U0[e].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,WJ,U0[e].width,U0[e].height,0,v0,h0,U0[e].data);for(let O0=0;O0<B0.length;O0++){let OJ=B0[O0].image[e].image;if(v){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,O0+1,0,0,OJ.width,OJ.height,v0,h0,OJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,O0+1,WJ,OJ.width,OJ.height,0,v0,h0,OJ.data)}}else{if(v){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,v0,h0,U0[e])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,WJ,v0,h0,U0[e]);for(let O0=0;O0<B0.length;O0++){let m0=B0[O0];if(v){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,O0+1,0,0,v0,h0,m0.image[e])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+e,O0+1,WJ,v0,h0,m0.image[e])}}}if(F(D))_(J.TEXTURE_CUBE_MAP);if(G0.__version=J0.version,D.onUpdate)D.onUpdate(D)}C.__version=D.version}function j0(C,D,S,m,J0,G0){let R0=K.convert(S.format,S.colorSpace),c=K.convert(S.type),a=L(S.internalFormat,R0,c,S.normalized,S.colorSpace),M0=Z.get(D),I0=Z.get(S);if(I0.__renderTarget=D,!M0.__hasExternalTextures){let U0=Math.max(1,D.width>>G0),K0=Math.max(1,D.height>>G0);if(J0===J.TEXTURE_3D||J0===J.TEXTURE_2D_ARRAY)$.texImage3D(J0,G0,a,U0,K0,D.depth,0,R0,c,null);else $.texImage2D(J0,G0,a,U0,K0,0,R0,c,null)}if($.bindFramebuffer(J.FRAMEBUFFER,C),j(D))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,m,J0,I0.__webglTexture,0,PJ(D));else if(J0===J.TEXTURE_2D||J0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&J0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,m,J0,I0.__webglTexture,G0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function vJ(C,D,S){if(J.bindRenderbuffer(J.RENDERBUFFER,C),D.depthBuffer){let m=D.depthTexture,J0=m&&m.isDepthTexture?m.type:null,G0=z(D.stencilBuffer,J0),R0=D.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(j(D))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,PJ(D),G0,D.width,D.height);else if(S)J.renderbufferStorageMultisample(J.RENDERBUFFER,PJ(D),G0,D.width,D.height);else J.renderbufferStorage(J.RENDERBUFFER,G0,D.width,D.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,R0,J.RENDERBUFFER,C)}else{let m=D.textures;for(let J0=0;J0<m.length;J0++){let G0=m[J0],R0=K.convert(G0.format,G0.colorSpace),c=K.convert(G0.type),a=L(G0.internalFormat,R0,c,G0.normalized,G0.colorSpace);if(j(D))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,PJ(D),a,D.width,D.height);else if(S)J.renderbufferStorageMultisample(J.RENDERBUFFER,PJ(D),a,D.width,D.height);else J.renderbufferStorage(J.RENDERBUFFER,a,D.width,D.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function a0(C,D,S){let m=D.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,C),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J0=Z.get(D.depthTexture);if(J0.__renderTarget=D,!J0.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0;if(m){if(J0.__webglInit===void 0)J0.__webglInit=!0,D.depthTexture.addEventListener("dispose",A);if(J0.__webglTexture===void 0){J0.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,J0.__webglTexture),n0(J.TEXTURE_CUBE_MAP,D.depthTexture);let M0=K.convert(D.depthTexture.format),I0=K.convert(D.depthTexture.type),U0;if(D.depthTexture.format===d8)U0=J.DEPTH_COMPONENT24;else if(D.depthTexture.format===u8)U0=J.DEPTH24_STENCIL8;for(let K0=0;K0<6;K0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+K0,0,U0,D.width,D.height,0,M0,I0,null)}}else H0(D.depthTexture,0);let G0=J0.__webglTexture,R0=PJ(D),c=m?J.TEXTURE_CUBE_MAP_POSITIVE_X+S:J.TEXTURE_2D,a=D.depthTexture.format===u8?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(D.depthTexture.format===d8)if(j(D))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,a,c,G0,0,R0);else J.framebufferTexture2D(J.FRAMEBUFFER,a,c,G0,0);else if(D.depthTexture.format===u8)if(j(D))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,a,c,G0,0,R0);else J.framebufferTexture2D(J.FRAMEBUFFER,a,c,G0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function JJ(C){let D=Z.get(C),S=C.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==C.depthTexture){let m=C.depthTexture;if(D.__depthDisposeCallback)D.__depthDisposeCallback();if(m){let J0=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,m.removeEventListener("dispose",J0)};m.addEventListener("dispose",J0),D.__depthDisposeCallback=J0}D.__boundDepthTexture=m}if(C.depthTexture&&!D.__autoAllocateDepthBuffer)if(S)for(let m=0;m<6;m++)a0(D.__webglFramebuffer[m],C,m);else{let m=C.texture.mipmaps;if(m&&m.length>0)a0(D.__webglFramebuffer[0],C,0);else a0(D.__webglFramebuffer,C,0)}else if(S){D.__webglDepthbuffer=[];for(let m=0;m<6;m++)if($.bindFramebuffer(J.FRAMEBUFFER,D.__webglFramebuffer[m]),D.__webglDepthbuffer[m]===void 0)D.__webglDepthbuffer[m]=J.createRenderbuffer(),vJ(D.__webglDepthbuffer[m],C,!1);else{let J0=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,G0=D.__webglDepthbuffer[m];J.bindRenderbuffer(J.RENDERBUFFER,G0),J.framebufferRenderbuffer(J.FRAMEBUFFER,J0,J.RENDERBUFFER,G0)}}else{let m=C.texture.mipmaps;if(m&&m.length>0)$.bindFramebuffer(J.FRAMEBUFFER,D.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,D.__webglFramebuffer);if(D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=J.createRenderbuffer(),vJ(D.__webglDepthbuffer,C,!1);else{let J0=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,G0=D.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,G0),J.framebufferRenderbuffer(J.FRAMEBUFFER,J0,J.RENDERBUFFER,G0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function UJ(C,D,S){let m=Z.get(C);if(D!==void 0)j0(m.__webglFramebuffer,C,C.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(S!==void 0)JJ(C)}function $J(C){let D=C.texture,S=Z.get(C),m=Z.get(D);C.addEventListener("dispose",M);let J0=C.textures,G0=C.isWebGLCubeRenderTarget===!0,R0=J0.length>1;if(!R0){if(m.__webglTexture===void 0)m.__webglTexture=J.createTexture();m.__version=D.version,H.memory.textures++}if(G0){S.__webglFramebuffer=[];for(let c=0;c<6;c++)if(D.mipmaps&&D.mipmaps.length>0){S.__webglFramebuffer[c]=[];for(let a=0;a<D.mipmaps.length;a++)S.__webglFramebuffer[c][a]=J.createFramebuffer()}else S.__webglFramebuffer[c]=J.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){S.__webglFramebuffer=[];for(let c=0;c<D.mipmaps.length;c++)S.__webglFramebuffer[c]=J.createFramebuffer()}else S.__webglFramebuffer=J.createFramebuffer();if(R0)for(let c=0,a=J0.length;c<a;c++){let M0=Z.get(J0[c]);if(M0.__webglTexture===void 0)M0.__webglTexture=J.createTexture(),H.memory.textures++}if(C.samples>0&&j(C)===!1){S.__webglMultisampledFramebuffer=J.createFramebuffer(),S.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,S.__webglMultisampledFramebuffer);for(let c=0;c<J0.length;c++){let a=J0[c];S.__webglColorRenderbuffer[c]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,S.__webglColorRenderbuffer[c]);let M0=K.convert(a.format,a.colorSpace),I0=K.convert(a.type),U0=L(a.internalFormat,M0,I0,a.normalized,a.colorSpace,C.isXRRenderTarget===!0),K0=PJ(C);J.renderbufferStorageMultisample(J.RENDERBUFFER,K0,U0,C.width,C.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+c,J.RENDERBUFFER,S.__webglColorRenderbuffer[c])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),C.depthBuffer)S.__webglDepthRenderbuffer=J.createRenderbuffer(),vJ(S.__webglDepthRenderbuffer,C,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(G0){$.bindTexture(J.TEXTURE_CUBE_MAP,m.__webglTexture),n0(J.TEXTURE_CUBE_MAP,D);for(let c=0;c<6;c++)if(D.mipmaps&&D.mipmaps.length>0)for(let a=0;a<D.mipmaps.length;a++)j0(S.__webglFramebuffer[c][a],C,D,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+c,a);else j0(S.__webglFramebuffer[c],C,D,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+c,0);if(F(D))_(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(R0){for(let c=0,a=J0.length;c<a;c++){let M0=J0[c],I0=Z.get(M0),U0=J.TEXTURE_2D;if(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)U0=C.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(U0,I0.__webglTexture),n0(U0,M0),j0(S.__webglFramebuffer,C,M0,J.COLOR_ATTACHMENT0+c,U0,0),F(M0))_(U0)}$.unbindTexture()}else{let c=J.TEXTURE_2D;if(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)c=C.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(c,m.__webglTexture),n0(c,D),D.mipmaps&&D.mipmaps.length>0)for(let a=0;a<D.mipmaps.length;a++)j0(S.__webglFramebuffer[a],C,D,J.COLOR_ATTACHMENT0,c,a);else j0(S.__webglFramebuffer,C,D,J.COLOR_ATTACHMENT0,c,0);if(F(D))_(c);$.unbindTexture()}if(C.depthBuffer)JJ(C)}function pJ(C){let D=C.textures;for(let S=0,m=D.length;S<m;S++){let J0=D[S];if(F(J0)){let G0=k(C),R0=Z.get(J0).__webglTexture;$.bindTexture(G0,R0),_(G0),$.unbindTexture()}}}let FJ=[],aJ=[];function CJ(C){if(C.samples>0){if(j(C)===!1){let{textures:D,width:S,height:m}=C,J0=J.COLOR_BUFFER_BIT,G0=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,R0=Z.get(C),c=D.length>1;if(c)for(let M0=0;M0<D.length;M0++)$.bindFramebuffer(J.FRAMEBUFFER,R0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+M0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,R0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+M0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,R0.__webglMultisampledFramebuffer);let a=C.texture.mipmaps;if(a&&a.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,R0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,R0.__webglFramebuffer);for(let M0=0;M0<D.length;M0++){if(C.resolveDepthBuffer){if(C.depthBuffer)J0|=J.DEPTH_BUFFER_BIT;if(C.stencilBuffer&&C.resolveStencilBuffer)J0|=J.STENCIL_BUFFER_BIT}if(c){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,R0.__webglColorRenderbuffer[M0]);let I0=Z.get(D[M0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,I0,0)}if(J.blitFramebuffer(0,0,S,m,0,0,S,m,J0,J.NEAREST),X===!0){if(FJ.length=0,aJ.length=0,FJ.push(J.COLOR_ATTACHMENT0+M0),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1)FJ.push(G0),aJ.push(G0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,aJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,FJ)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),c)for(let M0=0;M0<D.length;M0++){$.bindFramebuffer(J.FRAMEBUFFER,R0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+M0,J.RENDERBUFFER,R0.__webglColorRenderbuffer[M0]);let I0=Z.get(D[M0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,R0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+M0,J.TEXTURE_2D,I0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,R0.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&X){let D=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[D])}}}function PJ(C){return Math.min(W.maxSamples,C.samples)}function j(C){let D=Z.get(C);return C.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function IJ(C){let D=H.render.frame;if(N.get(C)!==D)N.set(C,D),C.update()}function GJ(C,D){let{colorSpace:S,format:m,type:J0}=C;if(C.isCompressedTexture===!0||C.isVideoTexture===!0)return D;if(S!==E9&&S!==n8)if(r0.getTransfer(S)===zJ){if(m!==n9||J0!==f9)A0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else l0("WebGLTextures: Unsupported texture color space:",S);return D}function AJ(C){if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement)U.width=C.naturalWidth||C.width,U.height=C.naturalHeight||C.height;else if(typeof VideoFrame<"u"&&C instanceof VideoFrame)U.width=C.displayWidth,U.height=C.displayHeight;else U.width=C.width,U.height=C.height;return U}this.allocateTextureUnit=r,this.resetTextureUnits=o,this.getTextureUnits=T,this.setTextureUnits=d,this.setTexture2D=H0,this.setTexture2DArray=n,this.setTexture3D=t,this.setTextureCube=$0,this.rebindTextures=UJ,this.setupRenderTarget=$J,this.updateRenderTargetMipmap=pJ,this.updateMultisampleRenderTarget=CJ,this.setupDepthRenderbuffer=JJ,this.setupFrameBufferTexture=j0,this.useMultisampledRTT=j,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function Bq(J,Q){function $(Z,W=n8){let K,H=r0.getTransfer(W);if(Z===f9)return J.UNSIGNED_BYTE;if(Z===a$)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===r$)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===EH)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===qH)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===GH)return J.BYTE;if(Z===NH)return J.SHORT;if(Z===U6)return J.UNSIGNED_SHORT;if(Z===o$)return J.INT;if(Z===z8)return J.UNSIGNED_INT;if(Z===W8)return J.FLOAT;if(Z===c9)return J.HALF_FLOAT;if(Z===FH)return J.ALPHA;if(Z===OH)return J.RGB;if(Z===n9)return J.RGBA;if(Z===d8)return J.DEPTH_COMPONENT;if(Z===u8)return J.DEPTH_STENCIL;if(Z===RH)return J.RED;if(Z===t$)return J.RED_INTEGER;if(Z===c8)return J.RG;if(Z===e$)return J.RG_INTEGER;if(Z===JZ)return J.RGBA_INTEGER;if(Z===MQ||Z===DQ||Z===kQ||Z===BQ)if(H===zJ)if(K=Q.get("WEBGL_compressed_texture_s3tc_srgb"),K!==null){if(Z===MQ)return K.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===DQ)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===kQ)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===BQ)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(K=Q.get("WEBGL_compressed_texture_s3tc"),K!==null){if(Z===MQ)return K.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===DQ)return K.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===kQ)return K.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===BQ)return K.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===QZ||Z===$Z||Z===ZZ||Z===WZ)if(K=Q.get("WEBGL_compressed_texture_pvrtc"),K!==null){if(Z===QZ)return K.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===$Z)return K.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===ZZ)return K.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===WZ)return K.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===KZ||Z===HZ||Z===YZ||Z===XZ||Z===UZ||Z===zQ||Z===GZ)if(K=Q.get("WEBGL_compressed_texture_etc"),K!==null){if(Z===KZ||Z===HZ)return H===zJ?K.COMPRESSED_SRGB8_ETC2:K.COMPRESSED_RGB8_ETC2;if(Z===YZ)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:K.COMPRESSED_RGBA8_ETC2_EAC;if(Z===XZ)return K.COMPRESSED_R11_EAC;if(Z===UZ)return K.COMPRESSED_SIGNED_R11_EAC;if(Z===zQ)return K.COMPRESSED_RG11_EAC;if(Z===GZ)return K.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===NZ||Z===EZ||Z===qZ||Z===FZ||Z===OZ||Z===RZ||Z===LZ||Z===VZ||Z===MZ||Z===DZ||Z===kZ||Z===BZ||Z===zZ||Z===CZ)if(K=Q.get("WEBGL_compressed_texture_astc"),K!==null){if(Z===NZ)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:K.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===EZ)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:K.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===qZ)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:K.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===FZ)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:K.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===OZ)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:K.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===RZ)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:K.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===LZ)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:K.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===VZ)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:K.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===MZ)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:K.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===DZ)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:K.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===kZ)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:K.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===BZ)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:K.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===zZ)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:K.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===CZ)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:K.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===PZ||Z===_Z||Z===IZ)if(K=Q.get("EXT_texture_compression_bptc"),K!==null){if(Z===PZ)return H===zJ?K.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:K.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===_Z)return K.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===IZ)return K.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===AZ||Z===wZ||Z===CQ||Z===TZ)if(K=Q.get("EXT_texture_compression_rgtc"),K!==null){if(Z===AZ)return K.COMPRESSED_RED_RGTC1_EXT;if(Z===wZ)return K.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===CQ)return K.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===TZ)return K.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===w7)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var zq=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cq=`
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

}`;class DY{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new gQ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new P9({vertexShader:zq,fragmentShader:Cq,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new c0(new x9(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kY extends b9{constructor(J,Q){super();let $=this,Z=null,W=1,K=null,H="local-floor",Y=1,X=null,U=null,N=null,E=null,G=null,q=null,R=typeof XRWebGLBinding<"u",V=new DY,O={},F=Q.getContextAttributes(),_=null,k=null,L=[],z=[],I=new W0,A=null,M=null,P=new lJ;P.viewport=new VJ;let p=new lJ;p.viewport=new VJ;let y=[P,p],b=new KW,o=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(s){let Z0=L[s];if(Z0===void 0)Z0=new E6,L[s]=Z0;return Z0.getTargetRaySpace()},this.getControllerGrip=function(s){let Z0=L[s];if(Z0===void 0)Z0=new E6,L[s]=Z0;return Z0.getGripSpace()},this.getHand=function(s){let Z0=L[s];if(Z0===void 0)Z0=new E6,L[s]=Z0;return Z0.getHandSpace()};function d(s){let Z0=z.indexOf(s.inputSource);if(Z0===-1)return;let X0=L[Z0];if(X0!==void 0)X0.update(s.inputSource,s.frame,X||K),X0.dispatchEvent({type:s.type,data:s.inputSource})}function r(){Z.removeEventListener("select",d),Z.removeEventListener("selectstart",d),Z.removeEventListener("selectend",d),Z.removeEventListener("squeeze",d),Z.removeEventListener("squeezestart",d),Z.removeEventListener("squeezeend",d),Z.removeEventListener("end",r),Z.removeEventListener("inputsourceschange",l);for(let s=0;s<L.length;s++){let Z0=z[s];if(Z0===null)continue;z[s]=null,L[s].disconnect(Z0)}o=null,T=null,V.reset();for(let s in O)delete O[s];if(J.setRenderTarget(_),G=null,E=null,N=null,Z=null,k=null,n0.stop(),$.isPresenting=!1,J.setPixelRatio(A),J.setSize(I.width,I.height,!1),M!==null){let s=M.camera;s.fov=M.fov,s.zoom=M.zoom,s.updateProjectionMatrix(),M=null}$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(s){if(W=s,$.isPresenting===!0)A0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(s){if(H=s,$.isPresenting===!0)A0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return X||K},this.setReferenceSpace=function(s){X=s},this.getBaseLayer=function(){return E!==null?E:G},this.getBinding=function(){if(N===null&&R)N=new XRWebGLBinding(Z,Q);return N},this.getFrame=function(){return q},this.getSession=function(){return Z},this.setSession=async function(s){if(Z=s,Z!==null){if(_=J.getRenderTarget(),Z.addEventListener("select",d),Z.addEventListener("selectstart",d),Z.addEventListener("selectend",d),Z.addEventListener("squeeze",d),Z.addEventListener("squeezestart",d),Z.addEventListener("squeezeend",d),Z.addEventListener("end",r),Z.addEventListener("inputsourceschange",l),F.xrCompatible!==!0)await Q.makeXRCompatible();if(A=J.getPixelRatio(),J.getSize(I),!(R&&("createProjectionLayer"in XRWebGLBinding.prototype))){let X0={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:W};G=new XRWebGLLayer(Z,Q,X0),Z.updateRenderState({baseLayer:G}),J.setPixelRatio(1),J.setSize(G.framebufferWidth,G.framebufferHeight,!1),k=new q9(G.framebufferWidth,G.framebufferHeight,{format:n9,type:f9,colorSpace:J.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1,storeMultisampledDepthBuffer:G.ignoreDepthValues===!1,storeMultisampledStencilBuffer:G.ignoreDepthValues===!1})}else{let X0=null,y0=null,b0=null;if(F.depth)b0=F.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,X0=F.stencil?u8:d8,y0=F.stencil?w7:z8;let j0={colorFormat:Q.RGBA8,depthFormat:b0,scaleFactor:W};N=this.getBinding(),E=N.createProjectionLayer(j0),Z.updateRenderState({layers:[E]}),J.setPixelRatio(1),J.setSize(E.textureWidth,E.textureHeight,!1),k=new q9(E.textureWidth,E.textureHeight,{format:n9,type:f9,depthTexture:new i8(E.textureWidth,E.textureHeight,y0,void 0,void 0,void 0,void 0,void 0,void 0,X0),stencilBuffer:F.stencil,colorSpace:J.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}k.isXRRenderTarget=!0,this.setFoveation(Y),X=null,K=await Z.requestReferenceSpace(H),n0.setContext(Z),n0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return V.getDepthTexture()};function l(s){for(let Z0=0;Z0<s.removed.length;Z0++){let X0=s.removed[Z0],y0=z.indexOf(X0);if(y0>=0)z[y0]=null,L[y0].disconnect(X0)}for(let Z0=0;Z0<s.added.length;Z0++){let X0=s.added[Z0],y0=z.indexOf(X0);if(y0===-1){for(let j0=0;j0<L.length;j0++)if(j0>=z.length){z.push(X0),y0=j0;break}else if(z[j0]===null){z[j0]=X0,y0=j0;break}if(y0===-1)break}let b0=L[y0];if(b0)b0.connect(X0)}}let H0=new w,n=new w;function t(s,Z0,X0){H0.setFromMatrixPosition(Z0.matrixWorld),n.setFromMatrixPosition(X0.matrixWorld);let y0=H0.distanceTo(n),b0=Z0.projectionMatrix.elements,j0=X0.projectionMatrix.elements,vJ=b0[14]/(b0[10]-1),a0=b0[14]/(b0[10]+1),JJ=(b0[9]+1)/b0[5],UJ=(b0[9]-1)/b0[5],$J=(b0[8]-1)/b0[0],pJ=(j0[8]+1)/j0[0],FJ=vJ*$J,aJ=vJ*pJ,CJ=y0/(-$J+pJ),PJ=CJ*-$J;if(Z0.matrixWorld.decompose(s.position,s.quaternion,s.scale),s.translateX(PJ),s.translateZ(CJ),s.matrixWorld.compose(s.position,s.quaternion,s.scale),s.matrixWorldInverse.copy(s.matrixWorld).invert(),b0[10]===-1)s.projectionMatrix.copy(Z0.projectionMatrix),s.projectionMatrixInverse.copy(Z0.projectionMatrixInverse);else{let j=vJ+CJ,IJ=a0+CJ,GJ=FJ-PJ,AJ=aJ+(y0-PJ),C=JJ*a0/IJ*j,D=UJ*a0/IJ*j;s.projectionMatrix.makePerspective(GJ,AJ,C,D,j,IJ),s.projectionMatrixInverse.copy(s.projectionMatrix).invert()}}function $0(s,Z0){if(Z0===null)s.matrixWorld.copy(s.matrix);else s.matrixWorld.multiplyMatrices(Z0.matrixWorld,s.matrix);s.matrixWorldInverse.copy(s.matrixWorld).invert()}this.updateCamera=function(s){if(Z===null)return;let{near:Z0,far:X0}=s;if(V.texture!==null){if(V.depthNear>0)Z0=V.depthNear;if(V.depthFar>0)X0=V.depthFar}if(b.near=p.near=P.near=Z0,b.far=p.far=P.far=X0,o!==b.near||T!==b.far)Z.updateRenderState({depthNear:b.near,depthFar:b.far}),o=b.near,T=b.far;b.layers.mask=s.layers.mask|6,P.layers.mask=b.layers.mask&-5,p.layers.mask=b.layers.mask&-3;let y0=s.parent,b0=b.cameras;$0(b,y0);for(let j0=0;j0<b0.length;j0++)$0(b0[j0],y0);if(b0.length===2)t(b,P,p);else b.projectionMatrix.copy(P.projectionMatrix);if(M===null&&s.isPerspectiveCamera)M={camera:s,fov:s.fov,zoom:s.zoom};w0(s,b,y0)};function w0(s,Z0,X0){if(X0===null)s.matrix.copy(Z0.matrixWorld);else s.matrix.copy(X0.matrixWorld),s.matrix.invert(),s.matrix.multiply(Z0.matrixWorld);if(s.matrix.decompose(s.position,s.quaternion,s.scale),s.updateMatrixWorld(!0),s.projectionMatrix.copy(Z0.projectionMatrix),s.projectionMatrixInverse.copy(Z0.projectionMatrixInverse),s.isPerspectiveCamera)s.fov=x8*2*Math.atan(1/s.projectionMatrix.elements[5]),s.zoom=1}this.getCamera=function(){return b},this.getFoveation=function(){if(E===null&&G===null)return;return Y},this.setFoveation=function(s){if(Y=s,E!==null)E.fixedFoveation=s;if(G!==null&&G.fixedFoveation!==void 0)G.fixedFoveation=s},this.hasDepthSensing=function(){return V.texture!==null},this.getDepthSensingMesh=function(){return V.getMesh(b)},this.getCameraTexture=function(s){return O[s]};let f0=null;function qJ(s,Z0){if(U=Z0.getViewerPose(X||K),q=Z0,U!==null){let X0=U.views;if(G!==null)J.setRenderTargetFramebuffer(k,G.framebuffer),J.setRenderTarget(k);let y0=!1;if(X0.length!==b.cameras.length)b.cameras.length=0,y0=!0;for(let a0=0;a0<X0.length;a0++){let JJ=X0[a0],UJ=null;if(G!==null)UJ=G.getViewport(JJ);else{let pJ=N.getViewSubImage(E,JJ);if(UJ=pJ.viewport,a0===0)J.setRenderTargetTextures(k,pJ.colorTexture,pJ.depthStencilTexture),J.setRenderTarget(k)}let $J=y[a0];if($J===void 0)$J=new lJ,$J.layers.enable(a0),$J.viewport=new VJ,y[a0]=$J;if($J.matrix.fromArray(JJ.transform.matrix),$J.matrix.decompose($J.position,$J.quaternion,$J.scale),$J.projectionMatrix.fromArray(JJ.projectionMatrix),$J.projectionMatrixInverse.copy($J.projectionMatrix).invert(),$J.viewport.set(UJ.x,UJ.y,UJ.width,UJ.height),a0===0)b.matrix.copy($J.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale);if(y0===!0)b.cameras.push($J)}let b0=Z.enabledFeatures;if(b0&&b0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&R){N=$.getBinding();let a0=N.getDepthInformation(X0[0]);if(a0&&a0.isValid&&a0.texture)V.init(a0,Z.renderState)}if(b0&&b0.includes("camera-access")&&R){J.state.unbindTexture(),N=$.getBinding();for(let a0=0;a0<X0.length;a0++){let JJ=X0[a0].camera;if(JJ){let UJ=O[JJ];if(!UJ)UJ=new gQ,O[JJ]=UJ;let $J=N.getCameraImage(JJ);UJ.sourceTexture=$J}}}}for(let X0=0;X0<L.length;X0++){let y0=z[X0],b0=L[X0];if(y0!==null&&b0!==void 0)b0.update(y0,Z0,X||K)}if(f0)f0(s,Z0);if(Z0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:Z0});q=null}let n0=new UY;n0.setAnimationLoop(qJ),this.setAnimationLoop=function(s){f0=s},this.dispose=function(){}}}var Pq=new d0,BY=new u0;BY.set(-1,0,0,0,1,0,0,0,1);function _q(J,Q){function $(O,F){if(O.matrixAutoUpdate===!0)O.updateMatrix();F.value.copy(O.matrix)}function Z(O,F){if(F.color.getRGB(O.fogColor.value,iZ(J)),F.isFog)O.fogNear.value=F.near,O.fogFar.value=F.far;else if(F.isFogExp2)O.fogDensity.value=F.density}function W(O,F,_,k,L){if(F.isNodeMaterial)F.uniformsNeedUpdate=!1;else if(F.isMeshBasicMaterial)K(O,F);else if(F.isMeshLambertMaterial){if(K(O,F),F.envMap)O.envMapIntensity.value=F.envMapIntensity}else if(F.isMeshToonMaterial)K(O,F),E(O,F);else if(F.isMeshPhongMaterial){if(K(O,F),N(O,F),F.envMap)O.envMapIntensity.value=F.envMapIntensity}else if(F.isMeshStandardMaterial){if(K(O,F),G(O,F),F.isMeshPhysicalMaterial)q(O,F,L)}else if(F.isMeshMatcapMaterial)K(O,F),R(O,F);else if(F.isMeshDepthMaterial)K(O,F);else if(F.isMeshDistanceMaterial)K(O,F),V(O,F);else if(F.isMeshNormalMaterial)K(O,F);else if(F.isLineBasicMaterial){if(H(O,F),F.isLineDashedMaterial)Y(O,F)}else if(F.isPointsMaterial)X(O,F,_,k);else if(F.isSpriteMaterial)U(O,F);else if(F.isShadowMaterial)O.color.value.copy(F.color),O.opacity.value=F.opacity;else if(F.isShaderMaterial)F.uniformsNeedUpdate=!1}function K(O,F){if(O.opacity.value=F.opacity,F.color)O.diffuse.value.copy(F.color);if(F.emissive)O.emissive.value.copy(F.emissive).multiplyScalar(F.emissiveIntensity);if(F.map)O.map.value=F.map,$(F.map,O.mapTransform);if(F.alphaMap)O.alphaMap.value=F.alphaMap,$(F.alphaMap,O.alphaMapTransform);if(F.bumpMap){if(O.bumpMap.value=F.bumpMap,$(F.bumpMap,O.bumpMapTransform),O.bumpScale.value=F.bumpScale,F.side===H9)O.bumpScale.value*=-1}if(F.normalMap){if(O.normalMap.value=F.normalMap,$(F.normalMap,O.normalMapTransform),O.normalScale.value.copy(F.normalScale),F.side===H9)O.normalScale.value.negate()}if(F.displacementMap)O.displacementMap.value=F.displacementMap,$(F.displacementMap,O.displacementMapTransform),O.displacementScale.value=F.displacementScale,O.displacementBias.value=F.displacementBias;if(F.emissiveMap)O.emissiveMap.value=F.emissiveMap,$(F.emissiveMap,O.emissiveMapTransform);if(F.specularMap)O.specularMap.value=F.specularMap,$(F.specularMap,O.specularMapTransform);if(F.alphaTest>0)O.alphaTest.value=F.alphaTest;let _=Q.get(F),k=_.envMap,L=_.envMapRotation;if(k){if(O.envMap.value=k,O.envMapRotation.value.setFromMatrix4(Pq.makeRotationFromEuler(L)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1)O.envMapRotation.value.premultiply(BY);O.reflectivity.value=F.reflectivity,O.ior.value=F.ior,O.refractionRatio.value=F.refractionRatio}if(F.lightMap)O.lightMap.value=F.lightMap,O.lightMapIntensity.value=F.lightMapIntensity,$(F.lightMap,O.lightMapTransform);if(F.aoMap)O.aoMap.value=F.aoMap,O.aoMapIntensity.value=F.aoMapIntensity,$(F.aoMap,O.aoMapTransform)}function H(O,F){if(O.diffuse.value.copy(F.color),O.opacity.value=F.opacity,F.map)O.map.value=F.map,$(F.map,O.mapTransform)}function Y(O,F){O.dashSize.value=F.dashSize,O.totalSize.value=F.dashSize+F.gapSize,O.scale.value=F.scale}function X(O,F,_,k){if(O.diffuse.value.copy(F.color),O.opacity.value=F.opacity,O.size.value=F.size*_,O.scale.value=k*0.5,F.map)O.map.value=F.map,$(F.map,O.uvTransform);if(F.alphaMap)O.alphaMap.value=F.alphaMap,$(F.alphaMap,O.alphaMapTransform);if(F.alphaTest>0)O.alphaTest.value=F.alphaTest}function U(O,F){if(O.diffuse.value.copy(F.color),O.opacity.value=F.opacity,O.rotation.value=F.rotation,F.map)O.map.value=F.map,$(F.map,O.mapTransform);if(F.alphaMap)O.alphaMap.value=F.alphaMap,$(F.alphaMap,O.alphaMapTransform);if(F.alphaTest>0)O.alphaTest.value=F.alphaTest}function N(O,F){O.specular.value.copy(F.specular),O.shininess.value=Math.max(F.shininess,0.0001)}function E(O,F){if(F.gradientMap)O.gradientMap.value=F.gradientMap}function G(O,F){if(O.metalness.value=F.metalness,F.metalnessMap)O.metalnessMap.value=F.metalnessMap,$(F.metalnessMap,O.metalnessMapTransform);if(O.roughness.value=F.roughness,F.roughnessMap)O.roughnessMap.value=F.roughnessMap,$(F.roughnessMap,O.roughnessMapTransform);if(F.envMap)O.envMapIntensity.value=F.envMapIntensity}function q(O,F,_){if(O.ior.value=F.ior,F.sheen>0){if(O.sheenColor.value.copy(F.sheenColor).multiplyScalar(F.sheen),O.sheenRoughness.value=F.sheenRoughness,F.sheenColorMap)O.sheenColorMap.value=F.sheenColorMap,$(F.sheenColorMap,O.sheenColorMapTransform);if(F.sheenRoughnessMap)O.sheenRoughnessMap.value=F.sheenRoughnessMap,$(F.sheenRoughnessMap,O.sheenRoughnessMapTransform)}if(F.clearcoat>0){if(O.clearcoat.value=F.clearcoat,O.clearcoatRoughness.value=F.clearcoatRoughness,F.clearcoatMap)O.clearcoatMap.value=F.clearcoatMap,$(F.clearcoatMap,O.clearcoatMapTransform);if(F.clearcoatRoughnessMap)O.clearcoatRoughnessMap.value=F.clearcoatRoughnessMap,$(F.clearcoatRoughnessMap,O.clearcoatRoughnessMapTransform);if(F.clearcoatNormalMap){if(O.clearcoatNormalMap.value=F.clearcoatNormalMap,$(F.clearcoatNormalMap,O.clearcoatNormalMapTransform),O.clearcoatNormalScale.value.copy(F.clearcoatNormalScale),F.side===H9)O.clearcoatNormalScale.value.negate()}}if(F.dispersion>0)O.dispersion.value=F.dispersion;if(F.retroreflectivity>0)O.retroreflectivity.value=F.retroreflectivity;if(F.iridescence>0){if(O.iridescence.value=F.iridescence,O.iridescenceIOR.value=F.iridescenceIOR,O.iridescenceThicknessMinimum.value=F.iridescenceThicknessRange[0],O.iridescenceThicknessMaximum.value=F.iridescenceThicknessRange[1],F.iridescenceMap)O.iridescenceMap.value=F.iridescenceMap,$(F.iridescenceMap,O.iridescenceMapTransform);if(F.iridescenceThicknessMap)O.iridescenceThicknessMap.value=F.iridescenceThicknessMap,$(F.iridescenceThicknessMap,O.iridescenceThicknessMapTransform)}if(F.transmission>0){if(O.transmission.value=F.transmission,O.transmissionSamplerMap.value=_.texture,O.transmissionSamplerSize.value.set(_.width,_.height),F.transmissionMap)O.transmissionMap.value=F.transmissionMap,$(F.transmissionMap,O.transmissionMapTransform);if(O.thickness.value=F.thickness,F.thicknessMap)O.thicknessMap.value=F.thicknessMap,$(F.thicknessMap,O.thicknessMapTransform);O.attenuationDistance.value=F.attenuationDistance,O.attenuationColor.value.copy(F.attenuationColor)}if(F.anisotropy>0){if(O.anisotropyVector.value.set(F.anisotropy*Math.cos(F.anisotropyRotation),F.anisotropy*Math.sin(F.anisotropyRotation)),F.anisotropyMap)O.anisotropyMap.value=F.anisotropyMap,$(F.anisotropyMap,O.anisotropyMapTransform)}if(O.specularIntensity.value=F.specularIntensity,O.specularColor.value.copy(F.specularColor),F.specularColorMap)O.specularColorMap.value=F.specularColorMap,$(F.specularColorMap,O.specularColorMapTransform);if(F.specularIntensityMap)O.specularIntensityMap.value=F.specularIntensityMap,$(F.specularIntensityMap,O.specularIntensityMapTransform)}function R(O,F){if(F.matcap)O.matcap.value=F.matcap}function V(O,F){let _=Q.get(F).light;O.referencePosition.value.setFromMatrixPosition(_.matrixWorld),O.nearDistance.value=_.shadow.camera.near,O.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:W}}function Iq(J,Q,$,Z){let W={},K={},H=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function X(L,z){let I=z.program;Z.uniformBlockBinding(L,I)}function U(L,z){let I=W[L.id];if(I===void 0)O(L),I=N(L),W[L.id]=I,L.addEventListener("dispose",_);let A=z.program;Z.updateUBOMapping(L,A);let M=Q.render.frame;if(K[L.id]!==M)G(L),K[L.id]=M}function N(L){let z=E();L.__bindingPointIndex=z;let I=J.createBuffer(),A=L.__size,M=L.usage;return J.bindBuffer(J.UNIFORM_BUFFER,I),J.bufferData(J.UNIFORM_BUFFER,A,M),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,z,I),I}function E(){for(let L=0;L<Y;L++)if(H.indexOf(L)===-1)return H.push(L),L;return l0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function G(L){let z=W[L.id],I=L.uniforms,A=L.__cache;J.bindBuffer(J.UNIFORM_BUFFER,z);for(let M=0,P=I.length;M<P;M++){let p=I[M];if(Array.isArray(p))for(let y=0,b=p.length;y<b;y++)q(p[y],M,y,A);else q(p,M,0,A)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function q(L,z,I,A){if(V(L,z,I,A)===!0){let{__offset:M,value:P}=L;if(Array.isArray(P)){let p=0;for(let y=0;y<P.length;y++){let b=P[y],o=F(b);if(R(b,L.__data,p),typeof b!=="number"&&typeof b!=="boolean"&&!b.isMatrix3&&!ArrayBuffer.isView(b))p+=o.storage/Float32Array.BYTES_PER_ELEMENT}}else R(P,L.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,M,L.__data)}}function R(L,z,I){if(typeof L==="number"||typeof L==="boolean")z[0]=L;else if(L.isMatrix3)z[0]=L.elements[0],z[1]=L.elements[1],z[2]=L.elements[2],z[3]=0,z[4]=L.elements[3],z[5]=L.elements[4],z[6]=L.elements[5],z[7]=0,z[8]=L.elements[6],z[9]=L.elements[7],z[10]=L.elements[8],z[11]=0;else if(ArrayBuffer.isView(L))z.set(new L.constructor(L.buffer,L.byteOffset,z.length));else L.toArray(z,I)}function V(L,z,I,A){let M=L.value,P=z+"_"+I;if(A[P]===void 0){if(typeof M==="number"||typeof M==="boolean")A[P]=M;else if(ArrayBuffer.isView(M))A[P]=M.slice();else A[P]=M.clone();return!0}else{let p=A[P];if(typeof M==="number"||typeof M==="boolean"){if(p!==M)return A[P]=M,!0}else if(ArrayBuffer.isView(M))return!0;else if(p.equals(M)===!1)return p.copy(M),!0}return!1}function O(L){let z=L.uniforms,I=0,A=16;for(let P=0,p=z.length;P<p;P++){let y=Array.isArray(z[P])?z[P]:[z[P]];for(let b=0,o=y.length;b<o;b++){let T=y[b],d=Array.isArray(T.value)?T.value:[T.value];for(let r=0,l=d.length;r<l;r++){let H0=d[r],n=F(H0),t=I%A,$0=t%n.boundary,w0=t+$0;if(I+=$0,w0!==0&&A-w0<n.storage)I+=A-w0;T.__data=new Float32Array(n.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=I,I+=n.storage}}}let M=I%A;if(M>0)I+=A-M;return L.__size=I,L.__cache={},this}function F(L){let z={boundary:0,storage:0};if(typeof L==="number"||typeof L==="boolean")z.boundary=4,z.storage=4;else if(L.isVector2)z.boundary=8,z.storage=8;else if(L.isVector3||L.isColor)z.boundary=16,z.storage=12;else if(L.isVector4)z.boundary=16,z.storage=16;else if(L.isMatrix3)z.boundary=48,z.storage=48;else if(L.isMatrix4)z.boundary=64,z.storage=64;else if(L.isTexture)A0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(L))z.boundary=16,z.storage=L.byteLength;else A0("WebGLRenderer: Unsupported uniform value type.",L);return z}function _(L){let z=L.target;z.removeEventListener("dispose",_);let I=H.indexOf(z.__bindingPointIndex);H.splice(I,1),J.deleteBuffer(W[z.id]),delete W[z.id],delete K[z.id]}function k(){for(let L in W)J.deleteBuffer(W[L]);H=[],W={},K={}}return{bind:X,update:U,dispose:k}}var Aq=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),i9=null;function wq(){if(i9===null)i9=new R6(Aq,16,16,c8,c9),i9.name="DFG_LUT",i9.minFilter=sJ,i9.magFilter=sJ,i9.wrapS=I7,i9.wrapT=I7,i9.generateMipmaps=!1,i9.needsUpdate=!0;return i9}class BW{constructor(J={}){let{canvas:Q=CH(),context:$=null,depth:Z=!0,stencil:W=!1,alpha:K=!1,antialias:H=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:X=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:N=!1,reversedDepthBuffer:E=!1,outputBufferType:G=f9}=J;this.isWebGLRenderer=!0;let q;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");q=$.getContextAttributes().alpha}else q=K;let R=G,V=new Set([JZ,e$,t$]),O=new Set([f9,z8,U6,w7,a$,r$]),F=new Uint32Array(4),_=new Int32Array(4),k=new w,L=null,z=null,I=[],A=[],M=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=y9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,p=!1,y=null,b=null,o=null,T=null;this._outputColorSpace=h9;let d=0,r=0,l=null,H0=-1,n=null,t=new VJ,$0=new VJ,w0=null,f0=new g0(0),qJ=0,n0=Q.width,s=Q.height,Z0=1,X0=null,y0=null,b0=new VJ(0,0,n0,s),j0=new VJ(0,0,n0,s),vJ=!1,a0=new V6,JJ=!1,UJ=!1,$J=new d0,pJ=new w,FJ=new VJ,aJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},CJ=!1;function PJ(){return l===null?Z0:1}let j=$;function IJ(B,f){return Q.getContext(B,f)}let GJ,AJ,C,D,S,m,J0,G0,R0,c,a,M0,I0,U0,K0,v0,h0,WJ,v,q0,i,F0,B0;try{let B={alpha:!0,depth:Z,stencil:W,antialias:H,premultipliedAlpha:Y,preserveDrawingBuffer:X,powerPreference:U,failIfMajorPerformanceCaveat:N};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${TK}`);if(Q.addEventListener("webglcontextlost",m0,!1),Q.addEventListener("webglcontextrestored",OJ,!1),Q.addEventListener("webglcontextcreationerror",YJ,!1),j===null){if(j=IJ("webgl2",B),j===null)if(IJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}e()}catch(B){throw Q.removeEventListener("webglcontextlost",m0,!1),Q.removeEventListener("webglcontextrestored",OJ,!1),Q.removeEventListener("webglcontextcreationerror",YJ,!1),l0("WebGLRenderer: "+B.message),B}function e(){if(GJ=new hN(j),GJ.init(),i=new Bq(j,GJ),AJ=new _N(j,GJ,J,i),C=new Dq(j,GJ),AJ.reversedDepthBuffer&&E)C.buffers.depth.setReversed(!0);b=j.createFramebuffer(),o=j.createFramebuffer(),T=j.createFramebuffer(),D=new gN(j),S=new Hq,m=new kq(j,GJ,C,S,AJ,i,D),J0=new fN(P),G0=new lU(j),F0=new CN(j,G0),R0=new bN(j,G0,D,F0),c=new lN(j,R0,G0,F0,D),WJ=new pN(j,AJ,m),K0=new IN(S),a=new Kq(P,J0,GJ,AJ,F0,K0),M0=new _q(P,S),I0=new Xq,U0=new Fq(GJ),h0=new zN(P,J0,C,c,q,Y),v0=new Mq(P,c,AJ),B0=new Iq(j,D,AJ,C),v=new PN(j,GJ,D),q0=new xN(j,GJ,D),D.programs=a.programs,P.capabilities=AJ,P.extensions=GJ,P.properties=S,P.renderLists=I0,P.shadowMap=v0,P.state=C,P.info=D}if(R!==f9)M=new dN(R,Q.width,Q.height,H,Z,W);let O0=new kY(P,j);this.xr=O0,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){let B=GJ.get("WEBGL_lose_context");if(B)B.loseContext()},this.forceContextRestore=function(){let B=GJ.get("WEBGL_lose_context");if(B)B.restoreContext()},this.getPixelRatio=function(){return Z0},this.setPixelRatio=function(B){if(B===void 0)return;Z0=B,this.setSize(n0,s,!1)},this.getSize=function(B){return B.set(n0,s)},this.setSize=function(B,f,u=!0){if(O0.isPresenting){A0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(n0=B,s=f,Q.width=Math.floor(B*Z0),Q.height=Math.floor(f*Z0),u===!0)Q.style.width=B+"px",Q.style.height=f+"px";if(M!==null)M.setSize(Q.width,Q.height);this.setViewport(0,0,B,f)},this.getDrawingBufferSize=function(B){return B.set(n0*Z0,s*Z0).floor()},this.setDrawingBufferSize=function(B,f,u){n0=B,s=f,Z0=u,Q.width=Math.floor(B*u),Q.height=Math.floor(f*u),this.setViewport(0,0,B,f)},this.setEffects=function(B){if(R===f9){l0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(B){for(let f=0;f<B.length;f++)if(B[f].isOutputPass===!0){A0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(B||[])},this.getCurrentViewport=function(B){return B.copy(t)},this.getViewport=function(B){return B.copy(b0)},this.setViewport=function(B,f,u,x){if(B.isVector4)b0.set(B.x,B.y,B.z,B.w);else b0.set(B,f,u,x);C.viewport(t.copy(b0).multiplyScalar(Z0).round())},this.getScissor=function(B){return B.copy(j0)},this.setScissor=function(B,f,u,x){if(B.isVector4)j0.set(B.x,B.y,B.z,B.w);else j0.set(B,f,u,x);C.scissor($0.copy(j0).multiplyScalar(Z0).round())},this.getScissorTest=function(){return vJ},this.setScissorTest=function(B){C.setScissorTest(vJ=B)},this.setOpaqueSort=function(B){X0=B},this.setTransparentSort=function(B){y0=B},this.getClearColor=function(B){return B.copy(h0.getClearColor())},this.setClearColor=function(){h0.setClearColor(...arguments)},this.getClearAlpha=function(){return h0.getClearAlpha()},this.setClearAlpha=function(){h0.setClearAlpha(...arguments)},this.clear=function(B=!0,f=!0,u=!0){let x=0;if(B){let g=!1;if(l!==null){let k0=l.texture.format;g=V.has(k0)}if(g){let k0=l.texture.type,C0=O.has(k0),D0=h0.getClearColor(),P0=h0.getClearAlpha(),S0=D0.r,i0=D0.g,QJ=D0.b;if(C0)F[0]=S0,F[1]=i0,F[2]=QJ,F[3]=P0,j.clearBufferuiv(j.COLOR,0,F);else _[0]=S0,_[1]=i0,_[2]=QJ,_[3]=P0,j.clearBufferiv(j.COLOR,0,_)}else x|=j.COLOR_BUFFER_BIT}if(f)x|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(u)x|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(x!==0)j.clear(x)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(B){B.setRenderer(this),y=B},this.dispose=function(){Q.removeEventListener("webglcontextlost",m0,!1),Q.removeEventListener("webglcontextrestored",OJ,!1),Q.removeEventListener("webglcontextcreationerror",YJ,!1),h0.dispose(),I0.dispose(),U0.dispose(),S.dispose(),J0.dispose(),c.dispose(),F0.dispose(),B0.dispose(),a.dispose(),O0.dispose(),O0.removeEventListener("sessionstart",N0),O0.removeEventListener("sessionend",L0),Y0.stop()};function m0(B){B.preventDefault(),$6("WebGLRenderer: Context Lost."),p=!0}function OJ(){$6("WebGLRenderer: Context Restored."),p=!1;let B=D.autoReset,f=v0.enabled,u=v0.autoUpdate,x=v0.needsUpdate,g=v0.type;e(),D.autoReset=B,v0.enabled=f,v0.autoUpdate=u,v0.needsUpdate=x,v0.type=g}function YJ(B){l0("WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function U9(B){let f=B.target;f.removeEventListener("dispose",U9),V9(f)}function V9(B){b6(B),S.remove(B)}function b6(B){let f=S.get(B).programs;if(f!==void 0){if(f.forEach(function(u){a.releaseProgram(u)}),B.isShaderMaterial)a.releaseShaderCache(B)}}this.renderBufferDirect=function(B,f,u,x,g,k0){if(f===null)f=aJ;let C0=g.isMesh&&g.matrixWorld.determinantAffine()<0,D0=UX(B,f,u,x,g);C.setMaterial(x,C0);let P0=u.index,S0=1;if(x.wireframe===!0){if(P0=R0.getWireframeAttribute(u),P0===void 0)return;S0=2}let i0=u.drawRange,QJ=u.attributes.position,_0=i0.start*S0,EJ=(i0.start+i0.count)*S0;if(k0!==null)_0=Math.max(_0,k0.start*S0),EJ=Math.min(EJ,(k0.start+k0.count)*S0);if(P0!==null)_0=Math.max(_0,0),EJ=Math.min(EJ,P0.count);else if(QJ!==void 0&&QJ!==null)_0=Math.max(_0,0),EJ=Math.min(EJ,QJ.count);let xJ=EJ-_0;if(xJ<0||xJ===1/0)return;F0.setup(g,x,D0,u,P0);let wJ,BJ=v;if(P0!==null)wJ=G0.get(P0),BJ=q0,BJ.setIndex(wJ);if(g.isMesh)if(x.wireframe===!0)C.setLineWidth(x.wireframeLinewidth*PJ()),BJ.setMode(j.LINES);else BJ.setMode(j.TRIANGLES);else if(g.isLine){let tJ=x.linewidth;if(tJ===void 0)tJ=1;if(C.setLineWidth(tJ*PJ()),g.isLineSegments)BJ.setMode(j.LINES);else if(g.isLineLoop)BJ.setMode(j.LINE_LOOP);else BJ.setMode(j.LINE_STRIP)}else if(g.isPoints)BJ.setMode(j.POINTS);else if(g.isSprite)BJ.setMode(j.TRIANGLES);if(g.isBatchedMesh)if(!GJ.get("WEBGL_multi_draw")){let{_multiDrawStarts:tJ,_multiDrawCounts:z0,_multiDrawCount:$9}=g,XJ=P0?G0.get(P0).bytesPerElement:1,M9=S.get(x).currentProgram.getUniforms();for(let p9=0;p9<$9;p9++)M9.setValue(j,"_gl_DrawID",p9),BJ.render(tJ[p9]/XJ,z0[p9])}else BJ.renderMultiDraw(g._multiDrawStarts,g._multiDrawCounts,g._multiDrawCount);else if(g.isInstancedMesh)BJ.renderInstances(_0,xJ,g.count);else if(u.isInstancedBufferGeometry){let tJ=u._maxInstanceCount!==void 0?u._maxInstanceCount:1/0,z0=Math.min(u.instanceCount,tJ);BJ.renderInstances(_0,xJ,z0)}else BJ.render(_0,xJ)};function m7(B,f,u,x){if(y!==null&&B.isNodeMaterial)y.setObject(x,B);if(JJ===!0)K0.setState(B,u,!1);if(B.transparent===!0&&B.side===W9&&B.forceSinglePass===!1)B.side=H9,B.needsUpdate=!0,KJ(B,f,x),B.side=k8,B.needsUpdate=!0,KJ(B,f,x),B.side=W9;else KJ(B,f,x)}this.compile=function(B,f,u=null){if(u===null)u=B;if(y!==null)y.renderStart(B,f,u);if(z=U0.get(u),z.init(f),A.push(z),u.traverseVisible(function(g){if(g.isLight&&g.layers.test(f.layers)){if(z.pushLight(g),g.castShadow)z.pushShadow(g)}}),B!==u)B.traverseVisible(function(g){if(g.isLight&&g.layers.test(f.layers)){if(z.pushLight(g),g.castShadow)z.pushShadow(g)}});if(z.setupLights(),y!==null)y.updateLights(z.state.lightsArray);if(UJ=this.localClippingEnabled,JJ=K0.init(this.clippingPlanes,UJ),JJ===!0)K0.setGlobalState(this.clippingPlanes,f);if(y!==null)v0.render(z.state.shadowsArray,u,f);let x=new Set;if(B.traverse(function(g){if(!(g.isMesh||g.isPoints||g.isLine||g.isSprite))return;let k0=g.material;if(k0)if(Array.isArray(k0))for(let C0=0;C0<k0.length;C0++){let D0=k0[C0];m7(D0,u,f,g),x.add(D0)}else m7(k0,u,f,g),x.add(k0)}),z=A.pop(),y!==null)y.renderEnd();return x},this.compileAsync=function(B,f,u=null){let x=this.compile(B,f,u);return new Promise((g)=>{function k0(){if(x.forEach(function(C0){let P0=S.get(C0).currentProgram;if(P0===void 0||P0.isReady())x.delete(C0)}),x.size===0){g(B);return}setTimeout(k0,10)}if(GJ.get("KHR_parallel_shader_compile")!==null)k0();else setTimeout(k0,10)})};let h=null;function Q0(B){if(h)h(B)}function N0(){Y0.stop()}function L0(){Y0.start()}let Y0=new UY;if(Y0.setAnimationLoop(Q0),typeof self<"u")Y0.setContext(self);this.setAnimationLoop=function(B){h=B,O0.setAnimationLoop(B),B===null?Y0.stop():Y0.start()},O0.addEventListener("sessionstart",N0),O0.addEventListener("sessionend",L0),this.render=function(B,f){if(f!==void 0&&f.isCamera!==!0){l0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;if(y!==null)y.renderStart(B,f);let u=O0.enabled===!0&&O0.isPresenting===!0,x=M!==null&&(l===null||u)&&M.begin(P,l);if(B.matrixWorldAutoUpdate===!0)B.updateMatrixWorld();if(f.parent===null&&f.matrixWorldAutoUpdate===!0)f.updateMatrixWorld();if(O0.enabled===!0&&O0.isPresenting===!0&&(M===null||M.isCompositing()===!1)){if(O0.cameraAutoUpdate===!0)O0.updateCamera(f);f=O0.getCamera()}if(B.isScene===!0)B.onBeforeRender(P,B,f,l);if(z=U0.get(B,A.length),z.init(f),z.state.textureUnits=m.getTextureUnits(),A.push(z),$J.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),a0.setFromProjectionMatrix($J,hZ,f.reversedDepth),UJ=this.localClippingEnabled,JJ=K0.init(this.clippingPlanes,UJ),L=I0.get(B,I.length),L.init(),I.push(L),O0.enabled===!0&&O0.isPresenting===!0){let C0=P.xr.getDepthSensingMesh();if(C0!==null)E0(C0,f,-1/0,P.sortObjects)}if(E0(B,f,0,P.sortObjects),L.finish(),y!==null)y.updateLights(z.state.lightsArray);if(P.sortObjects===!0)L.sort(X0,y0);if(CJ=O0.enabled===!1||O0.isPresenting===!1||O0.hasDepthSensing()===!1,CJ)h0.addToRenderList(L,B);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(JJ===!0)K0.beginShadows();let g=z.state.shadowsArray;if(v0.render(g,B,f),JJ===!0)K0.endShadows();if((x&&M.hasRenderPass())===!1){let{opaque:C0,transmissive:D0}=L;if(z.setupLights(),f.isArrayCamera){let P0=f.cameras;if(D0.length>0)for(let S0=0,i0=P0.length;S0<i0;S0++){let QJ=P0[S0];x0(C0,D0,B,QJ)}if(CJ)h0.render(B);for(let S0=0,i0=P0.length;S0<i0;S0++){let QJ=P0[S0];T0(L,B,QJ,QJ.viewport)}}else{if(D0.length>0)x0(C0,D0,B,f);if(CJ)h0.render(B);T0(L,B,f)}}if(l!==null&&r===0)m.updateMultisampleRenderTarget(l),m.updateRenderTargetMipmap(l);if(x)M.end(P);if(B.isScene===!0)B.onAfterRender(P,B,f);if(F0.resetDefaultState(),H0=-1,n=null,A.pop(),A.length>0){if(z=A[A.length-1],m.setTextureUnits(z.state.textureUnits),JJ===!0)K0.setGlobalState(P.clippingPlanes,z.state.camera)}else z=null;if(I.pop(),I.length>0)L=I[I.length-1];else L=null;if(y!==null)y.renderEnd()};function E0(B,f,u,x){if(B.visible===!1)return;if(B.layers.test(f.layers)){if(B.isGroup)u=B.renderOrder;else if(B.isLOD){if(B.autoUpdate===!0)B.update(f)}else if(B.isLightProbeGrid)z.pushLightProbeGrid(B);else if(B.isLight){if(z.pushLight(B),B.castShadow)z.pushShadow(B)}else if(B.isSprite){if(!B.frustumCulled||B.intersectsFrustum(a0)){if(x)FJ.setFromMatrixPosition(B.matrixWorld).applyMatrix4($J);let C0=c.update(B),D0=B.material;if(D0.visible)L.push(B,C0,D0,u,FJ.z,null,f)}}else if(B.isMesh||B.isLine||B.isPoints){if(!B.frustumCulled||B.intersectsFrustum(a0)){let C0=c.update(B),D0=B.material;if(x){if(B.boundingSphere!==void 0){if(B.boundingSphere===null)B.computeBoundingSphere();FJ.copy(B.boundingSphere.center)}else{if(C0.boundingSphere===null)C0.computeBoundingSphere();FJ.copy(C0.boundingSphere.center)}FJ.applyMatrix4(B.matrixWorld).applyMatrix4($J)}if(Array.isArray(D0)){let P0=C0.groups;for(let S0=0,i0=P0.length;S0<i0;S0++){let QJ=P0[S0],_0=D0[QJ.materialIndex];if(_0&&_0.visible)L.push(B,C0,_0,u,FJ.z,QJ,f)}}else if(D0.visible)L.push(B,C0,D0,u,FJ.z,null,f)}}}let k0=B.children;for(let C0=0,D0=k0.length;C0<D0;C0++)E0(k0[C0],f,u,x)}function T0(B,f,u,x){let{opaque:g,transmissive:k0,transparent:C0}=B;if(z.setupLightsView(u),JJ===!0)K0.setGlobalState(P.clippingPlanes,u);if(x)C.viewport(t.copy(x));if(g.length>0)ZJ(g,f,u);if(k0.length>0)ZJ(k0,f,u);if(C0.length>0)ZJ(C0,f,u);C.buffers.depth.setTest(!0),C.buffers.depth.setMask(!0),C.buffers.color.setMask(!0),C.setPolygonOffset(!1)}function x0(B,f,u,x){if((u.isScene===!0?u.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[x.id]===void 0){let _0=GJ.has("EXT_color_buffer_half_float")||GJ.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[x.id]=new q9(1,1,{generateMipmaps:!0,type:_0?c9:f9,minFilter:u9,samples:Math.max(4,AJ.samples),stencilBuffer:W,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:r0.workingColorSpace})}let k0=z.state.transmissionRenderTarget[x.id],C0=x.viewport||t;k0.setSize(C0.z*P.transmissionResolutionScale,C0.w*P.transmissionResolutionScale);let D0=P.getRenderTarget(),P0=P.getActiveCubeFace(),S0=P.getActiveMipmapLevel();if(P.setRenderTarget(k0),P.getClearColor(f0),qJ=P.getClearAlpha(),qJ<1)P.setClearColor(16777215,0.5);if(P.clear(),CJ)h0.render(u);let i0=P.toneMapping;P.toneMapping=y9;let QJ=x.viewport;if(x.viewport!==void 0)x.viewport=void 0;if(z.setupLightsView(x),JJ===!0)K0.setGlobalState(P.clippingPlanes,x);if(ZJ(B,u,x),m.updateMultisampleRenderTarget(k0),m.updateRenderTargetMipmap(k0),GJ.has("WEBGL_multisampled_render_to_texture")===!1){let _0=!1;for(let EJ=0,xJ=f.length;EJ<xJ;EJ++){let wJ=f[EJ],{object:BJ,geometry:tJ,material:z0,group:$9}=wJ;if(z0.side===W9&&BJ.layers.test(x.layers)){let XJ=z0.side;z0.side=H9,z0.needsUpdate=!0,RJ(BJ,u,x,tJ,z0,$9),z0.side=XJ,z0.needsUpdate=!0,_0=!0}}if(_0===!0)m.updateMultisampleRenderTarget(k0),m.updateRenderTargetMipmap(k0)}if(P.setRenderTarget(D0,P0,S0),P.setClearColor(f0,qJ),QJ!==void 0)x.viewport=QJ;P.toneMapping=i0}function ZJ(B,f,u){let x=f.isScene===!0?f.overrideMaterial:null;for(let g=0,k0=B.length;g<k0;g++){let C0=B[g],{object:D0,geometry:P0,group:S0}=C0,i0=C0.material;if(i0.allowOverride===!0&&x!==null)i0=x;if(D0.layers.test(u.layers))RJ(D0,f,u,P0,i0,S0)}}function RJ(B,f,u,x,g,k0){if(y!==null&&g.isNodeMaterial)y.setObject(B,g);if(B.onBeforeRender(P,f,u,x,g,k0),B.modelViewMatrix.multiplyMatrices(u.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),g.onBeforeRender(P,f,u,x,B,k0),g.transparent===!0&&g.side===W9&&g.forceSinglePass===!1)g.side=H9,g.needsUpdate=!0,P.renderBufferDirect(u,f,x,g,B,k0),g.side=k8,g.needsUpdate=!0,P.renderBufferDirect(u,f,x,g,B,k0),g.side=W9;else P.renderBufferDirect(u,f,x,g,B,k0);B.onAfterRender(P,f,u,x,g,k0)}function KJ(B,f,u){if(f.isScene!==!0)f=aJ;let x=S.get(B),g=z.state.lights,k0=z.state.shadowsArray,C0=g.state.version,D0=a.getParameters(B,g.state,k0,f,u,z.state.lightProbeGridArray),P0=a.getProgramCacheKey(D0),S0=x.programs;x.environment=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?f.environment:null,x.fog=f.fog;let i0=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap;if(x.envMap=J0.get(B.envMap||x.environment,i0),x.envMapRotation=x.environment!==null&&B.envMap===null?f.environmentRotation:B.envMapRotation,S0===void 0)B.addEventListener("dispose",U9),S0=new Map,x.programs=S0;let QJ=S0.get(P0);if(QJ!==void 0){if(x.currentProgram===QJ&&x.lightsStateVersion===C0)return rJ(B,D0),QJ}else{if(D0.uniforms=a.getUniforms(B),y!==null&&B.isNodeMaterial)y.build(B,u,D0);B.onBeforeCompile(D0,P),QJ=a.acquireProgram(D0,P0),S0.set(P0,QJ),x.uniforms=D0.uniforms}let _0=x.uniforms;if(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)_0.clippingPlanes=K0.uniform;if(rJ(B,D0),x.needsLights=NX(B),x.lightsStateVersion=C0,x.needsLights)_0.ambientLightColor.value=g.state.ambient,_0.lightProbe.value=g.state.probe,_0.sunLights.value=g.state.sun,_0.sunLightShadows.value=g.state.sunShadow,_0.directionalLights.value=g.state.directional,_0.directionalLightShadows.value=g.state.directionalShadow,_0.spotLights.value=g.state.spot,_0.spotLightShadows.value=g.state.spotShadow,_0.rectAreaLights.value=g.state.rectArea,_0.ltc_1.value=g.state.rectAreaLTC1,_0.ltc_2.value=g.state.rectAreaLTC2,_0.pointLights.value=g.state.point,_0.pointLightShadows.value=g.state.pointShadow,_0.hemisphereLights.value=g.state.hemi,_0.sunShadowMatrix.value=g.state.sunShadowMatrix,_0.sunShadowCascade.value=g.state.sunShadowCascade,_0.directionalShadowMatrix.value=g.state.directionalShadowMatrix,_0.spotLightMatrix.value=g.state.spotLightMatrix,_0.spotLightMap.value=g.state.spotLightMap,_0.pointShadowMatrix.value=g.state.pointShadowMatrix;return x.lightProbeGrid=z.state.lightProbeGridArray.length>0,x.currentProgram=QJ,x.uniformsList=null,QJ}function g9(B){if(B.uniformsList===null){let f=B.currentProgram.getUniforms();B.uniformsList=v6.seqWithValue(f.seq,B.uniforms)}return B.uniformsList}function rJ(B,f){let u=S.get(B);u.outputColorSpace=f.outputColorSpace,u.batching=f.batching,u.batchingColor=f.batchingColor,u.instancing=f.instancing,u.instancingColor=f.instancingColor,u.instancingMorph=f.instancingMorph,u.skinning=f.skinning,u.morphTargets=f.morphTargets,u.morphNormals=f.morphNormals,u.morphColors=f.morphColors,u.morphTargetsCount=f.morphTargetsCount,u.numClippingPlanes=f.numClippingPlanes,u.numIntersection=f.numClipIntersection,u.vertexAlphas=f.vertexAlphas,u.vertexTangents=f.vertexTangents,u.toneMapping=f.toneMapping}function H$(B,f){if(B.length===0)return null;if(B.length===1)return B[0].texture!==null?B[0]:null;k.setFromMatrixPosition(f.matrixWorld);for(let u=0,x=B.length;u<x;u++){let g=B[u];if(g.texture!==null&&g.boundingBox.containsPoint(k))return g}return null}function UX(B,f,u,x,g){if(f.isScene!==!0)f=aJ;m.resetTextureUnits();let k0=f.fog,C0=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?f.environment:null,D0=l===null?P.outputColorSpace:l.isXRRenderTarget===!0?l.texture.colorSpace:r0.workingColorSpace,P0=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,S0=J0.get(x.envMap||C0,P0),i0=x.vertexColors===!0&&!!u.attributes.color&&u.attributes.color.itemSize===4,QJ=!!u.attributes.tangent&&(!!x.normalMap||x.anisotropy>0),_0=!!u.morphAttributes.position,EJ=!!u.morphAttributes.normal,xJ=!!u.morphAttributes.color,wJ=y9;if(x.toneMapped){if(l===null||l.isXRRenderTarget===!0)wJ=P.toneMapping}let BJ=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,tJ=BJ!==void 0?BJ.length:0,z0=S.get(x),$9=z.state.lights;if(JJ===!0){if(UJ===!0||B!==n){let _J=B===n&&x.id===H0;K0.setState(x,B,_J)}}let XJ=!1;if(x.version===z0.__version){if(z0.needsLights&&z0.lightsStateVersion!==$9.state.version)XJ=!0;else if(z0.outputColorSpace!==D0)XJ=!0;else if(g.isBatchedMesh&&z0.batching===!1)XJ=!0;else if(!g.isBatchedMesh&&z0.batching===!0)XJ=!0;else if(g.isBatchedMesh&&z0.batchingColor===!0&&g._colorsTexture===null)XJ=!0;else if(g.isBatchedMesh&&z0.batchingColor===!1&&g._colorsTexture!==null)XJ=!0;else if(g.isInstancedMesh&&z0.instancing===!1)XJ=!0;else if(!g.isInstancedMesh&&z0.instancing===!0)XJ=!0;else if(g.isSkinnedMesh&&z0.skinning===!1)XJ=!0;else if(!g.isSkinnedMesh&&z0.skinning===!0)XJ=!0;else if(g.isInstancedMesh&&z0.instancingColor===!0&&g.instanceColor===null)XJ=!0;else if(g.isInstancedMesh&&z0.instancingColor===!1&&g.instanceColor!==null)XJ=!0;else if(g.isInstancedMesh&&z0.instancingMorph===!0&&g.morphTexture===null)XJ=!0;else if(g.isInstancedMesh&&z0.instancingMorph===!1&&g.morphTexture!==null)XJ=!0;else if(z0.envMap!==S0)XJ=!0;else if(x.fog===!0&&z0.fog!==k0)XJ=!0;else if(z0.numClippingPlanes!==void 0&&(z0.numClippingPlanes!==K0.numPlanes||z0.numIntersection!==K0.numIntersection))XJ=!0;else if(z0.vertexAlphas!==i0)XJ=!0;else if(z0.vertexTangents!==QJ)XJ=!0;else if(z0.morphTargets!==_0)XJ=!0;else if(z0.morphNormals!==EJ)XJ=!0;else if(z0.morphColors!==xJ)XJ=!0;else if(z0.toneMapping!==wJ)XJ=!0;else if(z0.morphTargetsCount!==tJ)XJ=!0;else if(!!z0.lightProbeGrid!==z.state.lightProbeGridArray.length>0)XJ=!0}else XJ=!0,z0.__version=x.version;let M9=z0.currentProgram;if(XJ===!0){if(M9=KJ(x,f,g),y&&x.isNodeMaterial)y.onUpdateProgram(x,M9,z0)}let p9=!1,U8=!1,$7=!1,DJ=M9.getUniforms(),fJ=z0.uniforms;if(C.useProgram(M9.program))p9=!0,U8=!0,$7=!0;if(x.id!==H0)H0=x.id,U8=!0;if(z0.needsLights){let _J=H$(z.state.lightProbeGridArray,g);if(z0.lightProbeGrid!==_J)z0.lightProbeGrid=_J,U8=!0}if(p9||n!==B){if(C.buffers.depth.getReversed()&&B.reversedDepth!==!0)B._reversedDepth=!0,B.updateProjectionMatrix();DJ.setValue(j,"projectionMatrix",B.projectionMatrix),DJ.setValue(j,"viewMatrix",B.matrixWorldInverse);let N8=DJ.map.cameraPosition;if(N8!==void 0)N8.setValue(j,pJ.setFromMatrixPosition(B.matrixWorld));if(AJ.logarithmicDepthBuffer)DJ.setValue(j,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2));if(x.isMeshPhongMaterial||x.isMeshToonMaterial||x.isMeshLambertMaterial||x.isMeshBasicMaterial||x.isMeshStandardMaterial||x.isShaderMaterial)DJ.setValue(j,"isOrthographic",B.isOrthographicCamera===!0);if(n!==B)n=B,U8=!0,$7=!0}if(z0.needsLights){if($9.state.sunShadowMap.length>0)DJ.setValue(j,"sunShadowMap",$9.state.sunShadowMap,m);if($9.state.directionalShadowMap.length>0)DJ.setValue(j,"directionalShadowMap",$9.state.directionalShadowMap,m);if($9.state.spotShadowMap.length>0)DJ.setValue(j,"spotShadowMap",$9.state.spotShadowMap,m);if($9.state.pointShadowMap.length>0)DJ.setValue(j,"pointShadowMap",$9.state.pointShadowMap,m)}if(g.isSkinnedMesh){DJ.setOptional(j,g,"bindMatrix"),DJ.setOptional(j,g,"bindMatrixInverse");let _J=g.skeleton;if(_J){if(_J.boneTexture===null)_J.computeBoneTexture();DJ.setValue(j,"boneTexture",_J.boneTexture,m)}}if(g.isBatchedMesh){if(DJ.setOptional(j,g,"batchingTexture"),DJ.setValue(j,"batchingTexture",g._matricesTexture,m),DJ.setOptional(j,g,"batchingIdTexture"),DJ.setValue(j,"batchingIdTexture",g._indirectTexture,m),DJ.setOptional(j,g,"batchingColorTexture"),g._colorsTexture!==null)DJ.setValue(j,"batchingColorTexture",g._colorsTexture,m)}let G8=u.morphAttributes;if(G8.position!==void 0||G8.normal!==void 0||G8.color!==void 0)WJ.update(g,u,M9);if(U8||z0.receiveShadow!==g.receiveShadow)z0.receiveShadow=g.receiveShadow,DJ.setValue(j,"receiveShadow",g.receiveShadow);if((x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial)&&x.envMap===null&&f.environment!==null)fJ.envMapIntensity.value=f.environmentIntensity;if(fJ.dfgLUT!==void 0)fJ.dfgLUT.value=wq();if(U8){if(DJ.setValue(j,"toneMappingExposure",P.toneMappingExposure),z0.needsLights)GX(fJ,$7);if(k0&&x.fog===!0)M0.refreshFogUniforms(fJ,k0);if(M0.refreshMaterialUniforms(fJ,x,Z0,s,z.state.transmissionRenderTarget[B.id]),z0.needsLights&&z0.lightProbeGrid){let _J=z0.lightProbeGrid;fJ.probesSH.value=_J.texture,fJ.probesMin.value.copy(_J.boundingBox.min),fJ.probesMax.value.copy(_J.boundingBox.max),fJ.probesResolution.value.copy(_J.resolution)}v6.upload(j,g9(z0),fJ,m)}if(x.isShaderMaterial&&x.uniformsNeedUpdate===!0)v6.upload(j,g9(z0),fJ,m),x.uniformsNeedUpdate=!1;if(x.isSpriteMaterial)DJ.setValue(j,"center",g.center);if(DJ.setValue(j,"modelViewMatrix",g.modelViewMatrix),DJ.setValue(j,"normalMatrix",g.normalMatrix),DJ.setValue(j,"modelMatrix",g.matrixWorld),x.uniformsGroups!==void 0){let _J=x.uniformsGroups;for(let N8=0,Z7=_J.length;N8<Z7;N8++){let pW=_J[N8];B0.update(pW,M9),B0.bind(pW,M9)}}return M9}function GX(B,f){B.ambientLightColor.needsUpdate=f,B.lightProbe.needsUpdate=f,B.sunLights.needsUpdate=f,B.sunLightShadows.needsUpdate=f,B.directionalLights.needsUpdate=f,B.directionalLightShadows.needsUpdate=f,B.pointLights.needsUpdate=f,B.pointLightShadows.needsUpdate=f,B.spotLights.needsUpdate=f,B.spotLightShadows.needsUpdate=f,B.rectAreaLights.needsUpdate=f,B.hemisphereLights.needsUpdate=f}function NX(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return d},this.getActiveMipmapLevel=function(){return r},this.getRenderTarget=function(){return l},this.setRenderTargetTextures=function(B,f,u){let x=S.get(B);if(x.__autoAllocateDepthBuffer=B.resolveDepthBuffer===!1,x.__autoAllocateDepthBuffer===!1)x.__useRenderToTexture=!1;S.get(B.texture).__webglTexture=f,S.get(B.depthTexture).__webglTexture=x.__autoAllocateDepthBuffer?void 0:u,x.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(B,f){let u=S.get(B);u.__webglFramebuffer=f,u.__useDefaultFramebuffer=f===void 0},this.setRenderTarget=function(B,f=0,u=0){l=B,d=f,r=u;let x=null,g=!1,k0=!1;if(B){let D0=S.get(B);if(D0.__useDefaultFramebuffer!==void 0){C.bindFramebuffer(j.FRAMEBUFFER,D0.__webglFramebuffer),t.copy(B.viewport),$0.copy(B.scissor),w0=B.scissorTest,C.viewport(t),C.scissor($0),C.setScissorTest(w0),H0=-1;return}else if(D0.__webglFramebuffer===void 0)m.setupRenderTarget(B);else if(D0.__hasExternalTextures)m.rebindTextures(B,S.get(B.texture).__webglTexture,S.get(B.depthTexture).__webglTexture);else if(B.depthBuffer){let i0=B.depthTexture;if(D0.__boundDepthTexture!==i0){if(i0!==null&&S.has(i0)&&(B.width!==i0.image.width||B.height!==i0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");m.setupDepthRenderbuffer(B)}}let P0=B.texture;if(P0.isData3DTexture||P0.isDataArrayTexture||P0.isCompressedArrayTexture)k0=!0;let S0=S.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget){if(Array.isArray(S0[f]))x=S0[f][u];else x=S0[f];g=!0}else if(B.samples>0&&m.useMultisampledRTT(B)===!1)x=S.get(B).__webglMultisampledFramebuffer;else if(Array.isArray(S0))x=S0[u];else x=S0;t.copy(B.viewport),$0.copy(B.scissor),w0=B.scissorTest}else t.copy(b0).multiplyScalar(Z0).floor(),$0.copy(j0).multiplyScalar(Z0).floor(),w0=vJ;if(u!==0)x=b;if(C.bindFramebuffer(j.FRAMEBUFFER,x))C.drawBuffers(B,x);if(C.viewport(t),C.scissor($0),C.setScissorTest(w0),g){let D0=S.get(B.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+f,D0.__webglTexture,u)}else if(k0){let D0=f;for(let P0=0;P0<B.textures.length;P0++){let S0=S.get(B.textures[P0]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+P0,S0.__webglTexture,u,D0)}}else if(B!==null&&u!==0){let D0=S.get(B.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,D0.__webglTexture,u)}H0=-1};function gW(B){let f=S.get(B);if(f.__readFormat!==B.format||f.__readType!==B.type)f.__readFormat=B.format,f.__readType=B.type,f.__formatReadable=AJ.textureFormatReadable(B.format),f.__typeReadable=AJ.textureTypeReadable(B.type);return f}if(this.readRenderTargetPixels=function(B,f,u,x,g,k0,C0,D0=0){if(!(B&&B.isWebGLRenderTarget)){l0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let P0=S.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&C0!==void 0)P0=P0[C0];if(P0){C.bindFramebuffer(j.FRAMEBUFFER,P0);try{let S0=B.textures[D0],i0=S0.format,QJ=S0.type;if(B.textures.length>1)j.readBuffer(j.COLOR_ATTACHMENT0+D0);let _0=gW(S0);if(_0.__formatReadable===!1){l0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(_0.__typeReadable===!1){l0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(f>=0&&f<=B.width-x&&(u>=0&&u<=B.height-g))j.readPixels(f,u,x,g,i.convert(i0),i.convert(QJ),k0)}finally{let S0=l!==null?S.get(l).__webglFramebuffer:null;C.bindFramebuffer(j.FRAMEBUFFER,S0)}}},this.readRenderTargetPixelsAsync=async function(B,f,u,x,g,k0,C0,D0=0){if(!(B&&B.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let P0=S.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&C0!==void 0)P0=P0[C0];if(P0)if(f>=0&&f<=B.width-x&&(u>=0&&u<=B.height-g)){C.bindFramebuffer(j.FRAMEBUFFER,P0);let S0=B.textures[D0],i0=S0.format,QJ=S0.type;if(B.textures.length>1)j.readBuffer(j.COLOR_ATTACHMENT0+D0);let _0=gW(S0);if(_0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(_0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let EJ=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,EJ),j.bufferData(j.PIXEL_PACK_BUFFER,k0.byteLength,j.STREAM_READ),j.readPixels(f,u,x,g,i.convert(i0),i.convert(QJ),0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null);let xJ=l!==null?S.get(l).__webglFramebuffer:null;C.bindFramebuffer(j.FRAMEBUFFER,xJ);let wJ=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await _H(j,wJ,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,EJ),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,k0),j.bindBuffer(j.PIXEL_PACK_BUFFER,null),j.deleteBuffer(EJ),j.deleteSync(wJ),k0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(B,f=null,u=0){let x=Math.pow(2,-u),g=Math.floor(B.image.width*x),k0=Math.floor(B.image.height*x),C0=f!==null?f.x:0,D0=f!==null?f.y:0;m.setTexture2D(B,0),j.copyTexSubImage2D(j.TEXTURE_2D,u,0,0,C0,D0,g,k0),C.unbindTexture()},this.copyTextureToTexture=function(B,f,u=null,x=null,g=0,k0=0){let C0,D0,P0,S0,i0,QJ,_0,EJ,xJ,wJ=B.isCompressedTexture?B.mipmaps[k0]:B.image;if(u!==null)C0=u.max.x-u.min.x,D0=u.max.y-u.min.y,P0=u.isBox3?u.max.z-u.min.z:1,S0=u.min.x,i0=u.min.y,QJ=u.isBox3?u.min.z:0;else{let fJ=Math.pow(2,-g);if(C0=Math.floor(wJ.width*fJ),D0=Math.floor(wJ.height*fJ),B.isDataArrayTexture)P0=wJ.depth;else if(B.isData3DTexture)P0=Math.floor(wJ.depth*fJ);else P0=1;S0=0,i0=0,QJ=0}if(x!==null)_0=x.x,EJ=x.y,xJ=x.z;else _0=0,EJ=0,xJ=0;let BJ=i.convert(f.format),tJ=i.convert(f.type),z0;if(f.isData3DTexture)m.setTexture3D(f,0),z0=j.TEXTURE_3D;else if(f.isDataArrayTexture||f.isCompressedArrayTexture)m.setTexture2DArray(f,0),z0=j.TEXTURE_2D_ARRAY;else m.setTexture2D(f,0),z0=j.TEXTURE_2D;C.activeTexture(j.TEXTURE0),C.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,f.flipY),C.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),C.pixelStorei(j.UNPACK_ALIGNMENT,f.unpackAlignment);let $9=C.getParameter(j.UNPACK_ROW_LENGTH),XJ=C.getParameter(j.UNPACK_IMAGE_HEIGHT),M9=C.getParameter(j.UNPACK_SKIP_PIXELS),p9=C.getParameter(j.UNPACK_SKIP_ROWS),U8=C.getParameter(j.UNPACK_SKIP_IMAGES);C.pixelStorei(j.UNPACK_ROW_LENGTH,wJ.width),C.pixelStorei(j.UNPACK_IMAGE_HEIGHT,wJ.height),C.pixelStorei(j.UNPACK_SKIP_PIXELS,S0),C.pixelStorei(j.UNPACK_SKIP_ROWS,i0),C.pixelStorei(j.UNPACK_SKIP_IMAGES,QJ);let $7=B.isDataArrayTexture||B.isData3DTexture,DJ=f.isDataArrayTexture||f.isData3DTexture;if(B.isDepthTexture){let fJ=S.get(B),G8=S.get(f),_J=S.get(fJ.__renderTarget),N8=S.get(G8.__renderTarget);C.bindFramebuffer(j.READ_FRAMEBUFFER,_J.__webglFramebuffer),C.bindFramebuffer(j.DRAW_FRAMEBUFFER,N8.__webglFramebuffer);for(let Z7=0;Z7<P0;Z7++){if($7)j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,S.get(B).__webglTexture,g,QJ+Z7),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,S.get(f).__webglTexture,k0,xJ+Z7);j.blitFramebuffer(S0,i0,C0,D0,_0,EJ,C0,D0,j.DEPTH_BUFFER_BIT,j.NEAREST)}C.bindFramebuffer(j.READ_FRAMEBUFFER,null),C.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(g!==0||B.isRenderTargetTexture||S.has(B)){let fJ=S.get(B),G8=S.get(f);C.bindFramebuffer(j.READ_FRAMEBUFFER,o),C.bindFramebuffer(j.DRAW_FRAMEBUFFER,T);for(let _J=0;_J<P0;_J++){if($7)j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,fJ.__webglTexture,g,QJ+_J);else j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,fJ.__webglTexture,g);if(DJ)j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,G8.__webglTexture,k0,xJ+_J);else j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,G8.__webglTexture,k0);if(g!==0)j.blitFramebuffer(S0,i0,C0,D0,_0,EJ,C0,D0,j.COLOR_BUFFER_BIT,j.NEAREST);else if(DJ)j.copyTexSubImage3D(z0,k0,_0,EJ,xJ+_J,S0,i0,C0,D0);else j.copyTexSubImage2D(z0,k0,_0,EJ,S0,i0,C0,D0)}C.bindFramebuffer(j.READ_FRAMEBUFFER,null),C.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(DJ)if(B.isDataTexture||B.isData3DTexture)j.texSubImage3D(z0,k0,_0,EJ,xJ,C0,D0,P0,BJ,tJ,wJ.data);else if(f.isCompressedArrayTexture)j.compressedTexSubImage3D(z0,k0,_0,EJ,xJ,C0,D0,P0,BJ,wJ.data);else j.texSubImage3D(z0,k0,_0,EJ,xJ,C0,D0,P0,BJ,tJ,wJ);else if(B.isDataTexture)j.texSubImage2D(j.TEXTURE_2D,k0,_0,EJ,C0,D0,BJ,tJ,wJ.data);else if(B.isCompressedTexture)j.compressedTexSubImage2D(j.TEXTURE_2D,k0,_0,EJ,wJ.width,wJ.height,BJ,wJ.data);else j.texSubImage2D(j.TEXTURE_2D,k0,_0,EJ,C0,D0,BJ,tJ,wJ);if(C.pixelStorei(j.UNPACK_ROW_LENGTH,$9),C.pixelStorei(j.UNPACK_IMAGE_HEIGHT,XJ),C.pixelStorei(j.UNPACK_SKIP_PIXELS,M9),C.pixelStorei(j.UNPACK_SKIP_ROWS,p9),C.pixelStorei(j.UNPACK_SKIP_IMAGES,U8),k0===0&&f.generateMipmaps)j.generateMipmap(z0);C.unbindTexture()},this.initRenderTarget=function(B){if(S.get(B).__webglFramebuffer===void 0)m.setupRenderTarget(B)},this.initTexture=function(B){if(B.isCubeTexture)m.setTextureCube(B,0);else if(B.isData3DTexture)m.setTexture3D(B,0);else if(B.isDataArrayTexture||B.isCompressedArrayTexture)m.setTexture2DArray(B,0);else m.setTexture2D(B,0);C.unbindTexture()},this.resetState=function(){d=0,r=0,l=null,C.reset(),F0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hZ}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=r0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=r0._getUnpackColorSpace()}}function CY(J,Q=!1){let $=J[0].index!==null,Z=new Set(Object.keys(J[0].attributes)),W=new Set(Object.keys(J[0].morphAttributes)),K={},H={},Y=J[0].morphTargetsRelative,X=new SJ,U=0;for(let N=0;N<J.length;++N){let E=J[N],G=0;if($!==(E.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let q in E.attributes){if(!Z.has(q))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+'. All geometries must have compatible attributes; make sure "'+q+'" attribute exists among all geometries, or in none of them.'),null;if(K[q]===void 0)K[q]=[];K[q].push(E.attributes[q]),G++}if(G!==Z.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". Make sure all geometries have the same number of attributes."),null;if(Y!==E.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let q in E.morphAttributes){if(!W.has(q))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+".  .morphAttributes must be consistent throughout all geometries."),null;if(H[q]===void 0)H[q]=[];H[q].push(E.morphAttributes[q])}if(Q){let q;if($)q=E.index.count;else if(E.attributes.position!==void 0)q=E.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". The geometry must have either an index or a position attribute"),null;X.addGroup(U,q,N),U+=q}}if($){let N=0,E=[];for(let G=0;G<J.length;++G){let q=J[G].index;for(let R=0;R<q.count;++R)E.push(q.getX(R)+N);N+=J[G].attributes.position.count}X.setIndex(E)}for(let N in K){let E=zY(K[N]);if(!E)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+N+" attribute."),null;X.setAttribute(N,E)}for(let N in H){let E=H[N][0].length;if(E===0)continue;X.morphAttributes=X.morphAttributes||{},X.morphAttributes[N]=[];for(let G=0;G<E;++G){let q=[];for(let V=0;V<H[N].length;++V)q.push(H[N][V][G]);let R=zY(q);if(!R)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+N+" morphAttribute."),null;X.morphAttributes[N].push(R)}}return X}function zY(J){let Q,$,Z,W=-1,K=0;for(let U=0;U<J.length;++U){let N=J[U];if(Q===void 0)Q=N.array.constructor;if(Q!==N.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if($===void 0)$=N.itemSize;if($!==N.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(Z===void 0)Z=N.normalized;if(Z!==N.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(W===-1)W=N.gpuType;if(W!==N.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;K+=N.count*$}let H=new Q(K),Y=new mJ(H,$,Z),X=0;for(let U=0;U<J.length;++U){let N=J[U];if(N.isInterleavedBufferAttribute){let E=X/$;for(let G=0,q=N.count;G<q;G++)for(let R=0;R<$;R++){let V=N.getComponent(G,R);Y.setComponent(G+E,R,V)}}else H.set(N.array,X);X+=N.count*$}if(W!==void 0)Y.gpuType=W;return Y}function CW(J,Q){if(Q===jZ)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if(Q===T7||Q===G6){let $=J.getIndex();if($===null){let K=[],H=J.getAttribute("position");if(H!==void 0){for(let Y=0;Y<H.count;Y++)K.push(Y);J.setIndex(K),$=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let Z=$.count-2,W=[];if(Q===T7)for(let K=1;K<=Z;K++)W.push($.getX(0)),W.push($.getX(K)),W.push($.getX(K+1));else for(let K=0;K<Z;K++)if(K%2===0)W.push($.getX(K)),W.push($.getX(K+1)),W.push($.getX(K+2));else W.push($.getX(K+2)),W.push($.getX(K+1)),W.push($.getX(K));if(W.length/3!==Z)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return J.setIndex(W),J.clearGroups(),J}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",Q),J}function $$(J){let Q=new Map,$=new Map,Z=J.clone();return PY(J,Z,function(W,K){Q.set(K,W),$.set(W,K)}),Z.traverse(function(W){if(!W.isSkinnedMesh)return;let K=W,H=Q.get(W),Y=H.skeleton.bones;K.skeleton=H.skeleton.clone(),K.bindMatrix.copy(H.bindMatrix),K.skeleton.bones=Y.map(function(X){return $.get(X)}),K.bind(K.skeleton,K.bindMatrix)}),Z}function PY(J,Q,$){$(J,Q);for(let Z=0;Z<J.children.length;Z++)PY(J.children[Z],Q.children[Z],$)}class SW extends Y8{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(Q){return new yY(Q)}),this.register(function(Q){return new vY(Q)}),this.register(function(Q){return new dY(Q)}),this.register(function(Q){return new uY(Q)}),this.register(function(Q){return new cY(Q)}),this.register(function(Q){return new hY(Q)}),this.register(function(Q){return new bY(Q)}),this.register(function(Q){return new xY(Q)}),this.register(function(Q){return new gY(Q)}),this.register(function(Q){return new jY(Q)}),this.register(function(Q){return new pY(Q)}),this.register(function(Q){return new fY(Q)}),this.register(function(Q){return new mY(Q)}),this.register(function(Q){return new lY(Q)}),this.register(function(Q){return new TY(Q)}),this.register(function(Q){return new AW(Q,e0.EXT_MESHOPT_COMPRESSION)}),this.register(function(Q){return new AW(Q,e0.KHR_MESHOPT_COMPRESSION)}),this.register(function(Q){return new nY(Q)})}load(J,Q,$,Z){let W=this,K;if(this.resourcePath!=="")K=this.resourcePath;else if(this.path!==""){let X=T8.extractUrlBase(J);K=T8.resolveURL(X,this.path)}else K=T8.extractUrlBase(J);this.manager.itemStart(J);let H=function(X){if(Z)Z(X);else console.error(X);W.manager.itemError(J),W.manager.itemEnd(J)},Y=new I6(this.manager);Y.setPath(this.path),Y.setResponseType("arraybuffer"),Y.setRequestHeader(this.requestHeader),Y.setWithCredentials(this.withCredentials),Y.load(J,function(X){try{W.parse(X,K,function(U){Q(U),W.manager.itemEnd(J)},H)}catch(U){H(U)}},$,H)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,Q,$,Z){let W,K={},H={},Y=new TextDecoder;if(typeof J==="string")W=JSON.parse(J);else if(J instanceof ArrayBuffer)if(Y.decode(new Uint8Array(J,0,4))===sY){try{K[e0.KHR_BINARY_GLTF]=new iY(J)}catch(N){if(Z)Z(N);return}W=JSON.parse(K[e0.KHR_BINARY_GLTF].content)}else W=JSON.parse(Y.decode(J));else W=J;if(W.asset===void 0||W.asset.version[0]<2){if(Z)Z(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let X=new eY(W,{path:Q||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});X.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let N=this.pluginCallbacks[U](X);if(!N.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");H[N.name]=N,K[N.name]=!0}if(W.extensionsUsed)for(let U=0;U<W.extensionsUsed.length;++U){let N=W.extensionsUsed[U],E=W.extensionsRequired||[];switch(N){case e0.KHR_MATERIALS_UNLIT:K[N]=new SY;break;case e0.KHR_DRACO_MESH_COMPRESSION:K[N]=new oY(W,this.dracoLoader);break;case e0.KHR_TEXTURE_TRANSFORM:K[N]=new aY;break;case e0.KHR_MESH_QUANTIZATION:K[N]=new rY;break;default:if(E.indexOf(N)>=0&&H[N]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+N+'".')}}X.setExtensions(K),X.setPlugins(H),X.parse($,Z)}parseAsync(J,Q){let $=this;return new Promise(function(Z,W){$.parse(J,Q,Z,W)})}}function Tq(){let J={};return{get:function(Q){return J[Q]},add:function(Q,$){J[Q]=$},remove:function(Q){delete J[Q]},removeAll:function(){J={}}}}function bJ(J,Q,$){let Z=J.json.materials[Q];if(Z.extensions&&Z.extensions[$])return Z.extensions[$];return null}var e0={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class TY{constructor(J){this.parser=J,this.name=e0.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,Q=this.parser.json.nodes||[];for(let $=0,Z=Q.length;$<Z;$++){let W=Q[$];if(W.extensions&&W.extensions[this.name]&&W.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,W.extensions[this.name].light)}}_loadLight(J){let Q=this.parser,$="light:"+J,Z=Q.cache.get($);if(Z)return Z;let W=Q.json,Y=((W.extensions&&W.extensions[this.name]||{}).lights||[])[J],X,U=new g0(16777215);if(Y.color!==void 0)U.setRGB(Y.color[0],Y.color[1],Y.color[2],E9);let N=Y.range!==void 0?Y.range:0;switch(Y.type){case"directional":X=new b7(U),X.target.position.set(0,0,-1),X.add(X.target);break;case"point":X=new h7(U),X.distance=N;break;case"spot":X=new f7(U),X.distance=N,Y.spot=Y.spot||{},Y.spot.innerConeAngle=Y.spot.innerConeAngle!==void 0?Y.spot.innerConeAngle:0,Y.spot.outerConeAngle=Y.spot.outerConeAngle!==void 0?Y.spot.outerConeAngle:Math.PI/4,X.angle=Y.spot.outerConeAngle,X.penumbra=1-Y.spot.innerConeAngle/Y.spot.outerConeAngle,X.target.position.set(0,0,-1),X.add(X.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+Y.type)}if(X.position.set(0,0,0),a9(X,Y),Y.intensity!==void 0)X.intensity=Y.intensity;return X.name=Q.createUniqueName(Y.name||"light_"+J),Z=Promise.resolve(X),Q.cache.add($,Z),Z}getDependency(J,Q){if(J!=="light")return;return this._loadLight(Q)}createNodeAttachment(J){let Q=this,$=this.parser,W=$.json.nodes[J],H=(W.extensions&&W.extensions[this.name]||{}).light;if(H===void 0)return null;return this._loadLight(H).then(function(Y){return $._getNodeRef(Q.cache,H,Y)})}}class SY{constructor(){this.name=e0.KHR_MATERIALS_UNLIT}getMaterialType(){return oJ}extendParams(J,Q,$){let Z=[];J.color=new g0(1,1,1),J.opacity=1;let W=Q.pbrMetallicRoughness;if(W){if(Array.isArray(W.baseColorFactor)){let K=W.baseColorFactor;J.color.setRGB(K[0],K[1],K[2],E9),J.opacity=K[3]}if(W.baseColorTexture!==void 0)Z.push($.assignTexture(J,"map",W.baseColorTexture,h9))}return Promise.all(Z)}}class jY{constructor(J){this.parser=J,this.name=e0.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,Q){let $=bJ(this.parser,J,this.name);if($===null)return Promise.resolve();if($.emissiveStrength!==void 0)Q.emissiveIntensity=$.emissiveStrength;return Promise.resolve()}}class yY{constructor(J){this.parser=J,this.name=e0.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){return bJ(this.parser,J,this.name)!==null?R9:null}extendMaterialParams(J,Q){let $=bJ(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.clearcoatFactor!==void 0)Q.clearcoat=$.clearcoatFactor;if($.clearcoatTexture!==void 0)Z.push(this.parser.assignTexture(Q,"clearcoatMap",$.clearcoatTexture));if($.clearcoatRoughnessFactor!==void 0)Q.clearcoatRoughness=$.clearcoatRoughnessFactor;if($.clearcoatRoughnessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"clearcoatRoughnessMap",$.clearcoatRoughnessTexture));if($.clearcoatNormalTexture!==void 0){if(Z.push(this.parser.assignTexture(Q,"clearcoatNormalMap",$.clearcoatNormalTexture)),$.clearcoatNormalTexture.scale!==void 0){let W=$.clearcoatNormalTexture.scale;Q.clearcoatNormalScale=new W0(W,W)}}return Promise.all(Z)}}class vY{constructor(J){this.parser=J,this.name=e0.KHR_MATERIALS_DISPERSION}getMaterialType(J){return bJ(this.parser,J,this.name)!==null?R9:null}extendMaterialParams(J,Q){let $=bJ(this.parser,J,this.name);if($===null)return Promise.resolve();return Q.dispersion=$.dispersion!==void 0?$.dispersion:0,Promise.resolve()}}class fY{constructor(J){this.parser=J,this.name=e0.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){return bJ(this.parser,J,this.name)!==null?R9:null}extendMaterialParams(J,Q){let $=bJ(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.iridescenceFactor!==void 0)Q.iridescence=$.iridescenceFactor;if($.iridescenceTexture!==void 0)Z.push(this.parser.assignTexture(Q,"iridescenceMap",$.iridescenceTexture));if($.iridescenceIor!==void 0)Q.iridescenceIOR=$.iridescenceIor;if(Q.iridescenceThicknessRange===void 0)Q.iridescenceThicknessRange=[100,400];if($.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessRange[0]=$.iridescenceThicknessMinimum;if($.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessRange[1]=$.iridescenceThicknessMaximum;if($.iridescenceThicknessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"iridescenceThicknessMap",$.iridescenceThicknessTexture));return Promise.all(Z)}}class hY{constructor(J){this.parser=J,this.name=e0.KHR_MATERIALS_SHEEN}getMaterialType(J){return bJ(this.parser,J,this.name)!==null?R9:null}extendMaterialParams(J,Q){let $=bJ(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.sheenColor=new g0(0,0,0),Q.sheenRoughness=0,Q.sheen=1,$.sheenColorFactor!==void 0){let W=$.sheenColorFactor;Q.sheenColor.setRGB(W[0],W[1],W[2],E9)}if($.sheenRoughnessFactor!==void 0)Q.sheenRoughness=$.sheenRoughnessFactor;if($.sheenColorTexture!==void 0)Z.push(this.parser.assignTexture(Q,"sheenColorMap",$.sheenColorTexture,h9));if($.sheenRoughnessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"sheenRoughnessMap",$.sheenRoughnessTexture));return Promise.all(Z)}}class bY{constructor(J){this.parser=J,this.name=e0.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){return bJ(this.parser,J,this.name)!==null?R9:null}extendMaterialParams(J,Q){let $=bJ(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.transmissionFactor!==void 0)Q.transmission=$.transmissionFactor;if($.transmissionTexture!==void 0)Z.push(this.parser.assignTexture(Q,"transmissionMap",$.transmissionTexture));return Promise.all(Z)}}class xY{constructor(J){this.parser=J,this.name=e0.KHR_MATERIALS_VOLUME}getMaterialType(J){return bJ(this.parser,J,this.name)!==null?R9:null}extendMaterialParams(J,Q){let $=bJ(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.thickness=$.thicknessFactor!==void 0?$.thicknessFactor:0,$.thicknessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"thicknessMap",$.thicknessTexture));Q.attenuationDistance=$.attenuationDistance||1/0;let W=$.attenuationColor||[1,1,1];return Q.attenuationColor=new g0().setRGB(W[0],W[1],W[2],E9),Promise.all(Z)}}class gY{constructor(J){this.parser=J,this.name=e0.KHR_MATERIALS_IOR}getMaterialType(J){return bJ(this.parser,J,this.name)!==null?R9:null}extendMaterialParams(J,Q){let $=bJ(this.parser,J,this.name);if($===null)return Promise.resolve();if(Q.ior=$.ior!==void 0?$.ior:1.5,Q.ior===0)Q.ior=1000;return Promise.resolve()}}class pY{constructor(J){this.parser=J,this.name=e0.KHR_MATERIALS_SPECULAR}getMaterialType(J){return bJ(this.parser,J,this.name)!==null?R9:null}extendMaterialParams(J,Q){let $=bJ(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.specularIntensity=$.specularFactor!==void 0?$.specularFactor:1,$.specularTexture!==void 0)Z.push(this.parser.assignTexture(Q,"specularIntensityMap",$.specularTexture));let W=$.specularColorFactor||[1,1,1];if(Q.specularColor=new g0().setRGB(W[0],W[1],W[2],E9),$.specularColorTexture!==void 0)Z.push(this.parser.assignTexture(Q,"specularColorMap",$.specularColorTexture,h9));return Promise.all(Z)}}class lY{constructor(J){this.parser=J,this.name=e0.EXT_MATERIALS_BUMP}getMaterialType(J){return bJ(this.parser,J,this.name)!==null?R9:null}extendMaterialParams(J,Q){let $=bJ(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.bumpScale=$.bumpFactor!==void 0?$.bumpFactor:1,$.bumpTexture!==void 0)Z.push(this.parser.assignTexture(Q,"bumpMap",$.bumpTexture));return Promise.all(Z)}}class mY{constructor(J){this.parser=J,this.name=e0.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){return bJ(this.parser,J,this.name)!==null?R9:null}extendMaterialParams(J,Q){let $=bJ(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.anisotropyStrength!==void 0)Q.anisotropy=$.anisotropyStrength;if($.anisotropyRotation!==void 0)Q.anisotropyRotation=$.anisotropyRotation;if($.anisotropyTexture!==void 0)Z.push(this.parser.assignTexture(Q,"anisotropyMap",$.anisotropyTexture));return Promise.all(Z)}}class dY{constructor(J){this.parser=J,this.name=e0.KHR_TEXTURE_BASISU}loadTexture(J){let Q=this.parser,$=Q.json,Z=$.textures[J];if(!Z.extensions||!Z.extensions[this.name])return null;let W=Z.extensions[this.name],K=Q.options.ktx2Loader;if(!K)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return Q.loadTextureImage(J,W.source,K)}}class uY{constructor(J){this.parser=J,this.name=e0.EXT_TEXTURE_WEBP}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,W=Z.textures[J];if(!W.extensions||!W.extensions[Q])return null;let K=W.extensions[Q],H=Z.images[K.source],Y=$.textureLoader;if(H.uri){let X=$.options.manager.getHandler(H.uri);if(X!==null)Y=X}return $.loadTextureImage(J,K.source,Y)}}class cY{constructor(J){this.parser=J,this.name=e0.EXT_TEXTURE_AVIF}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,W=Z.textures[J];if(!W.extensions||!W.extensions[Q])return null;let K=W.extensions[Q],H=Z.images[K.source],Y=$.textureLoader;if(H.uri){let X=$.options.manager.getHandler(H.uri);if(X!==null)Y=X}return $.loadTextureImage(J,K.source,Y)}}class AW{constructor(J,Q){this.name=Q,this.parser=J}loadBufferView(J){let Q=this.parser.json,$=Q.bufferViews[J];if($.extensions&&$.extensions[this.name]){let Z=$.extensions[this.name],W=this.parser.getDependency("buffer",Z.buffer),K=this.parser.options.meshoptDecoder;if(!K||!K.supported)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return W.then(function(H){let Y=Z.byteOffset||0,X=Z.byteLength||0,U=Z.count,N=Z.byteStride,E=new Uint8Array(H,Y,X);if(K.decodeGltfBufferAsync)return K.decodeGltfBufferAsync(U,N,E,Z.mode,Z.filter).then(function(G){return G.buffer});else return K.ready.then(function(){let G=new ArrayBuffer(U*N);return K.decodeGltfBuffer(new Uint8Array(G),U,N,E,Z.mode,Z.filter),G})})}else return null}}class nY{constructor(J){this.name=e0.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let Q=this.parser.json,$=Q.nodes[J];if(!$.extensions||!$.extensions[this.name]||$.mesh===void 0)return null;let Z=Q.meshes[$.mesh];for(let X of Z.primitives)if(X.mode!==_9.TRIANGLES&&X.mode!==_9.TRIANGLE_STRIP&&X.mode!==_9.TRIANGLE_FAN&&X.mode!==void 0)return null;let K=$.extensions[this.name].attributes,H=[],Y={};for(let X in K)H.push(this.parser.getDependency("accessor",K[X]).then((U)=>{return Y[X]=U,Y[X]}));if(H.length<1)return null;return H.push(this.parser.createNodeMesh(J)),Promise.all(H).then((X)=>{let U=X.pop(),N=U.isGroup?U.children:[U],E=X[0].count,G=[];for(let q of N){let R=new d0,V=new w,O=new TJ,F=new w(1,1,1),_=new s8(q.geometry,q.material,E);for(let L=0;L<E;L++){if(Y.TRANSLATION)V.fromBufferAttribute(Y.TRANSLATION,L);if(Y.ROTATION)O.fromBufferAttribute(Y.ROTATION,L);if(Y.SCALE)F.fromBufferAttribute(Y.SCALE,L);_.setMatrixAt(L,R.compose(V,O,F))}let k=null;for(let L in Y)if(L==="_COLOR_0"){let z=Y[L];_.instanceColor=new V8(z.array,z.itemSize,z.normalized)}else if(L!=="TRANSLATION"&&L!=="ROTATION"&&L!=="SCALE"){if(k===null){let I=_.geometry;k=new SJ,k.name=I.name;for(let A in I.attributes)k.setAttribute(A,I.attributes[A]);for(let A in I.morphAttributes)k.morphAttributes[A]=I.morphAttributes[A];if(I.index!==null)k.setIndex(I.index);k.morphTargetsRelative=I.morphTargetsRelative;for(let A of I.groups)k.addGroup(A.start,A.count,A.materialIndex);if(I.boundingBox!==null)k.boundingBox=I.boundingBox.clone();if(I.boundingSphere!==null)k.boundingSphere=I.boundingSphere.clone();k.drawRange.start=I.drawRange.start,k.drawRange.count=I.drawRange.count,k.userData=Object.assign({},I.userData),_.geometry=k}let z=Y[L];k.setAttribute(L,new V8(z.array,z.itemSize,z.normalized))}kJ.prototype.copy.call(_,q),this.parser.assignFinalMaterial(_),G.push(_)}if(U.isGroup)return U.clear(),U.add(...G),U;return G[0]})}}var sY="glTF",f6=12,_Y={JSON:1313821514,BIN:5130562};class iY{constructor(J){this.name=e0.KHR_BINARY_GLTF,this.content=null,this.body=null;let Q=new DataView(J,0,f6),$=new TextDecoder;if(this.header={magic:$.decode(new Uint8Array(J.slice(0,4))),version:Q.getUint32(4,!0),length:Q.getUint32(8,!0)},this.header.magic!==sY)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let Z=this.header.length-f6,W=new DataView(J,f6),K=0;while(K<Z){let H=W.getUint32(K,!0);K+=4;let Y=W.getUint32(K,!0);if(K+=4,Y===_Y.JSON){let X=new Uint8Array(J,f6+K,H);this.content=$.decode(X)}else if(Y===_Y.BIN){let X=f6+K;this.body=J.slice(X,X+H)}K+=H}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class oY{constructor(J,Q){if(!Q)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=e0.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=Q,this.dracoLoader.preload()}decodePrimitive(J,Q){let $=this.json,Z=this.dracoLoader,W=J.extensions[this.name].bufferView,K=J.extensions[this.name].attributes,H={},Y={},X={};for(let U in K){let N=wW[U]||U.toLowerCase();H[N]=K[U]}for(let U in J.attributes){let N=wW[U]||U.toLowerCase();if(K[U]!==void 0){let E=$.accessors[J.attributes[U]],G=l7[E.componentType];X[N]=G.name,Y[N]=E.normalized===!0}}return Q.getDependency("bufferView",W).then(function(U){return new Promise(function(N,E){Z.decodeDracoFile(U,function(G){for(let q in G.attributes){let R=G.attributes[q],V=Y[q];if(V!==void 0)R.normalized=V}N(G)},H,X,E9,E)})})}}class aY{constructor(){this.name=e0.KHR_TEXTURE_TRANSFORM}extendTexture(J,Q){if((Q.texCoord===void 0||Q.texCoord===J.channel)&&Q.offset===void 0&&Q.rotation===void 0&&Q.scale===void 0)return J;if(J=J.clone(),Q.texCoord!==void 0)J.channel=Q.texCoord;if(Q.offset!==void 0)J.offset.fromArray(Q.offset);if(Q.rotation!==void 0)J.rotation=Q.rotation;if(Q.scale!==void 0)J.repeat.fromArray(Q.scale);if(Q.rotation!==void 0){let $=Math.cos(J.rotation),Z=Math.sin(J.rotation);J.matrix.set(J.repeat.x*$,J.repeat.y*Z,J.offset.x,-J.repeat.x*Z,J.repeat.y*$,J.offset.y,0,0,1),J.matrixAutoUpdate=!1}return J.needsUpdate=!0,J}}class rY{constructor(){this.name=e0.KHR_MESH_QUANTIZATION}}class jW extends H8{constructor(J,Q,$,Z){super(J,Q,$,Z)}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,W=J*Z*3+Z;for(let K=0;K!==Z;K++)Q[K]=$[W+K];return Q}interpolate_(J,Q,$,Z){let W=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=H*2,X=H*3,U=Z-Q,N=($-Q)/U,E=N*N,G=E*N,q=J*X,R=q-X,V=-2*G+3*E,O=G-E,F=1-V,_=O-E+N;for(let k=0;k!==H;k++){let L=K[R+k+H],z=K[R+k+Y]*U,I=K[q+k+H],A=K[q+k]*U;W[k]=F*L+_*z+V*I+O*A}return W}}var Sq=new TJ;class tY extends jW{interpolate_(J,Q,$,Z){let W=super.interpolate_(J,Q,$,Z);return Sq.fromArray(W).normalize().toArray(W),W}}var _9={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},l7={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},IY={9728:v9,9729:sJ,9984:VQ,9985:A7,9986:m8,9987:u9},AY={33071:I7,33648:LQ,10497:B8},PW={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},wW={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},S8={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},jq={CUBICSPLINE:void 0,LINEAR:PQ,STEP:SZ},_W={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function yq(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new iJ({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:k8});return J.DefaultMaterial}function J7(J,Q,$){for(let Z in $.extensions)if(J[Z]===void 0)Q.userData.gltfExtensions=Q.userData.gltfExtensions||{},Q.userData.gltfExtensions[Z]=$.extensions[Z]}function a9(J,Q){if(Q.extras!==void 0)if(typeof Q.extras==="object")Object.assign(J.userData,Q.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+Q.extras)}function vq(J,Q,$){let Z=!1,W=!1,K=!1;for(let U=0,N=Q.length;U<N;U++){let E=Q[U];if(E.POSITION!==void 0)Z=!0;if(E.NORMAL!==void 0)W=!0;if(E.COLOR_0!==void 0)K=!0;if(Z&&W&&K)break}if(!Z&&!W&&!K)return Promise.resolve(J);let H=[],Y=[],X=[];for(let U=0,N=Q.length;U<N;U++){let E=Q[U];if(Z){let G=E.POSITION!==void 0?$.getDependency("accessor",E.POSITION):J.attributes.position;H.push(G)}if(W){let G=E.NORMAL!==void 0?$.getDependency("accessor",E.NORMAL):J.attributes.normal;Y.push(G)}if(K){let G=E.COLOR_0!==void 0?$.getDependency("accessor",E.COLOR_0):J.attributes.color;X.push(G)}}return Promise.all([Promise.all(H),Promise.all(Y),Promise.all(X)]).then(function(U){let N=U[0],E=U[1],G=U[2];if(Z)J.morphAttributes.position=N;if(W)J.morphAttributes.normal=E;if(K)J.morphAttributes.color=G;return J.morphTargetsRelative=!0,J})}function fq(J,Q){if(J.updateMorphTargets(),Q.weights!==void 0)for(let $=0,Z=Q.weights.length;$<Z;$++)J.morphTargetInfluences[$]=Q.weights[$];if(Q.extras&&Array.isArray(Q.extras.targetNames)){let $=Q.extras.targetNames;if(J.morphTargetInfluences.length===$.length){J.morphTargetDictionary={};for(let Z=0,W=$.length;Z<W;Z++)J.morphTargetDictionary[$[Z]]=Z}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function hq(J){let Q,$=J.extensions&&J.extensions[e0.KHR_DRACO_MESH_COMPRESSION];if($)Q="draco:"+$.bufferView+":"+$.indices+":"+IW($.attributes);else Q=J.indices+":"+IW(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let Z=0,W=J.targets.length;Z<W;Z++)Q+=":"+IW(J.targets[Z]);return Q}function IW(J){let Q="",$=Object.keys(J).sort();for(let Z=0,W=$.length;Z<W;Z++)Q+=$[Z]+":"+J[$[Z]]+";";return Q}function TW(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function bq(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var xq=new d0;class eY{constructor(J={},Q={}){this.json=J,this.extensions={},this.plugins={},this.options=Q,this.cache=new Tq,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let $=!1,Z=-1,W=!1,K=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let H=navigator.userAgent;$=/^((?!chrome|android).)*safari/i.test(H)===!0;let Y=H.match(/Version\/(\d+)/);Z=$&&Y?parseInt(Y[1],10):-1,W=H.indexOf("Firefox")>-1,K=W?H.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||$&&Z<17||W&&K<98)this.textureLoader=new nQ(this.options.manager);else this.textureLoader=new oQ(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new I6(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,Q){let $=this,Z=this.json,W=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(K){return K._markDefs&&K._markDefs()}),Promise.all(this._invokeAll(function(K){return K.beforeRoot&&K.beforeRoot()})).then(function(){return Promise.all([$.getDependencies("scene"),$.getDependencies("animation"),$.getDependencies("camera")])}).then(function(K){let H={scene:K[0][Z.scene||0],scenes:K[0],animations:K[1],cameras:K[2],asset:Z.asset,parser:$,userData:{}};return J7(W,H,Z),a9(H,Z),Promise.all($._invokeAll(function(Y){return Y.afterRoot&&Y.afterRoot(H)})).then(function(){for(let Y of H.scenes)Y.updateMatrixWorld();J(H)})}).catch(Q)}_markDefs(){let J=this.json.nodes||[],Q=this.json.skins||[],$=this.json.meshes||[];for(let Z=0,W=Q.length;Z<W;Z++){let K=Q[Z].joints;for(let H=0,Y=K.length;H<Y;H++)J[K[H]].isBone=!0}for(let Z=0,W=J.length;Z<W;Z++){let K=J[Z];if(K.mesh!==void 0){if(this._addNodeRef(this.meshCache,K.mesh),K.skin!==void 0)$[K.mesh].isSkinnedMesh=!0}if(K.camera!==void 0)this._addNodeRef(this.cameraCache,K.camera)}}_addNodeRef(J,Q){if(Q===void 0)return;if(J.refs[Q]===void 0)J.refs[Q]=J.uses[Q]=0;J.refs[Q]++}_getNodeRef(J,Q,$){if(J.refs[Q]<=1)return $;let Z=$.clone(),W=(K,H)=>{let Y=this.associations.get(K);if(Y!=null)this.associations.set(H,Y);for(let[X,U]of K.children.entries())W(U,H.children[X])};return W($,Z),Z.name+="_instance_"+J.uses[Q]++,Z}_invokeOne(J){let Q=Object.values(this.plugins);Q.push(this);for(let $=0;$<Q.length;$++){let Z=J(Q[$]);if(Z)return Z}return null}_invokeAll(J){let Q=Object.values(this.plugins);Q.unshift(this);let $=[];for(let Z=0;Z<Q.length;Z++){let W=J(Q[Z]);if(W)$.push(W)}return $}getDependency(J,Q){let $=J+":"+Q,Z=this.cache.get($);if(!Z){switch(J){case"scene":Z=this.loadScene(Q);break;case"node":Z=this._invokeOne(function(W){return W.loadNode&&W.loadNode(Q)});break;case"mesh":Z=this._invokeOne(function(W){return W.loadMesh&&W.loadMesh(Q)});break;case"accessor":Z=this.loadAccessor(Q);break;case"bufferView":Z=this._invokeOne(function(W){return W.loadBufferView&&W.loadBufferView(Q)});break;case"buffer":Z=this.loadBuffer(Q);break;case"material":Z=this._invokeOne(function(W){return W.loadMaterial&&W.loadMaterial(Q)});break;case"texture":Z=this._invokeOne(function(W){return W.loadTexture&&W.loadTexture(Q)});break;case"skin":Z=this.loadSkin(Q);break;case"animation":Z=this._invokeOne(function(W){return W.loadAnimation&&W.loadAnimation(Q)});break;case"camera":Z=this.loadCamera(Q);break;default:if(Z=this._invokeOne(function(W){return W!=this&&W.getDependency&&W.getDependency(J,Q)}),!Z)throw Error("Unknown type: "+J);break}this.cache.add($,Z)}return Z}getDependencies(J){let Q=this.cache.get(J);if(!Q){let $=this,Z=this.json[J+(J==="mesh"?"es":"s")]||[];Q=Promise.all(Z.map(function(W,K){return $.getDependency(J,K)})),this.cache.add(J,Q)}return Q}loadBuffer(J){let Q=this.json.buffers[J],$=this.fileLoader;if(Q.type&&Q.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+Q.type+" buffer type is not supported.");if(Q.uri===void 0&&J===0)return Promise.resolve(this.extensions[e0.KHR_BINARY_GLTF].body);let Z=this.options;return new Promise(function(W,K){$.load(T8.resolveURL(Q.uri,Z.path),W,void 0,function(){K(Error('THREE.GLTFLoader: Failed to load buffer "'+Q.uri+'".'))})})}loadBufferView(J){let Q=this.json.bufferViews[J];return this.getDependency("buffer",Q.buffer).then(function($){let Z=Q.byteLength||0,W=Q.byteOffset||0;return $.slice(W,W+Z)})}loadAccessor(J){let Q=this,$=this.json,Z=this.json.accessors[J];if(Z.bufferView===void 0&&Z.sparse===void 0){let K=PW[Z.type],H=l7[Z.componentType],Y=Z.normalized===!0,X=new H(Z.count*K);return Promise.resolve(new mJ(X,K,Y))}let W=[];if(Z.bufferView!==void 0)W.push(this.getDependency("bufferView",Z.bufferView));else W.push(null);if(Z.sparse!==void 0)W.push(this.getDependency("bufferView",Z.sparse.indices.bufferView)),W.push(this.getDependency("bufferView",Z.sparse.values.bufferView));return Promise.all(W).then(function(K){let H=K[0],Y=PW[Z.type],X=l7[Z.componentType],U=X.BYTES_PER_ELEMENT,N=U*Y,E=Z.byteOffset||0,G=Z.bufferView!==void 0?$.bufferViews[Z.bufferView].byteStride:void 0,q=Z.normalized===!0,R,V;if(G&&G!==N){let O=Math.floor(E/G),F="InterleavedBuffer:"+Z.bufferView+":"+Z.componentType+":"+O+":"+Z.count,_=Q.cache.get(F);if(!_)R=new X(H,O*G,Z.count*G/U),_=new F6(R,G/U),Q.cache.add(F,_);V=new S7(_,Y,E%G/U,q)}else{if(H===null)R=new X(Z.count*Y);else R=new X(H,E,Z.count*Y);V=new mJ(R,Y,q)}if(Z.sparse!==void 0){let O=PW.SCALAR,F=l7[Z.sparse.indices.componentType],_=Z.sparse.indices.byteOffset||0,k=Z.sparse.values.byteOffset||0,L=new F(K[1],_,Z.sparse.count*O),z=new X(K[2],k,Z.sparse.count*Y);if(H!==null)V=new mJ(V.array.slice(),V.itemSize,V.normalized);V.normalized=!1;for(let I=0,A=L.length;I<A;I++){let M=L[I];if(V.setX(M,z[I*Y]),Y>=2)V.setY(M,z[I*Y+1]);if(Y>=3)V.setZ(M,z[I*Y+2]);if(Y>=4)V.setW(M,z[I*Y+3]);if(Y>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}V.normalized=q}return V})}loadTexture(J){let Q=this.json,$=this.options,W=Q.textures[J].source,K=Q.images[W],H=this.textureLoader;if(K.uri){let Y=$.manager.getHandler(K.uri);if(Y!==null)H=Y}return this.loadTextureImage(J,W,H)}loadTextureImage(J,Q,$){let Z=this,W=this.json,K=W.textures[J],H=W.images[Q],Y=(H.uri||H.bufferView)+":"+K.sampler;if(this.textureCache[Y])return this.textureCache[Y];let X=this.loadImageSource(Q,$).then(function(U){if(U.flipY=!1,U.name=K.name||H.name||"",U.name===""&&typeof H.uri==="string"&&H.uri.startsWith("data:image/")===!1)U.name=H.uri;let E=(W.samplers||{})[K.sampler]||{};return U.magFilter=IY[E.magFilter]||sJ,U.minFilter=IY[E.minFilter]||u9,U.wrapS=AY[E.wrapS]||B8,U.wrapT=AY[E.wrapT]||B8,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==v9&&U.minFilter!==sJ,Z.associations.set(U,{textures:J}),U}).catch(function(){return null});return this.textureCache[Y]=X,X}loadImageSource(J,Q){let $=this,Z=this.json,W=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((N)=>N.clone());let K=Z.images[J],H=self.URL||self.webkitURL,Y=K.uri||"",X=!1;if(K.bufferView!==void 0)Y=$.getDependency("bufferView",K.bufferView).then(function(N){X=!0;let E=new Blob([N],{type:K.mimeType});return Y=H.createObjectURL(E),Y});else if(K.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let U=Promise.resolve(Y).then(function(N){return new Promise(function(E,G){let q=E;if(Q.isImageBitmapLoader===!0)q=function(R){let V=new hJ(R);V.needsUpdate=!0,E(V)};Q.load(T8.resolveURL(N,W.path),q,void 0,G)})}).then(function(N){if(X===!0)H.revokeObjectURL(Y);return a9(N,K),N.userData.mimeType=K.mimeType||bq(K.uri),N}).catch(function(N){throw console.error("THREE.GLTFLoader: Couldn't load texture",Y),N});return this.sourceCache[J]=U,U}assignTexture(J,Q,$,Z){let W=this;return this.getDependency("texture",$.index).then(function(K){if(!K)return null;if($.texCoord!==void 0&&$.texCoord>0)K=K.clone(),K.channel=$.texCoord;if(W.extensions[e0.KHR_TEXTURE_TRANSFORM]){let H=$.extensions!==void 0?$.extensions[e0.KHR_TEXTURE_TRANSFORM]:void 0;if(H){let Y=W.associations.get(K);K=W.extensions[e0.KHR_TEXTURE_TRANSFORM].extendTexture(K,H),W.associations.set(K,Y)}}if(Z!==void 0)K.colorSpace=Z;return J[Q]=K,K})}assignFinalMaterial(J){let{geometry:Q,material:$}=J,Z=Q.attributes.tangent===void 0,W=Q.attributes.color!==void 0,K=Q.attributes.normal===void 0;if(J.isPoints){let H="PointsMaterial:"+$.uuid,Y=this.cache.get(H);if(!Y)Y=new D6,O9.prototype.copy.call(Y,$),Y.color.copy($.color),Y.map=$.map,Y.sizeAttenuation=!1,this.cache.add(H,Y);$=Y}else if(J.isLine){let H="LineBasicMaterial:"+$.uuid,Y=this.cache.get(H);if(!Y)Y=new M6,O9.prototype.copy.call(Y,$),Y.color.copy($.color),Y.map=$.map,this.cache.add(H,Y);$=Y}if(Z||W||K){let H="ClonedMaterial:"+$.uuid+":";if(Z)H+="derivative-tangents:";if(W)H+="vertex-colors:";if(K)H+="flat-shading:";let Y=this.cache.get(H);if(!Y){if(Y=$.clone(),W)Y.vertexColors=!0;if(K)Y.flatShading=!0;if(Z){if(Y.normalScale)Y.normalScale.y*=-1;if(Y.clearcoatNormalScale)Y.clearcoatNormalScale.y*=-1}this.cache.add(H,Y),this.associations.set(Y,this.associations.get($))}$=Y}J.material=$}getMaterialType(){return iJ}loadMaterial(J){let Q=this,$=this.json,Z=this.extensions,W=$.materials[J],K,H={},Y=W.extensions||{},X=[];if(Y[e0.KHR_MATERIALS_UNLIT]){let N=Z[e0.KHR_MATERIALS_UNLIT];K=N.getMaterialType(),X.push(N.extendParams(H,W,Q))}else{let N=W.pbrMetallicRoughness||{};if(H.color=new g0(1,1,1),H.opacity=1,Array.isArray(N.baseColorFactor)){let E=N.baseColorFactor;H.color.setRGB(E[0],E[1],E[2],E9),H.opacity=E[3]}if(N.baseColorTexture!==void 0)X.push(Q.assignTexture(H,"map",N.baseColorTexture,h9));if(H.metalness=N.metallicFactor!==void 0?N.metallicFactor:1,H.roughness=N.roughnessFactor!==void 0?N.roughnessFactor:1,N.metallicRoughnessTexture!==void 0)X.push(Q.assignTexture(H,"metalnessMap",N.metallicRoughnessTexture)),X.push(Q.assignTexture(H,"roughnessMap",N.metallicRoughnessTexture));K=this._invokeOne(function(E){return E.getMaterialType&&E.getMaterialType(J)}),X.push(Promise.all(this._invokeAll(function(E){return E.extendMaterialParams&&E.extendMaterialParams(J,H)})))}if(W.doubleSided===!0)H.side=W9;let U=W.alphaMode||_W.OPAQUE;if(U===_W.BLEND)H.transparent=!0,H.depthWrite=!1;else if(H.transparent=!1,U===_W.MASK)H.alphaTest=W.alphaCutoff!==void 0?W.alphaCutoff:0.5;if(W.normalTexture!==void 0&&K!==oJ){if(X.push(Q.assignTexture(H,"normalMap",W.normalTexture)),H.normalScale=new W0(1,1),W.normalTexture.scale!==void 0){let N=W.normalTexture.scale;H.normalScale.set(N,N)}}if(W.occlusionTexture!==void 0&&K!==oJ){if(X.push(Q.assignTexture(H,"aoMap",W.occlusionTexture)),W.occlusionTexture.strength!==void 0)H.aoMapIntensity=W.occlusionTexture.strength}if(W.emissiveFactor!==void 0&&K!==oJ){let N=W.emissiveFactor;H.emissive=new g0().setRGB(N[0],N[1],N[2],E9)}if(W.emissiveTexture!==void 0&&K!==oJ)X.push(Q.assignTexture(H,"emissiveMap",W.emissiveTexture,h9));return Promise.all(X).then(function(){let N=new K(H);if(W.name)N.name=W.name;if(a9(N,W),Q.associations.set(N,{materials:J}),W.extensions)J7(Z,N,W);return N})}createUniqueName(J){let Q=NJ.sanitizeNodeName(J||"");if(Q in this.nodeNamesUsed)return Q+"_"+ ++this.nodeNamesUsed[Q];else return this.nodeNamesUsed[Q]=0,Q}loadGeometries(J){let Q=this,$=this.extensions,Z=this.primitiveCache;function W(H){return $[e0.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(H,Q).then(function(Y){return wY(Y,H,Q)})}let K=[];for(let H=0,Y=J.length;H<Y;H++){let X=J[H],U=hq(X),N=Z[U];if(N)K.push(N.promise);else{let E;if(X.extensions&&X.extensions[e0.KHR_DRACO_MESH_COMPRESSION])E=W(X);else E=wY(new SJ,X,Q);if(X.mode===_9.TRIANGLE_STRIP)E=E.then((G)=>CW(G,G6));else if(X.mode===_9.TRIANGLE_FAN)E=E.then((G)=>CW(G,T7));Z[U]={primitive:X,promise:E},K.push(E)}}return Promise.all(K)}loadMesh(J){let Q=this,$=this.json,Z=this.extensions,W=$.meshes[J],K=W.primitives,H=[];for(let Y=0,X=K.length;Y<X;Y++){let U=K[Y].material===void 0?yq(this.cache):this.getDependency("material",K[Y].material);H.push(U)}return H.push(Q.loadGeometries(K)),Promise.all(H).then(async function(Y){let X=Y.slice(0,Y.length-1),U=Y[Y.length-1],N=[];for(let G=0,q=U.length;G<q;G++){let R=U[G],V=K[G],O,F=X[G];if(V.mode===_9.TRIANGLES||V.mode===_9.TRIANGLE_STRIP||V.mode===_9.TRIANGLE_FAN||V.mode===void 0){let _=W.isSkinnedMesh===!0,k=R.hasAttribute("skinIndex")&&R.hasAttribute("skinWeight");if(_&&k===!1)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(O=_&&k?new yQ(R,F):new c0(R,F),O.isSkinnedMesh===!0)O.normalizeSkinWeights()}else if(V.mode===_9.LINES)O=new vQ(R,F);else if(V.mode===_9.LINE_STRIP)O=new j7(R,F);else if(V.mode===_9.LINE_LOOP)O=new fQ(R,F);else if(V.mode===_9.POINTS)O=new hQ(R,F);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+V.mode);if(Object.keys(O.geometry.morphAttributes).length>0)fq(O,W);if(O.name=Q.createUniqueName(W.name||"mesh_"+J),a9(O,W),V.extensions)J7(Z,O,V);Q.assignFinalMaterial(O),N.push(O)}for(let G=0,q=N.length;G<q;G++)Q.associations.set(N[G],{meshes:J,primitives:G});if(N.length===1){if(W.extensions)J7(Z,N[0],W);return N[0]}let E=new yJ;if(W.extensions)J7(Z,E,W);Q.associations.set(E,{meshes:J});for(let G=0,q=N.length;G<q;G++)E.add(N[G]);return E})}loadCamera(J){let Q,$=this.json.cameras[J],Z=$[$.type];if(!Z){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if($.type==="perspective")Q=new lJ(C8.radToDeg(Z.yfov),Z.aspectRatio||1,Z.znear||1,Z.zfar||2000000);else if($.type==="orthographic")Q=new t8(-Z.xmag,Z.xmag,Z.ymag,-Z.ymag,Z.znear,Z.zfar);if($.name)Q.name=this.createUniqueName($.name);return a9(Q,$),Promise.resolve(Q)}loadSkin(J){let Q=this.json.skins[J],$=[];for(let Z=0,W=Q.joints.length;Z<W;Z++)$.push(this._loadNodeShallow(Q.joints[Z]));if(Q.inverseBindMatrices!==void 0)$.push(this.getDependency("accessor",Q.inverseBindMatrices));else $.push(null);return Promise.all($).then(function(Z){let W=Z.pop(),K=Z,H=[],Y=[];for(let X=0,U=K.length;X<U;X++){let N=K[X];if(N){H.push(N);let E=new d0;if(W!==null)E.fromArray(W.array,X*16);Y.push(E)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',Q.joints[X])}return new L6(H,Y)})}loadAnimation(J){let Q=this.json,$=this,Z=Q.animations[J],W=Z.name?Z.name:"animation_"+J,K=[],H=[],Y=[],X=[],U=[];for(let N=0,E=Z.channels.length;N<E;N++){let G=Z.channels[N],q=Z.samplers[G.sampler],R=G.target,V=R.node,O=Z.parameters!==void 0?Z.parameters[q.input]:q.input,F=Z.parameters!==void 0?Z.parameters[q.output]:q.output;if(R.node===void 0)continue;K.push(this.getDependency("node",V)),H.push(this.getDependency("accessor",O)),Y.push(this.getDependency("accessor",F)),X.push(q),U.push(R)}return Promise.all([Promise.all(K),Promise.all(H),Promise.all(Y),Promise.all(X),Promise.all(U)]).then(function(N){let E=N[0],G=N[1],q=N[2],R=N[3],V=N[4],O=[];for(let _=0,k=E.length;_<k;_++){let L=E[_],z=G[_],I=q[_],A=R[_],M=V[_];if(L===void 0)continue;if(L.updateMatrix)L.updateMatrix();let P=$._createAnimationTracks(L,z,I,A,M);if(P)for(let p=0;p<P.length;p++)O.push(P[p])}let F=new z7(W,void 0,O);return a9(F,Z),F})}createNodeMesh(J){let Q=this.json,$=this,Z=Q.nodes[J];if(Z.mesh===void 0)return null;return $.getDependency("mesh",Z.mesh).then(function(W){let K=$._getNodeRef($.meshCache,Z.mesh,W);if(Z.weights!==void 0)K.traverse(function(H){if(!H.isMesh)return;for(let Y=0,X=Z.weights.length;Y<X;Y++)H.morphTargetInfluences[Y]=Z.weights[Y]});return K})}loadNode(J){let Q=this.json,$=this,Z=Q.nodes[J],W=$._loadNodeShallow(J),K=[],H=Z.children||[];for(let X=0,U=H.length;X<U;X++)K.push($.getDependency("node",H[X]));let Y=Z.skin===void 0?Promise.resolve(null):$.getDependency("skin",Z.skin);return Promise.all([W,Promise.all(K),Y]).then(function(X){let U=X[0],N=X[1],E=X[2];if(E!==null)U.traverse(function(G){if(!G.isSkinnedMesh)return;G.bind(E,xq)});for(let G=0,q=N.length;G<q;G++)U.add(N[G]);if(U.userData.pivot!==void 0&&N.length>0){let G=U.userData.pivot,q=N[0];U.pivot=new w().fromArray(G),U.position.x-=G[0],U.position.y-=G[1],U.position.z-=G[2],q.position.set(0,0,0),delete U.userData.pivot}return U})}_loadNodeShallow(J){let Q=this.json,$=this.extensions,Z=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let W=Q.nodes[J],K=W.name?Z.createUniqueName(W.name):"",H=[],Y=Z._invokeOne(function(X){return X.createNodeMesh&&X.createNodeMesh(J)});if(Y)H.push(Y);if(W.camera!==void 0)H.push(Z.getDependency("camera",W.camera).then(function(X){return Z._getNodeRef(Z.cameraCache,W.camera,X)}));return Z._invokeAll(function(X){return X.createNodeAttachment&&X.createNodeAttachment(J)}).forEach(function(X){H.push(X)}),this.nodeCache[J]=Promise.all(H).then(function(X){let U;if(W.isBone===!0)U=new O6;else if(X.length>1)U=new yJ;else if(X.length===1)U=X[0];else U=new kJ;if(U!==X[0])for(let N=0,E=X.length;N<E;N++)U.add(X[N]);if(W.name)U.userData.name=W.name,U.name=K;if(a9(U,W),W.extensions)J7($,U,W);if(W.matrix!==void 0){let N=new d0;N.fromArray(W.matrix),U.applyMatrix4(N)}else{if(W.translation!==void 0)U.position.fromArray(W.translation);if(W.rotation!==void 0)U.quaternion.fromArray(W.rotation);if(W.scale!==void 0)U.scale.fromArray(W.scale)}if(!Z.associations.has(U))Z.associations.set(U,{});else if(W.mesh!==void 0&&Z.meshCache.refs[W.mesh]>1){let N=Z.associations.get(U);Z.associations.set(U,{...N})}return Z.associations.get(U).nodes=J,U}),this.nodeCache[J]}loadScene(J){let Q=this.extensions,$=this.json.scenes[J],Z=this,W=new yJ;if($.name)W.name=Z.createUniqueName($.name);if(a9(W,$),$.extensions)J7(Q,W,$);let K=$.nodes||[],H=[];for(let Y=0,X=K.length;Y<X;Y++)H.push(Z.getDependency("node",K[Y]));return Promise.all(H).then(function(Y){for(let U=0,N=Y.length;U<N;U++){let E=Y[U];if(E.parent!==null)W.add($$(E));else W.add(E)}let X=(U)=>{let N=new Map;for(let[E,G]of Z.associations)if(E instanceof O9||E instanceof hJ)N.set(E,G);return U.traverse((E)=>{let G=Z.associations.get(E);if(G!=null)N.set(E,G)}),N};return Z.associations=X(W),W})}_createAnimationTracks(J,Q,$,Z,W){let K=[],H=J.name?J.name:J.uuid,Y=[];function X(G){if(G.morphTargetInfluences)Y.push(G.name?G.name:G.uuid)}if(S8[W.path]===S8.weights){if(X(J),J.isGroup)J.children.forEach(X)}else Y.push(H);let U;switch(S8[W.path]){case S8.weights:U=I8;break;case S8.rotation:U=A8;break;case S8.translation:case S8.scale:U=r8;break;default:switch($.itemSize){case 1:U=I8;break;case 2:case 3:default:U=r8;break}break}let N=Z.interpolation!==void 0?jq[Z.interpolation]:PQ,E=this._getArrayFromAccessor($);for(let G=0,q=Y.length;G<q;G++){let R=new U(Y[G]+"."+S8[W.path],Q.array,E,N);if(Z.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(R);K.push(R)}return K}_getArrayFromAccessor(J){let Q=J.array;if(J.normalized){let $=TW(Q.constructor),Z=new Float32Array(Q.length);for(let W=0,K=Q.length;W<K;W++)Z[W]=Q[W]*$;Q=Z}return Q}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function($){return new(this instanceof A8?tY:jW)(this.times,this.values,this.getValueSize()/3,$)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function gq(J,Q,$){let Z=Q.attributes,W=new K9;if(Z.POSITION!==void 0){let Y=$.json.accessors[Z.POSITION],X=Y.min,U=Y.max;if(X!==void 0&&U!==void 0){if(W.set(new w(X[0],X[1],X[2]),new w(U[0],U[1],U[2])),Y.normalized){let N=TW(l7[Y.componentType]);W.min.multiplyScalar(N),W.max.multiplyScalar(N)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let K=Q.targets;if(K!==void 0){let Y=new w,X=new w;for(let U=0,N=K.length;U<N;U++){let E=K[U];if(E.POSITION!==void 0){let G=$.json.accessors[E.POSITION],q=G.min,R=G.max;if(q!==void 0&&R!==void 0){if(X.setX(Math.max(Math.abs(q[0]),Math.abs(R[0]))),X.setY(Math.max(Math.abs(q[1]),Math.abs(R[1]))),X.setZ(Math.max(Math.abs(q[2]),Math.abs(R[2]))),G.normalized){let V=TW(l7[G.componentType]);X.multiplyScalar(V)}Y.max(X)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}W.expandByVector(Y)}J.boundingBox=W;let H=new F9;W.getCenter(H.center),H.radius=W.min.distanceTo(W.max)/2,J.boundingSphere=H}function wY(J,Q,$){let Z=Q.attributes,W=[];function K(H,Y){return $.getDependency("accessor",H).then(function(X){J.setAttribute(Y,X)})}for(let H in Z){let Y=wW[H]||H.toLowerCase();if(Y in J.attributes)continue;W.push(K(Z[H],Y))}if(Q.indices!==void 0&&!J.index){let H=$.getDependency("accessor",Q.indices).then(function(Y){J.setIndex(Y)});W.push(H)}if(r0.workingColorSpace!==E9&&"COLOR_0"in Z)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${r0.workingColorSpace}" not supported.`);return a9(J,Q),gq(J,Q,$),Promise.all(W).then(function(){return Q.targets!==void 0?vq(J,Q.targets,$):J})}var JX={type:"change"},vW={type:"start"},$X={type:"end"},Z$=new P8,QX=new k9,pq=Math.cos(70*C8.DEG2RAD),cJ=new w,X9=2*Math.PI,MJ={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},yW=0.000001;class fW extends rQ{constructor(J,Q=null){super(J,Q);if(this.state=MJ.NONE,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:M8.ROTATE,MIDDLE:M8.DOLLY,RIGHT:M8.PAN},this.touches={ONE:D8.ROTATE,TWO:D8.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new w,this._lastQuaternion=new TJ,this._lastTargetPosition=new w,this._quat=new TJ().setFromUnitVectors(J.up,new w(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new T6,this._sphericalDelta=new T6,this._scale=1,this._panOffset=new w,this._rotateStart=new W0,this._rotateEnd=new W0,this._rotateDelta=new W0,this._panStart=new W0,this._panEnd=new W0,this._panDelta=new W0,this._dollyStart=new W0,this._dollyEnd=new W0,this._dollyDelta=new W0,this._dollyDirection=new w,this._mouse=new W0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=mq.bind(this),this._onPointerDown=lq.bind(this),this._onPointerUp=dq.bind(this),this._onContextMenu=aq.bind(this),this._onMouseWheel=nq.bind(this),this._onKeyDown=sq.bind(this),this._onTouchStart=iq.bind(this),this._onTouchMove=oq.bind(this),this._onMouseDown=uq.bind(this),this._onMouseMove=cq.bind(this),this._interceptControlDown=rq.bind(this),this._interceptControlUp=tq.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=MJ.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let J=this.domElement.getRootNode();J.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),J.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(JX),this.update(),this.state=MJ.NONE}pan(J,Q){this._pan(J,Q),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let Q=this.object.position;if(cJ.copy(Q).sub(this.target),cJ.applyQuaternion(this._quat),this._spherical.setFromVector3(cJ),this.autoRotate&&this.state===MJ.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let $=this.minAzimuthAngle,Z=this.maxAzimuthAngle;if(isFinite($)&&isFinite(Z)){if($<-Math.PI)$+=X9;else if($>Math.PI)$-=X9;if(Z<-Math.PI)Z+=X9;else if(Z>Math.PI)Z-=X9;if($<=Z)this._spherical.theta=Math.max($,Math.min(Z,this._spherical.theta));else this._spherical.theta=this._spherical.theta>($+Z)/2?Math.max($,this._spherical.theta):Math.min(Z,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let W=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let K=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),W=K!=this._spherical.radius}if(cJ.setFromSpherical(this._spherical),cJ.applyQuaternion(this._quatInverse),Q.copy(this.target).add(cJ),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let K=null;if(this.object.isPerspectiveCamera){let H=cJ.length();K=this._clampDistance(H*this._scale);let Y=H-K;this.object.position.addScaledVector(this._dollyDirection,Y),this.object.updateMatrixWorld(),W=!!Y}else if(this.object.isOrthographicCamera){let H=new w(this._mouse.x,this._mouse.y,0);H.unproject(this.object);let Y=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),W=Y!==this.object.zoom;let X=new w(this._mouse.x,this._mouse.y,0);X.unproject(this.object),this.object.position.sub(X).add(H),this.object.updateMatrixWorld(),K=cJ.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(K!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(K).add(this.object.position);else if(Z$.origin.copy(this.object.position),Z$.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Z$.direction))<pq)this.object.lookAt(this.target);else QX.setFromNormalAndCoplanarPoint(this.object.up,this.target),Z$.intersectPlane(QX,this.target)}else if(this.object.isOrthographicCamera){let K=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),K!==this.object.zoom)this.object.updateProjectionMatrix(),W=!0}if(this._scale=1,this._performCursorZoom=!1,W||this._lastPosition.distanceToSquared(this.object.position)>yW||8*(1-this._lastQuaternion.dot(this.object.quaternion))>yW||this._lastTargetPosition.distanceToSquared(this.target)>yW)return this.dispatchEvent(JX),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return X9/60*this.autoRotateSpeed*J;else return X9/60/60*this.autoRotateSpeed}_getZoomScale(J){let Q=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*Q)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,Q){cJ.setFromMatrixColumn(Q,0),cJ.multiplyScalar(-J),this._panOffset.add(cJ)}_panUp(J,Q){if(this.screenSpacePanning===!0)cJ.setFromMatrixColumn(Q,1);else cJ.setFromMatrixColumn(Q,0),cJ.crossVectors(this.object.up,cJ);cJ.multiplyScalar(J),this._panOffset.add(cJ)}_pan(J,Q){let $=this.domElement;if(this.object.isPerspectiveCamera){let Z=this.object.position;cJ.copy(Z).sub(this.target);let W=cJ.length();W*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*W/$.clientHeight,this.object.matrix),this._panUp(2*Q*W/$.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/$.clientWidth,this.object.matrix),this._panUp(Q*(this.object.top-this.object.bottom)/this.object.zoom/$.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,Q){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let $=this.domElement.getBoundingClientRect(),Z=J-$.left,W=Q-$.top,K=$.width,H=$.height;this._mouse.x=Z/K*2-1,this._mouse.y=-(W/H)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(X9*this._rotateDelta.x/Q.clientHeight),this._rotateUp(X9*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let Q=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(X9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);Q=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-X9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);Q=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(X9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);Q=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-X9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);Q=!0;break}if(Q)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._rotateStart.set($,Z)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._panStart.set($,Z)}}_handleTouchStartDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,Z=J.pageY-Q.y,W=Math.sqrt($*$+Z*Z);this._dollyStart.set(0,W)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+$.x),W=0.5*(J.pageY+$.y);this._rotateEnd.set(Z,W)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(X9*this._rotateDelta.x/Q.clientHeight),this._rotateUp(X9*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._panEnd.set($,Z)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,Z=J.pageY-Q.y,W=Math.sqrt($*$+Z*Z);this._dollyEnd.set(0,W),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let K=(J.pageX+Q.x)*0.5,H=(J.pageY+Q.y)*0.5;this._updateZoomParameters(K,H)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId){this._pointers.splice(Q,1);return}}_isTrackingPointer(J){for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId)return!0;return!1}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new W0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q]}_customWheelEvent(J){let Q=J.deltaMode,$={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch(Q){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)$.deltaY*=10;return $}}function lq(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function mq(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function dq(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($X),this.state=MJ.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let Q=this._pointers[0],$=this._pointerPositions[Q];this._onTouchStart({pointerId:Q,pageX:$.x,pageY:$.y});break}}function uq(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case M8.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=MJ.DOLLY;break;case M8.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=MJ.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=MJ.ROTATE}break;case M8.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=MJ.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=MJ.PAN}break;default:this.state=MJ.NONE}if(this.state!==MJ.NONE)this.dispatchEvent(vW)}function cq(J){switch(this.state){case MJ.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case MJ.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case MJ.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function nq(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==MJ.NONE)return;J.preventDefault(),this.dispatchEvent(vW),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent($X)}function sq(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function iq(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case D8.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=MJ.TOUCH_ROTATE;break;case D8.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=MJ.TOUCH_PAN;break;default:this.state=MJ.NONE}break;case 2:switch(this.touches.TWO){case D8.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=MJ.TOUCH_DOLLY_PAN;break;case D8.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=MJ.TOUCH_DOLLY_ROTATE;break;default:this.state=MJ.NONE}break;default:this.state=MJ.NONE}if(this.state!==MJ.NONE)this.dispatchEvent(vW)}function oq(J){switch(this._trackPointer(J),this.state){case MJ.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case MJ.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case MJ.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case MJ.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=MJ.NONE}}function aq(J){if(this.enabled===!1)return;J.preventDefault()}function rq(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function tq(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var h6=new w;function I9(J,Q,$,Z,W,K){let H=2*Math.PI*W/4,Y=Math.max(K-2*W,0),X=Math.PI/4;h6.copy(Q),h6[Z]=0,h6.normalize();let U=0.5*H/(H+Y),N=1-h6.angleTo(J)/X;if(Math.sign(h6[$])===1)return N*U;else return Y/(H+Y)+U+U*(1-N)}class j8 extends Y9{constructor(J=1,Q=1,$=1,Z=2,W=0.1){let K=Z*2+1;W=Math.min(J/2,Q/2,$/2,W);super(1,1,1,K,K,K);if(this.type="RoundedBoxGeometry",this.parameters={width:J,height:Q,depth:$,segments:Z,radius:W},K===1)return;let H=this.toNonIndexed();this.index=null,this.attributes.position=H.attributes.position,this.attributes.normal=H.attributes.normal,this.attributes.uv=H.attributes.uv;let Y=new w,X=new w,U=new w(J,Q,$).divideScalar(2).subScalar(W),N=this.attributes.position.array,E=this.attributes.normal.array,G=this.attributes.uv.array,q=N.length/6,R=new w,V=0.5/K;for(let O=0,F=0;O<N.length;O+=3,F+=2)switch(Y.fromArray(N,O),X.copy(Y),X.x-=Math.sign(X.x)*V,X.y-=Math.sign(X.y)*V,X.z-=Math.sign(X.z)*V,X.normalize(),N[O+0]=U.x*Math.sign(Y.x)+X.x*W,N[O+1]=U.y*Math.sign(Y.y)+X.y*W,N[O+2]=U.z*Math.sign(Y.z)+X.z*W,E[O+0]=X.x,E[O+1]=X.y,E[O+2]=X.z,Math.floor(O/q)){case 0:R.set(1,0,0),G[F+0]=I9(R,X,"z","y",W,$),G[F+1]=1-I9(R,X,"y","z",W,Q);break;case 1:R.set(-1,0,0),G[F+0]=1-I9(R,X,"z","y",W,$),G[F+1]=1-I9(R,X,"y","z",W,Q);break;case 2:R.set(0,1,0),G[F+0]=1-I9(R,X,"x","z",W,J),G[F+1]=I9(R,X,"z","x",W,$);break;case 3:R.set(0,-1,0),G[F+0]=1-I9(R,X,"x","z",W,J),G[F+1]=1-I9(R,X,"z","x",W,$);break;case 4:R.set(0,0,1),G[F+0]=1-I9(R,X,"x","y",W,J),G[F+1]=1-I9(R,X,"y","x",W,Q);break;case 5:R.set(0,0,-1),G[F+0]=I9(R,X,"x","y",W,J),G[F+1]=1-I9(R,X,"y","x",W,Q);break}}static fromJSON(J){return new j8(J.width,J.height,J.depth,J.segments,J.radius)}}var p0={tableWidth:1.4,tableCenterY:0.724,tableThickness:0.09,feltWidth:1.17,feltCenterY:0.776,surfaceY:0.782,chairSeatY:0.51,chairSeatWidth:0.56,seatDistance:1.01,tileLength:0.12,tileWidth:0.06,tileThickness:0.025,tileGap:0.0035,pipRadius:0.0068,pipColumnSpacing:0.0136,pipRowSpacing:0.0175,rackRadius:0.635,rackSpacing:0.065,neutralPoseTime:10.25},X8=[[0,p0.seatDistance,Math.PI],[-p0.seatDistance,0,Math.PI/2],[0,-p0.seatDistance,0],[p0.seatDistance,0,-Math.PI/2]];function ZX(J){let Q=J.vertical?p0.tileWidth:p0.tileLength,$=J.vertical?p0.tileLength:p0.tileWidth;return{left:J.x-Q/2,right:J.x+Q/2,top:J.z-$/2,bottom:J.z+$/2}}var eq=p0.feltWidth/2-0.022;function WX(J,Q){let $=ZX(J);if(Math.max(Math.abs($.left),Math.abs($.right),Math.abs($.top),Math.abs($.bottom))>eq+0.00000001)return!1;return Q.every((Z)=>{let W=ZX(Z);return $.right<=W.left-0.0015||$.left>=W.right+0.0015||$.bottom<=W.top-0.0015||$.top>=W.bottom+0.0015})}function KX(J,Q,$){let{tileLength:Z,tileWidth:W,tileGap:K}=p0,H=Q.x===Q.y,Y=(H?W:Z)/2,X=J.tile,U=[],N=[[J.dx,J.dz],[J.dz,-J.dx],[-J.dz,J.dx]];for(let E=0;E<N.length;E++){let[G,q]=N[E],R=E!==0,V=(X.isDouble?W:Z)/2,O=(X.isDouble?Z:W)/2,F=X.x+J.dx*(R?X.isDouble?0:Z/4:V),_=X.z+J.dz*(R?X.isDouble?0:Z/4:V),k=R?[0,Z/8,-Z/8]:[0];for(let L of k){let z=Math.atan2(-q,G)+($==="left"?Math.PI:0)+(H?Math.PI/2:0);U.push({id:Q.id,x:F+G*((R?O:0)+K+Y)+J.dx*L,z:_+q*((R?O:0)+K+Y)+J.dz*L,yaw:z,vertical:Math.abs(Math.sin(z))>0.5,isDouble:H,dx:G,dz:q,side:$})}}return U}function hW(J,Q,$,Z){let W={id:"future",x:0,y:Z?0:1};return KX({tile:J,dx:J.dx,dz:J.dz},W,$).some((K)=>WX(K,Q))}function HX(J,Q=[]){if(J.length>28)throw Error("A double-six chain has at most 28 tiles.");if(!J.length)return[];let $=new Map(J.map((G)=>[G.id,G])),Z=Q.filter((G)=>G.type==="play"&&G.tile&&$.has(G.tile)),W=$.get(Z[0]?.tile||"")||J[0],K=J.findIndex((G)=>G.id===W.id),H=W.x===W.y,Y={id:W.id,x:0,z:0,yaw:H?Math.PI/2:0,vertical:H,isDouble:H,dx:1,dz:0,side:"root"},X=[Y],U=new Map([[Y.id,Y]]),N={left:{tile:Y,dx:-1,dz:0},right:{tile:Y,dx:1,dz:0}},E=Z.length===J.length?Z.slice(1):[...J.slice(0,K).reverse().map((G)=>({type:"play",tile:G.id,side:"left"})),...J.slice(K+1).map((G)=>({type:"play",tile:G.id,side:"right"}))];for(let G of E){let q=$.get(G.tile);if(U.has(q.id))continue;let R=G.side==="left"?"left":G.side==="right"?"right":J.findIndex((F)=>F.id===q.id)<K?"left":"right",V=KX(N[R],q,R).filter((F)=>WX(F,X)),O=V.find((F)=>hW(F,[...X,F],R,!1)&&hW(F,[...X,F],R,!0))||V.find((F)=>hW(F,[...X,F],R,!1))||V[0];if(!O)throw Error(`No safe placement for ${q.id} after ${X.length} tiles`);X.push(O),U.set(q.id,O),N[R]={tile:O,dx:O.dx,dz:O.dz}}return J.map((G)=>U.get(G.id))}function YX(J,Q,$=!1){if($)return{breath:0,headYaw:0,headNod:0};let Z=J*2.173+0.43;return{breath:0.0055*Math.sin(Q*(0.78+J*0.093)+Z),headYaw:0.087*Math.sin(Q*(0.213+J*0.037)+Z)+0.028*Math.sin(Q*(0.487+J*0.029)+Z*1.91),headNod:0.009*Math.sin(Q*(0.267+J*0.035)+Z*0.71)}}var bW=new w(1,0,0),JF=new w(0,1,0),W$=new TJ;function xW(J){let Q=[];return J.traverse(($)=>{if($.isBone)Q.push({bone:$,position:$.position.clone(),quaternion:$.quaternion.clone(),scale:$.scale.clone()})}),Q}function K$(J,Q,$=!1){for(let W of J.pose)W.bone.position.copy(W.position),W.bone.quaternion.copy(W.quaternion),W.bone.scale.copy(W.scale);let Z=YX(J.index,Q,$);if(J.spine)J.spine.quaternion.multiply(W$.setFromAxisAngle(bW,Z.breath));if(J.head)J.head.quaternion.multiply(W$.setFromAxisAngle(JF,Z.headYaw)),J.head.quaternion.multiply(W$.setFromAxisAngle(bW,Z.headNod));if(!$&&J.reaction){let W=Q-J.reaction.time;if(W>=0&&W<1.2&&J.head){let K=Math.sin(W/1.2*Math.PI)*0.035;J.head.quaternion.multiply(W$.setFromAxisAngle(bW,K))}}J.holder.updateMatrixWorld(!0)}function XX({scene:J,texture:Q,mat:$,box:Z,cylinder:W,random:K,teal:H,wood:Y,storeSign:X}){let U=Q((k,L,z)=>{k.fillStyle="#39796d",k.fillRect(0,0,L,z);let I=k.createLinearGradient(0,0,0,z);I.addColorStop(0,"#cac09b18"),I.addColorStop(0.7,"#14382d00"),I.addColorStop(1,"#162d2566"),k.fillStyle=I,k.fillRect(0,0,L,z);for(let A=0;A<7000;A++)k.fillStyle=A%3?"#b4ad8618":"#142d2924",k.fillRect(K()*L,K()*z,1+K()*3,1+K()*2);for(let A=0;A<190;A++){let M=K()*L,P=A<125?z*(0.7+K()*0.3):K()*z,p=6+K()*17;k.fillStyle=A%3?"#a69c7d":"#6a7b6a",k.beginPath();for(let y=0;y<8;y++){let b=y*Math.PI/4,o=p*(0.6+K()*0.5);k.lineTo(M+Math.cos(b)*o,P+Math.sin(b)*o*0.65)}k.fill()}k.strokeStyle="#1b372e24";for(let A=48;A<z;A+=57)k.beginPath(),k.moveTo(0,A),k.lineTo(L,A),k.stroke()},1024,1024);H.map=U,H.color.set("#c7ccbb"),H.needsUpdate=!0,Y.color.set("#bca98a"),Y.roughness=0.84,X.material.map=Q((k,L,z)=>{k.fillStyle="#966045",k.fillRect(0,0,L,z),k.fillStyle="#e7d6a7",k.textAlign="center",k.textBaseline="middle",k.font="bold 66px Georgia",k.fillText("COLMADO LA ESQUINA",L/2,z/2);for(let I=0;I<2000;I++)k.fillStyle=I%2?"#58472c30":"#dec29630",k.fillRect(K()*L,K()*z,1+K()*5,1+K()*3);k.strokeStyle="#57412c",k.lineWidth=7,k.strokeRect(3,3,L-6,z-6)},1024,256),X.material.needsUpdate=!0;let E=["#b68e3c","#a45137","#6a8b62","#bbad8a"].map((k,L)=>new iJ({roughness:0.94,map:Q((z,I,A)=>{z.fillStyle=k,z.fillRect(0,0,I,A);for(let M=0;M<30;M++)z.strokeStyle=M%2?"#fff2":"#0002",z.beginPath(),z.moveTo(K()*I,0),z.lineTo(K()*I,A),z.stroke();z.fillStyle="#dfd1a6",z.fillRect(20,A*0.32,I-40,A*0.36),z.fillStyle="#403c29",z.font="bold 31px Georgia",z.textAlign="center",z.fillText(["CAFÉ","ARROZ","PLÁTANO","AZÚCAR"][L],I/2,A*0.53)},256,384)}));for(let k=0;k<3;k++)for(let L=0;L<8;L++)Z(-3+L*0.17,1.73+k*0.48,-4.46,0.13,0.23,0.075,E[(L+k)%4],(K()-0.5)*0.1);for(let[k,L]of[[-2.7,-3.5],[2.4,-3.3]])Z(k,0.18,L,0.51,0.35,0.4,"#897052"),Z(k+0.05,0.47,L-0.04,0.4,0.23,0.32,"#a68c62");for(let k=0;k<3;k++)W(2.48+k*0.24,0.18,-2.3,0.09,0.1,0.31,"#74a69e",12),W(2.48+k*0.24,0.36,-2.3,0.035,0.043,0.075,"#5b8c84",10);for(let k=0;k<4;k++){let L=new c0(new K8(1,10,7),$(k%2?"#a08e69":"#b0a078"));L.scale.set(0.15,0.24,0.12),L.position.set(-2.6+k*0.25,0.23,-2.1),L.rotation.z=(k-1.5)*0.06,L.castShadow=!0,J.add(L)}let G=new c0(new x9(0.72,0.69),new iJ({roughness:1,map:Q((k,L,z)=>{k.fillStyle="#263d30",k.fillRect(0,0,L,z),k.strokeStyle="#9c8c62",k.lineWidth=16,k.strokeRect(8,8,L-16,z-16),k.fillStyle="#dcdcb8",k.textAlign="center";for(let[I,A,M]of[["HOY HAY",68,43],["CAFÉ",150,48],["HIELO · PAN",228,32],["REFRESCOS",292,31]])k.font=`${M}px Georgia`,k.fillText(I,L/2,A)},384,360)}));G.position.set(-3.43,1.6,-2.33),G.rotation.z=0.025,J.add(G);let q=[];Z(-1.12,1.59,-4,0.42,0.21,0.31,"#677761"),Z(-1.12,1.61,-3.836,0.34,0.1,0.016,"#414b3d"),Z(-0.38,1.5,-3.98,0.3,0.018,0.22,"#c5b887");for(let[k,L,z]of[[0.7,-4.03,"#8b7747"],[0.98,-4.07,"#637751"],[1.29,-4.02,"#a88b50"]])W(k,1.6,L,0.07,0.075,0.25,z,14),W(k,1.739,L,0.077,0.077,0.028,"#aaa386",12);Z(0.2,1.51,-4.01,0.4,0.07,0.28,"#6c5838");for(let k=0;k<4;k++){let L=new c0(new K8(1,10,6),$(k%2?"#bca276":"#a98e61"));L.scale.set(0.055,0.035,0.115),L.position.set(0.07+k*0.085,1.57,-4),L.rotation.y=(k-1.5)*0.13,J.add(L)}let R=new oJ({transparent:!0,depthWrite:!1,map:Q((k,L,z)=>{for(let I=0;I<90;I++)k.fillStyle=I%2?"#152c2110":"#3036230a",k.beginPath(),k.ellipse(L/2+(K()-0.5)*L*0.45,z/2+(K()-0.5)*z*0.45,K()*L*0.24,K()*z*0.18,K()*Math.PI,0,Math.PI*2),k.fill()},256,256)});for(let[k,L,z,I]of[[-2.4,-2.2,1.1,0.9],[2.5,-2.5,1.3,0.8],[0,-3.25,2,0.6]]){let A=new c0(new x9(z,I),R);A.rotation.x=-Math.PI/2,A.position.set(k,0.008,L),J.add(A)}for(let[k,L]of[[-3,-0.9],[3.3,-1.5]]){W(k,0.18,L,0.18,0.13,0.34,"#87553c",14),W(k,0.354,L,0.16,0.16,0.012,"#3f422d",12);let z=new yJ;z.position.set(k,0.36,L),J.add(z);for(let I=0;I<7;I++){let A=new z6;A.moveTo(0,0),A.quadraticCurveTo(-0.09,0.23,0,0.55+K()*0.12),A.quadraticCurveTo(0.09,0.23,0,0);let M=new c0(new P6(A,5),new iJ({color:I%2?"#597d4f":"#3c603e",roughness:1,side:W9}));M.rotation.set(0.3+K()*0.4,I*Math.PI*2/7,0),z.add(M)}q.push(z)}let V=new x9(0.55,1.3,5,9),O=new c0(V,new iJ({color:"#b2a27c",roughness:1,side:W9}));O.position.set(-2.85,1.75,-3.05),J.add(O);let F=V.attributes.position,_=F.array.slice();return{update(k){q.forEach((L,z)=>L.rotation.z=Math.sin(k*0.53+z*2.1)*0.015);for(let L=0;L<F.count;L++){let z=_[L*3+1];F.setZ(L,Math.sin(k*1.17+z*3)*0.025*(0.65-z)/1.3)}F.needsUpdate=!0}}}var Q7=Math.PI*2,t0=(J=0,Q=0,$=0)=>new w(J,Q,$),QF=[[],[4],[0,8],[0,4,8],[0,2,6,8],[0,2,4,6,8],[0,2,3,5,6,8]];async function RR(J,{onProgress:Q=()=>{}}={}){let $=new TQ;$.background=new g0("#132931"),$.fog=new q6("#132931",0.024);let Z=new lJ(42,innerWidth/innerHeight,0.08,90);Z.position.set(3.1,2.65,4.2);let W;try{W=new BW({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{throw Error("This device could not start WebGL. Try a recent desktop browser.")}let K=/SwiftShader|llvmpipe|Software/i.test((()=>{let h=W.getContext(),Q0=h.getExtension("WEBGL_debug_renderer_info");return Q0?h.getParameter(Q0.UNMASKED_RENDERER_WEBGL):""})());W.setSize(innerWidth,innerHeight),W.setPixelRatio(K?0.65:Math.min(devicePixelRatio,1.5,1920/innerWidth)),W.outputColorSpace=h9,W.toneMapping=Y6,W.toneMappingExposure=1.2,W.shadowMap.enabled=!K,W.shadowMap.type=p8,J.appendChild(W.domElement);let H=new fW(Z,W.domElement);H.target.set(0,0.8,-0.15),H.enableDamping=!0,H.dampingFactor=0.065,H.enablePan=!1,H.minDistance=2.3,H.maxDistance=8,H.minPolarAngle=0.25,H.maxPolarAngle=Math.PI*0.48,H.update(),$.add(new sQ("#b9c9dd","#655244",1.05));let Y=new b7("#b6cbe3",1);Y.position.set(-5,9,5),$.add(Y);let X=new f7("#ffd19b",36,14,Math.PI*0.44,0.72,1.8);X.position.set(0,4.15,0.5),X.target.position.set(0,0.2,0),X.castShadow=!0,X.shadow.mapSize.set(1024,1024),X.shadow.bias=-0.0004,X.shadow.normalBias=0.035,$.add(X,X.target);let U=new h7("#ffbf7d",17,9,2);U.position.set(0,2.5,-3.5),$.add(U);let N=new Map,E=new Map;function G(h,Q0=0.85,N0=0){let L0=h+","+Q0+","+N0;if(!N.has(L0))N.set(L0,new iJ({color:h,roughness:Q0,metalness:N0}));return N.get(L0)}function q(h,Q0,N0,L0=[0,0,0],Y0=[1,1,1]){let E0=Q0.uuid;if(!E.has(E0))E.set(E0,{material:Q0,geos:[]});let T0=new d0().compose(t0(...N0),new TJ().setFromEuler(new j9(...L0)),t0(...Y0));h.applyMatrix4(T0),E.get(E0).geos.push(h)}function R(h,Q0,N0,L0,Y0,E0,T0,x0=0){q(new Y9(L0,Y0,E0),typeof T0==="string"?G(T0):T0,[h,Q0,N0],[0,x0,0])}function V(h,Q0,N0,L0,Y0,E0,T0,x0=10,ZJ=[0,0,0]){q(new s9(L0,Y0,E0,x0),typeof T0==="string"?G(T0):T0,[h,Q0,N0],ZJ)}function O(h,Q0=512,N0=512){let L0=document.createElement("canvas");L0.width=Q0,L0.height=N0,h(L0.getContext("2d"),Q0,N0);let Y0=new xQ(L0);return Y0.colorSpace=h9,Y0.anisotropy=Math.min(8,W.capabilities.getMaxAnisotropy()),Y0}let F=191,_=()=>{return F=Math.imul(F,1664525)+1013904223>>>0,F/4294967296},k=O((h,Q0,N0)=>{h.fillStyle="#65432b",h.fillRect(0,0,Q0,N0);for(let L0=0;L0<700;L0++){h.strokeStyle=`rgba(${_()>0.5?"170,122,70":"35,22,14"},${0.08+_()*0.2})`,h.lineWidth=0.3+_()*2,h.beginPath();let Y0=_()*N0;h.moveTo(0,Y0);for(let E0=0;E0<Q0;E0+=20)h.lineTo(E0,Y0+Math.sin(E0*0.013+L0)*3);h.stroke()}}),L=new iJ({map:k,roughness:0.65,color:"#e7bc8c"}),z=G("#4c3022",0.75),I=G("#287770"),A=G("#d2c5a2"),M=G("#a65443"),P=O((h,Q0,N0)=>{h.fillStyle="#746f5f",h.fillRect(0,0,Q0,N0);for(let L0=0;L0<18000;L0++)h.fillStyle=`rgba(${_()>0.5?"210,203,175":"45,47,41"},.12)`,h.fillRect(_()*Q0,_()*N0,1+_()*3,1+_()*2);h.strokeStyle="#4f5349",h.lineWidth=2,h.strokeRect(1,1,Q0-2,N0-2)});P.wrapS=P.wrapT=B8,P.repeat.set(16,12),R(0,-0.1,0,32,0.2,25,new iJ({map:P,roughness:1,color:"#c3b59e"})),R(0,-0.11,6.3,35,0.1,5.5,"#343b3b"),R(0,0.02,3.45,35,0.2,0.2,"#aaa592");for(let h=-8;h<9;h++)R(h*1.8,-0.045,6.3,0.7,0.012,0.045,"#b9ad83");R(0,1.6,-5.1,7.5,3.4,0.2,I),R(-3.8,1.6,-3.85,0.2,3.4,2.7,I),R(3.8,1.6,-3.85,0.2,3.4,2.7,I),R(-3.48,1.1,-2.52,0.7,2.3,0.32,I),R(3.45,1.1,-2.52,0.8,2.3,0.32,I),R(0,2.95,-2.52,7.5,0.42,0.35,M),R(0,3.24,-3.7,8,0.12,4.4,"#435451");for(let h=0;h<30;h++)R(-4+h*0.276,3.3,-3.7,0.028,0.055,4.6,"#82928a");R(0,0.85,-4.24,3.9,1.1,0.62,L),R(0,1.43,-4.2,4.08,0.1,0.78,L);for(let h=0;h<3;h++)R(-0.6,1.58+h*0.48,-4.78,5.8,0.065,0.38,L),R(-0.6,1.84+h*0.48,-4.98,5.8,0.48,0.065,"#443e30");R(2.95,1.02,-4.55,1.02,2.1,0.8,"#d0ceb8"),R(2.95,1.12,-4.11,0.84,1.55,0.035,"#254c51");for(let h=0;h<3;h++)R(2.95,0.59+h*0.51,-4.05,0.8,0.025,0.05,"#b3c5bc");let p=[];for(let h=0;h<88;h++){let Q0=Math.floor(h/29),N0=h%29;p.push({pos:[-3.18+N0*0.182,1.615+Q0*0.48,-4.69],scale:0.7+h%5*0.07,color:["#566641","#a27735","#293f37","#6b3126"][h%4]})}let y=new C6([new W0(0,0),new W0(0.036,0),new W0(0.043,0.025),new W0(0.043,0.17),new W0(0.019,0.205),new W0(0.017,0.285),new W0(0.021,0.29),new W0(0.021,0.305),new W0(0,0.31)],12);p.forEach((h)=>q(y.clone(),G(h.color,0.3),h.pos,[0,0,0],[h.scale,h.scale,h.scale]));for(let[h,Q0,N0]of[[-3.1,-1.9,"#a15340"],[3.1,-2,"#9d6540"],[-3.2,-2,"#5f6e39"]])for(let L0=0;L0<3;L0++){R(h,0.19+L0*0.34,Q0,0.52,0.3,0.4,N0);for(let Y0=0;Y0<5;Y0++)R(h-0.2+Y0*0.1,0.18+L0*0.34,Q0+0.204,0.055,0.16,0.015,"#2c3025")}for(let h=0;h<5;h++){let Q0=-7-h*3.5;R(Q0,1.5,-3,3.1,3,3.2,h%2?"#b3694f":"#4c8174"),R(Q0,2.2,-1.38,1,0.8,0.045,"#b59961"),R(Q0,2.2,-1.35,0.045,0.86,0.055,"#273e37"),R(Q0,0.98,-1.38,0.9,1.9,0.04,"#354e49")}for(let h=0;h<4;h++)V(-5-h*5,2.3,-2.1,0.08,0.09,4.6,"#665443"),R(-5-h*5,4.2,-2.1,1.8,0.09,0.09,"#514b3d");function b(h,Q0,N0,L0="#202d28"){let Y0=new y7(t0(...h),t0(...N0),t0(...Q0));q(new _6(Y0,20,0.008,4,!1),G(L0),[0,0,0])}b([-8,3.9,-0.9],[6,3.9,-0.9],[0,2.4,-0.9]);for(let h=0;h<14;h++){let Q0=-5+h*0.78,N0=3.6-0.4*Math.sin(h/13*Math.PI);V(Q0,N0,-0.9,0.026,0.031,0.075,new iJ({color:"#fff0c1",emissive:"#ffbc63",emissiveIntensity:2}),8)}b([0,5,-1],[0,3.75,0.25],[0,4.4,-0.1]),V(0,3.67,0.25,0.08,0.05,0.1,new iJ({color:"#ffe7a6",emissive:"#ffd18b",emissiveIntensity:3}),12);let o=new yJ;o.position.set(4.8,0,-2.8),$.add(o);let T=new c0(new s9(0.1,0.15,4.5,9),G("#696047"));T.position.y=2.25,o.add(T);for(let h=0;h<9;h++){let Q0=new c0(new K8(1,10,5),G(h%2?"#4a654c":"#344e3d"));Q0.scale.set(0.27,0.075,1.5),Q0.position.set(Math.sin(h*Q7/9)*0.72,4.35,Math.cos(h*Q7/9)*0.72),Q0.rotation.set(0.23,h*Q7/9,0),o.add(Q0)}let d=new c0(new j8(p0.tableWidth,p0.tableThickness,p0.tableWidth,3,0.035),L);d.position.y=p0.tableCenterY,d.castShadow=!0,d.receiveShadow=!0,$.add(d);let r=new c0(new j8(p0.feltWidth,0.012,p0.feltWidth,2,0.02),new iJ({color:"#284e3e",roughness:1}));r.position.y=p0.feltCenterY,r.receiveShadow=!0,$.add(r);for(let h of[-0.49,0.49])for(let Q0 of[-0.49,0.49])R(h,0.35,Q0,0.095,0.68,0.095,z);for(let h of[-0.602,0.602])for(let Q0 of[-0.602,0.602])V(h,0.771,Q0,0.044,0.044,0.006,"#231c15",20);for(let h=0;h<4;h++){let[Q0,N0,L0]=X8[h],Y0=new yJ;Y0.position.set(Q0,0,N0),Y0.rotation.y=L0,$.add(Y0);let E0=G(h%2?"#c8c8b3":"#abbbb3"),T0=(x0,ZJ,RJ,KJ,g9,rJ)=>{let H$=t0(KJ,g9,rJ).applyAxisAngle(t0(0,1,0),L0).add(t0(Q0,0,N0));q(new j8(x0,ZJ,RJ,2,0.022),E0,H$.toArray(),[0,L0,0])};T0(p0.chairSeatWidth,0.06,0.54,0,p0.chairSeatY,0),T0(0.53,0.47,0.05,0,0.79,-0.25);for(let x0 of[-0.24,0.24])for(let ZJ of[-0.21,0.21])T0(0.042,0.49,0.042,x0,0.245,ZJ)}function l(h,Q0,N0,L0,Y0,E0=60){let T0=O((x0,ZJ,RJ)=>{x0.fillStyle=L0,x0.fillRect(0,0,ZJ,RJ),x0.fillStyle=Y0,x0.textAlign="center",x0.textBaseline="middle",x0.font=`bold ${E0}px Georgia`,x0.fillText(h,ZJ/2,RJ/2)},1024,256);return new c0(new x9(Q0,N0),new oJ({map:T0}))}let H0=l("COLMADO  LA ESQUINA",4.8,0.38,"#a05d42","#f8e8b9",64);H0.position.set(0,2.94,-2.33),$.add(H0);let n=l("MESA",0.18,0.048,"#284e3e","#81906b",77);n.rotation.x=-Math.PI/2,n.position.set(0,p0.surfaceY+0.001,0.46),$.add(n);let t=new yJ;t.position.set(0,2.62,-2.2),t.rotation.x=-Math.PI/2,$.add(t),V(0,2.9,-2.2,0.015,0.015,0.56,"#777a68",8),V(0,3.18,-2.2,0.075,0.075,0.025,"#767763",12);let $0=new c0(new K8(0.075,12,8),G("#41493d"));t.add($0);for(let h=0;h<5;h++){let Q0=new c0(new Y9(0.13,0.5,0.025),G("#85856e",0.88,0.05));Q0.position.set(Math.sin(h*Q7/5)*0.285,Math.cos(h*Q7/5)*0.285,0),Q0.rotation.z=-h*Q7/5,t.add(Q0)}let w0=new yJ;w0.position.set(-12,0.05,5.2),$.add(w0);for(let h of[-0.36,0.36]){let Q0=new c0(new o8(0.19,0.038,7,14),G("#182221"));Q0.position.set(h,0.2,0),w0.add(Q0)}let f0=new c0(new j8(0.65,0.17,0.2,2,0.04),G("#823e2f",0.45,0.25));f0.position.y=0.49,w0.add(f0);let qJ=new c0(new Y9(0.35,0.06,0.22),G("#202725"));qJ.position.set(-0.08,0.61,0),w0.add(qJ);let n0=new c0(new s9(0.015,0.015,0.45,6),G("#8c9c96",0.4,0.5));n0.position.set(0.32,0.59,0),n0.rotation.z=-0.3,w0.add(n0);let s=XX({scene:$,texture:O,mat:G,box:R,cylinder:V,random:_,teal:I,wood:L,storeSign:H0});for(let{material:h,geos:Q0}of E.values()){let N0=CY(Q0,!1);if(N0){let L0=new c0(N0,h);L0.receiveShadow=!0,L0.castShadow=!0,$.add(L0)}Q0.forEach((L0)=>L0.dispose())}let Z0=new yJ,X0=new yJ;$.add(Z0,X0);let y0=new j8(p0.tileLength,p0.tileThickness,p0.tileWidth,2,0.005),b0=G("#f3edda",0.75),j0=G("#d9d4c1",0.75),vJ=new oJ({color:"#090d0c",toneMapped:!1}),a0=new oJ({color:"#111410",toneMapped:!1}),JJ=new s9(p0.pipRadius,p0.pipRadius,0.0015,14),UJ=new Y9(0.0035,0.001,p0.tileWidth*0.82),$J=new Set([y0,JJ,UJ]),pJ=new Set([b0,j0,vJ,a0]);function FJ(h,Q0,N0=!1){let L0=new yJ,Y0=new c0(y0,N0?j0:b0);if(Y0.castShadow=!0,Y0.receiveShadow=!0,L0.add(Y0),!N0){let E0=[];if([h,Q0].forEach((x0,ZJ)=>QF[x0].forEach((RJ)=>E0.push(t0((ZJ===0?-1:1)*p0.tileLength/4+(RJ%3-1)*p0.pipColumnSpacing,p0.tileThickness/2+0.002,(Math.floor(RJ/3)-1)*p0.pipRowSpacing)))),E0.length){let x0=new s8(JJ,vJ,E0.length),ZJ=new d0;E0.forEach((RJ,KJ)=>x0.setMatrixAt(KJ,ZJ.makeTranslation(RJ.x,RJ.y,RJ.z))),L0.add(x0)}let T0=new c0(UJ,a0);T0.position.y=p0.tileThickness/2+0.0015,L0.add(T0)}return L0}function aJ(h){return t0(h.x,p0.surfaceY+p0.tileThickness/2+0.001,h.z)}let CJ=new c0(new o8(0.2,0.006,5,38),new oJ({color:"#e8bf70",transparent:!0,opacity:0.7}));CJ.rotation.x=-Math.PI/2,CJ.position.y=0.027,$.add(CJ);let PJ=[],j=[],IJ=[],GJ=[],AJ=new SW,C=0,D=4,S=[];function m(h){let Q0=new yJ,N0=["coffee","juice","beer","water"][h];if(N0==="beer"){let x0=new c0(y,G("#62421e",0.23,0.05));x0.scale.setScalar(0.85),Q0.add(x0)}else{let x0=new c0(new s9(0.047,0.037,0.105,18),G(N0==="coffee"?"#e4dfc8":N0==="juice"?"#bfa478":"#719b9c",0.3));x0.position.y=0.055,Q0.add(x0);let ZJ=new c0(new k6(0.041,20),G(N0==="coffee"?"#24150e":N0==="juice"?"#ebbd72":"#9cbfc0",0.16));if(ZJ.rotation.x=-Math.PI/2,ZJ.position.y=0.11,Q0.add(ZJ),N0==="coffee"){let RJ=new c0(new s9(0.075,0.07,0.012,20),G("#ded9c3",0.25));Q0.add(RJ);let KJ=new c0(new o8(0.024,0.006,6,12),G("#e4dfc8",0.3));KJ.position.set(0.052,0.062,0),Q0.add(KJ)}}Q0.traverse((x0)=>{if(x0.isMesh)x0.castShadow=!0,x0.receiveShadow=!0});let[L0,Y0,E0]=X8[h],T0=t0(-0.44,0.773,0.39).applyAxisAngle(t0(0,1,0),E0).add(t0(L0,0,Y0));T0.x=C8.clamp(T0.x,-0.62,0.62),T0.z=C8.clamp(T0.z,-0.62,0.62),Q0.position.copy(T0),$.add(Q0),GJ.push({group:Q0,home:T0,index:h})}for(let h=0;h<4;h++)m(h);async function J0(h,Q0){try{Q(`Seating ${["Don Rafa","Marisol","Luis","Carmen"][h]}…`,C/D);let N0=await AJ.loadAsync(`/models/${Q0}.glb`);j[h]=N0;let L0=N0.scene,Y0=new yJ;Y0.add(L0);let E0=new w6(L0);if(N0.animations[0])E0.clipAction(N0.animations.find((rJ)=>rJ.name==="Seated")||N0.animations[0]).play();E0.setTime(p0.neutralPoseTime),L0.updateMatrixWorld(!0),L0.traverse((rJ)=>{if(rJ.isSkinnedMesh)rJ.computeBoundingBox();if(rJ.isMesh)rJ.castShadow=!0,rJ.receiveShadow=!0,rJ.frustumCulled=!1,rJ.material.roughness=0.83});let T0=new K9().setFromObject(L0),x0=L0.getObjectByName("Hips"),ZJ=x0?.getWorldPosition(t0())||T0.getCenter(t0());L0.position.set(-ZJ.x,-T0.min.y,-ZJ.z);let[RJ,KJ,g9]=X8[h];if(Y0.position.set(RJ,0,KJ),Y0.rotation.y=g9,$.add(Y0),PJ[h]={root:L0,holder:Y0,index:h,pose:xW(L0),head:L0.getObjectByName("Head"),spine:L0.getObjectByName("Spine01"),reaction:null},C++,Q(C===4?"The table is ready.":`${C} of 4 seats ready`,C/D),IJ.length===0&&c>0)v(c)}catch(N0){S.push(Q0),console.error("Character load failed",Q0,N0),Q(`Could not load ${Q0}. Reload to retry.`,C/D)}}let G0=Promise.all(["rafa-upright","marisol","luis-upright","carmen"].map((h,Q0)=>J0(Q0,h))),R0=null,c=0,a="",M0=0,I0="attract",U0=null,K0=[],v0=0,h0=0;function WJ(h){while(h.children.length){let Q0=h.children.pop();Q0.parent=null,Q0.traverse((N0)=>{if(N0.isMesh&&!$J.has(N0.geometry))N0.geometry.dispose();if(N0.isMesh&&!pJ.has(N0.material))N0.material.dispose()})}}function v(h){c=h;let Q0=Math.min(8,h);for(let N0=IJ.length-1;N0>=Q0;N0--)$.remove(IJ[N0].holder),IJ.pop();while(IJ.length<Q0&&j.filter(Boolean).length){let N0=IJ.length,L0=j[N0%4]||j.find(Boolean),Y0=$$(L0.scene),E0=new yJ;E0.add(Y0);let T0=new w6(Y0);if(L0.animations[0])T0.clipAction(L0.animations.find((KJ)=>KJ.name==="Seated")||L0.animations[0]).play();T0.setTime(p0.neutralPoseTime),Y0.updateMatrixWorld(!0),Y0.traverse((KJ)=>{if(KJ.isSkinnedMesh)KJ.computeBoundingBox();if(KJ.isMesh)KJ.castShadow=!1,KJ.frustumCulled=!1});let x0=new K9().setFromObject(Y0),ZJ=Y0.getObjectByName("Hips")?.getWorldPosition(t0())||x0.getCenter(t0());Y0.position.x-=ZJ.x,Y0.position.y-=x0.min.y,Y0.position.z-=ZJ.z,E0.position.set(-2.5+N0%4*1.66,0,-2.5-Math.floor(N0/4)*0.65),E0.rotation.y=0,$.add(E0);let RJ=new c0(new Y9(0.56,0.06,0.54),A);RJ.position.set(0,p0.chairSeatY,0),E0.add(RJ),IJ.push({root:Y0,holder:E0,pose:xW(Y0),head:Y0.getObjectByName("Head"),spine:Y0.getObjectByName("Spine01"),index:N0+4})}}function q0(h="table"){H.minDistance=h==="seat"?0.4:1.8,H.minPolarAngle=h==="overhead"?0.01:0.25;let Q0,N0=t0(0,0.8,0);if(h==="attract")Q0=t0(2.9,2.4,3.65),N0=t0(0,0.9,-0.23);else if(h==="overhead")Q0=t0(0.001,3.1,0.02),N0=t0(0,p0.surfaceY,0);else if(h==="seat")Q0=t0(0,1.36,0.86),N0=t0(0,0.83,-0.15);else Q0=t0(1.25,2.25,1.9);U0={from:Z.position.clone(),to:Q0,fromTarget:H.target.clone(),toTarget:N0,t:0}}function i(h,Q0=0){if(R0=h,c!==Q0)v(Q0);let N0=h?h.handNo+":"+h.moves.length+":"+h.phase:"attract";if(N0!==a){if(a=N0,WJ(Z0),K0=[],h?.chain.length||0){let Y0=HX(h.chain,h.moves);h.chain.forEach((E0,T0)=>{let x0=FJ(E0.x,E0.y);if(x0.position.copy(aJ(Y0[T0])),x0.rotation.y=Y0[T0].yaw,Z0.add(x0),h.event?.type==="play"&&E0.id===h.event.tile){let[ZJ,RJ]=X8[E0.seat],KJ=t0(ZJ*0.55,p0.surfaceY+0.08,RJ*0.55);K0.push({obj:x0,from:KJ,to:x0.position.clone(),elapsed:0,duration:0.45}),x0.position.copy(KJ),v0=performance.now();let g9=PJ[E0.seat];if(g9)g9.reaction={time:F0.elapsedTime}}})}else if(!h||h.phase==="lobby")for(let Y0=0;Y0<28;Y0++){let E0=FJ(0,0,!0);E0.position.set((Y0*37%23-11)*0.035,p0.surfaceY+0.019+Y0%3*0.006,(Y0*13%19-9)*0.031),E0.rotation.y=Y0*1.73,Z0.add(E0)}if(h?.phase==="playing"&&h.handNo!==M0&&h.moves.length===0){M0=h.handNo,h0=performance.now()+3400;for(let Y0=0;Y0<28;Y0++){let E0=FJ(0,0,!0),T0=t0((Y0*37%23-11)*0.032,p0.surfaceY+0.02,(Y0*13%19-9)*0.031),[x0,ZJ]=X8[Y0%4];E0.position.copy(T0),Z0.add(E0),K0.push({obj:E0,from:T0,to:t0(x0*0.57,p0.surfaceY+0.03,ZJ*0.57),elapsed:-Y0*0.065,duration:1.2,remove:!0,shuffle:!0})}}}{WJ(X0);let L0=[];for(let Y0=0;Y0<4;Y0++){let E0=!h||h.phase==="lobby"?0:h.counts[Y0]??0,[T0,x0,ZJ]=X8[Y0];for(let RJ=0;RJ<E0;RJ++){let KJ=new kJ;KJ.quaternion.setFromAxisAngle(t0(0,1,0),ZJ).multiply(new TJ().setFromAxisAngle(t0(1,0,0),0.12)).multiply(new TJ().setFromAxisAngle(t0(0,1,0),Math.PI/2)).multiply(new TJ().setFromAxisAngle(t0(0,0,1),Math.PI/2));let rJ=p0.tableCenterY+p0.tableThickness/2+p0.tileLength/2*Math.cos(0.12)+p0.tileThickness/2*Math.sin(0.12)+0.001;KJ.position.copy(t0((RJ-(E0-1)/2)*p0.rackSpacing,rJ,p0.rackRadius).applyAxisAngle(t0(0,1,0),ZJ)),KJ.updateMatrix(),L0.push(KJ.matrix.clone())}}if(L0.length){let Y0=new s8(y0,j0,L0.length);L0.forEach((E0,T0)=>Y0.setMatrixAt(T0,E0)),Y0.castShadow=!0,Y0.receiveShadow=!0,X0.add(Y0)}}if(CJ.visible=h?.phase==="playing",CJ.visible){let[L0,Y0]=X8[h.turn];CJ.position.set(L0,0.025,Y0)}}let F0=new aQ,B0=0,e=0,O0=0,m0=60,OJ=!1,YJ,U9="high",V9=null;function b6(){if(OJ)return;YJ=requestAnimationFrame(b6);let h=F0.getDelta(),Q0=Math.min(h,0.06),N0=V9??F0.elapsedTime,L0=performance.now();if(e++,O0+=h,O0>1)m0=e/O0,e=0,O0=0;B0++;let Y0=document.documentElement.classList.contains("reduced");if(U0){U0.t=Math.min(1,U0.t+Q0/1.1);let E0=U0.t*U0.t*(3-2*U0.t);if(Z.position.lerpVectors(U0.from,U0.to,E0),H.target.lerpVectors(U0.fromTarget,U0.toTarget,E0),U0.t===1)U0=null}if(!Y0)t.rotation.z=N0*3.5,o.rotation.z=Math.sin(N0*0.47)*0.009,s.update(N0);w0.visible=!0,w0.position.set(-4.7,0.05,2.8),w0.rotation.y=-0.28;for(let E0 of PJ.filter(Boolean))K$(E0,N0,Y0);for(let E0 of IJ)K$(E0,N0,Y0);if(K0=K0.filter((E0)=>{if(E0.elapsed+=Q0,E0.elapsed<0)return!0;let T0=Math.min(1,E0.elapsed/E0.duration),x0=T0*T0*(3-2*T0);if(E0.obj.position.lerpVectors(E0.from,E0.to,x0),E0.obj.position.y+=Math.sin(T0*Math.PI)*(E0.shuffle?0.06:0.13),E0.shuffle)E0.obj.rotation.y=Math.sin(T0*Q7)*0.6;if(T0===1&&E0.remove)return Z0.remove(E0.obj),!1;return T0<1}),X0.visible=L0>=h0,H.update(),W.render($,Z),B0%2===0)for(let E0 of document.querySelectorAll("[data-seatlabel]")){let T0=Number(E0.dataset.seatlabel),[x0,ZJ]=X8[T0],RJ=PJ[T0]?.head?.getWorldPosition(t0()).add(t0(0,0.23,0))||t0(x0,1.45,ZJ),KJ=RJ.project(Z);E0.style.transform=`translate(${(KJ.x*0.5+0.5)*innerWidth}px,${(-KJ.y*0.5+0.5)*innerHeight}px) translate(-50%,-100%)`,E0.style.visibility=KJ.z>1||Math.abs(KJ.x)>1.1||Math.abs(KJ.y)>1.15?"hidden":"visible"}if(B0%10===0||B0===1){window.mesaRigDebug=PJ.filter(Boolean).map((T0)=>({index:T0.index,head:T0.head?.getWorldPosition(t0()).toArray(),hip:T0.root.getObjectByName("Hips")?.getWorldPosition(t0()).toArray(),rootScale:T0.root.scale.toArray()})),window.mesaDiagnostics={fps:Math.round(m0),drawCalls:W.info.render.calls,triangles:W.info.render.triangles,characters:C,crowd:c,visibleCrowd:IJ.length,boardTiles:R0?.chain.length||0,quality:U9,modelErrors:S};let E0=document.querySelector("#perf");if(E0)E0.textContent=`${Math.round(m0)} fps · ${W.info.render.calls} draws`}}i(null),b6();let m7=()=>{Z.aspect=innerWidth/innerHeight,Z.updateProjectionMatrix(),W.setSize(innerWidth,innerHeight)};return window.addEventListener("resize",m7),H.addEventListener("start",()=>{U0=null}),{update:i,setCrowd:v,setCamera:q0,ready:G0,sampleTime(h){V9=h;for(let Q0 of[...PJ.filter(Boolean),...IJ])K$(Q0,h,!1);W.render($,Z)},setMode(h){I0=h,q0(h==="attract"?"attract":"table")},quality(h){U9=h,W.shadowMap.enabled=h!=="low"&&!K,W.setPixelRatio(K?0.65:h==="low"?1:Math.min(devicePixelRatio,1.5,1920/innerWidth))},dispose(){OJ=!0,cancelAnimationFrame(YJ),window.removeEventListener("resize",m7),H.dispose(),W.dispose(),J.replaceChildren()}}}export{RR as createWorld};

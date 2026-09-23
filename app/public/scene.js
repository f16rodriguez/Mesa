var PH="186",v8={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},f8={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},IH=0,_W=1,AH=2;var g6=1,Q$=2,a7=3,h8=0,Q9=1,K9=2,i9=0,p6=1,TW=2,SW=3,jW=4,wH=5;var r7=100,_H=101,TH=102,SH=103,jH=104,yH=200,vH=201,fH=202,hH=203,bH=204,xH=205,gH=206,pH=207,lH=208,mH=209,dH=210,uH=211,cH=212,nH=213,sH=214,iH=0,oH=1,aH=2,yW=3,rH=4,tH=5,eH=6,JY=7,QY=0,$Y=1,WY=2,x9=0,vW=1,fW=2,hW=3,l6=4,bW=5,xW=6,gW=7;var t7=301,K7=302,$$=303,W$=304,m6=306,b8=1000,e7=1001,Z$=1002,g9=1003,K$=1004;var H7=1005;var iJ=1006,J6=1007;var o9=1008;var p9=1009,ZY=1010,KY=1011,d6=1012,pW=1013,x8=1014,O8=1015,a9=1016,lW=1017,mW=1018,Q6=1020,HY=35902,YY=35899,XY=1021,UY=1022,r9=1023,Y7=1026,X7=1027,GY=1028,dW=1029,U7=1030,uW=1031;var cW=1033,H$=33776,Y$=33777,X$=33778,U$=33779,nW=35840,sW=35841,iW=35842,oW=35843,aW=36196,rW=37492,tW=37496,eW=37488,JZ=37489,G$=37490,QZ=37491,$Z=37808,WZ=37809,ZZ=37810,KZ=37811,HZ=37812,YZ=37813,XZ=37814,UZ=37815,GZ=37816,NZ=37817,qZ=37818,EZ=37819,FZ=37820,OZ=37821,RZ=36492,LZ=36494,VZ=36495,BZ=36283,kZ=36284,N$=36285,DZ=36286;var MZ=2300,q$=2301;var CZ=0,u6=1,$6=2;var zZ=0,NY=1,G7="",l9="srgb",F9="srgb-linear",PZ="linear",zJ="srgb";var qY=512,EY=513,FY=514,E$=515,OY=516,RY=517,F$=518,LY=519;var IZ="300 es",AZ=2000;function qU(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function EU(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function n7(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function VY(){let J=n7("canvas");return J.style.display="block",J}var hK={},s7=null;function f6(...J){let Q="THREE."+J.shift();if(s7)s7("log",Q,...J);else console.log(Q,...J)}function BY(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function S0(...J){J=BY(J);let Q="THREE."+J.shift();if(s7)s7("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function c0(...J){J=BY(J);let Q="THREE."+J.shift();if(s7)s7("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function $7(...J){let Q=J.join(" ");if(Q in hK)return;hK[Q]=!0,S0(...J)}function kY(J,Q,$){return new Promise(function(W,Z){function K(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:Z();break;case J.TIMEOUT_EXPIRED:setTimeout(K,$);break;default:W()}}setTimeout(K,$)})}var DY={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class m9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let W=$[J];if(W!==void 0){let Z=W.indexOf(Q);if(Z!==-1)W.splice(Z,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let W=$.slice(0);for(let Z=0,K=W.length;Z<K;Z++)W[Z].call(this,J);J.target=null}}}var eJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bK=1234567,S6=Math.PI/180,W7=180/Math.PI;function P9(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,W=Math.random()*4294967295|0;return(eJ[J&255]+eJ[J>>8&255]+eJ[J>>16&255]+eJ[J>>24&255]+"-"+eJ[Q&255]+eJ[Q>>8&255]+"-"+eJ[Q>>16&15|64]+eJ[Q>>24&255]+"-"+eJ[$&63|128]+eJ[$>>8&255]+"-"+eJ[$>>16&255]+eJ[$>>24&255]+eJ[W&255]+eJ[W>>8&255]+eJ[W>>16&255]+eJ[W>>24&255]).toLowerCase()}function i0(J,Q,$){return Math.max(Q,Math.min($,J))}function wZ(J,Q){return(J%Q+Q)%Q}function FU(J,Q,$,W,Z){return W+(J-Q)*(Z-W)/($-Q)}function OU(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function j6(J,Q,$){return(1-$)*J+$*Q}function RU(J,Q,$,W){return j6(J,Q,1-Math.exp(-$*W))}function LU(J,Q=1){return Q-Math.abs(wZ(J,Q*2)-Q)}function VU(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function BU(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function kU(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function DU(J,Q){return J+Math.random()*(Q-J)}function MU(J){return J*(0.5-Math.random())}function CU(J){if(J!==void 0)bK=J;let Q=bK+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function zU(J){return J*S6}function PU(J){return J*W7}function IU(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function AU(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function wU(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function _U(J,Q,$,W,Z){let{cos:K,sin:H}=Math,Y=K($/2),X=H($/2),U=K((Q+W)/2),N=H((Q+W)/2),q=K((Q-W)/2),G=H((Q-W)/2),E=K((W-Q)/2),F=H((W-Q)/2);switch(Z){case"XYX":J.set(Y*N,X*q,X*G,Y*U);break;case"YZY":J.set(X*G,Y*N,X*q,Y*U);break;case"ZXZ":J.set(X*q,X*G,Y*N,Y*U);break;case"XZX":J.set(Y*N,X*F,X*E,Y*U);break;case"YXY":J.set(X*E,Y*N,X*F,Y*U);break;case"ZYZ":J.set(X*F,X*E,Y*N,Y*U);break;default:S0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+Z)}}function b9(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:case Uint8ClampedArray:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function RJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var c6={DEG2RAD:S6,RAD2DEG:W7,generateUUID:P9,clamp:i0,euclideanModulo:wZ,mapLinear:FU,inverseLerp:OU,lerp:j6,damp:RU,pingpong:LU,smoothstep:VU,smootherstep:BU,randInt:kU,randFloat:DU,randFloatSpread:MU,seededRandom:CU,degToRad:zU,radToDeg:PU,isPowerOfTwo:IU,ceilPowerOfTwo:AU,floorPowerOfTwo:wU,setQuaternionFromProperEuler:_U,normalize:RJ,denormalize:b9};class K0{static{K0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6],this.y=W[1]*Q+W[4]*$+W[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=i0(this.x,J.x,Q.x),this.y=i0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=i0(this.x,J,Q),this.y=i0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(i0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(i0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),W=Math.sin(Q),Z=this.x-J.x,K=this.y-J.y;return this.x=Z*$-K*W+J.x,this.y=Z*W+K*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class GJ{constructor(J=0,Q=0,$=0,W=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=W}static slerpFlat(J,Q,$,W,Z,K,H){let Y=$[W+0],X=$[W+1],U=$[W+2],N=$[W+3],q=Z[K+0],G=Z[K+1],E=Z[K+2],F=Z[K+3];if(N!==F||Y!==q||X!==G||U!==E){let B=Y*q+X*G+U*E+N*F;if(B<0)q=-q,G=-G,E=-E,F=-F,B=-B;let R=1-H;if(B<0.9995){let O=Math.acos(B),P=Math.sin(O);R=Math.sin(R*O)/P,H=Math.sin(H*O)/P,Y=Y*R+q*H,X=X*R+G*H,U=U*R+E*H,N=N*R+F*H}else{Y=Y*R+q*H,X=X*R+G*H,U=U*R+E*H,N=N*R+F*H;let O=1/Math.sqrt(Y*Y+X*X+U*U+N*N);Y*=O,X*=O,U*=O,N*=O}}J[Q]=Y,J[Q+1]=X,J[Q+2]=U,J[Q+3]=N}static multiplyQuaternionsFlat(J,Q,$,W,Z,K){let H=$[W],Y=$[W+1],X=$[W+2],U=$[W+3],N=Z[K],q=Z[K+1],G=Z[K+2],E=Z[K+3];return J[Q]=H*E+U*N+Y*G-X*q,J[Q+1]=Y*E+U*q+X*N-H*G,J[Q+2]=X*E+U*G+H*q-Y*N,J[Q+3]=U*E-H*N-Y*q-X*G,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,W){return this._x=J,this._y=Q,this._z=$,this._w=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:W,_z:Z,_order:K}=J,H=Math.cos,Y=Math.sin,X=H($/2),U=H(W/2),N=H(Z/2),q=Y($/2),G=Y(W/2),E=Y(Z/2);switch(K){case"XYZ":this._x=q*U*N+X*G*E,this._y=X*G*N-q*U*E,this._z=X*U*E+q*G*N,this._w=X*U*N-q*G*E;break;case"YXZ":this._x=q*U*N+X*G*E,this._y=X*G*N-q*U*E,this._z=X*U*E-q*G*N,this._w=X*U*N+q*G*E;break;case"ZXY":this._x=q*U*N-X*G*E,this._y=X*G*N+q*U*E,this._z=X*U*E+q*G*N,this._w=X*U*N-q*G*E;break;case"ZYX":this._x=q*U*N-X*G*E,this._y=X*G*N+q*U*E,this._z=X*U*E-q*G*N,this._w=X*U*N+q*G*E;break;case"YZX":this._x=q*U*N+X*G*E,this._y=X*G*N+q*U*E,this._z=X*U*E-q*G*N,this._w=X*U*N-q*G*E;break;case"XZY":this._x=q*U*N-X*G*E,this._y=X*G*N-q*U*E,this._z=X*U*E+q*G*N,this._w=X*U*N+q*G*E;break;default:S0("Quaternion: .setFromEuler() encountered an unknown order: "+K)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,W=Math.sin($);return this._x=J.x*W,this._y=J.y*W,this._z=J.z*W,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],W=Q[4],Z=Q[8],K=Q[1],H=Q[5],Y=Q[9],X=Q[2],U=Q[6],N=Q[10],q=$+H+N;if(q>0){let G=0.5/Math.sqrt(q+1);this._w=0.25/G,this._x=(U-Y)*G,this._y=(Z-X)*G,this._z=(K-W)*G}else if($>H&&$>N){let G=2*Math.sqrt(1+$-H-N);this._w=(U-Y)/G,this._x=0.25*G,this._y=(W+K)/G,this._z=(Z+X)/G}else if(H>N){let G=2*Math.sqrt(1+H-$-N);this._w=(Z-X)/G,this._x=(W+K)/G,this._y=0.25*G,this._z=(Y+U)/G}else{let G=2*Math.sqrt(1+N-$-H);this._w=(K-W)/G,this._x=(Z+X)/G,this._y=(Y+U)/G,this._z=0.25*G}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(i0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let W=Math.min(1,Q/$);return this.slerp(J,W),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:W,_z:Z,_w:K}=J,H=Q._x,Y=Q._y,X=Q._z,U=Q._w;return this._x=$*U+K*H+W*X-Z*Y,this._y=W*U+K*Y+Z*H-$*X,this._z=Z*U+K*X+$*Y-W*H,this._w=K*U-$*H-W*Y-Z*X,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:W,_z:Z,_w:K}=J,H=this.dot(J);if(H<0)$=-$,W=-W,Z=-Z,K=-K,H=-H;let Y=1-Q;if(H<0.9995){let X=Math.acos(H),U=Math.sin(X);Y=Math.sin(Y*X)/U,Q=Math.sin(Q*X)/U,this._x=this._x*Y+$*Q,this._y=this._y*Y+W*Q,this._z=this._z*Y+Z*Q,this._w=this._w*Y+K*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+W*Q,this._z=this._z*Y+Z*Q,this._w=this._w*Y+K*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),W=Math.sqrt(1-$),Z=Math.sqrt($);return this.set(W*Math.sin(J),W*Math.cos(J),Z*Math.sin(Q),Z*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class _{static{_.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(xK.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(xK.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6]*W,this.y=Z[1]*Q+Z[4]*$+Z[7]*W,this.z=Z[2]*Q+Z[5]*$+Z[8]*W,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements,K=1/(Z[3]*Q+Z[7]*$+Z[11]*W+Z[15]);return this.x=(Z[0]*Q+Z[4]*$+Z[8]*W+Z[12])*K,this.y=(Z[1]*Q+Z[5]*$+Z[9]*W+Z[13])*K,this.z=(Z[2]*Q+Z[6]*$+Z[10]*W+Z[14])*K,this}applyQuaternion(J){let Q=this.x,$=this.y,W=this.z,Z=J.x,K=J.y,H=J.z,Y=J.w,X=2*(K*W-H*$),U=2*(H*Q-Z*W),N=2*(Z*$-K*Q);return this.x=Q+Y*X+K*N-H*U,this.y=$+Y*U+H*X-Z*N,this.z=W+Y*N+Z*U-K*X,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements;return this.x=Z[0]*Q+Z[4]*$+Z[8]*W,this.y=Z[1]*Q+Z[5]*$+Z[9]*W,this.z=Z[2]*Q+Z[6]*$+Z[10]*W,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=i0(this.x,J.x,Q.x),this.y=i0(this.y,J.y,Q.y),this.z=i0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=i0(this.x,J,Q),this.y=i0(this.y,J,Q),this.z=i0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(i0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:W,z:Z}=J,K=Q.x,H=Q.y,Y=Q.z;return this.x=W*Y-Z*H,this.y=Z*K-$*Y,this.z=$*H-W*K,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return t$.copy(this).projectOnVector(J),this.sub(t$)}reflect(J){return this.sub(t$.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(i0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,W=this.z-J.z;return Q*Q+$*$+W*W}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let W=Math.sin(Q)*J;return this.x=W*Math.sin($),this.y=Math.cos(Q)*J,this.z=W*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),W=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=W,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var t$=new _,xK=new GJ;class s0{static{s0.prototype.isMatrix3=!0}constructor(J,Q,$,W,Z,K,H,Y,X){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,W,Z,K,H,Y,X)}set(J,Q,$,W,Z,K,H,Y,X){let U=this.elements;return U[0]=J,U[1]=W,U[2]=H,U[3]=Q,U[4]=Z,U[5]=Y,U[6]=$,U[7]=K,U[8]=X,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,W=Q.elements,Z=this.elements,K=$[0],H=$[3],Y=$[6],X=$[1],U=$[4],N=$[7],q=$[2],G=$[5],E=$[8],F=W[0],B=W[3],R=W[6],O=W[1],P=W[4],k=W[7],L=W[2],C=W[5],A=W[8];return Z[0]=K*F+H*O+Y*L,Z[3]=K*B+H*P+Y*C,Z[6]=K*R+H*k+Y*A,Z[1]=X*F+U*O+N*L,Z[4]=X*B+U*P+N*C,Z[7]=X*R+U*k+N*A,Z[2]=q*F+G*O+E*L,Z[5]=q*B+G*P+E*C,Z[8]=q*R+G*k+E*A,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8];return Q*K*U-Q*H*X-$*Z*U+$*H*Y+W*Z*X-W*K*Y}invert(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],N=U*K-H*X,q=H*Y-U*Z,G=X*Z-K*Y,E=Q*N+$*q+W*G;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);let F=1/E;return J[0]=N*F,J[1]=(W*X-U*$)*F,J[2]=(H*$-W*K)*F,J[3]=q*F,J[4]=(U*Q-W*Y)*F,J[5]=(W*Z-H*Q)*F,J[6]=G*F,J[7]=($*Y-X*Q)*F,J[8]=(K*Q-$*Z)*F,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,W,Z,K,H){let Y=Math.cos(Z),X=Math.sin(Z);return this.set($*Y,$*X,-$*(Y*K+X*H)+K+J,-W*X,W*Y,-W*(-X*K+Y*H)+H+Q,0,0,1),this}scale(J,Q){return $7("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(e$.makeScale(J,Q)),this}rotate(J){return $7("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(e$.makeRotation(-J)),this}translate(J,Q){return $7("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(e$.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let W=0;W<9;W++)if(Q[W]!==$[W])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var e$=new s0,gK=new s0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),pK=new s0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function TU(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(Z,K,H){if(this.enabled===!1||K===H||!K||!H)return Z;if(this.spaces[K].transfer==="srgb")Z.r=F8(Z.r),Z.g=F8(Z.g),Z.b=F8(Z.b);if(this.spaces[K].primaries!==this.spaces[H].primaries)Z.applyMatrix3(this.spaces[K].toXYZ),Z.applyMatrix3(this.spaces[H].fromXYZ);if(this.spaces[H].transfer==="srgb")Z.r=u7(Z.r),Z.g=u7(Z.g),Z.b=u7(Z.b);return Z},workingToColorSpace:function(Z,K){return this.convert(Z,this.workingColorSpace,K)},colorSpaceToWorking:function(Z,K){return this.convert(Z,K,this.workingColorSpace)},getPrimaries:function(Z){return this.spaces[Z].primaries},getTransfer:function(Z){if(Z==="")return"linear";return this.spaces[Z].transfer},getToneMappingMode:function(Z){return this.spaces[Z].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(Z,K=this.workingColorSpace){return Z.fromArray(this.spaces[K].luminanceCoefficients)},define:function(Z){Object.assign(this.spaces,Z)},_getMatrix:function(Z,K,H){return Z.copy(this.spaces[K].toXYZ).multiply(this.spaces[H].fromXYZ)},_getDrawingBufferColorSpace:function(Z){return this.spaces[Z].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(Z=this.workingColorSpace){return this.spaces[Z].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(Z,K){return $7("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(Z,K)},toWorkingColorSpace:function(Z,K){return $7("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(Z,K)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],W=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:W,transfer:"linear",toXYZ:gK,fromXYZ:pK,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:W,transfer:"srgb",toXYZ:gK,fromXYZ:pK,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var JJ=TU();function F8(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function u7(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var T7;class _Z{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(T7===void 0)T7=n7("canvas");T7.width=J.width,T7.height=J.height;let W=T7.getContext("2d");if(J instanceof ImageData)W.putImageData(J,0,0);else W.drawImage(J,0,0,J.width,J.height);$=T7}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=n7("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let W=$.getImageData(0,0,J.width,J.height),Z=W.data;for(let K=0;K<Z.length;K++)Z[K]=F8(Z[K]/255)*255;return $.putImageData(W,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(F8(Q[$]/255)*255);else Q[$]=F8(Q[$]);return{data:Q,width:J.width,height:J.height}}else return S0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var SU=0;class n6{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:SU++}),this.uuid=P9(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},W=this.data;if(W!==null){let Z;if(Array.isArray(W)){Z=[];for(let K=0,H=W.length;K<H;K++)if(W[K].isDataTexture)Z.push(JW(W[K].image));else Z.push(JW(W[K]))}else Z=JW(W);$.url=Z}if(!Q)J.images[this.uuid]=$;return $}}function JW(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return _Z.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return S0("Texture: Unable to serialize Texture."),{}}var jU=0,QW=new _;class hJ extends m9{constructor(J=hJ.DEFAULT_IMAGE,Q=hJ.DEFAULT_MAPPING,$=1001,W=1001,Z=1006,K=1008,H=1023,Y=1009,X=hJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:jU++}),this.uuid=P9(),this.name="",this.source=new n6(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=W,this.magFilter=Z,this.minFilter=K,this.anisotropy=X,this.format=H,this.internalFormat=null,this.type=Y,this.offset=new K0(0,0),this.repeat=new K0(1,1),this.center=new K0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new s0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(QW).x}get height(){return this.source.getSize(QW).y}get depth(){return this.source.getSize(QW).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){S0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let W=this[Q];if(W===void 0){S0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(W&&$&&(W.isVector2&&$.isVector2))W.copy($);else if(W&&$&&(W.isVector3&&$.isVector3))W.copy($);else if(W&&$&&(W.isMatrix3&&$.isMatrix3))W.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}hJ.DEFAULT_IMAGE=null;hJ.DEFAULT_MAPPING=300;hJ.DEFAULT_ANISOTROPY=1;class LJ{static{LJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,W=1){this.x=J,this.y=Q,this.z=$,this.w=W}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,W){return this.x=J,this.y=Q,this.z=$,this.w=W,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,W=this.z,Z=this.w,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*W+K[12]*Z,this.y=K[1]*Q+K[5]*$+K[9]*W+K[13]*Z,this.z=K[2]*Q+K[6]*$+K[10]*W+K[14]*Z,this.w=K[3]*Q+K[7]*$+K[11]*W+K[15]*Z,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,W,Z,K=0.01,H=0.1,Y=J.elements,X=Y[0],U=Y[4],N=Y[8],q=Y[1],G=Y[5],E=Y[9],F=Y[2],B=Y[6],R=Y[10];if(Math.abs(U-q)<0.01&&Math.abs(N-F)<0.01&&Math.abs(E-B)<0.01){if(Math.abs(U+q)<0.1&&Math.abs(N+F)<0.1&&Math.abs(E+B)<0.1&&Math.abs(X+G+R-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let P=(X+1)/2,k=(G+1)/2,L=(R+1)/2,C=(U+q)/4,A=(N+F)/4,w=(E+B)/4;if(P>k&&P>L)if(P<0.01)$=0,W=0.707106781,Z=0.707106781;else $=Math.sqrt(P),W=C/$,Z=A/$;else if(k>L)if(k<0.01)$=0.707106781,W=0,Z=0.707106781;else W=Math.sqrt(k),$=C/W,Z=w/W;else if(L<0.01)$=0.707106781,W=0.707106781,Z=0;else Z=Math.sqrt(L),$=A/Z,W=w/Z;return this.set($,W,Z,Q),this}let O=Math.sqrt((B-E)*(B-E)+(N-F)*(N-F)+(q-U)*(q-U));if(Math.abs(O)<0.001)O=1;return this.x=(B-E)/O,this.y=(N-F)/O,this.z=(q-U)/O,this.w=Math.acos((X+G+R-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=i0(this.x,J.x,Q.x),this.y=i0(this.y,J.y,Q.y),this.z=i0(this.z,J.z,Q.z),this.w=i0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=i0(this.x,J,Q),this.y=i0(this.y,J,Q),this.z=i0(this.z,J,Q),this.w=i0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(i0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TZ extends m9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new LJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new LJ(0,0,J,Q),this.textures=[];let W={width:J,height:Q,depth:$.depth},Z=new hJ(W),K=$.count;for(let H=0;H<K;H++)this.textures[H]=Z.clone(),this.textures[H].isRenderTargetTexture=!0,this.textures[H].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveColorBuffer=$.resolveColorBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this.storeMultisampledColorBuffer=$.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=$.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=$.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let W=0,Z=this.textures.length;W<Z;W++)if(this.textures[W].image.width=J,this.textures[W].image.height=Q,this.textures[W].image.depth=$,this.textures[W].isData3DTexture!==!0)this.textures[W].isArrayTexture=this.textures[W].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let W=Object.assign({},J.textures[Q].image);this.textures[Q].source=new n6(W)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class O9 extends TZ{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class O$ extends hJ{constructor(J=null,Q=1,$=1,W=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class SZ extends hJ{constructor(J=null,Q=1,$=1,W=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class d0{static{d0.prototype.isMatrix4=!0}constructor(J,Q,$,W,Z,K,H,Y,X,U,N,q,G,E,F,B){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,W,Z,K,H,Y,X,U,N,q,G,E,F,B)}set(J,Q,$,W,Z,K,H,Y,X,U,N,q,G,E,F,B){let R=this.elements;return R[0]=J,R[4]=Q,R[8]=$,R[12]=W,R[1]=Z,R[5]=K,R[9]=H,R[13]=Y,R[2]=X,R[6]=U,R[10]=N,R[14]=q,R[3]=G,R[7]=E,R[11]=F,R[15]=B,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new d0().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,W=1/S7.setFromMatrixColumn(J,0).length(),Z=1/S7.setFromMatrixColumn(J,1).length(),K=1/S7.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*W,Q[1]=$[1]*W,Q[2]=$[2]*W,Q[3]=0,Q[4]=$[4]*Z,Q[5]=$[5]*Z,Q[6]=$[6]*Z,Q[7]=0,Q[8]=$[8]*K,Q[9]=$[9]*K,Q[10]=$[10]*K,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,W=J.y,Z=J.z,K=Math.cos($),H=Math.sin($),Y=Math.cos(W),X=Math.sin(W),U=Math.cos(Z),N=Math.sin(Z);if(J.order==="XYZ"){let q=K*U,G=K*N,E=H*U,F=H*N;Q[0]=Y*U,Q[4]=-Y*N,Q[8]=X,Q[1]=G+E*X,Q[5]=q-F*X,Q[9]=-H*Y,Q[2]=F-q*X,Q[6]=E+G*X,Q[10]=K*Y}else if(J.order==="YXZ"){let q=Y*U,G=Y*N,E=X*U,F=X*N;Q[0]=q+F*H,Q[4]=E*H-G,Q[8]=K*X,Q[1]=K*N,Q[5]=K*U,Q[9]=-H,Q[2]=G*H-E,Q[6]=F+q*H,Q[10]=K*Y}else if(J.order==="ZXY"){let q=Y*U,G=Y*N,E=X*U,F=X*N;Q[0]=q-F*H,Q[4]=-K*N,Q[8]=E+G*H,Q[1]=G+E*H,Q[5]=K*U,Q[9]=F-q*H,Q[2]=-K*X,Q[6]=H,Q[10]=K*Y}else if(J.order==="ZYX"){let q=K*U,G=K*N,E=H*U,F=H*N;Q[0]=Y*U,Q[4]=E*X-G,Q[8]=q*X+F,Q[1]=Y*N,Q[5]=F*X+q,Q[9]=G*X-E,Q[2]=-X,Q[6]=H*Y,Q[10]=K*Y}else if(J.order==="YZX"){let q=K*Y,G=K*X,E=H*Y,F=H*X;Q[0]=Y*U,Q[4]=F-q*N,Q[8]=E*N+G,Q[1]=N,Q[5]=K*U,Q[9]=-H*U,Q[2]=-X*U,Q[6]=G*N+E,Q[10]=q-F*N}else if(J.order==="XZY"){let q=K*Y,G=K*X,E=H*Y,F=H*X;Q[0]=Y*U,Q[4]=-N,Q[8]=X*U,Q[1]=q*N+F,Q[5]=K*U,Q[9]=G*N-E,Q[2]=E*N-G,Q[6]=H*U,Q[10]=F*N+q}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(yU,J,vU)}lookAt(J,Q,$){let W=this.elements;if(q9.subVectors(J,Q),q9.lengthSq()===0)q9.z=1;if(q9.normalize(),A8.crossVectors($,q9),A8.lengthSq()===0){if(Math.abs($.z)===1)q9.x+=0.0001;else q9.z+=0.0001;q9.normalize(),A8.crossVectors($,q9)}return A8.normalize(),zQ.crossVectors(q9,A8),W[0]=A8.x,W[4]=zQ.x,W[8]=q9.x,W[1]=A8.y,W[5]=zQ.y,W[9]=q9.y,W[2]=A8.z,W[6]=zQ.z,W[10]=q9.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,W=Q.elements,Z=this.elements,K=$[0],H=$[4],Y=$[8],X=$[12],U=$[1],N=$[5],q=$[9],G=$[13],E=$[2],F=$[6],B=$[10],R=$[14],O=$[3],P=$[7],k=$[11],L=$[15],C=W[0],A=W[4],w=W[8],D=W[12],I=W[1],m=W[5],f=W[9],x=W[13],o=W[2],y=W[6],u=W[10],e=W[14],d=W[3],U0=W[7],s=W[11],J0=W[15];return Z[0]=K*C+H*I+Y*o+X*d,Z[4]=K*A+H*m+Y*y+X*U0,Z[8]=K*w+H*f+Y*u+X*s,Z[12]=K*D+H*x+Y*e+X*J0,Z[1]=U*C+N*I+q*o+G*d,Z[5]=U*A+N*m+q*y+G*U0,Z[9]=U*w+N*f+q*u+G*s,Z[13]=U*D+N*x+q*e+G*J0,Z[2]=E*C+F*I+B*o+R*d,Z[6]=E*A+F*m+B*y+R*U0,Z[10]=E*w+F*f+B*u+R*s,Z[14]=E*D+F*x+B*e+R*J0,Z[3]=O*C+P*I+k*o+L*d,Z[7]=O*A+P*m+k*y+L*U0,Z[11]=O*w+P*f+k*u+L*s,Z[15]=O*D+P*x+k*e+L*J0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],W=J[8],Z=J[12],K=J[1],H=J[5],Y=J[9],X=J[13],U=J[2],N=J[6],q=J[10],G=J[14],E=J[3],F=J[7],B=J[11],R=J[15],O=Y*G-X*q,P=H*G-X*N,k=H*q-Y*N,L=K*G-X*U,C=K*q-Y*U,A=K*N-H*U;return Q*(F*O-B*P+R*k)-$*(E*O-B*L+R*C)+W*(E*P-F*L+R*A)-Z*(E*k-F*C+B*A)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],W=J[8],Z=J[1],K=J[5],H=J[9],Y=J[2],X=J[6],U=J[10];return Q*(K*U-H*X)-$*(Z*U-H*Y)+W*(Z*X-K*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let W=this.elements;if(J.isVector3)W[12]=J.x,W[13]=J.y,W[14]=J.z;else W[12]=J,W[13]=Q,W[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],N=J[9],q=J[10],G=J[11],E=J[12],F=J[13],B=J[14],R=J[15],O=Q*H-$*K,P=Q*Y-W*K,k=Q*X-Z*K,L=$*Y-W*H,C=$*X-Z*H,A=W*X-Z*Y,w=U*F-N*E,D=U*B-q*E,I=U*R-G*E,m=N*B-q*F,f=N*R-G*F,x=q*R-G*B,o=O*x-P*f+k*m+L*I-C*D+A*w;if(o===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let y=1/o;return J[0]=(H*x-Y*f+X*m)*y,J[1]=(W*f-$*x-Z*m)*y,J[2]=(F*A-B*C+R*L)*y,J[3]=(q*C-N*A-G*L)*y,J[4]=(Y*I-K*x-X*D)*y,J[5]=(Q*x-W*I+Z*D)*y,J[6]=(B*k-E*A-R*P)*y,J[7]=(U*A-q*k+G*P)*y,J[8]=(K*f-H*I+X*w)*y,J[9]=($*I-Q*f-Z*w)*y,J[10]=(E*C-F*k+R*O)*y,J[11]=(N*k-U*C-G*O)*y,J[12]=(H*D-K*m-Y*w)*y,J[13]=(Q*m-$*D+W*w)*y,J[14]=(F*P-E*L-B*O)*y,J[15]=(U*L-N*P+q*O)*y,this}scale(J){let Q=this.elements,$=J.x,W=J.y,Z=J.z;return Q[0]*=$,Q[4]*=W,Q[8]*=Z,Q[1]*=$,Q[5]*=W,Q[9]*=Z,Q[2]*=$,Q[6]*=W,Q[10]*=Z,Q[3]*=$,Q[7]*=W,Q[11]*=Z,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],W=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,W))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),W=Math.sin(Q),Z=1-$,K=J.x,H=J.y,Y=J.z,X=Z*K,U=Z*H;return this.set(X*K+$,X*H-W*Y,X*Y+W*H,0,X*H+W*Y,U*H+$,U*Y-W*K,0,X*Y-W*H,U*Y+W*K,Z*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,W,Z,K){return this.set(1,$,Z,0,J,1,K,0,Q,W,1,0,0,0,0,1),this}compose(J,Q,$){let W=this.elements,Z=Q._x,K=Q._y,H=Q._z,Y=Q._w,X=Z+Z,U=K+K,N=H+H,q=Z*X,G=Z*U,E=Z*N,F=K*U,B=K*N,R=H*N,O=Y*X,P=Y*U,k=Y*N,L=$.x,C=$.y,A=$.z;return W[0]=(1-(F+R))*L,W[1]=(G+k)*L,W[2]=(E-P)*L,W[3]=0,W[4]=(G-k)*C,W[5]=(1-(q+R))*C,W[6]=(B+O)*C,W[7]=0,W[8]=(E+P)*A,W[9]=(B-O)*A,W[10]=(1-(q+F))*A,W[11]=0,W[12]=J.x,W[13]=J.y,W[14]=J.z,W[15]=1,this}decompose(J,Q,$){let W=this.elements;J.x=W[12],J.y=W[13],J.z=W[14];let Z=this.determinantAffine();if(Z===0)return $.set(1,1,1),Q.identity(),this;let K=S7.set(W[0],W[1],W[2]).length(),H=S7.set(W[4],W[5],W[6]).length(),Y=S7.set(W[8],W[9],W[10]).length();if(Z<0)K=-K;v9.copy(this);let X=1/K,U=1/H,N=1/Y;return v9.elements[0]*=X,v9.elements[1]*=X,v9.elements[2]*=X,v9.elements[4]*=U,v9.elements[5]*=U,v9.elements[6]*=U,v9.elements[8]*=N,v9.elements[9]*=N,v9.elements[10]*=N,Q.setFromRotationMatrix(v9),$.x=K,$.y=H,$.z=Y,this}makePerspective(J,Q,$,W,Z,K,H=2000,Y=!1){let X=this.elements,U=2*Z/(Q-J),N=2*Z/($-W),q=(Q+J)/(Q-J),G=($+W)/($-W),E,F;if(Y)E=Z/(K-Z),F=K*Z/(K-Z);else if(H===2000)E=-(K+Z)/(K-Z),F=-2*K*Z/(K-Z);else if(H===2001)E=-K/(K-Z),F=-K*Z/(K-Z);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=q,X[12]=0,X[1]=0,X[5]=N,X[9]=G,X[13]=0,X[2]=0,X[6]=0,X[10]=E,X[14]=F,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,Q,$,W,Z,K,H=2000,Y=!1){let X=this.elements,U=2/(Q-J),N=2/($-W),q=-(Q+J)/(Q-J),G=-($+W)/($-W),E,F;if(Y)E=1/(K-Z),F=K/(K-Z);else if(H===2000)E=-2/(K-Z),F=-(K+Z)/(K-Z);else if(H===2001)E=-1/(K-Z),F=-Z/(K-Z);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=0,X[12]=q,X[1]=0,X[5]=N,X[9]=0,X[13]=G,X[2]=0,X[6]=0,X[10]=E,X[14]=F,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let W=0;W<16;W++)if(Q[W]!==$[W])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var S7=new _,v9=new d0,yU=new _(0,0,0),vU=new _(1,1,1),A8=new _,zQ=new _,q9=new _,lK=new d0,mK=new GJ;class I9{constructor(J=0,Q=0,$=0,W=I9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=W}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,W=this._order){return this._x=J,this._y=Q,this._z=$,this._order=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let W=J.elements,Z=W[0],K=W[4],H=W[8],Y=W[1],X=W[5],U=W[9],N=W[2],q=W[6],G=W[10];switch(Q){case"XYZ":if(this._y=Math.asin(i0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-U,G),this._z=Math.atan2(-K,Z);else this._x=Math.atan2(q,X),this._z=0;break;case"YXZ":if(this._x=Math.asin(-i0(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(H,G),this._z=Math.atan2(Y,X);else this._y=Math.atan2(-N,Z),this._z=0;break;case"ZXY":if(this._x=Math.asin(i0(q,-1,1)),Math.abs(q)<0.9999999)this._y=Math.atan2(-N,G),this._z=Math.atan2(-K,X);else this._y=0,this._z=Math.atan2(Y,Z);break;case"ZYX":if(this._y=Math.asin(-i0(N,-1,1)),Math.abs(N)<0.9999999)this._x=Math.atan2(q,G),this._z=Math.atan2(Y,Z);else this._x=0,this._z=Math.atan2(-K,X);break;case"YZX":if(this._z=Math.asin(i0(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,X),this._y=Math.atan2(-N,Z);else this._x=0,this._y=Math.atan2(H,G);break;case"XZY":if(this._z=Math.asin(-i0(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(q,X),this._y=Math.atan2(H,Z);else this._x=Math.atan2(-U,G),this._y=0;break;default:S0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return lK.makeRotationFromQuaternion(J),this.setFromRotationMatrix(lK,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return mK.setFromEuler(this),this.setFromQuaternion(mK,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}I9.DEFAULT_ORDER="XYZ";class R${constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var fU=0,dK=new _,j7=new GJ,X8=new d0,PQ=new _,M6=new _,hU=new _,bU=new GJ,uK=new _(1,0,0),cK=new _(0,1,0),nK=new _(0,0,1),sK={type:"added"},xU={type:"removed"},y7={type:"childadded",child:null},$W={type:"childremoved",child:null};class FJ extends m9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:fU++}),this.uuid=P9(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=FJ.DEFAULT_UP.clone();let J=new _,Q=new I9,$=new GJ,W=new _(1,1,1);function Z(){$.setFromEuler(Q,!1)}function K(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(Z),$._onChange(K),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:W},modelViewMatrix:{value:new d0},normalMatrix:{value:new s0}}),this.matrix=new d0,this.matrixWorld=new d0,this.matrixAutoUpdate=FJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=FJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new R$,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return j7.setFromAxisAngle(J,Q),this.quaternion.multiply(j7),this}rotateOnWorldAxis(J,Q){return j7.setFromAxisAngle(J,Q),this.quaternion.premultiply(j7),this}rotateX(J){return this.rotateOnAxis(uK,J)}rotateY(J){return this.rotateOnAxis(cK,J)}rotateZ(J){return this.rotateOnAxis(nK,J)}translateOnAxis(J,Q){return dK.copy(J).applyQuaternion(this.quaternion),this.position.add(dK.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(uK,J)}translateY(J){return this.translateOnAxis(cK,J)}translateZ(J){return this.translateOnAxis(nK,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(X8.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)PQ.copy(J);else PQ.set(J,Q,$);let W=this.parent;if(this.updateWorldMatrix(!0,!1),M6.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)X8.lookAt(M6,PQ,this.up);else X8.lookAt(PQ,M6,this.up);if(this.quaternion.setFromRotationMatrix(X8),W)X8.extractRotation(W.matrixWorld),j7.setFromRotationMatrix(X8),this.quaternion.premultiply(j7.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return c0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(sK),y7.child=J,this.dispatchEvent(y7),y7.child=null;else c0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(xU),$W.child=J,this.dispatchEvent($W),$W.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),X8.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),X8.multiply(J.parent.matrixWorld);return J.applyMatrix4(X8),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(sK),y7.child=J,this.dispatchEvent(y7),y7.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,W=this.children.length;$<W;$++){let K=this.children[$].getObjectByProperty(J,Q);if(K!==void 0)return K}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let W=this.children;for(let Z=0,K=W.length;Z<K;Z++)W[Z].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(M6,J,hU),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(M6,bU,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(J){J(this);let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:W}=J,Z=this.matrix.elements;Z[12]+=Q-Z[0]*Q-Z[4]*$-Z[8]*W,Z[13]+=$-Z[1]*Q-Z[5]*$-Z[9]*W,Z[14]+=W-Z[2]*Q-Z[6]*$-Z[10]*W}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let W=this.parent;if(J===!0&&W!==null)W.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let Z=this.children;for(let K=0,H=Z.length;K<H;K++)Z[K].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let W={};if(W.uuid=this.uuid,W.type=this.type,W.name=this.name,W.castShadow=this.castShadow,W.receiveShadow=this.receiveShadow,W.visible=this.visible,W.frustumCulled=this.frustumCulled,W.renderOrder=this.renderOrder,W.static=this.static,W.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)W.userData=this.userData;if(W.layers=this.layers.mask,W.matrix=this.matrix.toArray(),W.up=this.up.toArray(),this.pivot!==null)W.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)W.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)W.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(W.type="InstancedMesh",W.count=this.count,W.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)W.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(W.type="BatchedMesh",W.perObjectFrustumCulled=this.perObjectFrustumCulled,W.sortObjects=this.sortObjects,W.drawRanges=this._drawRanges,W.reservedRanges=this._reservedRanges,W.geometryInfo=this._geometryInfo.map((H)=>({...H,boundingBox:H.boundingBox?H.boundingBox.toJSON():void 0,boundingSphere:H.boundingSphere?H.boundingSphere.toJSON():void 0})),W.instanceInfo=this._instanceInfo.map((H)=>({...H})),W.availableInstanceIds=this._availableInstanceIds.slice(),W.availableGeometryIds=this._availableGeometryIds.slice(),W.nextIndexStart=this._nextIndexStart,W.nextVertexStart=this._nextVertexStart,W.geometryCount=this._geometryCount,W.maxInstanceCount=this._maxInstanceCount,W.maxVertexCount=this._maxVertexCount,W.maxIndexCount=this._maxIndexCount,W.geometryInitialized=this._geometryInitialized,W.matricesTexture=this._matricesTexture.toJSON(J),W.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)W.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)W.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)W.boundingBox=this.boundingBox.toJSON()}function Z(H,Y){if(H[Y.uuid]===void 0)H[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)W.background=this.background.toJSON();else if(this.background.isTexture)W.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)W.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){W.geometry=Z(J.geometries,this.geometry);let H=this.geometry.parameters;if(H!==void 0&&H.shapes!==void 0){let Y=H.shapes;if(Array.isArray(Y))for(let X=0,U=Y.length;X<U;X++){let N=Y[X];Z(J.shapes,N)}else Z(J.shapes,Y)}}if(this.isSkinnedMesh){if(W.bindMode=this.bindMode,W.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)Z(J.skeletons,this.skeleton),W.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let H=[];for(let Y=0,X=this.material.length;Y<X;Y++)H.push(Z(J.materials,this.material[Y]));W.material=H}else W.material=Z(J.materials,this.material);if(this.children.length>0){W.children=[];for(let H=0;H<this.children.length;H++)W.children.push(this.children[H].toJSON(J).object)}if(this.animations.length>0){W.animations=[];for(let H=0;H<this.animations.length;H++){let Y=this.animations[H];W.animations.push(Z(J.animations,Y))}}if(Q){let H=K(J.geometries),Y=K(J.materials),X=K(J.textures),U=K(J.images),N=K(J.shapes),q=K(J.skeletons),G=K(J.animations),E=K(J.nodes);if(H.length>0)$.geometries=H;if(Y.length>0)$.materials=Y;if(X.length>0)$.textures=X;if(U.length>0)$.images=U;if(N.length>0)$.shapes=N;if(q.length>0)$.skeletons=q;if(G.length>0)$.animations=G;if(E.length>0)$.nodes=E}return $.object=W,$;function K(H){let Y=[];for(let X in H){let U=H[X];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let W=J.children[$];this.add(W.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}FJ.DEFAULT_UP=new _(0,1,0);FJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;FJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class AJ extends FJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var gU={type:"move"};class s6{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new AJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new AJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new AJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let W=null,Z=null,K=null,H=this._targetRay,Y=this._grip,X=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(X&&J.hand){K=!0;for(let F of J.hand.values()){let B=Q.getJointPose(F,$),R=this._getHandJoint(X,F);if(B!==null)R.matrix.fromArray(B.transform.matrix),R.matrix.decompose(R.position,R.rotation,R.scale),R.matrixWorldNeedsUpdate=!0,R.jointRadius=B.radius;R.visible=B!==null}let U=X.joints["index-finger-tip"],N=X.joints["thumb-tip"],q=U.position.distanceTo(N.position),G=0.02,E=0.005;if(X.inputState.pinching&&q>G+E)X.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!X.inputState.pinching&&q<=G-E)X.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(Z=Q.getPose(J.gripSpace,$),Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(H!==null){if(W=Q.getPose(J.targetRaySpace,$),W===null&&Z!==null)W=Z;if(W!==null){if(H.matrix.fromArray(W.transform.matrix),H.matrix.decompose(H.position,H.rotation,H.scale),H.matrixWorldNeedsUpdate=!0,W.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(W.linearVelocity);else H.hasLinearVelocity=!1;if(W.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(W.angularVelocity);else H.hasAngularVelocity=!1;this.dispatchEvent(gU)}}}if(H!==null)H.visible=W!==null;if(Y!==null)Y.visible=Z!==null;if(X!==null)X.visible=K!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new AJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var MY={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},w8={h:0,s:0,l:0},IQ={h:0,s:0,l:0};function WW(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class l0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let W=J;if(W&&W.isColor)this.copy(W);else if(typeof W==="number")this.setHex(W);else if(typeof W==="string")this.setStyle(W)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,JJ.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,W=JJ.workingColorSpace){return this.r=J,this.g=Q,this.b=$,JJ.colorSpaceToWorking(this,W),this}setHSL(J,Q,$,W=JJ.workingColorSpace){if(J=wZ(J,1),Q=i0(Q,0,1),$=i0($,0,1),Q===0)this.r=this.g=this.b=$;else{let Z=$<=0.5?$*(1+Q):$+Q-$*Q,K=2*$-Z;this.r=WW(K,Z,J+0.3333333333333333),this.g=WW(K,Z,J),this.b=WW(K,Z,J-0.3333333333333333)}return JJ.colorSpaceToWorking(this,W),this}setStyle(J,Q="srgb"){function $(Z){if(Z===void 0)return;if(parseFloat(Z)<1)S0("Color: Alpha component of "+J+" will be ignored.")}let W;if(W=/^(\w+)\(([^\)]*)\)/.exec(J)){let Z,K=W[1],H=W[2];switch(K){case"rgb":case"rgba":if(Z=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(Z[4]),this.setRGB(Math.min(255,parseInt(Z[1],10))/255,Math.min(255,parseInt(Z[2],10))/255,Math.min(255,parseInt(Z[3],10))/255,Q);if(Z=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(Z[4]),this.setRGB(Math.min(100,parseInt(Z[1],10))/100,Math.min(100,parseInt(Z[2],10))/100,Math.min(100,parseInt(Z[3],10))/100,Q);break;case"hsl":case"hsla":if(Z=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(Z[4]),this.setHSL(parseFloat(Z[1])/360,parseFloat(Z[2])/100,parseFloat(Z[3])/100,Q);break;default:S0("Color: Unknown color model "+J)}}else if(W=/^\#([A-Fa-f\d]+)$/.exec(J)){let Z=W[1],K=Z.length;if(K===3)return this.setRGB(parseInt(Z.charAt(0),16)/15,parseInt(Z.charAt(1),16)/15,parseInt(Z.charAt(2),16)/15,Q);else if(K===6)return this.setHex(parseInt(Z,16),Q);else S0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=MY[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else S0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=F8(J.r),this.g=F8(J.g),this.b=F8(J.b),this}copyLinearToSRGB(J){return this.r=u7(J.r),this.g=u7(J.g),this.b=u7(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return JJ.workingToColorSpace(J9.copy(this),J),Math.round(i0(J9.r*255,0,255))*65536+Math.round(i0(J9.g*255,0,255))*256+Math.round(i0(J9.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=JJ.workingColorSpace){JJ.workingToColorSpace(J9.copy(this),Q);let{r:$,g:W,b:Z}=J9,K=Math.max($,W,Z),H=Math.min($,W,Z),Y,X,U=(H+K)/2;if(H===K)Y=0,X=0;else{let N=K-H;switch(X=U<=0.5?N/(K+H):N/(2-K-H),K){case $:Y=(W-Z)/N+(W<Z?6:0);break;case W:Y=(Z-$)/N+2;break;case Z:Y=($-W)/N+4;break}Y/=6}return J.h=Y,J.s=X,J.l=U,J}getRGB(J,Q=JJ.workingColorSpace){return JJ.workingToColorSpace(J9.copy(this),Q),J.r=J9.r,J.g=J9.g,J.b=J9.b,J}getStyle(J="srgb"){JJ.workingToColorSpace(J9.copy(this),J);let{r:Q,g:$,b:W}=J9;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${W.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(W*255)})`}offsetHSL(J,Q,$){return this.getHSL(w8),this.setHSL(w8.h+J,w8.s+Q,w8.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(w8),J.getHSL(IQ);let $=j6(w8.h,IQ.h,Q),W=j6(w8.s,IQ.s,Q),Z=j6(w8.l,IQ.l,Q);return this.setHSL($,W,Z),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,W=this.b,Z=J.elements;return this.r=Z[0]*Q+Z[3]*$+Z[6]*W,this.g=Z[1]*Q+Z[4]*$+Z[7]*W,this.b=Z[2]*Q+Z[5]*$+Z[8]*W,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var J9=new l0;l0.NAMES=MY;class i6{constructor(J,Q=0.00025){this.isFogExp2=!0,this.name="",this.color=new l0(J),this.density=Q}clone(){return new i6(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class W6 extends FJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new I9,this.environmentIntensity=1,this.environmentRotation=new I9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var f9=new _,U8=new _,ZW=new _,G8=new _,v7=new _,f7=new _,iK=new _,KW=new _,HW=new _,YW=new _,XW=new LJ,UW=new LJ,GW=new LJ;class z9{constructor(J=new _,Q=new _,$=new _){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,W){W.subVectors($,Q),f9.subVectors(J,Q),W.cross(f9);let Z=W.lengthSq();if(Z>0)return W.multiplyScalar(1/Math.sqrt(Z));return W.set(0,0,0)}static getBarycoord(J,Q,$,W,Z){f9.subVectors(W,Q),U8.subVectors($,Q),ZW.subVectors(J,Q);let K=f9.dot(f9),H=f9.dot(U8),Y=f9.dot(ZW),X=U8.dot(U8),U=U8.dot(ZW),N=K*X-H*H;if(N===0)return Z.set(0,0,0),null;let q=1/N,G=(X*Y-H*U)*q,E=(K*U-H*Y)*q;return Z.set(1-G-E,E,G)}static containsPoint(J,Q,$,W){if(this.getBarycoord(J,Q,$,W,G8)===null)return!1;return G8.x>=0&&G8.y>=0&&G8.x+G8.y<=1}static getInterpolation(J,Q,$,W,Z,K,H,Y){if(this.getBarycoord(J,Q,$,W,G8)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(Z,G8.x),Y.addScaledVector(K,G8.y),Y.addScaledVector(H,G8.z),Y}static getInterpolatedAttribute(J,Q,$,W,Z,K){return XW.setScalar(0),UW.setScalar(0),GW.setScalar(0),XW.fromBufferAttribute(J,Q),UW.fromBufferAttribute(J,$),GW.fromBufferAttribute(J,W),K.setScalar(0),K.addScaledVector(XW,Z.x),K.addScaledVector(UW,Z.y),K.addScaledVector(GW,Z.z),K}static isFrontFacing(J,Q,$,W){return f9.subVectors($,Q),U8.subVectors(J,Q),f9.cross(U8).dot(W)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,W){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[W]),this}setFromAttributeAndIndices(J,Q,$,W){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,W),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return f9.subVectors(this.c,this.b),U8.subVectors(this.a,this.b),f9.cross(U8).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return z9.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return z9.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,W,Z){return z9.getInterpolation(J,this.a,this.b,this.c,Q,$,W,Z)}containsPoint(J){return z9.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return z9.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,W=this.b,Z=this.c,K,H;v7.subVectors(W,$),f7.subVectors(Z,$),KW.subVectors(J,$);let Y=v7.dot(KW),X=f7.dot(KW);if(Y<=0&&X<=0)return Q.copy($);HW.subVectors(J,W);let U=v7.dot(HW),N=f7.dot(HW);if(U>=0&&N<=U)return Q.copy(W);let q=Y*N-U*X;if(q<=0&&Y>=0&&U<=0)return K=Y/(Y-U),Q.copy($).addScaledVector(v7,K);YW.subVectors(J,Z);let G=v7.dot(YW),E=f7.dot(YW);if(E>=0&&G<=E)return Q.copy(Z);let F=G*X-Y*E;if(F<=0&&X>=0&&E<=0)return H=X/(X-E),Q.copy($).addScaledVector(f7,H);let B=U*E-G*N;if(B<=0&&N-U>=0&&G-E>=0)return iK.subVectors(Z,W),H=(N-U)/(N-U+(G-E)),Q.copy(W).addScaledVector(iK,H);let R=1/(B+F+q);return K=F*R,H=q*R,Q.copy($).addScaledVector(v7,K).addScaledVector(f7,H)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class H9{constructor(J=new _(1/0,1/0,1/0),Q=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(h9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(h9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=h9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let Z=$.getAttribute("position");if(Q===!0&&Z!==void 0&&J.isInstancedMesh!==!0)for(let K=0,H=Z.count;K<H;K++){if(J.isMesh===!0)J.getVertexPosition(K,h9);else h9.fromBufferAttribute(Z,K);h9.applyMatrix4(J.matrixWorld),this.expandByPoint(h9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();AQ.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();AQ.copy($.boundingBox)}AQ.applyMatrix4(J.matrixWorld),this.union(AQ)}}let W=J.children;for(let Z=0,K=W.length;Z<K;Z++)this.expandByObject(W[Z],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,h9),h9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(C6),wQ.subVectors(this.max,C6),h7.subVectors(J.a,C6),b7.subVectors(J.b,C6),x7.subVectors(J.c,C6),_8.subVectors(b7,h7),T8.subVectors(x7,b7),t8.subVectors(h7,x7);let Q=[0,-_8.z,_8.y,0,-T8.z,T8.y,0,-t8.z,t8.y,_8.z,0,-_8.x,T8.z,0,-T8.x,t8.z,0,-t8.x,-_8.y,_8.x,0,-T8.y,T8.x,0,-t8.y,t8.x,0];if(!NW(Q,h7,b7,x7,wQ))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!NW(Q,h7,b7,x7,wQ))return!1;return _Q.crossVectors(_8,T8),Q=[_Q.x,_Q.y,_Q.z],NW(Q,h7,b7,x7,wQ)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,h9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(h9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return N8[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),N8[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),N8[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),N8[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),N8[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),N8[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),N8[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),N8[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(N8),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var N8=[new _,new _,new _,new _,new _,new _,new _,new _],h9=new _,AQ=new H9,h7=new _,b7=new _,x7=new _,_8=new _,T8=new _,t8=new _,C6=new _,wQ=new _,_Q=new _,e8=new _;function NW(J,Q,$,W,Z){for(let K=0,H=J.length-3;K<=H;K+=3){e8.fromArray(J,K);let Y=Z.x*Math.abs(e8.x)+Z.y*Math.abs(e8.y)+Z.z*Math.abs(e8.z),X=Q.dot(e8),U=$.dot(e8),N=W.dot(e8);if(Math.max(-Math.max(X,U,N),Math.min(X,U,N))>Y)return!1}return!0}var lJ=new _,TQ=new K0,pU=0;class dJ extends m9{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pU++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let W=0,Z=this.itemSize;W<Z;W++)this.array[J+W]=Q.array[$+W];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)TQ.fromBufferAttribute(this,Q),TQ.applyMatrix3(J),this.setXY(Q,TQ.x,TQ.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)lJ.fromBufferAttribute(this,Q),lJ.applyMatrix3(J),this.setXYZ(Q,lJ.x,lJ.y,lJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)lJ.fromBufferAttribute(this,Q),lJ.applyMatrix4(J),this.setXYZ(Q,lJ.x,lJ.y,lJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)lJ.fromBufferAttribute(this,Q),lJ.applyNormalMatrix(J),this.setXYZ(Q,lJ.x,lJ.y,lJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)lJ.fromBufferAttribute(this,Q),lJ.transformDirection(J),this.setXYZ(Q,lJ.x,lJ.y,lJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=b9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=RJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=b9(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=RJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=b9(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=RJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=b9(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=RJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=b9(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=RJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=RJ(Q,this.array),$=RJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,W){if(J*=this.itemSize,this.normalized)Q=RJ(Q,this.array),$=RJ($,this.array),W=RJ(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=W,this}setXYZW(J,Q,$,W,Z){if(J*=this.itemSize,this.normalized)Q=RJ(Q,this.array),$=RJ($,this.array),W=RJ(W,this.array),Z=RJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=W,this.array[J+3]=Z,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}}class L$ extends dJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class V$ extends dJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class YJ extends dJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var lU=new H9,z6=new _,qW=new _;class R9{constructor(J=new _,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else lU.setFromPoints(J).getCenter($);let W=0;for(let Z=0,K=J.length;Z<K;Z++)W=Math.max(W,$.distanceToSquared(J[Z]));return this.radius=Math.sqrt(W),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;z6.subVectors(J,this.center);let Q=z6.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),W=($-this.radius)*0.5;this.center.addScaledVector(z6,W/$),this.radius+=W}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else qW.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(z6.copy(J.center).add(qW)),this.expandByPoint(z6.copy(J.center).sub(qW));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var mU=0,M9=new d0,EW=new FJ,g7=new _,E9=new H9,P6=new H9,sJ=new _;class wJ extends m9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mU++}),this.uuid=P9(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((qU(J))?V$:L$)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let Z=new s0().getNormalMatrix(J);$.applyNormalMatrix(Z),$.needsUpdate=!0}let W=this.attributes.tangent;if(W!==void 0)W.transformDirection(J),W.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return M9.makeRotationFromQuaternion(J),this.applyMatrix4(M9),this}rotateX(J){return M9.makeRotationX(J),this.applyMatrix4(M9),this}rotateY(J){return M9.makeRotationY(J),this.applyMatrix4(M9),this}rotateZ(J){return M9.makeRotationZ(J),this.applyMatrix4(M9),this}translate(J,Q,$){return M9.makeTranslation(J,Q,$),this.applyMatrix4(M9),this}scale(J,Q,$){return M9.makeScale(J,Q,$),this.applyMatrix4(M9),this}lookAt(J){return EW.lookAt(J),EW.updateMatrix(),this.applyMatrix4(EW.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(g7).negate(),this.translate(g7.x,g7.y,g7.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let W=0,Z=J.length;W<Z;W++){let K=J[W];$.push(K.x,K.y,K.z||0)}this.setAttribute("position",new YJ($,3))}else{let $=Math.min(J.length,Q.count);for(let W=0;W<$;W++){let Z=J[W];Q.setXYZ(W,Z.x,Z.y,Z.z||0)}if(J.length>Q.count)S0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new H9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){c0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,W=Q.length;$<W;$++){let Z=Q[$];if(E9.setFromBufferAttribute(Z),this.morphTargetsRelative)sJ.addVectors(this.boundingBox.min,E9.min),this.boundingBox.expandByPoint(sJ),sJ.addVectors(this.boundingBox.max,E9.max),this.boundingBox.expandByPoint(sJ);else this.boundingBox.expandByPoint(E9.min),this.boundingBox.expandByPoint(E9.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))c0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new R9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){c0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(J){let $=this.boundingSphere.center;if(E9.setFromBufferAttribute(J),Q)for(let Z=0,K=Q.length;Z<K;Z++){let H=Q[Z];if(P6.setFromBufferAttribute(H),this.morphTargetsRelative)sJ.addVectors(E9.min,P6.min),E9.expandByPoint(sJ),sJ.addVectors(E9.max,P6.max),E9.expandByPoint(sJ);else E9.expandByPoint(P6.min),E9.expandByPoint(P6.max)}E9.getCenter($);let W=0;for(let Z=0,K=J.count;Z<K;Z++)sJ.fromBufferAttribute(J,Z),W=Math.max(W,$.distanceToSquared(sJ));if(Q)for(let Z=0,K=Q.length;Z<K;Z++){let H=Q[Z],Y=this.morphTargetsRelative;for(let X=0,U=H.count;X<U;X++){if(sJ.fromBufferAttribute(H,X),Y)g7.fromBufferAttribute(J,X),sJ.add(g7);W=Math.max(W,$.distanceToSquared(sJ))}}if(this.boundingSphere.radius=Math.sqrt(W),isNaN(this.boundingSphere.radius))c0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){c0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:W,uv:Z}=Q,K=this.getAttribute("tangent");if(K===void 0||K.count!==$.count)K=new dJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",K);let H=[],Y=[];for(let w=0;w<$.count;w++)H[w]=new _,Y[w]=new _;let X=new _,U=new _,N=new _,q=new K0,G=new K0,E=new K0,F=new _,B=new _;function R(w,D,I){X.fromBufferAttribute($,w),U.fromBufferAttribute($,D),N.fromBufferAttribute($,I),q.fromBufferAttribute(Z,w),G.fromBufferAttribute(Z,D),E.fromBufferAttribute(Z,I),U.sub(X),N.sub(X),G.sub(q),E.sub(q);let m=1/(G.x*E.y-E.x*G.y);if(!isFinite(m))return;F.copy(U).multiplyScalar(E.y).addScaledVector(N,-G.y).multiplyScalar(m),B.copy(N).multiplyScalar(G.x).addScaledVector(U,-E.x).multiplyScalar(m),H[w].add(F),H[D].add(F),H[I].add(F),Y[w].add(B),Y[D].add(B),Y[I].add(B)}let O=this.groups;if(O.length===0)O=[{start:0,count:J.count}];for(let w=0,D=O.length;w<D;++w){let I=O[w],m=I.start,f=I.count;for(let x=m,o=m+f;x<o;x+=3)R(J.getX(x+0),J.getX(x+1),J.getX(x+2))}let P=new _,k=new _,L=new _,C=new _;function A(w){L.fromBufferAttribute(W,w),C.copy(L);let D=H[w];P.copy(D),P.sub(L.multiplyScalar(L.dot(D))).normalize(),k.crossVectors(C,D);let m=k.dot(Y[w])<0?-1:1;K.setXYZW(w,P.x,P.y,P.z,m)}for(let w=0,D=O.length;w<D;++w){let I=O[w],m=I.start,f=I.count;for(let x=m,o=m+f;x<o;x+=3)A(J.getX(x+0)),A(J.getX(x+1)),A(J.getX(x+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new dJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let q=0,G=$.count;q<G;q++)$.setXYZ(q,0,0,0);let W=new _,Z=new _,K=new _,H=new _,Y=new _,X=new _,U=new _,N=new _;if(J)for(let q=0,G=J.count;q<G;q+=3){let E=J.getX(q+0),F=J.getX(q+1),B=J.getX(q+2);W.fromBufferAttribute(Q,E),Z.fromBufferAttribute(Q,F),K.fromBufferAttribute(Q,B),U.subVectors(K,Z),N.subVectors(W,Z),U.cross(N),H.fromBufferAttribute($,E),Y.fromBufferAttribute($,F),X.fromBufferAttribute($,B),H.add(U),Y.add(U),X.add(U),$.setXYZ(E,H.x,H.y,H.z),$.setXYZ(F,Y.x,Y.y,Y.z),$.setXYZ(B,X.x,X.y,X.z)}else for(let q=0,G=Q.count;q<G;q+=3)W.fromBufferAttribute(Q,q+0),Z.fromBufferAttribute(Q,q+1),K.fromBufferAttribute(Q,q+2),U.subVectors(K,Z),N.subVectors(W,Z),U.cross(N),$.setXYZ(q+0,U.x,U.y,U.z),$.setXYZ(q+1,U.x,U.y,U.z),$.setXYZ(q+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)sJ.fromBufferAttribute(J,Q),sJ.normalize(),J.setXYZ(Q,sJ.x,sJ.y,sJ.z)}toNonIndexed(){function J(H,Y){let{array:X,itemSize:U,normalized:N}=H,q=new X.constructor(Y.length*U),G=0,E=0;for(let F=0,B=Y.length;F<B;F++){if(H.isInterleavedBufferAttribute)G=Y[F]*H.data.stride+H.offset;else G=Y[F]*U;for(let R=0;R<U;R++)q[E++]=X[G++]}return new dJ(q,U,N)}if(this.index===null)return S0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new wJ,$=this.index.array,W=this.attributes;for(let H in W){let Y=W[H],X=J(Y,$);Q.setAttribute(H,X)}let Z=this.morphAttributes;for(let H in Z){let Y=[],X=Z[H];for(let U=0,N=X.length;U<N;U++){let q=X[U],G=J(q,$);Y.push(G)}Q.morphAttributes[H]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;for(let H=0,Y=K.length;H<Y;H++){let X=K[H];Q.addGroup(X.start,X.count,X.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let X in Y)if(Y[X]!==void 0)J[X]=Y[X];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let X=$[Y];J.data.attributes[Y]=X.toJSON(J.data)}let W={},Z=!1;for(let Y in this.morphAttributes){let X=this.morphAttributes[Y],U=[];for(let N=0,q=X.length;N<q;N++){let G=X[N];U.push(G.toJSON(J.data))}if(U.length>0)W[Y]=U,Z=!0}if(Z)J.data.morphAttributes=W,J.data.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;if(K.length>0)J.data.groups=JSON.parse(JSON.stringify(K));let H=this.boundingSphere;if(H!==null)J.data.boundingSphere=H.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let W=J.attributes;for(let X in W){let U=W[X];this.setAttribute(X,U.clone(Q))}let Z=J.morphAttributes;for(let X in Z){let U=[],N=Z[X];for(let q=0,G=N.length;q<G;q++)U.push(N[q].clone(Q));this.morphAttributes[X]=U}this.morphTargetsRelative=J.morphTargetsRelative;let K=J.groups;for(let X=0,U=K.length;X<U;X++){let N=K[X];this.addGroup(N.start,N.count,N.materialIndex)}let H=J.boundingBox;if(H!==null)this.boundingBox=H.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class o6{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=P9()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,$){J*=this.stride,$*=Q.stride;for(let W=0,Z=this.stride;W<Z;W++)this.array[J+W]=Q.array[$+W];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=P9();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),$=new this.constructor(Q,this.stride);return $.setUsage(this.usage),$}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=P9();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let Q={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return Q.usage=this.usage,Q}}var Z9=new _;class Z6{constructor(J,Q,$,W=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=$,this.normalized=W}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,$=this.data.count;Q<$;Q++)Z9.fromBufferAttribute(this,Q),Z9.applyMatrix4(J),this.setXYZ(Q,Z9.x,Z9.y,Z9.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)Z9.fromBufferAttribute(this,Q),Z9.applyNormalMatrix(J),this.setXYZ(Q,Z9.x,Z9.y,Z9.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)Z9.fromBufferAttribute(this,Q),Z9.transformDirection(J),this.setXYZ(Q,Z9.x,Z9.y,Z9.z);return this}getComponent(J,Q){let $=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)$=b9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=RJ($,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=$,this}setX(J,Q){if(this.normalized)Q=RJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=RJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=RJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=RJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=b9(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=b9(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=b9(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=b9(Q,this.array);return Q}setXY(J,Q,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=RJ(Q,this.array),$=RJ($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this}setXYZ(J,Q,$,W){if(J=J*this.data.stride+this.offset,this.normalized)Q=RJ(Q,this.array),$=RJ($,this.array),W=RJ(W,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=W,this}setXYZW(J,Q,$,W,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=RJ(Q,this.array),$=RJ($,this.array),W=RJ(W,this.array),Z=RJ(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=W,this.data.array[J+3]=Z,this}clone(J){if(J===void 0){f6("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let W=$*this.data.stride+this.offset;for(let Z=0;Z<this.itemSize;Z++)Q.push(this.data.array[W+Z])}return new dJ(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new Z6(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){f6("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let W=$*this.data.stride+this.offset;for(let Z=0;Z<this.itemSize;Z++)Q.push(this.data.array[W+Z])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var FW=new _,dU=new _,uU=new s0;class C9{constructor(J=new _(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,W){return this.normal.set(J,Q,$),this.constant=W,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let W=FW.subVectors($,Q).cross(dU.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(W,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let W=J.delta(FW),Z=this.normal.dot(W);if(Z===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let K=-(J.start.dot(this.normal)+this.constant)/Z;if($===!0&&(K<0||K>1))return null;return Q.copy(J.start).addScaledVector(W,K)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||uU.getNormalMatrix(J),W=this.coplanarPoint(FW).applyMatrix4(J),Z=this.normal.applyMatrix3($).normalize();return this.constant=-W.dot(Z),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var cU=0;class X9 extends m9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:cU++}),this.uuid=P9(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new l0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){S0(`Material: parameter '${Q}' has value of undefined.`);continue}let W=this[Q];if(W===void 0){S0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(W&&W.isColor)W.set($);else if(W&&W.isVector2&&($&&$.isVector2)||W&&W.isEuler&&($&&$.isEuler)||W&&W.isVector3&&($&&$.isVector3))W.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,$.blending=this.blending,$.side=this.side,$.shadowSide=this.shadowSide,$.vertexColors=this.vertexColors,$.opacity=this.opacity,$.transparent=this.transparent,$.blendSrc=this.blendSrc,$.blendDst=this.blendDst,$.blendEquation=this.blendEquation,$.blendSrcAlpha=this.blendSrcAlpha,$.blendDstAlpha=this.blendDstAlpha,$.blendEquationAlpha=this.blendEquationAlpha,$.blendColor=this.blendColor.getHex(),$.blendAlpha=this.blendAlpha,$.depthFunc=this.depthFunc,$.depthTest=this.depthTest,$.depthWrite=this.depthWrite,$.colorWrite=this.colorWrite,$.clipIntersection=this.clipIntersection,$.clipShadows=this.clipShadows,$.stencilWriteMask=this.stencilWriteMask,$.stencilFunc=this.stencilFunc,$.stencilRef=this.stencilRef,$.stencilFuncMask=this.stencilFuncMask,$.stencilFail=this.stencilFail,$.stencilZFail=this.stencilZFail,$.stencilZPass=this.stencilZPass,$.stencilWrite=this.stencilWrite,$.polygonOffset=this.polygonOffset,$.polygonOffsetFactor=this.polygonOffsetFactor,$.polygonOffsetUnits=this.polygonOffsetUnits,$.dithering=this.dithering,$.alphaTest=this.alphaTest,$.alphaHash=this.alphaHash,$.alphaToCoverage=this.alphaToCoverage,$.premultipliedAlpha=this.premultipliedAlpha,$.forceSinglePass=this.forceSinglePass,$.allowOverride=this.allowOverride,$.visible=this.visible,$.toneMapped=this.toneMapped,$.name=this.name,this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)$.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)$.clippingPlanes=this.clippingPlanes.map((Z)=>Z.toJSON());if(this.rotation!==void 0)$.rotation=this.rotation;if(this.depthPacking!==void 0)$.depthPacking=this.depthPacking;if(this.linewidth!==void 0)$.linewidth=this.linewidth;if(this.linecap!==void 0)$.linecap=this.linecap;if(this.linejoin!==void 0)$.linejoin=this.linejoin;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.wireframe!==void 0)$.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)$.flatShading=this.flatShading;if(this.fog!==void 0)$.fog=this.fog;if(Object.keys(this.userData).length>0)$.userData=this.userData;function W(Z){let K=[];for(let H in Z){let Y=Z[H];delete Y.metadata,K.push(Y)}return K}if(Q){let Z=W(J.textures),K=W(J.images);if(Z.length>0)$.textures=Z;if(K.length>0)$.images=K}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new l0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map(($)=>new C9().fromJSON($));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new K0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new K0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let W=Q.length;$=Array(W);for(let Z=0;Z!==W;++Z)$[Z]=Q[Z].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var q8=new _,OW=new _,SQ=new _,jQ=new _;class g8{constructor(J=new _,Q=new _(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,q8)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=q8.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return q8.copy(this.origin).addScaledVector(this.direction,Q),q8.distanceToSquared(J)}distanceSqToSegment(J,Q,$,W){OW.copy(J).add(Q).multiplyScalar(0.5),SQ.copy(Q).sub(J).normalize(),jQ.copy(this.origin).sub(OW);let Z=J.distanceTo(Q)*0.5,K=-this.direction.dot(SQ),H=jQ.dot(this.direction),Y=-jQ.dot(SQ),X=jQ.lengthSq(),U=Math.abs(1-K*K),N,q,G,E;if(U>0)if(N=K*Y-H,q=K*H-Y,E=Z*U,N>=0)if(q>=-E)if(q<=E){let F=1/U;N*=F,q*=F,G=N*(N+K*q+2*H)+q*(K*N+q+2*Y)+X}else q=Z,N=Math.max(0,-(K*q+H)),G=-N*N+q*(q+2*Y)+X;else q=-Z,N=Math.max(0,-(K*q+H)),G=-N*N+q*(q+2*Y)+X;else if(q<=-E)N=Math.max(0,-(-K*Z+H)),q=N>0?-Z:Math.min(Math.max(-Z,-Y),Z),G=-N*N+q*(q+2*Y)+X;else if(q<=E)N=0,q=Math.min(Math.max(-Z,-Y),Z),G=q*(q+2*Y)+X;else N=Math.max(0,-(K*Z+H)),q=N>0?Z:Math.min(Math.max(-Z,-Y),Z),G=-N*N+q*(q+2*Y)+X;else q=K>0?-Z:Z,N=Math.max(0,-(K*q+H)),G=-N*N+q*(q+2*Y)+X;if($)$.copy(this.origin).addScaledVector(this.direction,N);if(W)W.copy(OW).addScaledVector(SQ,q);return G}intersectSphere(J,Q){if(J.radius<0)return null;q8.subVectors(J.center,this.origin);let $=q8.dot(this.direction),W=q8.dot(q8)-$*$,Z=J.radius*J.radius;if(W>Z)return null;let K=Math.sqrt(Z-W),H=$-K,Y=$+K;if(Y<0)return null;if(H<0)return this.at(Y,Q);return this.at(H,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,W,Z,K,H,Y,X=1/this.direction.x,U=1/this.direction.y,N=1/this.direction.z,q=this.origin;if(X>=0)$=(J.min.x-q.x)*X,W=(J.max.x-q.x)*X;else $=(J.max.x-q.x)*X,W=(J.min.x-q.x)*X;if(U>=0)Z=(J.min.y-q.y)*U,K=(J.max.y-q.y)*U;else Z=(J.max.y-q.y)*U,K=(J.min.y-q.y)*U;if($>K||Z>W)return null;if(Z>$||isNaN($))$=Z;if(K<W||isNaN(W))W=K;if(N>=0)H=(J.min.z-q.z)*N,Y=(J.max.z-q.z)*N;else H=(J.max.z-q.z)*N,Y=(J.min.z-q.z)*N;if($>Y||H>W)return null;if(H>$||$!==$)$=H;if(Y<W||W!==W)W=Y;if(W<0)return null;return this.at($>=0?$:W,Q)}intersectsBox(J){return this.intersectBox(J,q8)!==null}intersectTriangle(J,Q,$,W,Z){let K=this.origin,H=this.direction,Y=H.x,X=H.y,U=H.z,N=J.x-K.x,q=J.y-K.y,G=J.z-K.z,E=Q.x-K.x,F=Q.y-K.y,B=Q.z-K.z,R=$.x-K.x,O=$.y-K.y,P=$.z-K.z,k=Math.abs(Y),L=Math.abs(X),C=Math.abs(U),A,w,D,I,m,f,x,o,y,u,e,d;if(k>=L&&k>=C)if(D=Y,f=N,y=E,d=R,Y>=0)A=X,w=U,I=q,m=G,x=F,o=B,u=O,e=P;else A=U,w=X,I=G,m=q,x=B,o=F,u=P,e=O;else if(L>=C)if(D=X,f=q,y=F,d=O,X>=0)A=U,w=Y,I=G,m=N,x=B,o=E,u=P,e=R;else A=Y,w=U,I=N,m=G,x=E,o=B,u=R,e=P;else if(D=U,f=G,y=B,d=P,U>=0)A=Y,w=X,I=N,m=q,x=E,o=F,u=R,e=O;else A=X,w=Y,I=q,m=N,x=F,o=E,u=O,e=R;if(D===0)return null;let U0=A/D,s=w/D,J0=1/D,Z0=I-U0*f,m0=m-s*f,j0=x-U0*y,BJ=o-s*y,u0=u-U0*d,n=e-s*d,Y0=u0*BJ-n*j0,G0=Z0*n-m0*u0,g0=j0*m0-BJ*Z0;if(W){if(Y0<0||G0<0||g0<0)return null}else if((Y0<0||G0<0||g0<0)&&(Y0>0||G0>0||g0>0))return null;let f0=Y0+G0+g0;if(f0===0)return null;let y0=J0*(Y0*f+G0*y+g0*d);if(f0>0?y0<0:y0>0)return null;return this.at(y0/f0,Z)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oJ extends X9{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new l0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new I9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var oK=new d0,J7=new g8,yQ=new R9,aK=new _,vQ=new _,fQ=new _,hQ=new _,RW=new _,bQ=new _,rK=new _,xQ=new _;class x0 extends FJ{constructor(J=new wJ,Q=new oJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,K=W.length;Z<K;Z++){let H=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=Z}}}}getVertexPosition(J,Q){let $=this.geometry,W=$.attributes.position,Z=$.morphAttributes.position,K=$.morphTargetsRelative;Q.fromBufferAttribute(W,J);let H=this.morphTargetInfluences;if(Z&&H){bQ.set(0,0,0);for(let Y=0,X=Z.length;Y<X;Y++){let U=H[Y],N=Z[Y];if(U===0)continue;if(RW.fromBufferAttribute(N,J),K)bQ.addScaledVector(RW,U);else bQ.addScaledVector(RW.sub(Q),U)}Q.add(bQ)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.material,Z=this.matrixWorld;if(W===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(yQ.copy($.boundingSphere),yQ.applyMatrix4(Z),J7.copy(J.ray).recast(J.near),yQ.containsPoint(J7.origin)===!1){if(J7.intersectSphere(yQ,aK)===null)return;if(J7.origin.distanceToSquared(aK)>(J.far-J.near)**2)return}if(oK.copy(Z).invert(),J7.copy(J.ray).applyMatrix4(oK),$.boundingBox!==null){if(J7.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,J7)}_computeIntersections(J,Q,$){let W,Z=this.geometry,K=this.material,H=Z.index,Y=Z.attributes.position,X=Z.attributes.uv,U=Z.attributes.uv1,N=Z.attributes.normal,q=Z.groups,G=Z.drawRange;if(H!==null)if(Array.isArray(K))for(let E=0,F=q.length;E<F;E++){let B=q[E],R=K[B.materialIndex],O=Math.max(B.start,G.start),P=Math.min(H.count,Math.min(B.start+B.count,G.start+G.count));for(let k=O,L=P;k<L;k+=3){let C=H.getX(k),A=H.getX(k+1),w=H.getX(k+2);if(W=gQ(this,R,J,$,X,U,N,C,A,w),W)W.faceIndex=Math.floor(k/3),W.face.materialIndex=B.materialIndex,Q.push(W)}}else{let E=Math.max(0,G.start),F=Math.min(H.count,G.start+G.count);for(let B=E,R=F;B<R;B+=3){let O=H.getX(B),P=H.getX(B+1),k=H.getX(B+2);if(W=gQ(this,K,J,$,X,U,N,O,P,k),W)W.faceIndex=Math.floor(B/3),Q.push(W)}}else if(Y!==void 0)if(Array.isArray(K))for(let E=0,F=q.length;E<F;E++){let B=q[E],R=K[B.materialIndex],O=Math.max(B.start,G.start),P=Math.min(Y.count,Math.min(B.start+B.count,G.start+G.count));for(let k=O,L=P;k<L;k+=3){let C=k,A=k+1,w=k+2;if(W=gQ(this,R,J,$,X,U,N,C,A,w),W)W.faceIndex=Math.floor(k/3),W.face.materialIndex=B.materialIndex,Q.push(W)}}else{let E=Math.max(0,G.start),F=Math.min(Y.count,G.start+G.count);for(let B=E,R=F;B<R;B+=3){let O=B,P=B+1,k=B+2;if(W=gQ(this,K,J,$,X,U,N,O,P,k),W)W.faceIndex=Math.floor(B/3),Q.push(W)}}}}function nU(J,Q,$,W,Z,K,H,Y){let X;if(Q.side===1)X=W.intersectTriangle(H,K,Z,!0,Y);else X=W.intersectTriangle(Z,K,H,Q.side===0,Y);if(X===null)return null;xQ.copy(Y),xQ.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(xQ);if(U<$.near||U>$.far)return null;return{distance:U,point:xQ.clone(),object:J}}function gQ(J,Q,$,W,Z,K,H,Y,X,U){J.getVertexPosition(Y,vQ),J.getVertexPosition(X,fQ),J.getVertexPosition(U,hQ);let N=nU(J,Q,$,W,vQ,fQ,hQ,rK);if(N){let q=new _;if(z9.getBarycoord(rK,vQ,fQ,hQ,q),Z)N.uv=z9.getInterpolatedAttribute(Z,Y,X,U,q,new K0);if(K)N.uv1=z9.getInterpolatedAttribute(K,Y,X,U,q,new K0);if(H){if(N.normal=z9.getInterpolatedAttribute(H,Y,X,U,q,new _),N.normal.dot(W.direction)>0)N.normal.multiplyScalar(-1)}let G={a:Y,b:X,c:U,normal:new _,materialIndex:0};z9.getNormal(vQ,fQ,hQ,G.normal),N.face=G,N.barycoord=q}return N}var I6=new LJ,tK=new LJ,eK=new LJ,sU=new LJ,JH=new d0,pQ=new _,LW=new R9,QH=new d0,VW=new g8;class B$ extends x0{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new d0,this.bindMatrixInverse=new d0,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new H9;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,pQ),this.boundingBox.expandByPoint(pQ)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new R9;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,pQ),this.boundingSphere.expandByPoint(pQ)}copy(J,Q){if(super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,Q){let $=this.material,W=this.matrixWorld;if($===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(LW.copy(this.boundingSphere),LW.applyMatrix4(W),J.ray.intersectsSphere(LW)===!1)return;if(QH.copy(W).invert(),VW.copy(J.ray).applyMatrix4(QH),this.boundingBox!==null){if(VW.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,VW)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new LJ,Q=this.geometry.attributes.skinWeight;for(let $=0,W=Q.count;$<W;$++){J.fromBufferAttribute(Q,$);let Z=1/J.manhattanLength();if(Z!==1/0)J.multiplyScalar(Z);else J.set(1,0,0,0);Q.setXYZW($,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else S0("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let $=this.skeleton,W=this.geometry;if(tK.fromBufferAttribute(W.attributes.skinIndex,J),eK.fromBufferAttribute(W.attributes.skinWeight,J),Q.isVector4)I6.copy(Q),Q.set(0,0,0,0);else I6.set(...Q,1),Q.set(0,0,0);I6.applyMatrix4(this.bindMatrix);for(let Z=0;Z<4;Z++){let K=eK.getComponent(Z);if(K!==0){let H=tK.getComponent(Z);JH.multiplyMatrices($.bones[H].matrixWorld,$.boneInverses[H]),Q.addScaledVector(sU.copy(I6).applyMatrix4(JH),K)}}if(Q.isVector4)Q.w=I6.w;return Q.applyMatrix4(this.bindMatrixInverse)}}class a6 extends FJ{constructor(){super();this.isBone=!0,this.type="Bone"}}class r6 extends hJ{constructor(J=null,Q=1,$=1,W,Z,K,H,Y,X=1003,U=1003,N,q){super(null,K,H,Y,X,U,W,Z,N,q);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var $H=new d0,iU=new d0;class t6{constructor(J=[],Q=[]){this.uuid=P9(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){S0("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let $=0,W=this.bones.length;$<W;$++)this.boneInverses.push(new d0)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let $=new d0;if(this.bones[J])$.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push($)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($)$.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($){if($.parent&&$.parent.isBone)$.matrix.copy($.parent.matrixWorld).invert(),$.matrix.multiply($.matrixWorld);else $.matrix.copy($.matrixWorld);$.matrix.decompose($.position,$.quaternion,$.scale)}}}update(){let J=this.bones,Q=this.boneInverses,$=this.boneMatrices,W=this.boneTexture;for(let Z=0,K=J.length;Z<K;Z++){let H=J[Z]?J[Z].matrixWorld:iU;$H.multiplyMatrices(H,Q[Z]),$H.toArray($,Z*16)}if(W!==null)W.needsUpdate=!0}clone(){return new t6(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let $=new r6(Q,J,J,1023,1015);return $.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=$,this}getBoneByName(J){for(let Q=0,$=this.bones.length;Q<$;Q++){let W=this.bones[Q];if(W.name===J)return W}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let $=0,W=J.bones.length;$<W;$++){let Z=J.bones[$],K=Q[Z];if(K===void 0)S0("Skeleton: No bone found with UUID:",Z),K=new a6;this.bones.push(K),this.boneInverses.push(new d0().fromArray(J.boneInverses[$]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,$=this.boneInverses;for(let W=0,Z=Q.length;W<Z;W++){let K=Q[W];J.bones.push(K.uuid);let H=$[W];J.boneInverses.push(H.toArray())}return J}}class y8 extends dJ{constructor(J,Q,$,W=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=W}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var p7=new d0,WH=new d0,lQ=[],ZH=new H9,oU=new d0,A6=new x0,w6=new R9;class R8 extends x0{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new y8(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let W=0;W<$;W++)this.setMatrixAt(W,oU)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new H9;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,p7),ZH.copy(J.boundingBox).applyMatrix4(p7),this.boundingBox.union(ZH)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new R9;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,p7),w6.copy(J.boundingSphere).applyMatrix4(p7),this.boundingSphere.union(w6)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,W=this.morphTexture.source.data.data,Z=$.length+1,K=J*Z+1;for(let H=0;H<$.length;H++)$[H]=W[K+H]}raycast(J,Q){let $=this.matrixWorld,W=this.count;if(A6.geometry=this.geometry,A6.material=this.material,A6.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(w6.copy(this.boundingSphere),w6.applyMatrix4($),J.ray.intersectsSphere(w6)===!1)return;for(let Z=0;Z<W;Z++){this.getMatrixAt(Z,p7),WH.multiplyMatrices($,p7),A6.matrixWorld=WH,A6.raycast(J,lQ);for(let K=0,H=lQ.length;K<H;K++){let Y=lQ[K];Y.instanceId=Z,Y.object=this,Q.push(Y)}lQ.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new y8(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let $=Q.morphTargetInfluences,W=$.length+1;if(this.morphTexture===null)this.morphTexture=new r6(new Float32Array(W*this.count),W,this.count,1028,1015);let Z=this.morphTexture.source.data.data,K=0;for(let X=0;X<$.length;X++)K+=$[X];let H=this.geometry.morphTargetsRelative?1:1-K,Y=W*J;return Z[Y]=H,Z.set($,Y+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var Q7=new R9,aU=new K0(0.5,0.5),mQ=new _;class e6{constructor(J=new C9,Q=new C9,$=new C9,W=new C9,Z=new C9,K=new C9){this.planes=[J,Q,$,W,Z,K]}set(J,Q,$,W,Z,K){let H=this.planes;return H[0].copy(J),H[1].copy(Q),H[2].copy($),H[3].copy(W),H[4].copy(Z),H[5].copy(K),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let W=this.planes,Z=J.elements,K=Z[0],H=Z[1],Y=Z[2],X=Z[3],U=Z[4],N=Z[5],q=Z[6],G=Z[7],E=Z[8],F=Z[9],B=Z[10],R=Z[11],O=Z[12],P=Z[13],k=Z[14],L=Z[15];if(W[0].setComponents(X-K,G-U,R-E,L-O).normalize(),W[1].setComponents(X+K,G+U,R+E,L+O).normalize(),W[2].setComponents(X+H,G+N,R+F,L+P).normalize(),W[3].setComponents(X-H,G-N,R-F,L-P).normalize(),$)W[4].setComponents(Y,q,B,k).normalize(),W[5].setComponents(X-Y,G-q,R-B,L-k).normalize();else if(W[4].setComponents(X-Y,G-q,R-B,L-k).normalize(),Q===2000)W[5].setComponents(X+Y,G+q,R+B,L+k).normalize();else if(Q===2001)W[5].setComponents(Y,q,B,k).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();Q7.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();Q7.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(Q7)}intersectsSprite(J){Q7.center.set(0,0,0);let Q=aU.distanceTo(J.center);return Q7.radius=0.7071067811865476+Q,Q7.applyMatrix4(J.matrixWorld),this.intersectsSphere(Q7)}intersectsSphere(J){let Q=this.planes,$=J.center,W=-J.radius;for(let Z=0;Z<6;Z++)if(Q[Z].distanceToPoint($)<W)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let W=Q[$];if(mQ.x=W.normal.x>0?J.max.x:J.min.x,mQ.y=W.normal.y>0?J.max.y:J.min.y,mQ.z=W.normal.z>0?J.max.z:J.min.z,W.distanceToPoint(mQ)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class JQ extends X9{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new l0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var tQ=new _,eQ=new _,KH=new d0,_6=new g8,dQ=new R9,BW=new _,HH=new _;class K6 extends FJ{constructor(J=new wJ,Q=new JQ){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let W=1,Z=Q.count;W<Z;W++)tQ.fromBufferAttribute(Q,W-1),eQ.fromBufferAttribute(Q,W),$[W]=$[W-1],$[W]+=tQ.distanceTo(eQ);J.setAttribute("lineDistance",new YJ($,1))}else S0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.matrixWorld,Z=J.params.Line.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(dQ.copy($.boundingSphere),dQ.applyMatrix4(W),dQ.radius+=Z,J.ray.intersectsSphere(dQ)===!1)return;KH.copy(W).invert(),_6.copy(J.ray).applyMatrix4(KH);let H=Z/((this.scale.x+this.scale.y+this.scale.z)/3),Y=H*H,X=this.isLineSegments?2:1,U=$.index,q=$.attributes.position;if(U!==null){let G=Math.max(0,K.start),E=Math.min(U.count,K.start+K.count);for(let F=G,B=E-1;F<B;F+=X){let R=U.getX(F),O=U.getX(F+1),P=uQ(this,J,_6,Y,R,O,F);if(P)Q.push(P)}if(this.isLineLoop){let F=U.getX(E-1),B=U.getX(G),R=uQ(this,J,_6,Y,F,B,E-1);if(R)Q.push(R)}}else{let G=Math.max(0,K.start),E=Math.min(q.count,K.start+K.count);for(let F=G,B=E-1;F<B;F+=X){let R=uQ(this,J,_6,Y,F,F+1,F);if(R)Q.push(R)}if(this.isLineLoop){let F=uQ(this,J,_6,Y,E-1,G,E-1);if(F)Q.push(F)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,K=W.length;Z<K;Z++){let H=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=Z}}}}}function uQ(J,Q,$,W,Z,K,H){let Y=J.geometry.attributes.position;if(tQ.fromBufferAttribute(Y,Z),eQ.fromBufferAttribute(Y,K),$.distanceSqToSegment(tQ,eQ,BW,HH)>W)return;BW.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(BW);if(U<Q.near||U>Q.far)return;return{distance:U,point:HH.clone().applyMatrix4(J.matrixWorld),index:H,face:null,faceIndex:null,barycoord:null,object:J}}var YH=new _,XH=new _;class k$ extends K6{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let W=0,Z=Q.count;W<Z;W+=2)YH.fromBufferAttribute(Q,W),XH.fromBufferAttribute(Q,W+1),$[W]=W===0?0:$[W-1],$[W+1]=$[W]+YH.distanceTo(XH);J.setAttribute("lineDistance",new YJ($,1))}else S0("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class D$ extends K6{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class QQ extends X9{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new l0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var UH=new d0,PW=new g8,cQ=new R9,nQ=new _;class M$ extends FJ{constructor(J=new wJ,Q=new QQ){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.matrixWorld,Z=J.params.Points.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(cQ.copy($.boundingSphere),cQ.applyMatrix4(W),cQ.radius+=Z,J.ray.intersectsSphere(cQ)===!1)return;UH.copy(W).invert(),PW.copy(J.ray).applyMatrix4(UH);let H=Z/((this.scale.x+this.scale.y+this.scale.z)/3),Y=H*H,X=$.index,N=$.attributes.position;if(X!==null){let q=Math.max(0,K.start),G=Math.min(X.count,K.start+K.count);for(let E=q,F=G;E<F;E++){let B=X.getX(E);nQ.fromBufferAttribute(N,B),GH(nQ,B,Y,W,J,Q,this)}}else{let q=Math.max(0,K.start),G=Math.min(N.count,K.start+K.count);for(let E=q,F=G;E<F;E++)nQ.fromBufferAttribute(N,E),GH(nQ,E,Y,W,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,K=W.length;Z<K;Z++){let H=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=Z}}}}}function GH(J,Q,$,W,Z,K,H){let Y=PW.distanceSqToPoint(J);if(Y<$){let X=new _;PW.closestPointToPoint(J,X),X.applyMatrix4(W);let U=Z.ray.origin.distanceTo(X);if(U<Z.near||U>Z.far)return;K.push({distance:U,distanceToRay:Math.sqrt(Y),point:X,index:Q,face:null,faceIndex:null,barycoord:null,object:H})}}class C$ extends hJ{constructor(J=[],Q=301,$,W,Z,K,H,Y,X,U){super(J,Q,$,W,Z,K,H,Y,X,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class z$ extends hJ{constructor(J,Q,$,W,Z,K,H,Y,X){super(J,Q,$,W,Z,K,H,Y,X);this.isCanvasTexture=!0,this.needsUpdate=!0}}class N7 extends hJ{constructor(J,Q,$=1014,W,Z,K,H=1003,Y=1003,X,U=1026,N=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let q={width:J,height:Q,depth:N};super(q,W,Z,K,H,Y,U,$,X);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new n6(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class jZ extends N7{constructor(J,Q=1014,$=301,W,Z,K=1003,H=1003,Y,X=1026){let U={width:J,height:J,depth:1},N=[U,U,U,U,U,U];super(J,J,Q,$,W,Z,K,H,Y,X);this.image=N,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class P$ extends hJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class aJ extends wJ{constructor(J=1,Q=1,$=1,W=1,Z=1,K=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:W,heightSegments:Z,depthSegments:K};let H=this;W=Math.floor(W),Z=Math.floor(Z),K=Math.floor(K);let Y=[],X=[],U=[],N=[],q=0,G=0;E("z","y","x",-1,-1,$,Q,J,K,Z,0),E("z","y","x",1,-1,$,Q,-J,K,Z,1),E("x","z","y",1,1,J,$,Q,W,K,2),E("x","z","y",1,-1,J,$,-Q,W,K,3),E("x","y","z",1,-1,J,Q,$,W,Z,4),E("x","y","z",-1,-1,J,Q,-$,W,Z,5),this.setIndex(Y),this.setAttribute("position",new YJ(X,3)),this.setAttribute("normal",new YJ(U,3)),this.setAttribute("uv",new YJ(N,2));function E(F,B,R,O,P,k,L,C,A,w,D){let I=k/A,m=L/w,f=k/2,x=L/2,o=C/2,y=A+1,u=w+1,e=0,d=0,U0=new _;for(let s=0;s<u;s++){let J0=s*m-x;for(let Z0=0;Z0<y;Z0++){let m0=Z0*I-f;U0[F]=m0*O,U0[B]=J0*P,U0[R]=o,X.push(U0.x,U0.y,U0.z),U0[F]=0,U0[B]=0,U0[R]=C>0?1:-1,U.push(U0.x,U0.y,U0.z),N.push(Z0/A),N.push(1-s/w),e+=1}}for(let s=0;s<w;s++)for(let J0=0;J0<A;J0++){let Z0=q+J0+y*s,m0=q+J0+y*(s+1),j0=q+(J0+1)+y*(s+1),BJ=q+(J0+1)+y*s;Y.push(Z0,m0,BJ),Y.push(m0,j0,BJ),d+=6}H.addGroup(G,d,D),G+=d,q+=e}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new aJ(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class $Q extends wJ{constructor(J=1,Q=32,$=0,W=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:Q,thetaStart:$,thetaLength:W},Q=Math.max(3,Q);let Z=[],K=[],H=[],Y=[],X=new _,U=new K0;K.push(0,0,0),H.push(0,0,1),Y.push(0.5,0.5);for(let N=0,q=3;N<=Q;N++,q+=3){let G=$+N/Q*W;X.x=J*Math.cos(G),X.y=J*Math.sin(G),K.push(X.x,X.y,X.z),H.push(0,0,1),U.x=(K[q]/J+1)/2,U.y=(K[q+1]/J+1)/2,Y.push(U.x,U.y)}for(let N=1;N<=Q;N++)Z.push(N,N+1,0);this.setIndex(Z),this.setAttribute("position",new YJ(K,3)),this.setAttribute("normal",new YJ(H,3)),this.setAttribute("uv",new YJ(Y,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new $Q(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class t9 extends wJ{constructor(J=1,Q=1,$=1,W=32,Z=1,K=!1,H=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:W,heightSegments:Z,openEnded:K,thetaStart:H,thetaLength:Y};let X=this;W=Math.floor(W),Z=Math.floor(Z);let U=[],N=[],q=[],G=[],E=0,F=[],B=$/2,R=0;if(O(),K===!1){if(J>0)P(!0);if(Q>0)P(!1)}this.setIndex(U),this.setAttribute("position",new YJ(N,3)),this.setAttribute("normal",new YJ(q,3)),this.setAttribute("uv",new YJ(G,2));function O(){let k=new _,L=new _,C=0,A=(Q-J)/$;for(let w=0;w<=Z;w++){let D=[],I=w/Z,m=I*(Q-J)+J;for(let f=0;f<=W;f++){let x=f/W,o=x*Y+H,y=Math.sin(o),u=Math.cos(o);L.x=m*y,L.y=-I*$+B,L.z=m*u,N.push(L.x,L.y,L.z),k.set(y,A,u).normalize(),q.push(k.x,k.y,k.z),G.push(x,1-I),D.push(E++)}F.push(D)}for(let w=0;w<W;w++)for(let D=0;D<Z;D++){let I=F[D][w],m=F[D+1][w],f=F[D+1][w+1],x=F[D][w+1];if(J>0||D!==0)U.push(I,m,x),C+=3;if(Q>0||D!==Z-1)U.push(m,f,x),C+=3}X.addGroup(R,C,0),R+=C}function P(k){let L=E,C=new K0,A=new _,w=0,D=k===!0?J:Q,I=k===!0?1:-1;for(let f=1;f<=W;f++)N.push(0,B*I,0),q.push(0,I,0),G.push(0.5,0.5),E++;let m=E;for(let f=0;f<=W;f++){let o=f/W*Y+H,y=Math.cos(o),u=Math.sin(o);A.x=D*u,A.y=B*I,A.z=D*y,N.push(A.x,A.y,A.z),q.push(0,I,0),C.x=y*0.5+0.5,C.y=u*0.5*I+0.5,G.push(C.x,C.y),E++}for(let f=0;f<W;f++){let x=L+f,o=m+f;if(k===!0)U.push(o,o+1,x);else U.push(o+1,o,x);w+=3}X.addGroup(R,w,k===!0?1:2),R+=w}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new t9(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class A9{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){S0("Curve: .getPoint() not implemented.")}getPointAt(J,Q){let $=this.getUtoTmapping(J);return this.getPoint($,Q)}getPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));return Q}getSpacedPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPointAt($/J));return Q}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Q=[],$,W=this.getPoint(0),Z=0;Q.push(0);for(let K=1;K<=J;K++)$=this.getPoint(K/J),Z+=$.distanceTo(W),Q.push(Z),W=$;return this.cacheArcLengths=Q,Q}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Q=null){let $=this.getLengths(),W=0,Z=$.length,K;if(Q)K=Q;else K=J*$[Z-1];let H=0,Y=Z-1,X;while(H<=Y)if(W=Math.floor(H+(Y-H)/2),X=$[W]-K,X<0)H=W+1;else if(X>0)Y=W-1;else{Y=W;break}if(W=Y,$[W]===K)return W/(Z-1);let U=$[W],q=$[W+1]-U,G=(K-U)/q;return(W+G)/(Z-1)}getTangent(J,Q){let W=J-0.0001,Z=J+0.0001;if(W<0)W=0;if(Z>1)Z=1;let K=this.getPoint(W),H=this.getPoint(Z),Y=Q||(K.isVector2?new K0:new _);return Y.copy(H).sub(K).normalize(),Y}getTangentAt(J,Q){let $=this.getUtoTmapping(J);return this.getTangent($,Q)}computeFrenetFrames(J,Q=!1){let $=new _,W=[],Z=[],K=[],H=new _,Y=new d0;for(let G=0;G<=J;G++){let E=G/J;W[G]=this.getTangentAt(E,new _)}Z[0]=new _,K[0]=new _;let X=Number.MAX_VALUE,U=Math.abs(W[0].x),N=Math.abs(W[0].y),q=Math.abs(W[0].z);if(U<=X)X=U,$.set(1,0,0);if(N<=X)X=N,$.set(0,1,0);if(q<=X)$.set(0,0,1);H.crossVectors(W[0],$).normalize(),Z[0].crossVectors(W[0],H),K[0].crossVectors(W[0],Z[0]);for(let G=1;G<=J;G++){if(Z[G]=Z[G-1].clone(),K[G]=K[G-1].clone(),H.crossVectors(W[G-1],W[G]),H.length()>Number.EPSILON){H.normalize();let E=Math.acos(i0(W[G-1].dot(W[G]),-1,1));Z[G].applyMatrix4(Y.makeRotationAxis(H,E))}K[G].crossVectors(W[G],Z[G])}if(Q===!0){let G=Math.acos(i0(Z[0].dot(Z[J]),-1,1));if(G/=J,W[0].dot(H.crossVectors(Z[0],Z[J]))>0)G=-G;for(let E=1;E<=J;E++)Z[E].applyMatrix4(Y.makeRotationAxis(W[E],G*E)),K[E].crossVectors(W[E],Z[E])}return{tangents:W,normals:Z,binormals:K}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}}class WQ extends A9{constructor(J=0,Q=0,$=1,W=1,Z=0,K=Math.PI*2,H=!1,Y=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Q,this.xRadius=$,this.yRadius=W,this.aStartAngle=Z,this.aEndAngle=K,this.aClockwise=H,this.aRotation=Y}getPoint(J,Q=new K0){let $=Q,W=Math.PI*2,Z=this.aEndAngle-this.aStartAngle,K=Math.abs(Z)<Number.EPSILON;while(Z<0)Z+=W;while(Z>W)Z-=W;if(Z<Number.EPSILON)if(K)Z=0;else Z=W;if(this.aClockwise===!0&&!K)if(Z===W)Z=-W;else Z=Z-W;let H=this.aStartAngle+J*Z,Y=this.aX+this.xRadius*Math.cos(H),X=this.aY+this.yRadius*Math.sin(H);if(this.aRotation!==0){let U=Math.cos(this.aRotation),N=Math.sin(this.aRotation),q=Y-this.aX,G=X-this.aY;Y=q*U-G*N+this.aX,X=q*N+G*U+this.aY}return $.set(Y,X)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class yZ extends WQ{constructor(J,Q,$,W,Z,K){super(J,Q,$,$,W,Z,K);this.isArcCurve=!0,this.type="ArcCurve"}}function vZ(){let J=0,Q=0,$=0,W=0;function Z(K,H,Y,X){J=K,Q=Y,$=-3*K+3*H-2*Y-X,W=2*K-2*H+Y+X}return{initCatmullRom:function(K,H,Y,X,U){Z(H,Y,U*(Y-K),U*(X-H))},initNonuniformCatmullRom:function(K,H,Y,X,U,N,q){let G=(H-K)/U-(Y-K)/(U+N)+(Y-H)/N,E=(Y-H)/N-(X-H)/(N+q)+(X-Y)/q;G*=N,E*=N,Z(H,Y,G,E)},calc:function(K){let H=K*K,Y=H*K;return J+Q*K+$*H+W*Y}}}var NH=new _,qH=new _,kW=new vZ,DW=new vZ,MW=new vZ;class fZ extends A9{constructor(J=[],Q=!1,$="centripetal",W=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Q,this.curveType=$,this.tension=W}getPoint(J,Q=new _){let $=Q,W=this.points,Z=W.length,K=(Z-(this.closed?0:1))*J,H=Math.floor(K),Y=K-H;if(this.closed)H+=H>0?0:(Math.floor(Math.abs(H)/Z)+1)*Z;else if(Y===0&&H===Z-1)H=Z-2,Y=1;let X,U;if(this.closed||H>0)X=W[(H-1)%Z];else qH.subVectors(W[0],W[1]).add(W[0]),X=qH;let N=W[H%Z],q=W[(H+1)%Z];if(this.closed||H+2<Z)U=W[(H+2)%Z];else NH.subVectors(W[Z-1],W[Z-2]).add(W[Z-1]),U=NH;if(this.curveType==="centripetal"||this.curveType==="chordal"){let G=this.curveType==="chordal"?0.5:0.25,E=Math.pow(X.distanceToSquared(N),G),F=Math.pow(N.distanceToSquared(q),G),B=Math.pow(q.distanceToSquared(U),G);if(F<0.0001)F=1;if(E<0.0001)E=F;if(B<0.0001)B=F;kW.initNonuniformCatmullRom(X.x,N.x,q.x,U.x,E,F,B),DW.initNonuniformCatmullRom(X.y,N.y,q.y,U.y,E,F,B),MW.initNonuniformCatmullRom(X.z,N.z,q.z,U.z,E,F,B)}else if(this.curveType==="catmullrom")kW.initCatmullRom(X.x,N.x,q.x,U.x,this.tension),DW.initCatmullRom(X.y,N.y,q.y,U.y,this.tension),MW.initCatmullRom(X.z,N.z,q.z,U.z,this.tension);return $.set(kW.calc(Y),DW.calc(Y),MW.calc(Y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let W=J.points[Q];this.points.push(W.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let W=this.points[Q];J.points.push(W.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let W=J.points[Q];this.points.push(new _().fromArray(W))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function EH(J,Q,$,W,Z){let K=(W-Q)*0.5,H=(Z-$)*0.5,Y=J*J,X=J*Y;return(2*$-2*W+K+H)*X+(-3*$+3*W-2*K-H)*Y+K*J+$}function rU(J,Q){let $=1-J;return $*$*Q}function tU(J,Q){return 2*(1-J)*J*Q}function eU(J,Q){return J*J*Q}function y6(J,Q,$,W){return rU(J,Q)+tU(J,$)+eU(J,W)}function J5(J,Q){let $=1-J;return $*$*$*Q}function Q5(J,Q){let $=1-J;return 3*$*$*J*Q}function $5(J,Q){return 3*(1-J)*J*J*Q}function W5(J,Q){return J*J*J*Q}function v6(J,Q,$,W,Z){return J5(J,Q)+Q5(J,$)+$5(J,W)+W5(J,Z)}class I$ extends A9{constructor(J=new K0,Q=new K0,$=new K0,W=new K0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Q,this.v2=$,this.v3=W}getPoint(J,Q=new K0){let $=Q,W=this.v0,Z=this.v1,K=this.v2,H=this.v3;return $.set(v6(J,W.x,Z.x,K.x,H.x),v6(J,W.y,Z.y,K.y,H.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class hZ extends A9{constructor(J=new _,Q=new _,$=new _,W=new _){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Q,this.v2=$,this.v3=W}getPoint(J,Q=new _){let $=Q,W=this.v0,Z=this.v1,K=this.v2,H=this.v3;return $.set(v6(J,W.x,Z.x,K.x,H.x),v6(J,W.y,Z.y,K.y,H.y),v6(J,W.z,Z.z,K.z,H.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class A$ extends A9{constructor(J=new K0,Q=new K0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Q}getPoint(J,Q=new K0){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new K0){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class bZ extends A9{constructor(J=new _,Q=new _){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Q}getPoint(J,Q=new _){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new _){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class w$ extends A9{constructor(J=new K0,Q=new K0,$=new K0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new K0){let $=Q,W=this.v0,Z=this.v1,K=this.v2;return $.set(y6(J,W.x,Z.x,K.x),y6(J,W.y,Z.y,K.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class H6 extends A9{constructor(J=new _,Q=new _,$=new _){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new _){let $=Q,W=this.v0,Z=this.v1,K=this.v2;return $.set(y6(J,W.x,Z.x,K.x),y6(J,W.y,Z.y,K.y),y6(J,W.z,Z.z,K.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class _$ extends A9{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Q=new K0){let $=Q,W=this.points,Z=(W.length-1)*J,K=Math.floor(Z),H=Z-K,Y=W[K===0?K:K-1],X=W[K],U=W[K>W.length-2?W.length-1:K+1],N=W[K>W.length-3?W.length-1:K+2];return $.set(EH(H,Y.x,X.x,U.x,N.x),EH(H,Y.y,X.y,U.y,N.y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let W=J.points[Q];this.points.push(W.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let W=this.points[Q];J.points.push(W.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let W=J.points[Q];this.points.push(new K0().fromArray(W))}return this}}var IW=Object.freeze({__proto__:null,ArcCurve:yZ,CatmullRomCurve3:fZ,CubicBezierCurve:I$,CubicBezierCurve3:hZ,EllipseCurve:WQ,LineCurve:A$,LineCurve3:bZ,QuadraticBezierCurve:w$,QuadraticBezierCurve3:H6,SplineCurve:_$});class xZ extends A9{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),Q=this.curves[this.curves.length-1].getPoint(1);if(!J.equals(Q)){let $=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new IW[$](Q,J))}return this}getPoint(J,Q){let $=J*this.getLength(),W=this.getCurveLengths(),Z=0;while(Z<W.length){if(W[Z]>=$){let K=W[Z]-$,H=this.curves[Z],Y=H.getLength(),X=Y===0?0:1-K/Y;return H.getPointAt(X,Q)}Z++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],Q=0;for(let $=0,W=this.curves.length;$<W;$++)Q+=this.curves[$].getLength(),J.push(Q);return this.cacheLengths=J,J}getSpacedPoints(J=40){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));if(this.autoClose)Q.push(Q[0]);return Q}getPoints(J=12){let Q=[],$;for(let W=0,Z=this.curves;W<Z.length;W++){let K=Z[W],H=K.isEllipseCurve?J*2:K.isLineCurve||K.isLineCurve3?1:K.isSplineCurve?J*K.points.length:J,Y=K.getPoints(H);for(let X=0;X<Y.length;X++){let U=Y[X];if($&&$.equals(U))continue;Q.push(U),$=U}}if(this.autoClose&&Q.length>1&&!Q[Q.length-1].equals(Q[0]))Q.push(Q[0]);return Q}copy(J){super.copy(J),this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let W=J.curves[Q];this.curves.push(W.clone())}return this.autoClose=J.autoClose,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let Q=0,$=this.curves.length;Q<$;Q++){let W=this.curves[Q];J.curves.push(W.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let W=J.curves[Q];this.curves.push(new IW[W.type]().fromJSON(W))}return this}}class J$ extends xZ{constructor(J){super();if(this.type="Path",this.currentPoint=new K0,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let Q=1,$=J.length;Q<$;Q++)this.lineTo(J[Q].x,J[Q].y);return this}moveTo(J,Q){return this.currentPoint.set(J,Q),this}lineTo(J,Q){let $=new A$(this.currentPoint.clone(),new K0(J,Q));return this.curves.push($),this.currentPoint.set(J,Q),this}quadraticCurveTo(J,Q,$,W){let Z=new w$(this.currentPoint.clone(),new K0(J,Q),new K0($,W));return this.curves.push(Z),this.currentPoint.set($,W),this}bezierCurveTo(J,Q,$,W,Z,K){let H=new I$(this.currentPoint.clone(),new K0(J,Q),new K0($,W),new K0(Z,K));return this.curves.push(H),this.currentPoint.set(Z,K),this}splineThru(J){let Q=[this.currentPoint.clone()].concat(J),$=new _$(Q);return this.curves.push($),this.currentPoint.copy(J[J.length-1]),this}arc(J,Q,$,W,Z,K){let H=this.currentPoint.x,Y=this.currentPoint.y;return this.absarc(J+H,Q+Y,$,W,Z,K),this}absarc(J,Q,$,W,Z,K){return this.absellipse(J,Q,$,$,W,Z,K),this}ellipse(J,Q,$,W,Z,K,H,Y){let X=this.currentPoint.x,U=this.currentPoint.y;return this.absellipse(J+X,Q+U,$,W,Z,K,H,Y),this}absellipse(J,Q,$,W,Z,K,H,Y){let X=new WQ(J,Q,$,W,Z,K,H,Y);if(this.curves.length>0){let N=X.getPoint(0);if(!N.equals(this.currentPoint))this.lineTo(N.x,N.y)}this.curves.push(X);let U=X.getPoint(1);return this.currentPoint.copy(U),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class ZQ extends J${constructor(J){super(J);this.uuid=P9(),this.type="Shape",this.holes=[]}getPointsHoles(J){let Q=[];for(let $=0,W=this.holes.length;$<W;$++)Q[$]=this.holes[$].getPoints(J);return Q}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let W=J.holes[Q];this.holes.push(W.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let Q=0,$=this.holes.length;Q<$;Q++){let W=this.holes[Q];J.holes.push(W.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let W=J.holes[Q];this.holes.push(new J$().fromJSON(W))}return this}}function Z5(J,Q,$=2){let W=Q&&Q.length,Z=W?Q[0]*$:J.length,K=CY(J,0,Z,$,!0),H=[];if(!K||K.next===K.prev)return H;let Y,X,U;if(W)K=U5(J,Q,K,$);if(J.length>80*$){Y=J[0],X=J[1];let N=Y,q=X;for(let G=$;G<Z;G+=$){let E=J[G],F=J[G+1];if(E<Y)Y=E;if(F<X)X=F;if(E>N)N=E;if(F>q)q=F}U=Math.max(N-Y,q-X),U=U!==0?32767/U:0}return h6(K,H,$,Y,X,U,0),H}function CY(J,Q,$,W,Z){let K;if(Z===k5(J,Q,$,W)>0)for(let H=Q;H<$;H+=W)K=FH(H/W|0,J[H],J[H+1],K);else for(let H=$-W;H>=Q;H-=W)K=FH(H/W|0,J[H],J[H+1],K);if(K&&i7(K,K.next))x6(K),K=K.next;return K}function Z7(J,Q){if(!J)return J;if(!Q)Q=J;let $=J,W;do if(W=!1,!$.steiner&&(i7($,$.next)||SJ($.prev,$,$.next)===0)){if(x6($),$=Q=$.prev,$===$.next)break;W=!0}else $=$.next;while(W||$!==Q);return Q}function h6(J,Q,$,W,Z,K,H){if(!J)return;if(!H&&K)F5(J,W,Z,K);let Y=J;while(J.prev!==J.next){let{prev:X,next:U}=J;if(K?H5(J,W,Z,K):K5(J)){Q.push(X.i,J.i,U.i),x6(J),J=U.next,Y=U.next;continue}if(J=U,J===Y){if(!H)h6(Z7(J),Q,$,W,Z,K,1);else if(H===1)J=Y5(Z7(J),Q),h6(J,Q,$,W,Z,K,2);else if(H===2)X5(J,Q,$,W,Z,K);break}}}function K5(J){let Q=J.prev,$=J,W=J.next;if(SJ(Q,$,W)>=0)return!1;let Z=Q.x,K=$.x,H=W.x,Y=Q.y,X=$.y,U=W.y,N=Math.min(Z,K,H),q=Math.min(Y,X,U),G=Math.max(Z,K,H),E=Math.max(Y,X,U),F=W.next;while(F!==Q){if(F.x>=N&&F.x<=G&&F.y>=q&&F.y<=E&&T6(Z,Y,K,X,H,U,F.x,F.y)&&SJ(F.prev,F,F.next)>=0)return!1;F=F.next}return!0}function H5(J,Q,$,W){let Z=J.prev,K=J,H=J.next;if(SJ(Z,K,H)>=0)return!1;let Y=Z.x,X=K.x,U=H.x,N=Z.y,q=K.y,G=H.y,E=Math.min(Y,X,U),F=Math.min(N,q,G),B=Math.max(Y,X,U),R=Math.max(N,q,G),O=AW(E,F,Q,$,W),P=AW(B,R,Q,$,W),k=J.prevZ,L=J.nextZ;while(k&&k.z>=O&&L&&L.z<=P){if(k.x>=E&&k.x<=B&&k.y>=F&&k.y<=R&&k!==Z&&k!==H&&T6(Y,N,X,q,U,G,k.x,k.y)&&SJ(k.prev,k,k.next)>=0)return!1;if(k=k.prevZ,L.x>=E&&L.x<=B&&L.y>=F&&L.y<=R&&L!==Z&&L!==H&&T6(Y,N,X,q,U,G,L.x,L.y)&&SJ(L.prev,L,L.next)>=0)return!1;L=L.nextZ}while(k&&k.z>=O){if(k.x>=E&&k.x<=B&&k.y>=F&&k.y<=R&&k!==Z&&k!==H&&T6(Y,N,X,q,U,G,k.x,k.y)&&SJ(k.prev,k,k.next)>=0)return!1;k=k.prevZ}while(L&&L.z<=P){if(L.x>=E&&L.x<=B&&L.y>=F&&L.y<=R&&L!==Z&&L!==H&&T6(Y,N,X,q,U,G,L.x,L.y)&&SJ(L.prev,L,L.next)>=0)return!1;L=L.nextZ}return!0}function Y5(J,Q){let $=J;do{let W=$.prev,Z=$.next.next;if(!i7(W,Z)&&PY(W,$,$.next,Z)&&b6(W,Z)&&b6(Z,W))Q.push(W.i,$.i,Z.i),x6($),x6($.next),$=J=Z;$=$.next}while($!==J);return Z7($)}function X5(J,Q,$,W,Z,K){let H=J;do{let Y=H.next.next;while(Y!==H.prev){if(H.i!==Y.i&&L5(H,Y)){let X=IY(H,Y);H=Z7(H,H.next),X=Z7(X,X.next),h6(H,Q,$,W,Z,K,0),h6(X,Q,$,W,Z,K,0);return}Y=Y.next}H=H.next}while(H!==J)}function U5(J,Q,$,W){let Z=[];for(let K=0,H=Q.length;K<H;K++){let Y=Q[K]*W,X=K<H-1?Q[K+1]*W:J.length,U=CY(J,Y,X,W,!1);if(U===U.next)U.steiner=!0;Z.push(R5(U))}Z.sort(G5);for(let K=0;K<Z.length;K++)$=N5(Z[K],$);return $}function G5(J,Q){let $=J.x-Q.x;if($===0){if($=J.y-Q.y,$===0){let W=(J.next.y-J.y)/(J.next.x-J.x),Z=(Q.next.y-Q.y)/(Q.next.x-Q.x);$=W-Z}}return $}function N5(J,Q){let $=q5(J,Q);if(!$)return Q;let W=IY($,J);return Z7(W,W.next),Z7($,$.next)}function q5(J,Q){let $=Q,W=J.x,Z=J.y,K=-1/0,H;if(i7(J,$))return $;do{if(i7(J,$.next))return $.next;else if(Z<=$.y&&Z>=$.next.y&&$.next.y!==$.y){let q=$.x+(Z-$.y)*($.next.x-$.x)/($.next.y-$.y);if(q<=W&&q>K){if(K=q,H=$.x<$.next.x?$:$.next,q===W)return H}}$=$.next}while($!==Q);if(!H)return null;let Y=H,X=H.x,U=H.y,N=1/0;$=H;do{if(W>=$.x&&$.x>=X&&W!==$.x&&zY(Z<U?W:K,Z,X,U,Z<U?K:W,Z,$.x,$.y)){let q=Math.abs(Z-$.y)/(W-$.x);if(b6($,J)&&(q<N||q===N&&($.x>H.x||$.x===H.x&&E5(H,$))))H=$,N=q}$=$.next}while($!==Y);return H}function E5(J,Q){return SJ(J.prev,J,Q.prev)<0&&SJ(Q.next,J,J.next)<0}function F5(J,Q,$,W){let Z=J;do{if(Z.z===0)Z.z=AW(Z.x,Z.y,Q,$,W);Z.prevZ=Z.prev,Z.nextZ=Z.next,Z=Z.next}while(Z!==J);Z.prevZ.nextZ=null,Z.prevZ=null,O5(Z)}function O5(J){let Q,$=1;do{let W=J,Z;J=null;let K=null;Q=0;while(W){Q++;let H=W,Y=0;for(let U=0;U<$;U++)if(Y++,H=H.nextZ,!H)break;let X=$;while(Y>0||X>0&&H){if(Y!==0&&(X===0||!H||W.z<=H.z))Z=W,W=W.nextZ,Y--;else Z=H,H=H.nextZ,X--;if(K)K.nextZ=Z;else J=Z;Z.prevZ=K,K=Z}W=H}K.nextZ=null,$*=2}while(Q>1);return J}function AW(J,Q,$,W,Z){return J=(J-$)*Z|0,Q=(Q-W)*Z|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,Q=(Q|Q<<8)&16711935,Q=(Q|Q<<4)&252645135,Q=(Q|Q<<2)&858993459,Q=(Q|Q<<1)&1431655765,J|Q<<1}function R5(J){let Q=J,$=J;do{if(Q.x<$.x||Q.x===$.x&&Q.y<$.y)$=Q;Q=Q.next}while(Q!==J);return $}function zY(J,Q,$,W,Z,K,H,Y){return(Z-H)*(Q-Y)>=(J-H)*(K-Y)&&(J-H)*(W-Y)>=($-H)*(Q-Y)&&($-H)*(K-Y)>=(Z-H)*(W-Y)}function T6(J,Q,$,W,Z,K,H,Y){return!(J===H&&Q===Y)&&zY(J,Q,$,W,Z,K,H,Y)}function L5(J,Q){return J.next.i!==Q.i&&J.prev.i!==Q.i&&!V5(J,Q)&&(b6(J,Q)&&b6(Q,J)&&B5(J,Q)&&(SJ(J.prev,J,Q.prev)||SJ(J,Q.prev,Q))||i7(J,Q)&&SJ(J.prev,J,J.next)>0&&SJ(Q.prev,Q,Q.next)>0)}function SJ(J,Q,$){return(Q.y-J.y)*($.x-Q.x)-(Q.x-J.x)*($.y-Q.y)}function i7(J,Q){return J.x===Q.x&&J.y===Q.y}function PY(J,Q,$,W){let Z=iQ(SJ(J,Q,$)),K=iQ(SJ(J,Q,W)),H=iQ(SJ($,W,J)),Y=iQ(SJ($,W,Q));if(Z!==K&&H!==Y)return!0;if(Z===0&&sQ(J,$,Q))return!0;if(K===0&&sQ(J,W,Q))return!0;if(H===0&&sQ($,J,W))return!0;if(Y===0&&sQ($,Q,W))return!0;return!1}function sQ(J,Q,$){return Q.x<=Math.max(J.x,$.x)&&Q.x>=Math.min(J.x,$.x)&&Q.y<=Math.max(J.y,$.y)&&Q.y>=Math.min(J.y,$.y)}function iQ(J){return J>0?1:J<0?-1:0}function V5(J,Q){let $=J;do{if($.i!==J.i&&$.next.i!==J.i&&$.i!==Q.i&&$.next.i!==Q.i&&PY($,$.next,J,Q))return!0;$=$.next}while($!==J);return!1}function b6(J,Q){return SJ(J.prev,J,J.next)<0?SJ(J,Q,J.next)>=0&&SJ(J,J.prev,Q)>=0:SJ(J,Q,J.prev)<0||SJ(J,J.next,Q)<0}function B5(J,Q){let $=J,W=!1,Z=(J.x+Q.x)/2,K=(J.y+Q.y)/2;do{if($.y>K!==$.next.y>K&&$.next.y!==$.y&&Z<($.next.x-$.x)*(K-$.y)/($.next.y-$.y)+$.x)W=!W;$=$.next}while($!==J);return W}function IY(J,Q){let $=wW(J.i,J.x,J.y),W=wW(Q.i,Q.x,Q.y),Z=J.next,K=Q.prev;return J.next=Q,Q.prev=J,$.next=Z,Z.prev=$,W.next=$,$.prev=W,K.next=W,W.prev=K,W}function FH(J,Q,$,W){let Z=wW(J,Q,$);if(!W)Z.prev=Z,Z.next=Z;else Z.next=W.next,Z.prev=W,W.next.prev=Z,W.next=Z;return Z}function x6(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function wW(J,Q,$){return{i:J,x:Q,y:$,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function k5(J,Q,$,W){let Z=0;for(let K=Q,H=$-W;K<$;K+=W)Z+=(J[H]-J[K])*(J[K+1]+J[H+1]),H=K;return Z}class AY{static triangulate(J,Q,$=2){return Z5(J,Q,$)}}class c7{static area(J){let Q=J.length,$=0;for(let W=Q-1,Z=0;Z<Q;W=Z++)$+=J[W].x*J[Z].y-J[Z].x*J[W].y;return $*0.5}static isClockWise(J){return c7.area(J)<0}static triangulateShape(J,Q){let $=[],W=[],Z=[];OH(J),RH($,J);let K=J.length;Q.forEach(OH);for(let Y=0;Y<Q.length;Y++)W.push(K),K+=Q[Y].length,RH($,Q[Y]);let H=AY.triangulate($,W);for(let Y=0;Y<H.length;Y+=3)Z.push(H.slice(Y,Y+3));return Z}}function OH(J){let Q=J.length;if(Q>2&&J[Q-1].equals(J[0]))J.pop()}function RH(J,Q){for(let $=0;$<Q.length;$++)J.push(Q[$].x),J.push(Q[$].y)}class KQ extends wJ{constructor(J=[new K0(0,-0.5),new K0(0.5,0),new K0(0,0.5)],Q=12,$=0,W=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:J,segments:Q,phiStart:$,phiLength:W},Q=Math.floor(Q),W=i0(W,0,Math.PI*2);let Z=[],K=[],H=[],Y=[],X=[],U=1/Q,N=new _,q=new K0,G=new _,E=new _,F=new _,B=0,R=0;for(let O=0;O<=J.length-1;O++)switch(O){case 0:B=J[O+1].x-J[O].x,R=J[O+1].y-J[O].y,G.x=R*1,G.y=-B,G.z=R*0,F.copy(G),G.normalize(),Y.push(G.x,G.y,G.z);break;case J.length-1:Y.push(F.x,F.y,F.z);break;default:B=J[O+1].x-J[O].x,R=J[O+1].y-J[O].y,G.x=R*1,G.y=-B,G.z=R*0,E.copy(G),G.x+=F.x,G.y+=F.y,G.z+=F.z,G.normalize(),Y.push(G.x,G.y,G.z),F.copy(E)}for(let O=0;O<=Q;O++){let P=$+O*U*W,k=Math.sin(P),L=Math.cos(P);for(let C=0;C<=J.length-1;C++){N.x=J[C].x*k,N.y=J[C].y,N.z=J[C].x*L,K.push(N.x,N.y,N.z),q.x=O/Q,q.y=C/(J.length-1),H.push(q.x,q.y);let A=Y[3*C+0]*k,w=Y[3*C+1],D=Y[3*C+0]*L;X.push(A,w,D)}}for(let O=0;O<Q;O++)for(let P=0;P<J.length-1;P++){let k=P+O*J.length,L=k,C=k+J.length,A=k+J.length+1,w=k+1;Z.push(L,C,w),Z.push(A,w,C)}this.setIndex(Z),this.setAttribute("position",new YJ(K,3)),this.setAttribute("uv",new YJ(H,2)),this.setAttribute("normal",new YJ(X,3))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new KQ(J.points,J.segments,J.phiStart,J.phiLength)}}class w9 extends wJ{constructor(J=1,Q=1,$=1,W=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:W};let Z=J/2,K=Q/2,H=Math.floor($),Y=Math.floor(W),X=H+1,U=Y+1,N=J/H,q=Q/Y,G=[],E=[],F=[],B=[];for(let R=0;R<U;R++){let O=R*q-K;for(let P=0;P<X;P++){let k=P*N-Z;E.push(k,-O,0),F.push(0,0,1),B.push(P/H),B.push(1-R/Y)}}for(let R=0;R<Y;R++)for(let O=0;O<H;O++){let P=O+X*R,k=O+X*(R+1),L=O+1+X*(R+1),C=O+1+X*R;G.push(P,k,C),G.push(k,L,C)}this.setIndex(G),this.setAttribute("position",new YJ(E,3)),this.setAttribute("normal",new YJ(F,3)),this.setAttribute("uv",new YJ(B,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new w9(J.width,J.height,J.widthSegments,J.heightSegments)}}class HQ extends wJ{constructor(J=new ZQ([new K0(0,0.5),new K0(-0.5,-0.5),new K0(0.5,-0.5)]),Q=12){super();this.type="ShapeGeometry",this.parameters={shapes:J,curveSegments:Q};let $=[],W=[],Z=[],K=[],H=0,Y=0;if(Array.isArray(J)===!1)X(J);else for(let U=0;U<J.length;U++)X(J[U]),this.addGroup(H,Y,U),H+=Y,Y=0;this.setIndex($),this.setAttribute("position",new YJ(W,3)),this.setAttribute("normal",new YJ(Z,3)),this.setAttribute("uv",new YJ(K,2));function X(U){let N=W.length/3,q=U.extractPoints(Q),G=q.shape,E=q.holes;if(c7.isClockWise(G)===!1)G=G.reverse();for(let B=0,R=E.length;B<R;B++){let O=E[B];if(c7.isClockWise(O)===!0)E[B]=O.reverse()}let F=c7.triangulateShape(G,E);for(let B=0,R=E.length;B<R;B++){let O=E[B];G=G.concat(O)}for(let B=0,R=G.length;B<R;B++){let O=G[B];W.push(O.x,O.y,0),Z.push(0,0,1),K.push(O.x,O.y)}for(let B=0,R=F.length;B<R;B++){let O=F[B],P=O[0]+N,k=O[1]+N,L=O[2]+N;$.push(P,k,L),Y+=3}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Q=this.parameters.shapes;return D5(Q,J)}static fromJSON(J,Q){let $=[];for(let W=0,Z=J.shapes.length;W<Z;W++){let K=Q[J.shapes[W]];$.push(K)}return new HQ($,J.curveSegments)}}function D5(J,Q){if(Q.shapes=[],Array.isArray(J))for(let $=0,W=J.length;$<W;$++){let Z=J[$];Q.shapes.push(Z.uuid)}else Q.shapes.push(J.uuid);return Q}class L8 extends wJ{constructor(J=1,Q=32,$=16,W=0,Z=Math.PI*2,K=0,H=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:$,phiStart:W,phiLength:Z,thetaStart:K,thetaLength:H},Q=Math.max(3,Math.floor(Q)),$=Math.max(2,Math.floor($));let Y=Math.min(K+H,Math.PI),X=0,U=[],N=new _,q=new _,G=[],E=[],F=[],B=[];for(let R=0;R<=$;R++){let O=[],P=R/$,k=K+P*H,L=J*Math.cos(k),C=Math.sqrt(J*J-L*L),A=0;if(R===0&&K===0)A=0.5/Q;else if(R===$&&Y===Math.PI)A=-0.5/Q;for(let w=0;w<=Q;w++){let D=w/Q,I=W+D*Z;N.x=-C*Math.cos(I),N.y=L,N.z=C*Math.sin(I),E.push(N.x,N.y,N.z),q.copy(N).normalize(),F.push(q.x,q.y,q.z),B.push(D+A,1-P),O.push(X++)}U.push(O)}for(let R=0;R<$;R++)for(let O=0;O<Q;O++){let P=U[R][O+1],k=U[R][O],L=U[R+1][O],C=U[R+1][O+1];if(R!==0||K>0)G.push(P,k,C);if(R!==$-1||Y<Math.PI)G.push(k,L,C)}this.setIndex(G),this.setAttribute("position",new YJ(E,3)),this.setAttribute("normal",new YJ(F,3)),this.setAttribute("uv",new YJ(B,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new L8(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class q7 extends wJ{constructor(J=1,Q=0.4,$=12,W=48,Z=Math.PI*2,K=0,H=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:$,tubularSegments:W,arc:Z,thetaStart:K,thetaLength:H},$=Math.floor($),W=Math.floor(W);let Y=[],X=[],U=[],N=[],q=new _,G=new _,E=new _;for(let F=0;F<=$;F++){let B=K+F/$*H;for(let R=0;R<=W;R++){let O=R/W*Z;G.x=(J+Q*Math.cos(B))*Math.cos(O),G.y=(J+Q*Math.cos(B))*Math.sin(O),G.z=Q*Math.sin(B),X.push(G.x,G.y,G.z),q.x=J*Math.cos(O),q.y=J*Math.sin(O),E.subVectors(G,q).normalize(),U.push(E.x,E.y,E.z),N.push(R/W),N.push(F/$)}}for(let F=1;F<=$;F++)for(let B=1;B<=W;B++){let R=(W+1)*F+B-1,O=(W+1)*(F-1)+B-1,P=(W+1)*(F-1)+B,k=(W+1)*F+B;Y.push(R,O,k),Y.push(O,P,k)}this.setIndex(Y),this.setAttribute("position",new YJ(X,3)),this.setAttribute("normal",new YJ(U,3)),this.setAttribute("uv",new YJ(N,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new q7(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc,J.thetaStart,J.thetaLength)}}class YQ extends wJ{constructor(J=new H6(new _(-1,-1,0),new _(-1,1,0),new _(1,1,0)),Q=64,$=1,W=8,Z=!1){super();this.type="TubeGeometry",this.parameters={path:J,tubularSegments:Q,radius:$,radialSegments:W,closed:Z};let K=J.computeFrenetFrames(Q,Z);this.tangents=K.tangents,this.normals=K.normals,this.binormals=K.binormals;let H=new _,Y=new _,X=new K0,U=new _,N=[],q=[],G=[],E=[];F(),this.setIndex(E),this.setAttribute("position",new YJ(N,3)),this.setAttribute("normal",new YJ(q,3)),this.setAttribute("uv",new YJ(G,2));function F(){for(let P=0;P<Q;P++)B(P);B(Z===!1?Q:0),O(),R()}function B(P){U=J.getPointAt(P/Q,U);let k=K.normals[P],L=K.binormals[P];for(let C=0;C<=W;C++){let A=C/W*Math.PI*2,w=Math.sin(A),D=-Math.cos(A);Y.x=D*k.x+w*L.x,Y.y=D*k.y+w*L.y,Y.z=D*k.z+w*L.z,Y.normalize(),q.push(Y.x,Y.y,Y.z),H.x=U.x+$*Y.x,H.y=U.y+$*Y.y,H.z=U.z+$*Y.z,N.push(H.x,H.y,H.z)}}function R(){for(let P=1;P<=Q;P++)for(let k=1;k<=W;k++){let L=(W+1)*(P-1)+(k-1),C=(W+1)*P+(k-1),A=(W+1)*P+k,w=(W+1)*(P-1)+k;E.push(L,C,w),E.push(C,A,w)}}function O(){for(let P=0;P<=Q;P++)for(let k=0;k<=W;k++)X.x=P/Q,X.y=k/W,G.push(X.x,X.y)}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON();return J.path=this.parameters.path.toJSON(),J}static fromJSON(J){return new YQ(new IW[J.path.type]().fromJSON(J.path),J.tubularSegments,J.radius,J.radialSegments,J.closed)}}function E7(J){let Q={};for(let $ in J){Q[$]={};for(let W in J[$]){let Z=J[$][W];if(LH(Z))if(Z.isRenderTargetTexture)S0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][W]=null;else Q[$][W]=Z.clone();else if(Array.isArray(Z))if(LH(Z[0])){let K=[];for(let H=0,Y=Z.length;H<Y;H++)K[H]=Z[H].clone();Q[$][W]=K}else Q[$][W]=Z.slice();else Q[$][W]=Z}}return Q}function $9(J){let Q={};for(let $=0;$<J.length;$++){let W=E7(J[$]);for(let Z in W)Q[Z]=W[Z]}return Q}function LH(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function M5(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function gZ(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return JJ.workingColorSpace}var wY={clone:E7,merge:$9},C5=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,z5=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _9 extends X9{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C5,this.fragmentShader=z5,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=E7(J.uniforms),this.uniformsGroups=M5(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let W in this.uniforms){let K=this.uniforms[W].value;if(K&&K.isTexture)Q.uniforms[W]={type:"t",value:K.toJSON(J).uuid};else if(K&&K.isColor)Q.uniforms[W]={type:"c",value:K.getHex()};else if(K&&K.isVector2)Q.uniforms[W]={type:"v2",value:K.toArray()};else if(K&&K.isVector3)Q.uniforms[W]={type:"v3",value:K.toArray()};else if(K&&K.isVector4)Q.uniforms[W]={type:"v4",value:K.toArray()};else if(K&&K.isMatrix3)Q.uniforms[W]={type:"m3",value:K.toArray()};else if(K&&K.isMatrix4)Q.uniforms[W]={type:"m4",value:K.toArray()};else Q.uniforms[W]={value:K}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let W in this.extensions)if(this.extensions[W]===!0)$[W]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let W=J.uniforms[$];switch(this.uniforms[$]={},W.type){case"t":this.uniforms[$].value=Q[W.value]||null;break;case"c":this.uniforms[$].value=new l0().setHex(W.value);break;case"v2":this.uniforms[$].value=new K0().fromArray(W.value);break;case"v3":this.uniforms[$].value=new _().fromArray(W.value);break;case"v4":this.uniforms[$].value=new LJ().fromArray(W.value);break;case"m3":this.uniforms[$].value=new s0().fromArray(W.value);break;case"m4":this.uniforms[$].value=new d0().fromArray(W.value);break;default:this.uniforms[$].value=W.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class pZ extends _9{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jJ extends X9{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new l0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new l0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new K0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new I9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class L9 extends jJ{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new K0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return i0(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new l0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new l0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new l0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(J){if(this._retroreflectivity>0!==J>0)this.version++;this._retroreflectivity=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.retroreflectivity=J.retroreflectivity,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class T$ extends X9{constructor(J){super();this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new l0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new l0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new K0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new I9,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.envMapIntensity=J.envMapIntensity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class lZ extends X9{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class mZ extends X9{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function j8(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function rQ(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}function P5(J){function Q(Z,K){return J[Z]-J[K]}let $=J.length,W=Array($);for(let Z=0;Z!==$;++Z)W[Z]=Z;return W.sort(Q),W}function VH(J,Q,$){let W=J.length,Z=new J.constructor(W);for(let K=0,H=0;H!==W;++K){let Y=$[K]*Q;for(let X=0;X!==Q;++X)Z[H++]=J[Y+X]}return Z}function I5(J,Q,$,W){let Z=1,K=J[0];while(K!==void 0&&K[W]===void 0)K=J[Z++];if(K===void 0)return;let H=K[W];if(H===void 0)return;if(Array.isArray(H))do{if(H=K[W],H!==void 0)Q.push(K.time),$.push(...H);K=J[Z++]}while(K!==void 0);else if(H.toArray!==void 0)do{if(H=K[W],H!==void 0)Q.push(K.time),H.toArray($,$.length);K=J[Z++]}while(K!==void 0);else do{if(H=K[W],H!==void 0)Q.push(K.time),$.push(H);K=J[Z++]}while(K!==void 0)}class V8{constructor(J,Q,$,W){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=W!==void 0?W:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,W=Q[$],Z=Q[$-1];J:{Q:{let K;$:{W:if(!(J<W)){for(let H=$+2;;){if(W===void 0){if(J<Z)break W;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===H)break;if(Z=W,W=Q[++$],J<W)break Q}K=Q.length;break $}if(!(J>=Z)){let H=Q[1];if(J<H)$=2,Z=H;for(let Y=$-2;;){if(Z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(W=Z,Z=Q[--$-1],J>=Z)break Q}K=$,$=0;break $}break J}while($<K){let H=$+K>>>1;if(J<Q[H])K=H;else $=H+1}if(W=Q[$],Z=Q[$-1],Z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(W===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,Z,W)}return this.interpolate_($,Z,J,W)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,W=this.valueSize,Z=J*W;for(let K=0;K!==W;++K)Q[K]=$[Z+K];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class dZ extends V8{constructor(J,Q,$,W){super(J,Q,$,W);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let W=this.parameterPositions,Z=J-2,K=J+1,H=W[Z],Y=W[K];if(H===void 0)switch(this.getSettings_().endingStart){case 2401:Z=J,H=2*Q-$;break;case 2402:Z=W.length-2,H=Q+W[Z]-W[Z+1];break;default:Z=J,H=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:K=J,Y=2*$-Q;break;case 2402:K=1,Y=$+W[1]-W[0];break;default:K=J-1,Y=Q}let X=($-Q)*0.5,U=this.valueSize;this._weightPrev=X/(Q-H),this._weightNext=X/(Y-$),this._offsetPrev=Z*U,this._offsetNext=K*U}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this._offsetPrev,N=this._offsetNext,q=this._weightPrev,G=this._weightNext,E=($-Q)/(W-Q),F=E*E,B=F*E,R=-q*B+2*q*F-q*E,O=(1+q)*B+(-1.5-2*q)*F+(-0.5+q)*E+1,P=(-1-G)*B+(1.5+G)*F+0.5*E,k=G*B-G*F;for(let L=0;L!==H;++L)Z[L]=R*K[U+L]+O*K[X+L]+P*K[Y+L]+k*K[N+L];return Z}}class S$ extends V8{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=($-Q)/(W-Q),N=1-U;for(let q=0;q!==H;++q)Z[q]=K[X+q]*N+K[Y+q]*U;return Z}}class uZ extends V8{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J){return this.copySampleValue_(J-1)}}class cZ extends V8{interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this.inTangents,N=this.outTangents;if(!U||!N){let E=($-Q)/(W-Q),F=1-E;for(let B=0;B!==H;++B)Z[B]=K[X+B]*F+K[Y+B]*E;return Z}let q=H*2,G=J-1;for(let E=0;E!==H;++E){let F=K[X+E],B=K[Y+E],R=G*q+E*2,O=N[R],P=N[R+1],k=J*q+E*2,L=U[k],C=U[k+1],A=w5($,Q,O,L,W);Z[E]=_Y(A,F,P,C,B)}return Z}}function _Y(J,Q,$,W,Z){let K=1-J;return K*K*K*Q+3*K*K*J*$+3*K*J*J*W+J*J*J*Z}function A5(J,Q,$,W,Z){let K=1-J;return 3*K*K*($-Q)+6*K*J*(W-$)+3*J*J*(Z-W)}function w5(J,Q,$,W,Z){let K=(J-Q)/(Z-Q);for(let H=0;H<8;H++){let Y=_Y(K,Q,$,W,Z)-J;if(Math.abs(Y)<0.0000000001)break;let X=A5(K,Q,$,W,Z);if(Math.abs(X)<0.0000000001)break;K=Math.max(0,Math.min(1,K-Y/X))}return K}class V9{constructor(J,Q,$,W){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=j8(Q,this.TimeBufferType),this.values=j8($,this.ValueBufferType),this.setInterpolation(W||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:j8(J.times,Array),values:j8(J.values,Array)};let W=J.getInterpolation();if(W!==J.DefaultInterpolation)$.interpolation=W;if(rQ(J.settings))$.settings={inTangents:j8(J.settings.inTangents,Array),outTangents:j8(J.settings.outTangents,Array)}}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new uZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new S$(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new dZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new cZ(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return S0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,W=Q.length;$!==W;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,W=Q.length;$!==W;++$)Q[$]*=J;if(rQ(this.settings))BH(this.settings.inTangents,J),BH(this.settings.outTangents,J)}return this}trim(J,Q){let $=this.times,W=$.length,Z=0,K=W-1;while(Z!==W&&$[Z]<J)++Z;while(K!==-1&&$[K]>Q)--K;if(++K,Z!==0||K!==W){if(Z>=K)K=Math.max(K,1),Z=K-1;let H=this.getValueSize();this.times=$.slice(Z,K),this.values=this.values.slice(Z*H,K*H)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)c0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,W=this.values,Z=$.length;if(Z===0)c0("KeyframeTrack: Track is empty.",this),J=!1;let K=null;for(let H=0;H!==Z;H++){let Y=$[H];if(typeof Y==="number"&&isNaN(Y)){c0("KeyframeTrack: Time is not a valid number.",this,H,Y),J=!1;break}if(K!==null&&K>Y){c0("KeyframeTrack: Out of order keys.",this,H,Y,K),J=!1;break}K=Y}if(W!==void 0){if(EU(W))for(let H=0,Y=W.length;H!==Y;++H){let X=W[H];if(isNaN(X)){c0("KeyframeTrack: Value is not a valid number.",this,H,X),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),W=this.getInterpolation()===2302,Z=J.length-1,K=1;for(let H=1;H<Z;++H){let Y=!1,X=J[H],U=J[H+1];if(X!==U&&(H!==1||X!==J[0]))if(!W){let N=H*$,q=N-$,G=N+$;for(let E=0;E!==$;++E){let F=Q[N+E];if(F!==Q[q+E]||F!==Q[G+E]){Y=!0;break}}}else Y=!0;if(Y){if(H!==K){J[K]=J[H];let N=H*$,q=K*$;for(let G=0;G!==$;++G)Q[q+G]=Q[N+G]}++K}}if(Z>0){J[K]=J[Z];for(let H=Z*$,Y=K*$,X=0;X!==$;++X)Q[Y+X]=Q[H+X];++K}if(K!==J.length)this.times=J.slice(0,K),this.values=Q.slice(0,K*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),W=new this.constructor(this.name,J,Q);if(W.createInterpolant=this.createInterpolant,rQ(this.settings))W.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return W}}function BH(J,Q){for(let $=0,W=J.length;$!==W;$+=2)J[$]*=Q}V9.prototype.ValueTypeName="";V9.prototype.TimeBufferType=Float32Array;V9.prototype.ValueBufferType=Float32Array;V9.prototype.DefaultInterpolation=2301;class p8 extends V9{constructor(J,Q,$){super(J,Q,$)}}p8.prototype.ValueTypeName="bool";p8.prototype.ValueBufferType=Array;p8.prototype.DefaultInterpolation=2300;p8.prototype.InterpolantFactoryMethodLinear=void 0;p8.prototype.InterpolantFactoryMethodSmooth=void 0;class j$ extends V9{constructor(J,Q,$,W){super(J,Q,$,W)}}j$.prototype.ValueTypeName="color";class l8 extends V9{constructor(J,Q,$,W){super(J,Q,$,W)}}l8.prototype.ValueTypeName="number";class nZ extends V8{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=($-Q)/(W-Q),X=J*H;for(let U=X+H;X!==U;X+=4)GJ.slerpFlat(Z,0,K,X-H,K,X,Y);return Z}}class m8 extends V9{constructor(J,Q,$,W){super(J,Q,$,W)}InterpolantFactoryMethodLinear(J){return new nZ(this.times,this.values,this.getValueSize(),J)}}m8.prototype.ValueTypeName="quaternion";m8.prototype.InterpolantFactoryMethodSmooth=void 0;class d8 extends V9{constructor(J,Q,$){super(J,Q,$)}}d8.prototype.ValueTypeName="string";d8.prototype.ValueBufferType=Array;d8.prototype.DefaultInterpolation=2300;d8.prototype.InterpolantFactoryMethodLinear=void 0;d8.prototype.InterpolantFactoryMethodSmooth=void 0;class F7 extends V9{constructor(J,Q,$,W){super(J,Q,$,W)}}F7.prototype.ValueTypeName="vector";class o7{constructor(J="",Q=-1,$=[],W=2500){if(this.name=J,this.tracks=$,this.duration=Q,this.blendMode=W,this.uuid=P9(),this.userData={},this.duration<0)this.resetDuration()}static parse(J){let Q=[],$=J.tracks,W=1/(J.fps||1);for(let K=0,H=$.length;K!==H;++K)Q.push(T5($[K]).scale(W));let Z=new this(J.name,J.duration,Q,J.blendMode);return Z.uuid=J.uuid,Z.userData=JSON.parse(J.userData||"{}"),Z}static toJSON(J){let Q=[],$=J.tracks,W={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode,userData:JSON.stringify(J.userData)};for(let Z=0,K=$.length;Z!==K;++Z)Q.push(V9.toJSON($[Z]));return W}static CreateFromMorphTargetSequence(J,Q,$,W){let Z=Q.length,K=[];for(let H=0;H<Z;H++){let Y=[],X=[];Y.push((H+Z-1)%Z,H,(H+1)%Z),X.push(0,1,0);let U=P5(Y);if(Y=VH(Y,1,U),X=VH(X,1,U),!W&&Y[0]===0)Y.push(Z),X.push(X[0]);K.push(new l8(".morphTargetInfluences["+Q[H].name+"]",Y,X).scale(1/$))}return new this(J,-1,K)}static findByName(J,Q){let $=J;if(!Array.isArray(J)){let W=J;$=W.geometry&&W.geometry.animations||W.animations}for(let W=0;W<$.length;W++)if($[W].name===Q)return $[W];return null}static CreateClipsFromMorphTargetSequences(J,Q,$){let W={},Z=/^([\w-]*?)([\d]+)$/;for(let H=0,Y=J.length;H<Y;H++){let X=J[H],U=X.name.match(Z);if(U&&U.length>1){let N=U[1],q=W[N];if(!q)W[N]=q=[];q.push(X)}}let K=[];for(let H in W)K.push(this.CreateFromMorphTargetSequence(H,W[H],Q,$));return K}resetDuration(){let J=this.tracks,Q=0;for(let $=0,W=J.length;$!==W;++$){let Z=this.tracks[$];Q=Math.max(Q,Z.times[Z.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let $=0;$<this.tracks.length;$++)J.push(this.tracks[$].clone());let Q=new this.constructor(this.name,this.duration,J,this.blendMode);return Q.userData=JSON.parse(JSON.stringify(this.userData)),Q}toJSON(){return this.constructor.toJSON(this)}}function _5(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return l8;case"vector":case"vector2":case"vector3":case"vector4":return F7;case"color":return j$;case"quaternion":return m8;case"bool":case"boolean":return p8;case"string":return d8}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function T5(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=_5(J.type);if(J.times===void 0){let W=[],Z=[];I5(J.keys,W,Z,"value"),J.times=W,J.values=Z}let $;if(Q.parse!==void 0)$=Q.parse(J);else $=new Q(J.name,J.times,J.values,J.interpolation);if(rQ(J.settings))$.settings={inTangents:j8(J.settings.inTangents,Float32Array),outTangents:j8(J.settings.outTangents,Float32Array)};return $}var s9={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;if(kH(J))return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;if(kH(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function kH(J){try{let Q=J.slice(J.indexOf(":")+1);return new URL(Q).protocol==="blob:"}catch(Q){return!1}}class sZ{constructor(J,Q,$){let W=this,Z=!1,K=0,H=0,Y=void 0,X=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(H++,Z===!1){if(W.onStart!==void 0)W.onStart(U,K,H)}Z=!0},this.itemEnd=function(U){if(K++,W.onProgress!==void 0)W.onProgress(U,K,H);if(K===H){if(Z=!1,W.onLoad!==void 0)W.onLoad()}},this.itemError=function(U){if(W.onError!==void 0)W.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,N){return X.push(U,N),this},this.removeHandler=function(U){let N=X.indexOf(U);if(N!==-1)X.splice(N,2);return this},this.getHandler=function(U){for(let N=0,q=X.length;N<q;N+=2){let G=X[N],E=X[N+1];if(G.global)G.lastIndex=0;if(G.test(U))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var TY=new sZ;class B8{constructor(J){if(this.manager=J!==void 0?J:TY,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(W,Z){$.load(J,W,Q,Z)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}B8.DEFAULT_MATERIAL_NAME="__DEFAULT";var E8={};class SY extends Error{constructor(J,Q){super(J);this.response=Q}}class XQ extends B8{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,Q,$,W){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=s9.get(`file:${J}`);if(Z!==void 0){this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(Z);this.manager.itemEnd(J)},0);return}if(E8[J]!==void 0){E8[J].push({onLoad:Q,onProgress:$,onError:W});return}E8[J]=[],E8[J].push({onLoad:Q,onProgress:$,onError:W});let K=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),H=this.mimeType,Y=this.responseType;fetch(K).then((X)=>{if(X.status===200||X.status===0){if(X.status===0)S0("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||X.body===void 0||X.body.getReader===void 0)return X;let U=E8[J],N=X.body.getReader(),q=X.headers.get("X-File-Size")||X.headers.get("Content-Length"),G=q?parseInt(q):0,E=G!==0,F=0,B=new ReadableStream({start(R){O();function O(){N.read().then(({done:P,value:k})=>{if(P)R.close();else{F+=k.byteLength;let L=new ProgressEvent("progress",{lengthComputable:E,loaded:F,total:G});for(let C=0,A=U.length;C<A;C++){let w=U[C];if(w.onProgress)w.onProgress(L)}R.enqueue(k),O()}},(P)=>{R.error(P)})}}});return new Response(B)}else throw new SY(`fetch for "${X.url}" responded with ${X.status}: ${X.statusText}`,X)}).then((X)=>{switch(Y){case"arraybuffer":return X.arrayBuffer();case"blob":return X.blob();case"document":return X.text().then((U)=>{return new DOMParser().parseFromString(U,H)});case"json":return X.json();default:if(H==="")return X.text();else{let N=/charset="?([^;"\s]*)"?/i.exec(H),q=N&&N[1]?N[1].toLowerCase():void 0,G=new TextDecoder(q);return X.arrayBuffer().then((E)=>G.decode(E))}}}).then((X)=>{s9.add(`file:${J}`,X);let U=E8[J];delete E8[J];for(let N=0,q=U.length;N<q;N++){let G=U[N];if(G.onLoad)G.onLoad(X)}}).catch((X)=>{let U=E8[J];if(U===void 0)throw this.manager.itemError(J),X;delete E8[J];for(let N=0,q=U.length;N<q;N++){let G=U[N];if(G.onError)G.onError(X)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var l7=new WeakMap;class iZ extends B8{constructor(J){super(J)}load(J,Q,$,W){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=this,K=s9.get(`image:${J}`);if(K!==void 0){if(K.complete===!0)Z.manager.itemStart(J),setTimeout(function(){if(Q)Q(K);Z.manager.itemEnd(J)},0);else{let N=l7.get(K);if(N===void 0)N=[],l7.set(K,N);N.push({onLoad:Q,onError:W})}return K}let H=n7("img");function Y(){if(U(),Q)Q(this);let N=l7.get(this)||[];for(let q=0;q<N.length;q++){let G=N[q];if(G.onLoad)G.onLoad(this)}l7.delete(this),Z.manager.itemEnd(J)}function X(N){if(U(),W)W(N);s9.remove(`image:${J}`);let q=l7.get(this)||[];for(let G=0;G<q.length;G++){let E=q[G];if(E.onError)E.onError(N)}l7.delete(this),Z.manager.itemError(J),Z.manager.itemEnd(J)}function U(){H.removeEventListener("load",Y,!1),H.removeEventListener("error",X,!1)}if(H.addEventListener("load",Y,!1),H.addEventListener("error",X,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)H.crossOrigin=this.crossOrigin}return s9.add(`image:${J}`,H),Z.manager.itemStart(J),H.src=J,H}}class y$ extends B8{constructor(J){super(J)}load(J,Q,$,W){let Z=new hJ,K=new iZ(this.manager);return K.setCrossOrigin(this.crossOrigin),K.setPath(this.path),K.load(J,function(H){if(Z.image=H,Z.needsUpdate=!0,Q!==void 0)Q(Z)},$,W),Z}}class Y6 extends FJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new l0(J),this.intensity=Q}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}class v$ extends Y6{constructor(J,Q,$){super(J,$);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(FJ.DEFAULT_UP),this.updateMatrix(),this.groundColor=new l0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}toJSON(J){let Q=super.toJSON(J);return Q.object.groundColor=this.groundColor.getHex(),Q}}var CW=new d0,DH=new _,MH=new _;class UQ{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new d0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new e6,this._frameExtents=new K0(1,1),this._viewportCount=1,this._viewports=[new LJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera;DH.setFromMatrixPosition(J.matrixWorld),Q.position.copy(DH),MH.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(MH),Q.updateMatrixWorld(),this._updateMatrix(Q,this.matrix,this._frustum)}_updateMatrix(J,Q,$,W){CW.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),$.setFromProjectionMatrix(CW,J.coordinateSystem,J.reversedDepth);let Z=this._frameExtents,K=W?W.z/Z.x:1,H=W?W.w/Z.y:1,Y=W?W.x/Z.x:0,X=W?W.y/Z.y:0;if(J.coordinateSystem===2001||J.reversedDepth)Q.set(0.5*K,0,0,0.5*K+Y,0,0.5*H,0,0.5*H+X,0,0,1,0,0,0,0,1);else Q.set(0.5*K,0,0,0.5*K+Y,0,0.5*H,0,0.5*H+X,0,0,0.5,0.5,0,0,0,1);Q.multiply(CW)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var oQ=new _,aQ=new GJ,n9=new _;class f$ extends FJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new d0,this.projectionMatrix=new d0,this.projectionMatrixInverse=new d0,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(oQ,aQ,n9),n9.x===1&&n9.y===1&&n9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(oQ,aQ,n9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(oQ,aQ,n9),n9.x===1&&n9.y===1&&n9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(oQ,aQ,n9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var S8=new _,CH=new K0,zH=new K0;class mJ extends f${constructor(J=50,Q=1,$=0.1,W=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=W,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=W7*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(S6*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return W7*2*Math.atan(Math.tan(S6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){S8.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(S8.x,S8.y).multiplyScalar(-J/S8.z),S8.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(S8.x,S8.y).multiplyScalar(-J/S8.z)}getViewSize(J,Q){return this.getViewBounds(J,CH,zH),Q.subVectors(zH,CH)}setViewOffset(J,Q,$,W,Z,K){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=W,this.view.width=Z,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(S6*0.5*this.fov)/this.zoom,$=2*Q,W=this.aspect*$,Z=-0.5*W,K=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:X}=K;Z+=K.offsetX*W/Y,Q-=K.offsetY*$/X,W*=K.width/Y,$*=K.height/X}let H=this.filmOffset;if(H!==0)Z+=J*H/this.getFilmWidth();this.projectionMatrix.makePerspective(Z,Z+W,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class jY extends UQ{constructor(){super(new mJ(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=W7*2*J.angle*this.focus,W=this.mapSize.width/this.mapSize.height*this.aspect,Z=J.distance||Q.far;if($!==Q.fov||W!==Q.aspect||Z!==Q.far)Q.fov=$,Q.aspect=W,Q.far=Z,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this.aspect=J.aspect,this}toJSON(){let J=super.toJSON();return J.focus=this.focus,J.aspect=this.aspect,J}}class X6 extends Y6{constructor(J,Q,$=0,W=Math.PI/3,Z=0,K=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(FJ.DEFAULT_UP),this.updateMatrix(),this.target=new FJ,this.distance=$,this.angle=W,this.penumbra=Z,this.decay=K,this.map=null,this.shadow=new jY}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);if(Q.object.distance=this.distance,Q.object.angle=this.angle,Q.object.decay=this.decay,Q.object.penumbra=this.penumbra,Q.object.target=this.target.uuid,this.map&&this.map.isTexture)Q.object.map=this.map.toJSON(J).uuid;return Q.object.shadow=this.shadow.toJSON(),Q}}class yY extends UQ{constructor(){super(new mJ(90,1,0.5,500));this.isPointLightShadow=!0}}class u8 extends Y6{constructor(J,Q,$=0,W=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=W,this.shadow=new yY}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class O7 extends f${constructor(J=-1,Q=1,$=1,W=-1,Z=0.1,K=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=W,this.near=Z,this.far=K,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,W,Z,K){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=W,this.view.width=Z,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,W=(this.top+this.bottom)/2,Z=$-J,K=$+J,H=W+Q,Y=W-Q;if(this.view!==null&&this.view.enabled){let X=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Z+=X*this.view.offsetX,K=Z+X*this.view.width,H-=U*this.view.offsetY,Y=H-U*this.view.height}this.projectionMatrix.makeOrthographic(Z,K,H,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class vY extends UQ{constructor(){super(new O7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class U6 extends Y6{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(FJ.DEFAULT_UP),this.updateMatrix(),this.target=new FJ,this.shadow=new vY}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class c8{static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}var zW=new WeakMap;class h$ extends B8{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")S0("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")S0("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(J){return this.options=J,this}load(J,Q,$,W){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=this,K=s9.get(`image-bitmap:${J}`);if(K!==void 0){if(Z.manager.itemStart(J),K.then){K.then((X)=>{if(zW.has(K)===!0){if(W)W(zW.get(K));Z.manager.itemError(J),Z.manager.itemEnd(J)}else{if(Q)Q(X);Z.manager.itemEnd(J)}});return}setTimeout(function(){if(Q)Q(K);Z.manager.itemEnd(J)},0);return}let H={};H.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",H.headers=this.requestHeader,H.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let Y=fetch(J,H).then(function(X){return X.blob()}).then(function(X){return createImageBitmap(X,Object.assign({},Z.options,{colorSpaceConversion:"none"}))}).then(function(X){if(s9.add(`image-bitmap:${J}`,X),Q)Q(X);return Z.manager.itemEnd(J),X}).catch(function(X){if(W)W(X);zW.set(Y,X),s9.remove(`image-bitmap:${J}`),Z.manager.itemError(J),Z.manager.itemEnd(J)});s9.add(`image-bitmap:${J}`,Y),Z.manager.itemStart(J)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var m7=-90,d7=1;class oZ extends FJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let W=new mJ(m7,d7,J,Q);W.layers=this.layers,this.add(W);let Z=new mJ(m7,d7,J,Q);Z.layers=this.layers,this.add(Z);let K=new mJ(m7,d7,J,Q);K.layers=this.layers,this.add(K);let H=new mJ(m7,d7,J,Q);H.layers=this.layers,this.add(H);let Y=new mJ(m7,d7,J,Q);Y.layers=this.layers,this.add(Y);let X=new mJ(m7,d7,J,Q);X.layers=this.layers,this.add(X)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,W,Z,K,H,Y]=Q;for(let X of Q)this.remove(X);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),W.up.set(0,1,0),W.lookAt(-1,0,0),Z.up.set(0,0,-1),Z.lookAt(0,1,0),K.up.set(0,0,1),K.lookAt(0,-1,0),H.up.set(0,1,0),H.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),W.up.set(0,-1,0),W.lookAt(1,0,0),Z.up.set(0,0,1),Z.lookAt(0,1,0),K.up.set(0,0,-1),K.lookAt(0,-1,0),H.up.set(0,-1,0),H.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let X of Q)this.add(X),X.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:W}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[Z,K,H,Y,X,U]=this.children,N=J.getRenderTarget(),q=J.getActiveCubeFace(),G=J.getActiveMipmapLevel(),E=J.xr.enabled;J.xr.enabled=!1;let F=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let B=!1;if(J.isWebGLRenderer===!0)B=J.state.buffers.depth.getReversed();else B=J.reversedDepthBuffer;if(J.setRenderTarget($,0,W),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Z),J.setRenderTarget($,1,W),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,2,W),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),J.setRenderTarget($,3,W),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,W),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),$.texture.generateMipmaps=F,J.setRenderTarget($,5,W),B&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(N,q,G),J.xr.enabled=E,$.texture.needsPMREMUpdate=!0}}class aZ extends mJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}class rZ{constructor(J,Q,$){this.binding=J,this.valueSize=$;let W,Z,K;switch(Q){case"quaternion":W=this._slerp,Z=this._slerpAdditive,K=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array($*6),this._workIndex=5;break;case"string":case"bool":W=this._select,Z=this._select,K=this._setAdditiveIdentityOther,this.buffer=Array($*5);break;default:W=this._lerp,Z=this._lerpAdditive,K=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array($*5)}this._mixBufferRegion=W,this._mixBufferRegionAdditive=Z,this._setIdentity=K,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(J,Q){let $=this.buffer,W=this.valueSize,Z=J*W+W,K=this.cumulativeWeight;if(K===0){for(let H=0;H!==W;++H)$[Z+H]=$[H];K=Q}else{K+=Q;let H=Q/K;this._mixBufferRegion($,Z,0,H,W)}this.cumulativeWeight=K}accumulateAdditive(J){let Q=this.buffer,$=this.valueSize,W=$*this._addIndex;if(this.cumulativeWeightAdditive===0)this._setIdentity();this._mixBufferRegionAdditive(Q,W,0,J,$),this.cumulativeWeightAdditive+=J}apply(J){let Q=this.valueSize,$=this.buffer,W=J*Q+Q,Z=this.cumulativeWeight,K=this.cumulativeWeightAdditive,H=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,Z<1){let Y=Q*this._origIndex;this._mixBufferRegion($,W,Y,1-Z,Q)}if(K>0)this._mixBufferRegionAdditive($,W,this._addIndex*Q,1,Q);for(let Y=Q,X=Q+Q;Y!==X;++Y)if($[Y]!==$[Y+Q]){H.setValue($,W);break}}saveOriginalState(){let J=this.binding,Q=this.buffer,$=this.valueSize,W=$*this._origIndex;J.getValue(Q,W);for(let Z=$,K=W;Z!==K;++Z)Q[Z]=Q[W+Z%$];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let J=this.valueSize*3;this.binding.setValue(this.buffer,J)}_setAdditiveIdentityNumeric(){let J=this._addIndex*this.valueSize,Q=J+this.valueSize;for(let $=J;$<Q;$++)this.buffer[$]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let J=this._origIndex*this.valueSize,Q=this._addIndex*this.valueSize;for(let $=0;$<this.valueSize;$++)this.buffer[Q+$]=this.buffer[J+$]}_select(J,Q,$,W,Z){if(W>=0.5)for(let K=0;K!==Z;++K)J[Q+K]=J[$+K]}_slerp(J,Q,$,W){GJ.slerpFlat(J,Q,J,Q,J,$,W)}_slerpAdditive(J,Q,$,W,Z){let K=this._workIndex*Z;GJ.multiplyQuaternionsFlat(J,K,J,Q,J,$),GJ.slerpFlat(J,Q,J,Q,J,K,W)}_lerp(J,Q,$,W,Z){let K=1-W;for(let H=0;H!==Z;++H){let Y=Q+H;J[Y]=J[Y]*K+J[$+H]*W}}_lerpAdditive(J,Q,$,W,Z){for(let K=0;K!==Z;++K){let H=Q+K;J[H]=J[H]+J[$+K]*W}}}var tZ="\\[\\]\\.:\\/",S5=new RegExp("["+tZ+"]","g"),eZ="[^"+tZ+"]",j5="[^"+tZ.replace("\\.","")+"]",y5=/((?:WC+[\/:])*)/.source.replace("WC",eZ),v5=/(WCOD+)?/.source.replace("WCOD",j5),f5=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eZ),h5=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eZ),b5=new RegExp("^"+y5+v5+f5+h5+"$"),x5=["material","materials","bones","map"];class fY{constructor(J,Q,$){let W=$||qJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,W)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,W=this._bindings[$];if(W!==void 0)W.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let W=this._targetGroup.nCachedObjects_,Z=$.length;W!==Z;++W)$[W].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class qJ{constructor(J,Q,$){this.path=Q,this.parsedPath=$||qJ.parseTrackName(Q),this.node=qJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new qJ(J,Q,$);else return new qJ.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(S5,"")}static parseTrackName(J){let Q=b5.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},W=$.nodeName&&$.nodeName.lastIndexOf(".");if(W!==void 0&&W!==-1){let Z=$.nodeName.substring(W+1);if(x5.indexOf(Z)!==-1)$.nodeName=$.nodeName.substring(0,W),$.objectName=Z}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(Z){for(let K=0;K<Z.length;K++){let H=Z[K];if(H.name===Q||H.uuid===Q)return H;let Y=$(H.children);if(Y)return Y}return null},W=$(J.children);if(W)return W}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)J[Q++]=$[W]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,W=Q.propertyName,Z=Q.propertyIndex;if(!J)J=qJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){S0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let X=Q.objectIndex;switch($){case"materials":if(!J.material){c0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){c0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){c0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===X){X=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){c0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){c0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){c0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(X!==void 0){if(J[X]===void 0){c0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[X]}}let K=J[W];if(K===void 0){let X=Q.nodeName;c0("PropertyBinding: Trying to update property for track: "+X+"."+W+" but it wasn't found.",J);return}let H=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)H=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)H=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(Z!==void 0){if(W==="morphTargetInfluences"){if(!J.geometry){c0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){c0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[Z]!==void 0)Z=J.morphTargetDictionary[Z]}Y=this.BindingType.ArrayElement,this.resolvedProperty=K,this.propertyIndex=Z}else if(K.fromArray!==void 0&&K.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=K;else if(Array.isArray(K))Y=this.BindingType.EntireArray,this.resolvedProperty=K;else this.propertyName=W;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][H]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}qJ.Composite=fY;qJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qJ.prototype.GetterByBindingType=[qJ.prototype._getValue_direct,qJ.prototype._getValue_array,qJ.prototype._getValue_arrayElement,qJ.prototype._getValue_toArray];qJ.prototype.SetterByBindingTypeAndVersioning=[[qJ.prototype._setValue_direct,qJ.prototype._setValue_direct_setNeedsUpdate,qJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qJ.prototype._setValue_array,qJ.prototype._setValue_array_setNeedsUpdate,qJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qJ.prototype._setValue_arrayElement,qJ.prototype._setValue_arrayElement_setNeedsUpdate,qJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qJ.prototype._setValue_fromArray,qJ.prototype._setValue_fromArray_setNeedsUpdate,qJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class JK{constructor(J,Q,$=null,W=Q.blendMode){this._mixer=J,this._clip=Q,this._localRoot=$,this.blendMode=W;let Z=Q.tracks,K=Z.length,H=Array(K),Y={endingStart:2400,endingEnd:2400};for(let X=0;X!==K;++X){let U=Z[X].createInterpolant(null);H[X]=U,U.settings=Y}this._interpolantSettings=Y,this._interpolants=H,this._propertyBindings=Array(K),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(J){return this._startTime=J,this}setLoop(J,Q){return this.loop=J,this.repetitions=Q,this}setEffectiveWeight(J){return this.weight=J,this._effectiveWeight=this.enabled?J:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(J){return this._scheduleFading(J,0,1)}fadeOut(J){return this._scheduleFading(J,1,0)}crossFadeFrom(J,Q,$=!1){if(J.fadeOut(Q),this.fadeIn(Q),$===!0){let W=this._clip.duration,Z=J._clip.duration,K=Z/W,H=W/Z;J._restoreTimeScale=J.timeScale,this._restoreTimeScale=this.timeScale,J.warp(1,K,Q),this.warp(H,1,Q)}return this}crossFadeTo(J,Q,$=!1){return J.crossFadeFrom(this,Q,$)}stopFading(){let J=this._weightInterpolant;if(J!==null)this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this}setEffectiveTimeScale(J){return this.timeScale=J,this._effectiveTimeScale=this.paused?0:J,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(J){return this.timeScale=this._clip.duration/J,this.stopWarping()}syncWith(J){return this.time=J.time,this.timeScale=J.timeScale,this.stopWarping()}halt(J){return this.warp(this._effectiveTimeScale,0,J)}warp(J,Q,$){let W=this._mixer,Z=W.time,K=this.timeScale,H=this._timeScaleInterpolant;if(H===null)H=W._lendControlInterpolant(),this._timeScaleInterpolant=H;let{parameterPositions:Y,sampleValues:X}=H;return Y[0]=Z,Y[1]=Z+$,X[0]=J/K,X[1]=Q/K,this}stopWarping(){let J=this._timeScaleInterpolant;if(J!==null)this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(J,Q,$,W){if(!this.enabled){this._updateWeight(J);return}let Z=this._startTime;if(Z!==null){let Y=(J-Z)*$;if(Y<0||$===0)Q=0;else this._startTime=null,Q=$*Y}Q*=this._updateTimeScale(J);let K=this._updateTime(Q),H=this._updateWeight(J);if(H>0){let Y=this._interpolants,X=this._propertyBindings;switch(this.blendMode){case 2501:for(let U=0,N=Y.length;U!==N;++U)Y[U].evaluate(K),X[U].accumulateAdditive(H);break;case 2500:default:for(let U=0,N=Y.length;U!==N;++U)Y[U].evaluate(K),X[U].accumulate(W,H)}}}_updateWeight(J){let Q=0;if(this.enabled){Q=this.weight;let $=this._weightInterpolant;if($!==null){let W=$.evaluate(J)[0];if(Q*=W,J>$.parameterPositions[1]){if(this.stopFading(),W===0)this.enabled=!1}}}return this._effectiveWeight=Q,Q}_updateTimeScale(J){let Q=0;if(!this.paused){Q=this.timeScale;let $=this._timeScaleInterpolant;if($!==null){let W=$.evaluate(J)[0];if(Q*=W,J>$.parameterPositions[1]){if(Q===0)this.paused=!0;else{if(this._restoreTimeScale!==null)Q=this._restoreTimeScale;this.timeScale=Q}this.stopWarping()}}}return this._effectiveTimeScale=Q,Q}_updateTime(J){let Q=this._clip.duration,$=this.loop,W=this.time+J,Z=this._loopCount,K=$===2202;if(J===0){if(Z===-1)return W;return K&&(Z&1)===1?Q-W:W}if($===2200){if(Z===-1)this._loopCount=0,this._setEndings(!0,!0,!1);J:{if(W>=Q)W=Q;else if(W<0)W=0;else{this.time=W;break J}if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;this.time=W,this._mixer.dispatchEvent({type:"finished",action:this,direction:J<0?-1:1})}}else{if(Z===-1)if(J>=0)Z=0,this._setEndings(!0,this.repetitions===0,K);else this._setEndings(this.repetitions===0,!0,K);if(W>=Q||W<0){let H=Math.floor(W/Q);W-=Q*H,Z+=Math.abs(H);let Y=this.repetitions-Z;if(Y<=0){if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;W=J>0?Q:0,this.time=W,this._mixer.dispatchEvent({type:"finished",action:this,direction:J>0?1:-1})}else{if(Y===1){let X=J<0;this._setEndings(X,!X,K)}else this._setEndings(!1,!1,K);this._loopCount=Z,this.time=W,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:H})}}else this._loopCount=Z,this.time=W;if(K&&(Z&1)===1)return Q-W}return W}_setEndings(J,Q,$){let W=this._interpolantSettings;if($)W.endingStart=2401,W.endingEnd=2401;else{if(J)W.endingStart=this.zeroSlopeAtStart?2401:2400;else W.endingStart=2402;if(Q)W.endingEnd=this.zeroSlopeAtEnd?2401:2400;else W.endingEnd=2402}}_scheduleFading(J,Q,$){let W=this._mixer,Z=W.time,K=this._weightInterpolant;if(K===null)K=W._lendControlInterpolant(),this._weightInterpolant=K;let{parameterPositions:H,sampleValues:Y}=K;return H[0]=Z,Y[0]=Q,H[1]=Z+J,Y[1]=$,this}}var g5=new Float32Array(1);class GQ extends m9{constructor(J){super();if(this._root=J,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(J,Q){let $=J._localRoot||this._root,W=J._clip.tracks,Z=W.length,K=J._propertyBindings,H=J._interpolants,Y=$.uuid,X=this._bindingsByRootAndName,U=X[Y];if(U===void 0)U={},X[Y]=U;for(let N=0;N!==Z;++N){let q=W[N],G=q.name,E=U[G];if(E!==void 0)++E.referenceCount,K[N]=E;else{if(E=K[N],E!==void 0){if(E._cacheIndex===null)++E.referenceCount,this._addInactiveBinding(E,Y,G);continue}let F=Q&&Q._propertyBindings[N].binding.parsedPath;E=new rZ(qJ.create($,G,F),q.ValueTypeName,q.getValueSize()),++E.referenceCount,this._addInactiveBinding(E,Y,G),K[N]=E}H[N].resultBuffer=E.buffer}}_activateAction(J){if(!this._isActiveAction(J)){if(J._cacheIndex===null){let $=(J._localRoot||this._root).uuid,W=J._clip.uuid,Z=this._actionsByClip[W];this._bindAction(J,Z&&Z.knownActions[0]),this._addInactiveAction(J,W,$)}let Q=J._propertyBindings;for(let $=0,W=Q.length;$!==W;++$){let Z=Q[$];if(Z.useCount++===0)this._lendBinding(Z),Z.saveOriginalState()}this._lendAction(J)}}_deactivateAction(J){if(this._isActiveAction(J)){let Q=J._propertyBindings;for(let $=0,W=Q.length;$!==W;++$){let Z=Q[$];if(--Z.useCount===0)Z.restoreOriginalState(),this._takeBackBinding(Z)}this._takeBackAction(J)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let J=this;this.stats={actions:{get total(){return J._actions.length},get inUse(){return J._nActiveActions}},bindings:{get total(){return J._bindings.length},get inUse(){return J._nActiveBindings}},controlInterpolants:{get total(){return J._controlInterpolants.length},get inUse(){return J._nActiveControlInterpolants}}}}_isActiveAction(J){let Q=J._cacheIndex;return Q!==null&&Q<this._nActiveActions}_addInactiveAction(J,Q,$){let W=this._actions,Z=this._actionsByClip,K=Z[Q];if(K===void 0)K={knownActions:[J],actionByRoot:{}},J._byClipCacheIndex=0,Z[Q]=K;else{let H=K.knownActions;J._byClipCacheIndex=H.length,H.push(J)}J._cacheIndex=W.length,W.push(J),K.actionByRoot[$]=J}_removeInactiveAction(J){let Q=this._actions,$=Q[Q.length-1],W=J._cacheIndex;$._cacheIndex=W,Q[W]=$,Q.pop(),J._cacheIndex=null;let Z=J._clip.uuid,K=this._actionsByClip,H=K[Z],Y=H.knownActions,X=Y[Y.length-1],U=J._byClipCacheIndex;X._byClipCacheIndex=U,Y[U]=X,Y.pop(),J._byClipCacheIndex=null;let N=H.actionByRoot,q=(J._localRoot||this._root).uuid;if(delete N[q],Y.length===0)delete K[Z];this._removeInactiveBindingsForAction(J)}_removeInactiveBindingsForAction(J){let Q=J._propertyBindings;for(let $=0,W=Q.length;$!==W;++$){let Z=Q[$];if(--Z.referenceCount===0)this._removeInactiveBinding(Z)}}_lendAction(J){let Q=this._actions,$=J._cacheIndex,W=this._nActiveActions++,Z=Q[W];J._cacheIndex=W,Q[W]=J,Z._cacheIndex=$,Q[$]=Z}_takeBackAction(J){let Q=this._actions,$=J._cacheIndex,W=--this._nActiveActions,Z=Q[W];J._cacheIndex=W,Q[W]=J,Z._cacheIndex=$,Q[$]=Z}_addInactiveBinding(J,Q,$){let W=this._bindingsByRootAndName,Z=this._bindings,K=W[Q];if(K===void 0)K={},W[Q]=K;K[$]=J,J._cacheIndex=Z.length,Z.push(J)}_removeInactiveBinding(J){let Q=this._bindings,$=J.binding,W=$.rootNode.uuid,Z=$.path,K=this._bindingsByRootAndName,H=K[W],Y=Q[Q.length-1],X=J._cacheIndex;if(Y._cacheIndex=X,Q[X]=Y,Q.pop(),delete H[Z],Object.keys(H).length===0)delete K[W]}_lendBinding(J){let Q=this._bindings,$=J._cacheIndex,W=this._nActiveBindings++,Z=Q[W];J._cacheIndex=W,Q[W]=J,Z._cacheIndex=$,Q[$]=Z}_takeBackBinding(J){let Q=this._bindings,$=J._cacheIndex,W=--this._nActiveBindings,Z=Q[W];J._cacheIndex=W,Q[W]=J,Z._cacheIndex=$,Q[$]=Z}_lendControlInterpolant(){let J=this._controlInterpolants,Q=this._nActiveControlInterpolants++,$=J[Q];if($===void 0)$=new S$(new Float32Array(2),new Float32Array(2),1,g5),$.__cacheIndex=Q,J[Q]=$;return $}_takeBackControlInterpolant(J){let Q=this._controlInterpolants,$=J.__cacheIndex,W=--this._nActiveControlInterpolants,Z=Q[W];J.__cacheIndex=W,Q[W]=J,Z.__cacheIndex=$,Q[$]=Z}clipAction(J,Q,$){let W=Q||this._root,Z=W.uuid,K=typeof J==="string"?o7.findByName(W,J):J,H=K!==null?K.uuid:J,Y=this._actionsByClip[H],X=null;if($===void 0)if(K!==null)$=K.blendMode;else $=2500;if(Y!==void 0){let N=Y.actionByRoot[Z];if(N!==void 0&&N.blendMode===$)return N;if(X=Y.knownActions[0],K===null)K=X._clip}if(K===null)return null;let U=new JK(this,K,Q,$);return this._bindAction(U,X),this._addInactiveAction(U,H,Z),U}existingAction(J,Q){let $=Q||this._root,W=$.uuid,Z=typeof J==="string"?o7.findByName($,J):J,K=Z?Z.uuid:J,H=this._actionsByClip[K];if(H!==void 0)return H.actionByRoot[W]||null;return null}stopAllAction(){let J=this._actions,Q=this._nActiveActions;for(let $=Q-1;$>=0;--$)J[$].stop();return this}update(J){J*=this.timeScale;let Q=this._actions,$=this._nActiveActions,W=this.time+=J,Z=Math.sign(J),K=this._accuIndex^=1;for(let X=0;X!==$;++X)Q[X]._update(W,J,Z,K);let H=this._bindings,Y=this._nActiveBindings;for(let X=0;X!==Y;++X)H[X].apply(K);return this}setTime(J){this.time=0;for(let Q=0;Q<this._actions.length;Q++)this._actions[Q].time=0;return this.update(J)}getRoot(){return this._root}uncacheClip(J){let Q=this._actions,$=J.uuid,W=this._actionsByClip,Z=W[$];if(Z!==void 0){let K=Z.knownActions;for(let H=0,Y=K.length;H!==Y;++H){let X=K[H];this._deactivateAction(X);let U=X._cacheIndex,N=Q[Q.length-1];X._cacheIndex=null,X._byClipCacheIndex=null,N._cacheIndex=U,Q[U]=N,Q.pop(),this._removeInactiveBindingsForAction(X)}delete W[$]}}uncacheRoot(J){let Q=J.uuid,$=this._actionsByClip;for(let K in $){let H=$[K].actionByRoot,Y=H[Q];if(Y!==void 0)this._deactivateAction(Y),this._removeInactiveAction(Y)}let W=this._bindingsByRootAndName,Z=W[Q];if(Z!==void 0)for(let K in Z){let H=Z[K];H.restoreOriginalState(),this._removeInactiveBinding(H)}}uncacheAction(J,Q){let $=this.existingAction(J,Q);if($!==null)this._deactivateAction($),this._removeInactiveAction($)}}class b${constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,S0("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let Q=performance.now();J=(Q-this.oldTime)/1000,this.oldTime=Q,this.elapsedTime+=J}return J}}class NQ{constructor(J=1,Q=0,$=0){this.radius=J,this.phi=Q,this.theta=$}set(J,Q,$){return this.radius=J,this.phi=Q,this.theta=$,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=i0(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){if(this.radius=Math.sqrt(J*J+Q*Q+$*$),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,$),this.phi=Math.acos(i0(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class QK{static{QK.prototype.isMatrix2=!0}constructor(J,Q,$,W){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,W)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,W){let Z=this.elements;return Z[0]=J,Z[2]=Q,Z[1]=$,Z[3]=W,this}}class x$ extends m9{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function $K(J,Q,$,W){let Z=p5(W);switch($){case 1021:return J*Q;case 1028:return J*Q/Z.components*Z.byteLength;case 1029:return J*Q/Z.components*Z.byteLength;case 1030:return J*Q*2/Z.components*Z.byteLength;case 1031:return J*Q*2/Z.components*Z.byteLength;case 1022:return J*Q*3/Z.components*Z.byteLength;case 1023:return J*Q*4/Z.components*Z.byteLength;case 1033:return J*Q*4/Z.components*Z.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function p5(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)S0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function WX(){let J=null,Q=!1,$=null,W=null;function Z(K,H){W=J.requestAnimationFrame(Z),$(K,H)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;W=J.requestAnimationFrame(Z),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(W);Q=!1},setAnimationLoop:function(K){$=K},setContext:function(K){J=K}}}function l5(J){let Q=new WeakMap;function $(Y,X){let{array:U,usage:N}=Y,q=U.byteLength,G=J.createBuffer();J.bindBuffer(X,G),J.bufferData(X,U,N),Y.onUploadCallback();let E;if(U instanceof Float32Array)E=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)E=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)E=J.HALF_FLOAT;else E=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)E=J.SHORT;else if(U instanceof Uint32Array)E=J.UNSIGNED_INT;else if(U instanceof Int32Array)E=J.INT;else if(U instanceof Int8Array)E=J.BYTE;else if(U instanceof Uint8Array)E=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)E=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:G,type:E,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:q}}function W(Y,X,U){let{array:N,updateRanges:q}=X;if(J.bindBuffer(U,Y),q.length===0)J.bufferSubData(U,0,N);else{q.sort((E,F)=>E.start-F.start);let G=0;for(let E=1;E<q.length;E++){let F=q[G],B=q[E];if(B.start<=F.start+F.count+1)F.count=Math.max(F.count,B.start+B.count-F.start);else++G,q[G]=B}q.length=G+1;for(let E=0,F=q.length;E<F;E++){let B=q[E];J.bufferSubData(U,B.start*N.BYTES_PER_ELEMENT,N,B.start,B.count)}X.clearUpdateRanges()}X.onUploadCallback()}function Z(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let X=Q.get(Y);if(X)J.deleteBuffer(X.buffer),Q.delete(Y)}function H(Y,X){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let N=Q.get(Y);if(!N||N.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,$(Y,X));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");W(U.buffer,Y,X),U.version=Y.version}}return{get:Z,remove:K,update:H}}var m5=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d5=`#ifdef USE_ALPHAHASH
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
#endif`,u5=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c5=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n5=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s5=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i5=`#ifdef USE_AOMAP
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
#endif`,o5=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a5=`#ifdef USE_BATCHING
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
#endif`,r5=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,t5=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e5=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JG=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,QG=`#ifdef USE_IRIDESCENCE
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
#endif`,$G=`#ifdef USE_BUMPMAP
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
#endif`,WG=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ZG=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KG=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HG=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YG=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,XG=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,UG=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,GG=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,NG=`#define PI 3.141592653589793
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
} // validated`,qG=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,EG=`vec3 transformedNormal = objectNormal;
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
#endif`,FG=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OG=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,RG=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LG=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VG="gl_FragColor = linearToOutputTexel( gl_FragColor );",BG=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kG=`#ifdef USE_ENVMAP
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
#endif`,DG=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,MG=`#ifdef USE_ENVMAP
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
#endif`,CG=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zG=`#ifdef USE_ENVMAP
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
#endif`,PG=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IG=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AG=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wG=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_G=`#ifdef USE_GRADIENTMAP
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
}`,TG=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,SG=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jG=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yG=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,vG=`#ifdef USE_ENVMAP
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
#endif`,fG=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hG=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bG=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xG=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gG=`PhysicalMaterial material;
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
#endif`,pG=`uniform sampler2D dfgLUT;
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
}`,lG=`
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
#endif`,mG=`#if defined( RE_IndirectDiffuse )
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
#endif`,dG=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uG=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,cG=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nG=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sG=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iG=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oG=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aG=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rG=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tG=`#if defined( USE_POINTS_UV )
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
#endif`,eG=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JN=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QN=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$N=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WN=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZN=`#ifdef USE_MORPHTARGETS
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
#endif`,KN=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HN=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,YN=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,XN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GN=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,NN=`#ifdef USE_NORMALMAP
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
#endif`,qN=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,EN=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FN=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ON=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RN=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LN=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,VN=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BN=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kN=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DN=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,AN=`float getShadowMask() {
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
}`,wN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_N=`#ifdef USE_SKINNING
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
#endif`,TN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SN=`#ifdef USE_SKINNING
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
#endif`,jN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fN=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hN=`#ifdef USE_TRANSMISSION
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
#endif`,bN=`#ifdef USE_TRANSMISSION
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
#endif`,xN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lN=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dN=`uniform sampler2D t2D;
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
}`,uN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cN=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iN=`#include <common>
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
}`,oN=`#if DEPTH_PACKING == 3200
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
}`,aN=`#define DISTANCE
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
}`,rN=`#define DISTANCE
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
}`,tN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jq=`uniform float scale;
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
}`,Qq=`uniform vec3 diffuse;
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
}`,$q=`#include <common>
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
}`,Wq=`uniform vec3 diffuse;
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
}`,Zq=`#define LAMBERT
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
}`,Kq=`#define LAMBERT
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
}`,Hq=`#define MATCAP
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
}`,Yq=`#define MATCAP
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
}`,Xq=`#define NORMAL
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
}`,Uq=`#define NORMAL
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
}`,Gq=`#define PHONG
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
}`,Nq=`#define PHONG
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
}`,qq=`#define STANDARD
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
}`,Eq=`#define STANDARD
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
}`,Fq=`#define TOON
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
}`,Oq=`#define TOON
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
}`,Rq=`uniform float size;
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
}`,Lq=`uniform vec3 diffuse;
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
}`,Vq=`#include <common>
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
}`,Bq=`uniform vec3 color;
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
}`,kq=`uniform float rotation;
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
}`,Dq=`uniform vec3 diffuse;
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
}`,t0={alphahash_fragment:m5,alphahash_pars_fragment:d5,alphamap_fragment:u5,alphamap_pars_fragment:c5,alphatest_fragment:n5,alphatest_pars_fragment:s5,aomap_fragment:i5,aomap_pars_fragment:o5,batching_pars_vertex:a5,batching_vertex:r5,begin_vertex:t5,beginnormal_vertex:e5,bsdfs:JG,iridescence_fragment:QG,bumpmap_pars_fragment:$G,clipping_planes_fragment:WG,clipping_planes_pars_fragment:ZG,clipping_planes_pars_vertex:KG,clipping_planes_vertex:HG,color_fragment:YG,color_pars_fragment:XG,color_pars_vertex:UG,color_vertex:GG,common:NG,cube_uv_reflection_fragment:qG,defaultnormal_vertex:EG,displacementmap_pars_vertex:FG,displacementmap_vertex:OG,emissivemap_fragment:RG,emissivemap_pars_fragment:LG,colorspace_fragment:VG,colorspace_pars_fragment:BG,envmap_fragment:kG,envmap_common_pars_fragment:DG,envmap_pars_fragment:MG,envmap_pars_vertex:CG,envmap_physical_pars_fragment:vG,envmap_vertex:zG,fog_vertex:PG,fog_pars_vertex:IG,fog_fragment:AG,fog_pars_fragment:wG,gradientmap_pars_fragment:_G,lightmap_pars_fragment:TG,lights_lambert_fragment:SG,lights_lambert_pars_fragment:jG,lights_pars_begin:yG,lights_toon_fragment:fG,lights_toon_pars_fragment:hG,lights_phong_fragment:bG,lights_phong_pars_fragment:xG,lights_physical_fragment:gG,lights_physical_pars_fragment:pG,lights_fragment_begin:lG,lights_fragment_maps:mG,lights_fragment_end:dG,lightprobes_pars_fragment:uG,logdepthbuf_fragment:cG,logdepthbuf_pars_fragment:nG,logdepthbuf_pars_vertex:sG,logdepthbuf_vertex:iG,map_fragment:oG,map_pars_fragment:aG,map_particle_fragment:rG,map_particle_pars_fragment:tG,metalnessmap_fragment:eG,metalnessmap_pars_fragment:JN,morphinstance_vertex:QN,morphcolor_vertex:$N,morphnormal_vertex:WN,morphtarget_pars_vertex:ZN,morphtarget_vertex:KN,normal_fragment_begin:HN,normal_fragment_maps:YN,normal_pars_fragment:XN,normal_pars_vertex:UN,normal_vertex:GN,normalmap_pars_fragment:NN,clearcoat_normal_fragment_begin:qN,clearcoat_normal_fragment_maps:EN,clearcoat_pars_fragment:FN,iridescence_pars_fragment:ON,opaque_fragment:RN,packing:LN,premultiplied_alpha_fragment:VN,project_vertex:BN,dithering_fragment:kN,dithering_pars_fragment:DN,roughnessmap_fragment:MN,roughnessmap_pars_fragment:CN,shadowmap_pars_fragment:zN,shadowmap_pars_vertex:PN,shadowmap_vertex:IN,shadowmask_pars_fragment:AN,skinbase_vertex:wN,skinning_pars_vertex:_N,skinning_vertex:TN,skinnormal_vertex:SN,specularmap_fragment:jN,specularmap_pars_fragment:yN,tonemapping_fragment:vN,tonemapping_pars_fragment:fN,transmission_fragment:hN,transmission_pars_fragment:bN,uv_pars_fragment:xN,uv_pars_vertex:gN,uv_vertex:pN,worldpos_vertex:lN,background_vert:mN,background_frag:dN,backgroundCube_vert:uN,backgroundCube_frag:cN,cube_vert:nN,cube_frag:sN,depth_vert:iN,depth_frag:oN,distance_vert:aN,distance_frag:rN,equirect_vert:tN,equirect_frag:eN,linedashed_vert:Jq,linedashed_frag:Qq,meshbasic_vert:$q,meshbasic_frag:Wq,meshlambert_vert:Zq,meshlambert_frag:Kq,meshmatcap_vert:Hq,meshmatcap_frag:Yq,meshnormal_vert:Xq,meshnormal_frag:Uq,meshphong_vert:Gq,meshphong_frag:Nq,meshphysical_vert:qq,meshphysical_frag:Eq,meshtoon_vert:Fq,meshtoon_frag:Oq,points_vert:Rq,points_frag:Lq,shadow_vert:Vq,shadow_frag:Bq,sprite_vert:kq,sprite_frag:Dq},z0={common:{diffuse:{value:new l0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new s0},alphaMap:{value:null},alphaMapTransform:{value:new s0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new s0}},envmap:{envMap:{value:null},envMapRotation:{value:new s0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new s0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new s0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new s0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new s0},normalScale:{value:new K0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new s0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new s0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new s0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new s0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new l0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new _},probesMax:{value:new _},probesResolution:{value:new _}},points:{diffuse:{value:new l0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new s0},alphaTest:{value:0},uvTransform:{value:new s0}},sprite:{diffuse:{value:new l0(16777215)},opacity:{value:1},center:{value:new K0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new s0},alphaMap:{value:null},alphaMapTransform:{value:new s0},alphaTest:{value:0}}},J8={basic:{uniforms:$9([z0.common,z0.specularmap,z0.envmap,z0.aomap,z0.lightmap,z0.fog]),vertexShader:t0.meshbasic_vert,fragmentShader:t0.meshbasic_frag},lambert:{uniforms:$9([z0.common,z0.specularmap,z0.envmap,z0.aomap,z0.lightmap,z0.emissivemap,z0.bumpmap,z0.normalmap,z0.displacementmap,z0.fog,z0.lights,{emissive:{value:new l0(0)},envMapIntensity:{value:1}}]),vertexShader:t0.meshlambert_vert,fragmentShader:t0.meshlambert_frag},phong:{uniforms:$9([z0.common,z0.specularmap,z0.envmap,z0.aomap,z0.lightmap,z0.emissivemap,z0.bumpmap,z0.normalmap,z0.displacementmap,z0.fog,z0.lights,{emissive:{value:new l0(0)},specular:{value:new l0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:t0.meshphong_vert,fragmentShader:t0.meshphong_frag},standard:{uniforms:$9([z0.common,z0.envmap,z0.aomap,z0.lightmap,z0.emissivemap,z0.bumpmap,z0.normalmap,z0.displacementmap,z0.roughnessmap,z0.metalnessmap,z0.fog,z0.lights,{emissive:{value:new l0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:t0.meshphysical_vert,fragmentShader:t0.meshphysical_frag},toon:{uniforms:$9([z0.common,z0.aomap,z0.lightmap,z0.emissivemap,z0.bumpmap,z0.normalmap,z0.displacementmap,z0.gradientmap,z0.fog,z0.lights,{emissive:{value:new l0(0)}}]),vertexShader:t0.meshtoon_vert,fragmentShader:t0.meshtoon_frag},matcap:{uniforms:$9([z0.common,z0.bumpmap,z0.normalmap,z0.displacementmap,z0.fog,{matcap:{value:null}}]),vertexShader:t0.meshmatcap_vert,fragmentShader:t0.meshmatcap_frag},points:{uniforms:$9([z0.points,z0.fog]),vertexShader:t0.points_vert,fragmentShader:t0.points_frag},dashed:{uniforms:$9([z0.common,z0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:t0.linedashed_vert,fragmentShader:t0.linedashed_frag},depth:{uniforms:$9([z0.common,z0.displacementmap]),vertexShader:t0.depth_vert,fragmentShader:t0.depth_frag},normal:{uniforms:$9([z0.common,z0.bumpmap,z0.normalmap,z0.displacementmap,{opacity:{value:1}}]),vertexShader:t0.meshnormal_vert,fragmentShader:t0.meshnormal_frag},sprite:{uniforms:$9([z0.sprite,z0.fog]),vertexShader:t0.sprite_vert,fragmentShader:t0.sprite_frag},background:{uniforms:{uvTransform:{value:new s0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:t0.background_vert,fragmentShader:t0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new s0}},vertexShader:t0.backgroundCube_vert,fragmentShader:t0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:t0.cube_vert,fragmentShader:t0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:t0.equirect_vert,fragmentShader:t0.equirect_frag},distance:{uniforms:$9([z0.common,z0.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:t0.distance_vert,fragmentShader:t0.distance_frag},shadow:{uniforms:$9([z0.lights,z0.fog,{color:{value:new l0(0)},opacity:{value:1}}]),vertexShader:t0.shadow_vert,fragmentShader:t0.shadow_frag}};J8.physical={uniforms:$9([J8.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new s0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new s0},clearcoatNormalScale:{value:new K0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new s0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new s0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new s0},sheen:{value:0},sheenColor:{value:new l0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new s0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new s0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new s0},transmissionSamplerSize:{value:new K0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new s0},attenuationDistance:{value:0},attenuationColor:{value:new l0(0)},specularColor:{value:new l0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new s0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new s0},anisotropyVector:{value:new K0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new s0}}]),vertexShader:t0.meshphysical_vert,fragmentShader:t0.meshphysical_frag};var g$={r:0,b:0,g:0},Mq=new d0,ZX=new s0;ZX.set(-1,0,0,0,1,0,0,0,1);function Cq(J,Q,$,W,Z,K){let H=new l0(0),Y=Z===!0?0:1,X,U,N=null,q=0,G=null;function E(P){let k=P.isScene===!0?P.background:null;if(k&&k.isTexture){let L=P.backgroundBlurriness>0;k=Q.get(k,L)}return k}function F(P){let k=!1,L=E(P);if(L===null)R(H,Y);else if(L&&L.isColor)R(L,1),k=!0;let C=J.xr.getEnvironmentBlendMode();if(C==="additive")$.buffers.color.setClear(0,0,0,1,K);else if(C==="alpha-blend")$.buffers.color.setClear(0,0,0,0,K);if(J.autoClear||k)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function B(P,k){let L=E(k);if(L&&(L.isCubeTexture||L.mapping===m6)){if(U===void 0)U=new x0(new aJ(1,1,1),new _9({name:"BackgroundCubeMaterial",uniforms:E7(J8.backgroundCube.uniforms),vertexShader:J8.backgroundCube.vertexShader,fragmentShader:J8.backgroundCube.fragmentShader,side:Q9,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(C,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(U);if(U.material.uniforms.envMap.value=L,U.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(Mq.makeRotationFromEuler(k.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(ZX);if(U.material.toneMapped=JJ.getTransfer(L.colorSpace)!==zJ,N!==L||q!==L.version||G!==J.toneMapping)U.material.needsUpdate=!0,N=L,q=L.version,G=J.toneMapping;U.layers.enableAll(),P.unshift(U,U.geometry,U.material,0,0,null)}else if(L&&L.isTexture){if(X===void 0)X=new x0(new w9(2,2),new _9({name:"BackgroundMaterial",uniforms:E7(J8.background.uniforms),vertexShader:J8.background.vertexShader,fragmentShader:J8.background.fragmentShader,side:h8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),X.geometry.deleteAttribute("normal"),Object.defineProperty(X.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(X);if(X.material.uniforms.t2D.value=L,X.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,X.material.toneMapped=JJ.getTransfer(L.colorSpace)!==zJ,L.matrixAutoUpdate===!0)L.updateMatrix();if(X.material.uniforms.uvTransform.value.copy(L.matrix),N!==L||q!==L.version||G!==J.toneMapping)X.material.needsUpdate=!0,N=L,q=L.version,G=J.toneMapping;X.layers.enableAll(),P.unshift(X,X.geometry,X.material,0,0,null)}}function R(P,k){P.getRGB(g$,gZ(J)),$.buffers.color.setClear(g$.r,g$.g,g$.b,k,K)}function O(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(X!==void 0)X.geometry.dispose(),X.material.dispose(),X=void 0}return{getClearColor:function(){return H},setClearColor:function(P,k=1){H.set(P),Y=k,R(H,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(P){Y=P,R(H,Y)},render:F,addToRenderList:B,dispose:O}}function zq(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),W={},Z=G(null),K=Z,H=!1;function Y(f,x,o,y,u){let e=!1,d=q(f,y,o,x);if(K!==d)K=d,U(K.object);if(e=E(f,y,o,u),e)F(f,y,o,u);if(u!==null)Q.update(u,J.ELEMENT_ARRAY_BUFFER);if(e||H){if(H=!1,L(f,x,o,y),u!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(u).buffer)}}function X(){return J.createVertexArray()}function U(f){return J.bindVertexArray(f)}function N(f){return J.deleteVertexArray(f)}function q(f,x,o,y){let u=y.wireframe===!0,e=W[x.id];if(e===void 0)e={},W[x.id]=e;let d=f.isInstancedMesh===!0?f.id:0,U0=e[d];if(U0===void 0)U0={},e[d]=U0;let s=U0[o.id];if(s===void 0)s={},U0[o.id]=s;let J0=s[u];if(J0===void 0)J0=G(X()),s[u]=J0;return J0}function G(f){let x=[],o=[],y=[];for(let u=0;u<$;u++)x[u]=0,o[u]=0,y[u]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:o,attributeDivisors:y,object:f,attributes:{},index:null}}function E(f,x,o,y){let u=K.attributes,e=x.attributes,d=0,U0=o.getAttributes();for(let s in U0)if(U0[s].location>=0){let Z0=u[s],m0=e[s];if(m0===void 0){if(s==="instanceMatrix"&&f.instanceMatrix)m0=f.instanceMatrix;if(s==="instanceColor"&&f.instanceColor)m0=f.instanceColor}if(Z0===void 0)return!0;if(Z0.attribute!==m0)return!0;if(m0&&Z0.data!==m0.data)return!0;d++}if(K.attributesNum!==d)return!0;if(K.index!==y)return!0;return!1}function F(f,x,o,y){let u={},e=x.attributes,d=0,U0=o.getAttributes();for(let s in U0)if(U0[s].location>=0){let Z0=e[s];if(Z0===void 0){if(s==="instanceMatrix"&&f.instanceMatrix)Z0=f.instanceMatrix;if(s==="instanceColor"&&f.instanceColor)Z0=f.instanceColor}let m0={};if(m0.attribute=Z0,Z0&&Z0.data)m0.data=Z0.data;u[s]=m0,d++}K.attributes=u,K.attributesNum=d,K.index=y}function B(){let f=K.newAttributes;for(let x=0,o=f.length;x<o;x++)f[x]=0}function R(f){O(f,0)}function O(f,x){let{newAttributes:o,enabledAttributes:y,attributeDivisors:u}=K;if(o[f]=1,y[f]===0)J.enableVertexAttribArray(f),y[f]=1;if(u[f]!==x)J.vertexAttribDivisor(f,x),u[f]=x}function P(){let{newAttributes:f,enabledAttributes:x}=K;for(let o=0,y=x.length;o<y;o++)if(x[o]!==f[o])J.disableVertexAttribArray(o),x[o]=0}function k(f,x,o,y,u,e,d){if(d===!0)J.vertexAttribIPointer(f,x,o,u,e);else J.vertexAttribPointer(f,x,o,y,u,e)}function L(f,x,o,y){B();let u=y.attributes,e=o.getAttributes(),d=x.defaultAttributeValues;for(let U0 in e){let s=e[U0];if(s.location>=0){let J0=u[U0];if(J0===void 0){if(U0==="instanceMatrix"&&f.instanceMatrix)J0=f.instanceMatrix;if(U0==="instanceColor"&&f.instanceColor)J0=f.instanceColor}if(J0!==void 0){let{normalized:Z0,itemSize:m0}=J0,j0=Q.get(J0);if(j0===void 0)continue;let{buffer:BJ,type:u0,bytesPerElement:n}=j0,Y0=u0===J.INT||u0===J.UNSIGNED_INT||J0.gpuType===pW;if(J0.isInterleavedBufferAttribute){let G0=J0.data,g0=G0.stride,f0=J0.offset;if(G0.isInstancedInterleavedBuffer){for(let y0=0;y0<s.locationSize;y0++)O(s.location+y0,G0.meshPerAttribute);if(f.isInstancedMesh!==!0&&y._maxInstanceCount===void 0)y._maxInstanceCount=G0.meshPerAttribute*G0.count}else for(let y0=0;y0<s.locationSize;y0++)R(s.location+y0);J.bindBuffer(J.ARRAY_BUFFER,BJ);for(let y0=0;y0<s.locationSize;y0++)k(s.location+y0,m0/s.locationSize,u0,Z0,g0*n,(f0+m0/s.locationSize*y0)*n,Y0)}else{if(J0.isInstancedBufferAttribute){for(let G0=0;G0<s.locationSize;G0++)O(s.location+G0,J0.meshPerAttribute);if(f.isInstancedMesh!==!0&&y._maxInstanceCount===void 0)y._maxInstanceCount=J0.meshPerAttribute*J0.count}else for(let G0=0;G0<s.locationSize;G0++)R(s.location+G0);J.bindBuffer(J.ARRAY_BUFFER,BJ);for(let G0=0;G0<s.locationSize;G0++)k(s.location+G0,m0/s.locationSize,u0,Z0,m0*n,m0/s.locationSize*G0*n,Y0)}}else if(d!==void 0){let Z0=d[U0];if(Z0!==void 0)switch(Z0.length){case 2:J.vertexAttrib2fv(s.location,Z0);break;case 3:J.vertexAttrib3fv(s.location,Z0);break;case 4:J.vertexAttrib4fv(s.location,Z0);break;default:J.vertexAttrib1fv(s.location,Z0)}}}}P()}function C(){I();for(let f in W){let x=W[f];for(let o in x){let y=x[o];for(let u in y){let e=y[u];for(let d in e)N(e[d].object),delete e[d];delete y[u]}}delete W[f]}}function A(f){if(W[f.id]===void 0)return;let x=W[f.id];for(let o in x){let y=x[o];for(let u in y){let e=y[u];for(let d in e)N(e[d].object),delete e[d];delete y[u]}}delete W[f.id]}function w(f){for(let x in W){let o=W[x];for(let y in o){let u=o[y];if(u[f.id]===void 0)continue;let e=u[f.id];for(let d in e)N(e[d].object),delete e[d];delete u[f.id]}}}function D(f){for(let x in W){let o=W[x],y=f.isInstancedMesh===!0?f.id:0,u=o[y];if(u===void 0)continue;for(let e in u){let d=u[e];for(let U0 in d)N(d[U0].object),delete d[U0];delete u[e]}if(delete o[y],Object.keys(o).length===0)delete W[x]}}function I(){if(m(),H=!0,K===Z)return;K=Z,U(K.object)}function m(){Z.geometry=null,Z.program=null,Z.wireframe=!1}return{setup:Y,reset:I,resetDefaultState:m,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfObject:D,releaseStatesOfProgram:w,initAttributes:B,enableAttribute:R,disableUnusedAttributes:P}}function Pq(J,Q,$){let W;function Z(X){W=X}function K(X,U){J.drawArrays(W,X,U),$.update(U,W,1)}function H(X,U,N){if(N===0)return;J.drawArraysInstanced(W,X,U,N),$.update(U,W,N)}function Y(X,U,N){if(N===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(W,X,0,U,0,N);let G=0;for(let E=0;E<N;E++)G+=U[E];$.update(G,W,1)}this.setMode=Z,this.render=K,this.renderInstances=H,this.renderMultiDraw=Y}function Iq(J,Q,$,W){let Z;function K(){if(Z!==void 0)return Z;if(Q.has("EXT_texture_filter_anisotropic")===!0){let w=Q.get("EXT_texture_filter_anisotropic");Z=J.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else Z=0;return Z}function H(w){if(w!==r9&&W.convert(w)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(w){let D=w===a9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(w!==p9&&w!==O8&&!D&&W.convert(w)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function X(w){if(w==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";w="mediump"}if(w==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",N=X(U);if(N!==U)S0("WebGLRenderer:",U,"not supported, using",N,"instead."),U=N;let q=$.logarithmicDepthBuffer===!0,G=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&G===!1)S0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let E=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),F=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),B=J.getParameter(J.MAX_TEXTURE_SIZE),R=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),O=J.getParameter(J.MAX_VERTEX_ATTRIBS),P=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),k=J.getParameter(J.MAX_VARYING_VECTORS),L=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),C=J.getParameter(J.MAX_SAMPLES),A=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:K,getMaxPrecision:X,textureFormatReadable:H,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:q,reversedDepthBuffer:G,maxTextures:E,maxVertexTextures:F,maxTextureSize:B,maxCubemapSize:R,maxAttributes:O,maxVertexUniforms:P,maxVaryings:k,maxFragmentUniforms:L,maxSamples:C,samples:A}}function Aq(J){let Q=this,$=null,W=0,Z=!1,K=!1,H=new C9,Y=new s0,X={value:null,needsUpdate:!1};this.uniform=X,this.numPlanes=0,this.numIntersection=0,this.init=function(q,G){let E=q.length!==0||G||W!==0||Z;return Z=G,W=q.length,E},this.beginShadows=function(){K=!0,N(null)},this.endShadows=function(){K=!1},this.setGlobalState=function(q,G){$=N(q,G,0)},this.setState=function(q,G,E){let{clippingPlanes:F,clipIntersection:B,clipShadows:R}=q,O=J.get(q);if(!Z||F===null||F.length===0||K&&!R)if(K)N(null);else U();else{let P=K?0:W,k=P*4,L=O.clippingState||null;X.value=L,L=N(F,G,k,E);for(let C=0;C!==k;++C)L[C]=$[C];O.clippingState=L,this.numIntersection=B?this.numPlanes:0,this.numPlanes+=P}};function U(){if(X.value!==$)X.value=$,X.needsUpdate=W>0;Q.numPlanes=W,Q.numIntersection=0}function N(q,G,E,F){let B=q!==null?q.length:0,R=null;if(B!==0){if(R=X.value,F!==!0||R===null){let O=E+B*4,P=G.matrixWorldInverse;if(Y.getNormalMatrix(P),R===null||R.length<O)R=new Float32Array(O);for(let k=0,L=E;k!==B;++k,L+=4)H.copy(q[k]).applyMatrix4(P,Y),H.normal.toArray(R,L),R[L+3]=H.constant}X.value=R,X.needsUpdate=!0}return Q.numPlanes=B,Q.numIntersection=0,R}}var N6=4,wq=6,_q=20,Tq=256,qQ=new O7,hY=new l0,WK=null,ZK=0,KK=0,HK=!1,Sq=new _,R7=new _;class RQ{constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,W=100,Z={}){let{size:K=256,position:H=Sq}=Z;WK=this._renderer.getRenderTarget(),ZK=this._renderer.getActiveCubeFace(),KK=this._renderer.getActiveMipmapLevel(),HK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(K);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,W,Y,H),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=gY(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=xY(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(WK,ZK,KK),this._renderer.xr.enabled=HK,J.scissorTest=!1,G6(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===t7||J.mapping===K7)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);WK=this._renderer.getRenderTarget(),ZK=this._renderer.getActiveCubeFace(),KK=this._renderer.getActiveMipmapLevel(),HK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:iJ,minFilter:iJ,generateMipmaps:!1,type:a9,format:r9,colorSpace:F9,depthBuffer:!1},W=bY(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=bY(J,Q,$);let{_lodMax:Z}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=jq(Z)),this._blurMaterial=vq(Z,J,Q),this._ggxMaterial=yq(Z,J,Q)}return W}_compileMaterial(J){let Q=new x0(new wJ,J);this._renderer.compile(Q,qQ)}_sceneToCubeUV(J,Q,$,W,Z){let Y=new mJ(90,1,Q,$),X=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],N=this._renderer,q=N.autoClear,G=N.toneMapping;if(N.getClearColor(hY),N.toneMapping=x9,N.autoClear=!1,N.state.buffers.depth.getReversed())N.setRenderTarget(W),N.clearDepth(),N.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new x0(new aJ,new oJ({name:"PMREM.Background",side:Q9,depthWrite:!1,depthTest:!1}));let F=this._backgroundBox,B=F.material,R=!1,O=J.background;if(O){if(O.isColor)B.color.copy(O),J.background=null,R=!0}else B.color.copy(hY),R=!0;for(let P=0;P<6;P++){let k=P%3;if(k===0)Y.up.set(0,X[P],0),Y.position.set(Z.x,Z.y,Z.z),Y.lookAt(Z.x+U[P],Z.y,Z.z);else if(k===1)Y.up.set(0,0,X[P]),Y.position.set(Z.x,Z.y,Z.z),Y.lookAt(Z.x,Z.y+U[P],Z.z);else Y.up.set(0,X[P],0),Y.position.set(Z.x,Z.y,Z.z),Y.lookAt(Z.x,Z.y,Z.z+U[P]);let L=this._cubeSize;if(G6(W,k*L,P>2?L:0,L,L),N.setRenderTarget(W),R)N.render(F,Y);N.render(J,Y)}N.toneMapping=G,N.autoClear=q,J.background=O}_textureToCubeUV(J,Q){let $=this._renderer,W=J.mapping===t7||J.mapping===K7;if(W){if(this._cubemapMaterial===null)this._cubemapMaterial=gY();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=xY();let Z=W?this._cubemapMaterial:this._equirectMaterial,K=this._lodMeshes[0];K.material=Z;let H=Z.uniforms;H.envMap.value=J;let Y=this._cubeSize;G6(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(K,qQ)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let W=this._lodMeshes.length;for(let Z=1;Z<W;Z++)this._applyGGXFilter(J,Z-1,Z);Q.autoClear=$}_applyGGXFilter(J,Q,$){let W=this._renderer,Z=this._pingPongRenderTarget,K=this._ggxMaterial,H=this._lodMeshes[$];H.material=K;let Y=K.uniforms,X=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),N=Math.sqrt(X*X-U*U),q=X*1.25,G=N*q,{_lodMax:E}=this,F=this._sizeLods[$],B=3*F*($>E-N6?$-E+N6:0),R=4*(this._cubeSize-F);Y.envMap.value=J.texture,Y.roughness.value=G,Y.mipInt.value=E-Q,G6(Z,B,R,3*F,2*F),W.setRenderTarget(Z),W.render(H,qQ),Y.envMap.value=Z.texture,Y.roughness.value=0,Y.mipInt.value=E-$,G6(J,B,R,3*F,2*F),W.setRenderTarget(J),W.render(H,qQ)}_blur(J,Q,$,W){let Z=this._pingPongRenderTarget,K=Math.min(W,Math.PI)/Math.SQRT2;this._blurPass(J,Z,Q,$,K),this._blurPass(Z,J,$,$,K)}_blurPass(J,Q,$,W,Z){let K=this._renderer,H=this._blurMaterial,Y=this._lodMeshes[W];Y.material=H;let X=H.uniforms;X.envMap.value=J.texture,X.sigma.value=Z,X.mipInt.value=this._lodMax-$;let U=this._sizeLods[W],N=3*U*(W>this._lodMax-N6?W-this._lodMax+N6:0),q=4*(this._cubeSize-U);G6(Q,N,q,3*U,2*U),K.setRenderTarget(Q),K.render(Y,qQ)}}function jq(J){let Q=[],$=[],W=J,Z=J-N6+1+wq;for(let K=0;K<Z;K++){let H=Math.pow(2,W);Q.push(H);let Y=1/(H-2),X=-Y,U=1+Y,N=[X,X,U,X,U,U,X,X,U,U,X,U],q=6,G=6,E=3,F=new Float32Array(E*G*q),B=new Float32Array(E*G*q);for(let O=0;O<q;O++){let P=O%3*2/3-1,k=O>2?0:-1,L=[P,k,0,P+0.6666666666666666,k,0,P+0.6666666666666666,k+1,0,P,k,0,P+0.6666666666666666,k+1,0,P,k+1,0];F.set(L,E*G*O);for(let C=0;C<G;C++){let A=N[C*2]*2-1,w=N[C*2+1]*2-1;if(O===0)R7.set(1,w,A);else if(O===1)R7.set(-A,1,-w);else if(O===2)R7.set(-A,w,1);else if(O===3)R7.set(-1,w,-A);else if(O===4)R7.set(-A,-1,w);else R7.set(A,w,-1);R7.toArray(B,(O*G+C)*E)}}let R=new wJ;if(R.setAttribute("position",new dJ(F,E)),R.setAttribute("outputDirection",new dJ(B,E)),$.push(new x0(R,null)),W>N6)W--}return{lodMeshes:$,sizeLods:Q}}function bY(J,Q,$){let W=new O9(J,Q,$);return W.texture.mapping=m6,W.texture.name="PMREM.cubeUv",W.scissorTest=!0,W}function G6(J,Q,$,W,Z){J.viewport.set(Q,$,W,Z),J.scissor.set(Q,$,W,Z)}function yq(J,Q,$){return new _9({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Tq,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:l$(),fragmentShader:`

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
		`,blending:i9,depthTest:!1,depthWrite:!1})}function vq(J,Q,$){return new _9({name:"SphericalGaussianBlur",defines:{SAMPLES:_q,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:l$(),fragmentShader:`

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
		`,blending:i9,depthTest:!1,depthWrite:!1})}function xY(){return new _9({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:l$(),fragmentShader:`

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
		`,blending:i9,depthTest:!1,depthWrite:!1})}function gY(){return new _9({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:l$(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:i9,depthTest:!1,depthWrite:!1})}function l$(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class NK extends O9{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},W=[$,$,$,$,$,$];this.texture=new C$(W),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},W=new aJ(5,5,5),Z=new _9({name:"CubemapFromEquirect",uniforms:E7($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:Q9,blending:i9});Z.uniforms.tEquirect.value=Q;let K=new x0(W,Z),H=Q.minFilter;if(Q.minFilter===o9)Q.minFilter=iJ;return new oZ(1,10,this).update(J,K),Q.minFilter=H,K.geometry.dispose(),K.material.dispose(),this}clear(J,Q=!0,$=!0,W=!0){let Z=J.getRenderTarget();for(let K=0;K<6;K++)J.setRenderTarget(this,K),J.clear(Q,$,W);J.setRenderTarget(Z)}}function fq(J){let Q=new WeakMap,$=new WeakMap,W=null;function Z(G,E=!1){if(G===null||G===void 0)return null;if(E)return H(G);return K(G)}function K(G){if(G&&G.isTexture){let E=G.mapping;if(E===$$||E===W$)if(Q.has(G)){let F=Q.get(G).texture;return Y(F,G.mapping)}else{let F=G.image;if(F&&F.height>0){let B=new NK(F.height);return B.fromEquirectangularTexture(J,G),Q.set(G,B),G.addEventListener("dispose",U),Y(B.texture,G.mapping)}else return null}}return G}function H(G){if(G&&G.isTexture){let E=G.mapping,F=E===$$||E===W$,B=E===t7||E===K7;if(F||B){let R=$.get(G),O=R!==void 0?R.texture.pmremVersion:0;if(G.isRenderTargetTexture&&G.pmremVersion!==O){if(W===null)W=new RQ(J);return R=F?W.fromEquirectangular(G,R):W.fromCubemap(G,R),R.texture.pmremVersion=G.pmremVersion,$.set(G,R),R.texture}else if(R!==void 0)return R.texture;else{let P=G.image;if(F&&P&&P.height>0||B&&P&&X(P)){if(W===null)W=new RQ(J);return R=F?W.fromEquirectangular(G):W.fromCubemap(G),R.texture.pmremVersion=G.pmremVersion,$.set(G,R),G.addEventListener("dispose",N),R.texture}else return null}}}return G}function Y(G,E){if(E===$$)G.mapping=t7;else if(E===W$)G.mapping=K7;return G}function X(G){let E=0,F=6;for(let B=0;B<F;B++)if(G[B]!==void 0)E++;return E===F}function U(G){let E=G.target;E.removeEventListener("dispose",U);let F=Q.get(E);if(F!==void 0)Q.delete(E),F.dispose()}function N(G){let E=G.target;E.removeEventListener("dispose",N);let F=$.get(E);if(F!==void 0)$.delete(E),F.dispose()}function q(){if(Q=new WeakMap,$=new WeakMap,W!==null)W.dispose(),W=null}return{get:Z,dispose:q}}function hq(J){let Q={};function $(W){if(Q[W]!==void 0)return Q[W];let Z=J.getExtension(W);return Q[W]=Z,Z}return{has:function(W){return $(W)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(W){let Z=$(W);if(Z===null)$7("WebGLRenderer: "+W+" extension not supported.");return Z}}}function bq(J,Q,$,W){let Z={},K=new WeakMap;function H(q){let G=q.target;if(G.index!==null)Q.remove(G.index);for(let F in G.attributes)Q.remove(G.attributes[F]);G.removeEventListener("dispose",H),delete Z[G.id];let E=K.get(G);if(E)Q.remove(E),K.delete(G);if(W.releaseStatesOfGeometry(G),G.isInstancedBufferGeometry===!0)delete G._maxInstanceCount;$.memory.geometries--}function Y(q,G){if(Z[G.id]===!0)return G;return G.addEventListener("dispose",H),Z[G.id]=!0,$.memory.geometries++,G}function X(q){let G=q.attributes;for(let E in G)Q.update(G[E],J.ARRAY_BUFFER)}function U(q){let G=[],E=q.index,F=q.attributes.position,B=0;if(F===void 0)return;if(E!==null){let P=E.array;B=E.version;for(let k=0,L=P.length;k<L;k+=3){let C=P[k+0],A=P[k+1],w=P[k+2];G.push(C,A,A,w,w,C)}}else{let P=F.array;B=F.version;for(let k=0,L=P.length/3-1;k<L;k+=3){let C=k+0,A=k+1,w=k+2;G.push(C,A,A,w,w,C)}}let R=new(F.count>=65535?V$:L$)(G,1);R.version=B;let O=K.get(q);if(O)Q.remove(O);K.set(q,R)}function N(q){let G=K.get(q);if(G){let E=q.index;if(E!==null){if(G.version<E.version)U(q)}}else U(q);return K.get(q)}return{get:Y,update:X,getWireframeAttribute:N}}function xq(J,Q,$){let W;function Z(q){W=q}let K,H;function Y(q){K=q.type,H=q.bytesPerElement}function X(q,G){J.drawElements(W,G,K,q*H),$.update(G,W,1)}function U(q,G,E){if(E===0)return;J.drawElementsInstanced(W,G,K,q*H,E),$.update(G,W,E)}function N(q,G,E){if(E===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(W,G,0,K,q,0,E);let B=0;for(let R=0;R<E;R++)B+=G[R];$.update(B,W,1)}this.setMode=Z,this.setIndex=Y,this.render=X,this.renderInstances=U,this.renderMultiDraw=N}function gq(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function W(K,H,Y){switch($.calls++,H){case J.TRIANGLES:$.triangles+=Y*(K/3);break;case J.LINES:$.lines+=Y*(K/2);break;case J.LINE_STRIP:$.lines+=Y*(K-1);break;case J.LINE_LOOP:$.lines+=Y*K;break;case J.POINTS:$.points+=Y*K;break;default:c0("WebGLInfo: Unknown draw mode:",H);break}}function Z(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:Z,update:W}}function pq(J,Q,$){let W=new WeakMap,Z=new LJ;function K(H,Y,X){let U=H.morphTargetInfluences,N=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,q=N!==void 0?N.length:0,G=W.get(Y);if(G===void 0||G.count!==q){let I=function(){w.dispose(),W.delete(Y),Y.removeEventListener("dispose",I)};if(G!==void 0)G.texture.dispose();let E=Y.morphAttributes.position!==void 0,F=Y.morphAttributes.normal!==void 0,B=Y.morphAttributes.color!==void 0,R=Y.morphAttributes.position||[],O=Y.morphAttributes.normal||[],P=Y.morphAttributes.color||[],k=0;if(E===!0)k=1;if(F===!0)k=2;if(B===!0)k=3;let L=Y.attributes.position.count*k,C=1;if(L>Q.maxTextureSize)C=Math.ceil(L/Q.maxTextureSize),L=Q.maxTextureSize;let A=new Float32Array(L*C*4*q),w=new O$(A,L,C,q);w.type=O8,w.needsUpdate=!0;let D=k*4;for(let m=0;m<q;m++){let f=R[m],x=O[m],o=P[m],y=L*C*4*m;for(let u=0;u<f.count;u++){let e=u*D;if(E===!0)Z.fromBufferAttribute(f,u),A[y+e+0]=Z.x,A[y+e+1]=Z.y,A[y+e+2]=Z.z,A[y+e+3]=0;if(F===!0)Z.fromBufferAttribute(x,u),A[y+e+4]=Z.x,A[y+e+5]=Z.y,A[y+e+6]=Z.z,A[y+e+7]=0;if(B===!0)Z.fromBufferAttribute(o,u),A[y+e+8]=Z.x,A[y+e+9]=Z.y,A[y+e+10]=Z.z,A[y+e+11]=o.itemSize===4?Z.w:1}}G={count:q,texture:w,size:new K0(L,C)},W.set(Y,G),Y.addEventListener("dispose",I)}if(H.isInstancedMesh===!0&&H.morphTexture!==null)X.getUniforms().setValue(J,"morphTexture",H.morphTexture,$);else{let E=0;for(let B=0;B<U.length;B++)E+=U[B];let F=Y.morphTargetsRelative?1:1-E;X.getUniforms().setValue(J,"morphTargetBaseInfluence",F),X.getUniforms().setValue(J,"morphTargetInfluences",U)}X.getUniforms().setValue(J,"morphTargetsTexture",G.texture,$),X.getUniforms().setValue(J,"morphTargetsTextureSize",G.size)}return{update:K}}function lq(J,Q,$,W,Z){let K=new WeakMap;function H(U){let N=Z.render.frame,q=U.geometry,G=Q.get(U,q);if(K.get(G)!==N)Q.update(G),K.set(G,N);if(U.isInstancedMesh){if(U.hasEventListener("dispose",X)===!1)U.addEventListener("dispose",X);if(K.get(U)!==N){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);K.set(U,N)}}if(U.isSkinnedMesh){let E=U.skeleton;if(K.get(E)!==N)E.update(),K.set(E,N)}return G}function Y(){K=new WeakMap}function X(U){let N=U.target;if(N.removeEventListener("dispose",X),W.releaseStatesOfObject(N),$.remove(N.instanceMatrix),N.instanceColor!==null)$.remove(N.instanceColor)}return{update:H,dispose:Y}}var mq={[vW]:"LINEAR_TONE_MAPPING",[fW]:"REINHARD_TONE_MAPPING",[hW]:"CINEON_TONE_MAPPING",[l6]:"ACES_FILMIC_TONE_MAPPING",[xW]:"AGX_TONE_MAPPING",[gW]:"NEUTRAL_TONE_MAPPING",[bW]:"CUSTOM_TONE_MAPPING"};function dq(J,Q,$,W,Z,K){let H=new O9(Q,$,{type:J,depthBuffer:Z,stencilBuffer:K,samples:W?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),Y=null,X=null,U=new wJ;U.setAttribute("position",new YJ([-1,3,0,-1,-1,0,3,-1,0],3)),U.setAttribute("uv",new YJ([0,2,0,0,2,0],2));let N=new pZ({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),q=new x0(U,N),G=new O7(-1,1,1,-1,0,1),E=null,F=null,B=!1,R,O=null,P=[],k=!1;this.setSize=function(L,C){if(H.setSize(L,C),Y!==null)Y.setSize(L,C);if(X!==null)X.setSize(L,C);for(let A=0;A<P.length;A++){let w=P[A];if(w.setSize)w.setSize(L,C)}},this.setEffects=function(L){P=L,k=P.length>0&&P[0].isRenderPass===!0;let{width:C,height:A}=H;if(P.length>0&&Y===null)Y=new O9(C,A,{type:a9,depthBuffer:!1,stencilBuffer:!1}),X=new O9(C,A,{type:a9,depthBuffer:!1,stencilBuffer:!1});for(let w=0;w<P.length;w++){let D=P[w];if(D.setSize)D.setSize(C,A)}},this.begin=function(L,C){if(B)return!1;if(L.toneMapping===x9&&P.length===0)return!1;if(O=C,C!==null){let{width:A,height:w}=C;if(H.width!==A||H.height!==w)this.setSize(A,w)}if(k===!1)L.setRenderTarget(H);return R=L.toneMapping,L.toneMapping=x9,!0},this.hasRenderPass=function(){return k},this.end=function(L,C){L.toneMapping=R,B=!0;let A=H,w=Y;for(let D=0;D<P.length;D++){let I=P[D];if(I.enabled===!1)continue;if(I.render(L,w,A,C),I.needsSwap!==!1)A=w,w=w===Y?X:Y}if(E!==L.outputColorSpace||F!==L.toneMapping){if(E=L.outputColorSpace,F=L.toneMapping,N.defines={},JJ.getTransfer(E)===zJ)N.defines.SRGB_TRANSFER="";let D=mq[F];if(D)N.defines[D]="";N.needsUpdate=!0}N.uniforms.tDiffuse.value=A.texture,L.setRenderTarget(O),L.render(q,G),O=null,B=!1},this.isCompositing=function(){return B},this.dispose=function(){if(H.dispose(),Y!==null)Y.dispose();if(X!==null)X.dispose();U.dispose(),N.dispose()}}var KX=new hJ,UK=new N7(1,1),HX=new O$,YX=new SZ,XX=new C$,pY=[],lY=[],mY=new Float32Array(16),dY=new Float32Array(9),uY=new Float32Array(4);function q6(J,Q,$){let W=J[0];if(W<=0||W>0)return J;let Z=Q*$,K=pY[Z];if(K===void 0)K=new Float32Array(Z),pY[Z]=K;if(Q!==0){W.toArray(K,0);for(let H=1,Y=0;H!==Q;++H)Y+=$,J[H].toArray(K,Y)}return K}function uJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,W=J.length;$<W;$++)if(J[$]!==Q[$])return!1;return!0}function cJ(J,Q){for(let $=0,W=Q.length;$<W;$++)J[$]=Q[$]}function m$(J,Q){let $=lY[Q];if($===void 0)$=new Int32Array(Q),lY[Q]=$;for(let W=0;W!==Q;++W)$[W]=J.allocateTextureUnit();return $}function uq(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function cq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(uJ($,Q))return;J.uniform2fv(this.addr,Q),cJ($,Q)}}function nq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(uJ($,Q))return;J.uniform3fv(this.addr,Q),cJ($,Q)}}function sq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(uJ($,Q))return;J.uniform4fv(this.addr,Q),cJ($,Q)}}function iq(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(uJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),cJ($,Q)}else{if(uJ($,W))return;uY.set(W),J.uniformMatrix2fv(this.addr,!1,uY),cJ($,W)}}function oq(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(uJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),cJ($,Q)}else{if(uJ($,W))return;dY.set(W),J.uniformMatrix3fv(this.addr,!1,dY),cJ($,W)}}function aq(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(uJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),cJ($,Q)}else{if(uJ($,W))return;mY.set(W),J.uniformMatrix4fv(this.addr,!1,mY),cJ($,W)}}function rq(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function tq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(uJ($,Q))return;J.uniform2iv(this.addr,Q),cJ($,Q)}}function eq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(uJ($,Q))return;J.uniform3iv(this.addr,Q),cJ($,Q)}}function JE(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(uJ($,Q))return;J.uniform4iv(this.addr,Q),cJ($,Q)}}function QE(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function $E(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(uJ($,Q))return;J.uniform2uiv(this.addr,Q),cJ($,Q)}}function WE(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(uJ($,Q))return;J.uniform3uiv(this.addr,Q),cJ($,Q)}}function ZE(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(uJ($,Q))return;J.uniform4uiv(this.addr,Q),cJ($,Q)}}function KE(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;let K;if(this.type===J.SAMPLER_2D_SHADOW)UK.compareFunction=$.isReversedDepthBuffer()?F$:E$,K=UK;else K=KX;$.setTexture2D(Q||K,Z)}function HE(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTexture3D(Q||YX,Z)}function YE(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTextureCube(Q||XX,Z)}function XE(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTexture2DArray(Q||HX,Z)}function UE(J){switch(J){case 5126:return uq;case 35664:return cq;case 35665:return nq;case 35666:return sq;case 35674:return iq;case 35675:return oq;case 35676:return aq;case 5124:case 35670:return rq;case 35667:case 35671:return tq;case 35668:case 35672:return eq;case 35669:case 35673:return JE;case 5125:return QE;case 36294:return $E;case 36295:return WE;case 36296:return ZE;case 35678:case 36198:case 36298:case 36306:case 35682:return KE;case 35679:case 36299:case 36307:return HE;case 35680:case 36300:case 36308:case 36293:return YE;case 36289:case 36303:case 36311:case 36292:return XE}}function GE(J,Q){J.uniform1fv(this.addr,Q)}function NE(J,Q){let $=q6(Q,this.size,2);J.uniform2fv(this.addr,$)}function qE(J,Q){let $=q6(Q,this.size,3);J.uniform3fv(this.addr,$)}function EE(J,Q){let $=q6(Q,this.size,4);J.uniform4fv(this.addr,$)}function FE(J,Q){let $=q6(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function OE(J,Q){let $=q6(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function RE(J,Q){let $=q6(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function LE(J,Q){J.uniform1iv(this.addr,Q)}function VE(J,Q){J.uniform2iv(this.addr,Q)}function BE(J,Q){J.uniform3iv(this.addr,Q)}function kE(J,Q){J.uniform4iv(this.addr,Q)}function DE(J,Q){J.uniform1uiv(this.addr,Q)}function ME(J,Q){J.uniform2uiv(this.addr,Q)}function CE(J,Q){J.uniform3uiv(this.addr,Q)}function zE(J,Q){J.uniform4uiv(this.addr,Q)}function PE(J,Q,$){let W=this.cache,Z=Q.length,K=m$($,Z);if(!uJ(W,K))J.uniform1iv(this.addr,K),cJ(W,K);let H;if(this.type===J.SAMPLER_2D_SHADOW)H=UK;else H=KX;for(let Y=0;Y!==Z;++Y)$.setTexture2D(Q[Y]||H,K[Y])}function IE(J,Q,$){let W=this.cache,Z=Q.length,K=m$($,Z);if(!uJ(W,K))J.uniform1iv(this.addr,K),cJ(W,K);for(let H=0;H!==Z;++H)$.setTexture3D(Q[H]||YX,K[H])}function AE(J,Q,$){let W=this.cache,Z=Q.length,K=m$($,Z);if(!uJ(W,K))J.uniform1iv(this.addr,K),cJ(W,K);for(let H=0;H!==Z;++H)$.setTextureCube(Q[H]||XX,K[H])}function wE(J,Q,$){let W=this.cache,Z=Q.length,K=m$($,Z);if(!uJ(W,K))J.uniform1iv(this.addr,K),cJ(W,K);for(let H=0;H!==Z;++H)$.setTexture2DArray(Q[H]||HX,K[H])}function _E(J){switch(J){case 5126:return GE;case 35664:return NE;case 35665:return qE;case 35666:return EE;case 35674:return FE;case 35675:return OE;case 35676:return RE;case 5124:case 35670:return LE;case 35667:case 35671:return VE;case 35668:case 35672:return BE;case 35669:case 35673:return kE;case 5125:return DE;case 36294:return ME;case 36295:return CE;case 36296:return zE;case 35678:case 36198:case 36298:case 36306:case 35682:return PE;case 35679:case 36299:case 36307:return IE;case 35680:case 36300:case 36308:case 36293:return AE;case 36289:case 36303:case 36311:case 36292:return wE}}class UX{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=UE(Q.type)}}class GX{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=_E(Q.type)}}class NX{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let W=this.seq;for(let Z=0,K=W.length;Z!==K;++Z){let H=W[Z];H.setValue(J,Q[H.id],$)}}}var YK=/(\w+)(\])?(\[|\.)?/g;function cY(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function TE(J,Q,$){let W=J.name,Z=W.length;YK.lastIndex=0;while(!0){let K=YK.exec(W),H=YK.lastIndex,Y=K[1],X=K[2]==="]",U=K[3];if(X)Y=Y|0;if(U===void 0||U==="["&&H+2===Z){cY($,U===void 0?new UX(Y,J,Q):new GX(Y,J,Q));break}else{let q=$.map[Y];if(q===void 0)q=new NX(Y),cY($,q);$=q}}}class OQ{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let K=0;K<$;++K){let H=J.getActiveUniform(Q,K),Y=J.getUniformLocation(Q,H.name);TE(H,Y,this)}let W=[],Z=[];for(let K of this.seq)if(K.type===J.SAMPLER_2D_SHADOW||K.type===J.SAMPLER_CUBE_SHADOW||K.type===J.SAMPLER_2D_ARRAY_SHADOW)W.push(K);else Z.push(K);if(W.length>0)this.seq=W.concat(Z)}setValue(J,Q,$,W){let Z=this.map[Q];if(Z!==void 0)Z.setValue(J,$,W)}setOptional(J,Q,$){let W=Q[$];if(W!==void 0)this.setValue(J,$,W)}static upload(J,Q,$,W){for(let Z=0,K=Q.length;Z!==K;++Z){let H=Q[Z],Y=$[H.id];if(Y.needsUpdate!==!1)H.setValue(J,Y.value,W)}}static seqWithValue(J,Q){let $=[];for(let W=0,Z=J.length;W!==Z;++W){let K=J[W];if(K.id in Q)$.push(K)}return $}}function nY(J,Q,$){let W=J.createShader(Q);return J.shaderSource(W,$),J.compileShader(W),W}var SE=37297,jE=0;function yE(J,Q){let $=J.split(`
`),W=[],Z=Math.max(Q-6,0),K=Math.min(Q+6,$.length);for(let H=Z;H<K;H++){let Y=H+1;W.push(`${Y===Q?">":" "} ${Y}: ${$[H]}`)}return W.join(`
`)}var sY=new s0;function vE(J){JJ._getMatrix(sY,JJ.workingColorSpace,J);let Q=`mat3( ${sY.elements.map(($)=>$.toFixed(4))} )`;switch(JJ.getTransfer(J)){case PZ:return[Q,"LinearTransferOETF"];case zJ:return[Q,"sRGBTransferOETF"];default:return S0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function iY(J,Q,$){let W=J.getShaderParameter(Q,J.COMPILE_STATUS),K=(J.getShaderInfoLog(Q)||"").trim();if(W&&K==="")return"";let H=/ERROR: 0:(\d+)/.exec(K);if(H){let Y=parseInt(H[1]);return $.toUpperCase()+`

`+K+`

`+yE(J.getShaderSource(Q),Y)}else return K}function fE(J,Q){let $=vE(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var hE={[vW]:"Linear",[fW]:"Reinhard",[hW]:"Cineon",[l6]:"ACESFilmic",[xW]:"AgX",[gW]:"Neutral",[bW]:"Custom"};function bE(J,Q){let $=hE[Q];if($===void 0)return S0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var p$=new _;function xE(){JJ.getLuminanceCoefficients(p$);let J=p$.x.toFixed(4),Q=p$.y.toFixed(4),$=p$.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function gE(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(FQ).join(`
`)}function pE(J){let Q=[];for(let $ in J){let W=J[$];if(W===!1)continue;Q.push("#define "+$+" "+W)}return Q.join(`
`)}function lE(J,Q){let $={},W=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let Z=0;Z<W;Z++){let K=J.getActiveAttrib(Q,Z),H=K.name,Y=1;if(K.type===J.FLOAT_MAT2)Y=2;if(K.type===J.FLOAT_MAT3)Y=3;if(K.type===J.FLOAT_MAT4)Y=4;$[H]={type:K.type,location:J.getAttribLocation(Q,H),locationSize:Y}}return $}function FQ(J){return J!==""}function oY(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function aY(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var mE=/^[ \t]*#include +<([\w\d./]+)>/gm;function GK(J){return J.replace(mE,uE)}var dE=new Map;function uE(J,Q){let $=t0[Q];if($===void 0){let W=dE.get(Q);if(W!==void 0)$=t0[W],S0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,W);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return GK($)}var cE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rY(J){return J.replace(cE,nE)}function nE(J,Q,$,W){let Z="";for(let K=parseInt(Q);K<parseInt($);K++)Z+=W.replace(/\[\s*i\s*\]/g,"[ "+K+" ]").replace(/UNROLLED_LOOP_INDEX/g,K);return Z}function tY(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var sE={[g6]:"SHADOWMAP_TYPE_PCF",[a7]:"SHADOWMAP_TYPE_VSM"};function iE(J){return sE[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var oE={[t7]:"ENVMAP_TYPE_CUBE",[K7]:"ENVMAP_TYPE_CUBE",[m6]:"ENVMAP_TYPE_CUBE_UV"};function aE(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return oE[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var rE={[K7]:"ENVMAP_MODE_REFRACTION"};function tE(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return rE[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var eE={[QY]:"ENVMAP_BLENDING_MULTIPLY",[$Y]:"ENVMAP_BLENDING_MIX",[WY]:"ENVMAP_BLENDING_ADD"};function J1(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return eE[J.combine]||"ENVMAP_BLENDING_NONE"}function Q1(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,W=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:W,maxMip:$}}function $1(J,Q,$,W){let Z=J.getContext(),K=$.defines,H=$.vertexShader,Y=$.fragmentShader,X=iE($),U=aE($),N=tE($),q=J1($),G=Q1($),E=gE($),F=pE(K),B=Z.createProgram(),R,O,P=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(R=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,F].filter(FQ).join(`
`),R.length>0)R+=`
`;if(O=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,F].filter(FQ).join(`
`),O.length>0)O+=`
`}else R=[tY($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,F,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+N:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(FQ).join(`
`),O=[tY($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,F,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+N:"",$.envMap?"#define "+q:"",G?"#define CUBEUV_TEXEL_WIDTH "+G.texelWidth:"",G?"#define CUBEUV_TEXEL_HEIGHT "+G.texelHeight:"",G?"#define CUBEUV_MAX_MIP "+G.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.retroreflection?"#define USE_RETROREFLECTION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==x9?"#define TONE_MAPPING":"",$.toneMapping!==x9?t0.tonemapping_pars_fragment:"",$.toneMapping!==x9?bE("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",t0.colorspace_pars_fragment,fE("linearToOutputTexel",$.outputColorSpace),xE(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(FQ).join(`
`);if(H=GK(H),H=oY(H,$),H=aY(H,$),Y=GK(Y),Y=oY(Y,$),Y=aY(Y,$),H=rY(H),Y=rY(Y),$.isRawShaderMaterial!==!0)P=`#version 300 es
`,R=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,O=["#define varying in",$.glslVersion===IZ?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===IZ?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+O;let k=P+R+H,L=P+O+Y,C=nY(Z,Z.VERTEX_SHADER,k),A=nY(Z,Z.FRAGMENT_SHADER,L);if(Z.attachShader(B,C),Z.attachShader(B,A),$.index0AttributeName!==void 0)Z.bindAttribLocation(B,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)Z.bindAttribLocation(B,0,"position");Z.linkProgram(B);function w(f){if(J.debug.checkShaderErrors){let x=Z.getProgramInfoLog(B)||"",o=Z.getShaderInfoLog(C)||"",y=Z.getShaderInfoLog(A)||"",u=x.trim(),e=o.trim(),d=y.trim(),U0=!0,s=!0;if(Z.getProgramParameter(B,Z.LINK_STATUS)===!1)if(U0=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(Z,B,C,A);else{let J0=iY(Z,C,"vertex"),Z0=iY(Z,A,"fragment");c0("WebGLProgram: Shader Error "+Z.getError()+" - VALIDATE_STATUS "+Z.getProgramParameter(B,Z.VALIDATE_STATUS)+`

Material Name: `+f.name+`
Material Type: `+f.type+`

Program Info Log: `+u+`
`+J0+`
`+Z0)}else if(u!=="")S0("WebGLProgram: Program Info Log:",u);else if(e===""||d==="")s=!1;if(s)f.diagnostics={runnable:U0,programLog:u,vertexShader:{log:e,prefix:R},fragmentShader:{log:d,prefix:O}}}Z.deleteShader(C),Z.deleteShader(A),D=new OQ(Z,B),I=lE(Z,B)}let D;this.getUniforms=function(){if(D===void 0)w(this);return D};let I;this.getAttributes=function(){if(I===void 0)w(this);return I};let m=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(m===!1)m=Z.getProgramParameter(B,SE);return m},this.destroy=function(){W.releaseStatesOfProgram(this),Z.deleteProgram(B),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=jE++,this.cacheKey=Q,this.usedTimes=1,this.program=B,this.vertexShader=C,this.fragmentShader=A,this}var W1=0;class qX{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let W=this._getShaderCacheForMaterial(J);if(W.has(Q)===!1)W.add(Q),Q.usedTimes++;if(W.has($)===!1)W.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new EX(J),Q.set(J,$);return $}}class EX{constructor(J){this.id=W1++,this.code=J,this.usedTimes=0}}function Z1(J){return J===U7||J===G$||J===N$}function K1(J,Q,$,W,Z,K){let H=new R$,Y=new qX,X=new Set,U=[],N=new Map,q=W.logarithmicDepthBuffer,G=W.precision,E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function F(D){if(X.add(D),D===0)return"uv";return`uv${D}`}function B(D,I,m,f,x,o){let y=f.fog,u=x.geometry,e=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?f.environment:null,d=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap,U0=Q.get(D.envMap||e,d),s=!!U0&&U0.mapping===m6?U0.image.height:null,J0=E[D.type];if(D.precision!==null){if(G=W.getMaxPrecision(D.precision),G!==D.precision)S0("WebGLProgram.getParameters:",D.precision,"not supported, using",G,"instead.")}let Z0=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m0=Z0!==void 0?Z0.length:0,j0=0;if(u.morphAttributes.position!==void 0)j0=1;if(u.morphAttributes.normal!==void 0)j0=2;if(u.morphAttributes.color!==void 0)j0=3;let BJ,u0,n,Y0;if(J0){let OJ=J8[J0];BJ=OJ.vertexShader,u0=OJ.fragmentShader}else{BJ=D.vertexShader,u0=D.fragmentShader;let OJ=Y.getVertexShaderStage(D),XJ=Y.getFragmentShaderStage(D);Y.update(D,OJ,XJ),n=OJ.id,Y0=XJ.id}let G0=J.getRenderTarget(),g0=J.state.buffers.depth.getReversed(),f0=x.isInstancedMesh===!0,y0=x.isBatchedMesh===!0,_J=!!D.map,e0=!!D.matcap,QJ=!!U0,NJ=!!D.aoMap,WJ=!!D.lightMap,gJ=!!D.bumpMap&&D.wireframe===!1,kJ=!!D.normalMap,rJ=!!D.displacementMap,yJ=!!D.emissiveMap,TJ=!!D.metalnessMap,b=!!D.roughnessMap,vJ=D.anisotropy>0,a0=D.clearcoat>0,DJ=D.dispersion>0,z=D.retroreflectivity>0,M=D.iridescence>0,v=D.sheen>0,l=D.transmission>0,W0=vJ&&!!D.anisotropyMap,N0=a0&&!!D.clearcoatMap,D0=a0&&!!D.clearcoatNormalMap,c=a0&&!!D.clearcoatRoughnessMap,a=M&&!!D.iridescenceMap,P0=M&&!!D.iridescenceThicknessMap,w0=v&&!!D.sheenColorMap,B0=v&&!!D.sheenRoughnessMap,X0=!!D.specularMap,h0=!!D.specularColorMap,p0=!!D.specularIntensityMap,KJ=l&&!!D.transmissionMap,h=l&&!!D.thicknessMap,L0=!!D.gradientMap,i=!!D.alphaMap,k0=D.alphaTest>0,F0=!!D.alphaHash,Q0=!!D.extensions,M0=x9;if(D.toneMapped){if(G0===null||G0.isXRRenderTarget===!0)M0=J.toneMapping}let n0={shaderID:J0,shaderType:D.type,shaderName:D.name,vertexShader:BJ,fragmentShader:u0,defines:D.defines,customVertexShaderID:n,customFragmentShaderID:Y0,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:G,batching:y0,batchingColor:y0&&x._colorsTexture!==null,instancing:f0,instancingColor:f0&&x.instanceColor!==null,instancingMorph:f0&&x.morphTexture!==null,outputColorSpace:G0===null?J.outputColorSpace:G0.isXRRenderTarget===!0?G0.texture.colorSpace:JJ.workingColorSpace,alphaToCoverage:!!D.alphaToCoverage,map:_J,matcap:e0,envMap:QJ,envMapMode:QJ&&U0.mapping,envMapCubeUVHeight:s,aoMap:NJ,lightMap:WJ,bumpMap:gJ,normalMap:kJ,displacementMap:rJ,emissiveMap:yJ,normalMapObjectSpace:kJ&&D.normalMapType===NY,normalMapTangentSpace:kJ&&D.normalMapType===zZ,packedNormalMap:kJ&&D.normalMapType===zZ&&Z1(D.normalMap.format),metalnessMap:TJ,roughnessMap:b,anisotropy:vJ,anisotropyMap:W0,clearcoat:a0,clearcoatMap:N0,clearcoatNormalMap:D0,clearcoatRoughnessMap:c,dispersion:DJ,retroreflection:z,iridescence:M,iridescenceMap:a,iridescenceThicknessMap:P0,sheen:v,sheenColorMap:w0,sheenRoughnessMap:B0,specularMap:X0,specularColorMap:h0,specularIntensityMap:p0,transmission:l,transmissionMap:KJ,thicknessMap:h,gradientMap:L0,opaque:D.transparent===!1&&D.blending===p6&&D.alphaToCoverage===!1,alphaMap:i,alphaTest:k0,alphaHash:F0,combine:D.combine,mapUv:_J&&F(D.map.channel),aoMapUv:NJ&&F(D.aoMap.channel),lightMapUv:WJ&&F(D.lightMap.channel),bumpMapUv:gJ&&F(D.bumpMap.channel),normalMapUv:kJ&&F(D.normalMap.channel),displacementMapUv:rJ&&F(D.displacementMap.channel),emissiveMapUv:yJ&&F(D.emissiveMap.channel),metalnessMapUv:TJ&&F(D.metalnessMap.channel),roughnessMapUv:b&&F(D.roughnessMap.channel),anisotropyMapUv:W0&&F(D.anisotropyMap.channel),clearcoatMapUv:N0&&F(D.clearcoatMap.channel),clearcoatNormalMapUv:D0&&F(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:c&&F(D.clearcoatRoughnessMap.channel),iridescenceMapUv:a&&F(D.iridescenceMap.channel),iridescenceThicknessMapUv:P0&&F(D.iridescenceThicknessMap.channel),sheenColorMapUv:w0&&F(D.sheenColorMap.channel),sheenRoughnessMapUv:B0&&F(D.sheenRoughnessMap.channel),specularMapUv:X0&&F(D.specularMap.channel),specularColorMapUv:h0&&F(D.specularColorMap.channel),specularIntensityMapUv:p0&&F(D.specularIntensityMap.channel),transmissionMapUv:KJ&&F(D.transmissionMap.channel),thicknessMapUv:h&&F(D.thicknessMap.channel),alphaMapUv:i&&F(D.alphaMap.channel),vertexTangents:!!u.attributes.tangent&&(kJ||vJ),vertexNormals:!!u.attributes.normal,vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!u.attributes.color&&u.attributes.color.itemSize===4,pointsUvs:x.isPoints===!0&&!!u.attributes.uv&&(_J||i),fog:!!y,useFog:D.fog===!0,fogExp2:!!y&&y.isFogExp2,flatShading:D.wireframe===!1&&(D.flatShading===!0||u.attributes.normal===void 0&&kJ===!1&&(D.isMeshLambertMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isMeshPhysicalMaterial)),sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:q,reversedDepthBuffer:g0,skinning:x.isSkinnedMesh===!0,hasPositionAttribute:u.attributes.position!==void 0,morphTargets:u.morphAttributes.position!==void 0,morphNormals:u.morphAttributes.normal!==void 0,morphColors:u.morphAttributes.color!==void 0,morphTargetsCount:m0,morphTextureStride:j0,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:o.length,numClippingPlanes:K.numPlanes,numClipIntersection:K.numIntersection,dithering:D.dithering,shadowMapEnabled:J.shadowMap.enabled&&m.length>0,shadowMapType:J.shadowMap.type,toneMapping:M0,decodeVideoTexture:_J&&D.map.isVideoTexture===!0&&JJ.getTransfer(D.map.colorSpace)===zJ,decodeVideoTextureEmissive:yJ&&D.emissiveMap.isVideoTexture===!0&&JJ.getTransfer(D.emissiveMap.colorSpace)===zJ,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===K9,flipSided:D.side===Q9,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Q0&&D.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Q0&&D.extensions.multiDraw===!0||y0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return n0.vertexUv1s=X.has(1),n0.vertexUv2s=X.has(2),n0.vertexUv3s=X.has(3),X.clear(),n0}function R(D){let I=[];if(D.shaderID)I.push(D.shaderID);else I.push(D.customVertexShaderID),I.push(D.customFragmentShaderID);if(D.defines!==void 0)for(let m in D.defines)I.push(m),I.push(D.defines[m]);if(D.isRawShaderMaterial===!1)O(I,D),P(I,D),I.push(J.outputColorSpace);return I.push(D.customProgramCacheKey),I.join()}function O(D,I){D.push(I.precision),D.push(I.outputColorSpace),D.push(I.envMapMode),D.push(I.envMapCubeUVHeight),D.push(I.mapUv),D.push(I.alphaMapUv),D.push(I.lightMapUv),D.push(I.aoMapUv),D.push(I.bumpMapUv),D.push(I.normalMapUv),D.push(I.displacementMapUv),D.push(I.emissiveMapUv),D.push(I.metalnessMapUv),D.push(I.roughnessMapUv),D.push(I.anisotropyMapUv),D.push(I.clearcoatMapUv),D.push(I.clearcoatNormalMapUv),D.push(I.clearcoatRoughnessMapUv),D.push(I.iridescenceMapUv),D.push(I.iridescenceThicknessMapUv),D.push(I.sheenColorMapUv),D.push(I.sheenRoughnessMapUv),D.push(I.specularMapUv),D.push(I.specularColorMapUv),D.push(I.specularIntensityMapUv),D.push(I.transmissionMapUv),D.push(I.thicknessMapUv),D.push(I.combine),D.push(I.fogExp2),D.push(I.sizeAttenuation),D.push(I.morphTargetsCount),D.push(I.morphAttributeCount),D.push(I.numSunLights),D.push(I.numDirLights),D.push(I.numPointLights),D.push(I.numSpotLights),D.push(I.numSpotLightMaps),D.push(I.numHemiLights),D.push(I.numRectAreaLights),D.push(I.numSunLightShadows),D.push(I.numDirLightShadows),D.push(I.numPointLightShadows),D.push(I.numSpotLightShadows),D.push(I.numSpotLightShadowsWithMaps),D.push(I.numLightProbes),D.push(I.shadowMapType),D.push(I.toneMapping),D.push(I.numClippingPlanes),D.push(I.numClipIntersection),D.push(I.depthPacking)}function P(D,I){if(H.disableAll(),I.instancing)H.enable(0);if(I.instancingColor)H.enable(1);if(I.instancingMorph)H.enable(2);if(I.matcap)H.enable(3);if(I.envMap)H.enable(4);if(I.normalMapObjectSpace)H.enable(5);if(I.normalMapTangentSpace)H.enable(6);if(I.clearcoat)H.enable(7);if(I.iridescence)H.enable(8);if(I.alphaTest)H.enable(9);if(I.vertexColors)H.enable(10);if(I.vertexAlphas)H.enable(11);if(I.vertexUv1s)H.enable(12);if(I.vertexUv2s)H.enable(13);if(I.vertexUv3s)H.enable(14);if(I.vertexTangents)H.enable(15);if(I.anisotropy)H.enable(16);if(I.alphaHash)H.enable(17);if(I.batching)H.enable(18);if(I.dispersion)H.enable(19);if(I.retroreflection)H.enable(24);if(I.batchingColor)H.enable(20);if(I.gradientMap)H.enable(21);if(I.packedNormalMap)H.enable(22);if(I.vertexNormals)H.enable(23);if(D.push(H.mask),H.disableAll(),I.fog)H.enable(0);if(I.useFog)H.enable(1);if(I.flatShading)H.enable(2);if(I.logarithmicDepthBuffer)H.enable(3);if(I.reversedDepthBuffer)H.enable(4);if(I.skinning)H.enable(5);if(I.morphTargets)H.enable(6);if(I.morphNormals)H.enable(7);if(I.morphColors)H.enable(8);if(I.premultipliedAlpha)H.enable(9);if(I.shadowMapEnabled)H.enable(10);if(I.doubleSided)H.enable(11);if(I.flipSided)H.enable(12);if(I.useDepthPacking)H.enable(13);if(I.dithering)H.enable(14);if(I.transmission)H.enable(15);if(I.sheen)H.enable(16);if(I.opaque)H.enable(17);if(I.pointsUvs)H.enable(18);if(I.decodeVideoTexture)H.enable(19);if(I.decodeVideoTextureEmissive)H.enable(20);if(I.alphaToCoverage)H.enable(21);if(I.numLightProbeGrids>0)H.enable(22);if(I.hasPositionAttribute)H.enable(23);D.push(H.mask)}function k(D){let I=E[D.type],m;if(I){let f=J8[I];m=wY.clone(f.uniforms)}else m=D.uniforms;return m}function L(D,I){let m=N.get(I);if(m!==void 0)++m.usedTimes;else m=new $1(J,I,D,Z),U.push(m),N.set(I,m);return m}function C(D){if(--D.usedTimes===0){let I=U.indexOf(D);U[I]=U[U.length-1],U.pop(),N.delete(D.cacheKey),D.destroy()}}function A(D){Y.remove(D)}function w(){Y.dispose()}return{getParameters:B,getProgramCacheKey:R,getUniforms:k,acquireProgram:L,releaseProgram:C,releaseShaderCache:A,programs:U,dispose:w}}function H1(){let J=new WeakMap;function Q(H){return J.has(H)}function $(H){let Y=J.get(H);if(Y===void 0)Y={},J.set(H,Y);return Y}function W(H){J.delete(H)}function Z(H,Y,X){J.get(H)[Y]=X}function K(){J=new WeakMap}return{has:Q,get:$,remove:W,update:Z,dispose:K}}function Y1(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function eY(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function JX(){let J=[],Q=0,$=[],W=[],Z=[];function K(){Q=0,$.length=0,W.length=0,Z.length=0}function H(G){let E=0;if(G.isInstancedMesh)E+=2;if(G.isSkinnedMesh)E+=1;return E}function Y(G,E,F,B,R,O){let P=J[Q];if(P===void 0)P={id:G.id,object:G,geometry:E,material:F,materialVariant:H(G),groupOrder:B,renderOrder:G.renderOrder,z:R,group:O},J[Q]=P;else P.id=G.id,P.object=G,P.geometry=E,P.material=F,P.materialVariant=H(G),P.groupOrder=B,P.renderOrder=G.renderOrder,P.z=R,P.group=O;return Q++,P}function X(G,E,F,B,R,O,P){if(P.reversedDepth===!0)R=-R;let k=Y(G,E,F,B,R,O);if(F.transmission>0)W.push(k);else if(F.transparent===!0)Z.push(k);else $.push(k)}function U(G,E,F,B,R,O){let P=Y(G,E,F,B,R,O);if(F.transmission>0)W.unshift(P);else if(F.transparent===!0)Z.unshift(P);else $.unshift(P)}function N(G,E){if($.length>1)$.sort(G||Y1);if(W.length>1)W.sort(E||eY);if(Z.length>1)Z.sort(E||eY)}function q(){for(let G=Q,E=J.length;G<E;G++){let F=J[G];if(F.id===null)break;F.id=null,F.object=null,F.geometry=null,F.material=null,F.group=null}}return{opaque:$,transmissive:W,transparent:Z,init:K,push:X,unshift:U,finish:q,sort:N}}function X1(){let J=new WeakMap;function Q(W,Z){let K=J.get(W),H;if(K===void 0)H=new JX,J.set(W,[H]);else if(Z>=K.length)H=new JX,K.push(H);else H=K[Z];return H}function $(){J=new WeakMap}return{get:Q,dispose:$}}function U1(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={direction:new _,color:new l0};break;case"SpotLight":$={position:new _,direction:new _,color:new l0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new _,color:new l0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new _,skyColor:new l0,groundColor:new l0};break;case"RectAreaLight":$={color:new l0,position:new _,halfWidth:new _,halfHeight:new _};break}return J[Q.id]=$,$}}}function G1(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var N1=0;function q1(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function E1(J){let Q=new U1,$=G1(),W={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)W.probe.push(new _);let Z=new _,K=new d0,H=new d0;function Y(U){let N=0,q=0,G=0;for(let x=0;x<9;x++)W.probe[x].set(0,0,0);let E=0,F=0,B=0,R=0,O=0,P=0,k=0,L=0,C=0,A=0,w=0,D=0,I=0,m=0;U.sort(q1);for(let x=0,o=U.length;x<o;x++){let y=U[x],u=y.color,e=y.intensity,d=y.distance,U0=null;if(y.shadow&&y.shadow.map)if(y.shadow.map.texture.format===U7)U0=y.shadow.map.texture;else U0=y.shadow.map.depthTexture||y.shadow.map.texture;if(y.isAmbientLight)N+=u.r*e,q+=u.g*e,G+=u.b*e;else if(y.isLightProbe){for(let s=0;s<9;s++)W.probe[s].addScaledVector(y.sh.coefficients[s],e);m++}else if(y.isSunLight){let s=Q.get(y);if(s.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let J0=y.shadow,Z0=$.get(y);Z0.shadowIntensity=J0.intensity,Z0.shadowBias=J0.bias,Z0.shadowNormalBias=J0.normalBias,Z0.shadowRadius=J0.radius,Z0.shadowMapSize.copy(J0.mapSize).multiply(J0.getFrameExtents()),W.sunShadow[F]=Z0,W.sunShadowMap[F]=U0;let m0=J0.getViewportCount();for(let j0=0;j0<m0;j0++)W.sunShadowMatrix[B+j0]=J0.getMatrix(j0),W.sunShadowCascade[B+j0]=J0._cascadeData[j0];B+=m0,F++}W.sun[E]=s,E++}else if(y.isDirectionalLight){let s=Q.get(y);if(s.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let J0=y.shadow,Z0=$.get(y);Z0.shadowIntensity=J0.intensity,Z0.shadowBias=J0.bias,Z0.shadowNormalBias=J0.normalBias,Z0.shadowRadius=J0.radius,Z0.shadowMapSize=J0.mapSize,W.directionalShadow[R]=Z0,W.directionalShadowMap[R]=U0,W.directionalShadowMatrix[R]=y.shadow.matrix,C++}W.directional[R]=s,R++}else if(y.isSpotLight){let s=Q.get(y);s.position.setFromMatrixPosition(y.matrixWorld),s.color.copy(u).multiplyScalar(e),s.distance=d,s.coneCos=Math.cos(y.angle),s.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),s.decay=y.decay,W.spot[P]=s;let J0=y.shadow;if(y.map){if(W.spotLightMap[D]=y.map,D++,J0.updateMatrices(y),y.castShadow)I++}if(W.spotLightMatrix[P]=J0.matrix,y.castShadow){let Z0=$.get(y);Z0.shadowIntensity=J0.intensity,Z0.shadowBias=J0.bias,Z0.shadowNormalBias=J0.normalBias,Z0.shadowRadius=J0.radius,Z0.shadowMapSize=J0.mapSize,W.spotShadow[P]=Z0,W.spotShadowMap[P]=U0,w++}P++}else if(y.isRectAreaLight){let s=Q.get(y);s.color.copy(u).multiplyScalar(e),s.halfWidth.set(y.width*0.5,0,0),s.halfHeight.set(0,y.height*0.5,0),W.rectArea[k]=s,k++}else if(y.isPointLight){let s=Q.get(y);if(s.color.copy(y.color).multiplyScalar(y.intensity),s.distance=y.distance,s.decay=y.decay,y.castShadow){let J0=y.shadow,Z0=$.get(y);Z0.shadowIntensity=J0.intensity,Z0.shadowBias=J0.bias,Z0.shadowNormalBias=J0.normalBias,Z0.shadowRadius=J0.radius,Z0.shadowMapSize=J0.mapSize,Z0.shadowCameraNear=J0.camera.near,Z0.shadowCameraFar=J0.camera.far,W.pointShadow[O]=Z0,W.pointShadowMap[O]=U0,W.pointShadowMatrix[O]=y.shadow.matrix,A++}W.point[O]=s,O++}else if(y.isHemisphereLight){let s=Q.get(y);s.skyColor.copy(y.color).multiplyScalar(e),s.groundColor.copy(y.groundColor).multiplyScalar(e),W.hemi[L]=s,L++}}if(k>0)if(J.has("OES_texture_float_linear")===!0)W.rectAreaLTC1=z0.LTC_FLOAT_1,W.rectAreaLTC2=z0.LTC_FLOAT_2;else W.rectAreaLTC1=z0.LTC_HALF_1,W.rectAreaLTC2=z0.LTC_HALF_2;W.ambient[0]=N,W.ambient[1]=q,W.ambient[2]=G;let f=W.hash;if(f.sunLength!==E||f.directionalLength!==R||f.pointLength!==O||f.spotLength!==P||f.rectAreaLength!==k||f.hemiLength!==L||f.numSunShadows!==F||f.numDirectionalShadows!==C||f.numPointShadows!==A||f.numSpotShadows!==w||f.numSpotMaps!==D||f.numLightProbes!==m)W.sun.length=E,W.directional.length=R,W.spot.length=P,W.rectArea.length=k,W.point.length=O,W.hemi.length=L,W.sunShadow.length=F,W.sunShadowMap.length=F,W.sunShadowMatrix.length=B,W.sunShadowCascade.length=B,W.directionalShadow.length=C,W.directionalShadowMap.length=C,W.directionalShadowMatrix.length=C,W.pointShadow.length=A,W.pointShadowMap.length=A,W.pointShadowMatrix.length=A,W.spotShadow.length=w,W.spotShadowMap.length=w,W.spotLightMatrix.length=w+D-I,W.spotLightMap.length=D,W.numSpotLightShadowsWithMaps=I,W.numLightProbes=m,f.sunLength=E,f.directionalLength=R,f.pointLength=O,f.spotLength=P,f.rectAreaLength=k,f.hemiLength=L,f.numSunShadows=F,f.numDirectionalShadows=C,f.numPointShadows=A,f.numSpotShadows=w,f.numSpotMaps=D,f.numLightProbes=m,W.version=N1++}function X(U,N){let q=0,G=0,E=0,F=0,B=0,R=0,O=N.matrixWorldInverse;for(let P=0,k=U.length;P<k;P++){let L=U[P];if(L.isSunLight){let C=W.sun[q];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(O),q++}else if(L.isDirectionalLight){let C=W.directional[G];C.direction.setFromMatrixPosition(L.matrixWorld),Z.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(Z),C.direction.transformDirection(O),G++}else if(L.isSpotLight){let C=W.spot[F];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(O),C.direction.setFromMatrixPosition(L.matrixWorld),Z.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(Z),C.direction.transformDirection(O),F++}else if(L.isRectAreaLight){let C=W.rectArea[B];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(O),H.identity(),K.copy(L.matrixWorld),K.premultiply(O),H.extractRotation(K),C.halfWidth.set(L.width*0.5,0,0),C.halfHeight.set(0,L.height*0.5,0),C.halfWidth.applyMatrix4(H),C.halfHeight.applyMatrix4(H),B++}else if(L.isPointLight){let C=W.point[E];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(O),E++}else if(L.isHemisphereLight){let C=W.hemi[R];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(O),R++}}}return{setup:Y,setupView:X,state:W}}function QX(J){let Q=new E1(J),$=[],W=[],Z=[];function K(G){q.camera=G,$.length=0,W.length=0,Z.length=0}function H(G){$.push(G)}function Y(G){W.push(G)}function X(G){Z.push(G)}function U(){Q.setup($)}function N(G){Q.setupView($,G)}let q={lightsArray:$,shadowsArray:W,lightProbeGridArray:Z,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:K,state:q,setupLights:U,setupLightsView:N,pushLight:H,pushShadow:Y,pushLightProbeGrid:X}}function F1(J){let Q=new WeakMap;function $(Z,K=0){let H=Q.get(Z),Y;if(H===void 0)Y=new QX(J),Q.set(Z,[Y]);else if(K>=H.length)Y=new QX(J),H.push(Y);else Y=H[K];return Y}function W(){Q=new WeakMap}return{get:$,dispose:W}}var O1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R1=`uniform sampler2D shadow_pass;
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
}`,L1=[new _(1,0,0),new _(-1,0,0),new _(0,1,0),new _(0,-1,0),new _(0,0,1),new _(0,0,-1)],V1=[new _(0,-1,0),new _(0,-1,0),new _(0,0,1),new _(0,0,-1),new _(0,-1,0),new _(0,-1,0)],$X=new d0,EQ=new _,XK=new _;function B1(J,Q,$){let W=new e6,Z=new K0,K=new K0,H=new LJ,Y=new lZ,X=new mZ,U={},N=$.maxTextureSize,q={[h8]:Q9,[Q9]:h8,[K9]:K9},G=new _9({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K0},radius:{value:4}},vertexShader:O1,fragmentShader:R1}),E=G.clone();E.defines.HORIZONTAL_PASS=1;let F=new wJ;F.setAttribute("position",new dJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let B=new x0(F,G),R=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=g6;let O=this.type;this.render=function(A,w,D){if(R.enabled===!1)return;if(R.autoUpdate===!1&&R.needsUpdate===!1)return;if(A.length===0)return;if(this.type===Q$)S0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=g6;let I=J.getRenderTarget(),m=J.getActiveCubeFace(),f=J.getActiveMipmapLevel(),x=J.state;if(x.setBlending(i9),x.buffers.depth.getReversed()===!0)x.buffers.color.setClear(0,0,0,0);else x.buffers.color.setClear(1,1,1,1);x.buffers.depth.setTest(!0),x.setScissorTest(!1);let o=O!==this.type;if(o)w.traverse(function(y){if(y.material)if(Array.isArray(y.material))y.material.forEach((u)=>u.needsUpdate=!0);else y.material.needsUpdate=!0});for(let y=0,u=A.length;y<u;y++){let e=A[y],d=e.shadow;if(d===void 0){S0("WebGLShadowMap:",e,"has no shadow.");continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;Z.copy(d.mapSize);let U0=d.getFrameExtents();if(Z.multiply(U0),K.copy(d.mapSize),Z.x>N||Z.y>N){if(Z.x>N)K.x=Math.floor(N/U0.x),Z.x=K.x*U0.x,d.mapSize.x=K.x;if(Z.y>N)K.y=Math.floor(N/U0.y),Z.y=K.y*U0.y,d.mapSize.y=K.y}let s=J.state.buffers.depth.getReversed();if(d.camera._reversedDepth=s,d.map===null||o===!0){if(d.map!==null){if(d.map.depthTexture!==null)d.map.depthTexture.dispose(),d.map.depthTexture=null;d.map.dispose()}if(this.type===a7){if(e.isPointLight){S0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}d.map=new O9(Z.x,Z.y,{format:U7,type:a9,minFilter:iJ,magFilter:iJ,generateMipmaps:!1}),d.map.texture.name=e.name+".shadowMap",d.map.depthTexture=new N7(Z.x,Z.y,O8),d.map.depthTexture.name=e.name+".shadowMapDepth",d.map.depthTexture.format=Y7,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=g9,d.map.depthTexture.magFilter=g9}else{if(e.isPointLight)d.map=new NK(Z.x),d.map.depthTexture=new jZ(Z.x,x8);else d.map=new O9(Z.x,Z.y),d.map.depthTexture=new N7(Z.x,Z.y,x8);if(d.map.depthTexture.name=e.name+".shadowMap",d.map.depthTexture.format=Y7,this.type===g6)d.map.depthTexture.compareFunction=s?F$:E$,d.map.depthTexture.minFilter=iJ,d.map.depthTexture.magFilter=iJ;else d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=g9,d.map.depthTexture.magFilter=g9}d.camera.updateProjectionMatrix()}if(d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==Z.x||d.map.height!==Z.y))d.map.setSize(Z.x,Z.y);let J0=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();if(e.isPointLight!==!0)d.updateMatrices(e,D);for(let Z0=0;Z0<J0;Z0++){let m0=d.getCamera(Z0);if(e.isPointLight){let{camera:j0,matrix:BJ}=d,u0=e.distance||j0.far;if(u0!==j0.far)j0.far=u0,j0.updateProjectionMatrix();EQ.setFromMatrixPosition(e.matrixWorld),j0.position.copy(EQ),XK.copy(j0.position),XK.add(L1[Z0]),j0.up.copy(V1[Z0]),j0.lookAt(XK),j0.updateMatrixWorld(),BJ.makeTranslation(-EQ.x,-EQ.y,-EQ.z),$X.multiplyMatrices(j0.projectionMatrix,j0.matrixWorldInverse),d._frustum.setFromProjectionMatrix($X,j0.coordinateSystem,j0.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)J.setRenderTarget(d.map,Z0),J.clear();else{if(Z0===0)J.setRenderTarget(d.map),J.clear();let j0=d.getViewport(Z0);H.set(K.x*j0.x,K.y*j0.y,K.x*j0.z,K.y*j0.w),x.viewport(H)}W=d.getFrustum(Z0),L(w,D,m0,e,this.type)}if(d.isPointLightShadow!==!0&&this.type===a7)P(d,D);d.needsUpdate=!1}O=this.type,R.needsUpdate=!1,J.setRenderTarget(I,m,f)};function P(A,w){let D=Q.update(B);if(G.defines.VSM_SAMPLES!==A.blurSamples)G.defines.VSM_SAMPLES=A.blurSamples,E.defines.VSM_SAMPLES=A.blurSamples,G.needsUpdate=!0,E.needsUpdate=!0;if(A.mapPass===null)A.mapPass=new O9(Z.x,Z.y,{format:U7,type:a9});else if(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)A.mapPass.setSize(A.map.width,A.map.height);G.uniforms.shadow_pass.value=A.map.depthTexture,G.uniforms.resolution.value.set(A.map.width,A.map.height),G.uniforms.radius.value=A.radius,J.setRenderTarget(A.mapPass),J.clear(),J.renderBufferDirect(w,null,D,G,B,null),E.uniforms.shadow_pass.value=A.mapPass.texture,E.uniforms.resolution.value.set(A.map.width,A.map.height),E.uniforms.radius.value=A.radius,J.setRenderTarget(A.map),J.clear(),J.renderBufferDirect(w,null,D,E,B,null)}function k(A,w,D,I){let m=null,f=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(f!==void 0)m=f;else if(m=D.isPointLight===!0?X:Y,J.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let x=m.uuid,o=w.uuid,y=U[x];if(y===void 0)y={},U[x]=y;let u=y[o];if(u===void 0)u=m.clone(),y[o]=u,w.addEventListener("dispose",C);m=u}if(m.visible=w.visible,m.wireframe=w.wireframe,I===a7)m.side=w.shadowSide!==null?w.shadowSide:w.side;else m.side=w.shadowSide!==null?w.shadowSide:q[w.side];if(m.alphaMap=w.alphaMap,m.alphaTest=w.alphaToCoverage===!0?0.5:w.alphaTest,m.map=w.map,m.clipShadows=w.clipShadows,m.clippingPlanes=w.clippingPlanes,m.clipIntersection=w.clipIntersection,m.displacementMap=w.displacementMap,m.displacementScale=w.displacementScale,m.displacementBias=w.displacementBias,m.wireframeLinewidth=w.wireframeLinewidth,m.linewidth=w.linewidth,D.isPointLight===!0&&m.isMeshDistanceMaterial===!0){let x=J.properties.get(m);x.light=D}return m}function L(A,w,D,I,m){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)){if((A.castShadow||A.receiveShadow&&m===a7)&&(!A.frustumCulled||A.intersectsFrustum(W))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);let o=Q.update(A),y=A.material;if(Array.isArray(y)){let u=o.groups;for(let e=0,d=u.length;e<d;e++){let U0=u[e],s=y[U0.materialIndex];if(s&&s.visible){let J0=k(A,s,I,m);A.onBeforeShadow(J,A,w,D,o,J0,U0),J.renderBufferDirect(D,null,o,J0,A,U0),A.onAfterShadow(J,A,w,D,o,J0,U0)}}}else if(y.visible){let u=k(A,y,I,m);A.onBeforeShadow(J,A,w,D,o,u,null),J.renderBufferDirect(D,null,o,u,A,null),A.onAfterShadow(J,A,w,D,o,u,null)}}}let x=A.children;for(let o=0,y=x.length;o<y;o++)L(x[o],w,D,I,m)}function C(A){A.target.removeEventListener("dispose",C);for(let D in U){let I=U[D],m=A.target.uuid;if(m in I)I[m].dispose(),delete I[m]}}}function k1(J,Q){function $(){let h=!1,L0=new LJ,i=null,k0=new LJ(0,0,0,0);return{setMask:function(F0){if(i!==F0&&!h)J.colorMask(F0,F0,F0,F0),i=F0},setLocked:function(F0){h=F0},setClear:function(F0,Q0,M0,n0,OJ){if(OJ===!0)F0*=n0,Q0*=n0,M0*=n0;if(L0.set(F0,Q0,M0,n0),k0.equals(L0)===!1)J.clearColor(F0,Q0,M0,n0),k0.copy(L0)},reset:function(){h=!1,i=null,k0.set(-1,0,0,0)}}}function W(){let h=!1,L0=!1,i=null,k0=null,F0=null;return{setReversed:function(Q0){if(L0!==Q0){let M0=Q.get("EXT_clip_control");if(Q0)M0.clipControlEXT(M0.LOWER_LEFT_EXT,M0.ZERO_TO_ONE_EXT);else M0.clipControlEXT(M0.LOWER_LEFT_EXT,M0.NEGATIVE_ONE_TO_ONE_EXT);L0=Q0;let n0=F0;F0=null,this.setClear(n0)}},getReversed:function(){return L0},setTest:function(Q0){if(Q0)G0(J.DEPTH_TEST);else g0(J.DEPTH_TEST)},setMask:function(Q0){if(i!==Q0&&!h)J.depthMask(Q0),i=Q0},setFunc:function(Q0){if(L0)Q0=DY[Q0];if(k0!==Q0){switch(Q0){case iH:J.depthFunc(J.NEVER);break;case oH:J.depthFunc(J.ALWAYS);break;case aH:J.depthFunc(J.LESS);break;case yW:J.depthFunc(J.LEQUAL);break;case rH:J.depthFunc(J.EQUAL);break;case tH:J.depthFunc(J.GEQUAL);break;case eH:J.depthFunc(J.GREATER);break;case JY:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}k0=Q0}},setLocked:function(Q0){h=Q0},setClear:function(Q0){if(F0!==Q0){if(F0=Q0,L0)Q0=1-Q0;J.clearDepth(Q0)}},reset:function(){h=!1,i=null,k0=null,F0=null,L0=!1}}}function Z(){let h=!1,L0=null,i=null,k0=null,F0=null,Q0=null,M0=null,n0=null,OJ=null;return{setTest:function(XJ){if(!h)if(XJ)G0(J.STENCIL_TEST);else g0(J.STENCIL_TEST)},setMask:function(XJ){if(L0!==XJ&&!h)J.stencilMask(XJ),L0=XJ},setFunc:function(XJ,N9,k9){if(i!==XJ||k0!==N9||F0!==k9)J.stencilFunc(XJ,N9,k9),i=XJ,k0=N9,F0=k9},setOp:function(XJ,N9,k9){if(Q0!==XJ||M0!==N9||n0!==k9)J.stencilOp(XJ,N9,k9),Q0=XJ,M0=N9,n0=k9},setLocked:function(XJ){h=XJ},setClear:function(XJ){if(OJ!==XJ)J.clearStencil(XJ),OJ=XJ},reset:function(){h=!1,L0=null,i=null,k0=null,F0=null,Q0=null,M0=null,n0=null,OJ=null}}}let K=new $,H=new W,Y=new Z,X=new WeakMap,U=new WeakMap,N={},q={},G={},E=new WeakMap,F=[],B=null,R=!1,O=null,P=null,k=null,L=null,C=null,A=null,w=null,D=new l0(0,0,0),I=0,m=!1,f=null,x=null,o=null,y=null,u=null,e=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),d=!1,U0=0,s=J.getParameter(J.VERSION);if(s.indexOf("WebGL")!==-1)U0=parseFloat(/^WebGL (\d)/.exec(s)[1]),d=U0>=1;else if(s.indexOf("OpenGL ES")!==-1)U0=parseFloat(/^OpenGL ES (\d)/.exec(s)[1]),d=U0>=2;let J0=null,Z0={},m0=J.getParameter(J.SCISSOR_BOX),j0=J.getParameter(J.VIEWPORT),BJ=new LJ().fromArray(m0),u0=new LJ().fromArray(j0);function n(h,L0,i,k0){let F0=new Uint8Array(4),Q0=J.createTexture();J.bindTexture(h,Q0),J.texParameteri(h,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(h,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let M0=0;M0<i;M0++)if(h===J.TEXTURE_3D||h===J.TEXTURE_2D_ARRAY)J.texImage3D(L0,0,J.RGBA,1,1,k0,0,J.RGBA,J.UNSIGNED_BYTE,F0);else J.texImage2D(L0+M0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,F0);return Q0}let Y0={};Y0[J.TEXTURE_2D]=n(J.TEXTURE_2D,J.TEXTURE_2D,1),Y0[J.TEXTURE_CUBE_MAP]=n(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y0[J.TEXTURE_2D_ARRAY]=n(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),Y0[J.TEXTURE_3D]=n(J.TEXTURE_3D,J.TEXTURE_3D,1,1),K.setClear(0,0,0,1),H.setClear(1),Y.setClear(0),G0(J.DEPTH_TEST),H.setFunc(yW),gJ(!1),kJ(_W),G0(J.CULL_FACE),NJ(i9);function G0(h){if(N[h]!==!0)J.enable(h),N[h]=!0}function g0(h){if(N[h]!==!1)J.disable(h),N[h]=!1}function f0(h,L0){if(G[h]!==L0){if(J.bindFramebuffer(h,L0),G[h]=L0,h===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=L0;if(h===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=L0;return!0}return!1}function y0(h,L0){let i=F,k0=!1;if(h){if(i=E.get(L0),i===void 0)i=[],E.set(L0,i);let F0=h.textures;if(i.length!==F0.length||i[0]!==J.COLOR_ATTACHMENT0){for(let Q0=0,M0=F0.length;Q0<M0;Q0++)i[Q0]=J.COLOR_ATTACHMENT0+Q0;i.length=F0.length,k0=!0}}else if(i[0]!==J.BACK)i[0]=J.BACK,k0=!0;if(k0)J.drawBuffers(i)}function _J(h){if(B!==h)return J.useProgram(h),B=h,!0;return!1}let e0={[r7]:J.FUNC_ADD,[_H]:J.FUNC_SUBTRACT,[TH]:J.FUNC_REVERSE_SUBTRACT};e0[SH]=J.MIN,e0[jH]=J.MAX;let QJ={[yH]:J.ZERO,[vH]:J.ONE,[fH]:J.SRC_COLOR,[bH]:J.SRC_ALPHA,[dH]:J.SRC_ALPHA_SATURATE,[lH]:J.DST_COLOR,[gH]:J.DST_ALPHA,[hH]:J.ONE_MINUS_SRC_COLOR,[xH]:J.ONE_MINUS_SRC_ALPHA,[mH]:J.ONE_MINUS_DST_COLOR,[pH]:J.ONE_MINUS_DST_ALPHA,[uH]:J.CONSTANT_COLOR,[cH]:J.ONE_MINUS_CONSTANT_COLOR,[nH]:J.CONSTANT_ALPHA,[sH]:J.ONE_MINUS_CONSTANT_ALPHA};function NJ(h,L0,i,k0,F0,Q0,M0,n0,OJ,XJ){if(h===i9){if(R===!0)g0(J.BLEND),R=!1;return}if(R===!1)G0(J.BLEND),R=!0;if(h!==wH){if(h!==O||XJ!==m){if(P!==r7||C!==r7)J.blendEquation(J.FUNC_ADD),P=r7,C=r7;if(XJ)switch(h){case p6:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case TW:J.blendFunc(J.ONE,J.ONE);break;case SW:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case jW:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:c0("WebGLState: Invalid blending: ",h);break}else switch(h){case p6:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case TW:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case SW:c0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jW:c0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:c0("WebGLState: Invalid blending: ",h);break}k=null,L=null,A=null,w=null,D.set(0,0,0),I=0,O=h,m=XJ}return}if(F0=F0||L0,Q0=Q0||i,M0=M0||k0,L0!==P||F0!==C)J.blendEquationSeparate(e0[L0],e0[F0]),P=L0,C=F0;if(i!==k||k0!==L||Q0!==A||M0!==w)J.blendFuncSeparate(QJ[i],QJ[k0],QJ[Q0],QJ[M0]),k=i,L=k0,A=Q0,w=M0;if(n0.equals(D)===!1||OJ!==I)J.blendColor(n0.r,n0.g,n0.b,OJ),D.copy(n0),I=OJ;O=h,m=!1}function WJ(h,L0){h.side===K9?g0(J.CULL_FACE):G0(J.CULL_FACE);let i=h.side===Q9;if(L0)i=!i;gJ(i),h.blending===p6&&h.transparent===!1?NJ(i9):NJ(h.blending,h.blendEquation,h.blendSrc,h.blendDst,h.blendEquationAlpha,h.blendSrcAlpha,h.blendDstAlpha,h.blendColor,h.blendAlpha,h.premultipliedAlpha),H.setFunc(h.depthFunc),H.setTest(h.depthTest),H.setMask(h.depthWrite),K.setMask(h.colorWrite);let k0=h.stencilWrite;if(Y.setTest(k0),k0)Y.setMask(h.stencilWriteMask),Y.setFunc(h.stencilFunc,h.stencilRef,h.stencilFuncMask),Y.setOp(h.stencilFail,h.stencilZFail,h.stencilZPass);yJ(h.polygonOffset,h.polygonOffsetFactor,h.polygonOffsetUnits),h.alphaToCoverage===!0?G0(J.SAMPLE_ALPHA_TO_COVERAGE):g0(J.SAMPLE_ALPHA_TO_COVERAGE)}function gJ(h){if(f!==h){if(h)J.frontFace(J.CW);else J.frontFace(J.CCW);f=h}}function kJ(h){if(h!==IH){if(G0(J.CULL_FACE),h!==x)if(h===_W)J.cullFace(J.BACK);else if(h===AH)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else g0(J.CULL_FACE);x=h}function rJ(h){if(h!==o){if(d)J.lineWidth(h);o=h}}function yJ(h,L0,i){if(h){if(G0(J.POLYGON_OFFSET_FILL),y!==L0||u!==i){if(y=L0,u=i,H.getReversed())L0=-L0;J.polygonOffset(L0,i)}}else g0(J.POLYGON_OFFSET_FILL)}function TJ(h){if(h)G0(J.SCISSOR_TEST);else g0(J.SCISSOR_TEST)}function b(h){if(h===void 0)h=J.TEXTURE0+e-1;if(J0!==h)J.activeTexture(h),J0=h}function vJ(h,L0,i){if(i===void 0)if(J0===null)i=J.TEXTURE0+e-1;else i=J0;let k0=Z0[i];if(k0===void 0)k0={type:void 0,texture:void 0},Z0[i]=k0;if(k0.type!==h||k0.texture!==L0){if(J0!==i)J.activeTexture(i),J0=i;J.bindTexture(h,L0||Y0[h]),k0.type=h,k0.texture=L0}}function a0(){let h=Z0[J0];if(h!==void 0&&h.type!==void 0)J.bindTexture(h.type,null),h.type=void 0,h.texture=void 0}function DJ(){try{J.compressedTexImage2D(...arguments)}catch(h){c0("WebGLState:",h)}}function z(){try{J.compressedTexImage3D(...arguments)}catch(h){c0("WebGLState:",h)}}function M(){try{J.texSubImage2D(...arguments)}catch(h){c0("WebGLState:",h)}}function v(){try{J.texSubImage3D(...arguments)}catch(h){c0("WebGLState:",h)}}function l(){try{J.compressedTexSubImage2D(...arguments)}catch(h){c0("WebGLState:",h)}}function W0(){try{J.compressedTexSubImage3D(...arguments)}catch(h){c0("WebGLState:",h)}}function N0(){try{J.texStorage2D(...arguments)}catch(h){c0("WebGLState:",h)}}function D0(){try{J.texStorage3D(...arguments)}catch(h){c0("WebGLState:",h)}}function c(){try{J.texImage2D(...arguments)}catch(h){c0("WebGLState:",h)}}function a(){try{J.texImage3D(...arguments)}catch(h){c0("WebGLState:",h)}}function P0(h){if(q[h]!==void 0)return q[h];else return J.getParameter(h)}function w0(h,L0){if(q[h]!==L0)J.pixelStorei(h,L0),q[h]=L0}function B0(h){if(BJ.equals(h)===!1)J.scissor(h.x,h.y,h.z,h.w),BJ.copy(h)}function X0(h){if(u0.equals(h)===!1)J.viewport(h.x,h.y,h.z,h.w),u0.copy(h)}function h0(h,L0){let i=U.get(L0);if(i===void 0)i=new WeakMap,U.set(L0,i);let k0=i.get(h);if(k0===void 0)k0=J.getUniformBlockIndex(L0,h.name),i.set(h,k0)}function p0(h,L0){let k0=U.get(L0).get(h);if(X.get(L0)!==k0)J.uniformBlockBinding(L0,k0,h.__bindingPointIndex),X.set(L0,k0)}function KJ(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),H.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),N={},q={},J0=null,Z0={},G={},E=new WeakMap,F=[],B=null,R=!1,O=null,P=null,k=null,L=null,C=null,A=null,w=null,D=new l0(0,0,0),I=0,m=!1,f=null,x=null,o=null,y=null,u=null,BJ.set(0,0,J.canvas.width,J.canvas.height),u0.set(0,0,J.canvas.width,J.canvas.height),K.reset(),H.reset(),Y.reset()}return{buffers:{color:K,depth:H,stencil:Y},enable:G0,disable:g0,bindFramebuffer:f0,drawBuffers:y0,useProgram:_J,setBlending:NJ,setMaterial:WJ,setFlipSided:gJ,setCullFace:kJ,setLineWidth:rJ,setPolygonOffset:yJ,setScissorTest:TJ,activeTexture:b,bindTexture:vJ,unbindTexture:a0,compressedTexImage2D:DJ,compressedTexImage3D:z,texImage2D:c,texImage3D:a,pixelStorei:w0,getParameter:P0,updateUBOMapping:h0,uniformBlockBinding:p0,texStorage2D:N0,texStorage3D:D0,texSubImage2D:M,texSubImage3D:v,compressedTexSubImage2D:l,compressedTexSubImage3D:W0,scissor:B0,viewport:X0,reset:KJ}}function D1(J,Q,$,W,Z,K,H){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,X=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new K0,N=new WeakMap,q=new Set,G,E=new WeakMap,F=!1;try{F=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(z){}function B(z,M){return F?new OffscreenCanvas(z,M):n7("canvas")}function R(z,M,v){let l=1,W0=DJ(z);if(W0.width>v||W0.height>v)l=v/Math.max(W0.width,W0.height);if(l<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let N0=Math.floor(l*W0.width),D0=Math.floor(l*W0.height);if(G===void 0)G=B(N0,D0);let c=M?B(N0,D0):G;return c.width=N0,c.height=D0,c.getContext("2d").drawImage(z,0,0,N0,D0),S0("WebGLRenderer: Texture has been resized from ("+W0.width+"x"+W0.height+") to ("+N0+"x"+D0+")."),c}else{if("data"in z)S0("WebGLRenderer: Image in DataTexture is too big ("+W0.width+"x"+W0.height+").");return z}return z}function O(z){return z.generateMipmaps}function P(z){J.generateMipmap(z)}function k(z){if(z.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(z.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function L(z,M,v,l,W0,N0=!1){if(z!==null){if(J[z]!==void 0)return J[z];S0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let D0;if(l){if(D0=Q.get("EXT_texture_norm16"),!D0)S0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let c=M;if(M===J.RED){if(v===J.FLOAT)c=J.R32F;if(v===J.HALF_FLOAT)c=J.R16F;if(v===J.UNSIGNED_BYTE)c=J.R8;if(v===J.UNSIGNED_SHORT&&D0)c=D0.R16_EXT;if(v===J.SHORT&&D0)c=D0.R16_SNORM_EXT}if(M===J.RED_INTEGER){if(v===J.UNSIGNED_BYTE)c=J.R8UI;if(v===J.UNSIGNED_SHORT)c=J.R16UI;if(v===J.UNSIGNED_INT)c=J.R32UI;if(v===J.BYTE)c=J.R8I;if(v===J.SHORT)c=J.R16I;if(v===J.INT)c=J.R32I}if(M===J.RG){if(v===J.FLOAT)c=J.RG32F;if(v===J.HALF_FLOAT)c=J.RG16F;if(v===J.UNSIGNED_BYTE)c=J.RG8;if(v===J.UNSIGNED_SHORT&&D0)c=D0.RG16_EXT;if(v===J.SHORT&&D0)c=D0.RG16_SNORM_EXT}if(M===J.RG_INTEGER){if(v===J.UNSIGNED_BYTE)c=J.RG8UI;if(v===J.UNSIGNED_SHORT)c=J.RG16UI;if(v===J.UNSIGNED_INT)c=J.RG32UI;if(v===J.BYTE)c=J.RG8I;if(v===J.SHORT)c=J.RG16I;if(v===J.INT)c=J.RG32I}if(M===J.RGB_INTEGER){if(v===J.UNSIGNED_BYTE)c=J.RGB8UI;if(v===J.UNSIGNED_SHORT)c=J.RGB16UI;if(v===J.UNSIGNED_INT)c=J.RGB32UI;if(v===J.BYTE)c=J.RGB8I;if(v===J.SHORT)c=J.RGB16I;if(v===J.INT)c=J.RGB32I}if(M===J.RGBA_INTEGER){if(v===J.UNSIGNED_BYTE)c=J.RGBA8UI;if(v===J.UNSIGNED_SHORT)c=J.RGBA16UI;if(v===J.UNSIGNED_INT)c=J.RGBA32UI;if(v===J.BYTE)c=J.RGBA8I;if(v===J.SHORT)c=J.RGBA16I;if(v===J.INT)c=J.RGBA32I}if(M===J.RGB){if(v===J.UNSIGNED_SHORT&&D0)c=D0.RGB16_EXT;if(v===J.SHORT&&D0)c=D0.RGB16_SNORM_EXT;if(v===J.UNSIGNED_INT_5_9_9_9_REV)c=J.RGB9_E5;if(v===J.UNSIGNED_INT_10F_11F_11F_REV)c=J.R11F_G11F_B10F}if(M===J.RGBA){let a=N0?PZ:JJ.getTransfer(W0);if(v===J.FLOAT)c=J.RGBA32F;if(v===J.HALF_FLOAT)c=J.RGBA16F;if(v===J.UNSIGNED_BYTE)c=a===zJ?J.SRGB8_ALPHA8:J.RGBA8;if(v===J.UNSIGNED_SHORT&&D0)c=D0.RGBA16_EXT;if(v===J.SHORT&&D0)c=D0.RGBA16_SNORM_EXT;if(v===J.UNSIGNED_SHORT_4_4_4_4)c=J.RGBA4;if(v===J.UNSIGNED_SHORT_5_5_5_1)c=J.RGB5_A1}if(c===J.R16F||c===J.R32F||c===J.RG16F||c===J.RG32F||c===J.RGBA16F||c===J.RGBA32F)Q.get("EXT_color_buffer_float");return c}function C(z,M){let v;if(z){if(M===null||M===x8||M===Q6)v=J.DEPTH24_STENCIL8;else if(M===O8)v=J.DEPTH32F_STENCIL8;else if(M===d6)v=J.DEPTH24_STENCIL8,S0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(M===null||M===x8||M===Q6)v=J.DEPTH_COMPONENT24;else if(M===O8)v=J.DEPTH_COMPONENT32F;else if(M===d6)v=J.DEPTH_COMPONENT16;return v}function A(z,M){if(O(z)===!0||z.isFramebufferTexture&&z.minFilter!==g9&&z.minFilter!==iJ)return Math.log2(Math.max(M.width,M.height))+1;else if(z.mipmaps!==void 0&&z.mipmaps.length>0)return z.mipmaps.length;else if(z.isCompressedTexture&&Array.isArray(z.image))return M.mipmaps.length;else return 1}function w(z){let M=z.target;if(M.removeEventListener("dispose",w),I(M),M.isVideoTexture)N.delete(M);if(M.isHTMLTexture)q.delete(M)}function D(z){let M=z.target;M.removeEventListener("dispose",D),f(M)}function I(z){let M=W.get(z);if(M.__webglInit===void 0)return;let v=z.source,l=E.get(v);if(l){let W0=l[M.__cacheKey];if(W0.usedTimes--,W0.usedTimes===0)m(z);if(Object.keys(l).length===0)E.delete(v)}W.remove(z)}function m(z){let M=W.get(z);J.deleteTexture(M.__webglTexture);let v=z.source,l=E.get(v);delete l[M.__cacheKey],H.memory.textures--}function f(z){let M=W.get(z);if(z.depthTexture)z.depthTexture.dispose(),W.remove(z.depthTexture);if(z.isWebGLCubeRenderTarget)for(let l=0;l<6;l++){if(Array.isArray(M.__webglFramebuffer[l]))for(let W0=0;W0<M.__webglFramebuffer[l].length;W0++)J.deleteFramebuffer(M.__webglFramebuffer[l][W0]);else J.deleteFramebuffer(M.__webglFramebuffer[l]);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer[l])}else{if(Array.isArray(M.__webglFramebuffer))for(let l=0;l<M.__webglFramebuffer.length;l++)J.deleteFramebuffer(M.__webglFramebuffer[l]);else J.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer);if(M.__webglMultisampledFramebuffer)J.deleteFramebuffer(M.__webglMultisampledFramebuffer);if(M.__webglColorRenderbuffer){for(let l=0;l<M.__webglColorRenderbuffer.length;l++)if(M.__webglColorRenderbuffer[l])J.deleteRenderbuffer(M.__webglColorRenderbuffer[l])}if(M.__webglDepthRenderbuffer)J.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let v=z.textures;for(let l=0,W0=v.length;l<W0;l++){let N0=W.get(v[l]);if(N0.__webglTexture)J.deleteTexture(N0.__webglTexture),H.memory.textures--;W.remove(v[l])}W.remove(z)}let x=0;function o(){x=0}function y(){return x}function u(z){x=z}function e(){let z=x;if(z>=Z.maxTextures)S0("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+Z.maxTextures);return x+=1,z}function d(z){let M=[];return M.push(z.wrapS),M.push(z.wrapT),M.push(z.wrapR||0),M.push(z.magFilter),M.push(z.minFilter),M.push(z.anisotropy),M.push(z.internalFormat),M.push(z.format),M.push(z.type),M.push(z.generateMipmaps),M.push(z.premultiplyAlpha),M.push(z.flipY),M.push(z.unpackAlignment),M.push(z.colorSpace),M.join()}function U0(z,M){let v=W.get(z);if(z.isVideoTexture)vJ(z);if(z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&v.__version!==z.version){let l=z.image;if(l===null)S0("WebGLRenderer: Texture marked for update but no image data found.");else if(l.complete===!1)S0("WebGLRenderer: Texture marked for update but image is incomplete");else{g0(v,z,M);return}}else if(z.isExternalTexture)v.__webglTexture=z.sourceTexture?z.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,v.__webglTexture,J.TEXTURE0+M)}function s(z,M){let v=W.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&v.__version!==z.version){g0(v,z,M);return}else if(z.isExternalTexture)v.__webglTexture=z.sourceTexture?z.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,v.__webglTexture,J.TEXTURE0+M)}function J0(z,M){let v=W.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&v.__version!==z.version){g0(v,z,M);return}$.bindTexture(J.TEXTURE_3D,v.__webglTexture,J.TEXTURE0+M)}function Z0(z,M){let v=W.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&v.__version!==z.version){f0(v,z,M);return}$.bindTexture(J.TEXTURE_CUBE_MAP,v.__webglTexture,J.TEXTURE0+M)}let m0={[b8]:J.REPEAT,[e7]:J.CLAMP_TO_EDGE,[Z$]:J.MIRRORED_REPEAT},j0={[g9]:J.NEAREST,[K$]:J.NEAREST_MIPMAP_NEAREST,[H7]:J.NEAREST_MIPMAP_LINEAR,[iJ]:J.LINEAR,[J6]:J.LINEAR_MIPMAP_NEAREST,[o9]:J.LINEAR_MIPMAP_LINEAR},BJ={[qY]:J.NEVER,[LY]:J.ALWAYS,[EY]:J.LESS,[E$]:J.LEQUAL,[FY]:J.EQUAL,[F$]:J.GEQUAL,[OY]:J.GREATER,[RY]:J.NOTEQUAL};function u0(z,M){if(M.type===O8&&Q.has("OES_texture_float_linear")===!1&&(M.magFilter===iJ||M.magFilter===J6||M.magFilter===H7||M.magFilter===o9||M.minFilter===iJ||M.minFilter===J6||M.minFilter===H7||M.minFilter===o9))S0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(z,J.TEXTURE_WRAP_S,m0[M.wrapS]),J.texParameteri(z,J.TEXTURE_WRAP_T,m0[M.wrapT]),z===J.TEXTURE_3D||z===J.TEXTURE_2D_ARRAY)J.texParameteri(z,J.TEXTURE_WRAP_R,m0[M.wrapR]);if(J.texParameteri(z,J.TEXTURE_MAG_FILTER,j0[M.magFilter]),J.texParameteri(z,J.TEXTURE_MIN_FILTER,j0[M.minFilter]),M.compareFunction)J.texParameteri(z,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(z,J.TEXTURE_COMPARE_FUNC,BJ[M.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===g9)return;if(M.minFilter!==H7&&M.minFilter!==o9)return;if(M.type===O8&&Q.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||W.get(M).__currentAnisotropy){let v=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(z,v.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,Z.getMaxAnisotropy())),W.get(M).__currentAnisotropy=M.anisotropy}}}function n(z,M){let v=!1;if(z.__webglInit===void 0)z.__webglInit=!0,M.addEventListener("dispose",w);let l=M.source,W0=E.get(l);if(W0===void 0)W0={},E.set(l,W0);let N0=d(M);if(N0!==z.__cacheKey){if(W0[N0]===void 0)W0[N0]={texture:J.createTexture(),usedTimes:0},H.memory.textures++,v=!0;W0[N0].usedTimes++;let D0=W0[z.__cacheKey];if(D0!==void 0){if(W0[z.__cacheKey].usedTimes--,D0.usedTimes===0)m(M)}z.__cacheKey=N0,z.__webglTexture=W0[N0].texture}return v}function Y0(z,M,v){return Math.floor(Math.floor(z/v)/M)}function G0(z,M,v,l){let N0=z.updateRanges;if(N0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,M.width,M.height,v,l,M.data);else{N0.sort((w0,B0)=>w0.start-B0.start);let D0=0;for(let w0=1;w0<N0.length;w0++){let B0=N0[D0],X0=N0[w0],h0=B0.start+B0.count,p0=Y0(X0.start,M.width,4),KJ=Y0(B0.start,M.width,4);if(X0.start<=h0+1&&p0===KJ&&Y0(X0.start+X0.count-1,M.width,4)===p0)B0.count=Math.max(B0.count,X0.start+X0.count-B0.start);else++D0,N0[D0]=X0}N0.length=D0+1;let c=$.getParameter(J.UNPACK_ROW_LENGTH),a=$.getParameter(J.UNPACK_SKIP_PIXELS),P0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,M.width);for(let w0=0,B0=N0.length;w0<B0;w0++){let X0=N0[w0],h0=Math.floor(X0.start/4),p0=Math.ceil(X0.count/4),KJ=h0%M.width,h=Math.floor(h0/M.width),L0=p0,i=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,KJ),$.pixelStorei(J.UNPACK_SKIP_ROWS,h),$.texSubImage2D(J.TEXTURE_2D,0,KJ,h,L0,1,v,l,M.data)}z.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,c),$.pixelStorei(J.UNPACK_SKIP_PIXELS,a),$.pixelStorei(J.UNPACK_SKIP_ROWS,P0)}}function g0(z,M,v){let l=J.TEXTURE_2D;if(M.isDataArrayTexture||M.isCompressedArrayTexture)l=J.TEXTURE_2D_ARRAY;if(M.isData3DTexture)l=J.TEXTURE_3D;let W0=n(z,M),N0=M.source;$.bindTexture(l,z.__webglTexture,J.TEXTURE0+v);let D0=W.get(N0);if(N0.version!==D0.__version||W0===!0){if($.activeTexture(J.TEXTURE0+v),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let i=JJ.getPrimaries(JJ.workingColorSpace),k0=M.colorSpace===G7?null:JJ.getPrimaries(M.colorSpace),F0=M.colorSpace===G7||i===k0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,F0)}$.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment);let a=R(M.image,!1,Z.maxTextureSize);a=a0(M,a);let P0=K.convert(M.format,M.colorSpace),w0=K.convert(M.type),B0=L(M.internalFormat,P0,w0,M.normalized,M.colorSpace,M.isVideoTexture);u0(l,M);let X0,h0=M.mipmaps,p0=M.isVideoTexture!==!0,KJ=D0.__version===void 0||W0===!0,h=N0.dataReady,L0=A(M,a);if(M.isDepthTexture){if(B0=C(M.format===X7,M.type),KJ)if(p0)$.texStorage2D(J.TEXTURE_2D,1,B0,a.width,a.height);else $.texImage2D(J.TEXTURE_2D,0,B0,a.width,a.height,0,P0,w0,null)}else if(M.isDataTexture)if(h0.length>0){if(p0&&KJ)$.texStorage2D(J.TEXTURE_2D,L0,B0,h0[0].width,h0[0].height);for(let i=0,k0=h0.length;i<k0;i++)if(X0=h0[i],p0){if(h)$.texSubImage2D(J.TEXTURE_2D,i,0,0,X0.width,X0.height,P0,w0,X0.data)}else $.texImage2D(J.TEXTURE_2D,i,B0,X0.width,X0.height,0,P0,w0,X0.data);M.generateMipmaps=!1}else if(p0){if(KJ)$.texStorage2D(J.TEXTURE_2D,L0,B0,a.width,a.height);if(h)G0(M,a,P0,w0)}else $.texImage2D(J.TEXTURE_2D,0,B0,a.width,a.height,0,P0,w0,a.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){if(p0&&KJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,L0,B0,h0[0].width,h0[0].height,a.depth);for(let i=0,k0=h0.length;i<k0;i++)if(X0=h0[i],M.format!==r9)if(P0!==null)if(p0){if(h)if(M.layerUpdates.size>0){let F0=$K(X0.width,X0.height,M.format,M.type);for(let Q0 of M.layerUpdates){let M0=X0.data.subarray(Q0*F0/X0.data.BYTES_PER_ELEMENT,(Q0+1)*F0/X0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,Q0,X0.width,X0.height,1,P0,M0)}}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,0,X0.width,X0.height,a.depth,P0,X0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,i,B0,X0.width,X0.height,a.depth,0,X0.data,0,0);else S0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(p0){if(h)$.texSubImage3D(J.TEXTURE_2D_ARRAY,i,0,0,0,X0.width,X0.height,a.depth,P0,w0,X0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,i,B0,X0.width,X0.height,a.depth,0,P0,w0,X0.data);if(M.layerUpdates.size>0)M.clearLayerUpdates()}else{if(p0&&KJ)$.texStorage2D(J.TEXTURE_2D,L0,B0,h0[0].width,h0[0].height);for(let i=0,k0=h0.length;i<k0;i++)if(X0=h0[i],M.format!==r9)if(P0!==null)if(p0){if(h)$.compressedTexSubImage2D(J.TEXTURE_2D,i,0,0,X0.width,X0.height,P0,X0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,i,B0,X0.width,X0.height,0,X0.data);else S0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(p0){if(h)$.texSubImage2D(J.TEXTURE_2D,i,0,0,X0.width,X0.height,P0,w0,X0.data)}else $.texImage2D(J.TEXTURE_2D,i,B0,X0.width,X0.height,0,P0,w0,X0.data)}else if(M.isDataArrayTexture)if(p0){if(KJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,L0,B0,a.width,a.height,a.depth);if(h)if(M.layerUpdates.size>0){let i=$K(a.width,a.height,M.format,M.type);for(let k0 of M.layerUpdates){let F0=a.data.subarray(k0*i/a.data.BYTES_PER_ELEMENT,(k0+1)*i/a.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,k0,a.width,a.height,1,P0,w0,F0)}M.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,a.width,a.height,a.depth,P0,w0,a.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,B0,a.width,a.height,a.depth,0,P0,w0,a.data);else if(M.isData3DTexture)if(p0){if(KJ)$.texStorage3D(J.TEXTURE_3D,L0,B0,a.width,a.height,a.depth);if(h)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,a.width,a.height,a.depth,P0,w0,a.data)}else $.texImage3D(J.TEXTURE_3D,0,B0,a.width,a.height,a.depth,0,P0,w0,a.data);else if(M.isFramebufferTexture){if(KJ)if(p0)$.texStorage2D(J.TEXTURE_2D,L0,B0,a.width,a.height);else{let{width:i,height:k0}=a;for(let F0=0;F0<L0;F0++)$.texImage2D(J.TEXTURE_2D,F0,B0,i,k0,0,P0,w0,null),i>>=1,k0>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in J){let i=J.canvas;if(!i.hasAttribute("layoutsubtree"))i.setAttribute("layoutsubtree","true");if(a.parentNode!==i){i.appendChild(a),q.add(M),i.onpaint=(k0)=>{let F0=k0.changedElements;for(let Q0 of q)if(F0.includes(Q0.image))Q0.needsUpdate=!0},i.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,a);else{let{RGBA:F0,RGBA:Q0,UNSIGNED_BYTE:M0}=J;J.texElementImage2D(J.TEXTURE_2D,0,F0,Q0,M0,a)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(h0.length>0){if(p0&&KJ){let i=DJ(h0[0]);$.texStorage2D(J.TEXTURE_2D,L0,B0,i.width,i.height)}for(let i=0,k0=h0.length;i<k0;i++)if(X0=h0[i],p0){if(h)$.texSubImage2D(J.TEXTURE_2D,i,0,0,P0,w0,X0)}else $.texImage2D(J.TEXTURE_2D,i,B0,P0,w0,X0);M.generateMipmaps=!1}else if(p0){if(KJ){let i=DJ(a);$.texStorage2D(J.TEXTURE_2D,L0,B0,i.width,i.height)}if(h)$.texSubImage2D(J.TEXTURE_2D,0,0,0,P0,w0,a)}else $.texImage2D(J.TEXTURE_2D,0,B0,P0,w0,a);if(O(M))P(l);if(D0.__version=N0.version,M.onUpdate)M.onUpdate(M)}z.__version=M.version}function f0(z,M,v){if(M.image.length!==6)return;let l=n(z,M),W0=M.source;$.bindTexture(J.TEXTURE_CUBE_MAP,z.__webglTexture,J.TEXTURE0+v);let N0=W.get(W0);if(W0.version!==N0.__version||l===!0){$.activeTexture(J.TEXTURE0+v);let D0=JJ.getPrimaries(JJ.workingColorSpace),c=M.colorSpace===G7?null:JJ.getPrimaries(M.colorSpace),a=M.colorSpace===G7||D0===c?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,a);let P0=M.isCompressedTexture||M.image[0].isCompressedTexture,w0=M.image[0]&&M.image[0].isDataTexture,B0=[];for(let Q0=0;Q0<6;Q0++){if(!P0&&!w0)B0[Q0]=R(M.image[Q0],!0,Z.maxCubemapSize);else B0[Q0]=w0?M.image[Q0].image:M.image[Q0];B0[Q0]=a0(M,B0[Q0])}let X0=B0[0],h0=K.convert(M.format,M.colorSpace),p0=K.convert(M.type),KJ=L(M.internalFormat,h0,p0,M.normalized,M.colorSpace),h=M.isVideoTexture!==!0,L0=N0.__version===void 0||l===!0,i=W0.dataReady,k0=A(M,X0);u0(J.TEXTURE_CUBE_MAP,M);let F0;if(P0){if(h&&L0)$.texStorage2D(J.TEXTURE_CUBE_MAP,k0,KJ,X0.width,X0.height);for(let Q0=0;Q0<6;Q0++){F0=B0[Q0].mipmaps;for(let M0=0;M0<F0.length;M0++){let n0=F0[M0];if(M.format!==r9)if(h0!==null)if(h){if(i)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,M0,0,0,n0.width,n0.height,h0,n0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,M0,KJ,n0.width,n0.height,0,n0.data);else S0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(h){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,M0,0,0,n0.width,n0.height,h0,p0,n0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,M0,KJ,n0.width,n0.height,0,h0,p0,n0.data)}}}else{if(F0=M.mipmaps,h&&L0){if(F0.length>0)k0++;let Q0=DJ(B0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,k0,KJ,Q0.width,Q0.height)}for(let Q0=0;Q0<6;Q0++)if(w0){if(h){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,0,0,0,B0[Q0].width,B0[Q0].height,h0,p0,B0[Q0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,0,KJ,B0[Q0].width,B0[Q0].height,0,h0,p0,B0[Q0].data);for(let M0=0;M0<F0.length;M0++){let OJ=F0[M0].image[Q0].image;if(h){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,M0+1,0,0,OJ.width,OJ.height,h0,p0,OJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,M0+1,KJ,OJ.width,OJ.height,0,h0,p0,OJ.data)}}else{if(h){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,0,0,0,h0,p0,B0[Q0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,0,KJ,h0,p0,B0[Q0]);for(let M0=0;M0<F0.length;M0++){let n0=F0[M0];if(h){if(i)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,M0+1,0,0,h0,p0,n0.image[Q0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+Q0,M0+1,KJ,h0,p0,n0.image[Q0])}}}if(O(M))P(J.TEXTURE_CUBE_MAP);if(N0.__version=W0.version,M.onUpdate)M.onUpdate(M)}z.__version=M.version}function y0(z,M,v,l,W0,N0){let D0=K.convert(v.format,v.colorSpace),c=K.convert(v.type),a=L(v.internalFormat,D0,c,v.normalized,v.colorSpace),P0=W.get(M),w0=W.get(v);if(w0.__renderTarget=M,!P0.__hasExternalTextures){let B0=Math.max(1,M.width>>N0),X0=Math.max(1,M.height>>N0);if(W0===J.TEXTURE_3D||W0===J.TEXTURE_2D_ARRAY)$.texImage3D(W0,N0,a,B0,X0,M.depth,0,D0,c,null);else $.texImage2D(W0,N0,a,B0,X0,0,D0,c,null)}if($.bindFramebuffer(J.FRAMEBUFFER,z),b(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,l,W0,w0.__webglTexture,0,TJ(M));else if(W0===J.TEXTURE_2D||W0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&W0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,l,W0,w0.__webglTexture,N0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function _J(z,M,v){if(J.bindRenderbuffer(J.RENDERBUFFER,z),M.depthBuffer){let l=M.depthTexture,W0=l&&l.isDepthTexture?l.type:null,N0=C(M.stencilBuffer,W0),D0=M.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(b(M))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,TJ(M),N0,M.width,M.height);else if(v)J.renderbufferStorageMultisample(J.RENDERBUFFER,TJ(M),N0,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,N0,M.width,M.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,D0,J.RENDERBUFFER,z)}else{let l=M.textures;for(let W0=0;W0<l.length;W0++){let N0=l[W0],D0=K.convert(N0.format,N0.colorSpace),c=K.convert(N0.type),a=L(N0.internalFormat,D0,c,N0.normalized,N0.colorSpace);if(b(M))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,TJ(M),a,M.width,M.height);else if(v)J.renderbufferStorageMultisample(J.RENDERBUFFER,TJ(M),a,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,a,M.width,M.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function e0(z,M,v){let l=M.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,z),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W0=W.get(M.depthTexture);if(W0.__renderTarget=M,!W0.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0;if(l){if(W0.__webglInit===void 0)W0.__webglInit=!0,M.depthTexture.addEventListener("dispose",w);if(W0.__webglTexture===void 0){W0.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,W0.__webglTexture),u0(J.TEXTURE_CUBE_MAP,M.depthTexture);let P0=K.convert(M.depthTexture.format),w0=K.convert(M.depthTexture.type),B0;if(M.depthTexture.format===Y7)B0=J.DEPTH_COMPONENT24;else if(M.depthTexture.format===X7)B0=J.DEPTH24_STENCIL8;for(let X0=0;X0<6;X0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+X0,0,B0,M.width,M.height,0,P0,w0,null)}}else U0(M.depthTexture,0);let N0=W0.__webglTexture,D0=TJ(M),c=l?J.TEXTURE_CUBE_MAP_POSITIVE_X+v:J.TEXTURE_2D,a=M.depthTexture.format===X7?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(M.depthTexture.format===Y7)if(b(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,a,c,N0,0,D0);else J.framebufferTexture2D(J.FRAMEBUFFER,a,c,N0,0);else if(M.depthTexture.format===X7)if(b(M))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,a,c,N0,0,D0);else J.framebufferTexture2D(J.FRAMEBUFFER,a,c,N0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function QJ(z){let M=W.get(z),v=z.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==z.depthTexture){let l=z.depthTexture;if(M.__depthDisposeCallback)M.__depthDisposeCallback();if(l){let W0=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,l.removeEventListener("dispose",W0)};l.addEventListener("dispose",W0),M.__depthDisposeCallback=W0}M.__boundDepthTexture=l}if(z.depthTexture&&!M.__autoAllocateDepthBuffer)if(v)for(let l=0;l<6;l++)e0(M.__webglFramebuffer[l],z,l);else{let l=z.texture.mipmaps;if(l&&l.length>0)e0(M.__webglFramebuffer[0],z,0);else e0(M.__webglFramebuffer,z,0)}else if(v){M.__webglDepthbuffer=[];for(let l=0;l<6;l++)if($.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[l]),M.__webglDepthbuffer[l]===void 0)M.__webglDepthbuffer[l]=J.createRenderbuffer(),_J(M.__webglDepthbuffer[l],z,!1);else{let W0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,N0=M.__webglDepthbuffer[l];J.bindRenderbuffer(J.RENDERBUFFER,N0),J.framebufferRenderbuffer(J.FRAMEBUFFER,W0,J.RENDERBUFFER,N0)}}else{let l=z.texture.mipmaps;if(l&&l.length>0)$.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer);if(M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=J.createRenderbuffer(),_J(M.__webglDepthbuffer,z,!1);else{let W0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,N0=M.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,N0),J.framebufferRenderbuffer(J.FRAMEBUFFER,W0,J.RENDERBUFFER,N0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function NJ(z,M,v){let l=W.get(z);if(M!==void 0)y0(l.__webglFramebuffer,z,z.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(v!==void 0)QJ(z)}function WJ(z){let M=z.texture,v=W.get(z),l=W.get(M);z.addEventListener("dispose",D);let W0=z.textures,N0=z.isWebGLCubeRenderTarget===!0,D0=W0.length>1;if(!D0){if(l.__webglTexture===void 0)l.__webglTexture=J.createTexture();l.__version=M.version,H.memory.textures++}if(N0){v.__webglFramebuffer=[];for(let c=0;c<6;c++)if(M.mipmaps&&M.mipmaps.length>0){v.__webglFramebuffer[c]=[];for(let a=0;a<M.mipmaps.length;a++)v.__webglFramebuffer[c][a]=J.createFramebuffer()}else v.__webglFramebuffer[c]=J.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){v.__webglFramebuffer=[];for(let c=0;c<M.mipmaps.length;c++)v.__webglFramebuffer[c]=J.createFramebuffer()}else v.__webglFramebuffer=J.createFramebuffer();if(D0)for(let c=0,a=W0.length;c<a;c++){let P0=W.get(W0[c]);if(P0.__webglTexture===void 0)P0.__webglTexture=J.createTexture(),H.memory.textures++}if(z.samples>0&&b(z)===!1){v.__webglMultisampledFramebuffer=J.createFramebuffer(),v.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,v.__webglMultisampledFramebuffer);for(let c=0;c<W0.length;c++){let a=W0[c];v.__webglColorRenderbuffer[c]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,v.__webglColorRenderbuffer[c]);let P0=K.convert(a.format,a.colorSpace),w0=K.convert(a.type),B0=L(a.internalFormat,P0,w0,a.normalized,a.colorSpace,z.isXRRenderTarget===!0),X0=TJ(z);J.renderbufferStorageMultisample(J.RENDERBUFFER,X0,B0,z.width,z.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+c,J.RENDERBUFFER,v.__webglColorRenderbuffer[c])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),z.depthBuffer)v.__webglDepthRenderbuffer=J.createRenderbuffer(),_J(v.__webglDepthRenderbuffer,z,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(N0){$.bindTexture(J.TEXTURE_CUBE_MAP,l.__webglTexture),u0(J.TEXTURE_CUBE_MAP,M);for(let c=0;c<6;c++)if(M.mipmaps&&M.mipmaps.length>0)for(let a=0;a<M.mipmaps.length;a++)y0(v.__webglFramebuffer[c][a],z,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+c,a);else y0(v.__webglFramebuffer[c],z,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+c,0);if(O(M))P(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(D0){for(let c=0,a=W0.length;c<a;c++){let P0=W0[c],w0=W.get(P0),B0=J.TEXTURE_2D;if(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)B0=z.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(B0,w0.__webglTexture),u0(B0,P0),y0(v.__webglFramebuffer,z,P0,J.COLOR_ATTACHMENT0+c,B0,0),O(P0))P(B0)}$.unbindTexture()}else{let c=J.TEXTURE_2D;if(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)c=z.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(c,l.__webglTexture),u0(c,M),M.mipmaps&&M.mipmaps.length>0)for(let a=0;a<M.mipmaps.length;a++)y0(v.__webglFramebuffer[a],z,M,J.COLOR_ATTACHMENT0,c,a);else y0(v.__webglFramebuffer,z,M,J.COLOR_ATTACHMENT0,c,0);if(O(M))P(c);$.unbindTexture()}if(z.depthBuffer)QJ(z)}function gJ(z){let M=z.textures;for(let v=0,l=M.length;v<l;v++){let W0=M[v];if(O(W0)){let N0=k(z),D0=W.get(W0).__webglTexture;$.bindTexture(N0,D0),P(N0),$.unbindTexture()}}}let kJ=[],rJ=[];function yJ(z){if(z.samples>0){if(b(z)===!1){let{textures:M,width:v,height:l}=z,W0=J.COLOR_BUFFER_BIT,N0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,D0=W.get(z),c=M.length>1;if(c)for(let P0=0;P0<M.length;P0++)$.bindFramebuffer(J.FRAMEBUFFER,D0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+P0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,D0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+P0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,D0.__webglMultisampledFramebuffer);let a=z.texture.mipmaps;if(a&&a.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,D0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,D0.__webglFramebuffer);for(let P0=0;P0<M.length;P0++){if(z.resolveDepthBuffer){if(z.depthBuffer)W0|=J.DEPTH_BUFFER_BIT;if(z.stencilBuffer&&z.resolveStencilBuffer)W0|=J.STENCIL_BUFFER_BIT}if(c){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,D0.__webglColorRenderbuffer[P0]);let w0=W.get(M[P0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,w0,0)}if(J.blitFramebuffer(0,0,v,l,0,0,v,l,W0,J.NEAREST),X===!0){if(kJ.length=0,rJ.length=0,kJ.push(J.COLOR_ATTACHMENT0+P0),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1)kJ.push(N0),rJ.push(N0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,rJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,kJ)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),c)for(let P0=0;P0<M.length;P0++){$.bindFramebuffer(J.FRAMEBUFFER,D0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+P0,J.RENDERBUFFER,D0.__webglColorRenderbuffer[P0]);let w0=W.get(M[P0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,D0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+P0,J.TEXTURE_2D,w0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,D0.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&X){let M=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[M])}}}function TJ(z){return Math.min(Z.maxSamples,z.samples)}function b(z){let M=W.get(z);return z.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function vJ(z){let M=H.render.frame;if(N.get(z)!==M)N.set(z,M),z.update()}function a0(z,M){let{colorSpace:v,format:l,type:W0}=z;if(z.isCompressedTexture===!0||z.isVideoTexture===!0)return M;if(v!==F9&&v!==G7)if(JJ.getTransfer(v)===zJ){if(l!==r9||W0!==p9)S0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else c0("WebGLTextures: Unsupported texture color space:",v);return M}function DJ(z){if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement)U.width=z.naturalWidth||z.width,U.height=z.naturalHeight||z.height;else if(typeof VideoFrame<"u"&&z instanceof VideoFrame)U.width=z.displayWidth,U.height=z.displayHeight;else U.width=z.width,U.height=z.height;return U}this.allocateTextureUnit=e,this.resetTextureUnits=o,this.getTextureUnits=y,this.setTextureUnits=u,this.setTexture2D=U0,this.setTexture2DArray=s,this.setTexture3D=J0,this.setTextureCube=Z0,this.rebindTextures=NJ,this.setupRenderTarget=WJ,this.updateRenderTargetMipmap=gJ,this.updateMultisampleRenderTarget=yJ,this.setupDepthRenderbuffer=QJ,this.setupFrameBufferTexture=y0,this.useMultisampledRTT=b,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function M1(J,Q){function $(W,Z=G7){let K,H=JJ.getTransfer(Z);if(W===p9)return J.UNSIGNED_BYTE;if(W===lW)return J.UNSIGNED_SHORT_4_4_4_4;if(W===mW)return J.UNSIGNED_SHORT_5_5_5_1;if(W===HY)return J.UNSIGNED_INT_5_9_9_9_REV;if(W===YY)return J.UNSIGNED_INT_10F_11F_11F_REV;if(W===ZY)return J.BYTE;if(W===KY)return J.SHORT;if(W===d6)return J.UNSIGNED_SHORT;if(W===pW)return J.INT;if(W===x8)return J.UNSIGNED_INT;if(W===O8)return J.FLOAT;if(W===a9)return J.HALF_FLOAT;if(W===XY)return J.ALPHA;if(W===UY)return J.RGB;if(W===r9)return J.RGBA;if(W===Y7)return J.DEPTH_COMPONENT;if(W===X7)return J.DEPTH_STENCIL;if(W===GY)return J.RED;if(W===dW)return J.RED_INTEGER;if(W===U7)return J.RG;if(W===uW)return J.RG_INTEGER;if(W===cW)return J.RGBA_INTEGER;if(W===H$||W===Y$||W===X$||W===U$)if(H===zJ)if(K=Q.get("WEBGL_compressed_texture_s3tc_srgb"),K!==null){if(W===H$)return K.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(W===Y$)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(W===X$)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(W===U$)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(K=Q.get("WEBGL_compressed_texture_s3tc"),K!==null){if(W===H$)return K.COMPRESSED_RGB_S3TC_DXT1_EXT;if(W===Y$)return K.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(W===X$)return K.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(W===U$)return K.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(W===nW||W===sW||W===iW||W===oW)if(K=Q.get("WEBGL_compressed_texture_pvrtc"),K!==null){if(W===nW)return K.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(W===sW)return K.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(W===iW)return K.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(W===oW)return K.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(W===aW||W===rW||W===tW||W===eW||W===JZ||W===G$||W===QZ)if(K=Q.get("WEBGL_compressed_texture_etc"),K!==null){if(W===aW||W===rW)return H===zJ?K.COMPRESSED_SRGB8_ETC2:K.COMPRESSED_RGB8_ETC2;if(W===tW)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:K.COMPRESSED_RGBA8_ETC2_EAC;if(W===eW)return K.COMPRESSED_R11_EAC;if(W===JZ)return K.COMPRESSED_SIGNED_R11_EAC;if(W===G$)return K.COMPRESSED_RG11_EAC;if(W===QZ)return K.COMPRESSED_SIGNED_RG11_EAC}else return null;if(W===$Z||W===WZ||W===ZZ||W===KZ||W===HZ||W===YZ||W===XZ||W===UZ||W===GZ||W===NZ||W===qZ||W===EZ||W===FZ||W===OZ)if(K=Q.get("WEBGL_compressed_texture_astc"),K!==null){if(W===$Z)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:K.COMPRESSED_RGBA_ASTC_4x4_KHR;if(W===WZ)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:K.COMPRESSED_RGBA_ASTC_5x4_KHR;if(W===ZZ)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:K.COMPRESSED_RGBA_ASTC_5x5_KHR;if(W===KZ)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:K.COMPRESSED_RGBA_ASTC_6x5_KHR;if(W===HZ)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:K.COMPRESSED_RGBA_ASTC_6x6_KHR;if(W===YZ)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:K.COMPRESSED_RGBA_ASTC_8x5_KHR;if(W===XZ)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:K.COMPRESSED_RGBA_ASTC_8x6_KHR;if(W===UZ)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:K.COMPRESSED_RGBA_ASTC_8x8_KHR;if(W===GZ)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:K.COMPRESSED_RGBA_ASTC_10x5_KHR;if(W===NZ)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:K.COMPRESSED_RGBA_ASTC_10x6_KHR;if(W===qZ)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:K.COMPRESSED_RGBA_ASTC_10x8_KHR;if(W===EZ)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:K.COMPRESSED_RGBA_ASTC_10x10_KHR;if(W===FZ)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:K.COMPRESSED_RGBA_ASTC_12x10_KHR;if(W===OZ)return H===zJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:K.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(W===RZ||W===LZ||W===VZ)if(K=Q.get("EXT_texture_compression_bptc"),K!==null){if(W===RZ)return H===zJ?K.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:K.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(W===LZ)return K.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(W===VZ)return K.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(W===BZ||W===kZ||W===N$||W===DZ)if(K=Q.get("EXT_texture_compression_rgtc"),K!==null){if(W===BZ)return K.COMPRESSED_RED_RGTC1_EXT;if(W===kZ)return K.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(W===N$)return K.COMPRESSED_RED_GREEN_RGTC2_EXT;if(W===DZ)return K.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(W===Q6)return J.UNSIGNED_INT_24_8;return J[W]!==void 0?J[W]:null}return{convert:$}}var C1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z1=`
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

}`;class FX{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new P$(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new _9({vertexShader:C1,fragmentShader:z1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new x0(new w9(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OX extends m9{constructor(J,Q){super();let $=this,W=null,Z=1,K=null,H="local-floor",Y=1,X=null,U=null,N=null,q=null,G=null,E=null,F=typeof XRWebGLBinding<"u",B=new FX,R={},O=Q.getContextAttributes(),P=null,k=null,L=[],C=[],A=new K0,w=null,D=null,I=new mJ;I.viewport=new LJ;let m=new mJ;m.viewport=new LJ;let f=[I,m],x=new aZ,o=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(n){let Y0=L[n];if(Y0===void 0)Y0=new s6,L[n]=Y0;return Y0.getTargetRaySpace()},this.getControllerGrip=function(n){let Y0=L[n];if(Y0===void 0)Y0=new s6,L[n]=Y0;return Y0.getGripSpace()},this.getHand=function(n){let Y0=L[n];if(Y0===void 0)Y0=new s6,L[n]=Y0;return Y0.getHandSpace()};function u(n){let Y0=C.indexOf(n.inputSource);if(Y0===-1)return;let G0=L[Y0];if(G0!==void 0)G0.update(n.inputSource,n.frame,X||K),G0.dispatchEvent({type:n.type,data:n.inputSource})}function e(){W.removeEventListener("select",u),W.removeEventListener("selectstart",u),W.removeEventListener("selectend",u),W.removeEventListener("squeeze",u),W.removeEventListener("squeezestart",u),W.removeEventListener("squeezeend",u),W.removeEventListener("end",e),W.removeEventListener("inputsourceschange",d);for(let n=0;n<L.length;n++){let Y0=C[n];if(Y0===null)continue;C[n]=null,L[n].disconnect(Y0)}o=null,y=null,B.reset();for(let n in R)delete R[n];if(J.setRenderTarget(P),G=null,q=null,N=null,W=null,k=null,u0.stop(),$.isPresenting=!1,J.setPixelRatio(w),J.setSize(A.width,A.height,!1),D!==null){let n=D.camera;n.fov=D.fov,n.zoom=D.zoom,n.updateProjectionMatrix(),D=null}$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(n){if(Z=n,$.isPresenting===!0)S0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(n){if(H=n,$.isPresenting===!0)S0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return X||K},this.setReferenceSpace=function(n){X=n},this.getBaseLayer=function(){return q!==null?q:G},this.getBinding=function(){if(N===null&&F)N=new XRWebGLBinding(W,Q);return N},this.getFrame=function(){return E},this.getSession=function(){return W},this.setSession=async function(n){if(W=n,W!==null){if(P=J.getRenderTarget(),W.addEventListener("select",u),W.addEventListener("selectstart",u),W.addEventListener("selectend",u),W.addEventListener("squeeze",u),W.addEventListener("squeezestart",u),W.addEventListener("squeezeend",u),W.addEventListener("end",e),W.addEventListener("inputsourceschange",d),O.xrCompatible!==!0)await Q.makeXRCompatible();if(w=J.getPixelRatio(),J.getSize(A),!(F&&("createProjectionLayer"in XRWebGLBinding.prototype))){let G0={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:Z};G=new XRWebGLLayer(W,Q,G0),W.updateRenderState({baseLayer:G}),J.setPixelRatio(1),J.setSize(G.framebufferWidth,G.framebufferHeight,!1),k=new O9(G.framebufferWidth,G.framebufferHeight,{format:r9,type:p9,colorSpace:J.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1,storeMultisampledDepthBuffer:G.ignoreDepthValues===!1,storeMultisampledStencilBuffer:G.ignoreDepthValues===!1})}else{let G0=null,g0=null,f0=null;if(O.depth)f0=O.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,G0=O.stencil?X7:Y7,g0=O.stencil?Q6:x8;let y0={colorFormat:Q.RGBA8,depthFormat:f0,scaleFactor:Z};N=this.getBinding(),q=N.createProjectionLayer(y0),W.updateRenderState({layers:[q]}),J.setPixelRatio(1),J.setSize(q.textureWidth,q.textureHeight,!1),k=new O9(q.textureWidth,q.textureHeight,{format:r9,type:p9,depthTexture:new N7(q.textureWidth,q.textureHeight,g0,void 0,void 0,void 0,void 0,void 0,void 0,G0),stencilBuffer:O.stencil,colorSpace:J.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:q.ignoreDepthValues===!1,resolveStencilBuffer:q.ignoreDepthValues===!1,storeMultisampledDepthBuffer:q.ignoreDepthValues===!1,storeMultisampledStencilBuffer:q.ignoreDepthValues===!1})}k.isXRRenderTarget=!0,this.setFoveation(Y),X=null,K=await W.requestReferenceSpace(H),u0.setContext(W),u0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(W!==null)return W.environmentBlendMode},this.getDepthTexture=function(){return B.getDepthTexture()};function d(n){for(let Y0=0;Y0<n.removed.length;Y0++){let G0=n.removed[Y0],g0=C.indexOf(G0);if(g0>=0)C[g0]=null,L[g0].disconnect(G0)}for(let Y0=0;Y0<n.added.length;Y0++){let G0=n.added[Y0],g0=C.indexOf(G0);if(g0===-1){for(let y0=0;y0<L.length;y0++)if(y0>=C.length){C.push(G0),g0=y0;break}else if(C[y0]===null){C[y0]=G0,g0=y0;break}if(g0===-1)break}let f0=L[g0];if(f0)f0.connect(G0)}}let U0=new _,s=new _;function J0(n,Y0,G0){U0.setFromMatrixPosition(Y0.matrixWorld),s.setFromMatrixPosition(G0.matrixWorld);let g0=U0.distanceTo(s),f0=Y0.projectionMatrix.elements,y0=G0.projectionMatrix.elements,_J=f0[14]/(f0[10]-1),e0=f0[14]/(f0[10]+1),QJ=(f0[9]+1)/f0[5],NJ=(f0[9]-1)/f0[5],WJ=(f0[8]-1)/f0[0],gJ=(y0[8]+1)/y0[0],kJ=_J*WJ,rJ=_J*gJ,yJ=g0/(-WJ+gJ),TJ=yJ*-WJ;if(Y0.matrixWorld.decompose(n.position,n.quaternion,n.scale),n.translateX(TJ),n.translateZ(yJ),n.matrixWorld.compose(n.position,n.quaternion,n.scale),n.matrixWorldInverse.copy(n.matrixWorld).invert(),f0[10]===-1)n.projectionMatrix.copy(Y0.projectionMatrix),n.projectionMatrixInverse.copy(Y0.projectionMatrixInverse);else{let b=_J+yJ,vJ=e0+yJ,a0=kJ-TJ,DJ=rJ+(g0-TJ),z=QJ*e0/vJ*b,M=NJ*e0/vJ*b;n.projectionMatrix.makePerspective(a0,DJ,z,M,b,vJ),n.projectionMatrixInverse.copy(n.projectionMatrix).invert()}}function Z0(n,Y0){if(Y0===null)n.matrixWorld.copy(n.matrix);else n.matrixWorld.multiplyMatrices(Y0.matrixWorld,n.matrix);n.matrixWorldInverse.copy(n.matrixWorld).invert()}this.updateCamera=function(n){if(W===null)return;let{near:Y0,far:G0}=n;if(B.texture!==null){if(B.depthNear>0)Y0=B.depthNear;if(B.depthFar>0)G0=B.depthFar}if(x.near=m.near=I.near=Y0,x.far=m.far=I.far=G0,o!==x.near||y!==x.far)W.updateRenderState({depthNear:x.near,depthFar:x.far}),o=x.near,y=x.far;x.layers.mask=n.layers.mask|6,I.layers.mask=x.layers.mask&-5,m.layers.mask=x.layers.mask&-3;let g0=n.parent,f0=x.cameras;Z0(x,g0);for(let y0=0;y0<f0.length;y0++)Z0(f0[y0],g0);if(f0.length===2)J0(x,I,m);else x.projectionMatrix.copy(I.projectionMatrix);if(D===null&&n.isPerspectiveCamera)D={camera:n,fov:n.fov,zoom:n.zoom};m0(n,x,g0)};function m0(n,Y0,G0){if(G0===null)n.matrix.copy(Y0.matrixWorld);else n.matrix.copy(G0.matrixWorld),n.matrix.invert(),n.matrix.multiply(Y0.matrixWorld);if(n.matrix.decompose(n.position,n.quaternion,n.scale),n.updateMatrixWorld(!0),n.projectionMatrix.copy(Y0.projectionMatrix),n.projectionMatrixInverse.copy(Y0.projectionMatrixInverse),n.isPerspectiveCamera)n.fov=W7*2*Math.atan(1/n.projectionMatrix.elements[5]),n.zoom=1}this.getCamera=function(){return x},this.getFoveation=function(){if(q===null&&G===null)return;return Y},this.setFoveation=function(n){if(Y=n,q!==null)q.fixedFoveation=n;if(G!==null&&G.fixedFoveation!==void 0)G.fixedFoveation=n},this.hasDepthSensing=function(){return B.texture!==null},this.getDepthSensingMesh=function(){return B.getMesh(x)},this.getCameraTexture=function(n){return R[n]};let j0=null;function BJ(n,Y0){if(U=Y0.getViewerPose(X||K),E=Y0,U!==null){let G0=U.views;if(G!==null)J.setRenderTargetFramebuffer(k,G.framebuffer),J.setRenderTarget(k);let g0=!1;if(G0.length!==x.cameras.length)x.cameras.length=0,g0=!0;for(let e0=0;e0<G0.length;e0++){let QJ=G0[e0],NJ=null;if(G!==null)NJ=G.getViewport(QJ);else{let gJ=N.getViewSubImage(q,QJ);if(NJ=gJ.viewport,e0===0)J.setRenderTargetTextures(k,gJ.colorTexture,gJ.depthStencilTexture),J.setRenderTarget(k)}let WJ=f[e0];if(WJ===void 0)WJ=new mJ,WJ.layers.enable(e0),WJ.viewport=new LJ,f[e0]=WJ;if(WJ.matrix.fromArray(QJ.transform.matrix),WJ.matrix.decompose(WJ.position,WJ.quaternion,WJ.scale),WJ.projectionMatrix.fromArray(QJ.projectionMatrix),WJ.projectionMatrixInverse.copy(WJ.projectionMatrix).invert(),WJ.viewport.set(NJ.x,NJ.y,NJ.width,NJ.height),e0===0)x.matrix.copy(WJ.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale);if(g0===!0)x.cameras.push(WJ)}let f0=W.enabledFeatures;if(f0&&f0.includes("depth-sensing")&&W.depthUsage=="gpu-optimized"&&F){N=$.getBinding();let e0=N.getDepthInformation(G0[0]);if(e0&&e0.isValid&&e0.texture)B.init(e0,W.renderState)}if(f0&&f0.includes("camera-access")&&F){J.state.unbindTexture(),N=$.getBinding();for(let e0=0;e0<G0.length;e0++){let QJ=G0[e0].camera;if(QJ){let NJ=R[QJ];if(!NJ)NJ=new P$,R[QJ]=NJ;let WJ=N.getCameraImage(QJ);NJ.sourceTexture=WJ}}}}for(let G0=0;G0<L.length;G0++){let g0=C[G0],f0=L[G0];if(g0!==null&&f0!==void 0)f0.update(g0,Y0,X||K)}if(j0)j0(n,Y0);if(Y0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:Y0});E=null}let u0=new WX;u0.setAnimationLoop(BJ),this.setAnimationLoop=function(n){j0=n},this.dispose=function(){}}}var P1=new d0,RX=new s0;RX.set(-1,0,0,0,1,0,0,0,1);function I1(J,Q){function $(R,O){if(R.matrixAutoUpdate===!0)R.updateMatrix();O.value.copy(R.matrix)}function W(R,O){if(O.color.getRGB(R.fogColor.value,gZ(J)),O.isFog)R.fogNear.value=O.near,R.fogFar.value=O.far;else if(O.isFogExp2)R.fogDensity.value=O.density}function Z(R,O,P,k,L){if(O.isNodeMaterial)O.uniformsNeedUpdate=!1;else if(O.isMeshBasicMaterial)K(R,O);else if(O.isMeshLambertMaterial){if(K(R,O),O.envMap)R.envMapIntensity.value=O.envMapIntensity}else if(O.isMeshToonMaterial)K(R,O),q(R,O);else if(O.isMeshPhongMaterial){if(K(R,O),N(R,O),O.envMap)R.envMapIntensity.value=O.envMapIntensity}else if(O.isMeshStandardMaterial){if(K(R,O),G(R,O),O.isMeshPhysicalMaterial)E(R,O,L)}else if(O.isMeshMatcapMaterial)K(R,O),F(R,O);else if(O.isMeshDepthMaterial)K(R,O);else if(O.isMeshDistanceMaterial)K(R,O),B(R,O);else if(O.isMeshNormalMaterial)K(R,O);else if(O.isLineBasicMaterial){if(H(R,O),O.isLineDashedMaterial)Y(R,O)}else if(O.isPointsMaterial)X(R,O,P,k);else if(O.isSpriteMaterial)U(R,O);else if(O.isShadowMaterial)R.color.value.copy(O.color),R.opacity.value=O.opacity;else if(O.isShaderMaterial)O.uniformsNeedUpdate=!1}function K(R,O){if(R.opacity.value=O.opacity,O.color)R.diffuse.value.copy(O.color);if(O.emissive)R.emissive.value.copy(O.emissive).multiplyScalar(O.emissiveIntensity);if(O.map)R.map.value=O.map,$(O.map,R.mapTransform);if(O.alphaMap)R.alphaMap.value=O.alphaMap,$(O.alphaMap,R.alphaMapTransform);if(O.bumpMap){if(R.bumpMap.value=O.bumpMap,$(O.bumpMap,R.bumpMapTransform),R.bumpScale.value=O.bumpScale,O.side===Q9)R.bumpScale.value*=-1}if(O.normalMap){if(R.normalMap.value=O.normalMap,$(O.normalMap,R.normalMapTransform),R.normalScale.value.copy(O.normalScale),O.side===Q9)R.normalScale.value.negate()}if(O.displacementMap)R.displacementMap.value=O.displacementMap,$(O.displacementMap,R.displacementMapTransform),R.displacementScale.value=O.displacementScale,R.displacementBias.value=O.displacementBias;if(O.emissiveMap)R.emissiveMap.value=O.emissiveMap,$(O.emissiveMap,R.emissiveMapTransform);if(O.specularMap)R.specularMap.value=O.specularMap,$(O.specularMap,R.specularMapTransform);if(O.alphaTest>0)R.alphaTest.value=O.alphaTest;let P=Q.get(O),k=P.envMap,L=P.envMapRotation;if(k){if(R.envMap.value=k,R.envMapRotation.value.setFromMatrix4(P1.makeRotationFromEuler(L)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1)R.envMapRotation.value.premultiply(RX);R.reflectivity.value=O.reflectivity,R.ior.value=O.ior,R.refractionRatio.value=O.refractionRatio}if(O.lightMap)R.lightMap.value=O.lightMap,R.lightMapIntensity.value=O.lightMapIntensity,$(O.lightMap,R.lightMapTransform);if(O.aoMap)R.aoMap.value=O.aoMap,R.aoMapIntensity.value=O.aoMapIntensity,$(O.aoMap,R.aoMapTransform)}function H(R,O){if(R.diffuse.value.copy(O.color),R.opacity.value=O.opacity,O.map)R.map.value=O.map,$(O.map,R.mapTransform)}function Y(R,O){R.dashSize.value=O.dashSize,R.totalSize.value=O.dashSize+O.gapSize,R.scale.value=O.scale}function X(R,O,P,k){if(R.diffuse.value.copy(O.color),R.opacity.value=O.opacity,R.size.value=O.size*P,R.scale.value=k*0.5,O.map)R.map.value=O.map,$(O.map,R.uvTransform);if(O.alphaMap)R.alphaMap.value=O.alphaMap,$(O.alphaMap,R.alphaMapTransform);if(O.alphaTest>0)R.alphaTest.value=O.alphaTest}function U(R,O){if(R.diffuse.value.copy(O.color),R.opacity.value=O.opacity,R.rotation.value=O.rotation,O.map)R.map.value=O.map,$(O.map,R.mapTransform);if(O.alphaMap)R.alphaMap.value=O.alphaMap,$(O.alphaMap,R.alphaMapTransform);if(O.alphaTest>0)R.alphaTest.value=O.alphaTest}function N(R,O){R.specular.value.copy(O.specular),R.shininess.value=Math.max(O.shininess,0.0001)}function q(R,O){if(O.gradientMap)R.gradientMap.value=O.gradientMap}function G(R,O){if(R.metalness.value=O.metalness,O.metalnessMap)R.metalnessMap.value=O.metalnessMap,$(O.metalnessMap,R.metalnessMapTransform);if(R.roughness.value=O.roughness,O.roughnessMap)R.roughnessMap.value=O.roughnessMap,$(O.roughnessMap,R.roughnessMapTransform);if(O.envMap)R.envMapIntensity.value=O.envMapIntensity}function E(R,O,P){if(R.ior.value=O.ior,O.sheen>0){if(R.sheenColor.value.copy(O.sheenColor).multiplyScalar(O.sheen),R.sheenRoughness.value=O.sheenRoughness,O.sheenColorMap)R.sheenColorMap.value=O.sheenColorMap,$(O.sheenColorMap,R.sheenColorMapTransform);if(O.sheenRoughnessMap)R.sheenRoughnessMap.value=O.sheenRoughnessMap,$(O.sheenRoughnessMap,R.sheenRoughnessMapTransform)}if(O.clearcoat>0){if(R.clearcoat.value=O.clearcoat,R.clearcoatRoughness.value=O.clearcoatRoughness,O.clearcoatMap)R.clearcoatMap.value=O.clearcoatMap,$(O.clearcoatMap,R.clearcoatMapTransform);if(O.clearcoatRoughnessMap)R.clearcoatRoughnessMap.value=O.clearcoatRoughnessMap,$(O.clearcoatRoughnessMap,R.clearcoatRoughnessMapTransform);if(O.clearcoatNormalMap){if(R.clearcoatNormalMap.value=O.clearcoatNormalMap,$(O.clearcoatNormalMap,R.clearcoatNormalMapTransform),R.clearcoatNormalScale.value.copy(O.clearcoatNormalScale),O.side===Q9)R.clearcoatNormalScale.value.negate()}}if(O.dispersion>0)R.dispersion.value=O.dispersion;if(O.retroreflectivity>0)R.retroreflectivity.value=O.retroreflectivity;if(O.iridescence>0){if(R.iridescence.value=O.iridescence,R.iridescenceIOR.value=O.iridescenceIOR,R.iridescenceThicknessMinimum.value=O.iridescenceThicknessRange[0],R.iridescenceThicknessMaximum.value=O.iridescenceThicknessRange[1],O.iridescenceMap)R.iridescenceMap.value=O.iridescenceMap,$(O.iridescenceMap,R.iridescenceMapTransform);if(O.iridescenceThicknessMap)R.iridescenceThicknessMap.value=O.iridescenceThicknessMap,$(O.iridescenceThicknessMap,R.iridescenceThicknessMapTransform)}if(O.transmission>0){if(R.transmission.value=O.transmission,R.transmissionSamplerMap.value=P.texture,R.transmissionSamplerSize.value.set(P.width,P.height),O.transmissionMap)R.transmissionMap.value=O.transmissionMap,$(O.transmissionMap,R.transmissionMapTransform);if(R.thickness.value=O.thickness,O.thicknessMap)R.thicknessMap.value=O.thicknessMap,$(O.thicknessMap,R.thicknessMapTransform);R.attenuationDistance.value=O.attenuationDistance,R.attenuationColor.value.copy(O.attenuationColor)}if(O.anisotropy>0){if(R.anisotropyVector.value.set(O.anisotropy*Math.cos(O.anisotropyRotation),O.anisotropy*Math.sin(O.anisotropyRotation)),O.anisotropyMap)R.anisotropyMap.value=O.anisotropyMap,$(O.anisotropyMap,R.anisotropyMapTransform)}if(R.specularIntensity.value=O.specularIntensity,R.specularColor.value.copy(O.specularColor),O.specularColorMap)R.specularColorMap.value=O.specularColorMap,$(O.specularColorMap,R.specularColorMapTransform);if(O.specularIntensityMap)R.specularIntensityMap.value=O.specularIntensityMap,$(O.specularIntensityMap,R.specularIntensityMapTransform)}function F(R,O){if(O.matcap)R.matcap.value=O.matcap}function B(R,O){let P=Q.get(O).light;R.referencePosition.value.setFromMatrixPosition(P.matrixWorld),R.nearDistance.value=P.shadow.camera.near,R.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:W,refreshMaterialUniforms:Z}}function A1(J,Q,$,W){let Z={},K={},H=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function X(L,C){let A=C.program;W.uniformBlockBinding(L,A)}function U(L,C){let A=Z[L.id];if(A===void 0)R(L),A=N(L),Z[L.id]=A,L.addEventListener("dispose",P);let w=C.program;W.updateUBOMapping(L,w);let D=Q.render.frame;if(K[L.id]!==D)G(L),K[L.id]=D}function N(L){let C=q();L.__bindingPointIndex=C;let A=J.createBuffer(),w=L.__size,D=L.usage;return J.bindBuffer(J.UNIFORM_BUFFER,A),J.bufferData(J.UNIFORM_BUFFER,w,D),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,C,A),A}function q(){for(let L=0;L<Y;L++)if(H.indexOf(L)===-1)return H.push(L),L;return c0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function G(L){let C=Z[L.id],A=L.uniforms,w=L.__cache;J.bindBuffer(J.UNIFORM_BUFFER,C);for(let D=0,I=A.length;D<I;D++){let m=A[D];if(Array.isArray(m))for(let f=0,x=m.length;f<x;f++)E(m[f],D,f,w);else E(m,D,0,w)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function E(L,C,A,w){if(B(L,C,A,w)===!0){let{__offset:D,value:I}=L;if(Array.isArray(I)){let m=0;for(let f=0;f<I.length;f++){let x=I[f],o=O(x);if(F(x,L.__data,m),typeof x!=="number"&&typeof x!=="boolean"&&!x.isMatrix3&&!ArrayBuffer.isView(x))m+=o.storage/Float32Array.BYTES_PER_ELEMENT}}else F(I,L.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,D,L.__data)}}function F(L,C,A){if(typeof L==="number"||typeof L==="boolean")C[0]=L;else if(L.isMatrix3)C[0]=L.elements[0],C[1]=L.elements[1],C[2]=L.elements[2],C[3]=0,C[4]=L.elements[3],C[5]=L.elements[4],C[6]=L.elements[5],C[7]=0,C[8]=L.elements[6],C[9]=L.elements[7],C[10]=L.elements[8],C[11]=0;else if(ArrayBuffer.isView(L))C.set(new L.constructor(L.buffer,L.byteOffset,C.length));else L.toArray(C,A)}function B(L,C,A,w){let D=L.value,I=C+"_"+A;if(w[I]===void 0){if(typeof D==="number"||typeof D==="boolean")w[I]=D;else if(ArrayBuffer.isView(D))w[I]=D.slice();else w[I]=D.clone();return!0}else{let m=w[I];if(typeof D==="number"||typeof D==="boolean"){if(m!==D)return w[I]=D,!0}else if(ArrayBuffer.isView(D))return!0;else if(m.equals(D)===!1)return m.copy(D),!0}return!1}function R(L){let C=L.uniforms,A=0,w=16;for(let I=0,m=C.length;I<m;I++){let f=Array.isArray(C[I])?C[I]:[C[I]];for(let x=0,o=f.length;x<o;x++){let y=f[x],u=Array.isArray(y.value)?y.value:[y.value];for(let e=0,d=u.length;e<d;e++){let U0=u[e],s=O(U0),J0=A%w,Z0=J0%s.boundary,m0=J0+Z0;if(A+=Z0,m0!==0&&w-m0<s.storage)A+=w-m0;y.__data=new Float32Array(s.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=A,A+=s.storage}}}let D=A%w;if(D>0)A+=w-D;return L.__size=A,L.__cache={},this}function O(L){let C={boundary:0,storage:0};if(typeof L==="number"||typeof L==="boolean")C.boundary=4,C.storage=4;else if(L.isVector2)C.boundary=8,C.storage=8;else if(L.isVector3||L.isColor)C.boundary=16,C.storage=12;else if(L.isVector4)C.boundary=16,C.storage=16;else if(L.isMatrix3)C.boundary=48,C.storage=48;else if(L.isMatrix4)C.boundary=64,C.storage=64;else if(L.isTexture)S0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(L))C.boundary=16,C.storage=L.byteLength;else S0("WebGLRenderer: Unsupported uniform value type.",L);return C}function P(L){let C=L.target;C.removeEventListener("dispose",P);let A=H.indexOf(C.__bindingPointIndex);H.splice(A,1),J.deleteBuffer(Z[C.id]),delete Z[C.id],delete K[C.id]}function k(){for(let L in Z)J.deleteBuffer(Z[L]);H=[],Z={},K={}}return{bind:X,update:U,dispose:k}}var w1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),e9=null;function _1(){if(e9===null)e9=new r6(w1,16,16,U7,a9),e9.name="DFG_LUT",e9.minFilter=iJ,e9.magFilter=iJ,e9.wrapS=e7,e9.wrapT=e7,e9.generateMipmaps=!1,e9.needsUpdate=!0;return e9}class qK{constructor(J={}){let{canvas:Q=VY(),context:$=null,depth:W=!0,stencil:Z=!1,alpha:K=!1,antialias:H=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:X=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:N=!1,reversedDepthBuffer:q=!1,outputBufferType:G=p9}=J;this.isWebGLRenderer=!0;let E;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=$.getContextAttributes().alpha}else E=K;let F=G,B=new Set([cW,uW,dW]),R=new Set([p9,x8,d6,Q6,lW,mW]),O=new Uint32Array(4),P=new Int32Array(4),k=new _,L=null,C=null,A=[],w=[],D=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=x9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,m=!1,f=null,x=null,o=null,y=null;this._outputColorSpace=l9;let u=0,e=0,d=null,U0=-1,s=null,J0=new LJ,Z0=new LJ,m0=null,j0=new l0(0),BJ=0,u0=Q.width,n=Q.height,Y0=1,G0=null,g0=null,f0=new LJ(0,0,u0,n),y0=new LJ(0,0,u0,n),_J=!1,e0=new e6,QJ=!1,NJ=!1,WJ=new d0,gJ=new _,kJ=new LJ,rJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yJ=!1;function TJ(){return d===null?Y0:1}let b=$;function vJ(V,S){return Q.getContext(V,S)}let a0,DJ,z,M,v,l,W0,N0,D0,c,a,P0,w0,B0,X0,h0,p0,KJ,h,L0,i,k0,F0;try{let V={alpha:!0,depth:W,stencil:Z,antialias:H,premultipliedAlpha:Y,preserveDrawingBuffer:X,powerPreference:U,failIfMajorPerformanceCaveat:N};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${PH}`);if(Q.addEventListener("webglcontextlost",n0,!1),Q.addEventListener("webglcontextrestored",OJ,!1),Q.addEventListener("webglcontextcreationerror",XJ,!1),b===null){if(b=vJ("webgl2",V),b===null)if(vJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}Q0()}catch(V){throw Q.removeEventListener("webglcontextlost",n0,!1),Q.removeEventListener("webglcontextrestored",OJ,!1),Q.removeEventListener("webglcontextcreationerror",XJ,!1),c0("WebGLRenderer: "+V.message),V}function Q0(){if(a0=new hq(b),a0.init(),i=new M1(b,a0),DJ=new Iq(b,a0,J,i),z=new k1(b,a0),DJ.reversedDepthBuffer&&q)z.buffers.depth.setReversed(!0);x=b.createFramebuffer(),o=b.createFramebuffer(),y=b.createFramebuffer(),M=new gq(b),v=new H1,l=new D1(b,a0,z,v,DJ,i,M),W0=new fq(I),N0=new l5(b),k0=new zq(b,N0),D0=new bq(b,N0,M,k0),c=new lq(b,D0,N0,k0,M),KJ=new pq(b,DJ,l),X0=new Aq(v),a=new K1(I,W0,a0,DJ,k0,X0),P0=new I1(I,v),w0=new X1,B0=new F1(a0),p0=new Cq(I,W0,z,c,E,Y),h0=new B1(I,c,DJ),F0=new A1(b,M,DJ,z),h=new Pq(b,a0,M),L0=new xq(b,a0,M),M.programs=a.programs,I.capabilities=DJ,I.extensions=a0,I.properties=v,I.renderLists=w0,I.shadowMap=h0,I.state=z,I.info=M}if(F!==p9)D=new dq(F,Q.width,Q.height,H,W,Z);let M0=new OX(I,b);this.xr=M0,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){let V=a0.get("WEBGL_lose_context");if(V)V.loseContext()},this.forceContextRestore=function(){let V=a0.get("WEBGL_lose_context");if(V)V.restoreContext()},this.getPixelRatio=function(){return Y0},this.setPixelRatio=function(V){if(V===void 0)return;Y0=V,this.setSize(u0,n,!1)},this.getSize=function(V){return V.set(u0,n)},this.setSize=function(V,S,p=!0){if(M0.isPresenting){S0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(u0=V,n=S,Q.width=Math.floor(V*Y0),Q.height=Math.floor(S*Y0),p===!0)Q.style.width=V+"px",Q.style.height=S+"px";if(D!==null)D.setSize(Q.width,Q.height);this.setViewport(0,0,V,S)},this.getDrawingBufferSize=function(V){return V.set(u0*Y0,n*Y0).floor()},this.setDrawingBufferSize=function(V,S,p){u0=V,n=S,Y0=p,Q.width=Math.floor(V*p),Q.height=Math.floor(S*p),this.setViewport(0,0,V,S)},this.setEffects=function(V){if(F===p9){c0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(V){for(let S=0;S<V.length;S++)if(V[S].isOutputPass===!0){S0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(V||[])},this.getCurrentViewport=function(V){return V.copy(J0)},this.getViewport=function(V){return V.copy(f0)},this.setViewport=function(V,S,p,j){if(V.isVector4)f0.set(V.x,V.y,V.z,V.w);else f0.set(V,S,p,j);z.viewport(J0.copy(f0).multiplyScalar(Y0).round())},this.getScissor=function(V){return V.copy(y0)},this.setScissor=function(V,S,p,j){if(V.isVector4)y0.set(V.x,V.y,V.z,V.w);else y0.set(V,S,p,j);z.scissor(Z0.copy(y0).multiplyScalar(Y0).round())},this.getScissorTest=function(){return _J},this.setScissorTest=function(V){z.setScissorTest(_J=V)},this.setOpaqueSort=function(V){G0=V},this.setTransparentSort=function(V){g0=V},this.getClearColor=function(V){return V.copy(p0.getClearColor())},this.setClearColor=function(){p0.setClearColor(...arguments)},this.getClearAlpha=function(){return p0.getClearAlpha()},this.setClearAlpha=function(){p0.setClearAlpha(...arguments)},this.clear=function(V=!0,S=!0,p=!0){let j=0;if(V){let g=!1;if(d!==null){let R0=d.texture.format;g=B.has(R0)}if(g){let R0=d.texture.type,V0=R.has(R0),E0=p0.getClearColor(),_0=p0.getClearAlpha(),v0=E0.r,r0=E0.g,ZJ=E0.b;if(V0)O[0]=v0,O[1]=r0,O[2]=ZJ,O[3]=_0,b.clearBufferuiv(b.COLOR,0,O);else P[0]=v0,P[1]=r0,P[2]=ZJ,P[3]=_0,b.clearBufferiv(b.COLOR,0,P)}else j|=b.COLOR_BUFFER_BIT}if(S)j|=b.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(p)j|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(j!==0)b.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(V){V.setRenderer(this),f=V},this.dispose=function(){Q.removeEventListener("webglcontextlost",n0,!1),Q.removeEventListener("webglcontextrestored",OJ,!1),Q.removeEventListener("webglcontextcreationerror",XJ,!1),p0.dispose(),w0.dispose(),B0.dispose(),v.dispose(),W0.dispose(),c.dispose(),k0.dispose(),F0.dispose(),a.dispose(),M0.dispose(),M0.removeEventListener("sessionstart",I7),M0.removeEventListener("sessionend",B6),u9.stop()};function n0(V){V.preventDefault(),f6("WebGLRenderer: Context Lost."),m=!0}function OJ(){f6("WebGLRenderer: Context Restored."),m=!1;let V=M.autoReset,S=h0.enabled,p=h0.autoUpdate,j=h0.needsUpdate,g=h0.type;Q0(),M.autoReset=V,h0.enabled=S,h0.autoUpdate=p,h0.needsUpdate=j,h0.type=g}function XJ(V){c0("WebGLRenderer: A WebGL context could not be created. Reason: ",V.statusMessage)}function N9(V){let S=V.target;S.removeEventListener("dispose",N9),k9(S)}function k9(V){Y8(V),v.remove(V)}function Y8(V){let S=v.get(V).programs;if(S!==void 0){if(S.forEach(function(p){a.releaseProgram(p)}),V.isShaderMaterial)a.releaseShaderCache(V)}}this.renderBufferDirect=function(V,S,p,j,g,R0){if(S===null)S=rJ;let V0=g.isMesh&&g.matrixWorld.determinantAffine()<0,E0=C0(V,S,p,j,g);z.setMaterial(j,V0);let _0=p.index,v0=1;if(j.wireframe===!0){if(_0=D0.getWireframeAttribute(p),_0===void 0)return;v0=2}let r0=p.drawRange,ZJ=p.attributes.position,T0=r0.start*v0,EJ=(r0.start+r0.count)*v0;if(R0!==null)T0=Math.max(T0,R0.start*v0),EJ=Math.min(EJ,(R0.start+R0.count)*v0);if(_0!==null)T0=Math.max(T0,0),EJ=Math.min(EJ,_0.count);else if(ZJ!==void 0&&ZJ!==null)T0=Math.max(T0,0),EJ=Math.min(EJ,ZJ.count);let pJ=EJ-T0;if(pJ<0||pJ===1/0)return;k0.setup(g,j,E0,p,_0);let IJ,CJ=h;if(_0!==null)IJ=N0.get(_0),CJ=L0,CJ.setIndex(IJ);if(g.isMesh)if(j.wireframe===!0)z.setLineWidth(j.wireframeLinewidth*TJ()),CJ.setMode(b.LINES);else CJ.setMode(b.TRIANGLES);else if(g.isLine){let tJ=j.linewidth;if(tJ===void 0)tJ=1;if(z.setLineWidth(tJ*TJ()),g.isLineSegments)CJ.setMode(b.LINES);else if(g.isLineLoop)CJ.setMode(b.LINE_LOOP);else CJ.setMode(b.LINE_STRIP)}else if(g.isPoints)CJ.setMode(b.POINTS);else if(g.isSprite)CJ.setMode(b.TRIANGLES);if(g.isBatchedMesh)if(!a0.get("WEBGL_multi_draw")){let{_multiDrawStarts:tJ,_multiDrawCounts:I0,_multiDrawCount:W9}=g,UJ=_0?N0.get(_0).bytesPerElement:1,D9=v.get(j).currentProgram.getUniforms();for(let c9=0;c9<W9;c9++)D9.setValue(b,"_gl_DrawID",c9),CJ.render(tJ[c9]/UJ,I0[c9])}else CJ.renderMultiDraw(g._multiDrawStarts,g._multiDrawCounts,g._multiDrawCount);else if(g.isInstancedMesh)CJ.renderInstances(T0,pJ,g.count);else if(p.isInstancedBufferGeometry){let tJ=p._maxInstanceCount!==void 0?p._maxInstanceCount:1/0,I0=Math.min(p.instanceCount,tJ);CJ.renderInstances(T0,pJ,I0)}else CJ.render(T0,pJ)};function o8(V,S,p,j){if(f!==null&&V.isNodeMaterial)f.setObject(j,V);if(QJ===!0)X0.setState(V,p,!1);if(V.transparent===!0&&V.side===K9&&V.forceSinglePass===!1)V.side=Q9,V.needsUpdate=!0,t(V,S,j),V.side=h8,V.needsUpdate=!0,t(V,S,j),V.side=K9;else t(V,S,j)}this.compile=function(V,S,p=null){if(p===null)p=V;if(f!==null)f.renderStart(V,S,p);if(C=B0.get(p),C.init(S),w.push(C),p.traverseVisible(function(g){if(g.isLight&&g.layers.test(S.layers)){if(C.pushLight(g),g.castShadow)C.pushShadow(g)}}),V!==p)V.traverseVisible(function(g){if(g.isLight&&g.layers.test(S.layers)){if(C.pushLight(g),g.castShadow)C.pushShadow(g)}});if(C.setupLights(),f!==null)f.updateLights(C.state.lightsArray);if(NJ=this.localClippingEnabled,QJ=X0.init(this.clippingPlanes,NJ),QJ===!0)X0.setGlobalState(this.clippingPlanes,S);if(f!==null)h0.render(C.state.shadowsArray,p,S);let j=new Set;if(V.traverse(function(g){if(!(g.isMesh||g.isPoints||g.isLine||g.isSprite))return;let R0=g.material;if(R0)if(Array.isArray(R0))for(let V0=0;V0<R0.length;V0++){let E0=R0[V0];o8(E0,p,S,g),j.add(E0)}else o8(R0,p,S,g),j.add(R0)}),C=w.pop(),f!==null)f.renderEnd();return j},this.compileAsync=function(V,S,p=null){let j=this.compile(V,S,p);return new Promise((g)=>{function R0(){if(j.forEach(function(V0){let _0=v.get(V0).currentProgram;if(_0===void 0||_0.isReady())j.delete(V0)}),j.size===0){g(V);return}setTimeout(R0,10)}if(a0.get("KHR_parallel_shader_compile")!==null)R0();else setTimeout(R0,10)})};let a8=null;function P7(V){if(a8)a8(V)}function I7(){u9.stop()}function B6(){u9.start()}let u9=new WX;if(u9.setAnimationLoop(P7),typeof self<"u")u9.setContext(self);this.setAnimationLoop=function(V){a8=V,M0.setAnimationLoop(V),V===null?u9.stop():u9.start()},M0.addEventListener("sessionstart",I7),M0.addEventListener("sessionend",B6),this.render=function(V,S){if(S!==void 0&&S.isCamera!==!0){c0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;if(f!==null)f.renderStart(V,S);let p=M0.enabled===!0&&M0.isPresenting===!0,j=D!==null&&(d===null||p)&&D.begin(I,d);if(V.matrixWorldAutoUpdate===!0)V.updateMatrixWorld();if(S.parent===null&&S.matrixWorldAutoUpdate===!0)S.updateMatrixWorld();if(M0.enabled===!0&&M0.isPresenting===!0&&(D===null||D.isCompositing()===!1)){if(M0.cameraAutoUpdate===!0)M0.updateCamera(S);S=M0.getCamera()}if(V.isScene===!0)V.onBeforeRender(I,V,S,d);if(C=B0.get(V,w.length),C.init(S),C.state.textureUnits=l.getTextureUnits(),w.push(C),WJ.multiplyMatrices(S.projectionMatrix,S.matrixWorldInverse),e0.setFromProjectionMatrix(WJ,AZ,S.reversedDepth),NJ=this.localClippingEnabled,QJ=X0.init(this.clippingPlanes,NJ),L=w0.get(V,A.length),L.init(),A.push(L),M0.enabled===!0&&M0.isPresenting===!0){let V0=I.xr.getDepthSensingMesh();if(V0!==null)A7(V0,S,-1/0,I.sortObjects)}if(A7(V,S,0,I.sortObjects),L.finish(),f!==null)f.updateLights(C.state.lightsArray);if(I.sortObjects===!0)L.sort(G0,g0);if(yJ=M0.enabled===!1||M0.isPresenting===!1||M0.hasDepthSensing()===!1,yJ)p0.addToRenderList(L,V);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(QJ===!0)X0.beginShadows();let g=C.state.shadowsArray;if(h0.render(g,V,S),QJ===!0)X0.endShadows();if((j&&D.hasRenderPass())===!1){let{opaque:V0,transmissive:E0}=L;if(C.setupLights(),S.isArrayCamera){let _0=S.cameras;if(E0.length>0)for(let v0=0,r0=_0.length;v0<r0;v0++){let ZJ=_0[v0];D6(V0,E0,V,ZJ)}if(yJ)p0.render(V);for(let v0=0,r0=_0.length;v0<r0;v0++){let ZJ=_0[v0];k6(L,V,ZJ,ZJ.viewport)}}else{if(E0.length>0)D6(V0,E0,V,S);if(yJ)p0.render(V);k6(L,V,S)}}if(d!==null&&e===0)l.updateMultisampleRenderTarget(d),l.updateRenderTargetMipmap(d);if(j)D.end(I);if(V.isScene===!0)V.onAfterRender(I,V,S);if(k0.resetDefaultState(),U0=-1,s=null,w.pop(),w.length>0){if(C=w[w.length-1],l.setTextureUnits(C.state.textureUnits),QJ===!0)X0.setGlobalState(I.clippingPlanes,C.state.camera)}else C=null;if(A.pop(),A.length>0)L=A[A.length-1];else L=null;if(f!==null)f.renderEnd()};function A7(V,S,p,j){if(V.visible===!1)return;if(V.layers.test(S.layers)){if(V.isGroup)p=V.renderOrder;else if(V.isLOD){if(V.autoUpdate===!0)V.update(S)}else if(V.isLightProbeGrid)C.pushLightProbeGrid(V);else if(V.isLight){if(C.pushLight(V),V.castShadow)C.pushShadow(V)}else if(V.isSprite){if(!V.frustumCulled||V.intersectsFrustum(e0)){if(j)kJ.setFromMatrixPosition(V.matrixWorld).applyMatrix4(WJ);let V0=c.update(V),E0=V.material;if(E0.visible)L.push(V,V0,E0,p,kJ.z,null,S)}}else if(V.isMesh||V.isLine||V.isPoints){if(!V.frustumCulled||V.intersectsFrustum(e0)){let V0=c.update(V),E0=V.material;if(j){if(V.boundingSphere!==void 0){if(V.boundingSphere===null)V.computeBoundingSphere();kJ.copy(V.boundingSphere.center)}else{if(V0.boundingSphere===null)V0.computeBoundingSphere();kJ.copy(V0.boundingSphere.center)}kJ.applyMatrix4(V.matrixWorld).applyMatrix4(WJ)}if(Array.isArray(E0)){let _0=V0.groups;for(let v0=0,r0=_0.length;v0<r0;v0++){let ZJ=_0[v0],T0=E0[ZJ.materialIndex];if(T0&&T0.visible)L.push(V,V0,T0,p,kJ.z,ZJ,S)}}else if(E0.visible)L.push(V,V0,E0,p,kJ.z,null,S)}}}let R0=V.children;for(let V0=0,E0=R0.length;V0<E0;V0++)A7(R0[V0],S,p,j)}function k6(V,S,p,j){let{opaque:g,transmissive:R0,transparent:V0}=V;if(C.setupLightsView(p),QJ===!0)X0.setGlobalState(I.clippingPlanes,p);if(j)z.viewport(J0.copy(j));if(g.length>0)r8(g,S,p);if(R0.length>0)r8(R0,S,p);if(V0.length>0)r8(V0,S,p);z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function D6(V,S,p,j){if((p.isScene===!0?p.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[j.id]===void 0){let T0=a0.has("EXT_color_buffer_half_float")||a0.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[j.id]=new O9(1,1,{generateMipmaps:!0,type:T0?a9:p9,minFilter:o9,samples:Math.max(4,DJ.samples),stencilBuffer:Z,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:JJ.workingColorSpace})}let R0=C.state.transmissionRenderTarget[j.id],V0=j.viewport||J0;R0.setSize(V0.z*I.transmissionResolutionScale,V0.w*I.transmissionResolutionScale);let E0=I.getRenderTarget(),_0=I.getActiveCubeFace(),v0=I.getActiveMipmapLevel();if(I.setRenderTarget(R0),I.getClearColor(j0),BJ=I.getClearAlpha(),BJ<1)I.setClearColor(16777215,0.5);if(I.clear(),yJ)p0.render(p);let r0=I.toneMapping;I.toneMapping=x9;let ZJ=j.viewport;if(j.viewport!==void 0)j.viewport=void 0;if(C.setupLightsView(j),QJ===!0)X0.setGlobalState(I.clippingPlanes,j);if(r8(V,p,j),l.updateMultisampleRenderTarget(R0),l.updateRenderTargetMipmap(R0),a0.has("WEBGL_multisampled_render_to_texture")===!1){let T0=!1;for(let EJ=0,pJ=S.length;EJ<pJ;EJ++){let IJ=S[EJ],{object:CJ,geometry:tJ,material:I0,group:W9}=IJ;if(I0.side===K9&&CJ.layers.test(j.layers)){let UJ=I0.side;I0.side=Q9,I0.needsUpdate=!0,T(CJ,p,j,tJ,I0,W9),I0.side=UJ,I0.needsUpdate=!0,T0=!0}}if(T0===!0)l.updateMultisampleRenderTarget(R0),l.updateRenderTargetMipmap(R0)}if(I.setRenderTarget(E0,_0,v0),I.setClearColor(j0,BJ),ZJ!==void 0)j.viewport=ZJ;I.toneMapping=r0}function r8(V,S,p){let j=S.isScene===!0?S.overrideMaterial:null;for(let g=0,R0=V.length;g<R0;g++){let V0=V[g],{object:E0,geometry:_0,group:v0}=V0,r0=V0.material;if(r0.allowOverride===!0&&j!==null)r0=j;if(E0.layers.test(p.layers))T(E0,S,p,_0,r0,v0)}}function T(V,S,p,j,g,R0){if(f!==null&&g.isNodeMaterial)f.setObject(V,g);if(V.onBeforeRender(I,S,p,j,g,R0),V.modelViewMatrix.multiplyMatrices(p.matrixWorldInverse,V.matrixWorld),V.normalMatrix.getNormalMatrix(V.modelViewMatrix),g.onBeforeRender(I,S,p,j,V,R0),g.transparent===!0&&g.side===K9&&g.forceSinglePass===!1)g.side=Q9,g.needsUpdate=!0,I.renderBufferDirect(p,S,j,g,V,R0),g.side=h8,g.needsUpdate=!0,I.renderBufferDirect(p,S,j,g,V,R0),g.side=K9;else I.renderBufferDirect(p,S,j,g,V,R0);V.onAfterRender(I,S,p,j,g,R0)}function t(V,S,p){if(S.isScene!==!0)S=rJ;let j=v.get(V),g=C.state.lights,R0=C.state.shadowsArray,V0=g.state.version,E0=a.getParameters(V,g.state,R0,S,p,C.state.lightProbeGridArray),_0=a.getProgramCacheKey(E0),v0=j.programs;j.environment=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?S.environment:null,j.fog=S.fog;let r0=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap;if(j.envMap=W0.get(V.envMap||j.environment,r0),j.envMapRotation=j.environment!==null&&V.envMap===null?S.environmentRotation:V.envMapRotation,v0===void 0)V.addEventListener("dispose",N9),v0=new Map,j.programs=v0;let ZJ=v0.get(_0);if(ZJ!==void 0){if(j.currentProgram===ZJ&&j.lightsStateVersion===V0)return r(V,E0),ZJ}else{if(E0.uniforms=a.getUniforms(V),f!==null&&V.isNodeMaterial)f.build(V,p,E0);V.onBeforeCompile(E0,I),ZJ=a.acquireProgram(E0,_0),v0.set(_0,ZJ),j.uniforms=E0.uniforms}let T0=j.uniforms;if(!V.isShaderMaterial&&!V.isRawShaderMaterial||V.clipping===!0)T0.clippingPlanes=X0.uniform;if(r(V,E0),j.needsLights=q0(V),j.lightsStateVersion=V0,j.needsLights)T0.ambientLightColor.value=g.state.ambient,T0.lightProbe.value=g.state.probe,T0.sunLights.value=g.state.sun,T0.sunLightShadows.value=g.state.sunShadow,T0.directionalLights.value=g.state.directional,T0.directionalLightShadows.value=g.state.directionalShadow,T0.spotLights.value=g.state.spot,T0.spotLightShadows.value=g.state.spotShadow,T0.rectAreaLights.value=g.state.rectArea,T0.ltc_1.value=g.state.rectAreaLTC1,T0.ltc_2.value=g.state.rectAreaLTC2,T0.pointLights.value=g.state.point,T0.pointLightShadows.value=g.state.pointShadow,T0.hemisphereLights.value=g.state.hemi,T0.sunShadowMatrix.value=g.state.sunShadowMatrix,T0.sunShadowCascade.value=g.state.sunShadowCascade,T0.directionalShadowMatrix.value=g.state.directionalShadowMatrix,T0.spotLightMatrix.value=g.state.spotLightMatrix,T0.spotLightMap.value=g.state.spotLightMap,T0.pointShadowMatrix.value=g.state.pointShadowMatrix;return j.lightProbeGrid=C.state.lightProbeGridArray.length>0,j.currentProgram=ZJ,j.uniformsList=null,ZJ}function H0(V){if(V.uniformsList===null){let S=V.currentProgram.getUniforms();V.uniformsList=OQ.seqWithValue(S.seq,V.uniforms)}return V.uniformsList}function r(V,S){let p=v.get(V);p.outputColorSpace=S.outputColorSpace,p.batching=S.batching,p.batchingColor=S.batchingColor,p.instancing=S.instancing,p.instancingColor=S.instancingColor,p.instancingMorph=S.instancingMorph,p.skinning=S.skinning,p.morphTargets=S.morphTargets,p.morphNormals=S.morphNormals,p.morphColors=S.morphColors,p.morphTargetsCount=S.morphTargetsCount,p.numClippingPlanes=S.numClippingPlanes,p.numIntersection=S.numClipIntersection,p.vertexAlphas=S.vertexAlphas,p.vertexTangents=S.vertexTangents,p.toneMapping=S.toneMapping}function $0(V,S){if(V.length===0)return null;if(V.length===1)return V[0].texture!==null?V[0]:null;k.setFromMatrixPosition(S.matrixWorld);for(let p=0,j=V.length;p<j;p++){let g=V[p];if(g.texture!==null&&g.boundingBox.containsPoint(k))return g}return null}function C0(V,S,p,j,g){if(S.isScene!==!0)S=rJ;l.resetTextureUnits();let R0=S.fog,V0=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?S.environment:null,E0=d===null?I.outputColorSpace:d.isXRRenderTarget===!0?d.texture.colorSpace:JJ.workingColorSpace,_0=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,v0=W0.get(j.envMap||V0,_0),r0=j.vertexColors===!0&&!!p.attributes.color&&p.attributes.color.itemSize===4,ZJ=!!p.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),T0=!!p.morphAttributes.position,EJ=!!p.morphAttributes.normal,pJ=!!p.morphAttributes.color,IJ=x9;if(j.toneMapped){if(d===null||d.isXRRenderTarget===!0)IJ=I.toneMapping}let CJ=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,tJ=CJ!==void 0?CJ.length:0,I0=v.get(j),W9=C.state.lights;if(QJ===!0){if(NJ===!0||V!==s){let PJ=V===s&&j.id===U0;X0.setState(j,V,PJ)}}let UJ=!1;if(j.version===I0.__version){if(I0.needsLights&&I0.lightsStateVersion!==W9.state.version)UJ=!0;else if(I0.outputColorSpace!==E0)UJ=!0;else if(g.isBatchedMesh&&I0.batching===!1)UJ=!0;else if(!g.isBatchedMesh&&I0.batching===!0)UJ=!0;else if(g.isBatchedMesh&&I0.batchingColor===!0&&g._colorsTexture===null)UJ=!0;else if(g.isBatchedMesh&&I0.batchingColor===!1&&g._colorsTexture!==null)UJ=!0;else if(g.isInstancedMesh&&I0.instancing===!1)UJ=!0;else if(!g.isInstancedMesh&&I0.instancing===!0)UJ=!0;else if(g.isSkinnedMesh&&I0.skinning===!1)UJ=!0;else if(!g.isSkinnedMesh&&I0.skinning===!0)UJ=!0;else if(g.isInstancedMesh&&I0.instancingColor===!0&&g.instanceColor===null)UJ=!0;else if(g.isInstancedMesh&&I0.instancingColor===!1&&g.instanceColor!==null)UJ=!0;else if(g.isInstancedMesh&&I0.instancingMorph===!0&&g.morphTexture===null)UJ=!0;else if(g.isInstancedMesh&&I0.instancingMorph===!1&&g.morphTexture!==null)UJ=!0;else if(I0.envMap!==v0)UJ=!0;else if(j.fog===!0&&I0.fog!==R0)UJ=!0;else if(I0.numClippingPlanes!==void 0&&(I0.numClippingPlanes!==X0.numPlanes||I0.numIntersection!==X0.numIntersection))UJ=!0;else if(I0.vertexAlphas!==r0)UJ=!0;else if(I0.vertexTangents!==ZJ)UJ=!0;else if(I0.morphTargets!==T0)UJ=!0;else if(I0.morphNormals!==EJ)UJ=!0;else if(I0.morphColors!==pJ)UJ=!0;else if(I0.toneMapping!==IJ)UJ=!0;else if(I0.morphTargetsCount!==tJ)UJ=!0;else if(!!I0.lightProbeGrid!==C.state.lightProbeGridArray.length>0)UJ=!0}else UJ=!0,I0.__version=j.version;let D9=I0.currentProgram;if(UJ===!0){if(D9=t(j,S,g),f&&j.isNodeMaterial)f.onUpdateProgram(j,D9,I0)}let c9=!1,z8=!1,w7=!1,MJ=D9.getUniforms(),fJ=I0.uniforms;if(z.useProgram(D9.program))c9=!0,z8=!0,w7=!0;if(j.id!==U0)U0=j.id,z8=!0;if(I0.needsLights){let PJ=$0(C.state.lightProbeGridArray,g);if(I0.lightProbeGrid!==PJ)I0.lightProbeGrid=PJ,z8=!0}if(c9||s!==V){if(z.buffers.depth.getReversed()&&V.reversedDepth!==!0)V._reversedDepth=!0,V.updateProjectionMatrix();MJ.setValue(b,"projectionMatrix",V.projectionMatrix),MJ.setValue(b,"viewMatrix",V.matrixWorldInverse);let I8=MJ.map.cameraPosition;if(I8!==void 0)I8.setValue(b,gJ.setFromMatrixPosition(V.matrixWorld));if(DJ.logarithmicDepthBuffer)MJ.setValue(b,"logDepthBufFC",2/(Math.log(V.far+1)/Math.LN2));if(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)MJ.setValue(b,"isOrthographic",V.isOrthographicCamera===!0);if(s!==V)s=V,z8=!0,w7=!0}if(I0.needsLights){if(W9.state.sunShadowMap.length>0)MJ.setValue(b,"sunShadowMap",W9.state.sunShadowMap,l);if(W9.state.directionalShadowMap.length>0)MJ.setValue(b,"directionalShadowMap",W9.state.directionalShadowMap,l);if(W9.state.spotShadowMap.length>0)MJ.setValue(b,"spotShadowMap",W9.state.spotShadowMap,l);if(W9.state.pointShadowMap.length>0)MJ.setValue(b,"pointShadowMap",W9.state.pointShadowMap,l)}if(g.isSkinnedMesh){MJ.setOptional(b,g,"bindMatrix"),MJ.setOptional(b,g,"bindMatrixInverse");let PJ=g.skeleton;if(PJ){if(PJ.boneTexture===null)PJ.computeBoneTexture();MJ.setValue(b,"boneTexture",PJ.boneTexture,l)}}if(g.isBatchedMesh){if(MJ.setOptional(b,g,"batchingTexture"),MJ.setValue(b,"batchingTexture",g._matricesTexture,l),MJ.setOptional(b,g,"batchingIdTexture"),MJ.setValue(b,"batchingIdTexture",g._indirectTexture,l),MJ.setOptional(b,g,"batchingColorTexture"),g._colorsTexture!==null)MJ.setValue(b,"batchingColorTexture",g._colorsTexture,l)}let P8=p.morphAttributes;if(P8.position!==void 0||P8.normal!==void 0||P8.color!==void 0)KJ.update(g,p,D9);if(z8||I0.receiveShadow!==g.receiveShadow)I0.receiveShadow=g.receiveShadow,MJ.setValue(b,"receiveShadow",g.receiveShadow);if((j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&S.environment!==null)fJ.envMapIntensity.value=S.environmentIntensity;if(fJ.dfgLUT!==void 0)fJ.dfgLUT.value=_1();if(z8){if(MJ.setValue(b,"toneMappingExposure",I.toneMappingExposure),I0.needsLights)b0(fJ,w7);if(R0&&j.fog===!0)P0.refreshFogUniforms(fJ,R0);if(P0.refreshMaterialUniforms(fJ,j,Y0,n,C.state.transmissionRenderTarget[V.id]),I0.needsLights&&I0.lightProbeGrid){let PJ=I0.lightProbeGrid;fJ.probesSH.value=PJ.texture,fJ.probesMin.value.copy(PJ.boundingBox.min),fJ.probesMax.value.copy(PJ.boundingBox.max),fJ.probesResolution.value.copy(PJ.resolution)}OQ.upload(b,H0(I0),fJ,l)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0)OQ.upload(b,H0(I0),fJ,l),j.uniformsNeedUpdate=!1;if(j.isSpriteMaterial)MJ.setValue(b,"center",g.center);if(MJ.setValue(b,"modelViewMatrix",g.modelViewMatrix),MJ.setValue(b,"normalMatrix",g.normalMatrix),MJ.setValue(b,"modelMatrix",g.matrixWorld),j.uniformsGroups!==void 0){let PJ=j.uniformsGroups;for(let I8=0,_7=PJ.length;I8<_7;I8++){let fK=PJ[I8];F0.update(fK,D9),F0.bind(fK,D9)}}return D9}function b0(V,S){V.ambientLightColor.needsUpdate=S,V.lightProbe.needsUpdate=S,V.sunLights.needsUpdate=S,V.sunLightShadows.needsUpdate=S,V.directionalLights.needsUpdate=S,V.directionalLightShadows.needsUpdate=S,V.pointLights.needsUpdate=S,V.pointLightShadows.needsUpdate=S,V.spotLights.needsUpdate=S,V.spotLightShadows.needsUpdate=S,V.rectAreaLights.needsUpdate=S,V.hemisphereLights.needsUpdate=S}function q0(V){return V.isMeshLambertMaterial||V.isMeshToonMaterial||V.isMeshPhongMaterial||V.isMeshStandardMaterial||V.isShadowMaterial||V.isShaderMaterial&&V.lights===!0}this.getActiveCubeFace=function(){return u},this.getActiveMipmapLevel=function(){return e},this.getRenderTarget=function(){return d},this.setRenderTargetTextures=function(V,S,p){let j=v.get(V);if(j.__autoAllocateDepthBuffer=V.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1)j.__useRenderToTexture=!1;v.get(V.texture).__webglTexture=S,v.get(V.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:p,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(V,S){let p=v.get(V);p.__webglFramebuffer=S,p.__useDefaultFramebuffer=S===void 0},this.setRenderTarget=function(V,S=0,p=0){d=V,u=S,e=p;let j=null,g=!1,R0=!1;if(V){let E0=v.get(V);if(E0.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(b.FRAMEBUFFER,E0.__webglFramebuffer),J0.copy(V.viewport),Z0.copy(V.scissor),m0=V.scissorTest,z.viewport(J0),z.scissor(Z0),z.setScissorTest(m0),U0=-1;return}else if(E0.__webglFramebuffer===void 0)l.setupRenderTarget(V);else if(E0.__hasExternalTextures)l.rebindTextures(V,v.get(V.texture).__webglTexture,v.get(V.depthTexture).__webglTexture);else if(V.depthBuffer){let r0=V.depthTexture;if(E0.__boundDepthTexture!==r0){if(r0!==null&&v.has(r0)&&(V.width!==r0.image.width||V.height!==r0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");l.setupDepthRenderbuffer(V)}}let _0=V.texture;if(_0.isData3DTexture||_0.isDataArrayTexture||_0.isCompressedArrayTexture)R0=!0;let v0=v.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget){if(Array.isArray(v0[S]))j=v0[S][p];else j=v0[S];g=!0}else if(V.samples>0&&l.useMultisampledRTT(V)===!1)j=v.get(V).__webglMultisampledFramebuffer;else if(Array.isArray(v0))j=v0[p];else j=v0;J0.copy(V.viewport),Z0.copy(V.scissor),m0=V.scissorTest}else J0.copy(f0).multiplyScalar(Y0).floor(),Z0.copy(y0).multiplyScalar(Y0).floor(),m0=_J;if(p!==0)j=x;if(z.bindFramebuffer(b.FRAMEBUFFER,j))z.drawBuffers(V,j);if(z.viewport(J0),z.scissor(Z0),z.setScissorTest(m0),g){let E0=v.get(V.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+S,E0.__webglTexture,p)}else if(R0){let E0=S;for(let _0=0;_0<V.textures.length;_0++){let v0=v.get(V.textures[_0]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+_0,v0.__webglTexture,p,E0)}}else if(V!==null&&p!==0){let E0=v.get(V.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,E0.__webglTexture,p)}U0=-1};function A0(V){let S=v.get(V);if(S.__readFormat!==V.format||S.__readType!==V.type)S.__readFormat=V.format,S.__readType=V.type,S.__formatReadable=DJ.textureFormatReadable(V.format),S.__typeReadable=DJ.textureTypeReadable(V.type);return S}if(this.readRenderTargetPixels=function(V,S,p,j,g,R0,V0,E0=0){if(!(V&&V.isWebGLRenderTarget)){c0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _0=v.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget&&V0!==void 0)_0=_0[V0];if(_0){z.bindFramebuffer(b.FRAMEBUFFER,_0);try{let v0=V.textures[E0],r0=v0.format,ZJ=v0.type;if(V.textures.length>1)b.readBuffer(b.COLOR_ATTACHMENT0+E0);let T0=A0(v0);if(T0.__formatReadable===!1){c0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(T0.__typeReadable===!1){c0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(S>=0&&S<=V.width-j&&(p>=0&&p<=V.height-g))b.readPixels(S,p,j,g,i.convert(r0),i.convert(ZJ),R0)}finally{let v0=d!==null?v.get(d).__webglFramebuffer:null;z.bindFramebuffer(b.FRAMEBUFFER,v0)}}},this.readRenderTargetPixelsAsync=async function(V,S,p,j,g,R0,V0,E0=0){if(!(V&&V.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _0=v.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget&&V0!==void 0)_0=_0[V0];if(_0)if(S>=0&&S<=V.width-j&&(p>=0&&p<=V.height-g)){z.bindFramebuffer(b.FRAMEBUFFER,_0);let v0=V.textures[E0],r0=v0.format,ZJ=v0.type;if(V.textures.length>1)b.readBuffer(b.COLOR_ATTACHMENT0+E0);let T0=A0(v0);if(T0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(T0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let EJ=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,EJ),b.bufferData(b.PIXEL_PACK_BUFFER,R0.byteLength,b.STREAM_READ),b.readPixels(S,p,j,g,i.convert(r0),i.convert(ZJ),0),b.bindBuffer(b.PIXEL_PACK_BUFFER,null);let pJ=d!==null?v.get(d).__webglFramebuffer:null;z.bindFramebuffer(b.FRAMEBUFFER,pJ);let IJ=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await kY(b,IJ,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,EJ),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,R0),b.bindBuffer(b.PIXEL_PACK_BUFFER,null),b.deleteBuffer(EJ),b.deleteSync(IJ),R0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(V,S=null,p=0){let j=Math.pow(2,-p),g=Math.floor(V.image.width*j),R0=Math.floor(V.image.height*j),V0=S!==null?S.x:0,E0=S!==null?S.y:0;l.setTexture2D(V,0),b.copyTexSubImage2D(b.TEXTURE_2D,p,0,0,V0,E0,g,R0),z.unbindTexture()},this.copyTextureToTexture=function(V,S,p=null,j=null,g=0,R0=0){let V0,E0,_0,v0,r0,ZJ,T0,EJ,pJ,IJ=V.isCompressedTexture?V.mipmaps[R0]:V.image;if(p!==null)V0=p.max.x-p.min.x,E0=p.max.y-p.min.y,_0=p.isBox3?p.max.z-p.min.z:1,v0=p.min.x,r0=p.min.y,ZJ=p.isBox3?p.min.z:0;else{let fJ=Math.pow(2,-g);if(V0=Math.floor(IJ.width*fJ),E0=Math.floor(IJ.height*fJ),V.isDataArrayTexture)_0=IJ.depth;else if(V.isData3DTexture)_0=Math.floor(IJ.depth*fJ);else _0=1;v0=0,r0=0,ZJ=0}if(j!==null)T0=j.x,EJ=j.y,pJ=j.z;else T0=0,EJ=0,pJ=0;let CJ=i.convert(S.format),tJ=i.convert(S.type),I0;if(S.isData3DTexture)l.setTexture3D(S,0),I0=b.TEXTURE_3D;else if(S.isDataArrayTexture||S.isCompressedArrayTexture)l.setTexture2DArray(S,0),I0=b.TEXTURE_2D_ARRAY;else l.setTexture2D(S,0),I0=b.TEXTURE_2D;z.activeTexture(b.TEXTURE0),z.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,S.flipY),z.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),z.pixelStorei(b.UNPACK_ALIGNMENT,S.unpackAlignment);let W9=z.getParameter(b.UNPACK_ROW_LENGTH),UJ=z.getParameter(b.UNPACK_IMAGE_HEIGHT),D9=z.getParameter(b.UNPACK_SKIP_PIXELS),c9=z.getParameter(b.UNPACK_SKIP_ROWS),z8=z.getParameter(b.UNPACK_SKIP_IMAGES);z.pixelStorei(b.UNPACK_ROW_LENGTH,IJ.width),z.pixelStorei(b.UNPACK_IMAGE_HEIGHT,IJ.height),z.pixelStorei(b.UNPACK_SKIP_PIXELS,v0),z.pixelStorei(b.UNPACK_SKIP_ROWS,r0),z.pixelStorei(b.UNPACK_SKIP_IMAGES,ZJ);let w7=V.isDataArrayTexture||V.isData3DTexture,MJ=S.isDataArrayTexture||S.isData3DTexture;if(V.isDepthTexture){let fJ=v.get(V),P8=v.get(S),PJ=v.get(fJ.__renderTarget),I8=v.get(P8.__renderTarget);z.bindFramebuffer(b.READ_FRAMEBUFFER,PJ.__webglFramebuffer),z.bindFramebuffer(b.DRAW_FRAMEBUFFER,I8.__webglFramebuffer);for(let _7=0;_7<_0;_7++){if(w7)b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,v.get(V).__webglTexture,g,ZJ+_7),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,v.get(S).__webglTexture,R0,pJ+_7);b.blitFramebuffer(v0,r0,V0,E0,T0,EJ,V0,E0,b.DEPTH_BUFFER_BIT,b.NEAREST)}z.bindFramebuffer(b.READ_FRAMEBUFFER,null),z.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(g!==0||V.isRenderTargetTexture||v.has(V)){let fJ=v.get(V),P8=v.get(S);z.bindFramebuffer(b.READ_FRAMEBUFFER,o),z.bindFramebuffer(b.DRAW_FRAMEBUFFER,y);for(let PJ=0;PJ<_0;PJ++){if(w7)b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,fJ.__webglTexture,g,ZJ+PJ);else b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,fJ.__webglTexture,g);if(MJ)b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,P8.__webglTexture,R0,pJ+PJ);else b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,P8.__webglTexture,R0);if(g!==0)b.blitFramebuffer(v0,r0,V0,E0,T0,EJ,V0,E0,b.COLOR_BUFFER_BIT,b.NEAREST);else if(MJ)b.copyTexSubImage3D(I0,R0,T0,EJ,pJ+PJ,v0,r0,V0,E0);else b.copyTexSubImage2D(I0,R0,T0,EJ,v0,r0,V0,E0)}z.bindFramebuffer(b.READ_FRAMEBUFFER,null),z.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(MJ)if(V.isDataTexture||V.isData3DTexture)b.texSubImage3D(I0,R0,T0,EJ,pJ,V0,E0,_0,CJ,tJ,IJ.data);else if(S.isCompressedArrayTexture)b.compressedTexSubImage3D(I0,R0,T0,EJ,pJ,V0,E0,_0,CJ,IJ.data);else b.texSubImage3D(I0,R0,T0,EJ,pJ,V0,E0,_0,CJ,tJ,IJ);else if(V.isDataTexture)b.texSubImage2D(b.TEXTURE_2D,R0,T0,EJ,V0,E0,CJ,tJ,IJ.data);else if(V.isCompressedTexture)b.compressedTexSubImage2D(b.TEXTURE_2D,R0,T0,EJ,IJ.width,IJ.height,CJ,IJ.data);else b.texSubImage2D(b.TEXTURE_2D,R0,T0,EJ,V0,E0,CJ,tJ,IJ);if(z.pixelStorei(b.UNPACK_ROW_LENGTH,W9),z.pixelStorei(b.UNPACK_IMAGE_HEIGHT,UJ),z.pixelStorei(b.UNPACK_SKIP_PIXELS,D9),z.pixelStorei(b.UNPACK_SKIP_ROWS,c9),z.pixelStorei(b.UNPACK_SKIP_IMAGES,z8),R0===0&&S.generateMipmaps)b.generateMipmap(I0);z.unbindTexture()},this.initRenderTarget=function(V){if(v.get(V).__webglFramebuffer===void 0)l.setupRenderTarget(V)},this.initTexture=function(V){if(V.isCubeTexture)l.setTextureCube(V,0);else if(V.isData3DTexture)l.setTexture3D(V,0);else if(V.isDataArrayTexture||V.isCompressedArrayTexture)l.setTexture2DArray(V,0);else l.setTexture2D(V,0);z.unbindTexture()},this.resetState=function(){u=0,e=0,d=null,z.reset(),k0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return AZ}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=JJ._getDrawingBufferColorSpace(J),Q.unpackColorSpace=JJ._getUnpackColorSpace()}}function VX(J,Q=!1){let $=J[0].index!==null,W=new Set(Object.keys(J[0].attributes)),Z=new Set(Object.keys(J[0].morphAttributes)),K={},H={},Y=J[0].morphTargetsRelative,X=new wJ,U=0;for(let N=0;N<J.length;++N){let q=J[N],G=0;if($!==(q.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let E in q.attributes){if(!W.has(E))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+'. All geometries must have compatible attributes; make sure "'+E+'" attribute exists among all geometries, or in none of them.'),null;if(K[E]===void 0)K[E]=[];K[E].push(q.attributes[E]),G++}if(G!==W.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". Make sure all geometries have the same number of attributes."),null;if(Y!==q.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let E in q.morphAttributes){if(!Z.has(E))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+".  .morphAttributes must be consistent throughout all geometries."),null;if(H[E]===void 0)H[E]=[];H[E].push(q.morphAttributes[E])}if(Q){let E;if($)E=q.index.count;else if(q.attributes.position!==void 0)E=q.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". The geometry must have either an index or a position attribute"),null;X.addGroup(U,E,N),U+=E}}if($){let N=0,q=[];for(let G=0;G<J.length;++G){let E=J[G].index;for(let F=0;F<E.count;++F)q.push(E.getX(F)+N);N+=J[G].attributes.position.count}X.setIndex(q)}for(let N in K){let q=LX(K[N]);if(!q)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+N+" attribute."),null;X.setAttribute(N,q)}for(let N in H){let q=H[N][0].length;if(q===0)continue;X.morphAttributes=X.morphAttributes||{},X.morphAttributes[N]=[];for(let G=0;G<q;++G){let E=[];for(let B=0;B<H[N].length;++B)E.push(H[N][B][G]);let F=LX(E);if(!F)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+N+" morphAttribute."),null;X.morphAttributes[N].push(F)}}return X}function LX(J){let Q,$,W,Z=-1,K=0;for(let U=0;U<J.length;++U){let N=J[U];if(Q===void 0)Q=N.array.constructor;if(Q!==N.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if($===void 0)$=N.itemSize;if($!==N.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(W===void 0)W=N.normalized;if(W!==N.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(Z===-1)Z=N.gpuType;if(Z!==N.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;K+=N.count*$}let H=new Q(K),Y=new dJ(H,$,W),X=0;for(let U=0;U<J.length;++U){let N=J[U];if(N.isInterleavedBufferAttribute){let q=X/$;for(let G=0,E=N.count;G<E;G++)for(let F=0;F<$;F++){let B=N.getComponent(G,F);Y.setComponent(G+q,F,B)}}else H.set(N.array,X);X+=N.count*$}if(Z!==void 0)Y.gpuType=Z;return Y}function FK(J,Q){if(Q===CZ)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if(Q===$6||Q===u6){let $=J.getIndex();if($===null){let K=[],H=J.getAttribute("position");if(H!==void 0){for(let Y=0;Y<H.count;Y++)K.push(Y);J.setIndex(K),$=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let W=$.count-2,Z=[];if(Q===$6)for(let K=1;K<=W;K++)Z.push($.getX(0)),Z.push($.getX(K)),Z.push($.getX(K+1));else for(let K=0;K<W;K++)if(K%2===0)Z.push($.getX(K)),Z.push($.getX(K+1)),Z.push($.getX(K+2));else Z.push($.getX(K+2)),Z.push($.getX(K+1)),Z.push($.getX(K));if(Z.length/3!==W)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return J.setIndex(Z),J.clearGroups(),J}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",Q),J}function d$(J){let Q=new Map,$=new Map,W=J.clone();return BX(J,W,function(Z,K){Q.set(K,Z),$.set(Z,K)}),W.traverse(function(Z){if(!Z.isSkinnedMesh)return;let K=Z,H=Q.get(Z),Y=H.skeleton.bones;K.skeleton=H.skeleton.clone(),K.bindMatrix.copy(H.bindMatrix),K.skeleton.bones=Y.map(function(X){return $.get(X)}),K.bind(K.skeleton,K.bindMatrix)}),W}function BX(J,Q,$){$(J,Q);for(let W=0;W<J.children.length;W++)BX(J.children[W],Q.children[W],$)}class DK extends B8{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(Q){return new AX(Q)}),this.register(function(Q){return new wX(Q)}),this.register(function(Q){return new bX(Q)}),this.register(function(Q){return new xX(Q)}),this.register(function(Q){return new gX(Q)}),this.register(function(Q){return new TX(Q)}),this.register(function(Q){return new SX(Q)}),this.register(function(Q){return new jX(Q)}),this.register(function(Q){return new yX(Q)}),this.register(function(Q){return new IX(Q)}),this.register(function(Q){return new vX(Q)}),this.register(function(Q){return new _X(Q)}),this.register(function(Q){return new hX(Q)}),this.register(function(Q){return new fX(Q)}),this.register(function(Q){return new zX(Q)}),this.register(function(Q){return new VK(Q,$J.EXT_MESHOPT_COMPRESSION)}),this.register(function(Q){return new VK(Q,$J.KHR_MESHOPT_COMPRESSION)}),this.register(function(Q){return new pX(Q)})}load(J,Q,$,W){let Z=this,K;if(this.resourcePath!=="")K=this.resourcePath;else if(this.path!==""){let X=c8.extractUrlBase(J);K=c8.resolveURL(X,this.path)}else K=c8.extractUrlBase(J);this.manager.itemStart(J);let H=function(X){if(W)W(X);else console.error(X);Z.manager.itemError(J),Z.manager.itemEnd(J)},Y=new XQ(this.manager);Y.setPath(this.path),Y.setResponseType("arraybuffer"),Y.setRequestHeader(this.requestHeader),Y.setWithCredentials(this.withCredentials),Y.load(J,function(X){try{Z.parse(X,K,function(U){Q(U),Z.manager.itemEnd(J)},H)}catch(U){H(U)}},$,H)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,Q,$,W){let Z,K={},H={},Y=new TextDecoder;if(typeof J==="string")Z=JSON.parse(J);else if(J instanceof ArrayBuffer)if(Y.decode(new Uint8Array(J,0,4))===lX){try{K[$J.KHR_BINARY_GLTF]=new mX(J)}catch(N){if(W)W(N);return}Z=JSON.parse(K[$J.KHR_BINARY_GLTF].content)}else Z=JSON.parse(Y.decode(J));else Z=J;if(Z.asset===void 0||Z.asset.version[0]<2){if(W)W(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let X=new sX(Z,{path:Q||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});X.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let N=this.pluginCallbacks[U](X);if(!N.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");H[N.name]=N,K[N.name]=!0}if(Z.extensionsUsed)for(let U=0;U<Z.extensionsUsed.length;++U){let N=Z.extensionsUsed[U],q=Z.extensionsRequired||[];switch(N){case $J.KHR_MATERIALS_UNLIT:K[N]=new PX;break;case $J.KHR_DRACO_MESH_COMPRESSION:K[N]=new dX(Z,this.dracoLoader);break;case $J.KHR_TEXTURE_TRANSFORM:K[N]=new uX;break;case $J.KHR_MESH_QUANTIZATION:K[N]=new cX;break;default:if(q.indexOf(N)>=0&&H[N]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+N+'".')}}X.setExtensions(K),X.setPlugins(H),X.parse($,W)}parseAsync(J,Q){let $=this;return new Promise(function(W,Z){$.parse(J,Q,W,Z)})}}function T1(){let J={};return{get:function(Q){return J[Q]},add:function(Q,$){J[Q]=$},remove:function(Q){delete J[Q]},removeAll:function(){J={}}}}function bJ(J,Q,$){let W=J.json.materials[Q];if(W.extensions&&W.extensions[$])return W.extensions[$];return null}var $J={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class zX{constructor(J){this.parser=J,this.name=$J.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,Q=this.parser.json.nodes||[];for(let $=0,W=Q.length;$<W;$++){let Z=Q[$];if(Z.extensions&&Z.extensions[this.name]&&Z.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,Z.extensions[this.name].light)}}_loadLight(J){let Q=this.parser,$="light:"+J,W=Q.cache.get($);if(W)return W;let Z=Q.json,Y=((Z.extensions&&Z.extensions[this.name]||{}).lights||[])[J],X,U=new l0(16777215);if(Y.color!==void 0)U.setRGB(Y.color[0],Y.color[1],Y.color[2],F9);let N=Y.range!==void 0?Y.range:0;switch(Y.type){case"directional":X=new U6(U),X.target.position.set(0,0,-1),X.add(X.target);break;case"point":X=new u8(U),X.distance=N;break;case"spot":X=new X6(U),X.distance=N,Y.spot=Y.spot||{},Y.spot.innerConeAngle=Y.spot.innerConeAngle!==void 0?Y.spot.innerConeAngle:0,Y.spot.outerConeAngle=Y.spot.outerConeAngle!==void 0?Y.spot.outerConeAngle:Math.PI/4,X.angle=Y.spot.outerConeAngle,X.penumbra=1-Y.spot.innerConeAngle/Y.spot.outerConeAngle,X.target.position.set(0,0,-1),X.add(X.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+Y.type)}if(X.position.set(0,0,0),Q8(X,Y),Y.intensity!==void 0)X.intensity=Y.intensity;return X.name=Q.createUniqueName(Y.name||"light_"+J),W=Promise.resolve(X),Q.cache.add($,W),W}getDependency(J,Q){if(J!=="light")return;return this._loadLight(Q)}createNodeAttachment(J){let Q=this,$=this.parser,Z=$.json.nodes[J],H=(Z.extensions&&Z.extensions[this.name]||{}).light;if(H===void 0)return null;return this._loadLight(H).then(function(Y){return $._getNodeRef(Q.cache,H,Y)})}}class PX{constructor(){this.name=$J.KHR_MATERIALS_UNLIT}getMaterialType(){return oJ}extendParams(J,Q,$){let W=[];J.color=new l0(1,1,1),J.opacity=1;let Z=Q.pbrMetallicRoughness;if(Z){if(Array.isArray(Z.baseColorFactor)){let K=Z.baseColorFactor;J.color.setRGB(K[0],K[1],K[2],F9),J.opacity=K[3]}if(Z.baseColorTexture!==void 0)W.push($.assignTexture(J,"map",Z.baseColorTexture,l9))}return Promise.all(W)}}class IX{constructor(J){this.parser=J,this.name=$J.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,Q){let $=bJ(this.parser,J,this.name);if($===null)return Promise.resolve();if($.emissiveStrength!==void 0)Q.emissiveIntensity=$.emissiveStrength;return Promise.resolve()}}class AX{constructor(J){this.parser=J,this.name=$J.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){return bJ(this.parser,J,this.name)!==null?L9:null}extendMaterialParams(J,Q){let $=bJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.clearcoatFactor!==void 0)Q.clearcoat=$.clearcoatFactor;if($.clearcoatTexture!==void 0)W.push(this.parser.assignTexture(Q,"clearcoatMap",$.clearcoatTexture));if($.clearcoatRoughnessFactor!==void 0)Q.clearcoatRoughness=$.clearcoatRoughnessFactor;if($.clearcoatRoughnessTexture!==void 0)W.push(this.parser.assignTexture(Q,"clearcoatRoughnessMap",$.clearcoatRoughnessTexture));if($.clearcoatNormalTexture!==void 0){if(W.push(this.parser.assignTexture(Q,"clearcoatNormalMap",$.clearcoatNormalTexture)),$.clearcoatNormalTexture.scale!==void 0){let Z=$.clearcoatNormalTexture.scale;Q.clearcoatNormalScale=new K0(Z,Z)}}return Promise.all(W)}}class wX{constructor(J){this.parser=J,this.name=$J.KHR_MATERIALS_DISPERSION}getMaterialType(J){return bJ(this.parser,J,this.name)!==null?L9:null}extendMaterialParams(J,Q){let $=bJ(this.parser,J,this.name);if($===null)return Promise.resolve();return Q.dispersion=$.dispersion!==void 0?$.dispersion:0,Promise.resolve()}}class _X{constructor(J){this.parser=J,this.name=$J.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){return bJ(this.parser,J,this.name)!==null?L9:null}extendMaterialParams(J,Q){let $=bJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.iridescenceFactor!==void 0)Q.iridescence=$.iridescenceFactor;if($.iridescenceTexture!==void 0)W.push(this.parser.assignTexture(Q,"iridescenceMap",$.iridescenceTexture));if($.iridescenceIor!==void 0)Q.iridescenceIOR=$.iridescenceIor;if(Q.iridescenceThicknessRange===void 0)Q.iridescenceThicknessRange=[100,400];if($.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessRange[0]=$.iridescenceThicknessMinimum;if($.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessRange[1]=$.iridescenceThicknessMaximum;if($.iridescenceThicknessTexture!==void 0)W.push(this.parser.assignTexture(Q,"iridescenceThicknessMap",$.iridescenceThicknessTexture));return Promise.all(W)}}class TX{constructor(J){this.parser=J,this.name=$J.KHR_MATERIALS_SHEEN}getMaterialType(J){return bJ(this.parser,J,this.name)!==null?L9:null}extendMaterialParams(J,Q){let $=bJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.sheenColor=new l0(0,0,0),Q.sheenRoughness=0,Q.sheen=1,$.sheenColorFactor!==void 0){let Z=$.sheenColorFactor;Q.sheenColor.setRGB(Z[0],Z[1],Z[2],F9)}if($.sheenRoughnessFactor!==void 0)Q.sheenRoughness=$.sheenRoughnessFactor;if($.sheenColorTexture!==void 0)W.push(this.parser.assignTexture(Q,"sheenColorMap",$.sheenColorTexture,l9));if($.sheenRoughnessTexture!==void 0)W.push(this.parser.assignTexture(Q,"sheenRoughnessMap",$.sheenRoughnessTexture));return Promise.all(W)}}class SX{constructor(J){this.parser=J,this.name=$J.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){return bJ(this.parser,J,this.name)!==null?L9:null}extendMaterialParams(J,Q){let $=bJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.transmissionFactor!==void 0)Q.transmission=$.transmissionFactor;if($.transmissionTexture!==void 0)W.push(this.parser.assignTexture(Q,"transmissionMap",$.transmissionTexture));return Promise.all(W)}}class jX{constructor(J){this.parser=J,this.name=$J.KHR_MATERIALS_VOLUME}getMaterialType(J){return bJ(this.parser,J,this.name)!==null?L9:null}extendMaterialParams(J,Q){let $=bJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.thickness=$.thicknessFactor!==void 0?$.thicknessFactor:0,$.thicknessTexture!==void 0)W.push(this.parser.assignTexture(Q,"thicknessMap",$.thicknessTexture));Q.attenuationDistance=$.attenuationDistance||1/0;let Z=$.attenuationColor||[1,1,1];return Q.attenuationColor=new l0().setRGB(Z[0],Z[1],Z[2],F9),Promise.all(W)}}class yX{constructor(J){this.parser=J,this.name=$J.KHR_MATERIALS_IOR}getMaterialType(J){return bJ(this.parser,J,this.name)!==null?L9:null}extendMaterialParams(J,Q){let $=bJ(this.parser,J,this.name);if($===null)return Promise.resolve();if(Q.ior=$.ior!==void 0?$.ior:1.5,Q.ior===0)Q.ior=1000;return Promise.resolve()}}class vX{constructor(J){this.parser=J,this.name=$J.KHR_MATERIALS_SPECULAR}getMaterialType(J){return bJ(this.parser,J,this.name)!==null?L9:null}extendMaterialParams(J,Q){let $=bJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.specularIntensity=$.specularFactor!==void 0?$.specularFactor:1,$.specularTexture!==void 0)W.push(this.parser.assignTexture(Q,"specularIntensityMap",$.specularTexture));let Z=$.specularColorFactor||[1,1,1];if(Q.specularColor=new l0().setRGB(Z[0],Z[1],Z[2],F9),$.specularColorTexture!==void 0)W.push(this.parser.assignTexture(Q,"specularColorMap",$.specularColorTexture,l9));return Promise.all(W)}}class fX{constructor(J){this.parser=J,this.name=$J.EXT_MATERIALS_BUMP}getMaterialType(J){return bJ(this.parser,J,this.name)!==null?L9:null}extendMaterialParams(J,Q){let $=bJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.bumpScale=$.bumpFactor!==void 0?$.bumpFactor:1,$.bumpTexture!==void 0)W.push(this.parser.assignTexture(Q,"bumpMap",$.bumpTexture));return Promise.all(W)}}class hX{constructor(J){this.parser=J,this.name=$J.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){return bJ(this.parser,J,this.name)!==null?L9:null}extendMaterialParams(J,Q){let $=bJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.anisotropyStrength!==void 0)Q.anisotropy=$.anisotropyStrength;if($.anisotropyRotation!==void 0)Q.anisotropyRotation=$.anisotropyRotation;if($.anisotropyTexture!==void 0)W.push(this.parser.assignTexture(Q,"anisotropyMap",$.anisotropyTexture));return Promise.all(W)}}class bX{constructor(J){this.parser=J,this.name=$J.KHR_TEXTURE_BASISU}loadTexture(J){let Q=this.parser,$=Q.json,W=$.textures[J];if(!W.extensions||!W.extensions[this.name])return null;let Z=W.extensions[this.name],K=Q.options.ktx2Loader;if(!K)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return Q.loadTextureImage(J,Z.source,K)}}class xX{constructor(J){this.parser=J,this.name=$J.EXT_TEXTURE_WEBP}loadTexture(J){let Q=this.name,$=this.parser,W=$.json,Z=W.textures[J];if(!Z.extensions||!Z.extensions[Q])return null;let K=Z.extensions[Q],H=W.images[K.source],Y=$.textureLoader;if(H.uri){let X=$.options.manager.getHandler(H.uri);if(X!==null)Y=X}return $.loadTextureImage(J,K.source,Y)}}class gX{constructor(J){this.parser=J,this.name=$J.EXT_TEXTURE_AVIF}loadTexture(J){let Q=this.name,$=this.parser,W=$.json,Z=W.textures[J];if(!Z.extensions||!Z.extensions[Q])return null;let K=Z.extensions[Q],H=W.images[K.source],Y=$.textureLoader;if(H.uri){let X=$.options.manager.getHandler(H.uri);if(X!==null)Y=X}return $.loadTextureImage(J,K.source,Y)}}class VK{constructor(J,Q){this.name=Q,this.parser=J}loadBufferView(J){let Q=this.parser.json,$=Q.bufferViews[J];if($.extensions&&$.extensions[this.name]){let W=$.extensions[this.name],Z=this.parser.getDependency("buffer",W.buffer),K=this.parser.options.meshoptDecoder;if(!K||!K.supported)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return Z.then(function(H){let Y=W.byteOffset||0,X=W.byteLength||0,U=W.count,N=W.byteStride,q=new Uint8Array(H,Y,X);if(K.decodeGltfBufferAsync)return K.decodeGltfBufferAsync(U,N,q,W.mode,W.filter).then(function(G){return G.buffer});else return K.ready.then(function(){let G=new ArrayBuffer(U*N);return K.decodeGltfBuffer(new Uint8Array(G),U,N,q,W.mode,W.filter),G})})}else return null}}class pX{constructor(J){this.name=$J.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let Q=this.parser.json,$=Q.nodes[J];if(!$.extensions||!$.extensions[this.name]||$.mesh===void 0)return null;let W=Q.meshes[$.mesh];for(let X of W.primitives)if(X.mode!==T9.TRIANGLES&&X.mode!==T9.TRIANGLE_STRIP&&X.mode!==T9.TRIANGLE_FAN&&X.mode!==void 0)return null;let K=$.extensions[this.name].attributes,H=[],Y={};for(let X in K)H.push(this.parser.getDependency("accessor",K[X]).then((U)=>{return Y[X]=U,Y[X]}));if(H.length<1)return null;return H.push(this.parser.createNodeMesh(J)),Promise.all(H).then((X)=>{let U=X.pop(),N=U.isGroup?U.children:[U],q=X[0].count,G=[];for(let E of N){let F=new d0,B=new _,R=new GJ,O=new _(1,1,1),P=new R8(E.geometry,E.material,q);for(let L=0;L<q;L++){if(Y.TRANSLATION)B.fromBufferAttribute(Y.TRANSLATION,L);if(Y.ROTATION)R.fromBufferAttribute(Y.ROTATION,L);if(Y.SCALE)O.fromBufferAttribute(Y.SCALE,L);P.setMatrixAt(L,F.compose(B,R,O))}let k=null;for(let L in Y)if(L==="_COLOR_0"){let C=Y[L];P.instanceColor=new y8(C.array,C.itemSize,C.normalized)}else if(L!=="TRANSLATION"&&L!=="ROTATION"&&L!=="SCALE"){if(k===null){let A=P.geometry;k=new wJ,k.name=A.name;for(let w in A.attributes)k.setAttribute(w,A.attributes[w]);for(let w in A.morphAttributes)k.morphAttributes[w]=A.morphAttributes[w];if(A.index!==null)k.setIndex(A.index);k.morphTargetsRelative=A.morphTargetsRelative;for(let w of A.groups)k.addGroup(w.start,w.count,w.materialIndex);if(A.boundingBox!==null)k.boundingBox=A.boundingBox.clone();if(A.boundingSphere!==null)k.boundingSphere=A.boundingSphere.clone();k.drawRange.start=A.drawRange.start,k.drawRange.count=A.drawRange.count,k.userData=Object.assign({},A.userData),P.geometry=k}let C=Y[L];k.setAttribute(L,new y8(C.array,C.itemSize,C.normalized))}FJ.prototype.copy.call(P,E),this.parser.assignFinalMaterial(P),G.push(P)}if(U.isGroup)return U.clear(),U.add(...G),U;return G[0]})}}var lX="glTF",LQ=12,kX={JSON:1313821514,BIN:5130562};class mX{constructor(J){this.name=$J.KHR_BINARY_GLTF,this.content=null,this.body=null;let Q=new DataView(J,0,LQ),$=new TextDecoder;if(this.header={magic:$.decode(new Uint8Array(J.slice(0,4))),version:Q.getUint32(4,!0),length:Q.getUint32(8,!0)},this.header.magic!==lX)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let W=this.header.length-LQ,Z=new DataView(J,LQ),K=0;while(K<W){let H=Z.getUint32(K,!0);K+=4;let Y=Z.getUint32(K,!0);if(K+=4,Y===kX.JSON){let X=new Uint8Array(J,LQ+K,H);this.content=$.decode(X)}else if(Y===kX.BIN){let X=LQ+K;this.body=J.slice(X,X+H)}K+=H}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class dX{constructor(J,Q){if(!Q)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$J.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=Q,this.dracoLoader.preload()}decodePrimitive(J,Q){let $=this.json,W=this.dracoLoader,Z=J.extensions[this.name].bufferView,K=J.extensions[this.name].attributes,H={},Y={},X={};for(let U in K){let N=BK[U]||U.toLowerCase();H[N]=K[U]}for(let U in J.attributes){let N=BK[U]||U.toLowerCase();if(K[U]!==void 0){let q=$.accessors[J.attributes[U]],G=E6[q.componentType];X[N]=G.name,Y[N]=q.normalized===!0}}return Q.getDependency("bufferView",Z).then(function(U){return new Promise(function(N,q){W.decodeDracoFile(U,function(G){for(let E in G.attributes){let F=G.attributes[E],B=Y[E];if(B!==void 0)F.normalized=B}N(G)},H,X,F9,q)})})}}class uX{constructor(){this.name=$J.KHR_TEXTURE_TRANSFORM}extendTexture(J,Q){if((Q.texCoord===void 0||Q.texCoord===J.channel)&&Q.offset===void 0&&Q.rotation===void 0&&Q.scale===void 0)return J;if(J=J.clone(),Q.texCoord!==void 0)J.channel=Q.texCoord;if(Q.offset!==void 0)J.offset.fromArray(Q.offset);if(Q.rotation!==void 0)J.rotation=Q.rotation;if(Q.scale!==void 0)J.repeat.fromArray(Q.scale);if(Q.rotation!==void 0){let $=Math.cos(J.rotation),W=Math.sin(J.rotation);J.matrix.set(J.repeat.x*$,J.repeat.y*W,J.offset.x,-J.repeat.x*W,J.repeat.y*$,J.offset.y,0,0,1),J.matrixAutoUpdate=!1}return J.needsUpdate=!0,J}}class cX{constructor(){this.name=$J.KHR_MESH_QUANTIZATION}}class MK extends V8{constructor(J,Q,$,W){super(J,Q,$,W)}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,W=this.valueSize,Z=J*W*3+W;for(let K=0;K!==W;K++)Q[K]=$[Z+K];return Q}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=H*2,X=H*3,U=W-Q,N=($-Q)/U,q=N*N,G=q*N,E=J*X,F=E-X,B=-2*G+3*q,R=G-q,O=1-B,P=R-q+N;for(let k=0;k!==H;k++){let L=K[F+k+H],C=K[F+k+Y]*U,A=K[E+k+H],w=K[E+k]*U;Z[k]=O*L+P*C+B*A+R*w}return Z}}var S1=new GJ;class nX extends MK{interpolate_(J,Q,$,W){let Z=super.interpolate_(J,Q,$,W);return S1.fromArray(Z).normalize().toArray(Z),Z}}var T9={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},E6={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},DX={9728:g9,9729:iJ,9984:K$,9985:J6,9986:H7,9987:o9},MX={33071:e7,33648:Z$,10497:b8},OK={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},BK={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},n8={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},j1={CUBICSPLINE:void 0,LINEAR:q$,STEP:MZ},RK={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function y1(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new jJ({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:h8});return J.DefaultMaterial}function L7(J,Q,$){for(let W in $.extensions)if(J[W]===void 0)Q.userData.gltfExtensions=Q.userData.gltfExtensions||{},Q.userData.gltfExtensions[W]=$.extensions[W]}function Q8(J,Q){if(Q.extras!==void 0)if(typeof Q.extras==="object")Object.assign(J.userData,Q.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+Q.extras)}function v1(J,Q,$){let W=!1,Z=!1,K=!1;for(let U=0,N=Q.length;U<N;U++){let q=Q[U];if(q.POSITION!==void 0)W=!0;if(q.NORMAL!==void 0)Z=!0;if(q.COLOR_0!==void 0)K=!0;if(W&&Z&&K)break}if(!W&&!Z&&!K)return Promise.resolve(J);let H=[],Y=[],X=[];for(let U=0,N=Q.length;U<N;U++){let q=Q[U];if(W){let G=q.POSITION!==void 0?$.getDependency("accessor",q.POSITION):J.attributes.position;H.push(G)}if(Z){let G=q.NORMAL!==void 0?$.getDependency("accessor",q.NORMAL):J.attributes.normal;Y.push(G)}if(K){let G=q.COLOR_0!==void 0?$.getDependency("accessor",q.COLOR_0):J.attributes.color;X.push(G)}}return Promise.all([Promise.all(H),Promise.all(Y),Promise.all(X)]).then(function(U){let N=U[0],q=U[1],G=U[2];if(W)J.morphAttributes.position=N;if(Z)J.morphAttributes.normal=q;if(K)J.morphAttributes.color=G;return J.morphTargetsRelative=!0,J})}function f1(J,Q){if(J.updateMorphTargets(),Q.weights!==void 0)for(let $=0,W=Q.weights.length;$<W;$++)J.morphTargetInfluences[$]=Q.weights[$];if(Q.extras&&Array.isArray(Q.extras.targetNames)){let $=Q.extras.targetNames;if(J.morphTargetInfluences.length===$.length){J.morphTargetDictionary={};for(let W=0,Z=$.length;W<Z;W++)J.morphTargetDictionary[$[W]]=W}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function h1(J){let Q,$=J.extensions&&J.extensions[$J.KHR_DRACO_MESH_COMPRESSION];if($)Q="draco:"+$.bufferView+":"+$.indices+":"+LK($.attributes);else Q=J.indices+":"+LK(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let W=0,Z=J.targets.length;W<Z;W++)Q+=":"+LK(J.targets[W]);return Q}function LK(J){let Q="",$=Object.keys(J).sort();for(let W=0,Z=$.length;W<Z;W++)Q+=$[W]+":"+J[$[W]]+";";return Q}function kK(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function b1(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var x1=new d0;class sX{constructor(J={},Q={}){this.json=J,this.extensions={},this.plugins={},this.options=Q,this.cache=new T1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let $=!1,W=-1,Z=!1,K=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let H=navigator.userAgent;$=/^((?!chrome|android).)*safari/i.test(H)===!0;let Y=H.match(/Version\/(\d+)/);W=$&&Y?parseInt(Y[1],10):-1,Z=H.indexOf("Firefox")>-1,K=Z?H.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||$&&W<17||Z&&K<98)this.textureLoader=new y$(this.options.manager);else this.textureLoader=new h$(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new XQ(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,Q){let $=this,W=this.json,Z=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(K){return K._markDefs&&K._markDefs()}),Promise.all(this._invokeAll(function(K){return K.beforeRoot&&K.beforeRoot()})).then(function(){return Promise.all([$.getDependencies("scene"),$.getDependencies("animation"),$.getDependencies("camera")])}).then(function(K){let H={scene:K[0][W.scene||0],scenes:K[0],animations:K[1],cameras:K[2],asset:W.asset,parser:$,userData:{}};return L7(Z,H,W),Q8(H,W),Promise.all($._invokeAll(function(Y){return Y.afterRoot&&Y.afterRoot(H)})).then(function(){for(let Y of H.scenes)Y.updateMatrixWorld();J(H)})}).catch(Q)}_markDefs(){let J=this.json.nodes||[],Q=this.json.skins||[],$=this.json.meshes||[];for(let W=0,Z=Q.length;W<Z;W++){let K=Q[W].joints;for(let H=0,Y=K.length;H<Y;H++)J[K[H]].isBone=!0}for(let W=0,Z=J.length;W<Z;W++){let K=J[W];if(K.mesh!==void 0){if(this._addNodeRef(this.meshCache,K.mesh),K.skin!==void 0)$[K.mesh].isSkinnedMesh=!0}if(K.camera!==void 0)this._addNodeRef(this.cameraCache,K.camera)}}_addNodeRef(J,Q){if(Q===void 0)return;if(J.refs[Q]===void 0)J.refs[Q]=J.uses[Q]=0;J.refs[Q]++}_getNodeRef(J,Q,$){if(J.refs[Q]<=1)return $;let W=$.clone(),Z=(K,H)=>{let Y=this.associations.get(K);if(Y!=null)this.associations.set(H,Y);for(let[X,U]of K.children.entries())Z(U,H.children[X])};return Z($,W),W.name+="_instance_"+J.uses[Q]++,W}_invokeOne(J){let Q=Object.values(this.plugins);Q.push(this);for(let $=0;$<Q.length;$++){let W=J(Q[$]);if(W)return W}return null}_invokeAll(J){let Q=Object.values(this.plugins);Q.unshift(this);let $=[];for(let W=0;W<Q.length;W++){let Z=J(Q[W]);if(Z)$.push(Z)}return $}getDependency(J,Q){let $=J+":"+Q,W=this.cache.get($);if(!W){switch(J){case"scene":W=this.loadScene(Q);break;case"node":W=this._invokeOne(function(Z){return Z.loadNode&&Z.loadNode(Q)});break;case"mesh":W=this._invokeOne(function(Z){return Z.loadMesh&&Z.loadMesh(Q)});break;case"accessor":W=this.loadAccessor(Q);break;case"bufferView":W=this._invokeOne(function(Z){return Z.loadBufferView&&Z.loadBufferView(Q)});break;case"buffer":W=this.loadBuffer(Q);break;case"material":W=this._invokeOne(function(Z){return Z.loadMaterial&&Z.loadMaterial(Q)});break;case"texture":W=this._invokeOne(function(Z){return Z.loadTexture&&Z.loadTexture(Q)});break;case"skin":W=this.loadSkin(Q);break;case"animation":W=this._invokeOne(function(Z){return Z.loadAnimation&&Z.loadAnimation(Q)});break;case"camera":W=this.loadCamera(Q);break;default:if(W=this._invokeOne(function(Z){return Z!=this&&Z.getDependency&&Z.getDependency(J,Q)}),!W)throw Error("Unknown type: "+J);break}this.cache.add($,W)}return W}getDependencies(J){let Q=this.cache.get(J);if(!Q){let $=this,W=this.json[J+(J==="mesh"?"es":"s")]||[];Q=Promise.all(W.map(function(Z,K){return $.getDependency(J,K)})),this.cache.add(J,Q)}return Q}loadBuffer(J){let Q=this.json.buffers[J],$=this.fileLoader;if(Q.type&&Q.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+Q.type+" buffer type is not supported.");if(Q.uri===void 0&&J===0)return Promise.resolve(this.extensions[$J.KHR_BINARY_GLTF].body);let W=this.options;return new Promise(function(Z,K){$.load(c8.resolveURL(Q.uri,W.path),Z,void 0,function(){K(Error('THREE.GLTFLoader: Failed to load buffer "'+Q.uri+'".'))})})}loadBufferView(J){let Q=this.json.bufferViews[J];return this.getDependency("buffer",Q.buffer).then(function($){let W=Q.byteLength||0,Z=Q.byteOffset||0;return $.slice(Z,Z+W)})}loadAccessor(J){let Q=this,$=this.json,W=this.json.accessors[J];if(W.bufferView===void 0&&W.sparse===void 0){let K=OK[W.type],H=E6[W.componentType],Y=W.normalized===!0,X=new H(W.count*K);return Promise.resolve(new dJ(X,K,Y))}let Z=[];if(W.bufferView!==void 0)Z.push(this.getDependency("bufferView",W.bufferView));else Z.push(null);if(W.sparse!==void 0)Z.push(this.getDependency("bufferView",W.sparse.indices.bufferView)),Z.push(this.getDependency("bufferView",W.sparse.values.bufferView));return Promise.all(Z).then(function(K){let H=K[0],Y=OK[W.type],X=E6[W.componentType],U=X.BYTES_PER_ELEMENT,N=U*Y,q=W.byteOffset||0,G=W.bufferView!==void 0?$.bufferViews[W.bufferView].byteStride:void 0,E=W.normalized===!0,F,B;if(G&&G!==N){let R=Math.floor(q/G),O="InterleavedBuffer:"+W.bufferView+":"+W.componentType+":"+R+":"+W.count,P=Q.cache.get(O);if(!P)F=new X(H,R*G,W.count*G/U),P=new o6(F,G/U),Q.cache.add(O,P);B=new Z6(P,Y,q%G/U,E)}else{if(H===null)F=new X(W.count*Y);else F=new X(H,q,W.count*Y);B=new dJ(F,Y,E)}if(W.sparse!==void 0){let R=OK.SCALAR,O=E6[W.sparse.indices.componentType],P=W.sparse.indices.byteOffset||0,k=W.sparse.values.byteOffset||0,L=new O(K[1],P,W.sparse.count*R),C=new X(K[2],k,W.sparse.count*Y);if(H!==null)B=new dJ(B.array.slice(),B.itemSize,B.normalized);B.normalized=!1;for(let A=0,w=L.length;A<w;A++){let D=L[A];if(B.setX(D,C[A*Y]),Y>=2)B.setY(D,C[A*Y+1]);if(Y>=3)B.setZ(D,C[A*Y+2]);if(Y>=4)B.setW(D,C[A*Y+3]);if(Y>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}B.normalized=E}return B})}loadTexture(J){let Q=this.json,$=this.options,Z=Q.textures[J].source,K=Q.images[Z],H=this.textureLoader;if(K.uri){let Y=$.manager.getHandler(K.uri);if(Y!==null)H=Y}return this.loadTextureImage(J,Z,H)}loadTextureImage(J,Q,$){let W=this,Z=this.json,K=Z.textures[J],H=Z.images[Q],Y=(H.uri||H.bufferView)+":"+K.sampler;if(this.textureCache[Y])return this.textureCache[Y];let X=this.loadImageSource(Q,$).then(function(U){if(U.flipY=!1,U.name=K.name||H.name||"",U.name===""&&typeof H.uri==="string"&&H.uri.startsWith("data:image/")===!1)U.name=H.uri;let q=(Z.samplers||{})[K.sampler]||{};return U.magFilter=DX[q.magFilter]||iJ,U.minFilter=DX[q.minFilter]||o9,U.wrapS=MX[q.wrapS]||b8,U.wrapT=MX[q.wrapT]||b8,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==g9&&U.minFilter!==iJ,W.associations.set(U,{textures:J}),U}).catch(function(){return null});return this.textureCache[Y]=X,X}loadImageSource(J,Q){let $=this,W=this.json,Z=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((N)=>N.clone());let K=W.images[J],H=self.URL||self.webkitURL,Y=K.uri||"",X=!1;if(K.bufferView!==void 0)Y=$.getDependency("bufferView",K.bufferView).then(function(N){X=!0;let q=new Blob([N],{type:K.mimeType});return Y=H.createObjectURL(q),Y});else if(K.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let U=Promise.resolve(Y).then(function(N){return new Promise(function(q,G){let E=q;if(Q.isImageBitmapLoader===!0)E=function(F){let B=new hJ(F);B.needsUpdate=!0,q(B)};Q.load(c8.resolveURL(N,Z.path),E,void 0,G)})}).then(function(N){if(X===!0)H.revokeObjectURL(Y);return Q8(N,K),N.userData.mimeType=K.mimeType||b1(K.uri),N}).catch(function(N){throw console.error("THREE.GLTFLoader: Couldn't load texture",Y),N});return this.sourceCache[J]=U,U}assignTexture(J,Q,$,W){let Z=this;return this.getDependency("texture",$.index).then(function(K){if(!K)return null;if($.texCoord!==void 0&&$.texCoord>0)K=K.clone(),K.channel=$.texCoord;if(Z.extensions[$J.KHR_TEXTURE_TRANSFORM]){let H=$.extensions!==void 0?$.extensions[$J.KHR_TEXTURE_TRANSFORM]:void 0;if(H){let Y=Z.associations.get(K);K=Z.extensions[$J.KHR_TEXTURE_TRANSFORM].extendTexture(K,H),Z.associations.set(K,Y)}}if(W!==void 0)K.colorSpace=W;return J[Q]=K,K})}assignFinalMaterial(J){let{geometry:Q,material:$}=J,W=Q.attributes.tangent===void 0,Z=Q.attributes.color!==void 0,K=Q.attributes.normal===void 0;if(J.isPoints){let H="PointsMaterial:"+$.uuid,Y=this.cache.get(H);if(!Y)Y=new QQ,X9.prototype.copy.call(Y,$),Y.color.copy($.color),Y.map=$.map,Y.sizeAttenuation=!1,this.cache.add(H,Y);$=Y}else if(J.isLine){let H="LineBasicMaterial:"+$.uuid,Y=this.cache.get(H);if(!Y)Y=new JQ,X9.prototype.copy.call(Y,$),Y.color.copy($.color),Y.map=$.map,this.cache.add(H,Y);$=Y}if(W||Z||K){let H="ClonedMaterial:"+$.uuid+":";if(W)H+="derivative-tangents:";if(Z)H+="vertex-colors:";if(K)H+="flat-shading:";let Y=this.cache.get(H);if(!Y){if(Y=$.clone(),Z)Y.vertexColors=!0;if(K)Y.flatShading=!0;if(W){if(Y.normalScale)Y.normalScale.y*=-1;if(Y.clearcoatNormalScale)Y.clearcoatNormalScale.y*=-1}this.cache.add(H,Y),this.associations.set(Y,this.associations.get($))}$=Y}J.material=$}getMaterialType(){return jJ}loadMaterial(J){let Q=this,$=this.json,W=this.extensions,Z=$.materials[J],K,H={},Y=Z.extensions||{},X=[];if(Y[$J.KHR_MATERIALS_UNLIT]){let N=W[$J.KHR_MATERIALS_UNLIT];K=N.getMaterialType(),X.push(N.extendParams(H,Z,Q))}else{let N=Z.pbrMetallicRoughness||{};if(H.color=new l0(1,1,1),H.opacity=1,Array.isArray(N.baseColorFactor)){let q=N.baseColorFactor;H.color.setRGB(q[0],q[1],q[2],F9),H.opacity=q[3]}if(N.baseColorTexture!==void 0)X.push(Q.assignTexture(H,"map",N.baseColorTexture,l9));if(H.metalness=N.metallicFactor!==void 0?N.metallicFactor:1,H.roughness=N.roughnessFactor!==void 0?N.roughnessFactor:1,N.metallicRoughnessTexture!==void 0)X.push(Q.assignTexture(H,"metalnessMap",N.metallicRoughnessTexture)),X.push(Q.assignTexture(H,"roughnessMap",N.metallicRoughnessTexture));K=this._invokeOne(function(q){return q.getMaterialType&&q.getMaterialType(J)}),X.push(Promise.all(this._invokeAll(function(q){return q.extendMaterialParams&&q.extendMaterialParams(J,H)})))}if(Z.doubleSided===!0)H.side=K9;let U=Z.alphaMode||RK.OPAQUE;if(U===RK.BLEND)H.transparent=!0,H.depthWrite=!1;else if(H.transparent=!1,U===RK.MASK)H.alphaTest=Z.alphaCutoff!==void 0?Z.alphaCutoff:0.5;if(Z.normalTexture!==void 0&&K!==oJ){if(X.push(Q.assignTexture(H,"normalMap",Z.normalTexture)),H.normalScale=new K0(1,1),Z.normalTexture.scale!==void 0){let N=Z.normalTexture.scale;H.normalScale.set(N,N)}}if(Z.occlusionTexture!==void 0&&K!==oJ){if(X.push(Q.assignTexture(H,"aoMap",Z.occlusionTexture)),Z.occlusionTexture.strength!==void 0)H.aoMapIntensity=Z.occlusionTexture.strength}if(Z.emissiveFactor!==void 0&&K!==oJ){let N=Z.emissiveFactor;H.emissive=new l0().setRGB(N[0],N[1],N[2],F9)}if(Z.emissiveTexture!==void 0&&K!==oJ)X.push(Q.assignTexture(H,"emissiveMap",Z.emissiveTexture,l9));return Promise.all(X).then(function(){let N=new K(H);if(Z.name)N.name=Z.name;if(Q8(N,Z),Q.associations.set(N,{materials:J}),Z.extensions)L7(W,N,Z);return N})}createUniqueName(J){let Q=qJ.sanitizeNodeName(J||"");if(Q in this.nodeNamesUsed)return Q+"_"+ ++this.nodeNamesUsed[Q];else return this.nodeNamesUsed[Q]=0,Q}loadGeometries(J){let Q=this,$=this.extensions,W=this.primitiveCache;function Z(H){return $[$J.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(H,Q).then(function(Y){return CX(Y,H,Q)})}let K=[];for(let H=0,Y=J.length;H<Y;H++){let X=J[H],U=h1(X),N=W[U];if(N)K.push(N.promise);else{let q;if(X.extensions&&X.extensions[$J.KHR_DRACO_MESH_COMPRESSION])q=Z(X);else q=CX(new wJ,X,Q);if(X.mode===T9.TRIANGLE_STRIP)q=q.then((G)=>FK(G,u6));else if(X.mode===T9.TRIANGLE_FAN)q=q.then((G)=>FK(G,$6));W[U]={primitive:X,promise:q},K.push(q)}}return Promise.all(K)}loadMesh(J){let Q=this,$=this.json,W=this.extensions,Z=$.meshes[J],K=Z.primitives,H=[];for(let Y=0,X=K.length;Y<X;Y++){let U=K[Y].material===void 0?y1(this.cache):this.getDependency("material",K[Y].material);H.push(U)}return H.push(Q.loadGeometries(K)),Promise.all(H).then(async function(Y){let X=Y.slice(0,Y.length-1),U=Y[Y.length-1],N=[];for(let G=0,E=U.length;G<E;G++){let F=U[G],B=K[G],R,O=X[G];if(B.mode===T9.TRIANGLES||B.mode===T9.TRIANGLE_STRIP||B.mode===T9.TRIANGLE_FAN||B.mode===void 0){let P=Z.isSkinnedMesh===!0,k=F.hasAttribute("skinIndex")&&F.hasAttribute("skinWeight");if(P&&k===!1)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(R=P&&k?new B$(F,O):new x0(F,O),R.isSkinnedMesh===!0)R.normalizeSkinWeights()}else if(B.mode===T9.LINES)R=new k$(F,O);else if(B.mode===T9.LINE_STRIP)R=new K6(F,O);else if(B.mode===T9.LINE_LOOP)R=new D$(F,O);else if(B.mode===T9.POINTS)R=new M$(F,O);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+B.mode);if(Object.keys(R.geometry.morphAttributes).length>0)f1(R,Z);if(R.name=Q.createUniqueName(Z.name||"mesh_"+J),Q8(R,Z),B.extensions)L7(W,R,B);Q.assignFinalMaterial(R),N.push(R)}for(let G=0,E=N.length;G<E;G++)Q.associations.set(N[G],{meshes:J,primitives:G});if(N.length===1){if(Z.extensions)L7(W,N[0],Z);return N[0]}let q=new AJ;if(Z.extensions)L7(W,q,Z);Q.associations.set(q,{meshes:J});for(let G=0,E=N.length;G<E;G++)q.add(N[G]);return q})}loadCamera(J){let Q,$=this.json.cameras[J],W=$[$.type];if(!W){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if($.type==="perspective")Q=new mJ(c6.radToDeg(W.yfov),W.aspectRatio||1,W.znear||1,W.zfar||2000000);else if($.type==="orthographic")Q=new O7(-W.xmag,W.xmag,W.ymag,-W.ymag,W.znear,W.zfar);if($.name)Q.name=this.createUniqueName($.name);return Q8(Q,$),Promise.resolve(Q)}loadSkin(J){let Q=this.json.skins[J],$=[];for(let W=0,Z=Q.joints.length;W<Z;W++)$.push(this._loadNodeShallow(Q.joints[W]));if(Q.inverseBindMatrices!==void 0)$.push(this.getDependency("accessor",Q.inverseBindMatrices));else $.push(null);return Promise.all($).then(function(W){let Z=W.pop(),K=W,H=[],Y=[];for(let X=0,U=K.length;X<U;X++){let N=K[X];if(N){H.push(N);let q=new d0;if(Z!==null)q.fromArray(Z.array,X*16);Y.push(q)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',Q.joints[X])}return new t6(H,Y)})}loadAnimation(J){let Q=this.json,$=this,W=Q.animations[J],Z=W.name?W.name:"animation_"+J,K=[],H=[],Y=[],X=[],U=[];for(let N=0,q=W.channels.length;N<q;N++){let G=W.channels[N],E=W.samplers[G.sampler],F=G.target,B=F.node,R=W.parameters!==void 0?W.parameters[E.input]:E.input,O=W.parameters!==void 0?W.parameters[E.output]:E.output;if(F.node===void 0)continue;K.push(this.getDependency("node",B)),H.push(this.getDependency("accessor",R)),Y.push(this.getDependency("accessor",O)),X.push(E),U.push(F)}return Promise.all([Promise.all(K),Promise.all(H),Promise.all(Y),Promise.all(X),Promise.all(U)]).then(function(N){let q=N[0],G=N[1],E=N[2],F=N[3],B=N[4],R=[];for(let P=0,k=q.length;P<k;P++){let L=q[P],C=G[P],A=E[P],w=F[P],D=B[P];if(L===void 0)continue;if(L.updateMatrix)L.updateMatrix();let I=$._createAnimationTracks(L,C,A,w,D);if(I)for(let m=0;m<I.length;m++)R.push(I[m])}let O=new o7(Z,void 0,R);return Q8(O,W),O})}createNodeMesh(J){let Q=this.json,$=this,W=Q.nodes[J];if(W.mesh===void 0)return null;return $.getDependency("mesh",W.mesh).then(function(Z){let K=$._getNodeRef($.meshCache,W.mesh,Z);if(W.weights!==void 0)K.traverse(function(H){if(!H.isMesh)return;for(let Y=0,X=W.weights.length;Y<X;Y++)H.morphTargetInfluences[Y]=W.weights[Y]});return K})}loadNode(J){let Q=this.json,$=this,W=Q.nodes[J],Z=$._loadNodeShallow(J),K=[],H=W.children||[];for(let X=0,U=H.length;X<U;X++)K.push($.getDependency("node",H[X]));let Y=W.skin===void 0?Promise.resolve(null):$.getDependency("skin",W.skin);return Promise.all([Z,Promise.all(K),Y]).then(function(X){let U=X[0],N=X[1],q=X[2];if(q!==null)U.traverse(function(G){if(!G.isSkinnedMesh)return;G.bind(q,x1)});for(let G=0,E=N.length;G<E;G++)U.add(N[G]);if(U.userData.pivot!==void 0&&N.length>0){let G=U.userData.pivot,E=N[0];U.pivot=new _().fromArray(G),U.position.x-=G[0],U.position.y-=G[1],U.position.z-=G[2],E.position.set(0,0,0),delete U.userData.pivot}return U})}_loadNodeShallow(J){let Q=this.json,$=this.extensions,W=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let Z=Q.nodes[J],K=Z.name?W.createUniqueName(Z.name):"",H=[],Y=W._invokeOne(function(X){return X.createNodeMesh&&X.createNodeMesh(J)});if(Y)H.push(Y);if(Z.camera!==void 0)H.push(W.getDependency("camera",Z.camera).then(function(X){return W._getNodeRef(W.cameraCache,Z.camera,X)}));return W._invokeAll(function(X){return X.createNodeAttachment&&X.createNodeAttachment(J)}).forEach(function(X){H.push(X)}),this.nodeCache[J]=Promise.all(H).then(function(X){let U;if(Z.isBone===!0)U=new a6;else if(X.length>1)U=new AJ;else if(X.length===1)U=X[0];else U=new FJ;if(U!==X[0])for(let N=0,q=X.length;N<q;N++)U.add(X[N]);if(Z.name)U.userData.name=Z.name,U.name=K;if(Q8(U,Z),Z.extensions)L7($,U,Z);if(Z.matrix!==void 0){let N=new d0;N.fromArray(Z.matrix),U.applyMatrix4(N)}else{if(Z.translation!==void 0)U.position.fromArray(Z.translation);if(Z.rotation!==void 0)U.quaternion.fromArray(Z.rotation);if(Z.scale!==void 0)U.scale.fromArray(Z.scale)}if(!W.associations.has(U))W.associations.set(U,{});else if(Z.mesh!==void 0&&W.meshCache.refs[Z.mesh]>1){let N=W.associations.get(U);W.associations.set(U,{...N})}return W.associations.get(U).nodes=J,U}),this.nodeCache[J]}loadScene(J){let Q=this.extensions,$=this.json.scenes[J],W=this,Z=new AJ;if($.name)Z.name=W.createUniqueName($.name);if(Q8(Z,$),$.extensions)L7(Q,Z,$);let K=$.nodes||[],H=[];for(let Y=0,X=K.length;Y<X;Y++)H.push(W.getDependency("node",K[Y]));return Promise.all(H).then(function(Y){for(let U=0,N=Y.length;U<N;U++){let q=Y[U];if(q.parent!==null)Z.add(d$(q));else Z.add(q)}let X=(U)=>{let N=new Map;for(let[q,G]of W.associations)if(q instanceof X9||q instanceof hJ)N.set(q,G);return U.traverse((q)=>{let G=W.associations.get(q);if(G!=null)N.set(q,G)}),N};return W.associations=X(Z),Z})}_createAnimationTracks(J,Q,$,W,Z){let K=[],H=J.name?J.name:J.uuid,Y=[];function X(G){if(G.morphTargetInfluences)Y.push(G.name?G.name:G.uuid)}if(n8[Z.path]===n8.weights){if(X(J),J.isGroup)J.children.forEach(X)}else Y.push(H);let U;switch(n8[Z.path]){case n8.weights:U=l8;break;case n8.rotation:U=m8;break;case n8.translation:case n8.scale:U=F7;break;default:switch($.itemSize){case 1:U=l8;break;case 2:case 3:default:U=F7;break}break}let N=W.interpolation!==void 0?j1[W.interpolation]:q$,q=this._getArrayFromAccessor($);for(let G=0,E=Y.length;G<E;G++){let F=new U(Y[G]+"."+n8[Z.path],Q.array,q,N);if(W.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(F);K.push(F)}return K}_getArrayFromAccessor(J){let Q=J.array;if(J.normalized){let $=kK(Q.constructor),W=new Float32Array(Q.length);for(let Z=0,K=Q.length;Z<K;Z++)W[Z]=Q[Z]*$;Q=W}return Q}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function($){return new(this instanceof m8?nX:MK)(this.times,this.values,this.getValueSize()/3,$)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function g1(J,Q,$){let W=Q.attributes,Z=new H9;if(W.POSITION!==void 0){let Y=$.json.accessors[W.POSITION],X=Y.min,U=Y.max;if(X!==void 0&&U!==void 0){if(Z.set(new _(X[0],X[1],X[2]),new _(U[0],U[1],U[2])),Y.normalized){let N=kK(E6[Y.componentType]);Z.min.multiplyScalar(N),Z.max.multiplyScalar(N)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let K=Q.targets;if(K!==void 0){let Y=new _,X=new _;for(let U=0,N=K.length;U<N;U++){let q=K[U];if(q.POSITION!==void 0){let G=$.json.accessors[q.POSITION],E=G.min,F=G.max;if(E!==void 0&&F!==void 0){if(X.setX(Math.max(Math.abs(E[0]),Math.abs(F[0]))),X.setY(Math.max(Math.abs(E[1]),Math.abs(F[1]))),X.setZ(Math.max(Math.abs(E[2]),Math.abs(F[2]))),G.normalized){let B=kK(E6[G.componentType]);X.multiplyScalar(B)}Y.max(X)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}Z.expandByVector(Y)}J.boundingBox=Z;let H=new R9;Z.getCenter(H.center),H.radius=Z.min.distanceTo(Z.max)/2,J.boundingSphere=H}function CX(J,Q,$){let W=Q.attributes,Z=[];function K(H,Y){return $.getDependency("accessor",H).then(function(X){J.setAttribute(Y,X)})}for(let H in W){let Y=BK[H]||H.toLowerCase();if(Y in J.attributes)continue;Z.push(K(W[H],Y))}if(Q.indices!==void 0&&!J.index){let H=$.getDependency("accessor",Q.indices).then(function(Y){J.setIndex(Y)});Z.push(H)}if(JJ.workingColorSpace!==F9&&"COLOR_0"in W)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${JJ.workingColorSpace}" not supported.`);return Q8(J,Q),g1(J,Q,$),Promise.all(Z).then(function(){return Q.targets!==void 0?v1(J,Q.targets,$):J})}var iX={type:"change"},zK={type:"start"},aX={type:"end"},u$=new g8,oX=new C9,p1=Math.cos(70*c6.DEG2RAD),nJ=new _,U9=2*Math.PI,VJ={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},CK=0.000001;class PK extends x${constructor(J,Q=null){super(J,Q);if(this.state=VJ.NONE,this.target=new _,this.cursor=new _,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:v8.ROTATE,MIDDLE:v8.DOLLY,RIGHT:v8.PAN},this.touches={ONE:f8.ROTATE,TWO:f8.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new _,this._lastQuaternion=new GJ,this._lastTargetPosition=new _,this._quat=new GJ().setFromUnitVectors(J.up,new _(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new NQ,this._sphericalDelta=new NQ,this._scale=1,this._panOffset=new _,this._rotateStart=new K0,this._rotateEnd=new K0,this._rotateDelta=new K0,this._panStart=new K0,this._panEnd=new K0,this._panDelta=new K0,this._dollyStart=new K0,this._dollyEnd=new K0,this._dollyDelta=new K0,this._dollyDirection=new _,this._mouse=new K0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=m1.bind(this),this._onPointerDown=l1.bind(this),this._onPointerUp=d1.bind(this),this._onContextMenu=a1.bind(this),this._onMouseWheel=n1.bind(this),this._onKeyDown=s1.bind(this),this._onTouchStart=i1.bind(this),this._onTouchMove=o1.bind(this),this._onMouseDown=u1.bind(this),this._onMouseMove=c1.bind(this),this._interceptControlDown=r1.bind(this),this._interceptControlUp=t1.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=VJ.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let J=this.domElement.getRootNode();J.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),J.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(iX),this.update(),this.state=VJ.NONE}pan(J,Q){this._pan(J,Q),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let Q=this.object.position;if(nJ.copy(Q).sub(this.target),nJ.applyQuaternion(this._quat),this._spherical.setFromVector3(nJ),this.autoRotate&&this.state===VJ.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let $=this.minAzimuthAngle,W=this.maxAzimuthAngle;if(isFinite($)&&isFinite(W)){if($<-Math.PI)$+=U9;else if($>Math.PI)$-=U9;if(W<-Math.PI)W+=U9;else if(W>Math.PI)W-=U9;if($<=W)this._spherical.theta=Math.max($,Math.min(W,this._spherical.theta));else this._spherical.theta=this._spherical.theta>($+W)/2?Math.max($,this._spherical.theta):Math.min(W,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let Z=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let K=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),Z=K!=this._spherical.radius}if(nJ.setFromSpherical(this._spherical),nJ.applyQuaternion(this._quatInverse),Q.copy(this.target).add(nJ),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let K=null;if(this.object.isPerspectiveCamera){let H=nJ.length();K=this._clampDistance(H*this._scale);let Y=H-K;this.object.position.addScaledVector(this._dollyDirection,Y),this.object.updateMatrixWorld(),Z=!!Y}else if(this.object.isOrthographicCamera){let H=new _(this._mouse.x,this._mouse.y,0);H.unproject(this.object);let Y=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),Z=Y!==this.object.zoom;let X=new _(this._mouse.x,this._mouse.y,0);X.unproject(this.object),this.object.position.sub(X).add(H),this.object.updateMatrixWorld(),K=nJ.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(K!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(K).add(this.object.position);else if(u$.origin.copy(this.object.position),u$.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(u$.direction))<p1)this.object.lookAt(this.target);else oX.setFromNormalAndCoplanarPoint(this.object.up,this.target),u$.intersectPlane(oX,this.target)}else if(this.object.isOrthographicCamera){let K=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),K!==this.object.zoom)this.object.updateProjectionMatrix(),Z=!0}if(this._scale=1,this._performCursorZoom=!1,Z||this._lastPosition.distanceToSquared(this.object.position)>CK||8*(1-this._lastQuaternion.dot(this.object.quaternion))>CK||this._lastTargetPosition.distanceToSquared(this.target)>CK)return this.dispatchEvent(iX),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return U9/60*this.autoRotateSpeed*J;else return U9/60/60*this.autoRotateSpeed}_getZoomScale(J){let Q=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*Q)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,Q){nJ.setFromMatrixColumn(Q,0),nJ.multiplyScalar(-J),this._panOffset.add(nJ)}_panUp(J,Q){if(this.screenSpacePanning===!0)nJ.setFromMatrixColumn(Q,1);else nJ.setFromMatrixColumn(Q,0),nJ.crossVectors(this.object.up,nJ);nJ.multiplyScalar(J),this._panOffset.add(nJ)}_pan(J,Q){let $=this.domElement;if(this.object.isPerspectiveCamera){let W=this.object.position;nJ.copy(W).sub(this.target);let Z=nJ.length();Z*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*Z/$.clientHeight,this.object.matrix),this._panUp(2*Q*Z/$.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/$.clientWidth,this.object.matrix),this._panUp(Q*(this.object.top-this.object.bottom)/this.object.zoom/$.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,Q){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let $=this.domElement.getBoundingClientRect(),W=J-$.left,Z=Q-$.top,K=$.width,H=$.height;this._mouse.x=W/K*2-1,this._mouse.y=-(Z/H)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(U9*this._rotateDelta.x/Q.clientHeight),this._rotateUp(U9*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let Q=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(U9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);Q=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-U9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);Q=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(U9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);Q=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-U9*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);Q=!0;break}if(Q)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),W=0.5*(J.pageY+Q.y);this._rotateStart.set($,W)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),W=0.5*(J.pageY+Q.y);this._panStart.set($,W)}}_handleTouchStartDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,W=J.pageY-Q.y,Z=Math.sqrt($*$+W*W);this._dollyStart.set(0,Z)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),W=0.5*(J.pageX+$.x),Z=0.5*(J.pageY+$.y);this._rotateEnd.set(W,Z)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(U9*this._rotateDelta.x/Q.clientHeight),this._rotateUp(U9*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),W=0.5*(J.pageY+Q.y);this._panEnd.set($,W)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,W=J.pageY-Q.y,Z=Math.sqrt($*$+W*W);this._dollyEnd.set(0,Z),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let K=(J.pageX+Q.x)*0.5,H=(J.pageY+Q.y)*0.5;this._updateZoomParameters(K,H)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId){this._pointers.splice(Q,1);return}}_isTrackingPointer(J){for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId)return!0;return!1}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new K0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q]}_customWheelEvent(J){let Q=J.deltaMode,$={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch(Q){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)$.deltaY*=10;return $}}function l1(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function m1(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function d1(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(aX),this.state=VJ.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let Q=this._pointers[0],$=this._pointerPositions[Q];this._onTouchStart({pointerId:Q,pageX:$.x,pageY:$.y});break}}function u1(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case v8.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=VJ.DOLLY;break;case v8.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=VJ.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=VJ.ROTATE}break;case v8.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=VJ.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=VJ.PAN}break;default:this.state=VJ.NONE}if(this.state!==VJ.NONE)this.dispatchEvent(zK)}function c1(J){switch(this.state){case VJ.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case VJ.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case VJ.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function n1(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==VJ.NONE)return;J.preventDefault(),this.dispatchEvent(zK),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(aX)}function s1(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function i1(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case f8.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=VJ.TOUCH_ROTATE;break;case f8.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=VJ.TOUCH_PAN;break;default:this.state=VJ.NONE}break;case 2:switch(this.touches.TWO){case f8.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=VJ.TOUCH_DOLLY_PAN;break;case f8.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=VJ.TOUCH_DOLLY_ROTATE;break;default:this.state=VJ.NONE}break;default:this.state=VJ.NONE}if(this.state!==VJ.NONE)this.dispatchEvent(zK)}function o1(J){switch(this._trackPointer(J),this.state){case VJ.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case VJ.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case VJ.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case VJ.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=VJ.NONE}}function a1(J){if(this.enabled===!1)return;J.preventDefault()}function r1(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function t1(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}class IK extends W6{constructor(){super();this.name="RoomEnvironment",this.position.y=-3.5;let J=new aJ;J.deleteAttribute("uv");let Q=new jJ({side:Q9}),$=new jJ,W=new u8(16777215,900,28,2);W.position.set(0.418,16.199,0.3),this.add(W);let Z=new x0(J,Q);Z.position.set(-0.757,13.219,0.717),Z.scale.set(31.713,28.305,28.591),this.add(Z);let K=new R8(J,$,6),H=new FJ;H.position.set(-10.906,2.009,1.846),H.rotation.set(0,-0.195,0),H.scale.set(2.328,7.905,4.651),H.updateMatrix(),K.setMatrixAt(0,H.matrix),H.position.set(-5.607,-0.754,-0.758),H.rotation.set(0,0.994,0),H.scale.set(1.97,1.534,3.955),H.updateMatrix(),K.setMatrixAt(1,H.matrix),H.position.set(6.167,0.857,7.803),H.rotation.set(0,0.561,0),H.scale.set(3.927,6.285,3.687),H.updateMatrix(),K.setMatrixAt(2,H.matrix),H.position.set(-2.017,0.018,6.124),H.rotation.set(0,0.333,0),H.scale.set(2.002,4.566,2.064),H.updateMatrix(),K.setMatrixAt(3,H.matrix),H.position.set(2.291,-0.756,-2.621),H.rotation.set(0,-0.286,0),H.scale.set(1.546,1.552,1.496),H.updateMatrix(),K.setMatrixAt(4,H.matrix),H.position.set(-2.193,-0.369,-5.547),H.rotation.set(0,0.516,0),H.scale.set(3.875,3.487,2.986),H.updateMatrix(),K.setMatrixAt(5,H.matrix),this.add(K);let Y=new x0(J,F6(50));Y.position.set(-16.116,14.37,8.208),Y.scale.set(0.1,2.428,2.739),this.add(Y);let X=new x0(J,F6(50));X.position.set(-16.109,18.021,-8.207),X.scale.set(0.1,2.425,2.751),this.add(X);let U=new x0(J,F6(17));U.position.set(14.904,12.198,-1.832),U.scale.set(0.15,4.265,6.331),this.add(U);let N=new x0(J,F6(43));N.position.set(-0.462,8.89,14.52),N.scale.set(4.38,5.441,0.088),this.add(N);let q=new x0(J,F6(20));q.position.set(3.235,11.486,-12.541),q.scale.set(2.5,2,0.1),this.add(q);let G=new x0(J,F6(100));G.position.set(0,20,0),G.scale.set(1,0.1,1),this.add(G)}dispose(){let J=new Set;this.traverse((Q)=>{if(Q.isMesh)J.add(Q.geometry),J.add(Q.material)});for(let Q of J)Q.dispose()}}function F6(J){return new T$({color:0,emissive:16777215,emissiveIntensity:J})}var VQ=new _;function S9(J,Q,$,W,Z,K){let H=2*Math.PI*Z/4,Y=Math.max(K-2*Z,0),X=Math.PI/4;VQ.copy(Q),VQ[W]=0,VQ.normalize();let U=0.5*H/(H+Y),N=1-VQ.angleTo(J)/X;if(Math.sign(VQ[$])===1)return N*U;else return Y/(H+Y)+U+U*(1-N)}class s8 extends aJ{constructor(J=1,Q=1,$=1,W=2,Z=0.1){let K=W*2+1;Z=Math.min(J/2,Q/2,$/2,Z);super(1,1,1,K,K,K);if(this.type="RoundedBoxGeometry",this.parameters={width:J,height:Q,depth:$,segments:W,radius:Z},K===1)return;let H=this.toNonIndexed();this.index=null,this.attributes.position=H.attributes.position,this.attributes.normal=H.attributes.normal,this.attributes.uv=H.attributes.uv;let Y=new _,X=new _,U=new _(J,Q,$).divideScalar(2).subScalar(Z),N=this.attributes.position.array,q=this.attributes.normal.array,G=this.attributes.uv.array,E=N.length/6,F=new _,B=0.5/K;for(let R=0,O=0;R<N.length;R+=3,O+=2)switch(Y.fromArray(N,R),X.copy(Y),X.x-=Math.sign(X.x)*B,X.y-=Math.sign(X.y)*B,X.z-=Math.sign(X.z)*B,X.normalize(),N[R+0]=U.x*Math.sign(Y.x)+X.x*Z,N[R+1]=U.y*Math.sign(Y.y)+X.y*Z,N[R+2]=U.z*Math.sign(Y.z)+X.z*Z,q[R+0]=X.x,q[R+1]=X.y,q[R+2]=X.z,Math.floor(R/E)){case 0:F.set(1,0,0),G[O+0]=S9(F,X,"z","y",Z,$),G[O+1]=1-S9(F,X,"y","z",Z,Q);break;case 1:F.set(-1,0,0),G[O+0]=1-S9(F,X,"z","y",Z,$),G[O+1]=1-S9(F,X,"y","z",Z,Q);break;case 2:F.set(0,1,0),G[O+0]=1-S9(F,X,"x","z",Z,J),G[O+1]=S9(F,X,"z","x",Z,$);break;case 3:F.set(0,-1,0),G[O+0]=1-S9(F,X,"x","z",Z,J),G[O+1]=1-S9(F,X,"z","x",Z,$);break;case 4:F.set(0,0,1),G[O+0]=1-S9(F,X,"x","y",Z,J),G[O+1]=1-S9(F,X,"y","x",Z,Q);break;case 5:F.set(0,0,-1),G[O+0]=S9(F,X,"x","y",Z,J),G[O+1]=1-S9(F,X,"y","x",Z,Q);break}}static fromJSON(J){return new s8(J.width,J.height,J.depth,J.segments,J.radius)}}var O0={tableWidth:0.92,tableCenterY:0.724,tableThickness:0.09,feltWidth:0.78,feltCenterY:0.776,surfaceY:0.782,chairSeatY:0.51,chairSeatWidth:0.56,seatDistance:0.77,tileLength:0.054,tileWidth:0.027,tileThickness:0.011,tileGap:0.0016,pipRadius:0.0029,pipColumnSpacing:0.0064,pipRowSpacing:0.0074,rackRadius:0.418,rackSpacing:0.0305,neutralPoseTime:10.25},$8=[[0,O0.seatDistance,Math.PI],[-O0.seatDistance,0,Math.PI/2],[0,-O0.seatDistance,0],[O0.seatDistance,0,-Math.PI/2]];function rX(J){let Q=J.vertical?O0.tileWidth:O0.tileLength,$=J.vertical?O0.tileLength:O0.tileWidth;return{left:J.x-Q/2,right:J.x+Q/2,top:J.z-$/2,bottom:J.z+$/2}}var e1=O0.feltWidth/2-0.022;function tX(J,Q){let $=rX(J);if(Math.max(Math.abs($.left),Math.abs($.right),Math.abs($.top),Math.abs($.bottom))>e1+0.00000001)return!1;return Q.every((W)=>{let Z=rX(W);return $.right<=Z.left-0.0015||$.left>=Z.right+0.0015||$.bottom<=Z.top-0.0015||$.top>=Z.bottom+0.0015})}function eX(J,Q,$){let{tileLength:W,tileWidth:Z,tileGap:K}=O0,H=Q.x===Q.y,Y=(H?Z:W)/2,X=J.tile,U=[],N=[[J.dx,J.dz],[J.dz,-J.dx],[-J.dz,J.dx]];for(let q=0;q<N.length;q++){let[G,E]=N[q],F=q!==0,B=(X.isDouble?Z:W)/2,R=(X.isDouble?W:Z)/2,O=X.x+J.dx*(F?X.isDouble?0:W/4:B),P=X.z+J.dz*(F?X.isDouble?0:W/4:B),k=F?[0,W/8,-W/8]:[0];for(let L of k){let C=Math.atan2(-E,G)+($==="left"?Math.PI:0)+(H?Math.PI/2:0);U.push({id:Q.id,x:O+G*((F?R:0)+K+Y)+J.dx*L,z:P+E*((F?R:0)+K+Y)+J.dz*L,yaw:C,vertical:Math.abs(Math.sin(C))>0.5,isDouble:H,dx:G,dz:E,side:$})}}return U}function AK(J,Q,$,W){let Z={id:"future",x:0,y:W?0:1};return eX({tile:J,dx:J.dx,dz:J.dz},Z,$).some((K)=>tX(K,Q))}function JU(J,Q=[]){if(J.length>28)throw Error("A double-six chain has at most 28 tiles.");if(!J.length)return[];let $=new Map(J.map((G)=>[G.id,G])),W=Q.filter((G)=>G.type==="play"&&G.tile&&$.has(G.tile)),Z=$.get(W[0]?.tile||"")||J[0],K=J.findIndex((G)=>G.id===Z.id),H=Z.x===Z.y,Y={id:Z.id,x:0,z:0,yaw:H?Math.PI/2:0,vertical:H,isDouble:H,dx:1,dz:0,side:"root"},X=[Y],U=new Map([[Y.id,Y]]),N={left:{tile:Y,dx:-1,dz:0},right:{tile:Y,dx:1,dz:0}},q=W.length===J.length?W.slice(1):[...J.slice(0,K).reverse().map((G)=>({type:"play",tile:G.id,side:"left"})),...J.slice(K+1).map((G)=>({type:"play",tile:G.id,side:"right"}))];for(let G of q){let E=$.get(G.tile);if(U.has(E.id))continue;let F=G.side==="left"?"left":G.side==="right"?"right":J.findIndex((O)=>O.id===E.id)<K?"left":"right",B=eX(N[F],E,F).filter((O)=>tX(O,X)),R=B.find((O)=>AK(O,[...X,O],F,!1)&&AK(O,[...X,O],F,!0))||B.find((O)=>AK(O,[...X,O],F,!1))||B[0];if(!R)throw Error(`No safe placement for ${E.id} after ${X.length} tiles`);X.push(R),U.set(E.id,R),N[F]={tile:R,dx:R.dx,dz:R.dz}}return J.map((G)=>U.get(G.id))}function QU(J,Q,$=!1){if($)return{breath:0,headYaw:0,headNod:0};let W=J*2.173+0.43;return{breath:0.0055*Math.sin(Q*(0.78+J*0.093)+W),headYaw:0.087*Math.sin(Q*(0.213+J*0.037)+W)+0.028*Math.sin(Q*(0.487+J*0.029)+W*1.91),headNod:0.009*Math.sin(Q*(0.267+J*0.035)+W*0.71)}}var $U=new _(1,0,0),M8=new _(0,1,0),wK=new GJ;function vK(J){let Q=[];return J.traverse(($)=>{if($.isBone)Q.push({bone:$,position:$.position.clone(),quaternion:$.quaternion.clone(),scale:$.scale.clone()})}),Q}var W8=new _,d9=new _,Z8=new _,V7=new _,k8=new _,j9=new _,B7=new _,k7=new _,M7=new GJ,C8=new GJ,o$=new GJ,i$=new GJ,CQ=(J)=>Math.min(1,Math.max(-1,J)),C7=(J,Q,$)=>Math.min($,Math.max(Q,J)),K8=(J)=>J*J*(3-2*J);function xJ(J,Q){J.getWorldQuaternion(C8),J.parent.getWorldQuaternion(o$),J.quaternion.copy(o$.invert()).multiply(Q).multiply(C8),J.updateMatrixWorld(!0)}var Y9=new _,D8=new _;function JF(J){J.holder.getWorldQuaternion(i$),Y9.set(1,0,0).applyQuaternion(i$),D8.set(0,0,1).applyQuaternion(i$)}function jK(J,Q,$,W,Z){return Z.set(Q,$,W).applyMatrix4(J.holder.matrixWorld)}function QF(J,Q,$,W){return W.set(J,Q,$).applyQuaternion(i$).normalize()}var $F=0.965;function WF(J,Q,$){let{brazo:W,antebrazo:Z,mano:K}=J;if(!W||!Z||!K||!W.parent||!Z.parent)return;W.getWorldPosition(W8),Z.getWorldPosition(d9),K.getWorldPosition(Z8);let H=W8.distanceTo(d9),Y=d9.distanceTo(Z8);if(H<0.00001||Y<0.00001)return;let X=C7(W8.distanceTo(Q),Math.abs(H-Y)+0.002,(H+Y)*$F);if(k8.subVectors(d9,W8),j9.subVectors(Z8,d9),B7.crossVectors(k8,j9),B7.lengthSq()<0.0000000001)B7.copy(Y9);else B7.normalize();let U=Math.acos(CQ((H*H+Y*Y-W8.distanceToSquared(Z8))/(2*H*Y))),q=Math.acos(CQ((H*H+Y*Y-X*X)/(2*H*Y)))-U;if(xJ(Z,M7.setFromAxisAngle(B7,q)),K.getWorldPosition(Z8),Math.abs(W8.distanceTo(Z8)-X)>0.001)xJ(Z,M7.setFromAxisAngle(B7,-2*q)),K.getWorldPosition(Z8);if(k8.subVectors(Z8,W8).normalize(),j9.subVectors(Q,W8),j9.lengthSq()<0.0000000001)return;if(j9.normalize(),xJ(W,M7.setFromUnitVectors(k8,j9)),!$)return;if(Z.getWorldPosition(d9),k7.subVectors(d9,W8),k7.addScaledVector(j9,-k7.dot(j9)),V7.subVectors($,W8),V7.addScaledVector(j9,-V7.dot(j9)),k7.lengthSq()<0.0000000001||V7.lengthSq()<0.0000000001)return;k7.normalize(),V7.normalize();let G=Math.atan2(B7.crossVectors(k7,V7).dot(j9),CQ(k7.dot(V7)));xJ(W,M7.setFromAxisAngle(j9,G))}var G9=new _,V6=new _,BQ=new _,ZF=new d0,_K=new GJ,kQ=new GJ;function KF(J,Q,$){let{antebrazo:W,mano:Z}=J;if(!W||!Z||!Z.parent)return;if(G9.copy(Q).normalize(),BQ.crossVectors(G9,$),BQ.lengthSq()<0.00000001)return;BQ.normalize(),V6.crossVectors(BQ,G9),_K.setFromRotationMatrix(ZF.makeBasis(BQ,G9,V6)),W.getWorldPosition(d9),Z.getWorldPosition(Z8),k8.subVectors(Z8,d9).normalize(),Z.getWorldQuaternion(C8),kQ.copy(_K).multiply(C8.invert());let K=kQ.x*k8.x+kQ.y*k8.y+kQ.z*k8.z,H=2*Math.atan2(K,kQ.w);if(Number.isFinite(H))xJ(W,M7.setFromAxisAngle(k8,C7(H*0.5,-1.2,1.2)));Z.parent.getWorldQuaternion(o$),Z.quaternion.copy(o$.invert()).multiply(_K),Z.updateMatrixWorld(!0)}var HF=new _;function YF(J,Q,$){let W=Q.lado==="Left"?1:-1,Z=J.index*1.7,K=O0.seatDistance-O0.tableWidth/2;return jK(J,W*(0.225+Math.sin(Z)*0.01)+Math.sin($*0.23+Z)*0.004,O0.surfaceY+0.026,K+(W>0?0.05:0.075)+Math.cos(Z*1.3)*0.012+Math.sin($*0.17+Z*2)*0.004,HF)}var XF=new _,O6=new _,yK=new _,c$=new _,UF=0.045,GF=0.05,NF=0.12,WU=0.14,qF=0.45,EF=4;function ZU(J,Q,$){return c$.subVectors(Q,J.holder.getWorldPosition(yK)),c$.y=0,c$.normalize(),$.copy(Q).addScaledVector(c$,-GF).setY(Q.y+UF)}function FF(J,Q,$){let W=J.jugada;if(!W)return null;if(Q-W.t0>EF)return J.jugada=null,null;let Z=W.anim;if(Z.elapsed<Z.duration)return ZU(J,W.obj.position,O6),O6.lerpVectors($,O6,K8(C7(Z.elapsed/NF,0,1)));if(W.aterrizo==null)W.aterrizo=Q;let K=Q-W.aterrizo;if(ZU(J,W.hasta,O6),K<WU)return O6;let H=(K-WU)/qF;if(H>=1)return J.jugada=null,null;return O6.lerp($,K8(H))}var HJ=[1,1.9,3.3,4.3,5.2];function OF(J,Q,$){let W=J.bebida;if(!W)return null;if(J.trago){let X=J.trago.fijo??Q-J.trago.t0;if(X<0||X>=HJ[4]||J.jugada)return J.trago=null,UU(W),null;return X}if(!$||!$.dt)return null;let Z=J.index,K=40+Z*17%4*9,H=(Q+Z*13)%K,Y=Math.floor((Q+Z*13)/K);if(H<0.6&&J.tragoK!==Y&&!J.jugada&&!($.jugando&&$.turno===Z)&&!$.habla.has(Z)&&!($.fin&&Q-$.fin.t<6))return J.tragoK=Y,J.trago={t0:Q},0;return null}function UU(J){J.group.position.copy(J.home),J.group.quaternion.identity()}var R6=new _,D7=new _,L6=new _,DQ=new _,GU=0.045;function RF(J,Q,$,W){let Z=J.bebida;L6.copy(D8).addScaledVector(M8,0.25).normalize(),DQ.copy(D8).multiplyScalar(0.55).addScaledVector(M8,0.8).normalize(),D7.copy(Z.home),D7.y+=GU,D7.addScaledVector(Y9,-0.05).addScaledVector(L6,-0.035),J.front.getWorldPosition(R6),R6.y-=0.07,R6.addScaledVector(D8,0.09).addScaledVector(Y9,-0.05).addScaledVector(DQ,-0.035);let K;if(Q<HJ[0])W.lerpVectors($,D7,K8(Q/HJ[0])),K=L6;else if(Q<HJ[1]){let H=K8((Q-HJ[0])/(HJ[1]-HJ[0]));W.lerpVectors(D7,R6,H),K=L6.lerp(DQ,H).normalize()}else if(Q<HJ[2])W.copy(R6),K=DQ;else if(Q<HJ[3]){let H=K8((Q-HJ[2])/(HJ[3]-HJ[2]));W.lerpVectors(R6,D7,H),K=DQ.lerp(L6,H).normalize()}else W.lerpVectors(D7,$,K8((Q-HJ[3])/(HJ[4]-HJ[3]))),K=L6;return K}var KU=new _,HU=new _,YU=new _;function LF(J,Q){let $=J.bebida,W=J.brazos[1].mano;if(Q<HJ[0]||Q>=HJ[3]){UU($);return}W.getWorldQuaternion(C8),W.getWorldPosition(a$),KU.set(0,0,1).applyQuaternion(C8),HU.set(0,1,0).applyQuaternion(C8);let Z=Q<HJ[1]?0:Q<HJ[2]?K8(Math.min(1,(Q-HJ[1])/0.4))*(Q>HJ[2]-0.4?(HJ[2]-Q)/0.4:1):0;$.group.quaternion.setFromAxisAngle(Y9,-0.95*Z),YU.set(0,1,0).applyQuaternion($.group.quaternion),$.group.position.copy(a$).addScaledVector(KU,0.05).addScaledVector(HU,0.035).addScaledVector(YU,-GU)}function VF(J,Q){let $=J.index,W=0.23+$%4*0.012,Z=Q*W*Math.PI*2+$*1.9,K=Math.sin(Z);return{b:K>0?K:K*0.7,balanceo:Math.sin(Q*0.11+$*2.3)*0.022+Math.sin(Q*0.29+$)*0.008,ladeo:Math.sin(Q*0.07+$*1.3)*0.014}}var TK=new _,n$=new _,y9=new _,i8=new _,H8=new _,B9=new GJ,s$=(J)=>{let Q=Math.sin(J*127.1+311.7)*43758.5453;return Q-Math.floor(Q)};function BF(J,Q,$,W){let Z=J.index;if(Z>=4||!$)return $?.foco&&Q-$.foco.t<2.5?W.copy($.foco.p):W.set(0,O0.surfaceY,0);if($.fin&&Q-$.fin.t<5){if($.fin.team!=null&&Z%2===$.fin.team&&$.cabezas[(Z+2)%4])return W.copy($.cabezas[(Z+2)%4]);return jK(J,0,O0.surfaceY,O0.seatDistance-O0.rackRadius,W)}if(J.trago&&J.bebida){let Y=Q-J.trago.t0;if(Y<1.1||Y>3.4&&Y<4.3)return W.copy(J.bebida.home)}if($.foco&&Q-$.foco.t<1.4)return W.copy($.foco.p);for(let Y of $.habla)if(Y!==Z&&$.cabezas[Y])return W.copy($.cabezas[Y]);if($.jugando&&$.turno===Z){let Y=Math.floor(Q/1.3);return jK(J,(s$(Y+Z*9)-0.5)*0.12,O0.surfaceY+0.02,O0.seatDistance-O0.rackRadius+0.02,W)}let K=Math.floor((Q+Z*1.37)/(2.2+Z*0.35)),H=s$(K*4+Z);if($.jugando&&H<0.45&&$.cabezas[$.turno]&&$.turno!==Z)return W.copy($.cabezas[$.turno]);if(H<0.62&&$.cabezas[(Z+2)%4])return W.copy($.cabezas[(Z+2)%4]);if(!$.jugando&&H<0.85&&$.cabezas[(Z+1+K%2*2)%4])return W.copy($.cabezas[(Z+1+K%2*2)%4]);return W.set((s$(K+7)-0.5)*0.2,O0.surfaceY,(s$(K+3)-0.5)*0.2)}function kF(J,Q,$){let{head:W,neck:Z,front:K}=J;if(!W||!K)return;if(BF(J,Q,$,TK),!J.mirada||!$?.dt)J.mirada=(J.mirada||new _).copy(TK);else J.mirada.lerp(TK,1-Math.exp(-$.dt*5.5));for(let[H,Y]of[[Z,0.4],[W,1]]){if(!H)continue;if(W.getWorldPosition(n$),K.getWorldPosition(y9),y9.sub(n$),y9.lengthSq()<0.0000000001)return;if(y9.normalize(),i8.subVectors(J.mirada,n$),i8.lengthSq()<0.00000001)return;i8.normalize();let X=C7(Math.atan2(y9.z*i8.x-y9.x*i8.z,y9.x*i8.x+y9.z*i8.z),-1.25,1.25)*Y;if(xJ(H,M7.setFromAxisAngle(M8,X)),K.getWorldPosition(y9),y9.sub(n$).normalize(),H8.crossVectors(y9,M8),H8.lengthSq()<0.00000001)continue;H8.normalize();let U=C7(Math.asin(CQ(i8.y))-Math.asin(CQ(y9.y)),-0.75,0.55)*Y;xJ(H,M7.setFromAxisAngle(H8,U))}}var DF=0.23,MF=[["hips",0.35],["lomo",0.25],["spine",0.22],["chest",0.18]],CF=new GJ;function zF(J,Q,$=0){if(!J.spine||!J.spine.parent)return;if(H8.copy(Y9),J.hips&&J.lomo)for(let[W,Z]of MF){let K=J[W];if(!K)continue;if(xJ(K,B9.setFromAxisAngle(H8,Q*Z)),W==="hips"){for(let H of J.muslos||[])if(H)xJ(H,CF.setFromAxisAngle(H8,-Q*Z))}}else xJ(J.spine,B9.setFromAxisAngle(H8,Q));if($)xJ(J.spine,B9.setFromAxisAngle(M8,$))}var SK=new _,XU=new _,MQ=new _,a$=new _;function r$(J,Q,$=!1,W=null){for(let F of J.pose)F.bone.position.copy(F.position),F.bone.quaternion.copy(F.quaternion),F.bone.scale.copy(F.scale);J.holder.updateMatrixWorld(!0),JF(J);let Z=QU(J.index,Q,$);if(J.spine)J.spine.quaternion.multiply(wK.setFromAxisAngle($U,Z.breath));let K=!$,H=K?VF(J,Q):{b:0,balanceo:0,ladeo:0},Y=J.index,X=Y<4&&J.brazos,U=0,N=0;if(X&&W?.fin&&W.fin.team!=null){let F=Q-W.fin.t;if(F>=0&&F<5)N=Math.sin(Math.min(1,F/0.5)*Math.PI/2)*(F>4?5-F:1),U+=(Y%2===W.fin.team?-0.1:0.07)*N}if(X&&W?.jugando&&W.turno===Y)U+=0.04;let q=X&&K&&J.front?OF(J,Q,W):null,G=[];if(X)for(let F of J.brazos){let B=XF.copy(YF(J,F,Q)),R=F.lado==="Right"?FF(J,Q,B):null,O=!!R,P=null;if(!R&&q!=null&&F.lado==="Right")R=yK.set(0,0,0),P=RF(J,q,B,R).clone();if(R=(R||B).clone(),!O&&K&&W?.habla?.has(Y)&&F.lado==="Left")J.gesto=Math.min(1,(J.gesto||0)+(W.dt||0)*3);else if(F.lado==="Left")J.gesto=Math.max(0,(J.gesto||0)-(W?.dt||1)*2);if(F.lado==="Left"&&J.gesto>0){let k=K8(J.gesto);R.addScaledVector(D8,0.06*k).addScaledVector(Y9,-0.07*k),R.y+=0.07*k+Math.sin(Q*5.2)*0.012*k}if(F.lado==="Right"&&!O&&N&&Y%2===W.fin.team){let k=Q-W.fin.t;if(k<1.1)R.y+=Math.max(0,Math.sin(Math.min(1,k/0.9)*Math.PI))*0.13}G.push({brazo:F,o:R,jugando:O,dedos:P})}let E=0;if(X){let F=G.find((B)=>B.jugando);if(F&&F.brazo.brazo){J.holder.worldToLocal(MQ.copy(F.o));let B=Math.hypot(MQ.x,MQ.z-0.12);U+=C7((B-0.42)/0.55,0,0.34),E=C7(Math.atan2(MQ.x,MQ.z)*0.3,-0.3,0.3)}}if(zF(J,DF*(J.brazos?1:0.6)+U,E),q!=null){let F=q<HJ[1]?Math.sin(Math.min(1,q/HJ[0])*Math.PI/2)*(1-K8(Math.max(0,q-HJ[0])/(HJ[1]-HJ[0]))):q>HJ[2]?Math.sin(Math.min(1,(q-HJ[2])/(HJ[3]-HJ[2]))*Math.PI):0;if(J.spine)xJ(J.spine,B9.setFromAxisAngle(D8,0.16*F))}if(K){if(J.spine)xJ(J.spine,B9.setFromAxisAngle(M8,H.balanceo));if(J.spine)xJ(J.spine,B9.setFromAxisAngle(D8,H.ladeo));if(J.chest)xJ(J.chest,B9.setFromAxisAngle(Y9,-0.018*H.b));if(J.hombros){for(let[F,B]of J.hombros)if(B)xJ(B,B9.setFromAxisAngle(D8,F*0.03*(H.b+0.3)))}}if(kF(J,Q,W),J.head)J.head.quaternion.multiply(wK.setFromAxisAngle(M8,Z.headYaw*0.5)),J.head.quaternion.multiply(wK.setFromAxisAngle($U,Z.headNod)),J.head.updateMatrixWorld(!0);if(K&&J.head){if(W?.habla?.has(Y)){let F=0.035*(0.6+0.4*Math.sin(Q*1.7));xJ(J.head,B9.setFromAxisAngle(Y9,Math.sin(Q*6.1)*F*0.5+Math.sin(Q*3.3)*F*0.5))}if(N&&Y%2!==W.fin.team){let F=Q-W.fin.t;if(F>0.6&&F<2.6)xJ(J.head,B9.setFromAxisAngle(M8,Math.sin((F-0.6)*Math.PI*2.4)*0.16*(2.6-F)/2))}}if(q!=null&&q>HJ[1]-0.2&&q<HJ[2]+0.2&&J.head){let F=Math.sin(Math.min(1,(q-HJ[1]+0.2)/(HJ[2]-HJ[1]+0.4))*Math.PI);xJ(J.head,B9.setFromAxisAngle(Y9,-0.3*F))}if(K&&J.reaction&&J.head){let F=Q-J.reaction.time;if(F>=0&&F<1.2){let B=Math.sin(F/1.2*Math.PI)*0.035;xJ(J.head,B9.setFromAxisAngle(Y9,B))}}for(let{brazo:F,o:B,jugando:R,dedos:O}of G){let P=F.lado==="Left"?1:-1;if(F.brazo.getWorldPosition(SK),SK.add(QF(P*(R?0.55:0.32),-0.75,R?-0.15:-0.6,XU)),WF(F,B,SK),F.antebrazo.getWorldPosition(d9),F.mano.getWorldPosition(a$),G9.subVectors(a$,d9),G9.y=0,G9.lengthSq()<0.00000001)G9.copy(D8);if(G9.normalize(),G9.addScaledVector(Y9,-P*(R?0:0.12)).normalize(),G9.y=R?-0.55:-0.3,V6.set(0,-1,0).addScaledVector(Y9,-P*0.22),F.lado==="Left"&&J.gesto>0){let k=K8(J.gesto);V6.lerp(XU.copy(Y9).multiplyScalar(-1).add(yK.set(0,0.4,0)),k*0.8),G9.y+=0.4*k}if(O)G9.copy(O),V6.copy(Y9).addScaledVector(M8,-0.15);if(KF(F,G9,V6),O)LF(J,q);if(K&&!R&&!O&&F.lado==="Right"&&!(W?.turno===Y&&W?.jugando)){let k=4.6+Y*0.9,L=(Q+Y*1.3)%k;if(L<0.55)F.mano.getWorldQuaternion(C8),H8.set(1,0,0).applyQuaternion(C8),xJ(F.mano,B9.setFromAxisAngle(H8,-0.22*Math.max(0,Math.sin(L/0.55*Math.PI*4))))}}J.holder.updateMatrixWorld(!0)}function NU({scene:J,texture:Q,mat:$,box:W,cylinder:Z,random:K,teal:H,wood:Y,storeSign:X}){let U=Q((k,L,C)=>{k.fillStyle="#39796d",k.fillRect(0,0,L,C);let A=k.createLinearGradient(0,0,0,C);A.addColorStop(0,"#cac09b18"),A.addColorStop(0.7,"#14382d00"),A.addColorStop(1,"#162d2566"),k.fillStyle=A,k.fillRect(0,0,L,C);for(let w=0;w<7000;w++)k.fillStyle=w%3?"#b4ad8618":"#142d2924",k.fillRect(K()*L,K()*C,1+K()*3,1+K()*2);for(let w=0;w<190;w++){let D=K()*L,I=w<125?C*(0.7+K()*0.3):K()*C,m=6+K()*17;k.fillStyle=w%3?"#a69c7d":"#6a7b6a",k.beginPath();for(let f=0;f<8;f++){let x=f*Math.PI/4,o=m*(0.6+K()*0.5);k.lineTo(D+Math.cos(x)*o,I+Math.sin(x)*o*0.65)}k.fill()}k.strokeStyle="#1b372e24";for(let w=48;w<C;w+=57)k.beginPath(),k.moveTo(0,w),k.lineTo(L,w),k.stroke()},1024,1024);H.map=U,H.color.set("#c7ccbb"),H.needsUpdate=!0,Y.color.set("#bca98a"),Y.roughness=0.84,X.material.map=Q((k,L,C)=>{k.fillStyle="#966045",k.fillRect(0,0,L,C),k.fillStyle="#e7d6a7",k.textAlign="center",k.textBaseline="middle",k.font="bold 66px Georgia",k.fillText("COLMADO LA ESQUINA",L/2,C/2);for(let A=0;A<2000;A++)k.fillStyle=A%2?"#58472c30":"#dec29630",k.fillRect(K()*L,K()*C,1+K()*5,1+K()*3);k.strokeStyle="#57412c",k.lineWidth=7,k.strokeRect(3,3,L-6,C-6)},1024,256),X.material.needsUpdate=!0;let q=["#b68e3c","#a45137","#6a8b62","#bbad8a"].map((k,L)=>new jJ({roughness:0.94,map:Q((C,A,w)=>{C.fillStyle=k,C.fillRect(0,0,A,w);for(let D=0;D<30;D++)C.strokeStyle=D%2?"#fff2":"#0002",C.beginPath(),C.moveTo(K()*A,0),C.lineTo(K()*A,w),C.stroke();C.fillStyle="#dfd1a6",C.fillRect(20,w*0.32,A-40,w*0.36),C.fillStyle="#403c29",C.font="bold 31px Georgia",C.textAlign="center",C.fillText(["CAFÉ","ARROZ","PLÁTANO","AZÚCAR"][L],A/2,w*0.53)},256,384)}));for(let k=0;k<3;k++)for(let L=0;L<8;L++)W(-3+L*0.17,1.73+k*0.48,-4.46,0.13,0.23,0.075,q[(L+k)%4],(K()-0.5)*0.1);for(let[k,L]of[[-2.7,-3.5],[2.4,-3.3]])W(k,0.18,L,0.51,0.35,0.4,"#897052"),W(k+0.05,0.47,L-0.04,0.4,0.23,0.32,"#a68c62");for(let k=0;k<3;k++)Z(2.48+k*0.24,0.18,-2.3,0.09,0.1,0.31,"#74a69e",12),Z(2.48+k*0.24,0.36,-2.3,0.035,0.043,0.075,"#5b8c84",10);for(let k=0;k<4;k++){let L=new x0(new L8(1,10,7),$(k%2?"#a08e69":"#b0a078"));L.scale.set(0.15,0.24,0.12),L.position.set(-2.6+k*0.25,0.23,-2.1),L.rotation.z=(k-1.5)*0.06,L.castShadow=!0,J.add(L)}let G=new x0(new w9(0.72,0.69),new jJ({roughness:1,map:Q((k,L,C)=>{k.fillStyle="#263d30",k.fillRect(0,0,L,C),k.strokeStyle="#9c8c62",k.lineWidth=16,k.strokeRect(8,8,L-16,C-16),k.fillStyle="#dcdcb8",k.textAlign="center";for(let[A,w,D]of[["HOY HAY",68,43],["CAFÉ",150,48],["HIELO · PAN",228,32],["REFRESCOS",292,31]])k.font=`${D}px Georgia`,k.fillText(A,L/2,w)},384,360)}));G.position.set(-3.43,1.6,-2.33),G.rotation.z=0.025,J.add(G);let E=[];W(-1.12,1.59,-4,0.42,0.21,0.31,"#677761"),W(-1.12,1.61,-3.836,0.34,0.1,0.016,"#414b3d"),W(-0.38,1.5,-3.98,0.3,0.018,0.22,"#c5b887");for(let[k,L,C]of[[0.7,-4.03,"#8b7747"],[0.98,-4.07,"#637751"],[1.29,-4.02,"#a88b50"]])Z(k,1.6,L,0.07,0.075,0.25,C,14),Z(k,1.739,L,0.077,0.077,0.028,"#aaa386",12);W(0.2,1.51,-4.01,0.4,0.07,0.28,"#6c5838");for(let k=0;k<4;k++){let L=new x0(new L8(1,10,6),$(k%2?"#bca276":"#a98e61"));L.scale.set(0.055,0.035,0.115),L.position.set(0.07+k*0.085,1.57,-4),L.rotation.y=(k-1.5)*0.13,J.add(L)}let F=new oJ({transparent:!0,depthWrite:!1,map:Q((k,L,C)=>{for(let A=0;A<90;A++)k.fillStyle=A%2?"#152c2110":"#3036230a",k.beginPath(),k.ellipse(L/2+(K()-0.5)*L*0.45,C/2+(K()-0.5)*C*0.45,K()*L*0.24,K()*C*0.18,K()*Math.PI,0,Math.PI*2),k.fill()},256,256)});for(let[k,L,C,A]of[[-2.4,-2.2,1.1,0.9],[2.5,-2.5,1.3,0.8],[0,-3.25,2,0.6]]){let w=new x0(new w9(C,A),F);w.rotation.x=-Math.PI/2,w.position.set(k,0.008,L),J.add(w)}for(let[k,L]of[[-3,-0.9],[3.3,-1.5]]){Z(k,0.18,L,0.18,0.13,0.34,"#87553c",14),Z(k,0.354,L,0.16,0.16,0.012,"#3f422d",12);let C=new AJ;C.position.set(k,0.36,L),J.add(C);for(let A=0;A<7;A++){let w=new ZQ;w.moveTo(0,0),w.quadraticCurveTo(-0.09,0.23,0,0.55+K()*0.12),w.quadraticCurveTo(0.09,0.23,0,0);let D=new x0(new HQ(w,5),new jJ({color:A%2?"#597d4f":"#3c603e",roughness:1,side:K9}));D.rotation.set(0.3+K()*0.4,A*Math.PI*2/7,0),C.add(D)}E.push(C)}let B=new w9(0.55,1.3,5,9),R=new x0(B,new jJ({color:"#b2a27c",roughness:1,side:K9}));R.position.set(-2.85,1.75,-3.05),J.add(R);let O=B.attributes.position,P=O.array.slice();return{update(k){E.forEach((L,C)=>L.rotation.z=Math.sin(k*0.53+C*2.1)*0.015);for(let L=0;L<O.count;L++){let C=P[L*3+1];O.setZ(L,Math.sin(k*1.17+C*3)*0.025*(0.65-C)/1.3)}O.needsUpdate=!0}}}var z7=Math.PI*2,o0=(J=0,Q=0,$=0)=>new _(J,Q,$),PF=[[],[4],[0,8],[0,4,8],[0,2,6,8],[0,2,4,6,8],[0,2,3,5,6,8]];async function mL(J,{onProgress:Q=()=>{}}={}){let $=new W6;$.background=new l0("#132931"),$.fog=new i6("#132931",0.024);let W=new mJ(42,innerWidth/innerHeight,0.08,90);W.position.set(3.1,2.65,4.2);let Z;try{Z=new qK({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{throw Error("This device could not start WebGL. Try a recent desktop browser.")}let K=!new URLSearchParams(location.search).has("hq")&&/SwiftShader|llvmpipe|Software/i.test((()=>{let T=Z.getContext(),t=T.getExtension("WEBGL_debug_renderer_info");return t?T.getParameter(t.UNMASKED_RENDERER_WEBGL):""})());Z.setSize(innerWidth,innerHeight),Z.setPixelRatio(K?0.65:Math.min(devicePixelRatio,1.5,1920/innerWidth)),Z.outputColorSpace=l9,Z.toneMapping=l6,Z.toneMappingExposure=1.08,Z.shadowMap.enabled=!K,Z.shadowMap.type=Q$,J.appendChild(Z.domElement);{let T=new RQ(Z);$.environment=T.fromScene(new IK,0.04).texture,$.environmentIntensity=0.3,T.dispose()}let H=new PK(W,Z.domElement);H.target.set(0,0.8,-0.15),H.enableDamping=!0,H.dampingFactor=0.065,H.enablePan=!1,H.minDistance=0.8,H.maxDistance=8,H.minPolarAngle=0.25,H.maxPolarAngle=Math.PI*0.48,H.update(),$.add(new v$("#b9c9dd","#4a3b30",0.42));let Y=new U6("#9fb6d6",0.55);Y.position.set(-5,9,5),$.add(Y);let X=new X6("#ffcf94",48,14,Math.PI*0.44,0.8,1.8);X.position.set(0,4.15,0.5),X.target.position.set(0,0.2,0),X.castShadow=!0,X.shadow.mapSize.set(K?1024:2048,K?1024:2048),X.shadow.bias=-0.0004,X.shadow.normalBias=0.035,$.add(X,X.target);let U=new u8("#ffbf7d",17,9,2);U.position.set(0,2.5,-3.5),$.add(U);let N=new Map,q=new Map;function G(T,t=0.85,H0=0){let r=T+","+t+","+H0;if(!N.has(r))N.set(r,new jJ({color:T,roughness:t,metalness:H0}));return N.get(r)}function E(T,t,H0,r=[0,0,0],$0=[1,1,1]){let C0=t.uuid;if(!q.has(C0))q.set(C0,{material:t,geos:[]});let b0=new d0().compose(o0(...H0),new GJ().setFromEuler(new I9(...r)),o0(...$0));T.applyMatrix4(b0),q.get(C0).geos.push(T)}function F(T,t,H0,r,$0,C0,b0,q0=0){E(new aJ(r,$0,C0),typeof b0==="string"?G(b0):b0,[T,t,H0],[0,q0,0])}function B(T,t,H0,r,$0,C0,b0,q0=10,A0=[0,0,0]){E(new t9(r,$0,C0,q0),typeof b0==="string"?G(b0):b0,[T,t,H0],A0)}function R(T,t=512,H0=512){let r=document.createElement("canvas");r.width=t,r.height=H0,T(r.getContext("2d"),t,H0);let $0=new z$(r);return $0.colorSpace=l9,$0.anisotropy=Math.min(8,Z.capabilities.getMaxAnisotropy()),$0}let O=191,P=()=>{return O=Math.imul(O,1664525)+1013904223>>>0,O/4294967296},k=R((T,t,H0)=>{T.fillStyle="#65432b",T.fillRect(0,0,t,H0);for(let r=0;r<700;r++){T.strokeStyle=`rgba(${P()>0.5?"170,122,70":"35,22,14"},${0.08+P()*0.2})`,T.lineWidth=0.3+P()*2,T.beginPath();let $0=P()*H0;T.moveTo(0,$0);for(let C0=0;C0<t;C0+=20)T.lineTo(C0,$0+Math.sin(C0*0.013+r)*3);T.stroke()}}),L=new jJ({map:k,roughness:0.65,color:"#e7bc8c"}),C=G("#4c3022",0.75),A=G("#287770"),w=G("#d2c5a2"),D=G("#a65443"),I=R((T,t,H0)=>{let r=t/2;for(let A0=0;A0<2;A0++)for(let V=0;V<2;V++){let S=V*r,p=A0*r;T.save(),T.beginPath(),T.rect(S,p,r,r),T.clip(),T.fillStyle="#c4b99f",T.fillRect(S,p,r,r);for(let[V0,E0]of[[S,p],[S+r,p],[S,p+r],[S+r,p+r]])T.strokeStyle="#8d6450",T.lineWidth=r*0.04,T.beginPath(),T.arc(V0,E0,r*0.42,0,Math.PI*2),T.stroke(),T.fillStyle="#4f6763",T.beginPath(),T.arc(V0,E0,r*0.13,0,Math.PI*2),T.fill(),T.strokeStyle="#c4b99f",T.lineWidth=r*0.02,T.beginPath(),T.arc(V0,E0,r*0.11,0,Math.PI*2),T.stroke();let j=S+r/2,g=p+r/2,R0=(V0,E0)=>{T.fillStyle=E0,T.beginPath(),T.moveTo(j,g-V0),T.lineTo(j+V0,g),T.lineTo(j,g+V0),T.lineTo(j-V0,g),T.closePath(),T.fill()};R0(r*0.2,"#8d6450"),R0(r*0.13,"#c4b99f"),R0(r*0.07,"#3a3630"),T.restore(),T.strokeStyle="#7e7563",T.lineWidth=3,T.strokeRect(S+1.5,p+1.5,r-3,r-3)}for(let A0=0;A0<9000;A0++)T.fillStyle=P()>0.5?"rgba(235,228,205,.07)":"rgba(30,28,24,.09)",T.fillRect(P()*t,P()*H0,1+P()*2,1+P()*2);for(let A0=0;A0<40;A0++){let V=T.createRadialGradient(0,0,0,0,0,1),S=P()*t,p=P()*H0,j=20+P()*90;T.save(),T.translate(S,p),T.scale(j,j),V.addColorStop(0,"rgba(40,34,26,.10)"),V.addColorStop(1,"rgba(40,34,26,0)"),T.fillStyle=V,T.fillRect(-1,-1,2,2),T.restore()}},1024,1024);I.wrapS=I.wrapT=b8,I.repeat.set(35.55555555555556,27.77777777777778),F(0,-0.1,0,32,0.2,25,new jJ({map:I,roughness:0.86,color:"#9d937f"})),F(0,-0.11,6.3,35,0.1,5.5,"#343b3b"),F(0,0.02,3.45,35,0.2,0.2,"#aaa592");for(let T=-8;T<9;T++)F(T*1.8,-0.045,6.3,0.7,0.012,0.045,"#b9ad83");F(0,1.6,-5.1,7.5,3.4,0.2,A),F(-3.8,1.6,-3.85,0.2,3.4,2.7,A),F(3.8,1.6,-3.85,0.2,3.4,2.7,A),F(-3.48,1.1,-2.52,0.7,2.3,0.32,A),F(3.45,1.1,-2.52,0.8,2.3,0.32,A),F(0,2.95,-2.52,7.5,0.42,0.35,D),F(0,3.24,-3.7,8,0.12,4.4,"#435451");for(let T=0;T<30;T++)F(-4+T*0.276,3.3,-3.7,0.028,0.055,4.6,"#82928a");F(0,0.7,-4.24,3.9,1.4,0.62,L),F(0,1.43,-4.2,4.08,0.1,0.78,L);for(let T=0;T<3;T++)F(-0.6,1.58+T*0.48,-4.78,5.8,0.065,0.38,L),F(-0.6,1.84+T*0.48,-4.98,5.8,0.48,0.065,"#443e30");F(2.95,1.02,-4.55,1.02,2.1,0.8,"#d0ceb8"),F(2.95,1.12,-4.11,0.84,1.55,0.035,"#254c51");for(let T=0;T<3;T++)F(2.95,0.59+T*0.51,-4.05,0.8,0.025,0.05,"#b3c5bc");let m=[];for(let T=0;T<88;T++){let t=Math.floor(T/29),H0=T%29;m.push({pos:[-3.18+H0*0.182,1.615+t*0.48,-4.69],scale:0.7+T%5*0.07,color:["#566641","#a27735","#293f37","#6b3126"][T%4]})}let f=new KQ([new K0(0,0),new K0(0.036,0),new K0(0.043,0.025),new K0(0.043,0.17),new K0(0.019,0.205),new K0(0.017,0.285),new K0(0.021,0.29),new K0(0.021,0.305),new K0(0,0.31)],12);m.forEach((T)=>E(f.clone(),G(T.color,0.3),T.pos,[0,0,0],[T.scale,T.scale,T.scale]));for(let[T,t,H0]of[[-3.1,-1.9,"#a15340"],[3.1,-2,"#9d6540"],[-3.2,-2,"#5f6e39"]])for(let r=0;r<3;r++){F(T,0.19+r*0.34,t,0.52,0.3,0.4,H0);for(let $0=0;$0<5;$0++)F(T-0.2+$0*0.1,0.18+r*0.34,t+0.204,0.055,0.16,0.015,"#2c3025")}for(let T=0;T<5;T++){let t=-7-T*3.5;F(t,1.5,-3,3.1,3,3.2,T%2?"#b3694f":"#4c8174"),F(t,2.2,-1.38,1,0.8,0.045,"#b59961"),F(t,2.2,-1.35,0.045,0.86,0.055,"#273e37"),F(t,0.98,-1.38,0.9,1.9,0.04,"#354e49")}for(let T=0;T<4;T++)B(-5-T*5,2.3,-2.1,0.08,0.09,4.6,"#665443"),F(-5-T*5,4.2,-2.1,1.8,0.09,0.09,"#514b3d");function x(T,t,H0,r="#202d28"){let $0=new H6(o0(...T),o0(...H0),o0(...t));E(new YQ($0,20,0.008,4,!1),G(r),[0,0,0])}x([-8,3.9,-0.9],[6,3.9,-0.9],[0,2.4,-0.9]);for(let T=0;T<14;T++){let t=-5+T*0.78,H0=3.6-0.4*Math.sin(T/13*Math.PI);B(t,H0,-0.9,0.026,0.031,0.075,new jJ({color:"#fff0c1",emissive:"#ffbc63",emissiveIntensity:2}),8)}x([0,5,-1],[0,3.75,0.25],[0,4.4,-0.1]),B(0,3.67,0.25,0.08,0.05,0.1,new jJ({color:"#ffe7a6",emissive:"#ffd18b",emissiveIntensity:3}),12);let o=new AJ;o.position.set(4.8,0,-2.8),$.add(o);let y=new x0(new t9(0.1,0.15,4.5,9),G("#696047"));y.position.y=2.25,o.add(y);for(let T=0;T<9;T++){let t=new x0(new L8(1,10,5),G(T%2?"#4a654c":"#344e3d"));t.scale.set(0.27,0.075,1.5),t.position.set(Math.sin(T*z7/9)*0.72,4.35,Math.cos(T*z7/9)*0.72),t.rotation.set(0.23,T*z7/9,0),o.add(t)}let u=new x0(new s8(O0.tableWidth,O0.tableThickness,O0.tableWidth,3,0.035),L);u.position.y=O0.tableCenterY,u.castShadow=!0,u.receiveShadow=!0,$.add(u);let e=new x0(new s8(O0.feltWidth,0.012,O0.feltWidth,2,0.02),new jJ({color:"#284e3e",roughness:1}));e.position.y=O0.feltCenterY,e.receiveShadow=!0,$.add(e);let d=O0.tableWidth/2-0.07;for(let T of[-d,d])for(let t of[-d,d])F(T,0.35,t,0.075,0.68,0.075,C);let U0=["#b8412f","#2f67a6"];for(let T=0;T<4;T++){let[t,H0,r]=$8[T],$0=O0.feltWidth/2-0.012,C0=new x0(new w9(O0.feltWidth*0.72,0.009),new jJ({color:U0[T%2],roughness:0.9}));C0.rotation.set(-Math.PI/2,0,r),C0.position.set(t*$0/O0.seatDistance,O0.surfaceY+0.0006,H0*$0/O0.seatDistance),C0.receiveShadow=!0,$.add(C0)}let s=new jJ({roughness:0.92,map:R((T,t,H0)=>{T.fillStyle="#8f7446",T.fillRect(0,0,t,H0);let r=12,$0=t/r;for(let C0=0;C0<r;C0++)for(let b0=0;b0<r;b0++){let q0=(b0+C0)%2===0;for(let A0=0;A0<3;A0++){let V=150+P()*45|0;T.fillStyle=`rgb(${V+30},${V+8},${V-45})`;let S=A0*$0/3+$0*0.04,p=$0/3-$0*0.08;if(q0)T.fillRect(b0*$0+1,C0*$0+S,$0-2,p);else T.fillRect(b0*$0+S,C0*$0+1,p,$0-2)}}T.fillStyle="rgba(40,28,14,.18)";for(let C0=0;C0<=r;C0++)T.fillRect(C0*$0-1,0,2,H0),T.fillRect(0,C0*$0-1,t,2)},256,256)});for(let T=0;T<4;T++){let[t,H0,r]=$8[T],$0=new AJ;$0.position.set(t,0,H0),$0.rotation.y=r,$.add($0);let C0=G(T%2?"#2f5f94":"#a63d2d",0.62),b0=(q0,A0,V,S,p,j,g=C0,R0=0.008)=>{let V0=o0(S,p,j).applyAxisAngle(o0(0,1,0),r).add(o0(t,0,H0));E(new s8(q0,A0,V,2,R0),g,V0.toArray(),[0,r,0])};b0(O0.chairSeatWidth-0.04,0.035,0.5,0,O0.chairSeatY,0,s,0.01);for(let q0 of[-1,1])b0(0.04,0.05,0.54,q0*(O0.chairSeatWidth/2-0.02),O0.chairSeatY-0.005,0);for(let q0 of[-1,1])b0(O0.chairSeatWidth,0.05,0.04,0,O0.chairSeatY-0.005,q0*0.25);for(let q0 of[-0.24,0.24])for(let A0 of[-0.21,0.21])b0(0.04,O0.chairSeatY,0.04,q0,O0.chairSeatY/2,A0);for(let q0 of[-0.24,0.24])b0(0.024,0.024,0.42,q0,0.15,0);b0(0.48,0.024,0.024,0,0.15,0.21);for(let q0 of[-0.24,0.24])b0(0.04,0.52,0.04,q0,O0.chairSeatY+0.26,-0.23);for(let q0 of[0.2,0.33,0.46])b0(0.46,q0===0.46?0.07:0.045,0.022,0,O0.chairSeatY+q0,-0.23)}function J0(T,t,H0,r,$0,C0=60){let b0=R((q0,A0,V)=>{q0.fillStyle=r,q0.fillRect(0,0,A0,V),q0.fillStyle=$0,q0.textAlign="center",q0.textBaseline="middle",q0.font=`bold ${C0}px Georgia`,q0.fillText(T,A0/2,V/2)},1024,256);return new x0(new w9(t,H0),new oJ({map:b0}))}let Z0=J0("COLMADO  LA ESQUINA",4.8,0.38,"#a05d42","#f8e8b9",64);Z0.position.set(0,2.94,-2.33),$.add(Z0);let m0=J0("MESA",0.11,0.029,"#284e3e","#81906b",77);m0.rotation.x=-Math.PI/2,m0.position.set(0,O0.surfaceY+0.001,0.3),$.add(m0);let j0=new AJ;j0.position.set(0,2.62,-2.2),j0.rotation.x=-Math.PI/2,$.add(j0),B(0,2.9,-2.2,0.015,0.015,0.56,"#777a68",8),B(0,3.18,-2.2,0.075,0.075,0.025,"#767763",12);let BJ=new x0(new L8(0.075,12,8),G("#41493d"));j0.add(BJ);for(let T=0;T<5;T++){let t=new x0(new aJ(0.13,0.5,0.025),G("#85856e",0.88,0.05));t.position.set(Math.sin(T*z7/5)*0.285,Math.cos(T*z7/5)*0.285,0),t.rotation.z=-T*z7/5,j0.add(t)}let u0=new AJ;u0.position.set(-12,0.05,5.2),$.add(u0);for(let T of[-0.36,0.36]){let t=new x0(new q7(0.19,0.038,7,14),G("#182221"));t.position.set(T,0.2,0),u0.add(t)}let n=new x0(new s8(0.65,0.17,0.2,2,0.04),G("#823e2f",0.45,0.25));n.position.y=0.49,u0.add(n);let Y0=new x0(new aJ(0.35,0.06,0.22),G("#202725"));Y0.position.set(-0.08,0.61,0),u0.add(Y0);let G0=new x0(new t9(0.015,0.015,0.45,6),G("#8c9c96",0.4,0.5));G0.position.set(0.32,0.59,0),G0.rotation.z=-0.3,u0.add(G0);let g0=NU({scene:$,texture:R,mat:G,box:F,cylinder:B,random:P,teal:A,wood:L,storeSign:Z0});for(let{material:T,geos:t}of q.values()){let H0=VX(t,!1);if(H0){let r=new x0(H0,T);r.receiveShadow=!0,r.castShadow=!0,$.add(r)}t.forEach((r)=>r.dispose())}let f0=new AJ,y0=new AJ;$.add(f0,y0);let _J=new s8(O0.tileLength,O0.tileThickness,O0.tileWidth,2,0.0022),e0=G("#f3edda",0.75),QJ=G("#d9d4c1",0.75),NJ=new oJ({color:"#090d0c",toneMapped:!1}),WJ=new oJ({color:"#111410",toneMapped:!1}),gJ=new t9(O0.pipRadius,O0.pipRadius,0.0007,14),kJ=new aJ(0.0014,0.0005,O0.tileWidth*0.8),rJ=new Set([_J,gJ,kJ]),yJ=new Set([e0,QJ,NJ,WJ]);function TJ(T,t,H0=!1){let r=new AJ,$0=new x0(_J,H0?QJ:e0);if($0.castShadow=!0,$0.receiveShadow=!0,r.add($0),!H0){let C0=[];if([T,t].forEach((q0,A0)=>PF[q0].forEach((V)=>C0.push(o0((A0===0?-1:1)*O0.tileLength/4+(V%3-1)*O0.pipColumnSpacing,O0.tileThickness/2+0.0005,(Math.floor(V/3)-1)*O0.pipRowSpacing)))),C0.length){let q0=new R8(gJ,NJ,C0.length),A0=new d0;C0.forEach((V,S)=>q0.setMatrixAt(S,A0.makeTranslation(V.x,V.y,V.z))),r.add(q0)}let b0=new x0(kJ,WJ);b0.position.y=O0.tileThickness/2+0.0004,r.add(b0)}return r}function b(T){return o0(T.x,O0.surfaceY+O0.tileThickness/2+0.001,T.z)}let vJ=new x0(new q7(0.2,0.006,5,38),new oJ({color:"#e8bf70",transparent:!0,opacity:0.7}));vJ.rotation.x=-Math.PI/2,vJ.position.y=0.027,$.add(vJ);let a0=[],DJ=[],z=[],M=[],v=new DK,l=0,W0=4,N0=[];function D0(T){let t=new AJ,H0=["coffee","juice","beer","water"][T];if(H0==="beer"){let V=new x0(f,G("#62421e",0.23,0.05));V.scale.setScalar(0.85),t.add(V)}else{let V=new x0(new t9(0.047,0.037,0.105,18),G(H0==="coffee"?"#e4dfc8":H0==="juice"?"#bfa478":"#719b9c",0.3));V.position.y=0.055,t.add(V);let S=new x0(new $Q(0.041,20),G(H0==="coffee"?"#24150e":H0==="juice"?"#ebbd72":"#9cbfc0",0.16));if(S.rotation.x=-Math.PI/2,S.position.y=0.11,t.add(S),H0==="coffee"){let p=new x0(new t9(0.075,0.07,0.012,20),G("#ded9c3",0.25));t.add(p);let j=new x0(new q7(0.024,0.006,6,12),G("#e4dfc8",0.3));j.position.set(0.052,0.062,0),t.add(j)}}t.traverse((V)=>{if(V.isMesh)V.castShadow=!0,V.receiveShadow=!0});let[r,$0,C0]=$8[T],b0=o0(-0.4,0,0.05).applyAxisAngle(o0(0,1,0),C0).add(o0(r,0,$0)),q0=new AJ,A0=(V,S,p,j,g,R0,V0)=>{let E0=new x0(new aJ(V,S,p),V0);E0.position.set(j,g,R0),E0.castShadow=E0.receiveShadow=!0,q0.add(E0)};for(let[V,S]of[[-0.075,-0.075],[0.075,-0.075],[-0.075,0.075],[0.075,0.075]])A0(0.025,0.6,0.025,V,0.3,S,C);A0(0.2,0.022,0.2,0,0.611,0,L),q0.position.set(b0.x,0,b0.z),q0.rotation.y=C0,$.add(q0),b0.y=0.622,t.scale.setScalar(0.85),t.position.copy(b0),$.add(t),M.push({group:t,home:b0,index:T})}for(let T=0;T<4;T++)D0(T);async function c(T,t){try{Q(`Seating ${["Don Rafa","Marisol","Luis","Carmen"][T]}…`,l/W0);let H0=await v.loadAsync(`/models/${t}.glb`);DJ[T]=H0;let r=H0.scene,$0=new AJ;$0.add(r);let C0=new GQ(r);if(H0.animations[0])C0.clipAction(H0.animations.find((j)=>j.name==="Seated")||H0.animations[0]).play();C0.setTime(O0.neutralPoseTime),r.updateMatrixWorld(!0),r.traverse((j)=>{if(j.isSkinnedMesh)j.computeBoundingBox();if(j.isMesh)j.castShadow=!0,j.receiveShadow=!0,j.frustumCulled=!1,j.material.roughness=0.83});let b0=new H9().setFromObject(r),q0=r.getObjectByName("Hips"),A0=q0?.getWorldPosition(o0())||b0.getCenter(o0());r.position.set(-A0.x,-b0.min.y,-A0.z);let[V,S,p]=$8[T];if($0.position.set(V,0,S),$0.rotation.y=p,$.add($0),a0[T]={root:r,holder:$0,index:T,pose:vK(r),head:r.getObjectByName("Head"),neck:r.getObjectByName("neck"),front:r.getObjectByName("headfront"),chest:r.getObjectByName("Spine"),hips:r.getObjectByName("Hips"),lomo:r.getObjectByName("Spine02"),muslos:[r.getObjectByName("LeftUpLeg"),r.getObjectByName("RightUpLeg")],hombros:[[1,r.getObjectByName("LeftShoulder")],[-1,r.getObjectByName("RightShoulder")]],spine:r.getObjectByName("Spine01"),reaction:null,brazos:["Left","Right"].map((j)=>({lado:j,hombro:r.getObjectByName(j+"Shoulder"),brazo:r.getObjectByName(j+"Arm"),antebrazo:r.getObjectByName(j+"ForeArm"),mano:r.getObjectByName(j+"Hand")}))},a0[T].bebida=M.find((j)=>j.index===T),l++,Q(l===4?"The table is ready.":`${l} of 4 seats ready`,l/W0),z.length===0&&h>0)XJ(h)}catch(H0){N0.push(t),console.error("Character load failed",t,H0),Q(`Could not load ${t}. Reload to retry.`,l/W0)}}let a=Promise.all(["rafa-upright","marisol","luis-upright","carmen"].map((T,t)=>c(t,T))),P0=null,w0=null,B0="",X0=new Set,h0=[0,1,2,3].map(()=>o0()),p0=(T)=>{let t=T.detail||{};if(t.active)X0.add(t.seat);else X0.delete(t.seat)};window.addEventListener("mesa:botvoice",p0);let KJ=null,h=0,L0="",i=0,k0="attract",F0=null,Q0=[],M0=0,n0=0;function OJ(T){while(T.children.length){let t=T.children.pop();t.parent=null,t.traverse((H0)=>{if(H0.isMesh&&!rJ.has(H0.geometry))H0.geometry.dispose();if(H0.isMesh&&!yJ.has(H0.material))H0.material.dispose()})}}function XJ(T){h=T;let t=Math.min(8,T);for(let H0=z.length-1;H0>=t;H0--)$.remove(z[H0].holder),z.pop();while(z.length<t&&DJ.filter(Boolean).length){let H0=z.length,r=DJ[H0%4]||DJ.find(Boolean),$0=d$(r.scene),C0=new AJ;C0.add($0);let b0=new GQ($0);if(r.animations[0])b0.clipAction(r.animations.find((S)=>S.name==="Seated")||r.animations[0]).play();b0.setTime(O0.neutralPoseTime),$0.updateMatrixWorld(!0),$0.traverse((S)=>{if(S.isSkinnedMesh)S.computeBoundingBox();if(S.isMesh)S.castShadow=!1,S.frustumCulled=!1});let q0=new H9().setFromObject($0),A0=$0.getObjectByName("Hips")?.getWorldPosition(o0())||q0.getCenter(o0());$0.position.x-=A0.x,$0.position.y-=q0.min.y,$0.position.z-=A0.z,C0.position.set(-2.5+H0%4*1.66,0,-2.5-Math.floor(H0/4)*0.65),C0.rotation.y=0,$.add(C0);let V=new x0(new aJ(0.56,0.06,0.54),w);V.position.set(0,O0.chairSeatY,0),C0.add(V),z.push({root:$0,holder:C0,pose:vK($0),head:$0.getObjectByName("Head"),neck:$0.getObjectByName("neck"),front:$0.getObjectByName("headfront"),chest:$0.getObjectByName("Spine"),spine:$0.getObjectByName("Spine01"),index:H0+4})}}function N9(T="table"){H.minDistance=T==="seat"||T==="close"?0.3:0.7,H.minPolarAngle=T==="overhead"?0.01:0.25;let t,H0=o0(0,0.8,0);if(T==="attract")t=o0(2.2,1.95,2.75),H0=o0(0,0.92,-0.2);else if(T==="overhead")t=o0(0.001,1.72,0.3),H0=o0(0,O0.surfaceY,0.02);else if(T==="seat")t=o0(0,1.28,O0.seatDistance-0.17),H0=o0(0,0.8,-0.1);else if(T==="close")t=o0(0.62,1.3,1),H0=o0(-0.03,0.85,-0.08);else t=o0(0.95,1.78,1.3);F0={from:W.position.clone(),to:t,fromTarget:H.target.clone(),toTarget:H0,t:0}}function k9(T,t=0){KJ=T;{let r=T&&(T.phase==="handEnd"||T.phase==="seriesEnd")&&T.result,$0=r?T.handNo+":"+T.phase:"";if($0&&$0!==B0)w0={t:Y8.elapsedTime+0.5,team:T.result.team??null};if(!r)w0=null;B0=$0}if(h!==t)XJ(t);let H0=T?T.handNo+":"+T.moves.length+":"+T.phase:"attract";if(H0!==L0){if(L0=H0,OJ(f0),Q0=[],T?.chain.length||0){let $0=JU(T.chain,T.moves);T.chain.forEach((C0,b0)=>{let q0=TJ(C0.x,C0.y);if(q0.position.copy(b($0[b0])),q0.rotation.y=$0[b0].yaw,f0.add(q0),T.event?.type==="play"&&C0.id===T.event.tile){let[A0,V]=$8[C0.seat],S=o0(A0,0,V).multiplyScalar(O0.rackRadius/O0.seatDistance).setY(O0.surfaceY+0.05),p=q0.position.clone(),j={obj:q0,from:S,to:p,elapsed:0,duration:0.45};Q0.push(j),q0.position.copy(S),M0=performance.now();let g=a0[C0.seat];if(P0={p,t:Y8.elapsedTime+j.duration},g)g.reaction={time:Y8.elapsedTime},g.jugada={t0:Y8.elapsedTime,obj:q0,anim:j,hasta:p}}})}else if(!T||T.phase==="lobby")for(let $0=0;$0<28;$0++){let C0=TJ(0,0,!0);C0.position.set(($0*37%23-11)*0.016,O0.surfaceY+O0.tileThickness*(0.55+$0%3*0.9),($0*13%19-9)*0.016),C0.rotation.y=$0*1.73,f0.add(C0)}if(T?.phase==="playing"&&T.handNo!==i&&T.moves.length===0){i=T.handNo,n0=performance.now()+3400;for(let $0=0;$0<28;$0++){let C0=TJ(0,0,!0),b0=o0(($0*37%23-11)*0.015,O0.surfaceY+0.012,($0*13%19-9)*0.015),[q0,A0]=$8[$0%4];C0.position.copy(b0),f0.add(C0),Q0.push({obj:C0,from:b0,to:o0(q0,0,A0).multiplyScalar(O0.rackRadius/O0.seatDistance).setY(O0.surfaceY+0.015),elapsed:-$0*0.065,duration:1.2,remove:!0,shuffle:!0})}}}{OJ(y0);let r=[];for(let $0=0;$0<4;$0++){let C0=!T||T.phase==="lobby"?0:T.counts[$0]??0,[b0,q0,A0]=$8[$0];for(let V=0;V<C0;V++){let S=new FJ;S.quaternion.setFromAxisAngle(o0(0,1,0),A0).multiply(new GJ().setFromAxisAngle(o0(1,0,0),0.12)).multiply(new GJ().setFromAxisAngle(o0(0,1,0),Math.PI/2)).multiply(new GJ().setFromAxisAngle(o0(0,0,1),Math.PI/2));let j=O0.tableCenterY+O0.tableThickness/2+O0.tileLength/2*Math.cos(0.12)+O0.tileThickness/2*Math.sin(0.12)+0.001;S.position.copy(o0((V-(C0-1)/2)*O0.rackSpacing,j,-O0.rackRadius).applyAxisAngle(o0(0,1,0),A0)),S.updateMatrix(),r.push(S.matrix.clone())}}if(r.length){let $0=new R8(_J,QJ,r.length);r.forEach((C0,b0)=>$0.setMatrixAt(b0,C0)),$0.castShadow=!0,$0.receiveShadow=!0,y0.add($0)}}if(vJ.visible=T?.phase==="playing",vJ.visible){let[r,$0]=$8[T.turn];vJ.position.set(r,0.025,$0)}}let Y8=new b$,o8=0,a8=0,P7=0,I7=60,B6=!1,u9,A7="high",k6=null;function D6(){if(B6)return;u9=requestAnimationFrame(D6);let T=Y8.getDelta(),t=Math.min(T,0.06),H0=k6??Y8.elapsedTime,r=performance.now();if(a8++,P7+=T,P7>1)I7=a8/P7,a8=0,P7=0;o8++;let $0=document.documentElement.classList.contains("reduced");if(F0){F0.t=Math.min(1,F0.t+t/1.1);let q0=F0.t*F0.t*(3-2*F0.t);if(W.position.lerpVectors(F0.from,F0.to,q0),H.target.lerpVectors(F0.fromTarget,F0.toTarget,q0),F0.t===1)F0=null}if(!$0)j0.rotation.z=H0*3.5,o.rotation.z=Math.sin(H0*0.47)*0.009,g0.update(H0);u0.visible=!0,u0.position.set(-4.7,0.05,2.8),u0.rotation.y=-0.28;let C0=KJ,b0={dt:t,jugando:C0?.phase==="playing",turno:C0?.turn,habla:X0,foco:P0,fin:w0,cabezas:a0.map((q0,A0)=>q0?.head?q0.head.getWorldPosition(h0[A0]):null)};for(let q0 of a0.filter(Boolean))r$(q0,H0,$0,b0);for(let q0 of z)r$(q0,H0,$0,b0);if(Q0=Q0.filter((q0)=>{if(q0.elapsed+=t,q0.elapsed<0)return!0;let A0=Math.min(1,q0.elapsed/q0.duration),V=A0*A0*(3-2*A0);if(q0.obj.position.lerpVectors(q0.from,q0.to,V),q0.obj.position.y+=Math.sin(A0*Math.PI)*(q0.shuffle?0.03:0.07),q0.shuffle)q0.obj.rotation.y=Math.sin(A0*z7)*0.6;if(A0===1&&q0.remove)return f0.remove(q0.obj),!1;return A0<1}),y0.visible=r>=n0,H.update(),Z.render($,W),o8%2===0)for(let q0 of document.querySelectorAll("[data-seatlabel]")){let A0=Number(q0.dataset.seatlabel),[V,S]=$8[A0],p=a0[A0]?.head?.getWorldPosition(o0()).add(o0(0,0.23,0))||o0(V,1.45,S),j=p.project(W),g=Math.min(j.y,0.74);q0.style.transform=`translate(${(j.x*0.5+0.5)*innerWidth}px,${(-g*0.5+0.5)*innerHeight}px) translate(-50%,-100%)`,q0.style.visibility=j.z>1||Math.abs(j.x)>1.1||j.y<-1.15?"hidden":"visible"}if(o8%10===0||o8===1){window.mesaRigDebug=a0.filter(Boolean).map((A0)=>({index:A0.index,head:A0.head?.getWorldPosition(o0()).toArray(),hip:A0.root.getObjectByName("Hips")?.getWorldPosition(o0()).toArray(),rootScale:A0.root.scale.toArray()})),window.mesaDiagnostics={fps:Math.round(I7),drawCalls:Z.info.render.calls,triangles:Z.info.render.triangles,characters:l,crowd:h,visibleCrowd:z.length,boardTiles:KJ?.chain.length||0,quality:A7,modelErrors:N0};let q0=document.querySelector("#perf");if(q0)q0.textContent=`${Math.round(I7)} fps · ${Z.info.render.calls} draws`}}window.mesaBeber=(T,t)=>{let H0=a0[T];if(H0&&H0.bebida&&!H0.jugada)H0.trago={t0:Y8.elapsedTime,fijo:t}},k9(null),D6();let r8=()=>{W.aspect=innerWidth/innerHeight,W.updateProjectionMatrix(),Z.setSize(innerWidth,innerHeight)};return window.addEventListener("resize",r8),H.addEventListener("start",()=>{F0=null}),{update:k9,setCrowd:XJ,setCamera:N9,ready:a,sampleTime(T){k6=T;for(let t of[...a0.filter(Boolean),...z])r$(t,T,!1);Z.render($,W)},setMode(T){k0=T,N9(T==="attract"?"attract":"table")},quality(T){A7=T,Z.shadowMap.enabled=T!=="low"&&!K,Z.setPixelRatio(K?0.65:T==="low"?1:Math.min(devicePixelRatio,1.5,1920/innerWidth))},dispose(){B6=!0,window.removeEventListener("mesa:botvoice",p0),cancelAnimationFrame(u9),window.removeEventListener("resize",r8),H.dispose(),Z.dispose(),J.replaceChildren()}}}export{mL as createWorld};

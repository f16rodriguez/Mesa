var _Y="186",Z7={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},K7={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},TY=0,_Z=1,wY=2;var y7=1,SY=2,j6=3,H7=0,L8=1,W8=2,s8=0,PQ=1,M9=2,TZ=3,wZ=4,jY=5;var y6=100,yY=101,vY=102,fY=103,hY=104,bY=200,xY=201,gY=202,pY=203,mY=204,lY=205,uY=206,dY=207,cY=208,nY=209,sY=210,iY=211,oY=212,aY=213,rY=214,tY=0,eY=1,JX=2,SZ=3,QX=4,$X=5,WX=6,ZX=7,KX=0,HX=1,YX=2,X9=0,IQ=1,AQ=2,_Q=3,v7=4,TQ=5,wQ=6,SQ=7;var v6=301,f7=302,a$=303,r$=304,jQ=306,Y7=1000,f6=1001,t$=1002,U9=1003,e$=1004;var h7=1005;var N8=1006,h6=1007;var C9=1008;var G9=1009,XX=1010,UX=1011,yQ=1012,jZ=1013,X7=1014,x9=1015,E8=1016,yZ=1017,vZ=1018,b6=1020,GX=35902,NX=35899,EX=1021,FX=1022,z9=1023,b7=1026,x7=1027,qX=1028,fZ=1029,g7=1030,hZ=1031;var bZ=1033,JW=33776,QW=33777,$W=33778,WW=33779,xZ=35840,gZ=35841,pZ=35842,mZ=35843,lZ=36196,uZ=37492,dZ=37496,cZ=37488,nZ=37489,ZW=37490,sZ=37491,iZ=37808,oZ=37809,aZ=37810,rZ=37811,tZ=37812,eZ=37813,JK=37814,QK=37815,$K=37816,WK=37817,ZK=37818,KK=37819,HK=37820,YK=37821,XK=36492,UK=36494,GK=36495,NK=36283,EK=36284,KW=36285,FK=36286;var qK=2300,HW=2301;var OK=0,vQ=1,x6=2;var RK=0,OX=1,p7="",B8="srgb",p8="srgb-linear",LK="linear",SJ="srgb";var RX=512,LX=513,VX=514,YW=515,DX=516,BX=517,XW=518,kX=519;var VK="300 es",DK=2000;function z5(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function P5(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function _6(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function MX(){let J=_6("canvas");return J.style.display="block",J}var bH={},T6=null;function kQ(...J){let Q="THREE."+J.shift();if(T6)T6("log",Q,...J);else console.log(Q,...J)}function CX(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function g0(...J){J=CX(J);let Q="THREE."+J.shift();if(T6)T6("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function o0(...J){J=CX(J);let Q="THREE."+J.shift();if(T6)T6("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function w7(...J){let Q=J.join(" ");if(Q in bH)return;bH[Q]=!0,g0(...J)}function zX(J,Q,$){return new Promise(function(W,Z){function K(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:Z();break;case J.TIMEOUT_EXPIRED:setTimeout(K,$);break;default:W()}}setTimeout(K,$)})}var PX={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class N9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let W=$[J];if(W!==void 0){let Z=W.indexOf(Q);if(Z!==-1)W.splice(Z,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let W=$.slice(0);for(let Z=0,K=W.length;Z<K;Z++)W[Z].call(this,J);J.target=null}}}var V8=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xH=1234567,LQ=Math.PI/180,S7=180/Math.PI;function n8(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,W=Math.random()*4294967295|0;return(V8[J&255]+V8[J>>8&255]+V8[J>>16&255]+V8[J>>24&255]+"-"+V8[Q&255]+V8[Q>>8&255]+"-"+V8[Q>>16&15|64]+V8[Q>>24&255]+"-"+V8[$&63|128]+V8[$>>8&255]+"-"+V8[$>>16&255]+V8[$>>24&255]+V8[W&255]+V8[W>>8&255]+V8[W>>16&255]+V8[W>>24&255]).toLowerCase()}function WJ(J,Q,$){return Math.max(Q,Math.min($,J))}function BK(J,Q){return(J%Q+Q)%Q}function I5(J,Q,$,W,Z){return W+(J-Q)*(Z-W)/($-Q)}function A5(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function VQ(J,Q,$){return(1-$)*J+$*Q}function _5(J,Q,$,W){return VQ(J,Q,1-Math.exp(-$*W))}function T5(J,Q=1){return Q-Math.abs(BK(J,Q*2)-Q)}function w5(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function S5(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function j5(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function y5(J,Q){return J+Math.random()*(Q-J)}function v5(J){return J*(0.5-Math.random())}function f5(J){if(J!==void 0)xH=J;let Q=xH+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function h5(J){return J*LQ}function b5(J){return J*S7}function x5(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function g5(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function p5(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function m5(J,Q,$,W,Z){let{cos:K,sin:H}=Math,Y=K($/2),X=H($/2),U=K((Q+W)/2),N=H((Q+W)/2),E=K((Q-W)/2),G=H((Q-W)/2),F=K((W-Q)/2),q=H((W-Q)/2);switch(Z){case"XYX":J.set(Y*N,X*E,X*G,Y*U);break;case"YZY":J.set(X*G,Y*N,X*E,Y*U);break;case"ZXZ":J.set(X*E,X*G,Y*N,Y*U);break;case"XZX":J.set(Y*N,X*q,X*F,Y*U);break;case"YXY":J.set(X*F,Y*N,X*q,Y*U);break;case"ZYZ":J.set(X*q,X*F,Y*N,Y*U);break;default:g0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+Z)}}function H9(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:case Uint8ClampedArray:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function TJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var U7={DEG2RAD:LQ,RAD2DEG:S7,generateUUID:n8,clamp:WJ,euclideanModulo:BK,mapLinear:I5,inverseLerp:A5,lerp:VQ,damp:_5,pingpong:T5,smoothstep:w5,smootherstep:S5,randInt:j5,randFloat:y5,randFloatSpread:v5,seededRandom:f5,degToRad:h5,radToDeg:b5,isPowerOfTwo:x5,ceilPowerOfTwo:g5,floorPowerOfTwo:p5,setQuaternionFromProperEuler:m5,normalize:TJ,denormalize:H9};class W0{static{W0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6],this.y=W[1]*Q+W[4]*$+W[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=WJ(this.x,J.x,Q.x),this.y=WJ(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=WJ(this.x,J,Q),this.y=WJ(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(WJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(WJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),W=Math.sin(Q),Z=this.x-J.x,K=this.y-J.y;return this.x=Z*$-K*W+J.x,this.y=Z*W+K*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qJ{constructor(J=0,Q=0,$=0,W=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=W}static slerpFlat(J,Q,$,W,Z,K,H){let Y=$[W+0],X=$[W+1],U=$[W+2],N=$[W+3],E=Z[K+0],G=Z[K+1],F=Z[K+2],q=Z[K+3];if(N!==q||Y!==E||X!==G||U!==F){let V=Y*E+X*G+U*F+N*q;if(V<0)E=-E,G=-G,F=-F,q=-q,V=-V;let R=1-H;if(V<0.9995){let O=Math.acos(V),z=Math.sin(O);R=Math.sin(R*O)/z,H=Math.sin(H*O)/z,Y=Y*R+E*H,X=X*R+G*H,U=U*R+F*H,N=N*R+q*H}else{Y=Y*R+E*H,X=X*R+G*H,U=U*R+F*H,N=N*R+q*H;let O=1/Math.sqrt(Y*Y+X*X+U*U+N*N);Y*=O,X*=O,U*=O,N*=O}}J[Q]=Y,J[Q+1]=X,J[Q+2]=U,J[Q+3]=N}static multiplyQuaternionsFlat(J,Q,$,W,Z,K){let H=$[W],Y=$[W+1],X=$[W+2],U=$[W+3],N=Z[K],E=Z[K+1],G=Z[K+2],F=Z[K+3];return J[Q]=H*F+U*N+Y*G-X*E,J[Q+1]=Y*F+U*E+X*N-H*G,J[Q+2]=X*F+U*G+H*E-Y*N,J[Q+3]=U*F-H*N-Y*E-X*G,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,W){return this._x=J,this._y=Q,this._z=$,this._w=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:W,_z:Z,_order:K}=J,H=Math.cos,Y=Math.sin,X=H($/2),U=H(W/2),N=H(Z/2),E=Y($/2),G=Y(W/2),F=Y(Z/2);switch(K){case"XYZ":this._x=E*U*N+X*G*F,this._y=X*G*N-E*U*F,this._z=X*U*F+E*G*N,this._w=X*U*N-E*G*F;break;case"YXZ":this._x=E*U*N+X*G*F,this._y=X*G*N-E*U*F,this._z=X*U*F-E*G*N,this._w=X*U*N+E*G*F;break;case"ZXY":this._x=E*U*N-X*G*F,this._y=X*G*N+E*U*F,this._z=X*U*F+E*G*N,this._w=X*U*N-E*G*F;break;case"ZYX":this._x=E*U*N-X*G*F,this._y=X*G*N+E*U*F,this._z=X*U*F-E*G*N,this._w=X*U*N+E*G*F;break;case"YZX":this._x=E*U*N+X*G*F,this._y=X*G*N+E*U*F,this._z=X*U*F-E*G*N,this._w=X*U*N-E*G*F;break;case"XZY":this._x=E*U*N-X*G*F,this._y=X*G*N-E*U*F,this._z=X*U*F+E*G*N,this._w=X*U*N+E*G*F;break;default:g0("Quaternion: .setFromEuler() encountered an unknown order: "+K)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,W=Math.sin($);return this._x=J.x*W,this._y=J.y*W,this._z=J.z*W,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],W=Q[4],Z=Q[8],K=Q[1],H=Q[5],Y=Q[9],X=Q[2],U=Q[6],N=Q[10],E=$+H+N;if(E>0){let G=0.5/Math.sqrt(E+1);this._w=0.25/G,this._x=(U-Y)*G,this._y=(Z-X)*G,this._z=(K-W)*G}else if($>H&&$>N){let G=2*Math.sqrt(1+$-H-N);this._w=(U-Y)/G,this._x=0.25*G,this._y=(W+K)/G,this._z=(Z+X)/G}else if(H>N){let G=2*Math.sqrt(1+H-$-N);this._w=(Z-X)/G,this._x=(W+K)/G,this._y=0.25*G,this._z=(Y+U)/G}else{let G=2*Math.sqrt(1+N-$-H);this._w=(K-W)/G,this._x=(Z+X)/G,this._y=(Y+U)/G,this._z=0.25*G}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(WJ(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let W=Math.min(1,Q/$);return this.slerp(J,W),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:W,_z:Z,_w:K}=J,H=Q._x,Y=Q._y,X=Q._z,U=Q._w;return this._x=$*U+K*H+W*X-Z*Y,this._y=W*U+K*Y+Z*H-$*X,this._z=Z*U+K*X+$*Y-W*H,this._w=K*U-$*H-W*Y-Z*X,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:W,_z:Z,_w:K}=J,H=this.dot(J);if(H<0)$=-$,W=-W,Z=-Z,K=-K,H=-H;let Y=1-Q;if(H<0.9995){let X=Math.acos(H),U=Math.sin(X);Y=Math.sin(Y*X)/U,Q=Math.sin(Q*X)/U,this._x=this._x*Y+$*Q,this._y=this._y*Y+W*Q,this._z=this._z*Y+Z*Q,this._w=this._w*Y+K*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+W*Q,this._z=this._z*Y+Z*Q,this._w=this._w*Y+K*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),W=Math.sqrt(1-$),Z=Math.sqrt($);return this.set(W*Math.sin(J),W*Math.cos(J),Z*Math.sin(Q),Z*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{static{T.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(gH.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(gH.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6]*W,this.y=Z[1]*Q+Z[4]*$+Z[7]*W,this.z=Z[2]*Q+Z[5]*$+Z[8]*W,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements,K=1/(Z[3]*Q+Z[7]*$+Z[11]*W+Z[15]);return this.x=(Z[0]*Q+Z[4]*$+Z[8]*W+Z[12])*K,this.y=(Z[1]*Q+Z[5]*$+Z[9]*W+Z[13])*K,this.z=(Z[2]*Q+Z[6]*$+Z[10]*W+Z[14])*K,this}applyQuaternion(J){let Q=this.x,$=this.y,W=this.z,Z=J.x,K=J.y,H=J.z,Y=J.w,X=2*(K*W-H*$),U=2*(H*Q-Z*W),N=2*(Z*$-K*Q);return this.x=Q+Y*X+K*N-H*U,this.y=$+Y*U+H*X-Z*N,this.z=W+Y*N+Z*U-K*X,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements;return this.x=Z[0]*Q+Z[4]*$+Z[8]*W,this.y=Z[1]*Q+Z[5]*$+Z[9]*W,this.z=Z[2]*Q+Z[6]*$+Z[10]*W,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=WJ(this.x,J.x,Q.x),this.y=WJ(this.y,J.y,Q.y),this.z=WJ(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=WJ(this.x,J,Q),this.y=WJ(this.y,J,Q),this.z=WJ(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(WJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:W,z:Z}=J,K=Q.x,H=Q.y,Y=Q.z;return this.x=W*Y-Z*H,this.y=Z*K-$*Y,this.z=$*H-W*K,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return aW.copy(this).projectOnVector(J),this.sub(aW)}reflect(J){return this.sub(aW.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(WJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,W=this.z-J.z;return Q*Q+$*$+W*W}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let W=Math.sin(Q)*J;return this.x=W*Math.sin($),this.y=Math.cos(Q)*J,this.z=W*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),W=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=W,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var aW=new T,gH=new qJ;class t0{static{t0.prototype.isMatrix3=!0}constructor(J,Q,$,W,Z,K,H,Y,X){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,W,Z,K,H,Y,X)}set(J,Q,$,W,Z,K,H,Y,X){let U=this.elements;return U[0]=J,U[1]=W,U[2]=H,U[3]=Q,U[4]=Z,U[5]=Y,U[6]=$,U[7]=K,U[8]=X,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,W=Q.elements,Z=this.elements,K=$[0],H=$[3],Y=$[6],X=$[1],U=$[4],N=$[7],E=$[2],G=$[5],F=$[8],q=W[0],V=W[3],R=W[6],O=W[1],z=W[4],D=W[7],L=W[2],M=W[5],I=W[8];return Z[0]=K*q+H*O+Y*L,Z[3]=K*V+H*z+Y*M,Z[6]=K*R+H*D+Y*I,Z[1]=X*q+U*O+N*L,Z[4]=X*V+U*z+N*M,Z[7]=X*R+U*D+N*I,Z[2]=E*q+G*O+F*L,Z[5]=E*V+G*z+F*M,Z[8]=E*R+G*D+F*I,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8];return Q*K*U-Q*H*X-$*Z*U+$*H*Y+W*Z*X-W*K*Y}invert(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],N=U*K-H*X,E=H*Y-U*Z,G=X*Z-K*Y,F=Q*N+$*E+W*G;if(F===0)return this.set(0,0,0,0,0,0,0,0,0);let q=1/F;return J[0]=N*q,J[1]=(W*X-U*$)*q,J[2]=(H*$-W*K)*q,J[3]=E*q,J[4]=(U*Q-W*Y)*q,J[5]=(W*Z-H*Q)*q,J[6]=G*q,J[7]=($*Y-X*Q)*q,J[8]=(K*Q-$*Z)*q,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,W,Z,K,H){let Y=Math.cos(Z),X=Math.sin(Z);return this.set($*Y,$*X,-$*(Y*K+X*H)+K+J,-W*X,W*Y,-W*(-X*K+Y*H)+H+Q,0,0,1),this}scale(J,Q){return w7("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rW.makeScale(J,Q)),this}rotate(J){return w7("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rW.makeRotation(-J)),this}translate(J,Q){return w7("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rW.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let W=0;W<9;W++)if(Q[W]!==$[W])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var rW=new t0,pH=new t0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),mH=new t0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function l5(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(Z,K,H){if(this.enabled===!1||K===H||!K||!H)return Z;if(this.spaces[K].transfer==="srgb")Z.r=b9(Z.r),Z.g=b9(Z.g),Z.b=b9(Z.b);if(this.spaces[K].primaries!==this.spaces[H].primaries)Z.applyMatrix3(this.spaces[K].toXYZ),Z.applyMatrix3(this.spaces[H].fromXYZ);if(this.spaces[H].transfer==="srgb")Z.r=I6(Z.r),Z.g=I6(Z.g),Z.b=I6(Z.b);return Z},workingToColorSpace:function(Z,K){return this.convert(Z,this.workingColorSpace,K)},colorSpaceToWorking:function(Z,K){return this.convert(Z,K,this.workingColorSpace)},getPrimaries:function(Z){return this.spaces[Z].primaries},getTransfer:function(Z){if(Z==="")return"linear";return this.spaces[Z].transfer},getToneMappingMode:function(Z){return this.spaces[Z].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(Z,K=this.workingColorSpace){return Z.fromArray(this.spaces[K].luminanceCoefficients)},define:function(Z){Object.assign(this.spaces,Z)},_getMatrix:function(Z,K,H){return Z.copy(this.spaces[K].toXYZ).multiply(this.spaces[H].fromXYZ)},_getDrawingBufferColorSpace:function(Z){return this.spaces[Z].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(Z=this.workingColorSpace){return this.spaces[Z].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(Z,K){return w7("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(Z,K)},toWorkingColorSpace:function(Z,K){return w7("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(Z,K)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],W=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:W,transfer:"linear",toXYZ:pH,fromXYZ:mH,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:W,transfer:"srgb",toXYZ:pH,fromXYZ:mH,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var ZJ=l5();function b9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function I6(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var X6;class kK{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(X6===void 0)X6=_6("canvas");X6.width=J.width,X6.height=J.height;let W=X6.getContext("2d");if(J instanceof ImageData)W.putImageData(J,0,0);else W.drawImage(J,0,0,J.width,J.height);$=X6}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=_6("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let W=$.getImageData(0,0,J.width,J.height),Z=W.data;for(let K=0;K<Z.length;K++)Z[K]=b9(Z[K]/255)*255;return $.putImageData(W,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(b9(Q[$]/255)*255);else Q[$]=b9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return g0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var u5=0;class fQ{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:u5++}),this.uuid=n8(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},W=this.data;if(W!==null){let Z;if(Array.isArray(W)){Z=[];for(let K=0,H=W.length;K<H;K++)if(W[K].isDataTexture)Z.push(tW(W[K].image));else Z.push(tW(W[K]))}else Z=tW(W);$.url=Z}if(!Q)J.images[this.uuid]=$;return $}}function tW(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return kK.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return g0("Texture: Unable to serialize Texture."),{}}var d5=0,eW=new T;class tJ extends N9{constructor(J=tJ.DEFAULT_IMAGE,Q=tJ.DEFAULT_MAPPING,$=1001,W=1001,Z=1006,K=1008,H=1023,Y=1009,X=tJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:d5++}),this.uuid=n8(),this.name="",this.source=new fQ(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=W,this.magFilter=Z,this.minFilter=K,this.anisotropy=X,this.format=H,this.internalFormat=null,this.type=Y,this.offset=new W0(0,0),this.repeat=new W0(1,1),this.center=new W0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new t0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(eW).x}get height(){return this.source.getSize(eW).y}get depth(){return this.source.getSize(eW).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){g0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let W=this[Q];if(W===void 0){g0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(W&&$&&(W.isVector2&&$.isVector2))W.copy($);else if(W&&$&&(W.isVector3&&$.isVector3))W.copy($);else if(W&&$&&(W.isMatrix3&&$.isMatrix3))W.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}tJ.DEFAULT_IMAGE=null;tJ.DEFAULT_MAPPING=300;tJ.DEFAULT_ANISOTROPY=1;class wJ{static{wJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,W=1){this.x=J,this.y=Q,this.z=$,this.w=W}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,W){return this.x=J,this.y=Q,this.z=$,this.w=W,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,W=this.z,Z=this.w,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*W+K[12]*Z,this.y=K[1]*Q+K[5]*$+K[9]*W+K[13]*Z,this.z=K[2]*Q+K[6]*$+K[10]*W+K[14]*Z,this.w=K[3]*Q+K[7]*$+K[11]*W+K[15]*Z,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,W,Z,K=0.01,H=0.1,Y=J.elements,X=Y[0],U=Y[4],N=Y[8],E=Y[1],G=Y[5],F=Y[9],q=Y[2],V=Y[6],R=Y[10];if(Math.abs(U-E)<0.01&&Math.abs(N-q)<0.01&&Math.abs(F-V)<0.01){if(Math.abs(U+E)<0.1&&Math.abs(N+q)<0.1&&Math.abs(F+V)<0.1&&Math.abs(X+G+R-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let z=(X+1)/2,D=(G+1)/2,L=(R+1)/2,M=(U+E)/4,I=(N+q)/4,w=(F+V)/4;if(z>D&&z>L)if(z<0.01)$=0,W=0.707106781,Z=0.707106781;else $=Math.sqrt(z),W=M/$,Z=I/$;else if(D>L)if(D<0.01)$=0.707106781,W=0,Z=0.707106781;else W=Math.sqrt(D),$=M/W,Z=w/W;else if(L<0.01)$=0.707106781,W=0.707106781,Z=0;else Z=Math.sqrt(L),$=I/Z,W=w/Z;return this.set($,W,Z,Q),this}let O=Math.sqrt((V-F)*(V-F)+(N-q)*(N-q)+(E-U)*(E-U));if(Math.abs(O)<0.001)O=1;return this.x=(V-F)/O,this.y=(N-q)/O,this.z=(E-U)/O,this.w=Math.acos((X+G+R-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=WJ(this.x,J.x,Q.x),this.y=WJ(this.y,J.y,Q.y),this.z=WJ(this.z,J.z,Q.z),this.w=WJ(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=WJ(this.x,J,Q),this.y=WJ(this.y,J,Q),this.z=WJ(this.z,J,Q),this.w=WJ(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(WJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class MK extends N9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new wJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new wJ(0,0,J,Q),this.textures=[];let W={width:J,height:Q,depth:$.depth},Z=new tJ(W),K=$.count;for(let H=0;H<K;H++)this.textures[H]=Z.clone(),this.textures[H].isRenderTargetTexture=!0,this.textures[H].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveColorBuffer=$.resolveColorBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this.storeMultisampledColorBuffer=$.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=$.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=$.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let W=0,Z=this.textures.length;W<Z;W++)if(this.textures[W].image.width=J,this.textures[W].image.height=Q,this.textures[W].image.depth=$,this.textures[W].isData3DTexture!==!0)this.textures[W].isArrayTexture=this.textures[W].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let W=Object.assign({},J.textures[Q].image);this.textures[Q].source=new fQ(W)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class eJ extends MK{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class UW extends tJ{constructor(J=null,Q=1,$=1,W=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class CK extends tJ{constructor(J=null,Q=1,$=1,W=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class n0{static{n0.prototype.isMatrix4=!0}constructor(J,Q,$,W,Z,K,H,Y,X,U,N,E,G,F,q,V){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,W,Z,K,H,Y,X,U,N,E,G,F,q,V)}set(J,Q,$,W,Z,K,H,Y,X,U,N,E,G,F,q,V){let R=this.elements;return R[0]=J,R[4]=Q,R[8]=$,R[12]=W,R[1]=Z,R[5]=K,R[9]=H,R[13]=Y,R[2]=X,R[6]=U,R[10]=N,R[14]=E,R[3]=G,R[7]=F,R[11]=q,R[15]=V,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n0().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,W=1/U6.setFromMatrixColumn(J,0).length(),Z=1/U6.setFromMatrixColumn(J,1).length(),K=1/U6.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*W,Q[1]=$[1]*W,Q[2]=$[2]*W,Q[3]=0,Q[4]=$[4]*Z,Q[5]=$[5]*Z,Q[6]=$[6]*Z,Q[7]=0,Q[8]=$[8]*K,Q[9]=$[9]*K,Q[10]=$[10]*K,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,W=J.y,Z=J.z,K=Math.cos($),H=Math.sin($),Y=Math.cos(W),X=Math.sin(W),U=Math.cos(Z),N=Math.sin(Z);if(J.order==="XYZ"){let E=K*U,G=K*N,F=H*U,q=H*N;Q[0]=Y*U,Q[4]=-Y*N,Q[8]=X,Q[1]=G+F*X,Q[5]=E-q*X,Q[9]=-H*Y,Q[2]=q-E*X,Q[6]=F+G*X,Q[10]=K*Y}else if(J.order==="YXZ"){let E=Y*U,G=Y*N,F=X*U,q=X*N;Q[0]=E+q*H,Q[4]=F*H-G,Q[8]=K*X,Q[1]=K*N,Q[5]=K*U,Q[9]=-H,Q[2]=G*H-F,Q[6]=q+E*H,Q[10]=K*Y}else if(J.order==="ZXY"){let E=Y*U,G=Y*N,F=X*U,q=X*N;Q[0]=E-q*H,Q[4]=-K*N,Q[8]=F+G*H,Q[1]=G+F*H,Q[5]=K*U,Q[9]=q-E*H,Q[2]=-K*X,Q[6]=H,Q[10]=K*Y}else if(J.order==="ZYX"){let E=K*U,G=K*N,F=H*U,q=H*N;Q[0]=Y*U,Q[4]=F*X-G,Q[8]=E*X+q,Q[1]=Y*N,Q[5]=q*X+E,Q[9]=G*X-F,Q[2]=-X,Q[6]=H*Y,Q[10]=K*Y}else if(J.order==="YZX"){let E=K*Y,G=K*X,F=H*Y,q=H*X;Q[0]=Y*U,Q[4]=q-E*N,Q[8]=F*N+G,Q[1]=N,Q[5]=K*U,Q[9]=-H*U,Q[2]=-X*U,Q[6]=G*N+F,Q[10]=E-q*N}else if(J.order==="XZY"){let E=K*Y,G=K*X,F=H*Y,q=H*X;Q[0]=Y*U,Q[4]=-N,Q[8]=X*U,Q[1]=E*N+q,Q[5]=K*U,Q[9]=G*N-F,Q[2]=F*N-G,Q[6]=H*U,Q[10]=q*N+E}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(c5,J,n5)}lookAt(J,Q,$){let W=this.elements;if(b8.subVectors(J,Q),b8.lengthSq()===0)b8.z=1;if(b8.normalize(),a9.crossVectors($,b8),a9.lengthSq()===0){if(Math.abs($.z)===1)b8.x+=0.0001;else b8.z+=0.0001;b8.normalize(),a9.crossVectors($,b8)}return a9.normalize(),R$.crossVectors(b8,a9),W[0]=a9.x,W[4]=R$.x,W[8]=b8.x,W[1]=a9.y,W[5]=R$.y,W[9]=b8.y,W[2]=a9.z,W[6]=R$.z,W[10]=b8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,W=Q.elements,Z=this.elements,K=$[0],H=$[4],Y=$[8],X=$[12],U=$[1],N=$[5],E=$[9],G=$[13],F=$[2],q=$[6],V=$[10],R=$[14],O=$[3],z=$[7],D=$[11],L=$[15],M=W[0],I=W[4],w=W[8],B=W[12],A=W[1],d=W[5],y=W[9],b=W[13],J0=W[2],S=W[6],i=W[10],c=W[14],x=W[3],K0=W[7],n=W[11],$0=W[15];return Z[0]=K*M+H*A+Y*J0+X*x,Z[4]=K*I+H*d+Y*S+X*K0,Z[8]=K*w+H*y+Y*i+X*n,Z[12]=K*B+H*b+Y*c+X*$0,Z[1]=U*M+N*A+E*J0+G*x,Z[5]=U*I+N*d+E*S+G*K0,Z[9]=U*w+N*y+E*i+G*n,Z[13]=U*B+N*b+E*c+G*$0,Z[2]=F*M+q*A+V*J0+R*x,Z[6]=F*I+q*d+V*S+R*K0,Z[10]=F*w+q*y+V*i+R*n,Z[14]=F*B+q*b+V*c+R*$0,Z[3]=O*M+z*A+D*J0+L*x,Z[7]=O*I+z*d+D*S+L*K0,Z[11]=O*w+z*y+D*i+L*n,Z[15]=O*B+z*b+D*c+L*$0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],W=J[8],Z=J[12],K=J[1],H=J[5],Y=J[9],X=J[13],U=J[2],N=J[6],E=J[10],G=J[14],F=J[3],q=J[7],V=J[11],R=J[15],O=Y*G-X*E,z=H*G-X*N,D=H*E-Y*N,L=K*G-X*U,M=K*E-Y*U,I=K*N-H*U;return Q*(q*O-V*z+R*D)-$*(F*O-V*L+R*M)+W*(F*z-q*L+R*I)-Z*(F*D-q*M+V*I)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],W=J[8],Z=J[1],K=J[5],H=J[9],Y=J[2],X=J[6],U=J[10];return Q*(K*U-H*X)-$*(Z*U-H*Y)+W*(Z*X-K*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let W=this.elements;if(J.isVector3)W[12]=J.x,W[13]=J.y,W[14]=J.z;else W[12]=J,W[13]=Q,W[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],N=J[9],E=J[10],G=J[11],F=J[12],q=J[13],V=J[14],R=J[15],O=Q*H-$*K,z=Q*Y-W*K,D=Q*X-Z*K,L=$*Y-W*H,M=$*X-Z*H,I=W*X-Z*Y,w=U*q-N*F,B=U*V-E*F,A=U*R-G*F,d=N*V-E*q,y=N*R-G*q,b=E*R-G*V,J0=O*b-z*y+D*d+L*A-M*B+I*w;if(J0===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/J0;return J[0]=(H*b-Y*y+X*d)*S,J[1]=(W*y-$*b-Z*d)*S,J[2]=(q*I-V*M+R*L)*S,J[3]=(E*M-N*I-G*L)*S,J[4]=(Y*A-K*b-X*B)*S,J[5]=(Q*b-W*A+Z*B)*S,J[6]=(V*D-F*I-R*z)*S,J[7]=(U*I-E*D+G*z)*S,J[8]=(K*y-H*A+X*w)*S,J[9]=($*A-Q*y-Z*w)*S,J[10]=(F*M-q*D+R*O)*S,J[11]=(N*D-U*M-G*O)*S,J[12]=(H*B-K*d-Y*w)*S,J[13]=(Q*d-$*B+W*w)*S,J[14]=(q*z-F*L-V*O)*S,J[15]=(U*L-N*z+E*O)*S,this}scale(J){let Q=this.elements,$=J.x,W=J.y,Z=J.z;return Q[0]*=$,Q[4]*=W,Q[8]*=Z,Q[1]*=$,Q[5]*=W,Q[9]*=Z,Q[2]*=$,Q[6]*=W,Q[10]*=Z,Q[3]*=$,Q[7]*=W,Q[11]*=Z,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],W=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,W))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),W=Math.sin(Q),Z=1-$,K=J.x,H=J.y,Y=J.z,X=Z*K,U=Z*H;return this.set(X*K+$,X*H-W*Y,X*Y+W*H,0,X*H+W*Y,U*H+$,U*Y-W*K,0,X*Y-W*H,U*Y+W*K,Z*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,W,Z,K){return this.set(1,$,Z,0,J,1,K,0,Q,W,1,0,0,0,0,1),this}compose(J,Q,$){let W=this.elements,Z=Q._x,K=Q._y,H=Q._z,Y=Q._w,X=Z+Z,U=K+K,N=H+H,E=Z*X,G=Z*U,F=Z*N,q=K*U,V=K*N,R=H*N,O=Y*X,z=Y*U,D=Y*N,L=$.x,M=$.y,I=$.z;return W[0]=(1-(q+R))*L,W[1]=(G+D)*L,W[2]=(F-z)*L,W[3]=0,W[4]=(G-D)*M,W[5]=(1-(E+R))*M,W[6]=(V+O)*M,W[7]=0,W[8]=(F+z)*I,W[9]=(V-O)*I,W[10]=(1-(E+q))*I,W[11]=0,W[12]=J.x,W[13]=J.y,W[14]=J.z,W[15]=1,this}decompose(J,Q,$){let W=this.elements;J.x=W[12],J.y=W[13],J.z=W[14];let Z=this.determinantAffine();if(Z===0)return $.set(1,1,1),Q.identity(),this;let K=U6.set(W[0],W[1],W[2]).length(),H=U6.set(W[4],W[5],W[6]).length(),Y=U6.set(W[8],W[9],W[10]).length();if(Z<0)K=-K;W9.copy(this);let X=1/K,U=1/H,N=1/Y;return W9.elements[0]*=X,W9.elements[1]*=X,W9.elements[2]*=X,W9.elements[4]*=U,W9.elements[5]*=U,W9.elements[6]*=U,W9.elements[8]*=N,W9.elements[9]*=N,W9.elements[10]*=N,Q.setFromRotationMatrix(W9),$.x=K,$.y=H,$.z=Y,this}makePerspective(J,Q,$,W,Z,K,H=2000,Y=!1){let X=this.elements,U=2*Z/(Q-J),N=2*Z/($-W),E=(Q+J)/(Q-J),G=($+W)/($-W),F,q;if(Y)F=Z/(K-Z),q=K*Z/(K-Z);else if(H===2000)F=-(K+Z)/(K-Z),q=-2*K*Z/(K-Z);else if(H===2001)F=-K/(K-Z),q=-K*Z/(K-Z);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=E,X[12]=0,X[1]=0,X[5]=N,X[9]=G,X[13]=0,X[2]=0,X[6]=0,X[10]=F,X[14]=q,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,Q,$,W,Z,K,H=2000,Y=!1){let X=this.elements,U=2/(Q-J),N=2/($-W),E=-(Q+J)/(Q-J),G=-($+W)/($-W),F,q;if(Y)F=1/(K-Z),q=K/(K-Z);else if(H===2000)F=-2/(K-Z),q=-(K+Z)/(K-Z);else if(H===2001)F=-1/(K-Z),q=-Z/(K-Z);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=0,X[12]=E,X[1]=0,X[5]=N,X[9]=0,X[13]=G,X[2]=0,X[6]=0,X[10]=F,X[14]=q,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let W=0;W<16;W++)if(Q[W]!==$[W])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var U6=new T,W9=new n0,c5=new T(0,0,0),n5=new T(1,1,1),a9=new T,R$=new T,b8=new T,lH=new n0,uH=new qJ;class Y9{constructor(J=0,Q=0,$=0,W=Y9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=W}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,W=this._order){return this._x=J,this._y=Q,this._z=$,this._order=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let W=J.elements,Z=W[0],K=W[4],H=W[8],Y=W[1],X=W[5],U=W[9],N=W[2],E=W[6],G=W[10];switch(Q){case"XYZ":if(this._y=Math.asin(WJ(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-U,G),this._z=Math.atan2(-K,Z);else this._x=Math.atan2(E,X),this._z=0;break;case"YXZ":if(this._x=Math.asin(-WJ(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(H,G),this._z=Math.atan2(Y,X);else this._y=Math.atan2(-N,Z),this._z=0;break;case"ZXY":if(this._x=Math.asin(WJ(E,-1,1)),Math.abs(E)<0.9999999)this._y=Math.atan2(-N,G),this._z=Math.atan2(-K,X);else this._y=0,this._z=Math.atan2(Y,Z);break;case"ZYX":if(this._y=Math.asin(-WJ(N,-1,1)),Math.abs(N)<0.9999999)this._x=Math.atan2(E,G),this._z=Math.atan2(Y,Z);else this._x=0,this._z=Math.atan2(-K,X);break;case"YZX":if(this._z=Math.asin(WJ(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,X),this._y=Math.atan2(-N,Z);else this._x=0,this._y=Math.atan2(H,G);break;case"XZY":if(this._z=Math.asin(-WJ(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(E,X),this._y=Math.atan2(H,Z);else this._x=Math.atan2(-U,G),this._y=0;break;default:g0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return lH.makeRotationFromQuaternion(J),this.setFromRotationMatrix(lH,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return uH.setFromEuler(this),this.setFromQuaternion(uH,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Y9.DEFAULT_ORDER="XYZ";class GW{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var s5=0,dH=new T,G6=new qJ,S9=new n0,L$=new T,KQ=new T,i5=new T,o5=new qJ,cH=new T(1,0,0),nH=new T(0,1,0),sH=new T(0,0,1),iH={type:"added"},a5={type:"removed"},N6={type:"childadded",child:null},JZ={type:"childremoved",child:null};class zJ extends N9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:s5++}),this.uuid=n8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zJ.DEFAULT_UP.clone();let J=new T,Q=new Y9,$=new qJ,W=new T(1,1,1);function Z(){$.setFromEuler(Q,!1)}function K(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(Z),$._onChange(K),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:W},modelViewMatrix:{value:new n0},normalMatrix:{value:new t0}}),this.matrix=new n0,this.matrixWorld=new n0,this.matrixAutoUpdate=zJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new GW,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return G6.setFromAxisAngle(J,Q),this.quaternion.multiply(G6),this}rotateOnWorldAxis(J,Q){return G6.setFromAxisAngle(J,Q),this.quaternion.premultiply(G6),this}rotateX(J){return this.rotateOnAxis(cH,J)}rotateY(J){return this.rotateOnAxis(nH,J)}rotateZ(J){return this.rotateOnAxis(sH,J)}translateOnAxis(J,Q){return dH.copy(J).applyQuaternion(this.quaternion),this.position.add(dH.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(cH,J)}translateY(J){return this.translateOnAxis(nH,J)}translateZ(J){return this.translateOnAxis(sH,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(S9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)L$.copy(J);else L$.set(J,Q,$);let W=this.parent;if(this.updateWorldMatrix(!0,!1),KQ.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)S9.lookAt(KQ,L$,this.up);else S9.lookAt(L$,KQ,this.up);if(this.quaternion.setFromRotationMatrix(S9),W)S9.extractRotation(W.matrixWorld),G6.setFromRotationMatrix(S9),this.quaternion.premultiply(G6.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return o0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(iH),N6.child=J,this.dispatchEvent(N6),N6.child=null;else o0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(a5),JZ.child=J,this.dispatchEvent(JZ),JZ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),S9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),S9.multiply(J.parent.matrixWorld);return J.applyMatrix4(S9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(iH),N6.child=J,this.dispatchEvent(N6),N6.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,W=this.children.length;$<W;$++){let K=this.children[$].getObjectByProperty(J,Q);if(K!==void 0)return K}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let W=this.children;for(let Z=0,K=W.length;Z<K;Z++)W[Z].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(KQ,J,i5),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(KQ,o5,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(J){J(this);let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:W}=J,Z=this.matrix.elements;Z[12]+=Q-Z[0]*Q-Z[4]*$-Z[8]*W,Z[13]+=$-Z[1]*Q-Z[5]*$-Z[9]*W,Z[14]+=W-Z[2]*Q-Z[6]*$-Z[10]*W}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let W=this.parent;if(J===!0&&W!==null)W.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let Z=this.children;for(let K=0,H=Z.length;K<H;K++)Z[K].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let W={};if(W.uuid=this.uuid,W.type=this.type,W.name=this.name,W.castShadow=this.castShadow,W.receiveShadow=this.receiveShadow,W.visible=this.visible,W.frustumCulled=this.frustumCulled,W.renderOrder=this.renderOrder,W.static=this.static,W.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)W.userData=this.userData;if(W.layers=this.layers.mask,W.matrix=this.matrix.toArray(),W.up=this.up.toArray(),this.pivot!==null)W.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)W.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)W.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(W.type="InstancedMesh",W.count=this.count,W.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)W.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(W.type="BatchedMesh",W.perObjectFrustumCulled=this.perObjectFrustumCulled,W.sortObjects=this.sortObjects,W.drawRanges=this._drawRanges,W.reservedRanges=this._reservedRanges,W.geometryInfo=this._geometryInfo.map((H)=>({...H,boundingBox:H.boundingBox?H.boundingBox.toJSON():void 0,boundingSphere:H.boundingSphere?H.boundingSphere.toJSON():void 0})),W.instanceInfo=this._instanceInfo.map((H)=>({...H})),W.availableInstanceIds=this._availableInstanceIds.slice(),W.availableGeometryIds=this._availableGeometryIds.slice(),W.nextIndexStart=this._nextIndexStart,W.nextVertexStart=this._nextVertexStart,W.geometryCount=this._geometryCount,W.maxInstanceCount=this._maxInstanceCount,W.maxVertexCount=this._maxVertexCount,W.maxIndexCount=this._maxIndexCount,W.geometryInitialized=this._geometryInitialized,W.matricesTexture=this._matricesTexture.toJSON(J),W.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)W.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)W.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)W.boundingBox=this.boundingBox.toJSON()}function Z(H,Y){if(H[Y.uuid]===void 0)H[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)W.background=this.background.toJSON();else if(this.background.isTexture)W.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)W.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){W.geometry=Z(J.geometries,this.geometry);let H=this.geometry.parameters;if(H!==void 0&&H.shapes!==void 0){let Y=H.shapes;if(Array.isArray(Y))for(let X=0,U=Y.length;X<U;X++){let N=Y[X];Z(J.shapes,N)}else Z(J.shapes,Y)}}if(this.isSkinnedMesh){if(W.bindMode=this.bindMode,W.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)Z(J.skeletons,this.skeleton),W.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let H=[];for(let Y=0,X=this.material.length;Y<X;Y++)H.push(Z(J.materials,this.material[Y]));W.material=H}else W.material=Z(J.materials,this.material);if(this.children.length>0){W.children=[];for(let H=0;H<this.children.length;H++)W.children.push(this.children[H].toJSON(J).object)}if(this.animations.length>0){W.animations=[];for(let H=0;H<this.animations.length;H++){let Y=this.animations[H];W.animations.push(Z(J.animations,Y))}}if(Q){let H=K(J.geometries),Y=K(J.materials),X=K(J.textures),U=K(J.images),N=K(J.shapes),E=K(J.skeletons),G=K(J.animations),F=K(J.nodes);if(H.length>0)$.geometries=H;if(Y.length>0)$.materials=Y;if(X.length>0)$.textures=X;if(U.length>0)$.images=U;if(N.length>0)$.shapes=N;if(E.length>0)$.skeletons=E;if(G.length>0)$.animations=G;if(F.length>0)$.nodes=F}return $.object=W,$;function K(H){let Y=[];for(let X in H){let U=H[X];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let W=J.children[$];this.add(W.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}zJ.DEFAULT_UP=new T(0,1,0);zJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;zJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class IJ extends zJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var r5={type:"move"};class hQ{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new IJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new IJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new IJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let W=null,Z=null,K=null,H=this._targetRay,Y=this._grip,X=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(X&&J.hand){K=!0;for(let q of J.hand.values()){let V=Q.getJointPose(q,$),R=this._getHandJoint(X,q);if(V!==null)R.matrix.fromArray(V.transform.matrix),R.matrix.decompose(R.position,R.rotation,R.scale),R.matrixWorldNeedsUpdate=!0,R.jointRadius=V.radius;R.visible=V!==null}let U=X.joints["index-finger-tip"],N=X.joints["thumb-tip"],E=U.position.distanceTo(N.position),G=0.02,F=0.005;if(X.inputState.pinching&&E>G+F)X.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!X.inputState.pinching&&E<=G-F)X.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(Z=Q.getPose(J.gripSpace,$),Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(H!==null){if(W=Q.getPose(J.targetRaySpace,$),W===null&&Z!==null)W=Z;if(W!==null){if(H.matrix.fromArray(W.transform.matrix),H.matrix.decompose(H.position,H.rotation,H.scale),H.matrixWorldNeedsUpdate=!0,W.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(W.linearVelocity);else H.hasLinearVelocity=!1;if(W.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(W.angularVelocity);else H.hasAngularVelocity=!1;this.dispatchEvent(r5)}}}if(H!==null)H.visible=W!==null;if(Y!==null)Y.visible=Z!==null;if(X!==null)X.visible=K!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new IJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var IX={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},r9={h:0,s:0,l:0},V$={h:0,s:0,l:0};function QZ(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class y0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let W=J;if(W&&W.isColor)this.copy(W);else if(typeof W==="number")this.setHex(W);else if(typeof W==="string")this.setStyle(W)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,ZJ.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,W=ZJ.workingColorSpace){return this.r=J,this.g=Q,this.b=$,ZJ.colorSpaceToWorking(this,W),this}setHSL(J,Q,$,W=ZJ.workingColorSpace){if(J=BK(J,1),Q=WJ(Q,0,1),$=WJ($,0,1),Q===0)this.r=this.g=this.b=$;else{let Z=$<=0.5?$*(1+Q):$+Q-$*Q,K=2*$-Z;this.r=QZ(K,Z,J+0.3333333333333333),this.g=QZ(K,Z,J),this.b=QZ(K,Z,J-0.3333333333333333)}return ZJ.colorSpaceToWorking(this,W),this}setStyle(J,Q="srgb"){function $(Z){if(Z===void 0)return;if(parseFloat(Z)<1)g0("Color: Alpha component of "+J+" will be ignored.")}let W;if(W=/^(\w+)\(([^\)]*)\)/.exec(J)){let Z,K=W[1],H=W[2];switch(K){case"rgb":case"rgba":if(Z=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(Z[4]),this.setRGB(Math.min(255,parseInt(Z[1],10))/255,Math.min(255,parseInt(Z[2],10))/255,Math.min(255,parseInt(Z[3],10))/255,Q);if(Z=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(Z[4]),this.setRGB(Math.min(100,parseInt(Z[1],10))/100,Math.min(100,parseInt(Z[2],10))/100,Math.min(100,parseInt(Z[3],10))/100,Q);break;case"hsl":case"hsla":if(Z=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(Z[4]),this.setHSL(parseFloat(Z[1])/360,parseFloat(Z[2])/100,parseFloat(Z[3])/100,Q);break;default:g0("Color: Unknown color model "+J)}}else if(W=/^\#([A-Fa-f\d]+)$/.exec(J)){let Z=W[1],K=Z.length;if(K===3)return this.setRGB(parseInt(Z.charAt(0),16)/15,parseInt(Z.charAt(1),16)/15,parseInt(Z.charAt(2),16)/15,Q);else if(K===6)return this.setHex(parseInt(Z,16),Q);else g0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=IX[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else g0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=b9(J.r),this.g=b9(J.g),this.b=b9(J.b),this}copyLinearToSRGB(J){return this.r=I6(J.r),this.g=I6(J.g),this.b=I6(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return ZJ.workingToColorSpace(D8.copy(this),J),Math.round(WJ(D8.r*255,0,255))*65536+Math.round(WJ(D8.g*255,0,255))*256+Math.round(WJ(D8.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=ZJ.workingColorSpace){ZJ.workingToColorSpace(D8.copy(this),Q);let{r:$,g:W,b:Z}=D8,K=Math.max($,W,Z),H=Math.min($,W,Z),Y,X,U=(H+K)/2;if(H===K)Y=0,X=0;else{let N=K-H;switch(X=U<=0.5?N/(K+H):N/(2-K-H),K){case $:Y=(W-Z)/N+(W<Z?6:0);break;case W:Y=(Z-$)/N+2;break;case Z:Y=($-W)/N+4;break}Y/=6}return J.h=Y,J.s=X,J.l=U,J}getRGB(J,Q=ZJ.workingColorSpace){return ZJ.workingToColorSpace(D8.copy(this),Q),J.r=D8.r,J.g=D8.g,J.b=D8.b,J}getStyle(J="srgb"){ZJ.workingToColorSpace(D8.copy(this),J);let{r:Q,g:$,b:W}=D8;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${W.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(W*255)})`}offsetHSL(J,Q,$){return this.getHSL(r9),this.setHSL(r9.h+J,r9.s+Q,r9.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(r9),J.getHSL(V$);let $=VQ(r9.h,V$.h,Q),W=VQ(r9.s,V$.s,Q),Z=VQ(r9.l,V$.l,Q);return this.setHSL($,W,Z),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,W=this.b,Z=J.elements;return this.r=Z[0]*Q+Z[3]*$+Z[6]*W,this.g=Z[1]*Q+Z[4]*$+Z[7]*W,this.b=Z[2]*Q+Z[5]*$+Z[8]*W,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var D8=new y0;y0.NAMES=IX;class m7{constructor(J,Q=0.00025){this.isFogExp2=!0,this.name="",this.color=new y0(J),this.density=Q}clone(){return new m7(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class g6 extends zJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Y9,this.environmentIntensity=1,this.environmentRotation=new Y9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var Z9=new T,j9=new T,$Z=new T,y9=new T,E6=new T,F6=new T,oH=new T,WZ=new T,ZZ=new T,KZ=new T,HZ=new wJ,YZ=new wJ,XZ=new wJ;class g8{constructor(J=new T,Q=new T,$=new T){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,W){W.subVectors($,Q),Z9.subVectors(J,Q),W.cross(Z9);let Z=W.lengthSq();if(Z>0)return W.multiplyScalar(1/Math.sqrt(Z));return W.set(0,0,0)}static getBarycoord(J,Q,$,W,Z){Z9.subVectors(W,Q),j9.subVectors($,Q),$Z.subVectors(J,Q);let K=Z9.dot(Z9),H=Z9.dot(j9),Y=Z9.dot($Z),X=j9.dot(j9),U=j9.dot($Z),N=K*X-H*H;if(N===0)return Z.set(0,0,0),null;let E=1/N,G=(X*Y-H*U)*E,F=(K*U-H*Y)*E;return Z.set(1-G-F,F,G)}static containsPoint(J,Q,$,W){if(this.getBarycoord(J,Q,$,W,y9)===null)return!1;return y9.x>=0&&y9.y>=0&&y9.x+y9.y<=1}static getInterpolation(J,Q,$,W,Z,K,H,Y){if(this.getBarycoord(J,Q,$,W,y9)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(Z,y9.x),Y.addScaledVector(K,y9.y),Y.addScaledVector(H,y9.z),Y}static getInterpolatedAttribute(J,Q,$,W,Z,K){return HZ.setScalar(0),YZ.setScalar(0),XZ.setScalar(0),HZ.fromBufferAttribute(J,Q),YZ.fromBufferAttribute(J,$),XZ.fromBufferAttribute(J,W),K.setScalar(0),K.addScaledVector(HZ,Z.x),K.addScaledVector(YZ,Z.y),K.addScaledVector(XZ,Z.z),K}static isFrontFacing(J,Q,$,W){return Z9.subVectors($,Q),j9.subVectors(J,Q),Z9.cross(j9).dot(W)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,W){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[W]),this}setFromAttributeAndIndices(J,Q,$,W){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,W),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return Z9.subVectors(this.c,this.b),j9.subVectors(this.a,this.b),Z9.cross(j9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return g8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return g8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,W,Z){return g8.getInterpolation(J,this.a,this.b,this.c,Q,$,W,Z)}containsPoint(J){return g8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return g8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,W=this.b,Z=this.c,K,H;E6.subVectors(W,$),F6.subVectors(Z,$),WZ.subVectors(J,$);let Y=E6.dot(WZ),X=F6.dot(WZ);if(Y<=0&&X<=0)return Q.copy($);ZZ.subVectors(J,W);let U=E6.dot(ZZ),N=F6.dot(ZZ);if(U>=0&&N<=U)return Q.copy(W);let E=Y*N-U*X;if(E<=0&&Y>=0&&U<=0)return K=Y/(Y-U),Q.copy($).addScaledVector(E6,K);KZ.subVectors(J,Z);let G=E6.dot(KZ),F=F6.dot(KZ);if(F>=0&&G<=F)return Q.copy(Z);let q=G*X-Y*F;if(q<=0&&X>=0&&F<=0)return H=X/(X-F),Q.copy($).addScaledVector(F6,H);let V=U*F-G*N;if(V<=0&&N-U>=0&&G-F>=0)return oH.subVectors(Z,W),H=(N-U)/(N-U+(G-F)),Q.copy(W).addScaledVector(oH,H);let R=1/(V+q+E);return K=q*R,H=E*R,Q.copy($).addScaledVector(E6,K).addScaledVector(F6,H)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class I8{constructor(J=new T(1/0,1/0,1/0),Q=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(K9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(K9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=K9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let Z=$.getAttribute("position");if(Q===!0&&Z!==void 0&&J.isInstancedMesh!==!0)for(let K=0,H=Z.count;K<H;K++){if(J.isMesh===!0)J.getVertexPosition(K,K9);else K9.fromBufferAttribute(Z,K);K9.applyMatrix4(J.matrixWorld),this.expandByPoint(K9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();D$.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();D$.copy($.boundingBox)}D$.applyMatrix4(J.matrixWorld),this.union(D$)}}let W=J.children;for(let Z=0,K=W.length;Z<K;Z++)this.expandByObject(W[Z],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,K9),K9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(HQ),B$.subVectors(this.max,HQ),q6.subVectors(J.a,HQ),O6.subVectors(J.b,HQ),R6.subVectors(J.c,HQ),t9.subVectors(O6,q6),e9.subVectors(R6,O6),I7.subVectors(q6,R6);let Q=[0,-t9.z,t9.y,0,-e9.z,e9.y,0,-I7.z,I7.y,t9.z,0,-t9.x,e9.z,0,-e9.x,I7.z,0,-I7.x,-t9.y,t9.x,0,-e9.y,e9.x,0,-I7.y,I7.x,0];if(!UZ(Q,q6,O6,R6,B$))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!UZ(Q,q6,O6,R6,B$))return!1;return k$.crossVectors(t9,e9),Q=[k$.x,k$.y,k$.z],UZ(Q,q6,O6,R6,B$)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,K9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(K9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return v9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),v9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),v9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),v9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),v9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),v9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),v9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),v9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(v9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var v9=[new T,new T,new T,new T,new T,new T,new T,new T],K9=new T,D$=new I8,q6=new T,O6=new T,R6=new T,t9=new T,e9=new T,I7=new T,HQ=new T,B$=new T,k$=new T,A7=new T;function UZ(J,Q,$,W,Z){for(let K=0,H=J.length-3;K<=H;K+=3){A7.fromArray(J,K);let Y=Z.x*Math.abs(A7.x)+Z.y*Math.abs(A7.y)+Z.z*Math.abs(A7.z),X=Q.dot(A7),U=$.dot(A7),N=W.dot(A7);if(Math.max(-Math.max(X,U,N),Math.min(X,U,N))>Y)return!1}return!0}var $8=new T,M$=new W0,t5=0;class oJ extends N9{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:t5++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let W=0,Z=this.itemSize;W<Z;W++)this.array[J+W]=Q.array[$+W];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)M$.fromBufferAttribute(this,Q),M$.applyMatrix3(J),this.setXY(Q,M$.x,M$.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)$8.fromBufferAttribute(this,Q),$8.applyMatrix3(J),this.setXYZ(Q,$8.x,$8.y,$8.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)$8.fromBufferAttribute(this,Q),$8.applyMatrix4(J),this.setXYZ(Q,$8.x,$8.y,$8.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)$8.fromBufferAttribute(this,Q),$8.applyNormalMatrix(J),this.setXYZ(Q,$8.x,$8.y,$8.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)$8.fromBufferAttribute(this,Q),$8.transformDirection(J),this.setXYZ(Q,$8.x,$8.y,$8.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=H9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=TJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=H9(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=TJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=H9(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=TJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=H9(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=TJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=H9(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=TJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=TJ(Q,this.array),$=TJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,W){if(J*=this.itemSize,this.normalized)Q=TJ(Q,this.array),$=TJ($,this.array),W=TJ(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=W,this}setXYZW(J,Q,$,W,Z){if(J*=this.itemSize,this.normalized)Q=TJ(Q,this.array),$=TJ($,this.array),W=TJ(W,this.array),Z=TJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=W,this.array[J+3]=Z,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}}class NW extends oJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class EW extends oJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class HJ extends oJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var e5=new I8,YQ=new T,GZ=new T;class m8{constructor(J=new T,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else e5.setFromPoints(J).getCenter($);let W=0;for(let Z=0,K=J.length;Z<K;Z++)W=Math.max(W,$.distanceToSquared(J[Z]));return this.radius=Math.sqrt(W),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;YQ.subVectors(J,this.center);let Q=YQ.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),W=($-this.radius)*0.5;this.center.addScaledVector(YQ,W/$),this.radius+=W}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else GZ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(YQ.copy(J.center).add(GZ)),this.expandByPoint(YQ.copy(J.center).sub(GZ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var JG=0,d8=new n0,NZ=new zJ,L6=new T,x8=new I8,XQ=new I8,G8=new T;class jJ extends N9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JG++}),this.uuid=n8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((z5(J))?EW:NW)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let Z=new t0().getNormalMatrix(J);$.applyNormalMatrix(Z),$.needsUpdate=!0}let W=this.attributes.tangent;if(W!==void 0)W.transformDirection(J),W.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return d8.makeRotationFromQuaternion(J),this.applyMatrix4(d8),this}rotateX(J){return d8.makeRotationX(J),this.applyMatrix4(d8),this}rotateY(J){return d8.makeRotationY(J),this.applyMatrix4(d8),this}rotateZ(J){return d8.makeRotationZ(J),this.applyMatrix4(d8),this}translate(J,Q,$){return d8.makeTranslation(J,Q,$),this.applyMatrix4(d8),this}scale(J,Q,$){return d8.makeScale(J,Q,$),this.applyMatrix4(d8),this}lookAt(J){return NZ.lookAt(J),NZ.updateMatrix(),this.applyMatrix4(NZ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(L6).negate(),this.translate(L6.x,L6.y,L6.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let W=0,Z=J.length;W<Z;W++){let K=J[W];$.push(K.x,K.y,K.z||0)}this.setAttribute("position",new HJ($,3))}else{let $=Math.min(J.length,Q.count);for(let W=0;W<$;W++){let Z=J[W];Q.setXYZ(W,Z.x,Z.y,Z.z||0)}if(J.length>Q.count)g0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new I8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){o0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,W=Q.length;$<W;$++){let Z=Q[$];if(x8.setFromBufferAttribute(Z),this.morphTargetsRelative)G8.addVectors(this.boundingBox.min,x8.min),this.boundingBox.expandByPoint(G8),G8.addVectors(this.boundingBox.max,x8.max),this.boundingBox.expandByPoint(G8);else this.boundingBox.expandByPoint(x8.min),this.boundingBox.expandByPoint(x8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))o0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new m8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){o0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(J){let $=this.boundingSphere.center;if(x8.setFromBufferAttribute(J),Q)for(let Z=0,K=Q.length;Z<K;Z++){let H=Q[Z];if(XQ.setFromBufferAttribute(H),this.morphTargetsRelative)G8.addVectors(x8.min,XQ.min),x8.expandByPoint(G8),G8.addVectors(x8.max,XQ.max),x8.expandByPoint(G8);else x8.expandByPoint(XQ.min),x8.expandByPoint(XQ.max)}x8.getCenter($);let W=0;for(let Z=0,K=J.count;Z<K;Z++)G8.fromBufferAttribute(J,Z),W=Math.max(W,$.distanceToSquared(G8));if(Q)for(let Z=0,K=Q.length;Z<K;Z++){let H=Q[Z],Y=this.morphTargetsRelative;for(let X=0,U=H.count;X<U;X++){if(G8.fromBufferAttribute(H,X),Y)L6.fromBufferAttribute(J,X),G8.add(L6);W=Math.max(W,$.distanceToSquared(G8))}}if(this.boundingSphere.radius=Math.sqrt(W),isNaN(this.boundingSphere.radius))o0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){o0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:W,uv:Z}=Q,K=this.getAttribute("tangent");if(K===void 0||K.count!==$.count)K=new oJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",K);let H=[],Y=[];for(let w=0;w<$.count;w++)H[w]=new T,Y[w]=new T;let X=new T,U=new T,N=new T,E=new W0,G=new W0,F=new W0,q=new T,V=new T;function R(w,B,A){X.fromBufferAttribute($,w),U.fromBufferAttribute($,B),N.fromBufferAttribute($,A),E.fromBufferAttribute(Z,w),G.fromBufferAttribute(Z,B),F.fromBufferAttribute(Z,A),U.sub(X),N.sub(X),G.sub(E),F.sub(E);let d=1/(G.x*F.y-F.x*G.y);if(!isFinite(d))return;q.copy(U).multiplyScalar(F.y).addScaledVector(N,-G.y).multiplyScalar(d),V.copy(N).multiplyScalar(G.x).addScaledVector(U,-F.x).multiplyScalar(d),H[w].add(q),H[B].add(q),H[A].add(q),Y[w].add(V),Y[B].add(V),Y[A].add(V)}let O=this.groups;if(O.length===0)O=[{start:0,count:J.count}];for(let w=0,B=O.length;w<B;++w){let A=O[w],d=A.start,y=A.count;for(let b=d,J0=d+y;b<J0;b+=3)R(J.getX(b+0),J.getX(b+1),J.getX(b+2))}let z=new T,D=new T,L=new T,M=new T;function I(w){L.fromBufferAttribute(W,w),M.copy(L);let B=H[w];z.copy(B),z.sub(L.multiplyScalar(L.dot(B))).normalize(),D.crossVectors(M,B);let d=D.dot(Y[w])<0?-1:1;K.setXYZW(w,z.x,z.y,z.z,d)}for(let w=0,B=O.length;w<B;++w){let A=O[w],d=A.start,y=A.count;for(let b=d,J0=d+y;b<J0;b+=3)I(J.getX(b+0)),I(J.getX(b+1)),I(J.getX(b+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new oJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let E=0,G=$.count;E<G;E++)$.setXYZ(E,0,0,0);let W=new T,Z=new T,K=new T,H=new T,Y=new T,X=new T,U=new T,N=new T;if(J)for(let E=0,G=J.count;E<G;E+=3){let F=J.getX(E+0),q=J.getX(E+1),V=J.getX(E+2);W.fromBufferAttribute(Q,F),Z.fromBufferAttribute(Q,q),K.fromBufferAttribute(Q,V),U.subVectors(K,Z),N.subVectors(W,Z),U.cross(N),H.fromBufferAttribute($,F),Y.fromBufferAttribute($,q),X.fromBufferAttribute($,V),H.add(U),Y.add(U),X.add(U),$.setXYZ(F,H.x,H.y,H.z),$.setXYZ(q,Y.x,Y.y,Y.z),$.setXYZ(V,X.x,X.y,X.z)}else for(let E=0,G=Q.count;E<G;E+=3)W.fromBufferAttribute(Q,E+0),Z.fromBufferAttribute(Q,E+1),K.fromBufferAttribute(Q,E+2),U.subVectors(K,Z),N.subVectors(W,Z),U.cross(N),$.setXYZ(E+0,U.x,U.y,U.z),$.setXYZ(E+1,U.x,U.y,U.z),$.setXYZ(E+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)G8.fromBufferAttribute(J,Q),G8.normalize(),J.setXYZ(Q,G8.x,G8.y,G8.z)}toNonIndexed(){function J(H,Y){let{array:X,itemSize:U,normalized:N}=H,E=new X.constructor(Y.length*U),G=0,F=0;for(let q=0,V=Y.length;q<V;q++){if(H.isInterleavedBufferAttribute)G=Y[q]*H.data.stride+H.offset;else G=Y[q]*U;for(let R=0;R<U;R++)E[F++]=X[G++]}return new oJ(E,U,N)}if(this.index===null)return g0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new jJ,$=this.index.array,W=this.attributes;for(let H in W){let Y=W[H],X=J(Y,$);Q.setAttribute(H,X)}let Z=this.morphAttributes;for(let H in Z){let Y=[],X=Z[H];for(let U=0,N=X.length;U<N;U++){let E=X[U],G=J(E,$);Y.push(G)}Q.morphAttributes[H]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;for(let H=0,Y=K.length;H<Y;H++){let X=K[H];Q.addGroup(X.start,X.count,X.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let X in Y)if(Y[X]!==void 0)J[X]=Y[X];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let X=$[Y];J.data.attributes[Y]=X.toJSON(J.data)}let W={},Z=!1;for(let Y in this.morphAttributes){let X=this.morphAttributes[Y],U=[];for(let N=0,E=X.length;N<E;N++){let G=X[N];U.push(G.toJSON(J.data))}if(U.length>0)W[Y]=U,Z=!0}if(Z)J.data.morphAttributes=W,J.data.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;if(K.length>0)J.data.groups=JSON.parse(JSON.stringify(K));let H=this.boundingSphere;if(H!==null)J.data.boundingSphere=H.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let W=J.attributes;for(let X in W){let U=W[X];this.setAttribute(X,U.clone(Q))}let Z=J.morphAttributes;for(let X in Z){let U=[],N=Z[X];for(let E=0,G=N.length;E<G;E++)U.push(N[E].clone(Q));this.morphAttributes[X]=U}this.morphTargetsRelative=J.morphTargetsRelative;let K=J.groups;for(let X=0,U=K.length;X<U;X++){let N=K[X];this.addGroup(N.start,N.count,N.materialIndex)}let H=J.boundingBox;if(H!==null)this.boundingBox=H.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class p6{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=n8()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,$){J*=this.stride,$*=Q.stride;for(let W=0,Z=this.stride;W<Z;W++)this.array[J+W]=Q.array[$+W];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=n8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),$=new this.constructor(Q,this.stride);return $.setUsage(this.usage),$}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=n8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let Q={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return Q.usage=this.usage,Q}}var P8=new T;class $7{constructor(J,Q,$,W=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=$,this.normalized=W}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,$=this.data.count;Q<$;Q++)P8.fromBufferAttribute(this,Q),P8.applyMatrix4(J),this.setXYZ(Q,P8.x,P8.y,P8.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)P8.fromBufferAttribute(this,Q),P8.applyNormalMatrix(J),this.setXYZ(Q,P8.x,P8.y,P8.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)P8.fromBufferAttribute(this,Q),P8.transformDirection(J),this.setXYZ(Q,P8.x,P8.y,P8.z);return this}getComponent(J,Q){let $=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)$=H9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=TJ($,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=$,this}setX(J,Q){if(this.normalized)Q=TJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=TJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=TJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=TJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=H9(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=H9(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=H9(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=H9(Q,this.array);return Q}setXY(J,Q,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=TJ(Q,this.array),$=TJ($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this}setXYZ(J,Q,$,W){if(J=J*this.data.stride+this.offset,this.normalized)Q=TJ(Q,this.array),$=TJ($,this.array),W=TJ(W,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=W,this}setXYZW(J,Q,$,W,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=TJ(Q,this.array),$=TJ($,this.array),W=TJ(W,this.array),Z=TJ(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=W,this.data.array[J+3]=Z,this}clone(J){if(J===void 0){kQ("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let W=$*this.data.stride+this.offset;for(let Z=0;Z<this.itemSize;Z++)Q.push(this.data.array[W+Z])}return new oJ(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new $7(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){kQ("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let W=$*this.data.stride+this.offset;for(let Z=0;Z<this.itemSize;Z++)Q.push(this.data.array[W+Z])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var EZ=new T,QG=new T,$G=new t0;class c8{constructor(J=new T(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,W){return this.normal.set(J,Q,$),this.constant=W,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let W=EZ.subVectors($,Q).cross(QG.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(W,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let W=J.delta(EZ),Z=this.normal.dot(W);if(Z===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let K=-(J.start.dot(this.normal)+this.constant)/Z;if($===!0&&(K<0||K>1))return null;return Q.copy(J.start).addScaledVector(W,K)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||$G.getNormalMatrix(J),W=this.coplanarPoint(EZ).applyMatrix4(J),Z=this.normal.applyMatrix3($).normalize();return this.constant=-W.dot(Z),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var WG=0;class j8 extends N9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:WG++}),this.uuid=n8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new y0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){g0(`Material: parameter '${Q}' has value of undefined.`);continue}let W=this[Q];if(W===void 0){g0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(W&&W.isColor)W.set($);else if(W&&W.isVector2&&($&&$.isVector2)||W&&W.isEuler&&($&&$.isEuler)||W&&W.isVector3&&($&&$.isVector3))W.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,$.blending=this.blending,$.side=this.side,$.shadowSide=this.shadowSide,$.vertexColors=this.vertexColors,$.opacity=this.opacity,$.transparent=this.transparent,$.blendSrc=this.blendSrc,$.blendDst=this.blendDst,$.blendEquation=this.blendEquation,$.blendSrcAlpha=this.blendSrcAlpha,$.blendDstAlpha=this.blendDstAlpha,$.blendEquationAlpha=this.blendEquationAlpha,$.blendColor=this.blendColor.getHex(),$.blendAlpha=this.blendAlpha,$.depthFunc=this.depthFunc,$.depthTest=this.depthTest,$.depthWrite=this.depthWrite,$.colorWrite=this.colorWrite,$.clipIntersection=this.clipIntersection,$.clipShadows=this.clipShadows,$.stencilWriteMask=this.stencilWriteMask,$.stencilFunc=this.stencilFunc,$.stencilRef=this.stencilRef,$.stencilFuncMask=this.stencilFuncMask,$.stencilFail=this.stencilFail,$.stencilZFail=this.stencilZFail,$.stencilZPass=this.stencilZPass,$.stencilWrite=this.stencilWrite,$.polygonOffset=this.polygonOffset,$.polygonOffsetFactor=this.polygonOffsetFactor,$.polygonOffsetUnits=this.polygonOffsetUnits,$.dithering=this.dithering,$.alphaTest=this.alphaTest,$.alphaHash=this.alphaHash,$.alphaToCoverage=this.alphaToCoverage,$.premultipliedAlpha=this.premultipliedAlpha,$.forceSinglePass=this.forceSinglePass,$.allowOverride=this.allowOverride,$.visible=this.visible,$.toneMapped=this.toneMapped,$.name=this.name,this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)$.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)$.clippingPlanes=this.clippingPlanes.map((Z)=>Z.toJSON());if(this.rotation!==void 0)$.rotation=this.rotation;if(this.depthPacking!==void 0)$.depthPacking=this.depthPacking;if(this.linewidth!==void 0)$.linewidth=this.linewidth;if(this.linecap!==void 0)$.linecap=this.linecap;if(this.linejoin!==void 0)$.linejoin=this.linejoin;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.wireframe!==void 0)$.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)$.flatShading=this.flatShading;if(this.fog!==void 0)$.fog=this.fog;if(Object.keys(this.userData).length>0)$.userData=this.userData;function W(Z){let K=[];for(let H in Z){let Y=Z[H];delete Y.metadata,K.push(Y)}return K}if(Q){let Z=W(J.textures),K=W(J.images);if(Z.length>0)$.textures=Z;if(K.length>0)$.images=K}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new y0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map(($)=>new c8().fromJSON($));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new W0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new W0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let W=Q.length;$=Array(W);for(let Z=0;Z!==W;++Z)$[Z]=Q[Z].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class l7 extends j8{constructor(J){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new y0(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.rotation=J.rotation,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var V6,UQ=new T,D6=new T,B6=new T,k6=new W0,GQ=new W0,AX=new n0,C$=new T,NQ=new T,z$=new T,aH=new W0,FZ=new W0,rH=new W0;class m6 extends zJ{constructor(J=new l7){super();if(this.isSprite=!0,this.type="Sprite",V6===void 0){V6=new jJ;let Q=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),$=new p6(Q,5);V6.setIndex([0,1,2,0,2,3]),V6.setAttribute("position",new $7($,3,0,!1)),V6.setAttribute("uv",new $7($,2,3,!1))}this.geometry=V6,this.material=J,this.center=new W0(0.5,0.5),this.count=1}intersectsFrustum(J){return J.intersectsSprite(this)}raycast(J,Q){if(J.camera===null)o0('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(D6.setFromMatrixScale(this.matrixWorld),AX.copy(J.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(J.camera.matrixWorldInverse,this.matrixWorld),B6.setFromMatrixPosition(this.modelViewMatrix),J.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)D6.multiplyScalar(-B6.z);let $=this.material.rotation,W,Z;if($!==0)Z=Math.cos($),W=Math.sin($);let K=this.center;P$(C$.set(-0.5,-0.5,0),B6,K,D6,W,Z),P$(NQ.set(0.5,-0.5,0),B6,K,D6,W,Z),P$(z$.set(0.5,0.5,0),B6,K,D6,W,Z),aH.set(0,0),FZ.set(1,0),rH.set(1,1);let H=J.ray.intersectTriangle(C$,NQ,z$,!1,UQ);if(H===null){if(P$(NQ.set(-0.5,0.5,0),B6,K,D6,W,Z),FZ.set(0,1),H=J.ray.intersectTriangle(C$,z$,NQ,!1,UQ),H===null)return}let Y=J.ray.origin.distanceTo(UQ);if(Y<J.near||Y>J.far)return;Q.push({distance:Y,point:UQ.clone(),uv:g8.getInterpolation(UQ,C$,NQ,z$,aH,FZ,rH,new W0),face:null,object:this})}copy(J,Q){if(super.copy(J,Q),J.center!==void 0)this.center.copy(J.center);return this.material=J.material,this}}function P$(J,Q,$,W,Z,K){if(k6.subVectors(J,$).addScalar(0.5).multiply(W),Z!==void 0)GQ.x=K*k6.x-Z*k6.y,GQ.y=Z*k6.x+K*k6.y;else GQ.copy(k6);J.copy(Q),J.x+=GQ.x,J.y+=GQ.y,J.applyMatrix4(AX)}var f9=new T,qZ=new T,I$=new T,A$=new T;class G7{constructor(J=new T,Q=new T(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,f9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=f9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return f9.copy(this.origin).addScaledVector(this.direction,Q),f9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,W){qZ.copy(J).add(Q).multiplyScalar(0.5),I$.copy(Q).sub(J).normalize(),A$.copy(this.origin).sub(qZ);let Z=J.distanceTo(Q)*0.5,K=-this.direction.dot(I$),H=A$.dot(this.direction),Y=-A$.dot(I$),X=A$.lengthSq(),U=Math.abs(1-K*K),N,E,G,F;if(U>0)if(N=K*Y-H,E=K*H-Y,F=Z*U,N>=0)if(E>=-F)if(E<=F){let q=1/U;N*=q,E*=q,G=N*(N+K*E+2*H)+E*(K*N+E+2*Y)+X}else E=Z,N=Math.max(0,-(K*E+H)),G=-N*N+E*(E+2*Y)+X;else E=-Z,N=Math.max(0,-(K*E+H)),G=-N*N+E*(E+2*Y)+X;else if(E<=-F)N=Math.max(0,-(-K*Z+H)),E=N>0?-Z:Math.min(Math.max(-Z,-Y),Z),G=-N*N+E*(E+2*Y)+X;else if(E<=F)N=0,E=Math.min(Math.max(-Z,-Y),Z),G=E*(E+2*Y)+X;else N=Math.max(0,-(K*Z+H)),E=N>0?Z:Math.min(Math.max(-Z,-Y),Z),G=-N*N+E*(E+2*Y)+X;else E=K>0?-Z:Z,N=Math.max(0,-(K*E+H)),G=-N*N+E*(E+2*Y)+X;if($)$.copy(this.origin).addScaledVector(this.direction,N);if(W)W.copy(qZ).addScaledVector(I$,E);return G}intersectSphere(J,Q){if(J.radius<0)return null;f9.subVectors(J.center,this.origin);let $=f9.dot(this.direction),W=f9.dot(f9)-$*$,Z=J.radius*J.radius;if(W>Z)return null;let K=Math.sqrt(Z-W),H=$-K,Y=$+K;if(Y<0)return null;if(H<0)return this.at(Y,Q);return this.at(H,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,W,Z,K,H,Y,X=1/this.direction.x,U=1/this.direction.y,N=1/this.direction.z,E=this.origin;if(X>=0)$=(J.min.x-E.x)*X,W=(J.max.x-E.x)*X;else $=(J.max.x-E.x)*X,W=(J.min.x-E.x)*X;if(U>=0)Z=(J.min.y-E.y)*U,K=(J.max.y-E.y)*U;else Z=(J.max.y-E.y)*U,K=(J.min.y-E.y)*U;if($>K||Z>W)return null;if(Z>$||isNaN($))$=Z;if(K<W||isNaN(W))W=K;if(N>=0)H=(J.min.z-E.z)*N,Y=(J.max.z-E.z)*N;else H=(J.max.z-E.z)*N,Y=(J.min.z-E.z)*N;if($>Y||H>W)return null;if(H>$||$!==$)$=H;if(Y<W||W!==W)W=Y;if(W<0)return null;return this.at($>=0?$:W,Q)}intersectsBox(J){return this.intersectBox(J,f9)!==null}intersectTriangle(J,Q,$,W,Z){let K=this.origin,H=this.direction,Y=H.x,X=H.y,U=H.z,N=J.x-K.x,E=J.y-K.y,G=J.z-K.z,F=Q.x-K.x,q=Q.y-K.y,V=Q.z-K.z,R=$.x-K.x,O=$.y-K.y,z=$.z-K.z,D=Math.abs(Y),L=Math.abs(X),M=Math.abs(U),I,w,B,A,d,y,b,J0,S,i,c,x;if(D>=L&&D>=M)if(B=Y,y=N,S=F,x=R,Y>=0)I=X,w=U,A=E,d=G,b=q,J0=V,i=O,c=z;else I=U,w=X,A=G,d=E,b=V,J0=q,i=z,c=O;else if(L>=M)if(B=X,y=E,S=q,x=O,X>=0)I=U,w=Y,A=G,d=N,b=V,J0=F,i=z,c=R;else I=Y,w=U,A=N,d=G,b=F,J0=V,i=R,c=z;else if(B=U,y=G,S=V,x=z,U>=0)I=Y,w=X,A=N,d=E,b=F,J0=q,i=R,c=O;else I=X,w=Y,A=E,d=N,b=q,J0=F,i=O,c=R;if(B===0)return null;let K0=I/B,n=w/B,$0=1/B,U0=A-K0*y,u0=d-n*y,I0=b-K0*S,i0=J0-n*S,s0=i-K0*x,o=c-n*x,E0=s0*i0-o*I0,q0=U0*o-u0*s0,l0=I0*u0-i0*U0;if(W){if(E0<0||q0<0||l0<0)return null}else if((E0<0||q0<0||l0<0)&&(E0>0||q0>0||l0>0))return null;let c0=E0+q0+l0;if(c0===0)return null;let p0=$0*(E0*y+q0*S+l0*x);if(c0>0?p0<0:p0>0)return null;return this.at(p0/c0,Z)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cJ extends j8{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new y0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Y9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var tH=new n0,_7=new G7,_$=new m8,eH=new T,T$=new T,w$=new T,S$=new T,OZ=new T,j$=new T,JY=new T,y$=new T;class z0 extends zJ{constructor(J=new jJ,Q=new cJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,K=W.length;Z<K;Z++){let H=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=Z}}}}getVertexPosition(J,Q){let $=this.geometry,W=$.attributes.position,Z=$.morphAttributes.position,K=$.morphTargetsRelative;Q.fromBufferAttribute(W,J);let H=this.morphTargetInfluences;if(Z&&H){j$.set(0,0,0);for(let Y=0,X=Z.length;Y<X;Y++){let U=H[Y],N=Z[Y];if(U===0)continue;if(OZ.fromBufferAttribute(N,J),K)j$.addScaledVector(OZ,U);else j$.addScaledVector(OZ.sub(Q),U)}Q.add(j$)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.material,Z=this.matrixWorld;if(W===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(_$.copy($.boundingSphere),_$.applyMatrix4(Z),_7.copy(J.ray).recast(J.near),_$.containsPoint(_7.origin)===!1){if(_7.intersectSphere(_$,eH)===null)return;if(_7.origin.distanceToSquared(eH)>(J.far-J.near)**2)return}if(tH.copy(Z).invert(),_7.copy(J.ray).applyMatrix4(tH),$.boundingBox!==null){if(_7.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,_7)}_computeIntersections(J,Q,$){let W,Z=this.geometry,K=this.material,H=Z.index,Y=Z.attributes.position,X=Z.attributes.uv,U=Z.attributes.uv1,N=Z.attributes.normal,E=Z.groups,G=Z.drawRange;if(H!==null)if(Array.isArray(K))for(let F=0,q=E.length;F<q;F++){let V=E[F],R=K[V.materialIndex],O=Math.max(V.start,G.start),z=Math.min(H.count,Math.min(V.start+V.count,G.start+G.count));for(let D=O,L=z;D<L;D+=3){let M=H.getX(D),I=H.getX(D+1),w=H.getX(D+2);if(W=v$(this,R,J,$,X,U,N,M,I,w),W)W.faceIndex=Math.floor(D/3),W.face.materialIndex=V.materialIndex,Q.push(W)}}else{let F=Math.max(0,G.start),q=Math.min(H.count,G.start+G.count);for(let V=F,R=q;V<R;V+=3){let O=H.getX(V),z=H.getX(V+1),D=H.getX(V+2);if(W=v$(this,K,J,$,X,U,N,O,z,D),W)W.faceIndex=Math.floor(V/3),Q.push(W)}}else if(Y!==void 0)if(Array.isArray(K))for(let F=0,q=E.length;F<q;F++){let V=E[F],R=K[V.materialIndex],O=Math.max(V.start,G.start),z=Math.min(Y.count,Math.min(V.start+V.count,G.start+G.count));for(let D=O,L=z;D<L;D+=3){let M=D,I=D+1,w=D+2;if(W=v$(this,R,J,$,X,U,N,M,I,w),W)W.faceIndex=Math.floor(D/3),W.face.materialIndex=V.materialIndex,Q.push(W)}}else{let F=Math.max(0,G.start),q=Math.min(Y.count,G.start+G.count);for(let V=F,R=q;V<R;V+=3){let O=V,z=V+1,D=V+2;if(W=v$(this,K,J,$,X,U,N,O,z,D),W)W.faceIndex=Math.floor(V/3),Q.push(W)}}}}function ZG(J,Q,$,W,Z,K,H,Y){let X;if(Q.side===1)X=W.intersectTriangle(H,K,Z,!0,Y);else X=W.intersectTriangle(Z,K,H,Q.side===0,Y);if(X===null)return null;y$.copy(Y),y$.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(y$);if(U<$.near||U>$.far)return null;return{distance:U,point:y$.clone(),object:J}}function v$(J,Q,$,W,Z,K,H,Y,X,U){J.getVertexPosition(Y,T$),J.getVertexPosition(X,w$),J.getVertexPosition(U,S$);let N=ZG(J,Q,$,W,T$,w$,S$,JY);if(N){let E=new T;if(g8.getBarycoord(JY,T$,w$,S$,E),Z)N.uv=g8.getInterpolatedAttribute(Z,Y,X,U,E,new W0);if(K)N.uv1=g8.getInterpolatedAttribute(K,Y,X,U,E,new W0);if(H){if(N.normal=g8.getInterpolatedAttribute(H,Y,X,U,E,new T),N.normal.dot(W.direction)>0)N.normal.multiplyScalar(-1)}let G={a:Y,b:X,c:U,normal:new T,materialIndex:0};g8.getNormal(T$,w$,S$,G.normal),N.face=G,N.barycoord=E}return N}var EQ=new wJ,QY=new wJ,$Y=new wJ,KG=new wJ,WY=new n0,f$=new T,RZ=new m8,ZY=new n0,LZ=new G7;class FW extends z0{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new n0,this.bindMatrixInverse=new n0,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new I8;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,f$),this.boundingBox.expandByPoint(f$)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new m8;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,f$),this.boundingSphere.expandByPoint(f$)}copy(J,Q){if(super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,Q){let $=this.material,W=this.matrixWorld;if($===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(RZ.copy(this.boundingSphere),RZ.applyMatrix4(W),J.ray.intersectsSphere(RZ)===!1)return;if(ZY.copy(W).invert(),LZ.copy(J.ray).applyMatrix4(ZY),this.boundingBox!==null){if(LZ.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,LZ)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new wJ,Q=this.geometry.attributes.skinWeight;for(let $=0,W=Q.count;$<W;$++){J.fromBufferAttribute(Q,$);let Z=1/J.manhattanLength();if(Z!==1/0)J.multiplyScalar(Z);else J.set(1,0,0,0);Q.setXYZW($,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else g0("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let $=this.skeleton,W=this.geometry;if(QY.fromBufferAttribute(W.attributes.skinIndex,J),$Y.fromBufferAttribute(W.attributes.skinWeight,J),Q.isVector4)EQ.copy(Q),Q.set(0,0,0,0);else EQ.set(...Q,1),Q.set(0,0,0);EQ.applyMatrix4(this.bindMatrix);for(let Z=0;Z<4;Z++){let K=$Y.getComponent(Z);if(K!==0){let H=QY.getComponent(Z);WY.multiplyMatrices($.bones[H].matrixWorld,$.boneInverses[H]),Q.addScaledVector(KG.copy(EQ).applyMatrix4(WY),K)}}if(Q.isVector4)Q.w=EQ.w;return Q.applyMatrix4(this.bindMatrixInverse)}}class bQ extends zJ{constructor(){super();this.isBone=!0,this.type="Bone"}}class xQ extends tJ{constructor(J=null,Q=1,$=1,W,Z,K,H,Y,X=1003,U=1003,N,E){super(null,K,H,Y,X,U,W,Z,N,E);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var KY=new n0,HG=new n0;class gQ{constructor(J=[],Q=[]){this.uuid=n8(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){g0("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let $=0,W=this.bones.length;$<W;$++)this.boneInverses.push(new n0)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let $=new n0;if(this.bones[J])$.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push($)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($)$.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($){if($.parent&&$.parent.isBone)$.matrix.copy($.parent.matrixWorld).invert(),$.matrix.multiply($.matrixWorld);else $.matrix.copy($.matrixWorld);$.matrix.decompose($.position,$.quaternion,$.scale)}}}update(){let J=this.bones,Q=this.boneInverses,$=this.boneMatrices,W=this.boneTexture;for(let Z=0,K=J.length;Z<K;Z++){let H=J[Z]?J[Z].matrixWorld:HG;KY.multiplyMatrices(H,Q[Z]),KY.toArray($,Z*16)}if(W!==null)W.needsUpdate=!0}clone(){return new gQ(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let $=new xQ(Q,J,J,1023,1015);return $.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=$,this}getBoneByName(J){for(let Q=0,$=this.bones.length;Q<$;Q++){let W=this.bones[Q];if(W.name===J)return W}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let $=0,W=J.bones.length;$<W;$++){let Z=J.bones[$],K=Q[Z];if(K===void 0)g0("Skeleton: No bone found with UUID:",Z),K=new bQ;this.bones.push(K),this.boneInverses.push(new n0().fromArray(J.boneInverses[$]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,$=this.boneInverses;for(let W=0,Z=Q.length;W<Z;W++){let K=Q[W];J.bones.push(K.uuid);let H=$[W];J.boneInverses.push(H.toArray())}return J}}class W7 extends oJ{constructor(J,Q,$,W=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=W}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var M6=new n0,HY=new n0,h$=[],YY=new I8,YG=new n0,FQ=new z0,qQ=new m8;class N7 extends z0{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new W7(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let W=0;W<$;W++)this.setMatrixAt(W,YG)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new I8;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,M6),YY.copy(J.boundingBox).applyMatrix4(M6),this.boundingBox.union(YY)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new m8;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,M6),qQ.copy(J.boundingSphere).applyMatrix4(M6),this.boundingSphere.union(qQ)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,W=this.morphTexture.source.data.data,Z=$.length+1,K=J*Z+1;for(let H=0;H<$.length;H++)$[H]=W[K+H]}raycast(J,Q){let $=this.matrixWorld,W=this.count;if(FQ.geometry=this.geometry,FQ.material=this.material,FQ.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(qQ.copy(this.boundingSphere),qQ.applyMatrix4($),J.ray.intersectsSphere(qQ)===!1)return;for(let Z=0;Z<W;Z++){this.getMatrixAt(Z,M6),HY.multiplyMatrices($,M6),FQ.matrixWorld=HY,FQ.raycast(J,h$);for(let K=0,H=h$.length;K<H;K++){let Y=h$[K];Y.instanceId=Z,Y.object=this,Q.push(Y)}h$.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new W7(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let $=Q.morphTargetInfluences,W=$.length+1;if(this.morphTexture===null)this.morphTexture=new xQ(new Float32Array(W*this.count),W,this.count,1028,1015);let Z=this.morphTexture.source.data.data,K=0;for(let X=0;X<$.length;X++)K+=$[X];let H=this.geometry.morphTargetsRelative?1:1-K,Y=W*J;return Z[Y]=H,Z.set($,Y+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var T7=new m8,XG=new W0(0.5,0.5),b$=new T;class pQ{constructor(J=new c8,Q=new c8,$=new c8,W=new c8,Z=new c8,K=new c8){this.planes=[J,Q,$,W,Z,K]}set(J,Q,$,W,Z,K){let H=this.planes;return H[0].copy(J),H[1].copy(Q),H[2].copy($),H[3].copy(W),H[4].copy(Z),H[5].copy(K),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let W=this.planes,Z=J.elements,K=Z[0],H=Z[1],Y=Z[2],X=Z[3],U=Z[4],N=Z[5],E=Z[6],G=Z[7],F=Z[8],q=Z[9],V=Z[10],R=Z[11],O=Z[12],z=Z[13],D=Z[14],L=Z[15];if(W[0].setComponents(X-K,G-U,R-F,L-O).normalize(),W[1].setComponents(X+K,G+U,R+F,L+O).normalize(),W[2].setComponents(X+H,G+N,R+q,L+z).normalize(),W[3].setComponents(X-H,G-N,R-q,L-z).normalize(),$)W[4].setComponents(Y,E,V,D).normalize(),W[5].setComponents(X-Y,G-E,R-V,L-D).normalize();else if(W[4].setComponents(X-Y,G-E,R-V,L-D).normalize(),Q===2000)W[5].setComponents(X+Y,G+E,R+V,L+D).normalize();else if(Q===2001)W[5].setComponents(Y,E,V,D).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();T7.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();T7.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(T7)}intersectsSprite(J){T7.center.set(0,0,0);let Q=XG.distanceTo(J.center);return T7.radius=0.7071067811865476+Q,T7.applyMatrix4(J.matrixWorld),this.intersectsSphere(T7)}intersectsSphere(J){let Q=this.planes,$=J.center,W=-J.radius;for(let Z=0;Z<6;Z++)if(Q[Z].distanceToPoint($)<W)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let W=Q[$];if(b$.x=W.normal.x>0?J.max.x:J.min.x,b$.y=W.normal.y>0?J.max.y:J.min.y,b$.z=W.normal.z>0?J.max.z:J.min.z,W.distanceToPoint(b$)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mQ extends j8{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new y0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var s$=new T,i$=new T,XY=new n0,OQ=new G7,x$=new m8,VZ=new T,UY=new T;class l6 extends zJ{constructor(J=new jJ,Q=new mQ){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let W=1,Z=Q.count;W<Z;W++)s$.fromBufferAttribute(Q,W-1),i$.fromBufferAttribute(Q,W),$[W]=$[W-1],$[W]+=s$.distanceTo(i$);J.setAttribute("lineDistance",new HJ($,1))}else g0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.matrixWorld,Z=J.params.Line.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(x$.copy($.boundingSphere),x$.applyMatrix4(W),x$.radius+=Z,J.ray.intersectsSphere(x$)===!1)return;XY.copy(W).invert(),OQ.copy(J.ray).applyMatrix4(XY);let H=Z/((this.scale.x+this.scale.y+this.scale.z)/3),Y=H*H,X=this.isLineSegments?2:1,U=$.index,E=$.attributes.position;if(U!==null){let G=Math.max(0,K.start),F=Math.min(U.count,K.start+K.count);for(let q=G,V=F-1;q<V;q+=X){let R=U.getX(q),O=U.getX(q+1),z=g$(this,J,OQ,Y,R,O,q);if(z)Q.push(z)}if(this.isLineLoop){let q=U.getX(F-1),V=U.getX(G),R=g$(this,J,OQ,Y,q,V,F-1);if(R)Q.push(R)}}else{let G=Math.max(0,K.start),F=Math.min(E.count,K.start+K.count);for(let q=G,V=F-1;q<V;q+=X){let R=g$(this,J,OQ,Y,q,q+1,q);if(R)Q.push(R)}if(this.isLineLoop){let q=g$(this,J,OQ,Y,F-1,G,F-1);if(q)Q.push(q)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,K=W.length;Z<K;Z++){let H=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=Z}}}}}function g$(J,Q,$,W,Z,K,H){let Y=J.geometry.attributes.position;if(s$.fromBufferAttribute(Y,Z),i$.fromBufferAttribute(Y,K),$.distanceSqToSegment(s$,i$,VZ,UY)>W)return;VZ.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(VZ);if(U<Q.near||U>Q.far)return;return{distance:U,point:UY.clone().applyMatrix4(J.matrixWorld),index:H,face:null,faceIndex:null,barycoord:null,object:J}}var GY=new T,NY=new T;class qW extends l6{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let W=0,Z=Q.count;W<Z;W+=2)GY.fromBufferAttribute(Q,W),NY.fromBufferAttribute(Q,W+1),$[W]=W===0?0:$[W-1],$[W+1]=$[W]+GY.distanceTo(NY);J.setAttribute("lineDistance",new HJ($,1))}else g0("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class OW extends l6{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class u7 extends j8{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new y0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var EY=new n0,zZ=new G7,p$=new m8,m$=new T;class u6 extends zJ{constructor(J=new jJ,Q=new u7){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.matrixWorld,Z=J.params.Points.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(p$.copy($.boundingSphere),p$.applyMatrix4(W),p$.radius+=Z,J.ray.intersectsSphere(p$)===!1)return;EY.copy(W).invert(),zZ.copy(J.ray).applyMatrix4(EY);let H=Z/((this.scale.x+this.scale.y+this.scale.z)/3),Y=H*H,X=$.index,N=$.attributes.position;if(X!==null){let E=Math.max(0,K.start),G=Math.min(X.count,K.start+K.count);for(let F=E,q=G;F<q;F++){let V=X.getX(F);m$.fromBufferAttribute(N,V),FY(m$,V,Y,W,J,Q,this)}}else{let E=Math.max(0,K.start),G=Math.min(N.count,K.start+K.count);for(let F=E,q=G;F<q;F++)m$.fromBufferAttribute(N,F),FY(m$,F,Y,W,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,K=W.length;Z<K;Z++){let H=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=Z}}}}}function FY(J,Q,$,W,Z,K,H){let Y=zZ.distanceSqToPoint(J);if(Y<$){let X=new T;zZ.closestPointToPoint(J,X),X.applyMatrix4(W);let U=Z.ray.origin.distanceTo(X);if(U<Z.near||U>Z.far)return;K.push({distance:U,distanceToRay:Math.sqrt(Y),point:X,index:Q,face:null,faceIndex:null,barycoord:null,object:H})}}class RW extends tJ{constructor(J=[],Q=301,$,W,Z,K,H,Y,X,U){super(J,Q,$,W,Z,K,H,Y,X,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class E7 extends tJ{constructor(J,Q,$,W,Z,K,H,Y,X){super(J,Q,$,W,Z,K,H,Y,X);this.isCanvasTexture=!0,this.needsUpdate=!0}}class d7 extends tJ{constructor(J,Q,$=1014,W,Z,K,H=1003,Y=1003,X,U=1026,N=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let E={width:J,height:Q,depth:N};super(E,W,Z,K,H,Y,U,$,X);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new fQ(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class zK extends d7{constructor(J,Q=1014,$=301,W,Z,K=1003,H=1003,Y,X=1026){let U={width:J,height:J,depth:1},N=[U,U,U,U,U,U];super(J,J,Q,$,W,Z,K,H,Y,X);this.image=N,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class LW extends tJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class gJ extends jJ{constructor(J=1,Q=1,$=1,W=1,Z=1,K=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:W,heightSegments:Z,depthSegments:K};let H=this;W=Math.floor(W),Z=Math.floor(Z),K=Math.floor(K);let Y=[],X=[],U=[],N=[],E=0,G=0;F("z","y","x",-1,-1,$,Q,J,K,Z,0),F("z","y","x",1,-1,$,Q,-J,K,Z,1),F("x","z","y",1,1,J,$,Q,W,K,2),F("x","z","y",1,-1,J,$,-Q,W,K,3),F("x","y","z",1,-1,J,Q,$,W,Z,4),F("x","y","z",-1,-1,J,Q,-$,W,Z,5),this.setIndex(Y),this.setAttribute("position",new HJ(X,3)),this.setAttribute("normal",new HJ(U,3)),this.setAttribute("uv",new HJ(N,2));function F(q,V,R,O,z,D,L,M,I,w,B){let A=D/I,d=L/w,y=D/2,b=L/2,J0=M/2,S=I+1,i=w+1,c=0,x=0,K0=new T;for(let n=0;n<i;n++){let $0=n*d-b;for(let U0=0;U0<S;U0++){let u0=U0*A-y;K0[q]=u0*O,K0[V]=$0*z,K0[R]=J0,X.push(K0.x,K0.y,K0.z),K0[q]=0,K0[V]=0,K0[R]=M>0?1:-1,U.push(K0.x,K0.y,K0.z),N.push(U0/I),N.push(1-n/w),c+=1}}for(let n=0;n<w;n++)for(let $0=0;$0<I;$0++){let U0=E+$0+S*n,u0=E+$0+S*(n+1),I0=E+($0+1)+S*(n+1),i0=E+($0+1)+S*n;Y.push(U0,u0,i0),Y.push(u0,I0,i0),x+=6}H.addGroup(G,x,B),G+=x,E+=c}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new gJ(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class F7 extends jJ{constructor(J=1,Q=32,$=0,W=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:Q,thetaStart:$,thetaLength:W},Q=Math.max(3,Q);let Z=[],K=[],H=[],Y=[],X=new T,U=new W0;K.push(0,0,0),H.push(0,0,1),Y.push(0.5,0.5);for(let N=0,E=3;N<=Q;N++,E+=3){let G=$+N/Q*W;X.x=J*Math.cos(G),X.y=J*Math.sin(G),K.push(X.x,X.y,X.z),H.push(0,0,1),U.x=(K[E]/J+1)/2,U.y=(K[E+1]/J+1)/2,Y.push(U.x,U.y)}for(let N=1;N<=Q;N++)Z.push(N,N+1,0);this.setIndex(Z),this.setAttribute("position",new HJ(K,3)),this.setAttribute("normal",new HJ(H,3)),this.setAttribute("uv",new HJ(Y,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new F7(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class pJ extends jJ{constructor(J=1,Q=1,$=1,W=32,Z=1,K=!1,H=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:W,heightSegments:Z,openEnded:K,thetaStart:H,thetaLength:Y};let X=this;W=Math.floor(W),Z=Math.floor(Z);let U=[],N=[],E=[],G=[],F=0,q=[],V=$/2,R=0;if(O(),K===!1){if(J>0)z(!0);if(Q>0)z(!1)}this.setIndex(U),this.setAttribute("position",new HJ(N,3)),this.setAttribute("normal",new HJ(E,3)),this.setAttribute("uv",new HJ(G,2));function O(){let D=new T,L=new T,M=0,I=(Q-J)/$;for(let w=0;w<=Z;w++){let B=[],A=w/Z,d=A*(Q-J)+J;for(let y=0;y<=W;y++){let b=y/W,J0=b*Y+H,S=Math.sin(J0),i=Math.cos(J0);L.x=d*S,L.y=-A*$+V,L.z=d*i,N.push(L.x,L.y,L.z),D.set(S,I,i).normalize(),E.push(D.x,D.y,D.z),G.push(b,1-A),B.push(F++)}q.push(B)}for(let w=0;w<W;w++)for(let B=0;B<Z;B++){let A=q[B][w],d=q[B+1][w],y=q[B+1][w+1],b=q[B][w+1];if(J>0||B!==0)U.push(A,d,b),M+=3;if(Q>0||B!==Z-1)U.push(d,y,b),M+=3}X.addGroup(R,M,0),R+=M}function z(D){let L=F,M=new W0,I=new T,w=0,B=D===!0?J:Q,A=D===!0?1:-1;for(let y=1;y<=W;y++)N.push(0,V*A,0),E.push(0,A,0),G.push(0.5,0.5),F++;let d=F;for(let y=0;y<=W;y++){let J0=y/W*Y+H,S=Math.cos(J0),i=Math.sin(J0);I.x=B*i,I.y=V*A,I.z=B*S,N.push(I.x,I.y,I.z),E.push(0,A,0),M.x=S*0.5+0.5,M.y=i*0.5*A+0.5,G.push(M.x,M.y),F++}for(let y=0;y<W;y++){let b=L+y,J0=d+y;if(D===!0)U.push(J0,J0+1,b);else U.push(J0+1,J0,b);w+=3}X.addGroup(R,w,D===!0?1:2),R+=w}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new pJ(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class lQ extends pJ{constructor(J=1,Q=1,$=32,W=1,Z=!1,K=0,H=Math.PI*2){super(0,J,Q,$,W,Z,K,H);this.type="ConeGeometry",this.parameters={radius:J,height:Q,radialSegments:$,heightSegments:W,openEnded:Z,thetaStart:K,thetaLength:H}}static fromJSON(J){return new lQ(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class i8{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){g0("Curve: .getPoint() not implemented.")}getPointAt(J,Q){let $=this.getUtoTmapping(J);return this.getPoint($,Q)}getPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));return Q}getSpacedPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPointAt($/J));return Q}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Q=[],$,W=this.getPoint(0),Z=0;Q.push(0);for(let K=1;K<=J;K++)$=this.getPoint(K/J),Z+=$.distanceTo(W),Q.push(Z),W=$;return this.cacheArcLengths=Q,Q}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Q=null){let $=this.getLengths(),W=0,Z=$.length,K;if(Q)K=Q;else K=J*$[Z-1];let H=0,Y=Z-1,X;while(H<=Y)if(W=Math.floor(H+(Y-H)/2),X=$[W]-K,X<0)H=W+1;else if(X>0)Y=W-1;else{Y=W;break}if(W=Y,$[W]===K)return W/(Z-1);let U=$[W],E=$[W+1]-U,G=(K-U)/E;return(W+G)/(Z-1)}getTangent(J,Q){let W=J-0.0001,Z=J+0.0001;if(W<0)W=0;if(Z>1)Z=1;let K=this.getPoint(W),H=this.getPoint(Z),Y=Q||(K.isVector2?new W0:new T);return Y.copy(H).sub(K).normalize(),Y}getTangentAt(J,Q){let $=this.getUtoTmapping(J);return this.getTangent($,Q)}computeFrenetFrames(J,Q=!1){let $=new T,W=[],Z=[],K=[],H=new T,Y=new n0;for(let G=0;G<=J;G++){let F=G/J;W[G]=this.getTangentAt(F,new T)}Z[0]=new T,K[0]=new T;let X=Number.MAX_VALUE,U=Math.abs(W[0].x),N=Math.abs(W[0].y),E=Math.abs(W[0].z);if(U<=X)X=U,$.set(1,0,0);if(N<=X)X=N,$.set(0,1,0);if(E<=X)$.set(0,0,1);H.crossVectors(W[0],$).normalize(),Z[0].crossVectors(W[0],H),K[0].crossVectors(W[0],Z[0]);for(let G=1;G<=J;G++){if(Z[G]=Z[G-1].clone(),K[G]=K[G-1].clone(),H.crossVectors(W[G-1],W[G]),H.length()>Number.EPSILON){H.normalize();let F=Math.acos(WJ(W[G-1].dot(W[G]),-1,1));Z[G].applyMatrix4(Y.makeRotationAxis(H,F))}K[G].crossVectors(W[G],Z[G])}if(Q===!0){let G=Math.acos(WJ(Z[0].dot(Z[J]),-1,1));if(G/=J,W[0].dot(H.crossVectors(Z[0],Z[J]))>0)G=-G;for(let F=1;F<=J;F++)Z[F].applyMatrix4(Y.makeRotationAxis(W[F],G*F)),K[F].crossVectors(W[F],Z[F])}return{tangents:W,normals:Z,binormals:K}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}}class uQ extends i8{constructor(J=0,Q=0,$=1,W=1,Z=0,K=Math.PI*2,H=!1,Y=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Q,this.xRadius=$,this.yRadius=W,this.aStartAngle=Z,this.aEndAngle=K,this.aClockwise=H,this.aRotation=Y}getPoint(J,Q=new W0){let $=Q,W=Math.PI*2,Z=this.aEndAngle-this.aStartAngle,K=Math.abs(Z)<Number.EPSILON;while(Z<0)Z+=W;while(Z>W)Z-=W;if(Z<Number.EPSILON)if(K)Z=0;else Z=W;if(this.aClockwise===!0&&!K)if(Z===W)Z=-W;else Z=Z-W;let H=this.aStartAngle+J*Z,Y=this.aX+this.xRadius*Math.cos(H),X=this.aY+this.yRadius*Math.sin(H);if(this.aRotation!==0){let U=Math.cos(this.aRotation),N=Math.sin(this.aRotation),E=Y-this.aX,G=X-this.aY;Y=E*U-G*N+this.aX,X=E*N+G*U+this.aY}return $.set(Y,X)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class PK extends uQ{constructor(J,Q,$,W,Z,K){super(J,Q,$,$,W,Z,K);this.isArcCurve=!0,this.type="ArcCurve"}}function IK(){let J=0,Q=0,$=0,W=0;function Z(K,H,Y,X){J=K,Q=Y,$=-3*K+3*H-2*Y-X,W=2*K-2*H+Y+X}return{initCatmullRom:function(K,H,Y,X,U){Z(H,Y,U*(Y-K),U*(X-H))},initNonuniformCatmullRom:function(K,H,Y,X,U,N,E){let G=(H-K)/U-(Y-K)/(U+N)+(Y-H)/N,F=(Y-H)/N-(X-H)/(N+E)+(X-Y)/E;G*=N,F*=N,Z(H,Y,G,F)},calc:function(K){let H=K*K,Y=H*K;return J+Q*K+$*H+W*Y}}}var qY=new T,OY=new T,DZ=new IK,BZ=new IK,kZ=new IK;class dQ extends i8{constructor(J=[],Q=!1,$="centripetal",W=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Q,this.curveType=$,this.tension=W}getPoint(J,Q=new T){let $=Q,W=this.points,Z=W.length,K=(Z-(this.closed?0:1))*J,H=Math.floor(K),Y=K-H;if(this.closed)H+=H>0?0:(Math.floor(Math.abs(H)/Z)+1)*Z;else if(Y===0&&H===Z-1)H=Z-2,Y=1;let X,U;if(this.closed||H>0)X=W[(H-1)%Z];else OY.subVectors(W[0],W[1]).add(W[0]),X=OY;let N=W[H%Z],E=W[(H+1)%Z];if(this.closed||H+2<Z)U=W[(H+2)%Z];else qY.subVectors(W[Z-1],W[Z-2]).add(W[Z-1]),U=qY;if(this.curveType==="centripetal"||this.curveType==="chordal"){let G=this.curveType==="chordal"?0.5:0.25,F=Math.pow(X.distanceToSquared(N),G),q=Math.pow(N.distanceToSquared(E),G),V=Math.pow(E.distanceToSquared(U),G);if(q<0.0001)q=1;if(F<0.0001)F=q;if(V<0.0001)V=q;DZ.initNonuniformCatmullRom(X.x,N.x,E.x,U.x,F,q,V),BZ.initNonuniformCatmullRom(X.y,N.y,E.y,U.y,F,q,V),kZ.initNonuniformCatmullRom(X.z,N.z,E.z,U.z,F,q,V)}else if(this.curveType==="catmullrom")DZ.initCatmullRom(X.x,N.x,E.x,U.x,this.tension),BZ.initCatmullRom(X.y,N.y,E.y,U.y,this.tension),kZ.initCatmullRom(X.z,N.z,E.z,U.z,this.tension);return $.set(DZ.calc(Y),BZ.calc(Y),kZ.calc(Y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let W=J.points[Q];this.points.push(W.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let W=this.points[Q];J.points.push(W.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let W=J.points[Q];this.points.push(new T().fromArray(W))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function RY(J,Q,$,W,Z){let K=(W-Q)*0.5,H=(Z-$)*0.5,Y=J*J,X=J*Y;return(2*$-2*W+K+H)*X+(-3*$+3*W-2*K-H)*Y+K*J+$}function UG(J,Q){let $=1-J;return $*$*Q}function GG(J,Q){return 2*(1-J)*J*Q}function NG(J,Q){return J*J*Q}function DQ(J,Q,$,W){return UG(J,Q)+GG(J,$)+NG(J,W)}function EG(J,Q){let $=1-J;return $*$*$*Q}function FG(J,Q){let $=1-J;return 3*$*$*J*Q}function qG(J,Q){return 3*(1-J)*J*J*Q}function OG(J,Q){return J*J*J*Q}function BQ(J,Q,$,W,Z){return EG(J,Q)+FG(J,$)+qG(J,W)+OG(J,Z)}class VW extends i8{constructor(J=new W0,Q=new W0,$=new W0,W=new W0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Q,this.v2=$,this.v3=W}getPoint(J,Q=new W0){let $=Q,W=this.v0,Z=this.v1,K=this.v2,H=this.v3;return $.set(BQ(J,W.x,Z.x,K.x,H.x),BQ(J,W.y,Z.y,K.y,H.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class AK extends i8{constructor(J=new T,Q=new T,$=new T,W=new T){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Q,this.v2=$,this.v3=W}getPoint(J,Q=new T){let $=Q,W=this.v0,Z=this.v1,K=this.v2,H=this.v3;return $.set(BQ(J,W.x,Z.x,K.x,H.x),BQ(J,W.y,Z.y,K.y,H.y),BQ(J,W.z,Z.z,K.z,H.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class DW extends i8{constructor(J=new W0,Q=new W0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Q}getPoint(J,Q=new W0){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new W0){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class _K extends i8{constructor(J=new T,Q=new T){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Q}getPoint(J,Q=new T){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new T){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class BW extends i8{constructor(J=new W0,Q=new W0,$=new W0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new W0){let $=Q,W=this.v0,Z=this.v1,K=this.v2;return $.set(DQ(J,W.x,Z.x,K.x),DQ(J,W.y,Z.y,K.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class g9 extends i8{constructor(J=new T,Q=new T,$=new T){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new T){let $=Q,W=this.v0,Z=this.v1,K=this.v2;return $.set(DQ(J,W.x,Z.x,K.x),DQ(J,W.y,Z.y,K.y),DQ(J,W.z,Z.z,K.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class kW extends i8{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Q=new W0){let $=Q,W=this.points,Z=(W.length-1)*J,K=Math.floor(Z),H=Z-K,Y=W[K===0?K:K-1],X=W[K],U=W[K>W.length-2?W.length-1:K+1],N=W[K>W.length-3?W.length-1:K+2];return $.set(RY(H,Y.x,X.x,U.x,N.x),RY(H,Y.y,X.y,U.y,N.y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let W=J.points[Q];this.points.push(W.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let W=this.points[Q];J.points.push(W.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let W=J.points[Q];this.points.push(new W0().fromArray(W))}return this}}var PZ=Object.freeze({__proto__:null,ArcCurve:PK,CatmullRomCurve3:dQ,CubicBezierCurve:VW,CubicBezierCurve3:AK,EllipseCurve:uQ,LineCurve:DW,LineCurve3:_K,QuadraticBezierCurve:BW,QuadraticBezierCurve3:g9,SplineCurve:kW});class TK extends i8{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),Q=this.curves[this.curves.length-1].getPoint(1);if(!J.equals(Q)){let $=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new PZ[$](Q,J))}return this}getPoint(J,Q){let $=J*this.getLength(),W=this.getCurveLengths(),Z=0;while(Z<W.length){if(W[Z]>=$){let K=W[Z]-$,H=this.curves[Z],Y=H.getLength(),X=Y===0?0:1-K/Y;return H.getPointAt(X,Q)}Z++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],Q=0;for(let $=0,W=this.curves.length;$<W;$++)Q+=this.curves[$].getLength(),J.push(Q);return this.cacheLengths=J,J}getSpacedPoints(J=40){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));if(this.autoClose)Q.push(Q[0]);return Q}getPoints(J=12){let Q=[],$;for(let W=0,Z=this.curves;W<Z.length;W++){let K=Z[W],H=K.isEllipseCurve?J*2:K.isLineCurve||K.isLineCurve3?1:K.isSplineCurve?J*K.points.length:J,Y=K.getPoints(H);for(let X=0;X<Y.length;X++){let U=Y[X];if($&&$.equals(U))continue;Q.push(U),$=U}}if(this.autoClose&&Q.length>1&&!Q[Q.length-1].equals(Q[0]))Q.push(Q[0]);return Q}copy(J){super.copy(J),this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let W=J.curves[Q];this.curves.push(W.clone())}return this.autoClose=J.autoClose,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let Q=0,$=this.curves.length;Q<$;Q++){let W=this.curves[Q];J.curves.push(W.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let W=J.curves[Q];this.curves.push(new PZ[W.type]().fromJSON(W))}return this}}class o$ extends TK{constructor(J){super();if(this.type="Path",this.currentPoint=new W0,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let Q=1,$=J.length;Q<$;Q++)this.lineTo(J[Q].x,J[Q].y);return this}moveTo(J,Q){return this.currentPoint.set(J,Q),this}lineTo(J,Q){let $=new DW(this.currentPoint.clone(),new W0(J,Q));return this.curves.push($),this.currentPoint.set(J,Q),this}quadraticCurveTo(J,Q,$,W){let Z=new BW(this.currentPoint.clone(),new W0(J,Q),new W0($,W));return this.curves.push(Z),this.currentPoint.set($,W),this}bezierCurveTo(J,Q,$,W,Z,K){let H=new VW(this.currentPoint.clone(),new W0(J,Q),new W0($,W),new W0(Z,K));return this.curves.push(H),this.currentPoint.set(Z,K),this}splineThru(J){let Q=[this.currentPoint.clone()].concat(J),$=new kW(Q);return this.curves.push($),this.currentPoint.copy(J[J.length-1]),this}arc(J,Q,$,W,Z,K){let H=this.currentPoint.x,Y=this.currentPoint.y;return this.absarc(J+H,Q+Y,$,W,Z,K),this}absarc(J,Q,$,W,Z,K){return this.absellipse(J,Q,$,$,W,Z,K),this}ellipse(J,Q,$,W,Z,K,H,Y){let X=this.currentPoint.x,U=this.currentPoint.y;return this.absellipse(J+X,Q+U,$,W,Z,K,H,Y),this}absellipse(J,Q,$,W,Z,K,H,Y){let X=new uQ(J,Q,$,W,Z,K,H,Y);if(this.curves.length>0){let N=X.getPoint(0);if(!N.equals(this.currentPoint))this.lineTo(N.x,N.y)}this.curves.push(X);let U=X.getPoint(1);return this.currentPoint.copy(U),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class cQ extends o${constructor(J){super(J);this.uuid=n8(),this.type="Shape",this.holes=[]}getPointsHoles(J){let Q=[];for(let $=0,W=this.holes.length;$<W;$++)Q[$]=this.holes[$].getPoints(J);return Q}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let W=J.holes[Q];this.holes.push(W.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let Q=0,$=this.holes.length;Q<$;Q++){let W=this.holes[Q];J.holes.push(W.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let W=J.holes[Q];this.holes.push(new o$().fromJSON(W))}return this}}function RG(J,Q,$=2){let W=Q&&Q.length,Z=W?Q[0]*$:J.length,K=_X(J,0,Z,$,!0),H=[];if(!K||K.next===K.prev)return H;let Y,X,U;if(W)K=kG(J,Q,K,$);if(J.length>80*$){Y=J[0],X=J[1];let N=Y,E=X;for(let G=$;G<Z;G+=$){let F=J[G],q=J[G+1];if(F<Y)Y=F;if(q<X)X=q;if(F>N)N=F;if(q>E)E=q}U=Math.max(N-Y,E-X),U=U!==0?32767/U:0}return MQ(K,H,$,Y,X,U,0),H}function _X(J,Q,$,W,Z){let K;if(Z===jG(J,Q,$,W)>0)for(let H=Q;H<$;H+=W)K=LY(H/W|0,J[H],J[H+1],K);else for(let H=$-W;H>=Q;H-=W)K=LY(H/W|0,J[H],J[H+1],K);if(K&&w6(K,K.next))zQ(K),K=K.next;return K}function j7(J,Q){if(!J)return J;if(!Q)Q=J;let $=J,W;do if(W=!1,!$.steiner&&(w6($,$.next)||dJ($.prev,$,$.next)===0)){if(zQ($),$=Q=$.prev,$===$.next)break;W=!0}else $=$.next;while(W||$!==Q);return Q}function MQ(J,Q,$,W,Z,K,H){if(!J)return;if(!H&&K)IG(J,W,Z,K);let Y=J;while(J.prev!==J.next){let{prev:X,next:U}=J;if(K?VG(J,W,Z,K):LG(J)){Q.push(X.i,J.i,U.i),zQ(J),J=U.next,Y=U.next;continue}if(J=U,J===Y){if(!H)MQ(j7(J),Q,$,W,Z,K,1);else if(H===1)J=DG(j7(J),Q),MQ(J,Q,$,W,Z,K,2);else if(H===2)BG(J,Q,$,W,Z,K);break}}}function LG(J){let Q=J.prev,$=J,W=J.next;if(dJ(Q,$,W)>=0)return!1;let Z=Q.x,K=$.x,H=W.x,Y=Q.y,X=$.y,U=W.y,N=Math.min(Z,K,H),E=Math.min(Y,X,U),G=Math.max(Z,K,H),F=Math.max(Y,X,U),q=W.next;while(q!==Q){if(q.x>=N&&q.x<=G&&q.y>=E&&q.y<=F&&RQ(Z,Y,K,X,H,U,q.x,q.y)&&dJ(q.prev,q,q.next)>=0)return!1;q=q.next}return!0}function VG(J,Q,$,W){let Z=J.prev,K=J,H=J.next;if(dJ(Z,K,H)>=0)return!1;let Y=Z.x,X=K.x,U=H.x,N=Z.y,E=K.y,G=H.y,F=Math.min(Y,X,U),q=Math.min(N,E,G),V=Math.max(Y,X,U),R=Math.max(N,E,G),O=IZ(F,q,Q,$,W),z=IZ(V,R,Q,$,W),D=J.prevZ,L=J.nextZ;while(D&&D.z>=O&&L&&L.z<=z){if(D.x>=F&&D.x<=V&&D.y>=q&&D.y<=R&&D!==Z&&D!==H&&RQ(Y,N,X,E,U,G,D.x,D.y)&&dJ(D.prev,D,D.next)>=0)return!1;if(D=D.prevZ,L.x>=F&&L.x<=V&&L.y>=q&&L.y<=R&&L!==Z&&L!==H&&RQ(Y,N,X,E,U,G,L.x,L.y)&&dJ(L.prev,L,L.next)>=0)return!1;L=L.nextZ}while(D&&D.z>=O){if(D.x>=F&&D.x<=V&&D.y>=q&&D.y<=R&&D!==Z&&D!==H&&RQ(Y,N,X,E,U,G,D.x,D.y)&&dJ(D.prev,D,D.next)>=0)return!1;D=D.prevZ}while(L&&L.z<=z){if(L.x>=F&&L.x<=V&&L.y>=q&&L.y<=R&&L!==Z&&L!==H&&RQ(Y,N,X,E,U,G,L.x,L.y)&&dJ(L.prev,L,L.next)>=0)return!1;L=L.nextZ}return!0}function DG(J,Q){let $=J;do{let W=$.prev,Z=$.next.next;if(!w6(W,Z)&&wX(W,$,$.next,Z)&&CQ(W,Z)&&CQ(Z,W))Q.push(W.i,$.i,Z.i),zQ($),zQ($.next),$=J=Z;$=$.next}while($!==J);return j7($)}function BG(J,Q,$,W,Z,K){let H=J;do{let Y=H.next.next;while(Y!==H.prev){if(H.i!==Y.i&&TG(H,Y)){let X=SX(H,Y);H=j7(H,H.next),X=j7(X,X.next),MQ(H,Q,$,W,Z,K,0),MQ(X,Q,$,W,Z,K,0);return}Y=Y.next}H=H.next}while(H!==J)}function kG(J,Q,$,W){let Z=[];for(let K=0,H=Q.length;K<H;K++){let Y=Q[K]*W,X=K<H-1?Q[K+1]*W:J.length,U=_X(J,Y,X,W,!1);if(U===U.next)U.steiner=!0;Z.push(_G(U))}Z.sort(MG);for(let K=0;K<Z.length;K++)$=CG(Z[K],$);return $}function MG(J,Q){let $=J.x-Q.x;if($===0){if($=J.y-Q.y,$===0){let W=(J.next.y-J.y)/(J.next.x-J.x),Z=(Q.next.y-Q.y)/(Q.next.x-Q.x);$=W-Z}}return $}function CG(J,Q){let $=zG(J,Q);if(!$)return Q;let W=SX($,J);return j7(W,W.next),j7($,$.next)}function zG(J,Q){let $=Q,W=J.x,Z=J.y,K=-1/0,H;if(w6(J,$))return $;do{if(w6(J,$.next))return $.next;else if(Z<=$.y&&Z>=$.next.y&&$.next.y!==$.y){let E=$.x+(Z-$.y)*($.next.x-$.x)/($.next.y-$.y);if(E<=W&&E>K){if(K=E,H=$.x<$.next.x?$:$.next,E===W)return H}}$=$.next}while($!==Q);if(!H)return null;let Y=H,X=H.x,U=H.y,N=1/0;$=H;do{if(W>=$.x&&$.x>=X&&W!==$.x&&TX(Z<U?W:K,Z,X,U,Z<U?K:W,Z,$.x,$.y)){let E=Math.abs(Z-$.y)/(W-$.x);if(CQ($,J)&&(E<N||E===N&&($.x>H.x||$.x===H.x&&PG(H,$))))H=$,N=E}$=$.next}while($!==Y);return H}function PG(J,Q){return dJ(J.prev,J,Q.prev)<0&&dJ(Q.next,J,J.next)<0}function IG(J,Q,$,W){let Z=J;do{if(Z.z===0)Z.z=IZ(Z.x,Z.y,Q,$,W);Z.prevZ=Z.prev,Z.nextZ=Z.next,Z=Z.next}while(Z!==J);Z.prevZ.nextZ=null,Z.prevZ=null,AG(Z)}function AG(J){let Q,$=1;do{let W=J,Z;J=null;let K=null;Q=0;while(W){Q++;let H=W,Y=0;for(let U=0;U<$;U++)if(Y++,H=H.nextZ,!H)break;let X=$;while(Y>0||X>0&&H){if(Y!==0&&(X===0||!H||W.z<=H.z))Z=W,W=W.nextZ,Y--;else Z=H,H=H.nextZ,X--;if(K)K.nextZ=Z;else J=Z;Z.prevZ=K,K=Z}W=H}K.nextZ=null,$*=2}while(Q>1);return J}function IZ(J,Q,$,W,Z){return J=(J-$)*Z|0,Q=(Q-W)*Z|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,Q=(Q|Q<<8)&16711935,Q=(Q|Q<<4)&252645135,Q=(Q|Q<<2)&858993459,Q=(Q|Q<<1)&1431655765,J|Q<<1}function _G(J){let Q=J,$=J;do{if(Q.x<$.x||Q.x===$.x&&Q.y<$.y)$=Q;Q=Q.next}while(Q!==J);return $}function TX(J,Q,$,W,Z,K,H,Y){return(Z-H)*(Q-Y)>=(J-H)*(K-Y)&&(J-H)*(W-Y)>=($-H)*(Q-Y)&&($-H)*(K-Y)>=(Z-H)*(W-Y)}function RQ(J,Q,$,W,Z,K,H,Y){return!(J===H&&Q===Y)&&TX(J,Q,$,W,Z,K,H,Y)}function TG(J,Q){return J.next.i!==Q.i&&J.prev.i!==Q.i&&!wG(J,Q)&&(CQ(J,Q)&&CQ(Q,J)&&SG(J,Q)&&(dJ(J.prev,J,Q.prev)||dJ(J,Q.prev,Q))||w6(J,Q)&&dJ(J.prev,J,J.next)>0&&dJ(Q.prev,Q,Q.next)>0)}function dJ(J,Q,$){return(Q.y-J.y)*($.x-Q.x)-(Q.x-J.x)*($.y-Q.y)}function w6(J,Q){return J.x===Q.x&&J.y===Q.y}function wX(J,Q,$,W){let Z=u$(dJ(J,Q,$)),K=u$(dJ(J,Q,W)),H=u$(dJ($,W,J)),Y=u$(dJ($,W,Q));if(Z!==K&&H!==Y)return!0;if(Z===0&&l$(J,$,Q))return!0;if(K===0&&l$(J,W,Q))return!0;if(H===0&&l$($,J,W))return!0;if(Y===0&&l$($,Q,W))return!0;return!1}function l$(J,Q,$){return Q.x<=Math.max(J.x,$.x)&&Q.x>=Math.min(J.x,$.x)&&Q.y<=Math.max(J.y,$.y)&&Q.y>=Math.min(J.y,$.y)}function u$(J){return J>0?1:J<0?-1:0}function wG(J,Q){let $=J;do{if($.i!==J.i&&$.next.i!==J.i&&$.i!==Q.i&&$.next.i!==Q.i&&wX($,$.next,J,Q))return!0;$=$.next}while($!==J);return!1}function CQ(J,Q){return dJ(J.prev,J,J.next)<0?dJ(J,Q,J.next)>=0&&dJ(J,J.prev,Q)>=0:dJ(J,Q,J.prev)<0||dJ(J,J.next,Q)<0}function SG(J,Q){let $=J,W=!1,Z=(J.x+Q.x)/2,K=(J.y+Q.y)/2;do{if($.y>K!==$.next.y>K&&$.next.y!==$.y&&Z<($.next.x-$.x)*(K-$.y)/($.next.y-$.y)+$.x)W=!W;$=$.next}while($!==J);return W}function SX(J,Q){let $=AZ(J.i,J.x,J.y),W=AZ(Q.i,Q.x,Q.y),Z=J.next,K=Q.prev;return J.next=Q,Q.prev=J,$.next=Z,Z.prev=$,W.next=$,$.prev=W,K.next=W,W.prev=K,W}function LY(J,Q,$,W){let Z=AZ(J,Q,$);if(!W)Z.prev=Z,Z.next=Z;else Z.next=W.next,Z.prev=W,W.next.prev=Z,W.next=Z;return Z}function zQ(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function AZ(J,Q,$){return{i:J,x:Q,y:$,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function jG(J,Q,$,W){let Z=0;for(let K=Q,H=$-W;K<$;K+=W)Z+=(J[H]-J[K])*(J[K+1]+J[H+1]),H=K;return Z}class jX{static triangulate(J,Q,$=2){return RG(J,Q,$)}}class A6{static area(J){let Q=J.length,$=0;for(let W=Q-1,Z=0;Z<Q;W=Z++)$+=J[W].x*J[Z].y-J[Z].x*J[W].y;return $*0.5}static isClockWise(J){return A6.area(J)<0}static triangulateShape(J,Q){let $=[],W=[],Z=[];VY(J),DY($,J);let K=J.length;Q.forEach(VY);for(let Y=0;Y<Q.length;Y++)W.push(K),K+=Q[Y].length,DY($,Q[Y]);let H=jX.triangulate($,W);for(let Y=0;Y<H.length;Y+=3)Z.push(H.slice(Y,Y+3));return Z}}function VY(J){let Q=J.length;if(Q>2&&J[Q-1].equals(J[0]))J.pop()}function DY(J,Q){for(let $=0;$<Q.length;$++)J.push(Q[$].x),J.push(Q[$].y)}class q7 extends jJ{constructor(J=[new W0(0,-0.5),new W0(0.5,0),new W0(0,0.5)],Q=12,$=0,W=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:J,segments:Q,phiStart:$,phiLength:W},Q=Math.floor(Q),W=WJ(W,0,Math.PI*2);let Z=[],K=[],H=[],Y=[],X=[],U=1/Q,N=new T,E=new W0,G=new T,F=new T,q=new T,V=0,R=0;for(let O=0;O<=J.length-1;O++)switch(O){case 0:V=J[O+1].x-J[O].x,R=J[O+1].y-J[O].y,G.x=R*1,G.y=-V,G.z=R*0,q.copy(G),G.normalize(),Y.push(G.x,G.y,G.z);break;case J.length-1:Y.push(q.x,q.y,q.z);break;default:V=J[O+1].x-J[O].x,R=J[O+1].y-J[O].y,G.x=R*1,G.y=-V,G.z=R*0,F.copy(G),G.x+=q.x,G.y+=q.y,G.z+=q.z,G.normalize(),Y.push(G.x,G.y,G.z),q.copy(F)}for(let O=0;O<=Q;O++){let z=$+O*U*W,D=Math.sin(z),L=Math.cos(z);for(let M=0;M<=J.length-1;M++){N.x=J[M].x*D,N.y=J[M].y,N.z=J[M].x*L,K.push(N.x,N.y,N.z),E.x=O/Q,E.y=M/(J.length-1),H.push(E.x,E.y);let I=Y[3*M+0]*D,w=Y[3*M+1],B=Y[3*M+0]*L;X.push(I,w,B)}}for(let O=0;O<Q;O++)for(let z=0;z<J.length-1;z++){let D=z+O*J.length,L=D,M=D+J.length,I=D+J.length+1,w=D+1;Z.push(L,M,w),Z.push(I,w,M)}this.setIndex(Z),this.setAttribute("position",new HJ(K,3)),this.setAttribute("uv",new HJ(H,2)),this.setAttribute("normal",new HJ(X,3))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new q7(J.points,J.segments,J.phiStart,J.phiLength)}}class H8 extends jJ{constructor(J=1,Q=1,$=1,W=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:W};let Z=J/2,K=Q/2,H=Math.floor($),Y=Math.floor(W),X=H+1,U=Y+1,N=J/H,E=Q/Y,G=[],F=[],q=[],V=[];for(let R=0;R<U;R++){let O=R*E-K;for(let z=0;z<X;z++){let D=z*N-Z;F.push(D,-O,0),q.push(0,0,1),V.push(z/H),V.push(1-R/Y)}}for(let R=0;R<Y;R++)for(let O=0;O<H;O++){let z=O+X*R,D=O+X*(R+1),L=O+1+X*(R+1),M=O+1+X*R;G.push(z,D,M),G.push(D,L,M)}this.setIndex(G),this.setAttribute("position",new HJ(F,3)),this.setAttribute("normal",new HJ(q,3)),this.setAttribute("uv",new HJ(V,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new H8(J.width,J.height,J.widthSegments,J.heightSegments)}}class nQ extends jJ{constructor(J=new cQ([new W0(0,0.5),new W0(-0.5,-0.5),new W0(0.5,-0.5)]),Q=12){super();this.type="ShapeGeometry",this.parameters={shapes:J,curveSegments:Q};let $=[],W=[],Z=[],K=[],H=0,Y=0;if(Array.isArray(J)===!1)X(J);else for(let U=0;U<J.length;U++)X(J[U]),this.addGroup(H,Y,U),H+=Y,Y=0;this.setIndex($),this.setAttribute("position",new HJ(W,3)),this.setAttribute("normal",new HJ(Z,3)),this.setAttribute("uv",new HJ(K,2));function X(U){let N=W.length/3,E=U.extractPoints(Q),G=E.shape,F=E.holes;if(A6.isClockWise(G)===!1)G=G.reverse();for(let V=0,R=F.length;V<R;V++){let O=F[V];if(A6.isClockWise(O)===!0)F[V]=O.reverse()}let q=A6.triangulateShape(G,F);for(let V=0,R=F.length;V<R;V++){let O=F[V];G=G.concat(O)}for(let V=0,R=G.length;V<R;V++){let O=G[V];W.push(O.x,O.y,0),Z.push(0,0,1),K.push(O.x,O.y)}for(let V=0,R=q.length;V<R;V++){let O=q[V],z=O[0]+N,D=O[1]+N,L=O[2]+N;$.push(z,D,L),Y+=3}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Q=this.parameters.shapes;return yG(Q,J)}static fromJSON(J,Q){let $=[];for(let W=0,Z=J.shapes.length;W<Z;W++){let K=Q[J.shapes[W]];$.push(K)}return new nQ($,J.curveSegments)}}function yG(J,Q){if(Q.shapes=[],Array.isArray(J))for(let $=0,W=J.length;$<W;$++){let Z=J[$];Q.shapes.push(Z.uuid)}else Q.shapes.push(J.uuid);return Q}class A8 extends jJ{constructor(J=1,Q=32,$=16,W=0,Z=Math.PI*2,K=0,H=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:$,phiStart:W,phiLength:Z,thetaStart:K,thetaLength:H},Q=Math.max(3,Math.floor(Q)),$=Math.max(2,Math.floor($));let Y=Math.min(K+H,Math.PI),X=0,U=[],N=new T,E=new T,G=[],F=[],q=[],V=[];for(let R=0;R<=$;R++){let O=[],z=R/$,D=K+z*H,L=J*Math.cos(D),M=Math.sqrt(J*J-L*L),I=0;if(R===0&&K===0)I=0.5/Q;else if(R===$&&Y===Math.PI)I=-0.5/Q;for(let w=0;w<=Q;w++){let B=w/Q,A=W+B*Z;N.x=-M*Math.cos(A),N.y=L,N.z=M*Math.sin(A),F.push(N.x,N.y,N.z),E.copy(N).normalize(),q.push(E.x,E.y,E.z),V.push(B+I,1-z),O.push(X++)}U.push(O)}for(let R=0;R<$;R++)for(let O=0;O<Q;O++){let z=U[R][O+1],D=U[R][O],L=U[R+1][O],M=U[R+1][O+1];if(R!==0||K>0)G.push(z,D,M);if(R!==$-1||Y<Math.PI)G.push(D,L,M)}this.setIndex(G),this.setAttribute("position",new HJ(F,3)),this.setAttribute("normal",new HJ(q,3)),this.setAttribute("uv",new HJ(V,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new A8(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class O7 extends jJ{constructor(J=1,Q=0.4,$=12,W=48,Z=Math.PI*2,K=0,H=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:$,tubularSegments:W,arc:Z,thetaStart:K,thetaLength:H},$=Math.floor($),W=Math.floor(W);let Y=[],X=[],U=[],N=[],E=new T,G=new T,F=new T;for(let q=0;q<=$;q++){let V=K+q/$*H;for(let R=0;R<=W;R++){let O=R/W*Z;G.x=(J+Q*Math.cos(V))*Math.cos(O),G.y=(J+Q*Math.cos(V))*Math.sin(O),G.z=Q*Math.sin(V),X.push(G.x,G.y,G.z),E.x=J*Math.cos(O),E.y=J*Math.sin(O),F.subVectors(G,E).normalize(),U.push(F.x,F.y,F.z),N.push(R/W),N.push(q/$)}}for(let q=1;q<=$;q++)for(let V=1;V<=W;V++){let R=(W+1)*q+V-1,O=(W+1)*(q-1)+V-1,z=(W+1)*(q-1)+V,D=(W+1)*q+V;Y.push(R,O,D),Y.push(O,z,D)}this.setIndex(Y),this.setAttribute("position",new HJ(X,3)),this.setAttribute("normal",new HJ(U,3)),this.setAttribute("uv",new HJ(N,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new O7(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc,J.thetaStart,J.thetaLength)}}class p9 extends jJ{constructor(J=new g9(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),Q=64,$=1,W=8,Z=!1){super();this.type="TubeGeometry",this.parameters={path:J,tubularSegments:Q,radius:$,radialSegments:W,closed:Z};let K=J.computeFrenetFrames(Q,Z);this.tangents=K.tangents,this.normals=K.normals,this.binormals=K.binormals;let H=new T,Y=new T,X=new W0,U=new T,N=[],E=[],G=[],F=[];q(),this.setIndex(F),this.setAttribute("position",new HJ(N,3)),this.setAttribute("normal",new HJ(E,3)),this.setAttribute("uv",new HJ(G,2));function q(){for(let z=0;z<Q;z++)V(z);V(Z===!1?Q:0),O(),R()}function V(z){U=J.getPointAt(z/Q,U);let D=K.normals[z],L=K.binormals[z];for(let M=0;M<=W;M++){let I=M/W*Math.PI*2,w=Math.sin(I),B=-Math.cos(I);Y.x=B*D.x+w*L.x,Y.y=B*D.y+w*L.y,Y.z=B*D.z+w*L.z,Y.normalize(),E.push(Y.x,Y.y,Y.z),H.x=U.x+$*Y.x,H.y=U.y+$*Y.y,H.z=U.z+$*Y.z,N.push(H.x,H.y,H.z)}}function R(){for(let z=1;z<=Q;z++)for(let D=1;D<=W;D++){let L=(W+1)*(z-1)+(D-1),M=(W+1)*z+(D-1),I=(W+1)*z+D,w=(W+1)*(z-1)+D;F.push(L,M,w),F.push(M,I,w)}}function O(){for(let z=0;z<=Q;z++)for(let D=0;D<=W;D++)X.x=z/Q,X.y=D/W,G.push(X.x,X.y)}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON();return J.path=this.parameters.path.toJSON(),J}static fromJSON(J){return new p9(new PZ[J.path.type]().fromJSON(J.path),J.tubularSegments,J.radius,J.radialSegments,J.closed)}}function c7(J){let Q={};for(let $ in J){Q[$]={};for(let W in J[$]){let Z=J[$][W];if(BY(Z))if(Z.isRenderTargetTexture)g0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][W]=null;else Q[$][W]=Z.clone();else if(Array.isArray(Z))if(BY(Z[0])){let K=[];for(let H=0,Y=Z.length;H<Y;H++)K[H]=Z[H].clone();Q[$][W]=K}else Q[$][W]=Z.slice();else Q[$][W]=Z}}return Q}function k8(J){let Q={};for(let $=0;$<J.length;$++){let W=c7(J[$]);for(let Z in W)Q[Z]=W[Z]}return Q}function BY(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function vG(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function wK(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return ZJ.workingColorSpace}var m9={clone:c7,merge:k8},fG=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hG=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nJ extends j8{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fG,this.fragmentShader=hG,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=c7(J.uniforms),this.uniformsGroups=vG(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let W in this.uniforms){let K=this.uniforms[W].value;if(K&&K.isTexture)Q.uniforms[W]={type:"t",value:K.toJSON(J).uuid};else if(K&&K.isColor)Q.uniforms[W]={type:"c",value:K.getHex()};else if(K&&K.isVector2)Q.uniforms[W]={type:"v2",value:K.toArray()};else if(K&&K.isVector3)Q.uniforms[W]={type:"v3",value:K.toArray()};else if(K&&K.isVector4)Q.uniforms[W]={type:"v4",value:K.toArray()};else if(K&&K.isMatrix3)Q.uniforms[W]={type:"m3",value:K.toArray()};else if(K&&K.isMatrix4)Q.uniforms[W]={type:"m4",value:K.toArray()};else Q.uniforms[W]={value:K}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let W in this.extensions)if(this.extensions[W]===!0)$[W]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let W=J.uniforms[$];switch(this.uniforms[$]={},W.type){case"t":this.uniforms[$].value=Q[W.value]||null;break;case"c":this.uniforms[$].value=new y0().setHex(W.value);break;case"v2":this.uniforms[$].value=new W0().fromArray(W.value);break;case"v3":this.uniforms[$].value=new T().fromArray(W.value);break;case"v4":this.uniforms[$].value=new wJ().fromArray(W.value);break;case"m3":this.uniforms[$].value=new t0().fromArray(W.value);break;case"m4":this.uniforms[$].value=new n0().fromArray(W.value);break;default:this.uniforms[$].value=W.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class sQ extends nJ{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class QJ extends j8{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new y0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new y0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new W0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Y9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class F8 extends QJ{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new W0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return WJ(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new y0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new y0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new y0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(J){if(this._retroreflectivity>0!==J>0)this.version++;this._retroreflectivity=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.retroreflectivity=J.retroreflectivity,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class SK extends j8{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class jK extends j8{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function Q7(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function n$(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}function bG(J){function Q(Z,K){return J[Z]-J[K]}let $=J.length,W=Array($);for(let Z=0;Z!==$;++Z)W[Z]=Z;return W.sort(Q),W}function kY(J,Q,$){let W=J.length,Z=new J.constructor(W);for(let K=0,H=0;H!==W;++K){let Y=$[K]*Q;for(let X=0;X!==Q;++X)Z[H++]=J[Y+X]}return Z}function xG(J,Q,$,W){let Z=1,K=J[0];while(K!==void 0&&K[W]===void 0)K=J[Z++];if(K===void 0)return;let H=K[W];if(H===void 0)return;if(Array.isArray(H))do{if(H=K[W],H!==void 0)Q.push(K.time),$.push(...H);K=J[Z++]}while(K!==void 0);else if(H.toArray!==void 0)do{if(H=K[W],H!==void 0)Q.push(K.time),H.toArray($,$.length);K=J[Z++]}while(K!==void 0);else do{if(H=K[W],H!==void 0)Q.push(K.time),$.push(H);K=J[Z++]}while(K!==void 0)}class l9{constructor(J,Q,$,W){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=W!==void 0?W:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,W=Q[$],Z=Q[$-1];J:{Q:{let K;$:{W:if(!(J<W)){for(let H=$+2;;){if(W===void 0){if(J<Z)break W;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===H)break;if(Z=W,W=Q[++$],J<W)break Q}K=Q.length;break $}if(!(J>=Z)){let H=Q[1];if(J<H)$=2,Z=H;for(let Y=$-2;;){if(Z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(W=Z,Z=Q[--$-1],J>=Z)break Q}K=$,$=0;break $}break J}while($<K){let H=$+K>>>1;if(J<Q[H])K=H;else $=H+1}if(W=Q[$],Z=Q[$-1],Z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(W===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,Z,W)}return this.interpolate_($,Z,J,W)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,W=this.valueSize,Z=J*W;for(let K=0;K!==W;++K)Q[K]=$[Z+K];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class yK extends l9{constructor(J,Q,$,W){super(J,Q,$,W);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let W=this.parameterPositions,Z=J-2,K=J+1,H=W[Z],Y=W[K];if(H===void 0)switch(this.getSettings_().endingStart){case 2401:Z=J,H=2*Q-$;break;case 2402:Z=W.length-2,H=Q+W[Z]-W[Z+1];break;default:Z=J,H=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:K=J,Y=2*$-Q;break;case 2402:K=1,Y=$+W[1]-W[0];break;default:K=J-1,Y=Q}let X=($-Q)*0.5,U=this.valueSize;this._weightPrev=X/(Q-H),this._weightNext=X/(Y-$),this._offsetPrev=Z*U,this._offsetNext=K*U}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this._offsetPrev,N=this._offsetNext,E=this._weightPrev,G=this._weightNext,F=($-Q)/(W-Q),q=F*F,V=q*F,R=-E*V+2*E*q-E*F,O=(1+E)*V+(-1.5-2*E)*q+(-0.5+E)*F+1,z=(-1-G)*V+(1.5+G)*q+0.5*F,D=G*V-G*q;for(let L=0;L!==H;++L)Z[L]=R*K[U+L]+O*K[X+L]+z*K[Y+L]+D*K[N+L];return Z}}class MW extends l9{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=($-Q)/(W-Q),N=1-U;for(let E=0;E!==H;++E)Z[E]=K[X+E]*N+K[Y+E]*U;return Z}}class vK extends l9{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J){return this.copySampleValue_(J-1)}}class fK extends l9{interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this.inTangents,N=this.outTangents;if(!U||!N){let F=($-Q)/(W-Q),q=1-F;for(let V=0;V!==H;++V)Z[V]=K[X+V]*q+K[Y+V]*F;return Z}let E=H*2,G=J-1;for(let F=0;F!==H;++F){let q=K[X+F],V=K[Y+F],R=G*E+F*2,O=N[R],z=N[R+1],D=J*E+F*2,L=U[D],M=U[D+1],I=pG($,Q,O,L,W);Z[F]=yX(I,q,z,M,V)}return Z}}function yX(J,Q,$,W,Z){let K=1-J;return K*K*K*Q+3*K*K*J*$+3*K*J*J*W+J*J*J*Z}function gG(J,Q,$,W,Z){let K=1-J;return 3*K*K*($-Q)+6*K*J*(W-$)+3*J*J*(Z-W)}function pG(J,Q,$,W,Z){let K=(J-Q)/(Z-Q);for(let H=0;H<8;H++){let Y=yX(K,Q,$,W,Z)-J;if(Math.abs(Y)<0.0000000001)break;let X=gG(K,Q,$,W,Z);if(Math.abs(X)<0.0000000001)break;K=Math.max(0,Math.min(1,K-Y/X))}return K}class l8{constructor(J,Q,$,W){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=Q7(Q,this.TimeBufferType),this.values=Q7($,this.ValueBufferType),this.setInterpolation(W||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:Q7(J.times,Array),values:Q7(J.values,Array)};let W=J.getInterpolation();if(W!==J.DefaultInterpolation)$.interpolation=W;if(n$(J.settings))$.settings={inTangents:Q7(J.settings.inTangents,Array),outTangents:Q7(J.settings.outTangents,Array)}}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new vK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new MW(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new yK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new fK(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return g0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,W=Q.length;$!==W;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,W=Q.length;$!==W;++$)Q[$]*=J;if(n$(this.settings))MY(this.settings.inTangents,J),MY(this.settings.outTangents,J)}return this}trim(J,Q){let $=this.times,W=$.length,Z=0,K=W-1;while(Z!==W&&$[Z]<J)++Z;while(K!==-1&&$[K]>Q)--K;if(++K,Z!==0||K!==W){if(Z>=K)K=Math.max(K,1),Z=K-1;let H=this.getValueSize();this.times=$.slice(Z,K),this.values=this.values.slice(Z*H,K*H)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)o0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,W=this.values,Z=$.length;if(Z===0)o0("KeyframeTrack: Track is empty.",this),J=!1;let K=null;for(let H=0;H!==Z;H++){let Y=$[H];if(typeof Y==="number"&&isNaN(Y)){o0("KeyframeTrack: Time is not a valid number.",this,H,Y),J=!1;break}if(K!==null&&K>Y){o0("KeyframeTrack: Out of order keys.",this,H,Y,K),J=!1;break}K=Y}if(W!==void 0){if(P5(W))for(let H=0,Y=W.length;H!==Y;++H){let X=W[H];if(isNaN(X)){o0("KeyframeTrack: Value is not a valid number.",this,H,X),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),W=this.getInterpolation()===2302,Z=J.length-1,K=1;for(let H=1;H<Z;++H){let Y=!1,X=J[H],U=J[H+1];if(X!==U&&(H!==1||X!==J[0]))if(!W){let N=H*$,E=N-$,G=N+$;for(let F=0;F!==$;++F){let q=Q[N+F];if(q!==Q[E+F]||q!==Q[G+F]){Y=!0;break}}}else Y=!0;if(Y){if(H!==K){J[K]=J[H];let N=H*$,E=K*$;for(let G=0;G!==$;++G)Q[E+G]=Q[N+G]}++K}}if(Z>0){J[K]=J[Z];for(let H=Z*$,Y=K*$,X=0;X!==$;++X)Q[Y+X]=Q[H+X];++K}if(K!==J.length)this.times=J.slice(0,K),this.values=Q.slice(0,K*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),W=new this.constructor(this.name,J,Q);if(W.createInterpolant=this.createInterpolant,n$(this.settings))W.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return W}}function MY(J,Q){for(let $=0,W=J.length;$!==W;$+=2)J[$]*=Q}l8.prototype.ValueTypeName="";l8.prototype.TimeBufferType=Float32Array;l8.prototype.ValueBufferType=Float32Array;l8.prototype.DefaultInterpolation=2301;class R7 extends l8{constructor(J,Q,$){super(J,Q,$)}}R7.prototype.ValueTypeName="bool";R7.prototype.ValueBufferType=Array;R7.prototype.DefaultInterpolation=2300;R7.prototype.InterpolantFactoryMethodLinear=void 0;R7.prototype.InterpolantFactoryMethodSmooth=void 0;class CW extends l8{constructor(J,Q,$,W){super(J,Q,$,W)}}CW.prototype.ValueTypeName="color";class L7 extends l8{constructor(J,Q,$,W){super(J,Q,$,W)}}L7.prototype.ValueTypeName="number";class hK extends l9{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=($-Q)/(W-Q),X=J*H;for(let U=X+H;X!==U;X+=4)qJ.slerpFlat(Z,0,K,X-H,K,X,Y);return Z}}class V7 extends l8{constructor(J,Q,$,W){super(J,Q,$,W)}InterpolantFactoryMethodLinear(J){return new hK(this.times,this.values,this.getValueSize(),J)}}V7.prototype.ValueTypeName="quaternion";V7.prototype.InterpolantFactoryMethodSmooth=void 0;class D7 extends l8{constructor(J,Q,$){super(J,Q,$)}}D7.prototype.ValueTypeName="string";D7.prototype.ValueBufferType=Array;D7.prototype.DefaultInterpolation=2300;D7.prototype.InterpolantFactoryMethodLinear=void 0;D7.prototype.InterpolantFactoryMethodSmooth=void 0;class n7 extends l8{constructor(J,Q,$,W){super(J,Q,$,W)}}n7.prototype.ValueTypeName="vector";class S6{constructor(J="",Q=-1,$=[],W=2500){if(this.name=J,this.tracks=$,this.duration=Q,this.blendMode=W,this.uuid=n8(),this.userData={},this.duration<0)this.resetDuration()}static parse(J){let Q=[],$=J.tracks,W=1/(J.fps||1);for(let K=0,H=$.length;K!==H;++K)Q.push(lG($[K]).scale(W));let Z=new this(J.name,J.duration,Q,J.blendMode);return Z.uuid=J.uuid,Z.userData=JSON.parse(J.userData||"{}"),Z}static toJSON(J){let Q=[],$=J.tracks,W={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode,userData:JSON.stringify(J.userData)};for(let Z=0,K=$.length;Z!==K;++Z)Q.push(l8.toJSON($[Z]));return W}static CreateFromMorphTargetSequence(J,Q,$,W){let Z=Q.length,K=[];for(let H=0;H<Z;H++){let Y=[],X=[];Y.push((H+Z-1)%Z,H,(H+1)%Z),X.push(0,1,0);let U=bG(Y);if(Y=kY(Y,1,U),X=kY(X,1,U),!W&&Y[0]===0)Y.push(Z),X.push(X[0]);K.push(new L7(".morphTargetInfluences["+Q[H].name+"]",Y,X).scale(1/$))}return new this(J,-1,K)}static findByName(J,Q){let $=J;if(!Array.isArray(J)){let W=J;$=W.geometry&&W.geometry.animations||W.animations}for(let W=0;W<$.length;W++)if($[W].name===Q)return $[W];return null}static CreateClipsFromMorphTargetSequences(J,Q,$){let W={},Z=/^([\w-]*?)([\d]+)$/;for(let H=0,Y=J.length;H<Y;H++){let X=J[H],U=X.name.match(Z);if(U&&U.length>1){let N=U[1],E=W[N];if(!E)W[N]=E=[];E.push(X)}}let K=[];for(let H in W)K.push(this.CreateFromMorphTargetSequence(H,W[H],Q,$));return K}resetDuration(){let J=this.tracks,Q=0;for(let $=0,W=J.length;$!==W;++$){let Z=this.tracks[$];Q=Math.max(Q,Z.times[Z.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let $=0;$<this.tracks.length;$++)J.push(this.tracks[$].clone());let Q=new this.constructor(this.name,this.duration,J,this.blendMode);return Q.userData=JSON.parse(JSON.stringify(this.userData)),Q}toJSON(){return this.constructor.toJSON(this)}}function mG(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return L7;case"vector":case"vector2":case"vector3":case"vector4":return n7;case"color":return CW;case"quaternion":return V7;case"bool":case"boolean":return R7;case"string":return D7}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function lG(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=mG(J.type);if(J.times===void 0){let W=[],Z=[];xG(J.keys,W,Z,"value"),J.times=W,J.values=Z}let $;if(Q.parse!==void 0)$=Q.parse(J);else $=new Q(J.name,J.times,J.values,J.interpolation);if(n$(J.settings))$.settings={inTangents:Q7(J.settings.inTangents,Float32Array),outTangents:Q7(J.settings.outTangents,Float32Array)};return $}var k9={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;if(CY(J))return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;if(CY(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function CY(J){try{let Q=J.slice(J.indexOf(":")+1);return new URL(Q).protocol==="blob:"}catch(Q){return!1}}class bK{constructor(J,Q,$){let W=this,Z=!1,K=0,H=0,Y=void 0,X=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(H++,Z===!1){if(W.onStart!==void 0)W.onStart(U,K,H)}Z=!0},this.itemEnd=function(U){if(K++,W.onProgress!==void 0)W.onProgress(U,K,H);if(K===H){if(Z=!1,W.onLoad!==void 0)W.onLoad()}},this.itemError=function(U){if(W.onError!==void 0)W.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,N){return X.push(U,N),this},this.removeHandler=function(U){let N=X.indexOf(U);if(N!==-1)X.splice(N,2);return this},this.getHandler=function(U){for(let N=0,E=X.length;N<E;N+=2){let G=X[N],F=X[N+1];if(G.global)G.lastIndex=0;if(G.test(U))return F}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var vX=new bK;class u9{constructor(J){if(this.manager=J!==void 0?J:vX,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(W,Z){$.load(J,W,Q,Z)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}u9.DEFAULT_MATERIAL_NAME="__DEFAULT";var h9={};class fX extends Error{constructor(J,Q){super(J);this.response=Q}}class iQ extends u9{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,Q,$,W){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=k9.get(`file:${J}`);if(Z!==void 0){this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(Z);this.manager.itemEnd(J)},0);return}if(h9[J]!==void 0){h9[J].push({onLoad:Q,onProgress:$,onError:W});return}h9[J]=[],h9[J].push({onLoad:Q,onProgress:$,onError:W});let K=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),H=this.mimeType,Y=this.responseType;fetch(K).then((X)=>{if(X.status===200||X.status===0){if(X.status===0)g0("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||X.body===void 0||X.body.getReader===void 0)return X;let U=h9[J],N=X.body.getReader(),E=X.headers.get("X-File-Size")||X.headers.get("Content-Length"),G=E?parseInt(E):0,F=G!==0,q=0,V=new ReadableStream({start(R){O();function O(){N.read().then(({done:z,value:D})=>{if(z)R.close();else{q+=D.byteLength;let L=new ProgressEvent("progress",{lengthComputable:F,loaded:q,total:G});for(let M=0,I=U.length;M<I;M++){let w=U[M];if(w.onProgress)w.onProgress(L)}R.enqueue(D),O()}},(z)=>{R.error(z)})}}});return new Response(V)}else throw new fX(`fetch for "${X.url}" responded with ${X.status}: ${X.statusText}`,X)}).then((X)=>{switch(Y){case"arraybuffer":return X.arrayBuffer();case"blob":return X.blob();case"document":return X.text().then((U)=>{return new DOMParser().parseFromString(U,H)});case"json":return X.json();default:if(H==="")return X.text();else{let N=/charset="?([^;"\s]*)"?/i.exec(H),E=N&&N[1]?N[1].toLowerCase():void 0,G=new TextDecoder(E);return X.arrayBuffer().then((F)=>G.decode(F))}}}).then((X)=>{k9.add(`file:${J}`,X);let U=h9[J];delete h9[J];for(let N=0,E=U.length;N<E;N++){let G=U[N];if(G.onLoad)G.onLoad(X)}}).catch((X)=>{let U=h9[J];if(U===void 0)throw this.manager.itemError(J),X;delete h9[J];for(let N=0,E=U.length;N<E;N++){let G=U[N];if(G.onError)G.onError(X)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var C6=new WeakMap;class xK extends u9{constructor(J){super(J)}load(J,Q,$,W){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=this,K=k9.get(`image:${J}`);if(K!==void 0){if(K.complete===!0)Z.manager.itemStart(J),setTimeout(function(){if(Q)Q(K);Z.manager.itemEnd(J)},0);else{let N=C6.get(K);if(N===void 0)N=[],C6.set(K,N);N.push({onLoad:Q,onError:W})}return K}let H=_6("img");function Y(){if(U(),Q)Q(this);let N=C6.get(this)||[];for(let E=0;E<N.length;E++){let G=N[E];if(G.onLoad)G.onLoad(this)}C6.delete(this),Z.manager.itemEnd(J)}function X(N){if(U(),W)W(N);k9.remove(`image:${J}`);let E=C6.get(this)||[];for(let G=0;G<E.length;G++){let F=E[G];if(F.onError)F.onError(N)}C6.delete(this),Z.manager.itemError(J),Z.manager.itemEnd(J)}function U(){H.removeEventListener("load",Y,!1),H.removeEventListener("error",X,!1)}if(H.addEventListener("load",Y,!1),H.addEventListener("error",X,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)H.crossOrigin=this.crossOrigin}return k9.add(`image:${J}`,H),Z.manager.itemStart(J),H.src=J,H}}class zW extends u9{constructor(J){super(J)}load(J,Q,$,W){let Z=new tJ,K=new xK(this.manager);return K.setCrossOrigin(this.crossOrigin),K.setPath(this.path),K.load(J,function(H){if(Z.image=H,Z.needsUpdate=!0,Q!==void 0)Q(Z)},$,W),Z}}class d6 extends zJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new y0(J),this.intensity=Q}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}class PW extends d6{constructor(J,Q,$){super(J,$);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zJ.DEFAULT_UP),this.updateMatrix(),this.groundColor=new y0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}toJSON(J){let Q=super.toJSON(J);return Q.object.groundColor=this.groundColor.getHex(),Q}}var MZ=new n0,zY=new T,PY=new T;class oQ{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new W0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new n0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pQ,this._frameExtents=new W0(1,1),this._viewportCount=1,this._viewports=[new wJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera;zY.setFromMatrixPosition(J.matrixWorld),Q.position.copy(zY),PY.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(PY),Q.updateMatrixWorld(),this._updateMatrix(Q,this.matrix,this._frustum)}_updateMatrix(J,Q,$,W){MZ.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),$.setFromProjectionMatrix(MZ,J.coordinateSystem,J.reversedDepth);let Z=this._frameExtents,K=W?W.z/Z.x:1,H=W?W.w/Z.y:1,Y=W?W.x/Z.x:0,X=W?W.y/Z.y:0;if(J.coordinateSystem===2001||J.reversedDepth)Q.set(0.5*K,0,0,0.5*K+Y,0,0.5*H,0,0.5*H+X,0,0,1,0,0,0,0,1);else Q.set(0.5*K,0,0,0.5*K+Y,0,0.5*H,0,0.5*H+X,0,0,0.5,0.5,0,0,0,1);Q.multiply(MZ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var d$=new T,c$=new qJ,B9=new T;class IW extends zJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new n0,this.projectionMatrix=new n0,this.projectionMatrixInverse=new n0,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(d$,c$,B9),B9.x===1&&B9.y===1&&B9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(d$,c$,B9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(d$,c$,B9),B9.x===1&&B9.y===1&&B9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(d$,c$,B9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var J7=new T,IY=new W0,AY=new W0;class K8 extends IW{constructor(J=50,Q=1,$=0.1,W=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=W,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=S7*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(LQ*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return S7*2*Math.atan(Math.tan(LQ*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){J7.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(J7.x,J7.y).multiplyScalar(-J/J7.z),J7.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(J7.x,J7.y).multiplyScalar(-J/J7.z)}getViewSize(J,Q){return this.getViewBounds(J,IY,AY),Q.subVectors(AY,IY)}setViewOffset(J,Q,$,W,Z,K){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=W,this.view.width=Z,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(LQ*0.5*this.fov)/this.zoom,$=2*Q,W=this.aspect*$,Z=-0.5*W,K=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:X}=K;Z+=K.offsetX*W/Y,Q-=K.offsetY*$/X,W*=K.width/Y,$*=K.height/X}let H=this.filmOffset;if(H!==0)Z+=J*H/this.getFilmWidth();this.projectionMatrix.makePerspective(Z,Z+W,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class hX extends oQ{constructor(){super(new K8(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=S7*2*J.angle*this.focus,W=this.mapSize.width/this.mapSize.height*this.aspect,Z=J.distance||Q.far;if($!==Q.fov||W!==Q.aspect||Z!==Q.far)Q.fov=$,Q.aspect=W,Q.far=Z,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this.aspect=J.aspect,this}toJSON(){let J=super.toJSON();return J.focus=this.focus,J.aspect=this.aspect,J}}class c6 extends d6{constructor(J,Q,$=0,W=Math.PI/3,Z=0,K=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zJ.DEFAULT_UP),this.updateMatrix(),this.target=new zJ,this.distance=$,this.angle=W,this.penumbra=Z,this.decay=K,this.map=null,this.shadow=new hX}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);if(Q.object.distance=this.distance,Q.object.angle=this.angle,Q.object.decay=this.decay,Q.object.penumbra=this.penumbra,Q.object.target=this.target.uuid,this.map&&this.map.isTexture)Q.object.map=this.map.toJSON(J).uuid;return Q.object.shadow=this.shadow.toJSON(),Q}}class bX extends oQ{constructor(){super(new K8(90,1,0.5,500));this.isPointLightShadow=!0}}class d9 extends d6{constructor(J,Q,$=0,W=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=W,this.shadow=new bX}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class c9 extends IW{constructor(J=-1,Q=1,$=1,W=-1,Z=0.1,K=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=W,this.near=Z,this.far=K,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,W,Z,K){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=W,this.view.width=Z,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,W=(this.top+this.bottom)/2,Z=$-J,K=$+J,H=W+Q,Y=W-Q;if(this.view!==null&&this.view.enabled){let X=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Z+=X*this.view.offsetX,K=Z+X*this.view.width,H-=U*this.view.offsetY,Y=H-U*this.view.height}this.projectionMatrix.makeOrthographic(Z,K,H,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class xX extends oQ{constructor(){super(new c9(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class n6 extends d6{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zJ.DEFAULT_UP),this.updateMatrix(),this.target=new zJ,this.shadow=new xX}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class B7{static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}var CZ=new WeakMap;class AW extends u9{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")g0("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")g0("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(J){return this.options=J,this}load(J,Q,$,W){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=this,K=k9.get(`image-bitmap:${J}`);if(K!==void 0){if(Z.manager.itemStart(J),K.then){K.then((X)=>{if(CZ.has(K)===!0){if(W)W(CZ.get(K));Z.manager.itemError(J),Z.manager.itemEnd(J)}else{if(Q)Q(X);Z.manager.itemEnd(J)}});return}setTimeout(function(){if(Q)Q(K);Z.manager.itemEnd(J)},0);return}let H={};H.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",H.headers=this.requestHeader,H.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let Y=fetch(J,H).then(function(X){return X.blob()}).then(function(X){return createImageBitmap(X,Object.assign({},Z.options,{colorSpaceConversion:"none"}))}).then(function(X){if(k9.add(`image-bitmap:${J}`,X),Q)Q(X);return Z.manager.itemEnd(J),X}).catch(function(X){if(W)W(X);CZ.set(Y,X),k9.remove(`image-bitmap:${J}`),Z.manager.itemError(J),Z.manager.itemEnd(J)});k9.add(`image-bitmap:${J}`,Y),Z.manager.itemStart(J)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var z6=-90,P6=1;class gK extends zJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let W=new K8(z6,P6,J,Q);W.layers=this.layers,this.add(W);let Z=new K8(z6,P6,J,Q);Z.layers=this.layers,this.add(Z);let K=new K8(z6,P6,J,Q);K.layers=this.layers,this.add(K);let H=new K8(z6,P6,J,Q);H.layers=this.layers,this.add(H);let Y=new K8(z6,P6,J,Q);Y.layers=this.layers,this.add(Y);let X=new K8(z6,P6,J,Q);X.layers=this.layers,this.add(X)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,W,Z,K,H,Y]=Q;for(let X of Q)this.remove(X);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),W.up.set(0,1,0),W.lookAt(-1,0,0),Z.up.set(0,0,-1),Z.lookAt(0,1,0),K.up.set(0,0,1),K.lookAt(0,-1,0),H.up.set(0,1,0),H.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),W.up.set(0,-1,0),W.lookAt(1,0,0),Z.up.set(0,0,1),Z.lookAt(0,1,0),K.up.set(0,0,-1),K.lookAt(0,-1,0),H.up.set(0,-1,0),H.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let X of Q)this.add(X),X.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:W}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[Z,K,H,Y,X,U]=this.children,N=J.getRenderTarget(),E=J.getActiveCubeFace(),G=J.getActiveMipmapLevel(),F=J.xr.enabled;J.xr.enabled=!1;let q=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let V=!1;if(J.isWebGLRenderer===!0)V=J.state.buffers.depth.getReversed();else V=J.reversedDepthBuffer;if(J.setRenderTarget($,0,W),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Z),J.setRenderTarget($,1,W),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,2,W),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),J.setRenderTarget($,3,W),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,W),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),$.texture.generateMipmaps=q,J.setRenderTarget($,5,W),V&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(N,E,G),J.xr.enabled=F,$.texture.needsPMREMUpdate=!0}}class pK extends K8{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}class _W{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(J){if(this._document=J,J.hidden!==void 0)this._pageVisibilityHandler=uG.bind(this),J.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(J){return this._timescale=J,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(J){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(J!==void 0?J:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function uG(){if(this._document.hidden===!1)this.reset()}class mK{constructor(J,Q,$){this.binding=J,this.valueSize=$;let W,Z,K;switch(Q){case"quaternion":W=this._slerp,Z=this._slerpAdditive,K=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array($*6),this._workIndex=5;break;case"string":case"bool":W=this._select,Z=this._select,K=this._setAdditiveIdentityOther,this.buffer=Array($*5);break;default:W=this._lerp,Z=this._lerpAdditive,K=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array($*5)}this._mixBufferRegion=W,this._mixBufferRegionAdditive=Z,this._setIdentity=K,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(J,Q){let $=this.buffer,W=this.valueSize,Z=J*W+W,K=this.cumulativeWeight;if(K===0){for(let H=0;H!==W;++H)$[Z+H]=$[H];K=Q}else{K+=Q;let H=Q/K;this._mixBufferRegion($,Z,0,H,W)}this.cumulativeWeight=K}accumulateAdditive(J){let Q=this.buffer,$=this.valueSize,W=$*this._addIndex;if(this.cumulativeWeightAdditive===0)this._setIdentity();this._mixBufferRegionAdditive(Q,W,0,J,$),this.cumulativeWeightAdditive+=J}apply(J){let Q=this.valueSize,$=this.buffer,W=J*Q+Q,Z=this.cumulativeWeight,K=this.cumulativeWeightAdditive,H=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,Z<1){let Y=Q*this._origIndex;this._mixBufferRegion($,W,Y,1-Z,Q)}if(K>0)this._mixBufferRegionAdditive($,W,this._addIndex*Q,1,Q);for(let Y=Q,X=Q+Q;Y!==X;++Y)if($[Y]!==$[Y+Q]){H.setValue($,W);break}}saveOriginalState(){let J=this.binding,Q=this.buffer,$=this.valueSize,W=$*this._origIndex;J.getValue(Q,W);for(let Z=$,K=W;Z!==K;++Z)Q[Z]=Q[W+Z%$];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let J=this.valueSize*3;this.binding.setValue(this.buffer,J)}_setAdditiveIdentityNumeric(){let J=this._addIndex*this.valueSize,Q=J+this.valueSize;for(let $=J;$<Q;$++)this.buffer[$]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let J=this._origIndex*this.valueSize,Q=this._addIndex*this.valueSize;for(let $=0;$<this.valueSize;$++)this.buffer[Q+$]=this.buffer[J+$]}_select(J,Q,$,W,Z){if(W>=0.5)for(let K=0;K!==Z;++K)J[Q+K]=J[$+K]}_slerp(J,Q,$,W){qJ.slerpFlat(J,Q,J,Q,J,$,W)}_slerpAdditive(J,Q,$,W,Z){let K=this._workIndex*Z;qJ.multiplyQuaternionsFlat(J,K,J,Q,J,$),qJ.slerpFlat(J,Q,J,Q,J,K,W)}_lerp(J,Q,$,W,Z){let K=1-W;for(let H=0;H!==Z;++H){let Y=Q+H;J[Y]=J[Y]*K+J[$+H]*W}}_lerpAdditive(J,Q,$,W,Z){for(let K=0;K!==Z;++K){let H=Q+K;J[H]=J[H]+J[$+K]*W}}}var lK="\\[\\]\\.:\\/",dG=new RegExp("["+lK+"]","g"),uK="[^"+lK+"]",cG="[^"+lK.replace("\\.","")+"]",nG=/((?:WC+[\/:])*)/.source.replace("WC",uK),sG=/(WCOD+)?/.source.replace("WCOD",cG),iG=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uK),oG=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uK),aG=new RegExp("^"+nG+sG+iG+oG+"$"),rG=["material","materials","bones","map"];class gX{constructor(J,Q,$){let W=$||MJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,W)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,W=this._bindings[$];if(W!==void 0)W.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let W=this._targetGroup.nCachedObjects_,Z=$.length;W!==Z;++W)$[W].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class MJ{constructor(J,Q,$){this.path=Q,this.parsedPath=$||MJ.parseTrackName(Q),this.node=MJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new MJ(J,Q,$);else return new MJ.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(dG,"")}static parseTrackName(J){let Q=aG.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},W=$.nodeName&&$.nodeName.lastIndexOf(".");if(W!==void 0&&W!==-1){let Z=$.nodeName.substring(W+1);if(rG.indexOf(Z)!==-1)$.nodeName=$.nodeName.substring(0,W),$.objectName=Z}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(Z){for(let K=0;K<Z.length;K++){let H=Z[K];if(H.name===Q||H.uuid===Q)return H;let Y=$(H.children);if(Y)return Y}return null},W=$(J.children);if(W)return W}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)J[Q++]=$[W]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,W=Q.propertyName,Z=Q.propertyIndex;if(!J)J=MJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){g0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let X=Q.objectIndex;switch($){case"materials":if(!J.material){o0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){o0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){o0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===X){X=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){o0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){o0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){o0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(X!==void 0){if(J[X]===void 0){o0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[X]}}let K=J[W];if(K===void 0){let X=Q.nodeName;o0("PropertyBinding: Trying to update property for track: "+X+"."+W+" but it wasn't found.",J);return}let H=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)H=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)H=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(Z!==void 0){if(W==="morphTargetInfluences"){if(!J.geometry){o0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){o0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[Z]!==void 0)Z=J.morphTargetDictionary[Z]}Y=this.BindingType.ArrayElement,this.resolvedProperty=K,this.propertyIndex=Z}else if(K.fromArray!==void 0&&K.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=K;else if(Array.isArray(K))Y=this.BindingType.EntireArray,this.resolvedProperty=K;else this.propertyName=W;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][H]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}MJ.Composite=gX;MJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};MJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};MJ.prototype.GetterByBindingType=[MJ.prototype._getValue_direct,MJ.prototype._getValue_array,MJ.prototype._getValue_arrayElement,MJ.prototype._getValue_toArray];MJ.prototype.SetterByBindingTypeAndVersioning=[[MJ.prototype._setValue_direct,MJ.prototype._setValue_direct_setNeedsUpdate,MJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[MJ.prototype._setValue_array,MJ.prototype._setValue_array_setNeedsUpdate,MJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[MJ.prototype._setValue_arrayElement,MJ.prototype._setValue_arrayElement_setNeedsUpdate,MJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[MJ.prototype._setValue_fromArray,MJ.prototype._setValue_fromArray_setNeedsUpdate,MJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class dK{constructor(J,Q,$=null,W=Q.blendMode){this._mixer=J,this._clip=Q,this._localRoot=$,this.blendMode=W;let Z=Q.tracks,K=Z.length,H=Array(K),Y={endingStart:2400,endingEnd:2400};for(let X=0;X!==K;++X){let U=Z[X].createInterpolant(null);H[X]=U,U.settings=Y}this._interpolantSettings=Y,this._interpolants=H,this._propertyBindings=Array(K),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(J){return this._startTime=J,this}setLoop(J,Q){return this.loop=J,this.repetitions=Q,this}setEffectiveWeight(J){return this.weight=J,this._effectiveWeight=this.enabled?J:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(J){return this._scheduleFading(J,0,1)}fadeOut(J){return this._scheduleFading(J,1,0)}crossFadeFrom(J,Q,$=!1){if(J.fadeOut(Q),this.fadeIn(Q),$===!0){let W=this._clip.duration,Z=J._clip.duration,K=Z/W,H=W/Z;J._restoreTimeScale=J.timeScale,this._restoreTimeScale=this.timeScale,J.warp(1,K,Q),this.warp(H,1,Q)}return this}crossFadeTo(J,Q,$=!1){return J.crossFadeFrom(this,Q,$)}stopFading(){let J=this._weightInterpolant;if(J!==null)this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this}setEffectiveTimeScale(J){return this.timeScale=J,this._effectiveTimeScale=this.paused?0:J,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(J){return this.timeScale=this._clip.duration/J,this.stopWarping()}syncWith(J){return this.time=J.time,this.timeScale=J.timeScale,this.stopWarping()}halt(J){return this.warp(this._effectiveTimeScale,0,J)}warp(J,Q,$){let W=this._mixer,Z=W.time,K=this.timeScale,H=this._timeScaleInterpolant;if(H===null)H=W._lendControlInterpolant(),this._timeScaleInterpolant=H;let{parameterPositions:Y,sampleValues:X}=H;return Y[0]=Z,Y[1]=Z+$,X[0]=J/K,X[1]=Q/K,this}stopWarping(){let J=this._timeScaleInterpolant;if(J!==null)this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(J,Q,$,W){if(!this.enabled){this._updateWeight(J);return}let Z=this._startTime;if(Z!==null){let Y=(J-Z)*$;if(Y<0||$===0)Q=0;else this._startTime=null,Q=$*Y}Q*=this._updateTimeScale(J);let K=this._updateTime(Q),H=this._updateWeight(J);if(H>0){let Y=this._interpolants,X=this._propertyBindings;switch(this.blendMode){case 2501:for(let U=0,N=Y.length;U!==N;++U)Y[U].evaluate(K),X[U].accumulateAdditive(H);break;case 2500:default:for(let U=0,N=Y.length;U!==N;++U)Y[U].evaluate(K),X[U].accumulate(W,H)}}}_updateWeight(J){let Q=0;if(this.enabled){Q=this.weight;let $=this._weightInterpolant;if($!==null){let W=$.evaluate(J)[0];if(Q*=W,J>$.parameterPositions[1]){if(this.stopFading(),W===0)this.enabled=!1}}}return this._effectiveWeight=Q,Q}_updateTimeScale(J){let Q=0;if(!this.paused){Q=this.timeScale;let $=this._timeScaleInterpolant;if($!==null){let W=$.evaluate(J)[0];if(Q*=W,J>$.parameterPositions[1]){if(Q===0)this.paused=!0;else{if(this._restoreTimeScale!==null)Q=this._restoreTimeScale;this.timeScale=Q}this.stopWarping()}}}return this._effectiveTimeScale=Q,Q}_updateTime(J){let Q=this._clip.duration,$=this.loop,W=this.time+J,Z=this._loopCount,K=$===2202;if(J===0){if(Z===-1)return W;return K&&(Z&1)===1?Q-W:W}if($===2200){if(Z===-1)this._loopCount=0,this._setEndings(!0,!0,!1);J:{if(W>=Q)W=Q;else if(W<0)W=0;else{this.time=W;break J}if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;this.time=W,this._mixer.dispatchEvent({type:"finished",action:this,direction:J<0?-1:1})}}else{if(Z===-1)if(J>=0)Z=0,this._setEndings(!0,this.repetitions===0,K);else this._setEndings(this.repetitions===0,!0,K);if(W>=Q||W<0){let H=Math.floor(W/Q);W-=Q*H,Z+=Math.abs(H);let Y=this.repetitions-Z;if(Y<=0){if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;W=J>0?Q:0,this.time=W,this._mixer.dispatchEvent({type:"finished",action:this,direction:J>0?1:-1})}else{if(Y===1){let X=J<0;this._setEndings(X,!X,K)}else this._setEndings(!1,!1,K);this._loopCount=Z,this.time=W,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:H})}}else this._loopCount=Z,this.time=W;if(K&&(Z&1)===1)return Q-W}return W}_setEndings(J,Q,$){let W=this._interpolantSettings;if($)W.endingStart=2401,W.endingEnd=2401;else{if(J)W.endingStart=this.zeroSlopeAtStart?2401:2400;else W.endingStart=2402;if(Q)W.endingEnd=this.zeroSlopeAtEnd?2401:2400;else W.endingEnd=2402}}_scheduleFading(J,Q,$){let W=this._mixer,Z=W.time,K=this._weightInterpolant;if(K===null)K=W._lendControlInterpolant(),this._weightInterpolant=K;let{parameterPositions:H,sampleValues:Y}=K;return H[0]=Z,Y[0]=Q,H[1]=Z+J,Y[1]=$,this}}var tG=new Float32Array(1);class aQ extends N9{constructor(J){super();if(this._root=J,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(J,Q){let $=J._localRoot||this._root,W=J._clip.tracks,Z=W.length,K=J._propertyBindings,H=J._interpolants,Y=$.uuid,X=this._bindingsByRootAndName,U=X[Y];if(U===void 0)U={},X[Y]=U;for(let N=0;N!==Z;++N){let E=W[N],G=E.name,F=U[G];if(F!==void 0)++F.referenceCount,K[N]=F;else{if(F=K[N],F!==void 0){if(F._cacheIndex===null)++F.referenceCount,this._addInactiveBinding(F,Y,G);continue}let q=Q&&Q._propertyBindings[N].binding.parsedPath;F=new mK(MJ.create($,G,q),E.ValueTypeName,E.getValueSize()),++F.referenceCount,this._addInactiveBinding(F,Y,G),K[N]=F}H[N].resultBuffer=F.buffer}}_activateAction(J){if(!this._isActiveAction(J)){if(J._cacheIndex===null){let $=(J._localRoot||this._root).uuid,W=J._clip.uuid,Z=this._actionsByClip[W];this._bindAction(J,Z&&Z.knownActions[0]),this._addInactiveAction(J,W,$)}let Q=J._propertyBindings;for(let $=0,W=Q.length;$!==W;++$){let Z=Q[$];if(Z.useCount++===0)this._lendBinding(Z),Z.saveOriginalState()}this._lendAction(J)}}_deactivateAction(J){if(this._isActiveAction(J)){let Q=J._propertyBindings;for(let $=0,W=Q.length;$!==W;++$){let Z=Q[$];if(--Z.useCount===0)Z.restoreOriginalState(),this._takeBackBinding(Z)}this._takeBackAction(J)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let J=this;this.stats={actions:{get total(){return J._actions.length},get inUse(){return J._nActiveActions}},bindings:{get total(){return J._bindings.length},get inUse(){return J._nActiveBindings}},controlInterpolants:{get total(){return J._controlInterpolants.length},get inUse(){return J._nActiveControlInterpolants}}}}_isActiveAction(J){let Q=J._cacheIndex;return Q!==null&&Q<this._nActiveActions}_addInactiveAction(J,Q,$){let W=this._actions,Z=this._actionsByClip,K=Z[Q];if(K===void 0)K={knownActions:[J],actionByRoot:{}},J._byClipCacheIndex=0,Z[Q]=K;else{let H=K.knownActions;J._byClipCacheIndex=H.length,H.push(J)}J._cacheIndex=W.length,W.push(J),K.actionByRoot[$]=J}_removeInactiveAction(J){let Q=this._actions,$=Q[Q.length-1],W=J._cacheIndex;$._cacheIndex=W,Q[W]=$,Q.pop(),J._cacheIndex=null;let Z=J._clip.uuid,K=this._actionsByClip,H=K[Z],Y=H.knownActions,X=Y[Y.length-1],U=J._byClipCacheIndex;X._byClipCacheIndex=U,Y[U]=X,Y.pop(),J._byClipCacheIndex=null;let N=H.actionByRoot,E=(J._localRoot||this._root).uuid;if(delete N[E],Y.length===0)delete K[Z];this._removeInactiveBindingsForAction(J)}_removeInactiveBindingsForAction(J){let Q=J._propertyBindings;for(let $=0,W=Q.length;$!==W;++$){let Z=Q[$];if(--Z.referenceCount===0)this._removeInactiveBinding(Z)}}_lendAction(J){let Q=this._actions,$=J._cacheIndex,W=this._nActiveActions++,Z=Q[W];J._cacheIndex=W,Q[W]=J,Z._cacheIndex=$,Q[$]=Z}_takeBackAction(J){let Q=this._actions,$=J._cacheIndex,W=--this._nActiveActions,Z=Q[W];J._cacheIndex=W,Q[W]=J,Z._cacheIndex=$,Q[$]=Z}_addInactiveBinding(J,Q,$){let W=this._bindingsByRootAndName,Z=this._bindings,K=W[Q];if(K===void 0)K={},W[Q]=K;K[$]=J,J._cacheIndex=Z.length,Z.push(J)}_removeInactiveBinding(J){let Q=this._bindings,$=J.binding,W=$.rootNode.uuid,Z=$.path,K=this._bindingsByRootAndName,H=K[W],Y=Q[Q.length-1],X=J._cacheIndex;if(Y._cacheIndex=X,Q[X]=Y,Q.pop(),delete H[Z],Object.keys(H).length===0)delete K[W]}_lendBinding(J){let Q=this._bindings,$=J._cacheIndex,W=this._nActiveBindings++,Z=Q[W];J._cacheIndex=W,Q[W]=J,Z._cacheIndex=$,Q[$]=Z}_takeBackBinding(J){let Q=this._bindings,$=J._cacheIndex,W=--this._nActiveBindings,Z=Q[W];J._cacheIndex=W,Q[W]=J,Z._cacheIndex=$,Q[$]=Z}_lendControlInterpolant(){let J=this._controlInterpolants,Q=this._nActiveControlInterpolants++,$=J[Q];if($===void 0)$=new MW(new Float32Array(2),new Float32Array(2),1,tG),$.__cacheIndex=Q,J[Q]=$;return $}_takeBackControlInterpolant(J){let Q=this._controlInterpolants,$=J.__cacheIndex,W=--this._nActiveControlInterpolants,Z=Q[W];J.__cacheIndex=W,Q[W]=J,Z.__cacheIndex=$,Q[$]=Z}clipAction(J,Q,$){let W=Q||this._root,Z=W.uuid,K=typeof J==="string"?S6.findByName(W,J):J,H=K!==null?K.uuid:J,Y=this._actionsByClip[H],X=null;if($===void 0)if(K!==null)$=K.blendMode;else $=2500;if(Y!==void 0){let N=Y.actionByRoot[Z];if(N!==void 0&&N.blendMode===$)return N;if(X=Y.knownActions[0],K===null)K=X._clip}if(K===null)return null;let U=new dK(this,K,Q,$);return this._bindAction(U,X),this._addInactiveAction(U,H,Z),U}existingAction(J,Q){let $=Q||this._root,W=$.uuid,Z=typeof J==="string"?S6.findByName($,J):J,K=Z?Z.uuid:J,H=this._actionsByClip[K];if(H!==void 0)return H.actionByRoot[W]||null;return null}stopAllAction(){let J=this._actions,Q=this._nActiveActions;for(let $=Q-1;$>=0;--$)J[$].stop();return this}update(J){J*=this.timeScale;let Q=this._actions,$=this._nActiveActions,W=this.time+=J,Z=Math.sign(J),K=this._accuIndex^=1;for(let X=0;X!==$;++X)Q[X]._update(W,J,Z,K);let H=this._bindings,Y=this._nActiveBindings;for(let X=0;X!==Y;++X)H[X].apply(K);return this}setTime(J){this.time=0;for(let Q=0;Q<this._actions.length;Q++)this._actions[Q].time=0;return this.update(J)}getRoot(){return this._root}uncacheClip(J){let Q=this._actions,$=J.uuid,W=this._actionsByClip,Z=W[$];if(Z!==void 0){let K=Z.knownActions;for(let H=0,Y=K.length;H!==Y;++H){let X=K[H];this._deactivateAction(X);let U=X._cacheIndex,N=Q[Q.length-1];X._cacheIndex=null,X._byClipCacheIndex=null,N._cacheIndex=U,Q[U]=N,Q.pop(),this._removeInactiveBindingsForAction(X)}delete W[$]}}uncacheRoot(J){let Q=J.uuid,$=this._actionsByClip;for(let K in $){let H=$[K].actionByRoot,Y=H[Q];if(Y!==void 0)this._deactivateAction(Y),this._removeInactiveAction(Y)}let W=this._bindingsByRootAndName,Z=W[Q];if(Z!==void 0)for(let K in Z){let H=Z[K];H.restoreOriginalState(),this._removeInactiveBinding(H)}}uncacheAction(J,Q){let $=this.existingAction(J,Q);if($!==null)this._deactivateAction($),this._removeInactiveAction($)}}class TW{constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,g0("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let Q=performance.now();J=(Q-this.oldTime)/1000,this.oldTime=Q,this.elapsedTime+=J}return J}}class rQ{constructor(J=1,Q=0,$=0){this.radius=J,this.phi=Q,this.theta=$}set(J,Q,$){return this.radius=J,this.phi=Q,this.theta=$,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=WJ(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){if(this.radius=Math.sqrt(J*J+Q*Q+$*$),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,$),this.phi=Math.acos(WJ(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class cK{static{cK.prototype.isMatrix2=!0}constructor(J,Q,$,W){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,W)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,W){let Z=this.elements;return Z[0]=J,Z[2]=Q,Z[1]=$,Z[3]=W,this}}class wW extends N9{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function nK(J,Q,$,W){let Z=eG(W);switch($){case 1021:return J*Q;case 1028:return J*Q/Z.components*Z.byteLength;case 1029:return J*Q/Z.components*Z.byteLength;case 1030:return J*Q*2/Z.components*Z.byteLength;case 1031:return J*Q*2/Z.components*Z.byteLength;case 1022:return J*Q*3/Z.components*Z.byteLength;case 1023:return J*Q*4/Z.components*Z.byteLength;case 1033:return J*Q*4/Z.components*Z.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function eG(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)g0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function YU(){let J=null,Q=!1,$=null,W=null;function Z(K,H){W=J.requestAnimationFrame(Z),$(K,H)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;W=J.requestAnimationFrame(Z),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(W);Q=!1},setAnimationLoop:function(K){$=K},setContext:function(K){J=K}}}function JN(J){let Q=new WeakMap;function $(Y,X){let{array:U,usage:N}=Y,E=U.byteLength,G=J.createBuffer();J.bindBuffer(X,G),J.bufferData(X,U,N),Y.onUploadCallback();let F;if(U instanceof Float32Array)F=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)F=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)F=J.HALF_FLOAT;else F=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)F=J.SHORT;else if(U instanceof Uint32Array)F=J.UNSIGNED_INT;else if(U instanceof Int32Array)F=J.INT;else if(U instanceof Int8Array)F=J.BYTE;else if(U instanceof Uint8Array)F=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)F=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:G,type:F,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:E}}function W(Y,X,U){let{array:N,updateRanges:E}=X;if(J.bindBuffer(U,Y),E.length===0)J.bufferSubData(U,0,N);else{E.sort((F,q)=>F.start-q.start);let G=0;for(let F=1;F<E.length;F++){let q=E[G],V=E[F];if(V.start<=q.start+q.count+1)q.count=Math.max(q.count,V.start+V.count-q.start);else++G,E[G]=V}E.length=G+1;for(let F=0,q=E.length;F<q;F++){let V=E[F];J.bufferSubData(U,V.start*N.BYTES_PER_ELEMENT,N,V.start,V.count)}X.clearUpdateRanges()}X.onUploadCallback()}function Z(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let X=Q.get(Y);if(X)J.deleteBuffer(X.buffer),Q.delete(Y)}function H(Y,X){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let N=Q.get(Y);if(!N||N.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,$(Y,X));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");W(U.buffer,Y,X),U.version=Y.version}}return{get:Z,remove:K,update:H}}var QN=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$N=`#ifdef USE_ALPHAHASH
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
#endif`,WN=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZN=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KN=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HN=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YN=`#ifdef USE_AOMAP
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
#endif`,XN=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UN=`#ifdef USE_BATCHING
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
#endif`,GN=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,NN=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,EN=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FN=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qN=`#ifdef USE_IRIDESCENCE
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
#endif`,ON=`#ifdef USE_BUMPMAP
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
#endif`,RN=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,LN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DN=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,MN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,CN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,zN=`#define PI 3.141592653589793
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
} // validated`,PN=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,IN=`vec3 transformedNormal = objectNormal;
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
#endif`,AN=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_N=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TN=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wN=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SN="gl_FragColor = linearToOutputTexel( gl_FragColor );",jN=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yN=`#ifdef USE_ENVMAP
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
#endif`,vN=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fN=`#ifdef USE_ENVMAP
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
#endif`,hN=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bN=`#ifdef USE_ENVMAP
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
#endif`,xN=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gN=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pN=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mN=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lN=`#ifdef USE_GRADIENTMAP
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
}`,uN=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dN=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cN=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nN=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,sN=`#ifdef USE_ENVMAP
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
#endif`,iN=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oN=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aN=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rN=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tN=`PhysicalMaterial material;
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
#endif`,eN=`uniform sampler2D dfgLUT;
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
}`,J1=`
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
#endif`,Q1=`#if defined( RE_IndirectDiffuse )
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
#endif`,$1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Z1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,N1=`#if defined( USE_POINTS_UV )
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
#endif`,E1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L1=`#ifdef USE_MORPHTARGETS
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
#endif`,V1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,B1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,k1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,z1=`#ifdef USE_NORMALMAP
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
#endif`,P1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,S1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,f1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,x1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,p1=`float getShadowMask() {
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
}`,m1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l1=`#ifdef USE_SKINNING
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
#endif`,u1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d1=`#ifdef USE_SKINNING
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
#endif`,c1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,o1=`#ifdef USE_TRANSMISSION
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
#endif`,a1=`#ifdef USE_TRANSMISSION
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
#endif`,r1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,QE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$E=`uniform sampler2D t2D;
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
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,KE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YE=`#include <common>
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
}`,XE=`#if DEPTH_PACKING == 3200
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
}`,UE=`#define DISTANCE
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
}`,GE=`#define DISTANCE
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
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FE=`uniform float scale;
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
}`,qE=`uniform vec3 diffuse;
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
}`,OE=`#include <common>
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
}`,RE=`uniform vec3 diffuse;
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
}`,LE=`#define LAMBERT
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
}`,VE=`#define LAMBERT
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
}`,DE=`#define MATCAP
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
}`,BE=`#define MATCAP
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
}`,kE=`#define NORMAL
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
}`,ME=`#define NORMAL
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
}`,CE=`#define PHONG
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
}`,zE=`#define PHONG
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
}`,PE=`#define STANDARD
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
}`,IE=`#define STANDARD
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
}`,AE=`#define TOON
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
}`,_E=`#define TOON
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
}`,TE=`uniform float size;
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
}`,wE=`uniform vec3 diffuse;
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
}`,SE=`#include <common>
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
}`,jE=`uniform vec3 color;
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
}`,yE=`uniform float rotation;
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
}`,vE=`uniform vec3 diffuse;
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
}`,YJ={alphahash_fragment:QN,alphahash_pars_fragment:$N,alphamap_fragment:WN,alphamap_pars_fragment:ZN,alphatest_fragment:KN,alphatest_pars_fragment:HN,aomap_fragment:YN,aomap_pars_fragment:XN,batching_pars_vertex:UN,batching_vertex:GN,begin_vertex:NN,beginnormal_vertex:EN,bsdfs:FN,iridescence_fragment:qN,bumpmap_pars_fragment:ON,clipping_planes_fragment:RN,clipping_planes_pars_fragment:LN,clipping_planes_pars_vertex:VN,clipping_planes_vertex:DN,color_fragment:BN,color_pars_fragment:kN,color_pars_vertex:MN,color_vertex:CN,common:zN,cube_uv_reflection_fragment:PN,defaultnormal_vertex:IN,displacementmap_pars_vertex:AN,displacementmap_vertex:_N,emissivemap_fragment:TN,emissivemap_pars_fragment:wN,colorspace_fragment:SN,colorspace_pars_fragment:jN,envmap_fragment:yN,envmap_common_pars_fragment:vN,envmap_pars_fragment:fN,envmap_pars_vertex:hN,envmap_physical_pars_fragment:sN,envmap_vertex:bN,fog_vertex:xN,fog_pars_vertex:gN,fog_fragment:pN,fog_pars_fragment:mN,gradientmap_pars_fragment:lN,lightmap_pars_fragment:uN,lights_lambert_fragment:dN,lights_lambert_pars_fragment:cN,lights_pars_begin:nN,lights_toon_fragment:iN,lights_toon_pars_fragment:oN,lights_phong_fragment:aN,lights_phong_pars_fragment:rN,lights_physical_fragment:tN,lights_physical_pars_fragment:eN,lights_fragment_begin:J1,lights_fragment_maps:Q1,lights_fragment_end:$1,lightprobes_pars_fragment:W1,logdepthbuf_fragment:Z1,logdepthbuf_pars_fragment:K1,logdepthbuf_pars_vertex:H1,logdepthbuf_vertex:Y1,map_fragment:X1,map_pars_fragment:U1,map_particle_fragment:G1,map_particle_pars_fragment:N1,metalnessmap_fragment:E1,metalnessmap_pars_fragment:F1,morphinstance_vertex:q1,morphcolor_vertex:O1,morphnormal_vertex:R1,morphtarget_pars_vertex:L1,morphtarget_vertex:V1,normal_fragment_begin:D1,normal_fragment_maps:B1,normal_pars_fragment:k1,normal_pars_vertex:M1,normal_vertex:C1,normalmap_pars_fragment:z1,clearcoat_normal_fragment_begin:P1,clearcoat_normal_fragment_maps:I1,clearcoat_pars_fragment:A1,iridescence_pars_fragment:_1,opaque_fragment:T1,packing:w1,premultiplied_alpha_fragment:S1,project_vertex:j1,dithering_fragment:y1,dithering_pars_fragment:v1,roughnessmap_fragment:f1,roughnessmap_pars_fragment:h1,shadowmap_pars_fragment:b1,shadowmap_pars_vertex:x1,shadowmap_vertex:g1,shadowmask_pars_fragment:p1,skinbase_vertex:m1,skinning_pars_vertex:l1,skinning_vertex:u1,skinnormal_vertex:d1,specularmap_fragment:c1,specularmap_pars_fragment:n1,tonemapping_fragment:s1,tonemapping_pars_fragment:i1,transmission_fragment:o1,transmission_pars_fragment:a1,uv_pars_fragment:r1,uv_pars_vertex:t1,uv_vertex:e1,worldpos_vertex:JE,background_vert:QE,background_frag:$E,backgroundCube_vert:WE,backgroundCube_frag:ZE,cube_vert:KE,cube_frag:HE,depth_vert:YE,depth_frag:XE,distance_vert:UE,distance_frag:GE,equirect_vert:NE,equirect_frag:EE,linedashed_vert:FE,linedashed_frag:qE,meshbasic_vert:OE,meshbasic_frag:RE,meshlambert_vert:LE,meshlambert_frag:VE,meshmatcap_vert:DE,meshmatcap_frag:BE,meshnormal_vert:kE,meshnormal_frag:ME,meshphong_vert:CE,meshphong_frag:zE,meshphysical_vert:PE,meshphysical_frag:IE,meshtoon_vert:AE,meshtoon_frag:_E,points_vert:TE,points_frag:wE,shadow_vert:SE,shadow_frag:jE,sprite_vert:yE,sprite_frag:vE},P0={common:{diffuse:{value:new y0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new t0},alphaMap:{value:null},alphaMapTransform:{value:new t0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new t0}},envmap:{envMap:{value:null},envMapRotation:{value:new t0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new t0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new t0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new t0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new t0},normalScale:{value:new W0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new t0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new t0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new t0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new t0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new y0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new T},probesMax:{value:new T},probesResolution:{value:new T}},points:{diffuse:{value:new y0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new t0},alphaTest:{value:0},uvTransform:{value:new t0}},sprite:{diffuse:{value:new y0(16777215)},opacity:{value:1},center:{value:new W0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new t0},alphaMap:{value:null},alphaMapTransform:{value:new t0},alphaTest:{value:0}}},I9={basic:{uniforms:k8([P0.common,P0.specularmap,P0.envmap,P0.aomap,P0.lightmap,P0.fog]),vertexShader:YJ.meshbasic_vert,fragmentShader:YJ.meshbasic_frag},lambert:{uniforms:k8([P0.common,P0.specularmap,P0.envmap,P0.aomap,P0.lightmap,P0.emissivemap,P0.bumpmap,P0.normalmap,P0.displacementmap,P0.fog,P0.lights,{emissive:{value:new y0(0)},envMapIntensity:{value:1}}]),vertexShader:YJ.meshlambert_vert,fragmentShader:YJ.meshlambert_frag},phong:{uniforms:k8([P0.common,P0.specularmap,P0.envmap,P0.aomap,P0.lightmap,P0.emissivemap,P0.bumpmap,P0.normalmap,P0.displacementmap,P0.fog,P0.lights,{emissive:{value:new y0(0)},specular:{value:new y0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:YJ.meshphong_vert,fragmentShader:YJ.meshphong_frag},standard:{uniforms:k8([P0.common,P0.envmap,P0.aomap,P0.lightmap,P0.emissivemap,P0.bumpmap,P0.normalmap,P0.displacementmap,P0.roughnessmap,P0.metalnessmap,P0.fog,P0.lights,{emissive:{value:new y0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:YJ.meshphysical_vert,fragmentShader:YJ.meshphysical_frag},toon:{uniforms:k8([P0.common,P0.aomap,P0.lightmap,P0.emissivemap,P0.bumpmap,P0.normalmap,P0.displacementmap,P0.gradientmap,P0.fog,P0.lights,{emissive:{value:new y0(0)}}]),vertexShader:YJ.meshtoon_vert,fragmentShader:YJ.meshtoon_frag},matcap:{uniforms:k8([P0.common,P0.bumpmap,P0.normalmap,P0.displacementmap,P0.fog,{matcap:{value:null}}]),vertexShader:YJ.meshmatcap_vert,fragmentShader:YJ.meshmatcap_frag},points:{uniforms:k8([P0.points,P0.fog]),vertexShader:YJ.points_vert,fragmentShader:YJ.points_frag},dashed:{uniforms:k8([P0.common,P0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:YJ.linedashed_vert,fragmentShader:YJ.linedashed_frag},depth:{uniforms:k8([P0.common,P0.displacementmap]),vertexShader:YJ.depth_vert,fragmentShader:YJ.depth_frag},normal:{uniforms:k8([P0.common,P0.bumpmap,P0.normalmap,P0.displacementmap,{opacity:{value:1}}]),vertexShader:YJ.meshnormal_vert,fragmentShader:YJ.meshnormal_frag},sprite:{uniforms:k8([P0.sprite,P0.fog]),vertexShader:YJ.sprite_vert,fragmentShader:YJ.sprite_frag},background:{uniforms:{uvTransform:{value:new t0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:YJ.background_vert,fragmentShader:YJ.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new t0}},vertexShader:YJ.backgroundCube_vert,fragmentShader:YJ.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:YJ.cube_vert,fragmentShader:YJ.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:YJ.equirect_vert,fragmentShader:YJ.equirect_frag},distance:{uniforms:k8([P0.common,P0.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:YJ.distance_vert,fragmentShader:YJ.distance_frag},shadow:{uniforms:k8([P0.lights,P0.fog,{color:{value:new y0(0)},opacity:{value:1}}]),vertexShader:YJ.shadow_vert,fragmentShader:YJ.shadow_frag}};I9.physical={uniforms:k8([I9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new t0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new t0},clearcoatNormalScale:{value:new W0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new t0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new t0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new t0},sheen:{value:0},sheenColor:{value:new y0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new t0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new t0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new t0},transmissionSamplerSize:{value:new W0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new t0},attenuationDistance:{value:0},attenuationColor:{value:new y0(0)},specularColor:{value:new y0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new t0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new t0},anisotropyVector:{value:new W0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new t0}}]),vertexShader:YJ.meshphysical_vert,fragmentShader:YJ.meshphysical_frag};var SW={r:0,b:0,g:0},fE=new n0,XU=new t0;XU.set(-1,0,0,0,1,0,0,0,1);function hE(J,Q,$,W,Z,K){let H=new y0(0),Y=Z===!0?0:1,X,U,N=null,E=0,G=null;function F(z){let D=z.isScene===!0?z.background:null;if(D&&D.isTexture){let L=z.backgroundBlurriness>0;D=Q.get(D,L)}return D}function q(z){let D=!1,L=F(z);if(L===null)R(H,Y);else if(L&&L.isColor)R(L,1),D=!0;let M=J.xr.getEnvironmentBlendMode();if(M==="additive")$.buffers.color.setClear(0,0,0,1,K);else if(M==="alpha-blend")$.buffers.color.setClear(0,0,0,0,K);if(J.autoClear||D)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function V(z,D){let L=F(D);if(L&&(L.isCubeTexture||L.mapping===jQ)){if(U===void 0)U=new z0(new gJ(1,1,1),new nJ({name:"BackgroundCubeMaterial",uniforms:c7(I9.backgroundCube.uniforms),vertexShader:I9.backgroundCube.vertexShader,fragmentShader:I9.backgroundCube.fragmentShader,side:L8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(M,I,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(U);if(U.material.uniforms.envMap.value=L,U.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(fE.makeRotationFromEuler(D.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(XU);if(U.material.toneMapped=ZJ.getTransfer(L.colorSpace)!==SJ,N!==L||E!==L.version||G!==J.toneMapping)U.material.needsUpdate=!0,N=L,E=L.version,G=J.toneMapping;U.layers.enableAll(),z.unshift(U,U.geometry,U.material,0,0,null)}else if(L&&L.isTexture){if(X===void 0)X=new z0(new H8(2,2),new nJ({name:"BackgroundMaterial",uniforms:c7(I9.background.uniforms),vertexShader:I9.background.vertexShader,fragmentShader:I9.background.fragmentShader,side:H7,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),X.geometry.deleteAttribute("normal"),Object.defineProperty(X.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(X);if(X.material.uniforms.t2D.value=L,X.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,X.material.toneMapped=ZJ.getTransfer(L.colorSpace)!==SJ,L.matrixAutoUpdate===!0)L.updateMatrix();if(X.material.uniforms.uvTransform.value.copy(L.matrix),N!==L||E!==L.version||G!==J.toneMapping)X.material.needsUpdate=!0,N=L,E=L.version,G=J.toneMapping;X.layers.enableAll(),z.unshift(X,X.geometry,X.material,0,0,null)}}function R(z,D){z.getRGB(SW,wK(J)),$.buffers.color.setClear(SW.r,SW.g,SW.b,D,K)}function O(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(X!==void 0)X.geometry.dispose(),X.material.dispose(),X=void 0}return{getClearColor:function(){return H},setClearColor:function(z,D=1){H.set(z),Y=D,R(H,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(z){Y=z,R(H,Y)},render:q,addToRenderList:V,dispose:O}}function bE(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),W={},Z=G(null),K=Z,H=!1;function Y(y,b,J0,S,i){let c=!1,x=E(y,S,J0,b);if(K!==x)K=x,U(K.object);if(c=F(y,S,J0,i),c)q(y,S,J0,i);if(i!==null)Q.update(i,J.ELEMENT_ARRAY_BUFFER);if(c||H){if(H=!1,L(y,b,J0,S),i!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(i).buffer)}}function X(){return J.createVertexArray()}function U(y){return J.bindVertexArray(y)}function N(y){return J.deleteVertexArray(y)}function E(y,b,J0,S){let i=S.wireframe===!0,c=W[b.id];if(c===void 0)c={},W[b.id]=c;let x=y.isInstancedMesh===!0?y.id:0,K0=c[x];if(K0===void 0)K0={},c[x]=K0;let n=K0[J0.id];if(n===void 0)n={},K0[J0.id]=n;let $0=n[i];if($0===void 0)$0=G(X()),n[i]=$0;return $0}function G(y){let b=[],J0=[],S=[];for(let i=0;i<$;i++)b[i]=0,J0[i]=0,S[i]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:J0,attributeDivisors:S,object:y,attributes:{},index:null}}function F(y,b,J0,S){let i=K.attributes,c=b.attributes,x=0,K0=J0.getAttributes();for(let n in K0)if(K0[n].location>=0){let U0=i[n],u0=c[n];if(u0===void 0){if(n==="instanceMatrix"&&y.instanceMatrix)u0=y.instanceMatrix;if(n==="instanceColor"&&y.instanceColor)u0=y.instanceColor}if(U0===void 0)return!0;if(U0.attribute!==u0)return!0;if(u0&&U0.data!==u0.data)return!0;x++}if(K.attributesNum!==x)return!0;if(K.index!==S)return!0;return!1}function q(y,b,J0,S){let i={},c=b.attributes,x=0,K0=J0.getAttributes();for(let n in K0)if(K0[n].location>=0){let U0=c[n];if(U0===void 0){if(n==="instanceMatrix"&&y.instanceMatrix)U0=y.instanceMatrix;if(n==="instanceColor"&&y.instanceColor)U0=y.instanceColor}let u0={};if(u0.attribute=U0,U0&&U0.data)u0.data=U0.data;i[n]=u0,x++}K.attributes=i,K.attributesNum=x,K.index=S}function V(){let y=K.newAttributes;for(let b=0,J0=y.length;b<J0;b++)y[b]=0}function R(y){O(y,0)}function O(y,b){let{newAttributes:J0,enabledAttributes:S,attributeDivisors:i}=K;if(J0[y]=1,S[y]===0)J.enableVertexAttribArray(y),S[y]=1;if(i[y]!==b)J.vertexAttribDivisor(y,b),i[y]=b}function z(){let{newAttributes:y,enabledAttributes:b}=K;for(let J0=0,S=b.length;J0<S;J0++)if(b[J0]!==y[J0])J.disableVertexAttribArray(J0),b[J0]=0}function D(y,b,J0,S,i,c,x){if(x===!0)J.vertexAttribIPointer(y,b,J0,i,c);else J.vertexAttribPointer(y,b,J0,S,i,c)}function L(y,b,J0,S){V();let i=S.attributes,c=J0.getAttributes(),x=b.defaultAttributeValues;for(let K0 in c){let n=c[K0];if(n.location>=0){let $0=i[K0];if($0===void 0){if(K0==="instanceMatrix"&&y.instanceMatrix)$0=y.instanceMatrix;if(K0==="instanceColor"&&y.instanceColor)$0=y.instanceColor}if($0!==void 0){let{normalized:U0,itemSize:u0}=$0,I0=Q.get($0);if(I0===void 0)continue;let{buffer:i0,type:s0,bytesPerElement:o}=I0,E0=s0===J.INT||s0===J.UNSIGNED_INT||$0.gpuType===jZ;if($0.isInterleavedBufferAttribute){let q0=$0.data,l0=q0.stride,c0=$0.offset;if(q0.isInstancedInterleavedBuffer){for(let p0=0;p0<n.locationSize;p0++)O(n.location+p0,q0.meshPerAttribute);if(y.isInstancedMesh!==!0&&S._maxInstanceCount===void 0)S._maxInstanceCount=q0.meshPerAttribute*q0.count}else for(let p0=0;p0<n.locationSize;p0++)R(n.location+p0);J.bindBuffer(J.ARRAY_BUFFER,i0);for(let p0=0;p0<n.locationSize;p0++)D(n.location+p0,u0/n.locationSize,s0,U0,l0*o,(c0+u0/n.locationSize*p0)*o,E0)}else{if($0.isInstancedBufferAttribute){for(let q0=0;q0<n.locationSize;q0++)O(n.location+q0,$0.meshPerAttribute);if(y.isInstancedMesh!==!0&&S._maxInstanceCount===void 0)S._maxInstanceCount=$0.meshPerAttribute*$0.count}else for(let q0=0;q0<n.locationSize;q0++)R(n.location+q0);J.bindBuffer(J.ARRAY_BUFFER,i0);for(let q0=0;q0<n.locationSize;q0++)D(n.location+q0,u0/n.locationSize,s0,U0,u0*o,u0/n.locationSize*q0*o,E0)}}else if(x!==void 0){let U0=x[K0];if(U0!==void 0)switch(U0.length){case 2:J.vertexAttrib2fv(n.location,U0);break;case 3:J.vertexAttrib3fv(n.location,U0);break;case 4:J.vertexAttrib4fv(n.location,U0);break;default:J.vertexAttrib1fv(n.location,U0)}}}}z()}function M(){A();for(let y in W){let b=W[y];for(let J0 in b){let S=b[J0];for(let i in S){let c=S[i];for(let x in c)N(c[x].object),delete c[x];delete S[i]}}delete W[y]}}function I(y){if(W[y.id]===void 0)return;let b=W[y.id];for(let J0 in b){let S=b[J0];for(let i in S){let c=S[i];for(let x in c)N(c[x].object),delete c[x];delete S[i]}}delete W[y.id]}function w(y){for(let b in W){let J0=W[b];for(let S in J0){let i=J0[S];if(i[y.id]===void 0)continue;let c=i[y.id];for(let x in c)N(c[x].object),delete c[x];delete i[y.id]}}}function B(y){for(let b in W){let J0=W[b],S=y.isInstancedMesh===!0?y.id:0,i=J0[S];if(i===void 0)continue;for(let c in i){let x=i[c];for(let K0 in x)N(x[K0].object),delete x[K0];delete i[c]}if(delete J0[S],Object.keys(J0).length===0)delete W[b]}}function A(){if(d(),H=!0,K===Z)return;K=Z,U(K.object)}function d(){Z.geometry=null,Z.program=null,Z.wireframe=!1}return{setup:Y,reset:A,resetDefaultState:d,dispose:M,releaseStatesOfGeometry:I,releaseStatesOfObject:B,releaseStatesOfProgram:w,initAttributes:V,enableAttribute:R,disableUnusedAttributes:z}}function xE(J,Q,$){let W;function Z(X){W=X}function K(X,U){J.drawArrays(W,X,U),$.update(U,W,1)}function H(X,U,N){if(N===0)return;J.drawArraysInstanced(W,X,U,N),$.update(U,W,N)}function Y(X,U,N){if(N===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(W,X,0,U,0,N);let G=0;for(let F=0;F<N;F++)G+=U[F];$.update(G,W,1)}this.setMode=Z,this.render=K,this.renderInstances=H,this.renderMultiDraw=Y}function gE(J,Q,$,W){let Z;function K(){if(Z!==void 0)return Z;if(Q.has("EXT_texture_filter_anisotropic")===!0){let w=Q.get("EXT_texture_filter_anisotropic");Z=J.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else Z=0;return Z}function H(w){if(w!==z9&&W.convert(w)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(w){let B=w===E8&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(w!==G9&&w!==x9&&!B&&W.convert(w)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function X(w){if(w==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";w="mediump"}if(w==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",N=X(U);if(N!==U)g0("WebGLRenderer:",U,"not supported, using",N,"instead."),U=N;let E=$.logarithmicDepthBuffer===!0,G=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&G===!1)g0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let F=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),q=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),V=J.getParameter(J.MAX_TEXTURE_SIZE),R=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),O=J.getParameter(J.MAX_VERTEX_ATTRIBS),z=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),D=J.getParameter(J.MAX_VARYING_VECTORS),L=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),M=J.getParameter(J.MAX_SAMPLES),I=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:K,getMaxPrecision:X,textureFormatReadable:H,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:E,reversedDepthBuffer:G,maxTextures:F,maxVertexTextures:q,maxTextureSize:V,maxCubemapSize:R,maxAttributes:O,maxVertexUniforms:z,maxVaryings:D,maxFragmentUniforms:L,maxSamples:M,samples:I}}function pE(J){let Q=this,$=null,W=0,Z=!1,K=!1,H=new c8,Y=new t0,X={value:null,needsUpdate:!1};this.uniform=X,this.numPlanes=0,this.numIntersection=0,this.init=function(E,G){let F=E.length!==0||G||W!==0||Z;return Z=G,W=E.length,F},this.beginShadows=function(){K=!0,N(null)},this.endShadows=function(){K=!1},this.setGlobalState=function(E,G){$=N(E,G,0)},this.setState=function(E,G,F){let{clippingPlanes:q,clipIntersection:V,clipShadows:R}=E,O=J.get(E);if(!Z||q===null||q.length===0||K&&!R)if(K)N(null);else U();else{let z=K?0:W,D=z*4,L=O.clippingState||null;X.value=L,L=N(q,G,D,F);for(let M=0;M!==D;++M)L[M]=$[M];O.clippingState=L,this.numIntersection=V?this.numPlanes:0,this.numPlanes+=z}};function U(){if(X.value!==$)X.value=$,X.needsUpdate=W>0;Q.numPlanes=W,Q.numIntersection=0}function N(E,G,F,q){let V=E!==null?E.length:0,R=null;if(V!==0){if(R=X.value,q!==!0||R===null){let O=F+V*4,z=G.matrixWorldInverse;if(Y.getNormalMatrix(z),R===null||R.length<O)R=new Float32Array(O);for(let D=0,L=F;D!==V;++D,L+=4)H.copy(E[D]).applyMatrix4(z,Y),H.normal.toArray(R,L),R[L+3]=H.constant}X.value=R,X.needsUpdate=!0}return Q.numPlanes=V,Q.numIntersection=0,R}}var i6=4,mE=6,lE=20,uE=256,tQ=new c9,pX=new y0,sK=null,iK=0,oK=0,aK=!1,dE=new T,s7=new T;class $${constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,W=100,Z={}){let{size:K=256,position:H=dE}=Z;sK=this._renderer.getRenderTarget(),iK=this._renderer.getActiveCubeFace(),oK=this._renderer.getActiveMipmapLevel(),aK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(K);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,W,Y,H),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=uX(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=lX(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(sK,iK,oK),this._renderer.xr.enabled=aK,J.scissorTest=!1,s6(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===v6||J.mapping===f7)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);sK=this._renderer.getRenderTarget(),iK=this._renderer.getActiveCubeFace(),oK=this._renderer.getActiveMipmapLevel(),aK=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:N8,minFilter:N8,generateMipmaps:!1,type:E8,format:z9,colorSpace:p8,depthBuffer:!1},W=mX(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=mX(J,Q,$);let{_lodMax:Z}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=cE(Z)),this._blurMaterial=sE(Z,J,Q),this._ggxMaterial=nE(Z,J,Q)}return W}_compileMaterial(J){let Q=new z0(new jJ,J);this._renderer.compile(Q,tQ)}_sceneToCubeUV(J,Q,$,W,Z){let Y=new K8(90,1,Q,$),X=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],N=this._renderer,E=N.autoClear,G=N.toneMapping;if(N.getClearColor(pX),N.toneMapping=X9,N.autoClear=!1,N.state.buffers.depth.getReversed())N.setRenderTarget(W),N.clearDepth(),N.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new z0(new gJ,new cJ({name:"PMREM.Background",side:L8,depthWrite:!1,depthTest:!1}));let q=this._backgroundBox,V=q.material,R=!1,O=J.background;if(O){if(O.isColor)V.color.copy(O),J.background=null,R=!0}else V.color.copy(pX),R=!0;for(let z=0;z<6;z++){let D=z%3;if(D===0)Y.up.set(0,X[z],0),Y.position.set(Z.x,Z.y,Z.z),Y.lookAt(Z.x+U[z],Z.y,Z.z);else if(D===1)Y.up.set(0,0,X[z]),Y.position.set(Z.x,Z.y,Z.z),Y.lookAt(Z.x,Z.y+U[z],Z.z);else Y.up.set(0,X[z],0),Y.position.set(Z.x,Z.y,Z.z),Y.lookAt(Z.x,Z.y,Z.z+U[z]);let L=this._cubeSize;if(s6(W,D*L,z>2?L:0,L,L),N.setRenderTarget(W),R)N.render(q,Y);N.render(J,Y)}N.toneMapping=G,N.autoClear=E,J.background=O}_textureToCubeUV(J,Q){let $=this._renderer,W=J.mapping===v6||J.mapping===f7;if(W){if(this._cubemapMaterial===null)this._cubemapMaterial=uX();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=lX();let Z=W?this._cubemapMaterial:this._equirectMaterial,K=this._lodMeshes[0];K.material=Z;let H=Z.uniforms;H.envMap.value=J;let Y=this._cubeSize;s6(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(K,tQ)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let W=this._lodMeshes.length;for(let Z=1;Z<W;Z++)this._applyGGXFilter(J,Z-1,Z);Q.autoClear=$}_applyGGXFilter(J,Q,$){let W=this._renderer,Z=this._pingPongRenderTarget,K=this._ggxMaterial,H=this._lodMeshes[$];H.material=K;let Y=K.uniforms,X=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),N=Math.sqrt(X*X-U*U),E=X*1.25,G=N*E,{_lodMax:F}=this,q=this._sizeLods[$],V=3*q*($>F-i6?$-F+i6:0),R=4*(this._cubeSize-q);Y.envMap.value=J.texture,Y.roughness.value=G,Y.mipInt.value=F-Q,s6(Z,V,R,3*q,2*q),W.setRenderTarget(Z),W.render(H,tQ),Y.envMap.value=Z.texture,Y.roughness.value=0,Y.mipInt.value=F-$,s6(J,V,R,3*q,2*q),W.setRenderTarget(J),W.render(H,tQ)}_blur(J,Q,$,W){let Z=this._pingPongRenderTarget,K=Math.min(W,Math.PI)/Math.SQRT2;this._blurPass(J,Z,Q,$,K),this._blurPass(Z,J,$,$,K)}_blurPass(J,Q,$,W,Z){let K=this._renderer,H=this._blurMaterial,Y=this._lodMeshes[W];Y.material=H;let X=H.uniforms;X.envMap.value=J.texture,X.sigma.value=Z,X.mipInt.value=this._lodMax-$;let U=this._sizeLods[W],N=3*U*(W>this._lodMax-i6?W-this._lodMax+i6:0),E=4*(this._cubeSize-U);s6(Q,N,E,3*U,2*U),K.setRenderTarget(Q),K.render(Y,tQ)}}function cE(J){let Q=[],$=[],W=J,Z=J-i6+1+mE;for(let K=0;K<Z;K++){let H=Math.pow(2,W);Q.push(H);let Y=1/(H-2),X=-Y,U=1+Y,N=[X,X,U,X,U,U,X,X,U,U,X,U],E=6,G=6,F=3,q=new Float32Array(F*G*E),V=new Float32Array(F*G*E);for(let O=0;O<E;O++){let z=O%3*2/3-1,D=O>2?0:-1,L=[z,D,0,z+0.6666666666666666,D,0,z+0.6666666666666666,D+1,0,z,D,0,z+0.6666666666666666,D+1,0,z,D+1,0];q.set(L,F*G*O);for(let M=0;M<G;M++){let I=N[M*2]*2-1,w=N[M*2+1]*2-1;if(O===0)s7.set(1,w,I);else if(O===1)s7.set(-I,1,-w);else if(O===2)s7.set(-I,w,1);else if(O===3)s7.set(-1,w,-I);else if(O===4)s7.set(-I,-1,w);else s7.set(I,w,-1);s7.toArray(V,(O*G+M)*F)}}let R=new jJ;if(R.setAttribute("position",new oJ(q,F)),R.setAttribute("outputDirection",new oJ(V,F)),$.push(new z0(R,null)),W>i6)W--}return{lodMeshes:$,sizeLods:Q}}function mX(J,Q,$){let W=new eJ(J,Q,$);return W.texture.mapping=jQ,W.texture.name="PMREM.cubeUv",W.scissorTest=!0,W}function s6(J,Q,$,W,Z){J.viewport.set(Q,$,W,Z),J.scissor.set(Q,$,W,Z)}function nE(J,Q,$){return new nJ({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:uE,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yW(),fragmentShader:`

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
		`,blending:s8,depthTest:!1,depthWrite:!1})}function sE(J,Q,$){return new nJ({name:"SphericalGaussianBlur",defines:{SAMPLES:lE,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yW(),fragmentShader:`

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
		`,blending:s8,depthTest:!1,depthWrite:!1})}function lX(){return new nJ({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yW(),fragmentShader:`

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
		`,blending:s8,depthTest:!1,depthWrite:!1})}function uX(){return new nJ({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yW(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:s8,depthTest:!1,depthWrite:!1})}function yW(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class QH extends eJ{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},W=[$,$,$,$,$,$];this.texture=new RW(W),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},W=new gJ(5,5,5),Z=new nJ({name:"CubemapFromEquirect",uniforms:c7($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:L8,blending:s8});Z.uniforms.tEquirect.value=Q;let K=new z0(W,Z),H=Q.minFilter;if(Q.minFilter===C9)Q.minFilter=N8;return new gK(1,10,this).update(J,K),Q.minFilter=H,K.geometry.dispose(),K.material.dispose(),this}clear(J,Q=!0,$=!0,W=!0){let Z=J.getRenderTarget();for(let K=0;K<6;K++)J.setRenderTarget(this,K),J.clear(Q,$,W);J.setRenderTarget(Z)}}function iE(J){let Q=new WeakMap,$=new WeakMap,W=null;function Z(G,F=!1){if(G===null||G===void 0)return null;if(F)return H(G);return K(G)}function K(G){if(G&&G.isTexture){let F=G.mapping;if(F===a$||F===r$)if(Q.has(G)){let q=Q.get(G).texture;return Y(q,G.mapping)}else{let q=G.image;if(q&&q.height>0){let V=new QH(q.height);return V.fromEquirectangularTexture(J,G),Q.set(G,V),G.addEventListener("dispose",U),Y(V.texture,G.mapping)}else return null}}return G}function H(G){if(G&&G.isTexture){let F=G.mapping,q=F===a$||F===r$,V=F===v6||F===f7;if(q||V){let R=$.get(G),O=R!==void 0?R.texture.pmremVersion:0;if(G.isRenderTargetTexture&&G.pmremVersion!==O){if(W===null)W=new $$(J);return R=q?W.fromEquirectangular(G,R):W.fromCubemap(G,R),R.texture.pmremVersion=G.pmremVersion,$.set(G,R),R.texture}else if(R!==void 0)return R.texture;else{let z=G.image;if(q&&z&&z.height>0||V&&z&&X(z)){if(W===null)W=new $$(J);return R=q?W.fromEquirectangular(G):W.fromCubemap(G),R.texture.pmremVersion=G.pmremVersion,$.set(G,R),G.addEventListener("dispose",N),R.texture}else return null}}}return G}function Y(G,F){if(F===a$)G.mapping=v6;else if(F===r$)G.mapping=f7;return G}function X(G){let F=0,q=6;for(let V=0;V<q;V++)if(G[V]!==void 0)F++;return F===q}function U(G){let F=G.target;F.removeEventListener("dispose",U);let q=Q.get(F);if(q!==void 0)Q.delete(F),q.dispose()}function N(G){let F=G.target;F.removeEventListener("dispose",N);let q=$.get(F);if(q!==void 0)$.delete(F),q.dispose()}function E(){if(Q=new WeakMap,$=new WeakMap,W!==null)W.dispose(),W=null}return{get:Z,dispose:E}}function oE(J){let Q={};function $(W){if(Q[W]!==void 0)return Q[W];let Z=J.getExtension(W);return Q[W]=Z,Z}return{has:function(W){return $(W)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(W){let Z=$(W);if(Z===null)w7("WebGLRenderer: "+W+" extension not supported.");return Z}}}function aE(J,Q,$,W){let Z={},K=new WeakMap;function H(E){let G=E.target;if(G.index!==null)Q.remove(G.index);for(let q in G.attributes)Q.remove(G.attributes[q]);G.removeEventListener("dispose",H),delete Z[G.id];let F=K.get(G);if(F)Q.remove(F),K.delete(G);if(W.releaseStatesOfGeometry(G),G.isInstancedBufferGeometry===!0)delete G._maxInstanceCount;$.memory.geometries--}function Y(E,G){if(Z[G.id]===!0)return G;return G.addEventListener("dispose",H),Z[G.id]=!0,$.memory.geometries++,G}function X(E){let G=E.attributes;for(let F in G)Q.update(G[F],J.ARRAY_BUFFER)}function U(E){let G=[],F=E.index,q=E.attributes.position,V=0;if(q===void 0)return;if(F!==null){let z=F.array;V=F.version;for(let D=0,L=z.length;D<L;D+=3){let M=z[D+0],I=z[D+1],w=z[D+2];G.push(M,I,I,w,w,M)}}else{let z=q.array;V=q.version;for(let D=0,L=z.length/3-1;D<L;D+=3){let M=D+0,I=D+1,w=D+2;G.push(M,I,I,w,w,M)}}let R=new(q.count>=65535?EW:NW)(G,1);R.version=V;let O=K.get(E);if(O)Q.remove(O);K.set(E,R)}function N(E){let G=K.get(E);if(G){let F=E.index;if(F!==null){if(G.version<F.version)U(E)}}else U(E);return K.get(E)}return{get:Y,update:X,getWireframeAttribute:N}}function rE(J,Q,$){let W;function Z(E){W=E}let K,H;function Y(E){K=E.type,H=E.bytesPerElement}function X(E,G){J.drawElements(W,G,K,E*H),$.update(G,W,1)}function U(E,G,F){if(F===0)return;J.drawElementsInstanced(W,G,K,E*H,F),$.update(G,W,F)}function N(E,G,F){if(F===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(W,G,0,K,E,0,F);let V=0;for(let R=0;R<F;R++)V+=G[R];$.update(V,W,1)}this.setMode=Z,this.setIndex=Y,this.render=X,this.renderInstances=U,this.renderMultiDraw=N}function tE(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function W(K,H,Y){switch($.calls++,H){case J.TRIANGLES:$.triangles+=Y*(K/3);break;case J.LINES:$.lines+=Y*(K/2);break;case J.LINE_STRIP:$.lines+=Y*(K-1);break;case J.LINE_LOOP:$.lines+=Y*K;break;case J.POINTS:$.points+=Y*K;break;default:o0("WebGLInfo: Unknown draw mode:",H);break}}function Z(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:Z,update:W}}function eE(J,Q,$){let W=new WeakMap,Z=new wJ;function K(H,Y,X){let U=H.morphTargetInfluences,N=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,E=N!==void 0?N.length:0,G=W.get(Y);if(G===void 0||G.count!==E){let A=function(){w.dispose(),W.delete(Y),Y.removeEventListener("dispose",A)};if(G!==void 0)G.texture.dispose();let F=Y.morphAttributes.position!==void 0,q=Y.morphAttributes.normal!==void 0,V=Y.morphAttributes.color!==void 0,R=Y.morphAttributes.position||[],O=Y.morphAttributes.normal||[],z=Y.morphAttributes.color||[],D=0;if(F===!0)D=1;if(q===!0)D=2;if(V===!0)D=3;let L=Y.attributes.position.count*D,M=1;if(L>Q.maxTextureSize)M=Math.ceil(L/Q.maxTextureSize),L=Q.maxTextureSize;let I=new Float32Array(L*M*4*E),w=new UW(I,L,M,E);w.type=x9,w.needsUpdate=!0;let B=D*4;for(let d=0;d<E;d++){let y=R[d],b=O[d],J0=z[d],S=L*M*4*d;for(let i=0;i<y.count;i++){let c=i*B;if(F===!0)Z.fromBufferAttribute(y,i),I[S+c+0]=Z.x,I[S+c+1]=Z.y,I[S+c+2]=Z.z,I[S+c+3]=0;if(q===!0)Z.fromBufferAttribute(b,i),I[S+c+4]=Z.x,I[S+c+5]=Z.y,I[S+c+6]=Z.z,I[S+c+7]=0;if(V===!0)Z.fromBufferAttribute(J0,i),I[S+c+8]=Z.x,I[S+c+9]=Z.y,I[S+c+10]=Z.z,I[S+c+11]=J0.itemSize===4?Z.w:1}}G={count:E,texture:w,size:new W0(L,M)},W.set(Y,G),Y.addEventListener("dispose",A)}if(H.isInstancedMesh===!0&&H.morphTexture!==null)X.getUniforms().setValue(J,"morphTexture",H.morphTexture,$);else{let F=0;for(let V=0;V<U.length;V++)F+=U[V];let q=Y.morphTargetsRelative?1:1-F;X.getUniforms().setValue(J,"morphTargetBaseInfluence",q),X.getUniforms().setValue(J,"morphTargetInfluences",U)}X.getUniforms().setValue(J,"morphTargetsTexture",G.texture,$),X.getUniforms().setValue(J,"morphTargetsTextureSize",G.size)}return{update:K}}function JF(J,Q,$,W,Z){let K=new WeakMap;function H(U){let N=Z.render.frame,E=U.geometry,G=Q.get(U,E);if(K.get(G)!==N)Q.update(G),K.set(G,N);if(U.isInstancedMesh){if(U.hasEventListener("dispose",X)===!1)U.addEventListener("dispose",X);if(K.get(U)!==N){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);K.set(U,N)}}if(U.isSkinnedMesh){let F=U.skeleton;if(K.get(F)!==N)F.update(),K.set(F,N)}return G}function Y(){K=new WeakMap}function X(U){let N=U.target;if(N.removeEventListener("dispose",X),W.releaseStatesOfObject(N),$.remove(N.instanceMatrix),N.instanceColor!==null)$.remove(N.instanceColor)}return{update:H,dispose:Y}}var QF={[IQ]:"LINEAR_TONE_MAPPING",[AQ]:"REINHARD_TONE_MAPPING",[_Q]:"CINEON_TONE_MAPPING",[v7]:"ACES_FILMIC_TONE_MAPPING",[wQ]:"AGX_TONE_MAPPING",[SQ]:"NEUTRAL_TONE_MAPPING",[TQ]:"CUSTOM_TONE_MAPPING"};function $F(J,Q,$,W,Z,K){let H=new eJ(Q,$,{type:J,depthBuffer:Z,stencilBuffer:K,samples:W?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),Y=null,X=null,U=new jJ;U.setAttribute("position",new HJ([-1,3,0,-1,-1,0,3,-1,0],3)),U.setAttribute("uv",new HJ([0,2,0,0,2,0],2));let N=new sQ({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),E=new z0(U,N),G=new c9(-1,1,1,-1,0,1),F=null,q=null,V=!1,R,O=null,z=[],D=!1;this.setSize=function(L,M){if(H.setSize(L,M),Y!==null)Y.setSize(L,M);if(X!==null)X.setSize(L,M);for(let I=0;I<z.length;I++){let w=z[I];if(w.setSize)w.setSize(L,M)}},this.setEffects=function(L){z=L,D=z.length>0&&z[0].isRenderPass===!0;let{width:M,height:I}=H;if(z.length>0&&Y===null)Y=new eJ(M,I,{type:E8,depthBuffer:!1,stencilBuffer:!1}),X=new eJ(M,I,{type:E8,depthBuffer:!1,stencilBuffer:!1});for(let w=0;w<z.length;w++){let B=z[w];if(B.setSize)B.setSize(M,I)}},this.begin=function(L,M){if(V)return!1;if(L.toneMapping===X9&&z.length===0)return!1;if(O=M,M!==null){let{width:I,height:w}=M;if(H.width!==I||H.height!==w)this.setSize(I,w)}if(D===!1)L.setRenderTarget(H);return R=L.toneMapping,L.toneMapping=X9,!0},this.hasRenderPass=function(){return D},this.end=function(L,M){L.toneMapping=R,V=!0;let I=H,w=Y;for(let B=0;B<z.length;B++){let A=z[B];if(A.enabled===!1)continue;if(A.render(L,w,I,M),A.needsSwap!==!1)I=w,w=w===Y?X:Y}if(F!==L.outputColorSpace||q!==L.toneMapping){if(F=L.outputColorSpace,q=L.toneMapping,N.defines={},ZJ.getTransfer(F)===SJ)N.defines.SRGB_TRANSFER="";let B=QF[q];if(B)N.defines[B]="";N.needsUpdate=!0}N.uniforms.tDiffuse.value=I.texture,L.setRenderTarget(O),L.render(E,G),O=null,V=!1},this.isCompositing=function(){return V},this.dispose=function(){if(H.dispose(),Y!==null)Y.dispose();if(X!==null)X.dispose();U.dispose(),N.dispose()}}var UU=new tJ,eK=new d7(1,1),GU=new UW,NU=new CK,EU=new RW,dX=[],cX=[],nX=new Float32Array(16),sX=new Float32Array(9),iX=new Float32Array(4);function o6(J,Q,$){let W=J[0];if(W<=0||W>0)return J;let Z=Q*$,K=dX[Z];if(K===void 0)K=new Float32Array(Z),dX[Z]=K;if(Q!==0){W.toArray(K,0);for(let H=1,Y=0;H!==Q;++H)Y+=$,J[H].toArray(K,Y)}return K}function Y8(J,Q){if(J.length!==Q.length)return!1;for(let $=0,W=J.length;$<W;$++)if(J[$]!==Q[$])return!1;return!0}function X8(J,Q){for(let $=0,W=Q.length;$<W;$++)J[$]=Q[$]}function vW(J,Q){let $=cX[Q];if($===void 0)$=new Int32Array(Q),cX[Q]=$;for(let W=0;W!==Q;++W)$[W]=J.allocateTextureUnit();return $}function WF(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function ZF(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(Y8($,Q))return;J.uniform2fv(this.addr,Q),X8($,Q)}}function KF(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(Y8($,Q))return;J.uniform3fv(this.addr,Q),X8($,Q)}}function HF(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(Y8($,Q))return;J.uniform4fv(this.addr,Q),X8($,Q)}}function YF(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(Y8($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),X8($,Q)}else{if(Y8($,W))return;iX.set(W),J.uniformMatrix2fv(this.addr,!1,iX),X8($,W)}}function XF(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(Y8($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),X8($,Q)}else{if(Y8($,W))return;sX.set(W),J.uniformMatrix3fv(this.addr,!1,sX),X8($,W)}}function UF(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(Y8($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),X8($,Q)}else{if(Y8($,W))return;nX.set(W),J.uniformMatrix4fv(this.addr,!1,nX),X8($,W)}}function GF(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function NF(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(Y8($,Q))return;J.uniform2iv(this.addr,Q),X8($,Q)}}function EF(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(Y8($,Q))return;J.uniform3iv(this.addr,Q),X8($,Q)}}function FF(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(Y8($,Q))return;J.uniform4iv(this.addr,Q),X8($,Q)}}function qF(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function OF(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(Y8($,Q))return;J.uniform2uiv(this.addr,Q),X8($,Q)}}function RF(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(Y8($,Q))return;J.uniform3uiv(this.addr,Q),X8($,Q)}}function LF(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(Y8($,Q))return;J.uniform4uiv(this.addr,Q),X8($,Q)}}function VF(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;let K;if(this.type===J.SAMPLER_2D_SHADOW)eK.compareFunction=$.isReversedDepthBuffer()?XW:YW,K=eK;else K=UU;$.setTexture2D(Q||K,Z)}function DF(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTexture3D(Q||NU,Z)}function BF(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTextureCube(Q||EU,Z)}function kF(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTexture2DArray(Q||GU,Z)}function MF(J){switch(J){case 5126:return WF;case 35664:return ZF;case 35665:return KF;case 35666:return HF;case 35674:return YF;case 35675:return XF;case 35676:return UF;case 5124:case 35670:return GF;case 35667:case 35671:return NF;case 35668:case 35672:return EF;case 35669:case 35673:return FF;case 5125:return qF;case 36294:return OF;case 36295:return RF;case 36296:return LF;case 35678:case 36198:case 36298:case 36306:case 35682:return VF;case 35679:case 36299:case 36307:return DF;case 35680:case 36300:case 36308:case 36293:return BF;case 36289:case 36303:case 36311:case 36292:return kF}}function CF(J,Q){J.uniform1fv(this.addr,Q)}function zF(J,Q){let $=o6(Q,this.size,2);J.uniform2fv(this.addr,$)}function PF(J,Q){let $=o6(Q,this.size,3);J.uniform3fv(this.addr,$)}function IF(J,Q){let $=o6(Q,this.size,4);J.uniform4fv(this.addr,$)}function AF(J,Q){let $=o6(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function _F(J,Q){let $=o6(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function TF(J,Q){let $=o6(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function wF(J,Q){J.uniform1iv(this.addr,Q)}function SF(J,Q){J.uniform2iv(this.addr,Q)}function jF(J,Q){J.uniform3iv(this.addr,Q)}function yF(J,Q){J.uniform4iv(this.addr,Q)}function vF(J,Q){J.uniform1uiv(this.addr,Q)}function fF(J,Q){J.uniform2uiv(this.addr,Q)}function hF(J,Q){J.uniform3uiv(this.addr,Q)}function bF(J,Q){J.uniform4uiv(this.addr,Q)}function xF(J,Q,$){let W=this.cache,Z=Q.length,K=vW($,Z);if(!Y8(W,K))J.uniform1iv(this.addr,K),X8(W,K);let H;if(this.type===J.SAMPLER_2D_SHADOW)H=eK;else H=UU;for(let Y=0;Y!==Z;++Y)$.setTexture2D(Q[Y]||H,K[Y])}function gF(J,Q,$){let W=this.cache,Z=Q.length,K=vW($,Z);if(!Y8(W,K))J.uniform1iv(this.addr,K),X8(W,K);for(let H=0;H!==Z;++H)$.setTexture3D(Q[H]||NU,K[H])}function pF(J,Q,$){let W=this.cache,Z=Q.length,K=vW($,Z);if(!Y8(W,K))J.uniform1iv(this.addr,K),X8(W,K);for(let H=0;H!==Z;++H)$.setTextureCube(Q[H]||EU,K[H])}function mF(J,Q,$){let W=this.cache,Z=Q.length,K=vW($,Z);if(!Y8(W,K))J.uniform1iv(this.addr,K),X8(W,K);for(let H=0;H!==Z;++H)$.setTexture2DArray(Q[H]||GU,K[H])}function lF(J){switch(J){case 5126:return CF;case 35664:return zF;case 35665:return PF;case 35666:return IF;case 35674:return AF;case 35675:return _F;case 35676:return TF;case 5124:case 35670:return wF;case 35667:case 35671:return SF;case 35668:case 35672:return jF;case 35669:case 35673:return yF;case 5125:return vF;case 36294:return fF;case 36295:return hF;case 36296:return bF;case 35678:case 36198:case 36298:case 36306:case 35682:return xF;case 35679:case 36299:case 36307:return gF;case 35680:case 36300:case 36308:case 36293:return pF;case 36289:case 36303:case 36311:case 36292:return mF}}class FU{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=MF(Q.type)}}class qU{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=lF(Q.type)}}class OU{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let W=this.seq;for(let Z=0,K=W.length;Z!==K;++Z){let H=W[Z];H.setValue(J,Q[H.id],$)}}}var rK=/(\w+)(\])?(\[|\.)?/g;function oX(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function uF(J,Q,$){let W=J.name,Z=W.length;rK.lastIndex=0;while(!0){let K=rK.exec(W),H=rK.lastIndex,Y=K[1],X=K[2]==="]",U=K[3];if(X)Y=Y|0;if(U===void 0||U==="["&&H+2===Z){oX($,U===void 0?new FU(Y,J,Q):new qU(Y,J,Q));break}else{let E=$.map[Y];if(E===void 0)E=new OU(Y),oX($,E);$=E}}}class Q${constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let K=0;K<$;++K){let H=J.getActiveUniform(Q,K),Y=J.getUniformLocation(Q,H.name);uF(H,Y,this)}let W=[],Z=[];for(let K of this.seq)if(K.type===J.SAMPLER_2D_SHADOW||K.type===J.SAMPLER_CUBE_SHADOW||K.type===J.SAMPLER_2D_ARRAY_SHADOW)W.push(K);else Z.push(K);if(W.length>0)this.seq=W.concat(Z)}setValue(J,Q,$,W){let Z=this.map[Q];if(Z!==void 0)Z.setValue(J,$,W)}setOptional(J,Q,$){let W=Q[$];if(W!==void 0)this.setValue(J,$,W)}static upload(J,Q,$,W){for(let Z=0,K=Q.length;Z!==K;++Z){let H=Q[Z],Y=$[H.id];if(Y.needsUpdate!==!1)H.setValue(J,Y.value,W)}}static seqWithValue(J,Q){let $=[];for(let W=0,Z=J.length;W!==Z;++W){let K=J[W];if(K.id in Q)$.push(K)}return $}}function aX(J,Q,$){let W=J.createShader(Q);return J.shaderSource(W,$),J.compileShader(W),W}var dF=37297,cF=0;function nF(J,Q){let $=J.split(`
`),W=[],Z=Math.max(Q-6,0),K=Math.min(Q+6,$.length);for(let H=Z;H<K;H++){let Y=H+1;W.push(`${Y===Q?">":" "} ${Y}: ${$[H]}`)}return W.join(`
`)}var rX=new t0;function sF(J){ZJ._getMatrix(rX,ZJ.workingColorSpace,J);let Q=`mat3( ${rX.elements.map(($)=>$.toFixed(4))} )`;switch(ZJ.getTransfer(J)){case LK:return[Q,"LinearTransferOETF"];case SJ:return[Q,"sRGBTransferOETF"];default:return g0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function tX(J,Q,$){let W=J.getShaderParameter(Q,J.COMPILE_STATUS),K=(J.getShaderInfoLog(Q)||"").trim();if(W&&K==="")return"";let H=/ERROR: 0:(\d+)/.exec(K);if(H){let Y=parseInt(H[1]);return $.toUpperCase()+`

`+K+`

`+nF(J.getShaderSource(Q),Y)}else return K}function iF(J,Q){let $=sF(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var oF={[IQ]:"Linear",[AQ]:"Reinhard",[_Q]:"Cineon",[v7]:"ACESFilmic",[wQ]:"AgX",[SQ]:"Neutral",[TQ]:"Custom"};function aF(J,Q){let $=oF[Q];if($===void 0)return g0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var jW=new T;function rF(){ZJ.getLuminanceCoefficients(jW);let J=jW.x.toFixed(4),Q=jW.y.toFixed(4),$=jW.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function tF(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(J$).join(`
`)}function eF(J){let Q=[];for(let $ in J){let W=J[$];if(W===!1)continue;Q.push("#define "+$+" "+W)}return Q.join(`
`)}function Jq(J,Q){let $={},W=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let Z=0;Z<W;Z++){let K=J.getActiveAttrib(Q,Z),H=K.name,Y=1;if(K.type===J.FLOAT_MAT2)Y=2;if(K.type===J.FLOAT_MAT3)Y=3;if(K.type===J.FLOAT_MAT4)Y=4;$[H]={type:K.type,location:J.getAttribLocation(Q,H),locationSize:Y}}return $}function J$(J){return J!==""}function eX(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function JU(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var Qq=/^[ \t]*#include +<([\w\d./]+)>/gm;function JH(J){return J.replace(Qq,Wq)}var $q=new Map;function Wq(J,Q){let $=YJ[Q];if($===void 0){let W=$q.get(Q);if(W!==void 0)$=YJ[W],g0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,W);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return JH($)}var Zq=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function QU(J){return J.replace(Zq,Kq)}function Kq(J,Q,$,W){let Z="";for(let K=parseInt(Q);K<parseInt($);K++)Z+=W.replace(/\[\s*i\s*\]/g,"[ "+K+" ]").replace(/UNROLLED_LOOP_INDEX/g,K);return Z}function $U(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var Hq={[y7]:"SHADOWMAP_TYPE_PCF",[j6]:"SHADOWMAP_TYPE_VSM"};function Yq(J){return Hq[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Xq={[v6]:"ENVMAP_TYPE_CUBE",[f7]:"ENVMAP_TYPE_CUBE",[jQ]:"ENVMAP_TYPE_CUBE_UV"};function Uq(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return Xq[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var Gq={[f7]:"ENVMAP_MODE_REFRACTION"};function Nq(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return Gq[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Eq={[KX]:"ENVMAP_BLENDING_MULTIPLY",[HX]:"ENVMAP_BLENDING_MIX",[YX]:"ENVMAP_BLENDING_ADD"};function Fq(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return Eq[J.combine]||"ENVMAP_BLENDING_NONE"}function qq(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,W=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:W,maxMip:$}}function Oq(J,Q,$,W){let Z=J.getContext(),K=$.defines,H=$.vertexShader,Y=$.fragmentShader,X=Yq($),U=Uq($),N=Nq($),E=Fq($),G=qq($),F=tF($),q=eF(K),V=Z.createProgram(),R,O,z=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(R=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,q].filter(J$).join(`
`),R.length>0)R+=`
`;if(O=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,q].filter(J$).join(`
`),O.length>0)O+=`
`}else R=[$U($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,q,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+N:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(J$).join(`
`),O=[$U($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,q,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+N:"",$.envMap?"#define "+E:"",G?"#define CUBEUV_TEXEL_WIDTH "+G.texelWidth:"",G?"#define CUBEUV_TEXEL_HEIGHT "+G.texelHeight:"",G?"#define CUBEUV_MAX_MIP "+G.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.retroreflection?"#define USE_RETROREFLECTION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==X9?"#define TONE_MAPPING":"",$.toneMapping!==X9?YJ.tonemapping_pars_fragment:"",$.toneMapping!==X9?aF("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",YJ.colorspace_pars_fragment,iF("linearToOutputTexel",$.outputColorSpace),rF(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(J$).join(`
`);if(H=JH(H),H=eX(H,$),H=JU(H,$),Y=JH(Y),Y=eX(Y,$),Y=JU(Y,$),H=QU(H),Y=QU(Y),$.isRawShaderMaterial!==!0)z=`#version 300 es
`,R=[F,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,O=["#define varying in",$.glslVersion===VK?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===VK?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+O;let D=z+R+H,L=z+O+Y,M=aX(Z,Z.VERTEX_SHADER,D),I=aX(Z,Z.FRAGMENT_SHADER,L);if(Z.attachShader(V,M),Z.attachShader(V,I),$.index0AttributeName!==void 0)Z.bindAttribLocation(V,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)Z.bindAttribLocation(V,0,"position");Z.linkProgram(V);function w(y){if(J.debug.checkShaderErrors){let b=Z.getProgramInfoLog(V)||"",J0=Z.getShaderInfoLog(M)||"",S=Z.getShaderInfoLog(I)||"",i=b.trim(),c=J0.trim(),x=S.trim(),K0=!0,n=!0;if(Z.getProgramParameter(V,Z.LINK_STATUS)===!1)if(K0=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(Z,V,M,I);else{let $0=tX(Z,M,"vertex"),U0=tX(Z,I,"fragment");o0("WebGLProgram: Shader Error "+Z.getError()+" - VALIDATE_STATUS "+Z.getProgramParameter(V,Z.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+i+`
`+$0+`
`+U0)}else if(i!=="")g0("WebGLProgram: Program Info Log:",i);else if(c===""||x==="")n=!1;if(n)y.diagnostics={runnable:K0,programLog:i,vertexShader:{log:c,prefix:R},fragmentShader:{log:x,prefix:O}}}Z.deleteShader(M),Z.deleteShader(I),B=new Q$(Z,V),A=Jq(Z,V)}let B;this.getUniforms=function(){if(B===void 0)w(this);return B};let A;this.getAttributes=function(){if(A===void 0)w(this);return A};let d=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(d===!1)d=Z.getProgramParameter(V,dF);return d},this.destroy=function(){W.releaseStatesOfProgram(this),Z.deleteProgram(V),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=cF++,this.cacheKey=Q,this.usedTimes=1,this.program=V,this.vertexShader=M,this.fragmentShader=I,this}var Rq=0;class RU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let W=this._getShaderCacheForMaterial(J);if(W.has(Q)===!1)W.add(Q),Q.usedTimes++;if(W.has($)===!1)W.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new LU(J),Q.set(J,$);return $}}class LU{constructor(J){this.id=Rq++,this.code=J,this.usedTimes=0}}function Lq(J){return J===g7||J===ZW||J===KW}function Vq(J,Q,$,W,Z,K){let H=new GW,Y=new RU,X=new Set,U=[],N=new Map,E=W.logarithmicDepthBuffer,G=W.precision,F={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function q(B){if(X.add(B),B===0)return"uv";return`uv${B}`}function V(B,A,d,y,b,J0){let S=y.fog,i=b.geometry,c=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?y.environment:null,x=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,K0=Q.get(B.envMap||c,x),n=!!K0&&K0.mapping===jQ?K0.image.height:null,$0=F[B.type];if(B.precision!==null){if(G=W.getMaxPrecision(B.precision),G!==B.precision)g0("WebGLProgram.getParameters:",B.precision,"not supported, using",G,"instead.")}let U0=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,u0=U0!==void 0?U0.length:0,I0=0;if(i.morphAttributes.position!==void 0)I0=1;if(i.morphAttributes.normal!==void 0)I0=2;if(i.morphAttributes.color!==void 0)I0=3;let i0,s0,o,E0;if($0){let AJ=I9[$0];i0=AJ.vertexShader,s0=AJ.fragmentShader}else{i0=B.vertexShader,s0=B.fragmentShader;let AJ=Y.getVertexShaderStage(B),LJ=Y.getFragmentShaderStage(B);Y.update(B,AJ,LJ),o=AJ.id,E0=LJ.id}let q0=J.getRenderTarget(),l0=J.state.buffers.depth.getReversed(),c0=b.isInstancedMesh===!0,p0=b.isBatchedMesh===!0,aJ=!!B.map,e0=!!B.matcap,KJ=!!K0,DJ=!!B.aoMap,FJ=!!B.lightMap,rJ=!!B.bumpMap&&B.wireframe===!1,vJ=!!B.normalMap,q8=!!B.displacementMap,sJ=!!B.emissiveMap,iJ=!!B.metalnessMap,v=!!B.roughnessMap,O8=B.anisotropy>0,kJ=B.clearcoat>0,bJ=B.dispersion>0,P=B.retroreflectivity>0,k=B.iridescence>0,j=B.sheen>0,l=B.transmission>0,Y0=O8&&!!B.anisotropyMap,N0=kJ&&!!B.clearcoatMap,D0=kJ&&!!B.clearcoatNormalMap,a=kJ&&!!B.clearcoatRoughnessMap,t=k&&!!B.iridescenceMap,C0=k&&!!B.iridescenceThicknessMap,b0=j&&!!B.sheenColorMap,B0=j&&!!B.sheenRoughnessMap,F0=!!B.specularMap,x0=!!B.specularColorMap,m0=!!B.specularIntensityMap,OJ=l&&!!B.transmissionMap,h=l&&!!B.thicknessMap,V0=!!B.gradientMap,e=!!B.alphaMap,k0=B.alphaTest>0,T0=!!B.alphaHash,X0=!!B.extensions,M0=X9;if(B.toneMapped){if(q0===null||q0.isXRRenderTarget===!0)M0=J.toneMapping}let r0={shaderID:$0,shaderType:B.type,shaderName:B.name,vertexShader:i0,fragmentShader:s0,defines:B.defines,customVertexShaderID:o,customFragmentShaderID:E0,isRawShaderMaterial:B.isRawShaderMaterial===!0,glslVersion:B.glslVersion,precision:G,batching:p0,batchingColor:p0&&b._colorsTexture!==null,instancing:c0,instancingColor:c0&&b.instanceColor!==null,instancingMorph:c0&&b.morphTexture!==null,outputColorSpace:q0===null?J.outputColorSpace:q0.isXRRenderTarget===!0?q0.texture.colorSpace:ZJ.workingColorSpace,alphaToCoverage:!!B.alphaToCoverage,map:aJ,matcap:e0,envMap:KJ,envMapMode:KJ&&K0.mapping,envMapCubeUVHeight:n,aoMap:DJ,lightMap:FJ,bumpMap:rJ,normalMap:vJ,displacementMap:q8,emissiveMap:sJ,normalMapObjectSpace:vJ&&B.normalMapType===OX,normalMapTangentSpace:vJ&&B.normalMapType===RK,packedNormalMap:vJ&&B.normalMapType===RK&&Lq(B.normalMap.format),metalnessMap:iJ,roughnessMap:v,anisotropy:O8,anisotropyMap:Y0,clearcoat:kJ,clearcoatMap:N0,clearcoatNormalMap:D0,clearcoatRoughnessMap:a,dispersion:bJ,retroreflection:P,iridescence:k,iridescenceMap:t,iridescenceThicknessMap:C0,sheen:j,sheenColorMap:b0,sheenRoughnessMap:B0,specularMap:F0,specularColorMap:x0,specularIntensityMap:m0,transmission:l,transmissionMap:OJ,thicknessMap:h,gradientMap:V0,opaque:B.transparent===!1&&B.blending===PQ&&B.alphaToCoverage===!1,alphaMap:e,alphaTest:k0,alphaHash:T0,combine:B.combine,mapUv:aJ&&q(B.map.channel),aoMapUv:DJ&&q(B.aoMap.channel),lightMapUv:FJ&&q(B.lightMap.channel),bumpMapUv:rJ&&q(B.bumpMap.channel),normalMapUv:vJ&&q(B.normalMap.channel),displacementMapUv:q8&&q(B.displacementMap.channel),emissiveMapUv:sJ&&q(B.emissiveMap.channel),metalnessMapUv:iJ&&q(B.metalnessMap.channel),roughnessMapUv:v&&q(B.roughnessMap.channel),anisotropyMapUv:Y0&&q(B.anisotropyMap.channel),clearcoatMapUv:N0&&q(B.clearcoatMap.channel),clearcoatNormalMapUv:D0&&q(B.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:a&&q(B.clearcoatRoughnessMap.channel),iridescenceMapUv:t&&q(B.iridescenceMap.channel),iridescenceThicknessMapUv:C0&&q(B.iridescenceThicknessMap.channel),sheenColorMapUv:b0&&q(B.sheenColorMap.channel),sheenRoughnessMapUv:B0&&q(B.sheenRoughnessMap.channel),specularMapUv:F0&&q(B.specularMap.channel),specularColorMapUv:x0&&q(B.specularColorMap.channel),specularIntensityMapUv:m0&&q(B.specularIntensityMap.channel),transmissionMapUv:OJ&&q(B.transmissionMap.channel),thicknessMapUv:h&&q(B.thicknessMap.channel),alphaMapUv:e&&q(B.alphaMap.channel),vertexTangents:!!i.attributes.tangent&&(vJ||O8),vertexNormals:!!i.attributes.normal,vertexColors:B.vertexColors,vertexAlphas:B.vertexColors===!0&&!!i.attributes.color&&i.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!i.attributes.uv&&(aJ||e),fog:!!S,useFog:B.fog===!0,fogExp2:!!S&&S.isFogExp2,flatShading:B.wireframe===!1&&(B.flatShading===!0||i.attributes.normal===void 0&&vJ===!1&&(B.isMeshLambertMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isMeshPhysicalMaterial)),sizeAttenuation:B.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:l0,skinning:b.isSkinnedMesh===!0,hasPositionAttribute:i.attributes.position!==void 0,morphTargets:i.morphAttributes.position!==void 0,morphNormals:i.morphAttributes.normal!==void 0,morphColors:i.morphAttributes.color!==void 0,morphTargetsCount:u0,morphTextureStride:I0,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:J0.length,numClippingPlanes:K.numPlanes,numClipIntersection:K.numIntersection,dithering:B.dithering,shadowMapEnabled:J.shadowMap.enabled&&d.length>0,shadowMapType:J.shadowMap.type,toneMapping:M0,decodeVideoTexture:aJ&&B.map.isVideoTexture===!0&&ZJ.getTransfer(B.map.colorSpace)===SJ,decodeVideoTextureEmissive:sJ&&B.emissiveMap.isVideoTexture===!0&&ZJ.getTransfer(B.emissiveMap.colorSpace)===SJ,premultipliedAlpha:B.premultipliedAlpha,doubleSided:B.side===W8,flipSided:B.side===L8,useDepthPacking:B.depthPacking>=0,depthPacking:B.depthPacking||0,index0AttributeName:B.index0AttributeName,extensionClipCullDistance:X0&&B.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(X0&&B.extensions.multiDraw===!0||p0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:B.customProgramCacheKey()};return r0.vertexUv1s=X.has(1),r0.vertexUv2s=X.has(2),r0.vertexUv3s=X.has(3),X.clear(),r0}function R(B){let A=[];if(B.shaderID)A.push(B.shaderID);else A.push(B.customVertexShaderID),A.push(B.customFragmentShaderID);if(B.defines!==void 0)for(let d in B.defines)A.push(d),A.push(B.defines[d]);if(B.isRawShaderMaterial===!1)O(A,B),z(A,B),A.push(J.outputColorSpace);return A.push(B.customProgramCacheKey),A.join()}function O(B,A){B.push(A.precision),B.push(A.outputColorSpace),B.push(A.envMapMode),B.push(A.envMapCubeUVHeight),B.push(A.mapUv),B.push(A.alphaMapUv),B.push(A.lightMapUv),B.push(A.aoMapUv),B.push(A.bumpMapUv),B.push(A.normalMapUv),B.push(A.displacementMapUv),B.push(A.emissiveMapUv),B.push(A.metalnessMapUv),B.push(A.roughnessMapUv),B.push(A.anisotropyMapUv),B.push(A.clearcoatMapUv),B.push(A.clearcoatNormalMapUv),B.push(A.clearcoatRoughnessMapUv),B.push(A.iridescenceMapUv),B.push(A.iridescenceThicknessMapUv),B.push(A.sheenColorMapUv),B.push(A.sheenRoughnessMapUv),B.push(A.specularMapUv),B.push(A.specularColorMapUv),B.push(A.specularIntensityMapUv),B.push(A.transmissionMapUv),B.push(A.thicknessMapUv),B.push(A.combine),B.push(A.fogExp2),B.push(A.sizeAttenuation),B.push(A.morphTargetsCount),B.push(A.morphAttributeCount),B.push(A.numSunLights),B.push(A.numDirLights),B.push(A.numPointLights),B.push(A.numSpotLights),B.push(A.numSpotLightMaps),B.push(A.numHemiLights),B.push(A.numRectAreaLights),B.push(A.numSunLightShadows),B.push(A.numDirLightShadows),B.push(A.numPointLightShadows),B.push(A.numSpotLightShadows),B.push(A.numSpotLightShadowsWithMaps),B.push(A.numLightProbes),B.push(A.shadowMapType),B.push(A.toneMapping),B.push(A.numClippingPlanes),B.push(A.numClipIntersection),B.push(A.depthPacking)}function z(B,A){if(H.disableAll(),A.instancing)H.enable(0);if(A.instancingColor)H.enable(1);if(A.instancingMorph)H.enable(2);if(A.matcap)H.enable(3);if(A.envMap)H.enable(4);if(A.normalMapObjectSpace)H.enable(5);if(A.normalMapTangentSpace)H.enable(6);if(A.clearcoat)H.enable(7);if(A.iridescence)H.enable(8);if(A.alphaTest)H.enable(9);if(A.vertexColors)H.enable(10);if(A.vertexAlphas)H.enable(11);if(A.vertexUv1s)H.enable(12);if(A.vertexUv2s)H.enable(13);if(A.vertexUv3s)H.enable(14);if(A.vertexTangents)H.enable(15);if(A.anisotropy)H.enable(16);if(A.alphaHash)H.enable(17);if(A.batching)H.enable(18);if(A.dispersion)H.enable(19);if(A.retroreflection)H.enable(24);if(A.batchingColor)H.enable(20);if(A.gradientMap)H.enable(21);if(A.packedNormalMap)H.enable(22);if(A.vertexNormals)H.enable(23);if(B.push(H.mask),H.disableAll(),A.fog)H.enable(0);if(A.useFog)H.enable(1);if(A.flatShading)H.enable(2);if(A.logarithmicDepthBuffer)H.enable(3);if(A.reversedDepthBuffer)H.enable(4);if(A.skinning)H.enable(5);if(A.morphTargets)H.enable(6);if(A.morphNormals)H.enable(7);if(A.morphColors)H.enable(8);if(A.premultipliedAlpha)H.enable(9);if(A.shadowMapEnabled)H.enable(10);if(A.doubleSided)H.enable(11);if(A.flipSided)H.enable(12);if(A.useDepthPacking)H.enable(13);if(A.dithering)H.enable(14);if(A.transmission)H.enable(15);if(A.sheen)H.enable(16);if(A.opaque)H.enable(17);if(A.pointsUvs)H.enable(18);if(A.decodeVideoTexture)H.enable(19);if(A.decodeVideoTextureEmissive)H.enable(20);if(A.alphaToCoverage)H.enable(21);if(A.numLightProbeGrids>0)H.enable(22);if(A.hasPositionAttribute)H.enable(23);B.push(H.mask)}function D(B){let A=F[B.type],d;if(A){let y=I9[A];d=m9.clone(y.uniforms)}else d=B.uniforms;return d}function L(B,A){let d=N.get(A);if(d!==void 0)++d.usedTimes;else d=new Oq(J,A,B,Z),U.push(d),N.set(A,d);return d}function M(B){if(--B.usedTimes===0){let A=U.indexOf(B);U[A]=U[U.length-1],U.pop(),N.delete(B.cacheKey),B.destroy()}}function I(B){Y.remove(B)}function w(){Y.dispose()}return{getParameters:V,getProgramCacheKey:R,getUniforms:D,acquireProgram:L,releaseProgram:M,releaseShaderCache:I,programs:U,dispose:w}}function Dq(){let J=new WeakMap;function Q(H){return J.has(H)}function $(H){let Y=J.get(H);if(Y===void 0)Y={},J.set(H,Y);return Y}function W(H){J.delete(H)}function Z(H,Y,X){J.get(H)[Y]=X}function K(){J=new WeakMap}return{has:Q,get:$,remove:W,update:Z,dispose:K}}function Bq(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function WU(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function ZU(){let J=[],Q=0,$=[],W=[],Z=[];function K(){Q=0,$.length=0,W.length=0,Z.length=0}function H(G){let F=0;if(G.isInstancedMesh)F+=2;if(G.isSkinnedMesh)F+=1;return F}function Y(G,F,q,V,R,O){let z=J[Q];if(z===void 0)z={id:G.id,object:G,geometry:F,material:q,materialVariant:H(G),groupOrder:V,renderOrder:G.renderOrder,z:R,group:O},J[Q]=z;else z.id=G.id,z.object=G,z.geometry=F,z.material=q,z.materialVariant=H(G),z.groupOrder=V,z.renderOrder=G.renderOrder,z.z=R,z.group=O;return Q++,z}function X(G,F,q,V,R,O,z){if(z.reversedDepth===!0)R=-R;let D=Y(G,F,q,V,R,O);if(q.transmission>0)W.push(D);else if(q.transparent===!0)Z.push(D);else $.push(D)}function U(G,F,q,V,R,O){let z=Y(G,F,q,V,R,O);if(q.transmission>0)W.unshift(z);else if(q.transparent===!0)Z.unshift(z);else $.unshift(z)}function N(G,F){if($.length>1)$.sort(G||Bq);if(W.length>1)W.sort(F||WU);if(Z.length>1)Z.sort(F||WU)}function E(){for(let G=Q,F=J.length;G<F;G++){let q=J[G];if(q.id===null)break;q.id=null,q.object=null,q.geometry=null,q.material=null,q.group=null}}return{opaque:$,transmissive:W,transparent:Z,init:K,push:X,unshift:U,finish:E,sort:N}}function kq(){let J=new WeakMap;function Q(W,Z){let K=J.get(W),H;if(K===void 0)H=new ZU,J.set(W,[H]);else if(Z>=K.length)H=new ZU,K.push(H);else H=K[Z];return H}function $(){J=new WeakMap}return{get:Q,dispose:$}}function Mq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={direction:new T,color:new y0};break;case"SpotLight":$={position:new T,direction:new T,color:new y0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new T,color:new y0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new T,skyColor:new y0,groundColor:new y0};break;case"RectAreaLight":$={color:new y0,position:new T,halfWidth:new T,halfHeight:new T};break}return J[Q.id]=$,$}}}function Cq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var zq=0;function Pq(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function Iq(J){let Q=new Mq,$=Cq(),W={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)W.probe.push(new T);let Z=new T,K=new n0,H=new n0;function Y(U){let N=0,E=0,G=0;for(let b=0;b<9;b++)W.probe[b].set(0,0,0);let F=0,q=0,V=0,R=0,O=0,z=0,D=0,L=0,M=0,I=0,w=0,B=0,A=0,d=0;U.sort(Pq);for(let b=0,J0=U.length;b<J0;b++){let S=U[b],i=S.color,c=S.intensity,x=S.distance,K0=null;if(S.shadow&&S.shadow.map)if(S.shadow.map.texture.format===g7)K0=S.shadow.map.texture;else K0=S.shadow.map.depthTexture||S.shadow.map.texture;if(S.isAmbientLight)N+=i.r*c,E+=i.g*c,G+=i.b*c;else if(S.isLightProbe){for(let n=0;n<9;n++)W.probe[n].addScaledVector(S.sh.coefficients[n],c);d++}else if(S.isSunLight){let n=Q.get(S);if(n.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let $0=S.shadow,U0=$.get(S);U0.shadowIntensity=$0.intensity,U0.shadowBias=$0.bias,U0.shadowNormalBias=$0.normalBias,U0.shadowRadius=$0.radius,U0.shadowMapSize.copy($0.mapSize).multiply($0.getFrameExtents()),W.sunShadow[q]=U0,W.sunShadowMap[q]=K0;let u0=$0.getViewportCount();for(let I0=0;I0<u0;I0++)W.sunShadowMatrix[V+I0]=$0.getMatrix(I0),W.sunShadowCascade[V+I0]=$0._cascadeData[I0];V+=u0,q++}W.sun[F]=n,F++}else if(S.isDirectionalLight){let n=Q.get(S);if(n.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let $0=S.shadow,U0=$.get(S);U0.shadowIntensity=$0.intensity,U0.shadowBias=$0.bias,U0.shadowNormalBias=$0.normalBias,U0.shadowRadius=$0.radius,U0.shadowMapSize=$0.mapSize,W.directionalShadow[R]=U0,W.directionalShadowMap[R]=K0,W.directionalShadowMatrix[R]=S.shadow.matrix,M++}W.directional[R]=n,R++}else if(S.isSpotLight){let n=Q.get(S);n.position.setFromMatrixPosition(S.matrixWorld),n.color.copy(i).multiplyScalar(c),n.distance=x,n.coneCos=Math.cos(S.angle),n.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),n.decay=S.decay,W.spot[z]=n;let $0=S.shadow;if(S.map){if(W.spotLightMap[B]=S.map,B++,$0.updateMatrices(S),S.castShadow)A++}if(W.spotLightMatrix[z]=$0.matrix,S.castShadow){let U0=$.get(S);U0.shadowIntensity=$0.intensity,U0.shadowBias=$0.bias,U0.shadowNormalBias=$0.normalBias,U0.shadowRadius=$0.radius,U0.shadowMapSize=$0.mapSize,W.spotShadow[z]=U0,W.spotShadowMap[z]=K0,w++}z++}else if(S.isRectAreaLight){let n=Q.get(S);n.color.copy(i).multiplyScalar(c),n.halfWidth.set(S.width*0.5,0,0),n.halfHeight.set(0,S.height*0.5,0),W.rectArea[D]=n,D++}else if(S.isPointLight){let n=Q.get(S);if(n.color.copy(S.color).multiplyScalar(S.intensity),n.distance=S.distance,n.decay=S.decay,S.castShadow){let $0=S.shadow,U0=$.get(S);U0.shadowIntensity=$0.intensity,U0.shadowBias=$0.bias,U0.shadowNormalBias=$0.normalBias,U0.shadowRadius=$0.radius,U0.shadowMapSize=$0.mapSize,U0.shadowCameraNear=$0.camera.near,U0.shadowCameraFar=$0.camera.far,W.pointShadow[O]=U0,W.pointShadowMap[O]=K0,W.pointShadowMatrix[O]=S.shadow.matrix,I++}W.point[O]=n,O++}else if(S.isHemisphereLight){let n=Q.get(S);n.skyColor.copy(S.color).multiplyScalar(c),n.groundColor.copy(S.groundColor).multiplyScalar(c),W.hemi[L]=n,L++}}if(D>0)if(J.has("OES_texture_float_linear")===!0)W.rectAreaLTC1=P0.LTC_FLOAT_1,W.rectAreaLTC2=P0.LTC_FLOAT_2;else W.rectAreaLTC1=P0.LTC_HALF_1,W.rectAreaLTC2=P0.LTC_HALF_2;W.ambient[0]=N,W.ambient[1]=E,W.ambient[2]=G;let y=W.hash;if(y.sunLength!==F||y.directionalLength!==R||y.pointLength!==O||y.spotLength!==z||y.rectAreaLength!==D||y.hemiLength!==L||y.numSunShadows!==q||y.numDirectionalShadows!==M||y.numPointShadows!==I||y.numSpotShadows!==w||y.numSpotMaps!==B||y.numLightProbes!==d)W.sun.length=F,W.directional.length=R,W.spot.length=z,W.rectArea.length=D,W.point.length=O,W.hemi.length=L,W.sunShadow.length=q,W.sunShadowMap.length=q,W.sunShadowMatrix.length=V,W.sunShadowCascade.length=V,W.directionalShadow.length=M,W.directionalShadowMap.length=M,W.directionalShadowMatrix.length=M,W.pointShadow.length=I,W.pointShadowMap.length=I,W.pointShadowMatrix.length=I,W.spotShadow.length=w,W.spotShadowMap.length=w,W.spotLightMatrix.length=w+B-A,W.spotLightMap.length=B,W.numSpotLightShadowsWithMaps=A,W.numLightProbes=d,y.sunLength=F,y.directionalLength=R,y.pointLength=O,y.spotLength=z,y.rectAreaLength=D,y.hemiLength=L,y.numSunShadows=q,y.numDirectionalShadows=M,y.numPointShadows=I,y.numSpotShadows=w,y.numSpotMaps=B,y.numLightProbes=d,W.version=zq++}function X(U,N){let E=0,G=0,F=0,q=0,V=0,R=0,O=N.matrixWorldInverse;for(let z=0,D=U.length;z<D;z++){let L=U[z];if(L.isSunLight){let M=W.sun[E];M.direction.setFromMatrixPosition(L.matrixWorld),M.direction.transformDirection(O),E++}else if(L.isDirectionalLight){let M=W.directional[G];M.direction.setFromMatrixPosition(L.matrixWorld),Z.setFromMatrixPosition(L.target.matrixWorld),M.direction.sub(Z),M.direction.transformDirection(O),G++}else if(L.isSpotLight){let M=W.spot[q];M.position.setFromMatrixPosition(L.matrixWorld),M.position.applyMatrix4(O),M.direction.setFromMatrixPosition(L.matrixWorld),Z.setFromMatrixPosition(L.target.matrixWorld),M.direction.sub(Z),M.direction.transformDirection(O),q++}else if(L.isRectAreaLight){let M=W.rectArea[V];M.position.setFromMatrixPosition(L.matrixWorld),M.position.applyMatrix4(O),H.identity(),K.copy(L.matrixWorld),K.premultiply(O),H.extractRotation(K),M.halfWidth.set(L.width*0.5,0,0),M.halfHeight.set(0,L.height*0.5,0),M.halfWidth.applyMatrix4(H),M.halfHeight.applyMatrix4(H),V++}else if(L.isPointLight){let M=W.point[F];M.position.setFromMatrixPosition(L.matrixWorld),M.position.applyMatrix4(O),F++}else if(L.isHemisphereLight){let M=W.hemi[R];M.direction.setFromMatrixPosition(L.matrixWorld),M.direction.transformDirection(O),R++}}}return{setup:Y,setupView:X,state:W}}function KU(J){let Q=new Iq(J),$=[],W=[],Z=[];function K(G){E.camera=G,$.length=0,W.length=0,Z.length=0}function H(G){$.push(G)}function Y(G){W.push(G)}function X(G){Z.push(G)}function U(){Q.setup($)}function N(G){Q.setupView($,G)}let E={lightsArray:$,shadowsArray:W,lightProbeGridArray:Z,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:K,state:E,setupLights:U,setupLightsView:N,pushLight:H,pushShadow:Y,pushLightProbeGrid:X}}function Aq(J){let Q=new WeakMap;function $(Z,K=0){let H=Q.get(Z),Y;if(H===void 0)Y=new KU(J),Q.set(Z,[Y]);else if(K>=H.length)Y=new KU(J),H.push(Y);else Y=H[K];return Y}function W(){Q=new WeakMap}return{get:$,dispose:W}}var _q=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tq=`uniform sampler2D shadow_pass;
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
}`,wq=[new T(1,0,0),new T(-1,0,0),new T(0,1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1)],Sq=[new T(0,-1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1),new T(0,-1,0),new T(0,-1,0)],HU=new n0,eQ=new T,tK=new T;function jq(J,Q,$){let W=new pQ,Z=new W0,K=new W0,H=new wJ,Y=new SK,X=new jK,U={},N=$.maxTextureSize,E={[H7]:L8,[L8]:H7,[W8]:W8},G=new nJ({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new W0},radius:{value:4}},vertexShader:_q,fragmentShader:Tq}),F=G.clone();F.defines.HORIZONTAL_PASS=1;let q=new jJ;q.setAttribute("position",new oJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let V=new z0(q,G),R=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=y7;let O=this.type;this.render=function(I,w,B){if(R.enabled===!1)return;if(R.autoUpdate===!1&&R.needsUpdate===!1)return;if(I.length===0)return;if(this.type===SY)g0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=y7;let A=J.getRenderTarget(),d=J.getActiveCubeFace(),y=J.getActiveMipmapLevel(),b=J.state;if(b.setBlending(s8),b.buffers.depth.getReversed()===!0)b.buffers.color.setClear(0,0,0,0);else b.buffers.color.setClear(1,1,1,1);b.buffers.depth.setTest(!0),b.setScissorTest(!1);let J0=O!==this.type;if(J0)w.traverse(function(S){if(S.material)if(Array.isArray(S.material))S.material.forEach((i)=>i.needsUpdate=!0);else S.material.needsUpdate=!0});for(let S=0,i=I.length;S<i;S++){let c=I[S],x=c.shadow;if(x===void 0){g0("WebGLShadowMap:",c,"has no shadow.");continue}if(x.autoUpdate===!1&&x.needsUpdate===!1)continue;Z.copy(x.mapSize);let K0=x.getFrameExtents();if(Z.multiply(K0),K.copy(x.mapSize),Z.x>N||Z.y>N){if(Z.x>N)K.x=Math.floor(N/K0.x),Z.x=K.x*K0.x,x.mapSize.x=K.x;if(Z.y>N)K.y=Math.floor(N/K0.y),Z.y=K.y*K0.y,x.mapSize.y=K.y}let n=J.state.buffers.depth.getReversed();if(x.camera._reversedDepth=n,x.map===null||J0===!0){if(x.map!==null){if(x.map.depthTexture!==null)x.map.depthTexture.dispose(),x.map.depthTexture=null;x.map.dispose()}if(this.type===j6){if(c.isPointLight){g0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}x.map=new eJ(Z.x,Z.y,{format:g7,type:E8,minFilter:N8,magFilter:N8,generateMipmaps:!1}),x.map.texture.name=c.name+".shadowMap",x.map.depthTexture=new d7(Z.x,Z.y,x9),x.map.depthTexture.name=c.name+".shadowMapDepth",x.map.depthTexture.format=b7,x.map.depthTexture.compareFunction=null,x.map.depthTexture.minFilter=U9,x.map.depthTexture.magFilter=U9}else{if(c.isPointLight)x.map=new QH(Z.x),x.map.depthTexture=new zK(Z.x,X7);else x.map=new eJ(Z.x,Z.y),x.map.depthTexture=new d7(Z.x,Z.y,X7);if(x.map.depthTexture.name=c.name+".shadowMap",x.map.depthTexture.format=b7,this.type===y7)x.map.depthTexture.compareFunction=n?XW:YW,x.map.depthTexture.minFilter=N8,x.map.depthTexture.magFilter=N8;else x.map.depthTexture.compareFunction=null,x.map.depthTexture.minFilter=U9,x.map.depthTexture.magFilter=U9}x.camera.updateProjectionMatrix()}if(x.map.isWebGLCubeRenderTarget!==!0&&(x.map.width!==Z.x||x.map.height!==Z.y))x.map.setSize(Z.x,Z.y);let $0=x.map.isWebGLCubeRenderTarget?6:x.getViewportCount();if(c.isPointLight!==!0)x.updateMatrices(c,B);for(let U0=0;U0<$0;U0++){let u0=x.getCamera(U0);if(c.isPointLight){let{camera:I0,matrix:i0}=x,s0=c.distance||I0.far;if(s0!==I0.far)I0.far=s0,I0.updateProjectionMatrix();eQ.setFromMatrixPosition(c.matrixWorld),I0.position.copy(eQ),tK.copy(I0.position),tK.add(wq[U0]),I0.up.copy(Sq[U0]),I0.lookAt(tK),I0.updateMatrixWorld(),i0.makeTranslation(-eQ.x,-eQ.y,-eQ.z),HU.multiplyMatrices(I0.projectionMatrix,I0.matrixWorldInverse),x._frustum.setFromProjectionMatrix(HU,I0.coordinateSystem,I0.reversedDepth)}if(x.map.isWebGLCubeRenderTarget)J.setRenderTarget(x.map,U0),J.clear();else{if(U0===0)J.setRenderTarget(x.map),J.clear();let I0=x.getViewport(U0);H.set(K.x*I0.x,K.y*I0.y,K.x*I0.z,K.y*I0.w),b.viewport(H)}W=x.getFrustum(U0),L(w,B,u0,c,this.type)}if(x.isPointLightShadow!==!0&&this.type===j6)z(x,B);x.needsUpdate=!1}O=this.type,R.needsUpdate=!1,J.setRenderTarget(A,d,y)};function z(I,w){let B=Q.update(V);if(G.defines.VSM_SAMPLES!==I.blurSamples)G.defines.VSM_SAMPLES=I.blurSamples,F.defines.VSM_SAMPLES=I.blurSamples,G.needsUpdate=!0,F.needsUpdate=!0;if(I.mapPass===null)I.mapPass=new eJ(Z.x,Z.y,{format:g7,type:E8});else if(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)I.mapPass.setSize(I.map.width,I.map.height);G.uniforms.shadow_pass.value=I.map.depthTexture,G.uniforms.resolution.value.set(I.map.width,I.map.height),G.uniforms.radius.value=I.radius,J.setRenderTarget(I.mapPass),J.clear(),J.renderBufferDirect(w,null,B,G,V,null),F.uniforms.shadow_pass.value=I.mapPass.texture,F.uniforms.resolution.value.set(I.map.width,I.map.height),F.uniforms.radius.value=I.radius,J.setRenderTarget(I.map),J.clear(),J.renderBufferDirect(w,null,B,F,V,null)}function D(I,w,B,A){let d=null,y=B.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(y!==void 0)d=y;else if(d=B.isPointLight===!0?X:Y,J.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let b=d.uuid,J0=w.uuid,S=U[b];if(S===void 0)S={},U[b]=S;let i=S[J0];if(i===void 0)i=d.clone(),S[J0]=i,w.addEventListener("dispose",M);d=i}if(d.visible=w.visible,d.wireframe=w.wireframe,A===j6)d.side=w.shadowSide!==null?w.shadowSide:w.side;else d.side=w.shadowSide!==null?w.shadowSide:E[w.side];if(d.alphaMap=w.alphaMap,d.alphaTest=w.alphaToCoverage===!0?0.5:w.alphaTest,d.map=w.map,d.clipShadows=w.clipShadows,d.clippingPlanes=w.clippingPlanes,d.clipIntersection=w.clipIntersection,d.displacementMap=w.displacementMap,d.displacementScale=w.displacementScale,d.displacementBias=w.displacementBias,d.wireframeLinewidth=w.wireframeLinewidth,d.linewidth=w.linewidth,B.isPointLight===!0&&d.isMeshDistanceMaterial===!0){let b=J.properties.get(d);b.light=B}return d}function L(I,w,B,A,d){if(I.visible===!1)return;if(I.layers.test(w.layers)&&(I.isMesh||I.isLine||I.isPoints)){if((I.castShadow||I.receiveShadow&&d===j6)&&(!I.frustumCulled||I.intersectsFrustum(W))){I.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,I.matrixWorld);let J0=Q.update(I),S=I.material;if(Array.isArray(S)){let i=J0.groups;for(let c=0,x=i.length;c<x;c++){let K0=i[c],n=S[K0.materialIndex];if(n&&n.visible){let $0=D(I,n,A,d);I.onBeforeShadow(J,I,w,B,J0,$0,K0),J.renderBufferDirect(B,null,J0,$0,I,K0),I.onAfterShadow(J,I,w,B,J0,$0,K0)}}}else if(S.visible){let i=D(I,S,A,d);I.onBeforeShadow(J,I,w,B,J0,i,null),J.renderBufferDirect(B,null,J0,i,I,null),I.onAfterShadow(J,I,w,B,J0,i,null)}}}let b=I.children;for(let J0=0,S=b.length;J0<S;J0++)L(b[J0],w,B,A,d)}function M(I){I.target.removeEventListener("dispose",M);for(let B in U){let A=U[B],d=I.target.uuid;if(d in A)A[d].dispose(),delete A[d]}}}function yq(J,Q){function $(){let h=!1,V0=new wJ,e=null,k0=new wJ(0,0,0,0);return{setMask:function(T0){if(e!==T0&&!h)J.colorMask(T0,T0,T0,T0),e=T0},setLocked:function(T0){h=T0},setClear:function(T0,X0,M0,r0,AJ){if(AJ===!0)T0*=r0,X0*=r0,M0*=r0;if(V0.set(T0,X0,M0,r0),k0.equals(V0)===!1)J.clearColor(T0,X0,M0,r0),k0.copy(V0)},reset:function(){h=!1,e=null,k0.set(-1,0,0,0)}}}function W(){let h=!1,V0=!1,e=null,k0=null,T0=null;return{setReversed:function(X0){if(V0!==X0){let M0=Q.get("EXT_clip_control");if(X0)M0.clipControlEXT(M0.LOWER_LEFT_EXT,M0.ZERO_TO_ONE_EXT);else M0.clipControlEXT(M0.LOWER_LEFT_EXT,M0.NEGATIVE_ONE_TO_ONE_EXT);V0=X0;let r0=T0;T0=null,this.setClear(r0)}},getReversed:function(){return V0},setTest:function(X0){if(X0)q0(J.DEPTH_TEST);else l0(J.DEPTH_TEST)},setMask:function(X0){if(e!==X0&&!h)J.depthMask(X0),e=X0},setFunc:function(X0){if(V0)X0=PX[X0];if(k0!==X0){switch(X0){case tY:J.depthFunc(J.NEVER);break;case eY:J.depthFunc(J.ALWAYS);break;case JX:J.depthFunc(J.LESS);break;case SZ:J.depthFunc(J.LEQUAL);break;case QX:J.depthFunc(J.EQUAL);break;case $X:J.depthFunc(J.GEQUAL);break;case WX:J.depthFunc(J.GREATER);break;case ZX:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}k0=X0}},setLocked:function(X0){h=X0},setClear:function(X0){if(T0!==X0){if(T0=X0,V0)X0=1-X0;J.clearDepth(X0)}},reset:function(){h=!1,e=null,k0=null,T0=null,V0=!1}}}function Z(){let h=!1,V0=null,e=null,k0=null,T0=null,X0=null,M0=null,r0=null,AJ=null;return{setTest:function(LJ){if(!h)if(LJ)q0(J.STENCIL_TEST);else l0(J.STENCIL_TEST)},setMask:function(LJ){if(V0!==LJ&&!h)J.stencilMask(LJ),V0=LJ},setFunc:function(LJ,xJ,h8){if(e!==LJ||k0!==xJ||T0!==h8)J.stencilFunc(LJ,xJ,h8),e=LJ,k0=xJ,T0=h8},setOp:function(LJ,xJ,h8){if(X0!==LJ||M0!==xJ||r0!==h8)J.stencilOp(LJ,xJ,h8),X0=LJ,M0=xJ,r0=h8},setLocked:function(LJ){h=LJ},setClear:function(LJ){if(AJ!==LJ)J.clearStencil(LJ),AJ=LJ},reset:function(){h=!1,V0=null,e=null,k0=null,T0=null,X0=null,M0=null,r0=null,AJ=null}}}let K=new $,H=new W,Y=new Z,X=new WeakMap,U=new WeakMap,N={},E={},G={},F=new WeakMap,q=[],V=null,R=!1,O=null,z=null,D=null,L=null,M=null,I=null,w=null,B=new y0(0,0,0),A=0,d=!1,y=null,b=null,J0=null,S=null,i=null,c=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),x=!1,K0=0,n=J.getParameter(J.VERSION);if(n.indexOf("WebGL")!==-1)K0=parseFloat(/^WebGL (\d)/.exec(n)[1]),x=K0>=1;else if(n.indexOf("OpenGL ES")!==-1)K0=parseFloat(/^OpenGL ES (\d)/.exec(n)[1]),x=K0>=2;let $0=null,U0={},u0=J.getParameter(J.SCISSOR_BOX),I0=J.getParameter(J.VIEWPORT),i0=new wJ().fromArray(u0),s0=new wJ().fromArray(I0);function o(h,V0,e,k0){let T0=new Uint8Array(4),X0=J.createTexture();J.bindTexture(h,X0),J.texParameteri(h,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(h,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let M0=0;M0<e;M0++)if(h===J.TEXTURE_3D||h===J.TEXTURE_2D_ARRAY)J.texImage3D(V0,0,J.RGBA,1,1,k0,0,J.RGBA,J.UNSIGNED_BYTE,T0);else J.texImage2D(V0+M0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,T0);return X0}let E0={};E0[J.TEXTURE_2D]=o(J.TEXTURE_2D,J.TEXTURE_2D,1),E0[J.TEXTURE_CUBE_MAP]=o(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),E0[J.TEXTURE_2D_ARRAY]=o(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),E0[J.TEXTURE_3D]=o(J.TEXTURE_3D,J.TEXTURE_3D,1,1),K.setClear(0,0,0,1),H.setClear(1),Y.setClear(0),q0(J.DEPTH_TEST),H.setFunc(SZ),rJ(!1),vJ(_Z),q0(J.CULL_FACE),DJ(s8);function q0(h){if(N[h]!==!0)J.enable(h),N[h]=!0}function l0(h){if(N[h]!==!1)J.disable(h),N[h]=!1}function c0(h,V0){if(G[h]!==V0){if(J.bindFramebuffer(h,V0),G[h]=V0,h===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=V0;if(h===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=V0;return!0}return!1}function p0(h,V0){let e=q,k0=!1;if(h){if(e=F.get(V0),e===void 0)e=[],F.set(V0,e);let T0=h.textures;if(e.length!==T0.length||e[0]!==J.COLOR_ATTACHMENT0){for(let X0=0,M0=T0.length;X0<M0;X0++)e[X0]=J.COLOR_ATTACHMENT0+X0;e.length=T0.length,k0=!0}}else if(e[0]!==J.BACK)e[0]=J.BACK,k0=!0;if(k0)J.drawBuffers(e)}function aJ(h){if(V!==h)return J.useProgram(h),V=h,!0;return!1}let e0={[y6]:J.FUNC_ADD,[yY]:J.FUNC_SUBTRACT,[vY]:J.FUNC_REVERSE_SUBTRACT};e0[fY]=J.MIN,e0[hY]=J.MAX;let KJ={[bY]:J.ZERO,[xY]:J.ONE,[gY]:J.SRC_COLOR,[mY]:J.SRC_ALPHA,[sY]:J.SRC_ALPHA_SATURATE,[cY]:J.DST_COLOR,[uY]:J.DST_ALPHA,[pY]:J.ONE_MINUS_SRC_COLOR,[lY]:J.ONE_MINUS_SRC_ALPHA,[nY]:J.ONE_MINUS_DST_COLOR,[dY]:J.ONE_MINUS_DST_ALPHA,[iY]:J.CONSTANT_COLOR,[oY]:J.ONE_MINUS_CONSTANT_COLOR,[aY]:J.CONSTANT_ALPHA,[rY]:J.ONE_MINUS_CONSTANT_ALPHA};function DJ(h,V0,e,k0,T0,X0,M0,r0,AJ,LJ){if(h===s8){if(R===!0)l0(J.BLEND),R=!1;return}if(R===!1)q0(J.BLEND),R=!0;if(h!==jY){if(h!==O||LJ!==d){if(z!==y6||M!==y6)J.blendEquation(J.FUNC_ADD),z=y6,M=y6;if(LJ)switch(h){case PQ:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case M9:J.blendFunc(J.ONE,J.ONE);break;case TZ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case wZ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:o0("WebGLState: Invalid blending: ",h);break}else switch(h){case PQ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case M9:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case TZ:o0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wZ:o0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:o0("WebGLState: Invalid blending: ",h);break}D=null,L=null,I=null,w=null,B.set(0,0,0),A=0,O=h,d=LJ}return}if(T0=T0||V0,X0=X0||e,M0=M0||k0,V0!==z||T0!==M)J.blendEquationSeparate(e0[V0],e0[T0]),z=V0,M=T0;if(e!==D||k0!==L||X0!==I||M0!==w)J.blendFuncSeparate(KJ[e],KJ[k0],KJ[X0],KJ[M0]),D=e,L=k0,I=X0,w=M0;if(r0.equals(B)===!1||AJ!==A)J.blendColor(r0.r,r0.g,r0.b,AJ),B.copy(r0),A=AJ;O=h,d=!1}function FJ(h,V0){h.side===W8?l0(J.CULL_FACE):q0(J.CULL_FACE);let e=h.side===L8;if(V0)e=!e;rJ(e),h.blending===PQ&&h.transparent===!1?DJ(s8):DJ(h.blending,h.blendEquation,h.blendSrc,h.blendDst,h.blendEquationAlpha,h.blendSrcAlpha,h.blendDstAlpha,h.blendColor,h.blendAlpha,h.premultipliedAlpha),H.setFunc(h.depthFunc),H.setTest(h.depthTest),H.setMask(h.depthWrite),K.setMask(h.colorWrite);let k0=h.stencilWrite;if(Y.setTest(k0),k0)Y.setMask(h.stencilWriteMask),Y.setFunc(h.stencilFunc,h.stencilRef,h.stencilFuncMask),Y.setOp(h.stencilFail,h.stencilZFail,h.stencilZPass);sJ(h.polygonOffset,h.polygonOffsetFactor,h.polygonOffsetUnits),h.alphaToCoverage===!0?q0(J.SAMPLE_ALPHA_TO_COVERAGE):l0(J.SAMPLE_ALPHA_TO_COVERAGE)}function rJ(h){if(y!==h){if(h)J.frontFace(J.CW);else J.frontFace(J.CCW);y=h}}function vJ(h){if(h!==TY){if(q0(J.CULL_FACE),h!==b)if(h===_Z)J.cullFace(J.BACK);else if(h===wY)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else l0(J.CULL_FACE);b=h}function q8(h){if(h!==J0){if(x)J.lineWidth(h);J0=h}}function sJ(h,V0,e){if(h){if(q0(J.POLYGON_OFFSET_FILL),S!==V0||i!==e){if(S=V0,i=e,H.getReversed())V0=-V0;J.polygonOffset(V0,e)}}else l0(J.POLYGON_OFFSET_FILL)}function iJ(h){if(h)q0(J.SCISSOR_TEST);else l0(J.SCISSOR_TEST)}function v(h){if(h===void 0)h=J.TEXTURE0+c-1;if($0!==h)J.activeTexture(h),$0=h}function O8(h,V0,e){if(e===void 0)if($0===null)e=J.TEXTURE0+c-1;else e=$0;let k0=U0[e];if(k0===void 0)k0={type:void 0,texture:void 0},U0[e]=k0;if(k0.type!==h||k0.texture!==V0){if($0!==e)J.activeTexture(e),$0=e;J.bindTexture(h,V0||E0[h]),k0.type=h,k0.texture=V0}}function kJ(){let h=U0[$0];if(h!==void 0&&h.type!==void 0)J.bindTexture(h.type,null),h.type=void 0,h.texture=void 0}function bJ(){try{J.compressedTexImage2D(...arguments)}catch(h){o0("WebGLState:",h)}}function P(){try{J.compressedTexImage3D(...arguments)}catch(h){o0("WebGLState:",h)}}function k(){try{J.texSubImage2D(...arguments)}catch(h){o0("WebGLState:",h)}}function j(){try{J.texSubImage3D(...arguments)}catch(h){o0("WebGLState:",h)}}function l(){try{J.compressedTexSubImage2D(...arguments)}catch(h){o0("WebGLState:",h)}}function Y0(){try{J.compressedTexSubImage3D(...arguments)}catch(h){o0("WebGLState:",h)}}function N0(){try{J.texStorage2D(...arguments)}catch(h){o0("WebGLState:",h)}}function D0(){try{J.texStorage3D(...arguments)}catch(h){o0("WebGLState:",h)}}function a(){try{J.texImage2D(...arguments)}catch(h){o0("WebGLState:",h)}}function t(){try{J.texImage3D(...arguments)}catch(h){o0("WebGLState:",h)}}function C0(h){if(E[h]!==void 0)return E[h];else return J.getParameter(h)}function b0(h,V0){if(E[h]!==V0)J.pixelStorei(h,V0),E[h]=V0}function B0(h){if(i0.equals(h)===!1)J.scissor(h.x,h.y,h.z,h.w),i0.copy(h)}function F0(h){if(s0.equals(h)===!1)J.viewport(h.x,h.y,h.z,h.w),s0.copy(h)}function x0(h,V0){let e=U.get(V0);if(e===void 0)e=new WeakMap,U.set(V0,e);let k0=e.get(h);if(k0===void 0)k0=J.getUniformBlockIndex(V0,h.name),e.set(h,k0)}function m0(h,V0){let k0=U.get(V0).get(h);if(X.get(V0)!==k0)J.uniformBlockBinding(V0,k0,h.__bindingPointIndex),X.set(V0,k0)}function OJ(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),H.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),N={},E={},$0=null,U0={},G={},F=new WeakMap,q=[],V=null,R=!1,O=null,z=null,D=null,L=null,M=null,I=null,w=null,B=new y0(0,0,0),A=0,d=!1,y=null,b=null,J0=null,S=null,i=null,i0.set(0,0,J.canvas.width,J.canvas.height),s0.set(0,0,J.canvas.width,J.canvas.height),K.reset(),H.reset(),Y.reset()}return{buffers:{color:K,depth:H,stencil:Y},enable:q0,disable:l0,bindFramebuffer:c0,drawBuffers:p0,useProgram:aJ,setBlending:DJ,setMaterial:FJ,setFlipSided:rJ,setCullFace:vJ,setLineWidth:q8,setPolygonOffset:sJ,setScissorTest:iJ,activeTexture:v,bindTexture:O8,unbindTexture:kJ,compressedTexImage2D:bJ,compressedTexImage3D:P,texImage2D:a,texImage3D:t,pixelStorei:b0,getParameter:C0,updateUBOMapping:x0,uniformBlockBinding:m0,texStorage2D:N0,texStorage3D:D0,texSubImage2D:k,texSubImage3D:j,compressedTexSubImage2D:l,compressedTexSubImage3D:Y0,scissor:B0,viewport:F0,reset:OJ}}function vq(J,Q,$,W,Z,K,H){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,X=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new W0,N=new WeakMap,E=new Set,G,F=new WeakMap,q=!1;try{q=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(P){}function V(P,k){return q?new OffscreenCanvas(P,k):_6("canvas")}function R(P,k,j){let l=1,Y0=bJ(P);if(Y0.width>j||Y0.height>j)l=j/Math.max(Y0.width,Y0.height);if(l<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let N0=Math.floor(l*Y0.width),D0=Math.floor(l*Y0.height);if(G===void 0)G=V(N0,D0);let a=k?V(N0,D0):G;return a.width=N0,a.height=D0,a.getContext("2d").drawImage(P,0,0,N0,D0),g0("WebGLRenderer: Texture has been resized from ("+Y0.width+"x"+Y0.height+") to ("+N0+"x"+D0+")."),a}else{if("data"in P)g0("WebGLRenderer: Image in DataTexture is too big ("+Y0.width+"x"+Y0.height+").");return P}return P}function O(P){return P.generateMipmaps}function z(P){J.generateMipmap(P)}function D(P){if(P.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(P.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function L(P,k,j,l,Y0,N0=!1){if(P!==null){if(J[P]!==void 0)return J[P];g0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let D0;if(l){if(D0=Q.get("EXT_texture_norm16"),!D0)g0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let a=k;if(k===J.RED){if(j===J.FLOAT)a=J.R32F;if(j===J.HALF_FLOAT)a=J.R16F;if(j===J.UNSIGNED_BYTE)a=J.R8;if(j===J.UNSIGNED_SHORT&&D0)a=D0.R16_EXT;if(j===J.SHORT&&D0)a=D0.R16_SNORM_EXT}if(k===J.RED_INTEGER){if(j===J.UNSIGNED_BYTE)a=J.R8UI;if(j===J.UNSIGNED_SHORT)a=J.R16UI;if(j===J.UNSIGNED_INT)a=J.R32UI;if(j===J.BYTE)a=J.R8I;if(j===J.SHORT)a=J.R16I;if(j===J.INT)a=J.R32I}if(k===J.RG){if(j===J.FLOAT)a=J.RG32F;if(j===J.HALF_FLOAT)a=J.RG16F;if(j===J.UNSIGNED_BYTE)a=J.RG8;if(j===J.UNSIGNED_SHORT&&D0)a=D0.RG16_EXT;if(j===J.SHORT&&D0)a=D0.RG16_SNORM_EXT}if(k===J.RG_INTEGER){if(j===J.UNSIGNED_BYTE)a=J.RG8UI;if(j===J.UNSIGNED_SHORT)a=J.RG16UI;if(j===J.UNSIGNED_INT)a=J.RG32UI;if(j===J.BYTE)a=J.RG8I;if(j===J.SHORT)a=J.RG16I;if(j===J.INT)a=J.RG32I}if(k===J.RGB_INTEGER){if(j===J.UNSIGNED_BYTE)a=J.RGB8UI;if(j===J.UNSIGNED_SHORT)a=J.RGB16UI;if(j===J.UNSIGNED_INT)a=J.RGB32UI;if(j===J.BYTE)a=J.RGB8I;if(j===J.SHORT)a=J.RGB16I;if(j===J.INT)a=J.RGB32I}if(k===J.RGBA_INTEGER){if(j===J.UNSIGNED_BYTE)a=J.RGBA8UI;if(j===J.UNSIGNED_SHORT)a=J.RGBA16UI;if(j===J.UNSIGNED_INT)a=J.RGBA32UI;if(j===J.BYTE)a=J.RGBA8I;if(j===J.SHORT)a=J.RGBA16I;if(j===J.INT)a=J.RGBA32I}if(k===J.RGB){if(j===J.UNSIGNED_SHORT&&D0)a=D0.RGB16_EXT;if(j===J.SHORT&&D0)a=D0.RGB16_SNORM_EXT;if(j===J.UNSIGNED_INT_5_9_9_9_REV)a=J.RGB9_E5;if(j===J.UNSIGNED_INT_10F_11F_11F_REV)a=J.R11F_G11F_B10F}if(k===J.RGBA){let t=N0?LK:ZJ.getTransfer(Y0);if(j===J.FLOAT)a=J.RGBA32F;if(j===J.HALF_FLOAT)a=J.RGBA16F;if(j===J.UNSIGNED_BYTE)a=t===SJ?J.SRGB8_ALPHA8:J.RGBA8;if(j===J.UNSIGNED_SHORT&&D0)a=D0.RGBA16_EXT;if(j===J.SHORT&&D0)a=D0.RGBA16_SNORM_EXT;if(j===J.UNSIGNED_SHORT_4_4_4_4)a=J.RGBA4;if(j===J.UNSIGNED_SHORT_5_5_5_1)a=J.RGB5_A1}if(a===J.R16F||a===J.R32F||a===J.RG16F||a===J.RG32F||a===J.RGBA16F||a===J.RGBA32F)Q.get("EXT_color_buffer_float");return a}function M(P,k){let j;if(P){if(k===null||k===X7||k===b6)j=J.DEPTH24_STENCIL8;else if(k===x9)j=J.DEPTH32F_STENCIL8;else if(k===yQ)j=J.DEPTH24_STENCIL8,g0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(k===null||k===X7||k===b6)j=J.DEPTH_COMPONENT24;else if(k===x9)j=J.DEPTH_COMPONENT32F;else if(k===yQ)j=J.DEPTH_COMPONENT16;return j}function I(P,k){if(O(P)===!0||P.isFramebufferTexture&&P.minFilter!==U9&&P.minFilter!==N8)return Math.log2(Math.max(k.width,k.height))+1;else if(P.mipmaps!==void 0&&P.mipmaps.length>0)return P.mipmaps.length;else if(P.isCompressedTexture&&Array.isArray(P.image))return k.mipmaps.length;else return 1}function w(P){let k=P.target;if(k.removeEventListener("dispose",w),A(k),k.isVideoTexture)N.delete(k);if(k.isHTMLTexture)E.delete(k)}function B(P){let k=P.target;k.removeEventListener("dispose",B),y(k)}function A(P){let k=W.get(P);if(k.__webglInit===void 0)return;let j=P.source,l=F.get(j);if(l){let Y0=l[k.__cacheKey];if(Y0.usedTimes--,Y0.usedTimes===0)d(P);if(Object.keys(l).length===0)F.delete(j)}W.remove(P)}function d(P){let k=W.get(P);J.deleteTexture(k.__webglTexture);let j=P.source,l=F.get(j);delete l[k.__cacheKey],H.memory.textures--}function y(P){let k=W.get(P);if(P.depthTexture)P.depthTexture.dispose(),W.remove(P.depthTexture);if(P.isWebGLCubeRenderTarget)for(let l=0;l<6;l++){if(Array.isArray(k.__webglFramebuffer[l]))for(let Y0=0;Y0<k.__webglFramebuffer[l].length;Y0++)J.deleteFramebuffer(k.__webglFramebuffer[l][Y0]);else J.deleteFramebuffer(k.__webglFramebuffer[l]);if(k.__webglDepthbuffer)J.deleteRenderbuffer(k.__webglDepthbuffer[l])}else{if(Array.isArray(k.__webglFramebuffer))for(let l=0;l<k.__webglFramebuffer.length;l++)J.deleteFramebuffer(k.__webglFramebuffer[l]);else J.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer)J.deleteRenderbuffer(k.__webglDepthbuffer);if(k.__webglMultisampledFramebuffer)J.deleteFramebuffer(k.__webglMultisampledFramebuffer);if(k.__webglColorRenderbuffer){for(let l=0;l<k.__webglColorRenderbuffer.length;l++)if(k.__webglColorRenderbuffer[l])J.deleteRenderbuffer(k.__webglColorRenderbuffer[l])}if(k.__webglDepthRenderbuffer)J.deleteRenderbuffer(k.__webglDepthRenderbuffer)}let j=P.textures;for(let l=0,Y0=j.length;l<Y0;l++){let N0=W.get(j[l]);if(N0.__webglTexture)J.deleteTexture(N0.__webglTexture),H.memory.textures--;W.remove(j[l])}W.remove(P)}let b=0;function J0(){b=0}function S(){return b}function i(P){b=P}function c(){let P=b;if(P>=Z.maxTextures)g0("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+Z.maxTextures);return b+=1,P}function x(P){let k=[];return k.push(P.wrapS),k.push(P.wrapT),k.push(P.wrapR||0),k.push(P.magFilter),k.push(P.minFilter),k.push(P.anisotropy),k.push(P.internalFormat),k.push(P.format),k.push(P.type),k.push(P.generateMipmaps),k.push(P.premultiplyAlpha),k.push(P.flipY),k.push(P.unpackAlignment),k.push(P.colorSpace),k.join()}function K0(P,k){let j=W.get(P);if(P.isVideoTexture)O8(P);if(P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&j.__version!==P.version){let l=P.image;if(l===null)g0("WebGLRenderer: Texture marked for update but no image data found.");else if(l.complete===!1)g0("WebGLRenderer: Texture marked for update but image is incomplete");else{l0(j,P,k);return}}else if(P.isExternalTexture)j.__webglTexture=P.sourceTexture?P.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,j.__webglTexture,J.TEXTURE0+k)}function n(P,k){let j=W.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){l0(j,P,k);return}else if(P.isExternalTexture)j.__webglTexture=P.sourceTexture?P.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,j.__webglTexture,J.TEXTURE0+k)}function $0(P,k){let j=W.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&j.__version!==P.version){l0(j,P,k);return}$.bindTexture(J.TEXTURE_3D,j.__webglTexture,J.TEXTURE0+k)}function U0(P,k){let j=W.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&j.__version!==P.version){c0(j,P,k);return}$.bindTexture(J.TEXTURE_CUBE_MAP,j.__webglTexture,J.TEXTURE0+k)}let u0={[Y7]:J.REPEAT,[f6]:J.CLAMP_TO_EDGE,[t$]:J.MIRRORED_REPEAT},I0={[U9]:J.NEAREST,[e$]:J.NEAREST_MIPMAP_NEAREST,[h7]:J.NEAREST_MIPMAP_LINEAR,[N8]:J.LINEAR,[h6]:J.LINEAR_MIPMAP_NEAREST,[C9]:J.LINEAR_MIPMAP_LINEAR},i0={[RX]:J.NEVER,[kX]:J.ALWAYS,[LX]:J.LESS,[YW]:J.LEQUAL,[VX]:J.EQUAL,[XW]:J.GEQUAL,[DX]:J.GREATER,[BX]:J.NOTEQUAL};function s0(P,k){if(k.type===x9&&Q.has("OES_texture_float_linear")===!1&&(k.magFilter===N8||k.magFilter===h6||k.magFilter===h7||k.magFilter===C9||k.minFilter===N8||k.minFilter===h6||k.minFilter===h7||k.minFilter===C9))g0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(P,J.TEXTURE_WRAP_S,u0[k.wrapS]),J.texParameteri(P,J.TEXTURE_WRAP_T,u0[k.wrapT]),P===J.TEXTURE_3D||P===J.TEXTURE_2D_ARRAY)J.texParameteri(P,J.TEXTURE_WRAP_R,u0[k.wrapR]);if(J.texParameteri(P,J.TEXTURE_MAG_FILTER,I0[k.magFilter]),J.texParameteri(P,J.TEXTURE_MIN_FILTER,I0[k.minFilter]),k.compareFunction)J.texParameteri(P,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(P,J.TEXTURE_COMPARE_FUNC,i0[k.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(k.magFilter===U9)return;if(k.minFilter!==h7&&k.minFilter!==C9)return;if(k.type===x9&&Q.has("OES_texture_float_linear")===!1)return;if(k.anisotropy>1||W.get(k).__currentAnisotropy){let j=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(P,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(k.anisotropy,Z.getMaxAnisotropy())),W.get(k).__currentAnisotropy=k.anisotropy}}}function o(P,k){let j=!1;if(P.__webglInit===void 0)P.__webglInit=!0,k.addEventListener("dispose",w);let l=k.source,Y0=F.get(l);if(Y0===void 0)Y0={},F.set(l,Y0);let N0=x(k);if(N0!==P.__cacheKey){if(Y0[N0]===void 0)Y0[N0]={texture:J.createTexture(),usedTimes:0},H.memory.textures++,j=!0;Y0[N0].usedTimes++;let D0=Y0[P.__cacheKey];if(D0!==void 0){if(Y0[P.__cacheKey].usedTimes--,D0.usedTimes===0)d(k)}P.__cacheKey=N0,P.__webglTexture=Y0[N0].texture}return j}function E0(P,k,j){return Math.floor(Math.floor(P/j)/k)}function q0(P,k,j,l){let N0=P.updateRanges;if(N0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,k.width,k.height,j,l,k.data);else{N0.sort((b0,B0)=>b0.start-B0.start);let D0=0;for(let b0=1;b0<N0.length;b0++){let B0=N0[D0],F0=N0[b0],x0=B0.start+B0.count,m0=E0(F0.start,k.width,4),OJ=E0(B0.start,k.width,4);if(F0.start<=x0+1&&m0===OJ&&E0(F0.start+F0.count-1,k.width,4)===m0)B0.count=Math.max(B0.count,F0.start+F0.count-B0.start);else++D0,N0[D0]=F0}N0.length=D0+1;let a=$.getParameter(J.UNPACK_ROW_LENGTH),t=$.getParameter(J.UNPACK_SKIP_PIXELS),C0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,k.width);for(let b0=0,B0=N0.length;b0<B0;b0++){let F0=N0[b0],x0=Math.floor(F0.start/4),m0=Math.ceil(F0.count/4),OJ=x0%k.width,h=Math.floor(x0/k.width),V0=m0,e=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,OJ),$.pixelStorei(J.UNPACK_SKIP_ROWS,h),$.texSubImage2D(J.TEXTURE_2D,0,OJ,h,V0,1,j,l,k.data)}P.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,a),$.pixelStorei(J.UNPACK_SKIP_PIXELS,t),$.pixelStorei(J.UNPACK_SKIP_ROWS,C0)}}function l0(P,k,j){let l=J.TEXTURE_2D;if(k.isDataArrayTexture||k.isCompressedArrayTexture)l=J.TEXTURE_2D_ARRAY;if(k.isData3DTexture)l=J.TEXTURE_3D;let Y0=o(P,k),N0=k.source;$.bindTexture(l,P.__webglTexture,J.TEXTURE0+j);let D0=W.get(N0);if(N0.version!==D0.__version||Y0===!0){if($.activeTexture(J.TEXTURE0+j),(typeof ImageBitmap<"u"&&k.image instanceof ImageBitmap)===!1){let e=ZJ.getPrimaries(ZJ.workingColorSpace),k0=k.colorSpace===p7?null:ZJ.getPrimaries(k.colorSpace),T0=k.colorSpace===p7||e===k0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,k.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,T0)}$.pixelStorei(J.UNPACK_ALIGNMENT,k.unpackAlignment);let t=R(k.image,!1,Z.maxTextureSize);t=kJ(k,t);let C0=K.convert(k.format,k.colorSpace),b0=K.convert(k.type),B0=L(k.internalFormat,C0,b0,k.normalized,k.colorSpace,k.isVideoTexture);s0(l,k);let F0,x0=k.mipmaps,m0=k.isVideoTexture!==!0,OJ=D0.__version===void 0||Y0===!0,h=N0.dataReady,V0=I(k,t);if(k.isDepthTexture){if(B0=M(k.format===x7,k.type),OJ)if(m0)$.texStorage2D(J.TEXTURE_2D,1,B0,t.width,t.height);else $.texImage2D(J.TEXTURE_2D,0,B0,t.width,t.height,0,C0,b0,null)}else if(k.isDataTexture)if(x0.length>0){if(m0&&OJ)$.texStorage2D(J.TEXTURE_2D,V0,B0,x0[0].width,x0[0].height);for(let e=0,k0=x0.length;e<k0;e++)if(F0=x0[e],m0){if(h)$.texSubImage2D(J.TEXTURE_2D,e,0,0,F0.width,F0.height,C0,b0,F0.data)}else $.texImage2D(J.TEXTURE_2D,e,B0,F0.width,F0.height,0,C0,b0,F0.data);k.generateMipmaps=!1}else if(m0){if(OJ)$.texStorage2D(J.TEXTURE_2D,V0,B0,t.width,t.height);if(h)q0(k,t,C0,b0)}else $.texImage2D(J.TEXTURE_2D,0,B0,t.width,t.height,0,C0,b0,t.data);else if(k.isCompressedTexture)if(k.isCompressedArrayTexture){if(m0&&OJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,V0,B0,x0[0].width,x0[0].height,t.depth);for(let e=0,k0=x0.length;e<k0;e++)if(F0=x0[e],k.format!==z9)if(C0!==null)if(m0){if(h)if(k.layerUpdates.size>0){let T0=nK(F0.width,F0.height,k.format,k.type);for(let X0 of k.layerUpdates){let M0=F0.data.subarray(X0*T0/F0.data.BYTES_PER_ELEMENT,(X0+1)*T0/F0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,e,0,0,X0,F0.width,F0.height,1,C0,M0)}}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,e,0,0,0,F0.width,F0.height,t.depth,C0,F0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,e,B0,F0.width,F0.height,t.depth,0,F0.data,0,0);else g0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(m0){if(h)$.texSubImage3D(J.TEXTURE_2D_ARRAY,e,0,0,0,F0.width,F0.height,t.depth,C0,b0,F0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,e,B0,F0.width,F0.height,t.depth,0,C0,b0,F0.data);if(k.layerUpdates.size>0)k.clearLayerUpdates()}else{if(m0&&OJ)$.texStorage2D(J.TEXTURE_2D,V0,B0,x0[0].width,x0[0].height);for(let e=0,k0=x0.length;e<k0;e++)if(F0=x0[e],k.format!==z9)if(C0!==null)if(m0){if(h)$.compressedTexSubImage2D(J.TEXTURE_2D,e,0,0,F0.width,F0.height,C0,F0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,e,B0,F0.width,F0.height,0,F0.data);else g0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(m0){if(h)$.texSubImage2D(J.TEXTURE_2D,e,0,0,F0.width,F0.height,C0,b0,F0.data)}else $.texImage2D(J.TEXTURE_2D,e,B0,F0.width,F0.height,0,C0,b0,F0.data)}else if(k.isDataArrayTexture)if(m0){if(OJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,V0,B0,t.width,t.height,t.depth);if(h)if(k.layerUpdates.size>0){let e=nK(t.width,t.height,k.format,k.type);for(let k0 of k.layerUpdates){let T0=t.data.subarray(k0*e/t.data.BYTES_PER_ELEMENT,(k0+1)*e/t.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,k0,t.width,t.height,1,C0,b0,T0)}k.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,C0,b0,t.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,B0,t.width,t.height,t.depth,0,C0,b0,t.data);else if(k.isData3DTexture)if(m0){if(OJ)$.texStorage3D(J.TEXTURE_3D,V0,B0,t.width,t.height,t.depth);if(h)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,C0,b0,t.data)}else $.texImage3D(J.TEXTURE_3D,0,B0,t.width,t.height,t.depth,0,C0,b0,t.data);else if(k.isFramebufferTexture){if(OJ)if(m0)$.texStorage2D(J.TEXTURE_2D,V0,B0,t.width,t.height);else{let{width:e,height:k0}=t;for(let T0=0;T0<V0;T0++)$.texImage2D(J.TEXTURE_2D,T0,B0,e,k0,0,C0,b0,null),e>>=1,k0>>=1}}else if(k.isHTMLTexture){if("texElementImage2D"in J){let e=J.canvas;if(!e.hasAttribute("layoutsubtree"))e.setAttribute("layoutsubtree","true");if(t.parentNode!==e){e.appendChild(t),E.add(k),e.onpaint=(k0)=>{let T0=k0.changedElements;for(let X0 of E)if(T0.includes(X0.image))X0.needsUpdate=!0},e.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,t);else{let{RGBA:T0,RGBA:X0,UNSIGNED_BYTE:M0}=J;J.texElementImage2D(J.TEXTURE_2D,0,T0,X0,M0,t)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(x0.length>0){if(m0&&OJ){let e=bJ(x0[0]);$.texStorage2D(J.TEXTURE_2D,V0,B0,e.width,e.height)}for(let e=0,k0=x0.length;e<k0;e++)if(F0=x0[e],m0){if(h)$.texSubImage2D(J.TEXTURE_2D,e,0,0,C0,b0,F0)}else $.texImage2D(J.TEXTURE_2D,e,B0,C0,b0,F0);k.generateMipmaps=!1}else if(m0){if(OJ){let e=bJ(t);$.texStorage2D(J.TEXTURE_2D,V0,B0,e.width,e.height)}if(h)$.texSubImage2D(J.TEXTURE_2D,0,0,0,C0,b0,t)}else $.texImage2D(J.TEXTURE_2D,0,B0,C0,b0,t);if(O(k))z(l);if(D0.__version=N0.version,k.onUpdate)k.onUpdate(k)}P.__version=k.version}function c0(P,k,j){if(k.image.length!==6)return;let l=o(P,k),Y0=k.source;$.bindTexture(J.TEXTURE_CUBE_MAP,P.__webglTexture,J.TEXTURE0+j);let N0=W.get(Y0);if(Y0.version!==N0.__version||l===!0){$.activeTexture(J.TEXTURE0+j);let D0=ZJ.getPrimaries(ZJ.workingColorSpace),a=k.colorSpace===p7?null:ZJ.getPrimaries(k.colorSpace),t=k.colorSpace===p7||D0===a?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,k.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,k.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,t);let C0=k.isCompressedTexture||k.image[0].isCompressedTexture,b0=k.image[0]&&k.image[0].isDataTexture,B0=[];for(let X0=0;X0<6;X0++){if(!C0&&!b0)B0[X0]=R(k.image[X0],!0,Z.maxCubemapSize);else B0[X0]=b0?k.image[X0].image:k.image[X0];B0[X0]=kJ(k,B0[X0])}let F0=B0[0],x0=K.convert(k.format,k.colorSpace),m0=K.convert(k.type),OJ=L(k.internalFormat,x0,m0,k.normalized,k.colorSpace),h=k.isVideoTexture!==!0,V0=N0.__version===void 0||l===!0,e=Y0.dataReady,k0=I(k,F0);s0(J.TEXTURE_CUBE_MAP,k);let T0;if(C0){if(h&&V0)$.texStorage2D(J.TEXTURE_CUBE_MAP,k0,OJ,F0.width,F0.height);for(let X0=0;X0<6;X0++){T0=B0[X0].mipmaps;for(let M0=0;M0<T0.length;M0++){let r0=T0[M0];if(k.format!==z9)if(x0!==null)if(h){if(e)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+X0,M0,0,0,r0.width,r0.height,x0,r0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+X0,M0,OJ,r0.width,r0.height,0,r0.data);else g0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(h){if(e)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+X0,M0,0,0,r0.width,r0.height,x0,m0,r0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+X0,M0,OJ,r0.width,r0.height,0,x0,m0,r0.data)}}}else{if(T0=k.mipmaps,h&&V0){if(T0.length>0)k0++;let X0=bJ(B0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,k0,OJ,X0.width,X0.height)}for(let X0=0;X0<6;X0++)if(b0){if(h){if(e)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+X0,0,0,0,B0[X0].width,B0[X0].height,x0,m0,B0[X0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+X0,0,OJ,B0[X0].width,B0[X0].height,0,x0,m0,B0[X0].data);for(let M0=0;M0<T0.length;M0++){let AJ=T0[M0].image[X0].image;if(h){if(e)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+X0,M0+1,0,0,AJ.width,AJ.height,x0,m0,AJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+X0,M0+1,OJ,AJ.width,AJ.height,0,x0,m0,AJ.data)}}else{if(h){if(e)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+X0,0,0,0,x0,m0,B0[X0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+X0,0,OJ,x0,m0,B0[X0]);for(let M0=0;M0<T0.length;M0++){let r0=T0[M0];if(h){if(e)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+X0,M0+1,0,0,x0,m0,r0.image[X0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+X0,M0+1,OJ,x0,m0,r0.image[X0])}}}if(O(k))z(J.TEXTURE_CUBE_MAP);if(N0.__version=Y0.version,k.onUpdate)k.onUpdate(k)}P.__version=k.version}function p0(P,k,j,l,Y0,N0){let D0=K.convert(j.format,j.colorSpace),a=K.convert(j.type),t=L(j.internalFormat,D0,a,j.normalized,j.colorSpace),C0=W.get(k),b0=W.get(j);if(b0.__renderTarget=k,!C0.__hasExternalTextures){let B0=Math.max(1,k.width>>N0),F0=Math.max(1,k.height>>N0);if(Y0===J.TEXTURE_3D||Y0===J.TEXTURE_2D_ARRAY)$.texImage3D(Y0,N0,t,B0,F0,k.depth,0,D0,a,null);else $.texImage2D(Y0,N0,t,B0,F0,0,D0,a,null)}if($.bindFramebuffer(J.FRAMEBUFFER,P),v(k))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,l,Y0,b0.__webglTexture,0,iJ(k));else if(Y0===J.TEXTURE_2D||Y0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&Y0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,l,Y0,b0.__webglTexture,N0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function aJ(P,k,j){if(J.bindRenderbuffer(J.RENDERBUFFER,P),k.depthBuffer){let l=k.depthTexture,Y0=l&&l.isDepthTexture?l.type:null,N0=M(k.stencilBuffer,Y0),D0=k.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(v(k))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,iJ(k),N0,k.width,k.height);else if(j)J.renderbufferStorageMultisample(J.RENDERBUFFER,iJ(k),N0,k.width,k.height);else J.renderbufferStorage(J.RENDERBUFFER,N0,k.width,k.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,D0,J.RENDERBUFFER,P)}else{let l=k.textures;for(let Y0=0;Y0<l.length;Y0++){let N0=l[Y0],D0=K.convert(N0.format,N0.colorSpace),a=K.convert(N0.type),t=L(N0.internalFormat,D0,a,N0.normalized,N0.colorSpace);if(v(k))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,iJ(k),t,k.width,k.height);else if(j)J.renderbufferStorageMultisample(J.RENDERBUFFER,iJ(k),t,k.width,k.height);else J.renderbufferStorage(J.RENDERBUFFER,t,k.width,k.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function e0(P,k,j){let l=k.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,P),!(k.depthTexture&&k.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y0=W.get(k.depthTexture);if(Y0.__renderTarget=k,!Y0.__webglTexture||k.depthTexture.image.width!==k.width||k.depthTexture.image.height!==k.height)k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0;if(l){if(Y0.__webglInit===void 0)Y0.__webglInit=!0,k.depthTexture.addEventListener("dispose",w);if(Y0.__webglTexture===void 0){Y0.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,Y0.__webglTexture),s0(J.TEXTURE_CUBE_MAP,k.depthTexture);let C0=K.convert(k.depthTexture.format),b0=K.convert(k.depthTexture.type),B0;if(k.depthTexture.format===b7)B0=J.DEPTH_COMPONENT24;else if(k.depthTexture.format===x7)B0=J.DEPTH24_STENCIL8;for(let F0=0;F0<6;F0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,B0,k.width,k.height,0,C0,b0,null)}}else K0(k.depthTexture,0);let N0=Y0.__webglTexture,D0=iJ(k),a=l?J.TEXTURE_CUBE_MAP_POSITIVE_X+j:J.TEXTURE_2D,t=k.depthTexture.format===x7?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(k.depthTexture.format===b7)if(v(k))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,t,a,N0,0,D0);else J.framebufferTexture2D(J.FRAMEBUFFER,t,a,N0,0);else if(k.depthTexture.format===x7)if(v(k))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,t,a,N0,0,D0);else J.framebufferTexture2D(J.FRAMEBUFFER,t,a,N0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function KJ(P){let k=W.get(P),j=P.isWebGLCubeRenderTarget===!0;if(k.__boundDepthTexture!==P.depthTexture){let l=P.depthTexture;if(k.__depthDisposeCallback)k.__depthDisposeCallback();if(l){let Y0=()=>{delete k.__boundDepthTexture,delete k.__depthDisposeCallback,l.removeEventListener("dispose",Y0)};l.addEventListener("dispose",Y0),k.__depthDisposeCallback=Y0}k.__boundDepthTexture=l}if(P.depthTexture&&!k.__autoAllocateDepthBuffer)if(j)for(let l=0;l<6;l++)e0(k.__webglFramebuffer[l],P,l);else{let l=P.texture.mipmaps;if(l&&l.length>0)e0(k.__webglFramebuffer[0],P,0);else e0(k.__webglFramebuffer,P,0)}else if(j){k.__webglDepthbuffer=[];for(let l=0;l<6;l++)if($.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer[l]),k.__webglDepthbuffer[l]===void 0)k.__webglDepthbuffer[l]=J.createRenderbuffer(),aJ(k.__webglDepthbuffer[l],P,!1);else{let Y0=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,N0=k.__webglDepthbuffer[l];J.bindRenderbuffer(J.RENDERBUFFER,N0),J.framebufferRenderbuffer(J.FRAMEBUFFER,Y0,J.RENDERBUFFER,N0)}}else{let l=P.texture.mipmaps;if(l&&l.length>0)$.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer);if(k.__webglDepthbuffer===void 0)k.__webglDepthbuffer=J.createRenderbuffer(),aJ(k.__webglDepthbuffer,P,!1);else{let Y0=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,N0=k.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,N0),J.framebufferRenderbuffer(J.FRAMEBUFFER,Y0,J.RENDERBUFFER,N0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function DJ(P,k,j){let l=W.get(P);if(k!==void 0)p0(l.__webglFramebuffer,P,P.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(j!==void 0)KJ(P)}function FJ(P){let k=P.texture,j=W.get(P),l=W.get(k);P.addEventListener("dispose",B);let Y0=P.textures,N0=P.isWebGLCubeRenderTarget===!0,D0=Y0.length>1;if(!D0){if(l.__webglTexture===void 0)l.__webglTexture=J.createTexture();l.__version=k.version,H.memory.textures++}if(N0){j.__webglFramebuffer=[];for(let a=0;a<6;a++)if(k.mipmaps&&k.mipmaps.length>0){j.__webglFramebuffer[a]=[];for(let t=0;t<k.mipmaps.length;t++)j.__webglFramebuffer[a][t]=J.createFramebuffer()}else j.__webglFramebuffer[a]=J.createFramebuffer()}else{if(k.mipmaps&&k.mipmaps.length>0){j.__webglFramebuffer=[];for(let a=0;a<k.mipmaps.length;a++)j.__webglFramebuffer[a]=J.createFramebuffer()}else j.__webglFramebuffer=J.createFramebuffer();if(D0)for(let a=0,t=Y0.length;a<t;a++){let C0=W.get(Y0[a]);if(C0.__webglTexture===void 0)C0.__webglTexture=J.createTexture(),H.memory.textures++}if(P.samples>0&&v(P)===!1){j.__webglMultisampledFramebuffer=J.createFramebuffer(),j.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let a=0;a<Y0.length;a++){let t=Y0[a];j.__webglColorRenderbuffer[a]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,j.__webglColorRenderbuffer[a]);let C0=K.convert(t.format,t.colorSpace),b0=K.convert(t.type),B0=L(t.internalFormat,C0,b0,t.normalized,t.colorSpace,P.isXRRenderTarget===!0),F0=iJ(P);J.renderbufferStorageMultisample(J.RENDERBUFFER,F0,B0,P.width,P.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+a,J.RENDERBUFFER,j.__webglColorRenderbuffer[a])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),P.depthBuffer)j.__webglDepthRenderbuffer=J.createRenderbuffer(),aJ(j.__webglDepthRenderbuffer,P,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(N0){$.bindTexture(J.TEXTURE_CUBE_MAP,l.__webglTexture),s0(J.TEXTURE_CUBE_MAP,k);for(let a=0;a<6;a++)if(k.mipmaps&&k.mipmaps.length>0)for(let t=0;t<k.mipmaps.length;t++)p0(j.__webglFramebuffer[a][t],P,k,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+a,t);else p0(j.__webglFramebuffer[a],P,k,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+a,0);if(O(k))z(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(D0){for(let a=0,t=Y0.length;a<t;a++){let C0=Y0[a],b0=W.get(C0),B0=J.TEXTURE_2D;if(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)B0=P.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(B0,b0.__webglTexture),s0(B0,C0),p0(j.__webglFramebuffer,P,C0,J.COLOR_ATTACHMENT0+a,B0,0),O(C0))z(B0)}$.unbindTexture()}else{let a=J.TEXTURE_2D;if(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)a=P.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(a,l.__webglTexture),s0(a,k),k.mipmaps&&k.mipmaps.length>0)for(let t=0;t<k.mipmaps.length;t++)p0(j.__webglFramebuffer[t],P,k,J.COLOR_ATTACHMENT0,a,t);else p0(j.__webglFramebuffer,P,k,J.COLOR_ATTACHMENT0,a,0);if(O(k))z(a);$.unbindTexture()}if(P.depthBuffer)KJ(P)}function rJ(P){let k=P.textures;for(let j=0,l=k.length;j<l;j++){let Y0=k[j];if(O(Y0)){let N0=D(P),D0=W.get(Y0).__webglTexture;$.bindTexture(N0,D0),z(N0),$.unbindTexture()}}}let vJ=[],q8=[];function sJ(P){if(P.samples>0){if(v(P)===!1){let{textures:k,width:j,height:l}=P,Y0=J.COLOR_BUFFER_BIT,N0=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,D0=W.get(P),a=k.length>1;if(a)for(let C0=0;C0<k.length;C0++)$.bindFramebuffer(J.FRAMEBUFFER,D0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+C0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,D0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+C0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,D0.__webglMultisampledFramebuffer);let t=P.texture.mipmaps;if(t&&t.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,D0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,D0.__webglFramebuffer);for(let C0=0;C0<k.length;C0++){if(P.resolveDepthBuffer){if(P.depthBuffer)Y0|=J.DEPTH_BUFFER_BIT;if(P.stencilBuffer&&P.resolveStencilBuffer)Y0|=J.STENCIL_BUFFER_BIT}if(a){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,D0.__webglColorRenderbuffer[C0]);let b0=W.get(k[C0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,b0,0)}if(J.blitFramebuffer(0,0,j,l,0,0,j,l,Y0,J.NEAREST),X===!0){if(vJ.length=0,q8.length=0,vJ.push(J.COLOR_ATTACHMENT0+C0),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1)vJ.push(N0),q8.push(N0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,q8);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,vJ)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),a)for(let C0=0;C0<k.length;C0++){$.bindFramebuffer(J.FRAMEBUFFER,D0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+C0,J.RENDERBUFFER,D0.__webglColorRenderbuffer[C0]);let b0=W.get(k[C0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,D0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+C0,J.TEXTURE_2D,b0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,D0.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&X){let k=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[k])}}}function iJ(P){return Math.min(Z.maxSamples,P.samples)}function v(P){let k=W.get(P);return P.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&k.__useRenderToTexture!==!1}function O8(P){let k=H.render.frame;if(N.get(P)!==k)N.set(P,k),P.update()}function kJ(P,k){let{colorSpace:j,format:l,type:Y0}=P;if(P.isCompressedTexture===!0||P.isVideoTexture===!0)return k;if(j!==p8&&j!==p7)if(ZJ.getTransfer(j)===SJ){if(l!==z9||Y0!==G9)g0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else o0("WebGLTextures: Unsupported texture color space:",j);return k}function bJ(P){if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement)U.width=P.naturalWidth||P.width,U.height=P.naturalHeight||P.height;else if(typeof VideoFrame<"u"&&P instanceof VideoFrame)U.width=P.displayWidth,U.height=P.displayHeight;else U.width=P.width,U.height=P.height;return U}this.allocateTextureUnit=c,this.resetTextureUnits=J0,this.getTextureUnits=S,this.setTextureUnits=i,this.setTexture2D=K0,this.setTexture2DArray=n,this.setTexture3D=$0,this.setTextureCube=U0,this.rebindTextures=DJ,this.setupRenderTarget=FJ,this.updateRenderTargetMipmap=rJ,this.updateMultisampleRenderTarget=sJ,this.setupDepthRenderbuffer=KJ,this.setupFrameBufferTexture=p0,this.useMultisampledRTT=v,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function fq(J,Q){function $(W,Z=p7){let K,H=ZJ.getTransfer(Z);if(W===G9)return J.UNSIGNED_BYTE;if(W===yZ)return J.UNSIGNED_SHORT_4_4_4_4;if(W===vZ)return J.UNSIGNED_SHORT_5_5_5_1;if(W===GX)return J.UNSIGNED_INT_5_9_9_9_REV;if(W===NX)return J.UNSIGNED_INT_10F_11F_11F_REV;if(W===XX)return J.BYTE;if(W===UX)return J.SHORT;if(W===yQ)return J.UNSIGNED_SHORT;if(W===jZ)return J.INT;if(W===X7)return J.UNSIGNED_INT;if(W===x9)return J.FLOAT;if(W===E8)return J.HALF_FLOAT;if(W===EX)return J.ALPHA;if(W===FX)return J.RGB;if(W===z9)return J.RGBA;if(W===b7)return J.DEPTH_COMPONENT;if(W===x7)return J.DEPTH_STENCIL;if(W===qX)return J.RED;if(W===fZ)return J.RED_INTEGER;if(W===g7)return J.RG;if(W===hZ)return J.RG_INTEGER;if(W===bZ)return J.RGBA_INTEGER;if(W===JW||W===QW||W===$W||W===WW)if(H===SJ)if(K=Q.get("WEBGL_compressed_texture_s3tc_srgb"),K!==null){if(W===JW)return K.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(W===QW)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(W===$W)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(W===WW)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(K=Q.get("WEBGL_compressed_texture_s3tc"),K!==null){if(W===JW)return K.COMPRESSED_RGB_S3TC_DXT1_EXT;if(W===QW)return K.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(W===$W)return K.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(W===WW)return K.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(W===xZ||W===gZ||W===pZ||W===mZ)if(K=Q.get("WEBGL_compressed_texture_pvrtc"),K!==null){if(W===xZ)return K.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(W===gZ)return K.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(W===pZ)return K.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(W===mZ)return K.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(W===lZ||W===uZ||W===dZ||W===cZ||W===nZ||W===ZW||W===sZ)if(K=Q.get("WEBGL_compressed_texture_etc"),K!==null){if(W===lZ||W===uZ)return H===SJ?K.COMPRESSED_SRGB8_ETC2:K.COMPRESSED_RGB8_ETC2;if(W===dZ)return H===SJ?K.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:K.COMPRESSED_RGBA8_ETC2_EAC;if(W===cZ)return K.COMPRESSED_R11_EAC;if(W===nZ)return K.COMPRESSED_SIGNED_R11_EAC;if(W===ZW)return K.COMPRESSED_RG11_EAC;if(W===sZ)return K.COMPRESSED_SIGNED_RG11_EAC}else return null;if(W===iZ||W===oZ||W===aZ||W===rZ||W===tZ||W===eZ||W===JK||W===QK||W===$K||W===WK||W===ZK||W===KK||W===HK||W===YK)if(K=Q.get("WEBGL_compressed_texture_astc"),K!==null){if(W===iZ)return H===SJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:K.COMPRESSED_RGBA_ASTC_4x4_KHR;if(W===oZ)return H===SJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:K.COMPRESSED_RGBA_ASTC_5x4_KHR;if(W===aZ)return H===SJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:K.COMPRESSED_RGBA_ASTC_5x5_KHR;if(W===rZ)return H===SJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:K.COMPRESSED_RGBA_ASTC_6x5_KHR;if(W===tZ)return H===SJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:K.COMPRESSED_RGBA_ASTC_6x6_KHR;if(W===eZ)return H===SJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:K.COMPRESSED_RGBA_ASTC_8x5_KHR;if(W===JK)return H===SJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:K.COMPRESSED_RGBA_ASTC_8x6_KHR;if(W===QK)return H===SJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:K.COMPRESSED_RGBA_ASTC_8x8_KHR;if(W===$K)return H===SJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:K.COMPRESSED_RGBA_ASTC_10x5_KHR;if(W===WK)return H===SJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:K.COMPRESSED_RGBA_ASTC_10x6_KHR;if(W===ZK)return H===SJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:K.COMPRESSED_RGBA_ASTC_10x8_KHR;if(W===KK)return H===SJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:K.COMPRESSED_RGBA_ASTC_10x10_KHR;if(W===HK)return H===SJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:K.COMPRESSED_RGBA_ASTC_12x10_KHR;if(W===YK)return H===SJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:K.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(W===XK||W===UK||W===GK)if(K=Q.get("EXT_texture_compression_bptc"),K!==null){if(W===XK)return H===SJ?K.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:K.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(W===UK)return K.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(W===GK)return K.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(W===NK||W===EK||W===KW||W===FK)if(K=Q.get("EXT_texture_compression_rgtc"),K!==null){if(W===NK)return K.COMPRESSED_RED_RGTC1_EXT;if(W===EK)return K.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(W===KW)return K.COMPRESSED_RED_GREEN_RGTC2_EXT;if(W===FK)return K.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(W===b6)return J.UNSIGNED_INT_24_8;return J[W]!==void 0?J[W]:null}return{convert:$}}var hq=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bq=`
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

}`;class VU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new LW(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new nJ({vertexShader:hq,fragmentShader:bq,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new z0(new H8(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DU extends N9{constructor(J,Q){super();let $=this,W=null,Z=1,K=null,H="local-floor",Y=1,X=null,U=null,N=null,E=null,G=null,F=null,q=typeof XRWebGLBinding<"u",V=new VU,R={},O=Q.getContextAttributes(),z=null,D=null,L=[],M=[],I=new W0,w=null,B=null,A=new K8;A.viewport=new wJ;let d=new K8;d.viewport=new wJ;let y=[A,d],b=new pK,J0=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(o){let E0=L[o];if(E0===void 0)E0=new hQ,L[o]=E0;return E0.getTargetRaySpace()},this.getControllerGrip=function(o){let E0=L[o];if(E0===void 0)E0=new hQ,L[o]=E0;return E0.getGripSpace()},this.getHand=function(o){let E0=L[o];if(E0===void 0)E0=new hQ,L[o]=E0;return E0.getHandSpace()};function i(o){let E0=M.indexOf(o.inputSource);if(E0===-1)return;let q0=L[E0];if(q0!==void 0)q0.update(o.inputSource,o.frame,X||K),q0.dispatchEvent({type:o.type,data:o.inputSource})}function c(){W.removeEventListener("select",i),W.removeEventListener("selectstart",i),W.removeEventListener("selectend",i),W.removeEventListener("squeeze",i),W.removeEventListener("squeezestart",i),W.removeEventListener("squeezeend",i),W.removeEventListener("end",c),W.removeEventListener("inputsourceschange",x);for(let o=0;o<L.length;o++){let E0=M[o];if(E0===null)continue;M[o]=null,L[o].disconnect(E0)}J0=null,S=null,V.reset();for(let o in R)delete R[o];if(J.setRenderTarget(z),G=null,E=null,N=null,W=null,D=null,s0.stop(),$.isPresenting=!1,J.setPixelRatio(w),J.setSize(I.width,I.height,!1),B!==null){let o=B.camera;o.fov=B.fov,o.zoom=B.zoom,o.updateProjectionMatrix(),B=null}$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(o){if(Z=o,$.isPresenting===!0)g0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(o){if(H=o,$.isPresenting===!0)g0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return X||K},this.setReferenceSpace=function(o){X=o},this.getBaseLayer=function(){return E!==null?E:G},this.getBinding=function(){if(N===null&&q)N=new XRWebGLBinding(W,Q);return N},this.getFrame=function(){return F},this.getSession=function(){return W},this.setSession=async function(o){if(W=o,W!==null){if(z=J.getRenderTarget(),W.addEventListener("select",i),W.addEventListener("selectstart",i),W.addEventListener("selectend",i),W.addEventListener("squeeze",i),W.addEventListener("squeezestart",i),W.addEventListener("squeezeend",i),W.addEventListener("end",c),W.addEventListener("inputsourceschange",x),O.xrCompatible!==!0)await Q.makeXRCompatible();if(w=J.getPixelRatio(),J.getSize(I),!(q&&("createProjectionLayer"in XRWebGLBinding.prototype))){let q0={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:Z};G=new XRWebGLLayer(W,Q,q0),W.updateRenderState({baseLayer:G}),J.setPixelRatio(1),J.setSize(G.framebufferWidth,G.framebufferHeight,!1),D=new eJ(G.framebufferWidth,G.framebufferHeight,{format:z9,type:G9,colorSpace:J.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1,storeMultisampledDepthBuffer:G.ignoreDepthValues===!1,storeMultisampledStencilBuffer:G.ignoreDepthValues===!1})}else{let q0=null,l0=null,c0=null;if(O.depth)c0=O.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,q0=O.stencil?x7:b7,l0=O.stencil?b6:X7;let p0={colorFormat:Q.RGBA8,depthFormat:c0,scaleFactor:Z};N=this.getBinding(),E=N.createProjectionLayer(p0),W.updateRenderState({layers:[E]}),J.setPixelRatio(1),J.setSize(E.textureWidth,E.textureHeight,!1),D=new eJ(E.textureWidth,E.textureHeight,{format:z9,type:G9,depthTexture:new d7(E.textureWidth,E.textureHeight,l0,void 0,void 0,void 0,void 0,void 0,void 0,q0),stencilBuffer:O.stencil,colorSpace:J.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(Y),X=null,K=await W.requestReferenceSpace(H),s0.setContext(W),s0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(W!==null)return W.environmentBlendMode},this.getDepthTexture=function(){return V.getDepthTexture()};function x(o){for(let E0=0;E0<o.removed.length;E0++){let q0=o.removed[E0],l0=M.indexOf(q0);if(l0>=0)M[l0]=null,L[l0].disconnect(q0)}for(let E0=0;E0<o.added.length;E0++){let q0=o.added[E0],l0=M.indexOf(q0);if(l0===-1){for(let p0=0;p0<L.length;p0++)if(p0>=M.length){M.push(q0),l0=p0;break}else if(M[p0]===null){M[p0]=q0,l0=p0;break}if(l0===-1)break}let c0=L[l0];if(c0)c0.connect(q0)}}let K0=new T,n=new T;function $0(o,E0,q0){K0.setFromMatrixPosition(E0.matrixWorld),n.setFromMatrixPosition(q0.matrixWorld);let l0=K0.distanceTo(n),c0=E0.projectionMatrix.elements,p0=q0.projectionMatrix.elements,aJ=c0[14]/(c0[10]-1),e0=c0[14]/(c0[10]+1),KJ=(c0[9]+1)/c0[5],DJ=(c0[9]-1)/c0[5],FJ=(c0[8]-1)/c0[0],rJ=(p0[8]+1)/p0[0],vJ=aJ*FJ,q8=aJ*rJ,sJ=l0/(-FJ+rJ),iJ=sJ*-FJ;if(E0.matrixWorld.decompose(o.position,o.quaternion,o.scale),o.translateX(iJ),o.translateZ(sJ),o.matrixWorld.compose(o.position,o.quaternion,o.scale),o.matrixWorldInverse.copy(o.matrixWorld).invert(),c0[10]===-1)o.projectionMatrix.copy(E0.projectionMatrix),o.projectionMatrixInverse.copy(E0.projectionMatrixInverse);else{let v=aJ+sJ,O8=e0+sJ,kJ=vJ-iJ,bJ=q8+(l0-iJ),P=KJ*e0/O8*v,k=DJ*e0/O8*v;o.projectionMatrix.makePerspective(kJ,bJ,P,k,v,O8),o.projectionMatrixInverse.copy(o.projectionMatrix).invert()}}function U0(o,E0){if(E0===null)o.matrixWorld.copy(o.matrix);else o.matrixWorld.multiplyMatrices(E0.matrixWorld,o.matrix);o.matrixWorldInverse.copy(o.matrixWorld).invert()}this.updateCamera=function(o){if(W===null)return;let{near:E0,far:q0}=o;if(V.texture!==null){if(V.depthNear>0)E0=V.depthNear;if(V.depthFar>0)q0=V.depthFar}if(b.near=d.near=A.near=E0,b.far=d.far=A.far=q0,J0!==b.near||S!==b.far)W.updateRenderState({depthNear:b.near,depthFar:b.far}),J0=b.near,S=b.far;b.layers.mask=o.layers.mask|6,A.layers.mask=b.layers.mask&-5,d.layers.mask=b.layers.mask&-3;let l0=o.parent,c0=b.cameras;U0(b,l0);for(let p0=0;p0<c0.length;p0++)U0(c0[p0],l0);if(c0.length===2)$0(b,A,d);else b.projectionMatrix.copy(A.projectionMatrix);if(B===null&&o.isPerspectiveCamera)B={camera:o,fov:o.fov,zoom:o.zoom};u0(o,b,l0)};function u0(o,E0,q0){if(q0===null)o.matrix.copy(E0.matrixWorld);else o.matrix.copy(q0.matrixWorld),o.matrix.invert(),o.matrix.multiply(E0.matrixWorld);if(o.matrix.decompose(o.position,o.quaternion,o.scale),o.updateMatrixWorld(!0),o.projectionMatrix.copy(E0.projectionMatrix),o.projectionMatrixInverse.copy(E0.projectionMatrixInverse),o.isPerspectiveCamera)o.fov=S7*2*Math.atan(1/o.projectionMatrix.elements[5]),o.zoom=1}this.getCamera=function(){return b},this.getFoveation=function(){if(E===null&&G===null)return;return Y},this.setFoveation=function(o){if(Y=o,E!==null)E.fixedFoveation=o;if(G!==null&&G.fixedFoveation!==void 0)G.fixedFoveation=o},this.hasDepthSensing=function(){return V.texture!==null},this.getDepthSensingMesh=function(){return V.getMesh(b)},this.getCameraTexture=function(o){return R[o]};let I0=null;function i0(o,E0){if(U=E0.getViewerPose(X||K),F=E0,U!==null){let q0=U.views;if(G!==null)J.setRenderTargetFramebuffer(D,G.framebuffer),J.setRenderTarget(D);let l0=!1;if(q0.length!==b.cameras.length)b.cameras.length=0,l0=!0;for(let e0=0;e0<q0.length;e0++){let KJ=q0[e0],DJ=null;if(G!==null)DJ=G.getViewport(KJ);else{let rJ=N.getViewSubImage(E,KJ);if(DJ=rJ.viewport,e0===0)J.setRenderTargetTextures(D,rJ.colorTexture,rJ.depthStencilTexture),J.setRenderTarget(D)}let FJ=y[e0];if(FJ===void 0)FJ=new K8,FJ.layers.enable(e0),FJ.viewport=new wJ,y[e0]=FJ;if(FJ.matrix.fromArray(KJ.transform.matrix),FJ.matrix.decompose(FJ.position,FJ.quaternion,FJ.scale),FJ.projectionMatrix.fromArray(KJ.projectionMatrix),FJ.projectionMatrixInverse.copy(FJ.projectionMatrix).invert(),FJ.viewport.set(DJ.x,DJ.y,DJ.width,DJ.height),e0===0)b.matrix.copy(FJ.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale);if(l0===!0)b.cameras.push(FJ)}let c0=W.enabledFeatures;if(c0&&c0.includes("depth-sensing")&&W.depthUsage=="gpu-optimized"&&q){N=$.getBinding();let e0=N.getDepthInformation(q0[0]);if(e0&&e0.isValid&&e0.texture)V.init(e0,W.renderState)}if(c0&&c0.includes("camera-access")&&q){J.state.unbindTexture(),N=$.getBinding();for(let e0=0;e0<q0.length;e0++){let KJ=q0[e0].camera;if(KJ){let DJ=R[KJ];if(!DJ)DJ=new LW,R[KJ]=DJ;let FJ=N.getCameraImage(KJ);DJ.sourceTexture=FJ}}}}for(let q0=0;q0<L.length;q0++){let l0=M[q0],c0=L[q0];if(l0!==null&&c0!==void 0)c0.update(l0,E0,X||K)}if(I0)I0(o,E0);if(E0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:E0});F=null}let s0=new YU;s0.setAnimationLoop(i0),this.setAnimationLoop=function(o){I0=o},this.dispose=function(){}}}var xq=new n0,BU=new t0;BU.set(-1,0,0,0,1,0,0,0,1);function gq(J,Q){function $(R,O){if(R.matrixAutoUpdate===!0)R.updateMatrix();O.value.copy(R.matrix)}function W(R,O){if(O.color.getRGB(R.fogColor.value,wK(J)),O.isFog)R.fogNear.value=O.near,R.fogFar.value=O.far;else if(O.isFogExp2)R.fogDensity.value=O.density}function Z(R,O,z,D,L){if(O.isNodeMaterial)O.uniformsNeedUpdate=!1;else if(O.isMeshBasicMaterial)K(R,O);else if(O.isMeshLambertMaterial){if(K(R,O),O.envMap)R.envMapIntensity.value=O.envMapIntensity}else if(O.isMeshToonMaterial)K(R,O),E(R,O);else if(O.isMeshPhongMaterial){if(K(R,O),N(R,O),O.envMap)R.envMapIntensity.value=O.envMapIntensity}else if(O.isMeshStandardMaterial){if(K(R,O),G(R,O),O.isMeshPhysicalMaterial)F(R,O,L)}else if(O.isMeshMatcapMaterial)K(R,O),q(R,O);else if(O.isMeshDepthMaterial)K(R,O);else if(O.isMeshDistanceMaterial)K(R,O),V(R,O);else if(O.isMeshNormalMaterial)K(R,O);else if(O.isLineBasicMaterial){if(H(R,O),O.isLineDashedMaterial)Y(R,O)}else if(O.isPointsMaterial)X(R,O,z,D);else if(O.isSpriteMaterial)U(R,O);else if(O.isShadowMaterial)R.color.value.copy(O.color),R.opacity.value=O.opacity;else if(O.isShaderMaterial)O.uniformsNeedUpdate=!1}function K(R,O){if(R.opacity.value=O.opacity,O.color)R.diffuse.value.copy(O.color);if(O.emissive)R.emissive.value.copy(O.emissive).multiplyScalar(O.emissiveIntensity);if(O.map)R.map.value=O.map,$(O.map,R.mapTransform);if(O.alphaMap)R.alphaMap.value=O.alphaMap,$(O.alphaMap,R.alphaMapTransform);if(O.bumpMap){if(R.bumpMap.value=O.bumpMap,$(O.bumpMap,R.bumpMapTransform),R.bumpScale.value=O.bumpScale,O.side===L8)R.bumpScale.value*=-1}if(O.normalMap){if(R.normalMap.value=O.normalMap,$(O.normalMap,R.normalMapTransform),R.normalScale.value.copy(O.normalScale),O.side===L8)R.normalScale.value.negate()}if(O.displacementMap)R.displacementMap.value=O.displacementMap,$(O.displacementMap,R.displacementMapTransform),R.displacementScale.value=O.displacementScale,R.displacementBias.value=O.displacementBias;if(O.emissiveMap)R.emissiveMap.value=O.emissiveMap,$(O.emissiveMap,R.emissiveMapTransform);if(O.specularMap)R.specularMap.value=O.specularMap,$(O.specularMap,R.specularMapTransform);if(O.alphaTest>0)R.alphaTest.value=O.alphaTest;let z=Q.get(O),D=z.envMap,L=z.envMapRotation;if(D){if(R.envMap.value=D,R.envMapRotation.value.setFromMatrix4(xq.makeRotationFromEuler(L)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1)R.envMapRotation.value.premultiply(BU);R.reflectivity.value=O.reflectivity,R.ior.value=O.ior,R.refractionRatio.value=O.refractionRatio}if(O.lightMap)R.lightMap.value=O.lightMap,R.lightMapIntensity.value=O.lightMapIntensity,$(O.lightMap,R.lightMapTransform);if(O.aoMap)R.aoMap.value=O.aoMap,R.aoMapIntensity.value=O.aoMapIntensity,$(O.aoMap,R.aoMapTransform)}function H(R,O){if(R.diffuse.value.copy(O.color),R.opacity.value=O.opacity,O.map)R.map.value=O.map,$(O.map,R.mapTransform)}function Y(R,O){R.dashSize.value=O.dashSize,R.totalSize.value=O.dashSize+O.gapSize,R.scale.value=O.scale}function X(R,O,z,D){if(R.diffuse.value.copy(O.color),R.opacity.value=O.opacity,R.size.value=O.size*z,R.scale.value=D*0.5,O.map)R.map.value=O.map,$(O.map,R.uvTransform);if(O.alphaMap)R.alphaMap.value=O.alphaMap,$(O.alphaMap,R.alphaMapTransform);if(O.alphaTest>0)R.alphaTest.value=O.alphaTest}function U(R,O){if(R.diffuse.value.copy(O.color),R.opacity.value=O.opacity,R.rotation.value=O.rotation,O.map)R.map.value=O.map,$(O.map,R.mapTransform);if(O.alphaMap)R.alphaMap.value=O.alphaMap,$(O.alphaMap,R.alphaMapTransform);if(O.alphaTest>0)R.alphaTest.value=O.alphaTest}function N(R,O){R.specular.value.copy(O.specular),R.shininess.value=Math.max(O.shininess,0.0001)}function E(R,O){if(O.gradientMap)R.gradientMap.value=O.gradientMap}function G(R,O){if(R.metalness.value=O.metalness,O.metalnessMap)R.metalnessMap.value=O.metalnessMap,$(O.metalnessMap,R.metalnessMapTransform);if(R.roughness.value=O.roughness,O.roughnessMap)R.roughnessMap.value=O.roughnessMap,$(O.roughnessMap,R.roughnessMapTransform);if(O.envMap)R.envMapIntensity.value=O.envMapIntensity}function F(R,O,z){if(R.ior.value=O.ior,O.sheen>0){if(R.sheenColor.value.copy(O.sheenColor).multiplyScalar(O.sheen),R.sheenRoughness.value=O.sheenRoughness,O.sheenColorMap)R.sheenColorMap.value=O.sheenColorMap,$(O.sheenColorMap,R.sheenColorMapTransform);if(O.sheenRoughnessMap)R.sheenRoughnessMap.value=O.sheenRoughnessMap,$(O.sheenRoughnessMap,R.sheenRoughnessMapTransform)}if(O.clearcoat>0){if(R.clearcoat.value=O.clearcoat,R.clearcoatRoughness.value=O.clearcoatRoughness,O.clearcoatMap)R.clearcoatMap.value=O.clearcoatMap,$(O.clearcoatMap,R.clearcoatMapTransform);if(O.clearcoatRoughnessMap)R.clearcoatRoughnessMap.value=O.clearcoatRoughnessMap,$(O.clearcoatRoughnessMap,R.clearcoatRoughnessMapTransform);if(O.clearcoatNormalMap){if(R.clearcoatNormalMap.value=O.clearcoatNormalMap,$(O.clearcoatNormalMap,R.clearcoatNormalMapTransform),R.clearcoatNormalScale.value.copy(O.clearcoatNormalScale),O.side===L8)R.clearcoatNormalScale.value.negate()}}if(O.dispersion>0)R.dispersion.value=O.dispersion;if(O.retroreflectivity>0)R.retroreflectivity.value=O.retroreflectivity;if(O.iridescence>0){if(R.iridescence.value=O.iridescence,R.iridescenceIOR.value=O.iridescenceIOR,R.iridescenceThicknessMinimum.value=O.iridescenceThicknessRange[0],R.iridescenceThicknessMaximum.value=O.iridescenceThicknessRange[1],O.iridescenceMap)R.iridescenceMap.value=O.iridescenceMap,$(O.iridescenceMap,R.iridescenceMapTransform);if(O.iridescenceThicknessMap)R.iridescenceThicknessMap.value=O.iridescenceThicknessMap,$(O.iridescenceThicknessMap,R.iridescenceThicknessMapTransform)}if(O.transmission>0){if(R.transmission.value=O.transmission,R.transmissionSamplerMap.value=z.texture,R.transmissionSamplerSize.value.set(z.width,z.height),O.transmissionMap)R.transmissionMap.value=O.transmissionMap,$(O.transmissionMap,R.transmissionMapTransform);if(R.thickness.value=O.thickness,O.thicknessMap)R.thicknessMap.value=O.thicknessMap,$(O.thicknessMap,R.thicknessMapTransform);R.attenuationDistance.value=O.attenuationDistance,R.attenuationColor.value.copy(O.attenuationColor)}if(O.anisotropy>0){if(R.anisotropyVector.value.set(O.anisotropy*Math.cos(O.anisotropyRotation),O.anisotropy*Math.sin(O.anisotropyRotation)),O.anisotropyMap)R.anisotropyMap.value=O.anisotropyMap,$(O.anisotropyMap,R.anisotropyMapTransform)}if(R.specularIntensity.value=O.specularIntensity,R.specularColor.value.copy(O.specularColor),O.specularColorMap)R.specularColorMap.value=O.specularColorMap,$(O.specularColorMap,R.specularColorMapTransform);if(O.specularIntensityMap)R.specularIntensityMap.value=O.specularIntensityMap,$(O.specularIntensityMap,R.specularIntensityMapTransform)}function q(R,O){if(O.matcap)R.matcap.value=O.matcap}function V(R,O){let z=Q.get(O).light;R.referencePosition.value.setFromMatrixPosition(z.matrixWorld),R.nearDistance.value=z.shadow.camera.near,R.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:W,refreshMaterialUniforms:Z}}function pq(J,Q,$,W){let Z={},K={},H=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function X(L,M){let I=M.program;W.uniformBlockBinding(L,I)}function U(L,M){let I=Z[L.id];if(I===void 0)R(L),I=N(L),Z[L.id]=I,L.addEventListener("dispose",z);let w=M.program;W.updateUBOMapping(L,w);let B=Q.render.frame;if(K[L.id]!==B)G(L),K[L.id]=B}function N(L){let M=E();L.__bindingPointIndex=M;let I=J.createBuffer(),w=L.__size,B=L.usage;return J.bindBuffer(J.UNIFORM_BUFFER,I),J.bufferData(J.UNIFORM_BUFFER,w,B),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,M,I),I}function E(){for(let L=0;L<Y;L++)if(H.indexOf(L)===-1)return H.push(L),L;return o0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function G(L){let M=Z[L.id],I=L.uniforms,w=L.__cache;J.bindBuffer(J.UNIFORM_BUFFER,M);for(let B=0,A=I.length;B<A;B++){let d=I[B];if(Array.isArray(d))for(let y=0,b=d.length;y<b;y++)F(d[y],B,y,w);else F(d,B,0,w)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function F(L,M,I,w){if(V(L,M,I,w)===!0){let{__offset:B,value:A}=L;if(Array.isArray(A)){let d=0;for(let y=0;y<A.length;y++){let b=A[y],J0=O(b);if(q(b,L.__data,d),typeof b!=="number"&&typeof b!=="boolean"&&!b.isMatrix3&&!ArrayBuffer.isView(b))d+=J0.storage/Float32Array.BYTES_PER_ELEMENT}}else q(A,L.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,B,L.__data)}}function q(L,M,I){if(typeof L==="number"||typeof L==="boolean")M[0]=L;else if(L.isMatrix3)M[0]=L.elements[0],M[1]=L.elements[1],M[2]=L.elements[2],M[3]=0,M[4]=L.elements[3],M[5]=L.elements[4],M[6]=L.elements[5],M[7]=0,M[8]=L.elements[6],M[9]=L.elements[7],M[10]=L.elements[8],M[11]=0;else if(ArrayBuffer.isView(L))M.set(new L.constructor(L.buffer,L.byteOffset,M.length));else L.toArray(M,I)}function V(L,M,I,w){let B=L.value,A=M+"_"+I;if(w[A]===void 0){if(typeof B==="number"||typeof B==="boolean")w[A]=B;else if(ArrayBuffer.isView(B))w[A]=B.slice();else w[A]=B.clone();return!0}else{let d=w[A];if(typeof B==="number"||typeof B==="boolean"){if(d!==B)return w[A]=B,!0}else if(ArrayBuffer.isView(B))return!0;else if(d.equals(B)===!1)return d.copy(B),!0}return!1}function R(L){let M=L.uniforms,I=0,w=16;for(let A=0,d=M.length;A<d;A++){let y=Array.isArray(M[A])?M[A]:[M[A]];for(let b=0,J0=y.length;b<J0;b++){let S=y[b],i=Array.isArray(S.value)?S.value:[S.value];for(let c=0,x=i.length;c<x;c++){let K0=i[c],n=O(K0),$0=I%w,U0=$0%n.boundary,u0=$0+U0;if(I+=U0,u0!==0&&w-u0<n.storage)I+=w-u0;S.__data=new Float32Array(n.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=I,I+=n.storage}}}let B=I%w;if(B>0)I+=w-B;return L.__size=I,L.__cache={},this}function O(L){let M={boundary:0,storage:0};if(typeof L==="number"||typeof L==="boolean")M.boundary=4,M.storage=4;else if(L.isVector2)M.boundary=8,M.storage=8;else if(L.isVector3||L.isColor)M.boundary=16,M.storage=12;else if(L.isVector4)M.boundary=16,M.storage=16;else if(L.isMatrix3)M.boundary=48,M.storage=48;else if(L.isMatrix4)M.boundary=64,M.storage=64;else if(L.isTexture)g0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(L))M.boundary=16,M.storage=L.byteLength;else g0("WebGLRenderer: Unsupported uniform value type.",L);return M}function z(L){let M=L.target;M.removeEventListener("dispose",z);let I=H.indexOf(M.__bindingPointIndex);H.splice(I,1),J.deleteBuffer(Z[M.id]),delete Z[M.id],delete K[M.id]}function D(){for(let L in Z)J.deleteBuffer(Z[L]);H=[],Z={},K={}}return{bind:X,update:U,dispose:D}}var mq=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),P9=null;function lq(){if(P9===null)P9=new xQ(mq,16,16,g7,E8),P9.name="DFG_LUT",P9.minFilter=N8,P9.magFilter=N8,P9.wrapS=f6,P9.wrapT=f6,P9.generateMipmaps=!1,P9.needsUpdate=!0;return P9}class $H{constructor(J={}){let{canvas:Q=MX(),context:$=null,depth:W=!0,stencil:Z=!1,alpha:K=!1,antialias:H=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:X=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:N=!1,reversedDepthBuffer:E=!1,outputBufferType:G=G9}=J;this.isWebGLRenderer=!0;let F;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");F=$.getContextAttributes().alpha}else F=K;let q=G,V=new Set([bZ,hZ,fZ]),R=new Set([G9,X7,yQ,b6,yZ,vZ]),O=new Uint32Array(4),z=new Int32Array(4),D=new T,L=null,M=null,I=[],w=[],B=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=X9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,d=!1,y=null,b=null,J0=null,S=null;this._outputColorSpace=B8;let i=0,c=0,x=null,K0=-1,n=null,$0=new wJ,U0=new wJ,u0=null,I0=new y0(0),i0=0,s0=Q.width,o=Q.height,E0=1,q0=null,l0=null,c0=new wJ(0,0,s0,o),p0=new wJ(0,0,s0,o),aJ=!1,e0=new pQ,KJ=!1,DJ=!1,FJ=new n0,rJ=new T,vJ=new wJ,q8={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},sJ=!1;function iJ(){return x===null?E0:1}let v=$;function O8(C,f){return Q.getContext(C,f)}let kJ,bJ,P,k,j,l,Y0,N0,D0,a,t,C0,b0,B0,F0,x0,m0,OJ,h,V0,e,k0,T0;try{let C={alpha:!0,depth:W,stencil:Z,antialias:H,premultipliedAlpha:Y,preserveDrawingBuffer:X,powerPreference:U,failIfMajorPerformanceCaveat:N};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${_Y}`);if(Q.addEventListener("webglcontextlost",r0,!1),Q.addEventListener("webglcontextrestored",AJ,!1),Q.addEventListener("webglcontextcreationerror",LJ,!1),v===null){if(v=O8("webgl2",C),v===null)if(O8("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}X0()}catch(C){throw Q.removeEventListener("webglcontextlost",r0,!1),Q.removeEventListener("webglcontextrestored",AJ,!1),Q.removeEventListener("webglcontextcreationerror",LJ,!1),o0("WebGLRenderer: "+C.message),C}function X0(){if(kJ=new oE(v),kJ.init(),e=new fq(v,kJ),bJ=new gE(v,kJ,J,e),P=new yq(v,kJ),bJ.reversedDepthBuffer&&E)P.buffers.depth.setReversed(!0);b=v.createFramebuffer(),J0=v.createFramebuffer(),S=v.createFramebuffer(),k=new tE(v),j=new Dq,l=new vq(v,kJ,P,j,bJ,e,k),Y0=new iE(A),N0=new JN(v),k0=new bE(v,N0),D0=new aE(v,N0,k,k0),a=new JF(v,D0,N0,k0,k),OJ=new eE(v,bJ,l),F0=new pE(j),t=new Vq(A,Y0,kJ,bJ,k0,F0),C0=new gq(A,j),b0=new kq,B0=new Aq(kJ),m0=new hE(A,Y0,P,a,F,Y),x0=new jq(A,a,bJ),T0=new pq(v,k,bJ,P),h=new xE(v,kJ,k),V0=new rE(v,kJ,k),k.programs=t.programs,A.capabilities=bJ,A.extensions=kJ,A.properties=j,A.renderLists=b0,A.shadowMap=x0,A.state=P,A.info=k}if(q!==G9)B=new $F(q,Q.width,Q.height,H,W,Z);let M0=new DU(A,v);this.xr=M0,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){let C=kJ.get("WEBGL_lose_context");if(C)C.loseContext()},this.forceContextRestore=function(){let C=kJ.get("WEBGL_lose_context");if(C)C.restoreContext()},this.getPixelRatio=function(){return E0},this.setPixelRatio=function(C){if(C===void 0)return;E0=C,this.setSize(s0,o,!1)},this.getSize=function(C){return C.set(s0,o)},this.setSize=function(C,f,s=!0){if(M0.isPresenting){g0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(s0=C,o=f,Q.width=Math.floor(C*E0),Q.height=Math.floor(f*E0),s===!0)Q.style.width=C+"px",Q.style.height=f+"px";if(B!==null)B.setSize(Q.width,Q.height);this.setViewport(0,0,C,f)},this.getDrawingBufferSize=function(C){return C.set(s0*E0,o*E0).floor()},this.setDrawingBufferSize=function(C,f,s){s0=C,o=f,E0=s,Q.width=Math.floor(C*s),Q.height=Math.floor(f*s),this.setViewport(0,0,C,f)},this.setEffects=function(C){if(q===G9){o0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let f=0;f<C.length;f++)if(C[f].isOutputPass===!0){g0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy($0)},this.getViewport=function(C){return C.copy(c0)},this.setViewport=function(C,f,s,p){if(C.isVector4)c0.set(C.x,C.y,C.z,C.w);else c0.set(C,f,s,p);P.viewport($0.copy(c0).multiplyScalar(E0).round())},this.getScissor=function(C){return C.copy(p0)},this.setScissor=function(C,f,s,p){if(C.isVector4)p0.set(C.x,C.y,C.z,C.w);else p0.set(C,f,s,p);P.scissor(U0.copy(p0).multiplyScalar(E0).round())},this.getScissorTest=function(){return aJ},this.setScissorTest=function(C){P.setScissorTest(aJ=C)},this.setOpaqueSort=function(C){q0=C},this.setTransparentSort=function(C){l0=C},this.getClearColor=function(C){return C.copy(m0.getClearColor())},this.setClearColor=function(){m0.setClearColor(...arguments)},this.getClearAlpha=function(){return m0.getClearAlpha()},this.setClearAlpha=function(){m0.setClearAlpha(...arguments)},this.clear=function(C=!0,f=!0,s=!0){let p=0;if(C){let g=!1;if(x!==null){let L0=x.texture.format;g=V.has(L0)}if(g){let L0=x.texture.type,w0=R.has(L0),R0=m0.getClearColor(),f0=m0.getClearAlpha(),h0=R0.r,JJ=R0.g,XJ=R0.b;if(w0)O[0]=h0,O[1]=JJ,O[2]=XJ,O[3]=f0,v.clearBufferuiv(v.COLOR,0,O);else z[0]=h0,z[1]=JJ,z[2]=XJ,z[3]=f0,v.clearBufferiv(v.COLOR,0,z)}else p|=v.COLOR_BUFFER_BIT}if(f)p|=v.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(s)p|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(p!==0)v.clear(p)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),y=C},this.dispose=function(){Q.removeEventListener("webglcontextlost",r0,!1),Q.removeEventListener("webglcontextrestored",AJ,!1),Q.removeEventListener("webglcontextcreationerror",LJ,!1),m0.dispose(),b0.dispose(),B0.dispose(),j.dispose(),Y0.dispose(),a.dispose(),k0.dispose(),T0.dispose(),t.dispose(),M0.dispose(),M0.removeEventListener("sessionstart",i9),M0.removeEventListener("sessionend",sW),V9.stop()};function r0(C){C.preventDefault(),kQ("WebGLRenderer: Context Lost."),d=!0}function AJ(){kQ("WebGLRenderer: Context Restored."),d=!1;let C=k.autoReset,f=x0.enabled,s=x0.autoUpdate,p=x0.needsUpdate,g=x0.type;X0(),k.autoReset=C,x0.enabled=f,x0.autoUpdate=s,x0.needsUpdate=p,x0.type=g}function LJ(C){o0("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function xJ(C){let f=C.target;f.removeEventListener("dispose",xJ),h8(f)}function h8(C){F$(C),j.remove(C)}function F$(C){let f=j.get(C).programs;if(f!==void 0){if(f.forEach(function(s){t.releaseProgram(s)}),C.isShaderMaterial)t.releaseShaderCache(C)}}this.renderBufferDirect=function(C,f,s,p,g,L0){if(f===null)f=q8;let w0=g.isMesh&&g.matrixWorld.determinantAffine()<0,R0=WQ(C,f,s,p,g);P.setMaterial(p,w0);let f0=s.index,h0=1;if(p.wireframe===!0){if(f0=D0.getWireframeAttribute(s),f0===void 0)return;h0=2}let JJ=s.drawRange,XJ=s.attributes.position,j0=JJ.start*h0,VJ=(JJ.start+JJ.count)*h0;if(L0!==null)j0=Math.max(j0,L0.start*h0),VJ=Math.min(VJ,(L0.start+L0.count)*h0);if(f0!==null)j0=Math.max(j0,0),VJ=Math.min(VJ,f0.count);else if(XJ!==void 0&&XJ!==null)j0=Math.max(j0,0),VJ=Math.min(VJ,XJ.count);let uJ=VJ-j0;if(uJ<0||uJ===1/0)return;k0.setup(g,p,R0,s,f0);let fJ,_J=h;if(f0!==null)fJ=N0.get(f0),_J=V0,_J.setIndex(fJ);if(g.isMesh)if(p.wireframe===!0)P.setLineWidth(p.wireframeLinewidth*iJ()),_J.setMode(v.LINES);else _J.setMode(v.TRIANGLES);else if(g.isLine){let mJ=p.linewidth;if(mJ===void 0)mJ=1;if(P.setLineWidth(mJ*iJ()),g.isLineSegments)_J.setMode(v.LINES);else if(g.isLineLoop)_J.setMode(v.LINE_LOOP);else _J.setMode(v.LINE_STRIP)}else if(g.isPoints)_J.setMode(v.POINTS);else if(g.isSprite)_J.setMode(v.TRIANGLES);if(g.isBatchedMesh)if(!kJ.get("WEBGL_multi_draw")){let{_multiDrawStarts:mJ,_multiDrawCounts:S0,_multiDrawCount:R8}=g,RJ=f0?N0.get(f0).bytesPerElement:1,C8=j.get(p).currentProgram.getUniforms();for(let lJ=0;lJ<R8;lJ++)C8.setValue(v,"_gl_DrawID",lJ),_J.render(mJ[lJ]/RJ,S0[lJ])}else _J.renderMultiDraw(g._multiDrawStarts,g._multiDrawCounts,g._multiDrawCount);else if(g.isInstancedMesh)_J.renderInstances(j0,uJ,g.count);else if(s.isInstancedBufferGeometry){let mJ=s._maxInstanceCount!==void 0?s._maxInstanceCount:1/0,S0=Math.min(s.instanceCount,mJ);_J.renderInstances(j0,uJ,S0)}else _J.render(j0,uJ)};function q$(C,f,s,p){if(y!==null&&C.isNodeMaterial)y.setObject(p,C);if(KJ===!0)F0.setState(C,s,!1);if(C.transparent===!0&&C.side===W8&&C.forceSinglePass===!1)C.side=L8,C.needsUpdate=!0,o9(C,f,p),C.side=H7,C.needsUpdate=!0,o9(C,f,p),C.side=W8;else o9(C,f,p)}this.compile=function(C,f,s=null){if(s===null)s=C;if(y!==null)y.renderStart(C,f,s);if(M=B0.get(s),M.init(f),w.push(M),s.traverseVisible(function(g){if(g.isLight&&g.layers.test(f.layers)){if(M.pushLight(g),g.castShadow)M.pushShadow(g)}}),C!==s)C.traverseVisible(function(g){if(g.isLight&&g.layers.test(f.layers)){if(M.pushLight(g),g.castShadow)M.pushShadow(g)}});if(M.setupLights(),y!==null)y.updateLights(M.state.lightsArray);if(DJ=this.localClippingEnabled,KJ=F0.init(this.clippingPlanes,DJ),KJ===!0)F0.setGlobalState(this.clippingPlanes,f);if(y!==null)x0.render(M.state.shadowsArray,s,f);let p=new Set;if(C.traverse(function(g){if(!(g.isMesh||g.isPoints||g.isLine||g.isSprite))return;let L0=g.material;if(L0)if(Array.isArray(L0))for(let w0=0;w0<L0.length;w0++){let R0=L0[w0];q$(R0,s,f,g),p.add(R0)}else q$(L0,s,f,g),p.add(L0)}),M=w.pop(),y!==null)y.renderEnd();return p},this.compileAsync=function(C,f,s=null){let p=this.compile(C,f,s);return new Promise((g)=>{function L0(){if(p.forEach(function(w0){let f0=j.get(w0).currentProgram;if(f0===void 0||f0.isReady())p.delete(w0)}),p.size===0){g(C);return}setTimeout(L0,10)}if(kJ.get("KHR_parallel_shader_compile")!==null)L0();else setTimeout(L0,10)})};let Z6=null;function K6(C){if(Z6)Z6(C)}function i9(){V9.stop()}function sW(){V9.start()}let V9=new YU;if(V9.setAnimationLoop(K6),typeof self<"u")V9.setContext(self);this.setAnimationLoop=function(C){Z6=C,M0.setAnimationLoop(C),C===null?V9.stop():V9.start()},M0.addEventListener("sessionstart",i9),M0.addEventListener("sessionend",sW),this.render=function(C,f){if(f!==void 0&&f.isCamera!==!0){o0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;if(y!==null)y.renderStart(C,f);let s=M0.enabled===!0&&M0.isPresenting===!0,p=B!==null&&(x===null||s)&&B.begin(A,x);if(C.matrixWorldAutoUpdate===!0)C.updateMatrixWorld();if(f.parent===null&&f.matrixWorldAutoUpdate===!0)f.updateMatrixWorld();if(M0.enabled===!0&&M0.isPresenting===!0&&(B===null||B.isCompositing()===!1)){if(M0.cameraAutoUpdate===!0)M0.updateCamera(f);f=M0.getCamera()}if(C.isScene===!0)C.onBeforeRender(A,C,f,x);if(M=B0.get(C,w.length),M.init(f),M.state.textureUnits=l.getTextureUnits(),w.push(M),FJ.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),e0.setFromProjectionMatrix(FJ,DK,f.reversedDepth),DJ=this.localClippingEnabled,KJ=F0.init(this.clippingPlanes,DJ),L=b0.get(C,I.length),L.init(),I.push(L),M0.enabled===!0&&M0.isPresenting===!0){let w0=A.xr.getDepthSensingMesh();if(w0!==null)QQ(w0,f,-1/0,A.sortObjects)}if(QQ(C,f,0,A.sortObjects),L.finish(),y!==null)y.updateLights(M.state.lightsArray);if(A.sortObjects===!0)L.sort(q0,l0);if(sJ=M0.enabled===!1||M0.isPresenting===!1||M0.hasDepthSensing()===!1,sJ)m0.addToRenderList(L,C);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(KJ===!0)F0.beginShadows();let g=M.state.shadowsArray;if(x0.render(g,C,f),KJ===!0)F0.endShadows();if((p&&B.hasRenderPass())===!1){let{opaque:w0,transmissive:R0}=L;if(M.setupLights(),f.isArrayCamera){let f0=f.cameras;if(R0.length>0)for(let h0=0,JJ=f0.length;h0<JJ;h0++){let XJ=f0[h0];u8(w0,R0,C,XJ)}if(sJ)m0.render(C);for(let h0=0,JJ=f0.length;h0<JJ;h0++){let XJ=f0[h0];Z8(L,C,XJ,XJ.viewport)}}else{if(R0.length>0)u8(w0,R0,C,f);if(sJ)m0.render(C);Z8(L,C,f)}}if(x!==null&&c===0)l.updateMultisampleRenderTarget(x),l.updateRenderTargetMipmap(x);if(p)B.end(A);if(C.isScene===!0)C.onAfterRender(A,C,f);if(k0.resetDefaultState(),K0=-1,n=null,w.pop(),w.length>0){if(M=w[w.length-1],l.setTextureUnits(M.state.textureUnits),KJ===!0)F0.setGlobalState(A.clippingPlanes,M.state.camera)}else M=null;if(I.pop(),I.length>0)L=I[I.length-1];else L=null;if(y!==null)y.renderEnd()};function QQ(C,f,s,p){if(C.visible===!1)return;if(C.layers.test(f.layers)){if(C.isGroup)s=C.renderOrder;else if(C.isLOD){if(C.autoUpdate===!0)C.update(f)}else if(C.isLightProbeGrid)M.pushLightProbeGrid(C);else if(C.isLight){if(M.pushLight(C),C.castShadow)M.pushShadow(C)}else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(e0)){if(p)vJ.setFromMatrixPosition(C.matrixWorld).applyMatrix4(FJ);let w0=a.update(C),R0=C.material;if(R0.visible)L.push(C,w0,R0,s,vJ.z,null,f)}}else if(C.isMesh||C.isLine||C.isPoints){if(!C.frustumCulled||C.intersectsFrustum(e0)){let w0=a.update(C),R0=C.material;if(p){if(C.boundingSphere!==void 0){if(C.boundingSphere===null)C.computeBoundingSphere();vJ.copy(C.boundingSphere.center)}else{if(w0.boundingSphere===null)w0.computeBoundingSphere();vJ.copy(w0.boundingSphere.center)}vJ.applyMatrix4(C.matrixWorld).applyMatrix4(FJ)}if(Array.isArray(R0)){let f0=w0.groups;for(let h0=0,JJ=f0.length;h0<JJ;h0++){let XJ=f0[h0],j0=R0[XJ.materialIndex];if(j0&&j0.visible)L.push(C,w0,j0,s,vJ.z,XJ,f)}}else if(R0.visible)L.push(C,w0,R0,s,vJ.z,null,f)}}}let L0=C.children;for(let w0=0,R0=L0.length;w0<R0;w0++)QQ(L0[w0],f,s,p)}function Z8(C,f,s,p){let{opaque:g,transmissive:L0,transparent:w0}=C;if(M.setupLightsView(s),KJ===!0)F0.setGlobalState(A.clippingPlanes,s);if(p)P.viewport($0.copy(p));if(g.length>0)H6(g,f,s);if(L0.length>0)H6(L0,f,s);if(w0.length>0)H6(w0,f,s);P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function u8(C,f,s,p){if((s.isScene===!0?s.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[p.id]===void 0){let j0=kJ.has("EXT_color_buffer_half_float")||kJ.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[p.id]=new eJ(1,1,{generateMipmaps:!0,type:j0?E8:G9,minFilter:C9,samples:Math.max(4,bJ.samples),stencilBuffer:Z,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ZJ.workingColorSpace})}let L0=M.state.transmissionRenderTarget[p.id],w0=p.viewport||$0;L0.setSize(w0.z*A.transmissionResolutionScale,w0.w*A.transmissionResolutionScale);let R0=A.getRenderTarget(),f0=A.getActiveCubeFace(),h0=A.getActiveMipmapLevel();if(A.setRenderTarget(L0),A.getClearColor(I0),i0=A.getClearAlpha(),i0<1)A.setClearColor(16777215,0.5);if(A.clear(),sJ)m0.render(s);let JJ=A.toneMapping;A.toneMapping=X9;let XJ=p.viewport;if(p.viewport!==void 0)p.viewport=void 0;if(M.setupLightsView(p),KJ===!0)F0.setGlobalState(A.clippingPlanes,p);if(H6(C,s,p),l.updateMultisampleRenderTarget(L0),l.updateRenderTargetMipmap(L0),kJ.has("WEBGL_multisampled_render_to_texture")===!1){let j0=!1;for(let VJ=0,uJ=f.length;VJ<uJ;VJ++){let fJ=f[VJ],{object:_J,geometry:mJ,material:S0,group:R8}=fJ;if(S0.side===W8&&_J.layers.test(p.layers)){let RJ=S0.side;S0.side=L8,S0.needsUpdate=!0,$Q(_J,s,p,mJ,S0,R8),S0.side=RJ,S0.needsUpdate=!0,j0=!0}}if(j0===!0)l.updateMultisampleRenderTarget(L0),l.updateRenderTargetMipmap(L0)}if(A.setRenderTarget(R0,f0,h0),A.setClearColor(I0,i0),XJ!==void 0)p.viewport=XJ;A.toneMapping=JJ}function H6(C,f,s){let p=f.isScene===!0?f.overrideMaterial:null;for(let g=0,L0=C.length;g<L0;g++){let w0=C[g],{object:R0,geometry:f0,group:h0}=w0,JJ=w0.material;if(JJ.allowOverride===!0&&p!==null)JJ=p;if(R0.layers.test(s.layers))$Q(R0,f,s,f0,JJ,h0)}}function $Q(C,f,s,p,g,L0){if(y!==null&&g.isNodeMaterial)y.setObject(C,g);if(C.onBeforeRender(A,f,s,p,g,L0),C.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),g.onBeforeRender(A,f,s,p,C,L0),g.transparent===!0&&g.side===W8&&g.forceSinglePass===!1)g.side=L8,g.needsUpdate=!0,A.renderBufferDirect(s,f,p,g,C,L0),g.side=H7,g.needsUpdate=!0,A.renderBufferDirect(s,f,p,g,C,L0),g.side=W8;else A.renderBufferDirect(s,f,p,g,C,L0);C.onAfterRender(A,f,s,p,g,L0)}function o9(C,f,s){if(f.isScene!==!0)f=q8;let p=j.get(C),g=M.state.lights,L0=M.state.shadowsArray,w0=g.state.version,R0=t.getParameters(C,g.state,L0,f,s,M.state.lightProbeGridArray),f0=t.getProgramCacheKey(R0),h0=p.programs;p.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?f.environment:null,p.fog=f.fog;let JJ=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;if(p.envMap=Y0.get(C.envMap||p.environment,JJ),p.envMapRotation=p.environment!==null&&C.envMap===null?f.environmentRotation:C.envMapRotation,h0===void 0)C.addEventListener("dispose",xJ),h0=new Map,p.programs=h0;let XJ=h0.get(f0);if(XJ!==void 0){if(p.currentProgram===XJ&&p.lightsStateVersion===w0)return z7(C,R0),XJ}else{if(R0.uniforms=t.getUniforms(C),y!==null&&C.isNodeMaterial)y.build(C,s,R0);C.onBeforeCompile(R0,A),XJ=t.acquireProgram(R0,f0),h0.set(f0,XJ),p.uniforms=R0.uniforms}let j0=p.uniforms;if(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)j0.clippingPlanes=F0.uniform;if(z7(C,R0),p.needsLights=O$(C),p.lightsStateVersion=w0,p.needsLights)j0.ambientLightColor.value=g.state.ambient,j0.lightProbe.value=g.state.probe,j0.sunLights.value=g.state.sun,j0.sunLightShadows.value=g.state.sunShadow,j0.directionalLights.value=g.state.directional,j0.directionalLightShadows.value=g.state.directionalShadow,j0.spotLights.value=g.state.spot,j0.spotLightShadows.value=g.state.spotShadow,j0.rectAreaLights.value=g.state.rectArea,j0.ltc_1.value=g.state.rectAreaLTC1,j0.ltc_2.value=g.state.rectAreaLTC2,j0.pointLights.value=g.state.point,j0.pointLightShadows.value=g.state.pointShadow,j0.hemisphereLights.value=g.state.hemi,j0.sunShadowMatrix.value=g.state.sunShadowMatrix,j0.sunShadowCascade.value=g.state.sunShadowCascade,j0.directionalShadowMatrix.value=g.state.directionalShadowMatrix,j0.spotLightMatrix.value=g.state.spotLightMatrix,j0.spotLightMap.value=g.state.spotLightMap,j0.pointShadowMatrix.value=g.state.pointShadowMatrix;return p.lightProbeGrid=M.state.lightProbeGridArray.length>0,p.currentProgram=XJ,p.uniformsList=null,XJ}function Y6(C){if(C.uniformsList===null){let f=C.currentProgram.getUniforms();C.uniformsList=Q$.seqWithValue(f.seq,C.uniforms)}return C.uniformsList}function z7(C,f){let s=j.get(C);s.outputColorSpace=f.outputColorSpace,s.batching=f.batching,s.batchingColor=f.batchingColor,s.instancing=f.instancing,s.instancingColor=f.instancingColor,s.instancingMorph=f.instancingMorph,s.skinning=f.skinning,s.morphTargets=f.morphTargets,s.morphNormals=f.morphNormals,s.morphColors=f.morphColors,s.morphTargetsCount=f.morphTargetsCount,s.numClippingPlanes=f.numClippingPlanes,s.numIntersection=f.numClipIntersection,s.vertexAlphas=f.vertexAlphas,s.vertexTangents=f.vertexTangents,s.toneMapping=f.toneMapping}function T8(C,f){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;D.setFromMatrixPosition(f.matrixWorld);for(let s=0,p=C.length;s<p;s++){let g=C[s];if(g.texture!==null&&g.boundingBox.containsPoint(D))return g}return null}function WQ(C,f,s,p,g){if(f.isScene!==!0)f=q8;l.resetTextureUnits();let L0=f.fog,w0=p.isMeshStandardMaterial||p.isMeshLambertMaterial||p.isMeshPhongMaterial?f.environment:null,R0=x===null?A.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:ZJ.workingColorSpace,f0=p.isMeshStandardMaterial||p.isMeshLambertMaterial&&!p.envMap||p.isMeshPhongMaterial&&!p.envMap,h0=Y0.get(p.envMap||w0,f0),JJ=p.vertexColors===!0&&!!s.attributes.color&&s.attributes.color.itemSize===4,XJ=!!s.attributes.tangent&&(!!p.normalMap||p.anisotropy>0),j0=!!s.morphAttributes.position,VJ=!!s.morphAttributes.normal,uJ=!!s.morphAttributes.color,fJ=X9;if(p.toneMapped){if(x===null||x.isXRRenderTarget===!0)fJ=A.toneMapping}let _J=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,mJ=_J!==void 0?_J.length:0,S0=j.get(p),R8=M.state.lights;if(KJ===!0){if(DJ===!0||C!==n){let CJ=C===n&&p.id===K0;F0.setState(p,C,CJ)}}let RJ=!1;if(p.version===S0.__version){if(S0.needsLights&&S0.lightsStateVersion!==R8.state.version)RJ=!0;else if(S0.outputColorSpace!==R0)RJ=!0;else if(g.isBatchedMesh&&S0.batching===!1)RJ=!0;else if(!g.isBatchedMesh&&S0.batching===!0)RJ=!0;else if(g.isBatchedMesh&&S0.batchingColor===!0&&g._colorsTexture===null)RJ=!0;else if(g.isBatchedMesh&&S0.batchingColor===!1&&g._colorsTexture!==null)RJ=!0;else if(g.isInstancedMesh&&S0.instancing===!1)RJ=!0;else if(!g.isInstancedMesh&&S0.instancing===!0)RJ=!0;else if(g.isSkinnedMesh&&S0.skinning===!1)RJ=!0;else if(!g.isSkinnedMesh&&S0.skinning===!0)RJ=!0;else if(g.isInstancedMesh&&S0.instancingColor===!0&&g.instanceColor===null)RJ=!0;else if(g.isInstancedMesh&&S0.instancingColor===!1&&g.instanceColor!==null)RJ=!0;else if(g.isInstancedMesh&&S0.instancingMorph===!0&&g.morphTexture===null)RJ=!0;else if(g.isInstancedMesh&&S0.instancingMorph===!1&&g.morphTexture!==null)RJ=!0;else if(S0.envMap!==h0)RJ=!0;else if(p.fog===!0&&S0.fog!==L0)RJ=!0;else if(S0.numClippingPlanes!==void 0&&(S0.numClippingPlanes!==F0.numPlanes||S0.numIntersection!==F0.numIntersection))RJ=!0;else if(S0.vertexAlphas!==JJ)RJ=!0;else if(S0.vertexTangents!==XJ)RJ=!0;else if(S0.morphTargets!==j0)RJ=!0;else if(S0.morphNormals!==VJ)RJ=!0;else if(S0.morphColors!==uJ)RJ=!0;else if(S0.toneMapping!==fJ)RJ=!0;else if(S0.morphTargetsCount!==mJ)RJ=!0;else if(!!S0.lightProbeGrid!==M.state.lightProbeGridArray.length>0)RJ=!0}else RJ=!0,S0.__version=p.version;let C8=S0.currentProgram;if(RJ===!0){if(C8=o9(p,f,g),y&&p.isNodeMaterial)y.onUpdateProgram(p,C8,S0)}let lJ=!1,w8=!1,D9=!1,BJ=C8.getUniforms(),hJ=S0.uniforms;if(P.useProgram(C8.program))lJ=!0,w8=!0,D9=!0;if(p.id!==K0)K0=p.id,w8=!0;if(S0.needsLights){let CJ=T8(M.state.lightProbeGridArray,g);if(S0.lightProbeGrid!==CJ)S0.lightProbeGrid=CJ,w8=!0}if(lJ||n!==C){if(P.buffers.depth.getReversed()&&C.reversedDepth!==!0)C._reversedDepth=!0,C.updateProjectionMatrix();BJ.setValue(v,"projectionMatrix",C.projectionMatrix),BJ.setValue(v,"viewMatrix",C.matrixWorldInverse);let S8=BJ.map.cameraPosition;if(S8!==void 0)S8.setValue(v,rJ.setFromMatrixPosition(C.matrixWorld));if(bJ.logarithmicDepthBuffer)BJ.setValue(v,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2));if(p.isMeshPhongMaterial||p.isMeshToonMaterial||p.isMeshLambertMaterial||p.isMeshBasicMaterial||p.isMeshStandardMaterial||p.isShaderMaterial)BJ.setValue(v,"isOrthographic",C.isOrthographicCamera===!0);if(n!==C)n=C,w8=!0,D9=!0}if(S0.needsLights){if(R8.state.sunShadowMap.length>0)BJ.setValue(v,"sunShadowMap",R8.state.sunShadowMap,l);if(R8.state.directionalShadowMap.length>0)BJ.setValue(v,"directionalShadowMap",R8.state.directionalShadowMap,l);if(R8.state.spotShadowMap.length>0)BJ.setValue(v,"spotShadowMap",R8.state.spotShadowMap,l);if(R8.state.pointShadowMap.length>0)BJ.setValue(v,"pointShadowMap",R8.state.pointShadowMap,l)}if(g.isSkinnedMesh){BJ.setOptional(v,g,"bindMatrix"),BJ.setOptional(v,g,"bindMatrixInverse");let CJ=g.skeleton;if(CJ){if(CJ.boneTexture===null)CJ.computeBoneTexture();BJ.setValue(v,"boneTexture",CJ.boneTexture,l)}}if(g.isBatchedMesh){if(BJ.setOptional(v,g,"batchingTexture"),BJ.setValue(v,"batchingTexture",g._matricesTexture,l),BJ.setOptional(v,g,"batchingIdTexture"),BJ.setValue(v,"batchingIdTexture",g._indirectTexture,l),BJ.setOptional(v,g,"batchingColorTexture"),g._colorsTexture!==null)BJ.setValue(v,"batchingColorTexture",g._colorsTexture,l)}let Q9=s.morphAttributes;if(Q9.position!==void 0||Q9.normal!==void 0||Q9.color!==void 0)OJ.update(g,s,C8);if(w8||S0.receiveShadow!==g.receiveShadow)S0.receiveShadow=g.receiveShadow,BJ.setValue(v,"receiveShadow",g.receiveShadow);if((p.isMeshStandardMaterial||p.isMeshLambertMaterial||p.isMeshPhongMaterial)&&p.envMap===null&&f.environment!==null)hJ.envMapIntensity.value=f.environmentIntensity;if(hJ.dfgLUT!==void 0)hJ.dfgLUT.value=lq();if(w8){if(BJ.setValue(v,"toneMappingExposure",A.toneMappingExposure),S0.needsLights)iW(hJ,D9);if(L0&&p.fog===!0)C0.refreshFogUniforms(hJ,L0);if(C0.refreshMaterialUniforms(hJ,p,E0,o,M.state.transmissionRenderTarget[C.id]),S0.needsLights&&S0.lightProbeGrid){let CJ=S0.lightProbeGrid;hJ.probesSH.value=CJ.texture,hJ.probesMin.value.copy(CJ.boundingBox.min),hJ.probesMax.value.copy(CJ.boundingBox.max),hJ.probesResolution.value.copy(CJ.resolution)}Q$.upload(v,Y6(S0),hJ,l)}if(p.isShaderMaterial&&p.uniformsNeedUpdate===!0)Q$.upload(v,Y6(S0),hJ,l),p.uniformsNeedUpdate=!1;if(p.isSpriteMaterial)BJ.setValue(v,"center",g.center);if(BJ.setValue(v,"modelViewMatrix",g.modelViewMatrix),BJ.setValue(v,"normalMatrix",g.normalMatrix),BJ.setValue(v,"modelMatrix",g.matrixWorld),p.uniformsGroups!==void 0){let CJ=p.uniformsGroups;for(let S8=0,$9=CJ.length;S8<$9;S8++){let ZQ=CJ[S8];T0.update(ZQ,C8),T0.bind(ZQ,C8)}}return C8}function iW(C,f){C.ambientLightColor.needsUpdate=f,C.lightProbe.needsUpdate=f,C.sunLights.needsUpdate=f,C.sunLightShadows.needsUpdate=f,C.directionalLights.needsUpdate=f,C.directionalLightShadows.needsUpdate=f,C.pointLights.needsUpdate=f,C.pointLightShadows.needsUpdate=f,C.spotLights.needsUpdate=f,C.spotLightShadows.needsUpdate=f,C.rectAreaLights.needsUpdate=f,C.hemisphereLights.needsUpdate=f}function O$(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return i},this.getActiveMipmapLevel=function(){return c},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(C,f,s){let p=j.get(C);if(p.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,p.__autoAllocateDepthBuffer===!1)p.__useRenderToTexture=!1;j.get(C.texture).__webglTexture=f,j.get(C.depthTexture).__webglTexture=p.__autoAllocateDepthBuffer?void 0:s,p.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,f){let s=j.get(C);s.__webglFramebuffer=f,s.__useDefaultFramebuffer=f===void 0},this.setRenderTarget=function(C,f=0,s=0){x=C,i=f,c=s;let p=null,g=!1,L0=!1;if(C){let R0=j.get(C);if(R0.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(v.FRAMEBUFFER,R0.__webglFramebuffer),$0.copy(C.viewport),U0.copy(C.scissor),u0=C.scissorTest,P.viewport($0),P.scissor(U0),P.setScissorTest(u0),K0=-1;return}else if(R0.__webglFramebuffer===void 0)l.setupRenderTarget(C);else if(R0.__hasExternalTextures)l.rebindTextures(C,j.get(C.texture).__webglTexture,j.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let JJ=C.depthTexture;if(R0.__boundDepthTexture!==JJ){if(JJ!==null&&j.has(JJ)&&(C.width!==JJ.image.width||C.height!==JJ.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");l.setupDepthRenderbuffer(C)}}let f0=C.texture;if(f0.isData3DTexture||f0.isDataArrayTexture||f0.isCompressedArrayTexture)L0=!0;let h0=j.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget){if(Array.isArray(h0[f]))p=h0[f][s];else p=h0[f];g=!0}else if(C.samples>0&&l.useMultisampledRTT(C)===!1)p=j.get(C).__webglMultisampledFramebuffer;else if(Array.isArray(h0))p=h0[s];else p=h0;$0.copy(C.viewport),U0.copy(C.scissor),u0=C.scissorTest}else $0.copy(c0).multiplyScalar(E0).floor(),U0.copy(p0).multiplyScalar(E0).floor(),u0=aJ;if(s!==0)p=b;if(P.bindFramebuffer(v.FRAMEBUFFER,p))P.drawBuffers(C,p);if(P.viewport($0),P.scissor(U0),P.setScissorTest(u0),g){let R0=j.get(C.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+f,R0.__webglTexture,s)}else if(L0){let R0=f;for(let f0=0;f0<C.textures.length;f0++){let h0=j.get(C.textures[f0]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+f0,h0.__webglTexture,s,R0)}}else if(C!==null&&s!==0){let R0=j.get(C.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,R0.__webglTexture,s)}K0=-1};function w9(C){let f=j.get(C);if(f.__readFormat!==C.format||f.__readType!==C.type)f.__readFormat=C.format,f.__readType=C.type,f.__formatReadable=bJ.textureFormatReadable(C.format),f.__typeReadable=bJ.textureTypeReadable(C.type);return f}if(this.readRenderTargetPixels=function(C,f,s,p,g,L0,w0,R0=0){if(!(C&&C.isWebGLRenderTarget)){o0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let f0=j.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&w0!==void 0)f0=f0[w0];if(f0){P.bindFramebuffer(v.FRAMEBUFFER,f0);try{let h0=C.textures[R0],JJ=h0.format,XJ=h0.type;if(C.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+R0);let j0=w9(h0);if(j0.__formatReadable===!1){o0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(j0.__typeReadable===!1){o0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(f>=0&&f<=C.width-p&&(s>=0&&s<=C.height-g))v.readPixels(f,s,p,g,e.convert(JJ),e.convert(XJ),L0)}finally{let h0=x!==null?j.get(x).__webglFramebuffer:null;P.bindFramebuffer(v.FRAMEBUFFER,h0)}}},this.readRenderTargetPixelsAsync=async function(C,f,s,p,g,L0,w0,R0=0){if(!(C&&C.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let f0=j.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&w0!==void 0)f0=f0[w0];if(f0)if(f>=0&&f<=C.width-p&&(s>=0&&s<=C.height-g)){P.bindFramebuffer(v.FRAMEBUFFER,f0);let h0=C.textures[R0],JJ=h0.format,XJ=h0.type;if(C.textures.length>1)v.readBuffer(v.COLOR_ATTACHMENT0+R0);let j0=w9(h0);if(j0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(j0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let VJ=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,VJ),v.bufferData(v.PIXEL_PACK_BUFFER,L0.byteLength,v.STREAM_READ),v.readPixels(f,s,p,g,e.convert(JJ),e.convert(XJ),0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null);let uJ=x!==null?j.get(x).__webglFramebuffer:null;P.bindFramebuffer(v.FRAMEBUFFER,uJ);let fJ=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await zX(v,fJ,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,VJ),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,L0),v.bindBuffer(v.PIXEL_PACK_BUFFER,null),v.deleteBuffer(VJ),v.deleteSync(fJ),L0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,f=null,s=0){let p=Math.pow(2,-s),g=Math.floor(C.image.width*p),L0=Math.floor(C.image.height*p),w0=f!==null?f.x:0,R0=f!==null?f.y:0;l.setTexture2D(C,0),v.copyTexSubImage2D(v.TEXTURE_2D,s,0,0,w0,R0,g,L0),P.unbindTexture()},this.copyTextureToTexture=function(C,f,s=null,p=null,g=0,L0=0){let w0,R0,f0,h0,JJ,XJ,j0,VJ,uJ,fJ=C.isCompressedTexture?C.mipmaps[L0]:C.image;if(s!==null)w0=s.max.x-s.min.x,R0=s.max.y-s.min.y,f0=s.isBox3?s.max.z-s.min.z:1,h0=s.min.x,JJ=s.min.y,XJ=s.isBox3?s.min.z:0;else{let hJ=Math.pow(2,-g);if(w0=Math.floor(fJ.width*hJ),R0=Math.floor(fJ.height*hJ),C.isDataArrayTexture)f0=fJ.depth;else if(C.isData3DTexture)f0=Math.floor(fJ.depth*hJ);else f0=1;h0=0,JJ=0,XJ=0}if(p!==null)j0=p.x,VJ=p.y,uJ=p.z;else j0=0,VJ=0,uJ=0;let _J=e.convert(f.format),mJ=e.convert(f.type),S0;if(f.isData3DTexture)l.setTexture3D(f,0),S0=v.TEXTURE_3D;else if(f.isDataArrayTexture||f.isCompressedArrayTexture)l.setTexture2DArray(f,0),S0=v.TEXTURE_2D_ARRAY;else l.setTexture2D(f,0),S0=v.TEXTURE_2D;P.activeTexture(v.TEXTURE0),P.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,f.flipY),P.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),P.pixelStorei(v.UNPACK_ALIGNMENT,f.unpackAlignment);let R8=P.getParameter(v.UNPACK_ROW_LENGTH),RJ=P.getParameter(v.UNPACK_IMAGE_HEIGHT),C8=P.getParameter(v.UNPACK_SKIP_PIXELS),lJ=P.getParameter(v.UNPACK_SKIP_ROWS),w8=P.getParameter(v.UNPACK_SKIP_IMAGES);P.pixelStorei(v.UNPACK_ROW_LENGTH,fJ.width),P.pixelStorei(v.UNPACK_IMAGE_HEIGHT,fJ.height),P.pixelStorei(v.UNPACK_SKIP_PIXELS,h0),P.pixelStorei(v.UNPACK_SKIP_ROWS,JJ),P.pixelStorei(v.UNPACK_SKIP_IMAGES,XJ);let D9=C.isDataArrayTexture||C.isData3DTexture,BJ=f.isDataArrayTexture||f.isData3DTexture;if(C.isDepthTexture){let hJ=j.get(C),Q9=j.get(f),CJ=j.get(hJ.__renderTarget),S8=j.get(Q9.__renderTarget);P.bindFramebuffer(v.READ_FRAMEBUFFER,CJ.__webglFramebuffer),P.bindFramebuffer(v.DRAW_FRAMEBUFFER,S8.__webglFramebuffer);for(let $9=0;$9<f0;$9++){if(D9)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,j.get(C).__webglTexture,g,XJ+$9),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,j.get(f).__webglTexture,L0,uJ+$9);v.blitFramebuffer(h0,JJ,w0,R0,j0,VJ,w0,R0,v.DEPTH_BUFFER_BIT,v.NEAREST)}P.bindFramebuffer(v.READ_FRAMEBUFFER,null),P.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(g!==0||C.isRenderTargetTexture||j.has(C)){let hJ=j.get(C),Q9=j.get(f);P.bindFramebuffer(v.READ_FRAMEBUFFER,J0),P.bindFramebuffer(v.DRAW_FRAMEBUFFER,S);for(let CJ=0;CJ<f0;CJ++){if(D9)v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,hJ.__webglTexture,g,XJ+CJ);else v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,hJ.__webglTexture,g);if(BJ)v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Q9.__webglTexture,L0,uJ+CJ);else v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Q9.__webglTexture,L0);if(g!==0)v.blitFramebuffer(h0,JJ,w0,R0,j0,VJ,w0,R0,v.COLOR_BUFFER_BIT,v.NEAREST);else if(BJ)v.copyTexSubImage3D(S0,L0,j0,VJ,uJ+CJ,h0,JJ,w0,R0);else v.copyTexSubImage2D(S0,L0,j0,VJ,h0,JJ,w0,R0)}P.bindFramebuffer(v.READ_FRAMEBUFFER,null),P.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(BJ)if(C.isDataTexture||C.isData3DTexture)v.texSubImage3D(S0,L0,j0,VJ,uJ,w0,R0,f0,_J,mJ,fJ.data);else if(f.isCompressedArrayTexture)v.compressedTexSubImage3D(S0,L0,j0,VJ,uJ,w0,R0,f0,_J,fJ.data);else v.texSubImage3D(S0,L0,j0,VJ,uJ,w0,R0,f0,_J,mJ,fJ);else if(C.isDataTexture)v.texSubImage2D(v.TEXTURE_2D,L0,j0,VJ,w0,R0,_J,mJ,fJ.data);else if(C.isCompressedTexture)v.compressedTexSubImage2D(v.TEXTURE_2D,L0,j0,VJ,fJ.width,fJ.height,_J,fJ.data);else v.texSubImage2D(v.TEXTURE_2D,L0,j0,VJ,w0,R0,_J,mJ,fJ);if(P.pixelStorei(v.UNPACK_ROW_LENGTH,R8),P.pixelStorei(v.UNPACK_IMAGE_HEIGHT,RJ),P.pixelStorei(v.UNPACK_SKIP_PIXELS,C8),P.pixelStorei(v.UNPACK_SKIP_ROWS,lJ),P.pixelStorei(v.UNPACK_SKIP_IMAGES,w8),L0===0&&f.generateMipmaps)v.generateMipmap(S0);P.unbindTexture()},this.initRenderTarget=function(C){if(j.get(C).__webglFramebuffer===void 0)l.setupRenderTarget(C)},this.initTexture=function(C){if(C.isCubeTexture)l.setTextureCube(C,0);else if(C.isData3DTexture)l.setTexture3D(C,0);else if(C.isDataArrayTexture||C.isCompressedArrayTexture)l.setTexture2DArray(C,0);else l.setTexture2D(C,0);P.unbindTexture()},this.resetState=function(){i=0,c=0,x=null,P.reset(),k0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return DK}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=ZJ._getDrawingBufferColorSpace(J),Q.unpackColorSpace=ZJ._getUnpackColorSpace()}}function fW(J,Q=!1){let $=J[0].index!==null,W=new Set(Object.keys(J[0].attributes)),Z=new Set(Object.keys(J[0].morphAttributes)),K={},H={},Y=J[0].morphTargetsRelative,X=new jJ,U=0;for(let N=0;N<J.length;++N){let E=J[N],G=0;if($!==(E.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let F in E.attributes){if(!W.has(F))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+'. All geometries must have compatible attributes; make sure "'+F+'" attribute exists among all geometries, or in none of them.'),null;if(K[F]===void 0)K[F]=[];K[F].push(E.attributes[F]),G++}if(G!==W.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". Make sure all geometries have the same number of attributes."),null;if(Y!==E.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let F in E.morphAttributes){if(!Z.has(F))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+".  .morphAttributes must be consistent throughout all geometries."),null;if(H[F]===void 0)H[F]=[];H[F].push(E.morphAttributes[F])}if(Q){let F;if($)F=E.index.count;else if(E.attributes.position!==void 0)F=E.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". The geometry must have either an index or a position attribute"),null;X.addGroup(U,F,N),U+=F}}if($){let N=0,E=[];for(let G=0;G<J.length;++G){let F=J[G].index;for(let q=0;q<F.count;++q)E.push(F.getX(q)+N);N+=J[G].attributes.position.count}X.setIndex(E)}for(let N in K){let E=kU(K[N]);if(!E)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+N+" attribute."),null;X.setAttribute(N,E)}for(let N in H){let E=H[N][0].length;if(E===0)continue;X.morphAttributes=X.morphAttributes||{},X.morphAttributes[N]=[];for(let G=0;G<E;++G){let F=[];for(let V=0;V<H[N].length;++V)F.push(H[N][V][G]);let q=kU(F);if(!q)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+N+" morphAttribute."),null;X.morphAttributes[N].push(q)}}return X}function kU(J){let Q,$,W,Z=-1,K=0;for(let U=0;U<J.length;++U){let N=J[U];if(Q===void 0)Q=N.array.constructor;if(Q!==N.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if($===void 0)$=N.itemSize;if($!==N.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(W===void 0)W=N.normalized;if(W!==N.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(Z===-1)Z=N.gpuType;if(Z!==N.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;K+=N.count*$}let H=new Q(K),Y=new oJ(H,$,W),X=0;for(let U=0;U<J.length;++U){let N=J[U];if(N.isInterleavedBufferAttribute){let E=X/$;for(let G=0,F=N.count;G<F;G++)for(let q=0;q<$;q++){let V=N.getComponent(G,q);Y.setComponent(G+E,q,V)}}else H.set(N.array,X);X+=N.count*$}if(Z!==void 0)Y.gpuType=Z;return Y}function WH(J,Q){if(Q===OK)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if(Q===x6||Q===vQ){let $=J.getIndex();if($===null){let K=[],H=J.getAttribute("position");if(H!==void 0){for(let Y=0;Y<H.count;Y++)K.push(Y);J.setIndex(K),$=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let W=$.count-2,Z=[];if(Q===x6)for(let K=1;K<=W;K++)Z.push($.getX(0)),Z.push($.getX(K)),Z.push($.getX(K+1));else for(let K=0;K<W;K++)if(K%2===0)Z.push($.getX(K)),Z.push($.getX(K+1)),Z.push($.getX(K+2));else Z.push($.getX(K+2)),Z.push($.getX(K+1)),Z.push($.getX(K));if(Z.length/3!==W)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return J.setIndex(Z),J.clearGroups(),J}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",Q),J}function hW(J){let Q=new Map,$=new Map,W=J.clone();return MU(J,W,function(Z,K){Q.set(K,Z),$.set(Z,K)}),W.traverse(function(Z){if(!Z.isSkinnedMesh)return;let K=Z,H=Q.get(Z),Y=H.skeleton.bones;K.skeleton=H.skeleton.clone(),K.bindMatrix.copy(H.bindMatrix),K.skeleton.bones=Y.map(function(X){return $.get(X)}),K.bind(K.skeleton,K.bindMatrix)}),W}function MU(J,Q,$){$(J,Q);for(let W=0;W<J.children.length;W++)MU(J.children[W],Q.children[W],$)}class GH extends u9{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(Q){return new wU(Q)}),this.register(function(Q){return new SU(Q)}),this.register(function(Q){return new pU(Q)}),this.register(function(Q){return new mU(Q)}),this.register(function(Q){return new lU(Q)}),this.register(function(Q){return new yU(Q)}),this.register(function(Q){return new vU(Q)}),this.register(function(Q){return new fU(Q)}),this.register(function(Q){return new hU(Q)}),this.register(function(Q){return new TU(Q)}),this.register(function(Q){return new bU(Q)}),this.register(function(Q){return new jU(Q)}),this.register(function(Q){return new gU(Q)}),this.register(function(Q){return new xU(Q)}),this.register(function(Q){return new AU(Q)}),this.register(function(Q){return new YH(Q,EJ.EXT_MESHOPT_COMPRESSION)}),this.register(function(Q){return new YH(Q,EJ.KHR_MESHOPT_COMPRESSION)}),this.register(function(Q){return new uU(Q)})}load(J,Q,$,W){let Z=this,K;if(this.resourcePath!=="")K=this.resourcePath;else if(this.path!==""){let X=B7.extractUrlBase(J);K=B7.resolveURL(X,this.path)}else K=B7.extractUrlBase(J);this.manager.itemStart(J);let H=function(X){if(W)W(X);else console.error(X);Z.manager.itemError(J),Z.manager.itemEnd(J)},Y=new iQ(this.manager);Y.setPath(this.path),Y.setResponseType("arraybuffer"),Y.setRequestHeader(this.requestHeader),Y.setWithCredentials(this.withCredentials),Y.load(J,function(X){try{Z.parse(X,K,function(U){Q(U),Z.manager.itemEnd(J)},H)}catch(U){H(U)}},$,H)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,Q,$,W){let Z,K={},H={},Y=new TextDecoder;if(typeof J==="string")Z=JSON.parse(J);else if(J instanceof ArrayBuffer)if(Y.decode(new Uint8Array(J,0,4))===dU){try{K[EJ.KHR_BINARY_GLTF]=new cU(J)}catch(N){if(W)W(N);return}Z=JSON.parse(K[EJ.KHR_BINARY_GLTF].content)}else Z=JSON.parse(Y.decode(J));else Z=J;if(Z.asset===void 0||Z.asset.version[0]<2){if(W)W(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let X=new aU(Z,{path:Q||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});X.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let N=this.pluginCallbacks[U](X);if(!N.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");H[N.name]=N,K[N.name]=!0}if(Z.extensionsUsed)for(let U=0;U<Z.extensionsUsed.length;++U){let N=Z.extensionsUsed[U],E=Z.extensionsRequired||[];switch(N){case EJ.KHR_MATERIALS_UNLIT:K[N]=new _U;break;case EJ.KHR_DRACO_MESH_COMPRESSION:K[N]=new nU(Z,this.dracoLoader);break;case EJ.KHR_TEXTURE_TRANSFORM:K[N]=new sU;break;case EJ.KHR_MESH_QUANTIZATION:K[N]=new iU;break;default:if(E.indexOf(N)>=0&&H[N]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+N+'".')}}X.setExtensions(K),X.setPlugins(H),X.parse($,W)}parseAsync(J,Q){let $=this;return new Promise(function(W,Z){$.parse(J,Q,W,Z)})}}function uq(){let J={};return{get:function(Q){return J[Q]},add:function(Q,$){J[Q]=$},remove:function(Q){delete J[Q]},removeAll:function(){J={}}}}function J8(J,Q,$){let W=J.json.materials[Q];if(W.extensions&&W.extensions[$])return W.extensions[$];return null}var EJ={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class AU{constructor(J){this.parser=J,this.name=EJ.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,Q=this.parser.json.nodes||[];for(let $=0,W=Q.length;$<W;$++){let Z=Q[$];if(Z.extensions&&Z.extensions[this.name]&&Z.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,Z.extensions[this.name].light)}}_loadLight(J){let Q=this.parser,$="light:"+J,W=Q.cache.get($);if(W)return W;let Z=Q.json,Y=((Z.extensions&&Z.extensions[this.name]||{}).lights||[])[J],X,U=new y0(16777215);if(Y.color!==void 0)U.setRGB(Y.color[0],Y.color[1],Y.color[2],p8);let N=Y.range!==void 0?Y.range:0;switch(Y.type){case"directional":X=new n6(U),X.target.position.set(0,0,-1),X.add(X.target);break;case"point":X=new d9(U),X.distance=N;break;case"spot":X=new c6(U),X.distance=N,Y.spot=Y.spot||{},Y.spot.innerConeAngle=Y.spot.innerConeAngle!==void 0?Y.spot.innerConeAngle:0,Y.spot.outerConeAngle=Y.spot.outerConeAngle!==void 0?Y.spot.outerConeAngle:Math.PI/4,X.angle=Y.spot.outerConeAngle,X.penumbra=1-Y.spot.innerConeAngle/Y.spot.outerConeAngle,X.target.position.set(0,0,-1),X.add(X.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+Y.type)}if(X.position.set(0,0,0),A9(X,Y),Y.intensity!==void 0)X.intensity=Y.intensity;return X.name=Q.createUniqueName(Y.name||"light_"+J),W=Promise.resolve(X),Q.cache.add($,W),W}getDependency(J,Q){if(J!=="light")return;return this._loadLight(Q)}createNodeAttachment(J){let Q=this,$=this.parser,Z=$.json.nodes[J],H=(Z.extensions&&Z.extensions[this.name]||{}).light;if(H===void 0)return null;return this._loadLight(H).then(function(Y){return $._getNodeRef(Q.cache,H,Y)})}}class _U{constructor(){this.name=EJ.KHR_MATERIALS_UNLIT}getMaterialType(){return cJ}extendParams(J,Q,$){let W=[];J.color=new y0(1,1,1),J.opacity=1;let Z=Q.pbrMetallicRoughness;if(Z){if(Array.isArray(Z.baseColorFactor)){let K=Z.baseColorFactor;J.color.setRGB(K[0],K[1],K[2],p8),J.opacity=K[3]}if(Z.baseColorTexture!==void 0)W.push($.assignTexture(J,"map",Z.baseColorTexture,B8))}return Promise.all(W)}}class TU{constructor(J){this.parser=J,this.name=EJ.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,Q){let $=J8(this.parser,J,this.name);if($===null)return Promise.resolve();if($.emissiveStrength!==void 0)Q.emissiveIntensity=$.emissiveStrength;return Promise.resolve()}}class wU{constructor(J){this.parser=J,this.name=EJ.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){return J8(this.parser,J,this.name)!==null?F8:null}extendMaterialParams(J,Q){let $=J8(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.clearcoatFactor!==void 0)Q.clearcoat=$.clearcoatFactor;if($.clearcoatTexture!==void 0)W.push(this.parser.assignTexture(Q,"clearcoatMap",$.clearcoatTexture));if($.clearcoatRoughnessFactor!==void 0)Q.clearcoatRoughness=$.clearcoatRoughnessFactor;if($.clearcoatRoughnessTexture!==void 0)W.push(this.parser.assignTexture(Q,"clearcoatRoughnessMap",$.clearcoatRoughnessTexture));if($.clearcoatNormalTexture!==void 0){if(W.push(this.parser.assignTexture(Q,"clearcoatNormalMap",$.clearcoatNormalTexture)),$.clearcoatNormalTexture.scale!==void 0){let Z=$.clearcoatNormalTexture.scale;Q.clearcoatNormalScale=new W0(Z,Z)}}return Promise.all(W)}}class SU{constructor(J){this.parser=J,this.name=EJ.KHR_MATERIALS_DISPERSION}getMaterialType(J){return J8(this.parser,J,this.name)!==null?F8:null}extendMaterialParams(J,Q){let $=J8(this.parser,J,this.name);if($===null)return Promise.resolve();return Q.dispersion=$.dispersion!==void 0?$.dispersion:0,Promise.resolve()}}class jU{constructor(J){this.parser=J,this.name=EJ.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){return J8(this.parser,J,this.name)!==null?F8:null}extendMaterialParams(J,Q){let $=J8(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.iridescenceFactor!==void 0)Q.iridescence=$.iridescenceFactor;if($.iridescenceTexture!==void 0)W.push(this.parser.assignTexture(Q,"iridescenceMap",$.iridescenceTexture));if($.iridescenceIor!==void 0)Q.iridescenceIOR=$.iridescenceIor;if(Q.iridescenceThicknessRange===void 0)Q.iridescenceThicknessRange=[100,400];if($.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessRange[0]=$.iridescenceThicknessMinimum;if($.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessRange[1]=$.iridescenceThicknessMaximum;if($.iridescenceThicknessTexture!==void 0)W.push(this.parser.assignTexture(Q,"iridescenceThicknessMap",$.iridescenceThicknessTexture));return Promise.all(W)}}class yU{constructor(J){this.parser=J,this.name=EJ.KHR_MATERIALS_SHEEN}getMaterialType(J){return J8(this.parser,J,this.name)!==null?F8:null}extendMaterialParams(J,Q){let $=J8(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.sheenColor=new y0(0,0,0),Q.sheenRoughness=0,Q.sheen=1,$.sheenColorFactor!==void 0){let Z=$.sheenColorFactor;Q.sheenColor.setRGB(Z[0],Z[1],Z[2],p8)}if($.sheenRoughnessFactor!==void 0)Q.sheenRoughness=$.sheenRoughnessFactor;if($.sheenColorTexture!==void 0)W.push(this.parser.assignTexture(Q,"sheenColorMap",$.sheenColorTexture,B8));if($.sheenRoughnessTexture!==void 0)W.push(this.parser.assignTexture(Q,"sheenRoughnessMap",$.sheenRoughnessTexture));return Promise.all(W)}}class vU{constructor(J){this.parser=J,this.name=EJ.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){return J8(this.parser,J,this.name)!==null?F8:null}extendMaterialParams(J,Q){let $=J8(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.transmissionFactor!==void 0)Q.transmission=$.transmissionFactor;if($.transmissionTexture!==void 0)W.push(this.parser.assignTexture(Q,"transmissionMap",$.transmissionTexture));return Promise.all(W)}}class fU{constructor(J){this.parser=J,this.name=EJ.KHR_MATERIALS_VOLUME}getMaterialType(J){return J8(this.parser,J,this.name)!==null?F8:null}extendMaterialParams(J,Q){let $=J8(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.thickness=$.thicknessFactor!==void 0?$.thicknessFactor:0,$.thicknessTexture!==void 0)W.push(this.parser.assignTexture(Q,"thicknessMap",$.thicknessTexture));Q.attenuationDistance=$.attenuationDistance||1/0;let Z=$.attenuationColor||[1,1,1];return Q.attenuationColor=new y0().setRGB(Z[0],Z[1],Z[2],p8),Promise.all(W)}}class hU{constructor(J){this.parser=J,this.name=EJ.KHR_MATERIALS_IOR}getMaterialType(J){return J8(this.parser,J,this.name)!==null?F8:null}extendMaterialParams(J,Q){let $=J8(this.parser,J,this.name);if($===null)return Promise.resolve();if(Q.ior=$.ior!==void 0?$.ior:1.5,Q.ior===0)Q.ior=1000;return Promise.resolve()}}class bU{constructor(J){this.parser=J,this.name=EJ.KHR_MATERIALS_SPECULAR}getMaterialType(J){return J8(this.parser,J,this.name)!==null?F8:null}extendMaterialParams(J,Q){let $=J8(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.specularIntensity=$.specularFactor!==void 0?$.specularFactor:1,$.specularTexture!==void 0)W.push(this.parser.assignTexture(Q,"specularIntensityMap",$.specularTexture));let Z=$.specularColorFactor||[1,1,1];if(Q.specularColor=new y0().setRGB(Z[0],Z[1],Z[2],p8),$.specularColorTexture!==void 0)W.push(this.parser.assignTexture(Q,"specularColorMap",$.specularColorTexture,B8));return Promise.all(W)}}class xU{constructor(J){this.parser=J,this.name=EJ.EXT_MATERIALS_BUMP}getMaterialType(J){return J8(this.parser,J,this.name)!==null?F8:null}extendMaterialParams(J,Q){let $=J8(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.bumpScale=$.bumpFactor!==void 0?$.bumpFactor:1,$.bumpTexture!==void 0)W.push(this.parser.assignTexture(Q,"bumpMap",$.bumpTexture));return Promise.all(W)}}class gU{constructor(J){this.parser=J,this.name=EJ.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){return J8(this.parser,J,this.name)!==null?F8:null}extendMaterialParams(J,Q){let $=J8(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.anisotropyStrength!==void 0)Q.anisotropy=$.anisotropyStrength;if($.anisotropyRotation!==void 0)Q.anisotropyRotation=$.anisotropyRotation;if($.anisotropyTexture!==void 0)W.push(this.parser.assignTexture(Q,"anisotropyMap",$.anisotropyTexture));return Promise.all(W)}}class pU{constructor(J){this.parser=J,this.name=EJ.KHR_TEXTURE_BASISU}loadTexture(J){let Q=this.parser,$=Q.json,W=$.textures[J];if(!W.extensions||!W.extensions[this.name])return null;let Z=W.extensions[this.name],K=Q.options.ktx2Loader;if(!K)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return Q.loadTextureImage(J,Z.source,K)}}class mU{constructor(J){this.parser=J,this.name=EJ.EXT_TEXTURE_WEBP}loadTexture(J){let Q=this.name,$=this.parser,W=$.json,Z=W.textures[J];if(!Z.extensions||!Z.extensions[Q])return null;let K=Z.extensions[Q],H=W.images[K.source],Y=$.textureLoader;if(H.uri){let X=$.options.manager.getHandler(H.uri);if(X!==null)Y=X}return $.loadTextureImage(J,K.source,Y)}}class lU{constructor(J){this.parser=J,this.name=EJ.EXT_TEXTURE_AVIF}loadTexture(J){let Q=this.name,$=this.parser,W=$.json,Z=W.textures[J];if(!Z.extensions||!Z.extensions[Q])return null;let K=Z.extensions[Q],H=W.images[K.source],Y=$.textureLoader;if(H.uri){let X=$.options.manager.getHandler(H.uri);if(X!==null)Y=X}return $.loadTextureImage(J,K.source,Y)}}class YH{constructor(J,Q){this.name=Q,this.parser=J}loadBufferView(J){let Q=this.parser.json,$=Q.bufferViews[J];if($.extensions&&$.extensions[this.name]){let W=$.extensions[this.name],Z=this.parser.getDependency("buffer",W.buffer),K=this.parser.options.meshoptDecoder;if(!K||!K.supported)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return Z.then(function(H){let Y=W.byteOffset||0,X=W.byteLength||0,U=W.count,N=W.byteStride,E=new Uint8Array(H,Y,X);if(K.decodeGltfBufferAsync)return K.decodeGltfBufferAsync(U,N,E,W.mode,W.filter).then(function(G){return G.buffer});else return K.ready.then(function(){let G=new ArrayBuffer(U*N);return K.decodeGltfBuffer(new Uint8Array(G),U,N,E,W.mode,W.filter),G})})}else return null}}class uU{constructor(J){this.name=EJ.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let Q=this.parser.json,$=Q.nodes[J];if(!$.extensions||!$.extensions[this.name]||$.mesh===void 0)return null;let W=Q.meshes[$.mesh];for(let X of W.primitives)if(X.mode!==o8.TRIANGLES&&X.mode!==o8.TRIANGLE_STRIP&&X.mode!==o8.TRIANGLE_FAN&&X.mode!==void 0)return null;let K=$.extensions[this.name].attributes,H=[],Y={};for(let X in K)H.push(this.parser.getDependency("accessor",K[X]).then((U)=>{return Y[X]=U,Y[X]}));if(H.length<1)return null;return H.push(this.parser.createNodeMesh(J)),Promise.all(H).then((X)=>{let U=X.pop(),N=U.isGroup?U.children:[U],E=X[0].count,G=[];for(let F of N){let q=new n0,V=new T,R=new qJ,O=new T(1,1,1),z=new N7(F.geometry,F.material,E);for(let L=0;L<E;L++){if(Y.TRANSLATION)V.fromBufferAttribute(Y.TRANSLATION,L);if(Y.ROTATION)R.fromBufferAttribute(Y.ROTATION,L);if(Y.SCALE)O.fromBufferAttribute(Y.SCALE,L);z.setMatrixAt(L,q.compose(V,R,O))}let D=null;for(let L in Y)if(L==="_COLOR_0"){let M=Y[L];z.instanceColor=new W7(M.array,M.itemSize,M.normalized)}else if(L!=="TRANSLATION"&&L!=="ROTATION"&&L!=="SCALE"){if(D===null){let I=z.geometry;D=new jJ,D.name=I.name;for(let w in I.attributes)D.setAttribute(w,I.attributes[w]);for(let w in I.morphAttributes)D.morphAttributes[w]=I.morphAttributes[w];if(I.index!==null)D.setIndex(I.index);D.morphTargetsRelative=I.morphTargetsRelative;for(let w of I.groups)D.addGroup(w.start,w.count,w.materialIndex);if(I.boundingBox!==null)D.boundingBox=I.boundingBox.clone();if(I.boundingSphere!==null)D.boundingSphere=I.boundingSphere.clone();D.drawRange.start=I.drawRange.start,D.drawRange.count=I.drawRange.count,D.userData=Object.assign({},I.userData),z.geometry=D}let M=Y[L];D.setAttribute(L,new W7(M.array,M.itemSize,M.normalized))}zJ.prototype.copy.call(z,F),this.parser.assignFinalMaterial(z),G.push(z)}if(U.isGroup)return U.clear(),U.add(...G),U;return G[0]})}}var dU="glTF",Z$=12,CU={JSON:1313821514,BIN:5130562};class cU{constructor(J){this.name=EJ.KHR_BINARY_GLTF,this.content=null,this.body=null;let Q=new DataView(J,0,Z$),$=new TextDecoder;if(this.header={magic:$.decode(new Uint8Array(J.slice(0,4))),version:Q.getUint32(4,!0),length:Q.getUint32(8,!0)},this.header.magic!==dU)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let W=this.header.length-Z$,Z=new DataView(J,Z$),K=0;while(K<W){let H=Z.getUint32(K,!0);K+=4;let Y=Z.getUint32(K,!0);if(K+=4,Y===CU.JSON){let X=new Uint8Array(J,Z$+K,H);this.content=$.decode(X)}else if(Y===CU.BIN){let X=Z$+K;this.body=J.slice(X,X+H)}K+=H}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class nU{constructor(J,Q){if(!Q)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=EJ.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=Q,this.dracoLoader.preload()}decodePrimitive(J,Q){let $=this.json,W=this.dracoLoader,Z=J.extensions[this.name].bufferView,K=J.extensions[this.name].attributes,H={},Y={},X={};for(let U in K){let N=XH[U]||U.toLowerCase();H[N]=K[U]}for(let U in J.attributes){let N=XH[U]||U.toLowerCase();if(K[U]!==void 0){let E=$.accessors[J.attributes[U]],G=a6[E.componentType];X[N]=G.name,Y[N]=E.normalized===!0}}return Q.getDependency("bufferView",Z).then(function(U){return new Promise(function(N,E){W.decodeDracoFile(U,function(G){for(let F in G.attributes){let q=G.attributes[F],V=Y[F];if(V!==void 0)q.normalized=V}N(G)},H,X,p8,E)})})}}class sU{constructor(){this.name=EJ.KHR_TEXTURE_TRANSFORM}extendTexture(J,Q){if((Q.texCoord===void 0||Q.texCoord===J.channel)&&Q.offset===void 0&&Q.rotation===void 0&&Q.scale===void 0)return J;if(J=J.clone(),Q.texCoord!==void 0)J.channel=Q.texCoord;if(Q.offset!==void 0)J.offset.fromArray(Q.offset);if(Q.rotation!==void 0)J.rotation=Q.rotation;if(Q.scale!==void 0)J.repeat.fromArray(Q.scale);if(Q.rotation!==void 0){let $=Math.cos(J.rotation),W=Math.sin(J.rotation);J.matrix.set(J.repeat.x*$,J.repeat.y*W,J.offset.x,-J.repeat.x*W,J.repeat.y*$,J.offset.y,0,0,1),J.matrixAutoUpdate=!1}return J.needsUpdate=!0,J}}class iU{constructor(){this.name=EJ.KHR_MESH_QUANTIZATION}}class NH extends l9{constructor(J,Q,$,W){super(J,Q,$,W)}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,W=this.valueSize,Z=J*W*3+W;for(let K=0;K!==W;K++)Q[K]=$[Z+K];return Q}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=H*2,X=H*3,U=W-Q,N=($-Q)/U,E=N*N,G=E*N,F=J*X,q=F-X,V=-2*G+3*E,R=G-E,O=1-V,z=R-E+N;for(let D=0;D!==H;D++){let L=K[q+D+H],M=K[q+D+Y]*U,I=K[F+D+H],w=K[F+D]*U;Z[D]=O*L+z*M+V*I+R*w}return Z}}var dq=new qJ;class oU extends NH{interpolate_(J,Q,$,W){let Z=super.interpolate_(J,Q,$,W);return dq.fromArray(Z).normalize().toArray(Z),Z}}var o8={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},a6={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},zU={9728:U9,9729:N8,9984:e$,9985:h6,9986:h7,9987:C9},PU={33071:f6,33648:t$,10497:Y7},ZH={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},XH={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},k7={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},cq={CUBICSPLINE:void 0,LINEAR:HW,STEP:qK},KH={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nq(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new QJ({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:H7});return J.DefaultMaterial}function i7(J,Q,$){for(let W in $.extensions)if(J[W]===void 0)Q.userData.gltfExtensions=Q.userData.gltfExtensions||{},Q.userData.gltfExtensions[W]=$.extensions[W]}function A9(J,Q){if(Q.extras!==void 0)if(typeof Q.extras==="object")Object.assign(J.userData,Q.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+Q.extras)}function sq(J,Q,$){let W=!1,Z=!1,K=!1;for(let U=0,N=Q.length;U<N;U++){let E=Q[U];if(E.POSITION!==void 0)W=!0;if(E.NORMAL!==void 0)Z=!0;if(E.COLOR_0!==void 0)K=!0;if(W&&Z&&K)break}if(!W&&!Z&&!K)return Promise.resolve(J);let H=[],Y=[],X=[];for(let U=0,N=Q.length;U<N;U++){let E=Q[U];if(W){let G=E.POSITION!==void 0?$.getDependency("accessor",E.POSITION):J.attributes.position;H.push(G)}if(Z){let G=E.NORMAL!==void 0?$.getDependency("accessor",E.NORMAL):J.attributes.normal;Y.push(G)}if(K){let G=E.COLOR_0!==void 0?$.getDependency("accessor",E.COLOR_0):J.attributes.color;X.push(G)}}return Promise.all([Promise.all(H),Promise.all(Y),Promise.all(X)]).then(function(U){let N=U[0],E=U[1],G=U[2];if(W)J.morphAttributes.position=N;if(Z)J.morphAttributes.normal=E;if(K)J.morphAttributes.color=G;return J.morphTargetsRelative=!0,J})}function iq(J,Q){if(J.updateMorphTargets(),Q.weights!==void 0)for(let $=0,W=Q.weights.length;$<W;$++)J.morphTargetInfluences[$]=Q.weights[$];if(Q.extras&&Array.isArray(Q.extras.targetNames)){let $=Q.extras.targetNames;if(J.morphTargetInfluences.length===$.length){J.morphTargetDictionary={};for(let W=0,Z=$.length;W<Z;W++)J.morphTargetDictionary[$[W]]=W}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function oq(J){let Q,$=J.extensions&&J.extensions[EJ.KHR_DRACO_MESH_COMPRESSION];if($)Q="draco:"+$.bufferView+":"+$.indices+":"+HH($.attributes);else Q=J.indices+":"+HH(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let W=0,Z=J.targets.length;W<Z;W++)Q+=":"+HH(J.targets[W]);return Q}function HH(J){let Q="",$=Object.keys(J).sort();for(let W=0,Z=$.length;W<Z;W++)Q+=$[W]+":"+J[$[W]]+";";return Q}function UH(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function aq(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var rq=new n0;class aU{constructor(J={},Q={}){this.json=J,this.extensions={},this.plugins={},this.options=Q,this.cache=new uq,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let $=!1,W=-1,Z=!1,K=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let H=navigator.userAgent;$=/^((?!chrome|android).)*safari/i.test(H)===!0;let Y=H.match(/Version\/(\d+)/);W=$&&Y?parseInt(Y[1],10):-1,Z=H.indexOf("Firefox")>-1,K=Z?H.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||$&&W<17||Z&&K<98)this.textureLoader=new zW(this.options.manager);else this.textureLoader=new AW(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new iQ(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,Q){let $=this,W=this.json,Z=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(K){return K._markDefs&&K._markDefs()}),Promise.all(this._invokeAll(function(K){return K.beforeRoot&&K.beforeRoot()})).then(function(){return Promise.all([$.getDependencies("scene"),$.getDependencies("animation"),$.getDependencies("camera")])}).then(function(K){let H={scene:K[0][W.scene||0],scenes:K[0],animations:K[1],cameras:K[2],asset:W.asset,parser:$,userData:{}};return i7(Z,H,W),A9(H,W),Promise.all($._invokeAll(function(Y){return Y.afterRoot&&Y.afterRoot(H)})).then(function(){for(let Y of H.scenes)Y.updateMatrixWorld();J(H)})}).catch(Q)}_markDefs(){let J=this.json.nodes||[],Q=this.json.skins||[],$=this.json.meshes||[];for(let W=0,Z=Q.length;W<Z;W++){let K=Q[W].joints;for(let H=0,Y=K.length;H<Y;H++)J[K[H]].isBone=!0}for(let W=0,Z=J.length;W<Z;W++){let K=J[W];if(K.mesh!==void 0){if(this._addNodeRef(this.meshCache,K.mesh),K.skin!==void 0)$[K.mesh].isSkinnedMesh=!0}if(K.camera!==void 0)this._addNodeRef(this.cameraCache,K.camera)}}_addNodeRef(J,Q){if(Q===void 0)return;if(J.refs[Q]===void 0)J.refs[Q]=J.uses[Q]=0;J.refs[Q]++}_getNodeRef(J,Q,$){if(J.refs[Q]<=1)return $;let W=$.clone(),Z=(K,H)=>{let Y=this.associations.get(K);if(Y!=null)this.associations.set(H,Y);for(let[X,U]of K.children.entries())Z(U,H.children[X])};return Z($,W),W.name+="_instance_"+J.uses[Q]++,W}_invokeOne(J){let Q=Object.values(this.plugins);Q.push(this);for(let $=0;$<Q.length;$++){let W=J(Q[$]);if(W)return W}return null}_invokeAll(J){let Q=Object.values(this.plugins);Q.unshift(this);let $=[];for(let W=0;W<Q.length;W++){let Z=J(Q[W]);if(Z)$.push(Z)}return $}getDependency(J,Q){let $=J+":"+Q,W=this.cache.get($);if(!W){switch(J){case"scene":W=this.loadScene(Q);break;case"node":W=this._invokeOne(function(Z){return Z.loadNode&&Z.loadNode(Q)});break;case"mesh":W=this._invokeOne(function(Z){return Z.loadMesh&&Z.loadMesh(Q)});break;case"accessor":W=this.loadAccessor(Q);break;case"bufferView":W=this._invokeOne(function(Z){return Z.loadBufferView&&Z.loadBufferView(Q)});break;case"buffer":W=this.loadBuffer(Q);break;case"material":W=this._invokeOne(function(Z){return Z.loadMaterial&&Z.loadMaterial(Q)});break;case"texture":W=this._invokeOne(function(Z){return Z.loadTexture&&Z.loadTexture(Q)});break;case"skin":W=this.loadSkin(Q);break;case"animation":W=this._invokeOne(function(Z){return Z.loadAnimation&&Z.loadAnimation(Q)});break;case"camera":W=this.loadCamera(Q);break;default:if(W=this._invokeOne(function(Z){return Z!=this&&Z.getDependency&&Z.getDependency(J,Q)}),!W)throw Error("Unknown type: "+J);break}this.cache.add($,W)}return W}getDependencies(J){let Q=this.cache.get(J);if(!Q){let $=this,W=this.json[J+(J==="mesh"?"es":"s")]||[];Q=Promise.all(W.map(function(Z,K){return $.getDependency(J,K)})),this.cache.add(J,Q)}return Q}loadBuffer(J){let Q=this.json.buffers[J],$=this.fileLoader;if(Q.type&&Q.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+Q.type+" buffer type is not supported.");if(Q.uri===void 0&&J===0)return Promise.resolve(this.extensions[EJ.KHR_BINARY_GLTF].body);let W=this.options;return new Promise(function(Z,K){$.load(B7.resolveURL(Q.uri,W.path),Z,void 0,function(){K(Error('THREE.GLTFLoader: Failed to load buffer "'+Q.uri+'".'))})})}loadBufferView(J){let Q=this.json.bufferViews[J];return this.getDependency("buffer",Q.buffer).then(function($){let W=Q.byteLength||0,Z=Q.byteOffset||0;return $.slice(Z,Z+W)})}loadAccessor(J){let Q=this,$=this.json,W=this.json.accessors[J];if(W.bufferView===void 0&&W.sparse===void 0){let K=ZH[W.type],H=a6[W.componentType],Y=W.normalized===!0,X=new H(W.count*K);return Promise.resolve(new oJ(X,K,Y))}let Z=[];if(W.bufferView!==void 0)Z.push(this.getDependency("bufferView",W.bufferView));else Z.push(null);if(W.sparse!==void 0)Z.push(this.getDependency("bufferView",W.sparse.indices.bufferView)),Z.push(this.getDependency("bufferView",W.sparse.values.bufferView));return Promise.all(Z).then(function(K){let H=K[0],Y=ZH[W.type],X=a6[W.componentType],U=X.BYTES_PER_ELEMENT,N=U*Y,E=W.byteOffset||0,G=W.bufferView!==void 0?$.bufferViews[W.bufferView].byteStride:void 0,F=W.normalized===!0,q,V;if(G&&G!==N){let R=Math.floor(E/G),O="InterleavedBuffer:"+W.bufferView+":"+W.componentType+":"+R+":"+W.count,z=Q.cache.get(O);if(!z)q=new X(H,R*G,W.count*G/U),z=new p6(q,G/U),Q.cache.add(O,z);V=new $7(z,Y,E%G/U,F)}else{if(H===null)q=new X(W.count*Y);else q=new X(H,E,W.count*Y);V=new oJ(q,Y,F)}if(W.sparse!==void 0){let R=ZH.SCALAR,O=a6[W.sparse.indices.componentType],z=W.sparse.indices.byteOffset||0,D=W.sparse.values.byteOffset||0,L=new O(K[1],z,W.sparse.count*R),M=new X(K[2],D,W.sparse.count*Y);if(H!==null)V=new oJ(V.array.slice(),V.itemSize,V.normalized);V.normalized=!1;for(let I=0,w=L.length;I<w;I++){let B=L[I];if(V.setX(B,M[I*Y]),Y>=2)V.setY(B,M[I*Y+1]);if(Y>=3)V.setZ(B,M[I*Y+2]);if(Y>=4)V.setW(B,M[I*Y+3]);if(Y>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}V.normalized=F}return V})}loadTexture(J){let Q=this.json,$=this.options,Z=Q.textures[J].source,K=Q.images[Z],H=this.textureLoader;if(K.uri){let Y=$.manager.getHandler(K.uri);if(Y!==null)H=Y}return this.loadTextureImage(J,Z,H)}loadTextureImage(J,Q,$){let W=this,Z=this.json,K=Z.textures[J],H=Z.images[Q],Y=(H.uri||H.bufferView)+":"+K.sampler;if(this.textureCache[Y])return this.textureCache[Y];let X=this.loadImageSource(Q,$).then(function(U){if(U.flipY=!1,U.name=K.name||H.name||"",U.name===""&&typeof H.uri==="string"&&H.uri.startsWith("data:image/")===!1)U.name=H.uri;let E=(Z.samplers||{})[K.sampler]||{};return U.magFilter=zU[E.magFilter]||N8,U.minFilter=zU[E.minFilter]||C9,U.wrapS=PU[E.wrapS]||Y7,U.wrapT=PU[E.wrapT]||Y7,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==U9&&U.minFilter!==N8,W.associations.set(U,{textures:J}),U}).catch(function(){return null});return this.textureCache[Y]=X,X}loadImageSource(J,Q){let $=this,W=this.json,Z=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((N)=>N.clone());let K=W.images[J],H=self.URL||self.webkitURL,Y=K.uri||"",X=!1;if(K.bufferView!==void 0)Y=$.getDependency("bufferView",K.bufferView).then(function(N){X=!0;let E=new Blob([N],{type:K.mimeType});return Y=H.createObjectURL(E),Y});else if(K.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let U=Promise.resolve(Y).then(function(N){return new Promise(function(E,G){let F=E;if(Q.isImageBitmapLoader===!0)F=function(q){let V=new tJ(q);V.needsUpdate=!0,E(V)};Q.load(B7.resolveURL(N,Z.path),F,void 0,G)})}).then(function(N){if(X===!0)H.revokeObjectURL(Y);return A9(N,K),N.userData.mimeType=K.mimeType||aq(K.uri),N}).catch(function(N){throw console.error("THREE.GLTFLoader: Couldn't load texture",Y),N});return this.sourceCache[J]=U,U}assignTexture(J,Q,$,W){let Z=this;return this.getDependency("texture",$.index).then(function(K){if(!K)return null;if($.texCoord!==void 0&&$.texCoord>0)K=K.clone(),K.channel=$.texCoord;if(Z.extensions[EJ.KHR_TEXTURE_TRANSFORM]){let H=$.extensions!==void 0?$.extensions[EJ.KHR_TEXTURE_TRANSFORM]:void 0;if(H){let Y=Z.associations.get(K);K=Z.extensions[EJ.KHR_TEXTURE_TRANSFORM].extendTexture(K,H),Z.associations.set(K,Y)}}if(W!==void 0)K.colorSpace=W;return J[Q]=K,K})}assignFinalMaterial(J){let{geometry:Q,material:$}=J,W=Q.attributes.tangent===void 0,Z=Q.attributes.color!==void 0,K=Q.attributes.normal===void 0;if(J.isPoints){let H="PointsMaterial:"+$.uuid,Y=this.cache.get(H);if(!Y)Y=new u7,j8.prototype.copy.call(Y,$),Y.color.copy($.color),Y.map=$.map,Y.sizeAttenuation=!1,this.cache.add(H,Y);$=Y}else if(J.isLine){let H="LineBasicMaterial:"+$.uuid,Y=this.cache.get(H);if(!Y)Y=new mQ,j8.prototype.copy.call(Y,$),Y.color.copy($.color),Y.map=$.map,this.cache.add(H,Y);$=Y}if(W||Z||K){let H="ClonedMaterial:"+$.uuid+":";if(W)H+="derivative-tangents:";if(Z)H+="vertex-colors:";if(K)H+="flat-shading:";let Y=this.cache.get(H);if(!Y){if(Y=$.clone(),Z)Y.vertexColors=!0;if(K)Y.flatShading=!0;if(W){if(Y.normalScale)Y.normalScale.y*=-1;if(Y.clearcoatNormalScale)Y.clearcoatNormalScale.y*=-1}this.cache.add(H,Y),this.associations.set(Y,this.associations.get($))}$=Y}J.material=$}getMaterialType(){return QJ}loadMaterial(J){let Q=this,$=this.json,W=this.extensions,Z=$.materials[J],K,H={},Y=Z.extensions||{},X=[];if(Y[EJ.KHR_MATERIALS_UNLIT]){let N=W[EJ.KHR_MATERIALS_UNLIT];K=N.getMaterialType(),X.push(N.extendParams(H,Z,Q))}else{let N=Z.pbrMetallicRoughness||{};if(H.color=new y0(1,1,1),H.opacity=1,Array.isArray(N.baseColorFactor)){let E=N.baseColorFactor;H.color.setRGB(E[0],E[1],E[2],p8),H.opacity=E[3]}if(N.baseColorTexture!==void 0)X.push(Q.assignTexture(H,"map",N.baseColorTexture,B8));if(H.metalness=N.metallicFactor!==void 0?N.metallicFactor:1,H.roughness=N.roughnessFactor!==void 0?N.roughnessFactor:1,N.metallicRoughnessTexture!==void 0)X.push(Q.assignTexture(H,"metalnessMap",N.metallicRoughnessTexture)),X.push(Q.assignTexture(H,"roughnessMap",N.metallicRoughnessTexture));K=this._invokeOne(function(E){return E.getMaterialType&&E.getMaterialType(J)}),X.push(Promise.all(this._invokeAll(function(E){return E.extendMaterialParams&&E.extendMaterialParams(J,H)})))}if(Z.doubleSided===!0)H.side=W8;let U=Z.alphaMode||KH.OPAQUE;if(U===KH.BLEND)H.transparent=!0,H.depthWrite=!1;else if(H.transparent=!1,U===KH.MASK)H.alphaTest=Z.alphaCutoff!==void 0?Z.alphaCutoff:0.5;if(Z.normalTexture!==void 0&&K!==cJ){if(X.push(Q.assignTexture(H,"normalMap",Z.normalTexture)),H.normalScale=new W0(1,1),Z.normalTexture.scale!==void 0){let N=Z.normalTexture.scale;H.normalScale.set(N,N)}}if(Z.occlusionTexture!==void 0&&K!==cJ){if(X.push(Q.assignTexture(H,"aoMap",Z.occlusionTexture)),Z.occlusionTexture.strength!==void 0)H.aoMapIntensity=Z.occlusionTexture.strength}if(Z.emissiveFactor!==void 0&&K!==cJ){let N=Z.emissiveFactor;H.emissive=new y0().setRGB(N[0],N[1],N[2],p8)}if(Z.emissiveTexture!==void 0&&K!==cJ)X.push(Q.assignTexture(H,"emissiveMap",Z.emissiveTexture,B8));return Promise.all(X).then(function(){let N=new K(H);if(Z.name)N.name=Z.name;if(A9(N,Z),Q.associations.set(N,{materials:J}),Z.extensions)i7(W,N,Z);return N})}createUniqueName(J){let Q=MJ.sanitizeNodeName(J||"");if(Q in this.nodeNamesUsed)return Q+"_"+ ++this.nodeNamesUsed[Q];else return this.nodeNamesUsed[Q]=0,Q}loadGeometries(J){let Q=this,$=this.extensions,W=this.primitiveCache;function Z(H){return $[EJ.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(H,Q).then(function(Y){return IU(Y,H,Q)})}let K=[];for(let H=0,Y=J.length;H<Y;H++){let X=J[H],U=oq(X),N=W[U];if(N)K.push(N.promise);else{let E;if(X.extensions&&X.extensions[EJ.KHR_DRACO_MESH_COMPRESSION])E=Z(X);else E=IU(new jJ,X,Q);if(X.mode===o8.TRIANGLE_STRIP)E=E.then((G)=>WH(G,vQ));else if(X.mode===o8.TRIANGLE_FAN)E=E.then((G)=>WH(G,x6));W[U]={primitive:X,promise:E},K.push(E)}}return Promise.all(K)}loadMesh(J){let Q=this,$=this.json,W=this.extensions,Z=$.meshes[J],K=Z.primitives,H=[];for(let Y=0,X=K.length;Y<X;Y++){let U=K[Y].material===void 0?nq(this.cache):this.getDependency("material",K[Y].material);H.push(U)}return H.push(Q.loadGeometries(K)),Promise.all(H).then(async function(Y){let X=Y.slice(0,Y.length-1),U=Y[Y.length-1],N=[];for(let G=0,F=U.length;G<F;G++){let q=U[G],V=K[G],R,O=X[G];if(V.mode===o8.TRIANGLES||V.mode===o8.TRIANGLE_STRIP||V.mode===o8.TRIANGLE_FAN||V.mode===void 0){let z=Z.isSkinnedMesh===!0,D=q.hasAttribute("skinIndex")&&q.hasAttribute("skinWeight");if(z&&D===!1)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(R=z&&D?new FW(q,O):new z0(q,O),R.isSkinnedMesh===!0)R.normalizeSkinWeights()}else if(V.mode===o8.LINES)R=new qW(q,O);else if(V.mode===o8.LINE_STRIP)R=new l6(q,O);else if(V.mode===o8.LINE_LOOP)R=new OW(q,O);else if(V.mode===o8.POINTS)R=new u6(q,O);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+V.mode);if(Object.keys(R.geometry.morphAttributes).length>0)iq(R,Z);if(R.name=Q.createUniqueName(Z.name||"mesh_"+J),A9(R,Z),V.extensions)i7(W,R,V);Q.assignFinalMaterial(R),N.push(R)}for(let G=0,F=N.length;G<F;G++)Q.associations.set(N[G],{meshes:J,primitives:G});if(N.length===1){if(Z.extensions)i7(W,N[0],Z);return N[0]}let E=new IJ;if(Z.extensions)i7(W,E,Z);Q.associations.set(E,{meshes:J});for(let G=0,F=N.length;G<F;G++)E.add(N[G]);return E})}loadCamera(J){let Q,$=this.json.cameras[J],W=$[$.type];if(!W){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if($.type==="perspective")Q=new K8(U7.radToDeg(W.yfov),W.aspectRatio||1,W.znear||1,W.zfar||2000000);else if($.type==="orthographic")Q=new c9(-W.xmag,W.xmag,W.ymag,-W.ymag,W.znear,W.zfar);if($.name)Q.name=this.createUniqueName($.name);return A9(Q,$),Promise.resolve(Q)}loadSkin(J){let Q=this.json.skins[J],$=[];for(let W=0,Z=Q.joints.length;W<Z;W++)$.push(this._loadNodeShallow(Q.joints[W]));if(Q.inverseBindMatrices!==void 0)$.push(this.getDependency("accessor",Q.inverseBindMatrices));else $.push(null);return Promise.all($).then(function(W){let Z=W.pop(),K=W,H=[],Y=[];for(let X=0,U=K.length;X<U;X++){let N=K[X];if(N){H.push(N);let E=new n0;if(Z!==null)E.fromArray(Z.array,X*16);Y.push(E)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',Q.joints[X])}return new gQ(H,Y)})}loadAnimation(J){let Q=this.json,$=this,W=Q.animations[J],Z=W.name?W.name:"animation_"+J,K=[],H=[],Y=[],X=[],U=[];for(let N=0,E=W.channels.length;N<E;N++){let G=W.channels[N],F=W.samplers[G.sampler],q=G.target,V=q.node,R=W.parameters!==void 0?W.parameters[F.input]:F.input,O=W.parameters!==void 0?W.parameters[F.output]:F.output;if(q.node===void 0)continue;K.push(this.getDependency("node",V)),H.push(this.getDependency("accessor",R)),Y.push(this.getDependency("accessor",O)),X.push(F),U.push(q)}return Promise.all([Promise.all(K),Promise.all(H),Promise.all(Y),Promise.all(X),Promise.all(U)]).then(function(N){let E=N[0],G=N[1],F=N[2],q=N[3],V=N[4],R=[];for(let z=0,D=E.length;z<D;z++){let L=E[z],M=G[z],I=F[z],w=q[z],B=V[z];if(L===void 0)continue;if(L.updateMatrix)L.updateMatrix();let A=$._createAnimationTracks(L,M,I,w,B);if(A)for(let d=0;d<A.length;d++)R.push(A[d])}let O=new S6(Z,void 0,R);return A9(O,W),O})}createNodeMesh(J){let Q=this.json,$=this,W=Q.nodes[J];if(W.mesh===void 0)return null;return $.getDependency("mesh",W.mesh).then(function(Z){let K=$._getNodeRef($.meshCache,W.mesh,Z);if(W.weights!==void 0)K.traverse(function(H){if(!H.isMesh)return;for(let Y=0,X=W.weights.length;Y<X;Y++)H.morphTargetInfluences[Y]=W.weights[Y]});return K})}loadNode(J){let Q=this.json,$=this,W=Q.nodes[J],Z=$._loadNodeShallow(J),K=[],H=W.children||[];for(let X=0,U=H.length;X<U;X++)K.push($.getDependency("node",H[X]));let Y=W.skin===void 0?Promise.resolve(null):$.getDependency("skin",W.skin);return Promise.all([Z,Promise.all(K),Y]).then(function(X){let U=X[0],N=X[1],E=X[2];if(E!==null)U.traverse(function(G){if(!G.isSkinnedMesh)return;G.bind(E,rq)});for(let G=0,F=N.length;G<F;G++)U.add(N[G]);if(U.userData.pivot!==void 0&&N.length>0){let G=U.userData.pivot,F=N[0];U.pivot=new T().fromArray(G),U.position.x-=G[0],U.position.y-=G[1],U.position.z-=G[2],F.position.set(0,0,0),delete U.userData.pivot}return U})}_loadNodeShallow(J){let Q=this.json,$=this.extensions,W=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let Z=Q.nodes[J],K=Z.name?W.createUniqueName(Z.name):"",H=[],Y=W._invokeOne(function(X){return X.createNodeMesh&&X.createNodeMesh(J)});if(Y)H.push(Y);if(Z.camera!==void 0)H.push(W.getDependency("camera",Z.camera).then(function(X){return W._getNodeRef(W.cameraCache,Z.camera,X)}));return W._invokeAll(function(X){return X.createNodeAttachment&&X.createNodeAttachment(J)}).forEach(function(X){H.push(X)}),this.nodeCache[J]=Promise.all(H).then(function(X){let U;if(Z.isBone===!0)U=new bQ;else if(X.length>1)U=new IJ;else if(X.length===1)U=X[0];else U=new zJ;if(U!==X[0])for(let N=0,E=X.length;N<E;N++)U.add(X[N]);if(Z.name)U.userData.name=Z.name,U.name=K;if(A9(U,Z),Z.extensions)i7($,U,Z);if(Z.matrix!==void 0){let N=new n0;N.fromArray(Z.matrix),U.applyMatrix4(N)}else{if(Z.translation!==void 0)U.position.fromArray(Z.translation);if(Z.rotation!==void 0)U.quaternion.fromArray(Z.rotation);if(Z.scale!==void 0)U.scale.fromArray(Z.scale)}if(!W.associations.has(U))W.associations.set(U,{});else if(Z.mesh!==void 0&&W.meshCache.refs[Z.mesh]>1){let N=W.associations.get(U);W.associations.set(U,{...N})}return W.associations.get(U).nodes=J,U}),this.nodeCache[J]}loadScene(J){let Q=this.extensions,$=this.json.scenes[J],W=this,Z=new IJ;if($.name)Z.name=W.createUniqueName($.name);if(A9(Z,$),$.extensions)i7(Q,Z,$);let K=$.nodes||[],H=[];for(let Y=0,X=K.length;Y<X;Y++)H.push(W.getDependency("node",K[Y]));return Promise.all(H).then(function(Y){for(let U=0,N=Y.length;U<N;U++){let E=Y[U];if(E.parent!==null)Z.add(hW(E));else Z.add(E)}let X=(U)=>{let N=new Map;for(let[E,G]of W.associations)if(E instanceof j8||E instanceof tJ)N.set(E,G);return U.traverse((E)=>{let G=W.associations.get(E);if(G!=null)N.set(E,G)}),N};return W.associations=X(Z),Z})}_createAnimationTracks(J,Q,$,W,Z){let K=[],H=J.name?J.name:J.uuid,Y=[];function X(G){if(G.morphTargetInfluences)Y.push(G.name?G.name:G.uuid)}if(k7[Z.path]===k7.weights){if(X(J),J.isGroup)J.children.forEach(X)}else Y.push(H);let U;switch(k7[Z.path]){case k7.weights:U=L7;break;case k7.rotation:U=V7;break;case k7.translation:case k7.scale:U=n7;break;default:switch($.itemSize){case 1:U=L7;break;case 2:case 3:default:U=n7;break}break}let N=W.interpolation!==void 0?cq[W.interpolation]:HW,E=this._getArrayFromAccessor($);for(let G=0,F=Y.length;G<F;G++){let q=new U(Y[G]+"."+k7[Z.path],Q.array,E,N);if(W.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(q);K.push(q)}return K}_getArrayFromAccessor(J){let Q=J.array;if(J.normalized){let $=UH(Q.constructor),W=new Float32Array(Q.length);for(let Z=0,K=Q.length;Z<K;Z++)W[Z]=Q[Z]*$;Q=W}return Q}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function($){return new(this instanceof V7?oU:NH)(this.times,this.values,this.getValueSize()/3,$)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function tq(J,Q,$){let W=Q.attributes,Z=new I8;if(W.POSITION!==void 0){let Y=$.json.accessors[W.POSITION],X=Y.min,U=Y.max;if(X!==void 0&&U!==void 0){if(Z.set(new T(X[0],X[1],X[2]),new T(U[0],U[1],U[2])),Y.normalized){let N=UH(a6[Y.componentType]);Z.min.multiplyScalar(N),Z.max.multiplyScalar(N)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let K=Q.targets;if(K!==void 0){let Y=new T,X=new T;for(let U=0,N=K.length;U<N;U++){let E=K[U];if(E.POSITION!==void 0){let G=$.json.accessors[E.POSITION],F=G.min,q=G.max;if(F!==void 0&&q!==void 0){if(X.setX(Math.max(Math.abs(F[0]),Math.abs(q[0]))),X.setY(Math.max(Math.abs(F[1]),Math.abs(q[1]))),X.setZ(Math.max(Math.abs(F[2]),Math.abs(q[2]))),G.normalized){let V=UH(a6[G.componentType]);X.multiplyScalar(V)}Y.max(X)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}Z.expandByVector(Y)}J.boundingBox=Z;let H=new m8;Z.getCenter(H.center),H.radius=Z.min.distanceTo(Z.max)/2,J.boundingSphere=H}function IU(J,Q,$){let W=Q.attributes,Z=[];function K(H,Y){return $.getDependency("accessor",H).then(function(X){J.setAttribute(Y,X)})}for(let H in W){let Y=XH[H]||H.toLowerCase();if(Y in J.attributes)continue;Z.push(K(W[H],Y))}if(Q.indices!==void 0&&!J.index){let H=$.getDependency("accessor",Q.indices).then(function(Y){J.setIndex(Y)});Z.push(H)}if(ZJ.workingColorSpace!==p8&&"COLOR_0"in W)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ZJ.workingColorSpace}" not supported.`);return A9(J,Q),tq(J,Q,$),Promise.all(Z).then(function(){return Q.targets!==void 0?sq(J,Q.targets,$):J})}var rU={type:"change"},FH={type:"start"},eU={type:"end"},bW=new G7,tU=new c8,eq=Math.cos(70*U7.DEG2RAD),U8=new T,y8=2*Math.PI,yJ={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},EH=0.000001;class qH extends wW{constructor(J,Q=null){super(J,Q);if(this.state=yJ.NONE,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Z7.ROTATE,MIDDLE:Z7.DOLLY,RIGHT:Z7.PAN},this.touches={ONE:K7.ROTATE,TWO:K7.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new qJ,this._lastTargetPosition=new T,this._quat=new qJ().setFromUnitVectors(J.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rQ,this._sphericalDelta=new rQ,this._scale=1,this._panOffset=new T,this._rotateStart=new W0,this._rotateEnd=new W0,this._rotateDelta=new W0,this._panStart=new W0,this._panEnd=new W0,this._panDelta=new W0,this._dollyStart=new W0,this._dollyEnd=new W0,this._dollyDelta=new W0,this._dollyDirection=new T,this._mouse=new W0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=QO.bind(this),this._onPointerDown=JO.bind(this),this._onPointerUp=$O.bind(this),this._onContextMenu=UO.bind(this),this._onMouseWheel=KO.bind(this),this._onKeyDown=HO.bind(this),this._onTouchStart=YO.bind(this),this._onTouchMove=XO.bind(this),this._onMouseDown=WO.bind(this),this._onMouseMove=ZO.bind(this),this._interceptControlDown=GO.bind(this),this._interceptControlUp=NO.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=yJ.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let J=this.domElement.getRootNode();J.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),J.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(rU),this.update(),this.state=yJ.NONE}pan(J,Q){this._pan(J,Q),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let Q=this.object.position;if(U8.copy(Q).sub(this.target),U8.applyQuaternion(this._quat),this._spherical.setFromVector3(U8),this.autoRotate&&this.state===yJ.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let $=this.minAzimuthAngle,W=this.maxAzimuthAngle;if(isFinite($)&&isFinite(W)){if($<-Math.PI)$+=y8;else if($>Math.PI)$-=y8;if(W<-Math.PI)W+=y8;else if(W>Math.PI)W-=y8;if($<=W)this._spherical.theta=Math.max($,Math.min(W,this._spherical.theta));else this._spherical.theta=this._spherical.theta>($+W)/2?Math.max($,this._spherical.theta):Math.min(W,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let Z=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let K=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),Z=K!=this._spherical.radius}if(U8.setFromSpherical(this._spherical),U8.applyQuaternion(this._quatInverse),Q.copy(this.target).add(U8),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let K=null;if(this.object.isPerspectiveCamera){let H=U8.length();K=this._clampDistance(H*this._scale);let Y=H-K;this.object.position.addScaledVector(this._dollyDirection,Y),this.object.updateMatrixWorld(),Z=!!Y}else if(this.object.isOrthographicCamera){let H=new T(this._mouse.x,this._mouse.y,0);H.unproject(this.object);let Y=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),Z=Y!==this.object.zoom;let X=new T(this._mouse.x,this._mouse.y,0);X.unproject(this.object),this.object.position.sub(X).add(H),this.object.updateMatrixWorld(),K=U8.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(K!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(K).add(this.object.position);else if(bW.origin.copy(this.object.position),bW.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(bW.direction))<eq)this.object.lookAt(this.target);else tU.setFromNormalAndCoplanarPoint(this.object.up,this.target),bW.intersectPlane(tU,this.target)}else if(this.object.isOrthographicCamera){let K=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),K!==this.object.zoom)this.object.updateProjectionMatrix(),Z=!0}if(this._scale=1,this._performCursorZoom=!1,Z||this._lastPosition.distanceToSquared(this.object.position)>EH||8*(1-this._lastQuaternion.dot(this.object.quaternion))>EH||this._lastTargetPosition.distanceToSquared(this.target)>EH)return this.dispatchEvent(rU),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return y8/60*this.autoRotateSpeed*J;else return y8/60/60*this.autoRotateSpeed}_getZoomScale(J){let Q=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*Q)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,Q){U8.setFromMatrixColumn(Q,0),U8.multiplyScalar(-J),this._panOffset.add(U8)}_panUp(J,Q){if(this.screenSpacePanning===!0)U8.setFromMatrixColumn(Q,1);else U8.setFromMatrixColumn(Q,0),U8.crossVectors(this.object.up,U8);U8.multiplyScalar(J),this._panOffset.add(U8)}_pan(J,Q){let $=this.domElement;if(this.object.isPerspectiveCamera){let W=this.object.position;U8.copy(W).sub(this.target);let Z=U8.length();Z*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*Z/$.clientHeight,this.object.matrix),this._panUp(2*Q*Z/$.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/$.clientWidth,this.object.matrix),this._panUp(Q*(this.object.top-this.object.bottom)/this.object.zoom/$.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,Q){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let $=this.domElement.getBoundingClientRect(),W=J-$.left,Z=Q-$.top,K=$.width,H=$.height;this._mouse.x=W/K*2-1,this._mouse.y=-(Z/H)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(y8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(y8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let Q=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(y8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);Q=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-y8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);Q=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(y8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);Q=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-y8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);Q=!0;break}if(Q)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),W=0.5*(J.pageY+Q.y);this._rotateStart.set($,W)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),W=0.5*(J.pageY+Q.y);this._panStart.set($,W)}}_handleTouchStartDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,W=J.pageY-Q.y,Z=Math.sqrt($*$+W*W);this._dollyStart.set(0,Z)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),W=0.5*(J.pageX+$.x),Z=0.5*(J.pageY+$.y);this._rotateEnd.set(W,Z)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(y8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(y8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),W=0.5*(J.pageY+Q.y);this._panEnd.set($,W)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,W=J.pageY-Q.y,Z=Math.sqrt($*$+W*W);this._dollyEnd.set(0,Z),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let K=(J.pageX+Q.x)*0.5,H=(J.pageY+Q.y)*0.5;this._updateZoomParameters(K,H)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId){this._pointers.splice(Q,1);return}}_isTrackingPointer(J){for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId)return!0;return!1}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new W0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q]}_customWheelEvent(J){let Q=J.deltaMode,$={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch(Q){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)$.deltaY*=10;return $}}function JO(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function QO(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function $O(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(eU),this.state=yJ.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let Q=this._pointers[0],$=this._pointerPositions[Q];this._onTouchStart({pointerId:Q,pageX:$.x,pageY:$.y});break}}function WO(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case Z7.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=yJ.DOLLY;break;case Z7.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=yJ.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=yJ.ROTATE}break;case Z7.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=yJ.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=yJ.PAN}break;default:this.state=yJ.NONE}if(this.state!==yJ.NONE)this.dispatchEvent(FH)}function ZO(J){switch(this.state){case yJ.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case yJ.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case yJ.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function KO(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==yJ.NONE)return;J.preventDefault(),this.dispatchEvent(FH),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(eU)}function HO(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function YO(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case K7.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=yJ.TOUCH_ROTATE;break;case K7.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=yJ.TOUCH_PAN;break;default:this.state=yJ.NONE}break;case 2:switch(this.touches.TWO){case K7.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=yJ.TOUCH_DOLLY_PAN;break;case K7.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=yJ.TOUCH_DOLLY_ROTATE;break;default:this.state=yJ.NONE}break;default:this.state=yJ.NONE}if(this.state!==yJ.NONE)this.dispatchEvent(FH)}function XO(J){switch(this._trackPointer(J),this.state){case yJ.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case yJ.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case yJ.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case yJ.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=yJ.NONE}}function UO(J){if(this.enabled===!1)return;J.preventDefault()}function GO(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function NO(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var K$=new T;function a8(J,Q,$,W,Z,K){let H=2*Math.PI*Z/4,Y=Math.max(K-2*Z,0),X=Math.PI/4;K$.copy(Q),K$[W]=0,K$.normalize();let U=0.5*H/(H+Y),N=1-K$.angleTo(J)/X;if(Math.sign(K$[$])===1)return N*U;else return Y/(H+Y)+U+U*(1-N)}class M7 extends gJ{constructor(J=1,Q=1,$=1,W=2,Z=0.1){let K=W*2+1;Z=Math.min(J/2,Q/2,$/2,Z);super(1,1,1,K,K,K);if(this.type="RoundedBoxGeometry",this.parameters={width:J,height:Q,depth:$,segments:W,radius:Z},K===1)return;let H=this.toNonIndexed();this.index=null,this.attributes.position=H.attributes.position,this.attributes.normal=H.attributes.normal,this.attributes.uv=H.attributes.uv;let Y=new T,X=new T,U=new T(J,Q,$).divideScalar(2).subScalar(Z),N=this.attributes.position.array,E=this.attributes.normal.array,G=this.attributes.uv.array,F=N.length/6,q=new T,V=0.5/K;for(let R=0,O=0;R<N.length;R+=3,O+=2)switch(Y.fromArray(N,R),X.copy(Y),X.x-=Math.sign(X.x)*V,X.y-=Math.sign(X.y)*V,X.z-=Math.sign(X.z)*V,X.normalize(),N[R+0]=U.x*Math.sign(Y.x)+X.x*Z,N[R+1]=U.y*Math.sign(Y.y)+X.y*Z,N[R+2]=U.z*Math.sign(Y.z)+X.z*Z,E[R+0]=X.x,E[R+1]=X.y,E[R+2]=X.z,Math.floor(R/F)){case 0:q.set(1,0,0),G[O+0]=a8(q,X,"z","y",Z,$),G[O+1]=1-a8(q,X,"y","z",Z,Q);break;case 1:q.set(-1,0,0),G[O+0]=1-a8(q,X,"z","y",Z,$),G[O+1]=1-a8(q,X,"y","z",Z,Q);break;case 2:q.set(0,1,0),G[O+0]=1-a8(q,X,"x","z",Z,J),G[O+1]=a8(q,X,"z","x",Z,$);break;case 3:q.set(0,-1,0),G[O+0]=1-a8(q,X,"x","z",Z,J),G[O+1]=1-a8(q,X,"z","x",Z,$);break;case 4:q.set(0,0,1),G[O+0]=1-a8(q,X,"x","y",Z,J),G[O+1]=1-a8(q,X,"y","x",Z,Q);break;case 5:q.set(0,0,-1),G[O+0]=a8(q,X,"x","y",Z,J),G[O+1]=1-a8(q,X,"y","x",Z,Q);break}}static fromJSON(J){return new M7(J.width,J.height,J.depth,J.segments,J.radius)}}var G0={tableWidth:0.92,tableCenterY:0.724,tableThickness:0.09,feltWidth:0.78,feltCenterY:0.776,surfaceY:0.782,chairSeatY:0.51,chairSeatWidth:0.56,seatDistance:0.77,tileLength:0.054,tileWidth:0.027,tileThickness:0.011,tileGap:0.0016,pipRadius:0.0029,pipColumnSpacing:0.0064,pipRowSpacing:0.0074,rackRadius:0.418,rackSpacing:0.0305,neutralPoseTime:10.25,boardLimit:0.27},E9=[[0,G0.seatDistance,Math.PI],[-G0.seatDistance,0,Math.PI/2],[0,-G0.seatDistance,0],[G0.seatDistance,0,-Math.PI/2]];function RH(J){let Q=J.vertical?G0.tileWidth:G0.tileLength,$=J.vertical?G0.tileLength:G0.tileWidth;return{left:J.x-Q/2,right:J.x+Q/2,top:J.z-$/2,bottom:J.z+$/2}}var EO=G0.boardLimit,FO=G0.feltWidth/2-0.022;function LH(J,Q,$=EO){let W=RH(J);if(Math.max(Math.abs(W.left),Math.abs(W.right),Math.abs(W.top),Math.abs(W.bottom))>$+0.00000001)return!1;return Q.every((Z)=>{let K=RH(Z);return W.right<=K.left-0.0015||W.left>=K.right+0.0015||W.bottom<=K.top-0.0015||W.top>=K.bottom+0.0015})}function J5(J,Q,$){let{tileLength:W,tileWidth:Z,tileGap:K}=G0,H=Q.x===Q.y,Y=(H?Z:W)/2,X=J.tile,U=[],N=[[J.dx,J.dz],[J.dz,-J.dx],[-J.dz,J.dx]];for(let E=0;E<N.length;E++){let[G,F]=N[E],q=E!==0,V=(X.isDouble?Z:W)/2,R=(X.isDouble?W:Z)/2,O=X.x+J.dx*(q?X.isDouble?0:W/4:V),z=X.z+J.dz*(q?X.isDouble?0:W/4:V),D=q?[0,W/8,-W/8]:[0];for(let L of D){let M=Math.atan2(-F,G)+($==="left"?Math.PI:0)+(H?Math.PI/2:0);U.push({id:Q.id,x:O+G*((q?R:0)+K+Y)+J.dx*L,z:z+F*((q?R:0)+K+Y)+J.dz*L,yaw:M,vertical:Math.abs(Math.sin(M))>0.5,isDouble:H,dx:G,dz:F,side:$})}}return U}function OH(J,Q,$,W){let Z={id:"future",x:0,y:W?0:1};return J5({tile:J,dx:J.dx,dz:J.dz},Z,$).some((K)=>LH(K,Q))}function Q5(J,Q=[]){return W5(J,Q).placements}function $5(J,Q=[]){let $=W5(J,Q);if(!$.ends)return[];return["left","right"].map((W)=>{let Z=$.ends[W],K=Z.tile,H=RH(K),Y=Math.abs(Z.dx)*(H.right-H.left)/2+Math.abs(Z.dz)*(H.bottom-H.top)/2,X=Y+0.013;return{x:K.x+Z.dx*X,z:K.z+Z.dz*X,dx:Z.dx,dz:Z.dz}})}function W5(J,Q){if(J.length>28)throw Error("A double-six chain has at most 28 tiles.");if(!J.length)return{placements:[],ends:null};let $=new Map(J.map((G)=>[G.id,G])),W=Q.filter((G)=>G.type==="play"&&G.tile&&$.has(G.tile)),Z=$.get(W[0]?.tile||"")||J[0],K=J.findIndex((G)=>G.id===Z.id),H=Z.x===Z.y,Y={id:Z.id,x:0,z:0,yaw:H?Math.PI/2:0,vertical:H,isDouble:H,dx:1,dz:0,side:"root"},X=[Y],U=new Map([[Y.id,Y]]),N={left:{tile:Y,dx:-1,dz:0},right:{tile:Y,dx:1,dz:0}},E=W.length===J.length?W.slice(1):[...J.slice(0,K).reverse().map((G)=>({type:"play",tile:G.id,side:"left"})),...J.slice(K+1).map((G)=>({type:"play",tile:G.id,side:"right"}))];for(let G of E){let F=$.get(G.tile);if(U.has(F.id))continue;let q=G.side==="left"?"left":G.side==="right"?"right":J.findIndex((z)=>z.id===F.id)<K?"left":"right",V=J5(N[q],F,q),R=V.filter((z)=>LH(z,X));if(!R.length)R=V.filter((z)=>LH(z,X,FO));let O=R.find((z)=>OH(z,[...X,z],q,!1)&&OH(z,[...X,z],q,!0))||R.find((z)=>OH(z,[...X,z],q,!1))||R[0];if(!O)throw Error(`No safe placement for ${F.id} after ${X.length} tiles`);X.push(O),U.set(F.id,O),N[q]={tile:O,dx:O.dx,dz:O.dz}}return{placements:J.map((G)=>U.get(G.id)),ends:N}}function Z5(J,Q,$=!1){if($)return{breath:0,headYaw:0,headNod:0};let W=J*2.173+0.43;return{breath:0.0055*Math.sin(Q*(0.78+J*0.093)+W),headYaw:0.087*Math.sin(Q*(0.213+J*0.037)+W)+0.028*Math.sin(Q*(0.487+J*0.029)+W*1.91),headNod:0.009*Math.sin(Q*(0.267+J*0.035)+W*0.71)}}var K5=new T(1,0,0),q9=new T(0,1,0),VH=new qJ;function zH(J){let Q=[];return J.traverse(($)=>{if($.isBone)Q.push({bone:$,position:$.position.clone(),quaternion:$.quaternion.clone(),scale:$.scale.clone()})}),Q}var _9=new T,F9=new T,T9=new T,o7=new T,s9=new T,r8=new T,a7=new T,r7=new T,e7=new qJ,O9=new qJ,uW=new qJ,lW=new qJ,G$=(J)=>Math.min(1,Math.max(-1,J)),J6=(J,Q,$)=>Math.min($,Math.max(Q,J)),R9=(J)=>J*J*(3-2*J);function Q8(J,Q){J.getWorldQuaternion(O9),J.parent.getWorldQuaternion(uW),J.quaternion.copy(uW.invert()).multiply(Q).multiply(O9),J.updateMatrixWorld(!0)}var _8=new T,e8=new T;function qO(J){J.holder.getWorldQuaternion(lW),_8.set(1,0,0).applyQuaternion(lW),e8.set(0,0,1).applyQuaternion(lW)}function MH(J,Q,$,W,Z){return Z.set(Q,$,W).applyMatrix4(J.holder.matrixWorld)}function H5(J,Q,$,W){return W.set(J,Q,$).applyQuaternion(lW).normalize()}var OO=0.965;function RO(J,Q,$){let{brazo:W,antebrazo:Z,mano:K}=J;if(!W||!Z||!K||!W.parent||!Z.parent)return;W.getWorldPosition(_9),Z.getWorldPosition(F9),K.getWorldPosition(T9);let H=_9.distanceTo(F9),Y=F9.distanceTo(T9);if(H<0.00001||Y<0.00001)return;let X=J6(_9.distanceTo(Q),Math.abs(H-Y)+0.002,(H+Y)*OO);if(s9.subVectors(F9,_9),r8.subVectors(T9,F9),a7.crossVectors(s9,r8),a7.lengthSq()<0.0000000001)a7.copy(_8);else a7.normalize();let U=Math.acos(G$((H*H+Y*Y-_9.distanceToSquared(T9))/(2*H*Y))),E=Math.acos(G$((H*H+Y*Y-X*X)/(2*H*Y)))-U;if(Q8(Z,e7.setFromAxisAngle(a7,E)),K.getWorldPosition(T9),Math.abs(_9.distanceTo(T9)-X)>0.001)Q8(Z,e7.setFromAxisAngle(a7,-2*E)),K.getWorldPosition(T9);if(s9.subVectors(T9,_9).normalize(),r8.subVectors(Q,_9),r8.lengthSq()<0.0000000001)return;if(r8.normalize(),Q8(W,e7.setFromUnitVectors(s9,r8)),!$)return;if(Z.getWorldPosition(F9),r7.subVectors(F9,_9),r7.addScaledVector(r8,-r7.dot(r8)),o7.subVectors($,_9),o7.addScaledVector(r8,-o7.dot(r8)),r7.lengthSq()<0.0000000001||o7.lengthSq()<0.0000000001)return;r7.normalize(),o7.normalize();let G=Math.atan2(a7.crossVectors(r7,o7).dot(r8),G$(r7.dot(o7)));Q8(W,e7.setFromAxisAngle(r8,G))}var f8=new T,e6=new T,H$=new T,LO=new n0,DH=new qJ,Y$=new qJ;function VO(J,Q,$){let{antebrazo:W,mano:Z}=J;if(!W||!Z||!Z.parent)return;if(f8.copy(Q).normalize(),H$.crossVectors(f8,$),H$.lengthSq()<0.00000001)return;H$.normalize(),e6.crossVectors(H$,f8),DH.setFromRotationMatrix(LO.makeBasis(H$,f8,e6)),W.getWorldPosition(F9),Z.getWorldPosition(T9),s9.subVectors(T9,F9).normalize(),Z.getWorldQuaternion(O9),Y$.copy(DH).multiply(O9.invert());let K=Y$.x*s9.x+Y$.y*s9.y+Y$.z*s9.z,H=2*Math.atan2(K,Y$.w);if(Number.isFinite(H))Q8(W,e7.setFromAxisAngle(s9,J6(H*0.5,-1.2,1.2)));Z.parent.getWorldQuaternion(uW),Z.quaternion.copy(uW.invert()).multiply(DH),Z.updateMatrixWorld(!0)}var DO=new T;function BO(J,Q,$){let W=Q.lado==="Left"?1:-1,Z=J.index*1.7,K=G0.seatDistance-G0.tableWidth/2;return MH(J,W*(0.225+Math.sin(Z)*0.01)+Math.sin($*0.23+Z)*0.004,G0.surfaceY+0.026,K+(W>0?0.035:0.06)+Math.cos(Z*1.3)*0.012+Math.sin($*0.17+Z*2)*0.004,DO)}var kO=new T,r6=new T,CH=new T,xW=new T,MO=0.045,CO=0.05,zO=0.12,PO=0.14,IO=0.45,AO=4;function Y5(J,Q,$){return xW.subVectors(Q,J.holder.getWorldPosition(CH)),xW.y=0,xW.normalize(),$.copy(Q).addScaledVector(xW,-CO).setY(Q.y+MO)}function _O(J,Q,$){let W=J.jugada;if(!W)return null;if(Q-W.t0>AO)return J.jugada=null,null;let Z=W.anim;if(Z.elapsed<Z.duration)return Y5(J,W.obj.position,r6),r6.lerpVectors($,r6,R9(J6(Z.elapsed/zO,0,1)));if(W.aterrizo==null)W.aterrizo=Q;let K=Q-W.aterrizo;Y5(J,W.hasta,r6);let H=Z.golpe?0.7:PO;if(K<H)return r6;let Y=(K-H)/IO;if(Y>=1)return J.jugada=null,null;return r6.lerp($,R9(Y))}var UJ=[1,1.9,3.3,4.3,5.2],X5=-1e9;function TO(J,Q,$){let W=J.bebida;if(!W)return null;if(J.trago){let K=J.trago.fijo??Q-J.trago.t0;if(K<0||K>=UJ[4]||J.jugada)return J.trago=null,q5(W),J.sed=Q+90+Math.random()*150,null;return K}if(!$||!$.dt)return null;if(J.sed==null)return J.sed=Q+20+Math.random()*100,null;if(Q<J.sed||Q-X5<20)return null;let Z=J.index;if(J.jugada||$.jugando&&$.turno===Z||$.habla.has(Z)||$.fin&&Q-$.fin.t<6)return J.sed=Q+3+Math.random()*8,null;return X5=Q,J.trago={t0:Q},0}function q5(J){J.group.position.copy(J.home),J.group.quaternion.identity()}var n9=new T,t7=new T,t6=new T,X$=new T,U5=new T;function G5(J,Q,$,W){let Z=J.bebida;if(t6.copy(e8).addScaledVector(q9,0.25).normalize(),X$.copy(e8).multiplyScalar(0.55).addScaledVector(q9,0.8).normalize(),t7.copy(Z.home),t7.y+=Z.alto,t7.addScaledVector(_8,-(Z.radio+0.015)).addScaledVector(t6,-0.03),J.bocaMundo)J.bocaMundo(n9),n9.addScaledVector(e8,0.006);else J.front.getWorldPosition(n9),n9.y-=0.075,n9.addScaledVector(e8,0.012);let K=Z.inclina;U5.copy(q9).multiplyScalar(Math.cos(K)).addScaledVector(e8,-Math.sin(K)),n9.addScaledVector(U5,-Z.boca).addScaledVector(_8,-(Z.radio+0.015)).addScaledVector(X$,-0.03);let H;if(Q<UJ[0])W.lerpVectors($,t7,R9(Q/UJ[0])),H=t6;else if(Q<UJ[1]){let Y=R9((Q-UJ[0])/(UJ[1]-UJ[0]));W.lerpVectors(t7,n9,Y),H=t6.lerp(X$,Y).normalize()}else if(Q<UJ[2])W.copy(n9),H=X$;else if(Q<UJ[3]){let Y=R9((Q-UJ[2])/(UJ[3]-UJ[2]));W.lerpVectors(n9,t7,Y),H=X$.lerp(t6,Y).normalize()}else W.lerpVectors(t7,$,R9((Q-UJ[3])/(UJ[4]-UJ[3]))),H=t6;return H}var N5=new T,E5=new T,F5=new T;function wO(J,Q){let $=J.bebida,W=J.brazos[1].mano;if(Q<UJ[0]||Q>=UJ[3]){q5($);return}W.getWorldQuaternion(O9),W.getWorldPosition(dW),N5.set(0,0,1).applyQuaternion(O9),E5.set(0,1,0).applyQuaternion(O9);let Z=Q<UJ[1]?R9((Q-UJ[0])/(UJ[1]-UJ[0])):Q<UJ[2]?1:1-R9((Q-UJ[2])/(UJ[3]-UJ[2]));$.group.quaternion.setFromAxisAngle(_8,-$.inclina*Z),F5.set(0,1,0).applyQuaternion($.group.quaternion),$.group.position.copy(dW).addScaledVector(N5,$.radio+0.015).addScaledVector(E5,0.03).addScaledVector(F5,-$.alto)}function SO(J,Q,$){let W=J.cara;if(!W)return 0;if(J.proxParpadeo==null)J.proxParpadeo=Q+1+Math.random()*4;if(Q>=J.proxParpadeo)J.parpadeoT0=Q,J.proxParpadeo=Q+(Math.random()<0.15?0.32:2+Math.random()*4);let Z=Q-(J.parpadeoT0??-9),K=Z<0?0:Z<0.06?Z/0.06:Z<0.09?1:Z<0.16?1-(Z-0.09)/0.07:0;if(J.caraFija){let U=J.caraFija,N=W.mesh.morphTargetInfluences;if(N)N[W.iP]=U.p*0.85,N[W.iS]=U.s;return J.parpadeo=U.p,U.p}let H=J.index,Y=0;if($?.fin&&$.fin.team!=null&&Q-$.fin.t<5&&Q>=$.fin.t)Y=H%2===$.fin.team?0.95:-0.7;else if($?.habla?.has(H))Y=$.hablaTipo?.get(H)==="win"?0.85:0.2;else{if(J.casual==null)J.casual=Q+8+Math.random()*30;if(Q>J.casual+2.5)J.casual=Q+15+Math.random()*45;if(Q>=J.casual)Y=0.45}J.sonrisa=(J.sonrisa??0)+(Y-(J.sonrisa??0))*(1-Math.exp(-($?.dt||0.016)*3.5));let X=W.mesh.morphTargetInfluences;if(X)X[W.iP]=K*0.85,X[W.iS]=J.sonrisa;return J.parpadeo=K,K}function jO(J,Q){let $=J.index,W=0.23+$%4*0.012,Z=Q*W*Math.PI*2+$*1.9,K=Math.sin(Z);return{b:K>0?K:K*0.7,balanceo:Math.sin(Q*0.11+$*2.3)*0.022+Math.sin(Q*0.29+$)*0.008,ladeo:Math.sin(Q*0.07+$*1.3)*0.014}}var BH=new T,gW=new T,t8=new T,C7=new T,L9=new T,v8=new qJ,pW=(J)=>{let Q=Math.sin(J*127.1+311.7)*43758.5453;return Q-Math.floor(Q)};function yO(J,Q,$,W){let Z=J.index;if(Z>=4||!$)return $?.foco&&Q-$.foco.t<2.5?W.copy($.foco.p):W.set(0,G0.surfaceY,0);if($.fin&&Q-$.fin.t<5){if($.fin.team!=null&&Z%2===$.fin.team&&$.cabezas[(Z+2)%4])return W.copy($.cabezas[(Z+2)%4]);return MH(J,0,G0.surfaceY,G0.seatDistance-G0.rackRadius,W)}if(J.trago&&J.bebida){let Y=J.trago.fijo??Q-J.trago.t0;if(Y<1.1||Y>3.4&&Y<4.3)return W.copy(J.bebida.home);if(Y<=3.4)return J.head.getWorldPosition(W),W.addScaledVector(e8,1).addScaledVector(q9,-0.15)}if($.foco&&Q-$.foco.t<1.4)return W.copy($.foco.p);for(let Y of $.habla)if(Y!==Z&&$.cabezas[Y])return W.copy($.cabezas[Y]);if($.jugando&&$.turno===Z){let Y=Math.floor(Q/1.3);return MH(J,(pW(Y+Z*9)-0.5)*0.12,G0.surfaceY+0.02,G0.seatDistance-G0.rackRadius+0.02,W)}let K=Math.floor((Q+Z*1.37)/(2.2+Z*0.35)),H=pW(K*4+Z);if($.jugando&&H<0.45&&$.cabezas[$.turno]&&$.turno!==Z)return W.copy($.cabezas[$.turno]);if(H<0.62&&$.cabezas[(Z+2)%4])return W.copy($.cabezas[(Z+2)%4]);if(!$.jugando&&H<0.85&&$.cabezas[(Z+1+K%2*2)%4])return W.copy($.cabezas[(Z+1+K%2*2)%4]);return W.set((pW(K+7)-0.5)*0.2,G0.surfaceY,(pW(K+3)-0.5)*0.2)}function vO(J,Q,$){let{head:W,neck:Z,front:K}=J;if(!W||!K)return;if(yO(J,Q,$,BH),!J.mirada||!$?.dt)J.mirada=(J.mirada||new T).copy(BH);else J.mirada.lerp(BH,1-Math.exp(-$.dt*5.5));for(let[H,Y]of[[Z,0.4],[W,1]]){if(!H)continue;if(W.getWorldPosition(gW),K.getWorldPosition(t8),t8.sub(gW),t8.lengthSq()<0.0000000001)return;if(t8.normalize(),C7.subVectors(J.mirada,gW),C7.lengthSq()<0.00000001)return;C7.normalize();let X=J6(Math.atan2(t8.z*C7.x-t8.x*C7.z,t8.x*C7.x+t8.z*C7.z),-1.25,1.25)*Y;if(Q8(H,e7.setFromAxisAngle(q9,X)),K.getWorldPosition(t8),t8.sub(gW).normalize(),L9.crossVectors(t8,q9),L9.lengthSq()<0.00000001)continue;L9.normalize();let U=J6(Math.asin(G$(C7.y))-Math.asin(G$(t8.y)),-0.75,0.55)*Y;Q8(H,e7.setFromAxisAngle(L9,U))}}var fO=0.23,hO=[["lomo",0.4],["spine",0.34],["chest",0.26]],aV=new qJ;function bO(J,Q,$=0){if(!J.spine||!J.spine.parent)return;if(L9.copy(_8),J.hips&&J.lomo)for(let[W,Z]of hO){let K=J[W];if(!K)continue;Q8(K,v8.setFromAxisAngle(L9,Q*Z))}else Q8(J.spine,v8.setFromAxisAngle(L9,Q));if($)Q8(J.spine,v8.setFromAxisAngle(q9,$))}var mW=new T,kH=new T,U$=new T,dW=new T;function cW(J,Q,$=!1,W=null){for(let q of J.pose)q.bone.position.copy(q.position),q.bone.quaternion.copy(q.quaternion),q.bone.scale.copy(q.scale);J.holder.updateMatrixWorld(!0),qO(J);let Z=Z5(J.index,Q,$);if(J.spine)J.spine.quaternion.multiply(VH.setFromAxisAngle(K5,Z.breath));let K=!$,H=K?jO(J,Q):{b:0,balanceo:0,ladeo:0},Y=J.index,X=Y<4&&J.brazos,U=0,N=0;if(X&&W?.fin&&W.fin.team!=null){let q=Q-W.fin.t;if(q>=0&&q<5)N=Math.sin(Math.min(1,q/0.5)*Math.PI/2)*(q>4?5-q:1),U+=(Y%2===W.fin.team?-0.1:0.07)*N}if(X&&W?.jugando&&W.turno===Y)U+=0.04;let E=X&&K&&J.front?TO(J,Q,W):null,G=[];if(X)for(let q of J.brazos){let V=kO.copy(BO(J,q,Q)),R=q.lado==="Right"?_O(J,Q,V):null,O=!!R,z=null;if(!R&&E!=null&&q.lado==="Right")R=CH.set(0,0,0),z=G5(J,E,V,R).clone();if(R=(R||V).clone(),!O&&K&&W?.habla?.has(Y)&&q.lado==="Left")J.gesto=Math.min(1,(J.gesto||0)+(W.dt||0)*3);else if(q.lado==="Left")J.gesto=Math.max(0,(J.gesto||0)-(W?.dt||1)*2);if(q.lado==="Left"&&J.gesto>0){let D=R9(J.gesto);R.addScaledVector(e8,0.06*D).addScaledVector(_8,-0.07*D),R.y+=0.07*D+Math.sin(Q*5.2)*0.012*D}if(q.lado==="Right"&&!O&&N&&Y%2===W.fin.team){let D=Q-W.fin.t;if(D<1.1)R.y+=Math.max(0,Math.sin(Math.min(1,D/0.9)*Math.PI))*0.13}G.push({brazo:q,o:R,jugando:O,dedos:z,reposo:V.clone()})}let F=0;if(X){let q=G.find((V)=>V.jugando);if(q&&q.brazo.brazo){J.holder.worldToLocal(U$.copy(q.o));let V=Math.hypot(U$.x,U$.z-0.12);U+=J6((V-0.42)/0.55,0,0.34),F=J6(Math.atan2(U$.x,U$.z)*0.3,-0.3,0.3)}}if(bO(J,fO*(J.brazos?1:0.6)+U,F),E!=null){let q=E<UJ[1]?Math.sin(Math.min(1,E/UJ[0])*Math.PI/2)*(1-R9(Math.max(0,E-UJ[0])/(UJ[1]-UJ[0]))):E>UJ[2]?Math.sin(Math.min(1,(E-UJ[2])/(UJ[3]-UJ[2]))*Math.PI):0;if(J.spine)Q8(J.spine,v8.setFromAxisAngle(e8,0.16*q))}if(K){if(J.spine)Q8(J.spine,v8.setFromAxisAngle(q9,H.balanceo));if(J.spine)Q8(J.spine,v8.setFromAxisAngle(e8,H.ladeo));if(J.chest)Q8(J.chest,v8.setFromAxisAngle(_8,-0.018*H.b));if(J.hombros){for(let[q,V]of J.hombros)if(V)Q8(V,v8.setFromAxisAngle(e8,q*0.03*(H.b+0.3)))}}if(vO(J,Q,W),SO(J,Q,W),J.head)J.head.quaternion.multiply(VH.setFromAxisAngle(q9,Z.headYaw*0.5)),J.head.quaternion.multiply(VH.setFromAxisAngle(K5,Z.headNod)),J.head.updateMatrixWorld(!0);if(K&&J.head){if(W?.habla?.has(Y)){let q=0.035*(0.6+0.4*Math.sin(Q*1.7));Q8(J.head,v8.setFromAxisAngle(_8,Math.sin(Q*6.1)*q*0.5+Math.sin(Q*3.3)*q*0.5))}if(N&&Y%2!==W.fin.team){let q=Q-W.fin.t;if(q>0.6&&q<2.6)Q8(J.head,v8.setFromAxisAngle(q9,Math.sin((q-0.6)*Math.PI*2.4)*0.16*(2.6-q)/2))}}if(E!=null&&E>UJ[1]-0.2&&E<UJ[2]+0.2&&J.head){let q=Math.sin(Math.min(1,(E-UJ[1]+0.2)/(UJ[2]-UJ[1]+0.4))*Math.PI);Q8(J.head,v8.setFromAxisAngle(_8,-0.3*q))}if(K&&J.reaction&&J.head){let q=Q-J.reaction.time;if(q>=0&&q<1.2){let V=Math.sin(q/1.2*Math.PI)*0.035;Q8(J.head,v8.setFromAxisAngle(_8,V))}}for(let{brazo:q,o:V,jugando:R,dedos:O,reposo:z}of G){if(O)O.copy(G5(J,E,z,V));let D=q.lado==="Left"?1:-1;if(q.brazo.getWorldPosition(mW),O)mW.add(H5(D*0.85,-0.5,0.05,kH));else mW.add(H5(D*(R?0.55:0.32),-0.75,R?-0.15:-0.6,kH));if(RO(q,V,mW),q.antebrazo.getWorldPosition(F9),q.mano.getWorldPosition(dW),f8.subVectors(dW,F9),f8.y=0,f8.lengthSq()<0.00000001)f8.copy(e8);if(f8.normalize(),f8.addScaledVector(_8,-D*(R?0:0.12)).normalize(),f8.y=R?-0.55:-0.3,e6.set(0,-1,0).addScaledVector(_8,-D*0.22),q.lado==="Left"&&J.gesto>0){let L=R9(J.gesto);e6.lerp(kH.copy(_8).multiplyScalar(-1).add(CH.set(0,0.4,0)),L*0.8),f8.y+=0.4*L}if(O)f8.copy(O),e6.copy(_8).addScaledVector(q9,-0.15);if(VO(q,f8,e6),O)wO(J,E);if(K&&!R&&!O&&q.lado==="Right"&&J.toque&&Q-J.toque.t0<0.7){let L=Q-J.toque.t0;q.mano.getWorldQuaternion(O9),L9.set(1,0,0).applyQuaternion(O9),Q8(q.mano,v8.setFromAxisAngle(L9,-0.5*Math.max(0,Math.sin(L/0.7*Math.PI*4))))}else if(K&&!R&&!O&&q.lado==="Right"&&!(W?.turno===Y&&W?.jugando)){let L=4.6+Y*0.9,M=(Q+Y*1.3)%L;if(M<0.55)q.mano.getWorldQuaternion(O9),L9.set(1,0,0).applyQuaternion(O9),Q8(q.mano,v8.setFromAxisAngle(L9,-0.22*Math.max(0,Math.sin(M/0.55*Math.PI*4))))}}J.holder.updateMatrixWorld(!0)}function O5({scene:J,texture:Q,mat:$,box:W,cylinder:Z,random:K,teal:H,wood:Y,storeSign:X}){let U=Q((D,L,M)=>{D.fillStyle="#39796d",D.fillRect(0,0,L,M);let I=D.createLinearGradient(0,0,0,M);I.addColorStop(0,"#cac09b18"),I.addColorStop(0.7,"#14382d00"),I.addColorStop(1,"#162d2566"),D.fillStyle=I,D.fillRect(0,0,L,M);for(let w=0;w<7000;w++)D.fillStyle=w%3?"#b4ad8618":"#142d2924",D.fillRect(K()*L,K()*M,1+K()*3,1+K()*2);for(let w=0;w<190;w++){let B=K()*L,A=w<125?M*(0.7+K()*0.3):K()*M,d=6+K()*17;D.fillStyle=w%3?"#a69c7d":"#6a7b6a",D.beginPath();for(let y=0;y<8;y++){let b=y*Math.PI/4,J0=d*(0.6+K()*0.5);D.lineTo(B+Math.cos(b)*J0,A+Math.sin(b)*J0*0.65)}D.fill()}D.strokeStyle="#1b372e24";for(let w=48;w<M;w+=57)D.beginPath(),D.moveTo(0,w),D.lineTo(L,w),D.stroke()},1024,1024);H.map=U,H.color.set("#c7ccbb"),H.needsUpdate=!0,Y.color.set("#bca98a"),Y.roughness=0.84,X.material.map=Q((D,L,M)=>{D.fillStyle="#966045",D.fillRect(0,0,L,M),D.fillStyle="#e7d6a7",D.textAlign="center",D.textBaseline="middle",D.font="bold 66px Georgia",D.fillText("COLMADO LA ESQUINA",L/2,M/2);for(let I=0;I<2000;I++)D.fillStyle=I%2?"#58472c30":"#dec29630",D.fillRect(K()*L,K()*M,1+K()*5,1+K()*3);D.strokeStyle="#57412c",D.lineWidth=7,D.strokeRect(3,3,L-6,M-6)},1024,256),X.material.needsUpdate=!0;let E=["#b68e3c","#a45137","#6a8b62","#bbad8a"].map((D,L)=>new QJ({roughness:0.94,map:Q((M,I,w)=>{M.fillStyle=D,M.fillRect(0,0,I,w);for(let B=0;B<30;B++)M.strokeStyle=B%2?"#fff2":"#0002",M.beginPath(),M.moveTo(K()*I,0),M.lineTo(K()*I,w),M.stroke();M.fillStyle="#dfd1a6",M.fillRect(20,w*0.32,I-40,w*0.36),M.fillStyle="#403c29",M.font="bold 31px Georgia",M.textAlign="center",M.fillText(["CAFÉ","ARROZ","PLÁTANO","AZÚCAR"][L],I/2,w*0.53)},256,384)}));for(let D=0;D<3;D++)for(let L=0;L<8;L++)W(-3+L*0.17,1.73+D*0.48,-4.46,0.13,0.23,0.075,E[(L+D)%4],(K()-0.5)*0.1);for(let[D,L]of[[-2.7,-3.5],[2.4,-3.3]])W(D,0.18,L,0.51,0.35,0.4,"#897052"),W(D+0.05,0.47,L-0.04,0.4,0.23,0.32,"#a68c62");for(let D=0;D<3;D++)Z(2.48+D*0.24,0.18,-2.3,0.09,0.1,0.31,"#74a69e",12),Z(2.48+D*0.24,0.36,-2.3,0.035,0.043,0.075,"#5b8c84",10);for(let D=0;D<4;D++){let L=new z0(new A8(1,10,7),$(D%2?"#a08e69":"#b0a078"));L.scale.set(0.15,0.24,0.12),L.position.set(-2.6+D*0.25,0.23,-2.1),L.rotation.z=(D-1.5)*0.06,L.castShadow=!0,J.add(L)}let G=new z0(new H8(0.72,0.69),new QJ({roughness:1,map:Q((D,L,M)=>{D.fillStyle="#263d30",D.fillRect(0,0,L,M),D.strokeStyle="#9c8c62",D.lineWidth=16,D.strokeRect(8,8,L-16,M-16),D.fillStyle="#dcdcb8",D.textAlign="center";for(let[I,w,B]of[["HOY HAY",68,43],["CAFÉ",150,48],["HIELO · PAN",228,32],["REFRESCOS",292,31]])D.font=`${B}px Georgia`,D.fillText(I,L/2,w)},384,360)}));G.position.set(-3.43,1.6,-2.33),G.rotation.z=0.025,J.add(G);let F=[];W(-1.12,1.59,-4,0.42,0.21,0.31,"#677761"),W(-1.12,1.61,-3.836,0.34,0.1,0.016,"#414b3d"),W(-0.38,1.5,-3.98,0.3,0.018,0.22,"#c5b887");for(let[D,L,M]of[[0.7,-4.03,"#8b7747"],[0.98,-4.07,"#637751"],[1.29,-4.02,"#a88b50"]])Z(D,1.6,L,0.07,0.075,0.25,M,14),Z(D,1.739,L,0.077,0.077,0.028,"#aaa386",12);W(0.2,1.51,-4.01,0.4,0.07,0.28,"#6c5838");for(let D=0;D<4;D++){let L=new z0(new A8(1,10,6),$(D%2?"#bca276":"#a98e61"));L.scale.set(0.055,0.035,0.115),L.position.set(0.07+D*0.085,1.57,-4),L.rotation.y=(D-1.5)*0.13,J.add(L)}let q=new cJ({transparent:!0,depthWrite:!1,map:Q((D,L,M)=>{for(let I=0;I<90;I++)D.fillStyle=I%2?"#152c2110":"#3036230a",D.beginPath(),D.ellipse(L/2+(K()-0.5)*L*0.45,M/2+(K()-0.5)*M*0.45,K()*L*0.24,K()*M*0.18,K()*Math.PI,0,Math.PI*2),D.fill()},256,256)});for(let[D,L,M,I]of[[-2.4,-2.2,1.1,0.9],[2.5,-2.5,1.3,0.8],[0,-3.25,2,0.6]]){let w=new z0(new H8(M,I),q);w.rotation.x=-Math.PI/2,w.position.set(D,0.008,L),J.add(w)}for(let[D,L]of[[-3,-0.9],[3.3,-1.5]]){Z(D,0.18,L,0.18,0.13,0.34,"#87553c",14),Z(D,0.354,L,0.16,0.16,0.012,"#3f422d",12);let M=new IJ;M.position.set(D,0.36,L),J.add(M);for(let I=0;I<7;I++){let w=new cQ;w.moveTo(0,0),w.quadraticCurveTo(-0.09,0.23,0,0.55+K()*0.12),w.quadraticCurveTo(0.09,0.23,0,0);let B=new z0(new nQ(w,5),new QJ({color:I%2?"#597d4f":"#3c603e",roughness:1,side:W8}));B.rotation.set(0.3+K()*0.4,I*Math.PI*2/7,0),M.add(B)}F.push(M)}let V=new H8(0.55,1.3,5,9),R=new z0(V,new QJ({color:"#b2a27c",roughness:1,side:W8}));R.position.set(-2.85,1.75,-3.05),J.add(R);let O=V.attributes.position,z=O.array.slice();return{update(D){F.forEach((L,M)=>L.rotation.z=Math.sin(D*0.53+M*2.1)*0.015);for(let L=0;L<O.count;L++){let M=z[L*3+1];O.setZ(L,Math.sin(D*1.17+M*3)*0.025*(0.65-M)/1.3)}O.needsUpdate=!0}}}var xO=["cafe","morir","presidente","presidente"];function gO(){let J=document.createElement("canvas");J.width=256,J.height=128;let Q=J.getContext("2d");Q.fillStyle="#f1ece0",Q.fillRect(0,0,256,128),Q.fillStyle="#b3262d",Q.fillRect(0,10,256,14),Q.fillRect(0,104,256,14),Q.fillStyle="#1f5a36",Q.beginPath(),Q.ellipse(128,64,54,28,0,0,Math.PI*2),Q.fill(),Q.fillStyle="#f1ece0",Q.beginPath(),Q.ellipse(128,64,46,21,0,0,Math.PI*2),Q.fill(),Q.fillStyle="#b3262d",Q.fillRect(92,58,72,12);let $=new E7(J);return $.colorSpace=B8,$}function pO(){let J=new IJ,Q=(X,U)=>new W0(X,U),$=[Q(0,0),Q(0.034,0),Q(0.037,0.006),Q(0.037,0.165),Q(0.034,0.188),Q(0.022,0.222),Q(0.0145,0.252),Q(0.0138,0.274),Q(0.0158,0.279),Q(0.0158,0.29),Q(0,0.29)],W=new QJ({color:"#2d5a26",roughness:0.18,metalness:0.05,envMapIntensity:1.4});J.add(new z0(new q7($,20),W));let Z=new z0(new q7($.slice(1,5).map((X)=>Q(X.x+0.0006,X.y)),20),new QJ({color:"#e8f0e4",roughness:0.9,transparent:!0,opacity:0.22,depthWrite:!1}));J.add(Z);let K=new z0(new pJ(0.0376,0.0376,0.075,24,1,!0),new QJ({map:gO(),roughness:0.6}));K.position.y=0.095,J.add(K);let H=new z0(new pJ(0.0149,0.0152,0.02,16,1,!0),new QJ({color:"#b3262d",roughness:0.5}));H.position.y=0.262,J.add(H);let Y=new z0(new pJ(0.0165,0.0165,0.006,16),new QJ({color:"#c9c4b6",roughness:0.35,metalness:0.7}));return Y.position.y=0.291,J.add(Y),{g:J,alto:0.11,radio:0.037,inclina:1.25,boca:0.18}}function mO(){let J=new IJ,Q=new z0(new pJ(0.034,0.029,0.14,24,1,!0),new QJ({color:"#dfe9ec",roughness:0.08,transparent:!0,opacity:0.28,depthWrite:!1,side:W8}));Q.position.y=0.07,Q.renderOrder=2,J.add(Q);let $=new z0(new pJ(0.029,0.029,0.008,24),new QJ({color:"#dfe9ec",roughness:0.1,transparent:!0,opacity:0.5}));$.position.y=0.004,J.add($);let W=new z0(new pJ(0.0318,0.0285,0.112,24),new QJ({color:"#f2bf86",roughness:0.45}));W.position.y=0.064,J.add(W);for(let[K,H,Y]of[[0.01,0.006,0.4],[-0.009,-0.008,1.1],[0.002,-0.012,2]]){let X=new z0(new gJ(0.016,0.013,0.016),new QJ({color:"#f6f3ec",roughness:0.15,transparent:!0,opacity:0.8}));X.position.set(K,0.121,H),X.rotation.set(Y,Y*0.7,0),J.add(X)}let Z=new z0(new pJ(0.0028,0.0028,0.19,8),new QJ({color:"#c8392e",roughness:0.5}));return Z.position.set(0.012,0.11,0.004),Z.rotation.z=-0.16,J.add(Z),{g:J,alto:0.06,radio:0.034,inclina:0.85,boca:0.09}}function lO(){let J=new IJ,Q=new QJ({color:"#efe9da",roughness:0.22}),$=new z0(new pJ(0.045,0.04,0.008,28),Q);$.position.y=0.004,J.add($);let W=new QJ({color:"#efe9da",roughness:0.22,side:W8}),Z=new z0(new pJ(0.028,0.021,0.048,24,1,!0),W),K=new z0(new F7(0.021,20),Q);K.rotation.x=-Math.PI/2,K.position.y=0.0085,J.add(K),Z.position.y=0.032,J.add(Z);let H=new z0(new F7(0.0262,24),new QJ({color:"#2a160c",roughness:0.15}));H.rotation.x=-Math.PI/2,H.position.y=0.049,J.add(H);let Y=new z0(new O7(0.012,0.0035,6,12,Math.PI*1.3),Q);return Y.position.set(0.03,0.034,0),Y.rotation.z=-Math.PI*0.65,J.add(Y),J.remove($),{g:J,alto:0.03,radio:0.028,inclina:0.9,boca:0.03,plato:$}}function R5(J){let Q=[];for(let $=0;$<4;$++){let W=xO[$],Z=W==="presidente"?pO():W==="morir"?mO():lO(),[K,H,Y]=E9[$],X=G0.tableWidth/2-0.055,U=G0.tableCenterY+G0.tableThickness/2,N=new T(-X,0,G0.seatDistance-X).applyAxisAngle(new T(0,1,0),Y).add(new T(K,0,H));if(N.y=U,Z.g.traverse((E)=>{if(E.isMesh)E.castShadow=!0,E.receiveShadow=!0}),Z.plato)N.y+=0.008;if(Z.g.position.copy(N),J.add(Z.g),Z.plato)Z.plato.position.copy(N),Z.plato.position.y=U+0.004,Z.plato.traverse((E)=>{if(E.isMesh)E.receiveShadow=!0}),J.add(Z.plato);Q.push({group:Z.g,home:N,index:$,tipo:W,alto:Z.alto,radio:Z.radio,inclina:Z.inclina,boca:Z.boca})}return Q}var JQ={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class J9{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var uO=new c9(-1,1,1,-1,0,1);class L5 extends jJ{constructor(){super();this.setAttribute("position",new HJ([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new HJ([0,2,0,0,2,0],2))}}var dO=new L5;class Q6{constructor(J){this._mesh=new z0(dO,J)}dispose(){this._mesh.geometry.dispose()}render(J){J.render(this._mesh,uO)}get material(){return this._mesh.material}set material(J){this._mesh.material=J}}class N$ extends J9{constructor(J,Q="tDiffuse"){super();if(this.textureID=Q,this.uniforms=null,this.material=null,J instanceof nJ)this.uniforms=J.uniforms,this.material=J;else if(J)this.uniforms=m9.clone(J.uniforms),this.material=new nJ({name:J.name!==void 0?J.name:"unspecified",defines:Object.assign({},J.defines),uniforms:this.uniforms,vertexShader:J.vertexShader,fragmentShader:J.fragmentShader});this._fsQuad=new Q6(this.material)}render(J,Q,$){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=$.texture;if(this._fsQuad.material=this.material,this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget(Q),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class nW extends J9{constructor(J,Q){super();this.scene=J,this.camera=Q,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(J,Q,$){let W=J.getContext(),Z=J.state;Z.buffers.color.setMask(!1),Z.buffers.depth.setMask(!1),Z.buffers.color.setLocked(!0),Z.buffers.depth.setLocked(!0);let K,H;if(this.inverse)K=0,H=1;else K=1,H=0;if(Z.buffers.stencil.setTest(!0),Z.buffers.stencil.setOp(W.REPLACE,W.REPLACE,W.REPLACE),Z.buffers.stencil.setFunc(W.ALWAYS,K,4294967295),Z.buffers.stencil.setClear(H),Z.buffers.stencil.setLocked(!0),J.setRenderTarget($),this.clear)J.clear();if(J.render(this.scene,this.camera),J.setRenderTarget(Q),this.clear)J.clear();J.render(this.scene,this.camera),Z.buffers.color.setLocked(!1),Z.buffers.depth.setLocked(!1),Z.buffers.color.setMask(!0),Z.buffers.depth.setMask(!0),Z.buffers.stencil.setLocked(!1),Z.buffers.stencil.setFunc(W.EQUAL,1,4294967295),Z.buffers.stencil.setOp(W.KEEP,W.KEEP,W.KEEP),Z.buffers.stencil.setLocked(!0)}}class PH extends J9{constructor(){super();this.needsSwap=!1}render(J){J.state.buffers.stencil.setLocked(!1),J.state.buffers.stencil.setTest(!1)}}class IH{constructor(J,Q){if(this.renderer=J,this._pixelRatio=J.getPixelRatio(),Q===void 0){let $=J.getSize(new W0);this._width=$.width,this._height=$.height,Q=new eJ(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:E8}),Q.texture.name="EffectComposer.rt1"}else this._width=Q.width,this._height=Q.height;this.renderTarget1=Q,this.renderTarget2=Q.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new N$(JQ),this.copyPass.material.blending=s8,this.timer=new _W}swapBuffers(){let J=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=J}addPass(J){this.passes.push(J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(J,Q){this.passes.splice(Q,0,J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(J){let Q=this.passes.indexOf(J);if(Q!==-1)this.passes.splice(Q,1)}isLastEnabledPass(J){for(let Q=J+1;Q<this.passes.length;Q++)if(this.passes[Q].enabled)return!1;return!0}render(J){if(this.timer.update(),J===void 0)J=this.timer.getDelta();let Q=this.renderer.getRenderTarget(),$=!1;for(let W=0,Z=this.passes.length;W<Z;W++){let K=this.passes[W];if(K.enabled===!1)continue;if(K.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(W),K.render(this.renderer,this.writeBuffer,this.readBuffer,J,$),K.needsSwap){if($){let H=this.renderer.getContext(),Y=this.renderer.state.buffers.stencil;Y.setFunc(H.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,J),Y.setFunc(H.EQUAL,1,4294967295)}this.swapBuffers()}if(nW!==void 0){if(K instanceof nW)$=!0;else if(K instanceof PH)$=!1}}this.renderer.setRenderTarget(Q)}reset(J){if(J===void 0){let Q=this.renderer.getSize(new W0);this._pixelRatio=this.renderer.getPixelRatio(),this._width=Q.width,this._height=Q.height,J=this.renderTarget1.clone(),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=J,this.renderTarget2=J.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(J,Q){this._width=J,this._height=Q;let $=this._width*this._pixelRatio,W=this._height*this._pixelRatio;this.renderTarget1.setSize($,W),this.renderTarget2.setSize($,W);for(let Z=0;Z<this.passes.length;Z++)this.passes[Z].setSize($,W)}setPixelRatio(J){this._pixelRatio=J,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class AH extends J9{constructor(J,Q,$=null,W=null,Z=null){super();this.scene=J,this.camera=Q,this.overrideMaterial=$,this.clearColor=W,this.clearAlpha=Z,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new y0}render(J,Q,$){let W=J.autoClear;J.autoClear=!1;let Z,K;if(this.overrideMaterial!==null)K=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)J.getClearColor(this._oldClearColor),J.setClearColor(this.clearColor,J.getClearAlpha());if(this.clearAlpha!==null)Z=J.getClearAlpha(),J.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)J.clearDepth();if(J.setRenderTarget(this.renderToScreen?null:$),this.clear===!0)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);if(J.render(this.scene,this.camera),this.clearColor!==null)J.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)J.setClearAlpha(Z);if(this.overrideMaterial!==null)this.scene.overrideMaterial=K;J.autoClear=W}}var V5={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new y0(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class $6 extends J9{constructor(J,Q=1,$,W){super();this.strength=Q,this.radius=$,this.threshold=W,this.resolution=J!==void 0?new W0(J.x,J.y):new W0(256,256),this.clearColor=new y0(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let Z=Math.round(this.resolution.x/2),K=Math.round(this.resolution.y/2);this.renderTargetBright=new eJ(Z,K,{type:E8,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let U=0;U<this.nMips;U++){let N=new eJ(Z,K,{type:E8,depthBuffer:!1});N.texture.name="UnrealBloomPass.h"+U,N.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(N);let E=new eJ(Z,K,{type:E8,depthBuffer:!1});E.texture.name="UnrealBloomPass.v"+U,E.texture.generateMipmaps=!1,this.renderTargetsVertical.push(E),Z=Math.round(Z/2),K=Math.round(K/2)}let H=V5;this.highPassUniforms=m9.clone(H.uniforms),this.highPassUniforms.luminosityThreshold.value=W,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new nJ({uniforms:this.highPassUniforms,vertexShader:H.vertexShader,fragmentShader:H.fragmentShader}),this.separableBlurMaterials=[];let Y=[6,10,14,18,22];Z=Math.round(this.resolution.x/2),K=Math.round(this.resolution.y/2);for(let U=0;U<this.nMips;U++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(Y[U])),this.separableBlurMaterials[U].uniforms.invSize.value=new W0(1/Z,1/K),Z=Math.round(Z/2),K=Math.round(K/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=Q,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let X=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=X,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=m9.clone(JQ.uniforms),this.blendMaterial=new nJ({uniforms:this.copyUniforms,vertexShader:JQ.vertexShader,fragmentShader:JQ.fragmentShader,premultipliedAlpha:!0,blending:M9,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new y0,this._oldClearAlpha=1,this._basic=new cJ,this._fsQuad=new Q6(null)}dispose(){for(let J=0;J<this.renderTargetsHorizontal.length;J++)this.renderTargetsHorizontal[J].dispose();for(let J=0;J<this.renderTargetsVertical.length;J++)this.renderTargetsVertical[J].dispose();this.renderTargetBright.dispose();for(let J=0;J<this.separableBlurMaterials.length;J++)this.separableBlurMaterials[J].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(J,Q){let $=Math.round(J/2),W=Math.round(Q/2);this.renderTargetBright.setSize($,W);for(let Z=0;Z<this.nMips;Z++)this.renderTargetsHorizontal[Z].setSize($,W),this.renderTargetsVertical[Z].setSize($,W),this.separableBlurMaterials[Z].uniforms.invSize.value=new W0(1/$,1/W),$=Math.round($/2),W=Math.round(W/2)}render(J,Q,$,W,Z){J.getClearColor(this._oldClearColor),this._oldClearAlpha=J.getClearAlpha();let K=J.autoClear;if(J.autoClear=!1,J.setClearColor(this.clearColor,0),Z)J.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=$.texture,J.setRenderTarget(null),J.clear(),this._fsQuad.render(J);this.highPassUniforms.tDiffuse.value=$.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,J.setRenderTarget(this.renderTargetBright),J.clear(),this._fsQuad.render(J);let H=this.renderTargetBright;for(let Y=0;Y<this.nMips;Y++)this._fsQuad.material=this.separableBlurMaterials[Y],this.separableBlurMaterials[Y].uniforms.colorTexture.value=H.texture,this.separableBlurMaterials[Y].uniforms.direction.value=$6.BlurDirectionX,J.setRenderTarget(this.renderTargetsHorizontal[Y]),J.clear(),this._fsQuad.render(J),this.separableBlurMaterials[Y].uniforms.colorTexture.value=this.renderTargetsHorizontal[Y].texture,this.separableBlurMaterials[Y].uniforms.direction.value=$6.BlurDirectionY,J.setRenderTarget(this.renderTargetsVertical[Y]),J.clear(),this._fsQuad.render(J),H=this.renderTargetsVertical[Y];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,J.setRenderTarget(this.renderTargetsHorizontal[0]),J.clear(),this._fsQuad.render(J),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,Z)J.state.buffers.stencil.setTest(!0);if(this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else J.setRenderTarget($),this._fsQuad.render(J);J.setClearColor(this._oldClearColor,this._oldClearAlpha),J.autoClear=K}_getSeparableBlurMaterial(J){let Q=[],$=J/3;for(let K=0;K<J;K++)Q.push(0.39894*Math.exp(-0.5*K*K/($*$))/$);let W=[],Z=[];for(let K=1;K<J;K+=2){let H=Q[K],Y=K+1<J?Q[K+1]:0,X=H+Y;W.push((K*H+(K+1)*Y)/X),Z.push(X)}return new nJ({defines:{KERNEL_PAIRS:W.length},uniforms:{colorTexture:{value:null},invSize:{value:new W0(0.5,0.5)},direction:{value:new W0(0.5,0.5)},centerWeight:{value:Q[0]},gaussianOffsets:{value:W},gaussianWeights:{value:Z}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(J){return new nJ({defines:{NUM_MIPS:J},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}$6.BlurDirectionX=new W0(1,0);$6.BlurDirectionY=new W0(0,1);var E$={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class _H extends J9{constructor(){super();this.isOutputPass=!0,this.uniforms=m9.clone(E$.uniforms),this.material=new sQ({name:E$.name,uniforms:this.uniforms,vertexShader:E$.vertexShader,fragmentShader:E$.fragmentShader}),this._fsQuad=new Q6(this.material),this._outputColorSpace=null,this._toneMapping=null}render(J,Q,$){if(this.uniforms.tDiffuse.value=$.texture,this.uniforms.toneMappingExposure.value=J.toneMappingExposure,this._outputColorSpace!==J.outputColorSpace||this._toneMapping!==J.toneMapping){if(this._outputColorSpace=J.outputColorSpace,this._toneMapping=J.toneMapping,this.material.defines={},ZJ.getTransfer(this._outputColorSpace)===SJ)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===IQ)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===AQ)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===_Q)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===v7)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===wQ)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===SQ)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===TQ)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget(Q),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var M8=(()=>{let J=7;return()=>{return J=Math.imul(J,1664525)+1013904223>>>0,J/4294967296}})();function TH(J,Q=256,$=256){let W=document.createElement("canvas");W.width=Q,W.height=$,J(W.getContext("2d"),Q,$);let Z=new E7(W);return Z.colorSpace=B8,Z}function D5(J="255,214,150"){return TH((Q,$,W)=>{let Z=Q.createRadialGradient($/2,W/2,0,$/2,W/2,$/2);Z.addColorStop(0,`rgba(${J},1)`),Z.addColorStop(0.18,`rgba(${J},.55)`),Z.addColorStop(0.5,`rgba(${J},.12)`),Z.addColorStop(1,`rgba(${J},0)`),Q.fillStyle=Z,Q.fillRect(0,0,$,W)})}function cO(J){let Q=new IJ,$=new z0(new A8(80,32,16),new nJ({side:L8,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP;
   void main(){float h=vP.y;
    vec3 zen=vec3(.004,.008,.022),hor=vec3(.035,.05,.075),ciudad=vec3(.16,.075,.035);
    vec3 c=mix(hor,zen,smoothstep(0.,.5,h));
    c+=ciudad*pow(max(0.,1.-max(h,0.)*7.),3.)*.9;
    if(h<0.)c=hor*.5;
    gl_FragColor=vec4(c,1.);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
   }`}));$.renderOrder=-10,Q.add($);let W=900,Z=new Float32Array(W*3),K=new Float32Array(W*3);for(let U=0;U<W;U++){let N=M8(),E=M8()*Math.PI*2,G=0.12+N*0.88,F=Math.sqrt(1-G*G),q=0.3+0.7*M8()*G;Z.set([Math.cos(E)*F*75,G*75,Math.sin(E)*F*75],U*3),K.set([q*0.85,q*0.9,q],U*3)}let H=new jJ;H.setAttribute("position",new oJ(Z,3)),H.setAttribute("color",new oJ(K,3)),Q.add(new u6(H,new u7({size:1.6,sizeAttenuation:!1,vertexColors:!0,fog:!1,depthWrite:!1,transparent:!0,opacity:0.85})));let Y=new z0(new F7(1.6,32),new cJ({color:"#f3ecd2",fog:!1}));Y.position.set(-22,24,52),Y.lookAt(0,1,0),Q.add(Y);let X=new m6(new l7({map:D5("210,220,255"),fog:!1,transparent:!0,opacity:0.35,depthWrite:!1,blending:M9}));return X.scale.setScalar(14),X.position.copy(Y.position),Q.add(X),J.add(Q),Q}function nO(J){let Q=new Map,$=(E,G=0,F=0)=>{let q=E+G+F;if(!Q.has(q))Q.set(q,{m:new QJ({color:G?E:new y0(E).multiplyScalar(0.5),roughness:0.9,emissive:G||"#000",emissiveIntensity:F}),g:[]});return Q.get(q)},W=(E,G,F,q,V,R=0)=>{E.rotateY(R),E.translate(F,q,V),G.g.push(E)},Z=["#b8654a","#c9a14f","#4f8a84","#a8566b","#7f9a57","#c47f45","#5f7ea0"],K=-20;while(K<20){let E=3.4+M8()*2.6,G=3+M8()*2.8,F=10.5+M8()*0.8,q=Z[Math.floor(M8()*Z.length)];W(new gJ(E,G,2.4),$(q),K+E/2,G/2,F+1.2),W(new gJ(E+0.12,0.18,2.6),$("#d9d2bf"),K+E/2,G+0.09,F+1.2);let V=Math.max(1,Math.floor(E/1.5));for(let R=0;R<V;R++){let O=K+(R+0.5)*E/V,z=M8()<0.62,D=M8()<0.22,L=z?$(D?"#9fc3ff":"#ffd08a",D?"#6f9cff":"#ffb35a",D?2.4:3.2):$("#1e2a2e");if(W(new H8(0.75,0.95),L,O,1.55,F-0.005,Math.PI),G>4.2)W(new H8(0.7,0.8),M8()<0.5?$("#ffd08a","#ffb35a",1.8):$("#1e2a2e"),O,G-1.1,F-0.005,Math.PI);W(new gJ(0.9,0.06,0.12),$("#2c3432"),O,2.08,F-0.06)}for(let R=0;R<Math.floor(E/0.22);R++)W(new gJ(0.018,0.9,0.018),$("#1b2224"),K+0.11+R*0.22,0.45,F-0.55);W(new gJ(E,0.04,0.04),$("#1b2224"),K+E/2,0.9,F-0.55),K+=E+0.15}W(new gJ(44,0.16,1.8),$("#8a8578"),0,0.08,9.6);let H=[-14,-4,6,16];for(let E of H)W(new pJ(0.09,0.12,7,8),$("#6b6457"),E,3.5,9.2),W(new gJ(1.6,0.08,0.08),$("#4f4a40"),E,6.6,9.2);for(let E=0;E<H.length-1;E++)for(let G of[0,-0.25,0.3]){let F=new T(H[E],6.6+G,9.2),q=new T(H[E+1],6.6+G,9.2),V=F.clone().lerp(q,0.5);V.y-=0.55,W(new p9(new g9(F,V,q),16,0.012,4),$("#101517"),0,0,0)}for(let[E,G,F]of[[-9,12.8,7.5],[11,13.1,8.4],[2.5,13.4,6.4]]){let q=new dQ([new T(E,0,G),new T(E+0.3,F*0.5,G),new T(E+0.8,F,G-0.2)]);W(new p9(q,12,0.16,6),$("#5d5445"),0,0,0);for(let V=0;V<9;V++){let R=V/9*Math.PI*2,O=new lQ(0.28,2.6,4,1);O.rotateZ(Math.PI/2+0.55),O.translate(1.3,0,0),O.rotateY(R),W(O,$("#233428"),E+0.8,F,G-0.2)}}let Y=[];for(let{m:E,g:G}of Q.values()){let F=fW(G,!1);if(G.forEach((V)=>V.dispose()),!F)continue;let q=new z0(F,E);q.receiveShadow=!0,J.add(q),Y.push(q)}let X=new d9("#ff9d4d",9,14,1.8);X.position.set(6,5.9,8.6),J.add(X);let U=new z0(new A8(0.14,12,8),new QJ({color:"#ffcf94",emissive:"#ff9a45",emissiveIntensity:5}));U.position.copy(X.position),J.add(U);let N=new z0(new pJ(0.03,0.03,1.3,6),new QJ({color:"#4f4a40"}));return N.rotation.z=Math.PI/2,N.position.set(6,6.05,8.9),J.add(N),{merged:Y,farol:X}}function sO(J,Q){let $=new IJ;$.position.copy(Q),J.add($);let W=new z0(new A8(0.038,16,12),new QJ({color:"#fff4d6",emissive:"#ffd08a",emissiveIntensity:9}));W.scale.y=1.25,$.add(W);let Z=new z0(new pJ(0.018,0.02,0.05,10),new QJ({color:"#2b2a26",roughness:0.6}));Z.position.y=0.065,$.add(Z);let K=new z0(new pJ(0.004,0.004,1.1,5),new QJ({color:"#15181a"}));K.position.y=0.64,$.add(K);let H=new m6(new l7({map:D5(),transparent:!0,opacity:0.55,depthWrite:!1,blending:M9}));H.scale.setScalar(0.75),$.add(H);let Y=[],X=new l7({color:"#3b3026",transparent:!0,opacity:0.85,depthWrite:!1});for(let U=0;U<6;U++){let N=new m6(X);N.scale.setScalar(0.012+M8()*0.008),$.add(N),Y.push({s:N,r:0.07+M8()*0.12,w:2+M8()*4,f:M8()*6,y:0.05+M8()*0.08,k:1.3+M8()})}return{g:$,halo:H,polillas:Y}}function iO(){let J=new g6;J.add(new z0(new A8(10,24,12),new nJ({side:L8,vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;void main(){gl_FragColor=vec4(mix(vec3(.07,.1,.13),vec3(.012,.02,.04),smoothstep(-.1,.6,vP.y)),1.);}"})));let Q=($,W,Z,K,H,Y)=>{let X=new z0(new H8(Z,K),new cJ({color:new y0($).multiplyScalar(W),side:W8}));X.position.set(...H),X.lookAt(...Y),J.add(X)};return Q("#ffcf94",8,1.2,1.2,[0,6,0],[0,0,0]),Q("#bfe3d6",2,5,2,[0,2.5,-8],[0,1,0]),Q("#ff9a3c",0.6,18,0.8,[0,0.6,9],[0,1,0]),J}function B5({scene:J,renderer:Q,camera:$,controls:W,software:Z,bulbLight:K}){function H(){let c=new $$(Q),x=iO(),K0=c.fromScene(x,0.02);J.environment?.dispose?.(),J.environment=K0.texture,J.environmentIntensity=0.6,c.dispose(),x.traverse((n)=>{n.geometry?.dispose(),n.material?.dispose()})}H(),J.background=new y0("#05080f"),J.fog=new m7("#0b1419",0.035);let Y=cO(J),X=nO(J),U=new T(0,G0.surfaceY+1.3,0),N=sO(J,U),E=TH((c,x,K0)=>{let n=c.createRadialGradient(x/2,K0*0.62,0,x/2,K0*0.62,x/2);n.addColorStop(0,"rgba(255,196,110,.95)"),n.addColorStop(0.45,"rgba(255,170,80,.35)"),n.addColorStop(1,"rgba(255,150,60,0)"),c.fillStyle=n,c.fillRect(0,0,x,K0)},256,128),G=new z0(new H8(0.62,0.26),new cJ({map:E,transparent:!0,opacity:0,depthWrite:!1,blending:M9,toneMapped:!1}));G.rotation.x=-Math.PI/2,G.position.y=G0.surfaceY+0.0012,G.renderOrder=3,J.add(G);let F={i:-1,ang:0,alfa:0,objetivo:0,pos:new T},q=(c)=>TH((x,K0,n)=>{x.strokeStyle=`rgba(${c},1)`,x.lineWidth=K0*0.09,x.beginPath(),x.arc(K0/2,n/2,K0*0.36,0,Math.PI*2),x.stroke();let $0=x.createRadialGradient(K0/2,n/2,0,K0/2,n/2,K0/2);$0.addColorStop(0,`rgba(${c},.5)`),$0.addColorStop(1,`rgba(${c},0)`),x.fillStyle=$0,x.fillRect(0,0,K0,n)},128,128),V=["255,181,71","45,225,194"].map((c)=>{let x=new z0(new H8(0.036,0.036),new cJ({map:q(c),transparent:!0,opacity:0,depthWrite:!1,blending:M9,toneMapped:!1}));return x.rotation.x=-Math.PI/2,x.position.y=G0.surfaceY+0.0015,x.renderOrder=3,J.add(x),x}),R=null,O=$.clone(),z=new T,D=new T,L=null,M=null,I=null,w=!1;function B(){if(L)return;let c=Q.getDrawingBufferSize(new W0),x=new eJ(c.x,c.y,{type:E8,samples:4});L=new IH(Q,x),L.addPass(new AH(J,O)),M=new $6(new W0(c.x/2,c.y/2),0.4,0.5,2),L.addPass(M),I=new N$({uniforms:{tDiffuse:{value:null},uTiempo:{value:0},uVineta:{value:0.34},uGrano:{value:0.018}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform float uTiempo,uVineta,uGrano;varying vec2 vUv;
    float azar(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+uTiempo*43.7)*43758.5453);}
    void main(){vec4 c=texture2D(tDiffuse,vUv);
     vec2 q=vUv-.5;float v=1.-uVineta*smoothstep(.25,.85,length(q*vec2(1.15,1.)));
     c.rgb*=v;
     // Sombras un pelín más frías y luces más cálidas: noche con bombillo.
     float l=dot(c.rgb,vec3(.2126,.7152,.0722));
     c.rgb*=mix(vec3(.93,.97,1.05),vec3(1.04,1.,.94),smoothstep(.02,.4,l));
     c.rgb+=(azar(vUv*vec2(1920.,1080.))-.5)*uGrano*(.4+l);
     gl_FragColor=c;}`}),L.addPass(I),L.addPass(new _H)}function A(c){if(w=!Z&&c!=="low",w)B();N.halo.visible=!0}function d(c,x){if(L)L.setPixelRatio(Q.getPixelRatio()),L.setSize(c,x);O.aspect=$.aspect,O.updateProjectionMatrix()}let y=K?K.position.clone():null,b=new T;function J0(c,x,{reduced:K0,view:n,ends:$0,temblor:U0=0}){if(O.copy($),!K0){if(z.set(Math.sin(c*0.11)*0.012+Math.sin(c*0.037)*0.008,Math.sin(c*0.083+1)*0.007,Math.cos(c*0.097)*0.01),U0)z.add(D.set(Math.sin(c*97)*U0,Math.sin(c*113)*U0*0.6,Math.cos(c*89)*U0));O.position.add(z),D.copy(W.target).addScaledVector(z,0.35),O.lookAt(D)}if(!K0){let I0=0.012*Math.sin(c*2.86),i0=0.008*Math.sin(c*2.3+1.3);if(b.set(Math.sin(I0)*1.1,0,Math.sin(i0)*1.1),N.g.position.copy(U).add(b),N.g.rotation.set(i0,0,-I0),K)K.position.copy(y).add(b)}if(O.updateMatrixWorld(),N.halo.material.opacity=0.5+0.05*Math.sin(c*23)*Math.sin(c*1.7)+(K0?0:0.03*Math.sin(c*3.1)),!K0)for(let I0 of N.polillas){let i0=c*I0.w+I0.f;I0.s.position.set(Math.cos(i0)*I0.r,I0.y+Math.sin(i0*I0.k)*0.05,Math.sin(i0*1.3)*I0.r)}let u0=n?.phase==="playing";if(u0&&n.turn!=null){let[I0,i0,s0]=E9[n.turn],o=G0.boardLimit+0.075;if(F.i!==n.turn)F.i=n.turn,F.destino=new T(I0*o/G0.seatDistance,0,i0*o/G0.seatDistance),F.angDestino=s0;F.pos.lerp(F.destino,1-Math.exp(-x*6));let E0=F.angDestino-F.ang;E0=Math.atan2(Math.sin(E0),Math.cos(E0)),F.ang+=E0*(1-Math.exp(-x*6)),F.objetivo=0.8+(K0?0:0.12*Math.sin(c*2.2))}else F.objetivo=0;F.alfa+=(F.objetivo-F.alfa)*(1-Math.exp(-x*4)),G.material.opacity=F.alfa,G.visible=F.alfa>0.01,G.position.set(F.pos.x,G0.surfaceY+0.0012,F.pos.z),G.rotation.set(-Math.PI/2,0,F.ang);for(let I0=0;I0<2;I0++){let i0=V[I0],s0=u0&&$0?$0[I0]:null;if(!s0){i0.material.opacity=Math.max(0,i0.material.opacity-x*3),i0.visible=i0.material.opacity>0.01;continue}i0.visible=!0,i0.position.set(s0.x,G0.surfaceY+0.0015,s0.z);let o=K0?1:1+0.12*Math.sin(c*3.4+I0*1.3);i0.scale.setScalar(o),i0.material.opacity=Math.min(0.9,i0.material.opacity+x*3)}if(I)I.uniforms.uTiempo.value=c%100}function S(){if(w&&L)L.render();else Q.render(J,O)}function i(){L?.dispose()}return{vista:O,frame:J0,render:S,resize:d,calidad:A,dispose:i,bulbPos:U,entorno:H}}var W6=Math.PI*2,a0=(J=0,Q=0,$=0)=>new T(J,Q,$),oO=[[],[4],[0,8],[0,4,8],[0,2,6,8],[0,2,4,6,8],[0,2,3,5,6,8]];async function sD(J,{onProgress:Q=()=>{}}={}){let $=new g6;$.background=new y0("#132931"),$.fog=new m7("#132931",0.024);let W=new K8(42,innerWidth/innerHeight,0.08,90);W.position.set(3.1,2.65,4.2);let Z;try{Z=new $H({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{throw Error("This device could not start WebGL. Try a recent desktop browser.")}let K=!new URLSearchParams(location.search).has("hq")&&/SwiftShader|llvmpipe|Software/i.test((()=>{let _=Z.getContext(),m=_.getExtension("WEBGL_debug_renderer_info");return m?_.getParameter(m.UNMASKED_RENDERER_WEBGL):""})());Z.setSize(innerWidth,innerHeight),Z.setPixelRatio(K?0.65:Math.min(devicePixelRatio,1.5,1920/innerWidth)),Z.outputColorSpace=B8,Z.toneMapping=v7,Z.toneMappingExposure=1.24,Z.shadowMap.enabled=!K,Z.shadowMap.type=y7,Z.info.autoReset=!1,J.appendChild(Z.domElement);let H=new qH(W,Z.domElement);H.target.set(0,0.8,-0.15),H.enableDamping=!0,H.dampingFactor=0.065,H.enablePan=!1,H.minDistance=0.8,H.maxDistance=8,H.minPolarAngle=0.25,H.maxPolarAngle=Math.PI*0.48,H.update(),$.add(new PW("#9fb3cc","#3a2c22",0.3));let Y=new n6("#7f9cc8",0.18);Y.position.set(-5,9,5),$.add(Y);let X=new c6("#ffc98a",5.2,7,Math.PI*0.32,0.6,2);X.position.set(0,G0.surfaceY+1.26,0),X.target.position.set(0,0,0);{let _=new d9("#ffc07a",0.45,3.2,2);_.position.set(0,G0.surfaceY+1.2,0),$.add(_)}X.castShadow=!0,X.shadow.mapSize.set(K?1024:2048,K?1024:2048),X.shadow.focus=0.52,X.shadow.bias=-0.0002,X.shadow.normalBias=0.004,X.shadow.radius=3,X.shadow.camera.near=0.2,X.shadow.camera.far=4,$.add(X,X.target);let U=new d9("#cfeee0",13,9,2);U.position.set(0,2.5,-3.5),$.add(U);{let _=new z0(new gJ(1.2,0.03,0.03),new QJ({color:"#e6fff4",emissive:"#e6fff4",emissiveIntensity:4}));_.position.set(0,3.12,-3.6),$.add(_)}let N=new Map,E=new Map;function G(_,m=0.85,r=0){let u=_+","+m+","+r;if(!N.has(u))N.set(u,new QJ({color:_,roughness:m,metalness:r}));return N.get(u)}function F(_,m,r,u=[0,0,0],H0=[1,1,1]){let Q0=m.uuid;if(!E.has(Q0))E.set(Q0,{material:m,geos:[]});let O0=new n0().compose(a0(...r),new qJ().setFromEuler(new Y9(...u)),a0(...H0));_.applyMatrix4(O0),E.get(Q0).geos.push(_)}function q(_,m,r,u,H0,Q0,O0,_0=0){F(new gJ(u,H0,Q0),typeof O0==="string"?G(O0):O0,[_,m,r],[0,_0,0])}function V(_,m,r,u,H0,Q0,O0,_0=10,v0=[0,0,0]){F(new pJ(u,H0,Q0,_0),typeof O0==="string"?G(O0):O0,[_,m,r],v0)}function R(_,m=512,r=512){let u=document.createElement("canvas");u.width=m,u.height=r,_(u.getContext("2d"),m,r);let H0=new E7(u);return H0.colorSpace=B8,H0.anisotropy=Math.min(8,Z.capabilities.getMaxAnisotropy()),H0}let O=191,z=()=>{return O=Math.imul(O,1664525)+1013904223>>>0,O/4294967296},D=R((_,m,r)=>{_.fillStyle="#65432b",_.fillRect(0,0,m,r);for(let u=0;u<700;u++){_.strokeStyle=`rgba(${z()>0.5?"170,122,70":"35,22,14"},${0.08+z()*0.2})`,_.lineWidth=0.3+z()*2,_.beginPath();let H0=z()*r;_.moveTo(0,H0);for(let Q0=0;Q0<m;Q0+=20)_.lineTo(Q0,H0+Math.sin(Q0*0.013+u)*3);_.stroke()}}),L=new QJ({map:D,roughness:0.65,color:"#e7bc8c"}),M=G("#4c3022",0.75),I=G("#287770"),w=G("#d2c5a2"),B=G("#a65443"),A=R((_,m,r)=>{let u=m/2;for(let v0=0;v0<2;v0++)for(let Z0=0;Z0<2;Z0++){let A0=Z0*u,$J=v0*u;_.save(),_.beginPath(),_.rect(A0,$J,u,u),_.clip(),_.fillStyle="#c4b99f",_.fillRect(A0,$J,u,u);for(let[NJ,z8]of[[A0,$J],[A0+u,$J],[A0,$J+u],[A0+u,$J+u]])_.strokeStyle="#8d6450",_.lineWidth=u*0.04,_.beginPath(),_.arc(NJ,z8,u*0.42,0,Math.PI*2),_.stroke(),_.fillStyle="#4f6763",_.beginPath(),_.arc(NJ,z8,u*0.13,0,Math.PI*2),_.fill(),_.strokeStyle="#c4b99f",_.lineWidth=u*0.02,_.beginPath(),_.arc(NJ,z8,u*0.11,0,Math.PI*2),_.stroke();let d0=A0+u/2,GJ=$J+u/2,PJ=(NJ,z8)=>{_.fillStyle=z8,_.beginPath(),_.moveTo(d0,GJ-NJ),_.lineTo(d0+NJ,GJ),_.lineTo(d0,GJ+NJ),_.lineTo(d0-NJ,GJ),_.closePath(),_.fill()};PJ(u*0.2,"#8d6450"),PJ(u*0.13,"#c4b99f"),PJ(u*0.07,"#3a3630"),_.restore(),_.strokeStyle="#7e7563",_.lineWidth=3,_.strokeRect(A0+1.5,$J+1.5,u-3,u-3)}for(let v0=0;v0<9000;v0++)_.fillStyle=z()>0.5?"rgba(235,228,205,.07)":"rgba(30,28,24,.09)",_.fillRect(z()*m,z()*r,1+z()*2,1+z()*2);for(let v0=0;v0<40;v0++){let Z0=_.createRadialGradient(0,0,0,0,0,1),A0=z()*m,$J=z()*r,d0=20+z()*90;_.save(),_.translate(A0,$J),_.scale(d0,d0),Z0.addColorStop(0,"rgba(40,34,26,.10)"),Z0.addColorStop(1,"rgba(40,34,26,0)"),_.fillStyle=Z0,_.fillRect(-1,-1,2,2),_.restore()}},1024,1024);A.wrapS=A.wrapT=Y7,A.repeat.set(35.55555555555556,27.77777777777778),q(0,-0.1,-4.575,32,0.2,15.85,new QJ({map:A,roughness:0.86,color:"#9d937f"})),q(0,-0.2,8.5,40,0.1,10.3,"#2b3133"),q(0,-0.075,3.45,40,0.15,0.2,"#a8a391");for(let _=-10;_<11;_++)q(_*1.8,-0.146,6.3,0.7,0.008,0.06,"#b9ad83");q(0,1.6,-5.1,7.5,3.4,0.2,I),q(-3.8,1.6,-3.85,0.2,3.4,2.7,I),q(3.8,1.6,-3.85,0.2,3.4,2.7,I),q(-3.48,1.1,-2.52,0.7,2.3,0.32,I),q(3.45,1.1,-2.52,0.8,2.3,0.32,I),q(0,2.95,-2.52,7.5,0.42,0.35,B),q(0,3.24,-3.7,8,0.12,4.4,"#435451");for(let _=0;_<30;_++)q(-4+_*0.276,3.15,-3.7,0.028,0.055,4.6,"#82928a");q(0,0.7,-4.24,3.9,1.4,0.62,L),q(0,1.43,-4.2,4.08,0.1,0.78,L);for(let _=0;_<3;_++)q(-0.6,1.58+_*0.48,-4.78,5.8,0.065,0.38,L),q(-0.6,1.84+_*0.48,-4.98,5.8,0.48,0.065,"#443e30");q(2.95,1.02,-4.55,1.02,2.1,0.8,"#d0ceb8"),q(2.95,1.12,-4.11,0.84,1.55,0.035,"#254c51");for(let _=0;_<3;_++)q(2.95,0.59+_*0.51,-4.05,0.8,0.025,0.05,"#b3c5bc");let d=[];for(let _=0;_<87;_++){let m=Math.floor(_/29),r=_%29;d.push({pos:[-3.18+r*0.182,1.615+m*0.48,-4.69],scale:0.7+_%5*0.07,color:["#566641","#a27735","#293f37","#6b3126"][_%4]})}let y=new q7([new W0(0,0),new W0(0.036,0),new W0(0.043,0.025),new W0(0.043,0.17),new W0(0.019,0.205),new W0(0.017,0.285),new W0(0.021,0.29),new W0(0.021,0.305),new W0(0,0.31)],12);d.forEach((_)=>F(y.clone(),G(_.color,0.3),_.pos,[0,0,0],[_.scale,_.scale,_.scale]));for(let[_,m,r]of[[-3.1,-1.9,"#a15340"],[3.1,-2,"#9d6540"],[-2.55,-1.95,"#5f6e39"]])for(let u=0;u<3;u++){q(_,0.19+u*0.34,m,0.52,0.3,0.4,r);for(let H0=0;H0<5;H0++)q(_-0.2+H0*0.1,0.18+u*0.34,m+0.204,0.055,0.16,0.015,"#2c3025")}for(let _=0;_<5;_++){let m=-7-_*3.5;q(m,1.5,-3,3.1,3,3.2,_%2?"#b3694f":"#4c8174"),q(m,2.2,-1.38,1,0.8,0.045,"#b59961"),q(m,2.2,-1.35,0.045,0.86,0.055,"#273e37"),q(m,0.98,-1.38,0.9,1.9,0.04,"#354e49")}for(let _=0;_<4;_++)V(-5-_*5,2.3,-1,0.08,0.09,4.6,"#665443"),q(-5-_*5,4.2,-1,1.8,0.09,0.09,"#514b3d");function b(_,m,r,u="#202d28"){let H0=new g9(a0(..._),a0(...r),a0(...m));F(new p9(H0,20,0.008,4,!1),G(u),[0,0,0])}let J0=[];for(let _ of[-1.95,1.95])V(_,1.45,2.55,0.035,0.045,2.9,"#5b4a38",8);for(let[_,m,r]of[[[-2.7,2.9,-2.45],[-1.95,2.85,2.55],0.5],[[2.7,2.9,-2.45],[1.95,2.85,2.55],0.5],[[-1.95,2.85,2.55],[1.95,2.85,2.55],0.32]]){let u=a0(..._),H0=a0(...m),Q0=u.clone().lerp(H0,0.5);Q0.y-=r*2;let O0=new g9(u,Q0,H0);F(new p9(O0,24,0.006,4,!1),G("#1c2320"),[0,0,0]);let _0=Math.round(u.distanceTo(H0)/0.42);for(let v0=1;v0<_0;v0++){let Z0=O0.getPointAt(v0/_0);J0.push(Z0.setY(Z0.y-0.035))}}{let _=new A8(0.022,10,8);_.scale(1,1.3,1);let m=["#ffd89a","#ffb56b","#ff8f7a","#9fe0c9","#ffe38a"],r=new N7(_,new cJ({color:new y0(4.5,4.5,4.5)}),J0.length),u=new zJ;J0.forEach((H0,Q0)=>{u.position.copy(H0),u.updateMatrix(),r.setMatrixAt(Q0,u.matrix),r.setColorAt(Q0,new y0(m[Q0%m.length]))}),$.add(r)}b([0,3.22,-1.6],[0,3.19,0],[0,3.02,-0.8]);let S=new IJ;S.position.set(4.8,0,-2.8),$.add(S);let i=new z0(new pJ(0.1,0.15,4.5,9),G("#696047"));i.position.y=2.25,S.add(i);for(let _=0;_<9;_++){let m=new z0(new A8(1,10,5),G(_%2?"#4a654c":"#344e3d"));m.scale.set(0.27,0.075,1.5),m.position.set(Math.sin(_*W6/9)*0.72,4.35,Math.cos(_*W6/9)*0.72),m.rotation.set(0.23,_*W6/9,0),S.add(m)}let c=new F8({map:D,color:"#d9a877",roughness:0.5,clearcoat:0.55,clearcoatRoughness:0.28}),x=new z0(new M7(G0.tableWidth,G0.tableThickness,G0.tableWidth,3,0.035),c);x.position.y=G0.tableCenterY,x.castShadow=!0,x.receiveShadow=!0,$.add(x);let K0=R((_,m,r)=>{_.fillStyle="#2f5b47",_.fillRect(0,0,m,r);for(let H0=0;H0<r;H0+=2)for(let Q0=0;Q0<m;Q0+=2){let O0=(z()-0.5)*14,_0=((Q0>>1)+(H0>>1))%2?4:-4;_.fillStyle=`rgb(${47+O0+_0},${91+O0+_0},${71+O0+_0})`,_.fillRect(Q0,H0,2,2)}for(let H0=0;H0<4;H0++){let Q0=H0*Math.PI/2,O0=m/2+Math.sin(Q0)*m*0.36,_0=r/2+Math.cos(Q0)*r*0.36,v0=_.createRadialGradient(O0,_0,0,O0,_0,m*0.2);v0.addColorStop(0,"rgba(120,150,120,.16)"),v0.addColorStop(1,"rgba(120,150,120,0)"),_.fillStyle=v0,_.fillRect(0,0,m,r)}let u=_.createRadialGradient(m/2,r/2,m*0.1,m/2,r/2,m*0.62);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(1,"rgba(0,0,0,.28)"),_.fillStyle=u,_.fillRect(0,0,m,r)},512,512),n=new z0(new M7(G0.feltWidth,0.012,G0.feltWidth,2,0.02),new F8({map:K0,roughness:0.97,sheen:0.8,sheenRoughness:0.55,sheenColor:new y0("#9fc7a8")}));n.position.y=G0.feltCenterY,n.receiveShadow=!0,$.add(n);let $0=G0.tableWidth/2-0.07;for(let _ of[-$0,$0])for(let m of[-$0,$0])q(_,0.35,m,0.075,0.68,0.075,M);let U0=["#b8412f","#2f67a6"];for(let _=0;_<4;_++){let[m,r,u]=E9[_],H0=G0.feltWidth/2-0.012,Q0=new z0(new H8(G0.feltWidth*0.72,0.009),new QJ({color:U0[_%2],roughness:0.9}));Q0.rotation.set(-Math.PI/2,0,u),Q0.position.set(m*H0/G0.seatDistance,G0.surfaceY+0.0006,r*H0/G0.seatDistance),Q0.receiveShadow=!0,$.add(Q0)}let u0=new QJ({roughness:0.92,map:R((_,m,r)=>{_.fillStyle="#8f7446",_.fillRect(0,0,m,r);let u=12,H0=m/u;for(let Q0=0;Q0<u;Q0++)for(let O0=0;O0<u;O0++){let _0=(O0+Q0)%2===0;for(let v0=0;v0<3;v0++){let Z0=150+z()*45|0;_.fillStyle=`rgb(${Z0+30},${Z0+8},${Z0-45})`;let A0=v0*H0/3+H0*0.04,$J=H0/3-H0*0.08;if(_0)_.fillRect(O0*H0+1,Q0*H0+A0,H0-2,$J);else _.fillRect(O0*H0+A0,Q0*H0+1,$J,H0-2)}}_.fillStyle="rgba(40,28,14,.18)";for(let Q0=0;Q0<=u;Q0++)_.fillRect(Q0*H0-1,0,2,r),_.fillRect(0,Q0*H0-1,m,2)},256,256)});for(let _=0;_<4;_++){let[m,r,u]=E9[_],H0=new IJ;H0.position.set(m,0,r),H0.rotation.y=u,$.add(H0);let Q0=G(_%2?"#2f5f94":"#a63d2d",0.62),O0=(_0,v0,Z0,A0,$J,d0,GJ=Q0,PJ=0.008)=>{let NJ=a0(A0,$J,d0).applyAxisAngle(a0(0,1,0),u).add(a0(m,0,r));F(new M7(_0,v0,Z0,2,PJ),GJ,NJ.toArray(),[0,u,0])};O0(G0.chairSeatWidth-0.04,0.035,0.5,0,G0.chairSeatY,0,u0,0.01);for(let _0 of[-1,1])O0(0.04,0.05,0.54,_0*(G0.chairSeatWidth/2-0.02),G0.chairSeatY-0.005,0);for(let _0 of[-1,1])O0(G0.chairSeatWidth,0.05,0.04,0,G0.chairSeatY-0.005,_0*0.25);for(let _0 of[-0.24,0.24])for(let v0 of[-0.21,0.21])O0(0.04,G0.chairSeatY,0.04,_0,G0.chairSeatY/2,v0);for(let _0 of[-0.24,0.24])O0(0.024,0.024,0.42,_0,0.15,0);O0(0.48,0.024,0.024,0,0.15,0.21);for(let _0 of[-0.24,0.24])O0(0.04,0.52,0.04,_0,G0.chairSeatY+0.26,-0.23);for(let _0 of[0.2,0.33,0.46])O0(0.46,_0===0.46?0.07:0.045,0.022,0,G0.chairSeatY+_0,-0.23)}function I0(_,m,r,u,H0,Q0=60){let O0=R((_0,v0,Z0)=>{_0.fillStyle=u,_0.fillRect(0,0,v0,Z0),_0.fillStyle=H0,_0.textAlign="center",_0.textBaseline="middle",_0.font=`bold ${Q0}px Georgia`,_0.fillText(_,v0/2,Z0/2)},1024,256);return new z0(new H8(m,r),new cJ({map:O0}))}let i0=I0("COLMADO  LA ESQUINA",4.8,0.38,"#a05d42","#f8e8b9",64);i0.position.set(0,2.94,-2.33),$.add(i0);let s0=I0("MESA",0.11,0.029,"#284e3e","#81906b",77);s0.material=new QJ({map:s0.material.map,roughness:1}),s0.rotation.x=-Math.PI/2,s0.position.set(0,G0.surfaceY+0.001,0.3),$.add(s0);let o=new IJ;o.position.set(0,2.62,-2.2),o.rotation.x=-Math.PI/2,$.add(o),V(0,2.9,-2.2,0.015,0.015,0.56,"#777a68",8),V(0,3.18,-2.2,0.075,0.075,0.025,"#767763",12);let E0=new z0(new A8(0.075,12,8),G("#41493d"));o.add(E0);for(let _=0;_<5;_++){let m=new z0(new gJ(0.13,0.5,0.025),G("#85856e",0.88,0.05));m.position.set(Math.sin(_*W6/5)*0.285,Math.cos(_*W6/5)*0.285,0),m.rotation.z=-_*W6/5,o.add(m)}let q0=new IJ;q0.position.set(-12,0.05,5.2),$.add(q0);for(let _ of[-0.36,0.36]){let m=new z0(new O7(0.19,0.038,7,14),G("#182221"));m.position.set(_,0.2,0),q0.add(m)}let l0=new z0(new M7(0.65,0.17,0.2,2,0.04),G("#823e2f",0.45,0.25));l0.position.y=0.49,q0.add(l0);let c0=new z0(new gJ(0.35,0.06,0.22),G("#202725"));c0.position.set(-0.08,0.61,0),q0.add(c0);let p0=new z0(new pJ(0.015,0.015,0.45,6),G("#8c9c96",0.4,0.5));p0.position.set(0.32,0.59,0),p0.rotation.z=-0.3,q0.add(p0);let aJ=O5({scene:$,texture:R,mat:G,box:q,cylinder:V,random:z,teal:I,wood:L,storeSign:i0});for(let{material:_,geos:m}of E.values()){let r=fW(m,!1);if(r){let u=new z0(r,_);u.receiveShadow=!0,r.computeBoundingBox(),u.castShadow=r.boundingBox.distanceToPoint(a0(0,0.8,0))<1.6&&r.boundingBox.getSize(a0()).length()<8,$.add(u)}m.forEach((u)=>u.dispose())}let e0=new IJ,KJ=new IJ;$.add(e0,KJ);let DJ=new M7(G0.tileLength,G0.tileThickness,G0.tileWidth,3,0.0024),FJ=new F8({color:"#f4eee0",roughness:0.36,clearcoat:0.85,clearcoatRoughness:0.22}),rJ=new F8({color:"#e2dac6",roughness:0.42,clearcoat:0.7,clearcoatRoughness:0.3}),vJ=new QJ({color:"#b98b3e",roughness:0.28,metalness:1}),q8=new pJ(0.0019,0.0019,0.0009,12),sJ=new QJ({color:"#0b0a09",roughness:0.55}),iJ=new QJ({color:"#2a2622",roughness:0.6}),v=new pJ(G0.pipRadius,G0.pipRadius,0.0007,14),O8=new gJ(0.0014,0.0005,G0.tileWidth*0.8),kJ=new Set([DJ,v,O8,q8]),bJ=new Set([FJ,rJ,sJ,iJ,vJ]);function P(_,m,r=!1){let u=new IJ,H0=new z0(DJ,r?rJ:FJ);if(H0.castShadow=!0,H0.receiveShadow=!0,u.add(H0),!r){let Q0=[];if([_,m].forEach((v0,Z0)=>oO[v0].forEach((A0)=>Q0.push(a0((Z0===0?-1:1)*G0.tileLength/4+(A0%3-1)*G0.pipColumnSpacing,G0.tileThickness/2+0.0005,(Math.floor(A0/3)-1)*G0.pipRowSpacing)))),Q0.length){let v0=new N7(v,sJ,Q0.length),Z0=new n0;Q0.forEach((A0,$J)=>v0.setMatrixAt($J,Z0.makeTranslation(A0.x,A0.y,A0.z))),u.add(v0)}let O0=new z0(O8,iJ);O0.position.y=G0.tileThickness/2+0.0002,u.add(O0);let _0=new z0(q8,vJ);_0.position.y=G0.tileThickness/2+0.0004,u.add(_0)}return u}function k(_){return a0(_.x,G0.surfaceY+G0.tileThickness/2+0.001,_.z)}let j=new z0(new O7(0.2,0.006,5,38),new cJ({color:"#e8bf70",transparent:!0,opacity:0.7}));j.rotation.x=-Math.PI/2,j.position.y=0.027,$.add(j);let l=[],Y0=[],N0=[],D0=[],a=new GH,t=0,C0=4,b0=[];D0.push(...R5($));let B0=a0(),F0=a0(),x0=a0(),m0=a0(),OJ=new n0,h=a0(),V0=a0();function e(_){let m=null;if(_.root.traverse((d0)=>{if(d0.isSkinnedMesh&&d0.morphTargetDictionary&&!m)m=d0}),!m||m.morphTargetDictionary.parpadeo==null)return;_.cara={mesh:m,iP:m.morphTargetDictionary.parpadeo,iS:m.morphTargetDictionary.sonrisa};let r=m.geometry.attributes.position,u=m.userData?.boca;if(u){let d0=1e9,GJ=0;for(let PJ=0;PJ<r.count;PJ++){let NJ=(r.getX(PJ)-u[0])**2+(r.getY(PJ)-u[1])**2+(r.getZ(PJ)-u[2])**2;if(NJ<d0)d0=NJ,GJ=PJ}_.bocaMundo=(PJ)=>{return m.skeleton.update(),m.getVertexPosition(GJ,PJ).applyMatrix4(m.matrixWorld)}}let H0=m.userData?.ojos,Q0=m.userData?.parpado;if(!H0||!Q0)return;let O0=m.geometry.attributes.position,_0=(d0)=>{let GJ=1e9,PJ=0;for(let NJ=0;NJ<O0.count;NJ++){let z8=(O0.getX(NJ)-d0[0])**2+(O0.getY(NJ)-d0[1])**2+(O0.getZ(NJ)-d0[2])**2;if(z8<GJ)GJ=z8,PJ=NJ}return PJ},v0=new H8(0.027,0.0125,8,4);v0.translate(0,-0.00625,0);let Z0=v0.attributes.position,A0=[];for(let d0=0;d0<Z0.count;d0++){let GJ=Z0.getX(d0)/0.0135,PJ=-Z0.getY(d0)/0.0125;Z0.setZ(d0,0.0032*Math.cos(GJ*Math.PI/2)*(0.5+0.5*PJ));let NJ=PJ>0.85?0.45:1;A0.push(NJ,NJ,NJ)}v0.setAttribute("color",new HJ(A0,3)),v0.computeVertexNormals();let $J=new QJ({color:new y0().setRGB(...Q0,B8),roughness:0.7,vertexColors:!0});_.parpados=H0.map((d0)=>{let GJ=new z0(v0,$J);return GJ.visible=!1,GJ.frustumCulled=!1,$.add(GJ),{m:GJ,k:_0(d0)}})}function k0(_){let m=_.parpados;if(!m||!_.cara)return;let r=_.parpadeo||0;if(r<0.03){for(let O0 of m)O0.m.visible=!1;return}let u=_.cara.mesh;u.skeleton.update();let H0=u.getVertexPosition(m[0].k,B0).applyMatrix4(u.matrixWorld).clone(),Q0=u.getVertexPosition(m[1].k,B0).applyMatrix4(u.matrixWorld).clone();if(_.head.getWorldPosition(h),_.front.getWorldPosition(V0),m0.subVectors(V0,h).normalize(),F0.subVectors(Q0,H0).normalize(),x0.crossVectors(m0,F0).normalize(),x0.y<0)x0.negate();F0.crossVectors(x0,m0).normalize(),OJ.makeBasis(F0,x0,m0);for(let[O0,_0]of[[m[0],H0],[m[1],Q0]])O0.m.visible=!0,O0.m.quaternion.setFromRotationMatrix(OJ),O0.m.position.copy(_0).addScaledVector(x0,0.0052).addScaledVector(m0,0.0024),O0.m.scale.set(1,r,1)}async function T0(_,m){try{Q(`Seating ${["Don Rafa","Marisol","Luis","Carmen"][_]}…`,t/C0);let r=await a.loadAsync(`/models/${m}.glb`);Y0[_]=r;let u=r.scene,H0=new IJ;H0.add(u);let Q0=new aQ(u);if(r.animations[0])Q0.clipAction(r.animations.find((d0)=>d0.name==="Seated")||r.animations[0]).play();Q0.setTime(G0.neutralPoseTime),u.updateMatrixWorld(!0),u.traverse((d0)=>{if(d0.isSkinnedMesh)d0.computeBoundingBox();if(d0.isMesh)d0.castShadow=!0,d0.receiveShadow=!0,d0.frustumCulled=!1,d0.material.roughness=0.83});let O0=new I8().setFromObject(u),_0=u.getObjectByName("Hips"),v0=_0?.getWorldPosition(a0())||O0.getCenter(a0());u.position.set(-v0.x,-O0.min.y,-v0.z);let[Z0,A0,$J]=E9[_];if(H0.position.set(Z0,0,A0),H0.rotation.y=$J,$.add(H0),l[_]={root:u,holder:H0,index:_,pose:zH(u),head:u.getObjectByName("Head"),neck:u.getObjectByName("neck"),front:u.getObjectByName("headfront"),chest:u.getObjectByName("Spine"),hips:u.getObjectByName("Hips"),lomo:u.getObjectByName("Spine02"),muslos:[u.getObjectByName("LeftUpLeg"),u.getObjectByName("RightUpLeg")],hombros:[[1,u.getObjectByName("LeftShoulder")],[-1,u.getObjectByName("RightShoulder")]],spine:u.getObjectByName("Spine01"),reaction:null,brazos:["Left","Right"].map((d0)=>({lado:d0,hombro:u.getObjectByName(d0+"Shoulder"),brazo:u.getObjectByName(d0+"Arm"),antebrazo:u.getObjectByName(d0+"ForeArm"),mano:u.getObjectByName(d0+"Hand")}))},l[_].bebida=D0.find((d0)=>d0.index===_),e(l[_]),t++,Q(t===4?"The table is ready.":`${t} of 4 seats ready`,t/C0),N0.length===0&&i9>0)Y6(i9)}catch(r){b0.push(m),console.error("Character load failed",m,r),Q(`Could not load ${m}. Reload to retry.`,t/C0)}}let X0=Promise.all(["rafa-upright","marisol","luis-upright","carmen"].map((_,m)=>T0(m,_))),M0=null,r0=null,AJ="",LJ=null,xJ=B5({scene:$,renderer:Z,camera:W,controls:H,software:K,bulbLight:X});xJ.calidad("high");let h8=new Set,F$=new Map,q$=[0,1,2,3].map(()=>a0()),Z6=(_)=>{let m=_.detail||{};if(m.active)h8.add(m.seat),F$.set(m.seat,m.type);else h8.delete(m.seat)};window.addEventListener("mesa:botvoice",Z6);let K6=null,i9=0,sW="",V9=0,QQ="attract",Z8=null,u8=[],H6=0,$Q=0;function o9(_){while(_.children.length){let m=_.children.pop();m.parent=null,m.traverse((r)=>{if(r.isMesh&&!kJ.has(r.geometry))r.geometry.dispose();if(r.isMesh&&!bJ.has(r.material))r.material.dispose()})}}function Y6(_){i9=_;let m=Math.min(8,_);for(let r=N0.length-1;r>=m;r--)$.remove(N0[r].holder),N0.pop();while(N0.length<m&&Y0.filter(Boolean).length){let r=N0.length,u=Y0[r%4]||Y0.find(Boolean),H0=hW(u.scene),Q0=new IJ;Q0.add(H0);let O0=new aQ(H0);if(u.animations[0])O0.clipAction(u.animations.find((A0)=>A0.name==="Seated")||u.animations[0]).play();O0.setTime(G0.neutralPoseTime),H0.updateMatrixWorld(!0),H0.traverse((A0)=>{if(A0.isSkinnedMesh)A0.computeBoundingBox();if(A0.isMesh)A0.castShadow=!1,A0.frustumCulled=!1});let _0=new I8().setFromObject(H0),v0=H0.getObjectByName("Hips")?.getWorldPosition(a0())||_0.getCenter(a0());H0.position.x-=v0.x,H0.position.y-=_0.min.y,H0.position.z-=v0.z,Q0.position.set(-2.5+r%4*1.66,0,-2.5-Math.floor(r/4)*0.65),Q0.rotation.y=0,$.add(Q0);let Z0=new z0(new gJ(0.56,0.06,0.54),w);Z0.position.set(0,G0.chairSeatY,0),Q0.add(Z0),N0.push({root:H0,holder:Q0,pose:zH(H0),head:H0.getObjectByName("Head"),neck:H0.getObjectByName("neck"),front:H0.getObjectByName("headfront"),chest:H0.getObjectByName("Spine"),spine:H0.getObjectByName("Spine01"),index:r+4})}}let z7=-1,T8=null,WQ=H.minDistance;function iW(_,m,r){if(document.documentElement.classList.contains("reduced"))return;let u=a0(1,0,1).normalize(),H0=-9;for(let[O0,_0]of[[1,1],[1,-1],[-1,1],[-1,-1]]){let v0=a0(O0,0,_0).normalize(),Z0=v0.x*_.x+v0.z*_.z;if(Z0>H0)H0=Z0,u=v0}let Q0=_.clone().addScaledVector(u,0.3);if(Q0.x=U7.clamp(Q0.x,-0.4,0.4),Q0.z=U7.clamp(Q0.z,-0.4,0.4),Q0.y=G0.surfaceY+(r?0.12:0.19),!T8)WQ=H.minDistance;H.minDistance=0.1,T8={pos:T8?.pos||W.position.clone(),target:T8?.target||H.target.clone(),at:lJ.elapsedTime+3.4},Z8={from:W.position.clone(),to:Q0,fromTarget:H.target.clone(),toTarget:_.clone().setY(_.y+0.01),t:0,dur:0.45}}function O$(_="table"){if(H.minDistance=_==="seat"||_==="close"?0.3:0.7,H.minPolarAngle=_==="overhead"?0.01:0.25,W.aspect<0.95&&_==="table")_="overhead";let m,r=a0(0,0.8,0);if(_==="attract")m=a0(0.75,1.3,4.4),r=a0(-1,1.4,-1.2);else if(_==="overhead")m=a0(0.001,1.86,0.34),r=a0(0,G0.surfaceY,0.02);else if(_==="seat")m=a0(0,1.36,0.74),r=a0(0,0.82,-0.12);else if(_==="close")m=a0(0.62,1.3,1),r=a0(-0.03,0.85,-0.08);else m=a0(0.85,1.66,1.5),r=a0(0,0.85,-0.14);if(_!=="attract"&&_!=="seat"&&W.aspect<1.3){let u=Math.min(2.4,Math.pow(1.6/W.aspect,0.8));m=r.clone().add(m.clone().sub(r).multiplyScalar(u))}if(l[0])l[0].root.visible=_!=="seat";T8=null,H.minDistance=Math.min(H.minDistance,WQ),Z8={from:W.position.clone(),to:m,fromTarget:H.target.clone(),toTarget:r,t:0}}let w9=a0(0,1,0),C=new qJ().setFromAxisAngle(a0(1,0,0),0.12),f=new qJ().setFromAxisAngle(w9,Math.PI/2),s=new qJ().setFromAxisAngle(a0(0,0,1),Math.PI/2),p=G0.tableCenterY+G0.tableThickness/2+G0.tileLength/2*Math.cos(0.12)+G0.tileThickness/2*Math.sin(0.12)+0.001;function g(_,m,r){let u=E9[_][2];return r.quaternion.setFromAxisAngle(w9,u).multiply(C).multiply(f).multiply(s),r.position.set(m,p,-G0.rackRadius).applyAxisAngle(w9,u),r}let L0=new N7(DJ,rJ,28);L0.count=0,L0.castShadow=!0,L0.receiveShadow=!0,L0.frustumCulled=!1,KJ.add(L0);let w0=[[],[],[],[]],R0=new zJ,f0=[0,0,0,0],h0="",JJ=new Set;function XJ(_){let m=0;for(let r=0;r<4;r++){let u=JJ.has(r)?0:f0[r],H0=w0[r];while(H0.length<u)H0.push((H0.length-(u-1)/2)*G0.rackSpacing);H0.length=u;for(let Q0=0;Q0<u;Q0++){let O0=(Q0-(u-1)/2)*G0.rackSpacing;H0[Q0]+=(O0-H0[Q0])*(1-Math.exp(-_*10)),g(r,H0[Q0],R0),R0.updateMatrix(),L0.setMatrixAt(m++,R0.matrix)}}L0.count=m,L0.instanceMatrix.needsUpdate=!0}let j0=new IJ;$.add(j0);let VJ=new Map,uJ="",fJ="";function _J(){for(let _=0;_<28;_++){let m=P(0,0,!0);m.position.set((_*37%23-11)*0.016,G0.surfaceY+G0.tileThickness*(0.55+_%3*0.9),(_*13%19-9)*0.016),m.rotation.y=_*1.73,e0.add(m)}}let mJ=(_)=>_*_*(3-2*_),S0=new qJ().setFromAxisAngle(a0(1,0,0),Math.PI),R8=new qJ().setFromAxisAngle(w9,-Math.PI/2);function RJ(_,m){_.revealed.forEach((r,u)=>{let H0=r.length,Q0=E9[u][2];r.forEach((O0,_0)=>{let v0=(_0-(H0-1)/2)*G0.rackSpacing,Z0=P(O0.a,O0.b);g(u,v0,R0);let A0=R0.quaternion.clone().multiply(S0),$J=R0.position.clone(),d0=a0(v0,G0.surfaceY+G0.tileThickness/2+0.001,-G0.rackRadius+0.047).applyAxisAngle(w9,Q0),GJ=new qJ().setFromAxisAngle(w9,Q0).multiply(R8);Z0.position.copy($J),Z0.quaternion.copy(A0),Z0.visible=!1,e0.add(Z0),u8.push({obj:Z0,from:$J,to:d0,qFrom:A0,qTo:GJ,elapsed:-(m+u*0.3+_0*0.055),duration:0.42,revela:u,ultima:_0===H0-1})})})}function C8(_,m=0){K6=_;{let Q0=_&&(_.phase==="handEnd"||_.phase==="seriesEnd")&&_.result,O0=Q0?_.handNo+":"+_.phase:"";if(O0&&O0!==AJ)r0={t:lJ.elapsedTime+0.5,team:_.result.team??null};if(!Q0)r0=null;AJ=O0}if(i9!==m)Y6(m);let r=!_||_.phase==="lobby"?"pila":"mano"+_.handNo;if(r!==uJ){uJ=r,o9(e0),VJ.clear(),u8=u8.filter((Q0)=>Q0.reparto);for(let Q0 of l)if(Q0)Q0.jugada=null;if(r==="pila")_J()}if(_&&_.chain?.length){let Q0=Q5(_.chain,_.moves),O0=_.event,_0=["domino","capicua","tranque"].includes(O0?.type),v0=_.moves[_.moves.length-1],Z0=O0?.type==="domino"||O0?.type==="capicua",A0=O0?.type==="play"?O0.tile:_0&&v0?.type==="play"?v0.tile:null;_.chain.forEach(($J,d0)=>{if(VJ.has($J.id))return;let GJ=P($J.x,$J.y),PJ=k(Q0[d0]);if(GJ.position.copy(PJ),GJ.rotation.y=Q0[d0].yaw,GJ.updateMatrix(),e0.add(GJ),VJ.set($J.id,GJ),$J.id!==A0||$J.seat==null)return;g($J.seat,0,R0);let NJ={obj:GJ,from:R0.position.clone(),to:PJ.clone(),qFrom:R0.quaternion.clone(),qTo:GJ.quaternion.clone(),elapsed:0,duration:Z0?0.7:0.55,golpe:Z0};if(GJ.position.copy(NJ.from),GJ.quaternion.copy(NJ.qFrom),u8.push(NJ),_0)iW(PJ,$J.seat,Z0);H6=performance.now();let z8=l[$J.seat];if(M0={p:PJ.clone(),t:lJ.elapsedTime+NJ.duration},z8)z8.reaction={time:lJ.elapsedTime},z8.jugada={t0:lJ.elapsedTime,obj:GJ,anim:NJ,hasta:PJ.clone()}})}if(_?.phase==="playing"&&_.handNo!==V9&&_.moves.length===0){V9=_.handNo,o9(j0),u8=u8.filter((Q0)=>!Q0.reparto),$Q=performance.now()+3300;for(let Q0=0;Q0<4;Q0++)w0[Q0]=Array.from({length:7},(O0,_0)=>(_0-3)*G0.rackSpacing);for(let Q0=0;Q0<28;Q0++){let O0=Q0%4,_0=Math.floor(Q0/4),v0=P(0,0,!0),Z0=a0((Q0*37%23-11)*0.015,G0.surfaceY+0.012,(Q0*13%19-9)*0.015);v0.position.copy(Z0),v0.rotation.y=Q0*1.73,j0.add(v0);let A0=g(O0,(_0-3)*G0.rackSpacing,new zJ);u8.push({obj:v0,from:Z0,to:A0.position.clone(),qFrom:v0.quaternion.clone(),qTo:A0.quaternion.clone(),elapsed:-Q0*0.065,duration:1.1,reparto:!0})}}let u=_?.moves?.[_.moves.length-1],H0=_?_.handNo+":"+_.moves.length:"";if(u?.type==="pass"&&fJ!==H0){fJ=H0;let Q0=l[u.seat];if(Q0)Q0.toque={t0:lJ.elapsedTime}}{let Q0=_&&(_.phase==="handEnd"||_.phase==="seriesEnd")&&_.revealed,O0=Q0?"r"+_.handNo:"";if(!Q0)h0="",JJ.clear();else if(O0!==h0){h0=O0;let _0=_.result?.type;RJ(_,_0==="domino"||_0==="capicua"?3.4:_0==="tranque"?2.5:1.2)}}f0=[0,1,2,3].map((Q0)=>!_||_.phase==="lobby"?0:_.counts[Q0]??0),j.visible=!1,LJ=_?.phase==="playing"&&_.chain?.length?$5(_.chain,_.moves):null}let lJ=new TW,w8=0,D9=0,BJ=0,hJ=60,Q9=!1,CJ=!1,S8=null,$9="high",ZQ=null,wH=performance.now(),SH=!1,k5=new URLSearchParams(location.search).has("debug"),jH=X.intensity,P7=a0(),M5=a0(0,G0.surfaceY,0);function oW(){if(Q9||CJ){S8=null;return}S8=requestAnimationFrame(oW);let _=lJ.getDelta(),m=Math.min(_,0.06),r=ZQ??lJ.elapsedTime,u=performance.now();if(D9++,BJ+=_,BJ>1){if(hJ=D9/BJ,D9=0,BJ=0,!SH&&$9==="high"&&u-wH>9000&&u-wH<30000&&hJ<30)SH=!0,hH.quality("low"),dispatchEvent(new CustomEvent("mesa:calidad",{detail:"low"}))}w8++,Z.info.reset();let H0=document.documentElement.classList.contains("reduced");if(T8&&lJ.elapsedTime>T8.at)Z8={from:W.position.clone(),to:T8.pos,fromTarget:H.target.clone(),toTarget:T8.target,t:0,dur:1.2},T8=null,H.minDistance=WQ;let Q0=0;if(z7>=0){let Z0=lJ.elapsedTime-z7;if(Z0<0.5){let A0=0.0045*Math.exp(-Z0*8)*Math.sin(Z0*W6*18);e0.position.y=A0,KJ.position.y=A0,Q0=H0?0:0.004*Math.exp(-Z0*9),X.intensity=jH*(1+0.35*Math.exp(-Z0*14))}else z7=-1,e0.position.y=0,KJ.position.y=0,X.intensity=jH}if(Z8){Z8.t=Math.min(1,Z8.t+m/(Z8.dur||1.1));let Z0=mJ(Z8.t);if(W.position.lerpVectors(Z8.from,Z8.to,Z0),H.target.lerpVectors(Z8.fromTarget,Z8.toTarget,Z0),Z8.t===1)Z8=null}if(!H0)o.rotation.z=r*3.5,S.rotation.z=Math.sin(r*0.47)*0.009,aJ.update(r);let O0=K6,_0={dt:m,jugando:O0?.phase==="playing",turno:O0?.turn,habla:h8,hablaTipo:F$,foco:M0,fin:r0,cabezas:l.map((Z0,A0)=>Z0?.head?Z0.head.getWorldPosition(q$[A0]):null)};for(let Z0 of l){if(!Z0)continue;cW(Z0,r,H0,_0),k0(Z0)}for(let Z0=0;Z0<N0.length;Z0++)if((w8+Z0)%2===0)cW(N0[Z0],r,H0,_0);u8=u8.filter((Z0)=>{if(Z0.elapsed+=m,Z0.elapsed<0)return!0;let A0=Math.min(1,Z0.elapsed/Z0.duration);if(Z0.revela!=null){Z0.obj.visible=!0,JJ.add(Z0.revela);let $J=mJ(A0);if(Z0.obj.quaternion.slerpQuaternions(Z0.qFrom,Z0.qTo,$J),Z0.obj.position.lerpVectors(Z0.from,Z0.to,$J),Z0.obj.position.y+=Math.sin(A0*Math.PI)*0.012,A0>=1&&Z0.ultima)dispatchEvent(new CustomEvent("mesa:aterriza",{detail:{revela:!0}}));return A0<1}if(Z0.reparto)return Z0.obj.position.lerpVectors(Z0.from,Z0.to,mJ(A0)),Z0.obj.position.y+=Math.sin(A0*Math.PI)*0.035,Z0.obj.quaternion.slerpQuaternions(Z0.qFrom,Z0.qTo,mJ(Math.min(1,Math.max(0,(A0-0.3)/0.7)))),A0<1;if(Z0.obj.quaternion.slerpQuaternions(Z0.qFrom,Z0.qTo,mJ(Math.min(1,A0/0.4))),Z0.golpe){let $J=Math.min(1,A0/0.62);Z0.obj.position.lerpVectors(Z0.from,Z0.to,mJ($J)),Z0.obj.position.y+=A0<0.62?Math.sin($J*Math.PI/2)*0.17:0.17*(1-((A0-0.62)/0.38)**2)}else Z0.obj.position.lerpVectors(Z0.from,Z0.to,mJ(A0)),Z0.obj.position.y+=Math.sin(A0*Math.PI)*0.07;if(A0>=1&&!Z0.sono){if(Z0.sono=!0,Z0.golpe)z7=lJ.elapsedTime;dispatchEvent(new CustomEvent("mesa:aterriza",{detail:{golpe:!!Z0.golpe}}))}return A0<1});let v0=u<$Q;if(KJ.visible=!v0,!v0&&j0.children.length)o9(j0);if(XJ(m),H.update(),xJ.frame(r,m,{reduced:H0,view:O0,ends:LJ,temblor:Q0}),xJ.render(),w8%2===0)for(let Z0 of document.querySelectorAll("[data-seatlabel]")){let A0=Number(Z0.dataset.seatlabel),[$J,d0]=E9[A0],GJ=l[A0]?.head,PJ=GJ&&GJ.getWorldPosition(P7).distanceTo(xJ.vista.position)<M5.distanceTo(xJ.vista.position)-0.2;if(PJ)P7.y-=0.3;else if(GJ)P7.y+=0.23;else P7.set($J,1.45,d0);let NJ=P7.project(xJ.vista),z8=!1;if(!PJ&&NJ.y>0.8&&GJ)GJ.getWorldPosition(P7).y-=0.1,NJ=P7.project(xJ.vista),z8=!0;let C5=Math.min(NJ.y,0.8);Z0.style.transform=`translate(${(NJ.x*0.5+0.5)*innerWidth}px,${(-C5*0.5+0.5)*innerHeight}px) translate(-50%,${PJ?"-50%":z8?"0":"-100%"})`,Z0.style.visibility=NJ.z>1||Math.abs(NJ.x)>1.1||NJ.y<-1.15?"hidden":"visible"}if(w8%30===0||w8===1){if(window.mesaDiagnostics={fps:Math.round(hJ),drawCalls:Z.info.render.calls,triangles:Z.info.render.triangles,characters:t,crowd:i9,visibleCrowd:N0.length,boardTiles:K6?.chain.length||0,quality:$9,modelErrors:b0},k5){window.mesaRigDebug=l.filter(Boolean).map((A0)=>({index:A0.index,head:A0.head?.getWorldPosition(a0()).toArray(),hip:A0.hips?.getWorldPosition(a0()).toArray(),rootScale:A0.root.scale.toArray()}));let Z0=document.querySelector("#perf");if(Z0)Z0.textContent=`${Math.round(hJ)} fps · ${Z.info.render.calls} draws`}}}window.mesaCamara=(_,m)=>{Z8=null,T8=null,H.minDistance=0.1,W.position.set(..._),H.target.set(...m),H.update()},window.mesaCara=(_,m,r)=>{let u=l[_];if(u)u.caraFija=m==null?null:{p:m,s:r??0}},window.mesaBeber=(_,m)=>{let r=l[_];if(r&&r.bebida&&!r.jugada)r.trago={t0:lJ.elapsedTime,fijo:m}},C8(null),oW();let yH=()=>{if(W.aspect<0.95)W.setViewOffset(innerWidth,innerHeight*1.24,0,innerHeight*0.24,innerWidth,innerHeight);else W.clearViewOffset();W.updateProjectionMatrix()},vH=()=>K?0.65:$9==="low"?Math.min(devicePixelRatio,1)*0.8:Math.min(devicePixelRatio,1.5,1920/innerWidth),fH=()=>{W.aspect=innerWidth/innerHeight,yH(),Z.setPixelRatio(vH()),Z.setSize(innerWidth,innerHeight),xJ.resize(innerWidth,innerHeight)};yH(),window.addEventListener("resize",fH),H.addEventListener("start",()=>{Z8=null,T8=null}),Z.domElement.addEventListener("webglcontextrestored",()=>xJ.entorno?.());let hH={update:C8,setCrowd:Y6,setCamera:O$,ready:X0,sampleTime(_){ZQ=_;for(let m of[...l.filter(Boolean),...N0])cW(m,_,!1);xJ.frame(_,0,{reduced:!1,view:K6,ends:LJ}),xJ.render()},setMode(_){QQ=_,O$(_==="attract"?"attract":"table")},quality(_){$9=_,X.castShadow=_!=="low"&&!K,Z.setPixelRatio(vH()),xJ.calidad(_),xJ.resize(innerWidth,innerHeight)},pause(){CJ=!0},resume(){if(!CJ)return;if(CJ=!1,lJ.getDelta(),!S8)oW()},dispose(){if(Q9=!0,xJ.dispose(),window.removeEventListener("mesa:botvoice",Z6),S8)cancelAnimationFrame(S8);window.removeEventListener("resize",fH),H.dispose(),Z.dispose(),J.replaceChildren()}};return hH}export{sD as createWorld};

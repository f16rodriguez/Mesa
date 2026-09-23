var jY="186",W7={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Z7={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yY=0,yZ=1,vY=2;var y7=1,fY=2,j6=3,K7=0,R8=1,J8=2,o8=0,_Q=1,k9=2,vZ=3,fZ=4,hY=5;var y6=100,bY=101,xY=102,gY=103,pY=104,mY=200,lY=201,uY=202,dY=203,cY=204,nY=205,sY=206,iY=207,oY=208,aY=209,rY=210,tY=211,eY=212,JX=213,QX=214,$X=0,WX=1,ZX=2,hZ=3,KX=4,HX=5,YX=6,XX=7,UX=0,GX=1,NX=2,X9=0,TQ=1,wQ=2,SQ=3,v7=4,jQ=5,yQ=6,vQ=7;var v6=301,f7=302,QW=303,$W=304,fQ=306,H7=1000,f6=1001,WW=1002,U9=1003,ZW=1004;var h7=1005;var G8=1006,h6=1007;var M9=1008;var G9=1009,EX=1010,FX=1011,hQ=1012,bZ=1013,Y7=1014,g9=1015,N8=1016,xZ=1017,gZ=1018,b6=1020,qX=35902,OX=35899,RX=1021,LX=1022,C9=1023,b7=1026,x7=1027,VX=1028,pZ=1029,g7=1030,mZ=1031;var lZ=1033,KW=33776,HW=33777,YW=33778,XW=33779,uZ=35840,dZ=35841,cZ=35842,nZ=35843,sZ=36196,iZ=37492,oZ=37496,aZ=37488,rZ=37489,UW=37490,tZ=37491,eZ=37808,JK=37809,QK=37810,$K=37811,WK=37812,ZK=37813,KK=37814,HK=37815,YK=37816,XK=37817,UK=37818,GK=37819,NK=37820,EK=37821,FK=36492,qK=36494,OK=36495,RK=36283,LK=36284,GW=36285,VK=36286;var DK=2300,NW=2301;var BK=0,bQ=1,x6=2;var kK=0,DX=1,p7="",D8="srgb",g8="srgb-linear",MK="linear",jJ="srgb";var BX=512,kX=513,MX=514,EW=515,CX=516,zX=517,FW=518,PX=519;var CK="300 es",zK=2000;function _5(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function T5(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function _6(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function IX(){let J=_6("canvas");return J.style.display="block",J}var mH={},T6=null;function zQ(...J){let Q="THREE."+J.shift();if(T6)T6("log",Q,...J);else console.log(Q,...J)}function AX(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function x0(...J){J=AX(J);let Q="THREE."+J.shift();if(T6)T6("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function i0(...J){J=AX(J);let Q="THREE."+J.shift();if(T6)T6("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function w7(...J){let Q=J.join(" ");if(Q in mH)return;mH[Q]=!0,x0(...J)}function _X(J,Q,$){return new Promise(function(W,Z){function K(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:Z();break;case J.TIMEOUT_EXPIRED:setTimeout(K,$);break;default:W()}}setTimeout(K,$)})}var TX={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class N9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let W=$[J];if(W!==void 0){let Z=W.indexOf(Q);if(Z!==-1)W.splice(Z,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let W=$.slice(0);for(let Z=0,K=W.length;Z<K;Z++)W[Z].call(this,J);J.target=null}}}var L8=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lH=1234567,BQ=Math.PI/180,S7=180/Math.PI;function i8(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,W=Math.random()*4294967295|0;return(L8[J&255]+L8[J>>8&255]+L8[J>>16&255]+L8[J>>24&255]+"-"+L8[Q&255]+L8[Q>>8&255]+"-"+L8[Q>>16&15|64]+L8[Q>>24&255]+"-"+L8[$&63|128]+L8[$>>8&255]+"-"+L8[$>>16&255]+L8[$>>24&255]+L8[W&255]+L8[W>>8&255]+L8[W>>16&255]+L8[W>>24&255]).toLowerCase()}function WJ(J,Q,$){return Math.max(Q,Math.min($,J))}function PK(J,Q){return(J%Q+Q)%Q}function w5(J,Q,$,W,Z){return W+(J-Q)*(Z-W)/($-Q)}function S5(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function kQ(J,Q,$){return(1-$)*J+$*Q}function j5(J,Q,$,W){return kQ(J,Q,1-Math.exp(-$*W))}function y5(J,Q=1){return Q-Math.abs(PK(J,Q*2)-Q)}function v5(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function f5(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function h5(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function b5(J,Q){return J+Math.random()*(Q-J)}function x5(J){return J*(0.5-Math.random())}function g5(J){if(J!==void 0)lH=J;let Q=lH+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function p5(J){return J*BQ}function m5(J){return J*S7}function l5(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function u5(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function d5(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function c5(J,Q,$,W,Z){let{cos:K,sin:H}=Math,Y=K($/2),X=H($/2),U=K((Q+W)/2),G=H((Q+W)/2),E=K((Q-W)/2),N=H((Q-W)/2),F=K((W-Q)/2),q=H((W-Q)/2);switch(Z){case"XYX":J.set(Y*G,X*E,X*N,Y*U);break;case"YZY":J.set(X*N,Y*G,X*E,Y*U);break;case"ZXZ":J.set(X*E,X*N,Y*G,Y*U);break;case"XZX":J.set(Y*G,X*q,X*F,Y*U);break;case"YXY":J.set(X*F,Y*G,X*q,Y*U);break;case"ZYZ":J.set(X*q,X*F,Y*G,Y*U);break;default:x0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+Z)}}function H9(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:case Uint8ClampedArray:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function wJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var X7={DEG2RAD:BQ,RAD2DEG:S7,generateUUID:i8,clamp:WJ,euclideanModulo:PK,mapLinear:w5,inverseLerp:S5,lerp:kQ,damp:j5,pingpong:y5,smoothstep:v5,smootherstep:f5,randInt:h5,randFloat:b5,randFloatSpread:x5,seededRandom:g5,degToRad:p5,radToDeg:m5,isPowerOfTwo:l5,ceilPowerOfTwo:u5,floorPowerOfTwo:d5,setQuaternionFromProperEuler:c5,normalize:wJ,denormalize:H9};class $0{static{$0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6],this.y=W[1]*Q+W[4]*$+W[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=WJ(this.x,J.x,Q.x),this.y=WJ(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=WJ(this.x,J,Q),this.y=WJ(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(WJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(WJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),W=Math.sin(Q),Z=this.x-J.x,K=this.y-J.y;return this.x=Z*$-K*W+J.x,this.y=Z*W+K*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class VJ{constructor(J=0,Q=0,$=0,W=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=W}static slerpFlat(J,Q,$,W,Z,K,H){let Y=$[W+0],X=$[W+1],U=$[W+2],G=$[W+3],E=Z[K+0],N=Z[K+1],F=Z[K+2],q=Z[K+3];if(G!==q||Y!==E||X!==N||U!==F){let V=Y*E+X*N+U*F+G*q;if(V<0)E=-E,N=-N,F=-F,q=-q,V=-V;let O=1-H;if(V<0.9995){let R=Math.acos(V),z=Math.sin(R);O=Math.sin(O*R)/z,H=Math.sin(H*R)/z,Y=Y*O+E*H,X=X*O+N*H,U=U*O+F*H,G=G*O+q*H}else{Y=Y*O+E*H,X=X*O+N*H,U=U*O+F*H,G=G*O+q*H;let R=1/Math.sqrt(Y*Y+X*X+U*U+G*G);Y*=R,X*=R,U*=R,G*=R}}J[Q]=Y,J[Q+1]=X,J[Q+2]=U,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,$,W,Z,K){let H=$[W],Y=$[W+1],X=$[W+2],U=$[W+3],G=Z[K],E=Z[K+1],N=Z[K+2],F=Z[K+3];return J[Q]=H*F+U*G+Y*N-X*E,J[Q+1]=Y*F+U*E+X*G-H*N,J[Q+2]=X*F+U*N+H*E-Y*G,J[Q+3]=U*F-H*G-Y*E-X*N,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,W){return this._x=J,this._y=Q,this._z=$,this._w=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:W,_z:Z,_order:K}=J,H=Math.cos,Y=Math.sin,X=H($/2),U=H(W/2),G=H(Z/2),E=Y($/2),N=Y(W/2),F=Y(Z/2);switch(K){case"XYZ":this._x=E*U*G+X*N*F,this._y=X*N*G-E*U*F,this._z=X*U*F+E*N*G,this._w=X*U*G-E*N*F;break;case"YXZ":this._x=E*U*G+X*N*F,this._y=X*N*G-E*U*F,this._z=X*U*F-E*N*G,this._w=X*U*G+E*N*F;break;case"ZXY":this._x=E*U*G-X*N*F,this._y=X*N*G+E*U*F,this._z=X*U*F+E*N*G,this._w=X*U*G-E*N*F;break;case"ZYX":this._x=E*U*G-X*N*F,this._y=X*N*G+E*U*F,this._z=X*U*F-E*N*G,this._w=X*U*G+E*N*F;break;case"YZX":this._x=E*U*G+X*N*F,this._y=X*N*G+E*U*F,this._z=X*U*F-E*N*G,this._w=X*U*G-E*N*F;break;case"XZY":this._x=E*U*G-X*N*F,this._y=X*N*G-E*U*F,this._z=X*U*F+E*N*G,this._w=X*U*G+E*N*F;break;default:x0("Quaternion: .setFromEuler() encountered an unknown order: "+K)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,W=Math.sin($);return this._x=J.x*W,this._y=J.y*W,this._z=J.z*W,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],W=Q[4],Z=Q[8],K=Q[1],H=Q[5],Y=Q[9],X=Q[2],U=Q[6],G=Q[10],E=$+H+G;if(E>0){let N=0.5/Math.sqrt(E+1);this._w=0.25/N,this._x=(U-Y)*N,this._y=(Z-X)*N,this._z=(K-W)*N}else if($>H&&$>G){let N=2*Math.sqrt(1+$-H-G);this._w=(U-Y)/N,this._x=0.25*N,this._y=(W+K)/N,this._z=(Z+X)/N}else if(H>G){let N=2*Math.sqrt(1+H-$-G);this._w=(Z-X)/N,this._x=(W+K)/N,this._y=0.25*N,this._z=(Y+U)/N}else{let N=2*Math.sqrt(1+G-$-H);this._w=(K-W)/N,this._x=(Z+X)/N,this._y=(Y+U)/N,this._z=0.25*N}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(WJ(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let W=Math.min(1,Q/$);return this.slerp(J,W),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:W,_z:Z,_w:K}=J,H=Q._x,Y=Q._y,X=Q._z,U=Q._w;return this._x=$*U+K*H+W*X-Z*Y,this._y=W*U+K*Y+Z*H-$*X,this._z=Z*U+K*X+$*Y-W*H,this._w=K*U-$*H-W*Y-Z*X,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:W,_z:Z,_w:K}=J,H=this.dot(J);if(H<0)$=-$,W=-W,Z=-Z,K=-K,H=-H;let Y=1-Q;if(H<0.9995){let X=Math.acos(H),U=Math.sin(X);Y=Math.sin(Y*X)/U,Q=Math.sin(Q*X)/U,this._x=this._x*Y+$*Q,this._y=this._y*Y+W*Q,this._z=this._z*Y+Z*Q,this._w=this._w*Y+K*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+W*Q,this._z=this._z*Y+Z*Q,this._w=this._w*Y+K*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),W=Math.sqrt(1-$),Z=Math.sqrt($);return this.set(W*Math.sin(J),W*Math.cos(J),Z*Math.sin(Q),Z*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{static{T.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(uH.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(uH.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6]*W,this.y=Z[1]*Q+Z[4]*$+Z[7]*W,this.z=Z[2]*Q+Z[5]*$+Z[8]*W,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements,K=1/(Z[3]*Q+Z[7]*$+Z[11]*W+Z[15]);return this.x=(Z[0]*Q+Z[4]*$+Z[8]*W+Z[12])*K,this.y=(Z[1]*Q+Z[5]*$+Z[9]*W+Z[13])*K,this.z=(Z[2]*Q+Z[6]*$+Z[10]*W+Z[14])*K,this}applyQuaternion(J){let Q=this.x,$=this.y,W=this.z,Z=J.x,K=J.y,H=J.z,Y=J.w,X=2*(K*W-H*$),U=2*(H*Q-Z*W),G=2*(Z*$-K*Q);return this.x=Q+Y*X+K*G-H*U,this.y=$+Y*U+H*X-Z*G,this.z=W+Y*G+Z*U-K*X,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements;return this.x=Z[0]*Q+Z[4]*$+Z[8]*W,this.y=Z[1]*Q+Z[5]*$+Z[9]*W,this.z=Z[2]*Q+Z[6]*$+Z[10]*W,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=WJ(this.x,J.x,Q.x),this.y=WJ(this.y,J.y,Q.y),this.z=WJ(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=WJ(this.x,J,Q),this.y=WJ(this.y,J,Q),this.z=WJ(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(WJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:W,z:Z}=J,K=Q.x,H=Q.y,Y=Q.z;return this.x=W*Y-Z*H,this.y=Z*K-$*Y,this.z=$*H-W*K,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return QZ.copy(this).projectOnVector(J),this.sub(QZ)}reflect(J){return this.sub(QZ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(WJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,W=this.z-J.z;return Q*Q+$*$+W*W}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let W=Math.sin(Q)*J;return this.x=W*Math.sin($),this.y=Math.cos(Q)*J,this.z=W*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),W=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=W,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var QZ=new T,uH=new VJ;class e0{static{e0.prototype.isMatrix3=!0}constructor(J,Q,$,W,Z,K,H,Y,X){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,W,Z,K,H,Y,X)}set(J,Q,$,W,Z,K,H,Y,X){let U=this.elements;return U[0]=J,U[1]=W,U[2]=H,U[3]=Q,U[4]=Z,U[5]=Y,U[6]=$,U[7]=K,U[8]=X,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,W=Q.elements,Z=this.elements,K=$[0],H=$[3],Y=$[6],X=$[1],U=$[4],G=$[7],E=$[2],N=$[5],F=$[8],q=W[0],V=W[3],O=W[6],R=W[1],z=W[4],D=W[7],L=W[2],M=W[5],I=W[8];return Z[0]=K*q+H*R+Y*L,Z[3]=K*V+H*z+Y*M,Z[6]=K*O+H*D+Y*I,Z[1]=X*q+U*R+G*L,Z[4]=X*V+U*z+G*M,Z[7]=X*O+U*D+G*I,Z[2]=E*q+N*R+F*L,Z[5]=E*V+N*z+F*M,Z[8]=E*O+N*D+F*I,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8];return Q*K*U-Q*H*X-$*Z*U+$*H*Y+W*Z*X-W*K*Y}invert(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],G=U*K-H*X,E=H*Y-U*Z,N=X*Z-K*Y,F=Q*G+$*E+W*N;if(F===0)return this.set(0,0,0,0,0,0,0,0,0);let q=1/F;return J[0]=G*q,J[1]=(W*X-U*$)*q,J[2]=(H*$-W*K)*q,J[3]=E*q,J[4]=(U*Q-W*Y)*q,J[5]=(W*Z-H*Q)*q,J[6]=N*q,J[7]=($*Y-X*Q)*q,J[8]=(K*Q-$*Z)*q,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,W,Z,K,H){let Y=Math.cos(Z),X=Math.sin(Z);return this.set($*Y,$*X,-$*(Y*K+X*H)+K+J,-W*X,W*Y,-W*(-X*K+Y*H)+H+Q,0,0,1),this}scale(J,Q){return w7("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($Z.makeScale(J,Q)),this}rotate(J){return w7("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($Z.makeRotation(-J)),this}translate(J,Q){return w7("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($Z.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let W=0;W<9;W++)if(Q[W]!==$[W])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var $Z=new e0,dH=new e0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),cH=new e0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function n5(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(Z,K,H){if(this.enabled===!1||K===H||!K||!H)return Z;if(this.spaces[K].transfer==="srgb")Z.r=x9(Z.r),Z.g=x9(Z.g),Z.b=x9(Z.b);if(this.spaces[K].primaries!==this.spaces[H].primaries)Z.applyMatrix3(this.spaces[K].toXYZ),Z.applyMatrix3(this.spaces[H].fromXYZ);if(this.spaces[H].transfer==="srgb")Z.r=I6(Z.r),Z.g=I6(Z.g),Z.b=I6(Z.b);return Z},workingToColorSpace:function(Z,K){return this.convert(Z,this.workingColorSpace,K)},colorSpaceToWorking:function(Z,K){return this.convert(Z,K,this.workingColorSpace)},getPrimaries:function(Z){return this.spaces[Z].primaries},getTransfer:function(Z){if(Z==="")return"linear";return this.spaces[Z].transfer},getToneMappingMode:function(Z){return this.spaces[Z].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(Z,K=this.workingColorSpace){return Z.fromArray(this.spaces[K].luminanceCoefficients)},define:function(Z){Object.assign(this.spaces,Z)},_getMatrix:function(Z,K,H){return Z.copy(this.spaces[K].toXYZ).multiply(this.spaces[H].fromXYZ)},_getDrawingBufferColorSpace:function(Z){return this.spaces[Z].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(Z=this.workingColorSpace){return this.spaces[Z].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(Z,K){return w7("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(Z,K)},toWorkingColorSpace:function(Z,K){return w7("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(Z,K)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],W=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:W,transfer:"linear",toXYZ:dH,fromXYZ:cH,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:W,transfer:"srgb",toXYZ:dH,fromXYZ:cH,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var KJ=n5();function x9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function I6(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var X6;class IK{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(X6===void 0)X6=_6("canvas");X6.width=J.width,X6.height=J.height;let W=X6.getContext("2d");if(J instanceof ImageData)W.putImageData(J,0,0);else W.drawImage(J,0,0,J.width,J.height);$=X6}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=_6("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let W=$.getImageData(0,0,J.width,J.height),Z=W.data;for(let K=0;K<Z.length;K++)Z[K]=x9(Z[K]/255)*255;return $.putImageData(W,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(x9(Q[$]/255)*255);else Q[$]=x9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return x0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var s5=0;class xQ{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:s5++}),this.uuid=i8(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},W=this.data;if(W!==null){let Z;if(Array.isArray(W)){Z=[];for(let K=0,H=W.length;K<H;K++)if(W[K].isDataTexture)Z.push(WZ(W[K].image));else Z.push(WZ(W[K]))}else Z=WZ(W);$.url=Z}if(!Q)J.images[this.uuid]=$;return $}}function WZ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return IK.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return x0("Texture: Unable to serialize Texture."),{}}var i5=0,ZZ=new T;class oJ extends N9{constructor(J=oJ.DEFAULT_IMAGE,Q=oJ.DEFAULT_MAPPING,$=1001,W=1001,Z=1006,K=1008,H=1023,Y=1009,X=oJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:i5++}),this.uuid=i8(),this.name="",this.source=new xQ(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=W,this.magFilter=Z,this.minFilter=K,this.anisotropy=X,this.format=H,this.internalFormat=null,this.type=Y,this.offset=new $0(0,0),this.repeat=new $0(1,1),this.center=new $0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new e0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ZZ).x}get height(){return this.source.getSize(ZZ).y}get depth(){return this.source.getSize(ZZ).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){x0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let W=this[Q];if(W===void 0){x0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(W&&$&&(W.isVector2&&$.isVector2))W.copy($);else if(W&&$&&(W.isVector3&&$.isVector3))W.copy($);else if(W&&$&&(W.isMatrix3&&$.isMatrix3))W.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}oJ.DEFAULT_IMAGE=null;oJ.DEFAULT_MAPPING=300;oJ.DEFAULT_ANISOTROPY=1;class SJ{static{SJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,W=1){this.x=J,this.y=Q,this.z=$,this.w=W}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,W){return this.x=J,this.y=Q,this.z=$,this.w=W,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,W=this.z,Z=this.w,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*W+K[12]*Z,this.y=K[1]*Q+K[5]*$+K[9]*W+K[13]*Z,this.z=K[2]*Q+K[6]*$+K[10]*W+K[14]*Z,this.w=K[3]*Q+K[7]*$+K[11]*W+K[15]*Z,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,W,Z,K=0.01,H=0.1,Y=J.elements,X=Y[0],U=Y[4],G=Y[8],E=Y[1],N=Y[5],F=Y[9],q=Y[2],V=Y[6],O=Y[10];if(Math.abs(U-E)<0.01&&Math.abs(G-q)<0.01&&Math.abs(F-V)<0.01){if(Math.abs(U+E)<0.1&&Math.abs(G+q)<0.1&&Math.abs(F+V)<0.1&&Math.abs(X+N+O-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let z=(X+1)/2,D=(N+1)/2,L=(O+1)/2,M=(U+E)/4,I=(G+q)/4,w=(F+V)/4;if(z>D&&z>L)if(z<0.01)$=0,W=0.707106781,Z=0.707106781;else $=Math.sqrt(z),W=M/$,Z=I/$;else if(D>L)if(D<0.01)$=0.707106781,W=0,Z=0.707106781;else W=Math.sqrt(D),$=M/W,Z=w/W;else if(L<0.01)$=0.707106781,W=0.707106781,Z=0;else Z=Math.sqrt(L),$=I/Z,W=w/Z;return this.set($,W,Z,Q),this}let R=Math.sqrt((V-F)*(V-F)+(G-q)*(G-q)+(E-U)*(E-U));if(Math.abs(R)<0.001)R=1;return this.x=(V-F)/R,this.y=(G-q)/R,this.z=(E-U)/R,this.w=Math.acos((X+N+O-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=WJ(this.x,J.x,Q.x),this.y=WJ(this.y,J.y,Q.y),this.z=WJ(this.z,J.z,Q.z),this.w=WJ(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=WJ(this.x,J,Q),this.y=WJ(this.y,J,Q),this.z=WJ(this.z,J,Q),this.w=WJ(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(WJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class AK extends N9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new SJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new SJ(0,0,J,Q),this.textures=[];let W={width:J,height:Q,depth:$.depth},Z=new oJ(W),K=$.count;for(let H=0;H<K;H++)this.textures[H]=Z.clone(),this.textures[H].isRenderTargetTexture=!0,this.textures[H].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveColorBuffer=$.resolveColorBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this.storeMultisampledColorBuffer=$.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=$.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=$.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let W=0,Z=this.textures.length;W<Z;W++)if(this.textures[W].image.width=J,this.textures[W].image.height=Q,this.textures[W].image.depth=$,this.textures[W].isData3DTexture!==!0)this.textures[W].isArrayTexture=this.textures[W].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let W=Object.assign({},J.textures[Q].image);this.textures[Q].source=new xQ(W)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class aJ extends AK{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class qW extends oJ{constructor(J=null,Q=1,$=1,W=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class _K extends oJ{constructor(J=null,Q=1,$=1,W=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class n0{static{n0.prototype.isMatrix4=!0}constructor(J,Q,$,W,Z,K,H,Y,X,U,G,E,N,F,q,V){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,W,Z,K,H,Y,X,U,G,E,N,F,q,V)}set(J,Q,$,W,Z,K,H,Y,X,U,G,E,N,F,q,V){let O=this.elements;return O[0]=J,O[4]=Q,O[8]=$,O[12]=W,O[1]=Z,O[5]=K,O[9]=H,O[13]=Y,O[2]=X,O[6]=U,O[10]=G,O[14]=E,O[3]=N,O[7]=F,O[11]=q,O[15]=V,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n0().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,W=1/U6.setFromMatrixColumn(J,0).length(),Z=1/U6.setFromMatrixColumn(J,1).length(),K=1/U6.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*W,Q[1]=$[1]*W,Q[2]=$[2]*W,Q[3]=0,Q[4]=$[4]*Z,Q[5]=$[5]*Z,Q[6]=$[6]*Z,Q[7]=0,Q[8]=$[8]*K,Q[9]=$[9]*K,Q[10]=$[10]*K,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,W=J.y,Z=J.z,K=Math.cos($),H=Math.sin($),Y=Math.cos(W),X=Math.sin(W),U=Math.cos(Z),G=Math.sin(Z);if(J.order==="XYZ"){let E=K*U,N=K*G,F=H*U,q=H*G;Q[0]=Y*U,Q[4]=-Y*G,Q[8]=X,Q[1]=N+F*X,Q[5]=E-q*X,Q[9]=-H*Y,Q[2]=q-E*X,Q[6]=F+N*X,Q[10]=K*Y}else if(J.order==="YXZ"){let E=Y*U,N=Y*G,F=X*U,q=X*G;Q[0]=E+q*H,Q[4]=F*H-N,Q[8]=K*X,Q[1]=K*G,Q[5]=K*U,Q[9]=-H,Q[2]=N*H-F,Q[6]=q+E*H,Q[10]=K*Y}else if(J.order==="ZXY"){let E=Y*U,N=Y*G,F=X*U,q=X*G;Q[0]=E-q*H,Q[4]=-K*G,Q[8]=F+N*H,Q[1]=N+F*H,Q[5]=K*U,Q[9]=q-E*H,Q[2]=-K*X,Q[6]=H,Q[10]=K*Y}else if(J.order==="ZYX"){let E=K*U,N=K*G,F=H*U,q=H*G;Q[0]=Y*U,Q[4]=F*X-N,Q[8]=E*X+q,Q[1]=Y*G,Q[5]=q*X+E,Q[9]=N*X-F,Q[2]=-X,Q[6]=H*Y,Q[10]=K*Y}else if(J.order==="YZX"){let E=K*Y,N=K*X,F=H*Y,q=H*X;Q[0]=Y*U,Q[4]=q-E*G,Q[8]=F*G+N,Q[1]=G,Q[5]=K*U,Q[9]=-H*U,Q[2]=-X*U,Q[6]=N*G+F,Q[10]=E-q*G}else if(J.order==="XZY"){let E=K*Y,N=K*X,F=H*Y,q=H*X;Q[0]=Y*U,Q[4]=-G,Q[8]=X*U,Q[1]=E*G+q,Q[5]=K*U,Q[9]=N*G-F,Q[2]=F*G-N,Q[6]=H*U,Q[10]=q*G+E}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(o5,J,a5)}lookAt(J,Q,$){let W=this.elements;if(h8.subVectors(J,Q),h8.lengthSq()===0)h8.z=1;if(h8.normalize(),o9.crossVectors($,h8),o9.lengthSq()===0){if(Math.abs($.z)===1)h8.x+=0.0001;else h8.z+=0.0001;h8.normalize(),o9.crossVectors($,h8)}return o9.normalize(),k$.crossVectors(h8,o9),W[0]=o9.x,W[4]=k$.x,W[8]=h8.x,W[1]=o9.y,W[5]=k$.y,W[9]=h8.y,W[2]=o9.z,W[6]=k$.z,W[10]=h8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,W=Q.elements,Z=this.elements,K=$[0],H=$[4],Y=$[8],X=$[12],U=$[1],G=$[5],E=$[9],N=$[13],F=$[2],q=$[6],V=$[10],O=$[14],R=$[3],z=$[7],D=$[11],L=$[15],M=W[0],I=W[4],w=W[8],B=W[12],_=W[1],d=W[5],j=W[9],b=W[13],Q0=W[2],S=W[6],i=W[10],u=W[14],x=W[3],H0=W[7],n=W[11],W0=W[15];return Z[0]=K*M+H*_+Y*Q0+X*x,Z[4]=K*I+H*d+Y*S+X*H0,Z[8]=K*w+H*j+Y*i+X*n,Z[12]=K*B+H*b+Y*u+X*W0,Z[1]=U*M+G*_+E*Q0+N*x,Z[5]=U*I+G*d+E*S+N*H0,Z[9]=U*w+G*j+E*i+N*n,Z[13]=U*B+G*b+E*u+N*W0,Z[2]=F*M+q*_+V*Q0+O*x,Z[6]=F*I+q*d+V*S+O*H0,Z[10]=F*w+q*j+V*i+O*n,Z[14]=F*B+q*b+V*u+O*W0,Z[3]=R*M+z*_+D*Q0+L*x,Z[7]=R*I+z*d+D*S+L*H0,Z[11]=R*w+z*j+D*i+L*n,Z[15]=R*B+z*b+D*u+L*W0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],W=J[8],Z=J[12],K=J[1],H=J[5],Y=J[9],X=J[13],U=J[2],G=J[6],E=J[10],N=J[14],F=J[3],q=J[7],V=J[11],O=J[15],R=Y*N-X*E,z=H*N-X*G,D=H*E-Y*G,L=K*N-X*U,M=K*E-Y*U,I=K*G-H*U;return Q*(q*R-V*z+O*D)-$*(F*R-V*L+O*M)+W*(F*z-q*L+O*I)-Z*(F*D-q*M+V*I)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],W=J[8],Z=J[1],K=J[5],H=J[9],Y=J[2],X=J[6],U=J[10];return Q*(K*U-H*X)-$*(Z*U-H*Y)+W*(Z*X-K*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let W=this.elements;if(J.isVector3)W[12]=J.x,W[13]=J.y,W[14]=J.z;else W[12]=J,W[13]=Q,W[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],G=J[9],E=J[10],N=J[11],F=J[12],q=J[13],V=J[14],O=J[15],R=Q*H-$*K,z=Q*Y-W*K,D=Q*X-Z*K,L=$*Y-W*H,M=$*X-Z*H,I=W*X-Z*Y,w=U*q-G*F,B=U*V-E*F,_=U*O-N*F,d=G*V-E*q,j=G*O-N*q,b=E*O-N*V,Q0=R*b-z*j+D*d+L*_-M*B+I*w;if(Q0===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/Q0;return J[0]=(H*b-Y*j+X*d)*S,J[1]=(W*j-$*b-Z*d)*S,J[2]=(q*I-V*M+O*L)*S,J[3]=(E*M-G*I-N*L)*S,J[4]=(Y*_-K*b-X*B)*S,J[5]=(Q*b-W*_+Z*B)*S,J[6]=(V*D-F*I-O*z)*S,J[7]=(U*I-E*D+N*z)*S,J[8]=(K*j-H*_+X*w)*S,J[9]=($*_-Q*j-Z*w)*S,J[10]=(F*M-q*D+O*R)*S,J[11]=(G*D-U*M-N*R)*S,J[12]=(H*B-K*d-Y*w)*S,J[13]=(Q*d-$*B+W*w)*S,J[14]=(q*z-F*L-V*R)*S,J[15]=(U*L-G*z+E*R)*S,this}scale(J){let Q=this.elements,$=J.x,W=J.y,Z=J.z;return Q[0]*=$,Q[4]*=W,Q[8]*=Z,Q[1]*=$,Q[5]*=W,Q[9]*=Z,Q[2]*=$,Q[6]*=W,Q[10]*=Z,Q[3]*=$,Q[7]*=W,Q[11]*=Z,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],W=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,W))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),W=Math.sin(Q),Z=1-$,K=J.x,H=J.y,Y=J.z,X=Z*K,U=Z*H;return this.set(X*K+$,X*H-W*Y,X*Y+W*H,0,X*H+W*Y,U*H+$,U*Y-W*K,0,X*Y-W*H,U*Y+W*K,Z*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,W,Z,K){return this.set(1,$,Z,0,J,1,K,0,Q,W,1,0,0,0,0,1),this}compose(J,Q,$){let W=this.elements,Z=Q._x,K=Q._y,H=Q._z,Y=Q._w,X=Z+Z,U=K+K,G=H+H,E=Z*X,N=Z*U,F=Z*G,q=K*U,V=K*G,O=H*G,R=Y*X,z=Y*U,D=Y*G,L=$.x,M=$.y,I=$.z;return W[0]=(1-(q+O))*L,W[1]=(N+D)*L,W[2]=(F-z)*L,W[3]=0,W[4]=(N-D)*M,W[5]=(1-(E+O))*M,W[6]=(V+R)*M,W[7]=0,W[8]=(F+z)*I,W[9]=(V-R)*I,W[10]=(1-(E+q))*I,W[11]=0,W[12]=J.x,W[13]=J.y,W[14]=J.z,W[15]=1,this}decompose(J,Q,$){let W=this.elements;J.x=W[12],J.y=W[13],J.z=W[14];let Z=this.determinantAffine();if(Z===0)return $.set(1,1,1),Q.identity(),this;let K=U6.set(W[0],W[1],W[2]).length(),H=U6.set(W[4],W[5],W[6]).length(),Y=U6.set(W[8],W[9],W[10]).length();if(Z<0)K=-K;W9.copy(this);let X=1/K,U=1/H,G=1/Y;return W9.elements[0]*=X,W9.elements[1]*=X,W9.elements[2]*=X,W9.elements[4]*=U,W9.elements[5]*=U,W9.elements[6]*=U,W9.elements[8]*=G,W9.elements[9]*=G,W9.elements[10]*=G,Q.setFromRotationMatrix(W9),$.x=K,$.y=H,$.z=Y,this}makePerspective(J,Q,$,W,Z,K,H=2000,Y=!1){let X=this.elements,U=2*Z/(Q-J),G=2*Z/($-W),E=(Q+J)/(Q-J),N=($+W)/($-W),F,q;if(Y)F=Z/(K-Z),q=K*Z/(K-Z);else if(H===2000)F=-(K+Z)/(K-Z),q=-2*K*Z/(K-Z);else if(H===2001)F=-K/(K-Z),q=-K*Z/(K-Z);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=E,X[12]=0,X[1]=0,X[5]=G,X[9]=N,X[13]=0,X[2]=0,X[6]=0,X[10]=F,X[14]=q,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,Q,$,W,Z,K,H=2000,Y=!1){let X=this.elements,U=2/(Q-J),G=2/($-W),E=-(Q+J)/(Q-J),N=-($+W)/($-W),F,q;if(Y)F=1/(K-Z),q=K/(K-Z);else if(H===2000)F=-2/(K-Z),q=-(K+Z)/(K-Z);else if(H===2001)F=-1/(K-Z),q=-Z/(K-Z);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=0,X[12]=E,X[1]=0,X[5]=G,X[9]=0,X[13]=N,X[2]=0,X[6]=0,X[10]=F,X[14]=q,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let W=0;W<16;W++)if(Q[W]!==$[W])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var U6=new T,W9=new n0,o5=new T(0,0,0),a5=new T(1,1,1),o9=new T,k$=new T,h8=new T,nH=new n0,sH=new VJ;class Y9{constructor(J=0,Q=0,$=0,W=Y9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=W}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,W=this._order){return this._x=J,this._y=Q,this._z=$,this._order=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let W=J.elements,Z=W[0],K=W[4],H=W[8],Y=W[1],X=W[5],U=W[9],G=W[2],E=W[6],N=W[10];switch(Q){case"XYZ":if(this._y=Math.asin(WJ(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-U,N),this._z=Math.atan2(-K,Z);else this._x=Math.atan2(E,X),this._z=0;break;case"YXZ":if(this._x=Math.asin(-WJ(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(H,N),this._z=Math.atan2(Y,X);else this._y=Math.atan2(-G,Z),this._z=0;break;case"ZXY":if(this._x=Math.asin(WJ(E,-1,1)),Math.abs(E)<0.9999999)this._y=Math.atan2(-G,N),this._z=Math.atan2(-K,X);else this._y=0,this._z=Math.atan2(Y,Z);break;case"ZYX":if(this._y=Math.asin(-WJ(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(E,N),this._z=Math.atan2(Y,Z);else this._x=0,this._z=Math.atan2(-K,X);break;case"YZX":if(this._z=Math.asin(WJ(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,X),this._y=Math.atan2(-G,Z);else this._x=0,this._y=Math.atan2(H,N);break;case"XZY":if(this._z=Math.asin(-WJ(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(E,X),this._y=Math.atan2(H,Z);else this._x=Math.atan2(-U,N),this._y=0;break;default:x0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return nH.makeRotationFromQuaternion(J),this.setFromRotationMatrix(nH,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return sH.setFromEuler(this),this.setFromQuaternion(sH,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Y9.DEFAULT_ORDER="XYZ";class OW{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var r5=0,iH=new T,G6=new VJ,j9=new n0,M$=new T,XQ=new T,t5=new T,e5=new VJ,oH=new T(1,0,0),aH=new T(0,1,0),rH=new T(0,0,1),tH={type:"added"},JG={type:"removed"},N6={type:"childadded",child:null},KZ={type:"childremoved",child:null};class IJ extends N9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:r5++}),this.uuid=i8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=IJ.DEFAULT_UP.clone();let J=new T,Q=new Y9,$=new VJ,W=new T(1,1,1);function Z(){$.setFromEuler(Q,!1)}function K(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(Z),$._onChange(K),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:W},modelViewMatrix:{value:new n0},normalMatrix:{value:new e0}}),this.matrix=new n0,this.matrixWorld=new n0,this.matrixAutoUpdate=IJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=IJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new OW,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return G6.setFromAxisAngle(J,Q),this.quaternion.multiply(G6),this}rotateOnWorldAxis(J,Q){return G6.setFromAxisAngle(J,Q),this.quaternion.premultiply(G6),this}rotateX(J){return this.rotateOnAxis(oH,J)}rotateY(J){return this.rotateOnAxis(aH,J)}rotateZ(J){return this.rotateOnAxis(rH,J)}translateOnAxis(J,Q){return iH.copy(J).applyQuaternion(this.quaternion),this.position.add(iH.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(oH,J)}translateY(J){return this.translateOnAxis(aH,J)}translateZ(J){return this.translateOnAxis(rH,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(j9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)M$.copy(J);else M$.set(J,Q,$);let W=this.parent;if(this.updateWorldMatrix(!0,!1),XQ.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)j9.lookAt(XQ,M$,this.up);else j9.lookAt(M$,XQ,this.up);if(this.quaternion.setFromRotationMatrix(j9),W)j9.extractRotation(W.matrixWorld),G6.setFromRotationMatrix(j9),this.quaternion.premultiply(G6.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return i0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(tH),N6.child=J,this.dispatchEvent(N6),N6.child=null;else i0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(JG),KZ.child=J,this.dispatchEvent(KZ),KZ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),j9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),j9.multiply(J.parent.matrixWorld);return J.applyMatrix4(j9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(tH),N6.child=J,this.dispatchEvent(N6),N6.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,W=this.children.length;$<W;$++){let K=this.children[$].getObjectByProperty(J,Q);if(K!==void 0)return K}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let W=this.children;for(let Z=0,K=W.length;Z<K;Z++)W[Z].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(XQ,J,t5),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(XQ,e5,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(J){J(this);let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:W}=J,Z=this.matrix.elements;Z[12]+=Q-Z[0]*Q-Z[4]*$-Z[8]*W,Z[13]+=$-Z[1]*Q-Z[5]*$-Z[9]*W,Z[14]+=W-Z[2]*Q-Z[6]*$-Z[10]*W}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let W=this.parent;if(J===!0&&W!==null)W.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let Z=this.children;for(let K=0,H=Z.length;K<H;K++)Z[K].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let W={};if(W.uuid=this.uuid,W.type=this.type,W.name=this.name,W.castShadow=this.castShadow,W.receiveShadow=this.receiveShadow,W.visible=this.visible,W.frustumCulled=this.frustumCulled,W.renderOrder=this.renderOrder,W.static=this.static,W.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)W.userData=this.userData;if(W.layers=this.layers.mask,W.matrix=this.matrix.toArray(),W.up=this.up.toArray(),this.pivot!==null)W.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)W.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)W.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(W.type="InstancedMesh",W.count=this.count,W.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)W.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(W.type="BatchedMesh",W.perObjectFrustumCulled=this.perObjectFrustumCulled,W.sortObjects=this.sortObjects,W.drawRanges=this._drawRanges,W.reservedRanges=this._reservedRanges,W.geometryInfo=this._geometryInfo.map((H)=>({...H,boundingBox:H.boundingBox?H.boundingBox.toJSON():void 0,boundingSphere:H.boundingSphere?H.boundingSphere.toJSON():void 0})),W.instanceInfo=this._instanceInfo.map((H)=>({...H})),W.availableInstanceIds=this._availableInstanceIds.slice(),W.availableGeometryIds=this._availableGeometryIds.slice(),W.nextIndexStart=this._nextIndexStart,W.nextVertexStart=this._nextVertexStart,W.geometryCount=this._geometryCount,W.maxInstanceCount=this._maxInstanceCount,W.maxVertexCount=this._maxVertexCount,W.maxIndexCount=this._maxIndexCount,W.geometryInitialized=this._geometryInitialized,W.matricesTexture=this._matricesTexture.toJSON(J),W.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)W.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)W.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)W.boundingBox=this.boundingBox.toJSON()}function Z(H,Y){if(H[Y.uuid]===void 0)H[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)W.background=this.background.toJSON();else if(this.background.isTexture)W.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)W.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){W.geometry=Z(J.geometries,this.geometry);let H=this.geometry.parameters;if(H!==void 0&&H.shapes!==void 0){let Y=H.shapes;if(Array.isArray(Y))for(let X=0,U=Y.length;X<U;X++){let G=Y[X];Z(J.shapes,G)}else Z(J.shapes,Y)}}if(this.isSkinnedMesh){if(W.bindMode=this.bindMode,W.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)Z(J.skeletons,this.skeleton),W.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let H=[];for(let Y=0,X=this.material.length;Y<X;Y++)H.push(Z(J.materials,this.material[Y]));W.material=H}else W.material=Z(J.materials,this.material);if(this.children.length>0){W.children=[];for(let H=0;H<this.children.length;H++)W.children.push(this.children[H].toJSON(J).object)}if(this.animations.length>0){W.animations=[];for(let H=0;H<this.animations.length;H++){let Y=this.animations[H];W.animations.push(Z(J.animations,Y))}}if(Q){let H=K(J.geometries),Y=K(J.materials),X=K(J.textures),U=K(J.images),G=K(J.shapes),E=K(J.skeletons),N=K(J.animations),F=K(J.nodes);if(H.length>0)$.geometries=H;if(Y.length>0)$.materials=Y;if(X.length>0)$.textures=X;if(U.length>0)$.images=U;if(G.length>0)$.shapes=G;if(E.length>0)$.skeletons=E;if(N.length>0)$.animations=N;if(F.length>0)$.nodes=F}return $.object=W,$;function K(H){let Y=[];for(let X in H){let U=H[X];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let W=J.children[$];this.add(W.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}IJ.DEFAULT_UP=new T(0,1,0);IJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;IJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _J extends IJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var QG={type:"move"};class gQ{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new _J,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new _J,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new _J,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let W=null,Z=null,K=null,H=this._targetRay,Y=this._grip,X=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(X&&J.hand){K=!0;for(let q of J.hand.values()){let V=Q.getJointPose(q,$),O=this._getHandJoint(X,q);if(V!==null)O.matrix.fromArray(V.transform.matrix),O.matrix.decompose(O.position,O.rotation,O.scale),O.matrixWorldNeedsUpdate=!0,O.jointRadius=V.radius;O.visible=V!==null}let U=X.joints["index-finger-tip"],G=X.joints["thumb-tip"],E=U.position.distanceTo(G.position),N=0.02,F=0.005;if(X.inputState.pinching&&E>N+F)X.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!X.inputState.pinching&&E<=N-F)X.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(Z=Q.getPose(J.gripSpace,$),Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(H!==null){if(W=Q.getPose(J.targetRaySpace,$),W===null&&Z!==null)W=Z;if(W!==null){if(H.matrix.fromArray(W.transform.matrix),H.matrix.decompose(H.position,H.rotation,H.scale),H.matrixWorldNeedsUpdate=!0,W.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(W.linearVelocity);else H.hasLinearVelocity=!1;if(W.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(W.angularVelocity);else H.hasAngularVelocity=!1;this.dispatchEvent(QG)}}}if(H!==null)H.visible=W!==null;if(Y!==null)Y.visible=Z!==null;if(X!==null)X.visible=K!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new _J;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var wX={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},a9={h:0,s:0,l:0},C$={h:0,s:0,l:0};function HZ(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class y0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let W=J;if(W&&W.isColor)this.copy(W);else if(typeof W==="number")this.setHex(W);else if(typeof W==="string")this.setStyle(W)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,KJ.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,W=KJ.workingColorSpace){return this.r=J,this.g=Q,this.b=$,KJ.colorSpaceToWorking(this,W),this}setHSL(J,Q,$,W=KJ.workingColorSpace){if(J=PK(J,1),Q=WJ(Q,0,1),$=WJ($,0,1),Q===0)this.r=this.g=this.b=$;else{let Z=$<=0.5?$*(1+Q):$+Q-$*Q,K=2*$-Z;this.r=HZ(K,Z,J+0.3333333333333333),this.g=HZ(K,Z,J),this.b=HZ(K,Z,J-0.3333333333333333)}return KJ.colorSpaceToWorking(this,W),this}setStyle(J,Q="srgb"){function $(Z){if(Z===void 0)return;if(parseFloat(Z)<1)x0("Color: Alpha component of "+J+" will be ignored.")}let W;if(W=/^(\w+)\(([^\)]*)\)/.exec(J)){let Z,K=W[1],H=W[2];switch(K){case"rgb":case"rgba":if(Z=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(Z[4]),this.setRGB(Math.min(255,parseInt(Z[1],10))/255,Math.min(255,parseInt(Z[2],10))/255,Math.min(255,parseInt(Z[3],10))/255,Q);if(Z=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(Z[4]),this.setRGB(Math.min(100,parseInt(Z[1],10))/100,Math.min(100,parseInt(Z[2],10))/100,Math.min(100,parseInt(Z[3],10))/100,Q);break;case"hsl":case"hsla":if(Z=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(Z[4]),this.setHSL(parseFloat(Z[1])/360,parseFloat(Z[2])/100,parseFloat(Z[3])/100,Q);break;default:x0("Color: Unknown color model "+J)}}else if(W=/^\#([A-Fa-f\d]+)$/.exec(J)){let Z=W[1],K=Z.length;if(K===3)return this.setRGB(parseInt(Z.charAt(0),16)/15,parseInt(Z.charAt(1),16)/15,parseInt(Z.charAt(2),16)/15,Q);else if(K===6)return this.setHex(parseInt(Z,16),Q);else x0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=wX[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else x0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=x9(J.r),this.g=x9(J.g),this.b=x9(J.b),this}copyLinearToSRGB(J){return this.r=I6(J.r),this.g=I6(J.g),this.b=I6(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return KJ.workingToColorSpace(V8.copy(this),J),Math.round(WJ(V8.r*255,0,255))*65536+Math.round(WJ(V8.g*255,0,255))*256+Math.round(WJ(V8.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=KJ.workingColorSpace){KJ.workingToColorSpace(V8.copy(this),Q);let{r:$,g:W,b:Z}=V8,K=Math.max($,W,Z),H=Math.min($,W,Z),Y,X,U=(H+K)/2;if(H===K)Y=0,X=0;else{let G=K-H;switch(X=U<=0.5?G/(K+H):G/(2-K-H),K){case $:Y=(W-Z)/G+(W<Z?6:0);break;case W:Y=(Z-$)/G+2;break;case Z:Y=($-W)/G+4;break}Y/=6}return J.h=Y,J.s=X,J.l=U,J}getRGB(J,Q=KJ.workingColorSpace){return KJ.workingToColorSpace(V8.copy(this),Q),J.r=V8.r,J.g=V8.g,J.b=V8.b,J}getStyle(J="srgb"){KJ.workingToColorSpace(V8.copy(this),J);let{r:Q,g:$,b:W}=V8;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${W.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(W*255)})`}offsetHSL(J,Q,$){return this.getHSL(a9),this.setHSL(a9.h+J,a9.s+Q,a9.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(a9),J.getHSL(C$);let $=kQ(a9.h,C$.h,Q),W=kQ(a9.s,C$.s,Q),Z=kQ(a9.l,C$.l,Q);return this.setHSL($,W,Z),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,W=this.b,Z=J.elements;return this.r=Z[0]*Q+Z[3]*$+Z[6]*W,this.g=Z[1]*Q+Z[4]*$+Z[7]*W,this.b=Z[2]*Q+Z[5]*$+Z[8]*W,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var V8=new y0;y0.NAMES=wX;class m7{constructor(J,Q=0.00025){this.isFogExp2=!0,this.name="",this.color=new y0(J),this.density=Q}clone(){return new m7(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class g6 extends IJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Y9,this.environmentIntensity=1,this.environmentRotation=new Y9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var Z9=new T,y9=new T,YZ=new T,v9=new T,E6=new T,F6=new T,eH=new T,XZ=new T,UZ=new T,GZ=new T,NZ=new SJ,EZ=new SJ,FZ=new SJ;class x8{constructor(J=new T,Q=new T,$=new T){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,W){W.subVectors($,Q),Z9.subVectors(J,Q),W.cross(Z9);let Z=W.lengthSq();if(Z>0)return W.multiplyScalar(1/Math.sqrt(Z));return W.set(0,0,0)}static getBarycoord(J,Q,$,W,Z){Z9.subVectors(W,Q),y9.subVectors($,Q),YZ.subVectors(J,Q);let K=Z9.dot(Z9),H=Z9.dot(y9),Y=Z9.dot(YZ),X=y9.dot(y9),U=y9.dot(YZ),G=K*X-H*H;if(G===0)return Z.set(0,0,0),null;let E=1/G,N=(X*Y-H*U)*E,F=(K*U-H*Y)*E;return Z.set(1-N-F,F,N)}static containsPoint(J,Q,$,W){if(this.getBarycoord(J,Q,$,W,v9)===null)return!1;return v9.x>=0&&v9.y>=0&&v9.x+v9.y<=1}static getInterpolation(J,Q,$,W,Z,K,H,Y){if(this.getBarycoord(J,Q,$,W,v9)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(Z,v9.x),Y.addScaledVector(K,v9.y),Y.addScaledVector(H,v9.z),Y}static getInterpolatedAttribute(J,Q,$,W,Z,K){return NZ.setScalar(0),EZ.setScalar(0),FZ.setScalar(0),NZ.fromBufferAttribute(J,Q),EZ.fromBufferAttribute(J,$),FZ.fromBufferAttribute(J,W),K.setScalar(0),K.addScaledVector(NZ,Z.x),K.addScaledVector(EZ,Z.y),K.addScaledVector(FZ,Z.z),K}static isFrontFacing(J,Q,$,W){return Z9.subVectors($,Q),y9.subVectors(J,Q),Z9.cross(y9).dot(W)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,W){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[W]),this}setFromAttributeAndIndices(J,Q,$,W){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,W),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return Z9.subVectors(this.c,this.b),y9.subVectors(this.a,this.b),Z9.cross(y9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return x8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return x8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,W,Z){return x8.getInterpolation(J,this.a,this.b,this.c,Q,$,W,Z)}containsPoint(J){return x8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return x8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,W=this.b,Z=this.c,K,H;E6.subVectors(W,$),F6.subVectors(Z,$),XZ.subVectors(J,$);let Y=E6.dot(XZ),X=F6.dot(XZ);if(Y<=0&&X<=0)return Q.copy($);UZ.subVectors(J,W);let U=E6.dot(UZ),G=F6.dot(UZ);if(U>=0&&G<=U)return Q.copy(W);let E=Y*G-U*X;if(E<=0&&Y>=0&&U<=0)return K=Y/(Y-U),Q.copy($).addScaledVector(E6,K);GZ.subVectors(J,Z);let N=E6.dot(GZ),F=F6.dot(GZ);if(F>=0&&N<=F)return Q.copy(Z);let q=N*X-Y*F;if(q<=0&&X>=0&&F<=0)return H=X/(X-F),Q.copy($).addScaledVector(F6,H);let V=U*F-N*G;if(V<=0&&G-U>=0&&N-F>=0)return eH.subVectors(Z,W),H=(G-U)/(G-U+(N-F)),Q.copy(W).addScaledVector(eH,H);let O=1/(V+q+E);return K=q*O,H=E*O,Q.copy($).addScaledVector(E6,K).addScaledVector(F6,H)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class z8{constructor(J=new T(1/0,1/0,1/0),Q=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(K9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(K9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=K9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let Z=$.getAttribute("position");if(Q===!0&&Z!==void 0&&J.isInstancedMesh!==!0)for(let K=0,H=Z.count;K<H;K++){if(J.isMesh===!0)J.getVertexPosition(K,K9);else K9.fromBufferAttribute(Z,K);K9.applyMatrix4(J.matrixWorld),this.expandByPoint(K9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();z$.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();z$.copy($.boundingBox)}z$.applyMatrix4(J.matrixWorld),this.union(z$)}}let W=J.children;for(let Z=0,K=W.length;Z<K;Z++)this.expandByObject(W[Z],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,K9),K9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(UQ),P$.subVectors(this.max,UQ),q6.subVectors(J.a,UQ),O6.subVectors(J.b,UQ),R6.subVectors(J.c,UQ),r9.subVectors(O6,q6),t9.subVectors(R6,O6),I7.subVectors(q6,R6);let Q=[0,-r9.z,r9.y,0,-t9.z,t9.y,0,-I7.z,I7.y,r9.z,0,-r9.x,t9.z,0,-t9.x,I7.z,0,-I7.x,-r9.y,r9.x,0,-t9.y,t9.x,0,-I7.y,I7.x,0];if(!qZ(Q,q6,O6,R6,P$))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!qZ(Q,q6,O6,R6,P$))return!1;return I$.crossVectors(r9,t9),Q=[I$.x,I$.y,I$.z],qZ(Q,q6,O6,R6,P$)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,K9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(K9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return f9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),f9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),f9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),f9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),f9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),f9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),f9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),f9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(f9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var f9=[new T,new T,new T,new T,new T,new T,new T,new T],K9=new T,z$=new z8,q6=new T,O6=new T,R6=new T,r9=new T,t9=new T,I7=new T,UQ=new T,P$=new T,I$=new T,A7=new T;function qZ(J,Q,$,W,Z){for(let K=0,H=J.length-3;K<=H;K+=3){A7.fromArray(J,K);let Y=Z.x*Math.abs(A7.x)+Z.y*Math.abs(A7.y)+Z.z*Math.abs(A7.z),X=Q.dot(A7),U=$.dot(A7),G=W.dot(A7);if(Math.max(-Math.max(X,U,G),Math.min(X,U,G))>Y)return!1}return!0}var eJ=new T,A$=new $0,$G=0;class sJ extends N9{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$G++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let W=0,Z=this.itemSize;W<Z;W++)this.array[J+W]=Q.array[$+W];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)A$.fromBufferAttribute(this,Q),A$.applyMatrix3(J),this.setXY(Q,A$.x,A$.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)eJ.fromBufferAttribute(this,Q),eJ.applyMatrix3(J),this.setXYZ(Q,eJ.x,eJ.y,eJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)eJ.fromBufferAttribute(this,Q),eJ.applyMatrix4(J),this.setXYZ(Q,eJ.x,eJ.y,eJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)eJ.fromBufferAttribute(this,Q),eJ.applyNormalMatrix(J),this.setXYZ(Q,eJ.x,eJ.y,eJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)eJ.fromBufferAttribute(this,Q),eJ.transformDirection(J),this.setXYZ(Q,eJ.x,eJ.y,eJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=H9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=wJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=H9(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=wJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=H9(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=wJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=H9(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=wJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=H9(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=wJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=wJ(Q,this.array),$=wJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,W){if(J*=this.itemSize,this.normalized)Q=wJ(Q,this.array),$=wJ($,this.array),W=wJ(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=W,this}setXYZW(J,Q,$,W,Z){if(J*=this.itemSize,this.normalized)Q=wJ(Q,this.array),$=wJ($,this.array),W=wJ(W,this.array),Z=wJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=W,this.array[J+3]=Z,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}}class RW extends sJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class LW extends sJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class UJ extends sJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var WG=new z8,GQ=new T,OZ=new T;class p8{constructor(J=new T,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else WG.setFromPoints(J).getCenter($);let W=0;for(let Z=0,K=J.length;Z<K;Z++)W=Math.max(W,$.distanceToSquared(J[Z]));return this.radius=Math.sqrt(W),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;GQ.subVectors(J,this.center);let Q=GQ.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),W=($-this.radius)*0.5;this.center.addScaledVector(GQ,W/$),this.radius+=W}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else OZ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(GQ.copy(J.center).add(OZ)),this.expandByPoint(GQ.copy(J.center).sub(OZ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var ZG=0,n8=new n0,RZ=new IJ,L6=new T,b8=new z8,NQ=new z8,U8=new T;class yJ extends N9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZG++}),this.uuid=i8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((_5(J))?LW:RW)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let Z=new e0().getNormalMatrix(J);$.applyNormalMatrix(Z),$.needsUpdate=!0}let W=this.attributes.tangent;if(W!==void 0)W.transformDirection(J),W.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return n8.makeRotationFromQuaternion(J),this.applyMatrix4(n8),this}rotateX(J){return n8.makeRotationX(J),this.applyMatrix4(n8),this}rotateY(J){return n8.makeRotationY(J),this.applyMatrix4(n8),this}rotateZ(J){return n8.makeRotationZ(J),this.applyMatrix4(n8),this}translate(J,Q,$){return n8.makeTranslation(J,Q,$),this.applyMatrix4(n8),this}scale(J,Q,$){return n8.makeScale(J,Q,$),this.applyMatrix4(n8),this}lookAt(J){return RZ.lookAt(J),RZ.updateMatrix(),this.applyMatrix4(RZ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(L6).negate(),this.translate(L6.x,L6.y,L6.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let W=0,Z=J.length;W<Z;W++){let K=J[W];$.push(K.x,K.y,K.z||0)}this.setAttribute("position",new UJ($,3))}else{let $=Math.min(J.length,Q.count);for(let W=0;W<$;W++){let Z=J[W];Q.setXYZ(W,Z.x,Z.y,Z.z||0)}if(J.length>Q.count)x0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new z8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){i0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,W=Q.length;$<W;$++){let Z=Q[$];if(b8.setFromBufferAttribute(Z),this.morphTargetsRelative)U8.addVectors(this.boundingBox.min,b8.min),this.boundingBox.expandByPoint(U8),U8.addVectors(this.boundingBox.max,b8.max),this.boundingBox.expandByPoint(U8);else this.boundingBox.expandByPoint(b8.min),this.boundingBox.expandByPoint(b8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))i0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new p8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){i0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(J){let $=this.boundingSphere.center;if(b8.setFromBufferAttribute(J),Q)for(let Z=0,K=Q.length;Z<K;Z++){let H=Q[Z];if(NQ.setFromBufferAttribute(H),this.morphTargetsRelative)U8.addVectors(b8.min,NQ.min),b8.expandByPoint(U8),U8.addVectors(b8.max,NQ.max),b8.expandByPoint(U8);else b8.expandByPoint(NQ.min),b8.expandByPoint(NQ.max)}b8.getCenter($);let W=0;for(let Z=0,K=J.count;Z<K;Z++)U8.fromBufferAttribute(J,Z),W=Math.max(W,$.distanceToSquared(U8));if(Q)for(let Z=0,K=Q.length;Z<K;Z++){let H=Q[Z],Y=this.morphTargetsRelative;for(let X=0,U=H.count;X<U;X++){if(U8.fromBufferAttribute(H,X),Y)L6.fromBufferAttribute(J,X),U8.add(L6);W=Math.max(W,$.distanceToSquared(U8))}}if(this.boundingSphere.radius=Math.sqrt(W),isNaN(this.boundingSphere.radius))i0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){i0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:W,uv:Z}=Q,K=this.getAttribute("tangent");if(K===void 0||K.count!==$.count)K=new sJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",K);let H=[],Y=[];for(let w=0;w<$.count;w++)H[w]=new T,Y[w]=new T;let X=new T,U=new T,G=new T,E=new $0,N=new $0,F=new $0,q=new T,V=new T;function O(w,B,_){X.fromBufferAttribute($,w),U.fromBufferAttribute($,B),G.fromBufferAttribute($,_),E.fromBufferAttribute(Z,w),N.fromBufferAttribute(Z,B),F.fromBufferAttribute(Z,_),U.sub(X),G.sub(X),N.sub(E),F.sub(E);let d=1/(N.x*F.y-F.x*N.y);if(!isFinite(d))return;q.copy(U).multiplyScalar(F.y).addScaledVector(G,-N.y).multiplyScalar(d),V.copy(G).multiplyScalar(N.x).addScaledVector(U,-F.x).multiplyScalar(d),H[w].add(q),H[B].add(q),H[_].add(q),Y[w].add(V),Y[B].add(V),Y[_].add(V)}let R=this.groups;if(R.length===0)R=[{start:0,count:J.count}];for(let w=0,B=R.length;w<B;++w){let _=R[w],d=_.start,j=_.count;for(let b=d,Q0=d+j;b<Q0;b+=3)O(J.getX(b+0),J.getX(b+1),J.getX(b+2))}let z=new T,D=new T,L=new T,M=new T;function I(w){L.fromBufferAttribute(W,w),M.copy(L);let B=H[w];z.copy(B),z.sub(L.multiplyScalar(L.dot(B))).normalize(),D.crossVectors(M,B);let d=D.dot(Y[w])<0?-1:1;K.setXYZW(w,z.x,z.y,z.z,d)}for(let w=0,B=R.length;w<B;++w){let _=R[w],d=_.start,j=_.count;for(let b=d,Q0=d+j;b<Q0;b+=3)I(J.getX(b+0)),I(J.getX(b+1)),I(J.getX(b+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new sJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let E=0,N=$.count;E<N;E++)$.setXYZ(E,0,0,0);let W=new T,Z=new T,K=new T,H=new T,Y=new T,X=new T,U=new T,G=new T;if(J)for(let E=0,N=J.count;E<N;E+=3){let F=J.getX(E+0),q=J.getX(E+1),V=J.getX(E+2);W.fromBufferAttribute(Q,F),Z.fromBufferAttribute(Q,q),K.fromBufferAttribute(Q,V),U.subVectors(K,Z),G.subVectors(W,Z),U.cross(G),H.fromBufferAttribute($,F),Y.fromBufferAttribute($,q),X.fromBufferAttribute($,V),H.add(U),Y.add(U),X.add(U),$.setXYZ(F,H.x,H.y,H.z),$.setXYZ(q,Y.x,Y.y,Y.z),$.setXYZ(V,X.x,X.y,X.z)}else for(let E=0,N=Q.count;E<N;E+=3)W.fromBufferAttribute(Q,E+0),Z.fromBufferAttribute(Q,E+1),K.fromBufferAttribute(Q,E+2),U.subVectors(K,Z),G.subVectors(W,Z),U.cross(G),$.setXYZ(E+0,U.x,U.y,U.z),$.setXYZ(E+1,U.x,U.y,U.z),$.setXYZ(E+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)U8.fromBufferAttribute(J,Q),U8.normalize(),J.setXYZ(Q,U8.x,U8.y,U8.z)}toNonIndexed(){function J(H,Y){let{array:X,itemSize:U,normalized:G}=H,E=new X.constructor(Y.length*U),N=0,F=0;for(let q=0,V=Y.length;q<V;q++){if(H.isInterleavedBufferAttribute)N=Y[q]*H.data.stride+H.offset;else N=Y[q]*U;for(let O=0;O<U;O++)E[F++]=X[N++]}return new sJ(E,U,G)}if(this.index===null)return x0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new yJ,$=this.index.array,W=this.attributes;for(let H in W){let Y=W[H],X=J(Y,$);Q.setAttribute(H,X)}let Z=this.morphAttributes;for(let H in Z){let Y=[],X=Z[H];for(let U=0,G=X.length;U<G;U++){let E=X[U],N=J(E,$);Y.push(N)}Q.morphAttributes[H]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;for(let H=0,Y=K.length;H<Y;H++){let X=K[H];Q.addGroup(X.start,X.count,X.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let X in Y)if(Y[X]!==void 0)J[X]=Y[X];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let X=$[Y];J.data.attributes[Y]=X.toJSON(J.data)}let W={},Z=!1;for(let Y in this.morphAttributes){let X=this.morphAttributes[Y],U=[];for(let G=0,E=X.length;G<E;G++){let N=X[G];U.push(N.toJSON(J.data))}if(U.length>0)W[Y]=U,Z=!0}if(Z)J.data.morphAttributes=W,J.data.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;if(K.length>0)J.data.groups=JSON.parse(JSON.stringify(K));let H=this.boundingSphere;if(H!==null)J.data.boundingSphere=H.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let W=J.attributes;for(let X in W){let U=W[X];this.setAttribute(X,U.clone(Q))}let Z=J.morphAttributes;for(let X in Z){let U=[],G=Z[X];for(let E=0,N=G.length;E<N;E++)U.push(G[E].clone(Q));this.morphAttributes[X]=U}this.morphTargetsRelative=J.morphTargetsRelative;let K=J.groups;for(let X=0,U=K.length;X<U;X++){let G=K[X];this.addGroup(G.start,G.count,G.materialIndex)}let H=J.boundingBox;if(H!==null)this.boundingBox=H.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class p6{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=i8()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,$){J*=this.stride,$*=Q.stride;for(let W=0,Z=this.stride;W<Z;W++)this.array[J+W]=Q.array[$+W];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=i8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),$=new this.constructor(Q,this.stride);return $.setUsage(this.usage),$}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=i8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let Q={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return Q.usage=this.usage,Q}}var C8=new T;class Q7{constructor(J,Q,$,W=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=$,this.normalized=W}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,$=this.data.count;Q<$;Q++)C8.fromBufferAttribute(this,Q),C8.applyMatrix4(J),this.setXYZ(Q,C8.x,C8.y,C8.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)C8.fromBufferAttribute(this,Q),C8.applyNormalMatrix(J),this.setXYZ(Q,C8.x,C8.y,C8.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)C8.fromBufferAttribute(this,Q),C8.transformDirection(J),this.setXYZ(Q,C8.x,C8.y,C8.z);return this}getComponent(J,Q){let $=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)$=H9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=wJ($,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=$,this}setX(J,Q){if(this.normalized)Q=wJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=wJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=wJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=wJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=H9(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=H9(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=H9(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=H9(Q,this.array);return Q}setXY(J,Q,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=wJ(Q,this.array),$=wJ($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this}setXYZ(J,Q,$,W){if(J=J*this.data.stride+this.offset,this.normalized)Q=wJ(Q,this.array),$=wJ($,this.array),W=wJ(W,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=W,this}setXYZW(J,Q,$,W,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=wJ(Q,this.array),$=wJ($,this.array),W=wJ(W,this.array),Z=wJ(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=W,this.data.array[J+3]=Z,this}clone(J){if(J===void 0){zQ("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let W=$*this.data.stride+this.offset;for(let Z=0;Z<this.itemSize;Z++)Q.push(this.data.array[W+Z])}return new sJ(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new Q7(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){zQ("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let W=$*this.data.stride+this.offset;for(let Z=0;Z<this.itemSize;Z++)Q.push(this.data.array[W+Z])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var LZ=new T,KG=new T,HG=new e0;class s8{constructor(J=new T(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,W){return this.normal.set(J,Q,$),this.constant=W,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let W=LZ.subVectors($,Q).cross(KG.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(W,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let W=J.delta(LZ),Z=this.normal.dot(W);if(Z===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let K=-(J.start.dot(this.normal)+this.constant)/Z;if($===!0&&(K<0||K>1))return null;return Q.copy(J.start).addScaledVector(W,K)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||HG.getNormalMatrix(J),W=this.coplanarPoint(LZ).applyMatrix4(J),Z=this.normal.applyMatrix3($).normalize();return this.constant=-W.dot(Z),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var YG=0;class j8 extends N9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:YG++}),this.uuid=i8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new y0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){x0(`Material: parameter '${Q}' has value of undefined.`);continue}let W=this[Q];if(W===void 0){x0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(W&&W.isColor)W.set($);else if(W&&W.isVector2&&($&&$.isVector2)||W&&W.isEuler&&($&&$.isEuler)||W&&W.isVector3&&($&&$.isVector3))W.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,$.blending=this.blending,$.side=this.side,$.shadowSide=this.shadowSide,$.vertexColors=this.vertexColors,$.opacity=this.opacity,$.transparent=this.transparent,$.blendSrc=this.blendSrc,$.blendDst=this.blendDst,$.blendEquation=this.blendEquation,$.blendSrcAlpha=this.blendSrcAlpha,$.blendDstAlpha=this.blendDstAlpha,$.blendEquationAlpha=this.blendEquationAlpha,$.blendColor=this.blendColor.getHex(),$.blendAlpha=this.blendAlpha,$.depthFunc=this.depthFunc,$.depthTest=this.depthTest,$.depthWrite=this.depthWrite,$.colorWrite=this.colorWrite,$.clipIntersection=this.clipIntersection,$.clipShadows=this.clipShadows,$.stencilWriteMask=this.stencilWriteMask,$.stencilFunc=this.stencilFunc,$.stencilRef=this.stencilRef,$.stencilFuncMask=this.stencilFuncMask,$.stencilFail=this.stencilFail,$.stencilZFail=this.stencilZFail,$.stencilZPass=this.stencilZPass,$.stencilWrite=this.stencilWrite,$.polygonOffset=this.polygonOffset,$.polygonOffsetFactor=this.polygonOffsetFactor,$.polygonOffsetUnits=this.polygonOffsetUnits,$.dithering=this.dithering,$.alphaTest=this.alphaTest,$.alphaHash=this.alphaHash,$.alphaToCoverage=this.alphaToCoverage,$.premultipliedAlpha=this.premultipliedAlpha,$.forceSinglePass=this.forceSinglePass,$.allowOverride=this.allowOverride,$.visible=this.visible,$.toneMapped=this.toneMapped,$.name=this.name,this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)$.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)$.clippingPlanes=this.clippingPlanes.map((Z)=>Z.toJSON());if(this.rotation!==void 0)$.rotation=this.rotation;if(this.depthPacking!==void 0)$.depthPacking=this.depthPacking;if(this.linewidth!==void 0)$.linewidth=this.linewidth;if(this.linecap!==void 0)$.linecap=this.linecap;if(this.linejoin!==void 0)$.linejoin=this.linejoin;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.wireframe!==void 0)$.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)$.flatShading=this.flatShading;if(this.fog!==void 0)$.fog=this.fog;if(Object.keys(this.userData).length>0)$.userData=this.userData;function W(Z){let K=[];for(let H in Z){let Y=Z[H];delete Y.metadata,K.push(Y)}return K}if(Q){let Z=W(J.textures),K=W(J.images);if(Z.length>0)$.textures=Z;if(K.length>0)$.images=K}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new y0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map(($)=>new s8().fromJSON($));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new $0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new $0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let W=Q.length;$=Array(W);for(let Z=0;Z!==W;++Z)$[Z]=Q[Z].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class l7 extends j8{constructor(J){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new y0(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.rotation=J.rotation,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var V6,EQ=new T,D6=new T,B6=new T,k6=new $0,FQ=new $0,SX=new n0,_$=new T,qQ=new T,T$=new T,JY=new $0,VZ=new $0,QY=new $0;class m6 extends IJ{constructor(J=new l7){super();if(this.isSprite=!0,this.type="Sprite",V6===void 0){V6=new yJ;let Q=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),$=new p6(Q,5);V6.setIndex([0,1,2,0,2,3]),V6.setAttribute("position",new Q7($,3,0,!1)),V6.setAttribute("uv",new Q7($,2,3,!1))}this.geometry=V6,this.material=J,this.center=new $0(0.5,0.5),this.count=1}intersectsFrustum(J){return J.intersectsSprite(this)}raycast(J,Q){if(J.camera===null)i0('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(D6.setFromMatrixScale(this.matrixWorld),SX.copy(J.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(J.camera.matrixWorldInverse,this.matrixWorld),B6.setFromMatrixPosition(this.modelViewMatrix),J.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)D6.multiplyScalar(-B6.z);let $=this.material.rotation,W,Z;if($!==0)Z=Math.cos($),W=Math.sin($);let K=this.center;w$(_$.set(-0.5,-0.5,0),B6,K,D6,W,Z),w$(qQ.set(0.5,-0.5,0),B6,K,D6,W,Z),w$(T$.set(0.5,0.5,0),B6,K,D6,W,Z),JY.set(0,0),VZ.set(1,0),QY.set(1,1);let H=J.ray.intersectTriangle(_$,qQ,T$,!1,EQ);if(H===null){if(w$(qQ.set(-0.5,0.5,0),B6,K,D6,W,Z),VZ.set(0,1),H=J.ray.intersectTriangle(_$,T$,qQ,!1,EQ),H===null)return}let Y=J.ray.origin.distanceTo(EQ);if(Y<J.near||Y>J.far)return;Q.push({distance:Y,point:EQ.clone(),uv:x8.getInterpolation(EQ,_$,qQ,T$,JY,VZ,QY,new $0),face:null,object:this})}copy(J,Q){if(super.copy(J,Q),J.center!==void 0)this.center.copy(J.center);return this.material=J.material,this}}function w$(J,Q,$,W,Z,K){if(k6.subVectors(J,$).addScalar(0.5).multiply(W),Z!==void 0)FQ.x=K*k6.x-Z*k6.y,FQ.y=Z*k6.x+K*k6.y;else FQ.copy(k6);J.copy(Q),J.x+=FQ.x,J.y+=FQ.y,J.applyMatrix4(SX)}var h9=new T,DZ=new T,S$=new T,j$=new T;class U7{constructor(J=new T,Q=new T(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,h9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=h9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return h9.copy(this.origin).addScaledVector(this.direction,Q),h9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,W){DZ.copy(J).add(Q).multiplyScalar(0.5),S$.copy(Q).sub(J).normalize(),j$.copy(this.origin).sub(DZ);let Z=J.distanceTo(Q)*0.5,K=-this.direction.dot(S$),H=j$.dot(this.direction),Y=-j$.dot(S$),X=j$.lengthSq(),U=Math.abs(1-K*K),G,E,N,F;if(U>0)if(G=K*Y-H,E=K*H-Y,F=Z*U,G>=0)if(E>=-F)if(E<=F){let q=1/U;G*=q,E*=q,N=G*(G+K*E+2*H)+E*(K*G+E+2*Y)+X}else E=Z,G=Math.max(0,-(K*E+H)),N=-G*G+E*(E+2*Y)+X;else E=-Z,G=Math.max(0,-(K*E+H)),N=-G*G+E*(E+2*Y)+X;else if(E<=-F)G=Math.max(0,-(-K*Z+H)),E=G>0?-Z:Math.min(Math.max(-Z,-Y),Z),N=-G*G+E*(E+2*Y)+X;else if(E<=F)G=0,E=Math.min(Math.max(-Z,-Y),Z),N=E*(E+2*Y)+X;else G=Math.max(0,-(K*Z+H)),E=G>0?Z:Math.min(Math.max(-Z,-Y),Z),N=-G*G+E*(E+2*Y)+X;else E=K>0?-Z:Z,G=Math.max(0,-(K*E+H)),N=-G*G+E*(E+2*Y)+X;if($)$.copy(this.origin).addScaledVector(this.direction,G);if(W)W.copy(DZ).addScaledVector(S$,E);return N}intersectSphere(J,Q){if(J.radius<0)return null;h9.subVectors(J.center,this.origin);let $=h9.dot(this.direction),W=h9.dot(h9)-$*$,Z=J.radius*J.radius;if(W>Z)return null;let K=Math.sqrt(Z-W),H=$-K,Y=$+K;if(Y<0)return null;if(H<0)return this.at(Y,Q);return this.at(H,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,W,Z,K,H,Y,X=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,E=this.origin;if(X>=0)$=(J.min.x-E.x)*X,W=(J.max.x-E.x)*X;else $=(J.max.x-E.x)*X,W=(J.min.x-E.x)*X;if(U>=0)Z=(J.min.y-E.y)*U,K=(J.max.y-E.y)*U;else Z=(J.max.y-E.y)*U,K=(J.min.y-E.y)*U;if($>K||Z>W)return null;if(Z>$||isNaN($))$=Z;if(K<W||isNaN(W))W=K;if(G>=0)H=(J.min.z-E.z)*G,Y=(J.max.z-E.z)*G;else H=(J.max.z-E.z)*G,Y=(J.min.z-E.z)*G;if($>Y||H>W)return null;if(H>$||$!==$)$=H;if(Y<W||W!==W)W=Y;if(W<0)return null;return this.at($>=0?$:W,Q)}intersectsBox(J){return this.intersectBox(J,h9)!==null}intersectTriangle(J,Q,$,W,Z){let K=this.origin,H=this.direction,Y=H.x,X=H.y,U=H.z,G=J.x-K.x,E=J.y-K.y,N=J.z-K.z,F=Q.x-K.x,q=Q.y-K.y,V=Q.z-K.z,O=$.x-K.x,R=$.y-K.y,z=$.z-K.z,D=Math.abs(Y),L=Math.abs(X),M=Math.abs(U),I,w,B,_,d,j,b,Q0,S,i,u,x;if(D>=L&&D>=M)if(B=Y,j=G,S=F,x=O,Y>=0)I=X,w=U,_=E,d=N,b=q,Q0=V,i=R,u=z;else I=U,w=X,_=N,d=E,b=V,Q0=q,i=z,u=R;else if(L>=M)if(B=X,j=E,S=q,x=R,X>=0)I=U,w=Y,_=N,d=G,b=V,Q0=F,i=z,u=O;else I=Y,w=U,_=G,d=N,b=F,Q0=V,i=O,u=z;else if(B=U,j=N,S=V,x=z,U>=0)I=Y,w=X,_=G,d=E,b=F,Q0=q,i=O,u=R;else I=X,w=Y,_=E,d=G,b=q,Q0=F,i=R,u=O;if(B===0)return null;let H0=I/B,n=w/B,W0=1/B,Y0=_-H0*j,g0=d-n*j,I0=b-H0*S,a0=Q0-n*S,r0=i-H0*x,a=u-n*x,N0=r0*a0-a*I0,E0=Y0*a-g0*r0,u0=I0*g0-a0*Y0;if(W){if(N0<0||E0<0||u0<0)return null}else if((N0<0||E0<0||u0<0)&&(N0>0||E0>0||u0>0))return null;let l0=N0+E0+u0;if(l0===0)return null;let p0=W0*(N0*j+E0*S+u0*x);if(l0>0?p0<0:p0>0)return null;return this.at(p0/l0,Z)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mJ extends j8{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new y0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Y9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var $Y=new n0,_7=new U7,y$=new p8,WY=new T,v$=new T,f$=new T,h$=new T,BZ=new T,b$=new T,ZY=new T,x$=new T;class C0 extends IJ{constructor(J=new yJ,Q=new mJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,K=W.length;Z<K;Z++){let H=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=Z}}}}getVertexPosition(J,Q){let $=this.geometry,W=$.attributes.position,Z=$.morphAttributes.position,K=$.morphTargetsRelative;Q.fromBufferAttribute(W,J);let H=this.morphTargetInfluences;if(Z&&H){b$.set(0,0,0);for(let Y=0,X=Z.length;Y<X;Y++){let U=H[Y],G=Z[Y];if(U===0)continue;if(BZ.fromBufferAttribute(G,J),K)b$.addScaledVector(BZ,U);else b$.addScaledVector(BZ.sub(Q),U)}Q.add(b$)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.material,Z=this.matrixWorld;if(W===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(y$.copy($.boundingSphere),y$.applyMatrix4(Z),_7.copy(J.ray).recast(J.near),y$.containsPoint(_7.origin)===!1){if(_7.intersectSphere(y$,WY)===null)return;if(_7.origin.distanceToSquared(WY)>(J.far-J.near)**2)return}if($Y.copy(Z).invert(),_7.copy(J.ray).applyMatrix4($Y),$.boundingBox!==null){if(_7.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,_7)}_computeIntersections(J,Q,$){let W,Z=this.geometry,K=this.material,H=Z.index,Y=Z.attributes.position,X=Z.attributes.uv,U=Z.attributes.uv1,G=Z.attributes.normal,E=Z.groups,N=Z.drawRange;if(H!==null)if(Array.isArray(K))for(let F=0,q=E.length;F<q;F++){let V=E[F],O=K[V.materialIndex],R=Math.max(V.start,N.start),z=Math.min(H.count,Math.min(V.start+V.count,N.start+N.count));for(let D=R,L=z;D<L;D+=3){let M=H.getX(D),I=H.getX(D+1),w=H.getX(D+2);if(W=g$(this,O,J,$,X,U,G,M,I,w),W)W.faceIndex=Math.floor(D/3),W.face.materialIndex=V.materialIndex,Q.push(W)}}else{let F=Math.max(0,N.start),q=Math.min(H.count,N.start+N.count);for(let V=F,O=q;V<O;V+=3){let R=H.getX(V),z=H.getX(V+1),D=H.getX(V+2);if(W=g$(this,K,J,$,X,U,G,R,z,D),W)W.faceIndex=Math.floor(V/3),Q.push(W)}}else if(Y!==void 0)if(Array.isArray(K))for(let F=0,q=E.length;F<q;F++){let V=E[F],O=K[V.materialIndex],R=Math.max(V.start,N.start),z=Math.min(Y.count,Math.min(V.start+V.count,N.start+N.count));for(let D=R,L=z;D<L;D+=3){let M=D,I=D+1,w=D+2;if(W=g$(this,O,J,$,X,U,G,M,I,w),W)W.faceIndex=Math.floor(D/3),W.face.materialIndex=V.materialIndex,Q.push(W)}}else{let F=Math.max(0,N.start),q=Math.min(Y.count,N.start+N.count);for(let V=F,O=q;V<O;V+=3){let R=V,z=V+1,D=V+2;if(W=g$(this,K,J,$,X,U,G,R,z,D),W)W.faceIndex=Math.floor(V/3),Q.push(W)}}}}function XG(J,Q,$,W,Z,K,H,Y){let X;if(Q.side===1)X=W.intersectTriangle(H,K,Z,!0,Y);else X=W.intersectTriangle(Z,K,H,Q.side===0,Y);if(X===null)return null;x$.copy(Y),x$.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(x$);if(U<$.near||U>$.far)return null;return{distance:U,point:x$.clone(),object:J}}function g$(J,Q,$,W,Z,K,H,Y,X,U){J.getVertexPosition(Y,v$),J.getVertexPosition(X,f$),J.getVertexPosition(U,h$);let G=XG(J,Q,$,W,v$,f$,h$,ZY);if(G){let E=new T;if(x8.getBarycoord(ZY,v$,f$,h$,E),Z)G.uv=x8.getInterpolatedAttribute(Z,Y,X,U,E,new $0);if(K)G.uv1=x8.getInterpolatedAttribute(K,Y,X,U,E,new $0);if(H){if(G.normal=x8.getInterpolatedAttribute(H,Y,X,U,E,new T),G.normal.dot(W.direction)>0)G.normal.multiplyScalar(-1)}let N={a:Y,b:X,c:U,normal:new T,materialIndex:0};x8.getNormal(v$,f$,h$,N.normal),G.face=N,G.barycoord=E}return G}var OQ=new SJ,KY=new SJ,HY=new SJ,UG=new SJ,YY=new n0,p$=new T,kZ=new p8,XY=new n0,MZ=new U7;class VW extends C0{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new n0,this.bindMatrixInverse=new n0,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new z8;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,p$),this.boundingBox.expandByPoint(p$)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new p8;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,p$),this.boundingSphere.expandByPoint(p$)}copy(J,Q){if(super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,Q){let $=this.material,W=this.matrixWorld;if($===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(kZ.copy(this.boundingSphere),kZ.applyMatrix4(W),J.ray.intersectsSphere(kZ)===!1)return;if(XY.copy(W).invert(),MZ.copy(J.ray).applyMatrix4(XY),this.boundingBox!==null){if(MZ.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,MZ)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new SJ,Q=this.geometry.attributes.skinWeight;for(let $=0,W=Q.count;$<W;$++){J.fromBufferAttribute(Q,$);let Z=1/J.manhattanLength();if(Z!==1/0)J.multiplyScalar(Z);else J.set(1,0,0,0);Q.setXYZW($,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else x0("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let $=this.skeleton,W=this.geometry;if(KY.fromBufferAttribute(W.attributes.skinIndex,J),HY.fromBufferAttribute(W.attributes.skinWeight,J),Q.isVector4)OQ.copy(Q),Q.set(0,0,0,0);else OQ.set(...Q,1),Q.set(0,0,0);OQ.applyMatrix4(this.bindMatrix);for(let Z=0;Z<4;Z++){let K=HY.getComponent(Z);if(K!==0){let H=KY.getComponent(Z);YY.multiplyMatrices($.bones[H].matrixWorld,$.boneInverses[H]),Q.addScaledVector(UG.copy(OQ).applyMatrix4(YY),K)}}if(Q.isVector4)Q.w=OQ.w;return Q.applyMatrix4(this.bindMatrixInverse)}}class pQ extends IJ{constructor(){super();this.isBone=!0,this.type="Bone"}}class mQ extends oJ{constructor(J=null,Q=1,$=1,W,Z,K,H,Y,X=1003,U=1003,G,E){super(null,K,H,Y,X,U,W,Z,G,E);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var UY=new n0,GG=new n0;class lQ{constructor(J=[],Q=[]){this.uuid=i8(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){x0("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let $=0,W=this.bones.length;$<W;$++)this.boneInverses.push(new n0)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let $=new n0;if(this.bones[J])$.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push($)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($)$.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($){if($.parent&&$.parent.isBone)$.matrix.copy($.parent.matrixWorld).invert(),$.matrix.multiply($.matrixWorld);else $.matrix.copy($.matrixWorld);$.matrix.decompose($.position,$.quaternion,$.scale)}}}update(){let J=this.bones,Q=this.boneInverses,$=this.boneMatrices,W=this.boneTexture;for(let Z=0,K=J.length;Z<K;Z++){let H=J[Z]?J[Z].matrixWorld:GG;UY.multiplyMatrices(H,Q[Z]),UY.toArray($,Z*16)}if(W!==null)W.needsUpdate=!0}clone(){return new lQ(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let $=new mQ(Q,J,J,1023,1015);return $.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=$,this}getBoneByName(J){for(let Q=0,$=this.bones.length;Q<$;Q++){let W=this.bones[Q];if(W.name===J)return W}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let $=0,W=J.bones.length;$<W;$++){let Z=J.bones[$],K=Q[Z];if(K===void 0)x0("Skeleton: No bone found with UUID:",Z),K=new pQ;this.bones.push(K),this.boneInverses.push(new n0().fromArray(J.boneInverses[$]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,$=this.boneInverses;for(let W=0,Z=Q.length;W<Z;W++){let K=Q[W];J.bones.push(K.uuid);let H=$[W];J.boneInverses.push(H.toArray())}return J}}class $7 extends sJ{constructor(J,Q,$,W=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=W}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var M6=new n0,GY=new n0,m$=[],NY=new z8,NG=new n0,RQ=new C0,LQ=new p8;class G7 extends C0{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new $7(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let W=0;W<$;W++)this.setMatrixAt(W,NG)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new z8;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,M6),NY.copy(J.boundingBox).applyMatrix4(M6),this.boundingBox.union(NY)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new p8;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,M6),LQ.copy(J.boundingSphere).applyMatrix4(M6),this.boundingSphere.union(LQ)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,W=this.morphTexture.source.data.data,Z=$.length+1,K=J*Z+1;for(let H=0;H<$.length;H++)$[H]=W[K+H]}raycast(J,Q){let $=this.matrixWorld,W=this.count;if(RQ.geometry=this.geometry,RQ.material=this.material,RQ.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(LQ.copy(this.boundingSphere),LQ.applyMatrix4($),J.ray.intersectsSphere(LQ)===!1)return;for(let Z=0;Z<W;Z++){this.getMatrixAt(Z,M6),GY.multiplyMatrices($,M6),RQ.matrixWorld=GY,RQ.raycast(J,m$);for(let K=0,H=m$.length;K<H;K++){let Y=m$[K];Y.instanceId=Z,Y.object=this,Q.push(Y)}m$.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new $7(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let $=Q.morphTargetInfluences,W=$.length+1;if(this.morphTexture===null)this.morphTexture=new mQ(new Float32Array(W*this.count),W,this.count,1028,1015);let Z=this.morphTexture.source.data.data,K=0;for(let X=0;X<$.length;X++)K+=$[X];let H=this.geometry.morphTargetsRelative?1:1-K,Y=W*J;return Z[Y]=H,Z.set($,Y+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var T7=new p8,EG=new $0(0.5,0.5),l$=new T;class uQ{constructor(J=new s8,Q=new s8,$=new s8,W=new s8,Z=new s8,K=new s8){this.planes=[J,Q,$,W,Z,K]}set(J,Q,$,W,Z,K){let H=this.planes;return H[0].copy(J),H[1].copy(Q),H[2].copy($),H[3].copy(W),H[4].copy(Z),H[5].copy(K),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let W=this.planes,Z=J.elements,K=Z[0],H=Z[1],Y=Z[2],X=Z[3],U=Z[4],G=Z[5],E=Z[6],N=Z[7],F=Z[8],q=Z[9],V=Z[10],O=Z[11],R=Z[12],z=Z[13],D=Z[14],L=Z[15];if(W[0].setComponents(X-K,N-U,O-F,L-R).normalize(),W[1].setComponents(X+K,N+U,O+F,L+R).normalize(),W[2].setComponents(X+H,N+G,O+q,L+z).normalize(),W[3].setComponents(X-H,N-G,O-q,L-z).normalize(),$)W[4].setComponents(Y,E,V,D).normalize(),W[5].setComponents(X-Y,N-E,O-V,L-D).normalize();else if(W[4].setComponents(X-Y,N-E,O-V,L-D).normalize(),Q===2000)W[5].setComponents(X+Y,N+E,O+V,L+D).normalize();else if(Q===2001)W[5].setComponents(Y,E,V,D).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();T7.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();T7.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(T7)}intersectsSprite(J){T7.center.set(0,0,0);let Q=EG.distanceTo(J.center);return T7.radius=0.7071067811865476+Q,T7.applyMatrix4(J.matrixWorld),this.intersectsSphere(T7)}intersectsSphere(J){let Q=this.planes,$=J.center,W=-J.radius;for(let Z=0;Z<6;Z++)if(Q[Z].distanceToPoint($)<W)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let W=Q[$];if(l$.x=W.normal.x>0?J.max.x:J.min.x,l$.y=W.normal.y>0?J.max.y:J.min.y,l$.z=W.normal.z>0?J.max.z:J.min.z,W.distanceToPoint(l$)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dQ extends j8{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new y0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var t$=new T,e$=new T,EY=new n0,VQ=new U7,u$=new p8,CZ=new T,FY=new T;class l6 extends IJ{constructor(J=new yJ,Q=new dQ){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let W=1,Z=Q.count;W<Z;W++)t$.fromBufferAttribute(Q,W-1),e$.fromBufferAttribute(Q,W),$[W]=$[W-1],$[W]+=t$.distanceTo(e$);J.setAttribute("lineDistance",new UJ($,1))}else x0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.matrixWorld,Z=J.params.Line.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(u$.copy($.boundingSphere),u$.applyMatrix4(W),u$.radius+=Z,J.ray.intersectsSphere(u$)===!1)return;EY.copy(W).invert(),VQ.copy(J.ray).applyMatrix4(EY);let H=Z/((this.scale.x+this.scale.y+this.scale.z)/3),Y=H*H,X=this.isLineSegments?2:1,U=$.index,E=$.attributes.position;if(U!==null){let N=Math.max(0,K.start),F=Math.min(U.count,K.start+K.count);for(let q=N,V=F-1;q<V;q+=X){let O=U.getX(q),R=U.getX(q+1),z=d$(this,J,VQ,Y,O,R,q);if(z)Q.push(z)}if(this.isLineLoop){let q=U.getX(F-1),V=U.getX(N),O=d$(this,J,VQ,Y,q,V,F-1);if(O)Q.push(O)}}else{let N=Math.max(0,K.start),F=Math.min(E.count,K.start+K.count);for(let q=N,V=F-1;q<V;q+=X){let O=d$(this,J,VQ,Y,q,q+1,q);if(O)Q.push(O)}if(this.isLineLoop){let q=d$(this,J,VQ,Y,F-1,N,F-1);if(q)Q.push(q)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,K=W.length;Z<K;Z++){let H=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=Z}}}}}function d$(J,Q,$,W,Z,K,H){let Y=J.geometry.attributes.position;if(t$.fromBufferAttribute(Y,Z),e$.fromBufferAttribute(Y,K),$.distanceSqToSegment(t$,e$,CZ,FY)>W)return;CZ.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(CZ);if(U<Q.near||U>Q.far)return;return{distance:U,point:FY.clone().applyMatrix4(J.matrixWorld),index:H,face:null,faceIndex:null,barycoord:null,object:J}}var qY=new T,OY=new T;class DW extends l6{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let W=0,Z=Q.count;W<Z;W+=2)qY.fromBufferAttribute(Q,W),OY.fromBufferAttribute(Q,W+1),$[W]=W===0?0:$[W-1],$[W+1]=$[W]+qY.distanceTo(OY);J.setAttribute("lineDistance",new UJ($,1))}else x0("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class BW extends l6{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class u7 extends j8{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new y0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var RY=new n0,TZ=new U7,c$=new p8,n$=new T;class u6 extends IJ{constructor(J=new yJ,Q=new u7){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.matrixWorld,Z=J.params.Points.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(c$.copy($.boundingSphere),c$.applyMatrix4(W),c$.radius+=Z,J.ray.intersectsSphere(c$)===!1)return;RY.copy(W).invert(),TZ.copy(J.ray).applyMatrix4(RY);let H=Z/((this.scale.x+this.scale.y+this.scale.z)/3),Y=H*H,X=$.index,G=$.attributes.position;if(X!==null){let E=Math.max(0,K.start),N=Math.min(X.count,K.start+K.count);for(let F=E,q=N;F<q;F++){let V=X.getX(F);n$.fromBufferAttribute(G,V),LY(n$,V,Y,W,J,Q,this)}}else{let E=Math.max(0,K.start),N=Math.min(G.count,K.start+K.count);for(let F=E,q=N;F<q;F++)n$.fromBufferAttribute(G,F),LY(n$,F,Y,W,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,K=W.length;Z<K;Z++){let H=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=Z}}}}}function LY(J,Q,$,W,Z,K,H){let Y=TZ.distanceSqToPoint(J);if(Y<$){let X=new T;TZ.closestPointToPoint(J,X),X.applyMatrix4(W);let U=Z.ray.origin.distanceTo(X);if(U<Z.near||U>Z.far)return;K.push({distance:U,distanceToRay:Math.sqrt(Y),point:X,index:Q,face:null,faceIndex:null,barycoord:null,object:H})}}class kW extends oJ{constructor(J=[],Q=301,$,W,Z,K,H,Y,X,U){super(J,Q,$,W,Z,K,H,Y,X,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class N7 extends oJ{constructor(J,Q,$,W,Z,K,H,Y,X){super(J,Q,$,W,Z,K,H,Y,X);this.isCanvasTexture=!0,this.needsUpdate=!0}}class d7 extends oJ{constructor(J,Q,$=1014,W,Z,K,H=1003,Y=1003,X,U=1026,G=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let E={width:J,height:Q,depth:G};super(E,W,Z,K,H,Y,U,$,X);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new xQ(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class TK extends d7{constructor(J,Q=1014,$=301,W,Z,K=1003,H=1003,Y,X=1026){let U={width:J,height:J,depth:1},G=[U,U,U,U,U,U];super(J,J,Q,$,W,Z,K,H,Y,X);this.image=G,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class MW extends oJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class xJ extends yJ{constructor(J=1,Q=1,$=1,W=1,Z=1,K=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:W,heightSegments:Z,depthSegments:K};let H=this;W=Math.floor(W),Z=Math.floor(Z),K=Math.floor(K);let Y=[],X=[],U=[],G=[],E=0,N=0;F("z","y","x",-1,-1,$,Q,J,K,Z,0),F("z","y","x",1,-1,$,Q,-J,K,Z,1),F("x","z","y",1,1,J,$,Q,W,K,2),F("x","z","y",1,-1,J,$,-Q,W,K,3),F("x","y","z",1,-1,J,Q,$,W,Z,4),F("x","y","z",-1,-1,J,Q,-$,W,Z,5),this.setIndex(Y),this.setAttribute("position",new UJ(X,3)),this.setAttribute("normal",new UJ(U,3)),this.setAttribute("uv",new UJ(G,2));function F(q,V,O,R,z,D,L,M,I,w,B){let _=D/I,d=L/w,j=D/2,b=L/2,Q0=M/2,S=I+1,i=w+1,u=0,x=0,H0=new T;for(let n=0;n<i;n++){let W0=n*d-b;for(let Y0=0;Y0<S;Y0++){let g0=Y0*_-j;H0[q]=g0*R,H0[V]=W0*z,H0[O]=Q0,X.push(H0.x,H0.y,H0.z),H0[q]=0,H0[V]=0,H0[O]=M>0?1:-1,U.push(H0.x,H0.y,H0.z),G.push(Y0/I),G.push(1-n/w),u+=1}}for(let n=0;n<w;n++)for(let W0=0;W0<I;W0++){let Y0=E+W0+S*n,g0=E+W0+S*(n+1),I0=E+(W0+1)+S*(n+1),a0=E+(W0+1)+S*n;Y.push(Y0,g0,a0),Y.push(g0,I0,a0),x+=6}H.addGroup(N,x,B),N+=x,E+=u}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new xJ(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class E7 extends yJ{constructor(J=1,Q=32,$=0,W=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:Q,thetaStart:$,thetaLength:W},Q=Math.max(3,Q);let Z=[],K=[],H=[],Y=[],X=new T,U=new $0;K.push(0,0,0),H.push(0,0,1),Y.push(0.5,0.5);for(let G=0,E=3;G<=Q;G++,E+=3){let N=$+G/Q*W;X.x=J*Math.cos(N),X.y=J*Math.sin(N),K.push(X.x,X.y,X.z),H.push(0,0,1),U.x=(K[E]/J+1)/2,U.y=(K[E+1]/J+1)/2,Y.push(U.x,U.y)}for(let G=1;G<=Q;G++)Z.push(G,G+1,0);this.setIndex(Z),this.setAttribute("position",new UJ(K,3)),this.setAttribute("normal",new UJ(H,3)),this.setAttribute("uv",new UJ(Y,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new E7(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class gJ extends yJ{constructor(J=1,Q=1,$=1,W=32,Z=1,K=!1,H=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:W,heightSegments:Z,openEnded:K,thetaStart:H,thetaLength:Y};let X=this;W=Math.floor(W),Z=Math.floor(Z);let U=[],G=[],E=[],N=[],F=0,q=[],V=$/2,O=0;if(R(),K===!1){if(J>0)z(!0);if(Q>0)z(!1)}this.setIndex(U),this.setAttribute("position",new UJ(G,3)),this.setAttribute("normal",new UJ(E,3)),this.setAttribute("uv",new UJ(N,2));function R(){let D=new T,L=new T,M=0,I=(Q-J)/$;for(let w=0;w<=Z;w++){let B=[],_=w/Z,d=_*(Q-J)+J;for(let j=0;j<=W;j++){let b=j/W,Q0=b*Y+H,S=Math.sin(Q0),i=Math.cos(Q0);L.x=d*S,L.y=-_*$+V,L.z=d*i,G.push(L.x,L.y,L.z),D.set(S,I,i).normalize(),E.push(D.x,D.y,D.z),N.push(b,1-_),B.push(F++)}q.push(B)}for(let w=0;w<W;w++)for(let B=0;B<Z;B++){let _=q[B][w],d=q[B+1][w],j=q[B+1][w+1],b=q[B][w+1];if(J>0||B!==0)U.push(_,d,b),M+=3;if(Q>0||B!==Z-1)U.push(d,j,b),M+=3}X.addGroup(O,M,0),O+=M}function z(D){let L=F,M=new $0,I=new T,w=0,B=D===!0?J:Q,_=D===!0?1:-1;for(let j=1;j<=W;j++)G.push(0,V*_,0),E.push(0,_,0),N.push(0.5,0.5),F++;let d=F;for(let j=0;j<=W;j++){let Q0=j/W*Y+H,S=Math.cos(Q0),i=Math.sin(Q0);I.x=B*i,I.y=V*_,I.z=B*S,G.push(I.x,I.y,I.z),E.push(0,_,0),M.x=S*0.5+0.5,M.y=i*0.5*_+0.5,N.push(M.x,M.y),F++}for(let j=0;j<W;j++){let b=L+j,Q0=d+j;if(D===!0)U.push(Q0,Q0+1,b);else U.push(Q0+1,Q0,b);w+=3}X.addGroup(O,w,D===!0?1:2),O+=w}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new gJ(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class cQ extends gJ{constructor(J=1,Q=1,$=32,W=1,Z=!1,K=0,H=Math.PI*2){super(0,J,Q,$,W,Z,K,H);this.type="ConeGeometry",this.parameters={radius:J,height:Q,radialSegments:$,heightSegments:W,openEnded:Z,thetaStart:K,thetaLength:H}}static fromJSON(J){return new cQ(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class a8{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){x0("Curve: .getPoint() not implemented.")}getPointAt(J,Q){let $=this.getUtoTmapping(J);return this.getPoint($,Q)}getPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));return Q}getSpacedPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPointAt($/J));return Q}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Q=[],$,W=this.getPoint(0),Z=0;Q.push(0);for(let K=1;K<=J;K++)$=this.getPoint(K/J),Z+=$.distanceTo(W),Q.push(Z),W=$;return this.cacheArcLengths=Q,Q}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Q=null){let $=this.getLengths(),W=0,Z=$.length,K;if(Q)K=Q;else K=J*$[Z-1];let H=0,Y=Z-1,X;while(H<=Y)if(W=Math.floor(H+(Y-H)/2),X=$[W]-K,X<0)H=W+1;else if(X>0)Y=W-1;else{Y=W;break}if(W=Y,$[W]===K)return W/(Z-1);let U=$[W],E=$[W+1]-U,N=(K-U)/E;return(W+N)/(Z-1)}getTangent(J,Q){let W=J-0.0001,Z=J+0.0001;if(W<0)W=0;if(Z>1)Z=1;let K=this.getPoint(W),H=this.getPoint(Z),Y=Q||(K.isVector2?new $0:new T);return Y.copy(H).sub(K).normalize(),Y}getTangentAt(J,Q){let $=this.getUtoTmapping(J);return this.getTangent($,Q)}computeFrenetFrames(J,Q=!1){let $=new T,W=[],Z=[],K=[],H=new T,Y=new n0;for(let N=0;N<=J;N++){let F=N/J;W[N]=this.getTangentAt(F,new T)}Z[0]=new T,K[0]=new T;let X=Number.MAX_VALUE,U=Math.abs(W[0].x),G=Math.abs(W[0].y),E=Math.abs(W[0].z);if(U<=X)X=U,$.set(1,0,0);if(G<=X)X=G,$.set(0,1,0);if(E<=X)$.set(0,0,1);H.crossVectors(W[0],$).normalize(),Z[0].crossVectors(W[0],H),K[0].crossVectors(W[0],Z[0]);for(let N=1;N<=J;N++){if(Z[N]=Z[N-1].clone(),K[N]=K[N-1].clone(),H.crossVectors(W[N-1],W[N]),H.length()>Number.EPSILON){H.normalize();let F=Math.acos(WJ(W[N-1].dot(W[N]),-1,1));Z[N].applyMatrix4(Y.makeRotationAxis(H,F))}K[N].crossVectors(W[N],Z[N])}if(Q===!0){let N=Math.acos(WJ(Z[0].dot(Z[J]),-1,1));if(N/=J,W[0].dot(H.crossVectors(Z[0],Z[J]))>0)N=-N;for(let F=1;F<=J;F++)Z[F].applyMatrix4(Y.makeRotationAxis(W[F],N*F)),K[F].crossVectors(W[F],Z[F])}return{tangents:W,normals:Z,binormals:K}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}}class nQ extends a8{constructor(J=0,Q=0,$=1,W=1,Z=0,K=Math.PI*2,H=!1,Y=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Q,this.xRadius=$,this.yRadius=W,this.aStartAngle=Z,this.aEndAngle=K,this.aClockwise=H,this.aRotation=Y}getPoint(J,Q=new $0){let $=Q,W=Math.PI*2,Z=this.aEndAngle-this.aStartAngle,K=Math.abs(Z)<Number.EPSILON;while(Z<0)Z+=W;while(Z>W)Z-=W;if(Z<Number.EPSILON)if(K)Z=0;else Z=W;if(this.aClockwise===!0&&!K)if(Z===W)Z=-W;else Z=Z-W;let H=this.aStartAngle+J*Z,Y=this.aX+this.xRadius*Math.cos(H),X=this.aY+this.yRadius*Math.sin(H);if(this.aRotation!==0){let U=Math.cos(this.aRotation),G=Math.sin(this.aRotation),E=Y-this.aX,N=X-this.aY;Y=E*U-N*G+this.aX,X=E*G+N*U+this.aY}return $.set(Y,X)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class wK extends nQ{constructor(J,Q,$,W,Z,K){super(J,Q,$,$,W,Z,K);this.isArcCurve=!0,this.type="ArcCurve"}}function SK(){let J=0,Q=0,$=0,W=0;function Z(K,H,Y,X){J=K,Q=Y,$=-3*K+3*H-2*Y-X,W=2*K-2*H+Y+X}return{initCatmullRom:function(K,H,Y,X,U){Z(H,Y,U*(Y-K),U*(X-H))},initNonuniformCatmullRom:function(K,H,Y,X,U,G,E){let N=(H-K)/U-(Y-K)/(U+G)+(Y-H)/G,F=(Y-H)/G-(X-H)/(G+E)+(X-Y)/E;N*=G,F*=G,Z(H,Y,N,F)},calc:function(K){let H=K*K,Y=H*K;return J+Q*K+$*H+W*Y}}}var VY=new T,DY=new T,zZ=new SK,PZ=new SK,IZ=new SK;class sQ extends a8{constructor(J=[],Q=!1,$="centripetal",W=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Q,this.curveType=$,this.tension=W}getPoint(J,Q=new T){let $=Q,W=this.points,Z=W.length,K=(Z-(this.closed?0:1))*J,H=Math.floor(K),Y=K-H;if(this.closed)H+=H>0?0:(Math.floor(Math.abs(H)/Z)+1)*Z;else if(Y===0&&H===Z-1)H=Z-2,Y=1;let X,U;if(this.closed||H>0)X=W[(H-1)%Z];else DY.subVectors(W[0],W[1]).add(W[0]),X=DY;let G=W[H%Z],E=W[(H+1)%Z];if(this.closed||H+2<Z)U=W[(H+2)%Z];else VY.subVectors(W[Z-1],W[Z-2]).add(W[Z-1]),U=VY;if(this.curveType==="centripetal"||this.curveType==="chordal"){let N=this.curveType==="chordal"?0.5:0.25,F=Math.pow(X.distanceToSquared(G),N),q=Math.pow(G.distanceToSquared(E),N),V=Math.pow(E.distanceToSquared(U),N);if(q<0.0001)q=1;if(F<0.0001)F=q;if(V<0.0001)V=q;zZ.initNonuniformCatmullRom(X.x,G.x,E.x,U.x,F,q,V),PZ.initNonuniformCatmullRom(X.y,G.y,E.y,U.y,F,q,V),IZ.initNonuniformCatmullRom(X.z,G.z,E.z,U.z,F,q,V)}else if(this.curveType==="catmullrom")zZ.initCatmullRom(X.x,G.x,E.x,U.x,this.tension),PZ.initCatmullRom(X.y,G.y,E.y,U.y,this.tension),IZ.initCatmullRom(X.z,G.z,E.z,U.z,this.tension);return $.set(zZ.calc(Y),PZ.calc(Y),IZ.calc(Y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let W=J.points[Q];this.points.push(W.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let W=this.points[Q];J.points.push(W.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let W=J.points[Q];this.points.push(new T().fromArray(W))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function BY(J,Q,$,W,Z){let K=(W-Q)*0.5,H=(Z-$)*0.5,Y=J*J,X=J*Y;return(2*$-2*W+K+H)*X+(-3*$+3*W-2*K-H)*Y+K*J+$}function FG(J,Q){let $=1-J;return $*$*Q}function qG(J,Q){return 2*(1-J)*J*Q}function OG(J,Q){return J*J*Q}function MQ(J,Q,$,W){return FG(J,Q)+qG(J,$)+OG(J,W)}function RG(J,Q){let $=1-J;return $*$*$*Q}function LG(J,Q){let $=1-J;return 3*$*$*J*Q}function VG(J,Q){return 3*(1-J)*J*J*Q}function DG(J,Q){return J*J*J*Q}function CQ(J,Q,$,W,Z){return RG(J,Q)+LG(J,$)+VG(J,W)+DG(J,Z)}class CW extends a8{constructor(J=new $0,Q=new $0,$=new $0,W=new $0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Q,this.v2=$,this.v3=W}getPoint(J,Q=new $0){let $=Q,W=this.v0,Z=this.v1,K=this.v2,H=this.v3;return $.set(CQ(J,W.x,Z.x,K.x,H.x),CQ(J,W.y,Z.y,K.y,H.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class jK extends a8{constructor(J=new T,Q=new T,$=new T,W=new T){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Q,this.v2=$,this.v3=W}getPoint(J,Q=new T){let $=Q,W=this.v0,Z=this.v1,K=this.v2,H=this.v3;return $.set(CQ(J,W.x,Z.x,K.x,H.x),CQ(J,W.y,Z.y,K.y,H.y),CQ(J,W.z,Z.z,K.z,H.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class zW extends a8{constructor(J=new $0,Q=new $0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Q}getPoint(J,Q=new $0){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new $0){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class yK extends a8{constructor(J=new T,Q=new T){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Q}getPoint(J,Q=new T){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new T){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class PW extends a8{constructor(J=new $0,Q=new $0,$=new $0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new $0){let $=Q,W=this.v0,Z=this.v1,K=this.v2;return $.set(MQ(J,W.x,Z.x,K.x),MQ(J,W.y,Z.y,K.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class p9 extends a8{constructor(J=new T,Q=new T,$=new T){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new T){let $=Q,W=this.v0,Z=this.v1,K=this.v2;return $.set(MQ(J,W.x,Z.x,K.x),MQ(J,W.y,Z.y,K.y),MQ(J,W.z,Z.z,K.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class IW extends a8{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Q=new $0){let $=Q,W=this.points,Z=(W.length-1)*J,K=Math.floor(Z),H=Z-K,Y=W[K===0?K:K-1],X=W[K],U=W[K>W.length-2?W.length-1:K+1],G=W[K>W.length-3?W.length-1:K+2];return $.set(BY(H,Y.x,X.x,U.x,G.x),BY(H,Y.y,X.y,U.y,G.y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let W=J.points[Q];this.points.push(W.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let W=this.points[Q];J.points.push(W.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let W=J.points[Q];this.points.push(new $0().fromArray(W))}return this}}var wZ=Object.freeze({__proto__:null,ArcCurve:wK,CatmullRomCurve3:sQ,CubicBezierCurve:CW,CubicBezierCurve3:jK,EllipseCurve:nQ,LineCurve:zW,LineCurve3:yK,QuadraticBezierCurve:PW,QuadraticBezierCurve3:p9,SplineCurve:IW});class vK extends a8{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),Q=this.curves[this.curves.length-1].getPoint(1);if(!J.equals(Q)){let $=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wZ[$](Q,J))}return this}getPoint(J,Q){let $=J*this.getLength(),W=this.getCurveLengths(),Z=0;while(Z<W.length){if(W[Z]>=$){let K=W[Z]-$,H=this.curves[Z],Y=H.getLength(),X=Y===0?0:1-K/Y;return H.getPointAt(X,Q)}Z++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],Q=0;for(let $=0,W=this.curves.length;$<W;$++)Q+=this.curves[$].getLength(),J.push(Q);return this.cacheLengths=J,J}getSpacedPoints(J=40){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));if(this.autoClose)Q.push(Q[0]);return Q}getPoints(J=12){let Q=[],$;for(let W=0,Z=this.curves;W<Z.length;W++){let K=Z[W],H=K.isEllipseCurve?J*2:K.isLineCurve||K.isLineCurve3?1:K.isSplineCurve?J*K.points.length:J,Y=K.getPoints(H);for(let X=0;X<Y.length;X++){let U=Y[X];if($&&$.equals(U))continue;Q.push(U),$=U}}if(this.autoClose&&Q.length>1&&!Q[Q.length-1].equals(Q[0]))Q.push(Q[0]);return Q}copy(J){super.copy(J),this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let W=J.curves[Q];this.curves.push(W.clone())}return this.autoClose=J.autoClose,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let Q=0,$=this.curves.length;Q<$;Q++){let W=this.curves[Q];J.curves.push(W.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let W=J.curves[Q];this.curves.push(new wZ[W.type]().fromJSON(W))}return this}}class JW extends vK{constructor(J){super();if(this.type="Path",this.currentPoint=new $0,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let Q=1,$=J.length;Q<$;Q++)this.lineTo(J[Q].x,J[Q].y);return this}moveTo(J,Q){return this.currentPoint.set(J,Q),this}lineTo(J,Q){let $=new zW(this.currentPoint.clone(),new $0(J,Q));return this.curves.push($),this.currentPoint.set(J,Q),this}quadraticCurveTo(J,Q,$,W){let Z=new PW(this.currentPoint.clone(),new $0(J,Q),new $0($,W));return this.curves.push(Z),this.currentPoint.set($,W),this}bezierCurveTo(J,Q,$,W,Z,K){let H=new CW(this.currentPoint.clone(),new $0(J,Q),new $0($,W),new $0(Z,K));return this.curves.push(H),this.currentPoint.set(Z,K),this}splineThru(J){let Q=[this.currentPoint.clone()].concat(J),$=new IW(Q);return this.curves.push($),this.currentPoint.copy(J[J.length-1]),this}arc(J,Q,$,W,Z,K){let H=this.currentPoint.x,Y=this.currentPoint.y;return this.absarc(J+H,Q+Y,$,W,Z,K),this}absarc(J,Q,$,W,Z,K){return this.absellipse(J,Q,$,$,W,Z,K),this}ellipse(J,Q,$,W,Z,K,H,Y){let X=this.currentPoint.x,U=this.currentPoint.y;return this.absellipse(J+X,Q+U,$,W,Z,K,H,Y),this}absellipse(J,Q,$,W,Z,K,H,Y){let X=new nQ(J,Q,$,W,Z,K,H,Y);if(this.curves.length>0){let G=X.getPoint(0);if(!G.equals(this.currentPoint))this.lineTo(G.x,G.y)}this.curves.push(X);let U=X.getPoint(1);return this.currentPoint.copy(U),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class iQ extends JW{constructor(J){super(J);this.uuid=i8(),this.type="Shape",this.holes=[]}getPointsHoles(J){let Q=[];for(let $=0,W=this.holes.length;$<W;$++)Q[$]=this.holes[$].getPoints(J);return Q}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let W=J.holes[Q];this.holes.push(W.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let Q=0,$=this.holes.length;Q<$;Q++){let W=this.holes[Q];J.holes.push(W.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let W=J.holes[Q];this.holes.push(new JW().fromJSON(W))}return this}}function BG(J,Q,$=2){let W=Q&&Q.length,Z=W?Q[0]*$:J.length,K=jX(J,0,Z,$,!0),H=[];if(!K||K.next===K.prev)return H;let Y,X,U;if(W)K=PG(J,Q,K,$);if(J.length>80*$){Y=J[0],X=J[1];let G=Y,E=X;for(let N=$;N<Z;N+=$){let F=J[N],q=J[N+1];if(F<Y)Y=F;if(q<X)X=q;if(F>G)G=F;if(q>E)E=q}U=Math.max(G-Y,E-X),U=U!==0?32767/U:0}return PQ(K,H,$,Y,X,U,0),H}function jX(J,Q,$,W,Z){let K;if(Z===hG(J,Q,$,W)>0)for(let H=Q;H<$;H+=W)K=kY(H/W|0,J[H],J[H+1],K);else for(let H=$-W;H>=Q;H-=W)K=kY(H/W|0,J[H],J[H+1],K);if(K&&w6(K,K.next))AQ(K),K=K.next;return K}function j7(J,Q){if(!J)return J;if(!Q)Q=J;let $=J,W;do if(W=!1,!$.steiner&&(w6($,$.next)||pJ($.prev,$,$.next)===0)){if(AQ($),$=Q=$.prev,$===$.next)break;W=!0}else $=$.next;while(W||$!==Q);return Q}function PQ(J,Q,$,W,Z,K,H){if(!J)return;if(!H&&K)wG(J,W,Z,K);let Y=J;while(J.prev!==J.next){let{prev:X,next:U}=J;if(K?MG(J,W,Z,K):kG(J)){Q.push(X.i,J.i,U.i),AQ(J),J=U.next,Y=U.next;continue}if(J=U,J===Y){if(!H)PQ(j7(J),Q,$,W,Z,K,1);else if(H===1)J=CG(j7(J),Q),PQ(J,Q,$,W,Z,K,2);else if(H===2)zG(J,Q,$,W,Z,K);break}}}function kG(J){let Q=J.prev,$=J,W=J.next;if(pJ(Q,$,W)>=0)return!1;let Z=Q.x,K=$.x,H=W.x,Y=Q.y,X=$.y,U=W.y,G=Math.min(Z,K,H),E=Math.min(Y,X,U),N=Math.max(Z,K,H),F=Math.max(Y,X,U),q=W.next;while(q!==Q){if(q.x>=G&&q.x<=N&&q.y>=E&&q.y<=F&&DQ(Z,Y,K,X,H,U,q.x,q.y)&&pJ(q.prev,q,q.next)>=0)return!1;q=q.next}return!0}function MG(J,Q,$,W){let Z=J.prev,K=J,H=J.next;if(pJ(Z,K,H)>=0)return!1;let Y=Z.x,X=K.x,U=H.x,G=Z.y,E=K.y,N=H.y,F=Math.min(Y,X,U),q=Math.min(G,E,N),V=Math.max(Y,X,U),O=Math.max(G,E,N),R=SZ(F,q,Q,$,W),z=SZ(V,O,Q,$,W),D=J.prevZ,L=J.nextZ;while(D&&D.z>=R&&L&&L.z<=z){if(D.x>=F&&D.x<=V&&D.y>=q&&D.y<=O&&D!==Z&&D!==H&&DQ(Y,G,X,E,U,N,D.x,D.y)&&pJ(D.prev,D,D.next)>=0)return!1;if(D=D.prevZ,L.x>=F&&L.x<=V&&L.y>=q&&L.y<=O&&L!==Z&&L!==H&&DQ(Y,G,X,E,U,N,L.x,L.y)&&pJ(L.prev,L,L.next)>=0)return!1;L=L.nextZ}while(D&&D.z>=R){if(D.x>=F&&D.x<=V&&D.y>=q&&D.y<=O&&D!==Z&&D!==H&&DQ(Y,G,X,E,U,N,D.x,D.y)&&pJ(D.prev,D,D.next)>=0)return!1;D=D.prevZ}while(L&&L.z<=z){if(L.x>=F&&L.x<=V&&L.y>=q&&L.y<=O&&L!==Z&&L!==H&&DQ(Y,G,X,E,U,N,L.x,L.y)&&pJ(L.prev,L,L.next)>=0)return!1;L=L.nextZ}return!0}function CG(J,Q){let $=J;do{let W=$.prev,Z=$.next.next;if(!w6(W,Z)&&vX(W,$,$.next,Z)&&IQ(W,Z)&&IQ(Z,W))Q.push(W.i,$.i,Z.i),AQ($),AQ($.next),$=J=Z;$=$.next}while($!==J);return j7($)}function zG(J,Q,$,W,Z,K){let H=J;do{let Y=H.next.next;while(Y!==H.prev){if(H.i!==Y.i&&yG(H,Y)){let X=fX(H,Y);H=j7(H,H.next),X=j7(X,X.next),PQ(H,Q,$,W,Z,K,0),PQ(X,Q,$,W,Z,K,0);return}Y=Y.next}H=H.next}while(H!==J)}function PG(J,Q,$,W){let Z=[];for(let K=0,H=Q.length;K<H;K++){let Y=Q[K]*W,X=K<H-1?Q[K+1]*W:J.length,U=jX(J,Y,X,W,!1);if(U===U.next)U.steiner=!0;Z.push(jG(U))}Z.sort(IG);for(let K=0;K<Z.length;K++)$=AG(Z[K],$);return $}function IG(J,Q){let $=J.x-Q.x;if($===0){if($=J.y-Q.y,$===0){let W=(J.next.y-J.y)/(J.next.x-J.x),Z=(Q.next.y-Q.y)/(Q.next.x-Q.x);$=W-Z}}return $}function AG(J,Q){let $=_G(J,Q);if(!$)return Q;let W=fX($,J);return j7(W,W.next),j7($,$.next)}function _G(J,Q){let $=Q,W=J.x,Z=J.y,K=-1/0,H;if(w6(J,$))return $;do{if(w6(J,$.next))return $.next;else if(Z<=$.y&&Z>=$.next.y&&$.next.y!==$.y){let E=$.x+(Z-$.y)*($.next.x-$.x)/($.next.y-$.y);if(E<=W&&E>K){if(K=E,H=$.x<$.next.x?$:$.next,E===W)return H}}$=$.next}while($!==Q);if(!H)return null;let Y=H,X=H.x,U=H.y,G=1/0;$=H;do{if(W>=$.x&&$.x>=X&&W!==$.x&&yX(Z<U?W:K,Z,X,U,Z<U?K:W,Z,$.x,$.y)){let E=Math.abs(Z-$.y)/(W-$.x);if(IQ($,J)&&(E<G||E===G&&($.x>H.x||$.x===H.x&&TG(H,$))))H=$,G=E}$=$.next}while($!==Y);return H}function TG(J,Q){return pJ(J.prev,J,Q.prev)<0&&pJ(Q.next,J,J.next)<0}function wG(J,Q,$,W){let Z=J;do{if(Z.z===0)Z.z=SZ(Z.x,Z.y,Q,$,W);Z.prevZ=Z.prev,Z.nextZ=Z.next,Z=Z.next}while(Z!==J);Z.prevZ.nextZ=null,Z.prevZ=null,SG(Z)}function SG(J){let Q,$=1;do{let W=J,Z;J=null;let K=null;Q=0;while(W){Q++;let H=W,Y=0;for(let U=0;U<$;U++)if(Y++,H=H.nextZ,!H)break;let X=$;while(Y>0||X>0&&H){if(Y!==0&&(X===0||!H||W.z<=H.z))Z=W,W=W.nextZ,Y--;else Z=H,H=H.nextZ,X--;if(K)K.nextZ=Z;else J=Z;Z.prevZ=K,K=Z}W=H}K.nextZ=null,$*=2}while(Q>1);return J}function SZ(J,Q,$,W,Z){return J=(J-$)*Z|0,Q=(Q-W)*Z|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,Q=(Q|Q<<8)&16711935,Q=(Q|Q<<4)&252645135,Q=(Q|Q<<2)&858993459,Q=(Q|Q<<1)&1431655765,J|Q<<1}function jG(J){let Q=J,$=J;do{if(Q.x<$.x||Q.x===$.x&&Q.y<$.y)$=Q;Q=Q.next}while(Q!==J);return $}function yX(J,Q,$,W,Z,K,H,Y){return(Z-H)*(Q-Y)>=(J-H)*(K-Y)&&(J-H)*(W-Y)>=($-H)*(Q-Y)&&($-H)*(K-Y)>=(Z-H)*(W-Y)}function DQ(J,Q,$,W,Z,K,H,Y){return!(J===H&&Q===Y)&&yX(J,Q,$,W,Z,K,H,Y)}function yG(J,Q){return J.next.i!==Q.i&&J.prev.i!==Q.i&&!vG(J,Q)&&(IQ(J,Q)&&IQ(Q,J)&&fG(J,Q)&&(pJ(J.prev,J,Q.prev)||pJ(J,Q.prev,Q))||w6(J,Q)&&pJ(J.prev,J,J.next)>0&&pJ(Q.prev,Q,Q.next)>0)}function pJ(J,Q,$){return(Q.y-J.y)*($.x-Q.x)-(Q.x-J.x)*($.y-Q.y)}function w6(J,Q){return J.x===Q.x&&J.y===Q.y}function vX(J,Q,$,W){let Z=i$(pJ(J,Q,$)),K=i$(pJ(J,Q,W)),H=i$(pJ($,W,J)),Y=i$(pJ($,W,Q));if(Z!==K&&H!==Y)return!0;if(Z===0&&s$(J,$,Q))return!0;if(K===0&&s$(J,W,Q))return!0;if(H===0&&s$($,J,W))return!0;if(Y===0&&s$($,Q,W))return!0;return!1}function s$(J,Q,$){return Q.x<=Math.max(J.x,$.x)&&Q.x>=Math.min(J.x,$.x)&&Q.y<=Math.max(J.y,$.y)&&Q.y>=Math.min(J.y,$.y)}function i$(J){return J>0?1:J<0?-1:0}function vG(J,Q){let $=J;do{if($.i!==J.i&&$.next.i!==J.i&&$.i!==Q.i&&$.next.i!==Q.i&&vX($,$.next,J,Q))return!0;$=$.next}while($!==J);return!1}function IQ(J,Q){return pJ(J.prev,J,J.next)<0?pJ(J,Q,J.next)>=0&&pJ(J,J.prev,Q)>=0:pJ(J,Q,J.prev)<0||pJ(J,J.next,Q)<0}function fG(J,Q){let $=J,W=!1,Z=(J.x+Q.x)/2,K=(J.y+Q.y)/2;do{if($.y>K!==$.next.y>K&&$.next.y!==$.y&&Z<($.next.x-$.x)*(K-$.y)/($.next.y-$.y)+$.x)W=!W;$=$.next}while($!==J);return W}function fX(J,Q){let $=jZ(J.i,J.x,J.y),W=jZ(Q.i,Q.x,Q.y),Z=J.next,K=Q.prev;return J.next=Q,Q.prev=J,$.next=Z,Z.prev=$,W.next=$,$.prev=W,K.next=W,W.prev=K,W}function kY(J,Q,$,W){let Z=jZ(J,Q,$);if(!W)Z.prev=Z,Z.next=Z;else Z.next=W.next,Z.prev=W,W.next.prev=Z,W.next=Z;return Z}function AQ(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function jZ(J,Q,$){return{i:J,x:Q,y:$,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function hG(J,Q,$,W){let Z=0;for(let K=Q,H=$-W;K<$;K+=W)Z+=(J[H]-J[K])*(J[K+1]+J[H+1]),H=K;return Z}class hX{static triangulate(J,Q,$=2){return BG(J,Q,$)}}class A6{static area(J){let Q=J.length,$=0;for(let W=Q-1,Z=0;Z<Q;W=Z++)$+=J[W].x*J[Z].y-J[Z].x*J[W].y;return $*0.5}static isClockWise(J){return A6.area(J)<0}static triangulateShape(J,Q){let $=[],W=[],Z=[];MY(J),CY($,J);let K=J.length;Q.forEach(MY);for(let Y=0;Y<Q.length;Y++)W.push(K),K+=Q[Y].length,CY($,Q[Y]);let H=hX.triangulate($,W);for(let Y=0;Y<H.length;Y+=3)Z.push(H.slice(Y,Y+3));return Z}}function MY(J){let Q=J.length;if(Q>2&&J[Q-1].equals(J[0]))J.pop()}function CY(J,Q){for(let $=0;$<Q.length;$++)J.push(Q[$].x),J.push(Q[$].y)}class F7 extends yJ{constructor(J=[new $0(0,-0.5),new $0(0.5,0),new $0(0,0.5)],Q=12,$=0,W=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:J,segments:Q,phiStart:$,phiLength:W},Q=Math.floor(Q),W=WJ(W,0,Math.PI*2);let Z=[],K=[],H=[],Y=[],X=[],U=1/Q,G=new T,E=new $0,N=new T,F=new T,q=new T,V=0,O=0;for(let R=0;R<=J.length-1;R++)switch(R){case 0:V=J[R+1].x-J[R].x,O=J[R+1].y-J[R].y,N.x=O*1,N.y=-V,N.z=O*0,q.copy(N),N.normalize(),Y.push(N.x,N.y,N.z);break;case J.length-1:Y.push(q.x,q.y,q.z);break;default:V=J[R+1].x-J[R].x,O=J[R+1].y-J[R].y,N.x=O*1,N.y=-V,N.z=O*0,F.copy(N),N.x+=q.x,N.y+=q.y,N.z+=q.z,N.normalize(),Y.push(N.x,N.y,N.z),q.copy(F)}for(let R=0;R<=Q;R++){let z=$+R*U*W,D=Math.sin(z),L=Math.cos(z);for(let M=0;M<=J.length-1;M++){G.x=J[M].x*D,G.y=J[M].y,G.z=J[M].x*L,K.push(G.x,G.y,G.z),E.x=R/Q,E.y=M/(J.length-1),H.push(E.x,E.y);let I=Y[3*M+0]*D,w=Y[3*M+1],B=Y[3*M+0]*L;X.push(I,w,B)}}for(let R=0;R<Q;R++)for(let z=0;z<J.length-1;z++){let D=z+R*J.length,L=D,M=D+J.length,I=D+J.length+1,w=D+1;Z.push(L,M,w),Z.push(I,w,M)}this.setIndex(Z),this.setAttribute("position",new UJ(K,3)),this.setAttribute("uv",new UJ(H,2)),this.setAttribute("normal",new UJ(X,3))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new F7(J.points,J.segments,J.phiStart,J.phiLength)}}class K8 extends yJ{constructor(J=1,Q=1,$=1,W=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:W};let Z=J/2,K=Q/2,H=Math.floor($),Y=Math.floor(W),X=H+1,U=Y+1,G=J/H,E=Q/Y,N=[],F=[],q=[],V=[];for(let O=0;O<U;O++){let R=O*E-K;for(let z=0;z<X;z++){let D=z*G-Z;F.push(D,-R,0),q.push(0,0,1),V.push(z/H),V.push(1-O/Y)}}for(let O=0;O<Y;O++)for(let R=0;R<H;R++){let z=R+X*O,D=R+X*(O+1),L=R+1+X*(O+1),M=R+1+X*O;N.push(z,D,M),N.push(D,L,M)}this.setIndex(N),this.setAttribute("position",new UJ(F,3)),this.setAttribute("normal",new UJ(q,3)),this.setAttribute("uv",new UJ(V,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new K8(J.width,J.height,J.widthSegments,J.heightSegments)}}class oQ extends yJ{constructor(J=new iQ([new $0(0,0.5),new $0(-0.5,-0.5),new $0(0.5,-0.5)]),Q=12){super();this.type="ShapeGeometry",this.parameters={shapes:J,curveSegments:Q};let $=[],W=[],Z=[],K=[],H=0,Y=0;if(Array.isArray(J)===!1)X(J);else for(let U=0;U<J.length;U++)X(J[U]),this.addGroup(H,Y,U),H+=Y,Y=0;this.setIndex($),this.setAttribute("position",new UJ(W,3)),this.setAttribute("normal",new UJ(Z,3)),this.setAttribute("uv",new UJ(K,2));function X(U){let G=W.length/3,E=U.extractPoints(Q),N=E.shape,F=E.holes;if(A6.isClockWise(N)===!1)N=N.reverse();for(let V=0,O=F.length;V<O;V++){let R=F[V];if(A6.isClockWise(R)===!0)F[V]=R.reverse()}let q=A6.triangulateShape(N,F);for(let V=0,O=F.length;V<O;V++){let R=F[V];N=N.concat(R)}for(let V=0,O=N.length;V<O;V++){let R=N[V];W.push(R.x,R.y,0),Z.push(0,0,1),K.push(R.x,R.y)}for(let V=0,O=q.length;V<O;V++){let R=q[V],z=R[0]+G,D=R[1]+G,L=R[2]+G;$.push(z,D,L),Y+=3}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Q=this.parameters.shapes;return bG(Q,J)}static fromJSON(J,Q){let $=[];for(let W=0,Z=J.shapes.length;W<Z;W++){let K=Q[J.shapes[W]];$.push(K)}return new oQ($,J.curveSegments)}}function bG(J,Q){if(Q.shapes=[],Array.isArray(J))for(let $=0,W=J.length;$<W;$++){let Z=J[$];Q.shapes.push(Z.uuid)}else Q.shapes.push(J.uuid);return Q}class P8 extends yJ{constructor(J=1,Q=32,$=16,W=0,Z=Math.PI*2,K=0,H=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:$,phiStart:W,phiLength:Z,thetaStart:K,thetaLength:H},Q=Math.max(3,Math.floor(Q)),$=Math.max(2,Math.floor($));let Y=Math.min(K+H,Math.PI),X=0,U=[],G=new T,E=new T,N=[],F=[],q=[],V=[];for(let O=0;O<=$;O++){let R=[],z=O/$,D=K+z*H,L=J*Math.cos(D),M=Math.sqrt(J*J-L*L),I=0;if(O===0&&K===0)I=0.5/Q;else if(O===$&&Y===Math.PI)I=-0.5/Q;for(let w=0;w<=Q;w++){let B=w/Q,_=W+B*Z;G.x=-M*Math.cos(_),G.y=L,G.z=M*Math.sin(_),F.push(G.x,G.y,G.z),E.copy(G).normalize(),q.push(E.x,E.y,E.z),V.push(B+I,1-z),R.push(X++)}U.push(R)}for(let O=0;O<$;O++)for(let R=0;R<Q;R++){let z=U[O][R+1],D=U[O][R],L=U[O+1][R],M=U[O+1][R+1];if(O!==0||K>0)N.push(z,D,M);if(O!==$-1||Y<Math.PI)N.push(D,L,M)}this.setIndex(N),this.setAttribute("position",new UJ(F,3)),this.setAttribute("normal",new UJ(q,3)),this.setAttribute("uv",new UJ(V,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new P8(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class q7 extends yJ{constructor(J=1,Q=0.4,$=12,W=48,Z=Math.PI*2,K=0,H=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:$,tubularSegments:W,arc:Z,thetaStart:K,thetaLength:H},$=Math.floor($),W=Math.floor(W);let Y=[],X=[],U=[],G=[],E=new T,N=new T,F=new T;for(let q=0;q<=$;q++){let V=K+q/$*H;for(let O=0;O<=W;O++){let R=O/W*Z;N.x=(J+Q*Math.cos(V))*Math.cos(R),N.y=(J+Q*Math.cos(V))*Math.sin(R),N.z=Q*Math.sin(V),X.push(N.x,N.y,N.z),E.x=J*Math.cos(R),E.y=J*Math.sin(R),F.subVectors(N,E).normalize(),U.push(F.x,F.y,F.z),G.push(O/W),G.push(q/$)}}for(let q=1;q<=$;q++)for(let V=1;V<=W;V++){let O=(W+1)*q+V-1,R=(W+1)*(q-1)+V-1,z=(W+1)*(q-1)+V,D=(W+1)*q+V;Y.push(O,R,D),Y.push(R,z,D)}this.setIndex(Y),this.setAttribute("position",new UJ(X,3)),this.setAttribute("normal",new UJ(U,3)),this.setAttribute("uv",new UJ(G,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new q7(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc,J.thetaStart,J.thetaLength)}}class m9 extends yJ{constructor(J=new p9(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),Q=64,$=1,W=8,Z=!1){super();this.type="TubeGeometry",this.parameters={path:J,tubularSegments:Q,radius:$,radialSegments:W,closed:Z};let K=J.computeFrenetFrames(Q,Z);this.tangents=K.tangents,this.normals=K.normals,this.binormals=K.binormals;let H=new T,Y=new T,X=new $0,U=new T,G=[],E=[],N=[],F=[];q(),this.setIndex(F),this.setAttribute("position",new UJ(G,3)),this.setAttribute("normal",new UJ(E,3)),this.setAttribute("uv",new UJ(N,2));function q(){for(let z=0;z<Q;z++)V(z);V(Z===!1?Q:0),R(),O()}function V(z){U=J.getPointAt(z/Q,U);let D=K.normals[z],L=K.binormals[z];for(let M=0;M<=W;M++){let I=M/W*Math.PI*2,w=Math.sin(I),B=-Math.cos(I);Y.x=B*D.x+w*L.x,Y.y=B*D.y+w*L.y,Y.z=B*D.z+w*L.z,Y.normalize(),E.push(Y.x,Y.y,Y.z),H.x=U.x+$*Y.x,H.y=U.y+$*Y.y,H.z=U.z+$*Y.z,G.push(H.x,H.y,H.z)}}function O(){for(let z=1;z<=Q;z++)for(let D=1;D<=W;D++){let L=(W+1)*(z-1)+(D-1),M=(W+1)*z+(D-1),I=(W+1)*z+D,w=(W+1)*(z-1)+D;F.push(L,M,w),F.push(M,I,w)}}function R(){for(let z=0;z<=Q;z++)for(let D=0;D<=W;D++)X.x=z/Q,X.y=D/W,N.push(X.x,X.y)}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON();return J.path=this.parameters.path.toJSON(),J}static fromJSON(J){return new m9(new wZ[J.path.type]().fromJSON(J.path),J.tubularSegments,J.radius,J.radialSegments,J.closed)}}function c7(J){let Q={};for(let $ in J){Q[$]={};for(let W in J[$]){let Z=J[$][W];if(zY(Z))if(Z.isRenderTargetTexture)x0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][W]=null;else Q[$][W]=Z.clone();else if(Array.isArray(Z))if(zY(Z[0])){let K=[];for(let H=0,Y=Z.length;H<Y;H++)K[H]=Z[H].clone();Q[$][W]=K}else Q[$][W]=Z.slice();else Q[$][W]=Z}}return Q}function B8(J){let Q={};for(let $=0;$<J.length;$++){let W=c7(J[$]);for(let Z in W)Q[Z]=W[Z]}return Q}function zY(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function xG(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function fK(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return KJ.workingColorSpace}var l9={clone:c7,merge:B8},gG=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pG=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lJ extends j8{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gG,this.fragmentShader=pG,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=c7(J.uniforms),this.uniformsGroups=xG(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let W in this.uniforms){let K=this.uniforms[W].value;if(K&&K.isTexture)Q.uniforms[W]={type:"t",value:K.toJSON(J).uuid};else if(K&&K.isColor)Q.uniforms[W]={type:"c",value:K.getHex()};else if(K&&K.isVector2)Q.uniforms[W]={type:"v2",value:K.toArray()};else if(K&&K.isVector3)Q.uniforms[W]={type:"v3",value:K.toArray()};else if(K&&K.isVector4)Q.uniforms[W]={type:"v4",value:K.toArray()};else if(K&&K.isMatrix3)Q.uniforms[W]={type:"m3",value:K.toArray()};else if(K&&K.isMatrix4)Q.uniforms[W]={type:"m4",value:K.toArray()};else Q.uniforms[W]={value:K}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let W in this.extensions)if(this.extensions[W]===!0)$[W]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let W=J.uniforms[$];switch(this.uniforms[$]={},W.type){case"t":this.uniforms[$].value=Q[W.value]||null;break;case"c":this.uniforms[$].value=new y0().setHex(W.value);break;case"v2":this.uniforms[$].value=new $0().fromArray(W.value);break;case"v3":this.uniforms[$].value=new T().fromArray(W.value);break;case"v4":this.uniforms[$].value=new SJ().fromArray(W.value);break;case"m3":this.uniforms[$].value=new e0().fromArray(W.value);break;case"m4":this.uniforms[$].value=new n0().fromArray(W.value);break;default:this.uniforms[$].value=W.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class aQ extends lJ{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class JJ extends j8{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new y0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new y0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new $0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Y9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class E8 extends JJ{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return WJ(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new y0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new y0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new y0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(J){if(this._retroreflectivity>0!==J>0)this.version++;this._retroreflectivity=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.retroreflectivity=J.retroreflectivity,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class hK extends j8{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class bK extends j8{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function J7(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function r$(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}function mG(J){function Q(Z,K){return J[Z]-J[K]}let $=J.length,W=Array($);for(let Z=0;Z!==$;++Z)W[Z]=Z;return W.sort(Q),W}function PY(J,Q,$){let W=J.length,Z=new J.constructor(W);for(let K=0,H=0;H!==W;++K){let Y=$[K]*Q;for(let X=0;X!==Q;++X)Z[H++]=J[Y+X]}return Z}function lG(J,Q,$,W){let Z=1,K=J[0];while(K!==void 0&&K[W]===void 0)K=J[Z++];if(K===void 0)return;let H=K[W];if(H===void 0)return;if(Array.isArray(H))do{if(H=K[W],H!==void 0)Q.push(K.time),$.push(...H);K=J[Z++]}while(K!==void 0);else if(H.toArray!==void 0)do{if(H=K[W],H!==void 0)Q.push(K.time),H.toArray($,$.length);K=J[Z++]}while(K!==void 0);else do{if(H=K[W],H!==void 0)Q.push(K.time),$.push(H);K=J[Z++]}while(K!==void 0)}class u9{constructor(J,Q,$,W){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=W!==void 0?W:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,W=Q[$],Z=Q[$-1];J:{Q:{let K;$:{W:if(!(J<W)){for(let H=$+2;;){if(W===void 0){if(J<Z)break W;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===H)break;if(Z=W,W=Q[++$],J<W)break Q}K=Q.length;break $}if(!(J>=Z)){let H=Q[1];if(J<H)$=2,Z=H;for(let Y=$-2;;){if(Z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(W=Z,Z=Q[--$-1],J>=Z)break Q}K=$,$=0;break $}break J}while($<K){let H=$+K>>>1;if(J<Q[H])K=H;else $=H+1}if(W=Q[$],Z=Q[$-1],Z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(W===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,Z,W)}return this.interpolate_($,Z,J,W)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,W=this.valueSize,Z=J*W;for(let K=0;K!==W;++K)Q[K]=$[Z+K];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class xK extends u9{constructor(J,Q,$,W){super(J,Q,$,W);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let W=this.parameterPositions,Z=J-2,K=J+1,H=W[Z],Y=W[K];if(H===void 0)switch(this.getSettings_().endingStart){case 2401:Z=J,H=2*Q-$;break;case 2402:Z=W.length-2,H=Q+W[Z]-W[Z+1];break;default:Z=J,H=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:K=J,Y=2*$-Q;break;case 2402:K=1,Y=$+W[1]-W[0];break;default:K=J-1,Y=Q}let X=($-Q)*0.5,U=this.valueSize;this._weightPrev=X/(Q-H),this._weightNext=X/(Y-$),this._offsetPrev=Z*U,this._offsetNext=K*U}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this._offsetPrev,G=this._offsetNext,E=this._weightPrev,N=this._weightNext,F=($-Q)/(W-Q),q=F*F,V=q*F,O=-E*V+2*E*q-E*F,R=(1+E)*V+(-1.5-2*E)*q+(-0.5+E)*F+1,z=(-1-N)*V+(1.5+N)*q+0.5*F,D=N*V-N*q;for(let L=0;L!==H;++L)Z[L]=O*K[U+L]+R*K[X+L]+z*K[Y+L]+D*K[G+L];return Z}}class AW extends u9{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=($-Q)/(W-Q),G=1-U;for(let E=0;E!==H;++E)Z[E]=K[X+E]*G+K[Y+E]*U;return Z}}class gK extends u9{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J){return this.copySampleValue_(J-1)}}class pK extends u9{interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this.inTangents,G=this.outTangents;if(!U||!G){let F=($-Q)/(W-Q),q=1-F;for(let V=0;V!==H;++V)Z[V]=K[X+V]*q+K[Y+V]*F;return Z}let E=H*2,N=J-1;for(let F=0;F!==H;++F){let q=K[X+F],V=K[Y+F],O=N*E+F*2,R=G[O],z=G[O+1],D=J*E+F*2,L=U[D],M=U[D+1],I=dG($,Q,R,L,W);Z[F]=bX(I,q,z,M,V)}return Z}}function bX(J,Q,$,W,Z){let K=1-J;return K*K*K*Q+3*K*K*J*$+3*K*J*J*W+J*J*J*Z}function uG(J,Q,$,W,Z){let K=1-J;return 3*K*K*($-Q)+6*K*J*(W-$)+3*J*J*(Z-W)}function dG(J,Q,$,W,Z){let K=(J-Q)/(Z-Q);for(let H=0;H<8;H++){let Y=bX(K,Q,$,W,Z)-J;if(Math.abs(Y)<0.0000000001)break;let X=uG(K,Q,$,W,Z);if(Math.abs(X)<0.0000000001)break;K=Math.max(0,Math.min(1,K-Y/X))}return K}class m8{constructor(J,Q,$,W){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=J7(Q,this.TimeBufferType),this.values=J7($,this.ValueBufferType),this.setInterpolation(W||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:J7(J.times,Array),values:J7(J.values,Array)};let W=J.getInterpolation();if(W!==J.DefaultInterpolation)$.interpolation=W;if(r$(J.settings))$.settings={inTangents:J7(J.settings.inTangents,Array),outTangents:J7(J.settings.outTangents,Array)}}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new gK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new AW(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new xK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new pK(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return x0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,W=Q.length;$!==W;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,W=Q.length;$!==W;++$)Q[$]*=J;if(r$(this.settings))IY(this.settings.inTangents,J),IY(this.settings.outTangents,J)}return this}trim(J,Q){let $=this.times,W=$.length,Z=0,K=W-1;while(Z!==W&&$[Z]<J)++Z;while(K!==-1&&$[K]>Q)--K;if(++K,Z!==0||K!==W){if(Z>=K)K=Math.max(K,1),Z=K-1;let H=this.getValueSize();this.times=$.slice(Z,K),this.values=this.values.slice(Z*H,K*H)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)i0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,W=this.values,Z=$.length;if(Z===0)i0("KeyframeTrack: Track is empty.",this),J=!1;let K=null;for(let H=0;H!==Z;H++){let Y=$[H];if(typeof Y==="number"&&isNaN(Y)){i0("KeyframeTrack: Time is not a valid number.",this,H,Y),J=!1;break}if(K!==null&&K>Y){i0("KeyframeTrack: Out of order keys.",this,H,Y,K),J=!1;break}K=Y}if(W!==void 0){if(T5(W))for(let H=0,Y=W.length;H!==Y;++H){let X=W[H];if(isNaN(X)){i0("KeyframeTrack: Value is not a valid number.",this,H,X),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),W=this.getInterpolation()===2302,Z=J.length-1,K=1;for(let H=1;H<Z;++H){let Y=!1,X=J[H],U=J[H+1];if(X!==U&&(H!==1||X!==J[0]))if(!W){let G=H*$,E=G-$,N=G+$;for(let F=0;F!==$;++F){let q=Q[G+F];if(q!==Q[E+F]||q!==Q[N+F]){Y=!0;break}}}else Y=!0;if(Y){if(H!==K){J[K]=J[H];let G=H*$,E=K*$;for(let N=0;N!==$;++N)Q[E+N]=Q[G+N]}++K}}if(Z>0){J[K]=J[Z];for(let H=Z*$,Y=K*$,X=0;X!==$;++X)Q[Y+X]=Q[H+X];++K}if(K!==J.length)this.times=J.slice(0,K),this.values=Q.slice(0,K*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),W=new this.constructor(this.name,J,Q);if(W.createInterpolant=this.createInterpolant,r$(this.settings))W.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return W}}function IY(J,Q){for(let $=0,W=J.length;$!==W;$+=2)J[$]*=Q}m8.prototype.ValueTypeName="";m8.prototype.TimeBufferType=Float32Array;m8.prototype.ValueBufferType=Float32Array;m8.prototype.DefaultInterpolation=2301;class O7 extends m8{constructor(J,Q,$){super(J,Q,$)}}O7.prototype.ValueTypeName="bool";O7.prototype.ValueBufferType=Array;O7.prototype.DefaultInterpolation=2300;O7.prototype.InterpolantFactoryMethodLinear=void 0;O7.prototype.InterpolantFactoryMethodSmooth=void 0;class _W extends m8{constructor(J,Q,$,W){super(J,Q,$,W)}}_W.prototype.ValueTypeName="color";class R7 extends m8{constructor(J,Q,$,W){super(J,Q,$,W)}}R7.prototype.ValueTypeName="number";class mK extends u9{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=($-Q)/(W-Q),X=J*H;for(let U=X+H;X!==U;X+=4)VJ.slerpFlat(Z,0,K,X-H,K,X,Y);return Z}}class L7 extends m8{constructor(J,Q,$,W){super(J,Q,$,W)}InterpolantFactoryMethodLinear(J){return new mK(this.times,this.values,this.getValueSize(),J)}}L7.prototype.ValueTypeName="quaternion";L7.prototype.InterpolantFactoryMethodSmooth=void 0;class V7 extends m8{constructor(J,Q,$){super(J,Q,$)}}V7.prototype.ValueTypeName="string";V7.prototype.ValueBufferType=Array;V7.prototype.DefaultInterpolation=2300;V7.prototype.InterpolantFactoryMethodLinear=void 0;V7.prototype.InterpolantFactoryMethodSmooth=void 0;class n7 extends m8{constructor(J,Q,$,W){super(J,Q,$,W)}}n7.prototype.ValueTypeName="vector";class S6{constructor(J="",Q=-1,$=[],W=2500){if(this.name=J,this.tracks=$,this.duration=Q,this.blendMode=W,this.uuid=i8(),this.userData={},this.duration<0)this.resetDuration()}static parse(J){let Q=[],$=J.tracks,W=1/(J.fps||1);for(let K=0,H=$.length;K!==H;++K)Q.push(nG($[K]).scale(W));let Z=new this(J.name,J.duration,Q,J.blendMode);return Z.uuid=J.uuid,Z.userData=JSON.parse(J.userData||"{}"),Z}static toJSON(J){let Q=[],$=J.tracks,W={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode,userData:JSON.stringify(J.userData)};for(let Z=0,K=$.length;Z!==K;++Z)Q.push(m8.toJSON($[Z]));return W}static CreateFromMorphTargetSequence(J,Q,$,W){let Z=Q.length,K=[];for(let H=0;H<Z;H++){let Y=[],X=[];Y.push((H+Z-1)%Z,H,(H+1)%Z),X.push(0,1,0);let U=mG(Y);if(Y=PY(Y,1,U),X=PY(X,1,U),!W&&Y[0]===0)Y.push(Z),X.push(X[0]);K.push(new R7(".morphTargetInfluences["+Q[H].name+"]",Y,X).scale(1/$))}return new this(J,-1,K)}static findByName(J,Q){let $=J;if(!Array.isArray(J)){let W=J;$=W.geometry&&W.geometry.animations||W.animations}for(let W=0;W<$.length;W++)if($[W].name===Q)return $[W];return null}static CreateClipsFromMorphTargetSequences(J,Q,$){let W={},Z=/^([\w-]*?)([\d]+)$/;for(let H=0,Y=J.length;H<Y;H++){let X=J[H],U=X.name.match(Z);if(U&&U.length>1){let G=U[1],E=W[G];if(!E)W[G]=E=[];E.push(X)}}let K=[];for(let H in W)K.push(this.CreateFromMorphTargetSequence(H,W[H],Q,$));return K}resetDuration(){let J=this.tracks,Q=0;for(let $=0,W=J.length;$!==W;++$){let Z=this.tracks[$];Q=Math.max(Q,Z.times[Z.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let $=0;$<this.tracks.length;$++)J.push(this.tracks[$].clone());let Q=new this.constructor(this.name,this.duration,J,this.blendMode);return Q.userData=JSON.parse(JSON.stringify(this.userData)),Q}toJSON(){return this.constructor.toJSON(this)}}function cG(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return R7;case"vector":case"vector2":case"vector3":case"vector4":return n7;case"color":return _W;case"quaternion":return L7;case"bool":case"boolean":return O7;case"string":return V7}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function nG(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=cG(J.type);if(J.times===void 0){let W=[],Z=[];lG(J.keys,W,Z,"value"),J.times=W,J.values=Z}let $;if(Q.parse!==void 0)$=Q.parse(J);else $=new Q(J.name,J.times,J.values,J.interpolation);if(r$(J.settings))$.settings={inTangents:J7(J.settings.inTangents,Float32Array),outTangents:J7(J.settings.outTangents,Float32Array)};return $}var B9={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;if(AY(J))return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;if(AY(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function AY(J){try{let Q=J.slice(J.indexOf(":")+1);return new URL(Q).protocol==="blob:"}catch(Q){return!1}}class lK{constructor(J,Q,$){let W=this,Z=!1,K=0,H=0,Y=void 0,X=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(H++,Z===!1){if(W.onStart!==void 0)W.onStart(U,K,H)}Z=!0},this.itemEnd=function(U){if(K++,W.onProgress!==void 0)W.onProgress(U,K,H);if(K===H){if(Z=!1,W.onLoad!==void 0)W.onLoad()}},this.itemError=function(U){if(W.onError!==void 0)W.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,G){return X.push(U,G),this},this.removeHandler=function(U){let G=X.indexOf(U);if(G!==-1)X.splice(G,2);return this},this.getHandler=function(U){for(let G=0,E=X.length;G<E;G+=2){let N=X[G],F=X[G+1];if(N.global)N.lastIndex=0;if(N.test(U))return F}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var xX=new lK;class d9{constructor(J){if(this.manager=J!==void 0?J:xX,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(W,Z){$.load(J,W,Q,Z)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}d9.DEFAULT_MATERIAL_NAME="__DEFAULT";var b9={};class gX extends Error{constructor(J,Q){super(J);this.response=Q}}class rQ extends d9{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,Q,$,W){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=B9.get(`file:${J}`);if(Z!==void 0){this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(Z);this.manager.itemEnd(J)},0);return}if(b9[J]!==void 0){b9[J].push({onLoad:Q,onProgress:$,onError:W});return}b9[J]=[],b9[J].push({onLoad:Q,onProgress:$,onError:W});let K=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),H=this.mimeType,Y=this.responseType;fetch(K).then((X)=>{if(X.status===200||X.status===0){if(X.status===0)x0("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||X.body===void 0||X.body.getReader===void 0)return X;let U=b9[J],G=X.body.getReader(),E=X.headers.get("X-File-Size")||X.headers.get("Content-Length"),N=E?parseInt(E):0,F=N!==0,q=0,V=new ReadableStream({start(O){R();function R(){G.read().then(({done:z,value:D})=>{if(z)O.close();else{q+=D.byteLength;let L=new ProgressEvent("progress",{lengthComputable:F,loaded:q,total:N});for(let M=0,I=U.length;M<I;M++){let w=U[M];if(w.onProgress)w.onProgress(L)}O.enqueue(D),R()}},(z)=>{O.error(z)})}}});return new Response(V)}else throw new gX(`fetch for "${X.url}" responded with ${X.status}: ${X.statusText}`,X)}).then((X)=>{switch(Y){case"arraybuffer":return X.arrayBuffer();case"blob":return X.blob();case"document":return X.text().then((U)=>{return new DOMParser().parseFromString(U,H)});case"json":return X.json();default:if(H==="")return X.text();else{let G=/charset="?([^;"\s]*)"?/i.exec(H),E=G&&G[1]?G[1].toLowerCase():void 0,N=new TextDecoder(E);return X.arrayBuffer().then((F)=>N.decode(F))}}}).then((X)=>{B9.add(`file:${J}`,X);let U=b9[J];delete b9[J];for(let G=0,E=U.length;G<E;G++){let N=U[G];if(N.onLoad)N.onLoad(X)}}).catch((X)=>{let U=b9[J];if(U===void 0)throw this.manager.itemError(J),X;delete b9[J];for(let G=0,E=U.length;G<E;G++){let N=U[G];if(N.onError)N.onError(X)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var C6=new WeakMap;class uK extends d9{constructor(J){super(J)}load(J,Q,$,W){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=this,K=B9.get(`image:${J}`);if(K!==void 0){if(K.complete===!0)Z.manager.itemStart(J),setTimeout(function(){if(Q)Q(K);Z.manager.itemEnd(J)},0);else{let G=C6.get(K);if(G===void 0)G=[],C6.set(K,G);G.push({onLoad:Q,onError:W})}return K}let H=_6("img");function Y(){if(U(),Q)Q(this);let G=C6.get(this)||[];for(let E=0;E<G.length;E++){let N=G[E];if(N.onLoad)N.onLoad(this)}C6.delete(this),Z.manager.itemEnd(J)}function X(G){if(U(),W)W(G);B9.remove(`image:${J}`);let E=C6.get(this)||[];for(let N=0;N<E.length;N++){let F=E[N];if(F.onError)F.onError(G)}C6.delete(this),Z.manager.itemError(J),Z.manager.itemEnd(J)}function U(){H.removeEventListener("load",Y,!1),H.removeEventListener("error",X,!1)}if(H.addEventListener("load",Y,!1),H.addEventListener("error",X,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)H.crossOrigin=this.crossOrigin}return B9.add(`image:${J}`,H),Z.manager.itemStart(J),H.src=J,H}}class TW extends d9{constructor(J){super(J)}load(J,Q,$,W){let Z=new oJ,K=new uK(this.manager);return K.setCrossOrigin(this.crossOrigin),K.setPath(this.path),K.load(J,function(H){if(Z.image=H,Z.needsUpdate=!0,Q!==void 0)Q(Z)},$,W),Z}}class d6 extends IJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new y0(J),this.intensity=Q}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}class wW extends d6{constructor(J,Q,$){super(J,$);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(IJ.DEFAULT_UP),this.updateMatrix(),this.groundColor=new y0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}toJSON(J){let Q=super.toJSON(J);return Q.object.groundColor=this.groundColor.getHex(),Q}}var AZ=new n0,_Y=new T,TY=new T;class tQ{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new n0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uQ,this._frameExtents=new $0(1,1),this._viewportCount=1,this._viewports=[new SJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera;_Y.setFromMatrixPosition(J.matrixWorld),Q.position.copy(_Y),TY.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(TY),Q.updateMatrixWorld(),this._updateMatrix(Q,this.matrix,this._frustum)}_updateMatrix(J,Q,$,W){AZ.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),$.setFromProjectionMatrix(AZ,J.coordinateSystem,J.reversedDepth);let Z=this._frameExtents,K=W?W.z/Z.x:1,H=W?W.w/Z.y:1,Y=W?W.x/Z.x:0,X=W?W.y/Z.y:0;if(J.coordinateSystem===2001||J.reversedDepth)Q.set(0.5*K,0,0,0.5*K+Y,0,0.5*H,0,0.5*H+X,0,0,1,0,0,0,0,1);else Q.set(0.5*K,0,0,0.5*K+Y,0,0.5*H,0,0.5*H+X,0,0,0.5,0.5,0,0,0,1);Q.multiply(AZ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var o$=new T,a$=new VJ,D9=new T;class SW extends IJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new n0,this.projectionMatrix=new n0,this.projectionMatrixInverse=new n0,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(o$,a$,D9),D9.x===1&&D9.y===1&&D9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(o$,a$,D9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(o$,a$,D9),D9.x===1&&D9.y===1&&D9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(o$,a$,D9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var e9=new T,wY=new $0,SY=new $0;class Z8 extends SW{constructor(J=50,Q=1,$=0.1,W=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=W,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=S7*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(BQ*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return S7*2*Math.atan(Math.tan(BQ*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){e9.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(e9.x,e9.y).multiplyScalar(-J/e9.z),e9.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(e9.x,e9.y).multiplyScalar(-J/e9.z)}getViewSize(J,Q){return this.getViewBounds(J,wY,SY),Q.subVectors(SY,wY)}setViewOffset(J,Q,$,W,Z,K){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=W,this.view.width=Z,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(BQ*0.5*this.fov)/this.zoom,$=2*Q,W=this.aspect*$,Z=-0.5*W,K=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:X}=K;Z+=K.offsetX*W/Y,Q-=K.offsetY*$/X,W*=K.width/Y,$*=K.height/X}let H=this.filmOffset;if(H!==0)Z+=J*H/this.getFilmWidth();this.projectionMatrix.makePerspective(Z,Z+W,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class pX extends tQ{constructor(){super(new Z8(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=S7*2*J.angle*this.focus,W=this.mapSize.width/this.mapSize.height*this.aspect,Z=J.distance||Q.far;if($!==Q.fov||W!==Q.aspect||Z!==Q.far)Q.fov=$,Q.aspect=W,Q.far=Z,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this.aspect=J.aspect,this}toJSON(){let J=super.toJSON();return J.focus=this.focus,J.aspect=this.aspect,J}}class c6 extends d6{constructor(J,Q,$=0,W=Math.PI/3,Z=0,K=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(IJ.DEFAULT_UP),this.updateMatrix(),this.target=new IJ,this.distance=$,this.angle=W,this.penumbra=Z,this.decay=K,this.map=null,this.shadow=new pX}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);if(Q.object.distance=this.distance,Q.object.angle=this.angle,Q.object.decay=this.decay,Q.object.penumbra=this.penumbra,Q.object.target=this.target.uuid,this.map&&this.map.isTexture)Q.object.map=this.map.toJSON(J).uuid;return Q.object.shadow=this.shadow.toJSON(),Q}}class mX extends tQ{constructor(){super(new Z8(90,1,0.5,500));this.isPointLightShadow=!0}}class c9 extends d6{constructor(J,Q,$=0,W=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=W,this.shadow=new mX}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class n9 extends SW{constructor(J=-1,Q=1,$=1,W=-1,Z=0.1,K=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=W,this.near=Z,this.far=K,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,W,Z,K){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=W,this.view.width=Z,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,W=(this.top+this.bottom)/2,Z=$-J,K=$+J,H=W+Q,Y=W-Q;if(this.view!==null&&this.view.enabled){let X=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Z+=X*this.view.offsetX,K=Z+X*this.view.width,H-=U*this.view.offsetY,Y=H-U*this.view.height}this.projectionMatrix.makeOrthographic(Z,K,H,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class lX extends tQ{constructor(){super(new n9(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class n6 extends d6{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(IJ.DEFAULT_UP),this.updateMatrix(),this.target=new IJ,this.shadow=new lX}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class D7{static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}var _Z=new WeakMap;class jW extends d9{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")x0("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")x0("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(J){return this.options=J,this}load(J,Q,$,W){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=this,K=B9.get(`image-bitmap:${J}`);if(K!==void 0){if(Z.manager.itemStart(J),K.then){K.then((X)=>{if(_Z.has(K)===!0){if(W)W(_Z.get(K));Z.manager.itemError(J),Z.manager.itemEnd(J)}else{if(Q)Q(X);Z.manager.itemEnd(J)}});return}setTimeout(function(){if(Q)Q(K);Z.manager.itemEnd(J)},0);return}let H={};H.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",H.headers=this.requestHeader,H.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let Y=fetch(J,H).then(function(X){return X.blob()}).then(function(X){return createImageBitmap(X,Object.assign({},Z.options,{colorSpaceConversion:"none"}))}).then(function(X){if(B9.add(`image-bitmap:${J}`,X),Q)Q(X);return Z.manager.itemEnd(J),X}).catch(function(X){if(W)W(X);_Z.set(Y,X),B9.remove(`image-bitmap:${J}`),Z.manager.itemError(J),Z.manager.itemEnd(J)});B9.add(`image-bitmap:${J}`,Y),Z.manager.itemStart(J)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var z6=-90,P6=1;class dK extends IJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let W=new Z8(z6,P6,J,Q);W.layers=this.layers,this.add(W);let Z=new Z8(z6,P6,J,Q);Z.layers=this.layers,this.add(Z);let K=new Z8(z6,P6,J,Q);K.layers=this.layers,this.add(K);let H=new Z8(z6,P6,J,Q);H.layers=this.layers,this.add(H);let Y=new Z8(z6,P6,J,Q);Y.layers=this.layers,this.add(Y);let X=new Z8(z6,P6,J,Q);X.layers=this.layers,this.add(X)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,W,Z,K,H,Y]=Q;for(let X of Q)this.remove(X);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),W.up.set(0,1,0),W.lookAt(-1,0,0),Z.up.set(0,0,-1),Z.lookAt(0,1,0),K.up.set(0,0,1),K.lookAt(0,-1,0),H.up.set(0,1,0),H.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),W.up.set(0,-1,0),W.lookAt(1,0,0),Z.up.set(0,0,1),Z.lookAt(0,1,0),K.up.set(0,0,-1),K.lookAt(0,-1,0),H.up.set(0,-1,0),H.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let X of Q)this.add(X),X.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:W}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[Z,K,H,Y,X,U]=this.children,G=J.getRenderTarget(),E=J.getActiveCubeFace(),N=J.getActiveMipmapLevel(),F=J.xr.enabled;J.xr.enabled=!1;let q=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let V=!1;if(J.isWebGLRenderer===!0)V=J.state.buffers.depth.getReversed();else V=J.reversedDepthBuffer;if(J.setRenderTarget($,0,W),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Z),J.setRenderTarget($,1,W),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,2,W),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),J.setRenderTarget($,3,W),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,W),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),$.texture.generateMipmaps=q,J.setRenderTarget($,5,W),V&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(G,E,N),J.xr.enabled=F,$.texture.needsPMREMUpdate=!0}}class cK extends Z8{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}class yW{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(J){if(this._document=J,J.hidden!==void 0)this._pageVisibilityHandler=sG.bind(this),J.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(J){return this._timescale=J,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(J){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(J!==void 0?J:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function sG(){if(this._document.hidden===!1)this.reset()}class nK{constructor(J,Q,$){this.binding=J,this.valueSize=$;let W,Z,K;switch(Q){case"quaternion":W=this._slerp,Z=this._slerpAdditive,K=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array($*6),this._workIndex=5;break;case"string":case"bool":W=this._select,Z=this._select,K=this._setAdditiveIdentityOther,this.buffer=Array($*5);break;default:W=this._lerp,Z=this._lerpAdditive,K=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array($*5)}this._mixBufferRegion=W,this._mixBufferRegionAdditive=Z,this._setIdentity=K,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(J,Q){let $=this.buffer,W=this.valueSize,Z=J*W+W,K=this.cumulativeWeight;if(K===0){for(let H=0;H!==W;++H)$[Z+H]=$[H];K=Q}else{K+=Q;let H=Q/K;this._mixBufferRegion($,Z,0,H,W)}this.cumulativeWeight=K}accumulateAdditive(J){let Q=this.buffer,$=this.valueSize,W=$*this._addIndex;if(this.cumulativeWeightAdditive===0)this._setIdentity();this._mixBufferRegionAdditive(Q,W,0,J,$),this.cumulativeWeightAdditive+=J}apply(J){let Q=this.valueSize,$=this.buffer,W=J*Q+Q,Z=this.cumulativeWeight,K=this.cumulativeWeightAdditive,H=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,Z<1){let Y=Q*this._origIndex;this._mixBufferRegion($,W,Y,1-Z,Q)}if(K>0)this._mixBufferRegionAdditive($,W,this._addIndex*Q,1,Q);for(let Y=Q,X=Q+Q;Y!==X;++Y)if($[Y]!==$[Y+Q]){H.setValue($,W);break}}saveOriginalState(){let J=this.binding,Q=this.buffer,$=this.valueSize,W=$*this._origIndex;J.getValue(Q,W);for(let Z=$,K=W;Z!==K;++Z)Q[Z]=Q[W+Z%$];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let J=this.valueSize*3;this.binding.setValue(this.buffer,J)}_setAdditiveIdentityNumeric(){let J=this._addIndex*this.valueSize,Q=J+this.valueSize;for(let $=J;$<Q;$++)this.buffer[$]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let J=this._origIndex*this.valueSize,Q=this._addIndex*this.valueSize;for(let $=0;$<this.valueSize;$++)this.buffer[Q+$]=this.buffer[J+$]}_select(J,Q,$,W,Z){if(W>=0.5)for(let K=0;K!==Z;++K)J[Q+K]=J[$+K]}_slerp(J,Q,$,W){VJ.slerpFlat(J,Q,J,Q,J,$,W)}_slerpAdditive(J,Q,$,W,Z){let K=this._workIndex*Z;VJ.multiplyQuaternionsFlat(J,K,J,Q,J,$),VJ.slerpFlat(J,Q,J,Q,J,K,W)}_lerp(J,Q,$,W,Z){let K=1-W;for(let H=0;H!==Z;++H){let Y=Q+H;J[Y]=J[Y]*K+J[$+H]*W}}_lerpAdditive(J,Q,$,W,Z){for(let K=0;K!==Z;++K){let H=Q+K;J[H]=J[H]+J[$+K]*W}}}var sK="\\[\\]\\.:\\/",iG=new RegExp("["+sK+"]","g"),iK="[^"+sK+"]",oG="[^"+sK.replace("\\.","")+"]",aG=/((?:WC+[\/:])*)/.source.replace("WC",iK),rG=/(WCOD+)?/.source.replace("WCOD",oG),tG=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",iK),eG=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",iK),JN=new RegExp("^"+aG+rG+tG+eG+"$"),QN=["material","materials","bones","map"];class uX{constructor(J,Q,$){let W=$||MJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,W)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,W=this._bindings[$];if(W!==void 0)W.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let W=this._targetGroup.nCachedObjects_,Z=$.length;W!==Z;++W)$[W].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class MJ{constructor(J,Q,$){this.path=Q,this.parsedPath=$||MJ.parseTrackName(Q),this.node=MJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new MJ(J,Q,$);else return new MJ.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(iG,"")}static parseTrackName(J){let Q=JN.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},W=$.nodeName&&$.nodeName.lastIndexOf(".");if(W!==void 0&&W!==-1){let Z=$.nodeName.substring(W+1);if(QN.indexOf(Z)!==-1)$.nodeName=$.nodeName.substring(0,W),$.objectName=Z}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(Z){for(let K=0;K<Z.length;K++){let H=Z[K];if(H.name===Q||H.uuid===Q)return H;let Y=$(H.children);if(Y)return Y}return null},W=$(J.children);if(W)return W}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)J[Q++]=$[W]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,W=Q.propertyName,Z=Q.propertyIndex;if(!J)J=MJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){x0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let X=Q.objectIndex;switch($){case"materials":if(!J.material){i0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){i0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){i0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===X){X=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){i0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){i0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){i0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(X!==void 0){if(J[X]===void 0){i0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[X]}}let K=J[W];if(K===void 0){let X=Q.nodeName;i0("PropertyBinding: Trying to update property for track: "+X+"."+W+" but it wasn't found.",J);return}let H=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)H=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)H=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(Z!==void 0){if(W==="morphTargetInfluences"){if(!J.geometry){i0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){i0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[Z]!==void 0)Z=J.morphTargetDictionary[Z]}Y=this.BindingType.ArrayElement,this.resolvedProperty=K,this.propertyIndex=Z}else if(K.fromArray!==void 0&&K.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=K;else if(Array.isArray(K))Y=this.BindingType.EntireArray,this.resolvedProperty=K;else this.propertyName=W;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][H]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}MJ.Composite=uX;MJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};MJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};MJ.prototype.GetterByBindingType=[MJ.prototype._getValue_direct,MJ.prototype._getValue_array,MJ.prototype._getValue_arrayElement,MJ.prototype._getValue_toArray];MJ.prototype.SetterByBindingTypeAndVersioning=[[MJ.prototype._setValue_direct,MJ.prototype._setValue_direct_setNeedsUpdate,MJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[MJ.prototype._setValue_array,MJ.prototype._setValue_array_setNeedsUpdate,MJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[MJ.prototype._setValue_arrayElement,MJ.prototype._setValue_arrayElement_setNeedsUpdate,MJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[MJ.prototype._setValue_fromArray,MJ.prototype._setValue_fromArray_setNeedsUpdate,MJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class oK{constructor(J,Q,$=null,W=Q.blendMode){this._mixer=J,this._clip=Q,this._localRoot=$,this.blendMode=W;let Z=Q.tracks,K=Z.length,H=Array(K),Y={endingStart:2400,endingEnd:2400};for(let X=0;X!==K;++X){let U=Z[X].createInterpolant(null);H[X]=U,U.settings=Y}this._interpolantSettings=Y,this._interpolants=H,this._propertyBindings=Array(K),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(J){return this._startTime=J,this}setLoop(J,Q){return this.loop=J,this.repetitions=Q,this}setEffectiveWeight(J){return this.weight=J,this._effectiveWeight=this.enabled?J:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(J){return this._scheduleFading(J,0,1)}fadeOut(J){return this._scheduleFading(J,1,0)}crossFadeFrom(J,Q,$=!1){if(J.fadeOut(Q),this.fadeIn(Q),$===!0){let W=this._clip.duration,Z=J._clip.duration,K=Z/W,H=W/Z;J._restoreTimeScale=J.timeScale,this._restoreTimeScale=this.timeScale,J.warp(1,K,Q),this.warp(H,1,Q)}return this}crossFadeTo(J,Q,$=!1){return J.crossFadeFrom(this,Q,$)}stopFading(){let J=this._weightInterpolant;if(J!==null)this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this}setEffectiveTimeScale(J){return this.timeScale=J,this._effectiveTimeScale=this.paused?0:J,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(J){return this.timeScale=this._clip.duration/J,this.stopWarping()}syncWith(J){return this.time=J.time,this.timeScale=J.timeScale,this.stopWarping()}halt(J){return this.warp(this._effectiveTimeScale,0,J)}warp(J,Q,$){let W=this._mixer,Z=W.time,K=this.timeScale,H=this._timeScaleInterpolant;if(H===null)H=W._lendControlInterpolant(),this._timeScaleInterpolant=H;let{parameterPositions:Y,sampleValues:X}=H;return Y[0]=Z,Y[1]=Z+$,X[0]=J/K,X[1]=Q/K,this}stopWarping(){let J=this._timeScaleInterpolant;if(J!==null)this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(J,Q,$,W){if(!this.enabled){this._updateWeight(J);return}let Z=this._startTime;if(Z!==null){let Y=(J-Z)*$;if(Y<0||$===0)Q=0;else this._startTime=null,Q=$*Y}Q*=this._updateTimeScale(J);let K=this._updateTime(Q),H=this._updateWeight(J);if(H>0){let Y=this._interpolants,X=this._propertyBindings;switch(this.blendMode){case 2501:for(let U=0,G=Y.length;U!==G;++U)Y[U].evaluate(K),X[U].accumulateAdditive(H);break;case 2500:default:for(let U=0,G=Y.length;U!==G;++U)Y[U].evaluate(K),X[U].accumulate(W,H)}}}_updateWeight(J){let Q=0;if(this.enabled){Q=this.weight;let $=this._weightInterpolant;if($!==null){let W=$.evaluate(J)[0];if(Q*=W,J>$.parameterPositions[1]){if(this.stopFading(),W===0)this.enabled=!1}}}return this._effectiveWeight=Q,Q}_updateTimeScale(J){let Q=0;if(!this.paused){Q=this.timeScale;let $=this._timeScaleInterpolant;if($!==null){let W=$.evaluate(J)[0];if(Q*=W,J>$.parameterPositions[1]){if(Q===0)this.paused=!0;else{if(this._restoreTimeScale!==null)Q=this._restoreTimeScale;this.timeScale=Q}this.stopWarping()}}}return this._effectiveTimeScale=Q,Q}_updateTime(J){let Q=this._clip.duration,$=this.loop,W=this.time+J,Z=this._loopCount,K=$===2202;if(J===0){if(Z===-1)return W;return K&&(Z&1)===1?Q-W:W}if($===2200){if(Z===-1)this._loopCount=0,this._setEndings(!0,!0,!1);J:{if(W>=Q)W=Q;else if(W<0)W=0;else{this.time=W;break J}if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;this.time=W,this._mixer.dispatchEvent({type:"finished",action:this,direction:J<0?-1:1})}}else{if(Z===-1)if(J>=0)Z=0,this._setEndings(!0,this.repetitions===0,K);else this._setEndings(this.repetitions===0,!0,K);if(W>=Q||W<0){let H=Math.floor(W/Q);W-=Q*H,Z+=Math.abs(H);let Y=this.repetitions-Z;if(Y<=0){if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;W=J>0?Q:0,this.time=W,this._mixer.dispatchEvent({type:"finished",action:this,direction:J>0?1:-1})}else{if(Y===1){let X=J<0;this._setEndings(X,!X,K)}else this._setEndings(!1,!1,K);this._loopCount=Z,this.time=W,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:H})}}else this._loopCount=Z,this.time=W;if(K&&(Z&1)===1)return Q-W}return W}_setEndings(J,Q,$){let W=this._interpolantSettings;if($)W.endingStart=2401,W.endingEnd=2401;else{if(J)W.endingStart=this.zeroSlopeAtStart?2401:2400;else W.endingStart=2402;if(Q)W.endingEnd=this.zeroSlopeAtEnd?2401:2400;else W.endingEnd=2402}}_scheduleFading(J,Q,$){let W=this._mixer,Z=W.time,K=this._weightInterpolant;if(K===null)K=W._lendControlInterpolant(),this._weightInterpolant=K;let{parameterPositions:H,sampleValues:Y}=K;return H[0]=Z,Y[0]=Q,H[1]=Z+J,Y[1]=$,this}}var $N=new Float32Array(1);class eQ extends N9{constructor(J){super();if(this._root=J,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(J,Q){let $=J._localRoot||this._root,W=J._clip.tracks,Z=W.length,K=J._propertyBindings,H=J._interpolants,Y=$.uuid,X=this._bindingsByRootAndName,U=X[Y];if(U===void 0)U={},X[Y]=U;for(let G=0;G!==Z;++G){let E=W[G],N=E.name,F=U[N];if(F!==void 0)++F.referenceCount,K[G]=F;else{if(F=K[G],F!==void 0){if(F._cacheIndex===null)++F.referenceCount,this._addInactiveBinding(F,Y,N);continue}let q=Q&&Q._propertyBindings[G].binding.parsedPath;F=new nK(MJ.create($,N,q),E.ValueTypeName,E.getValueSize()),++F.referenceCount,this._addInactiveBinding(F,Y,N),K[G]=F}H[G].resultBuffer=F.buffer}}_activateAction(J){if(!this._isActiveAction(J)){if(J._cacheIndex===null){let $=(J._localRoot||this._root).uuid,W=J._clip.uuid,Z=this._actionsByClip[W];this._bindAction(J,Z&&Z.knownActions[0]),this._addInactiveAction(J,W,$)}let Q=J._propertyBindings;for(let $=0,W=Q.length;$!==W;++$){let Z=Q[$];if(Z.useCount++===0)this._lendBinding(Z),Z.saveOriginalState()}this._lendAction(J)}}_deactivateAction(J){if(this._isActiveAction(J)){let Q=J._propertyBindings;for(let $=0,W=Q.length;$!==W;++$){let Z=Q[$];if(--Z.useCount===0)Z.restoreOriginalState(),this._takeBackBinding(Z)}this._takeBackAction(J)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let J=this;this.stats={actions:{get total(){return J._actions.length},get inUse(){return J._nActiveActions}},bindings:{get total(){return J._bindings.length},get inUse(){return J._nActiveBindings}},controlInterpolants:{get total(){return J._controlInterpolants.length},get inUse(){return J._nActiveControlInterpolants}}}}_isActiveAction(J){let Q=J._cacheIndex;return Q!==null&&Q<this._nActiveActions}_addInactiveAction(J,Q,$){let W=this._actions,Z=this._actionsByClip,K=Z[Q];if(K===void 0)K={knownActions:[J],actionByRoot:{}},J._byClipCacheIndex=0,Z[Q]=K;else{let H=K.knownActions;J._byClipCacheIndex=H.length,H.push(J)}J._cacheIndex=W.length,W.push(J),K.actionByRoot[$]=J}_removeInactiveAction(J){let Q=this._actions,$=Q[Q.length-1],W=J._cacheIndex;$._cacheIndex=W,Q[W]=$,Q.pop(),J._cacheIndex=null;let Z=J._clip.uuid,K=this._actionsByClip,H=K[Z],Y=H.knownActions,X=Y[Y.length-1],U=J._byClipCacheIndex;X._byClipCacheIndex=U,Y[U]=X,Y.pop(),J._byClipCacheIndex=null;let G=H.actionByRoot,E=(J._localRoot||this._root).uuid;if(delete G[E],Y.length===0)delete K[Z];this._removeInactiveBindingsForAction(J)}_removeInactiveBindingsForAction(J){let Q=J._propertyBindings;for(let $=0,W=Q.length;$!==W;++$){let Z=Q[$];if(--Z.referenceCount===0)this._removeInactiveBinding(Z)}}_lendAction(J){let Q=this._actions,$=J._cacheIndex,W=this._nActiveActions++,Z=Q[W];J._cacheIndex=W,Q[W]=J,Z._cacheIndex=$,Q[$]=Z}_takeBackAction(J){let Q=this._actions,$=J._cacheIndex,W=--this._nActiveActions,Z=Q[W];J._cacheIndex=W,Q[W]=J,Z._cacheIndex=$,Q[$]=Z}_addInactiveBinding(J,Q,$){let W=this._bindingsByRootAndName,Z=this._bindings,K=W[Q];if(K===void 0)K={},W[Q]=K;K[$]=J,J._cacheIndex=Z.length,Z.push(J)}_removeInactiveBinding(J){let Q=this._bindings,$=J.binding,W=$.rootNode.uuid,Z=$.path,K=this._bindingsByRootAndName,H=K[W],Y=Q[Q.length-1],X=J._cacheIndex;if(Y._cacheIndex=X,Q[X]=Y,Q.pop(),delete H[Z],Object.keys(H).length===0)delete K[W]}_lendBinding(J){let Q=this._bindings,$=J._cacheIndex,W=this._nActiveBindings++,Z=Q[W];J._cacheIndex=W,Q[W]=J,Z._cacheIndex=$,Q[$]=Z}_takeBackBinding(J){let Q=this._bindings,$=J._cacheIndex,W=--this._nActiveBindings,Z=Q[W];J._cacheIndex=W,Q[W]=J,Z._cacheIndex=$,Q[$]=Z}_lendControlInterpolant(){let J=this._controlInterpolants,Q=this._nActiveControlInterpolants++,$=J[Q];if($===void 0)$=new AW(new Float32Array(2),new Float32Array(2),1,$N),$.__cacheIndex=Q,J[Q]=$;return $}_takeBackControlInterpolant(J){let Q=this._controlInterpolants,$=J.__cacheIndex,W=--this._nActiveControlInterpolants,Z=Q[W];J.__cacheIndex=W,Q[W]=J,Z.__cacheIndex=$,Q[$]=Z}clipAction(J,Q,$){let W=Q||this._root,Z=W.uuid,K=typeof J==="string"?S6.findByName(W,J):J,H=K!==null?K.uuid:J,Y=this._actionsByClip[H],X=null;if($===void 0)if(K!==null)$=K.blendMode;else $=2500;if(Y!==void 0){let G=Y.actionByRoot[Z];if(G!==void 0&&G.blendMode===$)return G;if(X=Y.knownActions[0],K===null)K=X._clip}if(K===null)return null;let U=new oK(this,K,Q,$);return this._bindAction(U,X),this._addInactiveAction(U,H,Z),U}existingAction(J,Q){let $=Q||this._root,W=$.uuid,Z=typeof J==="string"?S6.findByName($,J):J,K=Z?Z.uuid:J,H=this._actionsByClip[K];if(H!==void 0)return H.actionByRoot[W]||null;return null}stopAllAction(){let J=this._actions,Q=this._nActiveActions;for(let $=Q-1;$>=0;--$)J[$].stop();return this}update(J){J*=this.timeScale;let Q=this._actions,$=this._nActiveActions,W=this.time+=J,Z=Math.sign(J),K=this._accuIndex^=1;for(let X=0;X!==$;++X)Q[X]._update(W,J,Z,K);let H=this._bindings,Y=this._nActiveBindings;for(let X=0;X!==Y;++X)H[X].apply(K);return this}setTime(J){this.time=0;for(let Q=0;Q<this._actions.length;Q++)this._actions[Q].time=0;return this.update(J)}getRoot(){return this._root}uncacheClip(J){let Q=this._actions,$=J.uuid,W=this._actionsByClip,Z=W[$];if(Z!==void 0){let K=Z.knownActions;for(let H=0,Y=K.length;H!==Y;++H){let X=K[H];this._deactivateAction(X);let U=X._cacheIndex,G=Q[Q.length-1];X._cacheIndex=null,X._byClipCacheIndex=null,G._cacheIndex=U,Q[U]=G,Q.pop(),this._removeInactiveBindingsForAction(X)}delete W[$]}}uncacheRoot(J){let Q=J.uuid,$=this._actionsByClip;for(let K in $){let H=$[K].actionByRoot,Y=H[Q];if(Y!==void 0)this._deactivateAction(Y),this._removeInactiveAction(Y)}let W=this._bindingsByRootAndName,Z=W[Q];if(Z!==void 0)for(let K in Z){let H=Z[K];H.restoreOriginalState(),this._removeInactiveBinding(H)}}uncacheAction(J,Q){let $=this.existingAction(J,Q);if($!==null)this._deactivateAction($),this._removeInactiveAction($)}}class vW{constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,x0("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let Q=performance.now();J=(Q-this.oldTime)/1000,this.oldTime=Q,this.elapsedTime+=J}return J}}class J${constructor(J=1,Q=0,$=0){this.radius=J,this.phi=Q,this.theta=$}set(J,Q,$){return this.radius=J,this.phi=Q,this.theta=$,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=WJ(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){if(this.radius=Math.sqrt(J*J+Q*Q+$*$),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,$),this.phi=Math.acos(WJ(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class aK{static{aK.prototype.isMatrix2=!0}constructor(J,Q,$,W){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,W)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,W){let Z=this.elements;return Z[0]=J,Z[2]=Q,Z[1]=$,Z[3]=W,this}}class fW extends N9{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function rK(J,Q,$,W){let Z=WN(W);switch($){case 1021:return J*Q;case 1028:return J*Q/Z.components*Z.byteLength;case 1029:return J*Q/Z.components*Z.byteLength;case 1030:return J*Q*2/Z.components*Z.byteLength;case 1031:return J*Q*2/Z.components*Z.byteLength;case 1022:return J*Q*3/Z.components*Z.byteLength;case 1023:return J*Q*4/Z.components*Z.byteLength;case 1033:return J*Q*4/Z.components*Z.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function WN(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)x0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function NU(){let J=null,Q=!1,$=null,W=null;function Z(K,H){W=J.requestAnimationFrame(Z),$(K,H)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;W=J.requestAnimationFrame(Z),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(W);Q=!1},setAnimationLoop:function(K){$=K},setContext:function(K){J=K}}}function ZN(J){let Q=new WeakMap;function $(Y,X){let{array:U,usage:G}=Y,E=U.byteLength,N=J.createBuffer();J.bindBuffer(X,N),J.bufferData(X,U,G),Y.onUploadCallback();let F;if(U instanceof Float32Array)F=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)F=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)F=J.HALF_FLOAT;else F=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)F=J.SHORT;else if(U instanceof Uint32Array)F=J.UNSIGNED_INT;else if(U instanceof Int32Array)F=J.INT;else if(U instanceof Int8Array)F=J.BYTE;else if(U instanceof Uint8Array)F=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)F=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:N,type:F,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:E}}function W(Y,X,U){let{array:G,updateRanges:E}=X;if(J.bindBuffer(U,Y),E.length===0)J.bufferSubData(U,0,G);else{E.sort((F,q)=>F.start-q.start);let N=0;for(let F=1;F<E.length;F++){let q=E[N],V=E[F];if(V.start<=q.start+q.count+1)q.count=Math.max(q.count,V.start+V.count-q.start);else++N,E[N]=V}E.length=N+1;for(let F=0,q=E.length;F<q;F++){let V=E[F];J.bufferSubData(U,V.start*G.BYTES_PER_ELEMENT,G,V.start,V.count)}X.clearUpdateRanges()}X.onUploadCallback()}function Z(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let X=Q.get(Y);if(X)J.deleteBuffer(X.buffer),Q.delete(Y)}function H(Y,X){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let G=Q.get(Y);if(!G||G.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,$(Y,X));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");W(U.buffer,Y,X),U.version=Y.version}}return{get:Z,remove:K,update:H}}var KN=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HN=`#ifdef USE_ALPHAHASH
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
#endif`,YN=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XN=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UN=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GN=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NN=`#ifdef USE_AOMAP
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
#endif`,EN=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FN=`#ifdef USE_BATCHING
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
#endif`,qN=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ON=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RN=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LN=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,VN=`#ifdef USE_IRIDESCENCE
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
#endif`,DN=`#ifdef USE_BUMPMAP
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
#endif`,BN=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MN=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CN=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,PN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,IN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,AN=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_N=`#define PI 3.141592653589793
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
} // validated`,TN=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wN=`vec3 transformedNormal = objectNormal;
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
#endif`,SN=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jN=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yN=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vN=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fN="gl_FragColor = linearToOutputTexel( gl_FragColor );",hN=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bN=`#ifdef USE_ENVMAP
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
#endif`,xN=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,gN=`#ifdef USE_ENVMAP
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
#endif`,pN=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mN=`#ifdef USE_ENVMAP
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
#endif`,lN=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uN=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dN=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cN=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nN=`#ifdef USE_GRADIENTMAP
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
}`,sN=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iN=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oN=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aN=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,rN=`#ifdef USE_ENVMAP
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
#endif`,tN=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eN=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,J1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$1=`PhysicalMaterial material;
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
#endif`,W1=`uniform sampler2D dfgLUT;
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
}`,Z1=`
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
#endif`,K1=`#if defined( RE_IndirectDiffuse )
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
#endif`,H1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Y1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,X1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,E1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,O1=`#if defined( USE_POINTS_UV )
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
#endif`,R1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,V1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k1=`#ifdef USE_MORPHTARGETS
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
#endif`,M1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,z1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,P1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,A1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_1=`#ifdef USE_NORMALMAP
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
#endif`,T1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,y1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,x1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,d1=`float getShadowMask() {
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
}`,c1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n1=`#ifdef USE_SKINNING
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
#endif`,s1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i1=`#ifdef USE_SKINNING
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
#endif`,o1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,e1=`#ifdef USE_TRANSMISSION
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
#endif`,JE=`#ifdef USE_TRANSMISSION
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
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,KE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HE=`uniform sampler2D t2D;
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
}`,YE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`#include <common>
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
}`,EE=`#if DEPTH_PACKING == 3200
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
}`,FE=`#define DISTANCE
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
}`,qE=`#define DISTANCE
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
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`uniform float scale;
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
}`,VE=`uniform vec3 diffuse;
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
}`,DE=`#include <common>
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
}`,BE=`uniform vec3 diffuse;
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
}`,kE=`#define LAMBERT
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
}`,ME=`#define LAMBERT
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
}`,CE=`#define MATCAP
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
}`,zE=`#define MATCAP
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
}`,PE=`#define NORMAL
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
}`,IE=`#define NORMAL
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
}`,AE=`#define PHONG
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
}`,_E=`#define PHONG
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
}`,TE=`#define STANDARD
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
}`,wE=`#define STANDARD
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
}`,SE=`#define TOON
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
}`,jE=`#define TOON
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
}`,yE=`uniform float size;
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
}`,vE=`uniform vec3 diffuse;
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
}`,fE=`#include <common>
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
}`,hE=`uniform vec3 color;
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
}`,bE=`uniform float rotation;
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
}`,xE=`uniform vec3 diffuse;
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
}`,GJ={alphahash_fragment:KN,alphahash_pars_fragment:HN,alphamap_fragment:YN,alphamap_pars_fragment:XN,alphatest_fragment:UN,alphatest_pars_fragment:GN,aomap_fragment:NN,aomap_pars_fragment:EN,batching_pars_vertex:FN,batching_vertex:qN,begin_vertex:ON,beginnormal_vertex:RN,bsdfs:LN,iridescence_fragment:VN,bumpmap_pars_fragment:DN,clipping_planes_fragment:BN,clipping_planes_pars_fragment:kN,clipping_planes_pars_vertex:MN,clipping_planes_vertex:CN,color_fragment:zN,color_pars_fragment:PN,color_pars_vertex:IN,color_vertex:AN,common:_N,cube_uv_reflection_fragment:TN,defaultnormal_vertex:wN,displacementmap_pars_vertex:SN,displacementmap_vertex:jN,emissivemap_fragment:yN,emissivemap_pars_fragment:vN,colorspace_fragment:fN,colorspace_pars_fragment:hN,envmap_fragment:bN,envmap_common_pars_fragment:xN,envmap_pars_fragment:gN,envmap_pars_vertex:pN,envmap_physical_pars_fragment:rN,envmap_vertex:mN,fog_vertex:lN,fog_pars_vertex:uN,fog_fragment:dN,fog_pars_fragment:cN,gradientmap_pars_fragment:nN,lightmap_pars_fragment:sN,lights_lambert_fragment:iN,lights_lambert_pars_fragment:oN,lights_pars_begin:aN,lights_toon_fragment:tN,lights_toon_pars_fragment:eN,lights_phong_fragment:J1,lights_phong_pars_fragment:Q1,lights_physical_fragment:$1,lights_physical_pars_fragment:W1,lights_fragment_begin:Z1,lights_fragment_maps:K1,lights_fragment_end:H1,lightprobes_pars_fragment:Y1,logdepthbuf_fragment:X1,logdepthbuf_pars_fragment:U1,logdepthbuf_pars_vertex:G1,logdepthbuf_vertex:N1,map_fragment:E1,map_pars_fragment:F1,map_particle_fragment:q1,map_particle_pars_fragment:O1,metalnessmap_fragment:R1,metalnessmap_pars_fragment:L1,morphinstance_vertex:V1,morphcolor_vertex:D1,morphnormal_vertex:B1,morphtarget_pars_vertex:k1,morphtarget_vertex:M1,normal_fragment_begin:C1,normal_fragment_maps:z1,normal_pars_fragment:P1,normal_pars_vertex:I1,normal_vertex:A1,normalmap_pars_fragment:_1,clearcoat_normal_fragment_begin:T1,clearcoat_normal_fragment_maps:w1,clearcoat_pars_fragment:S1,iridescence_pars_fragment:j1,opaque_fragment:y1,packing:v1,premultiplied_alpha_fragment:f1,project_vertex:h1,dithering_fragment:b1,dithering_pars_fragment:x1,roughnessmap_fragment:g1,roughnessmap_pars_fragment:p1,shadowmap_pars_fragment:m1,shadowmap_pars_vertex:l1,shadowmap_vertex:u1,shadowmask_pars_fragment:d1,skinbase_vertex:c1,skinning_pars_vertex:n1,skinning_vertex:s1,skinnormal_vertex:i1,specularmap_fragment:o1,specularmap_pars_fragment:a1,tonemapping_fragment:r1,tonemapping_pars_fragment:t1,transmission_fragment:e1,transmission_pars_fragment:JE,uv_pars_fragment:QE,uv_pars_vertex:$E,uv_vertex:WE,worldpos_vertex:ZE,background_vert:KE,background_frag:HE,backgroundCube_vert:YE,backgroundCube_frag:XE,cube_vert:UE,cube_frag:GE,depth_vert:NE,depth_frag:EE,distance_vert:FE,distance_frag:qE,equirect_vert:OE,equirect_frag:RE,linedashed_vert:LE,linedashed_frag:VE,meshbasic_vert:DE,meshbasic_frag:BE,meshlambert_vert:kE,meshlambert_frag:ME,meshmatcap_vert:CE,meshmatcap_frag:zE,meshnormal_vert:PE,meshnormal_frag:IE,meshphong_vert:AE,meshphong_frag:_E,meshphysical_vert:TE,meshphysical_frag:wE,meshtoon_vert:SE,meshtoon_frag:jE,points_vert:yE,points_frag:vE,shadow_vert:fE,shadow_frag:hE,sprite_vert:bE,sprite_frag:xE},z0={common:{diffuse:{value:new y0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new e0},alphaMap:{value:null},alphaMapTransform:{value:new e0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new e0}},envmap:{envMap:{value:null},envMapRotation:{value:new e0},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new e0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new e0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new e0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new e0},normalScale:{value:new $0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new e0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new e0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new e0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new e0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new y0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new T},probesMax:{value:new T},probesResolution:{value:new T}},points:{diffuse:{value:new y0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new e0},alphaTest:{value:0},uvTransform:{value:new e0}},sprite:{diffuse:{value:new y0(16777215)},opacity:{value:1},center:{value:new $0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new e0},alphaMap:{value:null},alphaMapTransform:{value:new e0},alphaTest:{value:0}}},P9={basic:{uniforms:B8([z0.common,z0.specularmap,z0.envmap,z0.aomap,z0.lightmap,z0.fog]),vertexShader:GJ.meshbasic_vert,fragmentShader:GJ.meshbasic_frag},lambert:{uniforms:B8([z0.common,z0.specularmap,z0.envmap,z0.aomap,z0.lightmap,z0.emissivemap,z0.bumpmap,z0.normalmap,z0.displacementmap,z0.fog,z0.lights,{emissive:{value:new y0(0)},envMapIntensity:{value:1}}]),vertexShader:GJ.meshlambert_vert,fragmentShader:GJ.meshlambert_frag},phong:{uniforms:B8([z0.common,z0.specularmap,z0.envmap,z0.aomap,z0.lightmap,z0.emissivemap,z0.bumpmap,z0.normalmap,z0.displacementmap,z0.fog,z0.lights,{emissive:{value:new y0(0)},specular:{value:new y0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:GJ.meshphong_vert,fragmentShader:GJ.meshphong_frag},standard:{uniforms:B8([z0.common,z0.envmap,z0.aomap,z0.lightmap,z0.emissivemap,z0.bumpmap,z0.normalmap,z0.displacementmap,z0.roughnessmap,z0.metalnessmap,z0.fog,z0.lights,{emissive:{value:new y0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:GJ.meshphysical_vert,fragmentShader:GJ.meshphysical_frag},toon:{uniforms:B8([z0.common,z0.aomap,z0.lightmap,z0.emissivemap,z0.bumpmap,z0.normalmap,z0.displacementmap,z0.gradientmap,z0.fog,z0.lights,{emissive:{value:new y0(0)}}]),vertexShader:GJ.meshtoon_vert,fragmentShader:GJ.meshtoon_frag},matcap:{uniforms:B8([z0.common,z0.bumpmap,z0.normalmap,z0.displacementmap,z0.fog,{matcap:{value:null}}]),vertexShader:GJ.meshmatcap_vert,fragmentShader:GJ.meshmatcap_frag},points:{uniforms:B8([z0.points,z0.fog]),vertexShader:GJ.points_vert,fragmentShader:GJ.points_frag},dashed:{uniforms:B8([z0.common,z0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:GJ.linedashed_vert,fragmentShader:GJ.linedashed_frag},depth:{uniforms:B8([z0.common,z0.displacementmap]),vertexShader:GJ.depth_vert,fragmentShader:GJ.depth_frag},normal:{uniforms:B8([z0.common,z0.bumpmap,z0.normalmap,z0.displacementmap,{opacity:{value:1}}]),vertexShader:GJ.meshnormal_vert,fragmentShader:GJ.meshnormal_frag},sprite:{uniforms:B8([z0.sprite,z0.fog]),vertexShader:GJ.sprite_vert,fragmentShader:GJ.sprite_frag},background:{uniforms:{uvTransform:{value:new e0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:GJ.background_vert,fragmentShader:GJ.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new e0}},vertexShader:GJ.backgroundCube_vert,fragmentShader:GJ.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:GJ.cube_vert,fragmentShader:GJ.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:GJ.equirect_vert,fragmentShader:GJ.equirect_frag},distance:{uniforms:B8([z0.common,z0.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:GJ.distance_vert,fragmentShader:GJ.distance_frag},shadow:{uniforms:B8([z0.lights,z0.fog,{color:{value:new y0(0)},opacity:{value:1}}]),vertexShader:GJ.shadow_vert,fragmentShader:GJ.shadow_frag}};P9.physical={uniforms:B8([P9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new e0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new e0},clearcoatNormalScale:{value:new $0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new e0},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new e0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new e0},sheen:{value:0},sheenColor:{value:new y0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new e0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new e0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new e0},transmissionSamplerSize:{value:new $0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new e0},attenuationDistance:{value:0},attenuationColor:{value:new y0(0)},specularColor:{value:new y0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new e0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new e0},anisotropyVector:{value:new $0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new e0}}]),vertexShader:GJ.meshphysical_vert,fragmentShader:GJ.meshphysical_frag};var hW={r:0,b:0,g:0},gE=new n0,EU=new e0;EU.set(-1,0,0,0,1,0,0,0,1);function pE(J,Q,$,W,Z,K){let H=new y0(0),Y=Z===!0?0:1,X,U,G=null,E=0,N=null;function F(z){let D=z.isScene===!0?z.background:null;if(D&&D.isTexture){let L=z.backgroundBlurriness>0;D=Q.get(D,L)}return D}function q(z){let D=!1,L=F(z);if(L===null)O(H,Y);else if(L&&L.isColor)O(L,1),D=!0;let M=J.xr.getEnvironmentBlendMode();if(M==="additive")$.buffers.color.setClear(0,0,0,1,K);else if(M==="alpha-blend")$.buffers.color.setClear(0,0,0,0,K);if(J.autoClear||D)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function V(z,D){let L=F(D);if(L&&(L.isCubeTexture||L.mapping===fQ)){if(U===void 0)U=new C0(new xJ(1,1,1),new lJ({name:"BackgroundCubeMaterial",uniforms:c7(P9.backgroundCube.uniforms),vertexShader:P9.backgroundCube.vertexShader,fragmentShader:P9.backgroundCube.fragmentShader,side:R8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(M,I,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(U);if(U.material.uniforms.envMap.value=L,U.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(gE.makeRotationFromEuler(D.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(EU);if(U.material.toneMapped=KJ.getTransfer(L.colorSpace)!==jJ,G!==L||E!==L.version||N!==J.toneMapping)U.material.needsUpdate=!0,G=L,E=L.version,N=J.toneMapping;U.layers.enableAll(),z.unshift(U,U.geometry,U.material,0,0,null)}else if(L&&L.isTexture){if(X===void 0)X=new C0(new K8(2,2),new lJ({name:"BackgroundMaterial",uniforms:c7(P9.background.uniforms),vertexShader:P9.background.vertexShader,fragmentShader:P9.background.fragmentShader,side:K7,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),X.geometry.deleteAttribute("normal"),Object.defineProperty(X.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(X);if(X.material.uniforms.t2D.value=L,X.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,X.material.toneMapped=KJ.getTransfer(L.colorSpace)!==jJ,L.matrixAutoUpdate===!0)L.updateMatrix();if(X.material.uniforms.uvTransform.value.copy(L.matrix),G!==L||E!==L.version||N!==J.toneMapping)X.material.needsUpdate=!0,G=L,E=L.version,N=J.toneMapping;X.layers.enableAll(),z.unshift(X,X.geometry,X.material,0,0,null)}}function O(z,D){z.getRGB(hW,fK(J)),$.buffers.color.setClear(hW.r,hW.g,hW.b,D,K)}function R(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(X!==void 0)X.geometry.dispose(),X.material.dispose(),X=void 0}return{getClearColor:function(){return H},setClearColor:function(z,D=1){H.set(z),Y=D,O(H,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(z){Y=z,O(H,Y)},render:q,addToRenderList:V,dispose:R}}function mE(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),W={},Z=N(null),K=Z,H=!1;function Y(j,b,Q0,S,i){let u=!1,x=E(j,S,Q0,b);if(K!==x)K=x,U(K.object);if(u=F(j,S,Q0,i),u)q(j,S,Q0,i);if(i!==null)Q.update(i,J.ELEMENT_ARRAY_BUFFER);if(u||H){if(H=!1,L(j,b,Q0,S),i!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(i).buffer)}}function X(){return J.createVertexArray()}function U(j){return J.bindVertexArray(j)}function G(j){return J.deleteVertexArray(j)}function E(j,b,Q0,S){let i=S.wireframe===!0,u=W[b.id];if(u===void 0)u={},W[b.id]=u;let x=j.isInstancedMesh===!0?j.id:0,H0=u[x];if(H0===void 0)H0={},u[x]=H0;let n=H0[Q0.id];if(n===void 0)n={},H0[Q0.id]=n;let W0=n[i];if(W0===void 0)W0=N(X()),n[i]=W0;return W0}function N(j){let b=[],Q0=[],S=[];for(let i=0;i<$;i++)b[i]=0,Q0[i]=0,S[i]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:Q0,attributeDivisors:S,object:j,attributes:{},index:null}}function F(j,b,Q0,S){let i=K.attributes,u=b.attributes,x=0,H0=Q0.getAttributes();for(let n in H0)if(H0[n].location>=0){let Y0=i[n],g0=u[n];if(g0===void 0){if(n==="instanceMatrix"&&j.instanceMatrix)g0=j.instanceMatrix;if(n==="instanceColor"&&j.instanceColor)g0=j.instanceColor}if(Y0===void 0)return!0;if(Y0.attribute!==g0)return!0;if(g0&&Y0.data!==g0.data)return!0;x++}if(K.attributesNum!==x)return!0;if(K.index!==S)return!0;return!1}function q(j,b,Q0,S){let i={},u=b.attributes,x=0,H0=Q0.getAttributes();for(let n in H0)if(H0[n].location>=0){let Y0=u[n];if(Y0===void 0){if(n==="instanceMatrix"&&j.instanceMatrix)Y0=j.instanceMatrix;if(n==="instanceColor"&&j.instanceColor)Y0=j.instanceColor}let g0={};if(g0.attribute=Y0,Y0&&Y0.data)g0.data=Y0.data;i[n]=g0,x++}K.attributes=i,K.attributesNum=x,K.index=S}function V(){let j=K.newAttributes;for(let b=0,Q0=j.length;b<Q0;b++)j[b]=0}function O(j){R(j,0)}function R(j,b){let{newAttributes:Q0,enabledAttributes:S,attributeDivisors:i}=K;if(Q0[j]=1,S[j]===0)J.enableVertexAttribArray(j),S[j]=1;if(i[j]!==b)J.vertexAttribDivisor(j,b),i[j]=b}function z(){let{newAttributes:j,enabledAttributes:b}=K;for(let Q0=0,S=b.length;Q0<S;Q0++)if(b[Q0]!==j[Q0])J.disableVertexAttribArray(Q0),b[Q0]=0}function D(j,b,Q0,S,i,u,x){if(x===!0)J.vertexAttribIPointer(j,b,Q0,i,u);else J.vertexAttribPointer(j,b,Q0,S,i,u)}function L(j,b,Q0,S){V();let i=S.attributes,u=Q0.getAttributes(),x=b.defaultAttributeValues;for(let H0 in u){let n=u[H0];if(n.location>=0){let W0=i[H0];if(W0===void 0){if(H0==="instanceMatrix"&&j.instanceMatrix)W0=j.instanceMatrix;if(H0==="instanceColor"&&j.instanceColor)W0=j.instanceColor}if(W0!==void 0){let{normalized:Y0,itemSize:g0}=W0,I0=Q.get(W0);if(I0===void 0)continue;let{buffer:a0,type:r0,bytesPerElement:a}=I0,N0=r0===J.INT||r0===J.UNSIGNED_INT||W0.gpuType===bZ;if(W0.isInterleavedBufferAttribute){let E0=W0.data,u0=E0.stride,l0=W0.offset;if(E0.isInstancedInterleavedBuffer){for(let p0=0;p0<n.locationSize;p0++)R(n.location+p0,E0.meshPerAttribute);if(j.isInstancedMesh!==!0&&S._maxInstanceCount===void 0)S._maxInstanceCount=E0.meshPerAttribute*E0.count}else for(let p0=0;p0<n.locationSize;p0++)O(n.location+p0);J.bindBuffer(J.ARRAY_BUFFER,a0);for(let p0=0;p0<n.locationSize;p0++)D(n.location+p0,g0/n.locationSize,r0,Y0,u0*a,(l0+g0/n.locationSize*p0)*a,N0)}else{if(W0.isInstancedBufferAttribute){for(let E0=0;E0<n.locationSize;E0++)R(n.location+E0,W0.meshPerAttribute);if(j.isInstancedMesh!==!0&&S._maxInstanceCount===void 0)S._maxInstanceCount=W0.meshPerAttribute*W0.count}else for(let E0=0;E0<n.locationSize;E0++)O(n.location+E0);J.bindBuffer(J.ARRAY_BUFFER,a0);for(let E0=0;E0<n.locationSize;E0++)D(n.location+E0,g0/n.locationSize,r0,Y0,g0*a,g0/n.locationSize*E0*a,N0)}}else if(x!==void 0){let Y0=x[H0];if(Y0!==void 0)switch(Y0.length){case 2:J.vertexAttrib2fv(n.location,Y0);break;case 3:J.vertexAttrib3fv(n.location,Y0);break;case 4:J.vertexAttrib4fv(n.location,Y0);break;default:J.vertexAttrib1fv(n.location,Y0)}}}}z()}function M(){_();for(let j in W){let b=W[j];for(let Q0 in b){let S=b[Q0];for(let i in S){let u=S[i];for(let x in u)G(u[x].object),delete u[x];delete S[i]}}delete W[j]}}function I(j){if(W[j.id]===void 0)return;let b=W[j.id];for(let Q0 in b){let S=b[Q0];for(let i in S){let u=S[i];for(let x in u)G(u[x].object),delete u[x];delete S[i]}}delete W[j.id]}function w(j){for(let b in W){let Q0=W[b];for(let S in Q0){let i=Q0[S];if(i[j.id]===void 0)continue;let u=i[j.id];for(let x in u)G(u[x].object),delete u[x];delete i[j.id]}}}function B(j){for(let b in W){let Q0=W[b],S=j.isInstancedMesh===!0?j.id:0,i=Q0[S];if(i===void 0)continue;for(let u in i){let x=i[u];for(let H0 in x)G(x[H0].object),delete x[H0];delete i[u]}if(delete Q0[S],Object.keys(Q0).length===0)delete W[b]}}function _(){if(d(),H=!0,K===Z)return;K=Z,U(K.object)}function d(){Z.geometry=null,Z.program=null,Z.wireframe=!1}return{setup:Y,reset:_,resetDefaultState:d,dispose:M,releaseStatesOfGeometry:I,releaseStatesOfObject:B,releaseStatesOfProgram:w,initAttributes:V,enableAttribute:O,disableUnusedAttributes:z}}function lE(J,Q,$){let W;function Z(X){W=X}function K(X,U){J.drawArrays(W,X,U),$.update(U,W,1)}function H(X,U,G){if(G===0)return;J.drawArraysInstanced(W,X,U,G),$.update(U,W,G)}function Y(X,U,G){if(G===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(W,X,0,U,0,G);let N=0;for(let F=0;F<G;F++)N+=U[F];$.update(N,W,1)}this.setMode=Z,this.render=K,this.renderInstances=H,this.renderMultiDraw=Y}function uE(J,Q,$,W){let Z;function K(){if(Z!==void 0)return Z;if(Q.has("EXT_texture_filter_anisotropic")===!0){let w=Q.get("EXT_texture_filter_anisotropic");Z=J.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else Z=0;return Z}function H(w){if(w!==C9&&W.convert(w)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(w){let B=w===N8&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(w!==G9&&w!==g9&&!B&&W.convert(w)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function X(w){if(w==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";w="mediump"}if(w==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",G=X(U);if(G!==U)x0("WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let E=$.logarithmicDepthBuffer===!0,N=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&N===!1)x0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let F=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),q=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),V=J.getParameter(J.MAX_TEXTURE_SIZE),O=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),R=J.getParameter(J.MAX_VERTEX_ATTRIBS),z=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),D=J.getParameter(J.MAX_VARYING_VECTORS),L=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),M=J.getParameter(J.MAX_SAMPLES),I=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:K,getMaxPrecision:X,textureFormatReadable:H,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:E,reversedDepthBuffer:N,maxTextures:F,maxVertexTextures:q,maxTextureSize:V,maxCubemapSize:O,maxAttributes:R,maxVertexUniforms:z,maxVaryings:D,maxFragmentUniforms:L,maxSamples:M,samples:I}}function dE(J){let Q=this,$=null,W=0,Z=!1,K=!1,H=new s8,Y=new e0,X={value:null,needsUpdate:!1};this.uniform=X,this.numPlanes=0,this.numIntersection=0,this.init=function(E,N){let F=E.length!==0||N||W!==0||Z;return Z=N,W=E.length,F},this.beginShadows=function(){K=!0,G(null)},this.endShadows=function(){K=!1},this.setGlobalState=function(E,N){$=G(E,N,0)},this.setState=function(E,N,F){let{clippingPlanes:q,clipIntersection:V,clipShadows:O}=E,R=J.get(E);if(!Z||q===null||q.length===0||K&&!O)if(K)G(null);else U();else{let z=K?0:W,D=z*4,L=R.clippingState||null;X.value=L,L=G(q,N,D,F);for(let M=0;M!==D;++M)L[M]=$[M];R.clippingState=L,this.numIntersection=V?this.numPlanes:0,this.numPlanes+=z}};function U(){if(X.value!==$)X.value=$,X.needsUpdate=W>0;Q.numPlanes=W,Q.numIntersection=0}function G(E,N,F,q){let V=E!==null?E.length:0,O=null;if(V!==0){if(O=X.value,q!==!0||O===null){let R=F+V*4,z=N.matrixWorldInverse;if(Y.getNormalMatrix(z),O===null||O.length<R)O=new Float32Array(R);for(let D=0,L=F;D!==V;++D,L+=4)H.copy(E[D]).applyMatrix4(z,Y),H.normal.toArray(O,L),O[L+3]=H.constant}X.value=O,X.needsUpdate=!0}return Q.numPlanes=V,Q.numIntersection=0,O}}var i6=4,cE=6,nE=20,sE=256,Q$=new n9,dX=new y0,tK=null,eK=0,JH=0,QH=!1,iE=new T,s7=new T;class K${constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,W=100,Z={}){let{size:K=256,position:H=iE}=Z;tK=this._renderer.getRenderTarget(),eK=this._renderer.getActiveCubeFace(),JH=this._renderer.getActiveMipmapLevel(),QH=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(K);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,W,Y,H),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=sX(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=nX(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(tK,eK,JH),this._renderer.xr.enabled=QH,J.scissorTest=!1,s6(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===v6||J.mapping===f7)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);tK=this._renderer.getRenderTarget(),eK=this._renderer.getActiveCubeFace(),JH=this._renderer.getActiveMipmapLevel(),QH=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:G8,minFilter:G8,generateMipmaps:!1,type:N8,format:C9,colorSpace:g8,depthBuffer:!1},W=cX(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=cX(J,Q,$);let{_lodMax:Z}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=oE(Z)),this._blurMaterial=rE(Z,J,Q),this._ggxMaterial=aE(Z,J,Q)}return W}_compileMaterial(J){let Q=new C0(new yJ,J);this._renderer.compile(Q,Q$)}_sceneToCubeUV(J,Q,$,W,Z){let Y=new Z8(90,1,Q,$),X=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],G=this._renderer,E=G.autoClear,N=G.toneMapping;if(G.getClearColor(dX),G.toneMapping=X9,G.autoClear=!1,G.state.buffers.depth.getReversed())G.setRenderTarget(W),G.clearDepth(),G.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new C0(new xJ,new mJ({name:"PMREM.Background",side:R8,depthWrite:!1,depthTest:!1}));let q=this._backgroundBox,V=q.material,O=!1,R=J.background;if(R){if(R.isColor)V.color.copy(R),J.background=null,O=!0}else V.color.copy(dX),O=!0;for(let z=0;z<6;z++){let D=z%3;if(D===0)Y.up.set(0,X[z],0),Y.position.set(Z.x,Z.y,Z.z),Y.lookAt(Z.x+U[z],Z.y,Z.z);else if(D===1)Y.up.set(0,0,X[z]),Y.position.set(Z.x,Z.y,Z.z),Y.lookAt(Z.x,Z.y+U[z],Z.z);else Y.up.set(0,X[z],0),Y.position.set(Z.x,Z.y,Z.z),Y.lookAt(Z.x,Z.y,Z.z+U[z]);let L=this._cubeSize;if(s6(W,D*L,z>2?L:0,L,L),G.setRenderTarget(W),O)G.render(q,Y);G.render(J,Y)}G.toneMapping=N,G.autoClear=E,J.background=R}_textureToCubeUV(J,Q){let $=this._renderer,W=J.mapping===v6||J.mapping===f7;if(W){if(this._cubemapMaterial===null)this._cubemapMaterial=sX();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=nX();let Z=W?this._cubemapMaterial:this._equirectMaterial,K=this._lodMeshes[0];K.material=Z;let H=Z.uniforms;H.envMap.value=J;let Y=this._cubeSize;s6(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(K,Q$)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let W=this._lodMeshes.length;for(let Z=1;Z<W;Z++)this._applyGGXFilter(J,Z-1,Z);Q.autoClear=$}_applyGGXFilter(J,Q,$){let W=this._renderer,Z=this._pingPongRenderTarget,K=this._ggxMaterial,H=this._lodMeshes[$];H.material=K;let Y=K.uniforms,X=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),G=Math.sqrt(X*X-U*U),E=X*1.25,N=G*E,{_lodMax:F}=this,q=this._sizeLods[$],V=3*q*($>F-i6?$-F+i6:0),O=4*(this._cubeSize-q);Y.envMap.value=J.texture,Y.roughness.value=N,Y.mipInt.value=F-Q,s6(Z,V,O,3*q,2*q),W.setRenderTarget(Z),W.render(H,Q$),Y.envMap.value=Z.texture,Y.roughness.value=0,Y.mipInt.value=F-$,s6(J,V,O,3*q,2*q),W.setRenderTarget(J),W.render(H,Q$)}_blur(J,Q,$,W){let Z=this._pingPongRenderTarget,K=Math.min(W,Math.PI)/Math.SQRT2;this._blurPass(J,Z,Q,$,K),this._blurPass(Z,J,$,$,K)}_blurPass(J,Q,$,W,Z){let K=this._renderer,H=this._blurMaterial,Y=this._lodMeshes[W];Y.material=H;let X=H.uniforms;X.envMap.value=J.texture,X.sigma.value=Z,X.mipInt.value=this._lodMax-$;let U=this._sizeLods[W],G=3*U*(W>this._lodMax-i6?W-this._lodMax+i6:0),E=4*(this._cubeSize-U);s6(Q,G,E,3*U,2*U),K.setRenderTarget(Q),K.render(Y,Q$)}}function oE(J){let Q=[],$=[],W=J,Z=J-i6+1+cE;for(let K=0;K<Z;K++){let H=Math.pow(2,W);Q.push(H);let Y=1/(H-2),X=-Y,U=1+Y,G=[X,X,U,X,U,U,X,X,U,U,X,U],E=6,N=6,F=3,q=new Float32Array(F*N*E),V=new Float32Array(F*N*E);for(let R=0;R<E;R++){let z=R%3*2/3-1,D=R>2?0:-1,L=[z,D,0,z+0.6666666666666666,D,0,z+0.6666666666666666,D+1,0,z,D,0,z+0.6666666666666666,D+1,0,z,D+1,0];q.set(L,F*N*R);for(let M=0;M<N;M++){let I=G[M*2]*2-1,w=G[M*2+1]*2-1;if(R===0)s7.set(1,w,I);else if(R===1)s7.set(-I,1,-w);else if(R===2)s7.set(-I,w,1);else if(R===3)s7.set(-1,w,-I);else if(R===4)s7.set(-I,-1,w);else s7.set(I,w,-1);s7.toArray(V,(R*N+M)*F)}}let O=new yJ;if(O.setAttribute("position",new sJ(q,F)),O.setAttribute("outputDirection",new sJ(V,F)),$.push(new C0(O,null)),W>i6)W--}return{lodMeshes:$,sizeLods:Q}}function cX(J,Q,$){let W=new aJ(J,Q,$);return W.texture.mapping=fQ,W.texture.name="PMREM.cubeUv",W.scissorTest=!0,W}function s6(J,Q,$,W,Z){J.viewport.set(Q,$,W,Z),J.scissor.set(Q,$,W,Z)}function aE(J,Q,$){return new lJ({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sE,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xW(),fragmentShader:`

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
		`,blending:o8,depthTest:!1,depthWrite:!1})}function rE(J,Q,$){return new lJ({name:"SphericalGaussianBlur",defines:{SAMPLES:nE,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xW(),fragmentShader:`

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
		`,blending:o8,depthTest:!1,depthWrite:!1})}function nX(){return new lJ({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xW(),fragmentShader:`

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
		`,blending:o8,depthTest:!1,depthWrite:!1})}function sX(){return new lJ({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xW(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:o8,depthTest:!1,depthWrite:!1})}function xW(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class HH extends aJ{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},W=[$,$,$,$,$,$];this.texture=new kW(W),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},W=new xJ(5,5,5),Z=new lJ({name:"CubemapFromEquirect",uniforms:c7($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:R8,blending:o8});Z.uniforms.tEquirect.value=Q;let K=new C0(W,Z),H=Q.minFilter;if(Q.minFilter===M9)Q.minFilter=G8;return new dK(1,10,this).update(J,K),Q.minFilter=H,K.geometry.dispose(),K.material.dispose(),this}clear(J,Q=!0,$=!0,W=!0){let Z=J.getRenderTarget();for(let K=0;K<6;K++)J.setRenderTarget(this,K),J.clear(Q,$,W);J.setRenderTarget(Z)}}function tE(J){let Q=new WeakMap,$=new WeakMap,W=null;function Z(N,F=!1){if(N===null||N===void 0)return null;if(F)return H(N);return K(N)}function K(N){if(N&&N.isTexture){let F=N.mapping;if(F===QW||F===$W)if(Q.has(N)){let q=Q.get(N).texture;return Y(q,N.mapping)}else{let q=N.image;if(q&&q.height>0){let V=new HH(q.height);return V.fromEquirectangularTexture(J,N),Q.set(N,V),N.addEventListener("dispose",U),Y(V.texture,N.mapping)}else return null}}return N}function H(N){if(N&&N.isTexture){let F=N.mapping,q=F===QW||F===$W,V=F===v6||F===f7;if(q||V){let O=$.get(N),R=O!==void 0?O.texture.pmremVersion:0;if(N.isRenderTargetTexture&&N.pmremVersion!==R){if(W===null)W=new K$(J);return O=q?W.fromEquirectangular(N,O):W.fromCubemap(N,O),O.texture.pmremVersion=N.pmremVersion,$.set(N,O),O.texture}else if(O!==void 0)return O.texture;else{let z=N.image;if(q&&z&&z.height>0||V&&z&&X(z)){if(W===null)W=new K$(J);return O=q?W.fromEquirectangular(N):W.fromCubemap(N),O.texture.pmremVersion=N.pmremVersion,$.set(N,O),N.addEventListener("dispose",G),O.texture}else return null}}}return N}function Y(N,F){if(F===QW)N.mapping=v6;else if(F===$W)N.mapping=f7;return N}function X(N){let F=0,q=6;for(let V=0;V<q;V++)if(N[V]!==void 0)F++;return F===q}function U(N){let F=N.target;F.removeEventListener("dispose",U);let q=Q.get(F);if(q!==void 0)Q.delete(F),q.dispose()}function G(N){let F=N.target;F.removeEventListener("dispose",G);let q=$.get(F);if(q!==void 0)$.delete(F),q.dispose()}function E(){if(Q=new WeakMap,$=new WeakMap,W!==null)W.dispose(),W=null}return{get:Z,dispose:E}}function eE(J){let Q={};function $(W){if(Q[W]!==void 0)return Q[W];let Z=J.getExtension(W);return Q[W]=Z,Z}return{has:function(W){return $(W)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(W){let Z=$(W);if(Z===null)w7("WebGLRenderer: "+W+" extension not supported.");return Z}}}function JF(J,Q,$,W){let Z={},K=new WeakMap;function H(E){let N=E.target;if(N.index!==null)Q.remove(N.index);for(let q in N.attributes)Q.remove(N.attributes[q]);N.removeEventListener("dispose",H),delete Z[N.id];let F=K.get(N);if(F)Q.remove(F),K.delete(N);if(W.releaseStatesOfGeometry(N),N.isInstancedBufferGeometry===!0)delete N._maxInstanceCount;$.memory.geometries--}function Y(E,N){if(Z[N.id]===!0)return N;return N.addEventListener("dispose",H),Z[N.id]=!0,$.memory.geometries++,N}function X(E){let N=E.attributes;for(let F in N)Q.update(N[F],J.ARRAY_BUFFER)}function U(E){let N=[],F=E.index,q=E.attributes.position,V=0;if(q===void 0)return;if(F!==null){let z=F.array;V=F.version;for(let D=0,L=z.length;D<L;D+=3){let M=z[D+0],I=z[D+1],w=z[D+2];N.push(M,I,I,w,w,M)}}else{let z=q.array;V=q.version;for(let D=0,L=z.length/3-1;D<L;D+=3){let M=D+0,I=D+1,w=D+2;N.push(M,I,I,w,w,M)}}let O=new(q.count>=65535?LW:RW)(N,1);O.version=V;let R=K.get(E);if(R)Q.remove(R);K.set(E,O)}function G(E){let N=K.get(E);if(N){let F=E.index;if(F!==null){if(N.version<F.version)U(E)}}else U(E);return K.get(E)}return{get:Y,update:X,getWireframeAttribute:G}}function QF(J,Q,$){let W;function Z(E){W=E}let K,H;function Y(E){K=E.type,H=E.bytesPerElement}function X(E,N){J.drawElements(W,N,K,E*H),$.update(N,W,1)}function U(E,N,F){if(F===0)return;J.drawElementsInstanced(W,N,K,E*H,F),$.update(N,W,F)}function G(E,N,F){if(F===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(W,N,0,K,E,0,F);let V=0;for(let O=0;O<F;O++)V+=N[O];$.update(V,W,1)}this.setMode=Z,this.setIndex=Y,this.render=X,this.renderInstances=U,this.renderMultiDraw=G}function $F(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function W(K,H,Y){switch($.calls++,H){case J.TRIANGLES:$.triangles+=Y*(K/3);break;case J.LINES:$.lines+=Y*(K/2);break;case J.LINE_STRIP:$.lines+=Y*(K-1);break;case J.LINE_LOOP:$.lines+=Y*K;break;case J.POINTS:$.points+=Y*K;break;default:i0("WebGLInfo: Unknown draw mode:",H);break}}function Z(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:Z,update:W}}function WF(J,Q,$){let W=new WeakMap,Z=new SJ;function K(H,Y,X){let U=H.morphTargetInfluences,G=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,E=G!==void 0?G.length:0,N=W.get(Y);if(N===void 0||N.count!==E){let _=function(){w.dispose(),W.delete(Y),Y.removeEventListener("dispose",_)};if(N!==void 0)N.texture.dispose();let F=Y.morphAttributes.position!==void 0,q=Y.morphAttributes.normal!==void 0,V=Y.morphAttributes.color!==void 0,O=Y.morphAttributes.position||[],R=Y.morphAttributes.normal||[],z=Y.morphAttributes.color||[],D=0;if(F===!0)D=1;if(q===!0)D=2;if(V===!0)D=3;let L=Y.attributes.position.count*D,M=1;if(L>Q.maxTextureSize)M=Math.ceil(L/Q.maxTextureSize),L=Q.maxTextureSize;let I=new Float32Array(L*M*4*E),w=new qW(I,L,M,E);w.type=g9,w.needsUpdate=!0;let B=D*4;for(let d=0;d<E;d++){let j=O[d],b=R[d],Q0=z[d],S=L*M*4*d;for(let i=0;i<j.count;i++){let u=i*B;if(F===!0)Z.fromBufferAttribute(j,i),I[S+u+0]=Z.x,I[S+u+1]=Z.y,I[S+u+2]=Z.z,I[S+u+3]=0;if(q===!0)Z.fromBufferAttribute(b,i),I[S+u+4]=Z.x,I[S+u+5]=Z.y,I[S+u+6]=Z.z,I[S+u+7]=0;if(V===!0)Z.fromBufferAttribute(Q0,i),I[S+u+8]=Z.x,I[S+u+9]=Z.y,I[S+u+10]=Z.z,I[S+u+11]=Q0.itemSize===4?Z.w:1}}N={count:E,texture:w,size:new $0(L,M)},W.set(Y,N),Y.addEventListener("dispose",_)}if(H.isInstancedMesh===!0&&H.morphTexture!==null)X.getUniforms().setValue(J,"morphTexture",H.morphTexture,$);else{let F=0;for(let V=0;V<U.length;V++)F+=U[V];let q=Y.morphTargetsRelative?1:1-F;X.getUniforms().setValue(J,"morphTargetBaseInfluence",q),X.getUniforms().setValue(J,"morphTargetInfluences",U)}X.getUniforms().setValue(J,"morphTargetsTexture",N.texture,$),X.getUniforms().setValue(J,"morphTargetsTextureSize",N.size)}return{update:K}}function ZF(J,Q,$,W,Z){let K=new WeakMap;function H(U){let G=Z.render.frame,E=U.geometry,N=Q.get(U,E);if(K.get(N)!==G)Q.update(N),K.set(N,G);if(U.isInstancedMesh){if(U.hasEventListener("dispose",X)===!1)U.addEventListener("dispose",X);if(K.get(U)!==G){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);K.set(U,G)}}if(U.isSkinnedMesh){let F=U.skeleton;if(K.get(F)!==G)F.update(),K.set(F,G)}return N}function Y(){K=new WeakMap}function X(U){let G=U.target;if(G.removeEventListener("dispose",X),W.releaseStatesOfObject(G),$.remove(G.instanceMatrix),G.instanceColor!==null)$.remove(G.instanceColor)}return{update:H,dispose:Y}}var KF={[TQ]:"LINEAR_TONE_MAPPING",[wQ]:"REINHARD_TONE_MAPPING",[SQ]:"CINEON_TONE_MAPPING",[v7]:"ACES_FILMIC_TONE_MAPPING",[yQ]:"AGX_TONE_MAPPING",[vQ]:"NEUTRAL_TONE_MAPPING",[jQ]:"CUSTOM_TONE_MAPPING"};function HF(J,Q,$,W,Z,K){let H=new aJ(Q,$,{type:J,depthBuffer:Z,stencilBuffer:K,samples:W?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),Y=null,X=null,U=new yJ;U.setAttribute("position",new UJ([-1,3,0,-1,-1,0,3,-1,0],3)),U.setAttribute("uv",new UJ([0,2,0,0,2,0],2));let G=new aQ({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),E=new C0(U,G),N=new n9(-1,1,1,-1,0,1),F=null,q=null,V=!1,O,R=null,z=[],D=!1;this.setSize=function(L,M){if(H.setSize(L,M),Y!==null)Y.setSize(L,M);if(X!==null)X.setSize(L,M);for(let I=0;I<z.length;I++){let w=z[I];if(w.setSize)w.setSize(L,M)}},this.setEffects=function(L){z=L,D=z.length>0&&z[0].isRenderPass===!0;let{width:M,height:I}=H;if(z.length>0&&Y===null)Y=new aJ(M,I,{type:N8,depthBuffer:!1,stencilBuffer:!1}),X=new aJ(M,I,{type:N8,depthBuffer:!1,stencilBuffer:!1});for(let w=0;w<z.length;w++){let B=z[w];if(B.setSize)B.setSize(M,I)}},this.begin=function(L,M){if(V)return!1;if(L.toneMapping===X9&&z.length===0)return!1;if(R=M,M!==null){let{width:I,height:w}=M;if(H.width!==I||H.height!==w)this.setSize(I,w)}if(D===!1)L.setRenderTarget(H);return O=L.toneMapping,L.toneMapping=X9,!0},this.hasRenderPass=function(){return D},this.end=function(L,M){L.toneMapping=O,V=!0;let I=H,w=Y;for(let B=0;B<z.length;B++){let _=z[B];if(_.enabled===!1)continue;if(_.render(L,w,I,M),_.needsSwap!==!1)I=w,w=w===Y?X:Y}if(F!==L.outputColorSpace||q!==L.toneMapping){if(F=L.outputColorSpace,q=L.toneMapping,G.defines={},KJ.getTransfer(F)===jJ)G.defines.SRGB_TRANSFER="";let B=KF[q];if(B)G.defines[B]="";G.needsUpdate=!0}G.uniforms.tDiffuse.value=I.texture,L.setRenderTarget(R),L.render(E,N),R=null,V=!1},this.isCompositing=function(){return V},this.dispose=function(){if(H.dispose(),Y!==null)Y.dispose();if(X!==null)X.dispose();U.dispose(),G.dispose()}}var FU=new oJ,ZH=new d7(1,1),qU=new qW,OU=new _K,RU=new kW,iX=[],oX=[],aX=new Float32Array(16),rX=new Float32Array(9),tX=new Float32Array(4);function o6(J,Q,$){let W=J[0];if(W<=0||W>0)return J;let Z=Q*$,K=iX[Z];if(K===void 0)K=new Float32Array(Z),iX[Z]=K;if(Q!==0){W.toArray(K,0);for(let H=1,Y=0;H!==Q;++H)Y+=$,J[H].toArray(K,Y)}return K}function H8(J,Q){if(J.length!==Q.length)return!1;for(let $=0,W=J.length;$<W;$++)if(J[$]!==Q[$])return!1;return!0}function Y8(J,Q){for(let $=0,W=Q.length;$<W;$++)J[$]=Q[$]}function gW(J,Q){let $=oX[Q];if($===void 0)$=new Int32Array(Q),oX[Q]=$;for(let W=0;W!==Q;++W)$[W]=J.allocateTextureUnit();return $}function YF(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function XF(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(H8($,Q))return;J.uniform2fv(this.addr,Q),Y8($,Q)}}function UF(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(H8($,Q))return;J.uniform3fv(this.addr,Q),Y8($,Q)}}function GF(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(H8($,Q))return;J.uniform4fv(this.addr,Q),Y8($,Q)}}function NF(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(H8($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),Y8($,Q)}else{if(H8($,W))return;tX.set(W),J.uniformMatrix2fv(this.addr,!1,tX),Y8($,W)}}function EF(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(H8($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),Y8($,Q)}else{if(H8($,W))return;rX.set(W),J.uniformMatrix3fv(this.addr,!1,rX),Y8($,W)}}function FF(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(H8($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),Y8($,Q)}else{if(H8($,W))return;aX.set(W),J.uniformMatrix4fv(this.addr,!1,aX),Y8($,W)}}function qF(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function OF(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(H8($,Q))return;J.uniform2iv(this.addr,Q),Y8($,Q)}}function RF(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(H8($,Q))return;J.uniform3iv(this.addr,Q),Y8($,Q)}}function LF(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(H8($,Q))return;J.uniform4iv(this.addr,Q),Y8($,Q)}}function VF(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function DF(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(H8($,Q))return;J.uniform2uiv(this.addr,Q),Y8($,Q)}}function BF(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(H8($,Q))return;J.uniform3uiv(this.addr,Q),Y8($,Q)}}function kF(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(H8($,Q))return;J.uniform4uiv(this.addr,Q),Y8($,Q)}}function MF(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;let K;if(this.type===J.SAMPLER_2D_SHADOW)ZH.compareFunction=$.isReversedDepthBuffer()?FW:EW,K=ZH;else K=FU;$.setTexture2D(Q||K,Z)}function CF(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTexture3D(Q||OU,Z)}function zF(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTextureCube(Q||RU,Z)}function PF(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTexture2DArray(Q||qU,Z)}function IF(J){switch(J){case 5126:return YF;case 35664:return XF;case 35665:return UF;case 35666:return GF;case 35674:return NF;case 35675:return EF;case 35676:return FF;case 5124:case 35670:return qF;case 35667:case 35671:return OF;case 35668:case 35672:return RF;case 35669:case 35673:return LF;case 5125:return VF;case 36294:return DF;case 36295:return BF;case 36296:return kF;case 35678:case 36198:case 36298:case 36306:case 35682:return MF;case 35679:case 36299:case 36307:return CF;case 35680:case 36300:case 36308:case 36293:return zF;case 36289:case 36303:case 36311:case 36292:return PF}}function AF(J,Q){J.uniform1fv(this.addr,Q)}function _F(J,Q){let $=o6(Q,this.size,2);J.uniform2fv(this.addr,$)}function TF(J,Q){let $=o6(Q,this.size,3);J.uniform3fv(this.addr,$)}function wF(J,Q){let $=o6(Q,this.size,4);J.uniform4fv(this.addr,$)}function SF(J,Q){let $=o6(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function jF(J,Q){let $=o6(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function yF(J,Q){let $=o6(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function vF(J,Q){J.uniform1iv(this.addr,Q)}function fF(J,Q){J.uniform2iv(this.addr,Q)}function hF(J,Q){J.uniform3iv(this.addr,Q)}function bF(J,Q){J.uniform4iv(this.addr,Q)}function xF(J,Q){J.uniform1uiv(this.addr,Q)}function gF(J,Q){J.uniform2uiv(this.addr,Q)}function pF(J,Q){J.uniform3uiv(this.addr,Q)}function mF(J,Q){J.uniform4uiv(this.addr,Q)}function lF(J,Q,$){let W=this.cache,Z=Q.length,K=gW($,Z);if(!H8(W,K))J.uniform1iv(this.addr,K),Y8(W,K);let H;if(this.type===J.SAMPLER_2D_SHADOW)H=ZH;else H=FU;for(let Y=0;Y!==Z;++Y)$.setTexture2D(Q[Y]||H,K[Y])}function uF(J,Q,$){let W=this.cache,Z=Q.length,K=gW($,Z);if(!H8(W,K))J.uniform1iv(this.addr,K),Y8(W,K);for(let H=0;H!==Z;++H)$.setTexture3D(Q[H]||OU,K[H])}function dF(J,Q,$){let W=this.cache,Z=Q.length,K=gW($,Z);if(!H8(W,K))J.uniform1iv(this.addr,K),Y8(W,K);for(let H=0;H!==Z;++H)$.setTextureCube(Q[H]||RU,K[H])}function cF(J,Q,$){let W=this.cache,Z=Q.length,K=gW($,Z);if(!H8(W,K))J.uniform1iv(this.addr,K),Y8(W,K);for(let H=0;H!==Z;++H)$.setTexture2DArray(Q[H]||qU,K[H])}function nF(J){switch(J){case 5126:return AF;case 35664:return _F;case 35665:return TF;case 35666:return wF;case 35674:return SF;case 35675:return jF;case 35676:return yF;case 5124:case 35670:return vF;case 35667:case 35671:return fF;case 35668:case 35672:return hF;case 35669:case 35673:return bF;case 5125:return xF;case 36294:return gF;case 36295:return pF;case 36296:return mF;case 35678:case 36198:case 36298:case 36306:case 35682:return lF;case 35679:case 36299:case 36307:return uF;case 35680:case 36300:case 36308:case 36293:return dF;case 36289:case 36303:case 36311:case 36292:return cF}}class LU{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=IF(Q.type)}}class VU{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=nF(Q.type)}}class DU{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let W=this.seq;for(let Z=0,K=W.length;Z!==K;++Z){let H=W[Z];H.setValue(J,Q[H.id],$)}}}var $H=/(\w+)(\])?(\[|\.)?/g;function eX(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function sF(J,Q,$){let W=J.name,Z=W.length;$H.lastIndex=0;while(!0){let K=$H.exec(W),H=$H.lastIndex,Y=K[1],X=K[2]==="]",U=K[3];if(X)Y=Y|0;if(U===void 0||U==="["&&H+2===Z){eX($,U===void 0?new LU(Y,J,Q):new VU(Y,J,Q));break}else{let E=$.map[Y];if(E===void 0)E=new DU(Y),eX($,E);$=E}}}class Z${constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let K=0;K<$;++K){let H=J.getActiveUniform(Q,K),Y=J.getUniformLocation(Q,H.name);sF(H,Y,this)}let W=[],Z=[];for(let K of this.seq)if(K.type===J.SAMPLER_2D_SHADOW||K.type===J.SAMPLER_CUBE_SHADOW||K.type===J.SAMPLER_2D_ARRAY_SHADOW)W.push(K);else Z.push(K);if(W.length>0)this.seq=W.concat(Z)}setValue(J,Q,$,W){let Z=this.map[Q];if(Z!==void 0)Z.setValue(J,$,W)}setOptional(J,Q,$){let W=Q[$];if(W!==void 0)this.setValue(J,$,W)}static upload(J,Q,$,W){for(let Z=0,K=Q.length;Z!==K;++Z){let H=Q[Z],Y=$[H.id];if(Y.needsUpdate!==!1)H.setValue(J,Y.value,W)}}static seqWithValue(J,Q){let $=[];for(let W=0,Z=J.length;W!==Z;++W){let K=J[W];if(K.id in Q)$.push(K)}return $}}function JU(J,Q,$){let W=J.createShader(Q);return J.shaderSource(W,$),J.compileShader(W),W}var iF=37297,oF=0;function aF(J,Q){let $=J.split(`
`),W=[],Z=Math.max(Q-6,0),K=Math.min(Q+6,$.length);for(let H=Z;H<K;H++){let Y=H+1;W.push(`${Y===Q?">":" "} ${Y}: ${$[H]}`)}return W.join(`
`)}var QU=new e0;function rF(J){KJ._getMatrix(QU,KJ.workingColorSpace,J);let Q=`mat3( ${QU.elements.map(($)=>$.toFixed(4))} )`;switch(KJ.getTransfer(J)){case MK:return[Q,"LinearTransferOETF"];case jJ:return[Q,"sRGBTransferOETF"];default:return x0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function $U(J,Q,$){let W=J.getShaderParameter(Q,J.COMPILE_STATUS),K=(J.getShaderInfoLog(Q)||"").trim();if(W&&K==="")return"";let H=/ERROR: 0:(\d+)/.exec(K);if(H){let Y=parseInt(H[1]);return $.toUpperCase()+`

`+K+`

`+aF(J.getShaderSource(Q),Y)}else return K}function tF(J,Q){let $=rF(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var eF={[TQ]:"Linear",[wQ]:"Reinhard",[SQ]:"Cineon",[v7]:"ACESFilmic",[yQ]:"AgX",[vQ]:"Neutral",[jQ]:"Custom"};function Jq(J,Q){let $=eF[Q];if($===void 0)return x0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var bW=new T;function Qq(){KJ.getLuminanceCoefficients(bW);let J=bW.x.toFixed(4),Q=bW.y.toFixed(4),$=bW.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function $q(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(W$).join(`
`)}function Wq(J){let Q=[];for(let $ in J){let W=J[$];if(W===!1)continue;Q.push("#define "+$+" "+W)}return Q.join(`
`)}function Zq(J,Q){let $={},W=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let Z=0;Z<W;Z++){let K=J.getActiveAttrib(Q,Z),H=K.name,Y=1;if(K.type===J.FLOAT_MAT2)Y=2;if(K.type===J.FLOAT_MAT3)Y=3;if(K.type===J.FLOAT_MAT4)Y=4;$[H]={type:K.type,location:J.getAttribLocation(Q,H),locationSize:Y}}return $}function W$(J){return J!==""}function WU(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function ZU(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var Kq=/^[ \t]*#include +<([\w\d./]+)>/gm;function KH(J){return J.replace(Kq,Yq)}var Hq=new Map;function Yq(J,Q){let $=GJ[Q];if($===void 0){let W=Hq.get(Q);if(W!==void 0)$=GJ[W],x0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,W);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return KH($)}var Xq=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function KU(J){return J.replace(Xq,Uq)}function Uq(J,Q,$,W){let Z="";for(let K=parseInt(Q);K<parseInt($);K++)Z+=W.replace(/\[\s*i\s*\]/g,"[ "+K+" ]").replace(/UNROLLED_LOOP_INDEX/g,K);return Z}function HU(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var Gq={[y7]:"SHADOWMAP_TYPE_PCF",[j6]:"SHADOWMAP_TYPE_VSM"};function Nq(J){return Gq[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Eq={[v6]:"ENVMAP_TYPE_CUBE",[f7]:"ENVMAP_TYPE_CUBE",[fQ]:"ENVMAP_TYPE_CUBE_UV"};function Fq(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return Eq[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var qq={[f7]:"ENVMAP_MODE_REFRACTION"};function Oq(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return qq[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Rq={[UX]:"ENVMAP_BLENDING_MULTIPLY",[GX]:"ENVMAP_BLENDING_MIX",[NX]:"ENVMAP_BLENDING_ADD"};function Lq(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return Rq[J.combine]||"ENVMAP_BLENDING_NONE"}function Vq(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,W=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:W,maxMip:$}}function Dq(J,Q,$,W){let Z=J.getContext(),K=$.defines,H=$.vertexShader,Y=$.fragmentShader,X=Nq($),U=Fq($),G=Oq($),E=Lq($),N=Vq($),F=$q($),q=Wq(K),V=Z.createProgram(),O,R,z=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(O=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,q].filter(W$).join(`
`),O.length>0)O+=`
`;if(R=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,q].filter(W$).join(`
`),R.length>0)R+=`
`}else O=[HU($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,q,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+G:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(W$).join(`
`),R=[HU($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,q,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+G:"",$.envMap?"#define "+E:"",N?"#define CUBEUV_TEXEL_WIDTH "+N.texelWidth:"",N?"#define CUBEUV_TEXEL_HEIGHT "+N.texelHeight:"",N?"#define CUBEUV_MAX_MIP "+N.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.retroreflection?"#define USE_RETROREFLECTION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==X9?"#define TONE_MAPPING":"",$.toneMapping!==X9?GJ.tonemapping_pars_fragment:"",$.toneMapping!==X9?Jq("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",GJ.colorspace_pars_fragment,tF("linearToOutputTexel",$.outputColorSpace),Qq(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(W$).join(`
`);if(H=KH(H),H=WU(H,$),H=ZU(H,$),Y=KH(Y),Y=WU(Y,$),Y=ZU(Y,$),H=KU(H),Y=KU(Y),$.isRawShaderMaterial!==!0)z=`#version 300 es
`,O=[F,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+O,R=["#define varying in",$.glslVersion===CK?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===CK?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+R;let D=z+O+H,L=z+R+Y,M=JU(Z,Z.VERTEX_SHADER,D),I=JU(Z,Z.FRAGMENT_SHADER,L);if(Z.attachShader(V,M),Z.attachShader(V,I),$.index0AttributeName!==void 0)Z.bindAttribLocation(V,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)Z.bindAttribLocation(V,0,"position");Z.linkProgram(V);function w(j){if(J.debug.checkShaderErrors){let b=Z.getProgramInfoLog(V)||"",Q0=Z.getShaderInfoLog(M)||"",S=Z.getShaderInfoLog(I)||"",i=b.trim(),u=Q0.trim(),x=S.trim(),H0=!0,n=!0;if(Z.getProgramParameter(V,Z.LINK_STATUS)===!1)if(H0=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(Z,V,M,I);else{let W0=$U(Z,M,"vertex"),Y0=$U(Z,I,"fragment");i0("WebGLProgram: Shader Error "+Z.getError()+" - VALIDATE_STATUS "+Z.getProgramParameter(V,Z.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+i+`
`+W0+`
`+Y0)}else if(i!=="")x0("WebGLProgram: Program Info Log:",i);else if(u===""||x==="")n=!1;if(n)j.diagnostics={runnable:H0,programLog:i,vertexShader:{log:u,prefix:O},fragmentShader:{log:x,prefix:R}}}Z.deleteShader(M),Z.deleteShader(I),B=new Z$(Z,V),_=Zq(Z,V)}let B;this.getUniforms=function(){if(B===void 0)w(this);return B};let _;this.getAttributes=function(){if(_===void 0)w(this);return _};let d=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(d===!1)d=Z.getProgramParameter(V,iF);return d},this.destroy=function(){W.releaseStatesOfProgram(this),Z.deleteProgram(V),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=oF++,this.cacheKey=Q,this.usedTimes=1,this.program=V,this.vertexShader=M,this.fragmentShader=I,this}var Bq=0;class BU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let W=this._getShaderCacheForMaterial(J);if(W.has(Q)===!1)W.add(Q),Q.usedTimes++;if(W.has($)===!1)W.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new kU(J),Q.set(J,$);return $}}class kU{constructor(J){this.id=Bq++,this.code=J,this.usedTimes=0}}function kq(J){return J===g7||J===UW||J===GW}function Mq(J,Q,$,W,Z,K){let H=new OW,Y=new BU,X=new Set,U=[],G=new Map,E=W.logarithmicDepthBuffer,N=W.precision,F={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function q(B){if(X.add(B),B===0)return"uv";return`uv${B}`}function V(B,_,d,j,b,Q0){let S=j.fog,i=b.geometry,u=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?j.environment:null,x=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,H0=Q.get(B.envMap||u,x),n=!!H0&&H0.mapping===fQ?H0.image.height:null,W0=F[B.type];if(B.precision!==null){if(N=W.getMaxPrecision(B.precision),N!==B.precision)x0("WebGLProgram.getParameters:",B.precision,"not supported, using",N,"instead.")}let Y0=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,g0=Y0!==void 0?Y0.length:0,I0=0;if(i.morphAttributes.position!==void 0)I0=1;if(i.morphAttributes.normal!==void 0)I0=2;if(i.morphAttributes.color!==void 0)I0=3;let a0,r0,a,N0;if(W0){let fJ=P9[W0];a0=fJ.vertexShader,r0=fJ.fragmentShader}else{a0=B.vertexShader,r0=B.fragmentShader;let fJ=Y.getVertexShaderStage(B),kJ=Y.getFragmentShaderStage(B);Y.update(B,fJ,kJ),a=fJ.id,N0=kJ.id}let E0=J.getRenderTarget(),u0=J.state.buffers.depth.getReversed(),l0=b.isInstancedMesh===!0,p0=b.isBatchedMesh===!0,uJ=!!B.map,HJ=!!B.matcap,LJ=!!H0,OJ=!!B.aoMap,YJ=!!B.lightMap,iJ=!!B.bumpMap&&B.wireframe===!1,TJ=!!B.normalMap,Q8=!!B.displacementMap,dJ=!!B.emissiveMap,cJ=!!B.metalnessMap,f=!!B.roughnessMap,F8=B.anisotropy>0,BJ=B.clearcoat>0,bJ=B.dispersion>0,P=B.retroreflectivity>0,k=B.iridescence>0,y=B.sheen>0,s=B.transmission>0,U0=F8&&!!B.anisotropyMap,O0=BJ&&!!B.clearcoatMap,q0=BJ&&!!B.clearcoatNormalMap,r=BJ&&!!B.clearcoatRoughnessMap,t=k&&!!B.iridescenceMap,P0=k&&!!B.iridescenceThicknessMap,b0=y&&!!B.sheenColorMap,L0=y&&!!B.sheenRoughnessMap,F0=!!B.specularMap,m0=!!B.specularColorMap,d0=!!B.specularIntensityMap,RJ=s&&!!B.transmissionMap,v=s&&!!B.thicknessMap,V0=!!B.gradientMap,e=!!B.alphaMap,D0=B.alphaTest>0,w0=!!B.alphaHash,X0=!!B.extensions,k0=X9;if(B.toneMapped){if(E0===null||E0.isXRRenderTarget===!0)k0=J.toneMapping}let t0={shaderID:W0,shaderType:B.type,shaderName:B.name,vertexShader:a0,fragmentShader:r0,defines:B.defines,customVertexShaderID:a,customFragmentShaderID:N0,isRawShaderMaterial:B.isRawShaderMaterial===!0,glslVersion:B.glslVersion,precision:N,batching:p0,batchingColor:p0&&b._colorsTexture!==null,instancing:l0,instancingColor:l0&&b.instanceColor!==null,instancingMorph:l0&&b.morphTexture!==null,outputColorSpace:E0===null?J.outputColorSpace:E0.isXRRenderTarget===!0?E0.texture.colorSpace:KJ.workingColorSpace,alphaToCoverage:!!B.alphaToCoverage,map:uJ,matcap:HJ,envMap:LJ,envMapMode:LJ&&H0.mapping,envMapCubeUVHeight:n,aoMap:OJ,lightMap:YJ,bumpMap:iJ,normalMap:TJ,displacementMap:Q8,emissiveMap:dJ,normalMapObjectSpace:TJ&&B.normalMapType===DX,normalMapTangentSpace:TJ&&B.normalMapType===kK,packedNormalMap:TJ&&B.normalMapType===kK&&kq(B.normalMap.format),metalnessMap:cJ,roughnessMap:f,anisotropy:F8,anisotropyMap:U0,clearcoat:BJ,clearcoatMap:O0,clearcoatNormalMap:q0,clearcoatRoughnessMap:r,dispersion:bJ,retroreflection:P,iridescence:k,iridescenceMap:t,iridescenceThicknessMap:P0,sheen:y,sheenColorMap:b0,sheenRoughnessMap:L0,specularMap:F0,specularColorMap:m0,specularIntensityMap:d0,transmission:s,transmissionMap:RJ,thicknessMap:v,gradientMap:V0,opaque:B.transparent===!1&&B.blending===_Q&&B.alphaToCoverage===!1,alphaMap:e,alphaTest:D0,alphaHash:w0,combine:B.combine,mapUv:uJ&&q(B.map.channel),aoMapUv:OJ&&q(B.aoMap.channel),lightMapUv:YJ&&q(B.lightMap.channel),bumpMapUv:iJ&&q(B.bumpMap.channel),normalMapUv:TJ&&q(B.normalMap.channel),displacementMapUv:Q8&&q(B.displacementMap.channel),emissiveMapUv:dJ&&q(B.emissiveMap.channel),metalnessMapUv:cJ&&q(B.metalnessMap.channel),roughnessMapUv:f&&q(B.roughnessMap.channel),anisotropyMapUv:U0&&q(B.anisotropyMap.channel),clearcoatMapUv:O0&&q(B.clearcoatMap.channel),clearcoatNormalMapUv:q0&&q(B.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:r&&q(B.clearcoatRoughnessMap.channel),iridescenceMapUv:t&&q(B.iridescenceMap.channel),iridescenceThicknessMapUv:P0&&q(B.iridescenceThicknessMap.channel),sheenColorMapUv:b0&&q(B.sheenColorMap.channel),sheenRoughnessMapUv:L0&&q(B.sheenRoughnessMap.channel),specularMapUv:F0&&q(B.specularMap.channel),specularColorMapUv:m0&&q(B.specularColorMap.channel),specularIntensityMapUv:d0&&q(B.specularIntensityMap.channel),transmissionMapUv:RJ&&q(B.transmissionMap.channel),thicknessMapUv:v&&q(B.thicknessMap.channel),alphaMapUv:e&&q(B.alphaMap.channel),vertexTangents:!!i.attributes.tangent&&(TJ||F8),vertexNormals:!!i.attributes.normal,vertexColors:B.vertexColors,vertexAlphas:B.vertexColors===!0&&!!i.attributes.color&&i.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!i.attributes.uv&&(uJ||e),fog:!!S,useFog:B.fog===!0,fogExp2:!!S&&S.isFogExp2,flatShading:B.wireframe===!1&&(B.flatShading===!0||i.attributes.normal===void 0&&TJ===!1&&(B.isMeshLambertMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isMeshPhysicalMaterial)),sizeAttenuation:B.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:u0,skinning:b.isSkinnedMesh===!0,hasPositionAttribute:i.attributes.position!==void 0,morphTargets:i.morphAttributes.position!==void 0,morphNormals:i.morphAttributes.normal!==void 0,morphColors:i.morphAttributes.color!==void 0,morphTargetsCount:g0,morphTextureStride:I0,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:Q0.length,numClippingPlanes:K.numPlanes,numClipIntersection:K.numIntersection,dithering:B.dithering,shadowMapEnabled:J.shadowMap.enabled&&d.length>0,shadowMapType:J.shadowMap.type,toneMapping:k0,decodeVideoTexture:uJ&&B.map.isVideoTexture===!0&&KJ.getTransfer(B.map.colorSpace)===jJ,decodeVideoTextureEmissive:dJ&&B.emissiveMap.isVideoTexture===!0&&KJ.getTransfer(B.emissiveMap.colorSpace)===jJ,premultipliedAlpha:B.premultipliedAlpha,doubleSided:B.side===J8,flipSided:B.side===R8,useDepthPacking:B.depthPacking>=0,depthPacking:B.depthPacking||0,index0AttributeName:B.index0AttributeName,extensionClipCullDistance:X0&&B.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(X0&&B.extensions.multiDraw===!0||p0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:B.customProgramCacheKey()};return t0.vertexUv1s=X.has(1),t0.vertexUv2s=X.has(2),t0.vertexUv3s=X.has(3),X.clear(),t0}function O(B){let _=[];if(B.shaderID)_.push(B.shaderID);else _.push(B.customVertexShaderID),_.push(B.customFragmentShaderID);if(B.defines!==void 0)for(let d in B.defines)_.push(d),_.push(B.defines[d]);if(B.isRawShaderMaterial===!1)R(_,B),z(_,B),_.push(J.outputColorSpace);return _.push(B.customProgramCacheKey),_.join()}function R(B,_){B.push(_.precision),B.push(_.outputColorSpace),B.push(_.envMapMode),B.push(_.envMapCubeUVHeight),B.push(_.mapUv),B.push(_.alphaMapUv),B.push(_.lightMapUv),B.push(_.aoMapUv),B.push(_.bumpMapUv),B.push(_.normalMapUv),B.push(_.displacementMapUv),B.push(_.emissiveMapUv),B.push(_.metalnessMapUv),B.push(_.roughnessMapUv),B.push(_.anisotropyMapUv),B.push(_.clearcoatMapUv),B.push(_.clearcoatNormalMapUv),B.push(_.clearcoatRoughnessMapUv),B.push(_.iridescenceMapUv),B.push(_.iridescenceThicknessMapUv),B.push(_.sheenColorMapUv),B.push(_.sheenRoughnessMapUv),B.push(_.specularMapUv),B.push(_.specularColorMapUv),B.push(_.specularIntensityMapUv),B.push(_.transmissionMapUv),B.push(_.thicknessMapUv),B.push(_.combine),B.push(_.fogExp2),B.push(_.sizeAttenuation),B.push(_.morphTargetsCount),B.push(_.morphAttributeCount),B.push(_.numSunLights),B.push(_.numDirLights),B.push(_.numPointLights),B.push(_.numSpotLights),B.push(_.numSpotLightMaps),B.push(_.numHemiLights),B.push(_.numRectAreaLights),B.push(_.numSunLightShadows),B.push(_.numDirLightShadows),B.push(_.numPointLightShadows),B.push(_.numSpotLightShadows),B.push(_.numSpotLightShadowsWithMaps),B.push(_.numLightProbes),B.push(_.shadowMapType),B.push(_.toneMapping),B.push(_.numClippingPlanes),B.push(_.numClipIntersection),B.push(_.depthPacking)}function z(B,_){if(H.disableAll(),_.instancing)H.enable(0);if(_.instancingColor)H.enable(1);if(_.instancingMorph)H.enable(2);if(_.matcap)H.enable(3);if(_.envMap)H.enable(4);if(_.normalMapObjectSpace)H.enable(5);if(_.normalMapTangentSpace)H.enable(6);if(_.clearcoat)H.enable(7);if(_.iridescence)H.enable(8);if(_.alphaTest)H.enable(9);if(_.vertexColors)H.enable(10);if(_.vertexAlphas)H.enable(11);if(_.vertexUv1s)H.enable(12);if(_.vertexUv2s)H.enable(13);if(_.vertexUv3s)H.enable(14);if(_.vertexTangents)H.enable(15);if(_.anisotropy)H.enable(16);if(_.alphaHash)H.enable(17);if(_.batching)H.enable(18);if(_.dispersion)H.enable(19);if(_.retroreflection)H.enable(24);if(_.batchingColor)H.enable(20);if(_.gradientMap)H.enable(21);if(_.packedNormalMap)H.enable(22);if(_.vertexNormals)H.enable(23);if(B.push(H.mask),H.disableAll(),_.fog)H.enable(0);if(_.useFog)H.enable(1);if(_.flatShading)H.enable(2);if(_.logarithmicDepthBuffer)H.enable(3);if(_.reversedDepthBuffer)H.enable(4);if(_.skinning)H.enable(5);if(_.morphTargets)H.enable(6);if(_.morphNormals)H.enable(7);if(_.morphColors)H.enable(8);if(_.premultipliedAlpha)H.enable(9);if(_.shadowMapEnabled)H.enable(10);if(_.doubleSided)H.enable(11);if(_.flipSided)H.enable(12);if(_.useDepthPacking)H.enable(13);if(_.dithering)H.enable(14);if(_.transmission)H.enable(15);if(_.sheen)H.enable(16);if(_.opaque)H.enable(17);if(_.pointsUvs)H.enable(18);if(_.decodeVideoTexture)H.enable(19);if(_.decodeVideoTextureEmissive)H.enable(20);if(_.alphaToCoverage)H.enable(21);if(_.numLightProbeGrids>0)H.enable(22);if(_.hasPositionAttribute)H.enable(23);B.push(H.mask)}function D(B){let _=F[B.type],d;if(_){let j=P9[_];d=l9.clone(j.uniforms)}else d=B.uniforms;return d}function L(B,_){let d=G.get(_);if(d!==void 0)++d.usedTimes;else d=new Dq(J,_,B,Z),U.push(d),G.set(_,d);return d}function M(B){if(--B.usedTimes===0){let _=U.indexOf(B);U[_]=U[U.length-1],U.pop(),G.delete(B.cacheKey),B.destroy()}}function I(B){Y.remove(B)}function w(){Y.dispose()}return{getParameters:V,getProgramCacheKey:O,getUniforms:D,acquireProgram:L,releaseProgram:M,releaseShaderCache:I,programs:U,dispose:w}}function Cq(){let J=new WeakMap;function Q(H){return J.has(H)}function $(H){let Y=J.get(H);if(Y===void 0)Y={},J.set(H,Y);return Y}function W(H){J.delete(H)}function Z(H,Y,X){J.get(H)[Y]=X}function K(){J=new WeakMap}return{has:Q,get:$,remove:W,update:Z,dispose:K}}function zq(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function YU(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function XU(){let J=[],Q=0,$=[],W=[],Z=[];function K(){Q=0,$.length=0,W.length=0,Z.length=0}function H(N){let F=0;if(N.isInstancedMesh)F+=2;if(N.isSkinnedMesh)F+=1;return F}function Y(N,F,q,V,O,R){let z=J[Q];if(z===void 0)z={id:N.id,object:N,geometry:F,material:q,materialVariant:H(N),groupOrder:V,renderOrder:N.renderOrder,z:O,group:R},J[Q]=z;else z.id=N.id,z.object=N,z.geometry=F,z.material=q,z.materialVariant=H(N),z.groupOrder=V,z.renderOrder=N.renderOrder,z.z=O,z.group=R;return Q++,z}function X(N,F,q,V,O,R,z){if(z.reversedDepth===!0)O=-O;let D=Y(N,F,q,V,O,R);if(q.transmission>0)W.push(D);else if(q.transparent===!0)Z.push(D);else $.push(D)}function U(N,F,q,V,O,R){let z=Y(N,F,q,V,O,R);if(q.transmission>0)W.unshift(z);else if(q.transparent===!0)Z.unshift(z);else $.unshift(z)}function G(N,F){if($.length>1)$.sort(N||zq);if(W.length>1)W.sort(F||YU);if(Z.length>1)Z.sort(F||YU)}function E(){for(let N=Q,F=J.length;N<F;N++){let q=J[N];if(q.id===null)break;q.id=null,q.object=null,q.geometry=null,q.material=null,q.group=null}}return{opaque:$,transmissive:W,transparent:Z,init:K,push:X,unshift:U,finish:E,sort:G}}function Pq(){let J=new WeakMap;function Q(W,Z){let K=J.get(W),H;if(K===void 0)H=new XU,J.set(W,[H]);else if(Z>=K.length)H=new XU,K.push(H);else H=K[Z];return H}function $(){J=new WeakMap}return{get:Q,dispose:$}}function Iq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={direction:new T,color:new y0};break;case"SpotLight":$={position:new T,direction:new T,color:new y0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new T,color:new y0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new T,skyColor:new y0,groundColor:new y0};break;case"RectAreaLight":$={color:new y0,position:new T,halfWidth:new T,halfHeight:new T};break}return J[Q.id]=$,$}}}function Aq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var _q=0;function Tq(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function wq(J){let Q=new Iq,$=Aq(),W={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)W.probe.push(new T);let Z=new T,K=new n0,H=new n0;function Y(U){let G=0,E=0,N=0;for(let b=0;b<9;b++)W.probe[b].set(0,0,0);let F=0,q=0,V=0,O=0,R=0,z=0,D=0,L=0,M=0,I=0,w=0,B=0,_=0,d=0;U.sort(Tq);for(let b=0,Q0=U.length;b<Q0;b++){let S=U[b],i=S.color,u=S.intensity,x=S.distance,H0=null;if(S.shadow&&S.shadow.map)if(S.shadow.map.texture.format===g7)H0=S.shadow.map.texture;else H0=S.shadow.map.depthTexture||S.shadow.map.texture;if(S.isAmbientLight)G+=i.r*u,E+=i.g*u,N+=i.b*u;else if(S.isLightProbe){for(let n=0;n<9;n++)W.probe[n].addScaledVector(S.sh.coefficients[n],u);d++}else if(S.isSunLight){let n=Q.get(S);if(n.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let W0=S.shadow,Y0=$.get(S);Y0.shadowIntensity=W0.intensity,Y0.shadowBias=W0.bias,Y0.shadowNormalBias=W0.normalBias,Y0.shadowRadius=W0.radius,Y0.shadowMapSize.copy(W0.mapSize).multiply(W0.getFrameExtents()),W.sunShadow[q]=Y0,W.sunShadowMap[q]=H0;let g0=W0.getViewportCount();for(let I0=0;I0<g0;I0++)W.sunShadowMatrix[V+I0]=W0.getMatrix(I0),W.sunShadowCascade[V+I0]=W0._cascadeData[I0];V+=g0,q++}W.sun[F]=n,F++}else if(S.isDirectionalLight){let n=Q.get(S);if(n.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let W0=S.shadow,Y0=$.get(S);Y0.shadowIntensity=W0.intensity,Y0.shadowBias=W0.bias,Y0.shadowNormalBias=W0.normalBias,Y0.shadowRadius=W0.radius,Y0.shadowMapSize=W0.mapSize,W.directionalShadow[O]=Y0,W.directionalShadowMap[O]=H0,W.directionalShadowMatrix[O]=S.shadow.matrix,M++}W.directional[O]=n,O++}else if(S.isSpotLight){let n=Q.get(S);n.position.setFromMatrixPosition(S.matrixWorld),n.color.copy(i).multiplyScalar(u),n.distance=x,n.coneCos=Math.cos(S.angle),n.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),n.decay=S.decay,W.spot[z]=n;let W0=S.shadow;if(S.map){if(W.spotLightMap[B]=S.map,B++,W0.updateMatrices(S),S.castShadow)_++}if(W.spotLightMatrix[z]=W0.matrix,S.castShadow){let Y0=$.get(S);Y0.shadowIntensity=W0.intensity,Y0.shadowBias=W0.bias,Y0.shadowNormalBias=W0.normalBias,Y0.shadowRadius=W0.radius,Y0.shadowMapSize=W0.mapSize,W.spotShadow[z]=Y0,W.spotShadowMap[z]=H0,w++}z++}else if(S.isRectAreaLight){let n=Q.get(S);n.color.copy(i).multiplyScalar(u),n.halfWidth.set(S.width*0.5,0,0),n.halfHeight.set(0,S.height*0.5,0),W.rectArea[D]=n,D++}else if(S.isPointLight){let n=Q.get(S);if(n.color.copy(S.color).multiplyScalar(S.intensity),n.distance=S.distance,n.decay=S.decay,S.castShadow){let W0=S.shadow,Y0=$.get(S);Y0.shadowIntensity=W0.intensity,Y0.shadowBias=W0.bias,Y0.shadowNormalBias=W0.normalBias,Y0.shadowRadius=W0.radius,Y0.shadowMapSize=W0.mapSize,Y0.shadowCameraNear=W0.camera.near,Y0.shadowCameraFar=W0.camera.far,W.pointShadow[R]=Y0,W.pointShadowMap[R]=H0,W.pointShadowMatrix[R]=S.shadow.matrix,I++}W.point[R]=n,R++}else if(S.isHemisphereLight){let n=Q.get(S);n.skyColor.copy(S.color).multiplyScalar(u),n.groundColor.copy(S.groundColor).multiplyScalar(u),W.hemi[L]=n,L++}}if(D>0)if(J.has("OES_texture_float_linear")===!0)W.rectAreaLTC1=z0.LTC_FLOAT_1,W.rectAreaLTC2=z0.LTC_FLOAT_2;else W.rectAreaLTC1=z0.LTC_HALF_1,W.rectAreaLTC2=z0.LTC_HALF_2;W.ambient[0]=G,W.ambient[1]=E,W.ambient[2]=N;let j=W.hash;if(j.sunLength!==F||j.directionalLength!==O||j.pointLength!==R||j.spotLength!==z||j.rectAreaLength!==D||j.hemiLength!==L||j.numSunShadows!==q||j.numDirectionalShadows!==M||j.numPointShadows!==I||j.numSpotShadows!==w||j.numSpotMaps!==B||j.numLightProbes!==d)W.sun.length=F,W.directional.length=O,W.spot.length=z,W.rectArea.length=D,W.point.length=R,W.hemi.length=L,W.sunShadow.length=q,W.sunShadowMap.length=q,W.sunShadowMatrix.length=V,W.sunShadowCascade.length=V,W.directionalShadow.length=M,W.directionalShadowMap.length=M,W.directionalShadowMatrix.length=M,W.pointShadow.length=I,W.pointShadowMap.length=I,W.pointShadowMatrix.length=I,W.spotShadow.length=w,W.spotShadowMap.length=w,W.spotLightMatrix.length=w+B-_,W.spotLightMap.length=B,W.numSpotLightShadowsWithMaps=_,W.numLightProbes=d,j.sunLength=F,j.directionalLength=O,j.pointLength=R,j.spotLength=z,j.rectAreaLength=D,j.hemiLength=L,j.numSunShadows=q,j.numDirectionalShadows=M,j.numPointShadows=I,j.numSpotShadows=w,j.numSpotMaps=B,j.numLightProbes=d,W.version=_q++}function X(U,G){let E=0,N=0,F=0,q=0,V=0,O=0,R=G.matrixWorldInverse;for(let z=0,D=U.length;z<D;z++){let L=U[z];if(L.isSunLight){let M=W.sun[E];M.direction.setFromMatrixPosition(L.matrixWorld),M.direction.transformDirection(R),E++}else if(L.isDirectionalLight){let M=W.directional[N];M.direction.setFromMatrixPosition(L.matrixWorld),Z.setFromMatrixPosition(L.target.matrixWorld),M.direction.sub(Z),M.direction.transformDirection(R),N++}else if(L.isSpotLight){let M=W.spot[q];M.position.setFromMatrixPosition(L.matrixWorld),M.position.applyMatrix4(R),M.direction.setFromMatrixPosition(L.matrixWorld),Z.setFromMatrixPosition(L.target.matrixWorld),M.direction.sub(Z),M.direction.transformDirection(R),q++}else if(L.isRectAreaLight){let M=W.rectArea[V];M.position.setFromMatrixPosition(L.matrixWorld),M.position.applyMatrix4(R),H.identity(),K.copy(L.matrixWorld),K.premultiply(R),H.extractRotation(K),M.halfWidth.set(L.width*0.5,0,0),M.halfHeight.set(0,L.height*0.5,0),M.halfWidth.applyMatrix4(H),M.halfHeight.applyMatrix4(H),V++}else if(L.isPointLight){let M=W.point[F];M.position.setFromMatrixPosition(L.matrixWorld),M.position.applyMatrix4(R),F++}else if(L.isHemisphereLight){let M=W.hemi[O];M.direction.setFromMatrixPosition(L.matrixWorld),M.direction.transformDirection(R),O++}}}return{setup:Y,setupView:X,state:W}}function UU(J){let Q=new wq(J),$=[],W=[],Z=[];function K(N){E.camera=N,$.length=0,W.length=0,Z.length=0}function H(N){$.push(N)}function Y(N){W.push(N)}function X(N){Z.push(N)}function U(){Q.setup($)}function G(N){Q.setupView($,N)}let E={lightsArray:$,shadowsArray:W,lightProbeGridArray:Z,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:K,state:E,setupLights:U,setupLightsView:G,pushLight:H,pushShadow:Y,pushLightProbeGrid:X}}function Sq(J){let Q=new WeakMap;function $(Z,K=0){let H=Q.get(Z),Y;if(H===void 0)Y=new UU(J),Q.set(Z,[Y]);else if(K>=H.length)Y=new UU(J),H.push(Y);else Y=H[K];return Y}function W(){Q=new WeakMap}return{get:$,dispose:W}}var jq=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yq=`uniform sampler2D shadow_pass;
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
}`,vq=[new T(1,0,0),new T(-1,0,0),new T(0,1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1)],fq=[new T(0,-1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1),new T(0,-1,0),new T(0,-1,0)],GU=new n0,$$=new T,WH=new T;function hq(J,Q,$){let W=new uQ,Z=new $0,K=new $0,H=new SJ,Y=new hK,X=new bK,U={},G=$.maxTextureSize,E={[K7]:R8,[R8]:K7,[J8]:J8},N=new lJ({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $0},radius:{value:4}},vertexShader:jq,fragmentShader:yq}),F=N.clone();F.defines.HORIZONTAL_PASS=1;let q=new yJ;q.setAttribute("position",new sJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let V=new C0(q,N),O=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=y7;let R=this.type;this.render=function(I,w,B){if(O.enabled===!1)return;if(O.autoUpdate===!1&&O.needsUpdate===!1)return;if(I.length===0)return;if(this.type===fY)x0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=y7;let _=J.getRenderTarget(),d=J.getActiveCubeFace(),j=J.getActiveMipmapLevel(),b=J.state;if(b.setBlending(o8),b.buffers.depth.getReversed()===!0)b.buffers.color.setClear(0,0,0,0);else b.buffers.color.setClear(1,1,1,1);b.buffers.depth.setTest(!0),b.setScissorTest(!1);let Q0=R!==this.type;if(Q0)w.traverse(function(S){if(S.material)if(Array.isArray(S.material))S.material.forEach((i)=>i.needsUpdate=!0);else S.material.needsUpdate=!0});for(let S=0,i=I.length;S<i;S++){let u=I[S],x=u.shadow;if(x===void 0){x0("WebGLShadowMap:",u,"has no shadow.");continue}if(x.autoUpdate===!1&&x.needsUpdate===!1)continue;Z.copy(x.mapSize);let H0=x.getFrameExtents();if(Z.multiply(H0),K.copy(x.mapSize),Z.x>G||Z.y>G){if(Z.x>G)K.x=Math.floor(G/H0.x),Z.x=K.x*H0.x,x.mapSize.x=K.x;if(Z.y>G)K.y=Math.floor(G/H0.y),Z.y=K.y*H0.y,x.mapSize.y=K.y}let n=J.state.buffers.depth.getReversed();if(x.camera._reversedDepth=n,x.map===null||Q0===!0){if(x.map!==null){if(x.map.depthTexture!==null)x.map.depthTexture.dispose(),x.map.depthTexture=null;x.map.dispose()}if(this.type===j6){if(u.isPointLight){x0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}x.map=new aJ(Z.x,Z.y,{format:g7,type:N8,minFilter:G8,magFilter:G8,generateMipmaps:!1}),x.map.texture.name=u.name+".shadowMap",x.map.depthTexture=new d7(Z.x,Z.y,g9),x.map.depthTexture.name=u.name+".shadowMapDepth",x.map.depthTexture.format=b7,x.map.depthTexture.compareFunction=null,x.map.depthTexture.minFilter=U9,x.map.depthTexture.magFilter=U9}else{if(u.isPointLight)x.map=new HH(Z.x),x.map.depthTexture=new TK(Z.x,Y7);else x.map=new aJ(Z.x,Z.y),x.map.depthTexture=new d7(Z.x,Z.y,Y7);if(x.map.depthTexture.name=u.name+".shadowMap",x.map.depthTexture.format=b7,this.type===y7)x.map.depthTexture.compareFunction=n?FW:EW,x.map.depthTexture.minFilter=G8,x.map.depthTexture.magFilter=G8;else x.map.depthTexture.compareFunction=null,x.map.depthTexture.minFilter=U9,x.map.depthTexture.magFilter=U9}x.camera.updateProjectionMatrix()}if(x.map.isWebGLCubeRenderTarget!==!0&&(x.map.width!==Z.x||x.map.height!==Z.y))x.map.setSize(Z.x,Z.y);let W0=x.map.isWebGLCubeRenderTarget?6:x.getViewportCount();if(u.isPointLight!==!0)x.updateMatrices(u,B);for(let Y0=0;Y0<W0;Y0++){let g0=x.getCamera(Y0);if(u.isPointLight){let{camera:I0,matrix:a0}=x,r0=u.distance||I0.far;if(r0!==I0.far)I0.far=r0,I0.updateProjectionMatrix();$$.setFromMatrixPosition(u.matrixWorld),I0.position.copy($$),WH.copy(I0.position),WH.add(vq[Y0]),I0.up.copy(fq[Y0]),I0.lookAt(WH),I0.updateMatrixWorld(),a0.makeTranslation(-$$.x,-$$.y,-$$.z),GU.multiplyMatrices(I0.projectionMatrix,I0.matrixWorldInverse),x._frustum.setFromProjectionMatrix(GU,I0.coordinateSystem,I0.reversedDepth)}if(x.map.isWebGLCubeRenderTarget)J.setRenderTarget(x.map,Y0),J.clear();else{if(Y0===0)J.setRenderTarget(x.map),J.clear();let I0=x.getViewport(Y0);H.set(K.x*I0.x,K.y*I0.y,K.x*I0.z,K.y*I0.w),b.viewport(H)}W=x.getFrustum(Y0),L(w,B,g0,u,this.type)}if(x.isPointLightShadow!==!0&&this.type===j6)z(x,B);x.needsUpdate=!1}R=this.type,O.needsUpdate=!1,J.setRenderTarget(_,d,j)};function z(I,w){let B=Q.update(V);if(N.defines.VSM_SAMPLES!==I.blurSamples)N.defines.VSM_SAMPLES=I.blurSamples,F.defines.VSM_SAMPLES=I.blurSamples,N.needsUpdate=!0,F.needsUpdate=!0;if(I.mapPass===null)I.mapPass=new aJ(Z.x,Z.y,{format:g7,type:N8});else if(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)I.mapPass.setSize(I.map.width,I.map.height);N.uniforms.shadow_pass.value=I.map.depthTexture,N.uniforms.resolution.value.set(I.map.width,I.map.height),N.uniforms.radius.value=I.radius,J.setRenderTarget(I.mapPass),J.clear(),J.renderBufferDirect(w,null,B,N,V,null),F.uniforms.shadow_pass.value=I.mapPass.texture,F.uniforms.resolution.value.set(I.map.width,I.map.height),F.uniforms.radius.value=I.radius,J.setRenderTarget(I.map),J.clear(),J.renderBufferDirect(w,null,B,F,V,null)}function D(I,w,B,_){let d=null,j=B.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(j!==void 0)d=j;else if(d=B.isPointLight===!0?X:Y,J.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let b=d.uuid,Q0=w.uuid,S=U[b];if(S===void 0)S={},U[b]=S;let i=S[Q0];if(i===void 0)i=d.clone(),S[Q0]=i,w.addEventListener("dispose",M);d=i}if(d.visible=w.visible,d.wireframe=w.wireframe,_===j6)d.side=w.shadowSide!==null?w.shadowSide:w.side;else d.side=w.shadowSide!==null?w.shadowSide:E[w.side];if(d.alphaMap=w.alphaMap,d.alphaTest=w.alphaToCoverage===!0?0.5:w.alphaTest,d.map=w.map,d.clipShadows=w.clipShadows,d.clippingPlanes=w.clippingPlanes,d.clipIntersection=w.clipIntersection,d.displacementMap=w.displacementMap,d.displacementScale=w.displacementScale,d.displacementBias=w.displacementBias,d.wireframeLinewidth=w.wireframeLinewidth,d.linewidth=w.linewidth,B.isPointLight===!0&&d.isMeshDistanceMaterial===!0){let b=J.properties.get(d);b.light=B}return d}function L(I,w,B,_,d){if(I.visible===!1)return;if(I.layers.test(w.layers)&&(I.isMesh||I.isLine||I.isPoints)){if((I.castShadow||I.receiveShadow&&d===j6)&&(!I.frustumCulled||I.intersectsFrustum(W))){I.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,I.matrixWorld);let Q0=Q.update(I),S=I.material;if(Array.isArray(S)){let i=Q0.groups;for(let u=0,x=i.length;u<x;u++){let H0=i[u],n=S[H0.materialIndex];if(n&&n.visible){let W0=D(I,n,_,d);I.onBeforeShadow(J,I,w,B,Q0,W0,H0),J.renderBufferDirect(B,null,Q0,W0,I,H0),I.onAfterShadow(J,I,w,B,Q0,W0,H0)}}}else if(S.visible){let i=D(I,S,_,d);I.onBeforeShadow(J,I,w,B,Q0,i,null),J.renderBufferDirect(B,null,Q0,i,I,null),I.onAfterShadow(J,I,w,B,Q0,i,null)}}}let b=I.children;for(let Q0=0,S=b.length;Q0<S;Q0++)L(b[Q0],w,B,_,d)}function M(I){I.target.removeEventListener("dispose",M);for(let B in U){let _=U[B],d=I.target.uuid;if(d in _)_[d].dispose(),delete _[d]}}}function bq(J,Q){function $(){let v=!1,V0=new SJ,e=null,D0=new SJ(0,0,0,0);return{setMask:function(w0){if(e!==w0&&!v)J.colorMask(w0,w0,w0,w0),e=w0},setLocked:function(w0){v=w0},setClear:function(w0,X0,k0,t0,fJ){if(fJ===!0)w0*=t0,X0*=t0,k0*=t0;if(V0.set(w0,X0,k0,t0),D0.equals(V0)===!1)J.clearColor(w0,X0,k0,t0),D0.copy(V0)},reset:function(){v=!1,e=null,D0.set(-1,0,0,0)}}}function W(){let v=!1,V0=!1,e=null,D0=null,w0=null;return{setReversed:function(X0){if(V0!==X0){let k0=Q.get("EXT_clip_control");if(X0)k0.clipControlEXT(k0.LOWER_LEFT_EXT,k0.ZERO_TO_ONE_EXT);else k0.clipControlEXT(k0.LOWER_LEFT_EXT,k0.NEGATIVE_ONE_TO_ONE_EXT);V0=X0;let t0=w0;w0=null,this.setClear(t0)}},getReversed:function(){return V0},setTest:function(X0){if(X0)E0(J.DEPTH_TEST);else u0(J.DEPTH_TEST)},setMask:function(X0){if(e!==X0&&!v)J.depthMask(X0),e=X0},setFunc:function(X0){if(V0)X0=TX[X0];if(D0!==X0){switch(X0){case $X:J.depthFunc(J.NEVER);break;case WX:J.depthFunc(J.ALWAYS);break;case ZX:J.depthFunc(J.LESS);break;case hZ:J.depthFunc(J.LEQUAL);break;case KX:J.depthFunc(J.EQUAL);break;case HX:J.depthFunc(J.GEQUAL);break;case YX:J.depthFunc(J.GREATER);break;case XX:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}D0=X0}},setLocked:function(X0){v=X0},setClear:function(X0){if(w0!==X0){if(w0=X0,V0)X0=1-X0;J.clearDepth(X0)}},reset:function(){v=!1,e=null,D0=null,w0=null,V0=!1}}}function Z(){let v=!1,V0=null,e=null,D0=null,w0=null,X0=null,k0=null,t0=null,fJ=null;return{setTest:function(kJ){if(!v)if(kJ)E0(J.STENCIL_TEST);else u0(J.STENCIL_TEST)},setMask:function(kJ){if(V0!==kJ&&!v)J.stencilMask(kJ),V0=kJ},setFunc:function(kJ,A8,l8){if(e!==kJ||D0!==A8||w0!==l8)J.stencilFunc(kJ,A8,l8),e=kJ,D0=A8,w0=l8},setOp:function(kJ,A8,l8){if(X0!==kJ||k0!==A8||t0!==l8)J.stencilOp(kJ,A8,l8),X0=kJ,k0=A8,t0=l8},setLocked:function(kJ){v=kJ},setClear:function(kJ){if(fJ!==kJ)J.clearStencil(kJ),fJ=kJ},reset:function(){v=!1,V0=null,e=null,D0=null,w0=null,X0=null,k0=null,t0=null,fJ=null}}}let K=new $,H=new W,Y=new Z,X=new WeakMap,U=new WeakMap,G={},E={},N={},F=new WeakMap,q=[],V=null,O=!1,R=null,z=null,D=null,L=null,M=null,I=null,w=null,B=new y0(0,0,0),_=0,d=!1,j=null,b=null,Q0=null,S=null,i=null,u=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),x=!1,H0=0,n=J.getParameter(J.VERSION);if(n.indexOf("WebGL")!==-1)H0=parseFloat(/^WebGL (\d)/.exec(n)[1]),x=H0>=1;else if(n.indexOf("OpenGL ES")!==-1)H0=parseFloat(/^OpenGL ES (\d)/.exec(n)[1]),x=H0>=2;let W0=null,Y0={},g0=J.getParameter(J.SCISSOR_BOX),I0=J.getParameter(J.VIEWPORT),a0=new SJ().fromArray(g0),r0=new SJ().fromArray(I0);function a(v,V0,e,D0){let w0=new Uint8Array(4),X0=J.createTexture();J.bindTexture(v,X0),J.texParameteri(v,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(v,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let k0=0;k0<e;k0++)if(v===J.TEXTURE_3D||v===J.TEXTURE_2D_ARRAY)J.texImage3D(V0,0,J.RGBA,1,1,D0,0,J.RGBA,J.UNSIGNED_BYTE,w0);else J.texImage2D(V0+k0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,w0);return X0}let N0={};N0[J.TEXTURE_2D]=a(J.TEXTURE_2D,J.TEXTURE_2D,1),N0[J.TEXTURE_CUBE_MAP]=a(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),N0[J.TEXTURE_2D_ARRAY]=a(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),N0[J.TEXTURE_3D]=a(J.TEXTURE_3D,J.TEXTURE_3D,1,1),K.setClear(0,0,0,1),H.setClear(1),Y.setClear(0),E0(J.DEPTH_TEST),H.setFunc(hZ),iJ(!1),TJ(yZ),E0(J.CULL_FACE),OJ(o8);function E0(v){if(G[v]!==!0)J.enable(v),G[v]=!0}function u0(v){if(G[v]!==!1)J.disable(v),G[v]=!1}function l0(v,V0){if(N[v]!==V0){if(J.bindFramebuffer(v,V0),N[v]=V0,v===J.DRAW_FRAMEBUFFER)N[J.FRAMEBUFFER]=V0;if(v===J.FRAMEBUFFER)N[J.DRAW_FRAMEBUFFER]=V0;return!0}return!1}function p0(v,V0){let e=q,D0=!1;if(v){if(e=F.get(V0),e===void 0)e=[],F.set(V0,e);let w0=v.textures;if(e.length!==w0.length||e[0]!==J.COLOR_ATTACHMENT0){for(let X0=0,k0=w0.length;X0<k0;X0++)e[X0]=J.COLOR_ATTACHMENT0+X0;e.length=w0.length,D0=!0}}else if(e[0]!==J.BACK)e[0]=J.BACK,D0=!0;if(D0)J.drawBuffers(e)}function uJ(v){if(V!==v)return J.useProgram(v),V=v,!0;return!1}let HJ={[y6]:J.FUNC_ADD,[bY]:J.FUNC_SUBTRACT,[xY]:J.FUNC_REVERSE_SUBTRACT};HJ[gY]=J.MIN,HJ[pY]=J.MAX;let LJ={[mY]:J.ZERO,[lY]:J.ONE,[uY]:J.SRC_COLOR,[cY]:J.SRC_ALPHA,[rY]:J.SRC_ALPHA_SATURATE,[oY]:J.DST_COLOR,[sY]:J.DST_ALPHA,[dY]:J.ONE_MINUS_SRC_COLOR,[nY]:J.ONE_MINUS_SRC_ALPHA,[aY]:J.ONE_MINUS_DST_COLOR,[iY]:J.ONE_MINUS_DST_ALPHA,[tY]:J.CONSTANT_COLOR,[eY]:J.ONE_MINUS_CONSTANT_COLOR,[JX]:J.CONSTANT_ALPHA,[QX]:J.ONE_MINUS_CONSTANT_ALPHA};function OJ(v,V0,e,D0,w0,X0,k0,t0,fJ,kJ){if(v===o8){if(O===!0)u0(J.BLEND),O=!1;return}if(O===!1)E0(J.BLEND),O=!0;if(v!==hY){if(v!==R||kJ!==d){if(z!==y6||M!==y6)J.blendEquation(J.FUNC_ADD),z=y6,M=y6;if(kJ)switch(v){case _Q:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case k9:J.blendFunc(J.ONE,J.ONE);break;case vZ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case fZ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:i0("WebGLState: Invalid blending: ",v);break}else switch(v){case _Q:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case k9:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case vZ:i0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fZ:i0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:i0("WebGLState: Invalid blending: ",v);break}D=null,L=null,I=null,w=null,B.set(0,0,0),_=0,R=v,d=kJ}return}if(w0=w0||V0,X0=X0||e,k0=k0||D0,V0!==z||w0!==M)J.blendEquationSeparate(HJ[V0],HJ[w0]),z=V0,M=w0;if(e!==D||D0!==L||X0!==I||k0!==w)J.blendFuncSeparate(LJ[e],LJ[D0],LJ[X0],LJ[k0]),D=e,L=D0,I=X0,w=k0;if(t0.equals(B)===!1||fJ!==_)J.blendColor(t0.r,t0.g,t0.b,fJ),B.copy(t0),_=fJ;R=v,d=!1}function YJ(v,V0){v.side===J8?u0(J.CULL_FACE):E0(J.CULL_FACE);let e=v.side===R8;if(V0)e=!e;iJ(e),v.blending===_Q&&v.transparent===!1?OJ(o8):OJ(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),H.setFunc(v.depthFunc),H.setTest(v.depthTest),H.setMask(v.depthWrite),K.setMask(v.colorWrite);let D0=v.stencilWrite;if(Y.setTest(D0),D0)Y.setMask(v.stencilWriteMask),Y.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),Y.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass);dJ(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?E0(J.SAMPLE_ALPHA_TO_COVERAGE):u0(J.SAMPLE_ALPHA_TO_COVERAGE)}function iJ(v){if(j!==v){if(v)J.frontFace(J.CW);else J.frontFace(J.CCW);j=v}}function TJ(v){if(v!==yY){if(E0(J.CULL_FACE),v!==b)if(v===yZ)J.cullFace(J.BACK);else if(v===vY)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else u0(J.CULL_FACE);b=v}function Q8(v){if(v!==Q0){if(x)J.lineWidth(v);Q0=v}}function dJ(v,V0,e){if(v){if(E0(J.POLYGON_OFFSET_FILL),S!==V0||i!==e){if(S=V0,i=e,H.getReversed())V0=-V0;J.polygonOffset(V0,e)}}else u0(J.POLYGON_OFFSET_FILL)}function cJ(v){if(v)E0(J.SCISSOR_TEST);else u0(J.SCISSOR_TEST)}function f(v){if(v===void 0)v=J.TEXTURE0+u-1;if(W0!==v)J.activeTexture(v),W0=v}function F8(v,V0,e){if(e===void 0)if(W0===null)e=J.TEXTURE0+u-1;else e=W0;let D0=Y0[e];if(D0===void 0)D0={type:void 0,texture:void 0},Y0[e]=D0;if(D0.type!==v||D0.texture!==V0){if(W0!==e)J.activeTexture(e),W0=e;J.bindTexture(v,V0||N0[v]),D0.type=v,D0.texture=V0}}function BJ(){let v=Y0[W0];if(v!==void 0&&v.type!==void 0)J.bindTexture(v.type,null),v.type=void 0,v.texture=void 0}function bJ(){try{J.compressedTexImage2D(...arguments)}catch(v){i0("WebGLState:",v)}}function P(){try{J.compressedTexImage3D(...arguments)}catch(v){i0("WebGLState:",v)}}function k(){try{J.texSubImage2D(...arguments)}catch(v){i0("WebGLState:",v)}}function y(){try{J.texSubImage3D(...arguments)}catch(v){i0("WebGLState:",v)}}function s(){try{J.compressedTexSubImage2D(...arguments)}catch(v){i0("WebGLState:",v)}}function U0(){try{J.compressedTexSubImage3D(...arguments)}catch(v){i0("WebGLState:",v)}}function O0(){try{J.texStorage2D(...arguments)}catch(v){i0("WebGLState:",v)}}function q0(){try{J.texStorage3D(...arguments)}catch(v){i0("WebGLState:",v)}}function r(){try{J.texImage2D(...arguments)}catch(v){i0("WebGLState:",v)}}function t(){try{J.texImage3D(...arguments)}catch(v){i0("WebGLState:",v)}}function P0(v){if(E[v]!==void 0)return E[v];else return J.getParameter(v)}function b0(v,V0){if(E[v]!==V0)J.pixelStorei(v,V0),E[v]=V0}function L0(v){if(a0.equals(v)===!1)J.scissor(v.x,v.y,v.z,v.w),a0.copy(v)}function F0(v){if(r0.equals(v)===!1)J.viewport(v.x,v.y,v.z,v.w),r0.copy(v)}function m0(v,V0){let e=U.get(V0);if(e===void 0)e=new WeakMap,U.set(V0,e);let D0=e.get(v);if(D0===void 0)D0=J.getUniformBlockIndex(V0,v.name),e.set(v,D0)}function d0(v,V0){let D0=U.get(V0).get(v);if(X.get(V0)!==D0)J.uniformBlockBinding(V0,D0,v.__bindingPointIndex),X.set(V0,D0)}function RJ(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),H.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),G={},E={},W0=null,Y0={},N={},F=new WeakMap,q=[],V=null,O=!1,R=null,z=null,D=null,L=null,M=null,I=null,w=null,B=new y0(0,0,0),_=0,d=!1,j=null,b=null,Q0=null,S=null,i=null,a0.set(0,0,J.canvas.width,J.canvas.height),r0.set(0,0,J.canvas.width,J.canvas.height),K.reset(),H.reset(),Y.reset()}return{buffers:{color:K,depth:H,stencil:Y},enable:E0,disable:u0,bindFramebuffer:l0,drawBuffers:p0,useProgram:uJ,setBlending:OJ,setMaterial:YJ,setFlipSided:iJ,setCullFace:TJ,setLineWidth:Q8,setPolygonOffset:dJ,setScissorTest:cJ,activeTexture:f,bindTexture:F8,unbindTexture:BJ,compressedTexImage2D:bJ,compressedTexImage3D:P,texImage2D:r,texImage3D:t,pixelStorei:b0,getParameter:P0,updateUBOMapping:m0,uniformBlockBinding:d0,texStorage2D:O0,texStorage3D:q0,texSubImage2D:k,texSubImage3D:y,compressedTexSubImage2D:s,compressedTexSubImage3D:U0,scissor:L0,viewport:F0,reset:RJ}}function xq(J,Q,$,W,Z,K,H){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,X=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new $0,G=new WeakMap,E=new Set,N,F=new WeakMap,q=!1;try{q=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(P){}function V(P,k){return q?new OffscreenCanvas(P,k):_6("canvas")}function O(P,k,y){let s=1,U0=bJ(P);if(U0.width>y||U0.height>y)s=y/Math.max(U0.width,U0.height);if(s<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let O0=Math.floor(s*U0.width),q0=Math.floor(s*U0.height);if(N===void 0)N=V(O0,q0);let r=k?V(O0,q0):N;return r.width=O0,r.height=q0,r.getContext("2d").drawImage(P,0,0,O0,q0),x0("WebGLRenderer: Texture has been resized from ("+U0.width+"x"+U0.height+") to ("+O0+"x"+q0+")."),r}else{if("data"in P)x0("WebGLRenderer: Image in DataTexture is too big ("+U0.width+"x"+U0.height+").");return P}return P}function R(P){return P.generateMipmaps}function z(P){J.generateMipmap(P)}function D(P){if(P.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(P.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function L(P,k,y,s,U0,O0=!1){if(P!==null){if(J[P]!==void 0)return J[P];x0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let q0;if(s){if(q0=Q.get("EXT_texture_norm16"),!q0)x0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let r=k;if(k===J.RED){if(y===J.FLOAT)r=J.R32F;if(y===J.HALF_FLOAT)r=J.R16F;if(y===J.UNSIGNED_BYTE)r=J.R8;if(y===J.UNSIGNED_SHORT&&q0)r=q0.R16_EXT;if(y===J.SHORT&&q0)r=q0.R16_SNORM_EXT}if(k===J.RED_INTEGER){if(y===J.UNSIGNED_BYTE)r=J.R8UI;if(y===J.UNSIGNED_SHORT)r=J.R16UI;if(y===J.UNSIGNED_INT)r=J.R32UI;if(y===J.BYTE)r=J.R8I;if(y===J.SHORT)r=J.R16I;if(y===J.INT)r=J.R32I}if(k===J.RG){if(y===J.FLOAT)r=J.RG32F;if(y===J.HALF_FLOAT)r=J.RG16F;if(y===J.UNSIGNED_BYTE)r=J.RG8;if(y===J.UNSIGNED_SHORT&&q0)r=q0.RG16_EXT;if(y===J.SHORT&&q0)r=q0.RG16_SNORM_EXT}if(k===J.RG_INTEGER){if(y===J.UNSIGNED_BYTE)r=J.RG8UI;if(y===J.UNSIGNED_SHORT)r=J.RG16UI;if(y===J.UNSIGNED_INT)r=J.RG32UI;if(y===J.BYTE)r=J.RG8I;if(y===J.SHORT)r=J.RG16I;if(y===J.INT)r=J.RG32I}if(k===J.RGB_INTEGER){if(y===J.UNSIGNED_BYTE)r=J.RGB8UI;if(y===J.UNSIGNED_SHORT)r=J.RGB16UI;if(y===J.UNSIGNED_INT)r=J.RGB32UI;if(y===J.BYTE)r=J.RGB8I;if(y===J.SHORT)r=J.RGB16I;if(y===J.INT)r=J.RGB32I}if(k===J.RGBA_INTEGER){if(y===J.UNSIGNED_BYTE)r=J.RGBA8UI;if(y===J.UNSIGNED_SHORT)r=J.RGBA16UI;if(y===J.UNSIGNED_INT)r=J.RGBA32UI;if(y===J.BYTE)r=J.RGBA8I;if(y===J.SHORT)r=J.RGBA16I;if(y===J.INT)r=J.RGBA32I}if(k===J.RGB){if(y===J.UNSIGNED_SHORT&&q0)r=q0.RGB16_EXT;if(y===J.SHORT&&q0)r=q0.RGB16_SNORM_EXT;if(y===J.UNSIGNED_INT_5_9_9_9_REV)r=J.RGB9_E5;if(y===J.UNSIGNED_INT_10F_11F_11F_REV)r=J.R11F_G11F_B10F}if(k===J.RGBA){let t=O0?MK:KJ.getTransfer(U0);if(y===J.FLOAT)r=J.RGBA32F;if(y===J.HALF_FLOAT)r=J.RGBA16F;if(y===J.UNSIGNED_BYTE)r=t===jJ?J.SRGB8_ALPHA8:J.RGBA8;if(y===J.UNSIGNED_SHORT&&q0)r=q0.RGBA16_EXT;if(y===J.SHORT&&q0)r=q0.RGBA16_SNORM_EXT;if(y===J.UNSIGNED_SHORT_4_4_4_4)r=J.RGBA4;if(y===J.UNSIGNED_SHORT_5_5_5_1)r=J.RGB5_A1}if(r===J.R16F||r===J.R32F||r===J.RG16F||r===J.RG32F||r===J.RGBA16F||r===J.RGBA32F)Q.get("EXT_color_buffer_float");return r}function M(P,k){let y;if(P){if(k===null||k===Y7||k===b6)y=J.DEPTH24_STENCIL8;else if(k===g9)y=J.DEPTH32F_STENCIL8;else if(k===hQ)y=J.DEPTH24_STENCIL8,x0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(k===null||k===Y7||k===b6)y=J.DEPTH_COMPONENT24;else if(k===g9)y=J.DEPTH_COMPONENT32F;else if(k===hQ)y=J.DEPTH_COMPONENT16;return y}function I(P,k){if(R(P)===!0||P.isFramebufferTexture&&P.minFilter!==U9&&P.minFilter!==G8)return Math.log2(Math.max(k.width,k.height))+1;else if(P.mipmaps!==void 0&&P.mipmaps.length>0)return P.mipmaps.length;else if(P.isCompressedTexture&&Array.isArray(P.image))return k.mipmaps.length;else return 1}function w(P){let k=P.target;if(k.removeEventListener("dispose",w),_(k),k.isVideoTexture)G.delete(k);if(k.isHTMLTexture)E.delete(k)}function B(P){let k=P.target;k.removeEventListener("dispose",B),j(k)}function _(P){let k=W.get(P);if(k.__webglInit===void 0)return;let y=P.source,s=F.get(y);if(s){let U0=s[k.__cacheKey];if(U0.usedTimes--,U0.usedTimes===0)d(P);if(Object.keys(s).length===0)F.delete(y)}W.remove(P)}function d(P){let k=W.get(P);J.deleteTexture(k.__webglTexture);let y=P.source,s=F.get(y);delete s[k.__cacheKey],H.memory.textures--}function j(P){let k=W.get(P);if(P.depthTexture)P.depthTexture.dispose(),W.remove(P.depthTexture);if(P.isWebGLCubeRenderTarget)for(let s=0;s<6;s++){if(Array.isArray(k.__webglFramebuffer[s]))for(let U0=0;U0<k.__webglFramebuffer[s].length;U0++)J.deleteFramebuffer(k.__webglFramebuffer[s][U0]);else J.deleteFramebuffer(k.__webglFramebuffer[s]);if(k.__webglDepthbuffer)J.deleteRenderbuffer(k.__webglDepthbuffer[s])}else{if(Array.isArray(k.__webglFramebuffer))for(let s=0;s<k.__webglFramebuffer.length;s++)J.deleteFramebuffer(k.__webglFramebuffer[s]);else J.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer)J.deleteRenderbuffer(k.__webglDepthbuffer);if(k.__webglMultisampledFramebuffer)J.deleteFramebuffer(k.__webglMultisampledFramebuffer);if(k.__webglColorRenderbuffer){for(let s=0;s<k.__webglColorRenderbuffer.length;s++)if(k.__webglColorRenderbuffer[s])J.deleteRenderbuffer(k.__webglColorRenderbuffer[s])}if(k.__webglDepthRenderbuffer)J.deleteRenderbuffer(k.__webglDepthRenderbuffer)}let y=P.textures;for(let s=0,U0=y.length;s<U0;s++){let O0=W.get(y[s]);if(O0.__webglTexture)J.deleteTexture(O0.__webglTexture),H.memory.textures--;W.remove(y[s])}W.remove(P)}let b=0;function Q0(){b=0}function S(){return b}function i(P){b=P}function u(){let P=b;if(P>=Z.maxTextures)x0("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+Z.maxTextures);return b+=1,P}function x(P){let k=[];return k.push(P.wrapS),k.push(P.wrapT),k.push(P.wrapR||0),k.push(P.magFilter),k.push(P.minFilter),k.push(P.anisotropy),k.push(P.internalFormat),k.push(P.format),k.push(P.type),k.push(P.generateMipmaps),k.push(P.premultiplyAlpha),k.push(P.flipY),k.push(P.unpackAlignment),k.push(P.colorSpace),k.join()}function H0(P,k){let y=W.get(P);if(P.isVideoTexture)F8(P);if(P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&y.__version!==P.version){let s=P.image;if(s===null)x0("WebGLRenderer: Texture marked for update but no image data found.");else if(s.complete===!1)x0("WebGLRenderer: Texture marked for update but image is incomplete");else{u0(y,P,k);return}}else if(P.isExternalTexture)y.__webglTexture=P.sourceTexture?P.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,y.__webglTexture,J.TEXTURE0+k)}function n(P,k){let y=W.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&y.__version!==P.version){u0(y,P,k);return}else if(P.isExternalTexture)y.__webglTexture=P.sourceTexture?P.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,y.__webglTexture,J.TEXTURE0+k)}function W0(P,k){let y=W.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&y.__version!==P.version){u0(y,P,k);return}$.bindTexture(J.TEXTURE_3D,y.__webglTexture,J.TEXTURE0+k)}function Y0(P,k){let y=W.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&y.__version!==P.version){l0(y,P,k);return}$.bindTexture(J.TEXTURE_CUBE_MAP,y.__webglTexture,J.TEXTURE0+k)}let g0={[H7]:J.REPEAT,[f6]:J.CLAMP_TO_EDGE,[WW]:J.MIRRORED_REPEAT},I0={[U9]:J.NEAREST,[ZW]:J.NEAREST_MIPMAP_NEAREST,[h7]:J.NEAREST_MIPMAP_LINEAR,[G8]:J.LINEAR,[h6]:J.LINEAR_MIPMAP_NEAREST,[M9]:J.LINEAR_MIPMAP_LINEAR},a0={[BX]:J.NEVER,[PX]:J.ALWAYS,[kX]:J.LESS,[EW]:J.LEQUAL,[MX]:J.EQUAL,[FW]:J.GEQUAL,[CX]:J.GREATER,[zX]:J.NOTEQUAL};function r0(P,k){if(k.type===g9&&Q.has("OES_texture_float_linear")===!1&&(k.magFilter===G8||k.magFilter===h6||k.magFilter===h7||k.magFilter===M9||k.minFilter===G8||k.minFilter===h6||k.minFilter===h7||k.minFilter===M9))x0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(P,J.TEXTURE_WRAP_S,g0[k.wrapS]),J.texParameteri(P,J.TEXTURE_WRAP_T,g0[k.wrapT]),P===J.TEXTURE_3D||P===J.TEXTURE_2D_ARRAY)J.texParameteri(P,J.TEXTURE_WRAP_R,g0[k.wrapR]);if(J.texParameteri(P,J.TEXTURE_MAG_FILTER,I0[k.magFilter]),J.texParameteri(P,J.TEXTURE_MIN_FILTER,I0[k.minFilter]),k.compareFunction)J.texParameteri(P,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(P,J.TEXTURE_COMPARE_FUNC,a0[k.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(k.magFilter===U9)return;if(k.minFilter!==h7&&k.minFilter!==M9)return;if(k.type===g9&&Q.has("OES_texture_float_linear")===!1)return;if(k.anisotropy>1||W.get(k).__currentAnisotropy){let y=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(P,y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(k.anisotropy,Z.getMaxAnisotropy())),W.get(k).__currentAnisotropy=k.anisotropy}}}function a(P,k){let y=!1;if(P.__webglInit===void 0)P.__webglInit=!0,k.addEventListener("dispose",w);let s=k.source,U0=F.get(s);if(U0===void 0)U0={},F.set(s,U0);let O0=x(k);if(O0!==P.__cacheKey){if(U0[O0]===void 0)U0[O0]={texture:J.createTexture(),usedTimes:0},H.memory.textures++,y=!0;U0[O0].usedTimes++;let q0=U0[P.__cacheKey];if(q0!==void 0){if(U0[P.__cacheKey].usedTimes--,q0.usedTimes===0)d(k)}P.__cacheKey=O0,P.__webglTexture=U0[O0].texture}return y}function N0(P,k,y){return Math.floor(Math.floor(P/y)/k)}function E0(P,k,y,s){let O0=P.updateRanges;if(O0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,k.width,k.height,y,s,k.data);else{O0.sort((b0,L0)=>b0.start-L0.start);let q0=0;for(let b0=1;b0<O0.length;b0++){let L0=O0[q0],F0=O0[b0],m0=L0.start+L0.count,d0=N0(F0.start,k.width,4),RJ=N0(L0.start,k.width,4);if(F0.start<=m0+1&&d0===RJ&&N0(F0.start+F0.count-1,k.width,4)===d0)L0.count=Math.max(L0.count,F0.start+F0.count-L0.start);else++q0,O0[q0]=F0}O0.length=q0+1;let r=$.getParameter(J.UNPACK_ROW_LENGTH),t=$.getParameter(J.UNPACK_SKIP_PIXELS),P0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,k.width);for(let b0=0,L0=O0.length;b0<L0;b0++){let F0=O0[b0],m0=Math.floor(F0.start/4),d0=Math.ceil(F0.count/4),RJ=m0%k.width,v=Math.floor(m0/k.width),V0=d0,e=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,RJ),$.pixelStorei(J.UNPACK_SKIP_ROWS,v),$.texSubImage2D(J.TEXTURE_2D,0,RJ,v,V0,1,y,s,k.data)}P.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,r),$.pixelStorei(J.UNPACK_SKIP_PIXELS,t),$.pixelStorei(J.UNPACK_SKIP_ROWS,P0)}}function u0(P,k,y){let s=J.TEXTURE_2D;if(k.isDataArrayTexture||k.isCompressedArrayTexture)s=J.TEXTURE_2D_ARRAY;if(k.isData3DTexture)s=J.TEXTURE_3D;let U0=a(P,k),O0=k.source;$.bindTexture(s,P.__webglTexture,J.TEXTURE0+y);let q0=W.get(O0);if(O0.version!==q0.__version||U0===!0){if($.activeTexture(J.TEXTURE0+y),(typeof ImageBitmap<"u"&&k.image instanceof ImageBitmap)===!1){let e=KJ.getPrimaries(KJ.workingColorSpace),D0=k.colorSpace===p7?null:KJ.getPrimaries(k.colorSpace),w0=k.colorSpace===p7||e===D0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,k.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,w0)}$.pixelStorei(J.UNPACK_ALIGNMENT,k.unpackAlignment);let t=O(k.image,!1,Z.maxTextureSize);t=BJ(k,t);let P0=K.convert(k.format,k.colorSpace),b0=K.convert(k.type),L0=L(k.internalFormat,P0,b0,k.normalized,k.colorSpace,k.isVideoTexture);r0(s,k);let F0,m0=k.mipmaps,d0=k.isVideoTexture!==!0,RJ=q0.__version===void 0||U0===!0,v=O0.dataReady,V0=I(k,t);if(k.isDepthTexture){if(L0=M(k.format===x7,k.type),RJ)if(d0)$.texStorage2D(J.TEXTURE_2D,1,L0,t.width,t.height);else $.texImage2D(J.TEXTURE_2D,0,L0,t.width,t.height,0,P0,b0,null)}else if(k.isDataTexture)if(m0.length>0){if(d0&&RJ)$.texStorage2D(J.TEXTURE_2D,V0,L0,m0[0].width,m0[0].height);for(let e=0,D0=m0.length;e<D0;e++)if(F0=m0[e],d0){if(v)$.texSubImage2D(J.TEXTURE_2D,e,0,0,F0.width,F0.height,P0,b0,F0.data)}else $.texImage2D(J.TEXTURE_2D,e,L0,F0.width,F0.height,0,P0,b0,F0.data);k.generateMipmaps=!1}else if(d0){if(RJ)$.texStorage2D(J.TEXTURE_2D,V0,L0,t.width,t.height);if(v)E0(k,t,P0,b0)}else $.texImage2D(J.TEXTURE_2D,0,L0,t.width,t.height,0,P0,b0,t.data);else if(k.isCompressedTexture)if(k.isCompressedArrayTexture){if(d0&&RJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,V0,L0,m0[0].width,m0[0].height,t.depth);for(let e=0,D0=m0.length;e<D0;e++)if(F0=m0[e],k.format!==C9)if(P0!==null)if(d0){if(v)if(k.layerUpdates.size>0){let w0=rK(F0.width,F0.height,k.format,k.type);for(let X0 of k.layerUpdates){let k0=F0.data.subarray(X0*w0/F0.data.BYTES_PER_ELEMENT,(X0+1)*w0/F0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,e,0,0,X0,F0.width,F0.height,1,P0,k0)}}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,e,0,0,0,F0.width,F0.height,t.depth,P0,F0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,e,L0,F0.width,F0.height,t.depth,0,F0.data,0,0);else x0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(d0){if(v)$.texSubImage3D(J.TEXTURE_2D_ARRAY,e,0,0,0,F0.width,F0.height,t.depth,P0,b0,F0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,e,L0,F0.width,F0.height,t.depth,0,P0,b0,F0.data);if(k.layerUpdates.size>0)k.clearLayerUpdates()}else{if(d0&&RJ)$.texStorage2D(J.TEXTURE_2D,V0,L0,m0[0].width,m0[0].height);for(let e=0,D0=m0.length;e<D0;e++)if(F0=m0[e],k.format!==C9)if(P0!==null)if(d0){if(v)$.compressedTexSubImage2D(J.TEXTURE_2D,e,0,0,F0.width,F0.height,P0,F0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,e,L0,F0.width,F0.height,0,F0.data);else x0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(d0){if(v)$.texSubImage2D(J.TEXTURE_2D,e,0,0,F0.width,F0.height,P0,b0,F0.data)}else $.texImage2D(J.TEXTURE_2D,e,L0,F0.width,F0.height,0,P0,b0,F0.data)}else if(k.isDataArrayTexture)if(d0){if(RJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,V0,L0,t.width,t.height,t.depth);if(v)if(k.layerUpdates.size>0){let e=rK(t.width,t.height,k.format,k.type);for(let D0 of k.layerUpdates){let w0=t.data.subarray(D0*e/t.data.BYTES_PER_ELEMENT,(D0+1)*e/t.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,D0,t.width,t.height,1,P0,b0,w0)}k.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,P0,b0,t.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,L0,t.width,t.height,t.depth,0,P0,b0,t.data);else if(k.isData3DTexture)if(d0){if(RJ)$.texStorage3D(J.TEXTURE_3D,V0,L0,t.width,t.height,t.depth);if(v)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,P0,b0,t.data)}else $.texImage3D(J.TEXTURE_3D,0,L0,t.width,t.height,t.depth,0,P0,b0,t.data);else if(k.isFramebufferTexture){if(RJ)if(d0)$.texStorage2D(J.TEXTURE_2D,V0,L0,t.width,t.height);else{let{width:e,height:D0}=t;for(let w0=0;w0<V0;w0++)$.texImage2D(J.TEXTURE_2D,w0,L0,e,D0,0,P0,b0,null),e>>=1,D0>>=1}}else if(k.isHTMLTexture){if("texElementImage2D"in J){let e=J.canvas;if(!e.hasAttribute("layoutsubtree"))e.setAttribute("layoutsubtree","true");if(t.parentNode!==e){e.appendChild(t),E.add(k),e.onpaint=(D0)=>{let w0=D0.changedElements;for(let X0 of E)if(w0.includes(X0.image))X0.needsUpdate=!0},e.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,t);else{let{RGBA:w0,RGBA:X0,UNSIGNED_BYTE:k0}=J;J.texElementImage2D(J.TEXTURE_2D,0,w0,X0,k0,t)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(m0.length>0){if(d0&&RJ){let e=bJ(m0[0]);$.texStorage2D(J.TEXTURE_2D,V0,L0,e.width,e.height)}for(let e=0,D0=m0.length;e<D0;e++)if(F0=m0[e],d0){if(v)$.texSubImage2D(J.TEXTURE_2D,e,0,0,P0,b0,F0)}else $.texImage2D(J.TEXTURE_2D,e,L0,P0,b0,F0);k.generateMipmaps=!1}else if(d0){if(RJ){let e=bJ(t);$.texStorage2D(J.TEXTURE_2D,V0,L0,e.width,e.height)}if(v)$.texSubImage2D(J.TEXTURE_2D,0,0,0,P0,b0,t)}else $.texImage2D(J.TEXTURE_2D,0,L0,P0,b0,t);if(R(k))z(s);if(q0.__version=O0.version,k.onUpdate)k.onUpdate(k)}P.__version=k.version}function l0(P,k,y){if(k.image.length!==6)return;let s=a(P,k),U0=k.source;$.bindTexture(J.TEXTURE_CUBE_MAP,P.__webglTexture,J.TEXTURE0+y);let O0=W.get(U0);if(U0.version!==O0.__version||s===!0){$.activeTexture(J.TEXTURE0+y);let q0=KJ.getPrimaries(KJ.workingColorSpace),r=k.colorSpace===p7?null:KJ.getPrimaries(k.colorSpace),t=k.colorSpace===p7||q0===r?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,k.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,k.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,t);let P0=k.isCompressedTexture||k.image[0].isCompressedTexture,b0=k.image[0]&&k.image[0].isDataTexture,L0=[];for(let X0=0;X0<6;X0++){if(!P0&&!b0)L0[X0]=O(k.image[X0],!0,Z.maxCubemapSize);else L0[X0]=b0?k.image[X0].image:k.image[X0];L0[X0]=BJ(k,L0[X0])}let F0=L0[0],m0=K.convert(k.format,k.colorSpace),d0=K.convert(k.type),RJ=L(k.internalFormat,m0,d0,k.normalized,k.colorSpace),v=k.isVideoTexture!==!0,V0=O0.__version===void 0||s===!0,e=U0.dataReady,D0=I(k,F0);r0(J.TEXTURE_CUBE_MAP,k);let w0;if(P0){if(v&&V0)$.texStorage2D(J.TEXTURE_CUBE_MAP,D0,RJ,F0.width,F0.height);for(let X0=0;X0<6;X0++){w0=L0[X0].mipmaps;for(let k0=0;k0<w0.length;k0++){let t0=w0[k0];if(k.format!==C9)if(m0!==null)if(v){if(e)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+X0,k0,0,0,t0.width,t0.height,m0,t0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+X0,k0,RJ,t0.width,t0.height,0,t0.data);else x0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(v){if(e)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+X0,k0,0,0,t0.width,t0.height,m0,d0,t0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+X0,k0,RJ,t0.width,t0.height,0,m0,d0,t0.data)}}}else{if(w0=k.mipmaps,v&&V0){if(w0.length>0)D0++;let X0=bJ(L0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,D0,RJ,X0.width,X0.height)}for(let X0=0;X0<6;X0++)if(b0){if(v){if(e)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+X0,0,0,0,L0[X0].width,L0[X0].height,m0,d0,L0[X0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+X0,0,RJ,L0[X0].width,L0[X0].height,0,m0,d0,L0[X0].data);for(let k0=0;k0<w0.length;k0++){let fJ=w0[k0].image[X0].image;if(v){if(e)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+X0,k0+1,0,0,fJ.width,fJ.height,m0,d0,fJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+X0,k0+1,RJ,fJ.width,fJ.height,0,m0,d0,fJ.data)}}else{if(v){if(e)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+X0,0,0,0,m0,d0,L0[X0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+X0,0,RJ,m0,d0,L0[X0]);for(let k0=0;k0<w0.length;k0++){let t0=w0[k0];if(v){if(e)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+X0,k0+1,0,0,m0,d0,t0.image[X0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+X0,k0+1,RJ,m0,d0,t0.image[X0])}}}if(R(k))z(J.TEXTURE_CUBE_MAP);if(O0.__version=U0.version,k.onUpdate)k.onUpdate(k)}P.__version=k.version}function p0(P,k,y,s,U0,O0){let q0=K.convert(y.format,y.colorSpace),r=K.convert(y.type),t=L(y.internalFormat,q0,r,y.normalized,y.colorSpace),P0=W.get(k),b0=W.get(y);if(b0.__renderTarget=k,!P0.__hasExternalTextures){let L0=Math.max(1,k.width>>O0),F0=Math.max(1,k.height>>O0);if(U0===J.TEXTURE_3D||U0===J.TEXTURE_2D_ARRAY)$.texImage3D(U0,O0,t,L0,F0,k.depth,0,q0,r,null);else $.texImage2D(U0,O0,t,L0,F0,0,q0,r,null)}if($.bindFramebuffer(J.FRAMEBUFFER,P),f(k))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,s,U0,b0.__webglTexture,0,cJ(k));else if(U0===J.TEXTURE_2D||U0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&U0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,s,U0,b0.__webglTexture,O0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function uJ(P,k,y){if(J.bindRenderbuffer(J.RENDERBUFFER,P),k.depthBuffer){let s=k.depthTexture,U0=s&&s.isDepthTexture?s.type:null,O0=M(k.stencilBuffer,U0),q0=k.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(f(k))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,cJ(k),O0,k.width,k.height);else if(y)J.renderbufferStorageMultisample(J.RENDERBUFFER,cJ(k),O0,k.width,k.height);else J.renderbufferStorage(J.RENDERBUFFER,O0,k.width,k.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,q0,J.RENDERBUFFER,P)}else{let s=k.textures;for(let U0=0;U0<s.length;U0++){let O0=s[U0],q0=K.convert(O0.format,O0.colorSpace),r=K.convert(O0.type),t=L(O0.internalFormat,q0,r,O0.normalized,O0.colorSpace);if(f(k))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,cJ(k),t,k.width,k.height);else if(y)J.renderbufferStorageMultisample(J.RENDERBUFFER,cJ(k),t,k.width,k.height);else J.renderbufferStorage(J.RENDERBUFFER,t,k.width,k.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function HJ(P,k,y){let s=k.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,P),!(k.depthTexture&&k.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let U0=W.get(k.depthTexture);if(U0.__renderTarget=k,!U0.__webglTexture||k.depthTexture.image.width!==k.width||k.depthTexture.image.height!==k.height)k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0;if(s){if(U0.__webglInit===void 0)U0.__webglInit=!0,k.depthTexture.addEventListener("dispose",w);if(U0.__webglTexture===void 0){U0.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,U0.__webglTexture),r0(J.TEXTURE_CUBE_MAP,k.depthTexture);let P0=K.convert(k.depthTexture.format),b0=K.convert(k.depthTexture.type),L0;if(k.depthTexture.format===b7)L0=J.DEPTH_COMPONENT24;else if(k.depthTexture.format===x7)L0=J.DEPTH24_STENCIL8;for(let F0=0;F0<6;F0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+F0,0,L0,k.width,k.height,0,P0,b0,null)}}else H0(k.depthTexture,0);let O0=U0.__webglTexture,q0=cJ(k),r=s?J.TEXTURE_CUBE_MAP_POSITIVE_X+y:J.TEXTURE_2D,t=k.depthTexture.format===x7?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(k.depthTexture.format===b7)if(f(k))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,t,r,O0,0,q0);else J.framebufferTexture2D(J.FRAMEBUFFER,t,r,O0,0);else if(k.depthTexture.format===x7)if(f(k))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,t,r,O0,0,q0);else J.framebufferTexture2D(J.FRAMEBUFFER,t,r,O0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function LJ(P){let k=W.get(P),y=P.isWebGLCubeRenderTarget===!0;if(k.__boundDepthTexture!==P.depthTexture){let s=P.depthTexture;if(k.__depthDisposeCallback)k.__depthDisposeCallback();if(s){let U0=()=>{delete k.__boundDepthTexture,delete k.__depthDisposeCallback,s.removeEventListener("dispose",U0)};s.addEventListener("dispose",U0),k.__depthDisposeCallback=U0}k.__boundDepthTexture=s}if(P.depthTexture&&!k.__autoAllocateDepthBuffer)if(y)for(let s=0;s<6;s++)HJ(k.__webglFramebuffer[s],P,s);else{let s=P.texture.mipmaps;if(s&&s.length>0)HJ(k.__webglFramebuffer[0],P,0);else HJ(k.__webglFramebuffer,P,0)}else if(y){k.__webglDepthbuffer=[];for(let s=0;s<6;s++)if($.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer[s]),k.__webglDepthbuffer[s]===void 0)k.__webglDepthbuffer[s]=J.createRenderbuffer(),uJ(k.__webglDepthbuffer[s],P,!1);else{let U0=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,O0=k.__webglDepthbuffer[s];J.bindRenderbuffer(J.RENDERBUFFER,O0),J.framebufferRenderbuffer(J.FRAMEBUFFER,U0,J.RENDERBUFFER,O0)}}else{let s=P.texture.mipmaps;if(s&&s.length>0)$.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer);if(k.__webglDepthbuffer===void 0)k.__webglDepthbuffer=J.createRenderbuffer(),uJ(k.__webglDepthbuffer,P,!1);else{let U0=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,O0=k.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,O0),J.framebufferRenderbuffer(J.FRAMEBUFFER,U0,J.RENDERBUFFER,O0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function OJ(P,k,y){let s=W.get(P);if(k!==void 0)p0(s.__webglFramebuffer,P,P.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(y!==void 0)LJ(P)}function YJ(P){let k=P.texture,y=W.get(P),s=W.get(k);P.addEventListener("dispose",B);let U0=P.textures,O0=P.isWebGLCubeRenderTarget===!0,q0=U0.length>1;if(!q0){if(s.__webglTexture===void 0)s.__webglTexture=J.createTexture();s.__version=k.version,H.memory.textures++}if(O0){y.__webglFramebuffer=[];for(let r=0;r<6;r++)if(k.mipmaps&&k.mipmaps.length>0){y.__webglFramebuffer[r]=[];for(let t=0;t<k.mipmaps.length;t++)y.__webglFramebuffer[r][t]=J.createFramebuffer()}else y.__webglFramebuffer[r]=J.createFramebuffer()}else{if(k.mipmaps&&k.mipmaps.length>0){y.__webglFramebuffer=[];for(let r=0;r<k.mipmaps.length;r++)y.__webglFramebuffer[r]=J.createFramebuffer()}else y.__webglFramebuffer=J.createFramebuffer();if(q0)for(let r=0,t=U0.length;r<t;r++){let P0=W.get(U0[r]);if(P0.__webglTexture===void 0)P0.__webglTexture=J.createTexture(),H.memory.textures++}if(P.samples>0&&f(P)===!1){y.__webglMultisampledFramebuffer=J.createFramebuffer(),y.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,y.__webglMultisampledFramebuffer);for(let r=0;r<U0.length;r++){let t=U0[r];y.__webglColorRenderbuffer[r]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,y.__webglColorRenderbuffer[r]);let P0=K.convert(t.format,t.colorSpace),b0=K.convert(t.type),L0=L(t.internalFormat,P0,b0,t.normalized,t.colorSpace,P.isXRRenderTarget===!0),F0=cJ(P);J.renderbufferStorageMultisample(J.RENDERBUFFER,F0,L0,P.width,P.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+r,J.RENDERBUFFER,y.__webglColorRenderbuffer[r])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),P.depthBuffer)y.__webglDepthRenderbuffer=J.createRenderbuffer(),uJ(y.__webglDepthRenderbuffer,P,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(O0){$.bindTexture(J.TEXTURE_CUBE_MAP,s.__webglTexture),r0(J.TEXTURE_CUBE_MAP,k);for(let r=0;r<6;r++)if(k.mipmaps&&k.mipmaps.length>0)for(let t=0;t<k.mipmaps.length;t++)p0(y.__webglFramebuffer[r][t],P,k,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+r,t);else p0(y.__webglFramebuffer[r],P,k,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);if(R(k))z(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(q0){for(let r=0,t=U0.length;r<t;r++){let P0=U0[r],b0=W.get(P0),L0=J.TEXTURE_2D;if(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)L0=P.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(L0,b0.__webglTexture),r0(L0,P0),p0(y.__webglFramebuffer,P,P0,J.COLOR_ATTACHMENT0+r,L0,0),R(P0))z(L0)}$.unbindTexture()}else{let r=J.TEXTURE_2D;if(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)r=P.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(r,s.__webglTexture),r0(r,k),k.mipmaps&&k.mipmaps.length>0)for(let t=0;t<k.mipmaps.length;t++)p0(y.__webglFramebuffer[t],P,k,J.COLOR_ATTACHMENT0,r,t);else p0(y.__webglFramebuffer,P,k,J.COLOR_ATTACHMENT0,r,0);if(R(k))z(r);$.unbindTexture()}if(P.depthBuffer)LJ(P)}function iJ(P){let k=P.textures;for(let y=0,s=k.length;y<s;y++){let U0=k[y];if(R(U0)){let O0=D(P),q0=W.get(U0).__webglTexture;$.bindTexture(O0,q0),z(O0),$.unbindTexture()}}}let TJ=[],Q8=[];function dJ(P){if(P.samples>0){if(f(P)===!1){let{textures:k,width:y,height:s}=P,U0=J.COLOR_BUFFER_BIT,O0=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,q0=W.get(P),r=k.length>1;if(r)for(let P0=0;P0<k.length;P0++)$.bindFramebuffer(J.FRAMEBUFFER,q0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+P0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,q0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+P0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,q0.__webglMultisampledFramebuffer);let t=P.texture.mipmaps;if(t&&t.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,q0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,q0.__webglFramebuffer);for(let P0=0;P0<k.length;P0++){if(P.resolveDepthBuffer){if(P.depthBuffer)U0|=J.DEPTH_BUFFER_BIT;if(P.stencilBuffer&&P.resolveStencilBuffer)U0|=J.STENCIL_BUFFER_BIT}if(r){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,q0.__webglColorRenderbuffer[P0]);let b0=W.get(k[P0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,b0,0)}if(J.blitFramebuffer(0,0,y,s,0,0,y,s,U0,J.NEAREST),X===!0){if(TJ.length=0,Q8.length=0,TJ.push(J.COLOR_ATTACHMENT0+P0),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1)TJ.push(O0),Q8.push(O0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,Q8);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,TJ)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),r)for(let P0=0;P0<k.length;P0++){$.bindFramebuffer(J.FRAMEBUFFER,q0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+P0,J.RENDERBUFFER,q0.__webglColorRenderbuffer[P0]);let b0=W.get(k[P0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,q0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+P0,J.TEXTURE_2D,b0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,q0.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&X){let k=P.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[k])}}}function cJ(P){return Math.min(Z.maxSamples,P.samples)}function f(P){let k=W.get(P);return P.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&k.__useRenderToTexture!==!1}function F8(P){let k=H.render.frame;if(G.get(P)!==k)G.set(P,k),P.update()}function BJ(P,k){let{colorSpace:y,format:s,type:U0}=P;if(P.isCompressedTexture===!0||P.isVideoTexture===!0)return k;if(y!==g8&&y!==p7)if(KJ.getTransfer(y)===jJ){if(s!==C9||U0!==G9)x0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else i0("WebGLTextures: Unsupported texture color space:",y);return k}function bJ(P){if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement)U.width=P.naturalWidth||P.width,U.height=P.naturalHeight||P.height;else if(typeof VideoFrame<"u"&&P instanceof VideoFrame)U.width=P.displayWidth,U.height=P.displayHeight;else U.width=P.width,U.height=P.height;return U}this.allocateTextureUnit=u,this.resetTextureUnits=Q0,this.getTextureUnits=S,this.setTextureUnits=i,this.setTexture2D=H0,this.setTexture2DArray=n,this.setTexture3D=W0,this.setTextureCube=Y0,this.rebindTextures=OJ,this.setupRenderTarget=YJ,this.updateRenderTargetMipmap=iJ,this.updateMultisampleRenderTarget=dJ,this.setupDepthRenderbuffer=LJ,this.setupFrameBufferTexture=p0,this.useMultisampledRTT=f,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function gq(J,Q){function $(W,Z=p7){let K,H=KJ.getTransfer(Z);if(W===G9)return J.UNSIGNED_BYTE;if(W===xZ)return J.UNSIGNED_SHORT_4_4_4_4;if(W===gZ)return J.UNSIGNED_SHORT_5_5_5_1;if(W===qX)return J.UNSIGNED_INT_5_9_9_9_REV;if(W===OX)return J.UNSIGNED_INT_10F_11F_11F_REV;if(W===EX)return J.BYTE;if(W===FX)return J.SHORT;if(W===hQ)return J.UNSIGNED_SHORT;if(W===bZ)return J.INT;if(W===Y7)return J.UNSIGNED_INT;if(W===g9)return J.FLOAT;if(W===N8)return J.HALF_FLOAT;if(W===RX)return J.ALPHA;if(W===LX)return J.RGB;if(W===C9)return J.RGBA;if(W===b7)return J.DEPTH_COMPONENT;if(W===x7)return J.DEPTH_STENCIL;if(W===VX)return J.RED;if(W===pZ)return J.RED_INTEGER;if(W===g7)return J.RG;if(W===mZ)return J.RG_INTEGER;if(W===lZ)return J.RGBA_INTEGER;if(W===KW||W===HW||W===YW||W===XW)if(H===jJ)if(K=Q.get("WEBGL_compressed_texture_s3tc_srgb"),K!==null){if(W===KW)return K.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(W===HW)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(W===YW)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(W===XW)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(K=Q.get("WEBGL_compressed_texture_s3tc"),K!==null){if(W===KW)return K.COMPRESSED_RGB_S3TC_DXT1_EXT;if(W===HW)return K.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(W===YW)return K.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(W===XW)return K.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(W===uZ||W===dZ||W===cZ||W===nZ)if(K=Q.get("WEBGL_compressed_texture_pvrtc"),K!==null){if(W===uZ)return K.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(W===dZ)return K.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(W===cZ)return K.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(W===nZ)return K.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(W===sZ||W===iZ||W===oZ||W===aZ||W===rZ||W===UW||W===tZ)if(K=Q.get("WEBGL_compressed_texture_etc"),K!==null){if(W===sZ||W===iZ)return H===jJ?K.COMPRESSED_SRGB8_ETC2:K.COMPRESSED_RGB8_ETC2;if(W===oZ)return H===jJ?K.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:K.COMPRESSED_RGBA8_ETC2_EAC;if(W===aZ)return K.COMPRESSED_R11_EAC;if(W===rZ)return K.COMPRESSED_SIGNED_R11_EAC;if(W===UW)return K.COMPRESSED_RG11_EAC;if(W===tZ)return K.COMPRESSED_SIGNED_RG11_EAC}else return null;if(W===eZ||W===JK||W===QK||W===$K||W===WK||W===ZK||W===KK||W===HK||W===YK||W===XK||W===UK||W===GK||W===NK||W===EK)if(K=Q.get("WEBGL_compressed_texture_astc"),K!==null){if(W===eZ)return H===jJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:K.COMPRESSED_RGBA_ASTC_4x4_KHR;if(W===JK)return H===jJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:K.COMPRESSED_RGBA_ASTC_5x4_KHR;if(W===QK)return H===jJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:K.COMPRESSED_RGBA_ASTC_5x5_KHR;if(W===$K)return H===jJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:K.COMPRESSED_RGBA_ASTC_6x5_KHR;if(W===WK)return H===jJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:K.COMPRESSED_RGBA_ASTC_6x6_KHR;if(W===ZK)return H===jJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:K.COMPRESSED_RGBA_ASTC_8x5_KHR;if(W===KK)return H===jJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:K.COMPRESSED_RGBA_ASTC_8x6_KHR;if(W===HK)return H===jJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:K.COMPRESSED_RGBA_ASTC_8x8_KHR;if(W===YK)return H===jJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:K.COMPRESSED_RGBA_ASTC_10x5_KHR;if(W===XK)return H===jJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:K.COMPRESSED_RGBA_ASTC_10x6_KHR;if(W===UK)return H===jJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:K.COMPRESSED_RGBA_ASTC_10x8_KHR;if(W===GK)return H===jJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:K.COMPRESSED_RGBA_ASTC_10x10_KHR;if(W===NK)return H===jJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:K.COMPRESSED_RGBA_ASTC_12x10_KHR;if(W===EK)return H===jJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:K.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(W===FK||W===qK||W===OK)if(K=Q.get("EXT_texture_compression_bptc"),K!==null){if(W===FK)return H===jJ?K.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:K.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(W===qK)return K.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(W===OK)return K.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(W===RK||W===LK||W===GW||W===VK)if(K=Q.get("EXT_texture_compression_rgtc"),K!==null){if(W===RK)return K.COMPRESSED_RED_RGTC1_EXT;if(W===LK)return K.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(W===GW)return K.COMPRESSED_RED_GREEN_RGTC2_EXT;if(W===VK)return K.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(W===b6)return J.UNSIGNED_INT_24_8;return J[W]!==void 0?J[W]:null}return{convert:$}}var pq=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mq=`
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

}`;class MU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new MW(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new lJ({vertexShader:pq,fragmentShader:mq,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new C0(new K8(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CU extends N9{constructor(J,Q){super();let $=this,W=null,Z=1,K=null,H="local-floor",Y=1,X=null,U=null,G=null,E=null,N=null,F=null,q=typeof XRWebGLBinding<"u",V=new MU,O={},R=Q.getContextAttributes(),z=null,D=null,L=[],M=[],I=new $0,w=null,B=null,_=new Z8;_.viewport=new SJ;let d=new Z8;d.viewport=new SJ;let j=[_,d],b=new cK,Q0=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(a){let N0=L[a];if(N0===void 0)N0=new gQ,L[a]=N0;return N0.getTargetRaySpace()},this.getControllerGrip=function(a){let N0=L[a];if(N0===void 0)N0=new gQ,L[a]=N0;return N0.getGripSpace()},this.getHand=function(a){let N0=L[a];if(N0===void 0)N0=new gQ,L[a]=N0;return N0.getHandSpace()};function i(a){let N0=M.indexOf(a.inputSource);if(N0===-1)return;let E0=L[N0];if(E0!==void 0)E0.update(a.inputSource,a.frame,X||K),E0.dispatchEvent({type:a.type,data:a.inputSource})}function u(){W.removeEventListener("select",i),W.removeEventListener("selectstart",i),W.removeEventListener("selectend",i),W.removeEventListener("squeeze",i),W.removeEventListener("squeezestart",i),W.removeEventListener("squeezeend",i),W.removeEventListener("end",u),W.removeEventListener("inputsourceschange",x);for(let a=0;a<L.length;a++){let N0=M[a];if(N0===null)continue;M[a]=null,L[a].disconnect(N0)}Q0=null,S=null,V.reset();for(let a in O)delete O[a];if(J.setRenderTarget(z),N=null,E=null,G=null,W=null,D=null,r0.stop(),$.isPresenting=!1,J.setPixelRatio(w),J.setSize(I.width,I.height,!1),B!==null){let a=B.camera;a.fov=B.fov,a.zoom=B.zoom,a.updateProjectionMatrix(),B=null}$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(a){if(Z=a,$.isPresenting===!0)x0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(a){if(H=a,$.isPresenting===!0)x0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return X||K},this.setReferenceSpace=function(a){X=a},this.getBaseLayer=function(){return E!==null?E:N},this.getBinding=function(){if(G===null&&q)G=new XRWebGLBinding(W,Q);return G},this.getFrame=function(){return F},this.getSession=function(){return W},this.setSession=async function(a){if(W=a,W!==null){if(z=J.getRenderTarget(),W.addEventListener("select",i),W.addEventListener("selectstart",i),W.addEventListener("selectend",i),W.addEventListener("squeeze",i),W.addEventListener("squeezestart",i),W.addEventListener("squeezeend",i),W.addEventListener("end",u),W.addEventListener("inputsourceschange",x),R.xrCompatible!==!0)await Q.makeXRCompatible();if(w=J.getPixelRatio(),J.getSize(I),!(q&&("createProjectionLayer"in XRWebGLBinding.prototype))){let E0={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:Z};N=new XRWebGLLayer(W,Q,E0),W.updateRenderState({baseLayer:N}),J.setPixelRatio(1),J.setSize(N.framebufferWidth,N.framebufferHeight,!1),D=new aJ(N.framebufferWidth,N.framebufferHeight,{format:C9,type:G9,colorSpace:J.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:N.ignoreDepthValues===!1,resolveStencilBuffer:N.ignoreDepthValues===!1,storeMultisampledDepthBuffer:N.ignoreDepthValues===!1,storeMultisampledStencilBuffer:N.ignoreDepthValues===!1})}else{let E0=null,u0=null,l0=null;if(R.depth)l0=R.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,E0=R.stencil?x7:b7,u0=R.stencil?b6:Y7;let p0={colorFormat:Q.RGBA8,depthFormat:l0,scaleFactor:Z};G=this.getBinding(),E=G.createProjectionLayer(p0),W.updateRenderState({layers:[E]}),J.setPixelRatio(1),J.setSize(E.textureWidth,E.textureHeight,!1),D=new aJ(E.textureWidth,E.textureHeight,{format:C9,type:G9,depthTexture:new d7(E.textureWidth,E.textureHeight,u0,void 0,void 0,void 0,void 0,void 0,void 0,E0),stencilBuffer:R.stencil,colorSpace:J.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(Y),X=null,K=await W.requestReferenceSpace(H),r0.setContext(W),r0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(W!==null)return W.environmentBlendMode},this.getDepthTexture=function(){return V.getDepthTexture()};function x(a){for(let N0=0;N0<a.removed.length;N0++){let E0=a.removed[N0],u0=M.indexOf(E0);if(u0>=0)M[u0]=null,L[u0].disconnect(E0)}for(let N0=0;N0<a.added.length;N0++){let E0=a.added[N0],u0=M.indexOf(E0);if(u0===-1){for(let p0=0;p0<L.length;p0++)if(p0>=M.length){M.push(E0),u0=p0;break}else if(M[p0]===null){M[p0]=E0,u0=p0;break}if(u0===-1)break}let l0=L[u0];if(l0)l0.connect(E0)}}let H0=new T,n=new T;function W0(a,N0,E0){H0.setFromMatrixPosition(N0.matrixWorld),n.setFromMatrixPosition(E0.matrixWorld);let u0=H0.distanceTo(n),l0=N0.projectionMatrix.elements,p0=E0.projectionMatrix.elements,uJ=l0[14]/(l0[10]-1),HJ=l0[14]/(l0[10]+1),LJ=(l0[9]+1)/l0[5],OJ=(l0[9]-1)/l0[5],YJ=(l0[8]-1)/l0[0],iJ=(p0[8]+1)/p0[0],TJ=uJ*YJ,Q8=uJ*iJ,dJ=u0/(-YJ+iJ),cJ=dJ*-YJ;if(N0.matrixWorld.decompose(a.position,a.quaternion,a.scale),a.translateX(cJ),a.translateZ(dJ),a.matrixWorld.compose(a.position,a.quaternion,a.scale),a.matrixWorldInverse.copy(a.matrixWorld).invert(),l0[10]===-1)a.projectionMatrix.copy(N0.projectionMatrix),a.projectionMatrixInverse.copy(N0.projectionMatrixInverse);else{let f=uJ+dJ,F8=HJ+dJ,BJ=TJ-cJ,bJ=Q8+(u0-cJ),P=LJ*HJ/F8*f,k=OJ*HJ/F8*f;a.projectionMatrix.makePerspective(BJ,bJ,P,k,f,F8),a.projectionMatrixInverse.copy(a.projectionMatrix).invert()}}function Y0(a,N0){if(N0===null)a.matrixWorld.copy(a.matrix);else a.matrixWorld.multiplyMatrices(N0.matrixWorld,a.matrix);a.matrixWorldInverse.copy(a.matrixWorld).invert()}this.updateCamera=function(a){if(W===null)return;let{near:N0,far:E0}=a;if(V.texture!==null){if(V.depthNear>0)N0=V.depthNear;if(V.depthFar>0)E0=V.depthFar}if(b.near=d.near=_.near=N0,b.far=d.far=_.far=E0,Q0!==b.near||S!==b.far)W.updateRenderState({depthNear:b.near,depthFar:b.far}),Q0=b.near,S=b.far;b.layers.mask=a.layers.mask|6,_.layers.mask=b.layers.mask&-5,d.layers.mask=b.layers.mask&-3;let u0=a.parent,l0=b.cameras;Y0(b,u0);for(let p0=0;p0<l0.length;p0++)Y0(l0[p0],u0);if(l0.length===2)W0(b,_,d);else b.projectionMatrix.copy(_.projectionMatrix);if(B===null&&a.isPerspectiveCamera)B={camera:a,fov:a.fov,zoom:a.zoom};g0(a,b,u0)};function g0(a,N0,E0){if(E0===null)a.matrix.copy(N0.matrixWorld);else a.matrix.copy(E0.matrixWorld),a.matrix.invert(),a.matrix.multiply(N0.matrixWorld);if(a.matrix.decompose(a.position,a.quaternion,a.scale),a.updateMatrixWorld(!0),a.projectionMatrix.copy(N0.projectionMatrix),a.projectionMatrixInverse.copy(N0.projectionMatrixInverse),a.isPerspectiveCamera)a.fov=S7*2*Math.atan(1/a.projectionMatrix.elements[5]),a.zoom=1}this.getCamera=function(){return b},this.getFoveation=function(){if(E===null&&N===null)return;return Y},this.setFoveation=function(a){if(Y=a,E!==null)E.fixedFoveation=a;if(N!==null&&N.fixedFoveation!==void 0)N.fixedFoveation=a},this.hasDepthSensing=function(){return V.texture!==null},this.getDepthSensingMesh=function(){return V.getMesh(b)},this.getCameraTexture=function(a){return O[a]};let I0=null;function a0(a,N0){if(U=N0.getViewerPose(X||K),F=N0,U!==null){let E0=U.views;if(N!==null)J.setRenderTargetFramebuffer(D,N.framebuffer),J.setRenderTarget(D);let u0=!1;if(E0.length!==b.cameras.length)b.cameras.length=0,u0=!0;for(let HJ=0;HJ<E0.length;HJ++){let LJ=E0[HJ],OJ=null;if(N!==null)OJ=N.getViewport(LJ);else{let iJ=G.getViewSubImage(E,LJ);if(OJ=iJ.viewport,HJ===0)J.setRenderTargetTextures(D,iJ.colorTexture,iJ.depthStencilTexture),J.setRenderTarget(D)}let YJ=j[HJ];if(YJ===void 0)YJ=new Z8,YJ.layers.enable(HJ),YJ.viewport=new SJ,j[HJ]=YJ;if(YJ.matrix.fromArray(LJ.transform.matrix),YJ.matrix.decompose(YJ.position,YJ.quaternion,YJ.scale),YJ.projectionMatrix.fromArray(LJ.projectionMatrix),YJ.projectionMatrixInverse.copy(YJ.projectionMatrix).invert(),YJ.viewport.set(OJ.x,OJ.y,OJ.width,OJ.height),HJ===0)b.matrix.copy(YJ.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale);if(u0===!0)b.cameras.push(YJ)}let l0=W.enabledFeatures;if(l0&&l0.includes("depth-sensing")&&W.depthUsage=="gpu-optimized"&&q){G=$.getBinding();let HJ=G.getDepthInformation(E0[0]);if(HJ&&HJ.isValid&&HJ.texture)V.init(HJ,W.renderState)}if(l0&&l0.includes("camera-access")&&q){J.state.unbindTexture(),G=$.getBinding();for(let HJ=0;HJ<E0.length;HJ++){let LJ=E0[HJ].camera;if(LJ){let OJ=O[LJ];if(!OJ)OJ=new MW,O[LJ]=OJ;let YJ=G.getCameraImage(LJ);OJ.sourceTexture=YJ}}}}for(let E0=0;E0<L.length;E0++){let u0=M[E0],l0=L[E0];if(u0!==null&&l0!==void 0)l0.update(u0,N0,X||K)}if(I0)I0(a,N0);if(N0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:N0});F=null}let r0=new NU;r0.setAnimationLoop(a0),this.setAnimationLoop=function(a){I0=a},this.dispose=function(){}}}var lq=new n0,zU=new e0;zU.set(-1,0,0,0,1,0,0,0,1);function uq(J,Q){function $(O,R){if(O.matrixAutoUpdate===!0)O.updateMatrix();R.value.copy(O.matrix)}function W(O,R){if(R.color.getRGB(O.fogColor.value,fK(J)),R.isFog)O.fogNear.value=R.near,O.fogFar.value=R.far;else if(R.isFogExp2)O.fogDensity.value=R.density}function Z(O,R,z,D,L){if(R.isNodeMaterial)R.uniformsNeedUpdate=!1;else if(R.isMeshBasicMaterial)K(O,R);else if(R.isMeshLambertMaterial){if(K(O,R),R.envMap)O.envMapIntensity.value=R.envMapIntensity}else if(R.isMeshToonMaterial)K(O,R),E(O,R);else if(R.isMeshPhongMaterial){if(K(O,R),G(O,R),R.envMap)O.envMapIntensity.value=R.envMapIntensity}else if(R.isMeshStandardMaterial){if(K(O,R),N(O,R),R.isMeshPhysicalMaterial)F(O,R,L)}else if(R.isMeshMatcapMaterial)K(O,R),q(O,R);else if(R.isMeshDepthMaterial)K(O,R);else if(R.isMeshDistanceMaterial)K(O,R),V(O,R);else if(R.isMeshNormalMaterial)K(O,R);else if(R.isLineBasicMaterial){if(H(O,R),R.isLineDashedMaterial)Y(O,R)}else if(R.isPointsMaterial)X(O,R,z,D);else if(R.isSpriteMaterial)U(O,R);else if(R.isShadowMaterial)O.color.value.copy(R.color),O.opacity.value=R.opacity;else if(R.isShaderMaterial)R.uniformsNeedUpdate=!1}function K(O,R){if(O.opacity.value=R.opacity,R.color)O.diffuse.value.copy(R.color);if(R.emissive)O.emissive.value.copy(R.emissive).multiplyScalar(R.emissiveIntensity);if(R.map)O.map.value=R.map,$(R.map,O.mapTransform);if(R.alphaMap)O.alphaMap.value=R.alphaMap,$(R.alphaMap,O.alphaMapTransform);if(R.bumpMap){if(O.bumpMap.value=R.bumpMap,$(R.bumpMap,O.bumpMapTransform),O.bumpScale.value=R.bumpScale,R.side===R8)O.bumpScale.value*=-1}if(R.normalMap){if(O.normalMap.value=R.normalMap,$(R.normalMap,O.normalMapTransform),O.normalScale.value.copy(R.normalScale),R.side===R8)O.normalScale.value.negate()}if(R.displacementMap)O.displacementMap.value=R.displacementMap,$(R.displacementMap,O.displacementMapTransform),O.displacementScale.value=R.displacementScale,O.displacementBias.value=R.displacementBias;if(R.emissiveMap)O.emissiveMap.value=R.emissiveMap,$(R.emissiveMap,O.emissiveMapTransform);if(R.specularMap)O.specularMap.value=R.specularMap,$(R.specularMap,O.specularMapTransform);if(R.alphaTest>0)O.alphaTest.value=R.alphaTest;let z=Q.get(R),D=z.envMap,L=z.envMapRotation;if(D){if(O.envMap.value=D,O.envMapRotation.value.setFromMatrix4(lq.makeRotationFromEuler(L)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1)O.envMapRotation.value.premultiply(zU);O.reflectivity.value=R.reflectivity,O.ior.value=R.ior,O.refractionRatio.value=R.refractionRatio}if(R.lightMap)O.lightMap.value=R.lightMap,O.lightMapIntensity.value=R.lightMapIntensity,$(R.lightMap,O.lightMapTransform);if(R.aoMap)O.aoMap.value=R.aoMap,O.aoMapIntensity.value=R.aoMapIntensity,$(R.aoMap,O.aoMapTransform)}function H(O,R){if(O.diffuse.value.copy(R.color),O.opacity.value=R.opacity,R.map)O.map.value=R.map,$(R.map,O.mapTransform)}function Y(O,R){O.dashSize.value=R.dashSize,O.totalSize.value=R.dashSize+R.gapSize,O.scale.value=R.scale}function X(O,R,z,D){if(O.diffuse.value.copy(R.color),O.opacity.value=R.opacity,O.size.value=R.size*z,O.scale.value=D*0.5,R.map)O.map.value=R.map,$(R.map,O.uvTransform);if(R.alphaMap)O.alphaMap.value=R.alphaMap,$(R.alphaMap,O.alphaMapTransform);if(R.alphaTest>0)O.alphaTest.value=R.alphaTest}function U(O,R){if(O.diffuse.value.copy(R.color),O.opacity.value=R.opacity,O.rotation.value=R.rotation,R.map)O.map.value=R.map,$(R.map,O.mapTransform);if(R.alphaMap)O.alphaMap.value=R.alphaMap,$(R.alphaMap,O.alphaMapTransform);if(R.alphaTest>0)O.alphaTest.value=R.alphaTest}function G(O,R){O.specular.value.copy(R.specular),O.shininess.value=Math.max(R.shininess,0.0001)}function E(O,R){if(R.gradientMap)O.gradientMap.value=R.gradientMap}function N(O,R){if(O.metalness.value=R.metalness,R.metalnessMap)O.metalnessMap.value=R.metalnessMap,$(R.metalnessMap,O.metalnessMapTransform);if(O.roughness.value=R.roughness,R.roughnessMap)O.roughnessMap.value=R.roughnessMap,$(R.roughnessMap,O.roughnessMapTransform);if(R.envMap)O.envMapIntensity.value=R.envMapIntensity}function F(O,R,z){if(O.ior.value=R.ior,R.sheen>0){if(O.sheenColor.value.copy(R.sheenColor).multiplyScalar(R.sheen),O.sheenRoughness.value=R.sheenRoughness,R.sheenColorMap)O.sheenColorMap.value=R.sheenColorMap,$(R.sheenColorMap,O.sheenColorMapTransform);if(R.sheenRoughnessMap)O.sheenRoughnessMap.value=R.sheenRoughnessMap,$(R.sheenRoughnessMap,O.sheenRoughnessMapTransform)}if(R.clearcoat>0){if(O.clearcoat.value=R.clearcoat,O.clearcoatRoughness.value=R.clearcoatRoughness,R.clearcoatMap)O.clearcoatMap.value=R.clearcoatMap,$(R.clearcoatMap,O.clearcoatMapTransform);if(R.clearcoatRoughnessMap)O.clearcoatRoughnessMap.value=R.clearcoatRoughnessMap,$(R.clearcoatRoughnessMap,O.clearcoatRoughnessMapTransform);if(R.clearcoatNormalMap){if(O.clearcoatNormalMap.value=R.clearcoatNormalMap,$(R.clearcoatNormalMap,O.clearcoatNormalMapTransform),O.clearcoatNormalScale.value.copy(R.clearcoatNormalScale),R.side===R8)O.clearcoatNormalScale.value.negate()}}if(R.dispersion>0)O.dispersion.value=R.dispersion;if(R.retroreflectivity>0)O.retroreflectivity.value=R.retroreflectivity;if(R.iridescence>0){if(O.iridescence.value=R.iridescence,O.iridescenceIOR.value=R.iridescenceIOR,O.iridescenceThicknessMinimum.value=R.iridescenceThicknessRange[0],O.iridescenceThicknessMaximum.value=R.iridescenceThicknessRange[1],R.iridescenceMap)O.iridescenceMap.value=R.iridescenceMap,$(R.iridescenceMap,O.iridescenceMapTransform);if(R.iridescenceThicknessMap)O.iridescenceThicknessMap.value=R.iridescenceThicknessMap,$(R.iridescenceThicknessMap,O.iridescenceThicknessMapTransform)}if(R.transmission>0){if(O.transmission.value=R.transmission,O.transmissionSamplerMap.value=z.texture,O.transmissionSamplerSize.value.set(z.width,z.height),R.transmissionMap)O.transmissionMap.value=R.transmissionMap,$(R.transmissionMap,O.transmissionMapTransform);if(O.thickness.value=R.thickness,R.thicknessMap)O.thicknessMap.value=R.thicknessMap,$(R.thicknessMap,O.thicknessMapTransform);O.attenuationDistance.value=R.attenuationDistance,O.attenuationColor.value.copy(R.attenuationColor)}if(R.anisotropy>0){if(O.anisotropyVector.value.set(R.anisotropy*Math.cos(R.anisotropyRotation),R.anisotropy*Math.sin(R.anisotropyRotation)),R.anisotropyMap)O.anisotropyMap.value=R.anisotropyMap,$(R.anisotropyMap,O.anisotropyMapTransform)}if(O.specularIntensity.value=R.specularIntensity,O.specularColor.value.copy(R.specularColor),R.specularColorMap)O.specularColorMap.value=R.specularColorMap,$(R.specularColorMap,O.specularColorMapTransform);if(R.specularIntensityMap)O.specularIntensityMap.value=R.specularIntensityMap,$(R.specularIntensityMap,O.specularIntensityMapTransform)}function q(O,R){if(R.matcap)O.matcap.value=R.matcap}function V(O,R){let z=Q.get(R).light;O.referencePosition.value.setFromMatrixPosition(z.matrixWorld),O.nearDistance.value=z.shadow.camera.near,O.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:W,refreshMaterialUniforms:Z}}function dq(J,Q,$,W){let Z={},K={},H=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function X(L,M){let I=M.program;W.uniformBlockBinding(L,I)}function U(L,M){let I=Z[L.id];if(I===void 0)O(L),I=G(L),Z[L.id]=I,L.addEventListener("dispose",z);let w=M.program;W.updateUBOMapping(L,w);let B=Q.render.frame;if(K[L.id]!==B)N(L),K[L.id]=B}function G(L){let M=E();L.__bindingPointIndex=M;let I=J.createBuffer(),w=L.__size,B=L.usage;return J.bindBuffer(J.UNIFORM_BUFFER,I),J.bufferData(J.UNIFORM_BUFFER,w,B),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,M,I),I}function E(){for(let L=0;L<Y;L++)if(H.indexOf(L)===-1)return H.push(L),L;return i0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function N(L){let M=Z[L.id],I=L.uniforms,w=L.__cache;J.bindBuffer(J.UNIFORM_BUFFER,M);for(let B=0,_=I.length;B<_;B++){let d=I[B];if(Array.isArray(d))for(let j=0,b=d.length;j<b;j++)F(d[j],B,j,w);else F(d,B,0,w)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function F(L,M,I,w){if(V(L,M,I,w)===!0){let{__offset:B,value:_}=L;if(Array.isArray(_)){let d=0;for(let j=0;j<_.length;j++){let b=_[j],Q0=R(b);if(q(b,L.__data,d),typeof b!=="number"&&typeof b!=="boolean"&&!b.isMatrix3&&!ArrayBuffer.isView(b))d+=Q0.storage/Float32Array.BYTES_PER_ELEMENT}}else q(_,L.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,B,L.__data)}}function q(L,M,I){if(typeof L==="number"||typeof L==="boolean")M[0]=L;else if(L.isMatrix3)M[0]=L.elements[0],M[1]=L.elements[1],M[2]=L.elements[2],M[3]=0,M[4]=L.elements[3],M[5]=L.elements[4],M[6]=L.elements[5],M[7]=0,M[8]=L.elements[6],M[9]=L.elements[7],M[10]=L.elements[8],M[11]=0;else if(ArrayBuffer.isView(L))M.set(new L.constructor(L.buffer,L.byteOffset,M.length));else L.toArray(M,I)}function V(L,M,I,w){let B=L.value,_=M+"_"+I;if(w[_]===void 0){if(typeof B==="number"||typeof B==="boolean")w[_]=B;else if(ArrayBuffer.isView(B))w[_]=B.slice();else w[_]=B.clone();return!0}else{let d=w[_];if(typeof B==="number"||typeof B==="boolean"){if(d!==B)return w[_]=B,!0}else if(ArrayBuffer.isView(B))return!0;else if(d.equals(B)===!1)return d.copy(B),!0}return!1}function O(L){let M=L.uniforms,I=0,w=16;for(let _=0,d=M.length;_<d;_++){let j=Array.isArray(M[_])?M[_]:[M[_]];for(let b=0,Q0=j.length;b<Q0;b++){let S=j[b],i=Array.isArray(S.value)?S.value:[S.value];for(let u=0,x=i.length;u<x;u++){let H0=i[u],n=R(H0),W0=I%w,Y0=W0%n.boundary,g0=W0+Y0;if(I+=Y0,g0!==0&&w-g0<n.storage)I+=w-g0;S.__data=new Float32Array(n.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=I,I+=n.storage}}}let B=I%w;if(B>0)I+=w-B;return L.__size=I,L.__cache={},this}function R(L){let M={boundary:0,storage:0};if(typeof L==="number"||typeof L==="boolean")M.boundary=4,M.storage=4;else if(L.isVector2)M.boundary=8,M.storage=8;else if(L.isVector3||L.isColor)M.boundary=16,M.storage=12;else if(L.isVector4)M.boundary=16,M.storage=16;else if(L.isMatrix3)M.boundary=48,M.storage=48;else if(L.isMatrix4)M.boundary=64,M.storage=64;else if(L.isTexture)x0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(L))M.boundary=16,M.storage=L.byteLength;else x0("WebGLRenderer: Unsupported uniform value type.",L);return M}function z(L){let M=L.target;M.removeEventListener("dispose",z);let I=H.indexOf(M.__bindingPointIndex);H.splice(I,1),J.deleteBuffer(Z[M.id]),delete Z[M.id],delete K[M.id]}function D(){for(let L in Z)J.deleteBuffer(Z[L]);H=[],Z={},K={}}return{bind:X,update:U,dispose:D}}var cq=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),z9=null;function nq(){if(z9===null)z9=new mQ(cq,16,16,g7,N8),z9.name="DFG_LUT",z9.minFilter=G8,z9.magFilter=G8,z9.wrapS=f6,z9.wrapT=f6,z9.generateMipmaps=!1,z9.needsUpdate=!0;return z9}class YH{constructor(J={}){let{canvas:Q=IX(),context:$=null,depth:W=!0,stencil:Z=!1,alpha:K=!1,antialias:H=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:X=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:E=!1,outputBufferType:N=G9}=J;this.isWebGLRenderer=!0;let F;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");F=$.getContextAttributes().alpha}else F=K;let q=N,V=new Set([lZ,mZ,pZ]),O=new Set([G9,Y7,hQ,b6,xZ,gZ]),R=new Uint32Array(4),z=new Int32Array(4),D=new T,L=null,M=null,I=[],w=[],B=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=X9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,d=!1,j=null,b=null,Q0=null,S=null;this._outputColorSpace=D8;let i=0,u=0,x=null,H0=-1,n=null,W0=new SJ,Y0=new SJ,g0=null,I0=new y0(0),a0=0,r0=Q.width,a=Q.height,N0=1,E0=null,u0=null,l0=new SJ(0,0,r0,a),p0=new SJ(0,0,r0,a),uJ=!1,HJ=new uQ,LJ=!1,OJ=!1,YJ=new n0,iJ=new T,TJ=new SJ,Q8={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},dJ=!1;function cJ(){return x===null?N0:1}let f=$;function F8(C,h){return Q.getContext(C,h)}let BJ,bJ,P,k,y,s,U0,O0,q0,r,t,P0,b0,L0,F0,m0,d0,RJ,v,V0,e,D0,w0;try{let C={alpha:!0,depth:W,stencil:Z,antialias:H,premultipliedAlpha:Y,preserveDrawingBuffer:X,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${jY}`);if(Q.addEventListener("webglcontextlost",t0,!1),Q.addEventListener("webglcontextrestored",fJ,!1),Q.addEventListener("webglcontextcreationerror",kJ,!1),f===null){if(f=F8("webgl2",C),f===null)if(F8("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}X0()}catch(C){throw Q.removeEventListener("webglcontextlost",t0,!1),Q.removeEventListener("webglcontextrestored",fJ,!1),Q.removeEventListener("webglcontextcreationerror",kJ,!1),i0("WebGLRenderer: "+C.message),C}function X0(){if(BJ=new eE(f),BJ.init(),e=new gq(f,BJ),bJ=new uE(f,BJ,J,e),P=new bq(f,BJ),bJ.reversedDepthBuffer&&E)P.buffers.depth.setReversed(!0);b=f.createFramebuffer(),Q0=f.createFramebuffer(),S=f.createFramebuffer(),k=new $F(f),y=new Cq,s=new xq(f,BJ,P,y,bJ,e,k),U0=new tE(_),O0=new ZN(f),D0=new mE(f,O0),q0=new JF(f,O0,k,D0),r=new ZF(f,q0,O0,D0,k),RJ=new WF(f,bJ,s),F0=new dE(y),t=new Mq(_,U0,BJ,bJ,D0,F0),P0=new uq(_,y),b0=new Pq,L0=new Sq(BJ),d0=new pE(_,U0,P,r,F,Y),m0=new hq(_,r,bJ),w0=new dq(f,k,bJ,P),v=new lE(f,BJ,k),V0=new QF(f,BJ,k),k.programs=t.programs,_.capabilities=bJ,_.extensions=BJ,_.properties=y,_.renderLists=b0,_.shadowMap=m0,_.state=P,_.info=k}if(q!==G9)B=new HF(q,Q.width,Q.height,H,W,Z);let k0=new CU(_,f);this.xr=k0,this.getContext=function(){return f},this.getContextAttributes=function(){return f.getContextAttributes()},this.forceContextLoss=function(){let C=BJ.get("WEBGL_lose_context");if(C)C.loseContext()},this.forceContextRestore=function(){let C=BJ.get("WEBGL_lose_context");if(C)C.restoreContext()},this.getPixelRatio=function(){return N0},this.setPixelRatio=function(C){if(C===void 0)return;N0=C,this.setSize(r0,a,!1)},this.getSize=function(C){return C.set(r0,a)},this.setSize=function(C,h,c=!0){if(k0.isPresenting){x0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(r0=C,a=h,Q.width=Math.floor(C*N0),Q.height=Math.floor(h*N0),c===!0)Q.style.width=C+"px",Q.style.height=h+"px";if(B!==null)B.setSize(Q.width,Q.height);this.setViewport(0,0,C,h)},this.getDrawingBufferSize=function(C){return C.set(r0*N0,a*N0).floor()},this.setDrawingBufferSize=function(C,h,c){r0=C,a=h,N0=c,Q.width=Math.floor(C*c),Q.height=Math.floor(h*c),this.setViewport(0,0,C,h)},this.setEffects=function(C){if(q===G9){i0("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let h=0;h<C.length;h++)if(C[h].isOutputPass===!0){x0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(W0)},this.getViewport=function(C){return C.copy(l0)},this.setViewport=function(C,h,c,p){if(C.isVector4)l0.set(C.x,C.y,C.z,C.w);else l0.set(C,h,c,p);P.viewport(W0.copy(l0).multiplyScalar(N0).round())},this.getScissor=function(C){return C.copy(p0)},this.setScissor=function(C,h,c,p){if(C.isVector4)p0.set(C.x,C.y,C.z,C.w);else p0.set(C,h,c,p);P.scissor(Y0.copy(p0).multiplyScalar(N0).round())},this.getScissorTest=function(){return uJ},this.setScissorTest=function(C){P.setScissorTest(uJ=C)},this.setOpaqueSort=function(C){E0=C},this.setTransparentSort=function(C){u0=C},this.getClearColor=function(C){return C.copy(d0.getClearColor())},this.setClearColor=function(){d0.setClearColor(...arguments)},this.getClearAlpha=function(){return d0.getClearAlpha()},this.setClearAlpha=function(){d0.setClearAlpha(...arguments)},this.clear=function(C=!0,h=!0,c=!0){let p=0;if(C){let m=!1;if(x!==null){let M0=x.texture.format;m=V.has(M0)}if(m){let M0=x.texture.type,j0=O.has(M0),B0=d0.getClearColor(),_0=d0.getClearAlpha(),h0=B0.r,s0=B0.g,XJ=B0.b;if(j0)R[0]=h0,R[1]=s0,R[2]=XJ,R[3]=_0,f.clearBufferuiv(f.COLOR,0,R);else z[0]=h0,z[1]=s0,z[2]=XJ,z[3]=_0,f.clearBufferiv(f.COLOR,0,z)}else p|=f.COLOR_BUFFER_BIT}if(h)p|=f.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(c)p|=f.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(p!==0)f.clear(p)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),j=C},this.dispose=function(){Q.removeEventListener("webglcontextlost",t0,!1),Q.removeEventListener("webglcontextrestored",fJ,!1),Q.removeEventListener("webglcontextcreationerror",kJ,!1),d0.dispose(),b0.dispose(),L0.dispose(),y.dispose(),U0.dispose(),r.dispose(),D0.dispose(),w0.dispose(),t.dispose(),k0.dispose(),k0.removeEventListener("sessionstart",L$),k0.removeEventListener("sessionend",$Q),u8.stop()};function t0(C){C.preventDefault(),zQ("WebGLRenderer: Context Lost."),d=!0}function fJ(){zQ("WebGLRenderer: Context Restored."),d=!1;let C=k.autoReset,h=m0.enabled,c=m0.autoUpdate,p=m0.needsUpdate,m=m0.type;X0(),k.autoReset=C,m0.enabled=h,m0.autoUpdate=c,m0.needsUpdate=p,m0.type=m}function kJ(C){i0("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function A8(C){let h=C.target;h.removeEventListener("dispose",A8),l8(h)}function l8(C){QQ(C),y.remove(C)}function QQ(C){let h=y.get(C).programs;if(h!==void 0){if(h.forEach(function(c){t.releaseProgram(c)}),C.isShaderMaterial)t.releaseShaderCache(C)}}this.renderBufferDirect=function(C,h,c,p,m,M0){if(h===null)h=Q8;let j0=m.isMesh&&m.matrixWorld.determinantAffine()<0,B0=HQ(C,h,c,p,m);P.setMaterial(p,j0);let _0=c.index,h0=1;if(p.wireframe===!0){if(_0=q0.getWireframeAttribute(c),_0===void 0)return;h0=2}let s0=c.drawRange,XJ=c.attributes.position,v0=s0.start*h0,DJ=(s0.start+s0.count)*h0;if(M0!==null)v0=Math.max(v0,M0.start*h0),DJ=Math.min(DJ,(M0.start+M0.count)*h0);if(_0!==null)v0=Math.max(v0,0),DJ=Math.min(DJ,_0.count);else if(XJ!==void 0&&XJ!==null)v0=Math.max(v0,0),DJ=Math.min(DJ,XJ.count);let nJ=DJ-v0;if(nJ<0||nJ===1/0)return;D0.setup(m,p,B0,c,_0);let CJ,zJ=v;if(_0!==null)CJ=O0.get(_0),zJ=V0,zJ.setIndex(CJ);if(m.isMesh)if(p.wireframe===!0)P.setLineWidth(p.wireframeLinewidth*cJ()),zJ.setMode(f.LINES);else zJ.setMode(f.TRIANGLES);else if(m.isLine){let W8=p.linewidth;if(W8===void 0)W8=1;if(P.setLineWidth(W8*cJ()),m.isLineSegments)zJ.setMode(f.LINES);else if(m.isLineLoop)zJ.setMode(f.LINE_LOOP);else zJ.setMode(f.LINE_STRIP)}else if(m.isPoints)zJ.setMode(f.POINTS);else if(m.isSprite)zJ.setMode(f.TRIANGLES);if(m.isBatchedMesh)if(!BJ.get("WEBGL_multi_draw")){let{_multiDrawStarts:W8,_multiDrawCounts:S0,_multiDrawCount:O8}=m,ZJ=_0?O0.get(_0).bytesPerElement:1,w8=y.get(p).currentProgram.getUniforms();for(let d8=0;d8<O8;d8++)w8.setValue(f,"_gl_DrawID",d8),zJ.render(W8[d8]/ZJ,S0[d8])}else zJ.renderMultiDraw(m._multiDrawStarts,m._multiDrawCounts,m._multiDrawCount);else if(m.isInstancedMesh)zJ.renderInstances(v0,nJ,m.count);else if(c.isInstancedBufferGeometry){let W8=c._maxInstanceCount!==void 0?c._maxInstanceCount:1/0,S0=Math.min(c.instanceCount,W8);zJ.renderInstances(v0,nJ,S0)}else zJ.render(v0,nJ)};function q8(C,h,c,p){if(j!==null&&C.isNodeMaterial)j.setObject(p,C);if(LJ===!0)F0.setState(C,c,!1);if(C.transparent===!0&&C.side===J8&&C.forceSinglePass===!1)C.side=R8,C.needsUpdate=!0,_8(C,h,p),C.side=K7,C.needsUpdate=!0,_8(C,h,p),C.side=J8;else _8(C,h,p)}this.compile=function(C,h,c=null){if(c===null)c=C;if(j!==null)j.renderStart(C,h,c);if(M=L0.get(c),M.init(h),w.push(M),c.traverseVisible(function(m){if(m.isLight&&m.layers.test(h.layers)){if(M.pushLight(m),m.castShadow)M.pushShadow(m)}}),C!==c)C.traverseVisible(function(m){if(m.isLight&&m.layers.test(h.layers)){if(M.pushLight(m),m.castShadow)M.pushShadow(m)}});if(M.setupLights(),j!==null)j.updateLights(M.state.lightsArray);if(OJ=this.localClippingEnabled,LJ=F0.init(this.clippingPlanes,OJ),LJ===!0)F0.setGlobalState(this.clippingPlanes,h);if(j!==null)m0.render(M.state.shadowsArray,c,h);let p=new Set;if(C.traverse(function(m){if(!(m.isMesh||m.isPoints||m.isLine||m.isSprite))return;let M0=m.material;if(M0)if(Array.isArray(M0))for(let j0=0;j0<M0.length;j0++){let B0=M0[j0];q8(B0,c,h,m),p.add(B0)}else q8(M0,c,h,m),p.add(M0)}),M=w.pop(),j!==null)j.renderEnd();return p},this.compileAsync=function(C,h,c=null){let p=this.compile(C,h,c);return new Promise((m)=>{function M0(){if(p.forEach(function(j0){let _0=y.get(j0).currentProgram;if(_0===void 0||_0.isReady())p.delete(j0)}),p.size===0){m(C);return}setTimeout(M0,10)}if(BJ.get("KHR_parallel_shader_compile")!==null)M0();else setTimeout(M0,10)})};let C7=null;function R$(C){if(C7)C7(C)}function L$(){u8.stop()}function $Q(){u8.start()}let u8=new NU;if(u8.setAnimationLoop(R$),typeof self<"u")u8.setContext(self);this.setAnimationLoop=function(C){C7=C,k0.setAnimationLoop(C),C===null?u8.stop():u8.start()},k0.addEventListener("sessionstart",L$),k0.addEventListener("sessionend",$Q),this.render=function(C,h){if(h!==void 0&&h.isCamera!==!0){i0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;if(j!==null)j.renderStart(C,h);let c=k0.enabled===!0&&k0.isPresenting===!0,p=B!==null&&(x===null||c)&&B.begin(_,x);if(C.matrixWorldAutoUpdate===!0)C.updateMatrixWorld();if(h.parent===null&&h.matrixWorldAutoUpdate===!0)h.updateMatrixWorld();if(k0.enabled===!0&&k0.isPresenting===!0&&(B===null||B.isCompositing()===!1)){if(k0.cameraAutoUpdate===!0)k0.updateCamera(h);h=k0.getCamera()}if(C.isScene===!0)C.onBeforeRender(_,C,h,x);if(M=L0.get(C,w.length),M.init(h),M.state.textureUnits=s.getTextureUnits(),w.push(M),YJ.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse),HJ.setFromProjectionMatrix(YJ,zK,h.reversedDepth),OJ=this.localClippingEnabled,LJ=F0.init(this.clippingPlanes,OJ),L=b0.get(C,I.length),L.init(),I.push(L),k0.enabled===!0&&k0.isPresenting===!0){let j0=_.xr.getDepthSensingMesh();if(j0!==null)T9(j0,h,-1/0,_.sortObjects)}if(T9(C,h,0,_.sortObjects),L.finish(),j!==null)j.updateLights(M.state.lightsArray);if(_.sortObjects===!0)L.sort(E0,u0);if(dJ=k0.enabled===!1||k0.isPresenting===!1||k0.hasDepthSensing()===!1,dJ)d0.addToRenderList(L,C);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(LJ===!0)F0.beginShadows();let m=M.state.shadowsArray;if(m0.render(m,C,h),LJ===!0)F0.endShadows();if((p&&B.hasRenderPass())===!1){let{opaque:j0,transmissive:B0}=L;if(M.setupLights(),h.isArrayCamera){let _0=h.cameras;if(B0.length>0)for(let h0=0,s0=_0.length;h0<s0;h0++){let XJ=_0[h0];WQ(j0,B0,C,XJ)}if(dJ)d0.render(C);for(let h0=0,s0=_0.length;h0<s0;h0++){let XJ=_0[h0];tW(L,C,XJ,XJ.viewport)}}else{if(B0.length>0)WQ(j0,B0,C,h);if(dJ)d0.render(C);tW(L,C,h)}}if(x!==null&&u===0)s.updateMultisampleRenderTarget(x),s.updateRenderTargetMipmap(x);if(p)B.end(_);if(C.isScene===!0)C.onAfterRender(_,C,h);if(D0.resetDefaultState(),H0=-1,n=null,w.pop(),w.length>0){if(M=w[w.length-1],s.setTextureUnits(M.state.textureUnits),LJ===!0)F0.setGlobalState(_.clippingPlanes,M.state.camera)}else M=null;if(I.pop(),I.length>0)L=I[I.length-1];else L=null;if(j!==null)j.renderEnd()};function T9(C,h,c,p){if(C.visible===!1)return;if(C.layers.test(h.layers)){if(C.isGroup)c=C.renderOrder;else if(C.isLOD){if(C.autoUpdate===!0)C.update(h)}else if(C.isLightProbeGrid)M.pushLightProbeGrid(C);else if(C.isLight){if(M.pushLight(C),C.castShadow)M.pushShadow(C)}else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(HJ)){if(p)TJ.setFromMatrixPosition(C.matrixWorld).applyMatrix4(YJ);let j0=r.update(C),B0=C.material;if(B0.visible)L.push(C,j0,B0,c,TJ.z,null,h)}}else if(C.isMesh||C.isLine||C.isPoints){if(!C.frustumCulled||C.intersectsFrustum(HJ)){let j0=r.update(C),B0=C.material;if(p){if(C.boundingSphere!==void 0){if(C.boundingSphere===null)C.computeBoundingSphere();TJ.copy(C.boundingSphere.center)}else{if(j0.boundingSphere===null)j0.computeBoundingSphere();TJ.copy(j0.boundingSphere.center)}TJ.applyMatrix4(C.matrixWorld).applyMatrix4(YJ)}if(Array.isArray(B0)){let _0=j0.groups;for(let h0=0,s0=_0.length;h0<s0;h0++){let XJ=_0[h0],v0=B0[XJ.materialIndex];if(v0&&v0.visible)L.push(C,j0,v0,c,TJ.z,XJ,h)}}else if(B0.visible)L.push(C,j0,B0,c,TJ.z,null,h)}}}let M0=C.children;for(let j0=0,B0=M0.length;j0<B0;j0++)T9(M0[j0],h,c,p)}function tW(C,h,c,p){let{opaque:m,transmissive:M0,transparent:j0}=C;if(M.setupLightsView(c),LJ===!0)F0.setGlobalState(_.clippingPlanes,c);if(p)P.viewport(W0.copy(p));if(m.length>0)Z6(m,h,c);if(M0.length>0)Z6(M0,h,c);if(j0.length>0)Z6(j0,h,c);P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function WQ(C,h,c,p){if((c.isScene===!0?c.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[p.id]===void 0){let v0=BJ.has("EXT_color_buffer_half_float")||BJ.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[p.id]=new aJ(1,1,{generateMipmaps:!0,type:v0?N8:G9,minFilter:M9,samples:Math.max(4,bJ.samples),stencilBuffer:Z,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:KJ.workingColorSpace})}let M0=M.state.transmissionRenderTarget[p.id],j0=p.viewport||W0;M0.setSize(j0.z*_.transmissionResolutionScale,j0.w*_.transmissionResolutionScale);let B0=_.getRenderTarget(),_0=_.getActiveCubeFace(),h0=_.getActiveMipmapLevel();if(_.setRenderTarget(M0),_.getClearColor(I0),a0=_.getClearAlpha(),a0<1)_.setClearColor(16777215,0.5);if(_.clear(),dJ)d0.render(c);let s0=_.toneMapping;_.toneMapping=X9;let XJ=p.viewport;if(p.viewport!==void 0)p.viewport=void 0;if(M.setupLightsView(p),LJ===!0)F0.setGlobalState(_.clippingPlanes,p);if(Z6(C,c,p),s.updateMultisampleRenderTarget(M0),s.updateRenderTargetMipmap(M0),BJ.has("WEBGL_multisampled_render_to_texture")===!1){let v0=!1;for(let DJ=0,nJ=h.length;DJ<nJ;DJ++){let CJ=h[DJ],{object:zJ,geometry:W8,material:S0,group:O8}=CJ;if(S0.side===J8&&zJ.layers.test(p.layers)){let ZJ=S0.side;S0.side=R8,S0.needsUpdate=!0,$8(zJ,c,p,W8,S0,O8),S0.side=ZJ,S0.needsUpdate=!0,v0=!0}}if(v0===!0)s.updateMultisampleRenderTarget(M0),s.updateRenderTargetMipmap(M0)}if(_.setRenderTarget(B0,_0,h0),_.setClearColor(I0,a0),XJ!==void 0)p.viewport=XJ;_.toneMapping=s0}function Z6(C,h,c){let p=h.isScene===!0?h.overrideMaterial:null;for(let m=0,M0=C.length;m<M0;m++){let j0=C[m],{object:B0,geometry:_0,group:h0}=j0,s0=j0.material;if(s0.allowOverride===!0&&p!==null)s0=p;if(B0.layers.test(c.layers))$8(B0,h,c,_0,s0,h0)}}function $8(C,h,c,p,m,M0){if(j!==null&&m.isNodeMaterial)j.setObject(C,m);if(C.onBeforeRender(_,h,c,p,m,M0),C.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),m.onBeforeRender(_,h,c,p,C,M0),m.transparent===!0&&m.side===J8&&m.forceSinglePass===!1)m.side=R8,m.needsUpdate=!0,_.renderBufferDirect(c,h,p,m,C,M0),m.side=K7,m.needsUpdate=!0,_.renderBufferDirect(c,h,p,m,C,M0),m.side=J8;else _.renderBufferDirect(c,h,p,m,C,M0);C.onAfterRender(_,h,c,p,m,M0)}function _8(C,h,c){if(h.isScene!==!0)h=Q8;let p=y.get(C),m=M.state.lights,M0=M.state.shadowsArray,j0=m.state.version,B0=t.getParameters(C,m.state,M0,h,c,M.state.lightProbeGridArray),_0=t.getProgramCacheKey(B0),h0=p.programs;p.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?h.environment:null,p.fog=h.fog;let s0=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;if(p.envMap=U0.get(C.envMap||p.environment,s0),p.envMapRotation=p.environment!==null&&C.envMap===null?h.environmentRotation:C.envMapRotation,h0===void 0)C.addEventListener("dispose",A8),h0=new Map,p.programs=h0;let XJ=h0.get(_0);if(XJ!==void 0){if(p.currentProgram===XJ&&p.lightsStateVersion===j0)return ZQ(C,B0),XJ}else{if(B0.uniforms=t.getUniforms(C),j!==null&&C.isNodeMaterial)j.build(C,c,B0);C.onBeforeCompile(B0,_),XJ=t.acquireProgram(B0,_0),h0.set(_0,XJ),p.uniforms=B0.uniforms}let v0=p.uniforms;if(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)v0.clippingPlanes=F0.uniform;if(ZQ(C,B0),p.needsLights=T8(C),p.lightsStateVersion=j0,p.needsLights)v0.ambientLightColor.value=m.state.ambient,v0.lightProbe.value=m.state.probe,v0.sunLights.value=m.state.sun,v0.sunLightShadows.value=m.state.sunShadow,v0.directionalLights.value=m.state.directional,v0.directionalLightShadows.value=m.state.directionalShadow,v0.spotLights.value=m.state.spot,v0.spotLightShadows.value=m.state.spotShadow,v0.rectAreaLights.value=m.state.rectArea,v0.ltc_1.value=m.state.rectAreaLTC1,v0.ltc_2.value=m.state.rectAreaLTC2,v0.pointLights.value=m.state.point,v0.pointLightShadows.value=m.state.pointShadow,v0.hemisphereLights.value=m.state.hemi,v0.sunShadowMatrix.value=m.state.sunShadowMatrix,v0.sunShadowCascade.value=m.state.sunShadowCascade,v0.directionalShadowMatrix.value=m.state.directionalShadowMatrix,v0.spotLightMatrix.value=m.state.spotLightMatrix,v0.spotLightMap.value=m.state.spotLightMap,v0.pointShadowMatrix.value=m.state.pointShadowMatrix;return p.lightProbeGrid=M.state.lightProbeGridArray.length>0,p.currentProgram=XJ,p.uniformsList=null,XJ}function V$(C){if(C.uniformsList===null){let h=C.currentProgram.getUniforms();C.uniformsList=Z$.seqWithValue(h.seq,C.uniforms)}return C.uniformsList}function ZQ(C,h){let c=y.get(C);c.outputColorSpace=h.outputColorSpace,c.batching=h.batching,c.batchingColor=h.batchingColor,c.instancing=h.instancing,c.instancingColor=h.instancingColor,c.instancingMorph=h.instancingMorph,c.skinning=h.skinning,c.morphTargets=h.morphTargets,c.morphNormals=h.morphNormals,c.morphColors=h.morphColors,c.morphTargetsCount=h.morphTargetsCount,c.numClippingPlanes=h.numClippingPlanes,c.numIntersection=h.numClipIntersection,c.vertexAlphas=h.vertexAlphas,c.vertexTangents=h.vertexTangents,c.toneMapping=h.toneMapping}function KQ(C,h){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;D.setFromMatrixPosition(h.matrixWorld);for(let c=0,p=C.length;c<p;c++){let m=C[c];if(m.texture!==null&&m.boundingBox.containsPoint(D))return m}return null}function HQ(C,h,c,p,m){if(h.isScene!==!0)h=Q8;s.resetTextureUnits();let M0=h.fog,j0=p.isMeshStandardMaterial||p.isMeshLambertMaterial||p.isMeshPhongMaterial?h.environment:null,B0=x===null?_.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:KJ.workingColorSpace,_0=p.isMeshStandardMaterial||p.isMeshLambertMaterial&&!p.envMap||p.isMeshPhongMaterial&&!p.envMap,h0=U0.get(p.envMap||j0,_0),s0=p.vertexColors===!0&&!!c.attributes.color&&c.attributes.color.itemSize===4,XJ=!!c.attributes.tangent&&(!!p.normalMap||p.anisotropy>0),v0=!!c.morphAttributes.position,DJ=!!c.morphAttributes.normal,nJ=!!c.morphAttributes.color,CJ=X9;if(p.toneMapped){if(x===null||x.isXRRenderTarget===!0)CJ=_.toneMapping}let zJ=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,W8=zJ!==void 0?zJ.length:0,S0=y.get(p),O8=M.state.lights;if(LJ===!0){if(OJ===!0||C!==n){let PJ=C===n&&p.id===H0;F0.setState(p,C,PJ)}}let ZJ=!1;if(p.version===S0.__version){if(S0.needsLights&&S0.lightsStateVersion!==O8.state.version)ZJ=!0;else if(S0.outputColorSpace!==B0)ZJ=!0;else if(m.isBatchedMesh&&S0.batching===!1)ZJ=!0;else if(!m.isBatchedMesh&&S0.batching===!0)ZJ=!0;else if(m.isBatchedMesh&&S0.batchingColor===!0&&m._colorsTexture===null)ZJ=!0;else if(m.isBatchedMesh&&S0.batchingColor===!1&&m._colorsTexture!==null)ZJ=!0;else if(m.isInstancedMesh&&S0.instancing===!1)ZJ=!0;else if(!m.isInstancedMesh&&S0.instancing===!0)ZJ=!0;else if(m.isSkinnedMesh&&S0.skinning===!1)ZJ=!0;else if(!m.isSkinnedMesh&&S0.skinning===!0)ZJ=!0;else if(m.isInstancedMesh&&S0.instancingColor===!0&&m.instanceColor===null)ZJ=!0;else if(m.isInstancedMesh&&S0.instancingColor===!1&&m.instanceColor!==null)ZJ=!0;else if(m.isInstancedMesh&&S0.instancingMorph===!0&&m.morphTexture===null)ZJ=!0;else if(m.isInstancedMesh&&S0.instancingMorph===!1&&m.morphTexture!==null)ZJ=!0;else if(S0.envMap!==h0)ZJ=!0;else if(p.fog===!0&&S0.fog!==M0)ZJ=!0;else if(S0.numClippingPlanes!==void 0&&(S0.numClippingPlanes!==F0.numPlanes||S0.numIntersection!==F0.numIntersection))ZJ=!0;else if(S0.vertexAlphas!==s0)ZJ=!0;else if(S0.vertexTangents!==XJ)ZJ=!0;else if(S0.morphTargets!==v0)ZJ=!0;else if(S0.morphNormals!==DJ)ZJ=!0;else if(S0.morphColors!==nJ)ZJ=!0;else if(S0.toneMapping!==CJ)ZJ=!0;else if(S0.morphTargetsCount!==W8)ZJ=!0;else if(!!S0.lightProbeGrid!==M.state.lightProbeGridArray.length>0)ZJ=!0}else ZJ=!0,S0.__version=p.version;let w8=S0.currentProgram;if(ZJ===!0){if(w8=_8(p,h,m),j&&p.isNodeMaterial)j.onUpdateProgram(p,w8,S0)}let d8=!1,V9=!1,w9=!1,QJ=w8.getUniforms(),hJ=S0.uniforms;if(P.useProgram(w8.program))d8=!0,V9=!0,w9=!0;if(p.id!==H0)H0=p.id,V9=!0;if(S0.needsLights){let PJ=KQ(M.state.lightProbeGridArray,m);if(S0.lightProbeGrid!==PJ)S0.lightProbeGrid=PJ,V9=!0}if(d8||n!==C){if(P.buffers.depth.getReversed()&&C.reversedDepth!==!0)C._reversedDepth=!0,C.updateProjectionMatrix();QJ.setValue(f,"projectionMatrix",C.projectionMatrix),QJ.setValue(f,"viewMatrix",C.matrixWorldInverse);let S8=QJ.map.cameraPosition;if(S8!==void 0)S8.setValue(f,iJ.setFromMatrixPosition(C.matrixWorld));if(bJ.logarithmicDepthBuffer)QJ.setValue(f,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2));if(p.isMeshPhongMaterial||p.isMeshToonMaterial||p.isMeshLambertMaterial||p.isMeshBasicMaterial||p.isMeshStandardMaterial||p.isShaderMaterial)QJ.setValue(f,"isOrthographic",C.isOrthographicCamera===!0);if(n!==C)n=C,V9=!0,w9=!0}if(S0.needsLights){if(O8.state.sunShadowMap.length>0)QJ.setValue(f,"sunShadowMap",O8.state.sunShadowMap,s);if(O8.state.directionalShadowMap.length>0)QJ.setValue(f,"directionalShadowMap",O8.state.directionalShadowMap,s);if(O8.state.spotShadowMap.length>0)QJ.setValue(f,"spotShadowMap",O8.state.spotShadowMap,s);if(O8.state.pointShadowMap.length>0)QJ.setValue(f,"pointShadowMap",O8.state.pointShadowMap,s)}if(m.isSkinnedMesh){QJ.setOptional(f,m,"bindMatrix"),QJ.setOptional(f,m,"bindMatrixInverse");let PJ=m.skeleton;if(PJ){if(PJ.boneTexture===null)PJ.computeBoneTexture();QJ.setValue(f,"boneTexture",PJ.boneTexture,s)}}if(m.isBatchedMesh){if(QJ.setOptional(f,m,"batchingTexture"),QJ.setValue(f,"batchingTexture",m._matricesTexture,s),QJ.setOptional(f,m,"batchingIdTexture"),QJ.setValue(f,"batchingIdTexture",m._indirectTexture,s),QJ.setOptional(f,m,"batchingColorTexture"),m._colorsTexture!==null)QJ.setValue(f,"batchingColorTexture",m._colorsTexture,s)}let c8=c.morphAttributes;if(c8.position!==void 0||c8.normal!==void 0||c8.color!==void 0)RJ.update(m,c,w8);if(V9||S0.receiveShadow!==m.receiveShadow)S0.receiveShadow=m.receiveShadow,QJ.setValue(f,"receiveShadow",m.receiveShadow);if((p.isMeshStandardMaterial||p.isMeshLambertMaterial||p.isMeshPhongMaterial)&&p.envMap===null&&h.environment!==null)hJ.envMapIntensity.value=h.environmentIntensity;if(hJ.dfgLUT!==void 0)hJ.dfgLUT.value=nq();if(V9){if(QJ.setValue(f,"toneMappingExposure",_.toneMappingExposure),S0.needsLights)K6(hJ,w9);if(M0&&p.fog===!0)P0.refreshFogUniforms(hJ,M0);if(P0.refreshMaterialUniforms(hJ,p,N0,a,M.state.transmissionRenderTarget[C.id]),S0.needsLights&&S0.lightProbeGrid){let PJ=S0.lightProbeGrid;hJ.probesSH.value=PJ.texture,hJ.probesMin.value.copy(PJ.boundingBox.min),hJ.probesMax.value.copy(PJ.boundingBox.max),hJ.probesResolution.value.copy(PJ.resolution)}Z$.upload(f,V$(S0),hJ,s)}if(p.isShaderMaterial&&p.uniformsNeedUpdate===!0)Z$.upload(f,V$(S0),hJ,s),p.uniformsNeedUpdate=!1;if(p.isSpriteMaterial)QJ.setValue(f,"center",m.center);if(QJ.setValue(f,"modelViewMatrix",m.modelViewMatrix),QJ.setValue(f,"normalMatrix",m.normalMatrix),QJ.setValue(f,"modelMatrix",m.matrixWorld),p.uniformsGroups!==void 0){let PJ=p.uniformsGroups;for(let S8=0,S9=PJ.length;S8<S9;S8++){let z7=PJ[S8];w0.update(z7,w8),w0.bind(z7,w8)}}return w8}function K6(C,h){C.ambientLightColor.needsUpdate=h,C.lightProbe.needsUpdate=h,C.sunLights.needsUpdate=h,C.sunLightShadows.needsUpdate=h,C.directionalLights.needsUpdate=h,C.directionalLightShadows.needsUpdate=h,C.pointLights.needsUpdate=h,C.pointLightShadows.needsUpdate=h,C.spotLights.needsUpdate=h,C.spotLightShadows.needsUpdate=h,C.rectAreaLights.needsUpdate=h,C.hemisphereLights.needsUpdate=h}function T8(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return i},this.getActiveMipmapLevel=function(){return u},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(C,h,c){let p=y.get(C);if(p.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,p.__autoAllocateDepthBuffer===!1)p.__useRenderToTexture=!1;y.get(C.texture).__webglTexture=h,y.get(C.depthTexture).__webglTexture=p.__autoAllocateDepthBuffer?void 0:c,p.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,h){let c=y.get(C);c.__webglFramebuffer=h,c.__useDefaultFramebuffer=h===void 0},this.setRenderTarget=function(C,h=0,c=0){x=C,i=h,u=c;let p=null,m=!1,M0=!1;if(C){let B0=y.get(C);if(B0.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(f.FRAMEBUFFER,B0.__webglFramebuffer),W0.copy(C.viewport),Y0.copy(C.scissor),g0=C.scissorTest,P.viewport(W0),P.scissor(Y0),P.setScissorTest(g0),H0=-1;return}else if(B0.__webglFramebuffer===void 0)s.setupRenderTarget(C);else if(B0.__hasExternalTextures)s.rebindTextures(C,y.get(C.texture).__webglTexture,y.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let s0=C.depthTexture;if(B0.__boundDepthTexture!==s0){if(s0!==null&&y.has(s0)&&(C.width!==s0.image.width||C.height!==s0.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");s.setupDepthRenderbuffer(C)}}let _0=C.texture;if(_0.isData3DTexture||_0.isDataArrayTexture||_0.isCompressedArrayTexture)M0=!0;let h0=y.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget){if(Array.isArray(h0[h]))p=h0[h][c];else p=h0[h];m=!0}else if(C.samples>0&&s.useMultisampledRTT(C)===!1)p=y.get(C).__webglMultisampledFramebuffer;else if(Array.isArray(h0))p=h0[c];else p=h0;W0.copy(C.viewport),Y0.copy(C.scissor),g0=C.scissorTest}else W0.copy(l0).multiplyScalar(N0).floor(),Y0.copy(p0).multiplyScalar(N0).floor(),g0=uJ;if(c!==0)p=b;if(P.bindFramebuffer(f.FRAMEBUFFER,p))P.drawBuffers(C,p);if(P.viewport(W0),P.scissor(Y0),P.setScissorTest(g0),m){let B0=y.get(C.texture);f.framebufferTexture2D(f.FRAMEBUFFER,f.COLOR_ATTACHMENT0,f.TEXTURE_CUBE_MAP_POSITIVE_X+h,B0.__webglTexture,c)}else if(M0){let B0=h;for(let _0=0;_0<C.textures.length;_0++){let h0=y.get(C.textures[_0]);f.framebufferTextureLayer(f.FRAMEBUFFER,f.COLOR_ATTACHMENT0+_0,h0.__webglTexture,c,B0)}}else if(C!==null&&c!==0){let B0=y.get(C.texture);f.framebufferTexture2D(f.FRAMEBUFFER,f.COLOR_ATTACHMENT0,f.TEXTURE_2D,B0.__webglTexture,c)}H0=-1};function H6(C){let h=y.get(C);if(h.__readFormat!==C.format||h.__readType!==C.type)h.__readFormat=C.format,h.__readType=C.type,h.__formatReadable=bJ.textureFormatReadable(C.format),h.__typeReadable=bJ.textureTypeReadable(C.type);return h}if(this.readRenderTargetPixels=function(C,h,c,p,m,M0,j0,B0=0){if(!(C&&C.isWebGLRenderTarget)){i0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _0=y.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&j0!==void 0)_0=_0[j0];if(_0){P.bindFramebuffer(f.FRAMEBUFFER,_0);try{let h0=C.textures[B0],s0=h0.format,XJ=h0.type;if(C.textures.length>1)f.readBuffer(f.COLOR_ATTACHMENT0+B0);let v0=H6(h0);if(v0.__formatReadable===!1){i0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(v0.__typeReadable===!1){i0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(h>=0&&h<=C.width-p&&(c>=0&&c<=C.height-m))f.readPixels(h,c,p,m,e.convert(s0),e.convert(XJ),M0)}finally{let h0=x!==null?y.get(x).__webglFramebuffer:null;P.bindFramebuffer(f.FRAMEBUFFER,h0)}}},this.readRenderTargetPixelsAsync=async function(C,h,c,p,m,M0,j0,B0=0){if(!(C&&C.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _0=y.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&j0!==void 0)_0=_0[j0];if(_0)if(h>=0&&h<=C.width-p&&(c>=0&&c<=C.height-m)){P.bindFramebuffer(f.FRAMEBUFFER,_0);let h0=C.textures[B0],s0=h0.format,XJ=h0.type;if(C.textures.length>1)f.readBuffer(f.COLOR_ATTACHMENT0+B0);let v0=H6(h0);if(v0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(v0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let DJ=f.createBuffer();f.bindBuffer(f.PIXEL_PACK_BUFFER,DJ),f.bufferData(f.PIXEL_PACK_BUFFER,M0.byteLength,f.STREAM_READ),f.readPixels(h,c,p,m,e.convert(s0),e.convert(XJ),0),f.bindBuffer(f.PIXEL_PACK_BUFFER,null);let nJ=x!==null?y.get(x).__webglFramebuffer:null;P.bindFramebuffer(f.FRAMEBUFFER,nJ);let CJ=f.fenceSync(f.SYNC_GPU_COMMANDS_COMPLETE,0);return f.flush(),await _X(f,CJ,4),f.bindBuffer(f.PIXEL_PACK_BUFFER,DJ),f.getBufferSubData(f.PIXEL_PACK_BUFFER,0,M0),f.bindBuffer(f.PIXEL_PACK_BUFFER,null),f.deleteBuffer(DJ),f.deleteSync(CJ),M0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,h=null,c=0){let p=Math.pow(2,-c),m=Math.floor(C.image.width*p),M0=Math.floor(C.image.height*p),j0=h!==null?h.x:0,B0=h!==null?h.y:0;s.setTexture2D(C,0),f.copyTexSubImage2D(f.TEXTURE_2D,c,0,0,j0,B0,m,M0),P.unbindTexture()},this.copyTextureToTexture=function(C,h,c=null,p=null,m=0,M0=0){let j0,B0,_0,h0,s0,XJ,v0,DJ,nJ,CJ=C.isCompressedTexture?C.mipmaps[M0]:C.image;if(c!==null)j0=c.max.x-c.min.x,B0=c.max.y-c.min.y,_0=c.isBox3?c.max.z-c.min.z:1,h0=c.min.x,s0=c.min.y,XJ=c.isBox3?c.min.z:0;else{let hJ=Math.pow(2,-m);if(j0=Math.floor(CJ.width*hJ),B0=Math.floor(CJ.height*hJ),C.isDataArrayTexture)_0=CJ.depth;else if(C.isData3DTexture)_0=Math.floor(CJ.depth*hJ);else _0=1;h0=0,s0=0,XJ=0}if(p!==null)v0=p.x,DJ=p.y,nJ=p.z;else v0=0,DJ=0,nJ=0;let zJ=e.convert(h.format),W8=e.convert(h.type),S0;if(h.isData3DTexture)s.setTexture3D(h,0),S0=f.TEXTURE_3D;else if(h.isDataArrayTexture||h.isCompressedArrayTexture)s.setTexture2DArray(h,0),S0=f.TEXTURE_2D_ARRAY;else s.setTexture2D(h,0),S0=f.TEXTURE_2D;P.activeTexture(f.TEXTURE0),P.pixelStorei(f.UNPACK_FLIP_Y_WEBGL,h.flipY),P.pixelStorei(f.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),P.pixelStorei(f.UNPACK_ALIGNMENT,h.unpackAlignment);let O8=P.getParameter(f.UNPACK_ROW_LENGTH),ZJ=P.getParameter(f.UNPACK_IMAGE_HEIGHT),w8=P.getParameter(f.UNPACK_SKIP_PIXELS),d8=P.getParameter(f.UNPACK_SKIP_ROWS),V9=P.getParameter(f.UNPACK_SKIP_IMAGES);P.pixelStorei(f.UNPACK_ROW_LENGTH,CJ.width),P.pixelStorei(f.UNPACK_IMAGE_HEIGHT,CJ.height),P.pixelStorei(f.UNPACK_SKIP_PIXELS,h0),P.pixelStorei(f.UNPACK_SKIP_ROWS,s0),P.pixelStorei(f.UNPACK_SKIP_IMAGES,XJ);let w9=C.isDataArrayTexture||C.isData3DTexture,QJ=h.isDataArrayTexture||h.isData3DTexture;if(C.isDepthTexture){let hJ=y.get(C),c8=y.get(h),PJ=y.get(hJ.__renderTarget),S8=y.get(c8.__renderTarget);P.bindFramebuffer(f.READ_FRAMEBUFFER,PJ.__webglFramebuffer),P.bindFramebuffer(f.DRAW_FRAMEBUFFER,S8.__webglFramebuffer);for(let S9=0;S9<_0;S9++){if(w9)f.framebufferTextureLayer(f.READ_FRAMEBUFFER,f.COLOR_ATTACHMENT0,y.get(C).__webglTexture,m,XJ+S9),f.framebufferTextureLayer(f.DRAW_FRAMEBUFFER,f.COLOR_ATTACHMENT0,y.get(h).__webglTexture,M0,nJ+S9);f.blitFramebuffer(h0,s0,j0,B0,v0,DJ,j0,B0,f.DEPTH_BUFFER_BIT,f.NEAREST)}P.bindFramebuffer(f.READ_FRAMEBUFFER,null),P.bindFramebuffer(f.DRAW_FRAMEBUFFER,null)}else if(m!==0||C.isRenderTargetTexture||y.has(C)){let hJ=y.get(C),c8=y.get(h);P.bindFramebuffer(f.READ_FRAMEBUFFER,Q0),P.bindFramebuffer(f.DRAW_FRAMEBUFFER,S);for(let PJ=0;PJ<_0;PJ++){if(w9)f.framebufferTextureLayer(f.READ_FRAMEBUFFER,f.COLOR_ATTACHMENT0,hJ.__webglTexture,m,XJ+PJ);else f.framebufferTexture2D(f.READ_FRAMEBUFFER,f.COLOR_ATTACHMENT0,f.TEXTURE_2D,hJ.__webglTexture,m);if(QJ)f.framebufferTextureLayer(f.DRAW_FRAMEBUFFER,f.COLOR_ATTACHMENT0,c8.__webglTexture,M0,nJ+PJ);else f.framebufferTexture2D(f.DRAW_FRAMEBUFFER,f.COLOR_ATTACHMENT0,f.TEXTURE_2D,c8.__webglTexture,M0);if(m!==0)f.blitFramebuffer(h0,s0,j0,B0,v0,DJ,j0,B0,f.COLOR_BUFFER_BIT,f.NEAREST);else if(QJ)f.copyTexSubImage3D(S0,M0,v0,DJ,nJ+PJ,h0,s0,j0,B0);else f.copyTexSubImage2D(S0,M0,v0,DJ,h0,s0,j0,B0)}P.bindFramebuffer(f.READ_FRAMEBUFFER,null),P.bindFramebuffer(f.DRAW_FRAMEBUFFER,null)}else if(QJ)if(C.isDataTexture||C.isData3DTexture)f.texSubImage3D(S0,M0,v0,DJ,nJ,j0,B0,_0,zJ,W8,CJ.data);else if(h.isCompressedArrayTexture)f.compressedTexSubImage3D(S0,M0,v0,DJ,nJ,j0,B0,_0,zJ,CJ.data);else f.texSubImage3D(S0,M0,v0,DJ,nJ,j0,B0,_0,zJ,W8,CJ);else if(C.isDataTexture)f.texSubImage2D(f.TEXTURE_2D,M0,v0,DJ,j0,B0,zJ,W8,CJ.data);else if(C.isCompressedTexture)f.compressedTexSubImage2D(f.TEXTURE_2D,M0,v0,DJ,CJ.width,CJ.height,zJ,CJ.data);else f.texSubImage2D(f.TEXTURE_2D,M0,v0,DJ,j0,B0,zJ,W8,CJ);if(P.pixelStorei(f.UNPACK_ROW_LENGTH,O8),P.pixelStorei(f.UNPACK_IMAGE_HEIGHT,ZJ),P.pixelStorei(f.UNPACK_SKIP_PIXELS,w8),P.pixelStorei(f.UNPACK_SKIP_ROWS,d8),P.pixelStorei(f.UNPACK_SKIP_IMAGES,V9),M0===0&&h.generateMipmaps)f.generateMipmap(S0);P.unbindTexture()},this.initRenderTarget=function(C){if(y.get(C).__webglFramebuffer===void 0)s.setupRenderTarget(C)},this.initTexture=function(C){if(C.isCubeTexture)s.setTextureCube(C,0);else if(C.isData3DTexture)s.setTexture3D(C,0);else if(C.isDataArrayTexture||C.isCompressedArrayTexture)s.setTexture2DArray(C,0);else s.setTexture2D(C,0);P.unbindTexture()},this.resetState=function(){i=0,u=0,x=null,P.reset(),D0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zK}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=KJ._getDrawingBufferColorSpace(J),Q.unpackColorSpace=KJ._getUnpackColorSpace()}}function pW(J,Q=!1){let $=J[0].index!==null,W=new Set(Object.keys(J[0].attributes)),Z=new Set(Object.keys(J[0].morphAttributes)),K={},H={},Y=J[0].morphTargetsRelative,X=new yJ,U=0;for(let G=0;G<J.length;++G){let E=J[G],N=0;if($!==(E.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let F in E.attributes){if(!W.has(F))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+'. All geometries must have compatible attributes; make sure "'+F+'" attribute exists among all geometries, or in none of them.'),null;if(K[F]===void 0)K[F]=[];K[F].push(E.attributes[F]),N++}if(N!==W.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+". Make sure all geometries have the same number of attributes."),null;if(Y!==E.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let F in E.morphAttributes){if(!Z.has(F))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+".  .morphAttributes must be consistent throughout all geometries."),null;if(H[F]===void 0)H[F]=[];H[F].push(E.morphAttributes[F])}if(Q){let F;if($)F=E.index.count;else if(E.attributes.position!==void 0)F=E.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+". The geometry must have either an index or a position attribute"),null;X.addGroup(U,F,G),U+=F}}if($){let G=0,E=[];for(let N=0;N<J.length;++N){let F=J[N].index;for(let q=0;q<F.count;++q)E.push(F.getX(q)+G);G+=J[N].attributes.position.count}X.setIndex(E)}for(let G in K){let E=PU(K[G]);if(!E)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+G+" attribute."),null;X.setAttribute(G,E)}for(let G in H){let E=H[G][0].length;if(E===0)continue;X.morphAttributes=X.morphAttributes||{},X.morphAttributes[G]=[];for(let N=0;N<E;++N){let F=[];for(let V=0;V<H[G].length;++V)F.push(H[G][V][N]);let q=PU(F);if(!q)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+G+" morphAttribute."),null;X.morphAttributes[G].push(q)}}return X}function PU(J){let Q,$,W,Z=-1,K=0;for(let U=0;U<J.length;++U){let G=J[U];if(Q===void 0)Q=G.array.constructor;if(Q!==G.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if($===void 0)$=G.itemSize;if($!==G.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(W===void 0)W=G.normalized;if(W!==G.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(Z===-1)Z=G.gpuType;if(Z!==G.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;K+=G.count*$}let H=new Q(K),Y=new sJ(H,$,W),X=0;for(let U=0;U<J.length;++U){let G=J[U];if(G.isInterleavedBufferAttribute){let E=X/$;for(let N=0,F=G.count;N<F;N++)for(let q=0;q<$;q++){let V=G.getComponent(N,q);Y.setComponent(N+E,q,V)}}else H.set(G.array,X);X+=G.count*$}if(Z!==void 0)Y.gpuType=Z;return Y}function XH(J,Q){if(Q===BK)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if(Q===x6||Q===bQ){let $=J.getIndex();if($===null){let K=[],H=J.getAttribute("position");if(H!==void 0){for(let Y=0;Y<H.count;Y++)K.push(Y);J.setIndex(K),$=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let W=$.count-2,Z=[];if(Q===x6)for(let K=1;K<=W;K++)Z.push($.getX(0)),Z.push($.getX(K)),Z.push($.getX(K+1));else for(let K=0;K<W;K++)if(K%2===0)Z.push($.getX(K)),Z.push($.getX(K+1)),Z.push($.getX(K+2));else Z.push($.getX(K+2)),Z.push($.getX(K+1)),Z.push($.getX(K));if(Z.length/3!==W)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return J.setIndex(Z),J.clearGroups(),J}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",Q),J}function mW(J){let Q=new Map,$=new Map,W=J.clone();return IU(J,W,function(Z,K){Q.set(K,Z),$.set(Z,K)}),W.traverse(function(Z){if(!Z.isSkinnedMesh)return;let K=Z,H=Q.get(Z),Y=H.skeleton.bones;K.skeleton=H.skeleton.clone(),K.bindMatrix.copy(H.bindMatrix),K.skeleton.bones=Y.map(function(X){return $.get(X)}),K.bind(K.skeleton,K.bindMatrix)}),W}function IU(J,Q,$){$(J,Q);for(let W=0;W<J.children.length;W++)IU(J.children[W],Q.children[W],$)}class OH extends d9{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(Q){return new vU(Q)}),this.register(function(Q){return new fU(Q)}),this.register(function(Q){return new dU(Q)}),this.register(function(Q){return new cU(Q)}),this.register(function(Q){return new nU(Q)}),this.register(function(Q){return new bU(Q)}),this.register(function(Q){return new xU(Q)}),this.register(function(Q){return new gU(Q)}),this.register(function(Q){return new pU(Q)}),this.register(function(Q){return new yU(Q)}),this.register(function(Q){return new mU(Q)}),this.register(function(Q){return new hU(Q)}),this.register(function(Q){return new uU(Q)}),this.register(function(Q){return new lU(Q)}),this.register(function(Q){return new SU(Q)}),this.register(function(Q){return new EH(Q,qJ.EXT_MESHOPT_COMPRESSION)}),this.register(function(Q){return new EH(Q,qJ.KHR_MESHOPT_COMPRESSION)}),this.register(function(Q){return new sU(Q)})}load(J,Q,$,W){let Z=this,K;if(this.resourcePath!=="")K=this.resourcePath;else if(this.path!==""){let X=D7.extractUrlBase(J);K=D7.resolveURL(X,this.path)}else K=D7.extractUrlBase(J);this.manager.itemStart(J);let H=function(X){if(W)W(X);else console.error(X);Z.manager.itemError(J),Z.manager.itemEnd(J)},Y=new rQ(this.manager);Y.setPath(this.path),Y.setResponseType("arraybuffer"),Y.setRequestHeader(this.requestHeader),Y.setWithCredentials(this.withCredentials),Y.load(J,function(X){try{Z.parse(X,K,function(U){Q(U),Z.manager.itemEnd(J)},H)}catch(U){H(U)}},$,H)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,Q,$,W){let Z,K={},H={},Y=new TextDecoder;if(typeof J==="string")Z=JSON.parse(J);else if(J instanceof ArrayBuffer)if(Y.decode(new Uint8Array(J,0,4))===iU){try{K[qJ.KHR_BINARY_GLTF]=new oU(J)}catch(G){if(W)W(G);return}Z=JSON.parse(K[qJ.KHR_BINARY_GLTF].content)}else Z=JSON.parse(Y.decode(J));else Z=J;if(Z.asset===void 0||Z.asset.version[0]<2){if(W)W(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let X=new J5(Z,{path:Q||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});X.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let G=this.pluginCallbacks[U](X);if(!G.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");H[G.name]=G,K[G.name]=!0}if(Z.extensionsUsed)for(let U=0;U<Z.extensionsUsed.length;++U){let G=Z.extensionsUsed[U],E=Z.extensionsRequired||[];switch(G){case qJ.KHR_MATERIALS_UNLIT:K[G]=new jU;break;case qJ.KHR_DRACO_MESH_COMPRESSION:K[G]=new aU(Z,this.dracoLoader);break;case qJ.KHR_TEXTURE_TRANSFORM:K[G]=new rU;break;case qJ.KHR_MESH_QUANTIZATION:K[G]=new tU;break;default:if(E.indexOf(G)>=0&&H[G]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+G+'".')}}X.setExtensions(K),X.setPlugins(H),X.parse($,W)}parseAsync(J,Q){let $=this;return new Promise(function(W,Z){$.parse(J,Q,W,Z)})}}function sq(){let J={};return{get:function(Q){return J[Q]},add:function(Q,$){J[Q]=$},remove:function(Q){delete J[Q]},removeAll:function(){J={}}}}function rJ(J,Q,$){let W=J.json.materials[Q];if(W.extensions&&W.extensions[$])return W.extensions[$];return null}var qJ={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class SU{constructor(J){this.parser=J,this.name=qJ.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,Q=this.parser.json.nodes||[];for(let $=0,W=Q.length;$<W;$++){let Z=Q[$];if(Z.extensions&&Z.extensions[this.name]&&Z.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,Z.extensions[this.name].light)}}_loadLight(J){let Q=this.parser,$="light:"+J,W=Q.cache.get($);if(W)return W;let Z=Q.json,Y=((Z.extensions&&Z.extensions[this.name]||{}).lights||[])[J],X,U=new y0(16777215);if(Y.color!==void 0)U.setRGB(Y.color[0],Y.color[1],Y.color[2],g8);let G=Y.range!==void 0?Y.range:0;switch(Y.type){case"directional":X=new n6(U),X.target.position.set(0,0,-1),X.add(X.target);break;case"point":X=new c9(U),X.distance=G;break;case"spot":X=new c6(U),X.distance=G,Y.spot=Y.spot||{},Y.spot.innerConeAngle=Y.spot.innerConeAngle!==void 0?Y.spot.innerConeAngle:0,Y.spot.outerConeAngle=Y.spot.outerConeAngle!==void 0?Y.spot.outerConeAngle:Math.PI/4,X.angle=Y.spot.outerConeAngle,X.penumbra=1-Y.spot.innerConeAngle/Y.spot.outerConeAngle,X.target.position.set(0,0,-1),X.add(X.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+Y.type)}if(X.position.set(0,0,0),I9(X,Y),Y.intensity!==void 0)X.intensity=Y.intensity;return X.name=Q.createUniqueName(Y.name||"light_"+J),W=Promise.resolve(X),Q.cache.add($,W),W}getDependency(J,Q){if(J!=="light")return;return this._loadLight(Q)}createNodeAttachment(J){let Q=this,$=this.parser,Z=$.json.nodes[J],H=(Z.extensions&&Z.extensions[this.name]||{}).light;if(H===void 0)return null;return this._loadLight(H).then(function(Y){return $._getNodeRef(Q.cache,H,Y)})}}class jU{constructor(){this.name=qJ.KHR_MATERIALS_UNLIT}getMaterialType(){return mJ}extendParams(J,Q,$){let W=[];J.color=new y0(1,1,1),J.opacity=1;let Z=Q.pbrMetallicRoughness;if(Z){if(Array.isArray(Z.baseColorFactor)){let K=Z.baseColorFactor;J.color.setRGB(K[0],K[1],K[2],g8),J.opacity=K[3]}if(Z.baseColorTexture!==void 0)W.push($.assignTexture(J,"map",Z.baseColorTexture,D8))}return Promise.all(W)}}class yU{constructor(J){this.parser=J,this.name=qJ.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,Q){let $=rJ(this.parser,J,this.name);if($===null)return Promise.resolve();if($.emissiveStrength!==void 0)Q.emissiveIntensity=$.emissiveStrength;return Promise.resolve()}}class vU{constructor(J){this.parser=J,this.name=qJ.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){return rJ(this.parser,J,this.name)!==null?E8:null}extendMaterialParams(J,Q){let $=rJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.clearcoatFactor!==void 0)Q.clearcoat=$.clearcoatFactor;if($.clearcoatTexture!==void 0)W.push(this.parser.assignTexture(Q,"clearcoatMap",$.clearcoatTexture));if($.clearcoatRoughnessFactor!==void 0)Q.clearcoatRoughness=$.clearcoatRoughnessFactor;if($.clearcoatRoughnessTexture!==void 0)W.push(this.parser.assignTexture(Q,"clearcoatRoughnessMap",$.clearcoatRoughnessTexture));if($.clearcoatNormalTexture!==void 0){if(W.push(this.parser.assignTexture(Q,"clearcoatNormalMap",$.clearcoatNormalTexture)),$.clearcoatNormalTexture.scale!==void 0){let Z=$.clearcoatNormalTexture.scale;Q.clearcoatNormalScale=new $0(Z,Z)}}return Promise.all(W)}}class fU{constructor(J){this.parser=J,this.name=qJ.KHR_MATERIALS_DISPERSION}getMaterialType(J){return rJ(this.parser,J,this.name)!==null?E8:null}extendMaterialParams(J,Q){let $=rJ(this.parser,J,this.name);if($===null)return Promise.resolve();return Q.dispersion=$.dispersion!==void 0?$.dispersion:0,Promise.resolve()}}class hU{constructor(J){this.parser=J,this.name=qJ.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){return rJ(this.parser,J,this.name)!==null?E8:null}extendMaterialParams(J,Q){let $=rJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.iridescenceFactor!==void 0)Q.iridescence=$.iridescenceFactor;if($.iridescenceTexture!==void 0)W.push(this.parser.assignTexture(Q,"iridescenceMap",$.iridescenceTexture));if($.iridescenceIor!==void 0)Q.iridescenceIOR=$.iridescenceIor;if(Q.iridescenceThicknessRange===void 0)Q.iridescenceThicknessRange=[100,400];if($.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessRange[0]=$.iridescenceThicknessMinimum;if($.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessRange[1]=$.iridescenceThicknessMaximum;if($.iridescenceThicknessTexture!==void 0)W.push(this.parser.assignTexture(Q,"iridescenceThicknessMap",$.iridescenceThicknessTexture));return Promise.all(W)}}class bU{constructor(J){this.parser=J,this.name=qJ.KHR_MATERIALS_SHEEN}getMaterialType(J){return rJ(this.parser,J,this.name)!==null?E8:null}extendMaterialParams(J,Q){let $=rJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.sheenColor=new y0(0,0,0),Q.sheenRoughness=0,Q.sheen=1,$.sheenColorFactor!==void 0){let Z=$.sheenColorFactor;Q.sheenColor.setRGB(Z[0],Z[1],Z[2],g8)}if($.sheenRoughnessFactor!==void 0)Q.sheenRoughness=$.sheenRoughnessFactor;if($.sheenColorTexture!==void 0)W.push(this.parser.assignTexture(Q,"sheenColorMap",$.sheenColorTexture,D8));if($.sheenRoughnessTexture!==void 0)W.push(this.parser.assignTexture(Q,"sheenRoughnessMap",$.sheenRoughnessTexture));return Promise.all(W)}}class xU{constructor(J){this.parser=J,this.name=qJ.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){return rJ(this.parser,J,this.name)!==null?E8:null}extendMaterialParams(J,Q){let $=rJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.transmissionFactor!==void 0)Q.transmission=$.transmissionFactor;if($.transmissionTexture!==void 0)W.push(this.parser.assignTexture(Q,"transmissionMap",$.transmissionTexture));return Promise.all(W)}}class gU{constructor(J){this.parser=J,this.name=qJ.KHR_MATERIALS_VOLUME}getMaterialType(J){return rJ(this.parser,J,this.name)!==null?E8:null}extendMaterialParams(J,Q){let $=rJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.thickness=$.thicknessFactor!==void 0?$.thicknessFactor:0,$.thicknessTexture!==void 0)W.push(this.parser.assignTexture(Q,"thicknessMap",$.thicknessTexture));Q.attenuationDistance=$.attenuationDistance||1/0;let Z=$.attenuationColor||[1,1,1];return Q.attenuationColor=new y0().setRGB(Z[0],Z[1],Z[2],g8),Promise.all(W)}}class pU{constructor(J){this.parser=J,this.name=qJ.KHR_MATERIALS_IOR}getMaterialType(J){return rJ(this.parser,J,this.name)!==null?E8:null}extendMaterialParams(J,Q){let $=rJ(this.parser,J,this.name);if($===null)return Promise.resolve();if(Q.ior=$.ior!==void 0?$.ior:1.5,Q.ior===0)Q.ior=1000;return Promise.resolve()}}class mU{constructor(J){this.parser=J,this.name=qJ.KHR_MATERIALS_SPECULAR}getMaterialType(J){return rJ(this.parser,J,this.name)!==null?E8:null}extendMaterialParams(J,Q){let $=rJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.specularIntensity=$.specularFactor!==void 0?$.specularFactor:1,$.specularTexture!==void 0)W.push(this.parser.assignTexture(Q,"specularIntensityMap",$.specularTexture));let Z=$.specularColorFactor||[1,1,1];if(Q.specularColor=new y0().setRGB(Z[0],Z[1],Z[2],g8),$.specularColorTexture!==void 0)W.push(this.parser.assignTexture(Q,"specularColorMap",$.specularColorTexture,D8));return Promise.all(W)}}class lU{constructor(J){this.parser=J,this.name=qJ.EXT_MATERIALS_BUMP}getMaterialType(J){return rJ(this.parser,J,this.name)!==null?E8:null}extendMaterialParams(J,Q){let $=rJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.bumpScale=$.bumpFactor!==void 0?$.bumpFactor:1,$.bumpTexture!==void 0)W.push(this.parser.assignTexture(Q,"bumpMap",$.bumpTexture));return Promise.all(W)}}class uU{constructor(J){this.parser=J,this.name=qJ.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){return rJ(this.parser,J,this.name)!==null?E8:null}extendMaterialParams(J,Q){let $=rJ(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.anisotropyStrength!==void 0)Q.anisotropy=$.anisotropyStrength;if($.anisotropyRotation!==void 0)Q.anisotropyRotation=$.anisotropyRotation;if($.anisotropyTexture!==void 0)W.push(this.parser.assignTexture(Q,"anisotropyMap",$.anisotropyTexture));return Promise.all(W)}}class dU{constructor(J){this.parser=J,this.name=qJ.KHR_TEXTURE_BASISU}loadTexture(J){let Q=this.parser,$=Q.json,W=$.textures[J];if(!W.extensions||!W.extensions[this.name])return null;let Z=W.extensions[this.name],K=Q.options.ktx2Loader;if(!K)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return Q.loadTextureImage(J,Z.source,K)}}class cU{constructor(J){this.parser=J,this.name=qJ.EXT_TEXTURE_WEBP}loadTexture(J){let Q=this.name,$=this.parser,W=$.json,Z=W.textures[J];if(!Z.extensions||!Z.extensions[Q])return null;let K=Z.extensions[Q],H=W.images[K.source],Y=$.textureLoader;if(H.uri){let X=$.options.manager.getHandler(H.uri);if(X!==null)Y=X}return $.loadTextureImage(J,K.source,Y)}}class nU{constructor(J){this.parser=J,this.name=qJ.EXT_TEXTURE_AVIF}loadTexture(J){let Q=this.name,$=this.parser,W=$.json,Z=W.textures[J];if(!Z.extensions||!Z.extensions[Q])return null;let K=Z.extensions[Q],H=W.images[K.source],Y=$.textureLoader;if(H.uri){let X=$.options.manager.getHandler(H.uri);if(X!==null)Y=X}return $.loadTextureImage(J,K.source,Y)}}class EH{constructor(J,Q){this.name=Q,this.parser=J}loadBufferView(J){let Q=this.parser.json,$=Q.bufferViews[J];if($.extensions&&$.extensions[this.name]){let W=$.extensions[this.name],Z=this.parser.getDependency("buffer",W.buffer),K=this.parser.options.meshoptDecoder;if(!K||!K.supported)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return Z.then(function(H){let Y=W.byteOffset||0,X=W.byteLength||0,U=W.count,G=W.byteStride,E=new Uint8Array(H,Y,X);if(K.decodeGltfBufferAsync)return K.decodeGltfBufferAsync(U,G,E,W.mode,W.filter).then(function(N){return N.buffer});else return K.ready.then(function(){let N=new ArrayBuffer(U*G);return K.decodeGltfBuffer(new Uint8Array(N),U,G,E,W.mode,W.filter),N})})}else return null}}class sU{constructor(J){this.name=qJ.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let Q=this.parser.json,$=Q.nodes[J];if(!$.extensions||!$.extensions[this.name]||$.mesh===void 0)return null;let W=Q.meshes[$.mesh];for(let X of W.primitives)if(X.mode!==r8.TRIANGLES&&X.mode!==r8.TRIANGLE_STRIP&&X.mode!==r8.TRIANGLE_FAN&&X.mode!==void 0)return null;let K=$.extensions[this.name].attributes,H=[],Y={};for(let X in K)H.push(this.parser.getDependency("accessor",K[X]).then((U)=>{return Y[X]=U,Y[X]}));if(H.length<1)return null;return H.push(this.parser.createNodeMesh(J)),Promise.all(H).then((X)=>{let U=X.pop(),G=U.isGroup?U.children:[U],E=X[0].count,N=[];for(let F of G){let q=new n0,V=new T,O=new VJ,R=new T(1,1,1),z=new G7(F.geometry,F.material,E);for(let L=0;L<E;L++){if(Y.TRANSLATION)V.fromBufferAttribute(Y.TRANSLATION,L);if(Y.ROTATION)O.fromBufferAttribute(Y.ROTATION,L);if(Y.SCALE)R.fromBufferAttribute(Y.SCALE,L);z.setMatrixAt(L,q.compose(V,O,R))}let D=null;for(let L in Y)if(L==="_COLOR_0"){let M=Y[L];z.instanceColor=new $7(M.array,M.itemSize,M.normalized)}else if(L!=="TRANSLATION"&&L!=="ROTATION"&&L!=="SCALE"){if(D===null){let I=z.geometry;D=new yJ,D.name=I.name;for(let w in I.attributes)D.setAttribute(w,I.attributes[w]);for(let w in I.morphAttributes)D.morphAttributes[w]=I.morphAttributes[w];if(I.index!==null)D.setIndex(I.index);D.morphTargetsRelative=I.morphTargetsRelative;for(let w of I.groups)D.addGroup(w.start,w.count,w.materialIndex);if(I.boundingBox!==null)D.boundingBox=I.boundingBox.clone();if(I.boundingSphere!==null)D.boundingSphere=I.boundingSphere.clone();D.drawRange.start=I.drawRange.start,D.drawRange.count=I.drawRange.count,D.userData=Object.assign({},I.userData),z.geometry=D}let M=Y[L];D.setAttribute(L,new $7(M.array,M.itemSize,M.normalized))}IJ.prototype.copy.call(z,F),this.parser.assignFinalMaterial(z),N.push(z)}if(U.isGroup)return U.clear(),U.add(...N),U;return N[0]})}}var iU="glTF",Y$=12,AU={JSON:1313821514,BIN:5130562};class oU{constructor(J){this.name=qJ.KHR_BINARY_GLTF,this.content=null,this.body=null;let Q=new DataView(J,0,Y$),$=new TextDecoder;if(this.header={magic:$.decode(new Uint8Array(J.slice(0,4))),version:Q.getUint32(4,!0),length:Q.getUint32(8,!0)},this.header.magic!==iU)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let W=this.header.length-Y$,Z=new DataView(J,Y$),K=0;while(K<W){let H=Z.getUint32(K,!0);K+=4;let Y=Z.getUint32(K,!0);if(K+=4,Y===AU.JSON){let X=new Uint8Array(J,Y$+K,H);this.content=$.decode(X)}else if(Y===AU.BIN){let X=Y$+K;this.body=J.slice(X,X+H)}K+=H}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class aU{constructor(J,Q){if(!Q)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qJ.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=Q,this.dracoLoader.preload()}decodePrimitive(J,Q){let $=this.json,W=this.dracoLoader,Z=J.extensions[this.name].bufferView,K=J.extensions[this.name].attributes,H={},Y={},X={};for(let U in K){let G=FH[U]||U.toLowerCase();H[G]=K[U]}for(let U in J.attributes){let G=FH[U]||U.toLowerCase();if(K[U]!==void 0){let E=$.accessors[J.attributes[U]],N=a6[E.componentType];X[G]=N.name,Y[G]=E.normalized===!0}}return Q.getDependency("bufferView",Z).then(function(U){return new Promise(function(G,E){W.decodeDracoFile(U,function(N){for(let F in N.attributes){let q=N.attributes[F],V=Y[F];if(V!==void 0)q.normalized=V}G(N)},H,X,g8,E)})})}}class rU{constructor(){this.name=qJ.KHR_TEXTURE_TRANSFORM}extendTexture(J,Q){if((Q.texCoord===void 0||Q.texCoord===J.channel)&&Q.offset===void 0&&Q.rotation===void 0&&Q.scale===void 0)return J;if(J=J.clone(),Q.texCoord!==void 0)J.channel=Q.texCoord;if(Q.offset!==void 0)J.offset.fromArray(Q.offset);if(Q.rotation!==void 0)J.rotation=Q.rotation;if(Q.scale!==void 0)J.repeat.fromArray(Q.scale);if(Q.rotation!==void 0){let $=Math.cos(J.rotation),W=Math.sin(J.rotation);J.matrix.set(J.repeat.x*$,J.repeat.y*W,J.offset.x,-J.repeat.x*W,J.repeat.y*$,J.offset.y,0,0,1),J.matrixAutoUpdate=!1}return J.needsUpdate=!0,J}}class tU{constructor(){this.name=qJ.KHR_MESH_QUANTIZATION}}class RH extends u9{constructor(J,Q,$,W){super(J,Q,$,W)}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,W=this.valueSize,Z=J*W*3+W;for(let K=0;K!==W;K++)Q[K]=$[Z+K];return Q}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=H*2,X=H*3,U=W-Q,G=($-Q)/U,E=G*G,N=E*G,F=J*X,q=F-X,V=-2*N+3*E,O=N-E,R=1-V,z=O-E+G;for(let D=0;D!==H;D++){let L=K[q+D+H],M=K[q+D+Y]*U,I=K[F+D+H],w=K[F+D]*U;Z[D]=R*L+z*M+V*I+O*w}return Z}}var iq=new VJ;class eU extends RH{interpolate_(J,Q,$,W){let Z=super.interpolate_(J,Q,$,W);return iq.fromArray(Z).normalize().toArray(Z),Z}}var r8={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},a6={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_U={9728:U9,9729:G8,9984:ZW,9985:h6,9986:h7,9987:M9},TU={33071:f6,33648:WW,10497:H7},UH={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},FH={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},B7={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},oq={CUBICSPLINE:void 0,LINEAR:NW,STEP:DK},GH={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function aq(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new JJ({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:K7});return J.DefaultMaterial}function i7(J,Q,$){for(let W in $.extensions)if(J[W]===void 0)Q.userData.gltfExtensions=Q.userData.gltfExtensions||{},Q.userData.gltfExtensions[W]=$.extensions[W]}function I9(J,Q){if(Q.extras!==void 0)if(typeof Q.extras==="object")Object.assign(J.userData,Q.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+Q.extras)}function rq(J,Q,$){let W=!1,Z=!1,K=!1;for(let U=0,G=Q.length;U<G;U++){let E=Q[U];if(E.POSITION!==void 0)W=!0;if(E.NORMAL!==void 0)Z=!0;if(E.COLOR_0!==void 0)K=!0;if(W&&Z&&K)break}if(!W&&!Z&&!K)return Promise.resolve(J);let H=[],Y=[],X=[];for(let U=0,G=Q.length;U<G;U++){let E=Q[U];if(W){let N=E.POSITION!==void 0?$.getDependency("accessor",E.POSITION):J.attributes.position;H.push(N)}if(Z){let N=E.NORMAL!==void 0?$.getDependency("accessor",E.NORMAL):J.attributes.normal;Y.push(N)}if(K){let N=E.COLOR_0!==void 0?$.getDependency("accessor",E.COLOR_0):J.attributes.color;X.push(N)}}return Promise.all([Promise.all(H),Promise.all(Y),Promise.all(X)]).then(function(U){let G=U[0],E=U[1],N=U[2];if(W)J.morphAttributes.position=G;if(Z)J.morphAttributes.normal=E;if(K)J.morphAttributes.color=N;return J.morphTargetsRelative=!0,J})}function tq(J,Q){if(J.updateMorphTargets(),Q.weights!==void 0)for(let $=0,W=Q.weights.length;$<W;$++)J.morphTargetInfluences[$]=Q.weights[$];if(Q.extras&&Array.isArray(Q.extras.targetNames)){let $=Q.extras.targetNames;if(J.morphTargetInfluences.length===$.length){J.morphTargetDictionary={};for(let W=0,Z=$.length;W<Z;W++)J.morphTargetDictionary[$[W]]=W}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function eq(J){let Q,$=J.extensions&&J.extensions[qJ.KHR_DRACO_MESH_COMPRESSION];if($)Q="draco:"+$.bufferView+":"+$.indices+":"+NH($.attributes);else Q=J.indices+":"+NH(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let W=0,Z=J.targets.length;W<Z;W++)Q+=":"+NH(J.targets[W]);return Q}function NH(J){let Q="",$=Object.keys(J).sort();for(let W=0,Z=$.length;W<Z;W++)Q+=$[W]+":"+J[$[W]]+";";return Q}function qH(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function JO(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var QO=new n0;class J5{constructor(J={},Q={}){this.json=J,this.extensions={},this.plugins={},this.options=Q,this.cache=new sq,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let $=!1,W=-1,Z=!1,K=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let H=navigator.userAgent;$=/^((?!chrome|android).)*safari/i.test(H)===!0;let Y=H.match(/Version\/(\d+)/);W=$&&Y?parseInt(Y[1],10):-1,Z=H.indexOf("Firefox")>-1,K=Z?H.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||$&&W<17||Z&&K<98)this.textureLoader=new TW(this.options.manager);else this.textureLoader=new jW(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new rQ(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,Q){let $=this,W=this.json,Z=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(K){return K._markDefs&&K._markDefs()}),Promise.all(this._invokeAll(function(K){return K.beforeRoot&&K.beforeRoot()})).then(function(){return Promise.all([$.getDependencies("scene"),$.getDependencies("animation"),$.getDependencies("camera")])}).then(function(K){let H={scene:K[0][W.scene||0],scenes:K[0],animations:K[1],cameras:K[2],asset:W.asset,parser:$,userData:{}};return i7(Z,H,W),I9(H,W),Promise.all($._invokeAll(function(Y){return Y.afterRoot&&Y.afterRoot(H)})).then(function(){for(let Y of H.scenes)Y.updateMatrixWorld();J(H)})}).catch(Q)}_markDefs(){let J=this.json.nodes||[],Q=this.json.skins||[],$=this.json.meshes||[];for(let W=0,Z=Q.length;W<Z;W++){let K=Q[W].joints;for(let H=0,Y=K.length;H<Y;H++)J[K[H]].isBone=!0}for(let W=0,Z=J.length;W<Z;W++){let K=J[W];if(K.mesh!==void 0){if(this._addNodeRef(this.meshCache,K.mesh),K.skin!==void 0)$[K.mesh].isSkinnedMesh=!0}if(K.camera!==void 0)this._addNodeRef(this.cameraCache,K.camera)}}_addNodeRef(J,Q){if(Q===void 0)return;if(J.refs[Q]===void 0)J.refs[Q]=J.uses[Q]=0;J.refs[Q]++}_getNodeRef(J,Q,$){if(J.refs[Q]<=1)return $;let W=$.clone(),Z=(K,H)=>{let Y=this.associations.get(K);if(Y!=null)this.associations.set(H,Y);for(let[X,U]of K.children.entries())Z(U,H.children[X])};return Z($,W),W.name+="_instance_"+J.uses[Q]++,W}_invokeOne(J){let Q=Object.values(this.plugins);Q.push(this);for(let $=0;$<Q.length;$++){let W=J(Q[$]);if(W)return W}return null}_invokeAll(J){let Q=Object.values(this.plugins);Q.unshift(this);let $=[];for(let W=0;W<Q.length;W++){let Z=J(Q[W]);if(Z)$.push(Z)}return $}getDependency(J,Q){let $=J+":"+Q,W=this.cache.get($);if(!W){switch(J){case"scene":W=this.loadScene(Q);break;case"node":W=this._invokeOne(function(Z){return Z.loadNode&&Z.loadNode(Q)});break;case"mesh":W=this._invokeOne(function(Z){return Z.loadMesh&&Z.loadMesh(Q)});break;case"accessor":W=this.loadAccessor(Q);break;case"bufferView":W=this._invokeOne(function(Z){return Z.loadBufferView&&Z.loadBufferView(Q)});break;case"buffer":W=this.loadBuffer(Q);break;case"material":W=this._invokeOne(function(Z){return Z.loadMaterial&&Z.loadMaterial(Q)});break;case"texture":W=this._invokeOne(function(Z){return Z.loadTexture&&Z.loadTexture(Q)});break;case"skin":W=this.loadSkin(Q);break;case"animation":W=this._invokeOne(function(Z){return Z.loadAnimation&&Z.loadAnimation(Q)});break;case"camera":W=this.loadCamera(Q);break;default:if(W=this._invokeOne(function(Z){return Z!=this&&Z.getDependency&&Z.getDependency(J,Q)}),!W)throw Error("Unknown type: "+J);break}this.cache.add($,W)}return W}getDependencies(J){let Q=this.cache.get(J);if(!Q){let $=this,W=this.json[J+(J==="mesh"?"es":"s")]||[];Q=Promise.all(W.map(function(Z,K){return $.getDependency(J,K)})),this.cache.add(J,Q)}return Q}loadBuffer(J){let Q=this.json.buffers[J],$=this.fileLoader;if(Q.type&&Q.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+Q.type+" buffer type is not supported.");if(Q.uri===void 0&&J===0)return Promise.resolve(this.extensions[qJ.KHR_BINARY_GLTF].body);let W=this.options;return new Promise(function(Z,K){$.load(D7.resolveURL(Q.uri,W.path),Z,void 0,function(){K(Error('THREE.GLTFLoader: Failed to load buffer "'+Q.uri+'".'))})})}loadBufferView(J){let Q=this.json.bufferViews[J];return this.getDependency("buffer",Q.buffer).then(function($){let W=Q.byteLength||0,Z=Q.byteOffset||0;return $.slice(Z,Z+W)})}loadAccessor(J){let Q=this,$=this.json,W=this.json.accessors[J];if(W.bufferView===void 0&&W.sparse===void 0){let K=UH[W.type],H=a6[W.componentType],Y=W.normalized===!0,X=new H(W.count*K);return Promise.resolve(new sJ(X,K,Y))}let Z=[];if(W.bufferView!==void 0)Z.push(this.getDependency("bufferView",W.bufferView));else Z.push(null);if(W.sparse!==void 0)Z.push(this.getDependency("bufferView",W.sparse.indices.bufferView)),Z.push(this.getDependency("bufferView",W.sparse.values.bufferView));return Promise.all(Z).then(function(K){let H=K[0],Y=UH[W.type],X=a6[W.componentType],U=X.BYTES_PER_ELEMENT,G=U*Y,E=W.byteOffset||0,N=W.bufferView!==void 0?$.bufferViews[W.bufferView].byteStride:void 0,F=W.normalized===!0,q,V;if(N&&N!==G){let O=Math.floor(E/N),R="InterleavedBuffer:"+W.bufferView+":"+W.componentType+":"+O+":"+W.count,z=Q.cache.get(R);if(!z)q=new X(H,O*N,W.count*N/U),z=new p6(q,N/U),Q.cache.add(R,z);V=new Q7(z,Y,E%N/U,F)}else{if(H===null)q=new X(W.count*Y);else q=new X(H,E,W.count*Y);V=new sJ(q,Y,F)}if(W.sparse!==void 0){let O=UH.SCALAR,R=a6[W.sparse.indices.componentType],z=W.sparse.indices.byteOffset||0,D=W.sparse.values.byteOffset||0,L=new R(K[1],z,W.sparse.count*O),M=new X(K[2],D,W.sparse.count*Y);if(H!==null)V=new sJ(V.array.slice(),V.itemSize,V.normalized);V.normalized=!1;for(let I=0,w=L.length;I<w;I++){let B=L[I];if(V.setX(B,M[I*Y]),Y>=2)V.setY(B,M[I*Y+1]);if(Y>=3)V.setZ(B,M[I*Y+2]);if(Y>=4)V.setW(B,M[I*Y+3]);if(Y>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}V.normalized=F}return V})}loadTexture(J){let Q=this.json,$=this.options,Z=Q.textures[J].source,K=Q.images[Z],H=this.textureLoader;if(K.uri){let Y=$.manager.getHandler(K.uri);if(Y!==null)H=Y}return this.loadTextureImage(J,Z,H)}loadTextureImage(J,Q,$){let W=this,Z=this.json,K=Z.textures[J],H=Z.images[Q],Y=(H.uri||H.bufferView)+":"+K.sampler;if(this.textureCache[Y])return this.textureCache[Y];let X=this.loadImageSource(Q,$).then(function(U){if(U.flipY=!1,U.name=K.name||H.name||"",U.name===""&&typeof H.uri==="string"&&H.uri.startsWith("data:image/")===!1)U.name=H.uri;let E=(Z.samplers||{})[K.sampler]||{};return U.magFilter=_U[E.magFilter]||G8,U.minFilter=_U[E.minFilter]||M9,U.wrapS=TU[E.wrapS]||H7,U.wrapT=TU[E.wrapT]||H7,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==U9&&U.minFilter!==G8,W.associations.set(U,{textures:J}),U}).catch(function(){return null});return this.textureCache[Y]=X,X}loadImageSource(J,Q){let $=this,W=this.json,Z=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((G)=>G.clone());let K=W.images[J],H=self.URL||self.webkitURL,Y=K.uri||"",X=!1;if(K.bufferView!==void 0)Y=$.getDependency("bufferView",K.bufferView).then(function(G){X=!0;let E=new Blob([G],{type:K.mimeType});return Y=H.createObjectURL(E),Y});else if(K.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let U=Promise.resolve(Y).then(function(G){return new Promise(function(E,N){let F=E;if(Q.isImageBitmapLoader===!0)F=function(q){let V=new oJ(q);V.needsUpdate=!0,E(V)};Q.load(D7.resolveURL(G,Z.path),F,void 0,N)})}).then(function(G){if(X===!0)H.revokeObjectURL(Y);return I9(G,K),G.userData.mimeType=K.mimeType||JO(K.uri),G}).catch(function(G){throw console.error("THREE.GLTFLoader: Couldn't load texture",Y),G});return this.sourceCache[J]=U,U}assignTexture(J,Q,$,W){let Z=this;return this.getDependency("texture",$.index).then(function(K){if(!K)return null;if($.texCoord!==void 0&&$.texCoord>0)K=K.clone(),K.channel=$.texCoord;if(Z.extensions[qJ.KHR_TEXTURE_TRANSFORM]){let H=$.extensions!==void 0?$.extensions[qJ.KHR_TEXTURE_TRANSFORM]:void 0;if(H){let Y=Z.associations.get(K);K=Z.extensions[qJ.KHR_TEXTURE_TRANSFORM].extendTexture(K,H),Z.associations.set(K,Y)}}if(W!==void 0)K.colorSpace=W;return J[Q]=K,K})}assignFinalMaterial(J){let{geometry:Q,material:$}=J,W=Q.attributes.tangent===void 0,Z=Q.attributes.color!==void 0,K=Q.attributes.normal===void 0;if(J.isPoints){let H="PointsMaterial:"+$.uuid,Y=this.cache.get(H);if(!Y)Y=new u7,j8.prototype.copy.call(Y,$),Y.color.copy($.color),Y.map=$.map,Y.sizeAttenuation=!1,this.cache.add(H,Y);$=Y}else if(J.isLine){let H="LineBasicMaterial:"+$.uuid,Y=this.cache.get(H);if(!Y)Y=new dQ,j8.prototype.copy.call(Y,$),Y.color.copy($.color),Y.map=$.map,this.cache.add(H,Y);$=Y}if(W||Z||K){let H="ClonedMaterial:"+$.uuid+":";if(W)H+="derivative-tangents:";if(Z)H+="vertex-colors:";if(K)H+="flat-shading:";let Y=this.cache.get(H);if(!Y){if(Y=$.clone(),Z)Y.vertexColors=!0;if(K)Y.flatShading=!0;if(W){if(Y.normalScale)Y.normalScale.y*=-1;if(Y.clearcoatNormalScale)Y.clearcoatNormalScale.y*=-1}this.cache.add(H,Y),this.associations.set(Y,this.associations.get($))}$=Y}J.material=$}getMaterialType(){return JJ}loadMaterial(J){let Q=this,$=this.json,W=this.extensions,Z=$.materials[J],K,H={},Y=Z.extensions||{},X=[];if(Y[qJ.KHR_MATERIALS_UNLIT]){let G=W[qJ.KHR_MATERIALS_UNLIT];K=G.getMaterialType(),X.push(G.extendParams(H,Z,Q))}else{let G=Z.pbrMetallicRoughness||{};if(H.color=new y0(1,1,1),H.opacity=1,Array.isArray(G.baseColorFactor)){let E=G.baseColorFactor;H.color.setRGB(E[0],E[1],E[2],g8),H.opacity=E[3]}if(G.baseColorTexture!==void 0)X.push(Q.assignTexture(H,"map",G.baseColorTexture,D8));if(H.metalness=G.metallicFactor!==void 0?G.metallicFactor:1,H.roughness=G.roughnessFactor!==void 0?G.roughnessFactor:1,G.metallicRoughnessTexture!==void 0)X.push(Q.assignTexture(H,"metalnessMap",G.metallicRoughnessTexture)),X.push(Q.assignTexture(H,"roughnessMap",G.metallicRoughnessTexture));K=this._invokeOne(function(E){return E.getMaterialType&&E.getMaterialType(J)}),X.push(Promise.all(this._invokeAll(function(E){return E.extendMaterialParams&&E.extendMaterialParams(J,H)})))}if(Z.doubleSided===!0)H.side=J8;let U=Z.alphaMode||GH.OPAQUE;if(U===GH.BLEND)H.transparent=!0,H.depthWrite=!1;else if(H.transparent=!1,U===GH.MASK)H.alphaTest=Z.alphaCutoff!==void 0?Z.alphaCutoff:0.5;if(Z.normalTexture!==void 0&&K!==mJ){if(X.push(Q.assignTexture(H,"normalMap",Z.normalTexture)),H.normalScale=new $0(1,1),Z.normalTexture.scale!==void 0){let G=Z.normalTexture.scale;H.normalScale.set(G,G)}}if(Z.occlusionTexture!==void 0&&K!==mJ){if(X.push(Q.assignTexture(H,"aoMap",Z.occlusionTexture)),Z.occlusionTexture.strength!==void 0)H.aoMapIntensity=Z.occlusionTexture.strength}if(Z.emissiveFactor!==void 0&&K!==mJ){let G=Z.emissiveFactor;H.emissive=new y0().setRGB(G[0],G[1],G[2],g8)}if(Z.emissiveTexture!==void 0&&K!==mJ)X.push(Q.assignTexture(H,"emissiveMap",Z.emissiveTexture,D8));return Promise.all(X).then(function(){let G=new K(H);if(Z.name)G.name=Z.name;if(I9(G,Z),Q.associations.set(G,{materials:J}),Z.extensions)i7(W,G,Z);return G})}createUniqueName(J){let Q=MJ.sanitizeNodeName(J||"");if(Q in this.nodeNamesUsed)return Q+"_"+ ++this.nodeNamesUsed[Q];else return this.nodeNamesUsed[Q]=0,Q}loadGeometries(J){let Q=this,$=this.extensions,W=this.primitiveCache;function Z(H){return $[qJ.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(H,Q).then(function(Y){return wU(Y,H,Q)})}let K=[];for(let H=0,Y=J.length;H<Y;H++){let X=J[H],U=eq(X),G=W[U];if(G)K.push(G.promise);else{let E;if(X.extensions&&X.extensions[qJ.KHR_DRACO_MESH_COMPRESSION])E=Z(X);else E=wU(new yJ,X,Q);if(X.mode===r8.TRIANGLE_STRIP)E=E.then((N)=>XH(N,bQ));else if(X.mode===r8.TRIANGLE_FAN)E=E.then((N)=>XH(N,x6));W[U]={primitive:X,promise:E},K.push(E)}}return Promise.all(K)}loadMesh(J){let Q=this,$=this.json,W=this.extensions,Z=$.meshes[J],K=Z.primitives,H=[];for(let Y=0,X=K.length;Y<X;Y++){let U=K[Y].material===void 0?aq(this.cache):this.getDependency("material",K[Y].material);H.push(U)}return H.push(Q.loadGeometries(K)),Promise.all(H).then(async function(Y){let X=Y.slice(0,Y.length-1),U=Y[Y.length-1],G=[];for(let N=0,F=U.length;N<F;N++){let q=U[N],V=K[N],O,R=X[N];if(V.mode===r8.TRIANGLES||V.mode===r8.TRIANGLE_STRIP||V.mode===r8.TRIANGLE_FAN||V.mode===void 0){let z=Z.isSkinnedMesh===!0,D=q.hasAttribute("skinIndex")&&q.hasAttribute("skinWeight");if(z&&D===!1)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(O=z&&D?new VW(q,R):new C0(q,R),O.isSkinnedMesh===!0)O.normalizeSkinWeights()}else if(V.mode===r8.LINES)O=new DW(q,R);else if(V.mode===r8.LINE_STRIP)O=new l6(q,R);else if(V.mode===r8.LINE_LOOP)O=new BW(q,R);else if(V.mode===r8.POINTS)O=new u6(q,R);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+V.mode);if(Object.keys(O.geometry.morphAttributes).length>0)tq(O,Z);if(O.name=Q.createUniqueName(Z.name||"mesh_"+J),I9(O,Z),V.extensions)i7(W,O,V);Q.assignFinalMaterial(O),G.push(O)}for(let N=0,F=G.length;N<F;N++)Q.associations.set(G[N],{meshes:J,primitives:N});if(G.length===1){if(Z.extensions)i7(W,G[0],Z);return G[0]}let E=new _J;if(Z.extensions)i7(W,E,Z);Q.associations.set(E,{meshes:J});for(let N=0,F=G.length;N<F;N++)E.add(G[N]);return E})}loadCamera(J){let Q,$=this.json.cameras[J],W=$[$.type];if(!W){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if($.type==="perspective")Q=new Z8(X7.radToDeg(W.yfov),W.aspectRatio||1,W.znear||1,W.zfar||2000000);else if($.type==="orthographic")Q=new n9(-W.xmag,W.xmag,W.ymag,-W.ymag,W.znear,W.zfar);if($.name)Q.name=this.createUniqueName($.name);return I9(Q,$),Promise.resolve(Q)}loadSkin(J){let Q=this.json.skins[J],$=[];for(let W=0,Z=Q.joints.length;W<Z;W++)$.push(this._loadNodeShallow(Q.joints[W]));if(Q.inverseBindMatrices!==void 0)$.push(this.getDependency("accessor",Q.inverseBindMatrices));else $.push(null);return Promise.all($).then(function(W){let Z=W.pop(),K=W,H=[],Y=[];for(let X=0,U=K.length;X<U;X++){let G=K[X];if(G){H.push(G);let E=new n0;if(Z!==null)E.fromArray(Z.array,X*16);Y.push(E)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',Q.joints[X])}return new lQ(H,Y)})}loadAnimation(J){let Q=this.json,$=this,W=Q.animations[J],Z=W.name?W.name:"animation_"+J,K=[],H=[],Y=[],X=[],U=[];for(let G=0,E=W.channels.length;G<E;G++){let N=W.channels[G],F=W.samplers[N.sampler],q=N.target,V=q.node,O=W.parameters!==void 0?W.parameters[F.input]:F.input,R=W.parameters!==void 0?W.parameters[F.output]:F.output;if(q.node===void 0)continue;K.push(this.getDependency("node",V)),H.push(this.getDependency("accessor",O)),Y.push(this.getDependency("accessor",R)),X.push(F),U.push(q)}return Promise.all([Promise.all(K),Promise.all(H),Promise.all(Y),Promise.all(X),Promise.all(U)]).then(function(G){let E=G[0],N=G[1],F=G[2],q=G[3],V=G[4],O=[];for(let z=0,D=E.length;z<D;z++){let L=E[z],M=N[z],I=F[z],w=q[z],B=V[z];if(L===void 0)continue;if(L.updateMatrix)L.updateMatrix();let _=$._createAnimationTracks(L,M,I,w,B);if(_)for(let d=0;d<_.length;d++)O.push(_[d])}let R=new S6(Z,void 0,O);return I9(R,W),R})}createNodeMesh(J){let Q=this.json,$=this,W=Q.nodes[J];if(W.mesh===void 0)return null;return $.getDependency("mesh",W.mesh).then(function(Z){let K=$._getNodeRef($.meshCache,W.mesh,Z);if(W.weights!==void 0)K.traverse(function(H){if(!H.isMesh)return;for(let Y=0,X=W.weights.length;Y<X;Y++)H.morphTargetInfluences[Y]=W.weights[Y]});return K})}loadNode(J){let Q=this.json,$=this,W=Q.nodes[J],Z=$._loadNodeShallow(J),K=[],H=W.children||[];for(let X=0,U=H.length;X<U;X++)K.push($.getDependency("node",H[X]));let Y=W.skin===void 0?Promise.resolve(null):$.getDependency("skin",W.skin);return Promise.all([Z,Promise.all(K),Y]).then(function(X){let U=X[0],G=X[1],E=X[2];if(E!==null)U.traverse(function(N){if(!N.isSkinnedMesh)return;N.bind(E,QO)});for(let N=0,F=G.length;N<F;N++)U.add(G[N]);if(U.userData.pivot!==void 0&&G.length>0){let N=U.userData.pivot,F=G[0];U.pivot=new T().fromArray(N),U.position.x-=N[0],U.position.y-=N[1],U.position.z-=N[2],F.position.set(0,0,0),delete U.userData.pivot}return U})}_loadNodeShallow(J){let Q=this.json,$=this.extensions,W=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let Z=Q.nodes[J],K=Z.name?W.createUniqueName(Z.name):"",H=[],Y=W._invokeOne(function(X){return X.createNodeMesh&&X.createNodeMesh(J)});if(Y)H.push(Y);if(Z.camera!==void 0)H.push(W.getDependency("camera",Z.camera).then(function(X){return W._getNodeRef(W.cameraCache,Z.camera,X)}));return W._invokeAll(function(X){return X.createNodeAttachment&&X.createNodeAttachment(J)}).forEach(function(X){H.push(X)}),this.nodeCache[J]=Promise.all(H).then(function(X){let U;if(Z.isBone===!0)U=new pQ;else if(X.length>1)U=new _J;else if(X.length===1)U=X[0];else U=new IJ;if(U!==X[0])for(let G=0,E=X.length;G<E;G++)U.add(X[G]);if(Z.name)U.userData.name=Z.name,U.name=K;if(I9(U,Z),Z.extensions)i7($,U,Z);if(Z.matrix!==void 0){let G=new n0;G.fromArray(Z.matrix),U.applyMatrix4(G)}else{if(Z.translation!==void 0)U.position.fromArray(Z.translation);if(Z.rotation!==void 0)U.quaternion.fromArray(Z.rotation);if(Z.scale!==void 0)U.scale.fromArray(Z.scale)}if(!W.associations.has(U))W.associations.set(U,{});else if(Z.mesh!==void 0&&W.meshCache.refs[Z.mesh]>1){let G=W.associations.get(U);W.associations.set(U,{...G})}return W.associations.get(U).nodes=J,U}),this.nodeCache[J]}loadScene(J){let Q=this.extensions,$=this.json.scenes[J],W=this,Z=new _J;if($.name)Z.name=W.createUniqueName($.name);if(I9(Z,$),$.extensions)i7(Q,Z,$);let K=$.nodes||[],H=[];for(let Y=0,X=K.length;Y<X;Y++)H.push(W.getDependency("node",K[Y]));return Promise.all(H).then(function(Y){for(let U=0,G=Y.length;U<G;U++){let E=Y[U];if(E.parent!==null)Z.add(mW(E));else Z.add(E)}let X=(U)=>{let G=new Map;for(let[E,N]of W.associations)if(E instanceof j8||E instanceof oJ)G.set(E,N);return U.traverse((E)=>{let N=W.associations.get(E);if(N!=null)G.set(E,N)}),G};return W.associations=X(Z),Z})}_createAnimationTracks(J,Q,$,W,Z){let K=[],H=J.name?J.name:J.uuid,Y=[];function X(N){if(N.morphTargetInfluences)Y.push(N.name?N.name:N.uuid)}if(B7[Z.path]===B7.weights){if(X(J),J.isGroup)J.children.forEach(X)}else Y.push(H);let U;switch(B7[Z.path]){case B7.weights:U=R7;break;case B7.rotation:U=L7;break;case B7.translation:case B7.scale:U=n7;break;default:switch($.itemSize){case 1:U=R7;break;case 2:case 3:default:U=n7;break}break}let G=W.interpolation!==void 0?oq[W.interpolation]:NW,E=this._getArrayFromAccessor($);for(let N=0,F=Y.length;N<F;N++){let q=new U(Y[N]+"."+B7[Z.path],Q.array,E,G);if(W.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(q);K.push(q)}return K}_getArrayFromAccessor(J){let Q=J.array;if(J.normalized){let $=qH(Q.constructor),W=new Float32Array(Q.length);for(let Z=0,K=Q.length;Z<K;Z++)W[Z]=Q[Z]*$;Q=W}return Q}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function($){return new(this instanceof L7?eU:RH)(this.times,this.values,this.getValueSize()/3,$)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function $O(J,Q,$){let W=Q.attributes,Z=new z8;if(W.POSITION!==void 0){let Y=$.json.accessors[W.POSITION],X=Y.min,U=Y.max;if(X!==void 0&&U!==void 0){if(Z.set(new T(X[0],X[1],X[2]),new T(U[0],U[1],U[2])),Y.normalized){let G=qH(a6[Y.componentType]);Z.min.multiplyScalar(G),Z.max.multiplyScalar(G)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let K=Q.targets;if(K!==void 0){let Y=new T,X=new T;for(let U=0,G=K.length;U<G;U++){let E=K[U];if(E.POSITION!==void 0){let N=$.json.accessors[E.POSITION],F=N.min,q=N.max;if(F!==void 0&&q!==void 0){if(X.setX(Math.max(Math.abs(F[0]),Math.abs(q[0]))),X.setY(Math.max(Math.abs(F[1]),Math.abs(q[1]))),X.setZ(Math.max(Math.abs(F[2]),Math.abs(q[2]))),N.normalized){let V=qH(a6[N.componentType]);X.multiplyScalar(V)}Y.max(X)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}Z.expandByVector(Y)}J.boundingBox=Z;let H=new p8;Z.getCenter(H.center),H.radius=Z.min.distanceTo(Z.max)/2,J.boundingSphere=H}function wU(J,Q,$){let W=Q.attributes,Z=[];function K(H,Y){return $.getDependency("accessor",H).then(function(X){J.setAttribute(Y,X)})}for(let H in W){let Y=FH[H]||H.toLowerCase();if(Y in J.attributes)continue;Z.push(K(W[H],Y))}if(Q.indices!==void 0&&!J.index){let H=$.getDependency("accessor",Q.indices).then(function(Y){J.setIndex(Y)});Z.push(H)}if(KJ.workingColorSpace!==g8&&"COLOR_0"in W)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${KJ.workingColorSpace}" not supported.`);return I9(J,Q),$O(J,Q,$),Promise.all(Z).then(function(){return Q.targets!==void 0?rq(J,Q.targets,$):J})}var Q5={type:"change"},VH={type:"start"},W5={type:"end"},lW=new U7,$5=new s8,WO=Math.cos(70*X7.DEG2RAD),X8=new T,y8=2*Math.PI,vJ={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},LH=0.000001;class DH extends fW{constructor(J,Q=null){super(J,Q);if(this.state=vJ.NONE,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:W7.ROTATE,MIDDLE:W7.DOLLY,RIGHT:W7.PAN},this.touches={ONE:Z7.ROTATE,TWO:Z7.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new VJ,this._lastTargetPosition=new T,this._quat=new VJ().setFromUnitVectors(J.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new J$,this._sphericalDelta=new J$,this._scale=1,this._panOffset=new T,this._rotateStart=new $0,this._rotateEnd=new $0,this._rotateDelta=new $0,this._panStart=new $0,this._panEnd=new $0,this._panDelta=new $0,this._dollyStart=new $0,this._dollyEnd=new $0,this._dollyDelta=new $0,this._dollyDirection=new T,this._mouse=new $0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=KO.bind(this),this._onPointerDown=ZO.bind(this),this._onPointerUp=HO.bind(this),this._onContextMenu=FO.bind(this),this._onMouseWheel=UO.bind(this),this._onKeyDown=GO.bind(this),this._onTouchStart=NO.bind(this),this._onTouchMove=EO.bind(this),this._onMouseDown=YO.bind(this),this._onMouseMove=XO.bind(this),this._interceptControlDown=qO.bind(this),this._interceptControlUp=OO.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=vJ.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let J=this.domElement.getRootNode();J.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),J.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Q5),this.update(),this.state=vJ.NONE}pan(J,Q){this._pan(J,Q),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let Q=this.object.position;if(X8.copy(Q).sub(this.target),X8.applyQuaternion(this._quat),this._spherical.setFromVector3(X8),this.autoRotate&&this.state===vJ.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let $=this.minAzimuthAngle,W=this.maxAzimuthAngle;if(isFinite($)&&isFinite(W)){if($<-Math.PI)$+=y8;else if($>Math.PI)$-=y8;if(W<-Math.PI)W+=y8;else if(W>Math.PI)W-=y8;if($<=W)this._spherical.theta=Math.max($,Math.min(W,this._spherical.theta));else this._spherical.theta=this._spherical.theta>($+W)/2?Math.max($,this._spherical.theta):Math.min(W,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let Z=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let K=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),Z=K!=this._spherical.radius}if(X8.setFromSpherical(this._spherical),X8.applyQuaternion(this._quatInverse),Q.copy(this.target).add(X8),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let K=null;if(this.object.isPerspectiveCamera){let H=X8.length();K=this._clampDistance(H*this._scale);let Y=H-K;this.object.position.addScaledVector(this._dollyDirection,Y),this.object.updateMatrixWorld(),Z=!!Y}else if(this.object.isOrthographicCamera){let H=new T(this._mouse.x,this._mouse.y,0);H.unproject(this.object);let Y=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),Z=Y!==this.object.zoom;let X=new T(this._mouse.x,this._mouse.y,0);X.unproject(this.object),this.object.position.sub(X).add(H),this.object.updateMatrixWorld(),K=X8.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(K!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(K).add(this.object.position);else if(lW.origin.copy(this.object.position),lW.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(lW.direction))<WO)this.object.lookAt(this.target);else $5.setFromNormalAndCoplanarPoint(this.object.up,this.target),lW.intersectPlane($5,this.target)}else if(this.object.isOrthographicCamera){let K=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),K!==this.object.zoom)this.object.updateProjectionMatrix(),Z=!0}if(this._scale=1,this._performCursorZoom=!1,Z||this._lastPosition.distanceToSquared(this.object.position)>LH||8*(1-this._lastQuaternion.dot(this.object.quaternion))>LH||this._lastTargetPosition.distanceToSquared(this.target)>LH)return this.dispatchEvent(Q5),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return y8/60*this.autoRotateSpeed*J;else return y8/60/60*this.autoRotateSpeed}_getZoomScale(J){let Q=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*Q)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,Q){X8.setFromMatrixColumn(Q,0),X8.multiplyScalar(-J),this._panOffset.add(X8)}_panUp(J,Q){if(this.screenSpacePanning===!0)X8.setFromMatrixColumn(Q,1);else X8.setFromMatrixColumn(Q,0),X8.crossVectors(this.object.up,X8);X8.multiplyScalar(J),this._panOffset.add(X8)}_pan(J,Q){let $=this.domElement;if(this.object.isPerspectiveCamera){let W=this.object.position;X8.copy(W).sub(this.target);let Z=X8.length();Z*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*Z/$.clientHeight,this.object.matrix),this._panUp(2*Q*Z/$.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/$.clientWidth,this.object.matrix),this._panUp(Q*(this.object.top-this.object.bottom)/this.object.zoom/$.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,Q){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let $=this.domElement.getBoundingClientRect(),W=J-$.left,Z=Q-$.top,K=$.width,H=$.height;this._mouse.x=W/K*2-1,this._mouse.y=-(Z/H)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(y8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(y8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let Q=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(y8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);Q=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-y8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);Q=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(y8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);Q=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-y8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);Q=!0;break}if(Q)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),W=0.5*(J.pageY+Q.y);this._rotateStart.set($,W)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),W=0.5*(J.pageY+Q.y);this._panStart.set($,W)}}_handleTouchStartDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,W=J.pageY-Q.y,Z=Math.sqrt($*$+W*W);this._dollyStart.set(0,Z)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),W=0.5*(J.pageX+$.x),Z=0.5*(J.pageY+$.y);this._rotateEnd.set(W,Z)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(y8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(y8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),W=0.5*(J.pageY+Q.y);this._panEnd.set($,W)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,W=J.pageY-Q.y,Z=Math.sqrt($*$+W*W);this._dollyEnd.set(0,Z),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let K=(J.pageX+Q.x)*0.5,H=(J.pageY+Q.y)*0.5;this._updateZoomParameters(K,H)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId){this._pointers.splice(Q,1);return}}_isTrackingPointer(J){for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId)return!0;return!1}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new $0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q]}_customWheelEvent(J){let Q=J.deltaMode,$={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch(Q){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)$.deltaY*=10;return $}}function ZO(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function KO(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function HO(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(W5),this.state=vJ.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let Q=this._pointers[0],$=this._pointerPositions[Q];this._onTouchStart({pointerId:Q,pageX:$.x,pageY:$.y});break}}function YO(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case W7.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=vJ.DOLLY;break;case W7.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=vJ.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=vJ.ROTATE}break;case W7.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=vJ.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=vJ.PAN}break;default:this.state=vJ.NONE}if(this.state!==vJ.NONE)this.dispatchEvent(VH)}function XO(J){switch(this.state){case vJ.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case vJ.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case vJ.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function UO(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==vJ.NONE)return;J.preventDefault(),this.dispatchEvent(VH),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(W5)}function GO(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function NO(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case Z7.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=vJ.TOUCH_ROTATE;break;case Z7.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=vJ.TOUCH_PAN;break;default:this.state=vJ.NONE}break;case 2:switch(this.touches.TWO){case Z7.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=vJ.TOUCH_DOLLY_PAN;break;case Z7.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=vJ.TOUCH_DOLLY_ROTATE;break;default:this.state=vJ.NONE}break;default:this.state=vJ.NONE}if(this.state!==vJ.NONE)this.dispatchEvent(VH)}function EO(J){switch(this._trackPointer(J),this.state){case vJ.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case vJ.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case vJ.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case vJ.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=vJ.NONE}}function FO(J){if(this.enabled===!1)return;J.preventDefault()}function qO(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function OO(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var X$=new T;function t8(J,Q,$,W,Z,K){let H=2*Math.PI*Z/4,Y=Math.max(K-2*Z,0),X=Math.PI/4;X$.copy(Q),X$[W]=0,X$.normalize();let U=0.5*H/(H+Y),G=1-X$.angleTo(J)/X;if(Math.sign(X$[$])===1)return G*U;else return Y/(H+Y)+U+U*(1-G)}class k7 extends xJ{constructor(J=1,Q=1,$=1,W=2,Z=0.1){let K=W*2+1;Z=Math.min(J/2,Q/2,$/2,Z);super(1,1,1,K,K,K);if(this.type="RoundedBoxGeometry",this.parameters={width:J,height:Q,depth:$,segments:W,radius:Z},K===1)return;let H=this.toNonIndexed();this.index=null,this.attributes.position=H.attributes.position,this.attributes.normal=H.attributes.normal,this.attributes.uv=H.attributes.uv;let Y=new T,X=new T,U=new T(J,Q,$).divideScalar(2).subScalar(Z),G=this.attributes.position.array,E=this.attributes.normal.array,N=this.attributes.uv.array,F=G.length/6,q=new T,V=0.5/K;for(let O=0,R=0;O<G.length;O+=3,R+=2)switch(Y.fromArray(G,O),X.copy(Y),X.x-=Math.sign(X.x)*V,X.y-=Math.sign(X.y)*V,X.z-=Math.sign(X.z)*V,X.normalize(),G[O+0]=U.x*Math.sign(Y.x)+X.x*Z,G[O+1]=U.y*Math.sign(Y.y)+X.y*Z,G[O+2]=U.z*Math.sign(Y.z)+X.z*Z,E[O+0]=X.x,E[O+1]=X.y,E[O+2]=X.z,Math.floor(O/F)){case 0:q.set(1,0,0),N[R+0]=t8(q,X,"z","y",Z,$),N[R+1]=1-t8(q,X,"y","z",Z,Q);break;case 1:q.set(-1,0,0),N[R+0]=1-t8(q,X,"z","y",Z,$),N[R+1]=1-t8(q,X,"y","z",Z,Q);break;case 2:q.set(0,1,0),N[R+0]=1-t8(q,X,"x","z",Z,J),N[R+1]=t8(q,X,"z","x",Z,$);break;case 3:q.set(0,-1,0),N[R+0]=1-t8(q,X,"x","z",Z,J),N[R+1]=1-t8(q,X,"z","x",Z,$);break;case 4:q.set(0,0,1),N[R+0]=1-t8(q,X,"x","y",Z,J),N[R+1]=1-t8(q,X,"y","x",Z,Q);break;case 5:q.set(0,0,-1),N[R+0]=t8(q,X,"x","y",Z,J),N[R+1]=1-t8(q,X,"y","x",Z,Q);break}}static fromJSON(J){return new k7(J.width,J.height,J.depth,J.segments,J.radius)}}var G0={tableWidth:0.92,tableCenterY:0.724,tableThickness:0.09,feltWidth:0.78,feltCenterY:0.776,surfaceY:0.782,chairSeatY:0.51,chairSeatWidth:0.56,seatDistance:0.77,tileLength:0.054,tileWidth:0.027,tileThickness:0.011,tileGap:0.0016,pipRadius:0.0029,pipColumnSpacing:0.0064,pipRowSpacing:0.0074,rackRadius:0.418,rackSpacing:0.0305,neutralPoseTime:10.25,boardLimit:0.27},E9=[[0,G0.seatDistance,Math.PI],[-G0.seatDistance,0,Math.PI/2],[0,-G0.seatDistance,0],[G0.seatDistance,0,-Math.PI/2]];function kH(J){let Q=J.vertical?G0.tileWidth:G0.tileLength,$=J.vertical?G0.tileLength:G0.tileWidth;return{left:J.x-Q/2,right:J.x+Q/2,top:J.z-$/2,bottom:J.z+$/2}}var RO=G0.boardLimit,LO=G0.feltWidth/2-0.022;function MH(J,Q,$=RO){let W=kH(J);if(Math.max(Math.abs(W.left),Math.abs(W.right),Math.abs(W.top),Math.abs(W.bottom))>$+0.00000001)return!1;return Q.every((Z)=>{let K=kH(Z);return W.right<=K.left-0.0015||W.left>=K.right+0.0015||W.bottom<=K.top-0.0015||W.top>=K.bottom+0.0015})}function Z5(J,Q,$){let{tileLength:W,tileWidth:Z,tileGap:K}=G0,H=Q.x===Q.y,Y=(H?Z:W)/2,X=J.tile,U=[],G=[[J.dx,J.dz],[J.dz,-J.dx],[-J.dz,J.dx]];for(let E=0;E<G.length;E++){let[N,F]=G[E],q=E!==0,V=(X.isDouble?Z:W)/2,O=(X.isDouble?W:Z)/2,R=X.x+J.dx*(q?X.isDouble?0:W/4:V),z=X.z+J.dz*(q?X.isDouble?0:W/4:V),D=q?[0,W/8,-W/8]:[0];for(let L of D){let M=Math.atan2(-F,N)+($==="left"?Math.PI:0)+(H?Math.PI/2:0);U.push({id:Q.id,x:R+N*((q?O:0)+K+Y)+J.dx*L,z:z+F*((q?O:0)+K+Y)+J.dz*L,yaw:M,vertical:Math.abs(Math.sin(M))>0.5,isDouble:H,dx:N,dz:F,side:$})}}return U}function BH(J,Q,$,W){let Z={id:"future",x:0,y:W?0:1};return Z5({tile:J,dx:J.dx,dz:J.dz},Z,$).some((K)=>MH(K,Q))}function K5(J,Q=[]){return Y5(J,Q).placements}function H5(J,Q=[]){let $=Y5(J,Q);if(!$.ends)return[];return["left","right"].map((W)=>{let Z=$.ends[W],K=Z.tile,H=kH(K),Y=Math.abs(Z.dx)*(H.right-H.left)/2+Math.abs(Z.dz)*(H.bottom-H.top)/2,X=Y+0.013;return{x:K.x+Z.dx*X,z:K.z+Z.dz*X,dx:Z.dx,dz:Z.dz}})}function Y5(J,Q){if(J.length>28)throw Error("A double-six chain has at most 28 tiles.");if(!J.length)return{placements:[],ends:null};let $=new Map(J.map((N)=>[N.id,N])),W=Q.filter((N)=>N.type==="play"&&N.tile&&$.has(N.tile)),Z=$.get(W[0]?.tile||"")||J[0],K=J.findIndex((N)=>N.id===Z.id),H=Z.x===Z.y,Y={id:Z.id,x:0,z:0,yaw:H?Math.PI/2:0,vertical:H,isDouble:H,dx:1,dz:0,side:"root"},X=[Y],U=new Map([[Y.id,Y]]),G={left:{tile:Y,dx:-1,dz:0},right:{tile:Y,dx:1,dz:0}},E=W.length===J.length?W.slice(1):[...J.slice(0,K).reverse().map((N)=>({type:"play",tile:N.id,side:"left"})),...J.slice(K+1).map((N)=>({type:"play",tile:N.id,side:"right"}))];for(let N of E){let F=$.get(N.tile);if(U.has(F.id))continue;let q=N.side==="left"?"left":N.side==="right"?"right":J.findIndex((z)=>z.id===F.id)<K?"left":"right",V=Z5(G[q],F,q),O=V.filter((z)=>MH(z,X));if(!O.length)O=V.filter((z)=>MH(z,X,LO));let R=O.find((z)=>BH(z,[...X,z],q,!1)&&BH(z,[...X,z],q,!0))||O.find((z)=>BH(z,[...X,z],q,!1))||O[0];if(!R)throw Error(`No safe placement for ${F.id} after ${X.length} tiles`);X.push(R),U.set(F.id,R),G[q]={tile:R,dx:R.dx,dz:R.dz}}return{placements:J.map((N)=>U.get(N.id)),ends:G}}function X5(J,Q,$=!1){if($)return{breath:0,headYaw:0,headNod:0};let W=J*2.173+0.43;return{breath:0.0055*Math.sin(Q*(0.78+J*0.093)+W),headYaw:0.087*Math.sin(Q*(0.213+J*0.037)+W)+0.028*Math.sin(Q*(0.487+J*0.029)+W*1.91),headNod:0.009*Math.sin(Q*(0.267+J*0.035)+W*0.71)}}var U5=new T(1,0,0),q9=new T(0,1,0),CH=new VJ;function TH(J){let Q=[];return J.traverse(($)=>{if($.isBone)Q.push({bone:$,position:$.position.clone(),quaternion:$.quaternion.clone(),scale:$.scale.clone()})}),Q}var A9=new T,F9=new T,_9=new T,o7=new T,i9=new T,e8=new T,a7=new T,r7=new T,e7=new VJ,O9=new VJ,iW=new VJ,sW=new VJ,F$=(J)=>Math.min(1,Math.max(-1,J)),J6=(J,Q,$)=>Math.min($,Math.max(Q,J)),R9=(J)=>J*J*(3-2*J);function tJ(J,Q){J.getWorldQuaternion(O9),J.parent.getWorldQuaternion(iW),J.quaternion.copy(iW.invert()).multiply(Q).multiply(O9),J.updateMatrixWorld(!0)}var I8=new T,Q9=new T;function VO(J){J.holder.getWorldQuaternion(sW),I8.set(1,0,0).applyQuaternion(sW),Q9.set(0,0,1).applyQuaternion(sW)}function AH(J,Q,$,W,Z){return Z.set(Q,$,W).applyMatrix4(J.holder.matrixWorld)}function G5(J,Q,$,W){return W.set(J,Q,$).applyQuaternion(sW).normalize()}var DO=0.965;function BO(J,Q,$){let{brazo:W,antebrazo:Z,mano:K}=J;if(!W||!Z||!K||!W.parent||!Z.parent)return;W.getWorldPosition(A9),Z.getWorldPosition(F9),K.getWorldPosition(_9);let H=A9.distanceTo(F9),Y=F9.distanceTo(_9);if(H<0.00001||Y<0.00001)return;let X=J6(A9.distanceTo(Q),Math.abs(H-Y)+0.002,(H+Y)*DO);if(i9.subVectors(F9,A9),e8.subVectors(_9,F9),a7.crossVectors(i9,e8),a7.lengthSq()<0.0000000001)a7.copy(I8);else a7.normalize();let U=Math.acos(F$((H*H+Y*Y-A9.distanceToSquared(_9))/(2*H*Y))),E=Math.acos(F$((H*H+Y*Y-X*X)/(2*H*Y)))-U;if(tJ(Z,e7.setFromAxisAngle(a7,E)),K.getWorldPosition(_9),Math.abs(A9.distanceTo(_9)-X)>0.001)tJ(Z,e7.setFromAxisAngle(a7,-2*E)),K.getWorldPosition(_9);if(i9.subVectors(_9,A9).normalize(),e8.subVectors(Q,A9),e8.lengthSq()<0.0000000001)return;if(e8.normalize(),tJ(W,e7.setFromUnitVectors(i9,e8)),!$)return;if(Z.getWorldPosition(F9),r7.subVectors(F9,A9),r7.addScaledVector(e8,-r7.dot(e8)),o7.subVectors($,A9),o7.addScaledVector(e8,-o7.dot(e8)),r7.lengthSq()<0.0000000001||o7.lengthSq()<0.0000000001)return;r7.normalize(),o7.normalize();let N=Math.atan2(a7.crossVectors(r7,o7).dot(e8),F$(r7.dot(o7)));tJ(W,e7.setFromAxisAngle(e8,N))}var f8=new T,e6=new T,U$=new T,kO=new n0,zH=new VJ,G$=new VJ;function MO(J,Q,$){let{antebrazo:W,mano:Z}=J;if(!W||!Z||!Z.parent)return;if(f8.copy(Q).normalize(),U$.crossVectors(f8,$),U$.lengthSq()<0.00000001)return;U$.normalize(),e6.crossVectors(U$,f8),zH.setFromRotationMatrix(kO.makeBasis(U$,f8,e6)),W.getWorldPosition(F9),Z.getWorldPosition(_9),i9.subVectors(_9,F9).normalize(),Z.getWorldQuaternion(O9),G$.copy(zH).multiply(O9.invert());let K=G$.x*i9.x+G$.y*i9.y+G$.z*i9.z,H=2*Math.atan2(K,G$.w);if(Number.isFinite(H))tJ(W,e7.setFromAxisAngle(i9,J6(H*0.5,-1.2,1.2)));Z.parent.getWorldQuaternion(iW),Z.quaternion.copy(iW.invert()).multiply(zH),Z.updateMatrixWorld(!0)}var CO=new T;function zO(J,Q,$){let W=Q.lado==="Left"?1:-1,Z=J.index*1.7,K=G0.seatDistance-G0.tableWidth/2;return AH(J,W*(0.225+Math.sin(Z)*0.01)+Math.sin($*0.23+Z)*0.004,G0.surfaceY+0.026,K+(W>0?0.035:0.06)+Math.cos(Z*1.3)*0.012+Math.sin($*0.17+Z*2)*0.004,CO)}var PO=new T,r6=new T,_H=new T,uW=new T,IO=0.045,AO=0.05,_O=0.12,TO=0.14,wO=0.45,SO=4;function N5(J,Q,$){return uW.subVectors(Q,J.holder.getWorldPosition(_H)),uW.y=0,uW.normalize(),$.copy(Q).addScaledVector(uW,-AO).setY(Q.y+IO)}function jO(J,Q,$){let W=J.jugada;if(!W)return null;if(Q-W.t0>SO)return J.jugada=null,null;let Z=W.anim;if(Z.elapsed<Z.duration)return N5(J,W.obj.position,r6),r6.lerpVectors($,r6,R9(J6(Z.elapsed/_O,0,1)));if(W.aterrizo==null)W.aterrizo=Q;let K=Q-W.aterrizo;N5(J,W.hasta,r6);let H=Z.golpe?0.7:TO;if(K<H)return r6;let Y=(K-H)/wO;if(Y>=1)return J.jugada=null,null;return r6.lerp($,R9(Y))}var NJ=[1,1.9,3.3,4.3,5.2],E5=-1e9;function yO(J,Q,$){let W=J.bebida;if(!W)return null;if(J.trago){let K=J.trago.fijo??Q-J.trago.t0;if(K<0||K>=NJ[4]||J.jugada)return J.trago=null,V5(W),J.sed=Q+90+Math.random()*150,null;return K}if(!$||!$.dt)return null;if(J.sed==null)return J.sed=Q+20+Math.random()*100,null;if(Q<J.sed||Q-E5<20)return null;let Z=J.index;if(J.jugada||$.jugando&&$.turno===Z||$.habla.has(Z)||$.fin&&Q-$.fin.t<6)return J.sed=Q+3+Math.random()*8,null;return E5=Q,J.trago={t0:Q},0}function V5(J){J.group.position.copy(J.home),J.group.quaternion.identity()}var s9=new T,t7=new T,t6=new T,N$=new T,F5=new T;function q5(J,Q,$,W){let Z=J.bebida;if(t6.copy(Q9).addScaledVector(q9,0.25).normalize(),N$.copy(Q9).multiplyScalar(0.55).addScaledVector(q9,0.8).normalize(),t7.copy(Z.home),t7.y+=Z.alto,t7.addScaledVector(I8,-(Z.radio+0.015)).addScaledVector(t6,-0.03),J.bocaMundo)J.bocaMundo(s9),s9.addScaledVector(Q9,0.006);else J.front.getWorldPosition(s9),s9.y-=0.075,s9.addScaledVector(Q9,0.012);let K=Z.inclina;F5.copy(q9).multiplyScalar(Math.cos(K)).addScaledVector(Q9,-Math.sin(K)),s9.addScaledVector(F5,-Z.boca).addScaledVector(I8,-(Z.radio+0.015)).addScaledVector(N$,-0.03);let H;if(Q<NJ[0])W.lerpVectors($,t7,R9(Q/NJ[0])),H=t6;else if(Q<NJ[1]){let Y=R9((Q-NJ[0])/(NJ[1]-NJ[0]));W.lerpVectors(t7,s9,Y),H=t6.lerp(N$,Y).normalize()}else if(Q<NJ[2])W.copy(s9),H=N$;else if(Q<NJ[3]){let Y=R9((Q-NJ[2])/(NJ[3]-NJ[2]));W.lerpVectors(s9,t7,Y),H=N$.lerp(t6,Y).normalize()}else W.lerpVectors(t7,$,R9((Q-NJ[3])/(NJ[4]-NJ[3]))),H=t6;return H}var O5=new T,R5=new T,L5=new T;function vO(J,Q){let $=J.bebida,W=J.brazos[1].mano;if(Q<NJ[0]||Q>=NJ[3]){V5($);return}W.getWorldQuaternion(O9),W.getWorldPosition(oW),O5.set(0,0,1).applyQuaternion(O9),R5.set(0,1,0).applyQuaternion(O9);let Z=Q<NJ[1]?R9((Q-NJ[0])/(NJ[1]-NJ[0])):Q<NJ[2]?1:1-R9((Q-NJ[2])/(NJ[3]-NJ[2]));$.group.quaternion.setFromAxisAngle(I8,-$.inclina*Z),L5.set(0,1,0).applyQuaternion($.group.quaternion),$.group.position.copy(oW).addScaledVector(O5,$.radio+0.015).addScaledVector(R5,0.03).addScaledVector(L5,-$.alto)}function fO(J,Q,$){let W=J.cara;if(!W)return 0;if(J.proxParpadeo==null)J.proxParpadeo=Q+1+Math.random()*4;if(Q>=J.proxParpadeo)J.parpadeoT0=Q,J.proxParpadeo=Q+(Math.random()<0.15?0.32:2+Math.random()*4);let Z=Q-(J.parpadeoT0??-9),K=Z<0?0:Z<0.06?Z/0.06:Z<0.09?1:Z<0.16?1-(Z-0.09)/0.07:0;if(J.caraFija){let U=J.caraFija,G=W.mesh.morphTargetInfluences;if(G)G[W.iP]=U.p*0.85,G[W.iS]=U.s;return J.parpadeo=U.p,U.p}let H=J.index,Y=0;if($?.fin&&$.fin.team!=null&&Q-$.fin.t<5&&Q>=$.fin.t)Y=H%2===$.fin.team?0.95:-0.7;else if($?.habla?.has(H))Y=$.hablaTipo?.get(H)==="win"?0.85:0.2;else{if(J.casual==null)J.casual=Q+8+Math.random()*30;if(Q>J.casual+2.5)J.casual=Q+15+Math.random()*45;if(Q>=J.casual)Y=0.45}J.sonrisa=(J.sonrisa??0)+(Y-(J.sonrisa??0))*(1-Math.exp(-($?.dt||0.016)*3.5));let X=W.mesh.morphTargetInfluences;if(X)X[W.iP]=K*0.85,X[W.iS]=J.sonrisa;return J.parpadeo=K,K}function hO(J,Q){let $=J.index,W=0.23+$%4*0.012,Z=Q*W*Math.PI*2+$*1.9,K=Math.sin(Z);return{b:K>0?K:K*0.7,balanceo:Math.sin(Q*0.11+$*2.3)*0.022+Math.sin(Q*0.29+$)*0.008,ladeo:Math.sin(Q*0.07+$*1.3)*0.014}}var PH=new T,dW=new T,J9=new T,M7=new T,L9=new T,v8=new VJ,cW=(J)=>{let Q=Math.sin(J*127.1+311.7)*43758.5453;return Q-Math.floor(Q)};function bO(J,Q,$,W){let Z=J.index;if(Z>=4||!$)return $?.foco&&Q-$.foco.t<2.5?W.copy($.foco.p):W.set(0,G0.surfaceY,0);if($.fin&&Q-$.fin.t<5){if($.fin.team!=null&&Z%2===$.fin.team&&$.cabezas[(Z+2)%4])return W.copy($.cabezas[(Z+2)%4]);return AH(J,0,G0.surfaceY,G0.seatDistance-G0.rackRadius,W)}if(J.trago&&J.bebida){let Y=J.trago.fijo??Q-J.trago.t0;if(Y<1.1||Y>3.4&&Y<4.3)return W.copy(J.bebida.home);if(Y<=3.4)return J.head.getWorldPosition(W),W.addScaledVector(Q9,1).addScaledVector(q9,-0.15)}if($.foco&&Q-$.foco.t<1.4)return W.copy($.foco.p);for(let Y of $.habla)if(Y!==Z&&$.cabezas[Y])return W.copy($.cabezas[Y]);if($.jugando&&$.turno===Z){let Y=Math.floor(Q/1.3);return AH(J,(cW(Y+Z*9)-0.5)*0.12,G0.surfaceY+0.02,G0.seatDistance-G0.rackRadius+0.02,W)}let K=Math.floor((Q+Z*1.37)/(2.2+Z*0.35)),H=cW(K*4+Z);if($.jugando&&H<0.45&&$.cabezas[$.turno]&&$.turno!==Z)return W.copy($.cabezas[$.turno]);if(H<0.62&&$.cabezas[(Z+2)%4])return W.copy($.cabezas[(Z+2)%4]);if(!$.jugando&&H<0.85&&$.cabezas[(Z+1+K%2*2)%4])return W.copy($.cabezas[(Z+1+K%2*2)%4]);return W.set((cW(K+7)-0.5)*0.2,G0.surfaceY,(cW(K+3)-0.5)*0.2)}function xO(J,Q,$){let{head:W,neck:Z,front:K}=J;if(!W||!K)return;if(bO(J,Q,$,PH),!J.mirada||!$?.dt)J.mirada=(J.mirada||new T).copy(PH);else J.mirada.lerp(PH,1-Math.exp(-$.dt*5.5));for(let[H,Y]of[[Z,0.4],[W,1]]){if(!H)continue;if(W.getWorldPosition(dW),K.getWorldPosition(J9),J9.sub(dW),J9.lengthSq()<0.0000000001)return;if(J9.normalize(),M7.subVectors(J.mirada,dW),M7.lengthSq()<0.00000001)return;M7.normalize();let X=J6(Math.atan2(J9.z*M7.x-J9.x*M7.z,J9.x*M7.x+J9.z*M7.z),-1.25,1.25)*Y;if(tJ(H,e7.setFromAxisAngle(q9,X)),K.getWorldPosition(J9),J9.sub(dW).normalize(),L9.crossVectors(J9,q9),L9.lengthSq()<0.00000001)continue;L9.normalize();let U=J6(Math.asin(F$(M7.y))-Math.asin(F$(J9.y)),-0.75,0.55)*Y;tJ(H,e7.setFromAxisAngle(L9,U))}}var gO=0.23,pO=[["lomo",0.4],["spine",0.34],["chest",0.26]],JD=new VJ;function mO(J,Q,$=0){if(!J.spine||!J.spine.parent)return;if(L9.copy(I8),J.hips&&J.lomo)for(let[W,Z]of pO){let K=J[W];if(!K)continue;tJ(K,v8.setFromAxisAngle(L9,Q*Z))}else tJ(J.spine,v8.setFromAxisAngle(L9,Q));if($)tJ(J.spine,v8.setFromAxisAngle(q9,$))}var nW=new T,IH=new T,E$=new T,oW=new T;function aW(J,Q,$=!1,W=null){for(let q of J.pose)q.bone.position.copy(q.position),q.bone.quaternion.copy(q.quaternion),q.bone.scale.copy(q.scale);J.holder.updateMatrixWorld(!0),VO(J);let Z=X5(J.index,Q,$);if(J.spine)J.spine.quaternion.multiply(CH.setFromAxisAngle(U5,Z.breath));let K=!$,H=K?hO(J,Q):{b:0,balanceo:0,ladeo:0},Y=J.index,X=Y<4&&J.brazos,U=0,G=0;if(X&&W?.fin&&W.fin.team!=null){let q=Q-W.fin.t;if(q>=0&&q<5)G=Math.sin(Math.min(1,q/0.5)*Math.PI/2)*(q>4?5-q:1),U+=(Y%2===W.fin.team?-0.1:0.07)*G}if(X&&W?.jugando&&W.turno===Y)U+=0.04;let E=X&&K&&J.front?yO(J,Q,W):null,N=[];if(X)for(let q of J.brazos){let V=PO.copy(zO(J,q,Q)),O=q.lado==="Right"?jO(J,Q,V):null,R=!!O,z=null;if(!O&&E!=null&&q.lado==="Right")O=_H.set(0,0,0),z=q5(J,E,V,O).clone();if(O=(O||V).clone(),!R&&K&&W?.habla?.has(Y)&&q.lado==="Left")J.gesto=Math.min(1,(J.gesto||0)+(W.dt||0)*3);else if(q.lado==="Left")J.gesto=Math.max(0,(J.gesto||0)-(W?.dt||1)*2);if(q.lado==="Left"&&J.gesto>0){let D=R9(J.gesto);O.addScaledVector(Q9,0.06*D).addScaledVector(I8,-0.07*D),O.y+=0.07*D+Math.sin(Q*5.2)*0.012*D}if(q.lado==="Right"&&!R&&G&&Y%2===W.fin.team){let D=Q-W.fin.t;if(D<1.1)O.y+=Math.max(0,Math.sin(Math.min(1,D/0.9)*Math.PI))*0.13}N.push({brazo:q,o:O,jugando:R,dedos:z,reposo:V.clone()})}let F=0;if(X){let q=N.find((V)=>V.jugando);if(q&&q.brazo.brazo){J.holder.worldToLocal(E$.copy(q.o));let V=Math.hypot(E$.x,E$.z-0.12);U+=J6((V-0.42)/0.55,0,0.34),F=J6(Math.atan2(E$.x,E$.z)*0.3,-0.3,0.3)}}if(mO(J,gO*(J.brazos?1:0.6)+U,F),E!=null){let q=E<NJ[1]?Math.sin(Math.min(1,E/NJ[0])*Math.PI/2)*(1-R9(Math.max(0,E-NJ[0])/(NJ[1]-NJ[0]))):E>NJ[2]?Math.sin(Math.min(1,(E-NJ[2])/(NJ[3]-NJ[2]))*Math.PI):0;if(J.spine)tJ(J.spine,v8.setFromAxisAngle(Q9,0.16*q))}if(K){if(J.spine)tJ(J.spine,v8.setFromAxisAngle(q9,H.balanceo));if(J.spine)tJ(J.spine,v8.setFromAxisAngle(Q9,H.ladeo));if(J.chest)tJ(J.chest,v8.setFromAxisAngle(I8,-0.018*H.b));if(J.hombros){for(let[q,V]of J.hombros)if(V)tJ(V,v8.setFromAxisAngle(Q9,q*0.03*(H.b+0.3)))}}if(xO(J,Q,W),fO(J,Q,W),J.head)J.head.quaternion.multiply(CH.setFromAxisAngle(q9,Z.headYaw*0.5)),J.head.quaternion.multiply(CH.setFromAxisAngle(U5,Z.headNod)),J.head.updateMatrixWorld(!0);if(K&&J.head){if(W?.habla?.has(Y)){let q=0.035*(0.6+0.4*Math.sin(Q*1.7));tJ(J.head,v8.setFromAxisAngle(I8,Math.sin(Q*6.1)*q*0.5+Math.sin(Q*3.3)*q*0.5))}if(G&&Y%2!==W.fin.team){let q=Q-W.fin.t;if(q>0.6&&q<2.6)tJ(J.head,v8.setFromAxisAngle(q9,Math.sin((q-0.6)*Math.PI*2.4)*0.16*(2.6-q)/2))}}if(E!=null&&E>NJ[1]-0.2&&E<NJ[2]+0.2&&J.head){let q=Math.sin(Math.min(1,(E-NJ[1]+0.2)/(NJ[2]-NJ[1]+0.4))*Math.PI);tJ(J.head,v8.setFromAxisAngle(I8,-0.3*q))}if(K&&J.reaction&&J.head){let q=Q-J.reaction.time;if(q>=0&&q<1.2){let V=Math.sin(q/1.2*Math.PI)*0.035;tJ(J.head,v8.setFromAxisAngle(I8,V))}}for(let{brazo:q,o:V,jugando:O,dedos:R,reposo:z}of N){if(R)R.copy(q5(J,E,z,V));let D=q.lado==="Left"?1:-1;if(q.brazo.getWorldPosition(nW),R)nW.add(G5(D*0.85,-0.5,0.05,IH));else nW.add(G5(D*(O?0.55:0.32),-0.75,O?-0.15:-0.6,IH));if(BO(q,V,nW),q.antebrazo.getWorldPosition(F9),q.mano.getWorldPosition(oW),f8.subVectors(oW,F9),f8.y=0,f8.lengthSq()<0.00000001)f8.copy(Q9);if(f8.normalize(),f8.addScaledVector(I8,-D*(O?0:0.12)).normalize(),f8.y=O?-0.55:-0.3,e6.set(0,-1,0).addScaledVector(I8,-D*0.22),q.lado==="Left"&&J.gesto>0){let L=R9(J.gesto);e6.lerp(IH.copy(I8).multiplyScalar(-1).add(_H.set(0,0.4,0)),L*0.8),f8.y+=0.4*L}if(R)f8.copy(R),e6.copy(I8).addScaledVector(q9,-0.15);if(MO(q,f8,e6),R)vO(J,E);if(K&&!O&&!R&&q.lado==="Right"&&J.toque&&Q-J.toque.t0<0.7){let L=Q-J.toque.t0;q.mano.getWorldQuaternion(O9),L9.set(1,0,0).applyQuaternion(O9),tJ(q.mano,v8.setFromAxisAngle(L9,-0.5*Math.max(0,Math.sin(L/0.7*Math.PI*4))))}else if(K&&!O&&!R&&q.lado==="Right"&&!(W?.turno===Y&&W?.jugando)){let L=4.6+Y*0.9,M=(Q+Y*1.3)%L;if(M<0.55)q.mano.getWorldQuaternion(O9),L9.set(1,0,0).applyQuaternion(O9),tJ(q.mano,v8.setFromAxisAngle(L9,-0.22*Math.max(0,Math.sin(M/0.55*Math.PI*4))))}}J.holder.updateMatrixWorld(!0)}function D5({scene:J,texture:Q,mat:$,box:W,cylinder:Z,random:K,teal:H,wood:Y,storeSign:X}){let U=Q((D,L,M)=>{D.fillStyle="#39796d",D.fillRect(0,0,L,M);let I=D.createLinearGradient(0,0,0,M);I.addColorStop(0,"#cac09b18"),I.addColorStop(0.7,"#14382d00"),I.addColorStop(1,"#162d2566"),D.fillStyle=I,D.fillRect(0,0,L,M);for(let w=0;w<7000;w++)D.fillStyle=w%3?"#b4ad8618":"#142d2924",D.fillRect(K()*L,K()*M,1+K()*3,1+K()*2);for(let w=0;w<190;w++){let B=K()*L,_=w<125?M*(0.7+K()*0.3):K()*M,d=6+K()*17;D.fillStyle=w%3?"#a69c7d":"#6a7b6a",D.beginPath();for(let j=0;j<8;j++){let b=j*Math.PI/4,Q0=d*(0.6+K()*0.5);D.lineTo(B+Math.cos(b)*Q0,_+Math.sin(b)*Q0*0.65)}D.fill()}D.strokeStyle="#1b372e24";for(let w=48;w<M;w+=57)D.beginPath(),D.moveTo(0,w),D.lineTo(L,w),D.stroke()},1024,1024);H.map=U,H.color.set("#c7ccbb"),H.needsUpdate=!0,Y.color.set("#bca98a"),Y.roughness=0.84,X.material.map=Q((D,L,M)=>{D.fillStyle="#966045",D.fillRect(0,0,L,M),D.fillStyle="#e7d6a7",D.textAlign="center",D.textBaseline="middle",D.font="bold 66px Georgia",D.fillText("COLMADO LA ESQUINA",L/2,M/2);for(let I=0;I<2000;I++)D.fillStyle=I%2?"#58472c30":"#dec29630",D.fillRect(K()*L,K()*M,1+K()*5,1+K()*3);D.strokeStyle="#57412c",D.lineWidth=7,D.strokeRect(3,3,L-6,M-6)},1024,256),X.material.needsUpdate=!0;let E=["#b68e3c","#a45137","#6a8b62","#bbad8a"].map((D,L)=>new JJ({roughness:0.94,map:Q((M,I,w)=>{M.fillStyle=D,M.fillRect(0,0,I,w);for(let B=0;B<30;B++)M.strokeStyle=B%2?"#fff2":"#0002",M.beginPath(),M.moveTo(K()*I,0),M.lineTo(K()*I,w),M.stroke();M.fillStyle="#dfd1a6",M.fillRect(20,w*0.32,I-40,w*0.36),M.fillStyle="#403c29",M.font="bold 31px Georgia",M.textAlign="center",M.fillText(["CAFÉ","ARROZ","PLÁTANO","AZÚCAR"][L],I/2,w*0.53)},256,384)}));for(let D=0;D<3;D++)for(let L=0;L<8;L++)W(-3+L*0.17,1.73+D*0.48,-4.46,0.13,0.23,0.075,E[(L+D)%4],(K()-0.5)*0.1);for(let[D,L]of[[-2.7,-3.5],[2.4,-3.3]])W(D,0.18,L,0.51,0.35,0.4,"#897052"),W(D+0.05,0.47,L-0.04,0.4,0.23,0.32,"#a68c62");for(let D=0;D<3;D++)Z(2.48+D*0.24,0.18,-2.3,0.09,0.1,0.31,"#74a69e",12),Z(2.48+D*0.24,0.36,-2.3,0.035,0.043,0.075,"#5b8c84",10);for(let D=0;D<4;D++){let L=new C0(new P8(1,10,7),$(D%2?"#a08e69":"#b0a078"));L.scale.set(0.15,0.24,0.12),L.position.set(-2.6+D*0.25,0.23,-2.1),L.rotation.z=(D-1.5)*0.06,L.castShadow=!0,J.add(L)}let N=new C0(new K8(0.72,0.69),new JJ({roughness:1,map:Q((D,L,M)=>{D.fillStyle="#263d30",D.fillRect(0,0,L,M),D.strokeStyle="#9c8c62",D.lineWidth=16,D.strokeRect(8,8,L-16,M-16),D.fillStyle="#dcdcb8",D.textAlign="center";for(let[I,w,B]of[["HOY HAY",68,43],["CAFÉ",150,48],["HIELO · PAN",228,32],["REFRESCOS",292,31]])D.font=`${B}px Georgia`,D.fillText(I,L/2,w)},384,360)}));N.position.set(-3.43,1.6,-2.33),N.rotation.z=0.025,J.add(N);let F=[];W(-1.12,1.59,-4,0.42,0.21,0.31,"#677761"),W(-1.12,1.61,-3.836,0.34,0.1,0.016,"#414b3d"),W(-0.38,1.5,-3.98,0.3,0.018,0.22,"#c5b887");for(let[D,L,M]of[[0.7,-4.03,"#8b7747"],[0.98,-4.07,"#637751"],[1.29,-4.02,"#a88b50"]])Z(D,1.6,L,0.07,0.075,0.25,M,14),Z(D,1.739,L,0.077,0.077,0.028,"#aaa386",12);W(0.2,1.51,-4.01,0.4,0.07,0.28,"#6c5838");for(let D=0;D<4;D++){let L=new C0(new P8(1,10,6),$(D%2?"#bca276":"#a98e61"));L.scale.set(0.055,0.035,0.115),L.position.set(0.07+D*0.085,1.57,-4),L.rotation.y=(D-1.5)*0.13,J.add(L)}let q=new mJ({transparent:!0,depthWrite:!1,map:Q((D,L,M)=>{for(let I=0;I<90;I++)D.fillStyle=I%2?"#152c2110":"#3036230a",D.beginPath(),D.ellipse(L/2+(K()-0.5)*L*0.45,M/2+(K()-0.5)*M*0.45,K()*L*0.24,K()*M*0.18,K()*Math.PI,0,Math.PI*2),D.fill()},256,256)});for(let[D,L,M,I]of[[-2.4,-2.2,1.1,0.9],[2.5,-2.5,1.3,0.8],[0,-3.25,2,0.6]]){let w=new C0(new K8(M,I),q);w.rotation.x=-Math.PI/2,w.position.set(D,0.008,L),J.add(w)}for(let[D,L]of[[-3,-0.9],[3.3,-1.5]]){Z(D,0.18,L,0.18,0.13,0.34,"#87553c",14),Z(D,0.354,L,0.16,0.16,0.012,"#3f422d",12);let M=new _J;M.position.set(D,0.36,L),J.add(M);for(let I=0;I<7;I++){let w=new iQ;w.moveTo(0,0),w.quadraticCurveTo(-0.09,0.23,0,0.55+K()*0.12),w.quadraticCurveTo(0.09,0.23,0,0);let B=new C0(new oQ(w,5),new JJ({color:I%2?"#597d4f":"#3c603e",roughness:1,side:J8}));B.rotation.set(0.3+K()*0.4,I*Math.PI*2/7,0),M.add(B)}F.push(M)}let V=new K8(0.55,1.3,5,9),O=new C0(V,new JJ({color:"#b2a27c",roughness:1,side:J8}));O.position.set(-2.85,1.75,-3.05),J.add(O);let R=V.attributes.position,z=R.array.slice();return{update(D){F.forEach((L,M)=>L.rotation.z=Math.sin(D*0.53+M*2.1)*0.015);for(let L=0;L<R.count;L++){let M=z[L*3+1];R.setZ(L,Math.sin(D*1.17+M*3)*0.025*(0.65-M)/1.3)}R.needsUpdate=!0}}}var lO=["cafe","morir","presidente","presidente"];function uO(){let J=document.createElement("canvas");J.width=256,J.height=128;let Q=J.getContext("2d");Q.fillStyle="#f1ece0",Q.fillRect(0,0,256,128),Q.fillStyle="#b3262d",Q.fillRect(0,10,256,14),Q.fillRect(0,104,256,14),Q.fillStyle="#1f5a36",Q.beginPath(),Q.ellipse(128,64,54,28,0,0,Math.PI*2),Q.fill(),Q.fillStyle="#f1ece0",Q.beginPath(),Q.ellipse(128,64,46,21,0,0,Math.PI*2),Q.fill(),Q.fillStyle="#b3262d",Q.fillRect(92,58,72,12);let $=new N7(J);return $.colorSpace=D8,$}function dO(){let J=new _J,Q=(X,U)=>new $0(X,U),$=[Q(0,0),Q(0.034,0),Q(0.037,0.006),Q(0.037,0.165),Q(0.034,0.188),Q(0.022,0.222),Q(0.0145,0.252),Q(0.0138,0.274),Q(0.0158,0.279),Q(0.0158,0.29),Q(0,0.29)],W=new JJ({color:"#2d5a26",roughness:0.18,metalness:0.05,envMapIntensity:1.4});J.add(new C0(new F7($,20),W));let Z=new C0(new F7($.slice(1,5).map((X)=>Q(X.x+0.0006,X.y)),20),new JJ({color:"#e8f0e4",roughness:0.9,transparent:!0,opacity:0.22,depthWrite:!1}));J.add(Z);let K=new C0(new gJ(0.0376,0.0376,0.075,24,1,!0),new JJ({map:uO(),roughness:0.6}));K.position.y=0.095,J.add(K);let H=new C0(new gJ(0.0149,0.0152,0.02,16,1,!0),new JJ({color:"#b3262d",roughness:0.5}));H.position.y=0.262,J.add(H);let Y=new C0(new gJ(0.0165,0.0165,0.006,16),new JJ({color:"#c9c4b6",roughness:0.35,metalness:0.7}));return Y.position.y=0.291,J.add(Y),{g:J,alto:0.11,radio:0.037,inclina:1.25,boca:0.18}}function cO(){let J=new _J,Q=new C0(new gJ(0.034,0.029,0.14,24,1,!0),new JJ({color:"#dfe9ec",roughness:0.08,transparent:!0,opacity:0.28,depthWrite:!1,side:J8}));Q.position.y=0.07,Q.renderOrder=2,J.add(Q);let $=new C0(new gJ(0.029,0.029,0.008,24),new JJ({color:"#dfe9ec",roughness:0.1,transparent:!0,opacity:0.5}));$.position.y=0.004,J.add($);let W=new C0(new gJ(0.0318,0.0285,0.112,24),new JJ({color:"#f2bf86",roughness:0.45}));W.position.y=0.064,J.add(W);for(let[K,H,Y]of[[0.01,0.006,0.4],[-0.009,-0.008,1.1],[0.002,-0.012,2]]){let X=new C0(new xJ(0.016,0.013,0.016),new JJ({color:"#f6f3ec",roughness:0.15,transparent:!0,opacity:0.8}));X.position.set(K,0.121,H),X.rotation.set(Y,Y*0.7,0),J.add(X)}let Z=new C0(new gJ(0.0028,0.0028,0.19,8),new JJ({color:"#c8392e",roughness:0.5}));return Z.position.set(0.012,0.11,0.004),Z.rotation.z=-0.16,J.add(Z),{g:J,alto:0.06,radio:0.034,inclina:0.85,boca:0.09}}function nO(){let J=new _J,Q=new JJ({color:"#efe9da",roughness:0.22}),$=new C0(new gJ(0.045,0.04,0.008,28),Q);$.position.y=0.004,J.add($);let W=new JJ({color:"#efe9da",roughness:0.22,side:J8}),Z=new C0(new gJ(0.028,0.021,0.048,24,1,!0),W),K=new C0(new E7(0.021,20),Q);K.rotation.x=-Math.PI/2,K.position.y=0.0085,J.add(K),Z.position.y=0.032,J.add(Z);let H=new C0(new E7(0.0262,24),new JJ({color:"#2a160c",roughness:0.15}));H.rotation.x=-Math.PI/2,H.position.y=0.049,J.add(H);let Y=new C0(new q7(0.012,0.0035,6,12,Math.PI*1.3),Q);return Y.position.set(0.03,0.034,0),Y.rotation.z=-Math.PI*0.65,J.add(Y),J.remove($),{g:J,alto:0.03,radio:0.028,inclina:0.9,boca:0.03,plato:$}}function B5(J){let Q=[];for(let $=0;$<4;$++){let W=lO[$],Z=W==="presidente"?dO():W==="morir"?cO():nO(),[K,H,Y]=E9[$],X=G0.tableWidth/2-0.055,U=G0.tableCenterY+G0.tableThickness/2,G=new T(-X,0,G0.seatDistance-X).applyAxisAngle(new T(0,1,0),Y).add(new T(K,0,H));if(G.y=U,Z.g.traverse((E)=>{if(E.isMesh)E.castShadow=!0,E.receiveShadow=!0}),Z.plato)G.y+=0.008;if(Z.g.position.copy(G),J.add(Z.g),Z.plato)Z.plato.position.copy(G),Z.plato.position.y=U+0.004,Z.plato.traverse((E)=>{if(E.isMesh)E.receiveShadow=!0}),J.add(Z.plato);Q.push({group:Z.g,home:G,index:$,tipo:W,alto:Z.alto,radio:Z.radio,inclina:Z.inclina,boca:Z.boca})}return Q}var JQ={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class $9{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var sO=new n9(-1,1,1,-1,0,1);class k5 extends yJ{constructor(){super();this.setAttribute("position",new UJ([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new UJ([0,2,0,0,2,0],2))}}var iO=new k5;class Q6{constructor(J){this._mesh=new C0(iO,J)}dispose(){this._mesh.geometry.dispose()}render(J){J.render(this._mesh,sO)}get material(){return this._mesh.material}set material(J){this._mesh.material=J}}class q$ extends $9{constructor(J,Q="tDiffuse"){super();if(this.textureID=Q,this.uniforms=null,this.material=null,J instanceof lJ)this.uniforms=J.uniforms,this.material=J;else if(J)this.uniforms=l9.clone(J.uniforms),this.material=new lJ({name:J.name!==void 0?J.name:"unspecified",defines:Object.assign({},J.defines),uniforms:this.uniforms,vertexShader:J.vertexShader,fragmentShader:J.fragmentShader});this._fsQuad=new Q6(this.material)}render(J,Q,$){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=$.texture;if(this._fsQuad.material=this.material,this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget(Q),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class rW extends $9{constructor(J,Q){super();this.scene=J,this.camera=Q,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(J,Q,$){let W=J.getContext(),Z=J.state;Z.buffers.color.setMask(!1),Z.buffers.depth.setMask(!1),Z.buffers.color.setLocked(!0),Z.buffers.depth.setLocked(!0);let K,H;if(this.inverse)K=0,H=1;else K=1,H=0;if(Z.buffers.stencil.setTest(!0),Z.buffers.stencil.setOp(W.REPLACE,W.REPLACE,W.REPLACE),Z.buffers.stencil.setFunc(W.ALWAYS,K,4294967295),Z.buffers.stencil.setClear(H),Z.buffers.stencil.setLocked(!0),J.setRenderTarget($),this.clear)J.clear();if(J.render(this.scene,this.camera),J.setRenderTarget(Q),this.clear)J.clear();J.render(this.scene,this.camera),Z.buffers.color.setLocked(!1),Z.buffers.depth.setLocked(!1),Z.buffers.color.setMask(!0),Z.buffers.depth.setMask(!0),Z.buffers.stencil.setLocked(!1),Z.buffers.stencil.setFunc(W.EQUAL,1,4294967295),Z.buffers.stencil.setOp(W.KEEP,W.KEEP,W.KEEP),Z.buffers.stencil.setLocked(!0)}}class wH extends $9{constructor(){super();this.needsSwap=!1}render(J){J.state.buffers.stencil.setLocked(!1),J.state.buffers.stencil.setTest(!1)}}class SH{constructor(J,Q){if(this.renderer=J,this._pixelRatio=J.getPixelRatio(),Q===void 0){let $=J.getSize(new $0);this._width=$.width,this._height=$.height,Q=new aJ(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:N8}),Q.texture.name="EffectComposer.rt1"}else this._width=Q.width,this._height=Q.height;this.renderTarget1=Q,this.renderTarget2=Q.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new q$(JQ),this.copyPass.material.blending=o8,this.timer=new yW}swapBuffers(){let J=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=J}addPass(J){this.passes.push(J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(J,Q){this.passes.splice(Q,0,J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(J){let Q=this.passes.indexOf(J);if(Q!==-1)this.passes.splice(Q,1)}isLastEnabledPass(J){for(let Q=J+1;Q<this.passes.length;Q++)if(this.passes[Q].enabled)return!1;return!0}render(J){if(this.timer.update(),J===void 0)J=this.timer.getDelta();let Q=this.renderer.getRenderTarget(),$=!1;for(let W=0,Z=this.passes.length;W<Z;W++){let K=this.passes[W];if(K.enabled===!1)continue;if(K.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(W),K.render(this.renderer,this.writeBuffer,this.readBuffer,J,$),K.needsSwap){if($){let H=this.renderer.getContext(),Y=this.renderer.state.buffers.stencil;Y.setFunc(H.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,J),Y.setFunc(H.EQUAL,1,4294967295)}this.swapBuffers()}if(rW!==void 0){if(K instanceof rW)$=!0;else if(K instanceof wH)$=!1}}this.renderer.setRenderTarget(Q)}reset(J){if(J===void 0){let Q=this.renderer.getSize(new $0);this._pixelRatio=this.renderer.getPixelRatio(),this._width=Q.width,this._height=Q.height,J=this.renderTarget1.clone(),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=J,this.renderTarget2=J.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(J,Q){this._width=J,this._height=Q;let $=this._width*this._pixelRatio,W=this._height*this._pixelRatio;this.renderTarget1.setSize($,W),this.renderTarget2.setSize($,W);for(let Z=0;Z<this.passes.length;Z++)this.passes[Z].setSize($,W)}setPixelRatio(J){this._pixelRatio=J,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class jH extends $9{constructor(J,Q,$=null,W=null,Z=null){super();this.scene=J,this.camera=Q,this.overrideMaterial=$,this.clearColor=W,this.clearAlpha=Z,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new y0}render(J,Q,$){let W=J.autoClear;J.autoClear=!1;let Z,K;if(this.overrideMaterial!==null)K=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)J.getClearColor(this._oldClearColor),J.setClearColor(this.clearColor,J.getClearAlpha());if(this.clearAlpha!==null)Z=J.getClearAlpha(),J.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)J.clearDepth();if(J.setRenderTarget(this.renderToScreen?null:$),this.clear===!0)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);if(J.render(this.scene,this.camera),this.clearColor!==null)J.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)J.setClearAlpha(Z);if(this.overrideMaterial!==null)this.scene.overrideMaterial=K;J.autoClear=W}}var M5={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new y0(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class $6 extends $9{constructor(J,Q=1,$,W){super();this.strength=Q,this.radius=$,this.threshold=W,this.resolution=J!==void 0?new $0(J.x,J.y):new $0(256,256),this.clearColor=new y0(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let Z=Math.round(this.resolution.x/2),K=Math.round(this.resolution.y/2);this.renderTargetBright=new aJ(Z,K,{type:N8,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let U=0;U<this.nMips;U++){let G=new aJ(Z,K,{type:N8,depthBuffer:!1});G.texture.name="UnrealBloomPass.h"+U,G.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(G);let E=new aJ(Z,K,{type:N8,depthBuffer:!1});E.texture.name="UnrealBloomPass.v"+U,E.texture.generateMipmaps=!1,this.renderTargetsVertical.push(E),Z=Math.round(Z/2),K=Math.round(K/2)}let H=M5;this.highPassUniforms=l9.clone(H.uniforms),this.highPassUniforms.luminosityThreshold.value=W,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new lJ({uniforms:this.highPassUniforms,vertexShader:H.vertexShader,fragmentShader:H.fragmentShader}),this.separableBlurMaterials=[];let Y=[6,10,14,18,22];Z=Math.round(this.resolution.x/2),K=Math.round(this.resolution.y/2);for(let U=0;U<this.nMips;U++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(Y[U])),this.separableBlurMaterials[U].uniforms.invSize.value=new $0(1/Z,1/K),Z=Math.round(Z/2),K=Math.round(K/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=Q,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let X=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=X,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=l9.clone(JQ.uniforms),this.blendMaterial=new lJ({uniforms:this.copyUniforms,vertexShader:JQ.vertexShader,fragmentShader:JQ.fragmentShader,premultipliedAlpha:!0,blending:k9,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new y0,this._oldClearAlpha=1,this._basic=new mJ,this._fsQuad=new Q6(null)}dispose(){for(let J=0;J<this.renderTargetsHorizontal.length;J++)this.renderTargetsHorizontal[J].dispose();for(let J=0;J<this.renderTargetsVertical.length;J++)this.renderTargetsVertical[J].dispose();this.renderTargetBright.dispose();for(let J=0;J<this.separableBlurMaterials.length;J++)this.separableBlurMaterials[J].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(J,Q){let $=Math.round(J/2),W=Math.round(Q/2);this.renderTargetBright.setSize($,W);for(let Z=0;Z<this.nMips;Z++)this.renderTargetsHorizontal[Z].setSize($,W),this.renderTargetsVertical[Z].setSize($,W),this.separableBlurMaterials[Z].uniforms.invSize.value=new $0(1/$,1/W),$=Math.round($/2),W=Math.round(W/2)}render(J,Q,$,W,Z){J.getClearColor(this._oldClearColor),this._oldClearAlpha=J.getClearAlpha();let K=J.autoClear;if(J.autoClear=!1,J.setClearColor(this.clearColor,0),Z)J.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=$.texture,J.setRenderTarget(null),J.clear(),this._fsQuad.render(J);this.highPassUniforms.tDiffuse.value=$.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,J.setRenderTarget(this.renderTargetBright),J.clear(),this._fsQuad.render(J);let H=this.renderTargetBright;for(let Y=0;Y<this.nMips;Y++)this._fsQuad.material=this.separableBlurMaterials[Y],this.separableBlurMaterials[Y].uniforms.colorTexture.value=H.texture,this.separableBlurMaterials[Y].uniforms.direction.value=$6.BlurDirectionX,J.setRenderTarget(this.renderTargetsHorizontal[Y]),J.clear(),this._fsQuad.render(J),this.separableBlurMaterials[Y].uniforms.colorTexture.value=this.renderTargetsHorizontal[Y].texture,this.separableBlurMaterials[Y].uniforms.direction.value=$6.BlurDirectionY,J.setRenderTarget(this.renderTargetsVertical[Y]),J.clear(),this._fsQuad.render(J),H=this.renderTargetsVertical[Y];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,J.setRenderTarget(this.renderTargetsHorizontal[0]),J.clear(),this._fsQuad.render(J),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,Z)J.state.buffers.stencil.setTest(!0);if(this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else J.setRenderTarget($),this._fsQuad.render(J);J.setClearColor(this._oldClearColor,this._oldClearAlpha),J.autoClear=K}_getSeparableBlurMaterial(J){let Q=[],$=J/3;for(let K=0;K<J;K++)Q.push(0.39894*Math.exp(-0.5*K*K/($*$))/$);let W=[],Z=[];for(let K=1;K<J;K+=2){let H=Q[K],Y=K+1<J?Q[K+1]:0,X=H+Y;W.push((K*H+(K+1)*Y)/X),Z.push(X)}return new lJ({defines:{KERNEL_PAIRS:W.length},uniforms:{colorTexture:{value:null},invSize:{value:new $0(0.5,0.5)},direction:{value:new $0(0.5,0.5)},centerWeight:{value:Q[0]},gaussianOffsets:{value:W},gaussianWeights:{value:Z}},vertexShader:`

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

				}`})}_getCompositeMaterial(J){return new lJ({defines:{NUM_MIPS:J},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}$6.BlurDirectionX=new $0(1,0);$6.BlurDirectionY=new $0(0,1);var O$={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class yH extends $9{constructor(){super();this.isOutputPass=!0,this.uniforms=l9.clone(O$.uniforms),this.material=new aQ({name:O$.name,uniforms:this.uniforms,vertexShader:O$.vertexShader,fragmentShader:O$.fragmentShader}),this._fsQuad=new Q6(this.material),this._outputColorSpace=null,this._toneMapping=null}render(J,Q,$){if(this.uniforms.tDiffuse.value=$.texture,this.uniforms.toneMappingExposure.value=J.toneMappingExposure,this._outputColorSpace!==J.outputColorSpace||this._toneMapping!==J.toneMapping){if(this._outputColorSpace=J.outputColorSpace,this._toneMapping=J.toneMapping,this.material.defines={},KJ.getTransfer(this._outputColorSpace)===jJ)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===TQ)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===wQ)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===SQ)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===v7)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===yQ)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===vQ)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===jQ)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget(Q),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var k8=(()=>{let J=7;return()=>{return J=Math.imul(J,1664525)+1013904223>>>0,J/4294967296}})();function vH(J,Q=256,$=256){let W=document.createElement("canvas");W.width=Q,W.height=$,J(W.getContext("2d"),Q,$);let Z=new N7(W);return Z.colorSpace=D8,Z}function C5(J="255,214,150"){return vH((Q,$,W)=>{let Z=Q.createRadialGradient($/2,W/2,0,$/2,W/2,$/2);Z.addColorStop(0,`rgba(${J},1)`),Z.addColorStop(0.18,`rgba(${J},.55)`),Z.addColorStop(0.5,`rgba(${J},.12)`),Z.addColorStop(1,`rgba(${J},0)`),Q.fillStyle=Z,Q.fillRect(0,0,$,W)})}function oO(J){let Q=new _J,$=new C0(new P8(80,32,16),new lJ({side:R8,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP;
   void main(){float h=vP.y;
    vec3 zen=vec3(.004,.008,.022),hor=vec3(.035,.05,.075),ciudad=vec3(.16,.075,.035);
    vec3 c=mix(hor,zen,smoothstep(0.,.5,h));
    c+=ciudad*pow(max(0.,1.-max(h,0.)*7.),3.)*.9;
    if(h<0.)c=hor*.5;
    gl_FragColor=vec4(c,1.);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
   }`}));$.renderOrder=-10,Q.add($);let W=900,Z=new Float32Array(W*3),K=new Float32Array(W*3);for(let U=0;U<W;U++){let G=k8(),E=k8()*Math.PI*2,N=0.12+G*0.88,F=Math.sqrt(1-N*N),q=0.3+0.7*k8()*N;Z.set([Math.cos(E)*F*75,N*75,Math.sin(E)*F*75],U*3),K.set([q*0.85,q*0.9,q],U*3)}let H=new yJ;H.setAttribute("position",new sJ(Z,3)),H.setAttribute("color",new sJ(K,3)),Q.add(new u6(H,new u7({size:1.6,sizeAttenuation:!1,vertexColors:!0,fog:!1,depthWrite:!1,transparent:!0,opacity:0.85})));let Y=new C0(new E7(1.6,32),new mJ({color:"#f3ecd2",fog:!1}));Y.position.set(-22,24,52),Y.lookAt(0,1,0),Q.add(Y);let X=new m6(new l7({map:C5("210,220,255"),fog:!1,transparent:!0,opacity:0.35,depthWrite:!1,blending:k9}));return X.scale.setScalar(14),X.position.copy(Y.position),Q.add(X),J.add(Q),Q}function aO(J){let Q=new Map,$=(E,N=0,F=0)=>{let q=E+N+F;if(!Q.has(q))Q.set(q,{m:new JJ({color:N?E:new y0(E).multiplyScalar(0.5),roughness:0.9,emissive:N||"#000",emissiveIntensity:F}),g:[]});return Q.get(q)},W=(E,N,F,q,V,O=0)=>{E.rotateY(O),E.translate(F,q,V),N.g.push(E)},Z=["#b8654a","#c9a14f","#4f8a84","#a8566b","#7f9a57","#c47f45","#5f7ea0"],K=-20;while(K<20){let E=3.4+k8()*2.6,N=3+k8()*2.8,F=10.5+k8()*0.8,q=Z[Math.floor(k8()*Z.length)];W(new xJ(E,N,2.4),$(q),K+E/2,N/2,F+1.2),W(new xJ(E+0.12,0.18,2.6),$("#d9d2bf"),K+E/2,N+0.09,F+1.2);let V=Math.max(1,Math.floor(E/1.5));for(let O=0;O<V;O++){let R=K+(O+0.5)*E/V,z=k8()<0.62,D=k8()<0.22,L=z?$(D?"#9fc3ff":"#ffd08a",D?"#6f9cff":"#ffb35a",D?2.4:3.2):$("#1e2a2e");if(W(new K8(0.75,0.95),L,R,1.55,F-0.005,Math.PI),N>4.2)W(new K8(0.7,0.8),k8()<0.5?$("#ffd08a","#ffb35a",1.8):$("#1e2a2e"),R,N-1.1,F-0.005,Math.PI);W(new xJ(0.9,0.06,0.12),$("#2c3432"),R,2.08,F-0.06)}for(let O=0;O<Math.floor(E/0.22);O++)W(new xJ(0.018,0.9,0.018),$("#1b2224"),K+0.11+O*0.22,0.45,F-0.55);W(new xJ(E,0.04,0.04),$("#1b2224"),K+E/2,0.9,F-0.55),K+=E+0.15}W(new xJ(44,0.16,1.8),$("#8a8578"),0,0.08,9.6);let H=[-14,-4,6,16];for(let E of H)W(new gJ(0.09,0.12,7,8),$("#6b6457"),E,3.5,9.2),W(new xJ(1.6,0.08,0.08),$("#4f4a40"),E,6.6,9.2);for(let E=0;E<H.length-1;E++)for(let N of[0,-0.25,0.3]){let F=new T(H[E],6.6+N,9.2),q=new T(H[E+1],6.6+N,9.2),V=F.clone().lerp(q,0.5);V.y-=0.55,W(new m9(new p9(F,V,q),16,0.012,4),$("#101517"),0,0,0)}for(let[E,N,F]of[[-9,12.8,7.5],[11,13.1,8.4],[2.5,13.4,6.4]]){let q=new sQ([new T(E,0,N),new T(E+0.3,F*0.5,N),new T(E+0.8,F,N-0.2)]);W(new m9(q,12,0.16,6),$("#5d5445"),0,0,0);for(let V=0;V<9;V++){let O=V/9*Math.PI*2,R=new cQ(0.28,2.6,4,1);R.rotateZ(Math.PI/2+0.55),R.translate(1.3,0,0),R.rotateY(O),W(R,$("#233428"),E+0.8,F,N-0.2)}}let Y=[];for(let{m:E,g:N}of Q.values()){let F=pW(N,!1);if(N.forEach((V)=>V.dispose()),!F)continue;let q=new C0(F,E);q.receiveShadow=!0,J.add(q),Y.push(q)}let X=new c9("#ff9d4d",9,14,1.8);X.position.set(6,5.9,8.6),J.add(X);let U=new C0(new P8(0.14,12,8),new JJ({color:"#ffcf94",emissive:"#ff9a45",emissiveIntensity:5}));U.position.copy(X.position),J.add(U);let G=new C0(new gJ(0.03,0.03,1.3,6),new JJ({color:"#4f4a40"}));return G.rotation.z=Math.PI/2,G.position.set(6,6.05,8.9),J.add(G),{merged:Y,farol:X}}function rO(J,Q){let $=new _J;$.position.copy(Q),J.add($);let W=new C0(new P8(0.038,16,12),new JJ({color:"#fff4d6",emissive:"#ffd08a",emissiveIntensity:9}));W.scale.y=1.25,$.add(W);let Z=new C0(new gJ(0.018,0.02,0.05,10),new JJ({color:"#2b2a26",roughness:0.6}));Z.position.y=0.065,$.add(Z);let K=new C0(new gJ(0.004,0.004,1.1,5),new JJ({color:"#15181a"}));K.position.y=0.64,$.add(K);let H=new m6(new l7({map:C5(),transparent:!0,opacity:0.55,depthWrite:!1,blending:k9}));H.scale.setScalar(0.75),$.add(H);let Y=[],X=new l7({color:"#3b3026",transparent:!0,opacity:0.85,depthWrite:!1});for(let U=0;U<6;U++){let G=new m6(X);G.scale.setScalar(0.012+k8()*0.008),$.add(G),Y.push({s:G,r:0.07+k8()*0.12,w:2+k8()*4,f:k8()*6,y:0.05+k8()*0.08,k:1.3+k8()})}return{g:$,halo:H,polillas:Y}}function tO(){let J=new g6;J.add(new C0(new P8(10,24,12),new lJ({side:R8,vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;void main(){gl_FragColor=vec4(mix(vec3(.07,.1,.13),vec3(.012,.02,.04),smoothstep(-.1,.6,vP.y)),1.);}"})));let Q=($,W,Z,K,H,Y)=>{let X=new C0(new K8(Z,K),new mJ({color:new y0($).multiplyScalar(W),side:J8}));X.position.set(...H),X.lookAt(...Y),J.add(X)};return Q("#ffcf94",8,1.2,1.2,[0,6,0],[0,0,0]),Q("#bfe3d6",2,5,2,[0,2.5,-8],[0,1,0]),Q("#ff9a3c",0.6,18,0.8,[0,0.6,9],[0,1,0]),J}function z5({scene:J,renderer:Q,camera:$,controls:W,software:Z,bulbLight:K}){function H(){let u=new K$(Q),x=tO(),H0=u.fromScene(x,0.02);J.environment?.dispose?.(),J.environment=H0.texture,J.environmentIntensity=0.6,u.dispose(),x.traverse((n)=>{n.geometry?.dispose(),n.material?.dispose()})}H(),J.background=new y0("#05080f"),J.fog=new m7("#0b1419",0.035);let Y=oO(J),X=aO(J),U=new T(0,G0.surfaceY+1.3,0),G=rO(J,U),E=vH((u,x,H0)=>{let n=u.createRadialGradient(x/2,H0*0.62,0,x/2,H0*0.62,x/2);n.addColorStop(0,"rgba(255,196,110,.95)"),n.addColorStop(0.45,"rgba(255,170,80,.35)"),n.addColorStop(1,"rgba(255,150,60,0)"),u.fillStyle=n,u.fillRect(0,0,x,H0)},256,128),N=new C0(new K8(0.62,0.26),new mJ({map:E,transparent:!0,opacity:0,depthWrite:!1,blending:k9,toneMapped:!1}));N.rotation.x=-Math.PI/2,N.position.y=G0.surfaceY+0.0012,N.renderOrder=3,J.add(N);let F={i:-1,ang:0,alfa:0,objetivo:0,pos:new T},q=(u)=>vH((x,H0,n)=>{x.strokeStyle=`rgba(${u},1)`,x.lineWidth=H0*0.09,x.beginPath(),x.arc(H0/2,n/2,H0*0.36,0,Math.PI*2),x.stroke();let W0=x.createRadialGradient(H0/2,n/2,0,H0/2,n/2,H0/2);W0.addColorStop(0,`rgba(${u},.5)`),W0.addColorStop(1,`rgba(${u},0)`),x.fillStyle=W0,x.fillRect(0,0,H0,n)},128,128),V=["255,181,71","45,225,194"].map((u)=>{let x=new C0(new K8(0.036,0.036),new mJ({map:q(u),transparent:!0,opacity:0,depthWrite:!1,blending:k9,toneMapped:!1}));return x.rotation.x=-Math.PI/2,x.position.y=G0.surfaceY+0.0015,x.renderOrder=3,J.add(x),x}),O=null,R=$.clone(),z=new T,D=new T,L=null,M=null,I=null,w=!1;function B(){if(L)return;let u=Q.getDrawingBufferSize(new $0),x=new aJ(u.x,u.y,{type:N8,samples:4});L=new SH(Q,x),L.addPass(new jH(J,R)),M=new $6(new $0(u.x/2,u.y/2),0.4,0.5,2),L.addPass(M),I=new q$({uniforms:{tDiffuse:{value:null},uTiempo:{value:0},uVineta:{value:0.34},uGrano:{value:0.018}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform float uTiempo,uVineta,uGrano;varying vec2 vUv;
    float azar(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+uTiempo*43.7)*43758.5453);}
    void main(){vec4 c=texture2D(tDiffuse,vUv);
     vec2 q=vUv-.5;float v=1.-uVineta*smoothstep(.25,.85,length(q*vec2(1.15,1.)));
     c.rgb*=v;
     // Sombras un pelín más frías y luces más cálidas: noche con bombillo.
     float l=dot(c.rgb,vec3(.2126,.7152,.0722));
     c.rgb*=mix(vec3(.93,.97,1.05),vec3(1.04,1.,.94),smoothstep(.02,.4,l));
     c.rgb+=(azar(vUv*vec2(1920.,1080.))-.5)*uGrano*(.4+l);
     gl_FragColor=c;}`}),L.addPass(I),L.addPass(new yH)}function _(u){if(w=!Z&&u==="high",w)B();G.halo.visible=!0,X.farol.visible=u==="high"}function d(u,x){if(L)L.setPixelRatio(Q.getPixelRatio()),L.setSize(u,x);R.aspect=$.aspect,R.updateProjectionMatrix()}let j=K?K.position.clone():null,b=new T;function Q0(u,x,{reduced:H0,view:n,ends:W0,temblor:Y0=0}){if(R.copy($),!H0){if(z.set(Math.sin(u*0.11)*0.012+Math.sin(u*0.037)*0.008,Math.sin(u*0.083+1)*0.007,Math.cos(u*0.097)*0.01),Y0)z.add(D.set(Math.sin(u*97)*Y0,Math.sin(u*113)*Y0*0.6,Math.cos(u*89)*Y0));R.position.add(z),D.copy(W.target).addScaledVector(z,0.35),R.lookAt(D)}if(!H0){let I0=0.012*Math.sin(u*2.86),a0=0.008*Math.sin(u*2.3+1.3);if(b.set(Math.sin(I0)*1.1,0,Math.sin(a0)*1.1),G.g.position.copy(U).add(b),G.g.rotation.set(a0,0,-I0),K)K.position.copy(j).add(b)}if(R.updateMatrixWorld(),G.halo.material.opacity=0.5+0.05*Math.sin(u*23)*Math.sin(u*1.7)+(H0?0:0.03*Math.sin(u*3.1)),!H0)for(let I0 of G.polillas){let a0=u*I0.w+I0.f;I0.s.position.set(Math.cos(a0)*I0.r,I0.y+Math.sin(a0*I0.k)*0.05,Math.sin(a0*1.3)*I0.r)}let g0=n?.phase==="playing";if(g0&&n.turn!=null){let[I0,a0,r0]=E9[n.turn],a=G0.boardLimit+0.075;if(F.i!==n.turn)F.i=n.turn,F.destino=new T(I0*a/G0.seatDistance,0,a0*a/G0.seatDistance),F.angDestino=r0;F.pos.lerp(F.destino,1-Math.exp(-x*6));let N0=F.angDestino-F.ang;N0=Math.atan2(Math.sin(N0),Math.cos(N0)),F.ang+=N0*(1-Math.exp(-x*6)),F.objetivo=0.8+(H0?0:0.12*Math.sin(u*2.2))}else F.objetivo=0;F.alfa+=(F.objetivo-F.alfa)*(1-Math.exp(-x*4)),N.material.opacity=F.alfa,N.visible=F.alfa>0.01,N.position.set(F.pos.x,G0.surfaceY+0.0012,F.pos.z),N.rotation.set(-Math.PI/2,0,F.ang);for(let I0=0;I0<2;I0++){let a0=V[I0],r0=g0&&W0?W0[I0]:null;if(!r0){a0.material.opacity=Math.max(0,a0.material.opacity-x*3),a0.visible=a0.material.opacity>0.01;continue}a0.visible=!0,a0.position.set(r0.x,G0.surfaceY+0.0015,r0.z);let a=H0?1:1+0.12*Math.sin(u*3.4+I0*1.3);a0.scale.setScalar(a),a0.material.opacity=Math.min(0.9,a0.material.opacity+x*3)}if(I)I.uniforms.uTiempo.value=u%100}function S(){if(w&&L)L.render();else Q.render(J,R)}function i(){L?.dispose()}return{vista:R,frame:Q0,render:S,resize:d,calidad:_,dispose:i,bulbPos:U,entorno:H}}var W6=Math.PI*2,o0=(J=0,Q=0,$=0)=>new T(J,Q,$),eO=[[],[4],[0,8],[0,4,8],[0,2,6,8],[0,2,4,6,8],[0,2,3,5,6,8]];async function rD(J,{onProgress:Q=()=>{}}={}){let $=new g6;$.background=new y0("#132931"),$.fog=new m7("#132931",0.024);let W=new Z8(42,innerWidth/innerHeight,0.08,90);W.position.set(3.1,2.65,4.2);let Z;try{Z=new YH({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{throw Error("This device could not start WebGL. Try a recent desktop browser.")}let K=!new URLSearchParams(location.search).has("hq")&&/SwiftShader|llvmpipe|Software/i.test((()=>{let A=Z.getContext(),g=A.getExtension("WEBGL_debug_renderer_info");return g?A.getParameter(g.UNMASKED_RENDERER_WEBGL):""})());Z.setSize(innerWidth,innerHeight),Z.setPixelRatio(K?0.65:Math.min(devicePixelRatio,1.5,1920/innerWidth)),Z.outputColorSpace=D8,Z.toneMapping=v7,Z.toneMappingExposure=1.24,Z.shadowMap.enabled=!K,Z.shadowMap.type=y7,Z.info.autoReset=!1,J.appendChild(Z.domElement);let H=new DH(W,Z.domElement);H.target.set(0,0.8,-0.15),H.enableDamping=!0,H.dampingFactor=0.065,H.enablePan=!1,H.minDistance=0.8,H.maxDistance=8,H.minPolarAngle=0.25,H.maxPolarAngle=Math.PI*0.48,H.update();let Y=new wW("#9fb3cc","#3a2c22",0.3);$.add(Y);let X=new n6("#7f9cc8",0.18);X.position.set(-5,9,5),$.add(X);let U=new c6("#ffc98a",5.2,7,Math.PI*0.32,0.6,2);U.position.set(0,G0.surfaceY+1.26,0),U.target.position.set(0,0,0);let G=new c9("#ffc07a",0.45,3.2,2);G.position.set(0,G0.surfaceY+1.2,0),$.add(G),U.castShadow=!0,U.shadow.mapSize.set(K?1024:2048,K?1024:2048),U.shadow.focus=0.52,U.shadow.bias=-0.0002,U.shadow.normalBias=0.004,U.shadow.radius=3,U.shadow.camera.near=0.2,U.shadow.camera.far=4,$.add(U,U.target);let E=new c9("#cfeee0",13,9,2);E.position.set(0,2.5,-3.5),$.add(E);{let A=new C0(new xJ(1.2,0.03,0.03),new JJ({color:"#e6fff4",emissive:"#e6fff4",emissiveIntensity:4}));A.position.set(0,3.12,-3.6),$.add(A)}let N=new Map,F=new Map;function q(A,g=0.85,o=0){let l=A+","+g+","+o;if(!N.has(l))N.set(l,new JJ({color:A,roughness:g,metalness:o}));return N.get(l)}function V(A,g,o,l=[0,0,0],K0=[1,1,1]){let J0=g.uuid;if(!F.has(J0))F.set(J0,{material:g,geos:[]});let R0=new n0().compose(o0(...o),new VJ().setFromEuler(new Y9(...l)),o0(...K0));A.applyMatrix4(R0),F.get(J0).geos.push(A)}function O(A,g,o,l,K0,J0,R0,T0=0){V(new xJ(l,K0,J0),typeof R0==="string"?q(R0):R0,[A,g,o],[0,T0,0])}function R(A,g,o,l,K0,J0,R0,T0=10,f0=[0,0,0]){V(new gJ(l,K0,J0,T0),typeof R0==="string"?q(R0):R0,[A,g,o],f0)}function z(A,g=512,o=512){let l=document.createElement("canvas");l.width=g,l.height=o,A(l.getContext("2d"),g,o);let K0=new N7(l);return K0.colorSpace=D8,K0.anisotropy=Math.min(8,Z.capabilities.getMaxAnisotropy()),K0}let D=191,L=()=>{return D=Math.imul(D,1664525)+1013904223>>>0,D/4294967296},M=z((A,g,o)=>{A.fillStyle="#65432b",A.fillRect(0,0,g,o);for(let l=0;l<700;l++){A.strokeStyle=`rgba(${L()>0.5?"170,122,70":"35,22,14"},${0.08+L()*0.2})`,A.lineWidth=0.3+L()*2,A.beginPath();let K0=L()*o;A.moveTo(0,K0);for(let J0=0;J0<g;J0+=20)A.lineTo(J0,K0+Math.sin(J0*0.013+l)*3);A.stroke()}}),I=new JJ({map:M,roughness:0.65,color:"#e7bc8c"}),w=q("#4c3022",0.75),B=q("#287770"),_=q("#d2c5a2"),d=q("#a65443"),j=z((A,g,o)=>{let l=g/2;for(let f0=0;f0<2;f0++)for(let Z0=0;Z0<2;Z0++){let A0=Z0*l,$J=f0*l;A.save(),A.beginPath(),A.rect(A0,$J,l,l),A.clip(),A.fillStyle="#c4b99f",A.fillRect(A0,$J,l,l);for(let[FJ,M8]of[[A0,$J],[A0+l,$J],[A0,$J+l],[A0+l,$J+l]])A.strokeStyle="#8d6450",A.lineWidth=l*0.04,A.beginPath(),A.arc(FJ,M8,l*0.42,0,Math.PI*2),A.stroke(),A.fillStyle="#4f6763",A.beginPath(),A.arc(FJ,M8,l*0.13,0,Math.PI*2),A.fill(),A.strokeStyle="#c4b99f",A.lineWidth=l*0.02,A.beginPath(),A.arc(FJ,M8,l*0.11,0,Math.PI*2),A.stroke();let c0=A0+l/2,EJ=$J+l/2,AJ=(FJ,M8)=>{A.fillStyle=M8,A.beginPath(),A.moveTo(c0,EJ-FJ),A.lineTo(c0+FJ,EJ),A.lineTo(c0,EJ+FJ),A.lineTo(c0-FJ,EJ),A.closePath(),A.fill()};AJ(l*0.2,"#8d6450"),AJ(l*0.13,"#c4b99f"),AJ(l*0.07,"#3a3630"),A.restore(),A.strokeStyle="#7e7563",A.lineWidth=3,A.strokeRect(A0+1.5,$J+1.5,l-3,l-3)}for(let f0=0;f0<9000;f0++)A.fillStyle=L()>0.5?"rgba(235,228,205,.07)":"rgba(30,28,24,.09)",A.fillRect(L()*g,L()*o,1+L()*2,1+L()*2);for(let f0=0;f0<40;f0++){let Z0=A.createRadialGradient(0,0,0,0,0,1),A0=L()*g,$J=L()*o,c0=20+L()*90;A.save(),A.translate(A0,$J),A.scale(c0,c0),Z0.addColorStop(0,"rgba(40,34,26,.10)"),Z0.addColorStop(1,"rgba(40,34,26,0)"),A.fillStyle=Z0,A.fillRect(-1,-1,2,2),A.restore()}},1024,1024);j.wrapS=j.wrapT=H7,j.repeat.set(35.55555555555556,27.77777777777778),O(0,-0.1,-4.575,32,0.2,15.85,new JJ({map:j,roughness:0.86,color:"#9d937f"})),O(0,-0.2,8.5,40,0.1,10.3,"#2b3133"),O(0,-0.075,3.45,40,0.15,0.2,"#a8a391");for(let A=-10;A<11;A++)O(A*1.8,-0.146,6.3,0.7,0.008,0.06,"#b9ad83");O(0,1.6,-5.1,7.5,3.4,0.2,B),O(-3.8,1.6,-3.85,0.2,3.4,2.7,B),O(3.8,1.6,-3.85,0.2,3.4,2.7,B),O(-3.48,1.1,-2.52,0.7,2.3,0.32,B),O(3.45,1.1,-2.52,0.8,2.3,0.32,B),O(0,2.95,-2.52,7.5,0.42,0.35,d),O(0,3.24,-3.7,8,0.12,4.4,"#435451");for(let A=0;A<30;A++)O(-4+A*0.276,3.15,-3.7,0.028,0.055,4.6,"#82928a");O(0,0.7,-4.24,3.9,1.4,0.62,I),O(0,1.43,-4.2,4.08,0.1,0.78,I);for(let A=0;A<3;A++)O(-0.6,1.58+A*0.48,-4.78,5.8,0.065,0.38,I),O(-0.6,1.84+A*0.48,-4.98,5.8,0.48,0.065,"#443e30");O(2.95,1.02,-4.55,1.02,2.1,0.8,"#d0ceb8"),O(2.95,1.12,-4.11,0.84,1.55,0.035,"#254c51");for(let A=0;A<3;A++)O(2.95,0.59+A*0.51,-4.05,0.8,0.025,0.05,"#b3c5bc");let b=[];for(let A=0;A<87;A++){let g=Math.floor(A/29),o=A%29;b.push({pos:[-3.18+o*0.182,1.615+g*0.48,-4.69],scale:0.7+A%5*0.07,color:["#566641","#a27735","#293f37","#6b3126"][A%4]})}let Q0=new F7([new $0(0,0),new $0(0.036,0),new $0(0.043,0.025),new $0(0.043,0.17),new $0(0.019,0.205),new $0(0.017,0.285),new $0(0.021,0.29),new $0(0.021,0.305),new $0(0,0.31)],12);b.forEach((A)=>V(Q0.clone(),q(A.color,0.3),A.pos,[0,0,0],[A.scale,A.scale,A.scale]));for(let[A,g,o]of[[-3.1,-1.9,"#a15340"],[3.1,-2,"#9d6540"],[-2.55,-1.95,"#5f6e39"]])for(let l=0;l<3;l++){O(A,0.19+l*0.34,g,0.52,0.3,0.4,o);for(let K0=0;K0<5;K0++)O(A-0.2+K0*0.1,0.18+l*0.34,g+0.204,0.055,0.16,0.015,"#2c3025")}for(let A=0;A<5;A++){let g=-7-A*3.5;O(g,1.5,-3,3.1,3,3.2,A%2?"#b3694f":"#4c8174"),O(g,2.2,-1.38,1,0.8,0.045,"#b59961"),O(g,2.2,-1.35,0.045,0.86,0.055,"#273e37"),O(g,0.98,-1.38,0.9,1.9,0.04,"#354e49")}for(let A=0;A<4;A++)R(-5-A*5,2.3,-1,0.08,0.09,4.6,"#665443"),O(-5-A*5,4.2,-1,1.8,0.09,0.09,"#514b3d");function S(A,g,o,l="#202d28"){let K0=new p9(o0(...A),o0(...o),o0(...g));V(new m9(K0,20,0.008,4,!1),q(l),[0,0,0])}let i=[];for(let A of[-1.95,1.95])R(A,1.45,2.55,0.035,0.045,2.9,"#5b4a38",8);for(let[A,g,o]of[[[-2.7,2.9,-2.45],[-1.95,2.85,2.55],0.5],[[2.7,2.9,-2.45],[1.95,2.85,2.55],0.5],[[-1.95,2.85,2.55],[1.95,2.85,2.55],0.32]]){let l=o0(...A),K0=o0(...g),J0=l.clone().lerp(K0,0.5);J0.y-=o*2;let R0=new p9(l,J0,K0);V(new m9(R0,24,0.006,4,!1),q("#1c2320"),[0,0,0]);let T0=Math.round(l.distanceTo(K0)/0.42);for(let f0=1;f0<T0;f0++){let Z0=R0.getPointAt(f0/T0);i.push(Z0.setY(Z0.y-0.035))}}{let A=new P8(0.022,10,8);A.scale(1,1.3,1);let g=["#ffd89a","#ffb56b","#ff8f7a","#9fe0c9","#ffe38a"],o=new G7(A,new mJ({color:new y0(4.5,4.5,4.5)}),i.length),l=new IJ;i.forEach((K0,J0)=>{l.position.copy(K0),l.updateMatrix(),o.setMatrixAt(J0,l.matrix),o.setColorAt(J0,new y0(g[J0%g.length]))}),$.add(o)}S([0,3.22,-1.6],[0,3.19,0],[0,3.02,-0.8]);let u=new _J;u.position.set(4.8,0,-2.8),$.add(u);let x=new C0(new gJ(0.1,0.15,4.5,9),q("#696047"));x.position.y=2.25,u.add(x);for(let A=0;A<9;A++){let g=new C0(new P8(1,10,5),q(A%2?"#4a654c":"#344e3d"));g.scale.set(0.27,0.075,1.5),g.position.set(Math.sin(A*W6/9)*0.72,4.35,Math.cos(A*W6/9)*0.72),g.rotation.set(0.23,A*W6/9,0),u.add(g)}let H0=new E8({map:M,color:"#d9a877",roughness:0.5,clearcoat:0.55,clearcoatRoughness:0.28}),n=new C0(new k7(G0.tableWidth,G0.tableThickness,G0.tableWidth,3,0.035),H0);n.position.y=G0.tableCenterY,n.castShadow=!0,n.receiveShadow=!0,$.add(n);let W0=z((A,g,o)=>{A.fillStyle="#2f5b47",A.fillRect(0,0,g,o);for(let K0=0;K0<o;K0+=2)for(let J0=0;J0<g;J0+=2){let R0=(L()-0.5)*14,T0=((J0>>1)+(K0>>1))%2?4:-4;A.fillStyle=`rgb(${47+R0+T0},${91+R0+T0},${71+R0+T0})`,A.fillRect(J0,K0,2,2)}for(let K0=0;K0<4;K0++){let J0=K0*Math.PI/2,R0=g/2+Math.sin(J0)*g*0.36,T0=o/2+Math.cos(J0)*o*0.36,f0=A.createRadialGradient(R0,T0,0,R0,T0,g*0.2);f0.addColorStop(0,"rgba(120,150,120,.16)"),f0.addColorStop(1,"rgba(120,150,120,0)"),A.fillStyle=f0,A.fillRect(0,0,g,o)}let l=A.createRadialGradient(g/2,o/2,g*0.1,g/2,o/2,g*0.62);l.addColorStop(0,"rgba(0,0,0,0)"),l.addColorStop(1,"rgba(0,0,0,.28)"),A.fillStyle=l,A.fillRect(0,0,g,o)},512,512),Y0=new C0(new k7(G0.feltWidth,0.012,G0.feltWidth,2,0.02),new E8({map:W0,roughness:0.97,sheen:0.8,sheenRoughness:0.55,sheenColor:new y0("#9fc7a8")}));Y0.position.y=G0.feltCenterY,Y0.receiveShadow=!0,$.add(Y0);let g0=G0.tableWidth/2-0.07;for(let A of[-g0,g0])for(let g of[-g0,g0])O(A,0.35,g,0.075,0.68,0.075,w);let I0=["#b8412f","#2f67a6"];for(let A=0;A<4;A++){let[g,o,l]=E9[A],K0=G0.feltWidth/2-0.012,J0=new C0(new K8(G0.feltWidth*0.72,0.009),new JJ({color:I0[A%2],roughness:0.9}));J0.rotation.set(-Math.PI/2,0,l),J0.position.set(g*K0/G0.seatDistance,G0.surfaceY+0.0006,o*K0/G0.seatDistance),J0.receiveShadow=!0,$.add(J0)}let a0=new JJ({roughness:0.92,map:z((A,g,o)=>{A.fillStyle="#8f7446",A.fillRect(0,0,g,o);let l=12,K0=g/l;for(let J0=0;J0<l;J0++)for(let R0=0;R0<l;R0++){let T0=(R0+J0)%2===0;for(let f0=0;f0<3;f0++){let Z0=150+L()*45|0;A.fillStyle=`rgb(${Z0+30},${Z0+8},${Z0-45})`;let A0=f0*K0/3+K0*0.04,$J=K0/3-K0*0.08;if(T0)A.fillRect(R0*K0+1,J0*K0+A0,K0-2,$J);else A.fillRect(R0*K0+A0,J0*K0+1,$J,K0-2)}}A.fillStyle="rgba(40,28,14,.18)";for(let J0=0;J0<=l;J0++)A.fillRect(J0*K0-1,0,2,o),A.fillRect(0,J0*K0-1,g,2)},256,256)});for(let A=0;A<4;A++){let[g,o,l]=E9[A],K0=new _J;K0.position.set(g,0,o),K0.rotation.y=l,$.add(K0);let J0=q(A%2?"#2f5f94":"#a63d2d",0.62),R0=(T0,f0,Z0,A0,$J,c0,EJ=J0,AJ=0.008)=>{let FJ=o0(A0,$J,c0).applyAxisAngle(o0(0,1,0),l).add(o0(g,0,o));V(new k7(T0,f0,Z0,2,AJ),EJ,FJ.toArray(),[0,l,0])};R0(G0.chairSeatWidth-0.04,0.035,0.5,0,G0.chairSeatY,0,a0,0.01);for(let T0 of[-1,1])R0(0.04,0.05,0.54,T0*(G0.chairSeatWidth/2-0.02),G0.chairSeatY-0.005,0);for(let T0 of[-1,1])R0(G0.chairSeatWidth,0.05,0.04,0,G0.chairSeatY-0.005,T0*0.25);for(let T0 of[-0.24,0.24])for(let f0 of[-0.21,0.21])R0(0.04,G0.chairSeatY,0.04,T0,G0.chairSeatY/2,f0);for(let T0 of[-0.24,0.24])R0(0.024,0.024,0.42,T0,0.15,0);R0(0.48,0.024,0.024,0,0.15,0.21);for(let T0 of[-0.24,0.24])R0(0.04,0.52,0.04,T0,G0.chairSeatY+0.26,-0.23);for(let T0 of[0.2,0.33,0.46])R0(0.46,T0===0.46?0.07:0.045,0.022,0,G0.chairSeatY+T0,-0.23)}function r0(A,g,o,l,K0,J0=60){let R0=z((T0,f0,Z0)=>{T0.fillStyle=l,T0.fillRect(0,0,f0,Z0),T0.fillStyle=K0,T0.textAlign="center",T0.textBaseline="middle",T0.font=`bold ${J0}px Georgia`,T0.fillText(A,f0/2,Z0/2)},1024,256);return new C0(new K8(g,o),new mJ({map:R0}))}let a=r0("COLMADO  LA ESQUINA",4.8,0.38,"#a05d42","#f8e8b9",64);a.position.set(0,2.94,-2.33),$.add(a);let N0=r0("MESA",0.11,0.029,"#284e3e","#81906b",77);N0.material=new JJ({map:N0.material.map,roughness:1}),N0.rotation.x=-Math.PI/2,N0.position.set(0,G0.surfaceY+0.001,0.3),$.add(N0);let E0=new _J;E0.position.set(0,2.62,-2.2),E0.rotation.x=-Math.PI/2,$.add(E0),R(0,2.9,-2.2,0.015,0.015,0.56,"#777a68",8),R(0,3.18,-2.2,0.075,0.075,0.025,"#767763",12);let u0=new C0(new P8(0.075,12,8),q("#41493d"));E0.add(u0);for(let A=0;A<5;A++){let g=new C0(new xJ(0.13,0.5,0.025),q("#85856e",0.88,0.05));g.position.set(Math.sin(A*W6/5)*0.285,Math.cos(A*W6/5)*0.285,0),g.rotation.z=-A*W6/5,E0.add(g)}let l0=new _J;l0.position.set(-12,0.05,5.2),$.add(l0);for(let A of[-0.36,0.36]){let g=new C0(new q7(0.19,0.038,7,14),q("#182221"));g.position.set(A,0.2,0),l0.add(g)}let p0=new C0(new k7(0.65,0.17,0.2,2,0.04),q("#823e2f",0.45,0.25));p0.position.y=0.49,l0.add(p0);let uJ=new C0(new xJ(0.35,0.06,0.22),q("#202725"));uJ.position.set(-0.08,0.61,0),l0.add(uJ);let HJ=new C0(new gJ(0.015,0.015,0.45,6),q("#8c9c96",0.4,0.5));HJ.position.set(0.32,0.59,0),HJ.rotation.z=-0.3,l0.add(HJ);let LJ=D5({scene:$,texture:z,mat:q,box:O,cylinder:R,random:L,teal:B,wood:I,storeSign:a});for(let{material:A,geos:g}of F.values()){let o=pW(g,!1);if(o){let l=new C0(o,A);l.receiveShadow=!0,o.computeBoundingBox(),l.castShadow=o.boundingBox.distanceToPoint(o0(0,0.8,0))<1.6&&o.boundingBox.getSize(o0()).length()<8,$.add(l)}g.forEach((l)=>l.dispose())}let OJ=new _J,YJ=new _J;$.add(OJ,YJ);let iJ=new k7(G0.tileLength,G0.tileThickness,G0.tileWidth,3,0.0024),TJ=new E8({color:"#f4eee0",roughness:0.36,clearcoat:0.85,clearcoatRoughness:0.22}),Q8=new E8({color:"#e2dac6",roughness:0.42,clearcoat:0.7,clearcoatRoughness:0.3}),dJ=new JJ({color:"#b98b3e",roughness:0.28,metalness:1}),cJ=new gJ(0.0019,0.0019,0.0009,12),f=new JJ({color:"#0b0a09",roughness:0.55}),F8=new JJ({color:"#2a2622",roughness:0.6}),BJ=new gJ(G0.pipRadius,G0.pipRadius,0.0007,14),bJ=new xJ(0.0014,0.0005,G0.tileWidth*0.8),P=new Set([iJ,BJ,bJ,cJ]),k=new Set([TJ,Q8,f,F8,dJ]),y=[H0,Y0.material,TJ,Q8].map((A)=>[A,{clearcoat:A.clearcoat,sheen:A.sheen}]);function s(A,g,o=!1){let l=new _J,K0=new C0(iJ,o?Q8:TJ);if(K0.castShadow=!0,K0.receiveShadow=!0,l.add(K0),!o){let J0=[];if([A,g].forEach((f0,Z0)=>eO[f0].forEach((A0)=>J0.push(o0((Z0===0?-1:1)*G0.tileLength/4+(A0%3-1)*G0.pipColumnSpacing,G0.tileThickness/2+0.0005,(Math.floor(A0/3)-1)*G0.pipRowSpacing)))),J0.length){let f0=new G7(BJ,f,J0.length),Z0=new n0;J0.forEach((A0,$J)=>f0.setMatrixAt($J,Z0.makeTranslation(A0.x,A0.y,A0.z))),l.add(f0)}let R0=new C0(bJ,F8);R0.position.y=G0.tileThickness/2+0.0002,l.add(R0);let T0=new C0(cJ,dJ);T0.position.y=G0.tileThickness/2+0.0004,l.add(T0)}return l}function U0(A){return o0(A.x,G0.surfaceY+G0.tileThickness/2+0.001,A.z)}let O0=new C0(new q7(0.2,0.006,5,38),new mJ({color:"#e8bf70",transparent:!0,opacity:0.7}));O0.rotation.x=-Math.PI/2,O0.position.y=0.027,$.add(O0);let q0=[],r=[],t=[],P0=[],b0=new OH,L0=0,F0=4,m0=[];P0.push(...B5($));let d0=o0(),RJ=o0(),v=o0(),V0=o0(),e=new n0,D0=o0(),w0=o0();function X0(A){let g=null;if(A.root.traverse((c0)=>{if(c0.isSkinnedMesh&&c0.morphTargetDictionary&&!g)g=c0}),!g||g.morphTargetDictionary.parpadeo==null)return;A.cara={mesh:g,iP:g.morphTargetDictionary.parpadeo,iS:g.morphTargetDictionary.sonrisa};let o=g.geometry.attributes.position,l=g.userData?.boca;if(l){let c0=1e9,EJ=0;for(let AJ=0;AJ<o.count;AJ++){let FJ=(o.getX(AJ)-l[0])**2+(o.getY(AJ)-l[1])**2+(o.getZ(AJ)-l[2])**2;if(FJ<c0)c0=FJ,EJ=AJ}A.bocaMundo=(AJ)=>{return g.skeleton.update(),g.getVertexPosition(EJ,AJ).applyMatrix4(g.matrixWorld)}}let K0=g.userData?.ojos,J0=g.userData?.parpado;if(!K0||!J0)return;let R0=g.geometry.attributes.position,T0=(c0)=>{let EJ=1e9,AJ=0;for(let FJ=0;FJ<R0.count;FJ++){let M8=(R0.getX(FJ)-c0[0])**2+(R0.getY(FJ)-c0[1])**2+(R0.getZ(FJ)-c0[2])**2;if(M8<EJ)EJ=M8,AJ=FJ}return AJ},f0=new K8(0.027,0.0125,8,4);f0.translate(0,-0.00625,0);let Z0=f0.attributes.position,A0=[];for(let c0=0;c0<Z0.count;c0++){let EJ=Z0.getX(c0)/0.0135,AJ=-Z0.getY(c0)/0.0125;Z0.setZ(c0,0.0032*Math.cos(EJ*Math.PI/2)*(0.5+0.5*AJ));let FJ=AJ>0.85?0.45:1;A0.push(FJ,FJ,FJ)}f0.setAttribute("color",new UJ(A0,3)),f0.computeVertexNormals();let $J=new JJ({color:new y0().setRGB(...J0,D8),roughness:0.7,vertexColors:!0});A.parpados=K0.map((c0)=>{let EJ=new C0(f0,$J);return EJ.visible=!1,EJ.frustumCulled=!1,$.add(EJ),{m:EJ,k:T0(c0)}})}function k0(A){let g=A.parpados;if(!g||!A.cara)return;let o=A.parpadeo||0;if(o<0.03){for(let R0 of g)R0.m.visible=!1;return}let l=A.cara.mesh;l.skeleton.update();let K0=l.getVertexPosition(g[0].k,d0).applyMatrix4(l.matrixWorld).clone(),J0=l.getVertexPosition(g[1].k,d0).applyMatrix4(l.matrixWorld).clone();if(A.head.getWorldPosition(D0),A.front.getWorldPosition(w0),V0.subVectors(w0,D0).normalize(),RJ.subVectors(J0,K0).normalize(),v.crossVectors(V0,RJ).normalize(),v.y<0)v.negate();RJ.crossVectors(v,V0).normalize(),e.makeBasis(RJ,v,V0);for(let[R0,T0]of[[g[0],K0],[g[1],J0]])R0.m.visible=!0,R0.m.quaternion.setFromRotationMatrix(e),R0.m.position.copy(T0).addScaledVector(v,0.0052).addScaledVector(V0,0.0024),R0.m.scale.set(1,o,1)}async function t0(A,g){try{Q(`Seating ${["Don Rafa","Marisol","Luis","Carmen"][A]}…`,L0/F0);let o=await b0.loadAsync(`/models/${g}.glb`);r[A]=o;let l=o.scene,K0=new _J;K0.add(l);let J0=new eQ(l);if(o.animations[0])J0.clipAction(o.animations.find((c0)=>c0.name==="Seated")||o.animations[0]).play();J0.setTime(G0.neutralPoseTime),l.updateMatrixWorld(!0),l.traverse((c0)=>{if(c0.isSkinnedMesh)c0.computeBoundingBox();if(c0.isMesh)c0.castShadow=!0,c0.receiveShadow=!0,c0.frustumCulled=!1,c0.material.roughness=0.83});let R0=new z8().setFromObject(l),T0=l.getObjectByName("Hips"),f0=T0?.getWorldPosition(o0())||R0.getCenter(o0());l.position.set(-f0.x,-R0.min.y,-f0.z);let[Z0,A0,$J]=E9[A];if(K0.position.set(Z0,0,A0),K0.rotation.y=$J,$.add(K0),q0[A]={root:l,holder:K0,index:A,pose:TH(l),head:l.getObjectByName("Head"),neck:l.getObjectByName("neck"),front:l.getObjectByName("headfront"),chest:l.getObjectByName("Spine"),hips:l.getObjectByName("Hips"),lomo:l.getObjectByName("Spine02"),muslos:[l.getObjectByName("LeftUpLeg"),l.getObjectByName("RightUpLeg")],hombros:[[1,l.getObjectByName("LeftShoulder")],[-1,l.getObjectByName("RightShoulder")]],spine:l.getObjectByName("Spine01"),reaction:null,brazos:["Left","Right"].map((c0)=>({lado:c0,hombro:l.getObjectByName(c0+"Shoulder"),brazo:l.getObjectByName(c0+"Arm"),antebrazo:l.getObjectByName(c0+"ForeArm"),mano:l.getObjectByName(c0+"Hand")}))},q0[A].bebida=P0.find((c0)=>c0.index===A),X0(q0[A]),L0++,Q(L0===4?"The table is ready.":`${L0} of 4 seats ready`,L0/F0),t.length===0&&T9>0)HQ(T9)}catch(o){m0.push(g),console.error("Character load failed",g,o),Q(`Could not load ${g}. Reload to retry.`,L0/F0)}}let fJ=Promise.all(["rafa-upright","marisol","luis-upright","carmen"].map((A,g)=>t0(g,A))),kJ=null,A8=null,l8="",QQ=null,q8=z5({scene:$,renderer:Z,camera:W,controls:H,software:K,bulbLight:U});q8.calidad("high");let C7=new Set,R$=new Map,L$=[0,1,2,3].map(()=>o0()),$Q=(A)=>{let g=A.detail||{};if(g.active)C7.add(g.seat),R$.set(g.seat,g.type);else C7.delete(g.seat)};window.addEventListener("mesa:botvoice",$Q);let u8=null,T9=0,tW="",WQ=0,Z6="attract",$8=null,_8=[],V$=0,ZQ=0;function KQ(A){while(A.children.length){let g=A.children.pop();g.parent=null,g.traverse((o)=>{if(o.isMesh&&!P.has(o.geometry))o.geometry.dispose();if(o.isMesh&&!k.has(o.material))o.material.dispose()})}}function HQ(A){T9=A;let g=Math.min(8,A);for(let o=t.length-1;o>=g;o--)$.remove(t[o].holder),t.pop();while(t.length<g&&r.filter(Boolean).length){let o=t.length,l=r[o%4]||r.find(Boolean),K0=mW(l.scene),J0=new _J;J0.add(K0);let R0=new eQ(K0);if(l.animations[0])R0.clipAction(l.animations.find((A0)=>A0.name==="Seated")||l.animations[0]).play();R0.setTime(G0.neutralPoseTime),K0.updateMatrixWorld(!0),K0.traverse((A0)=>{if(A0.isSkinnedMesh)A0.computeBoundingBox();if(A0.isMesh)A0.castShadow=!1,A0.frustumCulled=!1});let T0=new z8().setFromObject(K0),f0=K0.getObjectByName("Hips")?.getWorldPosition(o0())||T0.getCenter(o0());K0.position.x-=f0.x,K0.position.y-=T0.min.y,K0.position.z-=f0.z,J0.position.set(-2.5+o%4*1.66,0,-2.5-Math.floor(o/4)*0.65),J0.rotation.y=0,$.add(J0);let Z0=new C0(new xJ(0.56,0.06,0.54),_);Z0.position.set(0,G0.chairSeatY,0),J0.add(Z0),t.push({root:K0,holder:J0,pose:TH(K0),head:K0.getObjectByName("Head"),neck:K0.getObjectByName("neck"),front:K0.getObjectByName("headfront"),chest:K0.getObjectByName("Spine"),spine:K0.getObjectByName("Spine01"),index:o+4})}}let K6=-1,T8=null,H6=H.minDistance;function C(A,g,o){if(document.documentElement.classList.contains("reduced"))return;let l=o0(1,0,1).normalize(),K0=-9;for(let[R0,T0]of[[1,1],[1,-1],[-1,1],[-1,-1]]){let f0=o0(R0,0,T0).normalize(),Z0=f0.x*A.x+f0.z*A.z;if(Z0>K0)K0=Z0,l=f0}let J0=A.clone().addScaledVector(l,0.3);if(J0.x=X7.clamp(J0.x,-0.4,0.4),J0.z=X7.clamp(J0.z,-0.4,0.4),J0.y=G0.surfaceY+(o?0.12:0.19),!T8)H6=H.minDistance;H.minDistance=0.1,T8={pos:T8?.pos||W.position.clone(),target:T8?.target||H.target.clone(),at:QJ.elapsedTime+3.4},$8={from:W.position.clone(),to:J0,fromTarget:H.target.clone(),toTarget:A.clone().setY(A.y+0.01),t:0,dur:0.45}}function h(A="table"){if(H.minDistance=A==="seat"||A==="close"?0.3:0.7,H.minPolarAngle=A==="overhead"?0.01:0.25,W.aspect<0.95&&A==="table")A="overhead";let g,o=o0(0,0.8,0);if(A==="attract")g=o0(0.75,1.3,4.4),o=o0(-1,1.4,-1.2);else if(A==="overhead")g=o0(0.001,1.86,0.34),o=o0(0,G0.surfaceY,0.02);else if(A==="seat")g=o0(0,1.36,0.74),o=o0(0,0.82,-0.12);else if(A==="close")g=o0(0.62,1.3,1),o=o0(-0.03,0.85,-0.08);else g=o0(0.85,1.66,1.5),o=o0(0,0.85,-0.14);if(A!=="attract"&&A!=="seat"&&W.aspect<1.3){let l=Math.min(2.4,Math.pow(1.6/W.aspect,0.8));g=o.clone().add(g.clone().sub(o).multiplyScalar(l))}if(q0[0])q0[0].root.visible=A!=="seat";T8=null,H.minDistance=Math.min(H.minDistance,H6),$8={from:W.position.clone(),to:g,fromTarget:H.target.clone(),toTarget:o,t:0}}let c=o0(0,1,0),p=new VJ().setFromAxisAngle(o0(1,0,0),0.12),m=new VJ().setFromAxisAngle(c,Math.PI/2),M0=new VJ().setFromAxisAngle(o0(0,0,1),Math.PI/2),j0=G0.tableCenterY+G0.tableThickness/2+G0.tileLength/2*Math.cos(0.12)+G0.tileThickness/2*Math.sin(0.12)+0.001;function B0(A,g,o){let l=E9[A][2];return o.quaternion.setFromAxisAngle(c,l).multiply(p).multiply(m).multiply(M0),o.position.set(g,j0,-G0.rackRadius).applyAxisAngle(c,l),o}let _0=new G7(iJ,Q8,28);_0.count=0,_0.castShadow=!0,_0.receiveShadow=!0,_0.frustumCulled=!1,YJ.add(_0);let h0=[[],[],[],[]],s0=new IJ,XJ=[0,0,0,0],v0="",DJ=new Set;function nJ(A){let g=0;for(let o=0;o<4;o++){let l=DJ.has(o)?0:XJ[o],K0=h0[o];while(K0.length<l)K0.push((K0.length-(l-1)/2)*G0.rackSpacing);K0.length=l;for(let J0=0;J0<l;J0++){let R0=(J0-(l-1)/2)*G0.rackSpacing;K0[J0]+=(R0-K0[J0])*(1-Math.exp(-A*10)),B0(o,K0[J0],s0),s0.updateMatrix(),_0.setMatrixAt(g++,s0.matrix)}}_0.count=g,_0.instanceMatrix.needsUpdate=!0}let CJ=new _J;$.add(CJ);let zJ=new Map,W8="",S0="";function O8(){for(let A=0;A<28;A++){let g=s(0,0,!0);g.position.set((A*37%23-11)*0.016,G0.surfaceY+G0.tileThickness*(0.55+A%3*0.9),(A*13%19-9)*0.016),g.rotation.y=A*1.73,OJ.add(g)}}let ZJ=(A)=>A*A*(3-2*A),w8=new VJ().setFromAxisAngle(o0(1,0,0),Math.PI),d8=new VJ().setFromAxisAngle(c,-Math.PI/2);function V9(A,g){A.revealed.forEach((o,l)=>{let K0=o.length,J0=E9[l][2];o.forEach((R0,T0)=>{let f0=(T0-(K0-1)/2)*G0.rackSpacing,Z0=s(R0.a,R0.b);B0(l,f0,s0);let A0=s0.quaternion.clone().multiply(w8),$J=s0.position.clone(),c0=o0(f0,G0.surfaceY+G0.tileThickness/2+0.001,-G0.rackRadius+0.047).applyAxisAngle(c,J0),EJ=new VJ().setFromAxisAngle(c,J0).multiply(d8);Z0.position.copy($J),Z0.quaternion.copy(A0),Z0.visible=!1,OJ.add(Z0),_8.push({obj:Z0,from:$J,to:c0,qFrom:A0,qTo:EJ,elapsed:-(g+l*0.3+T0*0.055),duration:0.42,revela:l,ultima:T0===K0-1})})})}function w9(A,g=0){u8=A;{let J0=A&&(A.phase==="handEnd"||A.phase==="seriesEnd")&&A.result,R0=J0?A.handNo+":"+A.phase:"";if(R0&&R0!==l8)A8={t:QJ.elapsedTime+0.5,team:A.result.team??null};if(!J0)A8=null;l8=R0}if(T9!==g)HQ(g);let o=!A||A.phase==="lobby"?"pila":"mano"+A.handNo;if(o!==W8){W8=o,KQ(OJ),zJ.clear(),_8=_8.filter((J0)=>J0.reparto);for(let J0 of q0)if(J0)J0.jugada=null;if(o==="pila")O8()}if(A&&A.chain?.length){let J0=K5(A.chain,A.moves),R0=A.event,T0=["domino","capicua","tranque"].includes(R0?.type),f0=A.moves[A.moves.length-1],Z0=R0?.type==="domino"||R0?.type==="capicua",A0=R0?.type==="play"?R0.tile:T0&&f0?.type==="play"?f0.tile:null;A.chain.forEach(($J,c0)=>{if(zJ.has($J.id))return;let EJ=s($J.x,$J.y),AJ=U0(J0[c0]);if(EJ.position.copy(AJ),EJ.rotation.y=J0[c0].yaw,EJ.updateMatrix(),OJ.add(EJ),zJ.set($J.id,EJ),$J.id!==A0||$J.seat==null)return;B0($J.seat,0,s0);let FJ={obj:EJ,from:s0.position.clone(),to:AJ.clone(),qFrom:s0.quaternion.clone(),qTo:EJ.quaternion.clone(),elapsed:0,duration:Z0?0.7:0.55,golpe:Z0};if(EJ.position.copy(FJ.from),EJ.quaternion.copy(FJ.qFrom),_8.push(FJ),T0)C(AJ,$J.seat,Z0);V$=performance.now();let M8=q0[$J.seat];if(kJ={p:AJ.clone(),t:QJ.elapsedTime+FJ.duration},M8)M8.reaction={time:QJ.elapsedTime},M8.jugada={t0:QJ.elapsedTime,obj:EJ,anim:FJ,hasta:AJ.clone()}})}if(A?.phase==="playing"&&A.handNo!==WQ&&A.moves.length===0){WQ=A.handNo,KQ(CJ),_8=_8.filter((J0)=>!J0.reparto),ZQ=performance.now()+3300;for(let J0=0;J0<4;J0++)h0[J0]=Array.from({length:7},(R0,T0)=>(T0-3)*G0.rackSpacing);for(let J0=0;J0<28;J0++){let R0=J0%4,T0=Math.floor(J0/4),f0=s(0,0,!0),Z0=o0((J0*37%23-11)*0.015,G0.surfaceY+0.012,(J0*13%19-9)*0.015);f0.position.copy(Z0),f0.rotation.y=J0*1.73,CJ.add(f0);let A0=B0(R0,(T0-3)*G0.rackSpacing,new IJ);_8.push({obj:f0,from:Z0,to:A0.position.clone(),qFrom:f0.quaternion.clone(),qTo:A0.quaternion.clone(),elapsed:-J0*0.065,duration:1.1,reparto:!0})}}let l=A?.moves?.[A.moves.length-1],K0=A?A.handNo+":"+A.moves.length:"";if(l?.type==="pass"&&S0!==K0){S0=K0;let J0=q0[l.seat];if(J0)J0.toque={t0:QJ.elapsedTime}}{let J0=A&&(A.phase==="handEnd"||A.phase==="seriesEnd")&&A.revealed,R0=J0?"r"+A.handNo:"";if(!J0)v0="",DJ.clear();else if(R0!==v0){v0=R0;let T0=A.result?.type;V9(A,T0==="domino"||T0==="capicua"?3.4:T0==="tranque"?2.5:1.2)}}XJ=[0,1,2,3].map((J0)=>!A||A.phase==="lobby"?0:A.counts[J0]??0),O0.visible=!1,QQ=A?.phase==="playing"&&A.chain?.length?H5(A.chain,A.moves):null}let QJ=new vW,hJ=0,c8=0,PJ=0,S8=60,S9=!1,z7=!1,YQ=null,Y6="high",fH=null,D$=performance.now(),B$=0,hH=!1,P5=new URLSearchParams(location.search).has("debug"),bH=U.intensity,P7=o0(),I5=o0(0,G0.surfaceY,0);function eW(){if(S9||z7){YQ=null;return}YQ=requestAnimationFrame(eW);let A=QJ.getDelta(),g=Math.min(A,0.06),o=fH??QJ.elapsedTime,l=performance.now();if(c8++,PJ+=A,PJ>1){if(S8=c8/PJ,c8=0,PJ=0,!B$&&Y6==="high"&&l-D$>9000&&l-D$<30000&&S8<30)B$=l,JZ.quality("low"),dispatchEvent(new CustomEvent("mesa:calidad",{detail:"low"}));else if(Y6==="low"&&!hH&&l-(B$||D$)>9000&&l-(B$||D$)<40000&&S8<20)hH=!0,JZ.quality("min"),dispatchEvent(new CustomEvent("mesa:calidad",{detail:"min"}))}hJ++,Z.info.reset();let K0=document.documentElement.classList.contains("reduced");if(T8&&QJ.elapsedTime>T8.at)$8={from:W.position.clone(),to:T8.pos,fromTarget:H.target.clone(),toTarget:T8.target,t:0,dur:1.2},T8=null,H.minDistance=H6;let J0=0;if(K6>=0){let Z0=QJ.elapsedTime-K6;if(Z0<0.5){let A0=0.0045*Math.exp(-Z0*8)*Math.sin(Z0*W6*18);OJ.position.y=A0,YJ.position.y=A0,J0=K0?0:0.004*Math.exp(-Z0*9),U.intensity=bH*(1+0.35*Math.exp(-Z0*14))}else K6=-1,OJ.position.y=0,YJ.position.y=0,U.intensity=bH}if($8){$8.t=Math.min(1,$8.t+g/($8.dur||1.1));let Z0=ZJ($8.t);if(W.position.lerpVectors($8.from,$8.to,Z0),H.target.lerpVectors($8.fromTarget,$8.toTarget,Z0),$8.t===1)$8=null}if(!K0)E0.rotation.z=o*3.5,u.rotation.z=Math.sin(o*0.47)*0.009,LJ.update(o);let R0=u8,T0={dt:g,jugando:R0?.phase==="playing",turno:R0?.turn,habla:C7,hablaTipo:R$,foco:kJ,fin:A8,cabezas:q0.map((Z0,A0)=>Z0?.head?Z0.head.getWorldPosition(L$[A0]):null)};for(let Z0 of q0){if(!Z0)continue;aW(Z0,o,K0,T0),k0(Z0)}for(let Z0=0;Z0<t.length;Z0++)if((hJ+Z0)%2===0)aW(t[Z0],o,K0,T0);_8=_8.filter((Z0)=>{if(Z0.elapsed+=g,Z0.elapsed<0)return!0;let A0=Math.min(1,Z0.elapsed/Z0.duration);if(Z0.revela!=null){Z0.obj.visible=!0,DJ.add(Z0.revela);let $J=ZJ(A0);if(Z0.obj.quaternion.slerpQuaternions(Z0.qFrom,Z0.qTo,$J),Z0.obj.position.lerpVectors(Z0.from,Z0.to,$J),Z0.obj.position.y+=Math.sin(A0*Math.PI)*0.012,A0>=1&&Z0.ultima)dispatchEvent(new CustomEvent("mesa:aterriza",{detail:{revela:!0}}));return A0<1}if(Z0.reparto)return Z0.obj.position.lerpVectors(Z0.from,Z0.to,ZJ(A0)),Z0.obj.position.y+=Math.sin(A0*Math.PI)*0.035,Z0.obj.quaternion.slerpQuaternions(Z0.qFrom,Z0.qTo,ZJ(Math.min(1,Math.max(0,(A0-0.3)/0.7)))),A0<1;if(Z0.obj.quaternion.slerpQuaternions(Z0.qFrom,Z0.qTo,ZJ(Math.min(1,A0/0.4))),Z0.golpe){let $J=Math.min(1,A0/0.62);Z0.obj.position.lerpVectors(Z0.from,Z0.to,ZJ($J)),Z0.obj.position.y+=A0<0.62?Math.sin($J*Math.PI/2)*0.17:0.17*(1-((A0-0.62)/0.38)**2)}else Z0.obj.position.lerpVectors(Z0.from,Z0.to,ZJ(A0)),Z0.obj.position.y+=Math.sin(A0*Math.PI)*0.07;if(A0>=1&&!Z0.sono){if(Z0.sono=!0,Z0.golpe)K6=QJ.elapsedTime;dispatchEvent(new CustomEvent("mesa:aterriza",{detail:{golpe:!!Z0.golpe}}))}return A0<1});let f0=l<ZQ;if(YJ.visible=!f0,!f0&&CJ.children.length)KQ(CJ);if(nJ(g),H.update(),q8.frame(o,g,{reduced:K0,view:R0,ends:QQ,temblor:J0}),q8.render(),hJ%2===0)for(let Z0 of document.querySelectorAll("[data-seatlabel]")){let A0=Number(Z0.dataset.seatlabel),[$J,c0]=E9[A0],EJ=q0[A0]?.head,AJ=EJ&&EJ.getWorldPosition(P7).distanceTo(q8.vista.position)<I5.distanceTo(q8.vista.position)-0.2;if(AJ)P7.y-=0.3;else if(EJ)P7.y+=0.23;else P7.set($J,1.45,c0);let FJ=P7.project(q8.vista),M8=!1;if(!AJ&&FJ.y>0.8&&EJ)EJ.getWorldPosition(P7).y-=0.1,FJ=P7.project(q8.vista),M8=!0;let A5=Math.min(FJ.y,0.8);Z0.style.transform=`translate(${(FJ.x*0.5+0.5)*innerWidth}px,${(-A5*0.5+0.5)*innerHeight}px) translate(-50%,${AJ?"-50%":M8?"0":"-100%"})`,Z0.style.visibility=FJ.z>1||Math.abs(FJ.x)>1.1||FJ.y<-1.15?"hidden":"visible"}if(hJ%30===0||hJ===1){if(window.mesaDiagnostics={fps:Math.round(S8),drawCalls:Z.info.render.calls,triangles:Z.info.render.triangles,characters:L0,crowd:T9,visibleCrowd:t.length,boardTiles:u8?.chain.length||0,quality:Y6,modelErrors:m0},P5){window.mesaRigDebug=q0.filter(Boolean).map((A0)=>({index:A0.index,head:A0.head?.getWorldPosition(o0()).toArray(),hip:A0.hips?.getWorldPosition(o0()).toArray(),rootScale:A0.root.scale.toArray()}));let Z0=document.querySelector("#perf");if(Z0)Z0.textContent=`${Math.round(S8)} fps · ${Z.info.render.calls} draws`}}}window.mesaCamara=(A,g)=>{$8=null,T8=null,H.minDistance=0.1,W.position.set(...A),H.target.set(...g),H.update()},window.mesaCara=(A,g,o)=>{let l=q0[A];if(l)l.caraFija=g==null?null:{p:g,s:o??0}},window.mesaBeber=(A,g)=>{let o=q0[A];if(o&&o.bebida&&!o.jugada)o.trago={t0:QJ.elapsedTime,fijo:g}},w9(null),eW();let xH=()=>{if(W.aspect<0.95)W.setViewOffset(innerWidth,innerHeight*1.24,0,innerHeight*0.24,innerWidth,innerHeight);else W.clearViewOffset();W.updateProjectionMatrix()},gH=()=>K?0.65:Y6==="min"?Math.min(devicePixelRatio,1)*0.55:Y6==="low"?Math.min(devicePixelRatio,1)*0.8:Math.min(devicePixelRatio,1.5,1920/innerWidth),pH=()=>{W.aspect=innerWidth/innerHeight,xH(),Z.setPixelRatio(gH()),Z.setSize(innerWidth,innerHeight),q8.resize(innerWidth,innerHeight)};xH(),window.addEventListener("resize",pH),H.addEventListener("start",()=>{$8=null,T8=null}),Z.domElement.addEventListener("webglcontextrestored",()=>q8.entorno?.());let JZ={update:w9,setCrowd:HQ,setCamera:h,ready:fJ,sampleTime(A){fH=A;for(let g of[...q0.filter(Boolean),...t])aW(g,A,!1);q8.frame(A,0,{reduced:!1,view:u8,ends:QQ}),q8.render()},setMode(A){Z6=A,h(A==="attract"?"attract":"table")},quality(A){Y6=A;let g=A!=="high";U.castShadow=!g&&!K;for(let[o,l]of y){let K0=g?0:l.clearcoat,J0=g?0:l.sheen;if(o.clearcoat!==K0||o.sheen!==J0)o.clearcoat=K0,o.sheen=J0,o.needsUpdate=!0}G.visible=!g,Y.intensity=g?0.38:0.3,Z.setPixelRatio(gH()),q8.calidad(A),q8.resize(innerWidth,innerHeight)},pause(){z7=!0},resume(){if(!z7)return;if(z7=!1,QJ.getDelta(),!YQ)eW()},dispose(){if(S9=!0,q8.dispose(),window.removeEventListener("mesa:botvoice",$Q),YQ)cancelAnimationFrame(YQ);window.removeEventListener("resize",pH),H.dispose(),Z.dispose(),J.replaceChildren()}};return JZ}export{rD as createWorld};

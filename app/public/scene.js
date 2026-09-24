var fY="186",Y7={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},X7={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bY=0,fZ=1,hY=2;var y7=1,xY=2,v6=3,U7=0,L8=1,sJ=2,n8=0,SQ=1,z9=2,bZ=3,hZ=4,gY=5;var f6=100,pY=101,lY=102,mY=103,uY=104,dY=200,cY=201,nY=202,sY=203,iY=204,oY=205,aY=206,rY=207,tY=208,eY=209,JX=210,QX=211,$X=212,WX=213,ZX=214,KX=0,HX=1,YX=2,xZ=3,XX=4,UX=5,NX=6,GX=7,EX=0,FX=1,qX=2,U9=0,wQ=1,jQ=2,yQ=3,v7=4,vQ=5,fQ=6,bQ=7;var b6=301,f7=302,$W=303,WW=304,hQ=306,N7=1000,h6=1001,ZW=1002,N9=1003,KW=1004;var b7=1005;var F8=1006,x6=1007;var A9=1008;var G9=1009,OX=1010,RX=1011,xQ=1012,gZ=1013,G7=1014,u9=1015,q8=1016,pZ=1017,lZ=1018,g6=1020,LX=35902,VX=35899,DX=1021,BX=1022,_9=1023,h7=1026,x7=1027,kX=1028,mZ=1029,g7=1030,uZ=1031;var dZ=1033,HW=33776,YW=33777,XW=33778,UW=33779,cZ=35840,nZ=35841,sZ=35842,iZ=35843,oZ=36196,aZ=37492,rZ=37496,tZ=37488,eZ=37489,NW=37490,JK=37491,QK=37808,$K=37809,WK=37810,ZK=37811,KK=37812,HK=37813,YK=37814,XK=37815,UK=37816,NK=37817,GK=37818,EK=37819,FK=37820,qK=37821,OK=36492,RK=36494,LK=36495,VK=36283,DK=36284,GW=36285,BK=36286;var kK=2300,EW=2301;var MK=0,gQ=1,p6=2;var CK=0,MX=1,p7="",Y8="srgb",x8="srgb-linear",PK="linear",pJ="srgb";var CX=512,PX=513,IX=514,FW=515,zX=516,AX=517,qW=518,_X=519;var IK="300 es",zK=2000;function y5(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function v5(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function S6(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function TX(){let J=S6("canvas");return J.style.display="block",J}var dH={},w6=null;function zQ(...J){let Q="THREE."+J.shift();if(w6)w6("log",Q,...J);else console.log(Q,...J)}function SX(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function o0(...J){J=SX(J);let Q="THREE."+J.shift();if(w6)w6("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function $J(...J){J=SX(J);let Q="THREE."+J.shift();if(w6)w6("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function S7(...J){let Q=J.join(" ");if(Q in dH)return;dH[Q]=!0,o0(...J)}function wX(J,Q,$){return new Promise(function(W,Z){function K(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:Z();break;case J.TIMEOUT_EXPIRED:setTimeout(K,$);break;default:W()}}setTimeout(K,$)})}var jX={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class E9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let W=$[J];if(W!==void 0){let Z=W.indexOf(Q);if(Z!==-1)W.splice(Z,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let W=$.slice(0);for(let Z=0,K=W.length;Z<K;Z++)W[Z].call(this,J);J.target=null}}}var D8=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cH=1234567,MQ=Math.PI/180,w7=180/Math.PI;function c8(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,W=Math.random()*4294967295|0;return(D8[J&255]+D8[J>>8&255]+D8[J>>16&255]+D8[J>>24&255]+"-"+D8[Q&255]+D8[Q>>8&255]+"-"+D8[Q>>16&15|64]+D8[Q>>24&255]+"-"+D8[$&63|128]+D8[$>>8&255]+"-"+D8[$>>16&255]+D8[$>>24&255]+D8[W&255]+D8[W>>8&255]+D8[W>>16&255]+D8[W>>24&255]).toLowerCase()}function NJ(J,Q,$){return Math.max(Q,Math.min($,J))}function AK(J,Q){return(J%Q+Q)%Q}function f5(J,Q,$,W,Z){return W+(J-Q)*(Z-W)/($-Q)}function b5(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function CQ(J,Q,$){return(1-$)*J+$*Q}function h5(J,Q,$,W){return CQ(J,Q,1-Math.exp(-$*W))}function x5(J,Q=1){return Q-Math.abs(AK(J,Q*2)-Q)}function g5(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function p5(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function l5(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function m5(J,Q){return J+Math.random()*(Q-J)}function u5(J){return J*(0.5-Math.random())}function d5(J){if(J!==void 0)cH=J;let Q=cH+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function c5(J){return J*MQ}function n5(J){return J*w7}function s5(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function i5(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function o5(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function a5(J,Q,$,W,Z){let{cos:K,sin:H}=Math,Y=K($/2),X=H($/2),U=K((Q+W)/2),N=H((Q+W)/2),E=K((Q-W)/2),G=H((Q-W)/2),F=K((W-Q)/2),R=H((W-Q)/2);switch(Z){case"XYX":J.set(Y*N,X*E,X*G,Y*U);break;case"YZY":J.set(X*G,Y*N,X*E,Y*U);break;case"ZXZ":J.set(X*E,X*G,Y*N,Y*U);break;case"XZX":J.set(Y*N,X*R,X*F,Y*U);break;case"YXY":J.set(X*F,Y*N,X*R,Y*U);break;case"ZYZ":J.set(X*R,X*F,Y*N,Y*U);break;default:o0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+Z)}}function Y9(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:case Uint8ClampedArray:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function xJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var E7={DEG2RAD:MQ,RAD2DEG:w7,generateUUID:c8,clamp:NJ,euclideanModulo:AK,mapLinear:f5,inverseLerp:b5,lerp:CQ,damp:h5,pingpong:x5,smoothstep:g5,smootherstep:p5,randInt:l5,randFloat:m5,randFloatSpread:u5,seededRandom:d5,degToRad:c5,radToDeg:n5,isPowerOfTwo:s5,ceilPowerOfTwo:i5,floorPowerOfTwo:o5,setQuaternionFromProperEuler:a5,normalize:xJ,denormalize:Y9};class U0{static{U0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,W=J.elements;return this.x=W[0]*Q+W[3]*$+W[6],this.y=W[1]*Q+W[4]*$+W[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=NJ(this.x,J.x,Q.x),this.y=NJ(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=NJ(this.x,J,Q),this.y=NJ(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(NJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(NJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),W=Math.sin(Q),Z=this.x-J.x,K=this.y-J.y;return this.x=Z*$-K*W+J.x,this.y=Z*W+K*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class IJ{constructor(J=0,Q=0,$=0,W=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=W}static slerpFlat(J,Q,$,W,Z,K,H){let Y=$[W+0],X=$[W+1],U=$[W+2],N=$[W+3],E=Z[K+0],G=Z[K+1],F=Z[K+2],R=Z[K+3];if(N!==R||Y!==E||X!==G||U!==F){let D=Y*E+X*G+U*F+N*R;if(D<0)E=-E,G=-G,F=-F,R=-R,D=-D;let O=1-H;if(D<0.9995){let q=Math.acos(D),V=Math.sin(q);O=Math.sin(O*q)/V,H=Math.sin(H*q)/V,Y=Y*O+E*H,X=X*O+G*H,U=U*O+F*H,N=N*O+R*H}else{Y=Y*O+E*H,X=X*O+G*H,U=U*O+F*H,N=N*O+R*H;let q=1/Math.sqrt(Y*Y+X*X+U*U+N*N);Y*=q,X*=q,U*=q,N*=q}}J[Q]=Y,J[Q+1]=X,J[Q+2]=U,J[Q+3]=N}static multiplyQuaternionsFlat(J,Q,$,W,Z,K){let H=$[W],Y=$[W+1],X=$[W+2],U=$[W+3],N=Z[K],E=Z[K+1],G=Z[K+2],F=Z[K+3];return J[Q]=H*F+U*N+Y*G-X*E,J[Q+1]=Y*F+U*E+X*N-H*G,J[Q+2]=X*F+U*G+H*E-Y*N,J[Q+3]=U*F-H*N-Y*E-X*G,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,W){return this._x=J,this._y=Q,this._z=$,this._w=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:W,_z:Z,_order:K}=J,H=Math.cos,Y=Math.sin,X=H($/2),U=H(W/2),N=H(Z/2),E=Y($/2),G=Y(W/2),F=Y(Z/2);switch(K){case"XYZ":this._x=E*U*N+X*G*F,this._y=X*G*N-E*U*F,this._z=X*U*F+E*G*N,this._w=X*U*N-E*G*F;break;case"YXZ":this._x=E*U*N+X*G*F,this._y=X*G*N-E*U*F,this._z=X*U*F-E*G*N,this._w=X*U*N+E*G*F;break;case"ZXY":this._x=E*U*N-X*G*F,this._y=X*G*N+E*U*F,this._z=X*U*F+E*G*N,this._w=X*U*N-E*G*F;break;case"ZYX":this._x=E*U*N-X*G*F,this._y=X*G*N+E*U*F,this._z=X*U*F-E*G*N,this._w=X*U*N+E*G*F;break;case"YZX":this._x=E*U*N+X*G*F,this._y=X*G*N+E*U*F,this._z=X*U*F-E*G*N,this._w=X*U*N-E*G*F;break;case"XZY":this._x=E*U*N-X*G*F,this._y=X*G*N-E*U*F,this._z=X*U*F+E*G*N,this._w=X*U*N+E*G*F;break;default:o0("Quaternion: .setFromEuler() encountered an unknown order: "+K)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,W=Math.sin($);return this._x=J.x*W,this._y=J.y*W,this._z=J.z*W,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],W=Q[4],Z=Q[8],K=Q[1],H=Q[5],Y=Q[9],X=Q[2],U=Q[6],N=Q[10],E=$+H+N;if(E>0){let G=0.5/Math.sqrt(E+1);this._w=0.25/G,this._x=(U-Y)*G,this._y=(Z-X)*G,this._z=(K-W)*G}else if($>H&&$>N){let G=2*Math.sqrt(1+$-H-N);this._w=(U-Y)/G,this._x=0.25*G,this._y=(W+K)/G,this._z=(Z+X)/G}else if(H>N){let G=2*Math.sqrt(1+H-$-N);this._w=(Z-X)/G,this._x=(W+K)/G,this._y=0.25*G,this._z=(Y+U)/G}else{let G=2*Math.sqrt(1+N-$-H);this._w=(K-W)/G,this._x=(Z+X)/G,this._y=(Y+U)/G,this._z=0.25*G}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(NJ(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let W=Math.min(1,Q/$);return this.slerp(J,W),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:W,_z:Z,_w:K}=J,H=Q._x,Y=Q._y,X=Q._z,U=Q._w;return this._x=$*U+K*H+W*X-Z*Y,this._y=W*U+K*Y+Z*H-$*X,this._z=Z*U+K*X+$*Y-W*H,this._w=K*U-$*H-W*Y-Z*X,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:W,_z:Z,_w:K}=J,H=this.dot(J);if(H<0)$=-$,W=-W,Z=-Z,K=-K,H=-H;let Y=1-Q;if(H<0.9995){let X=Math.acos(H),U=Math.sin(X);Y=Math.sin(Y*X)/U,Q=Math.sin(Q*X)/U,this._x=this._x*Y+$*Q,this._y=this._y*Y+W*Q,this._z=this._z*Y+Z*Q,this._w=this._w*Y+K*Q,this._onChangeCallback()}else this._x=this._x*Y+$*Q,this._y=this._y*Y+W*Q,this._z=this._z*Y+Z*Q,this._w=this._w*Y+K*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),W=Math.sqrt(1-$),Z=Math.sqrt($);return this.set(W*Math.sin(J),W*Math.cos(J),Z*Math.sin(Q),Z*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{static{T.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(nH.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(nH.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6]*W,this.y=Z[1]*Q+Z[4]*$+Z[7]*W,this.z=Z[2]*Q+Z[5]*$+Z[8]*W,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements,K=1/(Z[3]*Q+Z[7]*$+Z[11]*W+Z[15]);return this.x=(Z[0]*Q+Z[4]*$+Z[8]*W+Z[12])*K,this.y=(Z[1]*Q+Z[5]*$+Z[9]*W+Z[13])*K,this.z=(Z[2]*Q+Z[6]*$+Z[10]*W+Z[14])*K,this}applyQuaternion(J){let Q=this.x,$=this.y,W=this.z,Z=J.x,K=J.y,H=J.z,Y=J.w,X=2*(K*W-H*$),U=2*(H*Q-Z*W),N=2*(Z*$-K*Q);return this.x=Q+Y*X+K*N-H*U,this.y=$+Y*U+H*X-Z*N,this.z=W+Y*N+Z*U-K*X,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,W=this.z,Z=J.elements;return this.x=Z[0]*Q+Z[4]*$+Z[8]*W,this.y=Z[1]*Q+Z[5]*$+Z[9]*W,this.z=Z[2]*Q+Z[6]*$+Z[10]*W,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=NJ(this.x,J.x,Q.x),this.y=NJ(this.y,J.y,Q.y),this.z=NJ(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=NJ(this.x,J,Q),this.y=NJ(this.y,J,Q),this.z=NJ(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(NJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:W,z:Z}=J,K=Q.x,H=Q.y,Y=Q.z;return this.x=W*Y-Z*H,this.y=Z*K-$*Y,this.z=$*H-W*K,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return WZ.copy(this).projectOnVector(J),this.sub(WZ)}reflect(J){return this.sub(WZ.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(NJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,W=this.z-J.z;return Q*Q+$*$+W*W}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let W=Math.sin(Q)*J;return this.x=W*Math.sin($),this.y=Math.cos(Q)*J,this.z=W*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),W=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=W,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var WZ=new T,nH=new IJ;class YJ{static{YJ.prototype.isMatrix3=!0}constructor(J,Q,$,W,Z,K,H,Y,X){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,W,Z,K,H,Y,X)}set(J,Q,$,W,Z,K,H,Y,X){let U=this.elements;return U[0]=J,U[1]=W,U[2]=H,U[3]=Q,U[4]=Z,U[5]=Y,U[6]=$,U[7]=K,U[8]=X,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,W=Q.elements,Z=this.elements,K=$[0],H=$[3],Y=$[6],X=$[1],U=$[4],N=$[7],E=$[2],G=$[5],F=$[8],R=W[0],D=W[3],O=W[6],q=W[1],V=W[4],M=W[7],L=W[2],P=W[5],I=W[8];return Z[0]=K*R+H*q+Y*L,Z[3]=K*D+H*V+Y*P,Z[6]=K*O+H*M+Y*I,Z[1]=X*R+U*q+N*L,Z[4]=X*D+U*V+N*P,Z[7]=X*O+U*M+N*I,Z[2]=E*R+G*q+F*L,Z[5]=E*D+G*V+F*P,Z[8]=E*O+G*M+F*I,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8];return Q*K*U-Q*H*X-$*Z*U+$*H*Y+W*Z*X-W*K*Y}invert(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],N=U*K-H*X,E=H*Y-U*Z,G=X*Z-K*Y,F=Q*N+$*E+W*G;if(F===0)return this.set(0,0,0,0,0,0,0,0,0);let R=1/F;return J[0]=N*R,J[1]=(W*X-U*$)*R,J[2]=(H*$-W*K)*R,J[3]=E*R,J[4]=(U*Q-W*Y)*R,J[5]=(W*Z-H*Q)*R,J[6]=G*R,J[7]=($*Y-X*Q)*R,J[8]=(K*Q-$*Z)*R,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,W,Z,K,H){let Y=Math.cos(Z),X=Math.sin(Z);return this.set($*Y,$*X,-$*(Y*K+X*H)+K+J,-W*X,W*Y,-W*(-X*K+Y*H)+H+Q,0,0,1),this}scale(J,Q){return S7("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ZZ.makeScale(J,Q)),this}rotate(J){return S7("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ZZ.makeRotation(-J)),this}translate(J,Q){return S7("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ZZ.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let W=0;W<9;W++)if(Q[W]!==$[W])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var ZZ=new YJ,sH=new YJ().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),iH=new YJ().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function r5(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(Z,K,H){if(this.enabled===!1||K===H||!K||!H)return Z;if(this.spaces[K].transfer==="srgb")Z.r=m9(Z.r),Z.g=m9(Z.g),Z.b=m9(Z.b);if(this.spaces[K].primaries!==this.spaces[H].primaries)Z.applyMatrix3(this.spaces[K].toXYZ),Z.applyMatrix3(this.spaces[H].fromXYZ);if(this.spaces[H].transfer==="srgb")Z.r=_6(Z.r),Z.g=_6(Z.g),Z.b=_6(Z.b);return Z},workingToColorSpace:function(Z,K){return this.convert(Z,this.workingColorSpace,K)},colorSpaceToWorking:function(Z,K){return this.convert(Z,K,this.workingColorSpace)},getPrimaries:function(Z){return this.spaces[Z].primaries},getTransfer:function(Z){if(Z==="")return"linear";return this.spaces[Z].transfer},getToneMappingMode:function(Z){return this.spaces[Z].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(Z,K=this.workingColorSpace){return Z.fromArray(this.spaces[K].luminanceCoefficients)},define:function(Z){Object.assign(this.spaces,Z)},_getMatrix:function(Z,K,H){return Z.copy(this.spaces[K].toXYZ).multiply(this.spaces[H].fromXYZ)},_getDrawingBufferColorSpace:function(Z){return this.spaces[Z].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(Z=this.workingColorSpace){return this.spaces[Z].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(Z,K){return S7("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(Z,K)},toWorkingColorSpace:function(Z,K){return S7("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(Z,K)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],W=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:W,transfer:"linear",toXYZ:sH,fromXYZ:iH,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:W,transfer:"srgb",toXYZ:sH,fromXYZ:iH,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var GJ=r5();function m9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function _6(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var N6;class _K{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(N6===void 0)N6=S6("canvas");N6.width=J.width,N6.height=J.height;let W=N6.getContext("2d");if(J instanceof ImageData)W.putImageData(J,0,0);else W.drawImage(J,0,0,J.width,J.height);$=N6}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=S6("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let W=$.getImageData(0,0,J.width,J.height),Z=W.data;for(let K=0;K<Z.length;K++)Z[K]=m9(Z[K]/255)*255;return $.putImageData(W,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(m9(Q[$]/255)*255);else Q[$]=m9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return o0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var t5=0;class pQ{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:t5++}),this.uuid=c8(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},W=this.data;if(W!==null){let Z;if(Array.isArray(W)){Z=[];for(let K=0,H=W.length;K<H;K++)if(W[K].isDataTexture)Z.push(KZ(W[K].image));else Z.push(KZ(W[K]))}else Z=KZ(W);$.url=Z}if(!Q)J.images[this.uuid]=$;return $}}function KZ(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return _K.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return o0("Texture: Unable to serialize Texture."),{}}var e5=0,HZ=new T;class eJ extends E9{constructor(J=eJ.DEFAULT_IMAGE,Q=eJ.DEFAULT_MAPPING,$=1001,W=1001,Z=1006,K=1008,H=1023,Y=1009,X=eJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:e5++}),this.uuid=c8(),this.name="",this.source=new pQ(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=W,this.magFilter=Z,this.minFilter=K,this.anisotropy=X,this.format=H,this.internalFormat=null,this.type=Y,this.offset=new U0(0,0),this.repeat=new U0(1,1),this.center=new U0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new YJ,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(HZ).x}get height(){return this.source.getSize(HZ).y}get depth(){return this.source.getSize(HZ).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){o0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let W=this[Q];if(W===void 0){o0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(W&&$&&(W.isVector2&&$.isVector2))W.copy($);else if(W&&$&&(W.isVector3&&$.isVector3))W.copy($);else if(W&&$&&(W.isMatrix3&&$.isMatrix3))W.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}eJ.DEFAULT_IMAGE=null;eJ.DEFAULT_MAPPING=300;eJ.DEFAULT_ANISOTROPY=1;class gJ{static{gJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,W=1){this.x=J,this.y=Q,this.z=$,this.w=W}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,W){return this.x=J,this.y=Q,this.z=$,this.w=W,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,W=this.z,Z=this.w,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*W+K[12]*Z,this.y=K[1]*Q+K[5]*$+K[9]*W+K[13]*Z,this.z=K[2]*Q+K[6]*$+K[10]*W+K[14]*Z,this.w=K[3]*Q+K[7]*$+K[11]*W+K[15]*Z,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,W,Z,K=0.01,H=0.1,Y=J.elements,X=Y[0],U=Y[4],N=Y[8],E=Y[1],G=Y[5],F=Y[9],R=Y[2],D=Y[6],O=Y[10];if(Math.abs(U-E)<0.01&&Math.abs(N-R)<0.01&&Math.abs(F-D)<0.01){if(Math.abs(U+E)<0.1&&Math.abs(N+R)<0.1&&Math.abs(F+D)<0.1&&Math.abs(X+G+O-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let V=(X+1)/2,M=(G+1)/2,L=(O+1)/2,P=(U+E)/4,I=(N+R)/4,S=(F+D)/4;if(V>M&&V>L)if(V<0.01)$=0,W=0.707106781,Z=0.707106781;else $=Math.sqrt(V),W=P/$,Z=I/$;else if(M>L)if(M<0.01)$=0.707106781,W=0,Z=0.707106781;else W=Math.sqrt(M),$=P/W,Z=S/W;else if(L<0.01)$=0.707106781,W=0.707106781,Z=0;else Z=Math.sqrt(L),$=I/Z,W=S/Z;return this.set($,W,Z,Q),this}let q=Math.sqrt((D-F)*(D-F)+(N-R)*(N-R)+(E-U)*(E-U));if(Math.abs(q)<0.001)q=1;return this.x=(D-F)/q,this.y=(N-R)/q,this.z=(E-U)/q,this.w=Math.acos((X+G+O-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=NJ(this.x,J.x,Q.x),this.y=NJ(this.y,J.y,Q.y),this.z=NJ(this.z,J.z,Q.z),this.w=NJ(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=NJ(this.x,J,Q),this.y=NJ(this.y,J,Q),this.z=NJ(this.z,J,Q),this.w=NJ(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(NJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TK extends E9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new gJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new gJ(0,0,J,Q),this.textures=[];let W={width:J,height:Q,depth:$.depth},Z=new eJ(W),K=$.count;for(let H=0;H<K;H++)this.textures[H]=Z.clone(),this.textures[H].isRenderTargetTexture=!0,this.textures[H].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveColorBuffer=$.resolveColorBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this.storeMultisampledColorBuffer=$.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=$.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=$.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let W=0,Z=this.textures.length;W<Z;W++)if(this.textures[W].image.width=J,this.textures[W].image.height=Q,this.textures[W].image.depth=$,this.textures[W].isData3DTexture!==!0)this.textures[W].isArrayTexture=this.textures[W].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let W=Object.assign({},J.textures[Q].image);this.textures[Q].source=new pQ(W)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class J8 extends TK{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class OW extends eJ{constructor(J=null,Q=1,$=1,W=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class SK extends eJ{constructor(J=null,Q=1,$=1,W=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:W},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class QJ{static{QJ.prototype.isMatrix4=!0}constructor(J,Q,$,W,Z,K,H,Y,X,U,N,E,G,F,R,D){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,W,Z,K,H,Y,X,U,N,E,G,F,R,D)}set(J,Q,$,W,Z,K,H,Y,X,U,N,E,G,F,R,D){let O=this.elements;return O[0]=J,O[4]=Q,O[8]=$,O[12]=W,O[1]=Z,O[5]=K,O[9]=H,O[13]=Y,O[2]=X,O[6]=U,O[10]=N,O[14]=E,O[3]=G,O[7]=F,O[11]=R,O[15]=D,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new QJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,W=1/G6.setFromMatrixColumn(J,0).length(),Z=1/G6.setFromMatrixColumn(J,1).length(),K=1/G6.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*W,Q[1]=$[1]*W,Q[2]=$[2]*W,Q[3]=0,Q[4]=$[4]*Z,Q[5]=$[5]*Z,Q[6]=$[6]*Z,Q[7]=0,Q[8]=$[8]*K,Q[9]=$[9]*K,Q[10]=$[10]*K,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,W=J.y,Z=J.z,K=Math.cos($),H=Math.sin($),Y=Math.cos(W),X=Math.sin(W),U=Math.cos(Z),N=Math.sin(Z);if(J.order==="XYZ"){let E=K*U,G=K*N,F=H*U,R=H*N;Q[0]=Y*U,Q[4]=-Y*N,Q[8]=X,Q[1]=G+F*X,Q[5]=E-R*X,Q[9]=-H*Y,Q[2]=R-E*X,Q[6]=F+G*X,Q[10]=K*Y}else if(J.order==="YXZ"){let E=Y*U,G=Y*N,F=X*U,R=X*N;Q[0]=E+R*H,Q[4]=F*H-G,Q[8]=K*X,Q[1]=K*N,Q[5]=K*U,Q[9]=-H,Q[2]=G*H-F,Q[6]=R+E*H,Q[10]=K*Y}else if(J.order==="ZXY"){let E=Y*U,G=Y*N,F=X*U,R=X*N;Q[0]=E-R*H,Q[4]=-K*N,Q[8]=F+G*H,Q[1]=G+F*H,Q[5]=K*U,Q[9]=R-E*H,Q[2]=-K*X,Q[6]=H,Q[10]=K*Y}else if(J.order==="ZYX"){let E=K*U,G=K*N,F=H*U,R=H*N;Q[0]=Y*U,Q[4]=F*X-G,Q[8]=E*X+R,Q[1]=Y*N,Q[5]=R*X+E,Q[9]=G*X-F,Q[2]=-X,Q[6]=H*Y,Q[10]=K*Y}else if(J.order==="YZX"){let E=K*Y,G=K*X,F=H*Y,R=H*X;Q[0]=Y*U,Q[4]=R-E*N,Q[8]=F*N+G,Q[1]=N,Q[5]=K*U,Q[9]=-H*U,Q[2]=-X*U,Q[6]=G*N+F,Q[10]=E-R*N}else if(J.order==="XZY"){let E=K*Y,G=K*X,F=H*Y,R=H*X;Q[0]=Y*U,Q[4]=-N,Q[8]=X*U,Q[1]=E*N+R,Q[5]=K*U,Q[9]=G*N-F,Q[2]=F*N-G,Q[6]=H*U,Q[10]=R*N+E}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(JN,J,QN)}lookAt(J,Q,$){let W=this.elements;if(f8.subVectors(J,Q),f8.lengthSq()===0)f8.z=1;if(f8.normalize(),e9.crossVectors($,f8),e9.lengthSq()===0){if(Math.abs($.z)===1)f8.x+=0.0001;else f8.z+=0.0001;f8.normalize(),e9.crossVectors($,f8)}return e9.normalize(),M$.crossVectors(f8,e9),W[0]=e9.x,W[4]=M$.x,W[8]=f8.x,W[1]=e9.y,W[5]=M$.y,W[9]=f8.y,W[2]=e9.z,W[6]=M$.z,W[10]=f8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,W=Q.elements,Z=this.elements,K=$[0],H=$[4],Y=$[8],X=$[12],U=$[1],N=$[5],E=$[9],G=$[13],F=$[2],R=$[6],D=$[10],O=$[14],q=$[3],V=$[7],M=$[11],L=$[15],P=W[0],I=W[4],S=W[8],k=W[12],A=W[1],d=W[5],b=W[9],g=W[13],Z0=W[2],f=W[6],o=W[10],s=W[14],p=W[3],X0=W[7],a=W[11],Y0=W[15];return Z[0]=K*P+H*A+Y*Z0+X*p,Z[4]=K*I+H*d+Y*f+X*X0,Z[8]=K*S+H*b+Y*o+X*a,Z[12]=K*k+H*g+Y*s+X*Y0,Z[1]=U*P+N*A+E*Z0+G*p,Z[5]=U*I+N*d+E*f+G*X0,Z[9]=U*S+N*b+E*o+G*a,Z[13]=U*k+N*g+E*s+G*Y0,Z[2]=F*P+R*A+D*Z0+O*p,Z[6]=F*I+R*d+D*f+O*X0,Z[10]=F*S+R*b+D*o+O*a,Z[14]=F*k+R*g+D*s+O*Y0,Z[3]=q*P+V*A+M*Z0+L*p,Z[7]=q*I+V*d+M*f+L*X0,Z[11]=q*S+V*b+M*o+L*a,Z[15]=q*k+V*g+M*s+L*Y0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],W=J[8],Z=J[12],K=J[1],H=J[5],Y=J[9],X=J[13],U=J[2],N=J[6],E=J[10],G=J[14],F=J[3],R=J[7],D=J[11],O=J[15],q=Y*G-X*E,V=H*G-X*N,M=H*E-Y*N,L=K*G-X*U,P=K*E-Y*U,I=K*N-H*U;return Q*(R*q-D*V+O*M)-$*(F*q-D*L+O*P)+W*(F*V-R*L+O*I)-Z*(F*M-R*P+D*I)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],W=J[8],Z=J[1],K=J[5],H=J[9],Y=J[2],X=J[6],U=J[10];return Q*(K*U-H*X)-$*(Z*U-H*Y)+W*(Z*X-K*Y)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let W=this.elements;if(J.isVector3)W[12]=J.x,W[13]=J.y,W[14]=J.z;else W[12]=J,W[13]=Q,W[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],W=J[2],Z=J[3],K=J[4],H=J[5],Y=J[6],X=J[7],U=J[8],N=J[9],E=J[10],G=J[11],F=J[12],R=J[13],D=J[14],O=J[15],q=Q*H-$*K,V=Q*Y-W*K,M=Q*X-Z*K,L=$*Y-W*H,P=$*X-Z*H,I=W*X-Z*Y,S=U*R-N*F,k=U*D-E*F,A=U*O-G*F,d=N*D-E*R,b=N*O-G*R,g=E*O-G*D,Z0=q*g-V*b+M*d+L*A-P*k+I*S;if(Z0===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let f=1/Z0;return J[0]=(H*g-Y*b+X*d)*f,J[1]=(W*b-$*g-Z*d)*f,J[2]=(R*I-D*P+O*L)*f,J[3]=(E*P-N*I-G*L)*f,J[4]=(Y*A-K*g-X*k)*f,J[5]=(Q*g-W*A+Z*k)*f,J[6]=(D*M-F*I-O*V)*f,J[7]=(U*I-E*M+G*V)*f,J[8]=(K*b-H*A+X*S)*f,J[9]=($*A-Q*b-Z*S)*f,J[10]=(F*P-R*M+O*q)*f,J[11]=(N*M-U*P-G*q)*f,J[12]=(H*k-K*d-Y*S)*f,J[13]=(Q*d-$*k+W*S)*f,J[14]=(R*V-F*L-D*q)*f,J[15]=(U*L-N*V+E*q)*f,this}scale(J){let Q=this.elements,$=J.x,W=J.y,Z=J.z;return Q[0]*=$,Q[4]*=W,Q[8]*=Z,Q[1]*=$,Q[5]*=W,Q[9]*=Z,Q[2]*=$,Q[6]*=W,Q[10]*=Z,Q[3]*=$,Q[7]*=W,Q[11]*=Z,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],W=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,W))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),W=Math.sin(Q),Z=1-$,K=J.x,H=J.y,Y=J.z,X=Z*K,U=Z*H;return this.set(X*K+$,X*H-W*Y,X*Y+W*H,0,X*H+W*Y,U*H+$,U*Y-W*K,0,X*Y-W*H,U*Y+W*K,Z*Y*Y+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,W,Z,K){return this.set(1,$,Z,0,J,1,K,0,Q,W,1,0,0,0,0,1),this}compose(J,Q,$){let W=this.elements,Z=Q._x,K=Q._y,H=Q._z,Y=Q._w,X=Z+Z,U=K+K,N=H+H,E=Z*X,G=Z*U,F=Z*N,R=K*U,D=K*N,O=H*N,q=Y*X,V=Y*U,M=Y*N,L=$.x,P=$.y,I=$.z;return W[0]=(1-(R+O))*L,W[1]=(G+M)*L,W[2]=(F-V)*L,W[3]=0,W[4]=(G-M)*P,W[5]=(1-(E+O))*P,W[6]=(D+q)*P,W[7]=0,W[8]=(F+V)*I,W[9]=(D-q)*I,W[10]=(1-(E+R))*I,W[11]=0,W[12]=J.x,W[13]=J.y,W[14]=J.z,W[15]=1,this}decompose(J,Q,$){let W=this.elements;J.x=W[12],J.y=W[13],J.z=W[14];let Z=this.determinantAffine();if(Z===0)return $.set(1,1,1),Q.identity(),this;let K=G6.set(W[0],W[1],W[2]).length(),H=G6.set(W[4],W[5],W[6]).length(),Y=G6.set(W[8],W[9],W[10]).length();if(Z<0)K=-K;Z9.copy(this);let X=1/K,U=1/H,N=1/Y;return Z9.elements[0]*=X,Z9.elements[1]*=X,Z9.elements[2]*=X,Z9.elements[4]*=U,Z9.elements[5]*=U,Z9.elements[6]*=U,Z9.elements[8]*=N,Z9.elements[9]*=N,Z9.elements[10]*=N,Q.setFromRotationMatrix(Z9),$.x=K,$.y=H,$.z=Y,this}makePerspective(J,Q,$,W,Z,K,H=2000,Y=!1){let X=this.elements,U=2*Z/(Q-J),N=2*Z/($-W),E=(Q+J)/(Q-J),G=($+W)/($-W),F,R;if(Y)F=Z/(K-Z),R=K*Z/(K-Z);else if(H===2000)F=-(K+Z)/(K-Z),R=-2*K*Z/(K-Z);else if(H===2001)F=-K/(K-Z),R=-K*Z/(K-Z);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=E,X[12]=0,X[1]=0,X[5]=N,X[9]=G,X[13]=0,X[2]=0,X[6]=0,X[10]=F,X[14]=R,X[3]=0,X[7]=0,X[11]=-1,X[15]=0,this}makeOrthographic(J,Q,$,W,Z,K,H=2000,Y=!1){let X=this.elements,U=2/(Q-J),N=2/($-W),E=-(Q+J)/(Q-J),G=-($+W)/($-W),F,R;if(Y)F=1/(K-Z),R=K/(K-Z);else if(H===2000)F=-2/(K-Z),R=-(K+Z)/(K-Z);else if(H===2001)F=-1/(K-Z),R=-Z/(K-Z);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+H);return X[0]=U,X[4]=0,X[8]=0,X[12]=E,X[1]=0,X[5]=N,X[9]=0,X[13]=G,X[2]=0,X[6]=0,X[10]=F,X[14]=R,X[3]=0,X[7]=0,X[11]=0,X[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let W=0;W<16;W++)if(Q[W]!==$[W])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var G6=new T,Z9=new QJ,JN=new T(0,0,0),QN=new T(1,1,1),e9=new T,M$=new T,f8=new T,oH=new QJ,aH=new IJ;class X9{constructor(J=0,Q=0,$=0,W=X9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=W}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,W=this._order){return this._x=J,this._y=Q,this._z=$,this._order=W,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let W=J.elements,Z=W[0],K=W[4],H=W[8],Y=W[1],X=W[5],U=W[9],N=W[2],E=W[6],G=W[10];switch(Q){case"XYZ":if(this._y=Math.asin(NJ(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-U,G),this._z=Math.atan2(-K,Z);else this._x=Math.atan2(E,X),this._z=0;break;case"YXZ":if(this._x=Math.asin(-NJ(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(H,G),this._z=Math.atan2(Y,X);else this._y=Math.atan2(-N,Z),this._z=0;break;case"ZXY":if(this._x=Math.asin(NJ(E,-1,1)),Math.abs(E)<0.9999999)this._y=Math.atan2(-N,G),this._z=Math.atan2(-K,X);else this._y=0,this._z=Math.atan2(Y,Z);break;case"ZYX":if(this._y=Math.asin(-NJ(N,-1,1)),Math.abs(N)<0.9999999)this._x=Math.atan2(E,G),this._z=Math.atan2(Y,Z);else this._x=0,this._z=Math.atan2(-K,X);break;case"YZX":if(this._z=Math.asin(NJ(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,X),this._y=Math.atan2(-N,Z);else this._x=0,this._y=Math.atan2(H,G);break;case"XZY":if(this._z=Math.asin(-NJ(K,-1,1)),Math.abs(K)<0.9999999)this._x=Math.atan2(E,X),this._y=Math.atan2(H,Z);else this._x=Math.atan2(-U,G),this._y=0;break;default:o0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return oH.makeRotationFromQuaternion(J),this.setFromRotationMatrix(oH,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return aH.setFromEuler(this),this.setFromQuaternion(aH,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}X9.DEFAULT_ORDER="XYZ";class RW{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var $N=0,rH=new T,E6=new IJ,b9=new QJ,C$=new T,NQ=new T,WN=new T,ZN=new IJ,tH=new T(1,0,0),eH=new T(0,1,0),JY=new T(0,0,1),QY={type:"added"},KN={type:"removed"},F6={type:"childadded",child:null},YZ={type:"childremoved",child:null};class TJ extends E9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:$N++}),this.uuid=c8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=TJ.DEFAULT_UP.clone();let J=new T,Q=new X9,$=new IJ,W=new T(1,1,1);function Z(){$.setFromEuler(Q,!1)}function K(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(Z),$._onChange(K),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:W},modelViewMatrix:{value:new QJ},normalMatrix:{value:new YJ}}),this.matrix=new QJ,this.matrixWorld=new QJ,this.matrixAutoUpdate=TJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=TJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new RW,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return E6.setFromAxisAngle(J,Q),this.quaternion.multiply(E6),this}rotateOnWorldAxis(J,Q){return E6.setFromAxisAngle(J,Q),this.quaternion.premultiply(E6),this}rotateX(J){return this.rotateOnAxis(tH,J)}rotateY(J){return this.rotateOnAxis(eH,J)}rotateZ(J){return this.rotateOnAxis(JY,J)}translateOnAxis(J,Q){return rH.copy(J).applyQuaternion(this.quaternion),this.position.add(rH.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(tH,J)}translateY(J){return this.translateOnAxis(eH,J)}translateZ(J){return this.translateOnAxis(JY,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(b9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)C$.copy(J);else C$.set(J,Q,$);let W=this.parent;if(this.updateWorldMatrix(!0,!1),NQ.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)b9.lookAt(NQ,C$,this.up);else b9.lookAt(C$,NQ,this.up);if(this.quaternion.setFromRotationMatrix(b9),W)b9.extractRotation(W.matrixWorld),E6.setFromRotationMatrix(b9),this.quaternion.premultiply(E6.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return $J("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(QY),F6.child=J,this.dispatchEvent(F6),F6.child=null;else $J("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(KN),YZ.child=J,this.dispatchEvent(YZ),YZ.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),b9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),b9.multiply(J.parent.matrixWorld);return J.applyMatrix4(b9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(QY),F6.child=J,this.dispatchEvent(F6),F6.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,W=this.children.length;$<W;$++){let K=this.children[$].getObjectByProperty(J,Q);if(K!==void 0)return K}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let W=this.children;for(let Z=0,K=W.length;Z<K;Z++)W[Z].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(NQ,J,WN),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(NQ,ZN,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(J){J(this);let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:W}=J,Z=this.matrix.elements;Z[12]+=Q-Z[0]*Q-Z[4]*$-Z[8]*W,Z[13]+=$-Z[1]*Q-Z[5]*$-Z[9]*W,Z[14]+=W-Z[2]*Q-Z[6]*$-Z[10]*W}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,W=Q.length;$<W;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let W=this.parent;if(J===!0&&W!==null)W.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let Z=this.children;for(let K=0,H=Z.length;K<H;K++)Z[K].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let W={};if(W.uuid=this.uuid,W.type=this.type,W.name=this.name,W.castShadow=this.castShadow,W.receiveShadow=this.receiveShadow,W.visible=this.visible,W.frustumCulled=this.frustumCulled,W.renderOrder=this.renderOrder,W.static=this.static,W.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)W.userData=this.userData;if(W.layers=this.layers.mask,W.matrix=this.matrix.toArray(),W.up=this.up.toArray(),this.pivot!==null)W.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)W.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)W.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(W.type="InstancedMesh",W.count=this.count,W.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)W.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(W.type="BatchedMesh",W.perObjectFrustumCulled=this.perObjectFrustumCulled,W.sortObjects=this.sortObjects,W.drawRanges=this._drawRanges,W.reservedRanges=this._reservedRanges,W.geometryInfo=this._geometryInfo.map((H)=>({...H,boundingBox:H.boundingBox?H.boundingBox.toJSON():void 0,boundingSphere:H.boundingSphere?H.boundingSphere.toJSON():void 0})),W.instanceInfo=this._instanceInfo.map((H)=>({...H})),W.availableInstanceIds=this._availableInstanceIds.slice(),W.availableGeometryIds=this._availableGeometryIds.slice(),W.nextIndexStart=this._nextIndexStart,W.nextVertexStart=this._nextVertexStart,W.geometryCount=this._geometryCount,W.maxInstanceCount=this._maxInstanceCount,W.maxVertexCount=this._maxVertexCount,W.maxIndexCount=this._maxIndexCount,W.geometryInitialized=this._geometryInitialized,W.matricesTexture=this._matricesTexture.toJSON(J),W.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)W.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)W.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)W.boundingBox=this.boundingBox.toJSON()}function Z(H,Y){if(H[Y.uuid]===void 0)H[Y.uuid]=Y.toJSON(J);return Y.uuid}if(this.isScene){if(this.background){if(this.background.isColor)W.background=this.background.toJSON();else if(this.background.isTexture)W.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)W.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){W.geometry=Z(J.geometries,this.geometry);let H=this.geometry.parameters;if(H!==void 0&&H.shapes!==void 0){let Y=H.shapes;if(Array.isArray(Y))for(let X=0,U=Y.length;X<U;X++){let N=Y[X];Z(J.shapes,N)}else Z(J.shapes,Y)}}if(this.isSkinnedMesh){if(W.bindMode=this.bindMode,W.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)Z(J.skeletons,this.skeleton),W.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let H=[];for(let Y=0,X=this.material.length;Y<X;Y++)H.push(Z(J.materials,this.material[Y]));W.material=H}else W.material=Z(J.materials,this.material);if(this.children.length>0){W.children=[];for(let H=0;H<this.children.length;H++)W.children.push(this.children[H].toJSON(J).object)}if(this.animations.length>0){W.animations=[];for(let H=0;H<this.animations.length;H++){let Y=this.animations[H];W.animations.push(Z(J.animations,Y))}}if(Q){let H=K(J.geometries),Y=K(J.materials),X=K(J.textures),U=K(J.images),N=K(J.shapes),E=K(J.skeletons),G=K(J.animations),F=K(J.nodes);if(H.length>0)$.geometries=H;if(Y.length>0)$.materials=Y;if(X.length>0)$.textures=X;if(U.length>0)$.images=U;if(N.length>0)$.shapes=N;if(E.length>0)$.skeletons=E;if(G.length>0)$.animations=G;if(F.length>0)$.nodes=F}return $.object=W,$;function K(H){let Y=[];for(let X in H){let U=H[X];delete U.metadata,Y.push(U)}return Y}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let W=J.children[$];this.add(W.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}TJ.DEFAULT_UP=new T(0,1,0);TJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;TJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fJ extends TJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var HN={type:"move"};class lQ{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new fJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new fJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new fJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let W=null,Z=null,K=null,H=this._targetRay,Y=this._grip,X=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(X&&J.hand){K=!0;for(let R of J.hand.values()){let D=Q.getJointPose(R,$),O=this._getHandJoint(X,R);if(D!==null)O.matrix.fromArray(D.transform.matrix),O.matrix.decompose(O.position,O.rotation,O.scale),O.matrixWorldNeedsUpdate=!0,O.jointRadius=D.radius;O.visible=D!==null}let U=X.joints["index-finger-tip"],N=X.joints["thumb-tip"],E=U.position.distanceTo(N.position),G=0.02,F=0.005;if(X.inputState.pinching&&E>G+F)X.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!X.inputState.pinching&&E<=G-F)X.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(Y!==null&&J.gripSpace){if(Z=Q.getPose(J.gripSpace,$),Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;if(Y.eventsEnabled)Y.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(H!==null){if(W=Q.getPose(J.targetRaySpace,$),W===null&&Z!==null)W=Z;if(W!==null){if(H.matrix.fromArray(W.transform.matrix),H.matrix.decompose(H.position,H.rotation,H.scale),H.matrixWorldNeedsUpdate=!0,W.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(W.linearVelocity);else H.hasLinearVelocity=!1;if(W.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(W.angularVelocity);else H.hasAngularVelocity=!1;this.dispatchEvent(HN)}}}if(H!==null)H.visible=W!==null;if(Y!==null)Y.visible=Z!==null;if(X!==null)X.visible=K!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new fJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var yX={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},J7={h:0,s:0,l:0},P$={h:0,s:0,l:0};function XZ(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class h0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let W=J;if(W&&W.isColor)this.copy(W);else if(typeof W==="number")this.setHex(W);else if(typeof W==="string")this.setStyle(W)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,GJ.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,W=GJ.workingColorSpace){return this.r=J,this.g=Q,this.b=$,GJ.colorSpaceToWorking(this,W),this}setHSL(J,Q,$,W=GJ.workingColorSpace){if(J=AK(J,1),Q=NJ(Q,0,1),$=NJ($,0,1),Q===0)this.r=this.g=this.b=$;else{let Z=$<=0.5?$*(1+Q):$+Q-$*Q,K=2*$-Z;this.r=XZ(K,Z,J+0.3333333333333333),this.g=XZ(K,Z,J),this.b=XZ(K,Z,J-0.3333333333333333)}return GJ.colorSpaceToWorking(this,W),this}setStyle(J,Q="srgb"){function $(Z){if(Z===void 0)return;if(parseFloat(Z)<1)o0("Color: Alpha component of "+J+" will be ignored.")}let W;if(W=/^(\w+)\(([^\)]*)\)/.exec(J)){let Z,K=W[1],H=W[2];switch(K){case"rgb":case"rgba":if(Z=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(Z[4]),this.setRGB(Math.min(255,parseInt(Z[1],10))/255,Math.min(255,parseInt(Z[2],10))/255,Math.min(255,parseInt(Z[3],10))/255,Q);if(Z=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(Z[4]),this.setRGB(Math.min(100,parseInt(Z[1],10))/100,Math.min(100,parseInt(Z[2],10))/100,Math.min(100,parseInt(Z[3],10))/100,Q);break;case"hsl":case"hsla":if(Z=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(H))return $(Z[4]),this.setHSL(parseFloat(Z[1])/360,parseFloat(Z[2])/100,parseFloat(Z[3])/100,Q);break;default:o0("Color: Unknown color model "+J)}}else if(W=/^\#([A-Fa-f\d]+)$/.exec(J)){let Z=W[1],K=Z.length;if(K===3)return this.setRGB(parseInt(Z.charAt(0),16)/15,parseInt(Z.charAt(1),16)/15,parseInt(Z.charAt(2),16)/15,Q);else if(K===6)return this.setHex(parseInt(Z,16),Q);else o0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=yX[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else o0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=m9(J.r),this.g=m9(J.g),this.b=m9(J.b),this}copyLinearToSRGB(J){return this.r=_6(J.r),this.g=_6(J.g),this.b=_6(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return GJ.workingToColorSpace(B8.copy(this),J),Math.round(NJ(B8.r*255,0,255))*65536+Math.round(NJ(B8.g*255,0,255))*256+Math.round(NJ(B8.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=GJ.workingColorSpace){GJ.workingToColorSpace(B8.copy(this),Q);let{r:$,g:W,b:Z}=B8,K=Math.max($,W,Z),H=Math.min($,W,Z),Y,X,U=(H+K)/2;if(H===K)Y=0,X=0;else{let N=K-H;switch(X=U<=0.5?N/(K+H):N/(2-K-H),K){case $:Y=(W-Z)/N+(W<Z?6:0);break;case W:Y=(Z-$)/N+2;break;case Z:Y=($-W)/N+4;break}Y/=6}return J.h=Y,J.s=X,J.l=U,J}getRGB(J,Q=GJ.workingColorSpace){return GJ.workingToColorSpace(B8.copy(this),Q),J.r=B8.r,J.g=B8.g,J.b=B8.b,J}getStyle(J="srgb"){GJ.workingToColorSpace(B8.copy(this),J);let{r:Q,g:$,b:W}=B8;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${W.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(W*255)})`}offsetHSL(J,Q,$){return this.getHSL(J7),this.setHSL(J7.h+J,J7.s+Q,J7.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(J7),J.getHSL(P$);let $=CQ(J7.h,P$.h,Q),W=CQ(J7.s,P$.s,Q),Z=CQ(J7.l,P$.l,Q);return this.setHSL($,W,Z),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,W=this.b,Z=J.elements;return this.r=Z[0]*Q+Z[3]*$+Z[6]*W,this.g=Z[1]*Q+Z[4]*$+Z[7]*W,this.b=Z[2]*Q+Z[5]*$+Z[8]*W,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var B8=new h0;h0.NAMES=yX;class l7{constructor(J,Q=0.00025){this.isFogExp2=!0,this.name="",this.color=new h0(J),this.density=Q}clone(){return new l7(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class l6 extends TJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new X9,this.environmentIntensity=1,this.environmentRotation=new X9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var K9=new T,h9=new T,UZ=new T,x9=new T,q6=new T,O6=new T,$Y=new T,NZ=new T,GZ=new T,EZ=new T,FZ=new gJ,qZ=new gJ,OZ=new gJ;class h8{constructor(J=new T,Q=new T,$=new T){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,W){W.subVectors($,Q),K9.subVectors(J,Q),W.cross(K9);let Z=W.lengthSq();if(Z>0)return W.multiplyScalar(1/Math.sqrt(Z));return W.set(0,0,0)}static getBarycoord(J,Q,$,W,Z){K9.subVectors(W,Q),h9.subVectors($,Q),UZ.subVectors(J,Q);let K=K9.dot(K9),H=K9.dot(h9),Y=K9.dot(UZ),X=h9.dot(h9),U=h9.dot(UZ),N=K*X-H*H;if(N===0)return Z.set(0,0,0),null;let E=1/N,G=(X*Y-H*U)*E,F=(K*U-H*Y)*E;return Z.set(1-G-F,F,G)}static containsPoint(J,Q,$,W){if(this.getBarycoord(J,Q,$,W,x9)===null)return!1;return x9.x>=0&&x9.y>=0&&x9.x+x9.y<=1}static getInterpolation(J,Q,$,W,Z,K,H,Y){if(this.getBarycoord(J,Q,$,W,x9)===null){if(Y.x=0,Y.y=0,"z"in Y)Y.z=0;if("w"in Y)Y.w=0;return null}return Y.setScalar(0),Y.addScaledVector(Z,x9.x),Y.addScaledVector(K,x9.y),Y.addScaledVector(H,x9.z),Y}static getInterpolatedAttribute(J,Q,$,W,Z,K){return FZ.setScalar(0),qZ.setScalar(0),OZ.setScalar(0),FZ.fromBufferAttribute(J,Q),qZ.fromBufferAttribute(J,$),OZ.fromBufferAttribute(J,W),K.setScalar(0),K.addScaledVector(FZ,Z.x),K.addScaledVector(qZ,Z.y),K.addScaledVector(OZ,Z.z),K}static isFrontFacing(J,Q,$,W){return K9.subVectors($,Q),h9.subVectors(J,Q),K9.cross(h9).dot(W)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,W){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[W]),this}setFromAttributeAndIndices(J,Q,$,W){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,W),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return K9.subVectors(this.c,this.b),h9.subVectors(this.a,this.b),K9.cross(h9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return h8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return h8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,W,Z){return h8.getInterpolation(J,this.a,this.b,this.c,Q,$,W,Z)}containsPoint(J){return h8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return h8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,W=this.b,Z=this.c,K,H;q6.subVectors(W,$),O6.subVectors(Z,$),NZ.subVectors(J,$);let Y=q6.dot(NZ),X=O6.dot(NZ);if(Y<=0&&X<=0)return Q.copy($);GZ.subVectors(J,W);let U=q6.dot(GZ),N=O6.dot(GZ);if(U>=0&&N<=U)return Q.copy(W);let E=Y*N-U*X;if(E<=0&&Y>=0&&U<=0)return K=Y/(Y-U),Q.copy($).addScaledVector(q6,K);EZ.subVectors(J,Z);let G=q6.dot(EZ),F=O6.dot(EZ);if(F>=0&&G<=F)return Q.copy(Z);let R=G*X-Y*F;if(R<=0&&X>=0&&F<=0)return H=X/(X-F),Q.copy($).addScaledVector(O6,H);let D=U*F-G*N;if(D<=0&&N-U>=0&&G-F>=0)return $Y.subVectors(Z,W),H=(N-U)/(N-U+(G-F)),Q.copy(W).addScaledVector($Y,H);let O=1/(D+R+E);return K=R*O,H=E*O,Q.copy($).addScaledVector(q6,K).addScaledVector(O6,H)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class A8{constructor(J=new T(1/0,1/0,1/0),Q=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(H9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(H9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=H9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let Z=$.getAttribute("position");if(Q===!0&&Z!==void 0&&J.isInstancedMesh!==!0)for(let K=0,H=Z.count;K<H;K++){if(J.isMesh===!0)J.getVertexPosition(K,H9);else H9.fromBufferAttribute(Z,K);H9.applyMatrix4(J.matrixWorld),this.expandByPoint(H9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();I$.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();I$.copy($.boundingBox)}I$.applyMatrix4(J.matrixWorld),this.union(I$)}}let W=J.children;for(let Z=0,K=W.length;Z<K;Z++)this.expandByObject(W[Z],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,H9),H9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(GQ),z$.subVectors(this.max,GQ),R6.subVectors(J.a,GQ),L6.subVectors(J.b,GQ),V6.subVectors(J.c,GQ),Q7.subVectors(L6,R6),$7.subVectors(V6,L6),z7.subVectors(R6,V6);let Q=[0,-Q7.z,Q7.y,0,-$7.z,$7.y,0,-z7.z,z7.y,Q7.z,0,-Q7.x,$7.z,0,-$7.x,z7.z,0,-z7.x,-Q7.y,Q7.x,0,-$7.y,$7.x,0,-z7.y,z7.x,0];if(!RZ(Q,R6,L6,V6,z$))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!RZ(Q,R6,L6,V6,z$))return!1;return A$.crossVectors(Q7,$7),Q=[A$.x,A$.y,A$.z],RZ(Q,R6,L6,V6,z$)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,H9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(H9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return g9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),g9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),g9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),g9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),g9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),g9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),g9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),g9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(g9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var g9=[new T,new T,new T,new T,new T,new T,new T,new T],H9=new T,I$=new A8,R6=new T,L6=new T,V6=new T,Q7=new T,$7=new T,z7=new T,GQ=new T,z$=new T,A$=new T,A7=new T;function RZ(J,Q,$,W,Z){for(let K=0,H=J.length-3;K<=H;K+=3){A7.fromArray(J,K);let Y=Z.x*Math.abs(A7.x)+Z.y*Math.abs(A7.y)+Z.z*Math.abs(A7.z),X=Q.dot(A7),U=$.dot(A7),N=W.dot(A7);if(Math.max(-Math.max(X,U,N),Math.min(X,U,N))>Y)return!1}return!0}var W8=new T,_$=new U0,YN=0;class tJ extends E9{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:YN++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let W=0,Z=this.itemSize;W<Z;W++)this.array[J+W]=Q.array[$+W];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)_$.fromBufferAttribute(this,Q),_$.applyMatrix3(J),this.setXY(Q,_$.x,_$.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)W8.fromBufferAttribute(this,Q),W8.applyMatrix3(J),this.setXYZ(Q,W8.x,W8.y,W8.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)W8.fromBufferAttribute(this,Q),W8.applyMatrix4(J),this.setXYZ(Q,W8.x,W8.y,W8.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)W8.fromBufferAttribute(this,Q),W8.applyNormalMatrix(J),this.setXYZ(Q,W8.x,W8.y,W8.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)W8.fromBufferAttribute(this,Q),W8.transformDirection(J),this.setXYZ(Q,W8.x,W8.y,W8.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=Y9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=xJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=Y9(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=xJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=Y9(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=xJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=Y9(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=xJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=Y9(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=xJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=xJ(Q,this.array),$=xJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,W){if(J*=this.itemSize,this.normalized)Q=xJ(Q,this.array),$=xJ($,this.array),W=xJ(W,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=W,this}setXYZW(J,Q,$,W,Z){if(J*=this.itemSize,this.normalized)Q=xJ(Q,this.array),$=xJ($,this.array),W=xJ(W,this.array),Z=xJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=W,this.array[J+3]=Z,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}}class LW extends tJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class VW extends tJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class qJ extends tJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var XN=new A8,EQ=new T,LZ=new T;class g8{constructor(J=new T,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else XN.setFromPoints(J).getCenter($);let W=0;for(let Z=0,K=J.length;Z<K;Z++)W=Math.max(W,$.distanceToSquared(J[Z]));return this.radius=Math.sqrt(W),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;EQ.subVectors(J,this.center);let Q=EQ.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),W=($-this.radius)*0.5;this.center.addScaledVector(EQ,W/$),this.radius+=W}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else LZ.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(EQ.copy(J.center).add(LZ)),this.expandByPoint(EQ.copy(J.center).sub(LZ));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var UN=0,u8=new QJ,VZ=new TJ,D6=new T,b8=new A8,FQ=new A8,E8=new T;class lJ extends E9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UN++}),this.uuid=c8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((y5(J))?VW:LW)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let Z=new YJ().getNormalMatrix(J);$.applyNormalMatrix(Z),$.needsUpdate=!0}let W=this.attributes.tangent;if(W!==void 0)W.transformDirection(J),W.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return u8.makeRotationFromQuaternion(J),this.applyMatrix4(u8),this}rotateX(J){return u8.makeRotationX(J),this.applyMatrix4(u8),this}rotateY(J){return u8.makeRotationY(J),this.applyMatrix4(u8),this}rotateZ(J){return u8.makeRotationZ(J),this.applyMatrix4(u8),this}translate(J,Q,$){return u8.makeTranslation(J,Q,$),this.applyMatrix4(u8),this}scale(J,Q,$){return u8.makeScale(J,Q,$),this.applyMatrix4(u8),this}lookAt(J){return VZ.lookAt(J),VZ.updateMatrix(),this.applyMatrix4(VZ.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(D6).negate(),this.translate(D6.x,D6.y,D6.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let W=0,Z=J.length;W<Z;W++){let K=J[W];$.push(K.x,K.y,K.z||0)}this.setAttribute("position",new qJ($,3))}else{let $=Math.min(J.length,Q.count);for(let W=0;W<$;W++){let Z=J[W];Q.setXYZ(W,Z.x,Z.y,Z.z||0)}if(J.length>Q.count)o0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new A8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){$J("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,W=Q.length;$<W;$++){let Z=Q[$];if(b8.setFromBufferAttribute(Z),this.morphTargetsRelative)E8.addVectors(this.boundingBox.min,b8.min),this.boundingBox.expandByPoint(E8),E8.addVectors(this.boundingBox.max,b8.max),this.boundingBox.expandByPoint(E8);else this.boundingBox.expandByPoint(b8.min),this.boundingBox.expandByPoint(b8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))$J('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new g8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){$J("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(J){let $=this.boundingSphere.center;if(b8.setFromBufferAttribute(J),Q)for(let Z=0,K=Q.length;Z<K;Z++){let H=Q[Z];if(FQ.setFromBufferAttribute(H),this.morphTargetsRelative)E8.addVectors(b8.min,FQ.min),b8.expandByPoint(E8),E8.addVectors(b8.max,FQ.max),b8.expandByPoint(E8);else b8.expandByPoint(FQ.min),b8.expandByPoint(FQ.max)}b8.getCenter($);let W=0;for(let Z=0,K=J.count;Z<K;Z++)E8.fromBufferAttribute(J,Z),W=Math.max(W,$.distanceToSquared(E8));if(Q)for(let Z=0,K=Q.length;Z<K;Z++){let H=Q[Z],Y=this.morphTargetsRelative;for(let X=0,U=H.count;X<U;X++){if(E8.fromBufferAttribute(H,X),Y)D6.fromBufferAttribute(J,X),E8.add(D6);W=Math.max(W,$.distanceToSquared(E8))}}if(this.boundingSphere.radius=Math.sqrt(W),isNaN(this.boundingSphere.radius))$J('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){$J("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:W,uv:Z}=Q,K=this.getAttribute("tangent");if(K===void 0||K.count!==$.count)K=new tJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",K);let H=[],Y=[];for(let S=0;S<$.count;S++)H[S]=new T,Y[S]=new T;let X=new T,U=new T,N=new T,E=new U0,G=new U0,F=new U0,R=new T,D=new T;function O(S,k,A){X.fromBufferAttribute($,S),U.fromBufferAttribute($,k),N.fromBufferAttribute($,A),E.fromBufferAttribute(Z,S),G.fromBufferAttribute(Z,k),F.fromBufferAttribute(Z,A),U.sub(X),N.sub(X),G.sub(E),F.sub(E);let d=1/(G.x*F.y-F.x*G.y);if(!isFinite(d))return;R.copy(U).multiplyScalar(F.y).addScaledVector(N,-G.y).multiplyScalar(d),D.copy(N).multiplyScalar(G.x).addScaledVector(U,-F.x).multiplyScalar(d),H[S].add(R),H[k].add(R),H[A].add(R),Y[S].add(D),Y[k].add(D),Y[A].add(D)}let q=this.groups;if(q.length===0)q=[{start:0,count:J.count}];for(let S=0,k=q.length;S<k;++S){let A=q[S],d=A.start,b=A.count;for(let g=d,Z0=d+b;g<Z0;g+=3)O(J.getX(g+0),J.getX(g+1),J.getX(g+2))}let V=new T,M=new T,L=new T,P=new T;function I(S){L.fromBufferAttribute(W,S),P.copy(L);let k=H[S];V.copy(k),V.sub(L.multiplyScalar(L.dot(k))).normalize(),M.crossVectors(P,k);let d=M.dot(Y[S])<0?-1:1;K.setXYZW(S,V.x,V.y,V.z,d)}for(let S=0,k=q.length;S<k;++S){let A=q[S],d=A.start,b=A.count;for(let g=d,Z0=d+b;g<Z0;g+=3)I(J.getX(g+0)),I(J.getX(g+1)),I(J.getX(g+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new tJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let E=0,G=$.count;E<G;E++)$.setXYZ(E,0,0,0);let W=new T,Z=new T,K=new T,H=new T,Y=new T,X=new T,U=new T,N=new T;if(J)for(let E=0,G=J.count;E<G;E+=3){let F=J.getX(E+0),R=J.getX(E+1),D=J.getX(E+2);W.fromBufferAttribute(Q,F),Z.fromBufferAttribute(Q,R),K.fromBufferAttribute(Q,D),U.subVectors(K,Z),N.subVectors(W,Z),U.cross(N),H.fromBufferAttribute($,F),Y.fromBufferAttribute($,R),X.fromBufferAttribute($,D),H.add(U),Y.add(U),X.add(U),$.setXYZ(F,H.x,H.y,H.z),$.setXYZ(R,Y.x,Y.y,Y.z),$.setXYZ(D,X.x,X.y,X.z)}else for(let E=0,G=Q.count;E<G;E+=3)W.fromBufferAttribute(Q,E+0),Z.fromBufferAttribute(Q,E+1),K.fromBufferAttribute(Q,E+2),U.subVectors(K,Z),N.subVectors(W,Z),U.cross(N),$.setXYZ(E+0,U.x,U.y,U.z),$.setXYZ(E+1,U.x,U.y,U.z),$.setXYZ(E+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)E8.fromBufferAttribute(J,Q),E8.normalize(),J.setXYZ(Q,E8.x,E8.y,E8.z)}toNonIndexed(){function J(H,Y){let{array:X,itemSize:U,normalized:N}=H,E=new X.constructor(Y.length*U),G=0,F=0;for(let R=0,D=Y.length;R<D;R++){if(H.isInterleavedBufferAttribute)G=Y[R]*H.data.stride+H.offset;else G=Y[R]*U;for(let O=0;O<U;O++)E[F++]=X[G++]}return new tJ(E,U,N)}if(this.index===null)return o0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new lJ,$=this.index.array,W=this.attributes;for(let H in W){let Y=W[H],X=J(Y,$);Q.setAttribute(H,X)}let Z=this.morphAttributes;for(let H in Z){let Y=[],X=Z[H];for(let U=0,N=X.length;U<N;U++){let E=X[U],G=J(E,$);Y.push(G)}Q.morphAttributes[H]=Y}Q.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;for(let H=0,Y=K.length;H<Y;H++){let X=K[H];Q.addGroup(X.start,X.count,X.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let Y=this.parameters;for(let X in Y)if(Y[X]!==void 0)J[X]=Y[X];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let Y in $){let X=$[Y];J.data.attributes[Y]=X.toJSON(J.data)}let W={},Z=!1;for(let Y in this.morphAttributes){let X=this.morphAttributes[Y],U=[];for(let N=0,E=X.length;N<E;N++){let G=X[N];U.push(G.toJSON(J.data))}if(U.length>0)W[Y]=U,Z=!0}if(Z)J.data.morphAttributes=W,J.data.morphTargetsRelative=this.morphTargetsRelative;let K=this.groups;if(K.length>0)J.data.groups=JSON.parse(JSON.stringify(K));let H=this.boundingSphere;if(H!==null)J.data.boundingSphere=H.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let W=J.attributes;for(let X in W){let U=W[X];this.setAttribute(X,U.clone(Q))}let Z=J.morphAttributes;for(let X in Z){let U=[],N=Z[X];for(let E=0,G=N.length;E<G;E++)U.push(N[E].clone(Q));this.morphAttributes[X]=U}this.morphTargetsRelative=J.morphTargetsRelative;let K=J.groups;for(let X=0,U=K.length;X<U;X++){let N=K[X];this.addGroup(N.start,N.count,N.materialIndex)}let H=J.boundingBox;if(H!==null)this.boundingBox=H.clone();let Y=J.boundingSphere;if(Y!==null)this.boundingSphere=Y.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class m6{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=c8()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,$){J*=this.stride,$*=Q.stride;for(let W=0,Z=this.stride;W<Z;W++)this.array[J+W]=Q.array[$+W];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=c8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),$=new this.constructor(Q,this.stride);return $.setUsage(this.usage),$}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=c8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let Q={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return Q.usage=this.usage,Q}}var z8=new T;class K7{constructor(J,Q,$,W=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=$,this.normalized=W}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,$=this.data.count;Q<$;Q++)z8.fromBufferAttribute(this,Q),z8.applyMatrix4(J),this.setXYZ(Q,z8.x,z8.y,z8.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)z8.fromBufferAttribute(this,Q),z8.applyNormalMatrix(J),this.setXYZ(Q,z8.x,z8.y,z8.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)z8.fromBufferAttribute(this,Q),z8.transformDirection(J),this.setXYZ(Q,z8.x,z8.y,z8.z);return this}getComponent(J,Q){let $=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)$=Y9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=xJ($,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=$,this}setX(J,Q){if(this.normalized)Q=xJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=xJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=xJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=xJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=Y9(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=Y9(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=Y9(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=Y9(Q,this.array);return Q}setXY(J,Q,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=xJ(Q,this.array),$=xJ($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this}setXYZ(J,Q,$,W){if(J=J*this.data.stride+this.offset,this.normalized)Q=xJ(Q,this.array),$=xJ($,this.array),W=xJ(W,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=W,this}setXYZW(J,Q,$,W,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=xJ(Q,this.array),$=xJ($,this.array),W=xJ(W,this.array),Z=xJ(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=W,this.data.array[J+3]=Z,this}clone(J){if(J===void 0){zQ("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let W=$*this.data.stride+this.offset;for(let Z=0;Z<this.itemSize;Z++)Q.push(this.data.array[W+Z])}return new tJ(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new K7(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){zQ("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let W=$*this.data.stride+this.offset;for(let Z=0;Z<this.itemSize;Z++)Q.push(this.data.array[W+Z])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var DZ=new T,NN=new T,GN=new YJ;class d8{constructor(J=new T(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,W){return this.normal.set(J,Q,$),this.constant=W,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let W=DZ.subVectors($,Q).cross(NN.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(W,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let W=J.delta(DZ),Z=this.normal.dot(W);if(Z===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let K=-(J.start.dot(this.normal)+this.constant)/Z;if($===!0&&(K<0||K>1))return null;return Q.copy(J.start).addScaledVector(W,K)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||GN.getNormalMatrix(J),W=this.coplanarPoint(DZ).applyMatrix4(J),Z=this.normal.applyMatrix3($).normalize();return this.constant=-W.dot(Z),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var EN=0;class w8 extends E9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:EN++}),this.uuid=c8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new h0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){o0(`Material: parameter '${Q}' has value of undefined.`);continue}let W=this[Q];if(W===void 0){o0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(W&&W.isColor)W.set($);else if(W&&W.isVector2&&($&&$.isVector2)||W&&W.isEuler&&($&&$.isEuler)||W&&W.isVector3&&($&&$.isVector3))W.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,$.blending=this.blending,$.side=this.side,$.shadowSide=this.shadowSide,$.vertexColors=this.vertexColors,$.opacity=this.opacity,$.transparent=this.transparent,$.blendSrc=this.blendSrc,$.blendDst=this.blendDst,$.blendEquation=this.blendEquation,$.blendSrcAlpha=this.blendSrcAlpha,$.blendDstAlpha=this.blendDstAlpha,$.blendEquationAlpha=this.blendEquationAlpha,$.blendColor=this.blendColor.getHex(),$.blendAlpha=this.blendAlpha,$.depthFunc=this.depthFunc,$.depthTest=this.depthTest,$.depthWrite=this.depthWrite,$.colorWrite=this.colorWrite,$.clipIntersection=this.clipIntersection,$.clipShadows=this.clipShadows,$.stencilWriteMask=this.stencilWriteMask,$.stencilFunc=this.stencilFunc,$.stencilRef=this.stencilRef,$.stencilFuncMask=this.stencilFuncMask,$.stencilFail=this.stencilFail,$.stencilZFail=this.stencilZFail,$.stencilZPass=this.stencilZPass,$.stencilWrite=this.stencilWrite,$.polygonOffset=this.polygonOffset,$.polygonOffsetFactor=this.polygonOffsetFactor,$.polygonOffsetUnits=this.polygonOffsetUnits,$.dithering=this.dithering,$.alphaTest=this.alphaTest,$.alphaHash=this.alphaHash,$.alphaToCoverage=this.alphaToCoverage,$.premultipliedAlpha=this.premultipliedAlpha,$.forceSinglePass=this.forceSinglePass,$.allowOverride=this.allowOverride,$.visible=this.visible,$.toneMapped=this.toneMapped,$.name=this.name,this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)$.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)$.clippingPlanes=this.clippingPlanes.map((Z)=>Z.toJSON());if(this.rotation!==void 0)$.rotation=this.rotation;if(this.depthPacking!==void 0)$.depthPacking=this.depthPacking;if(this.linewidth!==void 0)$.linewidth=this.linewidth;if(this.linecap!==void 0)$.linecap=this.linecap;if(this.linejoin!==void 0)$.linejoin=this.linejoin;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.wireframe!==void 0)$.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)$.flatShading=this.flatShading;if(this.fog!==void 0)$.fog=this.fog;if(Object.keys(this.userData).length>0)$.userData=this.userData;function W(Z){let K=[];for(let H in Z){let Y=Z[H];delete Y.metadata,K.push(Y)}return K}if(Q){let Z=W(J.textures),K=W(J.images);if(Z.length>0)$.textures=Z;if(K.length>0)$.images=K}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new h0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map(($)=>new d8().fromJSON($));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new U0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new U0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let W=Q.length;$=Array(W);for(let Z=0;Z!==W;++Z)$[Z]=Q[Z].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class m7 extends w8{constructor(J){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new h0(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.rotation=J.rotation,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var B6,qQ=new T,k6=new T,M6=new T,C6=new U0,OQ=new U0,vX=new QJ,T$=new T,RQ=new T,S$=new T,WY=new U0,BZ=new U0,ZY=new U0;class u6 extends TJ{constructor(J=new m7){super();if(this.isSprite=!0,this.type="Sprite",B6===void 0){B6=new lJ;let Q=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),$=new m6(Q,5);B6.setIndex([0,1,2,0,2,3]),B6.setAttribute("position",new K7($,3,0,!1)),B6.setAttribute("uv",new K7($,2,3,!1))}this.geometry=B6,this.material=J,this.center=new U0(0.5,0.5),this.count=1}intersectsFrustum(J){return J.intersectsSprite(this)}raycast(J,Q){if(J.camera===null)$J('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(k6.setFromMatrixScale(this.matrixWorld),vX.copy(J.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(J.camera.matrixWorldInverse,this.matrixWorld),M6.setFromMatrixPosition(this.modelViewMatrix),J.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)k6.multiplyScalar(-M6.z);let $=this.material.rotation,W,Z;if($!==0)Z=Math.cos($),W=Math.sin($);let K=this.center;w$(T$.set(-0.5,-0.5,0),M6,K,k6,W,Z),w$(RQ.set(0.5,-0.5,0),M6,K,k6,W,Z),w$(S$.set(0.5,0.5,0),M6,K,k6,W,Z),WY.set(0,0),BZ.set(1,0),ZY.set(1,1);let H=J.ray.intersectTriangle(T$,RQ,S$,!1,qQ);if(H===null){if(w$(RQ.set(-0.5,0.5,0),M6,K,k6,W,Z),BZ.set(0,1),H=J.ray.intersectTriangle(T$,S$,RQ,!1,qQ),H===null)return}let Y=J.ray.origin.distanceTo(qQ);if(Y<J.near||Y>J.far)return;Q.push({distance:Y,point:qQ.clone(),uv:h8.getInterpolation(qQ,T$,RQ,S$,WY,BZ,ZY,new U0),face:null,object:this})}copy(J,Q){if(super.copy(J,Q),J.center!==void 0)this.center.copy(J.center);return this.material=J.material,this}}function w$(J,Q,$,W,Z,K){if(C6.subVectors(J,$).addScalar(0.5).multiply(W),Z!==void 0)OQ.x=K*C6.x-Z*C6.y,OQ.y=Z*C6.x+K*C6.y;else OQ.copy(C6);J.copy(Q),J.x+=OQ.x,J.y+=OQ.y,J.applyMatrix4(vX)}var p9=new T,kZ=new T,j$=new T,y$=new T;class F7{constructor(J=new T,Q=new T(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,p9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=p9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return p9.copy(this.origin).addScaledVector(this.direction,Q),p9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,W){kZ.copy(J).add(Q).multiplyScalar(0.5),j$.copy(Q).sub(J).normalize(),y$.copy(this.origin).sub(kZ);let Z=J.distanceTo(Q)*0.5,K=-this.direction.dot(j$),H=y$.dot(this.direction),Y=-y$.dot(j$),X=y$.lengthSq(),U=Math.abs(1-K*K),N,E,G,F;if(U>0)if(N=K*Y-H,E=K*H-Y,F=Z*U,N>=0)if(E>=-F)if(E<=F){let R=1/U;N*=R,E*=R,G=N*(N+K*E+2*H)+E*(K*N+E+2*Y)+X}else E=Z,N=Math.max(0,-(K*E+H)),G=-N*N+E*(E+2*Y)+X;else E=-Z,N=Math.max(0,-(K*E+H)),G=-N*N+E*(E+2*Y)+X;else if(E<=-F)N=Math.max(0,-(-K*Z+H)),E=N>0?-Z:Math.min(Math.max(-Z,-Y),Z),G=-N*N+E*(E+2*Y)+X;else if(E<=F)N=0,E=Math.min(Math.max(-Z,-Y),Z),G=E*(E+2*Y)+X;else N=Math.max(0,-(K*Z+H)),E=N>0?Z:Math.min(Math.max(-Z,-Y),Z),G=-N*N+E*(E+2*Y)+X;else E=K>0?-Z:Z,N=Math.max(0,-(K*E+H)),G=-N*N+E*(E+2*Y)+X;if($)$.copy(this.origin).addScaledVector(this.direction,N);if(W)W.copy(kZ).addScaledVector(j$,E);return G}intersectSphere(J,Q){if(J.radius<0)return null;p9.subVectors(J.center,this.origin);let $=p9.dot(this.direction),W=p9.dot(p9)-$*$,Z=J.radius*J.radius;if(W>Z)return null;let K=Math.sqrt(Z-W),H=$-K,Y=$+K;if(Y<0)return null;if(H<0)return this.at(Y,Q);return this.at(H,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,W,Z,K,H,Y,X=1/this.direction.x,U=1/this.direction.y,N=1/this.direction.z,E=this.origin;if(X>=0)$=(J.min.x-E.x)*X,W=(J.max.x-E.x)*X;else $=(J.max.x-E.x)*X,W=(J.min.x-E.x)*X;if(U>=0)Z=(J.min.y-E.y)*U,K=(J.max.y-E.y)*U;else Z=(J.max.y-E.y)*U,K=(J.min.y-E.y)*U;if($>K||Z>W)return null;if(Z>$||isNaN($))$=Z;if(K<W||isNaN(W))W=K;if(N>=0)H=(J.min.z-E.z)*N,Y=(J.max.z-E.z)*N;else H=(J.max.z-E.z)*N,Y=(J.min.z-E.z)*N;if($>Y||H>W)return null;if(H>$||$!==$)$=H;if(Y<W||W!==W)W=Y;if(W<0)return null;return this.at($>=0?$:W,Q)}intersectsBox(J){return this.intersectBox(J,p9)!==null}intersectTriangle(J,Q,$,W,Z){let K=this.origin,H=this.direction,Y=H.x,X=H.y,U=H.z,N=J.x-K.x,E=J.y-K.y,G=J.z-K.z,F=Q.x-K.x,R=Q.y-K.y,D=Q.z-K.z,O=$.x-K.x,q=$.y-K.y,V=$.z-K.z,M=Math.abs(Y),L=Math.abs(X),P=Math.abs(U),I,S,k,A,d,b,g,Z0,f,o,s,p;if(M>=L&&M>=P)if(k=Y,b=N,f=F,p=O,Y>=0)I=X,S=U,A=E,d=G,g=R,Z0=D,o=q,s=V;else I=U,S=X,A=G,d=E,g=D,Z0=R,o=V,s=q;else if(L>=P)if(k=X,b=E,f=R,p=q,X>=0)I=U,S=Y,A=G,d=N,g=D,Z0=F,o=V,s=O;else I=Y,S=U,A=N,d=G,g=F,Z0=D,o=O,s=V;else if(k=U,b=G,f=D,p=V,U>=0)I=Y,S=X,A=N,d=E,g=F,Z0=R,o=O,s=q;else I=X,S=Y,A=E,d=N,g=R,Z0=F,o=q,s=O;if(k===0)return null;let X0=I/k,a=S/k,Y0=1/k,F0=A-X0*b,r0=d-a*b,T0=g-X0*f,x0=Z0-a*f,e0=o-X0*p,Q0=s-a*p,w=e0*x0-Q0*T0,x=F0*Q0-r0*e0,l=T0*r0-x0*F0;if(W){if(w<0||x<0||l<0)return null}else if((w<0||x<0||l<0)&&(w>0||x>0||l>0))return null;let e=w+x+l;if(e===0)return null;let t=Y0*(w*b+x*f+l*p);if(e>0?t<0:t>0)return null;return this.at(t/e,Z)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dJ extends w8{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new h0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new X9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var KY=new QJ,_7=new F7,v$=new g8,HY=new T,f$=new T,b$=new T,h$=new T,MZ=new T,x$=new T,YY=new T,g$=new T;class I0 extends TJ{constructor(J=new lJ,Q=new dJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,K=W.length;Z<K;Z++){let H=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=Z}}}}getVertexPosition(J,Q){let $=this.geometry,W=$.attributes.position,Z=$.morphAttributes.position,K=$.morphTargetsRelative;Q.fromBufferAttribute(W,J);let H=this.morphTargetInfluences;if(Z&&H){x$.set(0,0,0);for(let Y=0,X=Z.length;Y<X;Y++){let U=H[Y],N=Z[Y];if(U===0)continue;if(MZ.fromBufferAttribute(N,J),K)x$.addScaledVector(MZ,U);else x$.addScaledVector(MZ.sub(Q),U)}Q.add(x$)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.material,Z=this.matrixWorld;if(W===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(v$.copy($.boundingSphere),v$.applyMatrix4(Z),_7.copy(J.ray).recast(J.near),v$.containsPoint(_7.origin)===!1){if(_7.intersectSphere(v$,HY)===null)return;if(_7.origin.distanceToSquared(HY)>(J.far-J.near)**2)return}if(KY.copy(Z).invert(),_7.copy(J.ray).applyMatrix4(KY),$.boundingBox!==null){if(_7.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,_7)}_computeIntersections(J,Q,$){let W,Z=this.geometry,K=this.material,H=Z.index,Y=Z.attributes.position,X=Z.attributes.uv,U=Z.attributes.uv1,N=Z.attributes.normal,E=Z.groups,G=Z.drawRange;if(H!==null)if(Array.isArray(K))for(let F=0,R=E.length;F<R;F++){let D=E[F],O=K[D.materialIndex],q=Math.max(D.start,G.start),V=Math.min(H.count,Math.min(D.start+D.count,G.start+G.count));for(let M=q,L=V;M<L;M+=3){let P=H.getX(M),I=H.getX(M+1),S=H.getX(M+2);if(W=p$(this,O,J,$,X,U,N,P,I,S),W)W.faceIndex=Math.floor(M/3),W.face.materialIndex=D.materialIndex,Q.push(W)}}else{let F=Math.max(0,G.start),R=Math.min(H.count,G.start+G.count);for(let D=F,O=R;D<O;D+=3){let q=H.getX(D),V=H.getX(D+1),M=H.getX(D+2);if(W=p$(this,K,J,$,X,U,N,q,V,M),W)W.faceIndex=Math.floor(D/3),Q.push(W)}}else if(Y!==void 0)if(Array.isArray(K))for(let F=0,R=E.length;F<R;F++){let D=E[F],O=K[D.materialIndex],q=Math.max(D.start,G.start),V=Math.min(Y.count,Math.min(D.start+D.count,G.start+G.count));for(let M=q,L=V;M<L;M+=3){let P=M,I=M+1,S=M+2;if(W=p$(this,O,J,$,X,U,N,P,I,S),W)W.faceIndex=Math.floor(M/3),W.face.materialIndex=D.materialIndex,Q.push(W)}}else{let F=Math.max(0,G.start),R=Math.min(Y.count,G.start+G.count);for(let D=F,O=R;D<O;D+=3){let q=D,V=D+1,M=D+2;if(W=p$(this,K,J,$,X,U,N,q,V,M),W)W.faceIndex=Math.floor(D/3),Q.push(W)}}}}function FN(J,Q,$,W,Z,K,H,Y){let X;if(Q.side===1)X=W.intersectTriangle(H,K,Z,!0,Y);else X=W.intersectTriangle(Z,K,H,Q.side===0,Y);if(X===null)return null;g$.copy(Y),g$.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(g$);if(U<$.near||U>$.far)return null;return{distance:U,point:g$.clone(),object:J}}function p$(J,Q,$,W,Z,K,H,Y,X,U){J.getVertexPosition(Y,f$),J.getVertexPosition(X,b$),J.getVertexPosition(U,h$);let N=FN(J,Q,$,W,f$,b$,h$,YY);if(N){let E=new T;if(h8.getBarycoord(YY,f$,b$,h$,E),Z)N.uv=h8.getInterpolatedAttribute(Z,Y,X,U,E,new U0);if(K)N.uv1=h8.getInterpolatedAttribute(K,Y,X,U,E,new U0);if(H){if(N.normal=h8.getInterpolatedAttribute(H,Y,X,U,E,new T),N.normal.dot(W.direction)>0)N.normal.multiplyScalar(-1)}let G={a:Y,b:X,c:U,normal:new T,materialIndex:0};h8.getNormal(f$,b$,h$,G.normal),N.face=G,N.barycoord=E}return N}var LQ=new gJ,XY=new gJ,UY=new gJ,qN=new gJ,NY=new QJ,l$=new T,CZ=new g8,GY=new QJ,PZ=new F7;class DW extends I0{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new QJ,this.bindMatrixInverse=new QJ,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new A8;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,l$),this.boundingBox.expandByPoint(l$)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new g8;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,l$),this.boundingSphere.expandByPoint(l$)}copy(J,Q){if(super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,Q){let $=this.material,W=this.matrixWorld;if($===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(CZ.copy(this.boundingSphere),CZ.applyMatrix4(W),J.ray.intersectsSphere(CZ)===!1)return;if(GY.copy(W).invert(),PZ.copy(J.ray).applyMatrix4(GY),this.boundingBox!==null){if(PZ.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,PZ)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new gJ,Q=this.geometry.attributes.skinWeight;for(let $=0,W=Q.count;$<W;$++){J.fromBufferAttribute(Q,$);let Z=1/J.manhattanLength();if(Z!==1/0)J.multiplyScalar(Z);else J.set(1,0,0,0);Q.setXYZW($,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else o0("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let $=this.skeleton,W=this.geometry;if(XY.fromBufferAttribute(W.attributes.skinIndex,J),UY.fromBufferAttribute(W.attributes.skinWeight,J),Q.isVector4)LQ.copy(Q),Q.set(0,0,0,0);else LQ.set(...Q,1),Q.set(0,0,0);LQ.applyMatrix4(this.bindMatrix);for(let Z=0;Z<4;Z++){let K=UY.getComponent(Z);if(K!==0){let H=XY.getComponent(Z);NY.multiplyMatrices($.bones[H].matrixWorld,$.boneInverses[H]),Q.addScaledVector(qN.copy(LQ).applyMatrix4(NY),K)}}if(Q.isVector4)Q.w=LQ.w;return Q.applyMatrix4(this.bindMatrixInverse)}}class mQ extends TJ{constructor(){super();this.isBone=!0,this.type="Bone"}}class uQ extends eJ{constructor(J=null,Q=1,$=1,W,Z,K,H,Y,X=1003,U=1003,N,E){super(null,K,H,Y,X,U,W,Z,N,E);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var EY=new QJ,ON=new QJ;class dQ{constructor(J=[],Q=[]){this.uuid=c8(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){o0("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let $=0,W=this.bones.length;$<W;$++)this.boneInverses.push(new QJ)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let $=new QJ;if(this.bones[J])$.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push($)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($)$.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($){if($.parent&&$.parent.isBone)$.matrix.copy($.parent.matrixWorld).invert(),$.matrix.multiply($.matrixWorld);else $.matrix.copy($.matrixWorld);$.matrix.decompose($.position,$.quaternion,$.scale)}}}update(){let J=this.bones,Q=this.boneInverses,$=this.boneMatrices,W=this.boneTexture;for(let Z=0,K=J.length;Z<K;Z++){let H=J[Z]?J[Z].matrixWorld:ON;EY.multiplyMatrices(H,Q[Z]),EY.toArray($,Z*16)}if(W!==null)W.needsUpdate=!0}clone(){return new dQ(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let $=new uQ(Q,J,J,1023,1015);return $.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=$,this}getBoneByName(J){for(let Q=0,$=this.bones.length;Q<$;Q++){let W=this.bones[Q];if(W.name===J)return W}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let $=0,W=J.bones.length;$<W;$++){let Z=J.bones[$],K=Q[Z];if(K===void 0)o0("Skeleton: No bone found with UUID:",Z),K=new mQ;this.bones.push(K),this.boneInverses.push(new QJ().fromArray(J.boneInverses[$]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,$=this.boneInverses;for(let W=0,Z=Q.length;W<Z;W++){let K=Q[W];J.bones.push(K.uuid);let H=$[W];J.boneInverses.push(H.toArray())}return J}}class H7 extends tJ{constructor(J,Q,$,W=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=W}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var P6=new QJ,FY=new QJ,m$=[],qY=new A8,RN=new QJ,VQ=new I0,DQ=new g8;class T9 extends I0{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new H7(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let W=0;W<$;W++)this.setMatrixAt(W,RN)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new A8;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,P6),qY.copy(J.boundingBox).applyMatrix4(P6),this.boundingBox.union(qY)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new g8;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,P6),DQ.copy(J.boundingSphere).applyMatrix4(P6),this.boundingSphere.union(DQ)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,W=this.morphTexture.source.data.data,Z=$.length+1,K=J*Z+1;for(let H=0;H<$.length;H++)$[H]=W[K+H]}raycast(J,Q){let $=this.matrixWorld,W=this.count;if(VQ.geometry=this.geometry,VQ.material=this.material,VQ.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(DQ.copy(this.boundingSphere),DQ.applyMatrix4($),J.ray.intersectsSphere(DQ)===!1)return;for(let Z=0;Z<W;Z++){this.getMatrixAt(Z,P6),FY.multiplyMatrices($,P6),VQ.matrixWorld=FY,VQ.raycast(J,m$);for(let K=0,H=m$.length;K<H;K++){let Y=m$[K];Y.instanceId=Z,Y.object=this,Q.push(Y)}m$.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new H7(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let $=Q.morphTargetInfluences,W=$.length+1;if(this.morphTexture===null)this.morphTexture=new uQ(new Float32Array(W*this.count),W,this.count,1028,1015);let Z=this.morphTexture.source.data.data,K=0;for(let X=0;X<$.length;X++)K+=$[X];let H=this.geometry.morphTargetsRelative?1:1-K,Y=W*J;return Z[Y]=H,Z.set($,Y+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var T7=new g8,LN=new U0(0.5,0.5),u$=new T;class cQ{constructor(J=new d8,Q=new d8,$=new d8,W=new d8,Z=new d8,K=new d8){this.planes=[J,Q,$,W,Z,K]}set(J,Q,$,W,Z,K){let H=this.planes;return H[0].copy(J),H[1].copy(Q),H[2].copy($),H[3].copy(W),H[4].copy(Z),H[5].copy(K),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let W=this.planes,Z=J.elements,K=Z[0],H=Z[1],Y=Z[2],X=Z[3],U=Z[4],N=Z[5],E=Z[6],G=Z[7],F=Z[8],R=Z[9],D=Z[10],O=Z[11],q=Z[12],V=Z[13],M=Z[14],L=Z[15];if(W[0].setComponents(X-K,G-U,O-F,L-q).normalize(),W[1].setComponents(X+K,G+U,O+F,L+q).normalize(),W[2].setComponents(X+H,G+N,O+R,L+V).normalize(),W[3].setComponents(X-H,G-N,O-R,L-V).normalize(),$)W[4].setComponents(Y,E,D,M).normalize(),W[5].setComponents(X-Y,G-E,O-D,L-M).normalize();else if(W[4].setComponents(X-Y,G-E,O-D,L-M).normalize(),Q===2000)W[5].setComponents(X+Y,G+E,O+D,L+M).normalize();else if(Q===2001)W[5].setComponents(Y,E,D,M).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();T7.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();T7.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(T7)}intersectsSprite(J){T7.center.set(0,0,0);let Q=LN.distanceTo(J.center);return T7.radius=0.7071067811865476+Q,T7.applyMatrix4(J.matrixWorld),this.intersectsSphere(T7)}intersectsSphere(J){let Q=this.planes,$=J.center,W=-J.radius;for(let Z=0;Z<6;Z++)if(Q[Z].distanceToPoint($)<W)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let W=Q[$];if(u$.x=W.normal.x>0?J.max.x:J.min.x,u$.y=W.normal.y>0?J.max.y:J.min.y,u$.z=W.normal.z>0?J.max.z:J.min.z,W.distanceToPoint(u$)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class nQ extends w8{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new h0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var e$=new T,JW=new T,OY=new QJ,BQ=new F7,d$=new g8,IZ=new T,RY=new T;class d6 extends TJ{constructor(J=new lJ,Q=new nQ){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let W=1,Z=Q.count;W<Z;W++)e$.fromBufferAttribute(Q,W-1),JW.fromBufferAttribute(Q,W),$[W]=$[W-1],$[W]+=e$.distanceTo(JW);J.setAttribute("lineDistance",new qJ($,1))}else o0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.matrixWorld,Z=J.params.Line.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(d$.copy($.boundingSphere),d$.applyMatrix4(W),d$.radius+=Z,J.ray.intersectsSphere(d$)===!1)return;OY.copy(W).invert(),BQ.copy(J.ray).applyMatrix4(OY);let H=Z/((this.scale.x+this.scale.y+this.scale.z)/3),Y=H*H,X=this.isLineSegments?2:1,U=$.index,E=$.attributes.position;if(U!==null){let G=Math.max(0,K.start),F=Math.min(U.count,K.start+K.count);for(let R=G,D=F-1;R<D;R+=X){let O=U.getX(R),q=U.getX(R+1),V=c$(this,J,BQ,Y,O,q,R);if(V)Q.push(V)}if(this.isLineLoop){let R=U.getX(F-1),D=U.getX(G),O=c$(this,J,BQ,Y,R,D,F-1);if(O)Q.push(O)}}else{let G=Math.max(0,K.start),F=Math.min(E.count,K.start+K.count);for(let R=G,D=F-1;R<D;R+=X){let O=c$(this,J,BQ,Y,R,R+1,R);if(O)Q.push(O)}if(this.isLineLoop){let R=c$(this,J,BQ,Y,F-1,G,F-1);if(R)Q.push(R)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,K=W.length;Z<K;Z++){let H=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=Z}}}}}function c$(J,Q,$,W,Z,K,H){let Y=J.geometry.attributes.position;if(e$.fromBufferAttribute(Y,Z),JW.fromBufferAttribute(Y,K),$.distanceSqToSegment(e$,JW,IZ,RY)>W)return;IZ.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(IZ);if(U<Q.near||U>Q.far)return;return{distance:U,point:RY.clone().applyMatrix4(J.matrixWorld),index:H,face:null,faceIndex:null,barycoord:null,object:J}}var LY=new T,VY=new T;class BW extends d6{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let W=0,Z=Q.count;W<Z;W+=2)LY.fromBufferAttribute(Q,W),VY.fromBufferAttribute(Q,W+1),$[W]=W===0?0:$[W-1],$[W+1]=$[W]+LY.distanceTo(VY);J.setAttribute("lineDistance",new qJ($,1))}else o0("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kW extends d6{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class u7 extends w8{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new h0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var DY=new QJ,wZ=new F7,n$=new g8,s$=new T;class c6 extends TJ{constructor(J=new lJ,Q=new u7){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,W=this.matrixWorld,Z=J.params.Points.threshold,K=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(n$.copy($.boundingSphere),n$.applyMatrix4(W),n$.radius+=Z,J.ray.intersectsSphere(n$)===!1)return;DY.copy(W).invert(),wZ.copy(J.ray).applyMatrix4(DY);let H=Z/((this.scale.x+this.scale.y+this.scale.z)/3),Y=H*H,X=$.index,N=$.attributes.position;if(X!==null){let E=Math.max(0,K.start),G=Math.min(X.count,K.start+K.count);for(let F=E,R=G;F<R;F++){let D=X.getX(F);s$.fromBufferAttribute(N,D),BY(s$,D,Y,W,J,Q,this)}}else{let E=Math.max(0,K.start),G=Math.min(N.count,K.start+K.count);for(let F=E,R=G;F<R;F++)s$.fromBufferAttribute(N,F),BY(s$,F,Y,W,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let W=Q[$[0]];if(W!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let Z=0,K=W.length;Z<K;Z++){let H=W[Z].name||String(Z);this.morphTargetInfluences.push(0),this.morphTargetDictionary[H]=Z}}}}}function BY(J,Q,$,W,Z,K,H){let Y=wZ.distanceSqToPoint(J);if(Y<$){let X=new T;wZ.closestPointToPoint(J,X),X.applyMatrix4(W);let U=Z.ray.origin.distanceTo(X);if(U<Z.near||U>Z.far)return;K.push({distance:U,distanceToRay:Math.sqrt(Y),point:X,index:Q,face:null,faceIndex:null,barycoord:null,object:H})}}class MW extends eJ{constructor(J=[],Q=301,$,W,Z,K,H,Y,X,U){super(J,Q,$,W,Z,K,H,Y,X,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class F9 extends eJ{constructor(J,Q,$,W,Z,K,H,Y,X){super(J,Q,$,W,Z,K,H,Y,X);this.isCanvasTexture=!0,this.needsUpdate=!0}}class d7 extends eJ{constructor(J,Q,$=1014,W,Z,K,H=1003,Y=1003,X,U=1026,N=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let E={width:J,height:Q,depth:N};super(E,W,Z,K,H,Y,U,$,X);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new pQ(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class wK extends d7{constructor(J,Q=1014,$=301,W,Z,K=1003,H=1003,Y,X=1026){let U={width:J,height:J,depth:1},N=[U,U,U,U,U,U];super(J,J,Q,$,W,Z,K,H,Y,X);this.image=N,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class CW extends eJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class cJ extends lJ{constructor(J=1,Q=1,$=1,W=1,Z=1,K=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:W,heightSegments:Z,depthSegments:K};let H=this;W=Math.floor(W),Z=Math.floor(Z),K=Math.floor(K);let Y=[],X=[],U=[],N=[],E=0,G=0;F("z","y","x",-1,-1,$,Q,J,K,Z,0),F("z","y","x",1,-1,$,Q,-J,K,Z,1),F("x","z","y",1,1,J,$,Q,W,K,2),F("x","z","y",1,-1,J,$,-Q,W,K,3),F("x","y","z",1,-1,J,Q,$,W,Z,4),F("x","y","z",-1,-1,J,Q,-$,W,Z,5),this.setIndex(Y),this.setAttribute("position",new qJ(X,3)),this.setAttribute("normal",new qJ(U,3)),this.setAttribute("uv",new qJ(N,2));function F(R,D,O,q,V,M,L,P,I,S,k){let A=M/I,d=L/S,b=M/2,g=L/2,Z0=P/2,f=I+1,o=S+1,s=0,p=0,X0=new T;for(let a=0;a<o;a++){let Y0=a*d-g;for(let F0=0;F0<f;F0++){let r0=F0*A-b;X0[R]=r0*q,X0[D]=Y0*V,X0[O]=Z0,X.push(X0.x,X0.y,X0.z),X0[R]=0,X0[D]=0,X0[O]=P>0?1:-1,U.push(X0.x,X0.y,X0.z),N.push(F0/I),N.push(1-a/S),s+=1}}for(let a=0;a<S;a++)for(let Y0=0;Y0<I;Y0++){let F0=E+Y0+f*a,r0=E+Y0+f*(a+1),T0=E+(Y0+1)+f*(a+1),x0=E+(Y0+1)+f*a;Y.push(F0,r0,x0),Y.push(r0,T0,x0),p+=6}H.addGroup(G,p,k),G+=p,E+=s}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new cJ(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class d9 extends lJ{constructor(J=1,Q=32,$=0,W=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:Q,thetaStart:$,thetaLength:W},Q=Math.max(3,Q);let Z=[],K=[],H=[],Y=[],X=new T,U=new U0;K.push(0,0,0),H.push(0,0,1),Y.push(0.5,0.5);for(let N=0,E=3;N<=Q;N++,E+=3){let G=$+N/Q*W;X.x=J*Math.cos(G),X.y=J*Math.sin(G),K.push(X.x,X.y,X.z),H.push(0,0,1),U.x=(K[E]/J+1)/2,U.y=(K[E+1]/J+1)/2,Y.push(U.x,U.y)}for(let N=1;N<=Q;N++)Z.push(N,N+1,0);this.setIndex(Z),this.setAttribute("position",new qJ(K,3)),this.setAttribute("normal",new qJ(H,3)),this.setAttribute("uv",new qJ(Y,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new d9(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class AJ extends lJ{constructor(J=1,Q=1,$=1,W=32,Z=1,K=!1,H=0,Y=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:W,heightSegments:Z,openEnded:K,thetaStart:H,thetaLength:Y};let X=this;W=Math.floor(W),Z=Math.floor(Z);let U=[],N=[],E=[],G=[],F=0,R=[],D=$/2,O=0;if(q(),K===!1){if(J>0)V(!0);if(Q>0)V(!1)}this.setIndex(U),this.setAttribute("position",new qJ(N,3)),this.setAttribute("normal",new qJ(E,3)),this.setAttribute("uv",new qJ(G,2));function q(){let M=new T,L=new T,P=0,I=(Q-J)/$;for(let S=0;S<=Z;S++){let k=[],A=S/Z,d=A*(Q-J)+J;for(let b=0;b<=W;b++){let g=b/W,Z0=g*Y+H,f=Math.sin(Z0),o=Math.cos(Z0);L.x=d*f,L.y=-A*$+D,L.z=d*o,N.push(L.x,L.y,L.z),M.set(f,I,o).normalize(),E.push(M.x,M.y,M.z),G.push(g,1-A),k.push(F++)}R.push(k)}for(let S=0;S<W;S++)for(let k=0;k<Z;k++){let A=R[k][S],d=R[k+1][S],b=R[k+1][S+1],g=R[k][S+1];if(J>0||k!==0)U.push(A,d,g),P+=3;if(Q>0||k!==Z-1)U.push(d,b,g),P+=3}X.addGroup(O,P,0),O+=P}function V(M){let L=F,P=new U0,I=new T,S=0,k=M===!0?J:Q,A=M===!0?1:-1;for(let b=1;b<=W;b++)N.push(0,D*A,0),E.push(0,A,0),G.push(0.5,0.5),F++;let d=F;for(let b=0;b<=W;b++){let Z0=b/W*Y+H,f=Math.cos(Z0),o=Math.sin(Z0);I.x=k*o,I.y=D*A,I.z=k*f,N.push(I.x,I.y,I.z),E.push(0,A,0),P.x=f*0.5+0.5,P.y=o*0.5*A+0.5,G.push(P.x,P.y),F++}for(let b=0;b<W;b++){let g=L+b,Z0=d+b;if(M===!0)U.push(Z0,Z0+1,g);else U.push(Z0+1,Z0,g);S+=3}X.addGroup(O,S,M===!0?1:2),O+=S}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new AJ(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class sQ extends AJ{constructor(J=1,Q=1,$=32,W=1,Z=!1,K=0,H=Math.PI*2){super(0,J,Q,$,W,Z,K,H);this.type="ConeGeometry",this.parameters={radius:J,height:Q,radialSegments:$,heightSegments:W,openEnded:Z,thetaStart:K,thetaLength:H}}static fromJSON(J){return new sQ(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class s8{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){o0("Curve: .getPoint() not implemented.")}getPointAt(J,Q){let $=this.getUtoTmapping(J);return this.getPoint($,Q)}getPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));return Q}getSpacedPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPointAt($/J));return Q}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Q=[],$,W=this.getPoint(0),Z=0;Q.push(0);for(let K=1;K<=J;K++)$=this.getPoint(K/J),Z+=$.distanceTo(W),Q.push(Z),W=$;return this.cacheArcLengths=Q,Q}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Q=null){let $=this.getLengths(),W=0,Z=$.length,K;if(Q)K=Q;else K=J*$[Z-1];let H=0,Y=Z-1,X;while(H<=Y)if(W=Math.floor(H+(Y-H)/2),X=$[W]-K,X<0)H=W+1;else if(X>0)Y=W-1;else{Y=W;break}if(W=Y,$[W]===K)return W/(Z-1);let U=$[W],E=$[W+1]-U,G=(K-U)/E;return(W+G)/(Z-1)}getTangent(J,Q){let W=J-0.0001,Z=J+0.0001;if(W<0)W=0;if(Z>1)Z=1;let K=this.getPoint(W),H=this.getPoint(Z),Y=Q||(K.isVector2?new U0:new T);return Y.copy(H).sub(K).normalize(),Y}getTangentAt(J,Q){let $=this.getUtoTmapping(J);return this.getTangent($,Q)}computeFrenetFrames(J,Q=!1){let $=new T,W=[],Z=[],K=[],H=new T,Y=new QJ;for(let G=0;G<=J;G++){let F=G/J;W[G]=this.getTangentAt(F,new T)}Z[0]=new T,K[0]=new T;let X=Number.MAX_VALUE,U=Math.abs(W[0].x),N=Math.abs(W[0].y),E=Math.abs(W[0].z);if(U<=X)X=U,$.set(1,0,0);if(N<=X)X=N,$.set(0,1,0);if(E<=X)$.set(0,0,1);H.crossVectors(W[0],$).normalize(),Z[0].crossVectors(W[0],H),K[0].crossVectors(W[0],Z[0]);for(let G=1;G<=J;G++){if(Z[G]=Z[G-1].clone(),K[G]=K[G-1].clone(),H.crossVectors(W[G-1],W[G]),H.length()>Number.EPSILON){H.normalize();let F=Math.acos(NJ(W[G-1].dot(W[G]),-1,1));Z[G].applyMatrix4(Y.makeRotationAxis(H,F))}K[G].crossVectors(W[G],Z[G])}if(Q===!0){let G=Math.acos(NJ(Z[0].dot(Z[J]),-1,1));if(G/=J,W[0].dot(H.crossVectors(Z[0],Z[J]))>0)G=-G;for(let F=1;F<=J;F++)Z[F].applyMatrix4(Y.makeRotationAxis(W[F],G*F)),K[F].crossVectors(W[F],Z[F])}return{tangents:W,normals:Z,binormals:K}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}}class iQ extends s8{constructor(J=0,Q=0,$=1,W=1,Z=0,K=Math.PI*2,H=!1,Y=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Q,this.xRadius=$,this.yRadius=W,this.aStartAngle=Z,this.aEndAngle=K,this.aClockwise=H,this.aRotation=Y}getPoint(J,Q=new U0){let $=Q,W=Math.PI*2,Z=this.aEndAngle-this.aStartAngle,K=Math.abs(Z)<Number.EPSILON;while(Z<0)Z+=W;while(Z>W)Z-=W;if(Z<Number.EPSILON)if(K)Z=0;else Z=W;if(this.aClockwise===!0&&!K)if(Z===W)Z=-W;else Z=Z-W;let H=this.aStartAngle+J*Z,Y=this.aX+this.xRadius*Math.cos(H),X=this.aY+this.yRadius*Math.sin(H);if(this.aRotation!==0){let U=Math.cos(this.aRotation),N=Math.sin(this.aRotation),E=Y-this.aX,G=X-this.aY;Y=E*U-G*N+this.aX,X=E*N+G*U+this.aY}return $.set(Y,X)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class jK extends iQ{constructor(J,Q,$,W,Z,K){super(J,Q,$,$,W,Z,K);this.isArcCurve=!0,this.type="ArcCurve"}}function yK(){let J=0,Q=0,$=0,W=0;function Z(K,H,Y,X){J=K,Q=Y,$=-3*K+3*H-2*Y-X,W=2*K-2*H+Y+X}return{initCatmullRom:function(K,H,Y,X,U){Z(H,Y,U*(Y-K),U*(X-H))},initNonuniformCatmullRom:function(K,H,Y,X,U,N,E){let G=(H-K)/U-(Y-K)/(U+N)+(Y-H)/N,F=(Y-H)/N-(X-H)/(N+E)+(X-Y)/E;G*=N,F*=N,Z(H,Y,G,F)},calc:function(K){let H=K*K,Y=H*K;return J+Q*K+$*H+W*Y}}}var kY=new T,MY=new T,zZ=new yK,AZ=new yK,_Z=new yK;class c7 extends s8{constructor(J=[],Q=!1,$="centripetal",W=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Q,this.curveType=$,this.tension=W}getPoint(J,Q=new T){let $=Q,W=this.points,Z=W.length,K=(Z-(this.closed?0:1))*J,H=Math.floor(K),Y=K-H;if(this.closed)H+=H>0?0:(Math.floor(Math.abs(H)/Z)+1)*Z;else if(Y===0&&H===Z-1)H=Z-2,Y=1;let X,U;if(this.closed||H>0)X=W[(H-1)%Z];else MY.subVectors(W[0],W[1]).add(W[0]),X=MY;let N=W[H%Z],E=W[(H+1)%Z];if(this.closed||H+2<Z)U=W[(H+2)%Z];else kY.subVectors(W[Z-1],W[Z-2]).add(W[Z-1]),U=kY;if(this.curveType==="centripetal"||this.curveType==="chordal"){let G=this.curveType==="chordal"?0.5:0.25,F=Math.pow(X.distanceToSquared(N),G),R=Math.pow(N.distanceToSquared(E),G),D=Math.pow(E.distanceToSquared(U),G);if(R<0.0001)R=1;if(F<0.0001)F=R;if(D<0.0001)D=R;zZ.initNonuniformCatmullRom(X.x,N.x,E.x,U.x,F,R,D),AZ.initNonuniformCatmullRom(X.y,N.y,E.y,U.y,F,R,D),_Z.initNonuniformCatmullRom(X.z,N.z,E.z,U.z,F,R,D)}else if(this.curveType==="catmullrom")zZ.initCatmullRom(X.x,N.x,E.x,U.x,this.tension),AZ.initCatmullRom(X.y,N.y,E.y,U.y,this.tension),_Z.initCatmullRom(X.z,N.z,E.z,U.z,this.tension);return $.set(zZ.calc(Y),AZ.calc(Y),_Z.calc(Y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let W=J.points[Q];this.points.push(W.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let W=this.points[Q];J.points.push(W.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let W=J.points[Q];this.points.push(new T().fromArray(W))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function CY(J,Q,$,W,Z){let K=(W-Q)*0.5,H=(Z-$)*0.5,Y=J*J,X=J*Y;return(2*$-2*W+K+H)*X+(-3*$+3*W-2*K-H)*Y+K*J+$}function VN(J,Q){let $=1-J;return $*$*Q}function DN(J,Q){return 2*(1-J)*J*Q}function BN(J,Q){return J*J*Q}function PQ(J,Q,$,W){return VN(J,Q)+DN(J,$)+BN(J,W)}function kN(J,Q){let $=1-J;return $*$*$*Q}function MN(J,Q){let $=1-J;return 3*$*$*J*Q}function CN(J,Q){return 3*(1-J)*J*J*Q}function PN(J,Q){return J*J*J*Q}function IQ(J,Q,$,W,Z){return kN(J,Q)+MN(J,$)+CN(J,W)+PN(J,Z)}class PW extends s8{constructor(J=new U0,Q=new U0,$=new U0,W=new U0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Q,this.v2=$,this.v3=W}getPoint(J,Q=new U0){let $=Q,W=this.v0,Z=this.v1,K=this.v2,H=this.v3;return $.set(IQ(J,W.x,Z.x,K.x,H.x),IQ(J,W.y,Z.y,K.y,H.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class vK extends s8{constructor(J=new T,Q=new T,$=new T,W=new T){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Q,this.v2=$,this.v3=W}getPoint(J,Q=new T){let $=Q,W=this.v0,Z=this.v1,K=this.v2,H=this.v3;return $.set(IQ(J,W.x,Z.x,K.x,H.x),IQ(J,W.y,Z.y,K.y,H.y),IQ(J,W.z,Z.z,K.z,H.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class IW extends s8{constructor(J=new U0,Q=new U0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Q}getPoint(J,Q=new U0){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new U0){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class fK extends s8{constructor(J=new T,Q=new T){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Q}getPoint(J,Q=new T){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new T){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class zW extends s8{constructor(J=new U0,Q=new U0,$=new U0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new U0){let $=Q,W=this.v0,Z=this.v1,K=this.v2;return $.set(PQ(J,W.x,Z.x,K.x),PQ(J,W.y,Z.y,K.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class q9 extends s8{constructor(J=new T,Q=new T,$=new T){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new T){let $=Q,W=this.v0,Z=this.v1,K=this.v2;return $.set(PQ(J,W.x,Z.x,K.x),PQ(J,W.y,Z.y,K.y),PQ(J,W.z,Z.z,K.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class AW extends s8{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Q=new U0){let $=Q,W=this.points,Z=(W.length-1)*J,K=Math.floor(Z),H=Z-K,Y=W[K===0?K:K-1],X=W[K],U=W[K>W.length-2?W.length-1:K+1],N=W[K>W.length-3?W.length-1:K+2];return $.set(CY(H,Y.x,X.x,U.x,N.x),CY(H,Y.y,X.y,U.y,N.y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let W=J.points[Q];this.points.push(W.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let W=this.points[Q];J.points.push(W.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let W=J.points[Q];this.points.push(new U0().fromArray(W))}return this}}var jZ=Object.freeze({__proto__:null,ArcCurve:jK,CatmullRomCurve3:c7,CubicBezierCurve:PW,CubicBezierCurve3:vK,EllipseCurve:iQ,LineCurve:IW,LineCurve3:fK,QuadraticBezierCurve:zW,QuadraticBezierCurve3:q9,SplineCurve:AW});class bK extends s8{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),Q=this.curves[this.curves.length-1].getPoint(1);if(!J.equals(Q)){let $=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jZ[$](Q,J))}return this}getPoint(J,Q){let $=J*this.getLength(),W=this.getCurveLengths(),Z=0;while(Z<W.length){if(W[Z]>=$){let K=W[Z]-$,H=this.curves[Z],Y=H.getLength(),X=Y===0?0:1-K/Y;return H.getPointAt(X,Q)}Z++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],Q=0;for(let $=0,W=this.curves.length;$<W;$++)Q+=this.curves[$].getLength(),J.push(Q);return this.cacheLengths=J,J}getSpacedPoints(J=40){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));if(this.autoClose)Q.push(Q[0]);return Q}getPoints(J=12){let Q=[],$;for(let W=0,Z=this.curves;W<Z.length;W++){let K=Z[W],H=K.isEllipseCurve?J*2:K.isLineCurve||K.isLineCurve3?1:K.isSplineCurve?J*K.points.length:J,Y=K.getPoints(H);for(let X=0;X<Y.length;X++){let U=Y[X];if($&&$.equals(U))continue;Q.push(U),$=U}}if(this.autoClose&&Q.length>1&&!Q[Q.length-1].equals(Q[0]))Q.push(Q[0]);return Q}copy(J){super.copy(J),this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let W=J.curves[Q];this.curves.push(W.clone())}return this.autoClose=J.autoClose,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let Q=0,$=this.curves.length;Q<$;Q++){let W=this.curves[Q];J.curves.push(W.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let W=J.curves[Q];this.curves.push(new jZ[W.type]().fromJSON(W))}return this}}class QW extends bK{constructor(J){super();if(this.type="Path",this.currentPoint=new U0,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let Q=1,$=J.length;Q<$;Q++)this.lineTo(J[Q].x,J[Q].y);return this}moveTo(J,Q){return this.currentPoint.set(J,Q),this}lineTo(J,Q){let $=new IW(this.currentPoint.clone(),new U0(J,Q));return this.curves.push($),this.currentPoint.set(J,Q),this}quadraticCurveTo(J,Q,$,W){let Z=new zW(this.currentPoint.clone(),new U0(J,Q),new U0($,W));return this.curves.push(Z),this.currentPoint.set($,W),this}bezierCurveTo(J,Q,$,W,Z,K){let H=new PW(this.currentPoint.clone(),new U0(J,Q),new U0($,W),new U0(Z,K));return this.curves.push(H),this.currentPoint.set(Z,K),this}splineThru(J){let Q=[this.currentPoint.clone()].concat(J),$=new AW(Q);return this.curves.push($),this.currentPoint.copy(J[J.length-1]),this}arc(J,Q,$,W,Z,K){let H=this.currentPoint.x,Y=this.currentPoint.y;return this.absarc(J+H,Q+Y,$,W,Z,K),this}absarc(J,Q,$,W,Z,K){return this.absellipse(J,Q,$,$,W,Z,K),this}ellipse(J,Q,$,W,Z,K,H,Y){let X=this.currentPoint.x,U=this.currentPoint.y;return this.absellipse(J+X,Q+U,$,W,Z,K,H,Y),this}absellipse(J,Q,$,W,Z,K,H,Y){let X=new iQ(J,Q,$,W,Z,K,H,Y);if(this.curves.length>0){let N=X.getPoint(0);if(!N.equals(this.currentPoint))this.lineTo(N.x,N.y)}this.curves.push(X);let U=X.getPoint(1);return this.currentPoint.copy(U),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class oQ extends QW{constructor(J){super(J);this.uuid=c8(),this.type="Shape",this.holes=[]}getPointsHoles(J){let Q=[];for(let $=0,W=this.holes.length;$<W;$++)Q[$]=this.holes[$].getPoints(J);return Q}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let W=J.holes[Q];this.holes.push(W.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let Q=0,$=this.holes.length;Q<$;Q++){let W=this.holes[Q];J.holes.push(W.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let W=J.holes[Q];this.holes.push(new QW().fromJSON(W))}return this}}function IN(J,Q,$=2){let W=Q&&Q.length,Z=W?Q[0]*$:J.length,K=fX(J,0,Z,$,!0),H=[];if(!K||K.next===K.prev)return H;let Y,X,U;if(W)K=SN(J,Q,K,$);if(J.length>80*$){Y=J[0],X=J[1];let N=Y,E=X;for(let G=$;G<Z;G+=$){let F=J[G],R=J[G+1];if(F<Y)Y=F;if(R<X)X=R;if(F>N)N=F;if(R>E)E=R}U=Math.max(N-Y,E-X),U=U!==0?32767/U:0}return AQ(K,H,$,Y,X,U,0),H}function fX(J,Q,$,W,Z){let K;if(Z===lN(J,Q,$,W)>0)for(let H=Q;H<$;H+=W)K=PY(H/W|0,J[H],J[H+1],K);else for(let H=$-W;H>=Q;H-=W)K=PY(H/W|0,J[H],J[H+1],K);if(K&&j6(K,K.next))TQ(K),K=K.next;return K}function j7(J,Q){if(!J)return J;if(!Q)Q=J;let $=J,W;do if(W=!1,!$.steiner&&(j6($,$.next)||aJ($.prev,$,$.next)===0)){if(TQ($),$=Q=$.prev,$===$.next)break;W=!0}else $=$.next;while(W||$!==Q);return Q}function AQ(J,Q,$,W,Z,K,H){if(!J)return;if(!H&&K)fN(J,W,Z,K);let Y=J;while(J.prev!==J.next){let{prev:X,next:U}=J;if(K?AN(J,W,Z,K):zN(J)){Q.push(X.i,J.i,U.i),TQ(J),J=U.next,Y=U.next;continue}if(J=U,J===Y){if(!H)AQ(j7(J),Q,$,W,Z,K,1);else if(H===1)J=_N(j7(J),Q),AQ(J,Q,$,W,Z,K,2);else if(H===2)TN(J,Q,$,W,Z,K);break}}}function zN(J){let Q=J.prev,$=J,W=J.next;if(aJ(Q,$,W)>=0)return!1;let Z=Q.x,K=$.x,H=W.x,Y=Q.y,X=$.y,U=W.y,N=Math.min(Z,K,H),E=Math.min(Y,X,U),G=Math.max(Z,K,H),F=Math.max(Y,X,U),R=W.next;while(R!==Q){if(R.x>=N&&R.x<=G&&R.y>=E&&R.y<=F&&kQ(Z,Y,K,X,H,U,R.x,R.y)&&aJ(R.prev,R,R.next)>=0)return!1;R=R.next}return!0}function AN(J,Q,$,W){let Z=J.prev,K=J,H=J.next;if(aJ(Z,K,H)>=0)return!1;let Y=Z.x,X=K.x,U=H.x,N=Z.y,E=K.y,G=H.y,F=Math.min(Y,X,U),R=Math.min(N,E,G),D=Math.max(Y,X,U),O=Math.max(N,E,G),q=yZ(F,R,Q,$,W),V=yZ(D,O,Q,$,W),M=J.prevZ,L=J.nextZ;while(M&&M.z>=q&&L&&L.z<=V){if(M.x>=F&&M.x<=D&&M.y>=R&&M.y<=O&&M!==Z&&M!==H&&kQ(Y,N,X,E,U,G,M.x,M.y)&&aJ(M.prev,M,M.next)>=0)return!1;if(M=M.prevZ,L.x>=F&&L.x<=D&&L.y>=R&&L.y<=O&&L!==Z&&L!==H&&kQ(Y,N,X,E,U,G,L.x,L.y)&&aJ(L.prev,L,L.next)>=0)return!1;L=L.nextZ}while(M&&M.z>=q){if(M.x>=F&&M.x<=D&&M.y>=R&&M.y<=O&&M!==Z&&M!==H&&kQ(Y,N,X,E,U,G,M.x,M.y)&&aJ(M.prev,M,M.next)>=0)return!1;M=M.prevZ}while(L&&L.z<=V){if(L.x>=F&&L.x<=D&&L.y>=R&&L.y<=O&&L!==Z&&L!==H&&kQ(Y,N,X,E,U,G,L.x,L.y)&&aJ(L.prev,L,L.next)>=0)return!1;L=L.nextZ}return!0}function _N(J,Q){let $=J;do{let W=$.prev,Z=$.next.next;if(!j6(W,Z)&&hX(W,$,$.next,Z)&&_Q(W,Z)&&_Q(Z,W))Q.push(W.i,$.i,Z.i),TQ($),TQ($.next),$=J=Z;$=$.next}while($!==J);return j7($)}function TN(J,Q,$,W,Z,K){let H=J;do{let Y=H.next.next;while(Y!==H.prev){if(H.i!==Y.i&&xN(H,Y)){let X=xX(H,Y);H=j7(H,H.next),X=j7(X,X.next),AQ(H,Q,$,W,Z,K,0),AQ(X,Q,$,W,Z,K,0);return}Y=Y.next}H=H.next}while(H!==J)}function SN(J,Q,$,W){let Z=[];for(let K=0,H=Q.length;K<H;K++){let Y=Q[K]*W,X=K<H-1?Q[K+1]*W:J.length,U=fX(J,Y,X,W,!1);if(U===U.next)U.steiner=!0;Z.push(hN(U))}Z.sort(wN);for(let K=0;K<Z.length;K++)$=jN(Z[K],$);return $}function wN(J,Q){let $=J.x-Q.x;if($===0){if($=J.y-Q.y,$===0){let W=(J.next.y-J.y)/(J.next.x-J.x),Z=(Q.next.y-Q.y)/(Q.next.x-Q.x);$=W-Z}}return $}function jN(J,Q){let $=yN(J,Q);if(!$)return Q;let W=xX($,J);return j7(W,W.next),j7($,$.next)}function yN(J,Q){let $=Q,W=J.x,Z=J.y,K=-1/0,H;if(j6(J,$))return $;do{if(j6(J,$.next))return $.next;else if(Z<=$.y&&Z>=$.next.y&&$.next.y!==$.y){let E=$.x+(Z-$.y)*($.next.x-$.x)/($.next.y-$.y);if(E<=W&&E>K){if(K=E,H=$.x<$.next.x?$:$.next,E===W)return H}}$=$.next}while($!==Q);if(!H)return null;let Y=H,X=H.x,U=H.y,N=1/0;$=H;do{if(W>=$.x&&$.x>=X&&W!==$.x&&bX(Z<U?W:K,Z,X,U,Z<U?K:W,Z,$.x,$.y)){let E=Math.abs(Z-$.y)/(W-$.x);if(_Q($,J)&&(E<N||E===N&&($.x>H.x||$.x===H.x&&vN(H,$))))H=$,N=E}$=$.next}while($!==Y);return H}function vN(J,Q){return aJ(J.prev,J,Q.prev)<0&&aJ(Q.next,J,J.next)<0}function fN(J,Q,$,W){let Z=J;do{if(Z.z===0)Z.z=yZ(Z.x,Z.y,Q,$,W);Z.prevZ=Z.prev,Z.nextZ=Z.next,Z=Z.next}while(Z!==J);Z.prevZ.nextZ=null,Z.prevZ=null,bN(Z)}function bN(J){let Q,$=1;do{let W=J,Z;J=null;let K=null;Q=0;while(W){Q++;let H=W,Y=0;for(let U=0;U<$;U++)if(Y++,H=H.nextZ,!H)break;let X=$;while(Y>0||X>0&&H){if(Y!==0&&(X===0||!H||W.z<=H.z))Z=W,W=W.nextZ,Y--;else Z=H,H=H.nextZ,X--;if(K)K.nextZ=Z;else J=Z;Z.prevZ=K,K=Z}W=H}K.nextZ=null,$*=2}while(Q>1);return J}function yZ(J,Q,$,W,Z){return J=(J-$)*Z|0,Q=(Q-W)*Z|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,Q=(Q|Q<<8)&16711935,Q=(Q|Q<<4)&252645135,Q=(Q|Q<<2)&858993459,Q=(Q|Q<<1)&1431655765,J|Q<<1}function hN(J){let Q=J,$=J;do{if(Q.x<$.x||Q.x===$.x&&Q.y<$.y)$=Q;Q=Q.next}while(Q!==J);return $}function bX(J,Q,$,W,Z,K,H,Y){return(Z-H)*(Q-Y)>=(J-H)*(K-Y)&&(J-H)*(W-Y)>=($-H)*(Q-Y)&&($-H)*(K-Y)>=(Z-H)*(W-Y)}function kQ(J,Q,$,W,Z,K,H,Y){return!(J===H&&Q===Y)&&bX(J,Q,$,W,Z,K,H,Y)}function xN(J,Q){return J.next.i!==Q.i&&J.prev.i!==Q.i&&!gN(J,Q)&&(_Q(J,Q)&&_Q(Q,J)&&pN(J,Q)&&(aJ(J.prev,J,Q.prev)||aJ(J,Q.prev,Q))||j6(J,Q)&&aJ(J.prev,J,J.next)>0&&aJ(Q.prev,Q,Q.next)>0)}function aJ(J,Q,$){return(Q.y-J.y)*($.x-Q.x)-(Q.x-J.x)*($.y-Q.y)}function j6(J,Q){return J.x===Q.x&&J.y===Q.y}function hX(J,Q,$,W){let Z=o$(aJ(J,Q,$)),K=o$(aJ(J,Q,W)),H=o$(aJ($,W,J)),Y=o$(aJ($,W,Q));if(Z!==K&&H!==Y)return!0;if(Z===0&&i$(J,$,Q))return!0;if(K===0&&i$(J,W,Q))return!0;if(H===0&&i$($,J,W))return!0;if(Y===0&&i$($,Q,W))return!0;return!1}function i$(J,Q,$){return Q.x<=Math.max(J.x,$.x)&&Q.x>=Math.min(J.x,$.x)&&Q.y<=Math.max(J.y,$.y)&&Q.y>=Math.min(J.y,$.y)}function o$(J){return J>0?1:J<0?-1:0}function gN(J,Q){let $=J;do{if($.i!==J.i&&$.next.i!==J.i&&$.i!==Q.i&&$.next.i!==Q.i&&hX($,$.next,J,Q))return!0;$=$.next}while($!==J);return!1}function _Q(J,Q){return aJ(J.prev,J,J.next)<0?aJ(J,Q,J.next)>=0&&aJ(J,J.prev,Q)>=0:aJ(J,Q,J.prev)<0||aJ(J,J.next,Q)<0}function pN(J,Q){let $=J,W=!1,Z=(J.x+Q.x)/2,K=(J.y+Q.y)/2;do{if($.y>K!==$.next.y>K&&$.next.y!==$.y&&Z<($.next.x-$.x)*(K-$.y)/($.next.y-$.y)+$.x)W=!W;$=$.next}while($!==J);return W}function xX(J,Q){let $=vZ(J.i,J.x,J.y),W=vZ(Q.i,Q.x,Q.y),Z=J.next,K=Q.prev;return J.next=Q,Q.prev=J,$.next=Z,Z.prev=$,W.next=$,$.prev=W,K.next=W,W.prev=K,W}function PY(J,Q,$,W){let Z=vZ(J,Q,$);if(!W)Z.prev=Z,Z.next=Z;else Z.next=W.next,Z.prev=W,W.next.prev=Z,W.next=Z;return Z}function TQ(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function vZ(J,Q,$){return{i:J,x:Q,y:$,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function lN(J,Q,$,W){let Z=0;for(let K=Q,H=$-W;K<$;K+=W)Z+=(J[H]-J[K])*(J[K+1]+J[H+1]),H=K;return Z}class gX{static triangulate(J,Q,$=2){return IN(J,Q,$)}}class T6{static area(J){let Q=J.length,$=0;for(let W=Q-1,Z=0;Z<Q;W=Z++)$+=J[W].x*J[Z].y-J[Z].x*J[W].y;return $*0.5}static isClockWise(J){return T6.area(J)<0}static triangulateShape(J,Q){let $=[],W=[],Z=[];IY(J),zY($,J);let K=J.length;Q.forEach(IY);for(let Y=0;Y<Q.length;Y++)W.push(K),K+=Q[Y].length,zY($,Q[Y]);let H=gX.triangulate($,W);for(let Y=0;Y<H.length;Y+=3)Z.push(H.slice(Y,Y+3));return Z}}function IY(J){let Q=J.length;if(Q>2&&J[Q-1].equals(J[0]))J.pop()}function zY(J,Q){for(let $=0;$<Q.length;$++)J.push(Q[$].x),J.push(Q[$].y)}class q7 extends lJ{constructor(J=[new U0(0,-0.5),new U0(0.5,0),new U0(0,0.5)],Q=12,$=0,W=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:J,segments:Q,phiStart:$,phiLength:W},Q=Math.floor(Q),W=NJ(W,0,Math.PI*2);let Z=[],K=[],H=[],Y=[],X=[],U=1/Q,N=new T,E=new U0,G=new T,F=new T,R=new T,D=0,O=0;for(let q=0;q<=J.length-1;q++)switch(q){case 0:D=J[q+1].x-J[q].x,O=J[q+1].y-J[q].y,G.x=O*1,G.y=-D,G.z=O*0,R.copy(G),G.normalize(),Y.push(G.x,G.y,G.z);break;case J.length-1:Y.push(R.x,R.y,R.z);break;default:D=J[q+1].x-J[q].x,O=J[q+1].y-J[q].y,G.x=O*1,G.y=-D,G.z=O*0,F.copy(G),G.x+=R.x,G.y+=R.y,G.z+=R.z,G.normalize(),Y.push(G.x,G.y,G.z),R.copy(F)}for(let q=0;q<=Q;q++){let V=$+q*U*W,M=Math.sin(V),L=Math.cos(V);for(let P=0;P<=J.length-1;P++){N.x=J[P].x*M,N.y=J[P].y,N.z=J[P].x*L,K.push(N.x,N.y,N.z),E.x=q/Q,E.y=P/(J.length-1),H.push(E.x,E.y);let I=Y[3*P+0]*M,S=Y[3*P+1],k=Y[3*P+0]*L;X.push(I,S,k)}}for(let q=0;q<Q;q++)for(let V=0;V<J.length-1;V++){let M=V+q*J.length,L=M,P=M+J.length,I=M+J.length+1,S=M+1;Z.push(L,P,S),Z.push(I,S,P)}this.setIndex(Z),this.setAttribute("position",new qJ(K,3)),this.setAttribute("uv",new qJ(H,2)),this.setAttribute("normal",new qJ(X,3))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new q7(J.points,J.segments,J.phiStart,J.phiLength)}}class zJ extends lJ{constructor(J=1,Q=1,$=1,W=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:W};let Z=J/2,K=Q/2,H=Math.floor($),Y=Math.floor(W),X=H+1,U=Y+1,N=J/H,E=Q/Y,G=[],F=[],R=[],D=[];for(let O=0;O<U;O++){let q=O*E-K;for(let V=0;V<X;V++){let M=V*N-Z;F.push(M,-q,0),R.push(0,0,1),D.push(V/H),D.push(1-O/Y)}}for(let O=0;O<Y;O++)for(let q=0;q<H;q++){let V=q+X*O,M=q+X*(O+1),L=q+1+X*(O+1),P=q+1+X*O;G.push(V,M,P),G.push(M,L,P)}this.setIndex(G),this.setAttribute("position",new qJ(F,3)),this.setAttribute("normal",new qJ(R,3)),this.setAttribute("uv",new qJ(D,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new zJ(J.width,J.height,J.widthSegments,J.heightSegments)}}class aQ extends lJ{constructor(J=new oQ([new U0(0,0.5),new U0(-0.5,-0.5),new U0(0.5,-0.5)]),Q=12){super();this.type="ShapeGeometry",this.parameters={shapes:J,curveSegments:Q};let $=[],W=[],Z=[],K=[],H=0,Y=0;if(Array.isArray(J)===!1)X(J);else for(let U=0;U<J.length;U++)X(J[U]),this.addGroup(H,Y,U),H+=Y,Y=0;this.setIndex($),this.setAttribute("position",new qJ(W,3)),this.setAttribute("normal",new qJ(Z,3)),this.setAttribute("uv",new qJ(K,2));function X(U){let N=W.length/3,E=U.extractPoints(Q),G=E.shape,F=E.holes;if(T6.isClockWise(G)===!1)G=G.reverse();for(let D=0,O=F.length;D<O;D++){let q=F[D];if(T6.isClockWise(q)===!0)F[D]=q.reverse()}let R=T6.triangulateShape(G,F);for(let D=0,O=F.length;D<O;D++){let q=F[D];G=G.concat(q)}for(let D=0,O=G.length;D<O;D++){let q=G[D];W.push(q.x,q.y,0),Z.push(0,0,1),K.push(q.x,q.y)}for(let D=0,O=R.length;D<O;D++){let q=R[D],V=q[0]+N,M=q[1]+N,L=q[2]+N;$.push(V,M,L),Y+=3}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Q=this.parameters.shapes;return mN(Q,J)}static fromJSON(J,Q){let $=[];for(let W=0,Z=J.shapes.length;W<Z;W++){let K=Q[J.shapes[W]];$.push(K)}return new aQ($,J.curveSegments)}}function mN(J,Q){if(Q.shapes=[],Array.isArray(J))for(let $=0,W=J.length;$<W;$++){let Z=J[$];Q.shapes.push(Z.uuid)}else Q.shapes.push(J.uuid);return Q}class k8 extends lJ{constructor(J=1,Q=32,$=16,W=0,Z=Math.PI*2,K=0,H=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:$,phiStart:W,phiLength:Z,thetaStart:K,thetaLength:H},Q=Math.max(3,Math.floor(Q)),$=Math.max(2,Math.floor($));let Y=Math.min(K+H,Math.PI),X=0,U=[],N=new T,E=new T,G=[],F=[],R=[],D=[];for(let O=0;O<=$;O++){let q=[],V=O/$,M=K+V*H,L=J*Math.cos(M),P=Math.sqrt(J*J-L*L),I=0;if(O===0&&K===0)I=0.5/Q;else if(O===$&&Y===Math.PI)I=-0.5/Q;for(let S=0;S<=Q;S++){let k=S/Q,A=W+k*Z;N.x=-P*Math.cos(A),N.y=L,N.z=P*Math.sin(A),F.push(N.x,N.y,N.z),E.copy(N).normalize(),R.push(E.x,E.y,E.z),D.push(k+I,1-V),q.push(X++)}U.push(q)}for(let O=0;O<$;O++)for(let q=0;q<Q;q++){let V=U[O][q+1],M=U[O][q],L=U[O+1][q],P=U[O+1][q+1];if(O!==0||K>0)G.push(V,M,P);if(O!==$-1||Y<Math.PI)G.push(M,L,P)}this.setIndex(G),this.setAttribute("position",new qJ(F,3)),this.setAttribute("normal",new qJ(R,3)),this.setAttribute("uv",new qJ(D,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new k8(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class S9 extends lJ{constructor(J=1,Q=0.4,$=12,W=48,Z=Math.PI*2,K=0,H=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:$,tubularSegments:W,arc:Z,thetaStart:K,thetaLength:H},$=Math.floor($),W=Math.floor(W);let Y=[],X=[],U=[],N=[],E=new T,G=new T,F=new T;for(let R=0;R<=$;R++){let D=K+R/$*H;for(let O=0;O<=W;O++){let q=O/W*Z;G.x=(J+Q*Math.cos(D))*Math.cos(q),G.y=(J+Q*Math.cos(D))*Math.sin(q),G.z=Q*Math.sin(D),X.push(G.x,G.y,G.z),E.x=J*Math.cos(q),E.y=J*Math.sin(q),F.subVectors(G,E).normalize(),U.push(F.x,F.y,F.z),N.push(O/W),N.push(R/$)}}for(let R=1;R<=$;R++)for(let D=1;D<=W;D++){let O=(W+1)*R+D-1,q=(W+1)*(R-1)+D-1,V=(W+1)*(R-1)+D,M=(W+1)*R+D;Y.push(O,q,M),Y.push(q,V,M)}this.setIndex(Y),this.setAttribute("position",new qJ(X,3)),this.setAttribute("normal",new qJ(U,3)),this.setAttribute("uv",new qJ(N,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new S9(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc,J.thetaStart,J.thetaLength)}}class i8 extends lJ{constructor(J=new q9(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),Q=64,$=1,W=8,Z=!1){super();this.type="TubeGeometry",this.parameters={path:J,tubularSegments:Q,radius:$,radialSegments:W,closed:Z};let K=J.computeFrenetFrames(Q,Z);this.tangents=K.tangents,this.normals=K.normals,this.binormals=K.binormals;let H=new T,Y=new T,X=new U0,U=new T,N=[],E=[],G=[],F=[];R(),this.setIndex(F),this.setAttribute("position",new qJ(N,3)),this.setAttribute("normal",new qJ(E,3)),this.setAttribute("uv",new qJ(G,2));function R(){for(let V=0;V<Q;V++)D(V);D(Z===!1?Q:0),q(),O()}function D(V){U=J.getPointAt(V/Q,U);let M=K.normals[V],L=K.binormals[V];for(let P=0;P<=W;P++){let I=P/W*Math.PI*2,S=Math.sin(I),k=-Math.cos(I);Y.x=k*M.x+S*L.x,Y.y=k*M.y+S*L.y,Y.z=k*M.z+S*L.z,Y.normalize(),E.push(Y.x,Y.y,Y.z),H.x=U.x+$*Y.x,H.y=U.y+$*Y.y,H.z=U.z+$*Y.z,N.push(H.x,H.y,H.z)}}function O(){for(let V=1;V<=Q;V++)for(let M=1;M<=W;M++){let L=(W+1)*(V-1)+(M-1),P=(W+1)*V+(M-1),I=(W+1)*V+M,S=(W+1)*(V-1)+M;F.push(L,P,S),F.push(P,I,S)}}function q(){for(let V=0;V<=Q;V++)for(let M=0;M<=W;M++)X.x=V/Q,X.y=M/W,G.push(X.x,X.y)}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON();return J.path=this.parameters.path.toJSON(),J}static fromJSON(J){return new i8(new jZ[J.path.type]().fromJSON(J.path),J.tubularSegments,J.radius,J.radialSegments,J.closed)}}function n7(J){let Q={};for(let $ in J){Q[$]={};for(let W in J[$]){let Z=J[$][W];if(AY(Z))if(Z.isRenderTargetTexture)o0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][W]=null;else Q[$][W]=Z.clone();else if(Array.isArray(Z))if(AY(Z[0])){let K=[];for(let H=0,Y=Z.length;H<Y;H++)K[H]=Z[H].clone();Q[$][W]=K}else Q[$][W]=Z.slice();else Q[$][W]=Z}}return Q}function M8(J){let Q={};for(let $=0;$<J.length;$++){let W=n7(J[$]);for(let Z in W)Q[Z]=W[Z]}return Q}function AY(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function uN(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function hK(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return GJ.workingColorSpace}var c9={clone:n7,merge:M8},dN=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cN=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rJ extends w8{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dN,this.fragmentShader=cN,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=n7(J.uniforms),this.uniformsGroups=uN(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let W in this.uniforms){let K=this.uniforms[W].value;if(K&&K.isTexture)Q.uniforms[W]={type:"t",value:K.toJSON(J).uuid};else if(K&&K.isColor)Q.uniforms[W]={type:"c",value:K.getHex()};else if(K&&K.isVector2)Q.uniforms[W]={type:"v2",value:K.toArray()};else if(K&&K.isVector3)Q.uniforms[W]={type:"v3",value:K.toArray()};else if(K&&K.isVector4)Q.uniforms[W]={type:"v4",value:K.toArray()};else if(K&&K.isMatrix3)Q.uniforms[W]={type:"m3",value:K.toArray()};else if(K&&K.isMatrix4)Q.uniforms[W]={type:"m4",value:K.toArray()};else Q.uniforms[W]={value:K}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let W in this.extensions)if(this.extensions[W]===!0)$[W]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let W=J.uniforms[$];switch(this.uniforms[$]={},W.type){case"t":this.uniforms[$].value=Q[W.value]||null;break;case"c":this.uniforms[$].value=new h0().setHex(W.value);break;case"v2":this.uniforms[$].value=new U0().fromArray(W.value);break;case"v3":this.uniforms[$].value=new T().fromArray(W.value);break;case"v4":this.uniforms[$].value=new gJ().fromArray(W.value);break;case"m3":this.uniforms[$].value=new YJ().fromArray(W.value);break;case"m4":this.uniforms[$].value=new QJ().fromArray(W.value);break;default:this.uniforms[$].value=W.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class rQ extends rJ{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class i0 extends w8{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new h0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new h0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new U0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new X9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class O8 extends i0{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new U0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return NJ(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new h0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new h0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new h0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(J){if(this._retroreflectivity>0!==J>0)this.version++;this._retroreflectivity=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.retroreflectivity=J.retroreflectivity,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class xK extends w8{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class gK extends w8{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function Z7(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function t$(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}function nN(J){function Q(Z,K){return J[Z]-J[K]}let $=J.length,W=Array($);for(let Z=0;Z!==$;++Z)W[Z]=Z;return W.sort(Q),W}function _Y(J,Q,$){let W=J.length,Z=new J.constructor(W);for(let K=0,H=0;H!==W;++K){let Y=$[K]*Q;for(let X=0;X!==Q;++X)Z[H++]=J[Y+X]}return Z}function sN(J,Q,$,W){let Z=1,K=J[0];while(K!==void 0&&K[W]===void 0)K=J[Z++];if(K===void 0)return;let H=K[W];if(H===void 0)return;if(Array.isArray(H))do{if(H=K[W],H!==void 0)Q.push(K.time),$.push(...H);K=J[Z++]}while(K!==void 0);else if(H.toArray!==void 0)do{if(H=K[W],H!==void 0)Q.push(K.time),H.toArray($,$.length);K=J[Z++]}while(K!==void 0);else do{if(H=K[W],H!==void 0)Q.push(K.time),$.push(H);K=J[Z++]}while(K!==void 0)}class n9{constructor(J,Q,$,W){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=W!==void 0?W:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,W=Q[$],Z=Q[$-1];J:{Q:{let K;$:{W:if(!(J<W)){for(let H=$+2;;){if(W===void 0){if(J<Z)break W;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===H)break;if(Z=W,W=Q[++$],J<W)break Q}K=Q.length;break $}if(!(J>=Z)){let H=Q[1];if(J<H)$=2,Z=H;for(let Y=$-2;;){if(Z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===Y)break;if(W=Z,Z=Q[--$-1],J>=Z)break Q}K=$,$=0;break $}break J}while($<K){let H=$+K>>>1;if(J<Q[H])K=H;else $=H+1}if(W=Q[$],Z=Q[$-1],Z===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(W===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,Z,W)}return this.interpolate_($,Z,J,W)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,W=this.valueSize,Z=J*W;for(let K=0;K!==W;++K)Q[K]=$[Z+K];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class pK extends n9{constructor(J,Q,$,W){super(J,Q,$,W);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let W=this.parameterPositions,Z=J-2,K=J+1,H=W[Z],Y=W[K];if(H===void 0)switch(this.getSettings_().endingStart){case 2401:Z=J,H=2*Q-$;break;case 2402:Z=W.length-2,H=Q+W[Z]-W[Z+1];break;default:Z=J,H=$}if(Y===void 0)switch(this.getSettings_().endingEnd){case 2401:K=J,Y=2*$-Q;break;case 2402:K=1,Y=$+W[1]-W[0];break;default:K=J-1,Y=Q}let X=($-Q)*0.5,U=this.valueSize;this._weightPrev=X/(Q-H),this._weightNext=X/(Y-$),this._offsetPrev=Z*U,this._offsetNext=K*U}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this._offsetPrev,N=this._offsetNext,E=this._weightPrev,G=this._weightNext,F=($-Q)/(W-Q),R=F*F,D=R*F,O=-E*D+2*E*R-E*F,q=(1+E)*D+(-1.5-2*E)*R+(-0.5+E)*F+1,V=(-1-G)*D+(1.5+G)*R+0.5*F,M=G*D-G*R;for(let L=0;L!==H;++L)Z[L]=O*K[U+L]+q*K[X+L]+V*K[Y+L]+M*K[N+L];return Z}}class _W extends n9{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=($-Q)/(W-Q),N=1-U;for(let E=0;E!==H;++E)Z[E]=K[X+E]*N+K[Y+E]*U;return Z}}class lK extends n9{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J){return this.copySampleValue_(J-1)}}class mK extends n9{interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=J*H,X=Y-H,U=this.inTangents,N=this.outTangents;if(!U||!N){let F=($-Q)/(W-Q),R=1-F;for(let D=0;D!==H;++D)Z[D]=K[X+D]*R+K[Y+D]*F;return Z}let E=H*2,G=J-1;for(let F=0;F!==H;++F){let R=K[X+F],D=K[Y+F],O=G*E+F*2,q=N[O],V=N[O+1],M=J*E+F*2,L=U[M],P=U[M+1],I=oN($,Q,q,L,W);Z[F]=pX(I,R,V,P,D)}return Z}}function pX(J,Q,$,W,Z){let K=1-J;return K*K*K*Q+3*K*K*J*$+3*K*J*J*W+J*J*J*Z}function iN(J,Q,$,W,Z){let K=1-J;return 3*K*K*($-Q)+6*K*J*(W-$)+3*J*J*(Z-W)}function oN(J,Q,$,W,Z){let K=(J-Q)/(Z-Q);for(let H=0;H<8;H++){let Y=pX(K,Q,$,W,Z)-J;if(Math.abs(Y)<0.0000000001)break;let X=iN(K,Q,$,W,Z);if(Math.abs(X)<0.0000000001)break;K=Math.max(0,Math.min(1,K-Y/X))}return K}class p8{constructor(J,Q,$,W){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=Z7(Q,this.TimeBufferType),this.values=Z7($,this.ValueBufferType),this.setInterpolation(W||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:Z7(J.times,Array),values:Z7(J.values,Array)};let W=J.getInterpolation();if(W!==J.DefaultInterpolation)$.interpolation=W;if(t$(J.settings))$.settings={inTangents:Z7(J.settings.inTangents,Array),outTangents:Z7(J.settings.outTangents,Array)}}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new lK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new _W(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new pK(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new mK(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return o0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,W=Q.length;$!==W;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,W=Q.length;$!==W;++$)Q[$]*=J;if(t$(this.settings))TY(this.settings.inTangents,J),TY(this.settings.outTangents,J)}return this}trim(J,Q){let $=this.times,W=$.length,Z=0,K=W-1;while(Z!==W&&$[Z]<J)++Z;while(K!==-1&&$[K]>Q)--K;if(++K,Z!==0||K!==W){if(Z>=K)K=Math.max(K,1),Z=K-1;let H=this.getValueSize();this.times=$.slice(Z,K),this.values=this.values.slice(Z*H,K*H)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)$J("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,W=this.values,Z=$.length;if(Z===0)$J("KeyframeTrack: Track is empty.",this),J=!1;let K=null;for(let H=0;H!==Z;H++){let Y=$[H];if(typeof Y==="number"&&isNaN(Y)){$J("KeyframeTrack: Time is not a valid number.",this,H,Y),J=!1;break}if(K!==null&&K>Y){$J("KeyframeTrack: Out of order keys.",this,H,Y,K),J=!1;break}K=Y}if(W!==void 0){if(v5(W))for(let H=0,Y=W.length;H!==Y;++H){let X=W[H];if(isNaN(X)){$J("KeyframeTrack: Value is not a valid number.",this,H,X),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),W=this.getInterpolation()===2302,Z=J.length-1,K=1;for(let H=1;H<Z;++H){let Y=!1,X=J[H],U=J[H+1];if(X!==U&&(H!==1||X!==J[0]))if(!W){let N=H*$,E=N-$,G=N+$;for(let F=0;F!==$;++F){let R=Q[N+F];if(R!==Q[E+F]||R!==Q[G+F]){Y=!0;break}}}else Y=!0;if(Y){if(H!==K){J[K]=J[H];let N=H*$,E=K*$;for(let G=0;G!==$;++G)Q[E+G]=Q[N+G]}++K}}if(Z>0){J[K]=J[Z];for(let H=Z*$,Y=K*$,X=0;X!==$;++X)Q[Y+X]=Q[H+X];++K}if(K!==J.length)this.times=J.slice(0,K),this.values=Q.slice(0,K*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),W=new this.constructor(this.name,J,Q);if(W.createInterpolant=this.createInterpolant,t$(this.settings))W.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return W}}function TY(J,Q){for(let $=0,W=J.length;$!==W;$+=2)J[$]*=Q}p8.prototype.ValueTypeName="";p8.prototype.TimeBufferType=Float32Array;p8.prototype.ValueBufferType=Float32Array;p8.prototype.DefaultInterpolation=2301;class O7 extends p8{constructor(J,Q,$){super(J,Q,$)}}O7.prototype.ValueTypeName="bool";O7.prototype.ValueBufferType=Array;O7.prototype.DefaultInterpolation=2300;O7.prototype.InterpolantFactoryMethodLinear=void 0;O7.prototype.InterpolantFactoryMethodSmooth=void 0;class TW extends p8{constructor(J,Q,$,W){super(J,Q,$,W)}}TW.prototype.ValueTypeName="color";class R7 extends p8{constructor(J,Q,$,W){super(J,Q,$,W)}}R7.prototype.ValueTypeName="number";class uK extends n9{constructor(J,Q,$,W){super(J,Q,$,W)}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=($-Q)/(W-Q),X=J*H;for(let U=X+H;X!==U;X+=4)IJ.slerpFlat(Z,0,K,X-H,K,X,Y);return Z}}class L7 extends p8{constructor(J,Q,$,W){super(J,Q,$,W)}InterpolantFactoryMethodLinear(J){return new uK(this.times,this.values,this.getValueSize(),J)}}L7.prototype.ValueTypeName="quaternion";L7.prototype.InterpolantFactoryMethodSmooth=void 0;class V7 extends p8{constructor(J,Q,$){super(J,Q,$)}}V7.prototype.ValueTypeName="string";V7.prototype.ValueBufferType=Array;V7.prototype.DefaultInterpolation=2300;V7.prototype.InterpolantFactoryMethodLinear=void 0;V7.prototype.InterpolantFactoryMethodSmooth=void 0;class s7 extends p8{constructor(J,Q,$,W){super(J,Q,$,W)}}s7.prototype.ValueTypeName="vector";class y6{constructor(J="",Q=-1,$=[],W=2500){if(this.name=J,this.tracks=$,this.duration=Q,this.blendMode=W,this.uuid=c8(),this.userData={},this.duration<0)this.resetDuration()}static parse(J){let Q=[],$=J.tracks,W=1/(J.fps||1);for(let K=0,H=$.length;K!==H;++K)Q.push(rN($[K]).scale(W));let Z=new this(J.name,J.duration,Q,J.blendMode);return Z.uuid=J.uuid,Z.userData=JSON.parse(J.userData||"{}"),Z}static toJSON(J){let Q=[],$=J.tracks,W={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode,userData:JSON.stringify(J.userData)};for(let Z=0,K=$.length;Z!==K;++Z)Q.push(p8.toJSON($[Z]));return W}static CreateFromMorphTargetSequence(J,Q,$,W){let Z=Q.length,K=[];for(let H=0;H<Z;H++){let Y=[],X=[];Y.push((H+Z-1)%Z,H,(H+1)%Z),X.push(0,1,0);let U=nN(Y);if(Y=_Y(Y,1,U),X=_Y(X,1,U),!W&&Y[0]===0)Y.push(Z),X.push(X[0]);K.push(new R7(".morphTargetInfluences["+Q[H].name+"]",Y,X).scale(1/$))}return new this(J,-1,K)}static findByName(J,Q){let $=J;if(!Array.isArray(J)){let W=J;$=W.geometry&&W.geometry.animations||W.animations}for(let W=0;W<$.length;W++)if($[W].name===Q)return $[W];return null}static CreateClipsFromMorphTargetSequences(J,Q,$){let W={},Z=/^([\w-]*?)([\d]+)$/;for(let H=0,Y=J.length;H<Y;H++){let X=J[H],U=X.name.match(Z);if(U&&U.length>1){let N=U[1],E=W[N];if(!E)W[N]=E=[];E.push(X)}}let K=[];for(let H in W)K.push(this.CreateFromMorphTargetSequence(H,W[H],Q,$));return K}resetDuration(){let J=this.tracks,Q=0;for(let $=0,W=J.length;$!==W;++$){let Z=this.tracks[$];Q=Math.max(Q,Z.times[Z.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let $=0;$<this.tracks.length;$++)J.push(this.tracks[$].clone());let Q=new this.constructor(this.name,this.duration,J,this.blendMode);return Q.userData=JSON.parse(JSON.stringify(this.userData)),Q}toJSON(){return this.constructor.toJSON(this)}}function aN(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return R7;case"vector":case"vector2":case"vector3":case"vector4":return s7;case"color":return TW;case"quaternion":return L7;case"bool":case"boolean":return O7;case"string":return V7}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function rN(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=aN(J.type);if(J.times===void 0){let W=[],Z=[];sN(J.keys,W,Z,"value"),J.times=W,J.values=Z}let $;if(Q.parse!==void 0)$=Q.parse(J);else $=new Q(J.name,J.times,J.values,J.interpolation);if(t$(J.settings))$.settings={inTangents:Z7(J.settings.inTangents,Float32Array),outTangents:Z7(J.settings.outTangents,Float32Array)};return $}var I9={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;if(SY(J))return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;if(SY(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function SY(J){try{let Q=J.slice(J.indexOf(":")+1);return new URL(Q).protocol==="blob:"}catch(Q){return!1}}class dK{constructor(J,Q,$){let W=this,Z=!1,K=0,H=0,Y=void 0,X=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(H++,Z===!1){if(W.onStart!==void 0)W.onStart(U,K,H)}Z=!0},this.itemEnd=function(U){if(K++,W.onProgress!==void 0)W.onProgress(U,K,H);if(K===H){if(Z=!1,W.onLoad!==void 0)W.onLoad()}},this.itemError=function(U){if(W.onError!==void 0)W.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),Y)return Y(U);return U},this.setURLModifier=function(U){return Y=U,this},this.addHandler=function(U,N){return X.push(U,N),this},this.removeHandler=function(U){let N=X.indexOf(U);if(N!==-1)X.splice(N,2);return this},this.getHandler=function(U){for(let N=0,E=X.length;N<E;N+=2){let G=X[N],F=X[N+1];if(G.global)G.lastIndex=0;if(G.test(U))return F}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var lX=new dK;class s9{constructor(J){if(this.manager=J!==void 0?J:lX,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(W,Z){$.load(J,W,Q,Z)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}s9.DEFAULT_MATERIAL_NAME="__DEFAULT";var l9={};class mX extends Error{constructor(J,Q){super(J);this.response=Q}}class tQ extends s9{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,Q,$,W){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=I9.get(`file:${J}`);if(Z!==void 0){this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(Z);this.manager.itemEnd(J)},0);return}if(l9[J]!==void 0){l9[J].push({onLoad:Q,onProgress:$,onError:W});return}l9[J]=[],l9[J].push({onLoad:Q,onProgress:$,onError:W});let K=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),H=this.mimeType,Y=this.responseType;fetch(K).then((X)=>{if(X.status===200||X.status===0){if(X.status===0)o0("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||X.body===void 0||X.body.getReader===void 0)return X;let U=l9[J],N=X.body.getReader(),E=X.headers.get("X-File-Size")||X.headers.get("Content-Length"),G=E?parseInt(E):0,F=G!==0,R=0,D=new ReadableStream({start(O){q();function q(){N.read().then(({done:V,value:M})=>{if(V)O.close();else{R+=M.byteLength;let L=new ProgressEvent("progress",{lengthComputable:F,loaded:R,total:G});for(let P=0,I=U.length;P<I;P++){let S=U[P];if(S.onProgress)S.onProgress(L)}O.enqueue(M),q()}},(V)=>{O.error(V)})}}});return new Response(D)}else throw new mX(`fetch for "${X.url}" responded with ${X.status}: ${X.statusText}`,X)}).then((X)=>{switch(Y){case"arraybuffer":return X.arrayBuffer();case"blob":return X.blob();case"document":return X.text().then((U)=>{return new DOMParser().parseFromString(U,H)});case"json":return X.json();default:if(H==="")return X.text();else{let N=/charset="?([^;"\s]*)"?/i.exec(H),E=N&&N[1]?N[1].toLowerCase():void 0,G=new TextDecoder(E);return X.arrayBuffer().then((F)=>G.decode(F))}}}).then((X)=>{I9.add(`file:${J}`,X);let U=l9[J];delete l9[J];for(let N=0,E=U.length;N<E;N++){let G=U[N];if(G.onLoad)G.onLoad(X)}}).catch((X)=>{let U=l9[J];if(U===void 0)throw this.manager.itemError(J),X;delete l9[J];for(let N=0,E=U.length;N<E;N++){let G=U[N];if(G.onError)G.onError(X)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var I6=new WeakMap;class cK extends s9{constructor(J){super(J)}load(J,Q,$,W){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=this,K=I9.get(`image:${J}`);if(K!==void 0){if(K.complete===!0)Z.manager.itemStart(J),setTimeout(function(){if(Q)Q(K);Z.manager.itemEnd(J)},0);else{let N=I6.get(K);if(N===void 0)N=[],I6.set(K,N);N.push({onLoad:Q,onError:W})}return K}let H=S6("img");function Y(){if(U(),Q)Q(this);let N=I6.get(this)||[];for(let E=0;E<N.length;E++){let G=N[E];if(G.onLoad)G.onLoad(this)}I6.delete(this),Z.manager.itemEnd(J)}function X(N){if(U(),W)W(N);I9.remove(`image:${J}`);let E=I6.get(this)||[];for(let G=0;G<E.length;G++){let F=E[G];if(F.onError)F.onError(N)}I6.delete(this),Z.manager.itemError(J),Z.manager.itemEnd(J)}function U(){H.removeEventListener("load",Y,!1),H.removeEventListener("error",X,!1)}if(H.addEventListener("load",Y,!1),H.addEventListener("error",X,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)H.crossOrigin=this.crossOrigin}return I9.add(`image:${J}`,H),Z.manager.itemStart(J),H.src=J,H}}class SW extends s9{constructor(J){super(J)}load(J,Q,$,W){let Z=new eJ,K=new cK(this.manager);return K.setCrossOrigin(this.crossOrigin),K.setPath(this.path),K.load(J,function(H){if(Z.image=H,Z.needsUpdate=!0,Q!==void 0)Q(Z)},$,W),Z}}class n6 extends TJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new h0(J),this.intensity=Q}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}class wW extends n6{constructor(J,Q,$){super(J,$);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(TJ.DEFAULT_UP),this.updateMatrix(),this.groundColor=new h0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}toJSON(J){let Q=super.toJSON(J);return Q.object.groundColor=this.groundColor.getHex(),Q}}var TZ=new QJ,wY=new T,jY=new T;class eQ{constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new U0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new QJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cQ,this._frameExtents=new U0(1,1),this._viewportCount=1,this._viewports=[new gJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera;wY.setFromMatrixPosition(J.matrixWorld),Q.position.copy(wY),jY.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(jY),Q.updateMatrixWorld(),this._updateMatrix(Q,this.matrix,this._frustum)}_updateMatrix(J,Q,$,W){TZ.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),$.setFromProjectionMatrix(TZ,J.coordinateSystem,J.reversedDepth);let Z=this._frameExtents,K=W?W.z/Z.x:1,H=W?W.w/Z.y:1,Y=W?W.x/Z.x:0,X=W?W.y/Z.y:0;if(J.coordinateSystem===2001||J.reversedDepth)Q.set(0.5*K,0,0,0.5*K+Y,0,0.5*H,0,0.5*H+X,0,0,1,0,0,0,0,1);else Q.set(0.5*K,0,0,0.5*K+Y,0,0.5*H,0,0.5*H+X,0,0,0.5,0.5,0,0,0,1);Q.multiply(TZ)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var a$=new T,r$=new IJ,P9=new T;class jW extends TJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new QJ,this.projectionMatrix=new QJ,this.projectionMatrixInverse=new QJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(a$,r$,P9),P9.x===1&&P9.y===1&&P9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(a$,r$,P9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(a$,r$,P9),P9.x===1&&P9.y===1&&P9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(a$,r$,P9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var W7=new T,yY=new U0,vY=new U0;class H8 extends jW{constructor(J=50,Q=1,$=0.1,W=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=W,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=w7*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(MQ*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return w7*2*Math.atan(Math.tan(MQ*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){W7.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(W7.x,W7.y).multiplyScalar(-J/W7.z),W7.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(W7.x,W7.y).multiplyScalar(-J/W7.z)}getViewSize(J,Q){return this.getViewBounds(J,yY,vY),Q.subVectors(vY,yY)}setViewOffset(J,Q,$,W,Z,K){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=W,this.view.width=Z,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(MQ*0.5*this.fov)/this.zoom,$=2*Q,W=this.aspect*$,Z=-0.5*W,K=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:Y,fullHeight:X}=K;Z+=K.offsetX*W/Y,Q-=K.offsetY*$/X,W*=K.width/Y,$*=K.height/X}let H=this.filmOffset;if(H!==0)Z+=J*H/this.getFilmWidth();this.projectionMatrix.makePerspective(Z,Z+W,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class uX extends eQ{constructor(){super(new H8(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=w7*2*J.angle*this.focus,W=this.mapSize.width/this.mapSize.height*this.aspect,Z=J.distance||Q.far;if($!==Q.fov||W!==Q.aspect||Z!==Q.far)Q.fov=$,Q.aspect=W,Q.far=Z,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this.aspect=J.aspect,this}toJSON(){let J=super.toJSON();return J.focus=this.focus,J.aspect=this.aspect,J}}class s6 extends n6{constructor(J,Q,$=0,W=Math.PI/3,Z=0,K=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(TJ.DEFAULT_UP),this.updateMatrix(),this.target=new TJ,this.distance=$,this.angle=W,this.penumbra=Z,this.decay=K,this.map=null,this.shadow=new uX}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);if(Q.object.distance=this.distance,Q.object.angle=this.angle,Q.object.decay=this.decay,Q.object.penumbra=this.penumbra,Q.object.target=this.target.uuid,this.map&&this.map.isTexture)Q.object.map=this.map.toJSON(J).uuid;return Q.object.shadow=this.shadow.toJSON(),Q}}class dX extends eQ{constructor(){super(new H8(90,1,0.5,500));this.isPointLightShadow=!0}}class i9 extends n6{constructor(J,Q,$=0,W=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=W,this.shadow=new dX}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class o9 extends jW{constructor(J=-1,Q=1,$=1,W=-1,Z=0.1,K=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=W,this.near=Z,this.far=K,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,W,Z,K){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=W,this.view.width=Z,this.view.height=K,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,W=(this.top+this.bottom)/2,Z=$-J,K=$+J,H=W+Q,Y=W-Q;if(this.view!==null&&this.view.enabled){let X=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Z+=X*this.view.offsetX,K=Z+X*this.view.width,H-=U*this.view.offsetY,Y=H-U*this.view.height}this.projectionMatrix.makeOrthographic(Z,K,H,Y,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class cX extends eQ{constructor(){super(new o9(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class i6 extends n6{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(TJ.DEFAULT_UP),this.updateMatrix(),this.target=new TJ,this.shadow=new cX}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class D7{static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}var SZ=new WeakMap;class yW extends s9{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")o0("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")o0("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(J){return this.options=J,this}load(J,Q,$,W){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let Z=this,K=I9.get(`image-bitmap:${J}`);if(K!==void 0){if(Z.manager.itemStart(J),K.then){K.then((X)=>{if(SZ.has(K)===!0){if(W)W(SZ.get(K));Z.manager.itemError(J),Z.manager.itemEnd(J)}else{if(Q)Q(X);Z.manager.itemEnd(J)}});return}setTimeout(function(){if(Q)Q(K);Z.manager.itemEnd(J)},0);return}let H={};H.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",H.headers=this.requestHeader,H.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let Y=fetch(J,H).then(function(X){return X.blob()}).then(function(X){return createImageBitmap(X,Object.assign({},Z.options,{colorSpaceConversion:"none"}))}).then(function(X){if(I9.add(`image-bitmap:${J}`,X),Q)Q(X);return Z.manager.itemEnd(J),X}).catch(function(X){if(W)W(X);SZ.set(Y,X),I9.remove(`image-bitmap:${J}`),Z.manager.itemError(J),Z.manager.itemEnd(J)});I9.add(`image-bitmap:${J}`,Y),Z.manager.itemStart(J)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var z6=-90,A6=1;class nK extends TJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let W=new H8(z6,A6,J,Q);W.layers=this.layers,this.add(W);let Z=new H8(z6,A6,J,Q);Z.layers=this.layers,this.add(Z);let K=new H8(z6,A6,J,Q);K.layers=this.layers,this.add(K);let H=new H8(z6,A6,J,Q);H.layers=this.layers,this.add(H);let Y=new H8(z6,A6,J,Q);Y.layers=this.layers,this.add(Y);let X=new H8(z6,A6,J,Q);X.layers=this.layers,this.add(X)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,W,Z,K,H,Y]=Q;for(let X of Q)this.remove(X);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),W.up.set(0,1,0),W.lookAt(-1,0,0),Z.up.set(0,0,-1),Z.lookAt(0,1,0),K.up.set(0,0,1),K.lookAt(0,-1,0),H.up.set(0,1,0),H.lookAt(0,0,1),Y.up.set(0,1,0),Y.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),W.up.set(0,-1,0),W.lookAt(1,0,0),Z.up.set(0,0,1),Z.lookAt(0,1,0),K.up.set(0,0,-1),K.lookAt(0,-1,0),H.up.set(0,-1,0),H.lookAt(0,0,1),Y.up.set(0,-1,0),Y.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let X of Q)this.add(X),X.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:W}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[Z,K,H,Y,X,U]=this.children,N=J.getRenderTarget(),E=J.getActiveCubeFace(),G=J.getActiveMipmapLevel(),F=J.xr.enabled;J.xr.enabled=!1;let R=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let D=!1;if(J.isWebGLRenderer===!0)D=J.state.buffers.depth.getReversed();else D=J.reversedDepthBuffer;if(J.setRenderTarget($,0,W),D&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Z),J.setRenderTarget($,1,W),D&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,2,W),D&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),J.setRenderTarget($,3,W),D&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,4,W),D&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),$.texture.generateMipmaps=R,J.setRenderTarget($,5,W),D&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(N,E,G),J.xr.enabled=F,$.texture.needsPMREMUpdate=!0}}class sK extends H8{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}class vW{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(J){if(this._document=J,J.hidden!==void 0)this._pageVisibilityHandler=tN.bind(this),J.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(J){return this._timescale=J,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(J){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(J!==void 0?J:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function tN(){if(this._document.hidden===!1)this.reset()}class iK{constructor(J,Q,$){this.binding=J,this.valueSize=$;let W,Z,K;switch(Q){case"quaternion":W=this._slerp,Z=this._slerpAdditive,K=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array($*6),this._workIndex=5;break;case"string":case"bool":W=this._select,Z=this._select,K=this._setAdditiveIdentityOther,this.buffer=Array($*5);break;default:W=this._lerp,Z=this._lerpAdditive,K=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array($*5)}this._mixBufferRegion=W,this._mixBufferRegionAdditive=Z,this._setIdentity=K,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(J,Q){let $=this.buffer,W=this.valueSize,Z=J*W+W,K=this.cumulativeWeight;if(K===0){for(let H=0;H!==W;++H)$[Z+H]=$[H];K=Q}else{K+=Q;let H=Q/K;this._mixBufferRegion($,Z,0,H,W)}this.cumulativeWeight=K}accumulateAdditive(J){let Q=this.buffer,$=this.valueSize,W=$*this._addIndex;if(this.cumulativeWeightAdditive===0)this._setIdentity();this._mixBufferRegionAdditive(Q,W,0,J,$),this.cumulativeWeightAdditive+=J}apply(J){let Q=this.valueSize,$=this.buffer,W=J*Q+Q,Z=this.cumulativeWeight,K=this.cumulativeWeightAdditive,H=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,Z<1){let Y=Q*this._origIndex;this._mixBufferRegion($,W,Y,1-Z,Q)}if(K>0)this._mixBufferRegionAdditive($,W,this._addIndex*Q,1,Q);for(let Y=Q,X=Q+Q;Y!==X;++Y)if($[Y]!==$[Y+Q]){H.setValue($,W);break}}saveOriginalState(){let J=this.binding,Q=this.buffer,$=this.valueSize,W=$*this._origIndex;J.getValue(Q,W);for(let Z=$,K=W;Z!==K;++Z)Q[Z]=Q[W+Z%$];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let J=this.valueSize*3;this.binding.setValue(this.buffer,J)}_setAdditiveIdentityNumeric(){let J=this._addIndex*this.valueSize,Q=J+this.valueSize;for(let $=J;$<Q;$++)this.buffer[$]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let J=this._origIndex*this.valueSize,Q=this._addIndex*this.valueSize;for(let $=0;$<this.valueSize;$++)this.buffer[Q+$]=this.buffer[J+$]}_select(J,Q,$,W,Z){if(W>=0.5)for(let K=0;K!==Z;++K)J[Q+K]=J[$+K]}_slerp(J,Q,$,W){IJ.slerpFlat(J,Q,J,Q,J,$,W)}_slerpAdditive(J,Q,$,W,Z){let K=this._workIndex*Z;IJ.multiplyQuaternionsFlat(J,K,J,Q,J,$),IJ.slerpFlat(J,Q,J,Q,J,K,W)}_lerp(J,Q,$,W,Z){let K=1-W;for(let H=0;H!==Z;++H){let Y=Q+H;J[Y]=J[Y]*K+J[$+H]*W}}_lerpAdditive(J,Q,$,W,Z){for(let K=0;K!==Z;++K){let H=Q+K;J[H]=J[H]+J[$+K]*W}}}var oK="\\[\\]\\.:\\/",eN=new RegExp("["+oK+"]","g"),aK="[^"+oK+"]",JG="[^"+oK.replace("\\.","")+"]",QG=/((?:WC+[\/:])*)/.source.replace("WC",aK),$G=/(WCOD+)?/.source.replace("WCOD",JG),WG=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",aK),ZG=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",aK),KG=new RegExp("^"+QG+$G+WG+ZG+"$"),HG=["material","materials","bones","map"];class nX{constructor(J,Q,$){let W=$||wJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,W)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,W=this._bindings[$];if(W!==void 0)W.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let W=this._targetGroup.nCachedObjects_,Z=$.length;W!==Z;++W)$[W].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class wJ{constructor(J,Q,$){this.path=Q,this.parsedPath=$||wJ.parseTrackName(Q),this.node=wJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new wJ(J,Q,$);else return new wJ.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(eN,"")}static parseTrackName(J){let Q=KG.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},W=$.nodeName&&$.nodeName.lastIndexOf(".");if(W!==void 0&&W!==-1){let Z=$.nodeName.substring(W+1);if(HG.indexOf(Z)!==-1)$.nodeName=$.nodeName.substring(0,W),$.objectName=Z}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(Z){for(let K=0;K<Z.length;K++){let H=Z[K];if(H.name===Q||H.uuid===Q)return H;let Y=$(H.children);if(Y)return Y}return null},W=$(J.children);if(W)return W}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)J[Q++]=$[W]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let W=0,Z=$.length;W!==Z;++W)$[W]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,W=Q.propertyName,Z=Q.propertyIndex;if(!J)J=wJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){o0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let X=Q.objectIndex;switch($){case"materials":if(!J.material){$J("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){$J("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){$J("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===X){X=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){$J("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){$J("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){$J("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(X!==void 0){if(J[X]===void 0){$J("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[X]}}let K=J[W];if(K===void 0){let X=Q.nodeName;$J("PropertyBinding: Trying to update property for track: "+X+"."+W+" but it wasn't found.",J);return}let H=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)H=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)H=this.Versioning.MatrixWorldNeedsUpdate;let Y=this.BindingType.Direct;if(Z!==void 0){if(W==="morphTargetInfluences"){if(!J.geometry){$J("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){$J("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[Z]!==void 0)Z=J.morphTargetDictionary[Z]}Y=this.BindingType.ArrayElement,this.resolvedProperty=K,this.propertyIndex=Z}else if(K.fromArray!==void 0&&K.toArray!==void 0)Y=this.BindingType.HasFromToArray,this.resolvedProperty=K;else if(Array.isArray(K))Y=this.BindingType.EntireArray,this.resolvedProperty=K;else this.propertyName=W;this.getValue=this.GetterByBindingType[Y],this.setValue=this.SetterByBindingTypeAndVersioning[Y][H]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}wJ.Composite=nX;wJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wJ.prototype.GetterByBindingType=[wJ.prototype._getValue_direct,wJ.prototype._getValue_array,wJ.prototype._getValue_arrayElement,wJ.prototype._getValue_toArray];wJ.prototype.SetterByBindingTypeAndVersioning=[[wJ.prototype._setValue_direct,wJ.prototype._setValue_direct_setNeedsUpdate,wJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wJ.prototype._setValue_array,wJ.prototype._setValue_array_setNeedsUpdate,wJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wJ.prototype._setValue_arrayElement,wJ.prototype._setValue_arrayElement_setNeedsUpdate,wJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wJ.prototype._setValue_fromArray,wJ.prototype._setValue_fromArray_setNeedsUpdate,wJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class rK{constructor(J,Q,$=null,W=Q.blendMode){this._mixer=J,this._clip=Q,this._localRoot=$,this.blendMode=W;let Z=Q.tracks,K=Z.length,H=Array(K),Y={endingStart:2400,endingEnd:2400};for(let X=0;X!==K;++X){let U=Z[X].createInterpolant(null);H[X]=U,U.settings=Y}this._interpolantSettings=Y,this._interpolants=H,this._propertyBindings=Array(K),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(J){return this._startTime=J,this}setLoop(J,Q){return this.loop=J,this.repetitions=Q,this}setEffectiveWeight(J){return this.weight=J,this._effectiveWeight=this.enabled?J:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(J){return this._scheduleFading(J,0,1)}fadeOut(J){return this._scheduleFading(J,1,0)}crossFadeFrom(J,Q,$=!1){if(J.fadeOut(Q),this.fadeIn(Q),$===!0){let W=this._clip.duration,Z=J._clip.duration,K=Z/W,H=W/Z;J._restoreTimeScale=J.timeScale,this._restoreTimeScale=this.timeScale,J.warp(1,K,Q),this.warp(H,1,Q)}return this}crossFadeTo(J,Q,$=!1){return J.crossFadeFrom(this,Q,$)}stopFading(){let J=this._weightInterpolant;if(J!==null)this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this}setEffectiveTimeScale(J){return this.timeScale=J,this._effectiveTimeScale=this.paused?0:J,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(J){return this.timeScale=this._clip.duration/J,this.stopWarping()}syncWith(J){return this.time=J.time,this.timeScale=J.timeScale,this.stopWarping()}halt(J){return this.warp(this._effectiveTimeScale,0,J)}warp(J,Q,$){let W=this._mixer,Z=W.time,K=this.timeScale,H=this._timeScaleInterpolant;if(H===null)H=W._lendControlInterpolant(),this._timeScaleInterpolant=H;let{parameterPositions:Y,sampleValues:X}=H;return Y[0]=Z,Y[1]=Z+$,X[0]=J/K,X[1]=Q/K,this}stopWarping(){let J=this._timeScaleInterpolant;if(J!==null)this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(J,Q,$,W){if(!this.enabled){this._updateWeight(J);return}let Z=this._startTime;if(Z!==null){let Y=(J-Z)*$;if(Y<0||$===0)Q=0;else this._startTime=null,Q=$*Y}Q*=this._updateTimeScale(J);let K=this._updateTime(Q),H=this._updateWeight(J);if(H>0){let Y=this._interpolants,X=this._propertyBindings;switch(this.blendMode){case 2501:for(let U=0,N=Y.length;U!==N;++U)Y[U].evaluate(K),X[U].accumulateAdditive(H);break;case 2500:default:for(let U=0,N=Y.length;U!==N;++U)Y[U].evaluate(K),X[U].accumulate(W,H)}}}_updateWeight(J){let Q=0;if(this.enabled){Q=this.weight;let $=this._weightInterpolant;if($!==null){let W=$.evaluate(J)[0];if(Q*=W,J>$.parameterPositions[1]){if(this.stopFading(),W===0)this.enabled=!1}}}return this._effectiveWeight=Q,Q}_updateTimeScale(J){let Q=0;if(!this.paused){Q=this.timeScale;let $=this._timeScaleInterpolant;if($!==null){let W=$.evaluate(J)[0];if(Q*=W,J>$.parameterPositions[1]){if(Q===0)this.paused=!0;else{if(this._restoreTimeScale!==null)Q=this._restoreTimeScale;this.timeScale=Q}this.stopWarping()}}}return this._effectiveTimeScale=Q,Q}_updateTime(J){let Q=this._clip.duration,$=this.loop,W=this.time+J,Z=this._loopCount,K=$===2202;if(J===0){if(Z===-1)return W;return K&&(Z&1)===1?Q-W:W}if($===2200){if(Z===-1)this._loopCount=0,this._setEndings(!0,!0,!1);J:{if(W>=Q)W=Q;else if(W<0)W=0;else{this.time=W;break J}if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;this.time=W,this._mixer.dispatchEvent({type:"finished",action:this,direction:J<0?-1:1})}}else{if(Z===-1)if(J>=0)Z=0,this._setEndings(!0,this.repetitions===0,K);else this._setEndings(this.repetitions===0,!0,K);if(W>=Q||W<0){let H=Math.floor(W/Q);W-=Q*H,Z+=Math.abs(H);let Y=this.repetitions-Z;if(Y<=0){if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;W=J>0?Q:0,this.time=W,this._mixer.dispatchEvent({type:"finished",action:this,direction:J>0?1:-1})}else{if(Y===1){let X=J<0;this._setEndings(X,!X,K)}else this._setEndings(!1,!1,K);this._loopCount=Z,this.time=W,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:H})}}else this._loopCount=Z,this.time=W;if(K&&(Z&1)===1)return Q-W}return W}_setEndings(J,Q,$){let W=this._interpolantSettings;if($)W.endingStart=2401,W.endingEnd=2401;else{if(J)W.endingStart=this.zeroSlopeAtStart?2401:2400;else W.endingStart=2402;if(Q)W.endingEnd=this.zeroSlopeAtEnd?2401:2400;else W.endingEnd=2402}}_scheduleFading(J,Q,$){let W=this._mixer,Z=W.time,K=this._weightInterpolant;if(K===null)K=W._lendControlInterpolant(),this._weightInterpolant=K;let{parameterPositions:H,sampleValues:Y}=K;return H[0]=Z,Y[0]=Q,H[1]=Z+J,Y[1]=$,this}}var YG=new Float32Array(1);class J$ extends E9{constructor(J){super();if(this._root=J,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(J,Q){let $=J._localRoot||this._root,W=J._clip.tracks,Z=W.length,K=J._propertyBindings,H=J._interpolants,Y=$.uuid,X=this._bindingsByRootAndName,U=X[Y];if(U===void 0)U={},X[Y]=U;for(let N=0;N!==Z;++N){let E=W[N],G=E.name,F=U[G];if(F!==void 0)++F.referenceCount,K[N]=F;else{if(F=K[N],F!==void 0){if(F._cacheIndex===null)++F.referenceCount,this._addInactiveBinding(F,Y,G);continue}let R=Q&&Q._propertyBindings[N].binding.parsedPath;F=new iK(wJ.create($,G,R),E.ValueTypeName,E.getValueSize()),++F.referenceCount,this._addInactiveBinding(F,Y,G),K[N]=F}H[N].resultBuffer=F.buffer}}_activateAction(J){if(!this._isActiveAction(J)){if(J._cacheIndex===null){let $=(J._localRoot||this._root).uuid,W=J._clip.uuid,Z=this._actionsByClip[W];this._bindAction(J,Z&&Z.knownActions[0]),this._addInactiveAction(J,W,$)}let Q=J._propertyBindings;for(let $=0,W=Q.length;$!==W;++$){let Z=Q[$];if(Z.useCount++===0)this._lendBinding(Z),Z.saveOriginalState()}this._lendAction(J)}}_deactivateAction(J){if(this._isActiveAction(J)){let Q=J._propertyBindings;for(let $=0,W=Q.length;$!==W;++$){let Z=Q[$];if(--Z.useCount===0)Z.restoreOriginalState(),this._takeBackBinding(Z)}this._takeBackAction(J)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let J=this;this.stats={actions:{get total(){return J._actions.length},get inUse(){return J._nActiveActions}},bindings:{get total(){return J._bindings.length},get inUse(){return J._nActiveBindings}},controlInterpolants:{get total(){return J._controlInterpolants.length},get inUse(){return J._nActiveControlInterpolants}}}}_isActiveAction(J){let Q=J._cacheIndex;return Q!==null&&Q<this._nActiveActions}_addInactiveAction(J,Q,$){let W=this._actions,Z=this._actionsByClip,K=Z[Q];if(K===void 0)K={knownActions:[J],actionByRoot:{}},J._byClipCacheIndex=0,Z[Q]=K;else{let H=K.knownActions;J._byClipCacheIndex=H.length,H.push(J)}J._cacheIndex=W.length,W.push(J),K.actionByRoot[$]=J}_removeInactiveAction(J){let Q=this._actions,$=Q[Q.length-1],W=J._cacheIndex;$._cacheIndex=W,Q[W]=$,Q.pop(),J._cacheIndex=null;let Z=J._clip.uuid,K=this._actionsByClip,H=K[Z],Y=H.knownActions,X=Y[Y.length-1],U=J._byClipCacheIndex;X._byClipCacheIndex=U,Y[U]=X,Y.pop(),J._byClipCacheIndex=null;let N=H.actionByRoot,E=(J._localRoot||this._root).uuid;if(delete N[E],Y.length===0)delete K[Z];this._removeInactiveBindingsForAction(J)}_removeInactiveBindingsForAction(J){let Q=J._propertyBindings;for(let $=0,W=Q.length;$!==W;++$){let Z=Q[$];if(--Z.referenceCount===0)this._removeInactiveBinding(Z)}}_lendAction(J){let Q=this._actions,$=J._cacheIndex,W=this._nActiveActions++,Z=Q[W];J._cacheIndex=W,Q[W]=J,Z._cacheIndex=$,Q[$]=Z}_takeBackAction(J){let Q=this._actions,$=J._cacheIndex,W=--this._nActiveActions,Z=Q[W];J._cacheIndex=W,Q[W]=J,Z._cacheIndex=$,Q[$]=Z}_addInactiveBinding(J,Q,$){let W=this._bindingsByRootAndName,Z=this._bindings,K=W[Q];if(K===void 0)K={},W[Q]=K;K[$]=J,J._cacheIndex=Z.length,Z.push(J)}_removeInactiveBinding(J){let Q=this._bindings,$=J.binding,W=$.rootNode.uuid,Z=$.path,K=this._bindingsByRootAndName,H=K[W],Y=Q[Q.length-1],X=J._cacheIndex;if(Y._cacheIndex=X,Q[X]=Y,Q.pop(),delete H[Z],Object.keys(H).length===0)delete K[W]}_lendBinding(J){let Q=this._bindings,$=J._cacheIndex,W=this._nActiveBindings++,Z=Q[W];J._cacheIndex=W,Q[W]=J,Z._cacheIndex=$,Q[$]=Z}_takeBackBinding(J){let Q=this._bindings,$=J._cacheIndex,W=--this._nActiveBindings,Z=Q[W];J._cacheIndex=W,Q[W]=J,Z._cacheIndex=$,Q[$]=Z}_lendControlInterpolant(){let J=this._controlInterpolants,Q=this._nActiveControlInterpolants++,$=J[Q];if($===void 0)$=new _W(new Float32Array(2),new Float32Array(2),1,YG),$.__cacheIndex=Q,J[Q]=$;return $}_takeBackControlInterpolant(J){let Q=this._controlInterpolants,$=J.__cacheIndex,W=--this._nActiveControlInterpolants,Z=Q[W];J.__cacheIndex=W,Q[W]=J,Z.__cacheIndex=$,Q[$]=Z}clipAction(J,Q,$){let W=Q||this._root,Z=W.uuid,K=typeof J==="string"?y6.findByName(W,J):J,H=K!==null?K.uuid:J,Y=this._actionsByClip[H],X=null;if($===void 0)if(K!==null)$=K.blendMode;else $=2500;if(Y!==void 0){let N=Y.actionByRoot[Z];if(N!==void 0&&N.blendMode===$)return N;if(X=Y.knownActions[0],K===null)K=X._clip}if(K===null)return null;let U=new rK(this,K,Q,$);return this._bindAction(U,X),this._addInactiveAction(U,H,Z),U}existingAction(J,Q){let $=Q||this._root,W=$.uuid,Z=typeof J==="string"?y6.findByName($,J):J,K=Z?Z.uuid:J,H=this._actionsByClip[K];if(H!==void 0)return H.actionByRoot[W]||null;return null}stopAllAction(){let J=this._actions,Q=this._nActiveActions;for(let $=Q-1;$>=0;--$)J[$].stop();return this}update(J){J*=this.timeScale;let Q=this._actions,$=this._nActiveActions,W=this.time+=J,Z=Math.sign(J),K=this._accuIndex^=1;for(let X=0;X!==$;++X)Q[X]._update(W,J,Z,K);let H=this._bindings,Y=this._nActiveBindings;for(let X=0;X!==Y;++X)H[X].apply(K);return this}setTime(J){this.time=0;for(let Q=0;Q<this._actions.length;Q++)this._actions[Q].time=0;return this.update(J)}getRoot(){return this._root}uncacheClip(J){let Q=this._actions,$=J.uuid,W=this._actionsByClip,Z=W[$];if(Z!==void 0){let K=Z.knownActions;for(let H=0,Y=K.length;H!==Y;++H){let X=K[H];this._deactivateAction(X);let U=X._cacheIndex,N=Q[Q.length-1];X._cacheIndex=null,X._byClipCacheIndex=null,N._cacheIndex=U,Q[U]=N,Q.pop(),this._removeInactiveBindingsForAction(X)}delete W[$]}}uncacheRoot(J){let Q=J.uuid,$=this._actionsByClip;for(let K in $){let H=$[K].actionByRoot,Y=H[Q];if(Y!==void 0)this._deactivateAction(Y),this._removeInactiveAction(Y)}let W=this._bindingsByRootAndName,Z=W[Q];if(Z!==void 0)for(let K in Z){let H=Z[K];H.restoreOriginalState(),this._removeInactiveBinding(H)}}uncacheAction(J,Q){let $=this.existingAction(J,Q);if($!==null)this._deactivateAction($),this._removeInactiveAction($)}}class fW{constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,o0("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let Q=performance.now();J=(Q-this.oldTime)/1000,this.oldTime=Q,this.elapsedTime+=J}return J}}class Q${constructor(J=1,Q=0,$=0){this.radius=J,this.phi=Q,this.theta=$}set(J,Q,$){return this.radius=J,this.phi=Q,this.theta=$,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=NJ(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){if(this.radius=Math.sqrt(J*J+Q*Q+$*$),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,$),this.phi=Math.acos(NJ(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class tK{static{tK.prototype.isMatrix2=!0}constructor(J,Q,$,W){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,W)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,W){let Z=this.elements;return Z[0]=J,Z[2]=Q,Z[1]=$,Z[3]=W,this}}class bW extends E9{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function eK(J,Q,$,W){let Z=XG(W);switch($){case 1021:return J*Q;case 1028:return J*Q/Z.components*Z.byteLength;case 1029:return J*Q/Z.components*Z.byteLength;case 1030:return J*Q*2/Z.components*Z.byteLength;case 1031:return J*Q*2/Z.components*Z.byteLength;case 1022:return J*Q*3/Z.components*Z.byteLength;case 1023:return J*Q*4/Z.components*Z.byteLength;case 1033:return J*Q*4/Z.components*Z.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function XG(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)o0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function qU(){let J=null,Q=!1,$=null,W=null;function Z(K,H){W=J.requestAnimationFrame(Z),$(K,H)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;W=J.requestAnimationFrame(Z),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(W);Q=!1},setAnimationLoop:function(K){$=K},setContext:function(K){J=K}}}function UG(J){let Q=new WeakMap;function $(Y,X){let{array:U,usage:N}=Y,E=U.byteLength,G=J.createBuffer();J.bindBuffer(X,G),J.bufferData(X,U,N),Y.onUploadCallback();let F;if(U instanceof Float32Array)F=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)F=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(Y.isFloat16BufferAttribute)F=J.HALF_FLOAT;else F=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)F=J.SHORT;else if(U instanceof Uint32Array)F=J.UNSIGNED_INT;else if(U instanceof Int32Array)F=J.INT;else if(U instanceof Int8Array)F=J.BYTE;else if(U instanceof Uint8Array)F=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)F=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:G,type:F,bytesPerElement:U.BYTES_PER_ELEMENT,version:Y.version,size:E}}function W(Y,X,U){let{array:N,updateRanges:E}=X;if(J.bindBuffer(U,Y),E.length===0)J.bufferSubData(U,0,N);else{E.sort((F,R)=>F.start-R.start);let G=0;for(let F=1;F<E.length;F++){let R=E[G],D=E[F];if(D.start<=R.start+R.count+1)R.count=Math.max(R.count,D.start+D.count-R.start);else++G,E[G]=D}E.length=G+1;for(let F=0,R=E.length;F<R;F++){let D=E[F];J.bufferSubData(U,D.start*N.BYTES_PER_ELEMENT,N,D.start,D.count)}X.clearUpdateRanges()}X.onUploadCallback()}function Z(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;return Q.get(Y)}function K(Y){if(Y.isInterleavedBufferAttribute)Y=Y.data;let X=Q.get(Y);if(X)J.deleteBuffer(X.buffer),Q.delete(Y)}function H(Y,X){if(Y.isInterleavedBufferAttribute)Y=Y.data;if(Y.isGLBufferAttribute){let N=Q.get(Y);if(!N||N.version<Y.version)Q.set(Y,{buffer:Y.buffer,type:Y.type,bytesPerElement:Y.elementSize,version:Y.version});return}let U=Q.get(Y);if(U===void 0)Q.set(Y,$(Y,X));else if(U.version<Y.version){if(U.size!==Y.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");W(U.buffer,Y,X),U.version=Y.version}}return{get:Z,remove:K,update:H}}var NG=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GG=`#ifdef USE_ALPHAHASH
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
#endif`,EG=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,FG=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qG=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,OG=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RG=`#ifdef USE_AOMAP
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
#endif`,LG=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VG=`#ifdef USE_BATCHING
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
#endif`,DG=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BG=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kG=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MG=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,CG=`#ifdef USE_IRIDESCENCE
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
#endif`,PG=`#ifdef USE_BUMPMAP
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
#endif`,IG=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zG=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AG=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_G=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TG=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,SG=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wG=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jG=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,yG=`#define PI 3.141592653589793
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
} // validated`,vG=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fG=`vec3 transformedNormal = objectNormal;
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
#endif`,bG=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hG=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xG=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gG=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pG="gl_FragColor = linearToOutputTexel( gl_FragColor );",lG=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mG=`#ifdef USE_ENVMAP
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
#endif`,uG=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dG=`#ifdef USE_ENVMAP
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
#endif`,cG=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nG=`#ifdef USE_ENVMAP
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
#endif`,sG=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iG=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oG=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aG=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rG=`#ifdef USE_GRADIENTMAP
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
}`,tG=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eG=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,$E=`#ifdef USE_ENVMAP
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
#endif`,WE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YE=`PhysicalMaterial material;
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
#endif`,XE=`uniform sampler2D dfgLUT;
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
}`,UE=`
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
#endif`,NE=`#if defined( RE_IndirectDiffuse )
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
#endif`,GE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,EE=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,FE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,BE=`#if defined( USE_POINTS_UV )
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
#endif`,kE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ME=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zE=`#ifdef USE_MORPHTARGETS
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
#endif`,AE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_E=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,TE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,SE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yE=`#ifdef USE_NORMALMAP
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
#endif`,vE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oE=`float getShadowMask() {
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
}`,aE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rE=`#ifdef USE_SKINNING
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
#endif`,tE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eE=`#ifdef USE_SKINNING
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
#endif`,JF=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QF=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$F=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WF=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZF=`#ifdef USE_TRANSMISSION
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
#endif`,KF=`#ifdef USE_TRANSMISSION
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
#endif`,HF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XF=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UF=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,NF=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GF=`uniform sampler2D t2D;
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
}`,EF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FF=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OF=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RF=`#include <common>
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
}`,LF=`#if DEPTH_PACKING == 3200
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
}`,VF=`#define DISTANCE
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
}`,DF=`#define DISTANCE
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
}`,BF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kF=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MF=`uniform float scale;
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
}`,CF=`uniform vec3 diffuse;
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
}`,PF=`#include <common>
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
}`,IF=`uniform vec3 diffuse;
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
}`,zF=`#define LAMBERT
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
}`,AF=`#define LAMBERT
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
}`,_F=`#define MATCAP
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
}`,TF=`#define MATCAP
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
}`,SF=`#define NORMAL
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
}`,wF=`#define NORMAL
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
}`,jF=`#define PHONG
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
}`,yF=`#define PHONG
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
}`,vF=`#define STANDARD
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
}`,fF=`#define STANDARD
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
}`,bF=`#define TOON
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
}`,hF=`#define TOON
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
}`,xF=`uniform float size;
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
}`,gF=`uniform vec3 diffuse;
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
}`,pF=`#include <common>
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
}`,lF=`uniform vec3 color;
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
}`,mF=`uniform float rotation;
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
}`,uF=`uniform vec3 diffuse;
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
}`,OJ={alphahash_fragment:NG,alphahash_pars_fragment:GG,alphamap_fragment:EG,alphamap_pars_fragment:FG,alphatest_fragment:qG,alphatest_pars_fragment:OG,aomap_fragment:RG,aomap_pars_fragment:LG,batching_pars_vertex:VG,batching_vertex:DG,begin_vertex:BG,beginnormal_vertex:kG,bsdfs:MG,iridescence_fragment:CG,bumpmap_pars_fragment:PG,clipping_planes_fragment:IG,clipping_planes_pars_fragment:zG,clipping_planes_pars_vertex:AG,clipping_planes_vertex:_G,color_fragment:TG,color_pars_fragment:SG,color_pars_vertex:wG,color_vertex:jG,common:yG,cube_uv_reflection_fragment:vG,defaultnormal_vertex:fG,displacementmap_pars_vertex:bG,displacementmap_vertex:hG,emissivemap_fragment:xG,emissivemap_pars_fragment:gG,colorspace_fragment:pG,colorspace_pars_fragment:lG,envmap_fragment:mG,envmap_common_pars_fragment:uG,envmap_pars_fragment:dG,envmap_pars_vertex:cG,envmap_physical_pars_fragment:$E,envmap_vertex:nG,fog_vertex:sG,fog_pars_vertex:iG,fog_fragment:oG,fog_pars_fragment:aG,gradientmap_pars_fragment:rG,lightmap_pars_fragment:tG,lights_lambert_fragment:eG,lights_lambert_pars_fragment:JE,lights_pars_begin:QE,lights_toon_fragment:WE,lights_toon_pars_fragment:ZE,lights_phong_fragment:KE,lights_phong_pars_fragment:HE,lights_physical_fragment:YE,lights_physical_pars_fragment:XE,lights_fragment_begin:UE,lights_fragment_maps:NE,lights_fragment_end:GE,lightprobes_pars_fragment:EE,logdepthbuf_fragment:FE,logdepthbuf_pars_fragment:qE,logdepthbuf_pars_vertex:OE,logdepthbuf_vertex:RE,map_fragment:LE,map_pars_fragment:VE,map_particle_fragment:DE,map_particle_pars_fragment:BE,metalnessmap_fragment:kE,metalnessmap_pars_fragment:ME,morphinstance_vertex:CE,morphcolor_vertex:PE,morphnormal_vertex:IE,morphtarget_pars_vertex:zE,morphtarget_vertex:AE,normal_fragment_begin:_E,normal_fragment_maps:TE,normal_pars_fragment:SE,normal_pars_vertex:wE,normal_vertex:jE,normalmap_pars_fragment:yE,clearcoat_normal_fragment_begin:vE,clearcoat_normal_fragment_maps:fE,clearcoat_pars_fragment:bE,iridescence_pars_fragment:hE,opaque_fragment:xE,packing:gE,premultiplied_alpha_fragment:pE,project_vertex:lE,dithering_fragment:mE,dithering_pars_fragment:uE,roughnessmap_fragment:dE,roughnessmap_pars_fragment:cE,shadowmap_pars_fragment:nE,shadowmap_pars_vertex:sE,shadowmap_vertex:iE,shadowmask_pars_fragment:oE,skinbase_vertex:aE,skinning_pars_vertex:rE,skinning_vertex:tE,skinnormal_vertex:eE,specularmap_fragment:JF,specularmap_pars_fragment:QF,tonemapping_fragment:$F,tonemapping_pars_fragment:WF,transmission_fragment:ZF,transmission_pars_fragment:KF,uv_pars_fragment:HF,uv_pars_vertex:YF,uv_vertex:XF,worldpos_vertex:UF,background_vert:NF,background_frag:GF,backgroundCube_vert:EF,backgroundCube_frag:FF,cube_vert:qF,cube_frag:OF,depth_vert:RF,depth_frag:LF,distance_vert:VF,distance_frag:DF,equirect_vert:BF,equirect_frag:kF,linedashed_vert:MF,linedashed_frag:CF,meshbasic_vert:PF,meshbasic_frag:IF,meshlambert_vert:zF,meshlambert_frag:AF,meshmatcap_vert:_F,meshmatcap_frag:TF,meshnormal_vert:SF,meshnormal_frag:wF,meshphong_vert:jF,meshphong_frag:yF,meshphysical_vert:vF,meshphysical_frag:fF,meshtoon_vert:bF,meshtoon_frag:hF,points_vert:xF,points_frag:gF,shadow_vert:pF,shadow_frag:lF,sprite_vert:mF,sprite_frag:uF},y0={common:{diffuse:{value:new h0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new YJ},alphaMap:{value:null},alphaMapTransform:{value:new YJ},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new YJ}},envmap:{envMap:{value:null},envMapRotation:{value:new YJ},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new YJ}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new YJ}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new YJ},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new YJ},normalScale:{value:new U0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new YJ},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new YJ}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new YJ}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new YJ}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new h0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new T},probesMax:{value:new T},probesResolution:{value:new T}},points:{diffuse:{value:new h0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new YJ},alphaTest:{value:0},uvTransform:{value:new YJ}},sprite:{diffuse:{value:new h0(16777215)},opacity:{value:1},center:{value:new U0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new YJ},alphaMap:{value:null},alphaMapTransform:{value:new YJ},alphaTest:{value:0}}},j9={basic:{uniforms:M8([y0.common,y0.specularmap,y0.envmap,y0.aomap,y0.lightmap,y0.fog]),vertexShader:OJ.meshbasic_vert,fragmentShader:OJ.meshbasic_frag},lambert:{uniforms:M8([y0.common,y0.specularmap,y0.envmap,y0.aomap,y0.lightmap,y0.emissivemap,y0.bumpmap,y0.normalmap,y0.displacementmap,y0.fog,y0.lights,{emissive:{value:new h0(0)},envMapIntensity:{value:1}}]),vertexShader:OJ.meshlambert_vert,fragmentShader:OJ.meshlambert_frag},phong:{uniforms:M8([y0.common,y0.specularmap,y0.envmap,y0.aomap,y0.lightmap,y0.emissivemap,y0.bumpmap,y0.normalmap,y0.displacementmap,y0.fog,y0.lights,{emissive:{value:new h0(0)},specular:{value:new h0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:OJ.meshphong_vert,fragmentShader:OJ.meshphong_frag},standard:{uniforms:M8([y0.common,y0.envmap,y0.aomap,y0.lightmap,y0.emissivemap,y0.bumpmap,y0.normalmap,y0.displacementmap,y0.roughnessmap,y0.metalnessmap,y0.fog,y0.lights,{emissive:{value:new h0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:OJ.meshphysical_vert,fragmentShader:OJ.meshphysical_frag},toon:{uniforms:M8([y0.common,y0.aomap,y0.lightmap,y0.emissivemap,y0.bumpmap,y0.normalmap,y0.displacementmap,y0.gradientmap,y0.fog,y0.lights,{emissive:{value:new h0(0)}}]),vertexShader:OJ.meshtoon_vert,fragmentShader:OJ.meshtoon_frag},matcap:{uniforms:M8([y0.common,y0.bumpmap,y0.normalmap,y0.displacementmap,y0.fog,{matcap:{value:null}}]),vertexShader:OJ.meshmatcap_vert,fragmentShader:OJ.meshmatcap_frag},points:{uniforms:M8([y0.points,y0.fog]),vertexShader:OJ.points_vert,fragmentShader:OJ.points_frag},dashed:{uniforms:M8([y0.common,y0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:OJ.linedashed_vert,fragmentShader:OJ.linedashed_frag},depth:{uniforms:M8([y0.common,y0.displacementmap]),vertexShader:OJ.depth_vert,fragmentShader:OJ.depth_frag},normal:{uniforms:M8([y0.common,y0.bumpmap,y0.normalmap,y0.displacementmap,{opacity:{value:1}}]),vertexShader:OJ.meshnormal_vert,fragmentShader:OJ.meshnormal_frag},sprite:{uniforms:M8([y0.sprite,y0.fog]),vertexShader:OJ.sprite_vert,fragmentShader:OJ.sprite_frag},background:{uniforms:{uvTransform:{value:new YJ},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:OJ.background_vert,fragmentShader:OJ.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new YJ}},vertexShader:OJ.backgroundCube_vert,fragmentShader:OJ.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:OJ.cube_vert,fragmentShader:OJ.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:OJ.equirect_vert,fragmentShader:OJ.equirect_frag},distance:{uniforms:M8([y0.common,y0.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:OJ.distance_vert,fragmentShader:OJ.distance_frag},shadow:{uniforms:M8([y0.lights,y0.fog,{color:{value:new h0(0)},opacity:{value:1}}]),vertexShader:OJ.shadow_vert,fragmentShader:OJ.shadow_frag}};j9.physical={uniforms:M8([j9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new YJ},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new YJ},clearcoatNormalScale:{value:new U0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new YJ},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new YJ},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new YJ},sheen:{value:0},sheenColor:{value:new h0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new YJ},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new YJ},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new YJ},transmissionSamplerSize:{value:new U0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new YJ},attenuationDistance:{value:0},attenuationColor:{value:new h0(0)},specularColor:{value:new h0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new YJ},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new YJ},anisotropyVector:{value:new U0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new YJ}}]),vertexShader:OJ.meshphysical_vert,fragmentShader:OJ.meshphysical_frag};var hW={r:0,b:0,g:0},dF=new QJ,OU=new YJ;OU.set(-1,0,0,0,1,0,0,0,1);function cF(J,Q,$,W,Z,K){let H=new h0(0),Y=Z===!0?0:1,X,U,N=null,E=0,G=null;function F(V){let M=V.isScene===!0?V.background:null;if(M&&M.isTexture){let L=V.backgroundBlurriness>0;M=Q.get(M,L)}return M}function R(V){let M=!1,L=F(V);if(L===null)O(H,Y);else if(L&&L.isColor)O(L,1),M=!0;let P=J.xr.getEnvironmentBlendMode();if(P==="additive")$.buffers.color.setClear(0,0,0,1,K);else if(P==="alpha-blend")$.buffers.color.setClear(0,0,0,0,K);if(J.autoClear||M)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function D(V,M){let L=F(M);if(L&&(L.isCubeTexture||L.mapping===hQ)){if(U===void 0)U=new I0(new cJ(1,1,1),new rJ({name:"BackgroundCubeMaterial",uniforms:n7(j9.backgroundCube.uniforms),vertexShader:j9.backgroundCube.vertexShader,fragmentShader:j9.backgroundCube.fragmentShader,side:L8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(P,I,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),W.update(U);if(U.material.uniforms.envMap.value=L,U.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(dF.makeRotationFromEuler(M.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(OU);if(U.material.toneMapped=GJ.getTransfer(L.colorSpace)!==pJ,N!==L||E!==L.version||G!==J.toneMapping)U.material.needsUpdate=!0,N=L,E=L.version,G=J.toneMapping;U.layers.enableAll(),V.unshift(U,U.geometry,U.material,0,0,null)}else if(L&&L.isTexture){if(X===void 0)X=new I0(new zJ(2,2),new rJ({name:"BackgroundMaterial",uniforms:n7(j9.background.uniforms),vertexShader:j9.background.vertexShader,fragmentShader:j9.background.fragmentShader,side:U7,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),X.geometry.deleteAttribute("normal"),Object.defineProperty(X.material,"map",{get:function(){return this.uniforms.t2D.value}}),W.update(X);if(X.material.uniforms.t2D.value=L,X.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,X.material.toneMapped=GJ.getTransfer(L.colorSpace)!==pJ,L.matrixAutoUpdate===!0)L.updateMatrix();if(X.material.uniforms.uvTransform.value.copy(L.matrix),N!==L||E!==L.version||G!==J.toneMapping)X.material.needsUpdate=!0,N=L,E=L.version,G=J.toneMapping;X.layers.enableAll(),V.unshift(X,X.geometry,X.material,0,0,null)}}function O(V,M){V.getRGB(hW,hK(J)),$.buffers.color.setClear(hW.r,hW.g,hW.b,M,K)}function q(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(X!==void 0)X.geometry.dispose(),X.material.dispose(),X=void 0}return{getClearColor:function(){return H},setClearColor:function(V,M=1){H.set(V),Y=M,O(H,Y)},getClearAlpha:function(){return Y},setClearAlpha:function(V){Y=V,O(H,Y)},render:R,addToRenderList:D,dispose:q}}function nF(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),W={},Z=G(null),K=Z,H=!1;function Y(b,g,Z0,f,o){let s=!1,p=E(b,f,Z0,g);if(K!==p)K=p,U(K.object);if(s=F(b,f,Z0,o),s)R(b,f,Z0,o);if(o!==null)Q.update(o,J.ELEMENT_ARRAY_BUFFER);if(s||H){if(H=!1,L(b,g,Z0,f),o!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(o).buffer)}}function X(){return J.createVertexArray()}function U(b){return J.bindVertexArray(b)}function N(b){return J.deleteVertexArray(b)}function E(b,g,Z0,f){let o=f.wireframe===!0,s=W[g.id];if(s===void 0)s={},W[g.id]=s;let p=b.isInstancedMesh===!0?b.id:0,X0=s[p];if(X0===void 0)X0={},s[p]=X0;let a=X0[Z0.id];if(a===void 0)a={},X0[Z0.id]=a;let Y0=a[o];if(Y0===void 0)Y0=G(X()),a[o]=Y0;return Y0}function G(b){let g=[],Z0=[],f=[];for(let o=0;o<$;o++)g[o]=0,Z0[o]=0,f[o]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:g,enabledAttributes:Z0,attributeDivisors:f,object:b,attributes:{},index:null}}function F(b,g,Z0,f){let o=K.attributes,s=g.attributes,p=0,X0=Z0.getAttributes();for(let a in X0)if(X0[a].location>=0){let F0=o[a],r0=s[a];if(r0===void 0){if(a==="instanceMatrix"&&b.instanceMatrix)r0=b.instanceMatrix;if(a==="instanceColor"&&b.instanceColor)r0=b.instanceColor}if(F0===void 0)return!0;if(F0.attribute!==r0)return!0;if(r0&&F0.data!==r0.data)return!0;p++}if(K.attributesNum!==p)return!0;if(K.index!==f)return!0;return!1}function R(b,g,Z0,f){let o={},s=g.attributes,p=0,X0=Z0.getAttributes();for(let a in X0)if(X0[a].location>=0){let F0=s[a];if(F0===void 0){if(a==="instanceMatrix"&&b.instanceMatrix)F0=b.instanceMatrix;if(a==="instanceColor"&&b.instanceColor)F0=b.instanceColor}let r0={};if(r0.attribute=F0,F0&&F0.data)r0.data=F0.data;o[a]=r0,p++}K.attributes=o,K.attributesNum=p,K.index=f}function D(){let b=K.newAttributes;for(let g=0,Z0=b.length;g<Z0;g++)b[g]=0}function O(b){q(b,0)}function q(b,g){let{newAttributes:Z0,enabledAttributes:f,attributeDivisors:o}=K;if(Z0[b]=1,f[b]===0)J.enableVertexAttribArray(b),f[b]=1;if(o[b]!==g)J.vertexAttribDivisor(b,g),o[b]=g}function V(){let{newAttributes:b,enabledAttributes:g}=K;for(let Z0=0,f=g.length;Z0<f;Z0++)if(g[Z0]!==b[Z0])J.disableVertexAttribArray(Z0),g[Z0]=0}function M(b,g,Z0,f,o,s,p){if(p===!0)J.vertexAttribIPointer(b,g,Z0,o,s);else J.vertexAttribPointer(b,g,Z0,f,o,s)}function L(b,g,Z0,f){D();let o=f.attributes,s=Z0.getAttributes(),p=g.defaultAttributeValues;for(let X0 in s){let a=s[X0];if(a.location>=0){let Y0=o[X0];if(Y0===void 0){if(X0==="instanceMatrix"&&b.instanceMatrix)Y0=b.instanceMatrix;if(X0==="instanceColor"&&b.instanceColor)Y0=b.instanceColor}if(Y0!==void 0){let{normalized:F0,itemSize:r0}=Y0,T0=Q.get(Y0);if(T0===void 0)continue;let{buffer:x0,type:e0,bytesPerElement:Q0}=T0,w=e0===J.INT||e0===J.UNSIGNED_INT||Y0.gpuType===gZ;if(Y0.isInterleavedBufferAttribute){let x=Y0.data,l=x.stride,e=Y0.offset;if(x.isInstancedInterleavedBuffer){for(let t=0;t<a.locationSize;t++)q(a.location+t,x.meshPerAttribute);if(b.isInstancedMesh!==!0&&f._maxInstanceCount===void 0)f._maxInstanceCount=x.meshPerAttribute*x.count}else for(let t=0;t<a.locationSize;t++)O(a.location+t);J.bindBuffer(J.ARRAY_BUFFER,x0);for(let t=0;t<a.locationSize;t++)M(a.location+t,r0/a.locationSize,e0,F0,l*Q0,(e+r0/a.locationSize*t)*Q0,w)}else{if(Y0.isInstancedBufferAttribute){for(let x=0;x<a.locationSize;x++)q(a.location+x,Y0.meshPerAttribute);if(b.isInstancedMesh!==!0&&f._maxInstanceCount===void 0)f._maxInstanceCount=Y0.meshPerAttribute*Y0.count}else for(let x=0;x<a.locationSize;x++)O(a.location+x);J.bindBuffer(J.ARRAY_BUFFER,x0);for(let x=0;x<a.locationSize;x++)M(a.location+x,r0/a.locationSize,e0,F0,r0*Q0,r0/a.locationSize*x*Q0,w)}}else if(p!==void 0){let F0=p[X0];if(F0!==void 0)switch(F0.length){case 2:J.vertexAttrib2fv(a.location,F0);break;case 3:J.vertexAttrib3fv(a.location,F0);break;case 4:J.vertexAttrib4fv(a.location,F0);break;default:J.vertexAttrib1fv(a.location,F0)}}}}V()}function P(){A();for(let b in W){let g=W[b];for(let Z0 in g){let f=g[Z0];for(let o in f){let s=f[o];for(let p in s)N(s[p].object),delete s[p];delete f[o]}}delete W[b]}}function I(b){if(W[b.id]===void 0)return;let g=W[b.id];for(let Z0 in g){let f=g[Z0];for(let o in f){let s=f[o];for(let p in s)N(s[p].object),delete s[p];delete f[o]}}delete W[b.id]}function S(b){for(let g in W){let Z0=W[g];for(let f in Z0){let o=Z0[f];if(o[b.id]===void 0)continue;let s=o[b.id];for(let p in s)N(s[p].object),delete s[p];delete o[b.id]}}}function k(b){for(let g in W){let Z0=W[g],f=b.isInstancedMesh===!0?b.id:0,o=Z0[f];if(o===void 0)continue;for(let s in o){let p=o[s];for(let X0 in p)N(p[X0].object),delete p[X0];delete o[s]}if(delete Z0[f],Object.keys(Z0).length===0)delete W[g]}}function A(){if(d(),H=!0,K===Z)return;K=Z,U(K.object)}function d(){Z.geometry=null,Z.program=null,Z.wireframe=!1}return{setup:Y,reset:A,resetDefaultState:d,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfObject:k,releaseStatesOfProgram:S,initAttributes:D,enableAttribute:O,disableUnusedAttributes:V}}function sF(J,Q,$){let W;function Z(X){W=X}function K(X,U){J.drawArrays(W,X,U),$.update(U,W,1)}function H(X,U,N){if(N===0)return;J.drawArraysInstanced(W,X,U,N),$.update(U,W,N)}function Y(X,U,N){if(N===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(W,X,0,U,0,N);let G=0;for(let F=0;F<N;F++)G+=U[F];$.update(G,W,1)}this.setMode=Z,this.render=K,this.renderInstances=H,this.renderMultiDraw=Y}function iF(J,Q,$,W){let Z;function K(){if(Z!==void 0)return Z;if(Q.has("EXT_texture_filter_anisotropic")===!0){let S=Q.get("EXT_texture_filter_anisotropic");Z=J.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else Z=0;return Z}function H(S){if(S!==_9&&W.convert(S)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function Y(S){let k=S===q8&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(S!==G9&&S!==u9&&!k&&W.convert(S)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function X(S){if(S==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";S="mediump"}if(S==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",N=X(U);if(N!==U)o0("WebGLRenderer:",U,"not supported, using",N,"instead."),U=N;let E=$.logarithmicDepthBuffer===!0,G=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&G===!1)o0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let F=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),R=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=J.getParameter(J.MAX_TEXTURE_SIZE),O=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),q=J.getParameter(J.MAX_VERTEX_ATTRIBS),V=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),M=J.getParameter(J.MAX_VARYING_VECTORS),L=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),P=J.getParameter(J.MAX_SAMPLES),I=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:K,getMaxPrecision:X,textureFormatReadable:H,textureTypeReadable:Y,precision:U,logarithmicDepthBuffer:E,reversedDepthBuffer:G,maxTextures:F,maxVertexTextures:R,maxTextureSize:D,maxCubemapSize:O,maxAttributes:q,maxVertexUniforms:V,maxVaryings:M,maxFragmentUniforms:L,maxSamples:P,samples:I}}function oF(J){let Q=this,$=null,W=0,Z=!1,K=!1,H=new d8,Y=new YJ,X={value:null,needsUpdate:!1};this.uniform=X,this.numPlanes=0,this.numIntersection=0,this.init=function(E,G){let F=E.length!==0||G||W!==0||Z;return Z=G,W=E.length,F},this.beginShadows=function(){K=!0,N(null)},this.endShadows=function(){K=!1},this.setGlobalState=function(E,G){$=N(E,G,0)},this.setState=function(E,G,F){let{clippingPlanes:R,clipIntersection:D,clipShadows:O}=E,q=J.get(E);if(!Z||R===null||R.length===0||K&&!O)if(K)N(null);else U();else{let V=K?0:W,M=V*4,L=q.clippingState||null;X.value=L,L=N(R,G,M,F);for(let P=0;P!==M;++P)L[P]=$[P];q.clippingState=L,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=V}};function U(){if(X.value!==$)X.value=$,X.needsUpdate=W>0;Q.numPlanes=W,Q.numIntersection=0}function N(E,G,F,R){let D=E!==null?E.length:0,O=null;if(D!==0){if(O=X.value,R!==!0||O===null){let q=F+D*4,V=G.matrixWorldInverse;if(Y.getNormalMatrix(V),O===null||O.length<q)O=new Float32Array(q);for(let M=0,L=F;M!==D;++M,L+=4)H.copy(E[M]).applyMatrix4(V,Y),H.normal.toArray(O,L),O[L+3]=H.constant}X.value=O,X.needsUpdate=!0}return Q.numPlanes=D,Q.numIntersection=0,O}}var a6=4,aF=6,rF=20,tF=256,$$=new o9,sX=new h0,JH=null,QH=0,$H=0,WH=!1,eF=new T,i7=new T;class H${constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,W=100,Z={}){let{size:K=256,position:H=eF}=Z;JH=this._renderer.getRenderTarget(),QH=this._renderer.getActiveCubeFace(),$H=this._renderer.getActiveMipmapLevel(),WH=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(K);let Y=this._allocateTargets();if(Y.depthBuffer=!0,this._sceneToCubeUV(J,$,W,Y,H),Q>0)this._blur(Y,0,0,Q);return this._applyPMREM(Y),this._cleanup(Y),Y}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=aX(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=oX(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(JH,QH,$H),this._renderer.xr.enabled=WH,J.scissorTest=!1,o6(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===b6||J.mapping===f7)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);JH=this._renderer.getRenderTarget(),QH=this._renderer.getActiveCubeFace(),$H=this._renderer.getActiveMipmapLevel(),WH=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:F8,minFilter:F8,generateMipmaps:!1,type:q8,format:_9,colorSpace:x8,depthBuffer:!1},W=iX(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=iX(J,Q,$);let{_lodMax:Z}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=J1(Z)),this._blurMaterial=$1(Z,J,Q),this._ggxMaterial=Q1(Z,J,Q)}return W}_compileMaterial(J){let Q=new I0(new lJ,J);this._renderer.compile(Q,$$)}_sceneToCubeUV(J,Q,$,W,Z){let Y=new H8(90,1,Q,$),X=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],N=this._renderer,E=N.autoClear,G=N.toneMapping;if(N.getClearColor(sX),N.toneMapping=U9,N.autoClear=!1,N.state.buffers.depth.getReversed())N.setRenderTarget(W),N.clearDepth(),N.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new I0(new cJ,new dJ({name:"PMREM.Background",side:L8,depthWrite:!1,depthTest:!1}));let R=this._backgroundBox,D=R.material,O=!1,q=J.background;if(q){if(q.isColor)D.color.copy(q),J.background=null,O=!0}else D.color.copy(sX),O=!0;for(let V=0;V<6;V++){let M=V%3;if(M===0)Y.up.set(0,X[V],0),Y.position.set(Z.x,Z.y,Z.z),Y.lookAt(Z.x+U[V],Z.y,Z.z);else if(M===1)Y.up.set(0,0,X[V]),Y.position.set(Z.x,Z.y,Z.z),Y.lookAt(Z.x,Z.y+U[V],Z.z);else Y.up.set(0,X[V],0),Y.position.set(Z.x,Z.y,Z.z),Y.lookAt(Z.x,Z.y,Z.z+U[V]);let L=this._cubeSize;if(o6(W,M*L,V>2?L:0,L,L),N.setRenderTarget(W),O)N.render(R,Y);N.render(J,Y)}N.toneMapping=G,N.autoClear=E,J.background=q}_textureToCubeUV(J,Q){let $=this._renderer,W=J.mapping===b6||J.mapping===f7;if(W){if(this._cubemapMaterial===null)this._cubemapMaterial=aX();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=oX();let Z=W?this._cubemapMaterial:this._equirectMaterial,K=this._lodMeshes[0];K.material=Z;let H=Z.uniforms;H.envMap.value=J;let Y=this._cubeSize;o6(Q,0,0,3*Y,2*Y),$.setRenderTarget(Q),$.render(K,$$)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let W=this._lodMeshes.length;for(let Z=1;Z<W;Z++)this._applyGGXFilter(J,Z-1,Z);Q.autoClear=$}_applyGGXFilter(J,Q,$){let W=this._renderer,Z=this._pingPongRenderTarget,K=this._ggxMaterial,H=this._lodMeshes[$];H.material=K;let Y=K.uniforms,X=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),N=Math.sqrt(X*X-U*U),E=X*1.25,G=N*E,{_lodMax:F}=this,R=this._sizeLods[$],D=3*R*($>F-a6?$-F+a6:0),O=4*(this._cubeSize-R);Y.envMap.value=J.texture,Y.roughness.value=G,Y.mipInt.value=F-Q,o6(Z,D,O,3*R,2*R),W.setRenderTarget(Z),W.render(H,$$),Y.envMap.value=Z.texture,Y.roughness.value=0,Y.mipInt.value=F-$,o6(J,D,O,3*R,2*R),W.setRenderTarget(J),W.render(H,$$)}_blur(J,Q,$,W){let Z=this._pingPongRenderTarget,K=Math.min(W,Math.PI)/Math.SQRT2;this._blurPass(J,Z,Q,$,K),this._blurPass(Z,J,$,$,K)}_blurPass(J,Q,$,W,Z){let K=this._renderer,H=this._blurMaterial,Y=this._lodMeshes[W];Y.material=H;let X=H.uniforms;X.envMap.value=J.texture,X.sigma.value=Z,X.mipInt.value=this._lodMax-$;let U=this._sizeLods[W],N=3*U*(W>this._lodMax-a6?W-this._lodMax+a6:0),E=4*(this._cubeSize-U);o6(Q,N,E,3*U,2*U),K.setRenderTarget(Q),K.render(Y,$$)}}function J1(J){let Q=[],$=[],W=J,Z=J-a6+1+aF;for(let K=0;K<Z;K++){let H=Math.pow(2,W);Q.push(H);let Y=1/(H-2),X=-Y,U=1+Y,N=[X,X,U,X,U,U,X,X,U,U,X,U],E=6,G=6,F=3,R=new Float32Array(F*G*E),D=new Float32Array(F*G*E);for(let q=0;q<E;q++){let V=q%3*2/3-1,M=q>2?0:-1,L=[V,M,0,V+0.6666666666666666,M,0,V+0.6666666666666666,M+1,0,V,M,0,V+0.6666666666666666,M+1,0,V,M+1,0];R.set(L,F*G*q);for(let P=0;P<G;P++){let I=N[P*2]*2-1,S=N[P*2+1]*2-1;if(q===0)i7.set(1,S,I);else if(q===1)i7.set(-I,1,-S);else if(q===2)i7.set(-I,S,1);else if(q===3)i7.set(-1,S,-I);else if(q===4)i7.set(-I,-1,S);else i7.set(I,S,-1);i7.toArray(D,(q*G+P)*F)}}let O=new lJ;if(O.setAttribute("position",new tJ(R,F)),O.setAttribute("outputDirection",new tJ(D,F)),$.push(new I0(O,null)),W>a6)W--}return{lodMeshes:$,sizeLods:Q}}function iX(J,Q,$){let W=new J8(J,Q,$);return W.texture.mapping=hQ,W.texture.name="PMREM.cubeUv",W.scissorTest=!0,W}function o6(J,Q,$,W,Z){J.viewport.set(Q,$,W,Z),J.scissor.set(Q,$,W,Z)}function Q1(J,Q,$){return new rJ({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:tF,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gW(),fragmentShader:`

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
		`,blending:n8,depthTest:!1,depthWrite:!1})}function $1(J,Q,$){return new rJ({name:"SphericalGaussianBlur",defines:{SAMPLES:rF,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gW(),fragmentShader:`

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
		`,blending:n8,depthTest:!1,depthWrite:!1})}function oX(){return new rJ({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gW(),fragmentShader:`

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
		`,blending:n8,depthTest:!1,depthWrite:!1})}function aX(){return new rJ({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gW(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:n8,depthTest:!1,depthWrite:!1})}function gW(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class XH extends J8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},W=[$,$,$,$,$,$];this.texture=new MW(W),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},W=new cJ(5,5,5),Z=new rJ({name:"CubemapFromEquirect",uniforms:n7($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:L8,blending:n8});Z.uniforms.tEquirect.value=Q;let K=new I0(W,Z),H=Q.minFilter;if(Q.minFilter===A9)Q.minFilter=F8;return new nK(1,10,this).update(J,K),Q.minFilter=H,K.geometry.dispose(),K.material.dispose(),this}clear(J,Q=!0,$=!0,W=!0){let Z=J.getRenderTarget();for(let K=0;K<6;K++)J.setRenderTarget(this,K),J.clear(Q,$,W);J.setRenderTarget(Z)}}function W1(J){let Q=new WeakMap,$=new WeakMap,W=null;function Z(G,F=!1){if(G===null||G===void 0)return null;if(F)return H(G);return K(G)}function K(G){if(G&&G.isTexture){let F=G.mapping;if(F===$W||F===WW)if(Q.has(G)){let R=Q.get(G).texture;return Y(R,G.mapping)}else{let R=G.image;if(R&&R.height>0){let D=new XH(R.height);return D.fromEquirectangularTexture(J,G),Q.set(G,D),G.addEventListener("dispose",U),Y(D.texture,G.mapping)}else return null}}return G}function H(G){if(G&&G.isTexture){let F=G.mapping,R=F===$W||F===WW,D=F===b6||F===f7;if(R||D){let O=$.get(G),q=O!==void 0?O.texture.pmremVersion:0;if(G.isRenderTargetTexture&&G.pmremVersion!==q){if(W===null)W=new H$(J);return O=R?W.fromEquirectangular(G,O):W.fromCubemap(G,O),O.texture.pmremVersion=G.pmremVersion,$.set(G,O),O.texture}else if(O!==void 0)return O.texture;else{let V=G.image;if(R&&V&&V.height>0||D&&V&&X(V)){if(W===null)W=new H$(J);return O=R?W.fromEquirectangular(G):W.fromCubemap(G),O.texture.pmremVersion=G.pmremVersion,$.set(G,O),G.addEventListener("dispose",N),O.texture}else return null}}}return G}function Y(G,F){if(F===$W)G.mapping=b6;else if(F===WW)G.mapping=f7;return G}function X(G){let F=0,R=6;for(let D=0;D<R;D++)if(G[D]!==void 0)F++;return F===R}function U(G){let F=G.target;F.removeEventListener("dispose",U);let R=Q.get(F);if(R!==void 0)Q.delete(F),R.dispose()}function N(G){let F=G.target;F.removeEventListener("dispose",N);let R=$.get(F);if(R!==void 0)$.delete(F),R.dispose()}function E(){if(Q=new WeakMap,$=new WeakMap,W!==null)W.dispose(),W=null}return{get:Z,dispose:E}}function Z1(J){let Q={};function $(W){if(Q[W]!==void 0)return Q[W];let Z=J.getExtension(W);return Q[W]=Z,Z}return{has:function(W){return $(W)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(W){let Z=$(W);if(Z===null)S7("WebGLRenderer: "+W+" extension not supported.");return Z}}}function K1(J,Q,$,W){let Z={},K=new WeakMap;function H(E){let G=E.target;if(G.index!==null)Q.remove(G.index);for(let R in G.attributes)Q.remove(G.attributes[R]);G.removeEventListener("dispose",H),delete Z[G.id];let F=K.get(G);if(F)Q.remove(F),K.delete(G);if(W.releaseStatesOfGeometry(G),G.isInstancedBufferGeometry===!0)delete G._maxInstanceCount;$.memory.geometries--}function Y(E,G){if(Z[G.id]===!0)return G;return G.addEventListener("dispose",H),Z[G.id]=!0,$.memory.geometries++,G}function X(E){let G=E.attributes;for(let F in G)Q.update(G[F],J.ARRAY_BUFFER)}function U(E){let G=[],F=E.index,R=E.attributes.position,D=0;if(R===void 0)return;if(F!==null){let V=F.array;D=F.version;for(let M=0,L=V.length;M<L;M+=3){let P=V[M+0],I=V[M+1],S=V[M+2];G.push(P,I,I,S,S,P)}}else{let V=R.array;D=R.version;for(let M=0,L=V.length/3-1;M<L;M+=3){let P=M+0,I=M+1,S=M+2;G.push(P,I,I,S,S,P)}}let O=new(R.count>=65535?VW:LW)(G,1);O.version=D;let q=K.get(E);if(q)Q.remove(q);K.set(E,O)}function N(E){let G=K.get(E);if(G){let F=E.index;if(F!==null){if(G.version<F.version)U(E)}}else U(E);return K.get(E)}return{get:Y,update:X,getWireframeAttribute:N}}function H1(J,Q,$){let W;function Z(E){W=E}let K,H;function Y(E){K=E.type,H=E.bytesPerElement}function X(E,G){J.drawElements(W,G,K,E*H),$.update(G,W,1)}function U(E,G,F){if(F===0)return;J.drawElementsInstanced(W,G,K,E*H,F),$.update(G,W,F)}function N(E,G,F){if(F===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(W,G,0,K,E,0,F);let D=0;for(let O=0;O<F;O++)D+=G[O];$.update(D,W,1)}this.setMode=Z,this.setIndex=Y,this.render=X,this.renderInstances=U,this.renderMultiDraw=N}function Y1(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function W(K,H,Y){switch($.calls++,H){case J.TRIANGLES:$.triangles+=Y*(K/3);break;case J.LINES:$.lines+=Y*(K/2);break;case J.LINE_STRIP:$.lines+=Y*(K-1);break;case J.LINE_LOOP:$.lines+=Y*K;break;case J.POINTS:$.points+=Y*K;break;default:$J("WebGLInfo: Unknown draw mode:",H);break}}function Z(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:Z,update:W}}function X1(J,Q,$){let W=new WeakMap,Z=new gJ;function K(H,Y,X){let U=H.morphTargetInfluences,N=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,E=N!==void 0?N.length:0,G=W.get(Y);if(G===void 0||G.count!==E){let A=function(){S.dispose(),W.delete(Y),Y.removeEventListener("dispose",A)};if(G!==void 0)G.texture.dispose();let F=Y.morphAttributes.position!==void 0,R=Y.morphAttributes.normal!==void 0,D=Y.morphAttributes.color!==void 0,O=Y.morphAttributes.position||[],q=Y.morphAttributes.normal||[],V=Y.morphAttributes.color||[],M=0;if(F===!0)M=1;if(R===!0)M=2;if(D===!0)M=3;let L=Y.attributes.position.count*M,P=1;if(L>Q.maxTextureSize)P=Math.ceil(L/Q.maxTextureSize),L=Q.maxTextureSize;let I=new Float32Array(L*P*4*E),S=new OW(I,L,P,E);S.type=u9,S.needsUpdate=!0;let k=M*4;for(let d=0;d<E;d++){let b=O[d],g=q[d],Z0=V[d],f=L*P*4*d;for(let o=0;o<b.count;o++){let s=o*k;if(F===!0)Z.fromBufferAttribute(b,o),I[f+s+0]=Z.x,I[f+s+1]=Z.y,I[f+s+2]=Z.z,I[f+s+3]=0;if(R===!0)Z.fromBufferAttribute(g,o),I[f+s+4]=Z.x,I[f+s+5]=Z.y,I[f+s+6]=Z.z,I[f+s+7]=0;if(D===!0)Z.fromBufferAttribute(Z0,o),I[f+s+8]=Z.x,I[f+s+9]=Z.y,I[f+s+10]=Z.z,I[f+s+11]=Z0.itemSize===4?Z.w:1}}G={count:E,texture:S,size:new U0(L,P)},W.set(Y,G),Y.addEventListener("dispose",A)}if(H.isInstancedMesh===!0&&H.morphTexture!==null)X.getUniforms().setValue(J,"morphTexture",H.morphTexture,$);else{let F=0;for(let D=0;D<U.length;D++)F+=U[D];let R=Y.morphTargetsRelative?1:1-F;X.getUniforms().setValue(J,"morphTargetBaseInfluence",R),X.getUniforms().setValue(J,"morphTargetInfluences",U)}X.getUniforms().setValue(J,"morphTargetsTexture",G.texture,$),X.getUniforms().setValue(J,"morphTargetsTextureSize",G.size)}return{update:K}}function U1(J,Q,$,W,Z){let K=new WeakMap;function H(U){let N=Z.render.frame,E=U.geometry,G=Q.get(U,E);if(K.get(G)!==N)Q.update(G),K.set(G,N);if(U.isInstancedMesh){if(U.hasEventListener("dispose",X)===!1)U.addEventListener("dispose",X);if(K.get(U)!==N){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);K.set(U,N)}}if(U.isSkinnedMesh){let F=U.skeleton;if(K.get(F)!==N)F.update(),K.set(F,N)}return G}function Y(){K=new WeakMap}function X(U){let N=U.target;if(N.removeEventListener("dispose",X),W.releaseStatesOfObject(N),$.remove(N.instanceMatrix),N.instanceColor!==null)$.remove(N.instanceColor)}return{update:H,dispose:Y}}var N1={[wQ]:"LINEAR_TONE_MAPPING",[jQ]:"REINHARD_TONE_MAPPING",[yQ]:"CINEON_TONE_MAPPING",[v7]:"ACES_FILMIC_TONE_MAPPING",[fQ]:"AGX_TONE_MAPPING",[bQ]:"NEUTRAL_TONE_MAPPING",[vQ]:"CUSTOM_TONE_MAPPING"};function G1(J,Q,$,W,Z,K){let H=new J8(Q,$,{type:J,depthBuffer:Z,stencilBuffer:K,samples:W?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),Y=null,X=null,U=new lJ;U.setAttribute("position",new qJ([-1,3,0,-1,-1,0,3,-1,0],3)),U.setAttribute("uv",new qJ([0,2,0,0,2,0],2));let N=new rQ({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),E=new I0(U,N),G=new o9(-1,1,1,-1,0,1),F=null,R=null,D=!1,O,q=null,V=[],M=!1;this.setSize=function(L,P){if(H.setSize(L,P),Y!==null)Y.setSize(L,P);if(X!==null)X.setSize(L,P);for(let I=0;I<V.length;I++){let S=V[I];if(S.setSize)S.setSize(L,P)}},this.setEffects=function(L){V=L,M=V.length>0&&V[0].isRenderPass===!0;let{width:P,height:I}=H;if(V.length>0&&Y===null)Y=new J8(P,I,{type:q8,depthBuffer:!1,stencilBuffer:!1}),X=new J8(P,I,{type:q8,depthBuffer:!1,stencilBuffer:!1});for(let S=0;S<V.length;S++){let k=V[S];if(k.setSize)k.setSize(P,I)}},this.begin=function(L,P){if(D)return!1;if(L.toneMapping===U9&&V.length===0)return!1;if(q=P,P!==null){let{width:I,height:S}=P;if(H.width!==I||H.height!==S)this.setSize(I,S)}if(M===!1)L.setRenderTarget(H);return O=L.toneMapping,L.toneMapping=U9,!0},this.hasRenderPass=function(){return M},this.end=function(L,P){L.toneMapping=O,D=!0;let I=H,S=Y;for(let k=0;k<V.length;k++){let A=V[k];if(A.enabled===!1)continue;if(A.render(L,S,I,P),A.needsSwap!==!1)I=S,S=S===Y?X:Y}if(F!==L.outputColorSpace||R!==L.toneMapping){if(F=L.outputColorSpace,R=L.toneMapping,N.defines={},GJ.getTransfer(F)===pJ)N.defines.SRGB_TRANSFER="";let k=N1[R];if(k)N.defines[k]="";N.needsUpdate=!0}N.uniforms.tDiffuse.value=I.texture,L.setRenderTarget(q),L.render(E,G),q=null,D=!1},this.isCompositing=function(){return D},this.dispose=function(){if(H.dispose(),Y!==null)Y.dispose();if(X!==null)X.dispose();U.dispose(),N.dispose()}}var RU=new eJ,HH=new d7(1,1),LU=new OW,VU=new SK,DU=new MW,rX=[],tX=[],eX=new Float32Array(16),JU=new Float32Array(9),QU=new Float32Array(4);function r6(J,Q,$){let W=J[0];if(W<=0||W>0)return J;let Z=Q*$,K=rX[Z];if(K===void 0)K=new Float32Array(Z),rX[Z]=K;if(Q!==0){W.toArray(K,0);for(let H=1,Y=0;H!==Q;++H)Y+=$,J[H].toArray(K,Y)}return K}function X8(J,Q){if(J.length!==Q.length)return!1;for(let $=0,W=J.length;$<W;$++)if(J[$]!==Q[$])return!1;return!0}function U8(J,Q){for(let $=0,W=Q.length;$<W;$++)J[$]=Q[$]}function pW(J,Q){let $=tX[Q];if($===void 0)$=new Int32Array(Q),tX[Q]=$;for(let W=0;W!==Q;++W)$[W]=J.allocateTextureUnit();return $}function E1(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function F1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(X8($,Q))return;J.uniform2fv(this.addr,Q),U8($,Q)}}function q1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(X8($,Q))return;J.uniform3fv(this.addr,Q),U8($,Q)}}function O1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(X8($,Q))return;J.uniform4fv(this.addr,Q),U8($,Q)}}function R1(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(X8($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),U8($,Q)}else{if(X8($,W))return;QU.set(W),J.uniformMatrix2fv(this.addr,!1,QU),U8($,W)}}function L1(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(X8($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),U8($,Q)}else{if(X8($,W))return;JU.set(W),J.uniformMatrix3fv(this.addr,!1,JU),U8($,W)}}function V1(J,Q){let $=this.cache,W=Q.elements;if(W===void 0){if(X8($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),U8($,Q)}else{if(X8($,W))return;eX.set(W),J.uniformMatrix4fv(this.addr,!1,eX),U8($,W)}}function D1(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function B1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(X8($,Q))return;J.uniform2iv(this.addr,Q),U8($,Q)}}function k1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(X8($,Q))return;J.uniform3iv(this.addr,Q),U8($,Q)}}function M1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(X8($,Q))return;J.uniform4iv(this.addr,Q),U8($,Q)}}function C1(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function P1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(X8($,Q))return;J.uniform2uiv(this.addr,Q),U8($,Q)}}function I1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(X8($,Q))return;J.uniform3uiv(this.addr,Q),U8($,Q)}}function z1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(X8($,Q))return;J.uniform4uiv(this.addr,Q),U8($,Q)}}function A1(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;let K;if(this.type===J.SAMPLER_2D_SHADOW)HH.compareFunction=$.isReversedDepthBuffer()?qW:FW,K=HH;else K=RU;$.setTexture2D(Q||K,Z)}function _1(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTexture3D(Q||VU,Z)}function T1(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTextureCube(Q||DU,Z)}function S1(J,Q,$){let W=this.cache,Z=$.allocateTextureUnit();if(W[0]!==Z)J.uniform1i(this.addr,Z),W[0]=Z;$.setTexture2DArray(Q||LU,Z)}function w1(J){switch(J){case 5126:return E1;case 35664:return F1;case 35665:return q1;case 35666:return O1;case 35674:return R1;case 35675:return L1;case 35676:return V1;case 5124:case 35670:return D1;case 35667:case 35671:return B1;case 35668:case 35672:return k1;case 35669:case 35673:return M1;case 5125:return C1;case 36294:return P1;case 36295:return I1;case 36296:return z1;case 35678:case 36198:case 36298:case 36306:case 35682:return A1;case 35679:case 36299:case 36307:return _1;case 35680:case 36300:case 36308:case 36293:return T1;case 36289:case 36303:case 36311:case 36292:return S1}}function j1(J,Q){J.uniform1fv(this.addr,Q)}function y1(J,Q){let $=r6(Q,this.size,2);J.uniform2fv(this.addr,$)}function v1(J,Q){let $=r6(Q,this.size,3);J.uniform3fv(this.addr,$)}function f1(J,Q){let $=r6(Q,this.size,4);J.uniform4fv(this.addr,$)}function b1(J,Q){let $=r6(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function h1(J,Q){let $=r6(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function x1(J,Q){let $=r6(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function g1(J,Q){J.uniform1iv(this.addr,Q)}function p1(J,Q){J.uniform2iv(this.addr,Q)}function l1(J,Q){J.uniform3iv(this.addr,Q)}function m1(J,Q){J.uniform4iv(this.addr,Q)}function u1(J,Q){J.uniform1uiv(this.addr,Q)}function d1(J,Q){J.uniform2uiv(this.addr,Q)}function c1(J,Q){J.uniform3uiv(this.addr,Q)}function n1(J,Q){J.uniform4uiv(this.addr,Q)}function s1(J,Q,$){let W=this.cache,Z=Q.length,K=pW($,Z);if(!X8(W,K))J.uniform1iv(this.addr,K),U8(W,K);let H;if(this.type===J.SAMPLER_2D_SHADOW)H=HH;else H=RU;for(let Y=0;Y!==Z;++Y)$.setTexture2D(Q[Y]||H,K[Y])}function i1(J,Q,$){let W=this.cache,Z=Q.length,K=pW($,Z);if(!X8(W,K))J.uniform1iv(this.addr,K),U8(W,K);for(let H=0;H!==Z;++H)$.setTexture3D(Q[H]||VU,K[H])}function o1(J,Q,$){let W=this.cache,Z=Q.length,K=pW($,Z);if(!X8(W,K))J.uniform1iv(this.addr,K),U8(W,K);for(let H=0;H!==Z;++H)$.setTextureCube(Q[H]||DU,K[H])}function a1(J,Q,$){let W=this.cache,Z=Q.length,K=pW($,Z);if(!X8(W,K))J.uniform1iv(this.addr,K),U8(W,K);for(let H=0;H!==Z;++H)$.setTexture2DArray(Q[H]||LU,K[H])}function r1(J){switch(J){case 5126:return j1;case 35664:return y1;case 35665:return v1;case 35666:return f1;case 35674:return b1;case 35675:return h1;case 35676:return x1;case 5124:case 35670:return g1;case 35667:case 35671:return p1;case 35668:case 35672:return l1;case 35669:case 35673:return m1;case 5125:return u1;case 36294:return d1;case 36295:return c1;case 36296:return n1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return i1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return a1}}class BU{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=w1(Q.type)}}class kU{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=r1(Q.type)}}class MU{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let W=this.seq;for(let Z=0,K=W.length;Z!==K;++Z){let H=W[Z];H.setValue(J,Q[H.id],$)}}}var ZH=/(\w+)(\])?(\[|\.)?/g;function $U(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function t1(J,Q,$){let W=J.name,Z=W.length;ZH.lastIndex=0;while(!0){let K=ZH.exec(W),H=ZH.lastIndex,Y=K[1],X=K[2]==="]",U=K[3];if(X)Y=Y|0;if(U===void 0||U==="["&&H+2===Z){$U($,U===void 0?new BU(Y,J,Q):new kU(Y,J,Q));break}else{let E=$.map[Y];if(E===void 0)E=new MU(Y),$U($,E);$=E}}}class K${constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let K=0;K<$;++K){let H=J.getActiveUniform(Q,K),Y=J.getUniformLocation(Q,H.name);t1(H,Y,this)}let W=[],Z=[];for(let K of this.seq)if(K.type===J.SAMPLER_2D_SHADOW||K.type===J.SAMPLER_CUBE_SHADOW||K.type===J.SAMPLER_2D_ARRAY_SHADOW)W.push(K);else Z.push(K);if(W.length>0)this.seq=W.concat(Z)}setValue(J,Q,$,W){let Z=this.map[Q];if(Z!==void 0)Z.setValue(J,$,W)}setOptional(J,Q,$){let W=Q[$];if(W!==void 0)this.setValue(J,$,W)}static upload(J,Q,$,W){for(let Z=0,K=Q.length;Z!==K;++Z){let H=Q[Z],Y=$[H.id];if(Y.needsUpdate!==!1)H.setValue(J,Y.value,W)}}static seqWithValue(J,Q){let $=[];for(let W=0,Z=J.length;W!==Z;++W){let K=J[W];if(K.id in Q)$.push(K)}return $}}function WU(J,Q,$){let W=J.createShader(Q);return J.shaderSource(W,$),J.compileShader(W),W}var e1=37297,Jq=0;function Qq(J,Q){let $=J.split(`
`),W=[],Z=Math.max(Q-6,0),K=Math.min(Q+6,$.length);for(let H=Z;H<K;H++){let Y=H+1;W.push(`${Y===Q?">":" "} ${Y}: ${$[H]}`)}return W.join(`
`)}var ZU=new YJ;function $q(J){GJ._getMatrix(ZU,GJ.workingColorSpace,J);let Q=`mat3( ${ZU.elements.map(($)=>$.toFixed(4))} )`;switch(GJ.getTransfer(J)){case PK:return[Q,"LinearTransferOETF"];case pJ:return[Q,"sRGBTransferOETF"];default:return o0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function KU(J,Q,$){let W=J.getShaderParameter(Q,J.COMPILE_STATUS),K=(J.getShaderInfoLog(Q)||"").trim();if(W&&K==="")return"";let H=/ERROR: 0:(\d+)/.exec(K);if(H){let Y=parseInt(H[1]);return $.toUpperCase()+`

`+K+`

`+Qq(J.getShaderSource(Q),Y)}else return K}function Wq(J,Q){let $=$q(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var Zq={[wQ]:"Linear",[jQ]:"Reinhard",[yQ]:"Cineon",[v7]:"ACESFilmic",[fQ]:"AgX",[bQ]:"Neutral",[vQ]:"Custom"};function Kq(J,Q){let $=Zq[Q];if($===void 0)return o0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var xW=new T;function Hq(){GJ.getLuminanceCoefficients(xW);let J=xW.x.toFixed(4),Q=xW.y.toFixed(4),$=xW.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Yq(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Z$).join(`
`)}function Xq(J){let Q=[];for(let $ in J){let W=J[$];if(W===!1)continue;Q.push("#define "+$+" "+W)}return Q.join(`
`)}function Uq(J,Q){let $={},W=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let Z=0;Z<W;Z++){let K=J.getActiveAttrib(Q,Z),H=K.name,Y=1;if(K.type===J.FLOAT_MAT2)Y=2;if(K.type===J.FLOAT_MAT3)Y=3;if(K.type===J.FLOAT_MAT4)Y=4;$[H]={type:K.type,location:J.getAttribLocation(Q,H),locationSize:Y}}return $}function Z$(J){return J!==""}function HU(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function YU(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var Nq=/^[ \t]*#include +<([\w\d./]+)>/gm;function YH(J){return J.replace(Nq,Eq)}var Gq=new Map;function Eq(J,Q){let $=OJ[Q];if($===void 0){let W=Gq.get(Q);if(W!==void 0)$=OJ[W],o0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,W);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return YH($)}var Fq=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function XU(J){return J.replace(Fq,qq)}function qq(J,Q,$,W){let Z="";for(let K=parseInt(Q);K<parseInt($);K++)Z+=W.replace(/\[\s*i\s*\]/g,"[ "+K+" ]").replace(/UNROLLED_LOOP_INDEX/g,K);return Z}function UU(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var Oq={[y7]:"SHADOWMAP_TYPE_PCF",[v6]:"SHADOWMAP_TYPE_VSM"};function Rq(J){return Oq[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Lq={[b6]:"ENVMAP_TYPE_CUBE",[f7]:"ENVMAP_TYPE_CUBE",[hQ]:"ENVMAP_TYPE_CUBE_UV"};function Vq(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return Lq[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var Dq={[f7]:"ENVMAP_MODE_REFRACTION"};function Bq(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return Dq[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var kq={[EX]:"ENVMAP_BLENDING_MULTIPLY",[FX]:"ENVMAP_BLENDING_MIX",[qX]:"ENVMAP_BLENDING_ADD"};function Mq(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return kq[J.combine]||"ENVMAP_BLENDING_NONE"}function Cq(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,W=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:W,maxMip:$}}function Pq(J,Q,$,W){let Z=J.getContext(),K=$.defines,H=$.vertexShader,Y=$.fragmentShader,X=Rq($),U=Vq($),N=Bq($),E=Mq($),G=Cq($),F=Yq($),R=Xq(K),D=Z.createProgram(),O,q,V=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(O=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R].filter(Z$).join(`
`),O.length>0)O+=`
`;if(q=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R].filter(Z$).join(`
`),q.length>0)q+=`
`}else O=[UU($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+N:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(Z$).join(`
`),q=[UU($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,R,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+N:"",$.envMap?"#define "+E:"",G?"#define CUBEUV_TEXEL_WIDTH "+G.texelWidth:"",G?"#define CUBEUV_TEXEL_HEIGHT "+G.texelHeight:"",G?"#define CUBEUV_MAX_MIP "+G.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.retroreflection?"#define USE_RETROREFLECTION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+X:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==U9?"#define TONE_MAPPING":"",$.toneMapping!==U9?OJ.tonemapping_pars_fragment:"",$.toneMapping!==U9?Kq("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",OJ.colorspace_pars_fragment,Wq("linearToOutputTexel",$.outputColorSpace),Hq(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(Z$).join(`
`);if(H=YH(H),H=HU(H,$),H=YU(H,$),Y=YH(Y),Y=HU(Y,$),Y=YU(Y,$),H=XU(H),Y=XU(Y),$.isRawShaderMaterial!==!0)V=`#version 300 es
`,O=[F,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+O,q=["#define varying in",$.glslVersion===IK?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===IK?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+q;let M=V+O+H,L=V+q+Y,P=WU(Z,Z.VERTEX_SHADER,M),I=WU(Z,Z.FRAGMENT_SHADER,L);if(Z.attachShader(D,P),Z.attachShader(D,I),$.index0AttributeName!==void 0)Z.bindAttribLocation(D,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)Z.bindAttribLocation(D,0,"position");Z.linkProgram(D);function S(b){if(J.debug.checkShaderErrors){let g=Z.getProgramInfoLog(D)||"",Z0=Z.getShaderInfoLog(P)||"",f=Z.getShaderInfoLog(I)||"",o=g.trim(),s=Z0.trim(),p=f.trim(),X0=!0,a=!0;if(Z.getProgramParameter(D,Z.LINK_STATUS)===!1)if(X0=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(Z,D,P,I);else{let Y0=KU(Z,P,"vertex"),F0=KU(Z,I,"fragment");$J("WebGLProgram: Shader Error "+Z.getError()+" - VALIDATE_STATUS "+Z.getProgramParameter(D,Z.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+o+`
`+Y0+`
`+F0)}else if(o!=="")o0("WebGLProgram: Program Info Log:",o);else if(s===""||p==="")a=!1;if(a)b.diagnostics={runnable:X0,programLog:o,vertexShader:{log:s,prefix:O},fragmentShader:{log:p,prefix:q}}}Z.deleteShader(P),Z.deleteShader(I),k=new K$(Z,D),A=Uq(Z,D)}let k;this.getUniforms=function(){if(k===void 0)S(this);return k};let A;this.getAttributes=function(){if(A===void 0)S(this);return A};let d=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(d===!1)d=Z.getProgramParameter(D,e1);return d},this.destroy=function(){W.releaseStatesOfProgram(this),Z.deleteProgram(D),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=Jq++,this.cacheKey=Q,this.usedTimes=1,this.program=D,this.vertexShader=P,this.fragmentShader=I,this}var Iq=0;class CU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let W=this._getShaderCacheForMaterial(J);if(W.has(Q)===!1)W.add(Q),Q.usedTimes++;if(W.has($)===!1)W.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new PU(J),Q.set(J,$);return $}}class PU{constructor(J){this.id=Iq++,this.code=J,this.usedTimes=0}}function zq(J){return J===g7||J===NW||J===GW}function Aq(J,Q,$,W,Z,K){let H=new RW,Y=new CU,X=new Set,U=[],N=new Map,E=W.logarithmicDepthBuffer,G=W.precision,F={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(k){if(X.add(k),k===0)return"uv";return`uv${k}`}function D(k,A,d,b,g,Z0){let f=b.fog,o=g.geometry,s=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?b.environment:null,p=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,X0=Q.get(k.envMap||s,p),a=!!X0&&X0.mapping===hQ?X0.image.height:null,Y0=F[k.type];if(k.precision!==null){if(G=W.getMaxPrecision(k.precision),G!==k.precision)o0("WebGLProgram.getParameters:",k.precision,"not supported, using",G,"instead.")}let F0=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,r0=F0!==void 0?F0.length:0,T0=0;if(o.morphAttributes.position!==void 0)T0=1;if(o.morphAttributes.normal!==void 0)T0=2;if(o.morphAttributes.color!==void 0)T0=3;let x0,e0,Q0,w;if(Y0){let uJ=j9[Y0];x0=uJ.vertexShader,e0=uJ.fragmentShader}else{x0=k.vertexShader,e0=k.fragmentShader;let uJ=Y.getVertexShaderStage(k),SJ=Y.getFragmentShaderStage(k);Y.update(k,uJ,SJ),Q0=uJ.id,w=SJ.id}let x=J.getRenderTarget(),l=J.state.buffers.depth.getReversed(),e=g.isInstancedMesh===!0,t=g.isBatchedMesh===!0,D0=!!k.map,L0=!!k.matcap,N0=!!X0,g0=!!k.aoMap,c0=!!k.lightMap,kJ=!!k.bumpMap&&k.wireframe===!1,j0=!!k.normalMap,MJ=!!k.displacementMap,_J=!!k.emissiveMap,bJ=!!k.metalnessMap,y=!!k.roughnessMap,nJ=k.anisotropy>0,XJ=k.clearcoat>0,RJ=k.dispersion>0,z=k.retroreflectivity>0,B=k.iridescence>0,j=k.sheen>0,i=k.transmission>0,q0=nJ&&!!k.anisotropyMap,B0=XJ&&!!k.clearcoatMap,z0=XJ&&!!k.clearcoatNormalMap,$0=XJ&&!!k.clearcoatRoughnessMap,H0=B&&!!k.iridescenceMap,k0=B&&!!k.iridescenceThicknessMap,n0=j&&!!k.sheenColorMap,M0=j&&!!k.sheenRoughnessMap,V0=!!k.specularMap,t0=!!k.specularColorMap,a0=!!k.specularIntensityMap,CJ=i&&!!k.transmissionMap,h=i&&!!k.thicknessMap,A0=!!k.gradientMap,W0=!!k.alphaMap,P0=k.alphaTest>0,v0=!!k.alphaHash,O0=!!k.extensions,S0=U9;if(k.toneMapped){if(x===null||x.isXRRenderTarget===!0)S0=J.toneMapping}let ZJ={shaderID:Y0,shaderType:k.type,shaderName:k.name,vertexShader:x0,fragmentShader:e0,defines:k.defines,customVertexShaderID:Q0,customFragmentShaderID:w,isRawShaderMaterial:k.isRawShaderMaterial===!0,glslVersion:k.glslVersion,precision:G,batching:t,batchingColor:t&&g._colorsTexture!==null,instancing:e,instancingColor:e&&g.instanceColor!==null,instancingMorph:e&&g.morphTexture!==null,outputColorSpace:x===null?J.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:GJ.workingColorSpace,alphaToCoverage:!!k.alphaToCoverage,map:D0,matcap:L0,envMap:N0,envMapMode:N0&&X0.mapping,envMapCubeUVHeight:a,aoMap:g0,lightMap:c0,bumpMap:kJ,normalMap:j0,displacementMap:MJ,emissiveMap:_J,normalMapObjectSpace:j0&&k.normalMapType===MX,normalMapTangentSpace:j0&&k.normalMapType===CK,packedNormalMap:j0&&k.normalMapType===CK&&zq(k.normalMap.format),metalnessMap:bJ,roughnessMap:y,anisotropy:nJ,anisotropyMap:q0,clearcoat:XJ,clearcoatMap:B0,clearcoatNormalMap:z0,clearcoatRoughnessMap:$0,dispersion:RJ,retroreflection:z,iridescence:B,iridescenceMap:H0,iridescenceThicknessMap:k0,sheen:j,sheenColorMap:n0,sheenRoughnessMap:M0,specularMap:V0,specularColorMap:t0,specularIntensityMap:a0,transmission:i,transmissionMap:CJ,thicknessMap:h,gradientMap:A0,opaque:k.transparent===!1&&k.blending===SQ&&k.alphaToCoverage===!1,alphaMap:W0,alphaTest:P0,alphaHash:v0,combine:k.combine,mapUv:D0&&R(k.map.channel),aoMapUv:g0&&R(k.aoMap.channel),lightMapUv:c0&&R(k.lightMap.channel),bumpMapUv:kJ&&R(k.bumpMap.channel),normalMapUv:j0&&R(k.normalMap.channel),displacementMapUv:MJ&&R(k.displacementMap.channel),emissiveMapUv:_J&&R(k.emissiveMap.channel),metalnessMapUv:bJ&&R(k.metalnessMap.channel),roughnessMapUv:y&&R(k.roughnessMap.channel),anisotropyMapUv:q0&&R(k.anisotropyMap.channel),clearcoatMapUv:B0&&R(k.clearcoatMap.channel),clearcoatNormalMapUv:z0&&R(k.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$0&&R(k.clearcoatRoughnessMap.channel),iridescenceMapUv:H0&&R(k.iridescenceMap.channel),iridescenceThicknessMapUv:k0&&R(k.iridescenceThicknessMap.channel),sheenColorMapUv:n0&&R(k.sheenColorMap.channel),sheenRoughnessMapUv:M0&&R(k.sheenRoughnessMap.channel),specularMapUv:V0&&R(k.specularMap.channel),specularColorMapUv:t0&&R(k.specularColorMap.channel),specularIntensityMapUv:a0&&R(k.specularIntensityMap.channel),transmissionMapUv:CJ&&R(k.transmissionMap.channel),thicknessMapUv:h&&R(k.thicknessMap.channel),alphaMapUv:W0&&R(k.alphaMap.channel),vertexTangents:!!o.attributes.tangent&&(j0||nJ),vertexNormals:!!o.attributes.normal,vertexColors:k.vertexColors,vertexAlphas:k.vertexColors===!0&&!!o.attributes.color&&o.attributes.color.itemSize===4,pointsUvs:g.isPoints===!0&&!!o.attributes.uv&&(D0||W0),fog:!!f,useFog:k.fog===!0,fogExp2:!!f&&f.isFogExp2,flatShading:k.wireframe===!1&&(k.flatShading===!0||o.attributes.normal===void 0&&j0===!1&&(k.isMeshLambertMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isMeshPhysicalMaterial)),sizeAttenuation:k.sizeAttenuation===!0,logarithmicDepthBuffer:E,reversedDepthBuffer:l,skinning:g.isSkinnedMesh===!0,hasPositionAttribute:o.attributes.position!==void 0,morphTargets:o.morphAttributes.position!==void 0,morphNormals:o.morphAttributes.normal!==void 0,morphColors:o.morphAttributes.color!==void 0,morphTargetsCount:r0,morphTextureStride:T0,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:Z0.length,numClippingPlanes:K.numPlanes,numClipIntersection:K.numIntersection,dithering:k.dithering,shadowMapEnabled:J.shadowMap.enabled&&d.length>0,shadowMapType:J.shadowMap.type,toneMapping:S0,decodeVideoTexture:D0&&k.map.isVideoTexture===!0&&GJ.getTransfer(k.map.colorSpace)===pJ,decodeVideoTextureEmissive:_J&&k.emissiveMap.isVideoTexture===!0&&GJ.getTransfer(k.emissiveMap.colorSpace)===pJ,premultipliedAlpha:k.premultipliedAlpha,doubleSided:k.side===sJ,flipSided:k.side===L8,useDepthPacking:k.depthPacking>=0,depthPacking:k.depthPacking||0,index0AttributeName:k.index0AttributeName,extensionClipCullDistance:O0&&k.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(O0&&k.extensions.multiDraw===!0||t)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:k.customProgramCacheKey()};return ZJ.vertexUv1s=X.has(1),ZJ.vertexUv2s=X.has(2),ZJ.vertexUv3s=X.has(3),X.clear(),ZJ}function O(k){let A=[];if(k.shaderID)A.push(k.shaderID);else A.push(k.customVertexShaderID),A.push(k.customFragmentShaderID);if(k.defines!==void 0)for(let d in k.defines)A.push(d),A.push(k.defines[d]);if(k.isRawShaderMaterial===!1)q(A,k),V(A,k),A.push(J.outputColorSpace);return A.push(k.customProgramCacheKey),A.join()}function q(k,A){k.push(A.precision),k.push(A.outputColorSpace),k.push(A.envMapMode),k.push(A.envMapCubeUVHeight),k.push(A.mapUv),k.push(A.alphaMapUv),k.push(A.lightMapUv),k.push(A.aoMapUv),k.push(A.bumpMapUv),k.push(A.normalMapUv),k.push(A.displacementMapUv),k.push(A.emissiveMapUv),k.push(A.metalnessMapUv),k.push(A.roughnessMapUv),k.push(A.anisotropyMapUv),k.push(A.clearcoatMapUv),k.push(A.clearcoatNormalMapUv),k.push(A.clearcoatRoughnessMapUv),k.push(A.iridescenceMapUv),k.push(A.iridescenceThicknessMapUv),k.push(A.sheenColorMapUv),k.push(A.sheenRoughnessMapUv),k.push(A.specularMapUv),k.push(A.specularColorMapUv),k.push(A.specularIntensityMapUv),k.push(A.transmissionMapUv),k.push(A.thicknessMapUv),k.push(A.combine),k.push(A.fogExp2),k.push(A.sizeAttenuation),k.push(A.morphTargetsCount),k.push(A.morphAttributeCount),k.push(A.numSunLights),k.push(A.numDirLights),k.push(A.numPointLights),k.push(A.numSpotLights),k.push(A.numSpotLightMaps),k.push(A.numHemiLights),k.push(A.numRectAreaLights),k.push(A.numSunLightShadows),k.push(A.numDirLightShadows),k.push(A.numPointLightShadows),k.push(A.numSpotLightShadows),k.push(A.numSpotLightShadowsWithMaps),k.push(A.numLightProbes),k.push(A.shadowMapType),k.push(A.toneMapping),k.push(A.numClippingPlanes),k.push(A.numClipIntersection),k.push(A.depthPacking)}function V(k,A){if(H.disableAll(),A.instancing)H.enable(0);if(A.instancingColor)H.enable(1);if(A.instancingMorph)H.enable(2);if(A.matcap)H.enable(3);if(A.envMap)H.enable(4);if(A.normalMapObjectSpace)H.enable(5);if(A.normalMapTangentSpace)H.enable(6);if(A.clearcoat)H.enable(7);if(A.iridescence)H.enable(8);if(A.alphaTest)H.enable(9);if(A.vertexColors)H.enable(10);if(A.vertexAlphas)H.enable(11);if(A.vertexUv1s)H.enable(12);if(A.vertexUv2s)H.enable(13);if(A.vertexUv3s)H.enable(14);if(A.vertexTangents)H.enable(15);if(A.anisotropy)H.enable(16);if(A.alphaHash)H.enable(17);if(A.batching)H.enable(18);if(A.dispersion)H.enable(19);if(A.retroreflection)H.enable(24);if(A.batchingColor)H.enable(20);if(A.gradientMap)H.enable(21);if(A.packedNormalMap)H.enable(22);if(A.vertexNormals)H.enable(23);if(k.push(H.mask),H.disableAll(),A.fog)H.enable(0);if(A.useFog)H.enable(1);if(A.flatShading)H.enable(2);if(A.logarithmicDepthBuffer)H.enable(3);if(A.reversedDepthBuffer)H.enable(4);if(A.skinning)H.enable(5);if(A.morphTargets)H.enable(6);if(A.morphNormals)H.enable(7);if(A.morphColors)H.enable(8);if(A.premultipliedAlpha)H.enable(9);if(A.shadowMapEnabled)H.enable(10);if(A.doubleSided)H.enable(11);if(A.flipSided)H.enable(12);if(A.useDepthPacking)H.enable(13);if(A.dithering)H.enable(14);if(A.transmission)H.enable(15);if(A.sheen)H.enable(16);if(A.opaque)H.enable(17);if(A.pointsUvs)H.enable(18);if(A.decodeVideoTexture)H.enable(19);if(A.decodeVideoTextureEmissive)H.enable(20);if(A.alphaToCoverage)H.enable(21);if(A.numLightProbeGrids>0)H.enable(22);if(A.hasPositionAttribute)H.enable(23);k.push(H.mask)}function M(k){let A=F[k.type],d;if(A){let b=j9[A];d=c9.clone(b.uniforms)}else d=k.uniforms;return d}function L(k,A){let d=N.get(A);if(d!==void 0)++d.usedTimes;else d=new Pq(J,A,k,Z),U.push(d),N.set(A,d);return d}function P(k){if(--k.usedTimes===0){let A=U.indexOf(k);U[A]=U[U.length-1],U.pop(),N.delete(k.cacheKey),k.destroy()}}function I(k){Y.remove(k)}function S(){Y.dispose()}return{getParameters:D,getProgramCacheKey:O,getUniforms:M,acquireProgram:L,releaseProgram:P,releaseShaderCache:I,programs:U,dispose:S}}function _q(){let J=new WeakMap;function Q(H){return J.has(H)}function $(H){let Y=J.get(H);if(Y===void 0)Y={},J.set(H,Y);return Y}function W(H){J.delete(H)}function Z(H,Y,X){J.get(H)[Y]=X}function K(){J=new WeakMap}return{has:Q,get:$,remove:W,update:Z,dispose:K}}function Tq(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function NU(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function GU(){let J=[],Q=0,$=[],W=[],Z=[];function K(){Q=0,$.length=0,W.length=0,Z.length=0}function H(G){let F=0;if(G.isInstancedMesh)F+=2;if(G.isSkinnedMesh)F+=1;return F}function Y(G,F,R,D,O,q){let V=J[Q];if(V===void 0)V={id:G.id,object:G,geometry:F,material:R,materialVariant:H(G),groupOrder:D,renderOrder:G.renderOrder,z:O,group:q},J[Q]=V;else V.id=G.id,V.object=G,V.geometry=F,V.material=R,V.materialVariant=H(G),V.groupOrder=D,V.renderOrder=G.renderOrder,V.z=O,V.group=q;return Q++,V}function X(G,F,R,D,O,q,V){if(V.reversedDepth===!0)O=-O;let M=Y(G,F,R,D,O,q);if(R.transmission>0)W.push(M);else if(R.transparent===!0)Z.push(M);else $.push(M)}function U(G,F,R,D,O,q){let V=Y(G,F,R,D,O,q);if(R.transmission>0)W.unshift(V);else if(R.transparent===!0)Z.unshift(V);else $.unshift(V)}function N(G,F){if($.length>1)$.sort(G||Tq);if(W.length>1)W.sort(F||NU);if(Z.length>1)Z.sort(F||NU)}function E(){for(let G=Q,F=J.length;G<F;G++){let R=J[G];if(R.id===null)break;R.id=null,R.object=null,R.geometry=null,R.material=null,R.group=null}}return{opaque:$,transmissive:W,transparent:Z,init:K,push:X,unshift:U,finish:E,sort:N}}function Sq(){let J=new WeakMap;function Q(W,Z){let K=J.get(W),H;if(K===void 0)H=new GU,J.set(W,[H]);else if(Z>=K.length)H=new GU,K.push(H);else H=K[Z];return H}function $(){J=new WeakMap}return{get:Q,dispose:$}}function wq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={direction:new T,color:new h0};break;case"SpotLight":$={position:new T,direction:new T,color:new h0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new T,color:new h0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new T,skyColor:new h0,groundColor:new h0};break;case"RectAreaLight":$={color:new h0,position:new T,halfWidth:new T,halfHeight:new T};break}return J[Q.id]=$,$}}}function jq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new U0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var yq=0;function vq(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function fq(J){let Q=new wq,$=jq(),W={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)W.probe.push(new T);let Z=new T,K=new QJ,H=new QJ;function Y(U){let N=0,E=0,G=0;for(let g=0;g<9;g++)W.probe[g].set(0,0,0);let F=0,R=0,D=0,O=0,q=0,V=0,M=0,L=0,P=0,I=0,S=0,k=0,A=0,d=0;U.sort(vq);for(let g=0,Z0=U.length;g<Z0;g++){let f=U[g],o=f.color,s=f.intensity,p=f.distance,X0=null;if(f.shadow&&f.shadow.map)if(f.shadow.map.texture.format===g7)X0=f.shadow.map.texture;else X0=f.shadow.map.depthTexture||f.shadow.map.texture;if(f.isAmbientLight)N+=o.r*s,E+=o.g*s,G+=o.b*s;else if(f.isLightProbe){for(let a=0;a<9;a++)W.probe[a].addScaledVector(f.sh.coefficients[a],s);d++}else if(f.isSunLight){let a=Q.get(f);if(a.color.copy(f.color).multiplyScalar(f.intensity),f.castShadow){let Y0=f.shadow,F0=$.get(f);F0.shadowIntensity=Y0.intensity,F0.shadowBias=Y0.bias,F0.shadowNormalBias=Y0.normalBias,F0.shadowRadius=Y0.radius,F0.shadowMapSize.copy(Y0.mapSize).multiply(Y0.getFrameExtents()),W.sunShadow[R]=F0,W.sunShadowMap[R]=X0;let r0=Y0.getViewportCount();for(let T0=0;T0<r0;T0++)W.sunShadowMatrix[D+T0]=Y0.getMatrix(T0),W.sunShadowCascade[D+T0]=Y0._cascadeData[T0];D+=r0,R++}W.sun[F]=a,F++}else if(f.isDirectionalLight){let a=Q.get(f);if(a.color.copy(f.color).multiplyScalar(f.intensity),f.castShadow){let Y0=f.shadow,F0=$.get(f);F0.shadowIntensity=Y0.intensity,F0.shadowBias=Y0.bias,F0.shadowNormalBias=Y0.normalBias,F0.shadowRadius=Y0.radius,F0.shadowMapSize=Y0.mapSize,W.directionalShadow[O]=F0,W.directionalShadowMap[O]=X0,W.directionalShadowMatrix[O]=f.shadow.matrix,P++}W.directional[O]=a,O++}else if(f.isSpotLight){let a=Q.get(f);a.position.setFromMatrixPosition(f.matrixWorld),a.color.copy(o).multiplyScalar(s),a.distance=p,a.coneCos=Math.cos(f.angle),a.penumbraCos=Math.cos(f.angle*(1-f.penumbra)),a.decay=f.decay,W.spot[V]=a;let Y0=f.shadow;if(f.map){if(W.spotLightMap[k]=f.map,k++,Y0.updateMatrices(f),f.castShadow)A++}if(W.spotLightMatrix[V]=Y0.matrix,f.castShadow){let F0=$.get(f);F0.shadowIntensity=Y0.intensity,F0.shadowBias=Y0.bias,F0.shadowNormalBias=Y0.normalBias,F0.shadowRadius=Y0.radius,F0.shadowMapSize=Y0.mapSize,W.spotShadow[V]=F0,W.spotShadowMap[V]=X0,S++}V++}else if(f.isRectAreaLight){let a=Q.get(f);a.color.copy(o).multiplyScalar(s),a.halfWidth.set(f.width*0.5,0,0),a.halfHeight.set(0,f.height*0.5,0),W.rectArea[M]=a,M++}else if(f.isPointLight){let a=Q.get(f);if(a.color.copy(f.color).multiplyScalar(f.intensity),a.distance=f.distance,a.decay=f.decay,f.castShadow){let Y0=f.shadow,F0=$.get(f);F0.shadowIntensity=Y0.intensity,F0.shadowBias=Y0.bias,F0.shadowNormalBias=Y0.normalBias,F0.shadowRadius=Y0.radius,F0.shadowMapSize=Y0.mapSize,F0.shadowCameraNear=Y0.camera.near,F0.shadowCameraFar=Y0.camera.far,W.pointShadow[q]=F0,W.pointShadowMap[q]=X0,W.pointShadowMatrix[q]=f.shadow.matrix,I++}W.point[q]=a,q++}else if(f.isHemisphereLight){let a=Q.get(f);a.skyColor.copy(f.color).multiplyScalar(s),a.groundColor.copy(f.groundColor).multiplyScalar(s),W.hemi[L]=a,L++}}if(M>0)if(J.has("OES_texture_float_linear")===!0)W.rectAreaLTC1=y0.LTC_FLOAT_1,W.rectAreaLTC2=y0.LTC_FLOAT_2;else W.rectAreaLTC1=y0.LTC_HALF_1,W.rectAreaLTC2=y0.LTC_HALF_2;W.ambient[0]=N,W.ambient[1]=E,W.ambient[2]=G;let b=W.hash;if(b.sunLength!==F||b.directionalLength!==O||b.pointLength!==q||b.spotLength!==V||b.rectAreaLength!==M||b.hemiLength!==L||b.numSunShadows!==R||b.numDirectionalShadows!==P||b.numPointShadows!==I||b.numSpotShadows!==S||b.numSpotMaps!==k||b.numLightProbes!==d)W.sun.length=F,W.directional.length=O,W.spot.length=V,W.rectArea.length=M,W.point.length=q,W.hemi.length=L,W.sunShadow.length=R,W.sunShadowMap.length=R,W.sunShadowMatrix.length=D,W.sunShadowCascade.length=D,W.directionalShadow.length=P,W.directionalShadowMap.length=P,W.directionalShadowMatrix.length=P,W.pointShadow.length=I,W.pointShadowMap.length=I,W.pointShadowMatrix.length=I,W.spotShadow.length=S,W.spotShadowMap.length=S,W.spotLightMatrix.length=S+k-A,W.spotLightMap.length=k,W.numSpotLightShadowsWithMaps=A,W.numLightProbes=d,b.sunLength=F,b.directionalLength=O,b.pointLength=q,b.spotLength=V,b.rectAreaLength=M,b.hemiLength=L,b.numSunShadows=R,b.numDirectionalShadows=P,b.numPointShadows=I,b.numSpotShadows=S,b.numSpotMaps=k,b.numLightProbes=d,W.version=yq++}function X(U,N){let E=0,G=0,F=0,R=0,D=0,O=0,q=N.matrixWorldInverse;for(let V=0,M=U.length;V<M;V++){let L=U[V];if(L.isSunLight){let P=W.sun[E];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(q),E++}else if(L.isDirectionalLight){let P=W.directional[G];P.direction.setFromMatrixPosition(L.matrixWorld),Z.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(Z),P.direction.transformDirection(q),G++}else if(L.isSpotLight){let P=W.spot[R];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(q),P.direction.setFromMatrixPosition(L.matrixWorld),Z.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(Z),P.direction.transformDirection(q),R++}else if(L.isRectAreaLight){let P=W.rectArea[D];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(q),H.identity(),K.copy(L.matrixWorld),K.premultiply(q),H.extractRotation(K),P.halfWidth.set(L.width*0.5,0,0),P.halfHeight.set(0,L.height*0.5,0),P.halfWidth.applyMatrix4(H),P.halfHeight.applyMatrix4(H),D++}else if(L.isPointLight){let P=W.point[F];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(q),F++}else if(L.isHemisphereLight){let P=W.hemi[O];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(q),O++}}}return{setup:Y,setupView:X,state:W}}function EU(J){let Q=new fq(J),$=[],W=[],Z=[];function K(G){E.camera=G,$.length=0,W.length=0,Z.length=0}function H(G){$.push(G)}function Y(G){W.push(G)}function X(G){Z.push(G)}function U(){Q.setup($)}function N(G){Q.setupView($,G)}let E={lightsArray:$,shadowsArray:W,lightProbeGridArray:Z,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:K,state:E,setupLights:U,setupLightsView:N,pushLight:H,pushShadow:Y,pushLightProbeGrid:X}}function bq(J){let Q=new WeakMap;function $(Z,K=0){let H=Q.get(Z),Y;if(H===void 0)Y=new EU(J),Q.set(Z,[Y]);else if(K>=H.length)Y=new EU(J),H.push(Y);else Y=H[K];return Y}function W(){Q=new WeakMap}return{get:$,dispose:W}}var hq=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xq=`uniform sampler2D shadow_pass;
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
}`,gq=[new T(1,0,0),new T(-1,0,0),new T(0,1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1)],pq=[new T(0,-1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1),new T(0,-1,0),new T(0,-1,0)],FU=new QJ,W$=new T,KH=new T;function lq(J,Q,$){let W=new cQ,Z=new U0,K=new U0,H=new gJ,Y=new xK,X=new gK,U={},N=$.maxTextureSize,E={[U7]:L8,[L8]:U7,[sJ]:sJ},G=new rJ({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new U0},radius:{value:4}},vertexShader:hq,fragmentShader:xq}),F=G.clone();F.defines.HORIZONTAL_PASS=1;let R=new lJ;R.setAttribute("position",new tJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let D=new I0(R,G),O=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=y7;let q=this.type;this.render=function(I,S,k){if(O.enabled===!1)return;if(O.autoUpdate===!1&&O.needsUpdate===!1)return;if(I.length===0)return;if(this.type===xY)o0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=y7;let A=J.getRenderTarget(),d=J.getActiveCubeFace(),b=J.getActiveMipmapLevel(),g=J.state;if(g.setBlending(n8),g.buffers.depth.getReversed()===!0)g.buffers.color.setClear(0,0,0,0);else g.buffers.color.setClear(1,1,1,1);g.buffers.depth.setTest(!0),g.setScissorTest(!1);let Z0=q!==this.type;if(Z0)S.traverse(function(f){if(f.material)if(Array.isArray(f.material))f.material.forEach((o)=>o.needsUpdate=!0);else f.material.needsUpdate=!0});for(let f=0,o=I.length;f<o;f++){let s=I[f],p=s.shadow;if(p===void 0){o0("WebGLShadowMap:",s,"has no shadow.");continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;Z.copy(p.mapSize);let X0=p.getFrameExtents();if(Z.multiply(X0),K.copy(p.mapSize),Z.x>N||Z.y>N){if(Z.x>N)K.x=Math.floor(N/X0.x),Z.x=K.x*X0.x,p.mapSize.x=K.x;if(Z.y>N)K.y=Math.floor(N/X0.y),Z.y=K.y*X0.y,p.mapSize.y=K.y}let a=J.state.buffers.depth.getReversed();if(p.camera._reversedDepth=a,p.map===null||Z0===!0){if(p.map!==null){if(p.map.depthTexture!==null)p.map.depthTexture.dispose(),p.map.depthTexture=null;p.map.dispose()}if(this.type===v6){if(s.isPointLight){o0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}p.map=new J8(Z.x,Z.y,{format:g7,type:q8,minFilter:F8,magFilter:F8,generateMipmaps:!1}),p.map.texture.name=s.name+".shadowMap",p.map.depthTexture=new d7(Z.x,Z.y,u9),p.map.depthTexture.name=s.name+".shadowMapDepth",p.map.depthTexture.format=h7,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=N9,p.map.depthTexture.magFilter=N9}else{if(s.isPointLight)p.map=new XH(Z.x),p.map.depthTexture=new wK(Z.x,G7);else p.map=new J8(Z.x,Z.y),p.map.depthTexture=new d7(Z.x,Z.y,G7);if(p.map.depthTexture.name=s.name+".shadowMap",p.map.depthTexture.format=h7,this.type===y7)p.map.depthTexture.compareFunction=a?qW:FW,p.map.depthTexture.minFilter=F8,p.map.depthTexture.magFilter=F8;else p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=N9,p.map.depthTexture.magFilter=N9}p.camera.updateProjectionMatrix()}if(p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==Z.x||p.map.height!==Z.y))p.map.setSize(Z.x,Z.y);let Y0=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();if(s.isPointLight!==!0)p.updateMatrices(s,k);for(let F0=0;F0<Y0;F0++){let r0=p.getCamera(F0);if(s.isPointLight){let{camera:T0,matrix:x0}=p,e0=s.distance||T0.far;if(e0!==T0.far)T0.far=e0,T0.updateProjectionMatrix();W$.setFromMatrixPosition(s.matrixWorld),T0.position.copy(W$),KH.copy(T0.position),KH.add(gq[F0]),T0.up.copy(pq[F0]),T0.lookAt(KH),T0.updateMatrixWorld(),x0.makeTranslation(-W$.x,-W$.y,-W$.z),FU.multiplyMatrices(T0.projectionMatrix,T0.matrixWorldInverse),p._frustum.setFromProjectionMatrix(FU,T0.coordinateSystem,T0.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)J.setRenderTarget(p.map,F0),J.clear();else{if(F0===0)J.setRenderTarget(p.map),J.clear();let T0=p.getViewport(F0);H.set(K.x*T0.x,K.y*T0.y,K.x*T0.z,K.y*T0.w),g.viewport(H)}W=p.getFrustum(F0),L(S,k,r0,s,this.type)}if(p.isPointLightShadow!==!0&&this.type===v6)V(p,k);p.needsUpdate=!1}q=this.type,O.needsUpdate=!1,J.setRenderTarget(A,d,b)};function V(I,S){let k=Q.update(D);if(G.defines.VSM_SAMPLES!==I.blurSamples)G.defines.VSM_SAMPLES=I.blurSamples,F.defines.VSM_SAMPLES=I.blurSamples,G.needsUpdate=!0,F.needsUpdate=!0;if(I.mapPass===null)I.mapPass=new J8(Z.x,Z.y,{format:g7,type:q8});else if(I.mapPass.width!==I.map.width||I.mapPass.height!==I.map.height)I.mapPass.setSize(I.map.width,I.map.height);G.uniforms.shadow_pass.value=I.map.depthTexture,G.uniforms.resolution.value.set(I.map.width,I.map.height),G.uniforms.radius.value=I.radius,J.setRenderTarget(I.mapPass),J.clear(),J.renderBufferDirect(S,null,k,G,D,null),F.uniforms.shadow_pass.value=I.mapPass.texture,F.uniforms.resolution.value.set(I.map.width,I.map.height),F.uniforms.radius.value=I.radius,J.setRenderTarget(I.map),J.clear(),J.renderBufferDirect(S,null,k,F,D,null)}function M(I,S,k,A){let d=null,b=k.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(b!==void 0)d=b;else if(d=k.isPointLight===!0?X:Y,J.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){let g=d.uuid,Z0=S.uuid,f=U[g];if(f===void 0)f={},U[g]=f;let o=f[Z0];if(o===void 0)o=d.clone(),f[Z0]=o,S.addEventListener("dispose",P);d=o}if(d.visible=S.visible,d.wireframe=S.wireframe,A===v6)d.side=S.shadowSide!==null?S.shadowSide:S.side;else d.side=S.shadowSide!==null?S.shadowSide:E[S.side];if(d.alphaMap=S.alphaMap,d.alphaTest=S.alphaToCoverage===!0?0.5:S.alphaTest,d.map=S.map,d.clipShadows=S.clipShadows,d.clippingPlanes=S.clippingPlanes,d.clipIntersection=S.clipIntersection,d.displacementMap=S.displacementMap,d.displacementScale=S.displacementScale,d.displacementBias=S.displacementBias,d.wireframeLinewidth=S.wireframeLinewidth,d.linewidth=S.linewidth,k.isPointLight===!0&&d.isMeshDistanceMaterial===!0){let g=J.properties.get(d);g.light=k}return d}function L(I,S,k,A,d){if(I.visible===!1)return;if(I.layers.test(S.layers)&&(I.isMesh||I.isLine||I.isPoints)){if((I.castShadow||I.receiveShadow&&d===v6)&&(!I.frustumCulled||I.intersectsFrustum(W))){I.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,I.matrixWorld);let Z0=Q.update(I),f=I.material;if(Array.isArray(f)){let o=Z0.groups;for(let s=0,p=o.length;s<p;s++){let X0=o[s],a=f[X0.materialIndex];if(a&&a.visible){let Y0=M(I,a,A,d);I.onBeforeShadow(J,I,S,k,Z0,Y0,X0),J.renderBufferDirect(k,null,Z0,Y0,I,X0),I.onAfterShadow(J,I,S,k,Z0,Y0,X0)}}}else if(f.visible){let o=M(I,f,A,d);I.onBeforeShadow(J,I,S,k,Z0,o,null),J.renderBufferDirect(k,null,Z0,o,I,null),I.onAfterShadow(J,I,S,k,Z0,o,null)}}}let g=I.children;for(let Z0=0,f=g.length;Z0<f;Z0++)L(g[Z0],S,k,A,d)}function P(I){I.target.removeEventListener("dispose",P);for(let k in U){let A=U[k],d=I.target.uuid;if(d in A)A[d].dispose(),delete A[d]}}}function mq(J,Q){function $(){let h=!1,A0=new gJ,W0=null,P0=new gJ(0,0,0,0);return{setMask:function(v0){if(W0!==v0&&!h)J.colorMask(v0,v0,v0,v0),W0=v0},setLocked:function(v0){h=v0},setClear:function(v0,O0,S0,ZJ,uJ){if(uJ===!0)v0*=ZJ,O0*=ZJ,S0*=ZJ;if(A0.set(v0,O0,S0,ZJ),P0.equals(A0)===!1)J.clearColor(v0,O0,S0,ZJ),P0.copy(A0)},reset:function(){h=!1,W0=null,P0.set(-1,0,0,0)}}}function W(){let h=!1,A0=!1,W0=null,P0=null,v0=null;return{setReversed:function(O0){if(A0!==O0){let S0=Q.get("EXT_clip_control");if(O0)S0.clipControlEXT(S0.LOWER_LEFT_EXT,S0.ZERO_TO_ONE_EXT);else S0.clipControlEXT(S0.LOWER_LEFT_EXT,S0.NEGATIVE_ONE_TO_ONE_EXT);A0=O0;let ZJ=v0;v0=null,this.setClear(ZJ)}},getReversed:function(){return A0},setTest:function(O0){if(O0)x(J.DEPTH_TEST);else l(J.DEPTH_TEST)},setMask:function(O0){if(W0!==O0&&!h)J.depthMask(O0),W0=O0},setFunc:function(O0){if(A0)O0=jX[O0];if(P0!==O0){switch(O0){case KX:J.depthFunc(J.NEVER);break;case HX:J.depthFunc(J.ALWAYS);break;case YX:J.depthFunc(J.LESS);break;case xZ:J.depthFunc(J.LEQUAL);break;case XX:J.depthFunc(J.EQUAL);break;case UX:J.depthFunc(J.GEQUAL);break;case NX:J.depthFunc(J.GREATER);break;case GX:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}P0=O0}},setLocked:function(O0){h=O0},setClear:function(O0){if(v0!==O0){if(v0=O0,A0)O0=1-O0;J.clearDepth(O0)}},reset:function(){h=!1,W0=null,P0=null,v0=null,A0=!1}}}function Z(){let h=!1,A0=null,W0=null,P0=null,v0=null,O0=null,S0=null,ZJ=null,uJ=null;return{setTest:function(SJ){if(!h)if(SJ)x(J.STENCIL_TEST);else l(J.STENCIL_TEST)},setMask:function(SJ){if(A0!==SJ&&!h)J.stencilMask(SJ),A0=SJ},setFunc:function(SJ,l8,Q9){if(W0!==SJ||P0!==l8||v0!==Q9)J.stencilFunc(SJ,l8,Q9),W0=SJ,P0=l8,v0=Q9},setOp:function(SJ,l8,Q9){if(O0!==SJ||S0!==l8||ZJ!==Q9)J.stencilOp(SJ,l8,Q9),O0=SJ,S0=l8,ZJ=Q9},setLocked:function(SJ){h=SJ},setClear:function(SJ){if(uJ!==SJ)J.clearStencil(SJ),uJ=SJ},reset:function(){h=!1,A0=null,W0=null,P0=null,v0=null,O0=null,S0=null,ZJ=null,uJ=null}}}let K=new $,H=new W,Y=new Z,X=new WeakMap,U=new WeakMap,N={},E={},G={},F=new WeakMap,R=[],D=null,O=!1,q=null,V=null,M=null,L=null,P=null,I=null,S=null,k=new h0(0,0,0),A=0,d=!1,b=null,g=null,Z0=null,f=null,o=null,s=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),p=!1,X0=0,a=J.getParameter(J.VERSION);if(a.indexOf("WebGL")!==-1)X0=parseFloat(/^WebGL (\d)/.exec(a)[1]),p=X0>=1;else if(a.indexOf("OpenGL ES")!==-1)X0=parseFloat(/^OpenGL ES (\d)/.exec(a)[1]),p=X0>=2;let Y0=null,F0={},r0=J.getParameter(J.SCISSOR_BOX),T0=J.getParameter(J.VIEWPORT),x0=new gJ().fromArray(r0),e0=new gJ().fromArray(T0);function Q0(h,A0,W0,P0){let v0=new Uint8Array(4),O0=J.createTexture();J.bindTexture(h,O0),J.texParameteri(h,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(h,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let S0=0;S0<W0;S0++)if(h===J.TEXTURE_3D||h===J.TEXTURE_2D_ARRAY)J.texImage3D(A0,0,J.RGBA,1,1,P0,0,J.RGBA,J.UNSIGNED_BYTE,v0);else J.texImage2D(A0+S0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,v0);return O0}let w={};w[J.TEXTURE_2D]=Q0(J.TEXTURE_2D,J.TEXTURE_2D,1),w[J.TEXTURE_CUBE_MAP]=Q0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),w[J.TEXTURE_2D_ARRAY]=Q0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),w[J.TEXTURE_3D]=Q0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),K.setClear(0,0,0,1),H.setClear(1),Y.setClear(0),x(J.DEPTH_TEST),H.setFunc(xZ),kJ(!1),j0(fZ),x(J.CULL_FACE),g0(n8);function x(h){if(N[h]!==!0)J.enable(h),N[h]=!0}function l(h){if(N[h]!==!1)J.disable(h),N[h]=!1}function e(h,A0){if(G[h]!==A0){if(J.bindFramebuffer(h,A0),G[h]=A0,h===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=A0;if(h===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=A0;return!0}return!1}function t(h,A0){let W0=R,P0=!1;if(h){if(W0=F.get(A0),W0===void 0)W0=[],F.set(A0,W0);let v0=h.textures;if(W0.length!==v0.length||W0[0]!==J.COLOR_ATTACHMENT0){for(let O0=0,S0=v0.length;O0<S0;O0++)W0[O0]=J.COLOR_ATTACHMENT0+O0;W0.length=v0.length,P0=!0}}else if(W0[0]!==J.BACK)W0[0]=J.BACK,P0=!0;if(P0)J.drawBuffers(W0)}function D0(h){if(D!==h)return J.useProgram(h),D=h,!0;return!1}let L0={[f6]:J.FUNC_ADD,[pY]:J.FUNC_SUBTRACT,[lY]:J.FUNC_REVERSE_SUBTRACT};L0[mY]=J.MIN,L0[uY]=J.MAX;let N0={[dY]:J.ZERO,[cY]:J.ONE,[nY]:J.SRC_COLOR,[iY]:J.SRC_ALPHA,[JX]:J.SRC_ALPHA_SATURATE,[tY]:J.DST_COLOR,[aY]:J.DST_ALPHA,[sY]:J.ONE_MINUS_SRC_COLOR,[oY]:J.ONE_MINUS_SRC_ALPHA,[eY]:J.ONE_MINUS_DST_COLOR,[rY]:J.ONE_MINUS_DST_ALPHA,[QX]:J.CONSTANT_COLOR,[$X]:J.ONE_MINUS_CONSTANT_COLOR,[WX]:J.CONSTANT_ALPHA,[ZX]:J.ONE_MINUS_CONSTANT_ALPHA};function g0(h,A0,W0,P0,v0,O0,S0,ZJ,uJ,SJ){if(h===n8){if(O===!0)l(J.BLEND),O=!1;return}if(O===!1)x(J.BLEND),O=!0;if(h!==gY){if(h!==q||SJ!==d){if(V!==f6||P!==f6)J.blendEquation(J.FUNC_ADD),V=f6,P=f6;if(SJ)switch(h){case SQ:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case z9:J.blendFunc(J.ONE,J.ONE);break;case bZ:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case hZ:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:$J("WebGLState: Invalid blending: ",h);break}else switch(h){case SQ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case z9:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case bZ:$J("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hZ:$J("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$J("WebGLState: Invalid blending: ",h);break}M=null,L=null,I=null,S=null,k.set(0,0,0),A=0,q=h,d=SJ}return}if(v0=v0||A0,O0=O0||W0,S0=S0||P0,A0!==V||v0!==P)J.blendEquationSeparate(L0[A0],L0[v0]),V=A0,P=v0;if(W0!==M||P0!==L||O0!==I||S0!==S)J.blendFuncSeparate(N0[W0],N0[P0],N0[O0],N0[S0]),M=W0,L=P0,I=O0,S=S0;if(ZJ.equals(k)===!1||uJ!==A)J.blendColor(ZJ.r,ZJ.g,ZJ.b,uJ),k.copy(ZJ),A=uJ;q=h,d=!1}function c0(h,A0){h.side===sJ?l(J.CULL_FACE):x(J.CULL_FACE);let W0=h.side===L8;if(A0)W0=!W0;kJ(W0),h.blending===SQ&&h.transparent===!1?g0(n8):g0(h.blending,h.blendEquation,h.blendSrc,h.blendDst,h.blendEquationAlpha,h.blendSrcAlpha,h.blendDstAlpha,h.blendColor,h.blendAlpha,h.premultipliedAlpha),H.setFunc(h.depthFunc),H.setTest(h.depthTest),H.setMask(h.depthWrite),K.setMask(h.colorWrite);let P0=h.stencilWrite;if(Y.setTest(P0),P0)Y.setMask(h.stencilWriteMask),Y.setFunc(h.stencilFunc,h.stencilRef,h.stencilFuncMask),Y.setOp(h.stencilFail,h.stencilZFail,h.stencilZPass);_J(h.polygonOffset,h.polygonOffsetFactor,h.polygonOffsetUnits),h.alphaToCoverage===!0?x(J.SAMPLE_ALPHA_TO_COVERAGE):l(J.SAMPLE_ALPHA_TO_COVERAGE)}function kJ(h){if(b!==h){if(h)J.frontFace(J.CW);else J.frontFace(J.CCW);b=h}}function j0(h){if(h!==bY){if(x(J.CULL_FACE),h!==g)if(h===fZ)J.cullFace(J.BACK);else if(h===hY)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else l(J.CULL_FACE);g=h}function MJ(h){if(h!==Z0){if(p)J.lineWidth(h);Z0=h}}function _J(h,A0,W0){if(h){if(x(J.POLYGON_OFFSET_FILL),f!==A0||o!==W0){if(f=A0,o=W0,H.getReversed())A0=-A0;J.polygonOffset(A0,W0)}}else l(J.POLYGON_OFFSET_FILL)}function bJ(h){if(h)x(J.SCISSOR_TEST);else l(J.SCISSOR_TEST)}function y(h){if(h===void 0)h=J.TEXTURE0+s-1;if(Y0!==h)J.activeTexture(h),Y0=h}function nJ(h,A0,W0){if(W0===void 0)if(Y0===null)W0=J.TEXTURE0+s-1;else W0=Y0;let P0=F0[W0];if(P0===void 0)P0={type:void 0,texture:void 0},F0[W0]=P0;if(P0.type!==h||P0.texture!==A0){if(Y0!==W0)J.activeTexture(W0),Y0=W0;J.bindTexture(h,A0||w[h]),P0.type=h,P0.texture=A0}}function XJ(){let h=F0[Y0];if(h!==void 0&&h.type!==void 0)J.bindTexture(h.type,null),h.type=void 0,h.texture=void 0}function RJ(){try{J.compressedTexImage2D(...arguments)}catch(h){$J("WebGLState:",h)}}function z(){try{J.compressedTexImage3D(...arguments)}catch(h){$J("WebGLState:",h)}}function B(){try{J.texSubImage2D(...arguments)}catch(h){$J("WebGLState:",h)}}function j(){try{J.texSubImage3D(...arguments)}catch(h){$J("WebGLState:",h)}}function i(){try{J.compressedTexSubImage2D(...arguments)}catch(h){$J("WebGLState:",h)}}function q0(){try{J.compressedTexSubImage3D(...arguments)}catch(h){$J("WebGLState:",h)}}function B0(){try{J.texStorage2D(...arguments)}catch(h){$J("WebGLState:",h)}}function z0(){try{J.texStorage3D(...arguments)}catch(h){$J("WebGLState:",h)}}function $0(){try{J.texImage2D(...arguments)}catch(h){$J("WebGLState:",h)}}function H0(){try{J.texImage3D(...arguments)}catch(h){$J("WebGLState:",h)}}function k0(h){if(E[h]!==void 0)return E[h];else return J.getParameter(h)}function n0(h,A0){if(E[h]!==A0)J.pixelStorei(h,A0),E[h]=A0}function M0(h){if(x0.equals(h)===!1)J.scissor(h.x,h.y,h.z,h.w),x0.copy(h)}function V0(h){if(e0.equals(h)===!1)J.viewport(h.x,h.y,h.z,h.w),e0.copy(h)}function t0(h,A0){let W0=U.get(A0);if(W0===void 0)W0=new WeakMap,U.set(A0,W0);let P0=W0.get(h);if(P0===void 0)P0=J.getUniformBlockIndex(A0,h.name),W0.set(h,P0)}function a0(h,A0){let P0=U.get(A0).get(h);if(X.get(A0)!==P0)J.uniformBlockBinding(A0,P0,h.__bindingPointIndex),X.set(A0,P0)}function CJ(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),H.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),N={},E={},Y0=null,F0={},G={},F=new WeakMap,R=[],D=null,O=!1,q=null,V=null,M=null,L=null,P=null,I=null,S=null,k=new h0(0,0,0),A=0,d=!1,b=null,g=null,Z0=null,f=null,o=null,x0.set(0,0,J.canvas.width,J.canvas.height),e0.set(0,0,J.canvas.width,J.canvas.height),K.reset(),H.reset(),Y.reset()}return{buffers:{color:K,depth:H,stencil:Y},enable:x,disable:l,bindFramebuffer:e,drawBuffers:t,useProgram:D0,setBlending:g0,setMaterial:c0,setFlipSided:kJ,setCullFace:j0,setLineWidth:MJ,setPolygonOffset:_J,setScissorTest:bJ,activeTexture:y,bindTexture:nJ,unbindTexture:XJ,compressedTexImage2D:RJ,compressedTexImage3D:z,texImage2D:$0,texImage3D:H0,pixelStorei:n0,getParameter:k0,updateUBOMapping:t0,uniformBlockBinding:a0,texStorage2D:B0,texStorage3D:z0,texSubImage2D:B,texSubImage3D:j,compressedTexSubImage2D:i,compressedTexSubImage3D:q0,scissor:M0,viewport:V0,reset:CJ}}function uq(J,Q,$,W,Z,K,H){let Y=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,X=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new U0,N=new WeakMap,E=new Set,G,F=new WeakMap,R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(z){}function D(z,B){return R?new OffscreenCanvas(z,B):S6("canvas")}function O(z,B,j){let i=1,q0=RJ(z);if(q0.width>j||q0.height>j)i=j/Math.max(q0.width,q0.height);if(i<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let B0=Math.floor(i*q0.width),z0=Math.floor(i*q0.height);if(G===void 0)G=D(B0,z0);let $0=B?D(B0,z0):G;return $0.width=B0,$0.height=z0,$0.getContext("2d").drawImage(z,0,0,B0,z0),o0("WebGLRenderer: Texture has been resized from ("+q0.width+"x"+q0.height+") to ("+B0+"x"+z0+")."),$0}else{if("data"in z)o0("WebGLRenderer: Image in DataTexture is too big ("+q0.width+"x"+q0.height+").");return z}return z}function q(z){return z.generateMipmaps}function V(z){J.generateMipmap(z)}function M(z){if(z.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(z.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function L(z,B,j,i,q0,B0=!1){if(z!==null){if(J[z]!==void 0)return J[z];o0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let z0;if(i){if(z0=Q.get("EXT_texture_norm16"),!z0)o0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let $0=B;if(B===J.RED){if(j===J.FLOAT)$0=J.R32F;if(j===J.HALF_FLOAT)$0=J.R16F;if(j===J.UNSIGNED_BYTE)$0=J.R8;if(j===J.UNSIGNED_SHORT&&z0)$0=z0.R16_EXT;if(j===J.SHORT&&z0)$0=z0.R16_SNORM_EXT}if(B===J.RED_INTEGER){if(j===J.UNSIGNED_BYTE)$0=J.R8UI;if(j===J.UNSIGNED_SHORT)$0=J.R16UI;if(j===J.UNSIGNED_INT)$0=J.R32UI;if(j===J.BYTE)$0=J.R8I;if(j===J.SHORT)$0=J.R16I;if(j===J.INT)$0=J.R32I}if(B===J.RG){if(j===J.FLOAT)$0=J.RG32F;if(j===J.HALF_FLOAT)$0=J.RG16F;if(j===J.UNSIGNED_BYTE)$0=J.RG8;if(j===J.UNSIGNED_SHORT&&z0)$0=z0.RG16_EXT;if(j===J.SHORT&&z0)$0=z0.RG16_SNORM_EXT}if(B===J.RG_INTEGER){if(j===J.UNSIGNED_BYTE)$0=J.RG8UI;if(j===J.UNSIGNED_SHORT)$0=J.RG16UI;if(j===J.UNSIGNED_INT)$0=J.RG32UI;if(j===J.BYTE)$0=J.RG8I;if(j===J.SHORT)$0=J.RG16I;if(j===J.INT)$0=J.RG32I}if(B===J.RGB_INTEGER){if(j===J.UNSIGNED_BYTE)$0=J.RGB8UI;if(j===J.UNSIGNED_SHORT)$0=J.RGB16UI;if(j===J.UNSIGNED_INT)$0=J.RGB32UI;if(j===J.BYTE)$0=J.RGB8I;if(j===J.SHORT)$0=J.RGB16I;if(j===J.INT)$0=J.RGB32I}if(B===J.RGBA_INTEGER){if(j===J.UNSIGNED_BYTE)$0=J.RGBA8UI;if(j===J.UNSIGNED_SHORT)$0=J.RGBA16UI;if(j===J.UNSIGNED_INT)$0=J.RGBA32UI;if(j===J.BYTE)$0=J.RGBA8I;if(j===J.SHORT)$0=J.RGBA16I;if(j===J.INT)$0=J.RGBA32I}if(B===J.RGB){if(j===J.UNSIGNED_SHORT&&z0)$0=z0.RGB16_EXT;if(j===J.SHORT&&z0)$0=z0.RGB16_SNORM_EXT;if(j===J.UNSIGNED_INT_5_9_9_9_REV)$0=J.RGB9_E5;if(j===J.UNSIGNED_INT_10F_11F_11F_REV)$0=J.R11F_G11F_B10F}if(B===J.RGBA){let H0=B0?PK:GJ.getTransfer(q0);if(j===J.FLOAT)$0=J.RGBA32F;if(j===J.HALF_FLOAT)$0=J.RGBA16F;if(j===J.UNSIGNED_BYTE)$0=H0===pJ?J.SRGB8_ALPHA8:J.RGBA8;if(j===J.UNSIGNED_SHORT&&z0)$0=z0.RGBA16_EXT;if(j===J.SHORT&&z0)$0=z0.RGBA16_SNORM_EXT;if(j===J.UNSIGNED_SHORT_4_4_4_4)$0=J.RGBA4;if(j===J.UNSIGNED_SHORT_5_5_5_1)$0=J.RGB5_A1}if($0===J.R16F||$0===J.R32F||$0===J.RG16F||$0===J.RG32F||$0===J.RGBA16F||$0===J.RGBA32F)Q.get("EXT_color_buffer_float");return $0}function P(z,B){let j;if(z){if(B===null||B===G7||B===g6)j=J.DEPTH24_STENCIL8;else if(B===u9)j=J.DEPTH32F_STENCIL8;else if(B===xQ)j=J.DEPTH24_STENCIL8,o0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(B===null||B===G7||B===g6)j=J.DEPTH_COMPONENT24;else if(B===u9)j=J.DEPTH_COMPONENT32F;else if(B===xQ)j=J.DEPTH_COMPONENT16;return j}function I(z,B){if(q(z)===!0||z.isFramebufferTexture&&z.minFilter!==N9&&z.minFilter!==F8)return Math.log2(Math.max(B.width,B.height))+1;else if(z.mipmaps!==void 0&&z.mipmaps.length>0)return z.mipmaps.length;else if(z.isCompressedTexture&&Array.isArray(z.image))return B.mipmaps.length;else return 1}function S(z){let B=z.target;if(B.removeEventListener("dispose",S),A(B),B.isVideoTexture)N.delete(B);if(B.isHTMLTexture)E.delete(B)}function k(z){let B=z.target;B.removeEventListener("dispose",k),b(B)}function A(z){let B=W.get(z);if(B.__webglInit===void 0)return;let j=z.source,i=F.get(j);if(i){let q0=i[B.__cacheKey];if(q0.usedTimes--,q0.usedTimes===0)d(z);if(Object.keys(i).length===0)F.delete(j)}W.remove(z)}function d(z){let B=W.get(z);J.deleteTexture(B.__webglTexture);let j=z.source,i=F.get(j);delete i[B.__cacheKey],H.memory.textures--}function b(z){let B=W.get(z);if(z.depthTexture)z.depthTexture.dispose(),W.remove(z.depthTexture);if(z.isWebGLCubeRenderTarget)for(let i=0;i<6;i++){if(Array.isArray(B.__webglFramebuffer[i]))for(let q0=0;q0<B.__webglFramebuffer[i].length;q0++)J.deleteFramebuffer(B.__webglFramebuffer[i][q0]);else J.deleteFramebuffer(B.__webglFramebuffer[i]);if(B.__webglDepthbuffer)J.deleteRenderbuffer(B.__webglDepthbuffer[i])}else{if(Array.isArray(B.__webglFramebuffer))for(let i=0;i<B.__webglFramebuffer.length;i++)J.deleteFramebuffer(B.__webglFramebuffer[i]);else J.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer)J.deleteRenderbuffer(B.__webglDepthbuffer);if(B.__webglMultisampledFramebuffer)J.deleteFramebuffer(B.__webglMultisampledFramebuffer);if(B.__webglColorRenderbuffer){for(let i=0;i<B.__webglColorRenderbuffer.length;i++)if(B.__webglColorRenderbuffer[i])J.deleteRenderbuffer(B.__webglColorRenderbuffer[i])}if(B.__webglDepthRenderbuffer)J.deleteRenderbuffer(B.__webglDepthRenderbuffer)}let j=z.textures;for(let i=0,q0=j.length;i<q0;i++){let B0=W.get(j[i]);if(B0.__webglTexture)J.deleteTexture(B0.__webglTexture),H.memory.textures--;W.remove(j[i])}W.remove(z)}let g=0;function Z0(){g=0}function f(){return g}function o(z){g=z}function s(){let z=g;if(z>=Z.maxTextures)o0("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+Z.maxTextures);return g+=1,z}function p(z){let B=[];return B.push(z.wrapS),B.push(z.wrapT),B.push(z.wrapR||0),B.push(z.magFilter),B.push(z.minFilter),B.push(z.anisotropy),B.push(z.internalFormat),B.push(z.format),B.push(z.type),B.push(z.generateMipmaps),B.push(z.premultiplyAlpha),B.push(z.flipY),B.push(z.unpackAlignment),B.push(z.colorSpace),B.join()}function X0(z,B){let j=W.get(z);if(z.isVideoTexture)nJ(z);if(z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&j.__version!==z.version){let i=z.image;if(i===null)o0("WebGLRenderer: Texture marked for update but no image data found.");else if(i.complete===!1)o0("WebGLRenderer: Texture marked for update but image is incomplete");else{l(j,z,B);return}}else if(z.isExternalTexture)j.__webglTexture=z.sourceTexture?z.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,j.__webglTexture,J.TEXTURE0+B)}function a(z,B){let j=W.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&j.__version!==z.version){l(j,z,B);return}else if(z.isExternalTexture)j.__webglTexture=z.sourceTexture?z.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,j.__webglTexture,J.TEXTURE0+B)}function Y0(z,B){let j=W.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&j.__version!==z.version){l(j,z,B);return}$.bindTexture(J.TEXTURE_3D,j.__webglTexture,J.TEXTURE0+B)}function F0(z,B){let j=W.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&j.__version!==z.version){e(j,z,B);return}$.bindTexture(J.TEXTURE_CUBE_MAP,j.__webglTexture,J.TEXTURE0+B)}let r0={[N7]:J.REPEAT,[h6]:J.CLAMP_TO_EDGE,[ZW]:J.MIRRORED_REPEAT},T0={[N9]:J.NEAREST,[KW]:J.NEAREST_MIPMAP_NEAREST,[b7]:J.NEAREST_MIPMAP_LINEAR,[F8]:J.LINEAR,[x6]:J.LINEAR_MIPMAP_NEAREST,[A9]:J.LINEAR_MIPMAP_LINEAR},x0={[CX]:J.NEVER,[_X]:J.ALWAYS,[PX]:J.LESS,[FW]:J.LEQUAL,[IX]:J.EQUAL,[qW]:J.GEQUAL,[zX]:J.GREATER,[AX]:J.NOTEQUAL};function e0(z,B){if(B.type===u9&&Q.has("OES_texture_float_linear")===!1&&(B.magFilter===F8||B.magFilter===x6||B.magFilter===b7||B.magFilter===A9||B.minFilter===F8||B.minFilter===x6||B.minFilter===b7||B.minFilter===A9))o0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(z,J.TEXTURE_WRAP_S,r0[B.wrapS]),J.texParameteri(z,J.TEXTURE_WRAP_T,r0[B.wrapT]),z===J.TEXTURE_3D||z===J.TEXTURE_2D_ARRAY)J.texParameteri(z,J.TEXTURE_WRAP_R,r0[B.wrapR]);if(J.texParameteri(z,J.TEXTURE_MAG_FILTER,T0[B.magFilter]),J.texParameteri(z,J.TEXTURE_MIN_FILTER,T0[B.minFilter]),B.compareFunction)J.texParameteri(z,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(z,J.TEXTURE_COMPARE_FUNC,x0[B.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(B.magFilter===N9)return;if(B.minFilter!==b7&&B.minFilter!==A9)return;if(B.type===u9&&Q.has("OES_texture_float_linear")===!1)return;if(B.anisotropy>1||W.get(B).__currentAnisotropy){let j=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(z,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(B.anisotropy,Z.getMaxAnisotropy())),W.get(B).__currentAnisotropy=B.anisotropy}}}function Q0(z,B){let j=!1;if(z.__webglInit===void 0)z.__webglInit=!0,B.addEventListener("dispose",S);let i=B.source,q0=F.get(i);if(q0===void 0)q0={},F.set(i,q0);let B0=p(B);if(B0!==z.__cacheKey){if(q0[B0]===void 0)q0[B0]={texture:J.createTexture(),usedTimes:0},H.memory.textures++,j=!0;q0[B0].usedTimes++;let z0=q0[z.__cacheKey];if(z0!==void 0){if(q0[z.__cacheKey].usedTimes--,z0.usedTimes===0)d(B)}z.__cacheKey=B0,z.__webglTexture=q0[B0].texture}return j}function w(z,B,j){return Math.floor(Math.floor(z/j)/B)}function x(z,B,j,i){let B0=z.updateRanges;if(B0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,B.width,B.height,j,i,B.data);else{B0.sort((n0,M0)=>n0.start-M0.start);let z0=0;for(let n0=1;n0<B0.length;n0++){let M0=B0[z0],V0=B0[n0],t0=M0.start+M0.count,a0=w(V0.start,B.width,4),CJ=w(M0.start,B.width,4);if(V0.start<=t0+1&&a0===CJ&&w(V0.start+V0.count-1,B.width,4)===a0)M0.count=Math.max(M0.count,V0.start+V0.count-M0.start);else++z0,B0[z0]=V0}B0.length=z0+1;let $0=$.getParameter(J.UNPACK_ROW_LENGTH),H0=$.getParameter(J.UNPACK_SKIP_PIXELS),k0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,B.width);for(let n0=0,M0=B0.length;n0<M0;n0++){let V0=B0[n0],t0=Math.floor(V0.start/4),a0=Math.ceil(V0.count/4),CJ=t0%B.width,h=Math.floor(t0/B.width),A0=a0,W0=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,CJ),$.pixelStorei(J.UNPACK_SKIP_ROWS,h),$.texSubImage2D(J.TEXTURE_2D,0,CJ,h,A0,1,j,i,B.data)}z.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,$0),$.pixelStorei(J.UNPACK_SKIP_PIXELS,H0),$.pixelStorei(J.UNPACK_SKIP_ROWS,k0)}}function l(z,B,j){let i=J.TEXTURE_2D;if(B.isDataArrayTexture||B.isCompressedArrayTexture)i=J.TEXTURE_2D_ARRAY;if(B.isData3DTexture)i=J.TEXTURE_3D;let q0=Q0(z,B),B0=B.source;$.bindTexture(i,z.__webglTexture,J.TEXTURE0+j);let z0=W.get(B0);if(B0.version!==z0.__version||q0===!0){if($.activeTexture(J.TEXTURE0+j),(typeof ImageBitmap<"u"&&B.image instanceof ImageBitmap)===!1){let W0=GJ.getPrimaries(GJ.workingColorSpace),P0=B.colorSpace===p7?null:GJ.getPrimaries(B.colorSpace),v0=B.colorSpace===p7||W0===P0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,B.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,v0)}$.pixelStorei(J.UNPACK_ALIGNMENT,B.unpackAlignment);let H0=O(B.image,!1,Z.maxTextureSize);H0=XJ(B,H0);let k0=K.convert(B.format,B.colorSpace),n0=K.convert(B.type),M0=L(B.internalFormat,k0,n0,B.normalized,B.colorSpace,B.isVideoTexture);e0(i,B);let V0,t0=B.mipmaps,a0=B.isVideoTexture!==!0,CJ=z0.__version===void 0||q0===!0,h=B0.dataReady,A0=I(B,H0);if(B.isDepthTexture){if(M0=P(B.format===x7,B.type),CJ)if(a0)$.texStorage2D(J.TEXTURE_2D,1,M0,H0.width,H0.height);else $.texImage2D(J.TEXTURE_2D,0,M0,H0.width,H0.height,0,k0,n0,null)}else if(B.isDataTexture)if(t0.length>0){if(a0&&CJ)$.texStorage2D(J.TEXTURE_2D,A0,M0,t0[0].width,t0[0].height);for(let W0=0,P0=t0.length;W0<P0;W0++)if(V0=t0[W0],a0){if(h)$.texSubImage2D(J.TEXTURE_2D,W0,0,0,V0.width,V0.height,k0,n0,V0.data)}else $.texImage2D(J.TEXTURE_2D,W0,M0,V0.width,V0.height,0,k0,n0,V0.data);B.generateMipmaps=!1}else if(a0){if(CJ)$.texStorage2D(J.TEXTURE_2D,A0,M0,H0.width,H0.height);if(h)x(B,H0,k0,n0)}else $.texImage2D(J.TEXTURE_2D,0,M0,H0.width,H0.height,0,k0,n0,H0.data);else if(B.isCompressedTexture)if(B.isCompressedArrayTexture){if(a0&&CJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,A0,M0,t0[0].width,t0[0].height,H0.depth);for(let W0=0,P0=t0.length;W0<P0;W0++)if(V0=t0[W0],B.format!==_9)if(k0!==null)if(a0){if(h)if(B.layerUpdates.size>0){let v0=eK(V0.width,V0.height,B.format,B.type);for(let O0 of B.layerUpdates){let S0=V0.data.subarray(O0*v0/V0.data.BYTES_PER_ELEMENT,(O0+1)*v0/V0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,W0,0,0,O0,V0.width,V0.height,1,k0,S0)}}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,W0,0,0,0,V0.width,V0.height,H0.depth,k0,V0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,W0,M0,V0.width,V0.height,H0.depth,0,V0.data,0,0);else o0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(a0){if(h)$.texSubImage3D(J.TEXTURE_2D_ARRAY,W0,0,0,0,V0.width,V0.height,H0.depth,k0,n0,V0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,W0,M0,V0.width,V0.height,H0.depth,0,k0,n0,V0.data);if(B.layerUpdates.size>0)B.clearLayerUpdates()}else{if(a0&&CJ)$.texStorage2D(J.TEXTURE_2D,A0,M0,t0[0].width,t0[0].height);for(let W0=0,P0=t0.length;W0<P0;W0++)if(V0=t0[W0],B.format!==_9)if(k0!==null)if(a0){if(h)$.compressedTexSubImage2D(J.TEXTURE_2D,W0,0,0,V0.width,V0.height,k0,V0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,W0,M0,V0.width,V0.height,0,V0.data);else o0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(a0){if(h)$.texSubImage2D(J.TEXTURE_2D,W0,0,0,V0.width,V0.height,k0,n0,V0.data)}else $.texImage2D(J.TEXTURE_2D,W0,M0,V0.width,V0.height,0,k0,n0,V0.data)}else if(B.isDataArrayTexture)if(a0){if(CJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,A0,M0,H0.width,H0.height,H0.depth);if(h)if(B.layerUpdates.size>0){let W0=eK(H0.width,H0.height,B.format,B.type);for(let P0 of B.layerUpdates){let v0=H0.data.subarray(P0*W0/H0.data.BYTES_PER_ELEMENT,(P0+1)*W0/H0.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,P0,H0.width,H0.height,1,k0,n0,v0)}B.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,H0.width,H0.height,H0.depth,k0,n0,H0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,M0,H0.width,H0.height,H0.depth,0,k0,n0,H0.data);else if(B.isData3DTexture)if(a0){if(CJ)$.texStorage3D(J.TEXTURE_3D,A0,M0,H0.width,H0.height,H0.depth);if(h)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,H0.width,H0.height,H0.depth,k0,n0,H0.data)}else $.texImage3D(J.TEXTURE_3D,0,M0,H0.width,H0.height,H0.depth,0,k0,n0,H0.data);else if(B.isFramebufferTexture){if(CJ)if(a0)$.texStorage2D(J.TEXTURE_2D,A0,M0,H0.width,H0.height);else{let{width:W0,height:P0}=H0;for(let v0=0;v0<A0;v0++)$.texImage2D(J.TEXTURE_2D,v0,M0,W0,P0,0,k0,n0,null),W0>>=1,P0>>=1}}else if(B.isHTMLTexture){if("texElementImage2D"in J){let W0=J.canvas;if(!W0.hasAttribute("layoutsubtree"))W0.setAttribute("layoutsubtree","true");if(H0.parentNode!==W0){W0.appendChild(H0),E.add(B),W0.onpaint=(P0)=>{let v0=P0.changedElements;for(let O0 of E)if(v0.includes(O0.image))O0.needsUpdate=!0},W0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,H0);else{let{RGBA:v0,RGBA:O0,UNSIGNED_BYTE:S0}=J;J.texElementImage2D(J.TEXTURE_2D,0,v0,O0,S0,H0)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(t0.length>0){if(a0&&CJ){let W0=RJ(t0[0]);$.texStorage2D(J.TEXTURE_2D,A0,M0,W0.width,W0.height)}for(let W0=0,P0=t0.length;W0<P0;W0++)if(V0=t0[W0],a0){if(h)$.texSubImage2D(J.TEXTURE_2D,W0,0,0,k0,n0,V0)}else $.texImage2D(J.TEXTURE_2D,W0,M0,k0,n0,V0);B.generateMipmaps=!1}else if(a0){if(CJ){let W0=RJ(H0);$.texStorage2D(J.TEXTURE_2D,A0,M0,W0.width,W0.height)}if(h)$.texSubImage2D(J.TEXTURE_2D,0,0,0,k0,n0,H0)}else $.texImage2D(J.TEXTURE_2D,0,M0,k0,n0,H0);if(q(B))V(i);if(z0.__version=B0.version,B.onUpdate)B.onUpdate(B)}z.__version=B.version}function e(z,B,j){if(B.image.length!==6)return;let i=Q0(z,B),q0=B.source;$.bindTexture(J.TEXTURE_CUBE_MAP,z.__webglTexture,J.TEXTURE0+j);let B0=W.get(q0);if(q0.version!==B0.__version||i===!0){$.activeTexture(J.TEXTURE0+j);let z0=GJ.getPrimaries(GJ.workingColorSpace),$0=B.colorSpace===p7?null:GJ.getPrimaries(B.colorSpace),H0=B.colorSpace===p7||z0===$0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,B.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,B.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,H0);let k0=B.isCompressedTexture||B.image[0].isCompressedTexture,n0=B.image[0]&&B.image[0].isDataTexture,M0=[];for(let O0=0;O0<6;O0++){if(!k0&&!n0)M0[O0]=O(B.image[O0],!0,Z.maxCubemapSize);else M0[O0]=n0?B.image[O0].image:B.image[O0];M0[O0]=XJ(B,M0[O0])}let V0=M0[0],t0=K.convert(B.format,B.colorSpace),a0=K.convert(B.type),CJ=L(B.internalFormat,t0,a0,B.normalized,B.colorSpace),h=B.isVideoTexture!==!0,A0=B0.__version===void 0||i===!0,W0=q0.dataReady,P0=I(B,V0);e0(J.TEXTURE_CUBE_MAP,B);let v0;if(k0){if(h&&A0)$.texStorage2D(J.TEXTURE_CUBE_MAP,P0,CJ,V0.width,V0.height);for(let O0=0;O0<6;O0++){v0=M0[O0].mipmaps;for(let S0=0;S0<v0.length;S0++){let ZJ=v0[S0];if(B.format!==_9)if(t0!==null)if(h){if(W0)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+O0,S0,0,0,ZJ.width,ZJ.height,t0,ZJ.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+O0,S0,CJ,ZJ.width,ZJ.height,0,ZJ.data);else o0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(h){if(W0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+O0,S0,0,0,ZJ.width,ZJ.height,t0,a0,ZJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+O0,S0,CJ,ZJ.width,ZJ.height,0,t0,a0,ZJ.data)}}}else{if(v0=B.mipmaps,h&&A0){if(v0.length>0)P0++;let O0=RJ(M0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,P0,CJ,O0.width,O0.height)}for(let O0=0;O0<6;O0++)if(n0){if(h){if(W0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+O0,0,0,0,M0[O0].width,M0[O0].height,t0,a0,M0[O0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+O0,0,CJ,M0[O0].width,M0[O0].height,0,t0,a0,M0[O0].data);for(let S0=0;S0<v0.length;S0++){let uJ=v0[S0].image[O0].image;if(h){if(W0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+O0,S0+1,0,0,uJ.width,uJ.height,t0,a0,uJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+O0,S0+1,CJ,uJ.width,uJ.height,0,t0,a0,uJ.data)}}else{if(h){if(W0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+O0,0,0,0,t0,a0,M0[O0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+O0,0,CJ,t0,a0,M0[O0]);for(let S0=0;S0<v0.length;S0++){let ZJ=v0[S0];if(h){if(W0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+O0,S0+1,0,0,t0,a0,ZJ.image[O0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+O0,S0+1,CJ,t0,a0,ZJ.image[O0])}}}if(q(B))V(J.TEXTURE_CUBE_MAP);if(B0.__version=q0.version,B.onUpdate)B.onUpdate(B)}z.__version=B.version}function t(z,B,j,i,q0,B0){let z0=K.convert(j.format,j.colorSpace),$0=K.convert(j.type),H0=L(j.internalFormat,z0,$0,j.normalized,j.colorSpace),k0=W.get(B),n0=W.get(j);if(n0.__renderTarget=B,!k0.__hasExternalTextures){let M0=Math.max(1,B.width>>B0),V0=Math.max(1,B.height>>B0);if(q0===J.TEXTURE_3D||q0===J.TEXTURE_2D_ARRAY)$.texImage3D(q0,B0,H0,M0,V0,B.depth,0,z0,$0,null);else $.texImage2D(q0,B0,H0,M0,V0,0,z0,$0,null)}if($.bindFramebuffer(J.FRAMEBUFFER,z),y(B))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,i,q0,n0.__webglTexture,0,bJ(B));else if(q0===J.TEXTURE_2D||q0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&q0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,i,q0,n0.__webglTexture,B0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function D0(z,B,j){if(J.bindRenderbuffer(J.RENDERBUFFER,z),B.depthBuffer){let i=B.depthTexture,q0=i&&i.isDepthTexture?i.type:null,B0=P(B.stencilBuffer,q0),z0=B.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(y(B))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,bJ(B),B0,B.width,B.height);else if(j)J.renderbufferStorageMultisample(J.RENDERBUFFER,bJ(B),B0,B.width,B.height);else J.renderbufferStorage(J.RENDERBUFFER,B0,B.width,B.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,z0,J.RENDERBUFFER,z)}else{let i=B.textures;for(let q0=0;q0<i.length;q0++){let B0=i[q0],z0=K.convert(B0.format,B0.colorSpace),$0=K.convert(B0.type),H0=L(B0.internalFormat,z0,$0,B0.normalized,B0.colorSpace);if(y(B))Y.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,bJ(B),H0,B.width,B.height);else if(j)J.renderbufferStorageMultisample(J.RENDERBUFFER,bJ(B),H0,B.width,B.height);else J.renderbufferStorage(J.RENDERBUFFER,H0,B.width,B.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function L0(z,B,j){let i=B.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,z),!(B.depthTexture&&B.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q0=W.get(B.depthTexture);if(q0.__renderTarget=B,!q0.__webglTexture||B.depthTexture.image.width!==B.width||B.depthTexture.image.height!==B.height)B.depthTexture.image.width=B.width,B.depthTexture.image.height=B.height,B.depthTexture.needsUpdate=!0;if(i){if(q0.__webglInit===void 0)q0.__webglInit=!0,B.depthTexture.addEventListener("dispose",S);if(q0.__webglTexture===void 0){q0.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,q0.__webglTexture),e0(J.TEXTURE_CUBE_MAP,B.depthTexture);let k0=K.convert(B.depthTexture.format),n0=K.convert(B.depthTexture.type),M0;if(B.depthTexture.format===h7)M0=J.DEPTH_COMPONENT24;else if(B.depthTexture.format===x7)M0=J.DEPTH24_STENCIL8;for(let V0=0;V0<6;V0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+V0,0,M0,B.width,B.height,0,k0,n0,null)}}else X0(B.depthTexture,0);let B0=q0.__webglTexture,z0=bJ(B),$0=i?J.TEXTURE_CUBE_MAP_POSITIVE_X+j:J.TEXTURE_2D,H0=B.depthTexture.format===x7?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(B.depthTexture.format===h7)if(y(B))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,H0,$0,B0,0,z0);else J.framebufferTexture2D(J.FRAMEBUFFER,H0,$0,B0,0);else if(B.depthTexture.format===x7)if(y(B))Y.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,H0,$0,B0,0,z0);else J.framebufferTexture2D(J.FRAMEBUFFER,H0,$0,B0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function N0(z){let B=W.get(z),j=z.isWebGLCubeRenderTarget===!0;if(B.__boundDepthTexture!==z.depthTexture){let i=z.depthTexture;if(B.__depthDisposeCallback)B.__depthDisposeCallback();if(i){let q0=()=>{delete B.__boundDepthTexture,delete B.__depthDisposeCallback,i.removeEventListener("dispose",q0)};i.addEventListener("dispose",q0),B.__depthDisposeCallback=q0}B.__boundDepthTexture=i}if(z.depthTexture&&!B.__autoAllocateDepthBuffer)if(j)for(let i=0;i<6;i++)L0(B.__webglFramebuffer[i],z,i);else{let i=z.texture.mipmaps;if(i&&i.length>0)L0(B.__webglFramebuffer[0],z,0);else L0(B.__webglFramebuffer,z,0)}else if(j){B.__webglDepthbuffer=[];for(let i=0;i<6;i++)if($.bindFramebuffer(J.FRAMEBUFFER,B.__webglFramebuffer[i]),B.__webglDepthbuffer[i]===void 0)B.__webglDepthbuffer[i]=J.createRenderbuffer(),D0(B.__webglDepthbuffer[i],z,!1);else{let q0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,B0=B.__webglDepthbuffer[i];J.bindRenderbuffer(J.RENDERBUFFER,B0),J.framebufferRenderbuffer(J.FRAMEBUFFER,q0,J.RENDERBUFFER,B0)}}else{let i=z.texture.mipmaps;if(i&&i.length>0)$.bindFramebuffer(J.FRAMEBUFFER,B.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,B.__webglFramebuffer);if(B.__webglDepthbuffer===void 0)B.__webglDepthbuffer=J.createRenderbuffer(),D0(B.__webglDepthbuffer,z,!1);else{let q0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,B0=B.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,B0),J.framebufferRenderbuffer(J.FRAMEBUFFER,q0,J.RENDERBUFFER,B0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function g0(z,B,j){let i=W.get(z);if(B!==void 0)t(i.__webglFramebuffer,z,z.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(j!==void 0)N0(z)}function c0(z){let B=z.texture,j=W.get(z),i=W.get(B);z.addEventListener("dispose",k);let q0=z.textures,B0=z.isWebGLCubeRenderTarget===!0,z0=q0.length>1;if(!z0){if(i.__webglTexture===void 0)i.__webglTexture=J.createTexture();i.__version=B.version,H.memory.textures++}if(B0){j.__webglFramebuffer=[];for(let $0=0;$0<6;$0++)if(B.mipmaps&&B.mipmaps.length>0){j.__webglFramebuffer[$0]=[];for(let H0=0;H0<B.mipmaps.length;H0++)j.__webglFramebuffer[$0][H0]=J.createFramebuffer()}else j.__webglFramebuffer[$0]=J.createFramebuffer()}else{if(B.mipmaps&&B.mipmaps.length>0){j.__webglFramebuffer=[];for(let $0=0;$0<B.mipmaps.length;$0++)j.__webglFramebuffer[$0]=J.createFramebuffer()}else j.__webglFramebuffer=J.createFramebuffer();if(z0)for(let $0=0,H0=q0.length;$0<H0;$0++){let k0=W.get(q0[$0]);if(k0.__webglTexture===void 0)k0.__webglTexture=J.createTexture(),H.memory.textures++}if(z.samples>0&&y(z)===!1){j.__webglMultisampledFramebuffer=J.createFramebuffer(),j.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let $0=0;$0<q0.length;$0++){let H0=q0[$0];j.__webglColorRenderbuffer[$0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,j.__webglColorRenderbuffer[$0]);let k0=K.convert(H0.format,H0.colorSpace),n0=K.convert(H0.type),M0=L(H0.internalFormat,k0,n0,H0.normalized,H0.colorSpace,z.isXRRenderTarget===!0),V0=bJ(z);J.renderbufferStorageMultisample(J.RENDERBUFFER,V0,M0,z.width,z.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+$0,J.RENDERBUFFER,j.__webglColorRenderbuffer[$0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),z.depthBuffer)j.__webglDepthRenderbuffer=J.createRenderbuffer(),D0(j.__webglDepthRenderbuffer,z,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(B0){$.bindTexture(J.TEXTURE_CUBE_MAP,i.__webglTexture),e0(J.TEXTURE_CUBE_MAP,B);for(let $0=0;$0<6;$0++)if(B.mipmaps&&B.mipmaps.length>0)for(let H0=0;H0<B.mipmaps.length;H0++)t(j.__webglFramebuffer[$0][H0],z,B,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,H0);else t(j.__webglFramebuffer[$0],z,B,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+$0,0);if(q(B))V(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(z0){for(let $0=0,H0=q0.length;$0<H0;$0++){let k0=q0[$0],n0=W.get(k0),M0=J.TEXTURE_2D;if(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)M0=z.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(M0,n0.__webglTexture),e0(M0,k0),t(j.__webglFramebuffer,z,k0,J.COLOR_ATTACHMENT0+$0,M0,0),q(k0))V(M0)}$.unbindTexture()}else{let $0=J.TEXTURE_2D;if(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)$0=z.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture($0,i.__webglTexture),e0($0,B),B.mipmaps&&B.mipmaps.length>0)for(let H0=0;H0<B.mipmaps.length;H0++)t(j.__webglFramebuffer[H0],z,B,J.COLOR_ATTACHMENT0,$0,H0);else t(j.__webglFramebuffer,z,B,J.COLOR_ATTACHMENT0,$0,0);if(q(B))V($0);$.unbindTexture()}if(z.depthBuffer)N0(z)}function kJ(z){let B=z.textures;for(let j=0,i=B.length;j<i;j++){let q0=B[j];if(q(q0)){let B0=M(z),z0=W.get(q0).__webglTexture;$.bindTexture(B0,z0),V(B0),$.unbindTexture()}}}let j0=[],MJ=[];function _J(z){if(z.samples>0){if(y(z)===!1){let{textures:B,width:j,height:i}=z,q0=J.COLOR_BUFFER_BIT,B0=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,z0=W.get(z),$0=B.length>1;if($0)for(let k0=0;k0<B.length;k0++)$.bindFramebuffer(J.FRAMEBUFFER,z0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+k0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,z0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+k0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,z0.__webglMultisampledFramebuffer);let H0=z.texture.mipmaps;if(H0&&H0.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,z0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,z0.__webglFramebuffer);for(let k0=0;k0<B.length;k0++){if(z.resolveDepthBuffer){if(z.depthBuffer)q0|=J.DEPTH_BUFFER_BIT;if(z.stencilBuffer&&z.resolveStencilBuffer)q0|=J.STENCIL_BUFFER_BIT}if($0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,z0.__webglColorRenderbuffer[k0]);let n0=W.get(B[k0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,n0,0)}if(J.blitFramebuffer(0,0,j,i,0,0,j,i,q0,J.NEAREST),X===!0){if(j0.length=0,MJ.length=0,j0.push(J.COLOR_ATTACHMENT0+k0),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1)j0.push(B0),MJ.push(B0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,MJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,j0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),$0)for(let k0=0;k0<B.length;k0++){$.bindFramebuffer(J.FRAMEBUFFER,z0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+k0,J.RENDERBUFFER,z0.__webglColorRenderbuffer[k0]);let n0=W.get(B[k0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,z0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+k0,J.TEXTURE_2D,n0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,z0.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&X){let B=z.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[B])}}}function bJ(z){return Math.min(Z.maxSamples,z.samples)}function y(z){let B=W.get(z);return z.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&B.__useRenderToTexture!==!1}function nJ(z){let B=H.render.frame;if(N.get(z)!==B)N.set(z,B),z.update()}function XJ(z,B){let{colorSpace:j,format:i,type:q0}=z;if(z.isCompressedTexture===!0||z.isVideoTexture===!0)return B;if(j!==x8&&j!==p7)if(GJ.getTransfer(j)===pJ){if(i!==_9||q0!==G9)o0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else $J("WebGLTextures: Unsupported texture color space:",j);return B}function RJ(z){if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement)U.width=z.naturalWidth||z.width,U.height=z.naturalHeight||z.height;else if(typeof VideoFrame<"u"&&z instanceof VideoFrame)U.width=z.displayWidth,U.height=z.displayHeight;else U.width=z.width,U.height=z.height;return U}this.allocateTextureUnit=s,this.resetTextureUnits=Z0,this.getTextureUnits=f,this.setTextureUnits=o,this.setTexture2D=X0,this.setTexture2DArray=a,this.setTexture3D=Y0,this.setTextureCube=F0,this.rebindTextures=g0,this.setupRenderTarget=c0,this.updateRenderTargetMipmap=kJ,this.updateMultisampleRenderTarget=_J,this.setupDepthRenderbuffer=N0,this.setupFrameBufferTexture=t,this.useMultisampledRTT=y,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function dq(J,Q){function $(W,Z=p7){let K,H=GJ.getTransfer(Z);if(W===G9)return J.UNSIGNED_BYTE;if(W===pZ)return J.UNSIGNED_SHORT_4_4_4_4;if(W===lZ)return J.UNSIGNED_SHORT_5_5_5_1;if(W===LX)return J.UNSIGNED_INT_5_9_9_9_REV;if(W===VX)return J.UNSIGNED_INT_10F_11F_11F_REV;if(W===OX)return J.BYTE;if(W===RX)return J.SHORT;if(W===xQ)return J.UNSIGNED_SHORT;if(W===gZ)return J.INT;if(W===G7)return J.UNSIGNED_INT;if(W===u9)return J.FLOAT;if(W===q8)return J.HALF_FLOAT;if(W===DX)return J.ALPHA;if(W===BX)return J.RGB;if(W===_9)return J.RGBA;if(W===h7)return J.DEPTH_COMPONENT;if(W===x7)return J.DEPTH_STENCIL;if(W===kX)return J.RED;if(W===mZ)return J.RED_INTEGER;if(W===g7)return J.RG;if(W===uZ)return J.RG_INTEGER;if(W===dZ)return J.RGBA_INTEGER;if(W===HW||W===YW||W===XW||W===UW)if(H===pJ)if(K=Q.get("WEBGL_compressed_texture_s3tc_srgb"),K!==null){if(W===HW)return K.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(W===YW)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(W===XW)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(W===UW)return K.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(K=Q.get("WEBGL_compressed_texture_s3tc"),K!==null){if(W===HW)return K.COMPRESSED_RGB_S3TC_DXT1_EXT;if(W===YW)return K.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(W===XW)return K.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(W===UW)return K.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(W===cZ||W===nZ||W===sZ||W===iZ)if(K=Q.get("WEBGL_compressed_texture_pvrtc"),K!==null){if(W===cZ)return K.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(W===nZ)return K.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(W===sZ)return K.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(W===iZ)return K.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(W===oZ||W===aZ||W===rZ||W===tZ||W===eZ||W===NW||W===JK)if(K=Q.get("WEBGL_compressed_texture_etc"),K!==null){if(W===oZ||W===aZ)return H===pJ?K.COMPRESSED_SRGB8_ETC2:K.COMPRESSED_RGB8_ETC2;if(W===rZ)return H===pJ?K.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:K.COMPRESSED_RGBA8_ETC2_EAC;if(W===tZ)return K.COMPRESSED_R11_EAC;if(W===eZ)return K.COMPRESSED_SIGNED_R11_EAC;if(W===NW)return K.COMPRESSED_RG11_EAC;if(W===JK)return K.COMPRESSED_SIGNED_RG11_EAC}else return null;if(W===QK||W===$K||W===WK||W===ZK||W===KK||W===HK||W===YK||W===XK||W===UK||W===NK||W===GK||W===EK||W===FK||W===qK)if(K=Q.get("WEBGL_compressed_texture_astc"),K!==null){if(W===QK)return H===pJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:K.COMPRESSED_RGBA_ASTC_4x4_KHR;if(W===$K)return H===pJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:K.COMPRESSED_RGBA_ASTC_5x4_KHR;if(W===WK)return H===pJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:K.COMPRESSED_RGBA_ASTC_5x5_KHR;if(W===ZK)return H===pJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:K.COMPRESSED_RGBA_ASTC_6x5_KHR;if(W===KK)return H===pJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:K.COMPRESSED_RGBA_ASTC_6x6_KHR;if(W===HK)return H===pJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:K.COMPRESSED_RGBA_ASTC_8x5_KHR;if(W===YK)return H===pJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:K.COMPRESSED_RGBA_ASTC_8x6_KHR;if(W===XK)return H===pJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:K.COMPRESSED_RGBA_ASTC_8x8_KHR;if(W===UK)return H===pJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:K.COMPRESSED_RGBA_ASTC_10x5_KHR;if(W===NK)return H===pJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:K.COMPRESSED_RGBA_ASTC_10x6_KHR;if(W===GK)return H===pJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:K.COMPRESSED_RGBA_ASTC_10x8_KHR;if(W===EK)return H===pJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:K.COMPRESSED_RGBA_ASTC_10x10_KHR;if(W===FK)return H===pJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:K.COMPRESSED_RGBA_ASTC_12x10_KHR;if(W===qK)return H===pJ?K.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:K.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(W===OK||W===RK||W===LK)if(K=Q.get("EXT_texture_compression_bptc"),K!==null){if(W===OK)return H===pJ?K.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:K.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(W===RK)return K.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(W===LK)return K.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(W===VK||W===DK||W===GW||W===BK)if(K=Q.get("EXT_texture_compression_rgtc"),K!==null){if(W===VK)return K.COMPRESSED_RED_RGTC1_EXT;if(W===DK)return K.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(W===GW)return K.COMPRESSED_RED_GREEN_RGTC2_EXT;if(W===BK)return K.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(W===g6)return J.UNSIGNED_INT_24_8;return J[W]!==void 0?J[W]:null}return{convert:$}}var cq=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nq=`
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

}`;class IU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new CW(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new rJ({vertexShader:cq,fragmentShader:nq,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new I0(new zJ(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zU extends E9{constructor(J,Q){super();let $=this,W=null,Z=1,K=null,H="local-floor",Y=1,X=null,U=null,N=null,E=null,G=null,F=null,R=typeof XRWebGLBinding<"u",D=new IU,O={},q=Q.getContextAttributes(),V=null,M=null,L=[],P=[],I=new U0,S=null,k=null,A=new H8;A.viewport=new gJ;let d=new H8;d.viewport=new gJ;let b=[A,d],g=new sK,Z0=null,f=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q0){let w=L[Q0];if(w===void 0)w=new lQ,L[Q0]=w;return w.getTargetRaySpace()},this.getControllerGrip=function(Q0){let w=L[Q0];if(w===void 0)w=new lQ,L[Q0]=w;return w.getGripSpace()},this.getHand=function(Q0){let w=L[Q0];if(w===void 0)w=new lQ,L[Q0]=w;return w.getHandSpace()};function o(Q0){let w=P.indexOf(Q0.inputSource);if(w===-1)return;let x=L[w];if(x!==void 0)x.update(Q0.inputSource,Q0.frame,X||K),x.dispatchEvent({type:Q0.type,data:Q0.inputSource})}function s(){W.removeEventListener("select",o),W.removeEventListener("selectstart",o),W.removeEventListener("selectend",o),W.removeEventListener("squeeze",o),W.removeEventListener("squeezestart",o),W.removeEventListener("squeezeend",o),W.removeEventListener("end",s),W.removeEventListener("inputsourceschange",p);for(let Q0=0;Q0<L.length;Q0++){let w=P[Q0];if(w===null)continue;P[Q0]=null,L[Q0].disconnect(w)}Z0=null,f=null,D.reset();for(let Q0 in O)delete O[Q0];if(J.setRenderTarget(V),G=null,E=null,N=null,W=null,M=null,e0.stop(),$.isPresenting=!1,J.setPixelRatio(S),J.setSize(I.width,I.height,!1),k!==null){let Q0=k.camera;Q0.fov=k.fov,Q0.zoom=k.zoom,Q0.updateProjectionMatrix(),k=null}$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q0){if(Z=Q0,$.isPresenting===!0)o0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q0){if(H=Q0,$.isPresenting===!0)o0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return X||K},this.setReferenceSpace=function(Q0){X=Q0},this.getBaseLayer=function(){return E!==null?E:G},this.getBinding=function(){if(N===null&&R)N=new XRWebGLBinding(W,Q);return N},this.getFrame=function(){return F},this.getSession=function(){return W},this.setSession=async function(Q0){if(W=Q0,W!==null){if(V=J.getRenderTarget(),W.addEventListener("select",o),W.addEventListener("selectstart",o),W.addEventListener("selectend",o),W.addEventListener("squeeze",o),W.addEventListener("squeezestart",o),W.addEventListener("squeezeend",o),W.addEventListener("end",s),W.addEventListener("inputsourceschange",p),q.xrCompatible!==!0)await Q.makeXRCompatible();if(S=J.getPixelRatio(),J.getSize(I),!(R&&("createProjectionLayer"in XRWebGLBinding.prototype))){let x={antialias:q.antialias,alpha:!0,depth:q.depth,stencil:q.stencil,framebufferScaleFactor:Z};G=new XRWebGLLayer(W,Q,x),W.updateRenderState({baseLayer:G}),J.setPixelRatio(1),J.setSize(G.framebufferWidth,G.framebufferHeight,!1),M=new J8(G.framebufferWidth,G.framebufferHeight,{format:_9,type:G9,colorSpace:J.outputColorSpace,stencilBuffer:q.stencil,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1,storeMultisampledDepthBuffer:G.ignoreDepthValues===!1,storeMultisampledStencilBuffer:G.ignoreDepthValues===!1})}else{let x=null,l=null,e=null;if(q.depth)e=q.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,x=q.stencil?x7:h7,l=q.stencil?g6:G7;let t={colorFormat:Q.RGBA8,depthFormat:e,scaleFactor:Z};N=this.getBinding(),E=N.createProjectionLayer(t),W.updateRenderState({layers:[E]}),J.setPixelRatio(1),J.setSize(E.textureWidth,E.textureHeight,!1),M=new J8(E.textureWidth,E.textureHeight,{format:_9,type:G9,depthTexture:new d7(E.textureWidth,E.textureHeight,l,void 0,void 0,void 0,void 0,void 0,void 0,x),stencilBuffer:q.stencil,colorSpace:J.outputColorSpace,samples:q.antialias?4:0,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1,storeMultisampledDepthBuffer:E.ignoreDepthValues===!1,storeMultisampledStencilBuffer:E.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(Y),X=null,K=await W.requestReferenceSpace(H),e0.setContext(W),e0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(W!==null)return W.environmentBlendMode},this.getDepthTexture=function(){return D.getDepthTexture()};function p(Q0){for(let w=0;w<Q0.removed.length;w++){let x=Q0.removed[w],l=P.indexOf(x);if(l>=0)P[l]=null,L[l].disconnect(x)}for(let w=0;w<Q0.added.length;w++){let x=Q0.added[w],l=P.indexOf(x);if(l===-1){for(let t=0;t<L.length;t++)if(t>=P.length){P.push(x),l=t;break}else if(P[t]===null){P[t]=x,l=t;break}if(l===-1)break}let e=L[l];if(e)e.connect(x)}}let X0=new T,a=new T;function Y0(Q0,w,x){X0.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(x.matrixWorld);let l=X0.distanceTo(a),e=w.projectionMatrix.elements,t=x.projectionMatrix.elements,D0=e[14]/(e[10]-1),L0=e[14]/(e[10]+1),N0=(e[9]+1)/e[5],g0=(e[9]-1)/e[5],c0=(e[8]-1)/e[0],kJ=(t[8]+1)/t[0],j0=D0*c0,MJ=D0*kJ,_J=l/(-c0+kJ),bJ=_J*-c0;if(w.matrixWorld.decompose(Q0.position,Q0.quaternion,Q0.scale),Q0.translateX(bJ),Q0.translateZ(_J),Q0.matrixWorld.compose(Q0.position,Q0.quaternion,Q0.scale),Q0.matrixWorldInverse.copy(Q0.matrixWorld).invert(),e[10]===-1)Q0.projectionMatrix.copy(w.projectionMatrix),Q0.projectionMatrixInverse.copy(w.projectionMatrixInverse);else{let y=D0+_J,nJ=L0+_J,XJ=j0-bJ,RJ=MJ+(l-bJ),z=N0*L0/nJ*y,B=g0*L0/nJ*y;Q0.projectionMatrix.makePerspective(XJ,RJ,z,B,y,nJ),Q0.projectionMatrixInverse.copy(Q0.projectionMatrix).invert()}}function F0(Q0,w){if(w===null)Q0.matrixWorld.copy(Q0.matrix);else Q0.matrixWorld.multiplyMatrices(w.matrixWorld,Q0.matrix);Q0.matrixWorldInverse.copy(Q0.matrixWorld).invert()}this.updateCamera=function(Q0){if(W===null)return;let{near:w,far:x}=Q0;if(D.texture!==null){if(D.depthNear>0)w=D.depthNear;if(D.depthFar>0)x=D.depthFar}if(g.near=d.near=A.near=w,g.far=d.far=A.far=x,Z0!==g.near||f!==g.far)W.updateRenderState({depthNear:g.near,depthFar:g.far}),Z0=g.near,f=g.far;g.layers.mask=Q0.layers.mask|6,A.layers.mask=g.layers.mask&-5,d.layers.mask=g.layers.mask&-3;let l=Q0.parent,e=g.cameras;F0(g,l);for(let t=0;t<e.length;t++)F0(e[t],l);if(e.length===2)Y0(g,A,d);else g.projectionMatrix.copy(A.projectionMatrix);if(k===null&&Q0.isPerspectiveCamera)k={camera:Q0,fov:Q0.fov,zoom:Q0.zoom};r0(Q0,g,l)};function r0(Q0,w,x){if(x===null)Q0.matrix.copy(w.matrixWorld);else Q0.matrix.copy(x.matrixWorld),Q0.matrix.invert(),Q0.matrix.multiply(w.matrixWorld);if(Q0.matrix.decompose(Q0.position,Q0.quaternion,Q0.scale),Q0.updateMatrixWorld(!0),Q0.projectionMatrix.copy(w.projectionMatrix),Q0.projectionMatrixInverse.copy(w.projectionMatrixInverse),Q0.isPerspectiveCamera)Q0.fov=w7*2*Math.atan(1/Q0.projectionMatrix.elements[5]),Q0.zoom=1}this.getCamera=function(){return g},this.getFoveation=function(){if(E===null&&G===null)return;return Y},this.setFoveation=function(Q0){if(Y=Q0,E!==null)E.fixedFoveation=Q0;if(G!==null&&G.fixedFoveation!==void 0)G.fixedFoveation=Q0},this.hasDepthSensing=function(){return D.texture!==null},this.getDepthSensingMesh=function(){return D.getMesh(g)},this.getCameraTexture=function(Q0){return O[Q0]};let T0=null;function x0(Q0,w){if(U=w.getViewerPose(X||K),F=w,U!==null){let x=U.views;if(G!==null)J.setRenderTargetFramebuffer(M,G.framebuffer),J.setRenderTarget(M);let l=!1;if(x.length!==g.cameras.length)g.cameras.length=0,l=!0;for(let L0=0;L0<x.length;L0++){let N0=x[L0],g0=null;if(G!==null)g0=G.getViewport(N0);else{let kJ=N.getViewSubImage(E,N0);if(g0=kJ.viewport,L0===0)J.setRenderTargetTextures(M,kJ.colorTexture,kJ.depthStencilTexture),J.setRenderTarget(M)}let c0=b[L0];if(c0===void 0)c0=new H8,c0.layers.enable(L0),c0.viewport=new gJ,b[L0]=c0;if(c0.matrix.fromArray(N0.transform.matrix),c0.matrix.decompose(c0.position,c0.quaternion,c0.scale),c0.projectionMatrix.fromArray(N0.projectionMatrix),c0.projectionMatrixInverse.copy(c0.projectionMatrix).invert(),c0.viewport.set(g0.x,g0.y,g0.width,g0.height),L0===0)g.matrix.copy(c0.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale);if(l===!0)g.cameras.push(c0)}let e=W.enabledFeatures;if(e&&e.includes("depth-sensing")&&W.depthUsage=="gpu-optimized"&&R){N=$.getBinding();let L0=N.getDepthInformation(x[0]);if(L0&&L0.isValid&&L0.texture)D.init(L0,W.renderState)}if(e&&e.includes("camera-access")&&R){J.state.unbindTexture(),N=$.getBinding();for(let L0=0;L0<x.length;L0++){let N0=x[L0].camera;if(N0){let g0=O[N0];if(!g0)g0=new CW,O[N0]=g0;let c0=N.getCameraImage(N0);g0.sourceTexture=c0}}}}for(let x=0;x<L.length;x++){let l=P[x],e=L[x];if(l!==null&&e!==void 0)e.update(l,w,X||K)}if(T0)T0(Q0,w);if(w.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:w});F=null}let e0=new qU;e0.setAnimationLoop(x0),this.setAnimationLoop=function(Q0){T0=Q0},this.dispose=function(){}}}var sq=new QJ,AU=new YJ;AU.set(-1,0,0,0,1,0,0,0,1);function iq(J,Q){function $(O,q){if(O.matrixAutoUpdate===!0)O.updateMatrix();q.value.copy(O.matrix)}function W(O,q){if(q.color.getRGB(O.fogColor.value,hK(J)),q.isFog)O.fogNear.value=q.near,O.fogFar.value=q.far;else if(q.isFogExp2)O.fogDensity.value=q.density}function Z(O,q,V,M,L){if(q.isNodeMaterial)q.uniformsNeedUpdate=!1;else if(q.isMeshBasicMaterial)K(O,q);else if(q.isMeshLambertMaterial){if(K(O,q),q.envMap)O.envMapIntensity.value=q.envMapIntensity}else if(q.isMeshToonMaterial)K(O,q),E(O,q);else if(q.isMeshPhongMaterial){if(K(O,q),N(O,q),q.envMap)O.envMapIntensity.value=q.envMapIntensity}else if(q.isMeshStandardMaterial){if(K(O,q),G(O,q),q.isMeshPhysicalMaterial)F(O,q,L)}else if(q.isMeshMatcapMaterial)K(O,q),R(O,q);else if(q.isMeshDepthMaterial)K(O,q);else if(q.isMeshDistanceMaterial)K(O,q),D(O,q);else if(q.isMeshNormalMaterial)K(O,q);else if(q.isLineBasicMaterial){if(H(O,q),q.isLineDashedMaterial)Y(O,q)}else if(q.isPointsMaterial)X(O,q,V,M);else if(q.isSpriteMaterial)U(O,q);else if(q.isShadowMaterial)O.color.value.copy(q.color),O.opacity.value=q.opacity;else if(q.isShaderMaterial)q.uniformsNeedUpdate=!1}function K(O,q){if(O.opacity.value=q.opacity,q.color)O.diffuse.value.copy(q.color);if(q.emissive)O.emissive.value.copy(q.emissive).multiplyScalar(q.emissiveIntensity);if(q.map)O.map.value=q.map,$(q.map,O.mapTransform);if(q.alphaMap)O.alphaMap.value=q.alphaMap,$(q.alphaMap,O.alphaMapTransform);if(q.bumpMap){if(O.bumpMap.value=q.bumpMap,$(q.bumpMap,O.bumpMapTransform),O.bumpScale.value=q.bumpScale,q.side===L8)O.bumpScale.value*=-1}if(q.normalMap){if(O.normalMap.value=q.normalMap,$(q.normalMap,O.normalMapTransform),O.normalScale.value.copy(q.normalScale),q.side===L8)O.normalScale.value.negate()}if(q.displacementMap)O.displacementMap.value=q.displacementMap,$(q.displacementMap,O.displacementMapTransform),O.displacementScale.value=q.displacementScale,O.displacementBias.value=q.displacementBias;if(q.emissiveMap)O.emissiveMap.value=q.emissiveMap,$(q.emissiveMap,O.emissiveMapTransform);if(q.specularMap)O.specularMap.value=q.specularMap,$(q.specularMap,O.specularMapTransform);if(q.alphaTest>0)O.alphaTest.value=q.alphaTest;let V=Q.get(q),M=V.envMap,L=V.envMapRotation;if(M){if(O.envMap.value=M,O.envMapRotation.value.setFromMatrix4(sq.makeRotationFromEuler(L)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1)O.envMapRotation.value.premultiply(AU);O.reflectivity.value=q.reflectivity,O.ior.value=q.ior,O.refractionRatio.value=q.refractionRatio}if(q.lightMap)O.lightMap.value=q.lightMap,O.lightMapIntensity.value=q.lightMapIntensity,$(q.lightMap,O.lightMapTransform);if(q.aoMap)O.aoMap.value=q.aoMap,O.aoMapIntensity.value=q.aoMapIntensity,$(q.aoMap,O.aoMapTransform)}function H(O,q){if(O.diffuse.value.copy(q.color),O.opacity.value=q.opacity,q.map)O.map.value=q.map,$(q.map,O.mapTransform)}function Y(O,q){O.dashSize.value=q.dashSize,O.totalSize.value=q.dashSize+q.gapSize,O.scale.value=q.scale}function X(O,q,V,M){if(O.diffuse.value.copy(q.color),O.opacity.value=q.opacity,O.size.value=q.size*V,O.scale.value=M*0.5,q.map)O.map.value=q.map,$(q.map,O.uvTransform);if(q.alphaMap)O.alphaMap.value=q.alphaMap,$(q.alphaMap,O.alphaMapTransform);if(q.alphaTest>0)O.alphaTest.value=q.alphaTest}function U(O,q){if(O.diffuse.value.copy(q.color),O.opacity.value=q.opacity,O.rotation.value=q.rotation,q.map)O.map.value=q.map,$(q.map,O.mapTransform);if(q.alphaMap)O.alphaMap.value=q.alphaMap,$(q.alphaMap,O.alphaMapTransform);if(q.alphaTest>0)O.alphaTest.value=q.alphaTest}function N(O,q){O.specular.value.copy(q.specular),O.shininess.value=Math.max(q.shininess,0.0001)}function E(O,q){if(q.gradientMap)O.gradientMap.value=q.gradientMap}function G(O,q){if(O.metalness.value=q.metalness,q.metalnessMap)O.metalnessMap.value=q.metalnessMap,$(q.metalnessMap,O.metalnessMapTransform);if(O.roughness.value=q.roughness,q.roughnessMap)O.roughnessMap.value=q.roughnessMap,$(q.roughnessMap,O.roughnessMapTransform);if(q.envMap)O.envMapIntensity.value=q.envMapIntensity}function F(O,q,V){if(O.ior.value=q.ior,q.sheen>0){if(O.sheenColor.value.copy(q.sheenColor).multiplyScalar(q.sheen),O.sheenRoughness.value=q.sheenRoughness,q.sheenColorMap)O.sheenColorMap.value=q.sheenColorMap,$(q.sheenColorMap,O.sheenColorMapTransform);if(q.sheenRoughnessMap)O.sheenRoughnessMap.value=q.sheenRoughnessMap,$(q.sheenRoughnessMap,O.sheenRoughnessMapTransform)}if(q.clearcoat>0){if(O.clearcoat.value=q.clearcoat,O.clearcoatRoughness.value=q.clearcoatRoughness,q.clearcoatMap)O.clearcoatMap.value=q.clearcoatMap,$(q.clearcoatMap,O.clearcoatMapTransform);if(q.clearcoatRoughnessMap)O.clearcoatRoughnessMap.value=q.clearcoatRoughnessMap,$(q.clearcoatRoughnessMap,O.clearcoatRoughnessMapTransform);if(q.clearcoatNormalMap){if(O.clearcoatNormalMap.value=q.clearcoatNormalMap,$(q.clearcoatNormalMap,O.clearcoatNormalMapTransform),O.clearcoatNormalScale.value.copy(q.clearcoatNormalScale),q.side===L8)O.clearcoatNormalScale.value.negate()}}if(q.dispersion>0)O.dispersion.value=q.dispersion;if(q.retroreflectivity>0)O.retroreflectivity.value=q.retroreflectivity;if(q.iridescence>0){if(O.iridescence.value=q.iridescence,O.iridescenceIOR.value=q.iridescenceIOR,O.iridescenceThicknessMinimum.value=q.iridescenceThicknessRange[0],O.iridescenceThicknessMaximum.value=q.iridescenceThicknessRange[1],q.iridescenceMap)O.iridescenceMap.value=q.iridescenceMap,$(q.iridescenceMap,O.iridescenceMapTransform);if(q.iridescenceThicknessMap)O.iridescenceThicknessMap.value=q.iridescenceThicknessMap,$(q.iridescenceThicknessMap,O.iridescenceThicknessMapTransform)}if(q.transmission>0){if(O.transmission.value=q.transmission,O.transmissionSamplerMap.value=V.texture,O.transmissionSamplerSize.value.set(V.width,V.height),q.transmissionMap)O.transmissionMap.value=q.transmissionMap,$(q.transmissionMap,O.transmissionMapTransform);if(O.thickness.value=q.thickness,q.thicknessMap)O.thicknessMap.value=q.thicknessMap,$(q.thicknessMap,O.thicknessMapTransform);O.attenuationDistance.value=q.attenuationDistance,O.attenuationColor.value.copy(q.attenuationColor)}if(q.anisotropy>0){if(O.anisotropyVector.value.set(q.anisotropy*Math.cos(q.anisotropyRotation),q.anisotropy*Math.sin(q.anisotropyRotation)),q.anisotropyMap)O.anisotropyMap.value=q.anisotropyMap,$(q.anisotropyMap,O.anisotropyMapTransform)}if(O.specularIntensity.value=q.specularIntensity,O.specularColor.value.copy(q.specularColor),q.specularColorMap)O.specularColorMap.value=q.specularColorMap,$(q.specularColorMap,O.specularColorMapTransform);if(q.specularIntensityMap)O.specularIntensityMap.value=q.specularIntensityMap,$(q.specularIntensityMap,O.specularIntensityMapTransform)}function R(O,q){if(q.matcap)O.matcap.value=q.matcap}function D(O,q){let V=Q.get(q).light;O.referencePosition.value.setFromMatrixPosition(V.matrixWorld),O.nearDistance.value=V.shadow.camera.near,O.farDistance.value=V.shadow.camera.far}return{refreshFogUniforms:W,refreshMaterialUniforms:Z}}function oq(J,Q,$,W){let Z={},K={},H=[],Y=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function X(L,P){let I=P.program;W.uniformBlockBinding(L,I)}function U(L,P){let I=Z[L.id];if(I===void 0)O(L),I=N(L),Z[L.id]=I,L.addEventListener("dispose",V);let S=P.program;W.updateUBOMapping(L,S);let k=Q.render.frame;if(K[L.id]!==k)G(L),K[L.id]=k}function N(L){let P=E();L.__bindingPointIndex=P;let I=J.createBuffer(),S=L.__size,k=L.usage;return J.bindBuffer(J.UNIFORM_BUFFER,I),J.bufferData(J.UNIFORM_BUFFER,S,k),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,P,I),I}function E(){for(let L=0;L<Y;L++)if(H.indexOf(L)===-1)return H.push(L),L;return $J("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function G(L){let P=Z[L.id],I=L.uniforms,S=L.__cache;J.bindBuffer(J.UNIFORM_BUFFER,P);for(let k=0,A=I.length;k<A;k++){let d=I[k];if(Array.isArray(d))for(let b=0,g=d.length;b<g;b++)F(d[b],k,b,S);else F(d,k,0,S)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function F(L,P,I,S){if(D(L,P,I,S)===!0){let{__offset:k,value:A}=L;if(Array.isArray(A)){let d=0;for(let b=0;b<A.length;b++){let g=A[b],Z0=q(g);if(R(g,L.__data,d),typeof g!=="number"&&typeof g!=="boolean"&&!g.isMatrix3&&!ArrayBuffer.isView(g))d+=Z0.storage/Float32Array.BYTES_PER_ELEMENT}}else R(A,L.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,k,L.__data)}}function R(L,P,I){if(typeof L==="number"||typeof L==="boolean")P[0]=L;else if(L.isMatrix3)P[0]=L.elements[0],P[1]=L.elements[1],P[2]=L.elements[2],P[3]=0,P[4]=L.elements[3],P[5]=L.elements[4],P[6]=L.elements[5],P[7]=0,P[8]=L.elements[6],P[9]=L.elements[7],P[10]=L.elements[8],P[11]=0;else if(ArrayBuffer.isView(L))P.set(new L.constructor(L.buffer,L.byteOffset,P.length));else L.toArray(P,I)}function D(L,P,I,S){let k=L.value,A=P+"_"+I;if(S[A]===void 0){if(typeof k==="number"||typeof k==="boolean")S[A]=k;else if(ArrayBuffer.isView(k))S[A]=k.slice();else S[A]=k.clone();return!0}else{let d=S[A];if(typeof k==="number"||typeof k==="boolean"){if(d!==k)return S[A]=k,!0}else if(ArrayBuffer.isView(k))return!0;else if(d.equals(k)===!1)return d.copy(k),!0}return!1}function O(L){let P=L.uniforms,I=0,S=16;for(let A=0,d=P.length;A<d;A++){let b=Array.isArray(P[A])?P[A]:[P[A]];for(let g=0,Z0=b.length;g<Z0;g++){let f=b[g],o=Array.isArray(f.value)?f.value:[f.value];for(let s=0,p=o.length;s<p;s++){let X0=o[s],a=q(X0),Y0=I%S,F0=Y0%a.boundary,r0=Y0+F0;if(I+=F0,r0!==0&&S-r0<a.storage)I+=S-r0;f.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),f.__offset=I,I+=a.storage}}}let k=I%S;if(k>0)I+=S-k;return L.__size=I,L.__cache={},this}function q(L){let P={boundary:0,storage:0};if(typeof L==="number"||typeof L==="boolean")P.boundary=4,P.storage=4;else if(L.isVector2)P.boundary=8,P.storage=8;else if(L.isVector3||L.isColor)P.boundary=16,P.storage=12;else if(L.isVector4)P.boundary=16,P.storage=16;else if(L.isMatrix3)P.boundary=48,P.storage=48;else if(L.isMatrix4)P.boundary=64,P.storage=64;else if(L.isTexture)o0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(L))P.boundary=16,P.storage=L.byteLength;else o0("WebGLRenderer: Unsupported uniform value type.",L);return P}function V(L){let P=L.target;P.removeEventListener("dispose",V);let I=H.indexOf(P.__bindingPointIndex);H.splice(I,1),J.deleteBuffer(Z[P.id]),delete Z[P.id],delete K[P.id]}function M(){for(let L in Z)J.deleteBuffer(Z[L]);H=[],Z={},K={}}return{bind:X,update:U,dispose:M}}var aq=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),w9=null;function rq(){if(w9===null)w9=new uQ(aq,16,16,g7,q8),w9.name="DFG_LUT",w9.minFilter=F8,w9.magFilter=F8,w9.wrapS=h6,w9.wrapT=h6,w9.generateMipmaps=!1,w9.needsUpdate=!0;return w9}class UH{constructor(J={}){let{canvas:Q=TX(),context:$=null,depth:W=!0,stencil:Z=!1,alpha:K=!1,antialias:H=!1,premultipliedAlpha:Y=!0,preserveDrawingBuffer:X=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:N=!1,reversedDepthBuffer:E=!1,outputBufferType:G=G9}=J;this.isWebGLRenderer=!0;let F;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");F=$.getContextAttributes().alpha}else F=K;let R=G,D=new Set([dZ,uZ,mZ]),O=new Set([G9,G7,xQ,g6,pZ,lZ]),q=new Uint32Array(4),V=new Int32Array(4),M=new T,L=null,P=null,I=[],S=[],k=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=U9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,d=!1,b=null,g=null,Z0=null,f=null;this._outputColorSpace=Y8;let o=0,s=0,p=null,X0=-1,a=null,Y0=new gJ,F0=new gJ,r0=null,T0=new h0(0),x0=0,e0=Q.width,Q0=Q.height,w=1,x=null,l=null,e=new gJ(0,0,e0,Q0),t=new gJ(0,0,e0,Q0),D0=!1,L0=new cQ,N0=!1,g0=!1,c0=new QJ,kJ=new T,j0=new gJ,MJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_J=!1;function bJ(){return p===null?w:1}let y=$;function nJ(C,v){return Q.getContext(C,v)}let XJ,RJ,z,B,j,i,q0,B0,z0,$0,H0,k0,n0,M0,V0,t0,a0,CJ,h,A0,W0,P0,v0;try{let C={alpha:!0,depth:W,stencil:Z,antialias:H,premultipliedAlpha:Y,preserveDrawingBuffer:X,powerPreference:U,failIfMajorPerformanceCaveat:N};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${fY}`);if(Q.addEventListener("webglcontextlost",ZJ,!1),Q.addEventListener("webglcontextrestored",uJ,!1),Q.addEventListener("webglcontextcreationerror",SJ,!1),y===null){if(y=nJ("webgl2",C),y===null)if(nJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}O0()}catch(C){throw Q.removeEventListener("webglcontextlost",ZJ,!1),Q.removeEventListener("webglcontextrestored",uJ,!1),Q.removeEventListener("webglcontextcreationerror",SJ,!1),$J("WebGLRenderer: "+C.message),C}function O0(){if(XJ=new Z1(y),XJ.init(),W0=new dq(y,XJ),RJ=new iF(y,XJ,J,W0),z=new mq(y,XJ),RJ.reversedDepthBuffer&&E)z.buffers.depth.setReversed(!0);g=y.createFramebuffer(),Z0=y.createFramebuffer(),f=y.createFramebuffer(),B=new Y1(y),j=new _q,i=new uq(y,XJ,z,j,RJ,W0,B),q0=new W1(A),B0=new UG(y),P0=new nF(y,B0),z0=new K1(y,B0,B,P0),$0=new U1(y,z0,B0,P0,B),CJ=new X1(y,RJ,i),V0=new oF(j),H0=new Aq(A,q0,XJ,RJ,P0,V0),k0=new iq(A,j),n0=new Sq,M0=new bq(XJ),a0=new cF(A,q0,z,$0,F,Y),t0=new lq(A,$0,RJ),v0=new oq(y,B,RJ,z),h=new sF(y,XJ,B),A0=new H1(y,XJ,B),B.programs=H0.programs,A.capabilities=RJ,A.extensions=XJ,A.properties=j,A.renderLists=n0,A.shadowMap=t0,A.state=z,A.info=B}if(R!==G9)k=new G1(R,Q.width,Q.height,H,W,Z);let S0=new zU(A,y);this.xr=S0,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){let C=XJ.get("WEBGL_lose_context");if(C)C.loseContext()},this.forceContextRestore=function(){let C=XJ.get("WEBGL_lose_context");if(C)C.restoreContext()},this.getPixelRatio=function(){return w},this.setPixelRatio=function(C){if(C===void 0)return;w=C,this.setSize(e0,Q0,!1)},this.getSize=function(C){return C.set(e0,Q0)},this.setSize=function(C,v,r=!0){if(S0.isPresenting){o0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(e0=C,Q0=v,Q.width=Math.floor(C*w),Q.height=Math.floor(v*w),r===!0)Q.style.width=C+"px",Q.style.height=v+"px";if(k!==null)k.setSize(Q.width,Q.height);this.setViewport(0,0,C,v)},this.getDrawingBufferSize=function(C){return C.set(e0*w,Q0*w).floor()},this.setDrawingBufferSize=function(C,v,r){e0=C,Q0=v,w=r,Q.width=Math.floor(C*r),Q.height=Math.floor(v*r),this.setViewport(0,0,C,v)},this.setEffects=function(C){if(R===G9){$J("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let v=0;v<C.length;v++)if(C[v].isOutputPass===!0){o0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Y0)},this.getViewport=function(C){return C.copy(e)},this.setViewport=function(C,v,r,n){if(C.isVector4)e.set(C.x,C.y,C.z,C.w);else e.set(C,v,r,n);z.viewport(Y0.copy(e).multiplyScalar(w).round())},this.getScissor=function(C){return C.copy(t)},this.setScissor=function(C,v,r,n){if(C.isVector4)t.set(C.x,C.y,C.z,C.w);else t.set(C,v,r,n);z.scissor(F0.copy(t).multiplyScalar(w).round())},this.getScissorTest=function(){return D0},this.setScissorTest=function(C){z.setScissorTest(D0=C)},this.setOpaqueSort=function(C){x=C},this.setTransparentSort=function(C){l=C},this.getClearColor=function(C){return C.copy(a0.getClearColor())},this.setClearColor=function(){a0.setClearColor(...arguments)},this.getClearAlpha=function(){return a0.getClearAlpha()},this.setClearAlpha=function(){a0.setClearAlpha(...arguments)},this.clear=function(C=!0,v=!0,r=!0){let n=0;if(C){let c=!1;if(p!==null){let _0=p.texture.format;c=D.has(_0)}if(c){let _0=p.texture.type,l0=O.has(_0),w0=a0.getClearColor(),d0=a0.getClearAlpha(),s0=w0.r,HJ=w0.g,KJ=w0.b;if(l0)q[0]=s0,q[1]=HJ,q[2]=KJ,q[3]=d0,y.clearBufferuiv(y.COLOR,0,q);else V[0]=s0,V[1]=HJ,V[2]=KJ,V[3]=d0,y.clearBufferiv(y.COLOR,0,V)}else n|=y.COLOR_BUFFER_BIT}if(v)n|=y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(r)n|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(n!==0)y.clear(n)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),b=C},this.dispose=function(){Q.removeEventListener("webglcontextlost",ZJ,!1),Q.removeEventListener("webglcontextrestored",uJ,!1),Q.removeEventListener("webglcontextcreationerror",SJ,!1),a0.dispose(),n0.dispose(),M0.dispose(),j.dispose(),q0.dispose(),$0.dispose(),P0.dispose(),v0.dispose(),H0.dispose(),S0.dispose(),S0.removeEventListener("sessionstart",R8),S0.removeEventListener("sessionend",Y6),k9.stop()};function ZJ(C){C.preventDefault(),zQ("WebGLRenderer: Context Lost."),d=!0}function uJ(){zQ("WebGLRenderer: Context Restored."),d=!1;let C=B.autoReset,v=t0.enabled,r=t0.autoUpdate,n=t0.needsUpdate,c=t0.type;O0(),B.autoReset=C,t0.enabled=v,t0.autoUpdate=r,t0.needsUpdate=n,t0.type=c}function SJ(C){$J("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function l8(C){let v=C.target;v.removeEventListener("dispose",l8),Q9(v)}function Q9(C){R$(C),j.remove(C)}function R$(C){let v=j.get(C).programs;if(v!==void 0){if(v.forEach(function(r){H0.releaseProgram(r)}),C.isShaderMaterial)H0.releaseShaderCache(C)}}this.renderBufferDirect=function(C,v,r,n,c,_0){if(v===null)v=MJ;let l0=c.isMesh&&c.matrixWorld.determinantAffine()<0,w0=JZ(C,v,r,n,c);z.setMaterial(n,l0);let d0=r.index,s0=1;if(n.wireframe===!0){if(d0=z0.getWireframeAttribute(r),d0===void 0)return;s0=2}let HJ=r.drawRange,KJ=r.attributes.position,u0=HJ.start*s0,EJ=(HJ.start+HJ.count)*s0;if(_0!==null)u0=Math.max(u0,_0.start*s0),EJ=Math.min(EJ,(_0.start+_0.count)*s0);if(d0!==null)u0=Math.max(u0,0),EJ=Math.min(EJ,d0.count);else if(KJ!==void 0&&KJ!==null)u0=Math.max(u0,0),EJ=Math.min(EJ,KJ.count);let iJ=EJ-u0;if(iJ<0||iJ===1/0)return;P0.setup(c,n,w0,r,d0);let hJ,jJ=h;if(d0!==null)hJ=B0.get(d0),jJ=A0,jJ.setIndex(hJ);if(c.isMesh)if(n.wireframe===!0)z.setLineWidth(n.wireframeLinewidth*bJ()),jJ.setMode(y.LINES);else jJ.setMode(y.TRIANGLES);else if(c.isLine){let G8=n.linewidth;if(G8===void 0)G8=1;if(z.setLineWidth(G8*bJ()),c.isLineSegments)jJ.setMode(y.LINES);else if(c.isLineLoop)jJ.setMode(y.LINE_LOOP);else jJ.setMode(y.LINE_STRIP)}else if(c.isPoints)jJ.setMode(y.POINTS);else if(c.isSprite)jJ.setMode(y.TRIANGLES);if(c.isBatchedMesh)if(!XJ.get("WEBGL_multi_draw")){let{_multiDrawStarts:G8,_multiDrawCounts:f0,_multiDrawCount:K8}=c,PJ=d0?B0.get(d0).bytesPerElement:1,P8=j.get(n).currentProgram.getUniforms();for(let m8=0;m8<K8;m8++)P8.setValue(y,"_gl_DrawID",m8),jJ.render(G8[m8]/PJ,f0[m8])}else jJ.renderMultiDraw(c._multiDrawStarts,c._multiDrawCounts,c._multiDrawCount);else if(c.isInstancedMesh)jJ.renderInstances(u0,iJ,c.count);else if(r.isInstancedBufferGeometry){let G8=r._maxInstanceCount!==void 0?r._maxInstanceCount:1/0,f0=Math.min(r.instanceCount,G8);jJ.renderInstances(u0,iJ,f0)}else jJ.render(u0,iJ)};function K6(C,v,r,n){if(b!==null&&C.isNodeMaterial)b.setObject(n,C);if(N0===!0)V0.setState(C,r,!1);if(C.transparent===!0&&C.side===sJ&&C.forceSinglePass===!1)C.side=L8,C.needsUpdate=!0,C7(C,v,n),C.side=U7,C.needsUpdate=!0,C7(C,v,n),C.side=sJ;else C7(C,v,n)}this.compile=function(C,v,r=null){if(r===null)r=C;if(b!==null)b.renderStart(C,v,r);if(P=M0.get(r),P.init(v),S.push(P),r.traverseVisible(function(c){if(c.isLight&&c.layers.test(v.layers)){if(P.pushLight(c),c.castShadow)P.pushShadow(c)}}),C!==r)C.traverseVisible(function(c){if(c.isLight&&c.layers.test(v.layers)){if(P.pushLight(c),c.castShadow)P.pushShadow(c)}});if(P.setupLights(),b!==null)b.updateLights(P.state.lightsArray);if(g0=this.localClippingEnabled,N0=V0.init(this.clippingPlanes,g0),N0===!0)V0.setGlobalState(this.clippingPlanes,v);if(b!==null)t0.render(P.state.shadowsArray,r,v);let n=new Set;if(C.traverse(function(c){if(!(c.isMesh||c.isPoints||c.isLine||c.isSprite))return;let _0=c.material;if(_0)if(Array.isArray(_0))for(let l0=0;l0<_0.length;l0++){let w0=_0[l0];K6(w0,r,v,c),n.add(w0)}else K6(_0,r,v,c),n.add(_0)}),P=S.pop(),b!==null)b.renderEnd();return n},this.compileAsync=function(C,v,r=null){let n=this.compile(C,v,r);return new Promise((c)=>{function _0(){if(n.forEach(function(l0){let d0=j.get(l0).currentProgram;if(d0===void 0||d0.isReady())n.delete(l0)}),n.size===0){c(C);return}setTimeout(_0,10)}if(XJ.get("KHR_parallel_shader_compile")!==null)_0();else setTimeout(_0,10)})};let H6=null;function ZQ(C){if(H6)H6(C)}function R8(){k9.stop()}function Y6(){k9.start()}let k9=new qU;if(k9.setAnimationLoop(ZQ),typeof self<"u")k9.setContext(self);this.setAnimationLoop=function(C){H6=C,S0.setAnimationLoop(C),C===null?k9.stop():k9.start()},S0.addEventListener("sessionstart",R8),S0.addEventListener("sessionend",Y6),this.render=function(C,v){if(v!==void 0&&v.isCamera!==!0){$J("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;if(b!==null)b.renderStart(C,v);let r=S0.enabled===!0&&S0.isPresenting===!0,n=k!==null&&(p===null||r)&&k.begin(A,p);if(C.matrixWorldAutoUpdate===!0)C.updateMatrixWorld();if(v.parent===null&&v.matrixWorldAutoUpdate===!0)v.updateMatrixWorld();if(S0.enabled===!0&&S0.isPresenting===!0&&(k===null||k.isCompositing()===!1)){if(S0.cameraAutoUpdate===!0)S0.updateCamera(v);v=S0.getCamera()}if(C.isScene===!0)C.onBeforeRender(A,C,v,p);if(P=M0.get(C,S.length),P.init(v),P.state.textureUnits=i.getTextureUnits(),S.push(P),c0.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),L0.setFromProjectionMatrix(c0,zK,v.reversedDepth),g0=this.localClippingEnabled,N0=V0.init(this.clippingPlanes,g0),L=n0.get(C,I.length),L.init(),I.push(L),S0.enabled===!0&&S0.isPresenting===!0){let l0=A.xr.getDepthSensingMesh();if(l0!==null)KQ(l0,v,-1/0,A.sortObjects)}if(KQ(C,v,0,A.sortObjects),L.finish(),b!==null)b.updateLights(P.state.lightsArray);if(A.sortObjects===!0)L.sort(x,l);if(_J=S0.enabled===!1||S0.isPresenting===!1||S0.hasDepthSensing()===!1,_J)a0.addToRenderList(L,C);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(N0===!0)V0.beginShadows();let c=P.state.shadowsArray;if(t0.render(c,C,v),N0===!0)V0.endShadows();if((n&&k.hasRenderPass())===!1){let{opaque:l0,transmissive:w0}=L;if(P.setupLights(),v.isArrayCamera){let d0=v.cameras;if(w0.length>0)for(let s0=0,HJ=d0.length;s0<HJ;s0++){let KJ=d0[s0];M7(l0,w0,C,KJ)}if(_J)a0.render(C);for(let s0=0,HJ=d0.length;s0<HJ;s0++){let KJ=d0[s0];HQ(L,C,KJ,KJ.viewport)}}else{if(w0.length>0)M7(l0,w0,C,v);if(_J)a0.render(C);HQ(L,C,v)}}if(p!==null&&s===0)i.updateMultisampleRenderTarget(p),i.updateRenderTargetMipmap(p);if(n)k.end(A);if(C.isScene===!0)C.onAfterRender(A,C,v);if(P0.resetDefaultState(),X0=-1,a=null,S.pop(),S.length>0){if(P=S[S.length-1],i.setTextureUnits(P.state.textureUnits),N0===!0)V0.setGlobalState(A.clippingPlanes,P.state.camera)}else P=null;if(I.pop(),I.length>0)L=I[I.length-1];else L=null;if(b!==null)b.renderEnd()};function KQ(C,v,r,n){if(C.visible===!1)return;if(C.layers.test(v.layers)){if(C.isGroup)r=C.renderOrder;else if(C.isLOD){if(C.autoUpdate===!0)C.update(v)}else if(C.isLightProbeGrid)P.pushLightProbeGrid(C);else if(C.isLight){if(P.pushLight(C),C.castShadow)P.pushShadow(C)}else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(L0)){if(n)j0.setFromMatrixPosition(C.matrixWorld).applyMatrix4(c0);let l0=$0.update(C),w0=C.material;if(w0.visible)L.push(C,l0,w0,r,j0.z,null,v)}}else if(C.isMesh||C.isLine||C.isPoints){if(!C.frustumCulled||C.intersectsFrustum(L0)){let l0=$0.update(C),w0=C.material;if(n){if(C.boundingSphere!==void 0){if(C.boundingSphere===null)C.computeBoundingSphere();j0.copy(C.boundingSphere.center)}else{if(l0.boundingSphere===null)l0.computeBoundingSphere();j0.copy(l0.boundingSphere.center)}j0.applyMatrix4(C.matrixWorld).applyMatrix4(c0)}if(Array.isArray(w0)){let d0=l0.groups;for(let s0=0,HJ=d0.length;s0<HJ;s0++){let KJ=d0[s0],u0=w0[KJ.materialIndex];if(u0&&u0.visible)L.push(C,l0,u0,r,j0.z,KJ,v)}}else if(w0.visible)L.push(C,l0,w0,r,j0.z,null,v)}}}let _0=C.children;for(let l0=0,w0=_0.length;l0<w0;l0++)KQ(_0[l0],v,r,n)}function HQ(C,v,r,n){let{opaque:c,transmissive:_0,transparent:l0}=C;if(P.setupLightsView(r),N0===!0)V0.setGlobalState(A.clippingPlanes,r);if(n)z.viewport(Y0.copy(n));if(c.length>0)M9(c,v,r);if(_0.length>0)M9(_0,v,r);if(l0.length>0)M9(l0,v,r);z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function M7(C,v,r,n){if((r.isScene===!0?r.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[n.id]===void 0){let u0=XJ.has("EXT_color_buffer_half_float")||XJ.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[n.id]=new J8(1,1,{generateMipmaps:!0,type:u0?q8:G9,minFilter:A9,samples:Math.max(4,RJ.samples),stencilBuffer:Z,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:GJ.workingColorSpace})}let _0=P.state.transmissionRenderTarget[n.id],l0=n.viewport||Y0;_0.setSize(l0.z*A.transmissionResolutionScale,l0.w*A.transmissionResolutionScale);let w0=A.getRenderTarget(),d0=A.getActiveCubeFace(),s0=A.getActiveMipmapLevel();if(A.setRenderTarget(_0),A.getClearColor(T0),x0=A.getClearAlpha(),x0<1)A.setClearColor(16777215,0.5);if(A.clear(),_J)a0.render(r);let HJ=A.toneMapping;A.toneMapping=U9;let KJ=n.viewport;if(n.viewport!==void 0)n.viewport=void 0;if(P.setupLightsView(n),N0===!0)V0.setGlobalState(A.clippingPlanes,n);if(M9(C,r,n),i.updateMultisampleRenderTarget(_0),i.updateRenderTargetMipmap(_0),XJ.has("WEBGL_multisampled_render_to_texture")===!1){let u0=!1;for(let EJ=0,iJ=v.length;EJ<iJ;EJ++){let hJ=v[EJ],{object:jJ,geometry:G8,material:f0,group:K8}=hJ;if(f0.side===sJ&&jJ.layers.test(n.layers)){let PJ=f0.side;f0.side=L8,f0.needsUpdate=!0,eW(jJ,r,n,G8,f0,K8),f0.side=PJ,f0.needsUpdate=!0,u0=!0}}if(u0===!0)i.updateMultisampleRenderTarget(_0),i.updateRenderTargetMipmap(_0)}if(A.setRenderTarget(w0,d0,s0),A.setClearColor(T0,x0),KJ!==void 0)n.viewport=KJ;A.toneMapping=HJ}function M9(C,v,r){let n=v.isScene===!0?v.overrideMaterial:null;for(let c=0,_0=C.length;c<_0;c++){let l0=C[c],{object:w0,geometry:d0,group:s0}=l0,HJ=l0.material;if(HJ.allowOverride===!0&&n!==null)HJ=n;if(w0.layers.test(r.layers))eW(w0,v,r,d0,HJ,s0)}}function eW(C,v,r,n,c,_0){if(b!==null&&c.isNodeMaterial)b.setObject(C,c);if(C.onBeforeRender(A,v,r,n,c,_0),C.modelViewMatrix.multiplyMatrices(r.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),c.onBeforeRender(A,v,r,n,C,_0),c.transparent===!0&&c.side===sJ&&c.forceSinglePass===!1)c.side=L8,c.needsUpdate=!0,A.renderBufferDirect(r,v,n,c,C,_0),c.side=U7,c.needsUpdate=!0,A.renderBufferDirect(r,v,n,c,C,_0),c.side=sJ;else A.renderBufferDirect(r,v,n,c,C,_0);C.onAfterRender(A,v,r,n,c,_0)}function C7(C,v,r){if(v.isScene!==!0)v=MJ;let n=j.get(C),c=P.state.lights,_0=P.state.shadowsArray,l0=c.state.version,w0=H0.getParameters(C,c.state,_0,v,r,P.state.lightProbeGridArray),d0=H0.getProgramCacheKey(w0),s0=n.programs;n.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?v.environment:null,n.fog=v.fog;let HJ=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;if(n.envMap=q0.get(C.envMap||n.environment,HJ),n.envMapRotation=n.environment!==null&&C.envMap===null?v.environmentRotation:C.envMapRotation,s0===void 0)C.addEventListener("dispose",l8),s0=new Map,n.programs=s0;let KJ=s0.get(d0);if(KJ!==void 0){if(n.currentProgram===KJ&&n.lightsStateVersion===l0)return Z8(C,w0),KJ}else{if(w0.uniforms=H0.getUniforms(C),b!==null&&C.isNodeMaterial)b.build(C,r,w0);C.onBeforeCompile(w0,A),KJ=H0.acquireProgram(w0,d0),s0.set(d0,KJ),n.uniforms=w0.uniforms}let u0=n.uniforms;if(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)u0.clippingPlanes=V0.uniform;if(Z8(C,w0),n.needsLights=YQ(C),n.lightsStateVersion=l0,n.needsLights)u0.ambientLightColor.value=c.state.ambient,u0.lightProbe.value=c.state.probe,u0.sunLights.value=c.state.sun,u0.sunLightShadows.value=c.state.sunShadow,u0.directionalLights.value=c.state.directional,u0.directionalLightShadows.value=c.state.directionalShadow,u0.spotLights.value=c.state.spot,u0.spotLightShadows.value=c.state.spotShadow,u0.rectAreaLights.value=c.state.rectArea,u0.ltc_1.value=c.state.rectAreaLTC1,u0.ltc_2.value=c.state.rectAreaLTC2,u0.pointLights.value=c.state.point,u0.pointLightShadows.value=c.state.pointShadow,u0.hemisphereLights.value=c.state.hemi,u0.sunShadowMatrix.value=c.state.sunShadowMatrix,u0.sunShadowCascade.value=c.state.sunShadowCascade,u0.directionalShadowMatrix.value=c.state.directionalShadowMatrix,u0.spotLightMatrix.value=c.state.spotLightMatrix,u0.spotLightMap.value=c.state.spotLightMap,u0.pointShadowMatrix.value=c.state.pointShadowMatrix;return n.lightProbeGrid=P.state.lightProbeGridArray.length>0,n.currentProgram=KJ,n.uniformsList=null,KJ}function L$(C){if(C.uniformsList===null){let v=C.currentProgram.getUniforms();C.uniformsList=K$.seqWithValue(v.seq,C.uniforms)}return C.uniformsList}function Z8(C,v){let r=j.get(C);r.outputColorSpace=v.outputColorSpace,r.batching=v.batching,r.batchingColor=v.batchingColor,r.instancing=v.instancing,r.instancingColor=v.instancingColor,r.instancingMorph=v.instancingMorph,r.skinning=v.skinning,r.morphTargets=v.morphTargets,r.morphNormals=v.morphNormals,r.morphColors=v.morphColors,r.morphTargetsCount=v.morphTargetsCount,r.numClippingPlanes=v.numClippingPlanes,r.numIntersection=v.numClipIntersection,r.vertexAlphas=v.vertexAlphas,r.vertexTangents=v.vertexTangents,r.toneMapping=v.toneMapping}function $9(C,v){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;M.setFromMatrixPosition(v.matrixWorld);for(let r=0,n=C.length;r<n;r++){let c=C[r];if(c.texture!==null&&c.boundingBox.containsPoint(M))return c}return null}function JZ(C,v,r,n,c){if(v.isScene!==!0)v=MJ;i.resetTextureUnits();let _0=v.fog,l0=n.isMeshStandardMaterial||n.isMeshLambertMaterial||n.isMeshPhongMaterial?v.environment:null,w0=p===null?A.outputColorSpace:p.isXRRenderTarget===!0?p.texture.colorSpace:GJ.workingColorSpace,d0=n.isMeshStandardMaterial||n.isMeshLambertMaterial&&!n.envMap||n.isMeshPhongMaterial&&!n.envMap,s0=q0.get(n.envMap||l0,d0),HJ=n.vertexColors===!0&&!!r.attributes.color&&r.attributes.color.itemSize===4,KJ=!!r.attributes.tangent&&(!!n.normalMap||n.anisotropy>0),u0=!!r.morphAttributes.position,EJ=!!r.morphAttributes.normal,iJ=!!r.morphAttributes.color,hJ=U9;if(n.toneMapped){if(p===null||p.isXRRenderTarget===!0)hJ=A.toneMapping}let jJ=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,G8=jJ!==void 0?jJ.length:0,f0=j.get(n),K8=P.state.lights;if(N0===!0){if(g0===!0||C!==a){let FJ=C===a&&n.id===X0;V0.setState(n,C,FJ)}}let PJ=!1;if(n.version===f0.__version){if(f0.needsLights&&f0.lightsStateVersion!==K8.state.version)PJ=!0;else if(f0.outputColorSpace!==w0)PJ=!0;else if(c.isBatchedMesh&&f0.batching===!1)PJ=!0;else if(!c.isBatchedMesh&&f0.batching===!0)PJ=!0;else if(c.isBatchedMesh&&f0.batchingColor===!0&&c._colorsTexture===null)PJ=!0;else if(c.isBatchedMesh&&f0.batchingColor===!1&&c._colorsTexture!==null)PJ=!0;else if(c.isInstancedMesh&&f0.instancing===!1)PJ=!0;else if(!c.isInstancedMesh&&f0.instancing===!0)PJ=!0;else if(c.isSkinnedMesh&&f0.skinning===!1)PJ=!0;else if(!c.isSkinnedMesh&&f0.skinning===!0)PJ=!0;else if(c.isInstancedMesh&&f0.instancingColor===!0&&c.instanceColor===null)PJ=!0;else if(c.isInstancedMesh&&f0.instancingColor===!1&&c.instanceColor!==null)PJ=!0;else if(c.isInstancedMesh&&f0.instancingMorph===!0&&c.morphTexture===null)PJ=!0;else if(c.isInstancedMesh&&f0.instancingMorph===!1&&c.morphTexture!==null)PJ=!0;else if(f0.envMap!==s0)PJ=!0;else if(n.fog===!0&&f0.fog!==_0)PJ=!0;else if(f0.numClippingPlanes!==void 0&&(f0.numClippingPlanes!==V0.numPlanes||f0.numIntersection!==V0.numIntersection))PJ=!0;else if(f0.vertexAlphas!==HJ)PJ=!0;else if(f0.vertexTangents!==KJ)PJ=!0;else if(f0.morphTargets!==u0)PJ=!0;else if(f0.morphNormals!==EJ)PJ=!0;else if(f0.morphColors!==iJ)PJ=!0;else if(f0.toneMapping!==hJ)PJ=!0;else if(f0.morphTargetsCount!==G8)PJ=!0;else if(!!f0.lightProbeGrid!==P.state.lightProbeGridArray.length>0)PJ=!0}else PJ=!0,f0.__version=n.version;let P8=f0.currentProgram;if(PJ===!0){if(P8=C7(n,v,c),b&&n.isNodeMaterial)b.onUpdateProgram(n,P8,f0)}let m8=!1,V8=!1,t9=!1,yJ=P8.getUniforms(),oJ=f0.uniforms;if(z.useProgram(P8.program))m8=!0,V8=!0,t9=!0;if(n.id!==X0)X0=n.id,V8=!0;if(f0.needsLights){let FJ=$9(P.state.lightProbeGridArray,c);if(f0.lightProbeGrid!==FJ)f0.lightProbeGrid=FJ,V8=!0}if(m8||a!==C){if(z.buffers.depth.getReversed()&&C.reversedDepth!==!0)C._reversedDepth=!0,C.updateProjectionMatrix();yJ.setValue(y,"projectionMatrix",C.projectionMatrix),yJ.setValue(y,"viewMatrix",C.matrixWorldInverse);let S8=yJ.map.cameraPosition;if(S8!==void 0)S8.setValue(y,kJ.setFromMatrixPosition(C.matrixWorld));if(RJ.logarithmicDepthBuffer)yJ.setValue(y,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2));if(n.isMeshPhongMaterial||n.isMeshToonMaterial||n.isMeshLambertMaterial||n.isMeshBasicMaterial||n.isMeshStandardMaterial||n.isShaderMaterial)yJ.setValue(y,"isOrthographic",C.isOrthographicCamera===!0);if(a!==C)a=C,V8=!0,t9=!0}if(f0.needsLights){if(K8.state.sunShadowMap.length>0)yJ.setValue(y,"sunShadowMap",K8.state.sunShadowMap,i);if(K8.state.directionalShadowMap.length>0)yJ.setValue(y,"directionalShadowMap",K8.state.directionalShadowMap,i);if(K8.state.spotShadowMap.length>0)yJ.setValue(y,"spotShadowMap",K8.state.spotShadowMap,i);if(K8.state.pointShadowMap.length>0)yJ.setValue(y,"pointShadowMap",K8.state.pointShadowMap,i)}if(c.isSkinnedMesh){yJ.setOptional(y,c,"bindMatrix"),yJ.setOptional(y,c,"bindMatrixInverse");let FJ=c.skeleton;if(FJ){if(FJ.boneTexture===null)FJ.computeBoneTexture();yJ.setValue(y,"boneTexture",FJ.boneTexture,i)}}if(c.isBatchedMesh){if(yJ.setOptional(y,c,"batchingTexture"),yJ.setValue(y,"batchingTexture",c._matricesTexture,i),yJ.setOptional(y,c,"batchingIdTexture"),yJ.setValue(y,"batchingIdTexture",c._indirectTexture,i),yJ.setOptional(y,c,"batchingColorTexture"),c._colorsTexture!==null)yJ.setValue(y,"batchingColorTexture",c._colorsTexture,i)}let W9=r.morphAttributes;if(W9.position!==void 0||W9.normal!==void 0||W9.color!==void 0)CJ.update(c,r,P8);if(V8||f0.receiveShadow!==c.receiveShadow)f0.receiveShadow=c.receiveShadow,yJ.setValue(y,"receiveShadow",c.receiveShadow);if((n.isMeshStandardMaterial||n.isMeshLambertMaterial||n.isMeshPhongMaterial)&&n.envMap===null&&v.environment!==null)oJ.envMapIntensity.value=v.environmentIntensity;if(oJ.dfgLUT!==void 0)oJ.dfgLUT.value=rq();if(V8){if(yJ.setValue(y,"toneMappingExposure",A.toneMappingExposure),f0.needsLights)V$(oJ,t9);if(_0&&n.fog===!0)k0.refreshFogUniforms(oJ,_0);if(k0.refreshMaterialUniforms(oJ,n,w,Q0,P.state.transmissionRenderTarget[C.id]),f0.needsLights&&f0.lightProbeGrid){let FJ=f0.lightProbeGrid;oJ.probesSH.value=FJ.texture,oJ.probesMin.value.copy(FJ.boundingBox.min),oJ.probesMax.value.copy(FJ.boundingBox.max),oJ.probesResolution.value.copy(FJ.resolution)}K$.upload(y,L$(f0),oJ,i)}if(n.isShaderMaterial&&n.uniformsNeedUpdate===!0)K$.upload(y,L$(f0),oJ,i),n.uniformsNeedUpdate=!1;if(n.isSpriteMaterial)yJ.setValue(y,"center",c.center);if(yJ.setValue(y,"modelViewMatrix",c.modelViewMatrix),yJ.setValue(y,"normalMatrix",c.normalMatrix),yJ.setValue(y,"modelMatrix",c.matrixWorld),n.uniformsGroups!==void 0){let FJ=n.uniformsGroups;for(let S8=0,C9=FJ.length;S8<C9;S8++){let P7=FJ[S8];v0.update(P7,P8),v0.bind(P7,P8)}}return P8}function V$(C,v){C.ambientLightColor.needsUpdate=v,C.lightProbe.needsUpdate=v,C.sunLights.needsUpdate=v,C.sunLightShadows.needsUpdate=v,C.directionalLights.needsUpdate=v,C.directionalLightShadows.needsUpdate=v,C.pointLights.needsUpdate=v,C.pointLightShadows.needsUpdate=v,C.spotLights.needsUpdate=v,C.spotLightShadows.needsUpdate=v,C.rectAreaLights.needsUpdate=v,C.hemisphereLights.needsUpdate=v}function YQ(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return o},this.getActiveMipmapLevel=function(){return s},this.getRenderTarget=function(){return p},this.setRenderTargetTextures=function(C,v,r){let n=j.get(C);if(n.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,n.__autoAllocateDepthBuffer===!1)n.__useRenderToTexture=!1;j.get(C.texture).__webglTexture=v,j.get(C.depthTexture).__webglTexture=n.__autoAllocateDepthBuffer?void 0:r,n.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,v){let r=j.get(C);r.__webglFramebuffer=v,r.__useDefaultFramebuffer=v===void 0},this.setRenderTarget=function(C,v=0,r=0){p=C,o=v,s=r;let n=null,c=!1,_0=!1;if(C){let w0=j.get(C);if(w0.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(y.FRAMEBUFFER,w0.__webglFramebuffer),Y0.copy(C.viewport),F0.copy(C.scissor),r0=C.scissorTest,z.viewport(Y0),z.scissor(F0),z.setScissorTest(r0),X0=-1;return}else if(w0.__webglFramebuffer===void 0)i.setupRenderTarget(C);else if(w0.__hasExternalTextures)i.rebindTextures(C,j.get(C.texture).__webglTexture,j.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let HJ=C.depthTexture;if(w0.__boundDepthTexture!==HJ){if(HJ!==null&&j.has(HJ)&&(C.width!==HJ.image.width||C.height!==HJ.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");i.setupDepthRenderbuffer(C)}}let d0=C.texture;if(d0.isData3DTexture||d0.isDataArrayTexture||d0.isCompressedArrayTexture)_0=!0;let s0=j.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget){if(Array.isArray(s0[v]))n=s0[v][r];else n=s0[v];c=!0}else if(C.samples>0&&i.useMultisampledRTT(C)===!1)n=j.get(C).__webglMultisampledFramebuffer;else if(Array.isArray(s0))n=s0[r];else n=s0;Y0.copy(C.viewport),F0.copy(C.scissor),r0=C.scissorTest}else Y0.copy(e).multiplyScalar(w).floor(),F0.copy(t).multiplyScalar(w).floor(),r0=D0;if(r!==0)n=g;if(z.bindFramebuffer(y.FRAMEBUFFER,n))z.drawBuffers(C,n);if(z.viewport(Y0),z.scissor(F0),z.setScissorTest(r0),c){let w0=j.get(C.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+v,w0.__webglTexture,r)}else if(_0){let w0=v;for(let d0=0;d0<C.textures.length;d0++){let s0=j.get(C.textures[d0]);y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0+d0,s0.__webglTexture,r,w0)}}else if(C!==null&&r!==0){let w0=j.get(C.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,w0.__webglTexture,r)}X0=-1};function X6(C){let v=j.get(C);if(v.__readFormat!==C.format||v.__readType!==C.type)v.__readFormat=C.format,v.__readType=C.type,v.__formatReadable=RJ.textureFormatReadable(C.format),v.__typeReadable=RJ.textureTypeReadable(C.type);return v}if(this.readRenderTargetPixels=function(C,v,r,n,c,_0,l0,w0=0){if(!(C&&C.isWebGLRenderTarget)){$J("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let d0=j.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&l0!==void 0)d0=d0[l0];if(d0){z.bindFramebuffer(y.FRAMEBUFFER,d0);try{let s0=C.textures[w0],HJ=s0.format,KJ=s0.type;if(C.textures.length>1)y.readBuffer(y.COLOR_ATTACHMENT0+w0);let u0=X6(s0);if(u0.__formatReadable===!1){$J("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(u0.__typeReadable===!1){$J("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(v>=0&&v<=C.width-n&&(r>=0&&r<=C.height-c))y.readPixels(v,r,n,c,W0.convert(HJ),W0.convert(KJ),_0)}finally{let s0=p!==null?j.get(p).__webglFramebuffer:null;z.bindFramebuffer(y.FRAMEBUFFER,s0)}}},this.readRenderTargetPixelsAsync=async function(C,v,r,n,c,_0,l0,w0=0){if(!(C&&C.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let d0=j.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&l0!==void 0)d0=d0[l0];if(d0)if(v>=0&&v<=C.width-n&&(r>=0&&r<=C.height-c)){z.bindFramebuffer(y.FRAMEBUFFER,d0);let s0=C.textures[w0],HJ=s0.format,KJ=s0.type;if(C.textures.length>1)y.readBuffer(y.COLOR_ATTACHMENT0+w0);let u0=X6(s0);if(u0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(u0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let EJ=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,EJ),y.bufferData(y.PIXEL_PACK_BUFFER,_0.byteLength,y.STREAM_READ),y.readPixels(v,r,n,c,W0.convert(HJ),W0.convert(KJ),0),y.bindBuffer(y.PIXEL_PACK_BUFFER,null);let iJ=p!==null?j.get(p).__webglFramebuffer:null;z.bindFramebuffer(y.FRAMEBUFFER,iJ);let hJ=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await wX(y,hJ,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,EJ),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,_0),y.bindBuffer(y.PIXEL_PACK_BUFFER,null),y.deleteBuffer(EJ),y.deleteSync(hJ),_0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,v=null,r=0){let n=Math.pow(2,-r),c=Math.floor(C.image.width*n),_0=Math.floor(C.image.height*n),l0=v!==null?v.x:0,w0=v!==null?v.y:0;i.setTexture2D(C,0),y.copyTexSubImage2D(y.TEXTURE_2D,r,0,0,l0,w0,c,_0),z.unbindTexture()},this.copyTextureToTexture=function(C,v,r=null,n=null,c=0,_0=0){let l0,w0,d0,s0,HJ,KJ,u0,EJ,iJ,hJ=C.isCompressedTexture?C.mipmaps[_0]:C.image;if(r!==null)l0=r.max.x-r.min.x,w0=r.max.y-r.min.y,d0=r.isBox3?r.max.z-r.min.z:1,s0=r.min.x,HJ=r.min.y,KJ=r.isBox3?r.min.z:0;else{let oJ=Math.pow(2,-c);if(l0=Math.floor(hJ.width*oJ),w0=Math.floor(hJ.height*oJ),C.isDataArrayTexture)d0=hJ.depth;else if(C.isData3DTexture)d0=Math.floor(hJ.depth*oJ);else d0=1;s0=0,HJ=0,KJ=0}if(n!==null)u0=n.x,EJ=n.y,iJ=n.z;else u0=0,EJ=0,iJ=0;let jJ=W0.convert(v.format),G8=W0.convert(v.type),f0;if(v.isData3DTexture)i.setTexture3D(v,0),f0=y.TEXTURE_3D;else if(v.isDataArrayTexture||v.isCompressedArrayTexture)i.setTexture2DArray(v,0),f0=y.TEXTURE_2D_ARRAY;else i.setTexture2D(v,0),f0=y.TEXTURE_2D;z.activeTexture(y.TEXTURE0),z.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,v.flipY),z.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),z.pixelStorei(y.UNPACK_ALIGNMENT,v.unpackAlignment);let K8=z.getParameter(y.UNPACK_ROW_LENGTH),PJ=z.getParameter(y.UNPACK_IMAGE_HEIGHT),P8=z.getParameter(y.UNPACK_SKIP_PIXELS),m8=z.getParameter(y.UNPACK_SKIP_ROWS),V8=z.getParameter(y.UNPACK_SKIP_IMAGES);z.pixelStorei(y.UNPACK_ROW_LENGTH,hJ.width),z.pixelStorei(y.UNPACK_IMAGE_HEIGHT,hJ.height),z.pixelStorei(y.UNPACK_SKIP_PIXELS,s0),z.pixelStorei(y.UNPACK_SKIP_ROWS,HJ),z.pixelStorei(y.UNPACK_SKIP_IMAGES,KJ);let t9=C.isDataArrayTexture||C.isData3DTexture,yJ=v.isDataArrayTexture||v.isData3DTexture;if(C.isDepthTexture){let oJ=j.get(C),W9=j.get(v),FJ=j.get(oJ.__renderTarget),S8=j.get(W9.__renderTarget);z.bindFramebuffer(y.READ_FRAMEBUFFER,FJ.__webglFramebuffer),z.bindFramebuffer(y.DRAW_FRAMEBUFFER,S8.__webglFramebuffer);for(let C9=0;C9<d0;C9++){if(t9)y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,j.get(C).__webglTexture,c,KJ+C9),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,j.get(v).__webglTexture,_0,iJ+C9);y.blitFramebuffer(s0,HJ,l0,w0,u0,EJ,l0,w0,y.DEPTH_BUFFER_BIT,y.NEAREST)}z.bindFramebuffer(y.READ_FRAMEBUFFER,null),z.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(c!==0||C.isRenderTargetTexture||j.has(C)){let oJ=j.get(C),W9=j.get(v);z.bindFramebuffer(y.READ_FRAMEBUFFER,Z0),z.bindFramebuffer(y.DRAW_FRAMEBUFFER,f);for(let FJ=0;FJ<d0;FJ++){if(t9)y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,oJ.__webglTexture,c,KJ+FJ);else y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,oJ.__webglTexture,c);if(yJ)y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,W9.__webglTexture,_0,iJ+FJ);else y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,W9.__webglTexture,_0);if(c!==0)y.blitFramebuffer(s0,HJ,l0,w0,u0,EJ,l0,w0,y.COLOR_BUFFER_BIT,y.NEAREST);else if(yJ)y.copyTexSubImage3D(f0,_0,u0,EJ,iJ+FJ,s0,HJ,l0,w0);else y.copyTexSubImage2D(f0,_0,u0,EJ,s0,HJ,l0,w0)}z.bindFramebuffer(y.READ_FRAMEBUFFER,null),z.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(yJ)if(C.isDataTexture||C.isData3DTexture)y.texSubImage3D(f0,_0,u0,EJ,iJ,l0,w0,d0,jJ,G8,hJ.data);else if(v.isCompressedArrayTexture)y.compressedTexSubImage3D(f0,_0,u0,EJ,iJ,l0,w0,d0,jJ,hJ.data);else y.texSubImage3D(f0,_0,u0,EJ,iJ,l0,w0,d0,jJ,G8,hJ);else if(C.isDataTexture)y.texSubImage2D(y.TEXTURE_2D,_0,u0,EJ,l0,w0,jJ,G8,hJ.data);else if(C.isCompressedTexture)y.compressedTexSubImage2D(y.TEXTURE_2D,_0,u0,EJ,hJ.width,hJ.height,jJ,hJ.data);else y.texSubImage2D(y.TEXTURE_2D,_0,u0,EJ,l0,w0,jJ,G8,hJ);if(z.pixelStorei(y.UNPACK_ROW_LENGTH,K8),z.pixelStorei(y.UNPACK_IMAGE_HEIGHT,PJ),z.pixelStorei(y.UNPACK_SKIP_PIXELS,P8),z.pixelStorei(y.UNPACK_SKIP_ROWS,m8),z.pixelStorei(y.UNPACK_SKIP_IMAGES,V8),_0===0&&v.generateMipmaps)y.generateMipmap(f0);z.unbindTexture()},this.initRenderTarget=function(C){if(j.get(C).__webglFramebuffer===void 0)i.setupRenderTarget(C)},this.initTexture=function(C){if(C.isCubeTexture)i.setTextureCube(C,0);else if(C.isData3DTexture)i.setTexture3D(C,0);else if(C.isDataArrayTexture||C.isCompressedArrayTexture)i.setTexture2DArray(C,0);else i.setTexture2D(C,0);z.unbindTexture()},this.resetState=function(){o=0,s=0,p=null,z.reset(),P0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zK}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=GJ._getDrawingBufferColorSpace(J),Q.unpackColorSpace=GJ._getUnpackColorSpace()}}function lW(J,Q=!1){let $=J[0].index!==null,W=new Set(Object.keys(J[0].attributes)),Z=new Set(Object.keys(J[0].morphAttributes)),K={},H={},Y=J[0].morphTargetsRelative,X=new lJ,U=0;for(let N=0;N<J.length;++N){let E=J[N],G=0;if($!==(E.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let F in E.attributes){if(!W.has(F))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+'. All geometries must have compatible attributes; make sure "'+F+'" attribute exists among all geometries, or in none of them.'),null;if(K[F]===void 0)K[F]=[];K[F].push(E.attributes[F]),G++}if(G!==W.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". Make sure all geometries have the same number of attributes."),null;if(Y!==E.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let F in E.morphAttributes){if(!Z.has(F))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+".  .morphAttributes must be consistent throughout all geometries."),null;if(H[F]===void 0)H[F]=[];H[F].push(E.morphAttributes[F])}if(Q){let F;if($)F=E.index.count;else if(E.attributes.position!==void 0)F=E.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". The geometry must have either an index or a position attribute"),null;X.addGroup(U,F,N),U+=F}}if($){let N=0,E=[];for(let G=0;G<J.length;++G){let F=J[G].index;for(let R=0;R<F.count;++R)E.push(F.getX(R)+N);N+=J[G].attributes.position.count}X.setIndex(E)}for(let N in K){let E=_U(K[N]);if(!E)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+N+" attribute."),null;X.setAttribute(N,E)}for(let N in H){let E=H[N][0].length;if(E===0)continue;X.morphAttributes=X.morphAttributes||{},X.morphAttributes[N]=[];for(let G=0;G<E;++G){let F=[];for(let D=0;D<H[N].length;++D)F.push(H[N][D][G]);let R=_U(F);if(!R)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+N+" morphAttribute."),null;X.morphAttributes[N].push(R)}}return X}function _U(J){let Q,$,W,Z=-1,K=0;for(let U=0;U<J.length;++U){let N=J[U];if(Q===void 0)Q=N.array.constructor;if(Q!==N.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if($===void 0)$=N.itemSize;if($!==N.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(W===void 0)W=N.normalized;if(W!==N.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(Z===-1)Z=N.gpuType;if(Z!==N.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;K+=N.count*$}let H=new Q(K),Y=new tJ(H,$,W),X=0;for(let U=0;U<J.length;++U){let N=J[U];if(N.isInterleavedBufferAttribute){let E=X/$;for(let G=0,F=N.count;G<F;G++)for(let R=0;R<$;R++){let D=N.getComponent(G,R);Y.setComponent(G+E,R,D)}}else H.set(N.array,X);X+=N.count*$}if(Z!==void 0)Y.gpuType=Z;return Y}function NH(J,Q){if(Q===MK)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if(Q===p6||Q===gQ){let $=J.getIndex();if($===null){let K=[],H=J.getAttribute("position");if(H!==void 0){for(let Y=0;Y<H.count;Y++)K.push(Y);J.setIndex(K),$=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let W=$.count-2,Z=[];if(Q===p6)for(let K=1;K<=W;K++)Z.push($.getX(0)),Z.push($.getX(K)),Z.push($.getX(K+1));else for(let K=0;K<W;K++)if(K%2===0)Z.push($.getX(K)),Z.push($.getX(K+1)),Z.push($.getX(K+2));else Z.push($.getX(K+2)),Z.push($.getX(K+1)),Z.push($.getX(K));if(Z.length/3!==W)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return J.setIndex(Z),J.clearGroups(),J}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",Q),J}function mW(J){let Q=new Map,$=new Map,W=J.clone();return TU(J,W,function(Z,K){Q.set(K,Z),$.set(Z,K)}),W.traverse(function(Z){if(!Z.isSkinnedMesh)return;let K=Z,H=Q.get(Z),Y=H.skeleton.bones;K.skeleton=H.skeleton.clone(),K.bindMatrix.copy(H.bindMatrix),K.skeleton.bones=Y.map(function(X){return $.get(X)}),K.bind(K.skeleton,K.bindMatrix)}),W}function TU(J,Q,$){$(J,Q);for(let W=0;W<J.children.length;W++)TU(J.children[W],Q.children[W],$)}class LH extends s9{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(Q){return new hU(Q)}),this.register(function(Q){return new xU(Q)}),this.register(function(Q){return new sU(Q)}),this.register(function(Q){return new iU(Q)}),this.register(function(Q){return new oU(Q)}),this.register(function(Q){return new pU(Q)}),this.register(function(Q){return new lU(Q)}),this.register(function(Q){return new mU(Q)}),this.register(function(Q){return new uU(Q)}),this.register(function(Q){return new bU(Q)}),this.register(function(Q){return new dU(Q)}),this.register(function(Q){return new gU(Q)}),this.register(function(Q){return new nU(Q)}),this.register(function(Q){return new cU(Q)}),this.register(function(Q){return new vU(Q)}),this.register(function(Q){return new qH(Q,BJ.EXT_MESHOPT_COMPRESSION)}),this.register(function(Q){return new qH(Q,BJ.KHR_MESHOPT_COMPRESSION)}),this.register(function(Q){return new aU(Q)})}load(J,Q,$,W){let Z=this,K;if(this.resourcePath!=="")K=this.resourcePath;else if(this.path!==""){let X=D7.extractUrlBase(J);K=D7.resolveURL(X,this.path)}else K=D7.extractUrlBase(J);this.manager.itemStart(J);let H=function(X){if(W)W(X);else console.error(X);Z.manager.itemError(J),Z.manager.itemEnd(J)},Y=new tQ(this.manager);Y.setPath(this.path),Y.setResponseType("arraybuffer"),Y.setRequestHeader(this.requestHeader),Y.setWithCredentials(this.withCredentials),Y.load(J,function(X){try{Z.parse(X,K,function(U){Q(U),Z.manager.itemEnd(J)},H)}catch(U){H(U)}},$,H)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,Q,$,W){let Z,K={},H={},Y=new TextDecoder;if(typeof J==="string")Z=JSON.parse(J);else if(J instanceof ArrayBuffer)if(Y.decode(new Uint8Array(J,0,4))===rU){try{K[BJ.KHR_BINARY_GLTF]=new tU(J)}catch(N){if(W)W(N);return}Z=JSON.parse(K[BJ.KHR_BINARY_GLTF].content)}else Z=JSON.parse(Y.decode(J));else Z=J;if(Z.asset===void 0||Z.asset.version[0]<2){if(W)W(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let X=new W5(Z,{path:Q||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});X.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let N=this.pluginCallbacks[U](X);if(!N.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");H[N.name]=N,K[N.name]=!0}if(Z.extensionsUsed)for(let U=0;U<Z.extensionsUsed.length;++U){let N=Z.extensionsUsed[U],E=Z.extensionsRequired||[];switch(N){case BJ.KHR_MATERIALS_UNLIT:K[N]=new fU;break;case BJ.KHR_DRACO_MESH_COMPRESSION:K[N]=new eU(Z,this.dracoLoader);break;case BJ.KHR_TEXTURE_TRANSFORM:K[N]=new J5;break;case BJ.KHR_MESH_QUANTIZATION:K[N]=new Q5;break;default:if(E.indexOf(N)>=0&&H[N]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+N+'".')}}X.setExtensions(K),X.setPlugins(H),X.parse($,W)}parseAsync(J,Q){let $=this;return new Promise(function(W,Z){$.parse(J,Q,W,Z)})}}function tq(){let J={};return{get:function(Q){return J[Q]},add:function(Q,$){J[Q]=$},remove:function(Q){delete J[Q]},removeAll:function(){J={}}}}function Q8(J,Q,$){let W=J.json.materials[Q];if(W.extensions&&W.extensions[$])return W.extensions[$];return null}var BJ={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class vU{constructor(J){this.parser=J,this.name=BJ.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,Q=this.parser.json.nodes||[];for(let $=0,W=Q.length;$<W;$++){let Z=Q[$];if(Z.extensions&&Z.extensions[this.name]&&Z.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,Z.extensions[this.name].light)}}_loadLight(J){let Q=this.parser,$="light:"+J,W=Q.cache.get($);if(W)return W;let Z=Q.json,Y=((Z.extensions&&Z.extensions[this.name]||{}).lights||[])[J],X,U=new h0(16777215);if(Y.color!==void 0)U.setRGB(Y.color[0],Y.color[1],Y.color[2],x8);let N=Y.range!==void 0?Y.range:0;switch(Y.type){case"directional":X=new i6(U),X.target.position.set(0,0,-1),X.add(X.target);break;case"point":X=new i9(U),X.distance=N;break;case"spot":X=new s6(U),X.distance=N,Y.spot=Y.spot||{},Y.spot.innerConeAngle=Y.spot.innerConeAngle!==void 0?Y.spot.innerConeAngle:0,Y.spot.outerConeAngle=Y.spot.outerConeAngle!==void 0?Y.spot.outerConeAngle:Math.PI/4,X.angle=Y.spot.outerConeAngle,X.penumbra=1-Y.spot.innerConeAngle/Y.spot.outerConeAngle,X.target.position.set(0,0,-1),X.add(X.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+Y.type)}if(X.position.set(0,0,0),y9(X,Y),Y.intensity!==void 0)X.intensity=Y.intensity;return X.name=Q.createUniqueName(Y.name||"light_"+J),W=Promise.resolve(X),Q.cache.add($,W),W}getDependency(J,Q){if(J!=="light")return;return this._loadLight(Q)}createNodeAttachment(J){let Q=this,$=this.parser,Z=$.json.nodes[J],H=(Z.extensions&&Z.extensions[this.name]||{}).light;if(H===void 0)return null;return this._loadLight(H).then(function(Y){return $._getNodeRef(Q.cache,H,Y)})}}class fU{constructor(){this.name=BJ.KHR_MATERIALS_UNLIT}getMaterialType(){return dJ}extendParams(J,Q,$){let W=[];J.color=new h0(1,1,1),J.opacity=1;let Z=Q.pbrMetallicRoughness;if(Z){if(Array.isArray(Z.baseColorFactor)){let K=Z.baseColorFactor;J.color.setRGB(K[0],K[1],K[2],x8),J.opacity=K[3]}if(Z.baseColorTexture!==void 0)W.push($.assignTexture(J,"map",Z.baseColorTexture,Y8))}return Promise.all(W)}}class bU{constructor(J){this.parser=J,this.name=BJ.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,Q){let $=Q8(this.parser,J,this.name);if($===null)return Promise.resolve();if($.emissiveStrength!==void 0)Q.emissiveIntensity=$.emissiveStrength;return Promise.resolve()}}class hU{constructor(J){this.parser=J,this.name=BJ.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){return Q8(this.parser,J,this.name)!==null?O8:null}extendMaterialParams(J,Q){let $=Q8(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.clearcoatFactor!==void 0)Q.clearcoat=$.clearcoatFactor;if($.clearcoatTexture!==void 0)W.push(this.parser.assignTexture(Q,"clearcoatMap",$.clearcoatTexture));if($.clearcoatRoughnessFactor!==void 0)Q.clearcoatRoughness=$.clearcoatRoughnessFactor;if($.clearcoatRoughnessTexture!==void 0)W.push(this.parser.assignTexture(Q,"clearcoatRoughnessMap",$.clearcoatRoughnessTexture));if($.clearcoatNormalTexture!==void 0){if(W.push(this.parser.assignTexture(Q,"clearcoatNormalMap",$.clearcoatNormalTexture)),$.clearcoatNormalTexture.scale!==void 0){let Z=$.clearcoatNormalTexture.scale;Q.clearcoatNormalScale=new U0(Z,Z)}}return Promise.all(W)}}class xU{constructor(J){this.parser=J,this.name=BJ.KHR_MATERIALS_DISPERSION}getMaterialType(J){return Q8(this.parser,J,this.name)!==null?O8:null}extendMaterialParams(J,Q){let $=Q8(this.parser,J,this.name);if($===null)return Promise.resolve();return Q.dispersion=$.dispersion!==void 0?$.dispersion:0,Promise.resolve()}}class gU{constructor(J){this.parser=J,this.name=BJ.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){return Q8(this.parser,J,this.name)!==null?O8:null}extendMaterialParams(J,Q){let $=Q8(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.iridescenceFactor!==void 0)Q.iridescence=$.iridescenceFactor;if($.iridescenceTexture!==void 0)W.push(this.parser.assignTexture(Q,"iridescenceMap",$.iridescenceTexture));if($.iridescenceIor!==void 0)Q.iridescenceIOR=$.iridescenceIor;if(Q.iridescenceThicknessRange===void 0)Q.iridescenceThicknessRange=[100,400];if($.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessRange[0]=$.iridescenceThicknessMinimum;if($.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessRange[1]=$.iridescenceThicknessMaximum;if($.iridescenceThicknessTexture!==void 0)W.push(this.parser.assignTexture(Q,"iridescenceThicknessMap",$.iridescenceThicknessTexture));return Promise.all(W)}}class pU{constructor(J){this.parser=J,this.name=BJ.KHR_MATERIALS_SHEEN}getMaterialType(J){return Q8(this.parser,J,this.name)!==null?O8:null}extendMaterialParams(J,Q){let $=Q8(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.sheenColor=new h0(0,0,0),Q.sheenRoughness=0,Q.sheen=1,$.sheenColorFactor!==void 0){let Z=$.sheenColorFactor;Q.sheenColor.setRGB(Z[0],Z[1],Z[2],x8)}if($.sheenRoughnessFactor!==void 0)Q.sheenRoughness=$.sheenRoughnessFactor;if($.sheenColorTexture!==void 0)W.push(this.parser.assignTexture(Q,"sheenColorMap",$.sheenColorTexture,Y8));if($.sheenRoughnessTexture!==void 0)W.push(this.parser.assignTexture(Q,"sheenRoughnessMap",$.sheenRoughnessTexture));return Promise.all(W)}}class lU{constructor(J){this.parser=J,this.name=BJ.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){return Q8(this.parser,J,this.name)!==null?O8:null}extendMaterialParams(J,Q){let $=Q8(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.transmissionFactor!==void 0)Q.transmission=$.transmissionFactor;if($.transmissionTexture!==void 0)W.push(this.parser.assignTexture(Q,"transmissionMap",$.transmissionTexture));return Promise.all(W)}}class mU{constructor(J){this.parser=J,this.name=BJ.KHR_MATERIALS_VOLUME}getMaterialType(J){return Q8(this.parser,J,this.name)!==null?O8:null}extendMaterialParams(J,Q){let $=Q8(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.thickness=$.thicknessFactor!==void 0?$.thicknessFactor:0,$.thicknessTexture!==void 0)W.push(this.parser.assignTexture(Q,"thicknessMap",$.thicknessTexture));Q.attenuationDistance=$.attenuationDistance||1/0;let Z=$.attenuationColor||[1,1,1];return Q.attenuationColor=new h0().setRGB(Z[0],Z[1],Z[2],x8),Promise.all(W)}}class uU{constructor(J){this.parser=J,this.name=BJ.KHR_MATERIALS_IOR}getMaterialType(J){return Q8(this.parser,J,this.name)!==null?O8:null}extendMaterialParams(J,Q){let $=Q8(this.parser,J,this.name);if($===null)return Promise.resolve();if(Q.ior=$.ior!==void 0?$.ior:1.5,Q.ior===0)Q.ior=1000;return Promise.resolve()}}class dU{constructor(J){this.parser=J,this.name=BJ.KHR_MATERIALS_SPECULAR}getMaterialType(J){return Q8(this.parser,J,this.name)!==null?O8:null}extendMaterialParams(J,Q){let $=Q8(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.specularIntensity=$.specularFactor!==void 0?$.specularFactor:1,$.specularTexture!==void 0)W.push(this.parser.assignTexture(Q,"specularIntensityMap",$.specularTexture));let Z=$.specularColorFactor||[1,1,1];if(Q.specularColor=new h0().setRGB(Z[0],Z[1],Z[2],x8),$.specularColorTexture!==void 0)W.push(this.parser.assignTexture(Q,"specularColorMap",$.specularColorTexture,Y8));return Promise.all(W)}}class cU{constructor(J){this.parser=J,this.name=BJ.EXT_MATERIALS_BUMP}getMaterialType(J){return Q8(this.parser,J,this.name)!==null?O8:null}extendMaterialParams(J,Q){let $=Q8(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if(Q.bumpScale=$.bumpFactor!==void 0?$.bumpFactor:1,$.bumpTexture!==void 0)W.push(this.parser.assignTexture(Q,"bumpMap",$.bumpTexture));return Promise.all(W)}}class nU{constructor(J){this.parser=J,this.name=BJ.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){return Q8(this.parser,J,this.name)!==null?O8:null}extendMaterialParams(J,Q){let $=Q8(this.parser,J,this.name);if($===null)return Promise.resolve();let W=[];if($.anisotropyStrength!==void 0)Q.anisotropy=$.anisotropyStrength;if($.anisotropyRotation!==void 0)Q.anisotropyRotation=$.anisotropyRotation;if($.anisotropyTexture!==void 0)W.push(this.parser.assignTexture(Q,"anisotropyMap",$.anisotropyTexture));return Promise.all(W)}}class sU{constructor(J){this.parser=J,this.name=BJ.KHR_TEXTURE_BASISU}loadTexture(J){let Q=this.parser,$=Q.json,W=$.textures[J];if(!W.extensions||!W.extensions[this.name])return null;let Z=W.extensions[this.name],K=Q.options.ktx2Loader;if(!K)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return Q.loadTextureImage(J,Z.source,K)}}class iU{constructor(J){this.parser=J,this.name=BJ.EXT_TEXTURE_WEBP}loadTexture(J){let Q=this.name,$=this.parser,W=$.json,Z=W.textures[J];if(!Z.extensions||!Z.extensions[Q])return null;let K=Z.extensions[Q],H=W.images[K.source],Y=$.textureLoader;if(H.uri){let X=$.options.manager.getHandler(H.uri);if(X!==null)Y=X}return $.loadTextureImage(J,K.source,Y)}}class oU{constructor(J){this.parser=J,this.name=BJ.EXT_TEXTURE_AVIF}loadTexture(J){let Q=this.name,$=this.parser,W=$.json,Z=W.textures[J];if(!Z.extensions||!Z.extensions[Q])return null;let K=Z.extensions[Q],H=W.images[K.source],Y=$.textureLoader;if(H.uri){let X=$.options.manager.getHandler(H.uri);if(X!==null)Y=X}return $.loadTextureImage(J,K.source,Y)}}class qH{constructor(J,Q){this.name=Q,this.parser=J}loadBufferView(J){let Q=this.parser.json,$=Q.bufferViews[J];if($.extensions&&$.extensions[this.name]){let W=$.extensions[this.name],Z=this.parser.getDependency("buffer",W.buffer),K=this.parser.options.meshoptDecoder;if(!K||!K.supported)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return Z.then(function(H){let Y=W.byteOffset||0,X=W.byteLength||0,U=W.count,N=W.byteStride,E=new Uint8Array(H,Y,X);if(K.decodeGltfBufferAsync)return K.decodeGltfBufferAsync(U,N,E,W.mode,W.filter).then(function(G){return G.buffer});else return K.ready.then(function(){let G=new ArrayBuffer(U*N);return K.decodeGltfBuffer(new Uint8Array(G),U,N,E,W.mode,W.filter),G})})}else return null}}class aU{constructor(J){this.name=BJ.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let Q=this.parser.json,$=Q.nodes[J];if(!$.extensions||!$.extensions[this.name]||$.mesh===void 0)return null;let W=Q.meshes[$.mesh];for(let X of W.primitives)if(X.mode!==o8.TRIANGLES&&X.mode!==o8.TRIANGLE_STRIP&&X.mode!==o8.TRIANGLE_FAN&&X.mode!==void 0)return null;let K=$.extensions[this.name].attributes,H=[],Y={};for(let X in K)H.push(this.parser.getDependency("accessor",K[X]).then((U)=>{return Y[X]=U,Y[X]}));if(H.length<1)return null;return H.push(this.parser.createNodeMesh(J)),Promise.all(H).then((X)=>{let U=X.pop(),N=U.isGroup?U.children:[U],E=X[0].count,G=[];for(let F of N){let R=new QJ,D=new T,O=new IJ,q=new T(1,1,1),V=new T9(F.geometry,F.material,E);for(let L=0;L<E;L++){if(Y.TRANSLATION)D.fromBufferAttribute(Y.TRANSLATION,L);if(Y.ROTATION)O.fromBufferAttribute(Y.ROTATION,L);if(Y.SCALE)q.fromBufferAttribute(Y.SCALE,L);V.setMatrixAt(L,R.compose(D,O,q))}let M=null;for(let L in Y)if(L==="_COLOR_0"){let P=Y[L];V.instanceColor=new H7(P.array,P.itemSize,P.normalized)}else if(L!=="TRANSLATION"&&L!=="ROTATION"&&L!=="SCALE"){if(M===null){let I=V.geometry;M=new lJ,M.name=I.name;for(let S in I.attributes)M.setAttribute(S,I.attributes[S]);for(let S in I.morphAttributes)M.morphAttributes[S]=I.morphAttributes[S];if(I.index!==null)M.setIndex(I.index);M.morphTargetsRelative=I.morphTargetsRelative;for(let S of I.groups)M.addGroup(S.start,S.count,S.materialIndex);if(I.boundingBox!==null)M.boundingBox=I.boundingBox.clone();if(I.boundingSphere!==null)M.boundingSphere=I.boundingSphere.clone();M.drawRange.start=I.drawRange.start,M.drawRange.count=I.drawRange.count,M.userData=Object.assign({},I.userData),V.geometry=M}let P=Y[L];M.setAttribute(L,new H7(P.array,P.itemSize,P.normalized))}TJ.prototype.copy.call(V,F),this.parser.assignFinalMaterial(V),G.push(V)}if(U.isGroup)return U.clear(),U.add(...G),U;return G[0]})}}var rU="glTF",Y$=12,SU={JSON:1313821514,BIN:5130562};class tU{constructor(J){this.name=BJ.KHR_BINARY_GLTF,this.content=null,this.body=null;let Q=new DataView(J,0,Y$),$=new TextDecoder;if(this.header={magic:$.decode(new Uint8Array(J.slice(0,4))),version:Q.getUint32(4,!0),length:Q.getUint32(8,!0)},this.header.magic!==rU)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let W=this.header.length-Y$,Z=new DataView(J,Y$),K=0;while(K<W){let H=Z.getUint32(K,!0);K+=4;let Y=Z.getUint32(K,!0);if(K+=4,Y===SU.JSON){let X=new Uint8Array(J,Y$+K,H);this.content=$.decode(X)}else if(Y===SU.BIN){let X=Y$+K;this.body=J.slice(X,X+H)}K+=H}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class eU{constructor(J,Q){if(!Q)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=BJ.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=Q,this.dracoLoader.preload()}decodePrimitive(J,Q){let $=this.json,W=this.dracoLoader,Z=J.extensions[this.name].bufferView,K=J.extensions[this.name].attributes,H={},Y={},X={};for(let U in K){let N=OH[U]||U.toLowerCase();H[N]=K[U]}for(let U in J.attributes){let N=OH[U]||U.toLowerCase();if(K[U]!==void 0){let E=$.accessors[J.attributes[U]],G=e6[E.componentType];X[N]=G.name,Y[N]=E.normalized===!0}}return Q.getDependency("bufferView",Z).then(function(U){return new Promise(function(N,E){W.decodeDracoFile(U,function(G){for(let F in G.attributes){let R=G.attributes[F],D=Y[F];if(D!==void 0)R.normalized=D}N(G)},H,X,x8,E)})})}}class J5{constructor(){this.name=BJ.KHR_TEXTURE_TRANSFORM}extendTexture(J,Q){if((Q.texCoord===void 0||Q.texCoord===J.channel)&&Q.offset===void 0&&Q.rotation===void 0&&Q.scale===void 0)return J;if(J=J.clone(),Q.texCoord!==void 0)J.channel=Q.texCoord;if(Q.offset!==void 0)J.offset.fromArray(Q.offset);if(Q.rotation!==void 0)J.rotation=Q.rotation;if(Q.scale!==void 0)J.repeat.fromArray(Q.scale);if(Q.rotation!==void 0){let $=Math.cos(J.rotation),W=Math.sin(J.rotation);J.matrix.set(J.repeat.x*$,J.repeat.y*W,J.offset.x,-J.repeat.x*W,J.repeat.y*$,J.offset.y,0,0,1),J.matrixAutoUpdate=!1}return J.needsUpdate=!0,J}}class Q5{constructor(){this.name=BJ.KHR_MESH_QUANTIZATION}}class VH extends n9{constructor(J,Q,$,W){super(J,Q,$,W)}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,W=this.valueSize,Z=J*W*3+W;for(let K=0;K!==W;K++)Q[K]=$[Z+K];return Q}interpolate_(J,Q,$,W){let Z=this.resultBuffer,K=this.sampleValues,H=this.valueSize,Y=H*2,X=H*3,U=W-Q,N=($-Q)/U,E=N*N,G=E*N,F=J*X,R=F-X,D=-2*G+3*E,O=G-E,q=1-D,V=O-E+N;for(let M=0;M!==H;M++){let L=K[R+M+H],P=K[R+M+Y]*U,I=K[F+M+H],S=K[F+M]*U;Z[M]=q*L+V*P+D*I+O*S}return Z}}var eq=new IJ;class $5 extends VH{interpolate_(J,Q,$,W){let Z=super.interpolate_(J,Q,$,W);return eq.fromArray(Z).normalize().toArray(Z),Z}}var o8={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},e6={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},wU={9728:N9,9729:F8,9984:KW,9985:x6,9986:b7,9987:A9},jU={33071:h6,33648:ZW,10497:N7},GH={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},OH={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},B7={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},JO={CUBICSPLINE:void 0,LINEAR:EW,STEP:kK},EH={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function QO(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new i0({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:U7});return J.DefaultMaterial}function o7(J,Q,$){for(let W in $.extensions)if(J[W]===void 0)Q.userData.gltfExtensions=Q.userData.gltfExtensions||{},Q.userData.gltfExtensions[W]=$.extensions[W]}function y9(J,Q){if(Q.extras!==void 0)if(typeof Q.extras==="object")Object.assign(J.userData,Q.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+Q.extras)}function $O(J,Q,$){let W=!1,Z=!1,K=!1;for(let U=0,N=Q.length;U<N;U++){let E=Q[U];if(E.POSITION!==void 0)W=!0;if(E.NORMAL!==void 0)Z=!0;if(E.COLOR_0!==void 0)K=!0;if(W&&Z&&K)break}if(!W&&!Z&&!K)return Promise.resolve(J);let H=[],Y=[],X=[];for(let U=0,N=Q.length;U<N;U++){let E=Q[U];if(W){let G=E.POSITION!==void 0?$.getDependency("accessor",E.POSITION):J.attributes.position;H.push(G)}if(Z){let G=E.NORMAL!==void 0?$.getDependency("accessor",E.NORMAL):J.attributes.normal;Y.push(G)}if(K){let G=E.COLOR_0!==void 0?$.getDependency("accessor",E.COLOR_0):J.attributes.color;X.push(G)}}return Promise.all([Promise.all(H),Promise.all(Y),Promise.all(X)]).then(function(U){let N=U[0],E=U[1],G=U[2];if(W)J.morphAttributes.position=N;if(Z)J.morphAttributes.normal=E;if(K)J.morphAttributes.color=G;return J.morphTargetsRelative=!0,J})}function WO(J,Q){if(J.updateMorphTargets(),Q.weights!==void 0)for(let $=0,W=Q.weights.length;$<W;$++)J.morphTargetInfluences[$]=Q.weights[$];if(Q.extras&&Array.isArray(Q.extras.targetNames)){let $=Q.extras.targetNames;if(J.morphTargetInfluences.length===$.length){J.morphTargetDictionary={};for(let W=0,Z=$.length;W<Z;W++)J.morphTargetDictionary[$[W]]=W}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ZO(J){let Q,$=J.extensions&&J.extensions[BJ.KHR_DRACO_MESH_COMPRESSION];if($)Q="draco:"+$.bufferView+":"+$.indices+":"+FH($.attributes);else Q=J.indices+":"+FH(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let W=0,Z=J.targets.length;W<Z;W++)Q+=":"+FH(J.targets[W]);return Q}function FH(J){let Q="",$=Object.keys(J).sort();for(let W=0,Z=$.length;W<Z;W++)Q+=$[W]+":"+J[$[W]]+";";return Q}function RH(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function KO(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var HO=new QJ;class W5{constructor(J={},Q={}){this.json=J,this.extensions={},this.plugins={},this.options=Q,this.cache=new tq,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let $=!1,W=-1,Z=!1,K=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let H=navigator.userAgent;$=/^((?!chrome|android).)*safari/i.test(H)===!0;let Y=H.match(/Version\/(\d+)/);W=$&&Y?parseInt(Y[1],10):-1,Z=H.indexOf("Firefox")>-1,K=Z?H.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||$&&W<17||Z&&K<98)this.textureLoader=new SW(this.options.manager);else this.textureLoader=new yW(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new tQ(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,Q){let $=this,W=this.json,Z=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(K){return K._markDefs&&K._markDefs()}),Promise.all(this._invokeAll(function(K){return K.beforeRoot&&K.beforeRoot()})).then(function(){return Promise.all([$.getDependencies("scene"),$.getDependencies("animation"),$.getDependencies("camera")])}).then(function(K){let H={scene:K[0][W.scene||0],scenes:K[0],animations:K[1],cameras:K[2],asset:W.asset,parser:$,userData:{}};return o7(Z,H,W),y9(H,W),Promise.all($._invokeAll(function(Y){return Y.afterRoot&&Y.afterRoot(H)})).then(function(){for(let Y of H.scenes)Y.updateMatrixWorld();J(H)})}).catch(Q)}_markDefs(){let J=this.json.nodes||[],Q=this.json.skins||[],$=this.json.meshes||[];for(let W=0,Z=Q.length;W<Z;W++){let K=Q[W].joints;for(let H=0,Y=K.length;H<Y;H++)J[K[H]].isBone=!0}for(let W=0,Z=J.length;W<Z;W++){let K=J[W];if(K.mesh!==void 0){if(this._addNodeRef(this.meshCache,K.mesh),K.skin!==void 0)$[K.mesh].isSkinnedMesh=!0}if(K.camera!==void 0)this._addNodeRef(this.cameraCache,K.camera)}}_addNodeRef(J,Q){if(Q===void 0)return;if(J.refs[Q]===void 0)J.refs[Q]=J.uses[Q]=0;J.refs[Q]++}_getNodeRef(J,Q,$){if(J.refs[Q]<=1)return $;let W=$.clone(),Z=(K,H)=>{let Y=this.associations.get(K);if(Y!=null)this.associations.set(H,Y);for(let[X,U]of K.children.entries())Z(U,H.children[X])};return Z($,W),W.name+="_instance_"+J.uses[Q]++,W}_invokeOne(J){let Q=Object.values(this.plugins);Q.push(this);for(let $=0;$<Q.length;$++){let W=J(Q[$]);if(W)return W}return null}_invokeAll(J){let Q=Object.values(this.plugins);Q.unshift(this);let $=[];for(let W=0;W<Q.length;W++){let Z=J(Q[W]);if(Z)$.push(Z)}return $}getDependency(J,Q){let $=J+":"+Q,W=this.cache.get($);if(!W){switch(J){case"scene":W=this.loadScene(Q);break;case"node":W=this._invokeOne(function(Z){return Z.loadNode&&Z.loadNode(Q)});break;case"mesh":W=this._invokeOne(function(Z){return Z.loadMesh&&Z.loadMesh(Q)});break;case"accessor":W=this.loadAccessor(Q);break;case"bufferView":W=this._invokeOne(function(Z){return Z.loadBufferView&&Z.loadBufferView(Q)});break;case"buffer":W=this.loadBuffer(Q);break;case"material":W=this._invokeOne(function(Z){return Z.loadMaterial&&Z.loadMaterial(Q)});break;case"texture":W=this._invokeOne(function(Z){return Z.loadTexture&&Z.loadTexture(Q)});break;case"skin":W=this.loadSkin(Q);break;case"animation":W=this._invokeOne(function(Z){return Z.loadAnimation&&Z.loadAnimation(Q)});break;case"camera":W=this.loadCamera(Q);break;default:if(W=this._invokeOne(function(Z){return Z!=this&&Z.getDependency&&Z.getDependency(J,Q)}),!W)throw Error("Unknown type: "+J);break}this.cache.add($,W)}return W}getDependencies(J){let Q=this.cache.get(J);if(!Q){let $=this,W=this.json[J+(J==="mesh"?"es":"s")]||[];Q=Promise.all(W.map(function(Z,K){return $.getDependency(J,K)})),this.cache.add(J,Q)}return Q}loadBuffer(J){let Q=this.json.buffers[J],$=this.fileLoader;if(Q.type&&Q.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+Q.type+" buffer type is not supported.");if(Q.uri===void 0&&J===0)return Promise.resolve(this.extensions[BJ.KHR_BINARY_GLTF].body);let W=this.options;return new Promise(function(Z,K){$.load(D7.resolveURL(Q.uri,W.path),Z,void 0,function(){K(Error('THREE.GLTFLoader: Failed to load buffer "'+Q.uri+'".'))})})}loadBufferView(J){let Q=this.json.bufferViews[J];return this.getDependency("buffer",Q.buffer).then(function($){let W=Q.byteLength||0,Z=Q.byteOffset||0;return $.slice(Z,Z+W)})}loadAccessor(J){let Q=this,$=this.json,W=this.json.accessors[J];if(W.bufferView===void 0&&W.sparse===void 0){let K=GH[W.type],H=e6[W.componentType],Y=W.normalized===!0,X=new H(W.count*K);return Promise.resolve(new tJ(X,K,Y))}let Z=[];if(W.bufferView!==void 0)Z.push(this.getDependency("bufferView",W.bufferView));else Z.push(null);if(W.sparse!==void 0)Z.push(this.getDependency("bufferView",W.sparse.indices.bufferView)),Z.push(this.getDependency("bufferView",W.sparse.values.bufferView));return Promise.all(Z).then(function(K){let H=K[0],Y=GH[W.type],X=e6[W.componentType],U=X.BYTES_PER_ELEMENT,N=U*Y,E=W.byteOffset||0,G=W.bufferView!==void 0?$.bufferViews[W.bufferView].byteStride:void 0,F=W.normalized===!0,R,D;if(G&&G!==N){let O=Math.floor(E/G),q="InterleavedBuffer:"+W.bufferView+":"+W.componentType+":"+O+":"+W.count,V=Q.cache.get(q);if(!V)R=new X(H,O*G,W.count*G/U),V=new m6(R,G/U),Q.cache.add(q,V);D=new K7(V,Y,E%G/U,F)}else{if(H===null)R=new X(W.count*Y);else R=new X(H,E,W.count*Y);D=new tJ(R,Y,F)}if(W.sparse!==void 0){let O=GH.SCALAR,q=e6[W.sparse.indices.componentType],V=W.sparse.indices.byteOffset||0,M=W.sparse.values.byteOffset||0,L=new q(K[1],V,W.sparse.count*O),P=new X(K[2],M,W.sparse.count*Y);if(H!==null)D=new tJ(D.array.slice(),D.itemSize,D.normalized);D.normalized=!1;for(let I=0,S=L.length;I<S;I++){let k=L[I];if(D.setX(k,P[I*Y]),Y>=2)D.setY(k,P[I*Y+1]);if(Y>=3)D.setZ(k,P[I*Y+2]);if(Y>=4)D.setW(k,P[I*Y+3]);if(Y>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}D.normalized=F}return D})}loadTexture(J){let Q=this.json,$=this.options,Z=Q.textures[J].source,K=Q.images[Z],H=this.textureLoader;if(K.uri){let Y=$.manager.getHandler(K.uri);if(Y!==null)H=Y}return this.loadTextureImage(J,Z,H)}loadTextureImage(J,Q,$){let W=this,Z=this.json,K=Z.textures[J],H=Z.images[Q],Y=(H.uri||H.bufferView)+":"+K.sampler;if(this.textureCache[Y])return this.textureCache[Y];let X=this.loadImageSource(Q,$).then(function(U){if(U.flipY=!1,U.name=K.name||H.name||"",U.name===""&&typeof H.uri==="string"&&H.uri.startsWith("data:image/")===!1)U.name=H.uri;let E=(Z.samplers||{})[K.sampler]||{};return U.magFilter=wU[E.magFilter]||F8,U.minFilter=wU[E.minFilter]||A9,U.wrapS=jU[E.wrapS]||N7,U.wrapT=jU[E.wrapT]||N7,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==N9&&U.minFilter!==F8,W.associations.set(U,{textures:J}),U}).catch(function(){return null});return this.textureCache[Y]=X,X}loadImageSource(J,Q){let $=this,W=this.json,Z=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((N)=>N.clone());let K=W.images[J],H=self.URL||self.webkitURL,Y=K.uri||"",X=!1;if(K.bufferView!==void 0)Y=$.getDependency("bufferView",K.bufferView).then(function(N){X=!0;let E=new Blob([N],{type:K.mimeType});return Y=H.createObjectURL(E),Y});else if(K.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let U=Promise.resolve(Y).then(function(N){return new Promise(function(E,G){let F=E;if(Q.isImageBitmapLoader===!0)F=function(R){let D=new eJ(R);D.needsUpdate=!0,E(D)};Q.load(D7.resolveURL(N,Z.path),F,void 0,G)})}).then(function(N){if(X===!0)H.revokeObjectURL(Y);return y9(N,K),N.userData.mimeType=K.mimeType||KO(K.uri),N}).catch(function(N){throw console.error("THREE.GLTFLoader: Couldn't load texture",Y),N});return this.sourceCache[J]=U,U}assignTexture(J,Q,$,W){let Z=this;return this.getDependency("texture",$.index).then(function(K){if(!K)return null;if($.texCoord!==void 0&&$.texCoord>0)K=K.clone(),K.channel=$.texCoord;if(Z.extensions[BJ.KHR_TEXTURE_TRANSFORM]){let H=$.extensions!==void 0?$.extensions[BJ.KHR_TEXTURE_TRANSFORM]:void 0;if(H){let Y=Z.associations.get(K);K=Z.extensions[BJ.KHR_TEXTURE_TRANSFORM].extendTexture(K,H),Z.associations.set(K,Y)}}if(W!==void 0)K.colorSpace=W;return J[Q]=K,K})}assignFinalMaterial(J){let{geometry:Q,material:$}=J,W=Q.attributes.tangent===void 0,Z=Q.attributes.color!==void 0,K=Q.attributes.normal===void 0;if(J.isPoints){let H="PointsMaterial:"+$.uuid,Y=this.cache.get(H);if(!Y)Y=new u7,w8.prototype.copy.call(Y,$),Y.color.copy($.color),Y.map=$.map,Y.sizeAttenuation=!1,this.cache.add(H,Y);$=Y}else if(J.isLine){let H="LineBasicMaterial:"+$.uuid,Y=this.cache.get(H);if(!Y)Y=new nQ,w8.prototype.copy.call(Y,$),Y.color.copy($.color),Y.map=$.map,this.cache.add(H,Y);$=Y}if(W||Z||K){let H="ClonedMaterial:"+$.uuid+":";if(W)H+="derivative-tangents:";if(Z)H+="vertex-colors:";if(K)H+="flat-shading:";let Y=this.cache.get(H);if(!Y){if(Y=$.clone(),Z)Y.vertexColors=!0;if(K)Y.flatShading=!0;if(W){if(Y.normalScale)Y.normalScale.y*=-1;if(Y.clearcoatNormalScale)Y.clearcoatNormalScale.y*=-1}this.cache.add(H,Y),this.associations.set(Y,this.associations.get($))}$=Y}J.material=$}getMaterialType(){return i0}loadMaterial(J){let Q=this,$=this.json,W=this.extensions,Z=$.materials[J],K,H={},Y=Z.extensions||{},X=[];if(Y[BJ.KHR_MATERIALS_UNLIT]){let N=W[BJ.KHR_MATERIALS_UNLIT];K=N.getMaterialType(),X.push(N.extendParams(H,Z,Q))}else{let N=Z.pbrMetallicRoughness||{};if(H.color=new h0(1,1,1),H.opacity=1,Array.isArray(N.baseColorFactor)){let E=N.baseColorFactor;H.color.setRGB(E[0],E[1],E[2],x8),H.opacity=E[3]}if(N.baseColorTexture!==void 0)X.push(Q.assignTexture(H,"map",N.baseColorTexture,Y8));if(H.metalness=N.metallicFactor!==void 0?N.metallicFactor:1,H.roughness=N.roughnessFactor!==void 0?N.roughnessFactor:1,N.metallicRoughnessTexture!==void 0)X.push(Q.assignTexture(H,"metalnessMap",N.metallicRoughnessTexture)),X.push(Q.assignTexture(H,"roughnessMap",N.metallicRoughnessTexture));K=this._invokeOne(function(E){return E.getMaterialType&&E.getMaterialType(J)}),X.push(Promise.all(this._invokeAll(function(E){return E.extendMaterialParams&&E.extendMaterialParams(J,H)})))}if(Z.doubleSided===!0)H.side=sJ;let U=Z.alphaMode||EH.OPAQUE;if(U===EH.BLEND)H.transparent=!0,H.depthWrite=!1;else if(H.transparent=!1,U===EH.MASK)H.alphaTest=Z.alphaCutoff!==void 0?Z.alphaCutoff:0.5;if(Z.normalTexture!==void 0&&K!==dJ){if(X.push(Q.assignTexture(H,"normalMap",Z.normalTexture)),H.normalScale=new U0(1,1),Z.normalTexture.scale!==void 0){let N=Z.normalTexture.scale;H.normalScale.set(N,N)}}if(Z.occlusionTexture!==void 0&&K!==dJ){if(X.push(Q.assignTexture(H,"aoMap",Z.occlusionTexture)),Z.occlusionTexture.strength!==void 0)H.aoMapIntensity=Z.occlusionTexture.strength}if(Z.emissiveFactor!==void 0&&K!==dJ){let N=Z.emissiveFactor;H.emissive=new h0().setRGB(N[0],N[1],N[2],x8)}if(Z.emissiveTexture!==void 0&&K!==dJ)X.push(Q.assignTexture(H,"emissiveMap",Z.emissiveTexture,Y8));return Promise.all(X).then(function(){let N=new K(H);if(Z.name)N.name=Z.name;if(y9(N,Z),Q.associations.set(N,{materials:J}),Z.extensions)o7(W,N,Z);return N})}createUniqueName(J){let Q=wJ.sanitizeNodeName(J||"");if(Q in this.nodeNamesUsed)return Q+"_"+ ++this.nodeNamesUsed[Q];else return this.nodeNamesUsed[Q]=0,Q}loadGeometries(J){let Q=this,$=this.extensions,W=this.primitiveCache;function Z(H){return $[BJ.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(H,Q).then(function(Y){return yU(Y,H,Q)})}let K=[];for(let H=0,Y=J.length;H<Y;H++){let X=J[H],U=ZO(X),N=W[U];if(N)K.push(N.promise);else{let E;if(X.extensions&&X.extensions[BJ.KHR_DRACO_MESH_COMPRESSION])E=Z(X);else E=yU(new lJ,X,Q);if(X.mode===o8.TRIANGLE_STRIP)E=E.then((G)=>NH(G,gQ));else if(X.mode===o8.TRIANGLE_FAN)E=E.then((G)=>NH(G,p6));W[U]={primitive:X,promise:E},K.push(E)}}return Promise.all(K)}loadMesh(J){let Q=this,$=this.json,W=this.extensions,Z=$.meshes[J],K=Z.primitives,H=[];for(let Y=0,X=K.length;Y<X;Y++){let U=K[Y].material===void 0?QO(this.cache):this.getDependency("material",K[Y].material);H.push(U)}return H.push(Q.loadGeometries(K)),Promise.all(H).then(async function(Y){let X=Y.slice(0,Y.length-1),U=Y[Y.length-1],N=[];for(let G=0,F=U.length;G<F;G++){let R=U[G],D=K[G],O,q=X[G];if(D.mode===o8.TRIANGLES||D.mode===o8.TRIANGLE_STRIP||D.mode===o8.TRIANGLE_FAN||D.mode===void 0){let V=Z.isSkinnedMesh===!0,M=R.hasAttribute("skinIndex")&&R.hasAttribute("skinWeight");if(V&&M===!1)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(O=V&&M?new DW(R,q):new I0(R,q),O.isSkinnedMesh===!0)O.normalizeSkinWeights()}else if(D.mode===o8.LINES)O=new BW(R,q);else if(D.mode===o8.LINE_STRIP)O=new d6(R,q);else if(D.mode===o8.LINE_LOOP)O=new kW(R,q);else if(D.mode===o8.POINTS)O=new c6(R,q);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+D.mode);if(Object.keys(O.geometry.morphAttributes).length>0)WO(O,Z);if(O.name=Q.createUniqueName(Z.name||"mesh_"+J),y9(O,Z),D.extensions)o7(W,O,D);Q.assignFinalMaterial(O),N.push(O)}for(let G=0,F=N.length;G<F;G++)Q.associations.set(N[G],{meshes:J,primitives:G});if(N.length===1){if(Z.extensions)o7(W,N[0],Z);return N[0]}let E=new fJ;if(Z.extensions)o7(W,E,Z);Q.associations.set(E,{meshes:J});for(let G=0,F=N.length;G<F;G++)E.add(N[G]);return E})}loadCamera(J){let Q,$=this.json.cameras[J],W=$[$.type];if(!W){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if($.type==="perspective")Q=new H8(E7.radToDeg(W.yfov),W.aspectRatio||1,W.znear||1,W.zfar||2000000);else if($.type==="orthographic")Q=new o9(-W.xmag,W.xmag,W.ymag,-W.ymag,W.znear,W.zfar);if($.name)Q.name=this.createUniqueName($.name);return y9(Q,$),Promise.resolve(Q)}loadSkin(J){let Q=this.json.skins[J],$=[];for(let W=0,Z=Q.joints.length;W<Z;W++)$.push(this._loadNodeShallow(Q.joints[W]));if(Q.inverseBindMatrices!==void 0)$.push(this.getDependency("accessor",Q.inverseBindMatrices));else $.push(null);return Promise.all($).then(function(W){let Z=W.pop(),K=W,H=[],Y=[];for(let X=0,U=K.length;X<U;X++){let N=K[X];if(N){H.push(N);let E=new QJ;if(Z!==null)E.fromArray(Z.array,X*16);Y.push(E)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',Q.joints[X])}return new dQ(H,Y)})}loadAnimation(J){let Q=this.json,$=this,W=Q.animations[J],Z=W.name?W.name:"animation_"+J,K=[],H=[],Y=[],X=[],U=[];for(let N=0,E=W.channels.length;N<E;N++){let G=W.channels[N],F=W.samplers[G.sampler],R=G.target,D=R.node,O=W.parameters!==void 0?W.parameters[F.input]:F.input,q=W.parameters!==void 0?W.parameters[F.output]:F.output;if(R.node===void 0)continue;K.push(this.getDependency("node",D)),H.push(this.getDependency("accessor",O)),Y.push(this.getDependency("accessor",q)),X.push(F),U.push(R)}return Promise.all([Promise.all(K),Promise.all(H),Promise.all(Y),Promise.all(X),Promise.all(U)]).then(function(N){let E=N[0],G=N[1],F=N[2],R=N[3],D=N[4],O=[];for(let V=0,M=E.length;V<M;V++){let L=E[V],P=G[V],I=F[V],S=R[V],k=D[V];if(L===void 0)continue;if(L.updateMatrix)L.updateMatrix();let A=$._createAnimationTracks(L,P,I,S,k);if(A)for(let d=0;d<A.length;d++)O.push(A[d])}let q=new y6(Z,void 0,O);return y9(q,W),q})}createNodeMesh(J){let Q=this.json,$=this,W=Q.nodes[J];if(W.mesh===void 0)return null;return $.getDependency("mesh",W.mesh).then(function(Z){let K=$._getNodeRef($.meshCache,W.mesh,Z);if(W.weights!==void 0)K.traverse(function(H){if(!H.isMesh)return;for(let Y=0,X=W.weights.length;Y<X;Y++)H.morphTargetInfluences[Y]=W.weights[Y]});return K})}loadNode(J){let Q=this.json,$=this,W=Q.nodes[J],Z=$._loadNodeShallow(J),K=[],H=W.children||[];for(let X=0,U=H.length;X<U;X++)K.push($.getDependency("node",H[X]));let Y=W.skin===void 0?Promise.resolve(null):$.getDependency("skin",W.skin);return Promise.all([Z,Promise.all(K),Y]).then(function(X){let U=X[0],N=X[1],E=X[2];if(E!==null)U.traverse(function(G){if(!G.isSkinnedMesh)return;G.bind(E,HO)});for(let G=0,F=N.length;G<F;G++)U.add(N[G]);if(U.userData.pivot!==void 0&&N.length>0){let G=U.userData.pivot,F=N[0];U.pivot=new T().fromArray(G),U.position.x-=G[0],U.position.y-=G[1],U.position.z-=G[2],F.position.set(0,0,0),delete U.userData.pivot}return U})}_loadNodeShallow(J){let Q=this.json,$=this.extensions,W=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let Z=Q.nodes[J],K=Z.name?W.createUniqueName(Z.name):"",H=[],Y=W._invokeOne(function(X){return X.createNodeMesh&&X.createNodeMesh(J)});if(Y)H.push(Y);if(Z.camera!==void 0)H.push(W.getDependency("camera",Z.camera).then(function(X){return W._getNodeRef(W.cameraCache,Z.camera,X)}));return W._invokeAll(function(X){return X.createNodeAttachment&&X.createNodeAttachment(J)}).forEach(function(X){H.push(X)}),this.nodeCache[J]=Promise.all(H).then(function(X){let U;if(Z.isBone===!0)U=new mQ;else if(X.length>1)U=new fJ;else if(X.length===1)U=X[0];else U=new TJ;if(U!==X[0])for(let N=0,E=X.length;N<E;N++)U.add(X[N]);if(Z.name)U.userData.name=Z.name,U.name=K;if(y9(U,Z),Z.extensions)o7($,U,Z);if(Z.matrix!==void 0){let N=new QJ;N.fromArray(Z.matrix),U.applyMatrix4(N)}else{if(Z.translation!==void 0)U.position.fromArray(Z.translation);if(Z.rotation!==void 0)U.quaternion.fromArray(Z.rotation);if(Z.scale!==void 0)U.scale.fromArray(Z.scale)}if(!W.associations.has(U))W.associations.set(U,{});else if(Z.mesh!==void 0&&W.meshCache.refs[Z.mesh]>1){let N=W.associations.get(U);W.associations.set(U,{...N})}return W.associations.get(U).nodes=J,U}),this.nodeCache[J]}loadScene(J){let Q=this.extensions,$=this.json.scenes[J],W=this,Z=new fJ;if($.name)Z.name=W.createUniqueName($.name);if(y9(Z,$),$.extensions)o7(Q,Z,$);let K=$.nodes||[],H=[];for(let Y=0,X=K.length;Y<X;Y++)H.push(W.getDependency("node",K[Y]));return Promise.all(H).then(function(Y){for(let U=0,N=Y.length;U<N;U++){let E=Y[U];if(E.parent!==null)Z.add(mW(E));else Z.add(E)}let X=(U)=>{let N=new Map;for(let[E,G]of W.associations)if(E instanceof w8||E instanceof eJ)N.set(E,G);return U.traverse((E)=>{let G=W.associations.get(E);if(G!=null)N.set(E,G)}),N};return W.associations=X(Z),Z})}_createAnimationTracks(J,Q,$,W,Z){let K=[],H=J.name?J.name:J.uuid,Y=[];function X(G){if(G.morphTargetInfluences)Y.push(G.name?G.name:G.uuid)}if(B7[Z.path]===B7.weights){if(X(J),J.isGroup)J.children.forEach(X)}else Y.push(H);let U;switch(B7[Z.path]){case B7.weights:U=R7;break;case B7.rotation:U=L7;break;case B7.translation:case B7.scale:U=s7;break;default:switch($.itemSize){case 1:U=R7;break;case 2:case 3:default:U=s7;break}break}let N=W.interpolation!==void 0?JO[W.interpolation]:EW,E=this._getArrayFromAccessor($);for(let G=0,F=Y.length;G<F;G++){let R=new U(Y[G]+"."+B7[Z.path],Q.array,E,N);if(W.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(R);K.push(R)}return K}_getArrayFromAccessor(J){let Q=J.array;if(J.normalized){let $=RH(Q.constructor),W=new Float32Array(Q.length);for(let Z=0,K=Q.length;Z<K;Z++)W[Z]=Q[Z]*$;Q=W}return Q}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function($){return new(this instanceof L7?$5:VH)(this.times,this.values,this.getValueSize()/3,$)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function YO(J,Q,$){let W=Q.attributes,Z=new A8;if(W.POSITION!==void 0){let Y=$.json.accessors[W.POSITION],X=Y.min,U=Y.max;if(X!==void 0&&U!==void 0){if(Z.set(new T(X[0],X[1],X[2]),new T(U[0],U[1],U[2])),Y.normalized){let N=RH(e6[Y.componentType]);Z.min.multiplyScalar(N),Z.max.multiplyScalar(N)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let K=Q.targets;if(K!==void 0){let Y=new T,X=new T;for(let U=0,N=K.length;U<N;U++){let E=K[U];if(E.POSITION!==void 0){let G=$.json.accessors[E.POSITION],F=G.min,R=G.max;if(F!==void 0&&R!==void 0){if(X.setX(Math.max(Math.abs(F[0]),Math.abs(R[0]))),X.setY(Math.max(Math.abs(F[1]),Math.abs(R[1]))),X.setZ(Math.max(Math.abs(F[2]),Math.abs(R[2]))),G.normalized){let D=RH(e6[G.componentType]);X.multiplyScalar(D)}Y.max(X)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}Z.expandByVector(Y)}J.boundingBox=Z;let H=new g8;Z.getCenter(H.center),H.radius=Z.min.distanceTo(Z.max)/2,J.boundingSphere=H}function yU(J,Q,$){let W=Q.attributes,Z=[];function K(H,Y){return $.getDependency("accessor",H).then(function(X){J.setAttribute(Y,X)})}for(let H in W){let Y=OH[H]||H.toLowerCase();if(Y in J.attributes)continue;Z.push(K(W[H],Y))}if(Q.indices!==void 0&&!J.index){let H=$.getDependency("accessor",Q.indices).then(function(Y){J.setIndex(Y)});Z.push(H)}if(GJ.workingColorSpace!==x8&&"COLOR_0"in W)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${GJ.workingColorSpace}" not supported.`);return y9(J,Q),YO(J,Q,$),Promise.all(Z).then(function(){return Q.targets!==void 0?$O(J,Q.targets,$):J})}var Z5={type:"change"},BH={type:"start"},H5={type:"end"},uW=new F7,K5=new d8,XO=Math.cos(70*E7.DEG2RAD),N8=new T,j8=2*Math.PI,mJ={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},DH=0.000001;class kH extends bW{constructor(J,Q=null){super(J,Q);if(this.state=mJ.NONE,this.target=new T,this.cursor=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Y7.ROTATE,MIDDLE:Y7.DOLLY,RIGHT:Y7.PAN},this.touches={ONE:X7.ROTATE,TWO:X7.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new T,this._lastQuaternion=new IJ,this._lastTargetPosition=new T,this._quat=new IJ().setFromUnitVectors(J.up,new T(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Q$,this._sphericalDelta=new Q$,this._scale=1,this._panOffset=new T,this._rotateStart=new U0,this._rotateEnd=new U0,this._rotateDelta=new U0,this._panStart=new U0,this._panEnd=new U0,this._panDelta=new U0,this._dollyStart=new U0,this._dollyEnd=new U0,this._dollyDelta=new U0,this._dollyDirection=new T,this._mouse=new U0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=NO.bind(this),this._onPointerDown=UO.bind(this),this._onPointerUp=GO.bind(this),this._onContextMenu=VO.bind(this),this._onMouseWheel=qO.bind(this),this._onKeyDown=OO.bind(this),this._onTouchStart=RO.bind(this),this._onTouchMove=LO.bind(this),this._onMouseDown=EO.bind(this),this._onMouseMove=FO.bind(this),this._interceptControlDown=DO.bind(this),this._interceptControlUp=BO.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=mJ.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let J=this.domElement.getRootNode();J.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),J.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Z5),this.update(),this.state=mJ.NONE}pan(J,Q){this._pan(J,Q),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let Q=this.object.position;if(N8.copy(Q).sub(this.target),N8.applyQuaternion(this._quat),this._spherical.setFromVector3(N8),this.autoRotate&&this.state===mJ.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let $=this.minAzimuthAngle,W=this.maxAzimuthAngle;if(isFinite($)&&isFinite(W)){if($<-Math.PI)$+=j8;else if($>Math.PI)$-=j8;if(W<-Math.PI)W+=j8;else if(W>Math.PI)W-=j8;if($<=W)this._spherical.theta=Math.max($,Math.min(W,this._spherical.theta));else this._spherical.theta=this._spherical.theta>($+W)/2?Math.max($,this._spherical.theta):Math.min(W,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let Z=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let K=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),Z=K!=this._spherical.radius}if(N8.setFromSpherical(this._spherical),N8.applyQuaternion(this._quatInverse),Q.copy(this.target).add(N8),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let K=null;if(this.object.isPerspectiveCamera){let H=N8.length();K=this._clampDistance(H*this._scale);let Y=H-K;this.object.position.addScaledVector(this._dollyDirection,Y),this.object.updateMatrixWorld(),Z=!!Y}else if(this.object.isOrthographicCamera){let H=new T(this._mouse.x,this._mouse.y,0);H.unproject(this.object);let Y=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),Z=Y!==this.object.zoom;let X=new T(this._mouse.x,this._mouse.y,0);X.unproject(this.object),this.object.position.sub(X).add(H),this.object.updateMatrixWorld(),K=N8.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(K!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(K).add(this.object.position);else if(uW.origin.copy(this.object.position),uW.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(uW.direction))<XO)this.object.lookAt(this.target);else K5.setFromNormalAndCoplanarPoint(this.object.up,this.target),uW.intersectPlane(K5,this.target)}else if(this.object.isOrthographicCamera){let K=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),K!==this.object.zoom)this.object.updateProjectionMatrix(),Z=!0}if(this._scale=1,this._performCursorZoom=!1,Z||this._lastPosition.distanceToSquared(this.object.position)>DH||8*(1-this._lastQuaternion.dot(this.object.quaternion))>DH||this._lastTargetPosition.distanceToSquared(this.target)>DH)return this.dispatchEvent(Z5),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return j8/60*this.autoRotateSpeed*J;else return j8/60/60*this.autoRotateSpeed}_getZoomScale(J){let Q=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*Q)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,Q){N8.setFromMatrixColumn(Q,0),N8.multiplyScalar(-J),this._panOffset.add(N8)}_panUp(J,Q){if(this.screenSpacePanning===!0)N8.setFromMatrixColumn(Q,1);else N8.setFromMatrixColumn(Q,0),N8.crossVectors(this.object.up,N8);N8.multiplyScalar(J),this._panOffset.add(N8)}_pan(J,Q){let $=this.domElement;if(this.object.isPerspectiveCamera){let W=this.object.position;N8.copy(W).sub(this.target);let Z=N8.length();Z*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*Z/$.clientHeight,this.object.matrix),this._panUp(2*Q*Z/$.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/$.clientWidth,this.object.matrix),this._panUp(Q*(this.object.top-this.object.bottom)/this.object.zoom/$.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,Q){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let $=this.domElement.getBoundingClientRect(),W=J-$.left,Z=Q-$.top,K=$.width,H=$.height;this._mouse.x=W/K*2-1,this._mouse.y=-(Z/H)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(j8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(j8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let Q=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(j8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);Q=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-j8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);Q=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(j8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);Q=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-j8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);Q=!0;break}if(Q)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),W=0.5*(J.pageY+Q.y);this._rotateStart.set($,W)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),W=0.5*(J.pageY+Q.y);this._panStart.set($,W)}}_handleTouchStartDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,W=J.pageY-Q.y,Z=Math.sqrt($*$+W*W);this._dollyStart.set(0,Z)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),W=0.5*(J.pageX+$.x),Z=0.5*(J.pageY+$.y);this._rotateEnd.set(W,Z)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(j8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(j8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),W=0.5*(J.pageY+Q.y);this._panEnd.set($,W)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,W=J.pageY-Q.y,Z=Math.sqrt($*$+W*W);this._dollyEnd.set(0,Z),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let K=(J.pageX+Q.x)*0.5,H=(J.pageY+Q.y)*0.5;this._updateZoomParameters(K,H)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId){this._pointers.splice(Q,1);return}}_isTrackingPointer(J){for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId)return!0;return!1}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new U0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q]}_customWheelEvent(J){let Q=J.deltaMode,$={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch(Q){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)$.deltaY*=10;return $}}function UO(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function NO(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function GO(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(H5),this.state=mJ.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let Q=this._pointers[0],$=this._pointerPositions[Q];this._onTouchStart({pointerId:Q,pageX:$.x,pageY:$.y});break}}function EO(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case Y7.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=mJ.DOLLY;break;case Y7.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=mJ.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=mJ.ROTATE}break;case Y7.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=mJ.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=mJ.PAN}break;default:this.state=mJ.NONE}if(this.state!==mJ.NONE)this.dispatchEvent(BH)}function FO(J){switch(this.state){case mJ.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case mJ.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case mJ.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function qO(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==mJ.NONE)return;J.preventDefault(),this.dispatchEvent(BH),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(H5)}function OO(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function RO(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case X7.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=mJ.TOUCH_ROTATE;break;case X7.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=mJ.TOUCH_PAN;break;default:this.state=mJ.NONE}break;case 2:switch(this.touches.TWO){case X7.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=mJ.TOUCH_DOLLY_PAN;break;case X7.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=mJ.TOUCH_DOLLY_ROTATE;break;default:this.state=mJ.NONE}break;default:this.state=mJ.NONE}if(this.state!==mJ.NONE)this.dispatchEvent(BH)}function LO(J){switch(this._trackPointer(J),this.state){case mJ.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case mJ.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case mJ.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case mJ.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=mJ.NONE}}function VO(J){if(this.enabled===!1)return;J.preventDefault()}function DO(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function BO(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var X$=new T;function a8(J,Q,$,W,Z,K){let H=2*Math.PI*Z/4,Y=Math.max(K-2*Z,0),X=Math.PI/4;X$.copy(Q),X$[W]=0,X$.normalize();let U=0.5*H/(H+Y),N=1-X$.angleTo(J)/X;if(Math.sign(X$[$])===1)return N*U;else return Y/(H+Y)+U+U*(1-N)}class _8 extends cJ{constructor(J=1,Q=1,$=1,W=2,Z=0.1){let K=W*2+1;Z=Math.min(J/2,Q/2,$/2,Z);super(1,1,1,K,K,K);if(this.type="RoundedBoxGeometry",this.parameters={width:J,height:Q,depth:$,segments:W,radius:Z},K===1)return;let H=this.toNonIndexed();this.index=null,this.attributes.position=H.attributes.position,this.attributes.normal=H.attributes.normal,this.attributes.uv=H.attributes.uv;let Y=new T,X=new T,U=new T(J,Q,$).divideScalar(2).subScalar(Z),N=this.attributes.position.array,E=this.attributes.normal.array,G=this.attributes.uv.array,F=N.length/6,R=new T,D=0.5/K;for(let O=0,q=0;O<N.length;O+=3,q+=2)switch(Y.fromArray(N,O),X.copy(Y),X.x-=Math.sign(X.x)*D,X.y-=Math.sign(X.y)*D,X.z-=Math.sign(X.z)*D,X.normalize(),N[O+0]=U.x*Math.sign(Y.x)+X.x*Z,N[O+1]=U.y*Math.sign(Y.y)+X.y*Z,N[O+2]=U.z*Math.sign(Y.z)+X.z*Z,E[O+0]=X.x,E[O+1]=X.y,E[O+2]=X.z,Math.floor(O/F)){case 0:R.set(1,0,0),G[q+0]=a8(R,X,"z","y",Z,$),G[q+1]=1-a8(R,X,"y","z",Z,Q);break;case 1:R.set(-1,0,0),G[q+0]=1-a8(R,X,"z","y",Z,$),G[q+1]=1-a8(R,X,"y","z",Z,Q);break;case 2:R.set(0,1,0),G[q+0]=1-a8(R,X,"x","z",Z,J),G[q+1]=a8(R,X,"z","x",Z,$);break;case 3:R.set(0,-1,0),G[q+0]=1-a8(R,X,"x","z",Z,J),G[q+1]=1-a8(R,X,"z","x",Z,$);break;case 4:R.set(0,0,1),G[q+0]=1-a8(R,X,"x","y",Z,J),G[q+1]=1-a8(R,X,"y","x",Z,Q);break;case 5:R.set(0,0,-1),G[q+0]=a8(R,X,"x","y",Z,J),G[q+1]=1-a8(R,X,"y","x",Z,Q);break}}static fromJSON(J){return new _8(J.width,J.height,J.depth,J.segments,J.radius)}}var R0={tableWidth:0.92,tableCenterY:0.724,tableThickness:0.09,feltWidth:0.78,feltCenterY:0.776,surfaceY:0.782,chairSeatY:0.51,chairSeatWidth:0.56,seatDistance:0.77,tileLength:0.054,tileWidth:0.027,tileThickness:0.011,tileGap:0.0016,pipRadius:0.0033,pipColumnSpacing:0.0072,pipRowSpacing:0.0076,rackRadius:0.418,rackSpacing:0.0305,neutralPoseTime:10.25,boardLimit:0.27},O9=[[0,R0.seatDistance,Math.PI],[R0.seatDistance,0,-Math.PI/2],[0,-R0.seatDistance,0],[-R0.seatDistance,0,Math.PI/2]];function CH(J){let Q=J.vertical?R0.tileWidth:R0.tileLength,$=J.vertical?R0.tileLength:R0.tileWidth;return{left:J.x-Q/2,right:J.x+Q/2,top:J.z-$/2,bottom:J.z+$/2}}var kO=R0.boardLimit,MO=R0.feltWidth/2-0.022;function PH(J,Q,$=kO){let W=CH(J);if(Math.max(Math.abs(W.left),Math.abs(W.right),Math.abs(W.top),Math.abs(W.bottom))>$+0.00000001)return!1;return Q.every((Z)=>{let K=CH(Z);return W.right<=K.left-0.0015||W.left>=K.right+0.0015||W.bottom<=K.top-0.0015||W.top>=K.bottom+0.0015})}function Y5(J,Q,$){let{tileLength:W,tileWidth:Z,tileGap:K}=R0,H=Q.x===Q.y,Y=(H?Z:W)/2,X=J.tile,U=[],N=[[J.dx,J.dz],[J.dz,-J.dx],[-J.dz,J.dx]];for(let E=0;E<N.length;E++){let[G,F]=N[E],R=E!==0,D=(X.isDouble?Z:W)/2,O=(X.isDouble?W:Z)/2,q=X.x+J.dx*(R?X.isDouble?0:W/4:D),V=X.z+J.dz*(R?X.isDouble?0:W/4:D),M=R?[0,W/8,-W/8]:[0];for(let L of M){let P=Math.atan2(-F,G)+($==="left"?Math.PI:0)+(H?Math.PI/2:0);U.push({id:Q.id,x:q+G*((R?O:0)+K+Y)+J.dx*L,z:V+F*((R?O:0)+K+Y)+J.dz*L,yaw:P,vertical:Math.abs(Math.sin(P))>0.5,isDouble:H,dx:G,dz:F,side:$})}}return U}function MH(J,Q,$,W){let Z={id:"future",x:0,y:W?0:1};return Y5({tile:J,dx:J.dx,dz:J.dz},Z,$).some((K)=>PH(K,Q))}function X5(J,Q=[]){return N5(J,Q).placements}function U5(J,Q=[]){let $=N5(J,Q);if(!$.ends)return[];return["left","right"].map((W)=>{let Z=$.ends[W],K=Z.tile,H=CH(K),Y=Math.abs(Z.dx)*(H.right-H.left)/2+Math.abs(Z.dz)*(H.bottom-H.top)/2,X=Y+0.013;return{x:K.x+Z.dx*X,z:K.z+Z.dz*X,dx:Z.dx,dz:Z.dz}})}function N5(J,Q){if(J.length>28)throw Error("A double-six chain has at most 28 tiles.");if(!J.length)return{placements:[],ends:null};let $=new Map(J.map((G)=>[G.id,G])),W=Q.filter((G)=>G.type==="play"&&G.tile&&$.has(G.tile)),Z=$.get(W[0]?.tile||"")||J[0],K=J.findIndex((G)=>G.id===Z.id),H=Z.x===Z.y,Y={id:Z.id,x:0,z:0,yaw:H?Math.PI/2:0,vertical:H,isDouble:H,dx:1,dz:0,side:"root"},X=[Y],U=new Map([[Y.id,Y]]),N={left:{tile:Y,dx:-1,dz:0},right:{tile:Y,dx:1,dz:0}},E=W.length===J.length?W.slice(1):[...J.slice(0,K).reverse().map((G)=>({type:"play",tile:G.id,side:"left"})),...J.slice(K+1).map((G)=>({type:"play",tile:G.id,side:"right"}))];for(let G of E){let F=$.get(G.tile);if(U.has(F.id))continue;let R=G.side==="left"?"left":G.side==="right"?"right":J.findIndex((V)=>V.id===F.id)<K?"left":"right",D=Y5(N[R],F,R),O=D.filter((V)=>PH(V,X));if(!O.length)O=D.filter((V)=>PH(V,X,MO));let q=O.find((V)=>MH(V,[...X,V],R,!1)&&MH(V,[...X,V],R,!0))||O.find((V)=>MH(V,[...X,V],R,!1))||O[0];if(!q)throw Error(`No safe placement for ${F.id} after ${X.length} tiles`);X.push(q),U.set(F.id,q),N[R]={tile:q,dx:q.dx,dz:q.dz}}return{placements:J.map((G)=>U.get(G.id)),ends:N}}function G5(J,Q,$=!1){if($)return{breath:0,headYaw:0,headNod:0};let W=J*2.173+0.43;return{breath:0.0055*Math.sin(Q*(0.78+J*0.093)+W),headYaw:0.087*Math.sin(Q*(0.213+J*0.037)+W)+0.028*Math.sin(Q*(0.487+J*0.029)+W*1.91),headNod:0.009*Math.sin(Q*(0.267+J*0.035)+W*0.71)}}var E5=new T(1,0,0),L9=new T(0,1,0),IH=new IJ;function wH(J){let Q=[];return J.traverse(($)=>{if($.isBone)Q.push({bone:$,position:$.position.clone(),quaternion:$.quaternion.clone(),scale:$.scale.clone()})}),Q}var v9=new T,R9=new T,f9=new T,a7=new T,r9=new T,r8=new T,r7=new T,t7=new T,J6=new IJ,V9=new IJ,oW=new IJ,iW=new IJ,F$=(J)=>Math.min(1,Math.max(-1,J)),Q6=(J,Q,$)=>Math.min($,Math.max(Q,J)),D9=(J)=>J*J*(3-2*J);function $8(J,Q){J.getWorldQuaternion(V9),J.parent.getWorldQuaternion(oW),J.quaternion.copy(oW.invert()).multiply(Q).multiply(V9),J.updateMatrixWorld(!0)}var T8=new T,e8=new T;function CO(J){J.holder.getWorldQuaternion(iW),T8.set(1,0,0).applyQuaternion(iW),e8.set(0,0,1).applyQuaternion(iW)}function TH(J,Q,$,W,Z){return Z.set(Q,$,W).applyMatrix4(J.holder.matrixWorld)}function F5(J,Q,$,W){return W.set(J,Q,$).applyQuaternion(iW).normalize()}var PO=0.965;function IO(J,Q,$){let{brazo:W,antebrazo:Z,mano:K}=J;if(!W||!Z||!K||!W.parent||!Z.parent)return;W.getWorldPosition(v9),Z.getWorldPosition(R9),K.getWorldPosition(f9);let H=v9.distanceTo(R9),Y=R9.distanceTo(f9);if(H<0.00001||Y<0.00001)return;let X=Q6(v9.distanceTo(Q),Math.abs(H-Y)+0.002,(H+Y)*PO);if(r9.subVectors(R9,v9),r8.subVectors(f9,R9),r7.crossVectors(r9,r8),r7.lengthSq()<0.0000000001)r7.copy(T8);else r7.normalize();let U=Math.acos(F$((H*H+Y*Y-v9.distanceToSquared(f9))/(2*H*Y))),E=Math.acos(F$((H*H+Y*Y-X*X)/(2*H*Y)))-U;if($8(Z,J6.setFromAxisAngle(r7,E)),K.getWorldPosition(f9),Math.abs(v9.distanceTo(f9)-X)>0.001)$8(Z,J6.setFromAxisAngle(r7,-2*E)),K.getWorldPosition(f9);if(r9.subVectors(f9,v9).normalize(),r8.subVectors(Q,v9),r8.lengthSq()<0.0000000001)return;if(r8.normalize(),$8(W,J6.setFromUnitVectors(r9,r8)),!$)return;if(Z.getWorldPosition(R9),t7.subVectors(R9,v9),t7.addScaledVector(r8,-t7.dot(r8)),a7.subVectors($,v9),a7.addScaledVector(r8,-a7.dot(r8)),t7.lengthSq()<0.0000000001||a7.lengthSq()<0.0000000001)return;t7.normalize(),a7.normalize();let G=Math.atan2(r7.crossVectors(t7,a7).dot(r8),F$(t7.dot(a7)));$8(W,J6.setFromAxisAngle(r8,G))}var v8=new T,$Q=new T,U$=new T,zO=new QJ,zH=new IJ,N$=new IJ;function AO(J,Q,$){let{antebrazo:W,mano:Z}=J;if(!W||!Z||!Z.parent)return;if(v8.copy(Q).normalize(),U$.crossVectors(v8,$),U$.lengthSq()<0.00000001)return;U$.normalize(),$Q.crossVectors(U$,v8),zH.setFromRotationMatrix(zO.makeBasis(U$,v8,$Q)),W.getWorldPosition(R9),Z.getWorldPosition(f9),r9.subVectors(f9,R9).normalize(),Z.getWorldQuaternion(V9),N$.copy(zH).multiply(V9.invert());let K=N$.x*r9.x+N$.y*r9.y+N$.z*r9.z,H=2*Math.atan2(K,N$.w);if(Number.isFinite(H))$8(W,J6.setFromAxisAngle(r9,Q6(H*0.5,-1.2,1.2)));Z.parent.getWorldQuaternion(oW),Z.quaternion.copy(oW.invert()).multiply(zH),Z.updateMatrixWorld(!0)}var _O=new T;function TO(J,Q,$){let W=Q.lado==="Left"?1:-1,Z=J.index*1.7,K=R0.seatDistance-R0.tableWidth/2;return TH(J,W*(0.225+Math.sin(Z)*0.01)+Math.sin($*0.23+Z)*0.004,R0.surfaceY+0.026,K+(W>0?0.035:0.06)+Math.cos(Z*1.3)*0.012+Math.sin($*0.17+Z*2)*0.004,_O)}var SO=new T,JQ=new T,SH=new T,dW=new T,wO=0.045,jO=0.05,yO=0.12,vO=0.14,fO=0.45,bO=4;function q5(J,Q,$){return dW.subVectors(Q,J.holder.getWorldPosition(SH)),dW.y=0,dW.normalize(),$.copy(Q).addScaledVector(dW,-jO).setY(Q.y+wO)}function hO(J,Q,$){let W=J.jugada;if(!W)return null;if(Q-W.t0>bO)return J.jugada=null,null;let Z=W.anim;if(Z.elapsed<Z.duration)return q5(J,W.obj.position,JQ),JQ.lerpVectors($,JQ,D9(Q6(Z.elapsed/yO,0,1)));if(W.aterrizo==null)W.aterrizo=Q;let K=Q-W.aterrizo;q5(J,W.hasta,JQ);let H=Z.golpe?0.7:vO;if(K<H)return JQ;let Y=(K-H)/fO;if(Y>=1)return J.jugada=null,null;return JQ.lerp($,D9(Y))}var LJ=[1,1.9,3.3,4.3,5.2],O5=-1e9;function xO(J,Q,$){let W=J.bebida;if(!W)return null;if(J.trago){let K=J.trago.fijo??Q-J.trago.t0;if(K<0||K>=LJ[4]||J.jugada)return J.trago=null,k5(W),J.sed=Q+90+Math.random()*150,null;return K}if(!$||!$.dt)return null;if(J.sed==null)return J.sed=Q+20+Math.random()*100,null;if(Q<J.sed||Q-O5<20)return null;let Z=J.index;if(J.jugada||$.jugando&&$.turno===Z||$.habla.has(Z)||$.fin&&Q-$.fin.t<6)return J.sed=Q+3+Math.random()*8,null;return O5=Q,J.trago={t0:Q},0}function k5(J){J.group.position.copy(J.home),J.group.quaternion.identity()}var a9=new T,e7=new T,QQ=new T,G$=new T,R5=new T;function L5(J,Q,$,W){let Z=J.bebida;if(QQ.copy(e8).addScaledVector(L9,0.25).normalize(),G$.copy(e8).multiplyScalar(0.55).addScaledVector(L9,0.8).normalize(),e7.copy(Z.home),e7.y+=Z.alto,e7.addScaledVector(T8,-(Z.radio+0.015)).addScaledVector(QQ,-0.03),J.bocaMundo)J.bocaMundo(a9),a9.addScaledVector(e8,0.006);else J.front.getWorldPosition(a9),a9.y-=0.075,a9.addScaledVector(e8,0.012);let K=Z.inclina;R5.copy(L9).multiplyScalar(Math.cos(K)).addScaledVector(e8,-Math.sin(K)),a9.addScaledVector(R5,-Z.boca).addScaledVector(T8,-(Z.radio+0.015)).addScaledVector(G$,-0.03);let H;if(Q<LJ[0])W.lerpVectors($,e7,D9(Q/LJ[0])),H=QQ;else if(Q<LJ[1]){let Y=D9((Q-LJ[0])/(LJ[1]-LJ[0]));W.lerpVectors(e7,a9,Y),H=QQ.lerp(G$,Y).normalize()}else if(Q<LJ[2])W.copy(a9),H=G$;else if(Q<LJ[3]){let Y=D9((Q-LJ[2])/(LJ[3]-LJ[2]));W.lerpVectors(a9,e7,Y),H=G$.lerp(QQ,Y).normalize()}else W.lerpVectors(e7,$,D9((Q-LJ[3])/(LJ[4]-LJ[3]))),H=QQ;return H}var V5=new T,D5=new T,B5=new T;function gO(J,Q){let $=J.bebida,W=J.brazos[1].mano;if(Q<LJ[0]||Q>=LJ[3]){k5($);return}W.getWorldQuaternion(V9),W.getWorldPosition(aW),V5.set(0,0,1).applyQuaternion(V9),D5.set(0,1,0).applyQuaternion(V9);let Z=Q<LJ[1]?D9((Q-LJ[0])/(LJ[1]-LJ[0])):Q<LJ[2]?1:1-D9((Q-LJ[2])/(LJ[3]-LJ[2]));$.group.quaternion.setFromAxisAngle(T8,-$.inclina*Z),B5.set(0,1,0).applyQuaternion($.group.quaternion),$.group.position.copy(aW).addScaledVector(V5,$.radio+0.015).addScaledVector(D5,0.03).addScaledVector(B5,-$.alto)}function pO(J,Q,$){let W=J.cara;if(!W)return 0;if(J.proxParpadeo==null)J.proxParpadeo=Q+1+Math.random()*4;if(Q>=J.proxParpadeo)J.parpadeoT0=Q,J.proxParpadeo=Q+(Math.random()<0.15?0.32:2+Math.random()*4);let Z=Q-(J.parpadeoT0??-9),K=Z<0?0:Z<0.06?Z/0.06:Z<0.09?1:Z<0.16?1-(Z-0.09)/0.07:0;if(J.caraFija){let U=J.caraFija,N=W.mesh.morphTargetInfluences;if(N)N[W.iP]=U.p*0.85,N[W.iS]=U.s;return J.parpadeo=U.p,U.p}let H=J.index,Y=0;if($?.fin&&$.fin.team!=null&&Q-$.fin.t<5&&Q>=$.fin.t)Y=H%2===$.fin.team?0.95:-0.7;else if($?.habla?.has(H))Y=$.hablaTipo?.get(H)==="win"?0.85:0.2;else{if(J.casual==null)J.casual=Q+8+Math.random()*30;if(Q>J.casual+2.5)J.casual=Q+15+Math.random()*45;if(Q>=J.casual)Y=0.45}J.sonrisa=(J.sonrisa??0)+(Y-(J.sonrisa??0))*(1-Math.exp(-($?.dt||0.016)*3.5));let X=W.mesh.morphTargetInfluences;if(X)X[W.iP]=K*0.85,X[W.iS]=J.sonrisa;return J.parpadeo=K,K}function lO(J,Q){let $=J.index,W=0.23+$%4*0.012,Z=Q*W*Math.PI*2+$*1.9,K=Math.sin(Z);return{b:K>0?K:K*0.7,balanceo:Math.sin(Q*0.11+$*2.3)*0.022+Math.sin(Q*0.29+$)*0.008,ladeo:Math.sin(Q*0.07+$*1.3)*0.014}}var AH=new T,cW=new T,t8=new T,k7=new T,B9=new T,y8=new IJ,nW=(J)=>{let Q=Math.sin(J*127.1+311.7)*43758.5453;return Q-Math.floor(Q)};function mO(J,Q,$,W){let Z=J.index;if(Z>=4||!$)return $?.foco&&Q-$.foco.t<2.5?W.copy($.foco.p):W.set(0,R0.surfaceY,0);if($.fin&&Q-$.fin.t<5){if($.fin.team!=null&&Z%2===$.fin.team&&$.cabezas[(Z+2)%4])return W.copy($.cabezas[(Z+2)%4]);return TH(J,0,R0.surfaceY,R0.seatDistance-R0.rackRadius,W)}if(J.trago&&J.bebida){let Y=J.trago.fijo??Q-J.trago.t0;if(Y<1.1||Y>3.4&&Y<4.3)return W.copy(J.bebida.home);if(Y<=3.4)return J.head.getWorldPosition(W),W.addScaledVector(e8,1).addScaledVector(L9,-0.15)}if($.foco&&Q-$.foco.t<1.4)return W.copy($.foco.p);for(let Y of $.habla)if(Y!==Z&&$.cabezas[Y])return W.copy($.cabezas[Y]);if($.jugando&&$.turno===Z){let Y=Math.floor(Q/1.3);return TH(J,(nW(Y+Z*9)-0.5)*0.12,R0.surfaceY+0.02,R0.seatDistance-R0.rackRadius+0.02,W)}let K=Math.floor((Q+Z*1.37)/(2.2+Z*0.35)),H=nW(K*4+Z);if($.jugando&&H<0.45&&$.cabezas[$.turno]&&$.turno!==Z)return W.copy($.cabezas[$.turno]);if(H<0.62&&$.cabezas[(Z+2)%4])return W.copy($.cabezas[(Z+2)%4]);if(!$.jugando&&H<0.85&&$.cabezas[(Z+1+K%2*2)%4])return W.copy($.cabezas[(Z+1+K%2*2)%4]);return W.set((nW(K+7)-0.5)*0.2,R0.surfaceY,(nW(K+3)-0.5)*0.2)}function uO(J,Q,$){let{head:W,neck:Z,front:K}=J;if(!W||!K)return;if(mO(J,Q,$,AH),!J.mirada||!$?.dt)J.mirada=(J.mirada||new T).copy(AH);else J.mirada.lerp(AH,1-Math.exp(-$.dt*5.5));for(let[H,Y]of[[Z,0.4],[W,1]]){if(!H)continue;if(W.getWorldPosition(cW),K.getWorldPosition(t8),t8.sub(cW),t8.lengthSq()<0.0000000001)return;if(t8.normalize(),k7.subVectors(J.mirada,cW),k7.lengthSq()<0.00000001)return;k7.normalize();let X=Q6(Math.atan2(t8.z*k7.x-t8.x*k7.z,t8.x*k7.x+t8.z*k7.z),-1.25,1.25)*Y;if($8(H,J6.setFromAxisAngle(L9,X)),K.getWorldPosition(t8),t8.sub(cW).normalize(),B9.crossVectors(t8,L9),B9.lengthSq()<0.00000001)continue;B9.normalize();let U=Q6(Math.asin(F$(k7.y))-Math.asin(F$(t8.y)),-0.75,0.55)*Y;$8(H,J6.setFromAxisAngle(B9,U))}}var dO=0.23,cO=[["lomo",0.4],["spine",0.34],["chest",0.26]],KD=new IJ;function nO(J,Q,$=0){if(!J.spine||!J.spine.parent)return;if(B9.copy(T8),J.hips&&J.lomo)for(let[W,Z]of cO){let K=J[W];if(!K)continue;$8(K,y8.setFromAxisAngle(B9,Q*Z))}else $8(J.spine,y8.setFromAxisAngle(B9,Q));if($)$8(J.spine,y8.setFromAxisAngle(L9,$))}var sW=new T,_H=new T,E$=new T,aW=new T;function rW(J,Q,$=!1,W=null){for(let R of J.pose)R.bone.position.copy(R.position),R.bone.quaternion.copy(R.quaternion),R.bone.scale.copy(R.scale);J.holder.updateMatrixWorld(!0),CO(J);let Z=G5(J.index,Q,$);if(J.spine)J.spine.quaternion.multiply(IH.setFromAxisAngle(E5,Z.breath));let K=!$,H=K?lO(J,Q):{b:0,balanceo:0,ladeo:0},Y=J.index,X=Y<4&&J.brazos,U=0,N=0;if(X&&W?.fin&&W.fin.team!=null){let R=Q-W.fin.t;if(R>=0&&R<5)N=Math.sin(Math.min(1,R/0.5)*Math.PI/2)*(R>4?5-R:1),U+=(Y%2===W.fin.team?-0.1:0.07)*N}if(X&&W?.jugando&&W.turno===Y)U+=0.04;let E=X&&K&&J.front?xO(J,Q,W):null,G=[];if(X)for(let R of J.brazos){let D=SO.copy(TO(J,R,Q)),O=R.lado==="Right"?hO(J,Q,D):null,q=!!O,V=null;if(!O&&E!=null&&R.lado==="Right")O=SH.set(0,0,0),V=L5(J,E,D,O).clone();if(O=(O||D).clone(),!q&&K&&W?.habla?.has(Y)&&R.lado==="Left")J.gesto=Math.min(1,(J.gesto||0)+(W.dt||0)*3);else if(R.lado==="Left")J.gesto=Math.max(0,(J.gesto||0)-(W?.dt||1)*2);if(R.lado==="Left"&&J.gesto>0){let M=D9(J.gesto);O.addScaledVector(e8,0.06*M).addScaledVector(T8,-0.07*M),O.y+=0.07*M+Math.sin(Q*5.2)*0.012*M}if(R.lado==="Right"&&!q&&N&&Y%2===W.fin.team){let M=Q-W.fin.t;if(M<1.1)O.y+=Math.max(0,Math.sin(Math.min(1,M/0.9)*Math.PI))*0.13}G.push({brazo:R,o:O,jugando:q,dedos:V,reposo:D.clone()})}let F=0;if(X){let R=G.find((D)=>D.jugando);if(R&&R.brazo.brazo){J.holder.worldToLocal(E$.copy(R.o));let D=Math.hypot(E$.x,E$.z-0.12);U+=Q6((D-0.42)/0.55,0,0.34),F=Q6(Math.atan2(E$.x,E$.z)*0.3,-0.3,0.3)}}if(nO(J,dO*(J.brazos?1:0.6)+U,F),E!=null){let R=E<LJ[1]?Math.sin(Math.min(1,E/LJ[0])*Math.PI/2)*(1-D9(Math.max(0,E-LJ[0])/(LJ[1]-LJ[0]))):E>LJ[2]?Math.sin(Math.min(1,(E-LJ[2])/(LJ[3]-LJ[2]))*Math.PI):0;if(J.spine)$8(J.spine,y8.setFromAxisAngle(e8,0.16*R))}if(K){if(J.spine)$8(J.spine,y8.setFromAxisAngle(L9,H.balanceo));if(J.spine)$8(J.spine,y8.setFromAxisAngle(e8,H.ladeo));if(J.chest)$8(J.chest,y8.setFromAxisAngle(T8,-0.018*H.b));if(J.hombros){for(let[R,D]of J.hombros)if(D)$8(D,y8.setFromAxisAngle(e8,R*0.03*(H.b+0.3)))}}if(uO(J,Q,W),pO(J,Q,W),J.head)J.head.quaternion.multiply(IH.setFromAxisAngle(L9,Z.headYaw*0.5)),J.head.quaternion.multiply(IH.setFromAxisAngle(E5,Z.headNod)),J.head.updateMatrixWorld(!0);if(K&&J.head){if(W?.habla?.has(Y)){let R=0.035*(0.6+0.4*Math.sin(Q*1.7));$8(J.head,y8.setFromAxisAngle(T8,Math.sin(Q*6.1)*R*0.5+Math.sin(Q*3.3)*R*0.5))}if(N&&Y%2!==W.fin.team){let R=Q-W.fin.t;if(R>0.6&&R<2.6)$8(J.head,y8.setFromAxisAngle(L9,Math.sin((R-0.6)*Math.PI*2.4)*0.16*(2.6-R)/2))}}if(E!=null&&E>LJ[1]-0.2&&E<LJ[2]+0.2&&J.head){let R=Math.sin(Math.min(1,(E-LJ[1]+0.2)/(LJ[2]-LJ[1]+0.4))*Math.PI);$8(J.head,y8.setFromAxisAngle(T8,-0.3*R))}if(K&&J.reaction&&J.head){let R=Q-J.reaction.time;if(R>=0&&R<1.2){let D=Math.sin(R/1.2*Math.PI)*0.035;$8(J.head,y8.setFromAxisAngle(T8,D))}}for(let{brazo:R,o:D,jugando:O,dedos:q,reposo:V}of G){if(q)q.copy(L5(J,E,V,D));let M=R.lado==="Left"?1:-1;if(R.brazo.getWorldPosition(sW),q)sW.add(F5(M*0.85,-0.5,0.05,_H));else sW.add(F5(M*(O?0.55:0.32),-0.75,O?-0.15:-0.6,_H));if(IO(R,D,sW),R.antebrazo.getWorldPosition(R9),R.mano.getWorldPosition(aW),v8.subVectors(aW,R9),v8.y=0,v8.lengthSq()<0.00000001)v8.copy(e8);if(v8.normalize(),v8.addScaledVector(T8,-M*(O?0:0.12)).normalize(),v8.y=O?-0.55:-0.3,$Q.set(0,-1,0).addScaledVector(T8,-M*0.22),R.lado==="Left"&&J.gesto>0){let L=D9(J.gesto);$Q.lerp(_H.copy(T8).multiplyScalar(-1).add(SH.set(0,0.4,0)),L*0.8),v8.y+=0.4*L}if(q)v8.copy(q),$Q.copy(T8).addScaledVector(L9,-0.15);if(AO(R,v8,$Q),q)gO(J,E);if(K&&!O&&!q&&R.lado==="Right"&&J.toque&&Q-J.toque.t0<0.7){let L=Q-J.toque.t0;R.mano.getWorldQuaternion(V9),B9.set(1,0,0).applyQuaternion(V9),$8(R.mano,y8.setFromAxisAngle(B9,-0.5*Math.max(0,Math.sin(L/0.7*Math.PI*4))))}else if(K&&!O&&!q&&R.lado==="Right"&&!(W?.turno===Y&&W?.jugando)){let L=4.6+Y*0.9,P=(Q+Y*1.3)%L;if(P<0.55)R.mano.getWorldQuaternion(V9),B9.set(1,0,0).applyQuaternion(V9),$8(R.mano,y8.setFromAxisAngle(B9,-0.22*Math.max(0,Math.sin(P/0.55*Math.PI*4))))}}J.holder.updateMatrixWorld(!0)}function M5({scene:J,texture:Q,mat:$,box:W,cylinder:Z,random:K,teal:H,wood:Y,storeSign:X}){let U=Q((V,M,L)=>{V.fillStyle="#e0d3b4",V.fillRect(0,0,M,L);let P=V.createLinearGradient(0,0,0,L);P.addColorStop(0,"#cac09b18"),P.addColorStop(0.7,"#14382d00"),P.addColorStop(1,"#162d2566"),V.fillStyle=P,V.fillRect(0,0,M,L);for(let I=0;I<7000;I++)V.fillStyle=I%3?"#b4ad8618":"#142d2924",V.fillRect(K()*M,K()*L,1+K()*3,1+K()*2);for(let I=0;I<70;I++){let S=K()*M,k=I<50?L*(0.72+K()*0.28):K()*L,A=5+K()*14;V.fillStyle=I%3?"rgba(160,145,112,.35)":"rgba(120,110,90,.25)",V.beginPath();for(let d=0;d<8;d++){let b=d*Math.PI/4,g=A*(0.6+K()*0.5);V.lineTo(S+Math.cos(b)*g,k+Math.sin(b)*g*0.65)}V.fill()}V.strokeStyle="#1b372e24";for(let I=48;I<L;I+=57)V.beginPath(),V.moveTo(0,I),V.lineTo(M,I),V.stroke()},1024,1024);H.map=U,H.color.set("#f2ecde"),H.needsUpdate=!0,Y.color.set("#bca98a"),Y.roughness=0.84;let N=()=>{X.material.map=Q((V,M,L)=>{V.fillStyle="#efe3c4",V.fillRect(0,0,M,L);for(let S=0;S<2600;S++)V.fillStyle=S%2?"rgba(120,100,70,.07)":"rgba(255,250,235,.08)",V.fillRect(K()*M,K()*L,2+K()*14,1+K()*2);let P=document.fonts?.check?.("64px Shrikhand")?"Shrikhand":"Georgia",I=P==="Shrikhand"?L*0.66:L*0.56;V.font=`${I}px ${P}`,V.textAlign="center",V.textBaseline="middle",V.fillStyle="#c8402f",V.fillText("Colmado La Esquina",M/2+I*0.06,L/2+I*0.1),V.fillStyle="#24518a",V.fillText("Colmado La Esquina",M/2,L/2+I*0.04),V.strokeStyle="#3d938e",V.lineWidth=12,V.strokeRect(6,6,M-12,L-12);for(let S=0;S<1400;S++)V.fillStyle="rgba(239,227,196,.35)",V.fillRect(K()*M,K()*L,1+K()*3,1+K()*2)},2048,162),X.material.emissiveMap=X.material.map,X.material.needsUpdate=!0};X.material=new i0({roughness:0.9,emissive:"#ffffff",emissiveIntensity:0.1}),N(),document.fonts?.load?.("64px Shrikhand").then(N).catch(()=>{});for(let[V,M]of[[-2.7,-3.5],[2.4,-3.3]])W(V,0.18,M,0.51,0.35,0.4,"#897052"),W(V+0.05,0.47,M-0.04,0.4,0.23,0.32,"#a68c62");let E=new I0(new zJ(0.72,0.69),new i0({roughness:1,map:Q((V,M,L)=>{V.fillStyle="#263d30",V.fillRect(0,0,M,L),V.strokeStyle="#9c8c62",V.lineWidth=16,V.strokeRect(8,8,M-16,L-16),V.fillStyle="#dcdcb8",V.textAlign="center";for(let[P,I,S]of[["HOY HAY",68,43],["CAFÉ",150,48],["HIELO · PAN",228,32],["REFRESCOS",292,31]])V.font=`${S}px Georgia`,V.fillText(P,M/2,I)},384,360)}));E.position.set(-3.43,1.6,-2.33),E.rotation.z=0.025,J.add(E);let G=[];W(-1.12,1.59,-4,0.42,0.21,0.31,"#677761"),W(-1.12,1.61,-3.836,0.34,0.1,0.016,"#414b3d"),W(-0.38,1.5,-3.98,0.3,0.018,0.22,"#c5b887");for(let[V,M,L]of[[0.7,-4.03,"#8b7747"],[0.98,-4.07,"#637751"],[1.29,-4.02,"#a88b50"]])Z(V,1.6,M,0.07,0.075,0.25,L,14),Z(V,1.739,M,0.077,0.077,0.028,"#aaa386",12);W(0.2,1.51,-4.01,0.4,0.07,0.28,"#6c5838");for(let V=0;V<4;V++){let M=new I0(new k8(1,10,6),$(V%2?"#bca276":"#a98e61"));M.scale.set(0.055,0.035,0.115),M.position.set(0.07+V*0.085,1.57,-4),M.rotation.y=(V-1.5)*0.13,J.add(M)}let F=new dJ({transparent:!0,depthWrite:!1,map:Q((V,M,L)=>{for(let P=0;P<90;P++)V.fillStyle=P%2?"#152c2110":"#3036230a",V.beginPath(),V.ellipse(M/2+(K()-0.5)*M*0.45,L/2+(K()-0.5)*L*0.45,K()*M*0.24,K()*L*0.18,K()*Math.PI,0,Math.PI*2),V.fill()},256,256)});for(let[V,M,L,P]of[[-2.4,-2.2,1.1,0.9],[2.5,-2.5,1.3,0.8],[0,-3.25,2,0.6]]){let I=new I0(new zJ(L,P),F);I.rotation.x=-Math.PI/2,I.position.set(V,0.008,M),J.add(I)}for(let[V,M]of[[-3,-0.9],[3.3,-1.5]]){Z(V,0.18,M,0.18,0.13,0.34,"#87553c",14),Z(V,0.354,M,0.16,0.16,0.012,"#3f422d",12);let L=new fJ;L.position.set(V,0.36,M),J.add(L);for(let P=0;P<7;P++){let I=new oQ;I.moveTo(0,0),I.quadraticCurveTo(-0.09,0.23,0,0.55+K()*0.12),I.quadraticCurveTo(0.09,0.23,0,0);let S=new I0(new aQ(I,5),new i0({color:P%2?"#597d4f":"#3c603e",roughness:1,side:sJ}));S.rotation.set(0.3+K()*0.4,P*Math.PI*2/7,0),L.add(S)}G.push(L)}let R=new zJ(0.55,1.3,5,9),D=new I0(R,new i0({color:"#b2a27c",roughness:1,side:sJ}));D.position.set(-2.85,1.75,-3.05),J.add(D);let O=R.attributes.position,q=O.array.slice();return{update(V){G.forEach((M,L)=>M.rotation.z=Math.sin(V*0.53+L*2.1)*0.015);for(let M=0;M<O.count;M++){let L=q[M*3+1];O.setZ(M,Math.sin(V*1.17+L*3)*0.025*(0.65-L)/1.3)}O.needsUpdate=!0}}}function C5({scene:J,texture:Q,mat:$,box:W,cylinder:Z,staticGeo:K,random:H}){let Y=(w=0,x=0,l=0)=>new T(w,x,l),X=(w,x,l,e,t,D0,L0=5000)=>{w.fillStyle=e,w.fillRect(0,0,x,l);for(let N0=0;N0<L0;N0++)w.fillStyle=H()>0.5?t:D0,w.fillRect(H()*x,H()*l,1+H()*4,1+H()*3)},U=[];function N(w,{w:x=1024,h:l=256,fondo:e="#efe3c4",tinta:t="#24518a",sombra:D0="#c8402f",borde:L0=null,px:N0=0.62}={}){let g0=document.createElement("canvas");g0.width=x,g0.height=l;let c0=new F9(g0);c0.colorSpace=Y8;let kJ=()=>{let j0=g0.getContext("2d"),MJ=document.fonts?.check?.("64px Shrikhand")?"Shrikhand":"Georgia";if(e){j0.fillStyle=e,j0.fillRect(0,0,x,l);for(let nJ=0;nJ<x*1.2;nJ++)j0.fillStyle=nJ%2?"rgba(120,100,70,.07)":"rgba(255,250,235,.08)",j0.fillRect(Math.random()*x,Math.random()*l,2+Math.random()*12,1+Math.random()*2)}else j0.clearRect(0,0,x,l);let _J=l*N0;j0.font=`${_J}px ${MJ}`;let bJ=j0.measureText(w).width;if(bJ>x*0.9)_J*=x*0.9/bJ,j0.font=`${_J}px ${MJ}`;j0.textAlign="center",j0.textBaseline="middle";let y=_J*0.06;if(D0)j0.fillStyle=D0,j0.fillText(w,x/2+y,l/2+y+_J*0.04);if(j0.fillStyle=t,j0.fillText(w,x/2,l/2+_J*0.04),L0)j0.strokeStyle=L0,j0.lineWidth=l*0.07,j0.strokeRect(j0.lineWidth/2,j0.lineWidth/2,x-j0.lineWidth,l-j0.lineWidth);for(let nJ=0;nJ<x*0.5;nJ++)j0.fillStyle=e?"rgba(239,227,196,.3)":"rgba(0,0,0,0)",j0.fillRect(Math.random()*x,Math.random()*l,1+Math.random()*3,1+Math.random()*2);c0.needsUpdate=!0};return kJ(),U.push(kJ),c0}document.fonts?.load?.("64px Shrikhand").then(()=>U.forEach((w)=>w())).catch(()=>{});let E=new i0({roughness:0.93,map:Q((w,x,l)=>{X(w,x,l,"#e3d6b8","rgba(255,250,236,.10)","rgba(120,100,70,.08)");let e=w.createLinearGradient(0,0,0,l);e.addColorStop(0,"rgba(90,70,50,.12)"),e.addColorStop(0.18,"rgba(90,70,50,0)"),e.addColorStop(0.8,"rgba(90,70,50,0)"),e.addColorStop(1,"rgba(90,70,50,.2)"),w.fillStyle=e,w.fillRect(0,0,x,l);for(let t=0;t<22;t++){let D0=H()*x,L0=l*(0.08+H()*0.3),N0=w.createLinearGradient(0,0,0,L0);N0.addColorStop(0,"rgba(80,70,55,.2)"),N0.addColorStop(1,"rgba(80,70,55,0)"),w.fillStyle=N0,w.fillRect(D0,0,3+H()*8,L0)}},512,512)}),G=new i0({roughness:0.9,map:Q((w,x,l)=>{X(w,x,l,"#3f9a96","rgba(200,240,230,.10)","rgba(20,50,50,.10)");for(let e=0;e<50;e++)w.fillStyle="rgba(225,218,195,.55)",w.beginPath(),w.ellipse(H()*x,H()*l,2+H()*9,1+H()*5,H()*3,0,Math.PI*2),w.fill()},256,256)});W(-3.48,0.625,-2.355,0.702,1.25,0.012,G),W(3.45,0.625,-2.355,0.802,1.25,0.012,G),W(-3.906,0.625,-3.85,0.012,1.25,2.72,G),W(3.906,0.625,-3.85,0.012,1.25,2.72,G);let F=22,R="#3d8a5c",D="#e8dfc8",O=Q((w,x,l)=>{for(let t=0;t<F;t++)w.fillStyle=t%2?D:R,w.fillRect(t*x/F,0,Math.ceil(x/F),l);for(let t=0;t<2500;t++)w.fillStyle=H()>0.5?"rgba(255,250,235,.06)":"rgba(20,30,20,.07)",w.fillRect(H()*x,H()*l,2,2);let e=w.createLinearGradient(0,0,0,l);e.addColorStop(0,"rgba(0,0,0,.14)"),e.addColorStop(1,"rgba(40,30,20,0)"),w.fillStyle=e,w.fillRect(0,0,x,l)},1024,128);K(new zJ(7.3,0.86),new i0({map:O,roughness:0.95,side:sJ}),[0,2.59,-1.955],[-1.237,0,0]);let q=Q((w,x,l)=>{let e=x/F;for(let t=0;t<F;t++)w.fillStyle=t%2?D:R,w.fillRect(t*e,0,Math.ceil(e),l*0.5),w.beginPath(),w.arc(t*e+e/2,l*0.5,e/2-0.5,0,Math.PI),w.fill()},1024,64);K(new zJ(7.3,0.2),new i0({map:q,roughness:0.95,side:sJ,alphaTest:0.5}),[0,2.35,-1.548]);{let w=new i0({roughness:0.8,map:Q((l,e,t)=>{l.fillStyle="#2a3332",l.fillRect(0,0,e,t);let D0=l.createLinearGradient(0,0,0,t);D0.addColorStop(0,"#cfe8e0"),D0.addColorStop(1,"#8fb3aa"),l.fillStyle=D0,l.fillRect(14,14,e-28,t-28),l.strokeStyle="#1f2525",l.lineWidth=7;for(let L0=30;L0<e-20;L0+=26)l.beginPath(),l.moveTo(L0,14),l.lineTo(L0,t-14),l.stroke();for(let L0 of[t*0.33,t*0.66])l.beginPath(),l.moveTo(14,L0),l.lineTo(e-14,L0),l.stroke();l.strokeStyle="#e8e0cc",l.lineWidth=12,l.strokeRect(6,6,e-12,t-12)},256,256),emissive:"#ffffff",emissiveIntensity:0.12});w.emissiveMap=w.map,K(new zJ(1.1,1),w,[3.915,1.75,-4.3],[0,Math.PI/2,0]);let x=new I0(new zJ(2.2,0.36),new i0({map:N("Víveres · Bebidas · Hielo",{w:1536,h:252,fondo:null,tinta:"#24518a",sombra:"#c8402f"}),transparent:!0,roughness:0.9}));x.position.set(3.915,2.55,-3.75),x.rotation.y=Math.PI/2,J.add(x)}let V=3.3,M=2.75,L=-2.7,P=V+M;W(0,V+M/2,-5.2,8.2,M,0.2,E),W(-4,V+M/2,-3.95,0.2,M,2.7,E),W(4,V+M/2,-3.95,0.2,M,2.7,E),W(0,V+M/2,L,8.2,M,0.2,E),W(0,P-0.08,-3.95,8.44,0.16,2.95,"#d3c9b0"),W(0,V+0.06,L+0.12,8.3,0.1,0.06,"#3d938e");let I=new i0({roughness:0.7,map:Q((w,x,l)=>{w.fillStyle="#2d3a3a",w.fillRect(0,0,x,l);let e=15,t=(l-24)/e;for(let D0=0;D0<e;D0++){let L0=12+D0*t;w.fillStyle="#7aa39d",w.fillRect(12,L0,x-24,t*0.72),w.fillStyle="rgba(0,0,0,.25)",w.fillRect(12,L0+t*0.62,x-24,t*0.1)}w.strokeStyle="#e8e0cc",w.lineWidth=12,w.strokeRect(6,6,x-12,l-12)},256,256)});K(new zJ(1.2,1.25),I,[-2.5,4.6,L+0.107]);let S=new i0({roughness:0.7,map:I.map,emissive:"#8fb0ff",emissiveMap:I.map,emissiveIntensity:0.25}),k=new I0(new zJ(1.2,1.25),S);k.position.set(2.5,4.6,L+0.107),J.add(k);let A=new i0({roughness:0.8,emissive:"#ffffff",emissiveIntensity:0.55,map:Q((w,x,l)=>{let e=w.createLinearGradient(0,0,0,l);e.addColorStop(0,"#f0c27f"),e.addColorStop(1,"#b87a44"),w.fillStyle=e,w.fillRect(0,0,x,l),w.strokeStyle="#1d2222",w.lineWidth=6;for(let t=18;t<x;t+=22)w.beginPath(),w.moveTo(t,0),w.lineTo(t,l),w.stroke();for(let t=l*0.2;t<l;t+=l*0.2)w.beginPath(),w.moveTo(0,t),w.lineTo(x,t),w.stroke();w.lineWidth=5;for(let t=0;t<4;t++)w.beginPath(),w.arc(x/2,l*0.1+t*l*0.2,18,0,Math.PI*2),w.stroke();w.strokeStyle="#e8e0cc",w.lineWidth=14,w.strokeRect(7,7,x-14,l-14)},128,256)});A.emissiveMap=A.map,K(new zJ(1,2.1),A,[0,V+1.08,L+0.107]);let d="#262c2b";for(let w of[3.38,4.22])W(0,w,-1.56,8,0.04,0.04,d);for(let w=-3.94;w<=3.95;w+=0.14)W(w,3.8,-1.56,0.018,0.84,0.018,d);for(let w of[-3.97,3.97]){for(let x of[3.38,4.22])W(w,x,-2.08,0.04,0.04,1.04,d);for(let x=-2.55;x<=-1.6;x+=0.14)W(w,3.8,x,0.018,0.84,0.018,d)}for(let[w,x]of[[-3.3,-1.8],[3.25,-1.85],[1.5,-1.78]]){Z(w,3.46,x,0.13,0.1,0.24,"#9a5a3c",12);for(let l=0;l<4;l++)K(new k8(1,8,6),$(l%2?"#5b7f4f":"#44663e",0.95),[w+(l-1.5)*0.06,3.66+l%2*0.05,x+(l%3-1)*0.04],[0,0,0],[0.12,0.14,0.1])}Z(2.5,P+0.52,-4.3,0.5,0.55,1,"#1f2322",18),Z(2.5,P+1.06,-4.3,0.2,0.22,0.08,"#2b302f",12),Z(-1.8,P+0.35,-4.6,0.035,0.035,0.7,"#8d8f89",8);for(let[w,x]of[[-3.95,-2.75],[3.95,-2.75],[-3.95,-5.15],[3.95,-5.15]])for(let[l,e]of[[-0.05,-0.05],[0.05,-0.05],[-0.05,0.05],[0.05,0.05]])Z(w+l,P+0.42,x+e,0.007,0.007,0.84,"#6b4a35",4);let b=$("#8a6a48",0.8),g=$("#4f7f55",0.85);for(let w of[0.55,1,1.45,1.9,2.35,2.8])W(-3.53,w,-3.85,0.34,0.04,2.2,g);for(let w of[-4.94,-2.76])W(-3.53,1.65,w,0.34,2.3,0.04,g);let Z0=Q((w,x,l)=>{w.fillStyle="#bdbdbd",w.fillRect(0,0,x,l),w.fillStyle="#ffffff",w.fillRect(0,l*0.34,x,l*0.34),w.fillStyle="#6a6a6a",w.fillRect(0,l*0.33,x,l*0.02),w.fillRect(0,l*0.67,x,l*0.02)},64,64),f=new i0({map:Z0,roughness:0.62}),o=["#c8402f","#e3ae55","#f3eee3","#2f6fa8","#3f8a5a","#e07a2e","#d65a7a","#f1d24a","#6fb7c9","#8a3b3b","#ffffff","#1f5f9e"],s=[],p=[],X0=(w,x,l,e,t,D0)=>{let L0=w;while(L0<x){let N0=0.07+H()*0.12,g0=0.12+H()*0.17,c0=Math.min(t,0.1+H()*0.12),kJ=H()<0.35,j0=new h0(o[Math.floor(H()*o.length)]).multiplyScalar(0.7+H()*0.22);if(L0+N0>x)break;let MJ=D0==="x"?Y(L0+N0/2,l+g0/2,e):Y(e,l+g0/2,L0+N0/2);(kJ?p:s).push({pos:MJ,s:kJ?Y(N0*0.85,g0*0.8,N0*0.85):D0==="x"?Y(N0,g0,c0):Y(c0,g0,N0),col:j0}),L0+=N0+0.012}};for(let w of[1.6125,2.5725])X0(-3.4,2.2,w,-4.8,0.3,"x");for(let w of[0.57,1.02,1.47,1.92,2.37,2.82])X0(-4.9,-2.8,w,-3.55,0.28,"z");for(let[w,x]of[[new cJ(1,1,1),s],[new AJ(0.5,0.5,1,10),p]]){let l=new T9(w,f,x.length),e=new TJ;x.forEach((t,D0)=>{e.position.copy(t.pos),e.scale.copy(t.s),e.rotation.set(0,(H()-0.5)*0.12,0),e.updateMatrix(),l.setMatrixAt(D0,e.matrix),l.setColorAt(D0,t.col)}),l.frustumCulled=!1,J.add(l)}{let l=[[0.05,0.47],[0.53,0.95]],e=(N0,g0)=>{if(N0.fillStyle=g0?"#000":"#5b3b24",N0.fillRect(0,0,1024,368),!g0){for(let c0=0;c0<500;c0++)N0.fillStyle=c0%2?"rgba(150,100,60,.25)":"rgba(30,18,10,.25)",N0.fillRect(Math.random()*1024,Math.random()*368,20+Math.random()*80,1+Math.random()*2);N0.fillStyle="#3a2616",N0.fillRect(0,323.84,1024,44.16)}for(let[c0,kJ]of l){let j0=c0*1024,MJ=kJ*1024;N0.fillStyle=g0?"#6e6a60":"#d9d3c1",N0.fillRect(j0,44.16,MJ-j0,257.6);for(let y=0;y<2;y++){let nJ=44.16+(y+0.5)*257.6/2;N0.fillStyle=g0?"#6f6a60":"#b9b3a2",N0.fillRect(j0,nJ+51.52000000000001,MJ-j0,4);let XJ=nJ+51.52000000000001;N0.globalAlpha=g0?0.7:1;for(let RJ=j0+10;RJ<MJ-60;){let z=Math.random()<0.3,B=o[Math.floor(Math.random()*o.length)];if(z){let j=18+Math.random()*6;N0.fillStyle=g0?"#9a9a9a":"rgba(235,240,240,.9)",N0.fillRect(RJ,XJ-j*2.4,j*2,j*2.4),N0.fillStyle=B;for(let i=0;i<7;i++)N0.beginPath(),N0.arc(RJ+5+Math.random()*(j*2-10),XJ-6-Math.random()*j*1.8,5,0,Math.PI*2),N0.fill();N0.fillStyle="#c8402f",N0.fillRect(RJ-2,XJ-j*2.4-8,j*2+4,9),RJ+=j*2+8}else{let j=46+Math.random()*34,i=257.6*(0.2+Math.random()*0.1);N0.fillStyle=B,N0.beginPath(),N0.moveTo(RJ,XJ),N0.lineTo(RJ+3,XJ-i);for(let q0=0;q0<=6;q0++)N0.lineTo(RJ+3+q0*(j-6)/6,XJ-i-(q0%2?5:0));N0.lineTo(RJ+j,XJ),N0.closePath(),N0.fill(),N0.fillStyle="rgba(255,255,255,.7)",N0.fillRect(RJ+j*0.2,XJ-i*0.62,j*0.6,i*0.22),N0.fillStyle="rgba(255,255,255,.25)",N0.fillRect(RJ+4,XJ-i+8,5,i-14),RJ+=j+5}}N0.globalAlpha=1}if(!g0)N0.fillStyle="rgba(255,255,255,.22)",N0.beginPath(),N0.moveTo(j0+20,44.16),N0.lineTo(j0+70,44.16),N0.lineTo(j0+20,301.76),N0.lineTo(j0-10+20,301.76),N0.fill(),N0.strokeStyle="#3a2616",N0.lineWidth=10,N0.strokeRect(j0,44.16,MJ-j0,257.6)}},t=(N0)=>Q((g0)=>e(g0,N0),1024,368),D0=new i0({map:t(!1),emissive:"#fff4de",emissiveMap:t(!0),emissiveIntensity:0.2,roughness:0.55}),L0=new I0(new zJ(3.9,1.4),D0);L0.position.set(0,0.7,-3.924),J.add(L0)}let a=Q((w,x,l)=>{let t=l/7;w.fillStyle="#8a7a5a",w.fillRect(x/2-2,0,4,l);for(let D0=0;D0<7;D0++){let L0=D0*t+4;w.fillStyle=o[(D0*5+3)%o.length],w.fillRect(6,L0,x-12,t-8),w.fillStyle="rgba(255,255,255,.3)",w.fillRect(10,L0+6,x*0.16,t-20),w.fillStyle="rgba(255,255,255,.75)",w.fillRect(x*0.3,L0+t*0.36,x*0.4,t*0.16)}},64,448),Y0=new i0({map:a,roughness:0.45,alphaTest:0.5,side:sJ});for(let w of[-1.74,-1.52,1.52,1.74])K(new zJ(0.15,0.86),Y0,[w,2.66,-3.86],[0,(H()-0.5)*0.5,0]);let F0=new I0(new zJ(0.8,1.5),new dJ({color:new h0(1.05,1.08,1.1),map:Q((w,x,l)=>{w.fillStyle="#dcecef",w.fillRect(0,0,x,l);let e=5;for(let D0=0;D0<e;D0++){let L0=l/e,N0=D0*L0;w.fillStyle="rgba(140,160,165,.9)",w.fillRect(0,N0+L0*0.88,x,5);for(let g0=0;g0<8;g0++){let c0=(x-20)/8,kJ=10+g0*c0;w.fillStyle=["#c8402f","#2c7a3f","#e3ae55","#7a3a1c","#2f6fa8","#f3eee3","#e07a2e"][(g0+D0*3)%7],w.fillRect(kJ+c0*0.15,N0+L0*0.3,c0*0.7,L0*0.56),w.fillRect(kJ+c0*0.36,N0+L0*0.12,c0*0.28,L0*0.2)}}let t=w.createLinearGradient(0,0,x,0);t.addColorStop(0,"rgba(255,255,255,.3)"),t.addColorStop(0.35,"rgba(255,255,255,0)"),w.fillStyle=t,w.fillRect(0,0,x,l),w.strokeStyle="#9aa8aa",w.lineWidth=10,w.strokeRect(0,0,x,l)},256,480)}));F0.position.set(2.95,1.12,-4.09),J.add(F0);let r0=new I0(new zJ(0.9,0.2),new dJ({map:N("Bien fría",{w:720,h:160,fondo:"#b8372b",tinta:"#f3eee3",sombra:null,px:0.62}),color:new h0(1.1,1.1,1.1)}));r0.position.set(2.95,2.17,-4.14),J.add(r0),W(2.45,0.4,-1.86,1,0.8,0.6,"#e7ebe8"),W(2.45,0.83,-1.86,1.04,0.06,0.64,"#d4dad8"),W(2.45,0.12,-1.555,0.96,0.1,0.012,"#b9c0bd");{let w=new I0(new zJ(0.62,0.19),new i0({map:N("HIELO",{w:640,h:196,fondo:null,tinta:"#1f5f9e",sombra:"#c8402f",px:0.7}),transparent:!0,roughness:0.8}));w.position.set(2.45,0.55,-1.553),J.add(w)}{let w=$("#2d63a8",0.5),x=new i0({color:"#8cc0e6",roughness:0.12,transparent:!0,opacity:0.84});for(let t=0;t<2;t++)for(let D0=0;D0<3;D0++){let L0=3.15+t*0.4,N0=0.21+D0*0.4;K(new AJ(0.155,0.155,0.4,16),x,[L0,N0,-2],[Math.PI/2,0,0]),K(new AJ(0.05,0.05,0.1,10),x,[L0,N0,-2.25],[Math.PI/2,0,0])}for(let t of[0,0.4,0.8,1.2])W(3.35,t+0.012,-2,0.84,0.024,0.46,w);for(let t of[2.94,3.35,3.7600000000000002])W(t,0.61,-2,0.03,1.22,0.46,w)}let T0=(w,x,l,e,t)=>{let D0=$(t,0.5),L0=(N0,g0,c0,kJ,j0=0)=>{N0.rotateX(j0);let MJ=Y(g0,c0,kJ).applyAxisAngle(Y(0,1,0),e);K(N0,D0,[w+MJ.x,x+MJ.y,l+MJ.z],[0,e,0])};L0(new _8(0.46,0.035,0.43,2,0.015),0,0.43,0),L0(new _8(0.44,0.42,0.03,2,0.012),0,0.71,-0.22,-0.16);for(let N0 of[-0.2,0.2])L0(new AJ(0.018,0.024,0.43,6),N0,0.215,0.17,0.12),L0(new AJ(0.018,0.024,0.45,6),N0,0.22,-0.19,-0.14),L0(new cJ(0.03,0.18,0.3),N0*1.1,0.54,-0.02)};for(let w=0;w<4;w++)T0(-3.42,w*0.075,-1.32-w*0.012,0.3,"#ecece6");T0(3.55,0,0.55,-1.9,"#ecece6");{let e=(g0,c0,kJ,j0,MJ,_J=0,bJ=0)=>{g0.rotateX(_J),g0.rotateZ(bJ);let y=Y(kJ,j0,MJ).applyAxisAngle(Y(0,1,0),0.3);K(g0,c0,[-3.25+y.x,y.y,2.85+y.z],[0,0.3,0])},t=$("#171b1b",0.8),D0=$("#9aa3a0",0.35,0.6),L0=$("#a8382c",0.45,0.1),N0=$("#1e2222",0.7);for(let g0 of[-0.52,0.5])e(new S9(0.26,0.055,8,18),t,g0,0.3,0),e(new AJ(0.09,0.09,0.08,10),D0,g0,0.3,0,Math.PI/2);e(new _8(0.6,0.22,0.24,2,0.05),L0,-0.02,0.53,0,0,-0.08),e(new _8(0.55,0.08,0.26,2,0.03),N0,-0.28,0.68,0),e(new _8(0.28,0.34,0.2,2,0.05),L0,0.37,0.64,0,0,-0.35),e(new AJ(0.018,0.018,0.62,6),D0,0.44,0.92,0,Math.PI/2),e(new AJ(0.02,0.02,0.62,6),D0,0.47,0.6,0,0,0.35),e(new AJ(0.03,0.035,0.45,8),D0,-0.35,0.3,0.13,0,Math.PI/2+0.1),e(new _8(0.3,0.03,0.22,1,0.01),D0,-0.6,0.73,0)}for(let w=-9;w<4.4;w+=2)W(w+0.5,-0.074,3.45,1,0.152,0.202,"#d6b24e");W(8.3,-0.2,-4.575,7.4,0.1,15.85,"#2b3133"),W(4.6,-0.075,-4.575,0.2,0.15,15.85,"#a8a391"),W(12.3,-0.07,-4.575,1.2,0.16,15.85,"#8a8578");for(let w=-11;w<3;w+=1.8)W(8.3,-0.146,w,0.06,0.008,0.7,"#b9ad83");{let w=new i0({color:"#ffd08a",emissive:"#ffb35a",emissiveIntensity:2.2}),x=$("#2a3436",0.8),l=["#d8a25a","#8fb8a8","#e0d2b0","#c9897d","#b9c47a"],e=-12,t=0;while(e<2.4){let D0=3+H()*1.6,L0=3+H()*2.6,N0=l[t++%l.length];W(14.4,L0/2,e+D0/2,3,L0,D0,N0),W(14.4,L0+0.08,e+D0/2,3.1,0.16,D0+0.1,"#ddd4bf");let g0=Math.max(1,Math.floor(D0/1.5));for(let c0=0;c0<g0;c0++){let kJ=e+(c0+0.5)*D0/g0;if(K(new zJ(0.75,0.95),H()<0.4?w:x,[12.885,1.55,kJ],[0,-Math.PI/2,0]),L0>4.2)K(new zJ(0.7,0.8),H()<0.35?w:x,[12.885,L0-1.1,kJ],[0,-Math.PI/2,0])}e+=D0+0.15}}{let w=new i0({roughness:0.6,metalness:0.3,map:Q((l,e,t)=>{l.fillStyle="#8f9a94",l.fillRect(0,0,e,t);for(let D0=0;D0<t;D0+=8)l.fillStyle="rgba(40,45,44,.35)",l.fillRect(0,D0,e,2),l.fillStyle="rgba(230,235,230,.18)",l.fillRect(0,D0+3,e,2);for(let D0=0;D0<40;D0++)l.fillStyle="rgba(120,70,40,.18)",l.fillRect(H()*e,H()*t,4+H()*20,2+H()*10)},256,256)});K(new zJ(2.3,2.1),w,[-7,1.05,-1.365]),W(-7,2.2,-1.33,2.45,0.2,0.1,"#6d7571");let x=new I0(new zJ(1.7,0.42),new i0({map:N("Banca La Suerte",{w:1024,h:252,fondo:"#2f7a4d",tinta:"#f3eee3",sombra:"#1b2c22",borde:"#e3ae55",px:0.52}),roughness:0.85,emissive:"#ffffff",emissiveIntensity:0.08}));x.material.emissiveMap=x.material.map,x.position.set(-10.5,2.72,-1.36),J.add(x)}let x0=Y(4.3,0,3);Z(x0.x,3.9,x0.z,0.11,0.16,7.8,"#8e8a80",10),W(x0.x,7.25,x0.z,0.1,0.1,1.7,"#5c574c"),Z(x0.x+0.28,6.3,x0.z,0.2,0.2,0.62,"#6d7470",12);let e0=(w,x,l,e="#141819",t=0.011)=>{let D0=w.clone().lerp(x,0.5);D0.y-=l*2,K(new i8(new q9(w,D0,x),22,t,4,!1),$(e),[0,0,0])};for(let w of[-0.6,0,0.6])e0(Y(x0.x,7.3,x0.z+w),Y(6,6.6,9.2+w*0.4),0.25);for(let w of[-0.5,0.5])e0(Y(x0.x,7.3,x0.z+w),Y(-5,4.2,-1+w*0.6),0.55);e0(Y(x0.x,6.4,x0.z),Y(3.95,5.7,-2.72),0.35),e0(Y(x0.x,6.2,x0.z),Y(3.95,5.5,-2.72),0.5,"#1d2121",0.008),e0(Y(x0.x,5.9,x0.z),Y(4.35,5.4,-9),0.4,"#1d2121",0.009),e0(Y(x0.x,5.7,x0.z),Y(4.35,5.2,-9),0.6,"#20241f",0.007);{let w=new c7(Array.from({length:14},(x,l)=>{let e=l/13*Math.PI*4;return Y(x0.x+0.16+Math.cos(e)*0.14,5.2-l*0.018+Math.sin(e)*0.14,x0.z+Math.sin(e)*0.05)}));K(new i8(w,60,0.008,4,!1),$("#141819"),[0,0,0])}let Q0=0;return{update(w){if(w>Q0)Q0=w+0.25+Math.random()*1.4,S.emissiveIntensity=0.12+Math.random()*0.45,S.emissive.setHSL(0.58+Math.random()*0.08,0.5,0.55+Math.random()*0.2)}}}var sO=["cafe","morir","presidente","presidente"];function iO(){let J=document.createElement("canvas");J.width=256,J.height=128;let Q=J.getContext("2d");Q.fillStyle="#f1ece0",Q.fillRect(0,0,256,128),Q.fillStyle="#b3262d",Q.fillRect(0,10,256,14),Q.fillRect(0,104,256,14),Q.fillStyle="#1f5a36",Q.beginPath(),Q.ellipse(128,64,54,28,0,0,Math.PI*2),Q.fill(),Q.fillStyle="#f1ece0",Q.beginPath(),Q.ellipse(128,64,46,21,0,0,Math.PI*2),Q.fill(),Q.fillStyle="#b3262d",Q.fillRect(92,58,72,12);let $=new F9(J);return $.colorSpace=Y8,$}function oO(){let J=new fJ,Q=(X,U)=>new U0(X,U),$=[Q(0,0),Q(0.034,0),Q(0.037,0.006),Q(0.037,0.165),Q(0.034,0.188),Q(0.022,0.222),Q(0.0145,0.252),Q(0.0138,0.274),Q(0.0158,0.279),Q(0.0158,0.29),Q(0.0112,0.29),Q(0.0106,0.268),Q(0.0112,0.24)],W=new i0({color:"#2d5a26",roughness:0.18,metalness:0.05,envMapIntensity:1.4});J.add(new I0(new q7($,20),W));let Z=new I0(new q7($.slice(1,5).map((X)=>Q(X.x+0.0006,X.y)),20),new i0({color:"#e8f0e4",roughness:0.9,transparent:!0,opacity:0.22,depthWrite:!1}));J.add(Z);let K=new I0(new AJ(0.0376,0.0376,0.075,24,1,!0),new i0({map:iO(),roughness:0.6}));K.position.y=0.095,J.add(K);let H=new I0(new AJ(0.0149,0.0152,0.02,16,1,!0),new i0({color:"#b3262d",roughness:0.5}));H.position.y=0.262,J.add(H);let Y=new I0(new d9(0.0112,16),new dJ({color:"#0d160c"}));return Y.rotation.x=-Math.PI/2,Y.position.y=0.245,J.add(Y),{g:J,alto:0.11,radio:0.037,inclina:1.25,boca:0.18}}function aO(){let J=new fJ,Q=new I0(new AJ(0.034,0.029,0.14,24,1,!0),new i0({color:"#dfe9ec",roughness:0.08,transparent:!0,opacity:0.28,depthWrite:!1,side:sJ}));Q.position.y=0.07,Q.renderOrder=2,J.add(Q);let $=new I0(new AJ(0.029,0.029,0.008,24),new i0({color:"#dfe9ec",roughness:0.1,transparent:!0,opacity:0.5}));$.position.y=0.004,J.add($);let W=new I0(new AJ(0.0318,0.0285,0.112,24),new i0({color:"#f2bf86",roughness:0.45}));W.position.y=0.064,J.add(W);for(let[K,H,Y]of[[0.01,0.006,0.4],[-0.009,-0.008,1.1],[0.002,-0.012,2]]){let X=new I0(new cJ(0.016,0.013,0.016),new i0({color:"#f6f3ec",roughness:0.15,transparent:!0,opacity:0.8}));X.position.set(K,0.121,H),X.rotation.set(Y,Y*0.7,0),J.add(X)}let Z=new I0(new AJ(0.0028,0.0028,0.19,8),new i0({color:"#c8392e",roughness:0.5}));return Z.position.set(0.012,0.11,0.004),Z.rotation.z=-0.16,J.add(Z),{g:J,alto:0.06,radio:0.034,inclina:0.85,boca:0.09}}function rO(){let J=new fJ,Q=new i0({color:"#efe9da",roughness:0.22}),$=new I0(new AJ(0.045,0.04,0.008,28),Q);$.position.y=0.004,J.add($);let W=new i0({color:"#efe9da",roughness:0.22,side:sJ}),Z=new I0(new AJ(0.028,0.021,0.048,24,1,!0),W),K=new I0(new d9(0.021,20),Q);K.rotation.x=-Math.PI/2,K.position.y=0.0085,J.add(K),Z.position.y=0.032,J.add(Z);let H=new I0(new d9(0.0262,24),new i0({color:"#2a160c",roughness:0.15}));H.rotation.x=-Math.PI/2,H.position.y=0.049,J.add(H);let Y=new I0(new S9(0.012,0.0035,6,12,Math.PI*1.3),Q);return Y.position.set(0.03,0.034,0),Y.rotation.z=-Math.PI*0.65,J.add(Y),J.remove($),{g:J,alto:0.03,radio:0.028,inclina:0.9,boca:0.03,plato:$}}function P5(J){let Q=[];for(let $=0;$<4;$++){let W=sO[$],Z=W==="presidente"?oO():W==="morir"?aO():rO(),[K,H,Y]=O9[$],X=R0.tableWidth/2-0.055,U=R0.tableCenterY+R0.tableThickness/2,N=new T(-X,0,R0.seatDistance-X).applyAxisAngle(new T(0,1,0),Y).add(new T(K,0,H));if(N.y=U,Z.g.traverse((E)=>{if(E.isMesh)E.castShadow=!0,E.receiveShadow=!0}),Z.plato)N.y+=0.008;if(Z.g.position.copy(N),J.add(Z.g),Z.plato)Z.plato.position.copy(N),Z.plato.position.y=U+0.004,Z.plato.traverse((E)=>{if(E.isMesh)E.receiveShadow=!0}),J.add(Z.plato);Q.push({group:Z.g,home:N,index:$,tipo:W,alto:Z.alto,radio:Z.radio,inclina:Z.inclina,boca:Z.boca})}return Q}var WQ={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class J9{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var tO=new o9(-1,1,1,-1,0,1);class I5 extends lJ{constructor(){super();this.setAttribute("position",new qJ([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qJ([0,2,0,0,2,0],2))}}var eO=new I5;class $6{constructor(J){this._mesh=new I0(eO,J)}dispose(){this._mesh.geometry.dispose()}render(J){J.render(this._mesh,tO)}get material(){return this._mesh.material}set material(J){this._mesh.material=J}}class q$ extends J9{constructor(J,Q="tDiffuse"){super();if(this.textureID=Q,this.uniforms=null,this.material=null,J instanceof rJ)this.uniforms=J.uniforms,this.material=J;else if(J)this.uniforms=c9.clone(J.uniforms),this.material=new rJ({name:J.name!==void 0?J.name:"unspecified",defines:Object.assign({},J.defines),uniforms:this.uniforms,vertexShader:J.vertexShader,fragmentShader:J.fragmentShader});this._fsQuad=new $6(this.material)}render(J,Q,$){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=$.texture;if(this._fsQuad.material=this.material,this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget(Q),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class tW extends J9{constructor(J,Q){super();this.scene=J,this.camera=Q,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(J,Q,$){let W=J.getContext(),Z=J.state;Z.buffers.color.setMask(!1),Z.buffers.depth.setMask(!1),Z.buffers.color.setLocked(!0),Z.buffers.depth.setLocked(!0);let K,H;if(this.inverse)K=0,H=1;else K=1,H=0;if(Z.buffers.stencil.setTest(!0),Z.buffers.stencil.setOp(W.REPLACE,W.REPLACE,W.REPLACE),Z.buffers.stencil.setFunc(W.ALWAYS,K,4294967295),Z.buffers.stencil.setClear(H),Z.buffers.stencil.setLocked(!0),J.setRenderTarget($),this.clear)J.clear();if(J.render(this.scene,this.camera),J.setRenderTarget(Q),this.clear)J.clear();J.render(this.scene,this.camera),Z.buffers.color.setLocked(!1),Z.buffers.depth.setLocked(!1),Z.buffers.color.setMask(!0),Z.buffers.depth.setMask(!0),Z.buffers.stencil.setLocked(!1),Z.buffers.stencil.setFunc(W.EQUAL,1,4294967295),Z.buffers.stencil.setOp(W.KEEP,W.KEEP,W.KEEP),Z.buffers.stencil.setLocked(!0)}}class jH extends J9{constructor(){super();this.needsSwap=!1}render(J){J.state.buffers.stencil.setLocked(!1),J.state.buffers.stencil.setTest(!1)}}class yH{constructor(J,Q){if(this.renderer=J,this._pixelRatio=J.getPixelRatio(),Q===void 0){let $=J.getSize(new U0);this._width=$.width,this._height=$.height,Q=new J8(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:q8}),Q.texture.name="EffectComposer.rt1"}else this._width=Q.width,this._height=Q.height;this.renderTarget1=Q,this.renderTarget2=Q.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new q$(WQ),this.copyPass.material.blending=n8,this.timer=new vW}swapBuffers(){let J=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=J}addPass(J){this.passes.push(J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(J,Q){this.passes.splice(Q,0,J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(J){let Q=this.passes.indexOf(J);if(Q!==-1)this.passes.splice(Q,1)}isLastEnabledPass(J){for(let Q=J+1;Q<this.passes.length;Q++)if(this.passes[Q].enabled)return!1;return!0}render(J){if(this.timer.update(),J===void 0)J=this.timer.getDelta();let Q=this.renderer.getRenderTarget(),$=!1;for(let W=0,Z=this.passes.length;W<Z;W++){let K=this.passes[W];if(K.enabled===!1)continue;if(K.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(W),K.render(this.renderer,this.writeBuffer,this.readBuffer,J,$),K.needsSwap){if($){let H=this.renderer.getContext(),Y=this.renderer.state.buffers.stencil;Y.setFunc(H.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,J),Y.setFunc(H.EQUAL,1,4294967295)}this.swapBuffers()}if(tW!==void 0){if(K instanceof tW)$=!0;else if(K instanceof jH)$=!1}}this.renderer.setRenderTarget(Q)}reset(J){if(J===void 0){let Q=this.renderer.getSize(new U0);this._pixelRatio=this.renderer.getPixelRatio(),this._width=Q.width,this._height=Q.height,J=this.renderTarget1.clone(),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=J,this.renderTarget2=J.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(J,Q){this._width=J,this._height=Q;let $=this._width*this._pixelRatio,W=this._height*this._pixelRatio;this.renderTarget1.setSize($,W),this.renderTarget2.setSize($,W);for(let Z=0;Z<this.passes.length;Z++)this.passes[Z].setSize($,W)}setPixelRatio(J){this._pixelRatio=J,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class vH extends J9{constructor(J,Q,$=null,W=null,Z=null){super();this.scene=J,this.camera=Q,this.overrideMaterial=$,this.clearColor=W,this.clearAlpha=Z,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new h0}render(J,Q,$){let W=J.autoClear;J.autoClear=!1;let Z,K;if(this.overrideMaterial!==null)K=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)J.getClearColor(this._oldClearColor),J.setClearColor(this.clearColor,J.getClearAlpha());if(this.clearAlpha!==null)Z=J.getClearAlpha(),J.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)J.clearDepth();if(J.setRenderTarget(this.renderToScreen?null:$),this.clear===!0)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);if(J.render(this.scene,this.camera),this.clearColor!==null)J.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)J.setClearAlpha(Z);if(this.overrideMaterial!==null)this.scene.overrideMaterial=K;J.autoClear=W}}var z5={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new h0(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class W6 extends J9{constructor(J,Q=1,$,W){super();this.strength=Q,this.radius=$,this.threshold=W,this.resolution=J!==void 0?new U0(J.x,J.y):new U0(256,256),this.clearColor=new h0(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let Z=Math.round(this.resolution.x/2),K=Math.round(this.resolution.y/2);this.renderTargetBright=new J8(Z,K,{type:q8,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let U=0;U<this.nMips;U++){let N=new J8(Z,K,{type:q8,depthBuffer:!1});N.texture.name="UnrealBloomPass.h"+U,N.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(N);let E=new J8(Z,K,{type:q8,depthBuffer:!1});E.texture.name="UnrealBloomPass.v"+U,E.texture.generateMipmaps=!1,this.renderTargetsVertical.push(E),Z=Math.round(Z/2),K=Math.round(K/2)}let H=z5;this.highPassUniforms=c9.clone(H.uniforms),this.highPassUniforms.luminosityThreshold.value=W,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new rJ({uniforms:this.highPassUniforms,vertexShader:H.vertexShader,fragmentShader:H.fragmentShader}),this.separableBlurMaterials=[];let Y=[6,10,14,18,22];Z=Math.round(this.resolution.x/2),K=Math.round(this.resolution.y/2);for(let U=0;U<this.nMips;U++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(Y[U])),this.separableBlurMaterials[U].uniforms.invSize.value=new U0(1/Z,1/K),Z=Math.round(Z/2),K=Math.round(K/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=Q,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let X=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=X,this.bloomTintColors=[new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1),new T(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=c9.clone(WQ.uniforms),this.blendMaterial=new rJ({uniforms:this.copyUniforms,vertexShader:WQ.vertexShader,fragmentShader:WQ.fragmentShader,premultipliedAlpha:!0,blending:z9,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new h0,this._oldClearAlpha=1,this._basic=new dJ,this._fsQuad=new $6(null)}dispose(){for(let J=0;J<this.renderTargetsHorizontal.length;J++)this.renderTargetsHorizontal[J].dispose();for(let J=0;J<this.renderTargetsVertical.length;J++)this.renderTargetsVertical[J].dispose();this.renderTargetBright.dispose();for(let J=0;J<this.separableBlurMaterials.length;J++)this.separableBlurMaterials[J].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(J,Q){let $=Math.round(J/2),W=Math.round(Q/2);this.renderTargetBright.setSize($,W);for(let Z=0;Z<this.nMips;Z++)this.renderTargetsHorizontal[Z].setSize($,W),this.renderTargetsVertical[Z].setSize($,W),this.separableBlurMaterials[Z].uniforms.invSize.value=new U0(1/$,1/W),$=Math.round($/2),W=Math.round(W/2)}render(J,Q,$,W,Z){J.getClearColor(this._oldClearColor),this._oldClearAlpha=J.getClearAlpha();let K=J.autoClear;if(J.autoClear=!1,J.setClearColor(this.clearColor,0),Z)J.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=$.texture,J.setRenderTarget(null),J.clear(),this._fsQuad.render(J);this.highPassUniforms.tDiffuse.value=$.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,J.setRenderTarget(this.renderTargetBright),J.clear(),this._fsQuad.render(J);let H=this.renderTargetBright;for(let Y=0;Y<this.nMips;Y++)this._fsQuad.material=this.separableBlurMaterials[Y],this.separableBlurMaterials[Y].uniforms.colorTexture.value=H.texture,this.separableBlurMaterials[Y].uniforms.direction.value=W6.BlurDirectionX,J.setRenderTarget(this.renderTargetsHorizontal[Y]),J.clear(),this._fsQuad.render(J),this.separableBlurMaterials[Y].uniforms.colorTexture.value=this.renderTargetsHorizontal[Y].texture,this.separableBlurMaterials[Y].uniforms.direction.value=W6.BlurDirectionY,J.setRenderTarget(this.renderTargetsVertical[Y]),J.clear(),this._fsQuad.render(J),H=this.renderTargetsVertical[Y];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,J.setRenderTarget(this.renderTargetsHorizontal[0]),J.clear(),this._fsQuad.render(J),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,Z)J.state.buffers.stencil.setTest(!0);if(this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else J.setRenderTarget($),this._fsQuad.render(J);J.setClearColor(this._oldClearColor,this._oldClearAlpha),J.autoClear=K}_getSeparableBlurMaterial(J){let Q=[],$=J/3;for(let K=0;K<J;K++)Q.push(0.39894*Math.exp(-0.5*K*K/($*$))/$);let W=[],Z=[];for(let K=1;K<J;K+=2){let H=Q[K],Y=K+1<J?Q[K+1]:0,X=H+Y;W.push((K*H+(K+1)*Y)/X),Z.push(X)}return new rJ({defines:{KERNEL_PAIRS:W.length},uniforms:{colorTexture:{value:null},invSize:{value:new U0(0.5,0.5)},direction:{value:new U0(0.5,0.5)},centerWeight:{value:Q[0]},gaussianOffsets:{value:W},gaussianWeights:{value:Z}},vertexShader:`

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

				}`})}_getCompositeMaterial(J){return new rJ({defines:{NUM_MIPS:J},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}W6.BlurDirectionX=new U0(1,0);W6.BlurDirectionY=new U0(0,1);var O$={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class fH extends J9{constructor(){super();this.isOutputPass=!0,this.uniforms=c9.clone(O$.uniforms),this.material=new rQ({name:O$.name,uniforms:this.uniforms,vertexShader:O$.vertexShader,fragmentShader:O$.fragmentShader}),this._fsQuad=new $6(this.material),this._outputColorSpace=null,this._toneMapping=null}render(J,Q,$){if(this.uniforms.tDiffuse.value=$.texture,this.uniforms.toneMappingExposure.value=J.toneMappingExposure,this._outputColorSpace!==J.outputColorSpace||this._toneMapping!==J.toneMapping){if(this._outputColorSpace=J.outputColorSpace,this._toneMapping=J.toneMapping,this.material.defines={},GJ.getTransfer(this._outputColorSpace)===pJ)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===wQ)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===jQ)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===yQ)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===v7)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===fQ)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===bQ)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===vQ)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget(Q),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var C8=(()=>{let J=7;return()=>{return J=Math.imul(J,1664525)+1013904223>>>0,J/4294967296}})();function bH(J,Q=256,$=256){let W=document.createElement("canvas");W.width=Q,W.height=$,J(W.getContext("2d"),Q,$);let Z=new F9(W);return Z.colorSpace=Y8,Z}function A5(J="255,214,150"){return bH((Q,$,W)=>{let Z=Q.createRadialGradient($/2,W/2,0,$/2,W/2,$/2);Z.addColorStop(0,`rgba(${J},1)`),Z.addColorStop(0.18,`rgba(${J},.55)`),Z.addColorStop(0.5,`rgba(${J},.12)`),Z.addColorStop(1,`rgba(${J},0)`),Q.fillStyle=Z,Q.fillRect(0,0,$,W)})}var _5=new T(-0.55,-0.035,-0.83).normalize();function JR(J){let Q=new fJ,$=new I0(new k8(80,32,16),new rJ({side:L8,depthWrite:!1,fog:!1,uniforms:{uSol:{value:_5}},vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP;uniform vec3 uSol;
   float azar(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
   float ruido(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(azar(i),azar(i+vec2(1,0)),f.x),mix(azar(i+vec2(0,1)),azar(i+vec2(1,1)),f.x),f.y);}
   float capas(vec2 p){float v=0.,a=.55;for(int k=0;k<4;k++){v+=a*ruido(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return v;}
   void main(){vec3 d=normalize(vP);float h=d.y;
    vec2 az=normalize(d.xz+vec2(1e-4)),azSol=normalize(uSol.xz);float lado=dot(az,azSol)*.5+.5,haciaSol=pow(lado,2.6);
    vec3 zen=vec3(.028,.042,.115),alto=vec3(.11,.11,.27),horSol=vec3(1.,.5,.22),horOp=vec3(.36,.30,.44);
    vec3 hor=mix(horOp,horSol,haciaSol);
    vec3 c=mix(hor,alto,smoothstep(0.,.2,h));c=mix(c,zen,smoothstep(.2,.8,h));
    float g=max(dot(d,uSol),0.);c+=vec3(1.,.42,.16)*(pow(g,6.)*.55+pow(g,40.)*.6)*(1.-smoothstep(-.02,.35,h));
    c+=vec3(.34,.16,.24)*(1.-haciaSol)*exp(-pow((h-.1)/.06,2.))*.55;
    // Nubes en tiras, bajas: encendidas por debajo del lado del sol, lilas del otro.
    vec2 q=d.xz/(max(h,0.)+.09)*.32;float n=capas(q*vec2(1.,3.4)+vec2(3.1,0.));
    float nube=smoothstep(.56,.8,n)*smoothstep(.015,.07,h)*(1.-smoothstep(.2,.42,h));
    vec3 cn=mix(vec3(.27,.2,.3),vec3(1.,.52,.34),haciaSol*(1.-smoothstep(.05,.3,h)));
    c=mix(c,cn,nube*.75);
    if(h<0.)c=hor*.5;
    gl_FragColor=vec4(c,1.);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
   }`}));$.renderOrder=-10,Q.add($);let W=220,Z=new Float32Array(W*3),K=new Float32Array(W*3);for(let U=0;U<W;U++){let N=C8(),E=C8()*Math.PI*2,G=0.45+N*0.55,F=Math.sqrt(1-G*G),R=0.25+0.55*C8()*G;Z.set([Math.cos(E)*F*75,G*75,Math.sin(E)*F*75],U*3),K.set([R*0.85,R*0.9,R],U*3)}let H=new lJ;H.setAttribute("position",new tJ(Z,3)),H.setAttribute("color",new tJ(K,3)),Q.add(new c6(H,new u7({size:1.3,sizeAttenuation:!1,vertexColors:!0,fog:!1,depthWrite:!1,transparent:!0,opacity:0.45})));let Y=new I0(new d9(2.1,40),new dJ({color:"#f6e7cc",fog:!1}));Y.position.set(26,11,58),Y.lookAt(0,1,0),Q.add(Y);let X=new u6(new m7({map:A5("255,226,200"),fog:!1,transparent:!0,opacity:0.28,depthWrite:!1,blending:z9}));return X.scale.setScalar(13),X.position.copy(Y.position),Q.add(X),J.add(Q),Q}function QR(J){let Q=new Map,$=(E,G=0,F=0)=>{let R=E+G+F;if(!Q.has(R))Q.set(R,{m:new i0({color:G?E:new h0(E).multiplyScalar(0.85),roughness:0.9,emissive:G||"#000",emissiveIntensity:F}),g:[]});return Q.get(R)},W=(E,G,F,R,D,O=0)=>{E.rotateY(O),E.translate(F,R,D),G.g.push(E)},Z=["#c98a64","#d8b46a","#6fa9a0","#c48d95","#a3b777","#dca16a","#86a3bf","#e2d3b0"],K=-20;while(K<20){let E=3.4+C8()*2.6,G=3+C8()*2.8,F=10.5+C8()*0.8,R=Z[Math.floor(C8()*Z.length)];W(new cJ(E,G,2.4),$(R),K+E/2,G/2,F+1.2),W(new cJ(E+0.12,0.18,2.6),$("#d9d2bf"),K+E/2,G+0.09,F+1.2);let D=Math.max(1,Math.floor(E/1.5));for(let O=0;O<D;O++){let q=K+(O+0.5)*E/D,V=C8()<0.4,M=C8()<0.2,L=V?$(M?"#9fc3ff":"#ffd08a",M?"#6f9cff":"#ffb35a",M?1.6:2.2):$("#2a3436");if(W(new zJ(0.75,0.95),L,q,1.55,F-0.005,Math.PI),G>4.2)W(new zJ(0.7,0.8),C8()<0.35?$("#ffd08a","#ffb35a",1.5):$("#2a3436"),q,G-1.1,F-0.005,Math.PI);W(new cJ(0.9,0.06,0.12),$("#2c3432"),q,2.08,F-0.06)}for(let O=0;O<Math.floor(E/0.22);O++)W(new cJ(0.018,0.9,0.018),$("#1b2224"),K+0.11+O*0.22,0.45,F-0.55);W(new cJ(E,0.04,0.04),$("#1b2224"),K+E/2,0.9,F-0.55),K+=E+0.15}W(new cJ(44,0.16,1.8),$("#8a8578"),0,0.08,9.6);let H=[-14,-4,6,16];for(let E of H)W(new AJ(0.09,0.12,7,8),$("#6b6457"),E,3.5,9.2),W(new cJ(1.6,0.08,0.08),$("#4f4a40"),E,6.6,9.2);for(let E=0;E<H.length-1;E++)for(let G of[0,-0.25,0.3]){let F=new T(H[E],6.6+G,9.2),R=new T(H[E+1],6.6+G,9.2),D=F.clone().lerp(R,0.5);D.y-=0.55,W(new i8(new q9(F,D,R),16,0.012,4),$("#101517"),0,0,0)}for(let[E,G,F]of[[-9,12.8,7.5],[11,13.1,8.4],[2.5,13.4,6.4]]){let R=new c7([new T(E,0,G),new T(E+0.3,F*0.5,G),new T(E+0.8,F,G-0.2)]);W(new i8(R,12,0.16,6),$("#5d5445"),0,0,0);for(let D=0;D<9;D++){let O=D/9*Math.PI*2,q=new sQ(0.28,2.6,4,1);q.rotateZ(Math.PI/2+0.55),q.translate(1.3,0,0),q.rotateY(O),W(q,$("#34503a"),E+0.8,F,G-0.2)}}let Y=[];for(let{m:E,g:G}of Q.values()){let F=lW(G,!1);if(G.forEach((D)=>D.dispose()),!F)continue;let R=new I0(F,E);R.receiveShadow=!0,J.add(R),Y.push(R)}let X=new i9("#ffa35c",6,14,1.8);X.position.set(6,5.9,8.6),J.add(X);let U=new I0(new k8(0.14,12,8),new i0({color:"#ffcf94",emissive:"#ff9a45",emissiveIntensity:5}));U.position.copy(X.position),J.add(U);let N=new I0(new AJ(0.03,0.03,1.3,6),new i0({color:"#4f4a40"}));return N.rotation.z=Math.PI/2,N.position.set(6,6.05,8.9),J.add(N),{merged:Y,farol:X}}function $R(J,Q){let $=new fJ;$.position.copy(Q),J.add($);let W=new I0(new k8(0.038,16,12),new i0({color:"#fff4d6",emissive:"#ffd08a",emissiveIntensity:9}));W.scale.y=1.25,$.add(W);let Z=new I0(new AJ(0.018,0.02,0.05,10),new i0({color:"#2b2a26",roughness:0.6}));Z.position.y=0.065,$.add(Z);let K=new I0(new AJ(0.004,0.004,1.1,5),new i0({color:"#15181a"}));K.position.y=0.64,$.add(K);let H=new u6(new m7({map:A5(),transparent:!0,opacity:0.55,depthWrite:!1,blending:z9}));H.scale.setScalar(0.75),$.add(H);let Y=[],X=new m7({color:"#3b3026",transparent:!0,opacity:0.85,depthWrite:!1});for(let U=0;U<6;U++){let N=new u6(X);N.scale.setScalar(0.012+C8()*0.008),$.add(N),Y.push({s:N,r:0.07+C8()*0.12,w:2+C8()*4,f:C8()*6,y:0.05+C8()*0.08,k:1.3+C8()})}return{g:$,halo:H,polillas:Y}}function WR(){let J=new l6;J.add(new I0(new k8(10,24,12),new rJ({side:L8,uniforms:{uSol:{value:_5}},vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;uniform vec3 uSol;void main(){float l=dot(normalize(vP.xz+vec2(1e-4)),normalize(uSol.xz))*.5+.5;vec3 hor=mix(vec3(.3,.25,.36),vec3(.85,.45,.25),pow(l,2.5));gl_FragColor=vec4(mix(hor,vec3(.05,.07,.17),smoothstep(-.05,.7,vP.y))*mix(.35,1.,smoothstep(-.3,0.,vP.y)),1.);}"})));let Q=($,W,Z,K,H,Y)=>{let X=new I0(new zJ(Z,K),new dJ({color:new h0($).multiplyScalar(W),side:sJ}));X.position.set(...H),X.lookAt(...Y),J.add(X)};return Q("#ffcf94",6,1.2,1.2,[0,6,0],[0,0,0]),Q("#dff3ea",2,5,2,[0,2.5,-8],[0,1,0]),J}function T5({scene:J,renderer:Q,camera:$,controls:W,software:Z,bulbLight:K}){function H(){let s=new H$(Q),p=WR(),X0=s.fromScene(p,0.02);J.environment?.dispose?.(),J.environment=X0.texture,J.environmentIntensity=0.75,s.dispose(),p.traverse((a)=>{a.geometry?.dispose(),a.material?.dispose()})}H(),J.background=new h0("#2a2d4a"),J.fog=new l7("#5a5670",0.017);let Y=JR(J),X=QR(J),U=new T(0,R0.surfaceY+1.3,0),N=$R(J,U),E=bH((s,p,X0)=>{let a=s.createRadialGradient(p/2,X0*0.62,0,p/2,X0*0.62,p/2);a.addColorStop(0,"rgba(255,196,110,.95)"),a.addColorStop(0.45,"rgba(255,170,80,.35)"),a.addColorStop(1,"rgba(255,150,60,0)"),s.fillStyle=a,s.fillRect(0,0,p,X0)},256,128),G=new I0(new zJ(0.62,0.26),new dJ({map:E,transparent:!0,opacity:0,depthWrite:!1,blending:z9,toneMapped:!1}));G.rotation.x=-Math.PI/2,G.position.y=R0.surfaceY+0.0012,G.renderOrder=3,J.add(G);let F={i:-1,ang:0,alfa:0,objetivo:0,pos:new T},R=(s)=>bH((p,X0,a)=>{p.strokeStyle=`rgba(${s},1)`,p.lineWidth=X0*0.09,p.beginPath(),p.arc(X0/2,a/2,X0*0.36,0,Math.PI*2),p.stroke();let Y0=p.createRadialGradient(X0/2,a/2,0,X0/2,a/2,X0/2);Y0.addColorStop(0,`rgba(${s},.5)`),Y0.addColorStop(1,`rgba(${s},0)`),p.fillStyle=Y0,p.fillRect(0,0,X0,a)},128,128),D=["227,174,85","111,183,201"].map((s)=>{let p=new I0(new zJ(0.036,0.036),new dJ({map:R(s),transparent:!0,opacity:0,depthWrite:!1,blending:z9,toneMapped:!1}));return p.rotation.x=-Math.PI/2,p.position.y=R0.surfaceY+0.0015,p.renderOrder=3,J.add(p),p}),O=null,q=$.clone(),V=new T,M=new T,L=null,P=null,I=null,S=!1;function k(){if(L)return;let s=Q.getDrawingBufferSize(new U0),p=new J8(s.x,s.y,{type:q8,samples:4});L=new yH(Q,p),L.addPass(new vH(J,q)),P=new W6(new U0(s.x/2,s.y/2),0.4,0.5,3.2),I=new q$({uniforms:{tDiffuse:{value:null},uTiempo:{value:0},uVineta:{value:0.34},uGrano:{value:0.018}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform float uTiempo,uVineta,uGrano;varying vec2 vUv;
    float azar(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+uTiempo*43.7)*43758.5453);}
    void main(){vec4 c=texture2D(tDiffuse,vUv);
     vec2 q=vUv-.5;float v=1.-uVineta*smoothstep(.25,.85,length(q*vec2(1.15,1.)));
     c.rgb*=v;
     // Sombras hacia el lila y luces cálidas: el atardecer con el bombillo ya prendido.
     float l=dot(c.rgb,vec3(.2126,.7152,.0722));
     c.rgb*=mix(vec3(.96,.95,1.06),vec3(1.04,1.,.93),smoothstep(.02,.4,l));
     c.rgb+=(azar(vUv*vec2(1920.,1080.))-.5)*uGrano*(.4+l);
     gl_FragColor=c;}`}),L.addPass(I),L.addPass(new fH)}function A(s){if(S=!Z&&s==="high",S)k();N.halo.visible=!0,X.farol.visible=s==="high"}function d(s,p){if(L)L.setPixelRatio(Q.getPixelRatio()),L.setSize(s,p);q.aspect=$.aspect,q.updateProjectionMatrix()}let b=K?K.position.clone():null,g=new T;function Z0(s,p,{reduced:X0,view:a,ends:Y0,temblor:F0=0}){if(q.copy($),!X0){if(V.set(Math.sin(s*0.11)*0.012+Math.sin(s*0.037)*0.008,Math.sin(s*0.083+1)*0.007,Math.cos(s*0.097)*0.01),F0)V.add(M.set(Math.sin(s*97)*F0,Math.sin(s*113)*F0*0.6,Math.cos(s*89)*F0));q.position.add(V),M.copy(W.target).addScaledVector(V,0.35),q.lookAt(M)}if(!X0){let T0=0.012*Math.sin(s*2.86),x0=0.008*Math.sin(s*2.3+1.3);if(g.set(Math.sin(T0)*1.1,0,Math.sin(x0)*1.1),N.g.position.copy(U).add(g),N.g.rotation.set(x0,0,-T0),K)K.position.copy(b).add(g)}if(q.updateMatrixWorld(),N.halo.material.opacity=0.5+0.05*Math.sin(s*23)*Math.sin(s*1.7)+(X0?0:0.03*Math.sin(s*3.1)),!X0)for(let T0 of N.polillas){let x0=s*T0.w+T0.f;T0.s.position.set(Math.cos(x0)*T0.r,T0.y+Math.sin(x0*T0.k)*0.05,Math.sin(x0*1.3)*T0.r)}let r0=a?.phase==="playing";if(r0&&a.turn!=null){let[T0,x0,e0]=O9[a.turn],Q0=R0.boardLimit+0.075;if(F.i!==a.turn)F.i=a.turn,F.destino=new T(T0*Q0/R0.seatDistance,0,x0*Q0/R0.seatDistance),F.angDestino=e0;F.pos.lerp(F.destino,1-Math.exp(-p*6));let w=F.angDestino-F.ang;w=Math.atan2(Math.sin(w),Math.cos(w)),F.ang+=w*(1-Math.exp(-p*6)),F.objetivo=0.55+(X0?0:0.08*Math.sin(s*2.2))}else F.objetivo=0;F.alfa+=(F.objetivo-F.alfa)*(1-Math.exp(-p*4)),G.material.opacity=F.alfa,G.visible=F.alfa>0.01,G.position.set(F.pos.x,R0.surfaceY+0.0012,F.pos.z),G.rotation.set(-Math.PI/2,0,F.ang);for(let T0=0;T0<2;T0++){let x0=D[T0],e0=r0&&Y0?Y0[T0]:null;if(!e0){x0.material.opacity=Math.max(0,x0.material.opacity-p*3),x0.visible=x0.material.opacity>0.01;continue}x0.visible=!0,x0.position.set(e0.x,R0.surfaceY+0.0015,e0.z);let Q0=X0?1:1+0.12*Math.sin(s*3.4+T0*1.3);x0.scale.setScalar(Q0),x0.material.opacity=Math.min(0.7,x0.material.opacity+p*3)}if(I)I.uniforms.uTiempo.value=s%100}function f(){if(S&&L)L.render();else Q.render(J,q)}function o(){L?.dispose()}return{vista:q,frame:Z0,render:f,resize:d,calidad:A,dispose:o,bulbPos:U,entorno:H}}var Z6=Math.PI*2,WJ=(J=0,Q=0,$=0)=>new T(J,Q,$),ZR=[[],[4],[0,8],[0,4,8],[0,2,6,8],[0,2,4,6,8],[0,2,3,5,6,8]];async function KB(J,{onProgress:Q=()=>{}}={}){let $=new l6;$.background=new h0("#2a2d4a"),$.fog=new l7("#5a5670",0.017);let W=new H8(42,innerWidth/innerHeight,0.08,90);W.position.set(3.1,2.65,4.2);let Z;try{Z=new UH({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{throw Error("This device could not start WebGL. Try a recent desktop browser.")}let K=new URLSearchParams(location.search).has("hq"),H=!K&&/SwiftShader|llvmpipe|Software/i.test((()=>{let _=Z.getContext(),u=_.getExtension("WEBGL_debug_renderer_info");return u?_.getParameter(u.UNMASKED_RENDERER_WEBGL):""})());Z.setSize(innerWidth,innerHeight),Z.setPixelRatio(H?0.65:Math.min(devicePixelRatio,1.5,1920/innerWidth)),Z.outputColorSpace=Y8,Z.toneMapping=v7,Z.toneMappingExposure=1.24,Z.shadowMap.enabled=!H,Z.shadowMap.type=y7,Z.info.autoReset=!1,J.appendChild(Z.domElement);let Y=new kH(W,Z.domElement);Y.target.set(0,0.8,-0.15),Y.enableDamping=!0,Y.dampingFactor=0.065,Y.enablePan=!1,Y.minDistance=0.8,Y.maxDistance=8,Y.minPolarAngle=0.25,Y.maxPolarAngle=Math.PI*0.48,Y.update();let X=0.5,U=new wW("#a3a8d8","#6a4e3c",X);$.add(U);let N=new i6("#ffa06a",0.55);N.position.set(-6,2.6,-9),$.add(N);let E=new s6("#ffc98a",5.2,7,Math.PI*0.32,0.6,2);E.position.set(0,R0.surfaceY+1.26,0),E.target.position.set(0,0,0);let G=new i9("#ffc07a",0.45,3.2,2);G.position.set(0,R0.surfaceY+1.2,0),$.add(G),E.castShadow=!0,E.shadow.mapSize.set(H?1024:2048,H?1024:2048),E.shadow.focus=0.52,E.shadow.bias=-0.0002,E.shadow.normalBias=0.004,E.shadow.radius=3,E.shadow.camera.near=0.2,E.shadow.camera.far=4,$.add(E,E.target);let F=new i9("#cfeee0",13,9,2);F.position.set(0,2.5,-3.5),$.add(F);{let _=new I0(new cJ(1.2,0.03,0.03),new i0({color:"#e6fff4",emissive:"#e6fff4",emissiveIntensity:4}));_.position.set(0,3.12,-3.6),$.add(_)}let R=new Map,D=new Map;function O(_,u=0.85,J0=0){let m=_+","+u+","+J0;if(!R.has(m))R.set(m,new i0({color:_,roughness:u,metalness:J0}));return R.get(m)}function q(_,u,J0,m=[0,0,0],E0=[1,1,1]){let K0=u.uuid;if(!D.has(K0))D.set(K0,{material:u,geos:[]});let C0=new QJ().compose(WJ(...J0),new IJ().setFromEuler(new X9(...m)),WJ(...E0));_.applyMatrix4(C0),D.get(K0).geos.push(_)}function V(_,u,J0,m,E0,K0,C0,p0=0){q(new cJ(m,E0,K0),typeof C0==="string"?O(C0):C0,[_,u,J0],[0,p0,0])}function M(_,u,J0,m,E0,K0,C0,p0=10,m0=[0,0,0]){q(new AJ(m,E0,K0,p0),typeof C0==="string"?O(C0):C0,[_,u,J0],m0)}function L(_,u=512,J0=512){let m=document.createElement("canvas");m.width=u,m.height=J0,_(m.getContext("2d"),u,J0);let E0=new F9(m);return E0.colorSpace=Y8,E0.anisotropy=Math.min(8,Z.capabilities.getMaxAnisotropy()),E0}let P=191,I=()=>{return P=Math.imul(P,1664525)+1013904223>>>0,P/4294967296},S=L((_,u,J0)=>{_.fillStyle="#65432b",_.fillRect(0,0,u,J0);for(let m=0;m<700;m++){_.strokeStyle=`rgba(${I()>0.5?"170,122,70":"35,22,14"},${0.08+I()*0.2})`,_.lineWidth=0.3+I()*2,_.beginPath();let E0=I()*J0;_.moveTo(0,E0);for(let K0=0;K0<u;K0+=20)_.lineTo(K0,E0+Math.sin(K0*0.013+m)*3);_.stroke()}}),k=new i0({map:S,roughness:0.65,color:"#e7bc8c"}),A=O("#4c3022",0.75),d=O("#287770"),b=O("#d2c5a2"),g=O("#3d938e"),Z0=L((_,u,J0)=>{let m=u/2;for(let m0=0;m0<2;m0++)for(let G0=0;G0<2;G0++){let b0=G0*m,UJ=m0*m;_.save(),_.beginPath(),_.rect(b0,UJ,m,m),_.clip(),_.fillStyle="#c4b99f",_.fillRect(b0,UJ,m,m);for(let[DJ,I8]of[[b0,UJ],[b0+m,UJ],[b0,UJ+m],[b0+m,UJ+m]])_.strokeStyle="#8d6450",_.lineWidth=m*0.04,_.beginPath(),_.arc(DJ,I8,m*0.42,0,Math.PI*2),_.stroke(),_.fillStyle="#4f6763",_.beginPath(),_.arc(DJ,I8,m*0.13,0,Math.PI*2),_.fill(),_.strokeStyle="#c4b99f",_.lineWidth=m*0.02,_.beginPath(),_.arc(DJ,I8,m*0.11,0,Math.PI*2),_.stroke();let JJ=b0+m/2,VJ=UJ+m/2,vJ=(DJ,I8)=>{_.fillStyle=I8,_.beginPath(),_.moveTo(JJ,VJ-DJ),_.lineTo(JJ+DJ,VJ),_.lineTo(JJ,VJ+DJ),_.lineTo(JJ-DJ,VJ),_.closePath(),_.fill()};vJ(m*0.2,"#8d6450"),vJ(m*0.13,"#c4b99f"),vJ(m*0.07,"#3a3630"),_.restore(),_.strokeStyle="#7e7563",_.lineWidth=3,_.strokeRect(b0+1.5,UJ+1.5,m-3,m-3)}for(let m0=0;m0<9000;m0++)_.fillStyle=I()>0.5?"rgba(235,228,205,.07)":"rgba(30,28,24,.09)",_.fillRect(I()*u,I()*J0,1+I()*2,1+I()*2);for(let m0=0;m0<40;m0++){let G0=_.createRadialGradient(0,0,0,0,0,1),b0=I()*u,UJ=I()*J0,JJ=20+I()*90;_.save(),_.translate(b0,UJ),_.scale(JJ,JJ),G0.addColorStop(0,"rgba(40,34,26,.10)"),G0.addColorStop(1,"rgba(40,34,26,0)"),_.fillStyle=G0,_.fillRect(-1,-1,2,2),_.restore()}},1024,1024);Z0.wrapS=Z0.wrapT=N7,Z0.repeat.set(22.88888888888889,27.77777777777778),V(-5.7,-0.1,-4.575,20.6,0.2,15.85,new i0({map:Z0,roughness:0.86,color:"#9d937f"})),V(0,-0.2,8.5,40,0.1,10.3,"#2b3133"),V(0,-0.075,3.45,40,0.15,0.2,"#a8a391");for(let _=-10;_<11;_++)V(_*1.8,-0.146,6.3,0.7,0.008,0.06,"#b9ad83");V(0,1.6,-5.1,7.5,3.4,0.2,d),V(-3.8,1.6,-3.85,0.2,3.4,2.7,d),V(3.8,1.6,-3.85,0.2,3.4,2.7,d),V(-3.48,1.1,-2.52,0.7,2.3,0.32,d),V(3.45,1.1,-2.52,0.8,2.3,0.32,d),V(0,2.95,-2.52,7.5,0.42,0.35,g),V(0,3.24,-3.7,8,0.12,4.4,"#435451");for(let _=0;_<30;_++)V(-4+_*0.276,3.15,-3.7,0.028,0.055,4.6,"#82928a");V(0,0.7,-4.24,3.9,1.4,0.62,k),V(0,1.43,-4.2,4.08,0.1,0.78,k);for(let _=0;_<3;_++)V(-0.6,1.58+_*0.48,-4.78,5.8,0.065,0.38,k),V(-0.6,1.84+_*0.48,-4.98,5.8,0.48,0.065,"#443e30");V(2.95,1.02,-4.55,1.02,2.1,0.8,"#d0ceb8"),V(2.95,1.12,-4.11,0.84,1.55,0.035,"#254c51");let f=[];for(let _=0;_<29;_++)f.push({pos:[-3.18+_*0.182,2.095,-4.69],scale:0.7+_%5*0.07,color:["#566641","#b0762a","#2e5a45","#7a3024","#c9b36a","#3b4f7a"][_*7%6]});let o=new q7([new U0(0,0),new U0(0.036,0),new U0(0.043,0.025),new U0(0.043,0.17),new U0(0.019,0.205),new U0(0.017,0.285),new U0(0.021,0.29),new U0(0.021,0.305),new U0(0,0.31)],12);f.forEach((_)=>q(o.clone(),O(_.color,0.3),_.pos,[0,0,0],[_.scale,_.scale,_.scale]));for(let[_,u,J0]of[[-3.1,-1.9,"#a8483a"]])for(let m=0;m<3;m++){V(_,0.19+m*0.34,u,0.52,0.3,0.4,J0);for(let E0=0;E0<5;E0++)V(_-0.2+E0*0.1,0.18+m*0.34,u+0.204,0.055,0.16,0.015,"#2c3025")}for(let _=0;_<5;_++){let u=-7-_*3.5;V(u,1.5,-3,3.1,3,3.2,["#d9a35c","#7fb1a4","#d8c7a2","#c98d7c","#a6bf8e"][_]),V(u,2.2,-1.38,1,0.8,0.045,"#b59961"),V(u,2.2,-1.35,0.045,0.86,0.055,"#273e37"),V(u,0.98,-1.38,0.9,1.9,0.04,"#354e49")}for(let _=0;_<4;_++)M(-5-_*5,2.3,-1,0.08,0.09,4.6,"#665443"),V(-5-_*5,4.2,-1,1.8,0.09,0.09,"#514b3d");function s(_,u,J0,m="#202d28"){let E0=new q9(WJ(..._),WJ(...J0),WJ(...u));q(new i8(E0,20,0.008,4,!1),O(m),[0,0,0])}let p=[];for(let _ of[-1.95,1.95])M(_,1.45,2.55,0.035,0.045,2.9,"#5b4a38",8);for(let[_,u,J0]of[[[-2.7,2.9,-2.45],[-1.95,2.85,2.55],0.5],[[2.7,2.9,-2.45],[1.95,2.85,2.55],0.5],[[-1.95,2.85,2.55],[1.95,2.85,2.55],0.32]]){let m=WJ(..._),E0=WJ(...u),K0=m.clone().lerp(E0,0.5);K0.y-=J0*2;let C0=new q9(m,K0,E0);q(new i8(C0,24,0.006,4,!1),O("#1c2320"),[0,0,0]);let p0=Math.round(m.distanceTo(E0)/0.42);for(let m0=1;m0<p0;m0++){let G0=C0.getPointAt(m0/p0);p.push(G0.setY(G0.y-0.035))}}{let _=new k8(0.022,10,8);_.scale(1,1.3,1);let u=["#ffd89a","#ffc27a","#ffe3a8"],J0=new T9(_,new dJ({color:new h0(4.5,4.5,4.5)}),p.length),m=new TJ;p.forEach((E0,K0)=>{m.position.copy(E0),m.updateMatrix(),J0.setMatrixAt(K0,m.matrix),J0.setColorAt(K0,new h0(u[K0%u.length]))}),$.add(J0)}s([0,3.22,-1.6],[0,3.19,0],[0,3.02,-0.8]);let X0=new fJ;X0.position.set(4.3,0,-1.7),$.add(X0);let a=new I0(new AJ(0.1,0.15,4.5,9),O("#696047"));a.position.y=2.25,X0.add(a);for(let _=0;_<9;_++){let u=new I0(new k8(1,10,5),O(_%2?"#4a654c":"#344e3d"));u.scale.set(0.27,0.075,1.5),u.position.set(Math.sin(_*Z6/9)*0.72,4.35,Math.cos(_*Z6/9)*0.72),u.rotation.set(0.23,_*Z6/9,0),X0.add(u)}let Y0=new O8({map:S,color:"#d9a877",roughness:0.5,clearcoat:0.55,clearcoatRoughness:0.28}),F0=new I0(new _8(R0.tableWidth,R0.tableThickness,R0.tableWidth,3,0.035),Y0);F0.position.y=R0.tableCenterY,F0.castShadow=!0,F0.receiveShadow=!0,$.add(F0);let r0=L((_,u,J0)=>{_.fillStyle="#2f5b47",_.fillRect(0,0,u,J0);for(let E0=0;E0<J0;E0+=2)for(let K0=0;K0<u;K0+=2){let C0=(I()-0.5)*14,p0=((K0>>1)+(E0>>1))%2?4:-4;_.fillStyle=`rgb(${47+C0+p0},${91+C0+p0},${71+C0+p0})`,_.fillRect(K0,E0,2,2)}for(let E0=0;E0<4;E0++){let K0=E0*Math.PI/2,C0=u/2+Math.sin(K0)*u*0.36,p0=J0/2+Math.cos(K0)*J0*0.36,m0=_.createRadialGradient(C0,p0,0,C0,p0,u*0.2);m0.addColorStop(0,"rgba(120,150,120,.16)"),m0.addColorStop(1,"rgba(120,150,120,0)"),_.fillStyle=m0,_.fillRect(0,0,u,J0)}let m=_.createRadialGradient(u/2,J0/2,u*0.1,u/2,J0/2,u*0.62);m.addColorStop(0,"rgba(0,0,0,0)"),m.addColorStop(1,"rgba(0,0,0,.28)"),_.fillStyle=m,_.fillRect(0,0,u,J0)},512,512),T0=new I0(new _8(R0.feltWidth,0.012,R0.feltWidth,2,0.02),new O8({map:r0,roughness:0.97,sheen:0.8,sheenRoughness:0.55,sheenColor:new h0("#9fc7a8")}));T0.position.y=R0.feltCenterY,T0.receiveShadow=!0,$.add(T0);let x0=R0.tableWidth/2-0.07;for(let _ of[-x0,x0])for(let u of[-x0,x0])V(_,0.35,u,0.075,0.68,0.075,A);let e0=["#C8402F","#6FB7C9"];for(let _=0;_<4;_++){let[u,J0,m]=O9[_],E0=R0.feltWidth/2-0.012,K0=new I0(new zJ(R0.feltWidth*0.72,0.009),new i0({color:e0[_%2],roughness:0.9}));K0.rotation.set(-Math.PI/2,0,m),K0.position.set(u*E0/R0.seatDistance,R0.surfaceY+0.0006,J0*E0/R0.seatDistance),K0.receiveShadow=!0,$.add(K0)}let Q0=new i0({roughness:0.92,map:L((_,u,J0)=>{_.fillStyle="#8f7446",_.fillRect(0,0,u,J0);let m=12,E0=u/m;for(let K0=0;K0<m;K0++)for(let C0=0;C0<m;C0++){let p0=(C0+K0)%2===0;for(let m0=0;m0<3;m0++){let G0=150+I()*45|0;_.fillStyle=`rgb(${G0+30},${G0+8},${G0-45})`;let b0=m0*E0/3+E0*0.04,UJ=E0/3-E0*0.08;if(p0)_.fillRect(C0*E0+1,K0*E0+b0,E0-2,UJ);else _.fillRect(C0*E0+b0,K0*E0+1,UJ,E0-2)}}_.fillStyle="rgba(40,28,14,.18)";for(let K0=0;K0<=m;K0++)_.fillRect(K0*E0-1,0,2,J0),_.fillRect(0,K0*E0-1,u,2)},256,256)});for(let _=0;_<4;_++){let[u,J0,m]=O9[_],E0=new fJ;E0.position.set(u,0,J0),E0.rotation.y=m,$.add(E0);let K0=O(_%2?"#5e9fb2":"#b53f2e",0.62),C0=(p0,m0,G0,b0,UJ,JJ,VJ=K0,vJ=0.008)=>{let DJ=WJ(b0,UJ,JJ).applyAxisAngle(WJ(0,1,0),m).add(WJ(u,0,J0));q(new _8(p0,m0,G0,2,vJ),VJ,DJ.toArray(),[0,m,0])};C0(R0.chairSeatWidth-0.04,0.035,0.5,0,R0.chairSeatY,0,Q0,0.01);for(let p0 of[-1,1])C0(0.04,0.05,0.54,p0*(R0.chairSeatWidth/2-0.02),R0.chairSeatY-0.005,0);for(let p0 of[-1,1])C0(R0.chairSeatWidth,0.05,0.04,0,R0.chairSeatY-0.005,p0*0.25);for(let p0 of[-0.24,0.24])for(let m0 of[-0.21,0.21])C0(0.04,R0.chairSeatY,0.04,p0,R0.chairSeatY/2,m0);for(let p0 of[-0.24,0.24])C0(0.024,0.024,0.42,p0,0.15,0);C0(0.48,0.024,0.024,0,0.15,0.21);for(let p0 of[-0.24,0.24])C0(0.04,0.52,0.04,p0,R0.chairSeatY+0.26,-0.23);for(let p0 of[0.2,0.33,0.46])C0(0.46,p0===0.46?0.07:0.045,0.022,0,R0.chairSeatY+p0,-0.23)}function w(_,u,J0,m,E0,K0=60){let C0=L((p0,m0,G0)=>{p0.fillStyle=m,p0.fillRect(0,0,m0,G0),p0.fillStyle=E0,p0.textAlign="center",p0.textBaseline="middle",p0.font=`bold ${K0}px Georgia`,p0.fillText(_,m0/2,G0/2)},1024,256);return new I0(new zJ(u,J0),new dJ({map:C0}))}let x=w("COLMADO  LA ESQUINA",4.8,0.38,"#a05d42","#f8e8b9",64);x.position.set(0,2.94,-2.33),$.add(x);let l=w("MESA",0.11,0.029,"#284e3e","#81906b",77);{let _=document.createElement("canvas");_.width=512,_.height=136;let u=new F9(_);u.colorSpace=Y8;let J0=()=>{let m=_.getContext("2d");m.clearRect(0,0,512,136),m.font=`96px ${document.fonts?.check?.("96px Shrikhand")?"Shrikhand":"Georgia"}`,m.textAlign="center",m.textBaseline="middle",m.fillStyle="rgba(170,205,170,.42)",m.fillText("Mesa",256,72),u.needsUpdate=!0};J0(),document.fonts?.load?.("96px Shrikhand").then(J0).catch(()=>{}),l.material=new i0({map:u,transparent:!0,depthWrite:!1,roughness:1})}l.rotation.x=-Math.PI/2,l.position.set(0,R0.surfaceY+0.001,0.3),$.add(l);let e=new fJ;e.position.set(-0.9,2.62,-3.45),e.rotation.x=-Math.PI/2,$.add(e),M(-0.9,2.9,-3.45,0.015,0.015,0.56,"#777a68",8),M(-0.9,3.16,-3.45,0.075,0.075,0.025,"#767763",12);let t=new I0(new k8(0.075,12,8),O("#41493d"));e.add(t);for(let _=0;_<5;_++){let u=new I0(new cJ(0.13,0.5,0.025),O("#85856e",0.88,0.05));u.position.set(Math.sin(_*Z6/5)*0.285,Math.cos(_*Z6/5)*0.285,0),u.rotation.z=-_*Z6/5,e.add(u)}let D0=new fJ;D0.position.set(-12,0.05,5.2),$.add(D0);for(let _ of[-0.36,0.36]){let u=new I0(new S9(0.19,0.038,7,14),O("#182221"));u.position.set(_,0.2,0),D0.add(u)}let L0=new I0(new _8(0.65,0.17,0.2,2,0.04),O("#823e2f",0.45,0.25));L0.position.y=0.49,D0.add(L0);let N0=new I0(new cJ(0.35,0.06,0.22),O("#202725"));N0.position.set(-0.08,0.61,0),D0.add(N0);let g0=new I0(new AJ(0.015,0.015,0.45,6),O("#8c9c96",0.4,0.5));g0.position.set(0.32,0.59,0),g0.rotation.z=-0.3,D0.add(g0);let c0=M5({scene:$,texture:L,mat:O,box:V,cylinder:M,random:I,teal:d,wood:k,storeSign:x}),kJ=C5({scene:$,texture:L,mat:O,box:V,cylinder:M,staticGeo:q,random:I,renderer:Z});for(let{material:_,geos:u}of D.values()){let J0=lW(u.some((m)=>!m.index)?u.map((m)=>m.index?m.toNonIndexed():m):u,!1);if(J0){let m=new I0(J0,_);m.receiveShadow=!0,J0.computeBoundingBox(),m.castShadow=J0.boundingBox.distanceToPoint(WJ(0,0.8,0))<1.6&&J0.boundingBox.getSize(WJ()).length()<8,$.add(m)}u.forEach((m)=>m.dispose())}let j0=new fJ,MJ=new fJ;$.add(j0,MJ);let _J=new _8(R0.tileLength,R0.tileThickness,R0.tileWidth,3,0.0024),bJ=new O8({color:"#ede5d2",roughness:0.5,clearcoat:0.3,clearcoatRoughness:0.4}),y=new O8({color:"#e2dac6",roughness:0.42,clearcoat:0.7,clearcoatRoughness:0.3}),nJ=new i0({color:"#b98b3e",roughness:0.28,metalness:1}),XJ=new AJ(0.0019,0.0019,0.0009,12),RJ=new i0({color:"#0b0a09",roughness:0.55}),z=new i0({color:"#2a2622",roughness:0.6}),B=new AJ(R0.pipRadius,R0.pipRadius,0.0007,14),j=new cJ(0.0014,0.0005,R0.tileWidth*0.8),i=new Set([_J,B,j,XJ]),q0=new Set([bJ,y,RJ,z,nJ]),B0=[Y0,T0.material,bJ,y].map((_)=>[_,{clearcoat:_.clearcoat,sheen:_.sheen}]);function z0(_,u,J0=!1){let m=new fJ,E0=new I0(_J,J0?y:bJ);if(E0.castShadow=!0,E0.receiveShadow=!0,m.add(E0),!J0){let K0=[];if([_,u].forEach((m0,G0)=>ZR[m0].forEach((b0)=>K0.push(WJ((G0===0?-1:1)*R0.tileLength/4+(b0%3-1)*R0.pipColumnSpacing,R0.tileThickness/2+0.0005,(Math.floor(b0/3)-1)*R0.pipRowSpacing)))),K0.length){let m0=new T9(B,RJ,K0.length),G0=new QJ;K0.forEach((b0,UJ)=>m0.setMatrixAt(UJ,G0.makeTranslation(b0.x,b0.y,b0.z))),m.add(m0)}let C0=new I0(j,z);C0.position.y=R0.tileThickness/2+0.0002,m.add(C0);let p0=new I0(XJ,nJ);p0.position.y=R0.tileThickness/2+0.0004,m.add(p0)}return m}function $0(_){return WJ(_.x,R0.surfaceY+R0.tileThickness/2+0.001,_.z)}let H0=new I0(new S9(0.2,0.006,5,38),new dJ({color:"#e8bf70",transparent:!0,opacity:0.7}));H0.rotation.x=-Math.PI/2,H0.position.y=0.027,$.add(H0);let k0=[],n0=[],M0=[],V0=[],t0=new LH,a0=0,CJ=4,h=[];V0.push(...P5($));let A0=WJ(),W0=WJ(),P0=WJ(),v0=WJ(),O0=new QJ,S0=WJ(),ZJ=WJ();function uJ(_){let u=null;if(_.root.traverse((JJ)=>{if(JJ.isSkinnedMesh&&JJ.morphTargetDictionary&&!u)u=JJ}),!u||u.morphTargetDictionary.parpadeo==null)return;_.cara={mesh:u,iP:u.morphTargetDictionary.parpadeo,iS:u.morphTargetDictionary.sonrisa};let J0=u.geometry.attributes.position,m=u.userData?.boca;if(m){let JJ=1e9,VJ=0;for(let vJ=0;vJ<J0.count;vJ++){let DJ=(J0.getX(vJ)-m[0])**2+(J0.getY(vJ)-m[1])**2+(J0.getZ(vJ)-m[2])**2;if(DJ<JJ)JJ=DJ,VJ=vJ}_.bocaMundo=(vJ)=>{return u.skeleton.update(),u.getVertexPosition(VJ,vJ).applyMatrix4(u.matrixWorld)}}let E0=u.userData?.ojos,K0=u.userData?.parpado;if(!E0||!K0)return;let C0=u.geometry.attributes.position,p0=(JJ)=>{let VJ=1e9,vJ=0;for(let DJ=0;DJ<C0.count;DJ++){let I8=(C0.getX(DJ)-JJ[0])**2+(C0.getY(DJ)-JJ[1])**2+(C0.getZ(DJ)-JJ[2])**2;if(I8<VJ)VJ=I8,vJ=DJ}return vJ},m0=new zJ(0.027,0.0125,8,4);m0.translate(0,-0.00625,0);let G0=m0.attributes.position,b0=[];for(let JJ=0;JJ<G0.count;JJ++){let VJ=G0.getX(JJ)/0.0135,vJ=-G0.getY(JJ)/0.0125;G0.setZ(JJ,0.0032*Math.cos(VJ*Math.PI/2)*(0.5+0.5*vJ));let DJ=vJ>0.85?0.45:1;b0.push(DJ,DJ,DJ)}m0.setAttribute("color",new qJ(b0,3)),m0.computeVertexNormals();let UJ=new i0({color:new h0().setRGB(...K0,Y8),roughness:0.7,vertexColors:!0});_.parpados=E0.map((JJ)=>{let VJ=new I0(m0,UJ);return VJ.visible=!1,VJ.frustumCulled=!1,$.add(VJ),{m:VJ,k:p0(JJ)}})}function SJ(_){let u=_.parpados;if(!u||!_.cara)return;let J0=_.parpadeo||0;if(J0<0.03){for(let C0 of u)C0.m.visible=!1;return}let m=_.cara.mesh;m.skeleton.update();let E0=m.getVertexPosition(u[0].k,A0).applyMatrix4(m.matrixWorld).clone(),K0=m.getVertexPosition(u[1].k,A0).applyMatrix4(m.matrixWorld).clone();if(_.head.getWorldPosition(S0),_.front.getWorldPosition(ZJ),v0.subVectors(ZJ,S0).normalize(),W0.subVectors(K0,E0).normalize(),P0.crossVectors(v0,W0).normalize(),P0.y<0)P0.negate();W0.crossVectors(P0,v0).normalize(),O0.makeBasis(W0,P0,v0);for(let[C0,p0]of[[u[0],E0],[u[1],K0]])C0.m.visible=!0,C0.m.quaternion.setFromRotationMatrix(O0),C0.m.position.copy(p0).addScaledVector(P0,0.0052).addScaledVector(v0,0.0024),C0.m.scale.set(1,J0,1)}async function l8(_,u){try{Q(`Seating ${["Don Rafa","Marisol","Luis","Carmen"][_]}…`,a0/CJ);let J0=await t0.loadAsync(`/models/${u}.glb`);n0[_]=J0;let m=J0.scene,E0=new fJ;E0.add(m);let K0=new J$(m);if(J0.animations[0])K0.clipAction(J0.animations.find((JJ)=>JJ.name==="Seated")||J0.animations[0]).play();K0.setTime(R0.neutralPoseTime),m.updateMatrixWorld(!0),m.traverse((JJ)=>{if(JJ.isSkinnedMesh)JJ.computeBoundingBox();if(JJ.isMesh)JJ.castShadow=!0,JJ.receiveShadow=!0,JJ.frustumCulled=!1,JJ.material.roughness=0.83});let C0=new A8().setFromObject(m),p0=m.getObjectByName("Hips"),m0=p0?.getWorldPosition(WJ())||C0.getCenter(WJ());m.position.set(-m0.x,-C0.min.y,-m0.z);let[G0,b0,UJ]=O9[_];if(E0.position.set(G0,0,b0),E0.rotation.y=UJ,$.add(E0),k0[_]={root:m,holder:E0,index:_,pose:wH(m),head:m.getObjectByName("Head"),neck:m.getObjectByName("neck"),front:m.getObjectByName("headfront"),chest:m.getObjectByName("Spine"),hips:m.getObjectByName("Hips"),lomo:m.getObjectByName("Spine02"),muslos:[m.getObjectByName("LeftUpLeg"),m.getObjectByName("RightUpLeg")],hombros:[[1,m.getObjectByName("LeftShoulder")],[-1,m.getObjectByName("RightShoulder")]],spine:m.getObjectByName("Spine01"),reaction:null,brazos:["Left","Right"].map((JJ)=>({lado:JJ,hombro:m.getObjectByName(JJ+"Shoulder"),brazo:m.getObjectByName(JJ+"Arm"),antebrazo:m.getObjectByName(JJ+"ForeArm"),mano:m.getObjectByName(JJ+"Hand")}))},k0[_].bebida=V0.find((JJ)=>JJ.index===_),uJ(k0[_]),a0++,Q(a0===4?"The table is ready.":`${a0} of 4 seats ready`,a0/CJ),M0.length===0&&M9>0)X6(M9)}catch(J0){h.push(u),console.error("Character load failed",u,J0),Q(`Could not load ${u}. Reload to retry.`,a0/CJ)}}let Q9=Promise.all(["rafa-upright","marisol","luis-upright","carmen"].map((_,u)=>l8(u,_))),R$=null,K6=null,H6="",ZQ=null,R8=T5({scene:$,renderer:Z,camera:W,controls:Y,software:H,bulbLight:E});R8.calidad("high");let Y6=new Set,k9=new Map,KQ=[0,1,2,3].map(()=>WJ()),HQ=(_)=>{let u=_.detail||{};if(u.active)Y6.add(u.seat),k9.set(u.seat,u.type);else Y6.delete(u.seat)};window.addEventListener("mesa:botvoice",HQ);let M7=null,M9=0,eW="",C7=0,L$="attract",Z8=null,$9=[],JZ=0,V$=0;function YQ(_){while(_.children.length){let u=_.children.pop();u.parent=null,u.traverse((J0)=>{if(J0.isMesh&&!i.has(J0.geometry))J0.geometry.dispose();if(J0.isMesh&&!q0.has(J0.material))J0.material.dispose()})}}function X6(_){M9=_;let u=Math.min(8,_);for(let J0=M0.length-1;J0>=u;J0--)$.remove(M0[J0].holder),M0.pop();while(M0.length<u&&n0.filter(Boolean).length){let J0=M0.length,m=n0[J0%4]||n0.find(Boolean),E0=mW(m.scene),K0=new fJ;K0.add(E0);let C0=new J$(E0);if(m.animations[0])C0.clipAction(m.animations.find((b0)=>b0.name==="Seated")||m.animations[0]).play();C0.setTime(R0.neutralPoseTime),E0.updateMatrixWorld(!0),E0.traverse((b0)=>{if(b0.isSkinnedMesh)b0.computeBoundingBox();if(b0.isMesh)b0.castShadow=!1,b0.frustumCulled=!1});let p0=new A8().setFromObject(E0),m0=E0.getObjectByName("Hips")?.getWorldPosition(WJ())||p0.getCenter(WJ());E0.position.x-=m0.x,E0.position.y-=p0.min.y,E0.position.z-=m0.z,K0.position.set(-2.5+J0%4*1.66,0,-2.5-Math.floor(J0/4)*0.65),K0.rotation.y=0,$.add(K0);let G0=new I0(new cJ(0.56,0.06,0.54),b);G0.position.set(0,R0.chairSeatY,0),K0.add(G0),M0.push({root:E0,holder:K0,pose:wH(E0),head:E0.getObjectByName("Head"),neck:E0.getObjectByName("neck"),front:E0.getObjectByName("headfront"),chest:E0.getObjectByName("Spine"),spine:E0.getObjectByName("Spine01"),index:J0+4})}}let C=-1,v=null,r=Y.minDistance;function n(_,u,J0){if(document.documentElement.classList.contains("reduced"))return;let m=WJ(1,0,1).normalize(),E0=-9;for(let[C0,p0]of[[1,1],[1,-1],[-1,1],[-1,-1]]){let m0=WJ(C0,0,p0).normalize(),G0=m0.x*_.x+m0.z*_.z;if(G0>E0)E0=G0,m=m0}let K0=_.clone().addScaledVector(m,0.3);if(K0.x=E7.clamp(K0.x,-0.4,0.4),K0.z=E7.clamp(K0.z,-0.4,0.4),K0.y=R0.surfaceY+(J0?0.12:0.19),!v)r=Y.minDistance;Y.minDistance=0.1,v={pos:v?.pos||W.position.clone(),target:v?.target||Y.target.clone(),at:FJ.elapsedTime+3.4},Z8={from:W.position.clone(),to:K0,fromTarget:Y.target.clone(),toTarget:_.clone().setY(_.y+0.01),t:0,dur:0.45}}function c(_="table"){if(Y.minDistance=_==="seat"||_==="close"?0.3:0.7,Y.minPolarAngle=_==="overhead"?0.01:0.25,W.aspect<0.95&&_==="table")_="overhead";let u,J0=WJ(0,0.8,0);if(_==="attract")u=WJ(0.75,1.3,4.4),J0=WJ(-1,1.4,-1.2);else if(_==="overhead")u=WJ(0.001,1.86,0.34),J0=WJ(0,R0.surfaceY,0.02);else if(_==="seat")u=WJ(0,1.36,0.74),J0=WJ(0,0.82,-0.12);else if(_==="close")u=WJ(0.62,1.3,1),J0=WJ(-0.03,0.85,-0.08);else u=WJ(0.8,1.89,1.24),J0=WJ(0,0.9,-0.2);if(_!=="attract"&&_!=="seat"&&W.aspect<1.3){let m=Math.min(2.4,Math.pow(1.6/W.aspect,0.8));u=J0.clone().add(u.clone().sub(J0).multiplyScalar(m))}if(k0[0])k0[0].root.visible=_!=="seat";v=null,Y.minDistance=Math.min(Y.minDistance,r),Z8={from:W.position.clone(),to:u,fromTarget:Y.target.clone(),toTarget:J0,t:0}}let _0=WJ(0,1,0),l0=new IJ().setFromAxisAngle(WJ(1,0,0),0.12),w0=new IJ().setFromAxisAngle(_0,Math.PI/2),d0=new IJ().setFromAxisAngle(WJ(0,0,1),Math.PI/2),s0=R0.tableCenterY+R0.tableThickness/2+R0.tileLength/2*Math.cos(0.12)+R0.tileThickness/2*Math.sin(0.12)+0.001;function HJ(_,u,J0){let m=O9[_][2];return J0.quaternion.setFromAxisAngle(_0,m).multiply(l0).multiply(w0).multiply(d0),J0.position.set(u,s0,-R0.rackRadius).applyAxisAngle(_0,m),J0}let KJ=new T9(_J,y,28);KJ.count=0,KJ.castShadow=!0,KJ.receiveShadow=!0,KJ.frustumCulled=!1,MJ.add(KJ);let u0=[[],[],[],[]],EJ=new TJ,iJ=[0,0,0,0],hJ="",jJ=new Set;function G8(_){let u=0;for(let J0=0;J0<4;J0++){let m=jJ.has(J0)?0:iJ[J0],E0=u0[J0];while(E0.length<m)E0.push((E0.length-(m-1)/2)*R0.rackSpacing);E0.length=m;for(let K0=0;K0<m;K0++){let C0=(K0-(m-1)/2)*R0.rackSpacing;E0[K0]+=(C0-E0[K0])*(1-Math.exp(-_*10)),HJ(J0,E0[K0],EJ),EJ.updateMatrix(),KJ.setMatrixAt(u++,EJ.matrix)}}KJ.count=u,KJ.instanceMatrix.needsUpdate=!0}let f0=new fJ;$.add(f0);let K8=new Map,PJ="",P8="";function m8(){for(let _=0;_<28;_++){let u=z0(0,0,!0);u.position.set((_*37%23-11)*0.016,R0.surfaceY+R0.tileThickness*(0.55+_%3*0.9),(_*13%19-9)*0.016),u.rotation.y=_*1.73,j0.add(u)}}let V8=(_)=>_*_*(3-2*_),t9=new IJ().setFromAxisAngle(WJ(1,0,0),Math.PI),yJ=new IJ().setFromAxisAngle(_0,-Math.PI/2);function oJ(_,u){_.revealed.forEach((J0,m)=>{let E0=J0.length,K0=O9[m][2];J0.forEach((C0,p0)=>{let m0=(p0-(E0-1)/2)*R0.rackSpacing,G0=z0(C0.a,C0.b);HJ(m,m0,EJ);let b0=EJ.quaternion.clone().multiply(t9),UJ=EJ.position.clone(),JJ=WJ(m0,R0.surfaceY+R0.tileThickness/2+0.001,-R0.rackRadius+0.047).applyAxisAngle(_0,K0),VJ=new IJ().setFromAxisAngle(_0,K0).multiply(yJ);G0.position.copy(UJ),G0.quaternion.copy(b0),G0.visible=!1,j0.add(G0),$9.push({obj:G0,from:UJ,to:JJ,qFrom:b0,qTo:VJ,elapsed:-(u+m*0.3+p0*0.055),duration:0.42,revela:m,ultima:p0===E0-1})})})}function W9(_,u=0){M7=_;{let K0=_&&(_.phase==="handEnd"||_.phase==="seriesEnd")&&_.result,C0=K0?_.handNo+":"+_.phase:"";if(C0&&C0!==H6)K6={t:FJ.elapsedTime+0.5,team:_.result.team??null};if(!K0)K6=null;H6=C0}if(M9!==u)X6(u);let J0=!_||_.phase==="lobby"?"pila":"mano"+_.handNo;if(J0!==PJ){PJ=J0,YQ(j0),K8.clear(),$9=$9.filter((K0)=>K0.reparto);for(let K0 of k0)if(K0)K0.jugada=null;if(J0==="pila")m8()}if(_&&_.chain?.length){let K0=X5(_.chain,_.moves),C0=_.event,p0=["domino","capicua","tranque"].includes(C0?.type),m0=_.moves[_.moves.length-1],G0=C0?.type==="domino"||C0?.type==="capicua",b0=C0?.type==="play"?C0.tile:p0&&m0?.type==="play"?m0.tile:null;_.chain.forEach((UJ,JJ)=>{if(K8.has(UJ.id))return;let VJ=z0(UJ.x,UJ.y),vJ=$0(K0[JJ]);if(VJ.position.copy(vJ),VJ.rotation.y=K0[JJ].yaw,VJ.updateMatrix(),j0.add(VJ),K8.set(UJ.id,VJ),UJ.id!==b0||UJ.seat==null)return;HJ(UJ.seat,0,EJ);let DJ={obj:VJ,from:EJ.position.clone(),to:vJ.clone(),qFrom:EJ.quaternion.clone(),qTo:VJ.quaternion.clone(),elapsed:0,duration:G0?0.7:0.55,golpe:G0};if(VJ.position.copy(DJ.from),VJ.quaternion.copy(DJ.qFrom),$9.push(DJ),p0)n(vJ,UJ.seat,G0);JZ=performance.now();let I8=k0[UJ.seat];if(R$={p:vJ.clone(),t:FJ.elapsedTime+DJ.duration},I8)I8.reaction={time:FJ.elapsedTime},I8.jugada={t0:FJ.elapsedTime,obj:VJ,anim:DJ,hasta:vJ.clone()}})}if(_?.phase==="playing"&&_.handNo!==C7&&_.moves.length===0){C7=_.handNo,YQ(f0),$9=$9.filter((K0)=>!K0.reparto),V$=performance.now()+3300;for(let K0=0;K0<4;K0++)u0[K0]=Array.from({length:7},(C0,p0)=>(p0-3)*R0.rackSpacing);for(let K0=0;K0<28;K0++){let C0=K0%4,p0=Math.floor(K0/4),m0=z0(0,0,!0),G0=WJ((K0*37%23-11)*0.015,R0.surfaceY+0.012,(K0*13%19-9)*0.015);m0.position.copy(G0),m0.rotation.y=K0*1.73,f0.add(m0);let b0=HJ(C0,(p0-3)*R0.rackSpacing,new TJ);$9.push({obj:m0,from:G0,to:b0.position.clone(),qFrom:m0.quaternion.clone(),qTo:b0.quaternion.clone(),elapsed:-K0*0.065,duration:1.1,reparto:!0})}}let m=_?.moves?.[_.moves.length-1],E0=_?_.handNo+":"+_.moves.length:"";if(m?.type==="pass"&&P8!==E0){P8=E0;let K0=k0[m.seat];if(K0)K0.toque={t0:FJ.elapsedTime}}{let K0=_&&(_.phase==="handEnd"||_.phase==="seriesEnd")&&_.revealed,C0=K0?"r"+_.handNo:"";if(!K0)hJ="",jJ.clear();else if(C0!==hJ){hJ=C0;let p0=_.result?.type;oJ(_,p0==="domino"||p0==="capicua"?3.4:p0==="tranque"?2.5:1.2)}}iJ=[0,1,2,3].map((K0)=>!_||_.phase==="lobby"?0:_.counts[K0]??0),H0.visible=!1,ZQ=_?.phase==="playing"&&_.chain?.length?U5(_.chain,_.moves):null}let FJ=new fW,S8=0,C9=0,P7=0,XQ=60,hH=!1,D$=!1,UQ=null,U6="high",xH=null,B$=performance.now(),k$=0,gH=!1,S5=new URLSearchParams(location.search).has("debug"),pH=E.intensity,I7=WJ(),w5=WJ(0,R0.surfaceY,0);function QZ(){if(hH||D$){UQ=null;return}UQ=requestAnimationFrame(QZ);let _=FJ.getDelta(),u=Math.min(_,0.06),J0=xH??FJ.elapsedTime,m=performance.now();if(C9++,P7+=_,P7>1){if(XQ=C9/P7,C9=0,P7=0,!K&&!k$&&U6==="high"&&m-B$>9000&&m-B$<30000&&XQ<30)k$=m,$Z.quality("low"),dispatchEvent(new CustomEvent("mesa:calidad",{detail:"low"}));else if(!K&&U6==="low"&&!gH&&m-(k$||B$)>9000&&m-(k$||B$)<40000&&XQ<20)gH=!0,$Z.quality("min"),dispatchEvent(new CustomEvent("mesa:calidad",{detail:"min"}))}S8++,Z.info.reset();let E0=document.documentElement.classList.contains("reduced");if(v&&FJ.elapsedTime>v.at)Z8={from:W.position.clone(),to:v.pos,fromTarget:Y.target.clone(),toTarget:v.target,t:0,dur:1.2},v=null,Y.minDistance=r;let K0=0;if(C>=0){let G0=FJ.elapsedTime-C;if(G0<0.5){let b0=0.0045*Math.exp(-G0*8)*Math.sin(G0*Z6*18);j0.position.y=b0,MJ.position.y=b0,K0=E0?0:0.004*Math.exp(-G0*9),E.intensity=pH*(1+0.35*Math.exp(-G0*14))}else C=-1,j0.position.y=0,MJ.position.y=0,E.intensity=pH}if(Z8){Z8.t=Math.min(1,Z8.t+u/(Z8.dur||1.1));let G0=V8(Z8.t);if(W.position.lerpVectors(Z8.from,Z8.to,G0),Y.target.lerpVectors(Z8.fromTarget,Z8.toTarget,G0),Z8.t===1)Z8=null}if(!E0)e.rotation.z=J0*3.5,X0.rotation.z=Math.sin(J0*0.47)*0.009,c0.update(J0),kJ.update(J0);let C0=M7,p0={dt:u,jugando:C0?.phase==="playing",turno:C0?.turn,habla:Y6,hablaTipo:k9,foco:R$,fin:K6,cabezas:k0.map((G0,b0)=>G0?.head?G0.head.getWorldPosition(KQ[b0]):null)};for(let G0 of k0){if(!G0)continue;rW(G0,J0,E0,p0),SJ(G0)}for(let G0=0;G0<M0.length;G0++)if((S8+G0)%2===0)rW(M0[G0],J0,E0,p0);$9=$9.filter((G0)=>{if(G0.elapsed+=u,G0.elapsed<0)return!0;let b0=Math.min(1,G0.elapsed/G0.duration);if(G0.revela!=null){G0.obj.visible=!0,jJ.add(G0.revela);let UJ=V8(b0);if(G0.obj.quaternion.slerpQuaternions(G0.qFrom,G0.qTo,UJ),G0.obj.position.lerpVectors(G0.from,G0.to,UJ),G0.obj.position.y+=Math.sin(b0*Math.PI)*0.012,b0>=1&&G0.ultima)dispatchEvent(new CustomEvent("mesa:aterriza",{detail:{revela:!0}}));return b0<1}if(G0.reparto)return G0.obj.position.lerpVectors(G0.from,G0.to,V8(b0)),G0.obj.position.y+=Math.sin(b0*Math.PI)*0.035,G0.obj.quaternion.slerpQuaternions(G0.qFrom,G0.qTo,V8(Math.min(1,Math.max(0,(b0-0.3)/0.7)))),b0<1;if(G0.obj.quaternion.slerpQuaternions(G0.qFrom,G0.qTo,V8(Math.min(1,b0/0.4))),G0.golpe){let UJ=Math.min(1,b0/0.62);G0.obj.position.lerpVectors(G0.from,G0.to,V8(UJ)),G0.obj.position.y+=b0<0.62?Math.sin(UJ*Math.PI/2)*0.17:0.17*(1-((b0-0.62)/0.38)**2)}else G0.obj.position.lerpVectors(G0.from,G0.to,V8(b0)),G0.obj.position.y+=Math.sin(b0*Math.PI)*0.07;if(b0>=1&&!G0.sono){if(G0.sono=!0,G0.golpe)C=FJ.elapsedTime;dispatchEvent(new CustomEvent("mesa:aterriza",{detail:{golpe:!!G0.golpe}}))}return b0<1});let m0=m<V$;if(MJ.visible=!m0,!m0&&f0.children.length)YQ(f0);if(G8(u),Y.update(),R8.frame(J0,u,{reduced:E0,view:C0,ends:ZQ,temblor:K0}),R8.render(),S8%2===0)for(let G0 of document.querySelectorAll("[data-seatlabel]")){let b0=Number(G0.dataset.seatlabel),[UJ,JJ]=O9[b0],VJ=k0[b0]?.head,vJ=VJ&&VJ.getWorldPosition(I7).distanceTo(R8.vista.position)<w5.distanceTo(R8.vista.position)-0.2;if(vJ)I7.y-=0.3;else if(VJ)I7.y+=0.23;else I7.set(UJ,1.45,JJ);let DJ=I7.project(R8.vista),I8=!1;if(!vJ&&DJ.y>0.8&&VJ)VJ.getWorldPosition(I7).y-=0.1,DJ=I7.project(R8.vista),I8=!0;let j5=Math.min(DJ.y,0.8);G0.style.transform=`translate(${(DJ.x*0.5+0.5)*innerWidth}px,${(-j5*0.5+0.5)*innerHeight}px) translate(-50%,${vJ?"-50%":I8?"0":"-100%"})`,G0.style.visibility=DJ.z>1||Math.abs(DJ.x)>1.1||DJ.y<-1.15?"hidden":"visible"}if(S8%30===0||S8===1){if(window.mesaDiagnostics={fps:Math.round(XQ),drawCalls:Z.info.render.calls,triangles:Z.info.render.triangles,characters:a0,crowd:M9,visibleCrowd:M0.length,boardTiles:M7?.chain.length||0,quality:U6,modelErrors:h},S5){window.mesaRigDebug=k0.filter(Boolean).map((b0)=>({index:b0.index,head:b0.head?.getWorldPosition(WJ()).toArray(),hip:b0.hips?.getWorldPosition(WJ()).toArray(),rootScale:b0.root.scale.toArray()}));let G0=document.querySelector("#perf");if(G0)G0.textContent=`${Math.round(XQ)} fps · ${Z.info.render.calls} draws`}}}window.mesaCamara=(_,u)=>{Z8=null,v=null,Y.minDistance=0.1,W.position.set(..._),Y.target.set(...u),Y.update()},window.mesaCara=(_,u,J0)=>{let m=k0[_];if(m)m.caraFija=u==null?null:{p:u,s:J0??0}},window.mesaBeber=(_,u)=>{let J0=k0[_];if(J0&&J0.bebida&&!J0.jugada)J0.trago={t0:FJ.elapsedTime,fijo:u}},W9(null),QZ();let lH=()=>{if(W.aspect<0.95)W.setViewOffset(innerWidth,innerHeight*1.24,0,innerHeight*0.24,innerWidth,innerHeight);else W.clearViewOffset();W.updateProjectionMatrix()},mH=()=>H?0.65:U6==="min"?Math.min(devicePixelRatio,1)*0.55:U6==="low"?Math.min(devicePixelRatio,1)*0.8:Math.min(devicePixelRatio,1.5,1920/innerWidth),uH=()=>{W.aspect=innerWidth/innerHeight,lH(),Z.setPixelRatio(mH()),Z.setSize(innerWidth,innerHeight),R8.resize(innerWidth,innerHeight)};lH(),window.addEventListener("resize",uH),Y.addEventListener("start",()=>{Z8=null,v=null}),Z.domElement.addEventListener("webglcontextrestored",()=>R8.entorno?.());let $Z={update:W9,setCrowd:X6,setCamera:c,ready:Q9,sampleTime(_){xH=_;for(let u of[...k0.filter(Boolean),...M0])rW(u,_,!1);R8.frame(_,0,{reduced:!1,view:M7,ends:ZQ}),R8.render()},setMode(_){L$=_,c(_==="attract"?"attract":"table")},quality(_){U6=_;let u=_!=="high";E.castShadow=!u&&!H;for(let[J0,m]of B0){let E0=u?0:m.clearcoat,K0=u?0:m.sheen;if(J0.clearcoat!==E0||J0.sheen!==K0)J0.clearcoat=E0,J0.sheen=K0,J0.needsUpdate=!0}G.visible=!u,U.intensity=u?X+0.1:X,Z.setPixelRatio(mH()),R8.calidad(_),R8.resize(innerWidth,innerHeight)},pause(){D$=!0},resume(){if(!D$)return;if(D$=!1,FJ.getDelta(),!UQ)QZ()},dispose(){if(hH=!0,R8.dispose(),window.removeEventListener("mesa:botvoice",HQ),UQ)cancelAnimationFrame(UQ);window.removeEventListener("resize",uH),Y.dispose(),Z.dispose(),J.replaceChildren()}};return $Z}export{KB as createWorld};

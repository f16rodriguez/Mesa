var xX="186",U7={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},N7={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gX=0,xK=1,pX=2;var y7=1,lX=2,v6=3,G7=0,V8=1,oJ=2,n8=0,wQ=1,z9=2,gK=3,pK=4,mX=5;var f6=100,uX=101,dX=102,cX=103,nX=104,sX=200,iX=201,oX=202,aX=203,rX=204,tX=205,eX=206,JH=207,QH=208,$H=209,ZH=210,KH=211,WH=212,YH=213,XH=214,HH=0,UH=1,NH=2,lK=3,GH=4,FH=5,EH=6,qH=7,OH=0,RH=1,LH=2,U9=0,jQ=1,yQ=2,vQ=3,v7=4,fQ=5,hQ=6,bQ=7;var h6=301,f7=302,KZ=303,WZ=304,xQ=306,F7=1000,b6=1001,YZ=1002,N9=1003,XZ=1004;var h7=1005;var q8=1006,x6=1007;var A9=1008;var G9=1009,VH=1010,DH=1011,gQ=1012,mK=1013,E7=1014,n9=1015,O8=1016,uK=1017,dK=1018,g6=1020,BH=35902,kH=35899,MH=1021,CH=1022,_9=1023,b7=1026,x7=1027,PH=1028,cK=1029,g7=1030,nK=1031;var sK=1033,HZ=33776,UZ=33777,NZ=33778,GZ=33779,iK=35840,oK=35841,aK=35842,rK=35843,tK=36196,eK=37492,JW=37496,QW=37488,$W=37489,FZ=37490,ZW=37491,KW=37808,WW=37809,YW=37810,XW=37811,HW=37812,UW=37813,NW=37814,GW=37815,FW=37816,EW=37817,qW=37818,OW=37819,RW=37820,LW=37821,VW=36492,DW=36494,BW=36495,kW=36283,MW=36284,EZ=36285,CW=36286;var PW=2300,qZ=2301;var IW=0,pQ=1,p6=2;var zW=0,IH=1,p7="",J8="srgb",x8="srgb-linear",AW="linear",lJ="srgb";var zH=512,AH=513,_H=514,OZ=515,TH=516,SH=517,RZ=518,wH=519;var _W="300 es",TW=2000;function h5(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function b5(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function S6(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function jH(){let J=S6("canvas");return J.style.display="block",J}var sY={},w6=null;function AQ(...J){let Q="THREE."+J.shift();if(w6)w6("log",Q,...J);else console.log(Q,...J)}function yH(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function o0(...J){J=yH(J);let Q="THREE."+J.shift();if(w6)w6("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function $J(...J){J=yH(J);let Q="THREE."+J.shift();if(w6)w6("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function S7(...J){let Q=J.join(" ");if(Q in sY)return;sY[Q]=!0,o0(...J)}function vH(J,Q,$){return new Promise(function(Z,K){function W(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:K();break;case J.TIMEOUT_EXPIRED:setTimeout(W,$);break;default:Z()}}setTimeout(W,$)})}var fH={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class F9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let K=Z.indexOf(Q);if(K!==-1)Z.splice(K,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let K=0,W=Z.length;K<W;K++)Z[K].call(this,J);J.target=null}}}var B8=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],iY=1234567,CQ=Math.PI/180,w7=180/Math.PI;function c8(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(B8[J&255]+B8[J>>8&255]+B8[J>>16&255]+B8[J>>24&255]+"-"+B8[Q&255]+B8[Q>>8&255]+"-"+B8[Q>>16&15|64]+B8[Q>>24&255]+"-"+B8[$&63|128]+B8[$>>8&255]+"-"+B8[$>>16&255]+B8[$>>24&255]+B8[Z&255]+B8[Z>>8&255]+B8[Z>>16&255]+B8[Z>>24&255]).toLowerCase()}function UJ(J,Q,$){return Math.max(Q,Math.min($,J))}function SW(J,Q){return(J%Q+Q)%Q}function x5(J,Q,$,Z,K){return Z+(J-Q)*(K-Z)/($-Q)}function g5(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function PQ(J,Q,$){return(1-$)*J+$*Q}function p5(J,Q,$,Z){return PQ(J,Q,1-Math.exp(-$*Z))}function l5(J,Q=1){return Q-Math.abs(SW(J,Q*2)-Q)}function m5(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function u5(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function d5(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function c5(J,Q){return J+Math.random()*(Q-J)}function n5(J){return J*(0.5-Math.random())}function s5(J){if(J!==void 0)iY=J;let Q=iY+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function i5(J){return J*CQ}function o5(J){return J*w7}function a5(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function r5(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function t5(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function e5(J,Q,$,Z,K){let{cos:W,sin:Y}=Math,X=W($/2),H=Y($/2),U=W((Q+Z)/2),N=Y((Q+Z)/2),F=W((Q-Z)/2),G=Y((Q-Z)/2),E=W((Z-Q)/2),O=Y((Z-Q)/2);switch(K){case"XYX":J.set(X*N,H*F,H*G,X*U);break;case"YZY":J.set(H*G,X*N,H*F,X*U);break;case"ZXZ":J.set(H*F,H*G,X*N,X*U);break;case"XZX":J.set(X*N,H*O,H*E,X*U);break;case"YXY":J.set(H*E,X*N,H*O,X*U);break;case"ZYZ":J.set(H*O,H*E,X*N,X*U);break;default:o0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+K)}}function X9(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:case Uint8ClampedArray:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function gJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var T9={DEG2RAD:CQ,RAD2DEG:w7,generateUUID:c8,clamp:UJ,euclideanModulo:SW,mapLinear:x5,inverseLerp:g5,lerp:PQ,damp:p5,pingpong:l5,smoothstep:m5,smootherstep:u5,randInt:d5,randFloat:c5,randFloatSpread:n5,seededRandom:s5,degToRad:i5,radToDeg:o5,isPowerOfTwo:a5,ceilPowerOfTwo:r5,floorPowerOfTwo:t5,setQuaternionFromProperEuler:e5,normalize:gJ,denormalize:X9};class N0{static{N0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=UJ(this.x,J.x,Q.x),this.y=UJ(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=UJ(this.x,J,Q),this.y=UJ(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(UJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(UJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=this.x-J.x,W=this.y-J.y;return this.x=K*$-W*Z+J.x,this.y=K*Z+W*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class PJ{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,K,W,Y){let X=$[Z+0],H=$[Z+1],U=$[Z+2],N=$[Z+3],F=K[W+0],G=K[W+1],E=K[W+2],O=K[W+3];if(N!==O||X!==F||H!==G||U!==E){let D=X*F+H*G+U*E+N*O;if(D<0)F=-F,G=-G,E=-E,O=-O,D=-D;let R=1-Y;if(D<0.9995){let q=Math.acos(D),C=Math.sin(q);R=Math.sin(R*q)/C,Y=Math.sin(Y*q)/C,X=X*R+F*Y,H=H*R+G*Y,U=U*R+E*Y,N=N*R+O*Y}else{X=X*R+F*Y,H=H*R+G*Y,U=U*R+E*Y,N=N*R+O*Y;let q=1/Math.sqrt(X*X+H*H+U*U+N*N);X*=q,H*=q,U*=q,N*=q}}J[Q]=X,J[Q+1]=H,J[Q+2]=U,J[Q+3]=N}static multiplyQuaternionsFlat(J,Q,$,Z,K,W){let Y=$[Z],X=$[Z+1],H=$[Z+2],U=$[Z+3],N=K[W],F=K[W+1],G=K[W+2],E=K[W+3];return J[Q]=Y*E+U*N+X*G-H*F,J[Q+1]=X*E+U*F+H*N-Y*G,J[Q+2]=H*E+U*G+Y*F-X*N,J[Q+3]=U*E-Y*N-X*F-H*G,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:K,_order:W}=J,Y=Math.cos,X=Math.sin,H=Y($/2),U=Y(Z/2),N=Y(K/2),F=X($/2),G=X(Z/2),E=X(K/2);switch(W){case"XYZ":this._x=F*U*N+H*G*E,this._y=H*G*N-F*U*E,this._z=H*U*E+F*G*N,this._w=H*U*N-F*G*E;break;case"YXZ":this._x=F*U*N+H*G*E,this._y=H*G*N-F*U*E,this._z=H*U*E-F*G*N,this._w=H*U*N+F*G*E;break;case"ZXY":this._x=F*U*N-H*G*E,this._y=H*G*N+F*U*E,this._z=H*U*E+F*G*N,this._w=H*U*N-F*G*E;break;case"ZYX":this._x=F*U*N-H*G*E,this._y=H*G*N+F*U*E,this._z=H*U*E-F*G*N,this._w=H*U*N+F*G*E;break;case"YZX":this._x=F*U*N+H*G*E,this._y=H*G*N+F*U*E,this._z=H*U*E-F*G*N,this._w=H*U*N-F*G*E;break;case"XZY":this._x=F*U*N-H*G*E,this._y=H*G*N-F*U*E,this._z=H*U*E+F*G*N,this._w=H*U*N+F*G*E;break;default:o0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],K=Q[8],W=Q[1],Y=Q[5],X=Q[9],H=Q[2],U=Q[6],N=Q[10],F=$+Y+N;if(F>0){let G=0.5/Math.sqrt(F+1);this._w=0.25/G,this._x=(U-X)*G,this._y=(K-H)*G,this._z=(W-Z)*G}else if($>Y&&$>N){let G=2*Math.sqrt(1+$-Y-N);this._w=(U-X)/G,this._x=0.25*G,this._y=(Z+W)/G,this._z=(K+H)/G}else if(Y>N){let G=2*Math.sqrt(1+Y-$-N);this._w=(K-H)/G,this._x=(Z+W)/G,this._y=0.25*G,this._z=(X+U)/G}else{let G=2*Math.sqrt(1+N-$-Y);this._w=(W-Z)/G,this._x=(K+H)/G,this._y=(X+U)/G,this._z=0.25*G}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(UJ(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,Y=Q._x,X=Q._y,H=Q._z,U=Q._w;return this._x=$*U+W*Y+Z*H-K*X,this._y=Z*U+W*X+K*Y-$*H,this._z=K*U+W*H+$*X-Z*Y,this._w=W*U-$*Y-Z*X-K*H,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,Y=this.dot(J);if(Y<0)$=-$,Z=-Z,K=-K,W=-W,Y=-Y;let X=1-Q;if(Y<0.9995){let H=Math.acos(Y),U=Math.sin(H);X=Math.sin(X*H)/U,Q=Math.sin(Q*H)/U,this._x=this._x*X+$*Q,this._y=this._y*X+Z*Q,this._z=this._z*X+K*Q,this._w=this._w*X+W*Q,this._onChangeCallback()}else this._x=this._x*X+$*Q,this._y=this._y*X+Z*Q,this._z=this._z*X+K*Q,this._w=this._w*X+W*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),K=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),K*Math.sin(Q),K*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S{static{S.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(oY.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(oY.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[3]*$+K[6]*Z,this.y=K[1]*Q+K[4]*$+K[7]*Z,this.z=K[2]*Q+K[5]*$+K[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements,W=1/(K[3]*Q+K[7]*$+K[11]*Z+K[15]);return this.x=(K[0]*Q+K[4]*$+K[8]*Z+K[12])*W,this.y=(K[1]*Q+K[5]*$+K[9]*Z+K[13])*W,this.z=(K[2]*Q+K[6]*$+K[10]*Z+K[14])*W,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,K=J.x,W=J.y,Y=J.z,X=J.w,H=2*(W*Z-Y*$),U=2*(Y*Q-K*Z),N=2*(K*$-W*Q);return this.x=Q+X*H+W*N-Y*U,this.y=$+X*U+Y*H-K*N,this.z=Z+X*N+K*U-W*H,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*Z,this.y=K[1]*Q+K[5]*$+K[9]*Z,this.z=K[2]*Q+K[6]*$+K[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=UJ(this.x,J.x,Q.x),this.y=UJ(this.y,J.y,Q.y),this.z=UJ(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=UJ(this.x,J,Q),this.y=UJ(this.y,J,Q),this.z=UJ(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(UJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:K}=J,W=Q.x,Y=Q.y,X=Q.z;return this.x=Z*X-K*Y,this.y=K*W-$*X,this.z=$*Y-Z*W,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return YK.copy(this).projectOnVector(J),this.sub(YK)}reflect(J){return this.sub(YK.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(UJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var YK=new S,oY=new PJ;class WJ{static{WJ.prototype.isMatrix3=!0}constructor(J,Q,$,Z,K,W,Y,X,H){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,Y,X,H)}set(J,Q,$,Z,K,W,Y,X,H){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=Y,U[3]=Q,U[4]=K,U[5]=X,U[6]=$,U[7]=W,U[8]=H,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],Y=$[3],X=$[6],H=$[1],U=$[4],N=$[7],F=$[2],G=$[5],E=$[8],O=Z[0],D=Z[3],R=Z[6],q=Z[1],C=Z[4],z=Z[7],L=Z[2],V=Z[5],P=Z[8];return K[0]=W*O+Y*q+X*L,K[3]=W*D+Y*C+X*V,K[6]=W*R+Y*z+X*P,K[1]=H*O+U*q+N*L,K[4]=H*D+U*C+N*V,K[7]=H*R+U*z+N*P,K[2]=F*O+G*q+E*L,K[5]=F*D+G*C+E*V,K[8]=F*R+G*z+E*P,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],Y=J[5],X=J[6],H=J[7],U=J[8];return Q*W*U-Q*Y*H-$*K*U+$*Y*X+Z*K*H-Z*W*X}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],Y=J[5],X=J[6],H=J[7],U=J[8],N=U*W-Y*H,F=Y*X-U*K,G=H*K-W*X,E=Q*N+$*F+Z*G;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);let O=1/E;return J[0]=N*O,J[1]=(Z*H-U*$)*O,J[2]=(Y*$-Z*W)*O,J[3]=F*O,J[4]=(U*Q-Z*X)*O,J[5]=(Z*K-Y*Q)*O,J[6]=G*O,J[7]=($*X-H*Q)*O,J[8]=(W*Q-$*K)*O,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,K,W,Y){let X=Math.cos(K),H=Math.sin(K);return this.set($*X,$*H,-$*(X*W+H*Y)+W+J,-Z*H,Z*X,-Z*(-H*W+X*Y)+Y+Q,0,0,1),this}scale(J,Q){return S7("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(XK.makeScale(J,Q)),this}rotate(J){return S7("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(XK.makeRotation(-J)),this}translate(J,Q){return S7("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(XK.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var XK=new WJ,aY=new WJ().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),rY=new WJ().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function JN(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(K,W,Y){if(this.enabled===!1||W===Y||!W||!Y)return K;if(this.spaces[W].transfer==="srgb")K.r=c9(K.r),K.g=c9(K.g),K.b=c9(K.b);if(this.spaces[W].primaries!==this.spaces[Y].primaries)K.applyMatrix3(this.spaces[W].toXYZ),K.applyMatrix3(this.spaces[Y].fromXYZ);if(this.spaces[Y].transfer==="srgb")K.r=_6(K.r),K.g=_6(K.g),K.b=_6(K.b);return K},workingToColorSpace:function(K,W){return this.convert(K,this.workingColorSpace,W)},colorSpaceToWorking:function(K,W){return this.convert(K,W,this.workingColorSpace)},getPrimaries:function(K){return this.spaces[K].primaries},getTransfer:function(K){if(K==="")return"linear";return this.spaces[K].transfer},getToneMappingMode:function(K){return this.spaces[K].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(K,W=this.workingColorSpace){return K.fromArray(this.spaces[W].luminanceCoefficients)},define:function(K){Object.assign(this.spaces,K)},_getMatrix:function(K,W,Y){return K.copy(this.spaces[W].toXYZ).multiply(this.spaces[Y].fromXYZ)},_getDrawingBufferColorSpace:function(K){return this.spaces[K].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(K=this.workingColorSpace){return this.spaces[K].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(K,W){return S7("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(K,W)},toWorkingColorSpace:function(K,W){return S7("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(K,W)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:aY,fromXYZ:rY,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:aY,fromXYZ:rY,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var NJ=JN();function c9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function _6(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var N6;class wW{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(N6===void 0)N6=S6("canvas");N6.width=J.width,N6.height=J.height;let Z=N6.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=N6}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=S6("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),K=Z.data;for(let W=0;W<K.length;W++)K[W]=c9(K[W]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(c9(Q[$]/255)*255);else Q[$]=c9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return o0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var QN=0;class lQ{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:QN++}),this.uuid=c8(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let K;if(Array.isArray(Z)){K=[];for(let W=0,Y=Z.length;W<Y;W++)if(Z[W].isDataTexture)K.push(HK(Z[W].image));else K.push(HK(Z[W]))}else K=HK(Z);$.url=K}if(!Q)J.images[this.uuid]=$;return $}}function HK(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return wW.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return o0("Texture: Unable to serialize Texture."),{}}var $N=0,UK=new S;class eJ extends F9{constructor(J=eJ.DEFAULT_IMAGE,Q=eJ.DEFAULT_MAPPING,$=1001,Z=1001,K=1006,W=1008,Y=1023,X=1009,H=eJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:$N++}),this.uuid=c8(),this.name="",this.source=new lQ(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=K,this.minFilter=W,this.anisotropy=H,this.format=Y,this.internalFormat=null,this.type=X,this.offset=new N0(0,0),this.repeat=new N0(1,1),this.center=new N0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new WJ,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(UK).x}get height(){return this.source.getSize(UK).y}get depth(){return this.source.getSize(UK).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){o0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){o0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}eJ.DEFAULT_IMAGE=null;eJ.DEFAULT_MAPPING=300;eJ.DEFAULT_ANISOTROPY=1;class pJ{static{pJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,Z=1){this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=this.w,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z+W[12]*K,this.y=W[1]*Q+W[5]*$+W[9]*Z+W[13]*K,this.z=W[2]*Q+W[6]*$+W[10]*Z+W[14]*K,this.w=W[3]*Q+W[7]*$+W[11]*Z+W[15]*K,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,K,W=0.01,Y=0.1,X=J.elements,H=X[0],U=X[4],N=X[8],F=X[1],G=X[5],E=X[9],O=X[2],D=X[6],R=X[10];if(Math.abs(U-F)<0.01&&Math.abs(N-O)<0.01&&Math.abs(E-D)<0.01){if(Math.abs(U+F)<0.1&&Math.abs(N+O)<0.1&&Math.abs(E+D)<0.1&&Math.abs(H+G+R-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let C=(H+1)/2,z=(G+1)/2,L=(R+1)/2,V=(U+F)/4,P=(N+O)/4,T=(E+D)/4;if(C>z&&C>L)if(C<0.01)$=0,Z=0.707106781,K=0.707106781;else $=Math.sqrt(C),Z=V/$,K=P/$;else if(z>L)if(z<0.01)$=0.707106781,Z=0,K=0.707106781;else Z=Math.sqrt(z),$=V/Z,K=T/Z;else if(L<0.01)$=0.707106781,Z=0.707106781,K=0;else K=Math.sqrt(L),$=P/K,Z=T/K;return this.set($,Z,K,Q),this}let q=Math.sqrt((D-E)*(D-E)+(N-O)*(N-O)+(F-U)*(F-U));if(Math.abs(q)<0.001)q=1;return this.x=(D-E)/q,this.y=(N-O)/q,this.z=(F-U)/q,this.w=Math.acos((H+G+R-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=UJ(this.x,J.x,Q.x),this.y=UJ(this.y,J.y,Q.y),this.z=UJ(this.z,J.z,Q.z),this.w=UJ(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=UJ(this.x,J,Q),this.y=UJ(this.y,J,Q),this.z=UJ(this.z,J,Q),this.w=UJ(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(UJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jW extends F9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new pJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new pJ(0,0,J,Q),this.textures=[];let Z={width:J,height:Q,depth:$.depth},K=new eJ(Z),W=$.count;for(let Y=0;Y<W;Y++)this.textures[Y]=K.clone(),this.textures[Y].isRenderTargetTexture=!0,this.textures[Y].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveColorBuffer=$.resolveColorBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this.storeMultisampledColorBuffer=$.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=$.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=$.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,K=this.textures.length;Z<K;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new lQ(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Q8 extends jW{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class LZ extends eJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class yW extends eJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class QJ{static{QJ.prototype.isMatrix4=!0}constructor(J,Q,$,Z,K,W,Y,X,H,U,N,F,G,E,O,D){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,Y,X,H,U,N,F,G,E,O,D)}set(J,Q,$,Z,K,W,Y,X,H,U,N,F,G,E,O,D){let R=this.elements;return R[0]=J,R[4]=Q,R[8]=$,R[12]=Z,R[1]=K,R[5]=W,R[9]=Y,R[13]=X,R[2]=H,R[6]=U,R[10]=N,R[14]=F,R[3]=G,R[7]=E,R[11]=O,R[15]=D,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new QJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/G6.setFromMatrixColumn(J,0).length(),K=1/G6.setFromMatrixColumn(J,1).length(),W=1/G6.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*K,Q[5]=$[5]*K,Q[6]=$[6]*K,Q[7]=0,Q[8]=$[8]*W,Q[9]=$[9]*W,Q[10]=$[10]*W,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z,W=Math.cos($),Y=Math.sin($),X=Math.cos(Z),H=Math.sin(Z),U=Math.cos(K),N=Math.sin(K);if(J.order==="XYZ"){let F=W*U,G=W*N,E=Y*U,O=Y*N;Q[0]=X*U,Q[4]=-X*N,Q[8]=H,Q[1]=G+E*H,Q[5]=F-O*H,Q[9]=-Y*X,Q[2]=O-F*H,Q[6]=E+G*H,Q[10]=W*X}else if(J.order==="YXZ"){let F=X*U,G=X*N,E=H*U,O=H*N;Q[0]=F+O*Y,Q[4]=E*Y-G,Q[8]=W*H,Q[1]=W*N,Q[5]=W*U,Q[9]=-Y,Q[2]=G*Y-E,Q[6]=O+F*Y,Q[10]=W*X}else if(J.order==="ZXY"){let F=X*U,G=X*N,E=H*U,O=H*N;Q[0]=F-O*Y,Q[4]=-W*N,Q[8]=E+G*Y,Q[1]=G+E*Y,Q[5]=W*U,Q[9]=O-F*Y,Q[2]=-W*H,Q[6]=Y,Q[10]=W*X}else if(J.order==="ZYX"){let F=W*U,G=W*N,E=Y*U,O=Y*N;Q[0]=X*U,Q[4]=E*H-G,Q[8]=F*H+O,Q[1]=X*N,Q[5]=O*H+F,Q[9]=G*H-E,Q[2]=-H,Q[6]=Y*X,Q[10]=W*X}else if(J.order==="YZX"){let F=W*X,G=W*H,E=Y*X,O=Y*H;Q[0]=X*U,Q[4]=O-F*N,Q[8]=E*N+G,Q[1]=N,Q[5]=W*U,Q[9]=-Y*U,Q[2]=-H*U,Q[6]=G*N+E,Q[10]=F-O*N}else if(J.order==="XZY"){let F=W*X,G=W*H,E=Y*X,O=Y*H;Q[0]=X*U,Q[4]=-N,Q[8]=H*U,Q[1]=F*N+O,Q[5]=W*U,Q[9]=G*N-E,Q[2]=E*N-G,Q[6]=Y*U,Q[10]=O*N+F}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(ZN,J,KN)}lookAt(J,Q,$){let Z=this.elements;if(f8.subVectors(J,Q),f8.lengthSq()===0)f8.z=1;if(f8.normalize(),Q7.crossVectors($,f8),Q7.lengthSq()===0){if(Math.abs($.z)===1)f8.x+=0.0001;else f8.z+=0.0001;f8.normalize(),Q7.crossVectors($,f8)}return Q7.normalize(),P$.crossVectors(f8,Q7),Z[0]=Q7.x,Z[4]=P$.x,Z[8]=f8.x,Z[1]=Q7.y,Z[5]=P$.y,Z[9]=f8.y,Z[2]=Q7.z,Z[6]=P$.z,Z[10]=f8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],Y=$[4],X=$[8],H=$[12],U=$[1],N=$[5],F=$[9],G=$[13],E=$[2],O=$[6],D=$[10],R=$[14],q=$[3],C=$[7],z=$[11],L=$[15],V=Z[0],P=Z[4],T=Z[8],B=Z[12],I=Z[1],l=Z[5],j=Z[9],x=Z[13],t=Z[2],y=Z[6],i=Z[10],s=Z[14],g=Z[3],H0=Z[7],a=Z[11],X0=Z[15];return K[0]=W*V+Y*I+X*t+H*g,K[4]=W*P+Y*l+X*y+H*H0,K[8]=W*T+Y*j+X*i+H*a,K[12]=W*B+Y*x+X*s+H*X0,K[1]=U*V+N*I+F*t+G*g,K[5]=U*P+N*l+F*y+G*H0,K[9]=U*T+N*j+F*i+G*a,K[13]=U*B+N*x+F*s+G*X0,K[2]=E*V+O*I+D*t+R*g,K[6]=E*P+O*l+D*y+R*H0,K[10]=E*T+O*j+D*i+R*a,K[14]=E*B+O*x+D*s+R*X0,K[3]=q*V+C*I+z*t+L*g,K[7]=q*P+C*l+z*y+L*H0,K[11]=q*T+C*j+z*i+L*a,K[15]=q*B+C*x+z*s+L*X0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[12],W=J[1],Y=J[5],X=J[9],H=J[13],U=J[2],N=J[6],F=J[10],G=J[14],E=J[3],O=J[7],D=J[11],R=J[15],q=X*G-H*F,C=Y*G-H*N,z=Y*F-X*N,L=W*G-H*U,V=W*F-X*U,P=W*N-Y*U;return Q*(O*q-D*C+R*z)-$*(E*q-D*L+R*V)+Z*(E*C-O*L+R*P)-K*(E*z-O*V+D*P)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[1],W=J[5],Y=J[9],X=J[2],H=J[6],U=J[10];return Q*(W*U-Y*H)-$*(K*U-Y*X)+Z*(K*H-W*X)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],Y=J[5],X=J[6],H=J[7],U=J[8],N=J[9],F=J[10],G=J[11],E=J[12],O=J[13],D=J[14],R=J[15],q=Q*Y-$*W,C=Q*X-Z*W,z=Q*H-K*W,L=$*X-Z*Y,V=$*H-K*Y,P=Z*H-K*X,T=U*O-N*E,B=U*D-F*E,I=U*R-G*E,l=N*D-F*O,j=N*R-G*O,x=F*R-G*D,t=q*x-C*j+z*l+L*I-V*B+P*T;if(t===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let y=1/t;return J[0]=(Y*x-X*j+H*l)*y,J[1]=(Z*j-$*x-K*l)*y,J[2]=(O*P-D*V+R*L)*y,J[3]=(F*V-N*P-G*L)*y,J[4]=(X*I-W*x-H*B)*y,J[5]=(Q*x-Z*I+K*B)*y,J[6]=(D*z-E*P-R*C)*y,J[7]=(U*P-F*z+G*C)*y,J[8]=(W*j-Y*I+H*T)*y,J[9]=($*I-Q*j-K*T)*y,J[10]=(E*V-O*z+R*q)*y,J[11]=(N*z-U*V-G*q)*y,J[12]=(Y*B-W*l-X*T)*y,J[13]=(Q*l-$*B+Z*T)*y,J[14]=(O*C-E*L-D*q)*y,J[15]=(U*L-N*C+F*q)*y,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=K,Q[1]*=$,Q[5]*=Z,Q[9]*=K,Q[2]*=$,Q[6]*=Z,Q[10]*=K,Q[3]*=$,Q[7]*=Z,Q[11]*=K,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=1-$,W=J.x,Y=J.y,X=J.z,H=K*W,U=K*Y;return this.set(H*W+$,H*Y-Z*X,H*X+Z*Y,0,H*Y+Z*X,U*Y+$,U*X-Z*W,0,H*X-Z*Y,U*X+Z*W,K*X*X+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,K,W){return this.set(1,$,K,0,J,1,W,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,K=Q._x,W=Q._y,Y=Q._z,X=Q._w,H=K+K,U=W+W,N=Y+Y,F=K*H,G=K*U,E=K*N,O=W*U,D=W*N,R=Y*N,q=X*H,C=X*U,z=X*N,L=$.x,V=$.y,P=$.z;return Z[0]=(1-(O+R))*L,Z[1]=(G+z)*L,Z[2]=(E-C)*L,Z[3]=0,Z[4]=(G-z)*V,Z[5]=(1-(F+R))*V,Z[6]=(D+q)*V,Z[7]=0,Z[8]=(E+C)*P,Z[9]=(D-q)*P,Z[10]=(1-(F+O))*P,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let K=this.determinantAffine();if(K===0)return $.set(1,1,1),Q.identity(),this;let W=G6.set(Z[0],Z[1],Z[2]).length(),Y=G6.set(Z[4],Z[5],Z[6]).length(),X=G6.set(Z[8],Z[9],Z[10]).length();if(K<0)W=-W;K9.copy(this);let H=1/W,U=1/Y,N=1/X;return K9.elements[0]*=H,K9.elements[1]*=H,K9.elements[2]*=H,K9.elements[4]*=U,K9.elements[5]*=U,K9.elements[6]*=U,K9.elements[8]*=N,K9.elements[9]*=N,K9.elements[10]*=N,Q.setFromRotationMatrix(K9),$.x=W,$.y=Y,$.z=X,this}makePerspective(J,Q,$,Z,K,W,Y=2000,X=!1){let H=this.elements,U=2*K/(Q-J),N=2*K/($-Z),F=(Q+J)/(Q-J),G=($+Z)/($-Z),E,O;if(X)E=K/(W-K),O=W*K/(W-K);else if(Y===2000)E=-(W+K)/(W-K),O=-2*W*K/(W-K);else if(Y===2001)E=-W/(W-K),O=-W*K/(W-K);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+Y);return H[0]=U,H[4]=0,H[8]=F,H[12]=0,H[1]=0,H[5]=N,H[9]=G,H[13]=0,H[2]=0,H[6]=0,H[10]=E,H[14]=O,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,Q,$,Z,K,W,Y=2000,X=!1){let H=this.elements,U=2/(Q-J),N=2/($-Z),F=-(Q+J)/(Q-J),G=-($+Z)/($-Z),E,O;if(X)E=1/(W-K),O=W/(W-K);else if(Y===2000)E=-2/(W-K),O=-(W+K)/(W-K);else if(Y===2001)E=-1/(W-K),O=-K/(W-K);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+Y);return H[0]=U,H[4]=0,H[8]=0,H[12]=F,H[1]=0,H[5]=N,H[9]=0,H[13]=G,H[2]=0,H[6]=0,H[10]=E,H[14]=O,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var G6=new S,K9=new QJ,ZN=new S(0,0,0),KN=new S(1,1,1),Q7=new S,P$=new S,f8=new S,tY=new QJ,eY=new PJ;class H9{constructor(J=0,Q=0,$=0,Z=H9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,K=Z[0],W=Z[4],Y=Z[8],X=Z[1],H=Z[5],U=Z[9],N=Z[2],F=Z[6],G=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(UJ(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,G),this._z=Math.atan2(-W,K);else this._x=Math.atan2(F,H),this._z=0;break;case"YXZ":if(this._x=Math.asin(-UJ(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(Y,G),this._z=Math.atan2(X,H);else this._y=Math.atan2(-N,K),this._z=0;break;case"ZXY":if(this._x=Math.asin(UJ(F,-1,1)),Math.abs(F)<0.9999999)this._y=Math.atan2(-N,G),this._z=Math.atan2(-W,H);else this._y=0,this._z=Math.atan2(X,K);break;case"ZYX":if(this._y=Math.asin(-UJ(N,-1,1)),Math.abs(N)<0.9999999)this._x=Math.atan2(F,G),this._z=Math.atan2(X,K);else this._x=0,this._z=Math.atan2(-W,H);break;case"YZX":if(this._z=Math.asin(UJ(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,H),this._y=Math.atan2(-N,K);else this._x=0,this._y=Math.atan2(Y,G);break;case"XZY":if(this._z=Math.asin(-UJ(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(F,H),this._y=Math.atan2(Y,K);else this._x=Math.atan2(-U,G),this._y=0;break;default:o0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return tY.makeRotationFromQuaternion(J),this.setFromRotationMatrix(tY,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return eY.setFromEuler(this),this.setFromQuaternion(eY,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}H9.DEFAULT_ORDER="XYZ";class VZ{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var WN=0,JX=new S,F6=new PJ,g9=new QJ,I$=new S,GQ=new S,YN=new S,XN=new PJ,QX=new S(1,0,0),$X=new S(0,1,0),ZX=new S(0,0,1),KX={type:"added"},HN={type:"removed"},E6={type:"childadded",child:null},NK={type:"childremoved",child:null};class SJ extends F9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:WN++}),this.uuid=c8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=SJ.DEFAULT_UP.clone();let J=new S,Q=new H9,$=new PJ,Z=new S(1,1,1);function K(){$.setFromEuler(Q,!1)}function W(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(K),$._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new QJ},normalMatrix:{value:new WJ}}),this.matrix=new QJ,this.matrixWorld=new QJ,this.matrixAutoUpdate=SJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=SJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new VZ,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return F6.setFromAxisAngle(J,Q),this.quaternion.multiply(F6),this}rotateOnWorldAxis(J,Q){return F6.setFromAxisAngle(J,Q),this.quaternion.premultiply(F6),this}rotateX(J){return this.rotateOnAxis(QX,J)}rotateY(J){return this.rotateOnAxis($X,J)}rotateZ(J){return this.rotateOnAxis(ZX,J)}translateOnAxis(J,Q){return JX.copy(J).applyQuaternion(this.quaternion),this.position.add(JX.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(QX,J)}translateY(J){return this.translateOnAxis($X,J)}translateZ(J){return this.translateOnAxis(ZX,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(g9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)I$.copy(J);else I$.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),GQ.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)g9.lookAt(GQ,I$,this.up);else g9.lookAt(I$,GQ,this.up);if(this.quaternion.setFromRotationMatrix(g9),Z)g9.extractRotation(Z.matrixWorld),F6.setFromRotationMatrix(g9),this.quaternion.premultiply(F6.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return $J("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(KX),E6.child=J,this.dispatchEvent(E6),E6.child=null;else $J("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(HN),NK.child=J,this.dispatchEvent(NK),NK.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),g9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),g9.multiply(J.parent.matrixWorld);return J.applyMatrix4(g9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(KX),E6.child=J,this.dispatchEvent(E6),E6.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let W=this.children[$].getObjectByProperty(J,Q);if(W!==void 0)return W}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let K=0,W=Z.length;K<W;K++)Z[K].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(GQ,J,YN),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(GQ,XN,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:Z}=J,K=this.matrix.elements;K[12]+=Q-K[0]*Q-K[4]*$-K[8]*Z,K[13]+=$-K[1]*Q-K[5]*$-K[9]*Z,K[14]+=Z-K[2]*Q-K[6]*$-K[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let K=this.children;for(let W=0,Y=K.length;W<Y;W++)K[W].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,Z.name=this.name,Z.castShadow=this.castShadow,Z.receiveShadow=this.receiveShadow,Z.visible=this.visible,Z.frustumCulled=this.frustumCulled,Z.renderOrder=this.renderOrder,Z.static=this.static,Z.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((Y)=>({...Y,boundingBox:Y.boundingBox?Y.boundingBox.toJSON():void 0,boundingSphere:Y.boundingSphere?Y.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((Y)=>({...Y})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function K(Y,X){if(Y[X.uuid]===void 0)Y[X.uuid]=X.toJSON(J);return X.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=K(J.geometries,this.geometry);let Y=this.geometry.parameters;if(Y!==void 0&&Y.shapes!==void 0){let X=Y.shapes;if(Array.isArray(X))for(let H=0,U=X.length;H<U;H++){let N=X[H];K(J.shapes,N)}else K(J.shapes,X)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)K(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let Y=[];for(let X=0,H=this.material.length;X<H;X++)Y.push(K(J.materials,this.material[X]));Z.material=Y}else Z.material=K(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let Y=0;Y<this.children.length;Y++)Z.children.push(this.children[Y].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let Y=0;Y<this.animations.length;Y++){let X=this.animations[Y];Z.animations.push(K(J.animations,X))}}if(Q){let Y=W(J.geometries),X=W(J.materials),H=W(J.textures),U=W(J.images),N=W(J.shapes),F=W(J.skeletons),G=W(J.animations),E=W(J.nodes);if(Y.length>0)$.geometries=Y;if(X.length>0)$.materials=X;if(H.length>0)$.textures=H;if(U.length>0)$.images=U;if(N.length>0)$.shapes=N;if(F.length>0)$.skeletons=F;if(G.length>0)$.animations=G;if(E.length>0)$.nodes=E}return $.object=Z,$;function W(Y){let X=[];for(let H in Y){let U=Y[H];delete U.metadata,X.push(U)}return X}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}SJ.DEFAULT_UP=new S(0,1,0);SJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;SJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class TJ extends SJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var UN={type:"move"};class mQ{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new TJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new TJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new TJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,K=null,W=null,Y=this._targetRay,X=this._grip,H=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(H&&J.hand){W=!0;for(let O of J.hand.values()){let D=Q.getJointPose(O,$),R=this._getHandJoint(H,O);if(D!==null)R.matrix.fromArray(D.transform.matrix),R.matrix.decompose(R.position,R.rotation,R.scale),R.matrixWorldNeedsUpdate=!0,R.jointRadius=D.radius;R.visible=D!==null}let U=H.joints["index-finger-tip"],N=H.joints["thumb-tip"],F=U.position.distanceTo(N.position),G=0.02,E=0.005;if(H.inputState.pinching&&F>G+E)H.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!H.inputState.pinching&&F<=G-E)H.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(X!==null&&J.gripSpace){if(K=Q.getPose(J.gripSpace,$),K!==null){if(X.matrix.fromArray(K.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,K.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(K.linearVelocity);else X.hasLinearVelocity=!1;if(K.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(K.angularVelocity);else X.hasAngularVelocity=!1;if(X.eventsEnabled)X.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(Y!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&K!==null)Z=K;if(Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;this.dispatchEvent(UN)}}}if(Y!==null)Y.visible=Z!==null;if(X!==null)X.visible=K!==null;if(H!==null)H.visible=W!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new TJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var hH={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$7={h:0,s:0,l:0},z$={h:0,s:0,l:0};function GK(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class h0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,NJ.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=NJ.workingColorSpace){return this.r=J,this.g=Q,this.b=$,NJ.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=NJ.workingColorSpace){if(J=SW(J,1),Q=UJ(Q,0,1),$=UJ($,0,1),Q===0)this.r=this.g=this.b=$;else{let K=$<=0.5?$*(1+Q):$+Q-$*Q,W=2*$-K;this.r=GK(W,K,J+0.3333333333333333),this.g=GK(W,K,J),this.b=GK(W,K,J-0.3333333333333333)}return NJ.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(K){if(K===void 0)return;if(parseFloat(K)<1)o0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let K,W=Z[1],Y=Z[2];switch(W){case"rgb":case"rgba":if(K=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(K[4]),this.setRGB(Math.min(255,parseInt(K[1],10))/255,Math.min(255,parseInt(K[2],10))/255,Math.min(255,parseInt(K[3],10))/255,Q);if(K=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(K[4]),this.setRGB(Math.min(100,parseInt(K[1],10))/100,Math.min(100,parseInt(K[2],10))/100,Math.min(100,parseInt(K[3],10))/100,Q);break;case"hsl":case"hsla":if(K=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(K[4]),this.setHSL(parseFloat(K[1])/360,parseFloat(K[2])/100,parseFloat(K[3])/100,Q);break;default:o0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let K=Z[1],W=K.length;if(W===3)return this.setRGB(parseInt(K.charAt(0),16)/15,parseInt(K.charAt(1),16)/15,parseInt(K.charAt(2),16)/15,Q);else if(W===6)return this.setHex(parseInt(K,16),Q);else o0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=hH[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else o0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=c9(J.r),this.g=c9(J.g),this.b=c9(J.b),this}copyLinearToSRGB(J){return this.r=_6(J.r),this.g=_6(J.g),this.b=_6(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return NJ.workingToColorSpace(k8.copy(this),J),Math.round(UJ(k8.r*255,0,255))*65536+Math.round(UJ(k8.g*255,0,255))*256+Math.round(UJ(k8.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=NJ.workingColorSpace){NJ.workingToColorSpace(k8.copy(this),Q);let{r:$,g:Z,b:K}=k8,W=Math.max($,Z,K),Y=Math.min($,Z,K),X,H,U=(Y+W)/2;if(Y===W)X=0,H=0;else{let N=W-Y;switch(H=U<=0.5?N/(W+Y):N/(2-W-Y),W){case $:X=(Z-K)/N+(Z<K?6:0);break;case Z:X=(K-$)/N+2;break;case K:X=($-Z)/N+4;break}X/=6}return J.h=X,J.s=H,J.l=U,J}getRGB(J,Q=NJ.workingColorSpace){return NJ.workingToColorSpace(k8.copy(this),Q),J.r=k8.r,J.g=k8.g,J.b=k8.b,J}getStyle(J="srgb"){NJ.workingToColorSpace(k8.copy(this),J);let{r:Q,g:$,b:Z}=k8;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL($7),this.setHSL($7.h+J,$7.s+Q,$7.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL($7),J.getHSL(z$);let $=PQ($7.h,z$.h,Q),Z=PQ($7.s,z$.s,Q),K=PQ($7.l,z$.l,Q);return this.setHSL($,Z,K),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,K=J.elements;return this.r=K[0]*Q+K[3]*$+K[6]*Z,this.g=K[1]*Q+K[4]*$+K[7]*Z,this.b=K[2]*Q+K[5]*$+K[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var k8=new h0;h0.NAMES=hH;class l7{constructor(J,Q=0.00025){this.isFogExp2=!0,this.name="",this.color=new h0(J),this.density=Q}clone(){return new l7(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class l6 extends SJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new H9,this.environmentIntensity=1,this.environmentRotation=new H9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var W9=new S,p9=new S,FK=new S,l9=new S,q6=new S,O6=new S,WX=new S,EK=new S,qK=new S,OK=new S,RK=new pJ,LK=new pJ,VK=new pJ;class b8{constructor(J=new S,Q=new S,$=new S){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),W9.subVectors(J,Q),Z.cross(W9);let K=Z.lengthSq();if(K>0)return Z.multiplyScalar(1/Math.sqrt(K));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,K){W9.subVectors(Z,Q),p9.subVectors($,Q),FK.subVectors(J,Q);let W=W9.dot(W9),Y=W9.dot(p9),X=W9.dot(FK),H=p9.dot(p9),U=p9.dot(FK),N=W*H-Y*Y;if(N===0)return K.set(0,0,0),null;let F=1/N,G=(H*X-Y*U)*F,E=(W*U-Y*X)*F;return K.set(1-G-E,E,G)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,l9)===null)return!1;return l9.x>=0&&l9.y>=0&&l9.x+l9.y<=1}static getInterpolation(J,Q,$,Z,K,W,Y,X){if(this.getBarycoord(J,Q,$,Z,l9)===null){if(X.x=0,X.y=0,"z"in X)X.z=0;if("w"in X)X.w=0;return null}return X.setScalar(0),X.addScaledVector(K,l9.x),X.addScaledVector(W,l9.y),X.addScaledVector(Y,l9.z),X}static getInterpolatedAttribute(J,Q,$,Z,K,W){return RK.setScalar(0),LK.setScalar(0),VK.setScalar(0),RK.fromBufferAttribute(J,Q),LK.fromBufferAttribute(J,$),VK.fromBufferAttribute(J,Z),W.setScalar(0),W.addScaledVector(RK,K.x),W.addScaledVector(LK,K.y),W.addScaledVector(VK,K.z),W}static isFrontFacing(J,Q,$,Z){return W9.subVectors($,Q),p9.subVectors(J,Q),W9.cross(p9).dot(Z)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return W9.subVectors(this.c,this.b),p9.subVectors(this.a,this.b),W9.cross(p9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return b8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return b8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,K){return b8.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,K)}containsPoint(J){return b8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return b8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,K=this.c,W,Y;q6.subVectors(Z,$),O6.subVectors(K,$),EK.subVectors(J,$);let X=q6.dot(EK),H=O6.dot(EK);if(X<=0&&H<=0)return Q.copy($);qK.subVectors(J,Z);let U=q6.dot(qK),N=O6.dot(qK);if(U>=0&&N<=U)return Q.copy(Z);let F=X*N-U*H;if(F<=0&&X>=0&&U<=0)return W=X/(X-U),Q.copy($).addScaledVector(q6,W);OK.subVectors(J,K);let G=q6.dot(OK),E=O6.dot(OK);if(E>=0&&G<=E)return Q.copy(K);let O=G*H-X*E;if(O<=0&&H>=0&&E<=0)return Y=H/(H-E),Q.copy($).addScaledVector(O6,Y);let D=U*E-G*N;if(D<=0&&N-U>=0&&G-E>=0)return WX.subVectors(K,Z),Y=(N-U)/(N-U+(G-E)),Q.copy(Z).addScaledVector(WX,Y);let R=1/(D+O+F);return W=O*R,Y=F*R,Q.copy($).addScaledVector(q6,W).addScaledVector(O6,Y)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class A8{constructor(J=new S(1/0,1/0,1/0),Q=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(Y9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(Y9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=Y9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let K=$.getAttribute("position");if(Q===!0&&K!==void 0&&J.isInstancedMesh!==!0)for(let W=0,Y=K.count;W<Y;W++){if(J.isMesh===!0)J.getVertexPosition(W,Y9);else Y9.fromBufferAttribute(K,W);Y9.applyMatrix4(J.matrixWorld),this.expandByPoint(Y9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();A$.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();A$.copy($.boundingBox)}A$.applyMatrix4(J.matrixWorld),this.union(A$)}}let Z=J.children;for(let K=0,W=Z.length;K<W;K++)this.expandByObject(Z[K],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,Y9),Y9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(FQ),_$.subVectors(this.max,FQ),R6.subVectors(J.a,FQ),L6.subVectors(J.b,FQ),V6.subVectors(J.c,FQ),Z7.subVectors(L6,R6),K7.subVectors(V6,L6),z7.subVectors(R6,V6);let Q=[0,-Z7.z,Z7.y,0,-K7.z,K7.y,0,-z7.z,z7.y,Z7.z,0,-Z7.x,K7.z,0,-K7.x,z7.z,0,-z7.x,-Z7.y,Z7.x,0,-K7.y,K7.x,0,-z7.y,z7.x,0];if(!DK(Q,R6,L6,V6,_$))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!DK(Q,R6,L6,V6,_$))return!1;return T$.crossVectors(Z7,K7),Q=[T$.x,T$.y,T$.z],DK(Q,R6,L6,V6,_$)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,Y9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(Y9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return m9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),m9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),m9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),m9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),m9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),m9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),m9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),m9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(m9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var m9=[new S,new S,new S,new S,new S,new S,new S,new S],Y9=new S,A$=new A8,R6=new S,L6=new S,V6=new S,Z7=new S,K7=new S,z7=new S,FQ=new S,_$=new S,T$=new S,A7=new S;function DK(J,Q,$,Z,K){for(let W=0,Y=J.length-3;W<=Y;W+=3){A7.fromArray(J,W);let X=K.x*Math.abs(A7.x)+K.y*Math.abs(A7.y)+K.z*Math.abs(A7.z),H=Q.dot(A7),U=$.dot(A7),N=Z.dot(A7);if(Math.max(-Math.max(H,U,N),Math.min(H,U,N))>X)return!1}return!0}var W8=new S,S$=new N0,NN=0;class tJ extends F9{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:NN++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,K=this.itemSize;Z<K;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)S$.fromBufferAttribute(this,Q),S$.applyMatrix3(J),this.setXY(Q,S$.x,S$.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)W8.fromBufferAttribute(this,Q),W8.applyMatrix3(J),this.setXYZ(Q,W8.x,W8.y,W8.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)W8.fromBufferAttribute(this,Q),W8.applyMatrix4(J),this.setXYZ(Q,W8.x,W8.y,W8.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)W8.fromBufferAttribute(this,Q),W8.applyNormalMatrix(J),this.setXYZ(Q,W8.x,W8.y,W8.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)W8.fromBufferAttribute(this,Q),W8.transformDirection(J),this.setXYZ(Q,W8.x,W8.y,W8.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=X9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=gJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=X9(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=gJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=X9(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=gJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=X9(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=gJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=X9(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=gJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=gJ(Q,this.array),$=gJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=gJ(Q,this.array),$=gJ($,this.array),Z=gJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,K){if(J*=this.itemSize,this.normalized)Q=gJ(Q,this.array),$=gJ($,this.array),Z=gJ(Z,this.array),K=gJ(K,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=K,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}}class DZ extends tJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class BZ extends tJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class GJ extends tJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var GN=new A8,EQ=new S,BK=new S;class g8{constructor(J=new S,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else GN.setFromPoints(J).getCenter($);let Z=0;for(let K=0,W=J.length;K<W;K++)Z=Math.max(Z,$.distanceToSquared(J[K]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;EQ.subVectors(J,this.center);let Q=EQ.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(EQ,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else BK.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(EQ.copy(J.center).add(BK)),this.expandByPoint(EQ.copy(J.center).sub(BK));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var FN=0,u8=new QJ,kK=new SJ,D6=new S,h8=new A8,qQ=new A8,E8=new S;class mJ extends F9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FN++}),this.uuid=c8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((h5(J))?BZ:DZ)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let K=new WJ().getNormalMatrix(J);$.applyNormalMatrix(K),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return u8.makeRotationFromQuaternion(J),this.applyMatrix4(u8),this}rotateX(J){return u8.makeRotationX(J),this.applyMatrix4(u8),this}rotateY(J){return u8.makeRotationY(J),this.applyMatrix4(u8),this}rotateZ(J){return u8.makeRotationZ(J),this.applyMatrix4(u8),this}translate(J,Q,$){return u8.makeTranslation(J,Q,$),this.applyMatrix4(u8),this}scale(J,Q,$){return u8.makeScale(J,Q,$),this.applyMatrix4(u8),this}lookAt(J){return kK.lookAt(J),kK.updateMatrix(),this.applyMatrix4(kK.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(D6).negate(),this.translate(D6.x,D6.y,D6.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];$.push(W.x,W.y,W.z||0)}this.setAttribute("position",new GJ($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let K=J[Z];Q.setXYZ(Z,K.x,K.y,K.z||0)}if(J.length>Q.count)o0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new A8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){$J("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let K=Q[$];if(h8.setFromBufferAttribute(K),this.morphTargetsRelative)E8.addVectors(this.boundingBox.min,h8.min),this.boundingBox.expandByPoint(E8),E8.addVectors(this.boundingBox.max,h8.max),this.boundingBox.expandByPoint(E8);else this.boundingBox.expandByPoint(h8.min),this.boundingBox.expandByPoint(h8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))$J('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new g8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){$J("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(J){let $=this.boundingSphere.center;if(h8.setFromBufferAttribute(J),Q)for(let K=0,W=Q.length;K<W;K++){let Y=Q[K];if(qQ.setFromBufferAttribute(Y),this.morphTargetsRelative)E8.addVectors(h8.min,qQ.min),h8.expandByPoint(E8),E8.addVectors(h8.max,qQ.max),h8.expandByPoint(E8);else h8.expandByPoint(qQ.min),h8.expandByPoint(qQ.max)}h8.getCenter($);let Z=0;for(let K=0,W=J.count;K<W;K++)E8.fromBufferAttribute(J,K),Z=Math.max(Z,$.distanceToSquared(E8));if(Q)for(let K=0,W=Q.length;K<W;K++){let Y=Q[K],X=this.morphTargetsRelative;for(let H=0,U=Y.count;H<U;H++){if(E8.fromBufferAttribute(Y,H),X)D6.fromBufferAttribute(J,H),E8.add(D6);Z=Math.max(Z,$.distanceToSquared(E8))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))$J('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){$J("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:K}=Q,W=this.getAttribute("tangent");if(W===void 0||W.count!==$.count)W=new tJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",W);let Y=[],X=[];for(let T=0;T<$.count;T++)Y[T]=new S,X[T]=new S;let H=new S,U=new S,N=new S,F=new N0,G=new N0,E=new N0,O=new S,D=new S;function R(T,B,I){H.fromBufferAttribute($,T),U.fromBufferAttribute($,B),N.fromBufferAttribute($,I),F.fromBufferAttribute(K,T),G.fromBufferAttribute(K,B),E.fromBufferAttribute(K,I),U.sub(H),N.sub(H),G.sub(F),E.sub(F);let l=1/(G.x*E.y-E.x*G.y);if(!isFinite(l))return;O.copy(U).multiplyScalar(E.y).addScaledVector(N,-G.y).multiplyScalar(l),D.copy(N).multiplyScalar(G.x).addScaledVector(U,-E.x).multiplyScalar(l),Y[T].add(O),Y[B].add(O),Y[I].add(O),X[T].add(D),X[B].add(D),X[I].add(D)}let q=this.groups;if(q.length===0)q=[{start:0,count:J.count}];for(let T=0,B=q.length;T<B;++T){let I=q[T],l=I.start,j=I.count;for(let x=l,t=l+j;x<t;x+=3)R(J.getX(x+0),J.getX(x+1),J.getX(x+2))}let C=new S,z=new S,L=new S,V=new S;function P(T){L.fromBufferAttribute(Z,T),V.copy(L);let B=Y[T];C.copy(B),C.sub(L.multiplyScalar(L.dot(B))).normalize(),z.crossVectors(V,B);let l=z.dot(X[T])<0?-1:1;W.setXYZW(T,C.x,C.y,C.z,l)}for(let T=0,B=q.length;T<B;++T){let I=q[T],l=I.start,j=I.count;for(let x=l,t=l+j;x<t;x+=3)P(J.getX(x+0)),P(J.getX(x+1)),P(J.getX(x+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new tJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let F=0,G=$.count;F<G;F++)$.setXYZ(F,0,0,0);let Z=new S,K=new S,W=new S,Y=new S,X=new S,H=new S,U=new S,N=new S;if(J)for(let F=0,G=J.count;F<G;F+=3){let E=J.getX(F+0),O=J.getX(F+1),D=J.getX(F+2);Z.fromBufferAttribute(Q,E),K.fromBufferAttribute(Q,O),W.fromBufferAttribute(Q,D),U.subVectors(W,K),N.subVectors(Z,K),U.cross(N),Y.fromBufferAttribute($,E),X.fromBufferAttribute($,O),H.fromBufferAttribute($,D),Y.add(U),X.add(U),H.add(U),$.setXYZ(E,Y.x,Y.y,Y.z),$.setXYZ(O,X.x,X.y,X.z),$.setXYZ(D,H.x,H.y,H.z)}else for(let F=0,G=Q.count;F<G;F+=3)Z.fromBufferAttribute(Q,F+0),K.fromBufferAttribute(Q,F+1),W.fromBufferAttribute(Q,F+2),U.subVectors(W,K),N.subVectors(Z,K),U.cross(N),$.setXYZ(F+0,U.x,U.y,U.z),$.setXYZ(F+1,U.x,U.y,U.z),$.setXYZ(F+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)E8.fromBufferAttribute(J,Q),E8.normalize(),J.setXYZ(Q,E8.x,E8.y,E8.z)}toNonIndexed(){function J(Y,X){let{array:H,itemSize:U,normalized:N}=Y,F=new H.constructor(X.length*U),G=0,E=0;for(let O=0,D=X.length;O<D;O++){if(Y.isInterleavedBufferAttribute)G=X[O]*Y.data.stride+Y.offset;else G=X[O]*U;for(let R=0;R<U;R++)F[E++]=H[G++]}return new tJ(F,U,N)}if(this.index===null)return o0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new mJ,$=this.index.array,Z=this.attributes;for(let Y in Z){let X=Z[Y],H=J(X,$);Q.setAttribute(Y,H)}let K=this.morphAttributes;for(let Y in K){let X=[],H=K[Y];for(let U=0,N=H.length;U<N;U++){let F=H[U],G=J(F,$);X.push(G)}Q.morphAttributes[Y]=X}Q.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let Y=0,X=W.length;Y<X;Y++){let H=W[Y];Q.addGroup(H.start,H.count,H.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let X=this.parameters;for(let H in X)if(X[H]!==void 0)J[H]=X[H];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let X in $){let H=$[X];J.data.attributes[X]=H.toJSON(J.data)}let Z={},K=!1;for(let X in this.morphAttributes){let H=this.morphAttributes[X],U=[];for(let N=0,F=H.length;N<F;N++){let G=H[N];U.push(G.toJSON(J.data))}if(U.length>0)Z[X]=U,K=!0}if(K)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let Y=this.boundingSphere;if(Y!==null)J.data.boundingSphere=Y.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let H in Z){let U=Z[H];this.setAttribute(H,U.clone(Q))}let K=J.morphAttributes;for(let H in K){let U=[],N=K[H];for(let F=0,G=N.length;F<G;F++)U.push(N[F].clone(Q));this.morphAttributes[H]=U}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let H=0,U=W.length;H<U;H++){let N=W[H];this.addGroup(N.start,N.count,N.materialIndex)}let Y=J.boundingBox;if(Y!==null)this.boundingBox=Y.clone();let X=J.boundingSphere;if(X!==null)this.boundingSphere=X.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class m6{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=c8()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,$){J*=this.stride,$*=Q.stride;for(let Z=0,K=this.stride;Z<K;Z++)this.array[J+Z]=Q.array[$+Z];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=c8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),$=new this.constructor(Q,this.stride);return $.setUsage(this.usage),$}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=c8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let Q={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return Q.usage=this.usage,Q}}var z8=new S;class X7{constructor(J,Q,$,Z=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=$,this.normalized=Z}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,$=this.data.count;Q<$;Q++)z8.fromBufferAttribute(this,Q),z8.applyMatrix4(J),this.setXYZ(Q,z8.x,z8.y,z8.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)z8.fromBufferAttribute(this,Q),z8.applyNormalMatrix(J),this.setXYZ(Q,z8.x,z8.y,z8.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)z8.fromBufferAttribute(this,Q),z8.transformDirection(J),this.setXYZ(Q,z8.x,z8.y,z8.z);return this}getComponent(J,Q){let $=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)$=X9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=gJ($,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=$,this}setX(J,Q){if(this.normalized)Q=gJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=gJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=gJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=gJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=X9(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=X9(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=X9(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=X9(Q,this.array);return Q}setXY(J,Q,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=gJ(Q,this.array),$=gJ($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=gJ(Q,this.array),$=gJ($,this.array),Z=gJ(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this}setXYZW(J,Q,$,Z,K){if(J=J*this.data.stride+this.offset,this.normalized)Q=gJ(Q,this.array),$=gJ($,this.array),Z=gJ(Z,this.array),K=gJ(K,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this.data.array[J+3]=K,this}clone(J){if(J===void 0){AQ("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let K=0;K<this.itemSize;K++)Q.push(this.data.array[Z+K])}return new tJ(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new X7(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){AQ("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let K=0;K<this.itemSize;K++)Q.push(this.data.array[Z+K])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var MK=new S,EN=new S,qN=new WJ;class d8{constructor(J=new S(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=MK.subVectors($,Q).cross(EN.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let Z=J.delta(MK),K=this.normal.dot(Z);if(K===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/K;if($===!0&&(W<0||W>1))return null;return Q.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||qN.getNormalMatrix(J),Z=this.coplanarPoint(MK).applyMatrix4(J),K=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(K),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var ON=0;class w8 extends F9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:ON++}),this.uuid=c8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new h0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){o0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){o0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector2&&($&&$.isVector2)||Z&&Z.isEuler&&($&&$.isEuler)||Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,$.blending=this.blending,$.side=this.side,$.shadowSide=this.shadowSide,$.vertexColors=this.vertexColors,$.opacity=this.opacity,$.transparent=this.transparent,$.blendSrc=this.blendSrc,$.blendDst=this.blendDst,$.blendEquation=this.blendEquation,$.blendSrcAlpha=this.blendSrcAlpha,$.blendDstAlpha=this.blendDstAlpha,$.blendEquationAlpha=this.blendEquationAlpha,$.blendColor=this.blendColor.getHex(),$.blendAlpha=this.blendAlpha,$.depthFunc=this.depthFunc,$.depthTest=this.depthTest,$.depthWrite=this.depthWrite,$.colorWrite=this.colorWrite,$.clipIntersection=this.clipIntersection,$.clipShadows=this.clipShadows,$.stencilWriteMask=this.stencilWriteMask,$.stencilFunc=this.stencilFunc,$.stencilRef=this.stencilRef,$.stencilFuncMask=this.stencilFuncMask,$.stencilFail=this.stencilFail,$.stencilZFail=this.stencilZFail,$.stencilZPass=this.stencilZPass,$.stencilWrite=this.stencilWrite,$.polygonOffset=this.polygonOffset,$.polygonOffsetFactor=this.polygonOffsetFactor,$.polygonOffsetUnits=this.polygonOffsetUnits,$.dithering=this.dithering,$.alphaTest=this.alphaTest,$.alphaHash=this.alphaHash,$.alphaToCoverage=this.alphaToCoverage,$.premultipliedAlpha=this.premultipliedAlpha,$.forceSinglePass=this.forceSinglePass,$.allowOverride=this.allowOverride,$.visible=this.visible,$.toneMapped=this.toneMapped,$.name=this.name,this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)$.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)$.clippingPlanes=this.clippingPlanes.map((K)=>K.toJSON());if(this.rotation!==void 0)$.rotation=this.rotation;if(this.depthPacking!==void 0)$.depthPacking=this.depthPacking;if(this.linewidth!==void 0)$.linewidth=this.linewidth;if(this.linecap!==void 0)$.linecap=this.linecap;if(this.linejoin!==void 0)$.linejoin=this.linejoin;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.wireframe!==void 0)$.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)$.flatShading=this.flatShading;if(this.fog!==void 0)$.fog=this.fog;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(K){let W=[];for(let Y in K){let X=K[Y];delete X.metadata,W.push(X)}return W}if(Q){let K=Z(J.textures),W=Z(J.images);if(K.length>0)$.textures=K;if(W.length>0)$.images=W}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new h0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map(($)=>new d8().fromJSON($));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new N0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new N0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let K=0;K!==Z;++K)$[K]=Q[K].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class m7 extends w8{constructor(J){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new h0(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.rotation=J.rotation,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var B6,OQ=new S,k6=new S,M6=new S,C6=new N0,RQ=new N0,bH=new QJ,w$=new S,LQ=new S,j$=new S,YX=new N0,CK=new N0,XX=new N0;class u6 extends SJ{constructor(J=new m7){super();if(this.isSprite=!0,this.type="Sprite",B6===void 0){B6=new mJ;let Q=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),$=new m6(Q,5);B6.setIndex([0,1,2,0,2,3]),B6.setAttribute("position",new X7($,3,0,!1)),B6.setAttribute("uv",new X7($,2,3,!1))}this.geometry=B6,this.material=J,this.center=new N0(0.5,0.5),this.count=1}intersectsFrustum(J){return J.intersectsSprite(this)}raycast(J,Q){if(J.camera===null)$J('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(k6.setFromMatrixScale(this.matrixWorld),bH.copy(J.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(J.camera.matrixWorldInverse,this.matrixWorld),M6.setFromMatrixPosition(this.modelViewMatrix),J.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)k6.multiplyScalar(-M6.z);let $=this.material.rotation,Z,K;if($!==0)K=Math.cos($),Z=Math.sin($);let W=this.center;y$(w$.set(-0.5,-0.5,0),M6,W,k6,Z,K),y$(LQ.set(0.5,-0.5,0),M6,W,k6,Z,K),y$(j$.set(0.5,0.5,0),M6,W,k6,Z,K),YX.set(0,0),CK.set(1,0),XX.set(1,1);let Y=J.ray.intersectTriangle(w$,LQ,j$,!1,OQ);if(Y===null){if(y$(LQ.set(-0.5,0.5,0),M6,W,k6,Z,K),CK.set(0,1),Y=J.ray.intersectTriangle(w$,j$,LQ,!1,OQ),Y===null)return}let X=J.ray.origin.distanceTo(OQ);if(X<J.near||X>J.far)return;Q.push({distance:X,point:OQ.clone(),uv:b8.getInterpolation(OQ,w$,LQ,j$,YX,CK,XX,new N0),face:null,object:this})}copy(J,Q){if(super.copy(J,Q),J.center!==void 0)this.center.copy(J.center);return this.material=J.material,this}}function y$(J,Q,$,Z,K,W){if(C6.subVectors(J,$).addScalar(0.5).multiply(Z),K!==void 0)RQ.x=W*C6.x-K*C6.y,RQ.y=K*C6.x+W*C6.y;else RQ.copy(C6);J.copy(Q),J.x+=RQ.x,J.y+=RQ.y,J.applyMatrix4(bH)}var u9=new S,PK=new S,v$=new S,f$=new S;class q7{constructor(J=new S,Q=new S(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,u9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=u9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return u9.copy(this.origin).addScaledVector(this.direction,Q),u9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){PK.copy(J).add(Q).multiplyScalar(0.5),v$.copy(Q).sub(J).normalize(),f$.copy(this.origin).sub(PK);let K=J.distanceTo(Q)*0.5,W=-this.direction.dot(v$),Y=f$.dot(this.direction),X=-f$.dot(v$),H=f$.lengthSq(),U=Math.abs(1-W*W),N,F,G,E;if(U>0)if(N=W*X-Y,F=W*Y-X,E=K*U,N>=0)if(F>=-E)if(F<=E){let O=1/U;N*=O,F*=O,G=N*(N+W*F+2*Y)+F*(W*N+F+2*X)+H}else F=K,N=Math.max(0,-(W*F+Y)),G=-N*N+F*(F+2*X)+H;else F=-K,N=Math.max(0,-(W*F+Y)),G=-N*N+F*(F+2*X)+H;else if(F<=-E)N=Math.max(0,-(-W*K+Y)),F=N>0?-K:Math.min(Math.max(-K,-X),K),G=-N*N+F*(F+2*X)+H;else if(F<=E)N=0,F=Math.min(Math.max(-K,-X),K),G=F*(F+2*X)+H;else N=Math.max(0,-(W*K+Y)),F=N>0?K:Math.min(Math.max(-K,-X),K),G=-N*N+F*(F+2*X)+H;else F=W>0?-K:K,N=Math.max(0,-(W*F+Y)),G=-N*N+F*(F+2*X)+H;if($)$.copy(this.origin).addScaledVector(this.direction,N);if(Z)Z.copy(PK).addScaledVector(v$,F);return G}intersectSphere(J,Q){if(J.radius<0)return null;u9.subVectors(J.center,this.origin);let $=u9.dot(this.direction),Z=u9.dot(u9)-$*$,K=J.radius*J.radius;if(Z>K)return null;let W=Math.sqrt(K-Z),Y=$-W,X=$+W;if(X<0)return null;if(Y<0)return this.at(X,Q);return this.at(Y,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,K,W,Y,X,H=1/this.direction.x,U=1/this.direction.y,N=1/this.direction.z,F=this.origin;if(H>=0)$=(J.min.x-F.x)*H,Z=(J.max.x-F.x)*H;else $=(J.max.x-F.x)*H,Z=(J.min.x-F.x)*H;if(U>=0)K=(J.min.y-F.y)*U,W=(J.max.y-F.y)*U;else K=(J.max.y-F.y)*U,W=(J.min.y-F.y)*U;if($>W||K>Z)return null;if(K>$||isNaN($))$=K;if(W<Z||isNaN(Z))Z=W;if(N>=0)Y=(J.min.z-F.z)*N,X=(J.max.z-F.z)*N;else Y=(J.max.z-F.z)*N,X=(J.min.z-F.z)*N;if($>X||Y>Z)return null;if(Y>$||$!==$)$=Y;if(X<Z||Z!==Z)Z=X;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,u9)!==null}intersectTriangle(J,Q,$,Z,K){let W=this.origin,Y=this.direction,X=Y.x,H=Y.y,U=Y.z,N=J.x-W.x,F=J.y-W.y,G=J.z-W.z,E=Q.x-W.x,O=Q.y-W.y,D=Q.z-W.z,R=$.x-W.x,q=$.y-W.y,C=$.z-W.z,z=Math.abs(X),L=Math.abs(H),V=Math.abs(U),P,T,B,I,l,j,x,t,y,i,s,g;if(z>=L&&z>=V)if(B=X,j=N,y=E,g=R,X>=0)P=H,T=U,I=F,l=G,x=O,t=D,i=q,s=C;else P=U,T=H,I=G,l=F,x=D,t=O,i=C,s=q;else if(L>=V)if(B=H,j=F,y=O,g=q,H>=0)P=U,T=X,I=G,l=N,x=D,t=E,i=C,s=R;else P=X,T=U,I=N,l=G,x=E,t=D,i=R,s=C;else if(B=U,j=G,y=D,g=C,U>=0)P=X,T=H,I=N,l=F,x=E,t=O,i=R,s=q;else P=H,T=X,I=F,l=N,x=O,t=E,i=q,s=R;if(B===0)return null;let H0=P/B,a=T/B,X0=1/B,E0=I-H0*j,r0=l-a*j,_0=x-H0*y,b0=t-a*y,e0=i-H0*g,$0=s-a*g,w=e0*b0-$0*_0,p=E0*$0-r0*e0,m=_0*r0-b0*E0;if(Z){if(w<0||p<0||m<0)return null}else if((w<0||p<0||m<0)&&(w>0||p>0||m>0))return null;let J0=w+p+m;if(J0===0)return null;let e=X0*(w*j+p*y+m*g);if(J0>0?e<0:e>0)return null;return this.at(e/J0,K)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sJ extends w8{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new h0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new H9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var HX=new QJ,_7=new q7,h$=new g8,UX=new S,b$=new S,x$=new S,g$=new S,IK=new S,p$=new S,NX=new S,l$=new S;class C0 extends SJ{constructor(J=new mJ,Q=new sJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let Y=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=K}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,K=$.morphAttributes.position,W=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let Y=this.morphTargetInfluences;if(K&&Y){p$.set(0,0,0);for(let X=0,H=K.length;X<H;X++){let U=Y[X],N=K[X];if(U===0)continue;if(IK.fromBufferAttribute(N,J),W)p$.addScaledVector(IK,U);else p$.addScaledVector(IK.sub(Q),U)}Q.add(p$)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.material,K=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(h$.copy($.boundingSphere),h$.applyMatrix4(K),_7.copy(J.ray).recast(J.near),h$.containsPoint(_7.origin)===!1){if(_7.intersectSphere(h$,UX)===null)return;if(_7.origin.distanceToSquared(UX)>(J.far-J.near)**2)return}if(HX.copy(K).invert(),_7.copy(J.ray).applyMatrix4(HX),$.boundingBox!==null){if(_7.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,_7)}_computeIntersections(J,Q,$){let Z,K=this.geometry,W=this.material,Y=K.index,X=K.attributes.position,H=K.attributes.uv,U=K.attributes.uv1,N=K.attributes.normal,F=K.groups,G=K.drawRange;if(Y!==null)if(Array.isArray(W))for(let E=0,O=F.length;E<O;E++){let D=F[E],R=W[D.materialIndex],q=Math.max(D.start,G.start),C=Math.min(Y.count,Math.min(D.start+D.count,G.start+G.count));for(let z=q,L=C;z<L;z+=3){let V=Y.getX(z),P=Y.getX(z+1),T=Y.getX(z+2);if(Z=m$(this,R,J,$,H,U,N,V,P,T),Z)Z.faceIndex=Math.floor(z/3),Z.face.materialIndex=D.materialIndex,Q.push(Z)}}else{let E=Math.max(0,G.start),O=Math.min(Y.count,G.start+G.count);for(let D=E,R=O;D<R;D+=3){let q=Y.getX(D),C=Y.getX(D+1),z=Y.getX(D+2);if(Z=m$(this,W,J,$,H,U,N,q,C,z),Z)Z.faceIndex=Math.floor(D/3),Q.push(Z)}}else if(X!==void 0)if(Array.isArray(W))for(let E=0,O=F.length;E<O;E++){let D=F[E],R=W[D.materialIndex],q=Math.max(D.start,G.start),C=Math.min(X.count,Math.min(D.start+D.count,G.start+G.count));for(let z=q,L=C;z<L;z+=3){let V=z,P=z+1,T=z+2;if(Z=m$(this,R,J,$,H,U,N,V,P,T),Z)Z.faceIndex=Math.floor(z/3),Z.face.materialIndex=D.materialIndex,Q.push(Z)}}else{let E=Math.max(0,G.start),O=Math.min(X.count,G.start+G.count);for(let D=E,R=O;D<R;D+=3){let q=D,C=D+1,z=D+2;if(Z=m$(this,W,J,$,H,U,N,q,C,z),Z)Z.faceIndex=Math.floor(D/3),Q.push(Z)}}}}function RN(J,Q,$,Z,K,W,Y,X){let H;if(Q.side===1)H=Z.intersectTriangle(Y,W,K,!0,X);else H=Z.intersectTriangle(K,W,Y,Q.side===0,X);if(H===null)return null;l$.copy(X),l$.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(l$);if(U<$.near||U>$.far)return null;return{distance:U,point:l$.clone(),object:J}}function m$(J,Q,$,Z,K,W,Y,X,H,U){J.getVertexPosition(X,b$),J.getVertexPosition(H,x$),J.getVertexPosition(U,g$);let N=RN(J,Q,$,Z,b$,x$,g$,NX);if(N){let F=new S;if(b8.getBarycoord(NX,b$,x$,g$,F),K)N.uv=b8.getInterpolatedAttribute(K,X,H,U,F,new N0);if(W)N.uv1=b8.getInterpolatedAttribute(W,X,H,U,F,new N0);if(Y){if(N.normal=b8.getInterpolatedAttribute(Y,X,H,U,F,new S),N.normal.dot(Z.direction)>0)N.normal.multiplyScalar(-1)}let G={a:X,b:H,c:U,normal:new S,materialIndex:0};b8.getNormal(b$,x$,g$,G.normal),N.face=G,N.barycoord=F}return N}var VQ=new pJ,GX=new pJ,FX=new pJ,LN=new pJ,EX=new QJ,u$=new S,zK=new g8,qX=new QJ,AK=new q7;class kZ extends C0{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new QJ,this.bindMatrixInverse=new QJ,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new A8;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,u$),this.boundingBox.expandByPoint(u$)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new g8;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,u$),this.boundingSphere.expandByPoint(u$)}copy(J,Q){if(super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,Q){let $=this.material,Z=this.matrixWorld;if($===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(zK.copy(this.boundingSphere),zK.applyMatrix4(Z),J.ray.intersectsSphere(zK)===!1)return;if(qX.copy(Z).invert(),AK.copy(J.ray).applyMatrix4(qX),this.boundingBox!==null){if(AK.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,AK)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new pJ,Q=this.geometry.attributes.skinWeight;for(let $=0,Z=Q.count;$<Z;$++){J.fromBufferAttribute(Q,$);let K=1/J.manhattanLength();if(K!==1/0)J.multiplyScalar(K);else J.set(1,0,0,0);Q.setXYZW($,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else o0("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let $=this.skeleton,Z=this.geometry;if(GX.fromBufferAttribute(Z.attributes.skinIndex,J),FX.fromBufferAttribute(Z.attributes.skinWeight,J),Q.isVector4)VQ.copy(Q),Q.set(0,0,0,0);else VQ.set(...Q,1),Q.set(0,0,0);VQ.applyMatrix4(this.bindMatrix);for(let K=0;K<4;K++){let W=FX.getComponent(K);if(W!==0){let Y=GX.getComponent(K);EX.multiplyMatrices($.bones[Y].matrixWorld,$.boneInverses[Y]),Q.addScaledVector(LN.copy(VQ).applyMatrix4(EX),W)}}if(Q.isVector4)Q.w=VQ.w;return Q.applyMatrix4(this.bindMatrixInverse)}}class uQ extends SJ{constructor(){super();this.isBone=!0,this.type="Bone"}}class dQ extends eJ{constructor(J=null,Q=1,$=1,Z,K,W,Y,X,H=1003,U=1003,N,F){super(null,W,Y,X,H,U,Z,K,N,F);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var OX=new QJ,VN=new QJ;class cQ{constructor(J=[],Q=[]){this.uuid=c8(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){o0("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let $=0,Z=this.bones.length;$<Z;$++)this.boneInverses.push(new QJ)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let $=new QJ;if(this.bones[J])$.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push($)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($)$.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($){if($.parent&&$.parent.isBone)$.matrix.copy($.parent.matrixWorld).invert(),$.matrix.multiply($.matrixWorld);else $.matrix.copy($.matrixWorld);$.matrix.decompose($.position,$.quaternion,$.scale)}}}update(){let J=this.bones,Q=this.boneInverses,$=this.boneMatrices,Z=this.boneTexture;for(let K=0,W=J.length;K<W;K++){let Y=J[K]?J[K].matrixWorld:VN;OX.multiplyMatrices(Y,Q[K]),OX.toArray($,K*16)}if(Z!==null)Z.needsUpdate=!0}clone(){return new cQ(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let $=new dQ(Q,J,J,1023,1015);return $.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=$,this}getBoneByName(J){for(let Q=0,$=this.bones.length;Q<$;Q++){let Z=this.bones[Q];if(Z.name===J)return Z}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let $=0,Z=J.bones.length;$<Z;$++){let K=J.bones[$],W=Q[K];if(W===void 0)o0("Skeleton: No bone found with UUID:",K),W=new uQ;this.bones.push(W),this.boneInverses.push(new QJ().fromArray(J.boneInverses[$]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,$=this.boneInverses;for(let Z=0,K=Q.length;Z<K;Z++){let W=Q[Z];J.bones.push(W.uuid);let Y=$[Z];J.boneInverses.push(Y.toArray())}return J}}class H7 extends tJ{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var P6=new QJ,RX=new QJ,d$=[],LX=new A8,DN=new QJ,DQ=new C0,BQ=new g8;class S9 extends C0{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new H7(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<$;Z++)this.setMatrixAt(Z,DN)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new A8;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,P6),LX.copy(J.boundingBox).applyMatrix4(P6),this.boundingBox.union(LX)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new g8;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,P6),BQ.copy(J.boundingSphere).applyMatrix4(P6),this.boundingSphere.union(BQ)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=this.morphTexture.source.data.data,K=$.length+1,W=J*K+1;for(let Y=0;Y<$.length;Y++)$[Y]=Z[W+Y]}raycast(J,Q){let $=this.matrixWorld,Z=this.count;if(DQ.geometry=this.geometry,DQ.material=this.material,DQ.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(BQ.copy(this.boundingSphere),BQ.applyMatrix4($),J.ray.intersectsSphere(BQ)===!1)return;for(let K=0;K<Z;K++){this.getMatrixAt(K,P6),RX.multiplyMatrices($,P6),DQ.matrixWorld=RX,DQ.raycast(J,d$);for(let W=0,Y=d$.length;W<Y;W++){let X=d$[W];X.instanceId=K,X.object=this,Q.push(X)}d$.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new H7(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=$.length+1;if(this.morphTexture===null)this.morphTexture=new dQ(new Float32Array(Z*this.count),Z,this.count,1028,1015);let K=this.morphTexture.source.data.data,W=0;for(let H=0;H<$.length;H++)W+=$[H];let Y=this.geometry.morphTargetsRelative?1:1-W,X=Z*J;return K[X]=Y,K.set($,X+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var T7=new g8,BN=new N0(0.5,0.5),c$=new S;class nQ{constructor(J=new d8,Q=new d8,$=new d8,Z=new d8,K=new d8,W=new d8){this.planes=[J,Q,$,Z,K,W]}set(J,Q,$,Z,K,W){let Y=this.planes;return Y[0].copy(J),Y[1].copy(Q),Y[2].copy($),Y[3].copy(Z),Y[4].copy(K),Y[5].copy(W),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,K=J.elements,W=K[0],Y=K[1],X=K[2],H=K[3],U=K[4],N=K[5],F=K[6],G=K[7],E=K[8],O=K[9],D=K[10],R=K[11],q=K[12],C=K[13],z=K[14],L=K[15];if(Z[0].setComponents(H-W,G-U,R-E,L-q).normalize(),Z[1].setComponents(H+W,G+U,R+E,L+q).normalize(),Z[2].setComponents(H+Y,G+N,R+O,L+C).normalize(),Z[3].setComponents(H-Y,G-N,R-O,L-C).normalize(),$)Z[4].setComponents(X,F,D,z).normalize(),Z[5].setComponents(H-X,G-F,R-D,L-z).normalize();else if(Z[4].setComponents(H-X,G-F,R-D,L-z).normalize(),Q===2000)Z[5].setComponents(H+X,G+F,R+D,L+z).normalize();else if(Q===2001)Z[5].setComponents(X,F,D,z).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();T7.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();T7.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(T7)}intersectsSprite(J){T7.center.set(0,0,0);let Q=BN.distanceTo(J.center);return T7.radius=0.7071067811865476+Q,T7.applyMatrix4(J.matrixWorld),this.intersectsSphere(T7)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let K=0;K<6;K++)if(Q[K].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(c$.x=Z.normal.x>0?J.max.x:J.min.x,c$.y=Z.normal.y>0?J.max.y:J.min.y,c$.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(c$)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sQ extends w8{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new h0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var QZ=new S,$Z=new S,VX=new QJ,kQ=new q7,n$=new g8,_K=new S,DX=new S;class d6 extends SJ{constructor(J=new mJ,Q=new sQ){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let Z=1,K=Q.count;Z<K;Z++)QZ.fromBufferAttribute(Q,Z-1),$Z.fromBufferAttribute(Q,Z),$[Z]=$[Z-1],$[Z]+=QZ.distanceTo($Z);J.setAttribute("lineDistance",new GJ($,1))}else o0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,K=J.params.Line.threshold,W=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(n$.copy($.boundingSphere),n$.applyMatrix4(Z),n$.radius+=K,J.ray.intersectsSphere(n$)===!1)return;VX.copy(Z).invert(),kQ.copy(J.ray).applyMatrix4(VX);let Y=K/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,H=this.isLineSegments?2:1,U=$.index,F=$.attributes.position;if(U!==null){let G=Math.max(0,W.start),E=Math.min(U.count,W.start+W.count);for(let O=G,D=E-1;O<D;O+=H){let R=U.getX(O),q=U.getX(O+1),C=s$(this,J,kQ,X,R,q,O);if(C)Q.push(C)}if(this.isLineLoop){let O=U.getX(E-1),D=U.getX(G),R=s$(this,J,kQ,X,O,D,E-1);if(R)Q.push(R)}}else{let G=Math.max(0,W.start),E=Math.min(F.count,W.start+W.count);for(let O=G,D=E-1;O<D;O+=H){let R=s$(this,J,kQ,X,O,O+1,O);if(R)Q.push(R)}if(this.isLineLoop){let O=s$(this,J,kQ,X,E-1,G,E-1);if(O)Q.push(O)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let Y=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=K}}}}}function s$(J,Q,$,Z,K,W,Y){let X=J.geometry.attributes.position;if(QZ.fromBufferAttribute(X,K),$Z.fromBufferAttribute(X,W),$.distanceSqToSegment(QZ,$Z,_K,DX)>Z)return;_K.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(_K);if(U<Q.near||U>Q.far)return;return{distance:U,point:DX.clone().applyMatrix4(J.matrixWorld),index:Y,face:null,faceIndex:null,barycoord:null,object:J}}var BX=new S,kX=new S;class MZ extends d6{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let Z=0,K=Q.count;Z<K;Z+=2)BX.fromBufferAttribute(Q,Z),kX.fromBufferAttribute(Q,Z+1),$[Z]=Z===0?0:$[Z-1],$[Z+1]=$[Z]+BX.distanceTo(kX);J.setAttribute("lineDistance",new GJ($,1))}else o0("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class CZ extends d6{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class u7 extends w8{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new h0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var MX=new QJ,vK=new q7,i$=new g8,o$=new S;class c6 extends SJ{constructor(J=new mJ,Q=new u7){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,K=J.params.Points.threshold,W=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(i$.copy($.boundingSphere),i$.applyMatrix4(Z),i$.radius+=K,J.ray.intersectsSphere(i$)===!1)return;MX.copy(Z).invert(),vK.copy(J.ray).applyMatrix4(MX);let Y=K/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,H=$.index,N=$.attributes.position;if(H!==null){let F=Math.max(0,W.start),G=Math.min(H.count,W.start+W.count);for(let E=F,O=G;E<O;E++){let D=H.getX(E);o$.fromBufferAttribute(N,D),CX(o$,D,X,Z,J,Q,this)}}else{let F=Math.max(0,W.start),G=Math.min(N.count,W.start+W.count);for(let E=F,O=G;E<O;E++)o$.fromBufferAttribute(N,E),CX(o$,E,X,Z,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let Y=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=K}}}}}function CX(J,Q,$,Z,K,W,Y){let X=vK.distanceSqToPoint(J);if(X<$){let H=new S;vK.closestPointToPoint(J,H),H.applyMatrix4(Z);let U=K.ray.origin.distanceTo(H);if(U<K.near||U>K.far)return;W.push({distance:U,distanceToRay:Math.sqrt(X),point:H,index:Q,face:null,faceIndex:null,barycoord:null,object:Y})}}class PZ extends eJ{constructor(J=[],Q=301,$,Z,K,W,Y,X,H,U){super(J,Q,$,Z,K,W,Y,X,H,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class p8 extends eJ{constructor(J,Q,$,Z,K,W,Y,X,H){super(J,Q,$,Z,K,W,Y,X,H);this.isCanvasTexture=!0,this.needsUpdate=!0}}class d7 extends eJ{constructor(J,Q,$=1014,Z,K,W,Y=1003,X=1003,H,U=1026,N=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let F={width:J,height:Q,depth:N};super(F,Z,K,W,Y,X,U,$,H);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new lQ(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class vW extends d7{constructor(J,Q=1014,$=301,Z,K,W=1003,Y=1003,X,H=1026){let U={width:J,height:J,depth:1},N=[U,U,U,U,U,U];super(J,J,Q,$,Z,K,W,Y,X,H);this.image=N,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class IZ extends eJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class yJ extends mJ{constructor(J=1,Q=1,$=1,Z=1,K=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:K,depthSegments:W};let Y=this;Z=Math.floor(Z),K=Math.floor(K),W=Math.floor(W);let X=[],H=[],U=[],N=[],F=0,G=0;E("z","y","x",-1,-1,$,Q,J,W,K,0),E("z","y","x",1,-1,$,Q,-J,W,K,1),E("x","z","y",1,1,J,$,Q,Z,W,2),E("x","z","y",1,-1,J,$,-Q,Z,W,3),E("x","y","z",1,-1,J,Q,$,Z,K,4),E("x","y","z",-1,-1,J,Q,-$,Z,K,5),this.setIndex(X),this.setAttribute("position",new GJ(H,3)),this.setAttribute("normal",new GJ(U,3)),this.setAttribute("uv",new GJ(N,2));function E(O,D,R,q,C,z,L,V,P,T,B){let I=z/P,l=L/T,j=z/2,x=L/2,t=V/2,y=P+1,i=T+1,s=0,g=0,H0=new S;for(let a=0;a<i;a++){let X0=a*l-x;for(let E0=0;E0<y;E0++){let r0=E0*I-j;H0[O]=r0*q,H0[D]=X0*C,H0[R]=t,H.push(H0.x,H0.y,H0.z),H0[O]=0,H0[D]=0,H0[R]=V>0?1:-1,U.push(H0.x,H0.y,H0.z),N.push(E0/P),N.push(1-a/T),s+=1}}for(let a=0;a<T;a++)for(let X0=0;X0<P;X0++){let E0=F+X0+y*a,r0=F+X0+y*(a+1),_0=F+(X0+1)+y*(a+1),b0=F+(X0+1)+y*a;X.push(E0,r0,b0),X.push(r0,_0,b0),g+=6}Y.addGroup(G,g,B),G+=g,F+=s}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new yJ(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class s9 extends mJ{constructor(J=1,Q=32,$=0,Z=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:Q,thetaStart:$,thetaLength:Z},Q=Math.max(3,Q);let K=[],W=[],Y=[],X=[],H=new S,U=new N0;W.push(0,0,0),Y.push(0,0,1),X.push(0.5,0.5);for(let N=0,F=3;N<=Q;N++,F+=3){let G=$+N/Q*Z;H.x=J*Math.cos(G),H.y=J*Math.sin(G),W.push(H.x,H.y,H.z),Y.push(0,0,1),U.x=(W[F]/J+1)/2,U.y=(W[F+1]/J+1)/2,X.push(U.x,U.y)}for(let N=1;N<=Q;N++)K.push(N,N+1,0);this.setIndex(K),this.setAttribute("position",new GJ(W,3)),this.setAttribute("normal",new GJ(Y,3)),this.setAttribute("uv",new GJ(X,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new s9(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class AJ extends mJ{constructor(J=1,Q=1,$=1,Z=32,K=1,W=!1,Y=0,X=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:Z,heightSegments:K,openEnded:W,thetaStart:Y,thetaLength:X};let H=this;Z=Math.floor(Z),K=Math.floor(K);let U=[],N=[],F=[],G=[],E=0,O=[],D=$/2,R=0;if(q(),W===!1){if(J>0)C(!0);if(Q>0)C(!1)}this.setIndex(U),this.setAttribute("position",new GJ(N,3)),this.setAttribute("normal",new GJ(F,3)),this.setAttribute("uv",new GJ(G,2));function q(){let z=new S,L=new S,V=0,P=(Q-J)/$;for(let T=0;T<=K;T++){let B=[],I=T/K,l=I*(Q-J)+J;for(let j=0;j<=Z;j++){let x=j/Z,t=x*X+Y,y=Math.sin(t),i=Math.cos(t);L.x=l*y,L.y=-I*$+D,L.z=l*i,N.push(L.x,L.y,L.z),z.set(y,P,i).normalize(),F.push(z.x,z.y,z.z),G.push(x,1-I),B.push(E++)}O.push(B)}for(let T=0;T<Z;T++)for(let B=0;B<K;B++){let I=O[B][T],l=O[B+1][T],j=O[B+1][T+1],x=O[B][T+1];if(J>0||B!==0)U.push(I,l,x),V+=3;if(Q>0||B!==K-1)U.push(l,j,x),V+=3}H.addGroup(R,V,0),R+=V}function C(z){let L=E,V=new N0,P=new S,T=0,B=z===!0?J:Q,I=z===!0?1:-1;for(let j=1;j<=Z;j++)N.push(0,D*I,0),F.push(0,I,0),G.push(0.5,0.5),E++;let l=E;for(let j=0;j<=Z;j++){let t=j/Z*X+Y,y=Math.cos(t),i=Math.sin(t);P.x=B*i,P.y=D*I,P.z=B*y,N.push(P.x,P.y,P.z),F.push(0,I,0),V.x=y*0.5+0.5,V.y=i*0.5*I+0.5,G.push(V.x,V.y),E++}for(let j=0;j<Z;j++){let x=L+j,t=l+j;if(z===!0)U.push(t,t+1,x);else U.push(t+1,t,x);T+=3}H.addGroup(R,T,z===!0?1:2),R+=T}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new AJ(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class iQ extends AJ{constructor(J=1,Q=1,$=32,Z=1,K=!1,W=0,Y=Math.PI*2){super(0,J,Q,$,Z,K,W,Y);this.type="ConeGeometry",this.parameters={radius:J,height:Q,radialSegments:$,heightSegments:Z,openEnded:K,thetaStart:W,thetaLength:Y}}static fromJSON(J){return new iQ(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class s8{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){o0("Curve: .getPoint() not implemented.")}getPointAt(J,Q){let $=this.getUtoTmapping(J);return this.getPoint($,Q)}getPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));return Q}getSpacedPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPointAt($/J));return Q}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Q=[],$,Z=this.getPoint(0),K=0;Q.push(0);for(let W=1;W<=J;W++)$=this.getPoint(W/J),K+=$.distanceTo(Z),Q.push(K),Z=$;return this.cacheArcLengths=Q,Q}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Q=null){let $=this.getLengths(),Z=0,K=$.length,W;if(Q)W=Q;else W=J*$[K-1];let Y=0,X=K-1,H;while(Y<=X)if(Z=Math.floor(Y+(X-Y)/2),H=$[Z]-W,H<0)Y=Z+1;else if(H>0)X=Z-1;else{X=Z;break}if(Z=X,$[Z]===W)return Z/(K-1);let U=$[Z],F=$[Z+1]-U,G=(W-U)/F;return(Z+G)/(K-1)}getTangent(J,Q){let Z=J-0.0001,K=J+0.0001;if(Z<0)Z=0;if(K>1)K=1;let W=this.getPoint(Z),Y=this.getPoint(K),X=Q||(W.isVector2?new N0:new S);return X.copy(Y).sub(W).normalize(),X}getTangentAt(J,Q){let $=this.getUtoTmapping(J);return this.getTangent($,Q)}computeFrenetFrames(J,Q=!1){let $=new S,Z=[],K=[],W=[],Y=new S,X=new QJ;for(let G=0;G<=J;G++){let E=G/J;Z[G]=this.getTangentAt(E,new S)}K[0]=new S,W[0]=new S;let H=Number.MAX_VALUE,U=Math.abs(Z[0].x),N=Math.abs(Z[0].y),F=Math.abs(Z[0].z);if(U<=H)H=U,$.set(1,0,0);if(N<=H)H=N,$.set(0,1,0);if(F<=H)$.set(0,0,1);Y.crossVectors(Z[0],$).normalize(),K[0].crossVectors(Z[0],Y),W[0].crossVectors(Z[0],K[0]);for(let G=1;G<=J;G++){if(K[G]=K[G-1].clone(),W[G]=W[G-1].clone(),Y.crossVectors(Z[G-1],Z[G]),Y.length()>Number.EPSILON){Y.normalize();let E=Math.acos(UJ(Z[G-1].dot(Z[G]),-1,1));K[G].applyMatrix4(X.makeRotationAxis(Y,E))}W[G].crossVectors(Z[G],K[G])}if(Q===!0){let G=Math.acos(UJ(K[0].dot(K[J]),-1,1));if(G/=J,Z[0].dot(Y.crossVectors(K[0],K[J]))>0)G=-G;for(let E=1;E<=J;E++)K[E].applyMatrix4(X.makeRotationAxis(Z[E],G*E)),W[E].crossVectors(Z[E],K[E])}return{tangents:Z,normals:K,binormals:W}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}}class oQ extends s8{constructor(J=0,Q=0,$=1,Z=1,K=0,W=Math.PI*2,Y=!1,X=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Q,this.xRadius=$,this.yRadius=Z,this.aStartAngle=K,this.aEndAngle=W,this.aClockwise=Y,this.aRotation=X}getPoint(J,Q=new N0){let $=Q,Z=Math.PI*2,K=this.aEndAngle-this.aStartAngle,W=Math.abs(K)<Number.EPSILON;while(K<0)K+=Z;while(K>Z)K-=Z;if(K<Number.EPSILON)if(W)K=0;else K=Z;if(this.aClockwise===!0&&!W)if(K===Z)K=-Z;else K=K-Z;let Y=this.aStartAngle+J*K,X=this.aX+this.xRadius*Math.cos(Y),H=this.aY+this.yRadius*Math.sin(Y);if(this.aRotation!==0){let U=Math.cos(this.aRotation),N=Math.sin(this.aRotation),F=X-this.aX,G=H-this.aY;X=F*U-G*N+this.aX,H=F*N+G*U+this.aY}return $.set(X,H)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class fW extends oQ{constructor(J,Q,$,Z,K,W){super(J,Q,$,$,Z,K,W);this.isArcCurve=!0,this.type="ArcCurve"}}function hW(){let J=0,Q=0,$=0,Z=0;function K(W,Y,X,H){J=W,Q=X,$=-3*W+3*Y-2*X-H,Z=2*W-2*Y+X+H}return{initCatmullRom:function(W,Y,X,H,U){K(Y,X,U*(X-W),U*(H-Y))},initNonuniformCatmullRom:function(W,Y,X,H,U,N,F){let G=(Y-W)/U-(X-W)/(U+N)+(X-Y)/N,E=(X-Y)/N-(H-Y)/(N+F)+(H-X)/F;G*=N,E*=N,K(Y,X,G,E)},calc:function(W){let Y=W*W,X=Y*W;return J+Q*W+$*Y+Z*X}}}var PX=new S,IX=new S,TK=new hW,SK=new hW,wK=new hW;class c7 extends s8{constructor(J=[],Q=!1,$="centripetal",Z=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Q,this.curveType=$,this.tension=Z}getPoint(J,Q=new S){let $=Q,Z=this.points,K=Z.length,W=(K-(this.closed?0:1))*J,Y=Math.floor(W),X=W-Y;if(this.closed)Y+=Y>0?0:(Math.floor(Math.abs(Y)/K)+1)*K;else if(X===0&&Y===K-1)Y=K-2,X=1;let H,U;if(this.closed||Y>0)H=Z[(Y-1)%K];else IX.subVectors(Z[0],Z[1]).add(Z[0]),H=IX;let N=Z[Y%K],F=Z[(Y+1)%K];if(this.closed||Y+2<K)U=Z[(Y+2)%K];else PX.subVectors(Z[K-1],Z[K-2]).add(Z[K-1]),U=PX;if(this.curveType==="centripetal"||this.curveType==="chordal"){let G=this.curveType==="chordal"?0.5:0.25,E=Math.pow(H.distanceToSquared(N),G),O=Math.pow(N.distanceToSquared(F),G),D=Math.pow(F.distanceToSquared(U),G);if(O<0.0001)O=1;if(E<0.0001)E=O;if(D<0.0001)D=O;TK.initNonuniformCatmullRom(H.x,N.x,F.x,U.x,E,O,D),SK.initNonuniformCatmullRom(H.y,N.y,F.y,U.y,E,O,D),wK.initNonuniformCatmullRom(H.z,N.z,F.z,U.z,E,O,D)}else if(this.curveType==="catmullrom")TK.initCatmullRom(H.x,N.x,F.x,U.x,this.tension),SK.initCatmullRom(H.y,N.y,F.y,U.y,this.tension),wK.initCatmullRom(H.z,N.z,F.z,U.z,this.tension);return $.set(TK.calc(X),SK.calc(X),wK.calc(X)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(Z.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let Z=this.points[Q];J.points.push(Z.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(new S().fromArray(Z))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function zX(J,Q,$,Z,K){let W=(Z-Q)*0.5,Y=(K-$)*0.5,X=J*J,H=J*X;return(2*$-2*Z+W+Y)*H+(-3*$+3*Z-2*W-Y)*X+W*J+$}function kN(J,Q){let $=1-J;return $*$*Q}function MN(J,Q){return 2*(1-J)*J*Q}function CN(J,Q){return J*J*Q}function IQ(J,Q,$,Z){return kN(J,Q)+MN(J,$)+CN(J,Z)}function PN(J,Q){let $=1-J;return $*$*$*Q}function IN(J,Q){let $=1-J;return 3*$*$*J*Q}function zN(J,Q){return 3*(1-J)*J*J*Q}function AN(J,Q){return J*J*J*Q}function zQ(J,Q,$,Z,K){return PN(J,Q)+IN(J,$)+zN(J,Z)+AN(J,K)}class zZ extends s8{constructor(J=new N0,Q=new N0,$=new N0,Z=new N0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Q,this.v2=$,this.v3=Z}getPoint(J,Q=new N0){let $=Q,Z=this.v0,K=this.v1,W=this.v2,Y=this.v3;return $.set(zQ(J,Z.x,K.x,W.x,Y.x),zQ(J,Z.y,K.y,W.y,Y.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class bW extends s8{constructor(J=new S,Q=new S,$=new S,Z=new S){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Q,this.v2=$,this.v3=Z}getPoint(J,Q=new S){let $=Q,Z=this.v0,K=this.v1,W=this.v2,Y=this.v3;return $.set(zQ(J,Z.x,K.x,W.x,Y.x),zQ(J,Z.y,K.y,W.y,Y.y),zQ(J,Z.z,K.z,W.z,Y.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class AZ extends s8{constructor(J=new N0,Q=new N0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Q}getPoint(J,Q=new N0){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new N0){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class xW extends s8{constructor(J=new S,Q=new S){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Q}getPoint(J,Q=new S){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new S){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class _Z extends s8{constructor(J=new N0,Q=new N0,$=new N0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new N0){let $=Q,Z=this.v0,K=this.v1,W=this.v2;return $.set(IQ(J,Z.x,K.x,W.x),IQ(J,Z.y,K.y,W.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class E9 extends s8{constructor(J=new S,Q=new S,$=new S){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new S){let $=Q,Z=this.v0,K=this.v1,W=this.v2;return $.set(IQ(J,Z.x,K.x,W.x),IQ(J,Z.y,K.y,W.y),IQ(J,Z.z,K.z,W.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class TZ extends s8{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Q=new N0){let $=Q,Z=this.points,K=(Z.length-1)*J,W=Math.floor(K),Y=K-W,X=Z[W===0?W:W-1],H=Z[W],U=Z[W>Z.length-2?Z.length-1:W+1],N=Z[W>Z.length-3?Z.length-1:W+2];return $.set(zX(Y,X.x,H.x,U.x,N.x),zX(Y,X.y,H.y,U.y,N.y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let Z=this.points[Q];J.points.push(Z.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(new N0().fromArray(Z))}return this}}var fK=Object.freeze({__proto__:null,ArcCurve:fW,CatmullRomCurve3:c7,CubicBezierCurve:zZ,CubicBezierCurve3:bW,EllipseCurve:oQ,LineCurve:AZ,LineCurve3:xW,QuadraticBezierCurve:_Z,QuadraticBezierCurve3:E9,SplineCurve:TZ});class gW extends s8{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),Q=this.curves[this.curves.length-1].getPoint(1);if(!J.equals(Q)){let $=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fK[$](Q,J))}return this}getPoint(J,Q){let $=J*this.getLength(),Z=this.getCurveLengths(),K=0;while(K<Z.length){if(Z[K]>=$){let W=Z[K]-$,Y=this.curves[K],X=Y.getLength(),H=X===0?0:1-W/X;return Y.getPointAt(H,Q)}K++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],Q=0;for(let $=0,Z=this.curves.length;$<Z;$++)Q+=this.curves[$].getLength(),J.push(Q);return this.cacheLengths=J,J}getSpacedPoints(J=40){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));if(this.autoClose)Q.push(Q[0]);return Q}getPoints(J=12){let Q=[],$;for(let Z=0,K=this.curves;Z<K.length;Z++){let W=K[Z],Y=W.isEllipseCurve?J*2:W.isLineCurve||W.isLineCurve3?1:W.isSplineCurve?J*W.points.length:J,X=W.getPoints(Y);for(let H=0;H<X.length;H++){let U=X[H];if($&&$.equals(U))continue;Q.push(U),$=U}}if(this.autoClose&&Q.length>1&&!Q[Q.length-1].equals(Q[0]))Q.push(Q[0]);return Q}copy(J){super.copy(J),this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let Z=J.curves[Q];this.curves.push(Z.clone())}return this.autoClose=J.autoClose,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let Q=0,$=this.curves.length;Q<$;Q++){let Z=this.curves[Q];J.curves.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let Z=J.curves[Q];this.curves.push(new fK[Z.type]().fromJSON(Z))}return this}}class ZZ extends gW{constructor(J){super();if(this.type="Path",this.currentPoint=new N0,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let Q=1,$=J.length;Q<$;Q++)this.lineTo(J[Q].x,J[Q].y);return this}moveTo(J,Q){return this.currentPoint.set(J,Q),this}lineTo(J,Q){let $=new AZ(this.currentPoint.clone(),new N0(J,Q));return this.curves.push($),this.currentPoint.set(J,Q),this}quadraticCurveTo(J,Q,$,Z){let K=new _Z(this.currentPoint.clone(),new N0(J,Q),new N0($,Z));return this.curves.push(K),this.currentPoint.set($,Z),this}bezierCurveTo(J,Q,$,Z,K,W){let Y=new zZ(this.currentPoint.clone(),new N0(J,Q),new N0($,Z),new N0(K,W));return this.curves.push(Y),this.currentPoint.set(K,W),this}splineThru(J){let Q=[this.currentPoint.clone()].concat(J),$=new TZ(Q);return this.curves.push($),this.currentPoint.copy(J[J.length-1]),this}arc(J,Q,$,Z,K,W){let Y=this.currentPoint.x,X=this.currentPoint.y;return this.absarc(J+Y,Q+X,$,Z,K,W),this}absarc(J,Q,$,Z,K,W){return this.absellipse(J,Q,$,$,Z,K,W),this}ellipse(J,Q,$,Z,K,W,Y,X){let H=this.currentPoint.x,U=this.currentPoint.y;return this.absellipse(J+H,Q+U,$,Z,K,W,Y,X),this}absellipse(J,Q,$,Z,K,W,Y,X){let H=new oQ(J,Q,$,Z,K,W,Y,X);if(this.curves.length>0){let N=H.getPoint(0);if(!N.equals(this.currentPoint))this.lineTo(N.x,N.y)}this.curves.push(H);let U=H.getPoint(1);return this.currentPoint.copy(U),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class aQ extends ZZ{constructor(J){super(J);this.uuid=c8(),this.type="Shape",this.holes=[]}getPointsHoles(J){let Q=[];for(let $=0,Z=this.holes.length;$<Z;$++)Q[$]=this.holes[$].getPoints(J);return Q}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let Z=J.holes[Q];this.holes.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let Q=0,$=this.holes.length;Q<$;Q++){let Z=this.holes[Q];J.holes.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let Z=J.holes[Q];this.holes.push(new ZZ().fromJSON(Z))}return this}}function _N(J,Q,$=2){let Z=Q&&Q.length,K=Z?Q[0]*$:J.length,W=xH(J,0,K,$,!0),Y=[];if(!W||W.next===W.prev)return Y;let X,H,U;if(Z)W=yN(J,Q,W,$);if(J.length>80*$){X=J[0],H=J[1];let N=X,F=H;for(let G=$;G<K;G+=$){let E=J[G],O=J[G+1];if(E<X)X=E;if(O<H)H=O;if(E>N)N=E;if(O>F)F=O}U=Math.max(N-X,F-H),U=U!==0?32767/U:0}return _Q(W,Y,$,X,H,U,0),Y}function xH(J,Q,$,Z,K){let W;if(K===dN(J,Q,$,Z)>0)for(let Y=Q;Y<$;Y+=Z)W=AX(Y/Z|0,J[Y],J[Y+1],W);else for(let Y=$-Z;Y>=Q;Y-=Z)W=AX(Y/Z|0,J[Y],J[Y+1],W);if(W&&j6(W,W.next))SQ(W),W=W.next;return W}function j7(J,Q){if(!J)return J;if(!Q)Q=J;let $=J,Z;do if(Z=!1,!$.steiner&&(j6($,$.next)||aJ($.prev,$,$.next)===0)){if(SQ($),$=Q=$.prev,$===$.next)break;Z=!0}else $=$.next;while(Z||$!==Q);return Q}function _Q(J,Q,$,Z,K,W,Y){if(!J)return;if(!Y&&W)xN(J,Z,K,W);let X=J;while(J.prev!==J.next){let{prev:H,next:U}=J;if(W?SN(J,Z,K,W):TN(J)){Q.push(H.i,J.i,U.i),SQ(J),J=U.next,X=U.next;continue}if(J=U,J===X){if(!Y)_Q(j7(J),Q,$,Z,K,W,1);else if(Y===1)J=wN(j7(J),Q),_Q(J,Q,$,Z,K,W,2);else if(Y===2)jN(J,Q,$,Z,K,W);break}}}function TN(J){let Q=J.prev,$=J,Z=J.next;if(aJ(Q,$,Z)>=0)return!1;let K=Q.x,W=$.x,Y=Z.x,X=Q.y,H=$.y,U=Z.y,N=Math.min(K,W,Y),F=Math.min(X,H,U),G=Math.max(K,W,Y),E=Math.max(X,H,U),O=Z.next;while(O!==Q){if(O.x>=N&&O.x<=G&&O.y>=F&&O.y<=E&&MQ(K,X,W,H,Y,U,O.x,O.y)&&aJ(O.prev,O,O.next)>=0)return!1;O=O.next}return!0}function SN(J,Q,$,Z){let K=J.prev,W=J,Y=J.next;if(aJ(K,W,Y)>=0)return!1;let X=K.x,H=W.x,U=Y.x,N=K.y,F=W.y,G=Y.y,E=Math.min(X,H,U),O=Math.min(N,F,G),D=Math.max(X,H,U),R=Math.max(N,F,G),q=hK(E,O,Q,$,Z),C=hK(D,R,Q,$,Z),z=J.prevZ,L=J.nextZ;while(z&&z.z>=q&&L&&L.z<=C){if(z.x>=E&&z.x<=D&&z.y>=O&&z.y<=R&&z!==K&&z!==Y&&MQ(X,N,H,F,U,G,z.x,z.y)&&aJ(z.prev,z,z.next)>=0)return!1;if(z=z.prevZ,L.x>=E&&L.x<=D&&L.y>=O&&L.y<=R&&L!==K&&L!==Y&&MQ(X,N,H,F,U,G,L.x,L.y)&&aJ(L.prev,L,L.next)>=0)return!1;L=L.nextZ}while(z&&z.z>=q){if(z.x>=E&&z.x<=D&&z.y>=O&&z.y<=R&&z!==K&&z!==Y&&MQ(X,N,H,F,U,G,z.x,z.y)&&aJ(z.prev,z,z.next)>=0)return!1;z=z.prevZ}while(L&&L.z<=C){if(L.x>=E&&L.x<=D&&L.y>=O&&L.y<=R&&L!==K&&L!==Y&&MQ(X,N,H,F,U,G,L.x,L.y)&&aJ(L.prev,L,L.next)>=0)return!1;L=L.nextZ}return!0}function wN(J,Q){let $=J;do{let Z=$.prev,K=$.next.next;if(!j6(Z,K)&&pH(Z,$,$.next,K)&&TQ(Z,K)&&TQ(K,Z))Q.push(Z.i,$.i,K.i),SQ($),SQ($.next),$=J=K;$=$.next}while($!==J);return j7($)}function jN(J,Q,$,Z,K,W){let Y=J;do{let X=Y.next.next;while(X!==Y.prev){if(Y.i!==X.i&&lN(Y,X)){let H=lH(Y,X);Y=j7(Y,Y.next),H=j7(H,H.next),_Q(Y,Q,$,Z,K,W,0),_Q(H,Q,$,Z,K,W,0);return}X=X.next}Y=Y.next}while(Y!==J)}function yN(J,Q,$,Z){let K=[];for(let W=0,Y=Q.length;W<Y;W++){let X=Q[W]*Z,H=W<Y-1?Q[W+1]*Z:J.length,U=xH(J,X,H,Z,!1);if(U===U.next)U.steiner=!0;K.push(pN(U))}K.sort(vN);for(let W=0;W<K.length;W++)$=fN(K[W],$);return $}function vN(J,Q){let $=J.x-Q.x;if($===0){if($=J.y-Q.y,$===0){let Z=(J.next.y-J.y)/(J.next.x-J.x),K=(Q.next.y-Q.y)/(Q.next.x-Q.x);$=Z-K}}return $}function fN(J,Q){let $=hN(J,Q);if(!$)return Q;let Z=lH($,J);return j7(Z,Z.next),j7($,$.next)}function hN(J,Q){let $=Q,Z=J.x,K=J.y,W=-1/0,Y;if(j6(J,$))return $;do{if(j6(J,$.next))return $.next;else if(K<=$.y&&K>=$.next.y&&$.next.y!==$.y){let F=$.x+(K-$.y)*($.next.x-$.x)/($.next.y-$.y);if(F<=Z&&F>W){if(W=F,Y=$.x<$.next.x?$:$.next,F===Z)return Y}}$=$.next}while($!==Q);if(!Y)return null;let X=Y,H=Y.x,U=Y.y,N=1/0;$=Y;do{if(Z>=$.x&&$.x>=H&&Z!==$.x&&gH(K<U?Z:W,K,H,U,K<U?W:Z,K,$.x,$.y)){let F=Math.abs(K-$.y)/(Z-$.x);if(TQ($,J)&&(F<N||F===N&&($.x>Y.x||$.x===Y.x&&bN(Y,$))))Y=$,N=F}$=$.next}while($!==X);return Y}function bN(J,Q){return aJ(J.prev,J,Q.prev)<0&&aJ(Q.next,J,J.next)<0}function xN(J,Q,$,Z){let K=J;do{if(K.z===0)K.z=hK(K.x,K.y,Q,$,Z);K.prevZ=K.prev,K.nextZ=K.next,K=K.next}while(K!==J);K.prevZ.nextZ=null,K.prevZ=null,gN(K)}function gN(J){let Q,$=1;do{let Z=J,K;J=null;let W=null;Q=0;while(Z){Q++;let Y=Z,X=0;for(let U=0;U<$;U++)if(X++,Y=Y.nextZ,!Y)break;let H=$;while(X>0||H>0&&Y){if(X!==0&&(H===0||!Y||Z.z<=Y.z))K=Z,Z=Z.nextZ,X--;else K=Y,Y=Y.nextZ,H--;if(W)W.nextZ=K;else J=K;K.prevZ=W,W=K}Z=Y}W.nextZ=null,$*=2}while(Q>1);return J}function hK(J,Q,$,Z,K){return J=(J-$)*K|0,Q=(Q-Z)*K|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,Q=(Q|Q<<8)&16711935,Q=(Q|Q<<4)&252645135,Q=(Q|Q<<2)&858993459,Q=(Q|Q<<1)&1431655765,J|Q<<1}function pN(J){let Q=J,$=J;do{if(Q.x<$.x||Q.x===$.x&&Q.y<$.y)$=Q;Q=Q.next}while(Q!==J);return $}function gH(J,Q,$,Z,K,W,Y,X){return(K-Y)*(Q-X)>=(J-Y)*(W-X)&&(J-Y)*(Z-X)>=($-Y)*(Q-X)&&($-Y)*(W-X)>=(K-Y)*(Z-X)}function MQ(J,Q,$,Z,K,W,Y,X){return!(J===Y&&Q===X)&&gH(J,Q,$,Z,K,W,Y,X)}function lN(J,Q){return J.next.i!==Q.i&&J.prev.i!==Q.i&&!mN(J,Q)&&(TQ(J,Q)&&TQ(Q,J)&&uN(J,Q)&&(aJ(J.prev,J,Q.prev)||aJ(J,Q.prev,Q))||j6(J,Q)&&aJ(J.prev,J,J.next)>0&&aJ(Q.prev,Q,Q.next)>0)}function aJ(J,Q,$){return(Q.y-J.y)*($.x-Q.x)-(Q.x-J.x)*($.y-Q.y)}function j6(J,Q){return J.x===Q.x&&J.y===Q.y}function pH(J,Q,$,Z){let K=r$(aJ(J,Q,$)),W=r$(aJ(J,Q,Z)),Y=r$(aJ($,Z,J)),X=r$(aJ($,Z,Q));if(K!==W&&Y!==X)return!0;if(K===0&&a$(J,$,Q))return!0;if(W===0&&a$(J,Z,Q))return!0;if(Y===0&&a$($,J,Z))return!0;if(X===0&&a$($,Q,Z))return!0;return!1}function a$(J,Q,$){return Q.x<=Math.max(J.x,$.x)&&Q.x>=Math.min(J.x,$.x)&&Q.y<=Math.max(J.y,$.y)&&Q.y>=Math.min(J.y,$.y)}function r$(J){return J>0?1:J<0?-1:0}function mN(J,Q){let $=J;do{if($.i!==J.i&&$.next.i!==J.i&&$.i!==Q.i&&$.next.i!==Q.i&&pH($,$.next,J,Q))return!0;$=$.next}while($!==J);return!1}function TQ(J,Q){return aJ(J.prev,J,J.next)<0?aJ(J,Q,J.next)>=0&&aJ(J,J.prev,Q)>=0:aJ(J,Q,J.prev)<0||aJ(J,J.next,Q)<0}function uN(J,Q){let $=J,Z=!1,K=(J.x+Q.x)/2,W=(J.y+Q.y)/2;do{if($.y>W!==$.next.y>W&&$.next.y!==$.y&&K<($.next.x-$.x)*(W-$.y)/($.next.y-$.y)+$.x)Z=!Z;$=$.next}while($!==J);return Z}function lH(J,Q){let $=bK(J.i,J.x,J.y),Z=bK(Q.i,Q.x,Q.y),K=J.next,W=Q.prev;return J.next=Q,Q.prev=J,$.next=K,K.prev=$,Z.next=$,$.prev=Z,W.next=Z,Z.prev=W,Z}function AX(J,Q,$,Z){let K=bK(J,Q,$);if(!Z)K.prev=K,K.next=K;else K.next=Z.next,K.prev=Z,Z.next.prev=K,Z.next=K;return K}function SQ(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function bK(J,Q,$){return{i:J,x:Q,y:$,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function dN(J,Q,$,Z){let K=0;for(let W=Q,Y=$-Z;W<$;W+=Z)K+=(J[Y]-J[W])*(J[W+1]+J[Y+1]),Y=W;return K}class mH{static triangulate(J,Q,$=2){return _N(J,Q,$)}}class T6{static area(J){let Q=J.length,$=0;for(let Z=Q-1,K=0;K<Q;Z=K++)$+=J[Z].x*J[K].y-J[K].x*J[Z].y;return $*0.5}static isClockWise(J){return T6.area(J)<0}static triangulateShape(J,Q){let $=[],Z=[],K=[];_X(J),TX($,J);let W=J.length;Q.forEach(_X);for(let X=0;X<Q.length;X++)Z.push(W),W+=Q[X].length,TX($,Q[X]);let Y=mH.triangulate($,Z);for(let X=0;X<Y.length;X+=3)K.push(Y.slice(X,X+3));return K}}function _X(J){let Q=J.length;if(Q>2&&J[Q-1].equals(J[0]))J.pop()}function TX(J,Q){for(let $=0;$<Q.length;$++)J.push(Q[$].x),J.push(Q[$].y)}class O7 extends mJ{constructor(J=[new N0(0,-0.5),new N0(0.5,0),new N0(0,0.5)],Q=12,$=0,Z=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:J,segments:Q,phiStart:$,phiLength:Z},Q=Math.floor(Q),Z=UJ(Z,0,Math.PI*2);let K=[],W=[],Y=[],X=[],H=[],U=1/Q,N=new S,F=new N0,G=new S,E=new S,O=new S,D=0,R=0;for(let q=0;q<=J.length-1;q++)switch(q){case 0:D=J[q+1].x-J[q].x,R=J[q+1].y-J[q].y,G.x=R*1,G.y=-D,G.z=R*0,O.copy(G),G.normalize(),X.push(G.x,G.y,G.z);break;case J.length-1:X.push(O.x,O.y,O.z);break;default:D=J[q+1].x-J[q].x,R=J[q+1].y-J[q].y,G.x=R*1,G.y=-D,G.z=R*0,E.copy(G),G.x+=O.x,G.y+=O.y,G.z+=O.z,G.normalize(),X.push(G.x,G.y,G.z),O.copy(E)}for(let q=0;q<=Q;q++){let C=$+q*U*Z,z=Math.sin(C),L=Math.cos(C);for(let V=0;V<=J.length-1;V++){N.x=J[V].x*z,N.y=J[V].y,N.z=J[V].x*L,W.push(N.x,N.y,N.z),F.x=q/Q,F.y=V/(J.length-1),Y.push(F.x,F.y);let P=X[3*V+0]*z,T=X[3*V+1],B=X[3*V+0]*L;H.push(P,T,B)}}for(let q=0;q<Q;q++)for(let C=0;C<J.length-1;C++){let z=C+q*J.length,L=z,V=z+J.length,P=z+J.length+1,T=z+1;K.push(L,V,T),K.push(P,T,V)}this.setIndex(K),this.setAttribute("position",new GJ(W,3)),this.setAttribute("uv",new GJ(Y,2)),this.setAttribute("normal",new GJ(H,3))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new O7(J.points,J.segments,J.phiStart,J.phiLength)}}class kJ extends mJ{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let K=J/2,W=Q/2,Y=Math.floor($),X=Math.floor(Z),H=Y+1,U=X+1,N=J/Y,F=Q/X,G=[],E=[],O=[],D=[];for(let R=0;R<U;R++){let q=R*F-W;for(let C=0;C<H;C++){let z=C*N-K;E.push(z,-q,0),O.push(0,0,1),D.push(C/Y),D.push(1-R/X)}}for(let R=0;R<X;R++)for(let q=0;q<Y;q++){let C=q+H*R,z=q+H*(R+1),L=q+1+H*(R+1),V=q+1+H*R;G.push(C,z,V),G.push(z,L,V)}this.setIndex(G),this.setAttribute("position",new GJ(E,3)),this.setAttribute("normal",new GJ(O,3)),this.setAttribute("uv",new GJ(D,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new kJ(J.width,J.height,J.widthSegments,J.heightSegments)}}class rQ extends mJ{constructor(J=new aQ([new N0(0,0.5),new N0(-0.5,-0.5),new N0(0.5,-0.5)]),Q=12){super();this.type="ShapeGeometry",this.parameters={shapes:J,curveSegments:Q};let $=[],Z=[],K=[],W=[],Y=0,X=0;if(Array.isArray(J)===!1)H(J);else for(let U=0;U<J.length;U++)H(J[U]),this.addGroup(Y,X,U),Y+=X,X=0;this.setIndex($),this.setAttribute("position",new GJ(Z,3)),this.setAttribute("normal",new GJ(K,3)),this.setAttribute("uv",new GJ(W,2));function H(U){let N=Z.length/3,F=U.extractPoints(Q),G=F.shape,E=F.holes;if(T6.isClockWise(G)===!1)G=G.reverse();for(let D=0,R=E.length;D<R;D++){let q=E[D];if(T6.isClockWise(q)===!0)E[D]=q.reverse()}let O=T6.triangulateShape(G,E);for(let D=0,R=E.length;D<R;D++){let q=E[D];G=G.concat(q)}for(let D=0,R=G.length;D<R;D++){let q=G[D];Z.push(q.x,q.y,0),K.push(0,0,1),W.push(q.x,q.y)}for(let D=0,R=O.length;D<R;D++){let q=O[D],C=q[0]+N,z=q[1]+N,L=q[2]+N;$.push(C,z,L),X+=3}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Q=this.parameters.shapes;return cN(Q,J)}static fromJSON(J,Q){let $=[];for(let Z=0,K=J.shapes.length;Z<K;Z++){let W=Q[J.shapes[Z]];$.push(W)}return new rQ($,J.curveSegments)}}function cN(J,Q){if(Q.shapes=[],Array.isArray(J))for(let $=0,Z=J.length;$<Z;$++){let K=J[$];Q.shapes.push(K.uuid)}else Q.shapes.push(J.uuid);return Q}class M8 extends mJ{constructor(J=1,Q=32,$=16,Z=0,K=Math.PI*2,W=0,Y=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:$,phiStart:Z,phiLength:K,thetaStart:W,thetaLength:Y},Q=Math.max(3,Math.floor(Q)),$=Math.max(2,Math.floor($));let X=Math.min(W+Y,Math.PI),H=0,U=[],N=new S,F=new S,G=[],E=[],O=[],D=[];for(let R=0;R<=$;R++){let q=[],C=R/$,z=W+C*Y,L=J*Math.cos(z),V=Math.sqrt(J*J-L*L),P=0;if(R===0&&W===0)P=0.5/Q;else if(R===$&&X===Math.PI)P=-0.5/Q;for(let T=0;T<=Q;T++){let B=T/Q,I=Z+B*K;N.x=-V*Math.cos(I),N.y=L,N.z=V*Math.sin(I),E.push(N.x,N.y,N.z),F.copy(N).normalize(),O.push(F.x,F.y,F.z),D.push(B+P,1-C),q.push(H++)}U.push(q)}for(let R=0;R<$;R++)for(let q=0;q<Q;q++){let C=U[R][q+1],z=U[R][q],L=U[R+1][q],V=U[R+1][q+1];if(R!==0||W>0)G.push(C,z,V);if(R!==$-1||X<Math.PI)G.push(z,L,V)}this.setIndex(G),this.setAttribute("position",new GJ(E,3)),this.setAttribute("normal",new GJ(O,3)),this.setAttribute("uv",new GJ(D,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new M8(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class w9 extends mJ{constructor(J=1,Q=0.4,$=12,Z=48,K=Math.PI*2,W=0,Y=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:$,tubularSegments:Z,arc:K,thetaStart:W,thetaLength:Y},$=Math.floor($),Z=Math.floor(Z);let X=[],H=[],U=[],N=[],F=new S,G=new S,E=new S;for(let O=0;O<=$;O++){let D=W+O/$*Y;for(let R=0;R<=Z;R++){let q=R/Z*K;G.x=(J+Q*Math.cos(D))*Math.cos(q),G.y=(J+Q*Math.cos(D))*Math.sin(q),G.z=Q*Math.sin(D),H.push(G.x,G.y,G.z),F.x=J*Math.cos(q),F.y=J*Math.sin(q),E.subVectors(G,F).normalize(),U.push(E.x,E.y,E.z),N.push(R/Z),N.push(O/$)}}for(let O=1;O<=$;O++)for(let D=1;D<=Z;D++){let R=(Z+1)*O+D-1,q=(Z+1)*(O-1)+D-1,C=(Z+1)*(O-1)+D,z=(Z+1)*O+D;X.push(R,q,z),X.push(q,C,z)}this.setIndex(X),this.setAttribute("position",new GJ(H,3)),this.setAttribute("normal",new GJ(U,3)),this.setAttribute("uv",new GJ(N,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new w9(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc,J.thetaStart,J.thetaLength)}}class i8 extends mJ{constructor(J=new E9(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),Q=64,$=1,Z=8,K=!1){super();this.type="TubeGeometry",this.parameters={path:J,tubularSegments:Q,radius:$,radialSegments:Z,closed:K};let W=J.computeFrenetFrames(Q,K);this.tangents=W.tangents,this.normals=W.normals,this.binormals=W.binormals;let Y=new S,X=new S,H=new N0,U=new S,N=[],F=[],G=[],E=[];O(),this.setIndex(E),this.setAttribute("position",new GJ(N,3)),this.setAttribute("normal",new GJ(F,3)),this.setAttribute("uv",new GJ(G,2));function O(){for(let C=0;C<Q;C++)D(C);D(K===!1?Q:0),q(),R()}function D(C){U=J.getPointAt(C/Q,U);let z=W.normals[C],L=W.binormals[C];for(let V=0;V<=Z;V++){let P=V/Z*Math.PI*2,T=Math.sin(P),B=-Math.cos(P);X.x=B*z.x+T*L.x,X.y=B*z.y+T*L.y,X.z=B*z.z+T*L.z,X.normalize(),F.push(X.x,X.y,X.z),Y.x=U.x+$*X.x,Y.y=U.y+$*X.y,Y.z=U.z+$*X.z,N.push(Y.x,Y.y,Y.z)}}function R(){for(let C=1;C<=Q;C++)for(let z=1;z<=Z;z++){let L=(Z+1)*(C-1)+(z-1),V=(Z+1)*C+(z-1),P=(Z+1)*C+z,T=(Z+1)*(C-1)+z;E.push(L,V,T),E.push(V,P,T)}}function q(){for(let C=0;C<=Q;C++)for(let z=0;z<=Z;z++)H.x=C/Q,H.y=z/Z,G.push(H.x,H.y)}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON();return J.path=this.parameters.path.toJSON(),J}static fromJSON(J){return new i8(new fK[J.path.type]().fromJSON(J.path),J.tubularSegments,J.radius,J.radialSegments,J.closed)}}function n7(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let K=J[$][Z];if(SX(K))if(K.isRenderTargetTexture)o0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=K.clone();else if(Array.isArray(K))if(SX(K[0])){let W=[];for(let Y=0,X=K.length;Y<X;Y++)W[Y]=K[Y].clone();Q[$][Z]=W}else Q[$][Z]=K.slice();else Q[$][Z]=K}}return Q}function C8(J){let Q={};for(let $=0;$<J.length;$++){let Z=n7(J[$]);for(let K in Z)Q[K]=Z[K]}return Q}function SX(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function nN(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function pW(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return NJ.workingColorSpace}var i9={clone:n7,merge:C8},sN=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iN=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rJ extends w8{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sN,this.fragmentShader=iN,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=n7(J.uniforms),this.uniformsGroups=nN(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let W=this.uniforms[Z].value;if(W&&W.isTexture)Q.uniforms[Z]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)Q.uniforms[Z]={type:"c",value:W.getHex()};else if(W&&W.isVector2)Q.uniforms[Z]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)Q.uniforms[Z]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)Q.uniforms[Z]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)Q.uniforms[Z]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)Q.uniforms[Z]={type:"m4",value:W.toArray()};else Q.uniforms[Z]={value:W}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let Z=J.uniforms[$];switch(this.uniforms[$]={},Z.type){case"t":this.uniforms[$].value=Q[Z.value]||null;break;case"c":this.uniforms[$].value=new h0().setHex(Z.value);break;case"v2":this.uniforms[$].value=new N0().fromArray(Z.value);break;case"v3":this.uniforms[$].value=new S().fromArray(Z.value);break;case"v4":this.uniforms[$].value=new pJ().fromArray(Z.value);break;case"m3":this.uniforms[$].value=new WJ().fromArray(Z.value);break;case"m4":this.uniforms[$].value=new QJ().fromArray(Z.value);break;default:this.uniforms[$].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class tQ extends rJ{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class i0 extends w8{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new h0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new h0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new N0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new H9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class R8 extends i0{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new N0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return UJ(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new h0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new h0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new h0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(J){if(this._retroreflectivity>0!==J>0)this.version++;this._retroreflectivity=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.retroreflectivity=J.retroreflectivity,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class lW extends w8{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class mW extends w8{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function Y7(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function JZ(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}function oN(J){function Q(K,W){return J[K]-J[W]}let $=J.length,Z=Array($);for(let K=0;K!==$;++K)Z[K]=K;return Z.sort(Q),Z}function wX(J,Q,$){let Z=J.length,K=new J.constructor(Z);for(let W=0,Y=0;Y!==Z;++W){let X=$[W]*Q;for(let H=0;H!==Q;++H)K[Y++]=J[X+H]}return K}function aN(J,Q,$,Z){let K=1,W=J[0];while(W!==void 0&&W[Z]===void 0)W=J[K++];if(W===void 0)return;let Y=W[Z];if(Y===void 0)return;if(Array.isArray(Y))do{if(Y=W[Z],Y!==void 0)Q.push(W.time),$.push(...Y);W=J[K++]}while(W!==void 0);else if(Y.toArray!==void 0)do{if(Y=W[Z],Y!==void 0)Q.push(W.time),Y.toArray($,$.length);W=J[K++]}while(W!==void 0);else do{if(Y=W[Z],Y!==void 0)Q.push(W.time),$.push(Y);W=J[K++]}while(W!==void 0)}class o9{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],K=Q[$-1];J:{Q:{let W;$:{Z:if(!(J<Z)){for(let Y=$+2;;){if(Z===void 0){if(J<K)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===Y)break;if(K=Z,Z=Q[++$],J<Z)break Q}W=Q.length;break $}if(!(J>=K)){let Y=Q[1];if(J<Y)$=2,K=Y;for(let X=$-2;;){if(K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===X)break;if(Z=K,K=Q[--$-1],J>=K)break Q}W=$,$=0;break $}break J}while($<W){let Y=$+W>>>1;if(J<Q[Y])W=Y;else $=Y+1}if(Z=Q[$],K=Q[$-1],K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,K,Z)}return this.interpolate_($,K,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,K=J*Z;for(let W=0;W!==Z;++W)Q[W]=$[K+W];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class uW extends o9{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,K=J-2,W=J+1,Y=Z[K],X=Z[W];if(Y===void 0)switch(this.getSettings_().endingStart){case 2401:K=J,Y=2*Q-$;break;case 2402:K=Z.length-2,Y=Q+Z[K]-Z[K+1];break;default:K=J,Y=$}if(X===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,X=2*$-Q;break;case 2402:W=1,X=$+Z[1]-Z[0];break;default:W=J-1,X=Q}let H=($-Q)*0.5,U=this.valueSize;this._weightPrev=H/(Q-Y),this._weightNext=H/(X-$),this._offsetPrev=K*U,this._offsetNext=W*U}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=J*Y,H=X-Y,U=this._offsetPrev,N=this._offsetNext,F=this._weightPrev,G=this._weightNext,E=($-Q)/(Z-Q),O=E*E,D=O*E,R=-F*D+2*F*O-F*E,q=(1+F)*D+(-1.5-2*F)*O+(-0.5+F)*E+1,C=(-1-G)*D+(1.5+G)*O+0.5*E,z=G*D-G*O;for(let L=0;L!==Y;++L)K[L]=R*W[U+L]+q*W[H+L]+C*W[X+L]+z*W[N+L];return K}}class SZ extends o9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=J*Y,H=X-Y,U=($-Q)/(Z-Q),N=1-U;for(let F=0;F!==Y;++F)K[F]=W[H+F]*N+W[X+F]*U;return K}}class dW extends o9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class cW extends o9{interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=J*Y,H=X-Y,U=this.inTangents,N=this.outTangents;if(!U||!N){let E=($-Q)/(Z-Q),O=1-E;for(let D=0;D!==Y;++D)K[D]=W[H+D]*O+W[X+D]*E;return K}let F=Y*2,G=J-1;for(let E=0;E!==Y;++E){let O=W[H+E],D=W[X+E],R=G*F+E*2,q=N[R],C=N[R+1],z=J*F+E*2,L=U[z],V=U[z+1],P=tN($,Q,q,L,Z);K[E]=uH(P,O,C,V,D)}return K}}function uH(J,Q,$,Z,K){let W=1-J;return W*W*W*Q+3*W*W*J*$+3*W*J*J*Z+J*J*J*K}function rN(J,Q,$,Z,K){let W=1-J;return 3*W*W*($-Q)+6*W*J*(Z-$)+3*J*J*(K-Z)}function tN(J,Q,$,Z,K){let W=(J-Q)/(K-Q);for(let Y=0;Y<8;Y++){let X=uH(W,Q,$,Z,K)-J;if(Math.abs(X)<0.0000000001)break;let H=rN(W,Q,$,Z,K);if(Math.abs(H)<0.0000000001)break;W=Math.max(0,Math.min(1,W-X/H))}return W}class l8{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=Y7(Q,this.TimeBufferType),this.values=Y7($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:Y7(J.times,Array),values:Y7(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z;if(JZ(J.settings))$.settings={inTangents:Y7(J.settings.inTangents,Array),outTangents:Y7(J.settings.outTangents,Array)}}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new dW(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new SZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new uW(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new cW(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return o0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J;if(JZ(this.settings))jX(this.settings.inTangents,J),jX(this.settings.outTangents,J)}return this}trim(J,Q){let $=this.times,Z=$.length,K=0,W=Z-1;while(K!==Z&&$[K]<J)++K;while(W!==-1&&$[W]>Q)--W;if(++W,K!==0||W!==Z){if(K>=W)W=Math.max(W,1),K=W-1;let Y=this.getValueSize();this.times=$.slice(K,W),this.values=this.values.slice(K*Y,W*Y)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)$J("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,K=$.length;if(K===0)$J("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let Y=0;Y!==K;Y++){let X=$[Y];if(typeof X==="number"&&isNaN(X)){$J("KeyframeTrack: Time is not a valid number.",this,Y,X),J=!1;break}if(W!==null&&W>X){$J("KeyframeTrack: Out of order keys.",this,Y,X,W),J=!1;break}W=X}if(Z!==void 0){if(b5(Z))for(let Y=0,X=Z.length;Y!==X;++Y){let H=Z[Y];if(isNaN(H)){$J("KeyframeTrack: Value is not a valid number.",this,Y,H),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,K=J.length-1,W=1;for(let Y=1;Y<K;++Y){let X=!1,H=J[Y],U=J[Y+1];if(H!==U&&(Y!==1||H!==J[0]))if(!Z){let N=Y*$,F=N-$,G=N+$;for(let E=0;E!==$;++E){let O=Q[N+E];if(O!==Q[F+E]||O!==Q[G+E]){X=!0;break}}}else X=!0;if(X){if(Y!==W){J[W]=J[Y];let N=Y*$,F=W*$;for(let G=0;G!==$;++G)Q[F+G]=Q[N+G]}++W}}if(K>0){J[W]=J[K];for(let Y=K*$,X=W*$,H=0;H!==$;++H)Q[X+H]=Q[Y+H];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=Q.slice(0,W*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);if(Z.createInterpolant=this.createInterpolant,JZ(this.settings))Z.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return Z}}function jX(J,Q){for(let $=0,Z=J.length;$!==Z;$+=2)J[$]*=Q}l8.prototype.ValueTypeName="";l8.prototype.TimeBufferType=Float32Array;l8.prototype.ValueBufferType=Float32Array;l8.prototype.DefaultInterpolation=2301;class R7 extends l8{constructor(J,Q,$){super(J,Q,$)}}R7.prototype.ValueTypeName="bool";R7.prototype.ValueBufferType=Array;R7.prototype.DefaultInterpolation=2300;R7.prototype.InterpolantFactoryMethodLinear=void 0;R7.prototype.InterpolantFactoryMethodSmooth=void 0;class wZ extends l8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}wZ.prototype.ValueTypeName="color";class L7 extends l8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}L7.prototype.ValueTypeName="number";class nW extends o9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=($-Q)/(Z-Q),H=J*Y;for(let U=H+Y;H!==U;H+=4)PJ.slerpFlat(K,0,W,H-Y,W,H,X);return K}}class V7 extends l8{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new nW(this.times,this.values,this.getValueSize(),J)}}V7.prototype.ValueTypeName="quaternion";V7.prototype.InterpolantFactoryMethodSmooth=void 0;class D7 extends l8{constructor(J,Q,$){super(J,Q,$)}}D7.prototype.ValueTypeName="string";D7.prototype.ValueBufferType=Array;D7.prototype.DefaultInterpolation=2300;D7.prototype.InterpolantFactoryMethodLinear=void 0;D7.prototype.InterpolantFactoryMethodSmooth=void 0;class s7 extends l8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}s7.prototype.ValueTypeName="vector";class y6{constructor(J="",Q=-1,$=[],Z=2500){if(this.name=J,this.tracks=$,this.duration=Q,this.blendMode=Z,this.uuid=c8(),this.userData={},this.duration<0)this.resetDuration()}static parse(J){let Q=[],$=J.tracks,Z=1/(J.fps||1);for(let W=0,Y=$.length;W!==Y;++W)Q.push(JG($[W]).scale(Z));let K=new this(J.name,J.duration,Q,J.blendMode);return K.uuid=J.uuid,K.userData=JSON.parse(J.userData||"{}"),K}static toJSON(J){let Q=[],$=J.tracks,Z={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode,userData:JSON.stringify(J.userData)};for(let K=0,W=$.length;K!==W;++K)Q.push(l8.toJSON($[K]));return Z}static CreateFromMorphTargetSequence(J,Q,$,Z){let K=Q.length,W=[];for(let Y=0;Y<K;Y++){let X=[],H=[];X.push((Y+K-1)%K,Y,(Y+1)%K),H.push(0,1,0);let U=oN(X);if(X=wX(X,1,U),H=wX(H,1,U),!Z&&X[0]===0)X.push(K),H.push(H[0]);W.push(new L7(".morphTargetInfluences["+Q[Y].name+"]",X,H).scale(1/$))}return new this(J,-1,W)}static findByName(J,Q){let $=J;if(!Array.isArray(J)){let Z=J;$=Z.geometry&&Z.geometry.animations||Z.animations}for(let Z=0;Z<$.length;Z++)if($[Z].name===Q)return $[Z];return null}static CreateClipsFromMorphTargetSequences(J,Q,$){let Z={},K=/^([\w-]*?)([\d]+)$/;for(let Y=0,X=J.length;Y<X;Y++){let H=J[Y],U=H.name.match(K);if(U&&U.length>1){let N=U[1],F=Z[N];if(!F)Z[N]=F=[];F.push(H)}}let W=[];for(let Y in Z)W.push(this.CreateFromMorphTargetSequence(Y,Z[Y],Q,$));return W}resetDuration(){let J=this.tracks,Q=0;for(let $=0,Z=J.length;$!==Z;++$){let K=this.tracks[$];Q=Math.max(Q,K.times[K.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let $=0;$<this.tracks.length;$++)J.push(this.tracks[$].clone());let Q=new this.constructor(this.name,this.duration,J,this.blendMode);return Q.userData=JSON.parse(JSON.stringify(this.userData)),Q}toJSON(){return this.constructor.toJSON(this)}}function eN(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return L7;case"vector":case"vector2":case"vector3":case"vector4":return s7;case"color":return wZ;case"quaternion":return V7;case"bool":case"boolean":return R7;case"string":return D7}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function JG(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=eN(J.type);if(J.times===void 0){let Z=[],K=[];aN(J.keys,Z,K,"value"),J.times=Z,J.values=K}let $;if(Q.parse!==void 0)$=Q.parse(J);else $=new Q(J.name,J.times,J.values,J.interpolation);if(JZ(J.settings))$.settings={inTangents:Y7(J.settings.inTangents,Float32Array),outTangents:Y7(J.settings.outTangents,Float32Array)};return $}var I9={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;if(yX(J))return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;if(yX(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function yX(J){try{let Q=J.slice(J.indexOf(":")+1);return new URL(Q).protocol==="blob:"}catch(Q){return!1}}class sW{constructor(J,Q,$){let Z=this,K=!1,W=0,Y=0,X=void 0,H=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(Y++,K===!1){if(Z.onStart!==void 0)Z.onStart(U,W,Y)}K=!0},this.itemEnd=function(U){if(W++,Z.onProgress!==void 0)Z.onProgress(U,W,Y);if(W===Y){if(K=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),X)return X(U);return U},this.setURLModifier=function(U){return X=U,this},this.addHandler=function(U,N){return H.push(U,N),this},this.removeHandler=function(U){let N=H.indexOf(U);if(N!==-1)H.splice(N,2);return this},this.getHandler=function(U){for(let N=0,F=H.length;N<F;N+=2){let G=H[N],E=H[N+1];if(G.global)G.lastIndex=0;if(G.test(U))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var dH=new sW;class a9{constructor(J){if(this.manager=J!==void 0?J:dH,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,K){$.load(J,Z,Q,K)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}a9.DEFAULT_MATERIAL_NAME="__DEFAULT";var d9={};class cH extends Error{constructor(J,Q){super(J);this.response=Q}}class eQ extends a9{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=I9.get(`file:${J}`);if(K!==void 0){this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(K);this.manager.itemEnd(J)},0);return}if(d9[J]!==void 0){d9[J].push({onLoad:Q,onProgress:$,onError:Z});return}d9[J]=[],d9[J].push({onLoad:Q,onProgress:$,onError:Z});let W=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),Y=this.mimeType,X=this.responseType;fetch(W).then((H)=>{if(H.status===200||H.status===0){if(H.status===0)o0("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||H.body===void 0||H.body.getReader===void 0)return H;let U=d9[J],N=H.body.getReader(),F=H.headers.get("X-File-Size")||H.headers.get("Content-Length"),G=F?parseInt(F):0,E=G!==0,O=0,D=new ReadableStream({start(R){q();function q(){N.read().then(({done:C,value:z})=>{if(C)R.close();else{O+=z.byteLength;let L=new ProgressEvent("progress",{lengthComputable:E,loaded:O,total:G});for(let V=0,P=U.length;V<P;V++){let T=U[V];if(T.onProgress)T.onProgress(L)}R.enqueue(z),q()}},(C)=>{R.error(C)})}}});return new Response(D)}else throw new cH(`fetch for "${H.url}" responded with ${H.status}: ${H.statusText}`,H)}).then((H)=>{switch(X){case"arraybuffer":return H.arrayBuffer();case"blob":return H.blob();case"document":return H.text().then((U)=>{return new DOMParser().parseFromString(U,Y)});case"json":return H.json();default:if(Y==="")return H.text();else{let N=/charset="?([^;"\s]*)"?/i.exec(Y),F=N&&N[1]?N[1].toLowerCase():void 0,G=new TextDecoder(F);return H.arrayBuffer().then((E)=>G.decode(E))}}}).then((H)=>{I9.add(`file:${J}`,H);let U=d9[J];delete d9[J];for(let N=0,F=U.length;N<F;N++){let G=U[N];if(G.onLoad)G.onLoad(H)}}).catch((H)=>{let U=d9[J];if(U===void 0)throw this.manager.itemError(J),H;delete d9[J];for(let N=0,F=U.length;N<F;N++){let G=U[N];if(G.onError)G.onError(H)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var I6=new WeakMap;class iW extends a9{constructor(J){super(J)}load(J,Q,$,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=this,W=I9.get(`image:${J}`);if(W!==void 0){if(W.complete===!0)K.manager.itemStart(J),setTimeout(function(){if(Q)Q(W);K.manager.itemEnd(J)},0);else{let N=I6.get(W);if(N===void 0)N=[],I6.set(W,N);N.push({onLoad:Q,onError:Z})}return W}let Y=S6("img");function X(){if(U(),Q)Q(this);let N=I6.get(this)||[];for(let F=0;F<N.length;F++){let G=N[F];if(G.onLoad)G.onLoad(this)}I6.delete(this),K.manager.itemEnd(J)}function H(N){if(U(),Z)Z(N);I9.remove(`image:${J}`);let F=I6.get(this)||[];for(let G=0;G<F.length;G++){let E=F[G];if(E.onError)E.onError(N)}I6.delete(this),K.manager.itemError(J),K.manager.itemEnd(J)}function U(){Y.removeEventListener("load",X,!1),Y.removeEventListener("error",H,!1)}if(Y.addEventListener("load",X,!1),Y.addEventListener("error",H,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)Y.crossOrigin=this.crossOrigin}return I9.add(`image:${J}`,Y),K.manager.itemStart(J),Y.src=J,Y}}class jZ extends a9{constructor(J){super(J)}load(J,Q,$,Z){let K=new eJ,W=new iW(this.manager);return W.setCrossOrigin(this.crossOrigin),W.setPath(this.path),W.load(J,function(Y){if(K.image=Y,K.needsUpdate=!0,Q!==void 0)Q(K)},$,Z),K}}class n6 extends SJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new h0(J),this.intensity=Q}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}class yZ extends n6{constructor(J,Q,$){super(J,$);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(SJ.DEFAULT_UP),this.updateMatrix(),this.groundColor=new h0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}toJSON(J){let Q=super.toJSON(J);return Q.object.groundColor=this.groundColor.getHex(),Q}}var jK=new QJ,vX=new S,fX=new S;class J${constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new N0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new QJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nQ,this._frameExtents=new N0(1,1),this._viewportCount=1,this._viewports=[new pJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera;vX.setFromMatrixPosition(J.matrixWorld),Q.position.copy(vX),fX.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(fX),Q.updateMatrixWorld(),this._updateMatrix(Q,this.matrix,this._frustum)}_updateMatrix(J,Q,$,Z){jK.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),$.setFromProjectionMatrix(jK,J.coordinateSystem,J.reversedDepth);let K=this._frameExtents,W=Z?Z.z/K.x:1,Y=Z?Z.w/K.y:1,X=Z?Z.x/K.x:0,H=Z?Z.y/K.y:0;if(J.coordinateSystem===2001||J.reversedDepth)Q.set(0.5*W,0,0,0.5*W+X,0,0.5*Y,0,0.5*Y+H,0,0,1,0,0,0,0,1);else Q.set(0.5*W,0,0,0.5*W+X,0,0.5*Y,0,0.5*Y+H,0,0,0.5,0.5,0,0,0,1);Q.multiply(jK)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var t$=new S,e$=new PJ,P9=new S;class vZ extends SJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new QJ,this.projectionMatrix=new QJ,this.projectionMatrixInverse=new QJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(t$,e$,P9),P9.x===1&&P9.y===1&&P9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(t$,e$,P9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(t$,e$,P9),P9.x===1&&P9.y===1&&P9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(t$,e$,P9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var W7=new S,hX=new N0,bX=new N0;class H8 extends vZ{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=w7*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(CQ*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return w7*2*Math.atan(Math.tan(CQ*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){W7.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(W7.x,W7.y).multiplyScalar(-J/W7.z),W7.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(W7.x,W7.y).multiplyScalar(-J/W7.z)}getViewSize(J,Q){return this.getViewBounds(J,hX,bX),Q.subVectors(bX,hX)}setViewOffset(J,Q,$,Z,K,W){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(CQ*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,K=-0.5*Z,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:X,fullHeight:H}=W;K+=W.offsetX*Z/X,Q-=W.offsetY*$/H,Z*=W.width/X,$*=W.height/H}let Y=this.filmOffset;if(Y!==0)K+=J*Y/this.getFilmWidth();this.projectionMatrix.makePerspective(K,K+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class nH extends J${constructor(){super(new H8(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=w7*2*J.angle*this.focus,Z=this.mapSize.width/this.mapSize.height*this.aspect,K=J.distance||Q.far;if($!==Q.fov||Z!==Q.aspect||K!==Q.far)Q.fov=$,Q.aspect=Z,Q.far=K,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this.aspect=J.aspect,this}toJSON(){let J=super.toJSON();return J.focus=this.focus,J.aspect=this.aspect,J}}class s6 extends n6{constructor(J,Q,$=0,Z=Math.PI/3,K=0,W=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(SJ.DEFAULT_UP),this.updateMatrix(),this.target=new SJ,this.distance=$,this.angle=Z,this.penumbra=K,this.decay=W,this.map=null,this.shadow=new nH}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);if(Q.object.distance=this.distance,Q.object.angle=this.angle,Q.object.decay=this.decay,Q.object.penumbra=this.penumbra,Q.object.target=this.target.uuid,this.map&&this.map.isTexture)Q.object.map=this.map.toJSON(J).uuid;return Q.object.shadow=this.shadow.toJSON(),Q}}class sH extends J${constructor(){super(new H8(90,1,0.5,500));this.isPointLightShadow=!0}}class r9 extends n6{constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new sH}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class t9 extends vZ{constructor(J=-1,Q=1,$=1,Z=-1,K=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=K,this.far=W,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,K,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,K=$-J,W=$+J,Y=Z+Q,X=Z-Q;if(this.view!==null&&this.view.enabled){let H=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;K+=H*this.view.offsetX,W=K+H*this.view.width,Y-=U*this.view.offsetY,X=Y-U*this.view.height}this.projectionMatrix.makeOrthographic(K,W,Y,X,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class iH extends J${constructor(){super(new t9(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class i6 extends n6{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(SJ.DEFAULT_UP),this.updateMatrix(),this.target=new SJ,this.shadow=new iH}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class B7{static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}var yK=new WeakMap;class fZ extends a9{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")o0("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")o0("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(J){return this.options=J,this}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=this,W=I9.get(`image-bitmap:${J}`);if(W!==void 0){if(K.manager.itemStart(J),W.then){W.then((H)=>{if(yK.has(W)===!0){if(Z)Z(yK.get(W));K.manager.itemError(J),K.manager.itemEnd(J)}else{if(Q)Q(H);K.manager.itemEnd(J)}});return}setTimeout(function(){if(Q)Q(W);K.manager.itemEnd(J)},0);return}let Y={};Y.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",Y.headers=this.requestHeader,Y.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let X=fetch(J,Y).then(function(H){return H.blob()}).then(function(H){return createImageBitmap(H,Object.assign({},K.options,{colorSpaceConversion:"none"}))}).then(function(H){if(I9.add(`image-bitmap:${J}`,H),Q)Q(H);return K.manager.itemEnd(J),H}).catch(function(H){if(Z)Z(H);yK.set(X,H),I9.remove(`image-bitmap:${J}`),K.manager.itemError(J),K.manager.itemEnd(J)});I9.add(`image-bitmap:${J}`,X),K.manager.itemStart(J)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var z6=-90,A6=1;class oW extends SJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new H8(z6,A6,J,Q);Z.layers=this.layers,this.add(Z);let K=new H8(z6,A6,J,Q);K.layers=this.layers,this.add(K);let W=new H8(z6,A6,J,Q);W.layers=this.layers,this.add(W);let Y=new H8(z6,A6,J,Q);Y.layers=this.layers,this.add(Y);let X=new H8(z6,A6,J,Q);X.layers=this.layers,this.add(X);let H=new H8(z6,A6,J,Q);H.layers=this.layers,this.add(H)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,K,W,Y,X]=Q;for(let H of Q)this.remove(H);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),K.up.set(0,0,-1),K.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),Y.up.set(0,1,0),Y.lookAt(0,0,1),X.up.set(0,1,0),X.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),K.up.set(0,0,1),K.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),Y.up.set(0,-1,0),Y.lookAt(0,0,1),X.up.set(0,-1,0),X.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let H of Q)this.add(H),H.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[K,W,Y,X,H,U]=this.children,N=J.getRenderTarget(),F=J.getActiveCubeFace(),G=J.getActiveMipmapLevel(),E=J.xr.enabled;J.xr.enabled=!1;let O=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let D=!1;if(J.isWebGLRenderer===!0)D=J.state.buffers.depth.getReversed();else D=J.reversedDepthBuffer;if(J.setRenderTarget($,0,Z),D&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,1,Z),D&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,2,Z),D&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,3,Z),D&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget($,4,Z),D&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),$.texture.generateMipmaps=O,J.setRenderTarget($,5,Z),D&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(N,F,G),J.xr.enabled=E,$.texture.needsPMREMUpdate=!0}}class aW extends H8{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}class hZ{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(J){if(this._document=J,J.hidden!==void 0)this._pageVisibilityHandler=QG.bind(this),J.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(J){return this._timescale=J,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(J){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(J!==void 0?J:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function QG(){if(this._document.hidden===!1)this.reset()}class rW{constructor(J,Q,$){this.binding=J,this.valueSize=$;let Z,K,W;switch(Q){case"quaternion":Z=this._slerp,K=this._slerpAdditive,W=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array($*6),this._workIndex=5;break;case"string":case"bool":Z=this._select,K=this._select,W=this._setAdditiveIdentityOther,this.buffer=Array($*5);break;default:Z=this._lerp,K=this._lerpAdditive,W=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array($*5)}this._mixBufferRegion=Z,this._mixBufferRegionAdditive=K,this._setIdentity=W,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(J,Q){let $=this.buffer,Z=this.valueSize,K=J*Z+Z,W=this.cumulativeWeight;if(W===0){for(let Y=0;Y!==Z;++Y)$[K+Y]=$[Y];W=Q}else{W+=Q;let Y=Q/W;this._mixBufferRegion($,K,0,Y,Z)}this.cumulativeWeight=W}accumulateAdditive(J){let Q=this.buffer,$=this.valueSize,Z=$*this._addIndex;if(this.cumulativeWeightAdditive===0)this._setIdentity();this._mixBufferRegionAdditive(Q,Z,0,J,$),this.cumulativeWeightAdditive+=J}apply(J){let Q=this.valueSize,$=this.buffer,Z=J*Q+Q,K=this.cumulativeWeight,W=this.cumulativeWeightAdditive,Y=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,K<1){let X=Q*this._origIndex;this._mixBufferRegion($,Z,X,1-K,Q)}if(W>0)this._mixBufferRegionAdditive($,Z,this._addIndex*Q,1,Q);for(let X=Q,H=Q+Q;X!==H;++X)if($[X]!==$[X+Q]){Y.setValue($,Z);break}}saveOriginalState(){let J=this.binding,Q=this.buffer,$=this.valueSize,Z=$*this._origIndex;J.getValue(Q,Z);for(let K=$,W=Z;K!==W;++K)Q[K]=Q[Z+K%$];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let J=this.valueSize*3;this.binding.setValue(this.buffer,J)}_setAdditiveIdentityNumeric(){let J=this._addIndex*this.valueSize,Q=J+this.valueSize;for(let $=J;$<Q;$++)this.buffer[$]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let J=this._origIndex*this.valueSize,Q=this._addIndex*this.valueSize;for(let $=0;$<this.valueSize;$++)this.buffer[Q+$]=this.buffer[J+$]}_select(J,Q,$,Z,K){if(Z>=0.5)for(let W=0;W!==K;++W)J[Q+W]=J[$+W]}_slerp(J,Q,$,Z){PJ.slerpFlat(J,Q,J,Q,J,$,Z)}_slerpAdditive(J,Q,$,Z,K){let W=this._workIndex*K;PJ.multiplyQuaternionsFlat(J,W,J,Q,J,$),PJ.slerpFlat(J,Q,J,Q,J,W,Z)}_lerp(J,Q,$,Z,K){let W=1-Z;for(let Y=0;Y!==K;++Y){let X=Q+Y;J[X]=J[X]*W+J[$+Y]*Z}}_lerpAdditive(J,Q,$,Z,K){for(let W=0;W!==K;++W){let Y=Q+W;J[Y]=J[Y]+J[$+W]*Z}}}var tW="\\[\\]\\.:\\/",$G=new RegExp("["+tW+"]","g"),eW="[^"+tW+"]",ZG="[^"+tW.replace("\\.","")+"]",KG=/((?:WC+[\/:])*)/.source.replace("WC",eW),WG=/(WCOD+)?/.source.replace("WCOD",ZG),YG=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eW),XG=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eW),HG=new RegExp("^"+KG+WG+YG+XG+"$"),UG=["material","materials","bones","map"];class oH{constructor(J,Q,$){let Z=$||jJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,K=$.length;Z!==K;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class jJ{constructor(J,Q,$){this.path=Q,this.parsedPath=$||jJ.parseTrackName(Q),this.node=jJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new jJ(J,Q,$);else return new jJ.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace($G,"")}static parseTrackName(J){let Q=HG.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let K=$.nodeName.substring(Z+1);if(UG.indexOf(K)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=K}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(K){for(let W=0;W<K.length;W++){let Y=K[W];if(Y.name===Q||Y.uuid===Q)return Y;let X=$(Y.children);if(X)return X}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,K=Q.propertyIndex;if(!J)J=jJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){o0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let H=Q.objectIndex;switch($){case"materials":if(!J.material){$J("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){$J("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){$J("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===H){H=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){$J("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){$J("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){$J("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(H!==void 0){if(J[H]===void 0){$J("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[H]}}let W=J[Z];if(W===void 0){let H=Q.nodeName;$J("PropertyBinding: Trying to update property for track: "+H+"."+Z+" but it wasn't found.",J);return}let Y=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)Y=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)Y=this.Versioning.MatrixWorldNeedsUpdate;let X=this.BindingType.Direct;if(K!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){$J("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){$J("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[K]!==void 0)K=J.morphTargetDictionary[K]}X=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=K}else if(W.fromArray!==void 0&&W.toArray!==void 0)X=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))X=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=Z;this.getValue=this.GetterByBindingType[X],this.setValue=this.SetterByBindingTypeAndVersioning[X][Y]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}jJ.Composite=oH;jJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};jJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};jJ.prototype.GetterByBindingType=[jJ.prototype._getValue_direct,jJ.prototype._getValue_array,jJ.prototype._getValue_arrayElement,jJ.prototype._getValue_toArray];jJ.prototype.SetterByBindingTypeAndVersioning=[[jJ.prototype._setValue_direct,jJ.prototype._setValue_direct_setNeedsUpdate,jJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[jJ.prototype._setValue_array,jJ.prototype._setValue_array_setNeedsUpdate,jJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[jJ.prototype._setValue_arrayElement,jJ.prototype._setValue_arrayElement_setNeedsUpdate,jJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[jJ.prototype._setValue_fromArray,jJ.prototype._setValue_fromArray_setNeedsUpdate,jJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class JY{constructor(J,Q,$=null,Z=Q.blendMode){this._mixer=J,this._clip=Q,this._localRoot=$,this.blendMode=Z;let K=Q.tracks,W=K.length,Y=Array(W),X={endingStart:2400,endingEnd:2400};for(let H=0;H!==W;++H){let U=K[H].createInterpolant(null);Y[H]=U,U.settings=X}this._interpolantSettings=X,this._interpolants=Y,this._propertyBindings=Array(W),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(J){return this._startTime=J,this}setLoop(J,Q){return this.loop=J,this.repetitions=Q,this}setEffectiveWeight(J){return this.weight=J,this._effectiveWeight=this.enabled?J:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(J){return this._scheduleFading(J,0,1)}fadeOut(J){return this._scheduleFading(J,1,0)}crossFadeFrom(J,Q,$=!1){if(J.fadeOut(Q),this.fadeIn(Q),$===!0){let Z=this._clip.duration,K=J._clip.duration,W=K/Z,Y=Z/K;J._restoreTimeScale=J.timeScale,this._restoreTimeScale=this.timeScale,J.warp(1,W,Q),this.warp(Y,1,Q)}return this}crossFadeTo(J,Q,$=!1){return J.crossFadeFrom(this,Q,$)}stopFading(){let J=this._weightInterpolant;if(J!==null)this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this}setEffectiveTimeScale(J){return this.timeScale=J,this._effectiveTimeScale=this.paused?0:J,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(J){return this.timeScale=this._clip.duration/J,this.stopWarping()}syncWith(J){return this.time=J.time,this.timeScale=J.timeScale,this.stopWarping()}halt(J){return this.warp(this._effectiveTimeScale,0,J)}warp(J,Q,$){let Z=this._mixer,K=Z.time,W=this.timeScale,Y=this._timeScaleInterpolant;if(Y===null)Y=Z._lendControlInterpolant(),this._timeScaleInterpolant=Y;let{parameterPositions:X,sampleValues:H}=Y;return X[0]=K,X[1]=K+$,H[0]=J/W,H[1]=Q/W,this}stopWarping(){let J=this._timeScaleInterpolant;if(J!==null)this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(J,Q,$,Z){if(!this.enabled){this._updateWeight(J);return}let K=this._startTime;if(K!==null){let X=(J-K)*$;if(X<0||$===0)Q=0;else this._startTime=null,Q=$*X}Q*=this._updateTimeScale(J);let W=this._updateTime(Q),Y=this._updateWeight(J);if(Y>0){let X=this._interpolants,H=this._propertyBindings;switch(this.blendMode){case 2501:for(let U=0,N=X.length;U!==N;++U)X[U].evaluate(W),H[U].accumulateAdditive(Y);break;case 2500:default:for(let U=0,N=X.length;U!==N;++U)X[U].evaluate(W),H[U].accumulate(Z,Y)}}}_updateWeight(J){let Q=0;if(this.enabled){Q=this.weight;let $=this._weightInterpolant;if($!==null){let Z=$.evaluate(J)[0];if(Q*=Z,J>$.parameterPositions[1]){if(this.stopFading(),Z===0)this.enabled=!1}}}return this._effectiveWeight=Q,Q}_updateTimeScale(J){let Q=0;if(!this.paused){Q=this.timeScale;let $=this._timeScaleInterpolant;if($!==null){let Z=$.evaluate(J)[0];if(Q*=Z,J>$.parameterPositions[1]){if(Q===0)this.paused=!0;else{if(this._restoreTimeScale!==null)Q=this._restoreTimeScale;this.timeScale=Q}this.stopWarping()}}}return this._effectiveTimeScale=Q,Q}_updateTime(J){let Q=this._clip.duration,$=this.loop,Z=this.time+J,K=this._loopCount,W=$===2202;if(J===0){if(K===-1)return Z;return W&&(K&1)===1?Q-Z:Z}if($===2200){if(K===-1)this._loopCount=0,this._setEndings(!0,!0,!1);J:{if(Z>=Q)Z=Q;else if(Z<0)Z=0;else{this.time=Z;break J}if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;this.time=Z,this._mixer.dispatchEvent({type:"finished",action:this,direction:J<0?-1:1})}}else{if(K===-1)if(J>=0)K=0,this._setEndings(!0,this.repetitions===0,W);else this._setEndings(this.repetitions===0,!0,W);if(Z>=Q||Z<0){let Y=Math.floor(Z/Q);Z-=Q*Y,K+=Math.abs(Y);let X=this.repetitions-K;if(X<=0){if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;Z=J>0?Q:0,this.time=Z,this._mixer.dispatchEvent({type:"finished",action:this,direction:J>0?1:-1})}else{if(X===1){let H=J<0;this._setEndings(H,!H,W)}else this._setEndings(!1,!1,W);this._loopCount=K,this.time=Z,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:Y})}}else this._loopCount=K,this.time=Z;if(W&&(K&1)===1)return Q-Z}return Z}_setEndings(J,Q,$){let Z=this._interpolantSettings;if($)Z.endingStart=2401,Z.endingEnd=2401;else{if(J)Z.endingStart=this.zeroSlopeAtStart?2401:2400;else Z.endingStart=2402;if(Q)Z.endingEnd=this.zeroSlopeAtEnd?2401:2400;else Z.endingEnd=2402}}_scheduleFading(J,Q,$){let Z=this._mixer,K=Z.time,W=this._weightInterpolant;if(W===null)W=Z._lendControlInterpolant(),this._weightInterpolant=W;let{parameterPositions:Y,sampleValues:X}=W;return Y[0]=K,X[0]=Q,Y[1]=K+J,X[1]=$,this}}var NG=new Float32Array(1);class Q$ extends F9{constructor(J){super();if(this._root=J,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(J,Q){let $=J._localRoot||this._root,Z=J._clip.tracks,K=Z.length,W=J._propertyBindings,Y=J._interpolants,X=$.uuid,H=this._bindingsByRootAndName,U=H[X];if(U===void 0)U={},H[X]=U;for(let N=0;N!==K;++N){let F=Z[N],G=F.name,E=U[G];if(E!==void 0)++E.referenceCount,W[N]=E;else{if(E=W[N],E!==void 0){if(E._cacheIndex===null)++E.referenceCount,this._addInactiveBinding(E,X,G);continue}let O=Q&&Q._propertyBindings[N].binding.parsedPath;E=new rW(jJ.create($,G,O),F.ValueTypeName,F.getValueSize()),++E.referenceCount,this._addInactiveBinding(E,X,G),W[N]=E}Y[N].resultBuffer=E.buffer}}_activateAction(J){if(!this._isActiveAction(J)){if(J._cacheIndex===null){let $=(J._localRoot||this._root).uuid,Z=J._clip.uuid,K=this._actionsByClip[Z];this._bindAction(J,K&&K.knownActions[0]),this._addInactiveAction(J,Z,$)}let Q=J._propertyBindings;for(let $=0,Z=Q.length;$!==Z;++$){let K=Q[$];if(K.useCount++===0)this._lendBinding(K),K.saveOriginalState()}this._lendAction(J)}}_deactivateAction(J){if(this._isActiveAction(J)){let Q=J._propertyBindings;for(let $=0,Z=Q.length;$!==Z;++$){let K=Q[$];if(--K.useCount===0)K.restoreOriginalState(),this._takeBackBinding(K)}this._takeBackAction(J)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let J=this;this.stats={actions:{get total(){return J._actions.length},get inUse(){return J._nActiveActions}},bindings:{get total(){return J._bindings.length},get inUse(){return J._nActiveBindings}},controlInterpolants:{get total(){return J._controlInterpolants.length},get inUse(){return J._nActiveControlInterpolants}}}}_isActiveAction(J){let Q=J._cacheIndex;return Q!==null&&Q<this._nActiveActions}_addInactiveAction(J,Q,$){let Z=this._actions,K=this._actionsByClip,W=K[Q];if(W===void 0)W={knownActions:[J],actionByRoot:{}},J._byClipCacheIndex=0,K[Q]=W;else{let Y=W.knownActions;J._byClipCacheIndex=Y.length,Y.push(J)}J._cacheIndex=Z.length,Z.push(J),W.actionByRoot[$]=J}_removeInactiveAction(J){let Q=this._actions,$=Q[Q.length-1],Z=J._cacheIndex;$._cacheIndex=Z,Q[Z]=$,Q.pop(),J._cacheIndex=null;let K=J._clip.uuid,W=this._actionsByClip,Y=W[K],X=Y.knownActions,H=X[X.length-1],U=J._byClipCacheIndex;H._byClipCacheIndex=U,X[U]=H,X.pop(),J._byClipCacheIndex=null;let N=Y.actionByRoot,F=(J._localRoot||this._root).uuid;if(delete N[F],X.length===0)delete W[K];this._removeInactiveBindingsForAction(J)}_removeInactiveBindingsForAction(J){let Q=J._propertyBindings;for(let $=0,Z=Q.length;$!==Z;++$){let K=Q[$];if(--K.referenceCount===0)this._removeInactiveBinding(K)}}_lendAction(J){let Q=this._actions,$=J._cacheIndex,Z=this._nActiveActions++,K=Q[Z];J._cacheIndex=Z,Q[Z]=J,K._cacheIndex=$,Q[$]=K}_takeBackAction(J){let Q=this._actions,$=J._cacheIndex,Z=--this._nActiveActions,K=Q[Z];J._cacheIndex=Z,Q[Z]=J,K._cacheIndex=$,Q[$]=K}_addInactiveBinding(J,Q,$){let Z=this._bindingsByRootAndName,K=this._bindings,W=Z[Q];if(W===void 0)W={},Z[Q]=W;W[$]=J,J._cacheIndex=K.length,K.push(J)}_removeInactiveBinding(J){let Q=this._bindings,$=J.binding,Z=$.rootNode.uuid,K=$.path,W=this._bindingsByRootAndName,Y=W[Z],X=Q[Q.length-1],H=J._cacheIndex;if(X._cacheIndex=H,Q[H]=X,Q.pop(),delete Y[K],Object.keys(Y).length===0)delete W[Z]}_lendBinding(J){let Q=this._bindings,$=J._cacheIndex,Z=this._nActiveBindings++,K=Q[Z];J._cacheIndex=Z,Q[Z]=J,K._cacheIndex=$,Q[$]=K}_takeBackBinding(J){let Q=this._bindings,$=J._cacheIndex,Z=--this._nActiveBindings,K=Q[Z];J._cacheIndex=Z,Q[Z]=J,K._cacheIndex=$,Q[$]=K}_lendControlInterpolant(){let J=this._controlInterpolants,Q=this._nActiveControlInterpolants++,$=J[Q];if($===void 0)$=new SZ(new Float32Array(2),new Float32Array(2),1,NG),$.__cacheIndex=Q,J[Q]=$;return $}_takeBackControlInterpolant(J){let Q=this._controlInterpolants,$=J.__cacheIndex,Z=--this._nActiveControlInterpolants,K=Q[Z];J.__cacheIndex=Z,Q[Z]=J,K.__cacheIndex=$,Q[$]=K}clipAction(J,Q,$){let Z=Q||this._root,K=Z.uuid,W=typeof J==="string"?y6.findByName(Z,J):J,Y=W!==null?W.uuid:J,X=this._actionsByClip[Y],H=null;if($===void 0)if(W!==null)$=W.blendMode;else $=2500;if(X!==void 0){let N=X.actionByRoot[K];if(N!==void 0&&N.blendMode===$)return N;if(H=X.knownActions[0],W===null)W=H._clip}if(W===null)return null;let U=new JY(this,W,Q,$);return this._bindAction(U,H),this._addInactiveAction(U,Y,K),U}existingAction(J,Q){let $=Q||this._root,Z=$.uuid,K=typeof J==="string"?y6.findByName($,J):J,W=K?K.uuid:J,Y=this._actionsByClip[W];if(Y!==void 0)return Y.actionByRoot[Z]||null;return null}stopAllAction(){let J=this._actions,Q=this._nActiveActions;for(let $=Q-1;$>=0;--$)J[$].stop();return this}update(J){J*=this.timeScale;let Q=this._actions,$=this._nActiveActions,Z=this.time+=J,K=Math.sign(J),W=this._accuIndex^=1;for(let H=0;H!==$;++H)Q[H]._update(Z,J,K,W);let Y=this._bindings,X=this._nActiveBindings;for(let H=0;H!==X;++H)Y[H].apply(W);return this}setTime(J){this.time=0;for(let Q=0;Q<this._actions.length;Q++)this._actions[Q].time=0;return this.update(J)}getRoot(){return this._root}uncacheClip(J){let Q=this._actions,$=J.uuid,Z=this._actionsByClip,K=Z[$];if(K!==void 0){let W=K.knownActions;for(let Y=0,X=W.length;Y!==X;++Y){let H=W[Y];this._deactivateAction(H);let U=H._cacheIndex,N=Q[Q.length-1];H._cacheIndex=null,H._byClipCacheIndex=null,N._cacheIndex=U,Q[U]=N,Q.pop(),this._removeInactiveBindingsForAction(H)}delete Z[$]}}uncacheRoot(J){let Q=J.uuid,$=this._actionsByClip;for(let W in $){let Y=$[W].actionByRoot,X=Y[Q];if(X!==void 0)this._deactivateAction(X),this._removeInactiveAction(X)}let Z=this._bindingsByRootAndName,K=Z[Q];if(K!==void 0)for(let W in K){let Y=K[W];Y.restoreOriginalState(),this._removeInactiveBinding(Y)}}uncacheAction(J,Q){let $=this.existingAction(J,Q);if($!==null)this._deactivateAction($),this._removeInactiveAction($)}}class bZ{constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,o0("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let Q=performance.now();J=(Q-this.oldTime)/1000,this.oldTime=Q,this.elapsedTime+=J}return J}}class $${constructor(J=1,Q=0,$=0){this.radius=J,this.phi=Q,this.theta=$}set(J,Q,$){return this.radius=J,this.phi=Q,this.theta=$,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=UJ(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){if(this.radius=Math.sqrt(J*J+Q*Q+$*$),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,$),this.phi=Math.acos(UJ(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class QY{static{QY.prototype.isMatrix2=!0}constructor(J,Q,$,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,Z){let K=this.elements;return K[0]=J,K[2]=Q,K[1]=$,K[3]=Z,this}}class xZ extends F9{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function $Y(J,Q,$,Z){let K=GG(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/K.components*K.byteLength;case 1029:return J*Q/K.components*K.byteLength;case 1030:return J*Q*2/K.components*K.byteLength;case 1031:return J*Q*2/K.components*K.byteLength;case 1022:return J*Q*3/K.components*K.byteLength;case 1023:return J*Q*4/K.components*K.byteLength;case 1033:return J*Q*4/K.components*K.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function GG(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)o0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function LU(){let J=null,Q=!1,$=null,Z=null;function K(W,Y){Z=J.requestAnimationFrame(K),$(W,Y)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;Z=J.requestAnimationFrame(K),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);Q=!1},setAnimationLoop:function(W){$=W},setContext:function(W){J=W}}}function FG(J){let Q=new WeakMap;function $(X,H){let{array:U,usage:N}=X,F=U.byteLength,G=J.createBuffer();J.bindBuffer(H,G),J.bufferData(H,U,N),X.onUploadCallback();let E;if(U instanceof Float32Array)E=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)E=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(X.isFloat16BufferAttribute)E=J.HALF_FLOAT;else E=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)E=J.SHORT;else if(U instanceof Uint32Array)E=J.UNSIGNED_INT;else if(U instanceof Int32Array)E=J.INT;else if(U instanceof Int8Array)E=J.BYTE;else if(U instanceof Uint8Array)E=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)E=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:G,type:E,bytesPerElement:U.BYTES_PER_ELEMENT,version:X.version,size:F}}function Z(X,H,U){let{array:N,updateRanges:F}=H;if(J.bindBuffer(U,X),F.length===0)J.bufferSubData(U,0,N);else{F.sort((E,O)=>E.start-O.start);let G=0;for(let E=1;E<F.length;E++){let O=F[G],D=F[E];if(D.start<=O.start+O.count+1)O.count=Math.max(O.count,D.start+D.count-O.start);else++G,F[G]=D}F.length=G+1;for(let E=0,O=F.length;E<O;E++){let D=F[E];J.bufferSubData(U,D.start*N.BYTES_PER_ELEMENT,N,D.start,D.count)}H.clearUpdateRanges()}H.onUploadCallback()}function K(X){if(X.isInterleavedBufferAttribute)X=X.data;return Q.get(X)}function W(X){if(X.isInterleavedBufferAttribute)X=X.data;let H=Q.get(X);if(H)J.deleteBuffer(H.buffer),Q.delete(X)}function Y(X,H){if(X.isInterleavedBufferAttribute)X=X.data;if(X.isGLBufferAttribute){let N=Q.get(X);if(!N||N.version<X.version)Q.set(X,{buffer:X.buffer,type:X.type,bytesPerElement:X.elementSize,version:X.version});return}let U=Q.get(X);if(U===void 0)Q.set(X,$(X,H));else if(U.version<X.version){if(U.size!==X.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,X,H),U.version=X.version}}return{get:K,remove:W,update:Y}}var EG=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qG=`#ifdef USE_ALPHAHASH
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
#endif`,OG=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RG=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LG=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,VG=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DG=`#ifdef USE_AOMAP
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
#endif`,BG=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kG=`#ifdef USE_BATCHING
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
#endif`,MG=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CG=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PG=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,IG=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zG=`#ifdef USE_IRIDESCENCE
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
#endif`,AG=`#ifdef USE_BUMPMAP
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
#endif`,_G=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,TG=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SG=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wG=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jG=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yG=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vG=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fG=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,hG=`#define PI 3.141592653589793
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
} // validated`,bG=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xG=`vec3 transformedNormal = objectNormal;
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
#endif`,gG=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pG=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lG=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mG=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uG="gl_FragColor = linearToOutputTexel( gl_FragColor );",dG=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cG=`#ifdef USE_ENVMAP
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
#endif`,nG=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sG=`#ifdef USE_ENVMAP
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
#endif`,iG=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oG=`#ifdef USE_ENVMAP
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
#endif`,aG=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rG=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tG=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eG=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JF=`#ifdef USE_GRADIENTMAP
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
}`,QF=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$F=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KF=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,WF=`#ifdef USE_ENVMAP
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
#endif`,YF=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HF=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NF=`PhysicalMaterial material;
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
#endif`,GF=`uniform sampler2D dfgLUT;
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
}`,FF=`
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
#endif`,EF=`#if defined( RE_IndirectDiffuse )
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
#endif`,qF=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OF=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,RF=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LF=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VF=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DF=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,BF=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kF=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MF=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CF=`#if defined( USE_POINTS_UV )
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
#endif`,PF=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IF=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zF=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AF=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_F=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TF=`#ifdef USE_MORPHTARGETS
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
#endif`,SF=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wF=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jF=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fF=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hF=`#ifdef USE_NORMALMAP
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
#endif`,bF=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xF=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gF=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pF=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lF=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mF=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uF=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dF=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cF=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nF=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sF=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iF=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oF=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aF=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rF=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tF=`float getShadowMask() {
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
}`,eF=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JE=`#ifdef USE_SKINNING
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
#endif`,QE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$E=`#ifdef USE_SKINNING
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
#endif`,ZE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,XE=`#ifdef USE_TRANSMISSION
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
#endif`,HE=`#ifdef USE_TRANSMISSION
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
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,EE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qE=`uniform sampler2D t2D;
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
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`#include <common>
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
}`,BE=`#if DEPTH_PACKING == 3200
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
}`,kE=`#define DISTANCE
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
}`,ME=`#define DISTANCE
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
}`,CE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`uniform float scale;
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
}`,zE=`uniform vec3 diffuse;
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
}`,AE=`#include <common>
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
}`,_E=`uniform vec3 diffuse;
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
}`,TE=`#define LAMBERT
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
}`,SE=`#define LAMBERT
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
}`,wE=`#define MATCAP
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
}`,jE=`#define MATCAP
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
}`,yE=`#define NORMAL
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
}`,vE=`#define NORMAL
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
}`,fE=`#define PHONG
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
}`,hE=`#define PHONG
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
}`,bE=`#define STANDARD
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
}`,xE=`#define STANDARD
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
}`,gE=`#define TOON
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
}`,pE=`#define TOON
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
}`,lE=`uniform float size;
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
}`,mE=`uniform vec3 diffuse;
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
}`,uE=`#include <common>
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
}`,dE=`uniform vec3 color;
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
}`,cE=`uniform float rotation;
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
}`,nE=`uniform vec3 diffuse;
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
}`,FJ={alphahash_fragment:EG,alphahash_pars_fragment:qG,alphamap_fragment:OG,alphamap_pars_fragment:RG,alphatest_fragment:LG,alphatest_pars_fragment:VG,aomap_fragment:DG,aomap_pars_fragment:BG,batching_pars_vertex:kG,batching_vertex:MG,begin_vertex:CG,beginnormal_vertex:PG,bsdfs:IG,iridescence_fragment:zG,bumpmap_pars_fragment:AG,clipping_planes_fragment:_G,clipping_planes_pars_fragment:TG,clipping_planes_pars_vertex:SG,clipping_planes_vertex:wG,color_fragment:jG,color_pars_fragment:yG,color_pars_vertex:vG,color_vertex:fG,common:hG,cube_uv_reflection_fragment:bG,defaultnormal_vertex:xG,displacementmap_pars_vertex:gG,displacementmap_vertex:pG,emissivemap_fragment:lG,emissivemap_pars_fragment:mG,colorspace_fragment:uG,colorspace_pars_fragment:dG,envmap_fragment:cG,envmap_common_pars_fragment:nG,envmap_pars_fragment:sG,envmap_pars_vertex:iG,envmap_physical_pars_fragment:WF,envmap_vertex:oG,fog_vertex:aG,fog_pars_vertex:rG,fog_fragment:tG,fog_pars_fragment:eG,gradientmap_pars_fragment:JF,lightmap_pars_fragment:QF,lights_lambert_fragment:$F,lights_lambert_pars_fragment:ZF,lights_pars_begin:KF,lights_toon_fragment:YF,lights_toon_pars_fragment:XF,lights_phong_fragment:HF,lights_phong_pars_fragment:UF,lights_physical_fragment:NF,lights_physical_pars_fragment:GF,lights_fragment_begin:FF,lights_fragment_maps:EF,lights_fragment_end:qF,lightprobes_pars_fragment:OF,logdepthbuf_fragment:RF,logdepthbuf_pars_fragment:LF,logdepthbuf_pars_vertex:VF,logdepthbuf_vertex:DF,map_fragment:BF,map_pars_fragment:kF,map_particle_fragment:MF,map_particle_pars_fragment:CF,metalnessmap_fragment:PF,metalnessmap_pars_fragment:IF,morphinstance_vertex:zF,morphcolor_vertex:AF,morphnormal_vertex:_F,morphtarget_pars_vertex:TF,morphtarget_vertex:SF,normal_fragment_begin:wF,normal_fragment_maps:jF,normal_pars_fragment:yF,normal_pars_vertex:vF,normal_vertex:fF,normalmap_pars_fragment:hF,clearcoat_normal_fragment_begin:bF,clearcoat_normal_fragment_maps:xF,clearcoat_pars_fragment:gF,iridescence_pars_fragment:pF,opaque_fragment:lF,packing:mF,premultiplied_alpha_fragment:uF,project_vertex:dF,dithering_fragment:cF,dithering_pars_fragment:nF,roughnessmap_fragment:sF,roughnessmap_pars_fragment:iF,shadowmap_pars_fragment:oF,shadowmap_pars_vertex:aF,shadowmap_vertex:rF,shadowmask_pars_fragment:tF,skinbase_vertex:eF,skinning_pars_vertex:JE,skinning_vertex:QE,skinnormal_vertex:$E,specularmap_fragment:ZE,specularmap_pars_fragment:KE,tonemapping_fragment:WE,tonemapping_pars_fragment:YE,transmission_fragment:XE,transmission_pars_fragment:HE,uv_pars_fragment:UE,uv_pars_vertex:NE,uv_vertex:GE,worldpos_vertex:FE,background_vert:EE,background_frag:qE,backgroundCube_vert:OE,backgroundCube_frag:RE,cube_vert:LE,cube_frag:VE,depth_vert:DE,depth_frag:BE,distance_vert:kE,distance_frag:ME,equirect_vert:CE,equirect_frag:PE,linedashed_vert:IE,linedashed_frag:zE,meshbasic_vert:AE,meshbasic_frag:_E,meshlambert_vert:TE,meshlambert_frag:SE,meshmatcap_vert:wE,meshmatcap_frag:jE,meshnormal_vert:yE,meshnormal_frag:vE,meshphong_vert:fE,meshphong_frag:hE,meshphysical_vert:bE,meshphysical_frag:xE,meshtoon_vert:gE,meshtoon_frag:pE,points_vert:lE,points_frag:mE,shadow_vert:uE,shadow_frag:dE,sprite_vert:cE,sprite_frag:nE},y0={common:{diffuse:{value:new h0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new WJ},alphaMap:{value:null},alphaMapTransform:{value:new WJ},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new WJ}},envmap:{envMap:{value:null},envMapRotation:{value:new WJ},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new WJ}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new WJ}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new WJ},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new WJ},normalScale:{value:new N0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new WJ},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new WJ}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new WJ}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new WJ}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new h0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new S},probesMax:{value:new S},probesResolution:{value:new S}},points:{diffuse:{value:new h0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new WJ},alphaTest:{value:0},uvTransform:{value:new WJ}},sprite:{diffuse:{value:new h0(16777215)},opacity:{value:1},center:{value:new N0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new WJ},alphaMap:{value:null},alphaMapTransform:{value:new WJ},alphaTest:{value:0}}},y9={basic:{uniforms:C8([y0.common,y0.specularmap,y0.envmap,y0.aomap,y0.lightmap,y0.fog]),vertexShader:FJ.meshbasic_vert,fragmentShader:FJ.meshbasic_frag},lambert:{uniforms:C8([y0.common,y0.specularmap,y0.envmap,y0.aomap,y0.lightmap,y0.emissivemap,y0.bumpmap,y0.normalmap,y0.displacementmap,y0.fog,y0.lights,{emissive:{value:new h0(0)},envMapIntensity:{value:1}}]),vertexShader:FJ.meshlambert_vert,fragmentShader:FJ.meshlambert_frag},phong:{uniforms:C8([y0.common,y0.specularmap,y0.envmap,y0.aomap,y0.lightmap,y0.emissivemap,y0.bumpmap,y0.normalmap,y0.displacementmap,y0.fog,y0.lights,{emissive:{value:new h0(0)},specular:{value:new h0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:FJ.meshphong_vert,fragmentShader:FJ.meshphong_frag},standard:{uniforms:C8([y0.common,y0.envmap,y0.aomap,y0.lightmap,y0.emissivemap,y0.bumpmap,y0.normalmap,y0.displacementmap,y0.roughnessmap,y0.metalnessmap,y0.fog,y0.lights,{emissive:{value:new h0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:FJ.meshphysical_vert,fragmentShader:FJ.meshphysical_frag},toon:{uniforms:C8([y0.common,y0.aomap,y0.lightmap,y0.emissivemap,y0.bumpmap,y0.normalmap,y0.displacementmap,y0.gradientmap,y0.fog,y0.lights,{emissive:{value:new h0(0)}}]),vertexShader:FJ.meshtoon_vert,fragmentShader:FJ.meshtoon_frag},matcap:{uniforms:C8([y0.common,y0.bumpmap,y0.normalmap,y0.displacementmap,y0.fog,{matcap:{value:null}}]),vertexShader:FJ.meshmatcap_vert,fragmentShader:FJ.meshmatcap_frag},points:{uniforms:C8([y0.points,y0.fog]),vertexShader:FJ.points_vert,fragmentShader:FJ.points_frag},dashed:{uniforms:C8([y0.common,y0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:FJ.linedashed_vert,fragmentShader:FJ.linedashed_frag},depth:{uniforms:C8([y0.common,y0.displacementmap]),vertexShader:FJ.depth_vert,fragmentShader:FJ.depth_frag},normal:{uniforms:C8([y0.common,y0.bumpmap,y0.normalmap,y0.displacementmap,{opacity:{value:1}}]),vertexShader:FJ.meshnormal_vert,fragmentShader:FJ.meshnormal_frag},sprite:{uniforms:C8([y0.sprite,y0.fog]),vertexShader:FJ.sprite_vert,fragmentShader:FJ.sprite_frag},background:{uniforms:{uvTransform:{value:new WJ},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:FJ.background_vert,fragmentShader:FJ.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new WJ}},vertexShader:FJ.backgroundCube_vert,fragmentShader:FJ.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:FJ.cube_vert,fragmentShader:FJ.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:FJ.equirect_vert,fragmentShader:FJ.equirect_frag},distance:{uniforms:C8([y0.common,y0.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:FJ.distance_vert,fragmentShader:FJ.distance_frag},shadow:{uniforms:C8([y0.lights,y0.fog,{color:{value:new h0(0)},opacity:{value:1}}]),vertexShader:FJ.shadow_vert,fragmentShader:FJ.shadow_frag}};y9.physical={uniforms:C8([y9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new WJ},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new WJ},clearcoatNormalScale:{value:new N0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new WJ},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new WJ},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new WJ},sheen:{value:0},sheenColor:{value:new h0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new WJ},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new WJ},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new WJ},transmissionSamplerSize:{value:new N0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new WJ},attenuationDistance:{value:0},attenuationColor:{value:new h0(0)},specularColor:{value:new h0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new WJ},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new WJ},anisotropyVector:{value:new N0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new WJ}}]),vertexShader:FJ.meshphysical_vert,fragmentShader:FJ.meshphysical_frag};var gZ={r:0,b:0,g:0},sE=new QJ,VU=new WJ;VU.set(-1,0,0,0,1,0,0,0,1);function iE(J,Q,$,Z,K,W){let Y=new h0(0),X=K===!0?0:1,H,U,N=null,F=0,G=null;function E(C){let z=C.isScene===!0?C.background:null;if(z&&z.isTexture){let L=C.backgroundBlurriness>0;z=Q.get(z,L)}return z}function O(C){let z=!1,L=E(C);if(L===null)R(Y,X);else if(L&&L.isColor)R(L,1),z=!0;let V=J.xr.getEnvironmentBlendMode();if(V==="additive")$.buffers.color.setClear(0,0,0,1,W);else if(V==="alpha-blend")$.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||z)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function D(C,z){let L=E(z);if(L&&(L.isCubeTexture||L.mapping===xQ)){if(U===void 0)U=new C0(new yJ(1,1,1),new rJ({name:"BackgroundCubeMaterial",uniforms:n7(y9.backgroundCube.uniforms),vertexShader:y9.backgroundCube.vertexShader,fragmentShader:y9.backgroundCube.fragmentShader,side:V8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(V,P,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(U);if(U.material.uniforms.envMap.value=L,U.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(sE.makeRotationFromEuler(z.backgroundRotation)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(VU);if(U.material.toneMapped=NJ.getTransfer(L.colorSpace)!==lJ,N!==L||F!==L.version||G!==J.toneMapping)U.material.needsUpdate=!0,N=L,F=L.version,G=J.toneMapping;U.layers.enableAll(),C.unshift(U,U.geometry,U.material,0,0,null)}else if(L&&L.isTexture){if(H===void 0)H=new C0(new kJ(2,2),new rJ({name:"BackgroundMaterial",uniforms:n7(y9.background.uniforms),vertexShader:y9.background.vertexShader,fragmentShader:y9.background.fragmentShader,side:G7,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),Object.defineProperty(H.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(H);if(H.material.uniforms.t2D.value=L,H.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,H.material.toneMapped=NJ.getTransfer(L.colorSpace)!==lJ,L.matrixAutoUpdate===!0)L.updateMatrix();if(H.material.uniforms.uvTransform.value.copy(L.matrix),N!==L||F!==L.version||G!==J.toneMapping)H.material.needsUpdate=!0,N=L,F=L.version,G=J.toneMapping;H.layers.enableAll(),C.unshift(H,H.geometry,H.material,0,0,null)}}function R(C,z){C.getRGB(gZ,pW(J)),$.buffers.color.setClear(gZ.r,gZ.g,gZ.b,z,W)}function q(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0}return{getClearColor:function(){return Y},setClearColor:function(C,z=1){Y.set(C),X=z,R(Y,X)},getClearAlpha:function(){return X},setClearAlpha:function(C){X=C,R(Y,X)},render:O,addToRenderList:D,dispose:q}}function oE(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},K=G(null),W=K,Y=!1;function X(j,x,t,y,i){let s=!1,g=F(j,y,t,x);if(W!==g)W=g,U(W.object);if(s=E(j,y,t,i),s)O(j,y,t,i);if(i!==null)Q.update(i,J.ELEMENT_ARRAY_BUFFER);if(s||Y){if(Y=!1,L(j,x,t,y),i!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(i).buffer)}}function H(){return J.createVertexArray()}function U(j){return J.bindVertexArray(j)}function N(j){return J.deleteVertexArray(j)}function F(j,x,t,y){let i=y.wireframe===!0,s=Z[x.id];if(s===void 0)s={},Z[x.id]=s;let g=j.isInstancedMesh===!0?j.id:0,H0=s[g];if(H0===void 0)H0={},s[g]=H0;let a=H0[t.id];if(a===void 0)a={},H0[t.id]=a;let X0=a[i];if(X0===void 0)X0=G(H()),a[i]=X0;return X0}function G(j){let x=[],t=[],y=[];for(let i=0;i<$;i++)x[i]=0,t[i]=0,y[i]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:t,attributeDivisors:y,object:j,attributes:{},index:null}}function E(j,x,t,y){let i=W.attributes,s=x.attributes,g=0,H0=t.getAttributes();for(let a in H0)if(H0[a].location>=0){let E0=i[a],r0=s[a];if(r0===void 0){if(a==="instanceMatrix"&&j.instanceMatrix)r0=j.instanceMatrix;if(a==="instanceColor"&&j.instanceColor)r0=j.instanceColor}if(E0===void 0)return!0;if(E0.attribute!==r0)return!0;if(r0&&E0.data!==r0.data)return!0;g++}if(W.attributesNum!==g)return!0;if(W.index!==y)return!0;return!1}function O(j,x,t,y){let i={},s=x.attributes,g=0,H0=t.getAttributes();for(let a in H0)if(H0[a].location>=0){let E0=s[a];if(E0===void 0){if(a==="instanceMatrix"&&j.instanceMatrix)E0=j.instanceMatrix;if(a==="instanceColor"&&j.instanceColor)E0=j.instanceColor}let r0={};if(r0.attribute=E0,E0&&E0.data)r0.data=E0.data;i[a]=r0,g++}W.attributes=i,W.attributesNum=g,W.index=y}function D(){let j=W.newAttributes;for(let x=0,t=j.length;x<t;x++)j[x]=0}function R(j){q(j,0)}function q(j,x){let{newAttributes:t,enabledAttributes:y,attributeDivisors:i}=W;if(t[j]=1,y[j]===0)J.enableVertexAttribArray(j),y[j]=1;if(i[j]!==x)J.vertexAttribDivisor(j,x),i[j]=x}function C(){let{newAttributes:j,enabledAttributes:x}=W;for(let t=0,y=x.length;t<y;t++)if(x[t]!==j[t])J.disableVertexAttribArray(t),x[t]=0}function z(j,x,t,y,i,s,g){if(g===!0)J.vertexAttribIPointer(j,x,t,i,s);else J.vertexAttribPointer(j,x,t,y,i,s)}function L(j,x,t,y){D();let i=y.attributes,s=t.getAttributes(),g=x.defaultAttributeValues;for(let H0 in s){let a=s[H0];if(a.location>=0){let X0=i[H0];if(X0===void 0){if(H0==="instanceMatrix"&&j.instanceMatrix)X0=j.instanceMatrix;if(H0==="instanceColor"&&j.instanceColor)X0=j.instanceColor}if(X0!==void 0){let{normalized:E0,itemSize:r0}=X0,_0=Q.get(X0);if(_0===void 0)continue;let{buffer:b0,type:e0,bytesPerElement:$0}=_0,w=e0===J.INT||e0===J.UNSIGNED_INT||X0.gpuType===mK;if(X0.isInterleavedBufferAttribute){let p=X0.data,m=p.stride,J0=X0.offset;if(p.isInstancedInterleavedBuffer){for(let e=0;e<a.locationSize;e++)q(a.location+e,p.meshPerAttribute);if(j.isInstancedMesh!==!0&&y._maxInstanceCount===void 0)y._maxInstanceCount=p.meshPerAttribute*p.count}else for(let e=0;e<a.locationSize;e++)R(a.location+e);J.bindBuffer(J.ARRAY_BUFFER,b0);for(let e=0;e<a.locationSize;e++)z(a.location+e,r0/a.locationSize,e0,E0,m*$0,(J0+r0/a.locationSize*e)*$0,w)}else{if(X0.isInstancedBufferAttribute){for(let p=0;p<a.locationSize;p++)q(a.location+p,X0.meshPerAttribute);if(j.isInstancedMesh!==!0&&y._maxInstanceCount===void 0)y._maxInstanceCount=X0.meshPerAttribute*X0.count}else for(let p=0;p<a.locationSize;p++)R(a.location+p);J.bindBuffer(J.ARRAY_BUFFER,b0);for(let p=0;p<a.locationSize;p++)z(a.location+p,r0/a.locationSize,e0,E0,r0*$0,r0/a.locationSize*p*$0,w)}}else if(g!==void 0){let E0=g[H0];if(E0!==void 0)switch(E0.length){case 2:J.vertexAttrib2fv(a.location,E0);break;case 3:J.vertexAttrib3fv(a.location,E0);break;case 4:J.vertexAttrib4fv(a.location,E0);break;default:J.vertexAttrib1fv(a.location,E0)}}}}C()}function V(){I();for(let j in Z){let x=Z[j];for(let t in x){let y=x[t];for(let i in y){let s=y[i];for(let g in s)N(s[g].object),delete s[g];delete y[i]}}delete Z[j]}}function P(j){if(Z[j.id]===void 0)return;let x=Z[j.id];for(let t in x){let y=x[t];for(let i in y){let s=y[i];for(let g in s)N(s[g].object),delete s[g];delete y[i]}}delete Z[j.id]}function T(j){for(let x in Z){let t=Z[x];for(let y in t){let i=t[y];if(i[j.id]===void 0)continue;let s=i[j.id];for(let g in s)N(s[g].object),delete s[g];delete i[j.id]}}}function B(j){for(let x in Z){let t=Z[x],y=j.isInstancedMesh===!0?j.id:0,i=t[y];if(i===void 0)continue;for(let s in i){let g=i[s];for(let H0 in g)N(g[H0].object),delete g[H0];delete i[s]}if(delete t[y],Object.keys(t).length===0)delete Z[x]}}function I(){if(l(),Y=!0,W===K)return;W=K,U(W.object)}function l(){K.geometry=null,K.program=null,K.wireframe=!1}return{setup:X,reset:I,resetDefaultState:l,dispose:V,releaseStatesOfGeometry:P,releaseStatesOfObject:B,releaseStatesOfProgram:T,initAttributes:D,enableAttribute:R,disableUnusedAttributes:C}}function aE(J,Q,$){let Z;function K(H){Z=H}function W(H,U){J.drawArrays(Z,H,U),$.update(U,Z,1)}function Y(H,U,N){if(N===0)return;J.drawArraysInstanced(Z,H,U,N),$.update(U,Z,N)}function X(H,U,N){if(N===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,H,0,U,0,N);let G=0;for(let E=0;E<N;E++)G+=U[E];$.update(G,Z,1)}this.setMode=K,this.render=W,this.renderInstances=Y,this.renderMultiDraw=X}function rE(J,Q,$,Z){let K;function W(){if(K!==void 0)return K;if(Q.has("EXT_texture_filter_anisotropic")===!0){let T=Q.get("EXT_texture_filter_anisotropic");K=J.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else K=0;return K}function Y(T){if(T!==_9&&Z.convert(T)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function X(T){let B=T===O8&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(T!==G9&&T!==n9&&!B&&Z.convert(T)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function H(T){if(T==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";T="mediump"}if(T==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",N=H(U);if(N!==U)o0("WebGLRenderer:",U,"not supported, using",N,"instead."),U=N;let F=$.logarithmicDepthBuffer===!0,G=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&G===!1)o0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let E=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),O=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=J.getParameter(J.MAX_TEXTURE_SIZE),R=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),q=J.getParameter(J.MAX_VERTEX_ATTRIBS),C=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),z=J.getParameter(J.MAX_VARYING_VECTORS),L=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),V=J.getParameter(J.MAX_SAMPLES),P=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:H,textureFormatReadable:Y,textureTypeReadable:X,precision:U,logarithmicDepthBuffer:F,reversedDepthBuffer:G,maxTextures:E,maxVertexTextures:O,maxTextureSize:D,maxCubemapSize:R,maxAttributes:q,maxVertexUniforms:C,maxVaryings:z,maxFragmentUniforms:L,maxSamples:V,samples:P}}function tE(J){let Q=this,$=null,Z=0,K=!1,W=!1,Y=new d8,X=new WJ,H={value:null,needsUpdate:!1};this.uniform=H,this.numPlanes=0,this.numIntersection=0,this.init=function(F,G){let E=F.length!==0||G||Z!==0||K;return K=G,Z=F.length,E},this.beginShadows=function(){W=!0,N(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(F,G){$=N(F,G,0)},this.setState=function(F,G,E){let{clippingPlanes:O,clipIntersection:D,clipShadows:R}=F,q=J.get(F);if(!K||O===null||O.length===0||W&&!R)if(W)N(null);else U();else{let C=W?0:Z,z=C*4,L=q.clippingState||null;H.value=L,L=N(O,G,z,E);for(let V=0;V!==z;++V)L[V]=$[V];q.clippingState=L,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=C}};function U(){if(H.value!==$)H.value=$,H.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function N(F,G,E,O){let D=F!==null?F.length:0,R=null;if(D!==0){if(R=H.value,O!==!0||R===null){let q=E+D*4,C=G.matrixWorldInverse;if(X.getNormalMatrix(C),R===null||R.length<q)R=new Float32Array(q);for(let z=0,L=E;z!==D;++z,L+=4)Y.copy(F[z]).applyMatrix4(C,X),Y.normal.toArray(R,L),R[L+3]=Y.constant}H.value=R,H.needsUpdate=!0}return Q.numPlanes=D,Q.numIntersection=0,R}}var a6=4,eE=6,J1=20,Q1=256,Z$=new t9,aH=new h0,ZY=null,KY=0,WY=0,YY=!1,$1=new S,i7=new S;class X${constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,K={}){let{size:W=256,position:Y=$1}=K;ZY=this._renderer.getRenderTarget(),KY=this._renderer.getActiveCubeFace(),WY=this._renderer.getActiveMipmapLevel(),YY=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let X=this._allocateTargets();if(X.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,X,Y),Q>0)this._blur(X,0,0,Q);return this._applyPMREM(X),this._cleanup(X),X}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=eH(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=tH(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(ZY,KY,WY),this._renderer.xr.enabled=YY,J.scissorTest=!1,o6(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===h6||J.mapping===f7)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);ZY=this._renderer.getRenderTarget(),KY=this._renderer.getActiveCubeFace(),WY=this._renderer.getActiveMipmapLevel(),YY=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:q8,minFilter:q8,generateMipmaps:!1,type:O8,format:_9,colorSpace:x8,depthBuffer:!1},Z=rH(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=rH(J,Q,$);let{_lodMax:K}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Z1(K)),this._blurMaterial=W1(K,J,Q),this._ggxMaterial=K1(K,J,Q)}return Z}_compileMaterial(J){let Q=new C0(new mJ,J);this._renderer.compile(Q,Z$)}_sceneToCubeUV(J,Q,$,Z,K){let X=new H8(90,1,Q,$),H=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],N=this._renderer,F=N.autoClear,G=N.toneMapping;if(N.getClearColor(aH),N.toneMapping=U9,N.autoClear=!1,N.state.buffers.depth.getReversed())N.setRenderTarget(Z),N.clearDepth(),N.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new C0(new yJ,new sJ({name:"PMREM.Background",side:V8,depthWrite:!1,depthTest:!1}));let O=this._backgroundBox,D=O.material,R=!1,q=J.background;if(q){if(q.isColor)D.color.copy(q),J.background=null,R=!0}else D.color.copy(aH),R=!0;for(let C=0;C<6;C++){let z=C%3;if(z===0)X.up.set(0,H[C],0),X.position.set(K.x,K.y,K.z),X.lookAt(K.x+U[C],K.y,K.z);else if(z===1)X.up.set(0,0,H[C]),X.position.set(K.x,K.y,K.z),X.lookAt(K.x,K.y+U[C],K.z);else X.up.set(0,H[C],0),X.position.set(K.x,K.y,K.z),X.lookAt(K.x,K.y,K.z+U[C]);let L=this._cubeSize;if(o6(Z,z*L,C>2?L:0,L,L),N.setRenderTarget(Z),R)N.render(O,X);N.render(J,X)}N.toneMapping=G,N.autoClear=F,J.background=q}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===h6||J.mapping===f7;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=eH();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=tH();let K=Z?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=K;let Y=K.uniforms;Y.envMap.value=J;let X=this._cubeSize;o6(Q,0,0,3*X,2*X),$.setRenderTarget(Q),$.render(W,Z$)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodMeshes.length;for(let K=1;K<Z;K++)this._applyGGXFilter(J,K-1,K);Q.autoClear=$}_applyGGXFilter(J,Q,$){let Z=this._renderer,K=this._pingPongRenderTarget,W=this._ggxMaterial,Y=this._lodMeshes[$];Y.material=W;let X=W.uniforms,H=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),N=Math.sqrt(H*H-U*U),F=H*1.25,G=N*F,{_lodMax:E}=this,O=this._sizeLods[$],D=3*O*($>E-a6?$-E+a6:0),R=4*(this._cubeSize-O);X.envMap.value=J.texture,X.roughness.value=G,X.mipInt.value=E-Q,o6(K,D,R,3*O,2*O),Z.setRenderTarget(K),Z.render(Y,Z$),X.envMap.value=K.texture,X.roughness.value=0,X.mipInt.value=E-$,o6(J,D,R,3*O,2*O),Z.setRenderTarget(J),Z.render(Y,Z$)}_blur(J,Q,$,Z){let K=this._pingPongRenderTarget,W=Math.min(Z,Math.PI)/Math.SQRT2;this._blurPass(J,K,Q,$,W),this._blurPass(K,J,$,$,W)}_blurPass(J,Q,$,Z,K){let W=this._renderer,Y=this._blurMaterial,X=this._lodMeshes[Z];X.material=Y;let H=Y.uniforms;H.envMap.value=J.texture,H.sigma.value=K,H.mipInt.value=this._lodMax-$;let U=this._sizeLods[Z],N=3*U*(Z>this._lodMax-a6?Z-this._lodMax+a6:0),F=4*(this._cubeSize-U);o6(Q,N,F,3*U,2*U),W.setRenderTarget(Q),W.render(X,Z$)}}function Z1(J){let Q=[],$=[],Z=J,K=J-a6+1+eE;for(let W=0;W<K;W++){let Y=Math.pow(2,Z);Q.push(Y);let X=1/(Y-2),H=-X,U=1+X,N=[H,H,U,H,U,U,H,H,U,U,H,U],F=6,G=6,E=3,O=new Float32Array(E*G*F),D=new Float32Array(E*G*F);for(let q=0;q<F;q++){let C=q%3*2/3-1,z=q>2?0:-1,L=[C,z,0,C+0.6666666666666666,z,0,C+0.6666666666666666,z+1,0,C,z,0,C+0.6666666666666666,z+1,0,C,z+1,0];O.set(L,E*G*q);for(let V=0;V<G;V++){let P=N[V*2]*2-1,T=N[V*2+1]*2-1;if(q===0)i7.set(1,T,P);else if(q===1)i7.set(-P,1,-T);else if(q===2)i7.set(-P,T,1);else if(q===3)i7.set(-1,T,-P);else if(q===4)i7.set(-P,-1,T);else i7.set(P,T,-1);i7.toArray(D,(q*G+V)*E)}}let R=new mJ;if(R.setAttribute("position",new tJ(O,E)),R.setAttribute("outputDirection",new tJ(D,E)),$.push(new C0(R,null)),Z>a6)Z--}return{lodMeshes:$,sizeLods:Q}}function rH(J,Q,$){let Z=new Q8(J,Q,$);return Z.texture.mapping=xQ,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function o6(J,Q,$,Z,K){J.viewport.set(Q,$,Z,K),J.scissor.set(Q,$,Z,K)}function K1(J,Q,$){return new rJ({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Q1,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lZ(),fragmentShader:`

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
		`,blending:n8,depthTest:!1,depthWrite:!1})}function W1(J,Q,$){return new rJ({name:"SphericalGaussianBlur",defines:{SAMPLES:J1,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:lZ(),fragmentShader:`

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
		`,blending:n8,depthTest:!1,depthWrite:!1})}function tH(){return new rJ({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lZ(),fragmentShader:`

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
		`,blending:n8,depthTest:!1,depthWrite:!1})}function eH(){return new rJ({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lZ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:n8,depthTest:!1,depthWrite:!1})}function lZ(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class GY extends Q8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new PZ(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new yJ(5,5,5),K=new rJ({name:"CubemapFromEquirect",uniforms:n7($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:V8,blending:n8});K.uniforms.tEquirect.value=Q;let W=new C0(Z,K),Y=Q.minFilter;if(Q.minFilter===A9)Q.minFilter=q8;return new oW(1,10,this).update(J,W),Q.minFilter=Y,W.geometry.dispose(),W.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let K=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear(Q,$,Z);J.setRenderTarget(K)}}function Y1(J){let Q=new WeakMap,$=new WeakMap,Z=null;function K(G,E=!1){if(G===null||G===void 0)return null;if(E)return Y(G);return W(G)}function W(G){if(G&&G.isTexture){let E=G.mapping;if(E===KZ||E===WZ)if(Q.has(G)){let O=Q.get(G).texture;return X(O,G.mapping)}else{let O=G.image;if(O&&O.height>0){let D=new GY(O.height);return D.fromEquirectangularTexture(J,G),Q.set(G,D),G.addEventListener("dispose",U),X(D.texture,G.mapping)}else return null}}return G}function Y(G){if(G&&G.isTexture){let E=G.mapping,O=E===KZ||E===WZ,D=E===h6||E===f7;if(O||D){let R=$.get(G),q=R!==void 0?R.texture.pmremVersion:0;if(G.isRenderTargetTexture&&G.pmremVersion!==q){if(Z===null)Z=new X$(J);return R=O?Z.fromEquirectangular(G,R):Z.fromCubemap(G,R),R.texture.pmremVersion=G.pmremVersion,$.set(G,R),R.texture}else if(R!==void 0)return R.texture;else{let C=G.image;if(O&&C&&C.height>0||D&&C&&H(C)){if(Z===null)Z=new X$(J);return R=O?Z.fromEquirectangular(G):Z.fromCubemap(G),R.texture.pmremVersion=G.pmremVersion,$.set(G,R),G.addEventListener("dispose",N),R.texture}else return null}}}return G}function X(G,E){if(E===KZ)G.mapping=h6;else if(E===WZ)G.mapping=f7;return G}function H(G){let E=0,O=6;for(let D=0;D<O;D++)if(G[D]!==void 0)E++;return E===O}function U(G){let E=G.target;E.removeEventListener("dispose",U);let O=Q.get(E);if(O!==void 0)Q.delete(E),O.dispose()}function N(G){let E=G.target;E.removeEventListener("dispose",N);let O=$.get(E);if(O!==void 0)$.delete(E),O.dispose()}function F(){if(Q=new WeakMap,$=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:K,dispose:F}}function X1(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let K=J.getExtension(Z);return Q[Z]=K,K}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let K=$(Z);if(K===null)S7("WebGLRenderer: "+Z+" extension not supported.");return K}}}function H1(J,Q,$,Z){let K={},W=new WeakMap;function Y(F){let G=F.target;if(G.index!==null)Q.remove(G.index);for(let O in G.attributes)Q.remove(G.attributes[O]);G.removeEventListener("dispose",Y),delete K[G.id];let E=W.get(G);if(E)Q.remove(E),W.delete(G);if(Z.releaseStatesOfGeometry(G),G.isInstancedBufferGeometry===!0)delete G._maxInstanceCount;$.memory.geometries--}function X(F,G){if(K[G.id]===!0)return G;return G.addEventListener("dispose",Y),K[G.id]=!0,$.memory.geometries++,G}function H(F){let G=F.attributes;for(let E in G)Q.update(G[E],J.ARRAY_BUFFER)}function U(F){let G=[],E=F.index,O=F.attributes.position,D=0;if(O===void 0)return;if(E!==null){let C=E.array;D=E.version;for(let z=0,L=C.length;z<L;z+=3){let V=C[z+0],P=C[z+1],T=C[z+2];G.push(V,P,P,T,T,V)}}else{let C=O.array;D=O.version;for(let z=0,L=C.length/3-1;z<L;z+=3){let V=z+0,P=z+1,T=z+2;G.push(V,P,P,T,T,V)}}let R=new(O.count>=65535?BZ:DZ)(G,1);R.version=D;let q=W.get(F);if(q)Q.remove(q);W.set(F,R)}function N(F){let G=W.get(F);if(G){let E=F.index;if(E!==null){if(G.version<E.version)U(F)}}else U(F);return W.get(F)}return{get:X,update:H,getWireframeAttribute:N}}function U1(J,Q,$){let Z;function K(F){Z=F}let W,Y;function X(F){W=F.type,Y=F.bytesPerElement}function H(F,G){J.drawElements(Z,G,W,F*Y),$.update(G,Z,1)}function U(F,G,E){if(E===0)return;J.drawElementsInstanced(Z,G,W,F*Y,E),$.update(G,Z,E)}function N(F,G,E){if(E===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,G,0,W,F,0,E);let D=0;for(let R=0;R<E;R++)D+=G[R];$.update(D,Z,1)}this.setMode=K,this.setIndex=X,this.render=H,this.renderInstances=U,this.renderMultiDraw=N}function N1(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(W,Y,X){switch($.calls++,Y){case J.TRIANGLES:$.triangles+=X*(W/3);break;case J.LINES:$.lines+=X*(W/2);break;case J.LINE_STRIP:$.lines+=X*(W-1);break;case J.LINE_LOOP:$.lines+=X*W;break;case J.POINTS:$.points+=X*W;break;default:$J("WebGLInfo: Unknown draw mode:",Y);break}}function K(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:K,update:Z}}function G1(J,Q,$){let Z=new WeakMap,K=new pJ;function W(Y,X,H){let U=Y.morphTargetInfluences,N=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,F=N!==void 0?N.length:0,G=Z.get(X);if(G===void 0||G.count!==F){let I=function(){T.dispose(),Z.delete(X),X.removeEventListener("dispose",I)};if(G!==void 0)G.texture.dispose();let E=X.morphAttributes.position!==void 0,O=X.morphAttributes.normal!==void 0,D=X.morphAttributes.color!==void 0,R=X.morphAttributes.position||[],q=X.morphAttributes.normal||[],C=X.morphAttributes.color||[],z=0;if(E===!0)z=1;if(O===!0)z=2;if(D===!0)z=3;let L=X.attributes.position.count*z,V=1;if(L>Q.maxTextureSize)V=Math.ceil(L/Q.maxTextureSize),L=Q.maxTextureSize;let P=new Float32Array(L*V*4*F),T=new LZ(P,L,V,F);T.type=n9,T.needsUpdate=!0;let B=z*4;for(let l=0;l<F;l++){let j=R[l],x=q[l],t=C[l],y=L*V*4*l;for(let i=0;i<j.count;i++){let s=i*B;if(E===!0)K.fromBufferAttribute(j,i),P[y+s+0]=K.x,P[y+s+1]=K.y,P[y+s+2]=K.z,P[y+s+3]=0;if(O===!0)K.fromBufferAttribute(x,i),P[y+s+4]=K.x,P[y+s+5]=K.y,P[y+s+6]=K.z,P[y+s+7]=0;if(D===!0)K.fromBufferAttribute(t,i),P[y+s+8]=K.x,P[y+s+9]=K.y,P[y+s+10]=K.z,P[y+s+11]=t.itemSize===4?K.w:1}}G={count:F,texture:T,size:new N0(L,V)},Z.set(X,G),X.addEventListener("dispose",I)}if(Y.isInstancedMesh===!0&&Y.morphTexture!==null)H.getUniforms().setValue(J,"morphTexture",Y.morphTexture,$);else{let E=0;for(let D=0;D<U.length;D++)E+=U[D];let O=X.morphTargetsRelative?1:1-E;H.getUniforms().setValue(J,"morphTargetBaseInfluence",O),H.getUniforms().setValue(J,"morphTargetInfluences",U)}H.getUniforms().setValue(J,"morphTargetsTexture",G.texture,$),H.getUniforms().setValue(J,"morphTargetsTextureSize",G.size)}return{update:W}}function F1(J,Q,$,Z,K){let W=new WeakMap;function Y(U){let N=K.render.frame,F=U.geometry,G=Q.get(U,F);if(W.get(G)!==N)Q.update(G),W.set(G,N);if(U.isInstancedMesh){if(U.hasEventListener("dispose",H)===!1)U.addEventListener("dispose",H);if(W.get(U)!==N){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);W.set(U,N)}}if(U.isSkinnedMesh){let E=U.skeleton;if(W.get(E)!==N)E.update(),W.set(E,N)}return G}function X(){W=new WeakMap}function H(U){let N=U.target;if(N.removeEventListener("dispose",H),Z.releaseStatesOfObject(N),$.remove(N.instanceMatrix),N.instanceColor!==null)$.remove(N.instanceColor)}return{update:Y,dispose:X}}var E1={[jQ]:"LINEAR_TONE_MAPPING",[yQ]:"REINHARD_TONE_MAPPING",[vQ]:"CINEON_TONE_MAPPING",[v7]:"ACES_FILMIC_TONE_MAPPING",[hQ]:"AGX_TONE_MAPPING",[bQ]:"NEUTRAL_TONE_MAPPING",[fQ]:"CUSTOM_TONE_MAPPING"};function q1(J,Q,$,Z,K,W){let Y=new Q8(Q,$,{type:J,depthBuffer:K,stencilBuffer:W,samples:Z?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),X=null,H=null,U=new mJ;U.setAttribute("position",new GJ([-1,3,0,-1,-1,0,3,-1,0],3)),U.setAttribute("uv",new GJ([0,2,0,0,2,0],2));let N=new tQ({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),F=new C0(U,N),G=new t9(-1,1,1,-1,0,1),E=null,O=null,D=!1,R,q=null,C=[],z=!1;this.setSize=function(L,V){if(Y.setSize(L,V),X!==null)X.setSize(L,V);if(H!==null)H.setSize(L,V);for(let P=0;P<C.length;P++){let T=C[P];if(T.setSize)T.setSize(L,V)}},this.setEffects=function(L){C=L,z=C.length>0&&C[0].isRenderPass===!0;let{width:V,height:P}=Y;if(C.length>0&&X===null)X=new Q8(V,P,{type:O8,depthBuffer:!1,stencilBuffer:!1}),H=new Q8(V,P,{type:O8,depthBuffer:!1,stencilBuffer:!1});for(let T=0;T<C.length;T++){let B=C[T];if(B.setSize)B.setSize(V,P)}},this.begin=function(L,V){if(D)return!1;if(L.toneMapping===U9&&C.length===0)return!1;if(q=V,V!==null){let{width:P,height:T}=V;if(Y.width!==P||Y.height!==T)this.setSize(P,T)}if(z===!1)L.setRenderTarget(Y);return R=L.toneMapping,L.toneMapping=U9,!0},this.hasRenderPass=function(){return z},this.end=function(L,V){L.toneMapping=R,D=!0;let P=Y,T=X;for(let B=0;B<C.length;B++){let I=C[B];if(I.enabled===!1)continue;if(I.render(L,T,P,V),I.needsSwap!==!1)P=T,T=T===X?H:X}if(E!==L.outputColorSpace||O!==L.toneMapping){if(E=L.outputColorSpace,O=L.toneMapping,N.defines={},NJ.getTransfer(E)===lJ)N.defines.SRGB_TRANSFER="";let B=E1[O];if(B)N.defines[B]="";N.needsUpdate=!0}N.uniforms.tDiffuse.value=P.texture,L.setRenderTarget(q),L.render(F,G),q=null,D=!1},this.isCompositing=function(){return D},this.dispose=function(){if(Y.dispose(),X!==null)X.dispose();if(H!==null)H.dispose();U.dispose(),N.dispose()}}var DU=new eJ,UY=new d7(1,1),BU=new LZ,kU=new yW,MU=new PZ,JU=[],QU=[],$U=new Float32Array(16),ZU=new Float32Array(9),KU=new Float32Array(4);function r6(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let K=Q*$,W=JU[K];if(W===void 0)W=new Float32Array(K),JU[K]=W;if(Q!==0){Z.toArray(W,0);for(let Y=1,X=0;Y!==Q;++Y)X+=$,J[Y].toArray(W,X)}return W}function U8(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function N8(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function mZ(J,Q){let $=QU[Q];if($===void 0)$=new Int32Array(Q),QU[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function O1(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function R1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(U8($,Q))return;J.uniform2fv(this.addr,Q),N8($,Q)}}function L1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(U8($,Q))return;J.uniform3fv(this.addr,Q),N8($,Q)}}function V1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(U8($,Q))return;J.uniform4fv(this.addr,Q),N8($,Q)}}function D1(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(U8($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),N8($,Q)}else{if(U8($,Z))return;KU.set(Z),J.uniformMatrix2fv(this.addr,!1,KU),N8($,Z)}}function B1(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(U8($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),N8($,Q)}else{if(U8($,Z))return;ZU.set(Z),J.uniformMatrix3fv(this.addr,!1,ZU),N8($,Z)}}function k1(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(U8($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),N8($,Q)}else{if(U8($,Z))return;$U.set(Z),J.uniformMatrix4fv(this.addr,!1,$U),N8($,Z)}}function M1(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function C1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(U8($,Q))return;J.uniform2iv(this.addr,Q),N8($,Q)}}function P1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(U8($,Q))return;J.uniform3iv(this.addr,Q),N8($,Q)}}function I1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(U8($,Q))return;J.uniform4iv(this.addr,Q),N8($,Q)}}function z1(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function A1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(U8($,Q))return;J.uniform2uiv(this.addr,Q),N8($,Q)}}function _1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(U8($,Q))return;J.uniform3uiv(this.addr,Q),N8($,Q)}}function T1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(U8($,Q))return;J.uniform4uiv(this.addr,Q),N8($,Q)}}function S1(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;let W;if(this.type===J.SAMPLER_2D_SHADOW)UY.compareFunction=$.isReversedDepthBuffer()?RZ:OZ,W=UY;else W=DU;$.setTexture2D(Q||W,K)}function w1(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture3D(Q||kU,K)}function j1(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTextureCube(Q||MU,K)}function y1(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture2DArray(Q||BU,K)}function v1(J){switch(J){case 5126:return O1;case 35664:return R1;case 35665:return L1;case 35666:return V1;case 35674:return D1;case 35675:return B1;case 35676:return k1;case 5124:case 35670:return M1;case 35667:case 35671:return C1;case 35668:case 35672:return P1;case 35669:case 35673:return I1;case 5125:return z1;case 36294:return A1;case 36295:return _1;case 36296:return T1;case 35678:case 36198:case 36298:case 36306:case 35682:return S1;case 35679:case 36299:case 36307:return w1;case 35680:case 36300:case 36308:case 36293:return j1;case 36289:case 36303:case 36311:case 36292:return y1}}function f1(J,Q){J.uniform1fv(this.addr,Q)}function h1(J,Q){let $=r6(Q,this.size,2);J.uniform2fv(this.addr,$)}function b1(J,Q){let $=r6(Q,this.size,3);J.uniform3fv(this.addr,$)}function x1(J,Q){let $=r6(Q,this.size,4);J.uniform4fv(this.addr,$)}function g1(J,Q){let $=r6(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function p1(J,Q){let $=r6(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function l1(J,Q){let $=r6(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function m1(J,Q){J.uniform1iv(this.addr,Q)}function u1(J,Q){J.uniform2iv(this.addr,Q)}function d1(J,Q){J.uniform3iv(this.addr,Q)}function c1(J,Q){J.uniform4iv(this.addr,Q)}function n1(J,Q){J.uniform1uiv(this.addr,Q)}function s1(J,Q){J.uniform2uiv(this.addr,Q)}function i1(J,Q){J.uniform3uiv(this.addr,Q)}function o1(J,Q){J.uniform4uiv(this.addr,Q)}function a1(J,Q,$){let Z=this.cache,K=Q.length,W=mZ($,K);if(!U8(Z,W))J.uniform1iv(this.addr,W),N8(Z,W);let Y;if(this.type===J.SAMPLER_2D_SHADOW)Y=UY;else Y=DU;for(let X=0;X!==K;++X)$.setTexture2D(Q[X]||Y,W[X])}function r1(J,Q,$){let Z=this.cache,K=Q.length,W=mZ($,K);if(!U8(Z,W))J.uniform1iv(this.addr,W),N8(Z,W);for(let Y=0;Y!==K;++Y)$.setTexture3D(Q[Y]||kU,W[Y])}function t1(J,Q,$){let Z=this.cache,K=Q.length,W=mZ($,K);if(!U8(Z,W))J.uniform1iv(this.addr,W),N8(Z,W);for(let Y=0;Y!==K;++Y)$.setTextureCube(Q[Y]||MU,W[Y])}function e1(J,Q,$){let Z=this.cache,K=Q.length,W=mZ($,K);if(!U8(Z,W))J.uniform1iv(this.addr,W),N8(Z,W);for(let Y=0;Y!==K;++Y)$.setTexture2DArray(Q[Y]||BU,W[Y])}function Jq(J){switch(J){case 5126:return f1;case 35664:return h1;case 35665:return b1;case 35666:return x1;case 35674:return g1;case 35675:return p1;case 35676:return l1;case 5124:case 35670:return m1;case 35667:case 35671:return u1;case 35668:case 35672:return d1;case 35669:case 35673:return c1;case 5125:return n1;case 36294:return s1;case 36295:return i1;case 36296:return o1;case 35678:case 36198:case 36298:case 36306:case 35682:return a1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return t1;case 36289:case 36303:case 36311:case 36292:return e1}}class CU{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=v1(Q.type)}}class PU{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=Jq(Q.type)}}class IU{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let K=0,W=Z.length;K!==W;++K){let Y=Z[K];Y.setValue(J,Q[Y.id],$)}}}var XY=/(\w+)(\])?(\[|\.)?/g;function WU(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function Qq(J,Q,$){let Z=J.name,K=Z.length;XY.lastIndex=0;while(!0){let W=XY.exec(Z),Y=XY.lastIndex,X=W[1],H=W[2]==="]",U=W[3];if(H)X=X|0;if(U===void 0||U==="["&&Y+2===K){WU($,U===void 0?new CU(X,J,Q):new PU(X,J,Q));break}else{let F=$.map[X];if(F===void 0)F=new IU(X),WU($,F);$=F}}}class Y${constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let W=0;W<$;++W){let Y=J.getActiveUniform(Q,W),X=J.getUniformLocation(Q,Y.name);Qq(Y,X,this)}let Z=[],K=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(W);else K.push(W);if(Z.length>0)this.seq=Z.concat(K)}setValue(J,Q,$,Z){let K=this.map[Q];if(K!==void 0)K.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let K=0,W=Q.length;K!==W;++K){let Y=Q[K],X=$[Y.id];if(X.needsUpdate!==!1)Y.setValue(J,X.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,K=J.length;Z!==K;++Z){let W=J[Z];if(W.id in Q)$.push(W)}return $}}function YU(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var $q=37297,Zq=0;function Kq(J,Q){let $=J.split(`
`),Z=[],K=Math.max(Q-6,0),W=Math.min(Q+6,$.length);for(let Y=K;Y<W;Y++){let X=Y+1;Z.push(`${X===Q?">":" "} ${X}: ${$[Y]}`)}return Z.join(`
`)}var XU=new WJ;function Wq(J){NJ._getMatrix(XU,NJ.workingColorSpace,J);let Q=`mat3( ${XU.elements.map(($)=>$.toFixed(4))} )`;switch(NJ.getTransfer(J)){case AW:return[Q,"LinearTransferOETF"];case lJ:return[Q,"sRGBTransferOETF"];default:return o0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function HU(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),W=(J.getShaderInfoLog(Q)||"").trim();if(Z&&W==="")return"";let Y=/ERROR: 0:(\d+)/.exec(W);if(Y){let X=parseInt(Y[1]);return $.toUpperCase()+`

`+W+`

`+Kq(J.getShaderSource(Q),X)}else return W}function Yq(J,Q){let $=Wq(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var Xq={[jQ]:"Linear",[yQ]:"Reinhard",[vQ]:"Cineon",[v7]:"ACESFilmic",[hQ]:"AgX",[bQ]:"Neutral",[fQ]:"Custom"};function Hq(J,Q){let $=Xq[Q];if($===void 0)return o0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var pZ=new S;function Uq(){NJ.getLuminanceCoefficients(pZ);let J=pZ.x.toFixed(4),Q=pZ.y.toFixed(4),$=pZ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Nq(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(W$).join(`
`)}function Gq(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function Fq(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let K=0;K<Z;K++){let W=J.getActiveAttrib(Q,K),Y=W.name,X=1;if(W.type===J.FLOAT_MAT2)X=2;if(W.type===J.FLOAT_MAT3)X=3;if(W.type===J.FLOAT_MAT4)X=4;$[Y]={type:W.type,location:J.getAttribLocation(Q,Y),locationSize:X}}return $}function W$(J){return J!==""}function UU(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function NU(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var Eq=/^[ \t]*#include +<([\w\d./]+)>/gm;function NY(J){return J.replace(Eq,Oq)}var qq=new Map;function Oq(J,Q){let $=FJ[Q];if($===void 0){let Z=qq.get(Q);if(Z!==void 0)$=FJ[Z],o0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return NY($)}var Rq=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function GU(J){return J.replace(Rq,Lq)}function Lq(J,Q,$,Z){let K="";for(let W=parseInt(Q);W<parseInt($);W++)K+=Z.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return K}function FU(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var Vq={[y7]:"SHADOWMAP_TYPE_PCF",[v6]:"SHADOWMAP_TYPE_VSM"};function Dq(J){return Vq[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Bq={[h6]:"ENVMAP_TYPE_CUBE",[f7]:"ENVMAP_TYPE_CUBE",[xQ]:"ENVMAP_TYPE_CUBE_UV"};function kq(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return Bq[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var Mq={[f7]:"ENVMAP_MODE_REFRACTION"};function Cq(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return Mq[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Pq={[OH]:"ENVMAP_BLENDING_MULTIPLY",[RH]:"ENVMAP_BLENDING_MIX",[LH]:"ENVMAP_BLENDING_ADD"};function Iq(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return Pq[J.combine]||"ENVMAP_BLENDING_NONE"}function zq(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function Aq(J,Q,$,Z){let K=J.getContext(),W=$.defines,Y=$.vertexShader,X=$.fragmentShader,H=Dq($),U=kq($),N=Cq($),F=Iq($),G=zq($),E=Nq($),O=Gq(W),D=K.createProgram(),R,q,C=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(R=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O].filter(W$).join(`
`),R.length>0)R+=`
`;if(q=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O].filter(W$).join(`
`),q.length>0)q+=`
`}else R=[FU($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+N:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+H:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(W$).join(`
`),q=[FU($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+N:"",$.envMap?"#define "+F:"",G?"#define CUBEUV_TEXEL_WIDTH "+G.texelWidth:"",G?"#define CUBEUV_TEXEL_HEIGHT "+G.texelHeight:"",G?"#define CUBEUV_MAX_MIP "+G.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.retroreflection?"#define USE_RETROREFLECTION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+H:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==U9?"#define TONE_MAPPING":"",$.toneMapping!==U9?FJ.tonemapping_pars_fragment:"",$.toneMapping!==U9?Hq("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",FJ.colorspace_pars_fragment,Yq("linearToOutputTexel",$.outputColorSpace),Uq(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(W$).join(`
`);if(Y=NY(Y),Y=UU(Y,$),Y=NU(Y,$),X=NY(X),X=UU(X,$),X=NU(X,$),Y=GU(Y),X=GU(X),$.isRawShaderMaterial!==!0)C=`#version 300 es
`,R=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,q=["#define varying in",$.glslVersion===_W?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===_W?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+q;let z=C+R+Y,L=C+q+X,V=YU(K,K.VERTEX_SHADER,z),P=YU(K,K.FRAGMENT_SHADER,L);if(K.attachShader(D,V),K.attachShader(D,P),$.index0AttributeName!==void 0)K.bindAttribLocation(D,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)K.bindAttribLocation(D,0,"position");K.linkProgram(D);function T(j){if(J.debug.checkShaderErrors){let x=K.getProgramInfoLog(D)||"",t=K.getShaderInfoLog(V)||"",y=K.getShaderInfoLog(P)||"",i=x.trim(),s=t.trim(),g=y.trim(),H0=!0,a=!0;if(K.getProgramParameter(D,K.LINK_STATUS)===!1)if(H0=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(K,D,V,P);else{let X0=HU(K,V,"vertex"),E0=HU(K,P,"fragment");$J("WebGLProgram: Shader Error "+K.getError()+" - VALIDATE_STATUS "+K.getProgramParameter(D,K.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+i+`
`+X0+`
`+E0)}else if(i!=="")o0("WebGLProgram: Program Info Log:",i);else if(s===""||g==="")a=!1;if(a)j.diagnostics={runnable:H0,programLog:i,vertexShader:{log:s,prefix:R},fragmentShader:{log:g,prefix:q}}}K.deleteShader(V),K.deleteShader(P),B=new Y$(K,D),I=Fq(K,D)}let B;this.getUniforms=function(){if(B===void 0)T(this);return B};let I;this.getAttributes=function(){if(I===void 0)T(this);return I};let l=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(l===!1)l=K.getProgramParameter(D,$q);return l},this.destroy=function(){Z.releaseStatesOfProgram(this),K.deleteProgram(D),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=Zq++,this.cacheKey=Q,this.usedTimes=1,this.program=D,this.vertexShader=V,this.fragmentShader=P,this}var _q=0;class zU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let Z=this._getShaderCacheForMaterial(J);if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;if(Z.has($)===!1)Z.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new AU(J),Q.set(J,$);return $}}class AU{constructor(J){this.id=_q++,this.code=J,this.usedTimes=0}}function Tq(J){return J===g7||J===FZ||J===EZ}function Sq(J,Q,$,Z,K,W){let Y=new VZ,X=new zU,H=new Set,U=[],N=new Map,F=Z.logarithmicDepthBuffer,G=Z.precision,E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function O(B){if(H.add(B),B===0)return"uv";return`uv${B}`}function D(B,I,l,j,x,t){let y=j.fog,i=x.geometry,s=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?j.environment:null,g=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,H0=Q.get(B.envMap||s,g),a=!!H0&&H0.mapping===xQ?H0.image.height:null,X0=E[B.type];if(B.precision!==null){if(G=Z.getMaxPrecision(B.precision),G!==B.precision)o0("WebGLProgram.getParameters:",B.precision,"not supported, using",G,"instead.")}let E0=i.morphAttributes.position||i.morphAttributes.normal||i.morphAttributes.color,r0=E0!==void 0?E0.length:0,_0=0;if(i.morphAttributes.position!==void 0)_0=1;if(i.morphAttributes.normal!==void 0)_0=2;if(i.morphAttributes.color!==void 0)_0=3;let b0,e0,$0,w;if(X0){let dJ=y9[X0];b0=dJ.vertexShader,e0=dJ.fragmentShader}else{b0=B.vertexShader,e0=B.fragmentShader;let dJ=X.getVertexShaderStage(B),wJ=X.getFragmentShaderStage(B);X.update(B,dJ,wJ),$0=dJ.id,w=wJ.id}let p=J.getRenderTarget(),m=J.state.buffers.depth.getReversed(),J0=x.isInstancedMesh===!0,e=x.isBatchedMesh===!0,D0=!!B.map,L0=!!B.matcap,G0=!!H0,x0=!!B.aoMap,c0=!!B.lightMap,DJ=!!B.bumpMap&&B.wireframe===!1,j0=!!B.normalMap,MJ=!!B.displacementMap,_J=!!B.emissiveMap,hJ=!!B.metalnessMap,f=!!B.roughnessMap,iJ=B.anisotropy>0,YJ=B.clearcoat>0,EJ=B.dispersion>0,A=B.retroreflectivity>0,k=B.iridescence>0,v=B.sheen>0,o=B.transmission>0,q0=iJ&&!!B.anisotropyMap,B0=YJ&&!!B.clearcoatMap,z0=YJ&&!!B.clearcoatNormalMap,Z0=YJ&&!!B.clearcoatRoughnessMap,Y0=k&&!!B.iridescenceMap,k0=k&&!!B.iridescenceThicknessMap,n0=v&&!!B.sheenColorMap,M0=v&&!!B.sheenRoughnessMap,V0=!!B.specularMap,t0=!!B.specularColorMap,a0=!!B.specularIntensityMap,CJ=o&&!!B.transmissionMap,b=o&&!!B.thicknessMap,A0=!!B.gradientMap,K0=!!B.alphaMap,I0=B.alphaTest>0,v0=!!B.alphaHash,O0=!!B.extensions,T0=U9;if(B.toneMapped){if(p===null||p.isXRRenderTarget===!0)T0=J.toneMapping}let KJ={shaderID:X0,shaderType:B.type,shaderName:B.name,vertexShader:b0,fragmentShader:e0,defines:B.defines,customVertexShaderID:$0,customFragmentShaderID:w,isRawShaderMaterial:B.isRawShaderMaterial===!0,glslVersion:B.glslVersion,precision:G,batching:e,batchingColor:e&&x._colorsTexture!==null,instancing:J0,instancingColor:J0&&x.instanceColor!==null,instancingMorph:J0&&x.morphTexture!==null,outputColorSpace:p===null?J.outputColorSpace:p.isXRRenderTarget===!0?p.texture.colorSpace:NJ.workingColorSpace,alphaToCoverage:!!B.alphaToCoverage,map:D0,matcap:L0,envMap:G0,envMapMode:G0&&H0.mapping,envMapCubeUVHeight:a,aoMap:x0,lightMap:c0,bumpMap:DJ,normalMap:j0,displacementMap:MJ,emissiveMap:_J,normalMapObjectSpace:j0&&B.normalMapType===IH,normalMapTangentSpace:j0&&B.normalMapType===zW,packedNormalMap:j0&&B.normalMapType===zW&&Tq(B.normalMap.format),metalnessMap:hJ,roughnessMap:f,anisotropy:iJ,anisotropyMap:q0,clearcoat:YJ,clearcoatMap:B0,clearcoatNormalMap:z0,clearcoatRoughnessMap:Z0,dispersion:EJ,retroreflection:A,iridescence:k,iridescenceMap:Y0,iridescenceThicknessMap:k0,sheen:v,sheenColorMap:n0,sheenRoughnessMap:M0,specularMap:V0,specularColorMap:t0,specularIntensityMap:a0,transmission:o,transmissionMap:CJ,thicknessMap:b,gradientMap:A0,opaque:B.transparent===!1&&B.blending===wQ&&B.alphaToCoverage===!1,alphaMap:K0,alphaTest:I0,alphaHash:v0,combine:B.combine,mapUv:D0&&O(B.map.channel),aoMapUv:x0&&O(B.aoMap.channel),lightMapUv:c0&&O(B.lightMap.channel),bumpMapUv:DJ&&O(B.bumpMap.channel),normalMapUv:j0&&O(B.normalMap.channel),displacementMapUv:MJ&&O(B.displacementMap.channel),emissiveMapUv:_J&&O(B.emissiveMap.channel),metalnessMapUv:hJ&&O(B.metalnessMap.channel),roughnessMapUv:f&&O(B.roughnessMap.channel),anisotropyMapUv:q0&&O(B.anisotropyMap.channel),clearcoatMapUv:B0&&O(B.clearcoatMap.channel),clearcoatNormalMapUv:z0&&O(B.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z0&&O(B.clearcoatRoughnessMap.channel),iridescenceMapUv:Y0&&O(B.iridescenceMap.channel),iridescenceThicknessMapUv:k0&&O(B.iridescenceThicknessMap.channel),sheenColorMapUv:n0&&O(B.sheenColorMap.channel),sheenRoughnessMapUv:M0&&O(B.sheenRoughnessMap.channel),specularMapUv:V0&&O(B.specularMap.channel),specularColorMapUv:t0&&O(B.specularColorMap.channel),specularIntensityMapUv:a0&&O(B.specularIntensityMap.channel),transmissionMapUv:CJ&&O(B.transmissionMap.channel),thicknessMapUv:b&&O(B.thicknessMap.channel),alphaMapUv:K0&&O(B.alphaMap.channel),vertexTangents:!!i.attributes.tangent&&(j0||iJ),vertexNormals:!!i.attributes.normal,vertexColors:B.vertexColors,vertexAlphas:B.vertexColors===!0&&!!i.attributes.color&&i.attributes.color.itemSize===4,pointsUvs:x.isPoints===!0&&!!i.attributes.uv&&(D0||K0),fog:!!y,useFog:B.fog===!0,fogExp2:!!y&&y.isFogExp2,flatShading:B.wireframe===!1&&(B.flatShading===!0||i.attributes.normal===void 0&&j0===!1&&(B.isMeshLambertMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isMeshPhysicalMaterial)),sizeAttenuation:B.sizeAttenuation===!0,logarithmicDepthBuffer:F,reversedDepthBuffer:m,skinning:x.isSkinnedMesh===!0,hasPositionAttribute:i.attributes.position!==void 0,morphTargets:i.morphAttributes.position!==void 0,morphNormals:i.morphAttributes.normal!==void 0,morphColors:i.morphAttributes.color!==void 0,morphTargetsCount:r0,morphTextureStride:_0,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:t.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:B.dithering,shadowMapEnabled:J.shadowMap.enabled&&l.length>0,shadowMapType:J.shadowMap.type,toneMapping:T0,decodeVideoTexture:D0&&B.map.isVideoTexture===!0&&NJ.getTransfer(B.map.colorSpace)===lJ,decodeVideoTextureEmissive:_J&&B.emissiveMap.isVideoTexture===!0&&NJ.getTransfer(B.emissiveMap.colorSpace)===lJ,premultipliedAlpha:B.premultipliedAlpha,doubleSided:B.side===oJ,flipSided:B.side===V8,useDepthPacking:B.depthPacking>=0,depthPacking:B.depthPacking||0,index0AttributeName:B.index0AttributeName,extensionClipCullDistance:O0&&B.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(O0&&B.extensions.multiDraw===!0||e)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:B.customProgramCacheKey()};return KJ.vertexUv1s=H.has(1),KJ.vertexUv2s=H.has(2),KJ.vertexUv3s=H.has(3),H.clear(),KJ}function R(B){let I=[];if(B.shaderID)I.push(B.shaderID);else I.push(B.customVertexShaderID),I.push(B.customFragmentShaderID);if(B.defines!==void 0)for(let l in B.defines)I.push(l),I.push(B.defines[l]);if(B.isRawShaderMaterial===!1)q(I,B),C(I,B),I.push(J.outputColorSpace);return I.push(B.customProgramCacheKey),I.join()}function q(B,I){B.push(I.precision),B.push(I.outputColorSpace),B.push(I.envMapMode),B.push(I.envMapCubeUVHeight),B.push(I.mapUv),B.push(I.alphaMapUv),B.push(I.lightMapUv),B.push(I.aoMapUv),B.push(I.bumpMapUv),B.push(I.normalMapUv),B.push(I.displacementMapUv),B.push(I.emissiveMapUv),B.push(I.metalnessMapUv),B.push(I.roughnessMapUv),B.push(I.anisotropyMapUv),B.push(I.clearcoatMapUv),B.push(I.clearcoatNormalMapUv),B.push(I.clearcoatRoughnessMapUv),B.push(I.iridescenceMapUv),B.push(I.iridescenceThicknessMapUv),B.push(I.sheenColorMapUv),B.push(I.sheenRoughnessMapUv),B.push(I.specularMapUv),B.push(I.specularColorMapUv),B.push(I.specularIntensityMapUv),B.push(I.transmissionMapUv),B.push(I.thicknessMapUv),B.push(I.combine),B.push(I.fogExp2),B.push(I.sizeAttenuation),B.push(I.morphTargetsCount),B.push(I.morphAttributeCount),B.push(I.numSunLights),B.push(I.numDirLights),B.push(I.numPointLights),B.push(I.numSpotLights),B.push(I.numSpotLightMaps),B.push(I.numHemiLights),B.push(I.numRectAreaLights),B.push(I.numSunLightShadows),B.push(I.numDirLightShadows),B.push(I.numPointLightShadows),B.push(I.numSpotLightShadows),B.push(I.numSpotLightShadowsWithMaps),B.push(I.numLightProbes),B.push(I.shadowMapType),B.push(I.toneMapping),B.push(I.numClippingPlanes),B.push(I.numClipIntersection),B.push(I.depthPacking)}function C(B,I){if(Y.disableAll(),I.instancing)Y.enable(0);if(I.instancingColor)Y.enable(1);if(I.instancingMorph)Y.enable(2);if(I.matcap)Y.enable(3);if(I.envMap)Y.enable(4);if(I.normalMapObjectSpace)Y.enable(5);if(I.normalMapTangentSpace)Y.enable(6);if(I.clearcoat)Y.enable(7);if(I.iridescence)Y.enable(8);if(I.alphaTest)Y.enable(9);if(I.vertexColors)Y.enable(10);if(I.vertexAlphas)Y.enable(11);if(I.vertexUv1s)Y.enable(12);if(I.vertexUv2s)Y.enable(13);if(I.vertexUv3s)Y.enable(14);if(I.vertexTangents)Y.enable(15);if(I.anisotropy)Y.enable(16);if(I.alphaHash)Y.enable(17);if(I.batching)Y.enable(18);if(I.dispersion)Y.enable(19);if(I.retroreflection)Y.enable(24);if(I.batchingColor)Y.enable(20);if(I.gradientMap)Y.enable(21);if(I.packedNormalMap)Y.enable(22);if(I.vertexNormals)Y.enable(23);if(B.push(Y.mask),Y.disableAll(),I.fog)Y.enable(0);if(I.useFog)Y.enable(1);if(I.flatShading)Y.enable(2);if(I.logarithmicDepthBuffer)Y.enable(3);if(I.reversedDepthBuffer)Y.enable(4);if(I.skinning)Y.enable(5);if(I.morphTargets)Y.enable(6);if(I.morphNormals)Y.enable(7);if(I.morphColors)Y.enable(8);if(I.premultipliedAlpha)Y.enable(9);if(I.shadowMapEnabled)Y.enable(10);if(I.doubleSided)Y.enable(11);if(I.flipSided)Y.enable(12);if(I.useDepthPacking)Y.enable(13);if(I.dithering)Y.enable(14);if(I.transmission)Y.enable(15);if(I.sheen)Y.enable(16);if(I.opaque)Y.enable(17);if(I.pointsUvs)Y.enable(18);if(I.decodeVideoTexture)Y.enable(19);if(I.decodeVideoTextureEmissive)Y.enable(20);if(I.alphaToCoverage)Y.enable(21);if(I.numLightProbeGrids>0)Y.enable(22);if(I.hasPositionAttribute)Y.enable(23);B.push(Y.mask)}function z(B){let I=E[B.type],l;if(I){let j=y9[I];l=i9.clone(j.uniforms)}else l=B.uniforms;return l}function L(B,I){let l=N.get(I);if(l!==void 0)++l.usedTimes;else l=new Aq(J,I,B,K),U.push(l),N.set(I,l);return l}function V(B){if(--B.usedTimes===0){let I=U.indexOf(B);U[I]=U[U.length-1],U.pop(),N.delete(B.cacheKey),B.destroy()}}function P(B){X.remove(B)}function T(){X.dispose()}return{getParameters:D,getProgramCacheKey:R,getUniforms:z,acquireProgram:L,releaseProgram:V,releaseShaderCache:P,programs:U,dispose:T}}function wq(){let J=new WeakMap;function Q(Y){return J.has(Y)}function $(Y){let X=J.get(Y);if(X===void 0)X={},J.set(Y,X);return X}function Z(Y){J.delete(Y)}function K(Y,X,H){J.get(Y)[X]=H}function W(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:K,dispose:W}}function jq(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function EU(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function qU(){let J=[],Q=0,$=[],Z=[],K=[];function W(){Q=0,$.length=0,Z.length=0,K.length=0}function Y(G){let E=0;if(G.isInstancedMesh)E+=2;if(G.isSkinnedMesh)E+=1;return E}function X(G,E,O,D,R,q){let C=J[Q];if(C===void 0)C={id:G.id,object:G,geometry:E,material:O,materialVariant:Y(G),groupOrder:D,renderOrder:G.renderOrder,z:R,group:q},J[Q]=C;else C.id=G.id,C.object=G,C.geometry=E,C.material=O,C.materialVariant=Y(G),C.groupOrder=D,C.renderOrder=G.renderOrder,C.z=R,C.group=q;return Q++,C}function H(G,E,O,D,R,q,C){if(C.reversedDepth===!0)R=-R;let z=X(G,E,O,D,R,q);if(O.transmission>0)Z.push(z);else if(O.transparent===!0)K.push(z);else $.push(z)}function U(G,E,O,D,R,q){let C=X(G,E,O,D,R,q);if(O.transmission>0)Z.unshift(C);else if(O.transparent===!0)K.unshift(C);else $.unshift(C)}function N(G,E){if($.length>1)$.sort(G||jq);if(Z.length>1)Z.sort(E||EU);if(K.length>1)K.sort(E||EU)}function F(){for(let G=Q,E=J.length;G<E;G++){let O=J[G];if(O.id===null)break;O.id=null,O.object=null,O.geometry=null,O.material=null,O.group=null}}return{opaque:$,transmissive:Z,transparent:K,init:W,push:H,unshift:U,finish:F,sort:N}}function yq(){let J=new WeakMap;function Q(Z,K){let W=J.get(Z),Y;if(W===void 0)Y=new qU,J.set(Z,[Y]);else if(K>=W.length)Y=new qU,W.push(Y);else Y=W[K];return Y}function $(){J=new WeakMap}return{get:Q,dispose:$}}function vq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={direction:new S,color:new h0};break;case"SpotLight":$={position:new S,direction:new S,color:new h0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new S,color:new h0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new S,skyColor:new h0,groundColor:new h0};break;case"RectAreaLight":$={color:new h0,position:new S,halfWidth:new S,halfHeight:new S};break}return J[Q.id]=$,$}}}function fq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new N0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new N0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new N0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var hq=0;function bq(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function xq(J){let Q=new vq,$=fq(),Z={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new S);let K=new S,W=new QJ,Y=new QJ;function X(U){let N=0,F=0,G=0;for(let x=0;x<9;x++)Z.probe[x].set(0,0,0);let E=0,O=0,D=0,R=0,q=0,C=0,z=0,L=0,V=0,P=0,T=0,B=0,I=0,l=0;U.sort(bq);for(let x=0,t=U.length;x<t;x++){let y=U[x],i=y.color,s=y.intensity,g=y.distance,H0=null;if(y.shadow&&y.shadow.map)if(y.shadow.map.texture.format===g7)H0=y.shadow.map.texture;else H0=y.shadow.map.depthTexture||y.shadow.map.texture;if(y.isAmbientLight)N+=i.r*s,F+=i.g*s,G+=i.b*s;else if(y.isLightProbe){for(let a=0;a<9;a++)Z.probe[a].addScaledVector(y.sh.coefficients[a],s);l++}else if(y.isSunLight){let a=Q.get(y);if(a.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let X0=y.shadow,E0=$.get(y);E0.shadowIntensity=X0.intensity,E0.shadowBias=X0.bias,E0.shadowNormalBias=X0.normalBias,E0.shadowRadius=X0.radius,E0.shadowMapSize.copy(X0.mapSize).multiply(X0.getFrameExtents()),Z.sunShadow[O]=E0,Z.sunShadowMap[O]=H0;let r0=X0.getViewportCount();for(let _0=0;_0<r0;_0++)Z.sunShadowMatrix[D+_0]=X0.getMatrix(_0),Z.sunShadowCascade[D+_0]=X0._cascadeData[_0];D+=r0,O++}Z.sun[E]=a,E++}else if(y.isDirectionalLight){let a=Q.get(y);if(a.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let X0=y.shadow,E0=$.get(y);E0.shadowIntensity=X0.intensity,E0.shadowBias=X0.bias,E0.shadowNormalBias=X0.normalBias,E0.shadowRadius=X0.radius,E0.shadowMapSize=X0.mapSize,Z.directionalShadow[R]=E0,Z.directionalShadowMap[R]=H0,Z.directionalShadowMatrix[R]=y.shadow.matrix,V++}Z.directional[R]=a,R++}else if(y.isSpotLight){let a=Q.get(y);a.position.setFromMatrixPosition(y.matrixWorld),a.color.copy(i).multiplyScalar(s),a.distance=g,a.coneCos=Math.cos(y.angle),a.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),a.decay=y.decay,Z.spot[C]=a;let X0=y.shadow;if(y.map){if(Z.spotLightMap[B]=y.map,B++,X0.updateMatrices(y),y.castShadow)I++}if(Z.spotLightMatrix[C]=X0.matrix,y.castShadow){let E0=$.get(y);E0.shadowIntensity=X0.intensity,E0.shadowBias=X0.bias,E0.shadowNormalBias=X0.normalBias,E0.shadowRadius=X0.radius,E0.shadowMapSize=X0.mapSize,Z.spotShadow[C]=E0,Z.spotShadowMap[C]=H0,T++}C++}else if(y.isRectAreaLight){let a=Q.get(y);a.color.copy(i).multiplyScalar(s),a.halfWidth.set(y.width*0.5,0,0),a.halfHeight.set(0,y.height*0.5,0),Z.rectArea[z]=a,z++}else if(y.isPointLight){let a=Q.get(y);if(a.color.copy(y.color).multiplyScalar(y.intensity),a.distance=y.distance,a.decay=y.decay,y.castShadow){let X0=y.shadow,E0=$.get(y);E0.shadowIntensity=X0.intensity,E0.shadowBias=X0.bias,E0.shadowNormalBias=X0.normalBias,E0.shadowRadius=X0.radius,E0.shadowMapSize=X0.mapSize,E0.shadowCameraNear=X0.camera.near,E0.shadowCameraFar=X0.camera.far,Z.pointShadow[q]=E0,Z.pointShadowMap[q]=H0,Z.pointShadowMatrix[q]=y.shadow.matrix,P++}Z.point[q]=a,q++}else if(y.isHemisphereLight){let a=Q.get(y);a.skyColor.copy(y.color).multiplyScalar(s),a.groundColor.copy(y.groundColor).multiplyScalar(s),Z.hemi[L]=a,L++}}if(z>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=y0.LTC_FLOAT_1,Z.rectAreaLTC2=y0.LTC_FLOAT_2;else Z.rectAreaLTC1=y0.LTC_HALF_1,Z.rectAreaLTC2=y0.LTC_HALF_2;Z.ambient[0]=N,Z.ambient[1]=F,Z.ambient[2]=G;let j=Z.hash;if(j.sunLength!==E||j.directionalLength!==R||j.pointLength!==q||j.spotLength!==C||j.rectAreaLength!==z||j.hemiLength!==L||j.numSunShadows!==O||j.numDirectionalShadows!==V||j.numPointShadows!==P||j.numSpotShadows!==T||j.numSpotMaps!==B||j.numLightProbes!==l)Z.sun.length=E,Z.directional.length=R,Z.spot.length=C,Z.rectArea.length=z,Z.point.length=q,Z.hemi.length=L,Z.sunShadow.length=O,Z.sunShadowMap.length=O,Z.sunShadowMatrix.length=D,Z.sunShadowCascade.length=D,Z.directionalShadow.length=V,Z.directionalShadowMap.length=V,Z.directionalShadowMatrix.length=V,Z.pointShadow.length=P,Z.pointShadowMap.length=P,Z.pointShadowMatrix.length=P,Z.spotShadow.length=T,Z.spotShadowMap.length=T,Z.spotLightMatrix.length=T+B-I,Z.spotLightMap.length=B,Z.numSpotLightShadowsWithMaps=I,Z.numLightProbes=l,j.sunLength=E,j.directionalLength=R,j.pointLength=q,j.spotLength=C,j.rectAreaLength=z,j.hemiLength=L,j.numSunShadows=O,j.numDirectionalShadows=V,j.numPointShadows=P,j.numSpotShadows=T,j.numSpotMaps=B,j.numLightProbes=l,Z.version=hq++}function H(U,N){let F=0,G=0,E=0,O=0,D=0,R=0,q=N.matrixWorldInverse;for(let C=0,z=U.length;C<z;C++){let L=U[C];if(L.isSunLight){let V=Z.sun[F];V.direction.setFromMatrixPosition(L.matrixWorld),V.direction.transformDirection(q),F++}else if(L.isDirectionalLight){let V=Z.directional[G];V.direction.setFromMatrixPosition(L.matrixWorld),K.setFromMatrixPosition(L.target.matrixWorld),V.direction.sub(K),V.direction.transformDirection(q),G++}else if(L.isSpotLight){let V=Z.spot[O];V.position.setFromMatrixPosition(L.matrixWorld),V.position.applyMatrix4(q),V.direction.setFromMatrixPosition(L.matrixWorld),K.setFromMatrixPosition(L.target.matrixWorld),V.direction.sub(K),V.direction.transformDirection(q),O++}else if(L.isRectAreaLight){let V=Z.rectArea[D];V.position.setFromMatrixPosition(L.matrixWorld),V.position.applyMatrix4(q),Y.identity(),W.copy(L.matrixWorld),W.premultiply(q),Y.extractRotation(W),V.halfWidth.set(L.width*0.5,0,0),V.halfHeight.set(0,L.height*0.5,0),V.halfWidth.applyMatrix4(Y),V.halfHeight.applyMatrix4(Y),D++}else if(L.isPointLight){let V=Z.point[E];V.position.setFromMatrixPosition(L.matrixWorld),V.position.applyMatrix4(q),E++}else if(L.isHemisphereLight){let V=Z.hemi[R];V.direction.setFromMatrixPosition(L.matrixWorld),V.direction.transformDirection(q),R++}}}return{setup:X,setupView:H,state:Z}}function OU(J){let Q=new xq(J),$=[],Z=[],K=[];function W(G){F.camera=G,$.length=0,Z.length=0,K.length=0}function Y(G){$.push(G)}function X(G){Z.push(G)}function H(G){K.push(G)}function U(){Q.setup($)}function N(G){Q.setupView($,G)}let F={lightsArray:$,shadowsArray:Z,lightProbeGridArray:K,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:F,setupLights:U,setupLightsView:N,pushLight:Y,pushShadow:X,pushLightProbeGrid:H}}function gq(J){let Q=new WeakMap;function $(K,W=0){let Y=Q.get(K),X;if(Y===void 0)X=new OU(J),Q.set(K,[X]);else if(W>=Y.length)X=new OU(J),Y.push(X);else X=Y[W];return X}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var pq=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lq=`uniform sampler2D shadow_pass;
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
}`,mq=[new S(1,0,0),new S(-1,0,0),new S(0,1,0),new S(0,-1,0),new S(0,0,1),new S(0,0,-1)],uq=[new S(0,-1,0),new S(0,-1,0),new S(0,0,1),new S(0,0,-1),new S(0,-1,0),new S(0,-1,0)],RU=new QJ,K$=new S,HY=new S;function dq(J,Q,$){let Z=new nQ,K=new N0,W=new N0,Y=new pJ,X=new lW,H=new mW,U={},N=$.maxTextureSize,F={[G7]:V8,[V8]:G7,[oJ]:oJ},G=new rJ({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new N0},radius:{value:4}},vertexShader:pq,fragmentShader:lq}),E=G.clone();E.defines.HORIZONTAL_PASS=1;let O=new mJ;O.setAttribute("position",new tJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let D=new C0(O,G),R=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=y7;let q=this.type;this.render=function(P,T,B){if(R.enabled===!1)return;if(R.autoUpdate===!1&&R.needsUpdate===!1)return;if(P.length===0)return;if(this.type===lX)o0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=y7;let I=J.getRenderTarget(),l=J.getActiveCubeFace(),j=J.getActiveMipmapLevel(),x=J.state;if(x.setBlending(n8),x.buffers.depth.getReversed()===!0)x.buffers.color.setClear(0,0,0,0);else x.buffers.color.setClear(1,1,1,1);x.buffers.depth.setTest(!0),x.setScissorTest(!1);let t=q!==this.type;if(t)T.traverse(function(y){if(y.material)if(Array.isArray(y.material))y.material.forEach((i)=>i.needsUpdate=!0);else y.material.needsUpdate=!0});for(let y=0,i=P.length;y<i;y++){let s=P[y],g=s.shadow;if(g===void 0){o0("WebGLShadowMap:",s,"has no shadow.");continue}if(g.autoUpdate===!1&&g.needsUpdate===!1)continue;K.copy(g.mapSize);let H0=g.getFrameExtents();if(K.multiply(H0),W.copy(g.mapSize),K.x>N||K.y>N){if(K.x>N)W.x=Math.floor(N/H0.x),K.x=W.x*H0.x,g.mapSize.x=W.x;if(K.y>N)W.y=Math.floor(N/H0.y),K.y=W.y*H0.y,g.mapSize.y=W.y}let a=J.state.buffers.depth.getReversed();if(g.camera._reversedDepth=a,g.map===null||t===!0){if(g.map!==null){if(g.map.depthTexture!==null)g.map.depthTexture.dispose(),g.map.depthTexture=null;g.map.dispose()}if(this.type===v6){if(s.isPointLight){o0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}g.map=new Q8(K.x,K.y,{format:g7,type:O8,minFilter:q8,magFilter:q8,generateMipmaps:!1}),g.map.texture.name=s.name+".shadowMap",g.map.depthTexture=new d7(K.x,K.y,n9),g.map.depthTexture.name=s.name+".shadowMapDepth",g.map.depthTexture.format=b7,g.map.depthTexture.compareFunction=null,g.map.depthTexture.minFilter=N9,g.map.depthTexture.magFilter=N9}else{if(s.isPointLight)g.map=new GY(K.x),g.map.depthTexture=new vW(K.x,E7);else g.map=new Q8(K.x,K.y),g.map.depthTexture=new d7(K.x,K.y,E7);if(g.map.depthTexture.name=s.name+".shadowMap",g.map.depthTexture.format=b7,this.type===y7)g.map.depthTexture.compareFunction=a?RZ:OZ,g.map.depthTexture.minFilter=q8,g.map.depthTexture.magFilter=q8;else g.map.depthTexture.compareFunction=null,g.map.depthTexture.minFilter=N9,g.map.depthTexture.magFilter=N9}g.camera.updateProjectionMatrix()}if(g.map.isWebGLCubeRenderTarget!==!0&&(g.map.width!==K.x||g.map.height!==K.y))g.map.setSize(K.x,K.y);let X0=g.map.isWebGLCubeRenderTarget?6:g.getViewportCount();if(s.isPointLight!==!0)g.updateMatrices(s,B);for(let E0=0;E0<X0;E0++){let r0=g.getCamera(E0);if(s.isPointLight){let{camera:_0,matrix:b0}=g,e0=s.distance||_0.far;if(e0!==_0.far)_0.far=e0,_0.updateProjectionMatrix();K$.setFromMatrixPosition(s.matrixWorld),_0.position.copy(K$),HY.copy(_0.position),HY.add(mq[E0]),_0.up.copy(uq[E0]),_0.lookAt(HY),_0.updateMatrixWorld(),b0.makeTranslation(-K$.x,-K$.y,-K$.z),RU.multiplyMatrices(_0.projectionMatrix,_0.matrixWorldInverse),g._frustum.setFromProjectionMatrix(RU,_0.coordinateSystem,_0.reversedDepth)}if(g.map.isWebGLCubeRenderTarget)J.setRenderTarget(g.map,E0),J.clear();else{if(E0===0)J.setRenderTarget(g.map),J.clear();let _0=g.getViewport(E0);Y.set(W.x*_0.x,W.y*_0.y,W.x*_0.z,W.y*_0.w),x.viewport(Y)}Z=g.getFrustum(E0),L(T,B,r0,s,this.type)}if(g.isPointLightShadow!==!0&&this.type===v6)C(g,B);g.needsUpdate=!1}q=this.type,R.needsUpdate=!1,J.setRenderTarget(I,l,j)};function C(P,T){let B=Q.update(D);if(G.defines.VSM_SAMPLES!==P.blurSamples)G.defines.VSM_SAMPLES=P.blurSamples,E.defines.VSM_SAMPLES=P.blurSamples,G.needsUpdate=!0,E.needsUpdate=!0;if(P.mapPass===null)P.mapPass=new Q8(K.x,K.y,{format:g7,type:O8});else if(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)P.mapPass.setSize(P.map.width,P.map.height);G.uniforms.shadow_pass.value=P.map.depthTexture,G.uniforms.resolution.value.set(P.map.width,P.map.height),G.uniforms.radius.value=P.radius,J.setRenderTarget(P.mapPass),J.clear(),J.renderBufferDirect(T,null,B,G,D,null),E.uniforms.shadow_pass.value=P.mapPass.texture,E.uniforms.resolution.value.set(P.map.width,P.map.height),E.uniforms.radius.value=P.radius,J.setRenderTarget(P.map),J.clear(),J.renderBufferDirect(T,null,B,E,D,null)}function z(P,T,B,I){let l=null,j=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(j!==void 0)l=j;else if(l=B.isPointLight===!0?H:X,J.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let x=l.uuid,t=T.uuid,y=U[x];if(y===void 0)y={},U[x]=y;let i=y[t];if(i===void 0)i=l.clone(),y[t]=i,T.addEventListener("dispose",V);l=i}if(l.visible=T.visible,l.wireframe=T.wireframe,I===v6)l.side=T.shadowSide!==null?T.shadowSide:T.side;else l.side=T.shadowSide!==null?T.shadowSide:F[T.side];if(l.alphaMap=T.alphaMap,l.alphaTest=T.alphaToCoverage===!0?0.5:T.alphaTest,l.map=T.map,l.clipShadows=T.clipShadows,l.clippingPlanes=T.clippingPlanes,l.clipIntersection=T.clipIntersection,l.displacementMap=T.displacementMap,l.displacementScale=T.displacementScale,l.displacementBias=T.displacementBias,l.wireframeLinewidth=T.wireframeLinewidth,l.linewidth=T.linewidth,B.isPointLight===!0&&l.isMeshDistanceMaterial===!0){let x=J.properties.get(l);x.light=B}return l}function L(P,T,B,I,l){if(P.visible===!1)return;if(P.layers.test(T.layers)&&(P.isMesh||P.isLine||P.isPoints)){if((P.castShadow||P.receiveShadow&&l===v6)&&(!P.frustumCulled||P.intersectsFrustum(Z))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);let t=Q.update(P),y=P.material;if(Array.isArray(y)){let i=t.groups;for(let s=0,g=i.length;s<g;s++){let H0=i[s],a=y[H0.materialIndex];if(a&&a.visible){let X0=z(P,a,I,l);P.onBeforeShadow(J,P,T,B,t,X0,H0),J.renderBufferDirect(B,null,t,X0,P,H0),P.onAfterShadow(J,P,T,B,t,X0,H0)}}}else if(y.visible){let i=z(P,y,I,l);P.onBeforeShadow(J,P,T,B,t,i,null),J.renderBufferDirect(B,null,t,i,P,null),P.onAfterShadow(J,P,T,B,t,i,null)}}}let x=P.children;for(let t=0,y=x.length;t<y;t++)L(x[t],T,B,I,l)}function V(P){P.target.removeEventListener("dispose",V);for(let B in U){let I=U[B],l=P.target.uuid;if(l in I)I[l].dispose(),delete I[l]}}}function cq(J,Q){function $(){let b=!1,A0=new pJ,K0=null,I0=new pJ(0,0,0,0);return{setMask:function(v0){if(K0!==v0&&!b)J.colorMask(v0,v0,v0,v0),K0=v0},setLocked:function(v0){b=v0},setClear:function(v0,O0,T0,KJ,dJ){if(dJ===!0)v0*=KJ,O0*=KJ,T0*=KJ;if(A0.set(v0,O0,T0,KJ),I0.equals(A0)===!1)J.clearColor(v0,O0,T0,KJ),I0.copy(A0)},reset:function(){b=!1,K0=null,I0.set(-1,0,0,0)}}}function Z(){let b=!1,A0=!1,K0=null,I0=null,v0=null;return{setReversed:function(O0){if(A0!==O0){let T0=Q.get("EXT_clip_control");if(O0)T0.clipControlEXT(T0.LOWER_LEFT_EXT,T0.ZERO_TO_ONE_EXT);else T0.clipControlEXT(T0.LOWER_LEFT_EXT,T0.NEGATIVE_ONE_TO_ONE_EXT);A0=O0;let KJ=v0;v0=null,this.setClear(KJ)}},getReversed:function(){return A0},setTest:function(O0){if(O0)p(J.DEPTH_TEST);else m(J.DEPTH_TEST)},setMask:function(O0){if(K0!==O0&&!b)J.depthMask(O0),K0=O0},setFunc:function(O0){if(A0)O0=fH[O0];if(I0!==O0){switch(O0){case HH:J.depthFunc(J.NEVER);break;case UH:J.depthFunc(J.ALWAYS);break;case NH:J.depthFunc(J.LESS);break;case lK:J.depthFunc(J.LEQUAL);break;case GH:J.depthFunc(J.EQUAL);break;case FH:J.depthFunc(J.GEQUAL);break;case EH:J.depthFunc(J.GREATER);break;case qH:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}I0=O0}},setLocked:function(O0){b=O0},setClear:function(O0){if(v0!==O0){if(v0=O0,A0)O0=1-O0;J.clearDepth(O0)}},reset:function(){b=!1,K0=null,I0=null,v0=null,A0=!1}}}function K(){let b=!1,A0=null,K0=null,I0=null,v0=null,O0=null,T0=null,KJ=null,dJ=null;return{setTest:function(wJ){if(!b)if(wJ)p(J.STENCIL_TEST);else m(J.STENCIL_TEST)},setMask:function(wJ){if(A0!==wJ&&!b)J.stencilMask(wJ),A0=wJ},setFunc:function(wJ,m8,Q9){if(K0!==wJ||I0!==m8||v0!==Q9)J.stencilFunc(wJ,m8,Q9),K0=wJ,I0=m8,v0=Q9},setOp:function(wJ,m8,Q9){if(O0!==wJ||T0!==m8||KJ!==Q9)J.stencilOp(wJ,m8,Q9),O0=wJ,T0=m8,KJ=Q9},setLocked:function(wJ){b=wJ},setClear:function(wJ){if(dJ!==wJ)J.clearStencil(wJ),dJ=wJ},reset:function(){b=!1,A0=null,K0=null,I0=null,v0=null,O0=null,T0=null,KJ=null,dJ=null}}}let W=new $,Y=new Z,X=new K,H=new WeakMap,U=new WeakMap,N={},F={},G={},E=new WeakMap,O=[],D=null,R=!1,q=null,C=null,z=null,L=null,V=null,P=null,T=null,B=new h0(0,0,0),I=0,l=!1,j=null,x=null,t=null,y=null,i=null,s=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),g=!1,H0=0,a=J.getParameter(J.VERSION);if(a.indexOf("WebGL")!==-1)H0=parseFloat(/^WebGL (\d)/.exec(a)[1]),g=H0>=1;else if(a.indexOf("OpenGL ES")!==-1)H0=parseFloat(/^OpenGL ES (\d)/.exec(a)[1]),g=H0>=2;let X0=null,E0={},r0=J.getParameter(J.SCISSOR_BOX),_0=J.getParameter(J.VIEWPORT),b0=new pJ().fromArray(r0),e0=new pJ().fromArray(_0);function $0(b,A0,K0,I0){let v0=new Uint8Array(4),O0=J.createTexture();J.bindTexture(b,O0),J.texParameteri(b,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(b,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let T0=0;T0<K0;T0++)if(b===J.TEXTURE_3D||b===J.TEXTURE_2D_ARRAY)J.texImage3D(A0,0,J.RGBA,1,1,I0,0,J.RGBA,J.UNSIGNED_BYTE,v0);else J.texImage2D(A0+T0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,v0);return O0}let w={};w[J.TEXTURE_2D]=$0(J.TEXTURE_2D,J.TEXTURE_2D,1),w[J.TEXTURE_CUBE_MAP]=$0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),w[J.TEXTURE_2D_ARRAY]=$0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),w[J.TEXTURE_3D]=$0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),Y.setClear(1),X.setClear(0),p(J.DEPTH_TEST),Y.setFunc(lK),DJ(!1),j0(xK),p(J.CULL_FACE),x0(n8);function p(b){if(N[b]!==!0)J.enable(b),N[b]=!0}function m(b){if(N[b]!==!1)J.disable(b),N[b]=!1}function J0(b,A0){if(G[b]!==A0){if(J.bindFramebuffer(b,A0),G[b]=A0,b===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=A0;if(b===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=A0;return!0}return!1}function e(b,A0){let K0=O,I0=!1;if(b){if(K0=E.get(A0),K0===void 0)K0=[],E.set(A0,K0);let v0=b.textures;if(K0.length!==v0.length||K0[0]!==J.COLOR_ATTACHMENT0){for(let O0=0,T0=v0.length;O0<T0;O0++)K0[O0]=J.COLOR_ATTACHMENT0+O0;K0.length=v0.length,I0=!0}}else if(K0[0]!==J.BACK)K0[0]=J.BACK,I0=!0;if(I0)J.drawBuffers(K0)}function D0(b){if(D!==b)return J.useProgram(b),D=b,!0;return!1}let L0={[f6]:J.FUNC_ADD,[uX]:J.FUNC_SUBTRACT,[dX]:J.FUNC_REVERSE_SUBTRACT};L0[cX]=J.MIN,L0[nX]=J.MAX;let G0={[sX]:J.ZERO,[iX]:J.ONE,[oX]:J.SRC_COLOR,[rX]:J.SRC_ALPHA,[ZH]:J.SRC_ALPHA_SATURATE,[QH]:J.DST_COLOR,[eX]:J.DST_ALPHA,[aX]:J.ONE_MINUS_SRC_COLOR,[tX]:J.ONE_MINUS_SRC_ALPHA,[$H]:J.ONE_MINUS_DST_COLOR,[JH]:J.ONE_MINUS_DST_ALPHA,[KH]:J.CONSTANT_COLOR,[WH]:J.ONE_MINUS_CONSTANT_COLOR,[YH]:J.CONSTANT_ALPHA,[XH]:J.ONE_MINUS_CONSTANT_ALPHA};function x0(b,A0,K0,I0,v0,O0,T0,KJ,dJ,wJ){if(b===n8){if(R===!0)m(J.BLEND),R=!1;return}if(R===!1)p(J.BLEND),R=!0;if(b!==mX){if(b!==q||wJ!==l){if(C!==f6||V!==f6)J.blendEquation(J.FUNC_ADD),C=f6,V=f6;if(wJ)switch(b){case wQ:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case z9:J.blendFunc(J.ONE,J.ONE);break;case gK:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case pK:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:$J("WebGLState: Invalid blending: ",b);break}else switch(b){case wQ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case z9:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case gK:$J("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pK:$J("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$J("WebGLState: Invalid blending: ",b);break}z=null,L=null,P=null,T=null,B.set(0,0,0),I=0,q=b,l=wJ}return}if(v0=v0||A0,O0=O0||K0,T0=T0||I0,A0!==C||v0!==V)J.blendEquationSeparate(L0[A0],L0[v0]),C=A0,V=v0;if(K0!==z||I0!==L||O0!==P||T0!==T)J.blendFuncSeparate(G0[K0],G0[I0],G0[O0],G0[T0]),z=K0,L=I0,P=O0,T=T0;if(KJ.equals(B)===!1||dJ!==I)J.blendColor(KJ.r,KJ.g,KJ.b,dJ),B.copy(KJ),I=dJ;q=b,l=!1}function c0(b,A0){b.side===oJ?m(J.CULL_FACE):p(J.CULL_FACE);let K0=b.side===V8;if(A0)K0=!K0;DJ(K0),b.blending===wQ&&b.transparent===!1?x0(n8):x0(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),Y.setFunc(b.depthFunc),Y.setTest(b.depthTest),Y.setMask(b.depthWrite),W.setMask(b.colorWrite);let I0=b.stencilWrite;if(X.setTest(I0),I0)X.setMask(b.stencilWriteMask),X.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),X.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass);_J(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?p(J.SAMPLE_ALPHA_TO_COVERAGE):m(J.SAMPLE_ALPHA_TO_COVERAGE)}function DJ(b){if(j!==b){if(b)J.frontFace(J.CW);else J.frontFace(J.CCW);j=b}}function j0(b){if(b!==gX){if(p(J.CULL_FACE),b!==x)if(b===xK)J.cullFace(J.BACK);else if(b===pX)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else m(J.CULL_FACE);x=b}function MJ(b){if(b!==t){if(g)J.lineWidth(b);t=b}}function _J(b,A0,K0){if(b){if(p(J.POLYGON_OFFSET_FILL),y!==A0||i!==K0){if(y=A0,i=K0,Y.getReversed())A0=-A0;J.polygonOffset(A0,K0)}}else m(J.POLYGON_OFFSET_FILL)}function hJ(b){if(b)p(J.SCISSOR_TEST);else m(J.SCISSOR_TEST)}function f(b){if(b===void 0)b=J.TEXTURE0+s-1;if(X0!==b)J.activeTexture(b),X0=b}function iJ(b,A0,K0){if(K0===void 0)if(X0===null)K0=J.TEXTURE0+s-1;else K0=X0;let I0=E0[K0];if(I0===void 0)I0={type:void 0,texture:void 0},E0[K0]=I0;if(I0.type!==b||I0.texture!==A0){if(X0!==K0)J.activeTexture(K0),X0=K0;J.bindTexture(b,A0||w[b]),I0.type=b,I0.texture=A0}}function YJ(){let b=E0[X0];if(b!==void 0&&b.type!==void 0)J.bindTexture(b.type,null),b.type=void 0,b.texture=void 0}function EJ(){try{J.compressedTexImage2D(...arguments)}catch(b){$J("WebGLState:",b)}}function A(){try{J.compressedTexImage3D(...arguments)}catch(b){$J("WebGLState:",b)}}function k(){try{J.texSubImage2D(...arguments)}catch(b){$J("WebGLState:",b)}}function v(){try{J.texSubImage3D(...arguments)}catch(b){$J("WebGLState:",b)}}function o(){try{J.compressedTexSubImage2D(...arguments)}catch(b){$J("WebGLState:",b)}}function q0(){try{J.compressedTexSubImage3D(...arguments)}catch(b){$J("WebGLState:",b)}}function B0(){try{J.texStorage2D(...arguments)}catch(b){$J("WebGLState:",b)}}function z0(){try{J.texStorage3D(...arguments)}catch(b){$J("WebGLState:",b)}}function Z0(){try{J.texImage2D(...arguments)}catch(b){$J("WebGLState:",b)}}function Y0(){try{J.texImage3D(...arguments)}catch(b){$J("WebGLState:",b)}}function k0(b){if(F[b]!==void 0)return F[b];else return J.getParameter(b)}function n0(b,A0){if(F[b]!==A0)J.pixelStorei(b,A0),F[b]=A0}function M0(b){if(b0.equals(b)===!1)J.scissor(b.x,b.y,b.z,b.w),b0.copy(b)}function V0(b){if(e0.equals(b)===!1)J.viewport(b.x,b.y,b.z,b.w),e0.copy(b)}function t0(b,A0){let K0=U.get(A0);if(K0===void 0)K0=new WeakMap,U.set(A0,K0);let I0=K0.get(b);if(I0===void 0)I0=J.getUniformBlockIndex(A0,b.name),K0.set(b,I0)}function a0(b,A0){let I0=U.get(A0).get(b);if(H.get(A0)!==I0)J.uniformBlockBinding(A0,I0,b.__bindingPointIndex),H.set(A0,I0)}function CJ(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),Y.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),N={},F={},X0=null,E0={},G={},E=new WeakMap,O=[],D=null,R=!1,q=null,C=null,z=null,L=null,V=null,P=null,T=null,B=new h0(0,0,0),I=0,l=!1,j=null,x=null,t=null,y=null,i=null,b0.set(0,0,J.canvas.width,J.canvas.height),e0.set(0,0,J.canvas.width,J.canvas.height),W.reset(),Y.reset(),X.reset()}return{buffers:{color:W,depth:Y,stencil:X},enable:p,disable:m,bindFramebuffer:J0,drawBuffers:e,useProgram:D0,setBlending:x0,setMaterial:c0,setFlipSided:DJ,setCullFace:j0,setLineWidth:MJ,setPolygonOffset:_J,setScissorTest:hJ,activeTexture:f,bindTexture:iJ,unbindTexture:YJ,compressedTexImage2D:EJ,compressedTexImage3D:A,texImage2D:Z0,texImage3D:Y0,pixelStorei:n0,getParameter:k0,updateUBOMapping:t0,uniformBlockBinding:a0,texStorage2D:B0,texStorage3D:z0,texSubImage2D:k,texSubImage3D:v,compressedTexSubImage2D:o,compressedTexSubImage3D:q0,scissor:M0,viewport:V0,reset:CJ}}function nq(J,Q,$,Z,K,W,Y){let X=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,H=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new N0,N=new WeakMap,F=new Set,G,E=new WeakMap,O=!1;try{O=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(A){}function D(A,k){return O?new OffscreenCanvas(A,k):S6("canvas")}function R(A,k,v){let o=1,q0=EJ(A);if(q0.width>v||q0.height>v)o=v/Math.max(q0.width,q0.height);if(o<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let B0=Math.floor(o*q0.width),z0=Math.floor(o*q0.height);if(G===void 0)G=D(B0,z0);let Z0=k?D(B0,z0):G;return Z0.width=B0,Z0.height=z0,Z0.getContext("2d").drawImage(A,0,0,B0,z0),o0("WebGLRenderer: Texture has been resized from ("+q0.width+"x"+q0.height+") to ("+B0+"x"+z0+")."),Z0}else{if("data"in A)o0("WebGLRenderer: Image in DataTexture is too big ("+q0.width+"x"+q0.height+").");return A}return A}function q(A){return A.generateMipmaps}function C(A){J.generateMipmap(A)}function z(A){if(A.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(A.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function L(A,k,v,o,q0,B0=!1){if(A!==null){if(J[A]!==void 0)return J[A];o0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let z0;if(o){if(z0=Q.get("EXT_texture_norm16"),!z0)o0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let Z0=k;if(k===J.RED){if(v===J.FLOAT)Z0=J.R32F;if(v===J.HALF_FLOAT)Z0=J.R16F;if(v===J.UNSIGNED_BYTE)Z0=J.R8;if(v===J.UNSIGNED_SHORT&&z0)Z0=z0.R16_EXT;if(v===J.SHORT&&z0)Z0=z0.R16_SNORM_EXT}if(k===J.RED_INTEGER){if(v===J.UNSIGNED_BYTE)Z0=J.R8UI;if(v===J.UNSIGNED_SHORT)Z0=J.R16UI;if(v===J.UNSIGNED_INT)Z0=J.R32UI;if(v===J.BYTE)Z0=J.R8I;if(v===J.SHORT)Z0=J.R16I;if(v===J.INT)Z0=J.R32I}if(k===J.RG){if(v===J.FLOAT)Z0=J.RG32F;if(v===J.HALF_FLOAT)Z0=J.RG16F;if(v===J.UNSIGNED_BYTE)Z0=J.RG8;if(v===J.UNSIGNED_SHORT&&z0)Z0=z0.RG16_EXT;if(v===J.SHORT&&z0)Z0=z0.RG16_SNORM_EXT}if(k===J.RG_INTEGER){if(v===J.UNSIGNED_BYTE)Z0=J.RG8UI;if(v===J.UNSIGNED_SHORT)Z0=J.RG16UI;if(v===J.UNSIGNED_INT)Z0=J.RG32UI;if(v===J.BYTE)Z0=J.RG8I;if(v===J.SHORT)Z0=J.RG16I;if(v===J.INT)Z0=J.RG32I}if(k===J.RGB_INTEGER){if(v===J.UNSIGNED_BYTE)Z0=J.RGB8UI;if(v===J.UNSIGNED_SHORT)Z0=J.RGB16UI;if(v===J.UNSIGNED_INT)Z0=J.RGB32UI;if(v===J.BYTE)Z0=J.RGB8I;if(v===J.SHORT)Z0=J.RGB16I;if(v===J.INT)Z0=J.RGB32I}if(k===J.RGBA_INTEGER){if(v===J.UNSIGNED_BYTE)Z0=J.RGBA8UI;if(v===J.UNSIGNED_SHORT)Z0=J.RGBA16UI;if(v===J.UNSIGNED_INT)Z0=J.RGBA32UI;if(v===J.BYTE)Z0=J.RGBA8I;if(v===J.SHORT)Z0=J.RGBA16I;if(v===J.INT)Z0=J.RGBA32I}if(k===J.RGB){if(v===J.UNSIGNED_SHORT&&z0)Z0=z0.RGB16_EXT;if(v===J.SHORT&&z0)Z0=z0.RGB16_SNORM_EXT;if(v===J.UNSIGNED_INT_5_9_9_9_REV)Z0=J.RGB9_E5;if(v===J.UNSIGNED_INT_10F_11F_11F_REV)Z0=J.R11F_G11F_B10F}if(k===J.RGBA){let Y0=B0?AW:NJ.getTransfer(q0);if(v===J.FLOAT)Z0=J.RGBA32F;if(v===J.HALF_FLOAT)Z0=J.RGBA16F;if(v===J.UNSIGNED_BYTE)Z0=Y0===lJ?J.SRGB8_ALPHA8:J.RGBA8;if(v===J.UNSIGNED_SHORT&&z0)Z0=z0.RGBA16_EXT;if(v===J.SHORT&&z0)Z0=z0.RGBA16_SNORM_EXT;if(v===J.UNSIGNED_SHORT_4_4_4_4)Z0=J.RGBA4;if(v===J.UNSIGNED_SHORT_5_5_5_1)Z0=J.RGB5_A1}if(Z0===J.R16F||Z0===J.R32F||Z0===J.RG16F||Z0===J.RG32F||Z0===J.RGBA16F||Z0===J.RGBA32F)Q.get("EXT_color_buffer_float");return Z0}function V(A,k){let v;if(A){if(k===null||k===E7||k===g6)v=J.DEPTH24_STENCIL8;else if(k===n9)v=J.DEPTH32F_STENCIL8;else if(k===gQ)v=J.DEPTH24_STENCIL8,o0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(k===null||k===E7||k===g6)v=J.DEPTH_COMPONENT24;else if(k===n9)v=J.DEPTH_COMPONENT32F;else if(k===gQ)v=J.DEPTH_COMPONENT16;return v}function P(A,k){if(q(A)===!0||A.isFramebufferTexture&&A.minFilter!==N9&&A.minFilter!==q8)return Math.log2(Math.max(k.width,k.height))+1;else if(A.mipmaps!==void 0&&A.mipmaps.length>0)return A.mipmaps.length;else if(A.isCompressedTexture&&Array.isArray(A.image))return k.mipmaps.length;else return 1}function T(A){let k=A.target;if(k.removeEventListener("dispose",T),I(k),k.isVideoTexture)N.delete(k);if(k.isHTMLTexture)F.delete(k)}function B(A){let k=A.target;k.removeEventListener("dispose",B),j(k)}function I(A){let k=Z.get(A);if(k.__webglInit===void 0)return;let v=A.source,o=E.get(v);if(o){let q0=o[k.__cacheKey];if(q0.usedTimes--,q0.usedTimes===0)l(A);if(Object.keys(o).length===0)E.delete(v)}Z.remove(A)}function l(A){let k=Z.get(A);J.deleteTexture(k.__webglTexture);let v=A.source,o=E.get(v);delete o[k.__cacheKey],Y.memory.textures--}function j(A){let k=Z.get(A);if(A.depthTexture)A.depthTexture.dispose(),Z.remove(A.depthTexture);if(A.isWebGLCubeRenderTarget)for(let o=0;o<6;o++){if(Array.isArray(k.__webglFramebuffer[o]))for(let q0=0;q0<k.__webglFramebuffer[o].length;q0++)J.deleteFramebuffer(k.__webglFramebuffer[o][q0]);else J.deleteFramebuffer(k.__webglFramebuffer[o]);if(k.__webglDepthbuffer)J.deleteRenderbuffer(k.__webglDepthbuffer[o])}else{if(Array.isArray(k.__webglFramebuffer))for(let o=0;o<k.__webglFramebuffer.length;o++)J.deleteFramebuffer(k.__webglFramebuffer[o]);else J.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer)J.deleteRenderbuffer(k.__webglDepthbuffer);if(k.__webglMultisampledFramebuffer)J.deleteFramebuffer(k.__webglMultisampledFramebuffer);if(k.__webglColorRenderbuffer){for(let o=0;o<k.__webglColorRenderbuffer.length;o++)if(k.__webglColorRenderbuffer[o])J.deleteRenderbuffer(k.__webglColorRenderbuffer[o])}if(k.__webglDepthRenderbuffer)J.deleteRenderbuffer(k.__webglDepthRenderbuffer)}let v=A.textures;for(let o=0,q0=v.length;o<q0;o++){let B0=Z.get(v[o]);if(B0.__webglTexture)J.deleteTexture(B0.__webglTexture),Y.memory.textures--;Z.remove(v[o])}Z.remove(A)}let x=0;function t(){x=0}function y(){return x}function i(A){x=A}function s(){let A=x;if(A>=K.maxTextures)o0("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+K.maxTextures);return x+=1,A}function g(A){let k=[];return k.push(A.wrapS),k.push(A.wrapT),k.push(A.wrapR||0),k.push(A.magFilter),k.push(A.minFilter),k.push(A.anisotropy),k.push(A.internalFormat),k.push(A.format),k.push(A.type),k.push(A.generateMipmaps),k.push(A.premultiplyAlpha),k.push(A.flipY),k.push(A.unpackAlignment),k.push(A.colorSpace),k.join()}function H0(A,k){let v=Z.get(A);if(A.isVideoTexture)iJ(A);if(A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&v.__version!==A.version){let o=A.image;if(o===null)o0("WebGLRenderer: Texture marked for update but no image data found.");else if(o.complete===!1)o0("WebGLRenderer: Texture marked for update but image is incomplete");else{m(v,A,k);return}}else if(A.isExternalTexture)v.__webglTexture=A.sourceTexture?A.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,v.__webglTexture,J.TEXTURE0+k)}function a(A,k){let v=Z.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&v.__version!==A.version){m(v,A,k);return}else if(A.isExternalTexture)v.__webglTexture=A.sourceTexture?A.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,v.__webglTexture,J.TEXTURE0+k)}function X0(A,k){let v=Z.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&v.__version!==A.version){m(v,A,k);return}$.bindTexture(J.TEXTURE_3D,v.__webglTexture,J.TEXTURE0+k)}function E0(A,k){let v=Z.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&v.__version!==A.version){J0(v,A,k);return}$.bindTexture(J.TEXTURE_CUBE_MAP,v.__webglTexture,J.TEXTURE0+k)}let r0={[F7]:J.REPEAT,[b6]:J.CLAMP_TO_EDGE,[YZ]:J.MIRRORED_REPEAT},_0={[N9]:J.NEAREST,[XZ]:J.NEAREST_MIPMAP_NEAREST,[h7]:J.NEAREST_MIPMAP_LINEAR,[q8]:J.LINEAR,[x6]:J.LINEAR_MIPMAP_NEAREST,[A9]:J.LINEAR_MIPMAP_LINEAR},b0={[zH]:J.NEVER,[wH]:J.ALWAYS,[AH]:J.LESS,[OZ]:J.LEQUAL,[_H]:J.EQUAL,[RZ]:J.GEQUAL,[TH]:J.GREATER,[SH]:J.NOTEQUAL};function e0(A,k){if(k.type===n9&&Q.has("OES_texture_float_linear")===!1&&(k.magFilter===q8||k.magFilter===x6||k.magFilter===h7||k.magFilter===A9||k.minFilter===q8||k.minFilter===x6||k.minFilter===h7||k.minFilter===A9))o0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(A,J.TEXTURE_WRAP_S,r0[k.wrapS]),J.texParameteri(A,J.TEXTURE_WRAP_T,r0[k.wrapT]),A===J.TEXTURE_3D||A===J.TEXTURE_2D_ARRAY)J.texParameteri(A,J.TEXTURE_WRAP_R,r0[k.wrapR]);if(J.texParameteri(A,J.TEXTURE_MAG_FILTER,_0[k.magFilter]),J.texParameteri(A,J.TEXTURE_MIN_FILTER,_0[k.minFilter]),k.compareFunction)J.texParameteri(A,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(A,J.TEXTURE_COMPARE_FUNC,b0[k.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(k.magFilter===N9)return;if(k.minFilter!==h7&&k.minFilter!==A9)return;if(k.type===n9&&Q.has("OES_texture_float_linear")===!1)return;if(k.anisotropy>1||Z.get(k).__currentAnisotropy){let v=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(A,v.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(k.anisotropy,K.getMaxAnisotropy())),Z.get(k).__currentAnisotropy=k.anisotropy}}}function $0(A,k){let v=!1;if(A.__webglInit===void 0)A.__webglInit=!0,k.addEventListener("dispose",T);let o=k.source,q0=E.get(o);if(q0===void 0)q0={},E.set(o,q0);let B0=g(k);if(B0!==A.__cacheKey){if(q0[B0]===void 0)q0[B0]={texture:J.createTexture(),usedTimes:0},Y.memory.textures++,v=!0;q0[B0].usedTimes++;let z0=q0[A.__cacheKey];if(z0!==void 0){if(q0[A.__cacheKey].usedTimes--,z0.usedTimes===0)l(k)}A.__cacheKey=B0,A.__webglTexture=q0[B0].texture}return v}function w(A,k,v){return Math.floor(Math.floor(A/v)/k)}function p(A,k,v,o){let B0=A.updateRanges;if(B0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,k.width,k.height,v,o,k.data);else{B0.sort((n0,M0)=>n0.start-M0.start);let z0=0;for(let n0=1;n0<B0.length;n0++){let M0=B0[z0],V0=B0[n0],t0=M0.start+M0.count,a0=w(V0.start,k.width,4),CJ=w(M0.start,k.width,4);if(V0.start<=t0+1&&a0===CJ&&w(V0.start+V0.count-1,k.width,4)===a0)M0.count=Math.max(M0.count,V0.start+V0.count-M0.start);else++z0,B0[z0]=V0}B0.length=z0+1;let Z0=$.getParameter(J.UNPACK_ROW_LENGTH),Y0=$.getParameter(J.UNPACK_SKIP_PIXELS),k0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,k.width);for(let n0=0,M0=B0.length;n0<M0;n0++){let V0=B0[n0],t0=Math.floor(V0.start/4),a0=Math.ceil(V0.count/4),CJ=t0%k.width,b=Math.floor(t0/k.width),A0=a0,K0=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,CJ),$.pixelStorei(J.UNPACK_SKIP_ROWS,b),$.texSubImage2D(J.TEXTURE_2D,0,CJ,b,A0,1,v,o,k.data)}A.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,Z0),$.pixelStorei(J.UNPACK_SKIP_PIXELS,Y0),$.pixelStorei(J.UNPACK_SKIP_ROWS,k0)}}function m(A,k,v){let o=J.TEXTURE_2D;if(k.isDataArrayTexture||k.isCompressedArrayTexture)o=J.TEXTURE_2D_ARRAY;if(k.isData3DTexture)o=J.TEXTURE_3D;let q0=$0(A,k),B0=k.source;$.bindTexture(o,A.__webglTexture,J.TEXTURE0+v);let z0=Z.get(B0);if(B0.version!==z0.__version||q0===!0){if($.activeTexture(J.TEXTURE0+v),(typeof ImageBitmap<"u"&&k.image instanceof ImageBitmap)===!1){let K0=NJ.getPrimaries(NJ.workingColorSpace),I0=k.colorSpace===p7?null:NJ.getPrimaries(k.colorSpace),v0=k.colorSpace===p7||K0===I0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,k.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,v0)}$.pixelStorei(J.UNPACK_ALIGNMENT,k.unpackAlignment);let Y0=R(k.image,!1,K.maxTextureSize);Y0=YJ(k,Y0);let k0=W.convert(k.format,k.colorSpace),n0=W.convert(k.type),M0=L(k.internalFormat,k0,n0,k.normalized,k.colorSpace,k.isVideoTexture);e0(o,k);let V0,t0=k.mipmaps,a0=k.isVideoTexture!==!0,CJ=z0.__version===void 0||q0===!0,b=B0.dataReady,A0=P(k,Y0);if(k.isDepthTexture){if(M0=V(k.format===x7,k.type),CJ)if(a0)$.texStorage2D(J.TEXTURE_2D,1,M0,Y0.width,Y0.height);else $.texImage2D(J.TEXTURE_2D,0,M0,Y0.width,Y0.height,0,k0,n0,null)}else if(k.isDataTexture)if(t0.length>0){if(a0&&CJ)$.texStorage2D(J.TEXTURE_2D,A0,M0,t0[0].width,t0[0].height);for(let K0=0,I0=t0.length;K0<I0;K0++)if(V0=t0[K0],a0){if(b)$.texSubImage2D(J.TEXTURE_2D,K0,0,0,V0.width,V0.height,k0,n0,V0.data)}else $.texImage2D(J.TEXTURE_2D,K0,M0,V0.width,V0.height,0,k0,n0,V0.data);k.generateMipmaps=!1}else if(a0){if(CJ)$.texStorage2D(J.TEXTURE_2D,A0,M0,Y0.width,Y0.height);if(b)p(k,Y0,k0,n0)}else $.texImage2D(J.TEXTURE_2D,0,M0,Y0.width,Y0.height,0,k0,n0,Y0.data);else if(k.isCompressedTexture)if(k.isCompressedArrayTexture){if(a0&&CJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,A0,M0,t0[0].width,t0[0].height,Y0.depth);for(let K0=0,I0=t0.length;K0<I0;K0++)if(V0=t0[K0],k.format!==_9)if(k0!==null)if(a0){if(b)if(k.layerUpdates.size>0){let v0=$Y(V0.width,V0.height,k.format,k.type);for(let O0 of k.layerUpdates){let T0=V0.data.subarray(O0*v0/V0.data.BYTES_PER_ELEMENT,(O0+1)*v0/V0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,K0,0,0,O0,V0.width,V0.height,1,k0,T0)}}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,K0,0,0,0,V0.width,V0.height,Y0.depth,k0,V0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,K0,M0,V0.width,V0.height,Y0.depth,0,V0.data,0,0);else o0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(a0){if(b)$.texSubImage3D(J.TEXTURE_2D_ARRAY,K0,0,0,0,V0.width,V0.height,Y0.depth,k0,n0,V0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,K0,M0,V0.width,V0.height,Y0.depth,0,k0,n0,V0.data);if(k.layerUpdates.size>0)k.clearLayerUpdates()}else{if(a0&&CJ)$.texStorage2D(J.TEXTURE_2D,A0,M0,t0[0].width,t0[0].height);for(let K0=0,I0=t0.length;K0<I0;K0++)if(V0=t0[K0],k.format!==_9)if(k0!==null)if(a0){if(b)$.compressedTexSubImage2D(J.TEXTURE_2D,K0,0,0,V0.width,V0.height,k0,V0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,K0,M0,V0.width,V0.height,0,V0.data);else o0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(a0){if(b)$.texSubImage2D(J.TEXTURE_2D,K0,0,0,V0.width,V0.height,k0,n0,V0.data)}else $.texImage2D(J.TEXTURE_2D,K0,M0,V0.width,V0.height,0,k0,n0,V0.data)}else if(k.isDataArrayTexture)if(a0){if(CJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,A0,M0,Y0.width,Y0.height,Y0.depth);if(b)if(k.layerUpdates.size>0){let K0=$Y(Y0.width,Y0.height,k.format,k.type);for(let I0 of k.layerUpdates){let v0=Y0.data.subarray(I0*K0/Y0.data.BYTES_PER_ELEMENT,(I0+1)*K0/Y0.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,I0,Y0.width,Y0.height,1,k0,n0,v0)}k.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,Y0.width,Y0.height,Y0.depth,k0,n0,Y0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,M0,Y0.width,Y0.height,Y0.depth,0,k0,n0,Y0.data);else if(k.isData3DTexture)if(a0){if(CJ)$.texStorage3D(J.TEXTURE_3D,A0,M0,Y0.width,Y0.height,Y0.depth);if(b)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,Y0.width,Y0.height,Y0.depth,k0,n0,Y0.data)}else $.texImage3D(J.TEXTURE_3D,0,M0,Y0.width,Y0.height,Y0.depth,0,k0,n0,Y0.data);else if(k.isFramebufferTexture){if(CJ)if(a0)$.texStorage2D(J.TEXTURE_2D,A0,M0,Y0.width,Y0.height);else{let{width:K0,height:I0}=Y0;for(let v0=0;v0<A0;v0++)$.texImage2D(J.TEXTURE_2D,v0,M0,K0,I0,0,k0,n0,null),K0>>=1,I0>>=1}}else if(k.isHTMLTexture){if("texElementImage2D"in J){let K0=J.canvas;if(!K0.hasAttribute("layoutsubtree"))K0.setAttribute("layoutsubtree","true");if(Y0.parentNode!==K0){K0.appendChild(Y0),F.add(k),K0.onpaint=(I0)=>{let v0=I0.changedElements;for(let O0 of F)if(v0.includes(O0.image))O0.needsUpdate=!0},K0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,Y0);else{let{RGBA:v0,RGBA:O0,UNSIGNED_BYTE:T0}=J;J.texElementImage2D(J.TEXTURE_2D,0,v0,O0,T0,Y0)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(t0.length>0){if(a0&&CJ){let K0=EJ(t0[0]);$.texStorage2D(J.TEXTURE_2D,A0,M0,K0.width,K0.height)}for(let K0=0,I0=t0.length;K0<I0;K0++)if(V0=t0[K0],a0){if(b)$.texSubImage2D(J.TEXTURE_2D,K0,0,0,k0,n0,V0)}else $.texImage2D(J.TEXTURE_2D,K0,M0,k0,n0,V0);k.generateMipmaps=!1}else if(a0){if(CJ){let K0=EJ(Y0);$.texStorage2D(J.TEXTURE_2D,A0,M0,K0.width,K0.height)}if(b)$.texSubImage2D(J.TEXTURE_2D,0,0,0,k0,n0,Y0)}else $.texImage2D(J.TEXTURE_2D,0,M0,k0,n0,Y0);if(q(k))C(o);if(z0.__version=B0.version,k.onUpdate)k.onUpdate(k)}A.__version=k.version}function J0(A,k,v){if(k.image.length!==6)return;let o=$0(A,k),q0=k.source;$.bindTexture(J.TEXTURE_CUBE_MAP,A.__webglTexture,J.TEXTURE0+v);let B0=Z.get(q0);if(q0.version!==B0.__version||o===!0){$.activeTexture(J.TEXTURE0+v);let z0=NJ.getPrimaries(NJ.workingColorSpace),Z0=k.colorSpace===p7?null:NJ.getPrimaries(k.colorSpace),Y0=k.colorSpace===p7||z0===Z0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,k.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,k.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y0);let k0=k.isCompressedTexture||k.image[0].isCompressedTexture,n0=k.image[0]&&k.image[0].isDataTexture,M0=[];for(let O0=0;O0<6;O0++){if(!k0&&!n0)M0[O0]=R(k.image[O0],!0,K.maxCubemapSize);else M0[O0]=n0?k.image[O0].image:k.image[O0];M0[O0]=YJ(k,M0[O0])}let V0=M0[0],t0=W.convert(k.format,k.colorSpace),a0=W.convert(k.type),CJ=L(k.internalFormat,t0,a0,k.normalized,k.colorSpace),b=k.isVideoTexture!==!0,A0=B0.__version===void 0||o===!0,K0=q0.dataReady,I0=P(k,V0);e0(J.TEXTURE_CUBE_MAP,k);let v0;if(k0){if(b&&A0)$.texStorage2D(J.TEXTURE_CUBE_MAP,I0,CJ,V0.width,V0.height);for(let O0=0;O0<6;O0++){v0=M0[O0].mipmaps;for(let T0=0;T0<v0.length;T0++){let KJ=v0[T0];if(k.format!==_9)if(t0!==null)if(b){if(K0)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+O0,T0,0,0,KJ.width,KJ.height,t0,KJ.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+O0,T0,CJ,KJ.width,KJ.height,0,KJ.data);else o0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(b){if(K0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+O0,T0,0,0,KJ.width,KJ.height,t0,a0,KJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+O0,T0,CJ,KJ.width,KJ.height,0,t0,a0,KJ.data)}}}else{if(v0=k.mipmaps,b&&A0){if(v0.length>0)I0++;let O0=EJ(M0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,I0,CJ,O0.width,O0.height)}for(let O0=0;O0<6;O0++)if(n0){if(b){if(K0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+O0,0,0,0,M0[O0].width,M0[O0].height,t0,a0,M0[O0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+O0,0,CJ,M0[O0].width,M0[O0].height,0,t0,a0,M0[O0].data);for(let T0=0;T0<v0.length;T0++){let dJ=v0[T0].image[O0].image;if(b){if(K0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+O0,T0+1,0,0,dJ.width,dJ.height,t0,a0,dJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+O0,T0+1,CJ,dJ.width,dJ.height,0,t0,a0,dJ.data)}}else{if(b){if(K0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+O0,0,0,0,t0,a0,M0[O0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+O0,0,CJ,t0,a0,M0[O0]);for(let T0=0;T0<v0.length;T0++){let KJ=v0[T0];if(b){if(K0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+O0,T0+1,0,0,t0,a0,KJ.image[O0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+O0,T0+1,CJ,t0,a0,KJ.image[O0])}}}if(q(k))C(J.TEXTURE_CUBE_MAP);if(B0.__version=q0.version,k.onUpdate)k.onUpdate(k)}A.__version=k.version}function e(A,k,v,o,q0,B0){let z0=W.convert(v.format,v.colorSpace),Z0=W.convert(v.type),Y0=L(v.internalFormat,z0,Z0,v.normalized,v.colorSpace),k0=Z.get(k),n0=Z.get(v);if(n0.__renderTarget=k,!k0.__hasExternalTextures){let M0=Math.max(1,k.width>>B0),V0=Math.max(1,k.height>>B0);if(q0===J.TEXTURE_3D||q0===J.TEXTURE_2D_ARRAY)$.texImage3D(q0,B0,Y0,M0,V0,k.depth,0,z0,Z0,null);else $.texImage2D(q0,B0,Y0,M0,V0,0,z0,Z0,null)}if($.bindFramebuffer(J.FRAMEBUFFER,A),f(k))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,o,q0,n0.__webglTexture,0,hJ(k));else if(q0===J.TEXTURE_2D||q0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&q0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,o,q0,n0.__webglTexture,B0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function D0(A,k,v){if(J.bindRenderbuffer(J.RENDERBUFFER,A),k.depthBuffer){let o=k.depthTexture,q0=o&&o.isDepthTexture?o.type:null,B0=V(k.stencilBuffer,q0),z0=k.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(f(k))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,hJ(k),B0,k.width,k.height);else if(v)J.renderbufferStorageMultisample(J.RENDERBUFFER,hJ(k),B0,k.width,k.height);else J.renderbufferStorage(J.RENDERBUFFER,B0,k.width,k.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,z0,J.RENDERBUFFER,A)}else{let o=k.textures;for(let q0=0;q0<o.length;q0++){let B0=o[q0],z0=W.convert(B0.format,B0.colorSpace),Z0=W.convert(B0.type),Y0=L(B0.internalFormat,z0,Z0,B0.normalized,B0.colorSpace);if(f(k))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,hJ(k),Y0,k.width,k.height);else if(v)J.renderbufferStorageMultisample(J.RENDERBUFFER,hJ(k),Y0,k.width,k.height);else J.renderbufferStorage(J.RENDERBUFFER,Y0,k.width,k.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function L0(A,k,v){let o=k.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,A),!(k.depthTexture&&k.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q0=Z.get(k.depthTexture);if(q0.__renderTarget=k,!q0.__webglTexture||k.depthTexture.image.width!==k.width||k.depthTexture.image.height!==k.height)k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0;if(o){if(q0.__webglInit===void 0)q0.__webglInit=!0,k.depthTexture.addEventListener("dispose",T);if(q0.__webglTexture===void 0){q0.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,q0.__webglTexture),e0(J.TEXTURE_CUBE_MAP,k.depthTexture);let k0=W.convert(k.depthTexture.format),n0=W.convert(k.depthTexture.type),M0;if(k.depthTexture.format===b7)M0=J.DEPTH_COMPONENT24;else if(k.depthTexture.format===x7)M0=J.DEPTH24_STENCIL8;for(let V0=0;V0<6;V0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+V0,0,M0,k.width,k.height,0,k0,n0,null)}}else H0(k.depthTexture,0);let B0=q0.__webglTexture,z0=hJ(k),Z0=o?J.TEXTURE_CUBE_MAP_POSITIVE_X+v:J.TEXTURE_2D,Y0=k.depthTexture.format===x7?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(k.depthTexture.format===b7)if(f(k))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,Y0,Z0,B0,0,z0);else J.framebufferTexture2D(J.FRAMEBUFFER,Y0,Z0,B0,0);else if(k.depthTexture.format===x7)if(f(k))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,Y0,Z0,B0,0,z0);else J.framebufferTexture2D(J.FRAMEBUFFER,Y0,Z0,B0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function G0(A){let k=Z.get(A),v=A.isWebGLCubeRenderTarget===!0;if(k.__boundDepthTexture!==A.depthTexture){let o=A.depthTexture;if(k.__depthDisposeCallback)k.__depthDisposeCallback();if(o){let q0=()=>{delete k.__boundDepthTexture,delete k.__depthDisposeCallback,o.removeEventListener("dispose",q0)};o.addEventListener("dispose",q0),k.__depthDisposeCallback=q0}k.__boundDepthTexture=o}if(A.depthTexture&&!k.__autoAllocateDepthBuffer)if(v)for(let o=0;o<6;o++)L0(k.__webglFramebuffer[o],A,o);else{let o=A.texture.mipmaps;if(o&&o.length>0)L0(k.__webglFramebuffer[0],A,0);else L0(k.__webglFramebuffer,A,0)}else if(v){k.__webglDepthbuffer=[];for(let o=0;o<6;o++)if($.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer[o]),k.__webglDepthbuffer[o]===void 0)k.__webglDepthbuffer[o]=J.createRenderbuffer(),D0(k.__webglDepthbuffer[o],A,!1);else{let q0=A.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,B0=k.__webglDepthbuffer[o];J.bindRenderbuffer(J.RENDERBUFFER,B0),J.framebufferRenderbuffer(J.FRAMEBUFFER,q0,J.RENDERBUFFER,B0)}}else{let o=A.texture.mipmaps;if(o&&o.length>0)$.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer);if(k.__webglDepthbuffer===void 0)k.__webglDepthbuffer=J.createRenderbuffer(),D0(k.__webglDepthbuffer,A,!1);else{let q0=A.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,B0=k.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,B0),J.framebufferRenderbuffer(J.FRAMEBUFFER,q0,J.RENDERBUFFER,B0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function x0(A,k,v){let o=Z.get(A);if(k!==void 0)e(o.__webglFramebuffer,A,A.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(v!==void 0)G0(A)}function c0(A){let k=A.texture,v=Z.get(A),o=Z.get(k);A.addEventListener("dispose",B);let q0=A.textures,B0=A.isWebGLCubeRenderTarget===!0,z0=q0.length>1;if(!z0){if(o.__webglTexture===void 0)o.__webglTexture=J.createTexture();o.__version=k.version,Y.memory.textures++}if(B0){v.__webglFramebuffer=[];for(let Z0=0;Z0<6;Z0++)if(k.mipmaps&&k.mipmaps.length>0){v.__webglFramebuffer[Z0]=[];for(let Y0=0;Y0<k.mipmaps.length;Y0++)v.__webglFramebuffer[Z0][Y0]=J.createFramebuffer()}else v.__webglFramebuffer[Z0]=J.createFramebuffer()}else{if(k.mipmaps&&k.mipmaps.length>0){v.__webglFramebuffer=[];for(let Z0=0;Z0<k.mipmaps.length;Z0++)v.__webglFramebuffer[Z0]=J.createFramebuffer()}else v.__webglFramebuffer=J.createFramebuffer();if(z0)for(let Z0=0,Y0=q0.length;Z0<Y0;Z0++){let k0=Z.get(q0[Z0]);if(k0.__webglTexture===void 0)k0.__webglTexture=J.createTexture(),Y.memory.textures++}if(A.samples>0&&f(A)===!1){v.__webglMultisampledFramebuffer=J.createFramebuffer(),v.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,v.__webglMultisampledFramebuffer);for(let Z0=0;Z0<q0.length;Z0++){let Y0=q0[Z0];v.__webglColorRenderbuffer[Z0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,v.__webglColorRenderbuffer[Z0]);let k0=W.convert(Y0.format,Y0.colorSpace),n0=W.convert(Y0.type),M0=L(Y0.internalFormat,k0,n0,Y0.normalized,Y0.colorSpace,A.isXRRenderTarget===!0),V0=hJ(A);J.renderbufferStorageMultisample(J.RENDERBUFFER,V0,M0,A.width,A.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Z0,J.RENDERBUFFER,v.__webglColorRenderbuffer[Z0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),A.depthBuffer)v.__webglDepthRenderbuffer=J.createRenderbuffer(),D0(v.__webglDepthRenderbuffer,A,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(B0){$.bindTexture(J.TEXTURE_CUBE_MAP,o.__webglTexture),e0(J.TEXTURE_CUBE_MAP,k);for(let Z0=0;Z0<6;Z0++)if(k.mipmaps&&k.mipmaps.length>0)for(let Y0=0;Y0<k.mipmaps.length;Y0++)e(v.__webglFramebuffer[Z0][Y0],A,k,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+Z0,Y0);else e(v.__webglFramebuffer[Z0],A,k,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+Z0,0);if(q(k))C(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(z0){for(let Z0=0,Y0=q0.length;Z0<Y0;Z0++){let k0=q0[Z0],n0=Z.get(k0),M0=J.TEXTURE_2D;if(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)M0=A.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(M0,n0.__webglTexture),e0(M0,k0),e(v.__webglFramebuffer,A,k0,J.COLOR_ATTACHMENT0+Z0,M0,0),q(k0))C(M0)}$.unbindTexture()}else{let Z0=J.TEXTURE_2D;if(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)Z0=A.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(Z0,o.__webglTexture),e0(Z0,k),k.mipmaps&&k.mipmaps.length>0)for(let Y0=0;Y0<k.mipmaps.length;Y0++)e(v.__webglFramebuffer[Y0],A,k,J.COLOR_ATTACHMENT0,Z0,Y0);else e(v.__webglFramebuffer,A,k,J.COLOR_ATTACHMENT0,Z0,0);if(q(k))C(Z0);$.unbindTexture()}if(A.depthBuffer)G0(A)}function DJ(A){let k=A.textures;for(let v=0,o=k.length;v<o;v++){let q0=k[v];if(q(q0)){let B0=z(A),z0=Z.get(q0).__webglTexture;$.bindTexture(B0,z0),C(B0),$.unbindTexture()}}}let j0=[],MJ=[];function _J(A){if(A.samples>0){if(f(A)===!1){let{textures:k,width:v,height:o}=A,q0=J.COLOR_BUFFER_BIT,B0=A.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,z0=Z.get(A),Z0=k.length>1;if(Z0)for(let k0=0;k0<k.length;k0++)$.bindFramebuffer(J.FRAMEBUFFER,z0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+k0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,z0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+k0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,z0.__webglMultisampledFramebuffer);let Y0=A.texture.mipmaps;if(Y0&&Y0.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,z0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,z0.__webglFramebuffer);for(let k0=0;k0<k.length;k0++){if(A.resolveDepthBuffer){if(A.depthBuffer)q0|=J.DEPTH_BUFFER_BIT;if(A.stencilBuffer&&A.resolveStencilBuffer)q0|=J.STENCIL_BUFFER_BIT}if(Z0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,z0.__webglColorRenderbuffer[k0]);let n0=Z.get(k[k0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,n0,0)}if(J.blitFramebuffer(0,0,v,o,0,0,v,o,q0,J.NEAREST),H===!0){if(j0.length=0,MJ.length=0,j0.push(J.COLOR_ATTACHMENT0+k0),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1)j0.push(B0),MJ.push(B0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,MJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,j0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),Z0)for(let k0=0;k0<k.length;k0++){$.bindFramebuffer(J.FRAMEBUFFER,z0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+k0,J.RENDERBUFFER,z0.__webglColorRenderbuffer[k0]);let n0=Z.get(k[k0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,z0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+k0,J.TEXTURE_2D,n0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,z0.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&H){let k=A.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[k])}}}function hJ(A){return Math.min(K.maxSamples,A.samples)}function f(A){let k=Z.get(A);return A.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&k.__useRenderToTexture!==!1}function iJ(A){let k=Y.render.frame;if(N.get(A)!==k)N.set(A,k),A.update()}function YJ(A,k){let{colorSpace:v,format:o,type:q0}=A;if(A.isCompressedTexture===!0||A.isVideoTexture===!0)return k;if(v!==x8&&v!==p7)if(NJ.getTransfer(v)===lJ){if(o!==_9||q0!==G9)o0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else $J("WebGLTextures: Unsupported texture color space:",v);return k}function EJ(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement)U.width=A.naturalWidth||A.width,U.height=A.naturalHeight||A.height;else if(typeof VideoFrame<"u"&&A instanceof VideoFrame)U.width=A.displayWidth,U.height=A.displayHeight;else U.width=A.width,U.height=A.height;return U}this.allocateTextureUnit=s,this.resetTextureUnits=t,this.getTextureUnits=y,this.setTextureUnits=i,this.setTexture2D=H0,this.setTexture2DArray=a,this.setTexture3D=X0,this.setTextureCube=E0,this.rebindTextures=x0,this.setupRenderTarget=c0,this.updateRenderTargetMipmap=DJ,this.updateMultisampleRenderTarget=_J,this.setupDepthRenderbuffer=G0,this.setupFrameBufferTexture=e,this.useMultisampledRTT=f,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function sq(J,Q){function $(Z,K=p7){let W,Y=NJ.getTransfer(K);if(Z===G9)return J.UNSIGNED_BYTE;if(Z===uK)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===dK)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===BH)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===kH)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===VH)return J.BYTE;if(Z===DH)return J.SHORT;if(Z===gQ)return J.UNSIGNED_SHORT;if(Z===mK)return J.INT;if(Z===E7)return J.UNSIGNED_INT;if(Z===n9)return J.FLOAT;if(Z===O8)return J.HALF_FLOAT;if(Z===MH)return J.ALPHA;if(Z===CH)return J.RGB;if(Z===_9)return J.RGBA;if(Z===b7)return J.DEPTH_COMPONENT;if(Z===x7)return J.DEPTH_STENCIL;if(Z===PH)return J.RED;if(Z===cK)return J.RED_INTEGER;if(Z===g7)return J.RG;if(Z===nK)return J.RG_INTEGER;if(Z===sK)return J.RGBA_INTEGER;if(Z===HZ||Z===UZ||Z===NZ||Z===GZ)if(Y===lJ)if(W=Q.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(Z===HZ)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===UZ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===NZ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===GZ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=Q.get("WEBGL_compressed_texture_s3tc"),W!==null){if(Z===HZ)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===UZ)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===NZ)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===GZ)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===iK||Z===oK||Z===aK||Z===rK)if(W=Q.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(Z===iK)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===oK)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===aK)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===rK)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===tK||Z===eK||Z===JW||Z===QW||Z===$W||Z===FZ||Z===ZW)if(W=Q.get("WEBGL_compressed_texture_etc"),W!==null){if(Z===tK||Z===eK)return Y===lJ?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(Z===JW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(Z===QW)return W.COMPRESSED_R11_EAC;if(Z===$W)return W.COMPRESSED_SIGNED_R11_EAC;if(Z===FZ)return W.COMPRESSED_RG11_EAC;if(Z===ZW)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===KW||Z===WW||Z===YW||Z===XW||Z===HW||Z===UW||Z===NW||Z===GW||Z===FW||Z===EW||Z===qW||Z===OW||Z===RW||Z===LW)if(W=Q.get("WEBGL_compressed_texture_astc"),W!==null){if(Z===KW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===WW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===YW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===XW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===HW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===UW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===NW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===GW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===FW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===EW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===qW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===OW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===RW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===LW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===VW||Z===DW||Z===BW)if(W=Q.get("EXT_texture_compression_bptc"),W!==null){if(Z===VW)return Y===lJ?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===DW)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===BW)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===kW||Z===MW||Z===EZ||Z===CW)if(W=Q.get("EXT_texture_compression_rgtc"),W!==null){if(Z===kW)return W.COMPRESSED_RED_RGTC1_EXT;if(Z===MW)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===EZ)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===CW)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===g6)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var iq=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oq=`
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

}`;class _U{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new IZ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new rJ({vertexShader:iq,fragmentShader:oq,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new C0(new kJ(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TU extends F9{constructor(J,Q){super();let $=this,Z=null,K=1,W=null,Y="local-floor",X=1,H=null,U=null,N=null,F=null,G=null,E=null,O=typeof XRWebGLBinding<"u",D=new _U,R={},q=Q.getContextAttributes(),C=null,z=null,L=[],V=[],P=new N0,T=null,B=null,I=new H8;I.viewport=new pJ;let l=new H8;l.viewport=new pJ;let j=[I,l],x=new aW,t=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($0){let w=L[$0];if(w===void 0)w=new mQ,L[$0]=w;return w.getTargetRaySpace()},this.getControllerGrip=function($0){let w=L[$0];if(w===void 0)w=new mQ,L[$0]=w;return w.getGripSpace()},this.getHand=function($0){let w=L[$0];if(w===void 0)w=new mQ,L[$0]=w;return w.getHandSpace()};function i($0){let w=V.indexOf($0.inputSource);if(w===-1)return;let p=L[w];if(p!==void 0)p.update($0.inputSource,$0.frame,H||W),p.dispatchEvent({type:$0.type,data:$0.inputSource})}function s(){Z.removeEventListener("select",i),Z.removeEventListener("selectstart",i),Z.removeEventListener("selectend",i),Z.removeEventListener("squeeze",i),Z.removeEventListener("squeezestart",i),Z.removeEventListener("squeezeend",i),Z.removeEventListener("end",s),Z.removeEventListener("inputsourceschange",g);for(let $0=0;$0<L.length;$0++){let w=V[$0];if(w===null)continue;V[$0]=null,L[$0].disconnect(w)}t=null,y=null,D.reset();for(let $0 in R)delete R[$0];if(J.setRenderTarget(C),G=null,F=null,N=null,Z=null,z=null,e0.stop(),$.isPresenting=!1,J.setPixelRatio(T),J.setSize(P.width,P.height,!1),B!==null){let $0=B.camera;$0.fov=B.fov,$0.zoom=B.zoom,$0.updateProjectionMatrix(),B=null}$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($0){if(K=$0,$.isPresenting===!0)o0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($0){if(Y=$0,$.isPresenting===!0)o0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return H||W},this.setReferenceSpace=function($0){H=$0},this.getBaseLayer=function(){return F!==null?F:G},this.getBinding=function(){if(N===null&&O)N=new XRWebGLBinding(Z,Q);return N},this.getFrame=function(){return E},this.getSession=function(){return Z},this.setSession=async function($0){if(Z=$0,Z!==null){if(C=J.getRenderTarget(),Z.addEventListener("select",i),Z.addEventListener("selectstart",i),Z.addEventListener("selectend",i),Z.addEventListener("squeeze",i),Z.addEventListener("squeezestart",i),Z.addEventListener("squeezeend",i),Z.addEventListener("end",s),Z.addEventListener("inputsourceschange",g),q.xrCompatible!==!0)await Q.makeXRCompatible();if(T=J.getPixelRatio(),J.getSize(P),!(O&&("createProjectionLayer"in XRWebGLBinding.prototype))){let p={antialias:q.antialias,alpha:!0,depth:q.depth,stencil:q.stencil,framebufferScaleFactor:K};G=new XRWebGLLayer(Z,Q,p),Z.updateRenderState({baseLayer:G}),J.setPixelRatio(1),J.setSize(G.framebufferWidth,G.framebufferHeight,!1),z=new Q8(G.framebufferWidth,G.framebufferHeight,{format:_9,type:G9,colorSpace:J.outputColorSpace,stencilBuffer:q.stencil,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1,storeMultisampledDepthBuffer:G.ignoreDepthValues===!1,storeMultisampledStencilBuffer:G.ignoreDepthValues===!1})}else{let p=null,m=null,J0=null;if(q.depth)J0=q.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,p=q.stencil?x7:b7,m=q.stencil?g6:E7;let e={colorFormat:Q.RGBA8,depthFormat:J0,scaleFactor:K};N=this.getBinding(),F=N.createProjectionLayer(e),Z.updateRenderState({layers:[F]}),J.setPixelRatio(1),J.setSize(F.textureWidth,F.textureHeight,!1),z=new Q8(F.textureWidth,F.textureHeight,{format:_9,type:G9,depthTexture:new d7(F.textureWidth,F.textureHeight,m,void 0,void 0,void 0,void 0,void 0,void 0,p),stencilBuffer:q.stencil,colorSpace:J.outputColorSpace,samples:q.antialias?4:0,resolveDepthBuffer:F.ignoreDepthValues===!1,resolveStencilBuffer:F.ignoreDepthValues===!1,storeMultisampledDepthBuffer:F.ignoreDepthValues===!1,storeMultisampledStencilBuffer:F.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(X),H=null,W=await Z.requestReferenceSpace(Y),e0.setContext(Z),e0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return D.getDepthTexture()};function g($0){for(let w=0;w<$0.removed.length;w++){let p=$0.removed[w],m=V.indexOf(p);if(m>=0)V[m]=null,L[m].disconnect(p)}for(let w=0;w<$0.added.length;w++){let p=$0.added[w],m=V.indexOf(p);if(m===-1){for(let e=0;e<L.length;e++)if(e>=V.length){V.push(p),m=e;break}else if(V[e]===null){V[e]=p,m=e;break}if(m===-1)break}let J0=L[m];if(J0)J0.connect(p)}}let H0=new S,a=new S;function X0($0,w,p){H0.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(p.matrixWorld);let m=H0.distanceTo(a),J0=w.projectionMatrix.elements,e=p.projectionMatrix.elements,D0=J0[14]/(J0[10]-1),L0=J0[14]/(J0[10]+1),G0=(J0[9]+1)/J0[5],x0=(J0[9]-1)/J0[5],c0=(J0[8]-1)/J0[0],DJ=(e[8]+1)/e[0],j0=D0*c0,MJ=D0*DJ,_J=m/(-c0+DJ),hJ=_J*-c0;if(w.matrixWorld.decompose($0.position,$0.quaternion,$0.scale),$0.translateX(hJ),$0.translateZ(_J),$0.matrixWorld.compose($0.position,$0.quaternion,$0.scale),$0.matrixWorldInverse.copy($0.matrixWorld).invert(),J0[10]===-1)$0.projectionMatrix.copy(w.projectionMatrix),$0.projectionMatrixInverse.copy(w.projectionMatrixInverse);else{let f=D0+_J,iJ=L0+_J,YJ=j0-hJ,EJ=MJ+(m-hJ),A=G0*L0/iJ*f,k=x0*L0/iJ*f;$0.projectionMatrix.makePerspective(YJ,EJ,A,k,f,iJ),$0.projectionMatrixInverse.copy($0.projectionMatrix).invert()}}function E0($0,w){if(w===null)$0.matrixWorld.copy($0.matrix);else $0.matrixWorld.multiplyMatrices(w.matrixWorld,$0.matrix);$0.matrixWorldInverse.copy($0.matrixWorld).invert()}this.updateCamera=function($0){if(Z===null)return;let{near:w,far:p}=$0;if(D.texture!==null){if(D.depthNear>0)w=D.depthNear;if(D.depthFar>0)p=D.depthFar}if(x.near=l.near=I.near=w,x.far=l.far=I.far=p,t!==x.near||y!==x.far)Z.updateRenderState({depthNear:x.near,depthFar:x.far}),t=x.near,y=x.far;x.layers.mask=$0.layers.mask|6,I.layers.mask=x.layers.mask&-5,l.layers.mask=x.layers.mask&-3;let m=$0.parent,J0=x.cameras;E0(x,m);for(let e=0;e<J0.length;e++)E0(J0[e],m);if(J0.length===2)X0(x,I,l);else x.projectionMatrix.copy(I.projectionMatrix);if(B===null&&$0.isPerspectiveCamera)B={camera:$0,fov:$0.fov,zoom:$0.zoom};r0($0,x,m)};function r0($0,w,p){if(p===null)$0.matrix.copy(w.matrixWorld);else $0.matrix.copy(p.matrixWorld),$0.matrix.invert(),$0.matrix.multiply(w.matrixWorld);if($0.matrix.decompose($0.position,$0.quaternion,$0.scale),$0.updateMatrixWorld(!0),$0.projectionMatrix.copy(w.projectionMatrix),$0.projectionMatrixInverse.copy(w.projectionMatrixInverse),$0.isPerspectiveCamera)$0.fov=w7*2*Math.atan(1/$0.projectionMatrix.elements[5]),$0.zoom=1}this.getCamera=function(){return x},this.getFoveation=function(){if(F===null&&G===null)return;return X},this.setFoveation=function($0){if(X=$0,F!==null)F.fixedFoveation=$0;if(G!==null&&G.fixedFoveation!==void 0)G.fixedFoveation=$0},this.hasDepthSensing=function(){return D.texture!==null},this.getDepthSensingMesh=function(){return D.getMesh(x)},this.getCameraTexture=function($0){return R[$0]};let _0=null;function b0($0,w){if(U=w.getViewerPose(H||W),E=w,U!==null){let p=U.views;if(G!==null)J.setRenderTargetFramebuffer(z,G.framebuffer),J.setRenderTarget(z);let m=!1;if(p.length!==x.cameras.length)x.cameras.length=0,m=!0;for(let L0=0;L0<p.length;L0++){let G0=p[L0],x0=null;if(G!==null)x0=G.getViewport(G0);else{let DJ=N.getViewSubImage(F,G0);if(x0=DJ.viewport,L0===0)J.setRenderTargetTextures(z,DJ.colorTexture,DJ.depthStencilTexture),J.setRenderTarget(z)}let c0=j[L0];if(c0===void 0)c0=new H8,c0.layers.enable(L0),c0.viewport=new pJ,j[L0]=c0;if(c0.matrix.fromArray(G0.transform.matrix),c0.matrix.decompose(c0.position,c0.quaternion,c0.scale),c0.projectionMatrix.fromArray(G0.projectionMatrix),c0.projectionMatrixInverse.copy(c0.projectionMatrix).invert(),c0.viewport.set(x0.x,x0.y,x0.width,x0.height),L0===0)x.matrix.copy(c0.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale);if(m===!0)x.cameras.push(c0)}let J0=Z.enabledFeatures;if(J0&&J0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&O){N=$.getBinding();let L0=N.getDepthInformation(p[0]);if(L0&&L0.isValid&&L0.texture)D.init(L0,Z.renderState)}if(J0&&J0.includes("camera-access")&&O){J.state.unbindTexture(),N=$.getBinding();for(let L0=0;L0<p.length;L0++){let G0=p[L0].camera;if(G0){let x0=R[G0];if(!x0)x0=new IZ,R[G0]=x0;let c0=N.getCameraImage(G0);x0.sourceTexture=c0}}}}for(let p=0;p<L.length;p++){let m=V[p],J0=L[p];if(m!==null&&J0!==void 0)J0.update(m,w,H||W)}if(_0)_0($0,w);if(w.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:w});E=null}let e0=new LU;e0.setAnimationLoop(b0),this.setAnimationLoop=function($0){_0=$0},this.dispose=function(){}}}var aq=new QJ,SU=new WJ;SU.set(-1,0,0,0,1,0,0,0,1);function rq(J,Q){function $(R,q){if(R.matrixAutoUpdate===!0)R.updateMatrix();q.value.copy(R.matrix)}function Z(R,q){if(q.color.getRGB(R.fogColor.value,pW(J)),q.isFog)R.fogNear.value=q.near,R.fogFar.value=q.far;else if(q.isFogExp2)R.fogDensity.value=q.density}function K(R,q,C,z,L){if(q.isNodeMaterial)q.uniformsNeedUpdate=!1;else if(q.isMeshBasicMaterial)W(R,q);else if(q.isMeshLambertMaterial){if(W(R,q),q.envMap)R.envMapIntensity.value=q.envMapIntensity}else if(q.isMeshToonMaterial)W(R,q),F(R,q);else if(q.isMeshPhongMaterial){if(W(R,q),N(R,q),q.envMap)R.envMapIntensity.value=q.envMapIntensity}else if(q.isMeshStandardMaterial){if(W(R,q),G(R,q),q.isMeshPhysicalMaterial)E(R,q,L)}else if(q.isMeshMatcapMaterial)W(R,q),O(R,q);else if(q.isMeshDepthMaterial)W(R,q);else if(q.isMeshDistanceMaterial)W(R,q),D(R,q);else if(q.isMeshNormalMaterial)W(R,q);else if(q.isLineBasicMaterial){if(Y(R,q),q.isLineDashedMaterial)X(R,q)}else if(q.isPointsMaterial)H(R,q,C,z);else if(q.isSpriteMaterial)U(R,q);else if(q.isShadowMaterial)R.color.value.copy(q.color),R.opacity.value=q.opacity;else if(q.isShaderMaterial)q.uniformsNeedUpdate=!1}function W(R,q){if(R.opacity.value=q.opacity,q.color)R.diffuse.value.copy(q.color);if(q.emissive)R.emissive.value.copy(q.emissive).multiplyScalar(q.emissiveIntensity);if(q.map)R.map.value=q.map,$(q.map,R.mapTransform);if(q.alphaMap)R.alphaMap.value=q.alphaMap,$(q.alphaMap,R.alphaMapTransform);if(q.bumpMap){if(R.bumpMap.value=q.bumpMap,$(q.bumpMap,R.bumpMapTransform),R.bumpScale.value=q.bumpScale,q.side===V8)R.bumpScale.value*=-1}if(q.normalMap){if(R.normalMap.value=q.normalMap,$(q.normalMap,R.normalMapTransform),R.normalScale.value.copy(q.normalScale),q.side===V8)R.normalScale.value.negate()}if(q.displacementMap)R.displacementMap.value=q.displacementMap,$(q.displacementMap,R.displacementMapTransform),R.displacementScale.value=q.displacementScale,R.displacementBias.value=q.displacementBias;if(q.emissiveMap)R.emissiveMap.value=q.emissiveMap,$(q.emissiveMap,R.emissiveMapTransform);if(q.specularMap)R.specularMap.value=q.specularMap,$(q.specularMap,R.specularMapTransform);if(q.alphaTest>0)R.alphaTest.value=q.alphaTest;let C=Q.get(q),z=C.envMap,L=C.envMapRotation;if(z){if(R.envMap.value=z,R.envMapRotation.value.setFromMatrix4(aq.makeRotationFromEuler(L)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1)R.envMapRotation.value.premultiply(SU);R.reflectivity.value=q.reflectivity,R.ior.value=q.ior,R.refractionRatio.value=q.refractionRatio}if(q.lightMap)R.lightMap.value=q.lightMap,R.lightMapIntensity.value=q.lightMapIntensity,$(q.lightMap,R.lightMapTransform);if(q.aoMap)R.aoMap.value=q.aoMap,R.aoMapIntensity.value=q.aoMapIntensity,$(q.aoMap,R.aoMapTransform)}function Y(R,q){if(R.diffuse.value.copy(q.color),R.opacity.value=q.opacity,q.map)R.map.value=q.map,$(q.map,R.mapTransform)}function X(R,q){R.dashSize.value=q.dashSize,R.totalSize.value=q.dashSize+q.gapSize,R.scale.value=q.scale}function H(R,q,C,z){if(R.diffuse.value.copy(q.color),R.opacity.value=q.opacity,R.size.value=q.size*C,R.scale.value=z*0.5,q.map)R.map.value=q.map,$(q.map,R.uvTransform);if(q.alphaMap)R.alphaMap.value=q.alphaMap,$(q.alphaMap,R.alphaMapTransform);if(q.alphaTest>0)R.alphaTest.value=q.alphaTest}function U(R,q){if(R.diffuse.value.copy(q.color),R.opacity.value=q.opacity,R.rotation.value=q.rotation,q.map)R.map.value=q.map,$(q.map,R.mapTransform);if(q.alphaMap)R.alphaMap.value=q.alphaMap,$(q.alphaMap,R.alphaMapTransform);if(q.alphaTest>0)R.alphaTest.value=q.alphaTest}function N(R,q){R.specular.value.copy(q.specular),R.shininess.value=Math.max(q.shininess,0.0001)}function F(R,q){if(q.gradientMap)R.gradientMap.value=q.gradientMap}function G(R,q){if(R.metalness.value=q.metalness,q.metalnessMap)R.metalnessMap.value=q.metalnessMap,$(q.metalnessMap,R.metalnessMapTransform);if(R.roughness.value=q.roughness,q.roughnessMap)R.roughnessMap.value=q.roughnessMap,$(q.roughnessMap,R.roughnessMapTransform);if(q.envMap)R.envMapIntensity.value=q.envMapIntensity}function E(R,q,C){if(R.ior.value=q.ior,q.sheen>0){if(R.sheenColor.value.copy(q.sheenColor).multiplyScalar(q.sheen),R.sheenRoughness.value=q.sheenRoughness,q.sheenColorMap)R.sheenColorMap.value=q.sheenColorMap,$(q.sheenColorMap,R.sheenColorMapTransform);if(q.sheenRoughnessMap)R.sheenRoughnessMap.value=q.sheenRoughnessMap,$(q.sheenRoughnessMap,R.sheenRoughnessMapTransform)}if(q.clearcoat>0){if(R.clearcoat.value=q.clearcoat,R.clearcoatRoughness.value=q.clearcoatRoughness,q.clearcoatMap)R.clearcoatMap.value=q.clearcoatMap,$(q.clearcoatMap,R.clearcoatMapTransform);if(q.clearcoatRoughnessMap)R.clearcoatRoughnessMap.value=q.clearcoatRoughnessMap,$(q.clearcoatRoughnessMap,R.clearcoatRoughnessMapTransform);if(q.clearcoatNormalMap){if(R.clearcoatNormalMap.value=q.clearcoatNormalMap,$(q.clearcoatNormalMap,R.clearcoatNormalMapTransform),R.clearcoatNormalScale.value.copy(q.clearcoatNormalScale),q.side===V8)R.clearcoatNormalScale.value.negate()}}if(q.dispersion>0)R.dispersion.value=q.dispersion;if(q.retroreflectivity>0)R.retroreflectivity.value=q.retroreflectivity;if(q.iridescence>0){if(R.iridescence.value=q.iridescence,R.iridescenceIOR.value=q.iridescenceIOR,R.iridescenceThicknessMinimum.value=q.iridescenceThicknessRange[0],R.iridescenceThicknessMaximum.value=q.iridescenceThicknessRange[1],q.iridescenceMap)R.iridescenceMap.value=q.iridescenceMap,$(q.iridescenceMap,R.iridescenceMapTransform);if(q.iridescenceThicknessMap)R.iridescenceThicknessMap.value=q.iridescenceThicknessMap,$(q.iridescenceThicknessMap,R.iridescenceThicknessMapTransform)}if(q.transmission>0){if(R.transmission.value=q.transmission,R.transmissionSamplerMap.value=C.texture,R.transmissionSamplerSize.value.set(C.width,C.height),q.transmissionMap)R.transmissionMap.value=q.transmissionMap,$(q.transmissionMap,R.transmissionMapTransform);if(R.thickness.value=q.thickness,q.thicknessMap)R.thicknessMap.value=q.thicknessMap,$(q.thicknessMap,R.thicknessMapTransform);R.attenuationDistance.value=q.attenuationDistance,R.attenuationColor.value.copy(q.attenuationColor)}if(q.anisotropy>0){if(R.anisotropyVector.value.set(q.anisotropy*Math.cos(q.anisotropyRotation),q.anisotropy*Math.sin(q.anisotropyRotation)),q.anisotropyMap)R.anisotropyMap.value=q.anisotropyMap,$(q.anisotropyMap,R.anisotropyMapTransform)}if(R.specularIntensity.value=q.specularIntensity,R.specularColor.value.copy(q.specularColor),q.specularColorMap)R.specularColorMap.value=q.specularColorMap,$(q.specularColorMap,R.specularColorMapTransform);if(q.specularIntensityMap)R.specularIntensityMap.value=q.specularIntensityMap,$(q.specularIntensityMap,R.specularIntensityMapTransform)}function O(R,q){if(q.matcap)R.matcap.value=q.matcap}function D(R,q){let C=Q.get(q).light;R.referencePosition.value.setFromMatrixPosition(C.matrixWorld),R.nearDistance.value=C.shadow.camera.near,R.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:K}}function tq(J,Q,$,Z){let K={},W={},Y=[],X=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function H(L,V){let P=V.program;Z.uniformBlockBinding(L,P)}function U(L,V){let P=K[L.id];if(P===void 0)R(L),P=N(L),K[L.id]=P,L.addEventListener("dispose",C);let T=V.program;Z.updateUBOMapping(L,T);let B=Q.render.frame;if(W[L.id]!==B)G(L),W[L.id]=B}function N(L){let V=F();L.__bindingPointIndex=V;let P=J.createBuffer(),T=L.__size,B=L.usage;return J.bindBuffer(J.UNIFORM_BUFFER,P),J.bufferData(J.UNIFORM_BUFFER,T,B),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,V,P),P}function F(){for(let L=0;L<X;L++)if(Y.indexOf(L)===-1)return Y.push(L),L;return $J("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function G(L){let V=K[L.id],P=L.uniforms,T=L.__cache;J.bindBuffer(J.UNIFORM_BUFFER,V);for(let B=0,I=P.length;B<I;B++){let l=P[B];if(Array.isArray(l))for(let j=0,x=l.length;j<x;j++)E(l[j],B,j,T);else E(l,B,0,T)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function E(L,V,P,T){if(D(L,V,P,T)===!0){let{__offset:B,value:I}=L;if(Array.isArray(I)){let l=0;for(let j=0;j<I.length;j++){let x=I[j],t=q(x);if(O(x,L.__data,l),typeof x!=="number"&&typeof x!=="boolean"&&!x.isMatrix3&&!ArrayBuffer.isView(x))l+=t.storage/Float32Array.BYTES_PER_ELEMENT}}else O(I,L.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,B,L.__data)}}function O(L,V,P){if(typeof L==="number"||typeof L==="boolean")V[0]=L;else if(L.isMatrix3)V[0]=L.elements[0],V[1]=L.elements[1],V[2]=L.elements[2],V[3]=0,V[4]=L.elements[3],V[5]=L.elements[4],V[6]=L.elements[5],V[7]=0,V[8]=L.elements[6],V[9]=L.elements[7],V[10]=L.elements[8],V[11]=0;else if(ArrayBuffer.isView(L))V.set(new L.constructor(L.buffer,L.byteOffset,V.length));else L.toArray(V,P)}function D(L,V,P,T){let B=L.value,I=V+"_"+P;if(T[I]===void 0){if(typeof B==="number"||typeof B==="boolean")T[I]=B;else if(ArrayBuffer.isView(B))T[I]=B.slice();else T[I]=B.clone();return!0}else{let l=T[I];if(typeof B==="number"||typeof B==="boolean"){if(l!==B)return T[I]=B,!0}else if(ArrayBuffer.isView(B))return!0;else if(l.equals(B)===!1)return l.copy(B),!0}return!1}function R(L){let V=L.uniforms,P=0,T=16;for(let I=0,l=V.length;I<l;I++){let j=Array.isArray(V[I])?V[I]:[V[I]];for(let x=0,t=j.length;x<t;x++){let y=j[x],i=Array.isArray(y.value)?y.value:[y.value];for(let s=0,g=i.length;s<g;s++){let H0=i[s],a=q(H0),X0=P%T,E0=X0%a.boundary,r0=X0+E0;if(P+=E0,r0!==0&&T-r0<a.storage)P+=T-r0;y.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=P,P+=a.storage}}}let B=P%T;if(B>0)P+=T-B;return L.__size=P,L.__cache={},this}function q(L){let V={boundary:0,storage:0};if(typeof L==="number"||typeof L==="boolean")V.boundary=4,V.storage=4;else if(L.isVector2)V.boundary=8,V.storage=8;else if(L.isVector3||L.isColor)V.boundary=16,V.storage=12;else if(L.isVector4)V.boundary=16,V.storage=16;else if(L.isMatrix3)V.boundary=48,V.storage=48;else if(L.isMatrix4)V.boundary=64,V.storage=64;else if(L.isTexture)o0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(L))V.boundary=16,V.storage=L.byteLength;else o0("WebGLRenderer: Unsupported uniform value type.",L);return V}function C(L){let V=L.target;V.removeEventListener("dispose",C);let P=Y.indexOf(V.__bindingPointIndex);Y.splice(P,1),J.deleteBuffer(K[V.id]),delete K[V.id],delete W[V.id]}function z(){for(let L in K)J.deleteBuffer(K[L]);Y=[],K={},W={}}return{bind:H,update:U,dispose:z}}var eq=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),j9=null;function JO(){if(j9===null)j9=new dQ(eq,16,16,g7,O8),j9.name="DFG_LUT",j9.minFilter=q8,j9.magFilter=q8,j9.wrapS=b6,j9.wrapT=b6,j9.generateMipmaps=!1,j9.needsUpdate=!0;return j9}class FY{constructor(J={}){let{canvas:Q=jH(),context:$=null,depth:Z=!0,stencil:K=!1,alpha:W=!1,antialias:Y=!1,premultipliedAlpha:X=!0,preserveDrawingBuffer:H=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:N=!1,reversedDepthBuffer:F=!1,outputBufferType:G=G9}=J;this.isWebGLRenderer=!0;let E;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=$.getContextAttributes().alpha}else E=W;let O=G,D=new Set([sK,nK,cK]),R=new Set([G9,E7,gQ,g6,uK,dK]),q=new Uint32Array(4),C=new Int32Array(4),z=new S,L=null,V=null,P=[],T=[],B=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=U9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,l=!1,j=null,x=null,t=null,y=null;this._outputColorSpace=J8;let i=0,s=0,g=null,H0=-1,a=null,X0=new pJ,E0=new pJ,r0=null,_0=new h0(0),b0=0,e0=Q.width,$0=Q.height,w=1,p=null,m=null,J0=new pJ(0,0,e0,$0),e=new pJ(0,0,e0,$0),D0=!1,L0=new nQ,G0=!1,x0=!1,c0=new QJ,DJ=new S,j0=new pJ,MJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_J=!1;function hJ(){return g===null?w:1}let f=$;function iJ(M,h){return Q.getContext(M,h)}let YJ,EJ,A,k,v,o,q0,B0,z0,Z0,Y0,k0,n0,M0,V0,t0,a0,CJ,b,A0,K0,I0,v0;try{let M={alpha:!0,depth:Z,stencil:K,antialias:Y,premultipliedAlpha:X,preserveDrawingBuffer:H,powerPreference:U,failIfMajorPerformanceCaveat:N};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${xX}`);if(Q.addEventListener("webglcontextlost",KJ,!1),Q.addEventListener("webglcontextrestored",dJ,!1),Q.addEventListener("webglcontextcreationerror",wJ,!1),f===null){if(f=iJ("webgl2",M),f===null)if(iJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}O0()}catch(M){throw Q.removeEventListener("webglcontextlost",KJ,!1),Q.removeEventListener("webglcontextrestored",dJ,!1),Q.removeEventListener("webglcontextcreationerror",wJ,!1),$J("WebGLRenderer: "+M.message),M}function O0(){if(YJ=new X1(f),YJ.init(),K0=new sq(f,YJ),EJ=new rE(f,YJ,J,K0),A=new cq(f,YJ),EJ.reversedDepthBuffer&&F)A.buffers.depth.setReversed(!0);x=f.createFramebuffer(),t=f.createFramebuffer(),y=f.createFramebuffer(),k=new N1(f),v=new wq,o=new nq(f,YJ,A,v,EJ,K0,k),q0=new Y1(I),B0=new FG(f),I0=new oE(f,B0),z0=new H1(f,B0,k,I0),Z0=new F1(f,z0,B0,I0,k),CJ=new G1(f,EJ,o),V0=new tE(v),Y0=new Sq(I,q0,YJ,EJ,I0,V0),k0=new rq(I,v),n0=new yq,M0=new gq(YJ),a0=new iE(I,q0,A,Z0,E,X),t0=new dq(I,Z0,EJ),v0=new tq(f,k,EJ,A),b=new aE(f,YJ,k),A0=new U1(f,YJ,k),k.programs=Y0.programs,I.capabilities=EJ,I.extensions=YJ,I.properties=v,I.renderLists=n0,I.shadowMap=t0,I.state=A,I.info=k}if(O!==G9)B=new q1(O,Q.width,Q.height,Y,Z,K);let T0=new TU(I,f);this.xr=T0,this.getContext=function(){return f},this.getContextAttributes=function(){return f.getContextAttributes()},this.forceContextLoss=function(){let M=YJ.get("WEBGL_lose_context");if(M)M.loseContext()},this.forceContextRestore=function(){let M=YJ.get("WEBGL_lose_context");if(M)M.restoreContext()},this.getPixelRatio=function(){return w},this.setPixelRatio=function(M){if(M===void 0)return;w=M,this.setSize(e0,$0,!1)},this.getSize=function(M){return M.set(e0,$0)},this.setSize=function(M,h,r=!0){if(T0.isPresenting){o0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(e0=M,$0=h,Q.width=Math.floor(M*w),Q.height=Math.floor(h*w),r===!0)Q.style.width=M+"px",Q.style.height=h+"px";if(B!==null)B.setSize(Q.width,Q.height);this.setViewport(0,0,M,h)},this.getDrawingBufferSize=function(M){return M.set(e0*w,$0*w).floor()},this.setDrawingBufferSize=function(M,h,r){e0=M,$0=h,w=r,Q.width=Math.floor(M*r),Q.height=Math.floor(h*r),this.setViewport(0,0,M,h)},this.setEffects=function(M){if(O===G9){$J("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let h=0;h<M.length;h++)if(M[h].isOutputPass===!0){o0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(X0)},this.getViewport=function(M){return M.copy(J0)},this.setViewport=function(M,h,r,n){if(M.isVector4)J0.set(M.x,M.y,M.z,M.w);else J0.set(M,h,r,n);A.viewport(X0.copy(J0).multiplyScalar(w).round())},this.getScissor=function(M){return M.copy(e)},this.setScissor=function(M,h,r,n){if(M.isVector4)e.set(M.x,M.y,M.z,M.w);else e.set(M,h,r,n);A.scissor(E0.copy(e).multiplyScalar(w).round())},this.getScissorTest=function(){return D0},this.setScissorTest=function(M){A.setScissorTest(D0=M)},this.setOpaqueSort=function(M){p=M},this.setTransparentSort=function(M){m=M},this.getClearColor=function(M){return M.copy(a0.getClearColor())},this.setClearColor=function(){a0.setClearColor(...arguments)},this.getClearAlpha=function(){return a0.getClearAlpha()},this.setClearAlpha=function(){a0.setClearAlpha(...arguments)},this.clear=function(M=!0,h=!0,r=!0){let n=0;if(M){let d=!1;if(g!==null){let S0=g.texture.format;d=D.has(S0)}if(d){let S0=g.texture.type,m0=R.has(S0),w0=a0.getClearColor(),l0=a0.getClearAlpha(),s0=w0.r,XJ=w0.g,qJ=w0.b;if(m0)q[0]=s0,q[1]=XJ,q[2]=qJ,q[3]=l0,f.clearBufferuiv(f.COLOR,0,q);else C[0]=s0,C[1]=XJ,C[2]=qJ,C[3]=l0,f.clearBufferiv(f.COLOR,0,C)}else n|=f.COLOR_BUFFER_BIT}if(h)n|=f.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(r)n|=f.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(n!==0)f.clear(n)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),j=M},this.dispose=function(){Q.removeEventListener("webglcontextlost",KJ,!1),Q.removeEventListener("webglcontextrestored",dJ,!1),Q.removeEventListener("webglcontextcreationerror",wJ,!1),a0.dispose(),n0.dispose(),M0.dispose(),v.dispose(),q0.dispose(),Z0.dispose(),I0.dispose(),v0.dispose(),Y0.dispose(),T0.dispose(),T0.removeEventListener("sessionstart",L8),T0.removeEventListener("sessionend",X6),B9.stop()};function KJ(M){M.preventDefault(),AQ("WebGLRenderer: Context Lost."),l=!0}function dJ(){AQ("WebGLRenderer: Context Restored."),l=!1;let M=k.autoReset,h=t0.enabled,r=t0.autoUpdate,n=t0.needsUpdate,d=t0.type;O0(),k.autoReset=M,t0.enabled=h,t0.autoUpdate=r,t0.needsUpdate=n,t0.type=d}function wJ(M){$J("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function m8(M){let h=M.target;h.removeEventListener("dispose",m8),Q9(h)}function Q9(M){L$(M),v.remove(M)}function L$(M){let h=v.get(M).programs;if(h!==void 0){if(h.forEach(function(r){Y0.releaseProgram(r)}),M.isShaderMaterial)Y0.releaseShaderCache(M)}}this.renderBufferDirect=function(M,h,r,n,d,S0){if(h===null)h=MJ;let m0=d.isMesh&&d.matrixWorld.determinantAffine()<0,w0=$K(M,h,r,n,d);A.setMaterial(n,m0);let l0=r.index,s0=1;if(n.wireframe===!0){if(l0=z0.getWireframeAttribute(r),l0===void 0)return;s0=2}let XJ=r.drawRange,qJ=r.attributes.position,d0=XJ.start*s0,IJ=(XJ.start+XJ.count)*s0;if(S0!==null)d0=Math.max(d0,S0.start*s0),IJ=Math.min(IJ,(S0.start+S0.count)*s0);if(l0!==null)d0=Math.max(d0,0),IJ=Math.min(IJ,l0.count);else if(qJ!==void 0&&qJ!==null)d0=Math.max(d0,0),IJ=Math.min(IJ,qJ.count);let bJ=IJ-d0;if(bJ<0||bJ===1/0)return;I0.setup(d,n,w0,r,l0);let cJ,BJ=b;if(l0!==null)cJ=B0.get(l0),BJ=A0,BJ.setIndex(cJ);if(d.isMesh)if(n.wireframe===!0)A.setLineWidth(n.wireframeLinewidth*hJ()),BJ.setMode(f.LINES);else BJ.setMode(f.TRIANGLES);else if(d.isLine){let Y8=n.linewidth;if(Y8===void 0)Y8=1;if(A.setLineWidth(Y8*hJ()),d.isLineSegments)BJ.setMode(f.LINES);else if(d.isLineLoop)BJ.setMode(f.LINE_LOOP);else BJ.setMode(f.LINE_STRIP)}else if(d.isPoints)BJ.setMode(f.POINTS);else if(d.isSprite)BJ.setMode(f.TRIANGLES);if(d.isBatchedMesh)if(!YJ.get("WEBGL_multi_draw")){let{_multiDrawStarts:Y8,_multiDrawCounts:g0,_multiDrawCount:X8}=d,zJ=l0?B0.get(l0).bytesPerElement:1,F8=v.get(n).currentProgram.getUniforms();for(let S8=0;S8<X8;S8++)F8.setValue(f,"_gl_DrawID",S8),BJ.render(Y8[S8]/zJ,g0[S8])}else BJ.renderMultiDraw(d._multiDrawStarts,d._multiDrawCounts,d._multiDrawCount);else if(d.isInstancedMesh)BJ.renderInstances(d0,bJ,d.count);else if(r.isInstancedBufferGeometry){let Y8=r._maxInstanceCount!==void 0?r._maxInstanceCount:1/0,g0=Math.min(r.instanceCount,Y8);BJ.renderInstances(d0,bJ,g0)}else BJ.render(d0,bJ)};function W6(M,h,r,n){if(j!==null&&M.isNodeMaterial)j.setObject(n,M);if(G0===!0)V0.setState(M,r,!1);if(M.transparent===!0&&M.side===oJ&&M.forceSinglePass===!1)M.side=V8,M.needsUpdate=!0,P7(M,h,n),M.side=G7,M.needsUpdate=!0,P7(M,h,n),M.side=oJ;else P7(M,h,n)}this.compile=function(M,h,r=null){if(r===null)r=M;if(j!==null)j.renderStart(M,h,r);if(V=M0.get(r),V.init(h),T.push(V),r.traverseVisible(function(d){if(d.isLight&&d.layers.test(h.layers)){if(V.pushLight(d),d.castShadow)V.pushShadow(d)}}),M!==r)M.traverseVisible(function(d){if(d.isLight&&d.layers.test(h.layers)){if(V.pushLight(d),d.castShadow)V.pushShadow(d)}});if(V.setupLights(),j!==null)j.updateLights(V.state.lightsArray);if(x0=this.localClippingEnabled,G0=V0.init(this.clippingPlanes,x0),G0===!0)V0.setGlobalState(this.clippingPlanes,h);if(j!==null)t0.render(V.state.shadowsArray,r,h);let n=new Set;if(M.traverse(function(d){if(!(d.isMesh||d.isPoints||d.isLine||d.isSprite))return;let S0=d.material;if(S0)if(Array.isArray(S0))for(let m0=0;m0<S0.length;m0++){let w0=S0[m0];W6(w0,r,h,d),n.add(w0)}else W6(S0,r,h,d),n.add(S0)}),V=T.pop(),j!==null)j.renderEnd();return n},this.compileAsync=function(M,h,r=null){let n=this.compile(M,h,r);return new Promise((d)=>{function S0(){if(n.forEach(function(m0){let l0=v.get(m0).currentProgram;if(l0===void 0||l0.isReady())n.delete(m0)}),n.size===0){d(M);return}setTimeout(S0,10)}if(YJ.get("KHR_parallel_shader_compile")!==null)S0();else setTimeout(S0,10)})};let Y6=null;function KQ(M){if(Y6)Y6(M)}function L8(){B9.stop()}function X6(){B9.start()}let B9=new LU;if(B9.setAnimationLoop(KQ),typeof self<"u")B9.setContext(self);this.setAnimationLoop=function(M){Y6=M,T0.setAnimationLoop(M),M===null?B9.stop():B9.start()},T0.addEventListener("sessionstart",L8),T0.addEventListener("sessionend",X6),this.render=function(M,h){if(h!==void 0&&h.isCamera!==!0){$J("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(l===!0)return;if(j!==null)j.renderStart(M,h);let r=T0.enabled===!0&&T0.isPresenting===!0,n=B!==null&&(g===null||r)&&B.begin(I,g);if(M.matrixWorldAutoUpdate===!0)M.updateMatrixWorld();if(h.parent===null&&h.matrixWorldAutoUpdate===!0)h.updateMatrixWorld();if(T0.enabled===!0&&T0.isPresenting===!0&&(B===null||B.isCompositing()===!1)){if(T0.cameraAutoUpdate===!0)T0.updateCamera(h);h=T0.getCamera()}if(M.isScene===!0)M.onBeforeRender(I,M,h,g);if(V=M0.get(M,T.length),V.init(h),V.state.textureUnits=o.getTextureUnits(),T.push(V),c0.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse),L0.setFromProjectionMatrix(c0,TW,h.reversedDepth),x0=this.localClippingEnabled,G0=V0.init(this.clippingPlanes,x0),L=n0.get(M,P.length),L.init(),P.push(L),T0.enabled===!0&&T0.isPresenting===!0){let m0=I.xr.getDepthSensingMesh();if(m0!==null)WQ(m0,h,-1/0,I.sortObjects)}if(WQ(M,h,0,I.sortObjects),L.finish(),j!==null)j.updateLights(V.state.lightsArray);if(I.sortObjects===!0)L.sort(p,m);if(_J=T0.enabled===!1||T0.isPresenting===!1||T0.hasDepthSensing()===!1,_J)a0.addToRenderList(L,M);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(G0===!0)V0.beginShadows();let d=V.state.shadowsArray;if(t0.render(d,M,h),G0===!0)V0.endShadows();if((n&&B.hasRenderPass())===!1){let{opaque:m0,transmissive:w0}=L;if(V.setupLights(),h.isArrayCamera){let l0=h.cameras;if(w0.length>0)for(let s0=0,XJ=l0.length;s0<XJ;s0++){let qJ=l0[s0];C7(m0,w0,M,qJ)}if(_J)a0.render(M);for(let s0=0,XJ=l0.length;s0<XJ;s0++){let qJ=l0[s0];YQ(L,M,qJ,qJ.viewport)}}else{if(w0.length>0)C7(m0,w0,M,h);if(_J)a0.render(M);YQ(L,M,h)}}if(g!==null&&s===0)o.updateMultisampleRenderTarget(g),o.updateRenderTargetMipmap(g);if(n)B.end(I);if(M.isScene===!0)M.onAfterRender(I,M,h);if(I0.resetDefaultState(),H0=-1,a=null,T.pop(),T.length>0){if(V=T[T.length-1],o.setTextureUnits(V.state.textureUnits),G0===!0)V0.setGlobalState(I.clippingPlanes,V.state.camera)}else V=null;if(P.pop(),P.length>0)L=P[P.length-1];else L=null;if(j!==null)j.renderEnd()};function WQ(M,h,r,n){if(M.visible===!1)return;if(M.layers.test(h.layers)){if(M.isGroup)r=M.renderOrder;else if(M.isLOD){if(M.autoUpdate===!0)M.update(h)}else if(M.isLightProbeGrid)V.pushLightProbeGrid(M);else if(M.isLight){if(V.pushLight(M),M.castShadow)V.pushShadow(M)}else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(L0)){if(n)j0.setFromMatrixPosition(M.matrixWorld).applyMatrix4(c0);let m0=Z0.update(M),w0=M.material;if(w0.visible)L.push(M,m0,w0,r,j0.z,null,h)}}else if(M.isMesh||M.isLine||M.isPoints){if(!M.frustumCulled||M.intersectsFrustum(L0)){let m0=Z0.update(M),w0=M.material;if(n){if(M.boundingSphere!==void 0){if(M.boundingSphere===null)M.computeBoundingSphere();j0.copy(M.boundingSphere.center)}else{if(m0.boundingSphere===null)m0.computeBoundingSphere();j0.copy(m0.boundingSphere.center)}j0.applyMatrix4(M.matrixWorld).applyMatrix4(c0)}if(Array.isArray(w0)){let l0=m0.groups;for(let s0=0,XJ=l0.length;s0<XJ;s0++){let qJ=l0[s0],d0=w0[qJ.materialIndex];if(d0&&d0.visible)L.push(M,m0,d0,r,j0.z,qJ,h)}}else if(w0.visible)L.push(M,m0,w0,r,j0.z,null,h)}}}let S0=M.children;for(let m0=0,w0=S0.length;m0<w0;m0++)WQ(S0[m0],h,r,n)}function YQ(M,h,r,n){let{opaque:d,transmissive:S0,transparent:m0}=M;if(V.setupLightsView(r),G0===!0)V0.setGlobalState(I.clippingPlanes,r);if(n)A.viewport(X0.copy(n));if(d.length>0)k9(d,h,r);if(S0.length>0)k9(S0,h,r);if(m0.length>0)k9(m0,h,r);A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function C7(M,h,r,n){if((r.isScene===!0?r.overrideMaterial:null)!==null)return;if(V.state.transmissionRenderTarget[n.id]===void 0){let d0=YJ.has("EXT_color_buffer_half_float")||YJ.has("EXT_color_buffer_float");V.state.transmissionRenderTarget[n.id]=new Q8(1,1,{generateMipmaps:!0,type:d0?O8:G9,minFilter:A9,samples:Math.max(4,EJ.samples),stencilBuffer:K,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:NJ.workingColorSpace})}let S0=V.state.transmissionRenderTarget[n.id],m0=n.viewport||X0;S0.setSize(m0.z*I.transmissionResolutionScale,m0.w*I.transmissionResolutionScale);let w0=I.getRenderTarget(),l0=I.getActiveCubeFace(),s0=I.getActiveMipmapLevel();if(I.setRenderTarget(S0),I.getClearColor(_0),b0=I.getClearAlpha(),b0<1)I.setClearColor(16777215,0.5);if(I.clear(),_J)a0.render(r);let XJ=I.toneMapping;I.toneMapping=U9;let qJ=n.viewport;if(n.viewport!==void 0)n.viewport=void 0;if(V.setupLightsView(n),G0===!0)V0.setGlobalState(I.clippingPlanes,n);if(k9(M,r,n),o.updateMultisampleRenderTarget(S0),o.updateRenderTargetMipmap(S0),YJ.has("WEBGL_multisampled_render_to_texture")===!1){let d0=!1;for(let IJ=0,bJ=h.length;IJ<bJ;IJ++){let cJ=h[IJ],{object:BJ,geometry:Y8,material:g0,group:X8}=cJ;if(g0.side===oJ&&BJ.layers.test(n.layers)){let zJ=g0.side;g0.side=V8,g0.needsUpdate=!0,QK(BJ,r,n,Y8,g0,X8),g0.side=zJ,g0.needsUpdate=!0,d0=!0}}if(d0===!0)o.updateMultisampleRenderTarget(S0),o.updateRenderTargetMipmap(S0)}if(I.setRenderTarget(w0,l0,s0),I.setClearColor(_0,b0),qJ!==void 0)n.viewport=qJ;I.toneMapping=XJ}function k9(M,h,r){let n=h.isScene===!0?h.overrideMaterial:null;for(let d=0,S0=M.length;d<S0;d++){let m0=M[d],{object:w0,geometry:l0,group:s0}=m0,XJ=m0.material;if(XJ.allowOverride===!0&&n!==null)XJ=n;if(w0.layers.test(r.layers))QK(w0,h,r,l0,XJ,s0)}}function QK(M,h,r,n,d,S0){if(j!==null&&d.isNodeMaterial)j.setObject(M,d);if(M.onBeforeRender(I,h,r,n,d,S0),M.modelViewMatrix.multiplyMatrices(r.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),d.onBeforeRender(I,h,r,n,M,S0),d.transparent===!0&&d.side===oJ&&d.forceSinglePass===!1)d.side=V8,d.needsUpdate=!0,I.renderBufferDirect(r,h,n,d,M,S0),d.side=G7,d.needsUpdate=!0,I.renderBufferDirect(r,h,n,d,M,S0),d.side=oJ;else I.renderBufferDirect(r,h,n,d,M,S0);M.onAfterRender(I,h,r,n,d,S0)}function P7(M,h,r){if(h.isScene!==!0)h=MJ;let n=v.get(M),d=V.state.lights,S0=V.state.shadowsArray,m0=d.state.version,w0=Y0.getParameters(M,d.state,S0,h,r,V.state.lightProbeGridArray),l0=Y0.getProgramCacheKey(w0),s0=n.programs;n.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?h.environment:null,n.fog=h.fog;let XJ=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;if(n.envMap=q0.get(M.envMap||n.environment,XJ),n.envMapRotation=n.environment!==null&&M.envMap===null?h.environmentRotation:M.envMapRotation,s0===void 0)M.addEventListener("dispose",m8),s0=new Map,n.programs=s0;let qJ=s0.get(l0);if(qJ!==void 0){if(n.currentProgram===qJ&&n.lightsStateVersion===m0)return K8(M,w0),qJ}else{if(w0.uniforms=Y0.getUniforms(M),j!==null&&M.isNodeMaterial)j.build(M,r,w0);M.onBeforeCompile(w0,I),qJ=Y0.acquireProgram(w0,l0),s0.set(l0,qJ),n.uniforms=w0.uniforms}let d0=n.uniforms;if(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)d0.clippingPlanes=V0.uniform;if(K8(M,w0),n.needsLights=XQ(M),n.lightsStateVersion=m0,n.needsLights)d0.ambientLightColor.value=d.state.ambient,d0.lightProbe.value=d.state.probe,d0.sunLights.value=d.state.sun,d0.sunLightShadows.value=d.state.sunShadow,d0.directionalLights.value=d.state.directional,d0.directionalLightShadows.value=d.state.directionalShadow,d0.spotLights.value=d.state.spot,d0.spotLightShadows.value=d.state.spotShadow,d0.rectAreaLights.value=d.state.rectArea,d0.ltc_1.value=d.state.rectAreaLTC1,d0.ltc_2.value=d.state.rectAreaLTC2,d0.pointLights.value=d.state.point,d0.pointLightShadows.value=d.state.pointShadow,d0.hemisphereLights.value=d.state.hemi,d0.sunShadowMatrix.value=d.state.sunShadowMatrix,d0.sunShadowCascade.value=d.state.sunShadowCascade,d0.directionalShadowMatrix.value=d.state.directionalShadowMatrix,d0.spotLightMatrix.value=d.state.spotLightMatrix,d0.spotLightMap.value=d.state.spotLightMap,d0.pointShadowMatrix.value=d.state.pointShadowMatrix;return n.lightProbeGrid=V.state.lightProbeGridArray.length>0,n.currentProgram=qJ,n.uniformsList=null,qJ}function V$(M){if(M.uniformsList===null){let h=M.currentProgram.getUniforms();M.uniformsList=Y$.seqWithValue(h.seq,M.uniforms)}return M.uniformsList}function K8(M,h){let r=v.get(M);r.outputColorSpace=h.outputColorSpace,r.batching=h.batching,r.batchingColor=h.batchingColor,r.instancing=h.instancing,r.instancingColor=h.instancingColor,r.instancingMorph=h.instancingMorph,r.skinning=h.skinning,r.morphTargets=h.morphTargets,r.morphNormals=h.morphNormals,r.morphColors=h.morphColors,r.morphTargetsCount=h.morphTargetsCount,r.numClippingPlanes=h.numClippingPlanes,r.numIntersection=h.numClipIntersection,r.vertexAlphas=h.vertexAlphas,r.vertexTangents=h.vertexTangents,r.toneMapping=h.toneMapping}function $9(M,h){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;z.setFromMatrixPosition(h.matrixWorld);for(let r=0,n=M.length;r<n;r++){let d=M[r];if(d.texture!==null&&d.boundingBox.containsPoint(z))return d}return null}function $K(M,h,r,n,d){if(h.isScene!==!0)h=MJ;o.resetTextureUnits();let S0=h.fog,m0=n.isMeshStandardMaterial||n.isMeshLambertMaterial||n.isMeshPhongMaterial?h.environment:null,w0=g===null?I.outputColorSpace:g.isXRRenderTarget===!0?g.texture.colorSpace:NJ.workingColorSpace,l0=n.isMeshStandardMaterial||n.isMeshLambertMaterial&&!n.envMap||n.isMeshPhongMaterial&&!n.envMap,s0=q0.get(n.envMap||m0,l0),XJ=n.vertexColors===!0&&!!r.attributes.color&&r.attributes.color.itemSize===4,qJ=!!r.attributes.tangent&&(!!n.normalMap||n.anisotropy>0),d0=!!r.morphAttributes.position,IJ=!!r.morphAttributes.normal,bJ=!!r.morphAttributes.color,cJ=U9;if(n.toneMapped){if(g===null||g.isXRRenderTarget===!0)cJ=I.toneMapping}let BJ=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,Y8=BJ!==void 0?BJ.length:0,g0=v.get(n),X8=V.state.lights;if(G0===!0){if(x0===!0||M!==a){let nJ=M===a&&n.id===H0;V0.setState(n,M,nJ)}}let zJ=!1;if(n.version===g0.__version){if(g0.needsLights&&g0.lightsStateVersion!==X8.state.version)zJ=!0;else if(g0.outputColorSpace!==w0)zJ=!0;else if(d.isBatchedMesh&&g0.batching===!1)zJ=!0;else if(!d.isBatchedMesh&&g0.batching===!0)zJ=!0;else if(d.isBatchedMesh&&g0.batchingColor===!0&&d._colorsTexture===null)zJ=!0;else if(d.isBatchedMesh&&g0.batchingColor===!1&&d._colorsTexture!==null)zJ=!0;else if(d.isInstancedMesh&&g0.instancing===!1)zJ=!0;else if(!d.isInstancedMesh&&g0.instancing===!0)zJ=!0;else if(d.isSkinnedMesh&&g0.skinning===!1)zJ=!0;else if(!d.isSkinnedMesh&&g0.skinning===!0)zJ=!0;else if(d.isInstancedMesh&&g0.instancingColor===!0&&d.instanceColor===null)zJ=!0;else if(d.isInstancedMesh&&g0.instancingColor===!1&&d.instanceColor!==null)zJ=!0;else if(d.isInstancedMesh&&g0.instancingMorph===!0&&d.morphTexture===null)zJ=!0;else if(d.isInstancedMesh&&g0.instancingMorph===!1&&d.morphTexture!==null)zJ=!0;else if(g0.envMap!==s0)zJ=!0;else if(n.fog===!0&&g0.fog!==S0)zJ=!0;else if(g0.numClippingPlanes!==void 0&&(g0.numClippingPlanes!==V0.numPlanes||g0.numIntersection!==V0.numIntersection))zJ=!0;else if(g0.vertexAlphas!==XJ)zJ=!0;else if(g0.vertexTangents!==qJ)zJ=!0;else if(g0.morphTargets!==d0)zJ=!0;else if(g0.morphNormals!==IJ)zJ=!0;else if(g0.morphColors!==bJ)zJ=!0;else if(g0.toneMapping!==cJ)zJ=!0;else if(g0.morphTargetsCount!==Y8)zJ=!0;else if(!!g0.lightProbeGrid!==V.state.lightProbeGridArray.length>0)zJ=!0}else zJ=!0,g0.__version=n.version;let F8=g0.currentProgram;if(zJ===!0){if(F8=P7(n,h,d),j&&n.isNodeMaterial)j.onUpdateProgram(n,F8,g0)}let S8=!1,Z9=!1,b9=!1,vJ=F8.getUniforms(),xJ=g0.uniforms;if(A.useProgram(F8.program))S8=!0,Z9=!0,b9=!0;if(n.id!==H0)H0=n.id,Z9=!0;if(g0.needsLights){let nJ=$9(V.state.lightProbeGridArray,d);if(g0.lightProbeGrid!==nJ)g0.lightProbeGrid=nJ,Z9=!0}if(S8||a!==M){if(A.buffers.depth.getReversed()&&M.reversedDepth!==!0)M._reversedDepth=!0,M.updateProjectionMatrix();vJ.setValue(f,"projectionMatrix",M.projectionMatrix),vJ.setValue(f,"viewMatrix",M.matrixWorldInverse);let C9=vJ.map.cameraPosition;if(C9!==void 0)C9.setValue(f,DJ.setFromMatrixPosition(M.matrixWorld));if(EJ.logarithmicDepthBuffer)vJ.setValue(f,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2));if(n.isMeshPhongMaterial||n.isMeshToonMaterial||n.isMeshLambertMaterial||n.isMeshBasicMaterial||n.isMeshStandardMaterial||n.isShaderMaterial)vJ.setValue(f,"isOrthographic",M.isOrthographicCamera===!0);if(a!==M)a=M,Z9=!0,b9=!0}if(g0.needsLights){if(X8.state.sunShadowMap.length>0)vJ.setValue(f,"sunShadowMap",X8.state.sunShadowMap,o);if(X8.state.directionalShadowMap.length>0)vJ.setValue(f,"directionalShadowMap",X8.state.directionalShadowMap,o);if(X8.state.spotShadowMap.length>0)vJ.setValue(f,"spotShadowMap",X8.state.spotShadowMap,o);if(X8.state.pointShadowMap.length>0)vJ.setValue(f,"pointShadowMap",X8.state.pointShadowMap,o)}if(d.isSkinnedMesh){vJ.setOptional(f,d,"bindMatrix"),vJ.setOptional(f,d,"bindMatrixInverse");let nJ=d.skeleton;if(nJ){if(nJ.boneTexture===null)nJ.computeBoneTexture();vJ.setValue(f,"boneTexture",nJ.boneTexture,o)}}if(d.isBatchedMesh){if(vJ.setOptional(f,d,"batchingTexture"),vJ.setValue(f,"batchingTexture",d._matricesTexture,o),vJ.setOptional(f,d,"batchingIdTexture"),vJ.setValue(f,"batchingIdTexture",d._indirectTexture,o),vJ.setOptional(f,d,"batchingColorTexture"),d._colorsTexture!==null)vJ.setValue(f,"batchingColorTexture",d._colorsTexture,o)}let M9=r.morphAttributes;if(M9.position!==void 0||M9.normal!==void 0||M9.color!==void 0)CJ.update(d,r,F8);if(Z9||g0.receiveShadow!==d.receiveShadow)g0.receiveShadow=d.receiveShadow,vJ.setValue(f,"receiveShadow",d.receiveShadow);if((n.isMeshStandardMaterial||n.isMeshLambertMaterial||n.isMeshPhongMaterial)&&n.envMap===null&&h.environment!==null)xJ.envMapIntensity.value=h.environmentIntensity;if(xJ.dfgLUT!==void 0)xJ.dfgLUT.value=JO();if(Z9){if(vJ.setValue(f,"toneMappingExposure",I.toneMappingExposure),g0.needsLights)D$(xJ,b9);if(S0&&n.fog===!0)k0.refreshFogUniforms(xJ,S0);if(k0.refreshMaterialUniforms(xJ,n,w,$0,V.state.transmissionRenderTarget[M.id]),g0.needsLights&&g0.lightProbeGrid){let nJ=g0.lightProbeGrid;xJ.probesSH.value=nJ.texture,xJ.probesMin.value.copy(nJ.boundingBox.min),xJ.probesMax.value.copy(nJ.boundingBox.max),xJ.probesResolution.value.copy(nJ.resolution)}Y$.upload(f,V$(g0),xJ,o)}if(n.isShaderMaterial&&n.uniformsNeedUpdate===!0)Y$.upload(f,V$(g0),xJ,o),n.uniformsNeedUpdate=!1;if(n.isSpriteMaterial)vJ.setValue(f,"center",d.center);if(vJ.setValue(f,"modelViewMatrix",d.modelViewMatrix),vJ.setValue(f,"normalMatrix",d.normalMatrix),vJ.setValue(f,"modelMatrix",d.matrixWorld),n.uniformsGroups!==void 0){let nJ=n.uniformsGroups;for(let C9=0,x9=nJ.length;C9<x9;C9++){let D8=nJ[C9];v0.update(D8,F8),v0.bind(D8,F8)}}return F8}function D$(M,h){M.ambientLightColor.needsUpdate=h,M.lightProbe.needsUpdate=h,M.sunLights.needsUpdate=h,M.sunLightShadows.needsUpdate=h,M.directionalLights.needsUpdate=h,M.directionalLightShadows.needsUpdate=h,M.pointLights.needsUpdate=h,M.pointLightShadows.needsUpdate=h,M.spotLights.needsUpdate=h,M.spotLightShadows.needsUpdate=h,M.rectAreaLights.needsUpdate=h,M.hemisphereLights.needsUpdate=h}function XQ(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return i},this.getActiveMipmapLevel=function(){return s},this.getRenderTarget=function(){return g},this.setRenderTargetTextures=function(M,h,r){let n=v.get(M);if(n.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,n.__autoAllocateDepthBuffer===!1)n.__useRenderToTexture=!1;v.get(M.texture).__webglTexture=h,v.get(M.depthTexture).__webglTexture=n.__autoAllocateDepthBuffer?void 0:r,n.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,h){let r=v.get(M);r.__webglFramebuffer=h,r.__useDefaultFramebuffer=h===void 0},this.setRenderTarget=function(M,h=0,r=0){g=M,i=h,s=r;let n=null,d=!1,S0=!1;if(M){let w0=v.get(M);if(w0.__useDefaultFramebuffer!==void 0){A.bindFramebuffer(f.FRAMEBUFFER,w0.__webglFramebuffer),X0.copy(M.viewport),E0.copy(M.scissor),r0=M.scissorTest,A.viewport(X0),A.scissor(E0),A.setScissorTest(r0),H0=-1;return}else if(w0.__webglFramebuffer===void 0)o.setupRenderTarget(M);else if(w0.__hasExternalTextures)o.rebindTextures(M,v.get(M.texture).__webglTexture,v.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let XJ=M.depthTexture;if(w0.__boundDepthTexture!==XJ){if(XJ!==null&&v.has(XJ)&&(M.width!==XJ.image.width||M.height!==XJ.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");o.setupDepthRenderbuffer(M)}}let l0=M.texture;if(l0.isData3DTexture||l0.isDataArrayTexture||l0.isCompressedArrayTexture)S0=!0;let s0=v.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget){if(Array.isArray(s0[h]))n=s0[h][r];else n=s0[h];d=!0}else if(M.samples>0&&o.useMultisampledRTT(M)===!1)n=v.get(M).__webglMultisampledFramebuffer;else if(Array.isArray(s0))n=s0[r];else n=s0;X0.copy(M.viewport),E0.copy(M.scissor),r0=M.scissorTest}else X0.copy(J0).multiplyScalar(w).floor(),E0.copy(e).multiplyScalar(w).floor(),r0=D0;if(r!==0)n=x;if(A.bindFramebuffer(f.FRAMEBUFFER,n))A.drawBuffers(M,n);if(A.viewport(X0),A.scissor(E0),A.setScissorTest(r0),d){let w0=v.get(M.texture);f.framebufferTexture2D(f.FRAMEBUFFER,f.COLOR_ATTACHMENT0,f.TEXTURE_CUBE_MAP_POSITIVE_X+h,w0.__webglTexture,r)}else if(S0){let w0=h;for(let l0=0;l0<M.textures.length;l0++){let s0=v.get(M.textures[l0]);f.framebufferTextureLayer(f.FRAMEBUFFER,f.COLOR_ATTACHMENT0+l0,s0.__webglTexture,r,w0)}}else if(M!==null&&r!==0){let w0=v.get(M.texture);f.framebufferTexture2D(f.FRAMEBUFFER,f.COLOR_ATTACHMENT0,f.TEXTURE_2D,w0.__webglTexture,r)}H0=-1};function H6(M){let h=v.get(M);if(h.__readFormat!==M.format||h.__readType!==M.type)h.__readFormat=M.format,h.__readType=M.type,h.__formatReadable=EJ.textureFormatReadable(M.format),h.__typeReadable=EJ.textureTypeReadable(M.type);return h}if(this.readRenderTargetPixels=function(M,h,r,n,d,S0,m0,w0=0){if(!(M&&M.isWebGLRenderTarget)){$J("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let l0=v.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&m0!==void 0)l0=l0[m0];if(l0){A.bindFramebuffer(f.FRAMEBUFFER,l0);try{let s0=M.textures[w0],XJ=s0.format,qJ=s0.type;if(M.textures.length>1)f.readBuffer(f.COLOR_ATTACHMENT0+w0);let d0=H6(s0);if(d0.__formatReadable===!1){$J("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(d0.__typeReadable===!1){$J("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(h>=0&&h<=M.width-n&&(r>=0&&r<=M.height-d))f.readPixels(h,r,n,d,K0.convert(XJ),K0.convert(qJ),S0)}finally{let s0=g!==null?v.get(g).__webglFramebuffer:null;A.bindFramebuffer(f.FRAMEBUFFER,s0)}}},this.readRenderTargetPixelsAsync=async function(M,h,r,n,d,S0,m0,w0=0){if(!(M&&M.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let l0=v.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&m0!==void 0)l0=l0[m0];if(l0)if(h>=0&&h<=M.width-n&&(r>=0&&r<=M.height-d)){A.bindFramebuffer(f.FRAMEBUFFER,l0);let s0=M.textures[w0],XJ=s0.format,qJ=s0.type;if(M.textures.length>1)f.readBuffer(f.COLOR_ATTACHMENT0+w0);let d0=H6(s0);if(d0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(d0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let IJ=f.createBuffer();f.bindBuffer(f.PIXEL_PACK_BUFFER,IJ),f.bufferData(f.PIXEL_PACK_BUFFER,S0.byteLength,f.STREAM_READ),f.readPixels(h,r,n,d,K0.convert(XJ),K0.convert(qJ),0),f.bindBuffer(f.PIXEL_PACK_BUFFER,null);let bJ=g!==null?v.get(g).__webglFramebuffer:null;A.bindFramebuffer(f.FRAMEBUFFER,bJ);let cJ=f.fenceSync(f.SYNC_GPU_COMMANDS_COMPLETE,0);return f.flush(),await vH(f,cJ,4),f.bindBuffer(f.PIXEL_PACK_BUFFER,IJ),f.getBufferSubData(f.PIXEL_PACK_BUFFER,0,S0),f.bindBuffer(f.PIXEL_PACK_BUFFER,null),f.deleteBuffer(IJ),f.deleteSync(cJ),S0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,h=null,r=0){let n=Math.pow(2,-r),d=Math.floor(M.image.width*n),S0=Math.floor(M.image.height*n),m0=h!==null?h.x:0,w0=h!==null?h.y:0;o.setTexture2D(M,0),f.copyTexSubImage2D(f.TEXTURE_2D,r,0,0,m0,w0,d,S0),A.unbindTexture()},this.copyTextureToTexture=function(M,h,r=null,n=null,d=0,S0=0){let m0,w0,l0,s0,XJ,qJ,d0,IJ,bJ,cJ=M.isCompressedTexture?M.mipmaps[S0]:M.image;if(r!==null)m0=r.max.x-r.min.x,w0=r.max.y-r.min.y,l0=r.isBox3?r.max.z-r.min.z:1,s0=r.min.x,XJ=r.min.y,qJ=r.isBox3?r.min.z:0;else{let xJ=Math.pow(2,-d);if(m0=Math.floor(cJ.width*xJ),w0=Math.floor(cJ.height*xJ),M.isDataArrayTexture)l0=cJ.depth;else if(M.isData3DTexture)l0=Math.floor(cJ.depth*xJ);else l0=1;s0=0,XJ=0,qJ=0}if(n!==null)d0=n.x,IJ=n.y,bJ=n.z;else d0=0,IJ=0,bJ=0;let BJ=K0.convert(h.format),Y8=K0.convert(h.type),g0;if(h.isData3DTexture)o.setTexture3D(h,0),g0=f.TEXTURE_3D;else if(h.isDataArrayTexture||h.isCompressedArrayTexture)o.setTexture2DArray(h,0),g0=f.TEXTURE_2D_ARRAY;else o.setTexture2D(h,0),g0=f.TEXTURE_2D;A.activeTexture(f.TEXTURE0),A.pixelStorei(f.UNPACK_FLIP_Y_WEBGL,h.flipY),A.pixelStorei(f.UNPACK_PREMULTIPLY_ALPHA_WEBGL,h.premultiplyAlpha),A.pixelStorei(f.UNPACK_ALIGNMENT,h.unpackAlignment);let X8=A.getParameter(f.UNPACK_ROW_LENGTH),zJ=A.getParameter(f.UNPACK_IMAGE_HEIGHT),F8=A.getParameter(f.UNPACK_SKIP_PIXELS),S8=A.getParameter(f.UNPACK_SKIP_ROWS),Z9=A.getParameter(f.UNPACK_SKIP_IMAGES);A.pixelStorei(f.UNPACK_ROW_LENGTH,cJ.width),A.pixelStorei(f.UNPACK_IMAGE_HEIGHT,cJ.height),A.pixelStorei(f.UNPACK_SKIP_PIXELS,s0),A.pixelStorei(f.UNPACK_SKIP_ROWS,XJ),A.pixelStorei(f.UNPACK_SKIP_IMAGES,qJ);let b9=M.isDataArrayTexture||M.isData3DTexture,vJ=h.isDataArrayTexture||h.isData3DTexture;if(M.isDepthTexture){let xJ=v.get(M),M9=v.get(h),nJ=v.get(xJ.__renderTarget),C9=v.get(M9.__renderTarget);A.bindFramebuffer(f.READ_FRAMEBUFFER,nJ.__webglFramebuffer),A.bindFramebuffer(f.DRAW_FRAMEBUFFER,C9.__webglFramebuffer);for(let x9=0;x9<l0;x9++){if(b9)f.framebufferTextureLayer(f.READ_FRAMEBUFFER,f.COLOR_ATTACHMENT0,v.get(M).__webglTexture,d,qJ+x9),f.framebufferTextureLayer(f.DRAW_FRAMEBUFFER,f.COLOR_ATTACHMENT0,v.get(h).__webglTexture,S0,bJ+x9);f.blitFramebuffer(s0,XJ,m0,w0,d0,IJ,m0,w0,f.DEPTH_BUFFER_BIT,f.NEAREST)}A.bindFramebuffer(f.READ_FRAMEBUFFER,null),A.bindFramebuffer(f.DRAW_FRAMEBUFFER,null)}else if(d!==0||M.isRenderTargetTexture||v.has(M)){let xJ=v.get(M),M9=v.get(h);A.bindFramebuffer(f.READ_FRAMEBUFFER,t),A.bindFramebuffer(f.DRAW_FRAMEBUFFER,y);for(let nJ=0;nJ<l0;nJ++){if(b9)f.framebufferTextureLayer(f.READ_FRAMEBUFFER,f.COLOR_ATTACHMENT0,xJ.__webglTexture,d,qJ+nJ);else f.framebufferTexture2D(f.READ_FRAMEBUFFER,f.COLOR_ATTACHMENT0,f.TEXTURE_2D,xJ.__webglTexture,d);if(vJ)f.framebufferTextureLayer(f.DRAW_FRAMEBUFFER,f.COLOR_ATTACHMENT0,M9.__webglTexture,S0,bJ+nJ);else f.framebufferTexture2D(f.DRAW_FRAMEBUFFER,f.COLOR_ATTACHMENT0,f.TEXTURE_2D,M9.__webglTexture,S0);if(d!==0)f.blitFramebuffer(s0,XJ,m0,w0,d0,IJ,m0,w0,f.COLOR_BUFFER_BIT,f.NEAREST);else if(vJ)f.copyTexSubImage3D(g0,S0,d0,IJ,bJ+nJ,s0,XJ,m0,w0);else f.copyTexSubImage2D(g0,S0,d0,IJ,s0,XJ,m0,w0)}A.bindFramebuffer(f.READ_FRAMEBUFFER,null),A.bindFramebuffer(f.DRAW_FRAMEBUFFER,null)}else if(vJ)if(M.isDataTexture||M.isData3DTexture)f.texSubImage3D(g0,S0,d0,IJ,bJ,m0,w0,l0,BJ,Y8,cJ.data);else if(h.isCompressedArrayTexture)f.compressedTexSubImage3D(g0,S0,d0,IJ,bJ,m0,w0,l0,BJ,cJ.data);else f.texSubImage3D(g0,S0,d0,IJ,bJ,m0,w0,l0,BJ,Y8,cJ);else if(M.isDataTexture)f.texSubImage2D(f.TEXTURE_2D,S0,d0,IJ,m0,w0,BJ,Y8,cJ.data);else if(M.isCompressedTexture)f.compressedTexSubImage2D(f.TEXTURE_2D,S0,d0,IJ,cJ.width,cJ.height,BJ,cJ.data);else f.texSubImage2D(f.TEXTURE_2D,S0,d0,IJ,m0,w0,BJ,Y8,cJ);if(A.pixelStorei(f.UNPACK_ROW_LENGTH,X8),A.pixelStorei(f.UNPACK_IMAGE_HEIGHT,zJ),A.pixelStorei(f.UNPACK_SKIP_PIXELS,F8),A.pixelStorei(f.UNPACK_SKIP_ROWS,S8),A.pixelStorei(f.UNPACK_SKIP_IMAGES,Z9),S0===0&&h.generateMipmaps)f.generateMipmap(g0);A.unbindTexture()},this.initRenderTarget=function(M){if(v.get(M).__webglFramebuffer===void 0)o.setupRenderTarget(M)},this.initTexture=function(M){if(M.isCubeTexture)o.setTextureCube(M,0);else if(M.isData3DTexture)o.setTexture3D(M,0);else if(M.isDataArrayTexture||M.isCompressedArrayTexture)o.setTexture2DArray(M,0);else o.setTexture2D(M,0);A.unbindTexture()},this.resetState=function(){i=0,s=0,g=null,A.reset(),I0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return TW}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=NJ._getDrawingBufferColorSpace(J),Q.unpackColorSpace=NJ._getUnpackColorSpace()}}function uZ(J,Q=!1){let $=J[0].index!==null,Z=new Set(Object.keys(J[0].attributes)),K=new Set(Object.keys(J[0].morphAttributes)),W={},Y={},X=J[0].morphTargetsRelative,H=new mJ,U=0;for(let N=0;N<J.length;++N){let F=J[N],G=0;if($!==(F.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let E in F.attributes){if(!Z.has(E))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+'. All geometries must have compatible attributes; make sure "'+E+'" attribute exists among all geometries, or in none of them.'),null;if(W[E]===void 0)W[E]=[];W[E].push(F.attributes[E]),G++}if(G!==Z.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". Make sure all geometries have the same number of attributes."),null;if(X!==F.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let E in F.morphAttributes){if(!K.has(E))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+".  .morphAttributes must be consistent throughout all geometries."),null;if(Y[E]===void 0)Y[E]=[];Y[E].push(F.morphAttributes[E])}if(Q){let E;if($)E=F.index.count;else if(F.attributes.position!==void 0)E=F.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". The geometry must have either an index or a position attribute"),null;H.addGroup(U,E,N),U+=E}}if($){let N=0,F=[];for(let G=0;G<J.length;++G){let E=J[G].index;for(let O=0;O<E.count;++O)F.push(E.getX(O)+N);N+=J[G].attributes.position.count}H.setIndex(F)}for(let N in W){let F=wU(W[N]);if(!F)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+N+" attribute."),null;H.setAttribute(N,F)}for(let N in Y){let F=Y[N][0].length;if(F===0)continue;H.morphAttributes=H.morphAttributes||{},H.morphAttributes[N]=[];for(let G=0;G<F;++G){let E=[];for(let D=0;D<Y[N].length;++D)E.push(Y[N][D][G]);let O=wU(E);if(!O)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+N+" morphAttribute."),null;H.morphAttributes[N].push(O)}}return H}function wU(J){let Q,$,Z,K=-1,W=0;for(let U=0;U<J.length;++U){let N=J[U];if(Q===void 0)Q=N.array.constructor;if(Q!==N.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if($===void 0)$=N.itemSize;if($!==N.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(Z===void 0)Z=N.normalized;if(Z!==N.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(K===-1)K=N.gpuType;if(K!==N.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;W+=N.count*$}let Y=new Q(W),X=new tJ(Y,$,Z),H=0;for(let U=0;U<J.length;++U){let N=J[U];if(N.isInterleavedBufferAttribute){let F=H/$;for(let G=0,E=N.count;G<E;G++)for(let O=0;O<$;O++){let D=N.getComponent(G,O);X.setComponent(G+F,O,D)}}else Y.set(N.array,H);H+=N.count*$}if(K!==void 0)X.gpuType=K;return X}function EY(J,Q){if(Q===IW)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if(Q===p6||Q===pQ){let $=J.getIndex();if($===null){let W=[],Y=J.getAttribute("position");if(Y!==void 0){for(let X=0;X<Y.count;X++)W.push(X);J.setIndex(W),$=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let Z=$.count-2,K=[];if(Q===p6)for(let W=1;W<=Z;W++)K.push($.getX(0)),K.push($.getX(W)),K.push($.getX(W+1));else for(let W=0;W<Z;W++)if(W%2===0)K.push($.getX(W)),K.push($.getX(W+1)),K.push($.getX(W+2));else K.push($.getX(W+2)),K.push($.getX(W+1)),K.push($.getX(W));if(K.length/3!==Z)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return J.setIndex(K),J.clearGroups(),J}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",Q),J}function dZ(J){let Q=new Map,$=new Map,Z=J.clone();return jU(J,Z,function(K,W){Q.set(W,K),$.set(K,W)}),Z.traverse(function(K){if(!K.isSkinnedMesh)return;let W=K,Y=Q.get(K),X=Y.skeleton.bones;W.skeleton=Y.skeleton.clone(),W.bindMatrix.copy(Y.bindMatrix),W.skeleton.bones=X.map(function(H){return $.get(H)}),W.bind(W.skeleton,W.bindMatrix)}),Z}function jU(J,Q,$){$(J,Q);for(let Z=0;Z<J.children.length;Z++)jU(J.children[Z],Q.children[Z],$)}class BY extends a9{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(Q){return new pU(Q)}),this.register(function(Q){return new lU(Q)}),this.register(function(Q){return new aU(Q)}),this.register(function(Q){return new rU(Q)}),this.register(function(Q){return new tU(Q)}),this.register(function(Q){return new uU(Q)}),this.register(function(Q){return new dU(Q)}),this.register(function(Q){return new cU(Q)}),this.register(function(Q){return new nU(Q)}),this.register(function(Q){return new gU(Q)}),this.register(function(Q){return new sU(Q)}),this.register(function(Q){return new mU(Q)}),this.register(function(Q){return new oU(Q)}),this.register(function(Q){return new iU(Q)}),this.register(function(Q){return new bU(Q)}),this.register(function(Q){return new LY(Q,VJ.EXT_MESHOPT_COMPRESSION)}),this.register(function(Q){return new LY(Q,VJ.KHR_MESHOPT_COMPRESSION)}),this.register(function(Q){return new eU(Q)})}load(J,Q,$,Z){let K=this,W;if(this.resourcePath!=="")W=this.resourcePath;else if(this.path!==""){let H=B7.extractUrlBase(J);W=B7.resolveURL(H,this.path)}else W=B7.extractUrlBase(J);this.manager.itemStart(J);let Y=function(H){if(Z)Z(H);else console.error(H);K.manager.itemError(J),K.manager.itemEnd(J)},X=new eQ(this.manager);X.setPath(this.path),X.setResponseType("arraybuffer"),X.setRequestHeader(this.requestHeader),X.setWithCredentials(this.withCredentials),X.load(J,function(H){try{K.parse(H,W,function(U){Q(U),K.manager.itemEnd(J)},Y)}catch(U){Y(U)}},$,Y)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,Q,$,Z){let K,W={},Y={},X=new TextDecoder;if(typeof J==="string")K=JSON.parse(J);else if(J instanceof ArrayBuffer)if(X.decode(new Uint8Array(J,0,4))===J5){try{W[VJ.KHR_BINARY_GLTF]=new Q5(J)}catch(N){if(Z)Z(N);return}K=JSON.parse(W[VJ.KHR_BINARY_GLTF].content)}else K=JSON.parse(X.decode(J));else K=J;if(K.asset===void 0||K.asset.version[0]<2){if(Z)Z(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let H=new Y5(K,{path:Q||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});H.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let N=this.pluginCallbacks[U](H);if(!N.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");Y[N.name]=N,W[N.name]=!0}if(K.extensionsUsed)for(let U=0;U<K.extensionsUsed.length;++U){let N=K.extensionsUsed[U],F=K.extensionsRequired||[];switch(N){case VJ.KHR_MATERIALS_UNLIT:W[N]=new xU;break;case VJ.KHR_DRACO_MESH_COMPRESSION:W[N]=new $5(K,this.dracoLoader);break;case VJ.KHR_TEXTURE_TRANSFORM:W[N]=new Z5;break;case VJ.KHR_MESH_QUANTIZATION:W[N]=new K5;break;default:if(F.indexOf(N)>=0&&Y[N]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+N+'".')}}H.setExtensions(W),H.setPlugins(Y),H.parse($,Z)}parseAsync(J,Q){let $=this;return new Promise(function(Z,K){$.parse(J,Q,Z,K)})}}function QO(){let J={};return{get:function(Q){return J[Q]},add:function(Q,$){J[Q]=$},remove:function(Q){delete J[Q]},removeAll:function(){J={}}}}function $8(J,Q,$){let Z=J.json.materials[Q];if(Z.extensions&&Z.extensions[$])return Z.extensions[$];return null}var VJ={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class bU{constructor(J){this.parser=J,this.name=VJ.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,Q=this.parser.json.nodes||[];for(let $=0,Z=Q.length;$<Z;$++){let K=Q[$];if(K.extensions&&K.extensions[this.name]&&K.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,K.extensions[this.name].light)}}_loadLight(J){let Q=this.parser,$="light:"+J,Z=Q.cache.get($);if(Z)return Z;let K=Q.json,X=((K.extensions&&K.extensions[this.name]||{}).lights||[])[J],H,U=new h0(16777215);if(X.color!==void 0)U.setRGB(X.color[0],X.color[1],X.color[2],x8);let N=X.range!==void 0?X.range:0;switch(X.type){case"directional":H=new i6(U),H.target.position.set(0,0,-1),H.add(H.target);break;case"point":H=new r9(U),H.distance=N;break;case"spot":H=new s6(U),H.distance=N,X.spot=X.spot||{},X.spot.innerConeAngle=X.spot.innerConeAngle!==void 0?X.spot.innerConeAngle:0,X.spot.outerConeAngle=X.spot.outerConeAngle!==void 0?X.spot.outerConeAngle:Math.PI/4,H.angle=X.spot.outerConeAngle,H.penumbra=1-X.spot.innerConeAngle/X.spot.outerConeAngle,H.target.position.set(0,0,-1),H.add(H.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+X.type)}if(H.position.set(0,0,0),v9(H,X),X.intensity!==void 0)H.intensity=X.intensity;return H.name=Q.createUniqueName(X.name||"light_"+J),Z=Promise.resolve(H),Q.cache.add($,Z),Z}getDependency(J,Q){if(J!=="light")return;return this._loadLight(Q)}createNodeAttachment(J){let Q=this,$=this.parser,K=$.json.nodes[J],Y=(K.extensions&&K.extensions[this.name]||{}).light;if(Y===void 0)return null;return this._loadLight(Y).then(function(X){return $._getNodeRef(Q.cache,Y,X)})}}class xU{constructor(){this.name=VJ.KHR_MATERIALS_UNLIT}getMaterialType(){return sJ}extendParams(J,Q,$){let Z=[];J.color=new h0(1,1,1),J.opacity=1;let K=Q.pbrMetallicRoughness;if(K){if(Array.isArray(K.baseColorFactor)){let W=K.baseColorFactor;J.color.setRGB(W[0],W[1],W[2],x8),J.opacity=W[3]}if(K.baseColorTexture!==void 0)Z.push($.assignTexture(J,"map",K.baseColorTexture,J8))}return Promise.all(Z)}}class gU{constructor(J){this.parser=J,this.name=VJ.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();if($.emissiveStrength!==void 0)Q.emissiveIntensity=$.emissiveStrength;return Promise.resolve()}}class pU{constructor(J){this.parser=J,this.name=VJ.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){return $8(this.parser,J,this.name)!==null?R8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.clearcoatFactor!==void 0)Q.clearcoat=$.clearcoatFactor;if($.clearcoatTexture!==void 0)Z.push(this.parser.assignTexture(Q,"clearcoatMap",$.clearcoatTexture));if($.clearcoatRoughnessFactor!==void 0)Q.clearcoatRoughness=$.clearcoatRoughnessFactor;if($.clearcoatRoughnessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"clearcoatRoughnessMap",$.clearcoatRoughnessTexture));if($.clearcoatNormalTexture!==void 0){if(Z.push(this.parser.assignTexture(Q,"clearcoatNormalMap",$.clearcoatNormalTexture)),$.clearcoatNormalTexture.scale!==void 0){let K=$.clearcoatNormalTexture.scale;Q.clearcoatNormalScale=new N0(K,K)}}return Promise.all(Z)}}class lU{constructor(J){this.parser=J,this.name=VJ.KHR_MATERIALS_DISPERSION}getMaterialType(J){return $8(this.parser,J,this.name)!==null?R8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();return Q.dispersion=$.dispersion!==void 0?$.dispersion:0,Promise.resolve()}}class mU{constructor(J){this.parser=J,this.name=VJ.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){return $8(this.parser,J,this.name)!==null?R8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.iridescenceFactor!==void 0)Q.iridescence=$.iridescenceFactor;if($.iridescenceTexture!==void 0)Z.push(this.parser.assignTexture(Q,"iridescenceMap",$.iridescenceTexture));if($.iridescenceIor!==void 0)Q.iridescenceIOR=$.iridescenceIor;if(Q.iridescenceThicknessRange===void 0)Q.iridescenceThicknessRange=[100,400];if($.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessRange[0]=$.iridescenceThicknessMinimum;if($.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessRange[1]=$.iridescenceThicknessMaximum;if($.iridescenceThicknessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"iridescenceThicknessMap",$.iridescenceThicknessTexture));return Promise.all(Z)}}class uU{constructor(J){this.parser=J,this.name=VJ.KHR_MATERIALS_SHEEN}getMaterialType(J){return $8(this.parser,J,this.name)!==null?R8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.sheenColor=new h0(0,0,0),Q.sheenRoughness=0,Q.sheen=1,$.sheenColorFactor!==void 0){let K=$.sheenColorFactor;Q.sheenColor.setRGB(K[0],K[1],K[2],x8)}if($.sheenRoughnessFactor!==void 0)Q.sheenRoughness=$.sheenRoughnessFactor;if($.sheenColorTexture!==void 0)Z.push(this.parser.assignTexture(Q,"sheenColorMap",$.sheenColorTexture,J8));if($.sheenRoughnessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"sheenRoughnessMap",$.sheenRoughnessTexture));return Promise.all(Z)}}class dU{constructor(J){this.parser=J,this.name=VJ.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){return $8(this.parser,J,this.name)!==null?R8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.transmissionFactor!==void 0)Q.transmission=$.transmissionFactor;if($.transmissionTexture!==void 0)Z.push(this.parser.assignTexture(Q,"transmissionMap",$.transmissionTexture));return Promise.all(Z)}}class cU{constructor(J){this.parser=J,this.name=VJ.KHR_MATERIALS_VOLUME}getMaterialType(J){return $8(this.parser,J,this.name)!==null?R8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.thickness=$.thicknessFactor!==void 0?$.thicknessFactor:0,$.thicknessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"thicknessMap",$.thicknessTexture));Q.attenuationDistance=$.attenuationDistance||1/0;let K=$.attenuationColor||[1,1,1];return Q.attenuationColor=new h0().setRGB(K[0],K[1],K[2],x8),Promise.all(Z)}}class nU{constructor(J){this.parser=J,this.name=VJ.KHR_MATERIALS_IOR}getMaterialType(J){return $8(this.parser,J,this.name)!==null?R8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();if(Q.ior=$.ior!==void 0?$.ior:1.5,Q.ior===0)Q.ior=1000;return Promise.resolve()}}class sU{constructor(J){this.parser=J,this.name=VJ.KHR_MATERIALS_SPECULAR}getMaterialType(J){return $8(this.parser,J,this.name)!==null?R8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.specularIntensity=$.specularFactor!==void 0?$.specularFactor:1,$.specularTexture!==void 0)Z.push(this.parser.assignTexture(Q,"specularIntensityMap",$.specularTexture));let K=$.specularColorFactor||[1,1,1];if(Q.specularColor=new h0().setRGB(K[0],K[1],K[2],x8),$.specularColorTexture!==void 0)Z.push(this.parser.assignTexture(Q,"specularColorMap",$.specularColorTexture,J8));return Promise.all(Z)}}class iU{constructor(J){this.parser=J,this.name=VJ.EXT_MATERIALS_BUMP}getMaterialType(J){return $8(this.parser,J,this.name)!==null?R8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.bumpScale=$.bumpFactor!==void 0?$.bumpFactor:1,$.bumpTexture!==void 0)Z.push(this.parser.assignTexture(Q,"bumpMap",$.bumpTexture));return Promise.all(Z)}}class oU{constructor(J){this.parser=J,this.name=VJ.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){return $8(this.parser,J,this.name)!==null?R8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.anisotropyStrength!==void 0)Q.anisotropy=$.anisotropyStrength;if($.anisotropyRotation!==void 0)Q.anisotropyRotation=$.anisotropyRotation;if($.anisotropyTexture!==void 0)Z.push(this.parser.assignTexture(Q,"anisotropyMap",$.anisotropyTexture));return Promise.all(Z)}}class aU{constructor(J){this.parser=J,this.name=VJ.KHR_TEXTURE_BASISU}loadTexture(J){let Q=this.parser,$=Q.json,Z=$.textures[J];if(!Z.extensions||!Z.extensions[this.name])return null;let K=Z.extensions[this.name],W=Q.options.ktx2Loader;if(!W)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return Q.loadTextureImage(J,K.source,W)}}class rU{constructor(J){this.parser=J,this.name=VJ.EXT_TEXTURE_WEBP}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,K=Z.textures[J];if(!K.extensions||!K.extensions[Q])return null;let W=K.extensions[Q],Y=Z.images[W.source],X=$.textureLoader;if(Y.uri){let H=$.options.manager.getHandler(Y.uri);if(H!==null)X=H}return $.loadTextureImage(J,W.source,X)}}class tU{constructor(J){this.parser=J,this.name=VJ.EXT_TEXTURE_AVIF}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,K=Z.textures[J];if(!K.extensions||!K.extensions[Q])return null;let W=K.extensions[Q],Y=Z.images[W.source],X=$.textureLoader;if(Y.uri){let H=$.options.manager.getHandler(Y.uri);if(H!==null)X=H}return $.loadTextureImage(J,W.source,X)}}class LY{constructor(J,Q){this.name=Q,this.parser=J}loadBufferView(J){let Q=this.parser.json,$=Q.bufferViews[J];if($.extensions&&$.extensions[this.name]){let Z=$.extensions[this.name],K=this.parser.getDependency("buffer",Z.buffer),W=this.parser.options.meshoptDecoder;if(!W||!W.supported)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return K.then(function(Y){let X=Z.byteOffset||0,H=Z.byteLength||0,U=Z.count,N=Z.byteStride,F=new Uint8Array(Y,X,H);if(W.decodeGltfBufferAsync)return W.decodeGltfBufferAsync(U,N,F,Z.mode,Z.filter).then(function(G){return G.buffer});else return W.ready.then(function(){let G=new ArrayBuffer(U*N);return W.decodeGltfBuffer(new Uint8Array(G),U,N,F,Z.mode,Z.filter),G})})}else return null}}class eU{constructor(J){this.name=VJ.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let Q=this.parser.json,$=Q.nodes[J];if(!$.extensions||!$.extensions[this.name]||$.mesh===void 0)return null;let Z=Q.meshes[$.mesh];for(let H of Z.primitives)if(H.mode!==o8.TRIANGLES&&H.mode!==o8.TRIANGLE_STRIP&&H.mode!==o8.TRIANGLE_FAN&&H.mode!==void 0)return null;let W=$.extensions[this.name].attributes,Y=[],X={};for(let H in W)Y.push(this.parser.getDependency("accessor",W[H]).then((U)=>{return X[H]=U,X[H]}));if(Y.length<1)return null;return Y.push(this.parser.createNodeMesh(J)),Promise.all(Y).then((H)=>{let U=H.pop(),N=U.isGroup?U.children:[U],F=H[0].count,G=[];for(let E of N){let O=new QJ,D=new S,R=new PJ,q=new S(1,1,1),C=new S9(E.geometry,E.material,F);for(let L=0;L<F;L++){if(X.TRANSLATION)D.fromBufferAttribute(X.TRANSLATION,L);if(X.ROTATION)R.fromBufferAttribute(X.ROTATION,L);if(X.SCALE)q.fromBufferAttribute(X.SCALE,L);C.setMatrixAt(L,O.compose(D,R,q))}let z=null;for(let L in X)if(L==="_COLOR_0"){let V=X[L];C.instanceColor=new H7(V.array,V.itemSize,V.normalized)}else if(L!=="TRANSLATION"&&L!=="ROTATION"&&L!=="SCALE"){if(z===null){let P=C.geometry;z=new mJ,z.name=P.name;for(let T in P.attributes)z.setAttribute(T,P.attributes[T]);for(let T in P.morphAttributes)z.morphAttributes[T]=P.morphAttributes[T];if(P.index!==null)z.setIndex(P.index);z.morphTargetsRelative=P.morphTargetsRelative;for(let T of P.groups)z.addGroup(T.start,T.count,T.materialIndex);if(P.boundingBox!==null)z.boundingBox=P.boundingBox.clone();if(P.boundingSphere!==null)z.boundingSphere=P.boundingSphere.clone();z.drawRange.start=P.drawRange.start,z.drawRange.count=P.drawRange.count,z.userData=Object.assign({},P.userData),C.geometry=z}let V=X[L];z.setAttribute(L,new H7(V.array,V.itemSize,V.normalized))}SJ.prototype.copy.call(C,E),this.parser.assignFinalMaterial(C),G.push(C)}if(U.isGroup)return U.clear(),U.add(...G),U;return G[0]})}}var J5="glTF",H$=12,yU={JSON:1313821514,BIN:5130562};class Q5{constructor(J){this.name=VJ.KHR_BINARY_GLTF,this.content=null,this.body=null;let Q=new DataView(J,0,H$),$=new TextDecoder;if(this.header={magic:$.decode(new Uint8Array(J.slice(0,4))),version:Q.getUint32(4,!0),length:Q.getUint32(8,!0)},this.header.magic!==J5)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let Z=this.header.length-H$,K=new DataView(J,H$),W=0;while(W<Z){let Y=K.getUint32(W,!0);W+=4;let X=K.getUint32(W,!0);if(W+=4,X===yU.JSON){let H=new Uint8Array(J,H$+W,Y);this.content=$.decode(H)}else if(X===yU.BIN){let H=H$+W;this.body=J.slice(H,H+Y)}W+=Y}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class $5{constructor(J,Q){if(!Q)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=VJ.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=Q,this.dracoLoader.preload()}decodePrimitive(J,Q){let $=this.json,Z=this.dracoLoader,K=J.extensions[this.name].bufferView,W=J.extensions[this.name].attributes,Y={},X={},H={};for(let U in W){let N=VY[U]||U.toLowerCase();Y[N]=W[U]}for(let U in J.attributes){let N=VY[U]||U.toLowerCase();if(W[U]!==void 0){let F=$.accessors[J.attributes[U]],G=e6[F.componentType];H[N]=G.name,X[N]=F.normalized===!0}}return Q.getDependency("bufferView",K).then(function(U){return new Promise(function(N,F){Z.decodeDracoFile(U,function(G){for(let E in G.attributes){let O=G.attributes[E],D=X[E];if(D!==void 0)O.normalized=D}N(G)},Y,H,x8,F)})})}}class Z5{constructor(){this.name=VJ.KHR_TEXTURE_TRANSFORM}extendTexture(J,Q){if((Q.texCoord===void 0||Q.texCoord===J.channel)&&Q.offset===void 0&&Q.rotation===void 0&&Q.scale===void 0)return J;if(J=J.clone(),Q.texCoord!==void 0)J.channel=Q.texCoord;if(Q.offset!==void 0)J.offset.fromArray(Q.offset);if(Q.rotation!==void 0)J.rotation=Q.rotation;if(Q.scale!==void 0)J.repeat.fromArray(Q.scale);if(Q.rotation!==void 0){let $=Math.cos(J.rotation),Z=Math.sin(J.rotation);J.matrix.set(J.repeat.x*$,J.repeat.y*Z,J.offset.x,-J.repeat.x*Z,J.repeat.y*$,J.offset.y,0,0,1),J.matrixAutoUpdate=!1}return J.needsUpdate=!0,J}}class K5{constructor(){this.name=VJ.KHR_MESH_QUANTIZATION}}class kY extends o9{constructor(J,Q,$,Z){super(J,Q,$,Z)}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,K=J*Z*3+Z;for(let W=0;W!==Z;W++)Q[W]=$[K+W];return Q}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=Y*2,H=Y*3,U=Z-Q,N=($-Q)/U,F=N*N,G=F*N,E=J*H,O=E-H,D=-2*G+3*F,R=G-F,q=1-D,C=R-F+N;for(let z=0;z!==Y;z++){let L=W[O+z+Y],V=W[O+z+X]*U,P=W[E+z+Y],T=W[E+z]*U;K[z]=q*L+C*V+D*P+R*T}return K}}var $O=new PJ;class W5 extends kY{interpolate_(J,Q,$,Z){let K=super.interpolate_(J,Q,$,Z);return $O.fromArray(K).normalize().toArray(K),K}}var o8={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},e6={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},vU={9728:N9,9729:q8,9984:XZ,9985:x6,9986:h7,9987:A9},fU={33071:b6,33648:YZ,10497:F7},qY={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},VY={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},k7={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ZO={CUBICSPLINE:void 0,LINEAR:qZ,STEP:PW},OY={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function KO(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new i0({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:G7});return J.DefaultMaterial}function o7(J,Q,$){for(let Z in $.extensions)if(J[Z]===void 0)Q.userData.gltfExtensions=Q.userData.gltfExtensions||{},Q.userData.gltfExtensions[Z]=$.extensions[Z]}function v9(J,Q){if(Q.extras!==void 0)if(typeof Q.extras==="object")Object.assign(J.userData,Q.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+Q.extras)}function WO(J,Q,$){let Z=!1,K=!1,W=!1;for(let U=0,N=Q.length;U<N;U++){let F=Q[U];if(F.POSITION!==void 0)Z=!0;if(F.NORMAL!==void 0)K=!0;if(F.COLOR_0!==void 0)W=!0;if(Z&&K&&W)break}if(!Z&&!K&&!W)return Promise.resolve(J);let Y=[],X=[],H=[];for(let U=0,N=Q.length;U<N;U++){let F=Q[U];if(Z){let G=F.POSITION!==void 0?$.getDependency("accessor",F.POSITION):J.attributes.position;Y.push(G)}if(K){let G=F.NORMAL!==void 0?$.getDependency("accessor",F.NORMAL):J.attributes.normal;X.push(G)}if(W){let G=F.COLOR_0!==void 0?$.getDependency("accessor",F.COLOR_0):J.attributes.color;H.push(G)}}return Promise.all([Promise.all(Y),Promise.all(X),Promise.all(H)]).then(function(U){let N=U[0],F=U[1],G=U[2];if(Z)J.morphAttributes.position=N;if(K)J.morphAttributes.normal=F;if(W)J.morphAttributes.color=G;return J.morphTargetsRelative=!0,J})}function YO(J,Q){if(J.updateMorphTargets(),Q.weights!==void 0)for(let $=0,Z=Q.weights.length;$<Z;$++)J.morphTargetInfluences[$]=Q.weights[$];if(Q.extras&&Array.isArray(Q.extras.targetNames)){let $=Q.extras.targetNames;if(J.morphTargetInfluences.length===$.length){J.morphTargetDictionary={};for(let Z=0,K=$.length;Z<K;Z++)J.morphTargetDictionary[$[Z]]=Z}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function XO(J){let Q,$=J.extensions&&J.extensions[VJ.KHR_DRACO_MESH_COMPRESSION];if($)Q="draco:"+$.bufferView+":"+$.indices+":"+RY($.attributes);else Q=J.indices+":"+RY(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let Z=0,K=J.targets.length;Z<K;Z++)Q+=":"+RY(J.targets[Z]);return Q}function RY(J){let Q="",$=Object.keys(J).sort();for(let Z=0,K=$.length;Z<K;Z++)Q+=$[Z]+":"+J[$[Z]]+";";return Q}function DY(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function HO(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var UO=new QJ;class Y5{constructor(J={},Q={}){this.json=J,this.extensions={},this.plugins={},this.options=Q,this.cache=new QO,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let $=!1,Z=-1,K=!1,W=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let Y=navigator.userAgent;$=/^((?!chrome|android).)*safari/i.test(Y)===!0;let X=Y.match(/Version\/(\d+)/);Z=$&&X?parseInt(X[1],10):-1,K=Y.indexOf("Firefox")>-1,W=K?Y.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||$&&Z<17||K&&W<98)this.textureLoader=new jZ(this.options.manager);else this.textureLoader=new fZ(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new eQ(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,Q){let $=this,Z=this.json,K=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(W){return W._markDefs&&W._markDefs()}),Promise.all(this._invokeAll(function(W){return W.beforeRoot&&W.beforeRoot()})).then(function(){return Promise.all([$.getDependencies("scene"),$.getDependencies("animation"),$.getDependencies("camera")])}).then(function(W){let Y={scene:W[0][Z.scene||0],scenes:W[0],animations:W[1],cameras:W[2],asset:Z.asset,parser:$,userData:{}};return o7(K,Y,Z),v9(Y,Z),Promise.all($._invokeAll(function(X){return X.afterRoot&&X.afterRoot(Y)})).then(function(){for(let X of Y.scenes)X.updateMatrixWorld();J(Y)})}).catch(Q)}_markDefs(){let J=this.json.nodes||[],Q=this.json.skins||[],$=this.json.meshes||[];for(let Z=0,K=Q.length;Z<K;Z++){let W=Q[Z].joints;for(let Y=0,X=W.length;Y<X;Y++)J[W[Y]].isBone=!0}for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];if(W.mesh!==void 0){if(this._addNodeRef(this.meshCache,W.mesh),W.skin!==void 0)$[W.mesh].isSkinnedMesh=!0}if(W.camera!==void 0)this._addNodeRef(this.cameraCache,W.camera)}}_addNodeRef(J,Q){if(Q===void 0)return;if(J.refs[Q]===void 0)J.refs[Q]=J.uses[Q]=0;J.refs[Q]++}_getNodeRef(J,Q,$){if(J.refs[Q]<=1)return $;let Z=$.clone(),K=(W,Y)=>{let X=this.associations.get(W);if(X!=null)this.associations.set(Y,X);for(let[H,U]of W.children.entries())K(U,Y.children[H])};return K($,Z),Z.name+="_instance_"+J.uses[Q]++,Z}_invokeOne(J){let Q=Object.values(this.plugins);Q.push(this);for(let $=0;$<Q.length;$++){let Z=J(Q[$]);if(Z)return Z}return null}_invokeAll(J){let Q=Object.values(this.plugins);Q.unshift(this);let $=[];for(let Z=0;Z<Q.length;Z++){let K=J(Q[Z]);if(K)$.push(K)}return $}getDependency(J,Q){let $=J+":"+Q,Z=this.cache.get($);if(!Z){switch(J){case"scene":Z=this.loadScene(Q);break;case"node":Z=this._invokeOne(function(K){return K.loadNode&&K.loadNode(Q)});break;case"mesh":Z=this._invokeOne(function(K){return K.loadMesh&&K.loadMesh(Q)});break;case"accessor":Z=this.loadAccessor(Q);break;case"bufferView":Z=this._invokeOne(function(K){return K.loadBufferView&&K.loadBufferView(Q)});break;case"buffer":Z=this.loadBuffer(Q);break;case"material":Z=this._invokeOne(function(K){return K.loadMaterial&&K.loadMaterial(Q)});break;case"texture":Z=this._invokeOne(function(K){return K.loadTexture&&K.loadTexture(Q)});break;case"skin":Z=this.loadSkin(Q);break;case"animation":Z=this._invokeOne(function(K){return K.loadAnimation&&K.loadAnimation(Q)});break;case"camera":Z=this.loadCamera(Q);break;default:if(Z=this._invokeOne(function(K){return K!=this&&K.getDependency&&K.getDependency(J,Q)}),!Z)throw Error("Unknown type: "+J);break}this.cache.add($,Z)}return Z}getDependencies(J){let Q=this.cache.get(J);if(!Q){let $=this,Z=this.json[J+(J==="mesh"?"es":"s")]||[];Q=Promise.all(Z.map(function(K,W){return $.getDependency(J,W)})),this.cache.add(J,Q)}return Q}loadBuffer(J){let Q=this.json.buffers[J],$=this.fileLoader;if(Q.type&&Q.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+Q.type+" buffer type is not supported.");if(Q.uri===void 0&&J===0)return Promise.resolve(this.extensions[VJ.KHR_BINARY_GLTF].body);let Z=this.options;return new Promise(function(K,W){$.load(B7.resolveURL(Q.uri,Z.path),K,void 0,function(){W(Error('THREE.GLTFLoader: Failed to load buffer "'+Q.uri+'".'))})})}loadBufferView(J){let Q=this.json.bufferViews[J];return this.getDependency("buffer",Q.buffer).then(function($){let Z=Q.byteLength||0,K=Q.byteOffset||0;return $.slice(K,K+Z)})}loadAccessor(J){let Q=this,$=this.json,Z=this.json.accessors[J];if(Z.bufferView===void 0&&Z.sparse===void 0){let W=qY[Z.type],Y=e6[Z.componentType],X=Z.normalized===!0,H=new Y(Z.count*W);return Promise.resolve(new tJ(H,W,X))}let K=[];if(Z.bufferView!==void 0)K.push(this.getDependency("bufferView",Z.bufferView));else K.push(null);if(Z.sparse!==void 0)K.push(this.getDependency("bufferView",Z.sparse.indices.bufferView)),K.push(this.getDependency("bufferView",Z.sparse.values.bufferView));return Promise.all(K).then(function(W){let Y=W[0],X=qY[Z.type],H=e6[Z.componentType],U=H.BYTES_PER_ELEMENT,N=U*X,F=Z.byteOffset||0,G=Z.bufferView!==void 0?$.bufferViews[Z.bufferView].byteStride:void 0,E=Z.normalized===!0,O,D;if(G&&G!==N){let R=Math.floor(F/G),q="InterleavedBuffer:"+Z.bufferView+":"+Z.componentType+":"+R+":"+Z.count,C=Q.cache.get(q);if(!C)O=new H(Y,R*G,Z.count*G/U),C=new m6(O,G/U),Q.cache.add(q,C);D=new X7(C,X,F%G/U,E)}else{if(Y===null)O=new H(Z.count*X);else O=new H(Y,F,Z.count*X);D=new tJ(O,X,E)}if(Z.sparse!==void 0){let R=qY.SCALAR,q=e6[Z.sparse.indices.componentType],C=Z.sparse.indices.byteOffset||0,z=Z.sparse.values.byteOffset||0,L=new q(W[1],C,Z.sparse.count*R),V=new H(W[2],z,Z.sparse.count*X);if(Y!==null)D=new tJ(D.array.slice(),D.itemSize,D.normalized);D.normalized=!1;for(let P=0,T=L.length;P<T;P++){let B=L[P];if(D.setX(B,V[P*X]),X>=2)D.setY(B,V[P*X+1]);if(X>=3)D.setZ(B,V[P*X+2]);if(X>=4)D.setW(B,V[P*X+3]);if(X>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}D.normalized=E}return D})}loadTexture(J){let Q=this.json,$=this.options,K=Q.textures[J].source,W=Q.images[K],Y=this.textureLoader;if(W.uri){let X=$.manager.getHandler(W.uri);if(X!==null)Y=X}return this.loadTextureImage(J,K,Y)}loadTextureImage(J,Q,$){let Z=this,K=this.json,W=K.textures[J],Y=K.images[Q],X=(Y.uri||Y.bufferView)+":"+W.sampler;if(this.textureCache[X])return this.textureCache[X];let H=this.loadImageSource(Q,$).then(function(U){if(U.flipY=!1,U.name=W.name||Y.name||"",U.name===""&&typeof Y.uri==="string"&&Y.uri.startsWith("data:image/")===!1)U.name=Y.uri;let F=(K.samplers||{})[W.sampler]||{};return U.magFilter=vU[F.magFilter]||q8,U.minFilter=vU[F.minFilter]||A9,U.wrapS=fU[F.wrapS]||F7,U.wrapT=fU[F.wrapT]||F7,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==N9&&U.minFilter!==q8,Z.associations.set(U,{textures:J}),U}).catch(function(){return null});return this.textureCache[X]=H,H}loadImageSource(J,Q){let $=this,Z=this.json,K=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((N)=>N.clone());let W=Z.images[J],Y=self.URL||self.webkitURL,X=W.uri||"",H=!1;if(W.bufferView!==void 0)X=$.getDependency("bufferView",W.bufferView).then(function(N){H=!0;let F=new Blob([N],{type:W.mimeType});return X=Y.createObjectURL(F),X});else if(W.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let U=Promise.resolve(X).then(function(N){return new Promise(function(F,G){let E=F;if(Q.isImageBitmapLoader===!0)E=function(O){let D=new eJ(O);D.needsUpdate=!0,F(D)};Q.load(B7.resolveURL(N,K.path),E,void 0,G)})}).then(function(N){if(H===!0)Y.revokeObjectURL(X);return v9(N,W),N.userData.mimeType=W.mimeType||HO(W.uri),N}).catch(function(N){throw console.error("THREE.GLTFLoader: Couldn't load texture",X),N});return this.sourceCache[J]=U,U}assignTexture(J,Q,$,Z){let K=this;return this.getDependency("texture",$.index).then(function(W){if(!W)return null;if($.texCoord!==void 0&&$.texCoord>0)W=W.clone(),W.channel=$.texCoord;if(K.extensions[VJ.KHR_TEXTURE_TRANSFORM]){let Y=$.extensions!==void 0?$.extensions[VJ.KHR_TEXTURE_TRANSFORM]:void 0;if(Y){let X=K.associations.get(W);W=K.extensions[VJ.KHR_TEXTURE_TRANSFORM].extendTexture(W,Y),K.associations.set(W,X)}}if(Z!==void 0)W.colorSpace=Z;return J[Q]=W,W})}assignFinalMaterial(J){let{geometry:Q,material:$}=J,Z=Q.attributes.tangent===void 0,K=Q.attributes.color!==void 0,W=Q.attributes.normal===void 0;if(J.isPoints){let Y="PointsMaterial:"+$.uuid,X=this.cache.get(Y);if(!X)X=new u7,w8.prototype.copy.call(X,$),X.color.copy($.color),X.map=$.map,X.sizeAttenuation=!1,this.cache.add(Y,X);$=X}else if(J.isLine){let Y="LineBasicMaterial:"+$.uuid,X=this.cache.get(Y);if(!X)X=new sQ,w8.prototype.copy.call(X,$),X.color.copy($.color),X.map=$.map,this.cache.add(Y,X);$=X}if(Z||K||W){let Y="ClonedMaterial:"+$.uuid+":";if(Z)Y+="derivative-tangents:";if(K)Y+="vertex-colors:";if(W)Y+="flat-shading:";let X=this.cache.get(Y);if(!X){if(X=$.clone(),K)X.vertexColors=!0;if(W)X.flatShading=!0;if(Z){if(X.normalScale)X.normalScale.y*=-1;if(X.clearcoatNormalScale)X.clearcoatNormalScale.y*=-1}this.cache.add(Y,X),this.associations.set(X,this.associations.get($))}$=X}J.material=$}getMaterialType(){return i0}loadMaterial(J){let Q=this,$=this.json,Z=this.extensions,K=$.materials[J],W,Y={},X=K.extensions||{},H=[];if(X[VJ.KHR_MATERIALS_UNLIT]){let N=Z[VJ.KHR_MATERIALS_UNLIT];W=N.getMaterialType(),H.push(N.extendParams(Y,K,Q))}else{let N=K.pbrMetallicRoughness||{};if(Y.color=new h0(1,1,1),Y.opacity=1,Array.isArray(N.baseColorFactor)){let F=N.baseColorFactor;Y.color.setRGB(F[0],F[1],F[2],x8),Y.opacity=F[3]}if(N.baseColorTexture!==void 0)H.push(Q.assignTexture(Y,"map",N.baseColorTexture,J8));if(Y.metalness=N.metallicFactor!==void 0?N.metallicFactor:1,Y.roughness=N.roughnessFactor!==void 0?N.roughnessFactor:1,N.metallicRoughnessTexture!==void 0)H.push(Q.assignTexture(Y,"metalnessMap",N.metallicRoughnessTexture)),H.push(Q.assignTexture(Y,"roughnessMap",N.metallicRoughnessTexture));W=this._invokeOne(function(F){return F.getMaterialType&&F.getMaterialType(J)}),H.push(Promise.all(this._invokeAll(function(F){return F.extendMaterialParams&&F.extendMaterialParams(J,Y)})))}if(K.doubleSided===!0)Y.side=oJ;let U=K.alphaMode||OY.OPAQUE;if(U===OY.BLEND)Y.transparent=!0,Y.depthWrite=!1;else if(Y.transparent=!1,U===OY.MASK)Y.alphaTest=K.alphaCutoff!==void 0?K.alphaCutoff:0.5;if(K.normalTexture!==void 0&&W!==sJ){if(H.push(Q.assignTexture(Y,"normalMap",K.normalTexture)),Y.normalScale=new N0(1,1),K.normalTexture.scale!==void 0){let N=K.normalTexture.scale;Y.normalScale.set(N,N)}}if(K.occlusionTexture!==void 0&&W!==sJ){if(H.push(Q.assignTexture(Y,"aoMap",K.occlusionTexture)),K.occlusionTexture.strength!==void 0)Y.aoMapIntensity=K.occlusionTexture.strength}if(K.emissiveFactor!==void 0&&W!==sJ){let N=K.emissiveFactor;Y.emissive=new h0().setRGB(N[0],N[1],N[2],x8)}if(K.emissiveTexture!==void 0&&W!==sJ)H.push(Q.assignTexture(Y,"emissiveMap",K.emissiveTexture,J8));return Promise.all(H).then(function(){let N=new W(Y);if(K.name)N.name=K.name;if(v9(N,K),Q.associations.set(N,{materials:J}),K.extensions)o7(Z,N,K);return N})}createUniqueName(J){let Q=jJ.sanitizeNodeName(J||"");if(Q in this.nodeNamesUsed)return Q+"_"+ ++this.nodeNamesUsed[Q];else return this.nodeNamesUsed[Q]=0,Q}loadGeometries(J){let Q=this,$=this.extensions,Z=this.primitiveCache;function K(Y){return $[VJ.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(Y,Q).then(function(X){return hU(X,Y,Q)})}let W=[];for(let Y=0,X=J.length;Y<X;Y++){let H=J[Y],U=XO(H),N=Z[U];if(N)W.push(N.promise);else{let F;if(H.extensions&&H.extensions[VJ.KHR_DRACO_MESH_COMPRESSION])F=K(H);else F=hU(new mJ,H,Q);if(H.mode===o8.TRIANGLE_STRIP)F=F.then((G)=>EY(G,pQ));else if(H.mode===o8.TRIANGLE_FAN)F=F.then((G)=>EY(G,p6));Z[U]={primitive:H,promise:F},W.push(F)}}return Promise.all(W)}loadMesh(J){let Q=this,$=this.json,Z=this.extensions,K=$.meshes[J],W=K.primitives,Y=[];for(let X=0,H=W.length;X<H;X++){let U=W[X].material===void 0?KO(this.cache):this.getDependency("material",W[X].material);Y.push(U)}return Y.push(Q.loadGeometries(W)),Promise.all(Y).then(async function(X){let H=X.slice(0,X.length-1),U=X[X.length-1],N=[];for(let G=0,E=U.length;G<E;G++){let O=U[G],D=W[G],R,q=H[G];if(D.mode===o8.TRIANGLES||D.mode===o8.TRIANGLE_STRIP||D.mode===o8.TRIANGLE_FAN||D.mode===void 0){let C=K.isSkinnedMesh===!0,z=O.hasAttribute("skinIndex")&&O.hasAttribute("skinWeight");if(C&&z===!1)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(R=C&&z?new kZ(O,q):new C0(O,q),R.isSkinnedMesh===!0)R.normalizeSkinWeights()}else if(D.mode===o8.LINES)R=new MZ(O,q);else if(D.mode===o8.LINE_STRIP)R=new d6(O,q);else if(D.mode===o8.LINE_LOOP)R=new CZ(O,q);else if(D.mode===o8.POINTS)R=new c6(O,q);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+D.mode);if(Object.keys(R.geometry.morphAttributes).length>0)YO(R,K);if(R.name=Q.createUniqueName(K.name||"mesh_"+J),v9(R,K),D.extensions)o7(Z,R,D);Q.assignFinalMaterial(R),N.push(R)}for(let G=0,E=N.length;G<E;G++)Q.associations.set(N[G],{meshes:J,primitives:G});if(N.length===1){if(K.extensions)o7(Z,N[0],K);return N[0]}let F=new TJ;if(K.extensions)o7(Z,F,K);Q.associations.set(F,{meshes:J});for(let G=0,E=N.length;G<E;G++)F.add(N[G]);return F})}loadCamera(J){let Q,$=this.json.cameras[J],Z=$[$.type];if(!Z){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if($.type==="perspective")Q=new H8(T9.radToDeg(Z.yfov),Z.aspectRatio||1,Z.znear||1,Z.zfar||2000000);else if($.type==="orthographic")Q=new t9(-Z.xmag,Z.xmag,Z.ymag,-Z.ymag,Z.znear,Z.zfar);if($.name)Q.name=this.createUniqueName($.name);return v9(Q,$),Promise.resolve(Q)}loadSkin(J){let Q=this.json.skins[J],$=[];for(let Z=0,K=Q.joints.length;Z<K;Z++)$.push(this._loadNodeShallow(Q.joints[Z]));if(Q.inverseBindMatrices!==void 0)$.push(this.getDependency("accessor",Q.inverseBindMatrices));else $.push(null);return Promise.all($).then(function(Z){let K=Z.pop(),W=Z,Y=[],X=[];for(let H=0,U=W.length;H<U;H++){let N=W[H];if(N){Y.push(N);let F=new QJ;if(K!==null)F.fromArray(K.array,H*16);X.push(F)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',Q.joints[H])}return new cQ(Y,X)})}loadAnimation(J){let Q=this.json,$=this,Z=Q.animations[J],K=Z.name?Z.name:"animation_"+J,W=[],Y=[],X=[],H=[],U=[];for(let N=0,F=Z.channels.length;N<F;N++){let G=Z.channels[N],E=Z.samplers[G.sampler],O=G.target,D=O.node,R=Z.parameters!==void 0?Z.parameters[E.input]:E.input,q=Z.parameters!==void 0?Z.parameters[E.output]:E.output;if(O.node===void 0)continue;W.push(this.getDependency("node",D)),Y.push(this.getDependency("accessor",R)),X.push(this.getDependency("accessor",q)),H.push(E),U.push(O)}return Promise.all([Promise.all(W),Promise.all(Y),Promise.all(X),Promise.all(H),Promise.all(U)]).then(function(N){let F=N[0],G=N[1],E=N[2],O=N[3],D=N[4],R=[];for(let C=0,z=F.length;C<z;C++){let L=F[C],V=G[C],P=E[C],T=O[C],B=D[C];if(L===void 0)continue;if(L.updateMatrix)L.updateMatrix();let I=$._createAnimationTracks(L,V,P,T,B);if(I)for(let l=0;l<I.length;l++)R.push(I[l])}let q=new y6(K,void 0,R);return v9(q,Z),q})}createNodeMesh(J){let Q=this.json,$=this,Z=Q.nodes[J];if(Z.mesh===void 0)return null;return $.getDependency("mesh",Z.mesh).then(function(K){let W=$._getNodeRef($.meshCache,Z.mesh,K);if(Z.weights!==void 0)W.traverse(function(Y){if(!Y.isMesh)return;for(let X=0,H=Z.weights.length;X<H;X++)Y.morphTargetInfluences[X]=Z.weights[X]});return W})}loadNode(J){let Q=this.json,$=this,Z=Q.nodes[J],K=$._loadNodeShallow(J),W=[],Y=Z.children||[];for(let H=0,U=Y.length;H<U;H++)W.push($.getDependency("node",Y[H]));let X=Z.skin===void 0?Promise.resolve(null):$.getDependency("skin",Z.skin);return Promise.all([K,Promise.all(W),X]).then(function(H){let U=H[0],N=H[1],F=H[2];if(F!==null)U.traverse(function(G){if(!G.isSkinnedMesh)return;G.bind(F,UO)});for(let G=0,E=N.length;G<E;G++)U.add(N[G]);if(U.userData.pivot!==void 0&&N.length>0){let G=U.userData.pivot,E=N[0];U.pivot=new S().fromArray(G),U.position.x-=G[0],U.position.y-=G[1],U.position.z-=G[2],E.position.set(0,0,0),delete U.userData.pivot}return U})}_loadNodeShallow(J){let Q=this.json,$=this.extensions,Z=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let K=Q.nodes[J],W=K.name?Z.createUniqueName(K.name):"",Y=[],X=Z._invokeOne(function(H){return H.createNodeMesh&&H.createNodeMesh(J)});if(X)Y.push(X);if(K.camera!==void 0)Y.push(Z.getDependency("camera",K.camera).then(function(H){return Z._getNodeRef(Z.cameraCache,K.camera,H)}));return Z._invokeAll(function(H){return H.createNodeAttachment&&H.createNodeAttachment(J)}).forEach(function(H){Y.push(H)}),this.nodeCache[J]=Promise.all(Y).then(function(H){let U;if(K.isBone===!0)U=new uQ;else if(H.length>1)U=new TJ;else if(H.length===1)U=H[0];else U=new SJ;if(U!==H[0])for(let N=0,F=H.length;N<F;N++)U.add(H[N]);if(K.name)U.userData.name=K.name,U.name=W;if(v9(U,K),K.extensions)o7($,U,K);if(K.matrix!==void 0){let N=new QJ;N.fromArray(K.matrix),U.applyMatrix4(N)}else{if(K.translation!==void 0)U.position.fromArray(K.translation);if(K.rotation!==void 0)U.quaternion.fromArray(K.rotation);if(K.scale!==void 0)U.scale.fromArray(K.scale)}if(!Z.associations.has(U))Z.associations.set(U,{});else if(K.mesh!==void 0&&Z.meshCache.refs[K.mesh]>1){let N=Z.associations.get(U);Z.associations.set(U,{...N})}return Z.associations.get(U).nodes=J,U}),this.nodeCache[J]}loadScene(J){let Q=this.extensions,$=this.json.scenes[J],Z=this,K=new TJ;if($.name)K.name=Z.createUniqueName($.name);if(v9(K,$),$.extensions)o7(Q,K,$);let W=$.nodes||[],Y=[];for(let X=0,H=W.length;X<H;X++)Y.push(Z.getDependency("node",W[X]));return Promise.all(Y).then(function(X){for(let U=0,N=X.length;U<N;U++){let F=X[U];if(F.parent!==null)K.add(dZ(F));else K.add(F)}let H=(U)=>{let N=new Map;for(let[F,G]of Z.associations)if(F instanceof w8||F instanceof eJ)N.set(F,G);return U.traverse((F)=>{let G=Z.associations.get(F);if(G!=null)N.set(F,G)}),N};return Z.associations=H(K),K})}_createAnimationTracks(J,Q,$,Z,K){let W=[],Y=J.name?J.name:J.uuid,X=[];function H(G){if(G.morphTargetInfluences)X.push(G.name?G.name:G.uuid)}if(k7[K.path]===k7.weights){if(H(J),J.isGroup)J.children.forEach(H)}else X.push(Y);let U;switch(k7[K.path]){case k7.weights:U=L7;break;case k7.rotation:U=V7;break;case k7.translation:case k7.scale:U=s7;break;default:switch($.itemSize){case 1:U=L7;break;case 2:case 3:default:U=s7;break}break}let N=Z.interpolation!==void 0?ZO[Z.interpolation]:qZ,F=this._getArrayFromAccessor($);for(let G=0,E=X.length;G<E;G++){let O=new U(X[G]+"."+k7[K.path],Q.array,F,N);if(Z.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(O);W.push(O)}return W}_getArrayFromAccessor(J){let Q=J.array;if(J.normalized){let $=DY(Q.constructor),Z=new Float32Array(Q.length);for(let K=0,W=Q.length;K<W;K++)Z[K]=Q[K]*$;Q=Z}return Q}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function($){return new(this instanceof V7?W5:kY)(this.times,this.values,this.getValueSize()/3,$)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function NO(J,Q,$){let Z=Q.attributes,K=new A8;if(Z.POSITION!==void 0){let X=$.json.accessors[Z.POSITION],H=X.min,U=X.max;if(H!==void 0&&U!==void 0){if(K.set(new S(H[0],H[1],H[2]),new S(U[0],U[1],U[2])),X.normalized){let N=DY(e6[X.componentType]);K.min.multiplyScalar(N),K.max.multiplyScalar(N)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let W=Q.targets;if(W!==void 0){let X=new S,H=new S;for(let U=0,N=W.length;U<N;U++){let F=W[U];if(F.POSITION!==void 0){let G=$.json.accessors[F.POSITION],E=G.min,O=G.max;if(E!==void 0&&O!==void 0){if(H.setX(Math.max(Math.abs(E[0]),Math.abs(O[0]))),H.setY(Math.max(Math.abs(E[1]),Math.abs(O[1]))),H.setZ(Math.max(Math.abs(E[2]),Math.abs(O[2]))),G.normalized){let D=DY(e6[G.componentType]);H.multiplyScalar(D)}X.max(H)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}K.expandByVector(X)}J.boundingBox=K;let Y=new g8;K.getCenter(Y.center),Y.radius=K.min.distanceTo(K.max)/2,J.boundingSphere=Y}function hU(J,Q,$){let Z=Q.attributes,K=[];function W(Y,X){return $.getDependency("accessor",Y).then(function(H){J.setAttribute(X,H)})}for(let Y in Z){let X=VY[Y]||Y.toLowerCase();if(X in J.attributes)continue;K.push(W(Z[Y],X))}if(Q.indices!==void 0&&!J.index){let Y=$.getDependency("accessor",Q.indices).then(function(X){J.setIndex(X)});K.push(Y)}if(NJ.workingColorSpace!==x8&&"COLOR_0"in Z)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${NJ.workingColorSpace}" not supported.`);return v9(J,Q),NO(J,Q,$),Promise.all(K).then(function(){return Q.targets!==void 0?WO(J,Q.targets,$):J})}var X5={type:"change"},CY={type:"start"},U5={type:"end"},cZ=new q7,H5=new d8,GO=Math.cos(70*T9.DEG2RAD),G8=new S,j8=2*Math.PI,uJ={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},MY=0.000001;class PY extends xZ{constructor(J,Q=null){super(J,Q);if(this.state=uJ.NONE,this.target=new S,this.cursor=new S,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:U7.ROTATE,MIDDLE:U7.DOLLY,RIGHT:U7.PAN},this.touches={ONE:N7.ROTATE,TWO:N7.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new S,this._lastQuaternion=new PJ,this._lastTargetPosition=new S,this._quat=new PJ().setFromUnitVectors(J.up,new S(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $$,this._sphericalDelta=new $$,this._scale=1,this._panOffset=new S,this._rotateStart=new N0,this._rotateEnd=new N0,this._rotateDelta=new N0,this._panStart=new N0,this._panEnd=new N0,this._panDelta=new N0,this._dollyStart=new N0,this._dollyEnd=new N0,this._dollyDelta=new N0,this._dollyDirection=new S,this._mouse=new N0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=EO.bind(this),this._onPointerDown=FO.bind(this),this._onPointerUp=qO.bind(this),this._onContextMenu=kO.bind(this),this._onMouseWheel=LO.bind(this),this._onKeyDown=VO.bind(this),this._onTouchStart=DO.bind(this),this._onTouchMove=BO.bind(this),this._onMouseDown=OO.bind(this),this._onMouseMove=RO.bind(this),this._interceptControlDown=MO.bind(this),this._interceptControlUp=CO.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=uJ.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let J=this.domElement.getRootNode();J.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),J.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(X5),this.update(),this.state=uJ.NONE}pan(J,Q){this._pan(J,Q),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let Q=this.object.position;if(G8.copy(Q).sub(this.target),G8.applyQuaternion(this._quat),this._spherical.setFromVector3(G8),this.autoRotate&&this.state===uJ.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let $=this.minAzimuthAngle,Z=this.maxAzimuthAngle;if(isFinite($)&&isFinite(Z)){if($<-Math.PI)$+=j8;else if($>Math.PI)$-=j8;if(Z<-Math.PI)Z+=j8;else if(Z>Math.PI)Z-=j8;if($<=Z)this._spherical.theta=Math.max($,Math.min(Z,this._spherical.theta));else this._spherical.theta=this._spherical.theta>($+Z)/2?Math.max($,this._spherical.theta):Math.min(Z,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let K=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let W=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),K=W!=this._spherical.radius}if(G8.setFromSpherical(this._spherical),G8.applyQuaternion(this._quatInverse),Q.copy(this.target).add(G8),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let W=null;if(this.object.isPerspectiveCamera){let Y=G8.length();W=this._clampDistance(Y*this._scale);let X=Y-W;this.object.position.addScaledVector(this._dollyDirection,X),this.object.updateMatrixWorld(),K=!!X}else if(this.object.isOrthographicCamera){let Y=new S(this._mouse.x,this._mouse.y,0);Y.unproject(this.object);let X=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),K=X!==this.object.zoom;let H=new S(this._mouse.x,this._mouse.y,0);H.unproject(this.object),this.object.position.sub(H).add(Y),this.object.updateMatrixWorld(),W=G8.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(W!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(W).add(this.object.position);else if(cZ.origin.copy(this.object.position),cZ.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(cZ.direction))<GO)this.object.lookAt(this.target);else H5.setFromNormalAndCoplanarPoint(this.object.up,this.target),cZ.intersectPlane(H5,this.target)}else if(this.object.isOrthographicCamera){let W=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),W!==this.object.zoom)this.object.updateProjectionMatrix(),K=!0}if(this._scale=1,this._performCursorZoom=!1,K||this._lastPosition.distanceToSquared(this.object.position)>MY||8*(1-this._lastQuaternion.dot(this.object.quaternion))>MY||this._lastTargetPosition.distanceToSquared(this.target)>MY)return this.dispatchEvent(X5),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return j8/60*this.autoRotateSpeed*J;else return j8/60/60*this.autoRotateSpeed}_getZoomScale(J){let Q=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*Q)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,Q){G8.setFromMatrixColumn(Q,0),G8.multiplyScalar(-J),this._panOffset.add(G8)}_panUp(J,Q){if(this.screenSpacePanning===!0)G8.setFromMatrixColumn(Q,1);else G8.setFromMatrixColumn(Q,0),G8.crossVectors(this.object.up,G8);G8.multiplyScalar(J),this._panOffset.add(G8)}_pan(J,Q){let $=this.domElement;if(this.object.isPerspectiveCamera){let Z=this.object.position;G8.copy(Z).sub(this.target);let K=G8.length();K*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*K/$.clientHeight,this.object.matrix),this._panUp(2*Q*K/$.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/$.clientWidth,this.object.matrix),this._panUp(Q*(this.object.top-this.object.bottom)/this.object.zoom/$.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,Q){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let $=this.domElement.getBoundingClientRect(),Z=J-$.left,K=Q-$.top,W=$.width,Y=$.height;this._mouse.x=Z/W*2-1,this._mouse.y=-(K/Y)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(j8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(j8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let Q=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(j8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);Q=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-j8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);Q=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(j8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);Q=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-j8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);Q=!0;break}if(Q)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._rotateStart.set($,Z)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._panStart.set($,Z)}}_handleTouchStartDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,Z=J.pageY-Q.y,K=Math.sqrt($*$+Z*Z);this._dollyStart.set(0,K)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+$.x),K=0.5*(J.pageY+$.y);this._rotateEnd.set(Z,K)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(j8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(j8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._panEnd.set($,Z)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,Z=J.pageY-Q.y,K=Math.sqrt($*$+Z*Z);this._dollyEnd.set(0,K),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let W=(J.pageX+Q.x)*0.5,Y=(J.pageY+Q.y)*0.5;this._updateZoomParameters(W,Y)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId){this._pointers.splice(Q,1);return}}_isTrackingPointer(J){for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId)return!0;return!1}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new N0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q]}_customWheelEvent(J){let Q=J.deltaMode,$={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch(Q){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)$.deltaY*=10;return $}}function FO(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function EO(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function qO(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(U5),this.state=uJ.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let Q=this._pointers[0],$=this._pointerPositions[Q];this._onTouchStart({pointerId:Q,pageX:$.x,pageY:$.y});break}}function OO(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case U7.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=uJ.DOLLY;break;case U7.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=uJ.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=uJ.ROTATE}break;case U7.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=uJ.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=uJ.PAN}break;default:this.state=uJ.NONE}if(this.state!==uJ.NONE)this.dispatchEvent(CY)}function RO(J){switch(this.state){case uJ.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case uJ.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case uJ.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function LO(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==uJ.NONE)return;J.preventDefault(),this.dispatchEvent(CY),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(U5)}function VO(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function DO(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case N7.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=uJ.TOUCH_ROTATE;break;case N7.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=uJ.TOUCH_PAN;break;default:this.state=uJ.NONE}break;case 2:switch(this.touches.TWO){case N7.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=uJ.TOUCH_DOLLY_PAN;break;case N7.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=uJ.TOUCH_DOLLY_ROTATE;break;default:this.state=uJ.NONE}break;default:this.state=uJ.NONE}if(this.state!==uJ.NONE)this.dispatchEvent(CY)}function BO(J){switch(this._trackPointer(J),this.state){case uJ.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case uJ.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case uJ.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case uJ.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=uJ.NONE}}function kO(J){if(this.enabled===!1)return;J.preventDefault()}function MO(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function CO(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var U$=new S;function a8(J,Q,$,Z,K,W){let Y=2*Math.PI*K/4,X=Math.max(W-2*K,0),H=Math.PI/4;U$.copy(Q),U$[Z]=0,U$.normalize();let U=0.5*Y/(Y+X),N=1-U$.angleTo(J)/H;if(Math.sign(U$[$])===1)return N*U;else return X/(Y+X)+U+U*(1-N)}class _8 extends yJ{constructor(J=1,Q=1,$=1,Z=2,K=0.1){let W=Z*2+1;K=Math.min(J/2,Q/2,$/2,K);super(1,1,1,W,W,W);if(this.type="RoundedBoxGeometry",this.parameters={width:J,height:Q,depth:$,segments:Z,radius:K},W===1)return;let Y=this.toNonIndexed();this.index=null,this.attributes.position=Y.attributes.position,this.attributes.normal=Y.attributes.normal,this.attributes.uv=Y.attributes.uv;let X=new S,H=new S,U=new S(J,Q,$).divideScalar(2).subScalar(K),N=this.attributes.position.array,F=this.attributes.normal.array,G=this.attributes.uv.array,E=N.length/6,O=new S,D=0.5/W;for(let R=0,q=0;R<N.length;R+=3,q+=2)switch(X.fromArray(N,R),H.copy(X),H.x-=Math.sign(H.x)*D,H.y-=Math.sign(H.y)*D,H.z-=Math.sign(H.z)*D,H.normalize(),N[R+0]=U.x*Math.sign(X.x)+H.x*K,N[R+1]=U.y*Math.sign(X.y)+H.y*K,N[R+2]=U.z*Math.sign(X.z)+H.z*K,F[R+0]=H.x,F[R+1]=H.y,F[R+2]=H.z,Math.floor(R/E)){case 0:O.set(1,0,0),G[q+0]=a8(O,H,"z","y",K,$),G[q+1]=1-a8(O,H,"y","z",K,Q);break;case 1:O.set(-1,0,0),G[q+0]=1-a8(O,H,"z","y",K,$),G[q+1]=1-a8(O,H,"y","z",K,Q);break;case 2:O.set(0,1,0),G[q+0]=1-a8(O,H,"x","z",K,J),G[q+1]=a8(O,H,"z","x",K,$);break;case 3:O.set(0,-1,0),G[q+0]=1-a8(O,H,"x","z",K,J),G[q+1]=1-a8(O,H,"z","x",K,$);break;case 4:O.set(0,0,1),G[q+0]=1-a8(O,H,"x","y",K,J),G[q+1]=1-a8(O,H,"y","x",K,Q);break;case 5:O.set(0,0,-1),G[q+0]=a8(O,H,"x","y",K,J),G[q+1]=1-a8(O,H,"y","x",K,Q);break}}static fromJSON(J){return new _8(J.width,J.height,J.depth,J.segments,J.radius)}}var R0={tableWidth:0.92,tableCenterY:0.724,tableThickness:0.09,feltWidth:0.78,feltCenterY:0.776,surfaceY:0.782,chairSeatY:0.51,chairSeatWidth:0.56,seatDistance:0.77,tileLength:0.054,tileWidth:0.027,tileThickness:0.011,tileGap:0.0016,pipRadius:0.0033,pipColumnSpacing:0.0072,pipRowSpacing:0.0076,rackRadius:0.418,rackSpacing:0.0305,neutralPoseTime:10.25,boardLimit:0.27},q9=[[0,R0.seatDistance,Math.PI],[R0.seatDistance,0,-Math.PI/2],[0,-R0.seatDistance,0],[-R0.seatDistance,0,Math.PI/2]];function zY(J){let Q=J.vertical?R0.tileWidth:R0.tileLength,$=J.vertical?R0.tileLength:R0.tileWidth;return{left:J.x-Q/2,right:J.x+Q/2,top:J.z-$/2,bottom:J.z+$/2}}var PO=R0.boardLimit,IO=R0.feltWidth/2-0.022;function AY(J,Q,$=PO){let Z=zY(J);if(Math.max(Math.abs(Z.left),Math.abs(Z.right),Math.abs(Z.top),Math.abs(Z.bottom))>$+0.00000001)return!1;return Q.every((K)=>{let W=zY(K);return Z.right<=W.left-0.0015||Z.left>=W.right+0.0015||Z.bottom<=W.top-0.0015||Z.top>=W.bottom+0.0015})}function N5(J,Q,$){let{tileLength:Z,tileWidth:K,tileGap:W}=R0,Y=Q.x===Q.y,X=(Y?K:Z)/2,H=J.tile,U=[],N=[[J.dx,J.dz],[J.dz,-J.dx],[-J.dz,J.dx]];for(let F=0;F<N.length;F++){let[G,E]=N[F],O=F!==0,D=(H.isDouble?K:Z)/2,R=(H.isDouble?Z:K)/2,q=H.x+J.dx*(O?H.isDouble?0:Z/4:D),C=H.z+J.dz*(O?H.isDouble?0:Z/4:D),z=O?[0,Z/8,-Z/8]:[0];for(let L of z){let V=Math.atan2(-E,G)+($==="left"?Math.PI:0)+(Y?Math.PI/2:0);U.push({id:Q.id,x:q+G*((O?R:0)+W+X)+J.dx*L,z:C+E*((O?R:0)+W+X)+J.dz*L,yaw:V,vertical:Math.abs(Math.sin(V))>0.5,isDouble:Y,dx:G,dz:E,side:$})}}return U}function IY(J,Q,$,Z){let K={id:"future",x:0,y:Z?0:1};return N5({tile:J,dx:J.dx,dz:J.dz},K,$).some((W)=>AY(W,Q))}function G5(J,Q=[]){return E5(J,Q).placements}function F5(J,Q=[]){let $=E5(J,Q);if(!$.ends)return[];return["left","right"].map((Z)=>{let K=$.ends[Z],W=K.tile,Y=zY(W),X=Math.abs(K.dx)*(Y.right-Y.left)/2+Math.abs(K.dz)*(Y.bottom-Y.top)/2,H=X+0.013;return{x:W.x+K.dx*H,z:W.z+K.dz*H,dx:K.dx,dz:K.dz}})}function E5(J,Q){if(J.length>28)throw Error("A double-six chain has at most 28 tiles.");if(!J.length)return{placements:[],ends:null};let $=new Map(J.map((G)=>[G.id,G])),Z=Q.filter((G)=>G.type==="play"&&G.tile&&$.has(G.tile)),K=$.get(Z[0]?.tile||"")||J[0],W=J.findIndex((G)=>G.id===K.id),Y=K.x===K.y,X={id:K.id,x:0,z:0,yaw:Y?Math.PI/2:0,vertical:Y,isDouble:Y,dx:1,dz:0,side:"root"},H=[X],U=new Map([[X.id,X]]),N={left:{tile:X,dx:-1,dz:0},right:{tile:X,dx:1,dz:0}},F=Z.length===J.length?Z.slice(1):[...J.slice(0,W).reverse().map((G)=>({type:"play",tile:G.id,side:"left"})),...J.slice(W+1).map((G)=>({type:"play",tile:G.id,side:"right"}))];for(let G of F){let E=$.get(G.tile);if(U.has(E.id))continue;let O=G.side==="left"?"left":G.side==="right"?"right":J.findIndex((C)=>C.id===E.id)<W?"left":"right",D=N5(N[O],E,O),R=D.filter((C)=>AY(C,H));if(!R.length)R=D.filter((C)=>AY(C,H,IO));let q=R.find((C)=>IY(C,[...H,C],O,!1)&&IY(C,[...H,C],O,!0))||R.find((C)=>IY(C,[...H,C],O,!1))||R[0];if(!q)throw Error(`No safe placement for ${E.id} after ${H.length} tiles`);H.push(q),U.set(E.id,q),N[O]={tile:q,dx:q.dx,dz:q.dz}}return{placements:J.map((G)=>U.get(G.id)),ends:N}}function q5(J,Q,$=!1){if($)return{breath:0,headYaw:0,headNod:0};let Z=J*2.173+0.43;return{breath:0.0055*Math.sin(Q*(0.78+J*0.093)+Z),headYaw:0.087*Math.sin(Q*(0.213+J*0.037)+Z)+0.028*Math.sin(Q*(0.487+J*0.029)+Z*1.91),headNod:0.009*Math.sin(Q*(0.267+J*0.035)+Z*0.71)}}var O5=new S(1,0,0),R9=new S(0,1,0),_Y=new PJ;function vY(J){let Q=[];return J.traverse(($)=>{if($.isBone)Q.push({bone:$,position:$.position.clone(),quaternion:$.quaternion.clone(),scale:$.scale.clone()})}),Q}var f9=new S,O9=new S,h9=new S,a7=new S,J7=new S,r8=new S,r7=new S,t7=new S,J6=new PJ,L9=new PJ,rZ=new PJ,aZ=new PJ,q$=(J)=>Math.min(1,Math.max(-1,J)),Q6=(J,Q,$)=>Math.min($,Math.max(Q,J)),V9=(J)=>J*J*(3-2*J);function Z8(J,Q){J.getWorldQuaternion(L9),J.parent.getWorldQuaternion(rZ),J.quaternion.copy(rZ.invert()).multiply(Q).multiply(L9),J.updateMatrixWorld(!0)}var T8=new S,e8=new S;function zO(J){J.holder.getWorldQuaternion(aZ),T8.set(1,0,0).applyQuaternion(aZ),e8.set(0,0,1).applyQuaternion(aZ)}function jY(J,Q,$,Z,K){return K.set(Q,$,Z).applyMatrix4(J.holder.matrixWorld)}function R5(J,Q,$,Z){return Z.set(J,Q,$).applyQuaternion(aZ).normalize()}var AO=0.965;function _O(J,Q,$){let{brazo:Z,antebrazo:K,mano:W}=J;if(!Z||!K||!W||!Z.parent||!K.parent)return;Z.getWorldPosition(f9),K.getWorldPosition(O9),W.getWorldPosition(h9);let Y=f9.distanceTo(O9),X=O9.distanceTo(h9);if(Y<0.00001||X<0.00001)return;let H=Q6(f9.distanceTo(Q),Math.abs(Y-X)+0.002,(Y+X)*AO);if(J7.subVectors(O9,f9),r8.subVectors(h9,O9),r7.crossVectors(J7,r8),r7.lengthSq()<0.0000000001)r7.copy(T8);else r7.normalize();let U=Math.acos(q$((Y*Y+X*X-f9.distanceToSquared(h9))/(2*Y*X))),F=Math.acos(q$((Y*Y+X*X-H*H)/(2*Y*X)))-U;if(Z8(K,J6.setFromAxisAngle(r7,F)),W.getWorldPosition(h9),Math.abs(f9.distanceTo(h9)-H)>0.001)Z8(K,J6.setFromAxisAngle(r7,-2*F)),W.getWorldPosition(h9);if(J7.subVectors(h9,f9).normalize(),r8.subVectors(Q,f9),r8.lengthSq()<0.0000000001)return;if(r8.normalize(),Z8(Z,J6.setFromUnitVectors(J7,r8)),!$)return;if(K.getWorldPosition(O9),t7.subVectors(O9,f9),t7.addScaledVector(r8,-t7.dot(r8)),a7.subVectors($,f9),a7.addScaledVector(r8,-a7.dot(r8)),t7.lengthSq()<0.0000000001||a7.lengthSq()<0.0000000001)return;t7.normalize(),a7.normalize();let G=Math.atan2(r7.crossVectors(t7,a7).dot(r8),q$(t7.dot(a7)));Z8(Z,J6.setFromAxisAngle(r8,G))}var v8=new S,$Q=new S,N$=new S,TO=new QJ,TY=new PJ,G$=new PJ;function SO(J,Q,$){let{antebrazo:Z,mano:K}=J;if(!Z||!K||!K.parent)return;if(v8.copy(Q).normalize(),N$.crossVectors(v8,$),N$.lengthSq()<0.00000001)return;N$.normalize(),$Q.crossVectors(N$,v8),TY.setFromRotationMatrix(TO.makeBasis(N$,v8,$Q)),Z.getWorldPosition(O9),K.getWorldPosition(h9),J7.subVectors(h9,O9).normalize(),K.getWorldQuaternion(L9),G$.copy(TY).multiply(L9.invert());let W=G$.x*J7.x+G$.y*J7.y+G$.z*J7.z,Y=2*Math.atan2(W,G$.w);if(Number.isFinite(Y))Z8(Z,J6.setFromAxisAngle(J7,Q6(Y*0.5,-1.2,1.2)));K.parent.getWorldQuaternion(rZ),K.quaternion.copy(rZ.invert()).multiply(TY),K.updateMatrixWorld(!0)}var wO=new S;function jO(J,Q,$){let Z=Q.lado==="Left"?1:-1,K=J.index*1.7,W=R0.seatDistance-R0.tableWidth/2;return jY(J,Z*(0.225+Math.sin(K)*0.01)+Math.sin($*0.23+K)*0.004,R0.surfaceY+0.026,W+(Z>0?0.035:0.06)+Math.cos(K*1.3)*0.012+Math.sin($*0.17+K*2)*0.004,wO)}var yO=new S,JQ=new S,yY=new S,nZ=new S,vO=0.045,fO=0.05,hO=0.12,bO=0.14,xO=0.45,gO=4;function L5(J,Q,$){return nZ.subVectors(Q,J.holder.getWorldPosition(yY)),nZ.y=0,nZ.normalize(),$.copy(Q).addScaledVector(nZ,-fO).setY(Q.y+vO)}function pO(J,Q,$){let Z=J.jugada;if(!Z)return null;if(Q-Z.t0>gO)return J.jugada=null,null;let K=Z.anim;if(K.elapsed<K.duration)return L5(J,Z.obj.position,JQ),JQ.lerpVectors($,JQ,V9(Q6(K.elapsed/hO,0,1)));if(Z.aterrizo==null)Z.aterrizo=Q;let W=Q-Z.aterrizo;L5(J,Z.hasta,JQ);let Y=K.golpe?0.7:bO;if(W<Y)return JQ;let X=(W-Y)/xO;if(X>=1)return J.jugada=null,null;return JQ.lerp($,V9(X))}var OJ=[1,1.9,3.3,4.3,5.2],V5=-1e9;function lO(J,Q,$){let Z=J.bebida;if(!Z)return null;if(J.trago){let W=J.trago.fijo??Q-J.trago.t0;if(W<0||W>=OJ[4]||J.jugada)return J.trago=null,P5(Z),J.sed=Q+90+Math.random()*150,null;return W}if(!$||!$.dt)return null;if(J.sed==null)return J.sed=Q+20+Math.random()*100,null;if(Q<J.sed||Q-V5<20)return null;let K=J.index;if(J.jugada||$.jugando&&$.turno===K||$.habla.has(K)||$.fin&&Q-$.fin.t<6)return J.sed=Q+3+Math.random()*8,null;return V5=Q,J.trago={t0:Q},0}function P5(J){J.group.position.copy(J.home),J.group.quaternion.identity()}var e9=new S,e7=new S,QQ=new S,F$=new S,D5=new S;function B5(J,Q,$,Z){let K=J.bebida;if(QQ.copy(e8).addScaledVector(R9,0.25).normalize(),F$.copy(e8).multiplyScalar(0.55).addScaledVector(R9,0.8).normalize(),e7.copy(K.home),e7.y+=K.alto,e7.addScaledVector(T8,-(K.radio+0.015)).addScaledVector(QQ,-0.03),J.bocaMundo)J.bocaMundo(e9),e9.addScaledVector(e8,0.006);else J.front.getWorldPosition(e9),e9.y-=0.075,e9.addScaledVector(e8,0.012);let W=K.inclina;D5.copy(R9).multiplyScalar(Math.cos(W)).addScaledVector(e8,-Math.sin(W)),e9.addScaledVector(D5,-K.boca).addScaledVector(T8,-(K.radio+0.015)).addScaledVector(F$,-0.03);let Y;if(Q<OJ[0])Z.lerpVectors($,e7,V9(Q/OJ[0])),Y=QQ;else if(Q<OJ[1]){let X=V9((Q-OJ[0])/(OJ[1]-OJ[0]));Z.lerpVectors(e7,e9,X),Y=QQ.lerp(F$,X).normalize()}else if(Q<OJ[2])Z.copy(e9),Y=F$;else if(Q<OJ[3]){let X=V9((Q-OJ[2])/(OJ[3]-OJ[2]));Z.lerpVectors(e9,e7,X),Y=F$.lerp(QQ,X).normalize()}else Z.lerpVectors(e7,$,V9((Q-OJ[3])/(OJ[4]-OJ[3]))),Y=QQ;return Y}var k5=new S,M5=new S,C5=new S;function mO(J,Q){let $=J.bebida,Z=J.brazos[1].mano;if(Q<OJ[0]||Q>=OJ[3]){P5($);return}Z.getWorldQuaternion(L9),Z.getWorldPosition(tZ),k5.set(0,0,1).applyQuaternion(L9),M5.set(0,1,0).applyQuaternion(L9);let K=Q<OJ[1]?V9((Q-OJ[0])/(OJ[1]-OJ[0])):Q<OJ[2]?1:1-V9((Q-OJ[2])/(OJ[3]-OJ[2]));$.group.quaternion.setFromAxisAngle(T8,-$.inclina*K),C5.set(0,1,0).applyQuaternion($.group.quaternion),$.group.position.copy(tZ).addScaledVector(k5,$.radio+0.015).addScaledVector(M5,0.03).addScaledVector(C5,-$.alto)}function uO(J,Q,$){let Z=J.cara;if(!Z)return 0;if(J.proxParpadeo==null)J.proxParpadeo=Q+1+Math.random()*4;if(Q>=J.proxParpadeo)J.parpadeoT0=Q,J.proxParpadeo=Q+(Math.random()<0.15?0.32:2+Math.random()*4);let K=Q-(J.parpadeoT0??-9),W=K<0?0:K<0.06?K/0.06:K<0.09?1:K<0.16?1-(K-0.09)/0.07:0;if(J.caraFija){let U=J.caraFija,N=Z.mesh.morphTargetInfluences;if(N)N[Z.iP]=U.p*0.85,N[Z.iS]=U.s;return J.parpadeo=U.p,U.p}let Y=J.index,X=0;if($?.fin&&$.fin.team!=null&&Q-$.fin.t<5&&Q>=$.fin.t)X=Y%2===$.fin.team?0.95:-0.7;else if($?.habla?.has(Y))X=$.hablaTipo?.get(Y)==="win"?0.85:0.2;else{if(J.casual==null)J.casual=Q+8+Math.random()*30;if(Q>J.casual+2.5)J.casual=Q+15+Math.random()*45;if(Q>=J.casual)X=0.45}J.sonrisa=(J.sonrisa??0)+(X-(J.sonrisa??0))*(1-Math.exp(-($?.dt||0.016)*3.5));let H=Z.mesh.morphTargetInfluences;if(H)H[Z.iP]=W*0.85,H[Z.iS]=J.sonrisa;return J.parpadeo=W,W}function dO(J,Q){let $=J.index,Z=0.23+$%4*0.012,K=Q*Z*Math.PI*2+$*1.9,W=Math.sin(K);return{b:W>0?W:W*0.7,balanceo:Math.sin(Q*0.11+$*2.3)*0.022+Math.sin(Q*0.29+$)*0.008,ladeo:Math.sin(Q*0.07+$*1.3)*0.014}}var SY=new S,sZ=new S,t8=new S,M7=new S,D9=new S,y8=new PJ,iZ=(J)=>{let Q=Math.sin(J*127.1+311.7)*43758.5453;return Q-Math.floor(Q)};function cO(J,Q,$,Z){let K=J.index;if(K>=4||!$)return $?.foco&&Q-$.foco.t<2.5?Z.copy($.foco.p):Z.set(0,R0.surfaceY,0);if($.fin&&Q-$.fin.t<5){if($.fin.team!=null&&K%2===$.fin.team&&$.cabezas[(K+2)%4])return Z.copy($.cabezas[(K+2)%4]);return jY(J,0,R0.surfaceY,R0.seatDistance-R0.rackRadius,Z)}if(J.trago&&J.bebida){let X=J.trago.fijo??Q-J.trago.t0;if(X<1.1||X>3.4&&X<4.3)return Z.copy(J.bebida.home);if(X<=3.4)return J.head.getWorldPosition(Z),Z.addScaledVector(e8,1).addScaledVector(R9,-0.15)}if($.foco&&Q-$.foco.t<1.4)return Z.copy($.foco.p);for(let X of $.habla)if(X!==K&&$.cabezas[X])return Z.copy($.cabezas[X]);if($.jugando&&$.turno===K){let X=Math.floor(Q/1.3);return jY(J,(iZ(X+K*9)-0.5)*0.12,R0.surfaceY+0.02,R0.seatDistance-R0.rackRadius+0.02,Z)}let W=Math.floor((Q+K*1.37)/(2.2+K*0.35)),Y=iZ(W*4+K);if($.jugando&&Y<0.45&&$.cabezas[$.turno]&&$.turno!==K)return Z.copy($.cabezas[$.turno]);if(Y<0.62&&$.cabezas[(K+2)%4])return Z.copy($.cabezas[(K+2)%4]);if(!$.jugando&&Y<0.85&&$.cabezas[(K+1+W%2*2)%4])return Z.copy($.cabezas[(K+1+W%2*2)%4]);return Z.set((iZ(W+7)-0.5)*0.2,R0.surfaceY,(iZ(W+3)-0.5)*0.2)}function nO(J,Q,$){let{head:Z,neck:K,front:W}=J;if(!Z||!W)return;if(cO(J,Q,$,SY),!J.mirada||!$?.dt)J.mirada=(J.mirada||new S).copy(SY);else J.mirada.lerp(SY,1-Math.exp(-$.dt*5.5));for(let[Y,X]of[[K,0.4],[Z,1]]){if(!Y)continue;if(Z.getWorldPosition(sZ),W.getWorldPosition(t8),t8.sub(sZ),t8.lengthSq()<0.0000000001)return;if(t8.normalize(),M7.subVectors(J.mirada,sZ),M7.lengthSq()<0.00000001)return;M7.normalize();let H=Q6(Math.atan2(t8.z*M7.x-t8.x*M7.z,t8.x*M7.x+t8.z*M7.z),-1.25,1.25)*X;if(Z8(Y,J6.setFromAxisAngle(R9,H)),W.getWorldPosition(t8),t8.sub(sZ).normalize(),D9.crossVectors(t8,R9),D9.lengthSq()<0.00000001)continue;D9.normalize();let U=Q6(Math.asin(q$(M7.y))-Math.asin(q$(t8.y)),-0.75,0.55)*X;Z8(Y,J6.setFromAxisAngle(D9,U))}}var sO=0.23,iO=[["lomo",0.4],["spine",0.34],["chest",0.26]],HD=new PJ;function oO(J,Q,$=0){if(!J.spine||!J.spine.parent)return;if(D9.copy(T8),J.hips&&J.lomo)for(let[Z,K]of iO){let W=J[Z];if(!W)continue;Z8(W,y8.setFromAxisAngle(D9,Q*K))}else Z8(J.spine,y8.setFromAxisAngle(D9,Q));if($)Z8(J.spine,y8.setFromAxisAngle(R9,$))}var oZ=new S,wY=new S,E$=new S,tZ=new S;function eZ(J,Q,$=!1,Z=null){for(let O of J.pose)O.bone.position.copy(O.position),O.bone.quaternion.copy(O.quaternion),O.bone.scale.copy(O.scale);J.holder.updateMatrixWorld(!0),zO(J);let K=q5(J.index,Q,$);if(J.spine)J.spine.quaternion.multiply(_Y.setFromAxisAngle(O5,K.breath));let W=!$,Y=W?dO(J,Q):{b:0,balanceo:0,ladeo:0},X=J.index,H=X<4&&J.brazos,U=0,N=0;if(H&&Z?.fin&&Z.fin.team!=null){let O=Q-Z.fin.t;if(O>=0&&O<5)N=Math.sin(Math.min(1,O/0.5)*Math.PI/2)*(O>4?5-O:1),U+=(X%2===Z.fin.team?-0.1:0.07)*N}if(H&&Z?.jugando&&Z.turno===X)U+=0.04;let F=H&&W&&J.front?lO(J,Q,Z):null,G=[];if(H)for(let O of J.brazos){let D=yO.copy(jO(J,O,Q)),R=O.lado==="Right"?pO(J,Q,D):null,q=!!R,C=null;if(!R&&F!=null&&O.lado==="Right")R=yY.set(0,0,0),C=B5(J,F,D,R).clone();if(R=(R||D).clone(),!q&&W&&Z?.habla?.has(X)&&O.lado==="Left")J.gesto=Math.min(1,(J.gesto||0)+(Z.dt||0)*3);else if(O.lado==="Left")J.gesto=Math.max(0,(J.gesto||0)-(Z?.dt||1)*2);if(O.lado==="Left"&&J.gesto>0){let z=V9(J.gesto);R.addScaledVector(e8,0.06*z).addScaledVector(T8,-0.07*z),R.y+=0.07*z+Math.sin(Q*5.2)*0.012*z}if(O.lado==="Right"&&!q&&N&&X%2===Z.fin.team){let z=Q-Z.fin.t;if(z<1.1)R.y+=Math.max(0,Math.sin(Math.min(1,z/0.9)*Math.PI))*0.13}G.push({brazo:O,o:R,jugando:q,dedos:C,reposo:D.clone()})}let E=0;if(H){let O=G.find((D)=>D.jugando);if(O&&O.brazo.brazo){J.holder.worldToLocal(E$.copy(O.o));let D=Math.hypot(E$.x,E$.z-0.12);U+=Q6((D-0.42)/0.55,0,0.34),E=Q6(Math.atan2(E$.x,E$.z)*0.3,-0.3,0.3)}}if(oO(J,sO*(J.brazos?1:0.6)+U,E),F!=null){let O=F<OJ[1]?Math.sin(Math.min(1,F/OJ[0])*Math.PI/2)*(1-V9(Math.max(0,F-OJ[0])/(OJ[1]-OJ[0]))):F>OJ[2]?Math.sin(Math.min(1,(F-OJ[2])/(OJ[3]-OJ[2]))*Math.PI):0;if(J.spine)Z8(J.spine,y8.setFromAxisAngle(e8,0.16*O))}if(W){if(J.spine)Z8(J.spine,y8.setFromAxisAngle(R9,Y.balanceo));if(J.spine)Z8(J.spine,y8.setFromAxisAngle(e8,Y.ladeo));if(J.chest)Z8(J.chest,y8.setFromAxisAngle(T8,-0.018*Y.b));if(J.hombros){for(let[O,D]of J.hombros)if(D)Z8(D,y8.setFromAxisAngle(e8,O*0.03*(Y.b+0.3)))}}if(nO(J,Q,Z),uO(J,Q,Z),J.head)J.head.quaternion.multiply(_Y.setFromAxisAngle(R9,K.headYaw*0.5)),J.head.quaternion.multiply(_Y.setFromAxisAngle(O5,K.headNod)),J.head.updateMatrixWorld(!0);if(W&&J.head){if(Z?.habla?.has(X)){let O=0.035*(0.6+0.4*Math.sin(Q*1.7));Z8(J.head,y8.setFromAxisAngle(T8,Math.sin(Q*6.1)*O*0.5+Math.sin(Q*3.3)*O*0.5))}if(N&&X%2!==Z.fin.team){let O=Q-Z.fin.t;if(O>0.6&&O<2.6)Z8(J.head,y8.setFromAxisAngle(R9,Math.sin((O-0.6)*Math.PI*2.4)*0.16*(2.6-O)/2))}}if(F!=null&&F>OJ[1]-0.2&&F<OJ[2]+0.2&&J.head){let O=Math.sin(Math.min(1,(F-OJ[1]+0.2)/(OJ[2]-OJ[1]+0.4))*Math.PI);Z8(J.head,y8.setFromAxisAngle(T8,-0.3*O))}if(W&&J.reaction&&J.head){let O=Q-J.reaction.time;if(O>=0&&O<1.2){let D=Math.sin(O/1.2*Math.PI)*0.035;Z8(J.head,y8.setFromAxisAngle(T8,D))}}for(let{brazo:O,o:D,jugando:R,dedos:q,reposo:C}of G){if(q)q.copy(B5(J,F,C,D));let z=O.lado==="Left"?1:-1;if(O.brazo.getWorldPosition(oZ),q)oZ.add(R5(z*0.85,-0.5,0.05,wY));else oZ.add(R5(z*(R?0.55:0.32),-0.75,R?-0.15:-0.6,wY));if(_O(O,D,oZ),O.antebrazo.getWorldPosition(O9),O.mano.getWorldPosition(tZ),v8.subVectors(tZ,O9),v8.y=0,v8.lengthSq()<0.00000001)v8.copy(e8);if(v8.normalize(),v8.addScaledVector(T8,-z*(R?0:0.12)).normalize(),v8.y=R?-0.55:-0.3,$Q.set(0,-1,0).addScaledVector(T8,-z*0.22),O.lado==="Left"&&J.gesto>0){let L=V9(J.gesto);$Q.lerp(wY.copy(T8).multiplyScalar(-1).add(yY.set(0,0.4,0)),L*0.8),v8.y+=0.4*L}if(q)v8.copy(q),$Q.copy(T8).addScaledVector(R9,-0.15);if(SO(O,v8,$Q),q)mO(J,F);if(W&&!R&&!q&&O.lado==="Right"&&J.toque&&Q-J.toque.t0<0.7){let L=Q-J.toque.t0;O.mano.getWorldQuaternion(L9),D9.set(1,0,0).applyQuaternion(L9),Z8(O.mano,y8.setFromAxisAngle(D9,-0.5*Math.max(0,Math.sin(L/0.7*Math.PI*4))))}else if(W&&!R&&!q&&O.lado==="Right"&&!(Z?.turno===X&&Z?.jugando)){let L=4.6+X*0.9,V=(Q+X*1.3)%L;if(V<0.55)O.mano.getWorldQuaternion(L9),D9.set(1,0,0).applyQuaternion(L9),Z8(O.mano,y8.setFromAxisAngle(D9,-0.22*Math.max(0,Math.sin(V/0.55*Math.PI*4))))}}J.holder.updateMatrixWorld(!0)}function I5({scene:J,texture:Q,mat:$,box:Z,cylinder:K,random:W,teal:Y,wood:X,storeSign:H}){let U=Q((V,P,T)=>{V.fillStyle="#e0d3b4",V.fillRect(0,0,P,T);let B=V.createLinearGradient(0,0,0,T);B.addColorStop(0,"#cac09b18"),B.addColorStop(0.7,"#14382d00"),B.addColorStop(1,"#162d2566"),V.fillStyle=B,V.fillRect(0,0,P,T);for(let I=0;I<7000;I++)V.fillStyle=I%3?"#b4ad8618":"#142d2924",V.fillRect(W()*P,W()*T,1+W()*3,1+W()*2);for(let I=0;I<70;I++){let l=W()*P,j=I<50?T*(0.72+W()*0.28):W()*T,x=5+W()*14;V.fillStyle=I%3?"rgba(160,145,112,.35)":"rgba(120,110,90,.25)",V.beginPath();for(let t=0;t<8;t++){let y=t*Math.PI/4,i=x*(0.6+W()*0.5);V.lineTo(l+Math.cos(y)*i,j+Math.sin(y)*i*0.65)}V.fill()}V.strokeStyle="#1b372e24";for(let I=48;I<T;I+=57)V.beginPath(),V.moveTo(0,I),V.lineTo(P,I),V.stroke()},1024,1024);Y.map=U,Y.color.set("#f2ecde"),Y.needsUpdate=!0,X.color.set("#bca98a"),X.roughness=0.84;let N=()=>{H.material.map=Q((V,P,T)=>{V.fillStyle="#efe3c4",V.fillRect(0,0,P,T);for(let l=0;l<2600;l++)V.fillStyle=l%2?"rgba(120,100,70,.07)":"rgba(255,250,235,.08)",V.fillRect(W()*P,W()*T,2+W()*14,1+W()*2);let B=document.fonts?.check?.("64px Shrikhand")?"Shrikhand":"Georgia",I=B==="Shrikhand"?T*0.66:T*0.56;V.font=`${I}px ${B}`,V.textAlign="center",V.textBaseline="middle",V.fillStyle="#c8402f",V.fillText("Colmado La Esquina",P/2+I*0.06,T/2+I*0.1),V.fillStyle="#24518a",V.fillText("Colmado La Esquina",P/2,T/2+I*0.04),V.strokeStyle="#3d938e",V.lineWidth=12,V.strokeRect(6,6,P-12,T-12);for(let l=0;l<1400;l++)V.fillStyle="rgba(239,227,196,.35)",V.fillRect(W()*P,W()*T,1+W()*3,1+W()*2)},2048,162),H.material.emissiveMap=H.material.map,H.material.needsUpdate=!0};H.material=new i0({roughness:0.9,emissive:"#ffffff",emissiveIntensity:0.1}),N(),document.fonts?.load?.("64px Shrikhand").then(N).catch(()=>{});for(let[V,P]of[[-2.7,-3.5],[2.4,-3.3]])Z(V,0.18,P,0.51,0.35,0.4,"#897052"),Z(V+0.05,0.47,P-0.04,0.4,0.23,0.32,"#a68c62");let F=(V,P,T)=>{let B=document.createElement("canvas");B.width=V,B.height=P;let I=new p8(B);I.colorSpace=J8,I.anisotropy=4;let l=()=>{let j=B.getContext("2d"),x=document.fonts?.check?.("64px Shrikhand"),t=document.fonts?.check?.('700 40px "DM Sans"')?'"DM Sans",':"";j.fillStyle="#233a2d",j.fillRect(0,0,V,P);for(let y=0;y<70;y++)j.fillStyle=`rgba(225,225,195,${0.015+W()*0.03})`,j.beginPath(),j.ellipse(W()*V,W()*P,V*(0.04+W()*0.14),P*(0.015+W()*0.045),W()*3,0,Math.PI*2),j.fill();j.textAlign="center",j.textBaseline="middle",j.lineCap="round";for(let[y,i,s,g,H0]of T){if(y==="—"){j.strokeStyle="rgba(225,225,195,.45)",j.lineWidth=6,j.beginPath(),j.moveTo(V*0.17,i+3),j.quadraticCurveTo(V/2,i-5,V*0.83,i+1),j.stroke();continue}j.font=g==="titulo"?x?`${s}px Shrikhand`:`bold ${s*0.95}px Georgia`:`${g} ${s}px ${t}sans-serif`;let a=j.measureText(y).width,X0=V*0.84;if(j.save(),j.translate(V/2,i),a>X0)j.scale(X0/a,1);j.fillStyle=H0;for(let E0=0;E0<3;E0++)j.globalAlpha=E0?0.4:0.75,j.fillText(y,(W()-0.5)*3,(W()-0.5)*3);j.restore()}for(let y=0;y<V*P/40;y++)j.fillStyle="rgba(35,58,45,.5)",j.fillRect(W()*V,W()*P,1+W()*2,1+W());j.strokeStyle="#9c8c62",j.lineWidth=V*0.04,j.strokeRect(V*0.02,V*0.02,V-V*0.04,P-V*0.04),j.strokeStyle="rgba(60,40,20,.35)",j.lineWidth=4,j.strokeRect(V*0.04,V*0.04,V-V*0.08,P-V*0.08),I.needsUpdate=!0};return l(),Promise.all([document.fonts?.load?.("64px Shrikhand"),document.fonts?.load?.('700 40px "DM Sans"')]).then(l).catch(()=>{}),new i0({roughness:1,map:I,emissive:"#ffffff",emissiveMap:I,emissiveIntensity:0.06})},G="#ece7cc",E="#e9b35a",O="#a9d3dd";{let V=new C0(new kJ(0.72,0.69),F(768,736,[["HOY HAY",110,74,"titulo",G],["CAFÉ",262,78,800,G],["HIELO · PAN",388,66,800,"#dcd9b8"],["—",478],["REFRESCOS",572,60,700,O]]));V.position.set(-3.43,1.6,-2.33),V.rotation.z=0.025,J.add(V),Z(-3.43,1.245,-2.315,0.66,0.018,0.05,"#8a7a55"),Z(-3.28,1.262,-2.31,0.06,0.016,0.016,"#efeadb")}{let V=document.documentElement.lang==="en",P=new TJ,T=$("#6b4a2e",0.8);P.position.set(-2,0,-2.1),P.rotation.y=0.5,J.add(P);let l=new C0(new kJ(0.56,0.72),F(560,720,[[V?"COMING":"YA",96,92,"titulo",E],[V?"SOON":"VIENE",206,92,"titulo",E],["—",282],[V?"1 vs 1":"1 contra 1",372,80,800,G],[V?"Online":"En línea",478,80,800,G],[V?"your people,":"tu gente,",576,50,600,O],[V?"from anywhere":"de donde sea",636,50,600,O]])),j=new TJ;j.rotation.x=-0.2,P.add(j),l.position.set(0,0.44,0.012),j.add(l);{let t=new C0(new yJ(0.56,0.72,0.012),T);t.position.set(0,0.44,0),j.add(t)}for(let[t,y,i,s]of[[-0.29,0.42000000000000004,0.035,0.88],[0.29,0.42000000000000004,0.035,0.88],[0,0.8500000000000001,0.62,0.035],[0,0.03,0.62,0.035]]){let g=new C0(new yJ(i,s,0.022),T);g.position.set(t,y,0),j.add(g)}let x=new TJ;x.position.z=-0.32,x.rotation.x=0.2,P.add(x);for(let t of[-0.27,0.27]){let y=new C0(new yJ(0.03,0.8600000000000001,0.02),T);y.position.set(t,0.43000000000000005,-0.02),x.add(y)}P.traverse((t)=>{if(t.isMesh)t.castShadow=!0,t.receiveShadow=!0})}let D=[];Z(-1.12,1.59,-4,0.42,0.21,0.31,"#677761"),Z(-1.12,1.61,-3.836,0.34,0.1,0.016,"#414b3d"),Z(-0.38,1.5,-3.98,0.3,0.018,0.22,"#c5b887");for(let[V,P,T]of[[0.7,-4.03,"#8b7747"],[0.98,-4.07,"#637751"],[1.29,-4.02,"#a88b50"]])K(V,1.6,P,0.07,0.075,0.25,T,14),K(V,1.739,P,0.077,0.077,0.028,"#aaa386",12);Z(0.2,1.51,-4.01,0.4,0.07,0.28,"#6c5838");for(let V=0;V<4;V++){let P=new C0(new M8(1,10,6),$(V%2?"#bca276":"#a98e61"));P.scale.set(0.055,0.035,0.115),P.position.set(0.07+V*0.085,1.57,-4),P.rotation.y=(V-1.5)*0.13,J.add(P)}let R=new sJ({transparent:!0,depthWrite:!1,map:Q((V,P,T)=>{for(let B=0;B<90;B++)V.fillStyle=B%2?"#152c2110":"#3036230a",V.beginPath(),V.ellipse(P/2+(W()-0.5)*P*0.45,T/2+(W()-0.5)*T*0.45,W()*P*0.24,W()*T*0.18,W()*Math.PI,0,Math.PI*2),V.fill()},256,256)});for(let[V,P,T,B]of[[-2.4,-2.2,1.1,0.9],[2.5,-2.5,1.3,0.8],[0,-3.25,2,0.6]]){let I=new C0(new kJ(T,B),R);I.rotation.x=-Math.PI/2,I.position.set(V,0.008,P),J.add(I)}for(let[V,P]of[[-3,-0.9],[3.3,-1.5]]){K(V,0.18,P,0.18,0.13,0.34,"#87553c",14),K(V,0.354,P,0.16,0.16,0.012,"#3f422d",12);let T=new TJ;T.position.set(V,0.36,P),J.add(T);for(let B=0;B<7;B++){let I=new aQ;I.moveTo(0,0),I.quadraticCurveTo(-0.09,0.23,0,0.55+W()*0.12),I.quadraticCurveTo(0.09,0.23,0,0);let l=new C0(new rQ(I,5),new i0({color:B%2?"#597d4f":"#3c603e",roughness:1,side:oJ}));l.rotation.set(0.3+W()*0.4,B*Math.PI*2/7,0),T.add(l)}D.push(T)}let q=new kJ(0.55,1.3,5,9),C=new C0(q,new i0({color:"#b2a27c",roughness:1,side:oJ}));C.position.set(-2.85,1.75,-3.05),J.add(C);let z=q.attributes.position,L=z.array.slice();return{update(V){D.forEach((P,T)=>P.rotation.z=Math.sin(V*0.53+T*2.1)*0.015);for(let P=0;P<z.count;P++){let T=L[P*3+1];z.setZ(P,Math.sin(V*1.17+T*3)*0.025*(0.65-T)/1.3)}z.needsUpdate=!0}}}function z5({scene:J,texture:Q,mat:$,box:Z,cylinder:K,staticGeo:W,random:Y}){let X=(w=0,p=0,m=0)=>new S(w,p,m),H=(w,p,m,J0,e,D0,L0=5000)=>{w.fillStyle=J0,w.fillRect(0,0,p,m);for(let G0=0;G0<L0;G0++)w.fillStyle=Y()>0.5?e:D0,w.fillRect(Y()*p,Y()*m,1+Y()*4,1+Y()*3)},U=[];function N(w,{w:p=1024,h:m=256,fondo:J0="#efe3c4",tinta:e="#24518a",sombra:D0="#c8402f",borde:L0=null,px:G0=0.62}={}){let x0=document.createElement("canvas");x0.width=p,x0.height=m;let c0=new p8(x0);c0.colorSpace=J8;let DJ=()=>{let j0=x0.getContext("2d"),MJ=document.fonts?.check?.("64px Shrikhand")?"Shrikhand":"Georgia";if(J0){j0.fillStyle=J0,j0.fillRect(0,0,p,m);for(let iJ=0;iJ<p*1.2;iJ++)j0.fillStyle=iJ%2?"rgba(120,100,70,.07)":"rgba(255,250,235,.08)",j0.fillRect(Math.random()*p,Math.random()*m,2+Math.random()*12,1+Math.random()*2)}else j0.clearRect(0,0,p,m);let _J=m*G0;j0.font=`${_J}px ${MJ}`;let hJ=j0.measureText(w).width;if(hJ>p*0.9)_J*=p*0.9/hJ,j0.font=`${_J}px ${MJ}`;j0.textAlign="center",j0.textBaseline="middle";let f=_J*0.06;if(D0)j0.fillStyle=D0,j0.fillText(w,p/2+f,m/2+f+_J*0.04);if(j0.fillStyle=e,j0.fillText(w,p/2,m/2+_J*0.04),L0)j0.strokeStyle=L0,j0.lineWidth=m*0.07,j0.strokeRect(j0.lineWidth/2,j0.lineWidth/2,p-j0.lineWidth,m-j0.lineWidth);for(let iJ=0;iJ<p*0.5;iJ++)j0.fillStyle=J0?"rgba(239,227,196,.3)":"rgba(0,0,0,0)",j0.fillRect(Math.random()*p,Math.random()*m,1+Math.random()*3,1+Math.random()*2);c0.needsUpdate=!0};return DJ(),U.push(DJ),c0}document.fonts?.load?.("64px Shrikhand").then(()=>U.forEach((w)=>w())).catch(()=>{});let F=new i0({roughness:0.93,map:Q((w,p,m)=>{H(w,p,m,"#e3d6b8","rgba(255,250,236,.10)","rgba(120,100,70,.08)");let J0=w.createLinearGradient(0,0,0,m);J0.addColorStop(0,"rgba(90,70,50,.12)"),J0.addColorStop(0.18,"rgba(90,70,50,0)"),J0.addColorStop(0.8,"rgba(90,70,50,0)"),J0.addColorStop(1,"rgba(90,70,50,.2)"),w.fillStyle=J0,w.fillRect(0,0,p,m);for(let e=0;e<22;e++){let D0=Y()*p,L0=m*(0.08+Y()*0.3),G0=w.createLinearGradient(0,0,0,L0);G0.addColorStop(0,"rgba(80,70,55,.2)"),G0.addColorStop(1,"rgba(80,70,55,0)"),w.fillStyle=G0,w.fillRect(D0,0,3+Y()*8,L0)}},512,512)}),G=new i0({roughness:0.9,map:Q((w,p,m)=>{H(w,p,m,"#3f9a96","rgba(200,240,230,.10)","rgba(20,50,50,.10)");for(let J0=0;J0<50;J0++)w.fillStyle="rgba(225,218,195,.55)",w.beginPath(),w.ellipse(Y()*p,Y()*m,2+Y()*9,1+Y()*5,Y()*3,0,Math.PI*2),w.fill()},256,256)});Z(-3.48,0.625,-2.355,0.702,1.25,0.012,G),Z(3.45,0.625,-2.355,0.802,1.25,0.012,G),Z(-3.906,0.625,-3.85,0.012,1.25,2.72,G),Z(3.906,0.625,-3.85,0.012,1.25,2.72,G);let E=22,O="#3d8a5c",D="#e8dfc8",R=Q((w,p,m)=>{for(let e=0;e<E;e++)w.fillStyle=e%2?D:O,w.fillRect(e*p/E,0,Math.ceil(p/E),m);for(let e=0;e<2500;e++)w.fillStyle=Y()>0.5?"rgba(255,250,235,.06)":"rgba(20,30,20,.07)",w.fillRect(Y()*p,Y()*m,2,2);let J0=w.createLinearGradient(0,0,0,m);J0.addColorStop(0,"rgba(0,0,0,.14)"),J0.addColorStop(1,"rgba(40,30,20,0)"),w.fillStyle=J0,w.fillRect(0,0,p,m)},1024,128);W(new kJ(7.3,0.86),new i0({map:R,roughness:0.95,side:oJ}),[0,2.59,-1.955],[-1.237,0,0]);let q=Q((w,p,m)=>{let J0=p/E;for(let e=0;e<E;e++)w.fillStyle=e%2?D:O,w.fillRect(e*J0,0,Math.ceil(J0),m*0.5),w.beginPath(),w.arc(e*J0+J0/2,m*0.5,J0/2-0.5,0,Math.PI),w.fill()},1024,64);W(new kJ(7.3,0.2),new i0({map:q,roughness:0.95,side:oJ,alphaTest:0.5}),[0,2.35,-1.548]);{let w=new i0({roughness:0.8,map:Q((m,J0,e)=>{m.fillStyle="#2a3332",m.fillRect(0,0,J0,e);let D0=m.createLinearGradient(0,0,0,e);D0.addColorStop(0,"#cfe8e0"),D0.addColorStop(1,"#8fb3aa"),m.fillStyle=D0,m.fillRect(14,14,J0-28,e-28),m.strokeStyle="#1f2525",m.lineWidth=7;for(let L0=30;L0<J0-20;L0+=26)m.beginPath(),m.moveTo(L0,14),m.lineTo(L0,e-14),m.stroke();for(let L0 of[e*0.33,e*0.66])m.beginPath(),m.moveTo(14,L0),m.lineTo(J0-14,L0),m.stroke();m.strokeStyle="#e8e0cc",m.lineWidth=12,m.strokeRect(6,6,J0-12,e-12)},256,256),emissive:"#ffffff",emissiveIntensity:0.12});w.emissiveMap=w.map,W(new kJ(1.1,1),w,[3.915,1.75,-4.3],[0,Math.PI/2,0]);let p=new C0(new kJ(2.2,0.36),new i0({map:N("Víveres · Bebidas · Hielo",{w:1536,h:252,fondo:null,tinta:"#24518a",sombra:"#c8402f"}),transparent:!0,roughness:0.9}));p.position.set(3.915,2.55,-3.75),p.rotation.y=Math.PI/2,J.add(p)}let C=3.3,z=2.75,L=-2.7,V=C+z;Z(0,C+z/2,-5.2,8.2,z,0.2,F),Z(-4,C+z/2,-3.95,0.2,z,2.7,F),Z(4,C+z/2,-3.95,0.2,z,2.7,F),Z(0,C+z/2,L,8.2,z,0.2,F),Z(0,V-0.08,-3.95,8.44,0.16,2.95,"#d3c9b0"),Z(0,C+0.06,L+0.12,8.3,0.1,0.06,"#3d938e");let P=new i0({roughness:0.7,map:Q((w,p,m)=>{w.fillStyle="#2d3a3a",w.fillRect(0,0,p,m);let J0=15,e=(m-24)/J0;for(let D0=0;D0<J0;D0++){let L0=12+D0*e;w.fillStyle="#7aa39d",w.fillRect(12,L0,p-24,e*0.72),w.fillStyle="rgba(0,0,0,.25)",w.fillRect(12,L0+e*0.62,p-24,e*0.1)}w.strokeStyle="#e8e0cc",w.lineWidth=12,w.strokeRect(6,6,p-12,m-12)},256,256)});W(new kJ(1.2,1.25),P,[-2.5,4.6,L+0.107]);let T=new i0({roughness:0.7,map:P.map,emissive:"#8fb0ff",emissiveMap:P.map,emissiveIntensity:0.25}),B=new C0(new kJ(1.2,1.25),T);B.position.set(2.5,4.6,L+0.107),J.add(B);let I=new i0({roughness:0.8,emissive:"#ffffff",emissiveIntensity:0.55,map:Q((w,p,m)=>{let J0=w.createLinearGradient(0,0,0,m);J0.addColorStop(0,"#f0c27f"),J0.addColorStop(1,"#b87a44"),w.fillStyle=J0,w.fillRect(0,0,p,m),w.strokeStyle="#1d2222",w.lineWidth=6;for(let e=18;e<p;e+=22)w.beginPath(),w.moveTo(e,0),w.lineTo(e,m),w.stroke();for(let e=m*0.2;e<m;e+=m*0.2)w.beginPath(),w.moveTo(0,e),w.lineTo(p,e),w.stroke();w.lineWidth=5;for(let e=0;e<4;e++)w.beginPath(),w.arc(p/2,m*0.1+e*m*0.2,18,0,Math.PI*2),w.stroke();w.strokeStyle="#e8e0cc",w.lineWidth=14,w.strokeRect(7,7,p-14,m-14)},128,256)});I.emissiveMap=I.map,W(new kJ(1,2.1),I,[0,C+1.08,L+0.107]);let l="#262c2b";for(let w of[3.38,4.22])Z(0,w,-1.56,8,0.04,0.04,l);for(let w=-3.94;w<=3.95;w+=0.14)Z(w,3.8,-1.56,0.018,0.84,0.018,l);for(let w of[-3.97,3.97]){for(let p of[3.38,4.22])Z(w,p,-2.08,0.04,0.04,1.04,l);for(let p=-2.55;p<=-1.6;p+=0.14)Z(w,3.8,p,0.018,0.84,0.018,l)}for(let[w,p]of[[-3.3,-1.8],[3.25,-1.85],[1.5,-1.78]]){K(w,3.46,p,0.13,0.1,0.24,"#9a5a3c",12);for(let m=0;m<4;m++)W(new M8(1,8,6),$(m%2?"#5b7f4f":"#44663e",0.95),[w+(m-1.5)*0.06,3.66+m%2*0.05,p+(m%3-1)*0.04],[0,0,0],[0.12,0.14,0.1])}K(2.5,V+0.52,-4.3,0.5,0.55,1,"#1f2322",18),K(2.5,V+1.06,-4.3,0.2,0.22,0.08,"#2b302f",12),K(-1.8,V+0.35,-4.6,0.035,0.035,0.7,"#8d8f89",8);for(let[w,p]of[[-3.95,-2.75],[3.95,-2.75],[-3.95,-5.15],[3.95,-5.15]])for(let[m,J0]of[[-0.05,-0.05],[0.05,-0.05],[-0.05,0.05],[0.05,0.05]])K(w+m,V+0.42,p+J0,0.007,0.007,0.84,"#6b4a35",4);let j=$("#8a6a48",0.8),x=$("#4f7f55",0.85);for(let w of[0.55,1,1.45,1.9,2.35,2.8])Z(-3.53,w,-3.85,0.34,0.04,2.2,x);for(let w of[-4.94,-2.76])Z(-3.53,1.65,w,0.34,2.3,0.04,x);let t=Q((w,p,m)=>{w.fillStyle="#bdbdbd",w.fillRect(0,0,p,m),w.fillStyle="#ffffff",w.fillRect(0,m*0.34,p,m*0.34),w.fillStyle="#6a6a6a",w.fillRect(0,m*0.33,p,m*0.02),w.fillRect(0,m*0.67,p,m*0.02)},64,64),y=new i0({map:t,roughness:0.62}),i=["#c8402f","#e3ae55","#f3eee3","#2f6fa8","#3f8a5a","#e07a2e","#d65a7a","#f1d24a","#6fb7c9","#8a3b3b","#ffffff","#1f5f9e"],s=[],g=[],H0=(w,p,m,J0,e,D0)=>{let L0=w;while(L0<p){let G0=0.07+Y()*0.12,x0=0.12+Y()*0.17,c0=Math.min(e,0.1+Y()*0.12),DJ=Y()<0.35,j0=new h0(i[Math.floor(Y()*i.length)]).multiplyScalar(0.7+Y()*0.22);if(L0+G0>p)break;let MJ=D0==="x"?X(L0+G0/2,m+x0/2,J0):X(J0,m+x0/2,L0+G0/2);(DJ?g:s).push({pos:MJ,s:DJ?X(G0*0.85,x0*0.8,G0*0.85):D0==="x"?X(G0,x0,c0):X(c0,x0,G0),col:j0}),L0+=G0+0.012}};for(let w of[1.6125,2.5725])H0(-3.4,2.2,w,-4.8,0.3,"x");for(let w of[0.57,1.02,1.47,1.92,2.37,2.82])H0(-4.9,-2.8,w,-3.55,0.28,"z");for(let[w,p]of[[new yJ(1,1,1),s],[new AJ(0.5,0.5,1,10),g]]){let m=new S9(w,y,p.length),J0=new SJ;p.forEach((e,D0)=>{J0.position.copy(e.pos),J0.scale.copy(e.s),J0.rotation.set(0,(Y()-0.5)*0.12,0),J0.updateMatrix(),m.setMatrixAt(D0,J0.matrix),m.setColorAt(D0,e.col)}),m.frustumCulled=!1,J.add(m)}{let m=[[0.05,0.47],[0.53,0.95]],J0=(G0,x0)=>{if(G0.fillStyle=x0?"#000":"#5b3b24",G0.fillRect(0,0,1024,368),!x0){for(let c0=0;c0<500;c0++)G0.fillStyle=c0%2?"rgba(150,100,60,.25)":"rgba(30,18,10,.25)",G0.fillRect(Math.random()*1024,Math.random()*368,20+Math.random()*80,1+Math.random()*2);G0.fillStyle="#3a2616",G0.fillRect(0,323.84,1024,44.16)}for(let[c0,DJ]of m){let j0=c0*1024,MJ=DJ*1024;G0.fillStyle=x0?"#6e6a60":"#d9d3c1",G0.fillRect(j0,44.16,MJ-j0,257.6);for(let f=0;f<2;f++){let iJ=44.16+(f+0.5)*257.6/2;G0.fillStyle=x0?"#6f6a60":"#b9b3a2",G0.fillRect(j0,iJ+51.52000000000001,MJ-j0,4);let YJ=iJ+51.52000000000001;G0.globalAlpha=x0?0.7:1;for(let EJ=j0+10;EJ<MJ-60;){let A=Math.random()<0.3,k=i[Math.floor(Math.random()*i.length)];if(A){let v=18+Math.random()*6;G0.fillStyle=x0?"#9a9a9a":"rgba(235,240,240,.9)",G0.fillRect(EJ,YJ-v*2.4,v*2,v*2.4),G0.fillStyle=k;for(let o=0;o<7;o++)G0.beginPath(),G0.arc(EJ+5+Math.random()*(v*2-10),YJ-6-Math.random()*v*1.8,5,0,Math.PI*2),G0.fill();G0.fillStyle="#c8402f",G0.fillRect(EJ-2,YJ-v*2.4-8,v*2+4,9),EJ+=v*2+8}else{let v=46+Math.random()*34,o=257.6*(0.2+Math.random()*0.1);G0.fillStyle=k,G0.beginPath(),G0.moveTo(EJ,YJ),G0.lineTo(EJ+3,YJ-o);for(let q0=0;q0<=6;q0++)G0.lineTo(EJ+3+q0*(v-6)/6,YJ-o-(q0%2?5:0));G0.lineTo(EJ+v,YJ),G0.closePath(),G0.fill(),G0.fillStyle="rgba(255,255,255,.7)",G0.fillRect(EJ+v*0.2,YJ-o*0.62,v*0.6,o*0.22),G0.fillStyle="rgba(255,255,255,.25)",G0.fillRect(EJ+4,YJ-o+8,5,o-14),EJ+=v+5}}G0.globalAlpha=1}if(!x0)G0.fillStyle="rgba(255,255,255,.22)",G0.beginPath(),G0.moveTo(j0+20,44.16),G0.lineTo(j0+70,44.16),G0.lineTo(j0+20,301.76),G0.lineTo(j0-10+20,301.76),G0.fill(),G0.strokeStyle="#3a2616",G0.lineWidth=10,G0.strokeRect(j0,44.16,MJ-j0,257.6)}},e=(G0)=>Q((x0)=>J0(x0,G0),1024,368),D0=new i0({map:e(!1),emissive:"#fff4de",emissiveMap:e(!0),emissiveIntensity:0.2,roughness:0.55}),L0=new C0(new kJ(3.9,1.4),D0);L0.position.set(0,0.7,-3.924),J.add(L0)}let a=Q((w,p,m)=>{let e=m/7;w.fillStyle="#8a7a5a",w.fillRect(p/2-2,0,4,m);for(let D0=0;D0<7;D0++){let L0=D0*e+4;w.fillStyle=i[(D0*5+3)%i.length],w.fillRect(6,L0,p-12,e-8),w.fillStyle="rgba(255,255,255,.3)",w.fillRect(10,L0+6,p*0.16,e-20),w.fillStyle="rgba(255,255,255,.75)",w.fillRect(p*0.3,L0+e*0.36,p*0.4,e*0.16)}},64,448),X0=new i0({map:a,roughness:0.45,alphaTest:0.5,side:oJ});for(let w of[-1.74,-1.52,1.52,1.74])W(new kJ(0.15,0.86),X0,[w,2.66,-3.86],[0,(Y()-0.5)*0.5,0]);let E0=new C0(new kJ(0.8,1.5),new sJ({color:new h0(1.05,1.08,1.1),map:Q((w,p,m)=>{w.fillStyle="#dcecef",w.fillRect(0,0,p,m);let J0=5;for(let D0=0;D0<J0;D0++){let L0=m/J0,G0=D0*L0;w.fillStyle="rgba(140,160,165,.9)",w.fillRect(0,G0+L0*0.88,p,5);for(let x0=0;x0<8;x0++){let c0=(p-20)/8,DJ=10+x0*c0;w.fillStyle=["#c8402f","#2c7a3f","#e3ae55","#7a3a1c","#2f6fa8","#f3eee3","#e07a2e"][(x0+D0*3)%7],w.fillRect(DJ+c0*0.15,G0+L0*0.3,c0*0.7,L0*0.56),w.fillRect(DJ+c0*0.36,G0+L0*0.12,c0*0.28,L0*0.2)}}let e=w.createLinearGradient(0,0,p,0);e.addColorStop(0,"rgba(255,255,255,.3)"),e.addColorStop(0.35,"rgba(255,255,255,0)"),w.fillStyle=e,w.fillRect(0,0,p,m),w.strokeStyle="#9aa8aa",w.lineWidth=10,w.strokeRect(0,0,p,m)},256,480)}));E0.position.set(2.95,1.12,-4.09),J.add(E0);let r0=new C0(new kJ(0.9,0.2),new sJ({map:N("Bien fría",{w:720,h:160,fondo:"#b8372b",tinta:"#f3eee3",sombra:null,px:0.62}),color:new h0(1.1,1.1,1.1)}));r0.position.set(2.95,2.17,-4.14),J.add(r0),Z(2.45,0.4,-1.86,1,0.8,0.6,"#e7ebe8"),Z(2.45,0.83,-1.86,1.04,0.06,0.64,"#d4dad8"),Z(2.45,0.12,-1.555,0.96,0.1,0.012,"#b9c0bd");{let w=new C0(new kJ(0.62,0.19),new i0({map:N("HIELO",{w:640,h:196,fondo:null,tinta:"#1f5f9e",sombra:"#c8402f",px:0.7}),transparent:!0,roughness:0.8}));w.position.set(2.45,0.55,-1.553),J.add(w)}{let w=$("#2d63a8",0.5),p=new i0({color:"#8cc0e6",roughness:0.12,transparent:!0,opacity:0.84});for(let e=0;e<2;e++)for(let D0=0;D0<3;D0++){let L0=3.15+e*0.4,G0=0.21+D0*0.4;W(new AJ(0.155,0.155,0.4,16),p,[L0,G0,-2],[Math.PI/2,0,0]),W(new AJ(0.05,0.05,0.1,10),p,[L0,G0,-2.25],[Math.PI/2,0,0])}for(let e of[0,0.4,0.8,1.2])Z(3.35,e+0.012,-2,0.84,0.024,0.46,w);for(let e of[2.94,3.35,3.7600000000000002])Z(e,0.61,-2,0.03,1.22,0.46,w)}let _0=(w,p,m,J0,e)=>{let D0=$(e,0.5),L0=(G0,x0,c0,DJ,j0=0)=>{G0.rotateX(j0);let MJ=X(x0,c0,DJ).applyAxisAngle(X(0,1,0),J0);W(G0,D0,[w+MJ.x,p+MJ.y,m+MJ.z],[0,J0,0])};L0(new _8(0.46,0.035,0.43,2,0.015),0,0.43,0),L0(new _8(0.44,0.42,0.03,2,0.012),0,0.71,-0.22,-0.16);for(let G0 of[-0.2,0.2])L0(new AJ(0.018,0.024,0.43,6),G0,0.215,0.17,0.12),L0(new AJ(0.018,0.024,0.45,6),G0,0.22,-0.19,-0.14),L0(new yJ(0.03,0.18,0.3),G0*1.1,0.54,-0.02)};for(let w=0;w<4;w++)_0(-3.42,w*0.075,-1.32-w*0.012,0.3,"#ecece6");_0(3.55,0,0.55,-1.9,"#ecece6");{let J0=(x0,c0,DJ,j0,MJ,_J=0,hJ=0)=>{x0.rotateX(_J),x0.rotateZ(hJ);let f=X(DJ,j0,MJ).applyAxisAngle(X(0,1,0),0.3);W(x0,c0,[-3.25+f.x,f.y,2.85+f.z],[0,0.3,0])},e=$("#171b1b",0.8),D0=$("#9aa3a0",0.35,0.6),L0=$("#a8382c",0.45,0.1),G0=$("#1e2222",0.7);for(let x0 of[-0.52,0.5])J0(new w9(0.26,0.055,8,18),e,x0,0.3,0),J0(new AJ(0.09,0.09,0.08,10),D0,x0,0.3,0,Math.PI/2);J0(new _8(0.6,0.22,0.24,2,0.05),L0,-0.02,0.53,0,0,-0.08),J0(new _8(0.55,0.08,0.26,2,0.03),G0,-0.28,0.68,0),J0(new _8(0.28,0.34,0.2,2,0.05),L0,0.37,0.64,0,0,-0.35),J0(new AJ(0.018,0.018,0.62,6),D0,0.44,0.92,0,Math.PI/2),J0(new AJ(0.02,0.02,0.62,6),D0,0.47,0.6,0,0,0.35),J0(new AJ(0.03,0.035,0.45,8),D0,-0.35,0.3,0.13,0,Math.PI/2+0.1),J0(new _8(0.3,0.03,0.22,1,0.01),D0,-0.6,0.73,0)}for(let w=-9;w<4.4;w+=2)Z(w+0.5,-0.074,3.45,1,0.152,0.202,"#d6b24e");Z(8.3,-0.2,-4.575,7.4,0.1,15.85,"#2b3133"),Z(4.6,-0.075,-4.575,0.2,0.15,15.85,"#a8a391"),Z(12.3,-0.07,-4.575,1.2,0.16,15.85,"#8a8578");for(let w=-11;w<3;w+=1.8)Z(8.3,-0.146,w,0.06,0.008,0.7,"#b9ad83");{let w=new i0({color:"#ffd08a",emissive:"#ffb35a",emissiveIntensity:2.2}),p=$("#2a3436",0.8),m=["#d8a25a","#8fb8a8","#e0d2b0","#c9897d","#b9c47a"],J0=-12,e=0;while(J0<2.4){let D0=3+Y()*1.6,L0=3+Y()*2.6,G0=m[e++%m.length];Z(14.4,L0/2,J0+D0/2,3,L0,D0,G0),Z(14.4,L0+0.08,J0+D0/2,3.1,0.16,D0+0.1,"#ddd4bf");let x0=Math.max(1,Math.floor(D0/1.5));for(let c0=0;c0<x0;c0++){let DJ=J0+(c0+0.5)*D0/x0;if(W(new kJ(0.75,0.95),Y()<0.4?w:p,[12.885,1.55,DJ],[0,-Math.PI/2,0]),L0>4.2)W(new kJ(0.7,0.8),Y()<0.35?w:p,[12.885,L0-1.1,DJ],[0,-Math.PI/2,0])}J0+=D0+0.15}}{let w=new i0({roughness:0.6,metalness:0.3,map:Q((m,J0,e)=>{m.fillStyle="#8f9a94",m.fillRect(0,0,J0,e);for(let D0=0;D0<e;D0+=8)m.fillStyle="rgba(40,45,44,.35)",m.fillRect(0,D0,J0,2),m.fillStyle="rgba(230,235,230,.18)",m.fillRect(0,D0+3,J0,2);for(let D0=0;D0<40;D0++)m.fillStyle="rgba(120,70,40,.18)",m.fillRect(Y()*J0,Y()*e,4+Y()*20,2+Y()*10)},256,256)});W(new kJ(2.3,2.1),w,[-7,1.05,-1.365]),Z(-7,2.2,-1.33,2.45,0.2,0.1,"#6d7571");let p=new C0(new kJ(1.7,0.42),new i0({map:N("Banca La Suerte",{w:1024,h:252,fondo:"#2f7a4d",tinta:"#f3eee3",sombra:"#1b2c22",borde:"#e3ae55",px:0.52}),roughness:0.85,emissive:"#ffffff",emissiveIntensity:0.08}));p.material.emissiveMap=p.material.map,p.position.set(-10.5,2.72,-1.36),J.add(p)}let b0=X(4.3,0,3);K(b0.x,3.9,b0.z,0.11,0.16,7.8,"#8e8a80",10),Z(b0.x,7.25,b0.z,0.1,0.1,1.7,"#5c574c"),K(b0.x+0.28,6.3,b0.z,0.2,0.2,0.62,"#6d7470",12);let e0=(w,p,m,J0="#141819",e=0.011)=>{let D0=w.clone().lerp(p,0.5);D0.y-=m*2,W(new i8(new E9(w,D0,p),22,e,4,!1),$(J0),[0,0,0])};for(let w of[-0.6,0,0.6])e0(X(b0.x,7.3,b0.z+w),X(6,6.6,9.2+w*0.4),0.25);for(let w of[-0.5,0.5])e0(X(b0.x,7.3,b0.z+w),X(-5,4.2,-1+w*0.6),0.55);e0(X(b0.x,6.4,b0.z),X(3.95,5.7,-2.72),0.35),e0(X(b0.x,6.2,b0.z),X(3.95,5.5,-2.72),0.5,"#1d2121",0.008),e0(X(b0.x,5.9,b0.z),X(4.35,5.4,-9),0.4,"#1d2121",0.009),e0(X(b0.x,5.7,b0.z),X(4.35,5.2,-9),0.6,"#20241f",0.007);{let w=new c7(Array.from({length:14},(p,m)=>{let J0=m/13*Math.PI*4;return X(b0.x+0.16+Math.cos(J0)*0.14,5.2-m*0.018+Math.sin(J0)*0.14,b0.z+Math.sin(J0)*0.05)}));W(new i8(w,60,0.008,4,!1),$("#141819"),[0,0,0])}let $0=0;return{update(w){if(w>$0)$0=w+0.25+Math.random()*1.4,T.emissiveIntensity=0.12+Math.random()*0.45,T.emissive.setHSL(0.58+Math.random()*0.08,0.5,0.55+Math.random()*0.2)}}}var aO=["cafe","morir","presidente","presidente"];function rO(){let J=document.createElement("canvas");J.width=256,J.height=128;let Q=J.getContext("2d");Q.fillStyle="#f1ece0",Q.fillRect(0,0,256,128),Q.fillStyle="#b3262d",Q.fillRect(0,10,256,14),Q.fillRect(0,104,256,14),Q.fillStyle="#1f5a36",Q.beginPath(),Q.ellipse(128,64,54,28,0,0,Math.PI*2),Q.fill(),Q.fillStyle="#f1ece0",Q.beginPath(),Q.ellipse(128,64,46,21,0,0,Math.PI*2),Q.fill(),Q.fillStyle="#b3262d",Q.fillRect(92,58,72,12);let $=new p8(J);return $.colorSpace=J8,$}function tO(){let J=new TJ,Q=(H,U)=>new N0(H,U),$=[Q(0,0),Q(0.034,0),Q(0.037,0.006),Q(0.037,0.165),Q(0.034,0.188),Q(0.022,0.222),Q(0.0145,0.252),Q(0.0138,0.274),Q(0.0158,0.279),Q(0.0158,0.29),Q(0.0112,0.29),Q(0.0106,0.268),Q(0.0112,0.24)],Z=new i0({color:"#2d5a26",roughness:0.18,metalness:0.05,envMapIntensity:1.4});J.add(new C0(new O7($,20),Z));let K=new C0(new O7($.slice(1,5).map((H)=>Q(H.x+0.0006,H.y)),20),new i0({color:"#e8f0e4",roughness:0.9,transparent:!0,opacity:0.22,depthWrite:!1}));J.add(K);let W=new C0(new AJ(0.0376,0.0376,0.075,24,1,!0),new i0({map:rO(),roughness:0.6}));W.position.y=0.095,J.add(W);let Y=new C0(new AJ(0.0149,0.0152,0.02,16,1,!0),new i0({color:"#b3262d",roughness:0.5}));Y.position.y=0.262,J.add(Y);let X=new C0(new s9(0.0112,16),new sJ({color:"#0d160c"}));return X.rotation.x=-Math.PI/2,X.position.y=0.245,J.add(X),{g:J,alto:0.11,radio:0.037,inclina:1.25,boca:0.18}}function eO(){let J=new TJ,Q=new C0(new AJ(0.034,0.029,0.14,24,1,!0),new i0({color:"#dfe9ec",roughness:0.08,transparent:!0,opacity:0.28,depthWrite:!1,side:oJ}));Q.position.y=0.07,Q.renderOrder=2,J.add(Q);let $=new C0(new AJ(0.029,0.029,0.008,24),new i0({color:"#dfe9ec",roughness:0.1,transparent:!0,opacity:0.5}));$.position.y=0.004,J.add($);let Z=new C0(new AJ(0.0318,0.0285,0.112,24),new i0({color:"#f2bf86",roughness:0.45}));Z.position.y=0.064,J.add(Z);for(let[W,Y,X]of[[0.01,0.006,0.4],[-0.009,-0.008,1.1],[0.002,-0.012,2]]){let H=new C0(new yJ(0.016,0.013,0.016),new i0({color:"#f6f3ec",roughness:0.15,transparent:!0,opacity:0.8}));H.position.set(W,0.121,Y),H.rotation.set(X,X*0.7,0),J.add(H)}let K=new C0(new AJ(0.0028,0.0028,0.19,8),new i0({color:"#c8392e",roughness:0.5}));return K.position.set(0.012,0.11,0.004),K.rotation.z=-0.16,J.add(K),{g:J,alto:0.06,radio:0.034,inclina:0.85,boca:0.09}}function JR(){let J=new TJ,Q=new i0({color:"#efe9da",roughness:0.22}),$=new C0(new AJ(0.045,0.04,0.008,28),Q);$.position.y=0.004,J.add($);let Z=new i0({color:"#efe9da",roughness:0.22,side:oJ}),K=new C0(new AJ(0.028,0.021,0.048,24,1,!0),Z),W=new C0(new s9(0.021,20),Q);W.rotation.x=-Math.PI/2,W.position.y=0.0085,J.add(W),K.position.y=0.032,J.add(K);let Y=new C0(new s9(0.0262,24),new i0({color:"#2a160c",roughness:0.15}));Y.rotation.x=-Math.PI/2,Y.position.y=0.049,J.add(Y);let X=new C0(new w9(0.012,0.0035,6,12,Math.PI*1.3),Q);return X.position.set(0.03,0.034,0),X.rotation.z=-Math.PI*0.65,J.add(X),J.remove($),{g:J,alto:0.03,radio:0.028,inclina:0.9,boca:0.03,plato:$}}function A5(J){let Q=[];for(let $=0;$<4;$++){let Z=aO[$],K=Z==="presidente"?tO():Z==="morir"?eO():JR(),[W,Y,X]=q9[$],H=R0.tableWidth/2-0.055,U=R0.tableCenterY+R0.tableThickness/2,N=new S(-H,0,R0.seatDistance-H).applyAxisAngle(new S(0,1,0),X).add(new S(W,0,Y));if(N.y=U,K.g.traverse((F)=>{if(F.isMesh)F.castShadow=!0,F.receiveShadow=!0}),K.plato)N.y+=0.008;if(K.g.position.copy(N),J.add(K.g),K.plato)K.plato.position.copy(N),K.plato.position.y=U+0.004,K.plato.traverse((F)=>{if(F.isMesh)F.receiveShadow=!0}),J.add(K.plato);Q.push({group:K.g,home:N,index:$,tipo:Z,alto:K.alto,radio:K.radio,inclina:K.inclina,boca:K.boca})}return Q}var ZQ={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class J9{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var QR=new t9(-1,1,1,-1,0,1);class _5 extends mJ{constructor(){super();this.setAttribute("position",new GJ([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new GJ([0,2,0,0,2,0],2))}}var $R=new _5;class $6{constructor(J){this._mesh=new C0($R,J)}dispose(){this._mesh.geometry.dispose()}render(J){J.render(this._mesh,QR)}get material(){return this._mesh.material}set material(J){this._mesh.material=J}}class O$ extends J9{constructor(J,Q="tDiffuse"){super();if(this.textureID=Q,this.uniforms=null,this.material=null,J instanceof rJ)this.uniforms=J.uniforms,this.material=J;else if(J)this.uniforms=i9.clone(J.uniforms),this.material=new rJ({name:J.name!==void 0?J.name:"unspecified",defines:Object.assign({},J.defines),uniforms:this.uniforms,vertexShader:J.vertexShader,fragmentShader:J.fragmentShader});this._fsQuad=new $6(this.material)}render(J,Q,$){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=$.texture;if(this._fsQuad.material=this.material,this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget(Q),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class JK extends J9{constructor(J,Q){super();this.scene=J,this.camera=Q,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(J,Q,$){let Z=J.getContext(),K=J.state;K.buffers.color.setMask(!1),K.buffers.depth.setMask(!1),K.buffers.color.setLocked(!0),K.buffers.depth.setLocked(!0);let W,Y;if(this.inverse)W=0,Y=1;else W=1,Y=0;if(K.buffers.stencil.setTest(!0),K.buffers.stencil.setOp(Z.REPLACE,Z.REPLACE,Z.REPLACE),K.buffers.stencil.setFunc(Z.ALWAYS,W,4294967295),K.buffers.stencil.setClear(Y),K.buffers.stencil.setLocked(!0),J.setRenderTarget($),this.clear)J.clear();if(J.render(this.scene,this.camera),J.setRenderTarget(Q),this.clear)J.clear();J.render(this.scene,this.camera),K.buffers.color.setLocked(!1),K.buffers.depth.setLocked(!1),K.buffers.color.setMask(!0),K.buffers.depth.setMask(!0),K.buffers.stencil.setLocked(!1),K.buffers.stencil.setFunc(Z.EQUAL,1,4294967295),K.buffers.stencil.setOp(Z.KEEP,Z.KEEP,Z.KEEP),K.buffers.stencil.setLocked(!0)}}class fY extends J9{constructor(){super();this.needsSwap=!1}render(J){J.state.buffers.stencil.setLocked(!1),J.state.buffers.stencil.setTest(!1)}}class hY{constructor(J,Q){if(this.renderer=J,this._pixelRatio=J.getPixelRatio(),Q===void 0){let $=J.getSize(new N0);this._width=$.width,this._height=$.height,Q=new Q8(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:O8}),Q.texture.name="EffectComposer.rt1"}else this._width=Q.width,this._height=Q.height;this.renderTarget1=Q,this.renderTarget2=Q.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new O$(ZQ),this.copyPass.material.blending=n8,this.timer=new hZ}swapBuffers(){let J=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=J}addPass(J){this.passes.push(J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(J,Q){this.passes.splice(Q,0,J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(J){let Q=this.passes.indexOf(J);if(Q!==-1)this.passes.splice(Q,1)}isLastEnabledPass(J){for(let Q=J+1;Q<this.passes.length;Q++)if(this.passes[Q].enabled)return!1;return!0}render(J){if(this.timer.update(),J===void 0)J=this.timer.getDelta();let Q=this.renderer.getRenderTarget(),$=!1;for(let Z=0,K=this.passes.length;Z<K;Z++){let W=this.passes[Z];if(W.enabled===!1)continue;if(W.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(Z),W.render(this.renderer,this.writeBuffer,this.readBuffer,J,$),W.needsSwap){if($){let Y=this.renderer.getContext(),X=this.renderer.state.buffers.stencil;X.setFunc(Y.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,J),X.setFunc(Y.EQUAL,1,4294967295)}this.swapBuffers()}if(JK!==void 0){if(W instanceof JK)$=!0;else if(W instanceof fY)$=!1}}this.renderer.setRenderTarget(Q)}reset(J){if(J===void 0){let Q=this.renderer.getSize(new N0);this._pixelRatio=this.renderer.getPixelRatio(),this._width=Q.width,this._height=Q.height,J=this.renderTarget1.clone(),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=J,this.renderTarget2=J.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(J,Q){this._width=J,this._height=Q;let $=this._width*this._pixelRatio,Z=this._height*this._pixelRatio;this.renderTarget1.setSize($,Z),this.renderTarget2.setSize($,Z);for(let K=0;K<this.passes.length;K++)this.passes[K].setSize($,Z)}setPixelRatio(J){this._pixelRatio=J,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class bY extends J9{constructor(J,Q,$=null,Z=null,K=null){super();this.scene=J,this.camera=Q,this.overrideMaterial=$,this.clearColor=Z,this.clearAlpha=K,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new h0}render(J,Q,$){let Z=J.autoClear;J.autoClear=!1;let K,W;if(this.overrideMaterial!==null)W=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)J.getClearColor(this._oldClearColor),J.setClearColor(this.clearColor,J.getClearAlpha());if(this.clearAlpha!==null)K=J.getClearAlpha(),J.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)J.clearDepth();if(J.setRenderTarget(this.renderToScreen?null:$),this.clear===!0)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);if(J.render(this.scene,this.camera),this.clearColor!==null)J.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)J.setClearAlpha(K);if(this.overrideMaterial!==null)this.scene.overrideMaterial=W;J.autoClear=Z}}var T5={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new h0(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Z6 extends J9{constructor(J,Q=1,$,Z){super();this.strength=Q,this.radius=$,this.threshold=Z,this.resolution=J!==void 0?new N0(J.x,J.y):new N0(256,256),this.clearColor=new h0(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let K=Math.round(this.resolution.x/2),W=Math.round(this.resolution.y/2);this.renderTargetBright=new Q8(K,W,{type:O8,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let U=0;U<this.nMips;U++){let N=new Q8(K,W,{type:O8,depthBuffer:!1});N.texture.name="UnrealBloomPass.h"+U,N.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(N);let F=new Q8(K,W,{type:O8,depthBuffer:!1});F.texture.name="UnrealBloomPass.v"+U,F.texture.generateMipmaps=!1,this.renderTargetsVertical.push(F),K=Math.round(K/2),W=Math.round(W/2)}let Y=T5;this.highPassUniforms=i9.clone(Y.uniforms),this.highPassUniforms.luminosityThreshold.value=Z,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new rJ({uniforms:this.highPassUniforms,vertexShader:Y.vertexShader,fragmentShader:Y.fragmentShader}),this.separableBlurMaterials=[];let X=[6,10,14,18,22];K=Math.round(this.resolution.x/2),W=Math.round(this.resolution.y/2);for(let U=0;U<this.nMips;U++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(X[U])),this.separableBlurMaterials[U].uniforms.invSize.value=new N0(1/K,1/W),K=Math.round(K/2),W=Math.round(W/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=Q,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let H=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=H,this.bloomTintColors=[new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1),new S(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=i9.clone(ZQ.uniforms),this.blendMaterial=new rJ({uniforms:this.copyUniforms,vertexShader:ZQ.vertexShader,fragmentShader:ZQ.fragmentShader,premultipliedAlpha:!0,blending:z9,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new h0,this._oldClearAlpha=1,this._basic=new sJ,this._fsQuad=new $6(null)}dispose(){for(let J=0;J<this.renderTargetsHorizontal.length;J++)this.renderTargetsHorizontal[J].dispose();for(let J=0;J<this.renderTargetsVertical.length;J++)this.renderTargetsVertical[J].dispose();this.renderTargetBright.dispose();for(let J=0;J<this.separableBlurMaterials.length;J++)this.separableBlurMaterials[J].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(J,Q){let $=Math.round(J/2),Z=Math.round(Q/2);this.renderTargetBright.setSize($,Z);for(let K=0;K<this.nMips;K++)this.renderTargetsHorizontal[K].setSize($,Z),this.renderTargetsVertical[K].setSize($,Z),this.separableBlurMaterials[K].uniforms.invSize.value=new N0(1/$,1/Z),$=Math.round($/2),Z=Math.round(Z/2)}render(J,Q,$,Z,K){J.getClearColor(this._oldClearColor),this._oldClearAlpha=J.getClearAlpha();let W=J.autoClear;if(J.autoClear=!1,J.setClearColor(this.clearColor,0),K)J.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=$.texture,J.setRenderTarget(null),J.clear(),this._fsQuad.render(J);this.highPassUniforms.tDiffuse.value=$.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,J.setRenderTarget(this.renderTargetBright),J.clear(),this._fsQuad.render(J);let Y=this.renderTargetBright;for(let X=0;X<this.nMips;X++)this._fsQuad.material=this.separableBlurMaterials[X],this.separableBlurMaterials[X].uniforms.colorTexture.value=Y.texture,this.separableBlurMaterials[X].uniforms.direction.value=Z6.BlurDirectionX,J.setRenderTarget(this.renderTargetsHorizontal[X]),J.clear(),this._fsQuad.render(J),this.separableBlurMaterials[X].uniforms.colorTexture.value=this.renderTargetsHorizontal[X].texture,this.separableBlurMaterials[X].uniforms.direction.value=Z6.BlurDirectionY,J.setRenderTarget(this.renderTargetsVertical[X]),J.clear(),this._fsQuad.render(J),Y=this.renderTargetsVertical[X];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,J.setRenderTarget(this.renderTargetsHorizontal[0]),J.clear(),this._fsQuad.render(J),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,K)J.state.buffers.stencil.setTest(!0);if(this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else J.setRenderTarget($),this._fsQuad.render(J);J.setClearColor(this._oldClearColor,this._oldClearAlpha),J.autoClear=W}_getSeparableBlurMaterial(J){let Q=[],$=J/3;for(let W=0;W<J;W++)Q.push(0.39894*Math.exp(-0.5*W*W/($*$))/$);let Z=[],K=[];for(let W=1;W<J;W+=2){let Y=Q[W],X=W+1<J?Q[W+1]:0,H=Y+X;Z.push((W*Y+(W+1)*X)/H),K.push(H)}return new rJ({defines:{KERNEL_PAIRS:Z.length},uniforms:{colorTexture:{value:null},invSize:{value:new N0(0.5,0.5)},direction:{value:new N0(0.5,0.5)},centerWeight:{value:Q[0]},gaussianOffsets:{value:Z},gaussianWeights:{value:K}},vertexShader:`

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

				}`})}}Z6.BlurDirectionX=new N0(1,0);Z6.BlurDirectionY=new N0(0,1);var R$={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class xY extends J9{constructor(){super();this.isOutputPass=!0,this.uniforms=i9.clone(R$.uniforms),this.material=new tQ({name:R$.name,uniforms:this.uniforms,vertexShader:R$.vertexShader,fragmentShader:R$.fragmentShader}),this._fsQuad=new $6(this.material),this._outputColorSpace=null,this._toneMapping=null}render(J,Q,$){if(this.uniforms.tDiffuse.value=$.texture,this.uniforms.toneMappingExposure.value=J.toneMappingExposure,this._outputColorSpace!==J.outputColorSpace||this._toneMapping!==J.toneMapping){if(this._outputColorSpace=J.outputColorSpace,this._toneMapping=J.toneMapping,this.material.defines={},NJ.getTransfer(this._outputColorSpace)===lJ)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===jQ)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===yQ)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===vQ)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===v7)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===hQ)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===bQ)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===fQ)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget(Q),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var P8=(()=>{let J=7;return()=>{return J=Math.imul(J,1664525)+1013904223>>>0,J/4294967296}})();function gY(J,Q=256,$=256){let Z=document.createElement("canvas");Z.width=Q,Z.height=$,J(Z.getContext("2d"),Q,$);let K=new p8(Z);return K.colorSpace=J8,K}function S5(J="255,214,150"){return gY((Q,$,Z)=>{let K=Q.createRadialGradient($/2,Z/2,0,$/2,Z/2,$/2);K.addColorStop(0,`rgba(${J},1)`),K.addColorStop(0.18,`rgba(${J},.55)`),K.addColorStop(0.5,`rgba(${J},.12)`),K.addColorStop(1,`rgba(${J},0)`),Q.fillStyle=K,Q.fillRect(0,0,$,Z)})}var w5=new S(-0.55,-0.035,-0.83).normalize();function ZR(J){let Q=new TJ,$=new C0(new M8(80,32,16),new rJ({side:V8,depthWrite:!1,fog:!1,uniforms:{uSol:{value:w5}},vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP;uniform vec3 uSol;
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
   }`}));$.renderOrder=-10,Q.add($);let Z=220,K=new Float32Array(Z*3),W=new Float32Array(Z*3);for(let U=0;U<Z;U++){let N=P8(),F=P8()*Math.PI*2,G=0.45+N*0.55,E=Math.sqrt(1-G*G),O=0.25+0.55*P8()*G;K.set([Math.cos(F)*E*75,G*75,Math.sin(F)*E*75],U*3),W.set([O*0.85,O*0.9,O],U*3)}let Y=new mJ;Y.setAttribute("position",new tJ(K,3)),Y.setAttribute("color",new tJ(W,3)),Q.add(new c6(Y,new u7({size:1.3,sizeAttenuation:!1,vertexColors:!0,fog:!1,depthWrite:!1,transparent:!0,opacity:0.45})));let X=new C0(new s9(2.1,40),new sJ({color:"#f6e7cc",fog:!1}));X.position.set(26,11,58),X.lookAt(0,1,0),Q.add(X);let H=new u6(new m7({map:S5("255,226,200"),fog:!1,transparent:!0,opacity:0.28,depthWrite:!1,blending:z9}));return H.scale.setScalar(13),H.position.copy(X.position),Q.add(H),J.add(Q),Q}function KR(J){let Q=new Map,$=(F,G=0,E=0)=>{let O=F+G+E;if(!Q.has(O))Q.set(O,{m:new i0({color:G?F:new h0(F).multiplyScalar(0.85),roughness:0.9,emissive:G||"#000",emissiveIntensity:E}),g:[]});return Q.get(O)},Z=(F,G,E,O,D,R=0)=>{F.rotateY(R),F.translate(E,O,D),G.g.push(F)},K=["#c98a64","#d8b46a","#6fa9a0","#c48d95","#a3b777","#dca16a","#86a3bf","#e2d3b0"],W=-20;while(W<20){let F=3.4+P8()*2.6,G=3+P8()*2.8,E=10.5+P8()*0.8,O=K[Math.floor(P8()*K.length)];Z(new yJ(F,G,2.4),$(O),W+F/2,G/2,E+1.2),Z(new yJ(F+0.12,0.18,2.6),$("#d9d2bf"),W+F/2,G+0.09,E+1.2);let D=Math.max(1,Math.floor(F/1.5));for(let R=0;R<D;R++){let q=W+(R+0.5)*F/D,C=P8()<0.4,z=P8()<0.2,L=C?$(z?"#9fc3ff":"#ffd08a",z?"#6f9cff":"#ffb35a",z?1.6:2.2):$("#2a3436");if(Z(new kJ(0.75,0.95),L,q,1.55,E-0.005,Math.PI),G>4.2)Z(new kJ(0.7,0.8),P8()<0.35?$("#ffd08a","#ffb35a",1.5):$("#2a3436"),q,G-1.1,E-0.005,Math.PI);Z(new yJ(0.9,0.06,0.12),$("#2c3432"),q,2.08,E-0.06)}for(let R=0;R<Math.floor(F/0.22);R++)Z(new yJ(0.018,0.9,0.018),$("#1b2224"),W+0.11+R*0.22,0.45,E-0.55);Z(new yJ(F,0.04,0.04),$("#1b2224"),W+F/2,0.9,E-0.55),W+=F+0.15}Z(new yJ(44,0.16,1.8),$("#8a8578"),0,0.08,9.6);let Y=[-14,-4,6,16];for(let F of Y)Z(new AJ(0.09,0.12,7,8),$("#6b6457"),F,3.5,9.2),Z(new yJ(1.6,0.08,0.08),$("#4f4a40"),F,6.6,9.2);for(let F=0;F<Y.length-1;F++)for(let G of[0,-0.25,0.3]){let E=new S(Y[F],6.6+G,9.2),O=new S(Y[F+1],6.6+G,9.2),D=E.clone().lerp(O,0.5);D.y-=0.55,Z(new i8(new E9(E,D,O),16,0.012,4),$("#101517"),0,0,0)}for(let[F,G,E]of[[-9,12.8,7.5],[11,13.1,8.4],[2.5,13.4,6.4]]){let O=new c7([new S(F,0,G),new S(F+0.3,E*0.5,G),new S(F+0.8,E,G-0.2)]);Z(new i8(O,12,0.16,6),$("#5d5445"),0,0,0);for(let D=0;D<9;D++){let R=D/9*Math.PI*2,q=new iQ(0.28,2.6,4,1);q.rotateZ(Math.PI/2+0.55),q.translate(1.3,0,0),q.rotateY(R),Z(q,$("#34503a"),F+0.8,E,G-0.2)}}let X=[];for(let{m:F,g:G}of Q.values()){let E=uZ(G,!1);if(G.forEach((D)=>D.dispose()),!E)continue;let O=new C0(E,F);O.receiveShadow=!0,J.add(O),X.push(O)}let H=new r9("#ffa35c",6,14,1.8);H.position.set(6,5.9,8.6),J.add(H);let U=new C0(new M8(0.14,12,8),new i0({color:"#ffcf94",emissive:"#ff9a45",emissiveIntensity:5}));U.position.copy(H.position),J.add(U);let N=new C0(new AJ(0.03,0.03,1.3,6),new i0({color:"#4f4a40"}));return N.rotation.z=Math.PI/2,N.position.set(6,6.05,8.9),J.add(N),{merged:X,farol:H}}function WR(J,Q){let $=new TJ;$.position.copy(Q),J.add($);let Z=new C0(new M8(0.038,16,12),new i0({color:"#fff4d6",emissive:"#ffd08a",emissiveIntensity:9}));Z.scale.y=1.25,$.add(Z);let K=new C0(new AJ(0.018,0.02,0.05,10),new i0({color:"#2b2a26",roughness:0.6}));K.position.y=0.065,$.add(K);let W=new C0(new AJ(0.004,0.004,1.1,5),new i0({color:"#15181a"}));W.position.y=0.64,$.add(W);let Y=new u6(new m7({map:S5(),transparent:!0,opacity:0.55,depthWrite:!1,blending:z9}));Y.scale.setScalar(0.75),$.add(Y);let X=[],H=new m7({color:"#3b3026",transparent:!0,opacity:0.85,depthWrite:!1});for(let U=0;U<6;U++){let N=new u6(H);N.scale.setScalar(0.012+P8()*0.008),$.add(N),X.push({s:N,r:0.07+P8()*0.12,w:2+P8()*4,f:P8()*6,y:0.05+P8()*0.08,k:1.3+P8()})}return{g:$,halo:Y,polillas:X}}function YR(){let J=new l6;J.add(new C0(new M8(10,24,12),new rJ({side:V8,uniforms:{uSol:{value:w5}},vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;uniform vec3 uSol;void main(){float l=dot(normalize(vP.xz+vec2(1e-4)),normalize(uSol.xz))*.5+.5;vec3 hor=mix(vec3(.3,.25,.36),vec3(.85,.45,.25),pow(l,2.5));gl_FragColor=vec4(mix(hor,vec3(.05,.07,.17),smoothstep(-.05,.7,vP.y))*mix(.35,1.,smoothstep(-.3,0.,vP.y)),1.);}"})));let Q=($,Z,K,W,Y,X)=>{let H=new C0(new kJ(K,W),new sJ({color:new h0($).multiplyScalar(Z),side:oJ}));H.position.set(...Y),H.lookAt(...X),J.add(H)};return Q("#ffcf94",6,1.2,1.2,[0,6,0],[0,0,0]),Q("#dff3ea",2,5,2,[0,2.5,-8],[0,1,0]),J}function j5({scene:J,renderer:Q,camera:$,controls:Z,software:K,bulbLight:W}){function Y(){let s=new X$(Q),g=YR(),H0=s.fromScene(g,0.02);J.environment?.dispose?.(),J.environment=H0.texture,J.environmentIntensity=0.75,s.dispose(),g.traverse((a)=>{a.geometry?.dispose(),a.material?.dispose()})}Y(),J.background=new h0("#2a2d4a"),J.fog=new l7("#5a5670",0.017);let X=ZR(J),H=KR(J),U=new S(0,R0.surfaceY+1.3,0),N=WR(J,U),F=gY((s,g,H0)=>{let a=s.createRadialGradient(g/2,H0*0.62,0,g/2,H0*0.62,g/2);a.addColorStop(0,"rgba(255,196,110,.95)"),a.addColorStop(0.45,"rgba(255,170,80,.35)"),a.addColorStop(1,"rgba(255,150,60,0)"),s.fillStyle=a,s.fillRect(0,0,g,H0)},256,128),G=new C0(new kJ(0.62,0.26),new sJ({map:F,transparent:!0,opacity:0,depthWrite:!1,blending:z9,toneMapped:!1}));G.rotation.x=-Math.PI/2,G.position.y=R0.surfaceY+0.0012,G.renderOrder=3,J.add(G);let E={i:-1,ang:0,alfa:0,objetivo:0,pos:new S},O=(s)=>gY((g,H0,a)=>{g.strokeStyle=`rgba(${s},1)`,g.lineWidth=H0*0.09,g.beginPath(),g.arc(H0/2,a/2,H0*0.36,0,Math.PI*2),g.stroke();let X0=g.createRadialGradient(H0/2,a/2,0,H0/2,a/2,H0/2);X0.addColorStop(0,`rgba(${s},.5)`),X0.addColorStop(1,`rgba(${s},0)`),g.fillStyle=X0,g.fillRect(0,0,H0,a)},128,128),D=["227,174,85","111,183,201"].map((s)=>{let g=new C0(new kJ(0.036,0.036),new sJ({map:O(s),transparent:!0,opacity:0,depthWrite:!1,blending:z9,toneMapped:!1}));return g.rotation.x=-Math.PI/2,g.position.y=R0.surfaceY+0.0015,g.renderOrder=3,J.add(g),g}),R=null,q=$.clone(),C=new S,z=new S,L=null,V=null,P=null,T=!1;function B(){if(L)return;let s=Q.getDrawingBufferSize(new N0),g=new Q8(s.x,s.y,{type:O8,samples:4});L=new hY(Q,g),L.addPass(new bY(J,q)),V=new Z6(new N0(s.x/2,s.y/2),0.4,0.5,3.2),P=new O$({uniforms:{tDiffuse:{value:null},uTiempo:{value:0},uVineta:{value:0.34},uGrano:{value:0.018}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform float uTiempo,uVineta,uGrano;varying vec2 vUv;
    float azar(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+uTiempo*43.7)*43758.5453);}
    void main(){vec4 c=texture2D(tDiffuse,vUv);
     vec2 q=vUv-.5;float v=1.-uVineta*smoothstep(.25,.85,length(q*vec2(1.15,1.)));
     c.rgb*=v;
     // Sombras hacia el lila y luces cálidas: el atardecer con el bombillo ya prendido.
     float l=dot(c.rgb,vec3(.2126,.7152,.0722));
     c.rgb*=mix(vec3(.96,.95,1.06),vec3(1.04,1.,.93),smoothstep(.02,.4,l));
     c.rgb+=(azar(vUv*vec2(1920.,1080.))-.5)*uGrano*(.4+l);
     gl_FragColor=c;}`}),L.addPass(P),L.addPass(new xY)}function I(s){if(T=!K&&s==="high",T)B();N.halo.visible=!0,H.farol.visible=s==="high"}function l(s,g){if(L)L.setPixelRatio(Q.getPixelRatio()),L.setSize(s,g);q.aspect=$.aspect,q.updateProjectionMatrix()}let j=W?W.position.clone():null,x=new S;function t(s,g,{reduced:H0,view:a,ends:X0,temblor:E0=0}){if(q.copy($),!H0){if(C.set(Math.sin(s*0.11)*0.012+Math.sin(s*0.037)*0.008,Math.sin(s*0.083+1)*0.007,Math.cos(s*0.097)*0.01),E0)C.add(z.set(Math.sin(s*97)*E0,Math.sin(s*113)*E0*0.6,Math.cos(s*89)*E0));q.position.add(C),z.copy(Z.target).addScaledVector(C,0.35),q.lookAt(z)}if(!H0){let _0=0.012*Math.sin(s*2.86),b0=0.008*Math.sin(s*2.3+1.3);if(x.set(Math.sin(_0)*1.1,0,Math.sin(b0)*1.1),N.g.position.copy(U).add(x),N.g.rotation.set(b0,0,-_0),W)W.position.copy(j).add(x)}if(q.updateMatrixWorld(),N.halo.material.opacity=0.5+0.05*Math.sin(s*23)*Math.sin(s*1.7)+(H0?0:0.03*Math.sin(s*3.1)),!H0)for(let _0 of N.polillas){let b0=s*_0.w+_0.f;_0.s.position.set(Math.cos(b0)*_0.r,_0.y+Math.sin(b0*_0.k)*0.05,Math.sin(b0*1.3)*_0.r)}let r0=a?.phase==="playing";if(r0&&a.turn!=null){let[_0,b0,e0]=q9[a.turn],$0=R0.boardLimit+0.075;if(E.i!==a.turn)E.i=a.turn,E.destino=new S(_0*$0/R0.seatDistance,0,b0*$0/R0.seatDistance),E.angDestino=e0;E.pos.lerp(E.destino,1-Math.exp(-g*6));let w=E.angDestino-E.ang;w=Math.atan2(Math.sin(w),Math.cos(w)),E.ang+=w*(1-Math.exp(-g*6)),E.objetivo=0.55+(H0?0:0.08*Math.sin(s*2.2))}else E.objetivo=0;E.alfa+=(E.objetivo-E.alfa)*(1-Math.exp(-g*4)),G.material.opacity=E.alfa,G.visible=E.alfa>0.01,G.position.set(E.pos.x,R0.surfaceY+0.0012,E.pos.z),G.rotation.set(-Math.PI/2,0,E.ang);for(let _0=0;_0<2;_0++){let b0=D[_0],e0=r0&&X0?X0[_0]:null;if(!e0){b0.material.opacity=Math.max(0,b0.material.opacity-g*3),b0.visible=b0.material.opacity>0.01;continue}b0.visible=!0,b0.position.set(e0.x,R0.surfaceY+0.0015,e0.z);let $0=H0?1:1+0.12*Math.sin(s*3.4+_0*1.3);b0.scale.setScalar($0),b0.material.opacity=Math.min(0.7,b0.material.opacity+g*3)}if(P)P.uniforms.uTiempo.value=s%100}function y(){if(T&&L)L.render();else Q.render(J,q)}function i(){L?.dispose()}return{vista:q,frame:t,render:y,resize:l,calidad:I,dispose:i,bulbPos:U,entorno:Y}}var K6=Math.PI*2,ZJ=(J=0,Q=0,$=0)=>new S(J,Q,$),XR=[[],[4],[0,8],[0,4,8],[0,2,6,8],[0,2,4,6,8],[0,2,3,5,6,8]];async function HB(J,{onProgress:Q=()=>{}}={}){let $=new l6;$.background=new h0("#2a2d4a"),$.fog=new l7("#5a5670",0.017);let Z=new H8(42,innerWidth/innerHeight,0.08,90);Z.position.set(3.1,2.65,4.2);let K;try{K=new FY({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{throw Error("This device could not start WebGL. Try a recent desktop browser.")}let W=new URLSearchParams(location.search).has("hq"),Y=!W&&/SwiftShader|llvmpipe|Software/i.test((()=>{let _=K.getContext(),u=_.getExtension("WEBGL_debug_renderer_info");return u?_.getParameter(u.UNMASKED_RENDERER_WEBGL):""})());K.setSize(innerWidth,innerHeight),K.setPixelRatio(Y?0.65:Math.min(devicePixelRatio,1.5,1920/innerWidth)),K.outputColorSpace=J8,K.toneMapping=v7,K.toneMappingExposure=1.24,K.shadowMap.enabled=!Y,K.shadowMap.type=y7,K.info.autoReset=!1,J.appendChild(K.domElement);let X=new PY(Z,K.domElement);X.target.set(0,0.8,-0.15),X.enableDamping=!0,X.dampingFactor=0.065,X.enablePan=!1,X.minDistance=0.8,X.maxDistance=4.6,X.minPolarAngle=0.25,X.maxPolarAngle=Math.PI*0.48,X.update();let H=0.5,U=new yZ("#a3a8d8","#6a4e3c",H);$.add(U);let N=new i6("#ffa06a",0.55);N.position.set(-6,2.6,-9),$.add(N);let F=new s6("#ffc98a",5.2,7,Math.PI*0.32,0.6,2);F.position.set(0,R0.surfaceY+1.26,0),F.target.position.set(0,0,0);let G=new r9("#ffc07a",0.45,3.2,2);G.position.set(0,R0.surfaceY+1.2,0),$.add(G),F.castShadow=!0,F.shadow.mapSize.set(Y?1024:2048,Y?1024:2048),F.shadow.focus=0.52,F.shadow.bias=-0.0002,F.shadow.normalBias=0.004,F.shadow.radius=3,F.shadow.camera.near=0.2,F.shadow.camera.far=4,$.add(F,F.target);let E=new r9("#cfeee0",13,9,2);E.position.set(0,2.5,-3.5),$.add(E);{let _=new C0(new yJ(1.2,0.03,0.03),new i0({color:"#e6fff4",emissive:"#e6fff4",emissiveIntensity:4}));_.position.set(0,3.12,-3.6),$.add(_)}let O=new Map,D=new Map;function R(_,u=0.85,Q0=0){let c=_+","+u+","+Q0;if(!O.has(c))O.set(c,new i0({color:_,roughness:u,metalness:Q0}));return O.get(c)}function q(_,u,Q0,c=[0,0,0],F0=[1,1,1]){let W0=u.uuid;if(!D.has(W0))D.set(W0,{material:u,geos:[]});let P0=new QJ().compose(ZJ(...Q0),new PJ().setFromEuler(new H9(...c)),ZJ(...F0));_.applyMatrix4(P0),D.get(W0).geos.push(_)}function C(_,u,Q0,c,F0,W0,P0,p0=0){q(new yJ(c,F0,W0),typeof P0==="string"?R(P0):P0,[_,u,Q0],[0,p0,0])}function z(_,u,Q0,c,F0,W0,P0,p0=10,u0=[0,0,0]){q(new AJ(c,F0,W0,p0),typeof P0==="string"?R(P0):P0,[_,u,Q0],u0)}function L(_,u=512,Q0=512){let c=document.createElement("canvas");c.width=u,c.height=Q0,_(c.getContext("2d"),u,Q0);let F0=new p8(c);return F0.colorSpace=J8,F0.anisotropy=Math.min(8,K.capabilities.getMaxAnisotropy()),F0}let V=191,P=()=>{return V=Math.imul(V,1664525)+1013904223>>>0,V/4294967296},T=L((_,u,Q0)=>{_.fillStyle="#65432b",_.fillRect(0,0,u,Q0);for(let c=0;c<700;c++){_.strokeStyle=`rgba(${P()>0.5?"170,122,70":"35,22,14"},${0.08+P()*0.2})`,_.lineWidth=0.3+P()*2,_.beginPath();let F0=P()*Q0;_.moveTo(0,F0);for(let W0=0;W0<u;W0+=20)_.lineTo(W0,F0+Math.sin(W0*0.013+c)*3);_.stroke()}}),B=new i0({map:T,roughness:0.65,color:"#e7bc8c"}),I=R("#4c3022",0.75),l=R("#287770"),j=R("#d2c5a2"),x=R("#3d938e"),t=L((_,u,Q0)=>{let c=u/2;for(let u0=0;u0<2;u0++)for(let U0=0;U0<2;U0++){let f0=U0*c,HJ=u0*c;_.save(),_.beginPath(),_.rect(f0,HJ,c,c),_.clip(),_.fillStyle="#c4b99f",_.fillRect(f0,HJ,c,c);for(let[LJ,I8]of[[f0,HJ],[f0+c,HJ],[f0,HJ+c],[f0+c,HJ+c]])_.strokeStyle="#8d6450",_.lineWidth=c*0.04,_.beginPath(),_.arc(LJ,I8,c*0.42,0,Math.PI*2),_.stroke(),_.fillStyle="#4f6763",_.beginPath(),_.arc(LJ,I8,c*0.13,0,Math.PI*2),_.fill(),_.strokeStyle="#c4b99f",_.lineWidth=c*0.02,_.beginPath(),_.arc(LJ,I8,c*0.11,0,Math.PI*2),_.stroke();let JJ=f0+c/2,RJ=HJ+c/2,fJ=(LJ,I8)=>{_.fillStyle=I8,_.beginPath(),_.moveTo(JJ,RJ-LJ),_.lineTo(JJ+LJ,RJ),_.lineTo(JJ,RJ+LJ),_.lineTo(JJ-LJ,RJ),_.closePath(),_.fill()};fJ(c*0.2,"#8d6450"),fJ(c*0.13,"#c4b99f"),fJ(c*0.07,"#3a3630"),_.restore(),_.strokeStyle="#7e7563",_.lineWidth=3,_.strokeRect(f0+1.5,HJ+1.5,c-3,c-3)}for(let u0=0;u0<9000;u0++)_.fillStyle=P()>0.5?"rgba(235,228,205,.07)":"rgba(30,28,24,.09)",_.fillRect(P()*u,P()*Q0,1+P()*2,1+P()*2);for(let u0=0;u0<40;u0++){let U0=_.createRadialGradient(0,0,0,0,0,1),f0=P()*u,HJ=P()*Q0,JJ=20+P()*90;_.save(),_.translate(f0,HJ),_.scale(JJ,JJ),U0.addColorStop(0,"rgba(40,34,26,.10)"),U0.addColorStop(1,"rgba(40,34,26,0)"),_.fillStyle=U0,_.fillRect(-1,-1,2,2),_.restore()}},1024,1024);t.wrapS=t.wrapT=F7,t.repeat.set(22.88888888888889,27.77777777777778),C(-5.7,-0.1,-4.575,20.6,0.2,15.85,new i0({map:t,roughness:0.86,color:"#9d937f"})),C(0,-0.2,8.5,40,0.1,10.3,"#2b3133"),C(0,-0.075,3.45,40,0.15,0.2,"#a8a391");for(let _=-10;_<11;_++)C(_*1.8,-0.146,6.3,0.7,0.008,0.06,"#b9ad83");C(0,1.6,-5.1,7.5,3.4,0.2,l),C(-3.8,1.6,-3.85,0.2,3.4,2.7,l),C(3.8,1.6,-3.85,0.2,3.4,2.7,l),C(-3.48,1.1,-2.52,0.7,2.3,0.32,l),C(3.45,1.1,-2.52,0.8,2.3,0.32,l),C(0,2.95,-2.52,7.5,0.42,0.35,x),C(0,3.24,-3.7,8,0.12,4.4,"#435451");for(let _=0;_<30;_++)C(-4+_*0.276,3.15,-3.7,0.028,0.055,4.6,"#82928a");C(0,0.7,-4.24,3.9,1.4,0.62,B),C(0,1.43,-4.2,4.08,0.1,0.78,B);for(let _=0;_<3;_++)C(-0.6,1.58+_*0.48,-4.78,5.8,0.065,0.38,B),C(-0.6,1.84+_*0.48,-4.98,5.8,0.48,0.065,"#443e30");C(2.95,1.02,-4.55,1.02,2.1,0.8,"#d0ceb8"),C(2.95,1.12,-4.11,0.84,1.55,0.035,"#254c51");let y=[];for(let _=0;_<29;_++)y.push({pos:[-3.18+_*0.182,2.095,-4.69],scale:0.7+_%5*0.07,color:["#566641","#b0762a","#2e5a45","#7a3024","#c9b36a","#3b4f7a"][_*7%6]});let i=new O7([new N0(0,0),new N0(0.036,0),new N0(0.043,0.025),new N0(0.043,0.17),new N0(0.019,0.205),new N0(0.017,0.285),new N0(0.021,0.29),new N0(0.021,0.305),new N0(0,0.31)],12);y.forEach((_)=>q(i.clone(),R(_.color,0.3),_.pos,[0,0,0],[_.scale,_.scale,_.scale]));for(let[_,u,Q0]of[[-3.1,-1.9,"#a8483a"]])for(let c=0;c<3;c++){C(_,0.19+c*0.34,u,0.52,0.3,0.4,Q0);for(let F0=0;F0<5;F0++)C(_-0.2+F0*0.1,0.18+c*0.34,u+0.204,0.055,0.16,0.015,"#2c3025")}for(let _=0;_<5;_++){let u=-7-_*3.5;C(u,1.5,-3,3.1,3,3.2,["#d9a35c","#7fb1a4","#d8c7a2","#c98d7c","#a6bf8e"][_]),C(u,2.2,-1.38,1,0.8,0.045,"#b59961"),C(u,2.2,-1.35,0.045,0.86,0.055,"#273e37"),C(u,0.98,-1.38,0.9,1.9,0.04,"#354e49")}for(let _=0;_<4;_++)z(-5-_*5,2.3,-1,0.08,0.09,4.6,"#665443"),C(-5-_*5,4.2,-1,1.8,0.09,0.09,"#514b3d");function s(_,u,Q0,c="#202d28"){let F0=new E9(ZJ(..._),ZJ(...Q0),ZJ(...u));q(new i8(F0,20,0.008,4,!1),R(c),[0,0,0])}let g=[];for(let _ of[-1.95,1.95])z(_,1.45,2.55,0.035,0.045,2.9,"#5b4a38",8);for(let[_,u,Q0]of[[[-2.7,2.9,-2.45],[-1.95,2.85,2.55],0.5],[[2.7,2.9,-2.45],[1.95,2.85,2.55],0.5],[[-1.95,2.85,2.55],[1.95,2.85,2.55],0.32]]){let c=ZJ(..._),F0=ZJ(...u),W0=c.clone().lerp(F0,0.5);W0.y-=Q0*2;let P0=new E9(c,W0,F0);q(new i8(P0,24,0.006,4,!1),R("#1c2320"),[0,0,0]);let p0=Math.round(c.distanceTo(F0)/0.42);for(let u0=1;u0<p0;u0++){let U0=P0.getPointAt(u0/p0);g.push(U0.setY(U0.y-0.035))}}{let _=new M8(0.022,10,8);_.scale(1,1.3,1);let u=["#ffd89a","#ffc27a","#ffe3a8"],Q0=new S9(_,new sJ({color:new h0(4.5,4.5,4.5)}),g.length),c=new SJ;g.forEach((F0,W0)=>{c.position.copy(F0),c.updateMatrix(),Q0.setMatrixAt(W0,c.matrix),Q0.setColorAt(W0,new h0(u[W0%u.length]))}),$.add(Q0)}s([0,3.22,-1.6],[0,3.19,0],[0,3.02,-0.8]);let H0=new TJ;H0.position.set(4.3,0,-1.7),$.add(H0);let a=new C0(new AJ(0.1,0.15,4.5,9),R("#696047"));a.position.y=2.25,H0.add(a);for(let _=0;_<9;_++){let u=new C0(new M8(1,10,5),R(_%2?"#4a654c":"#344e3d"));u.scale.set(0.27,0.075,1.5),u.position.set(Math.sin(_*K6/9)*0.72,4.35,Math.cos(_*K6/9)*0.72),u.rotation.set(0.23,_*K6/9,0),H0.add(u)}let X0=new R8({map:T,color:"#d9a877",roughness:0.5,clearcoat:0.55,clearcoatRoughness:0.28}),E0=new C0(new _8(R0.tableWidth,R0.tableThickness,R0.tableWidth,3,0.035),X0);E0.position.y=R0.tableCenterY,E0.castShadow=!0,E0.receiveShadow=!0,$.add(E0);let r0=L((_,u,Q0)=>{_.fillStyle="#2f5b47",_.fillRect(0,0,u,Q0);for(let F0=0;F0<Q0;F0+=2)for(let W0=0;W0<u;W0+=2){let P0=(P()-0.5)*14,p0=((W0>>1)+(F0>>1))%2?4:-4;_.fillStyle=`rgb(${47+P0+p0},${91+P0+p0},${71+P0+p0})`,_.fillRect(W0,F0,2,2)}for(let F0=0;F0<4;F0++){let W0=F0*Math.PI/2,P0=u/2+Math.sin(W0)*u*0.36,p0=Q0/2+Math.cos(W0)*Q0*0.36,u0=_.createRadialGradient(P0,p0,0,P0,p0,u*0.2);u0.addColorStop(0,"rgba(120,150,120,.16)"),u0.addColorStop(1,"rgba(120,150,120,0)"),_.fillStyle=u0,_.fillRect(0,0,u,Q0)}let c=_.createRadialGradient(u/2,Q0/2,u*0.1,u/2,Q0/2,u*0.62);c.addColorStop(0,"rgba(0,0,0,0)"),c.addColorStop(1,"rgba(0,0,0,.28)"),_.fillStyle=c,_.fillRect(0,0,u,Q0)},512,512),_0=new C0(new _8(R0.feltWidth,0.012,R0.feltWidth,2,0.02),new R8({map:r0,roughness:0.97,sheen:0.8,sheenRoughness:0.55,sheenColor:new h0("#9fc7a8")}));_0.position.y=R0.feltCenterY,_0.receiveShadow=!0,$.add(_0);let b0=R0.tableWidth/2-0.07;for(let _ of[-b0,b0])for(let u of[-b0,b0])C(_,0.35,u,0.075,0.68,0.075,I);let e0=["#C8402F","#6FB7C9"];for(let _=0;_<4;_++){let[u,Q0,c]=q9[_],F0=R0.feltWidth/2-0.012,W0=new C0(new kJ(R0.feltWidth*0.72,0.009),new i0({color:e0[_%2],roughness:0.9}));W0.rotation.set(-Math.PI/2,0,c),W0.position.set(u*F0/R0.seatDistance,R0.surfaceY+0.0006,Q0*F0/R0.seatDistance),W0.receiveShadow=!0,$.add(W0)}let $0=new i0({roughness:0.92,map:L((_,u,Q0)=>{_.fillStyle="#8f7446",_.fillRect(0,0,u,Q0);let c=12,F0=u/c;for(let W0=0;W0<c;W0++)for(let P0=0;P0<c;P0++){let p0=(P0+W0)%2===0;for(let u0=0;u0<3;u0++){let U0=150+P()*45|0;_.fillStyle=`rgb(${U0+30},${U0+8},${U0-45})`;let f0=u0*F0/3+F0*0.04,HJ=F0/3-F0*0.08;if(p0)_.fillRect(P0*F0+1,W0*F0+f0,F0-2,HJ);else _.fillRect(P0*F0+f0,W0*F0+1,HJ,F0-2)}}_.fillStyle="rgba(40,28,14,.18)";for(let W0=0;W0<=c;W0++)_.fillRect(W0*F0-1,0,2,Q0),_.fillRect(0,W0*F0-1,u,2)},256,256)});for(let _=0;_<4;_++){let[u,Q0,c]=q9[_],F0=new TJ;F0.position.set(u,0,Q0),F0.rotation.y=c,$.add(F0);let W0=R(_%2?"#5e9fb2":"#b53f2e",0.62),P0=(p0,u0,U0,f0,HJ,JJ,RJ=W0,fJ=0.008)=>{let LJ=ZJ(f0,HJ,JJ).applyAxisAngle(ZJ(0,1,0),c).add(ZJ(u,0,Q0));q(new _8(p0,u0,U0,2,fJ),RJ,LJ.toArray(),[0,c,0])};P0(R0.chairSeatWidth-0.04,0.035,0.5,0,R0.chairSeatY,0,$0,0.01);for(let p0 of[-1,1])P0(0.04,0.05,0.54,p0*(R0.chairSeatWidth/2-0.02),R0.chairSeatY-0.005,0);for(let p0 of[-1,1])P0(R0.chairSeatWidth,0.05,0.04,0,R0.chairSeatY-0.005,p0*0.25);for(let p0 of[-0.24,0.24])for(let u0 of[-0.21,0.21])P0(0.04,R0.chairSeatY,0.04,p0,R0.chairSeatY/2,u0);for(let p0 of[-0.24,0.24])P0(0.024,0.024,0.42,p0,0.15,0);P0(0.48,0.024,0.024,0,0.15,0.21);for(let p0 of[-0.24,0.24])P0(0.04,0.52,0.04,p0,R0.chairSeatY+0.26,-0.23);for(let p0 of[0.2,0.33,0.46])P0(0.46,p0===0.46?0.07:0.045,0.022,0,R0.chairSeatY+p0,-0.23)}function w(_,u,Q0,c,F0,W0=60){let P0=L((p0,u0,U0)=>{p0.fillStyle=c,p0.fillRect(0,0,u0,U0),p0.fillStyle=F0,p0.textAlign="center",p0.textBaseline="middle",p0.font=`bold ${W0}px Georgia`,p0.fillText(_,u0/2,U0/2)},1024,256);return new C0(new kJ(u,Q0),new sJ({map:P0}))}let p=w("COLMADO  LA ESQUINA",4.8,0.38,"#a05d42","#f8e8b9",64);p.position.set(0,2.94,-2.33),$.add(p);let m=w("MESA",0.11,0.029,"#284e3e","#81906b",77);{let _=document.createElement("canvas");_.width=512,_.height=136;let u=new p8(_);u.colorSpace=J8;let Q0=()=>{let c=_.getContext("2d");c.clearRect(0,0,512,136),c.font=`96px ${document.fonts?.check?.("96px Shrikhand")?"Shrikhand":"Georgia"}`,c.textAlign="center",c.textBaseline="middle",c.fillStyle="rgba(170,205,170,.42)",c.fillText("Mesa",256,72),u.needsUpdate=!0};Q0(),document.fonts?.load?.("96px Shrikhand").then(Q0).catch(()=>{}),m.material=new i0({map:u,transparent:!0,depthWrite:!1,roughness:1})}m.rotation.x=-Math.PI/2,m.position.set(0,R0.surfaceY+0.001,0.3),$.add(m);let J0=new TJ;J0.position.set(-0.9,2.62,-3.45),J0.rotation.x=-Math.PI/2,$.add(J0),z(-0.9,2.9,-3.45,0.015,0.015,0.56,"#777a68",8),z(-0.9,3.16,-3.45,0.075,0.075,0.025,"#767763",12);let e=new C0(new M8(0.075,12,8),R("#41493d"));J0.add(e);for(let _=0;_<5;_++){let u=new C0(new yJ(0.13,0.5,0.025),R("#85856e",0.88,0.05));u.position.set(Math.sin(_*K6/5)*0.285,Math.cos(_*K6/5)*0.285,0),u.rotation.z=-_*K6/5,J0.add(u)}let D0=new TJ;D0.position.set(-12,0.05,5.2),$.add(D0);for(let _ of[-0.36,0.36]){let u=new C0(new w9(0.19,0.038,7,14),R("#182221"));u.position.set(_,0.2,0),D0.add(u)}let L0=new C0(new _8(0.65,0.17,0.2,2,0.04),R("#823e2f",0.45,0.25));L0.position.y=0.49,D0.add(L0);let G0=new C0(new yJ(0.35,0.06,0.22),R("#202725"));G0.position.set(-0.08,0.61,0),D0.add(G0);let x0=new C0(new AJ(0.015,0.015,0.45,6),R("#8c9c96",0.4,0.5));x0.position.set(0.32,0.59,0),x0.rotation.z=-0.3,D0.add(x0);let c0=I5({scene:$,texture:L,mat:R,box:C,cylinder:z,random:P,teal:l,wood:B,storeSign:p}),DJ=z5({scene:$,texture:L,mat:R,box:C,cylinder:z,staticGeo:q,random:P,renderer:K});for(let{material:_,geos:u}of D.values()){let Q0=uZ(u.some((c)=>!c.index)?u.map((c)=>c.index?c.toNonIndexed():c):u,!1);if(Q0){let c=new C0(Q0,_);c.receiveShadow=!0,Q0.computeBoundingBox(),c.castShadow=Q0.boundingBox.distanceToPoint(ZJ(0,0.8,0))<1.6&&Q0.boundingBox.getSize(ZJ()).length()<8,$.add(c)}u.forEach((c)=>c.dispose())}let j0=new TJ,MJ=new TJ;$.add(j0,MJ);let _J=new _8(R0.tileLength,R0.tileThickness,R0.tileWidth,3,0.0024),hJ=new R8({color:"#ede5d2",roughness:0.5,clearcoat:0.3,clearcoatRoughness:0.4}),f=new R8({color:"#e2dac6",roughness:0.42,clearcoat:0.7,clearcoatRoughness:0.3}),iJ=new i0({color:"#b98b3e",roughness:0.28,metalness:1}),YJ=new AJ(0.0019,0.0019,0.0009,12),EJ=new i0({color:"#0b0a09",roughness:0.55}),A=new i0({color:"#2a2622",roughness:0.6}),k=new AJ(R0.pipRadius,R0.pipRadius,0.0007,14),v=new yJ(0.0014,0.0005,R0.tileWidth*0.8),o=new Set([_J,k,v,YJ]),q0=new Set([hJ,f,EJ,A,iJ]),B0=[X0,_0.material,hJ,f].map((_)=>[_,{clearcoat:_.clearcoat,sheen:_.sheen}]);function z0(_,u,Q0=!1){let c=new TJ,F0=new C0(_J,Q0?f:hJ);if(F0.castShadow=!0,F0.receiveShadow=!0,c.add(F0),!Q0){let W0=[];if([_,u].forEach((u0,U0)=>XR[u0].forEach((f0)=>W0.push(ZJ((U0===0?-1:1)*R0.tileLength/4+(f0%3-1)*R0.pipColumnSpacing,R0.tileThickness/2+0.0005,(Math.floor(f0/3)-1)*R0.pipRowSpacing)))),W0.length){let u0=new S9(k,EJ,W0.length),U0=new QJ;W0.forEach((f0,HJ)=>u0.setMatrixAt(HJ,U0.makeTranslation(f0.x,f0.y,f0.z))),c.add(u0)}let P0=new C0(v,A);P0.position.y=R0.tileThickness/2+0.0002,c.add(P0);let p0=new C0(YJ,iJ);p0.position.y=R0.tileThickness/2+0.0004,c.add(p0)}return c}function Z0(_){return ZJ(_.x,R0.surfaceY+R0.tileThickness/2+0.001,_.z)}let Y0=new C0(new w9(0.2,0.006,5,38),new sJ({color:"#e8bf70",transparent:!0,opacity:0.7}));Y0.rotation.x=-Math.PI/2,Y0.position.y=0.027,$.add(Y0);let k0=[],n0=[],M0=[],V0=[],t0=new BY,a0=0,CJ=4,b=[];V0.push(...A5($));let A0=ZJ(),K0=ZJ(),I0=ZJ(),v0=ZJ(),O0=new QJ,T0=ZJ(),KJ=ZJ();function dJ(_){let u=null;if(_.root.traverse((JJ)=>{if(JJ.isSkinnedMesh&&JJ.morphTargetDictionary&&!u)u=JJ}),!u||u.morphTargetDictionary.parpadeo==null)return;_.cara={mesh:u,iP:u.morphTargetDictionary.parpadeo,iS:u.morphTargetDictionary.sonrisa};let Q0=u.geometry.attributes.position,c=u.userData?.boca;if(c){let JJ=1e9,RJ=0;for(let fJ=0;fJ<Q0.count;fJ++){let LJ=(Q0.getX(fJ)-c[0])**2+(Q0.getY(fJ)-c[1])**2+(Q0.getZ(fJ)-c[2])**2;if(LJ<JJ)JJ=LJ,RJ=fJ}_.bocaMundo=(fJ)=>{return u.skeleton.update(),u.getVertexPosition(RJ,fJ).applyMatrix4(u.matrixWorld)}}let F0=u.userData?.ojos,W0=u.userData?.parpado;if(!F0||!W0)return;let P0=u.geometry.attributes.position,p0=(JJ)=>{let RJ=1e9,fJ=0;for(let LJ=0;LJ<P0.count;LJ++){let I8=(P0.getX(LJ)-JJ[0])**2+(P0.getY(LJ)-JJ[1])**2+(P0.getZ(LJ)-JJ[2])**2;if(I8<RJ)RJ=I8,fJ=LJ}return fJ},u0=new kJ(0.027,0.0125,8,4);u0.translate(0,-0.00625,0);let U0=u0.attributes.position,f0=[];for(let JJ=0;JJ<U0.count;JJ++){let RJ=U0.getX(JJ)/0.0135,fJ=-U0.getY(JJ)/0.0125;U0.setZ(JJ,0.0032*Math.cos(RJ*Math.PI/2)*(0.5+0.5*fJ));let LJ=fJ>0.85?0.45:1;f0.push(LJ,LJ,LJ)}u0.setAttribute("color",new GJ(f0,3)),u0.computeVertexNormals();let HJ=new i0({color:new h0().setRGB(...W0,J8),roughness:0.7,vertexColors:!0});_.parpados=F0.map((JJ)=>{let RJ=new C0(u0,HJ);return RJ.visible=!1,RJ.frustumCulled=!1,$.add(RJ),{m:RJ,k:p0(JJ)}})}function wJ(_){let u=_.parpados;if(!u||!_.cara)return;let Q0=_.parpadeo||0;if(Q0<0.03){for(let P0 of u)P0.m.visible=!1;return}let c=_.cara.mesh;c.skeleton.update();let F0=c.getVertexPosition(u[0].k,A0).applyMatrix4(c.matrixWorld).clone(),W0=c.getVertexPosition(u[1].k,A0).applyMatrix4(c.matrixWorld).clone();if(_.head.getWorldPosition(T0),_.front.getWorldPosition(KJ),v0.subVectors(KJ,T0).normalize(),K0.subVectors(W0,F0).normalize(),I0.crossVectors(v0,K0).normalize(),I0.y<0)I0.negate();K0.crossVectors(I0,v0).normalize(),O0.makeBasis(K0,I0,v0);for(let[P0,p0]of[[u[0],F0],[u[1],W0]])P0.m.visible=!0,P0.m.quaternion.setFromRotationMatrix(O0),P0.m.position.copy(p0).addScaledVector(I0,0.0052).addScaledVector(v0,0.0024),P0.m.scale.set(1,Q0,1)}async function m8(_,u){try{Q(`Seating ${["Don Rafa","Marisol","Luis","Carmen"][_]}…`,a0/CJ);let Q0=await t0.loadAsync(`/models/${u}.glb`);n0[_]=Q0;let c=Q0.scene,F0=new TJ;F0.add(c);let W0=new Q$(c);if(Q0.animations[0])W0.clipAction(Q0.animations.find((JJ)=>JJ.name==="Seated")||Q0.animations[0]).play();W0.setTime(R0.neutralPoseTime),c.updateMatrixWorld(!0),c.traverse((JJ)=>{if(JJ.isSkinnedMesh)JJ.computeBoundingBox();if(JJ.isMesh)JJ.castShadow=!0,JJ.receiveShadow=!0,JJ.frustumCulled=!1,JJ.material.roughness=0.83});let P0=new A8().setFromObject(c),p0=c.getObjectByName("Hips"),u0=p0?.getWorldPosition(ZJ())||P0.getCenter(ZJ());c.position.set(-u0.x,-P0.min.y,-u0.z);let[U0,f0,HJ]=q9[_];if(F0.position.set(U0,0,f0),F0.rotation.y=HJ,$.add(F0),k0[_]={root:c,holder:F0,index:_,pose:vY(c),head:c.getObjectByName("Head"),neck:c.getObjectByName("neck"),front:c.getObjectByName("headfront"),chest:c.getObjectByName("Spine"),hips:c.getObjectByName("Hips"),lomo:c.getObjectByName("Spine02"),muslos:[c.getObjectByName("LeftUpLeg"),c.getObjectByName("RightUpLeg")],hombros:[[1,c.getObjectByName("LeftShoulder")],[-1,c.getObjectByName("RightShoulder")]],spine:c.getObjectByName("Spine01"),reaction:null,brazos:["Left","Right"].map((JJ)=>({lado:JJ,hombro:c.getObjectByName(JJ+"Shoulder"),brazo:c.getObjectByName(JJ+"Arm"),antebrazo:c.getObjectByName(JJ+"ForeArm"),mano:c.getObjectByName(JJ+"Hand")}))},k0[_].bebida=V0.find((JJ)=>JJ.index===_),dJ(k0[_]),a0++,Q(a0===4?"The table is ready.":`${a0} of 4 seats ready`,a0/CJ),M0.length===0&&k9>0)H6(k9)}catch(Q0){b.push(u),console.error("Character load failed",u,Q0),Q(`Could not load ${u}. Reload to retry.`,a0/CJ)}}let Q9=Promise.all(["rafa-upright","marisol","luis-upright","carmen"].map((_,u)=>m8(u,_))),L$=null,W6=null,Y6="",KQ=null,L8=j5({scene:$,renderer:K,camera:Z,controls:X,software:Y,bulbLight:F});L8.calidad("high");let X6=new Set,B9=new Map,WQ=[0,1,2,3].map(()=>ZJ()),YQ=(_)=>{let u=_.detail||{};if(u.active)X6.add(u.seat),B9.set(u.seat,u.type);else X6.delete(u.seat)};window.addEventListener("mesa:botvoice",YQ);let C7=null,k9=0,QK="",P7=0,V$="attract",K8=null,$9=[],$K=0,D$=0;function XQ(_){while(_.children.length){let u=_.children.pop();u.parent=null,u.traverse((Q0)=>{if(Q0.isMesh&&!o.has(Q0.geometry))Q0.geometry.dispose();if(Q0.isMesh&&!q0.has(Q0.material))Q0.material.dispose()})}}function H6(_){k9=_;let u=Math.min(8,_);for(let Q0=M0.length-1;Q0>=u;Q0--)$.remove(M0[Q0].holder),M0.pop();while(M0.length<u&&n0.filter(Boolean).length){let Q0=M0.length,c=n0[Q0%4]||n0.find(Boolean),F0=dZ(c.scene),W0=new TJ;W0.add(F0);let P0=new Q$(F0);if(c.animations[0])P0.clipAction(c.animations.find((f0)=>f0.name==="Seated")||c.animations[0]).play();P0.setTime(R0.neutralPoseTime),F0.updateMatrixWorld(!0),F0.traverse((f0)=>{if(f0.isSkinnedMesh)f0.computeBoundingBox();if(f0.isMesh)f0.castShadow=!1,f0.frustumCulled=!1});let p0=new A8().setFromObject(F0),u0=F0.getObjectByName("Hips")?.getWorldPosition(ZJ())||p0.getCenter(ZJ());F0.position.x-=u0.x,F0.position.y-=p0.min.y,F0.position.z-=u0.z,W0.position.set(-2.5+Q0%4*1.66,0,-2.5-Math.floor(Q0/4)*0.65),W0.rotation.y=0,$.add(W0);let U0=new C0(new yJ(0.56,0.06,0.54),j);U0.position.set(0,R0.chairSeatY,0),W0.add(U0),M0.push({root:F0,holder:W0,pose:vY(F0),head:F0.getObjectByName("Head"),neck:F0.getObjectByName("neck"),front:F0.getObjectByName("headfront"),chest:F0.getObjectByName("Spine"),spine:F0.getObjectByName("Spine01"),index:Q0+4})}}let M=!1,h=ZJ();function r(){let _=Z.position,u=X.target;if(h.subVectors(_,u),h.length()>4.6)_.copy(u).addScaledVector(h.normalize(),4.6);_.z=Math.max(_.z,-2.1),_.x=T9.clamp(_.x,-4.9,4.9),_.y=T9.clamp(_.y,0.35,5.2)}let n=-1,d=null,S0=X.minDistance;function m0(_,u,Q0){if(document.documentElement.classList.contains("reduced"))return;let c=ZJ(1,0,1).normalize(),F0=-9;for(let[P0,p0]of[[1,1],[1,-1],[-1,1],[-1,-1]]){let u0=ZJ(P0,0,p0).normalize(),U0=u0.x*_.x+u0.z*_.z;if(U0>F0)F0=U0,c=u0}let W0=_.clone().addScaledVector(c,0.3);if(W0.x=T9.clamp(W0.x,-0.4,0.4),W0.z=T9.clamp(W0.z,-0.4,0.4),W0.y=R0.surfaceY+(Q0?0.12:0.19),!d)S0=X.minDistance;X.minDistance=0.1,d={pos:d?.pos||Z.position.clone(),target:d?.target||X.target.clone(),at:D8.elapsedTime+3.4},K8={from:Z.position.clone(),to:W0,fromTarget:X.target.clone(),toTarget:_.clone().setY(_.y+0.01),t:0,dur:0.45}}function w0(_="table"){if(X.minDistance=_==="seat"||_==="close"?0.3:0.7,X.minPolarAngle=_==="overhead"?0.01:0.25,Z.aspect<0.95&&_==="table")_="overhead";let u,Q0=ZJ(0,0.8,0);if(_==="attract")u=ZJ(0.75,1.3,4.4),Q0=ZJ(-1,1.4,-1.2);else if(_==="overhead")u=ZJ(0.001,1.86,0.34),Q0=ZJ(0,R0.surfaceY,0.02);else if(_==="seat")u=ZJ(0,1.36,0.74),Q0=ZJ(0,0.82,-0.12);else if(_==="close")u=ZJ(0.62,1.3,1),Q0=ZJ(-0.03,0.85,-0.08);else u=ZJ(0.8,1.89,1.24),Q0=ZJ(0,0.9,-0.2);if(_!=="attract"&&_!=="seat"&&Z.aspect<1.3){let c=Math.min(2.4,Math.pow(1.6/Z.aspect,0.8));u=Q0.clone().add(u.clone().sub(Q0).multiplyScalar(c))}if(k0[0])k0[0].root.visible=_!=="seat";d=null,X.minDistance=Math.min(X.minDistance,S0),K8={from:Z.position.clone(),to:u,fromTarget:X.target.clone(),toTarget:Q0,t:0}}let l0=ZJ(0,1,0),s0=new PJ().setFromAxisAngle(ZJ(1,0,0),0.12),XJ=new PJ().setFromAxisAngle(l0,Math.PI/2),qJ=new PJ().setFromAxisAngle(ZJ(0,0,1),Math.PI/2),d0=R0.tableCenterY+R0.tableThickness/2+R0.tileLength/2*Math.cos(0.12)+R0.tileThickness/2*Math.sin(0.12)+0.001;function IJ(_,u,Q0){let c=q9[_][2];return Q0.quaternion.setFromAxisAngle(l0,c).multiply(s0).multiply(XJ).multiply(qJ),Q0.position.set(u,d0,-R0.rackRadius).applyAxisAngle(l0,c),Q0}let bJ=new S9(_J,f,28);bJ.count=0,bJ.castShadow=!0,bJ.receiveShadow=!0,bJ.frustumCulled=!1,MJ.add(bJ);let cJ=[[],[],[],[]],BJ=new SJ,Y8=[0,0,0,0],g0="",X8=new Set;function zJ(_){let u=0;for(let Q0=0;Q0<4;Q0++){let c=X8.has(Q0)?0:Y8[Q0],F0=cJ[Q0];while(F0.length<c)F0.push((F0.length-(c-1)/2)*R0.rackSpacing);F0.length=c;for(let W0=0;W0<c;W0++){let P0=(W0-(c-1)/2)*R0.rackSpacing;F0[W0]+=(P0-F0[W0])*(1-Math.exp(-_*10)),IJ(Q0,F0[W0],BJ),BJ.updateMatrix(),bJ.setMatrixAt(u++,BJ.matrix)}}bJ.count=u,bJ.instanceMatrix.needsUpdate=!0}let F8=new TJ;$.add(F8);let S8=new Map,Z9="",b9="";function vJ(){for(let _=0;_<28;_++){let u=z0(0,0,!0);u.position.set((_*37%23-11)*0.016,R0.surfaceY+R0.tileThickness*(0.55+_%3*0.9),(_*13%19-9)*0.016),u.rotation.y=_*1.73,j0.add(u)}}let xJ=(_)=>_*_*(3-2*_),M9=new PJ().setFromAxisAngle(ZJ(1,0,0),Math.PI),nJ=new PJ().setFromAxisAngle(l0,-Math.PI/2);function C9(_,u){_.revealed.forEach((Q0,c)=>{let F0=Q0.length,W0=q9[c][2];Q0.forEach((P0,p0)=>{let u0=(p0-(F0-1)/2)*R0.rackSpacing,U0=z0(P0.a,P0.b);IJ(c,u0,BJ);let f0=BJ.quaternion.clone().multiply(M9),HJ=BJ.position.clone(),JJ=ZJ(u0,R0.surfaceY+R0.tileThickness/2+0.001,-R0.rackRadius+0.047).applyAxisAngle(l0,W0),RJ=new PJ().setFromAxisAngle(l0,W0).multiply(nJ);U0.position.copy(HJ),U0.quaternion.copy(f0),U0.visible=!1,j0.add(U0),$9.push({obj:U0,from:HJ,to:JJ,qFrom:f0,qTo:RJ,elapsed:-(u+c*0.3+p0*0.055),duration:0.42,revela:c,ultima:p0===F0-1})})})}function x9(_,u=0){C7=_;{let W0=_&&(_.phase==="handEnd"||_.phase==="seriesEnd")&&_.result,P0=W0?_.handNo+":"+_.phase:"";if(P0&&P0!==Y6)W6={t:D8.elapsedTime+0.5,team:_.result.team??null};if(!W0)W6=null;Y6=P0}if(k9!==u)H6(u);let Q0=!_||_.phase==="lobby"?"pila":"mano"+_.handNo;if(Q0!==Z9){Z9=Q0,XQ(j0),S8.clear(),$9=$9.filter((W0)=>W0.reparto);for(let W0 of k0)if(W0)W0.jugada=null;if(Q0==="pila")vJ()}if(_&&_.chain?.length){let W0=G5(_.chain,_.moves),P0=_.event,p0=["domino","capicua","tranque"].includes(P0?.type),u0=_.moves[_.moves.length-1],U0=P0?.type==="domino"||P0?.type==="capicua",f0=P0?.type==="play"?P0.tile:p0&&u0?.type==="play"?u0.tile:null;_.chain.forEach((HJ,JJ)=>{if(S8.has(HJ.id))return;let RJ=z0(HJ.x,HJ.y),fJ=Z0(W0[JJ]);if(RJ.position.copy(fJ),RJ.rotation.y=W0[JJ].yaw,RJ.updateMatrix(),j0.add(RJ),S8.set(HJ.id,RJ),HJ.id!==f0||HJ.seat==null)return;IJ(HJ.seat,0,BJ);let LJ={obj:RJ,from:BJ.position.clone(),to:fJ.clone(),qFrom:BJ.quaternion.clone(),qTo:RJ.quaternion.clone(),elapsed:0,duration:U0?0.7:0.55,golpe:U0};if(RJ.position.copy(LJ.from),RJ.quaternion.copy(LJ.qFrom),$9.push(LJ),p0)m0(fJ,HJ.seat,U0);$K=performance.now();let I8=k0[HJ.seat];if(L$={p:fJ.clone(),t:D8.elapsedTime+LJ.duration},I8)I8.reaction={time:D8.elapsedTime},I8.jugada={t0:D8.elapsedTime,obj:RJ,anim:LJ,hasta:fJ.clone()}})}if(_?.phase==="playing"&&_.handNo!==P7&&_.moves.length===0){P7=_.handNo,XQ(F8),$9=$9.filter((W0)=>!W0.reparto),D$=performance.now()+3300;for(let W0=0;W0<4;W0++)cJ[W0]=Array.from({length:7},(P0,p0)=>(p0-3)*R0.rackSpacing);for(let W0=0;W0<28;W0++){let P0=W0%4,p0=Math.floor(W0/4),u0=z0(0,0,!0),U0=ZJ((W0*37%23-11)*0.015,R0.surfaceY+0.012,(W0*13%19-9)*0.015);u0.position.copy(U0),u0.rotation.y=W0*1.73,F8.add(u0);let f0=IJ(P0,(p0-3)*R0.rackSpacing,new SJ);$9.push({obj:u0,from:U0,to:f0.position.clone(),qFrom:u0.quaternion.clone(),qTo:f0.quaternion.clone(),elapsed:-W0*0.065,duration:1.1,reparto:!0})}}let c=_?.moves?.[_.moves.length-1],F0=_?_.handNo+":"+_.moves.length:"";if(c?.type==="pass"&&b9!==F0){b9=F0;let W0=k0[c.seat];if(W0)W0.toque={t0:D8.elapsedTime}}{let W0=_&&(_.phase==="handEnd"||_.phase==="seriesEnd")&&_.revealed,P0=W0?"r"+_.handNo:"";if(!W0)g0="",X8.clear();else if(P0!==g0){g0=P0;let p0=_.result?.type;C9(_,p0==="domino"||p0==="capicua"?3.4:p0==="tranque"?2.5:1.2)}}Y8=[0,1,2,3].map((W0)=>!_||_.phase==="lobby"?0:_.counts[W0]??0),Y0.visible=!1,KQ=_?.phase==="playing"&&_.chain?.length?F5(_.chain,_.moves):null}let D8=new bZ,HQ=0,ZK=0,B$=0,UQ=60,pY=!1,k$=!1,NQ=null,U6="high",lY=null,M$=performance.now(),C$=0,mY=!1,y5=new URLSearchParams(location.search).has("debug"),uY=F.intensity,I7=ZJ(),v5=ZJ(0,R0.surfaceY,0);function KK(){if(pY||k$){NQ=null;return}NQ=requestAnimationFrame(KK);let _=D8.getDelta(),u=Math.min(_,0.06),Q0=lY??D8.elapsedTime,c=performance.now();if(ZK++,B$+=_,B$>1){if(UQ=ZK/B$,ZK=0,B$=0,!W&&!C$&&U6==="high"&&c-M$>9000&&c-M$<30000&&UQ<30)C$=c,WK.quality("low"),dispatchEvent(new CustomEvent("mesa:calidad",{detail:"low"}));else if(!W&&U6==="low"&&!mY&&c-(C$||M$)>9000&&c-(C$||M$)<40000&&UQ<20)mY=!0,WK.quality("min"),dispatchEvent(new CustomEvent("mesa:calidad",{detail:"min"}))}HQ++,K.info.reset();let F0=document.documentElement.classList.contains("reduced");if(d&&D8.elapsedTime>d.at)K8={from:Z.position.clone(),to:d.pos,fromTarget:X.target.clone(),toTarget:d.target,t:0,dur:1.2},d=null,X.minDistance=S0;let W0=0;if(n>=0){let U0=D8.elapsedTime-n;if(U0<0.5){let f0=0.0045*Math.exp(-U0*8)*Math.sin(U0*K6*18);j0.position.y=f0,MJ.position.y=f0,W0=F0?0:0.004*Math.exp(-U0*9),F.intensity=uY*(1+0.35*Math.exp(-U0*14))}else n=-1,j0.position.y=0,MJ.position.y=0,F.intensity=uY}if(K8){K8.t=Math.min(1,K8.t+u/(K8.dur||1.1));let U0=xJ(K8.t);if(Z.position.lerpVectors(K8.from,K8.to,U0),X.target.lerpVectors(K8.fromTarget,K8.toTarget,U0),K8.t===1)K8=null}if(!F0)J0.rotation.z=Q0*3.5,H0.rotation.z=Math.sin(Q0*0.47)*0.009,c0.update(Q0),DJ.update(Q0);let P0=C7,p0={dt:u,jugando:P0?.phase==="playing",turno:P0?.turn,habla:X6,hablaTipo:B9,foco:L$,fin:W6,cabezas:k0.map((U0,f0)=>U0?.head?U0.head.getWorldPosition(WQ[f0]):null)};for(let U0 of k0){if(!U0)continue;eZ(U0,Q0,F0,p0),wJ(U0)}for(let U0=0;U0<M0.length;U0++)if((HQ+U0)%2===0)eZ(M0[U0],Q0,F0,p0);$9=$9.filter((U0)=>{if(U0.elapsed+=u,U0.elapsed<0)return!0;let f0=Math.min(1,U0.elapsed/U0.duration);if(U0.revela!=null){U0.obj.visible=!0,X8.add(U0.revela);let HJ=xJ(f0);if(U0.obj.quaternion.slerpQuaternions(U0.qFrom,U0.qTo,HJ),U0.obj.position.lerpVectors(U0.from,U0.to,HJ),U0.obj.position.y+=Math.sin(f0*Math.PI)*0.012,f0>=1&&U0.ultima)dispatchEvent(new CustomEvent("mesa:aterriza",{detail:{revela:!0}}));return f0<1}if(U0.reparto)return U0.obj.position.lerpVectors(U0.from,U0.to,xJ(f0)),U0.obj.position.y+=Math.sin(f0*Math.PI)*0.035,U0.obj.quaternion.slerpQuaternions(U0.qFrom,U0.qTo,xJ(Math.min(1,Math.max(0,(f0-0.3)/0.7)))),f0<1;if(U0.obj.quaternion.slerpQuaternions(U0.qFrom,U0.qTo,xJ(Math.min(1,f0/0.4))),U0.golpe){let HJ=Math.min(1,f0/0.62);U0.obj.position.lerpVectors(U0.from,U0.to,xJ(HJ)),U0.obj.position.y+=f0<0.62?Math.sin(HJ*Math.PI/2)*0.17:0.17*(1-((f0-0.62)/0.38)**2)}else U0.obj.position.lerpVectors(U0.from,U0.to,xJ(f0)),U0.obj.position.y+=Math.sin(f0*Math.PI)*0.07;if(f0>=1&&!U0.sono){if(U0.sono=!0,U0.golpe)n=D8.elapsedTime;dispatchEvent(new CustomEvent("mesa:aterriza",{detail:{golpe:!!U0.golpe}}))}return f0<1});let u0=c<D$;if(MJ.visible=!u0,!u0&&F8.children.length)XQ(F8);if(zJ(u),X.update(),!K8&&!d&&!M)r();if(L8.frame(Q0,u,{reduced:F0,view:P0,ends:KQ,temblor:W0}),L8.render(),HQ%2===0)for(let U0 of document.querySelectorAll("[data-seatlabel]")){let f0=Number(U0.dataset.seatlabel),[HJ,JJ]=q9[f0],RJ=k0[f0]?.head,fJ=RJ&&RJ.getWorldPosition(I7).distanceTo(L8.vista.position)<v5.distanceTo(L8.vista.position)-0.2;if(fJ)I7.y-=0.3;else if(RJ)I7.y+=0.23;else I7.set(HJ,1.45,JJ);let LJ=I7.project(L8.vista),I8=!1;if(!fJ&&LJ.y>0.8&&RJ)RJ.getWorldPosition(I7).y-=0.1,LJ=I7.project(L8.vista),I8=!0;let f5=Math.min(LJ.y,0.8);U0.style.transform=`translate(${(LJ.x*0.5+0.5)*innerWidth}px,${(-f5*0.5+0.5)*innerHeight}px) translate(-50%,${fJ?"-50%":I8?"0":"-100%"})`,U0.style.visibility=LJ.z>1||Math.abs(LJ.x)>1.1||LJ.y<-1.15?"hidden":"visible"}if(HQ%30===0||HQ===1){if(window.mesaDiagnostics={cam:Z.position.toArray().map((U0)=>+U0.toFixed(2)),fps:Math.round(UQ),drawCalls:K.info.render.calls,triangles:K.info.render.triangles,characters:a0,crowd:k9,visibleCrowd:M0.length,boardTiles:C7?.chain.length||0,quality:U6,modelErrors:b},y5){window.mesaRigDebug=k0.filter(Boolean).map((f0)=>({index:f0.index,head:f0.head?.getWorldPosition(ZJ()).toArray(),hip:f0.hips?.getWorldPosition(ZJ()).toArray(),rootScale:f0.root.scale.toArray()}));let U0=document.querySelector("#perf");if(U0)U0.textContent=`${Math.round(UQ)} fps · ${K.info.render.calls} draws`}}}window.mesaCamara=(_,u)=>{K8=null,d=null,M=!0,X.minDistance=0.1,X.maxDistance=30,Z.position.set(..._),X.target.set(...u),X.update()},window.mesaCara=(_,u,Q0)=>{let c=k0[_];if(c)c.caraFija=u==null?null:{p:u,s:Q0??0}},window.mesaBeber=(_,u)=>{let Q0=k0[_];if(Q0&&Q0.bebida&&!Q0.jugada)Q0.trago={t0:D8.elapsedTime,fijo:u}},x9(null),KK();let dY=()=>{if(Z.aspect<0.95)Z.setViewOffset(innerWidth,innerHeight*1.24,0,innerHeight*0.24,innerWidth,innerHeight);else Z.clearViewOffset();Z.updateProjectionMatrix()},cY=()=>Y?0.65:U6==="min"?Math.min(devicePixelRatio,1)*0.55:U6==="low"?Math.min(devicePixelRatio,1)*0.8:Math.min(devicePixelRatio,1.5,1920/innerWidth),nY=()=>{Z.aspect=innerWidth/innerHeight,dY(),K.setPixelRatio(cY()),K.setSize(innerWidth,innerHeight),L8.resize(innerWidth,innerHeight)};dY(),window.addEventListener("resize",nY),X.addEventListener("start",()=>{K8=null,d=null}),K.domElement.addEventListener("webglcontextrestored",()=>L8.entorno?.());let WK={update:x9,setCrowd:H6,setCamera:w0,ready:Q9,sampleTime(_){lY=_;for(let u of[...k0.filter(Boolean),...M0])eZ(u,_,!1);L8.frame(_,0,{reduced:!1,view:C7,ends:KQ}),L8.render()},setMode(_){V$=_,w0(_==="attract"?"attract":"table")},quality(_){U6=_;let u=_!=="high";F.castShadow=!u&&!Y;for(let[Q0,c]of B0){let F0=u?0:c.clearcoat,W0=u?0:c.sheen;if(Q0.clearcoat!==F0||Q0.sheen!==W0)Q0.clearcoat=F0,Q0.sheen=W0,Q0.needsUpdate=!0}G.visible=!u,U.intensity=u?H+0.1:H,K.setPixelRatio(cY()),L8.calidad(_),L8.resize(innerWidth,innerHeight)},pause(){k$=!0},resume(){if(!k$)return;if(k$=!1,D8.getDelta(),!NQ)KK()},dispose(){if(pY=!0,L8.dispose(),window.removeEventListener("mesa:botvoice",YQ),NQ)cancelAnimationFrame(NQ);window.removeEventListener("resize",nY),X.dispose(),K.dispose(),J.replaceChildren()}};return WK}export{HB as createWorld};

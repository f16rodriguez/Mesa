var cX="186",U7={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},N7={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},nX=0,cK=1,sX=2;var y7=1,iX=2,b6=3,G7=0,D8=1,iJ=2,o8=0,yQ=1,A9=2,nK=3,sK=4,oX=5;var h6=100,aX=101,rX=102,tX=103,eX=104,JH=200,QH=201,$H=202,ZH=203,KH=204,WH=205,YH=206,XH=207,HH=208,UH=209,NH=210,GH=211,FH=212,EH=213,qH=214,OH=0,RH=1,LH=2,iK=3,VH=4,DH=5,BH=6,MH=7,kH=0,CH=1,PH=2,G9=0,vQ=1,fQ=2,bQ=3,v7=4,hQ=5,xQ=6,gQ=7;var x6=301,f7=302,HZ=303,UZ=304,pQ=306,F7=1000,g6=1001,NZ=1002,F9=1003,GZ=1004;var b7=1005;var q8=1006,p6=1007;var _9=1008;var E9=1009,IH=1010,zH=1011,lQ=1012,oK=1013,E7=1014,n9=1015,O8=1016,aK=1017,rK=1018,l6=1020,AH=35902,_H=35899,TH=1021,SH=1022,T9=1023,h7=1026,x7=1027,wH=1028,tK=1029,g7=1030,eK=1031;var JW=1033,FZ=33776,EZ=33777,qZ=33778,OZ=33779,QW=35840,$W=35841,ZW=35842,KW=35843,WW=36196,YW=37492,XW=37496,HW=37488,UW=37489,RZ=37490,NW=37491,GW=37808,FW=37809,EW=37810,qW=37811,OW=37812,RW=37813,LW=37814,VW=37815,DW=37816,BW=37817,MW=37818,kW=37819,CW=37820,PW=37821,IW=36492,zW=36494,AW=36495,_W=36283,TW=36284,LZ=36285,SW=36286;var wW=2300,VZ=2301;var jW=0,mQ=1,m6=2;var yW=0,jH=1,p7="",J8="srgb",p8="srgb-linear",vW="linear",uJ="srgb";var yH=512,vH=513,fH=514,DZ=515,bH=516,hH=517,BZ=518,xH=519;var fW="300 es",bW=2000;function u5(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function d5(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function j6(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function gH(){let J=j6("canvas");return J.style.display="block",J}var JX={},y6=null;function TQ(...J){let Q="THREE."+J.shift();if(y6)y6("log",Q,...J);else console.log(Q,...J)}function pH(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function r0(...J){J=pH(J);let Q="THREE."+J.shift();if(y6)y6("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function $J(...J){J=pH(J);let Q="THREE."+J.shift();if(y6)y6("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function S7(...J){let Q=J.join(" ");if(Q in JX)return;JX[Q]=!0,r0(...J)}function lH(J,Q,$){return new Promise(function(Z,K){function W(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:K();break;case J.TIMEOUT_EXPIRED:setTimeout(W,$);break;default:Z()}}setTimeout(W,$)})}var mH={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class q9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let K=Z.indexOf(Q);if(K!==-1)Z.splice(K,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let K=0,W=Z.length;K<W;K++)Z[K].call(this,J);J.target=null}}}var B8=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],QX=1234567,IQ=Math.PI/180,w7=180/Math.PI;function i8(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(B8[J&255]+B8[J>>8&255]+B8[J>>16&255]+B8[J>>24&255]+"-"+B8[Q&255]+B8[Q>>8&255]+"-"+B8[Q>>16&15|64]+B8[Q>>24&255]+"-"+B8[$&63|128]+B8[$>>8&255]+"-"+B8[$>>16&255]+B8[$>>24&255]+B8[Z&255]+B8[Z>>8&255]+B8[Z>>16&255]+B8[Z>>24&255]).toLowerCase()}function GJ(J,Q,$){return Math.max(Q,Math.min($,J))}function hW(J,Q){return(J%Q+Q)%Q}function c5(J,Q,$,Z,K){return Z+(J-Q)*(K-Z)/($-Q)}function n5(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function zQ(J,Q,$){return(1-$)*J+$*Q}function s5(J,Q,$,Z){return zQ(J,Q,1-Math.exp(-$*Z))}function i5(J,Q=1){return Q-Math.abs(hW(J,Q*2)-Q)}function o5(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function a5(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function r5(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function t5(J,Q){return J+Math.random()*(Q-J)}function e5(J){return J*(0.5-Math.random())}function JN(J){if(J!==void 0)QX=J;let Q=QX+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function QN(J){return J*IQ}function $N(J){return J*w7}function ZN(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function KN(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function WN(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function YN(J,Q,$,Z,K){let{cos:W,sin:Y}=Math,X=W($/2),H=Y($/2),U=W((Q+Z)/2),N=Y((Q+Z)/2),F=W((Q-Z)/2),G=Y((Q-Z)/2),E=W((Z-Q)/2),O=Y((Z-Q)/2);switch(K){case"XYX":J.set(X*N,H*F,H*G,X*U);break;case"YZY":J.set(H*G,X*N,H*F,X*U);break;case"ZXZ":J.set(H*F,H*G,X*N,X*U);break;case"XZX":J.set(X*N,H*O,H*E,X*U);break;case"YXY":J.set(H*E,X*N,H*O,X*U);break;case"ZYZ":J.set(H*O,H*E,X*N,X*U);break;default:r0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+K)}}function U9(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:case Uint8ClampedArray:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function lJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var S9={DEG2RAD:IQ,RAD2DEG:w7,generateUUID:i8,clamp:GJ,euclideanModulo:hW,mapLinear:c5,inverseLerp:n5,lerp:zQ,damp:s5,pingpong:i5,smoothstep:o5,smootherstep:a5,randInt:r5,randFloat:t5,randFloatSpread:e5,seededRandom:JN,degToRad:QN,radToDeg:$N,isPowerOfTwo:ZN,ceilPowerOfTwo:KN,floorPowerOfTwo:WN,setQuaternionFromProperEuler:YN,normalize:lJ,denormalize:U9};class F0{static{F0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=GJ(this.x,J.x,Q.x),this.y=GJ(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=GJ(this.x,J,Q),this.y=GJ(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(GJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(GJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=this.x-J.x,W=this.y-J.y;return this.x=K*$-W*Z+J.x,this.y=K*Z+W*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class CJ{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,K,W,Y){let X=$[Z+0],H=$[Z+1],U=$[Z+2],N=$[Z+3],F=K[W+0],G=K[W+1],E=K[W+2],O=K[W+3];if(N!==O||X!==F||H!==G||U!==E){let B=X*F+H*G+U*E+N*O;if(B<0)F=-F,G=-G,E=-E,O=-O,B=-B;let R=1-Y;if(B<0.9995){let q=Math.acos(B),M=Math.sin(q);R=Math.sin(R*q)/M,Y=Math.sin(Y*q)/M,X=X*R+F*Y,H=H*R+G*Y,U=U*R+E*Y,N=N*R+O*Y}else{X=X*R+F*Y,H=H*R+G*Y,U=U*R+E*Y,N=N*R+O*Y;let q=1/Math.sqrt(X*X+H*H+U*U+N*N);X*=q,H*=q,U*=q,N*=q}}J[Q]=X,J[Q+1]=H,J[Q+2]=U,J[Q+3]=N}static multiplyQuaternionsFlat(J,Q,$,Z,K,W){let Y=$[Z],X=$[Z+1],H=$[Z+2],U=$[Z+3],N=K[W],F=K[W+1],G=K[W+2],E=K[W+3];return J[Q]=Y*E+U*N+X*G-H*F,J[Q+1]=X*E+U*F+H*N-Y*G,J[Q+2]=H*E+U*G+Y*F-X*N,J[Q+3]=U*E-Y*N-X*F-H*G,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:K,_order:W}=J,Y=Math.cos,X=Math.sin,H=Y($/2),U=Y(Z/2),N=Y(K/2),F=X($/2),G=X(Z/2),E=X(K/2);switch(W){case"XYZ":this._x=F*U*N+H*G*E,this._y=H*G*N-F*U*E,this._z=H*U*E+F*G*N,this._w=H*U*N-F*G*E;break;case"YXZ":this._x=F*U*N+H*G*E,this._y=H*G*N-F*U*E,this._z=H*U*E-F*G*N,this._w=H*U*N+F*G*E;break;case"ZXY":this._x=F*U*N-H*G*E,this._y=H*G*N+F*U*E,this._z=H*U*E+F*G*N,this._w=H*U*N-F*G*E;break;case"ZYX":this._x=F*U*N-H*G*E,this._y=H*G*N+F*U*E,this._z=H*U*E-F*G*N,this._w=H*U*N+F*G*E;break;case"YZX":this._x=F*U*N+H*G*E,this._y=H*G*N+F*U*E,this._z=H*U*E-F*G*N,this._w=H*U*N-F*G*E;break;case"XZY":this._x=F*U*N-H*G*E,this._y=H*G*N-F*U*E,this._z=H*U*E+F*G*N,this._w=H*U*N+F*G*E;break;default:r0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],K=Q[8],W=Q[1],Y=Q[5],X=Q[9],H=Q[2],U=Q[6],N=Q[10],F=$+Y+N;if(F>0){let G=0.5/Math.sqrt(F+1);this._w=0.25/G,this._x=(U-X)*G,this._y=(K-H)*G,this._z=(W-Z)*G}else if($>Y&&$>N){let G=2*Math.sqrt(1+$-Y-N);this._w=(U-X)/G,this._x=0.25*G,this._y=(Z+W)/G,this._z=(K+H)/G}else if(Y>N){let G=2*Math.sqrt(1+Y-$-N);this._w=(K-H)/G,this._x=(Z+W)/G,this._y=0.25*G,this._z=(X+U)/G}else{let G=2*Math.sqrt(1+N-$-Y);this._w=(W-Z)/G,this._x=(K+H)/G,this._y=(X+U)/G,this._z=0.25*G}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(GJ(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,Y=Q._x,X=Q._y,H=Q._z,U=Q._w;return this._x=$*U+W*Y+Z*H-K*X,this._y=Z*U+W*X+K*Y-$*H,this._z=K*U+W*H+$*X-Z*Y,this._w=W*U-$*Y-Z*X-K*H,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,Y=this.dot(J);if(Y<0)$=-$,Z=-Z,K=-K,W=-W,Y=-Y;let X=1-Q;if(Y<0.9995){let H=Math.acos(Y),U=Math.sin(H);X=Math.sin(X*H)/U,Q=Math.sin(Q*H)/U,this._x=this._x*X+$*Q,this._y=this._y*X+Z*Q,this._z=this._z*X+K*Q,this._w=this._w*X+W*Q,this._onChangeCallback()}else this._x=this._x*X+$*Q,this._y=this._y*X+Z*Q,this._z=this._z*X+K*Q,this._w=this._w*X+W*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),K=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),K*Math.sin(Q),K*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class _{static{_.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion($X.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion($X.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[3]*$+K[6]*Z,this.y=K[1]*Q+K[4]*$+K[7]*Z,this.z=K[2]*Q+K[5]*$+K[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements,W=1/(K[3]*Q+K[7]*$+K[11]*Z+K[15]);return this.x=(K[0]*Q+K[4]*$+K[8]*Z+K[12])*W,this.y=(K[1]*Q+K[5]*$+K[9]*Z+K[13])*W,this.z=(K[2]*Q+K[6]*$+K[10]*Z+K[14])*W,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,K=J.x,W=J.y,Y=J.z,X=J.w,H=2*(W*Z-Y*$),U=2*(Y*Q-K*Z),N=2*(K*$-W*Q);return this.x=Q+X*H+W*N-Y*U,this.y=$+X*U+Y*H-K*N,this.z=Z+X*N+K*U-W*H,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*Z,this.y=K[1]*Q+K[5]*$+K[9]*Z,this.z=K[2]*Q+K[6]*$+K[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=GJ(this.x,J.x,Q.x),this.y=GJ(this.y,J.y,Q.y),this.z=GJ(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=GJ(this.x,J,Q),this.y=GJ(this.y,J,Q),this.z=GJ(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(GJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:K}=J,W=Q.x,Y=Q.y,X=Q.z;return this.x=Z*X-K*Y,this.y=K*W-$*X,this.z=$*Y-Z*W,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return EK.copy(this).projectOnVector(J),this.sub(EK)}reflect(J){return this.sub(EK.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(GJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var EK=new _,$X=new CJ;class XJ{static{XJ.prototype.isMatrix3=!0}constructor(J,Q,$,Z,K,W,Y,X,H){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,Y,X,H)}set(J,Q,$,Z,K,W,Y,X,H){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=Y,U[3]=Q,U[4]=K,U[5]=X,U[6]=$,U[7]=W,U[8]=H,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],Y=$[3],X=$[6],H=$[1],U=$[4],N=$[7],F=$[2],G=$[5],E=$[8],O=Z[0],B=Z[3],R=Z[6],q=Z[1],M=Z[4],P=Z[7],V=Z[2],L=Z[5],C=Z[8];return K[0]=W*O+Y*q+X*V,K[3]=W*B+Y*M+X*L,K[6]=W*R+Y*P+X*C,K[1]=H*O+U*q+N*V,K[4]=H*B+U*M+N*L,K[7]=H*R+U*P+N*C,K[2]=F*O+G*q+E*V,K[5]=F*B+G*M+E*L,K[8]=F*R+G*P+E*C,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],Y=J[5],X=J[6],H=J[7],U=J[8];return Q*W*U-Q*Y*H-$*K*U+$*Y*X+Z*K*H-Z*W*X}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],Y=J[5],X=J[6],H=J[7],U=J[8],N=U*W-Y*H,F=Y*X-U*K,G=H*K-W*X,E=Q*N+$*F+Z*G;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);let O=1/E;return J[0]=N*O,J[1]=(Z*H-U*$)*O,J[2]=(Y*$-Z*W)*O,J[3]=F*O,J[4]=(U*Q-Z*X)*O,J[5]=(Z*K-Y*Q)*O,J[6]=G*O,J[7]=($*X-H*Q)*O,J[8]=(W*Q-$*K)*O,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,K,W,Y){let X=Math.cos(K),H=Math.sin(K);return this.set($*X,$*H,-$*(X*W+H*Y)+W+J,-Z*H,Z*X,-Z*(-H*W+X*Y)+Y+Q,0,0,1),this}scale(J,Q){return S7("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qK.makeScale(J,Q)),this}rotate(J){return S7("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qK.makeRotation(-J)),this}translate(J,Q){return S7("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qK.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var qK=new XJ,ZX=new XJ().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),KX=new XJ().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function XN(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(K,W,Y){if(this.enabled===!1||W===Y||!W||!Y)return K;if(this.spaces[W].transfer==="srgb")K.r=c9(K.r),K.g=c9(K.g),K.b=c9(K.b);if(this.spaces[W].primaries!==this.spaces[Y].primaries)K.applyMatrix3(this.spaces[W].toXYZ),K.applyMatrix3(this.spaces[Y].fromXYZ);if(this.spaces[Y].transfer==="srgb")K.r=S6(K.r),K.g=S6(K.g),K.b=S6(K.b);return K},workingToColorSpace:function(K,W){return this.convert(K,this.workingColorSpace,W)},colorSpaceToWorking:function(K,W){return this.convert(K,W,this.workingColorSpace)},getPrimaries:function(K){return this.spaces[K].primaries},getTransfer:function(K){if(K==="")return"linear";return this.spaces[K].transfer},getToneMappingMode:function(K){return this.spaces[K].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(K,W=this.workingColorSpace){return K.fromArray(this.spaces[W].luminanceCoefficients)},define:function(K){Object.assign(this.spaces,K)},_getMatrix:function(K,W,Y){return K.copy(this.spaces[W].toXYZ).multiply(this.spaces[Y].fromXYZ)},_getDrawingBufferColorSpace:function(K){return this.spaces[K].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(K=this.workingColorSpace){return this.spaces[K].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(K,W){return S7("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(K,W)},toWorkingColorSpace:function(K,W){return S7("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(K,W)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:ZX,fromXYZ:KX,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:ZX,fromXYZ:KX,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var EJ=XN();function c9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function S6(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var F6;class xW{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(F6===void 0)F6=j6("canvas");F6.width=J.width,F6.height=J.height;let Z=F6.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=F6}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=j6("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),K=Z.data;for(let W=0;W<K.length;W++)K[W]=c9(K[W]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(c9(Q[$]/255)*255);else Q[$]=c9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return r0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var HN=0;class uQ{constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:HN++}),this.uuid=i8(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let K;if(Array.isArray(Z)){K=[];for(let W=0,Y=Z.length;W<Y;W++)if(Z[W].isDataTexture)K.push(OK(Z[W].image));else K.push(OK(Z[W]))}else K=OK(Z);$.url=K}if(!Q)J.images[this.uuid]=$;return $}}function OK(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return xW.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return r0("Texture: Unable to serialize Texture."),{}}var UN=0,RK=new _;class eJ extends q9{constructor(J=eJ.DEFAULT_IMAGE,Q=eJ.DEFAULT_MAPPING,$=1001,Z=1001,K=1006,W=1008,Y=1023,X=1009,H=eJ.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:UN++}),this.uuid=i8(),this.name="",this.source=new uQ(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=K,this.minFilter=W,this.anisotropy=H,this.format=Y,this.internalFormat=null,this.type=X,this.offset=new F0(0,0),this.repeat=new F0(1,1),this.center=new F0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new XJ,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(RK).x}get height(){return this.source.getSize(RK).y}get depth(){return this.source.getSize(RK).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){r0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){r0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}eJ.DEFAULT_IMAGE=null;eJ.DEFAULT_MAPPING=300;eJ.DEFAULT_ANISOTROPY=1;class mJ{static{mJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,Z=1){this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=this.w,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z+W[12]*K,this.y=W[1]*Q+W[5]*$+W[9]*Z+W[13]*K,this.z=W[2]*Q+W[6]*$+W[10]*Z+W[14]*K,this.w=W[3]*Q+W[7]*$+W[11]*Z+W[15]*K,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,K,W=0.01,Y=0.1,X=J.elements,H=X[0],U=X[4],N=X[8],F=X[1],G=X[5],E=X[9],O=X[2],B=X[6],R=X[10];if(Math.abs(U-F)<0.01&&Math.abs(N-O)<0.01&&Math.abs(E-B)<0.01){if(Math.abs(U+F)<0.1&&Math.abs(N+O)<0.1&&Math.abs(E+B)<0.1&&Math.abs(H+G+R-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let M=(H+1)/2,P=(G+1)/2,V=(R+1)/2,L=(U+F)/4,C=(N+O)/4,A=(E+B)/4;if(M>P&&M>V)if(M<0.01)$=0,Z=0.707106781,K=0.707106781;else $=Math.sqrt(M),Z=L/$,K=C/$;else if(P>V)if(P<0.01)$=0.707106781,Z=0,K=0.707106781;else Z=Math.sqrt(P),$=L/Z,K=A/Z;else if(V<0.01)$=0.707106781,Z=0.707106781,K=0;else K=Math.sqrt(V),$=C/K,Z=A/K;return this.set($,Z,K,Q),this}let q=Math.sqrt((B-E)*(B-E)+(N-O)*(N-O)+(F-U)*(F-U));if(Math.abs(q)<0.001)q=1;return this.x=(B-E)/q,this.y=(N-O)/q,this.z=(F-U)/q,this.w=Math.acos((H+G+R-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=GJ(this.x,J.x,Q.x),this.y=GJ(this.y,J.y,Q.y),this.z=GJ(this.z,J.z,Q.z),this.w=GJ(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=GJ(this.x,J,Q),this.y=GJ(this.y,J,Q),this.z=GJ(this.z,J,Q),this.w=GJ(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(GJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gW extends q9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new mJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new mJ(0,0,J,Q),this.textures=[];let Z={width:J,height:Q,depth:$.depth},K=new eJ(Z),W=$.count;for(let Y=0;Y<W;Y++)this.textures[Y]=K.clone(),this.textures[Y].isRenderTargetTexture=!0,this.textures[Y].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveColorBuffer=$.resolveColorBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this.storeMultisampledColorBuffer=$.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=$.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=$.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,K=this.textures.length;Z<K;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new uQ(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Q8 extends gW{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class MZ extends eJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class pW extends eJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class QJ{static{QJ.prototype.isMatrix4=!0}constructor(J,Q,$,Z,K,W,Y,X,H,U,N,F,G,E,O,B){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,Y,X,H,U,N,F,G,E,O,B)}set(J,Q,$,Z,K,W,Y,X,H,U,N,F,G,E,O,B){let R=this.elements;return R[0]=J,R[4]=Q,R[8]=$,R[12]=Z,R[1]=K,R[5]=W,R[9]=Y,R[13]=X,R[2]=H,R[6]=U,R[10]=N,R[14]=F,R[3]=G,R[7]=E,R[11]=O,R[15]=B,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new QJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/E6.setFromMatrixColumn(J,0).length(),K=1/E6.setFromMatrixColumn(J,1).length(),W=1/E6.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*K,Q[5]=$[5]*K,Q[6]=$[6]*K,Q[7]=0,Q[8]=$[8]*W,Q[9]=$[9]*W,Q[10]=$[10]*W,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z,W=Math.cos($),Y=Math.sin($),X=Math.cos(Z),H=Math.sin(Z),U=Math.cos(K),N=Math.sin(K);if(J.order==="XYZ"){let F=W*U,G=W*N,E=Y*U,O=Y*N;Q[0]=X*U,Q[4]=-X*N,Q[8]=H,Q[1]=G+E*H,Q[5]=F-O*H,Q[9]=-Y*X,Q[2]=O-F*H,Q[6]=E+G*H,Q[10]=W*X}else if(J.order==="YXZ"){let F=X*U,G=X*N,E=H*U,O=H*N;Q[0]=F+O*Y,Q[4]=E*Y-G,Q[8]=W*H,Q[1]=W*N,Q[5]=W*U,Q[9]=-Y,Q[2]=G*Y-E,Q[6]=O+F*Y,Q[10]=W*X}else if(J.order==="ZXY"){let F=X*U,G=X*N,E=H*U,O=H*N;Q[0]=F-O*Y,Q[4]=-W*N,Q[8]=E+G*Y,Q[1]=G+E*Y,Q[5]=W*U,Q[9]=O-F*Y,Q[2]=-W*H,Q[6]=Y,Q[10]=W*X}else if(J.order==="ZYX"){let F=W*U,G=W*N,E=Y*U,O=Y*N;Q[0]=X*U,Q[4]=E*H-G,Q[8]=F*H+O,Q[1]=X*N,Q[5]=O*H+F,Q[9]=G*H-E,Q[2]=-H,Q[6]=Y*X,Q[10]=W*X}else if(J.order==="YZX"){let F=W*X,G=W*H,E=Y*X,O=Y*H;Q[0]=X*U,Q[4]=O-F*N,Q[8]=E*N+G,Q[1]=N,Q[5]=W*U,Q[9]=-Y*U,Q[2]=-H*U,Q[6]=G*N+E,Q[10]=F-O*N}else if(J.order==="XZY"){let F=W*X,G=W*H,E=Y*X,O=Y*H;Q[0]=X*U,Q[4]=-N,Q[8]=H*U,Q[1]=F*N+O,Q[5]=W*U,Q[9]=G*N-E,Q[2]=E*N-G,Q[6]=Y*U,Q[10]=O*N+F}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(NN,J,GN)}lookAt(J,Q,$){let Z=this.elements;if(h8.subVectors(J,Q),h8.lengthSq()===0)h8.z=1;if(h8.normalize(),Q7.crossVectors($,h8),Q7.lengthSq()===0){if(Math.abs($.z)===1)h8.x+=0.0001;else h8.z+=0.0001;h8.normalize(),Q7.crossVectors($,h8)}return Q7.normalize(),_$.crossVectors(h8,Q7),Z[0]=Q7.x,Z[4]=_$.x,Z[8]=h8.x,Z[1]=Q7.y,Z[5]=_$.y,Z[9]=h8.y,Z[2]=Q7.z,Z[6]=_$.z,Z[10]=h8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],Y=$[4],X=$[8],H=$[12],U=$[1],N=$[5],F=$[9],G=$[13],E=$[2],O=$[6],B=$[10],R=$[14],q=$[3],M=$[7],P=$[11],V=$[15],L=Z[0],C=Z[4],A=Z[8],D=Z[12],I=Z[1],d=Z[5],f=Z[9],u=Z[13],$0=Z[2],y=Z[6],j=Z[10],g=Z[14],v=Z[3],i=Z[7],x=Z[11],a=Z[15];return K[0]=W*L+Y*I+X*$0+H*v,K[4]=W*C+Y*d+X*y+H*i,K[8]=W*A+Y*f+X*j+H*x,K[12]=W*D+Y*u+X*g+H*a,K[1]=U*L+N*I+F*$0+G*v,K[5]=U*C+N*d+F*y+G*i,K[9]=U*A+N*f+F*j+G*x,K[13]=U*D+N*u+F*g+G*a,K[2]=E*L+O*I+B*$0+R*v,K[6]=E*C+O*d+B*y+R*i,K[10]=E*A+O*f+B*j+R*x,K[14]=E*D+O*u+B*g+R*a,K[3]=q*L+M*I+P*$0+V*v,K[7]=q*C+M*d+P*y+V*i,K[11]=q*A+M*f+P*j+V*x,K[15]=q*D+M*u+P*g+V*a,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[12],W=J[1],Y=J[5],X=J[9],H=J[13],U=J[2],N=J[6],F=J[10],G=J[14],E=J[3],O=J[7],B=J[11],R=J[15],q=X*G-H*F,M=Y*G-H*N,P=Y*F-X*N,V=W*G-H*U,L=W*F-X*U,C=W*N-Y*U;return Q*(O*q-B*M+R*P)-$*(E*q-B*V+R*L)+Z*(E*M-O*V+R*C)-K*(E*P-O*L+B*C)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[1],W=J[5],Y=J[9],X=J[2],H=J[6],U=J[10];return Q*(W*U-Y*H)-$*(K*U-Y*X)+Z*(K*H-W*X)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],Y=J[5],X=J[6],H=J[7],U=J[8],N=J[9],F=J[10],G=J[11],E=J[12],O=J[13],B=J[14],R=J[15],q=Q*Y-$*W,M=Q*X-Z*W,P=Q*H-K*W,V=$*X-Z*Y,L=$*H-K*Y,C=Z*H-K*X,A=U*O-N*E,D=U*B-F*E,I=U*R-G*E,d=N*B-F*O,f=N*R-G*O,u=F*R-G*B,$0=q*u-M*f+P*d+V*I-L*D+C*A;if($0===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let y=1/$0;return J[0]=(Y*u-X*f+H*d)*y,J[1]=(Z*f-$*u-K*d)*y,J[2]=(O*C-B*L+R*V)*y,J[3]=(F*L-N*C-G*V)*y,J[4]=(X*I-W*u-H*D)*y,J[5]=(Q*u-Z*I+K*D)*y,J[6]=(B*P-E*C-R*M)*y,J[7]=(U*C-F*P+G*M)*y,J[8]=(W*f-Y*I+H*A)*y,J[9]=($*I-Q*f-K*A)*y,J[10]=(E*L-O*P+R*q)*y,J[11]=(N*P-U*L-G*q)*y,J[12]=(Y*D-W*d-X*A)*y,J[13]=(Q*d-$*D+Z*A)*y,J[14]=(O*M-E*V-B*q)*y,J[15]=(U*V-N*M+F*q)*y,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=K,Q[1]*=$,Q[5]*=Z,Q[9]*=K,Q[2]*=$,Q[6]*=Z,Q[10]*=K,Q[3]*=$,Q[7]*=Z,Q[11]*=K,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=1-$,W=J.x,Y=J.y,X=J.z,H=K*W,U=K*Y;return this.set(H*W+$,H*Y-Z*X,H*X+Z*Y,0,H*Y+Z*X,U*Y+$,U*X-Z*W,0,H*X-Z*Y,U*X+Z*W,K*X*X+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,K,W){return this.set(1,$,K,0,J,1,W,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,K=Q._x,W=Q._y,Y=Q._z,X=Q._w,H=K+K,U=W+W,N=Y+Y,F=K*H,G=K*U,E=K*N,O=W*U,B=W*N,R=Y*N,q=X*H,M=X*U,P=X*N,V=$.x,L=$.y,C=$.z;return Z[0]=(1-(O+R))*V,Z[1]=(G+P)*V,Z[2]=(E-M)*V,Z[3]=0,Z[4]=(G-P)*L,Z[5]=(1-(F+R))*L,Z[6]=(B+q)*L,Z[7]=0,Z[8]=(E+M)*C,Z[9]=(B-q)*C,Z[10]=(1-(F+O))*C,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let K=this.determinantAffine();if(K===0)return $.set(1,1,1),Q.identity(),this;let W=E6.set(Z[0],Z[1],Z[2]).length(),Y=E6.set(Z[4],Z[5],Z[6]).length(),X=E6.set(Z[8],Z[9],Z[10]).length();if(K<0)W=-W;Y9.copy(this);let H=1/W,U=1/Y,N=1/X;return Y9.elements[0]*=H,Y9.elements[1]*=H,Y9.elements[2]*=H,Y9.elements[4]*=U,Y9.elements[5]*=U,Y9.elements[6]*=U,Y9.elements[8]*=N,Y9.elements[9]*=N,Y9.elements[10]*=N,Q.setFromRotationMatrix(Y9),$.x=W,$.y=Y,$.z=X,this}makePerspective(J,Q,$,Z,K,W,Y=2000,X=!1){let H=this.elements,U=2*K/(Q-J),N=2*K/($-Z),F=(Q+J)/(Q-J),G=($+Z)/($-Z),E,O;if(X)E=K/(W-K),O=W*K/(W-K);else if(Y===2000)E=-(W+K)/(W-K),O=-2*W*K/(W-K);else if(Y===2001)E=-W/(W-K),O=-W*K/(W-K);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+Y);return H[0]=U,H[4]=0,H[8]=F,H[12]=0,H[1]=0,H[5]=N,H[9]=G,H[13]=0,H[2]=0,H[6]=0,H[10]=E,H[14]=O,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,Q,$,Z,K,W,Y=2000,X=!1){let H=this.elements,U=2/(Q-J),N=2/($-Z),F=-(Q+J)/(Q-J),G=-($+Z)/($-Z),E,O;if(X)E=1/(W-K),O=W/(W-K);else if(Y===2000)E=-2/(W-K),O=-(W+K)/(W-K);else if(Y===2001)E=-1/(W-K),O=-K/(W-K);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+Y);return H[0]=U,H[4]=0,H[8]=0,H[12]=F,H[1]=0,H[5]=N,H[9]=0,H[13]=G,H[2]=0,H[6]=0,H[10]=E,H[14]=O,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var E6=new _,Y9=new QJ,NN=new _(0,0,0),GN=new _(1,1,1),Q7=new _,_$=new _,h8=new _,WX=new QJ,YX=new CJ;class N9{constructor(J=0,Q=0,$=0,Z=N9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,K=Z[0],W=Z[4],Y=Z[8],X=Z[1],H=Z[5],U=Z[9],N=Z[2],F=Z[6],G=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(GJ(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,G),this._z=Math.atan2(-W,K);else this._x=Math.atan2(F,H),this._z=0;break;case"YXZ":if(this._x=Math.asin(-GJ(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(Y,G),this._z=Math.atan2(X,H);else this._y=Math.atan2(-N,K),this._z=0;break;case"ZXY":if(this._x=Math.asin(GJ(F,-1,1)),Math.abs(F)<0.9999999)this._y=Math.atan2(-N,G),this._z=Math.atan2(-W,H);else this._y=0,this._z=Math.atan2(X,K);break;case"ZYX":if(this._y=Math.asin(-GJ(N,-1,1)),Math.abs(N)<0.9999999)this._x=Math.atan2(F,G),this._z=Math.atan2(X,K);else this._x=0,this._z=Math.atan2(-W,H);break;case"YZX":if(this._z=Math.asin(GJ(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,H),this._y=Math.atan2(-N,K);else this._x=0,this._y=Math.atan2(Y,G);break;case"XZY":if(this._z=Math.asin(-GJ(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(F,H),this._y=Math.atan2(Y,K);else this._x=Math.atan2(-U,G),this._y=0;break;default:r0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return WX.makeRotationFromQuaternion(J),this.setFromRotationMatrix(WX,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return YX.setFromEuler(this),this.setFromQuaternion(YX,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}N9.DEFAULT_ORDER="XYZ";class kZ{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var FN=0,XX=new _,q6=new CJ,g9=new QJ,T$=new _,EQ=new _,EN=new _,qN=new CJ,HX=new _(1,0,0),UX=new _(0,1,0),NX=new _(0,0,1),GX={type:"added"},ON={type:"removed"},O6={type:"childadded",child:null},LK={type:"childremoved",child:null};class jJ extends q9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:FN++}),this.uuid=i8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jJ.DEFAULT_UP.clone();let J=new _,Q=new N9,$=new CJ,Z=new _(1,1,1);function K(){$.setFromEuler(Q,!1)}function W(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(K),$._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new QJ},normalMatrix:{value:new XJ}}),this.matrix=new QJ,this.matrixWorld=new QJ,this.matrixAutoUpdate=jJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kZ,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return q6.setFromAxisAngle(J,Q),this.quaternion.multiply(q6),this}rotateOnWorldAxis(J,Q){return q6.setFromAxisAngle(J,Q),this.quaternion.premultiply(q6),this}rotateX(J){return this.rotateOnAxis(HX,J)}rotateY(J){return this.rotateOnAxis(UX,J)}rotateZ(J){return this.rotateOnAxis(NX,J)}translateOnAxis(J,Q){return XX.copy(J).applyQuaternion(this.quaternion),this.position.add(XX.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(HX,J)}translateY(J){return this.translateOnAxis(UX,J)}translateZ(J){return this.translateOnAxis(NX,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(g9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)T$.copy(J);else T$.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),EQ.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)g9.lookAt(EQ,T$,this.up);else g9.lookAt(T$,EQ,this.up);if(this.quaternion.setFromRotationMatrix(g9),Z)g9.extractRotation(Z.matrixWorld),q6.setFromRotationMatrix(g9),this.quaternion.premultiply(q6.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return $J("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(GX),O6.child=J,this.dispatchEvent(O6),O6.child=null;else $J("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(ON),LK.child=J,this.dispatchEvent(LK),LK.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),g9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),g9.multiply(J.parent.matrixWorld);return J.applyMatrix4(g9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(GX),O6.child=J,this.dispatchEvent(O6),O6.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let W=this.children[$].getObjectByProperty(J,Q);if(W!==void 0)return W}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let K=0,W=Z.length;K<W;K++)Z[K].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(EQ,J,EN),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(EQ,qN,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:Z}=J,K=this.matrix.elements;K[12]+=Q-K[0]*Q-K[4]*$-K[8]*Z,K[13]+=$-K[1]*Q-K[5]*$-K[9]*Z,K[14]+=Z-K[2]*Q-K[6]*$-K[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let K=this.children;for(let W=0,Y=K.length;W<Y;W++)K[W].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,Z.name=this.name,Z.castShadow=this.castShadow,Z.receiveShadow=this.receiveShadow,Z.visible=this.visible,Z.frustumCulled=this.frustumCulled,Z.renderOrder=this.renderOrder,Z.static=this.static,Z.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((Y)=>({...Y,boundingBox:Y.boundingBox?Y.boundingBox.toJSON():void 0,boundingSphere:Y.boundingSphere?Y.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((Y)=>({...Y})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function K(Y,X){if(Y[X.uuid]===void 0)Y[X.uuid]=X.toJSON(J);return X.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=K(J.geometries,this.geometry);let Y=this.geometry.parameters;if(Y!==void 0&&Y.shapes!==void 0){let X=Y.shapes;if(Array.isArray(X))for(let H=0,U=X.length;H<U;H++){let N=X[H];K(J.shapes,N)}else K(J.shapes,X)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)K(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let Y=[];for(let X=0,H=this.material.length;X<H;X++)Y.push(K(J.materials,this.material[X]));Z.material=Y}else Z.material=K(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let Y=0;Y<this.children.length;Y++)Z.children.push(this.children[Y].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let Y=0;Y<this.animations.length;Y++){let X=this.animations[Y];Z.animations.push(K(J.animations,X))}}if(Q){let Y=W(J.geometries),X=W(J.materials),H=W(J.textures),U=W(J.images),N=W(J.shapes),F=W(J.skeletons),G=W(J.animations),E=W(J.nodes);if(Y.length>0)$.geometries=Y;if(X.length>0)$.materials=X;if(H.length>0)$.textures=H;if(U.length>0)$.images=U;if(N.length>0)$.shapes=N;if(F.length>0)$.skeletons=F;if(G.length>0)$.animations=G;if(E.length>0)$.nodes=E}return $.object=Z,$;function W(Y){let X=[];for(let H in Y){let U=Y[H];delete U.metadata,X.push(U)}return X}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}jJ.DEFAULT_UP=new _(0,1,0);jJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;jJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class wJ extends jJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var RN={type:"move"};class dQ{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new wJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new wJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new wJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,K=null,W=null,Y=this._targetRay,X=this._grip,H=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(H&&J.hand){W=!0;for(let O of J.hand.values()){let B=Q.getJointPose(O,$),R=this._getHandJoint(H,O);if(B!==null)R.matrix.fromArray(B.transform.matrix),R.matrix.decompose(R.position,R.rotation,R.scale),R.matrixWorldNeedsUpdate=!0,R.jointRadius=B.radius;R.visible=B!==null}let U=H.joints["index-finger-tip"],N=H.joints["thumb-tip"],F=U.position.distanceTo(N.position),G=0.02,E=0.005;if(H.inputState.pinching&&F>G+E)H.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!H.inputState.pinching&&F<=G-E)H.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(X!==null&&J.gripSpace){if(K=Q.getPose(J.gripSpace,$),K!==null){if(X.matrix.fromArray(K.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,K.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(K.linearVelocity);else X.hasLinearVelocity=!1;if(K.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(K.angularVelocity);else X.hasAngularVelocity=!1;if(X.eventsEnabled)X.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(Y!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&K!==null)Z=K;if(Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;this.dispatchEvent(RN)}}}if(Y!==null)Y.visible=Z!==null;if(X!==null)X.visible=K!==null;if(H!==null)H.visible=W!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new wJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var uH={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$7={h:0,s:0,l:0},S$={h:0,s:0,l:0};function VK(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class v0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,EJ.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=EJ.workingColorSpace){return this.r=J,this.g=Q,this.b=$,EJ.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=EJ.workingColorSpace){if(J=hW(J,1),Q=GJ(Q,0,1),$=GJ($,0,1),Q===0)this.r=this.g=this.b=$;else{let K=$<=0.5?$*(1+Q):$+Q-$*Q,W=2*$-K;this.r=VK(W,K,J+0.3333333333333333),this.g=VK(W,K,J),this.b=VK(W,K,J-0.3333333333333333)}return EJ.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(K){if(K===void 0)return;if(parseFloat(K)<1)r0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let K,W=Z[1],Y=Z[2];switch(W){case"rgb":case"rgba":if(K=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(K[4]),this.setRGB(Math.min(255,parseInt(K[1],10))/255,Math.min(255,parseInt(K[2],10))/255,Math.min(255,parseInt(K[3],10))/255,Q);if(K=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(K[4]),this.setRGB(Math.min(100,parseInt(K[1],10))/100,Math.min(100,parseInt(K[2],10))/100,Math.min(100,parseInt(K[3],10))/100,Q);break;case"hsl":case"hsla":if(K=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(K[4]),this.setHSL(parseFloat(K[1])/360,parseFloat(K[2])/100,parseFloat(K[3])/100,Q);break;default:r0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let K=Z[1],W=K.length;if(W===3)return this.setRGB(parseInt(K.charAt(0),16)/15,parseInt(K.charAt(1),16)/15,parseInt(K.charAt(2),16)/15,Q);else if(W===6)return this.setHex(parseInt(K,16),Q);else r0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=uH[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else r0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=c9(J.r),this.g=c9(J.g),this.b=c9(J.b),this}copyLinearToSRGB(J){return this.r=S6(J.r),this.g=S6(J.g),this.b=S6(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return EJ.workingToColorSpace(M8.copy(this),J),Math.round(GJ(M8.r*255,0,255))*65536+Math.round(GJ(M8.g*255,0,255))*256+Math.round(GJ(M8.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=EJ.workingColorSpace){EJ.workingToColorSpace(M8.copy(this),Q);let{r:$,g:Z,b:K}=M8,W=Math.max($,Z,K),Y=Math.min($,Z,K),X,H,U=(Y+W)/2;if(Y===W)X=0,H=0;else{let N=W-Y;switch(H=U<=0.5?N/(W+Y):N/(2-W-Y),W){case $:X=(Z-K)/N+(Z<K?6:0);break;case Z:X=(K-$)/N+2;break;case K:X=($-Z)/N+4;break}X/=6}return J.h=X,J.s=H,J.l=U,J}getRGB(J,Q=EJ.workingColorSpace){return EJ.workingToColorSpace(M8.copy(this),Q),J.r=M8.r,J.g=M8.g,J.b=M8.b,J}getStyle(J="srgb"){EJ.workingToColorSpace(M8.copy(this),J);let{r:Q,g:$,b:Z}=M8;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL($7),this.setHSL($7.h+J,$7.s+Q,$7.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL($7),J.getHSL(S$);let $=zQ($7.h,S$.h,Q),Z=zQ($7.s,S$.s,Q),K=zQ($7.l,S$.l,Q);return this.setHSL($,Z,K),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,K=J.elements;return this.r=K[0]*Q+K[3]*$+K[6]*Z,this.g=K[1]*Q+K[4]*$+K[7]*Z,this.b=K[2]*Q+K[5]*$+K[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var M8=new v0;v0.NAMES=uH;class l7{constructor(J,Q=0.00025){this.isFogExp2=!0,this.name="",this.color=new v0(J),this.density=Q}clone(){return new l7(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class u6 extends jJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new N9,this.environmentIntensity=1,this.environmentRotation=new N9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var X9=new _,p9=new _,DK=new _,l9=new _,R6=new _,L6=new _,FX=new _,BK=new _,MK=new _,kK=new _,CK=new mJ,PK=new mJ,IK=new mJ;class g8{constructor(J=new _,Q=new _,$=new _){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),X9.subVectors(J,Q),Z.cross(X9);let K=Z.lengthSq();if(K>0)return Z.multiplyScalar(1/Math.sqrt(K));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,K){X9.subVectors(Z,Q),p9.subVectors($,Q),DK.subVectors(J,Q);let W=X9.dot(X9),Y=X9.dot(p9),X=X9.dot(DK),H=p9.dot(p9),U=p9.dot(DK),N=W*H-Y*Y;if(N===0)return K.set(0,0,0),null;let F=1/N,G=(H*X-Y*U)*F,E=(W*U-Y*X)*F;return K.set(1-G-E,E,G)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,l9)===null)return!1;return l9.x>=0&&l9.y>=0&&l9.x+l9.y<=1}static getInterpolation(J,Q,$,Z,K,W,Y,X){if(this.getBarycoord(J,Q,$,Z,l9)===null){if(X.x=0,X.y=0,"z"in X)X.z=0;if("w"in X)X.w=0;return null}return X.setScalar(0),X.addScaledVector(K,l9.x),X.addScaledVector(W,l9.y),X.addScaledVector(Y,l9.z),X}static getInterpolatedAttribute(J,Q,$,Z,K,W){return CK.setScalar(0),PK.setScalar(0),IK.setScalar(0),CK.fromBufferAttribute(J,Q),PK.fromBufferAttribute(J,$),IK.fromBufferAttribute(J,Z),W.setScalar(0),W.addScaledVector(CK,K.x),W.addScaledVector(PK,K.y),W.addScaledVector(IK,K.z),W}static isFrontFacing(J,Q,$,Z){return X9.subVectors($,Q),p9.subVectors(J,Q),X9.cross(p9).dot(Z)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return X9.subVectors(this.c,this.b),p9.subVectors(this.a,this.b),X9.cross(p9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return g8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return g8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,K){return g8.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,K)}containsPoint(J){return g8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return g8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,K=this.c,W,Y;R6.subVectors(Z,$),L6.subVectors(K,$),BK.subVectors(J,$);let X=R6.dot(BK),H=L6.dot(BK);if(X<=0&&H<=0)return Q.copy($);MK.subVectors(J,Z);let U=R6.dot(MK),N=L6.dot(MK);if(U>=0&&N<=U)return Q.copy(Z);let F=X*N-U*H;if(F<=0&&X>=0&&U<=0)return W=X/(X-U),Q.copy($).addScaledVector(R6,W);kK.subVectors(J,K);let G=R6.dot(kK),E=L6.dot(kK);if(E>=0&&G<=E)return Q.copy(K);let O=G*H-X*E;if(O<=0&&H>=0&&E<=0)return Y=H/(H-E),Q.copy($).addScaledVector(L6,Y);let B=U*E-G*N;if(B<=0&&N-U>=0&&G-E>=0)return FX.subVectors(K,Z),Y=(N-U)/(N-U+(G-E)),Q.copy(Z).addScaledVector(FX,Y);let R=1/(B+O+F);return W=O*R,Y=F*R,Q.copy($).addScaledVector(R6,W).addScaledVector(L6,Y)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class z8{constructor(J=new _(1/0,1/0,1/0),Q=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(H9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(H9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=H9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let K=$.getAttribute("position");if(Q===!0&&K!==void 0&&J.isInstancedMesh!==!0)for(let W=0,Y=K.count;W<Y;W++){if(J.isMesh===!0)J.getVertexPosition(W,H9);else H9.fromBufferAttribute(K,W);H9.applyMatrix4(J.matrixWorld),this.expandByPoint(H9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();w$.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();w$.copy($.boundingBox)}w$.applyMatrix4(J.matrixWorld),this.union(w$)}}let Z=J.children;for(let K=0,W=Z.length;K<W;K++)this.expandByObject(Z[K],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,H9),H9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(qQ),j$.subVectors(this.max,qQ),V6.subVectors(J.a,qQ),D6.subVectors(J.b,qQ),B6.subVectors(J.c,qQ),Z7.subVectors(D6,V6),K7.subVectors(B6,D6),z7.subVectors(V6,B6);let Q=[0,-Z7.z,Z7.y,0,-K7.z,K7.y,0,-z7.z,z7.y,Z7.z,0,-Z7.x,K7.z,0,-K7.x,z7.z,0,-z7.x,-Z7.y,Z7.x,0,-K7.y,K7.x,0,-z7.y,z7.x,0];if(!zK(Q,V6,D6,B6,j$))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!zK(Q,V6,D6,B6,j$))return!1;return y$.crossVectors(Z7,K7),Q=[y$.x,y$.y,y$.z],zK(Q,V6,D6,B6,j$)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,H9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(H9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return m9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),m9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),m9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),m9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),m9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),m9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),m9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),m9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(m9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var m9=[new _,new _,new _,new _,new _,new _,new _,new _],H9=new _,w$=new z8,V6=new _,D6=new _,B6=new _,Z7=new _,K7=new _,z7=new _,qQ=new _,j$=new _,y$=new _,A7=new _;function zK(J,Q,$,Z,K){for(let W=0,Y=J.length-3;W<=Y;W+=3){A7.fromArray(J,W);let X=K.x*Math.abs(A7.x)+K.y*Math.abs(A7.y)+K.z*Math.abs(A7.z),H=Q.dot(A7),U=$.dot(A7),N=Z.dot(A7);if(Math.max(-Math.max(H,U,N),Math.min(H,U,N))>X)return!1}return!0}var W8=new _,v$=new F0,LN=0;class aJ extends q9{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LN++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,K=this.itemSize;Z<K;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)v$.fromBufferAttribute(this,Q),v$.applyMatrix3(J),this.setXY(Q,v$.x,v$.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)W8.fromBufferAttribute(this,Q),W8.applyMatrix3(J),this.setXYZ(Q,W8.x,W8.y,W8.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)W8.fromBufferAttribute(this,Q),W8.applyMatrix4(J),this.setXYZ(Q,W8.x,W8.y,W8.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)W8.fromBufferAttribute(this,Q),W8.applyNormalMatrix(J),this.setXYZ(Q,W8.x,W8.y,W8.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)W8.fromBufferAttribute(this,Q),W8.transformDirection(J),this.setXYZ(Q,W8.x,W8.y,W8.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=U9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=lJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=U9(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=lJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=U9(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=lJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=U9(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=lJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=U9(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=lJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=lJ(Q,this.array),$=lJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=lJ(Q,this.array),$=lJ($,this.array),Z=lJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,K){if(J*=this.itemSize,this.normalized)Q=lJ(Q,this.array),$=lJ($,this.array),Z=lJ(Z,this.array),K=lJ(K,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=K,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}}class CZ extends aJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class PZ extends aJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class YJ extends aJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var VN=new z8,OQ=new _,AK=new _;class l8{constructor(J=new _,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else VN.setFromPoints(J).getCenter($);let Z=0;for(let K=0,W=J.length;K<W;K++)Z=Math.max(Z,$.distanceToSquared(J[K]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;OQ.subVectors(J,this.center);let Q=OQ.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(OQ,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else AK.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(OQ.copy(J.center).add(AK)),this.expandByPoint(OQ.copy(J.center).sub(AK));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var DN=0,n8=new QJ,_K=new jJ,M6=new _,x8=new z8,RQ=new z8,E8=new _;class fJ extends q9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DN++}),this.uuid=i8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((u5(J))?PZ:CZ)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let K=new XJ().getNormalMatrix(J);$.applyNormalMatrix(K),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return n8.makeRotationFromQuaternion(J),this.applyMatrix4(n8),this}rotateX(J){return n8.makeRotationX(J),this.applyMatrix4(n8),this}rotateY(J){return n8.makeRotationY(J),this.applyMatrix4(n8),this}rotateZ(J){return n8.makeRotationZ(J),this.applyMatrix4(n8),this}translate(J,Q,$){return n8.makeTranslation(J,Q,$),this.applyMatrix4(n8),this}scale(J,Q,$){return n8.makeScale(J,Q,$),this.applyMatrix4(n8),this}lookAt(J){return _K.lookAt(J),_K.updateMatrix(),this.applyMatrix4(_K.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(M6).negate(),this.translate(M6.x,M6.y,M6.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];$.push(W.x,W.y,W.z||0)}this.setAttribute("position",new YJ($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let K=J[Z];Q.setXYZ(Z,K.x,K.y,K.z||0)}if(J.length>Q.count)r0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new z8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){$J("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let K=Q[$];if(x8.setFromBufferAttribute(K),this.morphTargetsRelative)E8.addVectors(this.boundingBox.min,x8.min),this.boundingBox.expandByPoint(E8),E8.addVectors(this.boundingBox.max,x8.max),this.boundingBox.expandByPoint(E8);else this.boundingBox.expandByPoint(x8.min),this.boundingBox.expandByPoint(x8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))$J('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new l8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){$J("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(J){let $=this.boundingSphere.center;if(x8.setFromBufferAttribute(J),Q)for(let K=0,W=Q.length;K<W;K++){let Y=Q[K];if(RQ.setFromBufferAttribute(Y),this.morphTargetsRelative)E8.addVectors(x8.min,RQ.min),x8.expandByPoint(E8),E8.addVectors(x8.max,RQ.max),x8.expandByPoint(E8);else x8.expandByPoint(RQ.min),x8.expandByPoint(RQ.max)}x8.getCenter($);let Z=0;for(let K=0,W=J.count;K<W;K++)E8.fromBufferAttribute(J,K),Z=Math.max(Z,$.distanceToSquared(E8));if(Q)for(let K=0,W=Q.length;K<W;K++){let Y=Q[K],X=this.morphTargetsRelative;for(let H=0,U=Y.count;H<U;H++){if(E8.fromBufferAttribute(Y,H),X)M6.fromBufferAttribute(J,H),E8.add(M6);Z=Math.max(Z,$.distanceToSquared(E8))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))$J('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){$J("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:K}=Q,W=this.getAttribute("tangent");if(W===void 0||W.count!==$.count)W=new aJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",W);let Y=[],X=[];for(let A=0;A<$.count;A++)Y[A]=new _,X[A]=new _;let H=new _,U=new _,N=new _,F=new F0,G=new F0,E=new F0,O=new _,B=new _;function R(A,D,I){H.fromBufferAttribute($,A),U.fromBufferAttribute($,D),N.fromBufferAttribute($,I),F.fromBufferAttribute(K,A),G.fromBufferAttribute(K,D),E.fromBufferAttribute(K,I),U.sub(H),N.sub(H),G.sub(F),E.sub(F);let d=1/(G.x*E.y-E.x*G.y);if(!isFinite(d))return;O.copy(U).multiplyScalar(E.y).addScaledVector(N,-G.y).multiplyScalar(d),B.copy(N).multiplyScalar(G.x).addScaledVector(U,-E.x).multiplyScalar(d),Y[A].add(O),Y[D].add(O),Y[I].add(O),X[A].add(B),X[D].add(B),X[I].add(B)}let q=this.groups;if(q.length===0)q=[{start:0,count:J.count}];for(let A=0,D=q.length;A<D;++A){let I=q[A],d=I.start,f=I.count;for(let u=d,$0=d+f;u<$0;u+=3)R(J.getX(u+0),J.getX(u+1),J.getX(u+2))}let M=new _,P=new _,V=new _,L=new _;function C(A){V.fromBufferAttribute(Z,A),L.copy(V);let D=Y[A];M.copy(D),M.sub(V.multiplyScalar(V.dot(D))).normalize(),P.crossVectors(L,D);let d=P.dot(X[A])<0?-1:1;W.setXYZW(A,M.x,M.y,M.z,d)}for(let A=0,D=q.length;A<D;++A){let I=q[A],d=I.start,f=I.count;for(let u=d,$0=d+f;u<$0;u+=3)C(J.getX(u+0)),C(J.getX(u+1)),C(J.getX(u+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new aJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let F=0,G=$.count;F<G;F++)$.setXYZ(F,0,0,0);let Z=new _,K=new _,W=new _,Y=new _,X=new _,H=new _,U=new _,N=new _;if(J)for(let F=0,G=J.count;F<G;F+=3){let E=J.getX(F+0),O=J.getX(F+1),B=J.getX(F+2);Z.fromBufferAttribute(Q,E),K.fromBufferAttribute(Q,O),W.fromBufferAttribute(Q,B),U.subVectors(W,K),N.subVectors(Z,K),U.cross(N),Y.fromBufferAttribute($,E),X.fromBufferAttribute($,O),H.fromBufferAttribute($,B),Y.add(U),X.add(U),H.add(U),$.setXYZ(E,Y.x,Y.y,Y.z),$.setXYZ(O,X.x,X.y,X.z),$.setXYZ(B,H.x,H.y,H.z)}else for(let F=0,G=Q.count;F<G;F+=3)Z.fromBufferAttribute(Q,F+0),K.fromBufferAttribute(Q,F+1),W.fromBufferAttribute(Q,F+2),U.subVectors(W,K),N.subVectors(Z,K),U.cross(N),$.setXYZ(F+0,U.x,U.y,U.z),$.setXYZ(F+1,U.x,U.y,U.z),$.setXYZ(F+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)E8.fromBufferAttribute(J,Q),E8.normalize(),J.setXYZ(Q,E8.x,E8.y,E8.z)}toNonIndexed(){function J(Y,X){let{array:H,itemSize:U,normalized:N}=Y,F=new H.constructor(X.length*U),G=0,E=0;for(let O=0,B=X.length;O<B;O++){if(Y.isInterleavedBufferAttribute)G=X[O]*Y.data.stride+Y.offset;else G=X[O]*U;for(let R=0;R<U;R++)F[E++]=H[G++]}return new aJ(F,U,N)}if(this.index===null)return r0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new fJ,$=this.index.array,Z=this.attributes;for(let Y in Z){let X=Z[Y],H=J(X,$);Q.setAttribute(Y,H)}let K=this.morphAttributes;for(let Y in K){let X=[],H=K[Y];for(let U=0,N=H.length;U<N;U++){let F=H[U],G=J(F,$);X.push(G)}Q.morphAttributes[Y]=X}Q.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let Y=0,X=W.length;Y<X;Y++){let H=W[Y];Q.addGroup(H.start,H.count,H.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let X=this.parameters;for(let H in X)if(X[H]!==void 0)J[H]=X[H];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let X in $){let H=$[X];J.data.attributes[X]=H.toJSON(J.data)}let Z={},K=!1;for(let X in this.morphAttributes){let H=this.morphAttributes[X],U=[];for(let N=0,F=H.length;N<F;N++){let G=H[N];U.push(G.toJSON(J.data))}if(U.length>0)Z[X]=U,K=!0}if(K)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let Y=this.boundingSphere;if(Y!==null)J.data.boundingSphere=Y.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let H in Z){let U=Z[H];this.setAttribute(H,U.clone(Q))}let K=J.morphAttributes;for(let H in K){let U=[],N=K[H];for(let F=0,G=N.length;F<G;F++)U.push(N[F].clone(Q));this.morphAttributes[H]=U}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let H=0,U=W.length;H<U;H++){let N=W[H];this.addGroup(N.start,N.count,N.materialIndex)}let Y=J.boundingBox;if(Y!==null)this.boundingBox=Y.clone();let X=J.boundingSphere;if(X!==null)this.boundingSphere=X.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class d6{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=i8()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,$){J*=this.stride,$*=Q.stride;for(let Z=0,K=this.stride;Z<K;Z++)this.array[J+Z]=Q.array[$+Z];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=i8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),$=new this.constructor(Q,this.stride);return $.setUsage(this.usage),$}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=i8();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let Q={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return Q.usage=this.usage,Q}}var I8=new _;class X7{constructor(J,Q,$,Z=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=$,this.normalized=Z}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,$=this.data.count;Q<$;Q++)I8.fromBufferAttribute(this,Q),I8.applyMatrix4(J),this.setXYZ(Q,I8.x,I8.y,I8.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)I8.fromBufferAttribute(this,Q),I8.applyNormalMatrix(J),this.setXYZ(Q,I8.x,I8.y,I8.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)I8.fromBufferAttribute(this,Q),I8.transformDirection(J),this.setXYZ(Q,I8.x,I8.y,I8.z);return this}getComponent(J,Q){let $=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)$=U9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=lJ($,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=$,this}setX(J,Q){if(this.normalized)Q=lJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=lJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=lJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=lJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=U9(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=U9(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=U9(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=U9(Q,this.array);return Q}setXY(J,Q,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=lJ(Q,this.array),$=lJ($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=lJ(Q,this.array),$=lJ($,this.array),Z=lJ(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this}setXYZW(J,Q,$,Z,K){if(J=J*this.data.stride+this.offset,this.normalized)Q=lJ(Q,this.array),$=lJ($,this.array),Z=lJ(Z,this.array),K=lJ(K,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this.data.array[J+3]=K,this}clone(J){if(J===void 0){TQ("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let K=0;K<this.itemSize;K++)Q.push(this.data.array[Z+K])}return new aJ(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new X7(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){TQ("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let K=0;K<this.itemSize;K++)Q.push(this.data.array[Z+K])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var TK=new _,BN=new _,MN=new XJ;class s8{constructor(J=new _(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=TK.subVectors($,Q).cross(BN.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let Z=J.delta(TK),K=this.normal.dot(Z);if(K===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/K;if($===!0&&(W<0||W>1))return null;return Q.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||MN.getNormalMatrix(J),Z=this.coplanarPoint(TK).applyMatrix4(J),K=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(K),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var kN=0;class S8 extends q9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:kN++}),this.uuid=i8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new v0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){r0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){r0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector2&&($&&$.isVector2)||Z&&Z.isEuler&&($&&$.isEuler)||Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,$.blending=this.blending,$.side=this.side,$.shadowSide=this.shadowSide,$.vertexColors=this.vertexColors,$.opacity=this.opacity,$.transparent=this.transparent,$.blendSrc=this.blendSrc,$.blendDst=this.blendDst,$.blendEquation=this.blendEquation,$.blendSrcAlpha=this.blendSrcAlpha,$.blendDstAlpha=this.blendDstAlpha,$.blendEquationAlpha=this.blendEquationAlpha,$.blendColor=this.blendColor.getHex(),$.blendAlpha=this.blendAlpha,$.depthFunc=this.depthFunc,$.depthTest=this.depthTest,$.depthWrite=this.depthWrite,$.colorWrite=this.colorWrite,$.clipIntersection=this.clipIntersection,$.clipShadows=this.clipShadows,$.stencilWriteMask=this.stencilWriteMask,$.stencilFunc=this.stencilFunc,$.stencilRef=this.stencilRef,$.stencilFuncMask=this.stencilFuncMask,$.stencilFail=this.stencilFail,$.stencilZFail=this.stencilZFail,$.stencilZPass=this.stencilZPass,$.stencilWrite=this.stencilWrite,$.polygonOffset=this.polygonOffset,$.polygonOffsetFactor=this.polygonOffsetFactor,$.polygonOffsetUnits=this.polygonOffsetUnits,$.dithering=this.dithering,$.alphaTest=this.alphaTest,$.alphaHash=this.alphaHash,$.alphaToCoverage=this.alphaToCoverage,$.premultipliedAlpha=this.premultipliedAlpha,$.forceSinglePass=this.forceSinglePass,$.allowOverride=this.allowOverride,$.visible=this.visible,$.toneMapped=this.toneMapped,$.name=this.name,this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)$.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)$.clippingPlanes=this.clippingPlanes.map((K)=>K.toJSON());if(this.rotation!==void 0)$.rotation=this.rotation;if(this.depthPacking!==void 0)$.depthPacking=this.depthPacking;if(this.linewidth!==void 0)$.linewidth=this.linewidth;if(this.linecap!==void 0)$.linecap=this.linecap;if(this.linejoin!==void 0)$.linejoin=this.linejoin;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.wireframe!==void 0)$.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)$.flatShading=this.flatShading;if(this.fog!==void 0)$.fog=this.fog;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(K){let W=[];for(let Y in K){let X=K[Y];delete X.metadata,W.push(X)}return W}if(Q){let K=Z(J.textures),W=Z(J.images);if(K.length>0)$.textures=K;if(W.length>0)$.images=W}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new v0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map(($)=>new s8().fromJSON($));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new F0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new F0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let K=0;K!==Z;++K)$[K]=Q[K].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class m7 extends S8{constructor(J){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new v0(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.rotation=J.rotation,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var k6,LQ=new _,C6=new _,P6=new _,I6=new F0,VQ=new F0,dH=new QJ,f$=new _,DQ=new _,b$=new _,EX=new F0,SK=new F0,qX=new F0;class c6 extends jJ{constructor(J=new m7){super();if(this.isSprite=!0,this.type="Sprite",k6===void 0){k6=new fJ;let Q=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),$=new d6(Q,5);k6.setIndex([0,1,2,0,2,3]),k6.setAttribute("position",new X7($,3,0,!1)),k6.setAttribute("uv",new X7($,2,3,!1))}this.geometry=k6,this.material=J,this.center=new F0(0.5,0.5),this.count=1}intersectsFrustum(J){return J.intersectsSprite(this)}raycast(J,Q){if(J.camera===null)$J('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(C6.setFromMatrixScale(this.matrixWorld),dH.copy(J.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(J.camera.matrixWorldInverse,this.matrixWorld),P6.setFromMatrixPosition(this.modelViewMatrix),J.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)C6.multiplyScalar(-P6.z);let $=this.material.rotation,Z,K;if($!==0)K=Math.cos($),Z=Math.sin($);let W=this.center;h$(f$.set(-0.5,-0.5,0),P6,W,C6,Z,K),h$(DQ.set(0.5,-0.5,0),P6,W,C6,Z,K),h$(b$.set(0.5,0.5,0),P6,W,C6,Z,K),EX.set(0,0),SK.set(1,0),qX.set(1,1);let Y=J.ray.intersectTriangle(f$,DQ,b$,!1,LQ);if(Y===null){if(h$(DQ.set(-0.5,0.5,0),P6,W,C6,Z,K),SK.set(0,1),Y=J.ray.intersectTriangle(f$,b$,DQ,!1,LQ),Y===null)return}let X=J.ray.origin.distanceTo(LQ);if(X<J.near||X>J.far)return;Q.push({distance:X,point:LQ.clone(),uv:g8.getInterpolation(LQ,f$,DQ,b$,EX,SK,qX,new F0),face:null,object:this})}copy(J,Q){if(super.copy(J,Q),J.center!==void 0)this.center.copy(J.center);return this.material=J.material,this}}function h$(J,Q,$,Z,K,W){if(I6.subVectors(J,$).addScalar(0.5).multiply(Z),K!==void 0)VQ.x=W*I6.x-K*I6.y,VQ.y=K*I6.x+W*I6.y;else VQ.copy(I6);J.copy(Q),J.x+=VQ.x,J.y+=VQ.y,J.applyMatrix4(dH)}var u9=new _,wK=new _,x$=new _,g$=new _;class q7{constructor(J=new _,Q=new _(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,u9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=u9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return u9.copy(this.origin).addScaledVector(this.direction,Q),u9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){wK.copy(J).add(Q).multiplyScalar(0.5),x$.copy(Q).sub(J).normalize(),g$.copy(this.origin).sub(wK);let K=J.distanceTo(Q)*0.5,W=-this.direction.dot(x$),Y=g$.dot(this.direction),X=-g$.dot(x$),H=g$.lengthSq(),U=Math.abs(1-W*W),N,F,G,E;if(U>0)if(N=W*X-Y,F=W*Y-X,E=K*U,N>=0)if(F>=-E)if(F<=E){let O=1/U;N*=O,F*=O,G=N*(N+W*F+2*Y)+F*(W*N+F+2*X)+H}else F=K,N=Math.max(0,-(W*F+Y)),G=-N*N+F*(F+2*X)+H;else F=-K,N=Math.max(0,-(W*F+Y)),G=-N*N+F*(F+2*X)+H;else if(F<=-E)N=Math.max(0,-(-W*K+Y)),F=N>0?-K:Math.min(Math.max(-K,-X),K),G=-N*N+F*(F+2*X)+H;else if(F<=E)N=0,F=Math.min(Math.max(-K,-X),K),G=F*(F+2*X)+H;else N=Math.max(0,-(W*K+Y)),F=N>0?K:Math.min(Math.max(-K,-X),K),G=-N*N+F*(F+2*X)+H;else F=W>0?-K:K,N=Math.max(0,-(W*F+Y)),G=-N*N+F*(F+2*X)+H;if($)$.copy(this.origin).addScaledVector(this.direction,N);if(Z)Z.copy(wK).addScaledVector(x$,F);return G}intersectSphere(J,Q){if(J.radius<0)return null;u9.subVectors(J.center,this.origin);let $=u9.dot(this.direction),Z=u9.dot(u9)-$*$,K=J.radius*J.radius;if(Z>K)return null;let W=Math.sqrt(K-Z),Y=$-W,X=$+W;if(X<0)return null;if(Y<0)return this.at(X,Q);return this.at(Y,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,K,W,Y,X,H=1/this.direction.x,U=1/this.direction.y,N=1/this.direction.z,F=this.origin;if(H>=0)$=(J.min.x-F.x)*H,Z=(J.max.x-F.x)*H;else $=(J.max.x-F.x)*H,Z=(J.min.x-F.x)*H;if(U>=0)K=(J.min.y-F.y)*U,W=(J.max.y-F.y)*U;else K=(J.max.y-F.y)*U,W=(J.min.y-F.y)*U;if($>W||K>Z)return null;if(K>$||isNaN($))$=K;if(W<Z||isNaN(Z))Z=W;if(N>=0)Y=(J.min.z-F.z)*N,X=(J.max.z-F.z)*N;else Y=(J.max.z-F.z)*N,X=(J.min.z-F.z)*N;if($>X||Y>Z)return null;if(Y>$||$!==$)$=Y;if(X<Z||Z!==Z)Z=X;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,u9)!==null}intersectTriangle(J,Q,$,Z,K){let W=this.origin,Y=this.direction,X=Y.x,H=Y.y,U=Y.z,N=J.x-W.x,F=J.y-W.y,G=J.z-W.z,E=Q.x-W.x,O=Q.y-W.y,B=Q.z-W.z,R=$.x-W.x,q=$.y-W.y,M=$.z-W.z,P=Math.abs(X),V=Math.abs(H),L=Math.abs(U),C,A,D,I,d,f,u,$0,y,j,g,v;if(P>=V&&P>=L)if(D=X,f=N,y=E,v=R,X>=0)C=H,A=U,I=F,d=G,u=O,$0=B,j=q,g=M;else C=U,A=H,I=G,d=F,u=B,$0=O,j=M,g=q;else if(V>=L)if(D=H,f=F,y=O,v=q,H>=0)C=U,A=X,I=G,d=N,u=B,$0=E,j=M,g=R;else C=X,A=U,I=N,d=G,u=E,$0=B,j=R,g=M;else if(D=U,f=G,y=B,v=M,U>=0)C=X,A=H,I=N,d=F,u=E,$0=O,j=R,g=q;else C=H,A=X,I=F,d=N,u=O,$0=E,j=q,g=R;if(D===0)return null;let i=C/D,x=A/D,a=1/D,Q0=I-i*f,B0=d-x*f,D0=u-i*y,g0=$0-x*y,c0=j-i*v,W0=g-x*v,w=c0*g0-W0*D0,l=Q0*W0-B0*c0,n=D0*B0-g0*Q0;if(Z){if(w<0||l<0||n<0)return null}else if((w<0||l<0||n<0)&&(w>0||l>0||n>0))return null;let K0=w+l+n;if(K0===0)return null;let t=a*(w*f+l*y+n*v);if(K0>0?t<0:t>0)return null;return this.at(t/K0,K)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class hJ extends S8{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new v0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new N9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var OX=new QJ,_7=new q7,p$=new l8,RX=new _,l$=new _,m$=new _,u$=new _,jK=new _,d$=new _,LX=new _,c$=new _;class P0 extends jJ{constructor(J=new fJ,Q=new hJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let Y=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=K}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,K=$.morphAttributes.position,W=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let Y=this.morphTargetInfluences;if(K&&Y){d$.set(0,0,0);for(let X=0,H=K.length;X<H;X++){let U=Y[X],N=K[X];if(U===0)continue;if(jK.fromBufferAttribute(N,J),W)d$.addScaledVector(jK,U);else d$.addScaledVector(jK.sub(Q),U)}Q.add(d$)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.material,K=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(p$.copy($.boundingSphere),p$.applyMatrix4(K),_7.copy(J.ray).recast(J.near),p$.containsPoint(_7.origin)===!1){if(_7.intersectSphere(p$,RX)===null)return;if(_7.origin.distanceToSquared(RX)>(J.far-J.near)**2)return}if(OX.copy(K).invert(),_7.copy(J.ray).applyMatrix4(OX),$.boundingBox!==null){if(_7.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,_7)}_computeIntersections(J,Q,$){let Z,K=this.geometry,W=this.material,Y=K.index,X=K.attributes.position,H=K.attributes.uv,U=K.attributes.uv1,N=K.attributes.normal,F=K.groups,G=K.drawRange;if(Y!==null)if(Array.isArray(W))for(let E=0,O=F.length;E<O;E++){let B=F[E],R=W[B.materialIndex],q=Math.max(B.start,G.start),M=Math.min(Y.count,Math.min(B.start+B.count,G.start+G.count));for(let P=q,V=M;P<V;P+=3){let L=Y.getX(P),C=Y.getX(P+1),A=Y.getX(P+2);if(Z=n$(this,R,J,$,H,U,N,L,C,A),Z)Z.faceIndex=Math.floor(P/3),Z.face.materialIndex=B.materialIndex,Q.push(Z)}}else{let E=Math.max(0,G.start),O=Math.min(Y.count,G.start+G.count);for(let B=E,R=O;B<R;B+=3){let q=Y.getX(B),M=Y.getX(B+1),P=Y.getX(B+2);if(Z=n$(this,W,J,$,H,U,N,q,M,P),Z)Z.faceIndex=Math.floor(B/3),Q.push(Z)}}else if(X!==void 0)if(Array.isArray(W))for(let E=0,O=F.length;E<O;E++){let B=F[E],R=W[B.materialIndex],q=Math.max(B.start,G.start),M=Math.min(X.count,Math.min(B.start+B.count,G.start+G.count));for(let P=q,V=M;P<V;P+=3){let L=P,C=P+1,A=P+2;if(Z=n$(this,R,J,$,H,U,N,L,C,A),Z)Z.faceIndex=Math.floor(P/3),Z.face.materialIndex=B.materialIndex,Q.push(Z)}}else{let E=Math.max(0,G.start),O=Math.min(X.count,G.start+G.count);for(let B=E,R=O;B<R;B+=3){let q=B,M=B+1,P=B+2;if(Z=n$(this,W,J,$,H,U,N,q,M,P),Z)Z.faceIndex=Math.floor(B/3),Q.push(Z)}}}}function CN(J,Q,$,Z,K,W,Y,X){let H;if(Q.side===1)H=Z.intersectTriangle(Y,W,K,!0,X);else H=Z.intersectTriangle(K,W,Y,Q.side===0,X);if(H===null)return null;c$.copy(X),c$.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(c$);if(U<$.near||U>$.far)return null;return{distance:U,point:c$.clone(),object:J}}function n$(J,Q,$,Z,K,W,Y,X,H,U){J.getVertexPosition(X,l$),J.getVertexPosition(H,m$),J.getVertexPosition(U,u$);let N=CN(J,Q,$,Z,l$,m$,u$,LX);if(N){let F=new _;if(g8.getBarycoord(LX,l$,m$,u$,F),K)N.uv=g8.getInterpolatedAttribute(K,X,H,U,F,new F0);if(W)N.uv1=g8.getInterpolatedAttribute(W,X,H,U,F,new F0);if(Y){if(N.normal=g8.getInterpolatedAttribute(Y,X,H,U,F,new _),N.normal.dot(Z.direction)>0)N.normal.multiplyScalar(-1)}let G={a:X,b:H,c:U,normal:new _,materialIndex:0};g8.getNormal(l$,m$,u$,G.normal),N.face=G,N.barycoord=F}return N}var BQ=new mJ,VX=new mJ,DX=new mJ,PN=new mJ,BX=new QJ,s$=new _,yK=new l8,MX=new QJ,vK=new q7;class IZ extends P0{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new QJ,this.bindMatrixInverse=new QJ,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new z8;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,s$),this.boundingBox.expandByPoint(s$)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new l8;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,s$),this.boundingSphere.expandByPoint(s$)}copy(J,Q){if(super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,Q){let $=this.material,Z=this.matrixWorld;if($===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(yK.copy(this.boundingSphere),yK.applyMatrix4(Z),J.ray.intersectsSphere(yK)===!1)return;if(MX.copy(Z).invert(),vK.copy(J.ray).applyMatrix4(MX),this.boundingBox!==null){if(vK.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,vK)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new mJ,Q=this.geometry.attributes.skinWeight;for(let $=0,Z=Q.count;$<Z;$++){J.fromBufferAttribute(Q,$);let K=1/J.manhattanLength();if(K!==1/0)J.multiplyScalar(K);else J.set(1,0,0,0);Q.setXYZW($,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else r0("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let $=this.skeleton,Z=this.geometry;if(VX.fromBufferAttribute(Z.attributes.skinIndex,J),DX.fromBufferAttribute(Z.attributes.skinWeight,J),Q.isVector4)BQ.copy(Q),Q.set(0,0,0,0);else BQ.set(...Q,1),Q.set(0,0,0);BQ.applyMatrix4(this.bindMatrix);for(let K=0;K<4;K++){let W=DX.getComponent(K);if(W!==0){let Y=VX.getComponent(K);BX.multiplyMatrices($.bones[Y].matrixWorld,$.boneInverses[Y]),Q.addScaledVector(PN.copy(BQ).applyMatrix4(BX),W)}}if(Q.isVector4)Q.w=BQ.w;return Q.applyMatrix4(this.bindMatrixInverse)}}class cQ extends jJ{constructor(){super();this.isBone=!0,this.type="Bone"}}class nQ extends eJ{constructor(J=null,Q=1,$=1,Z,K,W,Y,X,H=1003,U=1003,N,F){super(null,W,Y,X,H,U,Z,K,N,F);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var kX=new QJ,IN=new QJ;class sQ{constructor(J=[],Q=[]){this.uuid=i8(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){r0("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let $=0,Z=this.bones.length;$<Z;$++)this.boneInverses.push(new QJ)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let $=new QJ;if(this.bones[J])$.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push($)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($)$.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($){if($.parent&&$.parent.isBone)$.matrix.copy($.parent.matrixWorld).invert(),$.matrix.multiply($.matrixWorld);else $.matrix.copy($.matrixWorld);$.matrix.decompose($.position,$.quaternion,$.scale)}}}update(){let J=this.bones,Q=this.boneInverses,$=this.boneMatrices,Z=this.boneTexture;for(let K=0,W=J.length;K<W;K++){let Y=J[K]?J[K].matrixWorld:IN;kX.multiplyMatrices(Y,Q[K]),kX.toArray($,K*16)}if(Z!==null)Z.needsUpdate=!0}clone(){return new sQ(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let $=new nQ(Q,J,J,1023,1015);return $.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=$,this}getBoneByName(J){for(let Q=0,$=this.bones.length;Q<$;Q++){let Z=this.bones[Q];if(Z.name===J)return Z}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let $=0,Z=J.bones.length;$<Z;$++){let K=J.bones[$],W=Q[K];if(W===void 0)r0("Skeleton: No bone found with UUID:",K),W=new cQ;this.bones.push(W),this.boneInverses.push(new QJ().fromArray(J.boneInverses[$]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,$=this.boneInverses;for(let Z=0,K=Q.length;Z<K;Z++){let W=Q[Z];J.bones.push(W.uuid);let Y=$[Z];J.boneInverses.push(Y.toArray())}return J}}class H7 extends aJ{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var z6=new QJ,CX=new QJ,i$=[],PX=new z8,zN=new QJ,MQ=new P0,kQ=new l8;class w9 extends P0{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new H7(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<$;Z++)this.setMatrixAt(Z,zN)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new z8;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,z6),PX.copy(J.boundingBox).applyMatrix4(z6),this.boundingBox.union(PX)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new l8;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,z6),kQ.copy(J.boundingSphere).applyMatrix4(z6),this.boundingSphere.union(kQ)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=this.morphTexture.source.data.data,K=$.length+1,W=J*K+1;for(let Y=0;Y<$.length;Y++)$[Y]=Z[W+Y]}raycast(J,Q){let $=this.matrixWorld,Z=this.count;if(MQ.geometry=this.geometry,MQ.material=this.material,MQ.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(kQ.copy(this.boundingSphere),kQ.applyMatrix4($),J.ray.intersectsSphere(kQ)===!1)return;for(let K=0;K<Z;K++){this.getMatrixAt(K,z6),CX.multiplyMatrices($,z6),MQ.matrixWorld=CX,MQ.raycast(J,i$);for(let W=0,Y=i$.length;W<Y;W++){let X=i$[W];X.instanceId=K,X.object=this,Q.push(X)}i$.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new H7(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=$.length+1;if(this.morphTexture===null)this.morphTexture=new nQ(new Float32Array(Z*this.count),Z,this.count,1028,1015);let K=this.morphTexture.source.data.data,W=0;for(let H=0;H<$.length;H++)W+=$[H];let Y=this.geometry.morphTargetsRelative?1:1-W,X=Z*J;return K[X]=Y,K.set($,X+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var T7=new l8,AN=new F0(0.5,0.5),o$=new _;class iQ{constructor(J=new s8,Q=new s8,$=new s8,Z=new s8,K=new s8,W=new s8){this.planes=[J,Q,$,Z,K,W]}set(J,Q,$,Z,K,W){let Y=this.planes;return Y[0].copy(J),Y[1].copy(Q),Y[2].copy($),Y[3].copy(Z),Y[4].copy(K),Y[5].copy(W),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,K=J.elements,W=K[0],Y=K[1],X=K[2],H=K[3],U=K[4],N=K[5],F=K[6],G=K[7],E=K[8],O=K[9],B=K[10],R=K[11],q=K[12],M=K[13],P=K[14],V=K[15];if(Z[0].setComponents(H-W,G-U,R-E,V-q).normalize(),Z[1].setComponents(H+W,G+U,R+E,V+q).normalize(),Z[2].setComponents(H+Y,G+N,R+O,V+M).normalize(),Z[3].setComponents(H-Y,G-N,R-O,V-M).normalize(),$)Z[4].setComponents(X,F,B,P).normalize(),Z[5].setComponents(H-X,G-F,R-B,V-P).normalize();else if(Z[4].setComponents(H-X,G-F,R-B,V-P).normalize(),Q===2000)Z[5].setComponents(H+X,G+F,R+B,V+P).normalize();else if(Q===2001)Z[5].setComponents(X,F,B,P).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();T7.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();T7.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(T7)}intersectsSprite(J){T7.center.set(0,0,0);let Q=AN.distanceTo(J.center);return T7.radius=0.7071067811865476+Q,T7.applyMatrix4(J.matrixWorld),this.intersectsSphere(T7)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let K=0;K<6;K++)if(Q[K].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(o$.x=Z.normal.x>0?J.max.x:J.min.x,o$.y=Z.normal.y>0?J.max.y:J.min.y,o$.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(o$)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class oQ extends S8{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new v0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var WZ=new _,YZ=new _,IX=new QJ,CQ=new q7,a$=new l8,fK=new _,zX=new _;class n6 extends jJ{constructor(J=new fJ,Q=new oQ){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let Z=1,K=Q.count;Z<K;Z++)WZ.fromBufferAttribute(Q,Z-1),YZ.fromBufferAttribute(Q,Z),$[Z]=$[Z-1],$[Z]+=WZ.distanceTo(YZ);J.setAttribute("lineDistance",new YJ($,1))}else r0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,K=J.params.Line.threshold,W=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(a$.copy($.boundingSphere),a$.applyMatrix4(Z),a$.radius+=K,J.ray.intersectsSphere(a$)===!1)return;IX.copy(Z).invert(),CQ.copy(J.ray).applyMatrix4(IX);let Y=K/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,H=this.isLineSegments?2:1,U=$.index,F=$.attributes.position;if(U!==null){let G=Math.max(0,W.start),E=Math.min(U.count,W.start+W.count);for(let O=G,B=E-1;O<B;O+=H){let R=U.getX(O),q=U.getX(O+1),M=r$(this,J,CQ,X,R,q,O);if(M)Q.push(M)}if(this.isLineLoop){let O=U.getX(E-1),B=U.getX(G),R=r$(this,J,CQ,X,O,B,E-1);if(R)Q.push(R)}}else{let G=Math.max(0,W.start),E=Math.min(F.count,W.start+W.count);for(let O=G,B=E-1;O<B;O+=H){let R=r$(this,J,CQ,X,O,O+1,O);if(R)Q.push(R)}if(this.isLineLoop){let O=r$(this,J,CQ,X,E-1,G,E-1);if(O)Q.push(O)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let Y=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=K}}}}}function r$(J,Q,$,Z,K,W,Y){let X=J.geometry.attributes.position;if(WZ.fromBufferAttribute(X,K),YZ.fromBufferAttribute(X,W),$.distanceSqToSegment(WZ,YZ,fK,zX)>Z)return;fK.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(fK);if(U<Q.near||U>Q.far)return;return{distance:U,point:zX.clone().applyMatrix4(J.matrixWorld),index:Y,face:null,faceIndex:null,barycoord:null,object:J}}var AX=new _,_X=new _;class zZ extends n6{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let Z=0,K=Q.count;Z<K;Z+=2)AX.fromBufferAttribute(Q,Z),_X.fromBufferAttribute(Q,Z+1),$[Z]=Z===0?0:$[Z-1],$[Z+1]=$[Z]+AX.distanceTo(_X);J.setAttribute("lineDistance",new YJ($,1))}else r0("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class AZ extends n6{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class u7 extends S8{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new v0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var TX=new QJ,lK=new q7,t$=new l8,e$=new _;class s6 extends jJ{constructor(J=new fJ,Q=new u7){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,K=J.params.Points.threshold,W=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(t$.copy($.boundingSphere),t$.applyMatrix4(Z),t$.radius+=K,J.ray.intersectsSphere(t$)===!1)return;TX.copy(Z).invert(),lK.copy(J.ray).applyMatrix4(TX);let Y=K/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,H=$.index,N=$.attributes.position;if(H!==null){let F=Math.max(0,W.start),G=Math.min(H.count,W.start+W.count);for(let E=F,O=G;E<O;E++){let B=H.getX(E);e$.fromBufferAttribute(N,B),SX(e$,B,X,Z,J,Q,this)}}else{let F=Math.max(0,W.start),G=Math.min(N.count,W.start+W.count);for(let E=F,O=G;E<O;E++)e$.fromBufferAttribute(N,E),SX(e$,E,X,Z,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let Y=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=K}}}}}function SX(J,Q,$,Z,K,W,Y){let X=lK.distanceSqToPoint(J);if(X<$){let H=new _;lK.closestPointToPoint(J,H),H.applyMatrix4(Z);let U=K.ray.origin.distanceTo(H);if(U<K.near||U>K.far)return;W.push({distance:U,distanceToRay:Math.sqrt(X),point:H,index:Q,face:null,faceIndex:null,barycoord:null,object:Y})}}class _Z extends eJ{constructor(J=[],Q=301,$,Z,K,W,Y,X,H,U){super(J,Q,$,Z,K,W,Y,X,H,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class m8 extends eJ{constructor(J,Q,$,Z,K,W,Y,X,H){super(J,Q,$,Z,K,W,Y,X,H);this.isCanvasTexture=!0,this.needsUpdate=!0}}class d7 extends eJ{constructor(J,Q,$=1014,Z,K,W,Y=1003,X=1003,H,U=1026,N=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let F={width:J,height:Q,depth:N};super(F,Z,K,W,Y,X,U,$,H);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new uQ(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class lW extends d7{constructor(J,Q=1014,$=301,Z,K,W=1003,Y=1003,X,H=1026){let U={width:J,height:J,depth:1},N=[U,U,U,U,U,U];super(J,J,Q,$,Z,K,W,Y,X,H);this.image=N,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class TZ extends eJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class TJ extends fJ{constructor(J=1,Q=1,$=1,Z=1,K=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:K,depthSegments:W};let Y=this;Z=Math.floor(Z),K=Math.floor(K),W=Math.floor(W);let X=[],H=[],U=[],N=[],F=0,G=0;E("z","y","x",-1,-1,$,Q,J,W,K,0),E("z","y","x",1,-1,$,Q,-J,W,K,1),E("x","z","y",1,1,J,$,Q,Z,W,2),E("x","z","y",1,-1,J,$,-Q,Z,W,3),E("x","y","z",1,-1,J,Q,$,Z,K,4),E("x","y","z",-1,-1,J,Q,-$,Z,K,5),this.setIndex(X),this.setAttribute("position",new YJ(H,3)),this.setAttribute("normal",new YJ(U,3)),this.setAttribute("uv",new YJ(N,2));function E(O,B,R,q,M,P,V,L,C,A,D){let I=P/C,d=V/A,f=P/2,u=V/2,$0=L/2,y=C+1,j=A+1,g=0,v=0,i=new _;for(let x=0;x<j;x++){let a=x*d-u;for(let Q0=0;Q0<y;Q0++){let B0=Q0*I-f;i[O]=B0*q,i[B]=a*M,i[R]=$0,H.push(i.x,i.y,i.z),i[O]=0,i[B]=0,i[R]=L>0?1:-1,U.push(i.x,i.y,i.z),N.push(Q0/C),N.push(1-x/A),g+=1}}for(let x=0;x<A;x++)for(let a=0;a<C;a++){let Q0=F+a+y*x,B0=F+a+y*(x+1),D0=F+(a+1)+y*(x+1),g0=F+(a+1)+y*x;X.push(Q0,B0,g0),X.push(B0,D0,g0),v+=6}Y.addGroup(G,v,D),G+=v,F+=g}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new TJ(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class s9 extends fJ{constructor(J=1,Q=32,$=0,Z=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:Q,thetaStart:$,thetaLength:Z},Q=Math.max(3,Q);let K=[],W=[],Y=[],X=[],H=new _,U=new F0;W.push(0,0,0),Y.push(0,0,1),X.push(0.5,0.5);for(let N=0,F=3;N<=Q;N++,F+=3){let G=$+N/Q*Z;H.x=J*Math.cos(G),H.y=J*Math.sin(G),W.push(H.x,H.y,H.z),Y.push(0,0,1),U.x=(W[F]/J+1)/2,U.y=(W[F+1]/J+1)/2,X.push(U.x,U.y)}for(let N=1;N<=Q;N++)K.push(N,N+1,0);this.setIndex(K),this.setAttribute("position",new YJ(W,3)),this.setAttribute("normal",new YJ(Y,3)),this.setAttribute("uv",new YJ(X,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new s9(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class BJ extends fJ{constructor(J=1,Q=1,$=1,Z=32,K=1,W=!1,Y=0,X=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:Z,heightSegments:K,openEnded:W,thetaStart:Y,thetaLength:X};let H=this;Z=Math.floor(Z),K=Math.floor(K);let U=[],N=[],F=[],G=[],E=0,O=[],B=$/2,R=0;if(q(),W===!1){if(J>0)M(!0);if(Q>0)M(!1)}this.setIndex(U),this.setAttribute("position",new YJ(N,3)),this.setAttribute("normal",new YJ(F,3)),this.setAttribute("uv",new YJ(G,2));function q(){let P=new _,V=new _,L=0,C=(Q-J)/$;for(let A=0;A<=K;A++){let D=[],I=A/K,d=I*(Q-J)+J;for(let f=0;f<=Z;f++){let u=f/Z,$0=u*X+Y,y=Math.sin($0),j=Math.cos($0);V.x=d*y,V.y=-I*$+B,V.z=d*j,N.push(V.x,V.y,V.z),P.set(y,C,j).normalize(),F.push(P.x,P.y,P.z),G.push(u,1-I),D.push(E++)}O.push(D)}for(let A=0;A<Z;A++)for(let D=0;D<K;D++){let I=O[D][A],d=O[D+1][A],f=O[D+1][A+1],u=O[D][A+1];if(J>0||D!==0)U.push(I,d,u),L+=3;if(Q>0||D!==K-1)U.push(d,f,u),L+=3}H.addGroup(R,L,0),R+=L}function M(P){let V=E,L=new F0,C=new _,A=0,D=P===!0?J:Q,I=P===!0?1:-1;for(let f=1;f<=Z;f++)N.push(0,B*I,0),F.push(0,I,0),G.push(0.5,0.5),E++;let d=E;for(let f=0;f<=Z;f++){let $0=f/Z*X+Y,y=Math.cos($0),j=Math.sin($0);C.x=D*j,C.y=B*I,C.z=D*y,N.push(C.x,C.y,C.z),F.push(0,I,0),L.x=y*0.5+0.5,L.y=j*0.5*I+0.5,G.push(L.x,L.y),E++}for(let f=0;f<Z;f++){let u=V+f,$0=d+f;if(P===!0)U.push($0,$0+1,u);else U.push($0+1,$0,u);A+=3}H.addGroup(R,A,P===!0?1:2),R+=A}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new BJ(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class c7 extends BJ{constructor(J=1,Q=1,$=32,Z=1,K=!1,W=0,Y=Math.PI*2){super(0,J,Q,$,Z,K,W,Y);this.type="ConeGeometry",this.parameters={radius:J,height:Q,radialSegments:$,heightSegments:Z,openEnded:K,thetaStart:W,thetaLength:Y}}static fromJSON(J){return new c7(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class SZ extends fJ{constructor(J=[],Q=[],$=1,Z=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:J,indices:Q,radius:$,detail:Z};let K=[],W=[];if(Y(Z),H($),U(),this.setAttribute("position",new YJ(K,3)),this.setAttribute("normal",new YJ(K.slice(),3)),this.setAttribute("uv",new YJ(W,2)),Z===0)this.computeVertexNormals();else this.normalizeNormals();function Y(q){let M=new _,P=new _,V=new _;for(let L=0;L<Q.length;L+=3)G(Q[L+0],M),G(Q[L+1],P),G(Q[L+2],V),X(M,P,V,q)}function X(q,M,P,V){let L=V+1,C=[];for(let A=0;A<=L;A++){C[A]=[];let D=q.clone().lerp(P,A/L),I=M.clone().lerp(P,A/L),d=L-A;for(let f=0;f<=d;f++)if(f===0&&A===L)C[A][f]=D;else C[A][f]=D.clone().lerp(I,f/d)}for(let A=0;A<L;A++)for(let D=0;D<2*(L-A)-1;D++){let I=Math.floor(D/2);if(D%2===0)F(C[A][I+1]),F(C[A+1][I]),F(C[A][I]);else F(C[A][I+1]),F(C[A+1][I+1]),F(C[A+1][I])}}function H(q){let M=new _;for(let P=0;P<K.length;P+=3)M.x=K[P+0],M.y=K[P+1],M.z=K[P+2],M.normalize().multiplyScalar(q),K[P+0]=M.x,K[P+1]=M.y,K[P+2]=M.z}function U(){let q=new _;for(let M=0;M<K.length;M+=3){q.x=K[M+0],q.y=K[M+1],q.z=K[M+2];let P=B(q)/2/Math.PI+0.5,V=R(q)/Math.PI+0.5;W.push(P,1-V)}E(),N()}function N(){for(let q=0;q<W.length;q+=6){let M=W[q+0],P=W[q+2],V=W[q+4],L=Math.max(M,P,V),C=Math.min(M,P,V);if(L>0.9&&C<0.1){if(M<0.2)W[q+0]+=1;if(P<0.2)W[q+2]+=1;if(V<0.2)W[q+4]+=1}}}function F(q){K.push(q.x,q.y,q.z)}function G(q,M){let P=q*3;M.x=J[P+0],M.y=J[P+1],M.z=J[P+2]}function E(){let q=new _,M=new _,P=new _,V=new _,L=new F0,C=new F0,A=new F0;for(let D=0,I=0;D<K.length;D+=9,I+=6){q.set(K[D+0],K[D+1],K[D+2]),M.set(K[D+3],K[D+4],K[D+5]),P.set(K[D+6],K[D+7],K[D+8]),L.set(W[I+0],W[I+1]),C.set(W[I+2],W[I+3]),A.set(W[I+4],W[I+5]),V.copy(q).add(M).add(P).divideScalar(3);let d=B(V);O(L,I+0,q,d),O(C,I+2,M,d),O(A,I+4,P,d)}}function O(q,M,P,V){if(V<0&&q.x===1)W[M]=q.x-1;if(P.x===0&&P.z===0)W[M]=V/2/Math.PI+0.5}function B(q){return Math.atan2(q.z,-q.x)}function R(q){return Math.atan2(-q.y,Math.sqrt(q.x*q.x+q.z*q.z))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new SZ(J.vertices,J.indices,J.radius,J.detail)}}class a8{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){r0("Curve: .getPoint() not implemented.")}getPointAt(J,Q){let $=this.getUtoTmapping(J);return this.getPoint($,Q)}getPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));return Q}getSpacedPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPointAt($/J));return Q}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Q=[],$,Z=this.getPoint(0),K=0;Q.push(0);for(let W=1;W<=J;W++)$=this.getPoint(W/J),K+=$.distanceTo(Z),Q.push(K),Z=$;return this.cacheArcLengths=Q,Q}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Q=null){let $=this.getLengths(),Z=0,K=$.length,W;if(Q)W=Q;else W=J*$[K-1];let Y=0,X=K-1,H;while(Y<=X)if(Z=Math.floor(Y+(X-Y)/2),H=$[Z]-W,H<0)Y=Z+1;else if(H>0)X=Z-1;else{X=Z;break}if(Z=X,$[Z]===W)return Z/(K-1);let U=$[Z],F=$[Z+1]-U,G=(W-U)/F;return(Z+G)/(K-1)}getTangent(J,Q){let Z=J-0.0001,K=J+0.0001;if(Z<0)Z=0;if(K>1)K=1;let W=this.getPoint(Z),Y=this.getPoint(K),X=Q||(W.isVector2?new F0:new _);return X.copy(Y).sub(W).normalize(),X}getTangentAt(J,Q){let $=this.getUtoTmapping(J);return this.getTangent($,Q)}computeFrenetFrames(J,Q=!1){let $=new _,Z=[],K=[],W=[],Y=new _,X=new QJ;for(let G=0;G<=J;G++){let E=G/J;Z[G]=this.getTangentAt(E,new _)}K[0]=new _,W[0]=new _;let H=Number.MAX_VALUE,U=Math.abs(Z[0].x),N=Math.abs(Z[0].y),F=Math.abs(Z[0].z);if(U<=H)H=U,$.set(1,0,0);if(N<=H)H=N,$.set(0,1,0);if(F<=H)$.set(0,0,1);Y.crossVectors(Z[0],$).normalize(),K[0].crossVectors(Z[0],Y),W[0].crossVectors(Z[0],K[0]);for(let G=1;G<=J;G++){if(K[G]=K[G-1].clone(),W[G]=W[G-1].clone(),Y.crossVectors(Z[G-1],Z[G]),Y.length()>Number.EPSILON){Y.normalize();let E=Math.acos(GJ(Z[G-1].dot(Z[G]),-1,1));K[G].applyMatrix4(X.makeRotationAxis(Y,E))}W[G].crossVectors(Z[G],K[G])}if(Q===!0){let G=Math.acos(GJ(K[0].dot(K[J]),-1,1));if(G/=J,Z[0].dot(Y.crossVectors(K[0],K[J]))>0)G=-G;for(let E=1;E<=J;E++)K[E].applyMatrix4(X.makeRotationAxis(Z[E],G*E)),W[E].crossVectors(Z[E],K[E])}return{tangents:Z,normals:K,binormals:W}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}}class aQ extends a8{constructor(J=0,Q=0,$=1,Z=1,K=0,W=Math.PI*2,Y=!1,X=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Q,this.xRadius=$,this.yRadius=Z,this.aStartAngle=K,this.aEndAngle=W,this.aClockwise=Y,this.aRotation=X}getPoint(J,Q=new F0){let $=Q,Z=Math.PI*2,K=this.aEndAngle-this.aStartAngle,W=Math.abs(K)<Number.EPSILON;while(K<0)K+=Z;while(K>Z)K-=Z;if(K<Number.EPSILON)if(W)K=0;else K=Z;if(this.aClockwise===!0&&!W)if(K===Z)K=-Z;else K=K-Z;let Y=this.aStartAngle+J*K,X=this.aX+this.xRadius*Math.cos(Y),H=this.aY+this.yRadius*Math.sin(Y);if(this.aRotation!==0){let U=Math.cos(this.aRotation),N=Math.sin(this.aRotation),F=X-this.aX,G=H-this.aY;X=F*U-G*N+this.aX,H=F*N+G*U+this.aY}return $.set(X,H)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class mW extends aQ{constructor(J,Q,$,Z,K,W){super(J,Q,$,$,Z,K,W);this.isArcCurve=!0,this.type="ArcCurve"}}function uW(){let J=0,Q=0,$=0,Z=0;function K(W,Y,X,H){J=W,Q=X,$=-3*W+3*Y-2*X-H,Z=2*W-2*Y+X+H}return{initCatmullRom:function(W,Y,X,H,U){K(Y,X,U*(X-W),U*(H-Y))},initNonuniformCatmullRom:function(W,Y,X,H,U,N,F){let G=(Y-W)/U-(X-W)/(U+N)+(X-Y)/N,E=(X-Y)/N-(H-Y)/(N+F)+(H-X)/F;G*=N,E*=N,K(Y,X,G,E)},calc:function(W){let Y=W*W,X=Y*W;return J+Q*W+$*Y+Z*X}}}var wX=new _,jX=new _,bK=new uW,hK=new uW,xK=new uW;class n7 extends a8{constructor(J=[],Q=!1,$="centripetal",Z=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Q,this.curveType=$,this.tension=Z}getPoint(J,Q=new _){let $=Q,Z=this.points,K=Z.length,W=(K-(this.closed?0:1))*J,Y=Math.floor(W),X=W-Y;if(this.closed)Y+=Y>0?0:(Math.floor(Math.abs(Y)/K)+1)*K;else if(X===0&&Y===K-1)Y=K-2,X=1;let H,U;if(this.closed||Y>0)H=Z[(Y-1)%K];else jX.subVectors(Z[0],Z[1]).add(Z[0]),H=jX;let N=Z[Y%K],F=Z[(Y+1)%K];if(this.closed||Y+2<K)U=Z[(Y+2)%K];else wX.subVectors(Z[K-1],Z[K-2]).add(Z[K-1]),U=wX;if(this.curveType==="centripetal"||this.curveType==="chordal"){let G=this.curveType==="chordal"?0.5:0.25,E=Math.pow(H.distanceToSquared(N),G),O=Math.pow(N.distanceToSquared(F),G),B=Math.pow(F.distanceToSquared(U),G);if(O<0.0001)O=1;if(E<0.0001)E=O;if(B<0.0001)B=O;bK.initNonuniformCatmullRom(H.x,N.x,F.x,U.x,E,O,B),hK.initNonuniformCatmullRom(H.y,N.y,F.y,U.y,E,O,B),xK.initNonuniformCatmullRom(H.z,N.z,F.z,U.z,E,O,B)}else if(this.curveType==="catmullrom")bK.initCatmullRom(H.x,N.x,F.x,U.x,this.tension),hK.initCatmullRom(H.y,N.y,F.y,U.y,this.tension),xK.initCatmullRom(H.z,N.z,F.z,U.z,this.tension);return $.set(bK.calc(X),hK.calc(X),xK.calc(X)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(Z.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let Z=this.points[Q];J.points.push(Z.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(new _().fromArray(Z))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function yX(J,Q,$,Z,K){let W=(Z-Q)*0.5,Y=(K-$)*0.5,X=J*J,H=J*X;return(2*$-2*Z+W+Y)*H+(-3*$+3*Z-2*W-Y)*X+W*J+$}function _N(J,Q){let $=1-J;return $*$*Q}function TN(J,Q){return 2*(1-J)*J*Q}function SN(J,Q){return J*J*Q}function AQ(J,Q,$,Z){return _N(J,Q)+TN(J,$)+SN(J,Z)}function wN(J,Q){let $=1-J;return $*$*$*Q}function jN(J,Q){let $=1-J;return 3*$*$*J*Q}function yN(J,Q){return 3*(1-J)*J*J*Q}function vN(J,Q){return J*J*J*Q}function _Q(J,Q,$,Z,K){return wN(J,Q)+jN(J,$)+yN(J,Z)+vN(J,K)}class wZ extends a8{constructor(J=new F0,Q=new F0,$=new F0,Z=new F0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Q,this.v2=$,this.v3=Z}getPoint(J,Q=new F0){let $=Q,Z=this.v0,K=this.v1,W=this.v2,Y=this.v3;return $.set(_Q(J,Z.x,K.x,W.x,Y.x),_Q(J,Z.y,K.y,W.y,Y.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class dW extends a8{constructor(J=new _,Q=new _,$=new _,Z=new _){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Q,this.v2=$,this.v3=Z}getPoint(J,Q=new _){let $=Q,Z=this.v0,K=this.v1,W=this.v2,Y=this.v3;return $.set(_Q(J,Z.x,K.x,W.x,Y.x),_Q(J,Z.y,K.y,W.y,Y.y),_Q(J,Z.z,K.z,W.z,Y.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class jZ extends a8{constructor(J=new F0,Q=new F0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Q}getPoint(J,Q=new F0){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new F0){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class cW extends a8{constructor(J=new _,Q=new _){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Q}getPoint(J,Q=new _){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new _){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class yZ extends a8{constructor(J=new F0,Q=new F0,$=new F0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new F0){let $=Q,Z=this.v0,K=this.v1,W=this.v2;return $.set(AQ(J,Z.x,K.x,W.x),AQ(J,Z.y,K.y,W.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class u8 extends a8{constructor(J=new _,Q=new _,$=new _){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new _){let $=Q,Z=this.v0,K=this.v1,W=this.v2;return $.set(AQ(J,Z.x,K.x,W.x),AQ(J,Z.y,K.y,W.y),AQ(J,Z.z,K.z,W.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class vZ extends a8{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Q=new F0){let $=Q,Z=this.points,K=(Z.length-1)*J,W=Math.floor(K),Y=K-W,X=Z[W===0?W:W-1],H=Z[W],U=Z[W>Z.length-2?Z.length-1:W+1],N=Z[W>Z.length-3?Z.length-1:W+2];return $.set(yX(Y,X.x,H.x,U.x,N.x),yX(Y,X.y,H.y,U.y,N.y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let Z=this.points[Q];J.points.push(Z.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(new F0().fromArray(Z))}return this}}var mK=Object.freeze({__proto__:null,ArcCurve:mW,CatmullRomCurve3:n7,CubicBezierCurve:wZ,CubicBezierCurve3:dW,EllipseCurve:aQ,LineCurve:jZ,LineCurve3:cW,QuadraticBezierCurve:yZ,QuadraticBezierCurve3:u8,SplineCurve:vZ});class nW extends a8{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),Q=this.curves[this.curves.length-1].getPoint(1);if(!J.equals(Q)){let $=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new mK[$](Q,J))}return this}getPoint(J,Q){let $=J*this.getLength(),Z=this.getCurveLengths(),K=0;while(K<Z.length){if(Z[K]>=$){let W=Z[K]-$,Y=this.curves[K],X=Y.getLength(),H=X===0?0:1-W/X;return Y.getPointAt(H,Q)}K++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],Q=0;for(let $=0,Z=this.curves.length;$<Z;$++)Q+=this.curves[$].getLength(),J.push(Q);return this.cacheLengths=J,J}getSpacedPoints(J=40){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));if(this.autoClose)Q.push(Q[0]);return Q}getPoints(J=12){let Q=[],$;for(let Z=0,K=this.curves;Z<K.length;Z++){let W=K[Z],Y=W.isEllipseCurve?J*2:W.isLineCurve||W.isLineCurve3?1:W.isSplineCurve?J*W.points.length:J,X=W.getPoints(Y);for(let H=0;H<X.length;H++){let U=X[H];if($&&$.equals(U))continue;Q.push(U),$=U}}if(this.autoClose&&Q.length>1&&!Q[Q.length-1].equals(Q[0]))Q.push(Q[0]);return Q}copy(J){super.copy(J),this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let Z=J.curves[Q];this.curves.push(Z.clone())}return this.autoClose=J.autoClose,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let Q=0,$=this.curves.length;Q<$;Q++){let Z=this.curves[Q];J.curves.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let Z=J.curves[Q];this.curves.push(new mK[Z.type]().fromJSON(Z))}return this}}class XZ extends nW{constructor(J){super();if(this.type="Path",this.currentPoint=new F0,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let Q=1,$=J.length;Q<$;Q++)this.lineTo(J[Q].x,J[Q].y);return this}moveTo(J,Q){return this.currentPoint.set(J,Q),this}lineTo(J,Q){let $=new jZ(this.currentPoint.clone(),new F0(J,Q));return this.curves.push($),this.currentPoint.set(J,Q),this}quadraticCurveTo(J,Q,$,Z){let K=new yZ(this.currentPoint.clone(),new F0(J,Q),new F0($,Z));return this.curves.push(K),this.currentPoint.set($,Z),this}bezierCurveTo(J,Q,$,Z,K,W){let Y=new wZ(this.currentPoint.clone(),new F0(J,Q),new F0($,Z),new F0(K,W));return this.curves.push(Y),this.currentPoint.set(K,W),this}splineThru(J){let Q=[this.currentPoint.clone()].concat(J),$=new vZ(Q);return this.curves.push($),this.currentPoint.copy(J[J.length-1]),this}arc(J,Q,$,Z,K,W){let Y=this.currentPoint.x,X=this.currentPoint.y;return this.absarc(J+Y,Q+X,$,Z,K,W),this}absarc(J,Q,$,Z,K,W){return this.absellipse(J,Q,$,$,Z,K,W),this}ellipse(J,Q,$,Z,K,W,Y,X){let H=this.currentPoint.x,U=this.currentPoint.y;return this.absellipse(J+H,Q+U,$,Z,K,W,Y,X),this}absellipse(J,Q,$,Z,K,W,Y,X){let H=new aQ(J,Q,$,Z,K,W,Y,X);if(this.curves.length>0){let N=H.getPoint(0);if(!N.equals(this.currentPoint))this.lineTo(N.x,N.y)}this.curves.push(H);let U=H.getPoint(1);return this.currentPoint.copy(U),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class rQ extends XZ{constructor(J){super(J);this.uuid=i8(),this.type="Shape",this.holes=[]}getPointsHoles(J){let Q=[];for(let $=0,Z=this.holes.length;$<Z;$++)Q[$]=this.holes[$].getPoints(J);return Q}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let Z=J.holes[Q];this.holes.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let Q=0,$=this.holes.length;Q<$;Q++){let Z=this.holes[Q];J.holes.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let Z=J.holes[Q];this.holes.push(new XZ().fromJSON(Z))}return this}}function fN(J,Q,$=2){let Z=Q&&Q.length,K=Z?Q[0]*$:J.length,W=cH(J,0,K,$,!0),Y=[];if(!W||W.next===W.prev)return Y;let X,H,U;if(Z)W=pN(J,Q,W,$);if(J.length>80*$){X=J[0],H=J[1];let N=X,F=H;for(let G=$;G<K;G+=$){let E=J[G],O=J[G+1];if(E<X)X=E;if(O<H)H=O;if(E>N)N=E;if(O>F)F=O}U=Math.max(N-X,F-H),U=U!==0?32767/U:0}return SQ(W,Y,$,X,H,U,0),Y}function cH(J,Q,$,Z,K){let W;if(K===rN(J,Q,$,Z)>0)for(let Y=Q;Y<$;Y+=Z)W=vX(Y/Z|0,J[Y],J[Y+1],W);else for(let Y=$-Z;Y>=Q;Y-=Z)W=vX(Y/Z|0,J[Y],J[Y+1],W);if(W&&v6(W,W.next))jQ(W),W=W.next;return W}function j7(J,Q){if(!J)return J;if(!Q)Q=J;let $=J,Z;do if(Z=!1,!$.steiner&&(v6($,$.next)||rJ($.prev,$,$.next)===0)){if(jQ($),$=Q=$.prev,$===$.next)break;Z=!0}else $=$.next;while(Z||$!==Q);return Q}function SQ(J,Q,$,Z,K,W,Y){if(!J)return;if(!Y&&W)cN(J,Z,K,W);let X=J;while(J.prev!==J.next){let{prev:H,next:U}=J;if(W?hN(J,Z,K,W):bN(J)){Q.push(H.i,J.i,U.i),jQ(J),J=U.next,X=U.next;continue}if(J=U,J===X){if(!Y)SQ(j7(J),Q,$,Z,K,W,1);else if(Y===1)J=xN(j7(J),Q),SQ(J,Q,$,Z,K,W,2);else if(Y===2)gN(J,Q,$,Z,K,W);break}}}function bN(J){let Q=J.prev,$=J,Z=J.next;if(rJ(Q,$,Z)>=0)return!1;let K=Q.x,W=$.x,Y=Z.x,X=Q.y,H=$.y,U=Z.y,N=Math.min(K,W,Y),F=Math.min(X,H,U),G=Math.max(K,W,Y),E=Math.max(X,H,U),O=Z.next;while(O!==Q){if(O.x>=N&&O.x<=G&&O.y>=F&&O.y<=E&&PQ(K,X,W,H,Y,U,O.x,O.y)&&rJ(O.prev,O,O.next)>=0)return!1;O=O.next}return!0}function hN(J,Q,$,Z){let K=J.prev,W=J,Y=J.next;if(rJ(K,W,Y)>=0)return!1;let X=K.x,H=W.x,U=Y.x,N=K.y,F=W.y,G=Y.y,E=Math.min(X,H,U),O=Math.min(N,F,G),B=Math.max(X,H,U),R=Math.max(N,F,G),q=uK(E,O,Q,$,Z),M=uK(B,R,Q,$,Z),P=J.prevZ,V=J.nextZ;while(P&&P.z>=q&&V&&V.z<=M){if(P.x>=E&&P.x<=B&&P.y>=O&&P.y<=R&&P!==K&&P!==Y&&PQ(X,N,H,F,U,G,P.x,P.y)&&rJ(P.prev,P,P.next)>=0)return!1;if(P=P.prevZ,V.x>=E&&V.x<=B&&V.y>=O&&V.y<=R&&V!==K&&V!==Y&&PQ(X,N,H,F,U,G,V.x,V.y)&&rJ(V.prev,V,V.next)>=0)return!1;V=V.nextZ}while(P&&P.z>=q){if(P.x>=E&&P.x<=B&&P.y>=O&&P.y<=R&&P!==K&&P!==Y&&PQ(X,N,H,F,U,G,P.x,P.y)&&rJ(P.prev,P,P.next)>=0)return!1;P=P.prevZ}while(V&&V.z<=M){if(V.x>=E&&V.x<=B&&V.y>=O&&V.y<=R&&V!==K&&V!==Y&&PQ(X,N,H,F,U,G,V.x,V.y)&&rJ(V.prev,V,V.next)>=0)return!1;V=V.nextZ}return!0}function xN(J,Q){let $=J;do{let Z=$.prev,K=$.next.next;if(!v6(Z,K)&&sH(Z,$,$.next,K)&&wQ(Z,K)&&wQ(K,Z))Q.push(Z.i,$.i,K.i),jQ($),jQ($.next),$=J=K;$=$.next}while($!==J);return j7($)}function gN(J,Q,$,Z,K,W){let Y=J;do{let X=Y.next.next;while(X!==Y.prev){if(Y.i!==X.i&&iN(Y,X)){let H=iH(Y,X);Y=j7(Y,Y.next),H=j7(H,H.next),SQ(Y,Q,$,Z,K,W,0),SQ(H,Q,$,Z,K,W,0);return}X=X.next}Y=Y.next}while(Y!==J)}function pN(J,Q,$,Z){let K=[];for(let W=0,Y=Q.length;W<Y;W++){let X=Q[W]*Z,H=W<Y-1?Q[W+1]*Z:J.length,U=cH(J,X,H,Z,!1);if(U===U.next)U.steiner=!0;K.push(sN(U))}K.sort(lN);for(let W=0;W<K.length;W++)$=mN(K[W],$);return $}function lN(J,Q){let $=J.x-Q.x;if($===0){if($=J.y-Q.y,$===0){let Z=(J.next.y-J.y)/(J.next.x-J.x),K=(Q.next.y-Q.y)/(Q.next.x-Q.x);$=Z-K}}return $}function mN(J,Q){let $=uN(J,Q);if(!$)return Q;let Z=iH($,J);return j7(Z,Z.next),j7($,$.next)}function uN(J,Q){let $=Q,Z=J.x,K=J.y,W=-1/0,Y;if(v6(J,$))return $;do{if(v6(J,$.next))return $.next;else if(K<=$.y&&K>=$.next.y&&$.next.y!==$.y){let F=$.x+(K-$.y)*($.next.x-$.x)/($.next.y-$.y);if(F<=Z&&F>W){if(W=F,Y=$.x<$.next.x?$:$.next,F===Z)return Y}}$=$.next}while($!==Q);if(!Y)return null;let X=Y,H=Y.x,U=Y.y,N=1/0;$=Y;do{if(Z>=$.x&&$.x>=H&&Z!==$.x&&nH(K<U?Z:W,K,H,U,K<U?W:Z,K,$.x,$.y)){let F=Math.abs(K-$.y)/(Z-$.x);if(wQ($,J)&&(F<N||F===N&&($.x>Y.x||$.x===Y.x&&dN(Y,$))))Y=$,N=F}$=$.next}while($!==X);return Y}function dN(J,Q){return rJ(J.prev,J,Q.prev)<0&&rJ(Q.next,J,J.next)<0}function cN(J,Q,$,Z){let K=J;do{if(K.z===0)K.z=uK(K.x,K.y,Q,$,Z);K.prevZ=K.prev,K.nextZ=K.next,K=K.next}while(K!==J);K.prevZ.nextZ=null,K.prevZ=null,nN(K)}function nN(J){let Q,$=1;do{let Z=J,K;J=null;let W=null;Q=0;while(Z){Q++;let Y=Z,X=0;for(let U=0;U<$;U++)if(X++,Y=Y.nextZ,!Y)break;let H=$;while(X>0||H>0&&Y){if(X!==0&&(H===0||!Y||Z.z<=Y.z))K=Z,Z=Z.nextZ,X--;else K=Y,Y=Y.nextZ,H--;if(W)W.nextZ=K;else J=K;K.prevZ=W,W=K}Z=Y}W.nextZ=null,$*=2}while(Q>1);return J}function uK(J,Q,$,Z,K){return J=(J-$)*K|0,Q=(Q-Z)*K|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,Q=(Q|Q<<8)&16711935,Q=(Q|Q<<4)&252645135,Q=(Q|Q<<2)&858993459,Q=(Q|Q<<1)&1431655765,J|Q<<1}function sN(J){let Q=J,$=J;do{if(Q.x<$.x||Q.x===$.x&&Q.y<$.y)$=Q;Q=Q.next}while(Q!==J);return $}function nH(J,Q,$,Z,K,W,Y,X){return(K-Y)*(Q-X)>=(J-Y)*(W-X)&&(J-Y)*(Z-X)>=($-Y)*(Q-X)&&($-Y)*(W-X)>=(K-Y)*(Z-X)}function PQ(J,Q,$,Z,K,W,Y,X){return!(J===Y&&Q===X)&&nH(J,Q,$,Z,K,W,Y,X)}function iN(J,Q){return J.next.i!==Q.i&&J.prev.i!==Q.i&&!oN(J,Q)&&(wQ(J,Q)&&wQ(Q,J)&&aN(J,Q)&&(rJ(J.prev,J,Q.prev)||rJ(J,Q.prev,Q))||v6(J,Q)&&rJ(J.prev,J,J.next)>0&&rJ(Q.prev,Q,Q.next)>0)}function rJ(J,Q,$){return(Q.y-J.y)*($.x-Q.x)-(Q.x-J.x)*($.y-Q.y)}function v6(J,Q){return J.x===Q.x&&J.y===Q.y}function sH(J,Q,$,Z){let K=QZ(rJ(J,Q,$)),W=QZ(rJ(J,Q,Z)),Y=QZ(rJ($,Z,J)),X=QZ(rJ($,Z,Q));if(K!==W&&Y!==X)return!0;if(K===0&&JZ(J,$,Q))return!0;if(W===0&&JZ(J,Z,Q))return!0;if(Y===0&&JZ($,J,Z))return!0;if(X===0&&JZ($,Q,Z))return!0;return!1}function JZ(J,Q,$){return Q.x<=Math.max(J.x,$.x)&&Q.x>=Math.min(J.x,$.x)&&Q.y<=Math.max(J.y,$.y)&&Q.y>=Math.min(J.y,$.y)}function QZ(J){return J>0?1:J<0?-1:0}function oN(J,Q){let $=J;do{if($.i!==J.i&&$.next.i!==J.i&&$.i!==Q.i&&$.next.i!==Q.i&&sH($,$.next,J,Q))return!0;$=$.next}while($!==J);return!1}function wQ(J,Q){return rJ(J.prev,J,J.next)<0?rJ(J,Q,J.next)>=0&&rJ(J,J.prev,Q)>=0:rJ(J,Q,J.prev)<0||rJ(J,J.next,Q)<0}function aN(J,Q){let $=J,Z=!1,K=(J.x+Q.x)/2,W=(J.y+Q.y)/2;do{if($.y>W!==$.next.y>W&&$.next.y!==$.y&&K<($.next.x-$.x)*(W-$.y)/($.next.y-$.y)+$.x)Z=!Z;$=$.next}while($!==J);return Z}function iH(J,Q){let $=dK(J.i,J.x,J.y),Z=dK(Q.i,Q.x,Q.y),K=J.next,W=Q.prev;return J.next=Q,Q.prev=J,$.next=K,K.prev=$,Z.next=$,$.prev=Z,W.next=Z,Z.prev=W,Z}function vX(J,Q,$,Z){let K=dK(J,Q,$);if(!Z)K.prev=K,K.next=K;else K.next=Z.next,K.prev=Z,Z.next.prev=K,Z.next=K;return K}function jQ(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function dK(J,Q,$){return{i:J,x:Q,y:$,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function rN(J,Q,$,Z){let K=0;for(let W=Q,Y=$-Z;W<$;W+=Z)K+=(J[Y]-J[W])*(J[W+1]+J[Y+1]),Y=W;return K}class oH{static triangulate(J,Q,$=2){return fN(J,Q,$)}}class w6{static area(J){let Q=J.length,$=0;for(let Z=Q-1,K=0;K<Q;Z=K++)$+=J[Z].x*J[K].y-J[K].x*J[Z].y;return $*0.5}static isClockWise(J){return w6.area(J)<0}static triangulateShape(J,Q){let $=[],Z=[],K=[];fX(J),bX($,J);let W=J.length;Q.forEach(fX);for(let X=0;X<Q.length;X++)Z.push(W),W+=Q[X].length,bX($,Q[X]);let Y=oH.triangulate($,Z);for(let X=0;X<Y.length;X+=3)K.push(Y.slice(X,X+3));return K}}function fX(J){let Q=J.length;if(Q>2&&J[Q-1].equals(J[0]))J.pop()}function bX(J,Q){for(let $=0;$<Q.length;$++)J.push(Q[$].x),J.push(Q[$].y)}class tQ extends SZ{constructor(J=1,Q=0){let $=(1+Math.sqrt(5))/2,Z=[-1,$,0,1,$,0,-1,-$,0,1,-$,0,0,-1,$,0,1,$,0,-1,-$,0,1,-$,$,0,-1,$,0,1,-$,0,-1,-$,0,1],K=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(Z,K,J,Q);this.type="IcosahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new tQ(J.radius,J.detail)}}class O7 extends fJ{constructor(J=[new F0(0,-0.5),new F0(0.5,0),new F0(0,0.5)],Q=12,$=0,Z=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:J,segments:Q,phiStart:$,phiLength:Z},Q=Math.floor(Q),Z=GJ(Z,0,Math.PI*2);let K=[],W=[],Y=[],X=[],H=[],U=1/Q,N=new _,F=new F0,G=new _,E=new _,O=new _,B=0,R=0;for(let q=0;q<=J.length-1;q++)switch(q){case 0:B=J[q+1].x-J[q].x,R=J[q+1].y-J[q].y,G.x=R*1,G.y=-B,G.z=R*0,O.copy(G),G.normalize(),X.push(G.x,G.y,G.z);break;case J.length-1:X.push(O.x,O.y,O.z);break;default:B=J[q+1].x-J[q].x,R=J[q+1].y-J[q].y,G.x=R*1,G.y=-B,G.z=R*0,E.copy(G),G.x+=O.x,G.y+=O.y,G.z+=O.z,G.normalize(),X.push(G.x,G.y,G.z),O.copy(E)}for(let q=0;q<=Q;q++){let M=$+q*U*Z,P=Math.sin(M),V=Math.cos(M);for(let L=0;L<=J.length-1;L++){N.x=J[L].x*P,N.y=J[L].y,N.z=J[L].x*V,W.push(N.x,N.y,N.z),F.x=q/Q,F.y=L/(J.length-1),Y.push(F.x,F.y);let C=X[3*L+0]*P,A=X[3*L+1],D=X[3*L+0]*V;H.push(C,A,D)}}for(let q=0;q<Q;q++)for(let M=0;M<J.length-1;M++){let P=M+q*J.length,V=P,L=P+J.length,C=P+J.length+1,A=P+1;K.push(V,L,A),K.push(C,A,L)}this.setIndex(K),this.setAttribute("position",new YJ(W,3)),this.setAttribute("uv",new YJ(Y,2)),this.setAttribute("normal",new YJ(H,3))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new O7(J.points,J.segments,J.phiStart,J.phiLength)}}class qJ extends fJ{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let K=J/2,W=Q/2,Y=Math.floor($),X=Math.floor(Z),H=Y+1,U=X+1,N=J/Y,F=Q/X,G=[],E=[],O=[],B=[];for(let R=0;R<U;R++){let q=R*F-W;for(let M=0;M<H;M++){let P=M*N-K;E.push(P,-q,0),O.push(0,0,1),B.push(M/Y),B.push(1-R/X)}}for(let R=0;R<X;R++)for(let q=0;q<Y;q++){let M=q+H*R,P=q+H*(R+1),V=q+1+H*(R+1),L=q+1+H*R;G.push(M,P,L),G.push(P,V,L)}this.setIndex(G),this.setAttribute("position",new YJ(E,3)),this.setAttribute("normal",new YJ(O,3)),this.setAttribute("uv",new YJ(B,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new qJ(J.width,J.height,J.widthSegments,J.heightSegments)}}class eQ extends fJ{constructor(J=new rQ([new F0(0,0.5),new F0(-0.5,-0.5),new F0(0.5,-0.5)]),Q=12){super();this.type="ShapeGeometry",this.parameters={shapes:J,curveSegments:Q};let $=[],Z=[],K=[],W=[],Y=0,X=0;if(Array.isArray(J)===!1)H(J);else for(let U=0;U<J.length;U++)H(J[U]),this.addGroup(Y,X,U),Y+=X,X=0;this.setIndex($),this.setAttribute("position",new YJ(Z,3)),this.setAttribute("normal",new YJ(K,3)),this.setAttribute("uv",new YJ(W,2));function H(U){let N=Z.length/3,F=U.extractPoints(Q),G=F.shape,E=F.holes;if(w6.isClockWise(G)===!1)G=G.reverse();for(let B=0,R=E.length;B<R;B++){let q=E[B];if(w6.isClockWise(q)===!0)E[B]=q.reverse()}let O=w6.triangulateShape(G,E);for(let B=0,R=E.length;B<R;B++){let q=E[B];G=G.concat(q)}for(let B=0,R=G.length;B<R;B++){let q=G[B];Z.push(q.x,q.y,0),K.push(0,0,1),W.push(q.x,q.y)}for(let B=0,R=O.length;B<R;B++){let q=O[B],M=q[0]+N,P=q[1]+N,V=q[2]+N;$.push(M,P,V),X+=3}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Q=this.parameters.shapes;return tN(Q,J)}static fromJSON(J,Q){let $=[];for(let Z=0,K=J.shapes.length;Z<K;Z++){let W=Q[J.shapes[Z]];$.push(W)}return new eQ($,J.curveSegments)}}function tN(J,Q){if(Q.shapes=[],Array.isArray(J))for(let $=0,Z=J.length;$<Z;$++){let K=J[$];Q.shapes.push(K.uuid)}else Q.shapes.push(J.uuid);return Q}class R8 extends fJ{constructor(J=1,Q=32,$=16,Z=0,K=Math.PI*2,W=0,Y=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:$,phiStart:Z,phiLength:K,thetaStart:W,thetaLength:Y},Q=Math.max(3,Math.floor(Q)),$=Math.max(2,Math.floor($));let X=Math.min(W+Y,Math.PI),H=0,U=[],N=new _,F=new _,G=[],E=[],O=[],B=[];for(let R=0;R<=$;R++){let q=[],M=R/$,P=W+M*Y,V=J*Math.cos(P),L=Math.sqrt(J*J-V*V),C=0;if(R===0&&W===0)C=0.5/Q;else if(R===$&&X===Math.PI)C=-0.5/Q;for(let A=0;A<=Q;A++){let D=A/Q,I=Z+D*K;N.x=-L*Math.cos(I),N.y=V,N.z=L*Math.sin(I),E.push(N.x,N.y,N.z),F.copy(N).normalize(),O.push(F.x,F.y,F.z),B.push(D+C,1-M),q.push(H++)}U.push(q)}for(let R=0;R<$;R++)for(let q=0;q<Q;q++){let M=U[R][q+1],P=U[R][q],V=U[R+1][q],L=U[R+1][q+1];if(R!==0||W>0)G.push(M,P,L);if(R!==$-1||X<Math.PI)G.push(P,V,L)}this.setIndex(G),this.setAttribute("position",new YJ(E,3)),this.setAttribute("normal",new YJ(O,3)),this.setAttribute("uv",new YJ(B,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new R8(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class j9 extends fJ{constructor(J=1,Q=0.4,$=12,Z=48,K=Math.PI*2,W=0,Y=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:$,tubularSegments:Z,arc:K,thetaStart:W,thetaLength:Y},$=Math.floor($),Z=Math.floor(Z);let X=[],H=[],U=[],N=[],F=new _,G=new _,E=new _;for(let O=0;O<=$;O++){let B=W+O/$*Y;for(let R=0;R<=Z;R++){let q=R/Z*K;G.x=(J+Q*Math.cos(B))*Math.cos(q),G.y=(J+Q*Math.cos(B))*Math.sin(q),G.z=Q*Math.sin(B),H.push(G.x,G.y,G.z),F.x=J*Math.cos(q),F.y=J*Math.sin(q),E.subVectors(G,F).normalize(),U.push(E.x,E.y,E.z),N.push(R/Z),N.push(O/$)}}for(let O=1;O<=$;O++)for(let B=1;B<=Z;B++){let R=(Z+1)*O+B-1,q=(Z+1)*(O-1)+B-1,M=(Z+1)*(O-1)+B,P=(Z+1)*O+B;X.push(R,q,P),X.push(q,M,P)}this.setIndex(X),this.setAttribute("position",new YJ(H,3)),this.setAttribute("normal",new YJ(U,3)),this.setAttribute("uv",new YJ(N,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new j9(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc,J.thetaStart,J.thetaLength)}}class w8 extends fJ{constructor(J=new u8(new _(-1,-1,0),new _(-1,1,0),new _(1,1,0)),Q=64,$=1,Z=8,K=!1){super();this.type="TubeGeometry",this.parameters={path:J,tubularSegments:Q,radius:$,radialSegments:Z,closed:K};let W=J.computeFrenetFrames(Q,K);this.tangents=W.tangents,this.normals=W.normals,this.binormals=W.binormals;let Y=new _,X=new _,H=new F0,U=new _,N=[],F=[],G=[],E=[];O(),this.setIndex(E),this.setAttribute("position",new YJ(N,3)),this.setAttribute("normal",new YJ(F,3)),this.setAttribute("uv",new YJ(G,2));function O(){for(let M=0;M<Q;M++)B(M);B(K===!1?Q:0),q(),R()}function B(M){U=J.getPointAt(M/Q,U);let P=W.normals[M],V=W.binormals[M];for(let L=0;L<=Z;L++){let C=L/Z*Math.PI*2,A=Math.sin(C),D=-Math.cos(C);X.x=D*P.x+A*V.x,X.y=D*P.y+A*V.y,X.z=D*P.z+A*V.z,X.normalize(),F.push(X.x,X.y,X.z),Y.x=U.x+$*X.x,Y.y=U.y+$*X.y,Y.z=U.z+$*X.z,N.push(Y.x,Y.y,Y.z)}}function R(){for(let M=1;M<=Q;M++)for(let P=1;P<=Z;P++){let V=(Z+1)*(M-1)+(P-1),L=(Z+1)*M+(P-1),C=(Z+1)*M+P,A=(Z+1)*(M-1)+P;E.push(V,L,A),E.push(L,C,A)}}function q(){for(let M=0;M<=Q;M++)for(let P=0;P<=Z;P++)H.x=M/Q,H.y=P/Z,G.push(H.x,H.y)}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON();return J.path=this.parameters.path.toJSON(),J}static fromJSON(J){return new w8(new mK[J.path.type]().fromJSON(J.path),J.tubularSegments,J.radius,J.radialSegments,J.closed)}}function s7(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let K=J[$][Z];if(hX(K))if(K.isRenderTargetTexture)r0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=K.clone();else if(Array.isArray(K))if(hX(K[0])){let W=[];for(let Y=0,X=K.length;Y<X;Y++)W[Y]=K[Y].clone();Q[$][Z]=W}else Q[$][Z]=K.slice();else Q[$][Z]=K}}return Q}function k8(J){let Q={};for(let $=0;$<J.length;$++){let Z=s7(J[$]);for(let K in Z)Q[K]=Z[K]}return Q}function hX(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function eN(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function sW(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return EJ.workingColorSpace}var i9={clone:s7,merge:k8},JG=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QG=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tJ extends S8{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JG,this.fragmentShader=QG,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=s7(J.uniforms),this.uniformsGroups=eN(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let W=this.uniforms[Z].value;if(W&&W.isTexture)Q.uniforms[Z]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)Q.uniforms[Z]={type:"c",value:W.getHex()};else if(W&&W.isVector2)Q.uniforms[Z]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)Q.uniforms[Z]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)Q.uniforms[Z]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)Q.uniforms[Z]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)Q.uniforms[Z]={type:"m4",value:W.toArray()};else Q.uniforms[Z]={value:W}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let Z=J.uniforms[$];switch(this.uniforms[$]={},Z.type){case"t":this.uniforms[$].value=Q[Z.value]||null;break;case"c":this.uniforms[$].value=new v0().setHex(Z.value);break;case"v2":this.uniforms[$].value=new F0().fromArray(Z.value);break;case"v3":this.uniforms[$].value=new _().fromArray(Z.value);break;case"v4":this.uniforms[$].value=new mJ().fromArray(Z.value);break;case"m3":this.uniforms[$].value=new XJ().fromArray(Z.value);break;case"m4":this.uniforms[$].value=new QJ().fromArray(Z.value);break;default:this.uniforms[$].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class J$ extends tJ{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class o0 extends S8{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new v0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new v0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new F0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new N9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class L8 extends o0{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new F0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return GJ(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new v0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new v0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new v0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(J){if(this._retroreflectivity>0!==J>0)this.version++;this._retroreflectivity=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.retroreflectivity=J.retroreflectivity,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class iW extends S8{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class oW extends S8{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function Y7(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function KZ(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}function $G(J){function Q(K,W){return J[K]-J[W]}let $=J.length,Z=Array($);for(let K=0;K!==$;++K)Z[K]=K;return Z.sort(Q),Z}function xX(J,Q,$){let Z=J.length,K=new J.constructor(Z);for(let W=0,Y=0;Y!==Z;++W){let X=$[W]*Q;for(let H=0;H!==Q;++H)K[Y++]=J[X+H]}return K}function ZG(J,Q,$,Z){let K=1,W=J[0];while(W!==void 0&&W[Z]===void 0)W=J[K++];if(W===void 0)return;let Y=W[Z];if(Y===void 0)return;if(Array.isArray(Y))do{if(Y=W[Z],Y!==void 0)Q.push(W.time),$.push(...Y);W=J[K++]}while(W!==void 0);else if(Y.toArray!==void 0)do{if(Y=W[Z],Y!==void 0)Q.push(W.time),Y.toArray($,$.length);W=J[K++]}while(W!==void 0);else do{if(Y=W[Z],Y!==void 0)Q.push(W.time),$.push(Y);W=J[K++]}while(W!==void 0)}class o9{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],K=Q[$-1];J:{Q:{let W;$:{Z:if(!(J<Z)){for(let Y=$+2;;){if(Z===void 0){if(J<K)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===Y)break;if(K=Z,Z=Q[++$],J<Z)break Q}W=Q.length;break $}if(!(J>=K)){let Y=Q[1];if(J<Y)$=2,K=Y;for(let X=$-2;;){if(K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===X)break;if(Z=K,K=Q[--$-1],J>=K)break Q}W=$,$=0;break $}break J}while($<W){let Y=$+W>>>1;if(J<Q[Y])W=Y;else $=Y+1}if(Z=Q[$],K=Q[$-1],K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,K,Z)}return this.interpolate_($,K,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,K=J*Z;for(let W=0;W!==Z;++W)Q[W]=$[K+W];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class aW extends o9{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,K=J-2,W=J+1,Y=Z[K],X=Z[W];if(Y===void 0)switch(this.getSettings_().endingStart){case 2401:K=J,Y=2*Q-$;break;case 2402:K=Z.length-2,Y=Q+Z[K]-Z[K+1];break;default:K=J,Y=$}if(X===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,X=2*$-Q;break;case 2402:W=1,X=$+Z[1]-Z[0];break;default:W=J-1,X=Q}let H=($-Q)*0.5,U=this.valueSize;this._weightPrev=H/(Q-Y),this._weightNext=H/(X-$),this._offsetPrev=K*U,this._offsetNext=W*U}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=J*Y,H=X-Y,U=this._offsetPrev,N=this._offsetNext,F=this._weightPrev,G=this._weightNext,E=($-Q)/(Z-Q),O=E*E,B=O*E,R=-F*B+2*F*O-F*E,q=(1+F)*B+(-1.5-2*F)*O+(-0.5+F)*E+1,M=(-1-G)*B+(1.5+G)*O+0.5*E,P=G*B-G*O;for(let V=0;V!==Y;++V)K[V]=R*W[U+V]+q*W[H+V]+M*W[X+V]+P*W[N+V];return K}}class fZ extends o9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=J*Y,H=X-Y,U=($-Q)/(Z-Q),N=1-U;for(let F=0;F!==Y;++F)K[F]=W[H+F]*N+W[X+F]*U;return K}}class rW extends o9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class tW extends o9{interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=J*Y,H=X-Y,U=this.inTangents,N=this.outTangents;if(!U||!N){let E=($-Q)/(Z-Q),O=1-E;for(let B=0;B!==Y;++B)K[B]=W[H+B]*O+W[X+B]*E;return K}let F=Y*2,G=J-1;for(let E=0;E!==Y;++E){let O=W[H+E],B=W[X+E],R=G*F+E*2,q=N[R],M=N[R+1],P=J*F+E*2,V=U[P],L=U[P+1],C=WG($,Q,q,V,Z);K[E]=aH(C,O,M,L,B)}return K}}function aH(J,Q,$,Z,K){let W=1-J;return W*W*W*Q+3*W*W*J*$+3*W*J*J*Z+J*J*J*K}function KG(J,Q,$,Z,K){let W=1-J;return 3*W*W*($-Q)+6*W*J*(Z-$)+3*J*J*(K-Z)}function WG(J,Q,$,Z,K){let W=(J-Q)/(K-Q);for(let Y=0;Y<8;Y++){let X=aH(W,Q,$,Z,K)-J;if(Math.abs(X)<0.0000000001)break;let H=KG(W,Q,$,Z,K);if(Math.abs(H)<0.0000000001)break;W=Math.max(0,Math.min(1,W-X/H))}return W}class d8{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=Y7(Q,this.TimeBufferType),this.values=Y7($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:Y7(J.times,Array),values:Y7(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z;if(KZ(J.settings))$.settings={inTangents:Y7(J.settings.inTangents,Array),outTangents:Y7(J.settings.outTangents,Array)}}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new rW(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new fZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new aW(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new tW(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return r0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J;if(KZ(this.settings))gX(this.settings.inTangents,J),gX(this.settings.outTangents,J)}return this}trim(J,Q){let $=this.times,Z=$.length,K=0,W=Z-1;while(K!==Z&&$[K]<J)++K;while(W!==-1&&$[W]>Q)--W;if(++W,K!==0||W!==Z){if(K>=W)W=Math.max(W,1),K=W-1;let Y=this.getValueSize();this.times=$.slice(K,W),this.values=this.values.slice(K*Y,W*Y)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)$J("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,K=$.length;if(K===0)$J("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let Y=0;Y!==K;Y++){let X=$[Y];if(typeof X==="number"&&isNaN(X)){$J("KeyframeTrack: Time is not a valid number.",this,Y,X),J=!1;break}if(W!==null&&W>X){$J("KeyframeTrack: Out of order keys.",this,Y,X,W),J=!1;break}W=X}if(Z!==void 0){if(d5(Z))for(let Y=0,X=Z.length;Y!==X;++Y){let H=Z[Y];if(isNaN(H)){$J("KeyframeTrack: Value is not a valid number.",this,Y,H),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,K=J.length-1,W=1;for(let Y=1;Y<K;++Y){let X=!1,H=J[Y],U=J[Y+1];if(H!==U&&(Y!==1||H!==J[0]))if(!Z){let N=Y*$,F=N-$,G=N+$;for(let E=0;E!==$;++E){let O=Q[N+E];if(O!==Q[F+E]||O!==Q[G+E]){X=!0;break}}}else X=!0;if(X){if(Y!==W){J[W]=J[Y];let N=Y*$,F=W*$;for(let G=0;G!==$;++G)Q[F+G]=Q[N+G]}++W}}if(K>0){J[W]=J[K];for(let Y=K*$,X=W*$,H=0;H!==$;++H)Q[X+H]=Q[Y+H];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=Q.slice(0,W*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);if(Z.createInterpolant=this.createInterpolant,KZ(this.settings))Z.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return Z}}function gX(J,Q){for(let $=0,Z=J.length;$!==Z;$+=2)J[$]*=Q}d8.prototype.ValueTypeName="";d8.prototype.TimeBufferType=Float32Array;d8.prototype.ValueBufferType=Float32Array;d8.prototype.DefaultInterpolation=2301;class R7 extends d8{constructor(J,Q,$){super(J,Q,$)}}R7.prototype.ValueTypeName="bool";R7.prototype.ValueBufferType=Array;R7.prototype.DefaultInterpolation=2300;R7.prototype.InterpolantFactoryMethodLinear=void 0;R7.prototype.InterpolantFactoryMethodSmooth=void 0;class bZ extends d8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}bZ.prototype.ValueTypeName="color";class L7 extends d8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}L7.prototype.ValueTypeName="number";class eW extends o9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=($-Q)/(Z-Q),H=J*Y;for(let U=H+Y;H!==U;H+=4)CJ.slerpFlat(K,0,W,H-Y,W,H,X);return K}}class V7 extends d8{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new eW(this.times,this.values,this.getValueSize(),J)}}V7.prototype.ValueTypeName="quaternion";V7.prototype.InterpolantFactoryMethodSmooth=void 0;class D7 extends d8{constructor(J,Q,$){super(J,Q,$)}}D7.prototype.ValueTypeName="string";D7.prototype.ValueBufferType=Array;D7.prototype.DefaultInterpolation=2300;D7.prototype.InterpolantFactoryMethodLinear=void 0;D7.prototype.InterpolantFactoryMethodSmooth=void 0;class i7 extends d8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}i7.prototype.ValueTypeName="vector";class f6{constructor(J="",Q=-1,$=[],Z=2500){if(this.name=J,this.tracks=$,this.duration=Q,this.blendMode=Z,this.uuid=i8(),this.userData={},this.duration<0)this.resetDuration()}static parse(J){let Q=[],$=J.tracks,Z=1/(J.fps||1);for(let W=0,Y=$.length;W!==Y;++W)Q.push(XG($[W]).scale(Z));let K=new this(J.name,J.duration,Q,J.blendMode);return K.uuid=J.uuid,K.userData=JSON.parse(J.userData||"{}"),K}static toJSON(J){let Q=[],$=J.tracks,Z={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode,userData:JSON.stringify(J.userData)};for(let K=0,W=$.length;K!==W;++K)Q.push(d8.toJSON($[K]));return Z}static CreateFromMorphTargetSequence(J,Q,$,Z){let K=Q.length,W=[];for(let Y=0;Y<K;Y++){let X=[],H=[];X.push((Y+K-1)%K,Y,(Y+1)%K),H.push(0,1,0);let U=$G(X);if(X=xX(X,1,U),H=xX(H,1,U),!Z&&X[0]===0)X.push(K),H.push(H[0]);W.push(new L7(".morphTargetInfluences["+Q[Y].name+"]",X,H).scale(1/$))}return new this(J,-1,W)}static findByName(J,Q){let $=J;if(!Array.isArray(J)){let Z=J;$=Z.geometry&&Z.geometry.animations||Z.animations}for(let Z=0;Z<$.length;Z++)if($[Z].name===Q)return $[Z];return null}static CreateClipsFromMorphTargetSequences(J,Q,$){let Z={},K=/^([\w-]*?)([\d]+)$/;for(let Y=0,X=J.length;Y<X;Y++){let H=J[Y],U=H.name.match(K);if(U&&U.length>1){let N=U[1],F=Z[N];if(!F)Z[N]=F=[];F.push(H)}}let W=[];for(let Y in Z)W.push(this.CreateFromMorphTargetSequence(Y,Z[Y],Q,$));return W}resetDuration(){let J=this.tracks,Q=0;for(let $=0,Z=J.length;$!==Z;++$){let K=this.tracks[$];Q=Math.max(Q,K.times[K.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let $=0;$<this.tracks.length;$++)J.push(this.tracks[$].clone());let Q=new this.constructor(this.name,this.duration,J,this.blendMode);return Q.userData=JSON.parse(JSON.stringify(this.userData)),Q}toJSON(){return this.constructor.toJSON(this)}}function YG(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return L7;case"vector":case"vector2":case"vector3":case"vector4":return i7;case"color":return bZ;case"quaternion":return V7;case"bool":case"boolean":return R7;case"string":return D7}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function XG(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=YG(J.type);if(J.times===void 0){let Z=[],K=[];ZG(J.keys,Z,K,"value"),J.times=Z,J.values=K}let $;if(Q.parse!==void 0)$=Q.parse(J);else $=new Q(J.name,J.times,J.values,J.interpolation);if(KZ(J.settings))$.settings={inTangents:Y7(J.settings.inTangents,Float32Array),outTangents:Y7(J.settings.outTangents,Float32Array)};return $}var z9={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;if(pX(J))return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;if(pX(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function pX(J){try{let Q=J.slice(J.indexOf(":")+1);return new URL(Q).protocol==="blob:"}catch(Q){return!1}}class JY{constructor(J,Q,$){let Z=this,K=!1,W=0,Y=0,X=void 0,H=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(Y++,K===!1){if(Z.onStart!==void 0)Z.onStart(U,W,Y)}K=!0},this.itemEnd=function(U){if(W++,Z.onProgress!==void 0)Z.onProgress(U,W,Y);if(W===Y){if(K=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),X)return X(U);return U},this.setURLModifier=function(U){return X=U,this},this.addHandler=function(U,N){return H.push(U,N),this},this.removeHandler=function(U){let N=H.indexOf(U);if(N!==-1)H.splice(N,2);return this},this.getHandler=function(U){for(let N=0,F=H.length;N<F;N+=2){let G=H[N],E=H[N+1];if(G.global)G.lastIndex=0;if(G.test(U))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var rH=new JY;class a9{constructor(J){if(this.manager=J!==void 0?J:rH,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,K){$.load(J,Z,Q,K)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}a9.DEFAULT_MATERIAL_NAME="__DEFAULT";var d9={};class tH extends Error{constructor(J,Q){super(J);this.response=Q}}class Q$ extends a9{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=z9.get(`file:${J}`);if(K!==void 0){this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(K);this.manager.itemEnd(J)},0);return}if(d9[J]!==void 0){d9[J].push({onLoad:Q,onProgress:$,onError:Z});return}d9[J]=[],d9[J].push({onLoad:Q,onProgress:$,onError:Z});let W=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),Y=this.mimeType,X=this.responseType;fetch(W).then((H)=>{if(H.status===200||H.status===0){if(H.status===0)r0("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||H.body===void 0||H.body.getReader===void 0)return H;let U=d9[J],N=H.body.getReader(),F=H.headers.get("X-File-Size")||H.headers.get("Content-Length"),G=F?parseInt(F):0,E=G!==0,O=0,B=new ReadableStream({start(R){q();function q(){N.read().then(({done:M,value:P})=>{if(M)R.close();else{O+=P.byteLength;let V=new ProgressEvent("progress",{lengthComputable:E,loaded:O,total:G});for(let L=0,C=U.length;L<C;L++){let A=U[L];if(A.onProgress)A.onProgress(V)}R.enqueue(P),q()}},(M)=>{R.error(M)})}}});return new Response(B)}else throw new tH(`fetch for "${H.url}" responded with ${H.status}: ${H.statusText}`,H)}).then((H)=>{switch(X){case"arraybuffer":return H.arrayBuffer();case"blob":return H.blob();case"document":return H.text().then((U)=>{return new DOMParser().parseFromString(U,Y)});case"json":return H.json();default:if(Y==="")return H.text();else{let N=/charset="?([^;"\s]*)"?/i.exec(Y),F=N&&N[1]?N[1].toLowerCase():void 0,G=new TextDecoder(F);return H.arrayBuffer().then((E)=>G.decode(E))}}}).then((H)=>{z9.add(`file:${J}`,H);let U=d9[J];delete d9[J];for(let N=0,F=U.length;N<F;N++){let G=U[N];if(G.onLoad)G.onLoad(H)}}).catch((H)=>{let U=d9[J];if(U===void 0)throw this.manager.itemError(J),H;delete d9[J];for(let N=0,F=U.length;N<F;N++){let G=U[N];if(G.onError)G.onError(H)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var A6=new WeakMap;class QY extends a9{constructor(J){super(J)}load(J,Q,$,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=this,W=z9.get(`image:${J}`);if(W!==void 0){if(W.complete===!0)K.manager.itemStart(J),setTimeout(function(){if(Q)Q(W);K.manager.itemEnd(J)},0);else{let N=A6.get(W);if(N===void 0)N=[],A6.set(W,N);N.push({onLoad:Q,onError:Z})}return W}let Y=j6("img");function X(){if(U(),Q)Q(this);let N=A6.get(this)||[];for(let F=0;F<N.length;F++){let G=N[F];if(G.onLoad)G.onLoad(this)}A6.delete(this),K.manager.itemEnd(J)}function H(N){if(U(),Z)Z(N);z9.remove(`image:${J}`);let F=A6.get(this)||[];for(let G=0;G<F.length;G++){let E=F[G];if(E.onError)E.onError(N)}A6.delete(this),K.manager.itemError(J),K.manager.itemEnd(J)}function U(){Y.removeEventListener("load",X,!1),Y.removeEventListener("error",H,!1)}if(Y.addEventListener("load",X,!1),Y.addEventListener("error",H,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)Y.crossOrigin=this.crossOrigin}return z9.add(`image:${J}`,Y),K.manager.itemStart(J),Y.src=J,Y}}class hZ extends a9{constructor(J){super(J)}load(J,Q,$,Z){let K=new eJ,W=new QY(this.manager);return W.setCrossOrigin(this.crossOrigin),W.setPath(this.path),W.load(J,function(Y){if(K.image=Y,K.needsUpdate=!0,Q!==void 0)Q(K)},$,Z),K}}class i6 extends jJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new v0(J),this.intensity=Q}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}class xZ extends i6{constructor(J,Q,$){super(J,$);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jJ.DEFAULT_UP),this.updateMatrix(),this.groundColor=new v0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}toJSON(J){let Q=super.toJSON(J);return Q.object.groundColor=this.groundColor.getHex(),Q}}var gK=new QJ,lX=new _,mX=new _;class $${constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new F0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new QJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new iQ,this._frameExtents=new F0(1,1),this._viewportCount=1,this._viewports=[new mJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera;lX.setFromMatrixPosition(J.matrixWorld),Q.position.copy(lX),mX.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(mX),Q.updateMatrixWorld(),this._updateMatrix(Q,this.matrix,this._frustum)}_updateMatrix(J,Q,$,Z){gK.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),$.setFromProjectionMatrix(gK,J.coordinateSystem,J.reversedDepth);let K=this._frameExtents,W=Z?Z.z/K.x:1,Y=Z?Z.w/K.y:1,X=Z?Z.x/K.x:0,H=Z?Z.y/K.y:0;if(J.coordinateSystem===2001||J.reversedDepth)Q.set(0.5*W,0,0,0.5*W+X,0,0.5*Y,0,0.5*Y+H,0,0,1,0,0,0,0,1);else Q.set(0.5*W,0,0,0.5*W+X,0,0.5*Y,0,0.5*Y+H,0,0,0.5,0.5,0,0,0,1);Q.multiply(gK)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var $Z=new _,ZZ=new CJ,I9=new _;class gZ extends jJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new QJ,this.projectionMatrix=new QJ,this.projectionMatrixInverse=new QJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose($Z,ZZ,I9),I9.x===1&&I9.y===1&&I9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose($Z,ZZ,I9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose($Z,ZZ,I9),I9.x===1&&I9.y===1&&I9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose($Z,ZZ,I9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var W7=new _,uX=new F0,dX=new F0;class H8 extends gZ{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=w7*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(IQ*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return w7*2*Math.atan(Math.tan(IQ*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){W7.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(W7.x,W7.y).multiplyScalar(-J/W7.z),W7.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(W7.x,W7.y).multiplyScalar(-J/W7.z)}getViewSize(J,Q){return this.getViewBounds(J,uX,dX),Q.subVectors(dX,uX)}setViewOffset(J,Q,$,Z,K,W){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(IQ*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,K=-0.5*Z,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:X,fullHeight:H}=W;K+=W.offsetX*Z/X,Q-=W.offsetY*$/H,Z*=W.width/X,$*=W.height/H}let Y=this.filmOffset;if(Y!==0)K+=J*Y/this.getFilmWidth();this.projectionMatrix.makePerspective(K,K+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class eH extends $${constructor(){super(new H8(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=w7*2*J.angle*this.focus,Z=this.mapSize.width/this.mapSize.height*this.aspect,K=J.distance||Q.far;if($!==Q.fov||Z!==Q.aspect||K!==Q.far)Q.fov=$,Q.aspect=Z,Q.far=K,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this.aspect=J.aspect,this}toJSON(){let J=super.toJSON();return J.focus=this.focus,J.aspect=this.aspect,J}}class o6 extends i6{constructor(J,Q,$=0,Z=Math.PI/3,K=0,W=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(jJ.DEFAULT_UP),this.updateMatrix(),this.target=new jJ,this.distance=$,this.angle=Z,this.penumbra=K,this.decay=W,this.map=null,this.shadow=new eH}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);if(Q.object.distance=this.distance,Q.object.angle=this.angle,Q.object.decay=this.decay,Q.object.penumbra=this.penumbra,Q.object.target=this.target.uuid,this.map&&this.map.isTexture)Q.object.map=this.map.toJSON(J).uuid;return Q.object.shadow=this.shadow.toJSON(),Q}}class JU extends $${constructor(){super(new H8(90,1,0.5,500));this.isPointLightShadow=!0}}class r9 extends i6{constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new JU}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class t9 extends gZ{constructor(J=-1,Q=1,$=1,Z=-1,K=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=K,this.far=W,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,K,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,K=$-J,W=$+J,Y=Z+Q,X=Z-Q;if(this.view!==null&&this.view.enabled){let H=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;K+=H*this.view.offsetX,W=K+H*this.view.width,Y-=U*this.view.offsetY,X=Y-U*this.view.height}this.projectionMatrix.makeOrthographic(K,W,Y,X,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class QU extends $${constructor(){super(new t9(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class a6 extends i6{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jJ.DEFAULT_UP),this.updateMatrix(),this.target=new jJ,this.shadow=new QU}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class B7{static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}var pK=new WeakMap;class pZ extends a9{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")r0("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")r0("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(J){return this.options=J,this}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=this,W=z9.get(`image-bitmap:${J}`);if(W!==void 0){if(K.manager.itemStart(J),W.then){W.then((H)=>{if(pK.has(W)===!0){if(Z)Z(pK.get(W));K.manager.itemError(J),K.manager.itemEnd(J)}else{if(Q)Q(H);K.manager.itemEnd(J)}});return}setTimeout(function(){if(Q)Q(W);K.manager.itemEnd(J)},0);return}let Y={};Y.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",Y.headers=this.requestHeader,Y.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let X=fetch(J,Y).then(function(H){return H.blob()}).then(function(H){return createImageBitmap(H,Object.assign({},K.options,{colorSpaceConversion:"none"}))}).then(function(H){if(z9.add(`image-bitmap:${J}`,H),Q)Q(H);return K.manager.itemEnd(J),H}).catch(function(H){if(Z)Z(H);pK.set(X,H),z9.remove(`image-bitmap:${J}`),K.manager.itemError(J),K.manager.itemEnd(J)});z9.add(`image-bitmap:${J}`,X),K.manager.itemStart(J)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var _6=-90,T6=1;class $Y extends jJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new H8(_6,T6,J,Q);Z.layers=this.layers,this.add(Z);let K=new H8(_6,T6,J,Q);K.layers=this.layers,this.add(K);let W=new H8(_6,T6,J,Q);W.layers=this.layers,this.add(W);let Y=new H8(_6,T6,J,Q);Y.layers=this.layers,this.add(Y);let X=new H8(_6,T6,J,Q);X.layers=this.layers,this.add(X);let H=new H8(_6,T6,J,Q);H.layers=this.layers,this.add(H)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,K,W,Y,X]=Q;for(let H of Q)this.remove(H);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),K.up.set(0,0,-1),K.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),Y.up.set(0,1,0),Y.lookAt(0,0,1),X.up.set(0,1,0),X.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),K.up.set(0,0,1),K.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),Y.up.set(0,-1,0),Y.lookAt(0,0,1),X.up.set(0,-1,0),X.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let H of Q)this.add(H),H.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[K,W,Y,X,H,U]=this.children,N=J.getRenderTarget(),F=J.getActiveCubeFace(),G=J.getActiveMipmapLevel(),E=J.xr.enabled;J.xr.enabled=!1;let O=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let B=!1;if(J.isWebGLRenderer===!0)B=J.state.buffers.depth.getReversed();else B=J.reversedDepthBuffer;if(J.setRenderTarget($,0,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,1,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,2,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,3,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget($,4,Z),B&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),$.texture.generateMipmaps=O,J.setRenderTarget($,5,Z),B&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(N,F,G),J.xr.enabled=E,$.texture.needsPMREMUpdate=!0}}class ZY extends H8{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}class lZ{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(J){if(this._document=J,J.hidden!==void 0)this._pageVisibilityHandler=HG.bind(this),J.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(J){return this._timescale=J,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(J){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(J!==void 0?J:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function HG(){if(this._document.hidden===!1)this.reset()}class KY{constructor(J,Q,$){this.binding=J,this.valueSize=$;let Z,K,W;switch(Q){case"quaternion":Z=this._slerp,K=this._slerpAdditive,W=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array($*6),this._workIndex=5;break;case"string":case"bool":Z=this._select,K=this._select,W=this._setAdditiveIdentityOther,this.buffer=Array($*5);break;default:Z=this._lerp,K=this._lerpAdditive,W=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array($*5)}this._mixBufferRegion=Z,this._mixBufferRegionAdditive=K,this._setIdentity=W,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(J,Q){let $=this.buffer,Z=this.valueSize,K=J*Z+Z,W=this.cumulativeWeight;if(W===0){for(let Y=0;Y!==Z;++Y)$[K+Y]=$[Y];W=Q}else{W+=Q;let Y=Q/W;this._mixBufferRegion($,K,0,Y,Z)}this.cumulativeWeight=W}accumulateAdditive(J){let Q=this.buffer,$=this.valueSize,Z=$*this._addIndex;if(this.cumulativeWeightAdditive===0)this._setIdentity();this._mixBufferRegionAdditive(Q,Z,0,J,$),this.cumulativeWeightAdditive+=J}apply(J){let Q=this.valueSize,$=this.buffer,Z=J*Q+Q,K=this.cumulativeWeight,W=this.cumulativeWeightAdditive,Y=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,K<1){let X=Q*this._origIndex;this._mixBufferRegion($,Z,X,1-K,Q)}if(W>0)this._mixBufferRegionAdditive($,Z,this._addIndex*Q,1,Q);for(let X=Q,H=Q+Q;X!==H;++X)if($[X]!==$[X+Q]){Y.setValue($,Z);break}}saveOriginalState(){let J=this.binding,Q=this.buffer,$=this.valueSize,Z=$*this._origIndex;J.getValue(Q,Z);for(let K=$,W=Z;K!==W;++K)Q[K]=Q[Z+K%$];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let J=this.valueSize*3;this.binding.setValue(this.buffer,J)}_setAdditiveIdentityNumeric(){let J=this._addIndex*this.valueSize,Q=J+this.valueSize;for(let $=J;$<Q;$++)this.buffer[$]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let J=this._origIndex*this.valueSize,Q=this._addIndex*this.valueSize;for(let $=0;$<this.valueSize;$++)this.buffer[Q+$]=this.buffer[J+$]}_select(J,Q,$,Z,K){if(Z>=0.5)for(let W=0;W!==K;++W)J[Q+W]=J[$+W]}_slerp(J,Q,$,Z){CJ.slerpFlat(J,Q,J,Q,J,$,Z)}_slerpAdditive(J,Q,$,Z,K){let W=this._workIndex*K;CJ.multiplyQuaternionsFlat(J,W,J,Q,J,$),CJ.slerpFlat(J,Q,J,Q,J,W,Z)}_lerp(J,Q,$,Z,K){let W=1-Z;for(let Y=0;Y!==K;++Y){let X=Q+Y;J[X]=J[X]*W+J[$+Y]*Z}}_lerpAdditive(J,Q,$,Z,K){for(let W=0;W!==K;++W){let Y=Q+W;J[Y]=J[Y]+J[$+W]*Z}}}var WY="\\[\\]\\.:\\/",UG=new RegExp("["+WY+"]","g"),YY="[^"+WY+"]",NG="[^"+WY.replace("\\.","")+"]",GG=/((?:WC+[\/:])*)/.source.replace("WC",YY),FG=/(WCOD+)?/.source.replace("WCOD",NG),EG=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",YY),qG=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",YY),OG=new RegExp("^"+GG+FG+EG+qG+"$"),RG=["material","materials","bones","map"];class $U{constructor(J,Q,$){let Z=$||vJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,K=$.length;Z!==K;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class vJ{constructor(J,Q,$){this.path=Q,this.parsedPath=$||vJ.parseTrackName(Q),this.node=vJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new vJ(J,Q,$);else return new vJ.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(UG,"")}static parseTrackName(J){let Q=OG.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let K=$.nodeName.substring(Z+1);if(RG.indexOf(K)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=K}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(K){for(let W=0;W<K.length;W++){let Y=K[W];if(Y.name===Q||Y.uuid===Q)return Y;let X=$(Y.children);if(X)return X}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,K=Q.propertyIndex;if(!J)J=vJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){r0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let H=Q.objectIndex;switch($){case"materials":if(!J.material){$J("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){$J("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){$J("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===H){H=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){$J("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){$J("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){$J("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(H!==void 0){if(J[H]===void 0){$J("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[H]}}let W=J[Z];if(W===void 0){let H=Q.nodeName;$J("PropertyBinding: Trying to update property for track: "+H+"."+Z+" but it wasn't found.",J);return}let Y=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)Y=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)Y=this.Versioning.MatrixWorldNeedsUpdate;let X=this.BindingType.Direct;if(K!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){$J("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){$J("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[K]!==void 0)K=J.morphTargetDictionary[K]}X=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=K}else if(W.fromArray!==void 0&&W.toArray!==void 0)X=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))X=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=Z;this.getValue=this.GetterByBindingType[X],this.setValue=this.SetterByBindingTypeAndVersioning[X][Y]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}vJ.Composite=$U;vJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vJ.prototype.GetterByBindingType=[vJ.prototype._getValue_direct,vJ.prototype._getValue_array,vJ.prototype._getValue_arrayElement,vJ.prototype._getValue_toArray];vJ.prototype.SetterByBindingTypeAndVersioning=[[vJ.prototype._setValue_direct,vJ.prototype._setValue_direct_setNeedsUpdate,vJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vJ.prototype._setValue_array,vJ.prototype._setValue_array_setNeedsUpdate,vJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vJ.prototype._setValue_arrayElement,vJ.prototype._setValue_arrayElement_setNeedsUpdate,vJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vJ.prototype._setValue_fromArray,vJ.prototype._setValue_fromArray_setNeedsUpdate,vJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class XY{constructor(J,Q,$=null,Z=Q.blendMode){this._mixer=J,this._clip=Q,this._localRoot=$,this.blendMode=Z;let K=Q.tracks,W=K.length,Y=Array(W),X={endingStart:2400,endingEnd:2400};for(let H=0;H!==W;++H){let U=K[H].createInterpolant(null);Y[H]=U,U.settings=X}this._interpolantSettings=X,this._interpolants=Y,this._propertyBindings=Array(W),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(J){return this._startTime=J,this}setLoop(J,Q){return this.loop=J,this.repetitions=Q,this}setEffectiveWeight(J){return this.weight=J,this._effectiveWeight=this.enabled?J:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(J){return this._scheduleFading(J,0,1)}fadeOut(J){return this._scheduleFading(J,1,0)}crossFadeFrom(J,Q,$=!1){if(J.fadeOut(Q),this.fadeIn(Q),$===!0){let Z=this._clip.duration,K=J._clip.duration,W=K/Z,Y=Z/K;J._restoreTimeScale=J.timeScale,this._restoreTimeScale=this.timeScale,J.warp(1,W,Q),this.warp(Y,1,Q)}return this}crossFadeTo(J,Q,$=!1){return J.crossFadeFrom(this,Q,$)}stopFading(){let J=this._weightInterpolant;if(J!==null)this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this}setEffectiveTimeScale(J){return this.timeScale=J,this._effectiveTimeScale=this.paused?0:J,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(J){return this.timeScale=this._clip.duration/J,this.stopWarping()}syncWith(J){return this.time=J.time,this.timeScale=J.timeScale,this.stopWarping()}halt(J){return this.warp(this._effectiveTimeScale,0,J)}warp(J,Q,$){let Z=this._mixer,K=Z.time,W=this.timeScale,Y=this._timeScaleInterpolant;if(Y===null)Y=Z._lendControlInterpolant(),this._timeScaleInterpolant=Y;let{parameterPositions:X,sampleValues:H}=Y;return X[0]=K,X[1]=K+$,H[0]=J/W,H[1]=Q/W,this}stopWarping(){let J=this._timeScaleInterpolant;if(J!==null)this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(J,Q,$,Z){if(!this.enabled){this._updateWeight(J);return}let K=this._startTime;if(K!==null){let X=(J-K)*$;if(X<0||$===0)Q=0;else this._startTime=null,Q=$*X}Q*=this._updateTimeScale(J);let W=this._updateTime(Q),Y=this._updateWeight(J);if(Y>0){let X=this._interpolants,H=this._propertyBindings;switch(this.blendMode){case 2501:for(let U=0,N=X.length;U!==N;++U)X[U].evaluate(W),H[U].accumulateAdditive(Y);break;case 2500:default:for(let U=0,N=X.length;U!==N;++U)X[U].evaluate(W),H[U].accumulate(Z,Y)}}}_updateWeight(J){let Q=0;if(this.enabled){Q=this.weight;let $=this._weightInterpolant;if($!==null){let Z=$.evaluate(J)[0];if(Q*=Z,J>$.parameterPositions[1]){if(this.stopFading(),Z===0)this.enabled=!1}}}return this._effectiveWeight=Q,Q}_updateTimeScale(J){let Q=0;if(!this.paused){Q=this.timeScale;let $=this._timeScaleInterpolant;if($!==null){let Z=$.evaluate(J)[0];if(Q*=Z,J>$.parameterPositions[1]){if(Q===0)this.paused=!0;else{if(this._restoreTimeScale!==null)Q=this._restoreTimeScale;this.timeScale=Q}this.stopWarping()}}}return this._effectiveTimeScale=Q,Q}_updateTime(J){let Q=this._clip.duration,$=this.loop,Z=this.time+J,K=this._loopCount,W=$===2202;if(J===0){if(K===-1)return Z;return W&&(K&1)===1?Q-Z:Z}if($===2200){if(K===-1)this._loopCount=0,this._setEndings(!0,!0,!1);J:{if(Z>=Q)Z=Q;else if(Z<0)Z=0;else{this.time=Z;break J}if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;this.time=Z,this._mixer.dispatchEvent({type:"finished",action:this,direction:J<0?-1:1})}}else{if(K===-1)if(J>=0)K=0,this._setEndings(!0,this.repetitions===0,W);else this._setEndings(this.repetitions===0,!0,W);if(Z>=Q||Z<0){let Y=Math.floor(Z/Q);Z-=Q*Y,K+=Math.abs(Y);let X=this.repetitions-K;if(X<=0){if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;Z=J>0?Q:0,this.time=Z,this._mixer.dispatchEvent({type:"finished",action:this,direction:J>0?1:-1})}else{if(X===1){let H=J<0;this._setEndings(H,!H,W)}else this._setEndings(!1,!1,W);this._loopCount=K,this.time=Z,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:Y})}}else this._loopCount=K,this.time=Z;if(W&&(K&1)===1)return Q-Z}return Z}_setEndings(J,Q,$){let Z=this._interpolantSettings;if($)Z.endingStart=2401,Z.endingEnd=2401;else{if(J)Z.endingStart=this.zeroSlopeAtStart?2401:2400;else Z.endingStart=2402;if(Q)Z.endingEnd=this.zeroSlopeAtEnd?2401:2400;else Z.endingEnd=2402}}_scheduleFading(J,Q,$){let Z=this._mixer,K=Z.time,W=this._weightInterpolant;if(W===null)W=Z._lendControlInterpolant(),this._weightInterpolant=W;let{parameterPositions:Y,sampleValues:X}=W;return Y[0]=K,X[0]=Q,Y[1]=K+J,X[1]=$,this}}var LG=new Float32Array(1);class Z$ extends q9{constructor(J){super();if(this._root=J,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(J,Q){let $=J._localRoot||this._root,Z=J._clip.tracks,K=Z.length,W=J._propertyBindings,Y=J._interpolants,X=$.uuid,H=this._bindingsByRootAndName,U=H[X];if(U===void 0)U={},H[X]=U;for(let N=0;N!==K;++N){let F=Z[N],G=F.name,E=U[G];if(E!==void 0)++E.referenceCount,W[N]=E;else{if(E=W[N],E!==void 0){if(E._cacheIndex===null)++E.referenceCount,this._addInactiveBinding(E,X,G);continue}let O=Q&&Q._propertyBindings[N].binding.parsedPath;E=new KY(vJ.create($,G,O),F.ValueTypeName,F.getValueSize()),++E.referenceCount,this._addInactiveBinding(E,X,G),W[N]=E}Y[N].resultBuffer=E.buffer}}_activateAction(J){if(!this._isActiveAction(J)){if(J._cacheIndex===null){let $=(J._localRoot||this._root).uuid,Z=J._clip.uuid,K=this._actionsByClip[Z];this._bindAction(J,K&&K.knownActions[0]),this._addInactiveAction(J,Z,$)}let Q=J._propertyBindings;for(let $=0,Z=Q.length;$!==Z;++$){let K=Q[$];if(K.useCount++===0)this._lendBinding(K),K.saveOriginalState()}this._lendAction(J)}}_deactivateAction(J){if(this._isActiveAction(J)){let Q=J._propertyBindings;for(let $=0,Z=Q.length;$!==Z;++$){let K=Q[$];if(--K.useCount===0)K.restoreOriginalState(),this._takeBackBinding(K)}this._takeBackAction(J)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let J=this;this.stats={actions:{get total(){return J._actions.length},get inUse(){return J._nActiveActions}},bindings:{get total(){return J._bindings.length},get inUse(){return J._nActiveBindings}},controlInterpolants:{get total(){return J._controlInterpolants.length},get inUse(){return J._nActiveControlInterpolants}}}}_isActiveAction(J){let Q=J._cacheIndex;return Q!==null&&Q<this._nActiveActions}_addInactiveAction(J,Q,$){let Z=this._actions,K=this._actionsByClip,W=K[Q];if(W===void 0)W={knownActions:[J],actionByRoot:{}},J._byClipCacheIndex=0,K[Q]=W;else{let Y=W.knownActions;J._byClipCacheIndex=Y.length,Y.push(J)}J._cacheIndex=Z.length,Z.push(J),W.actionByRoot[$]=J}_removeInactiveAction(J){let Q=this._actions,$=Q[Q.length-1],Z=J._cacheIndex;$._cacheIndex=Z,Q[Z]=$,Q.pop(),J._cacheIndex=null;let K=J._clip.uuid,W=this._actionsByClip,Y=W[K],X=Y.knownActions,H=X[X.length-1],U=J._byClipCacheIndex;H._byClipCacheIndex=U,X[U]=H,X.pop(),J._byClipCacheIndex=null;let N=Y.actionByRoot,F=(J._localRoot||this._root).uuid;if(delete N[F],X.length===0)delete W[K];this._removeInactiveBindingsForAction(J)}_removeInactiveBindingsForAction(J){let Q=J._propertyBindings;for(let $=0,Z=Q.length;$!==Z;++$){let K=Q[$];if(--K.referenceCount===0)this._removeInactiveBinding(K)}}_lendAction(J){let Q=this._actions,$=J._cacheIndex,Z=this._nActiveActions++,K=Q[Z];J._cacheIndex=Z,Q[Z]=J,K._cacheIndex=$,Q[$]=K}_takeBackAction(J){let Q=this._actions,$=J._cacheIndex,Z=--this._nActiveActions,K=Q[Z];J._cacheIndex=Z,Q[Z]=J,K._cacheIndex=$,Q[$]=K}_addInactiveBinding(J,Q,$){let Z=this._bindingsByRootAndName,K=this._bindings,W=Z[Q];if(W===void 0)W={},Z[Q]=W;W[$]=J,J._cacheIndex=K.length,K.push(J)}_removeInactiveBinding(J){let Q=this._bindings,$=J.binding,Z=$.rootNode.uuid,K=$.path,W=this._bindingsByRootAndName,Y=W[Z],X=Q[Q.length-1],H=J._cacheIndex;if(X._cacheIndex=H,Q[H]=X,Q.pop(),delete Y[K],Object.keys(Y).length===0)delete W[Z]}_lendBinding(J){let Q=this._bindings,$=J._cacheIndex,Z=this._nActiveBindings++,K=Q[Z];J._cacheIndex=Z,Q[Z]=J,K._cacheIndex=$,Q[$]=K}_takeBackBinding(J){let Q=this._bindings,$=J._cacheIndex,Z=--this._nActiveBindings,K=Q[Z];J._cacheIndex=Z,Q[Z]=J,K._cacheIndex=$,Q[$]=K}_lendControlInterpolant(){let J=this._controlInterpolants,Q=this._nActiveControlInterpolants++,$=J[Q];if($===void 0)$=new fZ(new Float32Array(2),new Float32Array(2),1,LG),$.__cacheIndex=Q,J[Q]=$;return $}_takeBackControlInterpolant(J){let Q=this._controlInterpolants,$=J.__cacheIndex,Z=--this._nActiveControlInterpolants,K=Q[Z];J.__cacheIndex=Z,Q[Z]=J,K.__cacheIndex=$,Q[$]=K}clipAction(J,Q,$){let Z=Q||this._root,K=Z.uuid,W=typeof J==="string"?f6.findByName(Z,J):J,Y=W!==null?W.uuid:J,X=this._actionsByClip[Y],H=null;if($===void 0)if(W!==null)$=W.blendMode;else $=2500;if(X!==void 0){let N=X.actionByRoot[K];if(N!==void 0&&N.blendMode===$)return N;if(H=X.knownActions[0],W===null)W=H._clip}if(W===null)return null;let U=new XY(this,W,Q,$);return this._bindAction(U,H),this._addInactiveAction(U,Y,K),U}existingAction(J,Q){let $=Q||this._root,Z=$.uuid,K=typeof J==="string"?f6.findByName($,J):J,W=K?K.uuid:J,Y=this._actionsByClip[W];if(Y!==void 0)return Y.actionByRoot[Z]||null;return null}stopAllAction(){let J=this._actions,Q=this._nActiveActions;for(let $=Q-1;$>=0;--$)J[$].stop();return this}update(J){J*=this.timeScale;let Q=this._actions,$=this._nActiveActions,Z=this.time+=J,K=Math.sign(J),W=this._accuIndex^=1;for(let H=0;H!==$;++H)Q[H]._update(Z,J,K,W);let Y=this._bindings,X=this._nActiveBindings;for(let H=0;H!==X;++H)Y[H].apply(W);return this}setTime(J){this.time=0;for(let Q=0;Q<this._actions.length;Q++)this._actions[Q].time=0;return this.update(J)}getRoot(){return this._root}uncacheClip(J){let Q=this._actions,$=J.uuid,Z=this._actionsByClip,K=Z[$];if(K!==void 0){let W=K.knownActions;for(let Y=0,X=W.length;Y!==X;++Y){let H=W[Y];this._deactivateAction(H);let U=H._cacheIndex,N=Q[Q.length-1];H._cacheIndex=null,H._byClipCacheIndex=null,N._cacheIndex=U,Q[U]=N,Q.pop(),this._removeInactiveBindingsForAction(H)}delete Z[$]}}uncacheRoot(J){let Q=J.uuid,$=this._actionsByClip;for(let W in $){let Y=$[W].actionByRoot,X=Y[Q];if(X!==void 0)this._deactivateAction(X),this._removeInactiveAction(X)}let Z=this._bindingsByRootAndName,K=Z[Q];if(K!==void 0)for(let W in K){let Y=K[W];Y.restoreOriginalState(),this._removeInactiveBinding(Y)}}uncacheAction(J,Q){let $=this.existingAction(J,Q);if($!==null)this._deactivateAction($),this._removeInactiveAction($)}}class mZ{constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,r0("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let Q=performance.now();J=(Q-this.oldTime)/1000,this.oldTime=Q,this.elapsedTime+=J}return J}}class K${constructor(J=1,Q=0,$=0){this.radius=J,this.phi=Q,this.theta=$}set(J,Q,$){return this.radius=J,this.phi=Q,this.theta=$,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=GJ(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){if(this.radius=Math.sqrt(J*J+Q*Q+$*$),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,$),this.phi=Math.acos(GJ(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class HY{static{HY.prototype.isMatrix2=!0}constructor(J,Q,$,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,Z){let K=this.elements;return K[0]=J,K[2]=Q,K[1]=$,K[3]=Z,this}}class uZ extends q9{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function UY(J,Q,$,Z){let K=VG(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/K.components*K.byteLength;case 1029:return J*Q/K.components*K.byteLength;case 1030:return J*Q*2/K.components*K.byteLength;case 1031:return J*Q*2/K.components*K.byteLength;case 1022:return J*Q*3/K.components*K.byteLength;case 1023:return J*Q*4/K.components*K.byteLength;case 1033:return J*Q*4/K.components*K.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function VG(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)r0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function PU(){let J=null,Q=!1,$=null,Z=null;function K(W,Y){Z=J.requestAnimationFrame(K),$(W,Y)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;Z=J.requestAnimationFrame(K),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);Q=!1},setAnimationLoop:function(W){$=W},setContext:function(W){J=W}}}function DG(J){let Q=new WeakMap;function $(X,H){let{array:U,usage:N}=X,F=U.byteLength,G=J.createBuffer();J.bindBuffer(H,G),J.bufferData(H,U,N),X.onUploadCallback();let E;if(U instanceof Float32Array)E=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)E=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(X.isFloat16BufferAttribute)E=J.HALF_FLOAT;else E=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)E=J.SHORT;else if(U instanceof Uint32Array)E=J.UNSIGNED_INT;else if(U instanceof Int32Array)E=J.INT;else if(U instanceof Int8Array)E=J.BYTE;else if(U instanceof Uint8Array)E=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)E=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:G,type:E,bytesPerElement:U.BYTES_PER_ELEMENT,version:X.version,size:F}}function Z(X,H,U){let{array:N,updateRanges:F}=H;if(J.bindBuffer(U,X),F.length===0)J.bufferSubData(U,0,N);else{F.sort((E,O)=>E.start-O.start);let G=0;for(let E=1;E<F.length;E++){let O=F[G],B=F[E];if(B.start<=O.start+O.count+1)O.count=Math.max(O.count,B.start+B.count-O.start);else++G,F[G]=B}F.length=G+1;for(let E=0,O=F.length;E<O;E++){let B=F[E];J.bufferSubData(U,B.start*N.BYTES_PER_ELEMENT,N,B.start,B.count)}H.clearUpdateRanges()}H.onUploadCallback()}function K(X){if(X.isInterleavedBufferAttribute)X=X.data;return Q.get(X)}function W(X){if(X.isInterleavedBufferAttribute)X=X.data;let H=Q.get(X);if(H)J.deleteBuffer(H.buffer),Q.delete(X)}function Y(X,H){if(X.isInterleavedBufferAttribute)X=X.data;if(X.isGLBufferAttribute){let N=Q.get(X);if(!N||N.version<X.version)Q.set(X,{buffer:X.buffer,type:X.type,bytesPerElement:X.elementSize,version:X.version});return}let U=Q.get(X);if(U===void 0)Q.set(X,$(X,H));else if(U.version<X.version){if(U.size!==X.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,X,H),U.version=X.version}}return{get:K,remove:W,update:Y}}var BG=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,MG=`#ifdef USE_ALPHAHASH
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
#endif`,kG=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CG=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PG=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IG=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zG=`#ifdef USE_AOMAP
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
#endif`,AG=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_G=`#ifdef USE_BATCHING
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
#endif`,TG=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,SG=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wG=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jG=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yG=`#ifdef USE_IRIDESCENCE
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
#endif`,vG=`#ifdef USE_BUMPMAP
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
#endif`,fG=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bG=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hG=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xG=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gG=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pG=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lG=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mG=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,uG=`#define PI 3.141592653589793
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
} // validated`,dG=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cG=`vec3 transformedNormal = objectNormal;
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
#endif`,nG=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sG=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iG=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oG=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aG="gl_FragColor = linearToOutputTexel( gl_FragColor );",rG=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tG=`#ifdef USE_ENVMAP
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
#endif`,eG=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,JF=`#ifdef USE_ENVMAP
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
#endif`,QF=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$F=`#ifdef USE_ENVMAP
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
#endif`,ZF=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KF=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WF=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YF=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XF=`#ifdef USE_GRADIENTMAP
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
}`,HF=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UF=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GF=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,FF=`#ifdef USE_ENVMAP
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
#endif`,EF=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OF=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LF=`PhysicalMaterial material;
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
#endif`,VF=`uniform sampler2D dfgLUT;
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
}`,DF=`
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
#endif`,BF=`#if defined( RE_IndirectDiffuse )
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
#endif`,MF=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kF=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,CF=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PF=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IF=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zF=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AF=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_F=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TF=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,SF=`#if defined( USE_POINTS_UV )
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
#endif`,wF=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jF=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yF=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vF=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fF=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bF=`#ifdef USE_MORPHTARGETS
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
#endif`,hF=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xF=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gF=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mF=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,uF=`#ifdef USE_NORMALMAP
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
#endif`,dF=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cF=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nF=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sF=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iF=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oF=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,aF=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rF=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tF=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eF=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$E=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,WE=`float getShadowMask() {
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
}`,YE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XE=`#ifdef USE_SKINNING
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
#endif`,HE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UE=`#ifdef USE_SKINNING
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
#endif`,NE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qE=`#ifdef USE_TRANSMISSION
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
#endif`,OE=`#ifdef USE_TRANSMISSION
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
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,BE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ME=`uniform sampler2D t2D;
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
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,PE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`#include <common>
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
}`,AE=`#if DEPTH_PACKING == 3200
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
}`,_E=`#define DISTANCE
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
}`,TE=`#define DISTANCE
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
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jE=`uniform float scale;
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
}`,yE=`uniform vec3 diffuse;
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
}`,vE=`#include <common>
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
}`,fE=`uniform vec3 diffuse;
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
}`,bE=`#define LAMBERT
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
}`,hE=`#define LAMBERT
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
}`,xE=`#define MATCAP
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
}`,gE=`#define MATCAP
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
}`,pE=`#define NORMAL
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
}`,lE=`#define NORMAL
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
}`,mE=`#define PHONG
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
}`,uE=`#define PHONG
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
}`,dE=`#define STANDARD
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
}`,cE=`#define STANDARD
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
}`,nE=`#define TOON
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
}`,sE=`#define TOON
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
}`,iE=`uniform float size;
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
}`,oE=`uniform vec3 diffuse;
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
}`,aE=`#include <common>
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
}`,rE=`uniform vec3 color;
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
}`,tE=`uniform float rotation;
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
}`,eE=`uniform vec3 diffuse;
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
}`,OJ={alphahash_fragment:BG,alphahash_pars_fragment:MG,alphamap_fragment:kG,alphamap_pars_fragment:CG,alphatest_fragment:PG,alphatest_pars_fragment:IG,aomap_fragment:zG,aomap_pars_fragment:AG,batching_pars_vertex:_G,batching_vertex:TG,begin_vertex:SG,beginnormal_vertex:wG,bsdfs:jG,iridescence_fragment:yG,bumpmap_pars_fragment:vG,clipping_planes_fragment:fG,clipping_planes_pars_fragment:bG,clipping_planes_pars_vertex:hG,clipping_planes_vertex:xG,color_fragment:gG,color_pars_fragment:pG,color_pars_vertex:lG,color_vertex:mG,common:uG,cube_uv_reflection_fragment:dG,defaultnormal_vertex:cG,displacementmap_pars_vertex:nG,displacementmap_vertex:sG,emissivemap_fragment:iG,emissivemap_pars_fragment:oG,colorspace_fragment:aG,colorspace_pars_fragment:rG,envmap_fragment:tG,envmap_common_pars_fragment:eG,envmap_pars_fragment:JF,envmap_pars_vertex:QF,envmap_physical_pars_fragment:FF,envmap_vertex:$F,fog_vertex:ZF,fog_pars_vertex:KF,fog_fragment:WF,fog_pars_fragment:YF,gradientmap_pars_fragment:XF,lightmap_pars_fragment:HF,lights_lambert_fragment:UF,lights_lambert_pars_fragment:NF,lights_pars_begin:GF,lights_toon_fragment:EF,lights_toon_pars_fragment:qF,lights_phong_fragment:OF,lights_phong_pars_fragment:RF,lights_physical_fragment:LF,lights_physical_pars_fragment:VF,lights_fragment_begin:DF,lights_fragment_maps:BF,lights_fragment_end:MF,lightprobes_pars_fragment:kF,logdepthbuf_fragment:CF,logdepthbuf_pars_fragment:PF,logdepthbuf_pars_vertex:IF,logdepthbuf_vertex:zF,map_fragment:AF,map_pars_fragment:_F,map_particle_fragment:TF,map_particle_pars_fragment:SF,metalnessmap_fragment:wF,metalnessmap_pars_fragment:jF,morphinstance_vertex:yF,morphcolor_vertex:vF,morphnormal_vertex:fF,morphtarget_pars_vertex:bF,morphtarget_vertex:hF,normal_fragment_begin:xF,normal_fragment_maps:gF,normal_pars_fragment:pF,normal_pars_vertex:lF,normal_vertex:mF,normalmap_pars_fragment:uF,clearcoat_normal_fragment_begin:dF,clearcoat_normal_fragment_maps:cF,clearcoat_pars_fragment:nF,iridescence_pars_fragment:sF,opaque_fragment:iF,packing:oF,premultiplied_alpha_fragment:aF,project_vertex:rF,dithering_fragment:tF,dithering_pars_fragment:eF,roughnessmap_fragment:JE,roughnessmap_pars_fragment:QE,shadowmap_pars_fragment:$E,shadowmap_pars_vertex:ZE,shadowmap_vertex:KE,shadowmask_pars_fragment:WE,skinbase_vertex:YE,skinning_pars_vertex:XE,skinning_vertex:HE,skinnormal_vertex:UE,specularmap_fragment:NE,specularmap_pars_fragment:GE,tonemapping_fragment:FE,tonemapping_pars_fragment:EE,transmission_fragment:qE,transmission_pars_fragment:OE,uv_pars_fragment:RE,uv_pars_vertex:LE,uv_vertex:VE,worldpos_vertex:DE,background_vert:BE,background_frag:ME,backgroundCube_vert:kE,backgroundCube_frag:CE,cube_vert:PE,cube_frag:IE,depth_vert:zE,depth_frag:AE,distance_vert:_E,distance_frag:TE,equirect_vert:SE,equirect_frag:wE,linedashed_vert:jE,linedashed_frag:yE,meshbasic_vert:vE,meshbasic_frag:fE,meshlambert_vert:bE,meshlambert_frag:hE,meshmatcap_vert:xE,meshmatcap_frag:gE,meshnormal_vert:pE,meshnormal_frag:lE,meshphong_vert:mE,meshphong_frag:uE,meshphysical_vert:dE,meshphysical_frag:cE,meshtoon_vert:nE,meshtoon_frag:sE,points_vert:iE,points_frag:oE,shadow_vert:aE,shadow_frag:rE,sprite_vert:tE,sprite_frag:eE},h0={common:{diffuse:{value:new v0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new XJ},alphaMap:{value:null},alphaMapTransform:{value:new XJ},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new XJ}},envmap:{envMap:{value:null},envMapRotation:{value:new XJ},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new XJ}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new XJ}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new XJ},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new XJ},normalScale:{value:new F0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new XJ},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new XJ}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new XJ}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new XJ}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new v0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new _},probesMax:{value:new _},probesResolution:{value:new _}},points:{diffuse:{value:new v0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new XJ},alphaTest:{value:0},uvTransform:{value:new XJ}},sprite:{diffuse:{value:new v0(16777215)},opacity:{value:1},center:{value:new F0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new XJ},alphaMap:{value:null},alphaMapTransform:{value:new XJ},alphaTest:{value:0}}},v9={basic:{uniforms:k8([h0.common,h0.specularmap,h0.envmap,h0.aomap,h0.lightmap,h0.fog]),vertexShader:OJ.meshbasic_vert,fragmentShader:OJ.meshbasic_frag},lambert:{uniforms:k8([h0.common,h0.specularmap,h0.envmap,h0.aomap,h0.lightmap,h0.emissivemap,h0.bumpmap,h0.normalmap,h0.displacementmap,h0.fog,h0.lights,{emissive:{value:new v0(0)},envMapIntensity:{value:1}}]),vertexShader:OJ.meshlambert_vert,fragmentShader:OJ.meshlambert_frag},phong:{uniforms:k8([h0.common,h0.specularmap,h0.envmap,h0.aomap,h0.lightmap,h0.emissivemap,h0.bumpmap,h0.normalmap,h0.displacementmap,h0.fog,h0.lights,{emissive:{value:new v0(0)},specular:{value:new v0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:OJ.meshphong_vert,fragmentShader:OJ.meshphong_frag},standard:{uniforms:k8([h0.common,h0.envmap,h0.aomap,h0.lightmap,h0.emissivemap,h0.bumpmap,h0.normalmap,h0.displacementmap,h0.roughnessmap,h0.metalnessmap,h0.fog,h0.lights,{emissive:{value:new v0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:OJ.meshphysical_vert,fragmentShader:OJ.meshphysical_frag},toon:{uniforms:k8([h0.common,h0.aomap,h0.lightmap,h0.emissivemap,h0.bumpmap,h0.normalmap,h0.displacementmap,h0.gradientmap,h0.fog,h0.lights,{emissive:{value:new v0(0)}}]),vertexShader:OJ.meshtoon_vert,fragmentShader:OJ.meshtoon_frag},matcap:{uniforms:k8([h0.common,h0.bumpmap,h0.normalmap,h0.displacementmap,h0.fog,{matcap:{value:null}}]),vertexShader:OJ.meshmatcap_vert,fragmentShader:OJ.meshmatcap_frag},points:{uniforms:k8([h0.points,h0.fog]),vertexShader:OJ.points_vert,fragmentShader:OJ.points_frag},dashed:{uniforms:k8([h0.common,h0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:OJ.linedashed_vert,fragmentShader:OJ.linedashed_frag},depth:{uniforms:k8([h0.common,h0.displacementmap]),vertexShader:OJ.depth_vert,fragmentShader:OJ.depth_frag},normal:{uniforms:k8([h0.common,h0.bumpmap,h0.normalmap,h0.displacementmap,{opacity:{value:1}}]),vertexShader:OJ.meshnormal_vert,fragmentShader:OJ.meshnormal_frag},sprite:{uniforms:k8([h0.sprite,h0.fog]),vertexShader:OJ.sprite_vert,fragmentShader:OJ.sprite_frag},background:{uniforms:{uvTransform:{value:new XJ},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:OJ.background_vert,fragmentShader:OJ.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new XJ}},vertexShader:OJ.backgroundCube_vert,fragmentShader:OJ.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:OJ.cube_vert,fragmentShader:OJ.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:OJ.equirect_vert,fragmentShader:OJ.equirect_frag},distance:{uniforms:k8([h0.common,h0.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:OJ.distance_vert,fragmentShader:OJ.distance_frag},shadow:{uniforms:k8([h0.lights,h0.fog,{color:{value:new v0(0)},opacity:{value:1}}]),vertexShader:OJ.shadow_vert,fragmentShader:OJ.shadow_frag}};v9.physical={uniforms:k8([v9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new XJ},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new XJ},clearcoatNormalScale:{value:new F0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new XJ},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new XJ},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new XJ},sheen:{value:0},sheenColor:{value:new v0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new XJ},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new XJ},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new XJ},transmissionSamplerSize:{value:new F0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new XJ},attenuationDistance:{value:0},attenuationColor:{value:new v0(0)},specularColor:{value:new v0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new XJ},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new XJ},anisotropyVector:{value:new F0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new XJ}}]),vertexShader:OJ.meshphysical_vert,fragmentShader:OJ.meshphysical_frag};var dZ={r:0,b:0,g:0},J1=new QJ,IU=new XJ;IU.set(-1,0,0,0,1,0,0,0,1);function Q1(J,Q,$,Z,K,W){let Y=new v0(0),X=K===!0?0:1,H,U,N=null,F=0,G=null;function E(M){let P=M.isScene===!0?M.background:null;if(P&&P.isTexture){let V=M.backgroundBlurriness>0;P=Q.get(P,V)}return P}function O(M){let P=!1,V=E(M);if(V===null)R(Y,X);else if(V&&V.isColor)R(V,1),P=!0;let L=J.xr.getEnvironmentBlendMode();if(L==="additive")$.buffers.color.setClear(0,0,0,1,W);else if(L==="alpha-blend")$.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||P)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function B(M,P){let V=E(P);if(V&&(V.isCubeTexture||V.mapping===pQ)){if(U===void 0)U=new P0(new TJ(1,1,1),new tJ({name:"BackgroundCubeMaterial",uniforms:s7(v9.backgroundCube.uniforms),vertexShader:v9.backgroundCube.vertexShader,fragmentShader:v9.backgroundCube.fragmentShader,side:D8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(L,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(U);if(U.material.uniforms.envMap.value=V,U.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(J1.makeRotationFromEuler(P.backgroundRotation)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(IU);if(U.material.toneMapped=EJ.getTransfer(V.colorSpace)!==uJ,N!==V||F!==V.version||G!==J.toneMapping)U.material.needsUpdate=!0,N=V,F=V.version,G=J.toneMapping;U.layers.enableAll(),M.unshift(U,U.geometry,U.material,0,0,null)}else if(V&&V.isTexture){if(H===void 0)H=new P0(new qJ(2,2),new tJ({name:"BackgroundMaterial",uniforms:s7(v9.background.uniforms),vertexShader:v9.background.vertexShader,fragmentShader:v9.background.fragmentShader,side:G7,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),Object.defineProperty(H.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(H);if(H.material.uniforms.t2D.value=V,H.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,H.material.toneMapped=EJ.getTransfer(V.colorSpace)!==uJ,V.matrixAutoUpdate===!0)V.updateMatrix();if(H.material.uniforms.uvTransform.value.copy(V.matrix),N!==V||F!==V.version||G!==J.toneMapping)H.material.needsUpdate=!0,N=V,F=V.version,G=J.toneMapping;H.layers.enableAll(),M.unshift(H,H.geometry,H.material,0,0,null)}}function R(M,P){M.getRGB(dZ,sW(J)),$.buffers.color.setClear(dZ.r,dZ.g,dZ.b,P,W)}function q(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0}return{getClearColor:function(){return Y},setClearColor:function(M,P=1){Y.set(M),X=P,R(Y,X)},getClearAlpha:function(){return X},setClearAlpha:function(M){X=M,R(Y,X)},render:O,addToRenderList:B,dispose:q}}function $1(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},K=G(null),W=K,Y=!1;function X(f,u,$0,y,j){let g=!1,v=F(f,y,$0,u);if(W!==v)W=v,U(W.object);if(g=E(f,y,$0,j),g)O(f,y,$0,j);if(j!==null)Q.update(j,J.ELEMENT_ARRAY_BUFFER);if(g||Y){if(Y=!1,V(f,u,$0,y),j!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(j).buffer)}}function H(){return J.createVertexArray()}function U(f){return J.bindVertexArray(f)}function N(f){return J.deleteVertexArray(f)}function F(f,u,$0,y){let j=y.wireframe===!0,g=Z[u.id];if(g===void 0)g={},Z[u.id]=g;let v=f.isInstancedMesh===!0?f.id:0,i=g[v];if(i===void 0)i={},g[v]=i;let x=i[$0.id];if(x===void 0)x={},i[$0.id]=x;let a=x[j];if(a===void 0)a=G(H()),x[j]=a;return a}function G(f){let u=[],$0=[],y=[];for(let j=0;j<$;j++)u[j]=0,$0[j]=0,y[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:u,enabledAttributes:$0,attributeDivisors:y,object:f,attributes:{},index:null}}function E(f,u,$0,y){let j=W.attributes,g=u.attributes,v=0,i=$0.getAttributes();for(let x in i)if(i[x].location>=0){let Q0=j[x],B0=g[x];if(B0===void 0){if(x==="instanceMatrix"&&f.instanceMatrix)B0=f.instanceMatrix;if(x==="instanceColor"&&f.instanceColor)B0=f.instanceColor}if(Q0===void 0)return!0;if(Q0.attribute!==B0)return!0;if(B0&&Q0.data!==B0.data)return!0;v++}if(W.attributesNum!==v)return!0;if(W.index!==y)return!0;return!1}function O(f,u,$0,y){let j={},g=u.attributes,v=0,i=$0.getAttributes();for(let x in i)if(i[x].location>=0){let Q0=g[x];if(Q0===void 0){if(x==="instanceMatrix"&&f.instanceMatrix)Q0=f.instanceMatrix;if(x==="instanceColor"&&f.instanceColor)Q0=f.instanceColor}let B0={};if(B0.attribute=Q0,Q0&&Q0.data)B0.data=Q0.data;j[x]=B0,v++}W.attributes=j,W.attributesNum=v,W.index=y}function B(){let f=W.newAttributes;for(let u=0,$0=f.length;u<$0;u++)f[u]=0}function R(f){q(f,0)}function q(f,u){let{newAttributes:$0,enabledAttributes:y,attributeDivisors:j}=W;if($0[f]=1,y[f]===0)J.enableVertexAttribArray(f),y[f]=1;if(j[f]!==u)J.vertexAttribDivisor(f,u),j[f]=u}function M(){let{newAttributes:f,enabledAttributes:u}=W;for(let $0=0,y=u.length;$0<y;$0++)if(u[$0]!==f[$0])J.disableVertexAttribArray($0),u[$0]=0}function P(f,u,$0,y,j,g,v){if(v===!0)J.vertexAttribIPointer(f,u,$0,j,g);else J.vertexAttribPointer(f,u,$0,y,j,g)}function V(f,u,$0,y){B();let j=y.attributes,g=$0.getAttributes(),v=u.defaultAttributeValues;for(let i in g){let x=g[i];if(x.location>=0){let a=j[i];if(a===void 0){if(i==="instanceMatrix"&&f.instanceMatrix)a=f.instanceMatrix;if(i==="instanceColor"&&f.instanceColor)a=f.instanceColor}if(a!==void 0){let{normalized:Q0,itemSize:B0}=a,D0=Q.get(a);if(D0===void 0)continue;let{buffer:g0,type:c0,bytesPerElement:W0}=D0,w=c0===J.INT||c0===J.UNSIGNED_INT||a.gpuType===oK;if(a.isInterleavedBufferAttribute){let l=a.data,n=l.stride,K0=a.offset;if(l.isInstancedInterleavedBuffer){for(let t=0;t<x.locationSize;t++)q(x.location+t,l.meshPerAttribute);if(f.isInstancedMesh!==!0&&y._maxInstanceCount===void 0)y._maxInstanceCount=l.meshPerAttribute*l.count}else for(let t=0;t<x.locationSize;t++)R(x.location+t);J.bindBuffer(J.ARRAY_BUFFER,g0);for(let t=0;t<x.locationSize;t++)P(x.location+t,B0/x.locationSize,c0,Q0,n*W0,(K0+B0/x.locationSize*t)*W0,w)}else{if(a.isInstancedBufferAttribute){for(let l=0;l<x.locationSize;l++)q(x.location+l,a.meshPerAttribute);if(f.isInstancedMesh!==!0&&y._maxInstanceCount===void 0)y._maxInstanceCount=a.meshPerAttribute*a.count}else for(let l=0;l<x.locationSize;l++)R(x.location+l);J.bindBuffer(J.ARRAY_BUFFER,g0);for(let l=0;l<x.locationSize;l++)P(x.location+l,B0/x.locationSize,c0,Q0,B0*W0,B0/x.locationSize*l*W0,w)}}else if(v!==void 0){let Q0=v[i];if(Q0!==void 0)switch(Q0.length){case 2:J.vertexAttrib2fv(x.location,Q0);break;case 3:J.vertexAttrib3fv(x.location,Q0);break;case 4:J.vertexAttrib4fv(x.location,Q0);break;default:J.vertexAttrib1fv(x.location,Q0)}}}}M()}function L(){I();for(let f in Z){let u=Z[f];for(let $0 in u){let y=u[$0];for(let j in y){let g=y[j];for(let v in g)N(g[v].object),delete g[v];delete y[j]}}delete Z[f]}}function C(f){if(Z[f.id]===void 0)return;let u=Z[f.id];for(let $0 in u){let y=u[$0];for(let j in y){let g=y[j];for(let v in g)N(g[v].object),delete g[v];delete y[j]}}delete Z[f.id]}function A(f){for(let u in Z){let $0=Z[u];for(let y in $0){let j=$0[y];if(j[f.id]===void 0)continue;let g=j[f.id];for(let v in g)N(g[v].object),delete g[v];delete j[f.id]}}}function D(f){for(let u in Z){let $0=Z[u],y=f.isInstancedMesh===!0?f.id:0,j=$0[y];if(j===void 0)continue;for(let g in j){let v=j[g];for(let i in v)N(v[i].object),delete v[i];delete j[g]}if(delete $0[y],Object.keys($0).length===0)delete Z[u]}}function I(){if(d(),Y=!0,W===K)return;W=K,U(W.object)}function d(){K.geometry=null,K.program=null,K.wireframe=!1}return{setup:X,reset:I,resetDefaultState:d,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfObject:D,releaseStatesOfProgram:A,initAttributes:B,enableAttribute:R,disableUnusedAttributes:M}}function Z1(J,Q,$){let Z;function K(H){Z=H}function W(H,U){J.drawArrays(Z,H,U),$.update(U,Z,1)}function Y(H,U,N){if(N===0)return;J.drawArraysInstanced(Z,H,U,N),$.update(U,Z,N)}function X(H,U,N){if(N===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,H,0,U,0,N);let G=0;for(let E=0;E<N;E++)G+=U[E];$.update(G,Z,1)}this.setMode=K,this.render=W,this.renderInstances=Y,this.renderMultiDraw=X}function K1(J,Q,$,Z){let K;function W(){if(K!==void 0)return K;if(Q.has("EXT_texture_filter_anisotropic")===!0){let A=Q.get("EXT_texture_filter_anisotropic");K=J.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else K=0;return K}function Y(A){if(A!==T9&&Z.convert(A)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function X(A){let D=A===O8&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(A!==E9&&A!==n9&&!D&&Z.convert(A)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function H(A){if(A==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";A="mediump"}if(A==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",N=H(U);if(N!==U)r0("WebGLRenderer:",U,"not supported, using",N,"instead."),U=N;let F=$.logarithmicDepthBuffer===!0,G=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&G===!1)r0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let E=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),O=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),B=J.getParameter(J.MAX_TEXTURE_SIZE),R=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),q=J.getParameter(J.MAX_VERTEX_ATTRIBS),M=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),P=J.getParameter(J.MAX_VARYING_VECTORS),V=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),L=J.getParameter(J.MAX_SAMPLES),C=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:H,textureFormatReadable:Y,textureTypeReadable:X,precision:U,logarithmicDepthBuffer:F,reversedDepthBuffer:G,maxTextures:E,maxVertexTextures:O,maxTextureSize:B,maxCubemapSize:R,maxAttributes:q,maxVertexUniforms:M,maxVaryings:P,maxFragmentUniforms:V,maxSamples:L,samples:C}}function W1(J){let Q=this,$=null,Z=0,K=!1,W=!1,Y=new s8,X=new XJ,H={value:null,needsUpdate:!1};this.uniform=H,this.numPlanes=0,this.numIntersection=0,this.init=function(F,G){let E=F.length!==0||G||Z!==0||K;return K=G,Z=F.length,E},this.beginShadows=function(){W=!0,N(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(F,G){$=N(F,G,0)},this.setState=function(F,G,E){let{clippingPlanes:O,clipIntersection:B,clipShadows:R}=F,q=J.get(F);if(!K||O===null||O.length===0||W&&!R)if(W)N(null);else U();else{let M=W?0:Z,P=M*4,V=q.clippingState||null;H.value=V,V=N(O,G,P,E);for(let L=0;L!==P;++L)V[L]=$[L];q.clippingState=V,this.numIntersection=B?this.numPlanes:0,this.numPlanes+=M}};function U(){if(H.value!==$)H.value=$,H.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function N(F,G,E,O){let B=F!==null?F.length:0,R=null;if(B!==0){if(R=H.value,O!==!0||R===null){let q=E+B*4,M=G.matrixWorldInverse;if(X.getNormalMatrix(M),R===null||R.length<q)R=new Float32Array(q);for(let P=0,V=E;P!==B;++P,V+=4)Y.copy(F[P]).applyMatrix4(M,X),Y.normal.toArray(R,V),R[V+3]=Y.constant}H.value=R,H.needsUpdate=!0}return Q.numPlanes=B,Q.numIntersection=0,R}}var t6=4,Y1=6,X1=20,H1=256,W$=new t9,ZU=new v0,NY=null,GY=0,FY=0,EY=!1,U1=new _,o7=new _;class U${constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,K={}){let{size:W=256,position:Y=U1}=K;NY=this._renderer.getRenderTarget(),GY=this._renderer.getActiveCubeFace(),FY=this._renderer.getActiveMipmapLevel(),EY=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let X=this._allocateTargets();if(X.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,X,Y),Q>0)this._blur(X,0,0,Q);return this._applyPMREM(X),this._cleanup(X),X}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=YU(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=WU(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(NY,GY,FY),this._renderer.xr.enabled=EY,J.scissorTest=!1,r6(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===x6||J.mapping===f7)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);NY=this._renderer.getRenderTarget(),GY=this._renderer.getActiveCubeFace(),FY=this._renderer.getActiveMipmapLevel(),EY=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:q8,minFilter:q8,generateMipmaps:!1,type:O8,format:T9,colorSpace:p8,depthBuffer:!1},Z=KU(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=KU(J,Q,$);let{_lodMax:K}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=N1(K)),this._blurMaterial=F1(K,J,Q),this._ggxMaterial=G1(K,J,Q)}return Z}_compileMaterial(J){let Q=new P0(new fJ,J);this._renderer.compile(Q,W$)}_sceneToCubeUV(J,Q,$,Z,K){let X=new H8(90,1,Q,$),H=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],N=this._renderer,F=N.autoClear,G=N.toneMapping;if(N.getClearColor(ZU),N.toneMapping=G9,N.autoClear=!1,N.state.buffers.depth.getReversed())N.setRenderTarget(Z),N.clearDepth(),N.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new P0(new TJ,new hJ({name:"PMREM.Background",side:D8,depthWrite:!1,depthTest:!1}));let O=this._backgroundBox,B=O.material,R=!1,q=J.background;if(q){if(q.isColor)B.color.copy(q),J.background=null,R=!0}else B.color.copy(ZU),R=!0;for(let M=0;M<6;M++){let P=M%3;if(P===0)X.up.set(0,H[M],0),X.position.set(K.x,K.y,K.z),X.lookAt(K.x+U[M],K.y,K.z);else if(P===1)X.up.set(0,0,H[M]),X.position.set(K.x,K.y,K.z),X.lookAt(K.x,K.y+U[M],K.z);else X.up.set(0,H[M],0),X.position.set(K.x,K.y,K.z),X.lookAt(K.x,K.y,K.z+U[M]);let V=this._cubeSize;if(r6(Z,P*V,M>2?V:0,V,V),N.setRenderTarget(Z),R)N.render(O,X);N.render(J,X)}N.toneMapping=G,N.autoClear=F,J.background=q}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===x6||J.mapping===f7;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=YU();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=WU();let K=Z?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=K;let Y=K.uniforms;Y.envMap.value=J;let X=this._cubeSize;r6(Q,0,0,3*X,2*X),$.setRenderTarget(Q),$.render(W,W$)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodMeshes.length;for(let K=1;K<Z;K++)this._applyGGXFilter(J,K-1,K);Q.autoClear=$}_applyGGXFilter(J,Q,$){let Z=this._renderer,K=this._pingPongRenderTarget,W=this._ggxMaterial,Y=this._lodMeshes[$];Y.material=W;let X=W.uniforms,H=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),N=Math.sqrt(H*H-U*U),F=H*1.25,G=N*F,{_lodMax:E}=this,O=this._sizeLods[$],B=3*O*($>E-t6?$-E+t6:0),R=4*(this._cubeSize-O);X.envMap.value=J.texture,X.roughness.value=G,X.mipInt.value=E-Q,r6(K,B,R,3*O,2*O),Z.setRenderTarget(K),Z.render(Y,W$),X.envMap.value=K.texture,X.roughness.value=0,X.mipInt.value=E-$,r6(J,B,R,3*O,2*O),Z.setRenderTarget(J),Z.render(Y,W$)}_blur(J,Q,$,Z){let K=this._pingPongRenderTarget,W=Math.min(Z,Math.PI)/Math.SQRT2;this._blurPass(J,K,Q,$,W),this._blurPass(K,J,$,$,W)}_blurPass(J,Q,$,Z,K){let W=this._renderer,Y=this._blurMaterial,X=this._lodMeshes[Z];X.material=Y;let H=Y.uniforms;H.envMap.value=J.texture,H.sigma.value=K,H.mipInt.value=this._lodMax-$;let U=this._sizeLods[Z],N=3*U*(Z>this._lodMax-t6?Z-this._lodMax+t6:0),F=4*(this._cubeSize-U);r6(Q,N,F,3*U,2*U),W.setRenderTarget(Q),W.render(X,W$)}}function N1(J){let Q=[],$=[],Z=J,K=J-t6+1+Y1;for(let W=0;W<K;W++){let Y=Math.pow(2,Z);Q.push(Y);let X=1/(Y-2),H=-X,U=1+X,N=[H,H,U,H,U,U,H,H,U,U,H,U],F=6,G=6,E=3,O=new Float32Array(E*G*F),B=new Float32Array(E*G*F);for(let q=0;q<F;q++){let M=q%3*2/3-1,P=q>2?0:-1,V=[M,P,0,M+0.6666666666666666,P,0,M+0.6666666666666666,P+1,0,M,P,0,M+0.6666666666666666,P+1,0,M,P+1,0];O.set(V,E*G*q);for(let L=0;L<G;L++){let C=N[L*2]*2-1,A=N[L*2+1]*2-1;if(q===0)o7.set(1,A,C);else if(q===1)o7.set(-C,1,-A);else if(q===2)o7.set(-C,A,1);else if(q===3)o7.set(-1,A,-C);else if(q===4)o7.set(-C,-1,A);else o7.set(C,A,-1);o7.toArray(B,(q*G+L)*E)}}let R=new fJ;if(R.setAttribute("position",new aJ(O,E)),R.setAttribute("outputDirection",new aJ(B,E)),$.push(new P0(R,null)),Z>t6)Z--}return{lodMeshes:$,sizeLods:Q}}function KU(J,Q,$){let Z=new Q8(J,Q,$);return Z.texture.mapping=pQ,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function r6(J,Q,$,Z,K){J.viewport.set(Q,$,Z,K),J.scissor.set(Q,$,Z,K)}function G1(J,Q,$){return new tJ({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:H1,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nZ(),fragmentShader:`

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
		`,blending:o8,depthTest:!1,depthWrite:!1})}function F1(J,Q,$){return new tJ({name:"SphericalGaussianBlur",defines:{SAMPLES:X1,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:nZ(),fragmentShader:`

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
		`,blending:o8,depthTest:!1,depthWrite:!1})}function WU(){return new tJ({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nZ(),fragmentShader:`

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
		`,blending:o8,depthTest:!1,depthWrite:!1})}function YU(){return new tJ({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nZ(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:o8,depthTest:!1,depthWrite:!1})}function nZ(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class VY extends Q8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new _Z(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new TJ(5,5,5),K=new tJ({name:"CubemapFromEquirect",uniforms:s7($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:D8,blending:o8});K.uniforms.tEquirect.value=Q;let W=new P0(Z,K),Y=Q.minFilter;if(Q.minFilter===_9)Q.minFilter=q8;return new $Y(1,10,this).update(J,W),Q.minFilter=Y,W.geometry.dispose(),W.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let K=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear(Q,$,Z);J.setRenderTarget(K)}}function E1(J){let Q=new WeakMap,$=new WeakMap,Z=null;function K(G,E=!1){if(G===null||G===void 0)return null;if(E)return Y(G);return W(G)}function W(G){if(G&&G.isTexture){let E=G.mapping;if(E===HZ||E===UZ)if(Q.has(G)){let O=Q.get(G).texture;return X(O,G.mapping)}else{let O=G.image;if(O&&O.height>0){let B=new VY(O.height);return B.fromEquirectangularTexture(J,G),Q.set(G,B),G.addEventListener("dispose",U),X(B.texture,G.mapping)}else return null}}return G}function Y(G){if(G&&G.isTexture){let E=G.mapping,O=E===HZ||E===UZ,B=E===x6||E===f7;if(O||B){let R=$.get(G),q=R!==void 0?R.texture.pmremVersion:0;if(G.isRenderTargetTexture&&G.pmremVersion!==q){if(Z===null)Z=new U$(J);return R=O?Z.fromEquirectangular(G,R):Z.fromCubemap(G,R),R.texture.pmremVersion=G.pmremVersion,$.set(G,R),R.texture}else if(R!==void 0)return R.texture;else{let M=G.image;if(O&&M&&M.height>0||B&&M&&H(M)){if(Z===null)Z=new U$(J);return R=O?Z.fromEquirectangular(G):Z.fromCubemap(G),R.texture.pmremVersion=G.pmremVersion,$.set(G,R),G.addEventListener("dispose",N),R.texture}else return null}}}return G}function X(G,E){if(E===HZ)G.mapping=x6;else if(E===UZ)G.mapping=f7;return G}function H(G){let E=0,O=6;for(let B=0;B<O;B++)if(G[B]!==void 0)E++;return E===O}function U(G){let E=G.target;E.removeEventListener("dispose",U);let O=Q.get(E);if(O!==void 0)Q.delete(E),O.dispose()}function N(G){let E=G.target;E.removeEventListener("dispose",N);let O=$.get(E);if(O!==void 0)$.delete(E),O.dispose()}function F(){if(Q=new WeakMap,$=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:K,dispose:F}}function q1(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let K=J.getExtension(Z);return Q[Z]=K,K}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let K=$(Z);if(K===null)S7("WebGLRenderer: "+Z+" extension not supported.");return K}}}function O1(J,Q,$,Z){let K={},W=new WeakMap;function Y(F){let G=F.target;if(G.index!==null)Q.remove(G.index);for(let O in G.attributes)Q.remove(G.attributes[O]);G.removeEventListener("dispose",Y),delete K[G.id];let E=W.get(G);if(E)Q.remove(E),W.delete(G);if(Z.releaseStatesOfGeometry(G),G.isInstancedBufferGeometry===!0)delete G._maxInstanceCount;$.memory.geometries--}function X(F,G){if(K[G.id]===!0)return G;return G.addEventListener("dispose",Y),K[G.id]=!0,$.memory.geometries++,G}function H(F){let G=F.attributes;for(let E in G)Q.update(G[E],J.ARRAY_BUFFER)}function U(F){let G=[],E=F.index,O=F.attributes.position,B=0;if(O===void 0)return;if(E!==null){let M=E.array;B=E.version;for(let P=0,V=M.length;P<V;P+=3){let L=M[P+0],C=M[P+1],A=M[P+2];G.push(L,C,C,A,A,L)}}else{let M=O.array;B=O.version;for(let P=0,V=M.length/3-1;P<V;P+=3){let L=P+0,C=P+1,A=P+2;G.push(L,C,C,A,A,L)}}let R=new(O.count>=65535?PZ:CZ)(G,1);R.version=B;let q=W.get(F);if(q)Q.remove(q);W.set(F,R)}function N(F){let G=W.get(F);if(G){let E=F.index;if(E!==null){if(G.version<E.version)U(F)}}else U(F);return W.get(F)}return{get:X,update:H,getWireframeAttribute:N}}function R1(J,Q,$){let Z;function K(F){Z=F}let W,Y;function X(F){W=F.type,Y=F.bytesPerElement}function H(F,G){J.drawElements(Z,G,W,F*Y),$.update(G,Z,1)}function U(F,G,E){if(E===0)return;J.drawElementsInstanced(Z,G,W,F*Y,E),$.update(G,Z,E)}function N(F,G,E){if(E===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,G,0,W,F,0,E);let B=0;for(let R=0;R<E;R++)B+=G[R];$.update(B,Z,1)}this.setMode=K,this.setIndex=X,this.render=H,this.renderInstances=U,this.renderMultiDraw=N}function L1(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(W,Y,X){switch($.calls++,Y){case J.TRIANGLES:$.triangles+=X*(W/3);break;case J.LINES:$.lines+=X*(W/2);break;case J.LINE_STRIP:$.lines+=X*(W-1);break;case J.LINE_LOOP:$.lines+=X*W;break;case J.POINTS:$.points+=X*W;break;default:$J("WebGLInfo: Unknown draw mode:",Y);break}}function K(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:K,update:Z}}function V1(J,Q,$){let Z=new WeakMap,K=new mJ;function W(Y,X,H){let U=Y.morphTargetInfluences,N=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,F=N!==void 0?N.length:0,G=Z.get(X);if(G===void 0||G.count!==F){let I=function(){A.dispose(),Z.delete(X),X.removeEventListener("dispose",I)};if(G!==void 0)G.texture.dispose();let E=X.morphAttributes.position!==void 0,O=X.morphAttributes.normal!==void 0,B=X.morphAttributes.color!==void 0,R=X.morphAttributes.position||[],q=X.morphAttributes.normal||[],M=X.morphAttributes.color||[],P=0;if(E===!0)P=1;if(O===!0)P=2;if(B===!0)P=3;let V=X.attributes.position.count*P,L=1;if(V>Q.maxTextureSize)L=Math.ceil(V/Q.maxTextureSize),V=Q.maxTextureSize;let C=new Float32Array(V*L*4*F),A=new MZ(C,V,L,F);A.type=n9,A.needsUpdate=!0;let D=P*4;for(let d=0;d<F;d++){let f=R[d],u=q[d],$0=M[d],y=V*L*4*d;for(let j=0;j<f.count;j++){let g=j*D;if(E===!0)K.fromBufferAttribute(f,j),C[y+g+0]=K.x,C[y+g+1]=K.y,C[y+g+2]=K.z,C[y+g+3]=0;if(O===!0)K.fromBufferAttribute(u,j),C[y+g+4]=K.x,C[y+g+5]=K.y,C[y+g+6]=K.z,C[y+g+7]=0;if(B===!0)K.fromBufferAttribute($0,j),C[y+g+8]=K.x,C[y+g+9]=K.y,C[y+g+10]=K.z,C[y+g+11]=$0.itemSize===4?K.w:1}}G={count:F,texture:A,size:new F0(V,L)},Z.set(X,G),X.addEventListener("dispose",I)}if(Y.isInstancedMesh===!0&&Y.morphTexture!==null)H.getUniforms().setValue(J,"morphTexture",Y.morphTexture,$);else{let E=0;for(let B=0;B<U.length;B++)E+=U[B];let O=X.morphTargetsRelative?1:1-E;H.getUniforms().setValue(J,"morphTargetBaseInfluence",O),H.getUniforms().setValue(J,"morphTargetInfluences",U)}H.getUniforms().setValue(J,"morphTargetsTexture",G.texture,$),H.getUniforms().setValue(J,"morphTargetsTextureSize",G.size)}return{update:W}}function D1(J,Q,$,Z,K){let W=new WeakMap;function Y(U){let N=K.render.frame,F=U.geometry,G=Q.get(U,F);if(W.get(G)!==N)Q.update(G),W.set(G,N);if(U.isInstancedMesh){if(U.hasEventListener("dispose",H)===!1)U.addEventListener("dispose",H);if(W.get(U)!==N){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);W.set(U,N)}}if(U.isSkinnedMesh){let E=U.skeleton;if(W.get(E)!==N)E.update(),W.set(E,N)}return G}function X(){W=new WeakMap}function H(U){let N=U.target;if(N.removeEventListener("dispose",H),Z.releaseStatesOfObject(N),$.remove(N.instanceMatrix),N.instanceColor!==null)$.remove(N.instanceColor)}return{update:Y,dispose:X}}var B1={[vQ]:"LINEAR_TONE_MAPPING",[fQ]:"REINHARD_TONE_MAPPING",[bQ]:"CINEON_TONE_MAPPING",[v7]:"ACES_FILMIC_TONE_MAPPING",[xQ]:"AGX_TONE_MAPPING",[gQ]:"NEUTRAL_TONE_MAPPING",[hQ]:"CUSTOM_TONE_MAPPING"};function M1(J,Q,$,Z,K,W){let Y=new Q8(Q,$,{type:J,depthBuffer:K,stencilBuffer:W,samples:Z?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),X=null,H=null,U=new fJ;U.setAttribute("position",new YJ([-1,3,0,-1,-1,0,3,-1,0],3)),U.setAttribute("uv",new YJ([0,2,0,0,2,0],2));let N=new J$({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),F=new P0(U,N),G=new t9(-1,1,1,-1,0,1),E=null,O=null,B=!1,R,q=null,M=[],P=!1;this.setSize=function(V,L){if(Y.setSize(V,L),X!==null)X.setSize(V,L);if(H!==null)H.setSize(V,L);for(let C=0;C<M.length;C++){let A=M[C];if(A.setSize)A.setSize(V,L)}},this.setEffects=function(V){M=V,P=M.length>0&&M[0].isRenderPass===!0;let{width:L,height:C}=Y;if(M.length>0&&X===null)X=new Q8(L,C,{type:O8,depthBuffer:!1,stencilBuffer:!1}),H=new Q8(L,C,{type:O8,depthBuffer:!1,stencilBuffer:!1});for(let A=0;A<M.length;A++){let D=M[A];if(D.setSize)D.setSize(L,C)}},this.begin=function(V,L){if(B)return!1;if(V.toneMapping===G9&&M.length===0)return!1;if(q=L,L!==null){let{width:C,height:A}=L;if(Y.width!==C||Y.height!==A)this.setSize(C,A)}if(P===!1)V.setRenderTarget(Y);return R=V.toneMapping,V.toneMapping=G9,!0},this.hasRenderPass=function(){return P},this.end=function(V,L){V.toneMapping=R,B=!0;let C=Y,A=X;for(let D=0;D<M.length;D++){let I=M[D];if(I.enabled===!1)continue;if(I.render(V,A,C,L),I.needsSwap!==!1)C=A,A=A===X?H:X}if(E!==V.outputColorSpace||O!==V.toneMapping){if(E=V.outputColorSpace,O=V.toneMapping,N.defines={},EJ.getTransfer(E)===uJ)N.defines.SRGB_TRANSFER="";let D=B1[O];if(D)N.defines[D]="";N.needsUpdate=!0}N.uniforms.tDiffuse.value=C.texture,V.setRenderTarget(q),V.render(F,G),q=null,B=!1},this.isCompositing=function(){return B},this.dispose=function(){if(Y.dispose(),X!==null)X.dispose();if(H!==null)H.dispose();U.dispose(),N.dispose()}}var zU=new eJ,RY=new d7(1,1),AU=new MZ,_U=new pW,TU=new _Z,XU=[],HU=[],UU=new Float32Array(16),NU=new Float32Array(9),GU=new Float32Array(4);function e6(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let K=Q*$,W=XU[K];if(W===void 0)W=new Float32Array(K),XU[K]=W;if(Q!==0){Z.toArray(W,0);for(let Y=1,X=0;Y!==Q;++Y)X+=$,J[Y].toArray(W,X)}return W}function U8(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function N8(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function sZ(J,Q){let $=HU[Q];if($===void 0)$=new Int32Array(Q),HU[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function k1(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function C1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(U8($,Q))return;J.uniform2fv(this.addr,Q),N8($,Q)}}function P1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(U8($,Q))return;J.uniform3fv(this.addr,Q),N8($,Q)}}function I1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(U8($,Q))return;J.uniform4fv(this.addr,Q),N8($,Q)}}function z1(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(U8($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),N8($,Q)}else{if(U8($,Z))return;GU.set(Z),J.uniformMatrix2fv(this.addr,!1,GU),N8($,Z)}}function A1(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(U8($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),N8($,Q)}else{if(U8($,Z))return;NU.set(Z),J.uniformMatrix3fv(this.addr,!1,NU),N8($,Z)}}function _1(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(U8($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),N8($,Q)}else{if(U8($,Z))return;UU.set(Z),J.uniformMatrix4fv(this.addr,!1,UU),N8($,Z)}}function T1(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function S1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(U8($,Q))return;J.uniform2iv(this.addr,Q),N8($,Q)}}function w1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(U8($,Q))return;J.uniform3iv(this.addr,Q),N8($,Q)}}function j1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(U8($,Q))return;J.uniform4iv(this.addr,Q),N8($,Q)}}function y1(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function v1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(U8($,Q))return;J.uniform2uiv(this.addr,Q),N8($,Q)}}function f1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(U8($,Q))return;J.uniform3uiv(this.addr,Q),N8($,Q)}}function b1(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(U8($,Q))return;J.uniform4uiv(this.addr,Q),N8($,Q)}}function h1(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;let W;if(this.type===J.SAMPLER_2D_SHADOW)RY.compareFunction=$.isReversedDepthBuffer()?BZ:DZ,W=RY;else W=zU;$.setTexture2D(Q||W,K)}function x1(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture3D(Q||_U,K)}function g1(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTextureCube(Q||TU,K)}function p1(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture2DArray(Q||AU,K)}function l1(J){switch(J){case 5126:return k1;case 35664:return C1;case 35665:return P1;case 35666:return I1;case 35674:return z1;case 35675:return A1;case 35676:return _1;case 5124:case 35670:return T1;case 35667:case 35671:return S1;case 35668:case 35672:return w1;case 35669:case 35673:return j1;case 5125:return y1;case 36294:return v1;case 36295:return f1;case 36296:return b1;case 35678:case 36198:case 36298:case 36306:case 35682:return h1;case 35679:case 36299:case 36307:return x1;case 35680:case 36300:case 36308:case 36293:return g1;case 36289:case 36303:case 36311:case 36292:return p1}}function m1(J,Q){J.uniform1fv(this.addr,Q)}function u1(J,Q){let $=e6(Q,this.size,2);J.uniform2fv(this.addr,$)}function d1(J,Q){let $=e6(Q,this.size,3);J.uniform3fv(this.addr,$)}function c1(J,Q){let $=e6(Q,this.size,4);J.uniform4fv(this.addr,$)}function n1(J,Q){let $=e6(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function s1(J,Q){let $=e6(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function i1(J,Q){let $=e6(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function o1(J,Q){J.uniform1iv(this.addr,Q)}function a1(J,Q){J.uniform2iv(this.addr,Q)}function r1(J,Q){J.uniform3iv(this.addr,Q)}function t1(J,Q){J.uniform4iv(this.addr,Q)}function e1(J,Q){J.uniform1uiv(this.addr,Q)}function Jq(J,Q){J.uniform2uiv(this.addr,Q)}function Qq(J,Q){J.uniform3uiv(this.addr,Q)}function $q(J,Q){J.uniform4uiv(this.addr,Q)}function Zq(J,Q,$){let Z=this.cache,K=Q.length,W=sZ($,K);if(!U8(Z,W))J.uniform1iv(this.addr,W),N8(Z,W);let Y;if(this.type===J.SAMPLER_2D_SHADOW)Y=RY;else Y=zU;for(let X=0;X!==K;++X)$.setTexture2D(Q[X]||Y,W[X])}function Kq(J,Q,$){let Z=this.cache,K=Q.length,W=sZ($,K);if(!U8(Z,W))J.uniform1iv(this.addr,W),N8(Z,W);for(let Y=0;Y!==K;++Y)$.setTexture3D(Q[Y]||_U,W[Y])}function Wq(J,Q,$){let Z=this.cache,K=Q.length,W=sZ($,K);if(!U8(Z,W))J.uniform1iv(this.addr,W),N8(Z,W);for(let Y=0;Y!==K;++Y)$.setTextureCube(Q[Y]||TU,W[Y])}function Yq(J,Q,$){let Z=this.cache,K=Q.length,W=sZ($,K);if(!U8(Z,W))J.uniform1iv(this.addr,W),N8(Z,W);for(let Y=0;Y!==K;++Y)$.setTexture2DArray(Q[Y]||AU,W[Y])}function Xq(J){switch(J){case 5126:return m1;case 35664:return u1;case 35665:return d1;case 35666:return c1;case 35674:return n1;case 35675:return s1;case 35676:return i1;case 5124:case 35670:return o1;case 35667:case 35671:return a1;case 35668:case 35672:return r1;case 35669:case 35673:return t1;case 5125:return e1;case 36294:return Jq;case 36295:return Qq;case 36296:return $q;case 35678:case 36198:case 36298:case 36306:case 35682:return Zq;case 35679:case 36299:case 36307:return Kq;case 35680:case 36300:case 36308:case 36293:return Wq;case 36289:case 36303:case 36311:case 36292:return Yq}}class SU{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=l1(Q.type)}}class wU{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=Xq(Q.type)}}class jU{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let K=0,W=Z.length;K!==W;++K){let Y=Z[K];Y.setValue(J,Q[Y.id],$)}}}var qY=/(\w+)(\])?(\[|\.)?/g;function FU(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function Hq(J,Q,$){let Z=J.name,K=Z.length;qY.lastIndex=0;while(!0){let W=qY.exec(Z),Y=qY.lastIndex,X=W[1],H=W[2]==="]",U=W[3];if(H)X=X|0;if(U===void 0||U==="["&&Y+2===K){FU($,U===void 0?new SU(X,J,Q):new wU(X,J,Q));break}else{let F=$.map[X];if(F===void 0)F=new jU(X),FU($,F);$=F}}}class H${constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let W=0;W<$;++W){let Y=J.getActiveUniform(Q,W),X=J.getUniformLocation(Q,Y.name);Hq(Y,X,this)}let Z=[],K=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(W);else K.push(W);if(Z.length>0)this.seq=Z.concat(K)}setValue(J,Q,$,Z){let K=this.map[Q];if(K!==void 0)K.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let K=0,W=Q.length;K!==W;++K){let Y=Q[K],X=$[Y.id];if(X.needsUpdate!==!1)Y.setValue(J,X.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,K=J.length;Z!==K;++Z){let W=J[Z];if(W.id in Q)$.push(W)}return $}}function EU(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var Uq=37297,Nq=0;function Gq(J,Q){let $=J.split(`
`),Z=[],K=Math.max(Q-6,0),W=Math.min(Q+6,$.length);for(let Y=K;Y<W;Y++){let X=Y+1;Z.push(`${X===Q?">":" "} ${X}: ${$[Y]}`)}return Z.join(`
`)}var qU=new XJ;function Fq(J){EJ._getMatrix(qU,EJ.workingColorSpace,J);let Q=`mat3( ${qU.elements.map(($)=>$.toFixed(4))} )`;switch(EJ.getTransfer(J)){case vW:return[Q,"LinearTransferOETF"];case uJ:return[Q,"sRGBTransferOETF"];default:return r0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function OU(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),W=(J.getShaderInfoLog(Q)||"").trim();if(Z&&W==="")return"";let Y=/ERROR: 0:(\d+)/.exec(W);if(Y){let X=parseInt(Y[1]);return $.toUpperCase()+`

`+W+`

`+Gq(J.getShaderSource(Q),X)}else return W}function Eq(J,Q){let $=Fq(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var qq={[vQ]:"Linear",[fQ]:"Reinhard",[bQ]:"Cineon",[v7]:"ACESFilmic",[xQ]:"AgX",[gQ]:"Neutral",[hQ]:"Custom"};function Oq(J,Q){let $=qq[Q];if($===void 0)return r0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var cZ=new _;function Rq(){EJ.getLuminanceCoefficients(cZ);let J=cZ.x.toFixed(4),Q=cZ.y.toFixed(4),$=cZ.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function Lq(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(X$).join(`
`)}function Vq(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function Dq(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let K=0;K<Z;K++){let W=J.getActiveAttrib(Q,K),Y=W.name,X=1;if(W.type===J.FLOAT_MAT2)X=2;if(W.type===J.FLOAT_MAT3)X=3;if(W.type===J.FLOAT_MAT4)X=4;$[Y]={type:W.type,location:J.getAttribLocation(Q,Y),locationSize:X}}return $}function X$(J){return J!==""}function RU(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function LU(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var Bq=/^[ \t]*#include +<([\w\d./]+)>/gm;function LY(J){return J.replace(Bq,kq)}var Mq=new Map;function kq(J,Q){let $=OJ[Q];if($===void 0){let Z=Mq.get(Q);if(Z!==void 0)$=OJ[Z],r0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return LY($)}var Cq=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function VU(J){return J.replace(Cq,Pq)}function Pq(J,Q,$,Z){let K="";for(let W=parseInt(Q);W<parseInt($);W++)K+=Z.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return K}function DU(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var Iq={[y7]:"SHADOWMAP_TYPE_PCF",[b6]:"SHADOWMAP_TYPE_VSM"};function zq(J){return Iq[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Aq={[x6]:"ENVMAP_TYPE_CUBE",[f7]:"ENVMAP_TYPE_CUBE",[pQ]:"ENVMAP_TYPE_CUBE_UV"};function _q(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return Aq[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var Tq={[f7]:"ENVMAP_MODE_REFRACTION"};function Sq(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return Tq[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var wq={[kH]:"ENVMAP_BLENDING_MULTIPLY",[CH]:"ENVMAP_BLENDING_MIX",[PH]:"ENVMAP_BLENDING_ADD"};function jq(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return wq[J.combine]||"ENVMAP_BLENDING_NONE"}function yq(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function vq(J,Q,$,Z){let K=J.getContext(),W=$.defines,Y=$.vertexShader,X=$.fragmentShader,H=zq($),U=_q($),N=Sq($),F=jq($),G=yq($),E=Lq($),O=Vq(W),B=K.createProgram(),R,q,M=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(R=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O].filter(X$).join(`
`),R.length>0)R+=`
`;if(q=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O].filter(X$).join(`
`),q.length>0)q+=`
`}else R=[DU($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+N:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+H:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(X$).join(`
`),q=[DU($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+N:"",$.envMap?"#define "+F:"",G?"#define CUBEUV_TEXEL_WIDTH "+G.texelWidth:"",G?"#define CUBEUV_TEXEL_HEIGHT "+G.texelHeight:"",G?"#define CUBEUV_MAX_MIP "+G.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.retroreflection?"#define USE_RETROREFLECTION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+H:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==G9?"#define TONE_MAPPING":"",$.toneMapping!==G9?OJ.tonemapping_pars_fragment:"",$.toneMapping!==G9?Oq("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",OJ.colorspace_pars_fragment,Eq("linearToOutputTexel",$.outputColorSpace),Rq(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(X$).join(`
`);if(Y=LY(Y),Y=RU(Y,$),Y=LU(Y,$),X=LY(X),X=RU(X,$),X=LU(X,$),Y=VU(Y),X=VU(X),$.isRawShaderMaterial!==!0)M=`#version 300 es
`,R=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,q=["#define varying in",$.glslVersion===fW?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===fW?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+q;let P=M+R+Y,V=M+q+X,L=EU(K,K.VERTEX_SHADER,P),C=EU(K,K.FRAGMENT_SHADER,V);if(K.attachShader(B,L),K.attachShader(B,C),$.index0AttributeName!==void 0)K.bindAttribLocation(B,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)K.bindAttribLocation(B,0,"position");K.linkProgram(B);function A(f){if(J.debug.checkShaderErrors){let u=K.getProgramInfoLog(B)||"",$0=K.getShaderInfoLog(L)||"",y=K.getShaderInfoLog(C)||"",j=u.trim(),g=$0.trim(),v=y.trim(),i=!0,x=!0;if(K.getProgramParameter(B,K.LINK_STATUS)===!1)if(i=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(K,B,L,C);else{let a=OU(K,L,"vertex"),Q0=OU(K,C,"fragment");$J("WebGLProgram: Shader Error "+K.getError()+" - VALIDATE_STATUS "+K.getProgramParameter(B,K.VALIDATE_STATUS)+`

Material Name: `+f.name+`
Material Type: `+f.type+`

Program Info Log: `+j+`
`+a+`
`+Q0)}else if(j!=="")r0("WebGLProgram: Program Info Log:",j);else if(g===""||v==="")x=!1;if(x)f.diagnostics={runnable:i,programLog:j,vertexShader:{log:g,prefix:R},fragmentShader:{log:v,prefix:q}}}K.deleteShader(L),K.deleteShader(C),D=new H$(K,B),I=Dq(K,B)}let D;this.getUniforms=function(){if(D===void 0)A(this);return D};let I;this.getAttributes=function(){if(I===void 0)A(this);return I};let d=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(d===!1)d=K.getProgramParameter(B,Uq);return d},this.destroy=function(){Z.releaseStatesOfProgram(this),K.deleteProgram(B),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=Nq++,this.cacheKey=Q,this.usedTimes=1,this.program=B,this.vertexShader=L,this.fragmentShader=C,this}var fq=0;class yU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let Z=this._getShaderCacheForMaterial(J);if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;if(Z.has($)===!1)Z.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new vU(J),Q.set(J,$);return $}}class vU{constructor(J){this.id=fq++,this.code=J,this.usedTimes=0}}function bq(J){return J===g7||J===RZ||J===LZ}function hq(J,Q,$,Z,K,W){let Y=new kZ,X=new yU,H=new Set,U=[],N=new Map,F=Z.logarithmicDepthBuffer,G=Z.precision,E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function O(D){if(H.add(D),D===0)return"uv";return`uv${D}`}function B(D,I,d,f,u,$0){let y=f.fog,j=u.geometry,g=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?f.environment:null,v=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap,i=Q.get(D.envMap||g,v),x=!!i&&i.mapping===pQ?i.image.height:null,a=E[D.type];if(D.precision!==null){if(G=Z.getMaxPrecision(D.precision),G!==D.precision)r0("WebGLProgram.getParameters:",D.precision,"not supported, using",G,"instead.")}let Q0=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,B0=Q0!==void 0?Q0.length:0,D0=0;if(j.morphAttributes.position!==void 0)D0=1;if(j.morphAttributes.normal!==void 0)D0=2;if(j.morphAttributes.color!==void 0)D0=3;let g0,c0,W0,w;if(a){let cJ=v9[a];g0=cJ.vertexShader,c0=cJ.fragmentShader}else{g0=D.vertexShader,c0=D.fragmentShader;let cJ=X.getVertexShaderStage(D),yJ=X.getFragmentShaderStage(D);X.update(D,cJ,yJ),W0=cJ.id,w=yJ.id}let l=J.getRenderTarget(),n=J.state.buffers.depth.getReversed(),K0=u.isInstancedMesh===!0,t=u.isBatchedMesh===!0,L0=!!D.map,O0=!!D.matcap,U0=!!i,S0=!!D.aoMap,n0=!!D.lightMap,FJ=!!D.bumpMap&&D.wireframe===!1,b0=!!D.normalMap,PJ=!!D.displacementMap,SJ=!!D.emissiveMap,gJ=!!D.metalnessMap,h=!!D.roughnessMap,sJ=D.anisotropy>0,UJ=D.clearcoat>0,RJ=D.dispersion>0,T=D.retroreflectivity>0,k=D.iridescence>0,b=D.sheen>0,e=D.transmission>0,q0=sJ&&!!D.anisotropyMap,I0=UJ&&!!D.clearcoatMap,_0=UJ&&!!D.clearcoatNormalMap,Y0=UJ&&!!D.clearcoatRoughnessMap,N0=k&&!!D.iridescenceMap,k0=k&&!!D.iridescenceThicknessMap,i0=b&&!!D.sheenColorMap,z0=b&&!!D.sheenRoughnessMap,M0=!!D.specularMap,e0=!!D.specularColorMap,t0=!!D.specularIntensityMap,IJ=e&&!!D.transmissionMap,m=e&&!!D.thicknessMap,T0=!!D.gradientMap,X0=!!D.alphaMap,A0=D.alphaTest>0,p0=!!D.alphaHash,R0=!!D.extensions,w0=G9;if(D.toneMapped){if(l===null||l.isXRRenderTarget===!0)w0=J.toneMapping}let WJ={shaderID:a,shaderType:D.type,shaderName:D.name,vertexShader:g0,fragmentShader:c0,defines:D.defines,customVertexShaderID:W0,customFragmentShaderID:w,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:G,batching:t,batchingColor:t&&u._colorsTexture!==null,instancing:K0,instancingColor:K0&&u.instanceColor!==null,instancingMorph:K0&&u.morphTexture!==null,outputColorSpace:l===null?J.outputColorSpace:l.isXRRenderTarget===!0?l.texture.colorSpace:EJ.workingColorSpace,alphaToCoverage:!!D.alphaToCoverage,map:L0,matcap:O0,envMap:U0,envMapMode:U0&&i.mapping,envMapCubeUVHeight:x,aoMap:S0,lightMap:n0,bumpMap:FJ,normalMap:b0,displacementMap:PJ,emissiveMap:SJ,normalMapObjectSpace:b0&&D.normalMapType===jH,normalMapTangentSpace:b0&&D.normalMapType===yW,packedNormalMap:b0&&D.normalMapType===yW&&bq(D.normalMap.format),metalnessMap:gJ,roughnessMap:h,anisotropy:sJ,anisotropyMap:q0,clearcoat:UJ,clearcoatMap:I0,clearcoatNormalMap:_0,clearcoatRoughnessMap:Y0,dispersion:RJ,retroreflection:T,iridescence:k,iridescenceMap:N0,iridescenceThicknessMap:k0,sheen:b,sheenColorMap:i0,sheenRoughnessMap:z0,specularMap:M0,specularColorMap:e0,specularIntensityMap:t0,transmission:e,transmissionMap:IJ,thicknessMap:m,gradientMap:T0,opaque:D.transparent===!1&&D.blending===yQ&&D.alphaToCoverage===!1,alphaMap:X0,alphaTest:A0,alphaHash:p0,combine:D.combine,mapUv:L0&&O(D.map.channel),aoMapUv:S0&&O(D.aoMap.channel),lightMapUv:n0&&O(D.lightMap.channel),bumpMapUv:FJ&&O(D.bumpMap.channel),normalMapUv:b0&&O(D.normalMap.channel),displacementMapUv:PJ&&O(D.displacementMap.channel),emissiveMapUv:SJ&&O(D.emissiveMap.channel),metalnessMapUv:gJ&&O(D.metalnessMap.channel),roughnessMapUv:h&&O(D.roughnessMap.channel),anisotropyMapUv:q0&&O(D.anisotropyMap.channel),clearcoatMapUv:I0&&O(D.clearcoatMap.channel),clearcoatNormalMapUv:_0&&O(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y0&&O(D.clearcoatRoughnessMap.channel),iridescenceMapUv:N0&&O(D.iridescenceMap.channel),iridescenceThicknessMapUv:k0&&O(D.iridescenceThicknessMap.channel),sheenColorMapUv:i0&&O(D.sheenColorMap.channel),sheenRoughnessMapUv:z0&&O(D.sheenRoughnessMap.channel),specularMapUv:M0&&O(D.specularMap.channel),specularColorMapUv:e0&&O(D.specularColorMap.channel),specularIntensityMapUv:t0&&O(D.specularIntensityMap.channel),transmissionMapUv:IJ&&O(D.transmissionMap.channel),thicknessMapUv:m&&O(D.thicknessMap.channel),alphaMapUv:X0&&O(D.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(b0||sJ),vertexNormals:!!j.attributes.normal,vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:u.isPoints===!0&&!!j.attributes.uv&&(L0||X0),fog:!!y,useFog:D.fog===!0,fogExp2:!!y&&y.isFogExp2,flatShading:D.wireframe===!1&&(D.flatShading===!0||j.attributes.normal===void 0&&b0===!1&&(D.isMeshLambertMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isMeshPhysicalMaterial)),sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:F,reversedDepthBuffer:n,skinning:u.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:B0,morphTextureStride:D0,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:$0.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:D.dithering,shadowMapEnabled:J.shadowMap.enabled&&d.length>0,shadowMapType:J.shadowMap.type,toneMapping:w0,decodeVideoTexture:L0&&D.map.isVideoTexture===!0&&EJ.getTransfer(D.map.colorSpace)===uJ,decodeVideoTextureEmissive:SJ&&D.emissiveMap.isVideoTexture===!0&&EJ.getTransfer(D.emissiveMap.colorSpace)===uJ,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===iJ,flipSided:D.side===D8,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:R0&&D.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(R0&&D.extensions.multiDraw===!0||t)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return WJ.vertexUv1s=H.has(1),WJ.vertexUv2s=H.has(2),WJ.vertexUv3s=H.has(3),H.clear(),WJ}function R(D){let I=[];if(D.shaderID)I.push(D.shaderID);else I.push(D.customVertexShaderID),I.push(D.customFragmentShaderID);if(D.defines!==void 0)for(let d in D.defines)I.push(d),I.push(D.defines[d]);if(D.isRawShaderMaterial===!1)q(I,D),M(I,D),I.push(J.outputColorSpace);return I.push(D.customProgramCacheKey),I.join()}function q(D,I){D.push(I.precision),D.push(I.outputColorSpace),D.push(I.envMapMode),D.push(I.envMapCubeUVHeight),D.push(I.mapUv),D.push(I.alphaMapUv),D.push(I.lightMapUv),D.push(I.aoMapUv),D.push(I.bumpMapUv),D.push(I.normalMapUv),D.push(I.displacementMapUv),D.push(I.emissiveMapUv),D.push(I.metalnessMapUv),D.push(I.roughnessMapUv),D.push(I.anisotropyMapUv),D.push(I.clearcoatMapUv),D.push(I.clearcoatNormalMapUv),D.push(I.clearcoatRoughnessMapUv),D.push(I.iridescenceMapUv),D.push(I.iridescenceThicknessMapUv),D.push(I.sheenColorMapUv),D.push(I.sheenRoughnessMapUv),D.push(I.specularMapUv),D.push(I.specularColorMapUv),D.push(I.specularIntensityMapUv),D.push(I.transmissionMapUv),D.push(I.thicknessMapUv),D.push(I.combine),D.push(I.fogExp2),D.push(I.sizeAttenuation),D.push(I.morphTargetsCount),D.push(I.morphAttributeCount),D.push(I.numSunLights),D.push(I.numDirLights),D.push(I.numPointLights),D.push(I.numSpotLights),D.push(I.numSpotLightMaps),D.push(I.numHemiLights),D.push(I.numRectAreaLights),D.push(I.numSunLightShadows),D.push(I.numDirLightShadows),D.push(I.numPointLightShadows),D.push(I.numSpotLightShadows),D.push(I.numSpotLightShadowsWithMaps),D.push(I.numLightProbes),D.push(I.shadowMapType),D.push(I.toneMapping),D.push(I.numClippingPlanes),D.push(I.numClipIntersection),D.push(I.depthPacking)}function M(D,I){if(Y.disableAll(),I.instancing)Y.enable(0);if(I.instancingColor)Y.enable(1);if(I.instancingMorph)Y.enable(2);if(I.matcap)Y.enable(3);if(I.envMap)Y.enable(4);if(I.normalMapObjectSpace)Y.enable(5);if(I.normalMapTangentSpace)Y.enable(6);if(I.clearcoat)Y.enable(7);if(I.iridescence)Y.enable(8);if(I.alphaTest)Y.enable(9);if(I.vertexColors)Y.enable(10);if(I.vertexAlphas)Y.enable(11);if(I.vertexUv1s)Y.enable(12);if(I.vertexUv2s)Y.enable(13);if(I.vertexUv3s)Y.enable(14);if(I.vertexTangents)Y.enable(15);if(I.anisotropy)Y.enable(16);if(I.alphaHash)Y.enable(17);if(I.batching)Y.enable(18);if(I.dispersion)Y.enable(19);if(I.retroreflection)Y.enable(24);if(I.batchingColor)Y.enable(20);if(I.gradientMap)Y.enable(21);if(I.packedNormalMap)Y.enable(22);if(I.vertexNormals)Y.enable(23);if(D.push(Y.mask),Y.disableAll(),I.fog)Y.enable(0);if(I.useFog)Y.enable(1);if(I.flatShading)Y.enable(2);if(I.logarithmicDepthBuffer)Y.enable(3);if(I.reversedDepthBuffer)Y.enable(4);if(I.skinning)Y.enable(5);if(I.morphTargets)Y.enable(6);if(I.morphNormals)Y.enable(7);if(I.morphColors)Y.enable(8);if(I.premultipliedAlpha)Y.enable(9);if(I.shadowMapEnabled)Y.enable(10);if(I.doubleSided)Y.enable(11);if(I.flipSided)Y.enable(12);if(I.useDepthPacking)Y.enable(13);if(I.dithering)Y.enable(14);if(I.transmission)Y.enable(15);if(I.sheen)Y.enable(16);if(I.opaque)Y.enable(17);if(I.pointsUvs)Y.enable(18);if(I.decodeVideoTexture)Y.enable(19);if(I.decodeVideoTextureEmissive)Y.enable(20);if(I.alphaToCoverage)Y.enable(21);if(I.numLightProbeGrids>0)Y.enable(22);if(I.hasPositionAttribute)Y.enable(23);D.push(Y.mask)}function P(D){let I=E[D.type],d;if(I){let f=v9[I];d=i9.clone(f.uniforms)}else d=D.uniforms;return d}function V(D,I){let d=N.get(I);if(d!==void 0)++d.usedTimes;else d=new vq(J,I,D,K),U.push(d),N.set(I,d);return d}function L(D){if(--D.usedTimes===0){let I=U.indexOf(D);U[I]=U[U.length-1],U.pop(),N.delete(D.cacheKey),D.destroy()}}function C(D){X.remove(D)}function A(){X.dispose()}return{getParameters:B,getProgramCacheKey:R,getUniforms:P,acquireProgram:V,releaseProgram:L,releaseShaderCache:C,programs:U,dispose:A}}function xq(){let J=new WeakMap;function Q(Y){return J.has(Y)}function $(Y){let X=J.get(Y);if(X===void 0)X={},J.set(Y,X);return X}function Z(Y){J.delete(Y)}function K(Y,X,H){J.get(Y)[X]=H}function W(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:K,dispose:W}}function gq(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function BU(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function MU(){let J=[],Q=0,$=[],Z=[],K=[];function W(){Q=0,$.length=0,Z.length=0,K.length=0}function Y(G){let E=0;if(G.isInstancedMesh)E+=2;if(G.isSkinnedMesh)E+=1;return E}function X(G,E,O,B,R,q){let M=J[Q];if(M===void 0)M={id:G.id,object:G,geometry:E,material:O,materialVariant:Y(G),groupOrder:B,renderOrder:G.renderOrder,z:R,group:q},J[Q]=M;else M.id=G.id,M.object=G,M.geometry=E,M.material=O,M.materialVariant=Y(G),M.groupOrder=B,M.renderOrder=G.renderOrder,M.z=R,M.group=q;return Q++,M}function H(G,E,O,B,R,q,M){if(M.reversedDepth===!0)R=-R;let P=X(G,E,O,B,R,q);if(O.transmission>0)Z.push(P);else if(O.transparent===!0)K.push(P);else $.push(P)}function U(G,E,O,B,R,q){let M=X(G,E,O,B,R,q);if(O.transmission>0)Z.unshift(M);else if(O.transparent===!0)K.unshift(M);else $.unshift(M)}function N(G,E){if($.length>1)$.sort(G||gq);if(Z.length>1)Z.sort(E||BU);if(K.length>1)K.sort(E||BU)}function F(){for(let G=Q,E=J.length;G<E;G++){let O=J[G];if(O.id===null)break;O.id=null,O.object=null,O.geometry=null,O.material=null,O.group=null}}return{opaque:$,transmissive:Z,transparent:K,init:W,push:H,unshift:U,finish:F,sort:N}}function pq(){let J=new WeakMap;function Q(Z,K){let W=J.get(Z),Y;if(W===void 0)Y=new MU,J.set(Z,[Y]);else if(K>=W.length)Y=new MU,W.push(Y);else Y=W[K];return Y}function $(){J=new WeakMap}return{get:Q,dispose:$}}function lq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={direction:new _,color:new v0};break;case"SpotLight":$={position:new _,direction:new _,color:new v0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new _,color:new v0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new _,skyColor:new v0,groundColor:new v0};break;case"RectAreaLight":$={color:new v0,position:new _,halfWidth:new _,halfHeight:new _};break}return J[Q.id]=$,$}}}function mq(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new F0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new F0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new F0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var uq=0;function dq(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function cq(J){let Q=new lq,$=mq(),Z={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new _);let K=new _,W=new QJ,Y=new QJ;function X(U){let N=0,F=0,G=0;for(let u=0;u<9;u++)Z.probe[u].set(0,0,0);let E=0,O=0,B=0,R=0,q=0,M=0,P=0,V=0,L=0,C=0,A=0,D=0,I=0,d=0;U.sort(dq);for(let u=0,$0=U.length;u<$0;u++){let y=U[u],j=y.color,g=y.intensity,v=y.distance,i=null;if(y.shadow&&y.shadow.map)if(y.shadow.map.texture.format===g7)i=y.shadow.map.texture;else i=y.shadow.map.depthTexture||y.shadow.map.texture;if(y.isAmbientLight)N+=j.r*g,F+=j.g*g,G+=j.b*g;else if(y.isLightProbe){for(let x=0;x<9;x++)Z.probe[x].addScaledVector(y.sh.coefficients[x],g);d++}else if(y.isSunLight){let x=Q.get(y);if(x.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let a=y.shadow,Q0=$.get(y);Q0.shadowIntensity=a.intensity,Q0.shadowBias=a.bias,Q0.shadowNormalBias=a.normalBias,Q0.shadowRadius=a.radius,Q0.shadowMapSize.copy(a.mapSize).multiply(a.getFrameExtents()),Z.sunShadow[O]=Q0,Z.sunShadowMap[O]=i;let B0=a.getViewportCount();for(let D0=0;D0<B0;D0++)Z.sunShadowMatrix[B+D0]=a.getMatrix(D0),Z.sunShadowCascade[B+D0]=a._cascadeData[D0];B+=B0,O++}Z.sun[E]=x,E++}else if(y.isDirectionalLight){let x=Q.get(y);if(x.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let a=y.shadow,Q0=$.get(y);Q0.shadowIntensity=a.intensity,Q0.shadowBias=a.bias,Q0.shadowNormalBias=a.normalBias,Q0.shadowRadius=a.radius,Q0.shadowMapSize=a.mapSize,Z.directionalShadow[R]=Q0,Z.directionalShadowMap[R]=i,Z.directionalShadowMatrix[R]=y.shadow.matrix,L++}Z.directional[R]=x,R++}else if(y.isSpotLight){let x=Q.get(y);x.position.setFromMatrixPosition(y.matrixWorld),x.color.copy(j).multiplyScalar(g),x.distance=v,x.coneCos=Math.cos(y.angle),x.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),x.decay=y.decay,Z.spot[M]=x;let a=y.shadow;if(y.map){if(Z.spotLightMap[D]=y.map,D++,a.updateMatrices(y),y.castShadow)I++}if(Z.spotLightMatrix[M]=a.matrix,y.castShadow){let Q0=$.get(y);Q0.shadowIntensity=a.intensity,Q0.shadowBias=a.bias,Q0.shadowNormalBias=a.normalBias,Q0.shadowRadius=a.radius,Q0.shadowMapSize=a.mapSize,Z.spotShadow[M]=Q0,Z.spotShadowMap[M]=i,A++}M++}else if(y.isRectAreaLight){let x=Q.get(y);x.color.copy(j).multiplyScalar(g),x.halfWidth.set(y.width*0.5,0,0),x.halfHeight.set(0,y.height*0.5,0),Z.rectArea[P]=x,P++}else if(y.isPointLight){let x=Q.get(y);if(x.color.copy(y.color).multiplyScalar(y.intensity),x.distance=y.distance,x.decay=y.decay,y.castShadow){let a=y.shadow,Q0=$.get(y);Q0.shadowIntensity=a.intensity,Q0.shadowBias=a.bias,Q0.shadowNormalBias=a.normalBias,Q0.shadowRadius=a.radius,Q0.shadowMapSize=a.mapSize,Q0.shadowCameraNear=a.camera.near,Q0.shadowCameraFar=a.camera.far,Z.pointShadow[q]=Q0,Z.pointShadowMap[q]=i,Z.pointShadowMatrix[q]=y.shadow.matrix,C++}Z.point[q]=x,q++}else if(y.isHemisphereLight){let x=Q.get(y);x.skyColor.copy(y.color).multiplyScalar(g),x.groundColor.copy(y.groundColor).multiplyScalar(g),Z.hemi[V]=x,V++}}if(P>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=h0.LTC_FLOAT_1,Z.rectAreaLTC2=h0.LTC_FLOAT_2;else Z.rectAreaLTC1=h0.LTC_HALF_1,Z.rectAreaLTC2=h0.LTC_HALF_2;Z.ambient[0]=N,Z.ambient[1]=F,Z.ambient[2]=G;let f=Z.hash;if(f.sunLength!==E||f.directionalLength!==R||f.pointLength!==q||f.spotLength!==M||f.rectAreaLength!==P||f.hemiLength!==V||f.numSunShadows!==O||f.numDirectionalShadows!==L||f.numPointShadows!==C||f.numSpotShadows!==A||f.numSpotMaps!==D||f.numLightProbes!==d)Z.sun.length=E,Z.directional.length=R,Z.spot.length=M,Z.rectArea.length=P,Z.point.length=q,Z.hemi.length=V,Z.sunShadow.length=O,Z.sunShadowMap.length=O,Z.sunShadowMatrix.length=B,Z.sunShadowCascade.length=B,Z.directionalShadow.length=L,Z.directionalShadowMap.length=L,Z.directionalShadowMatrix.length=L,Z.pointShadow.length=C,Z.pointShadowMap.length=C,Z.pointShadowMatrix.length=C,Z.spotShadow.length=A,Z.spotShadowMap.length=A,Z.spotLightMatrix.length=A+D-I,Z.spotLightMap.length=D,Z.numSpotLightShadowsWithMaps=I,Z.numLightProbes=d,f.sunLength=E,f.directionalLength=R,f.pointLength=q,f.spotLength=M,f.rectAreaLength=P,f.hemiLength=V,f.numSunShadows=O,f.numDirectionalShadows=L,f.numPointShadows=C,f.numSpotShadows=A,f.numSpotMaps=D,f.numLightProbes=d,Z.version=uq++}function H(U,N){let F=0,G=0,E=0,O=0,B=0,R=0,q=N.matrixWorldInverse;for(let M=0,P=U.length;M<P;M++){let V=U[M];if(V.isSunLight){let L=Z.sun[F];L.direction.setFromMatrixPosition(V.matrixWorld),L.direction.transformDirection(q),F++}else if(V.isDirectionalLight){let L=Z.directional[G];L.direction.setFromMatrixPosition(V.matrixWorld),K.setFromMatrixPosition(V.target.matrixWorld),L.direction.sub(K),L.direction.transformDirection(q),G++}else if(V.isSpotLight){let L=Z.spot[O];L.position.setFromMatrixPosition(V.matrixWorld),L.position.applyMatrix4(q),L.direction.setFromMatrixPosition(V.matrixWorld),K.setFromMatrixPosition(V.target.matrixWorld),L.direction.sub(K),L.direction.transformDirection(q),O++}else if(V.isRectAreaLight){let L=Z.rectArea[B];L.position.setFromMatrixPosition(V.matrixWorld),L.position.applyMatrix4(q),Y.identity(),W.copy(V.matrixWorld),W.premultiply(q),Y.extractRotation(W),L.halfWidth.set(V.width*0.5,0,0),L.halfHeight.set(0,V.height*0.5,0),L.halfWidth.applyMatrix4(Y),L.halfHeight.applyMatrix4(Y),B++}else if(V.isPointLight){let L=Z.point[E];L.position.setFromMatrixPosition(V.matrixWorld),L.position.applyMatrix4(q),E++}else if(V.isHemisphereLight){let L=Z.hemi[R];L.direction.setFromMatrixPosition(V.matrixWorld),L.direction.transformDirection(q),R++}}}return{setup:X,setupView:H,state:Z}}function kU(J){let Q=new cq(J),$=[],Z=[],K=[];function W(G){F.camera=G,$.length=0,Z.length=0,K.length=0}function Y(G){$.push(G)}function X(G){Z.push(G)}function H(G){K.push(G)}function U(){Q.setup($)}function N(G){Q.setupView($,G)}let F={lightsArray:$,shadowsArray:Z,lightProbeGridArray:K,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:F,setupLights:U,setupLightsView:N,pushLight:Y,pushShadow:X,pushLightProbeGrid:H}}function nq(J){let Q=new WeakMap;function $(K,W=0){let Y=Q.get(K),X;if(Y===void 0)X=new kU(J),Q.set(K,[X]);else if(W>=Y.length)X=new kU(J),Y.push(X);else X=Y[W];return X}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var sq=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iq=`uniform sampler2D shadow_pass;
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
}`,oq=[new _(1,0,0),new _(-1,0,0),new _(0,1,0),new _(0,-1,0),new _(0,0,1),new _(0,0,-1)],aq=[new _(0,-1,0),new _(0,-1,0),new _(0,0,1),new _(0,0,-1),new _(0,-1,0),new _(0,-1,0)],CU=new QJ,Y$=new _,OY=new _;function rq(J,Q,$){let Z=new iQ,K=new F0,W=new F0,Y=new mJ,X=new iW,H=new oW,U={},N=$.maxTextureSize,F={[G7]:D8,[D8]:G7,[iJ]:iJ},G=new tJ({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new F0},radius:{value:4}},vertexShader:sq,fragmentShader:iq}),E=G.clone();E.defines.HORIZONTAL_PASS=1;let O=new fJ;O.setAttribute("position",new aJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let B=new P0(O,G),R=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=y7;let q=this.type;this.render=function(C,A,D){if(R.enabled===!1)return;if(R.autoUpdate===!1&&R.needsUpdate===!1)return;if(C.length===0)return;if(this.type===iX)r0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=y7;let I=J.getRenderTarget(),d=J.getActiveCubeFace(),f=J.getActiveMipmapLevel(),u=J.state;if(u.setBlending(o8),u.buffers.depth.getReversed()===!0)u.buffers.color.setClear(0,0,0,0);else u.buffers.color.setClear(1,1,1,1);u.buffers.depth.setTest(!0),u.setScissorTest(!1);let $0=q!==this.type;if($0)A.traverse(function(y){if(y.material)if(Array.isArray(y.material))y.material.forEach((j)=>j.needsUpdate=!0);else y.material.needsUpdate=!0});for(let y=0,j=C.length;y<j;y++){let g=C[y],v=g.shadow;if(v===void 0){r0("WebGLShadowMap:",g,"has no shadow.");continue}if(v.autoUpdate===!1&&v.needsUpdate===!1)continue;K.copy(v.mapSize);let i=v.getFrameExtents();if(K.multiply(i),W.copy(v.mapSize),K.x>N||K.y>N){if(K.x>N)W.x=Math.floor(N/i.x),K.x=W.x*i.x,v.mapSize.x=W.x;if(K.y>N)W.y=Math.floor(N/i.y),K.y=W.y*i.y,v.mapSize.y=W.y}let x=J.state.buffers.depth.getReversed();if(v.camera._reversedDepth=x,v.map===null||$0===!0){if(v.map!==null){if(v.map.depthTexture!==null)v.map.depthTexture.dispose(),v.map.depthTexture=null;v.map.dispose()}if(this.type===b6){if(g.isPointLight){r0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}v.map=new Q8(K.x,K.y,{format:g7,type:O8,minFilter:q8,magFilter:q8,generateMipmaps:!1}),v.map.texture.name=g.name+".shadowMap",v.map.depthTexture=new d7(K.x,K.y,n9),v.map.depthTexture.name=g.name+".shadowMapDepth",v.map.depthTexture.format=h7,v.map.depthTexture.compareFunction=null,v.map.depthTexture.minFilter=F9,v.map.depthTexture.magFilter=F9}else{if(g.isPointLight)v.map=new VY(K.x),v.map.depthTexture=new lW(K.x,E7);else v.map=new Q8(K.x,K.y),v.map.depthTexture=new d7(K.x,K.y,E7);if(v.map.depthTexture.name=g.name+".shadowMap",v.map.depthTexture.format=h7,this.type===y7)v.map.depthTexture.compareFunction=x?BZ:DZ,v.map.depthTexture.minFilter=q8,v.map.depthTexture.magFilter=q8;else v.map.depthTexture.compareFunction=null,v.map.depthTexture.minFilter=F9,v.map.depthTexture.magFilter=F9}v.camera.updateProjectionMatrix()}if(v.map.isWebGLCubeRenderTarget!==!0&&(v.map.width!==K.x||v.map.height!==K.y))v.map.setSize(K.x,K.y);let a=v.map.isWebGLCubeRenderTarget?6:v.getViewportCount();if(g.isPointLight!==!0)v.updateMatrices(g,D);for(let Q0=0;Q0<a;Q0++){let B0=v.getCamera(Q0);if(g.isPointLight){let{camera:D0,matrix:g0}=v,c0=g.distance||D0.far;if(c0!==D0.far)D0.far=c0,D0.updateProjectionMatrix();Y$.setFromMatrixPosition(g.matrixWorld),D0.position.copy(Y$),OY.copy(D0.position),OY.add(oq[Q0]),D0.up.copy(aq[Q0]),D0.lookAt(OY),D0.updateMatrixWorld(),g0.makeTranslation(-Y$.x,-Y$.y,-Y$.z),CU.multiplyMatrices(D0.projectionMatrix,D0.matrixWorldInverse),v._frustum.setFromProjectionMatrix(CU,D0.coordinateSystem,D0.reversedDepth)}if(v.map.isWebGLCubeRenderTarget)J.setRenderTarget(v.map,Q0),J.clear();else{if(Q0===0)J.setRenderTarget(v.map),J.clear();let D0=v.getViewport(Q0);Y.set(W.x*D0.x,W.y*D0.y,W.x*D0.z,W.y*D0.w),u.viewport(Y)}Z=v.getFrustum(Q0),V(A,D,B0,g,this.type)}if(v.isPointLightShadow!==!0&&this.type===b6)M(v,D);v.needsUpdate=!1}q=this.type,R.needsUpdate=!1,J.setRenderTarget(I,d,f)};function M(C,A){let D=Q.update(B);if(G.defines.VSM_SAMPLES!==C.blurSamples)G.defines.VSM_SAMPLES=C.blurSamples,E.defines.VSM_SAMPLES=C.blurSamples,G.needsUpdate=!0,E.needsUpdate=!0;if(C.mapPass===null)C.mapPass=new Q8(K.x,K.y,{format:g7,type:O8});else if(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)C.mapPass.setSize(C.map.width,C.map.height);G.uniforms.shadow_pass.value=C.map.depthTexture,G.uniforms.resolution.value.set(C.map.width,C.map.height),G.uniforms.radius.value=C.radius,J.setRenderTarget(C.mapPass),J.clear(),J.renderBufferDirect(A,null,D,G,B,null),E.uniforms.shadow_pass.value=C.mapPass.texture,E.uniforms.resolution.value.set(C.map.width,C.map.height),E.uniforms.radius.value=C.radius,J.setRenderTarget(C.map),J.clear(),J.renderBufferDirect(A,null,D,E,B,null)}function P(C,A,D,I){let d=null,f=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(f!==void 0)d=f;else if(d=D.isPointLight===!0?H:X,J.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let u=d.uuid,$0=A.uuid,y=U[u];if(y===void 0)y={},U[u]=y;let j=y[$0];if(j===void 0)j=d.clone(),y[$0]=j,A.addEventListener("dispose",L);d=j}if(d.visible=A.visible,d.wireframe=A.wireframe,I===b6)d.side=A.shadowSide!==null?A.shadowSide:A.side;else d.side=A.shadowSide!==null?A.shadowSide:F[A.side];if(d.alphaMap=A.alphaMap,d.alphaTest=A.alphaToCoverage===!0?0.5:A.alphaTest,d.map=A.map,d.clipShadows=A.clipShadows,d.clippingPlanes=A.clippingPlanes,d.clipIntersection=A.clipIntersection,d.displacementMap=A.displacementMap,d.displacementScale=A.displacementScale,d.displacementBias=A.displacementBias,d.wireframeLinewidth=A.wireframeLinewidth,d.linewidth=A.linewidth,D.isPointLight===!0&&d.isMeshDistanceMaterial===!0){let u=J.properties.get(d);u.light=D}return d}function V(C,A,D,I,d){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)){if((C.castShadow||C.receiveShadow&&d===b6)&&(!C.frustumCulled||C.intersectsFrustum(Z))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);let $0=Q.update(C),y=C.material;if(Array.isArray(y)){let j=$0.groups;for(let g=0,v=j.length;g<v;g++){let i=j[g],x=y[i.materialIndex];if(x&&x.visible){let a=P(C,x,I,d);C.onBeforeShadow(J,C,A,D,$0,a,i),J.renderBufferDirect(D,null,$0,a,C,i),C.onAfterShadow(J,C,A,D,$0,a,i)}}}else if(y.visible){let j=P(C,y,I,d);C.onBeforeShadow(J,C,A,D,$0,j,null),J.renderBufferDirect(D,null,$0,j,C,null),C.onAfterShadow(J,C,A,D,$0,j,null)}}}let u=C.children;for(let $0=0,y=u.length;$0<y;$0++)V(u[$0],A,D,I,d)}function L(C){C.target.removeEventListener("dispose",L);for(let D in U){let I=U[D],d=C.target.uuid;if(d in I)I[d].dispose(),delete I[d]}}}function tq(J,Q){function $(){let m=!1,T0=new mJ,X0=null,A0=new mJ(0,0,0,0);return{setMask:function(p0){if(X0!==p0&&!m)J.colorMask(p0,p0,p0,p0),X0=p0},setLocked:function(p0){m=p0},setClear:function(p0,R0,w0,WJ,cJ){if(cJ===!0)p0*=WJ,R0*=WJ,w0*=WJ;if(T0.set(p0,R0,w0,WJ),A0.equals(T0)===!1)J.clearColor(p0,R0,w0,WJ),A0.copy(T0)},reset:function(){m=!1,X0=null,A0.set(-1,0,0,0)}}}function Z(){let m=!1,T0=!1,X0=null,A0=null,p0=null;return{setReversed:function(R0){if(T0!==R0){let w0=Q.get("EXT_clip_control");if(R0)w0.clipControlEXT(w0.LOWER_LEFT_EXT,w0.ZERO_TO_ONE_EXT);else w0.clipControlEXT(w0.LOWER_LEFT_EXT,w0.NEGATIVE_ONE_TO_ONE_EXT);T0=R0;let WJ=p0;p0=null,this.setClear(WJ)}},getReversed:function(){return T0},setTest:function(R0){if(R0)l(J.DEPTH_TEST);else n(J.DEPTH_TEST)},setMask:function(R0){if(X0!==R0&&!m)J.depthMask(R0),X0=R0},setFunc:function(R0){if(T0)R0=mH[R0];if(A0!==R0){switch(R0){case OH:J.depthFunc(J.NEVER);break;case RH:J.depthFunc(J.ALWAYS);break;case LH:J.depthFunc(J.LESS);break;case iK:J.depthFunc(J.LEQUAL);break;case VH:J.depthFunc(J.EQUAL);break;case DH:J.depthFunc(J.GEQUAL);break;case BH:J.depthFunc(J.GREATER);break;case MH:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}A0=R0}},setLocked:function(R0){m=R0},setClear:function(R0){if(p0!==R0){if(p0=R0,T0)R0=1-R0;J.clearDepth(R0)}},reset:function(){m=!1,X0=null,A0=null,p0=null,T0=!1}}}function K(){let m=!1,T0=null,X0=null,A0=null,p0=null,R0=null,w0=null,WJ=null,cJ=null;return{setTest:function(yJ){if(!m)if(yJ)l(J.STENCIL_TEST);else n(J.STENCIL_TEST)},setMask:function(yJ){if(T0!==yJ&&!m)J.stencilMask(yJ),T0=yJ},setFunc:function(yJ,c8,Z9){if(X0!==yJ||A0!==c8||p0!==Z9)J.stencilFunc(yJ,c8,Z9),X0=yJ,A0=c8,p0=Z9},setOp:function(yJ,c8,Z9){if(R0!==yJ||w0!==c8||WJ!==Z9)J.stencilOp(yJ,c8,Z9),R0=yJ,w0=c8,WJ=Z9},setLocked:function(yJ){m=yJ},setClear:function(yJ){if(cJ!==yJ)J.clearStencil(yJ),cJ=yJ},reset:function(){m=!1,T0=null,X0=null,A0=null,p0=null,R0=null,w0=null,WJ=null,cJ=null}}}let W=new $,Y=new Z,X=new K,H=new WeakMap,U=new WeakMap,N={},F={},G={},E=new WeakMap,O=[],B=null,R=!1,q=null,M=null,P=null,V=null,L=null,C=null,A=null,D=new v0(0,0,0),I=0,d=!1,f=null,u=null,$0=null,y=null,j=null,g=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),v=!1,i=0,x=J.getParameter(J.VERSION);if(x.indexOf("WebGL")!==-1)i=parseFloat(/^WebGL (\d)/.exec(x)[1]),v=i>=1;else if(x.indexOf("OpenGL ES")!==-1)i=parseFloat(/^OpenGL ES (\d)/.exec(x)[1]),v=i>=2;let a=null,Q0={},B0=J.getParameter(J.SCISSOR_BOX),D0=J.getParameter(J.VIEWPORT),g0=new mJ().fromArray(B0),c0=new mJ().fromArray(D0);function W0(m,T0,X0,A0){let p0=new Uint8Array(4),R0=J.createTexture();J.bindTexture(m,R0),J.texParameteri(m,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(m,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let w0=0;w0<X0;w0++)if(m===J.TEXTURE_3D||m===J.TEXTURE_2D_ARRAY)J.texImage3D(T0,0,J.RGBA,1,1,A0,0,J.RGBA,J.UNSIGNED_BYTE,p0);else J.texImage2D(T0+w0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,p0);return R0}let w={};w[J.TEXTURE_2D]=W0(J.TEXTURE_2D,J.TEXTURE_2D,1),w[J.TEXTURE_CUBE_MAP]=W0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),w[J.TEXTURE_2D_ARRAY]=W0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),w[J.TEXTURE_3D]=W0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),Y.setClear(1),X.setClear(0),l(J.DEPTH_TEST),Y.setFunc(iK),FJ(!1),b0(cK),l(J.CULL_FACE),S0(o8);function l(m){if(N[m]!==!0)J.enable(m),N[m]=!0}function n(m){if(N[m]!==!1)J.disable(m),N[m]=!1}function K0(m,T0){if(G[m]!==T0){if(J.bindFramebuffer(m,T0),G[m]=T0,m===J.DRAW_FRAMEBUFFER)G[J.FRAMEBUFFER]=T0;if(m===J.FRAMEBUFFER)G[J.DRAW_FRAMEBUFFER]=T0;return!0}return!1}function t(m,T0){let X0=O,A0=!1;if(m){if(X0=E.get(T0),X0===void 0)X0=[],E.set(T0,X0);let p0=m.textures;if(X0.length!==p0.length||X0[0]!==J.COLOR_ATTACHMENT0){for(let R0=0,w0=p0.length;R0<w0;R0++)X0[R0]=J.COLOR_ATTACHMENT0+R0;X0.length=p0.length,A0=!0}}else if(X0[0]!==J.BACK)X0[0]=J.BACK,A0=!0;if(A0)J.drawBuffers(X0)}function L0(m){if(B!==m)return J.useProgram(m),B=m,!0;return!1}let O0={[h6]:J.FUNC_ADD,[aX]:J.FUNC_SUBTRACT,[rX]:J.FUNC_REVERSE_SUBTRACT};O0[tX]=J.MIN,O0[eX]=J.MAX;let U0={[JH]:J.ZERO,[QH]:J.ONE,[$H]:J.SRC_COLOR,[KH]:J.SRC_ALPHA,[NH]:J.SRC_ALPHA_SATURATE,[HH]:J.DST_COLOR,[YH]:J.DST_ALPHA,[ZH]:J.ONE_MINUS_SRC_COLOR,[WH]:J.ONE_MINUS_SRC_ALPHA,[UH]:J.ONE_MINUS_DST_COLOR,[XH]:J.ONE_MINUS_DST_ALPHA,[GH]:J.CONSTANT_COLOR,[FH]:J.ONE_MINUS_CONSTANT_COLOR,[EH]:J.CONSTANT_ALPHA,[qH]:J.ONE_MINUS_CONSTANT_ALPHA};function S0(m,T0,X0,A0,p0,R0,w0,WJ,cJ,yJ){if(m===o8){if(R===!0)n(J.BLEND),R=!1;return}if(R===!1)l(J.BLEND),R=!0;if(m!==oX){if(m!==q||yJ!==d){if(M!==h6||L!==h6)J.blendEquation(J.FUNC_ADD),M=h6,L=h6;if(yJ)switch(m){case yQ:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case A9:J.blendFunc(J.ONE,J.ONE);break;case nK:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case sK:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:$J("WebGLState: Invalid blending: ",m);break}else switch(m){case yQ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case A9:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case nK:$J("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sK:$J("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$J("WebGLState: Invalid blending: ",m);break}P=null,V=null,C=null,A=null,D.set(0,0,0),I=0,q=m,d=yJ}return}if(p0=p0||T0,R0=R0||X0,w0=w0||A0,T0!==M||p0!==L)J.blendEquationSeparate(O0[T0],O0[p0]),M=T0,L=p0;if(X0!==P||A0!==V||R0!==C||w0!==A)J.blendFuncSeparate(U0[X0],U0[A0],U0[R0],U0[w0]),P=X0,V=A0,C=R0,A=w0;if(WJ.equals(D)===!1||cJ!==I)J.blendColor(WJ.r,WJ.g,WJ.b,cJ),D.copy(WJ),I=cJ;q=m,d=!1}function n0(m,T0){m.side===iJ?n(J.CULL_FACE):l(J.CULL_FACE);let X0=m.side===D8;if(T0)X0=!X0;FJ(X0),m.blending===yQ&&m.transparent===!1?S0(o8):S0(m.blending,m.blendEquation,m.blendSrc,m.blendDst,m.blendEquationAlpha,m.blendSrcAlpha,m.blendDstAlpha,m.blendColor,m.blendAlpha,m.premultipliedAlpha),Y.setFunc(m.depthFunc),Y.setTest(m.depthTest),Y.setMask(m.depthWrite),W.setMask(m.colorWrite);let A0=m.stencilWrite;if(X.setTest(A0),A0)X.setMask(m.stencilWriteMask),X.setFunc(m.stencilFunc,m.stencilRef,m.stencilFuncMask),X.setOp(m.stencilFail,m.stencilZFail,m.stencilZPass);SJ(m.polygonOffset,m.polygonOffsetFactor,m.polygonOffsetUnits),m.alphaToCoverage===!0?l(J.SAMPLE_ALPHA_TO_COVERAGE):n(J.SAMPLE_ALPHA_TO_COVERAGE)}function FJ(m){if(f!==m){if(m)J.frontFace(J.CW);else J.frontFace(J.CCW);f=m}}function b0(m){if(m!==nX){if(l(J.CULL_FACE),m!==u)if(m===cK)J.cullFace(J.BACK);else if(m===sX)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else n(J.CULL_FACE);u=m}function PJ(m){if(m!==$0){if(v)J.lineWidth(m);$0=m}}function SJ(m,T0,X0){if(m){if(l(J.POLYGON_OFFSET_FILL),y!==T0||j!==X0){if(y=T0,j=X0,Y.getReversed())T0=-T0;J.polygonOffset(T0,X0)}}else n(J.POLYGON_OFFSET_FILL)}function gJ(m){if(m)l(J.SCISSOR_TEST);else n(J.SCISSOR_TEST)}function h(m){if(m===void 0)m=J.TEXTURE0+g-1;if(a!==m)J.activeTexture(m),a=m}function sJ(m,T0,X0){if(X0===void 0)if(a===null)X0=J.TEXTURE0+g-1;else X0=a;let A0=Q0[X0];if(A0===void 0)A0={type:void 0,texture:void 0},Q0[X0]=A0;if(A0.type!==m||A0.texture!==T0){if(a!==X0)J.activeTexture(X0),a=X0;J.bindTexture(m,T0||w[m]),A0.type=m,A0.texture=T0}}function UJ(){let m=Q0[a];if(m!==void 0&&m.type!==void 0)J.bindTexture(m.type,null),m.type=void 0,m.texture=void 0}function RJ(){try{J.compressedTexImage2D(...arguments)}catch(m){$J("WebGLState:",m)}}function T(){try{J.compressedTexImage3D(...arguments)}catch(m){$J("WebGLState:",m)}}function k(){try{J.texSubImage2D(...arguments)}catch(m){$J("WebGLState:",m)}}function b(){try{J.texSubImage3D(...arguments)}catch(m){$J("WebGLState:",m)}}function e(){try{J.compressedTexSubImage2D(...arguments)}catch(m){$J("WebGLState:",m)}}function q0(){try{J.compressedTexSubImage3D(...arguments)}catch(m){$J("WebGLState:",m)}}function I0(){try{J.texStorage2D(...arguments)}catch(m){$J("WebGLState:",m)}}function _0(){try{J.texStorage3D(...arguments)}catch(m){$J("WebGLState:",m)}}function Y0(){try{J.texImage2D(...arguments)}catch(m){$J("WebGLState:",m)}}function N0(){try{J.texImage3D(...arguments)}catch(m){$J("WebGLState:",m)}}function k0(m){if(F[m]!==void 0)return F[m];else return J.getParameter(m)}function i0(m,T0){if(F[m]!==T0)J.pixelStorei(m,T0),F[m]=T0}function z0(m){if(g0.equals(m)===!1)J.scissor(m.x,m.y,m.z,m.w),g0.copy(m)}function M0(m){if(c0.equals(m)===!1)J.viewport(m.x,m.y,m.z,m.w),c0.copy(m)}function e0(m,T0){let X0=U.get(T0);if(X0===void 0)X0=new WeakMap,U.set(T0,X0);let A0=X0.get(m);if(A0===void 0)A0=J.getUniformBlockIndex(T0,m.name),X0.set(m,A0)}function t0(m,T0){let A0=U.get(T0).get(m);if(H.get(T0)!==A0)J.uniformBlockBinding(T0,A0,m.__bindingPointIndex),H.set(T0,A0)}function IJ(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),Y.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),N={},F={},a=null,Q0={},G={},E=new WeakMap,O=[],B=null,R=!1,q=null,M=null,P=null,V=null,L=null,C=null,A=null,D=new v0(0,0,0),I=0,d=!1,f=null,u=null,$0=null,y=null,j=null,g0.set(0,0,J.canvas.width,J.canvas.height),c0.set(0,0,J.canvas.width,J.canvas.height),W.reset(),Y.reset(),X.reset()}return{buffers:{color:W,depth:Y,stencil:X},enable:l,disable:n,bindFramebuffer:K0,drawBuffers:t,useProgram:L0,setBlending:S0,setMaterial:n0,setFlipSided:FJ,setCullFace:b0,setLineWidth:PJ,setPolygonOffset:SJ,setScissorTest:gJ,activeTexture:h,bindTexture:sJ,unbindTexture:UJ,compressedTexImage2D:RJ,compressedTexImage3D:T,texImage2D:Y0,texImage3D:N0,pixelStorei:i0,getParameter:k0,updateUBOMapping:e0,uniformBlockBinding:t0,texStorage2D:I0,texStorage3D:_0,texSubImage2D:k,texSubImage3D:b,compressedTexSubImage2D:e,compressedTexSubImage3D:q0,scissor:z0,viewport:M0,reset:IJ}}function eq(J,Q,$,Z,K,W,Y){let X=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,H=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new F0,N=new WeakMap,F=new Set,G,E=new WeakMap,O=!1;try{O=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(T){}function B(T,k){return O?new OffscreenCanvas(T,k):j6("canvas")}function R(T,k,b){let e=1,q0=RJ(T);if(q0.width>b||q0.height>b)e=b/Math.max(q0.width,q0.height);if(e<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let I0=Math.floor(e*q0.width),_0=Math.floor(e*q0.height);if(G===void 0)G=B(I0,_0);let Y0=k?B(I0,_0):G;return Y0.width=I0,Y0.height=_0,Y0.getContext("2d").drawImage(T,0,0,I0,_0),r0("WebGLRenderer: Texture has been resized from ("+q0.width+"x"+q0.height+") to ("+I0+"x"+_0+")."),Y0}else{if("data"in T)r0("WebGLRenderer: Image in DataTexture is too big ("+q0.width+"x"+q0.height+").");return T}return T}function q(T){return T.generateMipmaps}function M(T){J.generateMipmap(T)}function P(T){if(T.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(T.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function V(T,k,b,e,q0,I0=!1){if(T!==null){if(J[T]!==void 0)return J[T];r0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let _0;if(e){if(_0=Q.get("EXT_texture_norm16"),!_0)r0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let Y0=k;if(k===J.RED){if(b===J.FLOAT)Y0=J.R32F;if(b===J.HALF_FLOAT)Y0=J.R16F;if(b===J.UNSIGNED_BYTE)Y0=J.R8;if(b===J.UNSIGNED_SHORT&&_0)Y0=_0.R16_EXT;if(b===J.SHORT&&_0)Y0=_0.R16_SNORM_EXT}if(k===J.RED_INTEGER){if(b===J.UNSIGNED_BYTE)Y0=J.R8UI;if(b===J.UNSIGNED_SHORT)Y0=J.R16UI;if(b===J.UNSIGNED_INT)Y0=J.R32UI;if(b===J.BYTE)Y0=J.R8I;if(b===J.SHORT)Y0=J.R16I;if(b===J.INT)Y0=J.R32I}if(k===J.RG){if(b===J.FLOAT)Y0=J.RG32F;if(b===J.HALF_FLOAT)Y0=J.RG16F;if(b===J.UNSIGNED_BYTE)Y0=J.RG8;if(b===J.UNSIGNED_SHORT&&_0)Y0=_0.RG16_EXT;if(b===J.SHORT&&_0)Y0=_0.RG16_SNORM_EXT}if(k===J.RG_INTEGER){if(b===J.UNSIGNED_BYTE)Y0=J.RG8UI;if(b===J.UNSIGNED_SHORT)Y0=J.RG16UI;if(b===J.UNSIGNED_INT)Y0=J.RG32UI;if(b===J.BYTE)Y0=J.RG8I;if(b===J.SHORT)Y0=J.RG16I;if(b===J.INT)Y0=J.RG32I}if(k===J.RGB_INTEGER){if(b===J.UNSIGNED_BYTE)Y0=J.RGB8UI;if(b===J.UNSIGNED_SHORT)Y0=J.RGB16UI;if(b===J.UNSIGNED_INT)Y0=J.RGB32UI;if(b===J.BYTE)Y0=J.RGB8I;if(b===J.SHORT)Y0=J.RGB16I;if(b===J.INT)Y0=J.RGB32I}if(k===J.RGBA_INTEGER){if(b===J.UNSIGNED_BYTE)Y0=J.RGBA8UI;if(b===J.UNSIGNED_SHORT)Y0=J.RGBA16UI;if(b===J.UNSIGNED_INT)Y0=J.RGBA32UI;if(b===J.BYTE)Y0=J.RGBA8I;if(b===J.SHORT)Y0=J.RGBA16I;if(b===J.INT)Y0=J.RGBA32I}if(k===J.RGB){if(b===J.UNSIGNED_SHORT&&_0)Y0=_0.RGB16_EXT;if(b===J.SHORT&&_0)Y0=_0.RGB16_SNORM_EXT;if(b===J.UNSIGNED_INT_5_9_9_9_REV)Y0=J.RGB9_E5;if(b===J.UNSIGNED_INT_10F_11F_11F_REV)Y0=J.R11F_G11F_B10F}if(k===J.RGBA){let N0=I0?vW:EJ.getTransfer(q0);if(b===J.FLOAT)Y0=J.RGBA32F;if(b===J.HALF_FLOAT)Y0=J.RGBA16F;if(b===J.UNSIGNED_BYTE)Y0=N0===uJ?J.SRGB8_ALPHA8:J.RGBA8;if(b===J.UNSIGNED_SHORT&&_0)Y0=_0.RGBA16_EXT;if(b===J.SHORT&&_0)Y0=_0.RGBA16_SNORM_EXT;if(b===J.UNSIGNED_SHORT_4_4_4_4)Y0=J.RGBA4;if(b===J.UNSIGNED_SHORT_5_5_5_1)Y0=J.RGB5_A1}if(Y0===J.R16F||Y0===J.R32F||Y0===J.RG16F||Y0===J.RG32F||Y0===J.RGBA16F||Y0===J.RGBA32F)Q.get("EXT_color_buffer_float");return Y0}function L(T,k){let b;if(T){if(k===null||k===E7||k===l6)b=J.DEPTH24_STENCIL8;else if(k===n9)b=J.DEPTH32F_STENCIL8;else if(k===lQ)b=J.DEPTH24_STENCIL8,r0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(k===null||k===E7||k===l6)b=J.DEPTH_COMPONENT24;else if(k===n9)b=J.DEPTH_COMPONENT32F;else if(k===lQ)b=J.DEPTH_COMPONENT16;return b}function C(T,k){if(q(T)===!0||T.isFramebufferTexture&&T.minFilter!==F9&&T.minFilter!==q8)return Math.log2(Math.max(k.width,k.height))+1;else if(T.mipmaps!==void 0&&T.mipmaps.length>0)return T.mipmaps.length;else if(T.isCompressedTexture&&Array.isArray(T.image))return k.mipmaps.length;else return 1}function A(T){let k=T.target;if(k.removeEventListener("dispose",A),I(k),k.isVideoTexture)N.delete(k);if(k.isHTMLTexture)F.delete(k)}function D(T){let k=T.target;k.removeEventListener("dispose",D),f(k)}function I(T){let k=Z.get(T);if(k.__webglInit===void 0)return;let b=T.source,e=E.get(b);if(e){let q0=e[k.__cacheKey];if(q0.usedTimes--,q0.usedTimes===0)d(T);if(Object.keys(e).length===0)E.delete(b)}Z.remove(T)}function d(T){let k=Z.get(T);J.deleteTexture(k.__webglTexture);let b=T.source,e=E.get(b);delete e[k.__cacheKey],Y.memory.textures--}function f(T){let k=Z.get(T);if(T.depthTexture)T.depthTexture.dispose(),Z.remove(T.depthTexture);if(T.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(k.__webglFramebuffer[e]))for(let q0=0;q0<k.__webglFramebuffer[e].length;q0++)J.deleteFramebuffer(k.__webglFramebuffer[e][q0]);else J.deleteFramebuffer(k.__webglFramebuffer[e]);if(k.__webglDepthbuffer)J.deleteRenderbuffer(k.__webglDepthbuffer[e])}else{if(Array.isArray(k.__webglFramebuffer))for(let e=0;e<k.__webglFramebuffer.length;e++)J.deleteFramebuffer(k.__webglFramebuffer[e]);else J.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer)J.deleteRenderbuffer(k.__webglDepthbuffer);if(k.__webglMultisampledFramebuffer)J.deleteFramebuffer(k.__webglMultisampledFramebuffer);if(k.__webglColorRenderbuffer){for(let e=0;e<k.__webglColorRenderbuffer.length;e++)if(k.__webglColorRenderbuffer[e])J.deleteRenderbuffer(k.__webglColorRenderbuffer[e])}if(k.__webglDepthRenderbuffer)J.deleteRenderbuffer(k.__webglDepthRenderbuffer)}let b=T.textures;for(let e=0,q0=b.length;e<q0;e++){let I0=Z.get(b[e]);if(I0.__webglTexture)J.deleteTexture(I0.__webglTexture),Y.memory.textures--;Z.remove(b[e])}Z.remove(T)}let u=0;function $0(){u=0}function y(){return u}function j(T){u=T}function g(){let T=u;if(T>=K.maxTextures)r0("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+K.maxTextures);return u+=1,T}function v(T){let k=[];return k.push(T.wrapS),k.push(T.wrapT),k.push(T.wrapR||0),k.push(T.magFilter),k.push(T.minFilter),k.push(T.anisotropy),k.push(T.internalFormat),k.push(T.format),k.push(T.type),k.push(T.generateMipmaps),k.push(T.premultiplyAlpha),k.push(T.flipY),k.push(T.unpackAlignment),k.push(T.colorSpace),k.join()}function i(T,k){let b=Z.get(T);if(T.isVideoTexture)sJ(T);if(T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&b.__version!==T.version){let e=T.image;if(e===null)r0("WebGLRenderer: Texture marked for update but no image data found.");else if(e.complete===!1)r0("WebGLRenderer: Texture marked for update but image is incomplete");else{n(b,T,k);return}}else if(T.isExternalTexture)b.__webglTexture=T.sourceTexture?T.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,b.__webglTexture,J.TEXTURE0+k)}function x(T,k){let b=Z.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&b.__version!==T.version){n(b,T,k);return}else if(T.isExternalTexture)b.__webglTexture=T.sourceTexture?T.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,b.__webglTexture,J.TEXTURE0+k)}function a(T,k){let b=Z.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&b.__version!==T.version){n(b,T,k);return}$.bindTexture(J.TEXTURE_3D,b.__webglTexture,J.TEXTURE0+k)}function Q0(T,k){let b=Z.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&b.__version!==T.version){K0(b,T,k);return}$.bindTexture(J.TEXTURE_CUBE_MAP,b.__webglTexture,J.TEXTURE0+k)}let B0={[F7]:J.REPEAT,[g6]:J.CLAMP_TO_EDGE,[NZ]:J.MIRRORED_REPEAT},D0={[F9]:J.NEAREST,[GZ]:J.NEAREST_MIPMAP_NEAREST,[b7]:J.NEAREST_MIPMAP_LINEAR,[q8]:J.LINEAR,[p6]:J.LINEAR_MIPMAP_NEAREST,[_9]:J.LINEAR_MIPMAP_LINEAR},g0={[yH]:J.NEVER,[xH]:J.ALWAYS,[vH]:J.LESS,[DZ]:J.LEQUAL,[fH]:J.EQUAL,[BZ]:J.GEQUAL,[bH]:J.GREATER,[hH]:J.NOTEQUAL};function c0(T,k){if(k.type===n9&&Q.has("OES_texture_float_linear")===!1&&(k.magFilter===q8||k.magFilter===p6||k.magFilter===b7||k.magFilter===_9||k.minFilter===q8||k.minFilter===p6||k.minFilter===b7||k.minFilter===_9))r0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(T,J.TEXTURE_WRAP_S,B0[k.wrapS]),J.texParameteri(T,J.TEXTURE_WRAP_T,B0[k.wrapT]),T===J.TEXTURE_3D||T===J.TEXTURE_2D_ARRAY)J.texParameteri(T,J.TEXTURE_WRAP_R,B0[k.wrapR]);if(J.texParameteri(T,J.TEXTURE_MAG_FILTER,D0[k.magFilter]),J.texParameteri(T,J.TEXTURE_MIN_FILTER,D0[k.minFilter]),k.compareFunction)J.texParameteri(T,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(T,J.TEXTURE_COMPARE_FUNC,g0[k.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(k.magFilter===F9)return;if(k.minFilter!==b7&&k.minFilter!==_9)return;if(k.type===n9&&Q.has("OES_texture_float_linear")===!1)return;if(k.anisotropy>1||Z.get(k).__currentAnisotropy){let b=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(T,b.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(k.anisotropy,K.getMaxAnisotropy())),Z.get(k).__currentAnisotropy=k.anisotropy}}}function W0(T,k){let b=!1;if(T.__webglInit===void 0)T.__webglInit=!0,k.addEventListener("dispose",A);let e=k.source,q0=E.get(e);if(q0===void 0)q0={},E.set(e,q0);let I0=v(k);if(I0!==T.__cacheKey){if(q0[I0]===void 0)q0[I0]={texture:J.createTexture(),usedTimes:0},Y.memory.textures++,b=!0;q0[I0].usedTimes++;let _0=q0[T.__cacheKey];if(_0!==void 0){if(q0[T.__cacheKey].usedTimes--,_0.usedTimes===0)d(k)}T.__cacheKey=I0,T.__webglTexture=q0[I0].texture}return b}function w(T,k,b){return Math.floor(Math.floor(T/b)/k)}function l(T,k,b,e){let I0=T.updateRanges;if(I0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,k.width,k.height,b,e,k.data);else{I0.sort((i0,z0)=>i0.start-z0.start);let _0=0;for(let i0=1;i0<I0.length;i0++){let z0=I0[_0],M0=I0[i0],e0=z0.start+z0.count,t0=w(M0.start,k.width,4),IJ=w(z0.start,k.width,4);if(M0.start<=e0+1&&t0===IJ&&w(M0.start+M0.count-1,k.width,4)===t0)z0.count=Math.max(z0.count,M0.start+M0.count-z0.start);else++_0,I0[_0]=M0}I0.length=_0+1;let Y0=$.getParameter(J.UNPACK_ROW_LENGTH),N0=$.getParameter(J.UNPACK_SKIP_PIXELS),k0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,k.width);for(let i0=0,z0=I0.length;i0<z0;i0++){let M0=I0[i0],e0=Math.floor(M0.start/4),t0=Math.ceil(M0.count/4),IJ=e0%k.width,m=Math.floor(e0/k.width),T0=t0,X0=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,IJ),$.pixelStorei(J.UNPACK_SKIP_ROWS,m),$.texSubImage2D(J.TEXTURE_2D,0,IJ,m,T0,1,b,e,k.data)}T.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,Y0),$.pixelStorei(J.UNPACK_SKIP_PIXELS,N0),$.pixelStorei(J.UNPACK_SKIP_ROWS,k0)}}function n(T,k,b){let e=J.TEXTURE_2D;if(k.isDataArrayTexture||k.isCompressedArrayTexture)e=J.TEXTURE_2D_ARRAY;if(k.isData3DTexture)e=J.TEXTURE_3D;let q0=W0(T,k),I0=k.source;$.bindTexture(e,T.__webglTexture,J.TEXTURE0+b);let _0=Z.get(I0);if(I0.version!==_0.__version||q0===!0){if($.activeTexture(J.TEXTURE0+b),(typeof ImageBitmap<"u"&&k.image instanceof ImageBitmap)===!1){let X0=EJ.getPrimaries(EJ.workingColorSpace),A0=k.colorSpace===p7?null:EJ.getPrimaries(k.colorSpace),p0=k.colorSpace===p7||X0===A0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,k.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,p0)}$.pixelStorei(J.UNPACK_ALIGNMENT,k.unpackAlignment);let N0=R(k.image,!1,K.maxTextureSize);N0=UJ(k,N0);let k0=W.convert(k.format,k.colorSpace),i0=W.convert(k.type),z0=V(k.internalFormat,k0,i0,k.normalized,k.colorSpace,k.isVideoTexture);c0(e,k);let M0,e0=k.mipmaps,t0=k.isVideoTexture!==!0,IJ=_0.__version===void 0||q0===!0,m=I0.dataReady,T0=C(k,N0);if(k.isDepthTexture){if(z0=L(k.format===x7,k.type),IJ)if(t0)$.texStorage2D(J.TEXTURE_2D,1,z0,N0.width,N0.height);else $.texImage2D(J.TEXTURE_2D,0,z0,N0.width,N0.height,0,k0,i0,null)}else if(k.isDataTexture)if(e0.length>0){if(t0&&IJ)$.texStorage2D(J.TEXTURE_2D,T0,z0,e0[0].width,e0[0].height);for(let X0=0,A0=e0.length;X0<A0;X0++)if(M0=e0[X0],t0){if(m)$.texSubImage2D(J.TEXTURE_2D,X0,0,0,M0.width,M0.height,k0,i0,M0.data)}else $.texImage2D(J.TEXTURE_2D,X0,z0,M0.width,M0.height,0,k0,i0,M0.data);k.generateMipmaps=!1}else if(t0){if(IJ)$.texStorage2D(J.TEXTURE_2D,T0,z0,N0.width,N0.height);if(m)l(k,N0,k0,i0)}else $.texImage2D(J.TEXTURE_2D,0,z0,N0.width,N0.height,0,k0,i0,N0.data);else if(k.isCompressedTexture)if(k.isCompressedArrayTexture){if(t0&&IJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,T0,z0,e0[0].width,e0[0].height,N0.depth);for(let X0=0,A0=e0.length;X0<A0;X0++)if(M0=e0[X0],k.format!==T9)if(k0!==null)if(t0){if(m)if(k.layerUpdates.size>0){let p0=UY(M0.width,M0.height,k.format,k.type);for(let R0 of k.layerUpdates){let w0=M0.data.subarray(R0*p0/M0.data.BYTES_PER_ELEMENT,(R0+1)*p0/M0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,X0,0,0,R0,M0.width,M0.height,1,k0,w0)}}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,X0,0,0,0,M0.width,M0.height,N0.depth,k0,M0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,X0,z0,M0.width,M0.height,N0.depth,0,M0.data,0,0);else r0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(t0){if(m)$.texSubImage3D(J.TEXTURE_2D_ARRAY,X0,0,0,0,M0.width,M0.height,N0.depth,k0,i0,M0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,X0,z0,M0.width,M0.height,N0.depth,0,k0,i0,M0.data);if(k.layerUpdates.size>0)k.clearLayerUpdates()}else{if(t0&&IJ)$.texStorage2D(J.TEXTURE_2D,T0,z0,e0[0].width,e0[0].height);for(let X0=0,A0=e0.length;X0<A0;X0++)if(M0=e0[X0],k.format!==T9)if(k0!==null)if(t0){if(m)$.compressedTexSubImage2D(J.TEXTURE_2D,X0,0,0,M0.width,M0.height,k0,M0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,X0,z0,M0.width,M0.height,0,M0.data);else r0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(t0){if(m)$.texSubImage2D(J.TEXTURE_2D,X0,0,0,M0.width,M0.height,k0,i0,M0.data)}else $.texImage2D(J.TEXTURE_2D,X0,z0,M0.width,M0.height,0,k0,i0,M0.data)}else if(k.isDataArrayTexture)if(t0){if(IJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,T0,z0,N0.width,N0.height,N0.depth);if(m)if(k.layerUpdates.size>0){let X0=UY(N0.width,N0.height,k.format,k.type);for(let A0 of k.layerUpdates){let p0=N0.data.subarray(A0*X0/N0.data.BYTES_PER_ELEMENT,(A0+1)*X0/N0.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,A0,N0.width,N0.height,1,k0,i0,p0)}k.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,N0.width,N0.height,N0.depth,k0,i0,N0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,z0,N0.width,N0.height,N0.depth,0,k0,i0,N0.data);else if(k.isData3DTexture)if(t0){if(IJ)$.texStorage3D(J.TEXTURE_3D,T0,z0,N0.width,N0.height,N0.depth);if(m)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,N0.width,N0.height,N0.depth,k0,i0,N0.data)}else $.texImage3D(J.TEXTURE_3D,0,z0,N0.width,N0.height,N0.depth,0,k0,i0,N0.data);else if(k.isFramebufferTexture){if(IJ)if(t0)$.texStorage2D(J.TEXTURE_2D,T0,z0,N0.width,N0.height);else{let{width:X0,height:A0}=N0;for(let p0=0;p0<T0;p0++)$.texImage2D(J.TEXTURE_2D,p0,z0,X0,A0,0,k0,i0,null),X0>>=1,A0>>=1}}else if(k.isHTMLTexture){if("texElementImage2D"in J){let X0=J.canvas;if(!X0.hasAttribute("layoutsubtree"))X0.setAttribute("layoutsubtree","true");if(N0.parentNode!==X0){X0.appendChild(N0),F.add(k),X0.onpaint=(A0)=>{let p0=A0.changedElements;for(let R0 of F)if(p0.includes(R0.image))R0.needsUpdate=!0},X0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,N0);else{let{RGBA:p0,RGBA:R0,UNSIGNED_BYTE:w0}=J;J.texElementImage2D(J.TEXTURE_2D,0,p0,R0,w0,N0)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(e0.length>0){if(t0&&IJ){let X0=RJ(e0[0]);$.texStorage2D(J.TEXTURE_2D,T0,z0,X0.width,X0.height)}for(let X0=0,A0=e0.length;X0<A0;X0++)if(M0=e0[X0],t0){if(m)$.texSubImage2D(J.TEXTURE_2D,X0,0,0,k0,i0,M0)}else $.texImage2D(J.TEXTURE_2D,X0,z0,k0,i0,M0);k.generateMipmaps=!1}else if(t0){if(IJ){let X0=RJ(N0);$.texStorage2D(J.TEXTURE_2D,T0,z0,X0.width,X0.height)}if(m)$.texSubImage2D(J.TEXTURE_2D,0,0,0,k0,i0,N0)}else $.texImage2D(J.TEXTURE_2D,0,z0,k0,i0,N0);if(q(k))M(e);if(_0.__version=I0.version,k.onUpdate)k.onUpdate(k)}T.__version=k.version}function K0(T,k,b){if(k.image.length!==6)return;let e=W0(T,k),q0=k.source;$.bindTexture(J.TEXTURE_CUBE_MAP,T.__webglTexture,J.TEXTURE0+b);let I0=Z.get(q0);if(q0.version!==I0.__version||e===!0){$.activeTexture(J.TEXTURE0+b);let _0=EJ.getPrimaries(EJ.workingColorSpace),Y0=k.colorSpace===p7?null:EJ.getPrimaries(k.colorSpace),N0=k.colorSpace===p7||_0===Y0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,k.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,k.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,N0);let k0=k.isCompressedTexture||k.image[0].isCompressedTexture,i0=k.image[0]&&k.image[0].isDataTexture,z0=[];for(let R0=0;R0<6;R0++){if(!k0&&!i0)z0[R0]=R(k.image[R0],!0,K.maxCubemapSize);else z0[R0]=i0?k.image[R0].image:k.image[R0];z0[R0]=UJ(k,z0[R0])}let M0=z0[0],e0=W.convert(k.format,k.colorSpace),t0=W.convert(k.type),IJ=V(k.internalFormat,e0,t0,k.normalized,k.colorSpace),m=k.isVideoTexture!==!0,T0=I0.__version===void 0||e===!0,X0=q0.dataReady,A0=C(k,M0);c0(J.TEXTURE_CUBE_MAP,k);let p0;if(k0){if(m&&T0)$.texStorage2D(J.TEXTURE_CUBE_MAP,A0,IJ,M0.width,M0.height);for(let R0=0;R0<6;R0++){p0=z0[R0].mipmaps;for(let w0=0;w0<p0.length;w0++){let WJ=p0[w0];if(k.format!==T9)if(e0!==null)if(m){if(X0)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+R0,w0,0,0,WJ.width,WJ.height,e0,WJ.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+R0,w0,IJ,WJ.width,WJ.height,0,WJ.data);else r0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(m){if(X0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+R0,w0,0,0,WJ.width,WJ.height,e0,t0,WJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+R0,w0,IJ,WJ.width,WJ.height,0,e0,t0,WJ.data)}}}else{if(p0=k.mipmaps,m&&T0){if(p0.length>0)A0++;let R0=RJ(z0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,A0,IJ,R0.width,R0.height)}for(let R0=0;R0<6;R0++)if(i0){if(m){if(X0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+R0,0,0,0,z0[R0].width,z0[R0].height,e0,t0,z0[R0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+R0,0,IJ,z0[R0].width,z0[R0].height,0,e0,t0,z0[R0].data);for(let w0=0;w0<p0.length;w0++){let cJ=p0[w0].image[R0].image;if(m){if(X0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+R0,w0+1,0,0,cJ.width,cJ.height,e0,t0,cJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+R0,w0+1,IJ,cJ.width,cJ.height,0,e0,t0,cJ.data)}}else{if(m){if(X0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+R0,0,0,0,e0,t0,z0[R0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+R0,0,IJ,e0,t0,z0[R0]);for(let w0=0;w0<p0.length;w0++){let WJ=p0[w0];if(m){if(X0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+R0,w0+1,0,0,e0,t0,WJ.image[R0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+R0,w0+1,IJ,e0,t0,WJ.image[R0])}}}if(q(k))M(J.TEXTURE_CUBE_MAP);if(I0.__version=q0.version,k.onUpdate)k.onUpdate(k)}T.__version=k.version}function t(T,k,b,e,q0,I0){let _0=W.convert(b.format,b.colorSpace),Y0=W.convert(b.type),N0=V(b.internalFormat,_0,Y0,b.normalized,b.colorSpace),k0=Z.get(k),i0=Z.get(b);if(i0.__renderTarget=k,!k0.__hasExternalTextures){let z0=Math.max(1,k.width>>I0),M0=Math.max(1,k.height>>I0);if(q0===J.TEXTURE_3D||q0===J.TEXTURE_2D_ARRAY)$.texImage3D(q0,I0,N0,z0,M0,k.depth,0,_0,Y0,null);else $.texImage2D(q0,I0,N0,z0,M0,0,_0,Y0,null)}if($.bindFramebuffer(J.FRAMEBUFFER,T),h(k))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,e,q0,i0.__webglTexture,0,gJ(k));else if(q0===J.TEXTURE_2D||q0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&q0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,e,q0,i0.__webglTexture,I0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function L0(T,k,b){if(J.bindRenderbuffer(J.RENDERBUFFER,T),k.depthBuffer){let e=k.depthTexture,q0=e&&e.isDepthTexture?e.type:null,I0=L(k.stencilBuffer,q0),_0=k.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(h(k))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,gJ(k),I0,k.width,k.height);else if(b)J.renderbufferStorageMultisample(J.RENDERBUFFER,gJ(k),I0,k.width,k.height);else J.renderbufferStorage(J.RENDERBUFFER,I0,k.width,k.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,_0,J.RENDERBUFFER,T)}else{let e=k.textures;for(let q0=0;q0<e.length;q0++){let I0=e[q0],_0=W.convert(I0.format,I0.colorSpace),Y0=W.convert(I0.type),N0=V(I0.internalFormat,_0,Y0,I0.normalized,I0.colorSpace);if(h(k))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,gJ(k),N0,k.width,k.height);else if(b)J.renderbufferStorageMultisample(J.RENDERBUFFER,gJ(k),N0,k.width,k.height);else J.renderbufferStorage(J.RENDERBUFFER,N0,k.width,k.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function O0(T,k,b){let e=k.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,T),!(k.depthTexture&&k.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q0=Z.get(k.depthTexture);if(q0.__renderTarget=k,!q0.__webglTexture||k.depthTexture.image.width!==k.width||k.depthTexture.image.height!==k.height)k.depthTexture.image.width=k.width,k.depthTexture.image.height=k.height,k.depthTexture.needsUpdate=!0;if(e){if(q0.__webglInit===void 0)q0.__webglInit=!0,k.depthTexture.addEventListener("dispose",A);if(q0.__webglTexture===void 0){q0.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,q0.__webglTexture),c0(J.TEXTURE_CUBE_MAP,k.depthTexture);let k0=W.convert(k.depthTexture.format),i0=W.convert(k.depthTexture.type),z0;if(k.depthTexture.format===h7)z0=J.DEPTH_COMPONENT24;else if(k.depthTexture.format===x7)z0=J.DEPTH24_STENCIL8;for(let M0=0;M0<6;M0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+M0,0,z0,k.width,k.height,0,k0,i0,null)}}else i(k.depthTexture,0);let I0=q0.__webglTexture,_0=gJ(k),Y0=e?J.TEXTURE_CUBE_MAP_POSITIVE_X+b:J.TEXTURE_2D,N0=k.depthTexture.format===x7?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(k.depthTexture.format===h7)if(h(k))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,N0,Y0,I0,0,_0);else J.framebufferTexture2D(J.FRAMEBUFFER,N0,Y0,I0,0);else if(k.depthTexture.format===x7)if(h(k))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,N0,Y0,I0,0,_0);else J.framebufferTexture2D(J.FRAMEBUFFER,N0,Y0,I0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function U0(T){let k=Z.get(T),b=T.isWebGLCubeRenderTarget===!0;if(k.__boundDepthTexture!==T.depthTexture){let e=T.depthTexture;if(k.__depthDisposeCallback)k.__depthDisposeCallback();if(e){let q0=()=>{delete k.__boundDepthTexture,delete k.__depthDisposeCallback,e.removeEventListener("dispose",q0)};e.addEventListener("dispose",q0),k.__depthDisposeCallback=q0}k.__boundDepthTexture=e}if(T.depthTexture&&!k.__autoAllocateDepthBuffer)if(b)for(let e=0;e<6;e++)O0(k.__webglFramebuffer[e],T,e);else{let e=T.texture.mipmaps;if(e&&e.length>0)O0(k.__webglFramebuffer[0],T,0);else O0(k.__webglFramebuffer,T,0)}else if(b){k.__webglDepthbuffer=[];for(let e=0;e<6;e++)if($.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer[e]),k.__webglDepthbuffer[e]===void 0)k.__webglDepthbuffer[e]=J.createRenderbuffer(),L0(k.__webglDepthbuffer[e],T,!1);else{let q0=T.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,I0=k.__webglDepthbuffer[e];J.bindRenderbuffer(J.RENDERBUFFER,I0),J.framebufferRenderbuffer(J.FRAMEBUFFER,q0,J.RENDERBUFFER,I0)}}else{let e=T.texture.mipmaps;if(e&&e.length>0)$.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,k.__webglFramebuffer);if(k.__webglDepthbuffer===void 0)k.__webglDepthbuffer=J.createRenderbuffer(),L0(k.__webglDepthbuffer,T,!1);else{let q0=T.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,I0=k.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,I0),J.framebufferRenderbuffer(J.FRAMEBUFFER,q0,J.RENDERBUFFER,I0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function S0(T,k,b){let e=Z.get(T);if(k!==void 0)t(e.__webglFramebuffer,T,T.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(b!==void 0)U0(T)}function n0(T){let k=T.texture,b=Z.get(T),e=Z.get(k);T.addEventListener("dispose",D);let q0=T.textures,I0=T.isWebGLCubeRenderTarget===!0,_0=q0.length>1;if(!_0){if(e.__webglTexture===void 0)e.__webglTexture=J.createTexture();e.__version=k.version,Y.memory.textures++}if(I0){b.__webglFramebuffer=[];for(let Y0=0;Y0<6;Y0++)if(k.mipmaps&&k.mipmaps.length>0){b.__webglFramebuffer[Y0]=[];for(let N0=0;N0<k.mipmaps.length;N0++)b.__webglFramebuffer[Y0][N0]=J.createFramebuffer()}else b.__webglFramebuffer[Y0]=J.createFramebuffer()}else{if(k.mipmaps&&k.mipmaps.length>0){b.__webglFramebuffer=[];for(let Y0=0;Y0<k.mipmaps.length;Y0++)b.__webglFramebuffer[Y0]=J.createFramebuffer()}else b.__webglFramebuffer=J.createFramebuffer();if(_0)for(let Y0=0,N0=q0.length;Y0<N0;Y0++){let k0=Z.get(q0[Y0]);if(k0.__webglTexture===void 0)k0.__webglTexture=J.createTexture(),Y.memory.textures++}if(T.samples>0&&h(T)===!1){b.__webglMultisampledFramebuffer=J.createFramebuffer(),b.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,b.__webglMultisampledFramebuffer);for(let Y0=0;Y0<q0.length;Y0++){let N0=q0[Y0];b.__webglColorRenderbuffer[Y0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,b.__webglColorRenderbuffer[Y0]);let k0=W.convert(N0.format,N0.colorSpace),i0=W.convert(N0.type),z0=V(N0.internalFormat,k0,i0,N0.normalized,N0.colorSpace,T.isXRRenderTarget===!0),M0=gJ(T);J.renderbufferStorageMultisample(J.RENDERBUFFER,M0,z0,T.width,T.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+Y0,J.RENDERBUFFER,b.__webglColorRenderbuffer[Y0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),T.depthBuffer)b.__webglDepthRenderbuffer=J.createRenderbuffer(),L0(b.__webglDepthRenderbuffer,T,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(I0){$.bindTexture(J.TEXTURE_CUBE_MAP,e.__webglTexture),c0(J.TEXTURE_CUBE_MAP,k);for(let Y0=0;Y0<6;Y0++)if(k.mipmaps&&k.mipmaps.length>0)for(let N0=0;N0<k.mipmaps.length;N0++)t(b.__webglFramebuffer[Y0][N0],T,k,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,N0);else t(b.__webglFramebuffer[Y0],T,k,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+Y0,0);if(q(k))M(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(_0){for(let Y0=0,N0=q0.length;Y0<N0;Y0++){let k0=q0[Y0],i0=Z.get(k0),z0=J.TEXTURE_2D;if(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)z0=T.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(z0,i0.__webglTexture),c0(z0,k0),t(b.__webglFramebuffer,T,k0,J.COLOR_ATTACHMENT0+Y0,z0,0),q(k0))M(z0)}$.unbindTexture()}else{let Y0=J.TEXTURE_2D;if(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)Y0=T.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(Y0,e.__webglTexture),c0(Y0,k),k.mipmaps&&k.mipmaps.length>0)for(let N0=0;N0<k.mipmaps.length;N0++)t(b.__webglFramebuffer[N0],T,k,J.COLOR_ATTACHMENT0,Y0,N0);else t(b.__webglFramebuffer,T,k,J.COLOR_ATTACHMENT0,Y0,0);if(q(k))M(Y0);$.unbindTexture()}if(T.depthBuffer)U0(T)}function FJ(T){let k=T.textures;for(let b=0,e=k.length;b<e;b++){let q0=k[b];if(q(q0)){let I0=P(T),_0=Z.get(q0).__webglTexture;$.bindTexture(I0,_0),M(I0),$.unbindTexture()}}}let b0=[],PJ=[];function SJ(T){if(T.samples>0){if(h(T)===!1){let{textures:k,width:b,height:e}=T,q0=J.COLOR_BUFFER_BIT,I0=T.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,_0=Z.get(T),Y0=k.length>1;if(Y0)for(let k0=0;k0<k.length;k0++)$.bindFramebuffer(J.FRAMEBUFFER,_0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+k0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,_0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+k0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,_0.__webglMultisampledFramebuffer);let N0=T.texture.mipmaps;if(N0&&N0.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,_0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,_0.__webglFramebuffer);for(let k0=0;k0<k.length;k0++){if(T.resolveDepthBuffer){if(T.depthBuffer)q0|=J.DEPTH_BUFFER_BIT;if(T.stencilBuffer&&T.resolveStencilBuffer)q0|=J.STENCIL_BUFFER_BIT}if(Y0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,_0.__webglColorRenderbuffer[k0]);let i0=Z.get(k[k0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,i0,0)}if(J.blitFramebuffer(0,0,b,e,0,0,b,e,q0,J.NEAREST),H===!0){if(b0.length=0,PJ.length=0,b0.push(J.COLOR_ATTACHMENT0+k0),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1)b0.push(I0),PJ.push(I0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,PJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,b0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),Y0)for(let k0=0;k0<k.length;k0++){$.bindFramebuffer(J.FRAMEBUFFER,_0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+k0,J.RENDERBUFFER,_0.__webglColorRenderbuffer[k0]);let i0=Z.get(k[k0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,_0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+k0,J.TEXTURE_2D,i0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,_0.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&H){let k=T.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[k])}}}function gJ(T){return Math.min(K.maxSamples,T.samples)}function h(T){let k=Z.get(T);return T.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&k.__useRenderToTexture!==!1}function sJ(T){let k=Y.render.frame;if(N.get(T)!==k)N.set(T,k),T.update()}function UJ(T,k){let{colorSpace:b,format:e,type:q0}=T;if(T.isCompressedTexture===!0||T.isVideoTexture===!0)return k;if(b!==p8&&b!==p7)if(EJ.getTransfer(b)===uJ){if(e!==T9||q0!==E9)r0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else $J("WebGLTextures: Unsupported texture color space:",b);return k}function RJ(T){if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement)U.width=T.naturalWidth||T.width,U.height=T.naturalHeight||T.height;else if(typeof VideoFrame<"u"&&T instanceof VideoFrame)U.width=T.displayWidth,U.height=T.displayHeight;else U.width=T.width,U.height=T.height;return U}this.allocateTextureUnit=g,this.resetTextureUnits=$0,this.getTextureUnits=y,this.setTextureUnits=j,this.setTexture2D=i,this.setTexture2DArray=x,this.setTexture3D=a,this.setTextureCube=Q0,this.rebindTextures=S0,this.setupRenderTarget=n0,this.updateRenderTargetMipmap=FJ,this.updateMultisampleRenderTarget=SJ,this.setupDepthRenderbuffer=U0,this.setupFrameBufferTexture=t,this.useMultisampledRTT=h,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function JO(J,Q){function $(Z,K=p7){let W,Y=EJ.getTransfer(K);if(Z===E9)return J.UNSIGNED_BYTE;if(Z===aK)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===rK)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===AH)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===_H)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===IH)return J.BYTE;if(Z===zH)return J.SHORT;if(Z===lQ)return J.UNSIGNED_SHORT;if(Z===oK)return J.INT;if(Z===E7)return J.UNSIGNED_INT;if(Z===n9)return J.FLOAT;if(Z===O8)return J.HALF_FLOAT;if(Z===TH)return J.ALPHA;if(Z===SH)return J.RGB;if(Z===T9)return J.RGBA;if(Z===h7)return J.DEPTH_COMPONENT;if(Z===x7)return J.DEPTH_STENCIL;if(Z===wH)return J.RED;if(Z===tK)return J.RED_INTEGER;if(Z===g7)return J.RG;if(Z===eK)return J.RG_INTEGER;if(Z===JW)return J.RGBA_INTEGER;if(Z===FZ||Z===EZ||Z===qZ||Z===OZ)if(Y===uJ)if(W=Q.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(Z===FZ)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===EZ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===qZ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===OZ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=Q.get("WEBGL_compressed_texture_s3tc"),W!==null){if(Z===FZ)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===EZ)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===qZ)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===OZ)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===QW||Z===$W||Z===ZW||Z===KW)if(W=Q.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(Z===QW)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===$W)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===ZW)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===KW)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===WW||Z===YW||Z===XW||Z===HW||Z===UW||Z===RZ||Z===NW)if(W=Q.get("WEBGL_compressed_texture_etc"),W!==null){if(Z===WW||Z===YW)return Y===uJ?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(Z===XW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(Z===HW)return W.COMPRESSED_R11_EAC;if(Z===UW)return W.COMPRESSED_SIGNED_R11_EAC;if(Z===RZ)return W.COMPRESSED_RG11_EAC;if(Z===NW)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===GW||Z===FW||Z===EW||Z===qW||Z===OW||Z===RW||Z===LW||Z===VW||Z===DW||Z===BW||Z===MW||Z===kW||Z===CW||Z===PW)if(W=Q.get("WEBGL_compressed_texture_astc"),W!==null){if(Z===GW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===FW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===EW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===qW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===OW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===RW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===LW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===VW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===DW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===BW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===MW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===kW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===CW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===PW)return Y===uJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===IW||Z===zW||Z===AW)if(W=Q.get("EXT_texture_compression_bptc"),W!==null){if(Z===IW)return Y===uJ?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===zW)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===AW)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===_W||Z===TW||Z===LZ||Z===SW)if(W=Q.get("EXT_texture_compression_rgtc"),W!==null){if(Z===_W)return W.COMPRESSED_RED_RGTC1_EXT;if(Z===TW)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===LZ)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===SW)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===l6)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var QO=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$O=`
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

}`;class fU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new TZ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new tJ({vertexShader:QO,fragmentShader:$O,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new P0(new qJ(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bU extends q9{constructor(J,Q){super();let $=this,Z=null,K=1,W=null,Y="local-floor",X=1,H=null,U=null,N=null,F=null,G=null,E=null,O=typeof XRWebGLBinding<"u",B=new fU,R={},q=Q.getContextAttributes(),M=null,P=null,V=[],L=[],C=new F0,A=null,D=null,I=new H8;I.viewport=new mJ;let d=new H8;d.viewport=new mJ;let f=[I,d],u=new ZY,$0=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W0){let w=V[W0];if(w===void 0)w=new dQ,V[W0]=w;return w.getTargetRaySpace()},this.getControllerGrip=function(W0){let w=V[W0];if(w===void 0)w=new dQ,V[W0]=w;return w.getGripSpace()},this.getHand=function(W0){let w=V[W0];if(w===void 0)w=new dQ,V[W0]=w;return w.getHandSpace()};function j(W0){let w=L.indexOf(W0.inputSource);if(w===-1)return;let l=V[w];if(l!==void 0)l.update(W0.inputSource,W0.frame,H||W),l.dispatchEvent({type:W0.type,data:W0.inputSource})}function g(){Z.removeEventListener("select",j),Z.removeEventListener("selectstart",j),Z.removeEventListener("selectend",j),Z.removeEventListener("squeeze",j),Z.removeEventListener("squeezestart",j),Z.removeEventListener("squeezeend",j),Z.removeEventListener("end",g),Z.removeEventListener("inputsourceschange",v);for(let W0=0;W0<V.length;W0++){let w=L[W0];if(w===null)continue;L[W0]=null,V[W0].disconnect(w)}$0=null,y=null,B.reset();for(let W0 in R)delete R[W0];if(J.setRenderTarget(M),G=null,F=null,N=null,Z=null,P=null,c0.stop(),$.isPresenting=!1,J.setPixelRatio(A),J.setSize(C.width,C.height,!1),D!==null){let W0=D.camera;W0.fov=D.fov,W0.zoom=D.zoom,W0.updateProjectionMatrix(),D=null}$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W0){if(K=W0,$.isPresenting===!0)r0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W0){if(Y=W0,$.isPresenting===!0)r0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return H||W},this.setReferenceSpace=function(W0){H=W0},this.getBaseLayer=function(){return F!==null?F:G},this.getBinding=function(){if(N===null&&O)N=new XRWebGLBinding(Z,Q);return N},this.getFrame=function(){return E},this.getSession=function(){return Z},this.setSession=async function(W0){if(Z=W0,Z!==null){if(M=J.getRenderTarget(),Z.addEventListener("select",j),Z.addEventListener("selectstart",j),Z.addEventListener("selectend",j),Z.addEventListener("squeeze",j),Z.addEventListener("squeezestart",j),Z.addEventListener("squeezeend",j),Z.addEventListener("end",g),Z.addEventListener("inputsourceschange",v),q.xrCompatible!==!0)await Q.makeXRCompatible();if(A=J.getPixelRatio(),J.getSize(C),!(O&&("createProjectionLayer"in XRWebGLBinding.prototype))){let l={antialias:q.antialias,alpha:!0,depth:q.depth,stencil:q.stencil,framebufferScaleFactor:K};G=new XRWebGLLayer(Z,Q,l),Z.updateRenderState({baseLayer:G}),J.setPixelRatio(1),J.setSize(G.framebufferWidth,G.framebufferHeight,!1),P=new Q8(G.framebufferWidth,G.framebufferHeight,{format:T9,type:E9,colorSpace:J.outputColorSpace,stencilBuffer:q.stencil,resolveDepthBuffer:G.ignoreDepthValues===!1,resolveStencilBuffer:G.ignoreDepthValues===!1,storeMultisampledDepthBuffer:G.ignoreDepthValues===!1,storeMultisampledStencilBuffer:G.ignoreDepthValues===!1})}else{let l=null,n=null,K0=null;if(q.depth)K0=q.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,l=q.stencil?x7:h7,n=q.stencil?l6:E7;let t={colorFormat:Q.RGBA8,depthFormat:K0,scaleFactor:K};N=this.getBinding(),F=N.createProjectionLayer(t),Z.updateRenderState({layers:[F]}),J.setPixelRatio(1),J.setSize(F.textureWidth,F.textureHeight,!1),P=new Q8(F.textureWidth,F.textureHeight,{format:T9,type:E9,depthTexture:new d7(F.textureWidth,F.textureHeight,n,void 0,void 0,void 0,void 0,void 0,void 0,l),stencilBuffer:q.stencil,colorSpace:J.outputColorSpace,samples:q.antialias?4:0,resolveDepthBuffer:F.ignoreDepthValues===!1,resolveStencilBuffer:F.ignoreDepthValues===!1,storeMultisampledDepthBuffer:F.ignoreDepthValues===!1,storeMultisampledStencilBuffer:F.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(X),H=null,W=await Z.requestReferenceSpace(Y),c0.setContext(Z),c0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return B.getDepthTexture()};function v(W0){for(let w=0;w<W0.removed.length;w++){let l=W0.removed[w],n=L.indexOf(l);if(n>=0)L[n]=null,V[n].disconnect(l)}for(let w=0;w<W0.added.length;w++){let l=W0.added[w],n=L.indexOf(l);if(n===-1){for(let t=0;t<V.length;t++)if(t>=L.length){L.push(l),n=t;break}else if(L[t]===null){L[t]=l,n=t;break}if(n===-1)break}let K0=V[n];if(K0)K0.connect(l)}}let i=new _,x=new _;function a(W0,w,l){i.setFromMatrixPosition(w.matrixWorld),x.setFromMatrixPosition(l.matrixWorld);let n=i.distanceTo(x),K0=w.projectionMatrix.elements,t=l.projectionMatrix.elements,L0=K0[14]/(K0[10]-1),O0=K0[14]/(K0[10]+1),U0=(K0[9]+1)/K0[5],S0=(K0[9]-1)/K0[5],n0=(K0[8]-1)/K0[0],FJ=(t[8]+1)/t[0],b0=L0*n0,PJ=L0*FJ,SJ=n/(-n0+FJ),gJ=SJ*-n0;if(w.matrixWorld.decompose(W0.position,W0.quaternion,W0.scale),W0.translateX(gJ),W0.translateZ(SJ),W0.matrixWorld.compose(W0.position,W0.quaternion,W0.scale),W0.matrixWorldInverse.copy(W0.matrixWorld).invert(),K0[10]===-1)W0.projectionMatrix.copy(w.projectionMatrix),W0.projectionMatrixInverse.copy(w.projectionMatrixInverse);else{let h=L0+SJ,sJ=O0+SJ,UJ=b0-gJ,RJ=PJ+(n-gJ),T=U0*O0/sJ*h,k=S0*O0/sJ*h;W0.projectionMatrix.makePerspective(UJ,RJ,T,k,h,sJ),W0.projectionMatrixInverse.copy(W0.projectionMatrix).invert()}}function Q0(W0,w){if(w===null)W0.matrixWorld.copy(W0.matrix);else W0.matrixWorld.multiplyMatrices(w.matrixWorld,W0.matrix);W0.matrixWorldInverse.copy(W0.matrixWorld).invert()}this.updateCamera=function(W0){if(Z===null)return;let{near:w,far:l}=W0;if(B.texture!==null){if(B.depthNear>0)w=B.depthNear;if(B.depthFar>0)l=B.depthFar}if(u.near=d.near=I.near=w,u.far=d.far=I.far=l,$0!==u.near||y!==u.far)Z.updateRenderState({depthNear:u.near,depthFar:u.far}),$0=u.near,y=u.far;u.layers.mask=W0.layers.mask|6,I.layers.mask=u.layers.mask&-5,d.layers.mask=u.layers.mask&-3;let n=W0.parent,K0=u.cameras;Q0(u,n);for(let t=0;t<K0.length;t++)Q0(K0[t],n);if(K0.length===2)a(u,I,d);else u.projectionMatrix.copy(I.projectionMatrix);if(D===null&&W0.isPerspectiveCamera)D={camera:W0,fov:W0.fov,zoom:W0.zoom};B0(W0,u,n)};function B0(W0,w,l){if(l===null)W0.matrix.copy(w.matrixWorld);else W0.matrix.copy(l.matrixWorld),W0.matrix.invert(),W0.matrix.multiply(w.matrixWorld);if(W0.matrix.decompose(W0.position,W0.quaternion,W0.scale),W0.updateMatrixWorld(!0),W0.projectionMatrix.copy(w.projectionMatrix),W0.projectionMatrixInverse.copy(w.projectionMatrixInverse),W0.isPerspectiveCamera)W0.fov=w7*2*Math.atan(1/W0.projectionMatrix.elements[5]),W0.zoom=1}this.getCamera=function(){return u},this.getFoveation=function(){if(F===null&&G===null)return;return X},this.setFoveation=function(W0){if(X=W0,F!==null)F.fixedFoveation=W0;if(G!==null&&G.fixedFoveation!==void 0)G.fixedFoveation=W0},this.hasDepthSensing=function(){return B.texture!==null},this.getDepthSensingMesh=function(){return B.getMesh(u)},this.getCameraTexture=function(W0){return R[W0]};let D0=null;function g0(W0,w){if(U=w.getViewerPose(H||W),E=w,U!==null){let l=U.views;if(G!==null)J.setRenderTargetFramebuffer(P,G.framebuffer),J.setRenderTarget(P);let n=!1;if(l.length!==u.cameras.length)u.cameras.length=0,n=!0;for(let O0=0;O0<l.length;O0++){let U0=l[O0],S0=null;if(G!==null)S0=G.getViewport(U0);else{let FJ=N.getViewSubImage(F,U0);if(S0=FJ.viewport,O0===0)J.setRenderTargetTextures(P,FJ.colorTexture,FJ.depthStencilTexture),J.setRenderTarget(P)}let n0=f[O0];if(n0===void 0)n0=new H8,n0.layers.enable(O0),n0.viewport=new mJ,f[O0]=n0;if(n0.matrix.fromArray(U0.transform.matrix),n0.matrix.decompose(n0.position,n0.quaternion,n0.scale),n0.projectionMatrix.fromArray(U0.projectionMatrix),n0.projectionMatrixInverse.copy(n0.projectionMatrix).invert(),n0.viewport.set(S0.x,S0.y,S0.width,S0.height),O0===0)u.matrix.copy(n0.matrix),u.matrix.decompose(u.position,u.quaternion,u.scale);if(n===!0)u.cameras.push(n0)}let K0=Z.enabledFeatures;if(K0&&K0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&O){N=$.getBinding();let O0=N.getDepthInformation(l[0]);if(O0&&O0.isValid&&O0.texture)B.init(O0,Z.renderState)}if(K0&&K0.includes("camera-access")&&O){J.state.unbindTexture(),N=$.getBinding();for(let O0=0;O0<l.length;O0++){let U0=l[O0].camera;if(U0){let S0=R[U0];if(!S0)S0=new TZ,R[U0]=S0;let n0=N.getCameraImage(U0);S0.sourceTexture=n0}}}}for(let l=0;l<V.length;l++){let n=L[l],K0=V[l];if(n!==null&&K0!==void 0)K0.update(n,w,H||W)}if(D0)D0(W0,w);if(w.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:w});E=null}let c0=new PU;c0.setAnimationLoop(g0),this.setAnimationLoop=function(W0){D0=W0},this.dispose=function(){}}}var ZO=new QJ,hU=new XJ;hU.set(-1,0,0,0,1,0,0,0,1);function KO(J,Q){function $(R,q){if(R.matrixAutoUpdate===!0)R.updateMatrix();q.value.copy(R.matrix)}function Z(R,q){if(q.color.getRGB(R.fogColor.value,sW(J)),q.isFog)R.fogNear.value=q.near,R.fogFar.value=q.far;else if(q.isFogExp2)R.fogDensity.value=q.density}function K(R,q,M,P,V){if(q.isNodeMaterial)q.uniformsNeedUpdate=!1;else if(q.isMeshBasicMaterial)W(R,q);else if(q.isMeshLambertMaterial){if(W(R,q),q.envMap)R.envMapIntensity.value=q.envMapIntensity}else if(q.isMeshToonMaterial)W(R,q),F(R,q);else if(q.isMeshPhongMaterial){if(W(R,q),N(R,q),q.envMap)R.envMapIntensity.value=q.envMapIntensity}else if(q.isMeshStandardMaterial){if(W(R,q),G(R,q),q.isMeshPhysicalMaterial)E(R,q,V)}else if(q.isMeshMatcapMaterial)W(R,q),O(R,q);else if(q.isMeshDepthMaterial)W(R,q);else if(q.isMeshDistanceMaterial)W(R,q),B(R,q);else if(q.isMeshNormalMaterial)W(R,q);else if(q.isLineBasicMaterial){if(Y(R,q),q.isLineDashedMaterial)X(R,q)}else if(q.isPointsMaterial)H(R,q,M,P);else if(q.isSpriteMaterial)U(R,q);else if(q.isShadowMaterial)R.color.value.copy(q.color),R.opacity.value=q.opacity;else if(q.isShaderMaterial)q.uniformsNeedUpdate=!1}function W(R,q){if(R.opacity.value=q.opacity,q.color)R.diffuse.value.copy(q.color);if(q.emissive)R.emissive.value.copy(q.emissive).multiplyScalar(q.emissiveIntensity);if(q.map)R.map.value=q.map,$(q.map,R.mapTransform);if(q.alphaMap)R.alphaMap.value=q.alphaMap,$(q.alphaMap,R.alphaMapTransform);if(q.bumpMap){if(R.bumpMap.value=q.bumpMap,$(q.bumpMap,R.bumpMapTransform),R.bumpScale.value=q.bumpScale,q.side===D8)R.bumpScale.value*=-1}if(q.normalMap){if(R.normalMap.value=q.normalMap,$(q.normalMap,R.normalMapTransform),R.normalScale.value.copy(q.normalScale),q.side===D8)R.normalScale.value.negate()}if(q.displacementMap)R.displacementMap.value=q.displacementMap,$(q.displacementMap,R.displacementMapTransform),R.displacementScale.value=q.displacementScale,R.displacementBias.value=q.displacementBias;if(q.emissiveMap)R.emissiveMap.value=q.emissiveMap,$(q.emissiveMap,R.emissiveMapTransform);if(q.specularMap)R.specularMap.value=q.specularMap,$(q.specularMap,R.specularMapTransform);if(q.alphaTest>0)R.alphaTest.value=q.alphaTest;let M=Q.get(q),P=M.envMap,V=M.envMapRotation;if(P){if(R.envMap.value=P,R.envMapRotation.value.setFromMatrix4(ZO.makeRotationFromEuler(V)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1)R.envMapRotation.value.premultiply(hU);R.reflectivity.value=q.reflectivity,R.ior.value=q.ior,R.refractionRatio.value=q.refractionRatio}if(q.lightMap)R.lightMap.value=q.lightMap,R.lightMapIntensity.value=q.lightMapIntensity,$(q.lightMap,R.lightMapTransform);if(q.aoMap)R.aoMap.value=q.aoMap,R.aoMapIntensity.value=q.aoMapIntensity,$(q.aoMap,R.aoMapTransform)}function Y(R,q){if(R.diffuse.value.copy(q.color),R.opacity.value=q.opacity,q.map)R.map.value=q.map,$(q.map,R.mapTransform)}function X(R,q){R.dashSize.value=q.dashSize,R.totalSize.value=q.dashSize+q.gapSize,R.scale.value=q.scale}function H(R,q,M,P){if(R.diffuse.value.copy(q.color),R.opacity.value=q.opacity,R.size.value=q.size*M,R.scale.value=P*0.5,q.map)R.map.value=q.map,$(q.map,R.uvTransform);if(q.alphaMap)R.alphaMap.value=q.alphaMap,$(q.alphaMap,R.alphaMapTransform);if(q.alphaTest>0)R.alphaTest.value=q.alphaTest}function U(R,q){if(R.diffuse.value.copy(q.color),R.opacity.value=q.opacity,R.rotation.value=q.rotation,q.map)R.map.value=q.map,$(q.map,R.mapTransform);if(q.alphaMap)R.alphaMap.value=q.alphaMap,$(q.alphaMap,R.alphaMapTransform);if(q.alphaTest>0)R.alphaTest.value=q.alphaTest}function N(R,q){R.specular.value.copy(q.specular),R.shininess.value=Math.max(q.shininess,0.0001)}function F(R,q){if(q.gradientMap)R.gradientMap.value=q.gradientMap}function G(R,q){if(R.metalness.value=q.metalness,q.metalnessMap)R.metalnessMap.value=q.metalnessMap,$(q.metalnessMap,R.metalnessMapTransform);if(R.roughness.value=q.roughness,q.roughnessMap)R.roughnessMap.value=q.roughnessMap,$(q.roughnessMap,R.roughnessMapTransform);if(q.envMap)R.envMapIntensity.value=q.envMapIntensity}function E(R,q,M){if(R.ior.value=q.ior,q.sheen>0){if(R.sheenColor.value.copy(q.sheenColor).multiplyScalar(q.sheen),R.sheenRoughness.value=q.sheenRoughness,q.sheenColorMap)R.sheenColorMap.value=q.sheenColorMap,$(q.sheenColorMap,R.sheenColorMapTransform);if(q.sheenRoughnessMap)R.sheenRoughnessMap.value=q.sheenRoughnessMap,$(q.sheenRoughnessMap,R.sheenRoughnessMapTransform)}if(q.clearcoat>0){if(R.clearcoat.value=q.clearcoat,R.clearcoatRoughness.value=q.clearcoatRoughness,q.clearcoatMap)R.clearcoatMap.value=q.clearcoatMap,$(q.clearcoatMap,R.clearcoatMapTransform);if(q.clearcoatRoughnessMap)R.clearcoatRoughnessMap.value=q.clearcoatRoughnessMap,$(q.clearcoatRoughnessMap,R.clearcoatRoughnessMapTransform);if(q.clearcoatNormalMap){if(R.clearcoatNormalMap.value=q.clearcoatNormalMap,$(q.clearcoatNormalMap,R.clearcoatNormalMapTransform),R.clearcoatNormalScale.value.copy(q.clearcoatNormalScale),q.side===D8)R.clearcoatNormalScale.value.negate()}}if(q.dispersion>0)R.dispersion.value=q.dispersion;if(q.retroreflectivity>0)R.retroreflectivity.value=q.retroreflectivity;if(q.iridescence>0){if(R.iridescence.value=q.iridescence,R.iridescenceIOR.value=q.iridescenceIOR,R.iridescenceThicknessMinimum.value=q.iridescenceThicknessRange[0],R.iridescenceThicknessMaximum.value=q.iridescenceThicknessRange[1],q.iridescenceMap)R.iridescenceMap.value=q.iridescenceMap,$(q.iridescenceMap,R.iridescenceMapTransform);if(q.iridescenceThicknessMap)R.iridescenceThicknessMap.value=q.iridescenceThicknessMap,$(q.iridescenceThicknessMap,R.iridescenceThicknessMapTransform)}if(q.transmission>0){if(R.transmission.value=q.transmission,R.transmissionSamplerMap.value=M.texture,R.transmissionSamplerSize.value.set(M.width,M.height),q.transmissionMap)R.transmissionMap.value=q.transmissionMap,$(q.transmissionMap,R.transmissionMapTransform);if(R.thickness.value=q.thickness,q.thicknessMap)R.thicknessMap.value=q.thicknessMap,$(q.thicknessMap,R.thicknessMapTransform);R.attenuationDistance.value=q.attenuationDistance,R.attenuationColor.value.copy(q.attenuationColor)}if(q.anisotropy>0){if(R.anisotropyVector.value.set(q.anisotropy*Math.cos(q.anisotropyRotation),q.anisotropy*Math.sin(q.anisotropyRotation)),q.anisotropyMap)R.anisotropyMap.value=q.anisotropyMap,$(q.anisotropyMap,R.anisotropyMapTransform)}if(R.specularIntensity.value=q.specularIntensity,R.specularColor.value.copy(q.specularColor),q.specularColorMap)R.specularColorMap.value=q.specularColorMap,$(q.specularColorMap,R.specularColorMapTransform);if(q.specularIntensityMap)R.specularIntensityMap.value=q.specularIntensityMap,$(q.specularIntensityMap,R.specularIntensityMapTransform)}function O(R,q){if(q.matcap)R.matcap.value=q.matcap}function B(R,q){let M=Q.get(q).light;R.referencePosition.value.setFromMatrixPosition(M.matrixWorld),R.nearDistance.value=M.shadow.camera.near,R.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:K}}function WO(J,Q,$,Z){let K={},W={},Y=[],X=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function H(V,L){let C=L.program;Z.uniformBlockBinding(V,C)}function U(V,L){let C=K[V.id];if(C===void 0)R(V),C=N(V),K[V.id]=C,V.addEventListener("dispose",M);let A=L.program;Z.updateUBOMapping(V,A);let D=Q.render.frame;if(W[V.id]!==D)G(V),W[V.id]=D}function N(V){let L=F();V.__bindingPointIndex=L;let C=J.createBuffer(),A=V.__size,D=V.usage;return J.bindBuffer(J.UNIFORM_BUFFER,C),J.bufferData(J.UNIFORM_BUFFER,A,D),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,L,C),C}function F(){for(let V=0;V<X;V++)if(Y.indexOf(V)===-1)return Y.push(V),V;return $J("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function G(V){let L=K[V.id],C=V.uniforms,A=V.__cache;J.bindBuffer(J.UNIFORM_BUFFER,L);for(let D=0,I=C.length;D<I;D++){let d=C[D];if(Array.isArray(d))for(let f=0,u=d.length;f<u;f++)E(d[f],D,f,A);else E(d,D,0,A)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function E(V,L,C,A){if(B(V,L,C,A)===!0){let{__offset:D,value:I}=V;if(Array.isArray(I)){let d=0;for(let f=0;f<I.length;f++){let u=I[f],$0=q(u);if(O(u,V.__data,d),typeof u!=="number"&&typeof u!=="boolean"&&!u.isMatrix3&&!ArrayBuffer.isView(u))d+=$0.storage/Float32Array.BYTES_PER_ELEMENT}}else O(I,V.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,D,V.__data)}}function O(V,L,C){if(typeof V==="number"||typeof V==="boolean")L[0]=V;else if(V.isMatrix3)L[0]=V.elements[0],L[1]=V.elements[1],L[2]=V.elements[2],L[3]=0,L[4]=V.elements[3],L[5]=V.elements[4],L[6]=V.elements[5],L[7]=0,L[8]=V.elements[6],L[9]=V.elements[7],L[10]=V.elements[8],L[11]=0;else if(ArrayBuffer.isView(V))L.set(new V.constructor(V.buffer,V.byteOffset,L.length));else V.toArray(L,C)}function B(V,L,C,A){let D=V.value,I=L+"_"+C;if(A[I]===void 0){if(typeof D==="number"||typeof D==="boolean")A[I]=D;else if(ArrayBuffer.isView(D))A[I]=D.slice();else A[I]=D.clone();return!0}else{let d=A[I];if(typeof D==="number"||typeof D==="boolean"){if(d!==D)return A[I]=D,!0}else if(ArrayBuffer.isView(D))return!0;else if(d.equals(D)===!1)return d.copy(D),!0}return!1}function R(V){let L=V.uniforms,C=0,A=16;for(let I=0,d=L.length;I<d;I++){let f=Array.isArray(L[I])?L[I]:[L[I]];for(let u=0,$0=f.length;u<$0;u++){let y=f[u],j=Array.isArray(y.value)?y.value:[y.value];for(let g=0,v=j.length;g<v;g++){let i=j[g],x=q(i),a=C%A,Q0=a%x.boundary,B0=a+Q0;if(C+=Q0,B0!==0&&A-B0<x.storage)C+=A-B0;y.__data=new Float32Array(x.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=C,C+=x.storage}}}let D=C%A;if(D>0)C+=A-D;return V.__size=C,V.__cache={},this}function q(V){let L={boundary:0,storage:0};if(typeof V==="number"||typeof V==="boolean")L.boundary=4,L.storage=4;else if(V.isVector2)L.boundary=8,L.storage=8;else if(V.isVector3||V.isColor)L.boundary=16,L.storage=12;else if(V.isVector4)L.boundary=16,L.storage=16;else if(V.isMatrix3)L.boundary=48,L.storage=48;else if(V.isMatrix4)L.boundary=64,L.storage=64;else if(V.isTexture)r0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(V))L.boundary=16,L.storage=V.byteLength;else r0("WebGLRenderer: Unsupported uniform value type.",V);return L}function M(V){let L=V.target;L.removeEventListener("dispose",M);let C=Y.indexOf(L.__bindingPointIndex);Y.splice(C,1),J.deleteBuffer(K[L.id]),delete K[L.id],delete W[L.id]}function P(){for(let V in K)J.deleteBuffer(K[V]);Y=[],K={},W={}}return{bind:H,update:U,dispose:P}}var YO=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),y9=null;function XO(){if(y9===null)y9=new nQ(YO,16,16,g7,O8),y9.name="DFG_LUT",y9.minFilter=q8,y9.magFilter=q8,y9.wrapS=g6,y9.wrapT=g6,y9.generateMipmaps=!1,y9.needsUpdate=!0;return y9}class DY{constructor(J={}){let{canvas:Q=gH(),context:$=null,depth:Z=!0,stencil:K=!1,alpha:W=!1,antialias:Y=!1,premultipliedAlpha:X=!0,preserveDrawingBuffer:H=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:N=!1,reversedDepthBuffer:F=!1,outputBufferType:G=E9}=J;this.isWebGLRenderer=!0;let E;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=$.getContextAttributes().alpha}else E=W;let O=G,B=new Set([JW,eK,tK]),R=new Set([E9,E7,lQ,l6,aK,rK]),q=new Uint32Array(4),M=new Int32Array(4),P=new _,V=null,L=null,C=[],A=[],D=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=G9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,d=!1,f=null,u=null,$0=null,y=null;this._outputColorSpace=J8;let j=0,g=0,v=null,i=-1,x=null,a=new mJ,Q0=new mJ,B0=null,D0=new v0(0),g0=0,c0=Q.width,W0=Q.height,w=1,l=null,n=null,K0=new mJ(0,0,c0,W0),t=new mJ(0,0,c0,W0),L0=!1,O0=new iQ,U0=!1,S0=!1,n0=new QJ,FJ=new _,b0=new mJ,PJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},SJ=!1;function gJ(){return v===null?w:1}let h=$;function sJ(z,p){return Q.getContext(z,p)}let UJ,RJ,T,k,b,e,q0,I0,_0,Y0,N0,k0,i0,z0,M0,e0,t0,IJ,m,T0,X0,A0,p0;try{let z={alpha:!0,depth:Z,stencil:K,antialias:Y,premultipliedAlpha:X,preserveDrawingBuffer:H,powerPreference:U,failIfMajorPerformanceCaveat:N};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${cX}`);if(Q.addEventListener("webglcontextlost",WJ,!1),Q.addEventListener("webglcontextrestored",cJ,!1),Q.addEventListener("webglcontextcreationerror",yJ,!1),h===null){if(h=sJ("webgl2",z),h===null)if(sJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}R0()}catch(z){throw Q.removeEventListener("webglcontextlost",WJ,!1),Q.removeEventListener("webglcontextrestored",cJ,!1),Q.removeEventListener("webglcontextcreationerror",yJ,!1),$J("WebGLRenderer: "+z.message),z}function R0(){if(UJ=new q1(h),UJ.init(),X0=new JO(h,UJ),RJ=new K1(h,UJ,J,X0),T=new tq(h,UJ),RJ.reversedDepthBuffer&&F)T.buffers.depth.setReversed(!0);u=h.createFramebuffer(),$0=h.createFramebuffer(),y=h.createFramebuffer(),k=new L1(h),b=new xq,e=new eq(h,UJ,T,b,RJ,X0,k),q0=new E1(I),I0=new DG(h),A0=new $1(h,I0),_0=new O1(h,I0,k,A0),Y0=new D1(h,_0,I0,A0,k),IJ=new V1(h,RJ,e),M0=new W1(b),N0=new hq(I,q0,UJ,RJ,A0,M0),k0=new KO(I,b),i0=new pq,z0=new nq(UJ),t0=new Q1(I,q0,T,Y0,E,X),e0=new rq(I,Y0,RJ),p0=new WO(h,k,RJ,T),m=new Z1(h,UJ,k),T0=new R1(h,UJ,k),k.programs=N0.programs,I.capabilities=RJ,I.extensions=UJ,I.properties=b,I.renderLists=i0,I.shadowMap=e0,I.state=T,I.info=k}if(O!==E9)D=new M1(O,Q.width,Q.height,Y,Z,K);let w0=new bU(I,h);this.xr=w0,this.getContext=function(){return h},this.getContextAttributes=function(){return h.getContextAttributes()},this.forceContextLoss=function(){let z=UJ.get("WEBGL_lose_context");if(z)z.loseContext()},this.forceContextRestore=function(){let z=UJ.get("WEBGL_lose_context");if(z)z.restoreContext()},this.getPixelRatio=function(){return w},this.setPixelRatio=function(z){if(z===void 0)return;w=z,this.setSize(c0,W0,!1)},this.getSize=function(z){return z.set(c0,W0)},this.setSize=function(z,p,Z0=!0){if(w0.isPresenting){r0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(c0=z,W0=p,Q.width=Math.floor(z*w),Q.height=Math.floor(p*w),Z0===!0)Q.style.width=z+"px",Q.style.height=p+"px";if(D!==null)D.setSize(Q.width,Q.height);this.setViewport(0,0,z,p)},this.getDrawingBufferSize=function(z){return z.set(c0*w,W0*w).floor()},this.setDrawingBufferSize=function(z,p,Z0){c0=z,W0=p,w=Z0,Q.width=Math.floor(z*Z0),Q.height=Math.floor(p*Z0),this.setViewport(0,0,z,p)},this.setEffects=function(z){if(O===E9){$J("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(z){for(let p=0;p<z.length;p++)if(z[p].isOutputPass===!0){r0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(z||[])},this.getCurrentViewport=function(z){return z.copy(a)},this.getViewport=function(z){return z.copy(K0)},this.setViewport=function(z,p,Z0,r){if(z.isVector4)K0.set(z.x,z.y,z.z,z.w);else K0.set(z,p,Z0,r);T.viewport(a.copy(K0).multiplyScalar(w).round())},this.getScissor=function(z){return z.copy(t)},this.setScissor=function(z,p,Z0,r){if(z.isVector4)t.set(z.x,z.y,z.z,z.w);else t.set(z,p,Z0,r);T.scissor(Q0.copy(t).multiplyScalar(w).round())},this.getScissorTest=function(){return L0},this.setScissorTest=function(z){T.setScissorTest(L0=z)},this.setOpaqueSort=function(z){l=z},this.setTransparentSort=function(z){n=z},this.getClearColor=function(z){return z.copy(t0.getClearColor())},this.setClearColor=function(){t0.setClearColor(...arguments)},this.getClearAlpha=function(){return t0.getClearAlpha()},this.setClearAlpha=function(){t0.setClearAlpha(...arguments)},this.clear=function(z=!0,p=!0,Z0=!0){let r=0;if(z){let o=!1;if(v!==null){let j0=v.texture.format;o=B.has(j0)}if(o){let j0=v.texture.type,d0=R.has(j0),y0=t0.getClearColor(),m0=t0.getClearAlpha(),a0=y0.r,NJ=y0.g,LJ=y0.b;if(d0)q[0]=a0,q[1]=NJ,q[2]=LJ,q[3]=m0,h.clearBufferuiv(h.COLOR,0,q);else M[0]=a0,M[1]=NJ,M[2]=LJ,M[3]=m0,h.clearBufferiv(h.COLOR,0,M)}else r|=h.COLOR_BUFFER_BIT}if(p)r|=h.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(Z0)r|=h.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(r!==0)h.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(z){z.setRenderer(this),f=z},this.dispose=function(){Q.removeEventListener("webglcontextlost",WJ,!1),Q.removeEventListener("webglcontextrestored",cJ,!1),Q.removeEventListener("webglcontextcreationerror",yJ,!1),t0.dispose(),i0.dispose(),z0.dispose(),b.dispose(),q0.dispose(),Y0.dispose(),A0.dispose(),p0.dispose(),N0.dispose(),w0.dispose(),w0.removeEventListener("sessionstart",V8),w0.removeEventListener("sessionend",U6),M9.stop()};function WJ(z){z.preventDefault(),TQ("WebGLRenderer: Context Lost."),d=!0}function cJ(){TQ("WebGLRenderer: Context Restored."),d=!1;let z=k.autoReset,p=e0.enabled,Z0=e0.autoUpdate,r=e0.needsUpdate,o=e0.type;R0(),k.autoReset=z,e0.enabled=p,e0.autoUpdate=Z0,e0.needsUpdate=r,e0.type=o}function yJ(z){$J("WebGLRenderer: A WebGL context could not be created. Reason: ",z.statusMessage)}function c8(z){let p=z.target;p.removeEventListener("dispose",c8),Z9(p)}function Z9(z){B$(z),b.remove(z)}function B$(z){let p=b.get(z).programs;if(p!==void 0){if(p.forEach(function(Z0){N0.releaseProgram(Z0)}),z.isShaderMaterial)N0.releaseShaderCache(z)}}this.renderBufferDirect=function(z,p,Z0,r,o,j0){if(p===null)p=PJ;let d0=o.isMesh&&o.matrixWorld.determinantAffine()<0,y0=UK(z,p,Z0,r,o);T.setMaterial(r,d0);let m0=Z0.index,a0=1;if(r.wireframe===!0){if(m0=_0.getWireframeAttribute(Z0),m0===void 0)return;a0=2}let NJ=Z0.drawRange,LJ=Z0.attributes.position,s0=NJ.start*a0,zJ=(NJ.start+NJ.count)*a0;if(j0!==null)s0=Math.max(s0,j0.start*a0),zJ=Math.min(zJ,(j0.start+j0.count)*a0);if(m0!==null)s0=Math.max(s0,0),zJ=Math.min(zJ,m0.count);else if(LJ!==void 0&&LJ!==null)s0=Math.max(s0,0),zJ=Math.min(zJ,LJ.count);let pJ=zJ-s0;if(pJ<0||pJ===1/0)return;A0.setup(o,r,y0,Z0,m0);let nJ,kJ=m;if(m0!==null)nJ=I0.get(m0),kJ=T0,kJ.setIndex(nJ);if(o.isMesh)if(r.wireframe===!0)T.setLineWidth(r.wireframeLinewidth*gJ()),kJ.setMode(h.LINES);else kJ.setMode(h.TRIANGLES);else if(o.isLine){let Y8=r.linewidth;if(Y8===void 0)Y8=1;if(T.setLineWidth(Y8*gJ()),o.isLineSegments)kJ.setMode(h.LINES);else if(o.isLineLoop)kJ.setMode(h.LINE_LOOP);else kJ.setMode(h.LINE_STRIP)}else if(o.isPoints)kJ.setMode(h.POINTS);else if(o.isSprite)kJ.setMode(h.TRIANGLES);if(o.isBatchedMesh)if(!UJ.get("WEBGL_multi_draw")){let{_multiDrawStarts:Y8,_multiDrawCounts:l0,_multiDrawCount:X8}=o,AJ=m0?I0.get(m0).bytesPerElement:1,F8=b.get(r).currentProgram.getUniforms();for(let T8=0;T8<X8;T8++)F8.setValue(h,"_gl_DrawID",T8),kJ.render(Y8[T8]/AJ,l0[T8])}else kJ.renderMultiDraw(o._multiDrawStarts,o._multiDrawCounts,o._multiDrawCount);else if(o.isInstancedMesh)kJ.renderInstances(s0,pJ,o.count);else if(Z0.isInstancedBufferGeometry){let Y8=Z0._maxInstanceCount!==void 0?Z0._maxInstanceCount:1/0,l0=Math.min(Z0.instanceCount,Y8);kJ.renderInstances(s0,pJ,l0)}else kJ.render(s0,pJ)};function X6(z,p,Z0,r){if(f!==null&&z.isNodeMaterial)f.setObject(r,z);if(U0===!0)M0.setState(z,Z0,!1);if(z.transparent===!0&&z.side===iJ&&z.forceSinglePass===!1)z.side=D8,z.needsUpdate=!0,P7(z,p,r),z.side=G7,z.needsUpdate=!0,P7(z,p,r),z.side=iJ;else P7(z,p,r)}this.compile=function(z,p,Z0=null){if(Z0===null)Z0=z;if(f!==null)f.renderStart(z,p,Z0);if(L=z0.get(Z0),L.init(p),A.push(L),Z0.traverseVisible(function(o){if(o.isLight&&o.layers.test(p.layers)){if(L.pushLight(o),o.castShadow)L.pushShadow(o)}}),z!==Z0)z.traverseVisible(function(o){if(o.isLight&&o.layers.test(p.layers)){if(L.pushLight(o),o.castShadow)L.pushShadow(o)}});if(L.setupLights(),f!==null)f.updateLights(L.state.lightsArray);if(S0=this.localClippingEnabled,U0=M0.init(this.clippingPlanes,S0),U0===!0)M0.setGlobalState(this.clippingPlanes,p);if(f!==null)e0.render(L.state.shadowsArray,Z0,p);let r=new Set;if(z.traverse(function(o){if(!(o.isMesh||o.isPoints||o.isLine||o.isSprite))return;let j0=o.material;if(j0)if(Array.isArray(j0))for(let d0=0;d0<j0.length;d0++){let y0=j0[d0];X6(y0,Z0,p,o),r.add(y0)}else X6(j0,Z0,p,o),r.add(j0)}),L=A.pop(),f!==null)f.renderEnd();return r},this.compileAsync=function(z,p,Z0=null){let r=this.compile(z,p,Z0);return new Promise((o)=>{function j0(){if(r.forEach(function(d0){let m0=b.get(d0).currentProgram;if(m0===void 0||m0.isReady())r.delete(d0)}),r.size===0){o(z);return}setTimeout(j0,10)}if(UJ.get("KHR_parallel_shader_compile")!==null)j0();else setTimeout(j0,10)})};let H6=null;function YQ(z){if(H6)H6(z)}function V8(){M9.stop()}function U6(){M9.start()}let M9=new PU;if(M9.setAnimationLoop(YQ),typeof self<"u")M9.setContext(self);this.setAnimationLoop=function(z){H6=z,w0.setAnimationLoop(z),z===null?M9.stop():M9.start()},w0.addEventListener("sessionstart",V8),w0.addEventListener("sessionend",U6),this.render=function(z,p){if(p!==void 0&&p.isCamera!==!0){$J("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;if(f!==null)f.renderStart(z,p);let Z0=w0.enabled===!0&&w0.isPresenting===!0,r=D!==null&&(v===null||Z0)&&D.begin(I,v);if(z.matrixWorldAutoUpdate===!0)z.updateMatrixWorld();if(p.parent===null&&p.matrixWorldAutoUpdate===!0)p.updateMatrixWorld();if(w0.enabled===!0&&w0.isPresenting===!0&&(D===null||D.isCompositing()===!1)){if(w0.cameraAutoUpdate===!0)w0.updateCamera(p);p=w0.getCamera()}if(z.isScene===!0)z.onBeforeRender(I,z,p,v);if(L=z0.get(z,A.length),L.init(p),L.state.textureUnits=e.getTextureUnits(),A.push(L),n0.multiplyMatrices(p.projectionMatrix,p.matrixWorldInverse),O0.setFromProjectionMatrix(n0,bW,p.reversedDepth),S0=this.localClippingEnabled,U0=M0.init(this.clippingPlanes,S0),V=i0.get(z,C.length),V.init(),C.push(V),w0.enabled===!0&&w0.isPresenting===!0){let d0=I.xr.getDepthSensingMesh();if(d0!==null)XQ(d0,p,-1/0,I.sortObjects)}if(XQ(z,p,0,I.sortObjects),V.finish(),f!==null)f.updateLights(L.state.lightsArray);if(I.sortObjects===!0)V.sort(l,n);if(SJ=w0.enabled===!1||w0.isPresenting===!1||w0.hasDepthSensing()===!1,SJ)t0.addToRenderList(V,z);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(U0===!0)M0.beginShadows();let o=L.state.shadowsArray;if(e0.render(o,z,p),U0===!0)M0.endShadows();if((r&&D.hasRenderPass())===!1){let{opaque:d0,transmissive:y0}=V;if(L.setupLights(),p.isArrayCamera){let m0=p.cameras;if(y0.length>0)for(let a0=0,NJ=m0.length;a0<NJ;a0++){let LJ=m0[a0];C7(d0,y0,z,LJ)}if(SJ)t0.render(z);for(let a0=0,NJ=m0.length;a0<NJ;a0++){let LJ=m0[a0];HQ(V,z,LJ,LJ.viewport)}}else{if(y0.length>0)C7(d0,y0,z,p);if(SJ)t0.render(z);HQ(V,z,p)}}if(v!==null&&g===0)e.updateMultisampleRenderTarget(v),e.updateRenderTargetMipmap(v);if(r)D.end(I);if(z.isScene===!0)z.onAfterRender(I,z,p);if(A0.resetDefaultState(),i=-1,x=null,A.pop(),A.length>0){if(L=A[A.length-1],e.setTextureUnits(L.state.textureUnits),U0===!0)M0.setGlobalState(I.clippingPlanes,L.state.camera)}else L=null;if(C.pop(),C.length>0)V=C[C.length-1];else V=null;if(f!==null)f.renderEnd()};function XQ(z,p,Z0,r){if(z.visible===!1)return;if(z.layers.test(p.layers)){if(z.isGroup)Z0=z.renderOrder;else if(z.isLOD){if(z.autoUpdate===!0)z.update(p)}else if(z.isLightProbeGrid)L.pushLightProbeGrid(z);else if(z.isLight){if(L.pushLight(z),z.castShadow)L.pushShadow(z)}else if(z.isSprite){if(!z.frustumCulled||z.intersectsFrustum(O0)){if(r)b0.setFromMatrixPosition(z.matrixWorld).applyMatrix4(n0);let d0=Y0.update(z),y0=z.material;if(y0.visible)V.push(z,d0,y0,Z0,b0.z,null,p)}}else if(z.isMesh||z.isLine||z.isPoints){if(!z.frustumCulled||z.intersectsFrustum(O0)){let d0=Y0.update(z),y0=z.material;if(r){if(z.boundingSphere!==void 0){if(z.boundingSphere===null)z.computeBoundingSphere();b0.copy(z.boundingSphere.center)}else{if(d0.boundingSphere===null)d0.computeBoundingSphere();b0.copy(d0.boundingSphere.center)}b0.applyMatrix4(z.matrixWorld).applyMatrix4(n0)}if(Array.isArray(y0)){let m0=d0.groups;for(let a0=0,NJ=m0.length;a0<NJ;a0++){let LJ=m0[a0],s0=y0[LJ.materialIndex];if(s0&&s0.visible)V.push(z,d0,s0,Z0,b0.z,LJ,p)}}else if(y0.visible)V.push(z,d0,y0,Z0,b0.z,null,p)}}}let j0=z.children;for(let d0=0,y0=j0.length;d0<y0;d0++)XQ(j0[d0],p,Z0,r)}function HQ(z,p,Z0,r){let{opaque:o,transmissive:j0,transparent:d0}=z;if(L.setupLightsView(Z0),U0===!0)M0.setGlobalState(I.clippingPlanes,Z0);if(r)T.viewport(a.copy(r));if(o.length>0)k9(o,p,Z0);if(j0.length>0)k9(j0,p,Z0);if(d0.length>0)k9(d0,p,Z0);T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function C7(z,p,Z0,r){if((Z0.isScene===!0?Z0.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[r.id]===void 0){let s0=UJ.has("EXT_color_buffer_half_float")||UJ.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[r.id]=new Q8(1,1,{generateMipmaps:!0,type:s0?O8:E9,minFilter:_9,samples:Math.max(4,RJ.samples),stencilBuffer:K,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:EJ.workingColorSpace})}let j0=L.state.transmissionRenderTarget[r.id],d0=r.viewport||a;j0.setSize(d0.z*I.transmissionResolutionScale,d0.w*I.transmissionResolutionScale);let y0=I.getRenderTarget(),m0=I.getActiveCubeFace(),a0=I.getActiveMipmapLevel();if(I.setRenderTarget(j0),I.getClearColor(D0),g0=I.getClearAlpha(),g0<1)I.setClearColor(16777215,0.5);if(I.clear(),SJ)t0.render(Z0);let NJ=I.toneMapping;I.toneMapping=G9;let LJ=r.viewport;if(r.viewport!==void 0)r.viewport=void 0;if(L.setupLightsView(r),U0===!0)M0.setGlobalState(I.clippingPlanes,r);if(k9(z,Z0,r),e.updateMultisampleRenderTarget(j0),e.updateRenderTargetMipmap(j0),UJ.has("WEBGL_multisampled_render_to_texture")===!1){let s0=!1;for(let zJ=0,pJ=p.length;zJ<pJ;zJ++){let nJ=p[zJ],{object:kJ,geometry:Y8,material:l0,group:X8}=nJ;if(l0.side===iJ&&kJ.layers.test(r.layers)){let AJ=l0.side;l0.side=D8,l0.needsUpdate=!0,HK(kJ,Z0,r,Y8,l0,X8),l0.side=AJ,l0.needsUpdate=!0,s0=!0}}if(s0===!0)e.updateMultisampleRenderTarget(j0),e.updateRenderTargetMipmap(j0)}if(I.setRenderTarget(y0,m0,a0),I.setClearColor(D0,g0),LJ!==void 0)r.viewport=LJ;I.toneMapping=NJ}function k9(z,p,Z0){let r=p.isScene===!0?p.overrideMaterial:null;for(let o=0,j0=z.length;o<j0;o++){let d0=z[o],{object:y0,geometry:m0,group:a0}=d0,NJ=d0.material;if(NJ.allowOverride===!0&&r!==null)NJ=r;if(y0.layers.test(Z0.layers))HK(y0,p,Z0,m0,NJ,a0)}}function HK(z,p,Z0,r,o,j0){if(f!==null&&o.isNodeMaterial)f.setObject(z,o);if(z.onBeforeRender(I,p,Z0,r,o,j0),z.modelViewMatrix.multiplyMatrices(Z0.matrixWorldInverse,z.matrixWorld),z.normalMatrix.getNormalMatrix(z.modelViewMatrix),o.onBeforeRender(I,p,Z0,r,z,j0),o.transparent===!0&&o.side===iJ&&o.forceSinglePass===!1)o.side=D8,o.needsUpdate=!0,I.renderBufferDirect(Z0,p,r,o,z,j0),o.side=G7,o.needsUpdate=!0,I.renderBufferDirect(Z0,p,r,o,z,j0),o.side=iJ;else I.renderBufferDirect(Z0,p,r,o,z,j0);z.onAfterRender(I,p,Z0,r,o,j0)}function P7(z,p,Z0){if(p.isScene!==!0)p=PJ;let r=b.get(z),o=L.state.lights,j0=L.state.shadowsArray,d0=o.state.version,y0=N0.getParameters(z,o.state,j0,p,Z0,L.state.lightProbeGridArray),m0=N0.getProgramCacheKey(y0),a0=r.programs;r.environment=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?p.environment:null,r.fog=p.fog;let NJ=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap;if(r.envMap=q0.get(z.envMap||r.environment,NJ),r.envMapRotation=r.environment!==null&&z.envMap===null?p.environmentRotation:z.envMapRotation,a0===void 0)z.addEventListener("dispose",c8),a0=new Map,r.programs=a0;let LJ=a0.get(m0);if(LJ!==void 0){if(r.currentProgram===LJ&&r.lightsStateVersion===d0)return K8(z,y0),LJ}else{if(y0.uniforms=N0.getUniforms(z),f!==null&&z.isNodeMaterial)f.build(z,Z0,y0);z.onBeforeCompile(y0,I),LJ=N0.acquireProgram(y0,m0),a0.set(m0,LJ),r.uniforms=y0.uniforms}let s0=r.uniforms;if(!z.isShaderMaterial&&!z.isRawShaderMaterial||z.clipping===!0)s0.clippingPlanes=M0.uniform;if(K8(z,y0),r.needsLights=UQ(z),r.lightsStateVersion=d0,r.needsLights)s0.ambientLightColor.value=o.state.ambient,s0.lightProbe.value=o.state.probe,s0.sunLights.value=o.state.sun,s0.sunLightShadows.value=o.state.sunShadow,s0.directionalLights.value=o.state.directional,s0.directionalLightShadows.value=o.state.directionalShadow,s0.spotLights.value=o.state.spot,s0.spotLightShadows.value=o.state.spotShadow,s0.rectAreaLights.value=o.state.rectArea,s0.ltc_1.value=o.state.rectAreaLTC1,s0.ltc_2.value=o.state.rectAreaLTC2,s0.pointLights.value=o.state.point,s0.pointLightShadows.value=o.state.pointShadow,s0.hemisphereLights.value=o.state.hemi,s0.sunShadowMatrix.value=o.state.sunShadowMatrix,s0.sunShadowCascade.value=o.state.sunShadowCascade,s0.directionalShadowMatrix.value=o.state.directionalShadowMatrix,s0.spotLightMatrix.value=o.state.spotLightMatrix,s0.spotLightMap.value=o.state.spotLightMap,s0.pointShadowMatrix.value=o.state.pointShadowMatrix;return r.lightProbeGrid=L.state.lightProbeGridArray.length>0,r.currentProgram=LJ,r.uniformsList=null,LJ}function M$(z){if(z.uniformsList===null){let p=z.currentProgram.getUniforms();z.uniformsList=H$.seqWithValue(p.seq,z.uniforms)}return z.uniformsList}function K8(z,p){let Z0=b.get(z);Z0.outputColorSpace=p.outputColorSpace,Z0.batching=p.batching,Z0.batchingColor=p.batchingColor,Z0.instancing=p.instancing,Z0.instancingColor=p.instancingColor,Z0.instancingMorph=p.instancingMorph,Z0.skinning=p.skinning,Z0.morphTargets=p.morphTargets,Z0.morphNormals=p.morphNormals,Z0.morphColors=p.morphColors,Z0.morphTargetsCount=p.morphTargetsCount,Z0.numClippingPlanes=p.numClippingPlanes,Z0.numIntersection=p.numClipIntersection,Z0.vertexAlphas=p.vertexAlphas,Z0.vertexTangents=p.vertexTangents,Z0.toneMapping=p.toneMapping}function K9(z,p){if(z.length===0)return null;if(z.length===1)return z[0].texture!==null?z[0]:null;P.setFromMatrixPosition(p.matrixWorld);for(let Z0=0,r=z.length;Z0<r;Z0++){let o=z[Z0];if(o.texture!==null&&o.boundingBox.containsPoint(P))return o}return null}function UK(z,p,Z0,r,o){if(p.isScene!==!0)p=PJ;e.resetTextureUnits();let j0=p.fog,d0=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?p.environment:null,y0=v===null?I.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:EJ.workingColorSpace,m0=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,a0=q0.get(r.envMap||d0,m0),NJ=r.vertexColors===!0&&!!Z0.attributes.color&&Z0.attributes.color.itemSize===4,LJ=!!Z0.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),s0=!!Z0.morphAttributes.position,zJ=!!Z0.morphAttributes.normal,pJ=!!Z0.morphAttributes.color,nJ=G9;if(r.toneMapped){if(v===null||v.isXRRenderTarget===!0)nJ=I.toneMapping}let kJ=Z0.morphAttributes.position||Z0.morphAttributes.normal||Z0.morphAttributes.color,Y8=kJ!==void 0?kJ.length:0,l0=b.get(r),X8=L.state.lights;if(U0===!0){if(S0===!0||z!==x){let _J=z===x&&r.id===i;M0.setState(r,z,_J)}}let AJ=!1;if(r.version===l0.__version){if(l0.needsLights&&l0.lightsStateVersion!==X8.state.version)AJ=!0;else if(l0.outputColorSpace!==y0)AJ=!0;else if(o.isBatchedMesh&&l0.batching===!1)AJ=!0;else if(!o.isBatchedMesh&&l0.batching===!0)AJ=!0;else if(o.isBatchedMesh&&l0.batchingColor===!0&&o._colorsTexture===null)AJ=!0;else if(o.isBatchedMesh&&l0.batchingColor===!1&&o._colorsTexture!==null)AJ=!0;else if(o.isInstancedMesh&&l0.instancing===!1)AJ=!0;else if(!o.isInstancedMesh&&l0.instancing===!0)AJ=!0;else if(o.isSkinnedMesh&&l0.skinning===!1)AJ=!0;else if(!o.isSkinnedMesh&&l0.skinning===!0)AJ=!0;else if(o.isInstancedMesh&&l0.instancingColor===!0&&o.instanceColor===null)AJ=!0;else if(o.isInstancedMesh&&l0.instancingColor===!1&&o.instanceColor!==null)AJ=!0;else if(o.isInstancedMesh&&l0.instancingMorph===!0&&o.morphTexture===null)AJ=!0;else if(o.isInstancedMesh&&l0.instancingMorph===!1&&o.morphTexture!==null)AJ=!0;else if(l0.envMap!==a0)AJ=!0;else if(r.fog===!0&&l0.fog!==j0)AJ=!0;else if(l0.numClippingPlanes!==void 0&&(l0.numClippingPlanes!==M0.numPlanes||l0.numIntersection!==M0.numIntersection))AJ=!0;else if(l0.vertexAlphas!==NJ)AJ=!0;else if(l0.vertexTangents!==LJ)AJ=!0;else if(l0.morphTargets!==s0)AJ=!0;else if(l0.morphNormals!==zJ)AJ=!0;else if(l0.morphColors!==pJ)AJ=!0;else if(l0.toneMapping!==nJ)AJ=!0;else if(l0.morphTargetsCount!==Y8)AJ=!0;else if(!!l0.lightProbeGrid!==L.state.lightProbeGridArray.length>0)AJ=!0}else AJ=!0,l0.__version=r.version;let F8=l0.currentProgram;if(AJ===!0){if(F8=P7(r,p,o),f&&r.isNodeMaterial)f.onUpdateProgram(r,F8,l0)}let T8=!1,W9=!1,x9=!1,bJ=F8.getUniforms(),oJ=l0.uniforms;if(T.useProgram(F8.program))T8=!0,W9=!0,x9=!0;if(r.id!==i)i=r.id,W9=!0;if(l0.needsLights){let _J=K9(L.state.lightProbeGridArray,o);if(l0.lightProbeGrid!==_J)l0.lightProbeGrid=_J,W9=!0}if(T8||x!==z){if(T.buffers.depth.getReversed()&&z.reversedDepth!==!0)z._reversedDepth=!0,z.updateProjectionMatrix();bJ.setValue(h,"projectionMatrix",z.projectionMatrix),bJ.setValue(h,"viewMatrix",z.matrixWorldInverse);let P9=bJ.map.cameraPosition;if(P9!==void 0)P9.setValue(h,FJ.setFromMatrixPosition(z.matrixWorld));if(RJ.logarithmicDepthBuffer)bJ.setValue(h,"logDepthBufFC",2/(Math.log(z.far+1)/Math.LN2));if(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)bJ.setValue(h,"isOrthographic",z.isOrthographicCamera===!0);if(x!==z)x=z,W9=!0,x9=!0}if(l0.needsLights){if(X8.state.sunShadowMap.length>0)bJ.setValue(h,"sunShadowMap",X8.state.sunShadowMap,e);if(X8.state.directionalShadowMap.length>0)bJ.setValue(h,"directionalShadowMap",X8.state.directionalShadowMap,e);if(X8.state.spotShadowMap.length>0)bJ.setValue(h,"spotShadowMap",X8.state.spotShadowMap,e);if(X8.state.pointShadowMap.length>0)bJ.setValue(h,"pointShadowMap",X8.state.pointShadowMap,e)}if(o.isSkinnedMesh){bJ.setOptional(h,o,"bindMatrix"),bJ.setOptional(h,o,"bindMatrixInverse");let _J=o.skeleton;if(_J){if(_J.boneTexture===null)_J.computeBoneTexture();bJ.setValue(h,"boneTexture",_J.boneTexture,e)}}if(o.isBatchedMesh){if(bJ.setOptional(h,o,"batchingTexture"),bJ.setValue(h,"batchingTexture",o._matricesTexture,e),bJ.setOptional(h,o,"batchingIdTexture"),bJ.setValue(h,"batchingIdTexture",o._indirectTexture,e),bJ.setOptional(h,o,"batchingColorTexture"),o._colorsTexture!==null)bJ.setValue(h,"batchingColorTexture",o._colorsTexture,e)}let C9=Z0.morphAttributes;if(C9.position!==void 0||C9.normal!==void 0||C9.color!==void 0)IJ.update(o,Z0,F8);if(W9||l0.receiveShadow!==o.receiveShadow)l0.receiveShadow=o.receiveShadow,bJ.setValue(h,"receiveShadow",o.receiveShadow);if((r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&p.environment!==null)oJ.envMapIntensity.value=p.environmentIntensity;if(oJ.dfgLUT!==void 0)oJ.dfgLUT.value=XO();if(W9){if(bJ.setValue(h,"toneMappingExposure",I.toneMappingExposure),l0.needsLights)k$(oJ,x9);if(j0&&r.fog===!0)k0.refreshFogUniforms(oJ,j0);if(k0.refreshMaterialUniforms(oJ,r,w,W0,L.state.transmissionRenderTarget[z.id]),l0.needsLights&&l0.lightProbeGrid){let _J=l0.lightProbeGrid;oJ.probesSH.value=_J.texture,oJ.probesMin.value.copy(_J.boundingBox.min),oJ.probesMax.value.copy(_J.boundingBox.max),oJ.probesResolution.value.copy(_J.resolution)}H$.upload(h,M$(l0),oJ,e)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0)H$.upload(h,M$(l0),oJ,e),r.uniformsNeedUpdate=!1;if(r.isSpriteMaterial)bJ.setValue(h,"center",o.center);if(bJ.setValue(h,"modelViewMatrix",o.modelViewMatrix),bJ.setValue(h,"normalMatrix",o.normalMatrix),bJ.setValue(h,"modelMatrix",o.matrixWorld),r.uniformsGroups!==void 0){let _J=r.uniformsGroups;for(let P9=0,J7=_J.length;P9<J7;P9++){let C$=_J[P9];p0.update(C$,F8),p0.bind(C$,F8)}}return F8}function k$(z,p){z.ambientLightColor.needsUpdate=p,z.lightProbe.needsUpdate=p,z.sunLights.needsUpdate=p,z.sunLightShadows.needsUpdate=p,z.directionalLights.needsUpdate=p,z.directionalLightShadows.needsUpdate=p,z.pointLights.needsUpdate=p,z.pointLightShadows.needsUpdate=p,z.spotLights.needsUpdate=p,z.spotLightShadows.needsUpdate=p,z.rectAreaLights.needsUpdate=p,z.hemisphereLights.needsUpdate=p}function UQ(z){return z.isMeshLambertMaterial||z.isMeshToonMaterial||z.isMeshPhongMaterial||z.isMeshStandardMaterial||z.isShadowMaterial||z.isShaderMaterial&&z.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return g},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(z,p,Z0){let r=b.get(z);if(r.__autoAllocateDepthBuffer=z.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1)r.__useRenderToTexture=!1;b.get(z.texture).__webglTexture=p,b.get(z.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:Z0,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(z,p){let Z0=b.get(z);Z0.__webglFramebuffer=p,Z0.__useDefaultFramebuffer=p===void 0},this.setRenderTarget=function(z,p=0,Z0=0){v=z,j=p,g=Z0;let r=null,o=!1,j0=!1;if(z){let y0=b.get(z);if(y0.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(h.FRAMEBUFFER,y0.__webglFramebuffer),a.copy(z.viewport),Q0.copy(z.scissor),B0=z.scissorTest,T.viewport(a),T.scissor(Q0),T.setScissorTest(B0),i=-1;return}else if(y0.__webglFramebuffer===void 0)e.setupRenderTarget(z);else if(y0.__hasExternalTextures)e.rebindTextures(z,b.get(z.texture).__webglTexture,b.get(z.depthTexture).__webglTexture);else if(z.depthBuffer){let NJ=z.depthTexture;if(y0.__boundDepthTexture!==NJ){if(NJ!==null&&b.has(NJ)&&(z.width!==NJ.image.width||z.height!==NJ.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");e.setupDepthRenderbuffer(z)}}let m0=z.texture;if(m0.isData3DTexture||m0.isDataArrayTexture||m0.isCompressedArrayTexture)j0=!0;let a0=b.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget){if(Array.isArray(a0[p]))r=a0[p][Z0];else r=a0[p];o=!0}else if(z.samples>0&&e.useMultisampledRTT(z)===!1)r=b.get(z).__webglMultisampledFramebuffer;else if(Array.isArray(a0))r=a0[Z0];else r=a0;a.copy(z.viewport),Q0.copy(z.scissor),B0=z.scissorTest}else a.copy(K0).multiplyScalar(w).floor(),Q0.copy(t).multiplyScalar(w).floor(),B0=L0;if(Z0!==0)r=u;if(T.bindFramebuffer(h.FRAMEBUFFER,r))T.drawBuffers(z,r);if(T.viewport(a),T.scissor(Q0),T.setScissorTest(B0),o){let y0=b.get(z.texture);h.framebufferTexture2D(h.FRAMEBUFFER,h.COLOR_ATTACHMENT0,h.TEXTURE_CUBE_MAP_POSITIVE_X+p,y0.__webglTexture,Z0)}else if(j0){let y0=p;for(let m0=0;m0<z.textures.length;m0++){let a0=b.get(z.textures[m0]);h.framebufferTextureLayer(h.FRAMEBUFFER,h.COLOR_ATTACHMENT0+m0,a0.__webglTexture,Z0,y0)}}else if(z!==null&&Z0!==0){let y0=b.get(z.texture);h.framebufferTexture2D(h.FRAMEBUFFER,h.COLOR_ATTACHMENT0,h.TEXTURE_2D,y0.__webglTexture,Z0)}i=-1};function N6(z){let p=b.get(z);if(p.__readFormat!==z.format||p.__readType!==z.type)p.__readFormat=z.format,p.__readType=z.type,p.__formatReadable=RJ.textureFormatReadable(z.format),p.__typeReadable=RJ.textureTypeReadable(z.type);return p}if(this.readRenderTargetPixels=function(z,p,Z0,r,o,j0,d0,y0=0){if(!(z&&z.isWebGLRenderTarget)){$J("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let m0=b.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&d0!==void 0)m0=m0[d0];if(m0){T.bindFramebuffer(h.FRAMEBUFFER,m0);try{let a0=z.textures[y0],NJ=a0.format,LJ=a0.type;if(z.textures.length>1)h.readBuffer(h.COLOR_ATTACHMENT0+y0);let s0=N6(a0);if(s0.__formatReadable===!1){$J("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(s0.__typeReadable===!1){$J("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(p>=0&&p<=z.width-r&&(Z0>=0&&Z0<=z.height-o))h.readPixels(p,Z0,r,o,X0.convert(NJ),X0.convert(LJ),j0)}finally{let a0=v!==null?b.get(v).__webglFramebuffer:null;T.bindFramebuffer(h.FRAMEBUFFER,a0)}}},this.readRenderTargetPixelsAsync=async function(z,p,Z0,r,o,j0,d0,y0=0){if(!(z&&z.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let m0=b.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&d0!==void 0)m0=m0[d0];if(m0)if(p>=0&&p<=z.width-r&&(Z0>=0&&Z0<=z.height-o)){T.bindFramebuffer(h.FRAMEBUFFER,m0);let a0=z.textures[y0],NJ=a0.format,LJ=a0.type;if(z.textures.length>1)h.readBuffer(h.COLOR_ATTACHMENT0+y0);let s0=N6(a0);if(s0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(s0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let zJ=h.createBuffer();h.bindBuffer(h.PIXEL_PACK_BUFFER,zJ),h.bufferData(h.PIXEL_PACK_BUFFER,j0.byteLength,h.STREAM_READ),h.readPixels(p,Z0,r,o,X0.convert(NJ),X0.convert(LJ),0),h.bindBuffer(h.PIXEL_PACK_BUFFER,null);let pJ=v!==null?b.get(v).__webglFramebuffer:null;T.bindFramebuffer(h.FRAMEBUFFER,pJ);let nJ=h.fenceSync(h.SYNC_GPU_COMMANDS_COMPLETE,0);return h.flush(),await lH(h,nJ,4),h.bindBuffer(h.PIXEL_PACK_BUFFER,zJ),h.getBufferSubData(h.PIXEL_PACK_BUFFER,0,j0),h.bindBuffer(h.PIXEL_PACK_BUFFER,null),h.deleteBuffer(zJ),h.deleteSync(nJ),j0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(z,p=null,Z0=0){let r=Math.pow(2,-Z0),o=Math.floor(z.image.width*r),j0=Math.floor(z.image.height*r),d0=p!==null?p.x:0,y0=p!==null?p.y:0;e.setTexture2D(z,0),h.copyTexSubImage2D(h.TEXTURE_2D,Z0,0,0,d0,y0,o,j0),T.unbindTexture()},this.copyTextureToTexture=function(z,p,Z0=null,r=null,o=0,j0=0){let d0,y0,m0,a0,NJ,LJ,s0,zJ,pJ,nJ=z.isCompressedTexture?z.mipmaps[j0]:z.image;if(Z0!==null)d0=Z0.max.x-Z0.min.x,y0=Z0.max.y-Z0.min.y,m0=Z0.isBox3?Z0.max.z-Z0.min.z:1,a0=Z0.min.x,NJ=Z0.min.y,LJ=Z0.isBox3?Z0.min.z:0;else{let oJ=Math.pow(2,-o);if(d0=Math.floor(nJ.width*oJ),y0=Math.floor(nJ.height*oJ),z.isDataArrayTexture)m0=nJ.depth;else if(z.isData3DTexture)m0=Math.floor(nJ.depth*oJ);else m0=1;a0=0,NJ=0,LJ=0}if(r!==null)s0=r.x,zJ=r.y,pJ=r.z;else s0=0,zJ=0,pJ=0;let kJ=X0.convert(p.format),Y8=X0.convert(p.type),l0;if(p.isData3DTexture)e.setTexture3D(p,0),l0=h.TEXTURE_3D;else if(p.isDataArrayTexture||p.isCompressedArrayTexture)e.setTexture2DArray(p,0),l0=h.TEXTURE_2D_ARRAY;else e.setTexture2D(p,0),l0=h.TEXTURE_2D;T.activeTexture(h.TEXTURE0),T.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,p.flipY),T.pixelStorei(h.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),T.pixelStorei(h.UNPACK_ALIGNMENT,p.unpackAlignment);let X8=T.getParameter(h.UNPACK_ROW_LENGTH),AJ=T.getParameter(h.UNPACK_IMAGE_HEIGHT),F8=T.getParameter(h.UNPACK_SKIP_PIXELS),T8=T.getParameter(h.UNPACK_SKIP_ROWS),W9=T.getParameter(h.UNPACK_SKIP_IMAGES);T.pixelStorei(h.UNPACK_ROW_LENGTH,nJ.width),T.pixelStorei(h.UNPACK_IMAGE_HEIGHT,nJ.height),T.pixelStorei(h.UNPACK_SKIP_PIXELS,a0),T.pixelStorei(h.UNPACK_SKIP_ROWS,NJ),T.pixelStorei(h.UNPACK_SKIP_IMAGES,LJ);let x9=z.isDataArrayTexture||z.isData3DTexture,bJ=p.isDataArrayTexture||p.isData3DTexture;if(z.isDepthTexture){let oJ=b.get(z),C9=b.get(p),_J=b.get(oJ.__renderTarget),P9=b.get(C9.__renderTarget);T.bindFramebuffer(h.READ_FRAMEBUFFER,_J.__webglFramebuffer),T.bindFramebuffer(h.DRAW_FRAMEBUFFER,P9.__webglFramebuffer);for(let J7=0;J7<m0;J7++){if(x9)h.framebufferTextureLayer(h.READ_FRAMEBUFFER,h.COLOR_ATTACHMENT0,b.get(z).__webglTexture,o,LJ+J7),h.framebufferTextureLayer(h.DRAW_FRAMEBUFFER,h.COLOR_ATTACHMENT0,b.get(p).__webglTexture,j0,pJ+J7);h.blitFramebuffer(a0,NJ,d0,y0,s0,zJ,d0,y0,h.DEPTH_BUFFER_BIT,h.NEAREST)}T.bindFramebuffer(h.READ_FRAMEBUFFER,null),T.bindFramebuffer(h.DRAW_FRAMEBUFFER,null)}else if(o!==0||z.isRenderTargetTexture||b.has(z)){let oJ=b.get(z),C9=b.get(p);T.bindFramebuffer(h.READ_FRAMEBUFFER,$0),T.bindFramebuffer(h.DRAW_FRAMEBUFFER,y);for(let _J=0;_J<m0;_J++){if(x9)h.framebufferTextureLayer(h.READ_FRAMEBUFFER,h.COLOR_ATTACHMENT0,oJ.__webglTexture,o,LJ+_J);else h.framebufferTexture2D(h.READ_FRAMEBUFFER,h.COLOR_ATTACHMENT0,h.TEXTURE_2D,oJ.__webglTexture,o);if(bJ)h.framebufferTextureLayer(h.DRAW_FRAMEBUFFER,h.COLOR_ATTACHMENT0,C9.__webglTexture,j0,pJ+_J);else h.framebufferTexture2D(h.DRAW_FRAMEBUFFER,h.COLOR_ATTACHMENT0,h.TEXTURE_2D,C9.__webglTexture,j0);if(o!==0)h.blitFramebuffer(a0,NJ,d0,y0,s0,zJ,d0,y0,h.COLOR_BUFFER_BIT,h.NEAREST);else if(bJ)h.copyTexSubImage3D(l0,j0,s0,zJ,pJ+_J,a0,NJ,d0,y0);else h.copyTexSubImage2D(l0,j0,s0,zJ,a0,NJ,d0,y0)}T.bindFramebuffer(h.READ_FRAMEBUFFER,null),T.bindFramebuffer(h.DRAW_FRAMEBUFFER,null)}else if(bJ)if(z.isDataTexture||z.isData3DTexture)h.texSubImage3D(l0,j0,s0,zJ,pJ,d0,y0,m0,kJ,Y8,nJ.data);else if(p.isCompressedArrayTexture)h.compressedTexSubImage3D(l0,j0,s0,zJ,pJ,d0,y0,m0,kJ,nJ.data);else h.texSubImage3D(l0,j0,s0,zJ,pJ,d0,y0,m0,kJ,Y8,nJ);else if(z.isDataTexture)h.texSubImage2D(h.TEXTURE_2D,j0,s0,zJ,d0,y0,kJ,Y8,nJ.data);else if(z.isCompressedTexture)h.compressedTexSubImage2D(h.TEXTURE_2D,j0,s0,zJ,nJ.width,nJ.height,kJ,nJ.data);else h.texSubImage2D(h.TEXTURE_2D,j0,s0,zJ,d0,y0,kJ,Y8,nJ);if(T.pixelStorei(h.UNPACK_ROW_LENGTH,X8),T.pixelStorei(h.UNPACK_IMAGE_HEIGHT,AJ),T.pixelStorei(h.UNPACK_SKIP_PIXELS,F8),T.pixelStorei(h.UNPACK_SKIP_ROWS,T8),T.pixelStorei(h.UNPACK_SKIP_IMAGES,W9),j0===0&&p.generateMipmaps)h.generateMipmap(l0);T.unbindTexture()},this.initRenderTarget=function(z){if(b.get(z).__webglFramebuffer===void 0)e.setupRenderTarget(z)},this.initTexture=function(z){if(z.isCubeTexture)e.setTextureCube(z,0);else if(z.isData3DTexture)e.setTexture3D(z,0);else if(z.isDataArrayTexture||z.isCompressedArrayTexture)e.setTexture2DArray(z,0);else e.setTexture2D(z,0);T.unbindTexture()},this.resetState=function(){j=0,g=0,v=null,T.reset(),A0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bW}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=EJ._getDrawingBufferColorSpace(J),Q.unpackColorSpace=EJ._getUnpackColorSpace()}}function JQ(J,Q=!1){let $=J[0].index!==null,Z=new Set(Object.keys(J[0].attributes)),K=new Set(Object.keys(J[0].morphAttributes)),W={},Y={},X=J[0].morphTargetsRelative,H=new fJ,U=0;for(let N=0;N<J.length;++N){let F=J[N],G=0;if($!==(F.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let E in F.attributes){if(!Z.has(E))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+'. All geometries must have compatible attributes; make sure "'+E+'" attribute exists among all geometries, or in none of them.'),null;if(W[E]===void 0)W[E]=[];W[E].push(F.attributes[E]),G++}if(G!==Z.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". Make sure all geometries have the same number of attributes."),null;if(X!==F.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let E in F.morphAttributes){if(!K.has(E))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+".  .morphAttributes must be consistent throughout all geometries."),null;if(Y[E]===void 0)Y[E]=[];Y[E].push(F.morphAttributes[E])}if(Q){let E;if($)E=F.index.count;else if(F.attributes.position!==void 0)E=F.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+N+". The geometry must have either an index or a position attribute"),null;H.addGroup(U,E,N),U+=E}}if($){let N=0,F=[];for(let G=0;G<J.length;++G){let E=J[G].index;for(let O=0;O<E.count;++O)F.push(E.getX(O)+N);N+=J[G].attributes.position.count}H.setIndex(F)}for(let N in W){let F=xU(W[N]);if(!F)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+N+" attribute."),null;H.setAttribute(N,F)}for(let N in Y){let F=Y[N][0].length;if(F===0)continue;H.morphAttributes=H.morphAttributes||{},H.morphAttributes[N]=[];for(let G=0;G<F;++G){let E=[];for(let B=0;B<Y[N].length;++B)E.push(Y[N][B][G]);let O=xU(E);if(!O)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+N+" morphAttribute."),null;H.morphAttributes[N].push(O)}}return H}function xU(J){let Q,$,Z,K=-1,W=0;for(let U=0;U<J.length;++U){let N=J[U];if(Q===void 0)Q=N.array.constructor;if(Q!==N.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if($===void 0)$=N.itemSize;if($!==N.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(Z===void 0)Z=N.normalized;if(Z!==N.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(K===-1)K=N.gpuType;if(K!==N.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;W+=N.count*$}let Y=new Q(W),X=new aJ(Y,$,Z),H=0;for(let U=0;U<J.length;++U){let N=J[U];if(N.isInterleavedBufferAttribute){let F=H/$;for(let G=0,E=N.count;G<E;G++)for(let O=0;O<$;O++){let B=N.getComponent(G,O);X.setComponent(G+F,O,B)}}else Y.set(N.array,H);H+=N.count*$}if(K!==void 0)X.gpuType=K;return X}function BY(J,Q){if(Q===jW)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if(Q===m6||Q===mQ){let $=J.getIndex();if($===null){let W=[],Y=J.getAttribute("position");if(Y!==void 0){for(let X=0;X<Y.count;X++)W.push(X);J.setIndex(W),$=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let Z=$.count-2,K=[];if(Q===m6)for(let W=1;W<=Z;W++)K.push($.getX(0)),K.push($.getX(W)),K.push($.getX(W+1));else for(let W=0;W<Z;W++)if(W%2===0)K.push($.getX(W)),K.push($.getX(W+1)),K.push($.getX(W+2));else K.push($.getX(W+2)),K.push($.getX(W+1)),K.push($.getX(W));if(K.length/3!==Z)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return J.setIndex(K),J.clearGroups(),J}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",Q),J}function iZ(J){let Q=new Map,$=new Map,Z=J.clone();return gU(J,Z,function(K,W){Q.set(W,K),$.set(K,W)}),Z.traverse(function(K){if(!K.isSkinnedMesh)return;let W=K,Y=Q.get(K),X=Y.skeleton.bones;W.skeleton=Y.skeleton.clone(),W.bindMatrix.copy(Y.bindMatrix),W.skeleton.bones=X.map(function(H){return $.get(H)}),W.bind(W.skeleton,W.bindMatrix)}),Z}function gU(J,Q,$){$(J,Q);for(let Z=0;Z<J.children.length;Z++)gU(J.children[Z],Q.children[Z],$)}class AY extends a9{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(Q){return new sU(Q)}),this.register(function(Q){return new iU(Q)}),this.register(function(Q){return new Z5(Q)}),this.register(function(Q){return new K5(Q)}),this.register(function(Q){return new W5(Q)}),this.register(function(Q){return new aU(Q)}),this.register(function(Q){return new rU(Q)}),this.register(function(Q){return new tU(Q)}),this.register(function(Q){return new eU(Q)}),this.register(function(Q){return new nU(Q)}),this.register(function(Q){return new J5(Q)}),this.register(function(Q){return new oU(Q)}),this.register(function(Q){return new $5(Q)}),this.register(function(Q){return new Q5(Q)}),this.register(function(Q){return new dU(Q)}),this.register(function(Q){return new PY(Q,MJ.EXT_MESHOPT_COMPRESSION)}),this.register(function(Q){return new PY(Q,MJ.KHR_MESHOPT_COMPRESSION)}),this.register(function(Q){return new Y5(Q)})}load(J,Q,$,Z){let K=this,W;if(this.resourcePath!=="")W=this.resourcePath;else if(this.path!==""){let H=B7.extractUrlBase(J);W=B7.resolveURL(H,this.path)}else W=B7.extractUrlBase(J);this.manager.itemStart(J);let Y=function(H){if(Z)Z(H);else console.error(H);K.manager.itemError(J),K.manager.itemEnd(J)},X=new Q$(this.manager);X.setPath(this.path),X.setResponseType("arraybuffer"),X.setRequestHeader(this.requestHeader),X.setWithCredentials(this.withCredentials),X.load(J,function(H){try{K.parse(H,W,function(U){Q(U),K.manager.itemEnd(J)},Y)}catch(U){Y(U)}},$,Y)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,Q,$,Z){let K,W={},Y={},X=new TextDecoder;if(typeof J==="string")K=JSON.parse(J);else if(J instanceof ArrayBuffer)if(X.decode(new Uint8Array(J,0,4))===X5){try{W[MJ.KHR_BINARY_GLTF]=new H5(J)}catch(N){if(Z)Z(N);return}K=JSON.parse(W[MJ.KHR_BINARY_GLTF].content)}else K=JSON.parse(X.decode(J));else K=J;if(K.asset===void 0||K.asset.version[0]<2){if(Z)Z(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let H=new E5(K,{path:Q||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});H.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let N=this.pluginCallbacks[U](H);if(!N.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");Y[N.name]=N,W[N.name]=!0}if(K.extensionsUsed)for(let U=0;U<K.extensionsUsed.length;++U){let N=K.extensionsUsed[U],F=K.extensionsRequired||[];switch(N){case MJ.KHR_MATERIALS_UNLIT:W[N]=new cU;break;case MJ.KHR_DRACO_MESH_COMPRESSION:W[N]=new U5(K,this.dracoLoader);break;case MJ.KHR_TEXTURE_TRANSFORM:W[N]=new N5;break;case MJ.KHR_MESH_QUANTIZATION:W[N]=new G5;break;default:if(F.indexOf(N)>=0&&Y[N]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+N+'".')}}H.setExtensions(W),H.setPlugins(Y),H.parse($,Z)}parseAsync(J,Q){let $=this;return new Promise(function(Z,K){$.parse(J,Q,Z,K)})}}function HO(){let J={};return{get:function(Q){return J[Q]},add:function(Q,$){J[Q]=$},remove:function(Q){delete J[Q]},removeAll:function(){J={}}}}function $8(J,Q,$){let Z=J.json.materials[Q];if(Z.extensions&&Z.extensions[$])return Z.extensions[$];return null}var MJ={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class dU{constructor(J){this.parser=J,this.name=MJ.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,Q=this.parser.json.nodes||[];for(let $=0,Z=Q.length;$<Z;$++){let K=Q[$];if(K.extensions&&K.extensions[this.name]&&K.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,K.extensions[this.name].light)}}_loadLight(J){let Q=this.parser,$="light:"+J,Z=Q.cache.get($);if(Z)return Z;let K=Q.json,X=((K.extensions&&K.extensions[this.name]||{}).lights||[])[J],H,U=new v0(16777215);if(X.color!==void 0)U.setRGB(X.color[0],X.color[1],X.color[2],p8);let N=X.range!==void 0?X.range:0;switch(X.type){case"directional":H=new a6(U),H.target.position.set(0,0,-1),H.add(H.target);break;case"point":H=new r9(U),H.distance=N;break;case"spot":H=new o6(U),H.distance=N,X.spot=X.spot||{},X.spot.innerConeAngle=X.spot.innerConeAngle!==void 0?X.spot.innerConeAngle:0,X.spot.outerConeAngle=X.spot.outerConeAngle!==void 0?X.spot.outerConeAngle:Math.PI/4,H.angle=X.spot.outerConeAngle,H.penumbra=1-X.spot.innerConeAngle/X.spot.outerConeAngle,H.target.position.set(0,0,-1),H.add(H.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+X.type)}if(H.position.set(0,0,0),f9(H,X),X.intensity!==void 0)H.intensity=X.intensity;return H.name=Q.createUniqueName(X.name||"light_"+J),Z=Promise.resolve(H),Q.cache.add($,Z),Z}getDependency(J,Q){if(J!=="light")return;return this._loadLight(Q)}createNodeAttachment(J){let Q=this,$=this.parser,K=$.json.nodes[J],Y=(K.extensions&&K.extensions[this.name]||{}).light;if(Y===void 0)return null;return this._loadLight(Y).then(function(X){return $._getNodeRef(Q.cache,Y,X)})}}class cU{constructor(){this.name=MJ.KHR_MATERIALS_UNLIT}getMaterialType(){return hJ}extendParams(J,Q,$){let Z=[];J.color=new v0(1,1,1),J.opacity=1;let K=Q.pbrMetallicRoughness;if(K){if(Array.isArray(K.baseColorFactor)){let W=K.baseColorFactor;J.color.setRGB(W[0],W[1],W[2],p8),J.opacity=W[3]}if(K.baseColorTexture!==void 0)Z.push($.assignTexture(J,"map",K.baseColorTexture,J8))}return Promise.all(Z)}}class nU{constructor(J){this.parser=J,this.name=MJ.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();if($.emissiveStrength!==void 0)Q.emissiveIntensity=$.emissiveStrength;return Promise.resolve()}}class sU{constructor(J){this.parser=J,this.name=MJ.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){return $8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.clearcoatFactor!==void 0)Q.clearcoat=$.clearcoatFactor;if($.clearcoatTexture!==void 0)Z.push(this.parser.assignTexture(Q,"clearcoatMap",$.clearcoatTexture));if($.clearcoatRoughnessFactor!==void 0)Q.clearcoatRoughness=$.clearcoatRoughnessFactor;if($.clearcoatRoughnessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"clearcoatRoughnessMap",$.clearcoatRoughnessTexture));if($.clearcoatNormalTexture!==void 0){if(Z.push(this.parser.assignTexture(Q,"clearcoatNormalMap",$.clearcoatNormalTexture)),$.clearcoatNormalTexture.scale!==void 0){let K=$.clearcoatNormalTexture.scale;Q.clearcoatNormalScale=new F0(K,K)}}return Promise.all(Z)}}class iU{constructor(J){this.parser=J,this.name=MJ.KHR_MATERIALS_DISPERSION}getMaterialType(J){return $8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();return Q.dispersion=$.dispersion!==void 0?$.dispersion:0,Promise.resolve()}}class oU{constructor(J){this.parser=J,this.name=MJ.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){return $8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.iridescenceFactor!==void 0)Q.iridescence=$.iridescenceFactor;if($.iridescenceTexture!==void 0)Z.push(this.parser.assignTexture(Q,"iridescenceMap",$.iridescenceTexture));if($.iridescenceIor!==void 0)Q.iridescenceIOR=$.iridescenceIor;if(Q.iridescenceThicknessRange===void 0)Q.iridescenceThicknessRange=[100,400];if($.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessRange[0]=$.iridescenceThicknessMinimum;if($.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessRange[1]=$.iridescenceThicknessMaximum;if($.iridescenceThicknessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"iridescenceThicknessMap",$.iridescenceThicknessTexture));return Promise.all(Z)}}class aU{constructor(J){this.parser=J,this.name=MJ.KHR_MATERIALS_SHEEN}getMaterialType(J){return $8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.sheenColor=new v0(0,0,0),Q.sheenRoughness=0,Q.sheen=1,$.sheenColorFactor!==void 0){let K=$.sheenColorFactor;Q.sheenColor.setRGB(K[0],K[1],K[2],p8)}if($.sheenRoughnessFactor!==void 0)Q.sheenRoughness=$.sheenRoughnessFactor;if($.sheenColorTexture!==void 0)Z.push(this.parser.assignTexture(Q,"sheenColorMap",$.sheenColorTexture,J8));if($.sheenRoughnessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"sheenRoughnessMap",$.sheenRoughnessTexture));return Promise.all(Z)}}class rU{constructor(J){this.parser=J,this.name=MJ.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){return $8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.transmissionFactor!==void 0)Q.transmission=$.transmissionFactor;if($.transmissionTexture!==void 0)Z.push(this.parser.assignTexture(Q,"transmissionMap",$.transmissionTexture));return Promise.all(Z)}}class tU{constructor(J){this.parser=J,this.name=MJ.KHR_MATERIALS_VOLUME}getMaterialType(J){return $8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.thickness=$.thicknessFactor!==void 0?$.thicknessFactor:0,$.thicknessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"thicknessMap",$.thicknessTexture));Q.attenuationDistance=$.attenuationDistance||1/0;let K=$.attenuationColor||[1,1,1];return Q.attenuationColor=new v0().setRGB(K[0],K[1],K[2],p8),Promise.all(Z)}}class eU{constructor(J){this.parser=J,this.name=MJ.KHR_MATERIALS_IOR}getMaterialType(J){return $8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();if(Q.ior=$.ior!==void 0?$.ior:1.5,Q.ior===0)Q.ior=1000;return Promise.resolve()}}class J5{constructor(J){this.parser=J,this.name=MJ.KHR_MATERIALS_SPECULAR}getMaterialType(J){return $8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.specularIntensity=$.specularFactor!==void 0?$.specularFactor:1,$.specularTexture!==void 0)Z.push(this.parser.assignTexture(Q,"specularIntensityMap",$.specularTexture));let K=$.specularColorFactor||[1,1,1];if(Q.specularColor=new v0().setRGB(K[0],K[1],K[2],p8),$.specularColorTexture!==void 0)Z.push(this.parser.assignTexture(Q,"specularColorMap",$.specularColorTexture,J8));return Promise.all(Z)}}class Q5{constructor(J){this.parser=J,this.name=MJ.EXT_MATERIALS_BUMP}getMaterialType(J){return $8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.bumpScale=$.bumpFactor!==void 0?$.bumpFactor:1,$.bumpTexture!==void 0)Z.push(this.parser.assignTexture(Q,"bumpMap",$.bumpTexture));return Promise.all(Z)}}class $5{constructor(J){this.parser=J,this.name=MJ.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){return $8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=$8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.anisotropyStrength!==void 0)Q.anisotropy=$.anisotropyStrength;if($.anisotropyRotation!==void 0)Q.anisotropyRotation=$.anisotropyRotation;if($.anisotropyTexture!==void 0)Z.push(this.parser.assignTexture(Q,"anisotropyMap",$.anisotropyTexture));return Promise.all(Z)}}class Z5{constructor(J){this.parser=J,this.name=MJ.KHR_TEXTURE_BASISU}loadTexture(J){let Q=this.parser,$=Q.json,Z=$.textures[J];if(!Z.extensions||!Z.extensions[this.name])return null;let K=Z.extensions[this.name],W=Q.options.ktx2Loader;if(!W)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return Q.loadTextureImage(J,K.source,W)}}class K5{constructor(J){this.parser=J,this.name=MJ.EXT_TEXTURE_WEBP}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,K=Z.textures[J];if(!K.extensions||!K.extensions[Q])return null;let W=K.extensions[Q],Y=Z.images[W.source],X=$.textureLoader;if(Y.uri){let H=$.options.manager.getHandler(Y.uri);if(H!==null)X=H}return $.loadTextureImage(J,W.source,X)}}class W5{constructor(J){this.parser=J,this.name=MJ.EXT_TEXTURE_AVIF}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,K=Z.textures[J];if(!K.extensions||!K.extensions[Q])return null;let W=K.extensions[Q],Y=Z.images[W.source],X=$.textureLoader;if(Y.uri){let H=$.options.manager.getHandler(Y.uri);if(H!==null)X=H}return $.loadTextureImage(J,W.source,X)}}class PY{constructor(J,Q){this.name=Q,this.parser=J}loadBufferView(J){let Q=this.parser.json,$=Q.bufferViews[J];if($.extensions&&$.extensions[this.name]){let Z=$.extensions[this.name],K=this.parser.getDependency("buffer",Z.buffer),W=this.parser.options.meshoptDecoder;if(!W||!W.supported)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return K.then(function(Y){let X=Z.byteOffset||0,H=Z.byteLength||0,U=Z.count,N=Z.byteStride,F=new Uint8Array(Y,X,H);if(W.decodeGltfBufferAsync)return W.decodeGltfBufferAsync(U,N,F,Z.mode,Z.filter).then(function(G){return G.buffer});else return W.ready.then(function(){let G=new ArrayBuffer(U*N);return W.decodeGltfBuffer(new Uint8Array(G),U,N,F,Z.mode,Z.filter),G})})}else return null}}class Y5{constructor(J){this.name=MJ.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let Q=this.parser.json,$=Q.nodes[J];if(!$.extensions||!$.extensions[this.name]||$.mesh===void 0)return null;let Z=Q.meshes[$.mesh];for(let H of Z.primitives)if(H.mode!==r8.TRIANGLES&&H.mode!==r8.TRIANGLE_STRIP&&H.mode!==r8.TRIANGLE_FAN&&H.mode!==void 0)return null;let W=$.extensions[this.name].attributes,Y=[],X={};for(let H in W)Y.push(this.parser.getDependency("accessor",W[H]).then((U)=>{return X[H]=U,X[H]}));if(Y.length<1)return null;return Y.push(this.parser.createNodeMesh(J)),Promise.all(Y).then((H)=>{let U=H.pop(),N=U.isGroup?U.children:[U],F=H[0].count,G=[];for(let E of N){let O=new QJ,B=new _,R=new CJ,q=new _(1,1,1),M=new w9(E.geometry,E.material,F);for(let V=0;V<F;V++){if(X.TRANSLATION)B.fromBufferAttribute(X.TRANSLATION,V);if(X.ROTATION)R.fromBufferAttribute(X.ROTATION,V);if(X.SCALE)q.fromBufferAttribute(X.SCALE,V);M.setMatrixAt(V,O.compose(B,R,q))}let P=null;for(let V in X)if(V==="_COLOR_0"){let L=X[V];M.instanceColor=new H7(L.array,L.itemSize,L.normalized)}else if(V!=="TRANSLATION"&&V!=="ROTATION"&&V!=="SCALE"){if(P===null){let C=M.geometry;P=new fJ,P.name=C.name;for(let A in C.attributes)P.setAttribute(A,C.attributes[A]);for(let A in C.morphAttributes)P.morphAttributes[A]=C.morphAttributes[A];if(C.index!==null)P.setIndex(C.index);P.morphTargetsRelative=C.morphTargetsRelative;for(let A of C.groups)P.addGroup(A.start,A.count,A.materialIndex);if(C.boundingBox!==null)P.boundingBox=C.boundingBox.clone();if(C.boundingSphere!==null)P.boundingSphere=C.boundingSphere.clone();P.drawRange.start=C.drawRange.start,P.drawRange.count=C.drawRange.count,P.userData=Object.assign({},C.userData),M.geometry=P}let L=X[V];P.setAttribute(V,new H7(L.array,L.itemSize,L.normalized))}jJ.prototype.copy.call(M,E),this.parser.assignFinalMaterial(M),G.push(M)}if(U.isGroup)return U.clear(),U.add(...G),U;return G[0]})}}var X5="glTF",N$=12,pU={JSON:1313821514,BIN:5130562};class H5{constructor(J){this.name=MJ.KHR_BINARY_GLTF,this.content=null,this.body=null;let Q=new DataView(J,0,N$),$=new TextDecoder;if(this.header={magic:$.decode(new Uint8Array(J.slice(0,4))),version:Q.getUint32(4,!0),length:Q.getUint32(8,!0)},this.header.magic!==X5)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let Z=this.header.length-N$,K=new DataView(J,N$),W=0;while(W<Z){let Y=K.getUint32(W,!0);W+=4;let X=K.getUint32(W,!0);if(W+=4,X===pU.JSON){let H=new Uint8Array(J,N$+W,Y);this.content=$.decode(H)}else if(X===pU.BIN){let H=N$+W;this.body=J.slice(H,H+Y)}W+=Y}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class U5{constructor(J,Q){if(!Q)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=MJ.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=Q,this.dracoLoader.preload()}decodePrimitive(J,Q){let $=this.json,Z=this.dracoLoader,K=J.extensions[this.name].bufferView,W=J.extensions[this.name].attributes,Y={},X={},H={};for(let U in W){let N=IY[U]||U.toLowerCase();Y[N]=W[U]}for(let U in J.attributes){let N=IY[U]||U.toLowerCase();if(W[U]!==void 0){let F=$.accessors[J.attributes[U]],G=QQ[F.componentType];H[N]=G.name,X[N]=F.normalized===!0}}return Q.getDependency("bufferView",K).then(function(U){return new Promise(function(N,F){Z.decodeDracoFile(U,function(G){for(let E in G.attributes){let O=G.attributes[E],B=X[E];if(B!==void 0)O.normalized=B}N(G)},Y,H,p8,F)})})}}class N5{constructor(){this.name=MJ.KHR_TEXTURE_TRANSFORM}extendTexture(J,Q){if((Q.texCoord===void 0||Q.texCoord===J.channel)&&Q.offset===void 0&&Q.rotation===void 0&&Q.scale===void 0)return J;if(J=J.clone(),Q.texCoord!==void 0)J.channel=Q.texCoord;if(Q.offset!==void 0)J.offset.fromArray(Q.offset);if(Q.rotation!==void 0)J.rotation=Q.rotation;if(Q.scale!==void 0)J.repeat.fromArray(Q.scale);if(Q.rotation!==void 0){let $=Math.cos(J.rotation),Z=Math.sin(J.rotation);J.matrix.set(J.repeat.x*$,J.repeat.y*Z,J.offset.x,-J.repeat.x*Z,J.repeat.y*$,J.offset.y,0,0,1),J.matrixAutoUpdate=!1}return J.needsUpdate=!0,J}}class G5{constructor(){this.name=MJ.KHR_MESH_QUANTIZATION}}class _Y extends o9{constructor(J,Q,$,Z){super(J,Q,$,Z)}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,K=J*Z*3+Z;for(let W=0;W!==Z;W++)Q[W]=$[K+W];return Q}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=Y*2,H=Y*3,U=Z-Q,N=($-Q)/U,F=N*N,G=F*N,E=J*H,O=E-H,B=-2*G+3*F,R=G-F,q=1-B,M=R-F+N;for(let P=0;P!==Y;P++){let V=W[O+P+Y],L=W[O+P+X]*U,C=W[E+P+Y],A=W[E+P]*U;K[P]=q*V+M*L+B*C+R*A}return K}}var UO=new CJ;class F5 extends _Y{interpolate_(J,Q,$,Z){let K=super.interpolate_(J,Q,$,Z);return UO.fromArray(K).normalize().toArray(K),K}}var r8={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},QQ={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},lU={9728:F9,9729:q8,9984:GZ,9985:p6,9986:b7,9987:_9},mU={33071:g6,33648:NZ,10497:F7},MY={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},IY={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},M7={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},NO={CUBICSPLINE:void 0,LINEAR:VZ,STEP:wW},kY={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function GO(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new o0({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:G7});return J.DefaultMaterial}function r7(J,Q,$){for(let Z in $.extensions)if(J[Z]===void 0)Q.userData.gltfExtensions=Q.userData.gltfExtensions||{},Q.userData.gltfExtensions[Z]=$.extensions[Z]}function f9(J,Q){if(Q.extras!==void 0)if(typeof Q.extras==="object")Object.assign(J.userData,Q.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+Q.extras)}function FO(J,Q,$){let Z=!1,K=!1,W=!1;for(let U=0,N=Q.length;U<N;U++){let F=Q[U];if(F.POSITION!==void 0)Z=!0;if(F.NORMAL!==void 0)K=!0;if(F.COLOR_0!==void 0)W=!0;if(Z&&K&&W)break}if(!Z&&!K&&!W)return Promise.resolve(J);let Y=[],X=[],H=[];for(let U=0,N=Q.length;U<N;U++){let F=Q[U];if(Z){let G=F.POSITION!==void 0?$.getDependency("accessor",F.POSITION):J.attributes.position;Y.push(G)}if(K){let G=F.NORMAL!==void 0?$.getDependency("accessor",F.NORMAL):J.attributes.normal;X.push(G)}if(W){let G=F.COLOR_0!==void 0?$.getDependency("accessor",F.COLOR_0):J.attributes.color;H.push(G)}}return Promise.all([Promise.all(Y),Promise.all(X),Promise.all(H)]).then(function(U){let N=U[0],F=U[1],G=U[2];if(Z)J.morphAttributes.position=N;if(K)J.morphAttributes.normal=F;if(W)J.morphAttributes.color=G;return J.morphTargetsRelative=!0,J})}function EO(J,Q){if(J.updateMorphTargets(),Q.weights!==void 0)for(let $=0,Z=Q.weights.length;$<Z;$++)J.morphTargetInfluences[$]=Q.weights[$];if(Q.extras&&Array.isArray(Q.extras.targetNames)){let $=Q.extras.targetNames;if(J.morphTargetInfluences.length===$.length){J.morphTargetDictionary={};for(let Z=0,K=$.length;Z<K;Z++)J.morphTargetDictionary[$[Z]]=Z}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function qO(J){let Q,$=J.extensions&&J.extensions[MJ.KHR_DRACO_MESH_COMPRESSION];if($)Q="draco:"+$.bufferView+":"+$.indices+":"+CY($.attributes);else Q=J.indices+":"+CY(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let Z=0,K=J.targets.length;Z<K;Z++)Q+=":"+CY(J.targets[Z]);return Q}function CY(J){let Q="",$=Object.keys(J).sort();for(let Z=0,K=$.length;Z<K;Z++)Q+=$[Z]+":"+J[$[Z]]+";";return Q}function zY(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function OO(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var RO=new QJ;class E5{constructor(J={},Q={}){this.json=J,this.extensions={},this.plugins={},this.options=Q,this.cache=new HO,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let $=!1,Z=-1,K=!1,W=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let Y=navigator.userAgent;$=/^((?!chrome|android).)*safari/i.test(Y)===!0;let X=Y.match(/Version\/(\d+)/);Z=$&&X?parseInt(X[1],10):-1,K=Y.indexOf("Firefox")>-1,W=K?Y.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||$&&Z<17||K&&W<98)this.textureLoader=new hZ(this.options.manager);else this.textureLoader=new pZ(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Q$(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,Q){let $=this,Z=this.json,K=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(W){return W._markDefs&&W._markDefs()}),Promise.all(this._invokeAll(function(W){return W.beforeRoot&&W.beforeRoot()})).then(function(){return Promise.all([$.getDependencies("scene"),$.getDependencies("animation"),$.getDependencies("camera")])}).then(function(W){let Y={scene:W[0][Z.scene||0],scenes:W[0],animations:W[1],cameras:W[2],asset:Z.asset,parser:$,userData:{}};return r7(K,Y,Z),f9(Y,Z),Promise.all($._invokeAll(function(X){return X.afterRoot&&X.afterRoot(Y)})).then(function(){for(let X of Y.scenes)X.updateMatrixWorld();J(Y)})}).catch(Q)}_markDefs(){let J=this.json.nodes||[],Q=this.json.skins||[],$=this.json.meshes||[];for(let Z=0,K=Q.length;Z<K;Z++){let W=Q[Z].joints;for(let Y=0,X=W.length;Y<X;Y++)J[W[Y]].isBone=!0}for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];if(W.mesh!==void 0){if(this._addNodeRef(this.meshCache,W.mesh),W.skin!==void 0)$[W.mesh].isSkinnedMesh=!0}if(W.camera!==void 0)this._addNodeRef(this.cameraCache,W.camera)}}_addNodeRef(J,Q){if(Q===void 0)return;if(J.refs[Q]===void 0)J.refs[Q]=J.uses[Q]=0;J.refs[Q]++}_getNodeRef(J,Q,$){if(J.refs[Q]<=1)return $;let Z=$.clone(),K=(W,Y)=>{let X=this.associations.get(W);if(X!=null)this.associations.set(Y,X);for(let[H,U]of W.children.entries())K(U,Y.children[H])};return K($,Z),Z.name+="_instance_"+J.uses[Q]++,Z}_invokeOne(J){let Q=Object.values(this.plugins);Q.push(this);for(let $=0;$<Q.length;$++){let Z=J(Q[$]);if(Z)return Z}return null}_invokeAll(J){let Q=Object.values(this.plugins);Q.unshift(this);let $=[];for(let Z=0;Z<Q.length;Z++){let K=J(Q[Z]);if(K)$.push(K)}return $}getDependency(J,Q){let $=J+":"+Q,Z=this.cache.get($);if(!Z){switch(J){case"scene":Z=this.loadScene(Q);break;case"node":Z=this._invokeOne(function(K){return K.loadNode&&K.loadNode(Q)});break;case"mesh":Z=this._invokeOne(function(K){return K.loadMesh&&K.loadMesh(Q)});break;case"accessor":Z=this.loadAccessor(Q);break;case"bufferView":Z=this._invokeOne(function(K){return K.loadBufferView&&K.loadBufferView(Q)});break;case"buffer":Z=this.loadBuffer(Q);break;case"material":Z=this._invokeOne(function(K){return K.loadMaterial&&K.loadMaterial(Q)});break;case"texture":Z=this._invokeOne(function(K){return K.loadTexture&&K.loadTexture(Q)});break;case"skin":Z=this.loadSkin(Q);break;case"animation":Z=this._invokeOne(function(K){return K.loadAnimation&&K.loadAnimation(Q)});break;case"camera":Z=this.loadCamera(Q);break;default:if(Z=this._invokeOne(function(K){return K!=this&&K.getDependency&&K.getDependency(J,Q)}),!Z)throw Error("Unknown type: "+J);break}this.cache.add($,Z)}return Z}getDependencies(J){let Q=this.cache.get(J);if(!Q){let $=this,Z=this.json[J+(J==="mesh"?"es":"s")]||[];Q=Promise.all(Z.map(function(K,W){return $.getDependency(J,W)})),this.cache.add(J,Q)}return Q}loadBuffer(J){let Q=this.json.buffers[J],$=this.fileLoader;if(Q.type&&Q.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+Q.type+" buffer type is not supported.");if(Q.uri===void 0&&J===0)return Promise.resolve(this.extensions[MJ.KHR_BINARY_GLTF].body);let Z=this.options;return new Promise(function(K,W){$.load(B7.resolveURL(Q.uri,Z.path),K,void 0,function(){W(Error('THREE.GLTFLoader: Failed to load buffer "'+Q.uri+'".'))})})}loadBufferView(J){let Q=this.json.bufferViews[J];return this.getDependency("buffer",Q.buffer).then(function($){let Z=Q.byteLength||0,K=Q.byteOffset||0;return $.slice(K,K+Z)})}loadAccessor(J){let Q=this,$=this.json,Z=this.json.accessors[J];if(Z.bufferView===void 0&&Z.sparse===void 0){let W=MY[Z.type],Y=QQ[Z.componentType],X=Z.normalized===!0,H=new Y(Z.count*W);return Promise.resolve(new aJ(H,W,X))}let K=[];if(Z.bufferView!==void 0)K.push(this.getDependency("bufferView",Z.bufferView));else K.push(null);if(Z.sparse!==void 0)K.push(this.getDependency("bufferView",Z.sparse.indices.bufferView)),K.push(this.getDependency("bufferView",Z.sparse.values.bufferView));return Promise.all(K).then(function(W){let Y=W[0],X=MY[Z.type],H=QQ[Z.componentType],U=H.BYTES_PER_ELEMENT,N=U*X,F=Z.byteOffset||0,G=Z.bufferView!==void 0?$.bufferViews[Z.bufferView].byteStride:void 0,E=Z.normalized===!0,O,B;if(G&&G!==N){let R=Math.floor(F/G),q="InterleavedBuffer:"+Z.bufferView+":"+Z.componentType+":"+R+":"+Z.count,M=Q.cache.get(q);if(!M)O=new H(Y,R*G,Z.count*G/U),M=new d6(O,G/U),Q.cache.add(q,M);B=new X7(M,X,F%G/U,E)}else{if(Y===null)O=new H(Z.count*X);else O=new H(Y,F,Z.count*X);B=new aJ(O,X,E)}if(Z.sparse!==void 0){let R=MY.SCALAR,q=QQ[Z.sparse.indices.componentType],M=Z.sparse.indices.byteOffset||0,P=Z.sparse.values.byteOffset||0,V=new q(W[1],M,Z.sparse.count*R),L=new H(W[2],P,Z.sparse.count*X);if(Y!==null)B=new aJ(B.array.slice(),B.itemSize,B.normalized);B.normalized=!1;for(let C=0,A=V.length;C<A;C++){let D=V[C];if(B.setX(D,L[C*X]),X>=2)B.setY(D,L[C*X+1]);if(X>=3)B.setZ(D,L[C*X+2]);if(X>=4)B.setW(D,L[C*X+3]);if(X>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}B.normalized=E}return B})}loadTexture(J){let Q=this.json,$=this.options,K=Q.textures[J].source,W=Q.images[K],Y=this.textureLoader;if(W.uri){let X=$.manager.getHandler(W.uri);if(X!==null)Y=X}return this.loadTextureImage(J,K,Y)}loadTextureImage(J,Q,$){let Z=this,K=this.json,W=K.textures[J],Y=K.images[Q],X=(Y.uri||Y.bufferView)+":"+W.sampler;if(this.textureCache[X])return this.textureCache[X];let H=this.loadImageSource(Q,$).then(function(U){if(U.flipY=!1,U.name=W.name||Y.name||"",U.name===""&&typeof Y.uri==="string"&&Y.uri.startsWith("data:image/")===!1)U.name=Y.uri;let F=(K.samplers||{})[W.sampler]||{};return U.magFilter=lU[F.magFilter]||q8,U.minFilter=lU[F.minFilter]||_9,U.wrapS=mU[F.wrapS]||F7,U.wrapT=mU[F.wrapT]||F7,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==F9&&U.minFilter!==q8,Z.associations.set(U,{textures:J}),U}).catch(function(){return null});return this.textureCache[X]=H,H}loadImageSource(J,Q){let $=this,Z=this.json,K=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((N)=>N.clone());let W=Z.images[J],Y=self.URL||self.webkitURL,X=W.uri||"",H=!1;if(W.bufferView!==void 0)X=$.getDependency("bufferView",W.bufferView).then(function(N){H=!0;let F=new Blob([N],{type:W.mimeType});return X=Y.createObjectURL(F),X});else if(W.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let U=Promise.resolve(X).then(function(N){return new Promise(function(F,G){let E=F;if(Q.isImageBitmapLoader===!0)E=function(O){let B=new eJ(O);B.needsUpdate=!0,F(B)};Q.load(B7.resolveURL(N,K.path),E,void 0,G)})}).then(function(N){if(H===!0)Y.revokeObjectURL(X);return f9(N,W),N.userData.mimeType=W.mimeType||OO(W.uri),N}).catch(function(N){throw console.error("THREE.GLTFLoader: Couldn't load texture",X),N});return this.sourceCache[J]=U,U}assignTexture(J,Q,$,Z){let K=this;return this.getDependency("texture",$.index).then(function(W){if(!W)return null;if($.texCoord!==void 0&&$.texCoord>0)W=W.clone(),W.channel=$.texCoord;if(K.extensions[MJ.KHR_TEXTURE_TRANSFORM]){let Y=$.extensions!==void 0?$.extensions[MJ.KHR_TEXTURE_TRANSFORM]:void 0;if(Y){let X=K.associations.get(W);W=K.extensions[MJ.KHR_TEXTURE_TRANSFORM].extendTexture(W,Y),K.associations.set(W,X)}}if(Z!==void 0)W.colorSpace=Z;return J[Q]=W,W})}assignFinalMaterial(J){let{geometry:Q,material:$}=J,Z=Q.attributes.tangent===void 0,K=Q.attributes.color!==void 0,W=Q.attributes.normal===void 0;if(J.isPoints){let Y="PointsMaterial:"+$.uuid,X=this.cache.get(Y);if(!X)X=new u7,S8.prototype.copy.call(X,$),X.color.copy($.color),X.map=$.map,X.sizeAttenuation=!1,this.cache.add(Y,X);$=X}else if(J.isLine){let Y="LineBasicMaterial:"+$.uuid,X=this.cache.get(Y);if(!X)X=new oQ,S8.prototype.copy.call(X,$),X.color.copy($.color),X.map=$.map,this.cache.add(Y,X);$=X}if(Z||K||W){let Y="ClonedMaterial:"+$.uuid+":";if(Z)Y+="derivative-tangents:";if(K)Y+="vertex-colors:";if(W)Y+="flat-shading:";let X=this.cache.get(Y);if(!X){if(X=$.clone(),K)X.vertexColors=!0;if(W)X.flatShading=!0;if(Z){if(X.normalScale)X.normalScale.y*=-1;if(X.clearcoatNormalScale)X.clearcoatNormalScale.y*=-1}this.cache.add(Y,X),this.associations.set(X,this.associations.get($))}$=X}J.material=$}getMaterialType(){return o0}loadMaterial(J){let Q=this,$=this.json,Z=this.extensions,K=$.materials[J],W,Y={},X=K.extensions||{},H=[];if(X[MJ.KHR_MATERIALS_UNLIT]){let N=Z[MJ.KHR_MATERIALS_UNLIT];W=N.getMaterialType(),H.push(N.extendParams(Y,K,Q))}else{let N=K.pbrMetallicRoughness||{};if(Y.color=new v0(1,1,1),Y.opacity=1,Array.isArray(N.baseColorFactor)){let F=N.baseColorFactor;Y.color.setRGB(F[0],F[1],F[2],p8),Y.opacity=F[3]}if(N.baseColorTexture!==void 0)H.push(Q.assignTexture(Y,"map",N.baseColorTexture,J8));if(Y.metalness=N.metallicFactor!==void 0?N.metallicFactor:1,Y.roughness=N.roughnessFactor!==void 0?N.roughnessFactor:1,N.metallicRoughnessTexture!==void 0)H.push(Q.assignTexture(Y,"metalnessMap",N.metallicRoughnessTexture)),H.push(Q.assignTexture(Y,"roughnessMap",N.metallicRoughnessTexture));W=this._invokeOne(function(F){return F.getMaterialType&&F.getMaterialType(J)}),H.push(Promise.all(this._invokeAll(function(F){return F.extendMaterialParams&&F.extendMaterialParams(J,Y)})))}if(K.doubleSided===!0)Y.side=iJ;let U=K.alphaMode||kY.OPAQUE;if(U===kY.BLEND)Y.transparent=!0,Y.depthWrite=!1;else if(Y.transparent=!1,U===kY.MASK)Y.alphaTest=K.alphaCutoff!==void 0?K.alphaCutoff:0.5;if(K.normalTexture!==void 0&&W!==hJ){if(H.push(Q.assignTexture(Y,"normalMap",K.normalTexture)),Y.normalScale=new F0(1,1),K.normalTexture.scale!==void 0){let N=K.normalTexture.scale;Y.normalScale.set(N,N)}}if(K.occlusionTexture!==void 0&&W!==hJ){if(H.push(Q.assignTexture(Y,"aoMap",K.occlusionTexture)),K.occlusionTexture.strength!==void 0)Y.aoMapIntensity=K.occlusionTexture.strength}if(K.emissiveFactor!==void 0&&W!==hJ){let N=K.emissiveFactor;Y.emissive=new v0().setRGB(N[0],N[1],N[2],p8)}if(K.emissiveTexture!==void 0&&W!==hJ)H.push(Q.assignTexture(Y,"emissiveMap",K.emissiveTexture,J8));return Promise.all(H).then(function(){let N=new W(Y);if(K.name)N.name=K.name;if(f9(N,K),Q.associations.set(N,{materials:J}),K.extensions)r7(Z,N,K);return N})}createUniqueName(J){let Q=vJ.sanitizeNodeName(J||"");if(Q in this.nodeNamesUsed)return Q+"_"+ ++this.nodeNamesUsed[Q];else return this.nodeNamesUsed[Q]=0,Q}loadGeometries(J){let Q=this,$=this.extensions,Z=this.primitiveCache;function K(Y){return $[MJ.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(Y,Q).then(function(X){return uU(X,Y,Q)})}let W=[];for(let Y=0,X=J.length;Y<X;Y++){let H=J[Y],U=qO(H),N=Z[U];if(N)W.push(N.promise);else{let F;if(H.extensions&&H.extensions[MJ.KHR_DRACO_MESH_COMPRESSION])F=K(H);else F=uU(new fJ,H,Q);if(H.mode===r8.TRIANGLE_STRIP)F=F.then((G)=>BY(G,mQ));else if(H.mode===r8.TRIANGLE_FAN)F=F.then((G)=>BY(G,m6));Z[U]={primitive:H,promise:F},W.push(F)}}return Promise.all(W)}loadMesh(J){let Q=this,$=this.json,Z=this.extensions,K=$.meshes[J],W=K.primitives,Y=[];for(let X=0,H=W.length;X<H;X++){let U=W[X].material===void 0?GO(this.cache):this.getDependency("material",W[X].material);Y.push(U)}return Y.push(Q.loadGeometries(W)),Promise.all(Y).then(async function(X){let H=X.slice(0,X.length-1),U=X[X.length-1],N=[];for(let G=0,E=U.length;G<E;G++){let O=U[G],B=W[G],R,q=H[G];if(B.mode===r8.TRIANGLES||B.mode===r8.TRIANGLE_STRIP||B.mode===r8.TRIANGLE_FAN||B.mode===void 0){let M=K.isSkinnedMesh===!0,P=O.hasAttribute("skinIndex")&&O.hasAttribute("skinWeight");if(M&&P===!1)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(R=M&&P?new IZ(O,q):new P0(O,q),R.isSkinnedMesh===!0)R.normalizeSkinWeights()}else if(B.mode===r8.LINES)R=new zZ(O,q);else if(B.mode===r8.LINE_STRIP)R=new n6(O,q);else if(B.mode===r8.LINE_LOOP)R=new AZ(O,q);else if(B.mode===r8.POINTS)R=new s6(O,q);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+B.mode);if(Object.keys(R.geometry.morphAttributes).length>0)EO(R,K);if(R.name=Q.createUniqueName(K.name||"mesh_"+J),f9(R,K),B.extensions)r7(Z,R,B);Q.assignFinalMaterial(R),N.push(R)}for(let G=0,E=N.length;G<E;G++)Q.associations.set(N[G],{meshes:J,primitives:G});if(N.length===1){if(K.extensions)r7(Z,N[0],K);return N[0]}let F=new wJ;if(K.extensions)r7(Z,F,K);Q.associations.set(F,{meshes:J});for(let G=0,E=N.length;G<E;G++)F.add(N[G]);return F})}loadCamera(J){let Q,$=this.json.cameras[J],Z=$[$.type];if(!Z){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if($.type==="perspective")Q=new H8(S9.radToDeg(Z.yfov),Z.aspectRatio||1,Z.znear||1,Z.zfar||2000000);else if($.type==="orthographic")Q=new t9(-Z.xmag,Z.xmag,Z.ymag,-Z.ymag,Z.znear,Z.zfar);if($.name)Q.name=this.createUniqueName($.name);return f9(Q,$),Promise.resolve(Q)}loadSkin(J){let Q=this.json.skins[J],$=[];for(let Z=0,K=Q.joints.length;Z<K;Z++)$.push(this._loadNodeShallow(Q.joints[Z]));if(Q.inverseBindMatrices!==void 0)$.push(this.getDependency("accessor",Q.inverseBindMatrices));else $.push(null);return Promise.all($).then(function(Z){let K=Z.pop(),W=Z,Y=[],X=[];for(let H=0,U=W.length;H<U;H++){let N=W[H];if(N){Y.push(N);let F=new QJ;if(K!==null)F.fromArray(K.array,H*16);X.push(F)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',Q.joints[H])}return new sQ(Y,X)})}loadAnimation(J){let Q=this.json,$=this,Z=Q.animations[J],K=Z.name?Z.name:"animation_"+J,W=[],Y=[],X=[],H=[],U=[];for(let N=0,F=Z.channels.length;N<F;N++){let G=Z.channels[N],E=Z.samplers[G.sampler],O=G.target,B=O.node,R=Z.parameters!==void 0?Z.parameters[E.input]:E.input,q=Z.parameters!==void 0?Z.parameters[E.output]:E.output;if(O.node===void 0)continue;W.push(this.getDependency("node",B)),Y.push(this.getDependency("accessor",R)),X.push(this.getDependency("accessor",q)),H.push(E),U.push(O)}return Promise.all([Promise.all(W),Promise.all(Y),Promise.all(X),Promise.all(H),Promise.all(U)]).then(function(N){let F=N[0],G=N[1],E=N[2],O=N[3],B=N[4],R=[];for(let M=0,P=F.length;M<P;M++){let V=F[M],L=G[M],C=E[M],A=O[M],D=B[M];if(V===void 0)continue;if(V.updateMatrix)V.updateMatrix();let I=$._createAnimationTracks(V,L,C,A,D);if(I)for(let d=0;d<I.length;d++)R.push(I[d])}let q=new f6(K,void 0,R);return f9(q,Z),q})}createNodeMesh(J){let Q=this.json,$=this,Z=Q.nodes[J];if(Z.mesh===void 0)return null;return $.getDependency("mesh",Z.mesh).then(function(K){let W=$._getNodeRef($.meshCache,Z.mesh,K);if(Z.weights!==void 0)W.traverse(function(Y){if(!Y.isMesh)return;for(let X=0,H=Z.weights.length;X<H;X++)Y.morphTargetInfluences[X]=Z.weights[X]});return W})}loadNode(J){let Q=this.json,$=this,Z=Q.nodes[J],K=$._loadNodeShallow(J),W=[],Y=Z.children||[];for(let H=0,U=Y.length;H<U;H++)W.push($.getDependency("node",Y[H]));let X=Z.skin===void 0?Promise.resolve(null):$.getDependency("skin",Z.skin);return Promise.all([K,Promise.all(W),X]).then(function(H){let U=H[0],N=H[1],F=H[2];if(F!==null)U.traverse(function(G){if(!G.isSkinnedMesh)return;G.bind(F,RO)});for(let G=0,E=N.length;G<E;G++)U.add(N[G]);if(U.userData.pivot!==void 0&&N.length>0){let G=U.userData.pivot,E=N[0];U.pivot=new _().fromArray(G),U.position.x-=G[0],U.position.y-=G[1],U.position.z-=G[2],E.position.set(0,0,0),delete U.userData.pivot}return U})}_loadNodeShallow(J){let Q=this.json,$=this.extensions,Z=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let K=Q.nodes[J],W=K.name?Z.createUniqueName(K.name):"",Y=[],X=Z._invokeOne(function(H){return H.createNodeMesh&&H.createNodeMesh(J)});if(X)Y.push(X);if(K.camera!==void 0)Y.push(Z.getDependency("camera",K.camera).then(function(H){return Z._getNodeRef(Z.cameraCache,K.camera,H)}));return Z._invokeAll(function(H){return H.createNodeAttachment&&H.createNodeAttachment(J)}).forEach(function(H){Y.push(H)}),this.nodeCache[J]=Promise.all(Y).then(function(H){let U;if(K.isBone===!0)U=new cQ;else if(H.length>1)U=new wJ;else if(H.length===1)U=H[0];else U=new jJ;if(U!==H[0])for(let N=0,F=H.length;N<F;N++)U.add(H[N]);if(K.name)U.userData.name=K.name,U.name=W;if(f9(U,K),K.extensions)r7($,U,K);if(K.matrix!==void 0){let N=new QJ;N.fromArray(K.matrix),U.applyMatrix4(N)}else{if(K.translation!==void 0)U.position.fromArray(K.translation);if(K.rotation!==void 0)U.quaternion.fromArray(K.rotation);if(K.scale!==void 0)U.scale.fromArray(K.scale)}if(!Z.associations.has(U))Z.associations.set(U,{});else if(K.mesh!==void 0&&Z.meshCache.refs[K.mesh]>1){let N=Z.associations.get(U);Z.associations.set(U,{...N})}return Z.associations.get(U).nodes=J,U}),this.nodeCache[J]}loadScene(J){let Q=this.extensions,$=this.json.scenes[J],Z=this,K=new wJ;if($.name)K.name=Z.createUniqueName($.name);if(f9(K,$),$.extensions)r7(Q,K,$);let W=$.nodes||[],Y=[];for(let X=0,H=W.length;X<H;X++)Y.push(Z.getDependency("node",W[X]));return Promise.all(Y).then(function(X){for(let U=0,N=X.length;U<N;U++){let F=X[U];if(F.parent!==null)K.add(iZ(F));else K.add(F)}let H=(U)=>{let N=new Map;for(let[F,G]of Z.associations)if(F instanceof S8||F instanceof eJ)N.set(F,G);return U.traverse((F)=>{let G=Z.associations.get(F);if(G!=null)N.set(F,G)}),N};return Z.associations=H(K),K})}_createAnimationTracks(J,Q,$,Z,K){let W=[],Y=J.name?J.name:J.uuid,X=[];function H(G){if(G.morphTargetInfluences)X.push(G.name?G.name:G.uuid)}if(M7[K.path]===M7.weights){if(H(J),J.isGroup)J.children.forEach(H)}else X.push(Y);let U;switch(M7[K.path]){case M7.weights:U=L7;break;case M7.rotation:U=V7;break;case M7.translation:case M7.scale:U=i7;break;default:switch($.itemSize){case 1:U=L7;break;case 2:case 3:default:U=i7;break}break}let N=Z.interpolation!==void 0?NO[Z.interpolation]:VZ,F=this._getArrayFromAccessor($);for(let G=0,E=X.length;G<E;G++){let O=new U(X[G]+"."+M7[K.path],Q.array,F,N);if(Z.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(O);W.push(O)}return W}_getArrayFromAccessor(J){let Q=J.array;if(J.normalized){let $=zY(Q.constructor),Z=new Float32Array(Q.length);for(let K=0,W=Q.length;K<W;K++)Z[K]=Q[K]*$;Q=Z}return Q}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function($){return new(this instanceof V7?F5:_Y)(this.times,this.values,this.getValueSize()/3,$)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function LO(J,Q,$){let Z=Q.attributes,K=new z8;if(Z.POSITION!==void 0){let X=$.json.accessors[Z.POSITION],H=X.min,U=X.max;if(H!==void 0&&U!==void 0){if(K.set(new _(H[0],H[1],H[2]),new _(U[0],U[1],U[2])),X.normalized){let N=zY(QQ[X.componentType]);K.min.multiplyScalar(N),K.max.multiplyScalar(N)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let W=Q.targets;if(W!==void 0){let X=new _,H=new _;for(let U=0,N=W.length;U<N;U++){let F=W[U];if(F.POSITION!==void 0){let G=$.json.accessors[F.POSITION],E=G.min,O=G.max;if(E!==void 0&&O!==void 0){if(H.setX(Math.max(Math.abs(E[0]),Math.abs(O[0]))),H.setY(Math.max(Math.abs(E[1]),Math.abs(O[1]))),H.setZ(Math.max(Math.abs(E[2]),Math.abs(O[2]))),G.normalized){let B=zY(QQ[G.componentType]);H.multiplyScalar(B)}X.max(H)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}K.expandByVector(X)}J.boundingBox=K;let Y=new l8;K.getCenter(Y.center),Y.radius=K.min.distanceTo(K.max)/2,J.boundingSphere=Y}function uU(J,Q,$){let Z=Q.attributes,K=[];function W(Y,X){return $.getDependency("accessor",Y).then(function(H){J.setAttribute(X,H)})}for(let Y in Z){let X=IY[Y]||Y.toLowerCase();if(X in J.attributes)continue;K.push(W(Z[Y],X))}if(Q.indices!==void 0&&!J.index){let Y=$.getDependency("accessor",Q.indices).then(function(X){J.setIndex(X)});K.push(Y)}if(EJ.workingColorSpace!==p8&&"COLOR_0"in Z)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${EJ.workingColorSpace}" not supported.`);return f9(J,Q),LO(J,Q,$),Promise.all(K).then(function(){return Q.targets!==void 0?FO(J,Q.targets,$):J})}var q5={type:"change"},SY={type:"start"},R5={type:"end"},oZ=new q7,O5=new s8,VO=Math.cos(70*S9.DEG2RAD),G8=new _,j8=2*Math.PI,dJ={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},TY=0.000001;class wY extends uZ{constructor(J,Q=null){super(J,Q);if(this.state=dJ.NONE,this.target=new _,this.cursor=new _,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:U7.ROTATE,MIDDLE:U7.DOLLY,RIGHT:U7.PAN},this.touches={ONE:N7.ROTATE,TWO:N7.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new _,this._lastQuaternion=new CJ,this._lastTargetPosition=new _,this._quat=new CJ().setFromUnitVectors(J.up,new _(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new K$,this._sphericalDelta=new K$,this._scale=1,this._panOffset=new _,this._rotateStart=new F0,this._rotateEnd=new F0,this._rotateDelta=new F0,this._panStart=new F0,this._panEnd=new F0,this._panDelta=new F0,this._dollyStart=new F0,this._dollyEnd=new F0,this._dollyDelta=new F0,this._dollyDirection=new _,this._mouse=new F0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=BO.bind(this),this._onPointerDown=DO.bind(this),this._onPointerUp=MO.bind(this),this._onContextMenu=_O.bind(this),this._onMouseWheel=PO.bind(this),this._onKeyDown=IO.bind(this),this._onTouchStart=zO.bind(this),this._onTouchMove=AO.bind(this),this._onMouseDown=kO.bind(this),this._onMouseMove=CO.bind(this),this._interceptControlDown=TO.bind(this),this._interceptControlUp=SO.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=dJ.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let J=this.domElement.getRootNode();J.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),J.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(q5),this.update(),this.state=dJ.NONE}pan(J,Q){this._pan(J,Q),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let Q=this.object.position;if(G8.copy(Q).sub(this.target),G8.applyQuaternion(this._quat),this._spherical.setFromVector3(G8),this.autoRotate&&this.state===dJ.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let $=this.minAzimuthAngle,Z=this.maxAzimuthAngle;if(isFinite($)&&isFinite(Z)){if($<-Math.PI)$+=j8;else if($>Math.PI)$-=j8;if(Z<-Math.PI)Z+=j8;else if(Z>Math.PI)Z-=j8;if($<=Z)this._spherical.theta=Math.max($,Math.min(Z,this._spherical.theta));else this._spherical.theta=this._spherical.theta>($+Z)/2?Math.max($,this._spherical.theta):Math.min(Z,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let K=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let W=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),K=W!=this._spherical.radius}if(G8.setFromSpherical(this._spherical),G8.applyQuaternion(this._quatInverse),Q.copy(this.target).add(G8),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let W=null;if(this.object.isPerspectiveCamera){let Y=G8.length();W=this._clampDistance(Y*this._scale);let X=Y-W;this.object.position.addScaledVector(this._dollyDirection,X),this.object.updateMatrixWorld(),K=!!X}else if(this.object.isOrthographicCamera){let Y=new _(this._mouse.x,this._mouse.y,0);Y.unproject(this.object);let X=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),K=X!==this.object.zoom;let H=new _(this._mouse.x,this._mouse.y,0);H.unproject(this.object),this.object.position.sub(H).add(Y),this.object.updateMatrixWorld(),W=G8.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(W!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(W).add(this.object.position);else if(oZ.origin.copy(this.object.position),oZ.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(oZ.direction))<VO)this.object.lookAt(this.target);else O5.setFromNormalAndCoplanarPoint(this.object.up,this.target),oZ.intersectPlane(O5,this.target)}else if(this.object.isOrthographicCamera){let W=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),W!==this.object.zoom)this.object.updateProjectionMatrix(),K=!0}if(this._scale=1,this._performCursorZoom=!1,K||this._lastPosition.distanceToSquared(this.object.position)>TY||8*(1-this._lastQuaternion.dot(this.object.quaternion))>TY||this._lastTargetPosition.distanceToSquared(this.target)>TY)return this.dispatchEvent(q5),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return j8/60*this.autoRotateSpeed*J;else return j8/60/60*this.autoRotateSpeed}_getZoomScale(J){let Q=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*Q)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,Q){G8.setFromMatrixColumn(Q,0),G8.multiplyScalar(-J),this._panOffset.add(G8)}_panUp(J,Q){if(this.screenSpacePanning===!0)G8.setFromMatrixColumn(Q,1);else G8.setFromMatrixColumn(Q,0),G8.crossVectors(this.object.up,G8);G8.multiplyScalar(J),this._panOffset.add(G8)}_pan(J,Q){let $=this.domElement;if(this.object.isPerspectiveCamera){let Z=this.object.position;G8.copy(Z).sub(this.target);let K=G8.length();K*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*K/$.clientHeight,this.object.matrix),this._panUp(2*Q*K/$.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/$.clientWidth,this.object.matrix),this._panUp(Q*(this.object.top-this.object.bottom)/this.object.zoom/$.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,Q){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let $=this.domElement.getBoundingClientRect(),Z=J-$.left,K=Q-$.top,W=$.width,Y=$.height;this._mouse.x=Z/W*2-1,this._mouse.y=-(K/Y)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(j8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(j8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let Q=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(j8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);Q=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-j8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);Q=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(j8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);Q=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-j8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);Q=!0;break}if(Q)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._rotateStart.set($,Z)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._panStart.set($,Z)}}_handleTouchStartDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,Z=J.pageY-Q.y,K=Math.sqrt($*$+Z*Z);this._dollyStart.set(0,K)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+$.x),K=0.5*(J.pageY+$.y);this._rotateEnd.set(Z,K)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(j8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(j8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._panEnd.set($,Z)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,Z=J.pageY-Q.y,K=Math.sqrt($*$+Z*Z);this._dollyEnd.set(0,K),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let W=(J.pageX+Q.x)*0.5,Y=(J.pageY+Q.y)*0.5;this._updateZoomParameters(W,Y)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId){this._pointers.splice(Q,1);return}}_isTrackingPointer(J){for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId)return!0;return!1}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new F0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q]}_customWheelEvent(J){let Q=J.deltaMode,$={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch(Q){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)$.deltaY*=10;return $}}function DO(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function BO(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function MO(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(R5),this.state=dJ.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let Q=this._pointers[0],$=this._pointerPositions[Q];this._onTouchStart({pointerId:Q,pageX:$.x,pageY:$.y});break}}function kO(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case U7.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=dJ.DOLLY;break;case U7.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=dJ.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=dJ.ROTATE}break;case U7.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=dJ.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=dJ.PAN}break;default:this.state=dJ.NONE}if(this.state!==dJ.NONE)this.dispatchEvent(SY)}function CO(J){switch(this.state){case dJ.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case dJ.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case dJ.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function PO(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==dJ.NONE)return;J.preventDefault(),this.dispatchEvent(SY),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(R5)}function IO(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function zO(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case N7.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=dJ.TOUCH_ROTATE;break;case N7.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=dJ.TOUCH_PAN;break;default:this.state=dJ.NONE}break;case 2:switch(this.touches.TWO){case N7.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=dJ.TOUCH_DOLLY_PAN;break;case N7.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=dJ.TOUCH_DOLLY_ROTATE;break;default:this.state=dJ.NONE}break;default:this.state=dJ.NONE}if(this.state!==dJ.NONE)this.dispatchEvent(SY)}function AO(J){switch(this._trackPointer(J),this.state){case dJ.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case dJ.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case dJ.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case dJ.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=dJ.NONE}}function _O(J){if(this.enabled===!1)return;J.preventDefault()}function TO(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function SO(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var G$=new _;function t8(J,Q,$,Z,K,W){let Y=2*Math.PI*K/4,X=Math.max(W-2*K,0),H=Math.PI/4;G$.copy(Q),G$[Z]=0,G$.normalize();let U=0.5*Y/(Y+X),N=1-G$.angleTo(J)/H;if(Math.sign(G$[$])===1)return N*U;else return X/(Y+X)+U+U*(1-N)}class A8 extends TJ{constructor(J=1,Q=1,$=1,Z=2,K=0.1){let W=Z*2+1;K=Math.min(J/2,Q/2,$/2,K);super(1,1,1,W,W,W);if(this.type="RoundedBoxGeometry",this.parameters={width:J,height:Q,depth:$,segments:Z,radius:K},W===1)return;let Y=this.toNonIndexed();this.index=null,this.attributes.position=Y.attributes.position,this.attributes.normal=Y.attributes.normal,this.attributes.uv=Y.attributes.uv;let X=new _,H=new _,U=new _(J,Q,$).divideScalar(2).subScalar(K),N=this.attributes.position.array,F=this.attributes.normal.array,G=this.attributes.uv.array,E=N.length/6,O=new _,B=0.5/W;for(let R=0,q=0;R<N.length;R+=3,q+=2)switch(X.fromArray(N,R),H.copy(X),H.x-=Math.sign(H.x)*B,H.y-=Math.sign(H.y)*B,H.z-=Math.sign(H.z)*B,H.normalize(),N[R+0]=U.x*Math.sign(X.x)+H.x*K,N[R+1]=U.y*Math.sign(X.y)+H.y*K,N[R+2]=U.z*Math.sign(X.z)+H.z*K,F[R+0]=H.x,F[R+1]=H.y,F[R+2]=H.z,Math.floor(R/E)){case 0:O.set(1,0,0),G[q+0]=t8(O,H,"z","y",K,$),G[q+1]=1-t8(O,H,"y","z",K,Q);break;case 1:O.set(-1,0,0),G[q+0]=1-t8(O,H,"z","y",K,$),G[q+1]=1-t8(O,H,"y","z",K,Q);break;case 2:O.set(0,1,0),G[q+0]=1-t8(O,H,"x","z",K,J),G[q+1]=t8(O,H,"z","x",K,$);break;case 3:O.set(0,-1,0),G[q+0]=1-t8(O,H,"x","z",K,J),G[q+1]=1-t8(O,H,"z","x",K,$);break;case 4:O.set(0,0,1),G[q+0]=1-t8(O,H,"x","y",K,J),G[q+1]=1-t8(O,H,"y","x",K,Q);break;case 5:O.set(0,0,-1),G[q+0]=t8(O,H,"x","y",K,J),G[q+1]=1-t8(O,H,"y","x",K,Q);break}}static fromJSON(J){return new A8(J.width,J.height,J.depth,J.segments,J.radius)}}var V0={tableWidth:0.92,tableCenterY:0.724,tableThickness:0.09,feltWidth:0.78,feltCenterY:0.776,surfaceY:0.782,chairSeatY:0.51,chairSeatWidth:0.56,seatDistance:0.77,tileLength:0.054,tileWidth:0.027,tileThickness:0.011,tileGap:0.0016,pipRadius:0.0033,pipColumnSpacing:0.0072,pipRowSpacing:0.0076,rackRadius:0.418,rackSpacing:0.0305,neutralPoseTime:10.25,boardLimit:0.27},O9=[[0,V0.seatDistance,Math.PI],[V0.seatDistance,0,-Math.PI/2],[0,-V0.seatDistance,0],[-V0.seatDistance,0,Math.PI/2]];function yY(J){let Q=J.vertical?V0.tileWidth:V0.tileLength,$=J.vertical?V0.tileLength:V0.tileWidth;return{left:J.x-Q/2,right:J.x+Q/2,top:J.z-$/2,bottom:J.z+$/2}}var wO=V0.boardLimit,jO=V0.feltWidth/2-0.022;function vY(J,Q,$=wO){let Z=yY(J);if(Math.max(Math.abs(Z.left),Math.abs(Z.right),Math.abs(Z.top),Math.abs(Z.bottom))>$+0.00000001)return!1;return Q.every((K)=>{let W=yY(K);return Z.right<=W.left-0.0015||Z.left>=W.right+0.0015||Z.bottom<=W.top-0.0015||Z.top>=W.bottom+0.0015})}function L5(J,Q,$){let{tileLength:Z,tileWidth:K,tileGap:W}=V0,Y=Q.x===Q.y,X=(Y?K:Z)/2,H=J.tile,U=[],N=[[J.dx,J.dz],[J.dz,-J.dx],[-J.dz,J.dx]];for(let F=0;F<N.length;F++){let[G,E]=N[F],O=F!==0,B=(H.isDouble?K:Z)/2,R=(H.isDouble?Z:K)/2,q=H.x+J.dx*(O?H.isDouble?0:Z/4:B),M=H.z+J.dz*(O?H.isDouble?0:Z/4:B),P=O?[0,Z/8,-Z/8]:[0];for(let V of P){let L=Math.atan2(-E,G)+($==="left"?Math.PI:0)+(Y?Math.PI/2:0);U.push({id:Q.id,x:q+G*((O?R:0)+W+X)+J.dx*V,z:M+E*((O?R:0)+W+X)+J.dz*V,yaw:L,vertical:Math.abs(Math.sin(L))>0.5,isDouble:Y,dx:G,dz:E,side:$})}}return U}function jY(J,Q,$,Z){let K={id:"future",x:0,y:Z?0:1};return L5({tile:J,dx:J.dx,dz:J.dz},K,$).some((W)=>vY(W,Q))}function V5(J,Q=[]){return B5(J,Q).placements}function D5(J,Q=[]){let $=B5(J,Q);if(!$.ends)return[];return["left","right"].map((Z)=>{let K=$.ends[Z],W=K.tile,Y=yY(W),X=Math.abs(K.dx)*(Y.right-Y.left)/2+Math.abs(K.dz)*(Y.bottom-Y.top)/2,H=X+0.013;return{x:W.x+K.dx*H,z:W.z+K.dz*H,dx:K.dx,dz:K.dz}})}function B5(J,Q){if(J.length>28)throw Error("A double-six chain has at most 28 tiles.");if(!J.length)return{placements:[],ends:null};let $=new Map(J.map((G)=>[G.id,G])),Z=Q.filter((G)=>G.type==="play"&&G.tile&&$.has(G.tile)),K=$.get(Z[0]?.tile||"")||J[0],W=J.findIndex((G)=>G.id===K.id),Y=K.x===K.y,X={id:K.id,x:0,z:0,yaw:Y?Math.PI/2:0,vertical:Y,isDouble:Y,dx:1,dz:0,side:"root"},H=[X],U=new Map([[X.id,X]]),N={left:{tile:X,dx:-1,dz:0},right:{tile:X,dx:1,dz:0}},F=Z.length===J.length?Z.slice(1):[...J.slice(0,W).reverse().map((G)=>({type:"play",tile:G.id,side:"left"})),...J.slice(W+1).map((G)=>({type:"play",tile:G.id,side:"right"}))];for(let G of F){let E=$.get(G.tile);if(U.has(E.id))continue;let O=G.side==="left"?"left":G.side==="right"?"right":J.findIndex((M)=>M.id===E.id)<W?"left":"right",B=L5(N[O],E,O),R=B.filter((M)=>vY(M,H));if(!R.length)R=B.filter((M)=>vY(M,H,jO));let q=R.find((M)=>jY(M,[...H,M],O,!1)&&jY(M,[...H,M],O,!0))||R.find((M)=>jY(M,[...H,M],O,!1))||R[0];if(!q)throw Error(`No safe placement for ${E.id} after ${H.length} tiles`);H.push(q),U.set(E.id,q),N[O]={tile:q,dx:q.dx,dz:q.dz}}return{placements:J.map((G)=>U.get(G.id)),ends:N}}function M5(J,Q,$=!1){if($)return{breath:0,headYaw:0,headNod:0};let Z=J*2.173+0.43;return{breath:0.0055*Math.sin(Q*(0.78+J*0.093)+Z),headYaw:0.087*Math.sin(Q*(0.213+J*0.037)+Z)+0.028*Math.sin(Q*(0.487+J*0.029)+Z*1.91),headNod:0.009*Math.sin(Q*(0.267+J*0.035)+Z*0.71)}}var k5=new _(1,0,0),V9=new _(0,1,0),fY=new CJ;function pY(J){let Q=[];return J.traverse(($)=>{if($.isBone)Q.push({bone:$,position:$.position.clone(),quaternion:$.quaternion.clone(),scale:$.scale.clone()})}),Q}var b9=new _,L9=new _,h9=new _,t7=new _,e9=new _,e8=new _,e7=new _,J6=new _,$6=new CJ,D9=new CJ,KK=new CJ,$K=new CJ,L$=(J)=>Math.min(1,Math.max(-1,J)),Z6=(J,Q,$)=>Math.min($,Math.max(Q,J)),f8=(J)=>J*J*(3-2*J);function Z8(J,Q){J.getWorldQuaternion(D9),J.parent.getWorldQuaternion(KK),J.quaternion.copy(KK.invert()).multiply(Q).multiply(D9),J.updateMatrixWorld(!0)}var _8=new _,Q9=new _;function yO(J){J.holder.getWorldQuaternion($K),_8.set(1,0,0).applyQuaternion($K),Q9.set(0,0,1).applyQuaternion($K)}function gY(J,Q,$,Z,K){return K.set(Q,$,Z).applyMatrix4(J.holder.matrixWorld)}function bY(J,Q,$,Z){return Z.set(J,Q,$).applyQuaternion($K).normalize()}var vO=0.965;function fO(J,Q,$){let{brazo:Z,antebrazo:K,mano:W}=J;if(!Z||!K||!W||!Z.parent||!K.parent)return;Z.getWorldPosition(b9),K.getWorldPosition(L9),W.getWorldPosition(h9);let Y=b9.distanceTo(L9),X=L9.distanceTo(h9);if(Y<0.00001||X<0.00001)return;let H=Z6(b9.distanceTo(Q),Math.abs(Y-X)+0.002,(Y+X)*vO);if(e9.subVectors(L9,b9),e8.subVectors(h9,L9),e7.crossVectors(e9,e8),e7.lengthSq()<0.0000000001)e7.copy(_8);else e7.normalize();let U=Math.acos(L$((Y*Y+X*X-b9.distanceToSquared(h9))/(2*Y*X))),F=Math.acos(L$((Y*Y+X*X-H*H)/(2*Y*X)))-U;if(Z8(K,$6.setFromAxisAngle(e7,F)),W.getWorldPosition(h9),Math.abs(b9.distanceTo(h9)-H)>0.001)Z8(K,$6.setFromAxisAngle(e7,-2*F)),W.getWorldPosition(h9);if(e9.subVectors(h9,b9).normalize(),e8.subVectors(Q,b9),e8.lengthSq()<0.0000000001)return;if(e8.normalize(),Z8(Z,$6.setFromUnitVectors(e9,e8)),!$)return;if(K.getWorldPosition(L9),J6.subVectors(L9,b9),J6.addScaledVector(e8,-J6.dot(e8)),t7.subVectors($,b9),t7.addScaledVector(e8,-t7.dot(e8)),J6.lengthSq()<0.0000000001||t7.lengthSq()<0.0000000001)return;J6.normalize(),t7.normalize();let G=Math.atan2(e7.crossVectors(J6,t7).dot(e8),L$(J6.dot(t7)));Z8(Z,$6.setFromAxisAngle(e8,G))}var v8=new _,KQ=new _,F$=new _,bO=new QJ,hY=new CJ,E$=new CJ;function hO(J,Q,$){let{antebrazo:Z,mano:K}=J;if(!Z||!K||!K.parent)return;if(v8.copy(Q).normalize(),F$.crossVectors(v8,$),F$.lengthSq()<0.00000001)return;F$.normalize(),KQ.crossVectors(F$,v8),hY.setFromRotationMatrix(bO.makeBasis(F$,v8,KQ)),Z.getWorldPosition(L9),K.getWorldPosition(h9),e9.subVectors(h9,L9).normalize(),K.getWorldQuaternion(D9),E$.copy(hY).multiply(D9.invert());let W=E$.x*e9.x+E$.y*e9.y+E$.z*e9.z,Y=2*Math.atan2(W,E$.w);if(Number.isFinite(Y))Z8(Z,$6.setFromAxisAngle(e9,Z6(Y*0.5,-1.2,1.2)));K.parent.getWorldQuaternion(KK),K.quaternion.copy(KK.invert()).multiply(hY),K.updateMatrixWorld(!0)}var xO=new _;function gO(J,Q,$){let Z=Q.lado==="Left"?1:-1,K=J.index*1.7,W=V0.seatDistance-V0.tableWidth/2;return gY(J,Z*(0.225+Math.sin(K)*0.01)+Math.sin($*0.23+K)*0.004,V0.surfaceY+0.026,W+(Z>0?0.035:0.06)+Math.cos(K*1.3)*0.012+Math.sin($*0.17+K*2)*0.004,xO)}var pO=new _,$Q=new _,ZK=new _,aZ=new _,lO=0.045,mO=0.05,uO=0.12,dO=0.14,cO=0.45,nO=4;function C5(J,Q,$){return aZ.subVectors(Q,J.holder.getWorldPosition(ZK)),aZ.y=0,aZ.normalize(),$.copy(Q).addScaledVector(aZ,-mO).setY(Q.y+lO)}function sO(J,Q,$){let Z=J.jugada;if(!Z)return null;if(Q-Z.t0>nO)return J.jugada=null,null;let K=Z.anim;if(K.elapsed<K.duration)return C5(J,Z.obj.position,$Q),$Q.lerpVectors($,$Q,f8(Z6(K.elapsed/uO,0,1)));if(Z.aterrizo==null)Z.aterrizo=Q;let W=Q-Z.aterrizo;C5(J,Z.hasta,$Q);let Y=K.golpe?0.7:dO;if(W<Y)return $Q;let X=(W-Y)/cO;if(X>=1)return J.jugada=null,null;return $Q.lerp($,f8(X))}var HJ=[1,2.2,3.5,4.7,5.6],P5=-1e9;function iO(J,Q,$){let Z=J.bebida;if(!Z)return null;if(J.trago){let W=J.trago.fijo??Q-J.trago.t0;if(W<0||W>=HJ[4]||J.jugada)return J.trago=null,S5(Z),J.sed=Q+90+Math.random()*150,null;return W}if(!$||!$.dt)return null;if(J.sed==null)return J.sed=Q+20+Math.random()*100,null;if(Q<J.sed||Q-P5<20)return null;let K=J.index;if(J.jugada||$.jugando&&$.turno===K||$.habla.has(K)||$.fin&&Q-$.fin.t<6)return J.sed=Q+3+Math.random()*8,null;return P5=Q,J.trago={t0:Q},0}function S5(J){J.group.position.copy(J.home),J.group.quaternion.identity()}var R9=new _,Q6=new _,ZQ=new _,q$=new _,I5=new _;function z5(J,Q,$,Z){let K=J.bebida;if(ZQ.copy(Q9).addScaledVector(V9,0.25).normalize(),q$.copy(Q9).multiplyScalar(0.55).addScaledVector(V9,0.8).normalize(),Q6.copy(K.home),Q6.y+=K.alto,Q6.addScaledVector(_8,-(K.radio+0.015)).addScaledVector(ZQ,-0.03),J.bocaMundo)J.bocaMundo(R9),R9.addScaledVector(Q9,0.006);else J.front.getWorldPosition(R9),R9.y-=0.075,R9.addScaledVector(Q9,0.012);let W=K.inclina;I5.copy(V9).multiplyScalar(Math.cos(W)).addScaledVector(Q9,-Math.sin(W)),R9.addScaledVector(I5,-K.boca).addScaledVector(_8,-(K.radio+0.015)).addScaledVector(q$,-0.03);let Y=J.trago;if(Y){if(Q<HJ[2])(Y.boca??=new _).copy(R9);else if(Y.boca)R9.copy(Y.boca)}let X;if(Q<HJ[0])rZ($,Q6,0.045,0.5,f8(Q/HJ[0]),Z),X=ZQ;else if(Q<HJ[1]){let H=f8((Q-HJ[0])/(HJ[1]-HJ[0]));rZ(Q6,R9,0.1,0.25,H,Z),X=ZQ.lerp(q$,H).normalize()}else if(Q<HJ[2])Z.copy(R9),X=q$;else if(Q<HJ[3]){let H=f8((Q-HJ[2])/(HJ[3]-HJ[2]));rZ(Q6,R9,0.1,0.25,1-H,Z),X=q$.lerp(ZQ,H).normalize()}else rZ($,Q6,0.045,0.5,1-f8((Q-HJ[3])/(HJ[4]-HJ[3])),Z),X=ZQ;return X}var O$=new _;function rZ(J,Q,$,Z,K,W){O$.lerpVectors(J,Q,Z),O$.y=Math.max(J.y,Q.y*Z+J.y*(1-Z))+$;let Y=1-K;return W.set(Y*Y*J.x+2*Y*K*O$.x+K*K*Q.x,Y*Y*J.y+2*Y*K*O$.y+K*K*Q.y,Y*Y*J.z+2*Y*K*O$.z+K*K*Q.z)}function oO(J){return J<HJ[0]?f8(Math.min(1,J/(HJ[0]*0.85))):J<HJ[3]?1:1-f8(Math.min(1,(J-HJ[3])/((HJ[4]-HJ[3])*0.85)))}var A5=new _,_5=new _,T5=new _;function aO(J,Q){let $=J.bebida,Z=J.brazos[1].mano;if(Q<HJ[0]||Q>=HJ[3]){S5($);return}Z.getWorldQuaternion(D9),Z.getWorldPosition(WK),A5.set(0,0,1).applyQuaternion(D9),_5.set(0,1,0).applyQuaternion(D9);let K=Q<HJ[1]?f8((Q-HJ[0])/(HJ[1]-HJ[0])):Q<HJ[2]?1:1-f8((Q-HJ[2])/(HJ[3]-HJ[2]));$.group.quaternion.setFromAxisAngle(_8,-$.inclina*K),T5.set(0,1,0).applyQuaternion($.group.quaternion),$.group.position.copy(WK).addScaledVector(A5,$.radio+0.015).addScaledVector(_5,0.03).addScaledVector(T5,-$.alto);let W=Math.min(1,(Q-HJ[0])/0.2,(HJ[3]-Q)/0.2);if(W<1){let Y=f8(Math.max(0,W));$.group.position.lerpVectors($.home,$.group.position,Y),$.group.quaternion.slerpQuaternions(rO.identity(),$.group.quaternion,Y)}}var rO=new CJ;function tO(J,Q,$){let Z=J.cara;if(!Z)return 0;if(J.proxParpadeo==null)J.proxParpadeo=Q+1+Math.random()*4;if(Q>=J.proxParpadeo)J.parpadeoT0=Q,J.proxParpadeo=Q+(Math.random()<0.15?0.32:2+Math.random()*4);let K=Q-(J.parpadeoT0??-9),W=K<0?0:K<0.06?K/0.06:K<0.09?1:K<0.16?1-(K-0.09)/0.07:0;if(J.caraFija){let U=J.caraFija,N=Z.mesh.morphTargetInfluences;if(N)N[Z.iP]=U.p*0.85,N[Z.iS]=U.s;return J.parpadeo=U.p,U.p}let Y=J.index,X=0;if($?.fin&&$.fin.team!=null&&Q-$.fin.t<5&&Q>=$.fin.t)X=Y%2===$.fin.team?0.95:-0.7;else if($?.habla?.has(Y))X=$.hablaTipo?.get(Y)==="win"?0.85:0.2;else{if(J.casual==null)J.casual=Q+8+Math.random()*30;if(Q>J.casual+2.5)J.casual=Q+15+Math.random()*45;if(Q>=J.casual)X=0.45}J.sonrisa=(J.sonrisa??0)+(X-(J.sonrisa??0))*(1-Math.exp(-($?.dt||0.016)*3.5));let H=Z.mesh.morphTargetInfluences;if(H)H[Z.iP]=W*0.85,H[Z.iS]=J.sonrisa;return J.parpadeo=W,W}function eO(J,Q){let $=J.index,Z=0.23+$%4*0.012,K=Q*Z*Math.PI*2+$*1.9,W=Math.sin(K);return{b:W>0?W:W*0.7,balanceo:Math.sin(Q*0.11+$*2.3)*0.022+Math.sin(Q*0.29+$)*0.008,ladeo:Math.sin(Q*0.07+$*1.3)*0.014}}var xY=new _,tZ=new _,J9=new _,k7=new _,B9=new _,y8=new CJ,eZ=(J)=>{let Q=Math.sin(J*127.1+311.7)*43758.5453;return Q-Math.floor(Q)};function JR(J,Q,$,Z){let K=J.index;if(K>=4||!$)return $?.foco&&Q-$.foco.t<2.5?Z.copy($.foco.p):Z.set(0,V0.surfaceY,0);if($.fin&&Q-$.fin.t<5){if($.fin.team!=null&&K%2===$.fin.team&&$.cabezas[(K+2)%4])return Z.copy($.cabezas[(K+2)%4]);return gY(J,0,V0.surfaceY,V0.seatDistance-V0.rackRadius,Z)}if(J.trago&&J.bebida){let X=J.trago.fijo??Q-J.trago.t0;if(X<HJ[0]+0.1||X>HJ[2]+0.5&&X<HJ[3]+0.1)return Z.copy(J.bebida.home);if(X<=3.4)return J.head.getWorldPosition(Z),Z.addScaledVector(Q9,1).addScaledVector(V9,-0.15)}if($.foco&&Q-$.foco.t<1.4)return Z.copy($.foco.p);for(let X of $.habla)if(X!==K&&$.cabezas[X])return Z.copy($.cabezas[X]);if($.jugando&&$.turno===K){let X=Math.floor(Q/1.3);return gY(J,(eZ(X+K*9)-0.5)*0.12,V0.surfaceY+0.02,V0.seatDistance-V0.rackRadius+0.02,Z)}let W=Math.floor((Q+K*1.37)/(2.2+K*0.35)),Y=eZ(W*4+K);if($.jugando&&Y<0.45&&$.cabezas[$.turno]&&$.turno!==K)return Z.copy($.cabezas[$.turno]);if(Y<0.62&&$.cabezas[(K+2)%4])return Z.copy($.cabezas[(K+2)%4]);if(!$.jugando&&Y<0.85&&$.cabezas[(K+1+W%2*2)%4])return Z.copy($.cabezas[(K+1+W%2*2)%4]);return Z.set((eZ(W+7)-0.5)*0.2,V0.surfaceY,(eZ(W+3)-0.5)*0.2)}function QR(J,Q,$){let{head:Z,neck:K,front:W}=J;if(!Z||!W)return;if(JR(J,Q,$,xY),!J.mirada||!$?.dt)J.mirada=(J.mirada||new _).copy(xY);else J.mirada.lerp(xY,1-Math.exp(-$.dt*5.5));for(let[Y,X]of[[K,0.4],[Z,1]]){if(!Y)continue;if(Z.getWorldPosition(tZ),W.getWorldPosition(J9),J9.sub(tZ),J9.lengthSq()<0.0000000001)return;if(J9.normalize(),k7.subVectors(J.mirada,tZ),k7.lengthSq()<0.00000001)return;k7.normalize();let H=Z6(Math.atan2(J9.z*k7.x-J9.x*k7.z,J9.x*k7.x+J9.z*k7.z),-1.25,1.25)*X;if(Z8(Y,$6.setFromAxisAngle(V9,H)),W.getWorldPosition(J9),J9.sub(tZ).normalize(),B9.crossVectors(J9,V9),B9.lengthSq()<0.00000001)continue;B9.normalize();let U=Z6(Math.asin(L$(k7.y))-Math.asin(L$(J9.y)),-0.75,0.55)*X;Z8(Y,$6.setFromAxisAngle(B9,U))}}var $R=0.23,ZR=[["lomo",0.4],["spine",0.34],["chest",0.26]],OD=new CJ;function KR(J,Q,$=0){if(!J.spine||!J.spine.parent)return;if(B9.copy(_8),J.hips&&J.lomo)for(let[Z,K]of ZR){let W=J[Z];if(!W)continue;Z8(W,y8.setFromAxisAngle(B9,Q*K))}else Z8(J.spine,y8.setFromAxisAngle(B9,Q));if($)Z8(J.spine,y8.setFromAxisAngle(V9,$))}var JK=new _,QK=new _,R$=new _,WK=new _;function YK(J,Q,$=!1,Z=null){for(let O of J.pose)O.bone.position.copy(O.position),O.bone.quaternion.copy(O.quaternion),O.bone.scale.copy(O.scale);J.holder.updateMatrixWorld(!0),yO(J);let K=M5(J.index,Q,$);if(J.spine)J.spine.quaternion.multiply(fY.setFromAxisAngle(k5,K.breath));let W=!$,Y=W?eO(J,Q):{b:0,balanceo:0,ladeo:0},X=J.index,H=X<4&&J.brazos,U=0,N=0;if(H&&Z?.fin&&Z.fin.team!=null){let O=Q-Z.fin.t;if(O>=0&&O<5)N=Math.sin(Math.min(1,O/0.5)*Math.PI/2)*(O>4?5-O:1),U+=(X%2===Z.fin.team?-0.1:0.07)*N}if(H&&Z?.jugando&&Z.turno===X)U+=0.04;let F=H&&W&&J.front?iO(J,Q,Z):null,G=[];if(H)for(let O of J.brazos){let B=pO.copy(gO(J,O,Q)),R=O.lado==="Right"?sO(J,Q,B):null,q=!!R,M=null;if(!R&&F!=null&&O.lado==="Right")R=ZK.set(0,0,0),M=z5(J,F,B,R).clone();if(R=(R||B).clone(),!q&&W&&Z?.habla?.has(X)&&O.lado==="Left")J.gesto=Math.min(1,(J.gesto||0)+(Z.dt||0)*3);else if(O.lado==="Left")J.gesto=Math.max(0,(J.gesto||0)-(Z?.dt||1)*2);if(O.lado==="Left"&&J.gesto>0){let P=f8(J.gesto);R.addScaledVector(Q9,0.06*P).addScaledVector(_8,-0.07*P),R.y+=0.07*P+Math.sin(Q*5.2)*0.012*P}if(O.lado==="Right"&&!q&&N&&X%2===Z.fin.team){let P=Q-Z.fin.t;if(P<1.1)R.y+=Math.max(0,Math.sin(Math.min(1,P/0.9)*Math.PI))*0.13}G.push({brazo:O,o:R,jugando:q,dedos:M,reposo:B.clone()})}let E=0;if(H){let O=G.find((B)=>B.jugando);if(O&&O.brazo.brazo){J.holder.worldToLocal(R$.copy(O.o));let B=Math.hypot(R$.x,R$.z-0.12);U+=Z6((B-0.42)/0.55,0,0.34),E=Z6(Math.atan2(R$.x,R$.z)*0.3,-0.3,0.3)}}if(KR(J,$R*(J.brazos?1:0.6)+U,E),F!=null){let O=(R,q)=>Math.max(0,1-Math.abs(F-R)/q),B=f8(Math.max(O(HJ[0],0.9),O(HJ[3],0.9)));if(J.spine)Z8(J.spine,y8.setFromAxisAngle(Q9,0.16*B))}if(W){if(J.spine)Z8(J.spine,y8.setFromAxisAngle(V9,Y.balanceo));if(J.spine)Z8(J.spine,y8.setFromAxisAngle(Q9,Y.ladeo));if(J.chest)Z8(J.chest,y8.setFromAxisAngle(_8,-0.018*Y.b));if(J.hombros){for(let[O,B]of J.hombros)if(B)Z8(B,y8.setFromAxisAngle(Q9,O*0.03*(Y.b+0.3)))}}if(QR(J,Q,Z),tO(J,Q,Z),J.head)J.head.quaternion.multiply(fY.setFromAxisAngle(V9,K.headYaw*0.5)),J.head.quaternion.multiply(fY.setFromAxisAngle(k5,K.headNod)),J.head.updateMatrixWorld(!0);if(W&&J.head){if(Z?.habla?.has(X)){let O=0.035*(0.6+0.4*Math.sin(Q*1.7));Z8(J.head,y8.setFromAxisAngle(_8,Math.sin(Q*6.1)*O*0.5+Math.sin(Q*3.3)*O*0.5))}if(N&&X%2!==Z.fin.team){let O=Q-Z.fin.t;if(O>0.6&&O<2.6)Z8(J.head,y8.setFromAxisAngle(V9,Math.sin((O-0.6)*Math.PI*2.4)*0.16*(2.6-O)/2))}}if(F!=null&&F>HJ[1]-0.2&&F<HJ[2]+0.2&&J.head){let O=Math.sin(Math.min(1,(F-HJ[1]+0.2)/(HJ[2]-HJ[1]+0.4))*Math.PI);Z8(J.head,y8.setFromAxisAngle(_8,-0.3*O))}if(W&&J.reaction&&J.head){let O=Q-J.reaction.time;if(O>=0&&O<1.2){let B=Math.sin(O/1.2*Math.PI)*0.035;Z8(J.head,y8.setFromAxisAngle(_8,B))}}for(let{brazo:O,o:B,jugando:R,dedos:q,reposo:M}of G){if(q)q.copy(z5(J,F,M,B));let P=O.lado==="Left"?1:-1;O.brazo.getWorldPosition(JK);let V=q?oO(F):0;if(V>0)JK.add(bY(P*0.32,-0.75,-0.6,QK).lerp(bY(P*0.45,-0.85,0.25,ZK),V));else JK.add(bY(P*(R?0.55:0.32),-0.75,R?-0.15:-0.6,QK));if(fO(O,B,JK),O.antebrazo.getWorldPosition(L9),O.mano.getWorldPosition(WK),v8.subVectors(WK,L9),v8.y=0,v8.lengthSq()<0.00000001)v8.copy(Q9);if(v8.normalize(),v8.addScaledVector(_8,-P*(R?0:0.12)).normalize(),v8.y=R?-0.55:-0.3,KQ.set(0,-1,0).addScaledVector(_8,-P*0.22),O.lado==="Left"&&J.gesto>0){let L=f8(J.gesto);KQ.lerp(QK.copy(_8).multiplyScalar(-1).add(ZK.set(0,0.4,0)),L*0.8),v8.y+=0.4*L}if(q)v8.lerp(q,V).normalize(),KQ.lerp(QK.copy(_8).addScaledVector(V9,-0.15),V).normalize();if(hO(O,v8,KQ),q)aO(J,F);if(W&&!R&&!q&&O.lado==="Right"&&J.toque&&Q-J.toque.t0<0.7){let L=Q-J.toque.t0;O.mano.getWorldQuaternion(D9),B9.set(1,0,0).applyQuaternion(D9),Z8(O.mano,y8.setFromAxisAngle(B9,-0.5*Math.max(0,Math.sin(L/0.7*Math.PI*4))))}else if(W&&!R&&!q&&O.lado==="Right"&&!(Z?.turno===X&&Z?.jugando)){let L=4.6+X*0.9,C=(Q+X*1.3)%L;if(C<0.55)O.mano.getWorldQuaternion(D9),B9.set(1,0,0).applyQuaternion(D9),Z8(O.mano,y8.setFromAxisAngle(B9,-0.22*Math.max(0,Math.sin(C/0.55*Math.PI*4))))}}J.holder.updateMatrixWorld(!0)}function w5({scene:J,texture:Q,mat:$,box:Z,cylinder:K,random:W,teal:Y,wood:X,storeSign:H}){let U=Q((L,C,A)=>{L.fillStyle="#e0d3b4",L.fillRect(0,0,C,A);let D=L.createLinearGradient(0,0,0,A);D.addColorStop(0,"#cac09b18"),D.addColorStop(0.7,"#14382d00"),D.addColorStop(1,"#162d2566"),L.fillStyle=D,L.fillRect(0,0,C,A);for(let I=0;I<7000;I++)L.fillStyle=I%3?"#b4ad8618":"#142d2924",L.fillRect(W()*C,W()*A,1+W()*3,1+W()*2);for(let I=0;I<70;I++){let d=W()*C,f=I<50?A*(0.72+W()*0.28):W()*A,u=5+W()*14;L.fillStyle=I%3?"rgba(160,145,112,.35)":"rgba(120,110,90,.25)",L.beginPath();for(let $0=0;$0<8;$0++){let y=$0*Math.PI/4,j=u*(0.6+W()*0.5);L.lineTo(d+Math.cos(y)*j,f+Math.sin(y)*j*0.65)}L.fill()}L.strokeStyle="#1b372e24";for(let I=48;I<A;I+=57)L.beginPath(),L.moveTo(0,I),L.lineTo(C,I),L.stroke()},1024,1024);Y.map=U,Y.color.set("#f2ecde"),Y.needsUpdate=!0,X.color.set("#bca98a"),X.roughness=0.84;let N=()=>{H.material.map=Q((L,C,A)=>{L.fillStyle="#efe3c4",L.fillRect(0,0,C,A);for(let d=0;d<2600;d++)L.fillStyle=d%2?"rgba(120,100,70,.07)":"rgba(255,250,235,.08)",L.fillRect(W()*C,W()*A,2+W()*14,1+W()*2);let D=document.fonts?.check?.("64px Shrikhand")?"Shrikhand":"Georgia",I=D==="Shrikhand"?A*0.66:A*0.56;L.font=`${I}px ${D}`,L.textAlign="center",L.textBaseline="middle",L.fillStyle="#c8402f",L.fillText("Colmado La Esquina",C/2+I*0.06,A/2+I*0.1),L.fillStyle="#24518a",L.fillText("Colmado La Esquina",C/2,A/2+I*0.04),L.strokeStyle="#3d938e",L.lineWidth=12,L.strokeRect(6,6,C-12,A-12);for(let d=0;d<1400;d++)L.fillStyle="rgba(239,227,196,.35)",L.fillRect(W()*C,W()*A,1+W()*3,1+W()*2)},2048,162),H.material.emissiveMap=H.material.map,H.material.needsUpdate=!0};H.material=new o0({roughness:0.9,emissive:"#ffffff",emissiveIntensity:0.1}),N(),document.fonts?.load?.("64px Shrikhand").then(N).catch(()=>{});for(let[L,C]of[[-2.7,-3.5],[2.4,-3.3]])Z(L,0.18,C,0.51,0.35,0.4,"#897052"),Z(L+0.05,0.47,C-0.04,0.4,0.23,0.32,"#a68c62");let F=(L,C,A)=>{let D=document.createElement("canvas");D.width=L,D.height=C;let I=new m8(D);I.colorSpace=J8,I.anisotropy=4;let d=()=>{let f=D.getContext("2d"),u=document.fonts?.check?.("64px Shrikhand"),$0=document.fonts?.check?.('700 40px "DM Sans"')?'"DM Sans",':"";f.fillStyle="#233a2d",f.fillRect(0,0,L,C);for(let y=0;y<70;y++)f.fillStyle=`rgba(225,225,195,${0.015+W()*0.03})`,f.beginPath(),f.ellipse(W()*L,W()*C,L*(0.04+W()*0.14),C*(0.015+W()*0.045),W()*3,0,Math.PI*2),f.fill();f.textAlign="center",f.textBaseline="middle",f.lineCap="round";for(let[y,j,g,v,i]of A){if(y==="—"){f.strokeStyle="rgba(225,225,195,.45)",f.lineWidth=6,f.beginPath(),f.moveTo(L*0.17,j+3),f.quadraticCurveTo(L/2,j-5,L*0.83,j+1),f.stroke();continue}f.font=v==="titulo"?u?`${g}px Shrikhand`:`bold ${g*0.95}px Georgia`:`${v} ${g}px ${$0}sans-serif`;let x=f.measureText(y).width,a=L*0.84;if(f.save(),f.translate(L/2,j),x>a)f.scale(a/x,1);f.fillStyle=i;for(let Q0=0;Q0<3;Q0++)f.globalAlpha=Q0?0.4:0.75,f.fillText(y,(W()-0.5)*3,(W()-0.5)*3);f.restore()}for(let y=0;y<L*C/40;y++)f.fillStyle="rgba(35,58,45,.5)",f.fillRect(W()*L,W()*C,1+W()*2,1+W());f.strokeStyle="#9c8c62",f.lineWidth=L*0.04,f.strokeRect(L*0.02,L*0.02,L-L*0.04,C-L*0.04),f.strokeStyle="rgba(60,40,20,.35)",f.lineWidth=4,f.strokeRect(L*0.04,L*0.04,L-L*0.08,C-L*0.08),I.needsUpdate=!0};return d(),Promise.all([document.fonts?.load?.("64px Shrikhand"),document.fonts?.load?.('700 40px "DM Sans"')]).then(d).catch(()=>{}),new o0({roughness:1,map:I,emissive:"#ffffff",emissiveMap:I,emissiveIntensity:0.06})},G="#ece7cc",E="#e9b35a",O="#a9d3dd";{let L=new P0(new qJ(0.72,0.69),F(768,736,[["HOY HAY",110,74,"titulo",G],["CAFÉ",262,78,800,G],["HIELO · PAN",388,66,800,"#dcd9b8"],["—",478],["REFRESCOS",572,60,700,O]]));L.position.set(-3.43,1.6,-2.33),L.rotation.z=0.025,J.add(L),Z(-3.43,1.245,-2.315,0.66,0.018,0.05,"#8a7a55"),Z(-3.28,1.262,-2.31,0.06,0.016,0.016,"#efeadb")}{let L=document.documentElement.lang==="en",C=new wJ,A=$("#6b4a2e",0.8);C.position.set(-2,0,-2.1),C.rotation.y=0.5,J.add(C);let d=new P0(new qJ(0.56,0.72),F(560,720,[[L?"COMING":"YA",96,92,"titulo",E],[L?"SOON":"VIENE",206,92,"titulo",E],["—",282],[L?"1 vs 1":"1 contra 1",372,80,800,G],[L?"Online":"En línea",478,80,800,G],[L?"your people,":"tu gente,",576,50,600,O],[L?"from anywhere":"de donde sea",636,50,600,O]])),f=new wJ;f.rotation.x=-0.2,C.add(f),d.position.set(0,0.44,0.012),f.add(d);{let $0=new P0(new TJ(0.56,0.72,0.012),A);$0.position.set(0,0.44,0),f.add($0)}for(let[$0,y,j,g]of[[-0.29,0.42000000000000004,0.035,0.88],[0.29,0.42000000000000004,0.035,0.88],[0,0.8500000000000001,0.62,0.035],[0,0.03,0.62,0.035]]){let v=new P0(new TJ(j,g,0.022),A);v.position.set($0,y,0),f.add(v)}let u=new wJ;u.position.z=-0.32,u.rotation.x=0.2,C.add(u);for(let $0 of[-0.27,0.27]){let y=new P0(new TJ(0.03,0.8600000000000001,0.02),A);y.position.set($0,0.43000000000000005,-0.02),u.add(y)}C.traverse(($0)=>{if($0.isMesh)$0.castShadow=!0,$0.receiveShadow=!0})}let B=[];Z(-1.12,1.59,-4,0.42,0.21,0.31,"#677761"),Z(-1.12,1.61,-3.836,0.34,0.1,0.016,"#414b3d"),Z(-0.38,1.5,-3.98,0.3,0.018,0.22,"#c5b887");for(let[L,C,A]of[[0.7,-4.03,"#8b7747"],[0.98,-4.07,"#637751"],[1.29,-4.02,"#a88b50"]])K(L,1.6,C,0.07,0.075,0.25,A,14),K(L,1.739,C,0.077,0.077,0.028,"#aaa386",12);Z(0.2,1.51,-4.01,0.4,0.07,0.28,"#6c5838");for(let L=0;L<4;L++){let C=new P0(new R8(1,10,6),$(L%2?"#bca276":"#a98e61"));C.scale.set(0.055,0.035,0.115),C.position.set(0.07+L*0.085,1.57,-4),C.rotation.y=(L-1.5)*0.13,J.add(C)}let R=new hJ({transparent:!0,depthWrite:!1,map:Q((L,C,A)=>{for(let D=0;D<90;D++)L.fillStyle=D%2?"#152c2110":"#3036230a",L.beginPath(),L.ellipse(C/2+(W()-0.5)*C*0.45,A/2+(W()-0.5)*A*0.45,W()*C*0.24,W()*A*0.18,W()*Math.PI,0,Math.PI*2),L.fill()},256,256)});for(let[L,C,A,D]of[[-2.4,-2.2,1.1,0.9],[2.5,-2.5,1.3,0.8],[0,-3.25,2,0.6]]){let I=new P0(new qJ(A,D),R);I.rotation.x=-Math.PI/2,I.position.set(L,0.008,C),J.add(I)}for(let[L,C]of[[-3,-0.9],[3.3,-1.5]]){K(L,0.18,C,0.18,0.13,0.34,"#87553c",14),K(L,0.354,C,0.16,0.16,0.012,"#3f422d",12);let A=new wJ;A.position.set(L,0.36,C),J.add(A);for(let D=0;D<7;D++){let I=new rQ;I.moveTo(0,0),I.quadraticCurveTo(-0.09,0.23,0,0.55+W()*0.12),I.quadraticCurveTo(0.09,0.23,0,0);let d=new P0(new eQ(I,5),new o0({color:D%2?"#597d4f":"#3c603e",roughness:1,side:iJ}));d.rotation.set(0.3+W()*0.4,D*Math.PI*2/7,0),A.add(d)}B.push(A)}let q=new qJ(0.55,1.3,5,9),M=new P0(q,new o0({color:"#b2a27c",roughness:1,side:iJ}));M.position.set(-2.85,1.75,-3.05),J.add(M);let P=q.attributes.position,V=P.array.slice();return{update(L){B.forEach((C,A)=>C.rotation.z=Math.sin(L*0.53+A*2.1)*0.015);for(let C=0;C<P.count;C++){let A=V[C*3+1];P.setZ(C,Math.sin(L*1.17+A*3)*0.025*(0.65-A)/1.3)}P.needsUpdate=!0}}}function j5({scene:J,texture:Q,mat:$,box:Z,cylinder:K,staticGeo:W,random:Y}){let X=(w=0,l=0,n=0)=>new _(w,l,n),H=(w,l,n,K0,t,L0,O0=5000)=>{w.fillStyle=K0,w.fillRect(0,0,l,n);for(let U0=0;U0<O0;U0++)w.fillStyle=Y()>0.5?t:L0,w.fillRect(Y()*l,Y()*n,1+Y()*4,1+Y()*3)},U=[];function N(w,{w:l=1024,h:n=256,fondo:K0="#efe3c4",tinta:t="#24518a",sombra:L0="#c8402f",borde:O0=null,px:U0=0.62}={}){let S0=document.createElement("canvas");S0.width=l,S0.height=n;let n0=new m8(S0);n0.colorSpace=J8;let FJ=()=>{let b0=S0.getContext("2d"),PJ=document.fonts?.check?.("64px Shrikhand")?"Shrikhand":"Georgia";if(K0){b0.fillStyle=K0,b0.fillRect(0,0,l,n);for(let sJ=0;sJ<l*1.2;sJ++)b0.fillStyle=sJ%2?"rgba(120,100,70,.07)":"rgba(255,250,235,.08)",b0.fillRect(Math.random()*l,Math.random()*n,2+Math.random()*12,1+Math.random()*2)}else b0.clearRect(0,0,l,n);let SJ=n*U0;b0.font=`${SJ}px ${PJ}`;let gJ=b0.measureText(w).width;if(gJ>l*0.9)SJ*=l*0.9/gJ,b0.font=`${SJ}px ${PJ}`;b0.textAlign="center",b0.textBaseline="middle";let h=SJ*0.06;if(L0)b0.fillStyle=L0,b0.fillText(w,l/2+h,n/2+h+SJ*0.04);if(b0.fillStyle=t,b0.fillText(w,l/2,n/2+SJ*0.04),O0)b0.strokeStyle=O0,b0.lineWidth=n*0.07,b0.strokeRect(b0.lineWidth/2,b0.lineWidth/2,l-b0.lineWidth,n-b0.lineWidth);for(let sJ=0;sJ<l*0.5;sJ++)b0.fillStyle=K0?"rgba(239,227,196,.3)":"rgba(0,0,0,0)",b0.fillRect(Math.random()*l,Math.random()*n,1+Math.random()*3,1+Math.random()*2);n0.needsUpdate=!0};return FJ(),U.push(FJ),n0}document.fonts?.load?.("64px Shrikhand").then(()=>U.forEach((w)=>w())).catch(()=>{});let F=new o0({roughness:0.93,map:Q((w,l,n)=>{H(w,l,n,"#e3d6b8","rgba(255,250,236,.10)","rgba(120,100,70,.08)");let K0=w.createLinearGradient(0,0,0,n);K0.addColorStop(0,"rgba(90,70,50,.12)"),K0.addColorStop(0.18,"rgba(90,70,50,0)"),K0.addColorStop(0.8,"rgba(90,70,50,0)"),K0.addColorStop(1,"rgba(90,70,50,.2)"),w.fillStyle=K0,w.fillRect(0,0,l,n);for(let t=0;t<22;t++){let L0=Y()*l,O0=n*(0.08+Y()*0.3),U0=w.createLinearGradient(0,0,0,O0);U0.addColorStop(0,"rgba(80,70,55,.2)"),U0.addColorStop(1,"rgba(80,70,55,0)"),w.fillStyle=U0,w.fillRect(L0,0,3+Y()*8,O0)}},512,512)}),G=new o0({roughness:0.9,map:Q((w,l,n)=>{H(w,l,n,"#3f9a96","rgba(200,240,230,.10)","rgba(20,50,50,.10)");for(let K0=0;K0<50;K0++)w.fillStyle="rgba(225,218,195,.55)",w.beginPath(),w.ellipse(Y()*l,Y()*n,2+Y()*9,1+Y()*5,Y()*3,0,Math.PI*2),w.fill()},256,256)});Z(-3.48,0.625,-2.355,0.702,1.25,0.012,G),Z(3.45,0.625,-2.355,0.802,1.25,0.012,G),Z(-3.906,0.625,-3.85,0.012,1.25,2.72,G),Z(3.906,0.625,-3.85,0.012,1.25,2.72,G);let E=22,O="#3d8a5c",B="#e8dfc8",R=Q((w,l,n)=>{for(let t=0;t<E;t++)w.fillStyle=t%2?B:O,w.fillRect(t*l/E,0,Math.ceil(l/E),n);for(let t=0;t<2500;t++)w.fillStyle=Y()>0.5?"rgba(255,250,235,.06)":"rgba(20,30,20,.07)",w.fillRect(Y()*l,Y()*n,2,2);let K0=w.createLinearGradient(0,0,0,n);K0.addColorStop(0,"rgba(0,0,0,.14)"),K0.addColorStop(1,"rgba(40,30,20,0)"),w.fillStyle=K0,w.fillRect(0,0,l,n)},1024,128);W(new qJ(7.3,0.86),new o0({map:R,roughness:0.95,side:iJ}),[0,2.59,-1.955],[-1.237,0,0]);let q=Q((w,l,n)=>{let K0=l/E;for(let t=0;t<E;t++)w.fillStyle=t%2?B:O,w.fillRect(t*K0,0,Math.ceil(K0),n*0.5),w.beginPath(),w.arc(t*K0+K0/2,n*0.5,K0/2-0.5,0,Math.PI),w.fill()},1024,64);W(new qJ(7.3,0.2),new o0({map:q,roughness:0.95,side:iJ,alphaTest:0.5}),[0,2.35,-1.548]);{let w=new o0({roughness:0.8,map:Q((n,K0,t)=>{n.fillStyle="#2a3332",n.fillRect(0,0,K0,t);let L0=n.createLinearGradient(0,0,0,t);L0.addColorStop(0,"#cfe8e0"),L0.addColorStop(1,"#8fb3aa"),n.fillStyle=L0,n.fillRect(14,14,K0-28,t-28),n.strokeStyle="#1f2525",n.lineWidth=7;for(let O0=30;O0<K0-20;O0+=26)n.beginPath(),n.moveTo(O0,14),n.lineTo(O0,t-14),n.stroke();for(let O0 of[t*0.33,t*0.66])n.beginPath(),n.moveTo(14,O0),n.lineTo(K0-14,O0),n.stroke();n.strokeStyle="#e8e0cc",n.lineWidth=12,n.strokeRect(6,6,K0-12,t-12)},256,256),emissive:"#ffffff",emissiveIntensity:0.12});w.emissiveMap=w.map,W(new qJ(1.1,1),w,[3.915,1.75,-4.3],[0,Math.PI/2,0]);let l=new P0(new qJ(2.2,0.36),new o0({map:N("Víveres · Bebidas · Hielo",{w:1536,h:252,fondo:null,tinta:"#24518a",sombra:"#c8402f"}),transparent:!0,roughness:0.9}));l.position.set(3.915,2.55,-3.75),l.rotation.y=Math.PI/2,J.add(l)}let M=3.3,P=2.75,V=-2.7,L=M+P;Z(0,M+P/2,-5.2,8.2,P,0.2,F),Z(-4,M+P/2,-3.95,0.2,P,2.7,F),Z(4,M+P/2,-3.95,0.2,P,2.7,F),Z(0,M+P/2,V,8.2,P,0.2,F),Z(0,L-0.08,-3.95,8.44,0.16,2.95,"#d3c9b0"),Z(0,M+0.06,V+0.12,8.3,0.1,0.06,"#3d938e");let C=new o0({roughness:0.7,map:Q((w,l,n)=>{w.fillStyle="#2d3a3a",w.fillRect(0,0,l,n);let K0=15,t=(n-24)/K0;for(let L0=0;L0<K0;L0++){let O0=12+L0*t;w.fillStyle="#7aa39d",w.fillRect(12,O0,l-24,t*0.72),w.fillStyle="rgba(0,0,0,.25)",w.fillRect(12,O0+t*0.62,l-24,t*0.1)}w.strokeStyle="#e8e0cc",w.lineWidth=12,w.strokeRect(6,6,l-12,n-12)},256,256)});W(new qJ(1.2,1.25),C,[-2.5,4.6,V+0.107]);let A=new o0({roughness:0.7,map:C.map,emissive:"#8fb0ff",emissiveMap:C.map,emissiveIntensity:0.25}),D=new P0(new qJ(1.2,1.25),A);D.position.set(2.5,4.6,V+0.107),J.add(D);let I=new o0({roughness:0.8,emissive:"#ffffff",emissiveIntensity:0.55,map:Q((w,l,n)=>{let K0=w.createLinearGradient(0,0,0,n);K0.addColorStop(0,"#f0c27f"),K0.addColorStop(1,"#b87a44"),w.fillStyle=K0,w.fillRect(0,0,l,n),w.strokeStyle="#1d2222",w.lineWidth=6;for(let t=18;t<l;t+=22)w.beginPath(),w.moveTo(t,0),w.lineTo(t,n),w.stroke();for(let t=n*0.2;t<n;t+=n*0.2)w.beginPath(),w.moveTo(0,t),w.lineTo(l,t),w.stroke();w.lineWidth=5;for(let t=0;t<4;t++)w.beginPath(),w.arc(l/2,n*0.1+t*n*0.2,18,0,Math.PI*2),w.stroke();w.strokeStyle="#e8e0cc",w.lineWidth=14,w.strokeRect(7,7,l-14,n-14)},128,256)});I.emissiveMap=I.map,W(new qJ(1,2.1),I,[0,M+1.08,V+0.107]);let d="#262c2b";for(let w of[3.38,4.22])Z(0,w,-1.56,8,0.04,0.04,d);for(let w=-3.94;w<=3.95;w+=0.14)Z(w,3.8,-1.56,0.018,0.84,0.018,d);for(let w of[-3.97,3.97]){for(let l of[3.38,4.22])Z(w,l,-2.08,0.04,0.04,1.04,d);for(let l=-2.55;l<=-1.6;l+=0.14)Z(w,3.8,l,0.018,0.84,0.018,d)}for(let[w,l]of[[-3.3,-1.8],[3.25,-1.85],[1.5,-1.78]]){K(w,3.46,l,0.13,0.1,0.24,"#9a5a3c",12);for(let n=0;n<4;n++)W(new R8(1,8,6),$(n%2?"#5b7f4f":"#44663e",0.95),[w+(n-1.5)*0.06,3.66+n%2*0.05,l+(n%3-1)*0.04],[0,0,0],[0.12,0.14,0.1])}K(2.5,L+0.52,-4.3,0.5,0.55,1,"#1f2322",18),K(2.5,L+1.06,-4.3,0.2,0.22,0.08,"#2b302f",12),K(-1.8,L+0.35,-4.6,0.035,0.035,0.7,"#8d8f89",8);for(let[w,l]of[[-3.95,-2.75],[3.95,-2.75],[-3.95,-5.15],[3.95,-5.15]])for(let[n,K0]of[[-0.05,-0.05],[0.05,-0.05],[-0.05,0.05],[0.05,0.05]])K(w+n,L+0.42,l+K0,0.007,0.007,0.84,"#6b4a35",4);let f=$("#8a6a48",0.8),u=$("#4f7f55",0.85);for(let w of[0.55,1,1.45,1.9,2.35,2.8])Z(-3.53,w,-3.85,0.34,0.04,2.2,u);for(let w of[-4.94,-2.76])Z(-3.53,1.65,w,0.34,2.3,0.04,u);let $0=Q((w,l,n)=>{w.fillStyle="#bdbdbd",w.fillRect(0,0,l,n),w.fillStyle="#ffffff",w.fillRect(0,n*0.34,l,n*0.34),w.fillStyle="#6a6a6a",w.fillRect(0,n*0.33,l,n*0.02),w.fillRect(0,n*0.67,l,n*0.02)},64,64),y=new o0({map:$0,roughness:0.62}),j=["#c8402f","#e3ae55","#f3eee3","#2f6fa8","#3f8a5a","#e07a2e","#d65a7a","#f1d24a","#6fb7c9","#8a3b3b","#ffffff","#1f5f9e"],g=[],v=[],i=(w,l,n,K0,t,L0)=>{let O0=w;while(O0<l){let U0=0.07+Y()*0.12,S0=0.12+Y()*0.17,n0=Math.min(t,0.1+Y()*0.12),FJ=Y()<0.35,b0=new v0(j[Math.floor(Y()*j.length)]).multiplyScalar(0.7+Y()*0.22);if(O0+U0>l)break;let PJ=L0==="x"?X(O0+U0/2,n+S0/2,K0):X(K0,n+S0/2,O0+U0/2);(FJ?v:g).push({pos:PJ,s:FJ?X(U0*0.85,S0*0.8,U0*0.85):L0==="x"?X(U0,S0,n0):X(n0,S0,U0),col:b0}),O0+=U0+0.012}};for(let w of[1.6125,2.5725])i(-3.4,2.2,w,-4.8,0.3,"x");for(let w of[0.57,1.02,1.47,1.92,2.37,2.82])i(-4.9,-2.8,w,-3.55,0.28,"z");for(let[w,l]of[[new TJ(1,1,1),g],[new BJ(0.5,0.5,1,10),v]]){let n=new w9(w,y,l.length),K0=new jJ;l.forEach((t,L0)=>{K0.position.copy(t.pos),K0.scale.copy(t.s),K0.rotation.set(0,(Y()-0.5)*0.12,0),K0.updateMatrix(),n.setMatrixAt(L0,K0.matrix),n.setColorAt(L0,t.col)}),n.frustumCulled=!1,J.add(n)}{let n=[[0.05,0.47],[0.53,0.95]],K0=(U0,S0)=>{if(U0.fillStyle=S0?"#000":"#5b3b24",U0.fillRect(0,0,1024,368),!S0){for(let n0=0;n0<500;n0++)U0.fillStyle=n0%2?"rgba(150,100,60,.25)":"rgba(30,18,10,.25)",U0.fillRect(Math.random()*1024,Math.random()*368,20+Math.random()*80,1+Math.random()*2);U0.fillStyle="#3a2616",U0.fillRect(0,323.84,1024,44.16)}for(let[n0,FJ]of n){let b0=n0*1024,PJ=FJ*1024;U0.fillStyle=S0?"#6e6a60":"#d9d3c1",U0.fillRect(b0,44.16,PJ-b0,257.6);for(let h=0;h<2;h++){let sJ=44.16+(h+0.5)*257.6/2;U0.fillStyle=S0?"#6f6a60":"#b9b3a2",U0.fillRect(b0,sJ+51.52000000000001,PJ-b0,4);let UJ=sJ+51.52000000000001;U0.globalAlpha=S0?0.7:1;for(let RJ=b0+10;RJ<PJ-60;){let T=Math.random()<0.3,k=j[Math.floor(Math.random()*j.length)];if(T){let b=18+Math.random()*6;U0.fillStyle=S0?"#9a9a9a":"rgba(235,240,240,.9)",U0.fillRect(RJ,UJ-b*2.4,b*2,b*2.4),U0.fillStyle=k;for(let e=0;e<7;e++)U0.beginPath(),U0.arc(RJ+5+Math.random()*(b*2-10),UJ-6-Math.random()*b*1.8,5,0,Math.PI*2),U0.fill();U0.fillStyle="#c8402f",U0.fillRect(RJ-2,UJ-b*2.4-8,b*2+4,9),RJ+=b*2+8}else{let b=46+Math.random()*34,e=257.6*(0.2+Math.random()*0.1);U0.fillStyle=k,U0.beginPath(),U0.moveTo(RJ,UJ),U0.lineTo(RJ+3,UJ-e);for(let q0=0;q0<=6;q0++)U0.lineTo(RJ+3+q0*(b-6)/6,UJ-e-(q0%2?5:0));U0.lineTo(RJ+b,UJ),U0.closePath(),U0.fill(),U0.fillStyle="rgba(255,255,255,.7)",U0.fillRect(RJ+b*0.2,UJ-e*0.62,b*0.6,e*0.22),U0.fillStyle="rgba(255,255,255,.25)",U0.fillRect(RJ+4,UJ-e+8,5,e-14),RJ+=b+5}}U0.globalAlpha=1}if(!S0)U0.fillStyle="rgba(255,255,255,.22)",U0.beginPath(),U0.moveTo(b0+20,44.16),U0.lineTo(b0+70,44.16),U0.lineTo(b0+20,301.76),U0.lineTo(b0-10+20,301.76),U0.fill(),U0.strokeStyle="#3a2616",U0.lineWidth=10,U0.strokeRect(b0,44.16,PJ-b0,257.6)}},t=(U0)=>Q((S0)=>K0(S0,U0),1024,368),L0=new o0({map:t(!1),emissive:"#fff4de",emissiveMap:t(!0),emissiveIntensity:0.2,roughness:0.55}),O0=new P0(new qJ(3.9,1.4),L0);O0.position.set(0,0.7,-3.924),J.add(O0)}let x=Q((w,l,n)=>{let t=n/7;w.fillStyle="#8a7a5a",w.fillRect(l/2-2,0,4,n);for(let L0=0;L0<7;L0++){let O0=L0*t+4;w.fillStyle=j[(L0*5+3)%j.length],w.fillRect(6,O0,l-12,t-8),w.fillStyle="rgba(255,255,255,.3)",w.fillRect(10,O0+6,l*0.16,t-20),w.fillStyle="rgba(255,255,255,.75)",w.fillRect(l*0.3,O0+t*0.36,l*0.4,t*0.16)}},64,448),a=new o0({map:x,roughness:0.45,alphaTest:0.5,side:iJ});for(let w of[-1.74,-1.52,1.52,1.74])W(new qJ(0.15,0.86),a,[w,2.66,-3.86],[0,(Y()-0.5)*0.5,0]);let Q0=new P0(new qJ(0.8,1.5),new hJ({color:new v0(1.05,1.08,1.1),map:Q((w,l,n)=>{w.fillStyle="#dcecef",w.fillRect(0,0,l,n);let K0=5;for(let L0=0;L0<K0;L0++){let O0=n/K0,U0=L0*O0;w.fillStyle="rgba(140,160,165,.9)",w.fillRect(0,U0+O0*0.88,l,5);for(let S0=0;S0<8;S0++){let n0=(l-20)/8,FJ=10+S0*n0;w.fillStyle=["#c8402f","#2c7a3f","#e3ae55","#7a3a1c","#2f6fa8","#f3eee3","#e07a2e"][(S0+L0*3)%7],w.fillRect(FJ+n0*0.15,U0+O0*0.3,n0*0.7,O0*0.56),w.fillRect(FJ+n0*0.36,U0+O0*0.12,n0*0.28,O0*0.2)}}let t=w.createLinearGradient(0,0,l,0);t.addColorStop(0,"rgba(255,255,255,.3)"),t.addColorStop(0.35,"rgba(255,255,255,0)"),w.fillStyle=t,w.fillRect(0,0,l,n),w.strokeStyle="#9aa8aa",w.lineWidth=10,w.strokeRect(0,0,l,n)},256,480)}));Q0.position.set(2.95,1.12,-4.09),J.add(Q0);let B0=new P0(new qJ(0.9,0.2),new hJ({map:N("Bien fría",{w:720,h:160,fondo:"#b8372b",tinta:"#f3eee3",sombra:null,px:0.62}),color:new v0(1.1,1.1,1.1)}));B0.position.set(2.95,2.17,-4.14),J.add(B0),Z(2.45,0.4,-1.86,1,0.8,0.6,"#e7ebe8"),Z(2.45,0.83,-1.86,1.04,0.06,0.64,"#d4dad8"),Z(2.45,0.12,-1.555,0.96,0.1,0.012,"#b9c0bd");{let w=new P0(new qJ(0.62,0.19),new o0({map:N("HIELO",{w:640,h:196,fondo:null,tinta:"#1f5f9e",sombra:"#c8402f",px:0.7}),transparent:!0,roughness:0.8}));w.position.set(2.45,0.55,-1.553),J.add(w)}{let w=$("#2d63a8",0.5),l=new o0({color:"#8cc0e6",roughness:0.12,transparent:!0,opacity:0.84});for(let t=0;t<2;t++)for(let L0=0;L0<3;L0++){let O0=3.15+t*0.4,U0=0.21+L0*0.4;W(new BJ(0.155,0.155,0.4,16),l,[O0,U0,-2],[Math.PI/2,0,0]),W(new BJ(0.05,0.05,0.1,10),l,[O0,U0,-2.25],[Math.PI/2,0,0])}for(let t of[0,0.4,0.8,1.2])Z(3.35,t+0.012,-2,0.84,0.024,0.46,w);for(let t of[2.94,3.35,3.7600000000000002])Z(t,0.61,-2,0.03,1.22,0.46,w)}let D0=(w,l,n,K0,t)=>{let L0=$(t,0.5),O0=(U0,S0,n0,FJ,b0=0)=>{U0.rotateX(b0);let PJ=X(S0,n0,FJ).applyAxisAngle(X(0,1,0),K0);W(U0,L0,[w+PJ.x,l+PJ.y,n+PJ.z],[0,K0,0])};O0(new A8(0.46,0.035,0.43,2,0.015),0,0.43,0),O0(new A8(0.44,0.42,0.03,2,0.012),0,0.71,-0.22,-0.16);for(let U0 of[-0.2,0.2])O0(new BJ(0.018,0.024,0.43,6),U0,0.215,0.17,0.12),O0(new BJ(0.018,0.024,0.45,6),U0,0.22,-0.19,-0.14),O0(new TJ(0.03,0.18,0.3),U0*1.1,0.54,-0.02)};for(let w=0;w<4;w++)D0(-3.42,w*0.075,-1.32-w*0.012,0.3,"#ecece6");D0(3.55,0,0.55,-1.9,"#ecece6");{let K0=(S0,n0,FJ,b0,PJ,SJ=0,gJ=0)=>{S0.rotateX(SJ),S0.rotateZ(gJ);let h=X(FJ,b0,PJ).applyAxisAngle(X(0,1,0),0.3);W(S0,n0,[-3.25+h.x,h.y,2.85+h.z],[0,0.3,0])},t=$("#171b1b",0.8),L0=$("#9aa3a0",0.35,0.6),O0=$("#a8382c",0.45,0.1),U0=$("#1e2222",0.7);for(let S0 of[-0.52,0.5])K0(new j9(0.26,0.055,8,18),t,S0,0.3,0),K0(new BJ(0.09,0.09,0.08,10),L0,S0,0.3,0,Math.PI/2);K0(new A8(0.6,0.22,0.24,2,0.05),O0,-0.02,0.53,0,0,-0.08),K0(new A8(0.55,0.08,0.26,2,0.03),U0,-0.28,0.68,0),K0(new A8(0.28,0.34,0.2,2,0.05),O0,0.37,0.64,0,0,-0.35),K0(new BJ(0.018,0.018,0.62,6),L0,0.44,0.92,0,Math.PI/2),K0(new BJ(0.02,0.02,0.62,6),L0,0.47,0.6,0,0,0.35),K0(new BJ(0.03,0.035,0.45,8),L0,-0.35,0.3,0.13,0,Math.PI/2+0.1),K0(new A8(0.3,0.03,0.22,1,0.01),L0,-0.6,0.73,0)}for(let w=-9;w<4.4;w+=2)Z(w+0.5,-0.074,3.45,1,0.152,0.202,"#d6b24e");Z(8.3,-0.2,-4.575,7.4,0.1,15.85,"#2b3133"),Z(4.6,-0.075,-4.575,0.2,0.15,15.85,"#a8a391"),Z(12.3,-0.07,-4.575,1.2,0.16,15.85,"#8a8578");for(let w=-11;w<3;w+=1.8)Z(8.3,-0.146,w,0.06,0.008,0.7,"#b9ad83");{let w=new o0({color:"#ffd08a",emissive:"#ffb35a",emissiveIntensity:2.2}),l=$("#2a3436",0.8),n=["#d8a25a","#8fb8a8","#e0d2b0","#c9897d","#b9c47a"],K0=-12,t=0;while(K0<2.4){let L0=3+Y()*1.6,O0=3+Y()*2.6,U0=n[t++%n.length];Z(14.4,O0/2,K0+L0/2,3,O0,L0,U0),Z(14.4,O0+0.08,K0+L0/2,3.1,0.16,L0+0.1,"#ddd4bf");let S0=Math.max(1,Math.floor(L0/1.5));for(let n0=0;n0<S0;n0++){let FJ=K0+(n0+0.5)*L0/S0;if(W(new qJ(0.75,0.95),Y()<0.4?w:l,[12.885,1.55,FJ],[0,-Math.PI/2,0]),O0>4.2)W(new qJ(0.7,0.8),Y()<0.35?w:l,[12.885,O0-1.1,FJ],[0,-Math.PI/2,0])}K0+=L0+0.15}}{let w=new o0({roughness:0.6,metalness:0.3,map:Q((n,K0,t)=>{n.fillStyle="#8f9a94",n.fillRect(0,0,K0,t);for(let L0=0;L0<t;L0+=8)n.fillStyle="rgba(40,45,44,.35)",n.fillRect(0,L0,K0,2),n.fillStyle="rgba(230,235,230,.18)",n.fillRect(0,L0+3,K0,2);for(let L0=0;L0<40;L0++)n.fillStyle="rgba(120,70,40,.18)",n.fillRect(Y()*K0,Y()*t,4+Y()*20,2+Y()*10)},256,256)});W(new qJ(2.3,2.1),w,[-7,1.05,-1.365]),Z(-7,2.2,-1.33,2.45,0.2,0.1,"#6d7571");let l=new P0(new qJ(1.7,0.42),new o0({map:N("Banca La Suerte",{w:1024,h:252,fondo:"#2f7a4d",tinta:"#f3eee3",sombra:"#1b2c22",borde:"#e3ae55",px:0.52}),roughness:0.85,emissive:"#ffffff",emissiveIntensity:0.08}));l.material.emissiveMap=l.material.map,l.position.set(-10.5,2.72,-1.36),J.add(l)}let g0=X(4.3,0,3);K(g0.x,3.9,g0.z,0.11,0.16,7.8,"#8e8a80",10),Z(g0.x,7.25,g0.z,0.1,0.1,1.7,"#5c574c"),K(g0.x+0.28,6.3,g0.z,0.2,0.2,0.62,"#6d7470",12);let c0=(w,l,n,K0="#141819",t=0.011)=>{let L0=w.clone().lerp(l,0.5);L0.y-=n*2,W(new w8(new u8(w,L0,l),22,t,4,!1),$(K0),[0,0,0])};for(let w of[-0.6,0,0.6])c0(X(g0.x,7.3,g0.z+w),X(6,6.6,9.2+w*0.4),0.25);for(let w of[-0.5,0.5])c0(X(g0.x,7.3,g0.z+w),X(-5,4.2,-1+w*0.6),0.55);c0(X(g0.x,6.4,g0.z),X(3.95,5.7,-2.72),0.35),c0(X(g0.x,6.2,g0.z),X(3.95,5.5,-2.72),0.5,"#1d2121",0.008),c0(X(g0.x,5.9,g0.z),X(4.35,5.4,-9),0.4,"#1d2121",0.009),c0(X(g0.x,5.7,g0.z),X(4.35,5.2,-9),0.6,"#20241f",0.007);{let w=new n7(Array.from({length:14},(l,n)=>{let K0=n/13*Math.PI*4;return X(g0.x+0.16+Math.cos(K0)*0.14,5.2-n*0.018+Math.sin(K0)*0.14,g0.z+Math.sin(K0)*0.05)}));W(new w8(w,60,0.008,4,!1),$("#141819"),[0,0,0])}let W0=0;return{update(w){if(w>W0)W0=w+0.25+Math.random()*1.4,A.emissiveIntensity=0.12+Math.random()*0.45,A.emissive.setHSL(0.58+Math.random()*0.08,0.5,0.55+Math.random()*0.2)}}}function y5({scene:J,random:Q=Math.random}){let $=Q,Z=[],K=[],W=[],Y=new v0,X=(j,g,v=Z)=>{Y.set(g);let i=j.attributes.position.count,x=new Float32Array(i*3);for(let a=0;a<i;a++)x[a*3]=Y.r,x[a*3+1]=Y.g,x[a*3+2]=Y.b;return j.setAttribute("color",new aJ(x,3)),j.deleteAttribute("uv"),v.push(j),j},H=(j,g,v,i,x,a,Q0,B0=0,D0)=>{let g0=new TJ(i,x,a);if(B0)g0.rotateY(B0);return g0.translate(j,g,v),X(g0,Q0,D0)},U=(j,g,v,i,x,a,Q0=8)=>{let B0=new BJ(i,i,x,Q0);return B0.translate(j,g,v),X(B0,a)},N=(j,g,v,i,x,a,Q0,B0)=>{let D0=new qJ(i,x);return D0.rotateY(a),D0.translate(j,g,v),X(D0,Q0,B0)},F=(j)=>j[Math.floor($()*j.length)],G=["#c98a64","#d8b46a","#6fa9a0","#c48d95","#a3b777","#dca16a","#86a3bf","#e2d3b0","#b7a4c9","#e0a58f","#9ec3b0"],E=["#9a968c","#8d8a80","#a39d90"],O="#8a8578",B="#a8a391",R="#2b3133",q="#b9ad83",M="#1b2224",P="#232c2e",V=(j)=>"#"+new v0(j).multiplyScalar(0.85).getHexString();function L(j,g,v,i,x,a,{lejos:Q0=!1}={}){let D0=a*2.9+0.3,g0=$()<0.18?F(E):V(F(G)),c0=new _(Math.sin(v),0,Math.cos(v)),W0=new _(c0.z,0,-c0.x),w=(t,L0,O0)=>new _(j,L0,g).addScaledVector(W0,t).addScaledVector(c0,O0),l=w(0,D0/2,-x/2);H(l.x,l.y,l.z,i,D0,x,g0,v);let n=w(0,D0+0.09,-x/2);H(n.x,n.y,n.z,i+0.12,0.18,x+0.12,"#d9d2bf",v);let K0=Math.max(1,Math.floor(i/1.6));for(let t=0;t<a;t++)for(let L0=0;L0<K0;L0++){let O0=-i/2+(L0+0.5)*i/K0,U0=t*2.9+1.55,S0=w(O0,U0,Q0?0.04:0.012),n0=$()<(Q0?0.3:0.38);if(t===0&&L0===Math.floor(K0/2)&&!Q0){let FJ=w(O0,1.05,0.012);N(FJ.x,FJ.y,FJ.z,0.95,2.1,v,$()<0.3?"#7c8680":"#232c2e");continue}if(n0)N(S0.x,S0.y,S0.z,0.72,0.9,v,$()<0.22?"#9fc3ff":F(["#ffd08a","#ffc27a","#ffe0a8"]),K);else N(S0.x,S0.y,S0.z,0.72,0.9,v,"#232c2e")}if(Q0){C(w,D0,i,x);return}if($()<0.5){let t=w(0,0.5,0.55);H(t.x,1,t.z,i-0.1,0.05,0.05,"#1b2224",v);for(let O0 of[-0.5,-0.25,0,0.25,0.5]){let U0=w(O0*(i-0.1),0.5,0.55);H(U0.x,0.5,U0.z,0.05,1,0.05,"#1b2224",v)}let L0=w(0,2.75,0.6);H(L0.x,L0.y,L0.z,i,0.12,1.2,"#cfc6b2",v)}if(a>1&&$()<0.6){let t=w(0,2.9499999999999997,0.45);H(t.x,t.y,t.z,i*0.7,0.12,0.9,"#cfc6b2",v);let L0=w(0,3.45,0.88);H(L0.x,L0.y,L0.z,i*0.7,0.05,0.05,"#1b2224",v);for(let O0=0;O0<=6;O0++){let U0=w((O0/6-0.5)*i*0.7,3.23,0.88);H(U0.x,U0.y,U0.z,0.03,0.5,0.03,"#1b2224",v)}}C(w,D0,i,x)}function C(j,g,v,i){if($()<0.45){let x=j(($()-0.5)*v*0.5,g+0.7,-i*(0.3+$()*0.4));U(x.x,x.y,x.z,0.55,1.1,"#1f2324",10)}if($()<0.22)for(let x=0;x<4;x++){let a=j((x%2-0.5)*(v-0.4),g+0.5,-(x<2?0.3:i-0.3));H(a.x,a.y,a.z,0.04,1+$()*0.4,0.04,"#5a4a3c")}if($()<0.15){let x=j(v*0.3,g+1.1,-i*0.5);H(x.x,x.y,x.z,0.03,2,0.03,"#3a3f40"),H(x.x,x.y+0.6,x.z,0.9,0.03,0.03,"#3a3f40")}}function A({eje:j,desde:g,hasta:v,fachada:i,ry:x,fondo:a=[6,9],pisos:Q0=[1,3]}){let B0=g;while(B0<v-2){let D0=Math.min(3.4+$()*3.4,v-B0),g0=B0+D0/2,c0=i+($()-0.5)*0.5,W0=Q0[0]+Math.floor($()*(Q0[1]-Q0[0]+1));if(j==="x")L(g0,c0,x,D0,a[0]+$()*(a[1]-a[0]),W0);else L(c0,g0,x,D0,a[0]+$()*(a[1]-a[0]),W0);B0+=D0+0.12+($()<0.12?0.9+$()*1.5:0)}}{let j=new qJ(460,460);j.rotateX(-Math.PI/2),j.translate(0,-0.26,0),X(j,"#35363a")}for(let[j,g]of[[-86,-20],[20,86]]){let v=(j+g)/2,i=g-j;H(v,-0.2,6.05,i,0.1,5.4,"#2b3133"),H(v,0.08,9.6,i,0.16,1.8,"#8a8578");for(let x=j+1;x<g;x+=3.6)H(x,-0.146,6.3,1.4,0.008,0.1,"#b9ad83")}H(-51,-0.1,0.97,70,0.2,4.76,"#8a8578"),H(-51,-0.075,3.45,70,0.15,0.2,"#a8a391"),H(49.45,-0.1,2.18,73.1,0.2,2.36,"#8a8578"),H(49.45,-0.075,3.45,73.1,0.15,0.2,"#a8a391"),A({eje:"x",desde:-84,hasta:-20.3,fachada:10.6,ry:Math.PI}),A({eje:"x",desde:20.3,hasta:84,fachada:10.6,ry:Math.PI}),A({eje:"x",desde:-84,hasta:-22.8,fachada:-1.4,ry:0}),A({eje:"x",desde:16.1,hasta:84,fachada:1,ry:0}),H(8.3,-0.2,-49.25,7.4,0.1,73.5,"#2b3133"),H(4.25,-0.1,-49.25,0.7,0.2,73.5,"#8a8578"),H(12.3,-0.07,-49.25,1.2,0.16,73.5,"#8a8578");for(let j=-13;j>-85;j-=3.6)H(8.3,-0.146,j,0.1,0.008,1.4,"#b9ad83");A({eje:"z",desde:-84,hasta:-5.5,fachada:3.9,ry:Math.PI/2,fondo:[7,9]}),A({eje:"z",desde:-84,hasta:-12.2,fachada:12.9,ry:-Math.PI/2,fondo:[7,9]});let D=(j,g,v)=>{let i=j.clone().lerp(g,0.5);i.y-=v*2;let x=new w8(new u8(j,i,g),14,0.014,3,!1);X(x,"#101517")},I=(j,g)=>{U(j,3.5,g,0.1,7,"#6b6457",6),H(j,6.6,g,1.6,0.08,0.08,"#4f4a40")},d=(j,g,v)=>{H(j+v.x*0.55,6,g+v.z*0.55,Math.abs(v.x)?1.1:0.06,0.06,Math.abs(v.z)?1.1:0.06,"#4f4a40");let i=new R8(0.16,8,6);i.translate(j+v.x*1.1,5.9,g+v.z*1.1),X(i,"#ffb866",W)};for(let j of[-1,1]){let g=j<0?-14:16;for(let v=1;v<=5;v++){let i=j<0?-14-v*12:16+v*12;if(I(i,9.2),v%2===0)d(i,9.2,new _(0,0,-1));for(let x of[0,-0.25,0.3])D(new _(g,6.6+x,9.2),new _(i,6.6+x,9.2),0.5);g=i}}{let j=-9;for(let g=1;g<=6;g++){let v=-9-g*12;if(I(12.4,v),g%2===1)d(12.4,v,new _(-1,0,0));for(let i of[0,0.3])D(new _(12.4,6.6+i,j),new _(12.4,6.6+i,v),0.5);j=v}}let f=(j,g,v)=>{let i=F(["#8b2f2a","#c9c6bd","#2f4a6b","#3b3f42","#b58a3a","#e2dfd6","#556b4f"]),x=new _(Math.sin(v),0,Math.cos(v));H(j,0.55,g,1.75,0.62,4.1,i,v);let a=x.clone().multiplyScalar(-0.3);H(j+a.x,1.1,g+a.z,1.55,0.52,2.1,"#2a3236",v);let Q0=new _(x.z,0,-x.x);for(let[B0,D0]of[[-0.8,1.3],[0.8,1.3],[-0.8,-1.3],[0.8,-1.3]]){let g0=new BJ(0.32,0.32,0.22,10);g0.rotateZ(Math.PI/2),g0.rotateY(v);let c0=new _(j,0.32,g).addScaledVector(Q0,B0).addScaledVector(x,D0);g0.translate(c0.x,c0.y,c0.z),X(g0,"#141718")}};for(let[j,g,v]of[[-31,4.4,Math.PI/2],[-47,4.4,Math.PI/2],[-72,4.4,-Math.PI/2],[27,4.4,Math.PI/2],[55,4.4,-Math.PI/2],[-58,7.9,Math.PI/2],[38,7.9,-Math.PI/2],[5.6,-24,0],[5.6,-41,Math.PI],[10.8,-31,0],[10.8,-62,Math.PI]])f(j,g,v);let u=(j,g)=>Math.abs(j)<30&&g>-22&&g<24||g>-14&&g<20||g<-10&&j>-12&&j<30;for(let j=-78;j<=78;j+=13)for(let g=-78;g<=78;g+=13){let v=j+($()-0.5)*6,i=g+($()-0.5)*6;if(u(v,i)||Math.hypot(v,i)>80)continue;let x=Math.hypot(v,i),a=x>45&&$()<0.07,Q0=Math.atan2(-v,-i),B0=Math.round(Q0/(Math.PI/2))*(Math.PI/2),D0=a?5+Math.floor($()*5):1+Math.floor($()*(i>0?2:3));if(L(v,i,B0,6+$()*6,6+$()*5,D0,{lejos:!0}),$()<0.35){let g0=F(["#3f5a3c","#4a6443","#35503a"]),c0=v+($()-0.5)*8,W0=i+($()-0.5)*8,w=2+$()*2.5,l=new tQ(w,0);l.scale(1,0.8,1),l.translate(c0,w*0.6+2.5,W0),X(l,g0),U(c0,1.4,W0,0.25,2.8,"#4d4234",5)}}for(let j=0;j<14;j++){let g=$()*Math.PI*2,v=32+$()*44,i=Math.cos(g)*v,x=Math.sin(g)*v;if(u(i,x))continue;let a=9+$()*5,Q0=new BJ(0.14,0.22,a,5);Q0.translate(i,a/2,x),X(Q0,"#5d5445");for(let B0=0;B0<8;B0++){let D0=new c7(0.3,3,3,1);D0.rotateZ(Math.PI/2+0.5),D0.translate(1.5,0,0),D0.rotateY(B0/8*Math.PI*2),D0.translate(i,a,x),X(D0,"#34503a")}}{let g=[],v=[];for(let x=0;x<=240;x++){let a=x/240*Math.PI*2,Q0=86+Math.sin(a*3.1)*1.5,B0=6+7*(0.5+0.5*Math.sin(a*2.3+0.7))+3.5*Math.sin(a*5.1+1)**2+1.2*Math.sin(a*13.7+2)+0.5*Math.sin(a*31.3);if(g.push(Math.cos(a)*Q0,-1,Math.sin(a)*Q0,Math.cos(a)*Q0,Math.max(5,B0),Math.sin(a)*Q0),x<240){let D0=x*2;v.push(D0,D0+2,D0+1,D0+1,D0+2,D0+3)}}let i=new fJ;i.setAttribute("position",new YJ(g,3)),i.setIndex(v),i.computeVertexNormals(),X(i,"#3d4552")}let $0=[],y=(j,g)=>{if(!j.length)return;let v=j.map((a)=>a.index?a.toNonIndexed():a),i=JQ(v,!1);if(v.forEach((a)=>a.dispose()),j.forEach((a)=>a.dispose()),!i)return;let x=new P0(i,g);x.matrixAutoUpdate=!1,J.add(x),$0.push(x)};return y(Z,new o0({vertexColors:!0,roughness:0.92,side:iJ})),y(K,new hJ({vertexColors:!0,color:new v0(1.9,1.9,1.9)})),y(W,new hJ({vertexColors:!0,color:new v0(5,5,5)})),{mallas:$0}}var WR=["cafe","morir","presidente","presidente"];function YR(){let J=document.createElement("canvas");J.width=256,J.height=128;let Q=J.getContext("2d");Q.fillStyle="#f1ece0",Q.fillRect(0,0,256,128),Q.fillStyle="#b3262d",Q.fillRect(0,10,256,14),Q.fillRect(0,104,256,14),Q.fillStyle="#1f5a36",Q.beginPath(),Q.ellipse(128,64,54,28,0,0,Math.PI*2),Q.fill(),Q.fillStyle="#f1ece0",Q.beginPath(),Q.ellipse(128,64,46,21,0,0,Math.PI*2),Q.fill(),Q.fillStyle="#b3262d",Q.fillRect(92,58,72,12);let $=new m8(J);return $.colorSpace=J8,$}function XR(){let J=new wJ,Q=(H,U)=>new F0(H,U),$=[Q(0,0),Q(0.034,0),Q(0.037,0.006),Q(0.037,0.165),Q(0.034,0.188),Q(0.022,0.222),Q(0.0145,0.252),Q(0.0138,0.274),Q(0.0158,0.279),Q(0.0158,0.29),Q(0.0112,0.29),Q(0.0106,0.268),Q(0.0112,0.24)],Z=new o0({color:"#2d5a26",roughness:0.18,metalness:0.05,envMapIntensity:1.4});J.add(new P0(new O7($,20),Z));let K=new P0(new O7($.slice(1,5).map((H)=>Q(H.x+0.0006,H.y)),20),new o0({color:"#e8f0e4",roughness:0.9,transparent:!0,opacity:0.22,depthWrite:!1}));J.add(K);let W=new P0(new BJ(0.0376,0.0376,0.075,24,1,!0),new o0({map:YR(),roughness:0.6}));W.position.y=0.095,J.add(W);let Y=new P0(new BJ(0.0149,0.0152,0.02,16,1,!0),new o0({color:"#b3262d",roughness:0.5}));Y.position.y=0.262,J.add(Y);let X=new P0(new s9(0.0112,16),new hJ({color:"#0d160c"}));return X.rotation.x=-Math.PI/2,X.position.y=0.245,J.add(X),{g:J,alto:0.11,radio:0.037,inclina:1.25,boca:0.18}}function HR(){let J=new wJ,Q=new P0(new BJ(0.034,0.029,0.14,24,1,!0),new o0({color:"#dfe9ec",roughness:0.08,transparent:!0,opacity:0.28,depthWrite:!1,side:iJ}));Q.position.y=0.07,Q.renderOrder=2,J.add(Q);let $=new P0(new BJ(0.029,0.029,0.008,24),new o0({color:"#dfe9ec",roughness:0.1,transparent:!0,opacity:0.5}));$.position.y=0.004,J.add($);let Z=new P0(new BJ(0.0318,0.0285,0.112,24),new o0({color:"#f2bf86",roughness:0.45}));Z.position.y=0.064,J.add(Z);for(let[W,Y,X]of[[0.01,0.006,0.4],[-0.009,-0.008,1.1],[0.002,-0.012,2]]){let H=new P0(new TJ(0.016,0.013,0.016),new o0({color:"#f6f3ec",roughness:0.15,transparent:!0,opacity:0.8}));H.position.set(W,0.121,Y),H.rotation.set(X,X*0.7,0),J.add(H)}let K=new P0(new BJ(0.0028,0.0028,0.19,8),new o0({color:"#c8392e",roughness:0.5}));return K.position.set(0.012,0.11,0.004),K.rotation.z=-0.16,J.add(K),{g:J,alto:0.06,radio:0.034,inclina:0.85,boca:0.09}}function UR(){let J=new wJ,Q=new o0({color:"#efe9da",roughness:0.22}),$=new P0(new BJ(0.053,0.047,0.008,28),Q);$.position.y=0.004,J.add($);let Z=new o0({color:"#efe9da",roughness:0.22,side:iJ}),K=new P0(new BJ(0.034,0.025,0.056,24,1,!0),Z),W=new P0(new s9(0.025,20),Q);W.rotation.x=-Math.PI/2,W.position.y=0.0085,J.add(W),K.position.y=0.036,J.add(K);let Y=new P0(new s9(0.0318,24),new o0({color:"#2a160c",roughness:0.15}));Y.rotation.x=-Math.PI/2,Y.position.y=0.056,J.add(Y);let X=new P0(new j9(0.014,0.004,6,12,Math.PI*1.3),Q);return X.position.set(0.036,0.038,0),X.rotation.z=-Math.PI*0.65,J.add(X),J.remove($),{g:J,alto:0.034,radio:0.034,inclina:0.9,boca:0.034,plato:$}}function v5(J){let Q=[];for(let $=0;$<4;$++){let Z=WR[$],K=Z==="presidente"?XR():Z==="morir"?HR():UR(),[W,Y,X]=O9[$],H=V0.tableWidth/2-0.055,U=V0.tableCenterY+V0.tableThickness/2,N=new _(-H,0,V0.seatDistance-H).applyAxisAngle(new _(0,1,0),X).add(new _(W,0,Y));if(N.y=U,K.g.traverse((F)=>{if(F.isMesh)F.castShadow=!0,F.receiveShadow=!0}),K.plato)N.y+=0.008;if(K.g.position.copy(N),J.add(K.g),K.plato)K.plato.position.copy(N),K.plato.position.y=U+0.004,K.plato.traverse((F)=>{if(F.isMesh)F.receiveShadow=!0}),J.add(K.plato);Q.push({group:K.g,home:N,index:$,tipo:Z,alto:K.alto,radio:K.radio,inclina:K.inclina,boca:K.boca})}return Q}var WQ={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class $9{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var NR=new t9(-1,1,1,-1,0,1);class f5 extends fJ{constructor(){super();this.setAttribute("position",new YJ([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new YJ([0,2,0,0,2,0],2))}}var GR=new f5;class K6{constructor(J){this._mesh=new P0(GR,J)}dispose(){this._mesh.geometry.dispose()}render(J){J.render(this._mesh,NR)}get material(){return this._mesh.material}set material(J){this._mesh.material=J}}class V$ extends $9{constructor(J,Q="tDiffuse"){super();if(this.textureID=Q,this.uniforms=null,this.material=null,J instanceof tJ)this.uniforms=J.uniforms,this.material=J;else if(J)this.uniforms=i9.clone(J.uniforms),this.material=new tJ({name:J.name!==void 0?J.name:"unspecified",defines:Object.assign({},J.defines),uniforms:this.uniforms,vertexShader:J.vertexShader,fragmentShader:J.fragmentShader});this._fsQuad=new K6(this.material)}render(J,Q,$){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=$.texture;if(this._fsQuad.material=this.material,this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget(Q),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class XK extends $9{constructor(J,Q){super();this.scene=J,this.camera=Q,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(J,Q,$){let Z=J.getContext(),K=J.state;K.buffers.color.setMask(!1),K.buffers.depth.setMask(!1),K.buffers.color.setLocked(!0),K.buffers.depth.setLocked(!0);let W,Y;if(this.inverse)W=0,Y=1;else W=1,Y=0;if(K.buffers.stencil.setTest(!0),K.buffers.stencil.setOp(Z.REPLACE,Z.REPLACE,Z.REPLACE),K.buffers.stencil.setFunc(Z.ALWAYS,W,4294967295),K.buffers.stencil.setClear(Y),K.buffers.stencil.setLocked(!0),J.setRenderTarget($),this.clear)J.clear();if(J.render(this.scene,this.camera),J.setRenderTarget(Q),this.clear)J.clear();J.render(this.scene,this.camera),K.buffers.color.setLocked(!1),K.buffers.depth.setLocked(!1),K.buffers.color.setMask(!0),K.buffers.depth.setMask(!0),K.buffers.stencil.setLocked(!1),K.buffers.stencil.setFunc(Z.EQUAL,1,4294967295),K.buffers.stencil.setOp(Z.KEEP,Z.KEEP,Z.KEEP),K.buffers.stencil.setLocked(!0)}}class lY extends $9{constructor(){super();this.needsSwap=!1}render(J){J.state.buffers.stencil.setLocked(!1),J.state.buffers.stencil.setTest(!1)}}class mY{constructor(J,Q){if(this.renderer=J,this._pixelRatio=J.getPixelRatio(),Q===void 0){let $=J.getSize(new F0);this._width=$.width,this._height=$.height,Q=new Q8(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:O8}),Q.texture.name="EffectComposer.rt1"}else this._width=Q.width,this._height=Q.height;this.renderTarget1=Q,this.renderTarget2=Q.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new V$(WQ),this.copyPass.material.blending=o8,this.timer=new lZ}swapBuffers(){let J=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=J}addPass(J){this.passes.push(J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(J,Q){this.passes.splice(Q,0,J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(J){let Q=this.passes.indexOf(J);if(Q!==-1)this.passes.splice(Q,1)}isLastEnabledPass(J){for(let Q=J+1;Q<this.passes.length;Q++)if(this.passes[Q].enabled)return!1;return!0}render(J){if(this.timer.update(),J===void 0)J=this.timer.getDelta();let Q=this.renderer.getRenderTarget(),$=!1;for(let Z=0,K=this.passes.length;Z<K;Z++){let W=this.passes[Z];if(W.enabled===!1)continue;if(W.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(Z),W.render(this.renderer,this.writeBuffer,this.readBuffer,J,$),W.needsSwap){if($){let Y=this.renderer.getContext(),X=this.renderer.state.buffers.stencil;X.setFunc(Y.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,J),X.setFunc(Y.EQUAL,1,4294967295)}this.swapBuffers()}if(XK!==void 0){if(W instanceof XK)$=!0;else if(W instanceof lY)$=!1}}this.renderer.setRenderTarget(Q)}reset(J){if(J===void 0){let Q=this.renderer.getSize(new F0);this._pixelRatio=this.renderer.getPixelRatio(),this._width=Q.width,this._height=Q.height,J=this.renderTarget1.clone(),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=J,this.renderTarget2=J.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(J,Q){this._width=J,this._height=Q;let $=this._width*this._pixelRatio,Z=this._height*this._pixelRatio;this.renderTarget1.setSize($,Z),this.renderTarget2.setSize($,Z);for(let K=0;K<this.passes.length;K++)this.passes[K].setSize($,Z)}setPixelRatio(J){this._pixelRatio=J,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class uY extends $9{constructor(J,Q,$=null,Z=null,K=null){super();this.scene=J,this.camera=Q,this.overrideMaterial=$,this.clearColor=Z,this.clearAlpha=K,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new v0}render(J,Q,$){let Z=J.autoClear;J.autoClear=!1;let K,W;if(this.overrideMaterial!==null)W=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)J.getClearColor(this._oldClearColor),J.setClearColor(this.clearColor,J.getClearAlpha());if(this.clearAlpha!==null)K=J.getClearAlpha(),J.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)J.clearDepth();if(J.setRenderTarget(this.renderToScreen?null:$),this.clear===!0)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);if(J.render(this.scene,this.camera),this.clearColor!==null)J.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)J.setClearAlpha(K);if(this.overrideMaterial!==null)this.scene.overrideMaterial=W;J.autoClear=Z}}var b5={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new v0(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class W6 extends $9{constructor(J,Q=1,$,Z){super();this.strength=Q,this.radius=$,this.threshold=Z,this.resolution=J!==void 0?new F0(J.x,J.y):new F0(256,256),this.clearColor=new v0(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let K=Math.round(this.resolution.x/2),W=Math.round(this.resolution.y/2);this.renderTargetBright=new Q8(K,W,{type:O8,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let U=0;U<this.nMips;U++){let N=new Q8(K,W,{type:O8,depthBuffer:!1});N.texture.name="UnrealBloomPass.h"+U,N.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(N);let F=new Q8(K,W,{type:O8,depthBuffer:!1});F.texture.name="UnrealBloomPass.v"+U,F.texture.generateMipmaps=!1,this.renderTargetsVertical.push(F),K=Math.round(K/2),W=Math.round(W/2)}let Y=b5;this.highPassUniforms=i9.clone(Y.uniforms),this.highPassUniforms.luminosityThreshold.value=Z,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new tJ({uniforms:this.highPassUniforms,vertexShader:Y.vertexShader,fragmentShader:Y.fragmentShader}),this.separableBlurMaterials=[];let X=[6,10,14,18,22];K=Math.round(this.resolution.x/2),W=Math.round(this.resolution.y/2);for(let U=0;U<this.nMips;U++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(X[U])),this.separableBlurMaterials[U].uniforms.invSize.value=new F0(1/K,1/W),K=Math.round(K/2),W=Math.round(W/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=Q,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let H=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=H,this.bloomTintColors=[new _(1,1,1),new _(1,1,1),new _(1,1,1),new _(1,1,1),new _(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=i9.clone(WQ.uniforms),this.blendMaterial=new tJ({uniforms:this.copyUniforms,vertexShader:WQ.vertexShader,fragmentShader:WQ.fragmentShader,premultipliedAlpha:!0,blending:A9,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new v0,this._oldClearAlpha=1,this._basic=new hJ,this._fsQuad=new K6(null)}dispose(){for(let J=0;J<this.renderTargetsHorizontal.length;J++)this.renderTargetsHorizontal[J].dispose();for(let J=0;J<this.renderTargetsVertical.length;J++)this.renderTargetsVertical[J].dispose();this.renderTargetBright.dispose();for(let J=0;J<this.separableBlurMaterials.length;J++)this.separableBlurMaterials[J].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(J,Q){let $=Math.round(J/2),Z=Math.round(Q/2);this.renderTargetBright.setSize($,Z);for(let K=0;K<this.nMips;K++)this.renderTargetsHorizontal[K].setSize($,Z),this.renderTargetsVertical[K].setSize($,Z),this.separableBlurMaterials[K].uniforms.invSize.value=new F0(1/$,1/Z),$=Math.round($/2),Z=Math.round(Z/2)}render(J,Q,$,Z,K){J.getClearColor(this._oldClearColor),this._oldClearAlpha=J.getClearAlpha();let W=J.autoClear;if(J.autoClear=!1,J.setClearColor(this.clearColor,0),K)J.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=$.texture,J.setRenderTarget(null),J.clear(),this._fsQuad.render(J);this.highPassUniforms.tDiffuse.value=$.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,J.setRenderTarget(this.renderTargetBright),J.clear(),this._fsQuad.render(J);let Y=this.renderTargetBright;for(let X=0;X<this.nMips;X++)this._fsQuad.material=this.separableBlurMaterials[X],this.separableBlurMaterials[X].uniforms.colorTexture.value=Y.texture,this.separableBlurMaterials[X].uniforms.direction.value=W6.BlurDirectionX,J.setRenderTarget(this.renderTargetsHorizontal[X]),J.clear(),this._fsQuad.render(J),this.separableBlurMaterials[X].uniforms.colorTexture.value=this.renderTargetsHorizontal[X].texture,this.separableBlurMaterials[X].uniforms.direction.value=W6.BlurDirectionY,J.setRenderTarget(this.renderTargetsVertical[X]),J.clear(),this._fsQuad.render(J),Y=this.renderTargetsVertical[X];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,J.setRenderTarget(this.renderTargetsHorizontal[0]),J.clear(),this._fsQuad.render(J),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,K)J.state.buffers.stencil.setTest(!0);if(this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else J.setRenderTarget($),this._fsQuad.render(J);J.setClearColor(this._oldClearColor,this._oldClearAlpha),J.autoClear=W}_getSeparableBlurMaterial(J){let Q=[],$=J/3;for(let W=0;W<J;W++)Q.push(0.39894*Math.exp(-0.5*W*W/($*$))/$);let Z=[],K=[];for(let W=1;W<J;W+=2){let Y=Q[W],X=W+1<J?Q[W+1]:0,H=Y+X;Z.push((W*Y+(W+1)*X)/H),K.push(H)}return new tJ({defines:{KERNEL_PAIRS:Z.length},uniforms:{colorTexture:{value:null},invSize:{value:new F0(0.5,0.5)},direction:{value:new F0(0.5,0.5)},centerWeight:{value:Q[0]},gaussianOffsets:{value:Z},gaussianWeights:{value:K}},vertexShader:`

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

				}`})}_getCompositeMaterial(J){return new tJ({defines:{NUM_MIPS:J},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}W6.BlurDirectionX=new F0(1,0);W6.BlurDirectionY=new F0(0,1);var D$={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class dY extends $9{constructor(){super();this.isOutputPass=!0,this.uniforms=i9.clone(D$.uniforms),this.material=new J$({name:D$.name,uniforms:this.uniforms,vertexShader:D$.vertexShader,fragmentShader:D$.fragmentShader}),this._fsQuad=new K6(this.material),this._outputColorSpace=null,this._toneMapping=null}render(J,Q,$){if(this.uniforms.tDiffuse.value=$.texture,this.uniforms.toneMappingExposure.value=J.toneMappingExposure,this._outputColorSpace!==J.outputColorSpace||this._toneMapping!==J.toneMapping){if(this._outputColorSpace=J.outputColorSpace,this._toneMapping=J.toneMapping,this.material.defines={},EJ.getTransfer(this._outputColorSpace)===uJ)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===vQ)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===fQ)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===bQ)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===v7)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===xQ)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===gQ)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===hQ)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget(Q),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var C8=(()=>{let J=7;return()=>{return J=Math.imul(J,1664525)+1013904223>>>0,J/4294967296}})();function cY(J,Q=256,$=256){let Z=document.createElement("canvas");Z.width=Q,Z.height=$,J(Z.getContext("2d"),Q,$);let K=new m8(Z);return K.colorSpace=J8,K}function h5(J="255,214,150"){return cY((Q,$,Z)=>{let K=Q.createRadialGradient($/2,Z/2,0,$/2,Z/2,$/2);K.addColorStop(0,`rgba(${J},1)`),K.addColorStop(0.18,`rgba(${J},.55)`),K.addColorStop(0.5,`rgba(${J},.12)`),K.addColorStop(1,`rgba(${J},0)`),Q.fillStyle=K,Q.fillRect(0,0,$,Z)})}var x5=new _(-0.55,-0.035,-0.83).normalize();function FR(J){let Q=new wJ,$=new P0(new R8(80,32,16),new tJ({side:D8,depthWrite:!1,fog:!1,uniforms:{uSol:{value:x5}},vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP;uniform vec3 uSol;
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
   }`}));$.renderOrder=-10,Q.add($);let Z=220,K=new Float32Array(Z*3),W=new Float32Array(Z*3);for(let U=0;U<Z;U++){let N=C8(),F=C8()*Math.PI*2,G=0.45+N*0.55,E=Math.sqrt(1-G*G),O=0.25+0.55*C8()*G;K.set([Math.cos(F)*E*75,G*75,Math.sin(F)*E*75],U*3),W.set([O*0.85,O*0.9,O],U*3)}let Y=new fJ;Y.setAttribute("position",new aJ(K,3)),Y.setAttribute("color",new aJ(W,3)),Q.add(new s6(Y,new u7({size:1.3,sizeAttenuation:!1,vertexColors:!0,fog:!1,depthWrite:!1,transparent:!0,opacity:0.45})));let X=new P0(new s9(2.1,40),new hJ({color:"#f6e7cc",fog:!1}));X.position.set(26,11,58),X.lookAt(0,1,0),Q.add(X);let H=new c6(new m7({map:h5("255,226,200"),fog:!1,transparent:!0,opacity:0.28,depthWrite:!1,blending:A9}));return H.scale.setScalar(13),H.position.copy(X.position),Q.add(H),J.add(Q),Q}function ER(J){let Q=new Map,$=(F,G=0,E=0)=>{let O=F+G+E;if(!Q.has(O))Q.set(O,{m:new o0({color:G?F:new v0(F).multiplyScalar(0.85),roughness:0.9,emissive:G||"#000",emissiveIntensity:E}),g:[]});return Q.get(O)},Z=(F,G,E,O,B,R=0)=>{F.rotateY(R),F.translate(E,O,B),G.g.push(F)},K=["#c98a64","#d8b46a","#6fa9a0","#c48d95","#a3b777","#dca16a","#86a3bf","#e2d3b0"],W=-20;while(W<20){let F=3.4+C8()*2.6,G=3+C8()*2.8,E=10.5+C8()*0.8,O=K[Math.floor(C8()*K.length)];Z(new TJ(F,G,2.4),$(O),W+F/2,G/2,E+1.2),Z(new TJ(F+0.12,0.18,2.6),$("#d9d2bf"),W+F/2,G+0.09,E+1.2);let B=Math.max(1,Math.floor(F/1.5));for(let R=0;R<B;R++){let q=W+(R+0.5)*F/B,M=C8()<0.4,P=C8()<0.2,V=M?$(P?"#9fc3ff":"#ffd08a",P?"#6f9cff":"#ffb35a",P?1.6:2.2):$("#2a3436");if(Z(new qJ(0.75,0.95),V,q,1.55,E-0.005,Math.PI),G>4.2)Z(new qJ(0.7,0.8),C8()<0.35?$("#ffd08a","#ffb35a",1.5):$("#2a3436"),q,G-1.1,E-0.005,Math.PI);Z(new TJ(0.9,0.06,0.12),$("#2c3432"),q,2.08,E-0.06)}for(let R=0;R<Math.floor(F/0.22);R++)Z(new TJ(0.018,0.9,0.018),$("#1b2224"),W+0.11+R*0.22,0.45,E-0.55);Z(new TJ(F,0.04,0.04),$("#1b2224"),W+F/2,0.9,E-0.55),W+=F+0.15}Z(new TJ(44,0.16,1.8),$("#8a8578"),0,0.08,9.6);let Y=[-14,-4,6,16];for(let F of Y)Z(new BJ(0.09,0.12,7,8),$("#6b6457"),F,3.5,9.2),Z(new TJ(1.6,0.08,0.08),$("#4f4a40"),F,6.6,9.2);for(let F=0;F<Y.length-1;F++)for(let G of[0,-0.25,0.3]){let E=new _(Y[F],6.6+G,9.2),O=new _(Y[F+1],6.6+G,9.2),B=E.clone().lerp(O,0.5);B.y-=0.55,Z(new w8(new u8(E,B,O),16,0.012,4),$("#101517"),0,0,0)}for(let[F,G,E]of[[-9,12.8,7.5],[11,13.1,8.4],[2.5,13.4,6.4]]){let O=new n7([new _(F,0,G),new _(F+0.3,E*0.5,G),new _(F+0.8,E,G-0.2)]);Z(new w8(O,12,0.16,6),$("#5d5445"),0,0,0);for(let B=0;B<9;B++){let R=B/9*Math.PI*2,q=new c7(0.28,2.6,4,1);q.rotateZ(Math.PI/2+0.55),q.translate(1.3,0,0),q.rotateY(R),Z(q,$("#34503a"),F+0.8,E,G-0.2)}}let X=[];for(let{m:F,g:G}of Q.values()){let E=JQ(G,!1);if(G.forEach((B)=>B.dispose()),!E)continue;let O=new P0(E,F);O.receiveShadow=!0,J.add(O),X.push(O)}let H=new r9("#ffa35c",6,14,1.8);H.position.set(6,5.9,8.6),J.add(H);let U=new P0(new R8(0.14,12,8),new o0({color:"#ffcf94",emissive:"#ff9a45",emissiveIntensity:5}));U.position.copy(H.position),J.add(U);let N=new P0(new BJ(0.03,0.03,1.3,6),new o0({color:"#4f4a40"}));return N.rotation.z=Math.PI/2,N.position.set(6,6.05,8.9),J.add(N),{merged:X,farol:H}}function qR(J,Q){let $=new wJ;$.position.copy(Q),J.add($);let Z=new P0(new R8(0.038,16,12),new o0({color:"#fff4d6",emissive:"#ffd08a",emissiveIntensity:9}));Z.scale.y=1.25,$.add(Z);let K=new P0(new BJ(0.018,0.02,0.05,10),new o0({color:"#2b2a26",roughness:0.6}));K.position.y=0.065,$.add(K);let W=new P0(new BJ(0.004,0.004,1.1,5),new o0({color:"#15181a"}));W.position.y=0.64,$.add(W);let Y=new c6(new m7({map:h5(),transparent:!0,opacity:0.55,depthWrite:!1,blending:A9}));Y.scale.setScalar(0.75),$.add(Y);let X=[],H=new m7({color:"#3b3026",transparent:!0,opacity:0.85,depthWrite:!1});for(let U=0;U<6;U++){let N=new c6(H);N.scale.setScalar(0.012+C8()*0.008),$.add(N),X.push({s:N,r:0.07+C8()*0.12,w:2+C8()*4,f:C8()*6,y:0.05+C8()*0.08,k:1.3+C8()})}return{g:$,halo:Y,polillas:X}}function OR(){let J=new u6;J.add(new P0(new R8(10,24,12),new tJ({side:D8,uniforms:{uSol:{value:x5}},vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;uniform vec3 uSol;void main(){float l=dot(normalize(vP.xz+vec2(1e-4)),normalize(uSol.xz))*.5+.5;vec3 hor=mix(vec3(.3,.25,.36),vec3(.85,.45,.25),pow(l,2.5));gl_FragColor=vec4(mix(hor,vec3(.05,.07,.17),smoothstep(-.05,.7,vP.y))*mix(.35,1.,smoothstep(-.3,0.,vP.y)),1.);}"})));let Q=($,Z,K,W,Y,X)=>{let H=new P0(new qJ(K,W),new hJ({color:new v0($).multiplyScalar(Z),side:iJ}));H.position.set(...Y),H.lookAt(...X),J.add(H)};return Q("#ffcf94",6,1.2,1.2,[0,6,0],[0,0,0]),Q("#dff3ea",2,5,2,[0,2.5,-8],[0,1,0]),J}function g5({scene:J,renderer:Q,camera:$,controls:Z,software:K,bulbLight:W}){function Y(){let y=new U$(Q),j=OR(),g=y.fromScene(j,0.02);J.environment?.dispose?.(),J.environment=g.texture,J.environmentIntensity=0.75,y.dispose(),j.traverse((v)=>{v.geometry?.dispose(),v.material?.dispose()})}Y(),J.background=new v0("#2a2d4a"),J.fog=new l7("#5a5670",0.017);let X=FR(J),H=ER(J),U=new _(0,V0.surfaceY+1.3,0),N=qR(J,U),F=cY((y,j,g)=>{let v=y.createRadialGradient(j/2,g*0.62,0,j/2,g*0.62,j/2);v.addColorStop(0,"rgba(255,196,110,.95)"),v.addColorStop(0.45,"rgba(255,170,80,.35)"),v.addColorStop(1,"rgba(255,150,60,0)"),y.fillStyle=v,y.fillRect(0,0,j,g)},256,128),G=new P0(new qJ(0.62,0.26),new hJ({map:F,transparent:!0,opacity:0,depthWrite:!1,blending:A9,toneMapped:!1}));G.rotation.x=-Math.PI/2,G.position.y=V0.surfaceY+0.0012,G.renderOrder=3,J.add(G);let E={i:-1,ang:0,alfa:0,objetivo:0,pos:new _},O=(y)=>cY((j,g,v)=>{j.strokeStyle=`rgba(${y},1)`,j.lineWidth=g*0.09,j.beginPath(),j.arc(g/2,v/2,g*0.36,0,Math.PI*2),j.stroke();let i=j.createRadialGradient(g/2,v/2,0,g/2,v/2,g/2);i.addColorStop(0,`rgba(${y},.5)`),i.addColorStop(1,`rgba(${y},0)`),j.fillStyle=i,j.fillRect(0,0,g,v)},128,128),B=["227,174,85","111,183,201"].map((y)=>{let j=new P0(new qJ(0.036,0.036),new hJ({map:O(y),transparent:!0,opacity:0,depthWrite:!1,blending:A9,toneMapped:!1}));return j.rotation.x=-Math.PI/2,j.position.y=V0.surfaceY+0.0015,j.renderOrder=3,J.add(j),j}),R=null,q=$.clone(),M=new _,P=new _,V=null,L=null,C=null,A=!1;function D(){if(V)return;let y=Q.getDrawingBufferSize(new F0),j=new Q8(y.x,y.y,{type:O8,samples:4});V=new mY(Q,j),V.addPass(new uY(J,q)),L=new W6(new F0(y.x/2,y.y/2),0.4,0.5,3.2),C=new V$({uniforms:{tDiffuse:{value:null},uTiempo:{value:0},uVineta:{value:0.34},uGrano:{value:0.018}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform float uTiempo,uVineta,uGrano;varying vec2 vUv;
    float azar(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+uTiempo*43.7)*43758.5453);}
    void main(){vec4 c=texture2D(tDiffuse,vUv);
     vec2 q=vUv-.5;float v=1.-uVineta*smoothstep(.25,.85,length(q*vec2(1.15,1.)));
     c.rgb*=v;
     // Sombras hacia el lila y luces cálidas: el atardecer con el bombillo ya prendido.
     float l=dot(c.rgb,vec3(.2126,.7152,.0722));
     c.rgb*=mix(vec3(.96,.95,1.06),vec3(1.04,1.,.93),smoothstep(.02,.4,l));
     c.rgb+=(azar(vUv*vec2(1920.,1080.))-.5)*uGrano*(.4+l);
     gl_FragColor=c;}`}),V.addPass(C),V.addPass(new dY)}function I(y){if(A=!K&&y==="high",A)D();N.halo.visible=!0,H.farol.visible=y==="high"}function d(y,j){if(V)V.setPixelRatio(Q.getPixelRatio()),V.setSize(y,j);q.aspect=$.aspect,q.updateProjectionMatrix()}function f(y,j,{reduced:g,view:v,ends:i,temblor:x=0}){if(q.copy($),!g){if(M.set(Math.sin(y*0.11)*0.012+Math.sin(y*0.037)*0.008,Math.sin(y*0.083+1)*0.007,Math.cos(y*0.097)*0.01),x)M.add(P.set(Math.sin(y*97)*x,Math.sin(y*113)*x*0.6,Math.cos(y*89)*x));q.position.add(M),P.copy(Z.target).addScaledVector(M,0.35),q.lookAt(P)}if(q.updateMatrixWorld(),N.halo.material.opacity=0.5+0.05*Math.sin(y*23)*Math.sin(y*1.7)+(g?0:0.03*Math.sin(y*3.1)),!g)for(let Q0 of N.polillas){let B0=y*Q0.w+Q0.f;Q0.s.position.set(Math.cos(B0)*Q0.r,Q0.y+Math.sin(B0*Q0.k)*0.05,Math.sin(B0*1.3)*Q0.r)}let a=v?.phase==="playing";if(a&&v.turn!=null){let[Q0,B0,D0]=O9[v.turn],g0=V0.boardLimit+0.075;if(E.i!==v.turn)E.i=v.turn,E.destino=new _(Q0*g0/V0.seatDistance,0,B0*g0/V0.seatDistance),E.angDestino=D0;E.pos.lerp(E.destino,1-Math.exp(-j*6));let c0=E.angDestino-E.ang;c0=Math.atan2(Math.sin(c0),Math.cos(c0)),E.ang+=c0*(1-Math.exp(-j*6)),E.objetivo=0.55+(g?0:0.08*Math.sin(y*2.2))}else E.objetivo=0;E.alfa+=(E.objetivo-E.alfa)*(1-Math.exp(-j*4)),G.material.opacity=E.alfa,G.visible=E.alfa>0.01,G.position.set(E.pos.x,V0.surfaceY+0.0012,E.pos.z),G.rotation.set(-Math.PI/2,0,E.ang);for(let Q0=0;Q0<2;Q0++){let B0=B[Q0],D0=a&&i?i[Q0]:null;if(!D0){B0.material.opacity=Math.max(0,B0.material.opacity-j*3),B0.visible=B0.material.opacity>0.01;continue}B0.visible=!0,B0.position.set(D0.x,V0.surfaceY+0.0015,D0.z);let g0=g?1:1+0.12*Math.sin(y*3.4+Q0*1.3);B0.scale.setScalar(g0),B0.material.opacity=Math.min(0.7,B0.material.opacity+j*3)}if(C)C.uniforms.uTiempo.value=y%100}function u(){if(A&&V)V.render();else Q.render(J,q)}function $0(){V?.dispose()}return{vista:q,frame:f,render:u,resize:d,calidad:I,dispose:$0,bulbPos:U,entorno:Y}}var Y6=Math.PI*2,ZJ=(J=0,Q=0,$=0)=>new _(J,Q,$),RR=[[],[4],[0,8],[0,4,8],[0,2,6,8],[0,2,4,6,8],[0,2,3,5,6,8]];async function VB(J,{onProgress:Q=()=>{}}={}){let $=new u6;$.background=new v0("#2a2d4a"),$.fog=new l7("#5a5670",0.017);let Z=new H8(42,innerWidth/innerHeight,0.08,90);Z.position.set(3.1,2.65,4.2);let K;try{K=new DY({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{throw Error("This device could not start WebGL. Try a recent desktop browser.")}let W=new URLSearchParams(location.search).has("hq"),Y=!W&&/SwiftShader|llvmpipe|Software/i.test((()=>{let S=K.getContext(),c=S.getExtension("WEBGL_debug_renderer_info");return c?S.getParameter(c.UNMASKED_RENDERER_WEBGL):""})());K.setSize(innerWidth,innerHeight),K.setPixelRatio(Y?0.65:Math.min(devicePixelRatio,1.5,1920/innerWidth)),K.outputColorSpace=J8,K.toneMapping=v7,K.toneMappingExposure=1.24,K.shadowMap.enabled=!Y,K.shadowMap.type=y7,K.info.autoReset=!1,J.appendChild(K.domElement);let X=new wY(Z,K.domElement);X.target.set(0,0.8,-0.15),X.enableDamping=!0,X.dampingFactor=0.065,X.enablePan=!1,X.minDistance=0.8,X.maxDistance=4.6,X.minPolarAngle=0.25,X.maxPolarAngle=Math.PI*0.48,X.update();let H=0.5,U=new xZ("#a3a8d8","#6a4e3c",H);$.add(U);let N=new a6("#ffa06a",0.55);N.position.set(-6,2.6,-9),$.add(N);let F=new o6("#ffc98a",5.2,7,Math.PI*0.32,0.6,2);F.position.set(0,V0.surfaceY+1.26,0),F.target.position.set(0,0,0);let G=new r9("#ffc07a",0.45,3.2,2);G.position.set(0,V0.surfaceY+1.2,0),$.add(G),F.castShadow=!0,F.shadow.mapSize.set(Y?1024:2048,Y?1024:2048),F.shadow.focus=0.52,F.shadow.bias=-0.0002,F.shadow.normalBias=0.004,F.shadow.radius=3,F.shadow.camera.near=0.2,F.shadow.camera.far=4,$.add(F,F.target);let E=new r9("#cfeee0",13,9,2);E.position.set(0,2.5,-3.5),$.add(E);{let S=new P0(new TJ(1.2,0.03,0.03),new o0({color:"#e6fff4",emissive:"#e6fff4",emissiveIntensity:4}));S.position.set(0,3.12,-3.6),$.add(S)}let O=new Map,B=new Map;function R(S,c=0.85,J0=0){let s=S+","+c+","+J0;if(!O.has(s))O.set(s,new o0({color:S,roughness:c,metalness:J0}));return O.get(s)}function q(S,c,J0,s=[0,0,0],E0=[1,1,1]){let H0=c.uuid;if(!B.has(H0))B.set(H0,{material:c,geos:[]});let C0=new QJ().compose(ZJ(...J0),new CJ().setFromEuler(new N9(...s)),ZJ(...E0));S.applyMatrix4(C0),B.get(H0).geos.push(S)}function M(S,c,J0,s,E0,H0,C0,x0=0){q(new TJ(s,E0,H0),typeof C0==="string"?R(C0):C0,[S,c,J0],[0,x0,0])}function P(S,c,J0,s,E0,H0,C0,x0=10,u0=[0,0,0]){q(new BJ(s,E0,H0,x0),typeof C0==="string"?R(C0):C0,[S,c,J0],u0)}function V(S,c=512,J0=512){let s=document.createElement("canvas");s.width=c,s.height=J0,S(s.getContext("2d"),c,J0);let E0=new m8(s);return E0.colorSpace=J8,E0.anisotropy=Math.min(8,K.capabilities.getMaxAnisotropy()),E0}let L=191,C=()=>{return L=Math.imul(L,1664525)+1013904223>>>0,L/4294967296},A=V((S,c,J0)=>{S.fillStyle="#65432b",S.fillRect(0,0,c,J0);for(let s=0;s<700;s++){S.strokeStyle=`rgba(${C()>0.5?"170,122,70":"35,22,14"},${0.08+C()*0.2})`,S.lineWidth=0.3+C()*2,S.beginPath();let E0=C()*J0;S.moveTo(0,E0);for(let H0=0;H0<c;H0+=20)S.lineTo(H0,E0+Math.sin(H0*0.013+s)*3);S.stroke()}}),D=new o0({map:A,roughness:0.65,color:"#e7bc8c"}),I=R("#4c3022",0.75),d=R("#287770"),f=R("#d2c5a2"),u=R("#3d938e"),$0=V((S,c,J0)=>{let s=c/2;for(let u0=0;u0<2;u0++)for(let G0=0;G0<2;G0++){let f0=G0*s,KJ=u0*s;S.save(),S.beginPath(),S.rect(f0,KJ,s,s),S.clip(),S.fillStyle="#c4b99f",S.fillRect(f0,KJ,s,s);for(let[DJ,P8]of[[f0,KJ],[f0+s,KJ],[f0,KJ+s],[f0+s,KJ+s]])S.strokeStyle="#8d6450",S.lineWidth=s*0.04,S.beginPath(),S.arc(DJ,P8,s*0.42,0,Math.PI*2),S.stroke(),S.fillStyle="#4f6763",S.beginPath(),S.arc(DJ,P8,s*0.13,0,Math.PI*2),S.fill(),S.strokeStyle="#c4b99f",S.lineWidth=s*0.02,S.beginPath(),S.arc(DJ,P8,s*0.11,0,Math.PI*2),S.stroke();let JJ=f0+s/2,VJ=KJ+s/2,xJ=(DJ,P8)=>{S.fillStyle=P8,S.beginPath(),S.moveTo(JJ,VJ-DJ),S.lineTo(JJ+DJ,VJ),S.lineTo(JJ,VJ+DJ),S.lineTo(JJ-DJ,VJ),S.closePath(),S.fill()};xJ(s*0.2,"#8d6450"),xJ(s*0.13,"#c4b99f"),xJ(s*0.07,"#3a3630"),S.restore(),S.strokeStyle="#7e7563",S.lineWidth=3,S.strokeRect(f0+1.5,KJ+1.5,s-3,s-3)}for(let u0=0;u0<9000;u0++)S.fillStyle=C()>0.5?"rgba(235,228,205,.07)":"rgba(30,28,24,.09)",S.fillRect(C()*c,C()*J0,1+C()*2,1+C()*2);for(let u0=0;u0<40;u0++){let G0=S.createRadialGradient(0,0,0,0,0,1),f0=C()*c,KJ=C()*J0,JJ=20+C()*90;S.save(),S.translate(f0,KJ),S.scale(JJ,JJ),G0.addColorStop(0,"rgba(40,34,26,.10)"),G0.addColorStop(1,"rgba(40,34,26,0)"),S.fillStyle=G0,S.fillRect(-1,-1,2,2),S.restore()}},1024,1024);$0.wrapS=$0.wrapT=F7,$0.repeat.set(22.88888888888889,27.77777777777778),M(-5.7,-0.1,-4.575,20.6,0.2,15.85,new o0({map:$0,roughness:0.86,color:"#9d937f"})),M(0,-0.2,8.5,40,0.1,10.3,"#2b3133"),M(0,-0.075,3.45,40,0.15,0.2,"#a8a391");for(let S=-10;S<11;S++)M(S*1.8,-0.146,6.3,0.7,0.008,0.06,"#b9ad83");M(0,1.6,-5.1,7.5,3.4,0.2,d),M(-3.8,1.6,-3.85,0.2,3.4,2.7,d),M(3.8,1.6,-3.85,0.2,3.4,2.7,d),M(-3.48,1.1,-2.52,0.7,2.3,0.32,d),M(3.45,1.1,-2.52,0.8,2.3,0.32,d),M(0,2.95,-2.52,7.5,0.42,0.35,u),M(0,3.24,-3.7,8,0.12,4.4,"#435451");for(let S=0;S<30;S++)M(-4+S*0.276,3.15,-3.7,0.028,0.055,4.6,"#82928a");M(0,0.7,-4.24,3.9,1.4,0.62,D),M(0,1.43,-4.2,4.08,0.1,0.78,D);for(let S=0;S<3;S++)M(-0.6,1.58+S*0.48,-4.78,5.8,0.065,0.38,D),M(-0.6,1.84+S*0.48,-4.98,5.8,0.48,0.065,"#443e30");M(2.95,1.02,-4.55,1.02,2.1,0.8,"#d0ceb8"),M(2.95,1.12,-4.11,0.84,1.55,0.035,"#254c51");let y=[];for(let S=0;S<29;S++)y.push({pos:[-3.18+S*0.182,2.095,-4.69],scale:0.7+S%5*0.07,color:["#566641","#b0762a","#2e5a45","#7a3024","#c9b36a","#3b4f7a"][S*7%6]});let j=new O7([new F0(0,0),new F0(0.036,0),new F0(0.043,0.025),new F0(0.043,0.17),new F0(0.019,0.205),new F0(0.017,0.285),new F0(0.021,0.29),new F0(0.021,0.305),new F0(0,0.31)],12);y.forEach((S)=>q(j.clone(),R(S.color,0.3),S.pos,[0,0,0],[S.scale,S.scale,S.scale]));for(let[S,c,J0]of[[-3.1,-1.9,"#a8483a"]])for(let s=0;s<3;s++){M(S,0.19+s*0.34,c,0.52,0.3,0.4,J0);for(let E0=0;E0<5;E0++)M(S-0.2+E0*0.1,0.18+s*0.34,c+0.204,0.055,0.16,0.015,"#2c3025")}for(let S=0;S<5;S++){let c=-7-S*3.5;M(c,1.5,-3,3.1,3,3.2,["#d9a35c","#7fb1a4","#d8c7a2","#c98d7c","#a6bf8e"][S]),M(c,2.2,-1.38,1,0.8,0.045,"#b59961"),M(c,2.2,-1.35,0.045,0.86,0.055,"#273e37"),M(c,0.98,-1.38,0.9,1.9,0.04,"#354e49")}for(let S=0;S<4;S++)P(-5-S*5,2.3,-1,0.08,0.09,4.6,"#665443"),M(-5-S*5,4.2,-1,1.8,0.09,0.09,"#514b3d");function g(S,c,J0,s="#202d28"){let E0=new u8(ZJ(...S),ZJ(...J0),ZJ(...c));q(new w8(E0,20,0.008,4,!1),R(s),[0,0,0])}let v=[];for(let S of[-1.95,1.95])P(S,1.45,2.55,0.035,0.045,2.9,"#5b4a38",8);for(let[S,c,J0]of[[[-2.7,2.9,-2.45],[-1.95,2.85,2.55],0.5],[[2.7,2.9,-2.45],[1.95,2.85,2.55],0.5],[[-1.95,2.85,2.55],[1.95,2.85,2.55],0.32]]){let s=ZJ(...S),E0=ZJ(...c),H0=s.clone().lerp(E0,0.5);H0.y-=J0*2;let C0=new u8(s,H0,E0);q(new w8(C0,24,0.006,4,!1),R("#1c2320"),[0,0,0]);let x0=Math.round(s.distanceTo(E0)/0.42);for(let u0=1;u0<x0;u0++){let G0=C0.getPointAt(u0/x0);v.push(G0.setY(G0.y-0.035))}}{let S=new R8(0.022,10,8);S.scale(1,1.3,1);let c=["#ffd89a","#ffc27a","#ffe3a8"],J0=new w9(S,new hJ({color:new v0(4.5,4.5,4.5)}),v.length),s=new jJ;v.forEach((E0,H0)=>{s.position.copy(E0),s.updateMatrix(),J0.setMatrixAt(H0,s.matrix),J0.setColorAt(H0,new v0(c[H0%c.length]))}),$.add(J0)}g([0,3.22,-1.6],[0,3.19,0],[0,3.02,-0.8]);let i=new wJ;i.position.set(4.3,0,-1.7),$.add(i);let x=new P0(new BJ(0.1,0.15,4.5,9),R("#696047"));x.position.y=2.25,i.add(x);for(let S=0;S<9;S++){let c=new P0(new R8(1,10,5),R(S%2?"#4a654c":"#344e3d"));c.scale.set(0.27,0.075,1.5),c.position.set(Math.sin(S*Y6/9)*0.72,4.35,Math.cos(S*Y6/9)*0.72),c.rotation.set(0.23,S*Y6/9,0),i.add(c)}let a=new L8({map:A,color:"#d9a877",roughness:0.5,clearcoat:0.55,clearcoatRoughness:0.28}),Q0=new P0(new A8(V0.tableWidth,V0.tableThickness,V0.tableWidth,3,0.035),a);Q0.position.y=V0.tableCenterY,Q0.castShadow=!0,Q0.receiveShadow=!0,$.add(Q0);let B0=V((S,c,J0)=>{S.fillStyle="#2f5b47",S.fillRect(0,0,c,J0);for(let E0=0;E0<J0;E0+=2)for(let H0=0;H0<c;H0+=2){let C0=(C()-0.5)*14,x0=((H0>>1)+(E0>>1))%2?4:-4;S.fillStyle=`rgb(${47+C0+x0},${91+C0+x0},${71+C0+x0})`,S.fillRect(H0,E0,2,2)}for(let E0=0;E0<4;E0++){let H0=E0*Math.PI/2,C0=c/2+Math.sin(H0)*c*0.36,x0=J0/2+Math.cos(H0)*J0*0.36,u0=S.createRadialGradient(C0,x0,0,C0,x0,c*0.2);u0.addColorStop(0,"rgba(120,150,120,.16)"),u0.addColorStop(1,"rgba(120,150,120,0)"),S.fillStyle=u0,S.fillRect(0,0,c,J0)}let s=S.createRadialGradient(c/2,J0/2,c*0.1,c/2,J0/2,c*0.62);s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,.28)"),S.fillStyle=s,S.fillRect(0,0,c,J0)},512,512),D0=new P0(new A8(V0.feltWidth,0.012,V0.feltWidth,2,0.02),new L8({map:B0,roughness:0.97,sheen:0.8,sheenRoughness:0.55,sheenColor:new v0("#9fc7a8")}));D0.position.y=V0.feltCenterY,D0.receiveShadow=!0,$.add(D0);let g0=V0.tableWidth/2-0.07;for(let S of[-g0,g0])for(let c of[-g0,g0])M(S,0.35,c,0.075,0.68,0.075,I);let c0=["#C8402F","#6FB7C9"];for(let S=0;S<4;S++){let[c,J0,s]=O9[S],E0=V0.feltWidth/2-0.012,H0=new P0(new qJ(V0.feltWidth*0.72,0.009),new o0({color:c0[S%2],roughness:0.9}));H0.rotation.set(-Math.PI/2,0,s),H0.position.set(c*E0/V0.seatDistance,V0.surfaceY+0.0006,J0*E0/V0.seatDistance),H0.receiveShadow=!0,$.add(H0)}let W0=new o0({roughness:0.92,map:V((S,c,J0)=>{S.fillStyle="#8f7446",S.fillRect(0,0,c,J0);let s=12,E0=c/s;for(let H0=0;H0<s;H0++)for(let C0=0;C0<s;C0++){let x0=(C0+H0)%2===0;for(let u0=0;u0<3;u0++){let G0=150+C()*45|0;S.fillStyle=`rgb(${G0+30},${G0+8},${G0-45})`;let f0=u0*E0/3+E0*0.04,KJ=E0/3-E0*0.08;if(x0)S.fillRect(C0*E0+1,H0*E0+f0,E0-2,KJ);else S.fillRect(C0*E0+f0,H0*E0+1,KJ,E0-2)}}S.fillStyle="rgba(40,28,14,.18)";for(let H0=0;H0<=s;H0++)S.fillRect(H0*E0-1,0,2,J0),S.fillRect(0,H0*E0-1,c,2)},256,256)});for(let S=0;S<4;S++){let[c,J0,s]=O9[S],E0=new wJ;E0.position.set(c,0,J0),E0.rotation.y=s,$.add(E0);let H0=R(S%2?"#5e9fb2":"#b53f2e",0.62),C0=(x0,u0,G0,f0,KJ,JJ,VJ=H0,xJ=0.008)=>{let DJ=ZJ(f0,KJ,JJ).applyAxisAngle(ZJ(0,1,0),s).add(ZJ(c,0,J0));q(new A8(x0,u0,G0,2,xJ),VJ,DJ.toArray(),[0,s,0])};C0(V0.chairSeatWidth-0.04,0.035,0.5,0,V0.chairSeatY,0,W0,0.01);for(let x0 of[-1,1])C0(0.04,0.05,0.54,x0*(V0.chairSeatWidth/2-0.02),V0.chairSeatY-0.005,0);for(let x0 of[-1,1])C0(V0.chairSeatWidth,0.05,0.04,0,V0.chairSeatY-0.005,x0*0.25);for(let x0 of[-0.24,0.24])for(let u0 of[-0.21,0.21])C0(0.04,V0.chairSeatY,0.04,x0,V0.chairSeatY/2,u0);for(let x0 of[-0.24,0.24])C0(0.024,0.024,0.42,x0,0.15,0);C0(0.48,0.024,0.024,0,0.15,0.21);for(let x0 of[-0.24,0.24])C0(0.04,0.52,0.04,x0,V0.chairSeatY+0.26,-0.23);for(let x0 of[0.2,0.33,0.46])C0(0.46,x0===0.46?0.07:0.045,0.022,0,V0.chairSeatY+x0,-0.23)}function w(S,c,J0,s,E0,H0=60){let C0=V((x0,u0,G0)=>{x0.fillStyle=s,x0.fillRect(0,0,u0,G0),x0.fillStyle=E0,x0.textAlign="center",x0.textBaseline="middle",x0.font=`bold ${H0}px Georgia`,x0.fillText(S,u0/2,G0/2)},1024,256);return new P0(new qJ(c,J0),new hJ({map:C0}))}let l=w("COLMADO  LA ESQUINA",4.8,0.38,"#a05d42","#f8e8b9",64);l.position.set(0,2.94,-2.33),$.add(l);let n=w("MESA",0.11,0.029,"#284e3e","#81906b",77);{let S=document.createElement("canvas");S.width=512,S.height=136;let c=new m8(S);c.colorSpace=J8;let J0=()=>{let s=S.getContext("2d");s.clearRect(0,0,512,136),s.font=`96px ${document.fonts?.check?.("96px Shrikhand")?"Shrikhand":"Georgia"}`,s.textAlign="center",s.textBaseline="middle",s.fillStyle="rgba(170,205,170,.42)",s.fillText("Mesa",256,72),c.needsUpdate=!0};J0(),document.fonts?.load?.("96px Shrikhand").then(J0).catch(()=>{}),n.material=new o0({map:c,transparent:!0,depthWrite:!1,roughness:1})}n.rotation.x=-Math.PI/2,n.position.set(0,V0.surfaceY+0.001,0.3),$.add(n);let K0=new wJ;K0.position.set(-0.9,2.62,-3.45),K0.rotation.x=-Math.PI/2,$.add(K0),P(-0.9,2.9,-3.45,0.015,0.015,0.56,"#777a68",8),P(-0.9,3.16,-3.45,0.075,0.075,0.025,"#767763",12);let t=new P0(new R8(0.075,12,8),R("#41493d"));K0.add(t);for(let S=0;S<5;S++){let c=new P0(new TJ(0.13,0.5,0.025),R("#85856e",0.88,0.05));c.position.set(Math.sin(S*Y6/5)*0.285,Math.cos(S*Y6/5)*0.285,0),c.rotation.z=-S*Y6/5,K0.add(c)}let L0=new wJ;L0.position.set(-12,0.05,5.2),$.add(L0);for(let S of[-0.36,0.36]){let c=new P0(new j9(0.19,0.038,7,14),R("#182221"));c.position.set(S,0.2,0),L0.add(c)}let O0=new P0(new A8(0.65,0.17,0.2,2,0.04),R("#823e2f",0.45,0.25));O0.position.y=0.49,L0.add(O0);let U0=new P0(new TJ(0.35,0.06,0.22),R("#202725"));U0.position.set(-0.08,0.61,0),L0.add(U0);let S0=new P0(new BJ(0.015,0.015,0.45,6),R("#8c9c96",0.4,0.5));S0.position.set(0.32,0.59,0),S0.rotation.z=-0.3,L0.add(S0);let n0=w5({scene:$,texture:V,mat:R,box:M,cylinder:P,random:C,teal:d,wood:D,storeSign:l}),FJ=j5({scene:$,texture:V,mat:R,box:M,cylinder:P,staticGeo:q,random:C,renderer:K});y5({scene:$,random:C});for(let{material:S,geos:c}of B.values()){let J0=JQ(c.some((s)=>!s.index)?c.map((s)=>s.index?s.toNonIndexed():s):c,!1);if(J0){let s=new P0(J0,S);s.receiveShadow=!0,J0.computeBoundingBox(),s.castShadow=J0.boundingBox.distanceToPoint(ZJ(0,0.8,0))<1.6&&J0.boundingBox.getSize(ZJ()).length()<8,$.add(s)}c.forEach((s)=>s.dispose())}let b0=new wJ,PJ=new wJ;$.add(b0,PJ);let SJ=new A8(V0.tileLength,V0.tileThickness,V0.tileWidth,3,0.0024),gJ=new L8({color:"#ede5d2",roughness:0.5,clearcoat:0.3,clearcoatRoughness:0.4}),h=new L8({color:"#e2dac6",roughness:0.42,clearcoat:0.7,clearcoatRoughness:0.3}),sJ=new o0({color:"#b98b3e",roughness:0.28,metalness:1}),UJ=new BJ(0.0019,0.0019,0.0009,12),RJ=new o0({color:"#0b0a09",roughness:0.55}),T=new o0({color:"#2a2622",roughness:0.6}),k=new BJ(V0.pipRadius,V0.pipRadius,0.0007,14),b=new TJ(0.0014,0.0005,V0.tileWidth*0.8),e=new Set([SJ,k,b,UJ]),q0=new Set([gJ,h,RJ,T,sJ]),I0=[a,D0.material,gJ,h].map((S)=>[S,{clearcoat:S.clearcoat,sheen:S.sheen}]);function _0(S,c,J0=!1){let s=new wJ,E0=new P0(SJ,J0?h:gJ);if(E0.castShadow=!0,E0.receiveShadow=!0,s.add(E0),!J0){let H0=[];if([S,c].forEach((u0,G0)=>RR[u0].forEach((f0)=>H0.push(ZJ((G0===0?-1:1)*V0.tileLength/4+(f0%3-1)*V0.pipColumnSpacing,V0.tileThickness/2+0.0005,(Math.floor(f0/3)-1)*V0.pipRowSpacing)))),H0.length){let u0=new w9(k,RJ,H0.length),G0=new QJ;H0.forEach((f0,KJ)=>u0.setMatrixAt(KJ,G0.makeTranslation(f0.x,f0.y,f0.z))),s.add(u0)}let C0=new P0(b,T);C0.position.y=V0.tileThickness/2+0.0002,s.add(C0);let x0=new P0(UJ,sJ);x0.position.y=V0.tileThickness/2+0.0004,s.add(x0)}return s}function Y0(S){return ZJ(S.x,V0.surfaceY+V0.tileThickness/2+0.001,S.z)}let N0=new P0(new j9(0.2,0.006,5,38),new hJ({color:"#e8bf70",transparent:!0,opacity:0.7}));N0.rotation.x=-Math.PI/2,N0.position.y=0.027,$.add(N0);let k0=[],i0=[],z0=[],M0=[],e0=new AY,t0=0,IJ=4,m=[];M0.push(...v5($));let T0=ZJ(),X0=ZJ(),A0=ZJ(),p0=ZJ(),R0=new QJ,w0=ZJ(),WJ=ZJ();function cJ(S){let c=null;if(S.root.traverse((JJ)=>{if(JJ.isSkinnedMesh&&JJ.morphTargetDictionary&&!c)c=JJ}),!c||c.morphTargetDictionary.parpadeo==null)return;S.cara={mesh:c,iP:c.morphTargetDictionary.parpadeo,iS:c.morphTargetDictionary.sonrisa};let J0=c.geometry.attributes.position,s=c.userData?.boca;if(s){let JJ=1e9,VJ=0;for(let xJ=0;xJ<J0.count;xJ++){let DJ=(J0.getX(xJ)-s[0])**2+(J0.getY(xJ)-s[1])**2+(J0.getZ(xJ)-s[2])**2;if(DJ<JJ)JJ=DJ,VJ=xJ}S.bocaMundo=(xJ)=>{return c.skeleton.update(),c.getVertexPosition(VJ,xJ).applyMatrix4(c.matrixWorld)}}let E0=c.userData?.ojos,H0=c.userData?.parpado;if(!E0||!H0)return;let C0=c.geometry.attributes.position,x0=(JJ)=>{let VJ=1e9,xJ=0;for(let DJ=0;DJ<C0.count;DJ++){let P8=(C0.getX(DJ)-JJ[0])**2+(C0.getY(DJ)-JJ[1])**2+(C0.getZ(DJ)-JJ[2])**2;if(P8<VJ)VJ=P8,xJ=DJ}return xJ},u0=new qJ(0.027,0.0125,8,4);u0.translate(0,-0.00625,0);let G0=u0.attributes.position,f0=[];for(let JJ=0;JJ<G0.count;JJ++){let VJ=G0.getX(JJ)/0.0135,xJ=-G0.getY(JJ)/0.0125;G0.setZ(JJ,0.0032*Math.cos(VJ*Math.PI/2)*(0.5+0.5*xJ));let DJ=xJ>0.85?0.45:1;f0.push(DJ,DJ,DJ)}u0.setAttribute("color",new YJ(f0,3)),u0.computeVertexNormals();let KJ=new o0({color:new v0().setRGB(...H0,J8),roughness:0.7,vertexColors:!0});S.parpados=E0.map((JJ)=>{let VJ=new P0(u0,KJ);return VJ.visible=!1,VJ.frustumCulled=!1,$.add(VJ),{m:VJ,k:x0(JJ)}})}function yJ(S){let c=S.parpados;if(!c||!S.cara)return;let J0=S.parpadeo||0;if(J0<0.03){for(let C0 of c)C0.m.visible=!1;return}let s=S.cara.mesh;s.skeleton.update();let E0=s.getVertexPosition(c[0].k,T0).applyMatrix4(s.matrixWorld).clone(),H0=s.getVertexPosition(c[1].k,T0).applyMatrix4(s.matrixWorld).clone();if(S.head.getWorldPosition(w0),S.front.getWorldPosition(WJ),p0.subVectors(WJ,w0).normalize(),X0.subVectors(H0,E0).normalize(),A0.crossVectors(p0,X0).normalize(),A0.y<0)A0.negate();X0.crossVectors(A0,p0).normalize(),R0.makeBasis(X0,A0,p0);for(let[C0,x0]of[[c[0],E0],[c[1],H0]])C0.m.visible=!0,C0.m.quaternion.setFromRotationMatrix(R0),C0.m.position.copy(x0).addScaledVector(A0,0.0052).addScaledVector(p0,0.0024),C0.m.scale.set(1,J0,1)}async function c8(S,c){try{Q(`Seating ${["Don Rafa","Marisol","Luis","Carmen"][S]}…`,t0/IJ);let J0=await e0.loadAsync(`/models/${c}.glb`);i0[S]=J0;let s=J0.scene,E0=new wJ;E0.add(s);let H0=new Z$(s);if(J0.animations[0])H0.clipAction(J0.animations.find((JJ)=>JJ.name==="Seated")||J0.animations[0]).play();H0.setTime(V0.neutralPoseTime),s.updateMatrixWorld(!0),s.traverse((JJ)=>{if(JJ.isSkinnedMesh)JJ.computeBoundingBox();if(JJ.isMesh)JJ.castShadow=!0,JJ.receiveShadow=!0,JJ.frustumCulled=!1,JJ.material.roughness=0.83});let C0=new z8().setFromObject(s),x0=s.getObjectByName("Hips"),u0=x0?.getWorldPosition(ZJ())||C0.getCenter(ZJ());s.position.set(-u0.x,-C0.min.y,-u0.z);let[G0,f0,KJ]=O9[S];if(E0.position.set(G0,0,f0),E0.rotation.y=KJ,$.add(E0),k0[S]={root:s,holder:E0,index:S,pose:pY(s),head:s.getObjectByName("Head"),neck:s.getObjectByName("neck"),front:s.getObjectByName("headfront"),chest:s.getObjectByName("Spine"),hips:s.getObjectByName("Hips"),lomo:s.getObjectByName("Spine02"),muslos:[s.getObjectByName("LeftUpLeg"),s.getObjectByName("RightUpLeg")],hombros:[[1,s.getObjectByName("LeftShoulder")],[-1,s.getObjectByName("RightShoulder")]],spine:s.getObjectByName("Spine01"),reaction:null,brazos:["Left","Right"].map((JJ)=>({lado:JJ,hombro:s.getObjectByName(JJ+"Shoulder"),brazo:s.getObjectByName(JJ+"Arm"),antebrazo:s.getObjectByName(JJ+"ForeArm"),mano:s.getObjectByName(JJ+"Hand")}))},k0[S].bebida=M0.find((JJ)=>JJ.index===S),cJ(k0[S]),t0++,Q(t0===4?"The table is ready.":`${t0} of 4 seats ready`,t0/IJ),z0.length===0&&k9>0)N6(k9)}catch(J0){m.push(c),console.error("Character load failed",c,J0),Q(`Could not load ${c}. Reload to retry.`,t0/IJ)}}let Z9=Promise.all(["rafa-upright","marisol","luis-upright","carmen"].map((S,c)=>c8(c,S))),B$=null,X6=null,H6="",YQ=null,V8=g5({scene:$,renderer:K,camera:Z,controls:X,software:Y,bulbLight:F});V8.calidad("high");let U6=new Set,M9=new Map,XQ=[0,1,2,3].map(()=>ZJ()),HQ=(S)=>{let c=S.detail||{};if(c.active)U6.add(c.seat),M9.set(c.seat,c.type);else U6.delete(c.seat)};window.addEventListener("mesa:botvoice",HQ);let C7=null,k9=0,HK="",P7=0,M$="attract",K8=null,K9=[],UK=0,k$=0;function UQ(S){while(S.children.length){let c=S.children.pop();c.parent=null,c.traverse((J0)=>{if(J0.isMesh&&!e.has(J0.geometry))J0.geometry.dispose();if(J0.isMesh&&!q0.has(J0.material))J0.material.dispose()})}}function N6(S){k9=S;let c=Math.min(8,S);for(let J0=z0.length-1;J0>=c;J0--)$.remove(z0[J0].holder),z0.pop();while(z0.length<c&&i0.filter(Boolean).length){let J0=z0.length,s=i0[J0%4]||i0.find(Boolean),E0=iZ(s.scene),H0=new wJ;H0.add(E0);let C0=new Z$(E0);if(s.animations[0])C0.clipAction(s.animations.find((f0)=>f0.name==="Seated")||s.animations[0]).play();C0.setTime(V0.neutralPoseTime),E0.updateMatrixWorld(!0),E0.traverse((f0)=>{if(f0.isSkinnedMesh)f0.computeBoundingBox();if(f0.isMesh)f0.castShadow=!1,f0.frustumCulled=!1});let x0=new z8().setFromObject(E0),u0=E0.getObjectByName("Hips")?.getWorldPosition(ZJ())||x0.getCenter(ZJ());E0.position.x-=u0.x,E0.position.y-=x0.min.y,E0.position.z-=u0.z,H0.position.set(-2.5+J0%4*1.66,0,-2.5-Math.floor(J0/4)*0.65),H0.rotation.y=0,$.add(H0);let G0=new P0(new TJ(0.56,0.06,0.54),f);G0.position.set(0,V0.chairSeatY,0),H0.add(G0),z0.push({root:E0,holder:H0,pose:pY(E0),head:E0.getObjectByName("Head"),neck:E0.getObjectByName("neck"),front:E0.getObjectByName("headfront"),chest:E0.getObjectByName("Spine"),spine:E0.getObjectByName("Spine01"),index:J0+4})}}let z=!1,p=ZJ();function Z0(){let S=Z.position,c=X.target;if(p.subVectors(S,c),p.length()>4.6)S.copy(c).addScaledVector(p.normalize(),4.6);S.z=Math.max(S.z,-2.1),S.x=S9.clamp(S.x,-4.9,4.9),S.y=S9.clamp(S.y,0.35,5.2)}let r=-1,o=null,j0=X.minDistance;function d0(S,c,J0){if(document.documentElement.classList.contains("reduced"))return;let s=ZJ(1,0,1).normalize(),E0=-9;for(let[C0,x0]of[[1,1],[1,-1],[-1,1],[-1,-1]]){let u0=ZJ(C0,0,x0).normalize(),G0=u0.x*S.x+u0.z*S.z;if(G0>E0)E0=G0,s=u0}let H0=S.clone().addScaledVector(s,0.3);if(H0.x=S9.clamp(H0.x,-0.4,0.4),H0.z=S9.clamp(H0.z,-0.4,0.4),H0.y=V0.surfaceY+(J0?0.12:0.19),!o)j0=X.minDistance;X.minDistance=0.1,o={pos:o?.pos||Z.position.clone(),target:o?.target||X.target.clone(),at:b8.elapsedTime+3.4},K8={from:Z.position.clone(),to:H0,fromTarget:X.target.clone(),toTarget:S.clone().setY(S.y+0.01),t:0,dur:0.45}}function y0(S="table"){if(X.minDistance=S==="seat"||S==="close"?0.3:0.7,X.minPolarAngle=S==="overhead"?0.01:0.25,Z.aspect<0.95&&S==="table")S="overhead";let c,J0=ZJ(0,0.8,0);if(S==="attract")c=ZJ(0.75,1.3,4.4),J0=ZJ(-1,1.4,-1.2);else if(S==="overhead")c=ZJ(0.001,1.86,0.34),J0=ZJ(0,V0.surfaceY,0.02);else if(S==="seat")c=ZJ(0,1.36,0.74),J0=ZJ(0,0.82,-0.12);else if(S==="close")c=ZJ(0.62,1.3,1),J0=ZJ(-0.03,0.85,-0.08);else c=ZJ(0.8,1.89,1.24),J0=ZJ(0,0.9,-0.2);if(S!=="attract"&&S!=="seat"&&Z.aspect<1.3){let s=Math.min(2.4,Math.pow(1.6/Z.aspect,0.8));c=J0.clone().add(c.clone().sub(J0).multiplyScalar(s))}if(k0[0])k0[0].root.visible=S!=="seat";o=null,X.minDistance=Math.min(X.minDistance,j0),K8={from:Z.position.clone(),to:c,fromTarget:X.target.clone(),toTarget:J0,t:0}}let m0=ZJ(0,1,0),a0=new CJ().setFromAxisAngle(ZJ(1,0,0),0.12),NJ=new CJ().setFromAxisAngle(m0,Math.PI/2),LJ=new CJ().setFromAxisAngle(ZJ(0,0,1),Math.PI/2),s0=V0.tableCenterY+V0.tableThickness/2+V0.tileLength/2*Math.cos(0.12)+V0.tileThickness/2*Math.sin(0.12)+0.001;function zJ(S,c,J0){let s=O9[S][2];return J0.quaternion.setFromAxisAngle(m0,s).multiply(a0).multiply(NJ).multiply(LJ),J0.position.set(c,s0,-V0.rackRadius).applyAxisAngle(m0,s),J0}let pJ=new w9(SJ,h,28);pJ.count=0,pJ.castShadow=!0,pJ.receiveShadow=!0,pJ.frustumCulled=!1,PJ.add(pJ);let nJ=[[],[],[],[]],kJ=new jJ,Y8=[0,0,0,0],l0="",X8=new Set;function AJ(S){let c=0;for(let J0=0;J0<4;J0++){let s=X8.has(J0)?0:Y8[J0],E0=nJ[J0];while(E0.length<s)E0.push((E0.length-(s-1)/2)*V0.rackSpacing);E0.length=s;for(let H0=0;H0<s;H0++){let C0=(H0-(s-1)/2)*V0.rackSpacing;E0[H0]+=(C0-E0[H0])*(1-Math.exp(-S*10)),zJ(J0,E0[H0],kJ),kJ.updateMatrix(),pJ.setMatrixAt(c++,kJ.matrix)}}pJ.count=c,pJ.instanceMatrix.needsUpdate=!0}let F8=new wJ;$.add(F8);let T8=new Map,W9="",x9="",bJ=(()=>{let S=7,c=()=>(S=S*16807%2147483647)/2147483647,J0=[],s=0.2;for(let E0=0;E0<28;E0++){let H0=!1;for(let C0=0;C0<600&&!H0;C0++){let x0=c()*Math.PI*2,u0=Math.sqrt(c())*s,G0=Math.cos(x0)*u0,f0=Math.sin(x0)*u0*0.82;if(J0.every((KJ)=>Math.hypot(KJ.x-G0,KJ.z-f0)>=0.058))J0.push({x:G0,z:f0,ry:c()*Math.PI}),H0=!0}if(!H0)s+=0.012,E0--}return J0})(),oJ=V0.surfaceY+V0.tileThickness/2+0.0003;function C9(){for(let S=0;S<28;S++){let c=_0(0,0,!0),J0=bJ[S];c.position.set(J0.x,oJ,J0.z),c.rotation.y=J0.ry,b0.add(c)}}let _J=(S)=>S*S*(3-2*S),P9=new CJ().setFromAxisAngle(ZJ(1,0,0),Math.PI),J7=new CJ().setFromAxisAngle(m0,-Math.PI/2);function C$(S,c){S.revealed.forEach((J0,s)=>{let E0=J0.length,H0=O9[s][2];J0.forEach((C0,x0)=>{let u0=(x0-(E0-1)/2)*V0.rackSpacing,G0=_0(C0.a,C0.b);zJ(s,u0,kJ);let f0=kJ.quaternion.clone().multiply(P9),KJ=kJ.position.clone(),JJ=ZJ(u0,V0.surfaceY+V0.tileThickness/2+0.001,-V0.rackRadius+0.047).applyAxisAngle(m0,H0),VJ=new CJ().setFromAxisAngle(m0,H0).multiply(J7);G0.position.copy(KJ),G0.quaternion.copy(f0),G0.visible=!1,b0.add(G0),K9.push({obj:G0,from:KJ,to:JJ,qFrom:f0,qTo:VJ,elapsed:-(c+s*0.3+x0*0.055),duration:0.42,revela:s,ultima:x0===E0-1})})})}function nY(S,c=0){C7=S;{let H0=S&&(S.phase==="handEnd"||S.phase==="seriesEnd")&&S.result,C0=H0?S.handNo+":"+S.phase:"";if(C0&&C0!==H6)X6={t:b8.elapsedTime+0.5,team:S.result.team??null};if(!H0)X6=null;H6=C0}if(k9!==c)N6(c);let J0=!S||S.phase==="lobby"?"pila":"mano"+S.handNo;if(J0!==W9){W9=J0,UQ(b0),T8.clear(),K9=K9.filter((H0)=>H0.reparto);for(let H0 of k0)if(H0)H0.jugada=null;if(J0==="pila")C9()}if(S&&S.chain?.length){let H0=V5(S.chain,S.moves),C0=S.event,x0=["domino","capicua","tranque"].includes(C0?.type),u0=S.moves[S.moves.length-1],G0=C0?.type==="domino"||C0?.type==="capicua",f0=C0?.type==="play"?C0.tile:x0&&u0?.type==="play"?u0.tile:null;S.chain.forEach((KJ,JJ)=>{if(T8.has(KJ.id))return;let VJ=_0(KJ.x,KJ.y),xJ=Y0(H0[JJ]);if(VJ.position.copy(xJ),VJ.rotation.y=H0[JJ].yaw,VJ.updateMatrix(),b0.add(VJ),T8.set(KJ.id,VJ),KJ.id!==f0||KJ.seat==null)return;zJ(KJ.seat,0,kJ);let DJ={obj:VJ,from:kJ.position.clone(),to:xJ.clone(),qFrom:kJ.quaternion.clone(),qTo:VJ.quaternion.clone(),elapsed:0,duration:G0?0.7:0.55,golpe:G0};if(VJ.position.copy(DJ.from),VJ.quaternion.copy(DJ.qFrom),K9.push(DJ),x0)d0(xJ,KJ.seat,G0);UK=performance.now();let P8=k0[KJ.seat];if(B$={p:xJ.clone(),t:b8.elapsedTime+DJ.duration},P8)P8.reaction={time:b8.elapsedTime},P8.jugada={t0:b8.elapsedTime,obj:VJ,anim:DJ,hasta:xJ.clone()}})}if(S?.phase==="playing"&&S.handNo!==P7&&S.moves.length===0){P7=S.handNo,UQ(F8),K9=K9.filter((H0)=>!H0.reparto),k$=performance.now()+3300;for(let H0=0;H0<4;H0++)nJ[H0]=Array.from({length:7},(C0,x0)=>(x0-3)*V0.rackSpacing);for(let H0=0;H0<28;H0++){let C0=H0%4,x0=Math.floor(H0/4),u0=_0(0,0,!0),G0=bJ[H0],f0=ZJ(G0.x,oJ,G0.z);u0.position.copy(f0),u0.rotation.y=G0.ry,F8.add(u0);let KJ=zJ(C0,(x0-3)*V0.rackSpacing,new jJ);K9.push({obj:u0,from:f0,to:KJ.position.clone(),qFrom:u0.quaternion.clone(),qTo:KJ.quaternion.clone(),elapsed:-H0*0.065,duration:1.1,reparto:!0})}}let s=S?.moves?.[S.moves.length-1],E0=S?S.handNo+":"+S.moves.length:"";if(s?.type==="pass"&&x9!==E0){x9=E0;let H0=k0[s.seat];if(H0)H0.toque={t0:b8.elapsedTime}}{let H0=S&&(S.phase==="handEnd"||S.phase==="seriesEnd")&&S.revealed,C0=H0?"r"+S.handNo:"";if(!H0)l0="",X8.clear();else if(C0!==l0){l0=C0;let x0=S.result?.type;C$(S,x0==="domino"||x0==="capicua"?3.4:x0==="tranque"?2.5:1.2)}}Y8=[0,1,2,3].map((H0)=>!S||S.phase==="lobby"?0:S.counts[H0]??0),N0.visible=!1,YQ=S?.phase==="playing"&&S.chain?.length?D5(S.chain,S.moves):null}let b8=new mZ,NQ=0,NK=0,P$=0,GQ=60,sY=!1,I$=!1,FQ=null,G6="high",iY=null,z$=performance.now(),A$=0,oY=!1,p5=new URLSearchParams(location.search).has("debug"),aY=F.intensity,I7=ZJ(),l5=ZJ(0,V0.surfaceY,0);function GK(){if(sY||I$){FQ=null;return}FQ=requestAnimationFrame(GK);let S=b8.getDelta(),c=Math.min(S,0.06),J0=iY??b8.elapsedTime,s=performance.now();if(NK++,P$+=S,P$>1){if(GQ=NK/P$,NK=0,P$=0,!W&&!A$&&G6==="high"&&s-z$>9000&&s-z$<30000&&GQ<30)A$=s,FK.quality("low"),dispatchEvent(new CustomEvent("mesa:calidad",{detail:"low"}));else if(!W&&G6==="low"&&!oY&&s-(A$||z$)>9000&&s-(A$||z$)<40000&&GQ<20)oY=!0,FK.quality("min"),dispatchEvent(new CustomEvent("mesa:calidad",{detail:"min"}))}NQ++,K.info.reset();let E0=document.documentElement.classList.contains("reduced");if(o&&b8.elapsedTime>o.at)K8={from:Z.position.clone(),to:o.pos,fromTarget:X.target.clone(),toTarget:o.target,t:0,dur:1.2},o=null,X.minDistance=j0;let H0=0;if(r>=0){let G0=b8.elapsedTime-r;if(G0<0.5){let f0=0.0045*Math.exp(-G0*8)*Math.sin(G0*Y6*18);b0.position.y=f0,PJ.position.y=f0,H0=E0?0:0.004*Math.exp(-G0*9),F.intensity=aY*(1+0.35*Math.exp(-G0*14))}else r=-1,b0.position.y=0,PJ.position.y=0,F.intensity=aY}if(K8){K8.t=Math.min(1,K8.t+c/(K8.dur||1.1));let G0=_J(K8.t);if(Z.position.lerpVectors(K8.from,K8.to,G0),X.target.lerpVectors(K8.fromTarget,K8.toTarget,G0),K8.t===1)K8=null}if(!E0)K0.rotation.z=J0*3.5,i.rotation.z=Math.sin(J0*0.47)*0.009,n0.update(J0),FJ.update(J0);let C0=C7,x0={dt:c,jugando:C0?.phase==="playing",turno:C0?.turn,habla:U6,hablaTipo:M9,foco:B$,fin:X6,cabezas:k0.map((G0,f0)=>G0?.head?G0.head.getWorldPosition(XQ[f0]):null)};for(let G0 of k0){if(!G0)continue;YK(G0,J0,E0,x0),yJ(G0)}for(let G0=0;G0<z0.length;G0++)if((NQ+G0)%2===0)YK(z0[G0],J0,E0,x0);K9=K9.filter((G0)=>{if(G0.elapsed+=c,G0.elapsed<0)return!0;let f0=Math.min(1,G0.elapsed/G0.duration);if(G0.revela!=null){G0.obj.visible=!0,X8.add(G0.revela);let KJ=_J(f0);if(G0.obj.quaternion.slerpQuaternions(G0.qFrom,G0.qTo,KJ),G0.obj.position.lerpVectors(G0.from,G0.to,KJ),G0.obj.position.y+=Math.sin(f0*Math.PI)*0.012,f0>=1&&G0.ultima)dispatchEvent(new CustomEvent("mesa:aterriza",{detail:{revela:!0}}));return f0<1}if(G0.reparto)return G0.obj.position.lerpVectors(G0.from,G0.to,_J(f0)),G0.obj.position.y+=Math.sin(f0*Math.PI)*0.035,G0.obj.quaternion.slerpQuaternions(G0.qFrom,G0.qTo,_J(Math.min(1,Math.max(0,(f0-0.3)/0.7)))),f0<1;if(G0.obj.quaternion.slerpQuaternions(G0.qFrom,G0.qTo,_J(Math.min(1,f0/0.4))),G0.golpe){let KJ=Math.min(1,f0/0.62);G0.obj.position.lerpVectors(G0.from,G0.to,_J(KJ)),G0.obj.position.y+=f0<0.62?Math.sin(KJ*Math.PI/2)*0.17:0.17*(1-((f0-0.62)/0.38)**2)}else G0.obj.position.lerpVectors(G0.from,G0.to,_J(f0)),G0.obj.position.y+=Math.sin(f0*Math.PI)*0.07;if(f0>=1&&!G0.sono){if(G0.sono=!0,G0.golpe)r=b8.elapsedTime;dispatchEvent(new CustomEvent("mesa:aterriza",{detail:{golpe:!!G0.golpe}}))}return f0<1});let u0=s<k$;if(PJ.visible=!u0,!u0&&F8.children.length)UQ(F8);if(AJ(c),X.update(),!K8&&!o&&!z)Z0();if(V8.frame(J0,c,{reduced:E0,view:C0,ends:YQ,temblor:H0}),V8.render(),NQ%2===0)for(let G0 of document.querySelectorAll("[data-seatlabel]")){let f0=Number(G0.dataset.seatlabel),[KJ,JJ]=O9[f0],VJ=k0[f0]?.head,xJ=VJ&&VJ.getWorldPosition(I7).distanceTo(V8.vista.position)<l5.distanceTo(V8.vista.position)-0.2;if(xJ)I7.y-=0.3;else if(VJ)I7.y+=0.23;else I7.set(KJ,1.45,JJ);let DJ=I7.project(V8.vista),P8=!1;if(!xJ&&DJ.y>0.8&&VJ)VJ.getWorldPosition(I7).y-=0.1,DJ=I7.project(V8.vista),P8=!0;let m5=Math.min(DJ.y,0.8);G0.style.transform=`translate(${(DJ.x*0.5+0.5)*innerWidth}px,${(-m5*0.5+0.5)*innerHeight}px) translate(-50%,${xJ?"-50%":P8?"0":"-100%"})`,G0.style.visibility=DJ.z>1||Math.abs(DJ.x)>1.1||DJ.y<-1.15?"hidden":"visible"}if(NQ%30===0||NQ===1){if(window.mesaDiagnostics={cam:Z.position.toArray().map((G0)=>+G0.toFixed(2)),fps:Math.round(GQ),drawCalls:K.info.render.calls,triangles:K.info.render.triangles,characters:t0,crowd:k9,visibleCrowd:z0.length,boardTiles:C7?.chain.length||0,quality:G6,modelErrors:m},p5){window.mesaRigDebug=k0.filter(Boolean).map((f0)=>({index:f0.index,head:f0.head?.getWorldPosition(ZJ()).toArray(),hip:f0.hips?.getWorldPosition(ZJ()).toArray(),rootScale:f0.root.scale.toArray()}));let G0=document.querySelector("#perf");if(G0)G0.textContent=`${Math.round(GQ)} fps · ${K.info.render.calls} draws`}}}window.mesaCamara=(S,c)=>{K8=null,o=null,z=!0,X.minDistance=0.1,X.maxDistance=30,Z.position.set(...S),X.target.set(...c),X.update()},window.mesaCara=(S,c,J0)=>{let s=k0[S];if(s)s.caraFija=c==null?null:{p:c,s:J0??0}},window.mesaBeber=(S,c)=>{let J0=k0[S];if(!J0||!J0.bebida||J0.jugada)return;if(J0.trago&&c!=null&&J0.trago.fijo!=null)J0.trago.fijo=c;else J0.trago={t0:b8.elapsedTime,fijo:c}},window.mesaBrazo=(S)=>{let c=k0[S],J0=c?.brazos?.[1];if(!J0)return null;let s=(E0)=>E0.getWorldPosition(new _).toArray();return{codo:s(J0.antebrazo),muneca:s(J0.mano),vaso:c.bebida?c.bebida.group.position.toArray():null}},nY(null),GK();let rY=()=>{if(Z.aspect<0.95)Z.setViewOffset(innerWidth,innerHeight*1.24,0,innerHeight*0.24,innerWidth,innerHeight);else Z.clearViewOffset();Z.updateProjectionMatrix()},tY=()=>Y?0.65:G6==="min"?Math.min(devicePixelRatio,1)*0.55:G6==="low"?Math.min(devicePixelRatio,1)*0.8:Math.min(devicePixelRatio,1.5,1920/innerWidth),eY=()=>{Z.aspect=innerWidth/innerHeight,rY(),K.setPixelRatio(tY()),K.setSize(innerWidth,innerHeight),V8.resize(innerWidth,innerHeight)};rY(),window.addEventListener("resize",eY),X.addEventListener("start",()=>{K8=null,o=null}),K.domElement.addEventListener("webglcontextrestored",()=>V8.entorno?.());let FK={update:nY,setCrowd:N6,setCamera:y0,ready:Z9,sampleTime(S){iY=S;for(let c of[...k0.filter(Boolean),...z0])YK(c,S,!1);V8.frame(S,0,{reduced:!1,view:C7,ends:YQ}),V8.render()},setMode(S){M$=S,y0(S==="attract"?"attract":"table")},quality(S){G6=S;let c=S!=="high";F.castShadow=!c&&!Y;for(let[J0,s]of I0){let E0=c?0:s.clearcoat,H0=c?0:s.sheen;if(J0.clearcoat!==E0||J0.sheen!==H0)J0.clearcoat=E0,J0.sheen=H0,J0.needsUpdate=!0}G.visible=!c,U.intensity=c?H+0.1:H,K.setPixelRatio(tY()),V8.calidad(S),V8.resize(innerWidth,innerHeight)},pause(){I$=!0},resume(){if(!I$)return;if(I$=!1,b8.getDelta(),!FQ)GK()},dispose(){if(sY=!0,V8.dispose(),window.removeEventListener("mesa:botvoice",HQ),FQ)cancelAnimationFrame(FQ);window.removeEventListener("resize",eY),X.dispose(),K.dispose(),J.replaceChildren()}};return FK}export{VB as createWorld};

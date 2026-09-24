var IH="186",L7={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},V7={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zH=0,RW=1,AH=2;var l7=1,TH=2,n6=3,D7=0,D8=1,oJ=2,Q9=0,sQ=1,S9=2,LW=3,VW=4,_H=5;var s6=100,wH=101,SH=102,jH=103,yH=104,vH=200,fH=201,bH=202,hH=203,xH=204,gH=205,pH=206,mH=207,lH=208,uH=209,dH=210,cH=211,nH=212,sH=213,iH=214,oH=0,aH=1,rH=2,DW=3,tH=4,eH=5,JU=6,QU=7,$U=0,ZU=1,KU=2,V9=0,iQ=1,oQ=2,aQ=3,u7=4,rQ=5,tQ=6,eQ=7;var i6=301,d7=302,zZ=303,AZ=304,J$=306,B7=1000,o6=1001,TZ=1002,D9=1003,_Z=1004;var c7=1005;var X8=1006,a6=1007;var $9=1008;var B9=1009,WU=1010,YU=1011,Q$=1012,BW=1013,M7=1014,t9=1015,R8=1016,MW=1017,kW=1018,r6=1020,XU=35902,HU=35899,UU=1021,NU=1022,j9=1023,n7=1026,s7=1027,GU=1028,CW=1029,i7=1030,PW=1031;var IW=1033,wZ=33776,SZ=33777,jZ=33778,yZ=33779,zW=35840,AW=35841,TW=35842,_W=35843,wW=36196,SW=37492,jW=37496,yW=37488,vW=37489,vZ=37490,fW=37491,bW=37808,hW=37809,xW=37810,gW=37811,pW=37812,mW=37813,lW=37814,uW=37815,dW=37816,cW=37817,nW=37818,sW=37819,iW=37820,oW=37821,aW=36492,rW=36494,tW=36495,eW=36283,JY=36284,fZ=36285,QY=36286;var $Y=2300,bZ=2301;var ZY=0,$$=1,t6=2;var KY=0,FU=1,o7="",$8="srgb",d8="srgb-linear",WY="linear",lJ="srgb";var EU=512,qU=513,OU=514,hZ=515,RU=516,LU=517,xZ=518,VU=519;var YY="300 es",XY=2000;function wN(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function SN(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function l6(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function DU(){let J=l6("canvas");return J.style.display="block",J}var vX={},u6=null;function uQ(...J){let Q="THREE."+J.shift();if(u6)u6("log",Q,...J);else console.log(Q,...J)}function BU(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function r0(...J){J=BU(J);let Q="THREE."+J.shift();if(u6)u6("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function $J(...J){J=BU(J);let Q="THREE."+J.shift();if(u6)u6("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function g7(...J){let Q=J.join(" ");if(Q in vX)return;vX[Q]=!0,r0(...J)}function MU(J,Q,$){return new Promise(function(Z,K){function W(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:K();break;case J.TIMEOUT_EXPIRED:setTimeout(W,$);break;default:Z()}}setTimeout(W,$)})}var kU={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class M9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let K=Z.indexOf(Q);if(K!==-1)Z.splice(K,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let K=0,W=Z.length;K<W;K++)Z[K].call(this,J);J.target=null}}}var C8=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fX=1234567,gQ=Math.PI/180,p7=180/Math.PI;function J9(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(C8[J&255]+C8[J>>8&255]+C8[J>>16&255]+C8[J>>24&255]+"-"+C8[Q&255]+C8[Q>>8&255]+"-"+C8[Q>>16&15|64]+C8[Q>>24&255]+"-"+C8[$&63|128]+C8[$>>8&255]+"-"+C8[$>>16&255]+C8[$>>24&255]+C8[Z&255]+C8[Z>>8&255]+C8[Z>>16&255]+C8[Z>>24&255]).toLowerCase()}function FJ(J,Q,$){return Math.max(Q,Math.min($,J))}function HY(J,Q){return(J%Q+Q)%Q}function jN(J,Q,$,Z,K){return Z+(J-Q)*(K-Z)/($-Q)}function yN(J,Q,$){if(J!==Q)return($-J)/(Q-J);else return 0}function pQ(J,Q,$){return(1-$)*J+$*Q}function vN(J,Q,$,Z){return pQ(J,Q,1-Math.exp(-$*Z))}function fN(J,Q=1){return Q-Math.abs(HY(J,Q*2)-Q)}function bN(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*(3-2*J)}function hN(J,Q,$){if(J<=Q)return 0;if(J>=$)return 1;return J=(J-Q)/($-Q),J*J*J*(J*(J*6-15)+10)}function xN(J,Q){return J+Math.floor(Math.random()*(Q-J+1))}function gN(J,Q){return J+Math.random()*(Q-J)}function pN(J){return J*(0.5-Math.random())}function mN(J){if(J!==void 0)fX=J;let Q=fX+=1831565813;return Q=Math.imul(Q^Q>>>15,Q|1),Q^=Q+Math.imul(Q^Q>>>7,Q|61),((Q^Q>>>14)>>>0)/4294967296}function lN(J){return J*gQ}function uN(J){return J*p7}function dN(J){return J>0&&Number.isInteger(J)&&2**Math.round(Math.log2(J))===J}function cN(J){return Math.pow(2,Math.ceil(Math.log(J)/Math.LN2))}function nN(J){return Math.pow(2,Math.floor(Math.log(J)/Math.LN2))}function sN(J,Q,$,Z,K){let{cos:W,sin:Y}=Math,X=W($/2),H=Y($/2),U=W((Q+Z)/2),G=Y((Q+Z)/2),F=W((Q-Z)/2),N=Y((Q-Z)/2),q=W((Z-Q)/2),O=Y((Z-Q)/2);switch(K){case"XYX":J.set(X*G,H*F,H*N,X*U);break;case"YZY":J.set(H*N,X*G,H*F,X*U);break;case"ZXZ":J.set(H*F,H*N,X*G,X*U);break;case"XZX":J.set(X*G,H*O,H*q,X*U);break;case"YXY":J.set(H*q,X*G,H*O,X*U);break;case"ZYZ":J.set(H*O,H*q,X*G,X*U);break;default:r0("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+K)}}function R9(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:case Uint8ClampedArray:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("THREE.MathUtils: Invalid component type.")}}function pJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("THREE.MathUtils: Invalid component type.")}}var y9={DEG2RAD:gQ,RAD2DEG:p7,generateUUID:J9,clamp:FJ,euclideanModulo:HY,mapLinear:jN,inverseLerp:yN,lerp:pQ,damp:vN,pingpong:fN,smoothstep:bN,smootherstep:hN,randInt:xN,randFloat:gN,randFloatSpread:pN,seededRandom:mN,degToRad:lN,radToDeg:uN,isPowerOfTwo:dN,ceilPowerOfTwo:cN,floorPowerOfTwo:nN,setQuaternionFromProperEuler:sN,normalize:pJ,denormalize:R9};class q0{static{q0.prototype.isVector2=!0}constructor(J=0,Q=0){this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("THREE.Vector2: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("THREE.Vector2: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=FJ(this.x,J.x,Q.x),this.y=FJ(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=FJ(this.x,J,Q),this.y=FJ(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(FJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(FJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=this.x-J.x,W=this.y-J.y;return this.x=K*$-W*Z+J.x,this.y=K*Z+W*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class HJ{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,K,W,Y){let X=$[Z+0],H=$[Z+1],U=$[Z+2],G=$[Z+3],F=K[W+0],N=K[W+1],q=K[W+2],O=K[W+3];if(G!==O||X!==F||H!==N||U!==q){let D=X*F+H*N+U*q+G*O;if(D<0)F=-F,N=-N,q=-q,O=-O,D=-D;let R=1-Y;if(D<0.9995){let E=Math.acos(D),M=Math.sin(E);R=Math.sin(R*E)/M,Y=Math.sin(Y*E)/M,X=X*R+F*Y,H=H*R+N*Y,U=U*R+q*Y,G=G*R+O*Y}else{X=X*R+F*Y,H=H*R+N*Y,U=U*R+q*Y,G=G*R+O*Y;let E=1/Math.sqrt(X*X+H*H+U*U+G*G);X*=E,H*=E,U*=E,G*=E}}J[Q]=X,J[Q+1]=H,J[Q+2]=U,J[Q+3]=G}static multiplyQuaternionsFlat(J,Q,$,Z,K,W){let Y=$[Z],X=$[Z+1],H=$[Z+2],U=$[Z+3],G=K[W],F=K[W+1],N=K[W+2],q=K[W+3];return J[Q]=Y*q+U*G+X*N-H*F,J[Q+1]=X*q+U*F+H*G-Y*N,J[Q+2]=H*q+U*N+Y*F-X*G,J[Q+3]=U*q-Y*G-X*F-H*N,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:K,_order:W}=J,Y=Math.cos,X=Math.sin,H=Y($/2),U=Y(Z/2),G=Y(K/2),F=X($/2),N=X(Z/2),q=X(K/2);switch(W){case"XYZ":this._x=F*U*G+H*N*q,this._y=H*N*G-F*U*q,this._z=H*U*q+F*N*G,this._w=H*U*G-F*N*q;break;case"YXZ":this._x=F*U*G+H*N*q,this._y=H*N*G-F*U*q,this._z=H*U*q-F*N*G,this._w=H*U*G+F*N*q;break;case"ZXY":this._x=F*U*G-H*N*q,this._y=H*N*G+F*U*q,this._z=H*U*q+F*N*G,this._w=H*U*G-F*N*q;break;case"ZYX":this._x=F*U*G-H*N*q,this._y=H*N*G+F*U*q,this._z=H*U*q-F*N*G,this._w=H*U*G+F*N*q;break;case"YZX":this._x=F*U*G+H*N*q,this._y=H*N*G+F*U*q,this._z=H*U*q-F*N*G,this._w=H*U*G-F*N*q;break;case"XZY":this._x=F*U*G-H*N*q,this._y=H*N*G-F*U*q,this._z=H*U*q+F*N*G,this._w=H*U*G+F*N*q;break;default:r0("Quaternion: .setFromEuler() encountered an unknown order: "+W)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],K=Q[8],W=Q[1],Y=Q[5],X=Q[9],H=Q[2],U=Q[6],G=Q[10],F=$+Y+G;if(F>0){let N=0.5/Math.sqrt(F+1);this._w=0.25/N,this._x=(U-X)*N,this._y=(K-H)*N,this._z=(W-Z)*N}else if($>Y&&$>G){let N=2*Math.sqrt(1+$-Y-G);this._w=(U-X)/N,this._x=0.25*N,this._y=(Z+W)/N,this._z=(K+H)/N}else if(Y>G){let N=2*Math.sqrt(1+Y-$-G);this._w=(K-H)/N,this._x=(Z+W)/N,this._y=0.25*N,this._z=(X+U)/N}else{let N=2*Math.sqrt(1+G-$-Y);this._w=(W-Z)/N,this._x=(K+H)/N,this._y=(X+U)/N,this._z=0.25*N}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(FJ(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,Y=Q._x,X=Q._y,H=Q._z,U=Q._w;return this._x=$*U+W*Y+Z*H-K*X,this._y=Z*U+W*X+K*Y-$*H,this._z=K*U+W*H+$*X-Z*Y,this._w=W*U-$*Y-Z*X-K*H,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:Z,_z:K,_w:W}=J,Y=this.dot(J);if(Y<0)$=-$,Z=-Z,K=-K,W=-W,Y=-Y;let X=1-Q;if(Y<0.9995){let H=Math.acos(Y),U=Math.sin(H);X=Math.sin(X*H)/U,Q=Math.sin(Q*H)/U,this._x=this._x*X+$*Q,this._y=this._y*X+Z*Q,this._z=this._z*X+K*Q,this._w=this._w*X+W*Q,this._onChangeCallback()}else this._x=this._x*X+$*Q,this._y=this._y*X+Z*Q,this._z=this._z*X+K*Q,this._w=this._w*X+W*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),K=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),K*Math.sin(Q),K*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class _{static{_.prototype.isVector3=!0}constructor(J=0,Q=0,$=0){this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("THREE.Vector3: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("THREE.Vector3: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(bX.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(bX.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[3]*$+K[6]*Z,this.y=K[1]*Q+K[4]*$+K[7]*Z,this.z=K[2]*Q+K[5]*$+K[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements,W=1/(K[3]*Q+K[7]*$+K[11]*Z+K[15]);return this.x=(K[0]*Q+K[4]*$+K[8]*Z+K[12])*W,this.y=(K[1]*Q+K[5]*$+K[9]*Z+K[13])*W,this.z=(K[2]*Q+K[6]*$+K[10]*Z+K[14])*W,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,K=J.x,W=J.y,Y=J.z,X=J.w,H=2*(W*Z-Y*$),U=2*(Y*Q-K*Z),G=2*(K*$-W*Q);return this.x=Q+X*H+W*G-Y*U,this.y=$+X*U+Y*H-K*G,this.z=Z+X*G+K*U-W*H,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*Z,this.y=K[1]*Q+K[5]*$+K[9]*Z,this.z=K[2]*Q+K[6]*$+K[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=FJ(this.x,J.x,Q.x),this.y=FJ(this.y,J.y,Q.y),this.z=FJ(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=FJ(this.x,J,Q),this.y=FJ(this.y,J,Q),this.z=FJ(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(FJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:K}=J,W=Q.x,Y=Q.y,X=Q.z;return this.x=Z*X-K*Y,this.y=K*W-$*X,this.z=$*Y-Z*W,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return xK.copy(this).projectOnVector(J),this.sub(xK)}reflect(J){return this.sub(xK.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(FJ($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var xK=new _,bX=new HJ;class XJ{static{XJ.prototype.isMatrix3=!0}constructor(J,Q,$,Z,K,W,Y,X,H){if(this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,Y,X,H)}set(J,Q,$,Z,K,W,Y,X,H){let U=this.elements;return U[0]=J,U[1]=Z,U[2]=Y,U[3]=Q,U[4]=K,U[5]=X,U[6]=$,U[7]=W,U[8]=H,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],Y=$[3],X=$[6],H=$[1],U=$[4],G=$[7],F=$[2],N=$[5],q=$[8],O=Z[0],D=Z[3],R=Z[6],E=Z[1],M=Z[4],k=Z[7],V=Z[2],L=Z[5],P=Z[8];return K[0]=W*O+Y*E+X*V,K[3]=W*D+Y*M+X*L,K[6]=W*R+Y*k+X*P,K[1]=H*O+U*E+G*V,K[4]=H*D+U*M+G*L,K[7]=H*R+U*k+G*P,K[2]=F*O+N*E+q*V,K[5]=F*D+N*M+q*L,K[8]=F*R+N*k+q*P,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],Y=J[5],X=J[6],H=J[7],U=J[8];return Q*W*U-Q*Y*H-$*K*U+$*Y*X+Z*K*H-Z*W*X}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],Y=J[5],X=J[6],H=J[7],U=J[8],G=U*W-Y*H,F=Y*X-U*K,N=H*K-W*X,q=Q*G+$*F+Z*N;if(q===0)return this.set(0,0,0,0,0,0,0,0,0);let O=1/q;return J[0]=G*O,J[1]=(Z*H-U*$)*O,J[2]=(Y*$-Z*W)*O,J[3]=F*O,J[4]=(U*Q-Z*X)*O,J[5]=(Z*K-Y*Q)*O,J[6]=N*O,J[7]=($*X-H*Q)*O,J[8]=(W*Q-$*K)*O,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,K,W,Y){let X=Math.cos(K),H=Math.sin(K);return this.set($*X,$*H,-$*(X*W+H*Y)+W+J,-Z*H,Z*X,-Z*(-H*W+X*Y)+Y+Q,0,0,1),this}scale(J,Q){return g7("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gK.makeScale(J,Q)),this}rotate(J){return g7("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gK.makeRotation(-J)),this}translate(J,Q){return g7("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gK.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var gK=new XJ,hX=new XJ().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),xX=new XJ().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function iN(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(K,W,Y){if(this.enabled===!1||W===Y||!W||!Y)return K;if(this.spaces[W].transfer==="srgb")K.r=r9(K.r),K.g=r9(K.g),K.b=r9(K.b);if(this.spaces[W].primaries!==this.spaces[Y].primaries)K.applyMatrix3(this.spaces[W].toXYZ),K.applyMatrix3(this.spaces[Y].fromXYZ);if(this.spaces[Y].transfer==="srgb")K.r=p6(K.r),K.g=p6(K.g),K.b=p6(K.b);return K},workingToColorSpace:function(K,W){return this.convert(K,this.workingColorSpace,W)},colorSpaceToWorking:function(K,W){return this.convert(K,W,this.workingColorSpace)},getPrimaries:function(K){return this.spaces[K].primaries},getTransfer:function(K){if(K==="")return"linear";return this.spaces[K].transfer},getToneMappingMode:function(K){return this.spaces[K].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(K,W=this.workingColorSpace){return K.fromArray(this.spaces[W].luminanceCoefficients)},define:function(K){Object.assign(this.spaces,K)},_getMatrix:function(K,W,Y){return K.copy(this.spaces[W].toXYZ).multiply(this.spaces[Y].fromXYZ)},_getDrawingBufferColorSpace:function(K){return this.spaces[K].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(K=this.workingColorSpace){return this.spaces[K].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(K,W){return g7("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(K,W)},toWorkingColorSpace:function(K,W){return g7("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(K,W)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:hX,fromXYZ:xX,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:hX,fromXYZ:xX,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var qJ=iN();function r9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function p6(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var k6;class UY{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(k6===void 0)k6=l6("canvas");k6.width=J.width,k6.height=J.height;let Z=k6.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=k6}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=l6("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),K=Z.data;for(let W=0;W<K.length;W++)K[W]=r9(K[W]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(r9(Q[$]/255)*255);else Q[$]=r9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return r0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var oN=0;class Z${constructor(J=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:oN++}),this.uuid=J9(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayWidth,Q.displayHeight,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let K;if(Array.isArray(Z)){K=[];for(let W=0,Y=Z.length;W<Y;W++)if(Z[W].isDataTexture)K.push(pK(Z[W].image));else K.push(pK(Z[W]))}else K=pK(Z);$.url=K}if(!Q)J.images[this.uuid]=$;return $}}function pK(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return UY.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return r0("Texture: Unable to serialize Texture."),{}}var aN=0,mK=new _;class Q8 extends M9{constructor(J=Q8.DEFAULT_IMAGE,Q=Q8.DEFAULT_MAPPING,$=1001,Z=1001,K=1006,W=1008,Y=1023,X=1009,H=Q8.DEFAULT_ANISOTROPY,U=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:aN++}),this.uuid=J9(),this.name="",this.source=new Z$(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=K,this.minFilter=W,this.anisotropy=H,this.format=Y,this.internalFormat=null,this.type=X,this.offset=new q0(0,0),this.repeat=new q0(1,1),this.center=new q0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new XJ,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=U,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(mK).x}get height(){return this.source.getSize(mK).y}get depth(){return this.source.getSize(mK).z}get image(){return this.source.data}set image(J){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.normalized=J.normalized,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){r0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){r0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}Q8.DEFAULT_IMAGE=null;Q8.DEFAULT_MAPPING=300;Q8.DEFAULT_ANISOTROPY=1;class mJ{static{mJ.prototype.isVector4=!0}constructor(J=0,Q=0,$=0,Z=1){this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("THREE.Vector4: index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("THREE.Vector4: index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=this.w,W=J.elements;return this.x=W[0]*Q+W[4]*$+W[8]*Z+W[12]*K,this.y=W[1]*Q+W[5]*$+W[9]*Z+W[13]*K,this.z=W[2]*Q+W[6]*$+W[10]*Z+W[14]*K,this.w=W[3]*Q+W[7]*$+W[11]*Z+W[15]*K,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,K,W=0.01,Y=0.1,X=J.elements,H=X[0],U=X[4],G=X[8],F=X[1],N=X[5],q=X[9],O=X[2],D=X[6],R=X[10];if(Math.abs(U-F)<0.01&&Math.abs(G-O)<0.01&&Math.abs(q-D)<0.01){if(Math.abs(U+F)<0.1&&Math.abs(G+O)<0.1&&Math.abs(q+D)<0.1&&Math.abs(H+N+R-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let M=(H+1)/2,k=(N+1)/2,V=(R+1)/2,L=(U+F)/4,P=(G+O)/4,T=(q+D)/4;if(M>k&&M>V)if(M<0.01)$=0,Z=0.707106781,K=0.707106781;else $=Math.sqrt(M),Z=L/$,K=P/$;else if(k>V)if(k<0.01)$=0.707106781,Z=0,K=0.707106781;else Z=Math.sqrt(k),$=L/Z,K=T/Z;else if(V<0.01)$=0.707106781,Z=0.707106781,K=0;else K=Math.sqrt(V),$=P/K,Z=T/K;return this.set($,Z,K,Q),this}let E=Math.sqrt((D-q)*(D-q)+(G-O)*(G-O)+(F-U)*(F-U));if(Math.abs(E)<0.001)E=1;return this.x=(D-q)/E,this.y=(G-O)/E,this.z=(F-U)/E,this.w=Math.acos((H+N+R-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=FJ(this.x,J.x,Q.x),this.y=FJ(this.y,J.y,Q.y),this.z=FJ(this.z,J.z,Q.z),this.w=FJ(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=FJ(this.x,J,Q),this.y=FJ(this.y,J,Q),this.z=FJ(this.z,J,Q),this.w=FJ(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(FJ($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class NY extends M9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new mJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new mJ(0,0,J,Q),this.textures=[];let Z={width:J,height:Q,depth:$.depth},K=new Q8(Z),W=$.count;for(let Y=0;Y<W;Y++)this.textures[Y]=K.clone(),this.textures[Y].isRenderTargetTexture=!0,this.textures[Y].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveColorBuffer=$.resolveColorBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this.storeMultisampledColorBuffer=$.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=$.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=$.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview,this.useArrayDepthTexture=$.useArrayDepthTexture}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null&&this._depthTexture.renderTarget===this)this._depthTexture.renderTarget=null;if(J!==null&&J.renderTarget===null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,K=this.textures.length;Z<K;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new Z$(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveColorBuffer=J.resolveColorBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,this.storeMultisampledColorBuffer=J.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=J.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=J.storeMultisampledStencilBuffer,J.depthTexture!==null)if(J.depthTexture.renderTarget===J){let Q=J.depthTexture.clone();Q.renderTarget=null,this.depthTexture=Q}else this.depthTexture=J.depthTexture;return this.samples=J.samples,this.multiview=J.multiview,this.useArrayDepthTexture=J.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Z8 extends NY{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class gZ extends Q8{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class GY extends Q8{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(J){return super.copy(J),this.wrapR=J.wrapR,this}}class QJ{static{QJ.prototype.isMatrix4=!0}constructor(J,Q,$,Z,K,W,Y,X,H,U,G,F,N,q,O,D){if(this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,W,Y,X,H,U,G,F,N,q,O,D)}set(J,Q,$,Z,K,W,Y,X,H,U,G,F,N,q,O,D){let R=this.elements;return R[0]=J,R[4]=Q,R[8]=$,R[12]=Z,R[1]=K,R[5]=W,R[9]=Y,R[13]=X,R[2]=H,R[6]=U,R[10]=G,R[14]=F,R[3]=N,R[7]=q,R[11]=O,R[15]=D,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new QJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinantAffine()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinantAffine()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/C6.setFromMatrixColumn(J,0).length(),K=1/C6.setFromMatrixColumn(J,1).length(),W=1/C6.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*K,Q[5]=$[5]*K,Q[6]=$[6]*K,Q[7]=0,Q[8]=$[8]*W,Q[9]=$[9]*W,Q[10]=$[10]*W,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z,W=Math.cos($),Y=Math.sin($),X=Math.cos(Z),H=Math.sin(Z),U=Math.cos(K),G=Math.sin(K);if(J.order==="XYZ"){let F=W*U,N=W*G,q=Y*U,O=Y*G;Q[0]=X*U,Q[4]=-X*G,Q[8]=H,Q[1]=N+q*H,Q[5]=F-O*H,Q[9]=-Y*X,Q[2]=O-F*H,Q[6]=q+N*H,Q[10]=W*X}else if(J.order==="YXZ"){let F=X*U,N=X*G,q=H*U,O=H*G;Q[0]=F+O*Y,Q[4]=q*Y-N,Q[8]=W*H,Q[1]=W*G,Q[5]=W*U,Q[9]=-Y,Q[2]=N*Y-q,Q[6]=O+F*Y,Q[10]=W*X}else if(J.order==="ZXY"){let F=X*U,N=X*G,q=H*U,O=H*G;Q[0]=F-O*Y,Q[4]=-W*G,Q[8]=q+N*Y,Q[1]=N+q*Y,Q[5]=W*U,Q[9]=O-F*Y,Q[2]=-W*H,Q[6]=Y,Q[10]=W*X}else if(J.order==="ZYX"){let F=W*U,N=W*G,q=Y*U,O=Y*G;Q[0]=X*U,Q[4]=q*H-N,Q[8]=F*H+O,Q[1]=X*G,Q[5]=O*H+F,Q[9]=N*H-q,Q[2]=-H,Q[6]=Y*X,Q[10]=W*X}else if(J.order==="YZX"){let F=W*X,N=W*H,q=Y*X,O=Y*H;Q[0]=X*U,Q[4]=O-F*G,Q[8]=q*G+N,Q[1]=G,Q[5]=W*U,Q[9]=-Y*U,Q[2]=-H*U,Q[6]=N*G+q,Q[10]=F-O*G}else if(J.order==="XZY"){let F=W*X,N=W*H,q=Y*X,O=Y*H;Q[0]=X*U,Q[4]=-G,Q[8]=H*U,Q[1]=F*G+O,Q[5]=W*U,Q[9]=N*G-q,Q[2]=q*G-N,Q[6]=Y*U,Q[10]=O*G+F}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(rN,J,tN)}lookAt(J,Q,$){let Z=this.elements;if(m8.subVectors(J,Q),m8.lengthSq()===0)m8.z=1;if(m8.normalize(),U7.crossVectors($,m8),U7.lengthSq()===0){if(Math.abs($.z)===1)m8.x+=0.0001;else m8.z+=0.0001;m8.normalize(),U7.crossVectors($,m8)}return U7.normalize(),n$.crossVectors(m8,U7),Z[0]=U7.x,Z[4]=n$.x,Z[8]=m8.x,Z[1]=U7.y,Z[5]=n$.y,Z[9]=m8.y,Z[2]=U7.z,Z[6]=n$.z,Z[10]=m8.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,W=$[0],Y=$[4],X=$[8],H=$[12],U=$[1],G=$[5],F=$[9],N=$[13],q=$[2],O=$[6],D=$[10],R=$[14],E=$[3],M=$[7],k=$[11],V=$[15],L=Z[0],P=Z[4],T=Z[8],B=Z[12],z=Z[1],d=Z[5],b=Z[9],n=Z[13],Z0=Z[2],v=Z[6],y=Z[10],u=Z[14],I=Z[3],x=Z[7],h=Z[11],f=Z[15];return K[0]=W*L+Y*z+X*Z0+H*I,K[4]=W*P+Y*d+X*v+H*x,K[8]=W*T+Y*b+X*y+H*h,K[12]=W*B+Y*n+X*u+H*f,K[1]=U*L+G*z+F*Z0+N*I,K[5]=U*P+G*d+F*v+N*x,K[9]=U*T+G*b+F*y+N*h,K[13]=U*B+G*n+F*u+N*f,K[2]=q*L+O*z+D*Z0+R*I,K[6]=q*P+O*d+D*v+R*x,K[10]=q*T+O*b+D*y+R*h,K[14]=q*B+O*n+D*u+R*f,K[3]=E*L+M*z+k*Z0+V*I,K[7]=E*P+M*d+k*v+V*x,K[11]=E*T+M*b+k*y+V*h,K[15]=E*B+M*n+k*u+V*f,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[12],W=J[1],Y=J[5],X=J[9],H=J[13],U=J[2],G=J[6],F=J[10],N=J[14],q=J[3],O=J[7],D=J[11],R=J[15],E=X*N-H*F,M=Y*N-H*G,k=Y*F-X*G,V=W*N-H*U,L=W*F-X*U,P=W*G-Y*U;return Q*(O*E-D*M+R*k)-$*(q*E-D*V+R*L)+Z*(q*M-O*V+R*P)-K*(q*k-O*L+D*P)}determinantAffine(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[1],W=J[5],Y=J[9],X=J[2],H=J[6],U=J[10];return Q*(W*U-Y*H)-$*(K*U-Y*X)+Z*(K*H-W*X)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],W=J[4],Y=J[5],X=J[6],H=J[7],U=J[8],G=J[9],F=J[10],N=J[11],q=J[12],O=J[13],D=J[14],R=J[15],E=Q*Y-$*W,M=Q*X-Z*W,k=Q*H-K*W,V=$*X-Z*Y,L=$*H-K*Y,P=Z*H-K*X,T=U*O-G*q,B=U*D-F*q,z=U*R-N*q,d=G*D-F*O,b=G*R-N*O,n=F*R-N*D,Z0=E*n-M*b+k*d+V*z-L*B+P*T;if(Z0===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let v=1/Z0;return J[0]=(Y*n-X*b+H*d)*v,J[1]=(Z*b-$*n-K*d)*v,J[2]=(O*P-D*L+R*V)*v,J[3]=(F*L-G*P-N*V)*v,J[4]=(X*z-W*n-H*B)*v,J[5]=(Q*n-Z*z+K*B)*v,J[6]=(D*k-q*P-R*M)*v,J[7]=(U*P-F*k+N*M)*v,J[8]=(W*b-Y*z+H*T)*v,J[9]=($*z-Q*b-K*T)*v,J[10]=(q*L-O*k+R*E)*v,J[11]=(G*k-U*L-N*E)*v,J[12]=(Y*B-W*d-X*T)*v,J[13]=(Q*d-$*B+Z*T)*v,J[14]=(O*M-q*V-D*E)*v,J[15]=(U*V-G*M+F*E)*v,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=K,Q[1]*=$,Q[5]*=Z,Q[9]*=K,Q[2]*=$,Q[6]*=Z,Q[10]*=K,Q[3]*=$,Q[7]*=Z,Q[11]*=K,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=1-$,W=J.x,Y=J.y,X=J.z,H=K*W,U=K*Y;return this.set(H*W+$,H*Y-Z*X,H*X+Z*Y,0,H*Y+Z*X,U*Y+$,U*X-Z*W,0,H*X-Z*Y,U*X+Z*W,K*X*X+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,K,W){return this.set(1,$,K,0,J,1,W,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,K=Q._x,W=Q._y,Y=Q._z,X=Q._w,H=K+K,U=W+W,G=Y+Y,F=K*H,N=K*U,q=K*G,O=W*U,D=W*G,R=Y*G,E=X*H,M=X*U,k=X*G,V=$.x,L=$.y,P=$.z;return Z[0]=(1-(O+R))*V,Z[1]=(N+k)*V,Z[2]=(q-M)*V,Z[3]=0,Z[4]=(N-k)*L,Z[5]=(1-(F+R))*L,Z[6]=(D+E)*L,Z[7]=0,Z[8]=(q+M)*P,Z[9]=(D-E)*P,Z[10]=(1-(F+O))*P,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let K=this.determinantAffine();if(K===0)return $.set(1,1,1),Q.identity(),this;let W=C6.set(Z[0],Z[1],Z[2]).length(),Y=C6.set(Z[4],Z[5],Z[6]).length(),X=C6.set(Z[8],Z[9],Z[10]).length();if(K<0)W=-W;E9.copy(this);let H=1/W,U=1/Y,G=1/X;return E9.elements[0]*=H,E9.elements[1]*=H,E9.elements[2]*=H,E9.elements[4]*=U,E9.elements[5]*=U,E9.elements[6]*=U,E9.elements[8]*=G,E9.elements[9]*=G,E9.elements[10]*=G,Q.setFromRotationMatrix(E9),$.x=W,$.y=Y,$.z=X,this}makePerspective(J,Q,$,Z,K,W,Y=2000,X=!1){let H=this.elements,U=2*K/(Q-J),G=2*K/($-Z),F=(Q+J)/(Q-J),N=($+Z)/($-Z),q,O;if(X)q=K/(W-K),O=W*K/(W-K);else if(Y===2000)q=-(W+K)/(W-K),O=-2*W*K/(W-K);else if(Y===2001)q=-W/(W-K),O=-W*K/(W-K);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+Y);return H[0]=U,H[4]=0,H[8]=F,H[12]=0,H[1]=0,H[5]=G,H[9]=N,H[13]=0,H[2]=0,H[6]=0,H[10]=q,H[14]=O,H[3]=0,H[7]=0,H[11]=-1,H[15]=0,this}makeOrthographic(J,Q,$,Z,K,W,Y=2000,X=!1){let H=this.elements,U=2/(Q-J),G=2/($-Z),F=-(Q+J)/(Q-J),N=-($+Z)/($-Z),q,O;if(X)q=1/(W-K),O=W/(W-K);else if(Y===2000)q=-2/(W-K),O=-(W+K)/(W-K);else if(Y===2001)q=-1/(W-K),O=-K/(W-K);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+Y);return H[0]=U,H[4]=0,H[8]=0,H[12]=F,H[1]=0,H[5]=G,H[9]=0,H[13]=N,H[2]=0,H[6]=0,H[10]=q,H[14]=O,H[3]=0,H[7]=0,H[11]=0,H[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var C6=new _,E9=new QJ,rN=new _(0,0,0),tN=new _(1,1,1),U7=new _,n$=new _,m8=new _,gX=new QJ,pX=new HJ;class L9{constructor(J=0,Q=0,$=0,Z=L9.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,K=Z[0],W=Z[4],Y=Z[8],X=Z[1],H=Z[5],U=Z[9],G=Z[2],F=Z[6],N=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(FJ(Y,-1,1)),Math.abs(Y)<0.9999999)this._x=Math.atan2(-U,N),this._z=Math.atan2(-W,K);else this._x=Math.atan2(F,H),this._z=0;break;case"YXZ":if(this._x=Math.asin(-FJ(U,-1,1)),Math.abs(U)<0.9999999)this._y=Math.atan2(Y,N),this._z=Math.atan2(X,H);else this._y=Math.atan2(-G,K),this._z=0;break;case"ZXY":if(this._x=Math.asin(FJ(F,-1,1)),Math.abs(F)<0.9999999)this._y=Math.atan2(-G,N),this._z=Math.atan2(-W,H);else this._y=0,this._z=Math.atan2(X,K);break;case"ZYX":if(this._y=Math.asin(-FJ(G,-1,1)),Math.abs(G)<0.9999999)this._x=Math.atan2(F,N),this._z=Math.atan2(X,K);else this._x=0,this._z=Math.atan2(-W,H);break;case"YZX":if(this._z=Math.asin(FJ(X,-1,1)),Math.abs(X)<0.9999999)this._x=Math.atan2(-U,H),this._y=Math.atan2(-G,K);else this._x=0,this._y=Math.atan2(Y,N);break;case"XZY":if(this._z=Math.asin(-FJ(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(F,H),this._y=Math.atan2(Y,K);else this._x=Math.atan2(-U,N),this._y=0;break;default:r0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return gX.makeRotationFromQuaternion(J),this.setFromRotationMatrix(gX,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return pX.setFromEuler(this),this.setFromQuaternion(pX,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}L9.DEFAULT_ORDER="XYZ";class pZ{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var eN=0,mX=new _,P6=new HJ,c9=new QJ,s$=new _,AQ=new _,JG=new _,QG=new HJ,lX=new _(1,0,0),uX=new _(0,1,0),dX=new _(0,0,1),cX={type:"added"},$G={type:"removed"},I6={type:"childadded",child:null},lK={type:"childremoved",child:null};class wJ extends M9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:eN++}),this.uuid=J9(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wJ.DEFAULT_UP.clone();let J=new _,Q=new L9,$=new HJ,Z=new _(1,1,1);function K(){$.setFromEuler(Q,!1)}function W(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(K),$._onChange(W),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new QJ},normalMatrix:{value:new XJ}}),this.matrix=new QJ,this.matrixWorld=new QJ,this.matrixAutoUpdate=wJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pZ,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return P6.setFromAxisAngle(J,Q),this.quaternion.multiply(P6),this}rotateOnWorldAxis(J,Q){return P6.setFromAxisAngle(J,Q),this.quaternion.premultiply(P6),this}rotateX(J){return this.rotateOnAxis(lX,J)}rotateY(J){return this.rotateOnAxis(uX,J)}rotateZ(J){return this.rotateOnAxis(dX,J)}translateOnAxis(J,Q){return mX.copy(J).applyQuaternion(this.quaternion),this.position.add(mX.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(lX,J)}translateY(J){return this.translateOnAxis(uX,J)}translateZ(J){return this.translateOnAxis(dX,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(c9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)s$.copy(J);else s$.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),AQ.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)c9.lookAt(AQ,s$,this.up);else c9.lookAt(s$,AQ,this.up);if(this.quaternion.setFromRotationMatrix(c9),Z)c9.extractRotation(Z.matrixWorld),P6.setFromRotationMatrix(c9),this.quaternion.premultiply(P6.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return $J("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(cX),I6.child=J,this.dispatchEvent(I6),I6.child=null;else $J("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent($G),lK.child=J,this.dispatchEvent(lK),lK.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),c9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),c9.multiply(J.parent.matrixWorld);return J.applyMatrix4(c9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(cX),I6.child=J,this.dispatchEvent(I6),I6.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let W=this.children[$].getObjectByProperty(J,Q);if(W!==void 0)return W}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let K=0,W=Z.length;K<W;K++)Z[K].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(AQ,J,JG),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(AQ,QG,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:Z}=J,K=this.matrix.elements;K[12]+=Q-K[0]*Q-K[4]*$-K[8]*Z,K[13]+=$-K[1]*Q-K[5]*$-K[9]*Z,K[14]+=Z-K[2]*Q-K[6]*$-K[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q,$=!1){let Z=this.parent;if(J===!0&&Z!==null)Z.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||$){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,$=!0}if(Q===!0){let K=this.children;for(let W=0,Y=K.length;W<Y;W++)K[W].updateWorldMatrix(!1,!0,$)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,Z.name=this.name,Z.castShadow=this.castShadow,Z.receiveShadow=this.receiveShadow,Z.visible=this.visible,Z.frustumCulled=this.frustumCulled,Z.renderOrder=this.renderOrder,Z.static=this.static,Z.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((Y)=>({...Y,boundingBox:Y.boundingBox?Y.boundingBox.toJSON():void 0,boundingSphere:Y.boundingSphere?Y.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((Y)=>({...Y})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function K(Y,X){if(Y[X.uuid]===void 0)Y[X.uuid]=X.toJSON(J);return X.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=K(J.geometries,this.geometry);let Y=this.geometry.parameters;if(Y!==void 0&&Y.shapes!==void 0){let X=Y.shapes;if(Array.isArray(X))for(let H=0,U=X.length;H<U;H++){let G=X[H];K(J.shapes,G)}else K(J.shapes,X)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)K(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let Y=[];for(let X=0,H=this.material.length;X<H;X++)Y.push(K(J.materials,this.material[X]));Z.material=Y}else Z.material=K(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let Y=0;Y<this.children.length;Y++)Z.children.push(this.children[Y].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let Y=0;Y<this.animations.length;Y++){let X=this.animations[Y];Z.animations.push(K(J.animations,X))}}if(Q){let Y=W(J.geometries),X=W(J.materials),H=W(J.textures),U=W(J.images),G=W(J.shapes),F=W(J.skeletons),N=W(J.animations),q=W(J.nodes);if(Y.length>0)$.geometries=Y;if(X.length>0)$.materials=X;if(H.length>0)$.textures=H;if(U.length>0)$.images=U;if(G.length>0)$.shapes=G;if(F.length>0)$.skeletons=F;if(N.length>0)$.animations=N;if(q.length>0)$.nodes=q}return $.object=Z,$;function W(Y){let X=[];for(let H in Y){let U=Y[H];delete U.metadata,X.push(U)}return X}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),this.pivot=J.pivot!==null?J.pivot.clone():null,this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}wJ.DEFAULT_UP=new _(0,1,0);wJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;wJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zJ extends wJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var ZG={type:"move"};class K${constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new zJ,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new zJ,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new zJ,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _,this._grip.eventsEnabled=!1;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,K=null,W=null,Y=this._targetRay,X=this._grip,H=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(H&&J.hand){W=!0;for(let O of J.hand.values()){let D=Q.getJointPose(O,$),R=this._getHandJoint(H,O);if(D!==null)R.matrix.fromArray(D.transform.matrix),R.matrix.decompose(R.position,R.rotation,R.scale),R.matrixWorldNeedsUpdate=!0,R.jointRadius=D.radius;R.visible=D!==null}let U=H.joints["index-finger-tip"],G=H.joints["thumb-tip"],F=U.position.distanceTo(G.position),N=0.02,q=0.005;if(H.inputState.pinching&&F>N+q)H.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!H.inputState.pinching&&F<=N-q)H.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(X!==null&&J.gripSpace){if(K=Q.getPose(J.gripSpace,$),K!==null){if(X.matrix.fromArray(K.transform.matrix),X.matrix.decompose(X.position,X.rotation,X.scale),X.matrixWorldNeedsUpdate=!0,K.linearVelocity)X.hasLinearVelocity=!0,X.linearVelocity.copy(K.linearVelocity);else X.hasLinearVelocity=!1;if(K.angularVelocity)X.hasAngularVelocity=!0,X.angularVelocity.copy(K.angularVelocity);else X.hasAngularVelocity=!1;if(X.eventsEnabled)X.dispatchEvent({type:"gripUpdated",data:J,target:this})}}if(Y!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&K!==null)Z=K;if(Z!==null){if(Y.matrix.fromArray(Z.transform.matrix),Y.matrix.decompose(Y.position,Y.rotation,Y.scale),Y.matrixWorldNeedsUpdate=!0,Z.linearVelocity)Y.hasLinearVelocity=!0,Y.linearVelocity.copy(Z.linearVelocity);else Y.hasLinearVelocity=!1;if(Z.angularVelocity)Y.hasAngularVelocity=!0,Y.angularVelocity.copy(Z.angularVelocity);else Y.hasAngularVelocity=!1;this.dispatchEvent(ZG)}}}if(Y!==null)Y.visible=Z!==null;if(X!==null)X.visible=K!==null;if(H!==null)H.visible=W!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new zJ;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var CU={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},N7={h:0,s:0,l:0},i$={h:0,s:0,l:0};function uK(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class j0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,qJ.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=qJ.workingColorSpace){return this.r=J,this.g=Q,this.b=$,qJ.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=qJ.workingColorSpace){if(J=HY(J,1),Q=FJ(Q,0,1),$=FJ($,0,1),Q===0)this.r=this.g=this.b=$;else{let K=$<=0.5?$*(1+Q):$+Q-$*Q,W=2*$-K;this.r=uK(W,K,J+0.3333333333333333),this.g=uK(W,K,J),this.b=uK(W,K,J-0.3333333333333333)}return qJ.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(K){if(K===void 0)return;if(parseFloat(K)<1)r0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let K,W=Z[1],Y=Z[2];switch(W){case"rgb":case"rgba":if(K=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(K[4]),this.setRGB(Math.min(255,parseInt(K[1],10))/255,Math.min(255,parseInt(K[2],10))/255,Math.min(255,parseInt(K[3],10))/255,Q);if(K=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(K[4]),this.setRGB(Math.min(100,parseInt(K[1],10))/100,Math.min(100,parseInt(K[2],10))/100,Math.min(100,parseInt(K[3],10))/100,Q);break;case"hsl":case"hsla":if(K=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(Y))return $(K[4]),this.setHSL(parseFloat(K[1])/360,parseFloat(K[2])/100,parseFloat(K[3])/100,Q);break;default:r0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let K=Z[1],W=K.length;if(W===3)return this.setRGB(parseInt(K.charAt(0),16)/15,parseInt(K.charAt(1),16)/15,parseInt(K.charAt(2),16)/15,Q);else if(W===6)return this.setHex(parseInt(K,16),Q);else r0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=CU[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else r0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=r9(J.r),this.g=r9(J.g),this.b=r9(J.b),this}copyLinearToSRGB(J){return this.r=p6(J.r),this.g=p6(J.g),this.b=p6(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return qJ.workingToColorSpace(P8.copy(this),J),Math.round(FJ(P8.r*255,0,255))*65536+Math.round(FJ(P8.g*255,0,255))*256+Math.round(FJ(P8.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=qJ.workingColorSpace){qJ.workingToColorSpace(P8.copy(this),Q);let{r:$,g:Z,b:K}=P8,W=Math.max($,Z,K),Y=Math.min($,Z,K),X,H,U=(Y+W)/2;if(Y===W)X=0,H=0;else{let G=W-Y;switch(H=U<=0.5?G/(W+Y):G/(2-W-Y),W){case $:X=(Z-K)/G+(Z<K?6:0);break;case Z:X=(K-$)/G+2;break;case K:X=($-Z)/G+4;break}X/=6}return J.h=X,J.s=H,J.l=U,J}getRGB(J,Q=qJ.workingColorSpace){return qJ.workingToColorSpace(P8.copy(this),Q),J.r=P8.r,J.g=P8.g,J.b=P8.b,J}getStyle(J="srgb"){qJ.workingToColorSpace(P8.copy(this),J);let{r:Q,g:$,b:Z}=P8;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(N7),this.setHSL(N7.h+J,N7.s+Q,N7.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(N7),J.getHSL(i$);let $=pQ(N7.h,i$.h,Q),Z=pQ(N7.s,i$.s,Q),K=pQ(N7.l,i$.l,Q);return this.setHSL($,Z,K),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,K=J.elements;return this.r=K[0]*Q+K[3]*$+K[6]*Z,this.g=K[1]*Q+K[4]*$+K[7]*Z,this.b=K[2]*Q+K[5]*$+K[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var P8=new j0;j0.NAMES=CU;class a7{constructor(J,Q=0.00025){this.isFogExp2=!0,this.name="",this.color=new j0(J),this.density=Q}clone(){return new a7(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class e6 extends wJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new L9,this.environmentIntensity=1,this.environmentRotation=new L9,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();return Q.object.backgroundBlurriness=this.backgroundBlurriness,Q.object.backgroundIntensity=this.backgroundIntensity,Q.object.backgroundRotation=this.backgroundRotation.toArray(),Q.object.environmentIntensity=this.environmentIntensity,Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var q9=new _,n9=new _,dK=new _,s9=new _,z6=new _,A6=new _,nX=new _,cK=new _,nK=new _,sK=new _,iK=new mJ,oK=new mJ,aK=new mJ;class u8{constructor(J=new _,Q=new _,$=new _){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),q9.subVectors(J,Q),Z.cross(q9);let K=Z.lengthSq();if(K>0)return Z.multiplyScalar(1/Math.sqrt(K));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,K){q9.subVectors(Z,Q),n9.subVectors($,Q),dK.subVectors(J,Q);let W=q9.dot(q9),Y=q9.dot(n9),X=q9.dot(dK),H=n9.dot(n9),U=n9.dot(dK),G=W*H-Y*Y;if(G===0)return K.set(0,0,0),null;let F=1/G,N=(H*X-Y*U)*F,q=(W*U-Y*X)*F;return K.set(1-N-q,q,N)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,s9)===null)return!1;return s9.x>=0&&s9.y>=0&&s9.x+s9.y<=1}static getInterpolation(J,Q,$,Z,K,W,Y,X){if(this.getBarycoord(J,Q,$,Z,s9)===null){if(X.x=0,X.y=0,"z"in X)X.z=0;if("w"in X)X.w=0;return null}return X.setScalar(0),X.addScaledVector(K,s9.x),X.addScaledVector(W,s9.y),X.addScaledVector(Y,s9.z),X}static getInterpolatedAttribute(J,Q,$,Z,K,W){return iK.setScalar(0),oK.setScalar(0),aK.setScalar(0),iK.fromBufferAttribute(J,Q),oK.fromBufferAttribute(J,$),aK.fromBufferAttribute(J,Z),W.setScalar(0),W.addScaledVector(iK,K.x),W.addScaledVector(oK,K.y),W.addScaledVector(aK,K.z),W}static isFrontFacing(J,Q,$,Z){return q9.subVectors($,Q),n9.subVectors(J,Q),q9.cross(n9).dot(Z)<0}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return q9.subVectors(this.c,this.b),n9.subVectors(this.a,this.b),q9.cross(n9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return u8.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return u8.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,K){return u8.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,K)}containsPoint(J){return u8.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return u8.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,K=this.c,W,Y;z6.subVectors(Z,$),A6.subVectors(K,$),cK.subVectors(J,$);let X=z6.dot(cK),H=A6.dot(cK);if(X<=0&&H<=0)return Q.copy($);nK.subVectors(J,Z);let U=z6.dot(nK),G=A6.dot(nK);if(U>=0&&G<=U)return Q.copy(Z);let F=X*G-U*H;if(F<=0&&X>=0&&U<=0)return W=X/(X-U),Q.copy($).addScaledVector(z6,W);sK.subVectors(J,K);let N=z6.dot(sK),q=A6.dot(sK);if(q>=0&&N<=q)return Q.copy(K);let O=N*H-X*q;if(O<=0&&H>=0&&q<=0)return Y=H/(H-q),Q.copy($).addScaledVector(A6,Y);let D=U*q-N*G;if(D<=0&&G-U>=0&&N-q>=0)return nX.subVectors(K,Z),Y=(G-U)/(G-U+(N-q)),Q.copy(Z).addScaledVector(nX,Y);let R=1/(D+O+F);return W=O*R,Y=F*R,Q.copy($).addScaledVector(z6,W).addScaledVector(A6,Y)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class B8{constructor(J=new _(1/0,1/0,1/0),Q=new _(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(O9.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(O9.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=O9.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let K=$.getAttribute("position");if(Q===!0&&K!==void 0&&J.isInstancedMesh!==!0)for(let W=0,Y=K.count;W<Y;W++){if(J.isMesh===!0)J.getVertexPosition(W,O9);else O9.fromBufferAttribute(K,W);O9.applyMatrix4(J.matrixWorld),this.expandByPoint(O9)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();o$.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();o$.copy($.boundingBox)}o$.applyMatrix4(J.matrixWorld),this.union(o$)}}let Z=J.children;for(let K=0,W=Z.length;K<W;K++)this.expandByObject(Z[K],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,O9),O9.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(TQ),a$.subVectors(this.max,TQ),T6.subVectors(J.a,TQ),_6.subVectors(J.b,TQ),w6.subVectors(J.c,TQ),G7.subVectors(_6,T6),F7.subVectors(w6,_6),f7.subVectors(T6,w6);let Q=[0,-G7.z,G7.y,0,-F7.z,F7.y,0,-f7.z,f7.y,G7.z,0,-G7.x,F7.z,0,-F7.x,f7.z,0,-f7.x,-G7.y,G7.x,0,-F7.y,F7.x,0,-f7.y,f7.x,0];if(!rK(Q,T6,_6,w6,a$))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!rK(Q,T6,_6,w6,a$))return!1;return r$.crossVectors(G7,F7),Q=[r$.x,r$.y,r$.z],rK(Q,T6,_6,w6,a$)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,O9).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(O9).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return i9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),i9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),i9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),i9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),i9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),i9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),i9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),i9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(i9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var i9=[new _,new _,new _,new _,new _,new _,new _,new _],O9=new _,o$=new B8,T6=new _,_6=new _,w6=new _,G7=new _,F7=new _,f7=new _,TQ=new _,a$=new _,r$=new _,b7=new _;function rK(J,Q,$,Z,K){for(let W=0,Y=J.length-3;W<=Y;W+=3){b7.fromArray(J,W);let X=K.x*Math.abs(b7.x)+K.y*Math.abs(b7.y)+K.z*Math.abs(b7.z),H=Q.dot(b7),U=$.dot(b7),G=Z.dot(b7);if(Math.max(-Math.max(H,U,G),Math.min(H,U,G))>X)return!1}return!0}var Y8=new _,t$=new q0,KG=0;class tJ extends M9{constructor(J,Q,$=!1){super();if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:KG++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,K=this.itemSize;Z<K;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)t$.fromBufferAttribute(this,Q),t$.applyMatrix3(J),this.setXY(Q,t$.x,t$.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)Y8.fromBufferAttribute(this,Q),Y8.applyMatrix3(J),this.setXYZ(Q,Y8.x,Y8.y,Y8.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)Y8.fromBufferAttribute(this,Q),Y8.applyMatrix4(J),this.setXYZ(Q,Y8.x,Y8.y,Y8.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)Y8.fromBufferAttribute(this,Q),Y8.applyNormalMatrix(J),this.setXYZ(Q,Y8.x,Y8.y,Y8.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)Y8.fromBufferAttribute(this,Q),Y8.transformDirection(J),this.setXYZ(Q,Y8.x,Y8.y,Y8.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=R9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=pJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=R9(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=pJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=R9(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=pJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=R9(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=pJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=R9(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=pJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=pJ(Q,this.array),$=pJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=pJ(Q,this.array),$=pJ($,this.array),Z=pJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,K){if(J*=this.itemSize,this.normalized)Q=pJ(Q,this.array),$=pJ($,this.array),Z=pJ(Z,this.array),K=pJ(K,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=K,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return J.name=this.name,J.usage=this.usage,J.gpuType=this.gpuType,J}dispose(){this.dispatchEvent({type:"dispose"})}}class mZ extends tJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class lZ extends tJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class YJ extends tJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var WG=new B8,_Q=new _,tK=new _;class _8{constructor(J=new _,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else WG.setFromPoints(J).getCenter($);let Z=0;for(let K=0,W=J.length;K<W;K++)Z=Math.max(Z,$.distanceToSquared(J[K]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;_Q.subVectors(J,this.center);let Q=_Q.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(_Q,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else tK.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(_Q.copy(J.center).add(tK)),this.expandByPoint(_Q.copy(J.center).sub(tK));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var YG=0,t8=new QJ,eK=new wJ,S6=new _,l8=new B8,wQ=new B8,O8=new _;class vJ extends M9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YG++}),this.uuid=J9(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((wN(J))?lZ:mZ)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let K=new XJ().getNormalMatrix(J);$.applyNormalMatrix(K),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this._transformed=!0,this}applyQuaternion(J){return t8.makeRotationFromQuaternion(J),this.applyMatrix4(t8),this}rotateX(J){return t8.makeRotationX(J),this.applyMatrix4(t8),this}rotateY(J){return t8.makeRotationY(J),this.applyMatrix4(t8),this}rotateZ(J){return t8.makeRotationZ(J),this.applyMatrix4(t8),this}translate(J,Q,$){return t8.makeTranslation(J,Q,$),this.applyMatrix4(t8),this}scale(J,Q,$){return t8.makeScale(J,Q,$),this.applyMatrix4(t8),this}lookAt(J){return eK.lookAt(J),eK.updateMatrix(),this.applyMatrix4(eK.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(S6).negate(),this.translate(S6.x,S6.y,S6.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];$.push(W.x,W.y,W.z||0)}this.setAttribute("position",new YJ($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let K=J[Z];Q.setXYZ(Z,K.x,K.y,K.z||0)}if(J.length>Q.count)r0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new B8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){$J("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _(-1/0,-1/0,-1/0),new _(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let K=Q[$];if(l8.setFromBufferAttribute(K),this.morphTargetsRelative)O8.addVectors(this.boundingBox.min,l8.min),this.boundingBox.expandByPoint(O8),O8.addVectors(this.boundingBox.max,l8.max),this.boundingBox.expandByPoint(O8);else this.boundingBox.expandByPoint(l8.min),this.boundingBox.expandByPoint(l8.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))$J('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new _8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){$J("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _,1/0);return}if(J){let $=this.boundingSphere.center;if(l8.setFromBufferAttribute(J),Q)for(let K=0,W=Q.length;K<W;K++){let Y=Q[K];if(wQ.setFromBufferAttribute(Y),this.morphTargetsRelative)O8.addVectors(l8.min,wQ.min),l8.expandByPoint(O8),O8.addVectors(l8.max,wQ.max),l8.expandByPoint(O8);else l8.expandByPoint(wQ.min),l8.expandByPoint(wQ.max)}l8.getCenter($);let Z=0;for(let K=0,W=J.count;K<W;K++)O8.fromBufferAttribute(J,K),Z=Math.max(Z,$.distanceToSquared(O8));if(Q)for(let K=0,W=Q.length;K<W;K++){let Y=Q[K],X=this.morphTargetsRelative;for(let H=0,U=Y.count;H<U;H++){if(O8.fromBufferAttribute(Y,H),X)S6.fromBufferAttribute(J,H),O8.add(S6);Z=Math.max(Z,$.distanceToSquared(O8))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))$J('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){$J("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:K}=Q,W=this.getAttribute("tangent");if(W===void 0||W.count!==$.count)W=new tJ(new Float32Array(4*$.count),4),this.setAttribute("tangent",W);let Y=[],X=[];for(let T=0;T<$.count;T++)Y[T]=new _,X[T]=new _;let H=new _,U=new _,G=new _,F=new q0,N=new q0,q=new q0,O=new _,D=new _;function R(T,B,z){H.fromBufferAttribute($,T),U.fromBufferAttribute($,B),G.fromBufferAttribute($,z),F.fromBufferAttribute(K,T),N.fromBufferAttribute(K,B),q.fromBufferAttribute(K,z),U.sub(H),G.sub(H),N.sub(F),q.sub(F);let d=1/(N.x*q.y-q.x*N.y);if(!isFinite(d))return;O.copy(U).multiplyScalar(q.y).addScaledVector(G,-N.y).multiplyScalar(d),D.copy(G).multiplyScalar(N.x).addScaledVector(U,-q.x).multiplyScalar(d),Y[T].add(O),Y[B].add(O),Y[z].add(O),X[T].add(D),X[B].add(D),X[z].add(D)}let E=this.groups;if(E.length===0)E=[{start:0,count:J.count}];for(let T=0,B=E.length;T<B;++T){let z=E[T],d=z.start,b=z.count;for(let n=d,Z0=d+b;n<Z0;n+=3)R(J.getX(n+0),J.getX(n+1),J.getX(n+2))}let M=new _,k=new _,V=new _,L=new _;function P(T){V.fromBufferAttribute(Z,T),L.copy(V);let B=Y[T];M.copy(B),M.sub(V.multiplyScalar(V.dot(B))).normalize(),k.crossVectors(L,B);let d=k.dot(X[T])<0?-1:1;W.setXYZW(T,M.x,M.y,M.z,d)}for(let T=0,B=E.length;T<B;++T){let z=E[T],d=z.start,b=z.count;for(let n=d,Z0=d+b;n<Z0;n+=3)P(J.getX(n+0)),P(J.getX(n+1)),P(J.getX(n+2))}this._transformed=!0}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0||$.count!==Q.count)$=new tJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let F=0,N=$.count;F<N;F++)$.setXYZ(F,0,0,0);let Z=new _,K=new _,W=new _,Y=new _,X=new _,H=new _,U=new _,G=new _;if(J)for(let F=0,N=J.count;F<N;F+=3){let q=J.getX(F+0),O=J.getX(F+1),D=J.getX(F+2);Z.fromBufferAttribute(Q,q),K.fromBufferAttribute(Q,O),W.fromBufferAttribute(Q,D),U.subVectors(W,K),G.subVectors(Z,K),U.cross(G),Y.fromBufferAttribute($,q),X.fromBufferAttribute($,O),H.fromBufferAttribute($,D),Y.add(U),X.add(U),H.add(U),$.setXYZ(q,Y.x,Y.y,Y.z),$.setXYZ(O,X.x,X.y,X.z),$.setXYZ(D,H.x,H.y,H.z)}else for(let F=0,N=Q.count;F<N;F+=3)Z.fromBufferAttribute(Q,F+0),K.fromBufferAttribute(Q,F+1),W.fromBufferAttribute(Q,F+2),U.subVectors(W,K),G.subVectors(Z,K),U.cross(G),$.setXYZ(F+0,U.x,U.y,U.z),$.setXYZ(F+1,U.x,U.y,U.z),$.setXYZ(F+2,U.x,U.y,U.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)O8.fromBufferAttribute(J,Q),O8.normalize(),J.setXYZ(Q,O8.x,O8.y,O8.z)}toNonIndexed(){function J(Y,X){let{array:H,itemSize:U,normalized:G}=Y,F=new H.constructor(X.length*U),N=0,q=0;for(let O=0,D=X.length;O<D;O++){if(Y.isInterleavedBufferAttribute)N=X[O]*Y.data.stride+Y.offset;else N=X[O]*U;for(let R=0;R<U;R++)F[q++]=H[N++]}return new tJ(F,U,G)}if(this.index===null)return r0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new vJ,$=this.index.array,Z=this.attributes;for(let Y in Z){let X=Z[Y],H=J(X,$);Q.setAttribute(Y,H)}let K=this.morphAttributes;for(let Y in K){let X=[],H=K[Y];for(let U=0,G=H.length;U<G;U++){let F=H[U],N=J(F,$);X.push(N)}Q.morphAttributes[Y]=X}Q.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;for(let Y=0,X=W.length;Y<X;Y++){let H=W[Y];Q.addGroup(H.start,H.count,H.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,J.name=this.name,Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0&&this._transformed!==!0){let X=this.parameters;for(let H in X)if(X[H]!==void 0)J[H]=X[H];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let X in $){let H=$[X];J.data.attributes[X]=H.toJSON(J.data)}let Z={},K=!1;for(let X in this.morphAttributes){let H=this.morphAttributes[X],U=[];for(let G=0,F=H.length;G<F;G++){let N=H[G];U.push(N.toJSON(J.data))}if(U.length>0)Z[X]=U,K=!0}if(K)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let W=this.groups;if(W.length>0)J.data.groups=JSON.parse(JSON.stringify(W));let Y=this.boundingSphere;if(Y!==null)J.data.boundingSphere=Y.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let H in Z){let U=Z[H];this.setAttribute(H,U.clone(Q))}let K=J.morphAttributes;for(let H in K){let U=[],G=K[H];for(let F=0,N=G.length;F<N;F++)U.push(G[F].clone(Q));this.morphAttributes[H]=U}this.morphTargetsRelative=J.morphTargetsRelative;let W=J.groups;for(let H=0,U=W.length;H<U;H++){let G=W[H];this.addGroup(G.start,G.count,G.materialIndex)}let Y=J.boundingBox;if(Y!==null)this.boundingBox=Y.clone();let X=J.boundingSphere;if(X!==null)this.boundingSphere=X.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this._transformed=J._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class JQ{constructor(J,Q){this.isInterleavedBuffer=!0,this.array=J,this.stride=Q,this.count=J!==void 0?J.length/Q:0,this.usage=35044,this.updateRanges=[],this.version=0,this.uuid=J9()}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.array=new J.array.constructor(J.array),this.count=J.count,this.stride=J.stride,this.usage=J.usage,this}copyAt(J,Q,$){J*=this.stride,$*=Q.stride;for(let Z=0,K=this.stride;Z<K;Z++)this.array[J+Z]=Q.array[$+Z];return this}set(J,Q=0){return this.array.set(J,Q),this}clone(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=J9();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer;let Q=new this.array.constructor(J.arrayBuffers[this.array.buffer._uuid]),$=new this.constructor(Q,this.stride);return $.setUsage(this.usage),$}onUpload(J){return this.onUploadCallback=J,this}toJSON(J){if(J.arrayBuffers===void 0)J.arrayBuffers={};if(this.array.buffer._uuid===void 0)this.array.buffer._uuid=J9();if(J.arrayBuffers[this.array.buffer._uuid]===void 0)J.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer));let Q={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return Q.usage=this.usage,Q}}var T8=new _;class O7{constructor(J,Q,$,Z=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=J,this.itemSize=Q,this.offset=$,this.normalized=Z}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(J){this.data.needsUpdate=J}applyMatrix4(J){for(let Q=0,$=this.data.count;Q<$;Q++)T8.fromBufferAttribute(this,Q),T8.applyMatrix4(J),this.setXYZ(Q,T8.x,T8.y,T8.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)T8.fromBufferAttribute(this,Q),T8.applyNormalMatrix(J),this.setXYZ(Q,T8.x,T8.y,T8.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)T8.fromBufferAttribute(this,Q),T8.transformDirection(J),this.setXYZ(Q,T8.x,T8.y,T8.z);return this}getComponent(J,Q){let $=this.array[J*this.data.stride+this.offset+Q];if(this.normalized)$=R9($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=pJ($,this.array);return this.data.array[J*this.data.stride+this.offset+Q]=$,this}setX(J,Q){if(this.normalized)Q=pJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset]=Q,this}setY(J,Q){if(this.normalized)Q=pJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+1]=Q,this}setZ(J,Q){if(this.normalized)Q=pJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+2]=Q,this}setW(J,Q){if(this.normalized)Q=pJ(Q,this.array);return this.data.array[J*this.data.stride+this.offset+3]=Q,this}getX(J){let Q=this.data.array[J*this.data.stride+this.offset];if(this.normalized)Q=R9(Q,this.array);return Q}getY(J){let Q=this.data.array[J*this.data.stride+this.offset+1];if(this.normalized)Q=R9(Q,this.array);return Q}getZ(J){let Q=this.data.array[J*this.data.stride+this.offset+2];if(this.normalized)Q=R9(Q,this.array);return Q}getW(J){let Q=this.data.array[J*this.data.stride+this.offset+3];if(this.normalized)Q=R9(Q,this.array);return Q}setXY(J,Q,$){if(J=J*this.data.stride+this.offset,this.normalized)Q=pJ(Q,this.array),$=pJ($,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J=J*this.data.stride+this.offset,this.normalized)Q=pJ(Q,this.array),$=pJ($,this.array),Z=pJ(Z,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this}setXYZW(J,Q,$,Z,K){if(J=J*this.data.stride+this.offset,this.normalized)Q=pJ(Q,this.array),$=pJ($,this.array),Z=pJ(Z,this.array),K=pJ(K,this.array);return this.data.array[J+0]=Q,this.data.array[J+1]=$,this.data.array[J+2]=Z,this.data.array[J+3]=K,this}clone(J){if(J===void 0){uQ("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let K=0;K<this.itemSize;K++)Q.push(this.data.array[Z+K])}return new tJ(new this.array.constructor(Q),this.itemSize,this.normalized)}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.clone(J);return new O7(J.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}}toJSON(J){if(J===void 0){uQ("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let Q=[];for(let $=0;$<this.count;$++){let Z=$*this.data.stride+this.offset;for(let K=0;K<this.itemSize;K++)Q.push(this.data.array[Z+K])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:Q,normalized:this.normalized}}else{if(J.interleavedBuffers===void 0)J.interleavedBuffers={};if(J.interleavedBuffers[this.data.uuid]===void 0)J.interleavedBuffers[this.data.uuid]=this.data.toJSON(J);return{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}}var JW=new _,XG=new _,HG=new XJ;class e8{constructor(J=new _(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=JW.subVectors($,Q).cross(XG.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q,$=!0){let Z=J.delta(JW),K=this.normal.dot(Z);if(K===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let W=-(J.start.dot(this.normal)+this.constant)/K;if($===!0&&(W<0||W>1))return null;return Q.copy(J.start).addScaledVector(Z,W)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||HG.getNormalMatrix(J),Z=this.coplanarPoint(JW).applyMatrix4(J),K=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(K),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(J){return this.normal.fromArray(J.normal),this.constant=J.constant,this}}var UG=0;class y8 extends M9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:UG++}),this.uuid=J9(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new j0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){r0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){r0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector2&&($&&$.isVector2)||Z&&Z.isEuler&&($&&$.isEuler)||Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,$.blending=this.blending,$.side=this.side,$.shadowSide=this.shadowSide,$.vertexColors=this.vertexColors,$.opacity=this.opacity,$.transparent=this.transparent,$.blendSrc=this.blendSrc,$.blendDst=this.blendDst,$.blendEquation=this.blendEquation,$.blendSrcAlpha=this.blendSrcAlpha,$.blendDstAlpha=this.blendDstAlpha,$.blendEquationAlpha=this.blendEquationAlpha,$.blendColor=this.blendColor.getHex(),$.blendAlpha=this.blendAlpha,$.depthFunc=this.depthFunc,$.depthTest=this.depthTest,$.depthWrite=this.depthWrite,$.colorWrite=this.colorWrite,$.clipIntersection=this.clipIntersection,$.clipShadows=this.clipShadows,$.stencilWriteMask=this.stencilWriteMask,$.stencilFunc=this.stencilFunc,$.stencilRef=this.stencilRef,$.stencilFuncMask=this.stencilFuncMask,$.stencilFail=this.stencilFail,$.stencilZFail=this.stencilZFail,$.stencilZPass=this.stencilZPass,$.stencilWrite=this.stencilWrite,$.polygonOffset=this.polygonOffset,$.polygonOffsetFactor=this.polygonOffsetFactor,$.polygonOffsetUnits=this.polygonOffsetUnits,$.dithering=this.dithering,$.alphaTest=this.alphaTest,$.alphaHash=this.alphaHash,$.alphaToCoverage=this.alphaToCoverage,$.premultipliedAlpha=this.premultipliedAlpha,$.forceSinglePass=this.forceSinglePass,$.allowOverride=this.allowOverride,$.visible=this.visible,$.toneMapped=this.toneMapped,$.name=this.name,this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.retroreflectivity!==void 0)$.retroreflectivity=this.retroreflectivity;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0)$.clippingPlanes=this.clippingPlanes.map((K)=>K.toJSON());if(this.rotation!==void 0)$.rotation=this.rotation;if(this.depthPacking!==void 0)$.depthPacking=this.depthPacking;if(this.linewidth!==void 0)$.linewidth=this.linewidth;if(this.linecap!==void 0)$.linecap=this.linecap;if(this.linejoin!==void 0)$.linejoin=this.linejoin;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.wireframe!==void 0)$.wireframe=this.wireframe;if(this.wireframeLinewidth!==void 0)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!==void 0)$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!==void 0)$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading!==void 0)$.flatShading=this.flatShading;if(this.fog!==void 0)$.fog=this.fog;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(K){let W=[];for(let Y in K){let X=K[Y];delete X.metadata,W.push(X)}return W}if(Q){let K=Z(J.textures),W=Z(J.images);if(K.length>0)$.textures=K;if(W.length>0)$.images=W}return $}fromJSON(J,Q){if(J.uuid!==void 0)this.uuid=J.uuid;if(J.name!==void 0)this.name=J.name;if(J.color!==void 0&&this.color!==void 0)this.color.setHex(J.color);if(J.roughness!==void 0)this.roughness=J.roughness;if(J.metalness!==void 0)this.metalness=J.metalness;if(J.sheen!==void 0)this.sheen=J.sheen;if(J.sheenColor!==void 0)this.sheenColor=new j0().setHex(J.sheenColor);if(J.sheenRoughness!==void 0)this.sheenRoughness=J.sheenRoughness;if(J.emissive!==void 0&&this.emissive!==void 0)this.emissive.setHex(J.emissive);if(J.specular!==void 0&&this.specular!==void 0)this.specular.setHex(J.specular);if(J.specularIntensity!==void 0)this.specularIntensity=J.specularIntensity;if(J.specularColor!==void 0&&this.specularColor!==void 0)this.specularColor.setHex(J.specularColor);if(J.shininess!==void 0)this.shininess=J.shininess;if(J.clearcoat!==void 0)this.clearcoat=J.clearcoat;if(J.clearcoatRoughness!==void 0)this.clearcoatRoughness=J.clearcoatRoughness;if(J.dispersion!==void 0)this.dispersion=J.dispersion;if(J.retroreflectivity!==void 0)this.retroreflectivity=J.retroreflectivity;if(J.iridescence!==void 0)this.iridescence=J.iridescence;if(J.iridescenceIOR!==void 0)this.iridescenceIOR=J.iridescenceIOR;if(J.iridescenceThicknessRange!==void 0)this.iridescenceThicknessRange=J.iridescenceThicknessRange;if(J.transmission!==void 0)this.transmission=J.transmission;if(J.thickness!==void 0)this.thickness=J.thickness;if(J.attenuationDistance!==void 0)this.attenuationDistance=J.attenuationDistance;if(J.attenuationColor!==void 0&&this.attenuationColor!==void 0)this.attenuationColor.setHex(J.attenuationColor);if(J.anisotropy!==void 0)this.anisotropy=J.anisotropy;if(J.anisotropyRotation!==void 0)this.anisotropyRotation=J.anisotropyRotation;if(J.fog!==void 0)this.fog=J.fog;if(J.flatShading!==void 0)this.flatShading=J.flatShading;if(J.blending!==void 0)this.blending=J.blending;if(J.combine!==void 0)this.combine=J.combine;if(J.side!==void 0)this.side=J.side;if(J.shadowSide!==void 0)this.shadowSide=J.shadowSide;if(J.opacity!==void 0)this.opacity=J.opacity;if(J.transparent!==void 0)this.transparent=J.transparent;if(J.alphaTest!==void 0)this.alphaTest=J.alphaTest;if(J.alphaHash!==void 0)this.alphaHash=J.alphaHash;if(J.depthFunc!==void 0)this.depthFunc=J.depthFunc;if(J.depthTest!==void 0)this.depthTest=J.depthTest;if(J.depthWrite!==void 0)this.depthWrite=J.depthWrite;if(J.colorWrite!==void 0)this.colorWrite=J.colorWrite;if(J.clippingPlanes!==void 0)this.clippingPlanes=J.clippingPlanes.map(($)=>new e8().fromJSON($));if(J.clipIntersection!==void 0)this.clipIntersection=J.clipIntersection;if(J.clipShadows!==void 0)this.clipShadows=J.clipShadows;if(J.depthPacking!==void 0)this.depthPacking=J.depthPacking;if(J.blendSrc!==void 0)this.blendSrc=J.blendSrc;if(J.blendDst!==void 0)this.blendDst=J.blendDst;if(J.blendEquation!==void 0)this.blendEquation=J.blendEquation;if(J.blendSrcAlpha!==void 0)this.blendSrcAlpha=J.blendSrcAlpha;if(J.blendDstAlpha!==void 0)this.blendDstAlpha=J.blendDstAlpha;if(J.blendEquationAlpha!==void 0)this.blendEquationAlpha=J.blendEquationAlpha;if(J.blendColor!==void 0&&this.blendColor!==void 0)this.blendColor.setHex(J.blendColor);if(J.blendAlpha!==void 0)this.blendAlpha=J.blendAlpha;if(J.stencilWriteMask!==void 0)this.stencilWriteMask=J.stencilWriteMask;if(J.stencilFunc!==void 0)this.stencilFunc=J.stencilFunc;if(J.stencilRef!==void 0)this.stencilRef=J.stencilRef;if(J.stencilFuncMask!==void 0)this.stencilFuncMask=J.stencilFuncMask;if(J.stencilFail!==void 0)this.stencilFail=J.stencilFail;if(J.stencilZFail!==void 0)this.stencilZFail=J.stencilZFail;if(J.stencilZPass!==void 0)this.stencilZPass=J.stencilZPass;if(J.stencilWrite!==void 0)this.stencilWrite=J.stencilWrite;if(J.wireframe!==void 0)this.wireframe=J.wireframe;if(J.wireframeLinewidth!==void 0)this.wireframeLinewidth=J.wireframeLinewidth;if(J.wireframeLinecap!==void 0)this.wireframeLinecap=J.wireframeLinecap;if(J.wireframeLinejoin!==void 0)this.wireframeLinejoin=J.wireframeLinejoin;if(J.rotation!==void 0)this.rotation=J.rotation;if(J.linewidth!==void 0)this.linewidth=J.linewidth;if(J.linecap!==void 0)this.linecap=J.linecap;if(J.linejoin!==void 0)this.linejoin=J.linejoin;if(J.dashSize!==void 0)this.dashSize=J.dashSize;if(J.gapSize!==void 0)this.gapSize=J.gapSize;if(J.scale!==void 0)this.scale=J.scale;if(J.polygonOffset!==void 0)this.polygonOffset=J.polygonOffset;if(J.polygonOffsetFactor!==void 0)this.polygonOffsetFactor=J.polygonOffsetFactor;if(J.polygonOffsetUnits!==void 0)this.polygonOffsetUnits=J.polygonOffsetUnits;if(J.dithering!==void 0)this.dithering=J.dithering;if(J.alphaToCoverage!==void 0)this.alphaToCoverage=J.alphaToCoverage;if(J.premultipliedAlpha!==void 0)this.premultipliedAlpha=J.premultipliedAlpha;if(J.forceSinglePass!==void 0)this.forceSinglePass=J.forceSinglePass;if(J.allowOverride!==void 0)this.allowOverride=J.allowOverride;if(J.visible!==void 0)this.visible=J.visible;if(J.toneMapped!==void 0)this.toneMapped=J.toneMapped;if(J.userData!==void 0)this.userData=J.userData;if(J.vertexColors!==void 0)if(typeof J.vertexColors==="number")this.vertexColors=J.vertexColors>0;else this.vertexColors=J.vertexColors;if(J.size!==void 0)this.size=J.size;if(J.sizeAttenuation!==void 0)this.sizeAttenuation=J.sizeAttenuation;if(J.map!==void 0)this.map=Q[J.map]||null;if(J.matcap!==void 0)this.matcap=Q[J.matcap]||null;if(J.alphaMap!==void 0)this.alphaMap=Q[J.alphaMap]||null;if(J.bumpMap!==void 0)this.bumpMap=Q[J.bumpMap]||null;if(J.bumpScale!==void 0)this.bumpScale=J.bumpScale;if(J.normalMap!==void 0)this.normalMap=Q[J.normalMap]||null;if(J.normalMapType!==void 0)this.normalMapType=J.normalMapType;if(J.normalScale!==void 0){let $=J.normalScale;if(Array.isArray($)===!1)$=[$,$];this.normalScale=new q0().fromArray($)}if(J.displacementMap!==void 0)this.displacementMap=Q[J.displacementMap]||null;if(J.displacementScale!==void 0)this.displacementScale=J.displacementScale;if(J.displacementBias!==void 0)this.displacementBias=J.displacementBias;if(J.roughnessMap!==void 0)this.roughnessMap=Q[J.roughnessMap]||null;if(J.metalnessMap!==void 0)this.metalnessMap=Q[J.metalnessMap]||null;if(J.emissiveMap!==void 0)this.emissiveMap=Q[J.emissiveMap]||null;if(J.emissiveIntensity!==void 0)this.emissiveIntensity=J.emissiveIntensity;if(J.specularMap!==void 0)this.specularMap=Q[J.specularMap]||null;if(J.specularIntensityMap!==void 0)this.specularIntensityMap=Q[J.specularIntensityMap]||null;if(J.specularColorMap!==void 0)this.specularColorMap=Q[J.specularColorMap]||null;if(J.envMap!==void 0)this.envMap=Q[J.envMap]||null;if(J.envMapRotation!==void 0)this.envMapRotation.fromArray(J.envMapRotation);if(J.envMapIntensity!==void 0)this.envMapIntensity=J.envMapIntensity;if(J.reflectivity!==void 0)this.reflectivity=J.reflectivity;if(J.refractionRatio!==void 0)this.refractionRatio=J.refractionRatio;if(J.lightMap!==void 0)this.lightMap=Q[J.lightMap]||null;if(J.lightMapIntensity!==void 0)this.lightMapIntensity=J.lightMapIntensity;if(J.aoMap!==void 0)this.aoMap=Q[J.aoMap]||null;if(J.aoMapIntensity!==void 0)this.aoMapIntensity=J.aoMapIntensity;if(J.gradientMap!==void 0)this.gradientMap=Q[J.gradientMap]||null;if(J.clearcoatMap!==void 0)this.clearcoatMap=Q[J.clearcoatMap]||null;if(J.clearcoatRoughnessMap!==void 0)this.clearcoatRoughnessMap=Q[J.clearcoatRoughnessMap]||null;if(J.clearcoatNormalMap!==void 0)this.clearcoatNormalMap=Q[J.clearcoatNormalMap]||null;if(J.clearcoatNormalScale!==void 0)this.clearcoatNormalScale=new q0().fromArray(J.clearcoatNormalScale);if(J.iridescenceMap!==void 0)this.iridescenceMap=Q[J.iridescenceMap]||null;if(J.iridescenceThicknessMap!==void 0)this.iridescenceThicknessMap=Q[J.iridescenceThicknessMap]||null;if(J.transmissionMap!==void 0)this.transmissionMap=Q[J.transmissionMap]||null;if(J.thicknessMap!==void 0)this.thicknessMap=Q[J.thicknessMap]||null;if(J.anisotropyMap!==void 0)this.anisotropyMap=Q[J.anisotropyMap]||null;if(J.sheenColorMap!==void 0)this.sheenColorMap=Q[J.sheenColorMap]||null;if(J.sheenRoughnessMap!==void 0)this.sheenRoughnessMap=Q[J.sheenRoughnessMap]||null;return this}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let K=0;K!==Z;++K)$[K]=Q[K].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}class r7 extends y8{constructor(J){super();this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new j0(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.rotation=J.rotation,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var j6,SQ=new _,y6=new _,v6=new _,f6=new q0,jQ=new q0,PU=new QJ,e$=new _,yQ=new _,JZ=new _,sX=new q0,QW=new q0,iX=new q0;class QQ extends wJ{constructor(J=new r7){super();if(this.isSprite=!0,this.type="Sprite",j6===void 0){j6=new vJ;let Q=new Float32Array([-0.5,-0.5,0,0,0,0.5,-0.5,0,1,0,0.5,0.5,0,1,1,-0.5,0.5,0,0,1]),$=new JQ(Q,5);j6.setIndex([0,1,2,0,2,3]),j6.setAttribute("position",new O7($,3,0,!1)),j6.setAttribute("uv",new O7($,2,3,!1))}this.geometry=j6,this.material=J,this.center=new q0(0.5,0.5),this.count=1}intersectsFrustum(J){return J.intersectsSprite(this)}raycast(J,Q){if(J.camera===null)$J('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');if(y6.setFromMatrixScale(this.matrixWorld),PU.copy(J.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(J.camera.matrixWorldInverse,this.matrixWorld),v6.setFromMatrixPosition(this.modelViewMatrix),J.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1)y6.multiplyScalar(-v6.z);let $=this.material.rotation,Z,K;if($!==0)K=Math.cos($),Z=Math.sin($);let W=this.center;QZ(e$.set(-0.5,-0.5,0),v6,W,y6,Z,K),QZ(yQ.set(0.5,-0.5,0),v6,W,y6,Z,K),QZ(JZ.set(0.5,0.5,0),v6,W,y6,Z,K),sX.set(0,0),QW.set(1,0),iX.set(1,1);let Y=J.ray.intersectTriangle(e$,yQ,JZ,!1,SQ);if(Y===null){if(QZ(yQ.set(-0.5,0.5,0),v6,W,y6,Z,K),QW.set(0,1),Y=J.ray.intersectTriangle(e$,JZ,yQ,!1,SQ),Y===null)return}let X=J.ray.origin.distanceTo(SQ);if(X<J.near||X>J.far)return;Q.push({distance:X,point:SQ.clone(),uv:u8.getInterpolation(SQ,e$,yQ,JZ,sX,QW,iX,new q0),face:null,object:this})}copy(J,Q){if(super.copy(J,Q),J.center!==void 0)this.center.copy(J.center);return this.material=J.material,this}}function QZ(J,Q,$,Z,K,W){if(f6.subVectors(J,$).addScalar(0.5).multiply(Z),K!==void 0)jQ.x=W*f6.x-K*f6.y,jQ.y=K*f6.x+W*f6.y;else jQ.copy(f6);J.copy(Q),J.x+=jQ.x,J.y+=jQ.y,J.applyMatrix4(PU)}var o9=new _,$W=new _,$Z=new _,ZZ=new _;class k7{constructor(J=new _,Q=new _(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,o9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=o9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return o9.copy(this.origin).addScaledVector(this.direction,Q),o9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){$W.copy(J).add(Q).multiplyScalar(0.5),$Z.copy(Q).sub(J).normalize(),ZZ.copy(this.origin).sub($W);let K=J.distanceTo(Q)*0.5,W=-this.direction.dot($Z),Y=ZZ.dot(this.direction),X=-ZZ.dot($Z),H=ZZ.lengthSq(),U=Math.abs(1-W*W),G,F,N,q;if(U>0)if(G=W*X-Y,F=W*Y-X,q=K*U,G>=0)if(F>=-q)if(F<=q){let O=1/U;G*=O,F*=O,N=G*(G+W*F+2*Y)+F*(W*G+F+2*X)+H}else F=K,G=Math.max(0,-(W*F+Y)),N=-G*G+F*(F+2*X)+H;else F=-K,G=Math.max(0,-(W*F+Y)),N=-G*G+F*(F+2*X)+H;else if(F<=-q)G=Math.max(0,-(-W*K+Y)),F=G>0?-K:Math.min(Math.max(-K,-X),K),N=-G*G+F*(F+2*X)+H;else if(F<=q)G=0,F=Math.min(Math.max(-K,-X),K),N=F*(F+2*X)+H;else G=Math.max(0,-(W*K+Y)),F=G>0?K:Math.min(Math.max(-K,-X),K),N=-G*G+F*(F+2*X)+H;else F=W>0?-K:K,G=Math.max(0,-(W*F+Y)),N=-G*G+F*(F+2*X)+H;if($)$.copy(this.origin).addScaledVector(this.direction,G);if(Z)Z.copy($W).addScaledVector($Z,F);return N}intersectSphere(J,Q){if(J.radius<0)return null;o9.subVectors(J.center,this.origin);let $=o9.dot(this.direction),Z=o9.dot(o9)-$*$,K=J.radius*J.radius;if(Z>K)return null;let W=Math.sqrt(K-Z),Y=$-W,X=$+W;if(X<0)return null;if(Y<0)return this.at(X,Q);return this.at(Y,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,K,W,Y,X,H=1/this.direction.x,U=1/this.direction.y,G=1/this.direction.z,F=this.origin;if(H>=0)$=(J.min.x-F.x)*H,Z=(J.max.x-F.x)*H;else $=(J.max.x-F.x)*H,Z=(J.min.x-F.x)*H;if(U>=0)K=(J.min.y-F.y)*U,W=(J.max.y-F.y)*U;else K=(J.max.y-F.y)*U,W=(J.min.y-F.y)*U;if($>W||K>Z)return null;if(K>$||isNaN($))$=K;if(W<Z||isNaN(Z))Z=W;if(G>=0)Y=(J.min.z-F.z)*G,X=(J.max.z-F.z)*G;else Y=(J.max.z-F.z)*G,X=(J.min.z-F.z)*G;if($>X||Y>Z)return null;if(Y>$||$!==$)$=Y;if(X<Z||Z!==Z)Z=X;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,o9)!==null}intersectTriangle(J,Q,$,Z,K){let W=this.origin,Y=this.direction,X=Y.x,H=Y.y,U=Y.z,G=J.x-W.x,F=J.y-W.y,N=J.z-W.z,q=Q.x-W.x,O=Q.y-W.y,D=Q.z-W.z,R=$.x-W.x,E=$.y-W.y,M=$.z-W.z,k=Math.abs(X),V=Math.abs(H),L=Math.abs(U),P,T,B,z,d,b,n,Z0,v,y,u,I;if(k>=V&&k>=L)if(B=X,b=G,v=q,I=R,X>=0)P=H,T=U,z=F,d=N,n=O,Z0=D,y=E,u=M;else P=U,T=H,z=N,d=F,n=D,Z0=O,y=M,u=E;else if(V>=L)if(B=H,b=F,v=O,I=E,H>=0)P=U,T=X,z=N,d=G,n=D,Z0=q,y=M,u=R;else P=X,T=U,z=G,d=N,n=q,Z0=D,y=R,u=M;else if(B=U,b=N,v=D,I=M,U>=0)P=X,T=H,z=G,d=F,n=q,Z0=O,y=R,u=E;else P=H,T=X,z=F,d=G,n=O,Z0=q,y=E,u=R;if(B===0)return null;let x=P/B,h=T/B,f=1/B,g=z-x*b,Y0=d-h*b,G0=n-x*v,M0=Z0-h*v,S0=y-x*I,$0=u-h*I,j=S0*M0-$0*G0,p=g*$0-Y0*S0,o=G0*Y0-M0*g;if(Z){if(j<0||p<0||o<0)return null}else if((j<0||p<0||o<0)&&(j>0||p>0||o>0))return null;let K0=j+p+o;if(K0===0)return null;let r=f*(j*b+p*v+o*I);if(K0>0?r<0:r>0)return null;return this.at(r/K0,K)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bJ extends y8{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new j0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new L9,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var oX=new QJ,h7=new k7,KZ=new _8,aX=new _,WZ=new _,YZ=new _,XZ=new _,ZW=new _,HZ=new _,rX=new _,UZ=new _;class C0 extends wJ{constructor(J=new vJ,Q=new bJ){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let Y=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=K}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,K=$.morphAttributes.position,W=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let Y=this.morphTargetInfluences;if(K&&Y){HZ.set(0,0,0);for(let X=0,H=K.length;X<H;X++){let U=Y[X],G=K[X];if(U===0)continue;if(ZW.fromBufferAttribute(G,J),W)HZ.addScaledVector(ZW,U);else HZ.addScaledVector(ZW.sub(Q),U)}Q.add(HZ)}return Q}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.material,K=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(KZ.copy($.boundingSphere),KZ.applyMatrix4(K),h7.copy(J.ray).recast(J.near),KZ.containsPoint(h7.origin)===!1){if(h7.intersectSphere(KZ,aX)===null)return;if(h7.origin.distanceToSquared(aX)>(J.far-J.near)**2)return}if(oX.copy(K).invert(),h7.copy(J.ray).applyMatrix4(oX),$.boundingBox!==null){if(h7.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,h7)}_computeIntersections(J,Q,$){let Z,K=this.geometry,W=this.material,Y=K.index,X=K.attributes.position,H=K.attributes.uv,U=K.attributes.uv1,G=K.attributes.normal,F=K.groups,N=K.drawRange;if(Y!==null)if(Array.isArray(W))for(let q=0,O=F.length;q<O;q++){let D=F[q],R=W[D.materialIndex],E=Math.max(D.start,N.start),M=Math.min(Y.count,Math.min(D.start+D.count,N.start+N.count));for(let k=E,V=M;k<V;k+=3){let L=Y.getX(k),P=Y.getX(k+1),T=Y.getX(k+2);if(Z=NZ(this,R,J,$,H,U,G,L,P,T),Z)Z.faceIndex=Math.floor(k/3),Z.face.materialIndex=D.materialIndex,Q.push(Z)}}else{let q=Math.max(0,N.start),O=Math.min(Y.count,N.start+N.count);for(let D=q,R=O;D<R;D+=3){let E=Y.getX(D),M=Y.getX(D+1),k=Y.getX(D+2);if(Z=NZ(this,W,J,$,H,U,G,E,M,k),Z)Z.faceIndex=Math.floor(D/3),Q.push(Z)}}else if(X!==void 0)if(Array.isArray(W))for(let q=0,O=F.length;q<O;q++){let D=F[q],R=W[D.materialIndex],E=Math.max(D.start,N.start),M=Math.min(X.count,Math.min(D.start+D.count,N.start+N.count));for(let k=E,V=M;k<V;k+=3){let L=k,P=k+1,T=k+2;if(Z=NZ(this,R,J,$,H,U,G,L,P,T),Z)Z.faceIndex=Math.floor(k/3),Z.face.materialIndex=D.materialIndex,Q.push(Z)}}else{let q=Math.max(0,N.start),O=Math.min(X.count,N.start+N.count);for(let D=q,R=O;D<R;D+=3){let E=D,M=D+1,k=D+2;if(Z=NZ(this,W,J,$,H,U,G,E,M,k),Z)Z.faceIndex=Math.floor(D/3),Q.push(Z)}}}}function NG(J,Q,$,Z,K,W,Y,X){let H;if(Q.side===1)H=Z.intersectTriangle(Y,W,K,!0,X);else H=Z.intersectTriangle(K,W,Y,Q.side===0,X);if(H===null)return null;UZ.copy(X),UZ.applyMatrix4(J.matrixWorld);let U=$.ray.origin.distanceTo(UZ);if(U<$.near||U>$.far)return null;return{distance:U,point:UZ.clone(),object:J}}function NZ(J,Q,$,Z,K,W,Y,X,H,U){J.getVertexPosition(X,WZ),J.getVertexPosition(H,YZ),J.getVertexPosition(U,XZ);let G=NG(J,Q,$,Z,WZ,YZ,XZ,rX);if(G){let F=new _;if(u8.getBarycoord(rX,WZ,YZ,XZ,F),K)G.uv=u8.getInterpolatedAttribute(K,X,H,U,F,new q0);if(W)G.uv1=u8.getInterpolatedAttribute(W,X,H,U,F,new q0);if(Y){if(G.normal=u8.getInterpolatedAttribute(Y,X,H,U,F,new _),G.normal.dot(Z.direction)>0)G.normal.multiplyScalar(-1)}let N={a:X,b:H,c:U,normal:new _,materialIndex:0};u8.getNormal(WZ,YZ,XZ,N.normal),G.face=N,G.barycoord=F}return G}var vQ=new mJ,tX=new mJ,eX=new mJ,GG=new mJ,JH=new QJ,GZ=new _,KW=new _8,QH=new QJ,WW=new k7;class uZ extends C0{constructor(J,Q){super(J,Q);this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new QJ,this.bindMatrixInverse=new QJ,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let J=this.geometry;if(this.boundingBox===null)this.boundingBox=new B8;this.boundingBox.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,GZ),this.boundingBox.expandByPoint(GZ)}computeBoundingSphere(){let J=this.geometry;if(this.boundingSphere===null)this.boundingSphere=new _8;this.boundingSphere.makeEmpty();let Q=J.getAttribute("position");for(let $=0;$<Q.count;$++)this.getVertexPosition($,GZ),this.boundingSphere.expandByPoint(GZ)}copy(J,Q){if(super.copy(J,Q),this.bindMode=J.bindMode,this.bindMatrix.copy(J.bindMatrix),this.bindMatrixInverse.copy(J.bindMatrixInverse),this.skeleton=J.skeleton,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}raycast(J,Q){let $=this.material,Z=this.matrixWorld;if($===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(KW.copy(this.boundingSphere),KW.applyMatrix4(Z),J.ray.intersectsSphere(KW)===!1)return;if(QH.copy(Z).invert(),WW.copy(J.ray).applyMatrix4(QH),this.boundingBox!==null){if(WW.intersectsBox(this.boundingBox)===!1)return}this._computeIntersections(J,Q,WW)}getVertexPosition(J,Q){return super.getVertexPosition(J,Q),this.applyBoneTransform(J,Q),Q}bind(J,Q){if(this.skeleton=J,Q===void 0)this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),Q=this.matrixWorld;this.bindMatrix.copy(Q),this.bindMatrixInverse.copy(Q).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let J=new mJ,Q=this.geometry.attributes.skinWeight;for(let $=0,Z=Q.count;$<Z;$++){J.fromBufferAttribute(Q,$);let K=1/J.manhattanLength();if(K!==1/0)J.multiplyScalar(K);else J.set(1,0,0,0);Q.setXYZW($,J.x,J.y,J.z,J.w)}}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.bindMode==="attached")this.bindMatrixInverse.copy(this.matrixWorld).invert();else if(this.bindMode==="detached")this.bindMatrixInverse.copy(this.bindMatrix).invert();else r0("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(J,Q){let $=this.skeleton,Z=this.geometry;if(tX.fromBufferAttribute(Z.attributes.skinIndex,J),eX.fromBufferAttribute(Z.attributes.skinWeight,J),Q.isVector4)vQ.copy(Q),Q.set(0,0,0,0);else vQ.set(...Q,1),Q.set(0,0,0);vQ.applyMatrix4(this.bindMatrix);for(let K=0;K<4;K++){let W=eX.getComponent(K);if(W!==0){let Y=tX.getComponent(K);JH.multiplyMatrices($.bones[Y].matrixWorld,$.boneInverses[Y]),Q.addScaledVector(GG.copy(vQ).applyMatrix4(JH),W)}}if(Q.isVector4)Q.w=vQ.w;return Q.applyMatrix4(this.bindMatrixInverse)}}class W$ extends wJ{constructor(){super();this.isBone=!0,this.type="Bone"}}class t7 extends Q8{constructor(J=null,Q=1,$=1,Z,K,W,Y,X,H=1003,U=1003,G,F){super(null,W,Y,X,H,U,Z,K,G,F);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var $H=new QJ,FG=new QJ;class Y${constructor(J=[],Q=[]){this.uuid=J9(),this.bones=J.slice(0),this.boneInverses=Q,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let J=this.bones,Q=this.boneInverses;if(this.boneMatrices=new Float32Array(J.length*16),Q.length===0)this.calculateInverses();else if(J.length!==Q.length){r0("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let $=0,Z=this.bones.length;$<Z;$++)this.boneInverses.push(new QJ)}}calculateInverses(){this.boneInverses.length=0;for(let J=0,Q=this.bones.length;J<Q;J++){let $=new QJ;if(this.bones[J])$.copy(this.bones[J].matrixWorld).invert();this.boneInverses.push($)}}pose(){for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($)$.matrixWorld.copy(this.boneInverses[J]).invert()}for(let J=0,Q=this.bones.length;J<Q;J++){let $=this.bones[J];if($){if($.parent&&$.parent.isBone)$.matrix.copy($.parent.matrixWorld).invert(),$.matrix.multiply($.matrixWorld);else $.matrix.copy($.matrixWorld);$.matrix.decompose($.position,$.quaternion,$.scale)}}}update(){let J=this.bones,Q=this.boneInverses,$=this.boneMatrices,Z=this.boneTexture;for(let K=0,W=J.length;K<W;K++){let Y=J[K]?J[K].matrixWorld:FG;$H.multiplyMatrices(Y,Q[K]),$H.toArray($,K*16)}if(Z!==null)Z.needsUpdate=!0}clone(){return new Y$(this.bones,this.boneInverses)}computeBoneTexture(){let J=Math.sqrt(this.bones.length*4);J=Math.ceil(J/4)*4,J=Math.max(J,4);let Q=new Float32Array(J*J*4);Q.set(this.boneMatrices);let $=new t7(Q,J,J,1023,1015);return $.needsUpdate=!0,this.boneMatrices=Q,this.boneTexture=$,this}getBoneByName(J){for(let Q=0,$=this.bones.length;Q<$;Q++){let Z=this.bones[Q];if(Z.name===J)return Z}return}dispose(){if(this.boneTexture!==null)this.boneTexture.dispose(),this.boneTexture=null}fromJSON(J,Q){this.uuid=J.uuid;for(let $=0,Z=J.bones.length;$<Z;$++){let K=J.bones[$],W=Q[K];if(W===void 0)r0("Skeleton: No bone found with UUID:",K),W=new W$;this.bones.push(W),this.boneInverses.push(new QJ().fromArray(J.boneInverses[$]))}return this.init(),this}toJSON(){let J={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};J.uuid=this.uuid;let Q=this.bones,$=this.boneInverses;for(let Z=0,K=Q.length;Z<K;Z++){let W=Q[Z];J.bones.push(W.uuid);let Y=$[Z];J.boneInverses.push(Y.toArray())}return J}}class R7 extends tJ{constructor(J,Q,$,Z=1){super(J,Q,$);this.isInstancedBufferAttribute=!0,this.meshPerAttribute=Z}copy(J){return super.copy(J),this.meshPerAttribute=J.meshPerAttribute,this}toJSON(){let J=super.toJSON();return J.meshPerAttribute=this.meshPerAttribute,J.isInstancedBufferAttribute=!0,J}}var b6=new QJ,ZH=new QJ,FZ=[],KH=new B8,EG=new QJ,fQ=new C0,bQ=new _8;class v9 extends C0{constructor(J,Q,$){super(J,Q);this.isInstancedMesh=!0,this.instanceMatrix=new R7(new Float32Array($*16),16),this.instanceColor=null,this.morphTexture=null,this.count=$,this.boundingBox=null,this.boundingSphere=null;for(let Z=0;Z<$;Z++)this.setMatrixAt(Z,EG)}computeBoundingBox(){let J=this.geometry,Q=this.count;if(this.boundingBox===null)this.boundingBox=new B8;if(J.boundingBox===null)J.computeBoundingBox();this.boundingBox.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,b6),KH.copy(J.boundingBox).applyMatrix4(b6),this.boundingBox.union(KH)}computeBoundingSphere(){let J=this.geometry,Q=this.count;if(this.boundingSphere===null)this.boundingSphere=new _8;if(J.boundingSphere===null)J.computeBoundingSphere();this.boundingSphere.makeEmpty();for(let $=0;$<Q;$++)this.getMatrixAt($,b6),bQ.copy(J.boundingSphere).applyMatrix4(b6),this.boundingSphere.union(bQ)}copy(J,Q){if(super.copy(J,Q),this.instanceMatrix.copy(J.instanceMatrix),J.morphTexture!==null)this.morphTexture=J.morphTexture.clone();if(J.instanceColor!==null)this.instanceColor=J.instanceColor.clone();if(this.count=J.count,J.boundingBox!==null)this.boundingBox=J.boundingBox.clone();if(J.boundingSphere!==null)this.boundingSphere=J.boundingSphere.clone();return this}getColorAt(J,Q){if(this.instanceColor===null)return Q.setRGB(1,1,1);else return Q.fromArray(this.instanceColor.array,J*3)}getMatrixAt(J,Q){return Q.fromArray(this.instanceMatrix.array,J*16)}getMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=this.morphTexture.source.data.data,K=$.length+1,W=J*K+1;for(let Y=0;Y<$.length;Y++)$[Y]=Z[W+Y]}raycast(J,Q){let $=this.matrixWorld,Z=this.count;if(fQ.geometry=this.geometry,fQ.material=this.material,fQ.material===void 0)return;if(this.boundingSphere===null)this.computeBoundingSphere();if(bQ.copy(this.boundingSphere),bQ.applyMatrix4($),J.ray.intersectsSphere(bQ)===!1)return;for(let K=0;K<Z;K++){this.getMatrixAt(K,b6),ZH.multiplyMatrices($,b6),fQ.matrixWorld=ZH,fQ.raycast(J,FZ);for(let W=0,Y=FZ.length;W<Y;W++){let X=FZ[W];X.instanceId=K,X.object=this,Q.push(X)}FZ.length=0}}setColorAt(J,Q){if(this.instanceColor===null)this.instanceColor=new R7(new Float32Array(this.instanceMatrix.count*3).fill(1),3);return Q.toArray(this.instanceColor.array,J*3),this}setMatrixAt(J,Q){return Q.toArray(this.instanceMatrix.array,J*16),this}setMorphAt(J,Q){let $=Q.morphTargetInfluences,Z=$.length+1;if(this.morphTexture===null)this.morphTexture=new t7(new Float32Array(Z*this.count),Z,this.count,1028,1015);let K=this.morphTexture.source.data.data,W=0;for(let H=0;H<$.length;H++)W+=$[H];let Y=this.geometry.morphTargetsRelative?1:1-W,X=Z*J;return K[X]=Y,K.set($,X+1),this}updateMorphTargets(){}dispose(){if(super.dispose(),this.morphTexture!==null)this.morphTexture.dispose(),this.morphTexture=null}}var x7=new _8,qG=new q0(0.5,0.5),EZ=new _;class e7{constructor(J=new e8,Q=new e8,$=new e8,Z=new e8,K=new e8,W=new e8){this.planes=[J,Q,$,Z,K,W]}set(J,Q,$,Z,K,W){let Y=this.planes;return Y[0].copy(J),Y[1].copy(Q),Y[2].copy($),Y[3].copy(Z),Y[4].copy(K),Y[5].copy(W),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,K=J.elements,W=K[0],Y=K[1],X=K[2],H=K[3],U=K[4],G=K[5],F=K[6],N=K[7],q=K[8],O=K[9],D=K[10],R=K[11],E=K[12],M=K[13],k=K[14],V=K[15];if(Z[0].setComponents(H-W,N-U,R-q,V-E).normalize(),Z[1].setComponents(H+W,N+U,R+q,V+E).normalize(),Z[2].setComponents(H+Y,N+G,R+O,V+M).normalize(),Z[3].setComponents(H-Y,N-G,R-O,V-M).normalize(),$)Z[4].setComponents(X,F,D,k).normalize(),Z[5].setComponents(H-X,N-F,R-D,V-k).normalize();else if(Z[4].setComponents(H-X,N-F,R-D,V-k).normalize(),Q===2000)Z[5].setComponents(H+X,N+F,R+D,V+k).normalize();else if(Q===2001)Z[5].setComponents(X,F,D,k).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();x7.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();x7.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(x7)}intersectsSprite(J){x7.center.set(0,0,0);let Q=qG.distanceTo(J.center);return x7.radius=0.7071067811865476+Q,x7.applyMatrix4(J.matrixWorld),this.intersectsSphere(x7)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let K=0;K<6;K++)if(Q[K].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(EZ.x=Z.normal.x>0?J.max.x:J.min.x,EZ.y=Z.normal.y>0?J.max.y:J.min.y,EZ.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(EZ)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class X$ extends y8{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new j0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var CZ=new _,PZ=new _,WH=new QJ,hQ=new k7,qZ=new _8,YW=new _,YH=new _;class $Q extends wJ{constructor(J=new vJ,Q=new X$){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let Z=1,K=Q.count;Z<K;Z++)CZ.fromBufferAttribute(Q,Z-1),PZ.fromBufferAttribute(Q,Z),$[Z]=$[Z-1],$[Z]+=CZ.distanceTo(PZ);J.setAttribute("lineDistance",new YJ($,1))}else r0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,K=J.params.Line.threshold,W=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(qZ.copy($.boundingSphere),qZ.applyMatrix4(Z),qZ.radius+=K,J.ray.intersectsSphere(qZ)===!1)return;WH.copy(Z).invert(),hQ.copy(J.ray).applyMatrix4(WH);let Y=K/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,H=this.isLineSegments?2:1,U=$.index,F=$.attributes.position;if(U!==null){let N=Math.max(0,W.start),q=Math.min(U.count,W.start+W.count);for(let O=N,D=q-1;O<D;O+=H){let R=U.getX(O),E=U.getX(O+1),M=OZ(this,J,hQ,X,R,E,O);if(M)Q.push(M)}if(this.isLineLoop){let O=U.getX(q-1),D=U.getX(N),R=OZ(this,J,hQ,X,O,D,q-1);if(R)Q.push(R)}}else{let N=Math.max(0,W.start),q=Math.min(F.count,W.start+W.count);for(let O=N,D=q-1;O<D;O+=H){let R=OZ(this,J,hQ,X,O,O+1,O);if(R)Q.push(R)}if(this.isLineLoop){let O=OZ(this,J,hQ,X,q-1,N,q-1);if(O)Q.push(O)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let Y=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=K}}}}}function OZ(J,Q,$,Z,K,W,Y){let X=J.geometry.attributes.position;if(CZ.fromBufferAttribute(X,K),PZ.fromBufferAttribute(X,W),$.distanceSqToSegment(CZ,PZ,YW,YH)>Z)return;YW.applyMatrix4(J.matrixWorld);let U=Q.ray.origin.distanceTo(YW);if(U<Q.near||U>Q.far)return;return{distance:U,point:YH.clone().applyMatrix4(J.matrixWorld),index:Y,face:null,faceIndex:null,barycoord:null,object:J}}var XH=new _,HH=new _;class dZ extends $Q{constructor(J,Q){super(J,Q);this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[];for(let Z=0,K=Q.count;Z<K;Z+=2)XH.fromBufferAttribute(Q,Z),HH.fromBufferAttribute(Q,Z+1),$[Z]=Z===0?0:$[Z-1],$[Z+1]=$[Z]+XH.distanceTo(HH);J.setAttribute("lineDistance",new YJ($,1))}else r0("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cZ extends $Q{constructor(J,Q){super(J,Q);this.isLineLoop=!0,this.type="LineLoop"}}class J6 extends y8{constructor(J){super();this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new j0(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.alphaMap=J.alphaMap,this.size=J.size,this.sizeAttenuation=J.sizeAttenuation,this.fog=J.fog,this}}var UH=new QJ,FW=new k7,RZ=new _8,LZ=new _;class ZQ extends wJ{constructor(J=new vJ,Q=new J6){super();this.isPoints=!0,this.type="Points",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}intersectsFrustum(J){return J.intersectsObject(this)}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,K=J.params.Points.threshold,W=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(RZ.copy($.boundingSphere),RZ.applyMatrix4(Z),RZ.radius+=K,J.ray.intersectsSphere(RZ)===!1)return;UH.copy(Z).invert(),FW.copy(J.ray).applyMatrix4(UH);let Y=K/((this.scale.x+this.scale.y+this.scale.z)/3),X=Y*Y,H=$.index,G=$.attributes.position;if(H!==null){let F=Math.max(0,W.start),N=Math.min(H.count,W.start+W.count);for(let q=F,O=N;q<O;q++){let D=H.getX(q);LZ.fromBufferAttribute(G,D),NH(LZ,D,X,Z,J,Q,this)}}else{let F=Math.max(0,W.start),N=Math.min(G.count,W.start+W.count);for(let q=F,O=N;q<O;q++)LZ.fromBufferAttribute(G,q),NH(LZ,q,X,Z,J,Q,this)}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,W=Z.length;K<W;K++){let Y=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[Y]=K}}}}}function NH(J,Q,$,Z,K,W,Y){let X=FW.distanceSqToPoint(J);if(X<$){let H=new _;FW.closestPointToPoint(J,H),H.applyMatrix4(Z);let U=K.ray.origin.distanceTo(H);if(U<K.near||U>K.far)return;W.push({distance:U,distanceToRay:Math.sqrt(X),point:H,index:Q,face:null,faceIndex:null,barycoord:null,object:Y})}}class nZ extends Q8{constructor(J=[],Q=301,$,Z,K,W,Y,X,H,U){super(J,Q,$,Z,K,W,Y,X,H,U);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class c8 extends Q8{constructor(J,Q,$,Z,K,W,Y,X,H){super(J,Q,$,Z,K,W,Y,X,H);this.isCanvasTexture=!0,this.needsUpdate=!0}}class Q6 extends Q8{constructor(J,Q,$=1014,Z,K,W,Y=1003,X=1003,H,U=1026,G=1){if(U!==1026&&U!==1027)throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let F={width:J,height:Q,depth:G};super(F,Z,K,W,Y,X,U,$,H);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new Z$(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);return Q.compareFunction=this.compareFunction,Q}}class FY extends Q6{constructor(J,Q=1014,$=301,Z,K,W=1003,Y=1003,X,H=1026){let U={width:J,height:J,depth:1},G=[U,U,U,U,U,U];super(J,J,Q,$,Z,K,W,Y,X,H);this.image=G,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class sZ extends Q8{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class TJ extends vJ{constructor(J=1,Q=1,$=1,Z=1,K=1,W=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:K,depthSegments:W};let Y=this;Z=Math.floor(Z),K=Math.floor(K),W=Math.floor(W);let X=[],H=[],U=[],G=[],F=0,N=0;q("z","y","x",-1,-1,$,Q,J,W,K,0),q("z","y","x",1,-1,$,Q,-J,W,K,1),q("x","z","y",1,1,J,$,Q,Z,W,2),q("x","z","y",1,-1,J,$,-Q,Z,W,3),q("x","y","z",1,-1,J,Q,$,Z,K,4),q("x","y","z",-1,-1,J,Q,-$,Z,K,5),this.setIndex(X),this.setAttribute("position",new YJ(H,3)),this.setAttribute("normal",new YJ(U,3)),this.setAttribute("uv",new YJ(G,2));function q(O,D,R,E,M,k,V,L,P,T,B){let z=k/P,d=V/T,b=k/2,n=V/2,Z0=L/2,v=P+1,y=T+1,u=0,I=0,x=new _;for(let h=0;h<y;h++){let f=h*d-n;for(let g=0;g<v;g++){let Y0=g*z-b;x[O]=Y0*E,x[D]=f*M,x[R]=Z0,H.push(x.x,x.y,x.z),x[O]=0,x[D]=0,x[R]=L>0?1:-1,U.push(x.x,x.y,x.z),G.push(g/P),G.push(1-h/T),u+=1}}for(let h=0;h<T;h++)for(let f=0;f<P;f++){let g=F+f+v*h,Y0=F+f+v*(h+1),G0=F+(f+1)+v*(h+1),M0=F+(f+1)+v*h;X.push(g,Y0,M0),X.push(Y0,G0,M0),I+=6}Y.addGroup(N,I,B),N+=I,F+=u}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new TJ(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class e9 extends vJ{constructor(J=1,Q=32,$=0,Z=Math.PI*2){super();this.type="CircleGeometry",this.parameters={radius:J,segments:Q,thetaStart:$,thetaLength:Z},Q=Math.max(3,Q);let K=[],W=[],Y=[],X=[],H=new _,U=new q0;W.push(0,0,0),Y.push(0,0,1),X.push(0.5,0.5);for(let G=0,F=3;G<=Q;G++,F+=3){let N=$+G/Q*Z;H.x=J*Math.cos(N),H.y=J*Math.sin(N),W.push(H.x,H.y,H.z),Y.push(0,0,1),U.x=(W[F]/J+1)/2,U.y=(W[F+1]/J+1)/2,X.push(U.x,U.y)}for(let G=1;G<=Q;G++)K.push(G,G+1,0);this.setIndex(K),this.setAttribute("position",new YJ(W,3)),this.setAttribute("normal",new YJ(Y,3)),this.setAttribute("uv",new YJ(X,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new e9(J.radius,J.segments,J.thetaStart,J.thetaLength)}}class OJ extends vJ{constructor(J=1,Q=1,$=1,Z=32,K=1,W=!1,Y=0,X=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:J,radiusBottom:Q,height:$,radialSegments:Z,heightSegments:K,openEnded:W,thetaStart:Y,thetaLength:X};let H=this;Z=Math.floor(Z),K=Math.floor(K);let U=[],G=[],F=[],N=[],q=0,O=[],D=$/2,R=0;if(E(),W===!1){if(J>0)M(!0);if(Q>0)M(!1)}this.setIndex(U),this.setAttribute("position",new YJ(G,3)),this.setAttribute("normal",new YJ(F,3)),this.setAttribute("uv",new YJ(N,2));function E(){let k=new _,V=new _,L=0,P=(Q-J)/$;for(let T=0;T<=K;T++){let B=[],z=T/K,d=z*(Q-J)+J;for(let b=0;b<=Z;b++){let n=b/Z,Z0=n*X+Y,v=Math.sin(Z0),y=Math.cos(Z0);V.x=d*v,V.y=-z*$+D,V.z=d*y,G.push(V.x,V.y,V.z),k.set(v,P,y).normalize(),F.push(k.x,k.y,k.z),N.push(n,1-z),B.push(q++)}O.push(B)}for(let T=0;T<Z;T++)for(let B=0;B<K;B++){let z=O[B][T],d=O[B+1][T],b=O[B+1][T+1],n=O[B][T+1];if(J>0||B!==0)U.push(z,d,n),L+=3;if(Q>0||B!==K-1)U.push(d,b,n),L+=3}H.addGroup(R,L,0),R+=L}function M(k){let V=q,L=new q0,P=new _,T=0,B=k===!0?J:Q,z=k===!0?1:-1;for(let b=1;b<=Z;b++)G.push(0,D*z,0),F.push(0,z,0),N.push(0.5,0.5),q++;let d=q;for(let b=0;b<=Z;b++){let Z0=b/Z*X+Y,v=Math.cos(Z0),y=Math.sin(Z0);P.x=B*y,P.y=D*z,P.z=B*v,G.push(P.x,P.y,P.z),F.push(0,z,0),L.x=v*0.5+0.5,L.y=y*0.5*z+0.5,N.push(L.x,L.y),q++}for(let b=0;b<Z;b++){let n=V+b,Z0=d+b;if(k===!0)U.push(Z0,Z0+1,n);else U.push(Z0+1,Z0,n);T+=3}H.addGroup(R,T,k===!0?1:2),R+=T}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new OJ(J.radiusTop,J.radiusBottom,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class $6 extends OJ{constructor(J=1,Q=1,$=32,Z=1,K=!1,W=0,Y=Math.PI*2){super(0,J,Q,$,Z,K,W,Y);this.type="ConeGeometry",this.parameters={radius:J,height:Q,radialSegments:$,heightSegments:Z,openEnded:K,thetaStart:W,thetaLength:Y}}static fromJSON(J){return new $6(J.radius,J.height,J.radialSegments,J.heightSegments,J.openEnded,J.thetaStart,J.thetaLength)}}class iZ extends vJ{constructor(J=[],Q=[],$=1,Z=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:J,indices:Q,radius:$,detail:Z};let K=[],W=[];if(Y(Z),H($),U(),this.setAttribute("position",new YJ(K,3)),this.setAttribute("normal",new YJ(K.slice(),3)),this.setAttribute("uv",new YJ(W,2)),Z===0)this.computeVertexNormals();else this.normalizeNormals();function Y(E){let M=new _,k=new _,V=new _;for(let L=0;L<Q.length;L+=3)N(Q[L+0],M),N(Q[L+1],k),N(Q[L+2],V),X(M,k,V,E)}function X(E,M,k,V){let L=V+1,P=[];for(let T=0;T<=L;T++){P[T]=[];let B=E.clone().lerp(k,T/L),z=M.clone().lerp(k,T/L),d=L-T;for(let b=0;b<=d;b++)if(b===0&&T===L)P[T][b]=B;else P[T][b]=B.clone().lerp(z,b/d)}for(let T=0;T<L;T++)for(let B=0;B<2*(L-T)-1;B++){let z=Math.floor(B/2);if(B%2===0)F(P[T][z+1]),F(P[T+1][z]),F(P[T][z]);else F(P[T][z+1]),F(P[T+1][z+1]),F(P[T+1][z])}}function H(E){let M=new _;for(let k=0;k<K.length;k+=3)M.x=K[k+0],M.y=K[k+1],M.z=K[k+2],M.normalize().multiplyScalar(E),K[k+0]=M.x,K[k+1]=M.y,K[k+2]=M.z}function U(){let E=new _;for(let M=0;M<K.length;M+=3){E.x=K[M+0],E.y=K[M+1],E.z=K[M+2];let k=D(E)/2/Math.PI+0.5,V=R(E)/Math.PI+0.5;W.push(k,1-V)}q(),G()}function G(){for(let E=0;E<W.length;E+=6){let M=W[E+0],k=W[E+2],V=W[E+4],L=Math.max(M,k,V),P=Math.min(M,k,V);if(L>0.9&&P<0.1){if(M<0.2)W[E+0]+=1;if(k<0.2)W[E+2]+=1;if(V<0.2)W[E+4]+=1}}}function F(E){K.push(E.x,E.y,E.z)}function N(E,M){let k=E*3;M.x=J[k+0],M.y=J[k+1],M.z=J[k+2]}function q(){let E=new _,M=new _,k=new _,V=new _,L=new q0,P=new q0,T=new q0;for(let B=0,z=0;B<K.length;B+=9,z+=6){E.set(K[B+0],K[B+1],K[B+2]),M.set(K[B+3],K[B+4],K[B+5]),k.set(K[B+6],K[B+7],K[B+8]),L.set(W[z+0],W[z+1]),P.set(W[z+2],W[z+3]),T.set(W[z+4],W[z+5]),V.copy(E).add(M).add(k).divideScalar(3);let d=D(V);O(L,z+0,E,d),O(P,z+2,M,d),O(T,z+4,k,d)}}function O(E,M,k,V){if(V<0&&E.x===1)W[M]=E.x-1;if(k.x===0&&k.z===0)W[M]=V/2/Math.PI+0.5}function D(E){return Math.atan2(E.z,-E.x)}function R(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new iZ(J.vertices,J.indices,J.radius,J.detail)}}class Z9{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){r0("Curve: .getPoint() not implemented.")}getPointAt(J,Q){let $=this.getUtoTmapping(J);return this.getPoint($,Q)}getPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));return Q}getSpacedPoints(J=5){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPointAt($/J));return Q}getLength(){let J=this.getLengths();return J[J.length-1]}getLengths(J=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===J+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let Q=[],$,Z=this.getPoint(0),K=0;Q.push(0);for(let W=1;W<=J;W++)$=this.getPoint(W/J),K+=$.distanceTo(Z),Q.push(K),Z=$;return this.cacheArcLengths=Q,Q}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(J,Q=null){let $=this.getLengths(),Z=0,K=$.length,W;if(Q)W=Q;else W=J*$[K-1];let Y=0,X=K-1,H;while(Y<=X)if(Z=Math.floor(Y+(X-Y)/2),H=$[Z]-W,H<0)Y=Z+1;else if(H>0)X=Z-1;else{X=Z;break}if(Z=X,$[Z]===W)return Z/(K-1);let U=$[Z],F=$[Z+1]-U,N=(W-U)/F;return(Z+N)/(K-1)}getTangent(J,Q){let Z=J-0.0001,K=J+0.0001;if(Z<0)Z=0;if(K>1)K=1;let W=this.getPoint(Z),Y=this.getPoint(K),X=Q||(W.isVector2?new q0:new _);return X.copy(Y).sub(W).normalize(),X}getTangentAt(J,Q){let $=this.getUtoTmapping(J);return this.getTangent($,Q)}computeFrenetFrames(J,Q=!1){let $=new _,Z=[],K=[],W=[],Y=new _,X=new QJ;for(let N=0;N<=J;N++){let q=N/J;Z[N]=this.getTangentAt(q,new _)}K[0]=new _,W[0]=new _;let H=Number.MAX_VALUE,U=Math.abs(Z[0].x),G=Math.abs(Z[0].y),F=Math.abs(Z[0].z);if(U<=H)H=U,$.set(1,0,0);if(G<=H)H=G,$.set(0,1,0);if(F<=H)$.set(0,0,1);Y.crossVectors(Z[0],$).normalize(),K[0].crossVectors(Z[0],Y),W[0].crossVectors(Z[0],K[0]);for(let N=1;N<=J;N++){if(K[N]=K[N-1].clone(),W[N]=W[N-1].clone(),Y.crossVectors(Z[N-1],Z[N]),Y.length()>Number.EPSILON){Y.normalize();let q=Math.acos(FJ(Z[N-1].dot(Z[N]),-1,1));K[N].applyMatrix4(X.makeRotationAxis(Y,q))}W[N].crossVectors(Z[N],K[N])}if(Q===!0){let N=Math.acos(FJ(K[0].dot(K[J]),-1,1));if(N/=J,Z[0].dot(Y.crossVectors(K[0],K[J]))>0)N=-N;for(let q=1;q<=J;q++)K[q].applyMatrix4(X.makeRotationAxis(Z[q],N*q)),W[q].crossVectors(Z[q],K[q])}return{tangents:Z,normals:K,binormals:W}}clone(){return new this.constructor().copy(this)}copy(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}toJSON(){let J={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return J.arcLengthDivisions=this.arcLengthDivisions,J.type=this.type,J}fromJSON(J){return this.arcLengthDivisions=J.arcLengthDivisions,this}}class H$ extends Z9{constructor(J=0,Q=0,$=1,Z=1,K=0,W=Math.PI*2,Y=!1,X=0){super();this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=J,this.aY=Q,this.xRadius=$,this.yRadius=Z,this.aStartAngle=K,this.aEndAngle=W,this.aClockwise=Y,this.aRotation=X}getPoint(J,Q=new q0){let $=Q,Z=Math.PI*2,K=this.aEndAngle-this.aStartAngle,W=Math.abs(K)<Number.EPSILON;while(K<0)K+=Z;while(K>Z)K-=Z;if(K<Number.EPSILON)if(W)K=0;else K=Z;if(this.aClockwise===!0&&!W)if(K===Z)K=-Z;else K=K-Z;let Y=this.aStartAngle+J*K,X=this.aX+this.xRadius*Math.cos(Y),H=this.aY+this.yRadius*Math.sin(Y);if(this.aRotation!==0){let U=Math.cos(this.aRotation),G=Math.sin(this.aRotation),F=X-this.aX,N=H-this.aY;X=F*U-N*G+this.aX,H=F*G+N*U+this.aY}return $.set(X,H)}copy(J){return super.copy(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}toJSON(){let J=super.toJSON();return J.aX=this.aX,J.aY=this.aY,J.xRadius=this.xRadius,J.yRadius=this.yRadius,J.aStartAngle=this.aStartAngle,J.aEndAngle=this.aEndAngle,J.aClockwise=this.aClockwise,J.aRotation=this.aRotation,J}fromJSON(J){return super.fromJSON(J),this.aX=J.aX,this.aY=J.aY,this.xRadius=J.xRadius,this.yRadius=J.yRadius,this.aStartAngle=J.aStartAngle,this.aEndAngle=J.aEndAngle,this.aClockwise=J.aClockwise,this.aRotation=J.aRotation,this}}class EY extends H${constructor(J,Q,$,Z,K,W){super(J,Q,$,$,Z,K,W);this.isArcCurve=!0,this.type="ArcCurve"}}function qY(){let J=0,Q=0,$=0,Z=0;function K(W,Y,X,H){J=W,Q=X,$=-3*W+3*Y-2*X-H,Z=2*W-2*Y+X+H}return{initCatmullRom:function(W,Y,X,H,U){K(Y,X,U*(X-W),U*(H-Y))},initNonuniformCatmullRom:function(W,Y,X,H,U,G,F){let N=(Y-W)/U-(X-W)/(U+G)+(X-Y)/G,q=(X-Y)/G-(H-Y)/(G+F)+(H-X)/F;N*=G,q*=G,K(Y,X,N,q)},calc:function(W){let Y=W*W,X=Y*W;return J+Q*W+$*Y+Z*X}}}var GH=new _,FH=new _,XW=new qY,HW=new qY,UW=new qY;class J7 extends Z9{constructor(J=[],Q=!1,$="centripetal",Z=0.5){super();this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=J,this.closed=Q,this.curveType=$,this.tension=Z}getPoint(J,Q=new _){let $=Q,Z=this.points,K=Z.length,W=(K-(this.closed?0:1))*J,Y=Math.floor(W),X=W-Y;if(this.closed)Y+=Y>0?0:(Math.floor(Math.abs(Y)/K)+1)*K;else if(X===0&&Y===K-1)Y=K-2,X=1;let H,U;if(this.closed||Y>0)H=Z[(Y-1)%K];else FH.subVectors(Z[0],Z[1]).add(Z[0]),H=FH;let G=Z[Y%K],F=Z[(Y+1)%K];if(this.closed||Y+2<K)U=Z[(Y+2)%K];else GH.subVectors(Z[K-1],Z[K-2]).add(Z[K-1]),U=GH;if(this.curveType==="centripetal"||this.curveType==="chordal"){let N=this.curveType==="chordal"?0.5:0.25,q=Math.pow(H.distanceToSquared(G),N),O=Math.pow(G.distanceToSquared(F),N),D=Math.pow(F.distanceToSquared(U),N);if(O<0.0001)O=1;if(q<0.0001)q=O;if(D<0.0001)D=O;XW.initNonuniformCatmullRom(H.x,G.x,F.x,U.x,q,O,D),HW.initNonuniformCatmullRom(H.y,G.y,F.y,U.y,q,O,D),UW.initNonuniformCatmullRom(H.z,G.z,F.z,U.z,q,O,D)}else if(this.curveType==="catmullrom")XW.initCatmullRom(H.x,G.x,F.x,U.x,this.tension),HW.initCatmullRom(H.y,G.y,F.y,U.y,this.tension),UW.initCatmullRom(H.z,G.z,F.z,U.z,this.tension);return $.set(XW.calc(X),HW.calc(X),UW.calc(X)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(Z.clone())}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let Z=this.points[Q];J.points.push(Z.toArray())}return J.closed=this.closed,J.curveType=this.curveType,J.tension=this.tension,J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(new _().fromArray(Z))}return this.closed=J.closed,this.curveType=J.curveType,this.tension=J.tension,this}}function EH(J,Q,$,Z,K){let W=(Z-Q)*0.5,Y=(K-$)*0.5,X=J*J,H=J*X;return(2*$-2*Z+W+Y)*H+(-3*$+3*Z-2*W-Y)*X+W*J+$}function OG(J,Q){let $=1-J;return $*$*Q}function RG(J,Q){return 2*(1-J)*J*Q}function LG(J,Q){return J*J*Q}function mQ(J,Q,$,Z){return OG(J,Q)+RG(J,$)+LG(J,Z)}function VG(J,Q){let $=1-J;return $*$*$*Q}function DG(J,Q){let $=1-J;return 3*$*$*J*Q}function BG(J,Q){return 3*(1-J)*J*J*Q}function MG(J,Q){return J*J*J*Q}function lQ(J,Q,$,Z,K){return VG(J,Q)+DG(J,$)+BG(J,Z)+MG(J,K)}class oZ extends Z9{constructor(J=new q0,Q=new q0,$=new q0,Z=new q0){super();this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=J,this.v1=Q,this.v2=$,this.v3=Z}getPoint(J,Q=new q0){let $=Q,Z=this.v0,K=this.v1,W=this.v2,Y=this.v3;return $.set(lQ(J,Z.x,K.x,W.x,Y.x),lQ(J,Z.y,K.y,W.y,Y.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class OY extends Z9{constructor(J=new _,Q=new _,$=new _,Z=new _){super();this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=J,this.v1=Q,this.v2=$,this.v3=Z}getPoint(J,Q=new _){let $=Q,Z=this.v0,K=this.v1,W=this.v2,Y=this.v3;return $.set(lQ(J,Z.x,K.x,W.x,Y.x),lQ(J,Z.y,K.y,W.y,Y.y),lQ(J,Z.z,K.z,W.z,Y.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this.v3.copy(J.v3),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J.v3=this.v3.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this.v3.fromArray(J.v3),this}}class aZ extends Z9{constructor(J=new q0,Q=new q0){super();this.isLineCurve=!0,this.type="LineCurve",this.v1=J,this.v2=Q}getPoint(J,Q=new q0){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new q0){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class RY extends Z9{constructor(J=new _,Q=new _){super();this.isLineCurve3=!0,this.type="LineCurve3",this.v1=J,this.v2=Q}getPoint(J,Q=new _){let $=Q;if(J===1)$.copy(this.v2);else $.copy(this.v2).sub(this.v1),$.multiplyScalar(J).add(this.v1);return $}getPointAt(J,Q){return this.getPoint(J,Q)}getTangent(J,Q=new _){return Q.subVectors(this.v2,this.v1).normalize()}getTangentAt(J,Q){return this.getTangent(J,Q)}copy(J){return super.copy(J),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class rZ extends Z9{constructor(J=new q0,Q=new q0,$=new q0){super();this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new q0){let $=Q,Z=this.v0,K=this.v1,W=this.v2;return $.set(mQ(J,Z.x,K.x,W.x),mQ(J,Z.y,K.y,W.y)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class n8 extends Z9{constructor(J=new _,Q=new _,$=new _){super();this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=J,this.v1=Q,this.v2=$}getPoint(J,Q=new _){let $=Q,Z=this.v0,K=this.v1,W=this.v2;return $.set(mQ(J,Z.x,K.x,W.x),mQ(J,Z.y,K.y,W.y),mQ(J,Z.z,K.z,W.z)),$}copy(J){return super.copy(J),this.v0.copy(J.v0),this.v1.copy(J.v1),this.v2.copy(J.v2),this}toJSON(){let J=super.toJSON();return J.v0=this.v0.toArray(),J.v1=this.v1.toArray(),J.v2=this.v2.toArray(),J}fromJSON(J){return super.fromJSON(J),this.v0.fromArray(J.v0),this.v1.fromArray(J.v1),this.v2.fromArray(J.v2),this}}class tZ extends Z9{constructor(J=[]){super();this.isSplineCurve=!0,this.type="SplineCurve",this.points=J}getPoint(J,Q=new q0){let $=Q,Z=this.points,K=(Z.length-1)*J,W=Math.floor(K),Y=K-W,X=Z[W===0?W:W-1],H=Z[W],U=Z[W>Z.length-2?Z.length-1:W+1],G=Z[W>Z.length-3?Z.length-1:W+2];return $.set(EH(Y,X.x,H.x,U.x,G.x),EH(Y,X.y,H.y,U.y,G.y)),$}copy(J){super.copy(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.points=[];for(let Q=0,$=this.points.length;Q<$;Q++){let Z=this.points[Q];J.points.push(Z.toArray())}return J}fromJSON(J){super.fromJSON(J),this.points=[];for(let Q=0,$=J.points.length;Q<$;Q++){let Z=J.points[Q];this.points.push(new q0().fromArray(Z))}return this}}var EW=Object.freeze({__proto__:null,ArcCurve:EY,CatmullRomCurve3:J7,CubicBezierCurve:oZ,CubicBezierCurve3:OY,EllipseCurve:H$,LineCurve:aZ,LineCurve3:RY,QuadraticBezierCurve:rZ,QuadraticBezierCurve3:n8,SplineCurve:tZ});class LY extends Z9{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(J){this.curves.push(J)}closePath(){let J=this.curves[0].getPoint(0),Q=this.curves[this.curves.length-1].getPoint(1);if(!J.equals(Q)){let $=J.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new EW[$](Q,J))}return this}getPoint(J,Q){let $=J*this.getLength(),Z=this.getCurveLengths(),K=0;while(K<Z.length){if(Z[K]>=$){let W=Z[K]-$,Y=this.curves[K],X=Y.getLength(),H=X===0?0:1-W/X;return Y.getPointAt(H,Q)}K++}return null}getLength(){let J=this.getCurveLengths();return J[J.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let J=[],Q=0;for(let $=0,Z=this.curves.length;$<Z;$++)Q+=this.curves[$].getLength(),J.push(Q);return this.cacheLengths=J,J}getSpacedPoints(J=40){let Q=[];for(let $=0;$<=J;$++)Q.push(this.getPoint($/J));if(this.autoClose)Q.push(Q[0]);return Q}getPoints(J=12){let Q=[],$;for(let Z=0,K=this.curves;Z<K.length;Z++){let W=K[Z],Y=W.isEllipseCurve?J*2:W.isLineCurve||W.isLineCurve3?1:W.isSplineCurve?J*W.points.length:J,X=W.getPoints(Y);for(let H=0;H<X.length;H++){let U=X[H];if($&&$.equals(U))continue;Q.push(U),$=U}}if(this.autoClose&&Q.length>1&&!Q[Q.length-1].equals(Q[0]))Q.push(Q[0]);return Q}copy(J){super.copy(J),this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let Z=J.curves[Q];this.curves.push(Z.clone())}return this.autoClose=J.autoClose,this}toJSON(){let J=super.toJSON();J.autoClose=this.autoClose,J.curves=[];for(let Q=0,$=this.curves.length;Q<$;Q++){let Z=this.curves[Q];J.curves.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.autoClose=J.autoClose,this.curves=[];for(let Q=0,$=J.curves.length;Q<$;Q++){let Z=J.curves[Q];this.curves.push(new EW[Z.type]().fromJSON(Z))}return this}}class IZ extends LY{constructor(J){super();if(this.type="Path",this.currentPoint=new q0,J)this.setFromPoints(J)}setFromPoints(J){this.moveTo(J[0].x,J[0].y);for(let Q=1,$=J.length;Q<$;Q++)this.lineTo(J[Q].x,J[Q].y);return this}moveTo(J,Q){return this.currentPoint.set(J,Q),this}lineTo(J,Q){let $=new aZ(this.currentPoint.clone(),new q0(J,Q));return this.curves.push($),this.currentPoint.set(J,Q),this}quadraticCurveTo(J,Q,$,Z){let K=new rZ(this.currentPoint.clone(),new q0(J,Q),new q0($,Z));return this.curves.push(K),this.currentPoint.set($,Z),this}bezierCurveTo(J,Q,$,Z,K,W){let Y=new oZ(this.currentPoint.clone(),new q0(J,Q),new q0($,Z),new q0(K,W));return this.curves.push(Y),this.currentPoint.set(K,W),this}splineThru(J){let Q=[this.currentPoint.clone()].concat(J),$=new tZ(Q);return this.curves.push($),this.currentPoint.copy(J[J.length-1]),this}arc(J,Q,$,Z,K,W){let Y=this.currentPoint.x,X=this.currentPoint.y;return this.absarc(J+Y,Q+X,$,Z,K,W),this}absarc(J,Q,$,Z,K,W){return this.absellipse(J,Q,$,$,Z,K,W),this}ellipse(J,Q,$,Z,K,W,Y,X){let H=this.currentPoint.x,U=this.currentPoint.y;return this.absellipse(J+H,Q+U,$,Z,K,W,Y,X),this}absellipse(J,Q,$,Z,K,W,Y,X){let H=new H$(J,Q,$,Z,K,W,Y,X);if(this.curves.length>0){let G=H.getPoint(0);if(!G.equals(this.currentPoint))this.lineTo(G.x,G.y)}this.curves.push(H);let U=H.getPoint(1);return this.currentPoint.copy(U),this}copy(J){return super.copy(J),this.currentPoint.copy(J.currentPoint),this}toJSON(){let J=super.toJSON();return J.currentPoint=this.currentPoint.toArray(),J}fromJSON(J){return super.fromJSON(J),this.currentPoint.fromArray(J.currentPoint),this}}class U$ extends IZ{constructor(J){super(J);this.uuid=J9(),this.type="Shape",this.holes=[]}getPointsHoles(J){let Q=[];for(let $=0,Z=this.holes.length;$<Z;$++)Q[$]=this.holes[$].getPoints(J);return Q}extractPoints(J){return{shape:this.getPoints(J),holes:this.getPointsHoles(J)}}copy(J){super.copy(J),this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let Z=J.holes[Q];this.holes.push(Z.clone())}return this}toJSON(){let J=super.toJSON();J.uuid=this.uuid,J.holes=[];for(let Q=0,$=this.holes.length;Q<$;Q++){let Z=this.holes[Q];J.holes.push(Z.toJSON())}return J}fromJSON(J){super.fromJSON(J),this.uuid=J.uuid,this.holes=[];for(let Q=0,$=J.holes.length;Q<$;Q++){let Z=J.holes[Q];this.holes.push(new IZ().fromJSON(Z))}return this}}function kG(J,Q,$=2){let Z=Q&&Q.length,K=Z?Q[0]*$:J.length,W=IU(J,0,K,$,!0),Y=[];if(!W||W.next===W.prev)return Y;let X,H,U;if(Z)W=AG(J,Q,W,$);if(J.length>80*$){X=J[0],H=J[1];let G=X,F=H;for(let N=$;N<K;N+=$){let q=J[N],O=J[N+1];if(q<X)X=q;if(O<H)H=O;if(q>G)G=q;if(O>F)F=O}U=Math.max(G-X,F-H),U=U!==0?32767/U:0}return dQ(W,Y,$,X,H,U,0),Y}function IU(J,Q,$,Z,K){let W;if(K===xG(J,Q,$,Z)>0)for(let Y=Q;Y<$;Y+=Z)W=qH(Y/Z|0,J[Y],J[Y+1],W);else for(let Y=$-Z;Y>=Q;Y-=Z)W=qH(Y/Z|0,J[Y],J[Y+1],W);if(W&&d6(W,W.next))nQ(W),W=W.next;return W}function m7(J,Q){if(!J)return J;if(!Q)Q=J;let $=J,Z;do if(Z=!1,!$.steiner&&(d6($,$.next)||eJ($.prev,$,$.next)===0)){if(nQ($),$=Q=$.prev,$===$.next)break;Z=!0}else $=$.next;while(Z||$!==Q);return Q}function dQ(J,Q,$,Z,K,W,Y){if(!J)return;if(!Y&&W)jG(J,Z,K,W);let X=J;while(J.prev!==J.next){let{prev:H,next:U}=J;if(W?PG(J,Z,K,W):CG(J)){Q.push(H.i,J.i,U.i),nQ(J),J=U.next,X=U.next;continue}if(J=U,J===X){if(!Y)dQ(m7(J),Q,$,Z,K,W,1);else if(Y===1)J=IG(m7(J),Q),dQ(J,Q,$,Z,K,W,2);else if(Y===2)zG(J,Q,$,Z,K,W);break}}}function CG(J){let Q=J.prev,$=J,Z=J.next;if(eJ(Q,$,Z)>=0)return!1;let K=Q.x,W=$.x,Y=Z.x,X=Q.y,H=$.y,U=Z.y,G=Math.min(K,W,Y),F=Math.min(X,H,U),N=Math.max(K,W,Y),q=Math.max(X,H,U),O=Z.next;while(O!==Q){if(O.x>=G&&O.x<=N&&O.y>=F&&O.y<=q&&xQ(K,X,W,H,Y,U,O.x,O.y)&&eJ(O.prev,O,O.next)>=0)return!1;O=O.next}return!0}function PG(J,Q,$,Z){let K=J.prev,W=J,Y=J.next;if(eJ(K,W,Y)>=0)return!1;let X=K.x,H=W.x,U=Y.x,G=K.y,F=W.y,N=Y.y,q=Math.min(X,H,U),O=Math.min(G,F,N),D=Math.max(X,H,U),R=Math.max(G,F,N),E=qW(q,O,Q,$,Z),M=qW(D,R,Q,$,Z),k=J.prevZ,V=J.nextZ;while(k&&k.z>=E&&V&&V.z<=M){if(k.x>=q&&k.x<=D&&k.y>=O&&k.y<=R&&k!==K&&k!==Y&&xQ(X,G,H,F,U,N,k.x,k.y)&&eJ(k.prev,k,k.next)>=0)return!1;if(k=k.prevZ,V.x>=q&&V.x<=D&&V.y>=O&&V.y<=R&&V!==K&&V!==Y&&xQ(X,G,H,F,U,N,V.x,V.y)&&eJ(V.prev,V,V.next)>=0)return!1;V=V.nextZ}while(k&&k.z>=E){if(k.x>=q&&k.x<=D&&k.y>=O&&k.y<=R&&k!==K&&k!==Y&&xQ(X,G,H,F,U,N,k.x,k.y)&&eJ(k.prev,k,k.next)>=0)return!1;k=k.prevZ}while(V&&V.z<=M){if(V.x>=q&&V.x<=D&&V.y>=O&&V.y<=R&&V!==K&&V!==Y&&xQ(X,G,H,F,U,N,V.x,V.y)&&eJ(V.prev,V,V.next)>=0)return!1;V=V.nextZ}return!0}function IG(J,Q){let $=J;do{let Z=$.prev,K=$.next.next;if(!d6(Z,K)&&AU(Z,$,$.next,K)&&cQ(Z,K)&&cQ(K,Z))Q.push(Z.i,$.i,K.i),nQ($),nQ($.next),$=J=K;$=$.next}while($!==J);return m7($)}function zG(J,Q,$,Z,K,W){let Y=J;do{let X=Y.next.next;while(X!==Y.prev){if(Y.i!==X.i&&fG(Y,X)){let H=TU(Y,X);Y=m7(Y,Y.next),H=m7(H,H.next),dQ(Y,Q,$,Z,K,W,0),dQ(H,Q,$,Z,K,W,0);return}X=X.next}Y=Y.next}while(Y!==J)}function AG(J,Q,$,Z){let K=[];for(let W=0,Y=Q.length;W<Y;W++){let X=Q[W]*Z,H=W<Y-1?Q[W+1]*Z:J.length,U=IU(J,X,H,Z,!1);if(U===U.next)U.steiner=!0;K.push(vG(U))}K.sort(TG);for(let W=0;W<K.length;W++)$=_G(K[W],$);return $}function TG(J,Q){let $=J.x-Q.x;if($===0){if($=J.y-Q.y,$===0){let Z=(J.next.y-J.y)/(J.next.x-J.x),K=(Q.next.y-Q.y)/(Q.next.x-Q.x);$=Z-K}}return $}function _G(J,Q){let $=wG(J,Q);if(!$)return Q;let Z=TU($,J);return m7(Z,Z.next),m7($,$.next)}function wG(J,Q){let $=Q,Z=J.x,K=J.y,W=-1/0,Y;if(d6(J,$))return $;do{if(d6(J,$.next))return $.next;else if(K<=$.y&&K>=$.next.y&&$.next.y!==$.y){let F=$.x+(K-$.y)*($.next.x-$.x)/($.next.y-$.y);if(F<=Z&&F>W){if(W=F,Y=$.x<$.next.x?$:$.next,F===Z)return Y}}$=$.next}while($!==Q);if(!Y)return null;let X=Y,H=Y.x,U=Y.y,G=1/0;$=Y;do{if(Z>=$.x&&$.x>=H&&Z!==$.x&&zU(K<U?Z:W,K,H,U,K<U?W:Z,K,$.x,$.y)){let F=Math.abs(K-$.y)/(Z-$.x);if(cQ($,J)&&(F<G||F===G&&($.x>Y.x||$.x===Y.x&&SG(Y,$))))Y=$,G=F}$=$.next}while($!==X);return Y}function SG(J,Q){return eJ(J.prev,J,Q.prev)<0&&eJ(Q.next,J,J.next)<0}function jG(J,Q,$,Z){let K=J;do{if(K.z===0)K.z=qW(K.x,K.y,Q,$,Z);K.prevZ=K.prev,K.nextZ=K.next,K=K.next}while(K!==J);K.prevZ.nextZ=null,K.prevZ=null,yG(K)}function yG(J){let Q,$=1;do{let Z=J,K;J=null;let W=null;Q=0;while(Z){Q++;let Y=Z,X=0;for(let U=0;U<$;U++)if(X++,Y=Y.nextZ,!Y)break;let H=$;while(X>0||H>0&&Y){if(X!==0&&(H===0||!Y||Z.z<=Y.z))K=Z,Z=Z.nextZ,X--;else K=Y,Y=Y.nextZ,H--;if(W)W.nextZ=K;else J=K;K.prevZ=W,W=K}Z=Y}W.nextZ=null,$*=2}while(Q>1);return J}function qW(J,Q,$,Z,K){return J=(J-$)*K|0,Q=(Q-Z)*K|0,J=(J|J<<8)&16711935,J=(J|J<<4)&252645135,J=(J|J<<2)&858993459,J=(J|J<<1)&1431655765,Q=(Q|Q<<8)&16711935,Q=(Q|Q<<4)&252645135,Q=(Q|Q<<2)&858993459,Q=(Q|Q<<1)&1431655765,J|Q<<1}function vG(J){let Q=J,$=J;do{if(Q.x<$.x||Q.x===$.x&&Q.y<$.y)$=Q;Q=Q.next}while(Q!==J);return $}function zU(J,Q,$,Z,K,W,Y,X){return(K-Y)*(Q-X)>=(J-Y)*(W-X)&&(J-Y)*(Z-X)>=($-Y)*(Q-X)&&($-Y)*(W-X)>=(K-Y)*(Z-X)}function xQ(J,Q,$,Z,K,W,Y,X){return!(J===Y&&Q===X)&&zU(J,Q,$,Z,K,W,Y,X)}function fG(J,Q){return J.next.i!==Q.i&&J.prev.i!==Q.i&&!bG(J,Q)&&(cQ(J,Q)&&cQ(Q,J)&&hG(J,Q)&&(eJ(J.prev,J,Q.prev)||eJ(J,Q.prev,Q))||d6(J,Q)&&eJ(J.prev,J,J.next)>0&&eJ(Q.prev,Q,Q.next)>0)}function eJ(J,Q,$){return(Q.y-J.y)*($.x-Q.x)-(Q.x-J.x)*($.y-Q.y)}function d6(J,Q){return J.x===Q.x&&J.y===Q.y}function AU(J,Q,$,Z){let K=DZ(eJ(J,Q,$)),W=DZ(eJ(J,Q,Z)),Y=DZ(eJ($,Z,J)),X=DZ(eJ($,Z,Q));if(K!==W&&Y!==X)return!0;if(K===0&&VZ(J,$,Q))return!0;if(W===0&&VZ(J,Z,Q))return!0;if(Y===0&&VZ($,J,Z))return!0;if(X===0&&VZ($,Q,Z))return!0;return!1}function VZ(J,Q,$){return Q.x<=Math.max(J.x,$.x)&&Q.x>=Math.min(J.x,$.x)&&Q.y<=Math.max(J.y,$.y)&&Q.y>=Math.min(J.y,$.y)}function DZ(J){return J>0?1:J<0?-1:0}function bG(J,Q){let $=J;do{if($.i!==J.i&&$.next.i!==J.i&&$.i!==Q.i&&$.next.i!==Q.i&&AU($,$.next,J,Q))return!0;$=$.next}while($!==J);return!1}function cQ(J,Q){return eJ(J.prev,J,J.next)<0?eJ(J,Q,J.next)>=0&&eJ(J,J.prev,Q)>=0:eJ(J,Q,J.prev)<0||eJ(J,J.next,Q)<0}function hG(J,Q){let $=J,Z=!1,K=(J.x+Q.x)/2,W=(J.y+Q.y)/2;do{if($.y>W!==$.next.y>W&&$.next.y!==$.y&&K<($.next.x-$.x)*(W-$.y)/($.next.y-$.y)+$.x)Z=!Z;$=$.next}while($!==J);return Z}function TU(J,Q){let $=OW(J.i,J.x,J.y),Z=OW(Q.i,Q.x,Q.y),K=J.next,W=Q.prev;return J.next=Q,Q.prev=J,$.next=K,K.prev=$,Z.next=$,$.prev=Z,W.next=Z,Z.prev=W,Z}function qH(J,Q,$,Z){let K=OW(J,Q,$);if(!Z)K.prev=K,K.next=K;else K.next=Z.next,K.prev=Z,Z.next.prev=K,Z.next=K;return K}function nQ(J){if(J.next.prev=J.prev,J.prev.next=J.next,J.prevZ)J.prevZ.nextZ=J.nextZ;if(J.nextZ)J.nextZ.prevZ=J.prevZ}function OW(J,Q,$){return{i:J,x:Q,y:$,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function xG(J,Q,$,Z){let K=0;for(let W=Q,Y=$-Z;W<$;W+=Z)K+=(J[Y]-J[W])*(J[W+1]+J[Y+1]),Y=W;return K}class _U{static triangulate(J,Q,$=2){return kG(J,Q,$)}}class m6{static area(J){let Q=J.length,$=0;for(let Z=Q-1,K=0;K<Q;Z=K++)$+=J[Z].x*J[K].y-J[K].x*J[Z].y;return $*0.5}static isClockWise(J){return m6.area(J)<0}static triangulateShape(J,Q){let $=[],Z=[],K=[];OH(J),RH($,J);let W=J.length;Q.forEach(OH);for(let X=0;X<Q.length;X++)Z.push(W),W+=Q[X].length,RH($,Q[X]);let Y=_U.triangulate($,Z);for(let X=0;X<Y.length;X+=3)K.push(Y.slice(X,X+3));return K}}function OH(J){let Q=J.length;if(Q>2&&J[Q-1].equals(J[0]))J.pop()}function RH(J,Q){for(let $=0;$<Q.length;$++)J.push(Q[$].x),J.push(Q[$].y)}class N$ extends iZ{constructor(J=1,Q=0){let $=(1+Math.sqrt(5))/2,Z=[-1,$,0,1,$,0,-1,-$,0,1,-$,0,0,-1,$,0,1,$,0,-1,-$,0,1,-$,$,0,-1,$,0,1,-$,0,-1,-$,0,1],K=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(Z,K,J,Q);this.type="IcosahedronGeometry",this.parameters={radius:J,detail:Q}}static fromJSON(J){return new N$(J.radius,J.detail)}}class C7 extends vJ{constructor(J=[new q0(0,-0.5),new q0(0.5,0),new q0(0,0.5)],Q=12,$=0,Z=Math.PI*2){super();this.type="LatheGeometry",this.parameters={points:J,segments:Q,phiStart:$,phiLength:Z},Q=Math.floor(Q),Z=FJ(Z,0,Math.PI*2);let K=[],W=[],Y=[],X=[],H=[],U=1/Q,G=new _,F=new q0,N=new _,q=new _,O=new _,D=0,R=0;for(let E=0;E<=J.length-1;E++)switch(E){case 0:D=J[E+1].x-J[E].x,R=J[E+1].y-J[E].y,N.x=R*1,N.y=-D,N.z=R*0,O.copy(N),N.normalize(),X.push(N.x,N.y,N.z);break;case J.length-1:X.push(O.x,O.y,O.z);break;default:D=J[E+1].x-J[E].x,R=J[E+1].y-J[E].y,N.x=R*1,N.y=-D,N.z=R*0,q.copy(N),N.x+=O.x,N.y+=O.y,N.z+=O.z,N.normalize(),X.push(N.x,N.y,N.z),O.copy(q)}for(let E=0;E<=Q;E++){let M=$+E*U*Z,k=Math.sin(M),V=Math.cos(M);for(let L=0;L<=J.length-1;L++){G.x=J[L].x*k,G.y=J[L].y,G.z=J[L].x*V,W.push(G.x,G.y,G.z),F.x=E/Q,F.y=L/(J.length-1),Y.push(F.x,F.y);let P=X[3*L+0]*k,T=X[3*L+1],B=X[3*L+0]*V;H.push(P,T,B)}}for(let E=0;E<Q;E++)for(let M=0;M<J.length-1;M++){let k=M+E*J.length,V=k,L=k+J.length,P=k+J.length+1,T=k+1;K.push(V,L,T),K.push(P,T,L)}this.setIndex(K),this.setAttribute("position",new YJ(W,3)),this.setAttribute("uv",new YJ(Y,2)),this.setAttribute("normal",new YJ(H,3))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new C7(J.points,J.segments,J.phiStart,J.phiLength)}}class RJ extends vJ{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let K=J/2,W=Q/2,Y=Math.floor($),X=Math.floor(Z),H=Y+1,U=X+1,G=J/Y,F=Q/X,N=[],q=[],O=[],D=[];for(let R=0;R<U;R++){let E=R*F-W;for(let M=0;M<H;M++){let k=M*G-K;q.push(k,-E,0),O.push(0,0,1),D.push(M/Y),D.push(1-R/X)}}for(let R=0;R<X;R++)for(let E=0;E<Y;E++){let M=E+H*R,k=E+H*(R+1),V=E+1+H*(R+1),L=E+1+H*R;N.push(M,k,L),N.push(k,V,L)}this.setIndex(N),this.setAttribute("position",new YJ(q,3)),this.setAttribute("normal",new YJ(O,3)),this.setAttribute("uv",new YJ(D,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new RJ(J.width,J.height,J.widthSegments,J.heightSegments)}}class G$ extends vJ{constructor(J=new U$([new q0(0,0.5),new q0(-0.5,-0.5),new q0(0.5,-0.5)]),Q=12){super();this.type="ShapeGeometry",this.parameters={shapes:J,curveSegments:Q};let $=[],Z=[],K=[],W=[],Y=0,X=0;if(Array.isArray(J)===!1)H(J);else for(let U=0;U<J.length;U++)H(J[U]),this.addGroup(Y,X,U),Y+=X,X=0;this.setIndex($),this.setAttribute("position",new YJ(Z,3)),this.setAttribute("normal",new YJ(K,3)),this.setAttribute("uv",new YJ(W,2));function H(U){let G=Z.length/3,F=U.extractPoints(Q),N=F.shape,q=F.holes;if(m6.isClockWise(N)===!1)N=N.reverse();for(let D=0,R=q.length;D<R;D++){let E=q[D];if(m6.isClockWise(E)===!0)q[D]=E.reverse()}let O=m6.triangulateShape(N,q);for(let D=0,R=q.length;D<R;D++){let E=q[D];N=N.concat(E)}for(let D=0,R=N.length;D<R;D++){let E=N[D];Z.push(E.x,E.y,0),K.push(0,0,1),W.push(E.x,E.y)}for(let D=0,R=O.length;D<R;D++){let E=O[D],M=E[0]+G,k=E[1]+G,V=E[2]+G;$.push(M,k,V),X+=3}}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON(),Q=this.parameters.shapes;return gG(Q,J)}static fromJSON(J,Q){let $=[];for(let Z=0,K=J.shapes.length;Z<K;Z++){let W=Q[J.shapes[Z]];$.push(W)}return new G$($,J.curveSegments)}}function gG(J,Q){if(Q.shapes=[],Array.isArray(J))for(let $=0,Z=J.length;$<Z;$++){let K=J[$];Q.shapes.push(K.uuid)}else Q.shapes.push(J.uuid);return Q}class H8 extends vJ{constructor(J=1,Q=32,$=16,Z=0,K=Math.PI*2,W=0,Y=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:$,phiStart:Z,phiLength:K,thetaStart:W,thetaLength:Y},Q=Math.max(3,Math.floor(Q)),$=Math.max(2,Math.floor($));let X=Math.min(W+Y,Math.PI),H=0,U=[],G=new _,F=new _,N=[],q=[],O=[],D=[];for(let R=0;R<=$;R++){let E=[],M=R/$,k=W+M*Y,V=J*Math.cos(k),L=Math.sqrt(J*J-V*V),P=0;if(R===0&&W===0)P=0.5/Q;else if(R===$&&X===Math.PI)P=-0.5/Q;for(let T=0;T<=Q;T++){let B=T/Q,z=Z+B*K;G.x=-L*Math.cos(z),G.y=V,G.z=L*Math.sin(z),q.push(G.x,G.y,G.z),F.copy(G).normalize(),O.push(F.x,F.y,F.z),D.push(B+P,1-M),E.push(H++)}U.push(E)}for(let R=0;R<$;R++)for(let E=0;E<Q;E++){let M=U[R][E+1],k=U[R][E],V=U[R+1][E],L=U[R+1][E+1];if(R!==0||W>0)N.push(M,k,L);if(R!==$-1||X<Math.PI)N.push(k,V,L)}this.setIndex(N),this.setAttribute("position",new YJ(q,3)),this.setAttribute("normal",new YJ(O,3)),this.setAttribute("uv",new YJ(D,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new H8(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}class f9 extends vJ{constructor(J=1,Q=0.4,$=12,Z=48,K=Math.PI*2,W=0,Y=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:J,tube:Q,radialSegments:$,tubularSegments:Z,arc:K,thetaStart:W,thetaLength:Y},$=Math.floor($),Z=Math.floor(Z);let X=[],H=[],U=[],G=[],F=new _,N=new _,q=new _;for(let O=0;O<=$;O++){let D=W+O/$*Y;for(let R=0;R<=Z;R++){let E=R/Z*K;N.x=(J+Q*Math.cos(D))*Math.cos(E),N.y=(J+Q*Math.cos(D))*Math.sin(E),N.z=Q*Math.sin(D),H.push(N.x,N.y,N.z),F.x=J*Math.cos(E),F.y=J*Math.sin(E),q.subVectors(N,F).normalize(),U.push(q.x,q.y,q.z),G.push(R/Z),G.push(O/$)}}for(let O=1;O<=$;O++)for(let D=1;D<=Z;D++){let R=(Z+1)*O+D-1,E=(Z+1)*(O-1)+D-1,M=(Z+1)*(O-1)+D,k=(Z+1)*O+D;X.push(R,E,k),X.push(E,M,k)}this.setIndex(X),this.setAttribute("position",new YJ(H,3)),this.setAttribute("normal",new YJ(U,3)),this.setAttribute("uv",new YJ(G,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new f9(J.radius,J.tube,J.radialSegments,J.tubularSegments,J.arc,J.thetaStart,J.thetaLength)}}class v8 extends vJ{constructor(J=new n8(new _(-1,-1,0),new _(-1,1,0),new _(1,1,0)),Q=64,$=1,Z=8,K=!1){super();this.type="TubeGeometry",this.parameters={path:J,tubularSegments:Q,radius:$,radialSegments:Z,closed:K};let W=J.computeFrenetFrames(Q,K);this.tangents=W.tangents,this.normals=W.normals,this.binormals=W.binormals;let Y=new _,X=new _,H=new q0,U=new _,G=[],F=[],N=[],q=[];O(),this.setIndex(q),this.setAttribute("position",new YJ(G,3)),this.setAttribute("normal",new YJ(F,3)),this.setAttribute("uv",new YJ(N,2));function O(){for(let M=0;M<Q;M++)D(M);D(K===!1?Q:0),E(),R()}function D(M){U=J.getPointAt(M/Q,U);let k=W.normals[M],V=W.binormals[M];for(let L=0;L<=Z;L++){let P=L/Z*Math.PI*2,T=Math.sin(P),B=-Math.cos(P);X.x=B*k.x+T*V.x,X.y=B*k.y+T*V.y,X.z=B*k.z+T*V.z,X.normalize(),F.push(X.x,X.y,X.z),Y.x=U.x+$*X.x,Y.y=U.y+$*X.y,Y.z=U.z+$*X.z,G.push(Y.x,Y.y,Y.z)}}function R(){for(let M=1;M<=Q;M++)for(let k=1;k<=Z;k++){let V=(Z+1)*(M-1)+(k-1),L=(Z+1)*M+(k-1),P=(Z+1)*M+k,T=(Z+1)*(M-1)+k;q.push(V,L,T),q.push(L,P,T)}}function E(){for(let M=0;M<=Q;M++)for(let k=0;k<=Z;k++)H.x=M/Q,H.y=k/Z,N.push(H.x,H.y)}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}toJSON(){let J=super.toJSON();return J.path=this.parameters.path.toJSON(),J}static fromJSON(J){return new v8(new EW[J.path.type]().fromJSON(J.path),J.tubularSegments,J.radius,J.radialSegments,J.closed)}}function Z6(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let K=J[$][Z];if(LH(K))if(K.isRenderTargetTexture)r0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=K.clone();else if(Array.isArray(K))if(LH(K[0])){let W=[];for(let Y=0,X=K.length;Y<X;Y++)W[Y]=K[Y].clone();Q[$][Z]=W}else Q[$][Z]=K.slice();else Q[$][Z]=K}}return Q}function I8(J){let Q={};for(let $=0;$<J.length;$++){let Z=Z6(J[$]);for(let K in Z)Q[K]=Z[K]}return Q}function LH(J){return J&&(J.isColor||J.isMatrix3||J.isMatrix4||J.isVector2||J.isVector3||J.isVector4||J.isTexture||J.isQuaternion)}function pG(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function VY(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return qJ.workingColorSpace}var Q7={clone:Z6,merge:I8},mG=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lG=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class J8 extends y8{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mG,this.fragmentShader=lG,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=Z6(J.uniforms),this.uniformsGroups=pG(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let W=this.uniforms[Z].value;if(W&&W.isTexture)Q.uniforms[Z]={type:"t",value:W.toJSON(J).uuid};else if(W&&W.isColor)Q.uniforms[Z]={type:"c",value:W.getHex()};else if(W&&W.isVector2)Q.uniforms[Z]={type:"v2",value:W.toArray()};else if(W&&W.isVector3)Q.uniforms[Z]={type:"v3",value:W.toArray()};else if(W&&W.isVector4)Q.uniforms[Z]={type:"v4",value:W.toArray()};else if(W&&W.isMatrix3)Q.uniforms[Z]={type:"m3",value:W.toArray()};else if(W&&W.isMatrix4)Q.uniforms[Z]={type:"m4",value:W.toArray()};else Q.uniforms[Z]={value:W}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}fromJSON(J,Q){if(super.fromJSON(J,Q),J.uniforms!==void 0)for(let $ in J.uniforms){let Z=J.uniforms[$];switch(this.uniforms[$]={},Z.type){case"t":this.uniforms[$].value=Q[Z.value]||null;break;case"c":this.uniforms[$].value=new j0().setHex(Z.value);break;case"v2":this.uniforms[$].value=new q0().fromArray(Z.value);break;case"v3":this.uniforms[$].value=new _().fromArray(Z.value);break;case"v4":this.uniforms[$].value=new mJ().fromArray(Z.value);break;case"m3":this.uniforms[$].value=new XJ().fromArray(Z.value);break;case"m4":this.uniforms[$].value=new QJ().fromArray(Z.value);break;default:this.uniforms[$].value=Z.value}}if(J.defines!==void 0)this.defines=J.defines;if(J.vertexShader!==void 0)this.vertexShader=J.vertexShader;if(J.fragmentShader!==void 0)this.fragmentShader=J.fragmentShader;if(J.glslVersion!==void 0)this.glslVersion=J.glslVersion;if(J.extensions!==void 0)for(let $ in J.extensions)this.extensions[$]=J.extensions[$];if(J.lights!==void 0)this.lights=J.lights;if(J.clipping!==void 0)this.clipping=J.clipping;return this}}class F$ extends J8{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class o0 extends y8{constructor(J){super();this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new j0(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new j0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new q0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new L9,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.defines={STANDARD:""},this.color.copy(J.color),this.roughness=J.roughness,this.metalness=J.metalness,this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.emissive.copy(J.emissive),this.emissiveMap=J.emissiveMap,this.emissiveIntensity=J.emissiveIntensity,this.bumpMap=J.bumpMap,this.bumpScale=J.bumpScale,this.normalMap=J.normalMap,this.normalMapType=J.normalMapType,this.normalScale.copy(J.normalScale),this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.roughnessMap=J.roughnessMap,this.metalnessMap=J.metalnessMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.envMapIntensity=J.envMapIntensity,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.flatShading=J.flatShading,this.fog=J.fog,this}}class L8 extends o0{constructor(J){super();this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new q0(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return FJ(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(Q){this.ior=(1+0.4*Q)/(1-0.4*Q)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new j0(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new j0(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new j0(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(J)}get anisotropy(){return this._anisotropy}set anisotropy(J){if(this._anisotropy>0!==J>0)this.version++;this._anisotropy=J}get clearcoat(){return this._clearcoat}set clearcoat(J){if(this._clearcoat>0!==J>0)this.version++;this._clearcoat=J}get iridescence(){return this._iridescence}set iridescence(J){if(this._iridescence>0!==J>0)this.version++;this._iridescence=J}get dispersion(){return this._dispersion}set dispersion(J){if(this._dispersion>0!==J>0)this.version++;this._dispersion=J}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(J){if(this._retroreflectivity>0!==J>0)this.version++;this._retroreflectivity=J}get sheen(){return this._sheen}set sheen(J){if(this._sheen>0!==J>0)this.version++;this._sheen=J}get transmission(){return this._transmission}set transmission(J){if(this._transmission>0!==J>0)this.version++;this._transmission=J}copy(J){return super.copy(J),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=J.anisotropy,this.anisotropyRotation=J.anisotropyRotation,this.anisotropyMap=J.anisotropyMap,this.clearcoat=J.clearcoat,this.clearcoatMap=J.clearcoatMap,this.clearcoatRoughness=J.clearcoatRoughness,this.clearcoatRoughnessMap=J.clearcoatRoughnessMap,this.clearcoatNormalMap=J.clearcoatNormalMap,this.clearcoatNormalScale.copy(J.clearcoatNormalScale),this.dispersion=J.dispersion,this.ior=J.ior,this.iridescence=J.iridescence,this.iridescenceMap=J.iridescenceMap,this.iridescenceIOR=J.iridescenceIOR,this.iridescenceThicknessRange=[...J.iridescenceThicknessRange],this.iridescenceThicknessMap=J.iridescenceThicknessMap,this.retroreflectivity=J.retroreflectivity,this.sheen=J.sheen,this.sheenColor.copy(J.sheenColor),this.sheenColorMap=J.sheenColorMap,this.sheenRoughness=J.sheenRoughness,this.sheenRoughnessMap=J.sheenRoughnessMap,this.transmission=J.transmission,this.transmissionMap=J.transmissionMap,this.thickness=J.thickness,this.thicknessMap=J.thicknessMap,this.attenuationDistance=J.attenuationDistance,this.attenuationColor.copy(J.attenuationColor),this.specularIntensity=J.specularIntensity,this.specularIntensityMap=J.specularIntensityMap,this.specularColor.copy(J.specularColor),this.specularColorMap=J.specularColorMap,this}}class DY extends y8{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class BY extends y8{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function q7(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}function kZ(J){return J!==void 0&&J.inTangents!==void 0&&J.outTangents!==void 0}function uG(J){function Q(K,W){return J[K]-J[W]}let $=J.length,Z=Array($);for(let K=0;K!==$;++K)Z[K]=K;return Z.sort(Q),Z}function VH(J,Q,$){let Z=J.length,K=new J.constructor(Z);for(let W=0,Y=0;Y!==Z;++W){let X=$[W]*Q;for(let H=0;H!==Q;++H)K[Y++]=J[X+H]}return K}function dG(J,Q,$,Z){let K=1,W=J[0];while(W!==void 0&&W[Z]===void 0)W=J[K++];if(W===void 0)return;let Y=W[Z];if(Y===void 0)return;if(Array.isArray(Y))do{if(Y=W[Z],Y!==void 0)Q.push(W.time),$.push(...Y);W=J[K++]}while(W!==void 0);else if(Y.toArray!==void 0)do{if(Y=W[Z],Y!==void 0)Q.push(W.time),Y.toArray($,$.length);W=J[K++]}while(W!==void 0);else do{if(Y=W[Z],Y!==void 0)Q.push(W.time),$.push(Y);W=J[K++]}while(W!==void 0)}class $7{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],K=Q[$-1];J:{Q:{let W;$:{Z:if(!(J<Z)){for(let Y=$+2;;){if(Z===void 0){if(J<K)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===Y)break;if(K=Z,Z=Q[++$],J<Z)break Q}W=Q.length;break $}if(!(J>=K)){let Y=Q[1];if(J<Y)$=2,K=Y;for(let X=$-2;;){if(K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===X)break;if(Z=K,K=Q[--$-1],J>=K)break Q}W=$,$=0;break $}break J}while($<W){let Y=$+W>>>1;if(J<Q[Y])W=Y;else $=Y+1}if(Z=Q[$],K=Q[$-1],K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,K,Z)}return this.interpolate_($,K,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,K=J*Z;for(let W=0;W!==Z;++W)Q[W]=$[K+W];return Q}interpolate_(){throw Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class MY extends $7{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,K=J-2,W=J+1,Y=Z[K],X=Z[W];if(Y===void 0)switch(this.getSettings_().endingStart){case 2401:K=J,Y=2*Q-$;break;case 2402:K=Z.length-2,Y=Q+Z[K]-Z[K+1];break;default:K=J,Y=$}if(X===void 0)switch(this.getSettings_().endingEnd){case 2401:W=J,X=2*$-Q;break;case 2402:W=1,X=$+Z[1]-Z[0];break;default:W=J-1,X=Q}let H=($-Q)*0.5,U=this.valueSize;this._weightPrev=H/(Q-Y),this._weightNext=H/(X-$),this._offsetPrev=K*U,this._offsetNext=W*U}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=J*Y,H=X-Y,U=this._offsetPrev,G=this._offsetNext,F=this._weightPrev,N=this._weightNext,q=($-Q)/(Z-Q),O=q*q,D=O*q,R=-F*D+2*F*O-F*q,E=(1+F)*D+(-1.5-2*F)*O+(-0.5+F)*q+1,M=(-1-N)*D+(1.5+N)*O+0.5*q,k=N*D-N*O;for(let V=0;V!==Y;++V)K[V]=R*W[U+V]+E*W[H+V]+M*W[X+V]+k*W[G+V];return K}}class eZ extends $7{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=J*Y,H=X-Y,U=($-Q)/(Z-Q),G=1-U;for(let F=0;F!==Y;++F)K[F]=W[H+F]*G+W[X+F]*U;return K}}class kY extends $7{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class CY extends $7{interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=J*Y,H=X-Y,U=this.inTangents,G=this.outTangents;if(!U||!G){let q=($-Q)/(Z-Q),O=1-q;for(let D=0;D!==Y;++D)K[D]=W[H+D]*O+W[X+D]*q;return K}let F=Y*2,N=J-1;for(let q=0;q!==Y;++q){let O=W[H+q],D=W[X+q],R=N*F+q*2,E=G[R],M=G[R+1],k=J*F+q*2,V=U[k],L=U[k+1],P=nG($,Q,E,V,Z);K[q]=wU(P,O,M,L,D)}return K}}function wU(J,Q,$,Z,K){let W=1-J;return W*W*W*Q+3*W*W*J*$+3*W*J*J*Z+J*J*J*K}function cG(J,Q,$,Z,K){let W=1-J;return 3*W*W*($-Q)+6*W*J*(Z-$)+3*J*J*(K-Z)}function nG(J,Q,$,Z,K){let W=(J-Q)/(K-Q);for(let Y=0;Y<8;Y++){let X=wU(W,Q,$,Z,K)-J;if(Math.abs(X)<0.0000000001)break;let H=cG(W,Q,$,Z,K);if(Math.abs(H)<0.0000000001)break;W=Math.max(0,Math.min(1,W-X/H))}return W}class s8{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=q7(Q,this.TimeBufferType),this.values=q7($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:q7(J.times,Array),values:q7(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z;if(kZ(J.settings))$.settings={inTangents:q7(J.settings.inTangents,Array),outTangents:q7(J.settings.outTangents,Array)}}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new kY(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new eZ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new MY(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new CY(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.inTangents=this.settings.inTangents,Q.outTangents=this.settings.outTangents;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return r0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J;if(kZ(this.settings))DH(this.settings.inTangents,J),DH(this.settings.outTangents,J)}return this}trim(J,Q){let $=this.times,Z=$.length,K=0,W=Z-1;while(K!==Z&&$[K]<J)++K;while(W!==-1&&$[W]>Q)--W;if(++W,K!==0||W!==Z){if(K>=W)W=Math.max(W,1),K=W-1;let Y=this.getValueSize();this.times=$.slice(K,W),this.values=this.values.slice(K*Y,W*Y)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)$J("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,K=$.length;if(K===0)$J("KeyframeTrack: Track is empty.",this),J=!1;let W=null;for(let Y=0;Y!==K;Y++){let X=$[Y];if(typeof X==="number"&&isNaN(X)){$J("KeyframeTrack: Time is not a valid number.",this,Y,X),J=!1;break}if(W!==null&&W>X){$J("KeyframeTrack: Out of order keys.",this,Y,X,W),J=!1;break}W=X}if(Z!==void 0){if(SN(Z))for(let Y=0,X=Z.length;Y!==X;++Y){let H=Z[Y];if(isNaN(H)){$J("KeyframeTrack: Value is not a valid number.",this,Y,H),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,K=J.length-1,W=1;for(let Y=1;Y<K;++Y){let X=!1,H=J[Y],U=J[Y+1];if(H!==U&&(Y!==1||H!==J[0]))if(!Z){let G=Y*$,F=G-$,N=G+$;for(let q=0;q!==$;++q){let O=Q[G+q];if(O!==Q[F+q]||O!==Q[N+q]){X=!0;break}}}else X=!0;if(X){if(Y!==W){J[W]=J[Y];let G=Y*$,F=W*$;for(let N=0;N!==$;++N)Q[F+N]=Q[G+N]}++W}}if(K>0){J[W]=J[K];for(let Y=K*$,X=W*$,H=0;H!==$;++H)Q[X+H]=Q[Y+H];++W}if(W!==J.length)this.times=J.slice(0,W),this.values=Q.slice(0,W*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);if(Z.createInterpolant=this.createInterpolant,kZ(this.settings))Z.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()};return Z}}function DH(J,Q){for(let $=0,Z=J.length;$!==Z;$+=2)J[$]*=Q}s8.prototype.ValueTypeName="";s8.prototype.TimeBufferType=Float32Array;s8.prototype.ValueBufferType=Float32Array;s8.prototype.DefaultInterpolation=2301;class P7 extends s8{constructor(J,Q,$){super(J,Q,$)}}P7.prototype.ValueTypeName="bool";P7.prototype.ValueBufferType=Array;P7.prototype.DefaultInterpolation=2300;P7.prototype.InterpolantFactoryMethodLinear=void 0;P7.prototype.InterpolantFactoryMethodSmooth=void 0;class JK extends s8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}JK.prototype.ValueTypeName="color";class I7 extends s8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}I7.prototype.ValueTypeName="number";class PY extends $7{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=($-Q)/(Z-Q),H=J*Y;for(let U=H+Y;H!==U;H+=4)HJ.slerpFlat(K,0,W,H-Y,W,H,X);return K}}class z7 extends s8{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new PY(this.times,this.values,this.getValueSize(),J)}}z7.prototype.ValueTypeName="quaternion";z7.prototype.InterpolantFactoryMethodSmooth=void 0;class A7 extends s8{constructor(J,Q,$){super(J,Q,$)}}A7.prototype.ValueTypeName="string";A7.prototype.ValueBufferType=Array;A7.prototype.DefaultInterpolation=2300;A7.prototype.InterpolantFactoryMethodLinear=void 0;A7.prototype.InterpolantFactoryMethodSmooth=void 0;class K6 extends s8{constructor(J,Q,$,Z){super(J,Q,$,Z)}}K6.prototype.ValueTypeName="vector";class c6{constructor(J="",Q=-1,$=[],Z=2500){if(this.name=J,this.tracks=$,this.duration=Q,this.blendMode=Z,this.uuid=J9(),this.userData={},this.duration<0)this.resetDuration()}static parse(J){let Q=[],$=J.tracks,Z=1/(J.fps||1);for(let W=0,Y=$.length;W!==Y;++W)Q.push(iG($[W]).scale(Z));let K=new this(J.name,J.duration,Q,J.blendMode);return K.uuid=J.uuid,K.userData=JSON.parse(J.userData||"{}"),K}static toJSON(J){let Q=[],$=J.tracks,Z={name:J.name,duration:J.duration,tracks:Q,uuid:J.uuid,blendMode:J.blendMode,userData:JSON.stringify(J.userData)};for(let K=0,W=$.length;K!==W;++K)Q.push(s8.toJSON($[K]));return Z}static CreateFromMorphTargetSequence(J,Q,$,Z){let K=Q.length,W=[];for(let Y=0;Y<K;Y++){let X=[],H=[];X.push((Y+K-1)%K,Y,(Y+1)%K),H.push(0,1,0);let U=uG(X);if(X=VH(X,1,U),H=VH(H,1,U),!Z&&X[0]===0)X.push(K),H.push(H[0]);W.push(new I7(".morphTargetInfluences["+Q[Y].name+"]",X,H).scale(1/$))}return new this(J,-1,W)}static findByName(J,Q){let $=J;if(!Array.isArray(J)){let Z=J;$=Z.geometry&&Z.geometry.animations||Z.animations}for(let Z=0;Z<$.length;Z++)if($[Z].name===Q)return $[Z];return null}static CreateClipsFromMorphTargetSequences(J,Q,$){let Z={},K=/^([\w-]*?)([\d]+)$/;for(let Y=0,X=J.length;Y<X;Y++){let H=J[Y],U=H.name.match(K);if(U&&U.length>1){let G=U[1],F=Z[G];if(!F)Z[G]=F=[];F.push(H)}}let W=[];for(let Y in Z)W.push(this.CreateFromMorphTargetSequence(Y,Z[Y],Q,$));return W}resetDuration(){let J=this.tracks,Q=0;for(let $=0,Z=J.length;$!==Z;++$){let K=this.tracks[$];Q=Math.max(Q,K.times[K.times.length-1])}return this.duration=Q,this}trim(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].trim(0,this.duration);return this}validate(){let J=!0;for(let Q=0;Q<this.tracks.length;Q++)J=J&&this.tracks[Q].validate();return J}optimize(){for(let J=0;J<this.tracks.length;J++)this.tracks[J].optimize();return this}clone(){let J=[];for(let $=0;$<this.tracks.length;$++)J.push(this.tracks[$].clone());let Q=new this.constructor(this.name,this.duration,J,this.blendMode);return Q.userData=JSON.parse(JSON.stringify(this.userData)),Q}toJSON(){return this.constructor.toJSON(this)}}function sG(J){switch(J.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return I7;case"vector":case"vector2":case"vector3":case"vector4":return K6;case"color":return JK;case"quaternion":return z7;case"bool":case"boolean":return P7;case"string":return A7}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+J)}function iG(J){if(J.type===void 0)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");let Q=sG(J.type);if(J.times===void 0){let Z=[],K=[];dG(J.keys,Z,K,"value"),J.times=Z,J.values=K}let $;if(Q.parse!==void 0)$=Q.parse(J);else $=new Q(J.name,J.times,J.values,J.interpolation);if(kZ(J.settings))$.settings={inTangents:q7(J.settings.inTangents,Float32Array),outTangents:q7(J.settings.outTangents,Float32Array)};return $}var w9={enabled:!1,files:{},add:function(J,Q){if(this.enabled===!1)return;if(BH(J))return;this.files[J]=Q},get:function(J){if(this.enabled===!1)return;if(BH(J))return;return this.files[J]},remove:function(J){delete this.files[J]},clear:function(){this.files={}}};function BH(J){try{let Q=J.slice(J.indexOf(":")+1);return new URL(Q).protocol==="blob:"}catch(Q){return!1}}class IY{constructor(J,Q,$){let Z=this,K=!1,W=0,Y=0,X=void 0,H=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(U){if(Y++,K===!1){if(Z.onStart!==void 0)Z.onStart(U,W,Y)}K=!0},this.itemEnd=function(U){if(W++,Z.onProgress!==void 0)Z.onProgress(U,W,Y);if(W===Y){if(K=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(U){if(Z.onError!==void 0)Z.onError(U)},this.resolveURL=function(U){if(U=U.normalize("NFC"),X)return X(U);return U},this.setURLModifier=function(U){return X=U,this},this.addHandler=function(U,G){return H.push(U,G),this},this.removeHandler=function(U){let G=H.indexOf(U);if(G!==-1)H.splice(G,2);return this},this.getHandler=function(U){for(let G=0,F=H.length;G<F;G+=2){let N=H[G],q=H[G+1];if(N.global)N.lastIndex=0;if(N.test(U))return q}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var SU=new IY;class Z7{constructor(J){if(this.manager=J!==void 0?J:SU,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,K){$.load(J,Z,Q,K)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}Z7.DEFAULT_MATERIAL_NAME="__DEFAULT";var a9={};class jU extends Error{constructor(J,Q){super(J);this.response=Q}}class E$ extends Z7{constructor(J){super(J);this.mimeType="",this.responseType="",this._abortController=new AbortController}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=w9.get(`file:${J}`);if(K!==void 0){this.manager.itemStart(J),setTimeout(()=>{if(Q)Q(K);this.manager.itemEnd(J)},0);return}if(a9[J]!==void 0){a9[J].push({onLoad:Q,onProgress:$,onError:Z});return}a9[J]=[],a9[J].push({onLoad:Q,onProgress:$,onError:Z});let W=new Request(J,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),Y=this.mimeType,X=this.responseType;fetch(W).then((H)=>{if(H.status===200||H.status===0){if(H.status===0)r0("FileLoader: HTTP Status 0 received.");if(typeof ReadableStream>"u"||H.body===void 0||H.body.getReader===void 0)return H;let U=a9[J],G=H.body.getReader(),F=H.headers.get("X-File-Size")||H.headers.get("Content-Length"),N=F?parseInt(F):0,q=N!==0,O=0,D=new ReadableStream({start(R){E();function E(){G.read().then(({done:M,value:k})=>{if(M)R.close();else{O+=k.byteLength;let V=new ProgressEvent("progress",{lengthComputable:q,loaded:O,total:N});for(let L=0,P=U.length;L<P;L++){let T=U[L];if(T.onProgress)T.onProgress(V)}R.enqueue(k),E()}},(M)=>{R.error(M)})}}});return new Response(D)}else throw new jU(`fetch for "${H.url}" responded with ${H.status}: ${H.statusText}`,H)}).then((H)=>{switch(X){case"arraybuffer":return H.arrayBuffer();case"blob":return H.blob();case"document":return H.text().then((U)=>{return new DOMParser().parseFromString(U,Y)});case"json":return H.json();default:if(Y==="")return H.text();else{let G=/charset="?([^;"\s]*)"?/i.exec(Y),F=G&&G[1]?G[1].toLowerCase():void 0,N=new TextDecoder(F);return H.arrayBuffer().then((q)=>N.decode(q))}}}).then((H)=>{w9.add(`file:${J}`,H);let U=a9[J];delete a9[J];for(let G=0,F=U.length;G<F;G++){let N=U[G];if(N.onLoad)N.onLoad(H)}}).catch((H)=>{let U=a9[J];if(U===void 0)throw this.manager.itemError(J),H;delete a9[J];for(let G=0,F=U.length;G<F;G++){let N=U[G];if(N.onError)N.onError(H)}this.manager.itemError(J)}).finally(()=>{this.manager.itemEnd(J)}),this.manager.itemStart(J)}setResponseType(J){return this.responseType=J,this}setMimeType(J){return this.mimeType=J,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var h6=new WeakMap;class zY extends Z7{constructor(J){super(J)}load(J,Q,$,Z){if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=this,W=w9.get(`image:${J}`);if(W!==void 0){if(W.complete===!0)K.manager.itemStart(J),setTimeout(function(){if(Q)Q(W);K.manager.itemEnd(J)},0);else{let G=h6.get(W);if(G===void 0)G=[],h6.set(W,G);G.push({onLoad:Q,onError:Z})}return W}let Y=l6("img");function X(){if(U(),Q)Q(this);let G=h6.get(this)||[];for(let F=0;F<G.length;F++){let N=G[F];if(N.onLoad)N.onLoad(this)}h6.delete(this),K.manager.itemEnd(J)}function H(G){if(U(),Z)Z(G);w9.remove(`image:${J}`);let F=h6.get(this)||[];for(let N=0;N<F.length;N++){let q=F[N];if(q.onError)q.onError(G)}h6.delete(this),K.manager.itemError(J),K.manager.itemEnd(J)}function U(){Y.removeEventListener("load",X,!1),Y.removeEventListener("error",H,!1)}if(Y.addEventListener("load",X,!1),Y.addEventListener("error",H,!1),J.slice(0,5)!=="data:"){if(this.crossOrigin!==void 0)Y.crossOrigin=this.crossOrigin}return w9.add(`image:${J}`,Y),K.manager.itemStart(J),Y.src=J,Y}}class QK extends Z7{constructor(J){super(J)}load(J,Q,$,Z){let K=new Q8,W=new zY(this.manager);return W.setCrossOrigin(this.crossOrigin),W.setPath(this.path),W.load(J,function(Y){if(K.image=Y,K.needsUpdate=!0,Q!==void 0)Q(K)},$,Z),K}}class KQ extends wJ{constructor(J,Q=1){super();this.isLight=!0,this.type="Light",this.color=new j0(J),this.intensity=Q}copy(J,Q){return super.copy(J,Q),this.color.copy(J.color),this.intensity=J.intensity,this}toJSON(J){let Q=super.toJSON(J);return Q.object.color=this.color.getHex(),Q.object.intensity=this.intensity,Q}}class $K extends KQ{constructor(J,Q,$){super(J,$);this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wJ.DEFAULT_UP),this.updateMatrix(),this.groundColor=new j0(Q)}copy(J,Q){return super.copy(J,Q),this.groundColor.copy(J.groundColor),this}toJSON(J){let Q=super.toJSON(J);return Q.object.groundColor=this.groundColor.getHex(),Q}}var NW=new QJ,MH=new _,kH=new _;class q${constructor(J){this.camera=J,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new q0(512,512),this.mapType=1009,this.map=null,this.mapPass=null,this.matrix=new QJ,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new e7,this._frameExtents=new q0(1,1),this._viewportCount=1,this._viewports=[new mJ(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(J){let Q=this.camera;MH.setFromMatrixPosition(J.matrixWorld),Q.position.copy(MH),kH.setFromMatrixPosition(J.target.matrixWorld),Q.lookAt(kH),Q.updateMatrixWorld(),this._updateMatrix(Q,this.matrix,this._frustum)}_updateMatrix(J,Q,$,Z){NW.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),$.setFromProjectionMatrix(NW,J.coordinateSystem,J.reversedDepth);let K=this._frameExtents,W=Z?Z.z/K.x:1,Y=Z?Z.w/K.y:1,X=Z?Z.x/K.x:0,H=Z?Z.y/K.y:0;if(J.coordinateSystem===2001||J.reversedDepth)Q.set(0.5*W,0,0,0.5*W+X,0,0.5*Y,0,0.5*Y+H,0,0,1,0,0,0,0,1);else Q.set(0.5*W,0,0,0.5*W+X,0,0.5*Y,0,0.5*Y+H,0,0,0.5,0.5,0,0,0,1);Q.multiply(NW)}getViewport(J){return this._viewports[J]}getFrameExtents(){return this._frameExtents}dispose(){if(this.map)this.map.dispose();if(this.mapPass)this.mapPass.dispose()}copy(J){return this.camera=J.camera.clone(),this.intensity=J.intensity,this.bias=J.bias,this.radius=J.radius,this.autoUpdate=J.autoUpdate,this.needsUpdate=J.needsUpdate,this.normalBias=J.normalBias,this.blurSamples=J.blurSamples,this.mapSize.copy(J.mapSize),this.biasNode=J.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let J={};return J.intensity=this.intensity,J.bias=this.bias,J.normalBias=this.normalBias,J.radius=this.radius,J.blurSamples=this.blurSamples,J.mapSize=this.mapSize.toArray(),J.camera=this.camera.toJSON(!1).object,delete J.camera.matrix,J}}var BZ=new _,MZ=new HJ,_9=new _;class ZK extends wJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new QJ,this.projectionMatrix=new QJ,this.projectionMatrixInverse=new QJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(BZ,MZ,_9),_9.x===1&&_9.y===1&&_9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(BZ,MZ,_9.set(1,1,1)).invert()}updateWorldMatrix(J,Q,$=!1){if(super.updateWorldMatrix(J,Q,$),this.matrixWorld.decompose(BZ,MZ,_9),_9.x===1&&_9.y===1&&_9.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(BZ,MZ,_9.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var E7=new _,CH=new q0,PH=new q0;class G8 extends ZK{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=p7*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan(gQ*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return p7*2*Math.atan(Math.tan(gQ*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){E7.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(E7.x,E7.y).multiplyScalar(-J/E7.z),E7.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(E7.x,E7.y).multiplyScalar(-J/E7.z)}getViewSize(J,Q){return this.getViewBounds(J,CH,PH),Q.subVectors(PH,CH)}setViewOffset(J,Q,$,Z,K,W){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan(gQ*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,K=-0.5*Z,W=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:X,fullHeight:H}=W;K+=W.offsetX*Z/X,Q-=W.offsetY*$/H,Z*=W.width/X,$*=W.height/H}let Y=this.filmOffset;if(Y!==0)K+=J*Y/this.getFilmWidth();this.projectionMatrix.makePerspective(K,K+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class yU extends q${constructor(){super(new G8(50,1,0.5,500));this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(J){let Q=this.camera,$=p7*2*J.angle*this.focus,Z=this.mapSize.width/this.mapSize.height*this.aspect,K=J.distance||Q.far;if($!==Q.fov||Z!==Q.aspect||K!==Q.far)Q.fov=$,Q.aspect=Z,Q.far=K,Q.updateProjectionMatrix();super.updateMatrices(J)}copy(J){return super.copy(J),this.focus=J.focus,this.aspect=J.aspect,this}toJSON(){let J=super.toJSON();return J.focus=this.focus,J.aspect=this.aspect,J}}class WQ extends KQ{constructor(J,Q,$=0,Z=Math.PI/3,K=0,W=2){super(J,Q);this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wJ.DEFAULT_UP),this.updateMatrix(),this.target=new wJ,this.distance=$,this.angle=Z,this.penumbra=K,this.decay=W,this.map=null,this.shadow=new yU}get power(){return this.intensity*Math.PI}set power(J){this.intensity=J/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.angle=J.angle,this.penumbra=J.penumbra,this.decay=J.decay,this.target=J.target.clone(),this.map=J.map,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);if(Q.object.distance=this.distance,Q.object.angle=this.angle,Q.object.decay=this.decay,Q.object.penumbra=this.penumbra,Q.object.target=this.target.uuid,this.map&&this.map.isTexture)Q.object.map=this.map.toJSON(J).uuid;return Q.object.shadow=this.shadow.toJSON(),Q}}class vU extends q${constructor(){super(new G8(90,1,0.5,500));this.isPointLightShadow=!0}}class K7 extends KQ{constructor(J,Q,$=0,Z=2){super(J,Q);this.isPointLight=!0,this.type="PointLight",this.distance=$,this.decay=Z,this.shadow=new vU}get power(){return this.intensity*4*Math.PI}set power(J){this.intensity=J/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(J,Q){return super.copy(J,Q),this.distance=J.distance,this.decay=J.decay,this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.distance=this.distance,Q.object.decay=this.decay,Q.object.shadow=this.shadow.toJSON(),Q}}class W7 extends ZK{constructor(J=-1,Q=1,$=1,Z=-1,K=0.1,W=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=K,this.far=W,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,K,W){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=W,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,K=$-J,W=$+J,Y=Z+Q,X=Z-Q;if(this.view!==null&&this.view.enabled){let H=(this.right-this.left)/this.view.fullWidth/this.zoom,U=(this.top-this.bottom)/this.view.fullHeight/this.zoom;K+=H*this.view.offsetX,W=K+H*this.view.width,Y-=U*this.view.offsetY,X=Y-U*this.view.height}this.projectionMatrix.makeOrthographic(K,W,Y,X,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}class fU extends q${constructor(){super(new W7(-5,5,5,-5,0.5,500));this.isDirectionalLightShadow=!0}}class YQ extends KQ{constructor(J,Q){super(J,Q);this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wJ.DEFAULT_UP),this.updateMatrix(),this.target=new wJ,this.shadow=new fU}dispose(){super.dispose(),this.shadow.dispose()}copy(J){return super.copy(J),this.target=J.target.clone(),this.shadow=J.shadow.clone(),this}toJSON(J){let Q=super.toJSON(J);return Q.object.shadow=this.shadow.toJSON(),Q.object.target=this.target.uuid,Q}}class T7{static extractUrlBase(J){let Q=J.lastIndexOf("/");if(Q===-1)return"./";return J.slice(0,Q+1)}static resolveURL(J,Q){if(typeof J!=="string"||J==="")return"";if(/^https?:\/\//i.test(Q)&&/^\//.test(J))Q=Q.replace(/(^https?:\/\/[^\/]+).*/i,"$1");if(/^(https?:)?\/\//i.test(J))return J;if(/^data:.*,.*$/i.test(J))return J;if(/^blob:.*$/i.test(J))return J;return Q+J}}var GW=new WeakMap;class KK extends Z7{constructor(J){super(J);if(this.isImageBitmapLoader=!0,typeof createImageBitmap>"u")r0("ImageBitmapLoader: createImageBitmap() not supported.");if(typeof fetch>"u")r0("ImageBitmapLoader: fetch() not supported.");this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(J){return this.options=J,this}load(J,Q,$,Z){if(J===void 0)J="";if(this.path!==void 0)J=this.path+J;J=this.manager.resolveURL(J);let K=this,W=w9.get(`image-bitmap:${J}`);if(W!==void 0){if(K.manager.itemStart(J),W.then){W.then((H)=>{if(GW.has(W)===!0){if(Z)Z(GW.get(W));K.manager.itemError(J),K.manager.itemEnd(J)}else{if(Q)Q(H);K.manager.itemEnd(J)}});return}setTimeout(function(){if(Q)Q(W);K.manager.itemEnd(J)},0);return}let Y={};Y.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",Y.headers=this.requestHeader,Y.signal=typeof AbortSignal.any==="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let X=fetch(J,Y).then(function(H){return H.blob()}).then(function(H){return createImageBitmap(H,Object.assign({},K.options,{colorSpaceConversion:"none"}))}).then(function(H){if(w9.add(`image-bitmap:${J}`,H),Q)Q(H);return K.manager.itemEnd(J),H}).catch(function(H){if(Z)Z(H);GW.set(X,H),w9.remove(`image-bitmap:${J}`),K.manager.itemError(J),K.manager.itemEnd(J)});w9.add(`image-bitmap:${J}`,X),K.manager.itemStart(J)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}var x6=-90,g6=1;class AY extends wJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new G8(x6,g6,J,Q);Z.layers=this.layers,this.add(Z);let K=new G8(x6,g6,J,Q);K.layers=this.layers,this.add(K);let W=new G8(x6,g6,J,Q);W.layers=this.layers,this.add(W);let Y=new G8(x6,g6,J,Q);Y.layers=this.layers,this.add(Y);let X=new G8(x6,g6,J,Q);X.layers=this.layers,this.add(X);let H=new G8(x6,g6,J,Q);H.layers=this.layers,this.add(H)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,K,W,Y,X]=Q;for(let H of Q)this.remove(H);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),K.up.set(0,0,-1),K.lookAt(0,1,0),W.up.set(0,0,1),W.lookAt(0,-1,0),Y.up.set(0,1,0),Y.lookAt(0,0,1),X.up.set(0,1,0),X.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),K.up.set(0,0,1),K.lookAt(0,1,0),W.up.set(0,0,-1),W.lookAt(0,-1,0),Y.up.set(0,-1,0),Y.lookAt(0,0,1),X.up.set(0,-1,0),X.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let H of Q)this.add(H),H.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[K,W,Y,X,H,U]=this.children,G=J.getRenderTarget(),F=J.getActiveCubeFace(),N=J.getActiveMipmapLevel(),q=J.xr.enabled;J.xr.enabled=!1;let O=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let D=!1;if(J.isWebGLRenderer===!0)D=J.state.buffers.depth.getReversed();else D=J.reversedDepthBuffer;if(J.setRenderTarget($,0,Z),D&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,1,Z),D&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,2,Z),D&&J.autoClear===!1)J.clearDepth();if(J.render(Q,Y),J.setRenderTarget($,3,Z),D&&J.autoClear===!1)J.clearDepth();if(J.render(Q,X),J.setRenderTarget($,4,Z),D&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),$.texture.generateMipmaps=O,J.setRenderTarget($,5,Z),D&&J.autoClear===!1)J.clearDepth();J.render(Q,U),J.setRenderTarget(G,F,N),J.xr.enabled=q,$.texture.needsPMREMUpdate=!0}}class TY extends G8{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}class WK{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(J){if(this._document=J,J.hidden!==void 0)this._pageVisibilityHandler=oG.bind(this),J.addEventListener("visibilitychange",this._pageVisibilityHandler,!1)}disconnect(){if(this._pageVisibilityHandler!==null)this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null;this._document=null}getDelta(){return this._delta/1000}getElapsed(){return this._elapsed/1000}getTimescale(){return this._timescale}setTimescale(J){return this._timescale=J,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(J){if(this._pageVisibilityHandler!==null&&this._document.hidden===!0)this._delta=0;else this._previousTime=this._currentTime,this._currentTime=(J!==void 0?J:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta;return this}}function oG(){if(this._document.hidden===!1)this.reset()}class _Y{constructor(J,Q,$){this.binding=J,this.valueSize=$;let Z,K,W;switch(Q){case"quaternion":Z=this._slerp,K=this._slerpAdditive,W=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array($*6),this._workIndex=5;break;case"string":case"bool":Z=this._select,K=this._select,W=this._setAdditiveIdentityOther,this.buffer=Array($*5);break;default:Z=this._lerp,K=this._lerpAdditive,W=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array($*5)}this._mixBufferRegion=Z,this._mixBufferRegionAdditive=K,this._setIdentity=W,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(J,Q){let $=this.buffer,Z=this.valueSize,K=J*Z+Z,W=this.cumulativeWeight;if(W===0){for(let Y=0;Y!==Z;++Y)$[K+Y]=$[Y];W=Q}else{W+=Q;let Y=Q/W;this._mixBufferRegion($,K,0,Y,Z)}this.cumulativeWeight=W}accumulateAdditive(J){let Q=this.buffer,$=this.valueSize,Z=$*this._addIndex;if(this.cumulativeWeightAdditive===0)this._setIdentity();this._mixBufferRegionAdditive(Q,Z,0,J,$),this.cumulativeWeightAdditive+=J}apply(J){let Q=this.valueSize,$=this.buffer,Z=J*Q+Q,K=this.cumulativeWeight,W=this.cumulativeWeightAdditive,Y=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,K<1){let X=Q*this._origIndex;this._mixBufferRegion($,Z,X,1-K,Q)}if(W>0)this._mixBufferRegionAdditive($,Z,this._addIndex*Q,1,Q);for(let X=Q,H=Q+Q;X!==H;++X)if($[X]!==$[X+Q]){Y.setValue($,Z);break}}saveOriginalState(){let J=this.binding,Q=this.buffer,$=this.valueSize,Z=$*this._origIndex;J.getValue(Q,Z);for(let K=$,W=Z;K!==W;++K)Q[K]=Q[Z+K%$];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let J=this.valueSize*3;this.binding.setValue(this.buffer,J)}_setAdditiveIdentityNumeric(){let J=this._addIndex*this.valueSize,Q=J+this.valueSize;for(let $=J;$<Q;$++)this.buffer[$]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let J=this._origIndex*this.valueSize,Q=this._addIndex*this.valueSize;for(let $=0;$<this.valueSize;$++)this.buffer[Q+$]=this.buffer[J+$]}_select(J,Q,$,Z,K){if(Z>=0.5)for(let W=0;W!==K;++W)J[Q+W]=J[$+W]}_slerp(J,Q,$,Z){HJ.slerpFlat(J,Q,J,Q,J,$,Z)}_slerpAdditive(J,Q,$,Z,K){let W=this._workIndex*K;HJ.multiplyQuaternionsFlat(J,W,J,Q,J,$),HJ.slerpFlat(J,Q,J,Q,J,W,Z)}_lerp(J,Q,$,Z,K){let W=1-Z;for(let Y=0;Y!==K;++Y){let X=Q+Y;J[X]=J[X]*W+J[$+Y]*Z}}_lerpAdditive(J,Q,$,Z,K){for(let W=0;W!==K;++W){let Y=Q+W;J[Y]=J[Y]+J[$+W]*Z}}}var wY="\\[\\]\\.:\\/",aG=new RegExp("["+wY+"]","g"),SY="[^"+wY+"]",rG="[^"+wY.replace("\\.","")+"]",tG=/((?:WC+[\/:])*)/.source.replace("WC",SY),eG=/(WCOD+)?/.source.replace("WCOD",rG),JF=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",SY),QF=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",SY),$F=new RegExp("^"+tG+eG+JF+QF+"$"),ZF=["material","materials","bones","map"];class bU{constructor(J,Q,$){let Z=$||yJ.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,K=$.length;Z!==K;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class yJ{constructor(J,Q,$){this.path=Q,this.parsedPath=$||yJ.parseTrackName(Q),this.node=yJ.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new yJ(J,Q,$);else return new yJ.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(aG,"")}static parseTrackName(J){let Q=$F.exec(J);if(Q===null)throw Error("THREE.PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let K=$.nodeName.substring(Z+1);if(ZF.indexOf(K)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=K}if($.propertyName===null||$.propertyName.length===0)throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(K){for(let W=0;W<K.length;W++){let Y=K[W];if(Y.name===Q||Y.uuid===Q)return Y;let X=$(Y.children);if(X)return X}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,K=Q.propertyIndex;if(!J)J=yJ.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){r0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let H=Q.objectIndex;switch($){case"materials":if(!J.material){$J("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){$J("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){$J("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let U=0;U<J.length;U++)if(J[U].name===H){H=U;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){$J("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){$J("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){$J("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(H!==void 0){if(J[H]===void 0){$J("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[H]}}let W=J[Z];if(W===void 0){let H=Q.nodeName;$J("PropertyBinding: Trying to update property for track: "+H+"."+Z+" but it wasn't found.",J);return}let Y=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)Y=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)Y=this.Versioning.MatrixWorldNeedsUpdate;let X=this.BindingType.Direct;if(K!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){$J("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){$J("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[K]!==void 0)K=J.morphTargetDictionary[K]}X=this.BindingType.ArrayElement,this.resolvedProperty=W,this.propertyIndex=K}else if(W.fromArray!==void 0&&W.toArray!==void 0)X=this.BindingType.HasFromToArray,this.resolvedProperty=W;else if(Array.isArray(W))X=this.BindingType.EntireArray,this.resolvedProperty=W;else this.propertyName=Z;this.getValue=this.GetterByBindingType[X],this.setValue=this.SetterByBindingTypeAndVersioning[X][Y]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}yJ.Composite=bU;yJ.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yJ.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yJ.prototype.GetterByBindingType=[yJ.prototype._getValue_direct,yJ.prototype._getValue_array,yJ.prototype._getValue_arrayElement,yJ.prototype._getValue_toArray];yJ.prototype.SetterByBindingTypeAndVersioning=[[yJ.prototype._setValue_direct,yJ.prototype._setValue_direct_setNeedsUpdate,yJ.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yJ.prototype._setValue_array,yJ.prototype._setValue_array_setNeedsUpdate,yJ.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yJ.prototype._setValue_arrayElement,yJ.prototype._setValue_arrayElement_setNeedsUpdate,yJ.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yJ.prototype._setValue_fromArray,yJ.prototype._setValue_fromArray_setNeedsUpdate,yJ.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class jY{constructor(J,Q,$=null,Z=Q.blendMode){this._mixer=J,this._clip=Q,this._localRoot=$,this.blendMode=Z;let K=Q.tracks,W=K.length,Y=Array(W),X={endingStart:2400,endingEnd:2400};for(let H=0;H!==W;++H){let U=K[H].createInterpolant(null);Y[H]=U,U.settings=X}this._interpolantSettings=X,this._interpolants=Y,this._propertyBindings=Array(W),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(J){return this._startTime=J,this}setLoop(J,Q){return this.loop=J,this.repetitions=Q,this}setEffectiveWeight(J){return this.weight=J,this._effectiveWeight=this.enabled?J:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(J){return this._scheduleFading(J,0,1)}fadeOut(J){return this._scheduleFading(J,1,0)}crossFadeFrom(J,Q,$=!1){if(J.fadeOut(Q),this.fadeIn(Q),$===!0){let Z=this._clip.duration,K=J._clip.duration,W=K/Z,Y=Z/K;J._restoreTimeScale=J.timeScale,this._restoreTimeScale=this.timeScale,J.warp(1,W,Q),this.warp(Y,1,Q)}return this}crossFadeTo(J,Q,$=!1){return J.crossFadeFrom(this,Q,$)}stopFading(){let J=this._weightInterpolant;if(J!==null)this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this}setEffectiveTimeScale(J){return this.timeScale=J,this._effectiveTimeScale=this.paused?0:J,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(J){return this.timeScale=this._clip.duration/J,this.stopWarping()}syncWith(J){return this.time=J.time,this.timeScale=J.timeScale,this.stopWarping()}halt(J){return this.warp(this._effectiveTimeScale,0,J)}warp(J,Q,$){let Z=this._mixer,K=Z.time,W=this.timeScale,Y=this._timeScaleInterpolant;if(Y===null)Y=Z._lendControlInterpolant(),this._timeScaleInterpolant=Y;let{parameterPositions:X,sampleValues:H}=Y;return X[0]=K,X[1]=K+$,H[0]=J/W,H[1]=Q/W,this}stopWarping(){let J=this._timeScaleInterpolant;if(J!==null)this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(J);return this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(J,Q,$,Z){if(!this.enabled){this._updateWeight(J);return}let K=this._startTime;if(K!==null){let X=(J-K)*$;if(X<0||$===0)Q=0;else this._startTime=null,Q=$*X}Q*=this._updateTimeScale(J);let W=this._updateTime(Q),Y=this._updateWeight(J);if(Y>0){let X=this._interpolants,H=this._propertyBindings;switch(this.blendMode){case 2501:for(let U=0,G=X.length;U!==G;++U)X[U].evaluate(W),H[U].accumulateAdditive(Y);break;case 2500:default:for(let U=0,G=X.length;U!==G;++U)X[U].evaluate(W),H[U].accumulate(Z,Y)}}}_updateWeight(J){let Q=0;if(this.enabled){Q=this.weight;let $=this._weightInterpolant;if($!==null){let Z=$.evaluate(J)[0];if(Q*=Z,J>$.parameterPositions[1]){if(this.stopFading(),Z===0)this.enabled=!1}}}return this._effectiveWeight=Q,Q}_updateTimeScale(J){let Q=0;if(!this.paused){Q=this.timeScale;let $=this._timeScaleInterpolant;if($!==null){let Z=$.evaluate(J)[0];if(Q*=Z,J>$.parameterPositions[1]){if(Q===0)this.paused=!0;else{if(this._restoreTimeScale!==null)Q=this._restoreTimeScale;this.timeScale=Q}this.stopWarping()}}}return this._effectiveTimeScale=Q,Q}_updateTime(J){let Q=this._clip.duration,$=this.loop,Z=this.time+J,K=this._loopCount,W=$===2202;if(J===0){if(K===-1)return Z;return W&&(K&1)===1?Q-Z:Z}if($===2200){if(K===-1)this._loopCount=0,this._setEndings(!0,!0,!1);J:{if(Z>=Q)Z=Q;else if(Z<0)Z=0;else{this.time=Z;break J}if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;this.time=Z,this._mixer.dispatchEvent({type:"finished",action:this,direction:J<0?-1:1})}}else{if(K===-1)if(J>=0)K=0,this._setEndings(!0,this.repetitions===0,W);else this._setEndings(this.repetitions===0,!0,W);if(Z>=Q||Z<0){let Y=Math.floor(Z/Q);Z-=Q*Y,K+=Math.abs(Y);let X=this.repetitions-K;if(X<=0){if(this.clampWhenFinished)this.paused=!0;else this.enabled=!1;Z=J>0?Q:0,this.time=Z,this._mixer.dispatchEvent({type:"finished",action:this,direction:J>0?1:-1})}else{if(X===1){let H=J<0;this._setEndings(H,!H,W)}else this._setEndings(!1,!1,W);this._loopCount=K,this.time=Z,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:Y})}}else this._loopCount=K,this.time=Z;if(W&&(K&1)===1)return Q-Z}return Z}_setEndings(J,Q,$){let Z=this._interpolantSettings;if($)Z.endingStart=2401,Z.endingEnd=2401;else{if(J)Z.endingStart=this.zeroSlopeAtStart?2401:2400;else Z.endingStart=2402;if(Q)Z.endingEnd=this.zeroSlopeAtEnd?2401:2400;else Z.endingEnd=2402}}_scheduleFading(J,Q,$){let Z=this._mixer,K=Z.time,W=this._weightInterpolant;if(W===null)W=Z._lendControlInterpolant(),this._weightInterpolant=W;let{parameterPositions:Y,sampleValues:X}=W;return Y[0]=K,X[0]=Q,Y[1]=K+J,X[1]=$,this}}var KF=new Float32Array(1);class O$ extends M9{constructor(J){super();if(this._root=J,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(J,Q){let $=J._localRoot||this._root,Z=J._clip.tracks,K=Z.length,W=J._propertyBindings,Y=J._interpolants,X=$.uuid,H=this._bindingsByRootAndName,U=H[X];if(U===void 0)U={},H[X]=U;for(let G=0;G!==K;++G){let F=Z[G],N=F.name,q=U[N];if(q!==void 0)++q.referenceCount,W[G]=q;else{if(q=W[G],q!==void 0){if(q._cacheIndex===null)++q.referenceCount,this._addInactiveBinding(q,X,N);continue}let O=Q&&Q._propertyBindings[G].binding.parsedPath;q=new _Y(yJ.create($,N,O),F.ValueTypeName,F.getValueSize()),++q.referenceCount,this._addInactiveBinding(q,X,N),W[G]=q}Y[G].resultBuffer=q.buffer}}_activateAction(J){if(!this._isActiveAction(J)){if(J._cacheIndex===null){let $=(J._localRoot||this._root).uuid,Z=J._clip.uuid,K=this._actionsByClip[Z];this._bindAction(J,K&&K.knownActions[0]),this._addInactiveAction(J,Z,$)}let Q=J._propertyBindings;for(let $=0,Z=Q.length;$!==Z;++$){let K=Q[$];if(K.useCount++===0)this._lendBinding(K),K.saveOriginalState()}this._lendAction(J)}}_deactivateAction(J){if(this._isActiveAction(J)){let Q=J._propertyBindings;for(let $=0,Z=Q.length;$!==Z;++$){let K=Q[$];if(--K.useCount===0)K.restoreOriginalState(),this._takeBackBinding(K)}this._takeBackAction(J)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let J=this;this.stats={actions:{get total(){return J._actions.length},get inUse(){return J._nActiveActions}},bindings:{get total(){return J._bindings.length},get inUse(){return J._nActiveBindings}},controlInterpolants:{get total(){return J._controlInterpolants.length},get inUse(){return J._nActiveControlInterpolants}}}}_isActiveAction(J){let Q=J._cacheIndex;return Q!==null&&Q<this._nActiveActions}_addInactiveAction(J,Q,$){let Z=this._actions,K=this._actionsByClip,W=K[Q];if(W===void 0)W={knownActions:[J],actionByRoot:{}},J._byClipCacheIndex=0,K[Q]=W;else{let Y=W.knownActions;J._byClipCacheIndex=Y.length,Y.push(J)}J._cacheIndex=Z.length,Z.push(J),W.actionByRoot[$]=J}_removeInactiveAction(J){let Q=this._actions,$=Q[Q.length-1],Z=J._cacheIndex;$._cacheIndex=Z,Q[Z]=$,Q.pop(),J._cacheIndex=null;let K=J._clip.uuid,W=this._actionsByClip,Y=W[K],X=Y.knownActions,H=X[X.length-1],U=J._byClipCacheIndex;H._byClipCacheIndex=U,X[U]=H,X.pop(),J._byClipCacheIndex=null;let G=Y.actionByRoot,F=(J._localRoot||this._root).uuid;if(delete G[F],X.length===0)delete W[K];this._removeInactiveBindingsForAction(J)}_removeInactiveBindingsForAction(J){let Q=J._propertyBindings;for(let $=0,Z=Q.length;$!==Z;++$){let K=Q[$];if(--K.referenceCount===0)this._removeInactiveBinding(K)}}_lendAction(J){let Q=this._actions,$=J._cacheIndex,Z=this._nActiveActions++,K=Q[Z];J._cacheIndex=Z,Q[Z]=J,K._cacheIndex=$,Q[$]=K}_takeBackAction(J){let Q=this._actions,$=J._cacheIndex,Z=--this._nActiveActions,K=Q[Z];J._cacheIndex=Z,Q[Z]=J,K._cacheIndex=$,Q[$]=K}_addInactiveBinding(J,Q,$){let Z=this._bindingsByRootAndName,K=this._bindings,W=Z[Q];if(W===void 0)W={},Z[Q]=W;W[$]=J,J._cacheIndex=K.length,K.push(J)}_removeInactiveBinding(J){let Q=this._bindings,$=J.binding,Z=$.rootNode.uuid,K=$.path,W=this._bindingsByRootAndName,Y=W[Z],X=Q[Q.length-1],H=J._cacheIndex;if(X._cacheIndex=H,Q[H]=X,Q.pop(),delete Y[K],Object.keys(Y).length===0)delete W[Z]}_lendBinding(J){let Q=this._bindings,$=J._cacheIndex,Z=this._nActiveBindings++,K=Q[Z];J._cacheIndex=Z,Q[Z]=J,K._cacheIndex=$,Q[$]=K}_takeBackBinding(J){let Q=this._bindings,$=J._cacheIndex,Z=--this._nActiveBindings,K=Q[Z];J._cacheIndex=Z,Q[Z]=J,K._cacheIndex=$,Q[$]=K}_lendControlInterpolant(){let J=this._controlInterpolants,Q=this._nActiveControlInterpolants++,$=J[Q];if($===void 0)$=new eZ(new Float32Array(2),new Float32Array(2),1,KF),$.__cacheIndex=Q,J[Q]=$;return $}_takeBackControlInterpolant(J){let Q=this._controlInterpolants,$=J.__cacheIndex,Z=--this._nActiveControlInterpolants,K=Q[Z];J.__cacheIndex=Z,Q[Z]=J,K.__cacheIndex=$,Q[$]=K}clipAction(J,Q,$){let Z=Q||this._root,K=Z.uuid,W=typeof J==="string"?c6.findByName(Z,J):J,Y=W!==null?W.uuid:J,X=this._actionsByClip[Y],H=null;if($===void 0)if(W!==null)$=W.blendMode;else $=2500;if(X!==void 0){let G=X.actionByRoot[K];if(G!==void 0&&G.blendMode===$)return G;if(H=X.knownActions[0],W===null)W=H._clip}if(W===null)return null;let U=new jY(this,W,Q,$);return this._bindAction(U,H),this._addInactiveAction(U,Y,K),U}existingAction(J,Q){let $=Q||this._root,Z=$.uuid,K=typeof J==="string"?c6.findByName($,J):J,W=K?K.uuid:J,Y=this._actionsByClip[W];if(Y!==void 0)return Y.actionByRoot[Z]||null;return null}stopAllAction(){let J=this._actions,Q=this._nActiveActions;for(let $=Q-1;$>=0;--$)J[$].stop();return this}update(J){J*=this.timeScale;let Q=this._actions,$=this._nActiveActions,Z=this.time+=J,K=Math.sign(J),W=this._accuIndex^=1;for(let H=0;H!==$;++H)Q[H]._update(Z,J,K,W);let Y=this._bindings,X=this._nActiveBindings;for(let H=0;H!==X;++H)Y[H].apply(W);return this}setTime(J){this.time=0;for(let Q=0;Q<this._actions.length;Q++)this._actions[Q].time=0;return this.update(J)}getRoot(){return this._root}uncacheClip(J){let Q=this._actions,$=J.uuid,Z=this._actionsByClip,K=Z[$];if(K!==void 0){let W=K.knownActions;for(let Y=0,X=W.length;Y!==X;++Y){let H=W[Y];this._deactivateAction(H);let U=H._cacheIndex,G=Q[Q.length-1];H._cacheIndex=null,H._byClipCacheIndex=null,G._cacheIndex=U,Q[U]=G,Q.pop(),this._removeInactiveBindingsForAction(H)}delete Z[$]}}uncacheRoot(J){let Q=J.uuid,$=this._actionsByClip;for(let W in $){let Y=$[W].actionByRoot,X=Y[Q];if(X!==void 0)this._deactivateAction(X),this._removeInactiveAction(X)}let Z=this._bindingsByRootAndName,K=Z[Q];if(K!==void 0)for(let W in K){let Y=K[W];Y.restoreOriginalState(),this._removeInactiveBinding(Y)}}uncacheAction(J,Q){let $=this.existingAction(J,Q);if($!==null)this._deactivateAction($),this._removeInactiveAction($)}}class YK{constructor(J=!0){this.autoStart=J,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,r0("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let J=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let Q=performance.now();J=(Q-this.oldTime)/1000,this.oldTime=Q,this.elapsedTime+=J}return J}}class R${constructor(J=1,Q=0,$=0){this.radius=J,this.phi=Q,this.theta=$}set(J,Q,$){return this.radius=J,this.phi=Q,this.theta=$,this}copy(J){return this.radius=J.radius,this.phi=J.phi,this.theta=J.theta,this}makeSafe(){return this.phi=FJ(this.phi,0.000001,Math.PI-0.000001),this}setFromVector3(J){return this.setFromCartesianCoords(J.x,J.y,J.z)}setFromCartesianCoords(J,Q,$){if(this.radius=Math.sqrt(J*J+Q*Q+$*$),this.radius===0)this.theta=0,this.phi=0;else this.theta=Math.atan2(J,$),this.phi=Math.acos(FJ(Q/this.radius,-1,1));return this}clone(){return new this.constructor().copy(this)}}class yY{static{yY.prototype.isMatrix2=!0}constructor(J,Q,$,Z){if(this.elements=[1,0,0,1],J!==void 0)this.set(J,Q,$,Z)}identity(){return this.set(1,0,0,1),this}fromArray(J,Q=0){for(let $=0;$<4;$++)this.elements[$]=J[$+Q];return this}set(J,Q,$,Z){let K=this.elements;return K[0]=J,K[2]=Q,K[1]=$,K[3]=Z,this}}class XK extends M9{constructor(J,Q=null){super();this.object=J,this.domElement=Q,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(J){if(this.domElement!==null)this.disconnect();this.domElement=J}disconnect(){}dispose(){}update(){}}function vY(J,Q,$,Z){let K=WF(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/K.components*K.byteLength;case 1029:return J*Q/K.components*K.byteLength;case 1030:return J*Q*2/K.components*K.byteLength;case 1031:return J*Q*2/K.components*K.byteLength;case 1022:return J*Q*3/K.components*K.byteLength;case 1023:return J*Q*4/K.components*K.byteLength;case 1033:return J*Q*4/K.components*K.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function WF(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));if(typeof window<"u")if(window.__THREE__)r0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="186";function K5(){let J=null,Q=!1,$=null,Z=null;function K(W,Y){Z=J.requestAnimationFrame(K),$(W,Y)}return{start:function(){if(Q===!0)return;if($===null)return;if(J===null)return;Z=J.requestAnimationFrame(K),Q=!0},stop:function(){if(J!==null)J.cancelAnimationFrame(Z);Q=!1},setAnimationLoop:function(W){$=W},setContext:function(W){J=W}}}function YF(J){let Q=new WeakMap;function $(X,H){let{array:U,usage:G}=X,F=U.byteLength,N=J.createBuffer();J.bindBuffer(H,N),J.bufferData(H,U,G),X.onUploadCallback();let q;if(U instanceof Float32Array)q=J.FLOAT;else if(typeof Float16Array<"u"&&U instanceof Float16Array)q=J.HALF_FLOAT;else if(U instanceof Uint16Array)if(X.isFloat16BufferAttribute)q=J.HALF_FLOAT;else q=J.UNSIGNED_SHORT;else if(U instanceof Int16Array)q=J.SHORT;else if(U instanceof Uint32Array)q=J.UNSIGNED_INT;else if(U instanceof Int32Array)q=J.INT;else if(U instanceof Int8Array)q=J.BYTE;else if(U instanceof Uint8Array)q=J.UNSIGNED_BYTE;else if(U instanceof Uint8ClampedArray)q=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+U);return{buffer:N,type:q,bytesPerElement:U.BYTES_PER_ELEMENT,version:X.version,size:F}}function Z(X,H,U){let{array:G,updateRanges:F}=H;if(J.bindBuffer(U,X),F.length===0)J.bufferSubData(U,0,G);else{F.sort((q,O)=>q.start-O.start);let N=0;for(let q=1;q<F.length;q++){let O=F[N],D=F[q];if(D.start<=O.start+O.count+1)O.count=Math.max(O.count,D.start+D.count-O.start);else++N,F[N]=D}F.length=N+1;for(let q=0,O=F.length;q<O;q++){let D=F[q];J.bufferSubData(U,D.start*G.BYTES_PER_ELEMENT,G,D.start,D.count)}H.clearUpdateRanges()}H.onUploadCallback()}function K(X){if(X.isInterleavedBufferAttribute)X=X.data;return Q.get(X)}function W(X){if(X.isInterleavedBufferAttribute)X=X.data;let H=Q.get(X);if(H)J.deleteBuffer(H.buffer),Q.delete(X)}function Y(X,H){if(X.isInterleavedBufferAttribute)X=X.data;if(X.isGLBufferAttribute){let G=Q.get(X);if(!G||G.version<X.version)Q.set(X,{buffer:X.buffer,type:X.type,bytesPerElement:X.elementSize,version:X.version});return}let U=Q.get(X);if(U===void 0)Q.set(X,$(X,H));else if(U.version<X.version){if(U.size!==X.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(U.buffer,X,H),U.version=X.version}}return{get:K,remove:W,update:Y}}var XF=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HF=`#ifdef USE_ALPHAHASH
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
#endif`,UF=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,NF=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GF=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,FF=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,EF=`#ifdef USE_AOMAP
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
#endif`,qF=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OF=`#ifdef USE_BATCHING
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
#endif`,RF=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LF=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VF=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,DF=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,BF=`#ifdef USE_IRIDESCENCE
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
#endif`,MF=`#ifdef USE_BUMPMAP
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
#endif`,kF=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PF=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IF=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zF=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,AF=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,TF=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_F=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,wF=`#define PI 3.141592653589793
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
} // validated`,SF=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jF=`vec3 transformedNormal = objectNormal;
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
#endif`,yF=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vF=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fF=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bF=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hF="gl_FragColor = linearToOutputTexel( gl_FragColor );",xF=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gF=`#ifdef USE_ENVMAP
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
#endif`,pF=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mF=`#ifdef USE_ENVMAP
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
#endif`,lF=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uF=`#ifdef USE_ENVMAP
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
#endif`,dF=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cF=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nF=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sF=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iF=`#ifdef USE_GRADIENTMAP
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
}`,oF=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aF=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rF=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tF=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,eF=`#ifdef USE_ENVMAP
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
#endif`,J1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K1=`PhysicalMaterial material;
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
}`,Y1=`
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
#endif`,X1=`#if defined( RE_IndirectDiffuse )
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
#endif`,U1=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,N1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,L1=`#if defined( USE_POINTS_UV )
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
#endif`,V1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,D1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C1=`#ifdef USE_MORPHTARGETS
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
#endif`,P1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,A1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,w1=`#ifdef USE_NORMALMAP
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
#endif`,S1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,h1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,u1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n1=`float getShadowMask() {
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
}`,s1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i1=`#ifdef USE_SKINNING
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
#endif`,o1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a1=`#ifdef USE_SKINNING
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
#endif`,r1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,QE=`#ifdef USE_TRANSMISSION
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
#endif`,$E=`#ifdef USE_TRANSMISSION
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
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,XE=`varying vec2 vUv;
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
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`#include <common>
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
}`,qE=`#if DEPTH_PACKING == 3200
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
}`,OE=`#define DISTANCE
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
}`,RE=`#define DISTANCE
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
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`uniform float scale;
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
}`,BE=`uniform vec3 diffuse;
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
}`,ME=`#include <common>
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
}`,kE=`uniform vec3 diffuse;
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
}`,CE=`#define LAMBERT
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
}`,PE=`#define LAMBERT
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
}`,IE=`#define MATCAP
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
}`,AE=`#define NORMAL
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
}`,TE=`#define NORMAL
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
}`,_E=`#define PHONG
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
}`,wE=`#define PHONG
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
}`,SE=`#define STANDARD
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
}`,jE=`#define STANDARD
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
}`,yE=`#define TOON
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
}`,vE=`#define TOON
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
}`,fE=`uniform float size;
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
}`,bE=`uniform vec3 diffuse;
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
}`,hE=`#include <common>
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
}`,xE=`uniform vec3 color;
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
}`,gE=`uniform float rotation;
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
}`,pE=`uniform vec3 diffuse;
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
}`,LJ={alphahash_fragment:XF,alphahash_pars_fragment:HF,alphamap_fragment:UF,alphamap_pars_fragment:NF,alphatest_fragment:GF,alphatest_pars_fragment:FF,aomap_fragment:EF,aomap_pars_fragment:qF,batching_pars_vertex:OF,batching_vertex:RF,begin_vertex:LF,beginnormal_vertex:VF,bsdfs:DF,iridescence_fragment:BF,bumpmap_pars_fragment:MF,clipping_planes_fragment:kF,clipping_planes_pars_fragment:CF,clipping_planes_pars_vertex:PF,clipping_planes_vertex:IF,color_fragment:zF,color_pars_fragment:AF,color_pars_vertex:TF,color_vertex:_F,common:wF,cube_uv_reflection_fragment:SF,defaultnormal_vertex:jF,displacementmap_pars_vertex:yF,displacementmap_vertex:vF,emissivemap_fragment:fF,emissivemap_pars_fragment:bF,colorspace_fragment:hF,colorspace_pars_fragment:xF,envmap_fragment:gF,envmap_common_pars_fragment:pF,envmap_pars_fragment:mF,envmap_pars_vertex:lF,envmap_physical_pars_fragment:eF,envmap_vertex:uF,fog_vertex:dF,fog_pars_vertex:cF,fog_fragment:nF,fog_pars_fragment:sF,gradientmap_pars_fragment:iF,lightmap_pars_fragment:oF,lights_lambert_fragment:aF,lights_lambert_pars_fragment:rF,lights_pars_begin:tF,lights_toon_fragment:J1,lights_toon_pars_fragment:Q1,lights_phong_fragment:$1,lights_phong_pars_fragment:Z1,lights_physical_fragment:K1,lights_physical_pars_fragment:W1,lights_fragment_begin:Y1,lights_fragment_maps:X1,lights_fragment_end:H1,lightprobes_pars_fragment:U1,logdepthbuf_fragment:N1,logdepthbuf_pars_fragment:G1,logdepthbuf_pars_vertex:F1,logdepthbuf_vertex:E1,map_fragment:q1,map_pars_fragment:O1,map_particle_fragment:R1,map_particle_pars_fragment:L1,metalnessmap_fragment:V1,metalnessmap_pars_fragment:D1,morphinstance_vertex:B1,morphcolor_vertex:M1,morphnormal_vertex:k1,morphtarget_pars_vertex:C1,morphtarget_vertex:P1,normal_fragment_begin:I1,normal_fragment_maps:z1,normal_pars_fragment:A1,normal_pars_vertex:T1,normal_vertex:_1,normalmap_pars_fragment:w1,clearcoat_normal_fragment_begin:S1,clearcoat_normal_fragment_maps:j1,clearcoat_pars_fragment:y1,iridescence_pars_fragment:v1,opaque_fragment:f1,packing:b1,premultiplied_alpha_fragment:h1,project_vertex:x1,dithering_fragment:g1,dithering_pars_fragment:p1,roughnessmap_fragment:m1,roughnessmap_pars_fragment:l1,shadowmap_pars_fragment:u1,shadowmap_pars_vertex:d1,shadowmap_vertex:c1,shadowmask_pars_fragment:n1,skinbase_vertex:s1,skinning_pars_vertex:i1,skinning_vertex:o1,skinnormal_vertex:a1,specularmap_fragment:r1,specularmap_pars_fragment:t1,tonemapping_fragment:e1,tonemapping_pars_fragment:JE,transmission_fragment:QE,transmission_pars_fragment:$E,uv_pars_fragment:ZE,uv_pars_vertex:KE,uv_vertex:WE,worldpos_vertex:YE,background_vert:XE,background_frag:HE,backgroundCube_vert:UE,backgroundCube_frag:NE,cube_vert:GE,cube_frag:FE,depth_vert:EE,depth_frag:qE,distance_vert:OE,distance_frag:RE,equirect_vert:LE,equirect_frag:VE,linedashed_vert:DE,linedashed_frag:BE,meshbasic_vert:ME,meshbasic_frag:kE,meshlambert_vert:CE,meshlambert_frag:PE,meshmatcap_vert:IE,meshmatcap_frag:zE,meshnormal_vert:AE,meshnormal_frag:TE,meshphong_vert:_E,meshphong_frag:wE,meshphysical_vert:SE,meshphysical_frag:jE,meshtoon_vert:yE,meshtoon_frag:vE,points_vert:fE,points_frag:bE,shadow_vert:hE,shadow_frag:xE,sprite_vert:gE,sprite_frag:pE},p0={common:{diffuse:{value:new j0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new XJ},alphaMap:{value:null},alphaMapTransform:{value:new XJ},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new XJ}},envmap:{envMap:{value:null},envMapRotation:{value:new XJ},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new XJ}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new XJ}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new XJ},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new XJ},normalScale:{value:new q0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new XJ},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new XJ}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new XJ}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new XJ}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new j0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new _},probesMax:{value:new _},probesResolution:{value:new _}},points:{diffuse:{value:new j0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new XJ},alphaTest:{value:0},uvTransform:{value:new XJ}},sprite:{diffuse:{value:new j0(16777215)},opacity:{value:1},center:{value:new q0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new XJ},alphaMap:{value:null},alphaMapTransform:{value:new XJ},alphaTest:{value:0}}},h9={basic:{uniforms:I8([p0.common,p0.specularmap,p0.envmap,p0.aomap,p0.lightmap,p0.fog]),vertexShader:LJ.meshbasic_vert,fragmentShader:LJ.meshbasic_frag},lambert:{uniforms:I8([p0.common,p0.specularmap,p0.envmap,p0.aomap,p0.lightmap,p0.emissivemap,p0.bumpmap,p0.normalmap,p0.displacementmap,p0.fog,p0.lights,{emissive:{value:new j0(0)},envMapIntensity:{value:1}}]),vertexShader:LJ.meshlambert_vert,fragmentShader:LJ.meshlambert_frag},phong:{uniforms:I8([p0.common,p0.specularmap,p0.envmap,p0.aomap,p0.lightmap,p0.emissivemap,p0.bumpmap,p0.normalmap,p0.displacementmap,p0.fog,p0.lights,{emissive:{value:new j0(0)},specular:{value:new j0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:LJ.meshphong_vert,fragmentShader:LJ.meshphong_frag},standard:{uniforms:I8([p0.common,p0.envmap,p0.aomap,p0.lightmap,p0.emissivemap,p0.bumpmap,p0.normalmap,p0.displacementmap,p0.roughnessmap,p0.metalnessmap,p0.fog,p0.lights,{emissive:{value:new j0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:LJ.meshphysical_vert,fragmentShader:LJ.meshphysical_frag},toon:{uniforms:I8([p0.common,p0.aomap,p0.lightmap,p0.emissivemap,p0.bumpmap,p0.normalmap,p0.displacementmap,p0.gradientmap,p0.fog,p0.lights,{emissive:{value:new j0(0)}}]),vertexShader:LJ.meshtoon_vert,fragmentShader:LJ.meshtoon_frag},matcap:{uniforms:I8([p0.common,p0.bumpmap,p0.normalmap,p0.displacementmap,p0.fog,{matcap:{value:null}}]),vertexShader:LJ.meshmatcap_vert,fragmentShader:LJ.meshmatcap_frag},points:{uniforms:I8([p0.points,p0.fog]),vertexShader:LJ.points_vert,fragmentShader:LJ.points_frag},dashed:{uniforms:I8([p0.common,p0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:LJ.linedashed_vert,fragmentShader:LJ.linedashed_frag},depth:{uniforms:I8([p0.common,p0.displacementmap]),vertexShader:LJ.depth_vert,fragmentShader:LJ.depth_frag},normal:{uniforms:I8([p0.common,p0.bumpmap,p0.normalmap,p0.displacementmap,{opacity:{value:1}}]),vertexShader:LJ.meshnormal_vert,fragmentShader:LJ.meshnormal_frag},sprite:{uniforms:I8([p0.sprite,p0.fog]),vertexShader:LJ.sprite_vert,fragmentShader:LJ.sprite_frag},background:{uniforms:{uvTransform:{value:new XJ},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:LJ.background_vert,fragmentShader:LJ.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new XJ}},vertexShader:LJ.backgroundCube_vert,fragmentShader:LJ.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:LJ.cube_vert,fragmentShader:LJ.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:LJ.equirect_vert,fragmentShader:LJ.equirect_frag},distance:{uniforms:I8([p0.common,p0.displacementmap,{referencePosition:{value:new _},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:LJ.distance_vert,fragmentShader:LJ.distance_frag},shadow:{uniforms:I8([p0.lights,p0.fog,{color:{value:new j0(0)},opacity:{value:1}}]),vertexShader:LJ.shadow_vert,fragmentShader:LJ.shadow_frag}};h9.physical={uniforms:I8([h9.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new XJ},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new XJ},clearcoatNormalScale:{value:new q0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new XJ},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new XJ},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new XJ},sheen:{value:0},sheenColor:{value:new j0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new XJ},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new XJ},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new XJ},transmissionSamplerSize:{value:new q0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new XJ},attenuationDistance:{value:0},attenuationColor:{value:new j0(0)},specularColor:{value:new j0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new XJ},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new XJ},anisotropyVector:{value:new q0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new XJ}}]),vertexShader:LJ.meshphysical_vert,fragmentShader:LJ.meshphysical_frag};var HK={r:0,b:0,g:0},mE=new QJ,W5=new XJ;W5.set(-1,0,0,0,1,0,0,0,1);function lE(J,Q,$,Z,K,W){let Y=new j0(0),X=K===!0?0:1,H,U,G=null,F=0,N=null;function q(M){let k=M.isScene===!0?M.background:null;if(k&&k.isTexture){let V=M.backgroundBlurriness>0;k=Q.get(k,V)}return k}function O(M){let k=!1,V=q(M);if(V===null)R(Y,X);else if(V&&V.isColor)R(V,1),k=!0;let L=J.xr.getEnvironmentBlendMode();if(L==="additive")$.buffers.color.setClear(0,0,0,1,W);else if(L==="alpha-blend")$.buffers.color.setClear(0,0,0,0,W);if(J.autoClear||k)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function D(M,k){let V=q(k);if(V&&(V.isCubeTexture||V.mapping===J$)){if(U===void 0)U=new C0(new TJ(1,1,1),new J8({name:"BackgroundCubeMaterial",uniforms:Z6(h9.backgroundCube.uniforms),vertexShader:h9.backgroundCube.vertexShader,fragmentShader:h9.backgroundCube.fragmentShader,side:D8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(L,P,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(U);if(U.material.uniforms.envMap.value=V,U.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(mE.makeRotationFromEuler(k.backgroundRotation)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1)U.material.uniforms.backgroundRotation.value.premultiply(W5);if(U.material.toneMapped=qJ.getTransfer(V.colorSpace)!==lJ,G!==V||F!==V.version||N!==J.toneMapping)U.material.needsUpdate=!0,G=V,F=V.version,N=J.toneMapping;U.layers.enableAll(),M.unshift(U,U.geometry,U.material,0,0,null)}else if(V&&V.isTexture){if(H===void 0)H=new C0(new RJ(2,2),new J8({name:"BackgroundMaterial",uniforms:Z6(h9.background.uniforms),vertexShader:h9.background.vertexShader,fragmentShader:h9.background.fragmentShader,side:D7,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),H.geometry.deleteAttribute("normal"),Object.defineProperty(H.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(H);if(H.material.uniforms.t2D.value=V,H.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,H.material.toneMapped=qJ.getTransfer(V.colorSpace)!==lJ,V.matrixAutoUpdate===!0)V.updateMatrix();if(H.material.uniforms.uvTransform.value.copy(V.matrix),G!==V||F!==V.version||N!==J.toneMapping)H.material.needsUpdate=!0,G=V,F=V.version,N=J.toneMapping;H.layers.enableAll(),M.unshift(H,H.geometry,H.material,0,0,null)}}function R(M,k){M.getRGB(HK,VY(J)),$.buffers.color.setClear(HK.r,HK.g,HK.b,k,W)}function E(){if(U!==void 0)U.geometry.dispose(),U.material.dispose(),U=void 0;if(H!==void 0)H.geometry.dispose(),H.material.dispose(),H=void 0}return{getClearColor:function(){return Y},setClearColor:function(M,k=1){Y.set(M),X=k,R(Y,X)},getClearAlpha:function(){return X},setClearAlpha:function(M){X=M,R(Y,X)},render:O,addToRenderList:D,dispose:E}}function uE(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},K=N(null),W=K,Y=!1;function X(b,n,Z0,v,y){let u=!1,I=F(b,v,Z0,n);if(W!==I)W=I,U(W.object);if(u=q(b,v,Z0,y),u)O(b,v,Z0,y);if(y!==null)Q.update(y,J.ELEMENT_ARRAY_BUFFER);if(u||Y){if(Y=!1,V(b,n,Z0,v),y!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(y).buffer)}}function H(){return J.createVertexArray()}function U(b){return J.bindVertexArray(b)}function G(b){return J.deleteVertexArray(b)}function F(b,n,Z0,v){let y=v.wireframe===!0,u=Z[n.id];if(u===void 0)u={},Z[n.id]=u;let I=b.isInstancedMesh===!0?b.id:0,x=u[I];if(x===void 0)x={},u[I]=x;let h=x[Z0.id];if(h===void 0)h={},x[Z0.id]=h;let f=h[y];if(f===void 0)f=N(H()),h[y]=f;return f}function N(b){let n=[],Z0=[],v=[];for(let y=0;y<$;y++)n[y]=0,Z0[y]=0,v[y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:n,enabledAttributes:Z0,attributeDivisors:v,object:b,attributes:{},index:null}}function q(b,n,Z0,v){let y=W.attributes,u=n.attributes,I=0,x=Z0.getAttributes();for(let h in x)if(x[h].location>=0){let g=y[h],Y0=u[h];if(Y0===void 0){if(h==="instanceMatrix"&&b.instanceMatrix)Y0=b.instanceMatrix;if(h==="instanceColor"&&b.instanceColor)Y0=b.instanceColor}if(g===void 0)return!0;if(g.attribute!==Y0)return!0;if(Y0&&g.data!==Y0.data)return!0;I++}if(W.attributesNum!==I)return!0;if(W.index!==v)return!0;return!1}function O(b,n,Z0,v){let y={},u=n.attributes,I=0,x=Z0.getAttributes();for(let h in x)if(x[h].location>=0){let g=u[h];if(g===void 0){if(h==="instanceMatrix"&&b.instanceMatrix)g=b.instanceMatrix;if(h==="instanceColor"&&b.instanceColor)g=b.instanceColor}let Y0={};if(Y0.attribute=g,g&&g.data)Y0.data=g.data;y[h]=Y0,I++}W.attributes=y,W.attributesNum=I,W.index=v}function D(){let b=W.newAttributes;for(let n=0,Z0=b.length;n<Z0;n++)b[n]=0}function R(b){E(b,0)}function E(b,n){let{newAttributes:Z0,enabledAttributes:v,attributeDivisors:y}=W;if(Z0[b]=1,v[b]===0)J.enableVertexAttribArray(b),v[b]=1;if(y[b]!==n)J.vertexAttribDivisor(b,n),y[b]=n}function M(){let{newAttributes:b,enabledAttributes:n}=W;for(let Z0=0,v=n.length;Z0<v;Z0++)if(n[Z0]!==b[Z0])J.disableVertexAttribArray(Z0),n[Z0]=0}function k(b,n,Z0,v,y,u,I){if(I===!0)J.vertexAttribIPointer(b,n,Z0,y,u);else J.vertexAttribPointer(b,n,Z0,v,y,u)}function V(b,n,Z0,v){D();let y=v.attributes,u=Z0.getAttributes(),I=n.defaultAttributeValues;for(let x in u){let h=u[x];if(h.location>=0){let f=y[x];if(f===void 0){if(x==="instanceMatrix"&&b.instanceMatrix)f=b.instanceMatrix;if(x==="instanceColor"&&b.instanceColor)f=b.instanceColor}if(f!==void 0){let{normalized:g,itemSize:Y0}=f,G0=Q.get(f);if(G0===void 0)continue;let{buffer:M0,type:S0,bytesPerElement:$0}=G0,j=S0===J.INT||S0===J.UNSIGNED_INT||f.gpuType===BW;if(f.isInterleavedBufferAttribute){let p=f.data,o=p.stride,K0=f.offset;if(p.isInstancedInterleavedBuffer){for(let r=0;r<h.locationSize;r++)E(h.location+r,p.meshPerAttribute);if(b.isInstancedMesh!==!0&&v._maxInstanceCount===void 0)v._maxInstanceCount=p.meshPerAttribute*p.count}else for(let r=0;r<h.locationSize;r++)R(h.location+r);J.bindBuffer(J.ARRAY_BUFFER,M0);for(let r=0;r<h.locationSize;r++)k(h.location+r,Y0/h.locationSize,S0,g,o*$0,(K0+Y0/h.locationSize*r)*$0,j)}else{if(f.isInstancedBufferAttribute){for(let p=0;p<h.locationSize;p++)E(h.location+p,f.meshPerAttribute);if(b.isInstancedMesh!==!0&&v._maxInstanceCount===void 0)v._maxInstanceCount=f.meshPerAttribute*f.count}else for(let p=0;p<h.locationSize;p++)R(h.location+p);J.bindBuffer(J.ARRAY_BUFFER,M0);for(let p=0;p<h.locationSize;p++)k(h.location+p,Y0/h.locationSize,S0,g,Y0*$0,Y0/h.locationSize*p*$0,j)}}else if(I!==void 0){let g=I[x];if(g!==void 0)switch(g.length){case 2:J.vertexAttrib2fv(h.location,g);break;case 3:J.vertexAttrib3fv(h.location,g);break;case 4:J.vertexAttrib4fv(h.location,g);break;default:J.vertexAttrib1fv(h.location,g)}}}}M()}function L(){z();for(let b in Z){let n=Z[b];for(let Z0 in n){let v=n[Z0];for(let y in v){let u=v[y];for(let I in u)G(u[I].object),delete u[I];delete v[y]}}delete Z[b]}}function P(b){if(Z[b.id]===void 0)return;let n=Z[b.id];for(let Z0 in n){let v=n[Z0];for(let y in v){let u=v[y];for(let I in u)G(u[I].object),delete u[I];delete v[y]}}delete Z[b.id]}function T(b){for(let n in Z){let Z0=Z[n];for(let v in Z0){let y=Z0[v];if(y[b.id]===void 0)continue;let u=y[b.id];for(let I in u)G(u[I].object),delete u[I];delete y[b.id]}}}function B(b){for(let n in Z){let Z0=Z[n],v=b.isInstancedMesh===!0?b.id:0,y=Z0[v];if(y===void 0)continue;for(let u in y){let I=y[u];for(let x in I)G(I[x].object),delete I[x];delete y[u]}if(delete Z0[v],Object.keys(Z0).length===0)delete Z[n]}}function z(){if(d(),Y=!0,W===K)return;W=K,U(W.object)}function d(){K.geometry=null,K.program=null,K.wireframe=!1}return{setup:X,reset:z,resetDefaultState:d,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfObject:B,releaseStatesOfProgram:T,initAttributes:D,enableAttribute:R,disableUnusedAttributes:M}}function dE(J,Q,$){let Z;function K(H){Z=H}function W(H,U){J.drawArrays(Z,H,U),$.update(U,Z,1)}function Y(H,U,G){if(G===0)return;J.drawArraysInstanced(Z,H,U,G),$.update(U,Z,G)}function X(H,U,G){if(G===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,H,0,U,0,G);let N=0;for(let q=0;q<G;q++)N+=U[q];$.update(N,Z,1)}this.setMode=K,this.render=W,this.renderInstances=Y,this.renderMultiDraw=X}function cE(J,Q,$,Z){let K;function W(){if(K!==void 0)return K;if(Q.has("EXT_texture_filter_anisotropic")===!0){let T=Q.get("EXT_texture_filter_anisotropic");K=J.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else K=0;return K}function Y(T){if(T!==j9&&Z.convert(T)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function X(T){let B=T===R8&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(T!==B9&&T!==t9&&!B&&Z.convert(T)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE))return!1;return!0}function H(T){if(T==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";T="mediump"}if(T==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let U=$.precision!==void 0?$.precision:"highp",G=H(U);if(G!==U)r0("WebGLRenderer:",U,"not supported, using",G,"instead."),U=G;let F=$.logarithmicDepthBuffer===!0,N=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control");if($.reversedDepthBuffer===!0&&N===!1)r0("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let q=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),O=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=J.getParameter(J.MAX_TEXTURE_SIZE),R=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),E=J.getParameter(J.MAX_VERTEX_ATTRIBS),M=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),k=J.getParameter(J.MAX_VARYING_VECTORS),V=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),L=J.getParameter(J.MAX_SAMPLES),P=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:W,getMaxPrecision:H,textureFormatReadable:Y,textureTypeReadable:X,precision:U,logarithmicDepthBuffer:F,reversedDepthBuffer:N,maxTextures:q,maxVertexTextures:O,maxTextureSize:D,maxCubemapSize:R,maxAttributes:E,maxVertexUniforms:M,maxVaryings:k,maxFragmentUniforms:V,maxSamples:L,samples:P}}function nE(J){let Q=this,$=null,Z=0,K=!1,W=!1,Y=new e8,X=new XJ,H={value:null,needsUpdate:!1};this.uniform=H,this.numPlanes=0,this.numIntersection=0,this.init=function(F,N){let q=F.length!==0||N||Z!==0||K;return K=N,Z=F.length,q},this.beginShadows=function(){W=!0,G(null)},this.endShadows=function(){W=!1},this.setGlobalState=function(F,N){$=G(F,N,0)},this.setState=function(F,N,q){let{clippingPlanes:O,clipIntersection:D,clipShadows:R}=F,E=J.get(F);if(!K||O===null||O.length===0||W&&!R)if(W)G(null);else U();else{let M=W?0:Z,k=M*4,V=E.clippingState||null;H.value=V,V=G(O,N,k,q);for(let L=0;L!==k;++L)V[L]=$[L];E.clippingState=V,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=M}};function U(){if(H.value!==$)H.value=$,H.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function G(F,N,q,O){let D=F!==null?F.length:0,R=null;if(D!==0){if(R=H.value,O!==!0||R===null){let E=q+D*4,M=N.matrixWorldInverse;if(X.getNormalMatrix(M),R===null||R.length<E)R=new Float32Array(E);for(let k=0,V=q;k!==D;++k,V+=4)Y.copy(F[k]).applyMatrix4(M,X),Y.normal.toArray(R,V),R[V+3]=Y.constant}H.value=R,H.needsUpdate=!0}return Q.numPlanes=D,Q.numIntersection=0,R}}var HQ=4,sE=6,iE=20,oE=256,L$=new W7,hU=new j0,fY=null,bY=0,hY=0,xY=!1,aE=new _,W6=new _;class M${constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,K={}){let{size:W=256,position:Y=aE}=K;fY=this._renderer.getRenderTarget(),bY=this._renderer.getActiveCubeFace(),hY=this._renderer.getActiveMipmapLevel(),xY=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(W);let X=this._allocateTargets();if(X.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,X,Y),Q>0)this._blur(X,0,0,Q);return this._applyPMREM(X),this._cleanup(X),X}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=pU(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=gU(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(fY,bY,hY),this._renderer.xr.enabled=xY,J.scissorTest=!1,XQ(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===i6||J.mapping===d7)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);fY=this._renderer.getRenderTarget(),bY=this._renderer.getActiveCubeFace(),hY=this._renderer.getActiveMipmapLevel(),xY=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:X8,minFilter:X8,generateMipmaps:!1,type:R8,format:j9,colorSpace:d8,depthBuffer:!1},Z=xU(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=xU(J,Q,$);let{_lodMax:K}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=rE(K)),this._blurMaterial=eE(K,J,Q),this._ggxMaterial=tE(K,J,Q)}return Z}_compileMaterial(J){let Q=new C0(new vJ,J);this._renderer.compile(Q,L$)}_sceneToCubeUV(J,Q,$,Z,K){let X=new G8(90,1,Q,$),H=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],G=this._renderer,F=G.autoClear,N=G.toneMapping;if(G.getClearColor(hU),G.toneMapping=V9,G.autoClear=!1,G.state.buffers.depth.getReversed())G.setRenderTarget(Z),G.clearDepth(),G.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new C0(new TJ,new bJ({name:"PMREM.Background",side:D8,depthWrite:!1,depthTest:!1}));let O=this._backgroundBox,D=O.material,R=!1,E=J.background;if(E){if(E.isColor)D.color.copy(E),J.background=null,R=!0}else D.color.copy(hU),R=!0;for(let M=0;M<6;M++){let k=M%3;if(k===0)X.up.set(0,H[M],0),X.position.set(K.x,K.y,K.z),X.lookAt(K.x+U[M],K.y,K.z);else if(k===1)X.up.set(0,0,H[M]),X.position.set(K.x,K.y,K.z),X.lookAt(K.x,K.y+U[M],K.z);else X.up.set(0,H[M],0),X.position.set(K.x,K.y,K.z),X.lookAt(K.x,K.y,K.z+U[M]);let V=this._cubeSize;if(XQ(Z,k*V,M>2?V:0,V,V),G.setRenderTarget(Z),R)G.render(O,X);G.render(J,X)}G.toneMapping=N,G.autoClear=F,J.background=E}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===i6||J.mapping===d7;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=pU();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=gU();let K=Z?this._cubemapMaterial:this._equirectMaterial,W=this._lodMeshes[0];W.material=K;let Y=K.uniforms;Y.envMap.value=J;let X=this._cubeSize;XQ(Q,0,0,3*X,2*X),$.setRenderTarget(Q),$.render(W,L$)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodMeshes.length;for(let K=1;K<Z;K++)this._applyGGXFilter(J,K-1,K);Q.autoClear=$}_applyGGXFilter(J,Q,$){let Z=this._renderer,K=this._pingPongRenderTarget,W=this._ggxMaterial,Y=this._lodMeshes[$];Y.material=W;let X=W.uniforms,H=$/(this._lodMeshes.length-1),U=Q/(this._lodMeshes.length-1),G=Math.sqrt(H*H-U*U),F=H*1.25,N=G*F,{_lodMax:q}=this,O=this._sizeLods[$],D=3*O*($>q-HQ?$-q+HQ:0),R=4*(this._cubeSize-O);X.envMap.value=J.texture,X.roughness.value=N,X.mipInt.value=q-Q,XQ(K,D,R,3*O,2*O),Z.setRenderTarget(K),Z.render(Y,L$),X.envMap.value=K.texture,X.roughness.value=0,X.mipInt.value=q-$,XQ(J,D,R,3*O,2*O),Z.setRenderTarget(J),Z.render(Y,L$)}_blur(J,Q,$,Z){let K=this._pingPongRenderTarget,W=Math.min(Z,Math.PI)/Math.SQRT2;this._blurPass(J,K,Q,$,W),this._blurPass(K,J,$,$,W)}_blurPass(J,Q,$,Z,K){let W=this._renderer,Y=this._blurMaterial,X=this._lodMeshes[Z];X.material=Y;let H=Y.uniforms;H.envMap.value=J.texture,H.sigma.value=K,H.mipInt.value=this._lodMax-$;let U=this._sizeLods[Z],G=3*U*(Z>this._lodMax-HQ?Z-this._lodMax+HQ:0),F=4*(this._cubeSize-U);XQ(Q,G,F,3*U,2*U),W.setRenderTarget(Q),W.render(X,L$)}}function rE(J){let Q=[],$=[],Z=J,K=J-HQ+1+sE;for(let W=0;W<K;W++){let Y=Math.pow(2,Z);Q.push(Y);let X=1/(Y-2),H=-X,U=1+X,G=[H,H,U,H,U,U,H,H,U,U,H,U],F=6,N=6,q=3,O=new Float32Array(q*N*F),D=new Float32Array(q*N*F);for(let E=0;E<F;E++){let M=E%3*2/3-1,k=E>2?0:-1,V=[M,k,0,M+0.6666666666666666,k,0,M+0.6666666666666666,k+1,0,M,k,0,M+0.6666666666666666,k+1,0,M,k+1,0];O.set(V,q*N*E);for(let L=0;L<N;L++){let P=G[L*2]*2-1,T=G[L*2+1]*2-1;if(E===0)W6.set(1,T,P);else if(E===1)W6.set(-P,1,-T);else if(E===2)W6.set(-P,T,1);else if(E===3)W6.set(-1,T,-P);else if(E===4)W6.set(-P,-1,T);else W6.set(P,T,-1);W6.toArray(D,(E*N+L)*q)}}let R=new vJ;if(R.setAttribute("position",new tJ(O,q)),R.setAttribute("outputDirection",new tJ(D,q)),$.push(new C0(R,null)),Z>HQ)Z--}return{lodMeshes:$,sizeLods:Q}}function xU(J,Q,$){let Z=new Z8(J,Q,$);return Z.texture.mapping=J$,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function XQ(J,Q,$,Z,K){J.viewport.set(Q,$,Z,K),J.scissor.set(Q,$,Z,K)}function tE(J,Q,$){return new J8({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:oE,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:NK(),fragmentShader:`

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
		`,blending:Q9,depthTest:!1,depthWrite:!1})}function eE(J,Q,$){return new J8({name:"SphericalGaussianBlur",defines:{SAMPLES:iE,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:NK(),fragmentShader:`

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
		`,blending:Q9,depthTest:!1,depthWrite:!1})}function gU(){return new J8({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:NK(),fragmentShader:`

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
		`,blending:Q9,depthTest:!1,depthWrite:!1})}function pU(){return new J8({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:NK(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Q9,depthTest:!1,depthWrite:!1})}function NK(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class uY extends Z8{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new nZ(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new TJ(5,5,5),K=new J8({name:"CubemapFromEquirect",uniforms:Z6($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:D8,blending:Q9});K.uniforms.tEquirect.value=Q;let W=new C0(Z,K),Y=Q.minFilter;if(Q.minFilter===$9)Q.minFilter=X8;return new AY(1,10,this).update(J,W),Q.minFilter=Y,W.geometry.dispose(),W.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let K=J.getRenderTarget();for(let W=0;W<6;W++)J.setRenderTarget(this,W),J.clear(Q,$,Z);J.setRenderTarget(K)}}function Jq(J){let Q=new WeakMap,$=new WeakMap,Z=null;function K(N,q=!1){if(N===null||N===void 0)return null;if(q)return Y(N);return W(N)}function W(N){if(N&&N.isTexture){let q=N.mapping;if(q===zZ||q===AZ)if(Q.has(N)){let O=Q.get(N).texture;return X(O,N.mapping)}else{let O=N.image;if(O&&O.height>0){let D=new uY(O.height);return D.fromEquirectangularTexture(J,N),Q.set(N,D),N.addEventListener("dispose",U),X(D.texture,N.mapping)}else return null}}return N}function Y(N){if(N&&N.isTexture){let q=N.mapping,O=q===zZ||q===AZ,D=q===i6||q===d7;if(O||D){let R=$.get(N),E=R!==void 0?R.texture.pmremVersion:0;if(N.isRenderTargetTexture&&N.pmremVersion!==E){if(Z===null)Z=new M$(J);return R=O?Z.fromEquirectangular(N,R):Z.fromCubemap(N,R),R.texture.pmremVersion=N.pmremVersion,$.set(N,R),R.texture}else if(R!==void 0)return R.texture;else{let M=N.image;if(O&&M&&M.height>0||D&&M&&H(M)){if(Z===null)Z=new M$(J);return R=O?Z.fromEquirectangular(N):Z.fromCubemap(N),R.texture.pmremVersion=N.pmremVersion,$.set(N,R),N.addEventListener("dispose",G),R.texture}else return null}}}return N}function X(N,q){if(q===zZ)N.mapping=i6;else if(q===AZ)N.mapping=d7;return N}function H(N){let q=0,O=6;for(let D=0;D<O;D++)if(N[D]!==void 0)q++;return q===O}function U(N){let q=N.target;q.removeEventListener("dispose",U);let O=Q.get(q);if(O!==void 0)Q.delete(q),O.dispose()}function G(N){let q=N.target;q.removeEventListener("dispose",G);let O=$.get(q);if(O!==void 0)$.delete(q),O.dispose()}function F(){if(Q=new WeakMap,$=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:K,dispose:F}}function Qq(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let K=J.getExtension(Z);return Q[Z]=K,K}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let K=$(Z);if(K===null)g7("WebGLRenderer: "+Z+" extension not supported.");return K}}}function $q(J,Q,$,Z){let K={},W=new WeakMap;function Y(F){let N=F.target;if(N.index!==null)Q.remove(N.index);for(let O in N.attributes)Q.remove(N.attributes[O]);N.removeEventListener("dispose",Y),delete K[N.id];let q=W.get(N);if(q)Q.remove(q),W.delete(N);if(Z.releaseStatesOfGeometry(N),N.isInstancedBufferGeometry===!0)delete N._maxInstanceCount;$.memory.geometries--}function X(F,N){if(K[N.id]===!0)return N;return N.addEventListener("dispose",Y),K[N.id]=!0,$.memory.geometries++,N}function H(F){let N=F.attributes;for(let q in N)Q.update(N[q],J.ARRAY_BUFFER)}function U(F){let N=[],q=F.index,O=F.attributes.position,D=0;if(O===void 0)return;if(q!==null){let M=q.array;D=q.version;for(let k=0,V=M.length;k<V;k+=3){let L=M[k+0],P=M[k+1],T=M[k+2];N.push(L,P,P,T,T,L)}}else{let M=O.array;D=O.version;for(let k=0,V=M.length/3-1;k<V;k+=3){let L=k+0,P=k+1,T=k+2;N.push(L,P,P,T,T,L)}}let R=new(O.count>=65535?lZ:mZ)(N,1);R.version=D;let E=W.get(F);if(E)Q.remove(E);W.set(F,R)}function G(F){let N=W.get(F);if(N){let q=F.index;if(q!==null){if(N.version<q.version)U(F)}}else U(F);return W.get(F)}return{get:X,update:H,getWireframeAttribute:G}}function Zq(J,Q,$){let Z;function K(F){Z=F}let W,Y;function X(F){W=F.type,Y=F.bytesPerElement}function H(F,N){J.drawElements(Z,N,W,F*Y),$.update(N,Z,1)}function U(F,N,q){if(q===0)return;J.drawElementsInstanced(Z,N,W,F*Y,q),$.update(N,Z,q)}function G(F,N,q){if(q===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,N,0,W,F,0,q);let D=0;for(let R=0;R<q;R++)D+=N[R];$.update(D,Z,1)}this.setMode=K,this.setIndex=X,this.render=H,this.renderInstances=U,this.renderMultiDraw=G}function Kq(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(W,Y,X){switch($.calls++,Y){case J.TRIANGLES:$.triangles+=X*(W/3);break;case J.LINES:$.lines+=X*(W/2);break;case J.LINE_STRIP:$.lines+=X*(W-1);break;case J.LINE_LOOP:$.lines+=X*W;break;case J.POINTS:$.points+=X*W;break;default:$J("WebGLInfo: Unknown draw mode:",Y);break}}function K(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:K,update:Z}}function Wq(J,Q,$){let Z=new WeakMap,K=new mJ;function W(Y,X,H){let U=Y.morphTargetInfluences,G=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,F=G!==void 0?G.length:0,N=Z.get(X);if(N===void 0||N.count!==F){let z=function(){T.dispose(),Z.delete(X),X.removeEventListener("dispose",z)};if(N!==void 0)N.texture.dispose();let q=X.morphAttributes.position!==void 0,O=X.morphAttributes.normal!==void 0,D=X.morphAttributes.color!==void 0,R=X.morphAttributes.position||[],E=X.morphAttributes.normal||[],M=X.morphAttributes.color||[],k=0;if(q===!0)k=1;if(O===!0)k=2;if(D===!0)k=3;let V=X.attributes.position.count*k,L=1;if(V>Q.maxTextureSize)L=Math.ceil(V/Q.maxTextureSize),V=Q.maxTextureSize;let P=new Float32Array(V*L*4*F),T=new gZ(P,V,L,F);T.type=t9,T.needsUpdate=!0;let B=k*4;for(let d=0;d<F;d++){let b=R[d],n=E[d],Z0=M[d],v=V*L*4*d;for(let y=0;y<b.count;y++){let u=y*B;if(q===!0)K.fromBufferAttribute(b,y),P[v+u+0]=K.x,P[v+u+1]=K.y,P[v+u+2]=K.z,P[v+u+3]=0;if(O===!0)K.fromBufferAttribute(n,y),P[v+u+4]=K.x,P[v+u+5]=K.y,P[v+u+6]=K.z,P[v+u+7]=0;if(D===!0)K.fromBufferAttribute(Z0,y),P[v+u+8]=K.x,P[v+u+9]=K.y,P[v+u+10]=K.z,P[v+u+11]=Z0.itemSize===4?K.w:1}}N={count:F,texture:T,size:new q0(V,L)},Z.set(X,N),X.addEventListener("dispose",z)}if(Y.isInstancedMesh===!0&&Y.morphTexture!==null)H.getUniforms().setValue(J,"morphTexture",Y.morphTexture,$);else{let q=0;for(let D=0;D<U.length;D++)q+=U[D];let O=X.morphTargetsRelative?1:1-q;H.getUniforms().setValue(J,"morphTargetBaseInfluence",O),H.getUniforms().setValue(J,"morphTargetInfluences",U)}H.getUniforms().setValue(J,"morphTargetsTexture",N.texture,$),H.getUniforms().setValue(J,"morphTargetsTextureSize",N.size)}return{update:W}}function Yq(J,Q,$,Z,K){let W=new WeakMap;function Y(U){let G=K.render.frame,F=U.geometry,N=Q.get(U,F);if(W.get(N)!==G)Q.update(N),W.set(N,G);if(U.isInstancedMesh){if(U.hasEventListener("dispose",H)===!1)U.addEventListener("dispose",H);if(W.get(U)!==G){if($.update(U.instanceMatrix,J.ARRAY_BUFFER),U.instanceColor!==null)$.update(U.instanceColor,J.ARRAY_BUFFER);W.set(U,G)}}if(U.isSkinnedMesh){let q=U.skeleton;if(W.get(q)!==G)q.update(),W.set(q,G)}return N}function X(){W=new WeakMap}function H(U){let G=U.target;if(G.removeEventListener("dispose",H),Z.releaseStatesOfObject(G),$.remove(G.instanceMatrix),G.instanceColor!==null)$.remove(G.instanceColor)}return{update:Y,dispose:X}}var Xq={[iQ]:"LINEAR_TONE_MAPPING",[oQ]:"REINHARD_TONE_MAPPING",[aQ]:"CINEON_TONE_MAPPING",[u7]:"ACES_FILMIC_TONE_MAPPING",[tQ]:"AGX_TONE_MAPPING",[eQ]:"NEUTRAL_TONE_MAPPING",[rQ]:"CUSTOM_TONE_MAPPING"};function Hq(J,Q,$,Z,K,W){let Y=new Z8(Q,$,{type:J,depthBuffer:K,stencilBuffer:W,samples:Z?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),X=null,H=null,U=new vJ;U.setAttribute("position",new YJ([-1,3,0,-1,-1,0,3,-1,0],3)),U.setAttribute("uv",new YJ([0,2,0,0,2,0],2));let G=new F$({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),F=new C0(U,G),N=new W7(-1,1,1,-1,0,1),q=null,O=null,D=!1,R,E=null,M=[],k=!1;this.setSize=function(V,L){if(Y.setSize(V,L),X!==null)X.setSize(V,L);if(H!==null)H.setSize(V,L);for(let P=0;P<M.length;P++){let T=M[P];if(T.setSize)T.setSize(V,L)}},this.setEffects=function(V){M=V,k=M.length>0&&M[0].isRenderPass===!0;let{width:L,height:P}=Y;if(M.length>0&&X===null)X=new Z8(L,P,{type:R8,depthBuffer:!1,stencilBuffer:!1}),H=new Z8(L,P,{type:R8,depthBuffer:!1,stencilBuffer:!1});for(let T=0;T<M.length;T++){let B=M[T];if(B.setSize)B.setSize(L,P)}},this.begin=function(V,L){if(D)return!1;if(V.toneMapping===V9&&M.length===0)return!1;if(E=L,L!==null){let{width:P,height:T}=L;if(Y.width!==P||Y.height!==T)this.setSize(P,T)}if(k===!1)V.setRenderTarget(Y);return R=V.toneMapping,V.toneMapping=V9,!0},this.hasRenderPass=function(){return k},this.end=function(V,L){V.toneMapping=R,D=!0;let P=Y,T=X;for(let B=0;B<M.length;B++){let z=M[B];if(z.enabled===!1)continue;if(z.render(V,T,P,L),z.needsSwap!==!1)P=T,T=T===X?H:X}if(q!==V.outputColorSpace||O!==V.toneMapping){if(q=V.outputColorSpace,O=V.toneMapping,G.defines={},qJ.getTransfer(q)===lJ)G.defines.SRGB_TRANSFER="";let B=Xq[O];if(B)G.defines[B]="";G.needsUpdate=!0}G.uniforms.tDiffuse.value=P.texture,V.setRenderTarget(E),V.render(F,N),E=null,D=!1},this.isCompositing=function(){return D},this.dispose=function(){if(Y.dispose(),X!==null)X.dispose();if(H!==null)H.dispose();U.dispose(),G.dispose()}}var Y5=new Q8,mY=new Q6(1,1),X5=new gZ,H5=new GY,U5=new nZ,mU=[],lU=[],uU=new Float32Array(16),dU=new Float32Array(9),cU=new Float32Array(4);function UQ(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let K=Q*$,W=mU[K];if(W===void 0)W=new Float32Array(K),mU[K]=W;if(Q!==0){Z.toArray(W,0);for(let Y=1,X=0;Y!==Q;++Y)X+=$,J[Y].toArray(W,X)}return W}function F8(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function E8(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function GK(J,Q){let $=lU[Q];if($===void 0)$=new Int32Array(Q),lU[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function Uq(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function Nq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(F8($,Q))return;J.uniform2fv(this.addr,Q),E8($,Q)}}function Gq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(F8($,Q))return;J.uniform3fv(this.addr,Q),E8($,Q)}}function Fq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(F8($,Q))return;J.uniform4fv(this.addr,Q),E8($,Q)}}function Eq(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(F8($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),E8($,Q)}else{if(F8($,Z))return;cU.set(Z),J.uniformMatrix2fv(this.addr,!1,cU),E8($,Z)}}function qq(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(F8($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),E8($,Q)}else{if(F8($,Z))return;dU.set(Z),J.uniformMatrix3fv(this.addr,!1,dU),E8($,Z)}}function Oq(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(F8($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),E8($,Q)}else{if(F8($,Z))return;uU.set(Z),J.uniformMatrix4fv(this.addr,!1,uU),E8($,Z)}}function Rq(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function Lq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(F8($,Q))return;J.uniform2iv(this.addr,Q),E8($,Q)}}function Vq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(F8($,Q))return;J.uniform3iv(this.addr,Q),E8($,Q)}}function Dq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(F8($,Q))return;J.uniform4iv(this.addr,Q),E8($,Q)}}function Bq(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function Mq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(F8($,Q))return;J.uniform2uiv(this.addr,Q),E8($,Q)}}function kq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(F8($,Q))return;J.uniform3uiv(this.addr,Q),E8($,Q)}}function Cq(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(F8($,Q))return;J.uniform4uiv(this.addr,Q),E8($,Q)}}function Pq(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;let W;if(this.type===J.SAMPLER_2D_SHADOW)mY.compareFunction=$.isReversedDepthBuffer()?xZ:hZ,W=mY;else W=Y5;$.setTexture2D(Q||W,K)}function Iq(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture3D(Q||H5,K)}function zq(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTextureCube(Q||U5,K)}function Aq(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture2DArray(Q||X5,K)}function Tq(J){switch(J){case 5126:return Uq;case 35664:return Nq;case 35665:return Gq;case 35666:return Fq;case 35674:return Eq;case 35675:return qq;case 35676:return Oq;case 5124:case 35670:return Rq;case 35667:case 35671:return Lq;case 35668:case 35672:return Vq;case 35669:case 35673:return Dq;case 5125:return Bq;case 36294:return Mq;case 36295:return kq;case 36296:return Cq;case 35678:case 36198:case 36298:case 36306:case 35682:return Pq;case 35679:case 36299:case 36307:return Iq;case 35680:case 36300:case 36308:case 36293:return zq;case 36289:case 36303:case 36311:case 36292:return Aq}}function _q(J,Q){J.uniform1fv(this.addr,Q)}function wq(J,Q){let $=UQ(Q,this.size,2);J.uniform2fv(this.addr,$)}function Sq(J,Q){let $=UQ(Q,this.size,3);J.uniform3fv(this.addr,$)}function jq(J,Q){let $=UQ(Q,this.size,4);J.uniform4fv(this.addr,$)}function yq(J,Q){let $=UQ(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function vq(J,Q){let $=UQ(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function fq(J,Q){let $=UQ(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function bq(J,Q){J.uniform1iv(this.addr,Q)}function hq(J,Q){J.uniform2iv(this.addr,Q)}function xq(J,Q){J.uniform3iv(this.addr,Q)}function gq(J,Q){J.uniform4iv(this.addr,Q)}function pq(J,Q){J.uniform1uiv(this.addr,Q)}function mq(J,Q){J.uniform2uiv(this.addr,Q)}function lq(J,Q){J.uniform3uiv(this.addr,Q)}function uq(J,Q){J.uniform4uiv(this.addr,Q)}function dq(J,Q,$){let Z=this.cache,K=Q.length,W=GK($,K);if(!F8(Z,W))J.uniform1iv(this.addr,W),E8(Z,W);let Y;if(this.type===J.SAMPLER_2D_SHADOW)Y=mY;else Y=Y5;for(let X=0;X!==K;++X)$.setTexture2D(Q[X]||Y,W[X])}function cq(J,Q,$){let Z=this.cache,K=Q.length,W=GK($,K);if(!F8(Z,W))J.uniform1iv(this.addr,W),E8(Z,W);for(let Y=0;Y!==K;++Y)$.setTexture3D(Q[Y]||H5,W[Y])}function nq(J,Q,$){let Z=this.cache,K=Q.length,W=GK($,K);if(!F8(Z,W))J.uniform1iv(this.addr,W),E8(Z,W);for(let Y=0;Y!==K;++Y)$.setTextureCube(Q[Y]||U5,W[Y])}function sq(J,Q,$){let Z=this.cache,K=Q.length,W=GK($,K);if(!F8(Z,W))J.uniform1iv(this.addr,W),E8(Z,W);for(let Y=0;Y!==K;++Y)$.setTexture2DArray(Q[Y]||X5,W[Y])}function iq(J){switch(J){case 5126:return _q;case 35664:return wq;case 35665:return Sq;case 35666:return jq;case 35674:return yq;case 35675:return vq;case 35676:return fq;case 5124:case 35670:return bq;case 35667:case 35671:return hq;case 35668:case 35672:return xq;case 35669:case 35673:return gq;case 5125:return pq;case 36294:return mq;case 36295:return lq;case 36296:return uq;case 35678:case 36198:case 36298:case 36306:case 35682:return dq;case 35679:case 36299:case 36307:return cq;case 35680:case 36300:case 36308:case 36293:return nq;case 36289:case 36303:case 36311:case 36292:return sq}}class N5{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=Tq(Q.type)}}class G5{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=iq(Q.type)}}class F5{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let K=0,W=Z.length;K!==W;++K){let Y=Z[K];Y.setValue(J,Q[Y.id],$)}}}var gY=/(\w+)(\])?(\[|\.)?/g;function nU(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function oq(J,Q,$){let Z=J.name,K=Z.length;gY.lastIndex=0;while(!0){let W=gY.exec(Z),Y=gY.lastIndex,X=W[1],H=W[2]==="]",U=W[3];if(H)X=X|0;if(U===void 0||U==="["&&Y+2===K){nU($,U===void 0?new N5(X,J,Q):new G5(X,J,Q));break}else{let F=$.map[X];if(F===void 0)F=new F5(X),nU($,F);$=F}}}class B${constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let W=0;W<$;++W){let Y=J.getActiveUniform(Q,W),X=J.getUniformLocation(Q,Y.name);oq(Y,X,this)}let Z=[],K=[];for(let W of this.seq)if(W.type===J.SAMPLER_2D_SHADOW||W.type===J.SAMPLER_CUBE_SHADOW||W.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(W);else K.push(W);if(Z.length>0)this.seq=Z.concat(K)}setValue(J,Q,$,Z){let K=this.map[Q];if(K!==void 0)K.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let K=0,W=Q.length;K!==W;++K){let Y=Q[K],X=$[Y.id];if(X.needsUpdate!==!1)Y.setValue(J,X.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,K=J.length;Z!==K;++Z){let W=J[Z];if(W.id in Q)$.push(W)}return $}}function sU(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var aq=37297,rq=0;function tq(J,Q){let $=J.split(`
`),Z=[],K=Math.max(Q-6,0),W=Math.min(Q+6,$.length);for(let Y=K;Y<W;Y++){let X=Y+1;Z.push(`${X===Q?">":" "} ${X}: ${$[Y]}`)}return Z.join(`
`)}var iU=new XJ;function eq(J){qJ._getMatrix(iU,qJ.workingColorSpace,J);let Q=`mat3( ${iU.elements.map(($)=>$.toFixed(4))} )`;switch(qJ.getTransfer(J)){case WY:return[Q,"LinearTransferOETF"];case lJ:return[Q,"sRGBTransferOETF"];default:return r0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function oU(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),W=(J.getShaderInfoLog(Q)||"").trim();if(Z&&W==="")return"";let Y=/ERROR: 0:(\d+)/.exec(W);if(Y){let X=parseInt(Y[1]);return $.toUpperCase()+`

`+W+`

`+tq(J.getShaderSource(Q),X)}else return W}function JO(J,Q){let $=eq(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var QO={[iQ]:"Linear",[oQ]:"Reinhard",[aQ]:"Cineon",[u7]:"ACESFilmic",[tQ]:"AgX",[eQ]:"Neutral",[rQ]:"Custom"};function $O(J,Q){let $=QO[Q];if($===void 0)return r0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var UK=new _;function ZO(){qJ.getLuminanceCoefficients(UK);let J=UK.x.toFixed(4),Q=UK.y.toFixed(4),$=UK.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function KO(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(D$).join(`
`)}function WO(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function YO(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let K=0;K<Z;K++){let W=J.getActiveAttrib(Q,K),Y=W.name,X=1;if(W.type===J.FLOAT_MAT2)X=2;if(W.type===J.FLOAT_MAT3)X=3;if(W.type===J.FLOAT_MAT4)X=4;$[Y]={type:W.type,location:J.getAttribLocation(Q,Y),locationSize:X}}return $}function D$(J){return J!==""}function aU(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_SUN_LIGHTS/g,Q.numSunLights).replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,Q.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function rU(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var XO=/^[ \t]*#include +<([\w\d./]+)>/gm;function lY(J){return J.replace(XO,UO)}var HO=new Map;function UO(J,Q){let $=LJ[Q];if($===void 0){let Z=HO.get(Q);if(Z!==void 0)$=LJ[Z],r0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("THREE.WebGLProgram: Can not resolve #include <"+Q+">")}return lY($)}var NO=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tU(J){return J.replace(NO,GO)}function GO(J,Q,$,Z){let K="";for(let W=parseInt(Q);W<parseInt($);W++)K+=Z.replace(/\[\s*i\s*\]/g,"[ "+W+" ]").replace(/UNROLLED_LOOP_INDEX/g,W);return K}function eU(J){let Q=`precision ${J.precision} float;
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
#define LOW_PRECISION`;return Q}var FO={[l7]:"SHADOWMAP_TYPE_PCF",[n6]:"SHADOWMAP_TYPE_VSM"};function EO(J){return FO[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var qO={[i6]:"ENVMAP_TYPE_CUBE",[d7]:"ENVMAP_TYPE_CUBE",[J$]:"ENVMAP_TYPE_CUBE_UV"};function OO(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return qO[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var RO={[d7]:"ENVMAP_MODE_REFRACTION"};function LO(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return RO[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var VO={[$U]:"ENVMAP_BLENDING_MULTIPLY",[ZU]:"ENVMAP_BLENDING_MIX",[KU]:"ENVMAP_BLENDING_ADD"};function DO(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return VO[J.combine]||"ENVMAP_BLENDING_NONE"}function BO(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function MO(J,Q,$,Z){let K=J.getContext(),W=$.defines,Y=$.vertexShader,X=$.fragmentShader,H=EO($),U=OO($),G=LO($),F=DO($),N=BO($),q=KO($),O=WO(W),D=K.createProgram(),R,E,M=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(R=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O].filter(D$).join(`
`),R.length>0)R+=`
`;if(E=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O].filter(D$).join(`
`),E.length>0)E+=`
`}else R=[eU($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+G:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexNormals?"#define HAS_NORMAL":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+H:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(D$).join(`
`),E=[eU($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,O,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+U:"",$.envMap?"#define "+G:"",$.envMap?"#define "+F:"",N?"#define CUBEUV_TEXEL_WIDTH "+N.texelWidth:"",N?"#define CUBEUV_TEXEL_HEIGHT "+N.texelHeight:"",N?"#define CUBEUV_MAX_MIP "+N.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.retroreflection?"#define USE_RETROREFLECTION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+H:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==V9?"#define TONE_MAPPING":"",$.toneMapping!==V9?LJ.tonemapping_pars_fragment:"",$.toneMapping!==V9?$O("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",LJ.colorspace_pars_fragment,JO("linearToOutputTexel",$.outputColorSpace),ZO(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(D$).join(`
`);if(Y=lY(Y),Y=aU(Y,$),Y=rU(Y,$),X=lY(X),X=aU(X,$),X=rU(X,$),Y=tU(Y),X=tU(X),$.isRawShaderMaterial!==!0)M=`#version 300 es
`,R=[q,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,E=["#define varying in",$.glslVersion===YY?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===YY?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E;let k=M+R+Y,V=M+E+X,L=sU(K,K.VERTEX_SHADER,k),P=sU(K,K.FRAGMENT_SHADER,V);if(K.attachShader(D,L),K.attachShader(D,P),$.index0AttributeName!==void 0)K.bindAttribLocation(D,0,$.index0AttributeName);else if($.hasPositionAttribute===!0)K.bindAttribLocation(D,0,"position");K.linkProgram(D);function T(b){if(J.debug.checkShaderErrors){let n=K.getProgramInfoLog(D)||"",Z0=K.getShaderInfoLog(L)||"",v=K.getShaderInfoLog(P)||"",y=n.trim(),u=Z0.trim(),I=v.trim(),x=!0,h=!0;if(K.getProgramParameter(D,K.LINK_STATUS)===!1)if(x=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(K,D,L,P);else{let f=oU(K,L,"vertex"),g=oU(K,P,"fragment");$J("WebGLProgram: Shader Error "+K.getError()+" - VALIDATE_STATUS "+K.getProgramParameter(D,K.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+y+`
`+f+`
`+g)}else if(y!=="")r0("WebGLProgram: Program Info Log:",y);else if(u===""||I==="")h=!1;if(h)b.diagnostics={runnable:x,programLog:y,vertexShader:{log:u,prefix:R},fragmentShader:{log:I,prefix:E}}}K.deleteShader(L),K.deleteShader(P),B=new B$(K,D),z=YO(K,D)}let B;this.getUniforms=function(){if(B===void 0)T(this);return B};let z;this.getAttributes=function(){if(z===void 0)T(this);return z};let d=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(d===!1)d=K.getProgramParameter(D,aq);return d},this.destroy=function(){Z.releaseStatesOfProgram(this),K.deleteProgram(D),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=rq++,this.cacheKey=Q,this.usedTimes=1,this.program=D,this.vertexShader=L,this.fragmentShader=P,this}var kO=0;class E5{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J,Q,$){let Z=this._getShaderCacheForMaterial(J);if(Z.has(Q)===!1)Z.add(Q),Q.usedTimes++;if(Z.has($)===!1)Z.add($),$.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderStage(J){return this._getShaderStage(J.vertexShader)}getFragmentShaderStage(J){return this._getShaderStage(J.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new q5(J),Q.set(J,$);return $}}class q5{constructor(J){this.id=kO++,this.code=J,this.usedTimes=0}}function CO(J){return J===i7||J===vZ||J===fZ}function PO(J,Q,$,Z,K,W){let Y=new pZ,X=new E5,H=new Set,U=[],G=new Map,F=Z.logarithmicDepthBuffer,N=Z.precision,q={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function O(B){if(H.add(B),B===0)return"uv";return`uv${B}`}function D(B,z,d,b,n,Z0){let v=b.fog,y=n.geometry,u=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?b.environment:null,I=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,x=Q.get(B.envMap||u,I),h=!!x&&x.mapping===J$?x.image.height:null,f=q[B.type];if(B.precision!==null){if(N=Z.getMaxPrecision(B.precision),N!==B.precision)r0("WebGLProgram.getParameters:",B.precision,"not supported, using",N,"instead.")}let g=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,Y0=g!==void 0?g.length:0,G0=0;if(y.morphAttributes.position!==void 0)G0=1;if(y.morphAttributes.normal!==void 0)G0=2;if(y.morphAttributes.color!==void 0)G0=3;let M0,S0,$0,j;if(f){let dJ=h9[f];M0=dJ.vertexShader,S0=dJ.fragmentShader}else{M0=B.vertexShader,S0=B.fragmentShader;let dJ=X.getVertexShaderStage(B),SJ=X.getFragmentShaderStage(B);X.update(B,dJ,SJ),$0=dJ.id,j=SJ.id}let p=J.getRenderTarget(),o=J.state.buffers.depth.getReversed(),K0=n.isInstancedMesh===!0,r=n.isBatchedMesh===!0,O0=!!B.map,F0=!!B.matcap,X0=!!x,_0=!!B.aoMap,c0=!!B.lightMap,EJ=!!B.bumpMap&&B.wireframe===!1,g0=!!B.normalMap,PJ=!!B.displacementMap,_J=!!B.emissiveMap,gJ=!!B.metalnessMap,l=!!B.roughnessMap,nJ=B.anisotropy>0,NJ=B.clearcoat>0,VJ=B.dispersion>0,S=B.retroreflectivity>0,C=B.iridescence>0,m=B.sheen>0,J0=B.transmission>0,V0=nJ&&!!B.anisotropyMap,z0=NJ&&!!B.clearcoatMap,y0=NJ&&!!B.clearcoatNormalMap,H0=NJ&&!!B.clearcoatRoughnessMap,E0=C&&!!B.iridescenceMap,I0=C&&!!B.iridescenceThicknessMap,s0=m&&!!B.sheenColorMap,A0=m&&!!B.sheenRoughnessMap,k0=!!B.specularMap,e0=!!B.specularColorMap,t0=!!B.specularIntensityMap,IJ=J0&&!!B.transmissionMap,s=J0&&!!B.thicknessMap,v0=!!B.gradientMap,U0=!!B.alphaMap,w0=B.alphaTest>0,m0=!!B.alphaHash,D0=!!B.extensions,f0=V9;if(B.toneMapped){if(p===null||p.isXRRenderTarget===!0)f0=J.toneMapping}let WJ={shaderID:f,shaderType:B.type,shaderName:B.name,vertexShader:M0,fragmentShader:S0,defines:B.defines,customVertexShaderID:$0,customFragmentShaderID:j,isRawShaderMaterial:B.isRawShaderMaterial===!0,glslVersion:B.glslVersion,precision:N,batching:r,batchingColor:r&&n._colorsTexture!==null,instancing:K0,instancingColor:K0&&n.instanceColor!==null,instancingMorph:K0&&n.morphTexture!==null,outputColorSpace:p===null?J.outputColorSpace:p.isXRRenderTarget===!0?p.texture.colorSpace:qJ.workingColorSpace,alphaToCoverage:!!B.alphaToCoverage,map:O0,matcap:F0,envMap:X0,envMapMode:X0&&x.mapping,envMapCubeUVHeight:h,aoMap:_0,lightMap:c0,bumpMap:EJ,normalMap:g0,displacementMap:PJ,emissiveMap:_J,normalMapObjectSpace:g0&&B.normalMapType===FU,normalMapTangentSpace:g0&&B.normalMapType===KY,packedNormalMap:g0&&B.normalMapType===KY&&CO(B.normalMap.format),metalnessMap:gJ,roughnessMap:l,anisotropy:nJ,anisotropyMap:V0,clearcoat:NJ,clearcoatMap:z0,clearcoatNormalMap:y0,clearcoatRoughnessMap:H0,dispersion:VJ,retroreflection:S,iridescence:C,iridescenceMap:E0,iridescenceThicknessMap:I0,sheen:m,sheenColorMap:s0,sheenRoughnessMap:A0,specularMap:k0,specularColorMap:e0,specularIntensityMap:t0,transmission:J0,transmissionMap:IJ,thicknessMap:s,gradientMap:v0,opaque:B.transparent===!1&&B.blending===sQ&&B.alphaToCoverage===!1,alphaMap:U0,alphaTest:w0,alphaHash:m0,combine:B.combine,mapUv:O0&&O(B.map.channel),aoMapUv:_0&&O(B.aoMap.channel),lightMapUv:c0&&O(B.lightMap.channel),bumpMapUv:EJ&&O(B.bumpMap.channel),normalMapUv:g0&&O(B.normalMap.channel),displacementMapUv:PJ&&O(B.displacementMap.channel),emissiveMapUv:_J&&O(B.emissiveMap.channel),metalnessMapUv:gJ&&O(B.metalnessMap.channel),roughnessMapUv:l&&O(B.roughnessMap.channel),anisotropyMapUv:V0&&O(B.anisotropyMap.channel),clearcoatMapUv:z0&&O(B.clearcoatMap.channel),clearcoatNormalMapUv:y0&&O(B.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H0&&O(B.clearcoatRoughnessMap.channel),iridescenceMapUv:E0&&O(B.iridescenceMap.channel),iridescenceThicknessMapUv:I0&&O(B.iridescenceThicknessMap.channel),sheenColorMapUv:s0&&O(B.sheenColorMap.channel),sheenRoughnessMapUv:A0&&O(B.sheenRoughnessMap.channel),specularMapUv:k0&&O(B.specularMap.channel),specularColorMapUv:e0&&O(B.specularColorMap.channel),specularIntensityMapUv:t0&&O(B.specularIntensityMap.channel),transmissionMapUv:IJ&&O(B.transmissionMap.channel),thicknessMapUv:s&&O(B.thicknessMap.channel),alphaMapUv:U0&&O(B.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(g0||nJ),vertexNormals:!!y.attributes.normal,vertexColors:B.vertexColors,vertexAlphas:B.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:n.isPoints===!0&&!!y.attributes.uv&&(O0||U0),fog:!!v,useFog:B.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:B.wireframe===!1&&(B.flatShading===!0||y.attributes.normal===void 0&&g0===!1&&(B.isMeshLambertMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isMeshPhysicalMaterial)),sizeAttenuation:B.sizeAttenuation===!0,logarithmicDepthBuffer:F,reversedDepthBuffer:o,skinning:n.isSkinnedMesh===!0,hasPositionAttribute:y.attributes.position!==void 0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:Y0,morphTextureStride:G0,numSunLights:z.sun.length,numDirLights:z.directional.length,numPointLights:z.point.length,numSpotLights:z.spot.length,numSpotLightMaps:z.spotLightMap.length,numRectAreaLights:z.rectArea.length,numHemiLights:z.hemi.length,numSunLightShadows:z.sunShadowMap.length,numDirLightShadows:z.directionalShadowMap.length,numPointLightShadows:z.pointShadowMap.length,numSpotLightShadows:z.spotShadowMap.length,numSpotLightShadowsWithMaps:z.numSpotLightShadowsWithMaps,numLightProbes:z.numLightProbes,numLightProbeGrids:Z0.length,numClippingPlanes:W.numPlanes,numClipIntersection:W.numIntersection,dithering:B.dithering,shadowMapEnabled:J.shadowMap.enabled&&d.length>0,shadowMapType:J.shadowMap.type,toneMapping:f0,decodeVideoTexture:O0&&B.map.isVideoTexture===!0&&qJ.getTransfer(B.map.colorSpace)===lJ,decodeVideoTextureEmissive:_J&&B.emissiveMap.isVideoTexture===!0&&qJ.getTransfer(B.emissiveMap.colorSpace)===lJ,premultipliedAlpha:B.premultipliedAlpha,doubleSided:B.side===oJ,flipSided:B.side===D8,useDepthPacking:B.depthPacking>=0,depthPacking:B.depthPacking||0,index0AttributeName:B.index0AttributeName,extensionClipCullDistance:D0&&B.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(D0&&B.extensions.multiDraw===!0||r)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:B.customProgramCacheKey()};return WJ.vertexUv1s=H.has(1),WJ.vertexUv2s=H.has(2),WJ.vertexUv3s=H.has(3),H.clear(),WJ}function R(B){let z=[];if(B.shaderID)z.push(B.shaderID);else z.push(B.customVertexShaderID),z.push(B.customFragmentShaderID);if(B.defines!==void 0)for(let d in B.defines)z.push(d),z.push(B.defines[d]);if(B.isRawShaderMaterial===!1)E(z,B),M(z,B),z.push(J.outputColorSpace);return z.push(B.customProgramCacheKey),z.join()}function E(B,z){B.push(z.precision),B.push(z.outputColorSpace),B.push(z.envMapMode),B.push(z.envMapCubeUVHeight),B.push(z.mapUv),B.push(z.alphaMapUv),B.push(z.lightMapUv),B.push(z.aoMapUv),B.push(z.bumpMapUv),B.push(z.normalMapUv),B.push(z.displacementMapUv),B.push(z.emissiveMapUv),B.push(z.metalnessMapUv),B.push(z.roughnessMapUv),B.push(z.anisotropyMapUv),B.push(z.clearcoatMapUv),B.push(z.clearcoatNormalMapUv),B.push(z.clearcoatRoughnessMapUv),B.push(z.iridescenceMapUv),B.push(z.iridescenceThicknessMapUv),B.push(z.sheenColorMapUv),B.push(z.sheenRoughnessMapUv),B.push(z.specularMapUv),B.push(z.specularColorMapUv),B.push(z.specularIntensityMapUv),B.push(z.transmissionMapUv),B.push(z.thicknessMapUv),B.push(z.combine),B.push(z.fogExp2),B.push(z.sizeAttenuation),B.push(z.morphTargetsCount),B.push(z.morphAttributeCount),B.push(z.numSunLights),B.push(z.numDirLights),B.push(z.numPointLights),B.push(z.numSpotLights),B.push(z.numSpotLightMaps),B.push(z.numHemiLights),B.push(z.numRectAreaLights),B.push(z.numSunLightShadows),B.push(z.numDirLightShadows),B.push(z.numPointLightShadows),B.push(z.numSpotLightShadows),B.push(z.numSpotLightShadowsWithMaps),B.push(z.numLightProbes),B.push(z.shadowMapType),B.push(z.toneMapping),B.push(z.numClippingPlanes),B.push(z.numClipIntersection),B.push(z.depthPacking)}function M(B,z){if(Y.disableAll(),z.instancing)Y.enable(0);if(z.instancingColor)Y.enable(1);if(z.instancingMorph)Y.enable(2);if(z.matcap)Y.enable(3);if(z.envMap)Y.enable(4);if(z.normalMapObjectSpace)Y.enable(5);if(z.normalMapTangentSpace)Y.enable(6);if(z.clearcoat)Y.enable(7);if(z.iridescence)Y.enable(8);if(z.alphaTest)Y.enable(9);if(z.vertexColors)Y.enable(10);if(z.vertexAlphas)Y.enable(11);if(z.vertexUv1s)Y.enable(12);if(z.vertexUv2s)Y.enable(13);if(z.vertexUv3s)Y.enable(14);if(z.vertexTangents)Y.enable(15);if(z.anisotropy)Y.enable(16);if(z.alphaHash)Y.enable(17);if(z.batching)Y.enable(18);if(z.dispersion)Y.enable(19);if(z.retroreflection)Y.enable(24);if(z.batchingColor)Y.enable(20);if(z.gradientMap)Y.enable(21);if(z.packedNormalMap)Y.enable(22);if(z.vertexNormals)Y.enable(23);if(B.push(Y.mask),Y.disableAll(),z.fog)Y.enable(0);if(z.useFog)Y.enable(1);if(z.flatShading)Y.enable(2);if(z.logarithmicDepthBuffer)Y.enable(3);if(z.reversedDepthBuffer)Y.enable(4);if(z.skinning)Y.enable(5);if(z.morphTargets)Y.enable(6);if(z.morphNormals)Y.enable(7);if(z.morphColors)Y.enable(8);if(z.premultipliedAlpha)Y.enable(9);if(z.shadowMapEnabled)Y.enable(10);if(z.doubleSided)Y.enable(11);if(z.flipSided)Y.enable(12);if(z.useDepthPacking)Y.enable(13);if(z.dithering)Y.enable(14);if(z.transmission)Y.enable(15);if(z.sheen)Y.enable(16);if(z.opaque)Y.enable(17);if(z.pointsUvs)Y.enable(18);if(z.decodeVideoTexture)Y.enable(19);if(z.decodeVideoTextureEmissive)Y.enable(20);if(z.alphaToCoverage)Y.enable(21);if(z.numLightProbeGrids>0)Y.enable(22);if(z.hasPositionAttribute)Y.enable(23);B.push(Y.mask)}function k(B){let z=q[B.type],d;if(z){let b=h9[z];d=Q7.clone(b.uniforms)}else d=B.uniforms;return d}function V(B,z){let d=G.get(z);if(d!==void 0)++d.usedTimes;else d=new MO(J,z,B,K),U.push(d),G.set(z,d);return d}function L(B){if(--B.usedTimes===0){let z=U.indexOf(B);U[z]=U[U.length-1],U.pop(),G.delete(B.cacheKey),B.destroy()}}function P(B){X.remove(B)}function T(){X.dispose()}return{getParameters:D,getProgramCacheKey:R,getUniforms:k,acquireProgram:V,releaseProgram:L,releaseShaderCache:P,programs:U,dispose:T}}function IO(){let J=new WeakMap;function Q(Y){return J.has(Y)}function $(Y){let X=J.get(Y);if(X===void 0)X={},J.set(Y,X);return X}function Z(Y){J.delete(Y)}function K(Y,X,H){J.get(Y)[X]=H}function W(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:K,dispose:W}}function zO(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function J5(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function Q5(){let J=[],Q=0,$=[],Z=[],K=[];function W(){Q=0,$.length=0,Z.length=0,K.length=0}function Y(N){let q=0;if(N.isInstancedMesh)q+=2;if(N.isSkinnedMesh)q+=1;return q}function X(N,q,O,D,R,E){let M=J[Q];if(M===void 0)M={id:N.id,object:N,geometry:q,material:O,materialVariant:Y(N),groupOrder:D,renderOrder:N.renderOrder,z:R,group:E},J[Q]=M;else M.id=N.id,M.object=N,M.geometry=q,M.material=O,M.materialVariant=Y(N),M.groupOrder=D,M.renderOrder=N.renderOrder,M.z=R,M.group=E;return Q++,M}function H(N,q,O,D,R,E,M){if(M.reversedDepth===!0)R=-R;let k=X(N,q,O,D,R,E);if(O.transmission>0)Z.push(k);else if(O.transparent===!0)K.push(k);else $.push(k)}function U(N,q,O,D,R,E){let M=X(N,q,O,D,R,E);if(O.transmission>0)Z.unshift(M);else if(O.transparent===!0)K.unshift(M);else $.unshift(M)}function G(N,q){if($.length>1)$.sort(N||zO);if(Z.length>1)Z.sort(q||J5);if(K.length>1)K.sort(q||J5)}function F(){for(let N=Q,q=J.length;N<q;N++){let O=J[N];if(O.id===null)break;O.id=null,O.object=null,O.geometry=null,O.material=null,O.group=null}}return{opaque:$,transmissive:Z,transparent:K,init:W,push:H,unshift:U,finish:F,sort:G}}function AO(){let J=new WeakMap;function Q(Z,K){let W=J.get(Z),Y;if(W===void 0)Y=new Q5,J.set(Z,[Y]);else if(K>=W.length)Y=new Q5,W.push(Y);else Y=W[K];return Y}function $(){J=new WeakMap}return{get:Q,dispose:$}}function TO(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={direction:new _,color:new j0};break;case"SpotLight":$={position:new _,direction:new _,color:new j0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new _,color:new j0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new _,skyColor:new j0,groundColor:new j0};break;case"RectAreaLight":$={color:new j0,position:new _,halfWidth:new _,halfHeight:new _};break}return J[Q.id]=$,$}}}function _O(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"SunLight":case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new q0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var wO=0;function SO(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function jO(J){let Q=new TO,$=_O(),Z={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let U=0;U<9;U++)Z.probe.push(new _);let K=new _,W=new QJ,Y=new QJ;function X(U){let G=0,F=0,N=0;for(let n=0;n<9;n++)Z.probe[n].set(0,0,0);let q=0,O=0,D=0,R=0,E=0,M=0,k=0,V=0,L=0,P=0,T=0,B=0,z=0,d=0;U.sort(SO);for(let n=0,Z0=U.length;n<Z0;n++){let v=U[n],y=v.color,u=v.intensity,I=v.distance,x=null;if(v.shadow&&v.shadow.map)if(v.shadow.map.texture.format===i7)x=v.shadow.map.texture;else x=v.shadow.map.depthTexture||v.shadow.map.texture;if(v.isAmbientLight)G+=y.r*u,F+=y.g*u,N+=y.b*u;else if(v.isLightProbe){for(let h=0;h<9;h++)Z.probe[h].addScaledVector(v.sh.coefficients[h],u);d++}else if(v.isSunLight){let h=Q.get(v);if(h.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){let f=v.shadow,g=$.get(v);g.shadowIntensity=f.intensity,g.shadowBias=f.bias,g.shadowNormalBias=f.normalBias,g.shadowRadius=f.radius,g.shadowMapSize.copy(f.mapSize).multiply(f.getFrameExtents()),Z.sunShadow[O]=g,Z.sunShadowMap[O]=x;let Y0=f.getViewportCount();for(let G0=0;G0<Y0;G0++)Z.sunShadowMatrix[D+G0]=f.getMatrix(G0),Z.sunShadowCascade[D+G0]=f._cascadeData[G0];D+=Y0,O++}Z.sun[q]=h,q++}else if(v.isDirectionalLight){let h=Q.get(v);if(h.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){let f=v.shadow,g=$.get(v);g.shadowIntensity=f.intensity,g.shadowBias=f.bias,g.shadowNormalBias=f.normalBias,g.shadowRadius=f.radius,g.shadowMapSize=f.mapSize,Z.directionalShadow[R]=g,Z.directionalShadowMap[R]=x,Z.directionalShadowMatrix[R]=v.shadow.matrix,L++}Z.directional[R]=h,R++}else if(v.isSpotLight){let h=Q.get(v);h.position.setFromMatrixPosition(v.matrixWorld),h.color.copy(y).multiplyScalar(u),h.distance=I,h.coneCos=Math.cos(v.angle),h.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),h.decay=v.decay,Z.spot[M]=h;let f=v.shadow;if(v.map){if(Z.spotLightMap[B]=v.map,B++,f.updateMatrices(v),v.castShadow)z++}if(Z.spotLightMatrix[M]=f.matrix,v.castShadow){let g=$.get(v);g.shadowIntensity=f.intensity,g.shadowBias=f.bias,g.shadowNormalBias=f.normalBias,g.shadowRadius=f.radius,g.shadowMapSize=f.mapSize,Z.spotShadow[M]=g,Z.spotShadowMap[M]=x,T++}M++}else if(v.isRectAreaLight){let h=Q.get(v);h.color.copy(y).multiplyScalar(u),h.halfWidth.set(v.width*0.5,0,0),h.halfHeight.set(0,v.height*0.5,0),Z.rectArea[k]=h,k++}else if(v.isPointLight){let h=Q.get(v);if(h.color.copy(v.color).multiplyScalar(v.intensity),h.distance=v.distance,h.decay=v.decay,v.castShadow){let f=v.shadow,g=$.get(v);g.shadowIntensity=f.intensity,g.shadowBias=f.bias,g.shadowNormalBias=f.normalBias,g.shadowRadius=f.radius,g.shadowMapSize=f.mapSize,g.shadowCameraNear=f.camera.near,g.shadowCameraFar=f.camera.far,Z.pointShadow[E]=g,Z.pointShadowMap[E]=x,Z.pointShadowMatrix[E]=v.shadow.matrix,P++}Z.point[E]=h,E++}else if(v.isHemisphereLight){let h=Q.get(v);h.skyColor.copy(v.color).multiplyScalar(u),h.groundColor.copy(v.groundColor).multiplyScalar(u),Z.hemi[V]=h,V++}}if(k>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=p0.LTC_FLOAT_1,Z.rectAreaLTC2=p0.LTC_FLOAT_2;else Z.rectAreaLTC1=p0.LTC_HALF_1,Z.rectAreaLTC2=p0.LTC_HALF_2;Z.ambient[0]=G,Z.ambient[1]=F,Z.ambient[2]=N;let b=Z.hash;if(b.sunLength!==q||b.directionalLength!==R||b.pointLength!==E||b.spotLength!==M||b.rectAreaLength!==k||b.hemiLength!==V||b.numSunShadows!==O||b.numDirectionalShadows!==L||b.numPointShadows!==P||b.numSpotShadows!==T||b.numSpotMaps!==B||b.numLightProbes!==d)Z.sun.length=q,Z.directional.length=R,Z.spot.length=M,Z.rectArea.length=k,Z.point.length=E,Z.hemi.length=V,Z.sunShadow.length=O,Z.sunShadowMap.length=O,Z.sunShadowMatrix.length=D,Z.sunShadowCascade.length=D,Z.directionalShadow.length=L,Z.directionalShadowMap.length=L,Z.directionalShadowMatrix.length=L,Z.pointShadow.length=P,Z.pointShadowMap.length=P,Z.pointShadowMatrix.length=P,Z.spotShadow.length=T,Z.spotShadowMap.length=T,Z.spotLightMatrix.length=T+B-z,Z.spotLightMap.length=B,Z.numSpotLightShadowsWithMaps=z,Z.numLightProbes=d,b.sunLength=q,b.directionalLength=R,b.pointLength=E,b.spotLength=M,b.rectAreaLength=k,b.hemiLength=V,b.numSunShadows=O,b.numDirectionalShadows=L,b.numPointShadows=P,b.numSpotShadows=T,b.numSpotMaps=B,b.numLightProbes=d,Z.version=wO++}function H(U,G){let F=0,N=0,q=0,O=0,D=0,R=0,E=G.matrixWorldInverse;for(let M=0,k=U.length;M<k;M++){let V=U[M];if(V.isSunLight){let L=Z.sun[F];L.direction.setFromMatrixPosition(V.matrixWorld),L.direction.transformDirection(E),F++}else if(V.isDirectionalLight){let L=Z.directional[N];L.direction.setFromMatrixPosition(V.matrixWorld),K.setFromMatrixPosition(V.target.matrixWorld),L.direction.sub(K),L.direction.transformDirection(E),N++}else if(V.isSpotLight){let L=Z.spot[O];L.position.setFromMatrixPosition(V.matrixWorld),L.position.applyMatrix4(E),L.direction.setFromMatrixPosition(V.matrixWorld),K.setFromMatrixPosition(V.target.matrixWorld),L.direction.sub(K),L.direction.transformDirection(E),O++}else if(V.isRectAreaLight){let L=Z.rectArea[D];L.position.setFromMatrixPosition(V.matrixWorld),L.position.applyMatrix4(E),Y.identity(),W.copy(V.matrixWorld),W.premultiply(E),Y.extractRotation(W),L.halfWidth.set(V.width*0.5,0,0),L.halfHeight.set(0,V.height*0.5,0),L.halfWidth.applyMatrix4(Y),L.halfHeight.applyMatrix4(Y),D++}else if(V.isPointLight){let L=Z.point[q];L.position.setFromMatrixPosition(V.matrixWorld),L.position.applyMatrix4(E),q++}else if(V.isHemisphereLight){let L=Z.hemi[R];L.direction.setFromMatrixPosition(V.matrixWorld),L.direction.transformDirection(E),R++}}}return{setup:X,setupView:H,state:Z}}function $5(J){let Q=new jO(J),$=[],Z=[],K=[];function W(N){F.camera=N,$.length=0,Z.length=0,K.length=0}function Y(N){$.push(N)}function X(N){Z.push(N)}function H(N){K.push(N)}function U(){Q.setup($)}function G(N){Q.setupView($,N)}let F={lightsArray:$,shadowsArray:Z,lightProbeGridArray:K,camera:null,lights:Q,transmissionRenderTarget:{},textureUnits:0};return{init:W,state:F,setupLights:U,setupLightsView:G,pushLight:Y,pushShadow:X,pushLightProbeGrid:H}}function yO(J){let Q=new WeakMap;function $(K,W=0){let Y=Q.get(K),X;if(Y===void 0)X=new $5(J),Q.set(K,[X]);else if(W>=Y.length)X=new $5(J),Y.push(X);else X=Y[W];return X}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var vO=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fO=`uniform sampler2D shadow_pass;
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
}`,bO=[new _(1,0,0),new _(-1,0,0),new _(0,1,0),new _(0,-1,0),new _(0,0,1),new _(0,0,-1)],hO=[new _(0,-1,0),new _(0,-1,0),new _(0,0,1),new _(0,0,-1),new _(0,-1,0),new _(0,-1,0)],Z5=new QJ,V$=new _,pY=new _;function xO(J,Q,$){let Z=new e7,K=new q0,W=new q0,Y=new mJ,X=new DY,H=new BY,U={},G=$.maxTextureSize,F={[D7]:D8,[D8]:D7,[oJ]:oJ},N=new J8({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new q0},radius:{value:4}},vertexShader:vO,fragmentShader:fO}),q=N.clone();q.defines.HORIZONTAL_PASS=1;let O=new vJ;O.setAttribute("position",new tJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let D=new C0(O,N),R=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=l7;let E=this.type;this.render=function(P,T,B){if(R.enabled===!1)return;if(R.autoUpdate===!1&&R.needsUpdate===!1)return;if(P.length===0)return;if(this.type===TH)r0("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=l7;let z=J.getRenderTarget(),d=J.getActiveCubeFace(),b=J.getActiveMipmapLevel(),n=J.state;if(n.setBlending(Q9),n.buffers.depth.getReversed()===!0)n.buffers.color.setClear(0,0,0,0);else n.buffers.color.setClear(1,1,1,1);n.buffers.depth.setTest(!0),n.setScissorTest(!1);let Z0=E!==this.type;if(Z0)T.traverse(function(v){if(v.material)if(Array.isArray(v.material))v.material.forEach((y)=>y.needsUpdate=!0);else v.material.needsUpdate=!0});for(let v=0,y=P.length;v<y;v++){let u=P[v],I=u.shadow;if(I===void 0){r0("WebGLShadowMap:",u,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;K.copy(I.mapSize);let x=I.getFrameExtents();if(K.multiply(x),W.copy(I.mapSize),K.x>G||K.y>G){if(K.x>G)W.x=Math.floor(G/x.x),K.x=W.x*x.x,I.mapSize.x=W.x;if(K.y>G)W.y=Math.floor(G/x.y),K.y=W.y*x.y,I.mapSize.y=W.y}let h=J.state.buffers.depth.getReversed();if(I.camera._reversedDepth=h,I.map===null||Z0===!0){if(I.map!==null){if(I.map.depthTexture!==null)I.map.depthTexture.dispose(),I.map.depthTexture=null;I.map.dispose()}if(this.type===n6){if(u.isPointLight){r0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Z8(K.x,K.y,{format:i7,type:R8,minFilter:X8,magFilter:X8,generateMipmaps:!1}),I.map.texture.name=u.name+".shadowMap",I.map.depthTexture=new Q6(K.x,K.y,t9),I.map.depthTexture.name=u.name+".shadowMapDepth",I.map.depthTexture.format=n7,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=D9,I.map.depthTexture.magFilter=D9}else{if(u.isPointLight)I.map=new uY(K.x),I.map.depthTexture=new FY(K.x,M7);else I.map=new Z8(K.x,K.y),I.map.depthTexture=new Q6(K.x,K.y,M7);if(I.map.depthTexture.name=u.name+".shadowMap",I.map.depthTexture.format=n7,this.type===l7)I.map.depthTexture.compareFunction=h?xZ:hZ,I.map.depthTexture.minFilter=X8,I.map.depthTexture.magFilter=X8;else I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=D9,I.map.depthTexture.magFilter=D9}I.camera.updateProjectionMatrix()}if(I.map.isWebGLCubeRenderTarget!==!0&&(I.map.width!==K.x||I.map.height!==K.y))I.map.setSize(K.x,K.y);let f=I.map.isWebGLCubeRenderTarget?6:I.getViewportCount();if(u.isPointLight!==!0)I.updateMatrices(u,B);for(let g=0;g<f;g++){let Y0=I.getCamera(g);if(u.isPointLight){let{camera:G0,matrix:M0}=I,S0=u.distance||G0.far;if(S0!==G0.far)G0.far=S0,G0.updateProjectionMatrix();V$.setFromMatrixPosition(u.matrixWorld),G0.position.copy(V$),pY.copy(G0.position),pY.add(bO[g]),G0.up.copy(hO[g]),G0.lookAt(pY),G0.updateMatrixWorld(),M0.makeTranslation(-V$.x,-V$.y,-V$.z),Z5.multiplyMatrices(G0.projectionMatrix,G0.matrixWorldInverse),I._frustum.setFromProjectionMatrix(Z5,G0.coordinateSystem,G0.reversedDepth)}if(I.map.isWebGLCubeRenderTarget)J.setRenderTarget(I.map,g),J.clear();else{if(g===0)J.setRenderTarget(I.map),J.clear();let G0=I.getViewport(g);Y.set(W.x*G0.x,W.y*G0.y,W.x*G0.z,W.y*G0.w),n.viewport(Y)}Z=I.getFrustum(g),V(T,B,Y0,u,this.type)}if(I.isPointLightShadow!==!0&&this.type===n6)M(I,B);I.needsUpdate=!1}E=this.type,R.needsUpdate=!1,J.setRenderTarget(z,d,b)};function M(P,T){let B=Q.update(D);if(N.defines.VSM_SAMPLES!==P.blurSamples)N.defines.VSM_SAMPLES=P.blurSamples,q.defines.VSM_SAMPLES=P.blurSamples,N.needsUpdate=!0,q.needsUpdate=!0;if(P.mapPass===null)P.mapPass=new Z8(K.x,K.y,{format:i7,type:R8});else if(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)P.mapPass.setSize(P.map.width,P.map.height);N.uniforms.shadow_pass.value=P.map.depthTexture,N.uniforms.resolution.value.set(P.map.width,P.map.height),N.uniforms.radius.value=P.radius,J.setRenderTarget(P.mapPass),J.clear(),J.renderBufferDirect(T,null,B,N,D,null),q.uniforms.shadow_pass.value=P.mapPass.texture,q.uniforms.resolution.value.set(P.map.width,P.map.height),q.uniforms.radius.value=P.radius,J.setRenderTarget(P.map),J.clear(),J.renderBufferDirect(T,null,B,q,D,null)}function k(P,T,B,z){let d=null,b=B.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(b!==void 0)d=b;else if(d=B.isPointLight===!0?H:X,J.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let n=d.uuid,Z0=T.uuid,v=U[n];if(v===void 0)v={},U[n]=v;let y=v[Z0];if(y===void 0)y=d.clone(),v[Z0]=y,T.addEventListener("dispose",L);d=y}if(d.visible=T.visible,d.wireframe=T.wireframe,z===n6)d.side=T.shadowSide!==null?T.shadowSide:T.side;else d.side=T.shadowSide!==null?T.shadowSide:F[T.side];if(d.alphaMap=T.alphaMap,d.alphaTest=T.alphaToCoverage===!0?0.5:T.alphaTest,d.map=T.map,d.clipShadows=T.clipShadows,d.clippingPlanes=T.clippingPlanes,d.clipIntersection=T.clipIntersection,d.displacementMap=T.displacementMap,d.displacementScale=T.displacementScale,d.displacementBias=T.displacementBias,d.wireframeLinewidth=T.wireframeLinewidth,d.linewidth=T.linewidth,B.isPointLight===!0&&d.isMeshDistanceMaterial===!0){let n=J.properties.get(d);n.light=B}return d}function V(P,T,B,z,d){if(P.visible===!1)return;if(P.layers.test(T.layers)&&(P.isMesh||P.isLine||P.isPoints)){if((P.castShadow||P.receiveShadow&&d===n6)&&(!P.frustumCulled||P.intersectsFrustum(Z))){P.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,P.matrixWorld);let Z0=Q.update(P),v=P.material;if(Array.isArray(v)){let y=Z0.groups;for(let u=0,I=y.length;u<I;u++){let x=y[u],h=v[x.materialIndex];if(h&&h.visible){let f=k(P,h,z,d);P.onBeforeShadow(J,P,T,B,Z0,f,x),J.renderBufferDirect(B,null,Z0,f,P,x),P.onAfterShadow(J,P,T,B,Z0,f,x)}}}else if(v.visible){let y=k(P,v,z,d);P.onBeforeShadow(J,P,T,B,Z0,y,null),J.renderBufferDirect(B,null,Z0,y,P,null),P.onAfterShadow(J,P,T,B,Z0,y,null)}}}let n=P.children;for(let Z0=0,v=n.length;Z0<v;Z0++)V(n[Z0],T,B,z,d)}function L(P){P.target.removeEventListener("dispose",L);for(let B in U){let z=U[B],d=P.target.uuid;if(d in z)z[d].dispose(),delete z[d]}}}function gO(J,Q){function $(){let s=!1,v0=new mJ,U0=null,w0=new mJ(0,0,0,0);return{setMask:function(m0){if(U0!==m0&&!s)J.colorMask(m0,m0,m0,m0),U0=m0},setLocked:function(m0){s=m0},setClear:function(m0,D0,f0,WJ,dJ){if(dJ===!0)m0*=WJ,D0*=WJ,f0*=WJ;if(v0.set(m0,D0,f0,WJ),w0.equals(v0)===!1)J.clearColor(m0,D0,f0,WJ),w0.copy(v0)},reset:function(){s=!1,U0=null,w0.set(-1,0,0,0)}}}function Z(){let s=!1,v0=!1,U0=null,w0=null,m0=null;return{setReversed:function(D0){if(v0!==D0){let f0=Q.get("EXT_clip_control");if(D0)f0.clipControlEXT(f0.LOWER_LEFT_EXT,f0.ZERO_TO_ONE_EXT);else f0.clipControlEXT(f0.LOWER_LEFT_EXT,f0.NEGATIVE_ONE_TO_ONE_EXT);v0=D0;let WJ=m0;m0=null,this.setClear(WJ)}},getReversed:function(){return v0},setTest:function(D0){if(D0)p(J.DEPTH_TEST);else o(J.DEPTH_TEST)},setMask:function(D0){if(U0!==D0&&!s)J.depthMask(D0),U0=D0},setFunc:function(D0){if(v0)D0=kU[D0];if(w0!==D0){switch(D0){case oH:J.depthFunc(J.NEVER);break;case aH:J.depthFunc(J.ALWAYS);break;case rH:J.depthFunc(J.LESS);break;case DW:J.depthFunc(J.LEQUAL);break;case tH:J.depthFunc(J.EQUAL);break;case eH:J.depthFunc(J.GEQUAL);break;case JU:J.depthFunc(J.GREATER);break;case QU:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}w0=D0}},setLocked:function(D0){s=D0},setClear:function(D0){if(m0!==D0){if(m0=D0,v0)D0=1-D0;J.clearDepth(D0)}},reset:function(){s=!1,U0=null,w0=null,m0=null,v0=!1}}}function K(){let s=!1,v0=null,U0=null,w0=null,m0=null,D0=null,f0=null,WJ=null,dJ=null;return{setTest:function(SJ){if(!s)if(SJ)p(J.STENCIL_TEST);else o(J.STENCIL_TEST)},setMask:function(SJ){if(v0!==SJ&&!s)J.stencilMask(SJ),v0=SJ},setFunc:function(SJ,i8,o8){if(U0!==SJ||w0!==i8||m0!==o8)J.stencilFunc(SJ,i8,o8),U0=SJ,w0=i8,m0=o8},setOp:function(SJ,i8,o8){if(D0!==SJ||f0!==i8||WJ!==o8)J.stencilOp(SJ,i8,o8),D0=SJ,f0=i8,WJ=o8},setLocked:function(SJ){s=SJ},setClear:function(SJ){if(dJ!==SJ)J.clearStencil(SJ),dJ=SJ},reset:function(){s=!1,v0=null,U0=null,w0=null,m0=null,D0=null,f0=null,WJ=null,dJ=null}}}let W=new $,Y=new Z,X=new K,H=new WeakMap,U=new WeakMap,G={},F={},N={},q=new WeakMap,O=[],D=null,R=!1,E=null,M=null,k=null,V=null,L=null,P=null,T=null,B=new j0(0,0,0),z=0,d=!1,b=null,n=null,Z0=null,v=null,y=null,u=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),I=!1,x=0,h=J.getParameter(J.VERSION);if(h.indexOf("WebGL")!==-1)x=parseFloat(/^WebGL (\d)/.exec(h)[1]),I=x>=1;else if(h.indexOf("OpenGL ES")!==-1)x=parseFloat(/^OpenGL ES (\d)/.exec(h)[1]),I=x>=2;let f=null,g={},Y0=J.getParameter(J.SCISSOR_BOX),G0=J.getParameter(J.VIEWPORT),M0=new mJ().fromArray(Y0),S0=new mJ().fromArray(G0);function $0(s,v0,U0,w0){let m0=new Uint8Array(4),D0=J.createTexture();J.bindTexture(s,D0),J.texParameteri(s,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(s,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let f0=0;f0<U0;f0++)if(s===J.TEXTURE_3D||s===J.TEXTURE_2D_ARRAY)J.texImage3D(v0,0,J.RGBA,1,1,w0,0,J.RGBA,J.UNSIGNED_BYTE,m0);else J.texImage2D(v0+f0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,m0);return D0}let j={};j[J.TEXTURE_2D]=$0(J.TEXTURE_2D,J.TEXTURE_2D,1),j[J.TEXTURE_CUBE_MAP]=$0(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[J.TEXTURE_2D_ARRAY]=$0(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),j[J.TEXTURE_3D]=$0(J.TEXTURE_3D,J.TEXTURE_3D,1,1),W.setClear(0,0,0,1),Y.setClear(1),X.setClear(0),p(J.DEPTH_TEST),Y.setFunc(DW),EJ(!1),g0(RW),p(J.CULL_FACE),_0(Q9);function p(s){if(G[s]!==!0)J.enable(s),G[s]=!0}function o(s){if(G[s]!==!1)J.disable(s),G[s]=!1}function K0(s,v0){if(N[s]!==v0){if(J.bindFramebuffer(s,v0),N[s]=v0,s===J.DRAW_FRAMEBUFFER)N[J.FRAMEBUFFER]=v0;if(s===J.FRAMEBUFFER)N[J.DRAW_FRAMEBUFFER]=v0;return!0}return!1}function r(s,v0){let U0=O,w0=!1;if(s){if(U0=q.get(v0),U0===void 0)U0=[],q.set(v0,U0);let m0=s.textures;if(U0.length!==m0.length||U0[0]!==J.COLOR_ATTACHMENT0){for(let D0=0,f0=m0.length;D0<f0;D0++)U0[D0]=J.COLOR_ATTACHMENT0+D0;U0.length=m0.length,w0=!0}}else if(U0[0]!==J.BACK)U0[0]=J.BACK,w0=!0;if(w0)J.drawBuffers(U0)}function O0(s){if(D!==s)return J.useProgram(s),D=s,!0;return!1}let F0={[s6]:J.FUNC_ADD,[wH]:J.FUNC_SUBTRACT,[SH]:J.FUNC_REVERSE_SUBTRACT};F0[jH]=J.MIN,F0[yH]=J.MAX;let X0={[vH]:J.ZERO,[fH]:J.ONE,[bH]:J.SRC_COLOR,[xH]:J.SRC_ALPHA,[dH]:J.SRC_ALPHA_SATURATE,[lH]:J.DST_COLOR,[pH]:J.DST_ALPHA,[hH]:J.ONE_MINUS_SRC_COLOR,[gH]:J.ONE_MINUS_SRC_ALPHA,[uH]:J.ONE_MINUS_DST_COLOR,[mH]:J.ONE_MINUS_DST_ALPHA,[cH]:J.CONSTANT_COLOR,[nH]:J.ONE_MINUS_CONSTANT_COLOR,[sH]:J.CONSTANT_ALPHA,[iH]:J.ONE_MINUS_CONSTANT_ALPHA};function _0(s,v0,U0,w0,m0,D0,f0,WJ,dJ,SJ){if(s===Q9){if(R===!0)o(J.BLEND),R=!1;return}if(R===!1)p(J.BLEND),R=!0;if(s!==_H){if(s!==E||SJ!==d){if(M!==s6||L!==s6)J.blendEquation(J.FUNC_ADD),M=s6,L=s6;if(SJ)switch(s){case sQ:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case S9:J.blendFunc(J.ONE,J.ONE);break;case LW:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case VW:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:$J("WebGLState: Invalid blending: ",s);break}else switch(s){case sQ:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case S9:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case LW:$J("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case VW:$J("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$J("WebGLState: Invalid blending: ",s);break}k=null,V=null,P=null,T=null,B.set(0,0,0),z=0,E=s,d=SJ}return}if(m0=m0||v0,D0=D0||U0,f0=f0||w0,v0!==M||m0!==L)J.blendEquationSeparate(F0[v0],F0[m0]),M=v0,L=m0;if(U0!==k||w0!==V||D0!==P||f0!==T)J.blendFuncSeparate(X0[U0],X0[w0],X0[D0],X0[f0]),k=U0,V=w0,P=D0,T=f0;if(WJ.equals(B)===!1||dJ!==z)J.blendColor(WJ.r,WJ.g,WJ.b,dJ),B.copy(WJ),z=dJ;E=s,d=!1}function c0(s,v0){s.side===oJ?o(J.CULL_FACE):p(J.CULL_FACE);let U0=s.side===D8;if(v0)U0=!U0;EJ(U0),s.blending===sQ&&s.transparent===!1?_0(Q9):_0(s.blending,s.blendEquation,s.blendSrc,s.blendDst,s.blendEquationAlpha,s.blendSrcAlpha,s.blendDstAlpha,s.blendColor,s.blendAlpha,s.premultipliedAlpha),Y.setFunc(s.depthFunc),Y.setTest(s.depthTest),Y.setMask(s.depthWrite),W.setMask(s.colorWrite);let w0=s.stencilWrite;if(X.setTest(w0),w0)X.setMask(s.stencilWriteMask),X.setFunc(s.stencilFunc,s.stencilRef,s.stencilFuncMask),X.setOp(s.stencilFail,s.stencilZFail,s.stencilZPass);_J(s.polygonOffset,s.polygonOffsetFactor,s.polygonOffsetUnits),s.alphaToCoverage===!0?p(J.SAMPLE_ALPHA_TO_COVERAGE):o(J.SAMPLE_ALPHA_TO_COVERAGE)}function EJ(s){if(b!==s){if(s)J.frontFace(J.CW);else J.frontFace(J.CCW);b=s}}function g0(s){if(s!==zH){if(p(J.CULL_FACE),s!==n)if(s===RW)J.cullFace(J.BACK);else if(s===AH)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else o(J.CULL_FACE);n=s}function PJ(s){if(s!==Z0){if(I)J.lineWidth(s);Z0=s}}function _J(s,v0,U0){if(s){if(p(J.POLYGON_OFFSET_FILL),v!==v0||y!==U0){if(v=v0,y=U0,Y.getReversed())v0=-v0;J.polygonOffset(v0,U0)}}else o(J.POLYGON_OFFSET_FILL)}function gJ(s){if(s)p(J.SCISSOR_TEST);else o(J.SCISSOR_TEST)}function l(s){if(s===void 0)s=J.TEXTURE0+u-1;if(f!==s)J.activeTexture(s),f=s}function nJ(s,v0,U0){if(U0===void 0)if(f===null)U0=J.TEXTURE0+u-1;else U0=f;let w0=g[U0];if(w0===void 0)w0={type:void 0,texture:void 0},g[U0]=w0;if(w0.type!==s||w0.texture!==v0){if(f!==U0)J.activeTexture(U0),f=U0;J.bindTexture(s,v0||j[s]),w0.type=s,w0.texture=v0}}function NJ(){let s=g[f];if(s!==void 0&&s.type!==void 0)J.bindTexture(s.type,null),s.type=void 0,s.texture=void 0}function VJ(){try{J.compressedTexImage2D(...arguments)}catch(s){$J("WebGLState:",s)}}function S(){try{J.compressedTexImage3D(...arguments)}catch(s){$J("WebGLState:",s)}}function C(){try{J.texSubImage2D(...arguments)}catch(s){$J("WebGLState:",s)}}function m(){try{J.texSubImage3D(...arguments)}catch(s){$J("WebGLState:",s)}}function J0(){try{J.compressedTexSubImage2D(...arguments)}catch(s){$J("WebGLState:",s)}}function V0(){try{J.compressedTexSubImage3D(...arguments)}catch(s){$J("WebGLState:",s)}}function z0(){try{J.texStorage2D(...arguments)}catch(s){$J("WebGLState:",s)}}function y0(){try{J.texStorage3D(...arguments)}catch(s){$J("WebGLState:",s)}}function H0(){try{J.texImage2D(...arguments)}catch(s){$J("WebGLState:",s)}}function E0(){try{J.texImage3D(...arguments)}catch(s){$J("WebGLState:",s)}}function I0(s){if(F[s]!==void 0)return F[s];else return J.getParameter(s)}function s0(s,v0){if(F[s]!==v0)J.pixelStorei(s,v0),F[s]=v0}function A0(s){if(M0.equals(s)===!1)J.scissor(s.x,s.y,s.z,s.w),M0.copy(s)}function k0(s){if(S0.equals(s)===!1)J.viewport(s.x,s.y,s.z,s.w),S0.copy(s)}function e0(s,v0){let U0=U.get(v0);if(U0===void 0)U0=new WeakMap,U.set(v0,U0);let w0=U0.get(s);if(w0===void 0)w0=J.getUniformBlockIndex(v0,s.name),U0.set(s,w0)}function t0(s,v0){let w0=U.get(v0).get(s);if(H.get(v0)!==w0)J.uniformBlockBinding(v0,w0,s.__bindingPointIndex),H.set(v0,w0)}function IJ(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),Y.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),J.pixelStorei(J.PACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_ALIGNMENT,4),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,!1),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,J.BROWSER_DEFAULT_WEBGL),J.pixelStorei(J.PACK_ROW_LENGTH,0),J.pixelStorei(J.PACK_SKIP_PIXELS,0),J.pixelStorei(J.PACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_ROW_LENGTH,0),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,0),J.pixelStorei(J.UNPACK_SKIP_ROWS,0),J.pixelStorei(J.UNPACK_SKIP_IMAGES,0),G={},F={},f=null,g={},N={},q=new WeakMap,O=[],D=null,R=!1,E=null,M=null,k=null,V=null,L=null,P=null,T=null,B=new j0(0,0,0),z=0,d=!1,b=null,n=null,Z0=null,v=null,y=null,M0.set(0,0,J.canvas.width,J.canvas.height),S0.set(0,0,J.canvas.width,J.canvas.height),W.reset(),Y.reset(),X.reset()}return{buffers:{color:W,depth:Y,stencil:X},enable:p,disable:o,bindFramebuffer:K0,drawBuffers:r,useProgram:O0,setBlending:_0,setMaterial:c0,setFlipSided:EJ,setCullFace:g0,setLineWidth:PJ,setPolygonOffset:_J,setScissorTest:gJ,activeTexture:l,bindTexture:nJ,unbindTexture:NJ,compressedTexImage2D:VJ,compressedTexImage3D:S,texImage2D:H0,texImage3D:E0,pixelStorei:s0,getParameter:I0,updateUBOMapping:e0,uniformBlockBinding:t0,texStorage2D:z0,texStorage3D:y0,texSubImage2D:C,texSubImage3D:m,compressedTexSubImage2D:J0,compressedTexSubImage3D:V0,scissor:A0,viewport:k0,reset:IJ}}function pO(J,Q,$,Z,K,W,Y){let X=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,H=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),U=new q0,G=new WeakMap,F=new Set,N,q=new WeakMap,O=!1;try{O=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(S){}function D(S,C){return O?new OffscreenCanvas(S,C):l6("canvas")}function R(S,C,m){let J0=1,V0=VJ(S);if(V0.width>m||V0.height>m)J0=m/Math.max(V0.width,V0.height);if(J0<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let z0=Math.floor(J0*V0.width),y0=Math.floor(J0*V0.height);if(N===void 0)N=D(z0,y0);let H0=C?D(z0,y0):N;return H0.width=z0,H0.height=y0,H0.getContext("2d").drawImage(S,0,0,z0,y0),r0("WebGLRenderer: Texture has been resized from ("+V0.width+"x"+V0.height+") to ("+z0+"x"+y0+")."),H0}else{if("data"in S)r0("WebGLRenderer: Image in DataTexture is too big ("+V0.width+"x"+V0.height+").");return S}return S}function E(S){return S.generateMipmaps}function M(S){J.generateMipmap(S)}function k(S){if(S.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(S.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function V(S,C,m,J0,V0,z0=!1){if(S!==null){if(J[S]!==void 0)return J[S];r0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let y0;if(J0){if(y0=Q.get("EXT_texture_norm16"),!y0)r0("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension")}let H0=C;if(C===J.RED){if(m===J.FLOAT)H0=J.R32F;if(m===J.HALF_FLOAT)H0=J.R16F;if(m===J.UNSIGNED_BYTE)H0=J.R8;if(m===J.UNSIGNED_SHORT&&y0)H0=y0.R16_EXT;if(m===J.SHORT&&y0)H0=y0.R16_SNORM_EXT}if(C===J.RED_INTEGER){if(m===J.UNSIGNED_BYTE)H0=J.R8UI;if(m===J.UNSIGNED_SHORT)H0=J.R16UI;if(m===J.UNSIGNED_INT)H0=J.R32UI;if(m===J.BYTE)H0=J.R8I;if(m===J.SHORT)H0=J.R16I;if(m===J.INT)H0=J.R32I}if(C===J.RG){if(m===J.FLOAT)H0=J.RG32F;if(m===J.HALF_FLOAT)H0=J.RG16F;if(m===J.UNSIGNED_BYTE)H0=J.RG8;if(m===J.UNSIGNED_SHORT&&y0)H0=y0.RG16_EXT;if(m===J.SHORT&&y0)H0=y0.RG16_SNORM_EXT}if(C===J.RG_INTEGER){if(m===J.UNSIGNED_BYTE)H0=J.RG8UI;if(m===J.UNSIGNED_SHORT)H0=J.RG16UI;if(m===J.UNSIGNED_INT)H0=J.RG32UI;if(m===J.BYTE)H0=J.RG8I;if(m===J.SHORT)H0=J.RG16I;if(m===J.INT)H0=J.RG32I}if(C===J.RGB_INTEGER){if(m===J.UNSIGNED_BYTE)H0=J.RGB8UI;if(m===J.UNSIGNED_SHORT)H0=J.RGB16UI;if(m===J.UNSIGNED_INT)H0=J.RGB32UI;if(m===J.BYTE)H0=J.RGB8I;if(m===J.SHORT)H0=J.RGB16I;if(m===J.INT)H0=J.RGB32I}if(C===J.RGBA_INTEGER){if(m===J.UNSIGNED_BYTE)H0=J.RGBA8UI;if(m===J.UNSIGNED_SHORT)H0=J.RGBA16UI;if(m===J.UNSIGNED_INT)H0=J.RGBA32UI;if(m===J.BYTE)H0=J.RGBA8I;if(m===J.SHORT)H0=J.RGBA16I;if(m===J.INT)H0=J.RGBA32I}if(C===J.RGB){if(m===J.UNSIGNED_SHORT&&y0)H0=y0.RGB16_EXT;if(m===J.SHORT&&y0)H0=y0.RGB16_SNORM_EXT;if(m===J.UNSIGNED_INT_5_9_9_9_REV)H0=J.RGB9_E5;if(m===J.UNSIGNED_INT_10F_11F_11F_REV)H0=J.R11F_G11F_B10F}if(C===J.RGBA){let E0=z0?WY:qJ.getTransfer(V0);if(m===J.FLOAT)H0=J.RGBA32F;if(m===J.HALF_FLOAT)H0=J.RGBA16F;if(m===J.UNSIGNED_BYTE)H0=E0===lJ?J.SRGB8_ALPHA8:J.RGBA8;if(m===J.UNSIGNED_SHORT&&y0)H0=y0.RGBA16_EXT;if(m===J.SHORT&&y0)H0=y0.RGBA16_SNORM_EXT;if(m===J.UNSIGNED_SHORT_4_4_4_4)H0=J.RGBA4;if(m===J.UNSIGNED_SHORT_5_5_5_1)H0=J.RGB5_A1}if(H0===J.R16F||H0===J.R32F||H0===J.RG16F||H0===J.RG32F||H0===J.RGBA16F||H0===J.RGBA32F)Q.get("EXT_color_buffer_float");return H0}function L(S,C){let m;if(S){if(C===null||C===M7||C===r6)m=J.DEPTH24_STENCIL8;else if(C===t9)m=J.DEPTH32F_STENCIL8;else if(C===Q$)m=J.DEPTH24_STENCIL8,r0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(C===null||C===M7||C===r6)m=J.DEPTH_COMPONENT24;else if(C===t9)m=J.DEPTH_COMPONENT32F;else if(C===Q$)m=J.DEPTH_COMPONENT16;return m}function P(S,C){if(E(S)===!0||S.isFramebufferTexture&&S.minFilter!==D9&&S.minFilter!==X8)return Math.log2(Math.max(C.width,C.height))+1;else if(S.mipmaps!==void 0&&S.mipmaps.length>0)return S.mipmaps.length;else if(S.isCompressedTexture&&Array.isArray(S.image))return C.mipmaps.length;else return 1}function T(S){let C=S.target;if(C.removeEventListener("dispose",T),z(C),C.isVideoTexture)G.delete(C);if(C.isHTMLTexture)F.delete(C)}function B(S){let C=S.target;C.removeEventListener("dispose",B),b(C)}function z(S){let C=Z.get(S);if(C.__webglInit===void 0)return;let m=S.source,J0=q.get(m);if(J0){let V0=J0[C.__cacheKey];if(V0.usedTimes--,V0.usedTimes===0)d(S);if(Object.keys(J0).length===0)q.delete(m)}Z.remove(S)}function d(S){let C=Z.get(S);J.deleteTexture(C.__webglTexture);let m=S.source,J0=q.get(m);delete J0[C.__cacheKey],Y.memory.textures--}function b(S){let C=Z.get(S);if(S.depthTexture)S.depthTexture.dispose(),Z.remove(S.depthTexture);if(S.isWebGLCubeRenderTarget)for(let J0=0;J0<6;J0++){if(Array.isArray(C.__webglFramebuffer[J0]))for(let V0=0;V0<C.__webglFramebuffer[J0].length;V0++)J.deleteFramebuffer(C.__webglFramebuffer[J0][V0]);else J.deleteFramebuffer(C.__webglFramebuffer[J0]);if(C.__webglDepthbuffer)J.deleteRenderbuffer(C.__webglDepthbuffer[J0])}else{if(Array.isArray(C.__webglFramebuffer))for(let J0=0;J0<C.__webglFramebuffer.length;J0++)J.deleteFramebuffer(C.__webglFramebuffer[J0]);else J.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer)J.deleteRenderbuffer(C.__webglDepthbuffer);if(C.__webglMultisampledFramebuffer)J.deleteFramebuffer(C.__webglMultisampledFramebuffer);if(C.__webglColorRenderbuffer){for(let J0=0;J0<C.__webglColorRenderbuffer.length;J0++)if(C.__webglColorRenderbuffer[J0])J.deleteRenderbuffer(C.__webglColorRenderbuffer[J0])}if(C.__webglDepthRenderbuffer)J.deleteRenderbuffer(C.__webglDepthRenderbuffer)}let m=S.textures;for(let J0=0,V0=m.length;J0<V0;J0++){let z0=Z.get(m[J0]);if(z0.__webglTexture)J.deleteTexture(z0.__webglTexture),Y.memory.textures--;Z.remove(m[J0])}Z.remove(S)}let n=0;function Z0(){n=0}function v(){return n}function y(S){n=S}function u(){let S=n;if(S>=K.maxTextures)r0("WebGLTextures: Trying to use "+(S+1)+" texture units while this GPU supports only "+K.maxTextures);return n+=1,S}function I(S){let C=[];return C.push(S.wrapS),C.push(S.wrapT),C.push(S.wrapR||0),C.push(S.magFilter),C.push(S.minFilter),C.push(S.anisotropy),C.push(S.internalFormat),C.push(S.format),C.push(S.type),C.push(S.generateMipmaps),C.push(S.premultiplyAlpha),C.push(S.flipY),C.push(S.unpackAlignment),C.push(S.colorSpace),C.join()}function x(S,C){let m=Z.get(S);if(S.isVideoTexture)nJ(S);if(S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&m.__version!==S.version){let J0=S.image;if(J0===null)r0("WebGLRenderer: Texture marked for update but no image data found.");else if(J0.complete===!1)r0("WebGLRenderer: Texture marked for update but image is incomplete");else{o(m,S,C);return}}else if(S.isExternalTexture)m.__webglTexture=S.sourceTexture?S.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,m.__webglTexture,J.TEXTURE0+C)}function h(S,C){let m=Z.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&m.__version!==S.version){o(m,S,C);return}else if(S.isExternalTexture)m.__webglTexture=S.sourceTexture?S.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,m.__webglTexture,J.TEXTURE0+C)}function f(S,C){let m=Z.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&m.__version!==S.version){o(m,S,C);return}$.bindTexture(J.TEXTURE_3D,m.__webglTexture,J.TEXTURE0+C)}function g(S,C){let m=Z.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&m.__version!==S.version){K0(m,S,C);return}$.bindTexture(J.TEXTURE_CUBE_MAP,m.__webglTexture,J.TEXTURE0+C)}let Y0={[B7]:J.REPEAT,[o6]:J.CLAMP_TO_EDGE,[TZ]:J.MIRRORED_REPEAT},G0={[D9]:J.NEAREST,[_Z]:J.NEAREST_MIPMAP_NEAREST,[c7]:J.NEAREST_MIPMAP_LINEAR,[X8]:J.LINEAR,[a6]:J.LINEAR_MIPMAP_NEAREST,[$9]:J.LINEAR_MIPMAP_LINEAR},M0={[EU]:J.NEVER,[VU]:J.ALWAYS,[qU]:J.LESS,[hZ]:J.LEQUAL,[OU]:J.EQUAL,[xZ]:J.GEQUAL,[RU]:J.GREATER,[LU]:J.NOTEQUAL};function S0(S,C){if(C.type===t9&&Q.has("OES_texture_float_linear")===!1&&(C.magFilter===X8||C.magFilter===a6||C.magFilter===c7||C.magFilter===$9||C.minFilter===X8||C.minFilter===a6||C.minFilter===c7||C.minFilter===$9))r0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(S,J.TEXTURE_WRAP_S,Y0[C.wrapS]),J.texParameteri(S,J.TEXTURE_WRAP_T,Y0[C.wrapT]),S===J.TEXTURE_3D||S===J.TEXTURE_2D_ARRAY)J.texParameteri(S,J.TEXTURE_WRAP_R,Y0[C.wrapR]);if(J.texParameteri(S,J.TEXTURE_MAG_FILTER,G0[C.magFilter]),J.texParameteri(S,J.TEXTURE_MIN_FILTER,G0[C.minFilter]),C.compareFunction)J.texParameteri(S,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(S,J.TEXTURE_COMPARE_FUNC,M0[C.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===D9)return;if(C.minFilter!==c7&&C.minFilter!==$9)return;if(C.type===t9&&Q.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||Z.get(C).__currentAnisotropy){let m=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(S,m.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,K.getMaxAnisotropy())),Z.get(C).__currentAnisotropy=C.anisotropy}}}function $0(S,C){let m=!1;if(S.__webglInit===void 0)S.__webglInit=!0,C.addEventListener("dispose",T);let J0=C.source,V0=q.get(J0);if(V0===void 0)V0={},q.set(J0,V0);let z0=I(C);if(z0!==S.__cacheKey){if(V0[z0]===void 0)V0[z0]={texture:J.createTexture(),usedTimes:0},Y.memory.textures++,m=!0;V0[z0].usedTimes++;let y0=V0[S.__cacheKey];if(y0!==void 0){if(V0[S.__cacheKey].usedTimes--,y0.usedTimes===0)d(C)}S.__cacheKey=z0,S.__webglTexture=V0[z0].texture}return m}function j(S,C,m){return Math.floor(Math.floor(S/m)/C)}function p(S,C,m,J0){let z0=S.updateRanges;if(z0.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,C.width,C.height,m,J0,C.data);else{z0.sort((s0,A0)=>s0.start-A0.start);let y0=0;for(let s0=1;s0<z0.length;s0++){let A0=z0[y0],k0=z0[s0],e0=A0.start+A0.count,t0=j(k0.start,C.width,4),IJ=j(A0.start,C.width,4);if(k0.start<=e0+1&&t0===IJ&&j(k0.start+k0.count-1,C.width,4)===t0)A0.count=Math.max(A0.count,k0.start+k0.count-A0.start);else++y0,z0[y0]=k0}z0.length=y0+1;let H0=$.getParameter(J.UNPACK_ROW_LENGTH),E0=$.getParameter(J.UNPACK_SKIP_PIXELS),I0=$.getParameter(J.UNPACK_SKIP_ROWS);$.pixelStorei(J.UNPACK_ROW_LENGTH,C.width);for(let s0=0,A0=z0.length;s0<A0;s0++){let k0=z0[s0],e0=Math.floor(k0.start/4),t0=Math.ceil(k0.count/4),IJ=e0%C.width,s=Math.floor(e0/C.width),v0=t0,U0=1;$.pixelStorei(J.UNPACK_SKIP_PIXELS,IJ),$.pixelStorei(J.UNPACK_SKIP_ROWS,s),$.texSubImage2D(J.TEXTURE_2D,0,IJ,s,v0,1,m,J0,C.data)}S.clearUpdateRanges(),$.pixelStorei(J.UNPACK_ROW_LENGTH,H0),$.pixelStorei(J.UNPACK_SKIP_PIXELS,E0),$.pixelStorei(J.UNPACK_SKIP_ROWS,I0)}}function o(S,C,m){let J0=J.TEXTURE_2D;if(C.isDataArrayTexture||C.isCompressedArrayTexture)J0=J.TEXTURE_2D_ARRAY;if(C.isData3DTexture)J0=J.TEXTURE_3D;let V0=$0(S,C),z0=C.source;$.bindTexture(J0,S.__webglTexture,J.TEXTURE0+m);let y0=Z.get(z0);if(z0.version!==y0.__version||V0===!0){if($.activeTexture(J.TEXTURE0+m),(typeof ImageBitmap<"u"&&C.image instanceof ImageBitmap)===!1){let U0=qJ.getPrimaries(qJ.workingColorSpace),w0=C.colorSpace===o7?null:qJ.getPrimaries(C.colorSpace),m0=C.colorSpace===o7||U0===w0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,C.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,m0)}$.pixelStorei(J.UNPACK_ALIGNMENT,C.unpackAlignment);let E0=R(C.image,!1,K.maxTextureSize);E0=NJ(C,E0);let I0=W.convert(C.format,C.colorSpace),s0=W.convert(C.type),A0=V(C.internalFormat,I0,s0,C.normalized,C.colorSpace,C.isVideoTexture);S0(J0,C);let k0,e0=C.mipmaps,t0=C.isVideoTexture!==!0,IJ=y0.__version===void 0||V0===!0,s=z0.dataReady,v0=P(C,E0);if(C.isDepthTexture){if(A0=L(C.format===s7,C.type),IJ)if(t0)$.texStorage2D(J.TEXTURE_2D,1,A0,E0.width,E0.height);else $.texImage2D(J.TEXTURE_2D,0,A0,E0.width,E0.height,0,I0,s0,null)}else if(C.isDataTexture)if(e0.length>0){if(t0&&IJ)$.texStorage2D(J.TEXTURE_2D,v0,A0,e0[0].width,e0[0].height);for(let U0=0,w0=e0.length;U0<w0;U0++)if(k0=e0[U0],t0){if(s)$.texSubImage2D(J.TEXTURE_2D,U0,0,0,k0.width,k0.height,I0,s0,k0.data)}else $.texImage2D(J.TEXTURE_2D,U0,A0,k0.width,k0.height,0,I0,s0,k0.data);C.generateMipmaps=!1}else if(t0){if(IJ)$.texStorage2D(J.TEXTURE_2D,v0,A0,E0.width,E0.height);if(s)p(C,E0,I0,s0)}else $.texImage2D(J.TEXTURE_2D,0,A0,E0.width,E0.height,0,I0,s0,E0.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){if(t0&&IJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,v0,A0,e0[0].width,e0[0].height,E0.depth);for(let U0=0,w0=e0.length;U0<w0;U0++)if(k0=e0[U0],C.format!==j9)if(I0!==null)if(t0){if(s)if(C.layerUpdates.size>0){let m0=vY(k0.width,k0.height,C.format,C.type);for(let D0 of C.layerUpdates){let f0=k0.data.subarray(D0*m0/k0.data.BYTES_PER_ELEMENT,(D0+1)*m0/k0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,U0,0,0,D0,k0.width,k0.height,1,I0,f0)}}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,U0,0,0,0,k0.width,k0.height,E0.depth,I0,k0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,U0,A0,k0.width,k0.height,E0.depth,0,k0.data,0,0);else r0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(t0){if(s)$.texSubImage3D(J.TEXTURE_2D_ARRAY,U0,0,0,0,k0.width,k0.height,E0.depth,I0,s0,k0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,U0,A0,k0.width,k0.height,E0.depth,0,I0,s0,k0.data);if(C.layerUpdates.size>0)C.clearLayerUpdates()}else{if(t0&&IJ)$.texStorage2D(J.TEXTURE_2D,v0,A0,e0[0].width,e0[0].height);for(let U0=0,w0=e0.length;U0<w0;U0++)if(k0=e0[U0],C.format!==j9)if(I0!==null)if(t0){if(s)$.compressedTexSubImage2D(J.TEXTURE_2D,U0,0,0,k0.width,k0.height,I0,k0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,U0,A0,k0.width,k0.height,0,k0.data);else r0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(t0){if(s)$.texSubImage2D(J.TEXTURE_2D,U0,0,0,k0.width,k0.height,I0,s0,k0.data)}else $.texImage2D(J.TEXTURE_2D,U0,A0,k0.width,k0.height,0,I0,s0,k0.data)}else if(C.isDataArrayTexture)if(t0){if(IJ)$.texStorage3D(J.TEXTURE_2D_ARRAY,v0,A0,E0.width,E0.height,E0.depth);if(s)if(C.layerUpdates.size>0){let U0=vY(E0.width,E0.height,C.format,C.type);for(let w0 of C.layerUpdates){let m0=E0.data.subarray(w0*U0/E0.data.BYTES_PER_ELEMENT,(w0+1)*U0/E0.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,w0,E0.width,E0.height,1,I0,s0,m0)}C.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,E0.width,E0.height,E0.depth,I0,s0,E0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,A0,E0.width,E0.height,E0.depth,0,I0,s0,E0.data);else if(C.isData3DTexture)if(t0){if(IJ)$.texStorage3D(J.TEXTURE_3D,v0,A0,E0.width,E0.height,E0.depth);if(s)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,E0.width,E0.height,E0.depth,I0,s0,E0.data)}else $.texImage3D(J.TEXTURE_3D,0,A0,E0.width,E0.height,E0.depth,0,I0,s0,E0.data);else if(C.isFramebufferTexture){if(IJ)if(t0)$.texStorage2D(J.TEXTURE_2D,v0,A0,E0.width,E0.height);else{let{width:U0,height:w0}=E0;for(let m0=0;m0<v0;m0++)$.texImage2D(J.TEXTURE_2D,m0,A0,U0,w0,0,I0,s0,null),U0>>=1,w0>>=1}}else if(C.isHTMLTexture){if("texElementImage2D"in J){let U0=J.canvas;if(!U0.hasAttribute("layoutsubtree"))U0.setAttribute("layoutsubtree","true");if(E0.parentNode!==U0){U0.appendChild(E0),F.add(C),U0.onpaint=(w0)=>{let m0=w0.changedElements;for(let D0 of F)if(m0.includes(D0.image))D0.needsUpdate=!0},U0.requestPaint();return}if(J.texElementImage2D.length===3)J.texElementImage2D(J.TEXTURE_2D,J.RGBA8,E0);else{let{RGBA:m0,RGBA:D0,UNSIGNED_BYTE:f0}=J;J.texElementImage2D(J.TEXTURE_2D,0,m0,D0,f0,E0)}J.texParameteri(J.TEXTURE_2D,J.TEXTURE_MIN_FILTER,J.LINEAR),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_S,J.CLAMP_TO_EDGE),J.texParameteri(J.TEXTURE_2D,J.TEXTURE_WRAP_T,J.CLAMP_TO_EDGE)}}else if(e0.length>0){if(t0&&IJ){let U0=VJ(e0[0]);$.texStorage2D(J.TEXTURE_2D,v0,A0,U0.width,U0.height)}for(let U0=0,w0=e0.length;U0<w0;U0++)if(k0=e0[U0],t0){if(s)$.texSubImage2D(J.TEXTURE_2D,U0,0,0,I0,s0,k0)}else $.texImage2D(J.TEXTURE_2D,U0,A0,I0,s0,k0);C.generateMipmaps=!1}else if(t0){if(IJ){let U0=VJ(E0);$.texStorage2D(J.TEXTURE_2D,v0,A0,U0.width,U0.height)}if(s)$.texSubImage2D(J.TEXTURE_2D,0,0,0,I0,s0,E0)}else $.texImage2D(J.TEXTURE_2D,0,A0,I0,s0,E0);if(E(C))M(J0);if(y0.__version=z0.version,C.onUpdate)C.onUpdate(C)}S.__version=C.version}function K0(S,C,m){if(C.image.length!==6)return;let J0=$0(S,C),V0=C.source;$.bindTexture(J.TEXTURE_CUBE_MAP,S.__webglTexture,J.TEXTURE0+m);let z0=Z.get(V0);if(V0.version!==z0.__version||J0===!0){$.activeTexture(J.TEXTURE0+m);let y0=qJ.getPrimaries(qJ.workingColorSpace),H0=C.colorSpace===o7?null:qJ.getPrimaries(C.colorSpace),E0=C.colorSpace===o7||y0===H0?J.NONE:J.BROWSER_DEFAULT_WEBGL;$.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,C.flipY),$.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),$.pixelStorei(J.UNPACK_ALIGNMENT,C.unpackAlignment),$.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,E0);let I0=C.isCompressedTexture||C.image[0].isCompressedTexture,s0=C.image[0]&&C.image[0].isDataTexture,A0=[];for(let D0=0;D0<6;D0++){if(!I0&&!s0)A0[D0]=R(C.image[D0],!0,K.maxCubemapSize);else A0[D0]=s0?C.image[D0].image:C.image[D0];A0[D0]=NJ(C,A0[D0])}let k0=A0[0],e0=W.convert(C.format,C.colorSpace),t0=W.convert(C.type),IJ=V(C.internalFormat,e0,t0,C.normalized,C.colorSpace),s=C.isVideoTexture!==!0,v0=z0.__version===void 0||J0===!0,U0=V0.dataReady,w0=P(C,k0);S0(J.TEXTURE_CUBE_MAP,C);let m0;if(I0){if(s&&v0)$.texStorage2D(J.TEXTURE_CUBE_MAP,w0,IJ,k0.width,k0.height);for(let D0=0;D0<6;D0++){m0=A0[D0].mipmaps;for(let f0=0;f0<m0.length;f0++){let WJ=m0[f0];if(C.format!==j9)if(e0!==null)if(s){if(U0)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+D0,f0,0,0,WJ.width,WJ.height,e0,WJ.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+D0,f0,IJ,WJ.width,WJ.height,0,WJ.data);else r0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(s){if(U0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+D0,f0,0,0,WJ.width,WJ.height,e0,t0,WJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+D0,f0,IJ,WJ.width,WJ.height,0,e0,t0,WJ.data)}}}else{if(m0=C.mipmaps,s&&v0){if(m0.length>0)w0++;let D0=VJ(A0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,w0,IJ,D0.width,D0.height)}for(let D0=0;D0<6;D0++)if(s0){if(s){if(U0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+D0,0,0,0,A0[D0].width,A0[D0].height,e0,t0,A0[D0].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+D0,0,IJ,A0[D0].width,A0[D0].height,0,e0,t0,A0[D0].data);for(let f0=0;f0<m0.length;f0++){let dJ=m0[f0].image[D0].image;if(s){if(U0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+D0,f0+1,0,0,dJ.width,dJ.height,e0,t0,dJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+D0,f0+1,IJ,dJ.width,dJ.height,0,e0,t0,dJ.data)}}else{if(s){if(U0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+D0,0,0,0,e0,t0,A0[D0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+D0,0,IJ,e0,t0,A0[D0]);for(let f0=0;f0<m0.length;f0++){let WJ=m0[f0];if(s){if(U0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+D0,f0+1,0,0,e0,t0,WJ.image[D0])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+D0,f0+1,IJ,e0,t0,WJ.image[D0])}}}if(E(C))M(J.TEXTURE_CUBE_MAP);if(z0.__version=V0.version,C.onUpdate)C.onUpdate(C)}S.__version=C.version}function r(S,C,m,J0,V0,z0){let y0=W.convert(m.format,m.colorSpace),H0=W.convert(m.type),E0=V(m.internalFormat,y0,H0,m.normalized,m.colorSpace),I0=Z.get(C),s0=Z.get(m);if(s0.__renderTarget=C,!I0.__hasExternalTextures){let A0=Math.max(1,C.width>>z0),k0=Math.max(1,C.height>>z0);if(V0===J.TEXTURE_3D||V0===J.TEXTURE_2D_ARRAY)$.texImage3D(V0,z0,E0,A0,k0,C.depth,0,y0,H0,null);else $.texImage2D(V0,z0,E0,A0,k0,0,y0,H0,null)}if($.bindFramebuffer(J.FRAMEBUFFER,S),l(C))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,J0,V0,s0.__webglTexture,0,gJ(C));else if(V0===J.TEXTURE_2D||V0>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&V0<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,J0,V0,s0.__webglTexture,z0);$.bindFramebuffer(J.FRAMEBUFFER,null)}function O0(S,C,m){if(J.bindRenderbuffer(J.RENDERBUFFER,S),C.depthBuffer){let J0=C.depthTexture,V0=J0&&J0.isDepthTexture?J0.type:null,z0=L(C.stencilBuffer,V0),y0=C.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(l(C))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,gJ(C),z0,C.width,C.height);else if(m)J.renderbufferStorageMultisample(J.RENDERBUFFER,gJ(C),z0,C.width,C.height);else J.renderbufferStorage(J.RENDERBUFFER,z0,C.width,C.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,y0,J.RENDERBUFFER,S)}else{let J0=C.textures;for(let V0=0;V0<J0.length;V0++){let z0=J0[V0],y0=W.convert(z0.format,z0.colorSpace),H0=W.convert(z0.type),E0=V(z0.internalFormat,y0,H0,z0.normalized,z0.colorSpace);if(l(C))X.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,gJ(C),E0,C.width,C.height);else if(m)J.renderbufferStorageMultisample(J.RENDERBUFFER,gJ(C),E0,C.width,C.height);else J.renderbufferStorage(J.RENDERBUFFER,E0,C.width,C.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function F0(S,C,m){let J0=C.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,S),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let V0=Z.get(C.depthTexture);if(V0.__renderTarget=C,!V0.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0;if(J0){if(V0.__webglInit===void 0)V0.__webglInit=!0,C.depthTexture.addEventListener("dispose",T);if(V0.__webglTexture===void 0){V0.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,V0.__webglTexture),S0(J.TEXTURE_CUBE_MAP,C.depthTexture);let I0=W.convert(C.depthTexture.format),s0=W.convert(C.depthTexture.type),A0;if(C.depthTexture.format===n7)A0=J.DEPTH_COMPONENT24;else if(C.depthTexture.format===s7)A0=J.DEPTH24_STENCIL8;for(let k0=0;k0<6;k0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+k0,0,A0,C.width,C.height,0,I0,s0,null)}}else x(C.depthTexture,0);let z0=V0.__webglTexture,y0=gJ(C),H0=J0?J.TEXTURE_CUBE_MAP_POSITIVE_X+m:J.TEXTURE_2D,E0=C.depthTexture.format===s7?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(C.depthTexture.format===n7)if(l(C))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,E0,H0,z0,0,y0);else J.framebufferTexture2D(J.FRAMEBUFFER,E0,H0,z0,0);else if(C.depthTexture.format===s7)if(l(C))X.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,E0,H0,z0,0,y0);else J.framebufferTexture2D(J.FRAMEBUFFER,E0,H0,z0,0);else throw Error("THREE.WebGLTextures: Unknown depthTexture format.")}function X0(S){let C=Z.get(S),m=S.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==S.depthTexture){let J0=S.depthTexture;if(C.__depthDisposeCallback)C.__depthDisposeCallback();if(J0){let V0=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,J0.removeEventListener("dispose",V0)};J0.addEventListener("dispose",V0),C.__depthDisposeCallback=V0}C.__boundDepthTexture=J0}if(S.depthTexture&&!C.__autoAllocateDepthBuffer)if(m)for(let J0=0;J0<6;J0++)F0(C.__webglFramebuffer[J0],S,J0);else{let J0=S.texture.mipmaps;if(J0&&J0.length>0)F0(C.__webglFramebuffer[0],S,0);else F0(C.__webglFramebuffer,S,0)}else if(m){C.__webglDepthbuffer=[];for(let J0=0;J0<6;J0++)if($.bindFramebuffer(J.FRAMEBUFFER,C.__webglFramebuffer[J0]),C.__webglDepthbuffer[J0]===void 0)C.__webglDepthbuffer[J0]=J.createRenderbuffer(),O0(C.__webglDepthbuffer[J0],S,!1);else{let V0=S.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,z0=C.__webglDepthbuffer[J0];J.bindRenderbuffer(J.RENDERBUFFER,z0),J.framebufferRenderbuffer(J.FRAMEBUFFER,V0,J.RENDERBUFFER,z0)}}else{let J0=S.texture.mipmaps;if(J0&&J0.length>0)$.bindFramebuffer(J.FRAMEBUFFER,C.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,C.__webglFramebuffer);if(C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=J.createRenderbuffer(),O0(C.__webglDepthbuffer,S,!1);else{let V0=S.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,z0=C.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,z0),J.framebufferRenderbuffer(J.FRAMEBUFFER,V0,J.RENDERBUFFER,z0)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function _0(S,C,m){let J0=Z.get(S);if(C!==void 0)r(J0.__webglFramebuffer,S,S.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(m!==void 0)X0(S)}function c0(S){let C=S.texture,m=Z.get(S),J0=Z.get(C);S.addEventListener("dispose",B);let V0=S.textures,z0=S.isWebGLCubeRenderTarget===!0,y0=V0.length>1;if(!y0){if(J0.__webglTexture===void 0)J0.__webglTexture=J.createTexture();J0.__version=C.version,Y.memory.textures++}if(z0){m.__webglFramebuffer=[];for(let H0=0;H0<6;H0++)if(C.mipmaps&&C.mipmaps.length>0){m.__webglFramebuffer[H0]=[];for(let E0=0;E0<C.mipmaps.length;E0++)m.__webglFramebuffer[H0][E0]=J.createFramebuffer()}else m.__webglFramebuffer[H0]=J.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){m.__webglFramebuffer=[];for(let H0=0;H0<C.mipmaps.length;H0++)m.__webglFramebuffer[H0]=J.createFramebuffer()}else m.__webglFramebuffer=J.createFramebuffer();if(y0)for(let H0=0,E0=V0.length;H0<E0;H0++){let I0=Z.get(V0[H0]);if(I0.__webglTexture===void 0)I0.__webglTexture=J.createTexture(),Y.memory.textures++}if(S.samples>0&&l(S)===!1){m.__webglMultisampledFramebuffer=J.createFramebuffer(),m.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,m.__webglMultisampledFramebuffer);for(let H0=0;H0<V0.length;H0++){let E0=V0[H0];m.__webglColorRenderbuffer[H0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,m.__webglColorRenderbuffer[H0]);let I0=W.convert(E0.format,E0.colorSpace),s0=W.convert(E0.type),A0=V(E0.internalFormat,I0,s0,E0.normalized,E0.colorSpace,S.isXRRenderTarget===!0),k0=gJ(S);J.renderbufferStorageMultisample(J.RENDERBUFFER,k0,A0,S.width,S.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+H0,J.RENDERBUFFER,m.__webglColorRenderbuffer[H0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),S.depthBuffer)m.__webglDepthRenderbuffer=J.createRenderbuffer(),O0(m.__webglDepthRenderbuffer,S,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(z0){$.bindTexture(J.TEXTURE_CUBE_MAP,J0.__webglTexture),S0(J.TEXTURE_CUBE_MAP,C);for(let H0=0;H0<6;H0++)if(C.mipmaps&&C.mipmaps.length>0)for(let E0=0;E0<C.mipmaps.length;E0++)r(m.__webglFramebuffer[H0][E0],S,C,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,E0);else r(m.__webglFramebuffer[H0],S,C,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+H0,0);if(E(C))M(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(y0){for(let H0=0,E0=V0.length;H0<E0;H0++){let I0=V0[H0],s0=Z.get(I0),A0=J.TEXTURE_2D;if(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)A0=S.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(A0,s0.__webglTexture),S0(A0,I0),r(m.__webglFramebuffer,S,I0,J.COLOR_ATTACHMENT0+H0,A0,0),E(I0))M(A0)}$.unbindTexture()}else{let H0=J.TEXTURE_2D;if(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)H0=S.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(H0,J0.__webglTexture),S0(H0,C),C.mipmaps&&C.mipmaps.length>0)for(let E0=0;E0<C.mipmaps.length;E0++)r(m.__webglFramebuffer[E0],S,C,J.COLOR_ATTACHMENT0,H0,E0);else r(m.__webglFramebuffer,S,C,J.COLOR_ATTACHMENT0,H0,0);if(E(C))M(H0);$.unbindTexture()}if(S.depthBuffer)X0(S)}function EJ(S){let C=S.textures;for(let m=0,J0=C.length;m<J0;m++){let V0=C[m];if(E(V0)){let z0=k(S),y0=Z.get(V0).__webglTexture;$.bindTexture(z0,y0),M(z0),$.unbindTexture()}}}let g0=[],PJ=[];function _J(S){if(S.samples>0){if(l(S)===!1){let{textures:C,width:m,height:J0}=S,V0=J.COLOR_BUFFER_BIT,z0=S.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,y0=Z.get(S),H0=C.length>1;if(H0)for(let I0=0;I0<C.length;I0++)$.bindFramebuffer(J.FRAMEBUFFER,y0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+I0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,y0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+I0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,y0.__webglMultisampledFramebuffer);let E0=S.texture.mipmaps;if(E0&&E0.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,y0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,y0.__webglFramebuffer);for(let I0=0;I0<C.length;I0++){if(S.resolveDepthBuffer){if(S.depthBuffer)V0|=J.DEPTH_BUFFER_BIT;if(S.stencilBuffer&&S.resolveStencilBuffer)V0|=J.STENCIL_BUFFER_BIT}if(H0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,y0.__webglColorRenderbuffer[I0]);let s0=Z.get(C[I0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,s0,0)}if(J.blitFramebuffer(0,0,m,J0,0,0,m,J0,V0,J.NEAREST),H===!0){if(g0.length=0,PJ.length=0,g0.push(J.COLOR_ATTACHMENT0+I0),S.depthBuffer&&S.storeMultisampledDepthBuffer===!1)g0.push(z0),PJ.push(z0),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,PJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,g0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),H0)for(let I0=0;I0<C.length;I0++){$.bindFramebuffer(J.FRAMEBUFFER,y0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+I0,J.RENDERBUFFER,y0.__webglColorRenderbuffer[I0]);let s0=Z.get(C[I0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,y0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+I0,J.TEXTURE_2D,s0,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,y0.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.storeMultisampledDepthBuffer===!1&&H){let C=S.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[C])}}}function gJ(S){return Math.min(K.maxSamples,S.samples)}function l(S){let C=Z.get(S);return S.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function nJ(S){let C=Y.render.frame;if(G.get(S)!==C)G.set(S,C),S.update()}function NJ(S,C){let{colorSpace:m,format:J0,type:V0}=S;if(S.isCompressedTexture===!0||S.isVideoTexture===!0)return C;if(m!==d8&&m!==o7)if(qJ.getTransfer(m)===lJ){if(J0!==j9||V0!==B9)r0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else $J("WebGLTextures: Unsupported texture color space:",m);return C}function VJ(S){if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement)U.width=S.naturalWidth||S.width,U.height=S.naturalHeight||S.height;else if(typeof VideoFrame<"u"&&S instanceof VideoFrame)U.width=S.displayWidth,U.height=S.displayHeight;else U.width=S.width,U.height=S.height;return U}this.allocateTextureUnit=u,this.resetTextureUnits=Z0,this.getTextureUnits=v,this.setTextureUnits=y,this.setTexture2D=x,this.setTexture2DArray=h,this.setTexture3D=f,this.setTextureCube=g,this.rebindTextures=_0,this.setupRenderTarget=c0,this.updateRenderTargetMipmap=EJ,this.updateMultisampleRenderTarget=_J,this.setupDepthRenderbuffer=X0,this.setupFrameBufferTexture=r,this.useMultisampledRTT=l,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function mO(J,Q){function $(Z,K=o7){let W,Y=qJ.getTransfer(K);if(Z===B9)return J.UNSIGNED_BYTE;if(Z===MW)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===kW)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===XU)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===HU)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===WU)return J.BYTE;if(Z===YU)return J.SHORT;if(Z===Q$)return J.UNSIGNED_SHORT;if(Z===BW)return J.INT;if(Z===M7)return J.UNSIGNED_INT;if(Z===t9)return J.FLOAT;if(Z===R8)return J.HALF_FLOAT;if(Z===UU)return J.ALPHA;if(Z===NU)return J.RGB;if(Z===j9)return J.RGBA;if(Z===n7)return J.DEPTH_COMPONENT;if(Z===s7)return J.DEPTH_STENCIL;if(Z===GU)return J.RED;if(Z===CW)return J.RED_INTEGER;if(Z===i7)return J.RG;if(Z===PW)return J.RG_INTEGER;if(Z===IW)return J.RGBA_INTEGER;if(Z===wZ||Z===SZ||Z===jZ||Z===yZ)if(Y===lJ)if(W=Q.get("WEBGL_compressed_texture_s3tc_srgb"),W!==null){if(Z===wZ)return W.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===SZ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===jZ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===yZ)return W.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(W=Q.get("WEBGL_compressed_texture_s3tc"),W!==null){if(Z===wZ)return W.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===SZ)return W.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===jZ)return W.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===yZ)return W.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===zW||Z===AW||Z===TW||Z===_W)if(W=Q.get("WEBGL_compressed_texture_pvrtc"),W!==null){if(Z===zW)return W.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===AW)return W.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===TW)return W.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===_W)return W.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===wW||Z===SW||Z===jW||Z===yW||Z===vW||Z===vZ||Z===fW)if(W=Q.get("WEBGL_compressed_texture_etc"),W!==null){if(Z===wW||Z===SW)return Y===lJ?W.COMPRESSED_SRGB8_ETC2:W.COMPRESSED_RGB8_ETC2;if(Z===jW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:W.COMPRESSED_RGBA8_ETC2_EAC;if(Z===yW)return W.COMPRESSED_R11_EAC;if(Z===vW)return W.COMPRESSED_SIGNED_R11_EAC;if(Z===vZ)return W.COMPRESSED_RG11_EAC;if(Z===fW)return W.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===bW||Z===hW||Z===xW||Z===gW||Z===pW||Z===mW||Z===lW||Z===uW||Z===dW||Z===cW||Z===nW||Z===sW||Z===iW||Z===oW)if(W=Q.get("WEBGL_compressed_texture_astc"),W!==null){if(Z===bW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:W.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===hW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:W.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===xW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:W.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===gW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:W.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===pW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:W.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===mW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:W.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===lW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:W.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===uW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:W.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===dW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:W.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===cW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:W.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===nW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:W.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===sW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:W.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===iW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:W.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===oW)return Y===lJ?W.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:W.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===aW||Z===rW||Z===tW)if(W=Q.get("EXT_texture_compression_bptc"),W!==null){if(Z===aW)return Y===lJ?W.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:W.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===rW)return W.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===tW)return W.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===eW||Z===JY||Z===fZ||Z===QY)if(W=Q.get("EXT_texture_compression_rgtc"),W!==null){if(Z===eW)return W.COMPRESSED_RED_RGTC1_EXT;if(Z===JY)return W.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===fZ)return W.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===QY)return W.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===r6)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var lO=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uO=`
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

}`;class O5{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new sZ(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new J8({vertexShader:lO,fragmentShader:uO,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new C0(new RJ(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class R5 extends M9{constructor(J,Q){super();let $=this,Z=null,K=1,W=null,Y="local-floor",X=1,H=null,U=null,G=null,F=null,N=null,q=null,O=typeof XRWebGLBinding<"u",D=new O5,R={},E=Q.getContextAttributes(),M=null,k=null,V=[],L=[],P=new q0,T=null,B=null,z=new G8;z.viewport=new mJ;let d=new G8;d.viewport=new mJ;let b=[z,d],n=new TY,Z0=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($0){let j=V[$0];if(j===void 0)j=new K$,V[$0]=j;return j.getTargetRaySpace()},this.getControllerGrip=function($0){let j=V[$0];if(j===void 0)j=new K$,V[$0]=j;return j.getGripSpace()},this.getHand=function($0){let j=V[$0];if(j===void 0)j=new K$,V[$0]=j;return j.getHandSpace()};function y($0){let j=L.indexOf($0.inputSource);if(j===-1)return;let p=V[j];if(p!==void 0)p.update($0.inputSource,$0.frame,H||W),p.dispatchEvent({type:$0.type,data:$0.inputSource})}function u(){Z.removeEventListener("select",y),Z.removeEventListener("selectstart",y),Z.removeEventListener("selectend",y),Z.removeEventListener("squeeze",y),Z.removeEventListener("squeezestart",y),Z.removeEventListener("squeezeend",y),Z.removeEventListener("end",u),Z.removeEventListener("inputsourceschange",I);for(let $0=0;$0<V.length;$0++){let j=L[$0];if(j===null)continue;L[$0]=null,V[$0].disconnect(j)}Z0=null,v=null,D.reset();for(let $0 in R)delete R[$0];if(J.setRenderTarget(M),N=null,F=null,G=null,Z=null,k=null,S0.stop(),$.isPresenting=!1,J.setPixelRatio(T),J.setSize(P.width,P.height,!1),B!==null){let $0=B.camera;$0.fov=B.fov,$0.zoom=B.zoom,$0.updateProjectionMatrix(),B=null}$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($0){if(K=$0,$.isPresenting===!0)r0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($0){if(Y=$0,$.isPresenting===!0)r0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return H||W},this.setReferenceSpace=function($0){H=$0},this.getBaseLayer=function(){return F!==null?F:N},this.getBinding=function(){if(G===null&&O)G=new XRWebGLBinding(Z,Q);return G},this.getFrame=function(){return q},this.getSession=function(){return Z},this.setSession=async function($0){if(Z=$0,Z!==null){if(M=J.getRenderTarget(),Z.addEventListener("select",y),Z.addEventListener("selectstart",y),Z.addEventListener("selectend",y),Z.addEventListener("squeeze",y),Z.addEventListener("squeezestart",y),Z.addEventListener("squeezeend",y),Z.addEventListener("end",u),Z.addEventListener("inputsourceschange",I),E.xrCompatible!==!0)await Q.makeXRCompatible();if(T=J.getPixelRatio(),J.getSize(P),!(O&&("createProjectionLayer"in XRWebGLBinding.prototype))){let p={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:K};N=new XRWebGLLayer(Z,Q,p),Z.updateRenderState({baseLayer:N}),J.setPixelRatio(1),J.setSize(N.framebufferWidth,N.framebufferHeight,!1),k=new Z8(N.framebufferWidth,N.framebufferHeight,{format:j9,type:B9,colorSpace:J.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:N.ignoreDepthValues===!1,resolveStencilBuffer:N.ignoreDepthValues===!1,storeMultisampledDepthBuffer:N.ignoreDepthValues===!1,storeMultisampledStencilBuffer:N.ignoreDepthValues===!1})}else{let p=null,o=null,K0=null;if(E.depth)K0=E.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,p=E.stencil?s7:n7,o=E.stencil?r6:M7;let r={colorFormat:Q.RGBA8,depthFormat:K0,scaleFactor:K};G=this.getBinding(),F=G.createProjectionLayer(r),Z.updateRenderState({layers:[F]}),J.setPixelRatio(1),J.setSize(F.textureWidth,F.textureHeight,!1),k=new Z8(F.textureWidth,F.textureHeight,{format:j9,type:B9,depthTexture:new Q6(F.textureWidth,F.textureHeight,o,void 0,void 0,void 0,void 0,void 0,void 0,p),stencilBuffer:E.stencil,colorSpace:J.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:F.ignoreDepthValues===!1,resolveStencilBuffer:F.ignoreDepthValues===!1,storeMultisampledDepthBuffer:F.ignoreDepthValues===!1,storeMultisampledStencilBuffer:F.ignoreDepthValues===!1})}k.isXRRenderTarget=!0,this.setFoveation(X),H=null,W=await Z.requestReferenceSpace(Y),S0.setContext(Z),S0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return D.getDepthTexture()};function I($0){for(let j=0;j<$0.removed.length;j++){let p=$0.removed[j],o=L.indexOf(p);if(o>=0)L[o]=null,V[o].disconnect(p)}for(let j=0;j<$0.added.length;j++){let p=$0.added[j],o=L.indexOf(p);if(o===-1){for(let r=0;r<V.length;r++)if(r>=L.length){L.push(p),o=r;break}else if(L[r]===null){L[r]=p,o=r;break}if(o===-1)break}let K0=V[o];if(K0)K0.connect(p)}}let x=new _,h=new _;function f($0,j,p){x.setFromMatrixPosition(j.matrixWorld),h.setFromMatrixPosition(p.matrixWorld);let o=x.distanceTo(h),K0=j.projectionMatrix.elements,r=p.projectionMatrix.elements,O0=K0[14]/(K0[10]-1),F0=K0[14]/(K0[10]+1),X0=(K0[9]+1)/K0[5],_0=(K0[9]-1)/K0[5],c0=(K0[8]-1)/K0[0],EJ=(r[8]+1)/r[0],g0=O0*c0,PJ=O0*EJ,_J=o/(-c0+EJ),gJ=_J*-c0;if(j.matrixWorld.decompose($0.position,$0.quaternion,$0.scale),$0.translateX(gJ),$0.translateZ(_J),$0.matrixWorld.compose($0.position,$0.quaternion,$0.scale),$0.matrixWorldInverse.copy($0.matrixWorld).invert(),K0[10]===-1)$0.projectionMatrix.copy(j.projectionMatrix),$0.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let l=O0+_J,nJ=F0+_J,NJ=g0-gJ,VJ=PJ+(o-gJ),S=X0*F0/nJ*l,C=_0*F0/nJ*l;$0.projectionMatrix.makePerspective(NJ,VJ,S,C,l,nJ),$0.projectionMatrixInverse.copy($0.projectionMatrix).invert()}}function g($0,j){if(j===null)$0.matrixWorld.copy($0.matrix);else $0.matrixWorld.multiplyMatrices(j.matrixWorld,$0.matrix);$0.matrixWorldInverse.copy($0.matrixWorld).invert()}this.updateCamera=function($0){if(Z===null)return;let{near:j,far:p}=$0;if(D.texture!==null){if(D.depthNear>0)j=D.depthNear;if(D.depthFar>0)p=D.depthFar}if(n.near=d.near=z.near=j,n.far=d.far=z.far=p,Z0!==n.near||v!==n.far)Z.updateRenderState({depthNear:n.near,depthFar:n.far}),Z0=n.near,v=n.far;n.layers.mask=$0.layers.mask|6,z.layers.mask=n.layers.mask&-5,d.layers.mask=n.layers.mask&-3;let o=$0.parent,K0=n.cameras;g(n,o);for(let r=0;r<K0.length;r++)g(K0[r],o);if(K0.length===2)f(n,z,d);else n.projectionMatrix.copy(z.projectionMatrix);if(B===null&&$0.isPerspectiveCamera)B={camera:$0,fov:$0.fov,zoom:$0.zoom};Y0($0,n,o)};function Y0($0,j,p){if(p===null)$0.matrix.copy(j.matrixWorld);else $0.matrix.copy(p.matrixWorld),$0.matrix.invert(),$0.matrix.multiply(j.matrixWorld);if($0.matrix.decompose($0.position,$0.quaternion,$0.scale),$0.updateMatrixWorld(!0),$0.projectionMatrix.copy(j.projectionMatrix),$0.projectionMatrixInverse.copy(j.projectionMatrixInverse),$0.isPerspectiveCamera)$0.fov=p7*2*Math.atan(1/$0.projectionMatrix.elements[5]),$0.zoom=1}this.getCamera=function(){return n},this.getFoveation=function(){if(F===null&&N===null)return;return X},this.setFoveation=function($0){if(X=$0,F!==null)F.fixedFoveation=$0;if(N!==null&&N.fixedFoveation!==void 0)N.fixedFoveation=$0},this.hasDepthSensing=function(){return D.texture!==null},this.getDepthSensingMesh=function(){return D.getMesh(n)},this.getCameraTexture=function($0){return R[$0]};let G0=null;function M0($0,j){if(U=j.getViewerPose(H||W),q=j,U!==null){let p=U.views;if(N!==null)J.setRenderTargetFramebuffer(k,N.framebuffer),J.setRenderTarget(k);let o=!1;if(p.length!==n.cameras.length)n.cameras.length=0,o=!0;for(let F0=0;F0<p.length;F0++){let X0=p[F0],_0=null;if(N!==null)_0=N.getViewport(X0);else{let EJ=G.getViewSubImage(F,X0);if(_0=EJ.viewport,F0===0)J.setRenderTargetTextures(k,EJ.colorTexture,EJ.depthStencilTexture),J.setRenderTarget(k)}let c0=b[F0];if(c0===void 0)c0=new G8,c0.layers.enable(F0),c0.viewport=new mJ,b[F0]=c0;if(c0.matrix.fromArray(X0.transform.matrix),c0.matrix.decompose(c0.position,c0.quaternion,c0.scale),c0.projectionMatrix.fromArray(X0.projectionMatrix),c0.projectionMatrixInverse.copy(c0.projectionMatrix).invert(),c0.viewport.set(_0.x,_0.y,_0.width,_0.height),F0===0)n.matrix.copy(c0.matrix),n.matrix.decompose(n.position,n.quaternion,n.scale);if(o===!0)n.cameras.push(c0)}let K0=Z.enabledFeatures;if(K0&&K0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&O){G=$.getBinding();let F0=G.getDepthInformation(p[0]);if(F0&&F0.isValid&&F0.texture)D.init(F0,Z.renderState)}if(K0&&K0.includes("camera-access")&&O){J.state.unbindTexture(),G=$.getBinding();for(let F0=0;F0<p.length;F0++){let X0=p[F0].camera;if(X0){let _0=R[X0];if(!_0)_0=new sZ,R[X0]=_0;let c0=G.getCameraImage(X0);_0.sourceTexture=c0}}}}for(let p=0;p<V.length;p++){let o=L[p],K0=V[p];if(o!==null&&K0!==void 0)K0.update(o,j,H||W)}if(G0)G0($0,j);if(j.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:j});q=null}let S0=new K5;S0.setAnimationLoop(M0),this.setAnimationLoop=function($0){G0=$0},this.dispose=function(){}}}var dO=new QJ,L5=new XJ;L5.set(-1,0,0,0,1,0,0,0,1);function cO(J,Q){function $(R,E){if(R.matrixAutoUpdate===!0)R.updateMatrix();E.value.copy(R.matrix)}function Z(R,E){if(E.color.getRGB(R.fogColor.value,VY(J)),E.isFog)R.fogNear.value=E.near,R.fogFar.value=E.far;else if(E.isFogExp2)R.fogDensity.value=E.density}function K(R,E,M,k,V){if(E.isNodeMaterial)E.uniformsNeedUpdate=!1;else if(E.isMeshBasicMaterial)W(R,E);else if(E.isMeshLambertMaterial){if(W(R,E),E.envMap)R.envMapIntensity.value=E.envMapIntensity}else if(E.isMeshToonMaterial)W(R,E),F(R,E);else if(E.isMeshPhongMaterial){if(W(R,E),G(R,E),E.envMap)R.envMapIntensity.value=E.envMapIntensity}else if(E.isMeshStandardMaterial){if(W(R,E),N(R,E),E.isMeshPhysicalMaterial)q(R,E,V)}else if(E.isMeshMatcapMaterial)W(R,E),O(R,E);else if(E.isMeshDepthMaterial)W(R,E);else if(E.isMeshDistanceMaterial)W(R,E),D(R,E);else if(E.isMeshNormalMaterial)W(R,E);else if(E.isLineBasicMaterial){if(Y(R,E),E.isLineDashedMaterial)X(R,E)}else if(E.isPointsMaterial)H(R,E,M,k);else if(E.isSpriteMaterial)U(R,E);else if(E.isShadowMaterial)R.color.value.copy(E.color),R.opacity.value=E.opacity;else if(E.isShaderMaterial)E.uniformsNeedUpdate=!1}function W(R,E){if(R.opacity.value=E.opacity,E.color)R.diffuse.value.copy(E.color);if(E.emissive)R.emissive.value.copy(E.emissive).multiplyScalar(E.emissiveIntensity);if(E.map)R.map.value=E.map,$(E.map,R.mapTransform);if(E.alphaMap)R.alphaMap.value=E.alphaMap,$(E.alphaMap,R.alphaMapTransform);if(E.bumpMap){if(R.bumpMap.value=E.bumpMap,$(E.bumpMap,R.bumpMapTransform),R.bumpScale.value=E.bumpScale,E.side===D8)R.bumpScale.value*=-1}if(E.normalMap){if(R.normalMap.value=E.normalMap,$(E.normalMap,R.normalMapTransform),R.normalScale.value.copy(E.normalScale),E.side===D8)R.normalScale.value.negate()}if(E.displacementMap)R.displacementMap.value=E.displacementMap,$(E.displacementMap,R.displacementMapTransform),R.displacementScale.value=E.displacementScale,R.displacementBias.value=E.displacementBias;if(E.emissiveMap)R.emissiveMap.value=E.emissiveMap,$(E.emissiveMap,R.emissiveMapTransform);if(E.specularMap)R.specularMap.value=E.specularMap,$(E.specularMap,R.specularMapTransform);if(E.alphaTest>0)R.alphaTest.value=E.alphaTest;let M=Q.get(E),k=M.envMap,V=M.envMapRotation;if(k){if(R.envMap.value=k,R.envMapRotation.value.setFromMatrix4(dO.makeRotationFromEuler(V)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1)R.envMapRotation.value.premultiply(L5);R.reflectivity.value=E.reflectivity,R.ior.value=E.ior,R.refractionRatio.value=E.refractionRatio}if(E.lightMap)R.lightMap.value=E.lightMap,R.lightMapIntensity.value=E.lightMapIntensity,$(E.lightMap,R.lightMapTransform);if(E.aoMap)R.aoMap.value=E.aoMap,R.aoMapIntensity.value=E.aoMapIntensity,$(E.aoMap,R.aoMapTransform)}function Y(R,E){if(R.diffuse.value.copy(E.color),R.opacity.value=E.opacity,E.map)R.map.value=E.map,$(E.map,R.mapTransform)}function X(R,E){R.dashSize.value=E.dashSize,R.totalSize.value=E.dashSize+E.gapSize,R.scale.value=E.scale}function H(R,E,M,k){if(R.diffuse.value.copy(E.color),R.opacity.value=E.opacity,R.size.value=E.size*M,R.scale.value=k*0.5,E.map)R.map.value=E.map,$(E.map,R.uvTransform);if(E.alphaMap)R.alphaMap.value=E.alphaMap,$(E.alphaMap,R.alphaMapTransform);if(E.alphaTest>0)R.alphaTest.value=E.alphaTest}function U(R,E){if(R.diffuse.value.copy(E.color),R.opacity.value=E.opacity,R.rotation.value=E.rotation,E.map)R.map.value=E.map,$(E.map,R.mapTransform);if(E.alphaMap)R.alphaMap.value=E.alphaMap,$(E.alphaMap,R.alphaMapTransform);if(E.alphaTest>0)R.alphaTest.value=E.alphaTest}function G(R,E){R.specular.value.copy(E.specular),R.shininess.value=Math.max(E.shininess,0.0001)}function F(R,E){if(E.gradientMap)R.gradientMap.value=E.gradientMap}function N(R,E){if(R.metalness.value=E.metalness,E.metalnessMap)R.metalnessMap.value=E.metalnessMap,$(E.metalnessMap,R.metalnessMapTransform);if(R.roughness.value=E.roughness,E.roughnessMap)R.roughnessMap.value=E.roughnessMap,$(E.roughnessMap,R.roughnessMapTransform);if(E.envMap)R.envMapIntensity.value=E.envMapIntensity}function q(R,E,M){if(R.ior.value=E.ior,E.sheen>0){if(R.sheenColor.value.copy(E.sheenColor).multiplyScalar(E.sheen),R.sheenRoughness.value=E.sheenRoughness,E.sheenColorMap)R.sheenColorMap.value=E.sheenColorMap,$(E.sheenColorMap,R.sheenColorMapTransform);if(E.sheenRoughnessMap)R.sheenRoughnessMap.value=E.sheenRoughnessMap,$(E.sheenRoughnessMap,R.sheenRoughnessMapTransform)}if(E.clearcoat>0){if(R.clearcoat.value=E.clearcoat,R.clearcoatRoughness.value=E.clearcoatRoughness,E.clearcoatMap)R.clearcoatMap.value=E.clearcoatMap,$(E.clearcoatMap,R.clearcoatMapTransform);if(E.clearcoatRoughnessMap)R.clearcoatRoughnessMap.value=E.clearcoatRoughnessMap,$(E.clearcoatRoughnessMap,R.clearcoatRoughnessMapTransform);if(E.clearcoatNormalMap){if(R.clearcoatNormalMap.value=E.clearcoatNormalMap,$(E.clearcoatNormalMap,R.clearcoatNormalMapTransform),R.clearcoatNormalScale.value.copy(E.clearcoatNormalScale),E.side===D8)R.clearcoatNormalScale.value.negate()}}if(E.dispersion>0)R.dispersion.value=E.dispersion;if(E.retroreflectivity>0)R.retroreflectivity.value=E.retroreflectivity;if(E.iridescence>0){if(R.iridescence.value=E.iridescence,R.iridescenceIOR.value=E.iridescenceIOR,R.iridescenceThicknessMinimum.value=E.iridescenceThicknessRange[0],R.iridescenceThicknessMaximum.value=E.iridescenceThicknessRange[1],E.iridescenceMap)R.iridescenceMap.value=E.iridescenceMap,$(E.iridescenceMap,R.iridescenceMapTransform);if(E.iridescenceThicknessMap)R.iridescenceThicknessMap.value=E.iridescenceThicknessMap,$(E.iridescenceThicknessMap,R.iridescenceThicknessMapTransform)}if(E.transmission>0){if(R.transmission.value=E.transmission,R.transmissionSamplerMap.value=M.texture,R.transmissionSamplerSize.value.set(M.width,M.height),E.transmissionMap)R.transmissionMap.value=E.transmissionMap,$(E.transmissionMap,R.transmissionMapTransform);if(R.thickness.value=E.thickness,E.thicknessMap)R.thicknessMap.value=E.thicknessMap,$(E.thicknessMap,R.thicknessMapTransform);R.attenuationDistance.value=E.attenuationDistance,R.attenuationColor.value.copy(E.attenuationColor)}if(E.anisotropy>0){if(R.anisotropyVector.value.set(E.anisotropy*Math.cos(E.anisotropyRotation),E.anisotropy*Math.sin(E.anisotropyRotation)),E.anisotropyMap)R.anisotropyMap.value=E.anisotropyMap,$(E.anisotropyMap,R.anisotropyMapTransform)}if(R.specularIntensity.value=E.specularIntensity,R.specularColor.value.copy(E.specularColor),E.specularColorMap)R.specularColorMap.value=E.specularColorMap,$(E.specularColorMap,R.specularColorMapTransform);if(E.specularIntensityMap)R.specularIntensityMap.value=E.specularIntensityMap,$(E.specularIntensityMap,R.specularIntensityMapTransform)}function O(R,E){if(E.matcap)R.matcap.value=E.matcap}function D(R,E){let M=Q.get(E).light;R.referencePosition.value.setFromMatrixPosition(M.matrixWorld),R.nearDistance.value=M.shadow.camera.near,R.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:K}}function nO(J,Q,$,Z){let K={},W={},Y=[],X=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function H(V,L){let P=L.program;Z.uniformBlockBinding(V,P)}function U(V,L){let P=K[V.id];if(P===void 0)R(V),P=G(V),K[V.id]=P,V.addEventListener("dispose",M);let T=L.program;Z.updateUBOMapping(V,T);let B=Q.render.frame;if(W[V.id]!==B)N(V),W[V.id]=B}function G(V){let L=F();V.__bindingPointIndex=L;let P=J.createBuffer(),T=V.__size,B=V.usage;return J.bindBuffer(J.UNIFORM_BUFFER,P),J.bufferData(J.UNIFORM_BUFFER,T,B),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,L,P),P}function F(){for(let V=0;V<X;V++)if(Y.indexOf(V)===-1)return Y.push(V),V;return $J("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function N(V){let L=K[V.id],P=V.uniforms,T=V.__cache;J.bindBuffer(J.UNIFORM_BUFFER,L);for(let B=0,z=P.length;B<z;B++){let d=P[B];if(Array.isArray(d))for(let b=0,n=d.length;b<n;b++)q(d[b],B,b,T);else q(d,B,0,T)}J.bindBuffer(J.UNIFORM_BUFFER,null)}function q(V,L,P,T){if(D(V,L,P,T)===!0){let{__offset:B,value:z}=V;if(Array.isArray(z)){let d=0;for(let b=0;b<z.length;b++){let n=z[b],Z0=E(n);if(O(n,V.__data,d),typeof n!=="number"&&typeof n!=="boolean"&&!n.isMatrix3&&!ArrayBuffer.isView(n))d+=Z0.storage/Float32Array.BYTES_PER_ELEMENT}}else O(z,V.__data,0);J.bufferSubData(J.UNIFORM_BUFFER,B,V.__data)}}function O(V,L,P){if(typeof V==="number"||typeof V==="boolean")L[0]=V;else if(V.isMatrix3)L[0]=V.elements[0],L[1]=V.elements[1],L[2]=V.elements[2],L[3]=0,L[4]=V.elements[3],L[5]=V.elements[4],L[6]=V.elements[5],L[7]=0,L[8]=V.elements[6],L[9]=V.elements[7],L[10]=V.elements[8],L[11]=0;else if(ArrayBuffer.isView(V))L.set(new V.constructor(V.buffer,V.byteOffset,L.length));else V.toArray(L,P)}function D(V,L,P,T){let B=V.value,z=L+"_"+P;if(T[z]===void 0){if(typeof B==="number"||typeof B==="boolean")T[z]=B;else if(ArrayBuffer.isView(B))T[z]=B.slice();else T[z]=B.clone();return!0}else{let d=T[z];if(typeof B==="number"||typeof B==="boolean"){if(d!==B)return T[z]=B,!0}else if(ArrayBuffer.isView(B))return!0;else if(d.equals(B)===!1)return d.copy(B),!0}return!1}function R(V){let L=V.uniforms,P=0,T=16;for(let z=0,d=L.length;z<d;z++){let b=Array.isArray(L[z])?L[z]:[L[z]];for(let n=0,Z0=b.length;n<Z0;n++){let v=b[n],y=Array.isArray(v.value)?v.value:[v.value];for(let u=0,I=y.length;u<I;u++){let x=y[u],h=E(x),f=P%T,g=f%h.boundary,Y0=f+g;if(P+=g,Y0!==0&&T-Y0<h.storage)P+=T-Y0;v.__data=new Float32Array(h.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=P,P+=h.storage}}}let B=P%T;if(B>0)P+=T-B;return V.__size=P,V.__cache={},this}function E(V){let L={boundary:0,storage:0};if(typeof V==="number"||typeof V==="boolean")L.boundary=4,L.storage=4;else if(V.isVector2)L.boundary=8,L.storage=8;else if(V.isVector3||V.isColor)L.boundary=16,L.storage=12;else if(V.isVector4)L.boundary=16,L.storage=16;else if(V.isMatrix3)L.boundary=48,L.storage=48;else if(V.isMatrix4)L.boundary=64,L.storage=64;else if(V.isTexture)r0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else if(ArrayBuffer.isView(V))L.boundary=16,L.storage=V.byteLength;else r0("WebGLRenderer: Unsupported uniform value type.",V);return L}function M(V){let L=V.target;L.removeEventListener("dispose",M);let P=Y.indexOf(L.__bindingPointIndex);Y.splice(P,1),J.deleteBuffer(K[L.id]),delete K[L.id],delete W[L.id]}function k(){for(let V in K)J.deleteBuffer(K[V]);Y=[],K={},W={}}return{bind:H,update:U,dispose:k}}var sO=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),b9=null;function iO(){if(b9===null)b9=new t7(sO,16,16,i7,R8),b9.name="DFG_LUT",b9.minFilter=X8,b9.magFilter=X8,b9.wrapS=o6,b9.wrapT=o6,b9.generateMipmaps=!1,b9.needsUpdate=!0;return b9}class dY{constructor(J={}){let{canvas:Q=DU(),context:$=null,depth:Z=!0,stencil:K=!1,alpha:W=!1,antialias:Y=!1,premultipliedAlpha:X=!0,preserveDrawingBuffer:H=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:G=!1,reversedDepthBuffer:F=!1,outputBufferType:N=B9}=J;this.isWebGLRenderer=!0;let q;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");q=$.getContextAttributes().alpha}else q=W;let O=N,D=new Set([IW,PW,CW]),R=new Set([B9,M7,Q$,r6,MW,kW]),E=new Uint32Array(4),M=new Int32Array(4),k=new _,V=null,L=null,P=[],T=[],B=null;this.domElement=Q,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=V9,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let z=this,d=!1,b=null,n=null,Z0=null,v=null;this._outputColorSpace=$8;let y=0,u=0,I=null,x=-1,h=null,f=new mJ,g=new mJ,Y0=null,G0=new j0(0),M0=0,S0=Q.width,$0=Q.height,j=1,p=null,o=null,K0=new mJ(0,0,S0,$0),r=new mJ(0,0,S0,$0),O0=!1,F0=new e7,X0=!1,_0=!1,c0=new QJ,EJ=new _,g0=new mJ,PJ={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_J=!1;function gJ(){return I===null?j:1}let l=$;function nJ(A,c){return Q.getContext(A,c)}let NJ,VJ,S,C,m,J0,V0,z0,y0,H0,E0,I0,s0,A0,k0,e0,t0,IJ,s,v0,U0,w0,m0;try{let A={alpha:!0,depth:Z,stencil:K,antialias:Y,premultipliedAlpha:X,preserveDrawingBuffer:H,powerPreference:U,failIfMajorPerformanceCaveat:G};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${IH}`);if(Q.addEventListener("webglcontextlost",WJ,!1),Q.addEventListener("webglcontextrestored",dJ,!1),Q.addEventListener("webglcontextcreationerror",SJ,!1),l===null){if(l=nJ("webgl2",A),l===null)if(nJ("webgl2"))throw Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.");else throw Error("THREE.WebGLRenderer: Error creating WebGL context.")}D0()}catch(A){throw Q.removeEventListener("webglcontextlost",WJ,!1),Q.removeEventListener("webglcontextrestored",dJ,!1),Q.removeEventListener("webglcontextcreationerror",SJ,!1),$J("WebGLRenderer: "+A.message),A}function D0(){if(NJ=new Qq(l),NJ.init(),U0=new mO(l,NJ),VJ=new cE(l,NJ,J,U0),S=new gO(l,NJ),VJ.reversedDepthBuffer&&F)S.buffers.depth.setReversed(!0);n=l.createFramebuffer(),Z0=l.createFramebuffer(),v=l.createFramebuffer(),C=new Kq(l),m=new IO,J0=new pO(l,NJ,S,m,VJ,U0,C),V0=new Jq(z),z0=new YF(l),w0=new uE(l,z0),y0=new $q(l,z0,C,w0),H0=new Yq(l,y0,z0,w0,C),IJ=new Wq(l,VJ,J0),k0=new nE(m),E0=new PO(z,V0,NJ,VJ,w0,k0),I0=new cO(z,m),s0=new AO,A0=new yO(NJ),t0=new lE(z,V0,S,H0,q,X),e0=new xO(z,H0,VJ),m0=new nO(l,C,VJ,S),s=new dE(l,NJ,C),v0=new Zq(l,NJ,C),C.programs=E0.programs,z.capabilities=VJ,z.extensions=NJ,z.properties=m,z.renderLists=s0,z.shadowMap=e0,z.state=S,z.info=C}if(O!==B9)B=new Hq(O,Q.width,Q.height,Y,Z,K);let f0=new R5(z,l);this.xr=f0,this.getContext=function(){return l},this.getContextAttributes=function(){return l.getContextAttributes()},this.forceContextLoss=function(){let A=NJ.get("WEBGL_lose_context");if(A)A.loseContext()},this.forceContextRestore=function(){let A=NJ.get("WEBGL_lose_context");if(A)A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){if(A===void 0)return;j=A,this.setSize(S0,$0,!1)},this.getSize=function(A){return A.set(S0,$0)},this.setSize=function(A,c,W0=!0){if(f0.isPresenting){r0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(S0=A,$0=c,Q.width=Math.floor(A*j),Q.height=Math.floor(c*j),W0===!0)Q.style.width=A+"px",Q.style.height=c+"px";if(B!==null)B.setSize(Q.width,Q.height);this.setViewport(0,0,A,c)},this.getDrawingBufferSize=function(A){return A.set(S0*j,$0*j).floor()},this.setDrawingBufferSize=function(A,c,W0){S0=A,$0=c,j=W0,Q.width=Math.floor(A*W0),Q.height=Math.floor(c*W0),this.setViewport(0,0,A,c)},this.setEffects=function(A){if(O===B9){$J("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let c=0;c<A.length;c++)if(A[c].isOutputPass===!0){r0("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(f)},this.getViewport=function(A){return A.copy(K0)},this.setViewport=function(A,c,W0,e){if(A.isVector4)K0.set(A.x,A.y,A.z,A.w);else K0.set(A,c,W0,e);S.viewport(f.copy(K0).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(r)},this.setScissor=function(A,c,W0,e){if(A.isVector4)r.set(A.x,A.y,A.z,A.w);else r.set(A,c,W0,e);S.scissor(g.copy(r).multiplyScalar(j).round())},this.getScissorTest=function(){return O0},this.setScissorTest=function(A){S.setScissorTest(O0=A)},this.setOpaqueSort=function(A){p=A},this.setTransparentSort=function(A){o=A},this.getClearColor=function(A){return A.copy(t0.getClearColor())},this.setClearColor=function(){t0.setClearColor(...arguments)},this.getClearAlpha=function(){return t0.getClearAlpha()},this.setClearAlpha=function(){t0.setClearAlpha(...arguments)},this.clear=function(A=!0,c=!0,W0=!0){let e=0;if(A){let t=!1;if(I!==null){let T0=I.texture.format;t=D.has(T0)}if(t){let T0=I.texture.type,l0=R.has(T0),b0=t0.getClearColor(),i0=t0.getClearAlpha(),n0=b0.r,GJ=b0.g,DJ=b0.b;if(l0)E[0]=n0,E[1]=GJ,E[2]=DJ,E[3]=i0,l.clearBufferuiv(l.COLOR,0,E);else M[0]=n0,M[1]=GJ,M[2]=DJ,M[3]=i0,l.clearBufferiv(l.COLOR,0,M)}else e|=l.COLOR_BUFFER_BIT}if(c)e|=l.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0);if(W0)e|=l.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(e!==0)l.clear(e)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),b=A},this.dispose=function(){Q.removeEventListener("webglcontextlost",WJ,!1),Q.removeEventListener("webglcontextrestored",dJ,!1),Q.removeEventListener("webglcontextcreationerror",SJ,!1),t0.dispose(),s0.dispose(),A0.dispose(),m.dispose(),V0.dispose(),H0.dispose(),w0.dispose(),m0.dispose(),E0.dispose(),f0.dispose(),f0.removeEventListener("sessionstart",V6),f0.removeEventListener("sessionend",V8),a8.stop()};function WJ(A){A.preventDefault(),uQ("WebGLRenderer: Context Lost."),d=!0}function dJ(){uQ("WebGLRenderer: Context Restored."),d=!1;let A=C.autoReset,c=e0.enabled,W0=e0.autoUpdate,e=e0.needsUpdate,t=e0.type;D0(),C.autoReset=A,e0.enabled=c,e0.autoUpdate=W0,e0.needsUpdate=e,e0.type=t}function SJ(A){$J("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function i8(A){let c=A.target;c.removeEventListener("dispose",i8),o8(c)}function o8(A){l9(A),m.remove(A)}function l9(A){let c=m.get(A).programs;if(c!==void 0){if(c.forEach(function(W0){E0.releaseProgram(W0)}),A.isShaderMaterial)E0.releaseShaderCache(A)}}this.renderBufferDirect=function(A,c,W0,e,t,T0){if(c===null)c=PJ;let l0=t.isMesh&&t.matrixWorld.determinantAffine()<0,b0=G9(A,c,W0,e,t);S.setMaterial(e,l0);let i0=W0.index,n0=1;if(e.wireframe===!0){if(i0=y0.getWireframeAttribute(W0),i0===void 0)return;n0=2}let GJ=W0.drawRange,DJ=W0.attributes.position,a0=GJ.start*n0,jJ=(GJ.start+GJ.count)*n0;if(T0!==null)a0=Math.max(a0,T0.start*n0),jJ=Math.min(jJ,(T0.start+T0.count)*n0);if(i0!==null)a0=Math.max(a0,0),jJ=Math.min(jJ,i0.count);else if(DJ!==void 0&&DJ!==null)a0=Math.max(a0,0),jJ=Math.min(jJ,DJ.count);let aJ=jJ-a0;if(aJ<0||aJ===1/0)return;w0.setup(t,e,b0,W0,i0);let AJ,hJ=s;if(i0!==null)AJ=z0.get(i0),hJ=v0,hJ.setIndex(AJ);if(t.isMesh)if(e.wireframe===!0)S.setLineWidth(e.wireframeLinewidth*gJ()),hJ.setMode(l.LINES);else hJ.setMode(l.TRIANGLES);else if(t.isLine){let iJ=e.linewidth;if(iJ===void 0)iJ=1;if(S.setLineWidth(iJ*gJ()),t.isLineSegments)hJ.setMode(l.LINES);else if(t.isLineLoop)hJ.setMode(l.LINE_LOOP);else hJ.setMode(l.LINE_STRIP)}else if(t.isPoints)hJ.setMode(l.POINTS);else if(t.isSprite)hJ.setMode(l.TRIANGLES);if(t.isBatchedMesh)if(!NJ.get("WEBGL_multi_draw")){let{_multiDrawStarts:iJ,_multiDrawCounts:u0,_multiDrawCount:N8}=t,CJ=i0?z0.get(i0).bytesPerElement:1,j8=m.get(e).currentProgram.getUniforms();for(let M8=0;M8<N8;M8++)j8.setValue(l,"_gl_DrawID",M8),hJ.render(iJ[M8]/CJ,u0[M8])}else hJ.renderMultiDraw(t._multiDrawStarts,t._multiDrawCounts,t._multiDrawCount);else if(t.isInstancedMesh)hJ.renderInstances(a0,aJ,t.count);else if(W0.isInstancedBufferGeometry){let iJ=W0._maxInstanceCount!==void 0?W0._maxInstanceCount:1/0,u0=Math.min(W0.instanceCount,iJ);hJ.renderInstances(a0,aJ,u0)}else hJ.render(a0,aJ)};function BQ(A,c,W0,e){if(b!==null&&A.isNodeMaterial)b.setObject(e,A);if(X0===!0)k0.setState(A,W0,!1);if(A.transparent===!0&&A.side===oJ&&A.forceSinglePass===!1)A.side=D8,A.needsUpdate=!0,kQ(A,c,e),A.side=D7,A.needsUpdate=!0,kQ(A,c,e),A.side=oJ;else kQ(A,c,e)}this.compile=function(A,c,W0=null){if(W0===null)W0=A;if(b!==null)b.renderStart(A,c,W0);if(L=A0.get(W0),L.init(c),T.push(L),W0.traverseVisible(function(t){if(t.isLight&&t.layers.test(c.layers)){if(L.pushLight(t),t.castShadow)L.pushShadow(t)}}),A!==W0)A.traverseVisible(function(t){if(t.isLight&&t.layers.test(c.layers)){if(L.pushLight(t),t.castShadow)L.pushShadow(t)}});if(L.setupLights(),b!==null)b.updateLights(L.state.lightsArray);if(_0=this.localClippingEnabled,X0=k0.init(this.clippingPlanes,_0),X0===!0)k0.setGlobalState(this.clippingPlanes,c);if(b!==null)e0.render(L.state.shadowsArray,W0,c);let e=new Set;if(A.traverse(function(t){if(!(t.isMesh||t.isPoints||t.isLine||t.isSprite))return;let T0=t.material;if(T0)if(Array.isArray(T0))for(let l0=0;l0<T0.length;l0++){let b0=T0[l0];BQ(b0,W0,c,t),e.add(b0)}else BQ(T0,W0,c,t),e.add(T0)}),L=T.pop(),b!==null)b.renderEnd();return e},this.compileAsync=function(A,c,W0=null){let e=this.compile(A,c,W0);return new Promise((t)=>{function T0(){if(e.forEach(function(l0){let i0=m.get(l0).currentProgram;if(i0===void 0||i0.isReady())e.delete(l0)}),e.size===0){t(A);return}setTimeout(T0,10)}if(NJ.get("KHR_parallel_shader_compile")!==null)T0();else setTimeout(T0,10)})};let y7=null;function h$(A){if(y7)y7(A)}function V6(){a8.stop()}function V8(){a8.start()}let a8=new K5;if(a8.setAnimationLoop(h$),typeof self<"u")a8.setContext(self);this.setAnimationLoop=function(A){y7=A,f0.setAnimationLoop(A),A===null?a8.stop():a8.start()},f0.addEventListener("sessionstart",V6),f0.addEventListener("sessionend",V8),this.render=function(A,c){if(c!==void 0&&c.isCamera!==!0){$J("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;if(b!==null)b.renderStart(A,c);let W0=f0.enabled===!0&&f0.isPresenting===!0,e=B!==null&&(I===null||W0)&&B.begin(z,I);if(A.matrixWorldAutoUpdate===!0)A.updateMatrixWorld();if(c.parent===null&&c.matrixWorldAutoUpdate===!0)c.updateMatrixWorld();if(f0.enabled===!0&&f0.isPresenting===!0&&(B===null||B.isCompositing()===!1)){if(f0.cameraAutoUpdate===!0)f0.updateCamera(c);c=f0.getCamera()}if(A.isScene===!0)A.onBeforeRender(z,A,c,I);if(L=A0.get(A,T.length),L.init(c),L.state.textureUnits=J0.getTextureUnits(),T.push(L),c0.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse),F0.setFromProjectionMatrix(c0,XY,c.reversedDepth),_0=this.localClippingEnabled,X0=k0.init(this.clippingPlanes,_0),V=s0.get(A,P.length),V.init(),P.push(V),f0.enabled===!0&&f0.isPresenting===!0){let l0=z.xr.getDepthSensingMesh();if(l0!==null)D6(l0,c,-1/0,z.sortObjects)}if(D6(A,c,0,z.sortObjects),V.finish(),b!==null)b.updateLights(L.state.lightsArray);if(z.sortObjects===!0)V.sort(p,o);if(_J=f0.enabled===!1||f0.isPresenting===!1||f0.hasDepthSensing()===!1,_J)t0.addToRenderList(V,A);if(this.info.render.frame++,this.info.autoReset===!0)this.info.reset();if(X0===!0)k0.beginShadows();let t=L.state.shadowsArray;if(e0.render(t,A,c),X0===!0)k0.endShadows();if((e&&B.hasRenderPass())===!1){let{opaque:l0,transmissive:b0}=V;if(L.setupLights(),c.isArrayCamera){let i0=c.cameras;if(b0.length>0)for(let n0=0,GJ=i0.length;n0<GJ;n0++){let DJ=i0[n0];MQ(l0,b0,A,DJ)}if(_J)t0.render(A);for(let n0=0,GJ=i0.length;n0<GJ;n0++){let DJ=i0[n0];x$(V,A,DJ,DJ.viewport)}}else{if(b0.length>0)MQ(l0,b0,A,c);if(_J)t0.render(A);x$(V,A,c)}}if(I!==null&&u===0)J0.updateMultisampleRenderTarget(I),J0.updateRenderTargetMipmap(I);if(e)B.end(z);if(A.isScene===!0)A.onAfterRender(z,A,c);if(w0.resetDefaultState(),x=-1,h=null,T.pop(),T.length>0){if(L=T[T.length-1],J0.setTextureUnits(L.state.textureUnits),X0===!0)k0.setGlobalState(z.clippingPlanes,L.state.camera)}else L=null;if(P.pop(),P.length>0)V=P[P.length-1];else V=null;if(b!==null)b.renderEnd()};function D6(A,c,W0,e){if(A.visible===!1)return;if(A.layers.test(c.layers)){if(A.isGroup)W0=A.renderOrder;else if(A.isLOD){if(A.autoUpdate===!0)A.update(c)}else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight){if(L.pushLight(A),A.castShadow)L.pushShadow(A)}else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(F0)){if(e)g0.setFromMatrixPosition(A.matrixWorld).applyMatrix4(c0);let l0=H0.update(A),b0=A.material;if(b0.visible)V.push(A,l0,b0,W0,g0.z,null,c)}}else if(A.isMesh||A.isLine||A.isPoints){if(!A.frustumCulled||A.intersectsFrustum(F0)){let l0=H0.update(A),b0=A.material;if(e){if(A.boundingSphere!==void 0){if(A.boundingSphere===null)A.computeBoundingSphere();g0.copy(A.boundingSphere.center)}else{if(l0.boundingSphere===null)l0.computeBoundingSphere();g0.copy(l0.boundingSphere.center)}g0.applyMatrix4(A.matrixWorld).applyMatrix4(c0)}if(Array.isArray(b0)){let i0=l0.groups;for(let n0=0,GJ=i0.length;n0<GJ;n0++){let DJ=i0[n0],a0=b0[DJ.materialIndex];if(a0&&a0.visible)V.push(A,l0,a0,W0,g0.z,DJ,c)}}else if(b0.visible)V.push(A,l0,b0,W0,g0.z,null,c)}}}let T0=A.children;for(let l0=0,b0=T0.length;l0<b0;l0++)D6(T0[l0],c,W0,e)}function x$(A,c,W0,e){let{opaque:t,transmissive:T0,transparent:l0}=A;if(L.setupLightsView(W0),X0===!0)k0.setGlobalState(z.clippingPlanes,W0);if(e)S.viewport(f.copy(e));if(t.length>0)u9(t,c,W0);if(T0.length>0)u9(T0,c,W0);if(l0.length>0)u9(l0,c,W0);S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function MQ(A,c,W0,e){if((W0.isScene===!0?W0.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[e.id]===void 0){let a0=NJ.has("EXT_color_buffer_half_float")||NJ.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[e.id]=new Z8(1,1,{generateMipmaps:!0,type:a0?R8:B9,minFilter:$9,samples:Math.max(4,VJ.samples),stencilBuffer:K,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qJ.workingColorSpace})}let T0=L.state.transmissionRenderTarget[e.id],l0=e.viewport||f;T0.setSize(l0.z*z.transmissionResolutionScale,l0.w*z.transmissionResolutionScale);let b0=z.getRenderTarget(),i0=z.getActiveCubeFace(),n0=z.getActiveMipmapLevel();if(z.setRenderTarget(T0),z.getClearColor(G0),M0=z.getClearAlpha(),M0<1)z.setClearColor(16777215,0.5);if(z.clear(),_J)t0.render(W0);let GJ=z.toneMapping;z.toneMapping=V9;let DJ=e.viewport;if(e.viewport!==void 0)e.viewport=void 0;if(L.setupLightsView(e),X0===!0)k0.setGlobalState(z.clippingPlanes,e);if(u9(A,W0,e),J0.updateMultisampleRenderTarget(T0),J0.updateRenderTargetMipmap(T0),NJ.has("WEBGL_multisampled_render_to_texture")===!1){let a0=!1;for(let jJ=0,aJ=c.length;jJ<aJ;jJ++){let AJ=c[jJ],{object:hJ,geometry:iJ,material:u0,group:N8}=AJ;if(u0.side===oJ&&hJ.layers.test(e.layers)){let CJ=u0.side;u0.side=D8,u0.needsUpdate=!0,X7(hJ,W0,e,iJ,u0,N8),u0.side=CJ,u0.needsUpdate=!0,a0=!0}}if(a0===!0)J0.updateMultisampleRenderTarget(T0),J0.updateRenderTargetMipmap(T0)}if(z.setRenderTarget(b0,i0,n0),z.setClearColor(G0,M0),DJ!==void 0)e.viewport=DJ;z.toneMapping=GJ}function u9(A,c,W0){let e=c.isScene===!0?c.overrideMaterial:null;for(let t=0,T0=A.length;t<T0;t++){let l0=A[t],{object:b0,geometry:i0,group:n0}=l0,GJ=l0.material;if(GJ.allowOverride===!0&&e!==null)GJ=e;if(b0.layers.test(W0.layers))X7(b0,c,W0,i0,GJ,n0)}}function X7(A,c,W0,e,t,T0){if(b!==null&&t.isNodeMaterial)b.setObject(A,t);if(A.onBeforeRender(z,c,W0,e,t,T0),A.modelViewMatrix.multiplyMatrices(W0.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),t.onBeforeRender(z,c,W0,e,A,T0),t.transparent===!0&&t.side===oJ&&t.forceSinglePass===!1)t.side=D8,t.needsUpdate=!0,z.renderBufferDirect(W0,c,e,t,A,T0),t.side=D7,t.needsUpdate=!0,z.renderBufferDirect(W0,c,e,t,A,T0),t.side=oJ;else z.renderBufferDirect(W0,c,e,t,A,T0);A.onAfterRender(z,c,W0,e,t,T0)}function kQ(A,c,W0){if(c.isScene!==!0)c=PJ;let e=m.get(A),t=L.state.lights,T0=L.state.shadowsArray,l0=t.state.version,b0=E0.getParameters(A,t.state,T0,c,W0,L.state.lightProbeGridArray),i0=E0.getProgramCacheKey(b0),n0=e.programs;e.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?c.environment:null,e.fog=c.fog;let GJ=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;if(e.envMap=V0.get(A.envMap||e.environment,GJ),e.envMapRotation=e.environment!==null&&A.envMap===null?c.environmentRotation:A.envMapRotation,n0===void 0)A.addEventListener("dispose",i8),n0=new Map,e.programs=n0;let DJ=n0.get(i0);if(DJ!==void 0){if(e.currentProgram===DJ&&e.lightsStateVersion===l0)return g$(A,b0),DJ}else{if(b0.uniforms=E0.getUniforms(A),b!==null&&A.isNodeMaterial)b.build(A,W0,b0);A.onBeforeCompile(b0,z),DJ=E0.acquireProgram(b0,i0),n0.set(i0,DJ),e.uniforms=b0.uniforms}let a0=e.uniforms;if(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)a0.clippingPlanes=k0.uniform;if(g$(A,b0),e.needsLights=p$(A),e.lightsStateVersion=l0,e.needsLights)a0.ambientLightColor.value=t.state.ambient,a0.lightProbe.value=t.state.probe,a0.sunLights.value=t.state.sun,a0.sunLightShadows.value=t.state.sunShadow,a0.directionalLights.value=t.state.directional,a0.directionalLightShadows.value=t.state.directionalShadow,a0.spotLights.value=t.state.spot,a0.spotLightShadows.value=t.state.spotShadow,a0.rectAreaLights.value=t.state.rectArea,a0.ltc_1.value=t.state.rectAreaLTC1,a0.ltc_2.value=t.state.rectAreaLTC2,a0.pointLights.value=t.state.point,a0.pointLightShadows.value=t.state.pointShadow,a0.hemisphereLights.value=t.state.hemi,a0.sunShadowMatrix.value=t.state.sunShadowMatrix,a0.sunShadowCascade.value=t.state.sunShadowCascade,a0.directionalShadowMatrix.value=t.state.directionalShadowMatrix,a0.spotLightMatrix.value=t.state.spotLightMatrix,a0.spotLightMap.value=t.state.spotLightMap,a0.pointShadowMatrix.value=t.state.pointShadowMatrix;return e.lightProbeGrid=L.state.lightProbeGridArray.length>0,e.currentProgram=DJ,e.uniformsList=null,DJ}function CQ(A){if(A.uniformsList===null){let c=A.currentProgram.getUniforms();A.uniformsList=B$.seqWithValue(c.seq,A.uniforms)}return A.uniformsList}function g$(A,c){let W0=m.get(A);W0.outputColorSpace=c.outputColorSpace,W0.batching=c.batching,W0.batchingColor=c.batchingColor,W0.instancing=c.instancing,W0.instancingColor=c.instancingColor,W0.instancingMorph=c.instancingMorph,W0.skinning=c.skinning,W0.morphTargets=c.morphTargets,W0.morphNormals=c.morphNormals,W0.morphColors=c.morphColors,W0.morphTargetsCount=c.morphTargetsCount,W0.numClippingPlanes=c.numClippingPlanes,W0.numIntersection=c.numClipIntersection,W0.vertexAlphas=c.vertexAlphas,W0.vertexTangents=c.vertexTangents,W0.toneMapping=c.toneMapping}function U8(A,c){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;k.setFromMatrixPosition(c.matrixWorld);for(let W0=0,e=A.length;W0<e;W0++){let t=A[W0];if(t.texture!==null&&t.boundingBox.containsPoint(k))return t}return null}function G9(A,c,W0,e,t){if(c.isScene!==!0)c=PJ;J0.resetTextureUnits();let T0=c.fog,l0=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?c.environment:null,b0=I===null?z.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:qJ.workingColorSpace,i0=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap,n0=V0.get(e.envMap||l0,i0),GJ=e.vertexColors===!0&&!!W0.attributes.color&&W0.attributes.color.itemSize===4,DJ=!!W0.attributes.tangent&&(!!e.normalMap||e.anisotropy>0),a0=!!W0.morphAttributes.position,jJ=!!W0.morphAttributes.normal,aJ=!!W0.morphAttributes.color,AJ=V9;if(e.toneMapped){if(I===null||I.isXRRenderTarget===!0)AJ=z.toneMapping}let hJ=W0.morphAttributes.position||W0.morphAttributes.normal||W0.morphAttributes.color,iJ=hJ!==void 0?hJ.length:0,u0=m.get(e),N8=L.state.lights;if(X0===!0){if(_0===!0||A!==h){let cJ=A===h&&e.id===x;k0.setState(e,A,cJ)}}let CJ=!1;if(e.version===u0.__version){if(u0.needsLights&&u0.lightsStateVersion!==N8.state.version)CJ=!0;else if(u0.outputColorSpace!==b0)CJ=!0;else if(t.isBatchedMesh&&u0.batching===!1)CJ=!0;else if(!t.isBatchedMesh&&u0.batching===!0)CJ=!0;else if(t.isBatchedMesh&&u0.batchingColor===!0&&t._colorsTexture===null)CJ=!0;else if(t.isBatchedMesh&&u0.batchingColor===!1&&t._colorsTexture!==null)CJ=!0;else if(t.isInstancedMesh&&u0.instancing===!1)CJ=!0;else if(!t.isInstancedMesh&&u0.instancing===!0)CJ=!0;else if(t.isSkinnedMesh&&u0.skinning===!1)CJ=!0;else if(!t.isSkinnedMesh&&u0.skinning===!0)CJ=!0;else if(t.isInstancedMesh&&u0.instancingColor===!0&&t.instanceColor===null)CJ=!0;else if(t.isInstancedMesh&&u0.instancingColor===!1&&t.instanceColor!==null)CJ=!0;else if(t.isInstancedMesh&&u0.instancingMorph===!0&&t.morphTexture===null)CJ=!0;else if(t.isInstancedMesh&&u0.instancingMorph===!1&&t.morphTexture!==null)CJ=!0;else if(u0.envMap!==n0)CJ=!0;else if(e.fog===!0&&u0.fog!==T0)CJ=!0;else if(u0.numClippingPlanes!==void 0&&(u0.numClippingPlanes!==k0.numPlanes||u0.numIntersection!==k0.numIntersection))CJ=!0;else if(u0.vertexAlphas!==GJ)CJ=!0;else if(u0.vertexTangents!==DJ)CJ=!0;else if(u0.morphTargets!==a0)CJ=!0;else if(u0.morphNormals!==jJ)CJ=!0;else if(u0.morphColors!==aJ)CJ=!0;else if(u0.toneMapping!==AJ)CJ=!0;else if(u0.morphTargetsCount!==iJ)CJ=!0;else if(!!u0.lightProbeGrid!==L.state.lightProbeGridArray.length>0)CJ=!0}else CJ=!0,u0.__version=e.version;let j8=u0.currentProgram;if(CJ===!0){if(j8=kQ(e,c,t),b&&e.isNodeMaterial)b.onUpdateProgram(e,j8,u0)}let M8=!1,r8=!1,d9=!1,fJ=j8.getUniforms(),rJ=u0.uniforms;if(S.useProgram(j8.program))M8=!0,r8=!0,d9=!0;if(e.id!==x)x=e.id,r8=!0;if(u0.needsLights){let cJ=U8(L.state.lightProbeGridArray,t);if(u0.lightProbeGrid!==cJ)u0.lightProbeGrid=cJ,r8=!0}if(M8||h!==A){if(S.buffers.depth.getReversed()&&A.reversedDepth!==!0)A._reversedDepth=!0,A.updateProjectionMatrix();fJ.setValue(l,"projectionMatrix",A.projectionMatrix),fJ.setValue(l,"viewMatrix",A.matrixWorldInverse);let k8=fJ.map.cameraPosition;if(k8!==void 0)k8.setValue(l,EJ.setFromMatrixPosition(A.matrixWorld));if(VJ.logarithmicDepthBuffer)fJ.setValue(l,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2));if(e.isMeshPhongMaterial||e.isMeshToonMaterial||e.isMeshLambertMaterial||e.isMeshBasicMaterial||e.isMeshStandardMaterial||e.isShaderMaterial)fJ.setValue(l,"isOrthographic",A.isOrthographicCamera===!0);if(h!==A)h=A,r8=!0,d9=!0}if(u0.needsLights){if(N8.state.sunShadowMap.length>0)fJ.setValue(l,"sunShadowMap",N8.state.sunShadowMap,J0);if(N8.state.directionalShadowMap.length>0)fJ.setValue(l,"directionalShadowMap",N8.state.directionalShadowMap,J0);if(N8.state.spotShadowMap.length>0)fJ.setValue(l,"spotShadowMap",N8.state.spotShadowMap,J0);if(N8.state.pointShadowMap.length>0)fJ.setValue(l,"pointShadowMap",N8.state.pointShadowMap,J0)}if(t.isSkinnedMesh){fJ.setOptional(l,t,"bindMatrix"),fJ.setOptional(l,t,"bindMatrixInverse");let cJ=t.skeleton;if(cJ){if(cJ.boneTexture===null)cJ.computeBoneTexture();fJ.setValue(l,"boneTexture",cJ.boneTexture,J0)}}if(t.isBatchedMesh){if(fJ.setOptional(l,t,"batchingTexture"),fJ.setValue(l,"batchingTexture",t._matricesTexture,J0),fJ.setOptional(l,t,"batchingIdTexture"),fJ.setValue(l,"batchingIdTexture",t._indirectTexture,J0),fJ.setOptional(l,t,"batchingColorTexture"),t._colorsTexture!==null)fJ.setValue(l,"batchingColorTexture",t._colorsTexture,J0)}let F9=W0.morphAttributes;if(F9.position!==void 0||F9.normal!==void 0||F9.color!==void 0)IJ.update(t,W0,j8);if(r8||u0.receiveShadow!==t.receiveShadow)u0.receiveShadow=t.receiveShadow,fJ.setValue(l,"receiveShadow",t.receiveShadow);if((e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial)&&e.envMap===null&&c.environment!==null)rJ.envMapIntensity.value=c.environmentIntensity;if(rJ.dfgLUT!==void 0)rJ.dfgLUT.value=iO();if(r8){if(fJ.setValue(l,"toneMappingExposure",z.toneMappingExposure),u0.needsLights)yK(rJ,d9);if(T0&&e.fog===!0)I0.refreshFogUniforms(rJ,T0);if(I0.refreshMaterialUniforms(rJ,e,j,$0,L.state.transmissionRenderTarget[A.id]),u0.needsLights&&u0.lightProbeGrid){let cJ=u0.lightProbeGrid;rJ.probesSH.value=cJ.texture,rJ.probesMin.value.copy(cJ.boundingBox.min),rJ.probesMax.value.copy(cJ.boundingBox.max),rJ.probesResolution.value.copy(cJ.resolution)}B$.upload(l,CQ(u0),rJ,J0)}if(e.isShaderMaterial&&e.uniformsNeedUpdate===!0)B$.upload(l,CQ(u0),rJ,J0),e.uniformsNeedUpdate=!1;if(e.isSpriteMaterial)fJ.setValue(l,"center",t.center);if(fJ.setValue(l,"modelViewMatrix",t.modelViewMatrix),fJ.setValue(l,"normalMatrix",t.normalMatrix),fJ.setValue(l,"modelMatrix",t.matrixWorld),e.uniformsGroups!==void 0){let cJ=e.uniformsGroups;for(let k8=0,H7=cJ.length;k8<H7;k8++){let m$=cJ[k8];m0.update(m$,j8),m0.bind(m$,j8)}}return j8}function yK(A,c){A.ambientLightColor.needsUpdate=c,A.lightProbe.needsUpdate=c,A.sunLights.needsUpdate=c,A.sunLightShadows.needsUpdate=c,A.directionalLights.needsUpdate=c,A.directionalLightShadows.needsUpdate=c,A.pointLights.needsUpdate=c,A.pointLightShadows.needsUpdate=c,A.spotLights.needsUpdate=c,A.spotLightShadows.needsUpdate=c,A.rectAreaLights.needsUpdate=c,A.hemisphereLights.needsUpdate=c}function p$(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return u},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,c,W0){let e=m.get(A);if(e.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,e.__autoAllocateDepthBuffer===!1)e.__useRenderToTexture=!1;m.get(A.texture).__webglTexture=c,m.get(A.depthTexture).__webglTexture=e.__autoAllocateDepthBuffer?void 0:W0,e.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,c){let W0=m.get(A);W0.__webglFramebuffer=c,W0.__useDefaultFramebuffer=c===void 0},this.setRenderTarget=function(A,c=0,W0=0){I=A,y=c,u=W0;let e=null,t=!1,T0=!1;if(A){let b0=m.get(A);if(b0.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(l.FRAMEBUFFER,b0.__webglFramebuffer),f.copy(A.viewport),g.copy(A.scissor),Y0=A.scissorTest,S.viewport(f),S.scissor(g),S.setScissorTest(Y0),x=-1;return}else if(b0.__webglFramebuffer===void 0)J0.setupRenderTarget(A);else if(b0.__hasExternalTextures)J0.rebindTextures(A,m.get(A.texture).__webglTexture,m.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let GJ=A.depthTexture;if(b0.__boundDepthTexture!==GJ){if(GJ!==null&&m.has(GJ)&&(A.width!==GJ.image.width||A.height!==GJ.image.height))throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J0.setupDepthRenderbuffer(A)}}let i0=A.texture;if(i0.isData3DTexture||i0.isDataArrayTexture||i0.isCompressedArrayTexture)T0=!0;let n0=m.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget){if(Array.isArray(n0[c]))e=n0[c][W0];else e=n0[c];t=!0}else if(A.samples>0&&J0.useMultisampledRTT(A)===!1)e=m.get(A).__webglMultisampledFramebuffer;else if(Array.isArray(n0))e=n0[W0];else e=n0;f.copy(A.viewport),g.copy(A.scissor),Y0=A.scissorTest}else f.copy(K0).multiplyScalar(j).floor(),g.copy(r).multiplyScalar(j).floor(),Y0=O0;if(W0!==0)e=n;if(S.bindFramebuffer(l.FRAMEBUFFER,e))S.drawBuffers(A,e);if(S.viewport(f),S.scissor(g),S.setScissorTest(Y0),t){let b0=m.get(A.texture);l.framebufferTexture2D(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+c,b0.__webglTexture,W0)}else if(T0){let b0=c;for(let i0=0;i0<A.textures.length;i0++){let n0=m.get(A.textures[i0]);l.framebufferTextureLayer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+i0,n0.__webglTexture,W0,b0)}}else if(A!==null&&W0!==0){let b0=m.get(A.texture);l.framebufferTexture2D(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,b0.__webglTexture,W0)}x=-1};function B6(A){let c=m.get(A);if(c.__readFormat!==A.format||c.__readType!==A.type)c.__readFormat=A.format,c.__readType=A.type,c.__formatReadable=VJ.textureFormatReadable(A.format),c.__typeReadable=VJ.textureTypeReadable(A.type);return c}if(this.readRenderTargetPixels=function(A,c,W0,e,t,T0,l0,b0=0){if(!(A&&A.isWebGLRenderTarget)){$J("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let i0=m.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&l0!==void 0)i0=i0[l0];if(i0){S.bindFramebuffer(l.FRAMEBUFFER,i0);try{let n0=A.textures[b0],GJ=n0.format,DJ=n0.type;if(A.textures.length>1)l.readBuffer(l.COLOR_ATTACHMENT0+b0);let a0=B6(n0);if(a0.__formatReadable===!1){$J("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(a0.__typeReadable===!1){$J("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(c>=0&&c<=A.width-e&&(W0>=0&&W0<=A.height-t))l.readPixels(c,W0,e,t,U0.convert(GJ),U0.convert(DJ),T0)}finally{let n0=I!==null?m.get(I).__webglFramebuffer:null;S.bindFramebuffer(l.FRAMEBUFFER,n0)}}},this.readRenderTargetPixelsAsync=async function(A,c,W0,e,t,T0,l0,b0=0){if(!(A&&A.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let i0=m.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&l0!==void 0)i0=i0[l0];if(i0)if(c>=0&&c<=A.width-e&&(W0>=0&&W0<=A.height-t)){S.bindFramebuffer(l.FRAMEBUFFER,i0);let n0=A.textures[b0],GJ=n0.format,DJ=n0.type;if(A.textures.length>1)l.readBuffer(l.COLOR_ATTACHMENT0+b0);let a0=B6(n0);if(a0.__formatReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(a0.__typeReadable===!1)throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let jJ=l.createBuffer();l.bindBuffer(l.PIXEL_PACK_BUFFER,jJ),l.bufferData(l.PIXEL_PACK_BUFFER,T0.byteLength,l.STREAM_READ),l.readPixels(c,W0,e,t,U0.convert(GJ),U0.convert(DJ),0),l.bindBuffer(l.PIXEL_PACK_BUFFER,null);let aJ=I!==null?m.get(I).__webglFramebuffer:null;S.bindFramebuffer(l.FRAMEBUFFER,aJ);let AJ=l.fenceSync(l.SYNC_GPU_COMMANDS_COMPLETE,0);return l.flush(),await MU(l,AJ,4),l.bindBuffer(l.PIXEL_PACK_BUFFER,jJ),l.getBufferSubData(l.PIXEL_PACK_BUFFER,0,T0),l.bindBuffer(l.PIXEL_PACK_BUFFER,null),l.deleteBuffer(jJ),l.deleteSync(AJ),T0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,c=null,W0=0){let e=Math.pow(2,-W0),t=Math.floor(A.image.width*e),T0=Math.floor(A.image.height*e),l0=c!==null?c.x:0,b0=c!==null?c.y:0;J0.setTexture2D(A,0),l.copyTexSubImage2D(l.TEXTURE_2D,W0,0,0,l0,b0,t,T0),S.unbindTexture()},this.copyTextureToTexture=function(A,c,W0=null,e=null,t=0,T0=0){let l0,b0,i0,n0,GJ,DJ,a0,jJ,aJ,AJ=A.isCompressedTexture?A.mipmaps[T0]:A.image;if(W0!==null)l0=W0.max.x-W0.min.x,b0=W0.max.y-W0.min.y,i0=W0.isBox3?W0.max.z-W0.min.z:1,n0=W0.min.x,GJ=W0.min.y,DJ=W0.isBox3?W0.min.z:0;else{let rJ=Math.pow(2,-t);if(l0=Math.floor(AJ.width*rJ),b0=Math.floor(AJ.height*rJ),A.isDataArrayTexture)i0=AJ.depth;else if(A.isData3DTexture)i0=Math.floor(AJ.depth*rJ);else i0=1;n0=0,GJ=0,DJ=0}if(e!==null)a0=e.x,jJ=e.y,aJ=e.z;else a0=0,jJ=0,aJ=0;let hJ=U0.convert(c.format),iJ=U0.convert(c.type),u0;if(c.isData3DTexture)J0.setTexture3D(c,0),u0=l.TEXTURE_3D;else if(c.isDataArrayTexture||c.isCompressedArrayTexture)J0.setTexture2DArray(c,0),u0=l.TEXTURE_2D_ARRAY;else J0.setTexture2D(c,0),u0=l.TEXTURE_2D;S.activeTexture(l.TEXTURE0),S.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,c.flipY),S.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,c.premultiplyAlpha),S.pixelStorei(l.UNPACK_ALIGNMENT,c.unpackAlignment);let N8=S.getParameter(l.UNPACK_ROW_LENGTH),CJ=S.getParameter(l.UNPACK_IMAGE_HEIGHT),j8=S.getParameter(l.UNPACK_SKIP_PIXELS),M8=S.getParameter(l.UNPACK_SKIP_ROWS),r8=S.getParameter(l.UNPACK_SKIP_IMAGES);S.pixelStorei(l.UNPACK_ROW_LENGTH,AJ.width),S.pixelStorei(l.UNPACK_IMAGE_HEIGHT,AJ.height),S.pixelStorei(l.UNPACK_SKIP_PIXELS,n0),S.pixelStorei(l.UNPACK_SKIP_ROWS,GJ),S.pixelStorei(l.UNPACK_SKIP_IMAGES,DJ);let d9=A.isDataArrayTexture||A.isData3DTexture,fJ=c.isDataArrayTexture||c.isData3DTexture;if(A.isDepthTexture){let rJ=m.get(A),F9=m.get(c),cJ=m.get(rJ.__renderTarget),k8=m.get(F9.__renderTarget);S.bindFramebuffer(l.READ_FRAMEBUFFER,cJ.__webglFramebuffer),S.bindFramebuffer(l.DRAW_FRAMEBUFFER,k8.__webglFramebuffer);for(let H7=0;H7<i0;H7++){if(d9)l.framebufferTextureLayer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,m.get(A).__webglTexture,t,DJ+H7),l.framebufferTextureLayer(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,m.get(c).__webglTexture,T0,aJ+H7);l.blitFramebuffer(n0,GJ,l0,b0,a0,jJ,l0,b0,l.DEPTH_BUFFER_BIT,l.NEAREST)}S.bindFramebuffer(l.READ_FRAMEBUFFER,null),S.bindFramebuffer(l.DRAW_FRAMEBUFFER,null)}else if(t!==0||A.isRenderTargetTexture||m.has(A)){let rJ=m.get(A),F9=m.get(c);S.bindFramebuffer(l.READ_FRAMEBUFFER,Z0),S.bindFramebuffer(l.DRAW_FRAMEBUFFER,v);for(let cJ=0;cJ<i0;cJ++){if(d9)l.framebufferTextureLayer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,rJ.__webglTexture,t,DJ+cJ);else l.framebufferTexture2D(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,rJ.__webglTexture,t);if(fJ)l.framebufferTextureLayer(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,F9.__webglTexture,T0,aJ+cJ);else l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,F9.__webglTexture,T0);if(t!==0)l.blitFramebuffer(n0,GJ,l0,b0,a0,jJ,l0,b0,l.COLOR_BUFFER_BIT,l.NEAREST);else if(fJ)l.copyTexSubImage3D(u0,T0,a0,jJ,aJ+cJ,n0,GJ,l0,b0);else l.copyTexSubImage2D(u0,T0,a0,jJ,n0,GJ,l0,b0)}S.bindFramebuffer(l.READ_FRAMEBUFFER,null),S.bindFramebuffer(l.DRAW_FRAMEBUFFER,null)}else if(fJ)if(A.isDataTexture||A.isData3DTexture)l.texSubImage3D(u0,T0,a0,jJ,aJ,l0,b0,i0,hJ,iJ,AJ.data);else if(c.isCompressedArrayTexture)l.compressedTexSubImage3D(u0,T0,a0,jJ,aJ,l0,b0,i0,hJ,AJ.data);else l.texSubImage3D(u0,T0,a0,jJ,aJ,l0,b0,i0,hJ,iJ,AJ);else if(A.isDataTexture)l.texSubImage2D(l.TEXTURE_2D,T0,a0,jJ,l0,b0,hJ,iJ,AJ.data);else if(A.isCompressedTexture)l.compressedTexSubImage2D(l.TEXTURE_2D,T0,a0,jJ,AJ.width,AJ.height,hJ,AJ.data);else l.texSubImage2D(l.TEXTURE_2D,T0,a0,jJ,l0,b0,hJ,iJ,AJ);if(S.pixelStorei(l.UNPACK_ROW_LENGTH,N8),S.pixelStorei(l.UNPACK_IMAGE_HEIGHT,CJ),S.pixelStorei(l.UNPACK_SKIP_PIXELS,j8),S.pixelStorei(l.UNPACK_SKIP_ROWS,M8),S.pixelStorei(l.UNPACK_SKIP_IMAGES,r8),T0===0&&c.generateMipmaps)l.generateMipmap(u0);S.unbindTexture()},this.initRenderTarget=function(A){if(m.get(A).__webglFramebuffer===void 0)J0.setupRenderTarget(A)},this.initTexture=function(A){if(A.isCubeTexture)J0.setTextureCube(A,0);else if(A.isData3DTexture)J0.setTexture3D(A,0);else if(A.isDataArrayTexture||A.isCompressedArrayTexture)J0.setTexture2DArray(A,0);else J0.setTexture2D(A,0);S.unbindTexture()},this.resetState=function(){y=0,u=0,I=null,S.reset(),w0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return XY}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=qJ._getDrawingBufferColorSpace(J),Q.unpackColorSpace=qJ._getUnpackColorSpace()}}function NQ(J,Q=!1){let $=J[0].index!==null,Z=new Set(Object.keys(J[0].attributes)),K=new Set(Object.keys(J[0].morphAttributes)),W={},Y={},X=J[0].morphTargetsRelative,H=new vJ,U=0;for(let G=0;G<J.length;++G){let F=J[G],N=0;if($!==(F.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let q in F.attributes){if(!Z.has(q))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+'. All geometries must have compatible attributes; make sure "'+q+'" attribute exists among all geometries, or in none of them.'),null;if(W[q]===void 0)W[q]=[];W[q].push(F.attributes[q]),N++}if(N!==Z.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+". Make sure all geometries have the same number of attributes."),null;if(X!==F.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let q in F.morphAttributes){if(!K.has(q))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+".  .morphAttributes must be consistent throughout all geometries."),null;if(Y[q]===void 0)Y[q]=[];Y[q].push(F.morphAttributes[q])}if(Q){let q;if($)q=F.index.count;else if(F.attributes.position!==void 0)q=F.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+G+". The geometry must have either an index or a position attribute"),null;H.addGroup(U,q,G),U+=q}}if($){let G=0,F=[];for(let N=0;N<J.length;++N){let q=J[N].index;for(let O=0;O<q.count;++O)F.push(q.getX(O)+G);G+=J[N].attributes.position.count}H.setIndex(F)}for(let G in W){let F=V5(W[G]);if(!F)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+G+" attribute."),null;H.setAttribute(G,F)}for(let G in Y){let F=Y[G][0].length;if(F===0)continue;H.morphAttributes=H.morphAttributes||{},H.morphAttributes[G]=[];for(let N=0;N<F;++N){let q=[];for(let D=0;D<Y[G].length;++D)q.push(Y[G][D][N]);let O=V5(q);if(!O)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+G+" morphAttribute."),null;H.morphAttributes[G].push(O)}}return H}function V5(J){let Q,$,Z,K=-1,W=0;for(let U=0;U<J.length;++U){let G=J[U];if(Q===void 0)Q=G.array.constructor;if(Q!==G.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if($===void 0)$=G.itemSize;if($!==G.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(Z===void 0)Z=G.normalized;if(Z!==G.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(K===-1)K=G.gpuType;if(K!==G.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;W+=G.count*$}let Y=new Q(W),X=new tJ(Y,$,Z),H=0;for(let U=0;U<J.length;++U){let G=J[U];if(G.isInterleavedBufferAttribute){let F=H/$;for(let N=0,q=G.count;N<q;N++)for(let O=0;O<$;O++){let D=G.getComponent(N,O);X.setComponent(N+F,O,D)}}else Y.set(G.array,H);H+=G.count*$}if(K!==void 0)X.gpuType=K;return X}function cY(J,Q){if(Q===ZY)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),J;if(Q===t6||Q===$$){let $=J.getIndex();if($===null){let W=[],Y=J.getAttribute("position");if(Y!==void 0){for(let X=0;X<Y.count;X++)W.push(X);J.setIndex(W),$=J.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),J}let Z=$.count-2,K=[];if(Q===t6)for(let W=1;W<=Z;W++)K.push($.getX(0)),K.push($.getX(W)),K.push($.getX(W+1));else for(let W=0;W<Z;W++)if(W%2===0)K.push($.getX(W)),K.push($.getX(W+1)),K.push($.getX(W+2));else K.push($.getX(W+2)),K.push($.getX(W+1)),K.push($.getX(W));if(K.length/3!==Z)console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");return J.setIndex(K),J.clearGroups(),J}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",Q),J}function GQ(J){let Q=new Map,$=new Map,Z=J.clone();return D5(J,Z,function(K,W){Q.set(W,K),$.set(K,W)}),Z.traverse(function(K){if(!K.isSkinnedMesh)return;let W=K,Y=Q.get(K),X=Y.skeleton.bones;W.skeleton=Y.skeleton.clone(),W.bindMatrix.copy(Y.bindMatrix),W.skeleton.bones=X.map(function(H){return $.get(H)}),W.bind(W.skeleton,W.bindMatrix)}),Z}function D5(J,Q,$){$(J,Q);for(let Z=0;Z<J.children.length;Z++)D5(J.children[Z],Q.children[Z],$)}class tY extends Z7{constructor(J){super(J);this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(Q){return new A5(Q)}),this.register(function(Q){return new T5(Q)}),this.register(function(Q){return new h5(Q)}),this.register(function(Q){return new x5(Q)}),this.register(function(Q){return new g5(Q)}),this.register(function(Q){return new w5(Q)}),this.register(function(Q){return new S5(Q)}),this.register(function(Q){return new j5(Q)}),this.register(function(Q){return new y5(Q)}),this.register(function(Q){return new z5(Q)}),this.register(function(Q){return new v5(Q)}),this.register(function(Q){return new _5(Q)}),this.register(function(Q){return new b5(Q)}),this.register(function(Q){return new f5(Q)}),this.register(function(Q){return new P5(Q)}),this.register(function(Q){return new oY(Q,kJ.EXT_MESHOPT_COMPRESSION)}),this.register(function(Q){return new oY(Q,kJ.KHR_MESHOPT_COMPRESSION)}),this.register(function(Q){return new p5(Q)})}load(J,Q,$,Z){let K=this,W;if(this.resourcePath!=="")W=this.resourcePath;else if(this.path!==""){let H=T7.extractUrlBase(J);W=T7.resolveURL(H,this.path)}else W=T7.extractUrlBase(J);this.manager.itemStart(J);let Y=function(H){if(Z)Z(H);else console.error(H);K.manager.itemError(J),K.manager.itemEnd(J)},X=new E$(this.manager);X.setPath(this.path),X.setResponseType("arraybuffer"),X.setRequestHeader(this.requestHeader),X.setWithCredentials(this.withCredentials),X.load(J,function(H){try{K.parse(H,W,function(U){Q(U),K.manager.itemEnd(J)},Y)}catch(U){Y(U)}},$,Y)}setDRACOLoader(J){return this.dracoLoader=J,this}setKTX2Loader(J){return this.ktx2Loader=J,this}setMeshoptDecoder(J){return this.meshoptDecoder=J,this}register(J){if(this.pluginCallbacks.indexOf(J)===-1)this.pluginCallbacks.push(J);return this}unregister(J){if(this.pluginCallbacks.indexOf(J)!==-1)this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(J),1);return this}parse(J,Q,$,Z){let K,W={},Y={},X=new TextDecoder;if(typeof J==="string")K=JSON.parse(J);else if(J instanceof ArrayBuffer)if(X.decode(new Uint8Array(J,0,4))===m5){try{W[kJ.KHR_BINARY_GLTF]=new l5(J)}catch(G){if(Z)Z(G);return}K=JSON.parse(W[kJ.KHR_BINARY_GLTF].content)}else K=JSON.parse(X.decode(J));else K=J;if(K.asset===void 0||K.asset.version[0]<2){if(Z)Z(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let H=new s5(K,{path:Q||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});H.fileLoader.setRequestHeader(this.requestHeader);for(let U=0;U<this.pluginCallbacks.length;U++){let G=this.pluginCallbacks[U](H);if(!G.name)console.error("THREE.GLTFLoader: Invalid plugin found: missing name");Y[G.name]=G,W[G.name]=!0}if(K.extensionsUsed)for(let U=0;U<K.extensionsUsed.length;++U){let G=K.extensionsUsed[U],F=K.extensionsRequired||[];switch(G){case kJ.KHR_MATERIALS_UNLIT:W[G]=new I5;break;case kJ.KHR_DRACO_MESH_COMPRESSION:W[G]=new u5(K,this.dracoLoader);break;case kJ.KHR_TEXTURE_TRANSFORM:W[G]=new d5;break;case kJ.KHR_MESH_QUANTIZATION:W[G]=new c5;break;default:if(F.indexOf(G)>=0&&Y[G]===void 0)console.warn('THREE.GLTFLoader: Unknown extension "'+G+'".')}}H.setExtensions(W),H.setPlugins(Y),H.parse($,Z)}parseAsync(J,Q){let $=this;return new Promise(function(Z,K){$.parse(J,Q,Z,K)})}}function oO(){let J={};return{get:function(Q){return J[Q]},add:function(Q,$){J[Q]=$},remove:function(Q){delete J[Q]},removeAll:function(){J={}}}}function K8(J,Q,$){let Z=J.json.materials[Q];if(Z.extensions&&Z.extensions[$])return Z.extensions[$];return null}var kJ={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class P5{constructor(J){this.parser=J,this.name=kJ.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let J=this.parser,Q=this.parser.json.nodes||[];for(let $=0,Z=Q.length;$<Z;$++){let K=Q[$];if(K.extensions&&K.extensions[this.name]&&K.extensions[this.name].light!==void 0)J._addNodeRef(this.cache,K.extensions[this.name].light)}}_loadLight(J){let Q=this.parser,$="light:"+J,Z=Q.cache.get($);if(Z)return Z;let K=Q.json,X=((K.extensions&&K.extensions[this.name]||{}).lights||[])[J],H,U=new j0(16777215);if(X.color!==void 0)U.setRGB(X.color[0],X.color[1],X.color[2],d8);let G=X.range!==void 0?X.range:0;switch(X.type){case"directional":H=new YQ(U),H.target.position.set(0,0,-1),H.add(H.target);break;case"point":H=new K7(U),H.distance=G;break;case"spot":H=new WQ(U),H.distance=G,X.spot=X.spot||{},X.spot.innerConeAngle=X.spot.innerConeAngle!==void 0?X.spot.innerConeAngle:0,X.spot.outerConeAngle=X.spot.outerConeAngle!==void 0?X.spot.outerConeAngle:Math.PI/4,H.angle=X.spot.outerConeAngle,H.penumbra=1-X.spot.innerConeAngle/X.spot.outerConeAngle,H.target.position.set(0,0,-1),H.add(H.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+X.type)}if(H.position.set(0,0,0),x9(H,X),X.intensity!==void 0)H.intensity=X.intensity;return H.name=Q.createUniqueName(X.name||"light_"+J),Z=Promise.resolve(H),Q.cache.add($,Z),Z}getDependency(J,Q){if(J!=="light")return;return this._loadLight(Q)}createNodeAttachment(J){let Q=this,$=this.parser,K=$.json.nodes[J],Y=(K.extensions&&K.extensions[this.name]||{}).light;if(Y===void 0)return null;return this._loadLight(Y).then(function(X){return $._getNodeRef(Q.cache,Y,X)})}}class I5{constructor(){this.name=kJ.KHR_MATERIALS_UNLIT}getMaterialType(){return bJ}extendParams(J,Q,$){let Z=[];J.color=new j0(1,1,1),J.opacity=1;let K=Q.pbrMetallicRoughness;if(K){if(Array.isArray(K.baseColorFactor)){let W=K.baseColorFactor;J.color.setRGB(W[0],W[1],W[2],d8),J.opacity=W[3]}if(K.baseColorTexture!==void 0)Z.push($.assignTexture(J,"map",K.baseColorTexture,$8))}return Promise.all(Z)}}class z5{constructor(J){this.parser=J,this.name=kJ.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(J,Q){let $=K8(this.parser,J,this.name);if($===null)return Promise.resolve();if($.emissiveStrength!==void 0)Q.emissiveIntensity=$.emissiveStrength;return Promise.resolve()}}class A5{constructor(J){this.parser=J,this.name=kJ.KHR_MATERIALS_CLEARCOAT}getMaterialType(J){return K8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=K8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.clearcoatFactor!==void 0)Q.clearcoat=$.clearcoatFactor;if($.clearcoatTexture!==void 0)Z.push(this.parser.assignTexture(Q,"clearcoatMap",$.clearcoatTexture));if($.clearcoatRoughnessFactor!==void 0)Q.clearcoatRoughness=$.clearcoatRoughnessFactor;if($.clearcoatRoughnessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"clearcoatRoughnessMap",$.clearcoatRoughnessTexture));if($.clearcoatNormalTexture!==void 0){if(Z.push(this.parser.assignTexture(Q,"clearcoatNormalMap",$.clearcoatNormalTexture)),$.clearcoatNormalTexture.scale!==void 0){let K=$.clearcoatNormalTexture.scale;Q.clearcoatNormalScale=new q0(K,K)}}return Promise.all(Z)}}class T5{constructor(J){this.parser=J,this.name=kJ.KHR_MATERIALS_DISPERSION}getMaterialType(J){return K8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=K8(this.parser,J,this.name);if($===null)return Promise.resolve();return Q.dispersion=$.dispersion!==void 0?$.dispersion:0,Promise.resolve()}}class _5{constructor(J){this.parser=J,this.name=kJ.KHR_MATERIALS_IRIDESCENCE}getMaterialType(J){return K8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=K8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.iridescenceFactor!==void 0)Q.iridescence=$.iridescenceFactor;if($.iridescenceTexture!==void 0)Z.push(this.parser.assignTexture(Q,"iridescenceMap",$.iridescenceTexture));if($.iridescenceIor!==void 0)Q.iridescenceIOR=$.iridescenceIor;if(Q.iridescenceThicknessRange===void 0)Q.iridescenceThicknessRange=[100,400];if($.iridescenceThicknessMinimum!==void 0)Q.iridescenceThicknessRange[0]=$.iridescenceThicknessMinimum;if($.iridescenceThicknessMaximum!==void 0)Q.iridescenceThicknessRange[1]=$.iridescenceThicknessMaximum;if($.iridescenceThicknessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"iridescenceThicknessMap",$.iridescenceThicknessTexture));return Promise.all(Z)}}class w5{constructor(J){this.parser=J,this.name=kJ.KHR_MATERIALS_SHEEN}getMaterialType(J){return K8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=K8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.sheenColor=new j0(0,0,0),Q.sheenRoughness=0,Q.sheen=1,$.sheenColorFactor!==void 0){let K=$.sheenColorFactor;Q.sheenColor.setRGB(K[0],K[1],K[2],d8)}if($.sheenRoughnessFactor!==void 0)Q.sheenRoughness=$.sheenRoughnessFactor;if($.sheenColorTexture!==void 0)Z.push(this.parser.assignTexture(Q,"sheenColorMap",$.sheenColorTexture,$8));if($.sheenRoughnessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"sheenRoughnessMap",$.sheenRoughnessTexture));return Promise.all(Z)}}class S5{constructor(J){this.parser=J,this.name=kJ.KHR_MATERIALS_TRANSMISSION}getMaterialType(J){return K8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=K8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.transmissionFactor!==void 0)Q.transmission=$.transmissionFactor;if($.transmissionTexture!==void 0)Z.push(this.parser.assignTexture(Q,"transmissionMap",$.transmissionTexture));return Promise.all(Z)}}class j5{constructor(J){this.parser=J,this.name=kJ.KHR_MATERIALS_VOLUME}getMaterialType(J){return K8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=K8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.thickness=$.thicknessFactor!==void 0?$.thicknessFactor:0,$.thicknessTexture!==void 0)Z.push(this.parser.assignTexture(Q,"thicknessMap",$.thicknessTexture));Q.attenuationDistance=$.attenuationDistance||1/0;let K=$.attenuationColor||[1,1,1];return Q.attenuationColor=new j0().setRGB(K[0],K[1],K[2],d8),Promise.all(Z)}}class y5{constructor(J){this.parser=J,this.name=kJ.KHR_MATERIALS_IOR}getMaterialType(J){return K8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=K8(this.parser,J,this.name);if($===null)return Promise.resolve();if(Q.ior=$.ior!==void 0?$.ior:1.5,Q.ior===0)Q.ior=1000;return Promise.resolve()}}class v5{constructor(J){this.parser=J,this.name=kJ.KHR_MATERIALS_SPECULAR}getMaterialType(J){return K8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=K8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.specularIntensity=$.specularFactor!==void 0?$.specularFactor:1,$.specularTexture!==void 0)Z.push(this.parser.assignTexture(Q,"specularIntensityMap",$.specularTexture));let K=$.specularColorFactor||[1,1,1];if(Q.specularColor=new j0().setRGB(K[0],K[1],K[2],d8),$.specularColorTexture!==void 0)Z.push(this.parser.assignTexture(Q,"specularColorMap",$.specularColorTexture,$8));return Promise.all(Z)}}class f5{constructor(J){this.parser=J,this.name=kJ.EXT_MATERIALS_BUMP}getMaterialType(J){return K8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=K8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if(Q.bumpScale=$.bumpFactor!==void 0?$.bumpFactor:1,$.bumpTexture!==void 0)Z.push(this.parser.assignTexture(Q,"bumpMap",$.bumpTexture));return Promise.all(Z)}}class b5{constructor(J){this.parser=J,this.name=kJ.KHR_MATERIALS_ANISOTROPY}getMaterialType(J){return K8(this.parser,J,this.name)!==null?L8:null}extendMaterialParams(J,Q){let $=K8(this.parser,J,this.name);if($===null)return Promise.resolve();let Z=[];if($.anisotropyStrength!==void 0)Q.anisotropy=$.anisotropyStrength;if($.anisotropyRotation!==void 0)Q.anisotropyRotation=$.anisotropyRotation;if($.anisotropyTexture!==void 0)Z.push(this.parser.assignTexture(Q,"anisotropyMap",$.anisotropyTexture));return Promise.all(Z)}}class h5{constructor(J){this.parser=J,this.name=kJ.KHR_TEXTURE_BASISU}loadTexture(J){let Q=this.parser,$=Q.json,Z=$.textures[J];if(!Z.extensions||!Z.extensions[this.name])return null;let K=Z.extensions[this.name],W=Q.options.ktx2Loader;if(!W)if($.extensionsRequired&&$.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");else return null;return Q.loadTextureImage(J,K.source,W)}}class x5{constructor(J){this.parser=J,this.name=kJ.EXT_TEXTURE_WEBP}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,K=Z.textures[J];if(!K.extensions||!K.extensions[Q])return null;let W=K.extensions[Q],Y=Z.images[W.source],X=$.textureLoader;if(Y.uri){let H=$.options.manager.getHandler(Y.uri);if(H!==null)X=H}return $.loadTextureImage(J,W.source,X)}}class g5{constructor(J){this.parser=J,this.name=kJ.EXT_TEXTURE_AVIF}loadTexture(J){let Q=this.name,$=this.parser,Z=$.json,K=Z.textures[J];if(!K.extensions||!K.extensions[Q])return null;let W=K.extensions[Q],Y=Z.images[W.source],X=$.textureLoader;if(Y.uri){let H=$.options.manager.getHandler(Y.uri);if(H!==null)X=H}return $.loadTextureImage(J,W.source,X)}}class oY{constructor(J,Q){this.name=Q,this.parser=J}loadBufferView(J){let Q=this.parser.json,$=Q.bufferViews[J];if($.extensions&&$.extensions[this.name]){let Z=$.extensions[this.name],K=this.parser.getDependency("buffer",Z.buffer),W=this.parser.options.meshoptDecoder;if(!W||!W.supported)if(Q.extensionsRequired&&Q.extensionsRequired.indexOf(this.name)>=0)throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");else return null;return K.then(function(Y){let X=Z.byteOffset||0,H=Z.byteLength||0,U=Z.count,G=Z.byteStride,F=new Uint8Array(Y,X,H);if(W.decodeGltfBufferAsync)return W.decodeGltfBufferAsync(U,G,F,Z.mode,Z.filter).then(function(N){return N.buffer});else return W.ready.then(function(){let N=new ArrayBuffer(U*G);return W.decodeGltfBuffer(new Uint8Array(N),U,G,F,Z.mode,Z.filter),N})})}else return null}}class p5{constructor(J){this.name=kJ.EXT_MESH_GPU_INSTANCING,this.parser=J}createNodeMesh(J){let Q=this.parser.json,$=Q.nodes[J];if(!$.extensions||!$.extensions[this.name]||$.mesh===void 0)return null;let Z=Q.meshes[$.mesh];for(let H of Z.primitives)if(H.mode!==K9.TRIANGLES&&H.mode!==K9.TRIANGLE_STRIP&&H.mode!==K9.TRIANGLE_FAN&&H.mode!==void 0)return null;let W=$.extensions[this.name].attributes,Y=[],X={};for(let H in W)Y.push(this.parser.getDependency("accessor",W[H]).then((U)=>{return X[H]=U,X[H]}));if(Y.length<1)return null;return Y.push(this.parser.createNodeMesh(J)),Promise.all(Y).then((H)=>{let U=H.pop(),G=U.isGroup?U.children:[U],F=H[0].count,N=[];for(let q of G){let O=new QJ,D=new _,R=new HJ,E=new _(1,1,1),M=new v9(q.geometry,q.material,F);for(let V=0;V<F;V++){if(X.TRANSLATION)D.fromBufferAttribute(X.TRANSLATION,V);if(X.ROTATION)R.fromBufferAttribute(X.ROTATION,V);if(X.SCALE)E.fromBufferAttribute(X.SCALE,V);M.setMatrixAt(V,O.compose(D,R,E))}let k=null;for(let V in X)if(V==="_COLOR_0"){let L=X[V];M.instanceColor=new R7(L.array,L.itemSize,L.normalized)}else if(V!=="TRANSLATION"&&V!=="ROTATION"&&V!=="SCALE"){if(k===null){let P=M.geometry;k=new vJ,k.name=P.name;for(let T in P.attributes)k.setAttribute(T,P.attributes[T]);for(let T in P.morphAttributes)k.morphAttributes[T]=P.morphAttributes[T];if(P.index!==null)k.setIndex(P.index);k.morphTargetsRelative=P.morphTargetsRelative;for(let T of P.groups)k.addGroup(T.start,T.count,T.materialIndex);if(P.boundingBox!==null)k.boundingBox=P.boundingBox.clone();if(P.boundingSphere!==null)k.boundingSphere=P.boundingSphere.clone();k.drawRange.start=P.drawRange.start,k.drawRange.count=P.drawRange.count,k.userData=Object.assign({},P.userData),M.geometry=k}let L=X[V];k.setAttribute(V,new R7(L.array,L.itemSize,L.normalized))}wJ.prototype.copy.call(M,q),this.parser.assignFinalMaterial(M),N.push(M)}if(U.isGroup)return U.clear(),U.add(...N),U;return N[0]})}}var m5="glTF",k$=12,B5={JSON:1313821514,BIN:5130562};class l5{constructor(J){this.name=kJ.KHR_BINARY_GLTF,this.content=null,this.body=null;let Q=new DataView(J,0,k$),$=new TextDecoder;if(this.header={magic:$.decode(new Uint8Array(J.slice(0,4))),version:Q.getUint32(4,!0),length:Q.getUint32(8,!0)},this.header.magic!==m5)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");else if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");let Z=this.header.length-k$,K=new DataView(J,k$),W=0;while(W<Z){let Y=K.getUint32(W,!0);W+=4;let X=K.getUint32(W,!0);if(W+=4,X===B5.JSON){let H=new Uint8Array(J,k$+W,Y);this.content=$.decode(H)}else if(X===B5.BIN){let H=k$+W;this.body=J.slice(H,H+Y)}W+=Y}if(this.content===null)throw Error("THREE.GLTFLoader: JSON content not found.")}}class u5{constructor(J,Q){if(!Q)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=kJ.KHR_DRACO_MESH_COMPRESSION,this.json=J,this.dracoLoader=Q,this.dracoLoader.preload()}decodePrimitive(J,Q){let $=this.json,Z=this.dracoLoader,K=J.extensions[this.name].bufferView,W=J.extensions[this.name].attributes,Y={},X={},H={};for(let U in W){let G=aY[U]||U.toLowerCase();Y[G]=W[U]}for(let U in J.attributes){let G=aY[U]||U.toLowerCase();if(W[U]!==void 0){let F=$.accessors[J.attributes[U]],N=FQ[F.componentType];H[G]=N.name,X[G]=F.normalized===!0}}return Q.getDependency("bufferView",K).then(function(U){return new Promise(function(G,F){Z.decodeDracoFile(U,function(N){for(let q in N.attributes){let O=N.attributes[q],D=X[q];if(D!==void 0)O.normalized=D}G(N)},Y,H,d8,F)})})}}class d5{constructor(){this.name=kJ.KHR_TEXTURE_TRANSFORM}extendTexture(J,Q){if((Q.texCoord===void 0||Q.texCoord===J.channel)&&Q.offset===void 0&&Q.rotation===void 0&&Q.scale===void 0)return J;if(J=J.clone(),Q.texCoord!==void 0)J.channel=Q.texCoord;if(Q.offset!==void 0)J.offset.fromArray(Q.offset);if(Q.rotation!==void 0)J.rotation=Q.rotation;if(Q.scale!==void 0)J.repeat.fromArray(Q.scale);if(Q.rotation!==void 0){let $=Math.cos(J.rotation),Z=Math.sin(J.rotation);J.matrix.set(J.repeat.x*$,J.repeat.y*Z,J.offset.x,-J.repeat.x*Z,J.repeat.y*$,J.offset.y,0,0,1),J.matrixAutoUpdate=!1}return J.needsUpdate=!0,J}}class c5{constructor(){this.name=kJ.KHR_MESH_QUANTIZATION}}class eY extends $7{constructor(J,Q,$,Z){super(J,Q,$,Z)}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,K=J*Z*3+Z;for(let W=0;W!==Z;W++)Q[W]=$[K+W];return Q}interpolate_(J,Q,$,Z){let K=this.resultBuffer,W=this.sampleValues,Y=this.valueSize,X=Y*2,H=Y*3,U=Z-Q,G=($-Q)/U,F=G*G,N=F*G,q=J*H,O=q-H,D=-2*N+3*F,R=N-F,E=1-D,M=R-F+G;for(let k=0;k!==Y;k++){let V=W[O+k+Y],L=W[O+k+X]*U,P=W[q+k+Y],T=W[q+k]*U;K[k]=E*V+M*L+D*P+R*T}return K}}var aO=new HJ;class n5 extends eY{interpolate_(J,Q,$,Z){let K=super.interpolate_(J,Q,$,Z);return aO.fromArray(K).normalize().toArray(K),K}}var K9={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},FQ={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},M5={9728:D9,9729:X8,9984:_Z,9985:a6,9986:c7,9987:$9},k5={33071:o6,33648:TZ,10497:B7},nY={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},aY={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},w7={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},rO={CUBICSPLINE:void 0,LINEAR:bZ,STEP:$Y},sY={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function tO(J){if(J.DefaultMaterial===void 0)J.DefaultMaterial=new o0({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:D7});return J.DefaultMaterial}function Y6(J,Q,$){for(let Z in $.extensions)if(J[Z]===void 0)Q.userData.gltfExtensions=Q.userData.gltfExtensions||{},Q.userData.gltfExtensions[Z]=$.extensions[Z]}function x9(J,Q){if(Q.extras!==void 0)if(typeof Q.extras==="object")Object.assign(J.userData,Q.extras);else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+Q.extras)}function eO(J,Q,$){let Z=!1,K=!1,W=!1;for(let U=0,G=Q.length;U<G;U++){let F=Q[U];if(F.POSITION!==void 0)Z=!0;if(F.NORMAL!==void 0)K=!0;if(F.COLOR_0!==void 0)W=!0;if(Z&&K&&W)break}if(!Z&&!K&&!W)return Promise.resolve(J);let Y=[],X=[],H=[];for(let U=0,G=Q.length;U<G;U++){let F=Q[U];if(Z){let N=F.POSITION!==void 0?$.getDependency("accessor",F.POSITION):J.attributes.position;Y.push(N)}if(K){let N=F.NORMAL!==void 0?$.getDependency("accessor",F.NORMAL):J.attributes.normal;X.push(N)}if(W){let N=F.COLOR_0!==void 0?$.getDependency("accessor",F.COLOR_0):J.attributes.color;H.push(N)}}return Promise.all([Promise.all(Y),Promise.all(X),Promise.all(H)]).then(function(U){let G=U[0],F=U[1],N=U[2];if(Z)J.morphAttributes.position=G;if(K)J.morphAttributes.normal=F;if(W)J.morphAttributes.color=N;return J.morphTargetsRelative=!0,J})}function JR(J,Q){if(J.updateMorphTargets(),Q.weights!==void 0)for(let $=0,Z=Q.weights.length;$<Z;$++)J.morphTargetInfluences[$]=Q.weights[$];if(Q.extras&&Array.isArray(Q.extras.targetNames)){let $=Q.extras.targetNames;if(J.morphTargetInfluences.length===$.length){J.morphTargetDictionary={};for(let Z=0,K=$.length;Z<K;Z++)J.morphTargetDictionary[$[Z]]=Z}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function QR(J){let Q,$=J.extensions&&J.extensions[kJ.KHR_DRACO_MESH_COMPRESSION];if($)Q="draco:"+$.bufferView+":"+$.indices+":"+iY($.attributes);else Q=J.indices+":"+iY(J.attributes)+":"+J.mode;if(J.targets!==void 0)for(let Z=0,K=J.targets.length;Z<K;Z++)Q+=":"+iY(J.targets[Z]);return Q}function iY(J){let Q="",$=Object.keys(J).sort();for(let Z=0,K=$.length;Z<K;Z++)Q+=$[Z]+":"+J[$[Z]]+";";return Q}function rY(J){switch(J){case Int8Array:return 0.007874015748031496;case Uint8Array:return 0.00392156862745098;case Int16Array:return 0.00003051850947599719;case Uint16Array:return 0.000015259021896696422;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function $R(J){if(J.search(/\.jpe?g($|\?)/i)>0||J.search(/^data\:image\/jpeg/)===0)return"image/jpeg";if(J.search(/\.webp($|\?)/i)>0||J.search(/^data\:image\/webp/)===0)return"image/webp";if(J.search(/\.ktx2($|\?)/i)>0||J.search(/^data\:image\/ktx2/)===0)return"image/ktx2";return"image/png"}var ZR=new QJ;class s5{constructor(J={},Q={}){this.json=J,this.extensions={},this.plugins={},this.options=Q,this.cache=new oO,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let $=!1,Z=-1,K=!1,W=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let Y=navigator.userAgent;$=/^((?!chrome|android).)*safari/i.test(Y)===!0;let X=Y.match(/Version\/(\d+)/);Z=$&&X?parseInt(X[1],10):-1,K=Y.indexOf("Firefox")>-1,W=K?Y.match(/Firefox\/([0-9]+)\./)[1]:-1}if(typeof createImageBitmap>"u"||$&&Z<17||K&&W<98)this.textureLoader=new QK(this.options.manager);else this.textureLoader=new KK(this.options.manager);if(this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new E$(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials")this.fileLoader.setWithCredentials(!0)}setExtensions(J){this.extensions=J}setPlugins(J){this.plugins=J}parse(J,Q){let $=this,Z=this.json,K=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(W){return W._markDefs&&W._markDefs()}),Promise.all(this._invokeAll(function(W){return W.beforeRoot&&W.beforeRoot()})).then(function(){return Promise.all([$.getDependencies("scene"),$.getDependencies("animation"),$.getDependencies("camera")])}).then(function(W){let Y={scene:W[0][Z.scene||0],scenes:W[0],animations:W[1],cameras:W[2],asset:Z.asset,parser:$,userData:{}};return Y6(K,Y,Z),x9(Y,Z),Promise.all($._invokeAll(function(X){return X.afterRoot&&X.afterRoot(Y)})).then(function(){for(let X of Y.scenes)X.updateMatrixWorld();J(Y)})}).catch(Q)}_markDefs(){let J=this.json.nodes||[],Q=this.json.skins||[],$=this.json.meshes||[];for(let Z=0,K=Q.length;Z<K;Z++){let W=Q[Z].joints;for(let Y=0,X=W.length;Y<X;Y++)J[W[Y]].isBone=!0}for(let Z=0,K=J.length;Z<K;Z++){let W=J[Z];if(W.mesh!==void 0){if(this._addNodeRef(this.meshCache,W.mesh),W.skin!==void 0)$[W.mesh].isSkinnedMesh=!0}if(W.camera!==void 0)this._addNodeRef(this.cameraCache,W.camera)}}_addNodeRef(J,Q){if(Q===void 0)return;if(J.refs[Q]===void 0)J.refs[Q]=J.uses[Q]=0;J.refs[Q]++}_getNodeRef(J,Q,$){if(J.refs[Q]<=1)return $;let Z=$.clone(),K=(W,Y)=>{let X=this.associations.get(W);if(X!=null)this.associations.set(Y,X);for(let[H,U]of W.children.entries())K(U,Y.children[H])};return K($,Z),Z.name+="_instance_"+J.uses[Q]++,Z}_invokeOne(J){let Q=Object.values(this.plugins);Q.push(this);for(let $=0;$<Q.length;$++){let Z=J(Q[$]);if(Z)return Z}return null}_invokeAll(J){let Q=Object.values(this.plugins);Q.unshift(this);let $=[];for(let Z=0;Z<Q.length;Z++){let K=J(Q[Z]);if(K)$.push(K)}return $}getDependency(J,Q){let $=J+":"+Q,Z=this.cache.get($);if(!Z){switch(J){case"scene":Z=this.loadScene(Q);break;case"node":Z=this._invokeOne(function(K){return K.loadNode&&K.loadNode(Q)});break;case"mesh":Z=this._invokeOne(function(K){return K.loadMesh&&K.loadMesh(Q)});break;case"accessor":Z=this.loadAccessor(Q);break;case"bufferView":Z=this._invokeOne(function(K){return K.loadBufferView&&K.loadBufferView(Q)});break;case"buffer":Z=this.loadBuffer(Q);break;case"material":Z=this._invokeOne(function(K){return K.loadMaterial&&K.loadMaterial(Q)});break;case"texture":Z=this._invokeOne(function(K){return K.loadTexture&&K.loadTexture(Q)});break;case"skin":Z=this.loadSkin(Q);break;case"animation":Z=this._invokeOne(function(K){return K.loadAnimation&&K.loadAnimation(Q)});break;case"camera":Z=this.loadCamera(Q);break;default:if(Z=this._invokeOne(function(K){return K!=this&&K.getDependency&&K.getDependency(J,Q)}),!Z)throw Error("Unknown type: "+J);break}this.cache.add($,Z)}return Z}getDependencies(J){let Q=this.cache.get(J);if(!Q){let $=this,Z=this.json[J+(J==="mesh"?"es":"s")]||[];Q=Promise.all(Z.map(function(K,W){return $.getDependency(J,W)})),this.cache.add(J,Q)}return Q}loadBuffer(J){let Q=this.json.buffers[J],$=this.fileLoader;if(Q.type&&Q.type!=="arraybuffer")throw Error("THREE.GLTFLoader: "+Q.type+" buffer type is not supported.");if(Q.uri===void 0&&J===0)return Promise.resolve(this.extensions[kJ.KHR_BINARY_GLTF].body);let Z=this.options;return new Promise(function(K,W){$.load(T7.resolveURL(Q.uri,Z.path),K,void 0,function(){W(Error('THREE.GLTFLoader: Failed to load buffer "'+Q.uri+'".'))})})}loadBufferView(J){let Q=this.json.bufferViews[J];return this.getDependency("buffer",Q.buffer).then(function($){let Z=Q.byteLength||0,K=Q.byteOffset||0;return $.slice(K,K+Z)})}loadAccessor(J){let Q=this,$=this.json,Z=this.json.accessors[J];if(Z.bufferView===void 0&&Z.sparse===void 0){let W=nY[Z.type],Y=FQ[Z.componentType],X=Z.normalized===!0,H=new Y(Z.count*W);return Promise.resolve(new tJ(H,W,X))}let K=[];if(Z.bufferView!==void 0)K.push(this.getDependency("bufferView",Z.bufferView));else K.push(null);if(Z.sparse!==void 0)K.push(this.getDependency("bufferView",Z.sparse.indices.bufferView)),K.push(this.getDependency("bufferView",Z.sparse.values.bufferView));return Promise.all(K).then(function(W){let Y=W[0],X=nY[Z.type],H=FQ[Z.componentType],U=H.BYTES_PER_ELEMENT,G=U*X,F=Z.byteOffset||0,N=Z.bufferView!==void 0?$.bufferViews[Z.bufferView].byteStride:void 0,q=Z.normalized===!0,O,D;if(N&&N!==G){let R=Math.floor(F/N),E="InterleavedBuffer:"+Z.bufferView+":"+Z.componentType+":"+R+":"+Z.count,M=Q.cache.get(E);if(!M)O=new H(Y,R*N,Z.count*N/U),M=new JQ(O,N/U),Q.cache.add(E,M);D=new O7(M,X,F%N/U,q)}else{if(Y===null)O=new H(Z.count*X);else O=new H(Y,F,Z.count*X);D=new tJ(O,X,q)}if(Z.sparse!==void 0){let R=nY.SCALAR,E=FQ[Z.sparse.indices.componentType],M=Z.sparse.indices.byteOffset||0,k=Z.sparse.values.byteOffset||0,V=new E(W[1],M,Z.sparse.count*R),L=new H(W[2],k,Z.sparse.count*X);if(Y!==null)D=new tJ(D.array.slice(),D.itemSize,D.normalized);D.normalized=!1;for(let P=0,T=V.length;P<T;P++){let B=V[P];if(D.setX(B,L[P*X]),X>=2)D.setY(B,L[P*X+1]);if(X>=3)D.setZ(B,L[P*X+2]);if(X>=4)D.setW(B,L[P*X+3]);if(X>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}D.normalized=q}return D})}loadTexture(J){let Q=this.json,$=this.options,K=Q.textures[J].source,W=Q.images[K],Y=this.textureLoader;if(W.uri){let X=$.manager.getHandler(W.uri);if(X!==null)Y=X}return this.loadTextureImage(J,K,Y)}loadTextureImage(J,Q,$){let Z=this,K=this.json,W=K.textures[J],Y=K.images[Q],X=(Y.uri||Y.bufferView)+":"+W.sampler;if(this.textureCache[X])return this.textureCache[X];let H=this.loadImageSource(Q,$).then(function(U){if(U.flipY=!1,U.name=W.name||Y.name||"",U.name===""&&typeof Y.uri==="string"&&Y.uri.startsWith("data:image/")===!1)U.name=Y.uri;let F=(K.samplers||{})[W.sampler]||{};return U.magFilter=M5[F.magFilter]||X8,U.minFilter=M5[F.minFilter]||$9,U.wrapS=k5[F.wrapS]||B7,U.wrapT=k5[F.wrapT]||B7,U.generateMipmaps=!U.isCompressedTexture&&U.minFilter!==D9&&U.minFilter!==X8,Z.associations.set(U,{textures:J}),U}).catch(function(){return null});return this.textureCache[X]=H,H}loadImageSource(J,Q){let $=this,Z=this.json,K=this.options;if(this.sourceCache[J]!==void 0)return this.sourceCache[J].then((G)=>G.clone());let W=Z.images[J],Y=self.URL||self.webkitURL,X=W.uri||"",H=!1;if(W.bufferView!==void 0)X=$.getDependency("bufferView",W.bufferView).then(function(G){H=!0;let F=new Blob([G],{type:W.mimeType});return X=Y.createObjectURL(F),X});else if(W.uri===void 0)throw Error("THREE.GLTFLoader: Image "+J+" is missing URI and bufferView");let U=Promise.resolve(X).then(function(G){return new Promise(function(F,N){let q=F;if(Q.isImageBitmapLoader===!0)q=function(O){let D=new Q8(O);D.needsUpdate=!0,F(D)};Q.load(T7.resolveURL(G,K.path),q,void 0,N)})}).then(function(G){if(H===!0)Y.revokeObjectURL(X);return x9(G,W),G.userData.mimeType=W.mimeType||$R(W.uri),G}).catch(function(G){throw console.error("THREE.GLTFLoader: Couldn't load texture",X),G});return this.sourceCache[J]=U,U}assignTexture(J,Q,$,Z){let K=this;return this.getDependency("texture",$.index).then(function(W){if(!W)return null;if($.texCoord!==void 0&&$.texCoord>0)W=W.clone(),W.channel=$.texCoord;if(K.extensions[kJ.KHR_TEXTURE_TRANSFORM]){let Y=$.extensions!==void 0?$.extensions[kJ.KHR_TEXTURE_TRANSFORM]:void 0;if(Y){let X=K.associations.get(W);W=K.extensions[kJ.KHR_TEXTURE_TRANSFORM].extendTexture(W,Y),K.associations.set(W,X)}}if(Z!==void 0)W.colorSpace=Z;return J[Q]=W,W})}assignFinalMaterial(J){let{geometry:Q,material:$}=J,Z=Q.attributes.tangent===void 0,K=Q.attributes.color!==void 0,W=Q.attributes.normal===void 0;if(J.isPoints){let Y="PointsMaterial:"+$.uuid,X=this.cache.get(Y);if(!X)X=new J6,y8.prototype.copy.call(X,$),X.color.copy($.color),X.map=$.map,X.sizeAttenuation=!1,this.cache.add(Y,X);$=X}else if(J.isLine){let Y="LineBasicMaterial:"+$.uuid,X=this.cache.get(Y);if(!X)X=new X$,y8.prototype.copy.call(X,$),X.color.copy($.color),X.map=$.map,this.cache.add(Y,X);$=X}if(Z||K||W){let Y="ClonedMaterial:"+$.uuid+":";if(Z)Y+="derivative-tangents:";if(K)Y+="vertex-colors:";if(W)Y+="flat-shading:";let X=this.cache.get(Y);if(!X){if(X=$.clone(),K)X.vertexColors=!0;if(W)X.flatShading=!0;if(Z){if(X.normalScale)X.normalScale.y*=-1;if(X.clearcoatNormalScale)X.clearcoatNormalScale.y*=-1}this.cache.add(Y,X),this.associations.set(X,this.associations.get($))}$=X}J.material=$}getMaterialType(){return o0}loadMaterial(J){let Q=this,$=this.json,Z=this.extensions,K=$.materials[J],W,Y={},X=K.extensions||{},H=[];if(X[kJ.KHR_MATERIALS_UNLIT]){let G=Z[kJ.KHR_MATERIALS_UNLIT];W=G.getMaterialType(),H.push(G.extendParams(Y,K,Q))}else{let G=K.pbrMetallicRoughness||{};if(Y.color=new j0(1,1,1),Y.opacity=1,Array.isArray(G.baseColorFactor)){let F=G.baseColorFactor;Y.color.setRGB(F[0],F[1],F[2],d8),Y.opacity=F[3]}if(G.baseColorTexture!==void 0)H.push(Q.assignTexture(Y,"map",G.baseColorTexture,$8));if(Y.metalness=G.metallicFactor!==void 0?G.metallicFactor:1,Y.roughness=G.roughnessFactor!==void 0?G.roughnessFactor:1,G.metallicRoughnessTexture!==void 0)H.push(Q.assignTexture(Y,"metalnessMap",G.metallicRoughnessTexture)),H.push(Q.assignTexture(Y,"roughnessMap",G.metallicRoughnessTexture));W=this._invokeOne(function(F){return F.getMaterialType&&F.getMaterialType(J)}),H.push(Promise.all(this._invokeAll(function(F){return F.extendMaterialParams&&F.extendMaterialParams(J,Y)})))}if(K.doubleSided===!0)Y.side=oJ;let U=K.alphaMode||sY.OPAQUE;if(U===sY.BLEND)Y.transparent=!0,Y.depthWrite=!1;else if(Y.transparent=!1,U===sY.MASK)Y.alphaTest=K.alphaCutoff!==void 0?K.alphaCutoff:0.5;if(K.normalTexture!==void 0&&W!==bJ){if(H.push(Q.assignTexture(Y,"normalMap",K.normalTexture)),Y.normalScale=new q0(1,1),K.normalTexture.scale!==void 0){let G=K.normalTexture.scale;Y.normalScale.set(G,G)}}if(K.occlusionTexture!==void 0&&W!==bJ){if(H.push(Q.assignTexture(Y,"aoMap",K.occlusionTexture)),K.occlusionTexture.strength!==void 0)Y.aoMapIntensity=K.occlusionTexture.strength}if(K.emissiveFactor!==void 0&&W!==bJ){let G=K.emissiveFactor;Y.emissive=new j0().setRGB(G[0],G[1],G[2],d8)}if(K.emissiveTexture!==void 0&&W!==bJ)H.push(Q.assignTexture(Y,"emissiveMap",K.emissiveTexture,$8));return Promise.all(H).then(function(){let G=new W(Y);if(K.name)G.name=K.name;if(x9(G,K),Q.associations.set(G,{materials:J}),K.extensions)Y6(Z,G,K);return G})}createUniqueName(J){let Q=yJ.sanitizeNodeName(J||"");if(Q in this.nodeNamesUsed)return Q+"_"+ ++this.nodeNamesUsed[Q];else return this.nodeNamesUsed[Q]=0,Q}loadGeometries(J){let Q=this,$=this.extensions,Z=this.primitiveCache;function K(Y){return $[kJ.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(Y,Q).then(function(X){return C5(X,Y,Q)})}let W=[];for(let Y=0,X=J.length;Y<X;Y++){let H=J[Y],U=QR(H),G=Z[U];if(G)W.push(G.promise);else{let F;if(H.extensions&&H.extensions[kJ.KHR_DRACO_MESH_COMPRESSION])F=K(H);else F=C5(new vJ,H,Q);if(H.mode===K9.TRIANGLE_STRIP)F=F.then((N)=>cY(N,$$));else if(H.mode===K9.TRIANGLE_FAN)F=F.then((N)=>cY(N,t6));Z[U]={primitive:H,promise:F},W.push(F)}}return Promise.all(W)}loadMesh(J){let Q=this,$=this.json,Z=this.extensions,K=$.meshes[J],W=K.primitives,Y=[];for(let X=0,H=W.length;X<H;X++){let U=W[X].material===void 0?tO(this.cache):this.getDependency("material",W[X].material);Y.push(U)}return Y.push(Q.loadGeometries(W)),Promise.all(Y).then(async function(X){let H=X.slice(0,X.length-1),U=X[X.length-1],G=[];for(let N=0,q=U.length;N<q;N++){let O=U[N],D=W[N],R,E=H[N];if(D.mode===K9.TRIANGLES||D.mode===K9.TRIANGLE_STRIP||D.mode===K9.TRIANGLE_FAN||D.mode===void 0){let M=K.isSkinnedMesh===!0,k=O.hasAttribute("skinIndex")&&O.hasAttribute("skinWeight");if(M&&k===!1)console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled.");if(R=M&&k?new uZ(O,E):new C0(O,E),R.isSkinnedMesh===!0)R.normalizeSkinWeights()}else if(D.mode===K9.LINES)R=new dZ(O,E);else if(D.mode===K9.LINE_STRIP)R=new $Q(O,E);else if(D.mode===K9.LINE_LOOP)R=new cZ(O,E);else if(D.mode===K9.POINTS)R=new ZQ(O,E);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+D.mode);if(Object.keys(R.geometry.morphAttributes).length>0)JR(R,K);if(R.name=Q.createUniqueName(K.name||"mesh_"+J),x9(R,K),D.extensions)Y6(Z,R,D);Q.assignFinalMaterial(R),G.push(R)}for(let N=0,q=G.length;N<q;N++)Q.associations.set(G[N],{meshes:J,primitives:N});if(G.length===1){if(K.extensions)Y6(Z,G[0],K);return G[0]}let F=new zJ;if(K.extensions)Y6(Z,F,K);Q.associations.set(F,{meshes:J});for(let N=0,q=G.length;N<q;N++)F.add(G[N]);return F})}loadCamera(J){let Q,$=this.json.cameras[J],Z=$[$.type];if(!Z){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}if($.type==="perspective")Q=new G8(y9.radToDeg(Z.yfov),Z.aspectRatio||1,Z.znear||1,Z.zfar||2000000);else if($.type==="orthographic")Q=new W7(-Z.xmag,Z.xmag,Z.ymag,-Z.ymag,Z.znear,Z.zfar);if($.name)Q.name=this.createUniqueName($.name);return x9(Q,$),Promise.resolve(Q)}loadSkin(J){let Q=this.json.skins[J],$=[];for(let Z=0,K=Q.joints.length;Z<K;Z++)$.push(this._loadNodeShallow(Q.joints[Z]));if(Q.inverseBindMatrices!==void 0)$.push(this.getDependency("accessor",Q.inverseBindMatrices));else $.push(null);return Promise.all($).then(function(Z){let K=Z.pop(),W=Z,Y=[],X=[];for(let H=0,U=W.length;H<U;H++){let G=W[H];if(G){Y.push(G);let F=new QJ;if(K!==null)F.fromArray(K.array,H*16);X.push(F)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',Q.joints[H])}return new Y$(Y,X)})}loadAnimation(J){let Q=this.json,$=this,Z=Q.animations[J],K=Z.name?Z.name:"animation_"+J,W=[],Y=[],X=[],H=[],U=[];for(let G=0,F=Z.channels.length;G<F;G++){let N=Z.channels[G],q=Z.samplers[N.sampler],O=N.target,D=O.node,R=Z.parameters!==void 0?Z.parameters[q.input]:q.input,E=Z.parameters!==void 0?Z.parameters[q.output]:q.output;if(O.node===void 0)continue;W.push(this.getDependency("node",D)),Y.push(this.getDependency("accessor",R)),X.push(this.getDependency("accessor",E)),H.push(q),U.push(O)}return Promise.all([Promise.all(W),Promise.all(Y),Promise.all(X),Promise.all(H),Promise.all(U)]).then(function(G){let F=G[0],N=G[1],q=G[2],O=G[3],D=G[4],R=[];for(let M=0,k=F.length;M<k;M++){let V=F[M],L=N[M],P=q[M],T=O[M],B=D[M];if(V===void 0)continue;if(V.updateMatrix)V.updateMatrix();let z=$._createAnimationTracks(V,L,P,T,B);if(z)for(let d=0;d<z.length;d++)R.push(z[d])}let E=new c6(K,void 0,R);return x9(E,Z),E})}createNodeMesh(J){let Q=this.json,$=this,Z=Q.nodes[J];if(Z.mesh===void 0)return null;return $.getDependency("mesh",Z.mesh).then(function(K){let W=$._getNodeRef($.meshCache,Z.mesh,K);if(Z.weights!==void 0)W.traverse(function(Y){if(!Y.isMesh)return;for(let X=0,H=Z.weights.length;X<H;X++)Y.morphTargetInfluences[X]=Z.weights[X]});return W})}loadNode(J){let Q=this.json,$=this,Z=Q.nodes[J],K=$._loadNodeShallow(J),W=[],Y=Z.children||[];for(let H=0,U=Y.length;H<U;H++)W.push($.getDependency("node",Y[H]));let X=Z.skin===void 0?Promise.resolve(null):$.getDependency("skin",Z.skin);return Promise.all([K,Promise.all(W),X]).then(function(H){let U=H[0],G=H[1],F=H[2];if(F!==null)U.traverse(function(N){if(!N.isSkinnedMesh)return;N.bind(F,ZR)});for(let N=0,q=G.length;N<q;N++)U.add(G[N]);if(U.userData.pivot!==void 0&&G.length>0){let N=U.userData.pivot,q=G[0];U.pivot=new _().fromArray(N),U.position.x-=N[0],U.position.y-=N[1],U.position.z-=N[2],q.position.set(0,0,0),delete U.userData.pivot}return U})}_loadNodeShallow(J){let Q=this.json,$=this.extensions,Z=this;if(this.nodeCache[J]!==void 0)return this.nodeCache[J];let K=Q.nodes[J],W=K.name?Z.createUniqueName(K.name):"",Y=[],X=Z._invokeOne(function(H){return H.createNodeMesh&&H.createNodeMesh(J)});if(X)Y.push(X);if(K.camera!==void 0)Y.push(Z.getDependency("camera",K.camera).then(function(H){return Z._getNodeRef(Z.cameraCache,K.camera,H)}));return Z._invokeAll(function(H){return H.createNodeAttachment&&H.createNodeAttachment(J)}).forEach(function(H){Y.push(H)}),this.nodeCache[J]=Promise.all(Y).then(function(H){let U;if(K.isBone===!0)U=new W$;else if(H.length>1)U=new zJ;else if(H.length===1)U=H[0];else U=new wJ;if(U!==H[0])for(let G=0,F=H.length;G<F;G++)U.add(H[G]);if(K.name)U.userData.name=K.name,U.name=W;if(x9(U,K),K.extensions)Y6($,U,K);if(K.matrix!==void 0){let G=new QJ;G.fromArray(K.matrix),U.applyMatrix4(G)}else{if(K.translation!==void 0)U.position.fromArray(K.translation);if(K.rotation!==void 0)U.quaternion.fromArray(K.rotation);if(K.scale!==void 0)U.scale.fromArray(K.scale)}if(!Z.associations.has(U))Z.associations.set(U,{});else if(K.mesh!==void 0&&Z.meshCache.refs[K.mesh]>1){let G=Z.associations.get(U);Z.associations.set(U,{...G})}return Z.associations.get(U).nodes=J,U}),this.nodeCache[J]}loadScene(J){let Q=this.extensions,$=this.json.scenes[J],Z=this,K=new zJ;if($.name)K.name=Z.createUniqueName($.name);if(x9(K,$),$.extensions)Y6(Q,K,$);let W=$.nodes||[],Y=[];for(let X=0,H=W.length;X<H;X++)Y.push(Z.getDependency("node",W[X]));return Promise.all(Y).then(function(X){for(let U=0,G=X.length;U<G;U++){let F=X[U];if(F.parent!==null)K.add(GQ(F));else K.add(F)}let H=(U)=>{let G=new Map;for(let[F,N]of Z.associations)if(F instanceof y8||F instanceof Q8)G.set(F,N);return U.traverse((F)=>{let N=Z.associations.get(F);if(N!=null)G.set(F,N)}),G};return Z.associations=H(K),K})}_createAnimationTracks(J,Q,$,Z,K){let W=[],Y=J.name?J.name:J.uuid,X=[];function H(N){if(N.morphTargetInfluences)X.push(N.name?N.name:N.uuid)}if(w7[K.path]===w7.weights){if(H(J),J.isGroup)J.children.forEach(H)}else X.push(Y);let U;switch(w7[K.path]){case w7.weights:U=I7;break;case w7.rotation:U=z7;break;case w7.translation:case w7.scale:U=K6;break;default:switch($.itemSize){case 1:U=I7;break;case 2:case 3:default:U=K6;break}break}let G=Z.interpolation!==void 0?rO[Z.interpolation]:bZ,F=this._getArrayFromAccessor($);for(let N=0,q=X.length;N<q;N++){let O=new U(X[N]+"."+w7[K.path],Q.array,F,G);if(Z.interpolation==="CUBICSPLINE")this._createCubicSplineTrackInterpolant(O);W.push(O)}return W}_getArrayFromAccessor(J){let Q=J.array;if(J.normalized){let $=rY(Q.constructor),Z=new Float32Array(Q.length);for(let K=0,W=Q.length;K<W;K++)Z[K]=Q[K]*$;Q=Z}return Q}_createCubicSplineTrackInterpolant(J){J.createInterpolant=function($){return new(this instanceof z7?n5:eY)(this.times,this.values,this.getValueSize()/3,$)},J.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function KR(J,Q,$){let Z=Q.attributes,K=new B8;if(Z.POSITION!==void 0){let X=$.json.accessors[Z.POSITION],H=X.min,U=X.max;if(H!==void 0&&U!==void 0){if(K.set(new _(H[0],H[1],H[2]),new _(U[0],U[1],U[2])),X.normalized){let G=rY(FQ[X.componentType]);K.min.multiplyScalar(G),K.max.multiplyScalar(G)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let W=Q.targets;if(W!==void 0){let X=new _,H=new _;for(let U=0,G=W.length;U<G;U++){let F=W[U];if(F.POSITION!==void 0){let N=$.json.accessors[F.POSITION],q=N.min,O=N.max;if(q!==void 0&&O!==void 0){if(H.setX(Math.max(Math.abs(q[0]),Math.abs(O[0]))),H.setY(Math.max(Math.abs(q[1]),Math.abs(O[1]))),H.setZ(Math.max(Math.abs(q[2]),Math.abs(O[2]))),N.normalized){let D=rY(FQ[N.componentType]);H.multiplyScalar(D)}X.max(H)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}K.expandByVector(X)}J.boundingBox=K;let Y=new _8;K.getCenter(Y.center),Y.radius=K.min.distanceTo(K.max)/2,J.boundingSphere=Y}function C5(J,Q,$){let Z=Q.attributes,K=[];function W(Y,X){return $.getDependency("accessor",Y).then(function(H){J.setAttribute(X,H)})}for(let Y in Z){let X=aY[Y]||Y.toLowerCase();if(X in J.attributes)continue;K.push(W(Z[Y],X))}if(Q.indices!==void 0&&!J.index){let Y=$.getDependency("accessor",Q.indices).then(function(X){J.setIndex(X)});K.push(Y)}if(qJ.workingColorSpace!==d8&&"COLOR_0"in Z)console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qJ.workingColorSpace}" not supported.`);return x9(J,Q),KR(J,Q,$),Promise.all(K).then(function(){return Q.targets!==void 0?eO(J,Q.targets,$):J})}var i5={type:"change"},QX={type:"start"},a5={type:"end"},FK=new k7,o5=new e8,WR=Math.cos(70*y9.DEG2RAD),q8=new _,f8=2*Math.PI,uJ={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},JX=0.000001;class $X extends XK{constructor(J,Q=null){super(J,Q);if(this.state=uJ.NONE,this.target=new _,this.cursor=new _,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=0.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:L7.ROTATE,MIDDLE:L7.DOLLY,RIGHT:L7.PAN},this.touches={ONE:V7.ROTATE,TWO:V7.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new _,this._lastQuaternion=new HJ,this._lastTargetPosition=new _,this._quat=new HJ().setFromUnitVectors(J.up,new _(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new R$,this._sphericalDelta=new R$,this._scale=1,this._panOffset=new _,this._rotateStart=new q0,this._rotateEnd=new q0,this._rotateDelta=new q0,this._panStart=new q0,this._panEnd=new q0,this._panDelta=new q0,this._dollyStart=new q0,this._dollyEnd=new q0,this._dollyDelta=new q0,this._dollyDirection=new _,this._mouse=new q0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=XR.bind(this),this._onPointerDown=YR.bind(this),this._onPointerUp=HR.bind(this),this._onContextMenu=OR.bind(this),this._onMouseWheel=GR.bind(this),this._onKeyDown=FR.bind(this),this._onTouchStart=ER.bind(this),this._onTouchMove=qR.bind(this),this._onMouseDown=UR.bind(this),this._onMouseMove=NR.bind(this),this._interceptControlDown=RR.bind(this),this._interceptControlUp=LR.bind(this),this.domElement!==null)this.connect(this.domElement);this.update()}set cursorStyle(J){if(this._cursorStyle=J,J==="grab")this.domElement.style.cursor="grab";else this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(J){super.connect(J),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=uJ.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let J=this.domElement.getRootNode();J.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),J.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(J){J.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=J}stopListenToKeyEvents(){if(this._domElementKeyEvents!==null)this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(i5),this.update(),this.state=uJ.NONE}pan(J,Q){this._pan(J,Q),this.update()}dollyIn(J){this._dollyIn(J),this.update()}dollyOut(J){this._dollyOut(J),this.update()}rotateLeft(J){this._rotateLeft(J),this.update()}rotateUp(J){this._rotateUp(J),this.update()}update(J=null){let Q=this.object.position;if(q8.copy(Q).sub(this.target),q8.applyQuaternion(this._quat),this._spherical.setFromVector3(q8),this.autoRotate&&this.state===uJ.NONE)this._rotateLeft(this._getAutoRotationAngle(J));if(this.enableDamping)this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor;else this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi;let $=this.minAzimuthAngle,Z=this.maxAzimuthAngle;if(isFinite($)&&isFinite(Z)){if($<-Math.PI)$+=f8;else if($>Math.PI)$-=f8;if(Z<-Math.PI)Z+=f8;else if(Z>Math.PI)Z-=f8;if($<=Z)this._spherical.theta=Math.max($,Math.min(Z,this._spherical.theta));else this._spherical.theta=this._spherical.theta>($+Z)/2?Math.max($,this._spherical.theta):Math.min(Z,this._spherical.theta)}if(this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0)this.target.addScaledVector(this._panOffset,this.dampingFactor);else this.target.add(this._panOffset);this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let K=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let W=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),K=W!=this._spherical.radius}if(q8.setFromSpherical(this._spherical),q8.applyQuaternion(this._quatInverse),Q.copy(this.target).add(q8),this.object.lookAt(this.target),this.enableDamping===!0)this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor);else this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0);if(this.zoomToCursor&&this._performCursorZoom){let W=null;if(this.object.isPerspectiveCamera){let Y=q8.length();W=this._clampDistance(Y*this._scale);let X=Y-W;this.object.position.addScaledVector(this._dollyDirection,X),this.object.updateMatrixWorld(),K=!!X}else if(this.object.isOrthographicCamera){let Y=new _(this._mouse.x,this._mouse.y,0);Y.unproject(this.object);let X=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),K=X!==this.object.zoom;let H=new _(this._mouse.x,this._mouse.y,0);H.unproject(this.object),this.object.position.sub(H).add(Y),this.object.updateMatrixWorld(),W=q8.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;if(W!==null)if(this.screenSpacePanning)this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(W).add(this.object.position);else if(FK.origin.copy(this.object.position),FK.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(FK.direction))<WR)this.object.lookAt(this.target);else o5.setFromNormalAndCoplanarPoint(this.object.up,this.target),FK.intersectPlane(o5,this.target)}else if(this.object.isOrthographicCamera){let W=this.object.zoom;if(this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),W!==this.object.zoom)this.object.updateProjectionMatrix(),K=!0}if(this._scale=1,this._performCursorZoom=!1,K||this._lastPosition.distanceToSquared(this.object.position)>JX||8*(1-this._lastQuaternion.dot(this.object.quaternion))>JX||this._lastTargetPosition.distanceToSquared(this.target)>JX)return this.dispatchEvent(i5),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0;return!1}_getAutoRotationAngle(J){if(J!==null)return f8/60*this.autoRotateSpeed*J;else return f8/60/60*this.autoRotateSpeed}_getZoomScale(J){let Q=Math.abs(J*0.01);return Math.pow(0.95,this.zoomSpeed*Q)}_rotateLeft(J){this._sphericalDelta.theta-=J}_rotateUp(J){this._sphericalDelta.phi-=J}_panLeft(J,Q){q8.setFromMatrixColumn(Q,0),q8.multiplyScalar(-J),this._panOffset.add(q8)}_panUp(J,Q){if(this.screenSpacePanning===!0)q8.setFromMatrixColumn(Q,1);else q8.setFromMatrixColumn(Q,0),q8.crossVectors(this.object.up,q8);q8.multiplyScalar(J),this._panOffset.add(q8)}_pan(J,Q){let $=this.domElement;if(this.object.isPerspectiveCamera){let Z=this.object.position;q8.copy(Z).sub(this.target);let K=q8.length();K*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*J*K/$.clientHeight,this.object.matrix),this._panUp(2*Q*K/$.clientHeight,this.object.matrix)}else if(this.object.isOrthographicCamera)this._panLeft(J*(this.object.right-this.object.left)/this.object.zoom/$.clientWidth,this.object.matrix),this._panUp(Q*(this.object.top-this.object.bottom)/this.object.zoom/$.clientHeight,this.object.matrix);else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1}_dollyOut(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale/=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_dollyIn(J){if(this.object.isPerspectiveCamera||this.object.isOrthographicCamera)this._scale*=J;else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1}_updateZoomParameters(J,Q){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let $=this.domElement.getBoundingClientRect(),Z=J-$.left,K=Q-$.top,W=$.width,Y=$.height;this._mouse.x=Z/W*2-1,this._mouse.y=-(K/Y)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(J){return Math.max(this.minDistance,Math.min(this.maxDistance,J))}_handleMouseDownRotate(J){this._rotateStart.set(J.clientX,J.clientY)}_handleMouseDownDolly(J){this._updateZoomParameters(J.clientX,J.clientX),this._dollyStart.set(J.clientX,J.clientY)}_handleMouseDownPan(J){this._panStart.set(J.clientX,J.clientY)}_handleMouseMoveRotate(J){this._rotateEnd.set(J.clientX,J.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(f8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(f8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(J){if(this._dollyEnd.set(J.clientX,J.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0)this._dollyOut(this._getZoomScale(this._dollyDelta.y));else if(this._dollyDelta.y<0)this._dollyIn(this._getZoomScale(this._dollyDelta.y));this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(J){this._panEnd.set(J.clientX,J.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(J){if(this._updateZoomParameters(J.clientX,J.clientY),J.deltaY<0)this._dollyIn(this._getZoomScale(J.deltaY));else if(J.deltaY>0)this._dollyOut(this._getZoomScale(J.deltaY));this.update()}_handleKeyDown(J){let Q=!1;switch(J.code){case this.keys.UP:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(f8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,this.keyPanSpeed);Q=!0;break;case this.keys.BOTTOM:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateUp(-f8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(0,-this.keyPanSpeed);Q=!0;break;case this.keys.LEFT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(f8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(this.keyPanSpeed,0);Q=!0;break;case this.keys.RIGHT:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate)this._rotateLeft(-f8*this.keyRotateSpeed/this.domElement.clientHeight)}else if(this.enablePan)this._pan(-this.keyPanSpeed,0);Q=!0;break}if(Q)J.preventDefault(),this.update()}_handleTouchStartRotate(J){if(this._pointers.length===1)this._rotateStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._rotateStart.set($,Z)}}_handleTouchStartPan(J){if(this._pointers.length===1)this._panStart.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._panStart.set($,Z)}}_handleTouchStartDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,Z=J.pageY-Q.y,K=Math.sqrt($*$+Z*Z);this._dollyStart.set(0,K)}_handleTouchStartDollyPan(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enablePan)this._handleTouchStartPan(J)}_handleTouchStartDollyRotate(J){if(this.enableZoom)this._handleTouchStartDolly(J);if(this.enableRotate)this._handleTouchStartRotate(J)}_handleTouchMoveRotate(J){if(this._pointers.length==1)this._rotateEnd.set(J.pageX,J.pageY);else{let $=this._getSecondPointerPosition(J),Z=0.5*(J.pageX+$.x),K=0.5*(J.pageY+$.y);this._rotateEnd.set(Z,K)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let Q=this.domElement;this._rotateLeft(f8*this._rotateDelta.x/Q.clientHeight),this._rotateUp(f8*this._rotateDelta.y/Q.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(J){if(this._pointers.length===1)this._panEnd.set(J.pageX,J.pageY);else{let Q=this._getSecondPointerPosition(J),$=0.5*(J.pageX+Q.x),Z=0.5*(J.pageY+Q.y);this._panEnd.set($,Z)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(J){let Q=this._getSecondPointerPosition(J),$=J.pageX-Q.x,Z=J.pageY-Q.y,K=Math.sqrt($*$+Z*Z);this._dollyEnd.set(0,K),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let W=(J.pageX+Q.x)*0.5,Y=(J.pageY+Q.y)*0.5;this._updateZoomParameters(W,Y)}_handleTouchMoveDollyPan(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enablePan)this._handleTouchMovePan(J)}_handleTouchMoveDollyRotate(J){if(this.enableZoom)this._handleTouchMoveDolly(J);if(this.enableRotate)this._handleTouchMoveRotate(J)}_addPointer(J){this._pointers.push(J.pointerId)}_removePointer(J){delete this._pointerPositions[J.pointerId];for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId){this._pointers.splice(Q,1);return}}_isTrackingPointer(J){for(let Q=0;Q<this._pointers.length;Q++)if(this._pointers[Q]==J.pointerId)return!0;return!1}_trackPointer(J){let Q=this._pointerPositions[J.pointerId];if(Q===void 0)Q=new q0,this._pointerPositions[J.pointerId]=Q;Q.set(J.pageX,J.pageY)}_getSecondPointerPosition(J){let Q=J.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[Q]}_customWheelEvent(J){let Q=J.deltaMode,$={clientX:J.clientX,clientY:J.clientY,deltaY:J.deltaY};switch(Q){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}if(J.ctrlKey&&!this._controlActive)$.deltaY*=10;return $}}function YR(J){if(this.enabled===!1)return;if(this._pointers.length===0)this.domElement.setPointerCapture(J.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp);if(this._isTrackingPointer(J))return;if(this._addPointer(J),J.pointerType==="touch")this._onTouchStart(J);else this._onMouseDown(J);if(this._cursorStyle==="grab")this.domElement.style.cursor="grabbing"}function XR(J){if(this.enabled===!1)return;if(J.pointerType==="touch")this._onTouchMove(J);else this._onMouseMove(J)}function HR(J){switch(this._removePointer(J),this._pointers.length){case 0:if(this.domElement.releasePointerCapture(J.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(a5),this.state=uJ.NONE,this._cursorStyle==="grab")this.domElement.style.cursor="grab";break;case 1:let Q=this._pointers[0],$=this._pointerPositions[Q];this._onTouchStart({pointerId:Q,pageX:$.x,pageY:$.y});break}}function UR(J){let Q;switch(J.button){case 0:Q=this.mouseButtons.LEFT;break;case 1:Q=this.mouseButtons.MIDDLE;break;case 2:Q=this.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case L7.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(J),this.state=uJ.DOLLY;break;case L7.ROTATE:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=uJ.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=uJ.ROTATE}break;case L7.PAN:if(J.ctrlKey||J.metaKey||J.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(J),this.state=uJ.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(J),this.state=uJ.PAN}break;default:this.state=uJ.NONE}if(this.state!==uJ.NONE)this.dispatchEvent(QX)}function NR(J){switch(this.state){case uJ.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(J);break;case uJ.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(J);break;case uJ.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(J);break}}function GR(J){if(this.enabled===!1||this.enableZoom===!1||this.state!==uJ.NONE)return;J.preventDefault(),this.dispatchEvent(QX),this._handleMouseWheel(this._customWheelEvent(J)),this.dispatchEvent(a5)}function FR(J){if(this.enabled===!1)return;this._handleKeyDown(J)}function ER(J){switch(this._trackPointer(J),this._pointers.length){case 1:switch(this.touches.ONE){case V7.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(J),this.state=uJ.TOUCH_ROTATE;break;case V7.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(J),this.state=uJ.TOUCH_PAN;break;default:this.state=uJ.NONE}break;case 2:switch(this.touches.TWO){case V7.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(J),this.state=uJ.TOUCH_DOLLY_PAN;break;case V7.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(J),this.state=uJ.TOUCH_DOLLY_ROTATE;break;default:this.state=uJ.NONE}break;default:this.state=uJ.NONE}if(this.state!==uJ.NONE)this.dispatchEvent(QX)}function qR(J){switch(this._trackPointer(J),this.state){case uJ.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(J),this.update();break;case uJ.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(J),this.update();break;case uJ.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(J),this.update();break;case uJ.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(J),this.update();break;default:this.state=uJ.NONE}}function OR(J){if(this.enabled===!1)return;J.preventDefault()}function RR(J){if(J.key==="Control")this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}function LR(J){if(J.key==="Control")this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0})}var C$=new _;function W9(J,Q,$,Z,K,W){let Y=2*Math.PI*K/4,X=Math.max(W-2*K,0),H=Math.PI/4;C$.copy(Q),C$[Z]=0,C$.normalize();let U=0.5*Y/(Y+X),G=1-C$.angleTo(J)/H;if(Math.sign(C$[$])===1)return G*U;else return X/(Y+X)+U+U*(1-G)}class w8 extends TJ{constructor(J=1,Q=1,$=1,Z=2,K=0.1){let W=Z*2+1;K=Math.min(J/2,Q/2,$/2,K);super(1,1,1,W,W,W);if(this.type="RoundedBoxGeometry",this.parameters={width:J,height:Q,depth:$,segments:Z,radius:K},W===1)return;let Y=this.toNonIndexed();this.index=null,this.attributes.position=Y.attributes.position,this.attributes.normal=Y.attributes.normal,this.attributes.uv=Y.attributes.uv;let X=new _,H=new _,U=new _(J,Q,$).divideScalar(2).subScalar(K),G=this.attributes.position.array,F=this.attributes.normal.array,N=this.attributes.uv.array,q=G.length/6,O=new _,D=0.5/W;for(let R=0,E=0;R<G.length;R+=3,E+=2)switch(X.fromArray(G,R),H.copy(X),H.x-=Math.sign(H.x)*D,H.y-=Math.sign(H.y)*D,H.z-=Math.sign(H.z)*D,H.normalize(),G[R+0]=U.x*Math.sign(X.x)+H.x*K,G[R+1]=U.y*Math.sign(X.y)+H.y*K,G[R+2]=U.z*Math.sign(X.z)+H.z*K,F[R+0]=H.x,F[R+1]=H.y,F[R+2]=H.z,Math.floor(R/q)){case 0:O.set(1,0,0),N[E+0]=W9(O,H,"z","y",K,$),N[E+1]=1-W9(O,H,"y","z",K,Q);break;case 1:O.set(-1,0,0),N[E+0]=1-W9(O,H,"z","y",K,$),N[E+1]=1-W9(O,H,"y","z",K,Q);break;case 2:O.set(0,1,0),N[E+0]=1-W9(O,H,"x","z",K,J),N[E+1]=W9(O,H,"z","x",K,$);break;case 3:O.set(0,-1,0),N[E+0]=1-W9(O,H,"x","z",K,J),N[E+1]=1-W9(O,H,"z","x",K,$);break;case 4:O.set(0,0,1),N[E+0]=1-W9(O,H,"x","y",K,J),N[E+1]=1-W9(O,H,"y","x",K,Q);break;case 5:O.set(0,0,-1),N[E+0]=W9(O,H,"x","y",K,J),N[E+1]=1-W9(O,H,"y","x",K,Q);break}}static fromJSON(J){return new w8(J.width,J.height,J.depth,J.segments,J.radius)}}var B0={tableWidth:0.92,tableCenterY:0.724,tableThickness:0.09,feltWidth:0.78,feltCenterY:0.776,surfaceY:0.782,chairSeatY:0.51,chairSeatWidth:0.56,seatDistance:0.77,tileLength:0.054,tileWidth:0.027,tileThickness:0.011,tileGap:0.0016,pipRadius:0.0033,pipColumnSpacing:0.0072,pipRowSpacing:0.0076,rackRadius:0.418,rackSpacing:0.0305,neutralPoseTime:10.25,boardLimit:0.27},k9=[[0,B0.seatDistance,Math.PI],[B0.seatDistance,0,-Math.PI/2],[0,-B0.seatDistance,0],[-B0.seatDistance,0,Math.PI/2]];function KX(J){let Q=J.vertical?B0.tileWidth:B0.tileLength,$=J.vertical?B0.tileLength:B0.tileWidth;return{left:J.x-Q/2,right:J.x+Q/2,top:J.z-$/2,bottom:J.z+$/2}}var VR=B0.boardLimit,DR=B0.feltWidth/2-0.022;function WX(J,Q,$=VR){let Z=KX(J);if(Math.max(Math.abs(Z.left),Math.abs(Z.right),Math.abs(Z.top),Math.abs(Z.bottom))>$+0.00000001)return!1;return Q.every((K)=>{let W=KX(K);return Z.right<=W.left-0.0015||Z.left>=W.right+0.0015||Z.bottom<=W.top-0.0015||Z.top>=W.bottom+0.0015})}function r5(J,Q,$){let{tileLength:Z,tileWidth:K,tileGap:W}=B0,Y=Q.x===Q.y,X=(Y?K:Z)/2,H=J.tile,U=[],G=[[J.dx,J.dz],[J.dz,-J.dx],[-J.dz,J.dx]];for(let F=0;F<G.length;F++){let[N,q]=G[F],O=F!==0,D=(H.isDouble?K:Z)/2,R=(H.isDouble?Z:K)/2,E=H.x+J.dx*(O?H.isDouble?0:Z/4:D),M=H.z+J.dz*(O?H.isDouble?0:Z/4:D),k=O?[0,Z/8,-Z/8]:[0];for(let V of k){let L=Math.atan2(-q,N)+($==="left"?Math.PI:0)+(Y?Math.PI/2:0);U.push({id:Q.id,x:E+N*((O?R:0)+W+X)+J.dx*V,z:M+q*((O?R:0)+W+X)+J.dz*V,yaw:L,vertical:Math.abs(Math.sin(L))>0.5,isDouble:Y,dx:N,dz:q,side:$})}}return U}function ZX(J,Q,$,Z){let K={id:"future",x:0,y:Z?0:1};return r5({tile:J,dx:J.dx,dz:J.dz},K,$).some((W)=>WX(W,Q))}function t5(J,Q=[]){return JN(J,Q).placements}function e5(J,Q=[]){let $=JN(J,Q);if(!$.ends)return[];return["left","right"].map((Z)=>{let K=$.ends[Z],W=K.tile,Y=KX(W),X=Math.abs(K.dx)*(Y.right-Y.left)/2+Math.abs(K.dz)*(Y.bottom-Y.top)/2,H=X+0.013;return{x:W.x+K.dx*H,z:W.z+K.dz*H,dx:K.dx,dz:K.dz}})}function JN(J,Q){if(J.length>28)throw Error("A double-six chain has at most 28 tiles.");if(!J.length)return{placements:[],ends:null};let $=new Map(J.map((N)=>[N.id,N])),Z=Q.filter((N)=>N.type==="play"&&N.tile&&$.has(N.tile)),K=$.get(Z[0]?.tile||"")||J[0],W=J.findIndex((N)=>N.id===K.id),Y=K.x===K.y,X={id:K.id,x:0,z:0,yaw:Y?Math.PI/2:0,vertical:Y,isDouble:Y,dx:1,dz:0,side:"root"},H=[X],U=new Map([[X.id,X]]),G={left:{tile:X,dx:-1,dz:0},right:{tile:X,dx:1,dz:0}},F=Z.length===J.length?Z.slice(1):[...J.slice(0,W).reverse().map((N)=>({type:"play",tile:N.id,side:"left"})),...J.slice(W+1).map((N)=>({type:"play",tile:N.id,side:"right"}))];for(let N of F){let q=$.get(N.tile);if(U.has(q.id))continue;let O=N.side==="left"?"left":N.side==="right"?"right":J.findIndex((M)=>M.id===q.id)<W?"left":"right",D=r5(G[O],q,O),R=D.filter((M)=>WX(M,H));if(!R.length)R=D.filter((M)=>WX(M,H,DR));let E=R.find((M)=>ZX(M,[...H,M],O,!1)&&ZX(M,[...H,M],O,!0))||R.find((M)=>ZX(M,[...H,M],O,!1))||R[0];if(!E)throw Error(`No safe placement for ${q.id} after ${H.length} tiles`);H.push(E),U.set(q.id,E),G[O]={tile:E,dx:E.dx,dz:E.dz}}return{placements:J.map((N)=>U.get(N.id)),ends:G}}function QN(J,Q,$=!1){if($)return{breath:0,headYaw:0,headNod:0};let Z=J*2.173+0.43;return{breath:0.0055*Math.sin(Q*(0.78+J*0.093)+Z),headYaw:0.087*Math.sin(Q*(0.213+J*0.037)+Z)+0.028*Math.sin(Q*(0.487+J*0.029)+Z*1.91),headNod:0.009*Math.sin(Q*(0.267+J*0.035)+Z*0.71)}}var $N=new _(1,0,0),I9=new _(0,1,0),YX=new HJ;function CK(J){let Q=[];return J.traverse(($)=>{if($.isBone)Q.push({bone:$,position:$.position.clone(),quaternion:$.quaternion.clone(),scale:$.scale.clone()})}),Q}var g9=new _,P9=new _,p9=new _,X6=new _,Y7=new _,Y9=new _,H6=new _,U6=new _,G6=new HJ,z9=new HJ,MK=new HJ,DK=new HJ,_$=(J)=>Math.min(1,Math.max(-1,J)),F6=(J,Q,$)=>Math.min($,Math.max(Q,J)),x8=(J)=>J*J*(3-2*J);function W8(J,Q){J.getWorldQuaternion(z9),J.parent.getWorldQuaternion(MK),J.quaternion.copy(MK.invert()).multiply(Q).multiply(z9),J.updateMatrixWorld(!0)}var S8=new _,H9=new _;function BR(J){J.holder.getWorldQuaternion(DK),S8.set(1,0,0).applyQuaternion(DK),H9.set(0,0,1).applyQuaternion(DK)}function NX(J,Q,$,Z,K){return K.set(Q,$,Z).applyMatrix4(J.holder.matrixWorld)}function XX(J,Q,$,Z){return Z.set(J,Q,$).applyQuaternion(DK).normalize()}var MR=0.965;function kR(J,Q,$){let{brazo:Z,antebrazo:K,mano:W}=J;if(!Z||!K||!W||!Z.parent||!K.parent)return;Z.getWorldPosition(g9),K.getWorldPosition(P9),W.getWorldPosition(p9);let Y=g9.distanceTo(P9),X=P9.distanceTo(p9);if(Y<0.00001||X<0.00001)return;let H=F6(g9.distanceTo(Q),Math.abs(Y-X)+0.002,(Y+X)*MR);if(Y7.subVectors(P9,g9),Y9.subVectors(p9,P9),H6.crossVectors(Y7,Y9),H6.lengthSq()<0.0000000001)H6.copy(S8);else H6.normalize();let U=Math.acos(_$((Y*Y+X*X-g9.distanceToSquared(p9))/(2*Y*X))),F=Math.acos(_$((Y*Y+X*X-H*H)/(2*Y*X)))-U;if(W8(K,G6.setFromAxisAngle(H6,F)),W.getWorldPosition(p9),Math.abs(g9.distanceTo(p9)-H)>0.001)W8(K,G6.setFromAxisAngle(H6,-2*F)),W.getWorldPosition(p9);if(Y7.subVectors(p9,g9).normalize(),Y9.subVectors(Q,g9),Y9.lengthSq()<0.0000000001)return;if(Y9.normalize(),W8(Z,G6.setFromUnitVectors(Y7,Y9)),!$)return;if(K.getWorldPosition(P9),U6.subVectors(P9,g9),U6.addScaledVector(Y9,-U6.dot(Y9)),X6.subVectors($,g9),X6.addScaledVector(Y9,-X6.dot(Y9)),U6.lengthSq()<0.0000000001||X6.lengthSq()<0.0000000001)return;U6.normalize(),X6.normalize();let N=Math.atan2(H6.crossVectors(U6,X6).dot(Y9),_$(U6.dot(X6)));W8(Z,G6.setFromAxisAngle(Y9,N))}var h8=new _,OQ=new _,P$=new _,CR=new QJ,HX=new HJ,I$=new HJ;function PR(J,Q,$){let{antebrazo:Z,mano:K}=J;if(!Z||!K||!K.parent)return;if(h8.copy(Q).normalize(),P$.crossVectors(h8,$),P$.lengthSq()<0.00000001)return;P$.normalize(),OQ.crossVectors(P$,h8),HX.setFromRotationMatrix(CR.makeBasis(P$,h8,OQ)),Z.getWorldPosition(P9),K.getWorldPosition(p9),Y7.subVectors(p9,P9).normalize(),K.getWorldQuaternion(z9),I$.copy(HX).multiply(z9.invert());let W=I$.x*Y7.x+I$.y*Y7.y+I$.z*Y7.z,Y=2*Math.atan2(W,I$.w);if(Number.isFinite(Y))W8(Z,G6.setFromAxisAngle(Y7,F6(Y*0.5,-1.2,1.2)));K.parent.getWorldQuaternion(MK),K.quaternion.copy(MK.invert()).multiply(HX),K.updateMatrixWorld(!0)}var IR=new _;function zR(J,Q,$){let Z=Q.lado==="Left"?1:-1,K=J.index*1.7,W=B0.seatDistance-B0.tableWidth/2;return NX(J,Z*(0.225+Math.sin(K)*0.01)+Math.sin($*0.23+K)*0.004,B0.surfaceY+0.026,W+(Z>0?0.035:0.06)+Math.cos(K*1.3)*0.012+Math.sin($*0.17+K*2)*0.004,IR)}var AR=new _,EQ=new _,BK=new _,EK=new _,TR=0.045,_R=0.05,wR=0.12,SR=0.14,jR=0.45,yR=4;function ZN(J,Q,$){return EK.subVectors(Q,J.holder.getWorldPosition(BK)),EK.y=0,EK.normalize(),$.copy(Q).addScaledVector(EK,-_R).setY(Q.y+TR)}function vR(J,Q,$){let Z=J.jugada;if(!Z)return null;if(Q-Z.t0>yR)return J.jugada=null,null;let K=Z.anim;if(K.elapsed<K.duration)return ZN(J,Z.obj.position,EQ),EQ.lerpVectors($,EQ,x8(F6(K.elapsed/wR,0,1)));if(Z.aterrizo==null)Z.aterrizo=Q;let W=Q-Z.aterrizo;ZN(J,Z.hasta,EQ);let Y=K.golpe?0.7:SR;if(W<Y)return EQ;let X=(W-Y)/jR;if(X>=1)return J.jugada=null,null;return EQ.lerp($,x8(X))}var UJ=[1,2.2,3.5,4.7,5.6],KN=-1e9;function fR(J,Q,$){let Z=J.bebida;if(!Z)return null;if(J.trago){let W=J.trago.fijo??Q-J.trago.t0;if(W<0||W>=UJ[4]||J.jugada)return J.trago=null,NN(Z),J.sed=Q+90+Math.random()*150,null;return W}if(!$||!$.dt)return null;if(J.sed==null)return J.sed=Q+20+Math.random()*100,null;if(Q<J.sed||Q-KN<20)return null;let K=J.index;if(J.jugada||$.jugando&&$.turno===K||$.habla.has(K)||$.fin&&Q-$.fin.t<6)return J.sed=Q+3+Math.random()*8,null;return KN=Q,J.trago={t0:Q},0}function NN(J){J.group.position.copy(J.home),J.group.quaternion.identity()}var C9=new _,N6=new _,qQ=new _,z$=new _,WN=new _;function YN(J,Q,$,Z){let K=J.bebida;if(qQ.copy(H9).addScaledVector(I9,0.25).normalize(),z$.copy(H9).multiplyScalar(0.55).addScaledVector(I9,0.8).normalize(),N6.copy(K.home),N6.y+=K.alto,N6.addScaledVector(S8,-(K.radio+0.015)).addScaledVector(qQ,-0.03),J.bocaMundo)J.bocaMundo(C9),C9.addScaledVector(H9,0.006);else J.front.getWorldPosition(C9),C9.y-=0.075,C9.addScaledVector(H9,0.012);let W=K.inclina;WN.copy(I9).multiplyScalar(Math.cos(W)).addScaledVector(H9,-Math.sin(W)),C9.addScaledVector(WN,-K.boca).addScaledVector(S8,-(K.radio+0.015)).addScaledVector(z$,-0.03);let Y=J.trago;if(Y){if(Q<UJ[2])(Y.boca??=new _).copy(C9);else if(Y.boca)C9.copy(Y.boca)}let X;if(Q<UJ[0])qK($,N6,0.045,0.5,x8(Q/UJ[0]),Z),X=qQ;else if(Q<UJ[1]){let H=x8((Q-UJ[0])/(UJ[1]-UJ[0]));qK(N6,C9,0.1,0.25,H,Z),X=qQ.lerp(z$,H).normalize()}else if(Q<UJ[2])Z.copy(C9),X=z$;else if(Q<UJ[3]){let H=x8((Q-UJ[2])/(UJ[3]-UJ[2]));qK(N6,C9,0.1,0.25,1-H,Z),X=z$.lerp(qQ,H).normalize()}else qK($,N6,0.045,0.5,1-x8((Q-UJ[3])/(UJ[4]-UJ[3])),Z),X=qQ;return X}var A$=new _;function qK(J,Q,$,Z,K,W){A$.lerpVectors(J,Q,Z),A$.y=Math.max(J.y,Q.y*Z+J.y*(1-Z))+$;let Y=1-K;return W.set(Y*Y*J.x+2*Y*K*A$.x+K*K*Q.x,Y*Y*J.y+2*Y*K*A$.y+K*K*Q.y,Y*Y*J.z+2*Y*K*A$.z+K*K*Q.z)}function bR(J){return J<UJ[0]?x8(Math.min(1,J/(UJ[0]*0.85))):J<UJ[3]?1:1-x8(Math.min(1,(J-UJ[3])/((UJ[4]-UJ[3])*0.85)))}var XN=new _,HN=new _,UN=new _;function hR(J,Q){let $=J.bebida,Z=J.brazos[1].mano;if(Q<UJ[0]||Q>=UJ[3]){NN($);return}Z.getWorldQuaternion(z9),Z.getWorldPosition(kK),XN.set(0,0,1).applyQuaternion(z9),HN.set(0,1,0).applyQuaternion(z9);let K=Q<UJ[1]?x8((Q-UJ[0])/(UJ[1]-UJ[0])):Q<UJ[2]?1:1-x8((Q-UJ[2])/(UJ[3]-UJ[2]));$.group.quaternion.setFromAxisAngle(S8,-$.inclina*K),UN.set(0,1,0).applyQuaternion($.group.quaternion),$.group.position.copy(kK).addScaledVector(XN,$.radio+0.015).addScaledVector(HN,0.03).addScaledVector(UN,-$.alto);let W=Math.min(1,(Q-UJ[0])/0.2,(UJ[3]-Q)/0.2);if(W<1){let Y=x8(Math.max(0,W));$.group.position.lerpVectors($.home,$.group.position,Y),$.group.quaternion.slerpQuaternions(xR.identity(),$.group.quaternion,Y)}}var xR=new HJ;function gR(J,Q,$){let Z=J.cara;if(!Z)return 0;if(J.proxParpadeo==null)J.proxParpadeo=Q+1+Math.random()*4;if(Q>=J.proxParpadeo)J.parpadeoT0=Q,J.proxParpadeo=Q+(Math.random()<0.15?0.32:2+Math.random()*4);let K=Q-(J.parpadeoT0??-9),W=K<0?0:K<0.06?K/0.06:K<0.09?1:K<0.16?1-(K-0.09)/0.07:0;if(J.caraFija){let U=J.caraFija,G=Z.mesh.morphTargetInfluences;if(G)G[Z.iP]=U.p*0.85,G[Z.iS]=U.s;return J.parpadeo=U.p,U.p}let Y=J.index,X=0;if($?.fin&&$.fin.team!=null&&Q-$.fin.t<5&&Q>=$.fin.t)X=Y%2===$.fin.team?0.95:-0.7;else if($?.habla?.has(Y))X=$.hablaTipo?.get(Y)==="win"?0.85:0.2;else{if(J.casual==null)J.casual=Q+8+Math.random()*30;if(Q>J.casual+2.5)J.casual=Q+15+Math.random()*45;if(Q>=J.casual)X=0.45}J.sonrisa=(J.sonrisa??0)+(X-(J.sonrisa??0))*(1-Math.exp(-($?.dt||0.016)*3.5));let H=Z.mesh.morphTargetInfluences;if(H)H[Z.iP]=W*0.85,H[Z.iS]=J.sonrisa;return J.parpadeo=W,W}function pR(J,Q){let $=J.index,Z=0.23+$%4*0.012,K=Q*Z*Math.PI*2+$*1.9,W=Math.sin(K);return{b:W>0?W:W*0.7,balanceo:Math.sin(Q*0.11+$*2.3)*0.022+Math.sin(Q*0.29+$)*0.008,ladeo:Math.sin(Q*0.07+$*1.3)*0.014}}var UX=new _,OK=new _,X9=new _,S7=new _,A9=new _,b8=new HJ,RK=(J)=>{let Q=Math.sin(J*127.1+311.7)*43758.5453;return Q-Math.floor(Q)};function mR(J,Q,$,Z){let K=J.index;if(K>=4||!$)return $?.foco&&Q-$.foco.t<2.5?Z.copy($.foco.p):Z.set(0,B0.surfaceY,0);if($.fin&&Q-$.fin.t<5){if($.fin.team!=null&&K%2===$.fin.team&&$.cabezas[(K+2)%4])return Z.copy($.cabezas[(K+2)%4]);return NX(J,0,B0.surfaceY,B0.seatDistance-B0.rackRadius,Z)}if(J.trago&&J.bebida){let X=J.trago.fijo??Q-J.trago.t0;if(X<UJ[0]+0.1||X>UJ[2]+0.5&&X<UJ[3]+0.1)return Z.copy(J.bebida.home);if(X<=3.4)return J.head.getWorldPosition(Z),Z.addScaledVector(H9,1).addScaledVector(I9,-0.15)}{let X=$.saludo;if(X&&(X.seat===K||X.e<(X.seat==null?3:1.6)))return Z.copy(X.p)}if($.foco&&Q-$.foco.t<1.4)return Z.copy($.foco.p);for(let X of $.habla)if(X!==K&&$.cabezas[X])return Z.copy($.cabezas[X]);if($.jugando&&$.turno===K){let X=Math.floor(Q/1.3);return NX(J,(RK(X+K*9)-0.5)*0.12,B0.surfaceY+0.02,B0.seatDistance-B0.rackRadius+0.02,Z)}let W=Math.floor((Q+K*1.37)/(2.2+K*0.35)),Y=RK(W*4+K);if($.jugando&&Y<0.45&&$.cabezas[$.turno]&&$.turno!==K)return Z.copy($.cabezas[$.turno]);if(Y<0.62&&$.cabezas[(K+2)%4])return Z.copy($.cabezas[(K+2)%4]);if(!$.jugando&&Y<0.85&&$.cabezas[(K+1+W%2*2)%4])return Z.copy($.cabezas[(K+1+W%2*2)%4]);return Z.set((RK(W+7)-0.5)*0.2,B0.surfaceY,(RK(W+3)-0.5)*0.2)}function lR(J,Q,$){let{head:Z,neck:K,front:W}=J;if(!Z||!W)return;if(mR(J,Q,$,UX),!J.mirada||!$?.dt)J.mirada=(J.mirada||new _).copy(UX);else J.mirada.lerp(UX,1-Math.exp(-$.dt*5.5));for(let[Y,X]of[[K,0.4],[Z,1]]){if(!Y)continue;if(Z.getWorldPosition(OK),W.getWorldPosition(X9),X9.sub(OK),X9.lengthSq()<0.0000000001)return;if(X9.normalize(),S7.subVectors(J.mirada,OK),S7.lengthSq()<0.00000001)return;S7.normalize();let H=F6(Math.atan2(X9.z*S7.x-X9.x*S7.z,X9.x*S7.x+X9.z*S7.z),-1.25,1.25)*X;if(W8(Y,G6.setFromAxisAngle(I9,H)),W.getWorldPosition(X9),X9.sub(OK).normalize(),A9.crossVectors(X9,I9),A9.lengthSq()<0.00000001)continue;A9.normalize();let U=F6(Math.asin(_$(S7.y))-Math.asin(_$(X9.y)),-0.75,0.55)*X;W8(Y,G6.setFromAxisAngle(A9,U))}}var uR=0.23,dR=[["lomo",0.4],["spine",0.34],["chest",0.26]],MB=new HJ;function cR(J,Q,$=0){if(!J.spine||!J.spine.parent)return;if(A9.copy(S8),J.hips&&J.lomo)for(let[Z,K]of dR){let W=J[Z];if(!W)continue;W8(W,b8.setFromAxisAngle(A9,Q*K))}else W8(J.spine,b8.setFromAxisAngle(A9,Q));if($)W8(J.spine,b8.setFromAxisAngle(I9,$))}var LK=new _,VK=new _,T$=new _,kK=new _;function PK(J,Q,$=!1,Z=null){for(let O of J.pose)O.bone.position.copy(O.position),O.bone.quaternion.copy(O.quaternion),O.bone.scale.copy(O.scale);J.holder.updateMatrixWorld(!0),BR(J);let K=QN(J.index,Q,$);if(J.spine)J.spine.quaternion.multiply(YX.setFromAxisAngle($N,K.breath));let W=!$,Y=W?pR(J,Q):{b:0,balanceo:0,ladeo:0},X=J.index,H=X<4&&J.brazos,U=0,G=0;if(H&&Z?.fin&&Z.fin.team!=null){let O=Q-Z.fin.t;if(O>=0&&O<5)G=Math.sin(Math.min(1,O/0.5)*Math.PI/2)*(O>4?5-O:1),U+=(X%2===Z.fin.team?-0.1:0.07)*G}if(H&&Z?.jugando&&Z.turno===X)U+=0.04;let F=H&&W&&J.front?fR(J,Q,Z):null,N=[];if(H)for(let O of J.brazos){let D=AR.copy(zR(J,O,Q)),R=O.lado==="Right"?vR(J,Q,D):null,E=!!R,M=null;if(!R&&F!=null&&O.lado==="Right")R=BK.set(0,0,0),M=YN(J,F,D,R).clone();if(R=(R||D).clone(),!E&&W&&Z?.habla?.has(X)&&O.lado==="Left")J.gesto=Math.min(1,(J.gesto||0)+(Z.dt||0)*3);else if(O.lado==="Left")J.gesto=Math.max(0,(J.gesto||0)-(Z?.dt||1)*2);if(O.lado==="Left"&&J.gesto>0){let k=x8(J.gesto);R.addScaledVector(H9,0.06*k).addScaledVector(S8,-0.07*k),R.y+=0.07*k+Math.sin(Q*5.2)*0.012*k}if(O.lado==="Right"&&!E&&G&&X%2===Z.fin.team){let k=Q-Z.fin.t;if(k<1.1)R.y+=Math.max(0,Math.sin(Math.min(1,k/0.9)*Math.PI))*0.13}N.push({brazo:O,o:R,jugando:E,dedos:M,reposo:D.clone()})}let q=0;if(H){let O=N.find((D)=>D.jugando);if(O&&O.brazo.brazo){J.holder.worldToLocal(T$.copy(O.o));let D=Math.hypot(T$.x,T$.z-0.12);U+=F6((D-0.42)/0.55,0,0.34),q=F6(Math.atan2(T$.x,T$.z)*0.3,-0.3,0.3)}}if(cR(J,uR*(J.brazos?1:0.6)+U,q),F!=null){let O=(R,E)=>Math.max(0,1-Math.abs(F-R)/E),D=x8(Math.max(O(UJ[0],0.9),O(UJ[3],0.9)));if(J.spine)W8(J.spine,b8.setFromAxisAngle(H9,0.16*D))}if(W){if(J.spine)W8(J.spine,b8.setFromAxisAngle(I9,Y.balanceo));if(J.spine)W8(J.spine,b8.setFromAxisAngle(H9,Y.ladeo));if(J.chest)W8(J.chest,b8.setFromAxisAngle(S8,-0.018*Y.b));if(J.hombros){for(let[O,D]of J.hombros)if(D)W8(D,b8.setFromAxisAngle(H9,O*0.03*(Y.b+0.3)))}}if(lR(J,Q,Z),gR(J,Q,Z),J.head)J.head.quaternion.multiply(YX.setFromAxisAngle(I9,K.headYaw*0.5)),J.head.quaternion.multiply(YX.setFromAxisAngle($N,K.headNod)),J.head.updateMatrixWorld(!0);if(W&&J.head){if(Z?.habla?.has(X)){let O=0.035*(0.6+0.4*Math.sin(Q*1.7));W8(J.head,b8.setFromAxisAngle(S8,Math.sin(Q*6.1)*O*0.5+Math.sin(Q*3.3)*O*0.5))}if(G&&X%2!==Z.fin.team){let O=Q-Z.fin.t;if(O>0.6&&O<2.6)W8(J.head,b8.setFromAxisAngle(I9,Math.sin((O-0.6)*Math.PI*2.4)*0.16*(2.6-O)/2))}}if(F!=null&&F>UJ[1]-0.2&&F<UJ[2]+0.2&&J.head){let O=Math.sin(Math.min(1,(F-UJ[1]+0.2)/(UJ[2]-UJ[1]+0.4))*Math.PI);W8(J.head,b8.setFromAxisAngle(S8,-0.3*O))}if(W&&J.reaction&&J.head){let O=Q-J.reaction.time;if(O>=0&&O<1.2){let D=Math.sin(O/1.2*Math.PI)*0.035;W8(J.head,b8.setFromAxisAngle(S8,D))}}for(let{brazo:O,o:D,jugando:R,dedos:E,reposo:M}of N){if(E)E.copy(YN(J,F,M,D));let k=O.lado==="Left"?1:-1;O.brazo.getWorldPosition(LK);let V=E?bR(F):0;if(V>0)LK.add(XX(k*0.32,-0.75,-0.6,VK).lerp(XX(k*0.45,-0.85,0.25,BK),V));else LK.add(XX(k*(R?0.55:0.32),-0.75,R?-0.15:-0.6,VK));if(kR(O,D,LK),O.antebrazo.getWorldPosition(P9),O.mano.getWorldPosition(kK),h8.subVectors(kK,P9),h8.y=0,h8.lengthSq()<0.00000001)h8.copy(H9);if(h8.normalize(),h8.addScaledVector(S8,-k*(R?0:0.12)).normalize(),h8.y=R?-0.55:-0.3,OQ.set(0,-1,0).addScaledVector(S8,-k*0.22),O.lado==="Left"&&J.gesto>0){let L=x8(J.gesto);OQ.lerp(VK.copy(S8).multiplyScalar(-1).add(BK.set(0,0.4,0)),L*0.8),h8.y+=0.4*L}if(E)h8.lerp(E,V).normalize(),OQ.lerp(VK.copy(S8).addScaledVector(I9,-0.15),V).normalize();if(PR(O,h8,OQ),E)hR(J,F);if(W&&!R&&!E&&O.lado==="Right"&&J.toque&&Q-J.toque.t0<0.7){let L=Q-J.toque.t0;O.mano.getWorldQuaternion(z9),A9.set(1,0,0).applyQuaternion(z9),W8(O.mano,b8.setFromAxisAngle(A9,-0.5*Math.max(0,Math.sin(L/0.7*Math.PI*4))))}else if(W&&!R&&!E&&O.lado==="Right"&&!(Z?.turno===X&&Z?.jugando)){let L=4.6+X*0.9,P=(Q+X*1.3)%L;if(P<0.55)O.mano.getWorldQuaternion(z9),A9.set(1,0,0).applyQuaternion(z9),W8(O.mano,b8.setFromAxisAngle(A9,-0.22*Math.max(0,Math.sin(P/0.55*Math.PI*4))))}}J.holder.updateMatrixWorld(!0)}function GN({scene:J,texture:Q,mat:$,box:Z,cylinder:K,random:W,teal:Y,wood:X,storeSign:H}){let U=Q((L,P,T)=>{L.fillStyle="#e0d3b4",L.fillRect(0,0,P,T);let B=L.createLinearGradient(0,0,0,T);B.addColorStop(0,"#cac09b18"),B.addColorStop(0.7,"#14382d00"),B.addColorStop(1,"#162d2566"),L.fillStyle=B,L.fillRect(0,0,P,T);for(let z=0;z<7000;z++)L.fillStyle=z%3?"#b4ad8618":"#142d2924",L.fillRect(W()*P,W()*T,1+W()*3,1+W()*2);for(let z=0;z<70;z++){let d=W()*P,b=z<50?T*(0.72+W()*0.28):W()*T,n=5+W()*14;L.fillStyle=z%3?"rgba(160,145,112,.35)":"rgba(120,110,90,.25)",L.beginPath();for(let Z0=0;Z0<8;Z0++){let v=Z0*Math.PI/4,y=n*(0.6+W()*0.5);L.lineTo(d+Math.cos(v)*y,b+Math.sin(v)*y*0.65)}L.fill()}L.strokeStyle="#1b372e24";for(let z=48;z<T;z+=57)L.beginPath(),L.moveTo(0,z),L.lineTo(P,z),L.stroke()},1024,1024);Y.map=U,Y.color.set("#f2ecde"),Y.needsUpdate=!0,X.color.set("#bca98a"),X.roughness=0.84;let G=()=>{H.material.map=Q((L,P,T)=>{L.fillStyle="#efe3c4",L.fillRect(0,0,P,T);for(let d=0;d<2600;d++)L.fillStyle=d%2?"rgba(120,100,70,.07)":"rgba(255,250,235,.08)",L.fillRect(W()*P,W()*T,2+W()*14,1+W()*2);let B=document.fonts?.check?.("64px Shrikhand")?"Shrikhand":"Georgia",z=B==="Shrikhand"?T*0.66:T*0.56;L.font=`${z}px ${B}`,L.textAlign="center",L.textBaseline="middle",L.fillStyle="#c8402f",L.fillText("Colmado La Esquina",P/2+z*0.06,T/2+z*0.1),L.fillStyle="#24518a",L.fillText("Colmado La Esquina",P/2,T/2+z*0.04),L.strokeStyle="#3d938e",L.lineWidth=12,L.strokeRect(6,6,P-12,T-12);for(let d=0;d<1400;d++)L.fillStyle="rgba(239,227,196,.35)",L.fillRect(W()*P,W()*T,1+W()*3,1+W()*2)},2048,162),H.material.emissiveMap=H.material.map,H.material.needsUpdate=!0};H.material=new o0({roughness:0.9,emissive:"#ffffff",emissiveIntensity:0.1}),G(),document.fonts?.load?.("64px Shrikhand").then(G).catch(()=>{});for(let[L,P]of[[-2.7,-3.5],[2.4,-3.3]])Z(L,0.18,P,0.51,0.35,0.4,"#897052"),Z(L+0.05,0.47,P-0.04,0.4,0.23,0.32,"#a68c62");let F=(L,P,T)=>{let B=document.createElement("canvas");B.width=L,B.height=P;let z=new c8(B);z.colorSpace=$8,z.anisotropy=4;let d=()=>{let b=B.getContext("2d"),n=document.fonts?.check?.("64px Shrikhand"),Z0=document.fonts?.check?.('700 40px "DM Sans"')?'"DM Sans",':"";b.fillStyle="#233a2d",b.fillRect(0,0,L,P);for(let v=0;v<70;v++)b.fillStyle=`rgba(225,225,195,${0.015+W()*0.03})`,b.beginPath(),b.ellipse(W()*L,W()*P,L*(0.04+W()*0.14),P*(0.015+W()*0.045),W()*3,0,Math.PI*2),b.fill();b.textAlign="center",b.textBaseline="middle",b.lineCap="round";for(let[v,y,u,I,x]of T){if(v==="—"){b.strokeStyle="rgba(225,225,195,.45)",b.lineWidth=6,b.beginPath(),b.moveTo(L*0.17,y+3),b.quadraticCurveTo(L/2,y-5,L*0.83,y+1),b.stroke();continue}b.font=I==="titulo"?n?`${u}px Shrikhand`:`bold ${u*0.95}px Georgia`:`${I} ${u}px ${Z0}sans-serif`;let h=b.measureText(v).width,f=L*0.84;if(b.save(),b.translate(L/2,y),h>f)b.scale(f/h,1);b.fillStyle=x;for(let g=0;g<3;g++)b.globalAlpha=g?0.4:0.75,b.fillText(v,(W()-0.5)*3,(W()-0.5)*3);b.restore()}for(let v=0;v<L*P/40;v++)b.fillStyle="rgba(35,58,45,.5)",b.fillRect(W()*L,W()*P,1+W()*2,1+W());b.strokeStyle="#9c8c62",b.lineWidth=L*0.04,b.strokeRect(L*0.02,L*0.02,L-L*0.04,P-L*0.04),b.strokeStyle="rgba(60,40,20,.35)",b.lineWidth=4,b.strokeRect(L*0.04,L*0.04,L-L*0.08,P-L*0.08),z.needsUpdate=!0};return d(),Promise.all([document.fonts?.load?.("64px Shrikhand"),document.fonts?.load?.('700 40px "DM Sans"')]).then(d).catch(()=>{}),new o0({roughness:1,map:z,emissive:"#ffffff",emissiveMap:z,emissiveIntensity:0.06})},N="#ece7cc",q="#e9b35a",O="#a9d3dd";{let L=new C0(new RJ(0.72,0.69),F(768,736,[["HOY HAY",110,74,"titulo",N],["CAFÉ",262,78,800,N],["HIELO · PAN",388,66,800,"#dcd9b8"],["—",478],["REFRESCOS",572,60,700,O]]));L.position.set(-3.43,1.6,-2.33),L.rotation.z=0.025,J.add(L),Z(-3.43,1.245,-2.315,0.66,0.018,0.05,"#8a7a55"),Z(-3.28,1.262,-2.31,0.06,0.016,0.016,"#efeadb")}{let L=document.documentElement.lang==="en",P=new zJ,T=$("#6b4a2e",0.8);P.position.set(-2,0,-2.1),P.rotation.y=0.5,J.add(P);let d=new C0(new RJ(0.56,0.72),F(560,720,[[L?"COMING":"YA",96,92,"titulo",q],[L?"SOON":"VIENE",206,92,"titulo",q],["—",282],[L?"1 vs 1":"1 contra 1",372,80,800,N],[L?"Online":"En línea",478,80,800,N],[L?"your people,":"tu gente,",576,50,600,O],[L?"from anywhere":"de donde sea",636,50,600,O]])),b=new zJ;b.rotation.x=-0.2,P.add(b),d.position.set(0,0.44,0.012),b.add(d);{let Z0=new C0(new TJ(0.56,0.72,0.012),T);Z0.position.set(0,0.44,0),b.add(Z0)}for(let[Z0,v,y,u]of[[-0.29,0.42000000000000004,0.035,0.88],[0.29,0.42000000000000004,0.035,0.88],[0,0.8500000000000001,0.62,0.035],[0,0.03,0.62,0.035]]){let I=new C0(new TJ(y,u,0.022),T);I.position.set(Z0,v,0),b.add(I)}let n=new zJ;n.position.z=-0.32,n.rotation.x=0.2,P.add(n);for(let Z0 of[-0.27,0.27]){let v=new C0(new TJ(0.03,0.8600000000000001,0.02),T);v.position.set(Z0,0.43000000000000005,-0.02),n.add(v)}P.traverse((Z0)=>{if(Z0.isMesh)Z0.castShadow=!0,Z0.receiveShadow=!0})}let D=[];Z(-1.12,1.59,-4,0.42,0.21,0.31,"#677761"),Z(-1.12,1.61,-3.836,0.34,0.1,0.016,"#414b3d"),Z(-0.38,1.5,-3.98,0.3,0.018,0.22,"#c5b887");for(let[L,P,T]of[[0.7,-4.03,"#8b7747"],[0.98,-4.07,"#637751"],[1.29,-4.02,"#a88b50"]])K(L,1.6,P,0.07,0.075,0.25,T,14),K(L,1.739,P,0.077,0.077,0.028,"#aaa386",12);Z(0.2,1.51,-4.01,0.4,0.07,0.28,"#6c5838");for(let L=0;L<4;L++){let P=new C0(new H8(1,10,6),$(L%2?"#bca276":"#a98e61"));P.scale.set(0.055,0.035,0.115),P.position.set(0.07+L*0.085,1.57,-4),P.rotation.y=(L-1.5)*0.13,J.add(P)}let R=new bJ({transparent:!0,depthWrite:!1,map:Q((L,P,T)=>{for(let B=0;B<90;B++)L.fillStyle=B%2?"#152c2110":"#3036230a",L.beginPath(),L.ellipse(P/2+(W()-0.5)*P*0.45,T/2+(W()-0.5)*T*0.45,W()*P*0.24,W()*T*0.18,W()*Math.PI,0,Math.PI*2),L.fill()},256,256)});for(let[L,P,T,B]of[[-2.4,-2.2,1.1,0.9],[2.5,-2.5,1.3,0.8],[0,-3.25,2,0.6]]){let z=new C0(new RJ(T,B),R);z.rotation.x=-Math.PI/2,z.position.set(L,0.008,P),J.add(z)}for(let[L,P]of[[-3,-0.9],[3.3,-1.5]]){K(L,0.18,P,0.18,0.13,0.34,"#87553c",14),K(L,0.354,P,0.16,0.16,0.012,"#3f422d",12);let T=new zJ;T.position.set(L,0.36,P),J.add(T);for(let B=0;B<7;B++){let z=new U$;z.moveTo(0,0),z.quadraticCurveTo(-0.09,0.23,0,0.55+W()*0.12),z.quadraticCurveTo(0.09,0.23,0,0);let d=new C0(new G$(z,5),new o0({color:B%2?"#597d4f":"#3c603e",roughness:1,side:oJ}));d.rotation.set(0.3+W()*0.4,B*Math.PI*2/7,0),T.add(d)}D.push(T)}let E=new RJ(0.55,1.3,5,9),M=new C0(E,new o0({color:"#b2a27c",roughness:1,side:oJ}));M.position.set(-2.85,1.75,-3.05),J.add(M);let k=E.attributes.position,V=k.array.slice();return{update(L){D.forEach((P,T)=>P.rotation.z=Math.sin(L*0.53+T*2.1)*0.015);for(let P=0;P<k.count;P++){let T=V[P*3+1];k.setZ(P,Math.sin(L*1.17+T*3)*0.025*(0.65-T)/1.3)}k.needsUpdate=!0}}}function FN({scene:J,texture:Q,mat:$,box:Z,cylinder:K,staticGeo:W,random:Y}){let X=(j=0,p=0,o=0)=>new _(j,p,o),H=(j,p,o,K0,r,O0,F0=5000)=>{j.fillStyle=K0,j.fillRect(0,0,p,o);for(let X0=0;X0<F0;X0++)j.fillStyle=Y()>0.5?r:O0,j.fillRect(Y()*p,Y()*o,1+Y()*4,1+Y()*3)},U=[];function G(j,{w:p=1024,h:o=256,fondo:K0="#efe3c4",tinta:r="#24518a",sombra:O0="#c8402f",borde:F0=null,px:X0=0.62}={}){let _0=document.createElement("canvas");_0.width=p,_0.height=o;let c0=new c8(_0);c0.colorSpace=$8;let EJ=()=>{let g0=_0.getContext("2d"),PJ=document.fonts?.check?.("64px Shrikhand")?"Shrikhand":"Georgia";if(K0){g0.fillStyle=K0,g0.fillRect(0,0,p,o);for(let nJ=0;nJ<p*1.2;nJ++)g0.fillStyle=nJ%2?"rgba(120,100,70,.07)":"rgba(255,250,235,.08)",g0.fillRect(Math.random()*p,Math.random()*o,2+Math.random()*12,1+Math.random()*2)}else g0.clearRect(0,0,p,o);let _J=o*X0;g0.font=`${_J}px ${PJ}`;let gJ=g0.measureText(j).width;if(gJ>p*0.9)_J*=p*0.9/gJ,g0.font=`${_J}px ${PJ}`;g0.textAlign="center",g0.textBaseline="middle";let l=_J*0.06;if(O0)g0.fillStyle=O0,g0.fillText(j,p/2+l,o/2+l+_J*0.04);if(g0.fillStyle=r,g0.fillText(j,p/2,o/2+_J*0.04),F0)g0.strokeStyle=F0,g0.lineWidth=o*0.07,g0.strokeRect(g0.lineWidth/2,g0.lineWidth/2,p-g0.lineWidth,o-g0.lineWidth);for(let nJ=0;nJ<p*0.5;nJ++)g0.fillStyle=K0?"rgba(239,227,196,.3)":"rgba(0,0,0,0)",g0.fillRect(Math.random()*p,Math.random()*o,1+Math.random()*3,1+Math.random()*2);c0.needsUpdate=!0};return EJ(),U.push(EJ),c0}document.fonts?.load?.("64px Shrikhand").then(()=>U.forEach((j)=>j())).catch(()=>{});let F=new o0({roughness:0.93,map:Q((j,p,o)=>{H(j,p,o,"#e3d6b8","rgba(255,250,236,.10)","rgba(120,100,70,.08)");let K0=j.createLinearGradient(0,0,0,o);K0.addColorStop(0,"rgba(90,70,50,.12)"),K0.addColorStop(0.18,"rgba(90,70,50,0)"),K0.addColorStop(0.8,"rgba(90,70,50,0)"),K0.addColorStop(1,"rgba(90,70,50,.2)"),j.fillStyle=K0,j.fillRect(0,0,p,o);for(let r=0;r<22;r++){let O0=Y()*p,F0=o*(0.08+Y()*0.3),X0=j.createLinearGradient(0,0,0,F0);X0.addColorStop(0,"rgba(80,70,55,.2)"),X0.addColorStop(1,"rgba(80,70,55,0)"),j.fillStyle=X0,j.fillRect(O0,0,3+Y()*8,F0)}},512,512)}),N=new o0({roughness:0.9,map:Q((j,p,o)=>{H(j,p,o,"#3f9a96","rgba(200,240,230,.10)","rgba(20,50,50,.10)");for(let K0=0;K0<50;K0++)j.fillStyle="rgba(225,218,195,.55)",j.beginPath(),j.ellipse(Y()*p,Y()*o,2+Y()*9,1+Y()*5,Y()*3,0,Math.PI*2),j.fill()},256,256)});Z(-3.48,0.625,-2.355,0.702,1.25,0.012,N),Z(3.45,0.625,-2.355,0.802,1.25,0.012,N),Z(-3.906,0.625,-3.85,0.012,1.25,2.72,N),Z(3.906,0.625,-3.85,0.012,1.25,2.72,N);let q=22,O="#3d8a5c",D="#e8dfc8",R=Q((j,p,o)=>{for(let r=0;r<q;r++)j.fillStyle=r%2?D:O,j.fillRect(r*p/q,0,Math.ceil(p/q),o);for(let r=0;r<2500;r++)j.fillStyle=Y()>0.5?"rgba(255,250,235,.06)":"rgba(20,30,20,.07)",j.fillRect(Y()*p,Y()*o,2,2);let K0=j.createLinearGradient(0,0,0,o);K0.addColorStop(0,"rgba(0,0,0,.14)"),K0.addColorStop(1,"rgba(40,30,20,0)"),j.fillStyle=K0,j.fillRect(0,0,p,o)},1024,128);W(new RJ(7.3,0.86),new o0({map:R,roughness:0.95,side:oJ}),[0,2.59,-1.955],[-1.237,0,0]);let E=Q((j,p,o)=>{let K0=p/q;for(let r=0;r<q;r++)j.fillStyle=r%2?D:O,j.fillRect(r*K0,0,Math.ceil(K0),o*0.5),j.beginPath(),j.arc(r*K0+K0/2,o*0.5,K0/2-0.5,0,Math.PI),j.fill()},1024,64);W(new RJ(7.3,0.2),new o0({map:E,roughness:0.95,side:oJ,alphaTest:0.5}),[0,2.35,-1.548]);{let j=new o0({roughness:0.8,map:Q((o,K0,r)=>{o.fillStyle="#2a3332",o.fillRect(0,0,K0,r);let O0=o.createLinearGradient(0,0,0,r);O0.addColorStop(0,"#cfe8e0"),O0.addColorStop(1,"#8fb3aa"),o.fillStyle=O0,o.fillRect(14,14,K0-28,r-28),o.strokeStyle="#1f2525",o.lineWidth=7;for(let F0=30;F0<K0-20;F0+=26)o.beginPath(),o.moveTo(F0,14),o.lineTo(F0,r-14),o.stroke();for(let F0 of[r*0.33,r*0.66])o.beginPath(),o.moveTo(14,F0),o.lineTo(K0-14,F0),o.stroke();o.strokeStyle="#e8e0cc",o.lineWidth=12,o.strokeRect(6,6,K0-12,r-12)},256,256),emissive:"#ffffff",emissiveIntensity:0.12});j.emissiveMap=j.map,W(new RJ(1.1,1),j,[3.915,1.75,-4.3],[0,Math.PI/2,0]);let p=new C0(new RJ(2.2,0.36),new o0({map:G("Víveres · Bebidas · Hielo",{w:1536,h:252,fondo:null,tinta:"#24518a",sombra:"#c8402f"}),transparent:!0,roughness:0.9}));p.position.set(3.915,2.55,-3.75),p.rotation.y=Math.PI/2,J.add(p)}let M=3.3,k=2.75,V=-2.7,L=M+k;Z(0,M+k/2,-5.2,8.2,k,0.2,F),Z(-4,M+k/2,-3.95,0.2,k,2.7,F),Z(4,M+k/2,-3.95,0.2,k,2.7,F),Z(0,M+k/2,V,8.2,k,0.2,F),Z(0,L-0.08,-3.95,8.44,0.16,2.95,"#d3c9b0"),Z(0,M+0.06,V+0.12,8.3,0.1,0.06,"#3d938e");let P=new o0({roughness:0.7,map:Q((j,p,o)=>{j.fillStyle="#2d3a3a",j.fillRect(0,0,p,o);let K0=15,r=(o-24)/K0;for(let O0=0;O0<K0;O0++){let F0=12+O0*r;j.fillStyle="#7aa39d",j.fillRect(12,F0,p-24,r*0.72),j.fillStyle="rgba(0,0,0,.25)",j.fillRect(12,F0+r*0.62,p-24,r*0.1)}j.strokeStyle="#e8e0cc",j.lineWidth=12,j.strokeRect(6,6,p-12,o-12)},256,256)});W(new RJ(1.2,1.25),P,[-2.5,4.6,V+0.107]);let T=new o0({roughness:0.7,map:P.map,emissive:"#8fb0ff",emissiveMap:P.map,emissiveIntensity:0.25}),B=new C0(new RJ(1.2,1.25),T);B.position.set(2.5,4.6,V+0.107),J.add(B);let z=new o0({roughness:0.8,emissive:"#ffffff",emissiveIntensity:0.55,map:Q((j,p,o)=>{let K0=j.createLinearGradient(0,0,0,o);K0.addColorStop(0,"#f0c27f"),K0.addColorStop(1,"#b87a44"),j.fillStyle=K0,j.fillRect(0,0,p,o),j.strokeStyle="#1d2222",j.lineWidth=6;for(let r=18;r<p;r+=22)j.beginPath(),j.moveTo(r,0),j.lineTo(r,o),j.stroke();for(let r=o*0.2;r<o;r+=o*0.2)j.beginPath(),j.moveTo(0,r),j.lineTo(p,r),j.stroke();j.lineWidth=5;for(let r=0;r<4;r++)j.beginPath(),j.arc(p/2,o*0.1+r*o*0.2,18,0,Math.PI*2),j.stroke();j.strokeStyle="#e8e0cc",j.lineWidth=14,j.strokeRect(7,7,p-14,o-14)},128,256)});z.emissiveMap=z.map,W(new RJ(1,2.1),z,[0,M+1.08,V+0.107]);let d="#262c2b";for(let j of[3.38,4.22])Z(0,j,-1.56,8,0.04,0.04,d);for(let j=-3.94;j<=3.95;j+=0.14)Z(j,3.8,-1.56,0.018,0.84,0.018,d);for(let j of[-3.97,3.97]){for(let p of[3.38,4.22])Z(j,p,-2.08,0.04,0.04,1.04,d);for(let p=-2.55;p<=-1.6;p+=0.14)Z(j,3.8,p,0.018,0.84,0.018,d)}for(let[j,p]of[[-3.3,-1.8],[3.25,-1.85],[1.5,-1.78]]){K(j,3.46,p,0.13,0.1,0.24,"#9a5a3c",12);for(let o=0;o<4;o++)W(new H8(1,8,6),$(o%2?"#5b7f4f":"#44663e",0.95),[j+(o-1.5)*0.06,3.66+o%2*0.05,p+(o%3-1)*0.04],[0,0,0],[0.12,0.14,0.1])}K(2.5,L+0.52,-4.3,0.5,0.55,1,"#1f2322",18),K(2.5,L+1.06,-4.3,0.2,0.22,0.08,"#2b302f",12),K(-1.8,L+0.35,-4.6,0.035,0.035,0.7,"#8d8f89",8);for(let[j,p]of[[-3.95,-2.75],[3.95,-2.75],[-3.95,-5.15],[3.95,-5.15]])for(let[o,K0]of[[-0.05,-0.05],[0.05,-0.05],[-0.05,0.05],[0.05,0.05]])K(j+o,L+0.42,p+K0,0.007,0.007,0.84,"#6b4a35",4);let b=$("#8a6a48",0.8),n=$("#4f7f55",0.85);for(let j of[0.55,1,1.45,1.9,2.35,2.8])Z(-3.53,j,-3.85,0.34,0.04,2.2,n);for(let j of[-4.94,-2.76])Z(-3.53,1.65,j,0.34,2.3,0.04,n);let Z0=Q((j,p,o)=>{j.fillStyle="#bdbdbd",j.fillRect(0,0,p,o),j.fillStyle="#ffffff",j.fillRect(0,o*0.34,p,o*0.34),j.fillStyle="#6a6a6a",j.fillRect(0,o*0.33,p,o*0.02),j.fillRect(0,o*0.67,p,o*0.02)},64,64),v=new o0({map:Z0,roughness:0.62}),y=["#c8402f","#e3ae55","#f3eee3","#2f6fa8","#3f8a5a","#e07a2e","#d65a7a","#f1d24a","#6fb7c9","#8a3b3b","#ffffff","#1f5f9e"],u=[],I=[],x=(j,p,o,K0,r,O0)=>{let F0=j;while(F0<p){let X0=0.07+Y()*0.12,_0=0.12+Y()*0.17,c0=Math.min(r,0.1+Y()*0.12),EJ=Y()<0.35,g0=new j0(y[Math.floor(Y()*y.length)]).multiplyScalar(0.7+Y()*0.22);if(F0+X0>p)break;let PJ=O0==="x"?X(F0+X0/2,o+_0/2,K0):X(K0,o+_0/2,F0+X0/2);(EJ?I:u).push({pos:PJ,s:EJ?X(X0*0.85,_0*0.8,X0*0.85):O0==="x"?X(X0,_0,c0):X(c0,_0,X0),col:g0}),F0+=X0+0.012}};for(let j of[1.6125,2.5725])x(-3.4,2.2,j,-4.8,0.3,"x");for(let j of[0.57,1.02,1.47,1.92,2.37,2.82])x(-4.9,-2.8,j,-3.55,0.28,"z");for(let[j,p]of[[new TJ(1,1,1),u],[new OJ(0.5,0.5,1,10),I]]){let o=new v9(j,v,p.length),K0=new wJ;p.forEach((r,O0)=>{K0.position.copy(r.pos),K0.scale.copy(r.s),K0.rotation.set(0,(Y()-0.5)*0.12,0),K0.updateMatrix(),o.setMatrixAt(O0,K0.matrix),o.setColorAt(O0,r.col)}),o.frustumCulled=!1,J.add(o)}{let o=[[0.05,0.47],[0.53,0.95]],K0=(X0,_0)=>{if(X0.fillStyle=_0?"#000":"#5b3b24",X0.fillRect(0,0,1024,368),!_0){for(let c0=0;c0<500;c0++)X0.fillStyle=c0%2?"rgba(150,100,60,.25)":"rgba(30,18,10,.25)",X0.fillRect(Math.random()*1024,Math.random()*368,20+Math.random()*80,1+Math.random()*2);X0.fillStyle="#3a2616",X0.fillRect(0,323.84,1024,44.16)}for(let[c0,EJ]of o){let g0=c0*1024,PJ=EJ*1024;X0.fillStyle=_0?"#6e6a60":"#d9d3c1",X0.fillRect(g0,44.16,PJ-g0,257.6);for(let l=0;l<2;l++){let nJ=44.16+(l+0.5)*257.6/2;X0.fillStyle=_0?"#6f6a60":"#b9b3a2",X0.fillRect(g0,nJ+51.52000000000001,PJ-g0,4);let NJ=nJ+51.52000000000001;X0.globalAlpha=_0?0.7:1;for(let VJ=g0+10;VJ<PJ-60;){let S=Math.random()<0.3,C=y[Math.floor(Math.random()*y.length)];if(S){let m=18+Math.random()*6;X0.fillStyle=_0?"#9a9a9a":"rgba(235,240,240,.9)",X0.fillRect(VJ,NJ-m*2.4,m*2,m*2.4),X0.fillStyle=C;for(let J0=0;J0<7;J0++)X0.beginPath(),X0.arc(VJ+5+Math.random()*(m*2-10),NJ-6-Math.random()*m*1.8,5,0,Math.PI*2),X0.fill();X0.fillStyle="#c8402f",X0.fillRect(VJ-2,NJ-m*2.4-8,m*2+4,9),VJ+=m*2+8}else{let m=46+Math.random()*34,J0=257.6*(0.2+Math.random()*0.1);X0.fillStyle=C,X0.beginPath(),X0.moveTo(VJ,NJ),X0.lineTo(VJ+3,NJ-J0);for(let V0=0;V0<=6;V0++)X0.lineTo(VJ+3+V0*(m-6)/6,NJ-J0-(V0%2?5:0));X0.lineTo(VJ+m,NJ),X0.closePath(),X0.fill(),X0.fillStyle="rgba(255,255,255,.7)",X0.fillRect(VJ+m*0.2,NJ-J0*0.62,m*0.6,J0*0.22),X0.fillStyle="rgba(255,255,255,.25)",X0.fillRect(VJ+4,NJ-J0+8,5,J0-14),VJ+=m+5}}X0.globalAlpha=1}if(!_0)X0.fillStyle="rgba(255,255,255,.22)",X0.beginPath(),X0.moveTo(g0+20,44.16),X0.lineTo(g0+70,44.16),X0.lineTo(g0+20,301.76),X0.lineTo(g0-10+20,301.76),X0.fill(),X0.strokeStyle="#3a2616",X0.lineWidth=10,X0.strokeRect(g0,44.16,PJ-g0,257.6)}},r=(X0)=>Q((_0)=>K0(_0,X0),1024,368),O0=new o0({map:r(!1),emissive:"#fff4de",emissiveMap:r(!0),emissiveIntensity:0.2,roughness:0.55}),F0=new C0(new RJ(3.9,1.4),O0);F0.position.set(0,0.7,-3.924),J.add(F0)}let h=Q((j,p,o)=>{let r=o/7;j.fillStyle="#8a7a5a",j.fillRect(p/2-2,0,4,o);for(let O0=0;O0<7;O0++){let F0=O0*r+4;j.fillStyle=y[(O0*5+3)%y.length],j.fillRect(6,F0,p-12,r-8),j.fillStyle="rgba(255,255,255,.3)",j.fillRect(10,F0+6,p*0.16,r-20),j.fillStyle="rgba(255,255,255,.75)",j.fillRect(p*0.3,F0+r*0.36,p*0.4,r*0.16)}},64,448),f=new o0({map:h,roughness:0.45,alphaTest:0.5,side:oJ});for(let j of[-1.74,-1.52,1.52,1.74])W(new RJ(0.15,0.86),f,[j,2.66,-3.86],[0,(Y()-0.5)*0.5,0]);let g=new C0(new RJ(0.8,1.5),new bJ({color:new j0(1.05,1.08,1.1),map:Q((j,p,o)=>{j.fillStyle="#dcecef",j.fillRect(0,0,p,o);let K0=5;for(let O0=0;O0<K0;O0++){let F0=o/K0,X0=O0*F0;j.fillStyle="rgba(140,160,165,.9)",j.fillRect(0,X0+F0*0.88,p,5);for(let _0=0;_0<8;_0++){let c0=(p-20)/8,EJ=10+_0*c0;j.fillStyle=["#c8402f","#2c7a3f","#e3ae55","#7a3a1c","#2f6fa8","#f3eee3","#e07a2e"][(_0+O0*3)%7],j.fillRect(EJ+c0*0.15,X0+F0*0.3,c0*0.7,F0*0.56),j.fillRect(EJ+c0*0.36,X0+F0*0.12,c0*0.28,F0*0.2)}}let r=j.createLinearGradient(0,0,p,0);r.addColorStop(0,"rgba(255,255,255,.3)"),r.addColorStop(0.35,"rgba(255,255,255,0)"),j.fillStyle=r,j.fillRect(0,0,p,o),j.strokeStyle="#9aa8aa",j.lineWidth=10,j.strokeRect(0,0,p,o)},256,480)}));g.position.set(2.95,1.12,-4.09),J.add(g);let Y0=new C0(new RJ(0.9,0.2),new bJ({map:G("Bien fría",{w:720,h:160,fondo:"#b8372b",tinta:"#f3eee3",sombra:null,px:0.62}),color:new j0(1.1,1.1,1.1)}));Y0.position.set(2.95,2.17,-4.14),J.add(Y0),Z(2.45,0.4,-1.86,1,0.8,0.6,"#e7ebe8"),Z(2.45,0.83,-1.86,1.04,0.06,0.64,"#d4dad8"),Z(2.45,0.12,-1.555,0.96,0.1,0.012,"#b9c0bd");{let j=new C0(new RJ(0.62,0.19),new o0({map:G("HIELO",{w:640,h:196,fondo:null,tinta:"#1f5f9e",sombra:"#c8402f",px:0.7}),transparent:!0,roughness:0.8}));j.position.set(2.45,0.55,-1.553),J.add(j)}{let j=$("#2d63a8",0.5),p=new o0({color:"#8cc0e6",roughness:0.12,transparent:!0,opacity:0.84});for(let r=0;r<2;r++)for(let O0=0;O0<3;O0++){let F0=3.15+r*0.4,X0=0.21+O0*0.4;W(new OJ(0.155,0.155,0.4,16),p,[F0,X0,-2],[Math.PI/2,0,0]),W(new OJ(0.05,0.05,0.1,10),p,[F0,X0,-2.25],[Math.PI/2,0,0])}for(let r of[0,0.4,0.8,1.2])Z(3.35,r+0.012,-2,0.84,0.024,0.46,j);for(let r of[2.94,3.35,3.7600000000000002])Z(r,0.61,-2,0.03,1.22,0.46,j)}let G0=(j,p,o,K0,r)=>{let O0=$(r,0.5),F0=(X0,_0,c0,EJ,g0=0)=>{X0.rotateX(g0);let PJ=X(_0,c0,EJ).applyAxisAngle(X(0,1,0),K0);W(X0,O0,[j+PJ.x,p+PJ.y,o+PJ.z],[0,K0,0])};F0(new w8(0.46,0.035,0.43,2,0.015),0,0.43,0),F0(new w8(0.44,0.42,0.03,2,0.012),0,0.71,-0.22,-0.16);for(let X0 of[-0.2,0.2])F0(new OJ(0.018,0.024,0.43,6),X0,0.215,0.17,0.12),F0(new OJ(0.018,0.024,0.45,6),X0,0.22,-0.19,-0.14),F0(new TJ(0.03,0.18,0.3),X0*1.1,0.54,-0.02)};for(let j=0;j<4;j++)G0(-3.42,j*0.075,-1.32-j*0.012,0.3,"#ecece6");G0(3.55,0,0.55,-1.9,"#ecece6");{let K0=(_0,c0,EJ,g0,PJ,_J=0,gJ=0)=>{_0.rotateX(_J),_0.rotateZ(gJ);let l=X(EJ,g0,PJ).applyAxisAngle(X(0,1,0),0.3);W(_0,c0,[-3.25+l.x,l.y,2.85+l.z],[0,0.3,0])},r=$("#171b1b",0.8),O0=$("#9aa3a0",0.35,0.6),F0=$("#a8382c",0.45,0.1),X0=$("#1e2222",0.7);for(let _0 of[-0.52,0.5])K0(new f9(0.26,0.055,8,18),r,_0,0.3,0),K0(new OJ(0.09,0.09,0.08,10),O0,_0,0.3,0,Math.PI/2);K0(new w8(0.6,0.22,0.24,2,0.05),F0,-0.02,0.53,0,0,-0.08),K0(new w8(0.55,0.08,0.26,2,0.03),X0,-0.28,0.68,0),K0(new w8(0.28,0.34,0.2,2,0.05),F0,0.37,0.64,0,0,-0.35),K0(new OJ(0.018,0.018,0.62,6),O0,0.44,0.92,0,Math.PI/2),K0(new OJ(0.02,0.02,0.62,6),O0,0.47,0.6,0,0,0.35),K0(new OJ(0.03,0.035,0.45,8),O0,-0.35,0.3,0.13,0,Math.PI/2+0.1),K0(new w8(0.3,0.03,0.22,1,0.01),O0,-0.6,0.73,0)}for(let j=-9;j<4.4;j+=2)Z(j+0.5,-0.074,3.45,1,0.152,0.202,"#d6b24e");Z(8.3,-0.2,-4.575,7.4,0.1,15.85,"#2b3133"),Z(4.6,-0.075,-4.575,0.2,0.15,15.85,"#a8a391"),Z(12.3,-0.07,-4.575,1.2,0.16,15.85,"#8a8578");for(let j=-11;j<3;j+=1.8)Z(8.3,-0.146,j,0.06,0.008,0.7,"#b9ad83");{let j=new o0({color:"#ffd08a",emissive:"#ffb35a",emissiveIntensity:2.2}),p=$("#2a3436",0.8),o=["#d8a25a","#8fb8a8","#e0d2b0","#c9897d","#b9c47a"],K0=-12,r=0;while(K0<2.4){let O0=3+Y()*1.6,F0=3+Y()*2.6,X0=o[r++%o.length];Z(14.4,F0/2,K0+O0/2,3,F0,O0,X0),Z(14.4,F0+0.08,K0+O0/2,3.1,0.16,O0+0.1,"#ddd4bf");let _0=Math.max(1,Math.floor(O0/1.5));for(let c0=0;c0<_0;c0++){let EJ=K0+(c0+0.5)*O0/_0;if(W(new RJ(0.75,0.95),Y()<0.4?j:p,[12.885,1.55,EJ],[0,-Math.PI/2,0]),F0>4.2)W(new RJ(0.7,0.8),Y()<0.35?j:p,[12.885,F0-1.1,EJ],[0,-Math.PI/2,0])}K0+=O0+0.15}}{let j=new o0({roughness:0.6,metalness:0.3,map:Q((o,K0,r)=>{o.fillStyle="#8f9a94",o.fillRect(0,0,K0,r);for(let O0=0;O0<r;O0+=8)o.fillStyle="rgba(40,45,44,.35)",o.fillRect(0,O0,K0,2),o.fillStyle="rgba(230,235,230,.18)",o.fillRect(0,O0+3,K0,2);for(let O0=0;O0<40;O0++)o.fillStyle="rgba(120,70,40,.18)",o.fillRect(Y()*K0,Y()*r,4+Y()*20,2+Y()*10)},256,256)});W(new RJ(2.3,2.1),j,[-7,1.05,-1.365]),Z(-7,2.2,-1.33,2.45,0.2,0.1,"#6d7571");let p=new C0(new RJ(1.7,0.42),new o0({map:G("Banca La Suerte",{w:1024,h:252,fondo:"#2f7a4d",tinta:"#f3eee3",sombra:"#1b2c22",borde:"#e3ae55",px:0.52}),roughness:0.85,emissive:"#ffffff",emissiveIntensity:0.08}));p.material.emissiveMap=p.material.map,p.position.set(-10.5,2.72,-1.36),J.add(p)}let M0=X(4.3,0,3);K(M0.x,3.9,M0.z,0.11,0.16,7.8,"#8e8a80",10),Z(M0.x,7.25,M0.z,0.1,0.1,1.7,"#5c574c"),K(M0.x+0.28,6.3,M0.z,0.2,0.2,0.62,"#6d7470",12);let S0=(j,p,o,K0="#141819",r=0.011)=>{let O0=j.clone().lerp(p,0.5);O0.y-=o*2,W(new v8(new n8(j,O0,p),22,r,4,!1),$(K0),[0,0,0])};for(let j of[-0.6,0,0.6])S0(X(M0.x,7.3,M0.z+j),X(6,6.6,9.2+j*0.4),0.25);for(let j of[-0.5,0.5])S0(X(M0.x,7.3,M0.z+j),X(-5,4.2,-1+j*0.6),0.55);S0(X(M0.x,6.4,M0.z),X(3.95,5.7,-2.72),0.35),S0(X(M0.x,6.2,M0.z),X(3.95,5.5,-2.72),0.5,"#1d2121",0.008),S0(X(M0.x,5.9,M0.z),X(4.35,5.4,-9),0.4,"#1d2121",0.009),S0(X(M0.x,5.7,M0.z),X(4.35,5.2,-9),0.6,"#20241f",0.007);{let j=new J7(Array.from({length:14},(p,o)=>{let K0=o/13*Math.PI*4;return X(M0.x+0.16+Math.cos(K0)*0.14,5.2-o*0.018+Math.sin(K0)*0.14,M0.z+Math.sin(K0)*0.05)}));W(new v8(j,60,0.008,4,!1),$("#141819"),[0,0,0])}let $0=0;return{update(j){if(j>$0)$0=j+0.25+Math.random()*1.4,T.emissiveIntensity=0.12+Math.random()*0.45,T.emissive.setHSL(0.58+Math.random()*0.08,0.5,0.55+Math.random()*0.2)}}}function EN({scene:J,random:Q=Math.random}){let $=Q,Z=[],K=[],W=[],Y=new j0,X=(y,u,I=Z)=>{Y.set(u);let x=y.attributes.position.count,h=new Float32Array(x*3);for(let f=0;f<x;f++)h[f*3]=Y.r,h[f*3+1]=Y.g,h[f*3+2]=Y.b;return y.setAttribute("color",new tJ(h,3)),y.deleteAttribute("uv"),I.push(y),y},H=(y,u,I,x,h,f,g,Y0=0,G0)=>{let M0=new TJ(x,h,f);if(Y0)M0.rotateY(Y0);return M0.translate(y,u,I),X(M0,g,G0)},U=(y,u,I,x,h,f,g=8)=>{let Y0=new OJ(x,x,h,g);return Y0.translate(y,u,I),X(Y0,f)},G=(y,u,I,x,h,f,g,Y0)=>{let G0=new RJ(x,h);return G0.rotateY(f),G0.translate(y,u,I),X(G0,g,Y0)},F=(y)=>y[Math.floor($()*y.length)],N=["#c98a64","#d8b46a","#6fa9a0","#c48d95","#a3b777","#dca16a","#86a3bf","#e2d3b0","#b7a4c9","#e0a58f","#9ec3b0"],q=["#9a968c","#8d8a80","#a39d90"],O="#8a8578",D="#a8a391",R="#2b3133",E="#b9ad83",M="#1b2224",k="#232c2e",V=(y)=>"#"+new j0(y).multiplyScalar(0.85).getHexString();function L(y,u,I,x,h,f,{lejos:g=!1}={}){let G0=f*2.9+0.3,M0=$()<0.18?F(q):V(F(N)),S0=new _(Math.sin(I),0,Math.cos(I)),$0=new _(S0.z,0,-S0.x),j=(r,O0,F0)=>new _(y,O0,u).addScaledVector($0,r).addScaledVector(S0,F0),p=j(0,G0/2,-h/2);H(p.x,p.y,p.z,x,G0,h,M0,I);let o=j(0,G0+0.09,-h/2);H(o.x,o.y,o.z,x+0.12,0.18,h+0.12,"#d9d2bf",I);let K0=Math.max(1,Math.floor(x/1.6));for(let r=0;r<f;r++)for(let O0=0;O0<K0;O0++){let F0=-x/2+(O0+0.5)*x/K0,X0=r*2.9+1.55,_0=j(F0,X0,g?0.04:0.012),c0=$()<(g?0.3:0.38);if(r===0&&O0===Math.floor(K0/2)&&!g){let EJ=j(F0,1.05,0.012);G(EJ.x,EJ.y,EJ.z,0.95,2.1,I,$()<0.3?"#7c8680":"#232c2e");continue}if(c0)G(_0.x,_0.y,_0.z,0.72,0.9,I,$()<0.22?"#9fc3ff":F(["#ffd08a","#ffc27a","#ffe0a8"]),K);else G(_0.x,_0.y,_0.z,0.72,0.9,I,"#232c2e")}if(g){P(j,G0,x,h);return}if($()<0.5){let r=j(0,0.5,0.55);H(r.x,1,r.z,x-0.1,0.05,0.05,"#1b2224",I);for(let F0 of[-0.5,-0.25,0,0.25,0.5]){let X0=j(F0*(x-0.1),0.5,0.55);H(X0.x,0.5,X0.z,0.05,1,0.05,"#1b2224",I)}let O0=j(0,2.75,0.6);H(O0.x,O0.y,O0.z,x,0.12,1.2,"#cfc6b2",I)}if(f>1&&$()<0.6){let r=j(0,2.9499999999999997,0.45);H(r.x,r.y,r.z,x*0.7,0.12,0.9,"#cfc6b2",I);let O0=j(0,3.45,0.88);H(O0.x,O0.y,O0.z,x*0.7,0.05,0.05,"#1b2224",I);for(let F0=0;F0<=6;F0++){let X0=j((F0/6-0.5)*x*0.7,3.23,0.88);H(X0.x,X0.y,X0.z,0.03,0.5,0.03,"#1b2224",I)}}P(j,G0,x,h)}function P(y,u,I,x){if($()<0.45){let h=y(($()-0.5)*I*0.5,u+0.7,-x*(0.3+$()*0.4));U(h.x,h.y,h.z,0.55,1.1,"#1f2324",10)}if($()<0.22)for(let h=0;h<4;h++){let f=y((h%2-0.5)*(I-0.4),u+0.5,-(h<2?0.3:x-0.3));H(f.x,f.y,f.z,0.04,1+$()*0.4,0.04,"#5a4a3c")}if($()<0.15){let h=y(I*0.3,u+1.1,-x*0.5);H(h.x,h.y,h.z,0.03,2,0.03,"#3a3f40"),H(h.x,h.y+0.6,h.z,0.9,0.03,0.03,"#3a3f40")}}function T({eje:y,desde:u,hasta:I,fachada:x,ry:h,fondo:f=[6,9],pisos:g=[1,3]}){let Y0=u;while(Y0<I-2){let G0=Math.min(3.4+$()*3.4,I-Y0),M0=Y0+G0/2,S0=x+($()-0.5)*0.5,$0=g[0]+Math.floor($()*(g[1]-g[0]+1));if(y==="x")L(M0,S0,h,G0,f[0]+$()*(f[1]-f[0]),$0);else L(S0,M0,h,G0,f[0]+$()*(f[1]-f[0]),$0);Y0+=G0+0.12+($()<0.12?0.9+$()*1.5:0)}}{let y=new RJ(460,460);y.rotateX(-Math.PI/2),y.translate(0,-0.26,0),X(y,"#35363a")}for(let[y,u]of[[-86,-20],[20,86]]){let I=(y+u)/2,x=u-y;H(I,-0.2,6.05,x,0.1,5.4,"#2b3133"),H(I,0.08,9.6,x,0.16,1.8,"#8a8578");for(let h=y+1;h<u;h+=3.6)H(h,-0.146,6.3,1.4,0.008,0.1,"#b9ad83")}H(-51,-0.1,0.97,70,0.2,4.76,"#8a8578"),H(-51,-0.075,3.45,70,0.15,0.2,"#a8a391"),H(49.45,-0.1,2.18,73.1,0.2,2.36,"#8a8578"),H(49.45,-0.075,3.45,73.1,0.15,0.2,"#a8a391"),T({eje:"x",desde:-84,hasta:-20.3,fachada:10.6,ry:Math.PI}),T({eje:"x",desde:20.3,hasta:84,fachada:10.6,ry:Math.PI}),T({eje:"x",desde:-84,hasta:-22.8,fachada:-1.4,ry:0}),T({eje:"x",desde:16.1,hasta:84,fachada:1,ry:0}),H(8.3,-0.2,-49.25,7.4,0.1,73.5,"#2b3133"),H(4.25,-0.1,-49.25,0.7,0.2,73.5,"#8a8578"),H(12.3,-0.07,-49.25,1.2,0.16,73.5,"#8a8578");for(let y=-13;y>-85;y-=3.6)H(8.3,-0.146,y,0.1,0.008,1.4,"#b9ad83");T({eje:"z",desde:-84,hasta:-5.5,fachada:3.9,ry:Math.PI/2,fondo:[7,9]}),T({eje:"z",desde:-84,hasta:-12.2,fachada:12.9,ry:-Math.PI/2,fondo:[7,9]});let B=(y,u,I)=>{let x=y.clone().lerp(u,0.5);x.y-=I*2;let h=new v8(new n8(y,x,u),14,0.014,3,!1);X(h,"#101517")},z=(y,u)=>{U(y,3.5,u,0.1,7,"#6b6457",6),H(y,6.6,u,1.6,0.08,0.08,"#4f4a40")},d=(y,u,I)=>{H(y+I.x*0.55,6,u+I.z*0.55,Math.abs(I.x)?1.1:0.06,0.06,Math.abs(I.z)?1.1:0.06,"#4f4a40");let x=new H8(0.16,8,6);x.translate(y+I.x*1.1,5.9,u+I.z*1.1),X(x,"#ffb866",W)};for(let y of[-1,1]){let u=y<0?-14:16;for(let I=1;I<=5;I++){let x=y<0?-14-I*12:16+I*12;if(z(x,9.2),I%2===0)d(x,9.2,new _(0,0,-1));for(let h of[0,-0.25,0.3])B(new _(u,6.6+h,9.2),new _(x,6.6+h,9.2),0.5);u=x}}{let y=-9;for(let u=1;u<=6;u++){let I=-9-u*12;if(z(12.4,I),u%2===1)d(12.4,I,new _(-1,0,0));for(let x of[0,0.3])B(new _(12.4,6.6+x,y),new _(12.4,6.6+x,I),0.5);y=I}}let b=(y,u,I)=>{let x=F(["#8b2f2a","#c9c6bd","#2f4a6b","#3b3f42","#b58a3a","#e2dfd6","#556b4f"]),h=new _(Math.sin(I),0,Math.cos(I));H(y,0.55,u,1.75,0.62,4.1,x,I);let f=h.clone().multiplyScalar(-0.3);H(y+f.x,1.1,u+f.z,1.55,0.52,2.1,"#2a3236",I);let g=new _(h.z,0,-h.x);for(let[Y0,G0]of[[-0.8,1.3],[0.8,1.3],[-0.8,-1.3],[0.8,-1.3]]){let M0=new OJ(0.32,0.32,0.22,10);M0.rotateZ(Math.PI/2),M0.rotateY(I);let S0=new _(y,0.32,u).addScaledVector(g,Y0).addScaledVector(h,G0);M0.translate(S0.x,S0.y,S0.z),X(M0,"#141718")}};for(let[y,u,I]of[[-31,4.4,Math.PI/2],[-47,4.4,Math.PI/2],[-72,4.4,-Math.PI/2],[27,4.4,Math.PI/2],[55,4.4,-Math.PI/2],[-58,7.9,Math.PI/2],[38,7.9,-Math.PI/2],[5.6,-24,0],[5.6,-41,Math.PI],[10.8,-31,0],[10.8,-62,Math.PI]])b(y,u,I);let n=(y,u)=>Math.abs(y)<30&&u>-22&&u<24||u>-14&&u<20||u<-10&&y>-12&&y<30;for(let y=-78;y<=78;y+=13)for(let u=-78;u<=78;u+=13){let I=y+($()-0.5)*6,x=u+($()-0.5)*6;if(n(I,x)||Math.hypot(I,x)>80)continue;let h=Math.hypot(I,x),f=h>45&&$()<0.07,g=Math.atan2(-I,-x),Y0=Math.round(g/(Math.PI/2))*(Math.PI/2),G0=f?5+Math.floor($()*5):1+Math.floor($()*(x>0?2:3));if(L(I,x,Y0,6+$()*6,6+$()*5,G0,{lejos:!0}),$()<0.35){let M0=F(["#3f5a3c","#4a6443","#35503a"]),S0=I+($()-0.5)*8,$0=x+($()-0.5)*8,j=2+$()*2.5,p=new N$(j,0);p.scale(1,0.8,1),p.translate(S0,j*0.6+2.5,$0),X(p,M0),U(S0,1.4,$0,0.25,2.8,"#4d4234",5)}}for(let y=0;y<14;y++){let u=$()*Math.PI*2,I=32+$()*44,x=Math.cos(u)*I,h=Math.sin(u)*I;if(n(x,h))continue;let f=9+$()*5,g=new OJ(0.14,0.22,f,5);g.translate(x,f/2,h),X(g,"#5d5445");for(let Y0=0;Y0<8;Y0++){let G0=new $6(0.3,3,3,1);G0.rotateZ(Math.PI/2+0.5),G0.translate(1.5,0,0),G0.rotateY(Y0/8*Math.PI*2),G0.translate(x,f,h),X(G0,"#34503a")}}{let u=[],I=[];for(let h=0;h<=240;h++){let f=h/240*Math.PI*2,g=86+Math.sin(f*3.1)*1.5,Y0=6+7*(0.5+0.5*Math.sin(f*2.3+0.7))+3.5*Math.sin(f*5.1+1)**2+1.2*Math.sin(f*13.7+2)+0.5*Math.sin(f*31.3);if(u.push(Math.cos(f)*g,-1,Math.sin(f)*g,Math.cos(f)*g,Math.max(5,Y0),Math.sin(f)*g),h<240){let G0=h*2;I.push(G0,G0+2,G0+1,G0+1,G0+2,G0+3)}}let x=new vJ;x.setAttribute("position",new YJ(u,3)),x.setIndex(I),x.computeVertexNormals(),X(x,"#3d4552")}let Z0=[],v=(y,u)=>{if(!y.length)return;let I=y.map((f)=>f.index?f.toNonIndexed():f),x=NQ(I,!1);if(I.forEach((f)=>f.dispose()),y.forEach((f)=>f.dispose()),!x)return;let h=new C0(x,u);h.matrixAutoUpdate=!1,J.add(h),Z0.push(h)};return v(Z,new o0({vertexColors:!0,roughness:0.92,side:oJ})),v(K,new bJ({vertexColors:!0,color:new j0(1.9,1.9,1.9)})),v(W,new bJ({vertexColors:!0,color:new j0(5,5,5)})),{mallas:Z0}}var nR=["cafe","morir","presidente","presidente"];function sR(){let J=document.createElement("canvas");J.width=256,J.height=128;let Q=J.getContext("2d");Q.fillStyle="#f1ece0",Q.fillRect(0,0,256,128),Q.fillStyle="#b3262d",Q.fillRect(0,10,256,14),Q.fillRect(0,104,256,14),Q.fillStyle="#1f5a36",Q.beginPath(),Q.ellipse(128,64,54,28,0,0,Math.PI*2),Q.fill(),Q.fillStyle="#f1ece0",Q.beginPath(),Q.ellipse(128,64,46,21,0,0,Math.PI*2),Q.fill(),Q.fillStyle="#b3262d",Q.fillRect(92,58,72,12);let $=new c8(J);return $.colorSpace=$8,$}function iR(){let J=new zJ,Q=(H,U)=>new q0(H,U),$=[Q(0,0),Q(0.034,0),Q(0.037,0.006),Q(0.037,0.165),Q(0.034,0.188),Q(0.022,0.222),Q(0.0145,0.252),Q(0.0138,0.274),Q(0.0158,0.279),Q(0.0158,0.29),Q(0.0112,0.29),Q(0.0106,0.268),Q(0.0112,0.24)],Z=new o0({color:"#2d5a26",roughness:0.18,metalness:0.05,envMapIntensity:1.4});J.add(new C0(new C7($,20),Z));let K=new C0(new C7($.slice(1,5).map((H)=>Q(H.x+0.0006,H.y)),20),new o0({color:"#e8f0e4",roughness:0.9,transparent:!0,opacity:0.22,depthWrite:!1}));J.add(K);let W=new C0(new OJ(0.0376,0.0376,0.075,24,1,!0),new o0({map:sR(),roughness:0.6}));W.position.y=0.095,J.add(W);let Y=new C0(new OJ(0.0149,0.0152,0.02,16,1,!0),new o0({color:"#b3262d",roughness:0.5}));Y.position.y=0.262,J.add(Y);let X=new C0(new e9(0.0112,16),new bJ({color:"#0d160c"}));return X.rotation.x=-Math.PI/2,X.position.y=0.245,J.add(X),{g:J,alto:0.11,radio:0.037,inclina:1.25,boca:0.18}}function oR(){let J=new zJ,Q=new C0(new OJ(0.034,0.029,0.14,24,1,!0),new o0({color:"#dfe9ec",roughness:0.08,transparent:!0,opacity:0.28,depthWrite:!1,side:oJ}));Q.position.y=0.07,Q.renderOrder=2,J.add(Q);let $=new C0(new OJ(0.029,0.029,0.008,24),new o0({color:"#dfe9ec",roughness:0.1,transparent:!0,opacity:0.5}));$.position.y=0.004,J.add($);let Z=new C0(new OJ(0.0318,0.0285,0.112,24),new o0({color:"#f2bf86",roughness:0.45}));Z.position.y=0.064,J.add(Z);for(let[W,Y,X]of[[0.01,0.006,0.4],[-0.009,-0.008,1.1],[0.002,-0.012,2]]){let H=new C0(new TJ(0.016,0.013,0.016),new o0({color:"#f6f3ec",roughness:0.15,transparent:!0,opacity:0.8}));H.position.set(W,0.121,Y),H.rotation.set(X,X*0.7,0),J.add(H)}let K=new C0(new OJ(0.0028,0.0028,0.19,8),new o0({color:"#c8392e",roughness:0.5}));return K.position.set(0.012,0.11,0.004),K.rotation.z=-0.16,J.add(K),{g:J,alto:0.06,radio:0.034,inclina:0.85,boca:0.09}}function aR(){let J=new zJ,Q=new o0({color:"#efe9da",roughness:0.22}),$=new C0(new OJ(0.053,0.047,0.008,28),Q);$.position.y=0.004,J.add($);let Z=new o0({color:"#efe9da",roughness:0.22,side:oJ}),K=new C0(new OJ(0.034,0.025,0.056,24,1,!0),Z),W=new C0(new e9(0.025,20),Q);W.rotation.x=-Math.PI/2,W.position.y=0.0085,J.add(W),K.position.y=0.036,J.add(K);let Y=new C0(new e9(0.0318,24),new o0({color:"#2a160c",roughness:0.15}));Y.rotation.x=-Math.PI/2,Y.position.y=0.056,J.add(Y);let X=new C0(new f9(0.014,0.004,6,12,Math.PI*1.3),Q);return X.position.set(0.036,0.038,0),X.rotation.z=-Math.PI*0.65,J.add(X),J.remove($),{g:J,alto:0.034,radio:0.034,inclina:0.9,boca:0.034,plato:$}}function qN(J){let Q=[];for(let $=0;$<4;$++){let Z=nR[$],K=Z==="presidente"?iR():Z==="morir"?oR():aR(),[W,Y,X]=k9[$],H=B0.tableWidth/2-0.055,U=B0.tableCenterY+B0.tableThickness/2,G=new _(-H,0,B0.seatDistance-H).applyAxisAngle(new _(0,1,0),X).add(new _(W,0,Y));if(G.y=U,K.g.traverse((F)=>{if(F.isMesh)F.castShadow=!0,F.receiveShadow=!0}),K.plato)G.y+=0.008;if(K.g.position.copy(G),J.add(K.g),K.plato)K.plato.position.copy(G),K.plato.position.y=U+0.004,K.plato.traverse((F)=>{if(F.isMesh)F.receiveShadow=!0}),J.add(K.plato);Q.push({group:K.g,home:G,index:$,tipo:Z,alto:K.alto,radio:K.radio,inclina:K.inclina,boca:K.boca})}return Q}var RQ={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class U9{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}var rR=new W7(-1,1,1,-1,0,1);class ON extends vJ{constructor(){super();this.setAttribute("position",new YJ([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new YJ([0,2,0,0,2,0],2))}}var tR=new ON;class E6{constructor(J){this._mesh=new C0(tR,J)}dispose(){this._mesh.geometry.dispose()}render(J){J.render(this._mesh,rR)}get material(){return this._mesh.material}set material(J){this._mesh.material=J}}class w$ extends U9{constructor(J,Q="tDiffuse"){super();if(this.textureID=Q,this.uniforms=null,this.material=null,J instanceof J8)this.uniforms=J.uniforms,this.material=J;else if(J)this.uniforms=Q7.clone(J.uniforms),this.material=new J8({name:J.name!==void 0?J.name:"unspecified",defines:Object.assign({},J.defines),uniforms:this.uniforms,vertexShader:J.vertexShader,fragmentShader:J.fragmentShader});this._fsQuad=new E6(this.material)}render(J,Q,$){if(this.uniforms[this.textureID])this.uniforms[this.textureID].value=$.texture;if(this._fsQuad.material=this.material,this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget(Q),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class IK extends U9{constructor(J,Q){super();this.scene=J,this.camera=Q,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(J,Q,$){let Z=J.getContext(),K=J.state;K.buffers.color.setMask(!1),K.buffers.depth.setMask(!1),K.buffers.color.setLocked(!0),K.buffers.depth.setLocked(!0);let W,Y;if(this.inverse)W=0,Y=1;else W=1,Y=0;if(K.buffers.stencil.setTest(!0),K.buffers.stencil.setOp(Z.REPLACE,Z.REPLACE,Z.REPLACE),K.buffers.stencil.setFunc(Z.ALWAYS,W,4294967295),K.buffers.stencil.setClear(Y),K.buffers.stencil.setLocked(!0),J.setRenderTarget($),this.clear)J.clear();if(J.render(this.scene,this.camera),J.setRenderTarget(Q),this.clear)J.clear();J.render(this.scene,this.camera),K.buffers.color.setLocked(!1),K.buffers.depth.setLocked(!1),K.buffers.color.setMask(!0),K.buffers.depth.setMask(!0),K.buffers.stencil.setLocked(!1),K.buffers.stencil.setFunc(Z.EQUAL,1,4294967295),K.buffers.stencil.setOp(Z.KEEP,Z.KEEP,Z.KEEP),K.buffers.stencil.setLocked(!0)}}class GX extends U9{constructor(){super();this.needsSwap=!1}render(J){J.state.buffers.stencil.setLocked(!1),J.state.buffers.stencil.setTest(!1)}}class FX{constructor(J,Q){if(this.renderer=J,this._pixelRatio=J.getPixelRatio(),Q===void 0){let $=J.getSize(new q0);this._width=$.width,this._height=$.height,Q=new Z8(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:R8}),Q.texture.name="EffectComposer.rt1"}else this._width=Q.width,this._height=Q.height;this.renderTarget1=Q,this.renderTarget2=Q.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new w$(RQ),this.copyPass.material.blending=Q9,this.timer=new WK}swapBuffers(){let J=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=J}addPass(J){this.passes.push(J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(J,Q){this.passes.splice(Q,0,J),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(J){let Q=this.passes.indexOf(J);if(Q!==-1)this.passes.splice(Q,1)}isLastEnabledPass(J){for(let Q=J+1;Q<this.passes.length;Q++)if(this.passes[Q].enabled)return!1;return!0}render(J){if(this.timer.update(),J===void 0)J=this.timer.getDelta();let Q=this.renderer.getRenderTarget(),$=!1;for(let Z=0,K=this.passes.length;Z<K;Z++){let W=this.passes[Z];if(W.enabled===!1)continue;if(W.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(Z),W.render(this.renderer,this.writeBuffer,this.readBuffer,J,$),W.needsSwap){if($){let Y=this.renderer.getContext(),X=this.renderer.state.buffers.stencil;X.setFunc(Y.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,J),X.setFunc(Y.EQUAL,1,4294967295)}this.swapBuffers()}if(IK!==void 0){if(W instanceof IK)$=!0;else if(W instanceof GX)$=!1}}this.renderer.setRenderTarget(Q)}reset(J){if(J===void 0){let Q=this.renderer.getSize(new q0);this._pixelRatio=this.renderer.getPixelRatio(),this._width=Q.width,this._height=Q.height,J=this.renderTarget1.clone(),J.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=J,this.renderTarget2=J.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(J,Q){this._width=J,this._height=Q;let $=this._width*this._pixelRatio,Z=this._height*this._pixelRatio;this.renderTarget1.setSize($,Z),this.renderTarget2.setSize($,Z);for(let K=0;K<this.passes.length;K++)this.passes[K].setSize($,Z)}setPixelRatio(J){this._pixelRatio=J,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class EX extends U9{constructor(J,Q,$=null,Z=null,K=null){super();this.scene=J,this.camera=Q,this.overrideMaterial=$,this.clearColor=Z,this.clearAlpha=K,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new j0}render(J,Q,$){let Z=J.autoClear;J.autoClear=!1;let K,W;if(this.overrideMaterial!==null)W=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor!==null)J.getClearColor(this._oldClearColor),J.setClearColor(this.clearColor,J.getClearAlpha());if(this.clearAlpha!==null)K=J.getClearAlpha(),J.setClearAlpha(this.clearAlpha);if(this.clearDepth==!0)J.clearDepth();if(J.setRenderTarget(this.renderToScreen?null:$),this.clear===!0)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);if(J.render(this.scene,this.camera),this.clearColor!==null)J.setClearColor(this._oldClearColor);if(this.clearAlpha!==null)J.setClearAlpha(K);if(this.overrideMaterial!==null)this.scene.overrideMaterial=W;J.autoClear=Z}}var RN={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new j0(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class q6 extends U9{constructor(J,Q=1,$,Z){super();this.strength=Q,this.radius=$,this.threshold=Z,this.resolution=J!==void 0?new q0(J.x,J.y):new q0(256,256),this.clearColor=new j0(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let K=Math.round(this.resolution.x/2),W=Math.round(this.resolution.y/2);this.renderTargetBright=new Z8(K,W,{type:R8,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let U=0;U<this.nMips;U++){let G=new Z8(K,W,{type:R8,depthBuffer:!1});G.texture.name="UnrealBloomPass.h"+U,G.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(G);let F=new Z8(K,W,{type:R8,depthBuffer:!1});F.texture.name="UnrealBloomPass.v"+U,F.texture.generateMipmaps=!1,this.renderTargetsVertical.push(F),K=Math.round(K/2),W=Math.round(W/2)}let Y=RN;this.highPassUniforms=Q7.clone(Y.uniforms),this.highPassUniforms.luminosityThreshold.value=Z,this.highPassUniforms.smoothWidth.value=0.01,this.materialHighPassFilter=new J8({uniforms:this.highPassUniforms,vertexShader:Y.vertexShader,fragmentShader:Y.fragmentShader}),this.separableBlurMaterials=[];let X=[6,10,14,18,22];K=Math.round(this.resolution.x/2),W=Math.round(this.resolution.y/2);for(let U=0;U<this.nMips;U++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(X[U])),this.separableBlurMaterials[U].uniforms.invSize.value=new q0(1/K,1/W),K=Math.round(K/2),W=Math.round(W/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=Q,this.compositeMaterial.uniforms.bloomRadius.value=0.1;let H=[1,0.8,0.6,0.4,0.2];this.compositeMaterial.uniforms.bloomFactors.value=H,this.bloomTintColors=[new _(1,1,1),new _(1,1,1),new _(1,1,1),new _(1,1,1),new _(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Q7.clone(RQ.uniforms),this.blendMaterial=new J8({uniforms:this.copyUniforms,vertexShader:RQ.vertexShader,fragmentShader:RQ.fragmentShader,premultipliedAlpha:!0,blending:S9,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new j0,this._oldClearAlpha=1,this._basic=new bJ,this._fsQuad=new E6(null)}dispose(){for(let J=0;J<this.renderTargetsHorizontal.length;J++)this.renderTargetsHorizontal[J].dispose();for(let J=0;J<this.renderTargetsVertical.length;J++)this.renderTargetsVertical[J].dispose();this.renderTargetBright.dispose();for(let J=0;J<this.separableBlurMaterials.length;J++)this.separableBlurMaterials[J].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(J,Q){let $=Math.round(J/2),Z=Math.round(Q/2);this.renderTargetBright.setSize($,Z);for(let K=0;K<this.nMips;K++)this.renderTargetsHorizontal[K].setSize($,Z),this.renderTargetsVertical[K].setSize($,Z),this.separableBlurMaterials[K].uniforms.invSize.value=new q0(1/$,1/Z),$=Math.round($/2),Z=Math.round(Z/2)}render(J,Q,$,Z,K){J.getClearColor(this._oldClearColor),this._oldClearAlpha=J.getClearAlpha();let W=J.autoClear;if(J.autoClear=!1,J.setClearColor(this.clearColor,0),K)J.state.buffers.stencil.setTest(!1);if(this.renderToScreen)this._fsQuad.material=this._basic,this._basic.map=$.texture,J.setRenderTarget(null),J.clear(),this._fsQuad.render(J);this.highPassUniforms.tDiffuse.value=$.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,J.setRenderTarget(this.renderTargetBright),J.clear(),this._fsQuad.render(J);let Y=this.renderTargetBright;for(let X=0;X<this.nMips;X++)this._fsQuad.material=this.separableBlurMaterials[X],this.separableBlurMaterials[X].uniforms.colorTexture.value=Y.texture,this.separableBlurMaterials[X].uniforms.direction.value=q6.BlurDirectionX,J.setRenderTarget(this.renderTargetsHorizontal[X]),J.clear(),this._fsQuad.render(J),this.separableBlurMaterials[X].uniforms.colorTexture.value=this.renderTargetsHorizontal[X].texture,this.separableBlurMaterials[X].uniforms.direction.value=q6.BlurDirectionY,J.setRenderTarget(this.renderTargetsVertical[X]),J.clear(),this._fsQuad.render(J),Y=this.renderTargetsVertical[X];if(this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,J.setRenderTarget(this.renderTargetsHorizontal[0]),J.clear(),this._fsQuad.render(J),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,K)J.state.buffers.stencil.setTest(!0);if(this.renderToScreen)J.setRenderTarget(null),this._fsQuad.render(J);else J.setRenderTarget($),this._fsQuad.render(J);J.setClearColor(this._oldClearColor,this._oldClearAlpha),J.autoClear=W}_getSeparableBlurMaterial(J){let Q=[],$=J/3;for(let W=0;W<J;W++)Q.push(0.39894*Math.exp(-0.5*W*W/($*$))/$);let Z=[],K=[];for(let W=1;W<J;W+=2){let Y=Q[W],X=W+1<J?Q[W+1]:0,H=Y+X;Z.push((W*Y+(W+1)*X)/H),K.push(H)}return new J8({defines:{KERNEL_PAIRS:Z.length},uniforms:{colorTexture:{value:null},invSize:{value:new q0(0.5,0.5)},direction:{value:new q0(0.5,0.5)},centerWeight:{value:Q[0]},gaussianOffsets:{value:Z},gaussianWeights:{value:K}},vertexShader:`

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

				}`})}_getCompositeMaterial(J){return new J8({defines:{NUM_MIPS:J},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}q6.BlurDirectionX=new q0(1,0);q6.BlurDirectionY=new q0(0,1);var S$={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class qX extends U9{constructor(){super();this.isOutputPass=!0,this.uniforms=Q7.clone(S$.uniforms),this.material=new F$({name:S$.name,uniforms:this.uniforms,vertexShader:S$.vertexShader,fragmentShader:S$.fragmentShader}),this._fsQuad=new E6(this.material),this._outputColorSpace=null,this._toneMapping=null}render(J,Q,$){if(this.uniforms.tDiffuse.value=$.texture,this.uniforms.toneMappingExposure.value=J.toneMappingExposure,this._outputColorSpace!==J.outputColorSpace||this._toneMapping!==J.toneMapping){if(this._outputColorSpace=J.outputColorSpace,this._toneMapping=J.toneMapping,this.material.defines={},qJ.getTransfer(this._outputColorSpace)===lJ)this.material.defines.SRGB_TRANSFER="";if(this._toneMapping===iQ)this.material.defines.LINEAR_TONE_MAPPING="";else if(this._toneMapping===oQ)this.material.defines.REINHARD_TONE_MAPPING="";else if(this._toneMapping===aQ)this.material.defines.CINEON_TONE_MAPPING="";else if(this._toneMapping===u7)this.material.defines.ACES_FILMIC_TONE_MAPPING="";else if(this._toneMapping===tQ)this.material.defines.AGX_TONE_MAPPING="";else if(this._toneMapping===eQ)this.material.defines.NEUTRAL_TONE_MAPPING="";else if(this._toneMapping===rQ)this.material.defines.CUSTOM_TONE_MAPPING="";this.material.needsUpdate=!0}if(this.renderToScreen===!0)J.setRenderTarget(null),this._fsQuad.render(J);else{if(J.setRenderTarget(Q),this.clear)J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil);this._fsQuad.render(J)}}dispose(){this.material.dispose(),this._fsQuad.dispose()}}var z8=(()=>{let J=7;return()=>{return J=Math.imul(J,1664525)+1013904223>>>0,J/4294967296}})();function OX(J,Q=256,$=256){let Z=document.createElement("canvas");Z.width=Q,Z.height=$,J(Z.getContext("2d"),Q,$);let K=new c8(Z);return K.colorSpace=$8,K}function LN(J="255,214,150"){return OX((Q,$,Z)=>{let K=Q.createRadialGradient($/2,Z/2,0,$/2,Z/2,$/2);K.addColorStop(0,`rgba(${J},1)`),K.addColorStop(0.18,`rgba(${J},.55)`),K.addColorStop(0.5,`rgba(${J},.12)`),K.addColorStop(1,`rgba(${J},0)`),Q.fillStyle=K,Q.fillRect(0,0,$,Z)})}var VN=new _(-0.55,-0.035,-0.83).normalize();function eR(J){let Q=new zJ,$=new C0(new H8(80,32,16),new J8({side:D8,depthWrite:!1,fog:!1,uniforms:{uSol:{value:VN}},vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vP;uniform vec3 uSol;
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
   }`}));$.renderOrder=-10,Q.add($);let Z=220,K=new Float32Array(Z*3),W=new Float32Array(Z*3);for(let U=0;U<Z;U++){let G=z8(),F=z8()*Math.PI*2,N=0.45+G*0.55,q=Math.sqrt(1-N*N),O=0.25+0.55*z8()*N;K.set([Math.cos(F)*q*75,N*75,Math.sin(F)*q*75],U*3),W.set([O*0.85,O*0.9,O],U*3)}let Y=new vJ;Y.setAttribute("position",new tJ(K,3)),Y.setAttribute("color",new tJ(W,3)),Q.add(new ZQ(Y,new J6({size:1.3,sizeAttenuation:!1,vertexColors:!0,fog:!1,depthWrite:!1,transparent:!0,opacity:0.45})));let X=new C0(new e9(2.1,40),new bJ({color:"#f6e7cc",fog:!1}));X.position.set(26,11,58),X.lookAt(0,1,0),Q.add(X);let H=new QQ(new r7({map:LN("255,226,200"),fog:!1,transparent:!0,opacity:0.28,depthWrite:!1,blending:S9}));return H.scale.setScalar(13),H.position.copy(X.position),Q.add(H),J.add(Q),Q}function JL(J){let Q=new Map,$=(F,N=0,q=0)=>{let O=F+N+q;if(!Q.has(O))Q.set(O,{m:new o0({color:N?F:new j0(F).multiplyScalar(0.85),roughness:0.9,emissive:N||"#000",emissiveIntensity:q}),g:[]});return Q.get(O)},Z=(F,N,q,O,D,R=0)=>{F.rotateY(R),F.translate(q,O,D),N.g.push(F)},K=["#c98a64","#d8b46a","#6fa9a0","#c48d95","#a3b777","#dca16a","#86a3bf","#e2d3b0"],W=-20;while(W<20){let F=3.4+z8()*2.6,N=3+z8()*2.8,q=10.5+z8()*0.8,O=K[Math.floor(z8()*K.length)];Z(new TJ(F,N,2.4),$(O),W+F/2,N/2,q+1.2),Z(new TJ(F+0.12,0.18,2.6),$("#d9d2bf"),W+F/2,N+0.09,q+1.2);let D=Math.max(1,Math.floor(F/1.5));for(let R=0;R<D;R++){let E=W+(R+0.5)*F/D,M=z8()<0.4,k=z8()<0.2,V=M?$(k?"#9fc3ff":"#ffd08a",k?"#6f9cff":"#ffb35a",k?1.6:2.2):$("#2a3436");if(Z(new RJ(0.75,0.95),V,E,1.55,q-0.005,Math.PI),N>4.2)Z(new RJ(0.7,0.8),z8()<0.35?$("#ffd08a","#ffb35a",1.5):$("#2a3436"),E,N-1.1,q-0.005,Math.PI);Z(new TJ(0.9,0.06,0.12),$("#2c3432"),E,2.08,q-0.06)}for(let R=0;R<Math.floor(F/0.22);R++)Z(new TJ(0.018,0.9,0.018),$("#1b2224"),W+0.11+R*0.22,0.45,q-0.55);Z(new TJ(F,0.04,0.04),$("#1b2224"),W+F/2,0.9,q-0.55),W+=F+0.15}Z(new TJ(44,0.16,1.8),$("#8a8578"),0,0.08,9.6);let Y=[-14,-4,6,16];for(let F of Y)Z(new OJ(0.09,0.12,7,8),$("#6b6457"),F,3.5,9.2),Z(new TJ(1.6,0.08,0.08),$("#4f4a40"),F,6.6,9.2);for(let F=0;F<Y.length-1;F++)for(let N of[0,-0.25,0.3]){let q=new _(Y[F],6.6+N,9.2),O=new _(Y[F+1],6.6+N,9.2),D=q.clone().lerp(O,0.5);D.y-=0.55,Z(new v8(new n8(q,D,O),16,0.012,4),$("#101517"),0,0,0)}for(let[F,N,q]of[[-9,12.8,7.5],[11,13.1,8.4],[2.5,13.4,6.4]]){let O=new J7([new _(F,0,N),new _(F+0.3,q*0.5,N),new _(F+0.8,q,N-0.2)]);Z(new v8(O,12,0.16,6),$("#5d5445"),0,0,0);for(let D=0;D<9;D++){let R=D/9*Math.PI*2,E=new $6(0.28,2.6,4,1);E.rotateZ(Math.PI/2+0.55),E.translate(1.3,0,0),E.rotateY(R),Z(E,$("#34503a"),F+0.8,q,N-0.2)}}let X=[];for(let{m:F,g:N}of Q.values()){let q=NQ(N,!1);if(N.forEach((D)=>D.dispose()),!q)continue;let O=new C0(q,F);O.receiveShadow=!0,J.add(O),X.push(O)}let H=new K7("#ffa35c",6,14,1.8);H.position.set(6,5.9,8.6),J.add(H);let U=new C0(new H8(0.14,12,8),new o0({color:"#ffcf94",emissive:"#ff9a45",emissiveIntensity:5}));U.position.copy(H.position),J.add(U);let G=new C0(new OJ(0.03,0.03,1.3,6),new o0({color:"#4f4a40"}));return G.rotation.z=Math.PI/2,G.position.set(6,6.05,8.9),J.add(G),{merged:X,farol:H}}function QL(J,Q){let $=new zJ;$.position.copy(Q),J.add($);let Z=new C0(new H8(0.038,16,12),new o0({color:"#fff4d6",emissive:"#ffd08a",emissiveIntensity:9}));Z.scale.y=1.25,$.add(Z);let K=new C0(new OJ(0.018,0.02,0.05,10),new o0({color:"#2b2a26",roughness:0.6}));K.position.y=0.065,$.add(K);let W=new C0(new OJ(0.004,0.004,1.1,5),new o0({color:"#15181a"}));W.position.y=0.64,$.add(W);let Y=new QQ(new r7({map:LN(),transparent:!0,opacity:0.55,depthWrite:!1,blending:S9}));Y.scale.setScalar(0.75),$.add(Y);let X=[],H=new r7({color:"#3b3026",transparent:!0,opacity:0.85,depthWrite:!1});for(let U=0;U<6;U++){let G=new QQ(H);G.scale.setScalar(0.012+z8()*0.008),$.add(G),X.push({s:G,r:0.07+z8()*0.12,w:2+z8()*4,f:z8()*6,y:0.05+z8()*0.08,k:1.3+z8()})}return{g:$,halo:Y,polillas:X}}function $L(){let J=new e6;J.add(new C0(new H8(10,24,12),new J8({side:D8,uniforms:{uSol:{value:VN}},vertexShader:"varying vec3 vP;void main(){vP=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec3 vP;uniform vec3 uSol;void main(){float l=dot(normalize(vP.xz+vec2(1e-4)),normalize(uSol.xz))*.5+.5;vec3 hor=mix(vec3(.3,.25,.36),vec3(.85,.45,.25),pow(l,2.5));gl_FragColor=vec4(mix(hor,vec3(.05,.07,.17),smoothstep(-.05,.7,vP.y))*mix(.35,1.,smoothstep(-.3,0.,vP.y)),1.);}"})));let Q=($,Z,K,W,Y,X)=>{let H=new C0(new RJ(K,W),new bJ({color:new j0($).multiplyScalar(Z),side:oJ}));H.position.set(...Y),H.lookAt(...X),J.add(H)};return Q("#ffcf94",6,1.2,1.2,[0,6,0],[0,0,0]),Q("#dff3ea",2,5,2,[0,2.5,-8],[0,1,0]),J}function DN({scene:J,renderer:Q,camera:$,controls:Z,software:K,bulbLight:W}){function Y(){let v=new M$(Q),y=$L(),u=v.fromScene(y,0.02);J.environment?.dispose?.(),J.environment=u.texture,J.environmentIntensity=0.75,v.dispose(),y.traverse((I)=>{I.geometry?.dispose(),I.material?.dispose()})}Y(),J.background=new j0("#2a2d4a"),J.fog=new a7("#5a5670",0.017);let X=eR(J),H=JL(J),U=new _(0,B0.surfaceY+1.3,0),G=QL(J,U),F=OX((v,y,u)=>{let I=v.createRadialGradient(y/2,u*0.62,0,y/2,u*0.62,y/2);I.addColorStop(0,"rgba(255,196,110,.95)"),I.addColorStop(0.45,"rgba(255,170,80,.35)"),I.addColorStop(1,"rgba(255,150,60,0)"),v.fillStyle=I,v.fillRect(0,0,y,u)},256,128),N=new C0(new RJ(0.62,0.26),new bJ({map:F,transparent:!0,opacity:0,depthWrite:!1,blending:S9,toneMapped:!1}));N.rotation.x=-Math.PI/2,N.position.y=B0.surfaceY+0.0012,N.renderOrder=3,J.add(N);let q={i:-1,ang:0,alfa:0,objetivo:0,pos:new _},O=(v)=>OX((y,u,I)=>{y.strokeStyle=`rgba(${v},1)`,y.lineWidth=u*0.09,y.beginPath(),y.arc(u/2,I/2,u*0.36,0,Math.PI*2),y.stroke();let x=y.createRadialGradient(u/2,I/2,0,u/2,I/2,u/2);x.addColorStop(0,`rgba(${v},.5)`),x.addColorStop(1,`rgba(${v},0)`),y.fillStyle=x,y.fillRect(0,0,u,I)},128,128),D=["227,174,85","111,183,201"].map((v)=>{let y=new C0(new RJ(0.036,0.036),new bJ({map:O(v),transparent:!0,opacity:0,depthWrite:!1,blending:S9,toneMapped:!1}));return y.rotation.x=-Math.PI/2,y.position.y=B0.surfaceY+0.0015,y.renderOrder=3,J.add(y),y}),R=null,E=$.clone(),M=new _,k=new _,V=null,L=null,P=null,T=!1;function B(){if(V)return;let v=Q.getDrawingBufferSize(new q0),y=new Z8(v.x,v.y,{type:R8,samples:4});V=new FX(Q,y),V.addPass(new EX(J,E)),L=new q6(new q0(v.x/2,v.y/2),0.4,0.5,3.2),P=new w$({uniforms:{tDiffuse:{value:null},uTiempo:{value:0},uVineta:{value:0.34},uGrano:{value:0.018}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform float uTiempo,uVineta,uGrano;varying vec2 vUv;
    float azar(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+uTiempo*43.7)*43758.5453);}
    void main(){vec4 c=texture2D(tDiffuse,vUv);
     vec2 q=vUv-.5;float v=1.-uVineta*smoothstep(.25,.85,length(q*vec2(1.15,1.)));
     c.rgb*=v;
     // Sombras hacia el lila y luces cálidas: el atardecer con el bombillo ya prendido.
     float l=dot(c.rgb,vec3(.2126,.7152,.0722));
     c.rgb*=mix(vec3(.96,.95,1.06),vec3(1.04,1.,.93),smoothstep(.02,.4,l));
     c.rgb+=(azar(vUv*vec2(1920.,1080.))-.5)*uGrano*(.4+l);
     gl_FragColor=c;}`}),V.addPass(P),V.addPass(new qX)}function z(v){if(T=!K&&v==="high",T)B();G.halo.visible=!0,H.farol.visible=v==="high"}function d(v,y){if(V)V.setPixelRatio(Q.getPixelRatio()),V.setSize(v,y);E.aspect=$.aspect,E.updateProjectionMatrix()}function b(v,y,{reduced:u,view:I,ends:x,temblor:h=0}){if(E.copy($),!u){if(M.set(Math.sin(v*0.11)*0.012+Math.sin(v*0.037)*0.008,Math.sin(v*0.083+1)*0.007,Math.cos(v*0.097)*0.01),h)M.add(k.set(Math.sin(v*97)*h,Math.sin(v*113)*h*0.6,Math.cos(v*89)*h));E.position.add(M),k.copy(Z.target).addScaledVector(M,0.35),E.lookAt(k)}if(E.updateMatrixWorld(),G.halo.material.opacity=0.5+0.05*Math.sin(v*23)*Math.sin(v*1.7)+(u?0:0.03*Math.sin(v*3.1)),!u)for(let g of G.polillas){let Y0=v*g.w+g.f;g.s.position.set(Math.cos(Y0)*g.r,g.y+Math.sin(Y0*g.k)*0.05,Math.sin(Y0*1.3)*g.r)}let f=I?.phase==="playing";if(f&&I.turn!=null){let[g,Y0,G0]=k9[I.turn],M0=B0.boardLimit+0.075;if(q.i!==I.turn)q.i=I.turn,q.destino=new _(g*M0/B0.seatDistance,0,Y0*M0/B0.seatDistance),q.angDestino=G0;q.pos.lerp(q.destino,1-Math.exp(-y*6));let S0=q.angDestino-q.ang;S0=Math.atan2(Math.sin(S0),Math.cos(S0)),q.ang+=S0*(1-Math.exp(-y*6)),q.objetivo=0.55+(u?0:0.08*Math.sin(v*2.2))}else q.objetivo=0;q.alfa+=(q.objetivo-q.alfa)*(1-Math.exp(-y*4)),N.material.opacity=q.alfa,N.visible=q.alfa>0.01,N.position.set(q.pos.x,B0.surfaceY+0.0012,q.pos.z),N.rotation.set(-Math.PI/2,0,q.ang);for(let g=0;g<2;g++){let Y0=D[g],G0=f&&x?x[g]:null;if(!G0){Y0.material.opacity=Math.max(0,Y0.material.opacity-y*3),Y0.visible=Y0.material.opacity>0.01;continue}Y0.visible=!0,Y0.position.set(G0.x,B0.surfaceY+0.0015,G0.z);let M0=u?1:1+0.12*Math.sin(v*3.4+g*1.3);Y0.scale.setScalar(M0),Y0.material.opacity=Math.min(0.7,Y0.material.opacity+y*3)}if(P)P.uniforms.uTiempo.value=v%100}function n(){if(T&&V)V.render();else Q.render(J,E)}function Z0(){V?.dispose()}return{vista:E,frame:b,render:n,resize:d,calidad:z,dispose:Z0,bulbPos:U,entorno:Y}}var sJ=(J=0,Q=0,$=0)=>new _(J,Q,$),T9=Math.PI/180,TK=Math.PI*2,IX=(J)=>J<=0?0:J>=1?1:J*J*(3-2*J),zK=(J,Q,$)=>IX((J-Q+$)/(2*$)),g8=(J,Q)=>J+Math.random()*(Q-J),LQ=(J)=>J[Math.floor(Math.random()*J.length)];function RX(J,Q){if(Q>3.3)return-0.15*zK(Q,3.5,0.12)+0.31*zK(Q,8.7,0.12);return-0.15*zK(J,4.65,0.12)+0.16*zK(J,11.7,0.12)}var ZL={"luis-upright":{voz:"m",camisa:[[188,256],[0.28,1.1],[0.08,1.1]],pantalon:[[-400,400],[-0.1,0.28],[0.44,1.1]],piel:[[-16,32],[0.3,0.82],[0.14,1.1]]},marisol:{voz:"f",camisa:[[-20,24],[0.62,1.1],[0.2,1.1]],pantalon:[[188,256],[0.16,1.1],[0.03,0.86]],piel:[[-6,40],[0.16,0.64],[0.2,1.1]]},carmen:{voz:"f",camisa:[[30,60],[0.46,1.1],[0.36,1.1]],pantalon:[[58,150],[0.08,1.1],[0.03,0.62]],piel:[[-10,30],[0.2,0.66],[0.16,1.1]]}},KL=["#e9e6de","#a1302a","#3e6a47","#c99a3a","#6f9fc8","#232326","#7c7f82","#d88c9b","#24345a","#d8694f","#2f7f7a","#9b88ba","#e3c7a0","#5b3a5e"],WL=["#27324d","#1d1d20","#b6a37d","#5c5f63","#5b7596","#55573a","#4f3b2c","#8a2f2a"],YL=["#27324d","#1d1d20","#6b2f3a","#3e5a47","#d9d3c6","#5b7596","#7a5a3a"],XL=[[0.8,0.75,0.71],[0.66,0.6,0.56],[0.52,0.46,0.42],[1.12,1.08,1.05],[0.72,0.66,0.62]],HL={"luis-upright":["#6f9fc8","#24345a","#e9e6de","#b6a37d"],marisol:["#d8694f","#e3c7a0","#a1302a","#c99a3a","#27324d","#5b7596"],carmen:["#c99a3a","#e3c7a0","#3e5a47","#55573a"]},UL=["#1f2a44","#a1302a","#1d1d20","#e9e6de","#2f5e3b","#c99a3a"],NL=`
vec3 tenir( vec3 c, vec4 tela ) {
 float luz = dot( c, vec3( .2126, .7152, .0722 ) );
 c = mix( c, min( colCamisa * ( luz / lums.x ), vec3( 1.2 ) ), tela.r );
 c = mix( c, min( colPantalon * ( luz / lums.y ), vec3( 1.2 ) ), tela.g );
 return mix( c, c * tonoPiel, tela.b );
}`,GL=`
#ifdef USE_MAP
 vec4 sampledDiffuseColor = texture2D( map, vMapUv );
 diffuseColor *= vec4( tenir( sampledDiffuseColor.rgb, texture2D( mascara, vMapUv ) ), sampledDiffuseColor.a );
#endif`,FL=`
#ifdef USE_EMISSIVEMAP
 vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
 totalEmissiveRadiance *= tenir( emissiveColor.rgb, texture2D( mascara, vEmissiveMapUv ) );
#endif`,LX=new Float32Array(256).map((J,Q)=>{let $=Q/255;return $<=0.04045?$/12.92:(($+0.055)/1.055)**2.4}),v$=()=>new Promise((J)=>setTimeout(J,0));function VX(J,[Q,$],Z){return IX((J-Q+Z)/(2*Z))*(1-IX((J-$+Z)/(2*Z)))}function EL(J,Q){let $=document.createElement("canvas");$.width=$.height=Q;let Z=$.getContext("2d",{willReadFrequently:!0}),K=J.geometry,W=K.attributes.uv,Y=K.attributes.skinIndex,X=K.attributes.skinWeight,H=K.index,U=J.skeleton.bones.findIndex((F)=>F.name==="Head");if(U<0||!W||!H)return null;let G=(F)=>{let N=0;for(let q=0;q<4;q++)if(Y.getComponent(F,q)===U)N+=X.getComponent(F,q);return N};Z.fillStyle=Z.strokeStyle="#fff",Z.lineWidth=2;for(let F=0;F<H.count;F+=3){let N=[H.getX(F),H.getX(F+1),H.getX(F+2)];if(G(N[0])+G(N[1])+G(N[2])<1.5)continue;let q=Math.floor(Math.min(...N.map((D)=>W.getX(D)))),O=Math.floor(Math.min(...N.map((D)=>W.getY(D))));for(let[D,R]of[[0,0],[-1,0],[0,-1],[-1,-1]])Z.beginPath(),N.forEach((E,M)=>{let k=(W.getX(E)-q+D)*Q,V=(W.getY(E)-O+R)*Q;M?Z.lineTo(k,V):Z.moveTo(k,V)}),Z.closePath(),Z.fill(),Z.stroke()}return Z.getImageData(0,0,Q,Q).data}async function qL(J,Q,$,Z){let W=document.createElement("canvas");W.width=W.height=512;let Y=W.getContext("2d",{willReadFrequently:!0});Y.drawImage(J,0,0,512,512);let X=Y.getImageData(0,0,512,512).data,H=new Uint8Array(1048576),U=[0,0,0,0],G=EL($,512);await v$();let F=(O,D,R,[E,M,k])=>{let V=E[0]<0&&O>180?O-360:O;return VX(V,E,5)*VX(D,M,0.04)*VX(R,k,0.04)};for(let O=0;O<512;O+=64){for(let D=O*512;D<(O+64)*512;D++){let R=X[D*4]/255,E=X[D*4+1]/255,M=X[D*4+2]/255,k=Math.max(R,E,M),V=Math.min(R,E,M),L=k-V,P=k,T=k>0?L/k:0,B=0;if(L>0.00001)B=k===R?((E-M)/L+6)%6*60:k===E?((M-R)/L+2)*60:((R-E)/L+4)*60;let z=G?1-G[D*4]/255:1,d=F(B,T,P,Q.camisa)*z,b=F(B,T,P,Q.pantalon)*(1-d)*z,n=F(B,T,P,Q.piel)*(1-d-b);H[D*4]=d*255,H[D*4+1]=b*255,H[D*4+2]=Math.max(0,n)*255,H[D*4+3]=255;let Z0=0.2126*LX[X[D*4]]+0.7152*LX[X[D*4+1]]+0.0722*LX[X[D*4+2]];U[0]+=Z0*d,U[1]+=d,U[2]+=Z0*b,U[3]+=b}await v$()}let N=new Uint8Array(262144);for(let O=0;O<3;O++){for(let[D,R]of[[Math.max,1],[Math.max,512],[Math.min,1],[Math.min,512]]){for(let E=0;E<262144;E++){let M=R===1?E%512:Math.floor(E/512),k=H[E*4+O];for(let V=-3;V<=3;V++){let L=M+V;if(V&&L>=0&&L<512)k=D(k,H[(E+V*R)*4+O])}N[E]=k}for(let E=0;E<262144;E++)H[E*4+O]=N[E]}await v$()}let q=new t7(H,512,512);return q.wrapS=Z.wrapS,q.wrapT=Z.wrapT,q.generateMipmaps=!0,q.minFilter=$9,q.magFilter=X8,q.needsUpdate=!0,{tex:q,lums:new q0(U[1]?U[0]/U[1]:0.2,U[3]?U[2]/U[3]:0.2)}}function OL(J,Q){let $=J.clone(),Z={mascara:{value:Q.mascara},lums:{value:Q.lums},colCamisa:{value:new j0},colPantalon:{value:new j0},tonoPiel:{value:new j0(1,1,1)}};return $.onBeforeCompile=(K)=>{Object.assign(K.uniforms,Z),K.fragmentShader=K.fragmentShader.replace("void main() {",`uniform sampler2D mascara;
uniform vec2 lums;
uniform vec3 colCamisa;
uniform vec3 colPantalon;
uniform vec3 tonoPiel;
`+NL+`
void main() {`).replace("#include <map_fragment>",GL).replace("#include <emissivemap_fragment>",FL)},$.customProgramCacheKey=()=>"transeunte",{m:$,u:Z}}function zX(J){let Q=J.length;return($)=>{$-=Math.floor($);let Z=Q-1;for(let N=0;N<Q;N++)if(J[N][0]<=$)Z=N;let K=J[Z],W=J[(Z+1)%Q],Y=W[0]+(Z+1===Q?1:0),X=($-K[0])/(Y-K[0]),H=J[(Z-1+Q)%Q][1],U=K[1],G=W[1],F=J[(Z+2)%Q][1];return 0.5*(2*U+(-H+G)*X+(2*H-5*U+4*G-F)*X*X+(-H+3*U-3*G+F)*X*X*X)}}var BN=zX([[0,23],[0.12,19],[0.3,6],[0.5,-9],[0.62,-12],[0.75,2],[0.88,21]]),RL=zX([[0,4],[0.12,15],[0.28,7],[0.45,5],[0.6,33],[0.72,58],[0.86,26],[0.95,4]]),LL=zX([[0,14],[0.08,5],[0.14,0],[0.42,0],[0.52,-9],[0.62,-30],[0.7,-16],[0.8,1],[0.92,9]]),wK=sJ(),SK=sJ(),N9=sJ(),b$=sJ(),f$=sJ(),_K=sJ(),DX=sJ(),BX=sJ(0,1,0),MN=sJ(),VL=sJ(1,0,0),m9=new HJ,MX=new HJ,kN=new HJ,jK=new HJ,y$=new HJ;function O6(J,Q){J.matrixWorld.decompose(wK,kN,SK),J.parent.matrixWorld.decompose(wK,jK,SK),J.quaternion.copy(jK.invert()).multiply(Q).multiply(kN),J.updateMatrixWorld(!0)}function DL(J,Q){J.parent.matrixWorld.decompose(wK,jK,SK),J.quaternion.copy(jK.invert()).multiply(Q),J.updateMatrixWorld(!0)}function VQ(J,Q,$){N9.setFromMatrixPosition(J.matrixWorld),b$.setFromMatrixPosition(Q.matrixWorld),f$.subVectors(b$,N9).normalize(),O6(J,m9.setFromUnitVectors(f$,$))}var DQ=(J,Q,$)=>_K.set(J,Q,$).normalize().applyQuaternion(y$);function CN(J){let{h:Q,marcha:$,fase:Z}=J;for(let[X,H,U,G]of J.rest)X.position.copy(H),X.quaternion.copy(U),X.scale.copy(G);let K=$*0.016*Math.sin(TK*(Z-0.05))+(1-$)*0.012*Math.sin(J.t*0.7);J.root.position.set(J.base.x+K,J.base.y,J.base.z),J.holder.updateMatrixWorld(!0),J.holder.matrixWorld.decompose(wK,y$,SK),DX.set(1,0,0).applyQuaternion(y$),MN.set(0,0,1).applyQuaternion(y$);let W=-5*T9*Math.cos(TK*Z)*$;if(O6(Q.Hips,m9.setFromAxisAngle(BX,W)),O6(Q.Hips,m9.setFromAxisAngle(DX,(3.5*$+0.5)*T9)),Q.Spine)O6(Q.Spine,m9.setFromAxisAngle(BX,-W*1.4));for(let[X,H]of[[1,Q.LeftShoulder],[-1,Q.RightShoulder]])if(H)O6(H,m9.setFromAxisAngle(MN,-X*7*T9));for(let[X,H,U]of[[1,"Left",Z],[-1,"Right",Z+0.5]]){let G=($*BN(U)+(1-$)*(X>0?1.5:-1))*T9,F=($*RL(U)+(1-$)*4)*T9,N=$*LL(U)*T9,q=X*(0.03+0.02*(1-$));if(VQ(Q[H+"UpLeg"],Q[H+"Leg"],DQ(q,-Math.cos(G),Math.sin(G))),VQ(Q[H+"Leg"],Q[H+"Foot"],DQ(q*0.6,-Math.cos(G-F),Math.sin(G-F))),MX.setFromAxisAngle(BX,-X*9*T9),m9.setFromAxisAngle(VL,-N).multiply(MX).multiply(J.pieReposo[X>0?0:1]),DL(Q[H+"Foot"],m9.premultiply(y$)),N<0&&Q[H+"ToeBase"])O6(Q[H+"ToeBase"],m9.setFromAxisAngle(DX,0.8*N))}for(let[X,H,U]of[[1,"Left",Z],[-1,"Right",Z+0.5]]){if(X<0&&J.saluda>0)continue;let G=($*-0.72*(BN(U)-5)+(1-$)*-2+(J.brazos||0))*T9,F=(16+(1-$)*-4+10*Math.max(0,G/(12*T9)))*T9,N=(9+(1-$)*-2)*T9;VQ(Q[H+"Arm"],Q[H+"ForeArm"],DQ(X*Math.sin(N)*Math.cos(G),-Math.cos(N)*Math.cos(G),Math.sin(G))),VQ(Q[H+"ForeArm"],Q[H+"Hand"],DQ(X*Math.sin(N)*Math.cos(G+F),-Math.cos(N)*Math.cos(G+F),Math.sin(G+F)))}if(J.saluda>0){let X=J.saluda,H=Math.sin(J.t*TK*1.8)*0.38*X;VQ(Q.RightArm,Q.RightForeArm,DQ(-0.75*X-(1-X)*0.15,0.25*X-(1-X)*0.98,0.3*X+0.05)),VQ(Q.RightForeArm,Q.RightHand,DQ(-Math.sin(H)-0.15,Math.cos(H)*X-(1-X)*0.9,0.18))}if(Q.Head&&Q.headfront){let X=J.mirar;for(let[H,U]of[[Q.neck,0.45],[Q.Head,1]]){if(!H)continue;N9.setFromMatrixPosition(Q.Head.matrixWorld),b$.setFromMatrixPosition(Q.headfront.matrixWorld),f$.subVectors(b$,N9).normalize(),_K.subVectors(X,N9).normalize();let G=f$.angleTo(_K);if(G<0.001)continue;m9.setFromUnitVectors(f$,_K),O6(H,MX.identity().slerp(m9,Math.min(1,U*Math.min(G,1.1)/G)))}}let Y=1/0;for(let[X,H]of J.apoyos)if(N9.copy(H).applyMatrix4(X.matrixWorld),N9.y<Y)Y=N9.y;J.root.position.y-=(Y-J.holder.position.y)/J.holder.scale.y,J.root.updateMatrixWorld(!0)}var j7=(...J)=>J.map(([Q,$])=>sJ(Q,0,$)),kX=j7([10,-0.25],[6.5,-0.3],[4.6,-0.4],[3.3,-0.62],[2.25,-1.1],[1.2,-1.8]),PN=j7([1.2,-1.8],[0.35,-2.15],[-0.6,-2.05],[-1.35,-1.65]),CX=j7([-1.35,-1.65],[-2.35,-1],[-2.65,0.2],[-4.5,0.95],[-9,1.15],[-17,1.2]),PX=j7([1.2,-1.8],[0.75,-2.45],[0.5,-3],[0.45,-3.42]),BL=j7([0.45,-3.42],[0.1,-3],[-0.6,-2.25],[-1.35,-1.65]),ML=sJ(2.95,1.2,-4.1),j$=(...J)=>J.reduce((Q,$)=>Q.concat(Q.length?$.slice(1):$),[]),R6=(J)=>J.slice().reverse(),AK={enfrente:()=>{let J=g8(9.45,10.05),Q=j7([-34,J],[-12,J+g8(-0.1,0.1)],[12,J+g8(-0.1,0.1)],[34,J]);return Math.random()<0.5?Q:R6(Q)},lateral:()=>{let J=g8(12.15,12.45),Q=j7([J,-36],[J,-10],[J,1.2],[J+1.2,2.25],[20,2.3],[36,2.4]);return Math.random()<0.5?Q:R6(Q)}};function IN({scene:J,camera:Q,renderer:$,cuerpos:Z,pocos:K=!1}){let W=[],Y=[],X=[],H=new e7,U=new QJ,G=new _8(sJ(),1.25),F=0,N=0,q=g8(6,14),O=g8(20,35),D=-1e9,R=null,E=!1,M=!1;(async()=>{for(let I of Z){if(E)return;let x=ZL[I.nombre];if(!x||!I.gltf)continue;let h=null;I.gltf.scene.traverse((g)=>{if(g.isSkinnedMesh&&!h)h=g});let f=h?.material?.map?.image;if(!f)continue;try{let{tex:g,lums:Y0}=await qL(f,x,h,h.material.map),G0={...I,reglas:x,voz:x.voz,material:h.material,mascara:g,lums:Y0,zCiclo:null};await v$();let M0=k(G0);if(M0){if(Y.push(M0),Y.length===1)await $?.compileAsync?.(M0.holder,Q,J).catch(()=>{})}W.push(G0)}catch(g){console.warn("Transeúnte sin ropa",I.nombre,g)}await v$()}})();function k(I){let x=GQ(I.gltf.scene),h=new zJ;h.add(x),x.position.set(0,0,0),x.rotation.set(0,0,0),x.scale.set(1,1,1);let f={},g=[],Y0=null;if(x.traverse((O0)=>{if(O0.isBone){f[O0.name]=O0;let F0=I.gltf.reposo?.get(O0.name);if(F0)O0.position.copy(F0.position),O0.quaternion.copy(F0.quaternion),O0.scale.copy(F0.scale),g.push([O0,F0.position,F0.quaternion,F0.scale])}if(O0.isSkinnedMesh)Y0=O0}),!Y0||!f.Hips||!f.LeftFoot||!f.RightFoot)return null;let{m:G0,u:M0}=OL(I.material,I);Y0.material=G0,Y0.castShadow=!1,Y0.receiveShadow=!0,Y0.frustumCulled=!0,Y0.morphTargetInfluences?.fill(0),h.updateMatrixWorld(!0),Y0.computeBoundingBox();let S0=Y0.boundingBox.clone().applyMatrix4(Y0.matrixWorld),$0=sJ().setFromMatrixPosition(f.Hips.matrixWorld),j=sJ(-$0.x,-S0.min.y,-$0.z);x.position.copy(j),h.updateMatrixWorld(!0),Y0.computeBoundingSphere(),Y0.boundingSphere.radius*=1.25;let p=[];for(let O0 of["Left","Right"]){let F0=f[O0+"Foot"],X0=f[O0+"ToeBase"]||F0,_0=sJ().setFromMatrixPosition(F0.matrixWorld),c0=sJ().setFromMatrixPosition(X0.matrixWorld);p.push([F0,F0.worldToLocal(sJ(_0.x,0,_0.z-0.05))],[X0,X0.worldToLocal(sJ(c0.x,0,c0.z+0.06))])}let o=[f.LeftFoot,f.RightFoot].map((O0)=>O0.getWorldQuaternion(new HJ)),K0=null;if(I.voz==="m"&&f.Head)K0=V(Y0,f.Head);let r={cuerpo:I,root:x,holder:h,h:f,rest:g,malla:Y0,u:M0,base:j,apoyos:p,pieReposo:o,gorra:K0,marcha:0,fase:0,t:0,saluda:0,brazos:0,mirar:sJ(),yaw:0,libre:!0};if(I.zCiclo==null)I.zCiclo=L(r);return r}function V(I,x){let h=I.geometry.attributes.position,f=I.geometry.attributes.skinIndex,g=I.geometry.attributes.skinWeight,Y0=I.skeleton.bones.indexOf(x);if(Y0<0)return null;let G0=new B8,M0=sJ();for(let F0=0;F0<h.count;F0++){let X0=0;for(let _0=0;_0<4;_0++)if(f.getComponent(F0,_0)===Y0)X0+=g.getComponent(F0,_0);if(X0>0.6)I.getVertexPosition(F0,M0),G0.expandByPoint(M0.applyMatrix4(I.matrixWorld))}if(G0.isEmpty())return null;let S0=G0.getCenter(sJ()),$0=G0.getSize(sJ()),j=Math.max($0.x,$0.z*0.8)/2*1.02,p=new zJ,o=new o0({color:"#1f2a44",roughness:0.85}),K0=new C0(new H8(1,18,8,0,TK,0,Math.PI*0.5),o);K0.scale.set(j*1.06,j*1.05,j*1.12),p.add(K0);let r=new C0(new OJ(1,1,0.012,18,1,!1,-Math.PI*0.5,Math.PI),o);r.scale.set(j*0.98,1,j*1.05),r.position.set(0,0.006,j*0.86),r.rotation.x=0.14,p.add(r),p.position.set(S0.x,G0.max.y-j*0.85,S0.z-$0.z*0.06),x.updateWorldMatrix(!0,!1);let O0=x.matrixWorld.clone().invert();return p.updateMatrix(),p.matrix.premultiply(O0),p.matrix.decompose(p.position,p.quaternion,p.scale),x.add(p),p}function L(I){I.mirar.set(0,1.5,5),I.marcha=1;let x=0,h=-1,f=[0,0,0,0],g=[0,0,0,0];for(let Y0=0;Y0<=96;Y0++){I.fase=Y0/96,CN(I);let G0=1/0,M0=0;I.apoyos.forEach(([$0,j],p)=>{if(N9.copy(j).applyMatrix4($0.matrixWorld),g[p]=N9.z,N9.y<G0)G0=N9.y,M0=p});let S0=M0>>1;if(S0===h)x+=Math.max(0,f[M0]-g[M0]);h=S0,f.splice(0,4,...g)}return I.marcha=0,I.fase=0,Math.min(1.7,Math.max(0.9,x))}function P(I){let x=I.cuerpo.nombre==="carmen",h=HL[I.cuerpo.nombre]||[],f=(Y0)=>LQ(Y0.filter((G0)=>!h.includes(G0)));if(I.u.colCamisa.value.set(f(KL)),I.u.colPantalon.value.set(f(x?YL:WL)),I.u.tonoPiel.value.setRGB(...LQ(XL)),I.gorra)I.gorra.visible=Math.random()<0.65,I.gorra.children.forEach((Y0)=>Y0.material.color.set(LQ(UL)));let g=g8(0.95,1.05);I.holder.scale.set(g*g8(1,1.1),g,g*g8(1,1.06))}function T(I){let x=W.filter((g)=>!I||g.nombre===I);if(!x.length)return null;let h=LQ(x),f=Y.find((g)=>g.libre&&g.cuerpo===h);if(!f){if(Y.length>=5)return null;if(f=k(h),!f)return null;Y.push(f)}return f.libre=!1,P(f),f.marcha=0,f.fase=Math.random(),f.saluda=0,f.t=0,J.add(f.holder),f}function B(I){I.libre=!0,J.remove(I.holder);let x=X.indexOf(I);if(x>=0)X.splice(x,1)}function z(I,x){let h=new J7(I,!1,"centripetal",0.5);return{tipo:"ruta",curva:h,largo:h.getLength(),d:0,v:x}}function d(I,x,h){I.guion=x,I.i=0,I.zona=h,I.malla.castShadow=h==="patio",I.velocidad=I.cuerpo.nombre==="carmen"?g8(0.9,1.05):g8(1.02,1.28);for(let G0 of x)if(G0.tipo==="ruta")G0.v=I.velocidad;let f=x[0].curva,g=f.getPointAt(0),Y0=f.getTangentAt(0);I.yaw=Math.atan2(Y0.x,Y0.z),I.holder.position.set(g.x,RX(g.x,g.z),g.z),I.holder.rotation.y=I.yaw,X.push(I)}let b=(I,x,h,f=3.2)=>{let g=x-I.yaw;return g=Math.atan2(Math.sin(g),Math.cos(g)),I.yaw+=Math.max(-f*h,Math.min(f*h,g)),I.holder.rotation.y=I.yaw,Math.abs(g)};function n(I,x,h){let f=I.guion[I.i];if(!f){B(I);return}if(I.t+=x,f.tipo==="ruta"){let g=I.guion[I.i+1],Y0=g&&g.tipo!=="ruta",G0=f.largo-f.d,M0=Y0?Math.min(1,G0/0.55):1;I.marcha+=(Math.min(M0,1)-I.marcha)*Math.min(1,x*(M0<I.marcha?6:2.2));let S0=f.v*Math.max(I.marcha,Y0?0.12:0)*x;f.d=Math.min(f.largo,f.d+S0),I.fase+=S0/I.cuerpo.zCiclo;let $0=f.d/f.largo,j=f.curva.getPointAt($0),p=f.curva.getTangentAt($0);if(I.holder.position.set(j.x,RX(j.x,j.z),j.z),b(I,Math.atan2(p.x,p.z),x),I.mirar.lerp(b$.set(j.x+p.x*6,1.45+RX(j.x,j.z)-0.25,j.z+p.z*6),1-Math.exp(-x*5)),f.d>=f.largo-0.001){if(I.i++,I.guion[I.i])I.guion[I.i].t0=I.t}}else if(f.tipo==="quieto"){I.marcha=Math.max(0,I.marcha-x*4);let g=I.t-(f.t0??I.t);if(f.yaw!=null)b(I,f.yaw,x,2.2);if(f.mira)I.mirar.lerp(f.mirarLejos&&Math.floor(g/7)%3===1?ML:f.mira,1-Math.exp(-x*3));if(f.saludo)Z0(I,f,g,h);if(g>=f.dur){if(I.i++,I.guion[I.i])I.guion[I.i].t0=I.t;I.saluda=0}}}function Z0(I,x,h,f){if(!x.decidido){x.decidido=!0;let g=f?.view,Y0=g&&(g.phase==="lobby"||g.phase==="playing")&&(M||!f.habla?.size&&N>150&&N-D>420);if(M=!1,!Y0){x.dur=0;return}let G0=[0,1,2,3].filter(($0)=>g.bots?.[$0]),M0=G0.length&&Math.random()<0.8?LQ(G0):null;x.seat=M0,x.cabeza=f.cabezas?.[M0??2]?.clone()||sJ(0,1.2,0),D=N;let S0=M0==null?sJ(0,1.2,0):x.cabeza;x.mira=S0.clone(),x.yaw=Math.atan2(S0.x-I.holder.position.x,S0.z-I.holder.position.z)}if(x.dur===0)return;if(I.saluda=h<0.35?0:Math.min(1,(h-0.35)/0.35)*(h>2.6?Math.max(0,1-(h-2.6)/0.4):1),!x.dicho&&h>0.45){x.dicho=!0;let g=I.h.Head.getWorldPosition(sJ());R={seat:x.seat,p:g,t0:N,hasta:N+5},dispatchEvent(new CustomEvent("mesa:saludo",{detail:{seat:x.seat,voz:I.cuerpo.voz,pos:g.toArray()}}))}}function v(I){let x=Math.random()<0.6,h=Math.random()<0.5,f=[];if(x)f.push(z(j$(kX,PX.slice(0,1)),1));else f.push(z(j$(R6(CX),R6(PN)),1));if(h)f.push({tipo:"quieto",dur:3.2,saludo:!0});if(f.push(z(PX,1)),f.push({tipo:"quieto",dur:g8(16,32),yaw:Math.PI,mira:sJ(0.45,1.35,-4.4),mirarLejos:!0}),Math.random()<0.6)f.push(z(j$(BL,CX),1));else f.push(z(j$(R6(PX),R6(kX)),1));return f}function y(){let I=j$(kX,PN,CX);return[z(Math.random()<0.5?I:R6(I),1)]}function u(I,x){if(E||!W.length)return;if(I*=window.mesaPrisa||1,N+=I,R){if(R.e=N-R.t0,N>R.hasta)R=null}let h=document.documentElement.classList.contains("reduced");if(!h&&!K&&N>q){if(q=N+g8(14,32),X.filter((g)=>g.zona==="calle").length<2){let g=T();if(g)d(g,[z(LQ([AK.enfrente,AK.enfrente,AK.lateral])(),1)],"calle")}}if(!h&&N>O&&!X.some((g)=>g.zona==="patio")){O=N+g8(50,110);let g=T();if(g)d(g,Math.random()<0.65?v(g):y(),"patio")}Q.updateMatrixWorld(),H.setFromProjectionMatrix(U.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse));let f=performance.now();for(let g of X.slice()){if(n(g,I,x),g.libre)continue;if(G.center.copy(g.holder.position).y+=0.9,H.intersectsSphere(G))CN(g)}F+=(performance.now()-f-F)*0.05}return window.mesaTranseunte=(I="cliente",x,h)=>{if(I==="posa"){let g=T(x);if(!g)return!1;let[Y0,G0,M0=0]=h;return d(g,[z(j7([Y0-Math.sin(M0)*0.3,G0-Math.cos(M0)*0.3],[Y0,G0]),1),{tipo:"quieto",dur:1e4}],"patio"),!0}let f=T(x);if(!f)return!1;return d(f,I==="cliente"?v(f):I==="saluda"?(()=>{let g=v(f);if(!g.some((Y0)=>Y0.saludo))g.splice(1,0,{tipo:"quieto",dur:3.2,saludo:!0});return M=!0,g})():I==="calle"?[z(AK.enfrente(),1)]:y(),I==="calle"?"calle":"patio"),!0},window.mesaGente=()=>X.map((I)=>({cuerpo:I.cuerpo.nombre,pos:I.holder.position.toArray().map((x)=>+x.toFixed(2)),marcha:+I.marcha.toFixed(2),tramo:I.i})),{update:u,get saludo(){return R},get ms(){return F},get listos(){return W.length},dispose(){E=!0;for(let I of Y)J.remove(I.holder)}}}var L6=Math.PI*2,ZJ=(J=0,Q=0,$=0)=>new _(J,Q,$),kL=[[],[4],[0,8],[0,4,8],[0,2,6,8],[0,2,4,6,8],[0,2,3,5,6,8]];async function AM(J,{onProgress:Q=()=>{}}={}){let $=new e6;$.background=new j0("#2a2d4a"),$.fog=new a7("#5a5670",0.017);let Z=new G8(42,innerWidth/innerHeight,0.08,90);Z.position.set(3.1,2.65,4.2);let K;try{K=new dY({antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{throw Error("This device could not start WebGL. Try a recent desktop browser.")}let W=new URLSearchParams(location.search).has("hq"),Y=!W&&/SwiftShader|llvmpipe|Software/i.test((()=>{let w=K.getContext(),i=w.getExtension("WEBGL_debug_renderer_info");return i?w.getParameter(i.UNMASKED_RENDERER_WEBGL):""})());K.setSize(innerWidth,innerHeight),K.setPixelRatio(Y?0.65:Math.min(devicePixelRatio,1.5,1920/innerWidth)),K.outputColorSpace=$8,K.toneMapping=u7,K.toneMappingExposure=1.24,K.shadowMap.enabled=!Y,K.shadowMap.type=l7,K.info.autoReset=!1,J.appendChild(K.domElement);let X=new $X(Z,K.domElement);X.target.set(0,0.8,-0.15),X.enableDamping=!0,X.dampingFactor=0.065,X.enablePan=!1,X.minDistance=0.8,X.maxDistance=4.6,X.minPolarAngle=0.25,X.maxPolarAngle=Math.PI*0.48,X.update();let H=0.5,U=new $K("#a3a8d8","#6a4e3c",H);$.add(U);let G=new YQ("#ffa06a",0.55);G.position.set(-6,2.6,-9),$.add(G);let F=new WQ("#ffc98a",5.2,7,Math.PI*0.32,0.6,2);F.position.set(0,B0.surfaceY+1.26,0),F.target.position.set(0,0,0);let N=new K7("#ffc07a",0.45,3.2,2);N.position.set(0,B0.surfaceY+1.2,0),$.add(N),F.castShadow=!0,F.shadow.mapSize.set(Y?1024:2048,Y?1024:2048),F.shadow.focus=0.52,F.shadow.bias=-0.0002,F.shadow.normalBias=0.004,F.shadow.radius=3,F.shadow.camera.near=0.2,F.shadow.camera.far=4,$.add(F,F.target);let q=new K7("#cfeee0",13,9,2);q.position.set(0,2.5,-3.5),$.add(q);{let w=new C0(new TJ(1.2,0.03,0.03),new o0({color:"#e6fff4",emissive:"#e6fff4",emissiveIntensity:4}));w.position.set(0,3.12,-3.6),$.add(w)}let O=new Map,D=new Map;function R(w,i=0.85,Q0=0){let a=w+","+i+","+Q0;if(!O.has(a))O.set(a,new o0({color:w,roughness:i,metalness:Q0}));return O.get(a)}function E(w,i,Q0,a=[0,0,0],L0=[1,1,1]){let N0=i.uuid;if(!D.has(N0))D.set(N0,{material:i,geos:[]});let P0=new QJ().compose(ZJ(...Q0),new HJ().setFromEuler(new L9(...a)),ZJ(...L0));w.applyMatrix4(P0),D.get(N0).geos.push(w)}function M(w,i,Q0,a,L0,N0,P0,h0=0){E(new TJ(a,L0,N0),typeof P0==="string"?R(P0):P0,[w,i,Q0],[0,h0,0])}function k(w,i,Q0,a,L0,N0,P0,h0=10,d0=[0,0,0]){E(new OJ(a,L0,N0,h0),typeof P0==="string"?R(P0):P0,[w,i,Q0],d0)}function V(w,i=512,Q0=512){let a=document.createElement("canvas");a.width=i,a.height=Q0,w(a.getContext("2d"),i,Q0);let L0=new c8(a);return L0.colorSpace=$8,L0.anisotropy=Math.min(8,K.capabilities.getMaxAnisotropy()),L0}let L=191,P=()=>{return L=Math.imul(L,1664525)+1013904223>>>0,L/4294967296},T=V((w,i,Q0)=>{w.fillStyle="#65432b",w.fillRect(0,0,i,Q0);for(let a=0;a<700;a++){w.strokeStyle=`rgba(${P()>0.5?"170,122,70":"35,22,14"},${0.08+P()*0.2})`,w.lineWidth=0.3+P()*2,w.beginPath();let L0=P()*Q0;w.moveTo(0,L0);for(let N0=0;N0<i;N0+=20)w.lineTo(N0,L0+Math.sin(N0*0.013+a)*3);w.stroke()}}),B=new o0({map:T,roughness:0.65,color:"#e7bc8c"}),z=R("#4c3022",0.75),d=R("#287770"),b=R("#d2c5a2"),n=R("#3d938e"),Z0=V((w,i,Q0)=>{let a=i/2;for(let d0=0;d0<2;d0++)for(let R0=0;R0<2;R0++){let x0=R0*a,KJ=d0*a;w.save(),w.beginPath(),w.rect(x0,KJ,a,a),w.clip(),w.fillStyle="#c4b99f",w.fillRect(x0,KJ,a,a);for(let[MJ,A8]of[[x0,KJ],[x0+a,KJ],[x0,KJ+a],[x0+a,KJ+a]])w.strokeStyle="#8d6450",w.lineWidth=a*0.04,w.beginPath(),w.arc(MJ,A8,a*0.42,0,Math.PI*2),w.stroke(),w.fillStyle="#4f6763",w.beginPath(),w.arc(MJ,A8,a*0.13,0,Math.PI*2),w.fill(),w.strokeStyle="#c4b99f",w.lineWidth=a*0.02,w.beginPath(),w.arc(MJ,A8,a*0.11,0,Math.PI*2),w.stroke();let JJ=x0+a/2,BJ=KJ+a/2,xJ=(MJ,A8)=>{w.fillStyle=A8,w.beginPath(),w.moveTo(JJ,BJ-MJ),w.lineTo(JJ+MJ,BJ),w.lineTo(JJ,BJ+MJ),w.lineTo(JJ-MJ,BJ),w.closePath(),w.fill()};xJ(a*0.2,"#8d6450"),xJ(a*0.13,"#c4b99f"),xJ(a*0.07,"#3a3630"),w.restore(),w.strokeStyle="#7e7563",w.lineWidth=3,w.strokeRect(x0+1.5,KJ+1.5,a-3,a-3)}for(let d0=0;d0<9000;d0++)w.fillStyle=P()>0.5?"rgba(235,228,205,.07)":"rgba(30,28,24,.09)",w.fillRect(P()*i,P()*Q0,1+P()*2,1+P()*2);for(let d0=0;d0<40;d0++){let R0=w.createRadialGradient(0,0,0,0,0,1),x0=P()*i,KJ=P()*Q0,JJ=20+P()*90;w.save(),w.translate(x0,KJ),w.scale(JJ,JJ),R0.addColorStop(0,"rgba(40,34,26,.10)"),R0.addColorStop(1,"rgba(40,34,26,0)"),w.fillStyle=R0,w.fillRect(-1,-1,2,2),w.restore()}},1024,1024);Z0.wrapS=Z0.wrapT=B7,Z0.repeat.set(22.88888888888889,27.77777777777778),M(-5.7,-0.1,-4.575,20.6,0.2,15.85,new o0({map:Z0,roughness:0.86,color:"#9d937f"})),M(0,-0.2,8.5,40,0.1,10.3,"#2b3133"),M(0,-0.075,3.45,40,0.15,0.2,"#a8a391");for(let w=-10;w<11;w++)M(w*1.8,-0.146,6.3,0.7,0.008,0.06,"#b9ad83");M(0,1.6,-5.1,7.5,3.4,0.2,d),M(-3.8,1.6,-3.85,0.2,3.4,2.7,d),M(3.8,1.6,-3.85,0.2,3.4,2.7,d),M(-3.48,1.1,-2.52,0.7,2.3,0.32,d),M(3.45,1.1,-2.52,0.8,2.3,0.32,d),M(0,2.95,-2.52,7.5,0.42,0.35,n),M(0,3.24,-3.7,8,0.12,4.4,"#435451");for(let w=0;w<30;w++)M(-4+w*0.276,3.15,-3.7,0.028,0.055,4.6,"#82928a");M(0,0.7,-4.24,3.9,1.4,0.62,B),M(0,1.43,-4.2,4.08,0.1,0.78,B);for(let w=0;w<3;w++)M(-0.6,1.58+w*0.48,-4.78,5.8,0.065,0.38,B),M(-0.6,1.84+w*0.48,-4.98,5.8,0.48,0.065,"#443e30");M(2.95,1.02,-4.55,1.02,2.1,0.8,"#d0ceb8"),M(2.95,1.12,-4.11,0.84,1.55,0.035,"#254c51");let v=[];for(let w=0;w<29;w++)v.push({pos:[-3.18+w*0.182,2.095,-4.69],scale:0.7+w%5*0.07,color:["#566641","#b0762a","#2e5a45","#7a3024","#c9b36a","#3b4f7a"][w*7%6]});let y=new C7([new q0(0,0),new q0(0.036,0),new q0(0.043,0.025),new q0(0.043,0.17),new q0(0.019,0.205),new q0(0.017,0.285),new q0(0.021,0.29),new q0(0.021,0.305),new q0(0,0.31)],12);v.forEach((w)=>E(y.clone(),R(w.color,0.3),w.pos,[0,0,0],[w.scale,w.scale,w.scale]));for(let[w,i,Q0]of[[-3.1,-1.9,"#a8483a"]])for(let a=0;a<3;a++){M(w,0.19+a*0.34,i,0.52,0.3,0.4,Q0);for(let L0=0;L0<5;L0++)M(w-0.2+L0*0.1,0.18+a*0.34,i+0.204,0.055,0.16,0.015,"#2c3025")}for(let w=0;w<5;w++){let i=-7-w*3.5;M(i,1.5,-3,3.1,3,3.2,["#d9a35c","#7fb1a4","#d8c7a2","#c98d7c","#a6bf8e"][w]),M(i,2.2,-1.38,1,0.8,0.045,"#b59961"),M(i,2.2,-1.35,0.045,0.86,0.055,"#273e37"),M(i,0.98,-1.38,0.9,1.9,0.04,"#354e49")}for(let w=0;w<4;w++)k(-5-w*5,2.3,-1,0.08,0.09,4.6,"#665443"),M(-5-w*5,4.2,-1,1.8,0.09,0.09,"#514b3d");function u(w,i,Q0,a="#202d28"){let L0=new n8(ZJ(...w),ZJ(...Q0),ZJ(...i));E(new v8(L0,20,0.008,4,!1),R(a),[0,0,0])}let I=[];for(let w of[-1.95,1.95])k(w,1.45,2.55,0.035,0.045,2.9,"#5b4a38",8);for(let[w,i,Q0]of[[[-2.7,2.9,-2.45],[-1.95,2.85,2.55],0.5],[[2.7,2.9,-2.45],[1.95,2.85,2.55],0.5],[[-1.95,2.85,2.55],[1.95,2.85,2.55],0.32]]){let a=ZJ(...w),L0=ZJ(...i),N0=a.clone().lerp(L0,0.5);N0.y-=Q0*2;let P0=new n8(a,N0,L0);E(new v8(P0,24,0.006,4,!1),R("#1c2320"),[0,0,0]);let h0=Math.round(a.distanceTo(L0)/0.42);for(let d0=1;d0<h0;d0++){let R0=P0.getPointAt(d0/h0);I.push(R0.setY(R0.y-0.035))}}{let w=new H8(0.022,10,8);w.scale(1,1.3,1);let i=["#ffd89a","#ffc27a","#ffe3a8"],Q0=new v9(w,new bJ({color:new j0(4.5,4.5,4.5)}),I.length),a=new wJ;I.forEach((L0,N0)=>{a.position.copy(L0),a.updateMatrix(),Q0.setMatrixAt(N0,a.matrix),Q0.setColorAt(N0,new j0(i[N0%i.length]))}),$.add(Q0)}u([0,3.22,-1.6],[0,3.19,0],[0,3.02,-0.8]);let x=new zJ;x.position.set(4.3,0,-1.7),$.add(x);let h=new C0(new OJ(0.1,0.15,4.5,9),R("#696047"));h.position.y=2.25,x.add(h);for(let w=0;w<9;w++){let i=new C0(new H8(1,10,5),R(w%2?"#4a654c":"#344e3d"));i.scale.set(0.27,0.075,1.5),i.position.set(Math.sin(w*L6/9)*0.72,4.35,Math.cos(w*L6/9)*0.72),i.rotation.set(0.23,w*L6/9,0),x.add(i)}let f=new L8({map:T,color:"#d9a877",roughness:0.5,clearcoat:0.55,clearcoatRoughness:0.28}),g=new C0(new w8(B0.tableWidth,B0.tableThickness,B0.tableWidth,3,0.035),f);g.position.y=B0.tableCenterY,g.castShadow=!0,g.receiveShadow=!0,$.add(g);let Y0=V((w,i,Q0)=>{w.fillStyle="#2f5b47",w.fillRect(0,0,i,Q0);for(let L0=0;L0<Q0;L0+=2)for(let N0=0;N0<i;N0+=2){let P0=(P()-0.5)*14,h0=((N0>>1)+(L0>>1))%2?4:-4;w.fillStyle=`rgb(${47+P0+h0},${91+P0+h0},${71+P0+h0})`,w.fillRect(N0,L0,2,2)}for(let L0=0;L0<4;L0++){let N0=L0*Math.PI/2,P0=i/2+Math.sin(N0)*i*0.36,h0=Q0/2+Math.cos(N0)*Q0*0.36,d0=w.createRadialGradient(P0,h0,0,P0,h0,i*0.2);d0.addColorStop(0,"rgba(120,150,120,.16)"),d0.addColorStop(1,"rgba(120,150,120,0)"),w.fillStyle=d0,w.fillRect(0,0,i,Q0)}let a=w.createRadialGradient(i/2,Q0/2,i*0.1,i/2,Q0/2,i*0.62);a.addColorStop(0,"rgba(0,0,0,0)"),a.addColorStop(1,"rgba(0,0,0,.28)"),w.fillStyle=a,w.fillRect(0,0,i,Q0)},512,512),G0=new C0(new w8(B0.feltWidth,0.012,B0.feltWidth,2,0.02),new L8({map:Y0,roughness:0.97,sheen:0.8,sheenRoughness:0.55,sheenColor:new j0("#9fc7a8")}));G0.position.y=B0.feltCenterY,G0.receiveShadow=!0,$.add(G0);let M0=B0.tableWidth/2-0.07;for(let w of[-M0,M0])for(let i of[-M0,M0])M(w,0.35,i,0.075,0.68,0.075,z);let S0=["#C8402F","#6FB7C9"];for(let w=0;w<4;w++){let[i,Q0,a]=k9[w],L0=B0.feltWidth/2-0.012,N0=new C0(new RJ(B0.feltWidth*0.72,0.009),new o0({color:S0[w%2],roughness:0.9}));N0.rotation.set(-Math.PI/2,0,a),N0.position.set(i*L0/B0.seatDistance,B0.surfaceY+0.0006,Q0*L0/B0.seatDistance),N0.receiveShadow=!0,$.add(N0)}let $0=new o0({roughness:0.92,map:V((w,i,Q0)=>{w.fillStyle="#8f7446",w.fillRect(0,0,i,Q0);let a=12,L0=i/a;for(let N0=0;N0<a;N0++)for(let P0=0;P0<a;P0++){let h0=(P0+N0)%2===0;for(let d0=0;d0<3;d0++){let R0=150+P()*45|0;w.fillStyle=`rgb(${R0+30},${R0+8},${R0-45})`;let x0=d0*L0/3+L0*0.04,KJ=L0/3-L0*0.08;if(h0)w.fillRect(P0*L0+1,N0*L0+x0,L0-2,KJ);else w.fillRect(P0*L0+x0,N0*L0+1,KJ,L0-2)}}w.fillStyle="rgba(40,28,14,.18)";for(let N0=0;N0<=a;N0++)w.fillRect(N0*L0-1,0,2,Q0),w.fillRect(0,N0*L0-1,i,2)},256,256)});for(let w=0;w<4;w++){let[i,Q0,a]=k9[w],L0=new zJ;L0.position.set(i,0,Q0),L0.rotation.y=a,$.add(L0);let N0=R(w%2?"#5e9fb2":"#b53f2e",0.62),P0=(h0,d0,R0,x0,KJ,JJ,BJ=N0,xJ=0.008)=>{let MJ=ZJ(x0,KJ,JJ).applyAxisAngle(ZJ(0,1,0),a).add(ZJ(i,0,Q0));E(new w8(h0,d0,R0,2,xJ),BJ,MJ.toArray(),[0,a,0])};P0(B0.chairSeatWidth-0.04,0.035,0.5,0,B0.chairSeatY,0,$0,0.01);for(let h0 of[-1,1])P0(0.04,0.05,0.54,h0*(B0.chairSeatWidth/2-0.02),B0.chairSeatY-0.005,0);for(let h0 of[-1,1])P0(B0.chairSeatWidth,0.05,0.04,0,B0.chairSeatY-0.005,h0*0.25);for(let h0 of[-0.24,0.24])for(let d0 of[-0.21,0.21])P0(0.04,B0.chairSeatY,0.04,h0,B0.chairSeatY/2,d0);for(let h0 of[-0.24,0.24])P0(0.024,0.024,0.42,h0,0.15,0);P0(0.48,0.024,0.024,0,0.15,0.21);for(let h0 of[-0.24,0.24])P0(0.04,0.52,0.04,h0,B0.chairSeatY+0.26,-0.23);for(let h0 of[0.2,0.33,0.46])P0(0.46,h0===0.46?0.07:0.045,0.022,0,B0.chairSeatY+h0,-0.23)}function j(w,i,Q0,a,L0,N0=60){let P0=V((h0,d0,R0)=>{h0.fillStyle=a,h0.fillRect(0,0,d0,R0),h0.fillStyle=L0,h0.textAlign="center",h0.textBaseline="middle",h0.font=`bold ${N0}px Georgia`,h0.fillText(w,d0/2,R0/2)},1024,256);return new C0(new RJ(i,Q0),new bJ({map:P0}))}let p=j("COLMADO  LA ESQUINA",4.8,0.38,"#a05d42","#f8e8b9",64);p.position.set(0,2.94,-2.33),$.add(p);let o=j("MESA",0.11,0.029,"#284e3e","#81906b",77);{let w=document.createElement("canvas");w.width=512,w.height=136;let i=new c8(w);i.colorSpace=$8;let Q0=()=>{let a=w.getContext("2d");a.clearRect(0,0,512,136),a.font=`96px ${document.fonts?.check?.("96px Shrikhand")?"Shrikhand":"Georgia"}`,a.textAlign="center",a.textBaseline="middle",a.fillStyle="rgba(170,205,170,.42)",a.fillText("Mesa",256,72),i.needsUpdate=!0};Q0(),document.fonts?.load?.("96px Shrikhand").then(Q0).catch(()=>{}),o.material=new o0({map:i,transparent:!0,depthWrite:!1,roughness:1})}o.rotation.x=-Math.PI/2,o.position.set(0,B0.surfaceY+0.001,0.3),$.add(o);let K0=new zJ;K0.position.set(-0.9,2.62,-3.45),K0.rotation.x=-Math.PI/2,$.add(K0),k(-0.9,2.9,-3.45,0.015,0.015,0.56,"#777a68",8),k(-0.9,3.16,-3.45,0.075,0.075,0.025,"#767763",12);let r=new C0(new H8(0.075,12,8),R("#41493d"));K0.add(r);for(let w=0;w<5;w++){let i=new C0(new TJ(0.13,0.5,0.025),R("#85856e",0.88,0.05));i.position.set(Math.sin(w*L6/5)*0.285,Math.cos(w*L6/5)*0.285,0),i.rotation.z=-w*L6/5,K0.add(i)}let O0=new zJ;O0.position.set(-12,0.05,5.2),$.add(O0);for(let w of[-0.36,0.36]){let i=new C0(new f9(0.19,0.038,7,14),R("#182221"));i.position.set(w,0.2,0),O0.add(i)}let F0=new C0(new w8(0.65,0.17,0.2,2,0.04),R("#823e2f",0.45,0.25));F0.position.y=0.49,O0.add(F0);let X0=new C0(new TJ(0.35,0.06,0.22),R("#202725"));X0.position.set(-0.08,0.61,0),O0.add(X0);let _0=new C0(new OJ(0.015,0.015,0.45,6),R("#8c9c96",0.4,0.5));_0.position.set(0.32,0.59,0),_0.rotation.z=-0.3,O0.add(_0);let c0=GN({scene:$,texture:V,mat:R,box:M,cylinder:k,random:P,teal:d,wood:B,storeSign:p}),EJ=FN({scene:$,texture:V,mat:R,box:M,cylinder:k,staticGeo:E,random:P,renderer:K});EN({scene:$,random:P});for(let{material:w,geos:i}of D.values()){let Q0=NQ(i.some((a)=>!a.index)?i.map((a)=>a.index?a.toNonIndexed():a):i,!1);if(Q0){let a=new C0(Q0,w);a.receiveShadow=!0,Q0.computeBoundingBox(),a.castShadow=Q0.boundingBox.distanceToPoint(ZJ(0,0.8,0))<1.6&&Q0.boundingBox.getSize(ZJ()).length()<8,$.add(a)}i.forEach((a)=>a.dispose())}let g0=new zJ,PJ=new zJ;$.add(g0,PJ);let _J=new w8(B0.tileLength,B0.tileThickness,B0.tileWidth,3,0.0024),gJ=new L8({color:"#ede5d2",roughness:0.5,clearcoat:0.3,clearcoatRoughness:0.4}),l=new L8({color:"#e2dac6",roughness:0.42,clearcoat:0.7,clearcoatRoughness:0.3}),nJ=new o0({color:"#b98b3e",roughness:0.28,metalness:1}),NJ=new OJ(0.0019,0.0019,0.0009,12),VJ=new o0({color:"#0b0a09",roughness:0.55}),S=new o0({color:"#2a2622",roughness:0.6}),C=new OJ(B0.pipRadius,B0.pipRadius,0.0007,14),m=new TJ(0.0014,0.0005,B0.tileWidth*0.8),J0=new Set([_J,C,m,NJ]),V0=new Set([gJ,l,VJ,S,nJ]),z0=[f,G0.material,gJ,l].map((w)=>[w,{clearcoat:w.clearcoat,sheen:w.sheen}]);function y0(w,i,Q0=!1){let a=new zJ,L0=new C0(_J,Q0?l:gJ);if(L0.castShadow=!0,L0.receiveShadow=!0,a.add(L0),!Q0){let N0=[];if([w,i].forEach((d0,R0)=>kL[d0].forEach((x0)=>N0.push(ZJ((R0===0?-1:1)*B0.tileLength/4+(x0%3-1)*B0.pipColumnSpacing,B0.tileThickness/2+0.0005,(Math.floor(x0/3)-1)*B0.pipRowSpacing)))),N0.length){let d0=new v9(C,VJ,N0.length),R0=new QJ;N0.forEach((x0,KJ)=>d0.setMatrixAt(KJ,R0.makeTranslation(x0.x,x0.y,x0.z))),a.add(d0)}let P0=new C0(m,S);P0.position.y=B0.tileThickness/2+0.0002,a.add(P0);let h0=new C0(NJ,nJ);h0.position.y=B0.tileThickness/2+0.0004,a.add(h0)}return a}function H0(w){return ZJ(w.x,B0.surfaceY+B0.tileThickness/2+0.001,w.z)}let E0=new C0(new f9(0.2,0.006,5,38),new bJ({color:"#e8bf70",transparent:!0,opacity:0.7}));E0.rotation.x=-Math.PI/2,E0.position.y=0.027,$.add(E0);let I0=[],s0=[],A0=[],k0=[],e0=new tY,t0=0,IJ=4,s=[];k0.push(...qN($));let v0=ZJ(),U0=ZJ(),w0=ZJ(),m0=ZJ(),D0=new QJ,f0=ZJ(),WJ=ZJ();function dJ(w){let i=null;if(w.root.traverse((JJ)=>{if(JJ.isSkinnedMesh&&JJ.morphTargetDictionary&&!i)i=JJ}),!i||i.morphTargetDictionary.parpadeo==null)return;w.cara={mesh:i,iP:i.morphTargetDictionary.parpadeo,iS:i.morphTargetDictionary.sonrisa};let Q0=i.geometry.attributes.position,a=i.userData?.boca;if(a){let JJ=1e9,BJ=0;for(let xJ=0;xJ<Q0.count;xJ++){let MJ=(Q0.getX(xJ)-a[0])**2+(Q0.getY(xJ)-a[1])**2+(Q0.getZ(xJ)-a[2])**2;if(MJ<JJ)JJ=MJ,BJ=xJ}w.bocaMundo=(xJ)=>{return i.skeleton.update(),i.getVertexPosition(BJ,xJ).applyMatrix4(i.matrixWorld)}}let L0=i.userData?.ojos,N0=i.userData?.parpado;if(!L0||!N0)return;let P0=i.geometry.attributes.position,h0=(JJ)=>{let BJ=1e9,xJ=0;for(let MJ=0;MJ<P0.count;MJ++){let A8=(P0.getX(MJ)-JJ[0])**2+(P0.getY(MJ)-JJ[1])**2+(P0.getZ(MJ)-JJ[2])**2;if(A8<BJ)BJ=A8,xJ=MJ}return xJ},d0=new RJ(0.027,0.0125,8,4);d0.translate(0,-0.00625,0);let R0=d0.attributes.position,x0=[];for(let JJ=0;JJ<R0.count;JJ++){let BJ=R0.getX(JJ)/0.0135,xJ=-R0.getY(JJ)/0.0125;R0.setZ(JJ,0.0032*Math.cos(BJ*Math.PI/2)*(0.5+0.5*xJ));let MJ=xJ>0.85?0.45:1;x0.push(MJ,MJ,MJ)}d0.setAttribute("color",new YJ(x0,3)),d0.computeVertexNormals();let KJ=new o0({color:new j0().setRGB(...N0,$8),roughness:0.7,vertexColors:!0});w.parpados=L0.map((JJ)=>{let BJ=new C0(d0,KJ);return BJ.visible=!1,BJ.frustumCulled=!1,$.add(BJ),{m:BJ,k:h0(JJ)}})}function SJ(w){let i=w.parpados;if(!i||!w.cara)return;let Q0=w.parpadeo||0;if(Q0<0.03){for(let P0 of i)P0.m.visible=!1;return}let a=w.cara.mesh;a.skeleton.update();let L0=a.getVertexPosition(i[0].k,v0).applyMatrix4(a.matrixWorld).clone(),N0=a.getVertexPosition(i[1].k,v0).applyMatrix4(a.matrixWorld).clone();if(w.head.getWorldPosition(f0),w.front.getWorldPosition(WJ),m0.subVectors(WJ,f0).normalize(),U0.subVectors(N0,L0).normalize(),w0.crossVectors(m0,U0).normalize(),w0.y<0)w0.negate();U0.crossVectors(w0,m0).normalize(),D0.makeBasis(U0,w0,m0);for(let[P0,h0]of[[i[0],L0],[i[1],N0]])P0.m.visible=!0,P0.m.quaternion.setFromRotationMatrix(D0),P0.m.position.copy(h0).addScaledVector(w0,0.0052).addScaledVector(m0,0.0024),P0.m.scale.set(1,Q0,1)}async function i8(w,i){try{Q(`Seating ${["Don Rafa","Marisol","Luis","Carmen"][w]}…`,t0/IJ);let Q0=await e0.loadAsync(`/models/${i}.glb`);s0[w]=Q0,Q0.reposo=new Map(CK(Q0.scene).map((JJ)=>[JJ.bone.name,JJ]));let a=Q0.scene,L0=new zJ;L0.add(a);let N0=new O$(a);if(Q0.animations[0])N0.clipAction(Q0.animations.find((JJ)=>JJ.name==="Seated")||Q0.animations[0]).play();N0.setTime(B0.neutralPoseTime),a.updateMatrixWorld(!0),a.traverse((JJ)=>{if(JJ.isSkinnedMesh)JJ.computeBoundingBox();if(JJ.isMesh)JJ.castShadow=!0,JJ.receiveShadow=!0,JJ.frustumCulled=!1,JJ.material.roughness=0.83});let P0=new B8().setFromObject(a),h0=a.getObjectByName("Hips"),d0=h0?.getWorldPosition(ZJ())||P0.getCenter(ZJ());a.position.set(-d0.x,-P0.min.y,-d0.z);let[R0,x0,KJ]=k9[w];if(L0.position.set(R0,0,x0),L0.rotation.y=KJ,$.add(L0),I0[w]={root:a,holder:L0,index:w,pose:CK(a),head:a.getObjectByName("Head"),neck:a.getObjectByName("neck"),front:a.getObjectByName("headfront"),chest:a.getObjectByName("Spine"),hips:a.getObjectByName("Hips"),lomo:a.getObjectByName("Spine02"),muslos:[a.getObjectByName("LeftUpLeg"),a.getObjectByName("RightUpLeg")],hombros:[[1,a.getObjectByName("LeftShoulder")],[-1,a.getObjectByName("RightShoulder")]],spine:a.getObjectByName("Spine01"),reaction:null,brazos:["Left","Right"].map((JJ)=>({lado:JJ,hombro:a.getObjectByName(JJ+"Shoulder"),brazo:a.getObjectByName(JJ+"Arm"),antebrazo:a.getObjectByName(JJ+"ForeArm"),mano:a.getObjectByName(JJ+"Hand")}))},I0[w].bebida=k0.find((JJ)=>JJ.index===w),dJ(I0[w]),t0++,Q(t0===4?"The table is ready.":`${t0} of 4 seats ready`,t0/IJ),A0.length===0&&X7>0)A(X7)}catch(Q0){s.push(i),console.error("Character load failed",i,Q0),Q(`Could not load ${i}. Reload to retry.`,t0/IJ)}}let o8=Promise.all(["rafa-upright","marisol","luis-upright","carmen"].map((w,i)=>i8(i,w))),l9=null;o8.then(()=>{if(!fK)l9=IN({scene:$,camera:Z,renderer:K,pocos:Y,cuerpos:[["luis-upright",2],["marisol",1],["carmen",3]].filter(([,w])=>s0[w]).map(([w,i])=>({nombre:w,gltf:s0[i]}))})});let BQ=null,y7=null,h$="",V6=null,V8=DN({scene:$,renderer:K,camera:Z,controls:X,software:Y,bulbLight:F});V8.calidad("high");let a8=new Set,D6=new Map,x$=[0,1,2,3].map(()=>ZJ()),MQ=(w)=>{let i=w.detail||{};if(i.active)a8.add(i.seat),D6.set(i.seat,i.type);else a8.delete(i.seat)};window.addEventListener("mesa:botvoice",MQ);let u9=null,X7=0,kQ="",CQ=0,g$="attract",U8=null,G9=[],yK=0,p$=0;function B6(w){while(w.children.length){let i=w.children.pop();i.parent=null,i.traverse((Q0)=>{if(Q0.isMesh&&!J0.has(Q0.geometry))Q0.geometry.dispose();if(Q0.isMesh&&!V0.has(Q0.material))Q0.material.dispose()})}}function A(w){X7=w;let i=Math.min(8,w);for(let Q0=A0.length-1;Q0>=i;Q0--)$.remove(A0[Q0].holder),A0.pop();while(A0.length<i&&s0.filter(Boolean).length){let Q0=A0.length,a=s0[Q0%4]||s0.find(Boolean),L0=GQ(a.scene),N0=new zJ;N0.add(L0);let P0=new O$(L0);if(a.animations[0])P0.clipAction(a.animations.find((x0)=>x0.name==="Seated")||a.animations[0]).play();P0.setTime(B0.neutralPoseTime),L0.updateMatrixWorld(!0),L0.traverse((x0)=>{if(x0.isSkinnedMesh)x0.computeBoundingBox();if(x0.isMesh)x0.castShadow=!1,x0.frustumCulled=!1});let h0=new B8().setFromObject(L0),d0=L0.getObjectByName("Hips")?.getWorldPosition(ZJ())||h0.getCenter(ZJ());L0.position.x-=d0.x,L0.position.y-=h0.min.y,L0.position.z-=d0.z,N0.position.set(-2.5+Q0%4*1.66,0,-2.5-Math.floor(Q0/4)*0.65),N0.rotation.y=0,$.add(N0);let R0=new C0(new TJ(0.56,0.06,0.54),b);R0.position.set(0,B0.chairSeatY,0),N0.add(R0),A0.push({root:L0,holder:N0,pose:CK(L0),head:L0.getObjectByName("Head"),neck:L0.getObjectByName("neck"),front:L0.getObjectByName("headfront"),chest:L0.getObjectByName("Spine"),spine:L0.getObjectByName("Spine01"),index:Q0+4})}}let c=!1,W0=ZJ();function e(){let w=Z.position,i=X.target;if(W0.subVectors(w,i),W0.length()>4.6)w.copy(i).addScaledVector(W0.normalize(),4.6);w.z=Math.max(w.z,-2.1),w.x=y9.clamp(w.x,-4.9,4.9),w.y=y9.clamp(w.y,0.35,5.2)}let t=-1,T0=null,l0=X.minDistance;function b0(w,i,Q0){if(document.documentElement.classList.contains("reduced"))return;let a=ZJ(1,0,1).normalize(),L0=-9;for(let[P0,h0]of[[1,1],[1,-1],[-1,1],[-1,-1]]){let d0=ZJ(P0,0,h0).normalize(),R0=d0.x*w.x+d0.z*w.z;if(R0>L0)L0=R0,a=d0}let N0=w.clone().addScaledVector(a,0.3);if(N0.x=y9.clamp(N0.x,-0.4,0.4),N0.z=y9.clamp(N0.z,-0.4,0.4),N0.y=B0.surfaceY+(Q0?0.12:0.19),!T0)l0=X.minDistance;X.minDistance=0.1,T0={pos:T0?.pos||Z.position.clone(),target:T0?.target||X.target.clone(),at:p8.elapsedTime+3.4},U8={from:Z.position.clone(),to:N0,fromTarget:X.target.clone(),toTarget:w.clone().setY(w.y+0.01),t:0,dur:0.45}}function i0(w="table"){if(X.minDistance=w==="seat"||w==="close"?0.3:0.7,X.minPolarAngle=w==="overhead"?0.01:0.25,Z.aspect<0.95&&w==="table")w="overhead";let i,Q0=ZJ(0,0.8,0);if(w==="attract")i=ZJ(0.75,1.3,4.4),Q0=ZJ(-1,1.4,-1.2);else if(w==="overhead")i=ZJ(0.001,1.86,0.34),Q0=ZJ(0,B0.surfaceY,0.02);else if(w==="seat")i=ZJ(0,1.36,0.74),Q0=ZJ(0,0.82,-0.12);else if(w==="close")i=ZJ(0.62,1.3,1),Q0=ZJ(-0.03,0.85,-0.08);else i=ZJ(0.8,1.89,1.24),Q0=ZJ(0,0.9,-0.2);if(w!=="attract"&&w!=="seat"&&Z.aspect<1.3){let a=Math.min(2.4,Math.pow(1.6/Z.aspect,0.8));i=Q0.clone().add(i.clone().sub(Q0).multiplyScalar(a))}if(I0[0])I0[0].root.visible=w!=="seat";T0=null,X.minDistance=Math.min(X.minDistance,l0),U8={from:Z.position.clone(),to:i,fromTarget:X.target.clone(),toTarget:Q0,t:0}}let n0=ZJ(0,1,0),GJ=new HJ().setFromAxisAngle(ZJ(1,0,0),0.12),DJ=new HJ().setFromAxisAngle(n0,Math.PI/2),a0=new HJ().setFromAxisAngle(ZJ(0,0,1),Math.PI/2),jJ=B0.tableCenterY+B0.tableThickness/2+B0.tileLength/2*Math.cos(0.12)+B0.tileThickness/2*Math.sin(0.12)+0.001;function aJ(w,i,Q0){let a=k9[w][2];return Q0.quaternion.setFromAxisAngle(n0,a).multiply(GJ).multiply(DJ).multiply(a0),Q0.position.set(i,jJ,-B0.rackRadius).applyAxisAngle(n0,a),Q0}let AJ=new v9(_J,l,28);AJ.count=0,AJ.castShadow=!0,AJ.receiveShadow=!0,AJ.frustumCulled=!1,PJ.add(AJ);let hJ=[[],[],[],[]],iJ=new wJ,u0=[0,0,0,0],N8="",CJ=new Set;function j8(w){let i=0;for(let Q0=0;Q0<4;Q0++){let a=CJ.has(Q0)?0:u0[Q0],L0=hJ[Q0];while(L0.length<a)L0.push((L0.length-(a-1)/2)*B0.rackSpacing);L0.length=a;for(let N0=0;N0<a;N0++){let P0=(N0-(a-1)/2)*B0.rackSpacing;L0[N0]+=(P0-L0[N0])*(1-Math.exp(-w*10)),aJ(Q0,L0[N0],iJ),iJ.updateMatrix(),AJ.setMatrixAt(i++,iJ.matrix)}}AJ.count=i,AJ.instanceMatrix.needsUpdate=!0}let M8=new zJ;$.add(M8);let r8=new Map,d9="",fJ="",rJ=(()=>{let w=7,i=()=>(w=w*16807%2147483647)/2147483647,Q0=[],a=0.2;for(let L0=0;L0<28;L0++){let N0=!1;for(let P0=0;P0<600&&!N0;P0++){let h0=i()*Math.PI*2,d0=Math.sqrt(i())*a,R0=Math.cos(h0)*d0,x0=Math.sin(h0)*d0*0.82;if(Q0.every((KJ)=>Math.hypot(KJ.x-R0,KJ.z-x0)>=0.058))Q0.push({x:R0,z:x0,ry:i()*Math.PI}),N0=!0}if(!N0)a+=0.012,L0--}return Q0})(),F9=B0.surfaceY+B0.tileThickness/2+0.0003;function cJ(){for(let w=0;w<28;w++){let i=y0(0,0,!0),Q0=rJ[w];i.position.set(Q0.x,F9,Q0.z),i.rotation.y=Q0.ry,g0.add(i)}}let k8=(w)=>w*w*(3-2*w),H7=new HJ().setFromAxisAngle(ZJ(1,0,0),Math.PI),m$=new HJ().setFromAxisAngle(n0,-Math.PI/2);function zN(w,i){w.revealed.forEach((Q0,a)=>{let L0=Q0.length,N0=k9[a][2];Q0.forEach((P0,h0)=>{let d0=(h0-(L0-1)/2)*B0.rackSpacing,R0=y0(P0.a,P0.b);aJ(a,d0,iJ);let x0=iJ.quaternion.clone().multiply(H7),KJ=iJ.position.clone(),JJ=ZJ(d0,B0.surfaceY+B0.tileThickness/2+0.001,-B0.rackRadius+0.047).applyAxisAngle(n0,N0),BJ=new HJ().setFromAxisAngle(n0,N0).multiply(m$);R0.position.copy(KJ),R0.quaternion.copy(x0),R0.visible=!1,g0.add(R0),G9.push({obj:R0,from:KJ,to:JJ,qFrom:x0,qTo:BJ,elapsed:-(i+a*0.3+h0*0.055),duration:0.42,revela:a,ultima:h0===L0-1})})})}function AX(w,i=0){u9=w;{let N0=w&&(w.phase==="handEnd"||w.phase==="seriesEnd")&&w.result,P0=N0?w.handNo+":"+w.phase:"";if(P0&&P0!==h$)y7={t:p8.elapsedTime+0.5,team:w.result.team??null};if(!N0)y7=null;h$=P0}if(X7!==i)A(i);let Q0=!w||w.phase==="lobby"?"pila":"mano"+w.handNo;if(Q0!==d9){d9=Q0,B6(g0),r8.clear(),G9=G9.filter((N0)=>N0.reparto);for(let N0 of I0)if(N0)N0.jugada=null;if(Q0==="pila")cJ()}if(w&&w.chain?.length){let N0=t5(w.chain,w.moves),P0=w.event,h0=["domino","capicua","tranque"].includes(P0?.type),d0=w.moves[w.moves.length-1],R0=P0?.type==="domino"||P0?.type==="capicua",x0=P0?.type==="play"?P0.tile:h0&&d0?.type==="play"?d0.tile:null;w.chain.forEach((KJ,JJ)=>{if(r8.has(KJ.id))return;let BJ=y0(KJ.x,KJ.y),xJ=H0(N0[JJ]);if(BJ.position.copy(xJ),BJ.rotation.y=N0[JJ].yaw,BJ.updateMatrix(),g0.add(BJ),r8.set(KJ.id,BJ),KJ.id!==x0||KJ.seat==null)return;aJ(KJ.seat,0,iJ);let MJ={obj:BJ,from:iJ.position.clone(),to:xJ.clone(),qFrom:iJ.quaternion.clone(),qTo:BJ.quaternion.clone(),elapsed:0,duration:R0?0.7:0.55,golpe:R0};if(BJ.position.copy(MJ.from),BJ.quaternion.copy(MJ.qFrom),G9.push(MJ),h0)b0(xJ,KJ.seat,R0);yK=performance.now();let A8=I0[KJ.seat];if(BQ={p:xJ.clone(),t:p8.elapsedTime+MJ.duration},A8)A8.reaction={time:p8.elapsedTime},A8.jugada={t0:p8.elapsedTime,obj:BJ,anim:MJ,hasta:xJ.clone()}})}if(w?.phase==="playing"&&w.handNo!==CQ&&w.moves.length===0){CQ=w.handNo,B6(M8),G9=G9.filter((N0)=>!N0.reparto),p$=performance.now()+3300;for(let N0=0;N0<4;N0++)hJ[N0]=Array.from({length:7},(P0,h0)=>(h0-3)*B0.rackSpacing);for(let N0=0;N0<28;N0++){let P0=N0%4,h0=Math.floor(N0/4),d0=y0(0,0,!0),R0=rJ[N0],x0=ZJ(R0.x,F9,R0.z);d0.position.copy(x0),d0.rotation.y=R0.ry,M8.add(d0);let KJ=aJ(P0,(h0-3)*B0.rackSpacing,new wJ);G9.push({obj:d0,from:x0,to:KJ.position.clone(),qFrom:d0.quaternion.clone(),qTo:KJ.quaternion.clone(),elapsed:-N0*0.065,duration:1.1,reparto:!0})}}let a=w?.moves?.[w.moves.length-1],L0=w?w.handNo+":"+w.moves.length:"";if(a?.type==="pass"&&fJ!==L0){fJ=L0;let N0=I0[a.seat];if(N0)N0.toque={t0:p8.elapsedTime}}{let N0=w&&(w.phase==="handEnd"||w.phase==="seriesEnd")&&w.revealed,P0=N0?"r"+w.handNo:"";if(!N0)N8="",CJ.clear();else if(P0!==N8){N8=P0;let h0=w.result?.type;zN(w,h0==="domino"||h0==="capicua"?3.4:h0==="tranque"?2.5:1.2)}}u0=[0,1,2,3].map((N0)=>!w||w.phase==="lobby"?0:w.counts[N0]??0),E0.visible=!1,V6=w?.phase==="playing"&&w.chain?.length?e5(w.chain,w.moves):null}let p8=new YK,PQ=0,vK=0,l$=0,IQ=60,fK=!1,u$=!1,zQ=null,M6="high",TX=null,d$=performance.now(),c$=0,_X=!1,AN=new URLSearchParams(location.search).has("debug"),wX=F.intensity,v7=ZJ(),TN=ZJ(0,B0.surfaceY,0);function bK(){if(fK||u$){zQ=null;return}zQ=requestAnimationFrame(bK);let w=p8.getDelta(),i=Math.min(w,0.06),Q0=TX??p8.elapsedTime,a=performance.now();if(vK++,l$+=w,l$>1){if(IQ=vK/l$,vK=0,l$=0,!W&&!c$&&M6==="high"&&a-d$>9000&&a-d$<30000&&IQ<30)c$=a,hK.quality("low"),dispatchEvent(new CustomEvent("mesa:calidad",{detail:"low"}));else if(!W&&M6==="low"&&!_X&&a-(c$||d$)>9000&&a-(c$||d$)<40000&&IQ<20)_X=!0,hK.quality("min"),dispatchEvent(new CustomEvent("mesa:calidad",{detail:"min"}))}PQ++,K.info.reset();let L0=document.documentElement.classList.contains("reduced");if(T0&&p8.elapsedTime>T0.at)U8={from:Z.position.clone(),to:T0.pos,fromTarget:X.target.clone(),toTarget:T0.target,t:0,dur:1.2},T0=null,X.minDistance=l0;let N0=0;if(t>=0){let R0=p8.elapsedTime-t;if(R0<0.5){let x0=0.0045*Math.exp(-R0*8)*Math.sin(R0*L6*18);g0.position.y=x0,PJ.position.y=x0,N0=L0?0:0.004*Math.exp(-R0*9),F.intensity=wX*(1+0.35*Math.exp(-R0*14))}else t=-1,g0.position.y=0,PJ.position.y=0,F.intensity=wX}if(U8){U8.t=Math.min(1,U8.t+i/(U8.dur||1.1));let R0=k8(U8.t);if(Z.position.lerpVectors(U8.from,U8.to,R0),X.target.lerpVectors(U8.fromTarget,U8.toTarget,R0),U8.t===1)U8=null}if(!L0)K0.rotation.z=Q0*3.5,x.rotation.z=Math.sin(Q0*0.47)*0.009,c0.update(Q0),EJ.update(Q0);let P0=u9,h0={dt:i,jugando:P0?.phase==="playing",turno:P0?.turn,habla:a8,hablaTipo:D6,foco:BQ,fin:y7,cabezas:I0.map((R0,x0)=>R0?.head?R0.head.getWorldPosition(x$[x0]):null)};if(l9)l9.update(i,{view:P0,habla:a8,cabezas:h0.cabezas}),h0.saludo=l9.saludo;for(let R0 of I0){if(!R0)continue;PK(R0,Q0,L0,h0),SJ(R0)}for(let R0=0;R0<A0.length;R0++)if((PQ+R0)%2===0)PK(A0[R0],Q0,L0,h0);G9=G9.filter((R0)=>{if(R0.elapsed+=i,R0.elapsed<0)return!0;let x0=Math.min(1,R0.elapsed/R0.duration);if(R0.revela!=null){R0.obj.visible=!0,CJ.add(R0.revela);let KJ=k8(x0);if(R0.obj.quaternion.slerpQuaternions(R0.qFrom,R0.qTo,KJ),R0.obj.position.lerpVectors(R0.from,R0.to,KJ),R0.obj.position.y+=Math.sin(x0*Math.PI)*0.012,x0>=1&&R0.ultima)dispatchEvent(new CustomEvent("mesa:aterriza",{detail:{revela:!0}}));return x0<1}if(R0.reparto)return R0.obj.position.lerpVectors(R0.from,R0.to,k8(x0)),R0.obj.position.y+=Math.sin(x0*Math.PI)*0.035,R0.obj.quaternion.slerpQuaternions(R0.qFrom,R0.qTo,k8(Math.min(1,Math.max(0,(x0-0.3)/0.7)))),x0<1;if(R0.obj.quaternion.slerpQuaternions(R0.qFrom,R0.qTo,k8(Math.min(1,x0/0.4))),R0.golpe){let KJ=Math.min(1,x0/0.62);R0.obj.position.lerpVectors(R0.from,R0.to,k8(KJ)),R0.obj.position.y+=x0<0.62?Math.sin(KJ*Math.PI/2)*0.17:0.17*(1-((x0-0.62)/0.38)**2)}else R0.obj.position.lerpVectors(R0.from,R0.to,k8(x0)),R0.obj.position.y+=Math.sin(x0*Math.PI)*0.07;if(x0>=1&&!R0.sono){if(R0.sono=!0,R0.golpe)t=p8.elapsedTime;dispatchEvent(new CustomEvent("mesa:aterriza",{detail:{golpe:!!R0.golpe}}))}return x0<1});let d0=a<p$;if(PJ.visible=!d0,!d0&&M8.children.length)B6(M8);if(j8(i),X.update(),!U8&&!T0&&!c)e();if(V8.frame(Q0,i,{reduced:L0,view:P0,ends:V6,temblor:N0}),V8.render(),PQ%2===0)for(let R0 of document.querySelectorAll("[data-seatlabel]")){let x0=Number(R0.dataset.seatlabel),[KJ,JJ]=k9[x0],BJ=I0[x0]?.head,xJ=BJ&&BJ.getWorldPosition(v7).distanceTo(V8.vista.position)<TN.distanceTo(V8.vista.position)-0.2;if(xJ)v7.y-=0.3;else if(BJ)v7.y+=0.23;else v7.set(KJ,1.45,JJ);let MJ=v7.project(V8.vista),A8=!1;if(!xJ&&MJ.y>0.8&&BJ)BJ.getWorldPosition(v7).y-=0.1,MJ=v7.project(V8.vista),A8=!0;let _N=Math.min(MJ.y,0.8);R0.style.transform=`translate(${(MJ.x*0.5+0.5)*innerWidth}px,${(-_N*0.5+0.5)*innerHeight}px) translate(-50%,${xJ?"-50%":A8?"0":"-100%"})`,R0.style.visibility=MJ.z>1||Math.abs(MJ.x)>1.1||MJ.y<-1.15?"hidden":"visible"}if(PQ%30===0||PQ===1){if(window.mesaDiagnostics={cam:Z.position.toArray().map((R0)=>+R0.toFixed(2)),fps:Math.round(IQ),drawCalls:K.info.render.calls,triangles:K.info.render.triangles,characters:t0,crowd:X7,gente:l9?+l9.ms.toFixed(2):null,visibleCrowd:A0.length,boardTiles:u9?.chain.length||0,quality:M6,modelErrors:s},AN){window.mesaRigDebug=I0.filter(Boolean).map((x0)=>({index:x0.index,head:x0.head?.getWorldPosition(ZJ()).toArray(),hip:x0.hips?.getWorldPosition(ZJ()).toArray(),rootScale:x0.root.scale.toArray()}));let R0=document.querySelector("#perf");if(R0)R0.textContent=`${Math.round(IQ)} fps · ${K.info.render.calls} draws`}}}window.mesaCamara=(w,i)=>{U8=null,T0=null,c=!0,X.minDistance=0.1,X.maxDistance=30,Z.position.set(...w),X.target.set(...i),X.update()},window.mesaCara=(w,i,Q0)=>{let a=I0[w];if(a)a.caraFija=i==null?null:{p:i,s:Q0??0}},window.mesaBeber=(w,i)=>{let Q0=I0[w];if(!Q0||!Q0.bebida||Q0.jugada)return;if(Q0.trago&&i!=null&&Q0.trago.fijo!=null)Q0.trago.fijo=i;else Q0.trago={t0:p8.elapsedTime,fijo:i}},window.mesaBrazo=(w)=>{let i=I0[w],Q0=i?.brazos?.[1];if(!Q0)return null;let a=(L0)=>L0.getWorldPosition(new _).toArray();return{codo:a(Q0.antebrazo),muneca:a(Q0.mano),vaso:i.bebida?i.bebida.group.position.toArray():null}},AX(null),bK();let SX=()=>{if(Z.aspect<0.95)Z.setViewOffset(innerWidth,innerHeight*1.24,0,innerHeight*0.24,innerWidth,innerHeight);else Z.clearViewOffset();Z.updateProjectionMatrix()},jX=()=>Y?0.65:M6==="min"?Math.min(devicePixelRatio,1)*0.55:M6==="low"?Math.min(devicePixelRatio,1)*0.8:Math.min(devicePixelRatio,1.5,1920/innerWidth),yX=()=>{Z.aspect=innerWidth/innerHeight,SX(),K.setPixelRatio(jX()),K.setSize(innerWidth,innerHeight),V8.resize(innerWidth,innerHeight)};SX(),window.addEventListener("resize",yX),X.addEventListener("start",()=>{U8=null,T0=null}),K.domElement.addEventListener("webglcontextrestored",()=>V8.entorno?.());let hK={update:AX,setCrowd:A,setCamera:i0,ready:o8,sampleTime(w){TX=w;for(let i of[...I0.filter(Boolean),...A0])PK(i,w,!1);V8.frame(w,0,{reduced:!1,view:u9,ends:V6}),V8.render()},setMode(w){g$=w,i0(w==="attract"?"attract":"table")},quality(w){M6=w;let i=w!=="high";F.castShadow=!i&&!Y;for(let[Q0,a]of z0){let L0=i?0:a.clearcoat,N0=i?0:a.sheen;if(Q0.clearcoat!==L0||Q0.sheen!==N0)Q0.clearcoat=L0,Q0.sheen=N0,Q0.needsUpdate=!0}N.visible=!i,U.intensity=i?H+0.1:H,K.setPixelRatio(jX()),V8.calidad(w),V8.resize(innerWidth,innerHeight)},pause(){u$=!0},resume(){if(!u$)return;if(u$=!1,p8.getDelta(),!zQ)bK()},dispose(){if(fK=!0,l9?.dispose(),V8.dispose(),window.removeEventListener("mesa:botvoice",MQ),zQ)cancelAnimationFrame(zQ);window.removeEventListener("resize",yX),X.dispose(),K.dispose(),J.replaceChildren()}};return hK}export{AM as createWorld};
